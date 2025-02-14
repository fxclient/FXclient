var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, bo, di, dj, a8, dk, a9, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, fa, fb, iC,
	iB, iD, a6P, l5, jb, a0I, tf, x1, aAE, a3S, a3T, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "   ", "<br>", "hidden", "flex", "Data", "1em", "0.8em", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", " / ",
		"undefined", "</a>", "pointer", "password", "function", "break-word", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "bold", "blur", "Space", "Player ",
		"NoStack", "50%", "1.2em", "0.4em", "0.0em 0.9em", " voted with ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)",
		"rgba(0,", "rgb(10,220,10)", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena",
		"account", "accept", "_blank", "Seed", "Report", "Reload", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em",
		"0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
			i.a6(1608), i.a7(1, 0), i.a7(6, 7), i.a7(2, z ? z.id : 3), i.a7(1, a8 ? 1 : 0), i.a7(1, a9 ? 1 : 0), i.a7(1, l ? l.m : 0);
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

function bp(bq) {
	l && !bq || (bs(), bJ = new bt, bI = new bu, b8 = new bv, b9 = new bw, aC = new bx, b5 = new by, bD = new bz, bE = new c0, aD = new c1, aE = new c2, aF = new c3, aG = new c4, aH = new c5, aI = new c6, aJ = new c7, aK = new c8, aL = new c9, aM =
		new cA, aN = new cB, aO = new cC, aP = new cD, aQ = new cE, aR = new cF, aS = new cG, aT = new cH, aU = new cI, aV = new cJ, aW = new cK, aX = new cL, aY = new cM, aZ = new cN, aa = new cO, ab = new cP, aj = new cQ, ak = new cR, al =
		new cS, ac = new cT, ad = new cU, ag = new cV, ae = new cW, af = new cX, ah = new cY, ax = new cZ, ai = new ca, an = new cb, ao = new cc, ap = new cd, ay = new ce, aw = new cf, am = new cg, aq = new ch, ar = new ci, at = new cj, h =
		new ck, au = new cl, av = new cm, az = new cn, b0 = new co, b1 = new cp, b2 = new cq, b3 = new cr, b4 = new cs, b6 = new ct, b7 = new cu, bA = new cv, bB = new a5, bC = new cw, bF = new cx, bG = new cy, bH = new cz, bK = new d0, bL =
		new d1, bM = new d2, bN = new d3, bO = new d4, bP = new d5, bQ = new d6, bR = new d7, s = new d8, bS = new d9, z = new dA, l = new dB, bg = new dC, bh = new dD, be = new dE, bf = new dF, bY = new dG, bZ = new dH, bT = new dI, bU = new dJ,
		bb = new dK, bc = new dL, bd = new dM, bi = new dN, ba = new dO, q = new dP, bj = new dQ, bk = new dR, bl = new dS, bm = new dT, bo = new dU, l.dW(), z.dW(), h.dX(), bh.dW(), b5.dW(), b5.dY(), (bV = new dZ).dW(), bj.dW(), b8.dW(), bT
	.dW(), ay.dW(), bD.dW(), bE.dW(), bQ.dW(), s.dW(), bW = new da, h.dW(), z.a0.db(), bd.dW(), ba.dW(), bU.dW(), bX = new dc, aw.dW(), ad.dd(), bS.dW(), an.dW(), aZ.dW(), aS.dW(), ah.dW(), bH.dW(), aa.dW(), bd.de = !0, setTimeout(function() {
			bQ.a6(2, 14071)
		}, 0), s.t(5, 5), bG.df() || z.a0.dg(), h.dh(), l.m = 1)
}

function dB() {
	this.dl = 1092, this.n = 2039, this.rVersion = 7, this.dW = function() {
		di = 2;
		var dm = bJ.dn(this.n, 10) % 100;
		dj = "15 Feb 2025 [" + bJ.dn(this.n, 1e3) + "." + (dm < 10 ? "0" : "") + dm + "." + this.n % 10 + "]", a8 = true, a9 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), dk = (new Date).getTime() % 1024
	}, this.m = 0
}

function dQ() {
	this.id = new dq, this.dW = function() {
		this.id.dW()
	}
}

function dq() {
	this.dW = function() {
		0 === bh.dr.data[181].value && (bh.dr.ds(180, Math.floor(Math.random() * bJ.pow(30))), bh.dr.ds(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function dt() {
	var du = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dv = [100, 60, 30, 15, 6, 1],
		dw = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		dx = [" kicked ", " muted ", " redacted the username of ", " deducted x from ", " seized x from ", " reported "],
		dy = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.dz = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["1 Elo Point", "2 Elo Points", "4 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.e0 = function(id, e1, e2) {
		e1 = this.e3(e1);
		return +(dw[e1][id] > e2)
	}, this.e3 = function(e1) {
		for (var aA = 0; aA < dv.length; aA++)
			if (dv[aA] <= e1) return aA;
		return dv.length
	}, this.e4 = function(e1) {
		return du[this.e3(e1)]
	}, this.e5 = function(id, e6) {
		return dx[id].replace(new RegExp("x", "g"), e6)
	}, this.e7 = function(id, e6) {
		return dy[id].replace(new RegExp("x", "g"), e6)
	}
}

function d9() {
	this.e8 = new e9, this.dW = function() {
		z.a0.eA()
	}
}

function e9() {
	this.show = function() {
		return !1
	}
}

function cS() {
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
		for (var f0 = af.f0[player], ea = f0.length, f1 = Math.max(bJ.dn(ea, 12), 1), ec = ab.ec, aA = 0; aA < ea; aA += f1)
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

function d2() {
	this.f5 = new Uint16Array(2), this.f6 = new Uint16Array(2), this.f7 = new Uint32Array(2), this.f8 = new Uint32Array(2), this.f9 = new Uint32Array(2), this.fA = new Uint8Array(4), this.fB = new Uint8Array(4), this.eb = new Uint32Array(4), this
		.fC = new Uint32Array(5), this.eW = new Uint32Array(8), this.fD = new Uint16Array(16), this.fE = new Uint16Array(512), this.fF = new Uint16Array(512), this.fG = new Uint16Array(512), this.fH = function(g, fI) {
			return g[0] = fI, g
		}, this.fJ = function(g, fI, fK) {
			return g[0] = fI, g[1] = fK, g
		}, this.fL = function(g, fI, fK, fM) {
			return g[0] = fI, g[1] = fK, g[2] = fM, g
		}, this.fN = function(g, fI, fK, fM, fO) {
			return g[0] = fI, g[1] = fK, g[2] = fM, g[3] = fO, g
		}
}

function fc() {
	fV = 0, fW = 2048, fX = new Uint32Array(4 * fW), fY = 0, fZ = new Uint32Array(fW), fa = new Uint8Array(bQ.el * bQ.em)
}

function fd(player) {
	fQ = player, fb = !1, fe(), ff();
	for (var aA = ac.fg(fQ) - 1; 0 <= aA; aA--) 0 === ac.fh(fQ, aA) && (fP = aA, fi());
	fb && fj()
}

function fj() {
	fk(), fl()
}

function fi() {
	fU = ac.fm(fQ, fP), fR = ac.fn(fQ, fP), fS = ac.fo(fQ, fP), fp(), (0 !== fV && (fr(), fs()) ? ft : fq)()
}

function fs() {
	if (!((fT = bJ.dn(fR, fV)) > aC.fu)) {
		if (!fS) return !1;
		var fv = fV * (1 + aC.fu);
		fR += b8.fw.fx(fQ, fv - fR), fT = bJ.dn(fR, fV)
	}
	return !0
}

function fr() {
	for (var aA = fV - 1; 0 <= aA; aA--) fa[bJ.dn(fX[aA], 4)] = 0
}

function fq() {
	1 === ac.fg(fQ) && aE.fy(fQ);
	var dm = b8.fw.fz(fQ, fR);
	bb.g0(fQ, fR - dm, 12), ac.g1(fQ, fP)
}

function fe() {
	for (var player = fQ, g2 = af.g2, ea = Math.min(g2[player].length, fW), g3 = 0, g4 = fZ, aA = ea - 1; 0 <= aA; aA--) g4[g3++] = g2[player][aA];
	fY = g3
}

function ff() {
	for (var aA = af.g2[fQ].length - 1; 0 <= aA; aA--) ab.eV(af.g2[fQ][aA]) && ab.g5(af.g2[fQ][aA], fQ);
	af.g2[fQ] = []
}

function fp() {
	fV = 0, (fU === aC.eX ? g6 : g7)()
}

function g7() {
	for (var g8, g9, aA, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (aA = fY - 1; 0 <= aA; aA--) g8 = fZ[aA] + ec[ed], g9 = bJ.dn(g8, 4), 0 === fa[g9] && ab.gA(g8) && ab.eS(g8) === fU && (fa[g9] = 1, fX[fV++] = g8)
}

function g6() {
	for (var g8, g9, aA, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (aA = fY - 1; 0 <= aA; aA--) g8 = fZ[aA] + ec[ed], g9 = bJ.dn(g8, 4), 0 === fa[g9] && ab.eR(g8) && (fa[g9] = 1, fX[fV++] = g8)
}

function ft() {
	gB() ? (gC(), fU !== aC.eX && gD()) : fq()
}

function gD() {
	gE(), gF(af.gG[fU]), gF(af.gH[fU]), bQ.eF(bQ.eG) && gF(af.f0[fU]), gI(af.g2[fU]), gJ(af.gH[fU]), gJ(af.f0[fU]), gK(), gL()
}

function gC() {
	fb = !0, ac.gM(fQ, fP, fR), ac.gN(fQ, fP), af.gO[fQ] += fV, gP(), gQ()
}

function gB() {
	return (fU === aC.eX ? gR : gS)()
}

function gS() {
	var gT = fV * aC.fu,
		gU = gV(),
		gW = gX(),
		gU = gT + 2 * gU + gW,
		gZ = fT * fV;
	return gU < gZ ? (fR -= gU, bb.g0(fQ, gU, 13), ga(gU - gT, gW), !0) : fS && 0 === gW ? (fR -= gZ, gZ += b8.fw.fx(fQ, gU - gZ + 1), bb.g0(fQ, gZ, 13), ga(gZ - gT, 0), !0) : (fR -= gZ, bb.g0(fQ, gZ, 13), ga(gZ - gT, gW), !1)
}

function ga(gZ, gW) {
	if (0 < gW) {
		if (gZ <= gW) return bb.g0(fU, gZ, 13), void ac.gb(fU, fQ, gW - gZ);
		ac.gb(fU, fQ, 0), gZ -= gW
	}
	gZ = bJ.dn(gZ, 2), gZ = Math.min(af.gc[fU], gZ), bb.g0(fU, gZ, 13), af.gc[fU] -= gZ
}

function gX() {
	return ac.gd(fU, fQ)
}

function gV() {
	return bJ.dn(fV * af.gc[fU], 1 + bJ.dn(10 * af.gO[fU], 16))
}

function gR() {
	var ge = fV * aC.fu;
	return fR -= ge, bb.g0(fQ, ge, 13), !0
}

function gQ() {
	for (var aA = fV - 1; 0 <= aA; aA--) af.g2[fQ].push(fX[aA]), af.gG[fQ].push(fX[aA]), ab.g5(fX[aA], fQ)
}

function d7() {
	var gf = 0,
		gg = 0;
	this.gh = function(eh, ej) {
		gf = eh, gg = ej
	}, this.gi = function(gj) {
		aC.gk || aL.gl || (b8.fw.gm(0) || b8.fw.gm(1)) && b8.fw.gn(aC.eK) && (aQ.go(gf, gg) ? aQ.gp = !1 : aO.go(gf, gg) || function(gj) {
			var gr = bK.gs(gf),
				gt = bK.gu(gg),
				eM = bK.ey(gr, gt),
				eE = bK.eQ(eM);
			bK.gv(gr, gt) && (aC.gw ? ab.eV(eE) && b6.gx.gy(eM) : ab.ef(eE) ? gj || (gr = al.eB.eD(eE)) && (gt = bK.eQ(gr), gt = ab.eR(gt) ? aC.eX : ab.eS(gt), b6.gx.h1(aQ.h2(), gr, gt)) : ab.h3(eE) || gj ? bL.h4.h5(aC.eK, eM) && b6.gx
				.h6(aQ.h2(), eM) : ab.eR(eE) ? h7(aC.eK) ? b6.gx.h8(aQ.h2(), aC.eX) : h9(aC.eK, aC.eX) ? az.hA(aC.eX, aQ.h2()) : bL.h4.h5(aC.eK, eM) && b6.gx.h6(aQ.h2(), eM) : (gr = ab.eS(eE)) !== aC.eK && (eT(gr, aC.eK) ? hB(aC.eK,
					gr) ? b6.gx.h8(aQ.h2(), gr) : h9(aC.eK, gr) ? az.hA(gr, aQ.h2()) : bL.h4.h5(aC.eK, eM) && b6.gx.h6(aQ.h2(), eM) : bL.h4.h5(aC.eK, eM) && b6.gx.h6(aQ.h2(), eM)))
		}(gj))
	}, this.hC = function() {
		if (!aC.gk && !aL.gl && b8.fw.gm(1)) {
			var g8 = aC.eK;
			if (b8.fw.gn(g8)) {
				var ea = ac.fg(g8);
				if (ea < 1) ! function() {
					var g8 = aC.eK;
					if (h7(g8)) b6.gx.h8(aQ.h2(), aC.eX);
					else
						for (var ec = ab.ec, gG = af.gG, ea = gG[g8].length, hM = Math.floor(Math.random() * ea), aA = 0; aA < ea; aA++)
							for (var hN = 3; 0 <= hN; hN--) {
								var hO = gG[g8][(aA + hM) % ea] + ec[hN];
								if (ab.gA(hO)) {
									hO = ab.eS(hO);
									if (hO !== g8 && (!aC.hQ || eT(g8, hO))) return b6.gx.h8(aQ.h2(), hO)
								}
							}
				}();
				else {
					for (var hE = 0, hF = ac.fn(g8, 0), aA = 1; aA < ea; aA++) {
						var hG = ac.fn(g8, aA);
						hG < hF && (hF = hG, hE = aA)
					}
					b6.gx.h8(aQ.h2(), ac.fm(g8, hE))
				}
			}
		}
	}, this.hH = function() {
		if (!aC.gk && !aL.gl && b8.fw.gn(aC.eK) && b8.fw.gm(1)) return au.hI ? au.hJ(aC.eK) ? void b6.gx.hK(1) : void 0 : void(au.hL(aC.eK) && b6.gx.hH())
	}
}

function hR(hS, size, hT, hU, font) {
	var aA, hX = .2,
		canvas = document.createElement("canvas"),
		hY = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hS, canvas.height = hS, hY.font = size + font, hY.textAlign = "center", hY.textBaseline = "middle", hY.fillStyle = "red", aA = 0; aA < hT.length; aA++) hY.fillText(hT[aA], .5 * hS, .5 * hS);
	return -1 < (canvas = function(hV) {
		var aA, e1, ed = hV.data;
		for (aA = ed.length - 4; 0 <= aA; aA -= 4)
			if (e1 = ed[aA], hU <= e1) return Math.floor(aA / (4 * hS));
		return -1
	}(hY.getImageData(0, 0, hS, hS))) && (hX = (canvas - .5 * hS + .1 * size) / size), Math.max(hX, 0)
}

function d0() {
	this.ha = new Int16Array(4), this.hb = new Int16Array(4), this.dW = function() {
		var aA;
		for (this.ha[0] = -bQ.el, this.ha[1] = 1, this.ha[2] = bQ.el, this.ha[3] = -1, aA = 0; aA < 4; aA++) this.hb[aA] = 4 * this.ha[aA]
	}, this.hc = function(gz, hd) {
		var he = this.ei(hd) - this.ei(gz),
			hd = this.ek(hd) - this.ek(gz),
			gz = he >>> 31 << 1;
		return 5 + gz + (1 - gz) * (1 - (hd >>> 31 << 1)) * (Math.abs(he) - Math.abs(hd) >>> 31) & 3
	}, this.hj = function(gz, hd, hN) {
		return hN % 2 == 0 ? hN + (1 - hN) * (1 - (this.ei(hd) - this.ei(gz) >>> 31 << 1)) + 4 & 3 : hN + (2 - hN) * (1 - (this.ek(hd) - this.ek(gz) >>> 31 << 1)) + 4 & 3
	}, this.hl = function(g8, eM) {
		for (var hd, hm, ho = af.gH[g8], ea = ho.length, i = bQ.el, hp = this.ei(eM), hq = this.ek(eM), eg = ho[0] >> 2, min = this.es(hp, hq, eg), aA = 1; aA < ea; aA++)(hm = (hm = hp - (hd = ho[aA] >> 2) % i) * hm + (hm = hq - ~~((.5 + hd) /
			i)) * hm) < min && (min = hm, eg = hd);
		return eg
	}, this.hr = function(player, eE) {
		return !ab.eR(eE) && player === ab.eS(eE)
	}, this.es = function(gr, gt, eM) {
		return (gr -= this.ei(eM)) * gr + (gt -= this.ek(eM)) * gt
	}, this.hs = function(ht, hu, hv) {
		ht = this.hx(ht) - this.hy(hv), hu = this.i0(hu) - this.i1(hv);
		return Math.sqrt(ht * ht + hu * hu)
	}, this.i2 = function(gz, hd) {
		var hw = this.ei(gz) - this.ei(hd),
			gz = this.ek(gz) - this.ek(hd);
		return Math.sqrt(hw * hw + gz * gz)
	}, this.i3 = function(gz, hd) {
		var hw = this.ei(gz) - this.ei(hd),
			gz = this.ek(gz) - this.ek(hd);
		return hw * hw + gz * gz
	}, this.i4 = function(i5, i6, i7, i8) {
		return (i5 -= i7) * i5 + (i6 -= i8) * i6
	}, this.i9 = function(g8, iA) {
		return bJ.dn(iA * af.gc[g8], 1e3)
	}, this.hx = function(ht) {
		return 16 * (ht + iB) / iC
	}, this.i0 = function(hu) {
		return 16 * (hu + iD) / iC
	}, this.iE = function(ed) {
		return 16 * ed / iC
	}, this.gs = function(ht) {
		return Math.floor((ht + iB) / iC)
	}, this.gu = function(hu) {
		return Math.floor((hu + iD) / iC)
	}, this.gv = function(gr, gt) {
		return 1 <= gr && 1 <= gt && gr < bQ.el - 1 && gt < bQ.em - 1
	}, this.ei = function(eM) {
		return eM % bQ.el
	}, this.ek = function(eM) {
		return bJ.dn(eM, bQ.el)
	}, this.ey = function(gr, gt) {
		return gt * bQ.el + gr
	}, this.iF = function(eM) {
		return this.ex(this.ei(eM), this.ek(eM))
	}, this.ex = function(gr, gt) {
		return 0 < gr && gr < bQ.el - 1 && 0 < gt && gt < bQ.em - 1
	}, this.eQ = function(eM) {
		return eM << 2
	}, this.eO = function(eE) {
		return eE >> 2
	}, this.iG = function(eM) {
		return bQ.el * this.ek(eM) * 256 + (this.ei(eM) << 4)
	}, this.iH = function(eM) {
		return this.iG(eM) + 8 + (bQ.el << 7)
	}, this.iI = function(hv) {
		return bQ.el * (this.i1(hv) >> 4) + (this.hy(hv) >> 4)
	}, this.iJ = function(hv) {
		hv = this.iI(hv);
		return (this.ei(hv) >> 5) + bL.iK.iL * (this.ek(hv) >> 5)
	}, this.hy = function(hv) {
		return hv % (bQ.el << 4)
	}, this.i1 = function(hv) {
		return bJ.dn(hv, bQ.el << 4)
	}, this.iM = function(eM, hN) {
		return eM + this.ha[hN]
	}, this.iN = function(eE, hN) {
		return eE + this.hb[hN]
	}, this.iO = function(player) {
		return this.ey(af.iP[player] + af.iQ[player] >> 1, af.iR[player] + af.iS[player] >> 1)
	}, this.iT = function(player) {
		return this.ey(aw.iU(af.iP[player], af.iQ[player]), aw.iU(af.iR[player], af.iS[player]))
	}
}

function cg() {
	this.iV = new iW, this.iX = new iY, this.iZ = new ia, this.performance = new ib, this.ic = new ie, this.ig = new ih, this.ii = new ij, this.dW = function() {
		this.iV.dW(), this.iZ.dW(), this.performance.dW(), this.ic.dW(), this.ig.dW()
	}, this.ik = function() {
		this.performance.ik(), this.iV.ik()
	}
}

function ie() {
	var il, io = new Uint16Array(8);

	function ix(size, player) {
		for (var aA = af.g2[player].length - 1; size <= aA; aA--) ab.j4(af.g2[player][aA], player)
	}
	this.dW = function() {
		il = 0
	}, this.ip = function(player, iq) {
		return bM.eW[1] = af.g2[player].length, bM.eW[0] === aC.eX ? am.ic.ir(player) : this.is(player, bM.eW[0]), (0 !== bM.eW[1] || 0 !== af.g2[player].length) && !(!iq && bM.eW[1] === af.g2[player].length || (bM.eW[0] === aC.eX ? af.it[
			player]++ : af.iu[player]++, 0))
	}, this.iv = function(player) {
		aC.hQ && (am.ig.iw[player] = 1), ix(bM.eW[1], player), ac.iy(player, bM.f8[0], bM.eW[0]), aE.iz(player, !1)
	}, this.j0 = function(player, j1, ea, hF) {
		var j2 = bJ.dn(12 * af.gc[player], 1024);
		hF -= hF >= bJ.dn(af.gc[player], 2) ? j2 : 0, ix(ea, player), ac.iy(player, hF, j1), af.gc[player] -= hF + j2, aE.iz(player, !1)
	}, this.is = function(player, j1) {
		for (var hN, ec = ab.ec, aA = af.gG[player].length - 1; 0 <= aA; aA--)
			if (ab.j3(af.gG[player][aA]))
				for (hN = 3; 0 <= hN; hN--)
					if (ab.gA(af.gG[player][aA] + ec[hN]) && ab.eS(af.gG[player][aA] + ec[hN]) === j1) {
						af.g2[player].push(af.gG[player][aA]);
						break
					}
	}, this.ir = function(player) {
		for (var ec = ab.ec, aA = af.gG[player].length - 1; 0 <= aA; aA--)
			if (ab.j3(af.gG[player][aA]))
				for (var hN = 3; 0 <= hN; hN--)
					if (ab.eR(af.gG[player][aA] + ec[hN])) {
						af.g2[player].push(af.gG[player][aA]);
						break
					}
	}, this.j5 = function(player, j6) {
		var aA, et, hN, hP, ea = af.gG[player].length,
			hk = 256 <= ea ? 12 : 32 <= ea ? 6 : 1,
			j7 = ea - 1 - aw.j8(hk),
			ec = ab.ec;
		il = 0;
		loop: for (aA = j7; 0 <= aA; aA -= hk)
			for (hN = 3; 0 <= hN; hN--)
				if ((hP = ab.eR(af.gG[player][aA] + ec[hN]) ? aC.eX : ab.eS(af.gG[player][aA] + ec[hN])) === aC.eX || ab.gA(af.gG[player][aA] + ec[hN]) && hP !== player && (j6 || eT(player, hP))) {
					for (et = il - 1; 0 <= et; et--)
						if (io[et] === hP) continue loop;
					if (io[il] = hP, 8 <= ++il) return !0
				}
		return 0 < il
	}, this.j9 = function(player, j6) {
		var aA, hN, hP, ec = ab.ec;
		for (il = 0, aA = af.gG[player].length - 1; 0 <= aA; aA--)
			for (hN = 3; 0 <= hN; hN--)
				if ((hP = ab.eR(af.gG[player][aA] + ec[hN]) ? aC.eX : ab.eS(af.gG[player][aA] + ec[hN])) === aC.eX || ab.gA(af.gG[player][aA] + ec[hN]) && hP !== player && (j6 || eT(player, hP))) return io[il++] = hP, !0;
		return !1
	}, this.jA = function() {
		for (var eu, aA = il - 1; 0 <= aA; aA--)
			if (io[aA] === aC.eX) {
				for (il--, eu = aA; eu < il; eu++) io[eu] = io[eu + 1];
				return !0
			} return !1
	}, this.jB = function(player) {
		for (var eu, aA = il - 1; 0 <= aA; aA--)
			if (ac.jC(player, io[aA]))
				for (il--, eu = aA; eu < il; eu++) io[eu] = io[eu + 1];
		return 0 === il
	}, this.jD = function() {
		for (var aA = il - 1; 0 <= aA; aA--)
			if (b8.fw.jE(io[aA])) return !0;
		return !1
	}, this.jF = function() {
		for (var aA = il - 1; 0 <= aA; aA--) b8.fw.jE(io[aA]) || (io[aA] = io[--il]);
		return 0 < il
	}, this.jG = function(player) {
		for (var eu, jH = io[0], jI = af.gc[jH] + ac.gd(jH, player), aA = il - 1; 1 <= aA; aA--)(eu = af.gc[io[aA]] + ac.gd(io[aA], player)) < jI && (jH = io[aA], jI = eu);
		return jH
	}, this.jJ = function(player) {
		var j, jK = io[0];
		if (1 !== il)
			for (var jL = bJ.dn(af.iQ[player] + af.iP[player], 2), jM = bJ.dn(af.iS[player] + af.iR[player], 2), eq = jN(jL - bJ.dn(af.iQ[jK] + af.iP[jK], 2)) + jN(jM - bJ.dn(af.iS[jK] + af.iR[jK], 2)), aA = il - 1; 1 <= aA; aA--)(j = jN(jL - bJ
				.dn(af.iQ[io[aA]] + af.iP[io[aA]], 2)) + jN(jM - bJ.dn(af.iS[io[aA]] + af.iR[io[aA]], 2))) < eq && (eq = j, jK = io[aA]);
		return jK
	}, this.jO = function() {
		for (var jP = io, jQ = jP[0], gc = af.gc, jR = gc[jQ], aA = il - 1; 1 <= aA; aA--) {
			var g8 = jP[aA],
				eu = gc[g8];
			jR < eu && (jQ = g8, jR = eu)
		}
		return jQ
	}, this.jS = function() {
		return io[aw.j8(il)]
	}
}

function ih() {
	function jh(player, j1, jX) {
		3 <= jX && 2142 < bd.jn() && (j1 === aC.eX || af.gc[j1] < bJ.dn(af.gc[player], 20)) && aD.jc(player, 20)
	}

	function jk(player, hF, j1, jX) {
		3 <= jX && jX < 6 && bJ.dn(af.gc[player], 8) > af.gc[j1] && (hF = Math.max(bJ.dn(11 * af.gc[j1], 5), bJ.dn(af.gc[player], 10)));
		jX = af.g2[player].length;
		am.ic.is(player, j1), am.ic.j0(player, j1, jX, hF)
	}

	function jg(player, hF) {
		var j1 = aC.eX,
			ea = af.g2[player].length;
		am.ic.ir(player), af.g2[player].length !== ea && am.ic.j0(player, j1, ea, hF)
	}
	this.iw = new Uint8Array(aC.eX), this.dW = function() {
		this.iw.fill(0)
	}, this.jT = function(player, hF) {
		var jV, jX, jY, jZ;
		ac.jU(player) && (jV = ad.jW(player), 3 <= (jX = aD.hF[player]) && jX < 6 && (hF = Math.max(af.gc[player] - jV, hF)), jY = af.gH[player].length, jZ = af.gG[player].length, 30 * af.gO[player] > aC.ja && jb[player] < 10 && 100 * jZ <= jY &&
			aD.jc(player, 10), aC.hQ ? function(player, hF, jX, jV) {
				var j1;
				if (am.ig.iw[player] = 1, am.ic.j5(player, !1) || am.ic.j9(player, !1)) {
					if (!am.ic.jB(player))
						if (am.ic.jA()) jg(player, hF), jh(player, aC.eX, jX);
						else {
							if (aw.ji(aD.jj[jX])) j1 = am.ic.jG(player);
							else {
								if (am.ic.jD() && aw.ji(aD.jl[jX]) && am.ic.jF(), 6 === jX) return jk(player, hF, am.ic.jS(), jX);
								j1 = am.ic.jJ(player)
							}
							jk(player, hF, j1, jX), jh(player, j1, jX)
						}
				} else bL.je.ik(player) || am.ii.ik(player) || (am.ig.iw[player] = 0, function(player, hF, jX, jV) {
					var aA, eu, ev, eY = be.eY,
						jo = eY[player];
					if (0 !== jo) {
						var jp = af.gc[player],
							gO = af.gO;
						if (player < aC.jq && (hF = jp), !(jp < gO[player] || 5 === jX && jp < jV || 4 === jX && jp < bJ.dn(jV, 2))) {
							var ea = ak.jr,
								js = ak.js,
								iw = (aA = aw.j8(ea), am.ig.iw);
							for (eu = 0; eu < ea; eu++)
								if (ev = js[(eu + aA) % ea], 1 === iw[ev] && eY[ev] === jo) return b6.jt.ju(player, ev, hF)
						}
					}
				}(player, hF, jX, jV))
			}(player, hF, jX, jV) : (!jZ || jY && (jY < jZ && !aw.j8(10) || 100 * jZ <= jY && aw.j8(3) || !aw.j8(8))) && bL.je.ik(player) || function(player, hF, jX) {
				am.ic.j5(player, !0) || am.ic.j9(player, !0) ? am.ic.jB(player) || (am.ic.jA() ? jg(player, hF) : aw.ji(aD.jj[jX]) ? jk(player, hF, am.ic.jG(player), jX) : 5 === jX ? jk(player, hF, am.ic.jO(), jX) : (am.ic.jD() && aw.ji(aD
					.jl[jX]) && am.ic.jF(), jk(player, hF, 6 === jX ? am.ic.jS() : am.ic.jJ(player), jX))) : am.ii.ik(player)
			}(player, hF, jX))
	}
}

function c1() {
	var jv = new Uint8Array(aC.eX),
		jw = new Uint16Array(aC.eX),
		jx = new Uint16Array(aC.eX),
		jy = new Uint8Array(aC.eX),
		jz = (this.hF = new Uint8Array(aC.eX), new Uint16Array(aC.eX)),
		k0 = new Uint16Array(aC.eX);

	function kE(aA) {
		jv[aA] = 1 + bJ.dn(jz[aA] * aw.random(), 10 * aw.value(100))
	}
	this.k1 = null, this.jl = [97, 94, 70, 40, 20, 0, 100], this.k2 = [500, 450, 400, 300, 80, 50, 100], this.jj = [0, 0, 5, 25, 50, 100, 0], this.k3 = [60, 74, 112, 200, 256, 512, 512], this.k4 = [1, 2, 3, 4, 6, 8, 1], this.k5 = [500, 450, 400, 300,
		80, 50, 100
	], this.dX = function() {
		this.k1 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dW = function() {
		jv.fill(0), jw.fill(0), jx.fill(0), jy.fill(0), this.hF.fill(0), jz.fill(0), k0.fill(0);
		var k6 = aC.jq;
		if (9 === aC.k7) this.k8();
		else if (__fx.customLobby.isActive())
			for (aA = aC.kB - 1; 0 <= aA; aA--) this.hF[aA + k6] = __fx.customLobby.gameInfo.difficulty;
		else if (aC.k9)
			if (3 === aC.data.botDifficultyType)
				for (aA = aC.kB - 1; 0 <= aA; aA--) {
					var hO = aA + k6;
					this.hF[hO] = aC.data.botDifficultyData[hO]
				} else if (2 === aC.data.botDifficultyType)
					for (aA = aC.kB - 1; 0 <= aA; aA--) this.hF[hO = aA + k6] = aC.data.botDifficultyTeam[be.kC[be.eY[hO]]];
				else if (1 === aC.data.botDifficultyType) {
			var kD = this.k1.length;
			for (aA = aC.kB - 1; 0 <= aA; aA--) this.hF[aA + k6] = aA % kD
		} else
			for (kD = aC.data.botDifficultyValue, aA = aC.kB - 1; 0 <= aA; aA--) this.hF[aA + k6] = kD;
		else
			for (var kA = 8 === aC.k7 ? 1 : 0, aA = aC.kB - 1; 0 <= aA; aA--) this.hF[aA + k6] = kA;
		for (aA = 0; aA < k6; aA++) this.hF[aA] = 6;
		var ea = aC.eX;
		for (aA = 0; aA < ea; aA++) this.hF[aA] <= 2 ? (jy[aA] = 5, jz[aA] = k0[aA] = 1040, 0 === this.hF[aA] ? (jw[aA] = 980, jx[aA] = 980) : 1 === this.hF[aA] ? (jw[aA] = 980, jx[aA] = 920, jz[aA] = k0[aA] = 1100) : (jw[aA] = 825, jx[aA] =
			750)) : this.hF[aA] <= 4 ? (jy[aA] = 1 + aw.j8(20), 3 === this.hF[aA] ? (jw[aA] = jx[aA] = 500, jz[aA] = k0[aA] = 1e3) : (k0[aA] = 250 + aw.j8(1501), jz[aA] = 500 + aw.j8(501), jw[aA] = 300 + aw.j8(201), jx[aA] = 100 + aw.j8(
			201))) : this.hF[aA] <= 5 ? (jz[aA] = 1e3, k0[aA] = 1e3, jy[aA] = 35 + aw.j8(16), jw[aA] = 300 + aw.j8(201), jx[aA] = 50 + aw.j8(101)) : (jz[aA] = k0[aA] = 800, jy[aA] = 5, jw[aA] = 10, jx[aA] = 250), kE(aA)
	}, this.k8 = function() {
		for (var eE = ax.kF, k6 = aC.jq, aA = eE - 1; 0 <= aA; aA--) this.hF[aA + k6] = 0;
		for (var eu = 0; eu < 6; eu++) {
			for (aA = eE + ax.kG[eu] - 1; eE <= aA; aA--) this.hF[aA + k6] = eu;
			eE += ax.kG[eu]
		}
	}, this.jc = function(g8, value) {
		jv[g8] = Math.min(value, jv[g8])
	}, this.ik = function(g8) {
		0 == --jv[g8] && ! function(g8) {
			(function(g8) {
				jz[g8] !== k0[g8] && (jz[g8] += jz[g8] < k0[g8] ? 3 : -3);
				jw[g8] !== jx[g8] && (jw[g8] += jw[g8] < jx[g8] ? jy[g8] : -jy[g8], jw[g8] = (Math.abs(jw[g8] - jx[g8]) <= jy[g8] ? jx : jw)[g8]);
				jv[g8] = bJ.dn(jz[g8], 10)
			})(g8), am.ig.jT(g8, bJ.dn(jw[g8] * af.gc[g8], 1e3))
		}(g8)
	}, this.kJ = function(g8, g3) {
		jz[g8] = k0[g8] = g3
	}
}

function ia() {
	var kK = new Uint16Array(aC.eX);

	function kP(player, kN) {
		for (var ea = bM.f6[0], fD = bM.fD, kZ = -1, ka = aC.eX, aA = 0; aA < ea; aA++) {
			var eq, g8 = fD[aA];
			eT(player, g8) && (eq = bK.i3(kN, bK.iO(g8)), -1 === kZ || eq < kZ) && (kZ = eq, ka = g8)
		}
		return ka
	}

	function kR(kO, kN) {
		if (kO === aC.eX) return 0;
		for (var gH = af.gH[kO], kY = gH.length, ea = Math.min(kY, 10), ka = 0, kZ = bK.i3(gH[ka] >> 2, kN), aA = 0; aA < ea; aA++) {
			var hO = aw.j8(kY),
				eq = bK.i3(gH[hO] >> 2, kN);
			eq < kZ && (kZ = eq, ka = hO)
		}
		return gH[ka] >> 2
	}

	function kU(player, kN, j1, kd) {
		var ke;
		(kd === aC.eX || (ke = bK.iO(j1), kd = bK.iO(kd), bK.i3(kN, ke) < bK.i3(kN, kd))) && (kK[player] = j1)
	}
	this.dW = function() {
		kK.fill(aC.eX)
	}, this.ik = function(player) {
		var kN, kQ, kO, j1 = function(player) {
			var j1 = kK[player];
			if (j1 !== aC.eX) {
				if (b8.fw.kc(j1)) return j1;
				kK[player] = aC.eX
			}
			return aC.eX
		}(player);
		return function(player) {
			for (var kX = ak.js, kY = ak.jr, ea = Math.min(kY, kY < 17 && 5 === aw.j8(20) ? 1 : 16), g9 = aw.j8(kY), fD = bM.fD, gH = af.gH, g3 = 0, aA = 0; aA < ea; aA++) {
				var g8 = kX[(aA + g9) % kY];
				g8 !== player && gH[g8].length && (fD[g3++] = g8)
			}
			bM.f6[0] = g3
		}(player), 0 !== bM.f6[0] && (0 < (kQ = kR(kO = kP(player, kN = bK.iT(player)), kN)) && bL.kS.kT(player, kQ) ? (kU(player, kN, kO, j1), !0) : 0 < (kO = function(player, kN) {
			for (var ea = bM.f6[0], fD = bM.fD, kb = kK, g9 = 0, aA = 0; aA < ea; aA++) {
				var g8 = fD[aA],
					g8 = kb[g8];
				g8 !== aC.eX && b8.fw.kc(g8) && player !== g8 && eT(player, g8) && (fD[g9++] = g8)
			}
			return 0 !== (bM.f6[0] = g9) ? kR(kP(player, kN), kN) : 0
		}(player, kN)) && bL.kS.kT(player, kO) ? (kU(player, kN, ab.eS(kO << 2), j1), !0) : !!(0 < (kQ = kR(j1, kN)) && bL.kS.kT(player, kQ)))
	}
}

function ij() {
	function ki(player) {
		for (var f0 = af.f0[player], ea = f0.length, f1 = Math.max(bJ.dn(ea, 12), 1), ec = ab.ec, e1 = aw.j8(ea), aA = 0; aA < ea; aA += f1)
			for (var eP = f0[(aA + e1) % ea], ed = 3; 0 <= ed; ed--) {
				var ee = eP + ec[ed];
				if (ab.ef(ee)) return {
					eE: ee,
					id: ab.eI(ee),
					g8: player
				}
			}
		return null
	}

	function kn(player, kp) {
		var hF = b8.fw.kq(player, aD.k5[aD.hF[player]]);
		af.g2[player].push(kp.eE), ac.iy(player, hF, kp.g8), aE.iz(player, !0)
	}
	this.ik = function(player) {
		return !!bQ.eF(bQ.eG) && !!aC.data.passableMountains && 0 !== af.f0[player].length && function(player) {
			var kh = ki(player);
			if (null === kh) return !1;
			! function(player) {
				for (var js = ak.js, jr = ak.jr, ea = Math.min(jr, 12), g9 = aw.j8(jr), fD = bM.fD, f0 = af.f0, g3 = 0, aA = 0; aA < ea; aA++) {
					var g8 = js[(aA + g9) % jr];
					g8 !== player && f0[g8].length && eT(player, g8) && (fD[g3++] = g8)
				}
				bM.f6[0] = g3
			}(player);
			var kk = function(eH) {
				for (var ea = bM.f6[0], fD = bM.fD, aA = 0; aA < ea; aA++) {
					var kp = ki(fD[aA]);
					if (null !== kp && kp.id === eH) return kp
				}
				return null
			}(kh.id);
			return null !== kk ? (kn(player, kk), !0) : function(player, eH) {
				var ea = am.iV.ko;
				if (0 !== ea)
					for (var eE = am.iV.dr[aw.j8(ea)] << 2, ec = ab.ec, ed = aw.j8(4);;) {
						if (eE += ec[ed], ab.ef(eE)) {
							if (ab.eI(eE) === eH) return kn(player, {
								eE: eE,
								g8: aC.eX
							}), !0;
							break
						}
						if (!ab.eR(eE)) break
					}
				return !1
			}(player, kh.id)
		}(player)
	}
}

function iY() {
	this.ik = function(player) {
		var eM = function(player) {
			var ea = am.iV.ko;
			if (0 === ea) return -1;
			for (var kY = Math.min(ea, am.performance.ks ? ea : 10), dr = am.iV.dr, j7 = bJ.dn(aw.random() * ea, aw.value(100)), e = j7 + kY, kt = aw.iU(af.iP[player], af.iQ[player]), ku = aw.iU(af.iR[player], af.iS[player]), ka = -1, eq = bK
					.i4(0, 0, bQ.el, bQ.em), aA = j7; aA < e; aA++) {
				var g9 = aA % ea,
					kv = bK.es(kt, ku, dr[g9]);
				kv < eq && (eq = kv, ka = g9)
			}
			return -1 !== ka ? dr[ka] : -1
		}(player);
		return -1 !== eM && bL.kS.kT(player, eM)
	}
}

function ib() {
	this.ks = 0, this.dW = function() {
		this.ks = 0
	}, this.ik = function() {
		if (!this.ks && bd.jn() % 30 == 7 && b8.fw.ky(80) && (am.performance.ks = 1)) {
			if (aC.hQ) {
				var l1 = bf.l2();
				if (be.kC[l1]) {
					bf.l3(l1);
					var g = bM.fE,
						ea = bM.f6[0];
					if (0 !== ea)
						for (var l4 = Math.min(100 + 10 * (ea - 1), 400), aA = 0; aA < ea; aA++) aD.kJ(g[aA], l4)
				}
			}
			aD.kJ(l5[0], 100)
		}
	}
}

function iW() {
	var l6 = 0,
		l7 = 0,
		l8 = 300,
		l9 = 300;
	this.ko = 0, this.dr = new Uint32Array(512), this.dW = function() {
		l7 = l6 = 0, this.ko = 0
	}, this.ik = function() {
		if (function() {
				var ea = am.iV.ko;
				if (0 === ea) return 1;
				var dr = am.iV.dr;
				if (bd.jn() % 35 == 6) {
					for (var aA = ea - 1; 0 <= aA; aA--) ab.eR(dr[aA] << 2) || (ea--, dr[aA] = dr[ea]);
					am.iV.ko = ea
				}
				return ea < dr.length
			}())
			if (l8 <= l6) am.iV.ko || bd.jn() % 12 != 8 || b8.fw.lD() || am.iV.dW();
			else {
				var aA, i = bQ.el,
					lE = i - 2,
					ea = lE * (bQ.em - 2),
					lF = l8,
					dr = am.iV.dr,
					kY = am.iV.ko,
					lG = dr.length,
					g9 = Math.min(l7 + lF * ((1 + 19 * am.performance.ks) * l9), ea);
				for (aA = l7; aA < g9; aA += lF) {
					var eE = 4 * (aA % lE + (bJ.dn(aA, lE) + 1) * i + 1);
					if (ab.eR(eE) && (dr[kY] = eE >> 2, ++kY === lG)) {
						aA += lF;
						break
					}
				}(l7 = aA) >= ea && (l7 = ++l6), am.iV.ko = kY
			}
	}
}

function lH() {
	aM.ik(), ae.ik(), aV.lI(), ay.x.ik()
}

function lJ() {
	az.ik(), aF.ik(), ad.ik(), b2.ik(), aE.ik(), am.ik(), bL.x.ik(), ak.lK(), aU.ik(), ax.ik(), bT.ik(), ae.ik(), ae.lL(), aV.ik(), bN.ik(), aT.ik(), aO.ik(), aM.ik(), b3.ik(), aQ.ik(), au.ik(), bb.ik(), bf.ik(), ay.x.ik(), ay.lM.ik(), s.ik(), b7
	.ik(), bd.ik()
}

function lN() {
	aG.ik(), aW.ik(), aP.ik(), at.ik(), bA.ik(), av.lO()
}

function lP() {
	aU.lQ(!1), aO.lQ(), aV.lQ(!1), aT.lQ(), aQ.lQ(), au.lQ(), ae.lQ(!1), bf.lR()
}

function lS() {
	ae.lQ(!1) && (bd.de = !0), ay.x.ik()
}

function c2() {
	var lT, lU, lV;

	function lX(lZ) {
		for (var aA = lT - 1; 0 <= aA; aA--) 0 === lV[lU[aA]] && af.gO[lU[aA]] >= lZ && fd(lU[aA])
	}

	function lW(player) {
		var dm;
		64 === lV[player] ? lV[player] = 6 : (dm = af.gO[player], lV[player] = dm < 1e3 ? 3 : dm < 1e4 ? 2 : dm < 6e4 ? 1 : 0)
	}
	this.dW = function() {
		lT = 0, lU = new Uint16Array(aC.eX), lV = new Uint8Array(aC.eX)
	}, this.ik = function() {
		for (var aA = lT - 1; 0 <= aA; aA--) 64 === lV[lU[aA]] ? lW(lU[aA]) : 0 == lV[lU[aA]]-- && (lW(lU[aA]), fd(lU[aA]));
		16e4 <= af.gO[l5[0]] && (lX(16e4), 3e5 <= af.gO[l5[0]]) && lX(3e5), b8.fw.kc(aC.eK) && (bb.la[7] = Math.max(af.gO[aC.eK], bb.la[7]))
	}, this.fy = function(player) {
		for (var et, aA = lT - 1; 0 <= aA; aA--)
			if (player === lU[aA]) {
				for (lT--, et = aA; et < lT; et++) lU[et] = lU[et + 1];
				return
			}
	}, this.iz = function(player, lb) {
		for (var aA = lT - 1; 0 <= aA; aA--)
			if (player === lU[aA]) return;
		lU[lT++] = player, lV[player] = lb ? 2 : 64
	}
}

function c3() {
	var size, je;
	this.dW = function() {
		size = aC.kB, je = new Uint16Array(aC.eX);
		for (var jq = aC.jq, aA = aC.kB - 1; 0 <= aA; aA--) je[aA] = jq + aA
	}, this.ik = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === af.le[je[aA]]) {
				et = void 0;
				var et = aA;
				size--, je[et] = je[size]
			} else aD.ik(je[aA])
	}, this.ld = function(g8) {
		je[size++] = g8
	}
}

function c4() {
	var lg, lh, li, lj, lk, ll, lm, ln, lo, lp, lq, lr, ls, lt = !1,
		lu = !1;

	function lv(lw) {
		lr = bd.lx, li = lj = lh = 0, lk = (ls = 33) / lw, lg = 1 / (lw / ls / 4), ll = (h.i / 2 + iB) / iC, lm = (h.j / 2 + iD) / iC, ln = iC
	}

	function m4(aA) {
		var m7; - 1 !== aA && (aA = bK.iI(bL.x.m6[aA]), m7 = bK.ei(aA) - 10, aA = bK.ek(aA) - 10, aG.m0(m7, aA, 19 + m7, 19 + aA))
	}

	function mI(e6) {
		Math.abs(Math.log(lq / ln)) < .125 && (lq = e6 * ln)
	}

	function mH(m7, m8, mK, mL) {
		lo = (m7 + mK + 1) / 2, lp = (m8 + mL + 1) / 2;
		mK = h.i / (mK - m7 + 1), m7 = h.j / (mL - m8 + 1);
		lq = .9 * (mK < m7 ? mK : m7)
	}
	this.ly = function() {
		return lt
	}, this.lz = function() {
		lv(1), this.m0(0, 0, bQ.el - 1, bQ.em - 1), aC.gw || aC.gk || this.m1(aC.eK, 3e3, !0, .3)
	}, this.m2 = function(player, m3) {
		m4(bL.h4.m5(player, m3))
	}, this.m1 = function(player, lw, m9, zoom) {
		aC.mA || lt && !m9 && lu || (0 === af.gO[player] ? m4(bL.h4.mB(player)) : (aR.mC = !1, lu = m9, lv(lw), function(player) {
			lo = (af.iP[player] + af.iQ[player] + 1) / 2, lp = (af.iR[player] + af.iS[player] + 1) / 2
		}(player), function(zoom, player) {
			var hw = af.iQ[player] - af.iP[player] + 1,
				player = af.iS[player] - af.iR[player] + 1,
				et = h.i / hw,
				eu = h.j / player,
				et = (lq = et < eu ? et : eu, 0 !== zoom ? zoom : hw < 20 && player < 20 ? .5 : .9);
			lq *= et, mI(7 / 8)
		}(zoom, player), lt = !0, ap.mF()))
	}, this.mG = function(lw) {
		aC.gk || aC.mA || (aR.mC = !1, lu = !1, lv(lw), mH(0, 0, bQ.el - 1, bQ.em - 1), mI(7 / 8), lt = !0, ap.mF())
	}, this.m0 = function(m7, m8, mK, mL) {
		mH(m7, m8, mK, mL), iC = lq, aR.mM(lo, h.i / 2), aR.mN(lp, h.j / 2), bY.mO(), bd.de = !0
	}, this.mP = function() {
		return !(lt && lu || (lt = !1))
	}, this.ik = function() {
		var mS, mT, ed, mW;
		lt && (lh < .5 ? lj < lk && (lj += lk * lg, li = lh) : 1 - li < lh && (lj = (lj -= lk * lg) < lk * lg ? lk * lg : lj), lr = lr >= bd.lx ? bd.lx - 1 : lr, ed = bd.lx - lr, lh = 1e3 < ed || 1 < (lh += lj * ed / ls) ? 1 : lh, lr = bd.lx,
			ed = iC, mS = iB, mT = iD, ed = (iC = ln * Math.pow(lq / ln, lh)) / ed, mW = 1 - (ln * Math.pow(lq / ln, 1 - lh) - ln) / (lq - ln), aR.mM(ll + mW * (lo - ll), h.i / 2), aR.mN(lm + mW * (lp - lm), h.j / 2), ae.zoom(ed, (mS * ed -
				iB) / (1 - ed), (mT * ed - iD) / (1 - ed)), bY.mO(), 1 <= lh && (lt = !1, bZ.mX = !0), bd.de = !0)
	}
}

function bw() {
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
			0, .75), this.nm = ev.mb(70, 40, 0, .85), this.nn = ev.mZ(255, 150, 0), this.no = ev.mb(0, 0, 0, 0), this.np = ev.mb(255, 255, 255, 0), this.nq = ev.mb(254, 254, 254, 0)
}

function ct() {
	this.gx = new nr, this.fw = new ns, this.nt = new nu, this.nv = new nw, this.jt = new nx
}

function nr() {
	this.gy = function(eM) {
		aC.k9 ? b6.nt.gy(aC.eK, eM) : ay.ny.nz(eM)
	}, this.h8 = function(iA, j1) {
		aC.k9 ? b6.nt.h8(aC.eK, iA, j1) : ay.ny.o0(iA, j1)
	}, this.o1 = function(iA, o2) {
		aC.k9 ? b6.nt.o3(aC.eK, iA, o2) : ay.ny.o4(iA, o2)
	}, this.h6 = function(iA, eM) {
		aC.k9 ? b6.nt.h6(aC.eK, iA, eM) : bL.h4.h5(aC.eK, eM) && ay.ny.o5(iA, eM)
	}, this.o6 = function(m3, eM) {
		aC.k9 ? b6.nt.o6(aC.eK, m3, eM) : bL.h4.o7(aC.eK, m3, eM) && ay.ny.o8(m3, eM)
	}, this.o9 = function(j1) {
		aC.k9 ? b6.nt.o9(aC.eK, j1) : ay.ny.oA(j1)
	}, this.oB = function(oC) {
		aC.k9 ? b6.nt.oD(aC.eK, oC) : ay.ny.oE(oC)
	}, this.hK = function(oF) {
		aC.k9 ? b6.nt.hK(aC.eK, oF) : ay.ny.oG(oF)
	}, this.oH = function() {
		aC.k9 ? b6.nt.oH(aC.eK) : ay.ny.oI()
	}, this.hH = function() {
		aC.k9 ? b6.nt.hH(aC.eK) : ay.ny.o5(1, 0)
	}, this.h1 = function(iA, eM, j1) {
		aC.k9 ? b6.nt.h1(aC.eK, iA, eM, j1) : ay.ny.oJ(iA, eM, j1)
	}
}

function nx() {
	this.ju = function(player, o2, hF) {
		b8.fw.oK(player, hF, o2) && (ad.o1(player, o2), o2 < aC.jq) && aw.random() < aw.value(10) && (am.ig.iw[o2] = 0)
	}, this.oL = function(player, o2, hF) {
		b8.fw.oM(hF, o2) ? (b8.fw.fz(o2, bM.f8[0]), bb.oN(player, o2), ae.oO(o2, bM.f8[0])) : bb.g0(player, hF, 12)
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
		aC.k9 || aC.gk || ay.oZ.oY()
	}
}

function nw() {
	this.ik = function(aB) {
		var id, fI, mP;
		for (bF.dW(aB), bF.e2 += 2, mP = 8 * bF.size; bF.e2 + 8 <= mP;) id = bF.oa(4), fI = bF.oa(9), 0 === id ? this.ob(id, fI, bF.oa(22)) : 1 === id ? this.ob(id, fI, bF.oa(10), bF.oa(10)) : 2 === id ? this.ob(id, fI, bF.oa(10), bF.oa(9)) :
			3 === id || 4 === id ? this.ob(id, fI, bF.oa(10), bF.oa(22)) : 5 === id || 6 === id ? this.ob(id, fI, bF.oa(10)) : 7 === id ? this.ob(id, fI, bF.oa(1)) : 10 === id ? this.ob(id, fI, bF.oa(20), bF.oa(22)) : this.ob(id, fI)
	}, this.oc = [], this.od = function() {
		for (var og = 0, oh = 0, oi = 0, oj = 0, ok = 0, ol = 0, aA = 0; aA < 512; aA++) og += af.le[aA], oh += af.gO[aA], oi += af.gc[aA], oj += bL.x.om[aA];
		ok += bL.x.on, ol += ak.jr, this.oc.push(oi % 1073741824 * 4 + (og + oh + oj + ok + ol) % 4)
	}, this.ob = function(id, fI, fK, fM) {
		0 === id ? b6.nt.gy(fI, fK) : 1 === id ? b6.nt.h8(fI, fK, fM) : 2 === id ? b6.nt.o3(fI, fK, fM) : 3 === id ? b6.nt.h6(fI, fK, fM) : 4 === id ? b6.nt.o6(fI, fK, fM) : 5 === id ? b6.nt.o9(fI, fK) : 6 === id ? b6.nt.oD(fI, fK) : 7 === id ?
			b6.nt.hK(fI, fK) : 8 === id ? b6.nt.oH(fI) : 9 === id ? b6.nt.oo(fI) : 10 === id && b6.nt.h1(fI, fK >> 10, fM, fK % 1024)
	}
}

function nu() {
	this.gy = function(player, eM) {
		b8.fw.gm(0) && b8.fw.gn(player) && bK.iF(eM) && (b7.op.oq(0, player, eM), aC.or.iy(player, eM))
	}, this.h8 = function(player, iA, j1) {
		b8.fw.gm(1) && b8.fw.gn(player) && b8.fw.os(player, j1) && b8.fw.ot(player, iA, 12, 0) && b8.fw.ou(player, j1) && ((j1 = ac.jC(player, bM.eW[0])) || ac.jU(player)) && (af.ov[player]++, b7.op.oq(1, player, iA, bM.eW[0]), am.ic.ip(player,
			j1)) && (b8.fw.ow(player), bb.ox(player, iA), am.ic.iv(player))
	}, this.o3 = function(player, iA, o2) {
		b8.fw.gm(1) && b8.fw.gn(player) && aC.hQ && b8.fw.os(player, o2) && b8.fw.oy(player, o2) && b8.fw.oK(player, b8.fw.i9(player, iA), o2) && (b7.op.oq(2, player, iA, o2), ad.o1(player, o2))
	}, this.h6 = function(player, iA, eM) {
		b8.fw.gm(1) && b8.fw.gn(player) && (0 === eM && 1 === iA ? this.hH(player) : bK.iF(eM) && bL.x.on !== bL.x.k4 && bL.x.om[player] !== bL.x.oz && 0 !== af.gH[player].length && b8.fw.ot(player, iA, 32, 0) && bL.kS.kT(player, eM) && (bb.p0(
			player), b7.op.oq(3, player, iA, eM), b8.fw.ow(player), bk.p1.h6(player), bL.x.p2(player)))
	}, this.o6 = function(player, m3, eM) {
		b8.fw.gm(1) && b8.fw.gn(player) && bK.iF(eM) && bL.h4.p3(player, m3) && bL.kS.p4(eM) && (b7.op.oq(4, player, m3, eM), b8.fw.p5(player, 8), bb.g0(player, bM.f8[1], 12), bk.p1.o6(player), bL.x.o6())
	}, this.o9 = function(player, j1) {
		b8.fw.gm(1) && b8.fw.gn(player) && (j1 = Math.min(j1, aC.eX), ac.jC(player, j1)) && (b7.op.oq(5, player, j1), ac.p6(player, j1))
	}, this.oD = function(player, oC) {
		(b8.fw.gm(1) || b8.fw.gm(2)) && b8.fw.gn(player) && (oC = bJ.p7(oC, 0, 1023), b7.op.oq(6, player, oC), ae.p8(player, 0, oC))
	}, this.hK = function(player, oF) {
		au.hJ(player) && (b7.op.oq(7, player, oF), au.p9(player, oF))
	}, this.oH = function(player) {
		(b8.fw.gm(0) || b8.fw.gm(1)) && b8.fw.gn(player) && aL.pA(player) && (b7.op.oq(8, player), bO.oH(player))
	}, this.oo = function(player) {
		b7.op.oq(9, player), bO.oo(player)
	}, this.hH = function(player) {
		au.hL(player) && (b7.op.oq(3, player, 1, 0), au.hH(player))
	}, this.h1 = function(player, iA, eM, j1) {
		b8.fw.gm(1) && b8.fw.gn(player) && b8.fw.os(player, j1) && b8.fw.ou(player, j1) && bK.iF(eM) && al.eB.eU(player, eM) && (ac.jC(player, bM.eW[0]) || ac.jU(player)) && (b7.op.oq(10, player, (iA << 10) + bM.eW[0], eM), j1 = b8.fw.kq(player,
			iA), af.g2[player].push(bM.eb[0]), ac.iy(player, j1, bM.eW[0]), aE.iz(player, !0), bb.pB(player))
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
		var aA, pe, j, g9, ed, pY = h.k * pE.offsetWidth,
			pf = new Float64Array(function(pY) {
				var i = .25 * b8.pZ.pa(.6) * h.pb;
				return Math.max(Math.floor(pY / i), 1)
			}(pY)),
			pg = ba.pg,
			ph = (pY - (pf.length + 1) * ba.gap) / (pf.length * h.k);
		for (pf.fill(pg), aA = 0; aA < pU.length; aA++) pe = (ed = pU[aA].pE).style, j = b8.pi.min(pf), g9 = pf.indexOf(j), pe.top = b8.pZ.pj(j), pe.left = b8.pZ.pj(pg + g9 * (ph + pg)), pe.width = b8.pZ.pj(ph), b8.pZ.pk(ed, 5), pf[g9] += ed
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
		ev ? 1 === ev ? ev = b9.mt : 2 === ev && (po = 1, ev = b9.mt) : (po = 0, ev = b9.md), this.ps = pn = ev, pq.style.backgroundColor = ev
	}, self = this, pq.innerHTML = pl, pq.style.color = pp ? b9.nd : b9.mh, pq.style.userSelect = "none", pq.style.outline = "none", pq.style.overflowWrap = "break-word", self.pu(pn), pq.style.border = "none", pq.style.font = "inherit", self.pv(
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
			e2: -1
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
		pR && (pR.qo = 1, qh.appendChild(bm.qp.transform(pR)))
	}

	function qm(bq) {
		qT ? qJ.scrollTop = qJ.scrollHeight : bq && (qJ.scrollTop = qU)
	}
	this.qZ = function(qa) {
			qV = 1048575, qK.textContent = "", qa || this.lR()
		}, this.lR = function() {
			var qb = bm.x.qc[0],
				qb = bm.x.qe[qb],
				qf = qb.qf,
				ea = qf.length,
				j7 = 1048575 === qV ? 0 : ea - (qb.qg - qV + 1048575) % 1048575;
			if (qV = qb.qg, !(ea <= (j7 = Math.max(j7, 0)))) {
				for (var qh = document.createDocumentFragment(), aA = j7; aA < ea; aA++) qi(qh, bm.qj.qk(qf[aA], bm.qj.ql(qf[aA])));
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
		.backgroundColor = b9.mf, qJ.addEventListener("scroll", function() {
			qU = qJ.scrollTop, qT = qU < qJ.scrollHeight - qJ.clientHeight - 2 ? 0 : 1
		}), qK.style.font = "inherit", qL.style.position = "absolute", qL.style.left = "0", qL.style.width = "100%", self.qN.e.setAttribute("placeholder", L(13)), self.qN.e.style.position = "absolute", self.qN.e.style.top = "0", self.qN.e.style
		.left = "0", self.qN.e.style.height = "100%", self.qN.e.style.backgroundColor = b9.mc, self.qN.e.style.textAlign = "center", (qR = new v(L(14), qP)).button.top = "0", qR.button.style.position = "absolute", qR.button.style.height = "100%", qR
		.pu(b9.np), qM = new qX("127", qR.button, 1, 1), qJ.appendChild(qK), qL.appendChild(self.qN.e), qL.appendChild(qR.button)
}

function qy(qz, pl, r0) {
	function click() {
		var value = 1 - qz.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pl, void 0 !== qz.e2 ? bh.r1.r2(qz.e2, value) : qz.value = value, r0 && r0(value)
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
		b8.pZ.pk(this.e, 8, b9.mq)
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
		eh === ej && -1 === eh ? (eh = rJ, ej = rK) : (rJ = eh, rK = ej), rM || (rI = rL), rH = 1, rG.textContent = pG, b8.pZ.pk(rG, 5), rG.style.font = b8.pZ.rN(0, b8.pZ.qs(.015)), rG.style.padding = "0.3em 0.6em", rG.style.left = eh + "px", rG
			.style.top = ej - b8.pZ.qs(.036) + "px", document.body.appendChild(rG), rG.style.top = ej - rG.offsetHeight + rI * ba.rO + "px";
		rM = eh + rG.offsetWidth - h.i / h.k;
		0 < rM && (rG.style.left = eh - rM + "px")
	}, this.qq = function(rP) {
		if (rH) {
			if (rP && rI) return 0;
			rH = 0, document.body.removeChild(rG)
		}
		return 1
	}, rG.style.position = "absolute", rG.style.backgroundColor = b9.md, rG.style.color = b9.mh, rG.style.whiteSpace = "pre", rG.style.pointerEvents = "none", rG.style.zIndex = "5"
}

function qO(rQ, type, rR, rS) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rT++, e.value = rQ.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.mh, e.style.backgroundColor = b9.ma, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.rU++
		}), e.addEventListener("blur", function() {
			h.rU--, -1 !== rQ.e2 && bh.r1.r2(rQ.e2, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rQ.e2 && bh.r1.r2(rQ.e2, e.value), rR ? rR() : e.blur())
		}), rS && e.addEventListener("input", function(pR) {
			rS(pR)
		})
}

function rV(pT, data) {
	var ea = data.rW.length,
		rX = document.createElement("div"),
		rY = document.createElement("div"),
		rZ = document.createElement("div"),
		ra = new Array(ea),
		pU = new Array(ea),
		rb = new Array(data.rc.length),
		rd = b8.color.mb(70, 70, 0, .35);

	function q5() {
		this.style.backgroundColor = b8.color.q5(rd, 160)
	}

	function ri() {
		this.style.backgroundColor = rd
	}

	function pd() {
		var et;
		for (pT.style.font = b8.pZ.rN(0, b8.pZ.rs(.026, .5, .03)), aA = 1; aA < rb.length; aA++) b8.pZ.pk(rb[aA], 4);
		if (b8.pZ.pk(rX, 2), ea) {
			for (var h0, rt = rX.offsetWidth, ru = rZ.offsetWidth, aA = 0; aA < rb.length; aA++) h0 = .01 * data.rh[aA] * ru, rb[aA].style.width = (100 * h0 / rt).toFixed(2) + "%";
			var kY = data.rW[0].length;
			for (aA = 0; aA < ea; aA++)
				for (b8.pZ.pk(ra[aA], 2), et = 1; et < kY; et++) b8.pZ.pk(pU[aA][et], 4);
			rY.re && (rY.scrollTop = rY.re)
		}
	}
	this.resize = function() {
			pd(), pd()
		}, pT.style.display = "flex", pT.style.flexDirection = "column", rY.style.overflowX = "hidden", rY.style.overflowY = "auto", rY.addEventListener("scroll", function() {
			this.re = this.scrollTop
		}),
		function() {
			var ed, aA, rW = data.rW,
				kY = ea ? rW[0].length : 0;
			for (aA = 0; aA < ea; aA++) {
				ra[aA] = document.createElement("div"), ra[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.mb(130, 130, 130, .35) : b9.mg
				}(aA), ra[aA].style.width = "100%", ra[aA].style.display = "flex", pU[aA] = new Array(kY);
				for (var et = 0; et < kY; et++) pU[aA][et] = ed = document.createElement("div"), ed.style.display = "flex", ed.style.justifyContent = "center", ed.style.wordBreak = "break-all", ed.style.padding = "0.4em 0em", ed.style.width = data
					.rh[et] + "%", ed.innerHTML = rW[aA][et].f2, 1 === rW[aA][et].dm && (ed.name = "" + aA, ed.style.color = b9.nd, ed.style.backgroundColor = rd, ed.addEventListener("mouseover", q5), ed.addEventListener("mouseout", ri), function(ed,
						rk, rl) {
						2147483647 !== rl && ed.addEventListener("click", function() {
							bB.a6(30), bB.a7(30, rk), bF.dW(bB.aB), this.style.backgroundColor = rd, s.t(8, s.rm, new rn(25, {
								ro: 0,
								rk: bD.rp.rq(bD.rp.rr(5)),
								rl: rl
							}))
						})
					}(ed, rW[aA][et].rk, rW[aA][et].rl)), ra[aA].appendChild(ed)
			}
			for (rX.style.display = "flex", rX.style.backgroundColor = b8.color.mb(0, 120, 0, .35), aA = 0; aA < rb.length; aA++) rb[aA] = ed = document.createElement("div"), ed.style.display = "flex", ed.style.justifyContent = "center", ed.style
				.wordBreak = "break-all", ed.style.padding = "0.4em 0em", ed.style.width = data.rh[aA] + "%", ed.innerHTML = data.rc[aA], rX.appendChild(ed)
		}();
	for (var aA = 0; aA < ea; aA++) rZ.appendChild(ra[aA]);
	rY.appendChild(rZ), pT.appendChild(rX), pT.appendChild(rY)
}

function rv() {
	var rz, s0, rw = document.createElement("div"),
		rx = document.createElement("div"),
		ry = document.createElement("div"),
		rZ = document.createElement("div"),
		q9 = [],
		s1 = [L(16), L(17), L(18), L(19), L(20), L(21)],
		s2 = [1, 2, 3, 0, 9, 10];

	function s4(aA) {
		s.t(8, 0, new rn(21, {
			s6: s2[aA],
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
			this.r2(s.x.s9), document.body.appendChild(rw)
		}, this.qq = function() {
			document.body.removeChild(rw)
		}, this.r2 = function(s9) {
			for (var sA = [3, 0, 1, 2, 4, 5], aA = 0; aA < q9.length; aA++) {
				var i = s9[aA];
				rz[sA[aA]][1].qY.textContent = i || ""
			}
		}, this.resize = function() {
			var aA, sB = ba.gap,
				j = b8.pZ.sC(.085),
				i = Math.min(4 * j, h.i - 2 * sB),
				ea = q9.length;
			for (b8.pZ.sD(rw, sB, h.j - sB - j, i, j), b8.pZ.pk(rw), b8.pZ.pk(rx, 6), aA = 0; aA < ea - 1; aA++) b8.pZ.pk(q9[aA].button, 6);
			for (aA = 0; aA < ea; aA++) rz[aA][0].resize();
			for (q9[0].eh = 0, q9[0].button.style.left = b8.pZ.pj(q9[0].eh), q9[0].button.style.width = b8.pZ.pj(100), aA = 1; aA < ea; aA++) q9[aA].eh = q9[aA - 1].eh + q9[aA - 1].button.offsetWidth, q9[aA].button.style.left = b8.pZ.pj(q9[aA].eh);
			if (!s0) {
				if (!aa.sE()) return;
				(s0 = aa.get(14)).style.width = "24%", s0.style.position = "absolute", rx.appendChild(s0)
			}
			s0.style.left = b8.pZ.pj(0), s0.style.top = "7%", ry.sF && (ry.scrollLeft = ry.sF)
		}, rw.style.position = "absolute", rx.style.width = "25%", rx.style.height = "100%", rx.style.backgroundColor = b9.md, ry.style.position = "absolute", ry.style.width = "75%", ry.style.height = "100%", ry.style.backgroundColor = b9.md, ry
		.style.top = ry.style.right = b8.pZ.pj(0), b8.pZ.s3(ry), rZ.style.height = rZ.style.maxHeight = "100%", q9.push(new v("", function() {
			s4(0)
		}, b9.nR)), q9.push(new v("", function() {
			s4(1)
		}, b9.nS)), q9.push(new v("", function() {
			s4(2)
		}, b9.nK)), q9.push(new v("", function() {
			s4(3)
		}, b9.n5)), q9.push(new v("", function() {
			s4(4)
		}, b9.nm)), q9.push(new v("", function() {
			s4(5)
		}, b9.nk)), rz = new Array(q9.length);
	for (var aA = 0; aA < q9.length; aA++) q9[aA].button.style.position = "absolute", rz[aA] = [new s5(s1[aA], q9[aA].button, .25, .45), new s5("", q9[aA].button, .53, .84, 1)], q9[aA].button.style.height = q9[aA].button.style.maxHeight = "100%", q9[
		aA].button.top = b8.pZ.pj(0), rZ.appendChild(q9[aA].button);
	ry.appendChild(rZ), rw.appendChild(rx), rw.appendChild(ry)
}

function sG(sH, sI, sJ, sK, qH, qI) {
	var sL = document.createElement("div"),
		sM = document.createElement("div"),
		sN = document.createElement("div"),
		sO = document.createElement("div"),
		sP = document.createElement("div"),
		sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("span"),
		sU = document.createElement("div");
	this.sV = new qG(qH, qI), this.sW = new sX(qI), this.sY = [sH, sI, sJ, sK], this.sc = function(sd) {
		sd = (sd / 10).toFixed(1) + "%";
		sS.style.width = sd, sT.innerHTML = sd
	}, this.se = function() {
		this.sW.qq(sQ), this.sV.show(sQ)
	}, this.sf = function() {
		this.sV.qq(sQ), this.sW.show(sQ)
	}, this.sg = function() {
		return sM
	}, this.show = function() {
		document.body.appendChild(sL)
	}, this.qq = function() {
		document.body.removeChild(sL)
	}, this.resize = function(sh) {
		var si = 1 - .4 * z.a0.qx() * (h.i > 1.6 * h.j),
			sj = b8.pZ.qs(.05 * si),
			sk = h.j > h.i,
			sl = b8.pZ.qs(.07 * si + .03 * sk),
			sm = b8.pZ.qs(.04 + .02 * sk),
			sk = b8.pZ.qs(.02 * si + .01 * sk),
			so = b8.pZ.qs(.025);
		sL.style.font = b8.pZ.rN(0, so), si < 1 && (so = b8.pZ.rN(0, si * so), sN.style.font = so, sP.style.font = so, sU.style.font = so, sR.style.font = so, sO.style.font = so), sM.style.height = b8.pZ.pj(sj), sM.style.font = b8.pZ.rN(0, .72 *
				sj), b8.pZ.pk(sM, 2), sN.style.top = b8.pZ.pj(sj), sN.style.height = b8.pZ.pj(sl), b8.pZ.pk(sN, 2), sO.style.font = b8.pZ.rN(0, si * b8.pZ.qs(.02)), sO.style.top = b8.pZ.pj(sj + sl), sO.style.height = b8.pZ.pj(sm), b8.pZ.pk(sO,
			2), sP.style.top = b8.pZ.pj(sj + sl + sm), sP.style.height = b8.pZ.pj(sl), b8.pZ.pk(sP, 2), sQ.style.top = b8.pZ.pj(sj + sl + sm + sl), sQ.style.height = b8.pZ.pj(h.j / h.k - sj - 3 * sl - sm - sk), sR.style.top = b8.pZ.pj(h.j / h.k -
				sl - sk), sR.style.height = b8.pZ.pj(sk), b8.pZ.pk(sR, 8), sT.style.font = b8.pZ.rN(0, .8 * sk), sU.style.top = b8.pZ.pj(h.j / h.k - sl), sU.style.height = b8.pZ.pj(sl), b8.pZ.pk(sU, 8), sH.resize(sN), sI.resize(sN), sJ.resize(
			sN), sK.resize(sN), sh ? this.sV.resize(sQ) : this.sW.resize()
	};
	qH = this;
	sL.style.position = "absolute", sL.style.top = "0", sL.style.left = "0", sL.style.width = "100%", sL.style.height = "100%", sL.style.backgroundColor = b9.mg, bH.q2() || (sL.style.backdropFilter = "blur(4px)", sL.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sL.style.display = "none"), sM.style.position = "absolute", sM.style.top = "0", sM.style.left = "0", sM.style.width = "100%", sM.style.display = "flex", sM.style.alignItems = "center";
	for (var g = [sN, sO, sP, sU], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pZ.s3(g[aA]);
	sQ.style.position = "absolute", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.font = "inherit", sR.style.position = "absolute", sR.style.left = "0", sR.style.width = "100%", sS.style.position = "absolute", sS.style.top = "0", sS.style
		.left = "0", sS.style.height = "100%", sS.style.width = "50%", sS.style.backgroundColor = b9.n3, sT.innerHTML = "", sT.style.position = "absolute", sT.style.top = "50%", sT.style.left = "50%", sT.style.transform = "translate(-50%, -50%)", sM
		.appendChild(function() {
			var sb = document.createElement("h1");
			return sb.textContent = L(22), sb.style.margin = "0 auto 0.15em auto", sb.style.webkitTextStroke = "0.02em brown", sb.style.fontFamily = "Arial Black, Trebuchet MS", sb.style.fontSize = "inherit", sb.style.fontWeight = "inherit", sb
		}()), sN.appendChild(sH.pE), sO.appendChild(sI.pE), sP.appendChild(sJ.pE), sR.appendChild(sS), sR.appendChild(sT), sU.appendChild(sK.pE), sL.appendChild(sM), sL.appendChild(sN), sL.appendChild(sO), sL.appendChild(sP), sL.appendChild(sQ), sL
		.appendChild(sR), sL.appendChild(sU), qH.sW.show(sQ)
}

function sX(qI) {
	var sL = document.createElement("div"),
		sQ = document.createElement("div");
	this.lR = function() {
			sQ.textContent = "", bm.sq.qq(1);
			for (var qh = document.createDocumentFragment(), sr = bm.x.qc[0], ss = bm.ss.st[sr], su = bm.ss.su[sr], aA = 0; aA < ss.length; aA++) ! function(qh, pR, sw, sr) {
				var qY = document.createElement("span");
				qY.textContent = (sw ? "🟢 " : "⚪ ") + bm.qj.sx(pR, sr), qY.style.color = bm.qj.sy(pR.sz), qY.style.cursor = "pointer", qY.style.margin = "0.2em 0.2em 0.2em 0.2em", qY.style.width = qY.style.maxWidth = 2 === sr ? "10em" : "9em",
					qY.style.height = qY.style.maxHeight = "1.4em", qY.style.whiteSpace = "nowrap", qY.style.overflow = "hidden", qY.style.textOverflow = "ellipsis", qY.style.font = "inherit", qY.style.display = "inline-block", bm.qj.t0(pR) && (
						qY.style.textDecoration = "underline"), qY.onclick = function(e) {
						qI(e, pR)
					}, bH.q2() || (qY.onmouseover = function(e) {
						bm.sq.t1(e, pR, 1)
					}), qh.appendChild(qY)
			}(qh, ss[aA], aA < su, sr);
			sQ.appendChild(qh)
		}, this.show = function(pT) {
			pT.appendChild(sL)
		}, this.qq = function(pT) {
			pT.removeChild(sL)
		}, this.resize = function() {
			sQ.style.fontSize = b8.pZ.pj(b8.pZ.qs(.02, .3))
		}, sL.style.top = "0", sL.style.left = "0", sL.style.width = sL.style.height = "100%", sL.style.overflowX = "hidden", sL.style.overflowY = "auto", sL.style.font = "inherit", sQ.style.font = "inherit", sQ.style.margin = "0.4em", sL
		.appendChild(sQ)
}

function t2(t3) {
	var sL = document.createElement("div"),
		qL = document.createElement("div"),
		t4 = [];

	function px() {
		bH.q2() || (this.style.backgroundColor = b8.color.q5(b9.md, 50))
	}

	function py() {
		this.style.backgroundColor = b9.md
	}
	this.r2 = function(t6, t7) {
			t4[2].textContent = t6 + 1 + " / " + t7
		}, this.show = function(pR) {
			qL.appendChild(bm.qp.transform(pR)), document.body.appendChild(sL)
		}, this.resize = function() {
			var j = b8.pZ.qs(.03, .5);
			sL.style.width = 10 * j + "px", sL.style.font = b8.pZ.rN(1, .75 * j), b8.pZ.pk(sL, 4), qL.style.top = j + "px", qL.style.font = b8.pZ.rN(0, .55 * j), b8.pZ.pk(qL, 2), sL.style.height = j + qL.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pZ.pk(t4[aA], 6), t4[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) t4[aA].style.height = j + "px", b8.pZ.pk(t4[aA], 2);
			t4[2].style.width = 4 * j + "px", t4[1].style.left = 2 * j + "px", t4[2].style.left = 4 * j + "px", t4[3].style.left = 8 * j + "px"
		}, this.t8 = function() {
			for (var aA = 0; aA < 4; aA++) t4[aA].onclick = null, t4[aA].onmouseover = null, t4[aA].onmouseout = null;
			document.body.removeChild(sL), sL = qL = t4 = null
		}, sL.style.position = "absolute", sL.style.color = b9.mh, sL.style.zIndex = "3", sL.style.right = "0", sL.style.top = "0", qL.style.position = "absolute", qL.style.height = "auto", qL.style.color = b9.mh, qL.style.backgroundColor = b9.md, qL
		.style.left = "0", qL.style.width = "100%", qL.style.overflowWrap = "break-word", sL.appendChild(qL);
	for (var aA = 0; aA < 4; aA++) t4[aA] = document.createElement("div"), t4[aA].style.position = "absolute", t4[aA].style.backgroundColor = b9.md, t4[aA].style.color = b9.mh, t4[aA].style.top = "0", t4[aA].style.display = "flex", t4[aA].style
		.justifyContent = "center", t4[aA].style.alignItems = "center", t4[aA].style.userSelect = "none", t4[aA].style.outline = "none", t4[aA].style.font = "inherit", 2 !== (t4[aA].t5 = aA) && (t4[aA].onclick = t3, t4[aA].onmouseover = px, t4[aA]
			.onmouseout = py), sL.appendChild(t4[aA]);
	t4[0].textContent = "⮜", t4[1].textContent = "⮞", t4[3].textContent = "✖"
}

function t9(t3) {
	var rG = document.createElement("div");

	function px() {
		bH.q2() || (rG.style.backgroundColor = b8.color.q5(b9.md, 50))
	}

	function py() {
		rG.style.backgroundColor = b9.md
	}
	this.r2 = function(t7) {
			rG.textContent = t7
		}, this.show = function() {
			document.body.appendChild(rG)
		}, this.resize = function() {
			var j = b8.pZ.qs(.03, .5);
			rG.style.width = 2 * j + "px", rG.style.height = j + "px", rG.style.font = b8.pZ.rN(1, .75 * j), b8.pZ.pk(rG, 4), b8.pZ.pk(rG, 2)
		}, this.t8 = function() {
			rG.onclick = null, rG.onmouseover = null, rG.onmouseout = null, document.body.removeChild(rG), rG = null
		}, rG.style.position = "absolute", py(), rG.style.color = b9.mh, rG.style.zIndex = "3", rG.style.right = "0", rG.style.top = "0", rG.style.display = "flex", rG.style.justifyContent = "center", rG.style.alignItems = "center", rG.style
		.userSelect = "none", rG.style.outline = "none", rG.onclick = t3, rG.onmouseover = px, rG.onmouseout = py
}

function tA(r8) {
	var sL = document.createElement("div"),
		tB = document.createElement("div"),
		rH = (this.eh = 0, this.ej = 0);

	function tD() {
		bm.tE.qq()
	}
	this.q9 = r8, this.show = function(eh, ej, tG) {
		if (rH) return [0, 0];
		rH = 1, this.eh = eh, this.ej = ej,
			function(self, tG) {
				var i = b8.pZ.qs(.16, .7),
					j = r8.length * i / 3,
					tI = h.i / h.k,
					tJ = h.j / h.k,
					mJ = Math.min(1, Math.min(tI / i, tJ / j));
				i *= mJ, j *= mJ, tG && (self.eh += b8.pZ.qs(.03, .5)), self.eh = bJ.p7(self.eh, 0, tI - i), self.ej = bJ.p7(self.ej, 0, tJ - j), tB.style.left = self.eh + "px", tB.style.top = self.ej + "px", tB.style.width = i + "px", tB.style
					.height = j + "px", tB.style.font = b8.pZ.rN(0, .34 * j / r8.length), b8.pZ.pk(tB, 5);
				for (var aA = 1; aA < r8.length; aA++) b8.pZ.pk(r8[aA].button, 8)
			}(this, tG), document.body.appendChild(sL)
	}, this.qq = function() {
		rH && (rH = 0, sL.removeEventListener("click", tD), document.body.removeChild(sL))
	};
	for (var aA = 0; aA < r8.length; aA++) new qX("" + (1 + aA), r8[aA].button, 0, 1);
	sL.style.position = "fixed", sL.style.top = "0", sL.style.left = "0", sL.style.width = "100%", sL.style.height = "100%", sL.style.zIndex = "5", tB.style.position = "absolute",
		function() {
			for (var tF = (100 / r8.length).toFixed(2) + "%", aA = 0; aA < r8.length; aA++) r8[aA].button.style.width = "100%", r8[aA].button.style.height = r8[aA].button.style.maxHeight = tF, r8[aA].button.style.padding = "0.0em 0.9em", tB
				.appendChild(r8[aA].button)
		}(), sL.appendChild(tB), sL.addEventListener("click", tD)
}

function tK(rQ, tL) {
	this.pP = [];
	var tM = this.pP;

	function click() {
		for (var aA = 0; aA < tM.length; aA++) tM[aA].textContent = tM[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e2 = parseInt(this.name);
		void 0 !== rQ.e2 && bh.r1.r2(rQ.e2, e2), tL && tL(e2)
	}
	for (var tN, ea = rQ.tO.length, aA = 0; aA < ea; aA++)(tN = document.createElement("p")).textContent = "⚪ " + rQ.tO[aA], tN.style.margin = "0", tN.name = "" + aA, tN.style.cursor = "pointer", tN.style.fontSize = "1em", tN.addEventListener(
		"click", click), tM.push(tN);
	tM[rQ.value].textContent = tM[rQ.value].textContent.replace("⚪", "🟢")
}

function tP(title, tQ, tR) {
	var rw = document.createElement("div"),
		tS = document.createElement("div"),
		rZ = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("div");
	this.tV = rZ, this.tW = tQ, this.show = function() {
			!1 !== tR ? document.body.appendChild(rw) : (document.body.appendChild(tS), document.body.appendChild(tT))
		}, this.qq = function() {
			!1 !== tR ? document.body.removeChild(rw) : (document.body.removeChild(tS), document.body.removeChild(tT))
		}, this.ta = function() {
			var qt = b8.pZ.qs(.1),
				qr = b8.pZ.qs(.08 + .04 * (h.tb < 1));
			return {
				qt: qt,
				qr: qr,
				tc: h.j / h.k - qt - qr
			}
		}, this.resize = function(rC) {
			var ea = tQ.length,
				td = this.ta(),
				qt = td.qt,
				qr = td.qr;
			for (tS.style.height = b8.pZ.pj(qt), b8.pZ.pk(tS, 2), tT.style.top = b8.pZ.pj(h.j / h.k - qr), tT.style.height = b8.pZ.pj(qr), b8.pZ.pk(tT, 8), rZ.style.top = b8.pZ.pj(qt), rZ.style.height = rZ.style.maxHeight = b8.pZ.pj(td.tc), tS.style
				.font = b8.pZ.rN(0, b8.pZ.qs(.02, .3)), tT.style.font = b8.pZ.rN(0, b8.pZ.qs(.02, .7)), rZ.style.font = b8.pZ.rN(0, b8.pZ.qs(.02, .7)), aA = 1; aA < ea; aA++) b8.pZ.pk(tQ[aA].button, 4);
			for (var rD = 0, aA = 0; aA < ea; aA++) rD += tQ[aA].button.offsetWidth;
			if (rC && rD < tT.offsetWidth)
				for (aA = 0; aA < ea; aA++) tQ[aA].button.style.width = (100 * tQ[aA].button.offsetWidth / rD).toFixed(2) + "%";
			else
				for (aA = 0; aA < ea; aA++) tQ[aA].button.style.width = "auto";
			tT.sF && (tT.scrollLeft = tT.sF), rC || this.resize(!0)
		}, this.te = function() {
			var td = this.ta(),
				ev = h.k;
			tf.fillStyle = b9.md, tf.fillRect(0, ev * td.qt, h.i, ev * td.tc)
		}, rw.style.position = "absolute", rw.style.top = "0", rw.style.left = "0", rw.style.width = "100%", rw.style.height = "100%", tS.style.position = "absolute", tS.style.top = "0", tS.style.left = "0", tS.style.width = "100%", tS.style
		.display = "flex", tS.style.backgroundColor = b9.md, tT.style.position = "absolute", tT.style.left = "0", tT.style.width = "100%", b8.pZ.s3(tT), tU.style.height = tU.style.maxHeight = "100%", rZ.style.position = "absolute", rZ.style.width =
		"100%", rZ.style.backgroundColor = b9.md,
		function() {
			for (var aA = 0; aA < tQ.length; aA++) tQ[aA].button.style.height = "100%", tQ[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tQ.length; aA++) tU.appendChild(tQ[aA].button);
	tS.appendChild(function() {
		var tZ = document.createElement("h1");
		return tZ.textContent = title, tZ.style.margin = "auto", tZ.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", tZ.style.webkitTextStroke = "0.02em brown", tZ.style.fontFamily = "Arial Black, Trebuchet MS", tZ
	}()), tT.appendChild(tU), !1 !== tR && (rw.appendChild(rZ), rw.appendChild(tS), rw.appendChild(tT))
}

function qX(tg, th, ti, tj) {
	var self;
	this.qY = document.createElement("span"), (self = this).qY.textContent = tg, self.qY.style.color = b9.mh, self.qY.style.position = "absolute", self.qY.style.font = "inherit", tj ? self.qY.style.bottom = "0.06em" : self.qY.style.top = "0.12em",
		ti ? self.qY.style.left = "0.2em" : self.qY.style.right = "0.2em", self.qY.style.fontSize = "0.6em", self.qY.style.pointerEvents = "none", self.qY.style.whiteSpace = "pre", th.style.position = "relative", th.style.overflow = "hidden", th
		.appendChild(self.qY)
}

function s5(tg, th, tk, tl, tm) {
	var self;
	this.qY = document.createElement("span"), this.resize = function() {
			this.qY.style.fontSize = ((tl - tk) * th.offsetHeight).toFixed(1) + "px"
		}, (self = this).qY.textContent = tg, self.qY.style.color = b9.mh, self.qY.style.font = "inherit", self.qY.style.margin = "0.1em 0.6em", self.qY.style.pointerEvents = "none", tm && (self.qY.style.fontWeight = "bold"), self.qY.style
		.whiteSpace = "nowrap", self.qY.style.display = "block", th.appendChild(self.qY)
}

function tn(to, tp, tq, tr) {
	var ts = document.createElement("textarea"),
		tt = (this.e = ts, !0);

	function tz() {
		ts.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tp && b8.pZ.pk(ts, 5)
		}, this.tu = function(tv) {
			ts.value = tv
		}, this.tw = function() {
			return ts.value
		}, this.tx = function() {
			ts.select()
		}, this.clear = function() {
			ts.value = ""
		}, this.ty = function() {
			tt && navigator.clipboard ? (ts.select(), navigator.clipboard.writeText(ts.value).catch(function() {
				tt = !1, tz()
			})) : tz()
		}, ts.setAttribute("id", "textArea" + s.x.rT++), ts.setAttribute("autocomplete", "off"), to && ts.setAttribute("placeholder", to), ts.style.top = "0", ts.style.left = "0", ts.style.width = "100%", ts.style.height = "100%", ts.style
		.userSelect = "none", ts.style.outline = "none", ts.style.resize = "none", ts.style.border = "none", ts.style.color = b9.mh, ts.style.backgroundColor = b9.ma, tr ? (ts.style.fontSize = "1em", ts.rows = 6, ts.style.padding = "0.25em") : (ts
			.style.padding = "0.45em", ts.style.fontSize = "1.2em"), tq && ts.addEventListener("input", function(e) {
			tq(e)
		}), ts.addEventListener("focus", function() {
			h.rU++
		}), ts.addEventListener("blur", function() {
			h.rU--
		})
}

function dD() {
	this.pr = new u0, this.dr = new u1, this.r1 = new u2, this.x = new u3, this.dW = function() {
		this.dr.dW(), (new u4).dW()
	}
}

function u1() {
	function u5(aA, type, uB, f3) {
		bh.dr.data.push({
			e2: aA,
			type: type || 0,
			value: uB || 0,
			uB: uB || 0,
			f3: f3 || 0
		})
	}

	function u6(aA, type, uB, f3) {
		bh.dr.data.push({
			e2: aA,
			type: type,
			value: uB || "",
			uB: uB || "",
			f3: f3 || 0
		})
	}

	function u7(mP) {
		for (var aA = bh.dr.data.length; aA < mP; aA++) bh.dr.data.push(null)
	}
	this.data = [], this.dW = function() {
		u5(0, 1, 0, 5), u5(1, 1, 1), u5(2, 0), u6(3, 2), u5(4, 1), u6(5, 2, "Trebuchet MS", 1), u5(6, 0), u5(7, 0, 0), u5(8, 0), u5(9, 1, 1), u5(10, 1), u5(11, 1, 1), u6(12, 2, navigator.language), u7(100), u6(100, 2), u6(101, 2), u6(102, 2), u6(
				103, 2), u6(104, 2), u6(105, 2), u6(106, 2), u5(107), u5(108), u5(109), u6(110, 2), u5(111), u5(112), u5(113), u6(114, 2), u5(115), u6(116, 2), u5(117, 1), u6(118, 2, "", 2), u5(119, 1, 0, 1), u6(120, 2), u5(121, 1, ~~(262144 *
				Math.random())), u6(122, 2, "Player " + Math.floor(1e3 * Math.random())), u5(123), u6(124), u5(125, 1), u6(126, 2), u5(127, 0, 1), u5(128), u5(129), u5(130), u5(131), u5(132), u6(133, 2), u5(134, 0, 5), u6(135, 2), u6(136, 2), u5(
				137), u5(138), u5(139), u5(140), u5(141), u5(142), u5(143), u5(144), u6(145, 2), u5(146), u5(147), u6(148, 2), u5(149), u5(150, 0, 1), u6(151, 2), u5(152, 0, 5), u5(153, 1), u5(154, 1), u6(155, 2), u6(156, 2), u5(157), u5(158),
			u5(159), u7(180), u5(180, 0), u5(181, 0)
	}, this.r2 = function(e2, value) {
		this.data[e2].value = value
	}, this.ds = function(e2, value) {
		this.r2(e2, value), bh.pr.save(e2, String(value)), bh.pr.save(e2, String(this.data[e2].f3), !0)
	}, this.u8 = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pr.save(aA, String(this.data[aA].value)), bh.pr.save(aA, String(this.data[aA].f3), !0))
	}, this.u9 = function(e2) {
		return Number(this.data[e2].value)
	}, this.uA = function(e2) {
		return String(this.data[e2].value)
	}
}

function u0() {
	this.uC = function(e2, f3) {
		return Number(this.uD(e2, f3))
	}, this.uD = function(e2, f3) {
		var f2 = null;
		return 0 === z.id ? z.uE && (f2 = z.uE.getItem((f3 ? "v" : "d") + e2)) : 1 === z.id ? f2 = z.uF.loadString((f3 ? 1e3 : 2e3) + e2) : 2 === z.id && (f2 = z.uG[(f3 ? "v" : "d") + e2]), f2 && 0 !== f2.length ? f2 : null
	}, this.uH = function(ea, uI) {
		var g = [],
			uJ = uI ? "e" : "l";
		if (0 === z.id) {
			if (z.uE)
				for (aA = 0; aA < ea; aA++) g.push(z.uE.getItem(uJ + aA))
		} else if (1 === z.id)
			for (var uK = uI ? 5e3 : 3e3, aA = 0; aA < ea; aA++) g.push(z.uF.loadString(uK + aA));
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) g.push(z.uG[uJ + aA]);
		return g
	}, this.save = function(e2, value, f3) {
		var uL = (f3 ? "v" : "d") + e2;
		if (0 === z.id) {
			if (z.uE && bh.dr.data[140].value) try {
				z.uE.setItem(uL, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uF.saveString((f3 ? 1e3 : 2e3) + e2, value) : 2 === z.id && (z.uG[uL] = value, z.uM.postMessage(uL + " " + value))
	}, this.uN = function(g, uI) {
		var ea = g.length,
			uJ = uI ? "e" : "l";
		if (0 === z.id) {
			if (z.uE && bh.dr.data[140].value) try {
				for (aA = 0; aA < ea; aA++) z.uE.setItem(uJ + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uK = uI ? 5e3 : 3e3, aA = 0; aA < ea; aA++) z.uF.saveString(uK + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) z.uG[uJ + aA] = g[aA], z.uM.postMessage(uJ + aA + " " + g[aA])
	}
}

function u4() {
	this.dW = function() {
		! function() {
			var data = bh.dr.data;
			0 === data[2].f3 && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uB = 1);
			0 === data[100].f3 && (data[100].value = data[100].uB = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f2, data = bh.dr.data,
			ea = data.length;
		for (aA = 0; aA < ea; aA++) data[aA] && data[aA].f3 === bh.pr.uC(aA, !0) && (f2 = bh.pr.uD(aA), data[aA].value = null === f2 ? data[aA].uB : 2 === data[aA].type ? f2 : Number(f2));
		bh.dr.data[10].value = bh.dr.data[10].uB
	}
}

function u3() {
	function uT(g) {
		if (0 === g.length) bh.r1.r2(116, "");
		else {
			for (var uW = g[0], aA = 1; aA < g.length; aA++) uW += ";" + g[aA];
			bh.r1.r2(116, uW)
		}
	}
	this.uQ = function() {
		bh.dr.data[110].value.length && (bh.dr.data[106].value = bh.dr.data[110], bh.r1.r2(110, ""), this.uR())
	}, this.uR = function() {
		var g = bh.dr.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.dr.data[106].value), g.unshift(bh.dr.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uS = [], aA = 0; aA < g.length; aA += 2) uS.push(g[aA]);
		uT(g), bh.dr.data[117].value = 0, bh.dr.data[117].tO = uS
	}, this.uU = function(e2) {
		bh.dr.data[117].tO.splice(e2, 1), bh.dr.data[117].value = Math.min(e2, bh.dr.data[117].tO.length - 1);
		var g = bh.dr.data[116].value.split(";");
		g.splice(2 * e2, 2), uT(g)
	}, this.uV = function(e2) {
		var g = bh.dr.data[116].value.split(";");
		return {
			rk: g[2 * e2],
			password: g[2 * e2 + 1]
		}
	}, this.uX = function() {
		var f2 = bJ.p7(bh.dr.data[121].value, -1, 262143);
		return f2 = -1 === f2 ? ~~(262144 * Math.random()) : f2
	}
}

function u2() {
	this.r2 = function(e2, value) {
		bh.dr.data[e2].value !== value && (bh.dr.ds(e2, value), 0 === e2 ? (s.w(), b5.dW(), s.t(2)) : 1 === e2 ? h.dh(1) : 2 === e2 ? h.dh(0) : 5 === e2 && (b8.pZ.uY(), h.dh(0)))
	}, this.uZ = function() {
		for (var data = bh.dr.data, aA = 0; aA < 100; aA++) data[aA] && bh.dr.ds(aA, data[aA].uB);
		b8.pZ.uY(), h.dh(1), b5.dW()
	}, this.ua = function() {
		for (var data = bh.dr.data, aA = 0; aA < data.length; aA++) data[aA] && bh.dr.r2(aA, data[aA].uB)
	}, this.ub = function() {
		for (var eu = bh.dr, aA = 128; aA < 135; aA++) eu.ds(aA, eu.data[aA].uB)
	}, this.uc = function(data) {
		bh.r1.r2(109, data.rl), bh.r1.r2(107, data.ud), bh.r1.r2(108, data.ue), bh.r1.r2(112, data.uf), bh.r1.r2(111, data.ug), bh.r1.r2(113, data.uh), bh.r1.r2(135, data.ui), bh.r1.r2(136, data.uj), bh.r1.r2(137, data.uk), bh.r1.r2(138, data
			.ul), bh.r1.r2(139, data.um), bh.r1.r2(141, data.un), bh.r1.r2(142, data.uo), bh.r1.r2(143, data.up), bh.r1.r2(144, data.uq)
	}
}

function c0() {
	this.rp = new ur, this.us = new ut, this.uu = new uv, this.dW = function() {
		this.rp.dW()
	}
}

function ut() {
	this.uw = function(size) {
		for (var ux = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(ux.oa(16)));
		return g.join("")
	}, this.uy = function(pG) {
		return 20 < (pG = pG.trim()).length ? pG.substring(0, 20) : pG
	}
}

function ur() {
	var uz = new Uint8Array(78);
	this.dW = function() {
		var aA;
		for (uz[50] = 37, aA = 0; aA < 10; aA++) uz[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) uz[aA + 20] = aA + 11, uz[aA + 52] = aA + 38
	}, this.v0 = function(pG) {
		return pG.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v1 = function(pG, size) {
		if ((pG = this.v0(pG)).length > size) return pG.substring(0, size);
		for (; pG.length < size;) pG = "-" + pG;
		return pG
	}, this.v2 = function(pG) {
		for (var v3 = uz, ea = pG.length, g = new Uint8Array(ea), aA = 0; aA < ea; aA++) g[aA] = v3[pG.charCodeAt(aA) - 45];
		return g
	}, this.v4 = function(v5) {
		bB.a6(6 * v5.length), this.v6(v5), bF.dW(bB.aB)
	}, this.v6 = function(v5) {
		for (var ea = v5.length, i = bB, aA = 0; aA < ea; aA++) i.a7(6, v5[aA])
	}, this.v7 = function(pG) {
		this.v6(this.v2(pG))
	}, this.v8 = function(pG, size) {
		this.v6(this.v2(this.v1(pG, size)))
	}, this.v9 = function(pG, size) {
		for (var g = this.v2(this.v1(pG, size)), f2 = 0, mJ = 1, aA = g.length - 1; 0 <= aA; aA--) f2 += mJ * g[aA], mJ *= 64;
		return f2
	}
}

function vA() {
	var i, j, vB;

	function vb(h0, ed, vZ, vG, vU) {
		ed = va(h0, ed + 1 + 2 * vG & 3);
		! function(h0, vc) {
			return 1 < Math.abs(h0 % i - vc % i) || 1 < Math.abs(vf(h0) - vf(vc))
		}(h0, ed) && 0 === vU[ed << 2] && (vU[ed << 2] = vZ)
	}

	function vf(g8) {
		return Math.floor((g8 + .5) / i) % j
	}

	function va(g8, ed) {
		return g8 + vB[ed]
	}
	this.vC = function(pG) {
		var aA, vD, ea, vE, ux = bF;
		for (bE.rp.v4(bE.rp.v2(pG)), bQ.vH.vI[bQ.eG].i = bQ.el = i = ux.oa(12), bQ.vH.vI[bQ.eG].j = bQ.em = j = ux.oa(12), vB = [-i, -1, i, 1], bQ.vR = document.createElement("canvas"), bQ.vR.width = bQ.el, bQ.vR.height = bQ.em, bQ.vN = bQ.vR
			.getContext("2d", {
				alpha: !1
			}), bQ.vO = bQ.vS = null, bQ.vO = bQ.vN.getImageData(0, 0, bQ.el, bQ.em), bQ.vS = bQ.vO.data, b8.pi.vT(bQ.vS), ea = ux.oa(12), vD = ux.oa(5), vE = vK(i * j - 1), aA = 0; aA < ea; aA++) ! function(kY, g8, vF, vG) {
			var aA, ed, ux = bF,
				vU = bQ.vS,
				vV = g8,
				vW = g8,
				vX = 0,
				vY = 1 + vF,
				vZ = 2 - vF;
			for (vU[g8 << 2] = vY, aA = 0; aA < kY; aA++) ed = ux.oa(2), g8 = va(g8, ed), vU[g8 << 2] === vY ? vX % 2 == 1 && vb(vW, vX + 2 * vG + 3, vZ, vG, vU) : vU[g8 << 2] = vY, vb(g8, ed, vZ, vG, vU), vb(vW, ed, vZ, vG, vU), vW = g8,
				vX = ed;
			va(g8, 0) === vV ? (vb(g8, 0, vZ, vG, vU), vb(vV, 0, vZ, vG, vU)) : va(g8, 1) === vV && (vb(g8, 0, vZ, vG, vU), vb(vV, 2, vZ, vG, vU));
			0 === kY && (vb(vV, 0, vZ, vG, vU), vb(vV, 2, vZ, vG, vU))
		}(ux.oa(vD), ux.oa(vE), 1 === ux.oa(1), 1 === ux.oa(1));
		var eh, ej, hO, vg, vh, vi, vU = bQ.vS,
			vj = !0,
			vk = bQ.vH.vI[bQ.eG].vk,
			vl = bQ.vH.vI[bQ.eG].vl;
		for (ej = 0; ej < j; ej++)
			for (vg = !0, vh = vj, eh = vi = 0; eh < i; eh++) hO = 4 * ej * i + 4 * eh, vi <= eh && 0 < vU[hO] && (vh = 2 === vU[hO], vg) && (vg = !1, vh !== vj) ? (vj = vh, vi = eh + 1, eh = -1) : (vh ? (vU[hO] = vl[0], vU[1 + hO] = vl[1], vU[
				2 + hO] = vl[2]) : (vU[hO] = vk[0], vU[1 + hO] = vk[1], vU[2 + hO] = vk[2]), vU[3 + hO] = 255);
		bQ.vN.putImageData(bQ.vO, 0, 0), bQ.vP = !0, bQ.vQ.dW(), bd.de = !0
	}
}

function uv() {
	this.vC = function(vm) {
		for (var ux = bF, size = ux.oa(vm), vn = 7 + 9 * ux.oa(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(ux.oa(vn)));
		return g.join("")
	}
}

function c5() {
	var rJ, rK, vo, vp, vq, vr, vs, vt, vu, vv;

	function vx() {
		var w0 = aC.w0;
		for (vu = w0; vu < aC.eX; vu++) vw();
		for (vu = aC.gw ? aC.jq : 0; vu < w0; vu++) {
			if (!w1()) {
				for (var eu = aC.w5 = vu; eu < w0; eu++) vu = eu, vw();
				return
			}
			w4(vr + rJ * vq + bJ.dn(vq, 2), vs + rK * vq + bJ.dn(vq, 2))
		}
	}

	function wX(player) {
		for (var iP = af.iP, iR = af.iR, iQ = af.iQ, iS = af.iS, ej = iR[player]; ej <= iS[player]; ej++)
			for (var eh = iP[player]; eh <= iQ[player]; eh++) {
				var eE = ab.wY(eh, ej);
				ab.gA(eE) && (ab.j3(eE) ? ab.g5(eE, player) : ab.wZ(eE, player))
			}
	}

	function wW(g, s7, s8) {
		var dm = g[s7];
		g[s7] = g[s8], g[s8] = dm
	}

	function w1() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rJ = bJ.dn(vo * aw.random(), aw.value(100)), rK = bJ.dn(vp * aw.random(), aw.value(100)), we()) return 1;
			return
		}() || function() {
			var hw, hz, et, w3, eu, w2;
			for (hw = bJ.dn(vo * aw.random(), aw.value(100)), hz = bJ.dn(vp * aw.random(), aw.value(100)), et = 40; 1 <= et; et--)
				for (w3 = vp - et; 0 <= w3; w3 -= 40)
					for (rK = (w3 + hz) % vp, eu = 40; 1 <= eu; eu--)
						for (w2 = vo - eu; 0 <= w2; w2 -= 40)
							if (rJ = (w2 + hw) % vo, we()) return 1;
			return
		}()
	}

	function we() {
		for (var g8, wg, gap = bJ.dn(vq - vt, 2), wh = vs + rK * vq + gap, wi = vr + rJ * vq + gap, wf = wh + vt - 1; wh <= wf; wf--)
			for (wg = wi + vt - 1; wi <= wg; wg--)
				if (g8 = ab.wY(wg, wf), !ab.eV(g8) || ab.j3(g8)) return;
		return 1
	}

	function w4(w2, w3) {
		vw(), wj(w2 - 2, w3 - 2)
	}

	function vw() {
		af.le[vu] = 0, af.gO[vu] = af.wU[vu] = 0, af.g2[vu] = [], af.gG[vu] = [], af.gH[vu] = [], af.f0[vu] = [], af.iP[vu] = af.iR[vu] = af.iQ[vu] = af.iS[vu] = 0
	}

	function wj(w2, w3) {
		var g8, aA, wk, wl;
		for (af.le[vu] = 1, af.iP[vu] = w2 + 10, af.iR[vu] = w3 + 10, af.iS[vu] = af.iQ[vu] = 0, wk = w2; wk < w2 + 4; wk++)
			for (wl = w3; wl < w3 + 4; wl++)(w2 < wk && wk < w2 + 3 || w3 < wl && wl < w3 + 3) && (g8 = ab.wY(wk, wl), ab.eV(g8)) && (af.iP[vu] = Math.min(wk, af.iP[vu]), af.iQ[vu] = Math.max(wk, af.iQ[vu]), af.iR[vu] = Math.min(wl, af.iR[vu]), af
				.iS[vu] = Math.max(wl, af.iS[vu]), vv[af.gO[vu]] = g8, af.gO[vu]++, ab.wZ(g8, vu));
		for (af.wU[vu] = af.gO[vu], aA = af.gO[vu] - 1; 0 <= aA; aA--) ab.wm(vv[aA], vu) ? (ab.g5(vv[aA], vu), af.gG[vu].push(vv[aA])) : ab.wn(vv[aA]) ? (ab.g5(vv[aA], vu), af.gH[vu].push(vv[aA])) : ab.wo(vv[aA]) && (ab.g5(vv[aA], vu), af.f0[vu]
			.push(vv[aA]))
	}

	function wd(w2, w3) {
		for (var g8, wg, wf = w3; w3 - 6 < wf; wf--)
			for (wg = w2; w2 - 6 < wg; wg--)
				if (g8 = ab.wY(wg, wf), ab.j3(g8)) return;
		return 1
	}
	this.dW = function() {
		if (vv = new Array(12), vt = 6, vq = 10, vo = bJ.dn(bQ.el, vq), vp = bJ.dn(bQ.em, vq), vr = bJ.dn(bQ.el - vq * vo, 2), vs = bJ.dn(bQ.em - vq * vp, 2), aC.gw)
			for (var aA = 0; aA < aC.jq; aA++) vu = aA, vw(), af.le[vu] = 1;
		(0 === aC.data.spawningType ? vx : 1 === aC.data.spawningType ? (vx(), function() {
			var w6 = aC.w7;
			aC.w8 || w6++;
			if (!(w6 < 3)) {
				for (var data = aC.data, j7 = (aC.gw ? aC.jq : 0) + data.teamPlayerCount[0], mP = aC.w5, w9 = new Uint32Array(w6), wA = new Uint32Array(w6), wB = new Uint16Array(w6), wC = new Uint16Array(w6), eY = be.eY, iP = af.iP, iR =
						af.iR, iQ = af.iQ, iS = af.iS, fF = bM.fF, fG = bM.fG, aA = j7; aA < mP; aA++) fF[aA] = iP[aA] + iQ[aA] >> 1, fG[aA] = iR[aA] + iS[aA] >> 1;
				for (aA = j7; aA < mP; aA++) {
					var id = eY[aA];
					w9[id] += fF[aA], wA[id] += fG[aA]
				}
				var kC = be.kC;
				for (aA = 1; aA < w6; aA++) {
					var g3 = Math.max(data.teamPlayerCount[kC[aA]], 1);
					wB[aA] = bJ.dn(w9[aA], g3), wC[aA] = bJ.dn(wA[aA], g3)
				}
				var wD = be.wD,
					wE = be.wE,
					wF = be.wF,
					fE = bM.fE;
				for (aA = 0; aA < 512; aA++) fE[aA] = aA;
				for (var e1 = 0; e1 < 2 + (4 <= w6); e1++)
					for (aA = j7; aA < mP; aA++) {
						for (var h0 = aA, wG = fE[h0], wH = 1, eq = bJ.wI(fF[wG] - wB[1], fG[wG] - wC[1]), et = 2; et < w6; et++) {
							var wJ = bJ.wI(fF[wG] - wB[et], fG[wG] - wC[et]);
							wJ < eq && (eq = wJ, wH = et)
						}
						var wK = eY[h0];
						if (wH !== wK) {
							if (2 === e1 && 4 <= w6) {
								var wL = Math.max((wH + 1) % w6, 1),
									wM = bJ.wI(fF[wG] - wB[wL], fG[wG] - wC[wL]);
								for (et = 1; et < w6; et++) wJ = bJ.wI(fF[wG] - wB[et], fG[wG] - wC[et]), eq < wJ && wJ < wM && (wM = wJ, wL = et);
								wL !== wK && bJ.wI(wB[wK] - wB[wL], wC[wK] - wC[wL]) < bJ.wI(wB[wK] - wB[wH], wC[wK] - wC[wH]) && (wH = wL)
							}
							var wN = kC[wH],
								wO = wE[wN] + (aC.gw ? 0 : wF[wN]),
								vc = wD[wO],
								wP = fE[vc],
								wQ = wE[wN + 1];
							eq = bJ.wI(fF[wP] - wB[wK], fG[wP] - wC[wK]);
							for (var ev = wO + 1; ev < wQ; ev++) {
								var wR = wD[ev],
									wS = fE[wR];
								(wJ = bJ.wI(fF[wS] - wB[wK], fG[wS] - wC[wK])) < eq && (eq = wJ, vc = wR)
							}
							vc < j7 || mP <= vc || (wP = fE[vc], w9[wK] += fF[wP] - fF[wG], wA[wK] += fG[wP] - fG[wG], w9[wH] += fF[wG] - fF[wP], wA[wH] += fG[wG] - fG[wP], g3 = data.teamPlayerCount[kC[wK]], wB[wK] = bJ.dn(w9[wK], g3),
								wC[wK] = bJ.dn(wA[wK], g3), g3 = data.teamPlayerCount[wN], wB[wH] = bJ.dn(w9[wH], g3), wC[wH] = bJ.dn(wA[wH], g3), fE[h0] = wP, fE[vc] = wG)
						}
					}! function() {
						for (var fE = bM.fE, iP = af.iP, iR = af.iR, iQ = af.iQ, iS = af.iS, gO = af.gO, wU = af.wU, gG = af.gG, gH = af.gH, f0 = af.f0, aA = 0; aA < 512; aA++) {
							var wV = fE[aA];
							if (wV !== aA) {
								wW(iP, aA, wV), wW(iR, aA, wV), wW(iQ, aA, wV), wW(iS, aA, wV), wW(gO, aA, wV), wW(wU, aA, wV), wW(gG, aA, wV), wW(gH, aA, wV), wW(f0, aA, wV), wX(aA), wX(wV), fE[aA] = aA;
								for (var j = wV, g9 = fE[j]; g9 !== aA;) g9 = fE[j = g9];
								fE[j] = wV
							}
						}
					}()
			}
		}) : function() {
			var w0 = aC.w0;
			for (vu = w0; vu < aC.eX; vu++) vw();
			for (vu = aC.gw ? aC.jq : 0; vu < w0; vu++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w2 = spawningData[2 * vu] + 1,
							spawningData = spawningData[2 * vu + 1] + 1;
						if (3 < w2 && w2 < bQ.el - 5 && 3 < spawningData && spawningData < bQ.em - 5 && ab.eV(ab.wY(w2, spawningData)) && wd(w2 + 3, spawningData + 3)) return w4(w2 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w1()) {
						for (var eu = aC.w5 = vu; eu < w0; eu++) vu = eu, vw();
						return
					}
					var w2 = vr + rJ * vq + bJ.dn(vq, 2),
						w3 = vs + rK * vq + bJ.dn(vq, 2);
					w4(w2, w3)
				}
		})(), bb.la[7] = af.gO[aC.eK]
	}, this.wp = function(j1, wq, wr) {
		var aA, w2, w3, g8, rJ, rK;
		for (vu = j1, aA = 0; aA < 20; aA++)
			for (w2 = wq + aA; wq - aA <= w2; w2--)
				for (w3 = wr + aA; wr - aA <= w3; w3--)
					if ((w2 === wq + aA || w2 === wq - aA || w3 === wr + aA || w3 === wr - aA) && 3 < w2 && w2 < bQ.el - 5 && 3 < w3 && w3 < bQ.em - 5 && ab.eV(ab.wY(w2, w3)) && wd(w2 + 3, w3 + 3)) {
						if (0 < af.gO[vu]) {
							for (rK = rJ = g8 = void 0, rJ = af.iQ[vu]; rJ >= af.iP[vu]; rJ--)
								for (rK = af.iS[vu]; rK >= af.iR[vu]; rK--) g8 = 4 * (rK * bQ.el + rJ), ab.wt(vu, g8) && (ab.wu(g8), af.gO[vu]--);
							vw()
						}
						return wj(w2 - 1, w3 - 1), !0
					} return !1
	}, this.wv = function(j1) {
		vu = j1, w1() ? w4(vr + rJ * vq + bJ.dn(vq, 2), vs + rK * vq + bJ.dn(vq, 2)) : vw()
	}
}

function ww() {
	aq.wx(), tf.setTransform(iC, 0, 0, iC, 0, 0), tf.imageSmoothingEnabled = iC < 3, tf.drawImage(bQ.vR, aR.wy(), aR.wz()), bN.x0.te(), tf.drawImage(x1, aR.wy(), aR.wz()), aq.te(), bL.te(), ae.te(), (aC.mA ? (bf.te(), bA) : (aM.te(), aU.te(), aQ
	.te(), bA.te(), au.te(), aV.te(), aR.te(), aP.te(), bf.te(), aT.te(), aO.te(), aL.te(), aK.te(), aW.te(), bc.te(), at)).te(), s.te()
}

function x2(x3, i, j) {
	x3.clearRect(0, 0, i, j), x3.fillStyle = b9.me, x3.fillRect(0, 0, i, j)
}

function x4(x3, i, j, x5) {
	x3.fillStyle = b9.mh, x3.fillRect(0, 0, i, x5), x3.fillRect(0, 0, x5, j), x3.fillRect(i - x5, 0, x5, j), x3.fillRect(0, j - x5, i, x5)
}

function x6(x3, eh, ej, hS, x5, g8, x7) {
	x3.fillStyle = b9.mh;
	var g8 = Math.floor(hS * g8),
		ru = (g8 += (g8 - x5) % 2, Math.floor((g8 - x5) / 2)),
		hS = Math.floor((hS - g8) / 2);
	x3.fillRect(eh + hS, ej + hS + ru, g8, x5), x7 && x3.fillRect(eh + hS + ru, ej + hS, x5, g8)
}

function x9() {
	this.dW = function() {
		8 === aC.k7 && aM.xA()
	}, this.xB = function(xC) {
		var elo = aC.data.elo,
			hk = (elo[xC] - elo[1 - xC]) / 10,
			hk = 8 / (1 + Math.pow(2, hk / 32)),
			hk = Math.floor(10 * hk + .5),
			xE = this.xF(elo[xC] + (1 + aC.xG) * hk + 1),
			elo = this.xF(elo[1 - xC] - hk);
		0 === xC ? aM.xI(xE, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xI(elo, xE, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xF = function(elo) {
		return 16e3 === (elo = bJ.p7(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ca() {
	this.qp = new xJ, this.vU = new xK
}

function xK() {
	this.hI = !1;
	this.xO = [], this.xP = 100;
	var m7, m8, gap, hS, xL, xN, xQ = 0,
		xR = new Array(9),
		xS = [],
		xT = [],
		xU = 0,
		xV = 0,
		xW = 0,
		xX = 0;

	function xj() {
		xR.sort(function(et, eu) {
			return eu.jv - et.jv
		});
		for (var pG = "" + xR[0].oC, aA = 1; aA < 9; aA++) pG += "," + xR[aA].oC;
		for (aA = 0; aA < 9; aA++) pG += "," + xR[aA].jv;
		bh.dr.ds(120, pG)
	}
	this.dW = function() {
		for (var xY = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xY.length; aA++) {
			var color = 6 === xY[aA] ? b9.n7 : b9.mf;
			this.xO.push(b8.canvas.xZ(aa.get(3), xY[aA], color))
		}
		for (aA = 0; aA < ai.qp.xa; aA++) xT.push(ai.qp.xb - ai.qp.xa + aA);
		for (aA = 0; aA < ai.qp.xc; aA++) xT.push(ai.qp.xd + aA);
		var xe = ai.qp.xf(bI.xe);
		for (aA = 0; aA < xe.length; aA++) xT.push(xe[aA]);
		! function() {
			var aA, g = bh.dr.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xR[aA] = {
					oC: 1015 + aA,
					jv: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f2 = parseInt(g[aA]),
						ev = (f2 = 0 <= f2 && f2 < ai.qp.xb ? f2 : 0, parseInt(g[aA + 9]));
					ev = 0 <= ev && ev < 1e3 ? ev : 0, xR[aA] = {
						oC: f2,
						jv: ev
					}
				}
		}()
	}, this.show = function(kt, ku, xk) {
		var aA;
		if (xU = kt, xV = ku, xQ = xk || 0, this.hI = !0, xS = [], 0 === xQ)
			for (aA = 0; aA < 9; aA++) xS.push(xR[aA].oC);
		else {
			var eu = 49 * xQ,
				xk = eu - 49;
			for (xk >= xT.length && (xQ = 1, xk = 0, eu = 49), aA = xk = (eu = Math.min(eu, xT.length)) - 49; aA < eu; aA++) xS.push(xT[aA])
		}
		xS.push(1024);
		xk = xS.length, hS = Math.floor((z.a0.qx() ? .075 : .0468) * h.pb), gap = Math.floor(hS / 3), (xW = 10 * (xL = hS + gap)) > h.i && (xW = h.i, gap = (xL = xW / 10) - (hS = 3 * xL / 4)), xN = bJ.dn(xk, 10) + !!(xk % 10), (xX = xN * xL) > h
			.j && (xX = h.j, gap = (xL = xX / xN) - (hS = 3 * xL / 4)), xk = .5 * gap;
		m7 = Math.min(Math.max(kt - .5 * xW + xk, xk), h.i - xW + xk), m8 = Math.min(Math.max(ku - .5 * xX + xk, xk), h.j - xX + xk)
	}, this.go = function(kt, ku, player) {
		if (!this.hI) return !1;
		if (this.xm(kt, ku)) {
			kt = bJ.p7(bJ.dn(kt - m7 + .5 * gap, xL), 0, 9);
			if ((kt += 10 * bJ.p7(bJ.dn(ku - m8 + .5 * gap, xL), 0, 9)) >= xS.length) return aK.qq(), !0;
			ku = xS[kt];
			if (1024 === ku) return this.show(xU, xV, xQ + 1), !0;
			! function(oC) {
				for (var aA = 0; aA < 9; aA++) xR[aA].jv = Math.floor(.99 * xR[aA].jv);
				for (aA = 0; aA < 9; aA++)
					if (oC === xR[aA].oC) return xR[aA].jv = Math.min(xR[aA].jv + 30, 999), xj();
				xR.splice(5, 0, {
					oC: oC,
					jv: Math.max(xR[4].jv, 30)
				}), xR.pop(), xj()
			}(ku), player === aC.eK ? b6.gx.oB(ku) : b6.fw.oP(ku, player)
		}
		return aK.qq(), !0
	}, this.xm = function(kt, ku) {
		return !(kt < m7 - .5 * gap || ku < m8 - .5 * gap || m7 + xW - .5 * gap <= kt || m8 + xX - .5 * gap <= ku)
	}, this.te = function() {
		tf.fillStyle = b9.me, tf.fillRect(m7 - .5 * gap, m8 - .5 * gap, xW, xX);
		for (var hO = .5 * ba.xn, ea = (tf.lineWidth = ba.xn, tf.strokeStyle = tf.fillStyle = b9.mh, tf.strokeRect(m7 - .5 * gap + hO, m8 - .5 * gap + hO, xW - 2 * hO, xX - 2 * hO), tf.imageSmoothingEnabled = !0, xS.length), aA = 0; aA <
			ea; aA++) this.xo(xS[aA], tf, m7 + aA % 10 * xL, m8 + bJ.dn(aA, 10) * xL, hS);
		tf.imageSmoothingEnabled = !1
	}, this.xo = function(oC, hY, eh, ej, hS) {
		var eE;
		oC >= 1024 - ai.qp.xa ? (eE = hS / this.xP, hY.setTransform(eE, 0, 0, eE, eh, ej), hY.drawImage(this.xO[oC - 1024 + ai.qp.xa], 0, 0), hY.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pZ.textAlign(hY, 1), b8.pZ.textBaseline(hY, 1), hY.font = b8.pZ
			.rN(0, .89 * hS), hY.fillText(ai.qp.xp(oC), eh + .5 * hS, ej + (.35 - b8.pZ.xq + .56) * hS))
	}
}

function xJ() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xa = 13, this.xc = this.emojis.length, this.xd = 676, this.xb = 1024, this.xr = this.emojis.indexOf("💀"), this.xs = this.xr + 1, this.xt = this.emojis.indexOf("🥇"), this.xu = this.emojis.indexOf("😊"), this.xp = function(f2) {
		return f2 < this.xd ? String.fromCharCode(55356, 56806 + bJ.dn(f2, 26), 55356, 56806 + f2 % 26) : this.emojis[Math.min(f2 - this.xd, this.xc - 1)]
	}, this.xf = function(pG) {
		for (var ea = pG.length - 2, g = [], aA = 0; aA < ea; aA++) {
			var hg = pG.charCodeAt(aA) - 56806,
				hh = pG.charCodeAt(aA + 2) - 56806;
			0 <= hg && hg < 26 && 0 <= hh && hh < 26 && (g.push(26 * hg + hh), aA += 3)
		}
		return g
	}, this.xv = function(f2) {
		return f2 < this.xd
	}, this.xw = function(f2) {
		return f2 >= 1024 - this.xa
	}, this.xx = function(f2) {
		return f2 >= this.xd && f2 < this.xd + this.xs
	}
}

function bz() {
	this.rp = new xy, this.us = new xz, this.uu = new y0, this.dW = function() {
		this.rp.dW()
	}
}

function xz() {
	this.v7 = function(pG) {
		for (var ea = pG.length, i = bB, aA = 0; aA < ea; aA++) i.a7(16, pG.charCodeAt(aA))
	}
}

function xy() {
	var y1 = new Uint8Array(64);
	this.dW = function() {
		var aA;
		for (y1[0] = 45, y1[37] = 95, aA = 0; aA < 10; aA++) y1[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y1[aA + 11] = 65 + aA, y1[aA + 38] = 97 + aA
	}, this.rr = function(y2) {
		for (var ux = bF, v5 = new Uint8Array(y2), aA = 0; aA < y2; aA++) v5[aA] = ux.oa(6);
		return v5
	}, this.rq = function(v5) {
		for (var ea = v5.length, y3 = y1, g = [], aA = 0; aA < ea; aA++) g.push(String.fromCharCode(y3[v5[aA]]));
		return g.join("")
	}, this.y4 = function(value, y5) {
		for (var y3 = y1, g = [], aA = 0; aA < y5; aA++) g.push(String.fromCharCode(y3[value >> 6 * (y5 - 1 - aA) & 63]));
		return g.join("")
	}
}

function c7() {
	var y6, y7, y8;
	y6 = [32, 65, 191, 913, 931], y7 = [64, 127, 688, 930, 1155], y8 = new Array(y6.length + 1);
	for (var aA = 0; aA < y8.length; aA++) {
		y8[aA] = 0;
		for (var et = aA - 1; 0 <= et; et--) y8[aA] += y7[et] - y6[et]
	}

	function yE(ev) {
		for (var aA = y6.length - 1; 0 <= aA; aA--)
			if (ev >= y6[aA] && ev < y7[aA]) return aA;
		return -1
	}
	this.uy = function(pG) {
		return 0 !== (pG = pG.trim()).indexOf("Bot ") && 0 !== pG.indexOf("[Bot] ") && function(pG, yB, yC) {
			var ea = (pG = pG.trim()).length;
			if (ea < yB || yC < ea) return !1;
			for (var ev, yD = 0, aA = 0; aA < ea; aA++)
				if (ev = pG.charCodeAt(aA), yD += 65 <= ev && ev <= 90 || 1040 <= ev && ev <= 1071 ? 1 : 0, -1 === yE(ev)) return !1;
			if (3 < yD && yD > Math.floor(ea / 2)) return !1;
			return !0
		}(pG, 3, 20)
	}, this.yF = function(pG) {
		for (var ea = (pG = pG.trim()).length, g = [], aA = 0; aA < ea; aA++) {
			var ev, g8 = yE(ev = pG.charCodeAt(aA));
			g.push(y8[g8] + ev - y6[g8])
		}
		return g
	}, this.vC = function(g) {
		for (var ev, eu, pG = "", ea = g.length, aA = 0; aA < ea; aA++)
			for (eu = 1; eu < y8.length; eu++)
				if (g[aA] < y8[eu]) {
					ev = y6[eu - 1] + g[aA] - y8[eu - 1], pG += String.fromCharCode(ev);
					break
				} return pG
	}, this.yG = function(pG) {
		for (var g = this.yF(pG), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yH = function(pG) {
		for (var g = new Array(Math.floor(pG.length / 3)), aA = 0; aA < pG.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pG.substring(aA, aA + 3));
		return this.vC(g)
	}, this.yI = function(pG) {
		for (var f2, g = [pG.length], aA = 0; aA < pG.length; aA++) g[aA] = pG.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pG.length; aA++) aA === pG.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f2 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f2 + (f2 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yJ = function(pG) {
		for (var ev, result = "", aA = 0; aA < pG.length; aA++) 48 <= (ev = pG.charCodeAt(aA)) && ev < 58 ? result += String.fromCharCode(ev) : 65 <= ev && ev < 75 ? result += "0" + (ev - 65).toString() : 75 <= ev && ev < 91 ? result += (ev - 65)
			.toString() : 97 <= ev && ev < 123 && (result += (ev - 71).toString());
		return result
	}, this.yK = function(pG) {
		for (var ea = pG.length, g = [], aA = 0; aA < ea; aA++)(ev = pG.charCodeAt(aA)) < 58 ? g.push(pG[aA]) : (ev -= ev < 91 ? 65 : 71, g.push(String(bJ.dn(ev, 10))), g.push(String(ev - 10 * bJ.dn(ev, 10))));
		var ea = g.length - 2,
			ev = 0,
			v5 = [];
		for (aA = 0; aA < ea; aA += 3) v5[ev++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return v5
	}, this.yL = function() {
		for (var e1, yM = "", aA = 0; aA < 6; aA++) e1 = 48 + aw.random() % 36, e1 += 58 <= e1 ? 39 : 0, yM += String.fromCharCode(e1);
		return yM
	}
}

function y0() {
	this.yF = function(pG, vm, yN) {
		for (var yO = [], ea = pG.length, max = 0, aA = 0; aA < ea; aA++) {
			var f2 = pG.charCodeAt(aA);
			yO.push(f2), max = Math.max(max, f2)
		}
		var vn = max < 128 ? 7 : 16;
		for (yN.a7(vm, ea), yN.a7(1, +(16 == vn)), aA = 0; aA < ea; aA++) yN.a7(vn, yO[aA])
	}
}

function d5() {
	this.yP = new yQ, this.result = new yR, this.h4 = new yS, this.yT = new yU, this.yV = new yW, this.yX = new yY, this.dW = function() {
		this.result.dW()
	}
}

function yS() {
	this.yZ = function() {
		for (var ea = ak.jr, ya = ak.js, yb = [], aA = 0; aA < ea; aA++) {
			var g8 = ya[aA];
			b8.fw.yc(g8) && yb.push(g8)
		}
		return yb
	}, this.yd = function() {
		if (0 === be.kC[aC.ye]) return this.yf();
		bf.l3(aC.ye);
		for (var yb = [], ea = bM.f6[0], fE = bM.fE, aA = 0; aA < ea; aA++) {
			var g8 = fE[aA];
			b8.fw.yc(g8) && yb.push(g8)
		}
		return yb
	}, this.yf = function() {
		var g8 = l5[0];
		return b8.fw.yc(g8) ? [g8] : []
	}, this.yg = function(yb) {
		for (var ea = yb.length, dm = 0, gO = af.gO, aA = 0; aA < ea; aA++) dm += gO[yb[aA]];
		return dm
	}
}

function yQ() {
	function yi() {
		if (2 === aC.ym) return 1;
		au.yn(), aC.ym = 2, aC.yo = aC.yp
	}

	function yk() {
		bP.yV.yq(), aW.show(1 === aC.yr, !1, 2 === aC.yr), bP.result.yq(), bP.yX.ik(), bP.yT.ik(), aM.ys(!0), aM.yt(247), aM.yt(956), aM.yt(957), aU.lQ(!0), aV.lQ(!0), au.lQ(), bA.yu(), aC.gk && bd.yv.yw(), bd.de = !0, bZ.yx(), z.a0.setState(0)
	}
	this.yh = function() {
		yi() || (aC.yj = 2, yk())
	}, this.yl = function() {
		yi() || (aC.yj = 1, yk())
	}
}

function yU() {
	this.ik = function() {
		var z6;
		2 === aC.yj ? (aM.yy(0, 59), aG.mG(2700)) : aC.k7 < 7 ? (z6 = be.kC[aC.ye], z6 = be.z8[z6], aP.z9(L(23, [z6]), 2, 1, 12), aM.zA(0, L(24, [z6]), 40, 0, b9.mh, b9.me, -1, !1), aG.mG(2700)) : 8 === aC.k7 ? (aC.yr ? aM.yy(aC.z3, 2) : aM.yy(
			1 - aC.eK, 3), aC.z4.xB(aC.z3), aM.z5(aC.z3), aG.m1(aC.z3, 2700, !1, 0)) : 9 === aC.k7 ? (aM.zB(), aG.mG(2700)) : (aM.z5(aC.z3), aG.m1(aC.z3, 2700, !1, 0))
	}
}

function yY() {
	function zC() {
		var sB = Math.floor(af.zK[aC.eK] / 50);
		0 !== sB && (sB = Math.min(sB, 400), aM.zA(440, L(25, [(sB / 100).toFixed(2)]), 40, 0, b9.mz, b9.me, -1, !1))
	}
	this.ik = function() {
		if (b8.fw.gn(aC.eK) && zC(), 0 !== bP.result.zD && 0 !== bP.result.yb.length && (function() {
				aM.zA(520, L(26), 40, 0, b9.mh, b9.me, -1, !1);
				for (var yb = bP.result.yb, ea = yb.length, gO = af.gO, g = [], aA = 0; aA < ea; aA++) {
					var g8 = yb[aA];
					g.push({
						g8: g8,
						dm: gO[g8]
					})
				}
				g.sort((et, eu) => eu.dm - et.dm);
				var z8 = af.zL,
					dm = bP.result.zM,
					sB = bP.result.zD,
					pG = "";
				for (aA = 0; aA < ea; aA++) pG += z8[g[aA].g8] + ": " + (g[aA].dm * sB / (100 * dm)).toFixed(2) + "   ";
				aM.zA(560, b8.zN.zO(pG), 40, 0, b9.mz, b9.me, -1, !1)
			}(), 7 !== aC.k7 && 10 !== aC.k7 || 0 !== aC.yr && aM.zA(600, L(27), 40, 0, b9.mh, b9.me, -1, !1), !(2 === aC.yj || 7 <= aC.k7))) {
			var yb = bP.result.yb,
				ea = yb.length,
				zP = af.zP,
				zL = af.zL,
				gO = af.gO,
				zQ = [];
			loop: for (var aA = 0; aA < ea; aA++) {
				var g8 = yb[aA],
					zR = b8.zN.zS(zP[g8]);
				if (null !== zR) {
					for (var zT = gO[g8], eu = zQ.length - 1; 0 <= eu; eu--)
						if (zR === zQ[eu].name) {
							zQ[eu].dm += zT, zQ[eu].g.push({
								g8: g8,
								dm: zT
							});
							continue loop
						} zQ.push({
						name: zR,
						dm: zT,
						g: [{
							g8: g8,
							dm: zT
						}]
					})
				}
			}
			if (0 !== zQ.length) {
				zQ.sort((et, eu) => eu.dm - et.dm);
				var g = zQ[0].g,
					zU = (g.sort((et, eu) => eu.dm - et.dm), "[" + zQ[0].name + "]"),
					sB = bP.result.zD,
					zV = 512 * sB / 26214400,
					pG = (aM.zA(0, L(28, [zU, zV.toFixed(4)]), 40, 0, b9.mh, b9.me, -1, !1), aM.zA(600, L(29), 40, 0, b9.mh, b9.me, -1, !1), ""),
					kY = g.length,
					dm = bP.result.zM,
					v3 = zQ[0].dm,
					zW = 1e4 * zV;
				for (aA = 0; aA < kY; aA++) pG += zL[g[aA].g8] + ": " + (g[aA].dm * sB / (200 * dm)).toFixed(2) + " | " + (zW * g[aA].dm / v3).toFixed(1) + "   ";
				aM.zA(640, b8.zN.zO(pG), 40, 0, b9.mz, b9.me, -1, !1);
				zV = (v3 * sB / (1e3 * dm)).toFixed(2);
				aM.zA(680, L(30, [zV, zU]), 40, 0, b9.mh, b9.me, -1, !1), aC.gk || aM.zA(720, L(31) + bI.zY, 736, 0, b9.mh, b9.n5, -1, !1)
			}
		}
	}, this.zH = function() {
		var zI, vV;
		aC.k9 || (zI = af, vV = aC.eK, 0 === zI.zJ[vV]) || zI.iu[vV] < 1 || 2 * zI.ov[vV] > 3 * (zI.it[vV] + zI.iu[vV]) || zC()
	}
}

function yR() {
	this.dW = function() {
		this.zZ = 0, this.yb = [], this.zM = 0, this.zD = 0
	}, this.yq = function() {
		var rB, ze;
		aC.k9 || (rB = this, 2 === aC.yj ? rB.yb = bP.h4.yZ() : aC.hQ ? rB.yb = bP.h4.yd() : rB.yb = bP.h4.yf(), rB.zZ = bg.zb.zc(), rB.zM = Math.max(1, bP.h4.yg(rB.yb)), b6.fw.oY(), 8 === aC.k7 ? (bP.result.zD = 0, 1 !== aC.yr || 0 === bh.dr
			.data[107].value || 100 <= (ze = bh.dr.data[108].value) || (bP.result.zD = (1 + aC.xG) * (100 - ze) * 10)) : (rB.zD = 100 * bP.result.zZ * (1 + aC.xG), 9 === aC.k7 && (rB.zD = rB.zD >> 1)))
	}
}

function yW() {
	this.yq = function() {
		if (2 === aC.yj) aC.yr = 2;
		else {
			if (8 === aC.k7) b8.fw.jE(0) || 0 === af.le[0] ? aC.z3 = 1 : b8.fw.jE(1) || 0 === af.le[1] ? aC.z3 = 0 : aC.z3 = +(af.gO[1] > af.gO[0]);
			else {
				if (aC.hQ) {
					var l1 = bf.zg();
					if (aC.ye = l1, be.kC[l1]) return void(aC.yr = +(be.eY[aC.eK] === l1))
				}
				aC.z3 = l5[0]
			}
			aC.yr = +(aC.z3 === aC.eK)
		}
	}
}

function dA() {
	this.id = 0, this.f3 = 0, this.uE = null, this.uF = null, this.uG = null, this.uM = null, this.a0 = new zh, this.dW = function() {
		var self, f3;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f3 = Android.getVersion()) < 12 || (self.f3 = f3, self.id = 1, self.uF = Android),
			function(self) {
				var f3;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uG = mwIOSdataX, self.uM = window.webkit.messageHandlers.iosCommandA, f3 = self
					.uG.version, self.f3 = f3 ? Number(f3) : 0)
			}(this),
			function(self) {
				var uE;
				if (0 === self.id) {
					try {
						if (!(uE = window.localStorage)) return;
						uE.setItem("tls7", "1"), uE.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uE = uE
				}
			}(this)
	}
}

function zh() {
	this.zl = function() {
		bh.r1.uZ(), bh.r1.ua(), ay.x.close(0, 3255), 0 === z.id ? z.uE && z.uE.clear() : 1 === z.id ? z.uF.saveString(199, "") : 2 === z.id && z.uM.postMessage("clear")
	}, this.zm = function() {
		2 === z.id ? z.uM.postMessage("showConsentForm") : 1 === z.id && z.uF.setState(7)
	}, this.zn = function() {
		this.setState(14)
	}, this.qx = function() {
		return 1 === bh.dr.u9(2)
	}, this.zo = function() {
		bh.dr.ds(102, "")
	}, this.setState = function(zp) {
		1 === z.id && 5 <= z.f3 && z.uF.setState(zp)
	}, this.a1 = function() {
		var zq;
		1 === z.id && 7 <= z.f3 ? z.uF.setState(5) : ((zq = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zq.toString())
	}, this.db = function() {
		1 !== z.id || z.f3 < 17 || z.uF.saveString(23, document.documentElement.outerHTML)
	}, this.eA = function() {
		0 !== z.id && (1 === z.id ? z.uF.prepareAd("1688441405") : 2 === z.id && (0 === z.f3 ? z.uM.postMessage("prepare ad 4500876070") : z.uM.postMessage("loadAds 4500876070")))
	}, this.zr = function(dm) {
		return 0 !== z.id && (1 === z.id ? 12 <= z.f3 && (z.uF.presentAd(dm), !0) : 2 === z.id && (0 === z.f3 ? z.uM.postMessage("show ad " + dm) : z.uM.postMessage("showAd"), !0))
	}, this.dg = function() {
		2 === z.id && z.f3 < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.zs + "' target='_blank'>" + bI
			.zs + "</a>", !0, [new v("⬅️ " + L(32), function() {
				s.t(0)
			}, b9.nM)]))
	}
}

function dP() {
	function zv(e) {
		a06(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(32), function() {
				s.a07()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n4)]))
	}

	function a05(e) {
		a06(e), s.t(4, 5, new u(L(33), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zz(e), !0))
	}

	function zz(e) {
		var pG = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pG : 4527 === e ? "Player already in lobby" + pG : 4530 === e ? "Lobby Timeout" + pG : 4528 === e ? "Lobby Kick: Another login detected." + pG : 4540 === e ?
			"You have been kicked." + pG : "Unknown error" + pG
	}

	function a06(e) {
		zy(e), s.x.y()
	}

	function zy(e) {
		var zp = aZ.zx();
		6 === zp ? ay.x.a09(e) : bm.a01 ? (s.w(), bm.t8(), ay.x.close(ay.x.a02, 3256)) : 8 === zp && aC.a0A(!0)
	}
	this.zt = function(zu, e) {
		zu === 1 && __fx.customLobby.isActive() && aZ.zx() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rm && 0 === zu)
			if (4211 === e) zv(e);
			else {
				if (4480 === e) return bh.r1.ub(), void s.t(4, 0, new u(L(35), L(36), !0));
				8 !== aZ.zx() && zy(), s.t(4, 0, new u(L(33), zz(e), !0))
			}
		else {
			var zp = aZ.zx();
			if (6 === zp) {
				if (4211 === e) return void zv(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a00(zu)
			} else {
				if (!bm.a01) return 8 === zp ? void(zu !== ay.x.a03 || aC.k9 || 1 !== aC.ym || aC.gk || aM.a04(L(34, [e]))) : void 0;
				if (zu !== ay.x.a02) return
			}
			a05(e)
		}
	}, this.a08 = function(e) {
		8 === aZ.zx() ? aC.k9 || 1 !== aC.ym || aM.a04(L(34, [e])) : a05(e)
	}, this.r = function() {
		a06(3268)
	}
}

function cz() {
	var a0B, a0C, a0D = -15e3,
		a0E = !1;

	function go(e) {
		a0Y() || (a0E = !0, a0Z(e, 1), ay.x.a0a(ay.x.a03), a0b(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0N(e) {
		a0D = bd.lx, a0Z(e, 1), ay.x.a0a(ay.x.a03), 0 < e.touches.length && (a0B = Math.floor(h.k * e.touches[0].clientX), a0C = Math.floor(h.k * e.touches[0].clientY), ar.a0N(e) || a0b(a0B, a0C))
	}

	function a0b(eh, ej) {
		s.go(eh, ej), 0 === aC.ym ? aZ.go(eh, ej) : bA.a0c(eh, ej) || bc.go(eh, ej) || aW.go(eh, ej) || aK.a0d(eh, ej) || aO.go(eh, ej) || 0 <= aL.go(eh, ej) || au.go(eh, ej) || bH.a0e(eh, ej) || aK.a0f(eh, ej)
	}

	function a0J(e) {
		a0Y() || (a0E = !0, a0Z(e, 1), a0g(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0O(e) {
		a0D = bd.lx, a0Z(e, 1), 0 < e.touches.length && (a0B = Math.floor(h.k * e.touches[0].clientX), a0C = Math.floor(h.k * e.touches[0].clientY), ar.a0O(e) || a0g(a0B, a0C))
	}

	function a0g(eh, ej) {
		s.a0J(eh, ej), 0 === aC.ym ? aZ.a0J(eh, ej) : (bR.gh(eh, ej), bc.a0J(eh, ej) || (aL.a0J(eh, ej), aK.hI() ? aK.a0J(eh, ej) : aQ.gp ? aQ.a0J(eh) && (bd.de = !0) : (aU.a0J(eh, ej), aR.mC && aR.a0J(eh, ej) && (bd.de = !0))))
	}

	function a0L(e) {
		a0Y() || (a0Z(e, 1), a0h(), 0 === aC.ym ? (aZ.click(-1024, -1024), aS.qZ()) : (aU.a0i(-1024, -1024), aL.a0J(-1024, -1024), aQ.a0j(), aR.mC = !1))
	}

	function a0K(e) {
		a0Y() || (a0Z(e, 1), a0k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0H && (bH.a0H = !1, e.preventDefault()))
	}

	function click(e) {
		a0Y() || a0Z(e, 1)
	}

	function a0P(e) {
		a0D = bd.lx, a0Z(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.ym ? aR.mC = !1 : ar.a0l() || (a0k(a0B, a0C, !1), bH.a0H && (bH.a0H = !1, e.preventDefault()))
	}

	function a0Q(e) {
		a0D = bd.lx, a0Z(e, 1), a0k(a0B, a0C, !1), bH.a0H && (bH.a0H = !1, e.preventDefault())
	}

	function a0R(e) {}

	function a0S(e) {}

	function a0T(e) {
		a0Y() || a0Z(e, 0)
	}

	function a0k(eh, ej, a0m) {
		a0h(), 0 === aC.ym ? aZ.click(eh, ej) : (aU.a0i(eh, ej), bc.a0i(), aQ.a0j(), aR.mC = !1, aK.click(eh, ej, a0m) ? bd.de = !0 : aL.a0K(eh, ej))
	}

	function a0h() {
		s.a0h()
	}

	function a0M(e) {
		var eh, ej, deltaY;
		a0Y() || (a0Z(e, 1), ay.x.a0a(ay.x.a03), eh = Math.floor(h.k * e.clientX), ej = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0M(eh, ej, deltaY), 0 === aC.ym ? aZ.a0M(eh, ej, deltaY) : aU.a0M(eh, ej,
			deltaY) || (aQ.a0n(eh, ej) ? aQ.a0M(deltaY) && (bd.de = !0) : aR.a0M(eh, ej, deltaY)))
	}

	function a0U(e) {
		a0Z(e, 0)
	}

	function a0Z(e, id) {
		0 === id && s.hI() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.zx() && e.preventDefault()
	}

	function a0V(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0Y() || 0 < h.rU || (e = e.code) && e.length && (bV.ev(e, 18) ? ap.a0p(3) : bV.ev(e, 22) ? ap.a0p(0) : bV.ev(e, 20) ? ap.a0p(1) : bV.ev(e, 24) ? ap.a0p(2) : bV.ev(e, 10) ? aQ.a0q(31 / 32) : bV.ev(e, 8) ? aQ.a0q(32 / 31) : bV.ev(e, 6) ? aQ
			.a0q(7 / 8) : bV.ev(e, 4) ? aQ.a0q(8 / 7) : bV.ev(e, 14) ? 0 !== aC.ym && aR.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.ev(e, 16) ? 0 !== aC.ym && aR.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.ev(e, 0) ? aC
			.ym && bR.gi(!1) : bV.ev(e, 2) ? aC.ym && bR.gi(!0) : bV.ev(e, 26) ? aC.ym && bR.hC() : bV.ev(e, 28) && aC.ym && bR.hH())
	}

	function a0W(e) {
		if (!a0Y() && !(0 < h.rU || bd.lx < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0r(1) || "Space" === code && s.a0r(0))) return bm.a01 ? bm.tE.a0r(code) ? void 0 : void("Escape" === code && bH.f4()) : void(8 !== aZ.zx() && aZ.a0r(e) ? bd.de = !0 : "Escape" === code ?
				bH.f4() : bV.ev(code, 18) ? ap.a0s(3) : bV.ev(code, 22) ? ap.a0s(0) : bV.ev(code, 20) ? ap.a0s(1) : bV.ev(code, 24) ? ap.a0s(2) : bV.ev(code, 12) ? bA.a0t(!aC.mA) : "Space" === code && aC.ym && (aL.gl && aL.a0u(), aC.gk) && bA
				.a0v(!1))
		}
	}

	function a0X() {
		"hidden" === document.visibilityState ? 1 === aC.ym && (aC.gk ? bA.a0w() : !aC.k9 || aL.gl || aC.gw || aL.a0u()) : bd.de = !0
	}

	function a0Y() {
		return a0D + 15e3 > bd.lx
	}

	function resize() {
		h.a0y()
	}
	this.a0F = 0, this.a0G = "", this.a0H = !1, this.dW = function() {
		a0I.addEventListener("mousedown", go, {
			passive: !1
		}), a0I.addEventListener("mousemove", a0J, {
			passive: !1
		}), a0I.addEventListener("mouseup", a0K, {
			passive: !1
		}), a0I.addEventListener("click", click, {
			passive: !1
		}), a0I.addEventListener("mouseleave", a0L, {
			passive: !1
		}), a0I.addEventListener("wheel", a0M, {
			passive: !1
		}), a0I.addEventListener("touchstart", a0N, {
			passive: !1
		}), a0I.addEventListener("touchmove", a0O, {
			passive: !1
		}), a0I.addEventListener("touchend", a0P, {
			passive: !1
		}), a0I.addEventListener("touchcancel", a0Q, {
			passive: !1
		}), a0I.addEventListener("dragover", a0R), a0I.addEventListener("drop", a0S), a0I.addEventListener("dblclick", a0T), document.addEventListener("contextmenu", a0U), document.addEventListener("keydown", a0V), document.addEventListener(
			"keyup", a0W), document.addEventListener("visibilitychange", a0X), window.addEventListener("resize", resize)
	}, this.a0e = function(eh, ej) {
		return !!bA.go(eh, ej) || !!(aU.go(eh, ej) || aR.go(eh, ej) || aQ.go(eh, ej) || aM.go(eh, ej))
	}, this.a0x = a0Y, this.q2 = function() {
		return !a0E || 0 < a0D
	}, this.f4 = function() {
		if (!s.hI()) return 8 === aZ.zx() ? aC.mA ? void bA.a0t(!1) : bc.hI ? void bc.a0u() : void aL.a0u() : void(7 !== aZ.zx() && 6 === aZ.zx() && aY.a0z());
		s.a0r(2)
	}
}

function bv() {
	this.pZ = new a10, this.pi = new a11, this.fw = new a12, this.zN = new a13, this.x3 = new a14, this.a15 = new a16, this.canvas = new a17, this.color = new a18, this.a19 = new a1A, this.dW = function() {
		this.pZ.uY()
	}
}

function a11() {
	this.vT = function(g) {
		g.fill(0)
	}, this.a1B = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++) g[aA] = []
	}, this.a1C = function(hg, a1D) {
		for (var hh = bM.fB, aA = 0; aA < 3; aA++) hh[aA] = a1D * hg[aA];
		return hh
	}, this.a1E = function(hg, hh, a1F) {
		for (var hk = 0, aA = 0; aA < 3; aA++) hk += Math.abs(hg[aA] - hh[aA]);
		return a1F <= hk
	}, this.a1G = function(hg, a1H) {
		for (var aA = 0; aA < 3; aA++) hg[aA] = bJ.p7(hg[aA] + a1H, 0, 255);
		return hg
	}, this.a1I = function(g, s7, s8) {
		s8 = s8 || g.length - 1;
		for (var a1J = 0, aA = s7 = s7 || 0; aA <= s8; aA++) a1J += g[aA];
		return a1J
	}, this.a1K = function(g, a1L) {
		for (var aA, a1M, ea = g.length, a1N = [], et = ea - 1; 0 <= et; et--) {
			for (aA = a1M = 0; aA < ea; aA++) a1L(g[aA]) < a1L(g[a1M]) && (a1M = aA);
			ea--, a1N.push(g[a1M]), g[a1M] = g[ea], g.pop()
		}
		return a1N
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
	}, this.a1O = function(g, f2) {
		for (var ea = g.length, g3 = 0, aA = 0; aA < ea; aA++) g3 += g[aA] > f2;
		return g3
	}, this.a1P = function(a1Q, a1R, min) {
		for (var ea = a1R[0], aA = ea - 1; 0 <= aA; aA--) a1Q[aA] < min && (a1Q[aA] = a1Q[--ea]);
		a1R[0] = ea
	}, this.a1S = function(g, ea, value) {
		for (var aA = 0; aA < ea; aA++) g[aA] -= value
	}, this.a1T = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1U = function(pG, g, a1V) {
		g.fill(0);
		for (var sB = pG.split(","), ea = Math.min(sB.length, g.length), aA = 0; aA < ea; aA++) g[aA] = Math.min(parseInt(sB[aA]), a1V)
	}, this.a1W = function(pG, g, qW) {
		g.fill("");
		for (var sB = pG.split('"'), ea = Math.min(sB.length, 2 * g.length), hO = 0, aA = 1; aA < ea; aA += 2) g[hO++] = sB[aA].slice(0, qW)
	}, this.a1X = function(g, g3) {
		if (0 === g3) g.fill(0);
		else {
			var a1J = this.a1I(g),
				ea = g.length;
			if (0 === a1J) g.fill(bJ.dn(g3, ea));
			else
				for (var aA = 0; aA < ea; aA++) g[aA] = bJ.dn(g3 * g[aA], a1J);
			if (0 === (a1J = this.a1I(g))) g[1] = g3;
			else
				for (var hO = 0; a1J++ < g3;) g[hO = (hO + 1) % ea] && g[hO]++
		}
	}, this.a1Y = function(g) {
		if (!g) return 0;
		var ea = g.length;
		if (0 === ea) return 0;
		for (var f2 = g[ea - 1], aA = ea - 2; 0 <= aA; aA--)
			if (g[aA] !== f2) return aA + 2;
		return 1
	}, this.a1Z = function(g) {
		for (var a1J = 0, aA = 0; aA < g.length; aA++) a1J += g[aA].length;
		return a1J
	}, this.a1a = function(a1b) {
		for (var g = [], aA = 0; aA < a1b.length; aA++) g = g.concat(a1b[aA]);
		return g
	}
}

function a17() {
	this.xZ = function(a1c, e2, a1d) {
		var hS = a1c.height,
			a1e = b8.pZ.vJ(hS, hS),
			hY = b8.pZ.getContext(a1e);
		return function(i, hY, a1d) {
			hY.fillStyle = a1d, hY.beginPath(), hY.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hY.fill()
		}(hS, hY, a1d), hY.drawImage(a1c, -e2 * hS, 0), a1e
	}, this.a1g = function(a1h) {
		var hY, hV, hS = a1h.height;
		return a1h.width === hS && (hV = (hY = b8.pZ.getContext(a1h, !0)).getImageData(0, 0, hS, hS), b8.a15.a1i(hV.data, hS, hS, .9), hY.putImageData(hV, 0, 0)), a1h
	}
}

function a18() {
	this.a1j = function(f2) {
		return [f2 >> 12 & 63, f2 >> 6 & 63, 63 & f2]
	}, this.a1k = function(f2) {
		for (var g = this.a1j(f2), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1l = function(f2) {
		f2 = this.a1k(f2);
		return b8.color.mZ(f2[0], f2[1], f2[2])
	}, this.a1m = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mZ = function(e1, sB, eu) {
		return "rgb(" + e1 + "," + sB + "," + eu + ")"
	}, this.mb = function(e1, sB, eu, et) {
		return "rgba(" + e1 + "," + sB + "," + eu + "," + et.toFixed(3) + ")"
	}, this.q4 = function(ev) {
		for (var g = ev.split("(")[1].split(","), fA = bM.fA, aA = 0; aA < 3; aA++) fA[aA] = parseInt(g[aA]);
		return 4 === g.length ? fA[3] = 255 * parseFloat(g[3].slice(0, -1)) : fA[3] = 255, fA
	}, this.q5 = function(a1n, ed) {
		for (var g = a1n.slice(a1n.indexOf("(") + 1, a1n.indexOf(")")).split(","), fA = bM.fA, aA = 0; aA < 3; aA++) fA[aA] = bJ.p7(parseInt(g[aA].trim(), 10) + ed, 0, 255);
		return 3 === g.length ? this.mZ(fA[0], fA[1], fA[2]) : (a1n = parseFloat(g[3].trim()), this.mb(fA[0], fA[1], fA[2], a1n = 0 === a1n ? .3 : a1n))
	}, this.a1o = function(g) {
		for (var pG = "#", aA = 0; aA < 3; aA++) {
			var e1 = g[aA].toString(16);
			pG += 1 === e1.length ? "0" + e1 : e1
		}
		return pG
	}, this.a1p = function(pG) {
		var e1, sB;
		return pG.length < 7 ? b9.mY : (e1 = parseInt(pG.slice(1, 3), 16), sB = parseInt(pG.slice(3, 5), 16), pG = parseInt(pG.slice(5, 7), 16), this.mZ(e1, sB, pG))
	}
}

function a14() {
	this.a1q = function(pG, font, maxWidth) {
		if (font && (tf.font = font), tf.measureText(pG).width <= maxWidth) return pG;
		for (var aA = pG.length - 1; 1 <= aA; aA--)
			if (pG = pG.substring(0, aA), tf.measureText(pG + "...").width <= maxWidth) return pG + "...";
		return "..."
	}
}

function a1A() {
	var a1s = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1t = function(lx) {
		var a1v, pG = new Date(lx.getTime() - 6e4 * lx.getTimezoneOffset()).toUTCString();
		return pG.length < 12 || (pG = pG.substring(5, pG.length), 0 === (lx = lx.getTimezoneOffset())) ? pG : (a1v = (lx < 0 ? "+" : "-") + bJ.dn(Math.abs(lx), 60), 0 == (lx = Math.abs(lx) % 60) ? pG + a1v : pG + a1v + ":" + (lx < 10 ? "0" :
			"") + lx)
	}, this.a1w = function(lx) {
		var pG = lx.toUTCString();
		return pG.length < 12 ? pG : function(lx) {
			return a1s[lx.getUTCDay()]
		}(lx) + ", " + pG.substring(5, pG.length - 4)
	}
}

function a10() {
	var a1y = null;
	this.xq = 0, this.uY = function() {
		var f2 = bh.dr.data[5].value;
		a1y = "px " + f2, "Trebuchet MS" !== f2 && (a1y += ", Trebuchet MS"), this.xq = hR(32, 32, ["a", "b", "m"], 200, a1y)
	}, this.vJ = function(i, j) {
		var ev = document.createElement("canvas");
		return ev.width = i, ev.height = j, ev
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x3, i, j) {
		return x3.getImageData(0, 0, i, j)
	}, this.rN = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1y : 1 === type ? "bold " + size + a1y : 2 === type ? "lighter " + size + a1y : 3 === type ? "italic " + size + a1y : 4 === type ? "oblique " + size + a1y : 5 === type ? "small-caps " +
			size + a1y : "small-caps bold " + size + a1y
	}, this.textAlign = function(hY, id) {
		hY.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hY, id) {
		hY.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pk = function(e, code, color) {
		color = this.pj(ba.rO) + " solid " + (color || b9.mh);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sD = function(e, eh, ej, i, j) {
		e = e.style;
		e.left = this.a1z(eh), e.top = this.a1z(ej), e.width = this.a1z(i), e.height = this.a1z(j)
	}, this.pa = function(f2) {
		return 1 + f2 * z.a0.qx()
	}, this.qs = function(mJ, g9) {
		return mJ * this.pa(void 0 === g9 ? .5 : g9) * h.pb / h.k
	}, this.sC = function(mJ, g9) {
		return mJ * this.pa(void 0 === g9 ? .5 : g9) * h.pb
	}, this.rs = function(mJ, g9, a20) {
		return this.pa(g9) * Math.min(mJ * h.pb, a20 * h.i) / h.k
	}, this.pj = function(f2) {
		return f2.toFixed(1) + "px"
	}, this.a1z = function(f2) {
		return this.a22(f2).toFixed(1) + "px"
	}, this.a22 = function(f2) {
		return f2 / h.k
	}, this.a23 = function(rc, a24) {
		for (var pG = "<ul>", ea = rc.length, aA = 0; aA < ea; aA++) pG += "<li>" + rc[aA] + ": <a href='" + a24[aA] + "' target='_blank'>" + a24[aA] + "</a></li>";
		return pG += "</ul>"
	}, this.a25 = function(a26) {
		return "<a href='" + a26 + "' target='_blank'>" + a26 + "</a>"
	}, this.a27 = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a28 = function(e) {
		var dm = e.textContent;
		b8.zN.a29(dm, "✔") || (1 === dm.length ? e.textContent = "✔" : e.textContent = dm + " ✔", setTimeout(function() {
			e.textContent = dm
		}, 500))
	}, this.measureText = function(pG) {
		return tf.measureText(pG).width
	}, this.s3 = function(a2A) {
		a2A.style.overflowX = "auto", a2A.style.overflowY = "hidden", a2A.style.whiteSpace = "nowrap", a2A.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sF = this.scrollLeft, e.preventDefault())
		}), a2A.addEventListener("scroll", function() {
			this.sF = this.scrollLeft
		})
	}
}

function a12() {
	this.gm = function(zp) {
		return 0 === zp ? 1 === aC.ym && aC.gw : 1 === zp ? 1 === aC.ym && !aC.gw : 2 === aC.ym
	}, this.gn = function(player) {
		return 0 !== af.le[player] && 2 !== af.a2B[player]
	}, this.a2C = function(player) {
		return player === aC.eK && 2 !== af.a2B[player]
	}, this.lD = function() {
		return ak.jr < 2 ? 0 : aC.hQ ? 1 < bf.a2D() : af.gO[l5[1]]
	}, this.a2E = function() {
		var jr = ak.jr;
		if (0 !== jr) {
			if (!aC.hQ) return !this.jE(l5[0]);
			for (var eY = be.eY, l1 = bf.l2(), js = ak.js, aA = jr - 1; 0 <= aA; aA--) {
				var g8 = js[aA];
				if (eY[g8] === l1 && !this.jE(g8)) return 1
			}
		}
		return 0
	}, this.a2F = function(player) {
		return player === aC.eK
	}, this.jE = function(player) {
		return player >= aC.jq || 2 === af.a2B[player]
	}, this.kc = function(player) {
		return 0 !== af.le[player]
	}, this.yc = function(player) {
		return player < aC.jq
	}, this.os = function(a2G, a2H) {
		return a2G !== a2H
	}, this.fz = function(player, f2) {
		var min;
		return f2 = this.a2I(player, f2), af.gc[player] += f2, af.a2J[player] && (min = Math.min(af.a2J[player], af.gc[player]), af.a2J[player] -= min, af.gc[player] -= min), f2
	}, this.a2I = function(player, f2) {
		var a2K = af.gc[player];
		return f2 = Math.min(f2, af.gO[player] * aC.a2L - a2K), f2 = Math.min(f2, aC.a2M - a2K), Math.max(f2, 0)
	}, this.ot = function(player, iA, a2N, a2O) {
		var a2K = af.gc[player],
			iA = bJ.dn(a2K * (iA + 1), 1024),
			a2N = bJ.dn(a2N * a2K, 1024),
			iA = Math.min(iA, a2K - a2N);
		return 10 === aC.k7 && (iA = b2.a2Q(player, iA)), bM.f8[0] = iA, bM.f8[1] = a2N, a2O <= iA
	}, this.oK = function(player, o3, o2) {
		var player = af.gc[player],
			a2P = bJ.dn(64 * player, 1024),
			player = (o3 = Math.min(o3, player - a2P), this.a2S(o3));
		return a2P += player, o3 = this.a2I(o2, o3 -= player), bM.f8[0] = o3, bM.f8[1] = a2P, 1 <= o3
	}, this.oM = function(o3, o2) {
		var a2R = this.a2S(o3);
		return o3 = this.a2I(o2, o3 -= a2R), bM.f8[0] = o3, bM.f8[1] = a2R, 1 <= o3
	}, this.i9 = function(player, a2T) {
		return bJ.dn(af.gc[player] * (a2T + 1), 1024)
	}, this.a2S = function(a2U) {
		return bJ.dn(Math.max(2142 - bd.jn(), 0) * a2U, 2142)
	}, this.p5 = function(player, a2N) {
		a2N = bJ.dn(a2N * af.gc[player], 1024);
		bM.f8[1] = a2N, af.gc[player] -= a2N
	}, this.fx = function(player, a2V) {
		var fK, fM, eu = af.gc[player];
		return a2V <= eu ? af.gc[player] -= a2V : (af.gc[player] = 0, fM = af.a2J[player] + (fK = 5 * ((eu = a2V - eu) >> 2)), bb.g0(player, fK - eu, 12), fM <= aC.a2W ? af.a2J[player] = fM : (af.a2J[player] = aC.a2W, bb.g0(player, fM - aC.a2W,
			18))), a2V
	}, this.kq = function(player, iA) {
		var gc = af.gc,
			a2K = gc[player],
			iA = bJ.dn(a2K * (iA + 1), 1024),
			a2P = Math.max(bJ.dn(a2K, 10), 1e3);
		return (iA = Math.min(iA, a2K - a2P)) < 0 ? (gc[player] = 0, a2P = Math.min(1e3, a2K + aC.a2W - af.a2J[player]), bM.f8[1] = a2P, af.a2J[player] += a2P - a2K, 0) : (bM.f8[1] = a2P, 10 === aC.k7 && (iA = b2.a2Q(player, iA)), gc[player] -=
			a2P + iA, iA)
	}, this.ow = function(player) {
		af.gc[player] -= bM.f8[0] + bM.f8[1]
	}, this.ou = function(player, j1) {
		return (j1 = Math.min(j1, aC.eX)) < aC.eX && 0 === af.le[j1] && (j1 = aC.eX), (bM.eW[0] = j1) === aC.eX || eT(player, j1)
	}, this.oy = function(player, o2) {
		return 0 !== af.le[o2] && !eT(player, o2)
	}, this.a2X = function(player, a2Y) {
		for (var g8, ea = ak.jr, ze = 0, a2Z = l5, aA = 0; aA < ea; aA++)
			if (g8 = a2Z[aA], !this.jE(g8)) {
				if (player === g8) return !0;
				if (++ze > a2Y) return !1
			} return !1
	}, this.ky = function(g8) {
		var a2a = aC.hQ ? bf.a2b() : af.gO[l5[0]];
		return a2a >= bJ.dn(g8 * aC.ja, 100)
	}, this.a2c = function(f2, min, max) {
		return Math.floor(bJ.p7(isNaN(f2) ? 0 : Number(f2), min, max))
	}
}

function a16() {
	this.a2d = function(canvas, a2e, a2f) {
		var i = canvas.width,
			j = canvas.height,
			ev = b8.pZ.vJ(i, j),
			hY = b8.pZ.getContext(ev, !0),
			canvas = (hY.drawImage(canvas, 0, 0), hY.getImageData(0, 0, i, j));
		return a2e(canvas.data, i, j, a2f), hY.putImageData(canvas, 0, 0), ev
	}, this.a2g = function(vU, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vU[3 + aA] = vU[aA], vU[aA] = vU[1 + aA] = vU[2 + aA] = 255
			}
	}, this.a2h = function(vU, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vU[1 + aA] > vU[2 + aA] + 10 && (vU[3 + aA] = vU[aA], vU[1 + aA] = vU[2 + aA])
			}
	}, this.a2i = function(vU, i, j, a2f) {
		for (var gap = Math.floor(Math.min(i, j) * a2f), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (vU[3 + (aA = 4 * (eh + ej * i))] = 255 - 255 * (vU[1 + aA] - vU[aA]) / (255 - vU[aA]))
	}, this.a2j = function(vU, i, j, a2f) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vU[aA] = a2f[0], vU[1 + aA] = a2f[1], vU[2 + aA] = a2f[2]
			}
	}, this.a2k = function(vU, i, j, a2f) {
		for (var gap = Math.floor(i * a2f), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (vU[aA = 4 * (eh + ej * i)] = vU[1 + aA] = vU[2 + aA] = 0)
	}, this.a2l = function(vU, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) 200 < vU[1 + (aA = 4 * (eh + ej * i))] && vU[1 + aA] - 20 > vU[aA] && vU[1 + aA] - 20 > vU[2 + aA] ? vU[aA] + vU[2 + aA] < 40 ? vU[3 + aA] = 0 : (vU[3 + aA] = vU[aA], vU[aA] = 255, vU[1 + aA] = 255, vU[
				2 + aA] = 255) : vU[aA] < 50 && vU[1 + aA] < 50 && vU[2 + aA] < 50 && (vU[aA] + vU[1 + aA] + vU[2 + aA] < 50 ? vU[3 + aA] = 180 : vU[3 + aA] = 180 + Math.floor(75 * (vU[aA] + vU[1 + aA] + vU[2 + aA] - 50) / 100))
	}, this.a2m = function(vU, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) vU[1 + (aA = 4 * (eh + ej * i))] > vU[aA] + 20 && vU[1 + aA] > vU[2 + aA] + 20 && vU[aA] + vU[2] < 40 && (vU[3 + aA] = 255 - vU[1 + aA], vU[aA] = vU[1 + aA] = vU[2 + aA] = vU[aA])
	}, this.a1i = function(vU, i, j, a2f) {
		for (var e1 = i >> 1, eh = 0; eh < i; eh++)
			for (var ej = 0; ej < j; ej++) Math.sqrt((eh - e1) * (eh - e1) + (ej - e1) * (ej - e1)) > a2f * e1 && (vU[4 * (eh + ej * i) + 3] = 0)
	}
}

function a13() {
	this.y4 = function(f2) {
		var aA, a2n, a2o, a2p, a2q;
		if (f2 < 0) return "-" + this.y4(Math.abs(f2));
		if (f2 < 1e3) return f2.toString();
		for (a2n = Math.floor(Math.log(f2 + .5) / Math.log(10)) + 1, a2o = Math.floor((a2n - 1) / 3), a2q = (a2p = f2.toString()).substring(a2n - 3, a2n), aA = 1; aA < a2o; aA++) a2q = a2p.substring(a2n - 3 * (aA + 1), a2n - 3 * aA) + " " + a2q;
		return a2p.substring(0, a2n - 3 * a2o) + " " + a2q
	}, this.a2r = function(g8, a2n) {
		return g8.toFixed(a2n) + "%"
	}, this.a2s = function(f2, a2t) {
		return f2.toFixed(bJ.p7(Math.floor((void 0 === a2t ? 3 : a2t) - Math.log10(Math.max(f2, 1))), 0, 8))
	}, this.a2u = function(f2, mJ, a2n) {
		return (f2 * mJ).toFixed(a2n)
	}, this.zS = function(username) {
		var ee, eP = username.indexOf("[");
		return !(eP < 0) && 1 < (ee = username.indexOf("]")) - eP && ee - eP <= 8 ? username.substring(eP + 1, ee).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zS;
	this.a2v = function(pG) {
		for (var et = Math.floor(.5 * pG.length + .5), mP = Math.floor(.5 * (et - 1)), aA = 0; aA < mP; aA++)
			for (var eu = -1; eu < 2; eu += 2) {
				var ev = et + eu * aA;
				if (" " === pG[ev]) return [this.zO(pG.substring(0, ev)), this.a2w(pG.substring(ev))]
			}
		return [pG.substring(0, et), pG.substring(et)]
	}, this.a2w = function(pG) {
		for (var ea = pG.length, aA = 0; aA < ea; aA++)
			if (" " !== pG[aA]) return pG.substring(aA);
		return pG
	}, this.zO = function(pG) {
		for (var aA = pG.length - 1; 0 <= aA; aA--)
			if (" " !== pG[aA]) return pG.substring(0, aA + 1);
		return pG
	}, this.a2x = function(pG, a2y) {
		return pG.split("(")[0] + "(🧈 " + a2y.toFixed(2) + ")"
	}, this.startsWith = function(pG, a2z) {
		return pG.substring(0, a2z.length) === a2z
	}, this.a29 = function(pG, a2z) {
		var ea = pG.length;
		return pG.substring(ea - a2z.length, ea) === a2z
	}, this.a30 = function(g, a31, a32) {
		var pG = "",
			ea = g.length - 1;
		a32 = a32 || "";
		for (var aA = 0; aA < ea; aA++) pG += a32 + g[aA] + a32 + ",", (aA + 1) % a31 == 0 && (pG += "\n");
		return pG += a32 + g[ea] + a32
	}, this.a33 = function(pG, hg, hh) {
		return pG.replace(new RegExp(hg, "g"), hh)
	}
}

function a34() {
	this.iy = function(player, eM) {
		aH.wp(player, bK.ei(eM), bK.ek(eM)) && (bd.de = !0), aC.k9 && this.ik()
	}, this.ik = function() {
		aC.gw = !1;
		for (var aA = 0; aA < aC.jq; aA++) 0 !== af.le[aA] && 0 === af.gO[aA] && aH.wv(aA);
		0 !== af.le[aC.eK] ? (bb.la[7] = af.gO[aC.eK], bb.la[8] = af.gc[aC.eK], aQ.a35(), aV.a36(), aC.gk || aG.m0(af.iP[aC.eK] - 5, af.iR[aC.eK] - 5, af.iQ[aC.eK] + 5, af.iS[aC.eK] + 5), at.dW()) : aW.show(!1, !1, !1, !0), aM.a37(18), ae.a38(),
			ae.lQ(!0), bN.x.a39(), aK.qq(), aC.or = null, bZ.a3A = !0, bZ.a3B(), aC.k9 && z.a0.setState(1)
	}
}

function bx() {
	this.eX = 512, this.a2M = 15e8, this.a3C = 1e9, this.a2W = 5e4, this.a3D = 512, this.fu = 2, this.eK = 0, this.jq = 0, this.yp = 0, this.kB = 0, this.yo = 0, this.w0 = 512, this.w5 = 512, this.a2L = 150, this.k9 = !0, this.gk = 0, this.ym = 0,
		this.ja = 0, this.mA = !1, this.gw = 0, this.a3E = 0, this.hQ = !1, this.w7 = 0, this.w8 = 0, this.k7 = 0, this.xG = 0, this.or = null, this.z4 = new x9, this.a3F = 30, this.yj = 0, this.yr = 0, this.z3 = 0, this.ye = 0, this.data = new a3G,
		this.a3H = new a3I, this.a3J = 0, this.a3K = function() {
			bP.dW(), this.yp = this.jq = this.data.humanCount, this.k9 = 1 === this.yp && !__fx.customLobby.isActive(), this.mA = !1, this.gk = this.data.isReplay, this.k7 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xG = this.data.isContest, this.hQ = this.k7 < 7 || 9 === this.k7, this.k7 = 10 === this.k7 && this.k9 ? 7 : this.k7, this.k7 = 8 === this.k7 && 2 !== this.jq ? 7 : this.k7, ax
				.dW(), this.w7 = this.data.numberTeams, this.data.teamPlayerCount ? this.w8 = +(0 < this.data.teamPlayerCount[0]) : (this.w8 = 0, this.hQ && this.k9 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.w7 + 1), aC.a3H.a3L())), this.a3F = this.jq <= 2 ? 30 : this.jq <= 50 ? 40 : 50, this.a3E = this.gw = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.or = this.gw ?
				new a34 : null, this.w0 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jq) : 1 === di ? this.jq : this.data.playerCount,
				this.w5 = this.w0, this.kB = this.w0 - this.jq, this.yo = 0, this.eK = this.data.selectedPlayer, this.yj = 0, this.yr = 0, this.z3 = 0, this.ye = 0, aw.a3M(this.data.spawningSeed), ad.dW(), af.dW(), ah.a3N(), b6.nv.oc = [], be.dW(),
				this.ym = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dW(), a3O(), ab.dX(), an.a3P(), bZ.dW(), ab.dW(), aq.dW(), bK.dW(), bL.dW(), am.dW(), bT.a3Q(), aD.dW(),
				ah.a6(), aH.dW(), aI.dW(), ak.a3R(), b7.dW(), bf.dW(), bN.dW(), bc.dW(), a3S.putImageData(a3T, 0, 0), aU.dW(), aR.dW(), aQ.dW(), bA.dW(), au.dW(), aT.dW(), aV.dW(), aL.dW(), aP.dW(), aM.dW(), aO.dW(), aK.dW(), aW.dW(), aE.dW(), aF
				.dW(), fc(), ac.dW(), ae.dW(), b2.dW(), b3.dW(), az.dW(), this.z4.dW(), bd.a3Q(), aG.lz(), 0 === af.le[aC.eK] && aW.show(!1, !0), ae.lQ(!0), at.dW(), bd.de = !0, this.gk || this.k9 && this.gw || z.a0.setState(1), this.a3J = 0
		}, this.a0A = function(a3V) {
			aC.gk || b7.op.a3W.length || (b7.op.a3W = b7.a3X.yF()),
				__fx.customLobby.isActive() === false && ay.x.a3Y(),
				this.ym = 0, bd.a3Z(), z.a0.setState(0), a3V || bS.e8.show(), aZ.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3J ? s.x.a3a() : 1 === this.a3J ? s.t(19) : s.t(5, 5)
		}, this.a3b = function() {
			return this.gk ? aL.gl || !bA.a3c : this.k9 && (aL.gl || this.gw)
		}, this.a3d = function() {
			return 1 === this.ym && !this.gw
		}
}

function a3G() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3I() {
	this.a3L = function() {
		var a3e = aC.data;
		b8.pi.a1X(a3e.teamPlayerCount, a3e.playerCount), a3e.numberTeams = b8.pi.a1O(a3e.teamPlayerCount, 0), a3e.teamPlayerCount[0] && a3e.teamPlayerCount[7] && (a3e.teamPlayerCount[7] = 0, this.a3L())
	}, this.a3f = function() {
		var a3e = aC.data;
		a3e.mapType < 2 ? bQ.a6(bQ.a3g(a3e), a3e.mapSeed) : bQ.a3h(a3e.canvas)
	}, this.a3i = function() {
		var a3e = aC.data;
		a3e.colorsData || (a3e.colorsData = new Uint32Array(1)), a3e.selectableColor && (a3e.colorsData[0] = bh.x.uX()), a3e.selectableName && (a3e.playerNamesData || (a3e.playerNamesData = new Array(1)), a3e.playerNamesData[0] = bh.dr.data[122]
			.value)
	}, this.a3j = function() {
		aC.data = new a3G, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eX), aC.data.aIncomeData[0] = 64
	}
}

function dO() {
	this.xn = 0, this.gap = 0, this.rO = 0, this.pg = 0, this.dW = function() {
		this.resize()
	}, this.resize = function() {
		this.xn = .0022 * b8.pZ.pa(.5) * h.pb, this.rO = this.xn / h.k, this.gap = Math.max(Math.floor((z.a0.qx() ? .0114 : .01296) * h.pb), 2), this.pg = this.gap / h.k
	}
}

function dN() {
	this.a3k = function() {
		return z.a0.qx() ? 2 : 1
	}
}

function c8() {
	var q9, eh, ej, a3l, a3m, a3n, lx, player, a3o, gap, zoom, oV, a3p;

	function a3z(player) {
		for (var aA = oV.length - 1; 0 <= aA; aA--)
			if (oV[aA] === player) return 1
	}

	function a3x(a3u) {
		var aA, ea;
		if (-1 !== a3u)
			for (ea = q9.length, aA = 0; aA < ea; aA++)
				if (q9[aA].hI && q9[aA].eh + 1 === a3u % 4 && q9[aA].ej + 1 === a3u >> 2) return aA;
		return -1
	}

	function a3v(kt, ku) {
		var sB = gap / 2;
		return kt < eh - a3l - 3 * sB || eh + 3 * a3l + 5 * sB < kt || ku < ej - a3l - 3 * sB || ej + 2 * a3l + 3 * sB < ku ? -1 : 4 * (ku < ej - sB ? 0 : ku < ej + a3l + sB ? 1 : 2) + (kt < eh - sB ? 0 : kt < eh + a3l + sB ? 1 : kt < eh + 2 * a3l +
			3 * sB ? 2 : 3)
	}
	this.a3q = function() {
		var aA, eu, a3t = [b9.n7, b9.nL, b9.mf, b9.nf, b9.nY];
		for (q9 = new Array(9), aA = 0; aA < 9; aA++) q9[aA] = {
			id: aA,
			hI: !1,
			ka: 0,
			canvas: [],
			eh: 0,
			ej: 0
		};
		for (q9[0].colors = [0, 1, 2, 3], q9[0].eh = 0, q9[0].ej = 0, q9[1].colors = [0, 1, 4], q9[1].eh = 1, q9[1].ej = 0, q9[2].colors = [0, 2], q9[2].eh = -1, q9[2].ej = 0, q9[3].colors = [0], q9[3].eh = 0, q9[3].ej = 0, q9[4].colors = [0, 2],
			q9[4].eh = 1, q9[4].ej = 1, q9[5].colors = [3], q9[5].eh = 0, q9[5].ej = -1, q9[6].id = 20, q9[6].colors = [0], q9[6].eh = 1, q9[6].ej = -1, q9[7].id = 21, q9[7].colors = [0], q9[7].eh = 0, q9[7].ej = 1, q9[8].id = 16, q9[8]
			.colors = [0], q9[8].eh = 0, q9[8].ej = 0, aA = 0; aA < 9; aA++)
			for (eu = 0; eu < q9[aA].colors.length; eu++) q9[aA].canvas.push(function(id, a1d) {
				if (id < 20) return b8.canvas.xZ(aa.get(3), id, a1d);
				var a1d = aa.get(3).height,
					a1e = b8.pZ.vJ(a1d, a1d),
					hY = b8.pZ.getContext(a1e);
				20 === id ? hY.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vU.xo(ai.qp.xd + ai.qp.xu, hY, 0, 0, a1d);
				return a1e
			}(q9[aA].id, a3t[q9[aA].colors[eu]]))
	}, this.a3s = function() {
		return q9
	}, this.dW = function() {
		oV = [], eh = ej = lx = 0, a3m = a3n = -1e3, this.resize()
	}, this.resize = function() {
		a3l = Math.floor((z.a0.qx() ? .075 : .0468) * h.pb), zoom = a3l / aa.get(3).height, gap = Math.floor(a3l / 3)
	}, this.a0d = function(kt, ku) {
		return !!this.hI() && (bd.de = !0, !!ai.vU.go(kt, ku, player) || (kt = function(kt, ku) {
			a3n = a3m = -1e3;
			var a3w = a3x(a3v(kt, ku));
			if (-1 === a3w) return 0;
			if (1 !== q9[a3w].colors[q9[a3w].ka])
				if (5 === a3w) {
					if (! function() {
							var dm = performance.now();
							a3p + 4e3 < dm && (oV = []);
							a3p = dm
						}(), a3z(player)) return 1;
					oV.push(player), 16 < oV.length && oV.shift()
				} else if (6 === a3w) {
				for (var aA = oV.length - 1; 0 <= aA; aA--) 0 === af.le[oV[aA]] && oV.splice(aA, 1);
				0 < oV.length && (b3.a40(1, oV, !0) && b6.fw.oU(oV, player), oV = [])
			} else if (2 === a3w) b6.gx.o1(aQ.h2(), player);
			else if (3 === a3w) aC.gw && b6.gx.gy(a3o);
			else if (0 === a3w)
				if (0 === q9[0].ka) {
					if (aC.a3E && aV.a41() < 350) return 1;
					bT.a42(4), b6.gx.h8(aQ.h2(), player)
				} else az.hA(player, aQ.h2());
			else if (1 === a3w) bT.a42(1), b6.gx.h6(aQ.h2(), a3o);
			else {
				if (7 === a3w) return bT.a42(0), ai.vU.show(kt, ku), 2;
				if (4 === a3w) b3.a40(0, [player], !0) && b6.fw.oR(player);
				else {
					if (8 !== a3w) return 0;
					b6.gx.h1(aQ.h2(), a3o, player)
				}
			}
			return 1
		}(kt, ku), this.qq(), 2 === kt && (ai.vU.hI = !0), 0 < kt))
	}, this.a0f = function(kt, ku) {
		this.hI() || (a3m = kt, a3n = ku, lx = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gs(mouseX),
			coordY = bK.gu(mouseY),
			coord = bK.ey(coordX, coordY),
			point = bK.eQ(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kt, ku, eE) {
			ab.eV(eE) || -1 === (kt = bL.h4.a4G(kt, ku)) ? aM.a4F(eE) : aM.a4H(kt)
		}(mouseX, mouseY, point))
	}
	this.click = function(kt, ku, a0m) {
		var gr = bK.gs(kt),
			gt = bK.gu(ku),
			eM = bK.ey(gr, gt),
			eE = bK.eQ(eM);
		if (!bK.gv(gr, gt)) return !1;
		gr = (z.a0.qx() ? .025 : .0144) * h.pb, gt = performance.now();
		if (Math.abs(kt - a3m) > gr || Math.abs(ku - a3n) > gr || lx + 500 < gt) return !1;
		if (lx = gt, a0m && ! function(kt, ku, eE) {
				ab.eV(eE) || -1 === (kt = bL.h4.a4G(kt, ku)) ? aM.a4F(eE) : aM.a4H(kt)
			}(kt, ku, eE), aL.gl || this.hI() || !b8.fw.gn(aC.eK) || aC.gk) return this.qq(), !1;
		if (aC.gw) {
			if (!a0m) {
				if (!ab.eV(eE)) return !1;
				a3o = eM, q9[3].hI = !0
			}
		} else if (bL.h4.o6(eM)) a0m ? aM.a48(55, 0) : bL.a46.a47 = -1;
		else {
			if (a0m) return !1;
			bL.h4.a49(kt, ku) || (2 === aC.ym ? ab.gA(eE) && (player = ab.eS(eE), b8.fw.jE(player) || (q9[0].hI = !0, q9[0].ka = 1, q9[7].hI = !0)) : ab.ef(eE) ? (a3o = al.eB.eD(eE)) && (gr = bK.eQ(a3o), q9[8].hI = !0, player = ab.eR(gr) ? aC
				.eX : ab.eS(gr)) : (a3o = eM, bL.h4.h5(aC.eK, eM) && (q9[0].hI = !0, q9[0].ka = 1, q9[1].hI = !0, q9[1].ka = bM.fC[2] ? 0 : 2), ab.h3(eE) || (ab.eR(eE) ? (player = aC.eX, h7(aC.eK) ? (q9[0].hI = !0, q9[0].ka = 0) : h9(aC
				.eK, player) && (q9[0].hI = !0, q9[0].ka = 3)) : (player = ab.eS(eE)) === aC.eK ? (q9[0].hI = !0, q9[0].ka = 1, q9[7].hI = !0) : (q9[0].ka = 1, q9[5].hI = function(player) {
				return !b8.fw.jE(player) && !a3z(player) && b3.a40(1, [player], !1)
			}(player), q9[7].hI = !b8.fw.jE(player), eT(player, aC.eK) ? (q9[4].hI = !b8.fw.jE(player) && !ae.a4B(player) && b3.a40(0, [player], !1), q9[6].hI = function(player) {
				if (0 === oV.length) return !1;
				if (performance.now() > a3p + 4e3) return !(oV = []);
				return !a3z(player) && ! function(player) {
					var aA;
					if (aC.hQ)
						for (aA = oV.length - 1; 0 <= aA; aA--)
							if (!eT(player, oV[aA])) return 1;
					return
				}(player)
			}(player), hB(aC.eK, player) ? (q9[0].ka = 0, q9[0].hI = !0) : h9(aC.eK, player) && (q9[0].ka = 3, q9[0].hI = !0), q9[0].hI = this.a4D()) : (q9[2].hI = !0, q9[0].hI = !0)))))
		}
		return this.a45(kt, ku)
	}, this.a45 = function(kt, ku) {
		return eh = kt - Math.floor(a3l / 2), ej = ku - Math.floor(a3l / 2), !!this.hI()
	}, this.a0J = function(kt, ku) {
		return !!this.hI() && (ai.vU.hI ? !ai.vU.xm(kt, ku) && (ai.vU.hI = !1, bd.de = !0) : function(rB, kt, ku) {
			kt = a3v(kt, ku);
			if (0 <= a3x(kt)) return !1;
			if ((1 === kt || 6 === kt) && 0 <= a3x(2)) return !1;
			if ((6 === kt || 9 === kt) && 0 <= a3x(10)) return !1;
			return rB.qq(), bd.de = !0
		}(this, kt, ku))
	}, this.qq = function() {
		for (var aA = q9.length - 1; 0 <= aA; aA--) q9[aA].hI = !1, q9[aA].ka = 0;
		ai.vU.hI = !1
	}, this.hI = function() {
		return this.a4D() || ai.vU.hI
	}, this.a4D = function() {
		for (var ea = q9.length, aA = 0; aA < ea; aA++)
			if (q9[aA].hI) return !0;
		return !1
	}, this.te = function() {
		if (this.hI())
			if (ai.vU.hI) ai.vU.te();
			else {
				var aA, hY = tf,
					eu = q9,
					ea = eu.length,
					a4L = (a3l + gap) / zoom;
				for (hY.imageSmoothingEnabled = !0, hY.setTransform(zoom, 0, 0, zoom, eh, ej), aA = 0; aA < ea; aA++) eu[aA].hI && tf.drawImage(eu[aA].canvas[eu[aA].ka], eu[aA].eh * a4L, eu[aA].ej * a4L);
				hY.imageSmoothingEnabled = !1, hY.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c9() {
	var j, canvas, a4M, a4N, a4O, a4P = -1;

	function a4Q() {
		var a4R, x3 = canvas.getContext("2d", {
			alpha: !0
		});
		x3.clearRect(0, 0, j, j), x3.fillStyle = b9.md, x3.fillRect(0, 0, j, j), 0 === a4N && (x3.fillStyle = b9.mi, x3.fillRect(0, 0, j, j)), x3.fillStyle = b9.mh, x3.fillRect(0, 0, j, 1), x3.fillRect(0, 0, 1, j), x3.fillRect(0, j - 1, j, 1), x3
			.fillRect(j - 1, 0, 1, j), a4R = .9 * j / aa.get(0).width, x3.imageSmoothingEnabled = !0, x3.setTransform(a4R, 0, 0, a4R, Math.floor((j - a4R * aa.get(0).width) / 2), Math.floor((j - a4R * aa.get(0).height) / 2)), x3.drawImage(aa.get(0),
				0, 0), x3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4T(kt, ku) {
		if (!aL.gl) return kt <= j + ba.gap && ku >= aQ.ej ? 9 : -1;
		if (kt <= 4 * j + ba.gap) {
			if (ku >= aQ.ej) return 0;
			if (ku >= aQ.ej - j - a4O * ba.gap) return 2
		} else if (kt <= 7 * j + ba.gap && ku >= aQ.ej - j - a4O * ba.gap) return 1;
		return -1
	}
	this.gl = !1, this.dW = function() {
		a4N = -1, this.gl = !1, a4O = z.a0.qx() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4M = b8.pZ.rN(1, (z.a0.qx() ? .5 : .45) * j), a4Q()
	}, this.a0u = function() {
		this.gl = !this.gl, this.gl ? (bA.a0t(!1), aC.gk && bA.a3c && bA.a0v(!0), this.a4S()) : (a4N = -1, a4Q(), !aC.k9 || 1 !== aC.ym || aC.gw || aC.gk || z.a0.setState(1)), bd.de = !0
	}, this.a4S = function() {
		(aC.k9 || aC.gk) && 1 === aC.ym && (aU.lQ(!0), aC.gw || setTimeout(function() {
			bZ.yx()
		}, 0), z.a0.setState(0))
	}, this.go = function(kt, ku) {
		return 0 <= (a4P = a4T(kt, ku)) || !aL.gl || aC.k9 || aC.gk || bc.hI || aL.a0u(), a4P
	}, this.a0J = function(kt, ku) {
		kt = a4T(kt, ku);
		kt !== a4N && (a4N = kt, this.gl || a4Q(), bd.de = !0)
	}, this.a0K = function(kt, ku) {
		kt = a4T(kt, ku);
		return -1 !== kt && a4P === kt && (this.gl ? aC.mA ? (0 <= kt && bA.a0t(!1), !aC.gk) : (0 === kt ? aC.a0A() : 1 === kt ? this.a0u() : 2 === kt && s.t(1, 0), !0) : 9 === kt && (this.a0u(), !0))
	}, this.te = function() {
		var i;
		this.gl ? (i = Math.floor(5.5 * j), tf.setTransform(1, 0, 0, 1, ba.gap, aQ.ej), tf.fillStyle = b9.md, tf.fillRect(0, 0, i, j), 0 === a4N ? (tf.fillStyle = b9.mi, tf.fillRect(0, 0, 4 * j, j)) : 1 === a4N && (tf.fillStyle = b9.mi, tf
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tf.fillStyle = b9.mh, tf.fillRect(0, 0, i, 1), tf.fillRect(0, 0, 1, j), tf.fillRect(4 * j, 0, 1, j), tf.fillRect(0, j - 1, i, 1), tf.fillRect(i - 1, 0, 1, j), tf.font = a4M, b8.pZ
			.textBaseline(tf, 1), b8.pZ.textAlign(tf, 1), tf.fillText(L(37), 2 * j, .54 * j), i = .4 * j, aL.a4X(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.ej + .3 * j, i), i = 1, tf.setTransform(1, 0, 0, 1, ba.gap, aQ.ej - i * a4O * ba.gap - i *
				j), tf.fillStyle = b9.md, tf.fillRect(0, 0, 4 * j, j), a4N === i + 1 && (tf.fillStyle = b9.mi, tf.fillRect(0, 0, 4 * j, j)), tf.fillStyle = b9.mh, tf.fillRect(0, 0, 4 * j, 1), tf.fillRect(0, 0, 1, j), tf.fillRect(4 * j, 0, 1,
				j), tf.fillRect(0, j - 1, 4 * j, 1), tf.fillText(L(0 === i ? 37 : 38), 2 * j, .54 * j), tf.setTransform(1, 0, 0, 1, 0, 0)) : tf.drawImage(canvas, ba.gap, aQ.ej)
	}, this.pA = function(player) {
		return 0 !== af.le[player] && 2 !== aC.ym && !b8.fw.jE(player)
	}, this.a4X = function(eh, ej, ea) {
		tf.setTransform(1, 0, 0, 1, eh, ej), tf.lineWidth = ba.xn, tf.strokeStyle = b9.mh, tf.beginPath(), tf.moveTo(0, 0), tf.lineTo(ea, ea), tf.moveTo(0, ea), tf.lineTo(ea, 0), tf.stroke()
	}
}

function cA() {
	var a4Z, j, a4a, a4b, a4c, a4d, a4e, a4f, a4g;

	function wz() {
		return aQ.a4y(aM.a4u()) ? au.hI ? aQ.ej - aQ.j - 2 * a4a : aQ.ej - a4a : bA.a4y(aM.a4x()) ? au.hI ? bA.wz() - aQ.j - 2 * a4a : bA.wz() - a4a : au.hI ? h.j - aQ.j - (bi.a3k() + 1) * a4a : h.j - bi.a3k() * ba.gap
	}

	function a4l(dm, pG, id, g8, a4o, a4p, vc, a4q, a4r, a4s) {
		var aA, x3, a1e, pR, g, a53 = void 0 !== a4r,
			i = Math.floor(aP.measureText(pG, aM.a4M) + 1.5 * a4b + (a53 ? j : 1.5 * a4b));
		if (bd.de = !0, i + 2 * a4a + aQ.j > h.i && !a53 && 50 !== id && 20 < pG.length) a4l(dm, (g = b8.zN.a2v(pG))[0], id, g8, a4o, a4p, vc, a4q, a4r, a4s), a4l(dm, g[1], id, g8, a4o, a4p, vc, a4q, a4r, a4s);
		else if (g = i + (50 === id ? a4c : 0), (a1e = document.createElement("canvas")).width = i, a1e.height = j, (x3 = a1e.getContext("2d", {
				alpha: !0
			})).font = aM.a4M, b8.pZ.textBaseline(x3, 1), b8.pZ.textAlign(x3, 0), x3.clearRect(0, 0, i, j), x3.fillStyle = a4p, x3.fillRect(0, 0, i, j), x3.fillStyle = a4o, x3.fillText(pG, Math.floor(1.5 * a4b), Math.floor(j / 2)), a53 && (x3
				.imageSmoothingEnabled = !0, ai.vU.xo(a4r, x3, i - j, 0, j)), 0 === (pR = {
				lx: dm,
				pG: pG,
				id: id,
				player: g8,
				canvas: a1e,
				a4o: a4o,
				a4p: a4p,
				i: i,
				a4v: g,
				vc: vc,
				a4q: a4q,
				a4r: a4r,
				a4s: a4s
			}).lx || 0 < a4Z.length && 0 < a4Z[0].lx) a4Z.unshift(pR);
		else {
			for (aA = 1; aA < a4Z.length; aA++)
				if (0 < a4Z[aA].lx) return void a4Z.splice(aA, 0, pR);
			a4Z.push(pR)
		}
	}

	function a4m(e1, sB, eu) {
		return "rgb(" + e1 + "," + sB + "," + eu + ")"
	}

	function a54(id, g3) {
		for (var ea = a4Z.length, aA = 0; aA < ea; aA++) a4Z[aA].id === id && g3-- <= 0 && (a4Z.splice(aA, 1), aA--, ea--)
	}

	function a55(id, player) {
		for (var eo = !1, aA = a4Z.length - 1; 0 <= aA; aA--) a4Z[aA].id !== id || player !== aC.eX && a4Z[aA].player !== player || (a4Z.splice(aA, 1), eo = !0);
		return eo
	}

	function a5S(pG) {
		a4l(340, pG, 6, 0, a4m(215, 245, 255), b9.me, -1, !1)
	}
	this.a4h = "", this.dW = function() {
		var self;
		a4f = 0, a4e = z.a0.qx() ? 7 : 12, a4d = {
			ya: [0, 0, 0],
			a4i: [0, 0, 0],
			lw: [220, 180, 180],
			td: [0, 0, 0],
			ev: [0, 0, 0]
		}, a4Z = [], this.resize(), aC.gw && this.yy(0, 18), bQ.vH.vI[bQ.eG].name.length && a5S(L(85, [bQ.vH.vI[bQ.eG].name])), a5S(L(86, [bQ.el - 2 + "x" + (bQ.em - 2)])), a5S(L(87, [an.a5T])), an.a5T !== an.a5U && a5S(L(88, [an.a5U + " (" +
			b8.zN.a2r(100 * an.a5U / an.a5T, 1) + ")"
		])), 0 < an.a5V && a5S(L(61, [an.a5V + " (" + b8.zN.a2r(100 * an.a5V / an.a5T, 1) + ")"])), 0 < an.a5W && a5S(L(89, [an.a5W + " (" + b8.zN.a2r(100 * an.a5W / an.a5T, 1) + ")"])), 10 === aC.k7 && a4l(120, L(90), 6, 0, a4m(235, 255,
			120), b9.me, -1, !1), 0 !== (self = this).a4h.length && (a4l(200, self.a4h, 0, 0, b9.mh, b9.me, -1, !1), self.a4h = ""), aC.xG && a4l(340, L(39), 6, 0, a4m(255, 200, 0), b9.me, -1, !1)
	}, this.resize = function() {
		var a4n, aA;
		if (j = (j = Math.floor((z.a0.qx() ? .031 : .0249) * h.pb)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4M = b8.pZ.rN(1, this.fontSize), a4a = ba.gap, a4b = Math.floor(j / 5), 0 < a4Z.length)
			for (a4n = a4Z, a4Z = [], aA = a4n.length - 1; 0 <= aA; aA--) a4l(a4n[aA].lx, a4n[aA].pG, a4n[aA].id, a4n[aA].player, a4n[aA].a4o, a4n[aA].a4p, a4n[aA].vc, a4n[aA].a4q, a4n[aA].a4r, a4n[aA].a4s);
		this.a4t()
	}, this.a4t = function() {
		a4g = document.createElement("canvas");
		var pG = L(40),
			x3 = (a4c = aP.measureText(pG, this.a4M) + 5 * a4b, a4g.height = j, a4g.width = a4c, a4g.getContext("2d", {
				alpha: !0
			}));
		x3.font = this.a4M, b8.pZ.textBaseline(x3, 1), b8.pZ.textAlign(x3, 1), x3.clearRect(0, 0, a4c, j), x3.fillStyle = b9.n4, x3.fillRect(0, 0, a4c, j), x3.fillStyle = b9.mh, x3.fillText(pG, Math.floor(a4c / 2), Math.floor(j / 2))
	}, this.a4u = function() {
		var ea;
		return au.hI ? au.i : 0 === (ea = a4Z.length) ? 0 : 1 === ea ? a4Z[0].a4v : a4w(a4Z[0].a4v, a4Z[1].a4v)
	}, this.a4x = function() {
		var ea = a4Z.length;
		return au.hI ? ea ? a4w(au.i, a4Z[0].a4v) : au.i : 0 === ea ? 0 : 1 === ea ? a4Z[0].a4v : 2 === ea ? a4w(a4Z[0].a4v, a4Z[1].a4v) : a4w(a4w(a4Z[0].a4v, a4Z[1].a4v), a4Z[2].a4v)
	}, this.go = function(eh, ej) {
		for (var m7, a4z, a50 = wz(), aA = a4Z.length - 1; 0 <= aA; aA--)
			if ((a4z = a50 - (aA + 1) * j) <= ej && ej < a4z + j) return 50 === a4Z[aA].id ? eh >= h.i - a4c - a4a - a4Z[aA].i && (eh >= h.i - a4c - a4a ? b6.fw.oR(a4Z[aA].player) : aG.m1(a4Z[aA].player, 800, !1, 0), !0) : eh >= h.i - a4Z[aA].i -
				a4a && (736 === a4Z[aA].id ? (a4z = a4Z[aA].pG.split(" "), window.open(a4z[a4z.length - 1], "_blank")) : a4Z[aA].a4q && (a4Z[aA].a4s && a4Z[aA].a4s.et ? (a4z = a4Z[aA].a4s.eM, m7 = bK.ei(a4z) - 10, a4z = bK.ek(a4z) - 10, aG
					.m0(m7, a4z, 19 + m7, 19 + a4z)) : a4Z[aA].a4s && a4Z[aA].a4s.eu ? aG.m2(a4Z[aA].player, a4Z[aA].a4s.m3) : (aG.m1(a4Z[aA].player, 800, !1, 0), 0 <= a4Z[aA].vc && (m7 = a4Z[aA].vc, a4Z[aA].vc = a4Z[aA].player, a4Z[
					aA].player = m7))), !0);
		return !1
	}, this.zA = function(dm, pG, id, g8, a4o, a4p, vc, a4q, a4r, a4s) {
		a4l(dm, pG, id, g8, a4o, a4p, vc, a4q, a4r, a4s)
	}, this.a52 = function(p) {
		a4l(300, p, 252, 0, b9.mh, b9.me, -1, !1)
	}, this.a37 = function(id) {
		for (var aA = a4Z.length - 1; 0 <= aA; aA--) a4Z[aA].id === id && (a4Z[aA].lx = 1)
	}, this.yy = function(player, id) {
		0 === id ? (aP.iy(player, 0), a54(423, 0), a4l(160, L(41, [af.zL[player]]), 423, player, "rgb(10,220,10)", b9.me, -1, !1)) : 1 === id ? (a55(50, aC.eX), aP.iy(player, 1), a4l(360, L(42, [af.zL[player]]), 0, player, b9.nN, b9.me, -1, !0),
			aG.m1(player, 2700, !1, 0)) : 2 === id ? (aP.iy(player, 2), a4l(0, L(43), 0, player, "rgb(10,255,255)", b9.me, -1, !0), aG.m1(player, 2700, !1, 0)) : 3 === id ? (aP.iy(player, 2), a4l(0, L(44, [af.zL[player]]), 0, player, b9.mh,
			b9.me, -1, !0), aG.m1(player, 2700, !1, 0)) : 4 === id ? this.a56(1, player, player) : 5 === id ? 2 === af.a2B[player] || b8.fw.jE(aC.eK) || (function(id, lZ) {
			var aA, a5H = 0,
				ea = a4Z.length;
			for (aA = 0; aA < ea; aA++)
				if (a4Z[aA].id === id && lZ <= ++a5H) return a4Z.splice(aA, 1)
		}(1, 5), ae.a58(player) ? a4l(180, L(45, [af.zL[player]]), 1, player, a4m(255, 200, 180), b9.me, -1, !0) : (a54(573, 0), a4l(180, L(46, [af.zL[player]]), 573, player, b9.nN, b9.me, -1, !0))) : 18 === id ? a4l(255, L(47), 18, 0, b9.mh,
			b9.me, -1, !1) : 21 === id ? a4l(220, L(48), id, 0, b9.mh, b9.me, -1, !1) : 22 === id ? this.a56(2, player, player) : 59 === id && a4l(0, L(49), id, 0, b9.ne, b9.me, 0, !1)
	}, this.a04 = function(p) {
		a4l(200, L(50, [p]), 94, 0, b9.mh, b9.nJ, -1, !1)
	}, this.z5 = function(a59) {
		if (aC.eK === a59 && !aC.k9)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4l(0, "Your Win Count is now " + __fx.wins.count, 3, a59, b9.mh, b9.me, -1, !0);
		af.gO[a59] && (aP.iy(a59, 2), aC.jq < 100 ? a4l(0, L(44, [af.zL[a59]]), 3, a59, b9.mh, b9.me, -1, !0) : a4l(0, L(51, [af.zL[a59]]), 3, a59, b9.mh, b9.me, -1, !0))
	}, this.a4F = function(eE) {
		var a5B, pG, a5A = "(" + bK.ei(eE >> 2) + ", " + bK.ek(eE >> 2) + ")",
			a4q = !1,
			player = 0;
		ab.eV(eE) ? ab.eR(eE) ? a5A = L(52, [a5A]) : (player = ab.eS(eE), pG = L(53, [b8.x3.a1q(af.zP[player], b8.pZ.rN(0, 10), 150)]) + "   ", pG = (pG += L(54, [b8.zN.y4(af.gc[player])]) + "   ") + L(55, [b8.zN.y4(af.gO[player])]) + "   ", aC
				.hQ && (a5B = be.z8[be.kC[be.eY[player]]], pG += L(56) + ": " + a5B + "   "), b8.fw.jE(player) && (pG += L(57) + ": " + aD.k1[aD.hF[player]] + "   "), a5A = pG = (pG += L(58, [player]) + "   ") + L(59, [a5A]), a4q = !0) : a5A = ab
			.ef(eE) ? L(60, [a5A]) + "   #" + ab.eI(eE) : L(61, [a5A]), bd.de = !0, a54(55, 0), a4l(220, a5A, 55, player, b9.mh, b9.me, -1, a4q)
	}, this.a4H = function(a5C) {
		var kY = bL.x,
			player = kY.a5D[a5C] >> 3,
			pG = (bd.de = !0, a54(55, 0), L(62, [af.zL[player]]) + "   ");
		a4l(220, pG += L(54, [kY.a5E[a5C]]), 55, player, b9.mh, b9.me, -1, !0)
	}, this.oB = function(ny, a5F, oC) {
		ny === aC.eK ? a4l(175, " " + L(63, [af.zL[a5F]]) + ": ", 1001, a5F, a4m(200, 255, 210), b9.me, -1, !0, oC) : this.a5G(ny, oC)
	}, this.a5G = function(ny, oC) {
		a54(1e3, 0), a4l(175, af.zL[ny] + ": ", 1e3, ny, b9.mh, "rgba(5,60,25,0.9)", -1, !0, oC)
	}, this.zB = function() {
		var p;
		aC.yr ? (p = L(64), aP.z9(L(65), 2, 1, 12), a4l(0, p, 40, 0, "rgb(10,220,10)", b9.me, -1, !1)) : (p = L(66), aP.z9(L(67), 2, 0, 16), a4l(0, p, 41, 0, b9.mh, b9.me, -1, !1))
	}, this.xA = function() {
		var g3 = af.zL,
			ed = aC.data;
		a4l(300, g3[0] + " [" + aC.z4.xF(ed.elo[0]) + "] vs " + g3[1] + " [" + aC.z4.xF(ed.elo[1]) + "]", 65, 0, b9.mY, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5I = function(p) {
		a4l(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5J = function(a5K) {
		a4l(0, L(a5K ? 68 : 69), 247, 0, b9.nd, b9.me, -1, !1)
	}, this.xI = function(xE, xH, a5L) {
		var ed = aC.data,
			g3 = af.zL;
		a4l(0, g3[0] + ": " + aC.z4.xF(ed.elo[0]) + " -> " + xE, 66, 0, b9.mh, a5L[0], -1, !1), a4l(0, g3[1] + ": " + aC.z4.xF(ed.elo[1]) + " -> " + xH, 66, 1, b9.mh, a5L[1], -1, !1)
	}, this.oS = function(player, id) {
		0 === id ? a55(50, player) ? (a4l(128, L(70, [af.zL[player]]), 52, player, a4m(180, 255, 180), b9.me, -1, !0), ae.p8(player, 2, 255)) : a4l(384, L(71, [af.zL[player]]), 51, player, a4m(210, 210, 255), b9.me, -1, !0) : a55(51, player) ? (
			a4l(128, L(72, [af.zL[player]]), 52, player, b9.mh, "rgba(60,120,10,0.9)", -1, !0), ae.p8(player, 2, 255)) : (a4l(384, L(73, [af.zL[player]]), 50, player, b9.mh, "rgba(90,90,90,0.9)", -1, !0), ae.p8(player, 2, 96))
	}, this.oW = function(ya, target) {
		var color = a4m(210, 255, 210);
		1 < ya.length ? a4l(230, L(74, [ya.length, af.zL[target]]), 66, target, color, b9.me, -1, !0) : a4l(230, L(75, [af.zL[ya[0]], af.zL[target]]), 66, ya[0], color, b9.me, target, !0)
	}, this.a5M = function(player, target) {
		a4l(230, L(76, [af.zL[player], af.zL[target]]), 66, player, b9.mh, "rgba(75,65,5,0.9)", target, !0)
	}, this.a48 = function(id, g3) {
		a54(id, g3)
	}, this.yt = function(id, player) {
		a55(id, void 0 === player ? aC.eX : player)
	}, this.a5N = function(id) {
		for (var aA = a4Z.length - 1; 0 <= aA; aA--)
			if (a4Z[aA].id === id) return a4Z[aA];
		return null
	}, this.oN = function(a5O, a5P, player) {
		2 !== af.a2B[aC.eK] && (a4l(200, 1 === a5O ? L(77, [af.zL[player]]) : L(78, [a5O, af.zL[player]]), 30, player, "rgb(190,255,190)", b9.me, -1, !0), a5P) && a4l(30, 1 === a5P ? L(79) : L(80, [a5P]), 30, 0, b9.mh, b9.me, -1, !1)
	}, this.a5R = function(a5O, player) {
		2 !== af.a2B[aC.eK] && (a54(31, 0), 2 === af.a2B[player] || player >= aC.jq ? a4l(150, 1 === a5O ? L(81, [af.zL[player]]) : L(82, [af.zL[player], a5O]), 31, player, b9.mY, "rgba(205,205,205,0.9)", -1, !0) : a4l(150, 1 === a5O ? L(83, [af
			.zL[player]
		]) : L(84, [af.zL[player], a5O]), 31, player, b9.mY, "rgba(205,255,205,0.9)", -1, !0))
	}, this.ys = function(bq) {
		for (var ev = bd.jn(), aA = 2; 0 <= aA; aA--) 0 < a4d.td[aA] && (bq || a4d.ev[aA] < ev - 220) && this.a5X(aA)
	}, this.a5X = function(id) {
		var pG, ea = a4d.td[id],
			player = a4d.ya[id];
		a4d.td[id] = 0, 1 === ea ? (0 === id ? pG = L(91, [af.zL[player], af.zL[a4d.a4i[0]]]) : 1 === id ? pG = L(92, [af.zL[player]]) : 2 === id ? pG = L(93, [af.zL[player]]) : 3 === id && (pG = L(94, [af.zL[player]])), a54(7, 0), a4l(a4d.lw[
			id], pG, 7, a4d.a4i[id], b9.mh, b9.me, -1, !0)) : (pG = L(0 === id ? 95 : 1 === id ? 96 : 97, [ea]), a54(7, 0), a4l(a4d.lw[id], pG, 7, player, b9.mh, b9.me, -1, !1))
	}, this.a56 = function(id, h0, vc) {
		var ev = bd.jn(),
			ea = a4d.td[id] + 1;
		a4d.td[id]++, a4d.ya[id] = h0, a4d.a4i[id] = vc, 1 === ea && (a4d.ev[id] = ev), (1 === ea && (aC.yp < 32 || 2 === aC.ym) || 1 < ea && (a4d.ev[id] < ev - 140 || 2 === aC.ym)) && this.a5X(id)
	}, this.ik = function() {
		b0.ik();
		for (var hk = (hk = a4Z.length - a4e) <= 1 ? 1 : hk * hk, aA = a4Z.length - 1; 0 <= aA; aA--) 0 < a4Z[aA].lx && (a4Z[aA].lx -= hk, a4Z[aA].lx <= 0) && (bd.de = !0, a4Z.splice(aA, 1));
		! function() {
			var g3, aA;
			if (128 !== a4f && !(++a4f < 128))
				for (g3 = 5, aA = ak.jr - 1; 0 <= aA; aA--) 1 === af.a2B[ak.js[aA]] && 0 < g3-- && a4l(240, L(94, [af.zL[ak.js[aA]]]), 1, ak.js[aA], b9.mY, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.ys(!1)
	}, this.te = function() {
		for (var w3, ej = wz(), aA = a4Z.length - 1; 0 <= aA; aA--) w3 = ej - (aA + 1) * j, 50 === a4Z[aA].id ? (tf.drawImage(a4Z[aA].canvas, h.i - a4Z[aA].i - a4c - a4a, w3), tf.drawImage(a4g, h.i - a4c - a4a, w3)) : tf.drawImage(a4Z[aA].canvas,
			h.i - a4Z[aA].i - a4a, w3)
	}
}

function cB() {
	var a5Z, a5a, a5b, i, j, font, pG;

	function a5g(a5h) {
		return a5h < 10 ? "0" + a5h : String(a5h)
	}
	this.dW = function() {
		pG = L(98)
	}, this.resize = function() {
		i = Math.floor((z.a0.qx() ? .53 : .36) * h.pb), j = Math.floor(.065 * i), font = b8.pZ.rN(1, Math.floor(.9 * j)), a5b--, this.setTime()
	}, this.ik = function() {
		this.setTime() && (bd.de = !0)
	}, this.setTime = function() {
		for (var dm = new Date, a5c = dm.getUTCMinutes(), a5d = dm.getUTCSeconds(), a5e = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5f = (a5a = 3600 - 60 * a5c - a5d, a5a %= 300, 300), aA = 0; aA < a5e.length; aA++)
			if ((60 * a5c + a5d + a5a) % 3600 == 60 * a5e[aA]) {
				a5f = 0;
				break
			} return a5a += a5f, a5Z = pG + a5g(Math.floor(a5a / 60)) + ":" + a5g(a5a % 60), a5b !== (a5b = 60 * a5c + a5d) && (i = aP.measureText(a5Z, font), i += Math.floor(.4 * j), !0)
	}, this.te = function() {
		tf.lineWidth = 1 + Math.floor(j / 15), tf.translate(h.i - j, Math.floor(.5 * (h.j + i))), tf.rotate(-Math.PI / 2), tf.fillStyle = b9.mh, tf.fillRect(0, 0, i, j), tf.strokeStyle = b9.mY, tf.strokeRect(0, 0, i, j + 10), tf.fillStyle = b9
			.mY, tf.font = font, b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 1), tf.fillText(a5Z, Math.floor(i / 2), Math.floor(.59 * j)), tf.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cC() {
	var a4Z, a5i, a4M, j, a5j;

	function a5l(aA) {
		var a5n = !0,
			hg = b9.mh,
			i = (a4Z[aA].j1 === aC.eX ? a4Z[aA].x3.fillStyle = b9.ms : (ab.a5o(a4Z[aA].j1), a4Z[aA].x3.fillStyle = b8.color.mb(bM.fA[0], bM.fA[1], bM.fA[2], .87), 400 < b8.pi.a1I(bM.fA, 0, 2) && (a5n = !1, hg = b9.mY)), a4Z[aA].canvas.width),
			rt = (a4Z[aA].x3.clearRect(0, 0, i, j), a4Z[aA].x3.fillRect(0, 0, i, j), a4Z[aA].x3.fillStyle = hg, ! function(x3, i, j) {
				x3.fillRect(0, 0, i, 1), x3.fillRect(0, j - 1, i, 1), x3.fillRect(0, 0, 1, j), x3.fillRect(i - 1, 0, 1, j)
			}(a4Z[aA].x3, i, j), a5i + 2 * j < i && (a4Z[aA].x3.fillRect(i - a5i - j, 0, 1, j), a4Z[aA].x3.fillText(af.zL[a4Z[aA].j1], Math.floor((i - a5i) / 2), Math.floor(.57 * j))), 0 !== a4Z[aA].id ? 0 : j);
		a4Z[aA].x3.fillText(b8.zN.y4(a4Z[aA].hF), Math.floor(i - a5i / 2 - rt), Math.floor(.57 * j)),
			function(aA, i, rt, a5n) {
				a4Z[aA].x3.fillStyle = a5n ? b9.mj : b9.mf;
				a5n = Math.floor(a5i * a4Z[aA].hF / a4Z[aA].a5u);
				a4Z[aA].x3.fillRect(Math.floor(i - a5i - rt), j - a5j, a5n, a5j)
			}(aA, i, rt, a5n), 0 === a4Z[aA].id ? (a5r(aA, i, a5n, hg), function(aA, i, a5n) {
				a4Z[aA].x3.strokeStyle = a5n ? b9.mz : b9.n9, a4Z[aA].x3.fillRect(j, 0, 1, j);
				a5n = i - j;
				a4Z[aA].x3.beginPath(), a4Z[aA].x3.moveTo(Math.floor(.3 * j + a5n), Math.floor(j / 2)), a4Z[aA].x3.lineTo(Math.floor(j - .3 * j + 0 + a5n), Math.floor(j / 2)), a4Z[aA].x3.stroke(), a4Z[aA].x3.beginPath(), a4Z[aA].x3.moveTo(Math
					.floor(j / 2 + a5n), Math.floor(.3 * j)), a4Z[aA].x3.lineTo(Math.floor(j / 2 + a5n), Math.floor(j - .3 * j + 0)), a4Z[aA].x3.stroke()
			}(aA, i, a5n)) : a5r(aA, 2 * j, a5n, hg)
	}

	function a5r(aA, i, a5n, hg) {
		a4Z[aA].x3.strokeStyle = a4Z[aA].a5v ? b9.mq : a5n ? b9.nF : b9.nG, a4Z[aA].x3.fillStyle = hg, a4Z[aA].x3.fillRect(i - j, 0, 1, j), a4Z[aA].x3.lineWidth = Math.max(Math.floor(j / 12), 3), a4Z[aA].x3.lineCap = "round";
		a5n = .35;
		i = j + 1, a4Z[aA].x3.beginPath(), a4Z[aA].x3.moveTo(Math.floor(i - a5n * j + 0), Math.floor(a5n * j)), a4Z[aA].x3.lineTo(Math.floor(i - j + a5n * j), Math.floor(j - a5n * j + 0)), a4Z[aA].x3.stroke(), a4Z[aA].x3.beginPath(), a4Z[aA].x3
			.moveTo(Math.floor(i - j + a5n * j), Math.floor(a5n * j)), a4Z[aA].x3.lineTo(Math.floor(i - a5n * j + 0), Math.floor(j - a5n * j + 0)), a4Z[aA].x3.stroke()
	}

	function a65(ea) {
		for (var hF, aA = ea - 1; 0 <= aA; aA--) hF = ac.fn(aC.eK, aA), a4Z[aA].hF !== hF && (a4Z[aA].hF = hF, a4Z[aA].a5u = hF > a4Z[aA].a5u ? hF : a4Z[aA].a5u, a4Z[aA].a5m = !0)
	}

	function a5k(a67) {
		a67.canvas = document.createElement("canvas"), bQ.vN.font = a4M;
		var i = a5i;
		a67.j1 < aC.eX && 0 === a67.id && (i += Math.floor(bQ.vN.measureText(af.zL[a67.j1] + "000").width)), i += j, 0 === a67.id && (i += j), a67.canvas.width = i, a67.canvas.height = j, a67.x3 = a67.canvas.getContext("2d", {
			alpha: !0
		}), a67.x3.font = a4M, b8.pZ.textBaseline(a67.x3, 1), b8.pZ.textAlign(a67.x3, 1)
	}

	function a61(aA) {
		return aT.a69() ? h.i - a4Z[aA].canvas.width - ba.gap : aT.eh
	}

	function a62(aA) {
		return Math.floor(2 * ba.gap + (aT.a69() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dW = function() {
		a4Z = [], this.resize()
	}, this.resize = function() {
		a4M = aM.a4M, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qx() && (j = Math.floor(1.25 * j)), a5j = Math.floor(.15 * j), bQ.vN.font = a4M, a5i = Math.floor(bQ.vN.measureText("02 000 000 0000").width);
		for (var aA = a4Z.length - 1; 0 <= aA; aA--) a5k(a4Z[aA]), a5l(aA)
	}, this.lQ = function() {
		for (var aA = a4Z.length - 1; 0 <= aA; aA--) a4Z[aA].a5m && (a4Z[aA].a5m = !1, a5l(aA))
	}, this.go = function(kt, ku) {
		if (2 !== aC.ym && 0 !== af.le[aC.eK] && !aC.gk && !b8.fw.jE(aC.eK))
			for (var a5w, a5x, a5y, a5z = z.a0.qx() ? j : 0, a60 = z.a0.qx() ? Math.floor(.15 * j) : 0, aA = a4Z.length - 1; 0 <= aA; aA--)
				if (a5w = a61(aA), a5x = a62(aA), a5y = a4Z[aA].canvas.width, a5x - a60 <= ku && ku <= a5x + j + a60) {
					if (a5w - a5z <= kt && kt <= a5w + j + a5z) return a4Z[aA].a5v || (a4Z[aA].a5m = !0, a4Z[aA].a5v = !0, 0 === a4Z[aA].id && b6.gx.o9(a4Z[aA].j1)), !0;
					if (0 === a4Z[aA].id && a5w + a5y - j - a5z <= kt && kt <= a5w + a5y + a5z) return bT.a42(3), b6.gx.h8(aQ.h2(), a4Z[aA].j1), !0
				} return !1
	}, this.ik = function() {
		var ea;
		0 === af.le[aC.eK] || b8.fw.jE(aC.eK) && !aC.gk || (function(ea) {
			if (a4Z.length !== ea) return 1;
			for (var aA = ea - 1; 0 <= aA; aA--)
				if (a4Z[aA].id !== ac.fh(aC.eK, aA) || a4Z[aA].j1 !== ac.fm(aC.eK, aA)) return 1;
			return
		}(ea = ac.fg(aC.eK)) && function(ea) {
			var aA, id, j1, eu, hF, a4n = [];
			loop: for (aA = 0; aA < ea; aA++) {
				for (id = ac.fh(aC.eK, aA), j1 = ac.fm(aC.eK, aA), eu = 0; eu < a4Z.length; eu++)
					if (a4Z[eu].id === id && a4Z[eu].j1 === j1) {
						a4n.push(a4Z.splice(eu, 1)[0]);
						continue loop
					} hF = ac.fn(aC.eK, aA), a5k(hF = {
					j1: j1,
					hF: hF,
					a5u: hF,
					id: id,
					a5m: !0,
					a5v: !1,
					canvas: null,
					x3: null
				}), a4n.push(hF)
			}
			a4Z = a4n
		}(ea), a65(ea))
	}, this.a68 = function(g8) {
		for (var ea = Math.min(a4Z.length, ac.fg(aC.eK)), aA = 0; aA < ea; aA++)
			if (a4Z[aA].j1 === g8) return void(a4Z = [])
	}, this.te = function() {
		if (0 !== af.le[aC.eK] && (!b8.fw.jE(aC.eK) || aC.gk))
			for (var aA = a4Z.length - 1; 0 <= aA; aA--) tf.drawImage(a4Z[aA].canvas, a61(aA), a62(aA))
	}
}

function cD() {
	var a4Z, jv, a6A, a6B, j, a4M, fontSize, a6C, a6D, a6E, a6F, canvas, x3, lr, a6G;

	function tw(aA) {
		return L(0 === aA ? 99 : 1 === aA ? 100 : 2 === aA ? 101 : 102)
	}

	function a6N() {
		tf.drawImage(canvas, ba.gap + (aC.hQ ? ba.gap + bf.a6O() : 0), a6P + 2 * ba.gap)
	}

	function a6H() {
		canvas.width = a4Z[0].width + a6E, canvas.height = j + a6E, (x3 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4Z[0].width + a6E, j + a6E), x3.translate(Math.floor(a6E / 2), Math.floor(a6E / 2)), x3.lineWidth = a6E, x3.fillStyle = 1 === a4Z[0].a6M ? b9.mm : b9.me, a6Q(), x3.fill(), x3.strokeStyle = 1 === a4Z[0].a6M ? b9.mY :
			b9.mh, a6Q(), x3.stroke(), b8.pZ.textAlign(x3, 1), b8.pZ.textBaseline(x3, 1), x3.fillStyle = 1 === a4Z[0].a6M ? b9.mY : b9.mh, x3.font = a4M[0], x3.fillText(tw(a4Z[0].a6L), Math.floor(a4Z[0].width / 2), Math.floor(.72 * a6C[0] * j)), x3
			.font = a4M[1], x3.fillText(a4Z[0].pG, Math.floor(a4Z[0].width / 2), Math.floor((a6C[0] + .48 * a6C[1]) * j))
	}

	function a6Q() {
		x3.beginPath(), x3.moveTo(a6F, 0), x3.lineTo(a4Z[0].width - a6F, 0), x3.lineTo(a4Z[0].width, a6F), x3.lineTo(a4Z[0].width, j - a6F), x3.lineTo(a4Z[0].width - a6F, j), x3.lineTo(a6F, j), x3.lineTo(0, j - a6F), x3.lineTo(0, a6F), x3.closePath()
	}
	this.dW = function() {
		jv = 4, a6A = a6B = lr = 0, a4Z = [], a4M = new Array(2), fontSize = new Array(2), (a6C = new Array(2))[0] = .3, a6C[1] = .7, a6D = new Array(4), canvas = document.createElement("canvas"), a6G = bd.lx + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qx() ? .0725 : .058) * h.pb), fontSize[0] = Math.floor(.85 * a6C[0] * j), fontSize[1] = Math.floor(.85 * a6C[1] * j), a4M[0] = b8.pZ.rN(1, fontSize[0]), a4M[1] = b8.pZ.rN(1, fontSize[1]), aA = a6D.length -
			1; 0 <= aA; aA--) a6D[aA] = this.measureText(tw(aA) + "000", a4M[0]);
		if (a6E = Math.floor(1 + .05 * j), a6F = Math.floor(.2 * j), 0 < a4Z.length) {
			for (aA = a4Z.length - 1; 0 <= aA; aA--) i = this.measureText(a4Z[aA].pG + "00", a4M[1]), a4Z[aA].width = i < a6D[aA] ? a6D[aA] : i;
			a6H()
		}
	}, this.ik = function() {
		0 !== jv && (4 === jv ? bd.lx > a6G && (jv = 0, 1 === aC.ym) && aP.z9(bQ.vH.vI[bQ.eG].name, 3, 1, 9) : (1 === jv ? (0 === a6A && (a6H(), a6A = 1e-4), 1 <= (a6A += .002 * (bd.lx - lr)) && (a6B = 0, jv = 2, a6A = 1), bd.de = !0) : 2 ===
			jv ? ((a6B += (bd.lx - lr) / 1e3) > a4Z[0].lw || 1 < a6B && 1 < a4Z.length) && (jv = 3) : 3 === jv && ((a6A -= .002 * (bd.lx - lr)) <= 0 && (a6A = 0, a4Z.shift(), jv = 0 < a4Z.length ? 1 : 0), bd.de = !0), lr = bd.lx))
	}, this.measureText = function(pG, a4M) {
		return tf.font = a4M, Math.floor(tf.measureText(pG).width)
	}, this.iy = function(a6K, aA) {
		this.z9(af.zL[a6K], aA, 1, 0 === aA ? 3 : 7)
	}, this.z9 = function(pG, a6L, a6M, lw) {
		var i;
		pG.length && (i = (i = this.measureText(pG + "00", a4M[1])) < a6D[a6L] ? a6D[a6L] : i, a4Z.push({
			pG: pG,
			width: i,
			a6L: a6L,
			a6M: a6M,
			lw: lw
		}), 0 === jv) && (a6A = 0, jv = 1, lr = bd.lx)
	}, this.te = function() {
		0 !== jv && 0 !== a6A && (a6A < 1 ? (tf.globalAlpha = a6A, a6N(), tf.globalAlpha = 1) : a6N())
	}
}

function cl() {
	var j, canvas, x3, a6R, a6S, a6T, a6U, a5m, a6V, a6W, a6X, a6Y, a5K = !1,
		a1e = (this.hI = !1, this.i = 0, new Array(2)),
		a6Z = 0;

	function lR() {
		var i = au.i,
			kY = (a5m = !1, x2(x3, i, j), Math.floor(i / 2));
		1 === a6R ? (x3.fillStyle = b9.n1, x3.fillRect(kY, 0, kY, j)) : -1 === a6R && (x3.fillStyle = b9.nH, x3.fillRect(0, 0, kY, j)), x4(x3, i, j, 2);
		var kY = (kY = Math.floor(.25 * j)) < 2 ? 2 : kY,
			a5T = (x3.fillStyle = b9.mn, Math.floor((j - 4) * a6S[1] / a6T[1]));
		0 < a5T && x3.fillRect(2, j - 2 - a5T, kY, a5T), 0 < (a5T = Math.floor((j - 4) * a6S[0] / a6T[0])) && x3.fillRect(i - 2 - kY, j - 2 - a5T, kY, a5T);
		kY = (kY = Math.floor(j / 8)) < 2 ? 2 : kY, x6(x3, Math.floor(.4 * j), 0, j, kY, .5, !1), x6(x3, Math.floor(i - 1.4 * j), 0, j, kY, .5, !0), a5T = 1.1 * j / a1e[0].width;
		x3.imageSmoothingEnabled = !0, x3.setTransform(a5T, 0, 0, a5T, (i - a5T * a1e[0].width) / 2, -.05 * j), x3.drawImage(a1e[+a5K], 0, 0), x3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6e() {
		a6Y = -1, a5K = ag.a6f(), aM.a37(257), aM.a5J(a5K), au.hI = !0, a5m = !0, a6V = 360;
		for (var f2, dm = 0, aA = ak.jr - 1; 0 <= aA; aA--) b8.fw.jE(ak.js[aA]) || (dm += af.gO[ak.js[aA]]);
		a5K ? a6T[0] = Math.max(bJ.dn(3 * dm, 4), 1) : aC.hQ ? 9 === aC.k7 && 8 === be.kC[bf.l2()] ? a6T[0] = Math.max(dm, 1) : (f2 = bJ.dn(100 * bf.a2b(), aC.ja), f2 = bJ.p7(200 - 2 * f2, 40, 100), f2 = bJ.dn(f2 * dm, 100), a6T[0] = Math.max(f2,
			1)) : a6T[0] = Math.max(bJ.dn(3 * dm, 5), 1), a6T[1] = Math.max(dm - a6T[0], 1)
	}

	function a6a() {
		a6X = bd.jn(), a5m = !0, a6V = a6R = 0, a6U = [], au.hI = !1, aM.yt(247), a6S[0] = a6S[1] = 0, aM.a37(673)
	}

	function wz() {
		return aQ.a4y(aM.a4u()) ? aQ.ej - j - ba.gap : bA.a4y(aM.a4x()) ? bA.wz() - j - ba.gap : h.j - j - bi.a3k() * ba.gap
	}
	this.dX = function() {
		for (var aA = 0; aA < 2; aA++) a1e[aA] = b8.canvas.xZ(aa.get(3), 8 - aA, b9.no), a1e[aA] = b8.canvas.a1g(a1e[aA])
	}, this.dW = function() {
		a6X = -1e4, a6W = a6Z = 0, a6Y = -1, this.hI = !1, a5m = a5K = !1, a6S = [a6R = a6V = 0, 0], a6T = [1, 1], a6U = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x3 = canvas.getContext("2d", {
			alpha: !0
		}), lR()
	}, this.lQ = function() {
		a5m && lR()
	}, this.go = function(eh, ej) {
		return !!this.hI && !(eh < h.i - this.i - ba.gap || ej < wz() || (aC.gk || this.hJ(aC.eK) && (aL.gl && aL.a0u(), b6.gx.hK(eh > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ik = function() {
		0 < a6W ? 0 === --a6W && a6a() : this.hI ? 180 == --a6V && 3 * a6S[0] < a6T[0] ? a6a() : a6S[0] >= a6T[0] ? a5K ? bP.yP.yh() : bP.yP.yl() : a6S[1] >= a6T[1] ? a6W = 4 : a6V <= 0 && a6a() : ! function() {
			var a6h = bd.jn();
			if (a6h % 40 == 14) {
				if (a6Z) return !(a6h < a6Z) && !(a6h < a6X + 535) && (a6Z = a6h + 1071, b8.fw.a2E()) ? (a6e(), 1) : 0;
				1 === ak.jr ? a6Z = a6h + 535 : (aC.hQ ? bf.a2b() : af.gO[l5[0]]) >= bJ.dn(96 * aC.ja, 100) && (a6Z = a6h + 1071)
			}
			return
		}() && 0 <= a6Y && (aM.zA(250, L(103, [af.zL[a6Y]]), 673, a6Y, b9.mh, b9.me, -1, !0), a6e())
	}, this.yn = function() {
		this.hI && a6S[0] < a6T[0] && a6a()
	}, this.p9 = function(player, a6i) {
		var a6j = L(a6i ? 104 : 105, [af.zL[player]]),
			a6j = (aM.zA(450, a6j, 257, player, a6i ? b9.mz : b9.nE, b9.me, -1, !0), a6U.push(player), a5m = !0, aC.k9 ? Math.max(a6T[0], a6T[1]) : af.gO[player]),
			a6j = Math.max(a6j, 1);
		a6i ? a6S[0] += a6j : a6S[1] += a6j, player === aC.eK && (a6R = a6i ? 1 : -1)
	}, this.te = function() {
		var ej;
		this.hI && (ej = wz(), tf.drawImage(canvas, h.i - this.i - ba.gap, ej))
	}, this.hL = function(player) {
		if (!aC.k9) {
			if (bd.jn() < a6X + 140) return !1;
			if (bd.jn() < 535) return !1
		}
		return 0 === a6V && !!b8.fw.gm(1) && !(!b8.fw.gn(player) || 10 <= jb[player] && !b8.fw.a2X(player, 9))
	}, this.hJ = function(g8) {
		if (!b8.fw.gm(1)) return !1;
		if (!b8.fw.gn(g8)) return !1;
		if (!this.hI) return !1;
		for (var aA = a6U.length - 1; 0 <= aA; aA--)
			if (a6U[aA] === g8) return !1;
		return !0
	}, this.hH = function(player) {
		a6Y = player
	}
}

function cE() {
	var i, eh, a6k, canvas, x3, hI, iA, a2y, a4M, a5m, a6l = 11 / 12;

	function a6n() {
		var a5t = Math.floor(iA * (i - 2 * a6k)),
			a6q = 1 + Math.floor(.0625 * aQ.j),
			a6r = 1 + Math.floor(.3 * aQ.j),
			a6s = Math.floor(.55 * aQ.j);
		x3.clearRect(0, 0, i, aQ.j), x3.fillStyle = b9.md, x3.fillRect(0, 0, a6k, aQ.j), x3.fillRect(a6k + a5t, 0, i - a6k - a5t, aQ.j), x3.fillStyle = iA < 1 / 3 ? "rgba(" + Math.floor(3 * iA * 130) + ",130,0,0.85)" : iA < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iA - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iA - 2 / 3) * 130) + ",0.85)", x3.fillRect(a6k, 0, a5t, aQ.j), x3.fillStyle = b9.mh, x3.fillRect(0, 0, i, 1), x3.fillRect(0, aQ.j - 1, i, 1), x3
			.fillRect(0, 0, 1, aQ.j), x3.fillRect(a6k, 0, 1, aQ.j), x3.fillRect(a6k + a5t, 0, 1, aQ.j), x3.fillRect(i - a6k, 0, 1, aQ.j), x3.fillRect(i - 1, 0, 1, aQ.j), x3.fillRect(Math.floor(.25 * aQ.j) + a6r, Math.floor((aQ.j - a6q) / 2), aQ.j -
				2 * a6r, a6q), x3.fillRect(Math.floor(i - 1.25 * aQ.j) + a6r, Math.floor((aQ.j - a6q) / 2), aQ.j - 2 * a6r - a6r % 2, a6q), x3.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6q) / 2), a6r, a6q, aQ.j - 2 * a6r - a6r % 2),
			a2y = b8.fw.i9(aC.eK, aQ.h2()), x3.fillText(b8.zN.y4(a2y) + " (" + b8.zN.a2r(100 * iA, +(iA < .1)) + ")", Math.floor(.5 * i), a6s)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iA = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0q(arg1);

	function a6x(a1D) {
		return !(1 < a1D && 1 === iA || (1 < a1D && a1D * iA - iA < 1 / 1024 ? a1D = (iA + 1 / 1024) / iA : a1D < 1 && iA - a1D * iA < 1 / 1024 && (a1D = (iA - 1 / 1024) / iA), iA = bJ.p7(iA * a1D, 1 / 1024, 1), a6n(), 0))
	}

	function a6y(kt) {
		return iA !== (iA = bJ.p7((kt - eh - a6k) / (i - 2 * a6k), 1 / 1024, 1)) && (a6n(), !0)
	}
	this.ej = 0, this.gp = !1, this.dW = function() {
		hI = !aC.gw && !aC.gk, a5m = !1, iA = .5, a2y = 0, this.gp = !1, this.resize()
	}, this.resize = function() {
		z.a0.qx() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pb), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.qx() ? .65 : .389) * h.pb), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6k = Math.floor(3 * this.j / 2), a4M = b8
			.pZ.rN(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4M, b8.pZ.textBaseline(x3, 1), b8.pZ.textAlign(x3, 1), this.a6m(), a6n()
	}, this.a6m = function() {
		eh = z.a0.qx() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.ej = h.j - this.j - bi.a3k() * ba.gap
	}, this.lQ = function() {
		a5m && (a5m = !1, a6n())
	}, this.hI = function() {
		return !(!hI || aL.gl && eh < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a4y = function(a6t) {
		return !!this.hI() && eh + i > h.i - a6t - ba.gap
	}, this.a35 = function() {
		hI = !aC.gk
	}, this.a6a = function() {
		hI = !1
	}, this.h2 = function() {
		return bJ.p7(Math.floor(1024 * iA + .5) - 1, 0, 1023)
	}, this.a0n = function(kt, ku) {
		return this.hI() && eh < kt && kt < eh + i && ku > this.ej
	}, this.go = function(kt, ku) {
		return !!this.hI() && !!aQ.a0n(kt, ku) && (aR.mC = !1, function(rB, kt, ku) {
			if (function(kt, ku) {
					return eh < kt && kt < eh + a6k && ku > aQ.ej
				}(kt, ku)) return a6x(a6l);
			if (function(kt, ku) {
					return eh + i - a6k < kt && kt < eh + i && ku > aQ.ej
				}(kt, ku)) return a6x(1 / a6l);
			return rB.gp = !0, a6y(kt)
		}(this, kt, ku) && (bd.de = !0), !0)
	}, this.a0q = function(mJ) {
		0 !== aC.ym && this.hI() && a6x(mJ) && (bd.de = !0)
	}, this.a0M = function(deltaY) {
		var mJ;
		return !(0 === deltaY || !this.hI()) && a6x(mJ = 0 < deltaY ? (mJ = 400 / (400 + deltaY)) < a6l ? a6l : mJ : 1 / a6l < (mJ = (400 - deltaY) / 400) ? 1 / a6l : mJ)
	}, this.a0J = function(kt) {
		return !!this.gp && a6y(kt)
	}, this.a0j = function() {
		this.gp = !1
	}, this.ik = function() {
		this.hI() && a2y !== b8.fw.i9(aC.eK, this.h2()) && (a5m = !0)
	}, this.te = function() {
		this.hI() && tf.drawImage(canvas, eh, this.ej)
	}
}

function cv() {
	var canvas, x3, a6z, font, a70 = 0,
		a71 = !1,
		a72 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a73 = 5;

	function a79() {
		if (a71) {
			var aA, ea = a72.length,
				a6s = Math.floor(.5 * a6z.j),
				j = ea * a6s,
				eh = Math.floor(Math.floor(a6z.eh) + .3 * a6z.i - .5),
				ej = Math.floor(Math.floor(a6z.ej) - j),
				i = Math.floor(.4 * a6z.i + 2.5);
			for (tf.fillStyle = b9.md, tf.fillRect(eh, ej, i, j), tf.fillStyle = b9.n6, tf.fillRect(eh, ej + a73 * a6s, i, a6s), tf.fillStyle = b9.mh, tf.fillRect(eh, ej, 2, j), tf.fillRect(eh, ej, i, 2), tf.fillRect(eh + i - 2, ej, 2, j), aA =
				1; aA < ea; aA++) tf.fillRect(eh, ej + aA * a6s, i, 2);
			for (tf.fillStyle = b9.mh, b8.pZ.textAlign(tf, 1), b8.pZ.textBaseline(tf, 1), tf.font = b8.pZ.rN(0, .6 * a6s), eh += .5 * i, aA = 0; aA < ea; aA++) tf.fillText(a7H(aA), eh, ej + (aA + .6) * a6s)
		}
		tf.drawImage(canvas, Math.floor(a6z.eh), Math.floor(a6z.ej))
	}

	function lR(rB) {
		var eh, m7, m8, a6s;
		x3.clearRect(0, 0, Math.floor(a6z.i), Math.floor(a6z.j)), x3.fillStyle = b9.md, x3.fillRect(0, 0, Math.floor(a6z.i), Math.floor(a6z.j)), aC.mA && (x3.fillStyle = b9.n6, x3.fillRect(0, 0, Math.floor(.3 * a6z.i), Math.floor(a6z.j))), x3
			.fillStyle = b9.mh, x3.fillText("Hide UI", .15 * a6z.i, .5 * a6z.j), x3.fillRect(Math.floor(.3 * a6z.i - .5), 0, 2, Math.floor(a6z.j)), eh = .5 * a6z.i, x3.fillText("Replay Speed", eh, .31 * a6z.j), x3.fillText(a7H(a73), eh, .69 * a6z.j),
			x3.fillRect(Math.floor(.7 * a6z.i - .5), 0, 2, Math.floor(a6z.j)), rB.a3c ? (eh = Math.floor(.02 * a6z.i), rB = Math.floor(.025 * a6z.i), m7 = Math.floor(.85 * a6z.i - eh - .5 * rB), m8 = Math.floor(.25 * a6z.j), a6s = Math.floor(a6z.j) -
				2 * m8, x3.fillRect(m7, m8, eh, a6s), x3.fillRect(m7 + eh + rB, m8, eh, a6s)) : function() {
				var i = Math.floor(.46 * a6z.j),
					j = Math.floor(.23 * a6z.j),
					eh = Math.floor(.85 * a6z.i - .5 * i + i / 12),
					ej = Math.floor(.5 * a6z.j - j);
				x3.beginPath(), x3.moveTo(eh, ej), x3.lineTo(eh + i, ej + j), x3.lineTo(eh, ej + (j << 1)), x3.fill()
			}(), x3.fillRect(0, 0, Math.floor(a6z.i), 2), x3.fillRect(0, 0, 2, Math.floor(a6z.j)), x3.fillRect(0, Math.floor(a6z.j) - 2, Math.floor(a6z.i), 2), x3.fillRect(Math.floor(a6z.i - 2), 0, 2, Math.floor(a6z.j))
	}

	function a7H(aA) {
		return 5 === aA ? "Normal" : "" + a72[aA]
	}
	this.a3c = !1, this.dW = function() {
		aC.gk && (a73 = 5, this.a3c = !1, a71 = !1, a6z = new qB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a74 = function() {
		return a72[a73]
	}, this.wz = function() {
		return a6z.ej
	}, this.a4y = function(a6t) {
		return !!aC.gk && a6z.eh + a6z.i > h.i - a6t - ba.gap
	}, this.resize = function() {
		aC.gk && (a6z.resize(), a6z.ej -= (bi.a3k() - 1) * ba.gap, font = b8.pZ.rN(0, .3 * a6z.j), (canvas = document.createElement("canvas")).width = Math.floor(a6z.i), canvas.height = Math.floor(a6z.j), (x3 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pZ.textAlign(x3, 1), b8.pZ.textBaseline(x3, 1), lR(this))
	}, this.a0t = function(a75) {
		0 === aC.ym || s.hI() || a75 !== aC.mA && (aC.mA = a75, bf.resize(), bd.de = !0, aC.gk) && (a70 = bd.lx + 2e3, lR(this))
	}, this.go = function(eh, ej) {
		if (!aC.gk) return !1;
		if (eh < a6z.eh || ej < a6z.ej || eh > a6z.eh + a6z.i) return a71 && function(rB, eh, ej) {
			var ea = a72.length,
				a6s = Math.floor(.5 * a6z.j),
				j = ea * a6s,
				m7 = Math.floor(Math.floor(a6z.eh) + .3 * a6z.i - .5),
				j = Math.floor(Math.floor(a6z.ej) - j),
				i = Math.floor(.4 * a6z.i + 2.5);
			return a71 = !1, bd.de = !0, eh < m7 || m7 + i < eh || ej < j || (a73 = a78(0, Math.floor((ej - j) / a6s), ea - 1), lR(rB)), !0
		}(this, eh, ej);
		if ((eh -= a6z.eh) < .3 * a6z.i) a71 = !1, this.a0t(!aC.mA);
		else {
			if (eh < .7 * a6z.i) return a71 = !a71, bd.de = !0;
			this.a0v(!1)
		}
		return !0
	}, this.a0v = function(a77) {
		2 === aC.ym ? (this.a0t(!1), s.t(3)) : (a71 = !1, this.a3c = !this.a3c, this.a3c ? (aL.gl && aL.a0u(), z.a0.setState(1)) : a77 || aL.a4S(), bd.de = !0, lR(this))
	}, this.a0w = function() {
		this.a3c = !1, aL.a4S(), bd.de = !0, lR(this)
	}, this.a0c = function(eh, ej) {
		return !!aC.mA && (0 <= aL.go(eh, ej) || (aC.gk ? ((bd.lx > a70 || !this.go(eh, ej)) && aR.go(eh, ej), bd.de = !0, a70 = bd.lx + 2e3) : aR.go(eh, ej)), !0)
	}, this.ik = function() {
		aC.gk && aC.mA && bd.lx > a70 - 1e3 && bd.lx < a70 && (bd.de = !0)
	}, this.yu = function() {
		aC.gk && (this.a3c = !1, bd.de = !0, lR(this))
	}, this.te = function() {
		if (aC.gk) {
			if (aC.mA) {
				if (bd.lx > a70) return;
				if (bd.lx > a70 - 1e3) return tf.globalAlpha = a78(0, (1e3 - (bd.lx - (a70 - 1e3))) / 1e3, 1), a79(), void(tf.globalAlpha = 1)
			}
			a79()
		}
	}
}

function cF() {
	var a7I, a7J, i, eh, ej, a7K, a7L;
	this.dW = function() {
		a7I = new Array(2), a7J = new Array(2), this.mC = !1, a7L = a7K = iD = iB = 0, iC = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.qx() ? .072 : .0502) * h.pb)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7I[aA] = document.createElement("canvas"), a7I[aA].width = i, a7I[aA].height = i, a7J[aA] = a7I[aA].getContext("2d", {
			alpha: !0
		});
		this.a6m(),
			function() {
				for (var a7a = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7J[aA].clearRect(0, 0, i, i), a7J[aA].fillStyle = b9.ma, a7J[aA].beginPath(), a7J[aA].arc(i / 2, i / 2, i / 2 - a7a, 0, 2 * Math.PI), a7J[aA].fill(), a7J[aA]
					.lineWidth = a7a, a7J[aA].fillStyle = b9.mh, a7J[aA].strokeStyle = b9.mh, a7J[aA].beginPath(), a7J[aA].arc(i / 2, i / 2, i / 2 - a7a, 0, 2 * Math.PI), a7J[aA].stroke(), x6(a7J[aA], 0, 0, i, a7a, .3, 0 === aA)
			}()
	}, this.wy = function() {
		return -iB / iC
	}, this.wz = function() {
		return -iD / iC
	}, this.mM = function(a7P, ht) {
		iB = iC * a7P - ht
	}, this.mN = function(a7Q, hu) {
		iD = iC * a7Q - hu
	}, this.go = function(a7O, a4z) {
		return aC.mA || ! function(a7O, a4z) {
			return Math.pow(a7O - (eh + i / 2), 2) + Math.pow(a4z - (ej + i / 2), 2) < i * i / 4 || Math.pow(a7O - (eh + i / 2), 2) + Math.pow(a4z - (ej + 2 * i), 2) < i * i / 4
		}(a7O, a4z) || bh.dr.data[8].value ? (aG.mP() && (this.mC = !0, a7K = a7O, a7L = a4z), !1) : a4z < ej + 1.25 * i ? this.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0J = function(a7O, a4z) {
		var a7R, a7S, hw, hz;
		return !aG.mP() || (a7R = iB, a7S = iD, iB += hw = a7K - a7O, iD += hz = a7L - a4z, ae.a0J(hw, hz), this.a7T(), a7K = a7O, a7L = a4z, a7R !== iB) || a7S !== iD
	}, this.a0M = function(kt, ku, deltaY) {
		var mJ;
		if (aG.mP()) {
			if (0 < deltaY) mJ = (mJ = 500 / (500 + deltaY)) < .5 ? .5 : mJ;
			else {
				if (!(deltaY < 0)) return !1;
				mJ = 2 < (mJ = (500 - deltaY) / 500) ? 2 : mJ
			}
			this.a7U(kt, ku, mJ), bd.de = !0
		}
		return !0
	}, this.a7U = function(eh, ej, eE) {
		var a1D;
		eE = a1D = (a1D = 1024 < (a1D = eE) * iC ? 1024 / iC : a1D) * iC < .125 ? .125 / iC : a1D, ae.zoom(eE, eh, ej),
			function(a1D, kt, ku) {
				iC *= a1D, iB = (iB + kt) * a1D - kt, iD = (iD + ku) * a1D - ku, aR.a7T()
			}(eE, eh, ej)
	}, this.a7T = function() {
		var a7X = h.i / 16,
			he = 0,
			a7Y = h.j / 16,
			hf = 0;
		iB < -h.i + a7X && (he = -h.i + a7X - iB), iB > iC * bQ.el - a7X && (he = iC * bQ.el - a7X - iB), iD < -h.j + a7Y && (hf = -h.j + a7Y - iD), iD > iC * bQ.em - a7Y && (hf = iC * bQ.em - a7Y - iD), iB += he, iD += hf, bY.mO(), ae.a7Z(he,
			hf)
	}, this.a6m = function() {
		eh = h.i - i - ba.gap, ej = Math.floor(h.j / 2 - 1.25 * i)
	}, this.te = function() {
		bh.dr.data[8].value || (tf.drawImage(a7I[0], eh, ej), tf.drawImage(a7I[1], eh, Math.floor(ej + 3 * i / 2)))
	}
}

function cG() {
	var g, a7b, a7c, a7d, gap, a7e, a7f, a7g, a7h, a7i, a4M, a7j, gf, a7k, a5t, a7l, a7m, a7n;

	function a7r() {
		a7d = Math.floor(.2 * (z.a0.qx() ? .07 : .035) * h.pb), a7d = a4w(z.a0.qx() ? 3 : 1, a7d);
		var a7u = h.i / (g.length + gap);
		a7d = a7d < a7u ? a7u : a7d, a5t = Math.floor((1 - gap) * a7d), a7b = 0, a7v()
	}

	function a7v() {
		a7b = (a7b = a7b < -20 ? -20 : a7b) > (g.length - 15) * a7d ? (g.length - 15) * a7d : a7b, a7f = Math.floor(a7b / a7d), a7g = (a7g = a7f + Math.floor(h.i / a7d)) > g.length - 1 ? g.length - 1 : a7g, a7f = (a7f = a7g < a7f ? a7g : a7f) < 0 ?
			0 : a7f;
		var kY = a7g;
		a7e = a7c / g[kY];
		for (var aA = a7g - 1; a7f <= aA; aA--) g[aA] > g[kY] && (kY = aA, a7e = a7c / Math.pow(g[aA], a7k))
	}

	function a7y(eh) {
		eh = Math.floor((a7b + h.i - eh - gap * a7d) / a7d);
		return (eh = eh < -1 ? -1 : -1 === eh ? 0 : eh > g.length - 1 ? -1 : eh) !== a7h && (a7h = eh, -1 === a7l && 0 === a7h && aS.a7o && (a7l = setInterval(a7z, 100)), 1)
	}

	function a80(aA) {
		var a5j = Math.floor(a7e * Math.pow(g[aA], a7k));
		tf.fillRect(a7b + h.i - (aA + 1) * a7d, h.j - a5j, a5t, a5j)
	}

	function a7z() {
		var g8;
		0 !== (a7h = 8 === aZ.zx() ? -1 : a7h) ? (a7m = (new Date).getTime(), clearInterval(a7l), a7l = -1) : (g8 = g[1] / 864e3, -1 !== a7m && (g8 += ((new Date).getTime() - a7m) * g[1] / 864e5, a7m = -1), 0 < g8 && (g[0] += Math.floor(g8), bd
			.de = !0))
	}
	this.a7o = !1, this.dW = function() {
		a7m = a7l = -1, a7h = -(a7k = 1), this.a7p = !1, gf = 0, a7j = new Date, a7b = 0, gap = .3, (a7n = []).push({
			g3: "Plateau A",
			ea: 0,
			e: 57
		}), a7n.push({
			g3: "Max A",
			ea: 1,
			e: 1
		}), a7n.push({
			g3: "Black Friday",
			ea: 15,
			e: 15
		}), a7n.push({
			g3: "Max B",
			ea: 19,
			e: 19
		}), a7n.push({
			g3: "Max C",
			ea: 44,
			e: 44
		}), a7n.push({
			g3: "First Android Version",
			ea: 58,
			e: 58
		}), a7n.push({
			g3: "Max D",
			ea: 67,
			e: 67
		}), a7n.push({
			g3: "The iFrame Explosion",
			ea: 98,
			e: 99
		}), a7n.push({
			g3: "The 155-Day Uptrend",
			ea: 58,
			e: 213
		}), a7n.push({
			g3: "Max E",
			ea: 213,
			e: 213
		}), a7n.push({
			g3: "Plateau B",
			ea: 214,
			e: 259
		}), a7n.push({
			g3: "Turbulent Times",
			ea: 260,
			e: 344
		}), a7n.push({
			g3: "Max F",
			ea: 262,
			e: 262
		}), a7n.push({
			g3: "Max G",
			ea: 282,
			e: 282
		}), a7n.push({
			g3: "Max H",
			ea: 333,
			e: 333
		}), a7n.push({
			g3: "The 19-Day Downtrend",
			ea: 283,
			e: 301
		}), a7n.push({
			g3: "Plateau C",
			ea: 345,
			e: 385
		}), a7n.push({
			g3: "The Alliance Ascent",
			ea: 386,
			e: 395
		}), a7n.push({
			g3: "Max I",
			ea: 395,
			e: 395
		}), a7n.push({
			g3: "First iOS Version",
			ea: 411,
			e: 411
		}), a7n.push({
			g3: "Plateau D",
			ea: 396,
			e: 453
		}), a7n.push({
			g3: "The TikTok Revolution",
			ea: 454,
			e: 470
		}), a7n.push({
			g3: "Max J",
			ea: 456,
			e: 456
		}), a7n.push({
			g3: "Max K",
			ea: 472,
			e: 472
		}), a7n.push({
			g3: "Max L",
			ea: 478,
			e: 478
		}), a7n.push({
			g3: "YT Drew",
			ea: 471,
			e: 485
		}), a7n.push({
			g3: "Plateau E",
			ea: 485,
			e: 600
		}), a7n.push({
			g3: "Uptrend A",
			ea: 600,
			e: 613
		}), a7n.push({
			g3: "Max M",
			ea: 613,
			e: 613
		}), a7n.push({
			g3: "Downtrend A",
			ea: 614,
			e: 635
		}), a7n.push({
			g3: "Plateau F",
			ea: 636,
			e: 737
		}), a7n.push({
			g3: "End of Record",
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
		a7c = Math.floor(.15 * h.j), a7i = (a7i = Math.floor((z.a0.qx() ? .018 : .0137) * h.pb)) < 2 ? 2 : a7i, a4M = b8.pZ.rN(1, a7i), a7r()
	}, this.a7s = function(a7t) {
		var aA;
		for (this.a7o = !0, aA = 0; aA < a7t.length; aA++) g.unshift(a7t[aA]);
		a7r(), bd.de = !0
	}, this.a7w = function() {
		a7v()
	}, this.a0J = function(eh, ej) {
		ej > h.j - .6 * a7c ? this.a7p ? eh !== gf && (a7b += eh - gf, gf = eh, a7v(), a7y(eh), this.a7p = -1 !== a7h, bd.de = !0) : a7y(eh) && (bd.de = !0) : this.qZ()
	}, this.qZ = function() {
		-1 !== a7h && (this.a7p = !1, a7h = -1, bd.de = !0)
	}, this.a0M = function(eh, deltaY) {
		-1 !== a7h && (a7b += Math.floor(deltaY), a7v(), a7y(eh), bd.de = !0)
	}, this.go = function(eh, ej) {
		this.a0J(eh, ej), -1 !== a7h && (gf = eh, this.a7p = !0)
	}, this.a0i = function() {
		-1 !== a7h && (this.a7p = !1)
	}, this.te = function() {
		tf.fillStyle = b9.mk;
		for (var a82, month, dm, ru, a85, a86, m8, a87, a88, aA = a7g; a7f <= aA; aA--) a80(aA);
		this.a7o && 0 === a7f && (tf.fillStyle = b9.nH, a80(0)), -1 !== a7h && (tf.fillStyle = b9.mj, a80(a7h)), -1 !== a7h && (tf.font = a4M, b8.pZ.textBaseline(tf, 2), (dm = new Date).setTime(a7j.getTime() - 1e3 * a7h * 60 * 60 * 24), month =
			"month", a82 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dm), a82 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dm)), a82 = a82 + ", " + dm.getUTCDate() + " " + month + " " + dm.getFullYear(), month = 1 === g[a7h] ? L(106) : L(107), month = b8.zN.y4(g[a7h]) + " " + month, dm = Math.floor(tf.measureText(a82).width), ru = Math
			.floor(tf.measureText(month).width), a85 = Math.floor(.5 * (dm + a7i)), a86 = (a86 = a7b + h.i - (a7h + 1) * a7d) < a85 ? a85 : a86 > h.i - a85 ? h.i - a85 : a86, m8 = h.j - Math.floor(a7e * Math.pow(g[a7h], a7k)), a87 = Math
			.floor(1.1 * a7i), a88 = m8 > h.j - a87 ? h.j - a87 : m8, tf.fillStyle = b9.me, tf.fillRect(h.i - ru - a7i, a88 - a87, ru + a7i, a87), tf.fillRect(a86 - a85, h.j - a87, dm + a7i, a87), tf.fillStyle = b9.mh, b8.pZ.textAlign(tf, 2),
			tf.fillText(month, Math.floor(h.i - .5 * a7i), a88),
			function(m8, a87) {
				for (var rt, ka = -1, e2 = g.length - a7h - 1, aA = a7n.length - 1; 0 <= aA; aA--) e2 >= a7n[aA].ea && e2 <= a7n[aA].e && (-1 === ka || a7n[aA].e - a7n[aA].ea < a7n[ka].e - a7n[ka].ea) && (ka = aA); - 1 !== ka && (rt = Math
					.floor(tf.measureText(a7n[ka].g3).width), tf.fillStyle = b9.me, tf.fillRect(h.i - rt - a7i, m8, rt + a7i, a87), tf.fillStyle = b9.mh, tf.fillText(a7n[ka].g3, Math.floor(h.i - .5 * a7i), m8 + a87))
			}(a88 - 2 * a87, a87), b8.pZ.textAlign(tf, 1), tf.fillText(a82, a86, h.j), tf.strokeStyle = b9.ml, tf.lineWidth = 1, tf.beginPath(), tf.moveTo(0, m8), tf.lineTo(h.i, m8), tf.closePath(), tf.stroke())
	}
}

function cH() {
	var a4M, i, ej, a8A, a8B, canvas, x3, a5m, a2K, a8C, a8D, a8E, a8F;
	this.eh = 0, this.j = 0, this.dW = function() {
		a8B = aC.a3D, a8D = "rgba(0,100,0,0.8)", a8E = "rgba(150,0,0,0.8)", a5m = a8C = !0, a2K = af.gc[aC.eK], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qx() ? .305 : .24) * h.pb), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4M = b8.pZ.rN(1, Math.floor(.8 * this.j)), a8F = Math.floor(.5 * this.j), bQ.vN.font = a4M, ej = ba.gap, a8A = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x3 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4M, b8.pZ.textBaseline(x3, 1), b8.pZ.textAlign(x3, 1), this.a8G()
	}, this.a69 = function() {
		return z.a0.qx() && h.i < 1.2 * h.j
	}, this.a6m = function() {
		this.a69() ? this.eh = h.i - i - ba.gap : this.eh = Math.floor(aU.a8H() + (h.i - aU.a8H() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lQ = function() {
		a5m && (a5m = !1, this.a8G())
	}, this.a8G = function() {
		x3.clearRect(0, 0, i, this.j), x3.fillStyle = a8C ? a8D : a8E, x3.fillRect(0, 0, i, this.j), x3.fillStyle = b9.mj, this.a8I(), this.a8J(), x3.fillStyle = af.gc[aC.eK] >= ad.jW(aC.eK) ? b9.nE : b9.mh, x3.fillText(b8.zN.y4(a2K), Math.floor(
			i / 2), a8F), x3.fillStyle = b9.mh, x3.fillRect(0, 0, i, 1), x3.fillRect(0, 0, 1, this.j), x3.fillRect(0, this.j - 1, i, 1), x3.fillRect(i - 1, 0, 1, this.j)
	}, this.a8I = function() {
		var ev = bd.jn() % 100,
			ev = (ev = 9 - bJ.dn(ev -= ev % 10, 10), Math.floor(ev * (this.j - a8A) / 9));
		x3.fillRect(0, ev, a8A, this.j - ev), x3.fillRect(i - a8A, ev, a8A, this.j - ev)
	}, this.a8J = function() {
		x3.fillRect(a8A, this.j - a8A, Math.floor((i - 2 * a8A) * af.gc[aC.eK] / a8B), a8A)
	}, this.ik = function() {
		var g8 = aC.eK;
		b8.fw.gn(g8) && (g8 = af.gc[g8] - af.a2J[g8], a2K !== g8 ? (a8B = a4w(g8, a8B), a8C = a2K < g8 && 10 <= g8, a2K = g8, a5m = !0) : bd.jn() % 10 == 9 && (a5m = !0))
	}, this.te = function() {
		0 === af.le[aC.eK] || aC.gw || 2 === af.a2B[aC.eK] || tf.drawImage(canvas, this.eh, ej)
	}
}

function cI() {
	var a8K, a8L, a8M, a8N, a8O, a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, position, a8g, a8h, a8i, a8j, a8k = 1,
		a8l = 1,
		a8m = "";
	var leaderboardHasChanged = true;
	this.playerPos = aC.eK;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jb[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jb[aC.eK]);
	}

	function a8o() {
		a8Q.clearRect(0, 0, a8K, a6P),
			a8Q.fillStyle = b9.nX,
			a8Q.fillRect(0, 0, a8K, a8V),
			a8Q.fillStyle = b9.md,
			a8Q.fillRect(0, a8V, a8K, a6P - a8V);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jb[aC.eK]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8f = -1;
		if (__fx.leaderboardFilter.enabled && a8f >= __fx.leaderboardFilter.filteredLeaderboard.length) a8f = -1;
		playerPos >= position && a8q(playerPos - position, b9.n6),
			0 !== jb[aC.eK] && 0 === position && a8q(0, b9.nc),
			-1 !== a8f && a8q(a8f, b9.mi),
			a8Q.fillStyle = b9.md,
			//console.log("drawing", a8f),
			a8Q.clearRect(0, a6P - __fx.leaderboardFilter.tabBarOffset, a8K, __fx.leaderboardFilter.tabBarOffset);
		a8Q.fillRect(0, a6P - __fx.leaderboardFilter.tabBarOffset, a8K, __fx.leaderboardFilter.tabBarOffset);
		a8Q.fillStyle = b9.mh,
			a8Q.fillRect(0, a8V, a8K, 1),
			a8Q.fillRect(0, a6P - __fx.leaderboardFilter.tabBarOffset, a8K, 1),
			__fx.leaderboardFilter.drawTabs(a8Q, a8K, a6P - __fx.leaderboardFilter.tabBarOffset, b9.n6),
			a8Q.fillRect(0, 0, a8K, ba.xn),
			a8Q.fillRect(0, 0, ba.xn, a6P),
			a8Q.fillRect(a8K - ba.xn, 0, ba.xn, a6P),
			a8Q.fillRect(0, a6P - ba.xn, a8K, ba.xn), a8Q.font = a8L, b8.pZ.textBaseline(a8Q, 1), b8.pZ.textAlign(a8Q, 1), a8Q.fillText(a8m, Math.floor((a8K + a8V - 22) / 2), Math.floor(a8T + a8M / 2));
		__fx.playerList.drawButton(a8Q, 12, 12, a8V - 22);
		var et, g9 = playerPos < position + a8O - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8O)
				position = (result.length > a8O ? result.length : a8O) - a8O;
			//if (position >= result.length) position = result.length - 1;
			for (a8Q.font = a8N, b8.pZ.textAlign(a8Q, 0), et = a8O - g9; 0 <= et; et--) {
				const pos = result[et + position];
				if (pos !== undefined)
					a8r(l5[pos]), a8s(et, pos, l5[pos]);
			}
			for (b8.pZ.textAlign(a8Q, 2), et = a8O - g9; 0 <= et; et--) {
				const pos = result[et + position];
				if (pos !== undefined)
					a8r(l5[pos]), a8t(et, l5[pos]);
			}
		} else {
			for (a8Q.font = a8N, b8.pZ.textAlign(a8Q, 0), et = a8O - g9; 0 <= et; et--)
				a8r(l5[et + position]), a8s(et, et + position, l5[et + position]);
			for (b8.pZ.textAlign(a8Q, 2), et = a8O - g9; 0 <= et; et--)
				a8r(l5[et + position]), a8t(et, l5[et + position]);
		}
		2 == g9 && (a8r(aC.eK), b8.pZ.textAlign(a8Q, 0), a8s(a8O - 1, jb[aC.eK], aC.eK), b8.pZ.textAlign(a8Q, 2), a8t(a8O - 1, aC.eK)), 0 === position && (g9 = .7 * a8W / aa.get(4).height, a8Q.setTransform(g9, 0, 0, g9, Math.floor(a8X + .58 * a8W +
			.5 * g9 * aa.get(4).width), Math.floor(a8T + a8M + .4 * a8W)), a8Q.imageSmoothingEnabled = !0, a8Q.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8Q.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8r(player) {
		aC.hQ && (a8Q.fillStyle = be.a8v[be.kC[be.eY[player]]])
	}

	function a8q(aA, a8w) {
		a8Q.fillStyle = a8w, aA = a8O - 1 < aA ? a8O - 1 : aA;
		a8w = Math.floor((aA === a8O - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8W), a8w = aA === a8O - 2 ? Math.floor(a8V + 9.15 * a8W) - Math.floor(a8V + 8.15 * a8W) : a8w;
		a8Q.fillRect(0, Math.floor(a8V + (aA + (0 === aA ? 0 : .15)) * a8W), a8K, a8w)
	}

	function a8s(a8y, ze, aA) {
		a8Q.fillText(a8b[ze], a8X, Math.floor(a8T + a8M + (a8y + .5) * a8W)), 1 === af.a2B[aA] && (a8Q.font = "italic " + a8N);
		ze = Math.floor(a8T + a8M + (a8y + .5) * a8W);
		a8Q.fillText(af.zL[aA], a8Y, ze), 0 !== af.a2B[aA] && (a8Q.font = a8N), aA < aC.jq && 2 !== af.a2B[aA] || a8Q.fillRect(a8Y, ze + .35 * a8k, a8a[aA], Math.max(1, .1 * a8k))
	}

	function a8t(a8y, aA) {
		a8Q.fillText(af.gO[aA], a8Z, Math.floor(a8T + a8M + (a8y + .5) * a8W))
	}

	function a97(ej) {
		return (ej -= ba.gap + a8V) < 0 ? Math.floor(ej / a8W) - 1 : ej < (a8O - 1) * a8W ? Math.floor(ej / a8W) : ej < a6P - a8V ? a8O - 1 : (ej -= a6P - a8V, a8O + Math.floor(ej / a8W))
	}

	function xm(eh, ej) {
		return eh >= ba.gap && eh < ba.gap + a8K && ej >= ba.gap && ej < ba.gap + a6P
	}
	this.dW = function() {
			var aA;
			for (a8h = !1, a8j = a8i = a8g = 0, a8f = -1, a8O = z.a0.qx() ? 6 : 10, a8l = (position = 0) === (a8l = bh.dr.data[11].value) ? 10 : 1 === a8l ? 5 : 1, a8e = !1, a8c = new Uint16Array(a8O + 1), a8d = new Uint32Array(a8O + 1), a8S = aC.eX,
				l5 = new Uint16Array(a8S), jb = new Uint16Array(a8S), aA = a8S - 1; 0 <= aA; aA--) l5[aA] = aA, jb[aA] = aA;
			this.resize(!0), a8a = new Uint16Array(aC.eX);
			var a8n = Math.floor(a8K - a8Y - a8X - a8R);
			for (a8b = new Array(aC.eX), a8Q.font = a8N, aA = aC.eX - 1; 0 <= aA; aA--) a8b[aA] = aA + 1 + ".", af.zL[aA] = b8.x3.a1q(af.zP[aA], a8N, a8n), a8a[aA] = Math.floor(a8Q.measureText(af.zL[aA]).width);
			a8o()
		}, this.resize = function(dW) {
			if (a6P = z.a0.qx() ? (a8K = Math.floor(.335 * h.pb), Math.floor(a8O * a8K / 8)) : (a8K = Math.floor(.27 * h.pb), Math.floor(a8O * a8K / 10)), a8K = Math.floor(.97 * a8K), (a8P = document.createElement("canvas")).width = a8K, a8P.height =
				a6P, a8Q = a8P.getContext("2d", {
					alpha: !0
				}), a8T = .025 * a8K, a8M = .16 * a8K, a8U = 0 * a8K, a8V = Math.floor(.45 * a8T + a8M), a8W = (a6P - a8M - 2 * a8T - a8U) / a8O,
				a8P.height = a6P += a8W, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8W * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6P - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8K,
				a8L = b8.pZ.rN(1, Math.floor(.55 * a8M)), a8k = Math.floor((z.a0.qx() ? .67 : .72) * a8W), a8N = b8.pZ.rN(0, a8k), a8Q.font = a8N, a8X = Math.floor(.04 * a8K), a8Y = Math.floor((z.a0.qx() ? .195 : .18) * a8K), a8R = Math.floor(a8Q
					.measureText("00920600").width), a8Q.font = a8L, a8Z = a8K - a8X, !dW) {
				a8Q.font = a8N;
				for (var aA = aC.eX - 1; 0 <= aA; aA--) a8a[aA] = Math.floor(a8Q.measureText(af.zL[aA]).width);
				a8o()
			}
			a8m = b8.x3.a1q(L(108), a8L, .96 * a8K)
		}, this.a8H = function() {
			return a8K
		}, this.lQ = function(bq, a8p) {
			(a8p || a8e && (bq || bd.jn() % a8l == 0)) && (a8e = !1, a8o())
		}, this.ik = function() {
			! function() {
				for (var et = a8S - 1; 0 <= et; et--) 0 === af.le[l5[et]] && ! function(et) {
					var a95 = l5[et];
					a8S--;
					for (var aA = et; aA < a8S; aA++) l5[aA] = l5[aA + 1], jb[l5[aA]] = aA;
					l5[a8S] = a95, jb[l5[a8S]] = a8S
				}(et)
			}();
			for (var a93, mP = a8S - 1, et = 0; et < mP; et++) af.gO[l5[et]] < af.gO[l5[et + 1]] && (a93 = l5[et], l5[et] = l5[et + 1], l5[et + 1] = a93, jb[l5[et]] = et, jb[l5[et + 1]] = et + 1);
			! function() {
				for (var dm = a8e, g9 = (a8e = !0, jb[aC.eK] >= a8O - 1 ? a8O - 2 : a8O - 1), aA = g9; 0 <= aA; aA--)
					if (a8c[aA] !== l5[aA] || a8d[aA] !== af.gO[l5[aA]]) return;
				(g9 != a8O - 2 || a8c[a8O] === jb[aC.eK] && a8d[a8O] === af.gO[aC.eK]) && (a8e = dm)
			}();
			for (var aA = a8O - 1; 0 <= aA; aA--) a8c[aA] = l5[aA], a8d[aA] = af.gO[l5[aA]];
			a8c[a8O] = jb[aC.eK], a8d[a8O] = af.gO[aC.eK];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.go = function(eh, ej) {
			return !!xm(eh, ej) && ((__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8V - 22, a8V - 22) && __fx.playerList.display(af.zP), true) &&
				!(ej - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eh - ba.gap)) && (a8g = bd.lx, a8h = !0, a8i = a8j = a97(ej), bH.a0x() && (eh = a78(-1, a8j, a8O), a8f !== (eh = eh === a8O ?
					-1 : eh)) && (a8f = eh, a8o(), bd.de = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8o(), bd.de = !0;
		},
		this.a0J = function(eh, ej) {
			if (__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8V - 22, a8V - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8o(), bd.de = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8o(), bd.de = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eh, ej, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eh - ba.gap
				)) return;
			var dm, a96 = a97(ej);
			return a8h ? (dm = position, (position = a78(0, position += a8i - a96, aC.eX - a8O)) !== dm && (a96 = (a96 = a78(-1, a8i = a96, a8O)) !== a8O && xm(eh, ej) ? a96 : -1, a8f = a96, a8o(), bd.de = !0), !0) : (a96 = (a96 = a78(-1, a96,
				a8O)) === a8O || !xm(eh, ej) || bH.a0x() ? -1 : a96, a8f !== a96 && (a8f = a96, a8o(), bd.de = !0))
		}, this.a0i = function(eh, ej) {
			if (!a8h) return !1;
			a8h = !1;
			var a96 = a97(ej);
			var isEmptySpace = false;
			return bH.a0x() && -1 !== a8f && (a8f = -1, a8o(), bd.de = !0), bd.lx - a8g < 350 && a8j === a96 && -1 !== (a96 = (a96 = a78(-1, a96, a8O)) !== a8O && xm(eh, ej) ? a96 : -1) && (eh = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l5[__fx.leaderboardFilter.filteredLeaderboard[a96 + position] ?? (isEmptySpace = true, jb[aC.eK])]) : l5[a96 + position]), a96 === a8O - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jb[aC.eK]) >=
				position + a8O - 1 && (eh = aC.eK), !isEmptySpace && aC.hQ && __fx.donationsTracker.displayHistory(eh, af.zP, aC.k9), 0 !== af.le[eh] && !isEmptySpace) && aG.m1(eh, 800, !1, 0), !0
		}, this.a0M = function(eh, ej, deltaY) {
			var a98;
			return !(a8h || aC.mA || (a98 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xm(eh, ej)) || (eh = (eh = a78(-1, a97(ej), a8O)) === a8O || bH.a0x() ? -1 : eh, 0 < deltaY ? position < aC.eX - a8O && (position += Math.min(aC.eX - a8O -
				position, a98), a8f = eh, a8o(), bd.de = !0) : 0 < position && (position -= Math.min(position, a98), a8f = eh, a8o(), bd.de = !0), 0))
		}, this.te = function() {
			tf.drawImage(a8P, ba.gap, ba.gap)
		}
}

function cJ() {
	var canvas, x3, eh, ej, a5j, a99, gap, a9A, fontSize, a9B, a9C, a9D, a9E, a9F, a9G, a9H, a9I, a9J;

	function a9N() {
		x3.clearRect(0, 0, aV.i, aV.j), x3.fillStyle = b9.me, x3.fillRect(0, 0, aV.i, aV.j), x3.fillStyle = b9.n1, eE = 0 < a9H ? a9H : Math.sqrt(a9E[4] / 1e4), x3.fillRect(0, aV.j - a5j - 1, Math.floor(eE * aV.i), a5j), x3.fillStyle = b9.mh, x3
			.fillRect(0, 0, aV.i, 1), x3.fillRect(0, 0, 1, aV.j), x3.fillRect(aV.i - 1, 0, 1, aV.j), x3.fillRect(0, aV.j - 1, aV.i, 1), x3.fillRect(0, aV.j - a5j - 1, aV.i, 1);
		for (var eE, a9P, dm = 0, aA = 0; aA < a9D.length; aA++) a9F[aA] ? (b8.pZ.textAlign(x3, 0), a9P = Math.floor((a99 - a5j + 2 * a9A) * (aA - dm + 1) / (a9D.length + 1) - .7 * a9A), x3.fillText(a9D[aA], gap, a9P), b8.pZ.textAlign(x3, 2), 5 ===
			aA && 0 !== af.le[aC.eK] && af.gc[aC.eK] >= ad.jW(aC.eK) ? (x3.fillStyle = b9.na, x3.fillText(a9L(aA), aV.i - gap, a9P), x3.fillStyle = b9.mh) : x3.fillText(a9L(aA), aV.i - gap, a9P)) : dm++
	}

	function a9L(aA) {
		return aA < 3 ? a9E[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zN.a2r(a9E[aA] / 100, 2) : aA < 7 ? b8.zN.y4(a9E[aA]) : aA === 7 ? aV.a9Q(a9E[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gO, aC.eK) : __fx.utils.getDensity(aC.eK)
	}

	function a9K() {
		af.gO[aC.eK] !== a9E[6] && (a9E[6] = af.gO[aC.eK], a9B++)
	}
	this.dW = function() {
		a9H = a9I = 0, (a9C = new Array(8))[0] = L(109), a9C[1] = aC.k9 ? L(110) : L(111), a9C[2] = L(112), a9C[3] = L(113), a9C[4] = L(114), a9C[5] = L(115, 0, "Interest"), a9C[6] = L(116), a9C[7] = L(117),
			a9C.push("Max Troops", "Density"), // add a9C
			(a9D = new Array(a9C.length)).fill(""), (a9E = new Array(a9C.length))[0] = aC.k9 ? 0 : aC.jq, a9E[1] = aC.k9 ? ak.jr : aC.kB, a9E[2] = aC.yo, a9E[3] = 0, a9E[4] = bJ.dn(1e4 * af.gO[0], Math.max(aC.ja, 1)), a9E[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dn(700 * aC.data.iIncomeValue, 64) : bJ.dn(700 * aC.data.iIncomeData[aC.eK], 64), a9E[6] = 0, a9K(), a9E[7] = 0, a9G = a9L(6), a9F = new Array(a9C.length);
		for (var aA = a9C.length - 1; 0 <= aA; aA--) a9F[aA] = !0;
		a9J = 0, a9J = aC.k9 ? (a9F[0] = !1, a9F[2] = !1, a9F[3] = !1, 3) : (a9F[3] = !1, 1), a9B = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qx() ? .1646 : .126) * 1.25 * h.pb), this.j = Math.floor(1.18 * this.i), a5j = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9A = .04 * this.i, a99 = this.j, this.j -= Math.floor(a9J * (this.j - 2 *
			a5j) / a9C.length), fontSize = Math.floor(.7 * (a99 - a5j) / a9C.length);
		var a4M = b8.pZ.rN(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4M, i) {
				for (var aA = 0; aA < a9D.length; aA++) a9D[aA] = b8.x3.a1q(a9C[aA], a4M, i)
			}((x3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4M, .575 * this.i), b8.pZ.textBaseline(x3, 1), x3.lineWidth = 1, this.a36(), this.a6m(), aT.a6m(), a9N()
	}, this.a6m = function() {
		eh = h.i - this.i - ba.gap
	}, this.a9O = function() {
		ej = ba.gap
	}, this.a36 = function() {
		ej = ba.gap + (aT.a69() && 0 !== af.le[aC.eK] && !aC.gw ? aT.j + ba.gap : 0)
	}, this.lQ = function(bq) {
		(bq || 100 <= a9B) && (a9B = 0, a9N())
	}, this.a41 = function() {
		return a9E[7]
	}, this.a9Q = function(value) {
		var kY = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kY) / 1e3);
		return value < 10 ? kY + ":0" + value : kY + ":" + value
	}, this.ik = function() {
		var a9Z, per;
		a9F[0] && aC.yp - aC.yo !== a9E[0] && (a9E[0] = aC.yp - aC.yo, a9B++), ak.jr - a9E[0] !== a9E[1] && (a9E[1] = ak.jr - a9E[0], a9B++), this.lI(), (a9Z = ad.a9a(aC.eK)) !== a9E[5] && (a9E[5] = a9Z, a9B++), a9K(), a9E[7] += bd.a9b, a9Z =
			a9L(7), a9G !== a9Z && (a9G = a9Z, a9B += 100), a9Z = aC.hQ ? bf.a2b() : af.gO[l5[0]], per = bJ.dn(1e4 * a9Z, Math.max(aC.ja, 1)), a9E[3] = a9Z, a9E[4] !== per && (a9B++, a9E[4] = per), 8 === aC.k7 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.fw.gn(aA)) return bP.yP.yl(), 1;
				return
			}() || a9E[3] < aC.ja || ! function() {
				for (var aA = ak.jr - 1; 0 <= aA; aA--)
					if (0 < af.g2[ak.js[aA]].length) return;
				return 1
			}() || bP.yP.yl()
	}, this.lI = function() {
		a9F[2] && aC.yo !== a9E[2] && (a9E[2] = aC.yo, a9B++)
	}, this.a9c = function(aA) {
		var sB, a9d, dm;
		return 2 !== aC.ym && (aA % 2 == 1 && (aU.lQ(1, 1), bd.de = !0), aA === aC.a3F ? (a9H = 0, a9N(), !1) : (-1 !== aA || 0 !== a9I) && (a9d = a9H, a9H = aC.gk ? aA / aC.a3F : (dm = performance.now(), 0 <= aA && (sB = dm - 392 * aA, a9I =
			0 === aA || sB < a9I ? sB : a9I), 1 < (a9H = (dm - a9I) / (392 * aC.a3F)) ? 1 : a9H), a9N(), a9H !== a9d))
	}, this.te = function() {
		tf.drawImage(canvas, eh, ej)
	}
}

function cK() {
	var hI, a9e, i, j, a6s, a9f, a9g, a6A, canvas, lr, a9h;

	function wz() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dW = function() {
		a9h = hI = !1, a6s = .61, a9f = .07, a9g = .09, lr = a6A = j = 0
	}, this.resize = function() {
		var x3, m7, ev, a9m, a9n, a4R;
		hI && (i = a9i(i = z.a0.qx() ? Math.floor(.69 * h.pb) : Math.floor(.5 * h.pb), a4w(h.i - 2 * ba.gap, 10)), i = a9i(i, Math.floor(3.57 * a4w(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x3 = canvas.getContext("2d", {
				alpha: !0
			}), m7 = Math.floor(1 + j / 40), x3.clearRect(0, 0, i, j), x3.fillStyle = b9.me, x3.fillRect(m7, m7, i - 2 * m7, j - 2 * m7), x3.lineJoin = "bevel", x3.lineWidth = 2 * m7, x3.strokeStyle = b9.mh, x3.strokeRect(m7, m7, i - 2 * m7,
				j - 2 * m7), x3.imageSmoothingEnabled = !1, ev = aa.get(a9e), a9m = ev.width, a4R = (1 === a9e ? .85 : 21 === a9e ? .666 : .9) * a6s * j / (a9n = ev.height), x3.setTransform(a4R, 0, 0, a4R, Math.floor((i - a4R * a9m) / 2),
				Math.floor((j - a4R * a9n) / 2)), x3.drawImage(ev, 0, 0), x3.setTransform(1, 0, 0, 1, Math.floor(i - a9g * j - a9f * j - m7), Math.floor(m7 + a9f * j)),
			function(x3, ea) {
				x3.lineWidth = Math.floor(1 + j / 80), x3.strokeStyle = b9.mh, x3.beginPath(), x3.moveTo(0, 0), x3.lineTo(ea, ea), x3.moveTo(0, ea), x3.lineTo(ea, 0), x3.stroke()
			}(x3, Math.floor(a9g * j)), x3.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f2, a9k, a6f, a9l) {
		hI || a9l && a9h || (a9e = a6f ? 21 : f2 ? 1 : 2, hI = a9h = !0, this.resize(), aK.qq(), aQ.a6a(), lr = bd.lx, a6A = a9k ? 1 : 0)
	}, this.ik = function() {
		!hI || 1 <= a6A || (a6A = 1 < (a6A += 5e-4 * (bd.lx - lr)) ? 1 : a6A, lr = bd.lx, bd.de = !0)
	}, this.go = function(eh, ej) {
		return !(!hI || a6A <= 0 || (eh -= Math.floor((h.i - i) / 2), ej -= wz(), eh < 0) || ej < 0 || i < eh || j < ej || (i - j / 3 < eh && ej < j / 3 && (hI = !1, bd.de = !0), 0))
	}, this.te = function() {
		!hI || a6A <= 0 || (tf.globalAlpha = a6A, tf.drawImage(canvas, Math.floor((h.i - i) / 2), wz()), tf.globalAlpha = 1)
	}
}

function dI() {
	var a9p, a9q = new Uint8Array(5),
		a9r = new Uint8Array(5);
	this.a9s = new a9t, this.dW = function() {
		for (var f2 = bh.dr.data[119].value, aA = 0; aA < a9q.length; aA++) a9q[aA] = (f2 >> 2 * aA) % 4
	}, this.a3Q = function() {
		a9p = [L(118), L(119), L(120, [bV.a9u[28]]), L(121, [bV.a9u[26]]), L(122, [bV.a9u[0]])], this.a9s.dW()
	}, this.ik = function() {
		this.a9s.ik()
	}, this.a42 = function(id) {
		1 < id && bH.q2() || ! function(e2) {
			if (3 === a9q[e2] || 1 === a9r[e2]) return;
			if (a9r[e2] = 1, !(Math.random() < .6)) {
				a9q[e2]++;
				for (var f2 = 0, aA = 0; aA < a9q.length; aA++) f2 += a9q[aA] << 2 * aA;
				bh.r1.r2(119, f2)
			}
			return 1
		}(id) || aM.a52(a9p[id])
	}
}

function a9t() {
	var a9w;
	this.dW = function() {
		a9w = !1
	}, this.ik = function() {
		var g8;
		if (function() {
				if (!a9w) {
					if (bd.jn() % 30 != 9) return;
					if (!b8.fw.ky(90)) return;
					a9w = !0
				}
				return 1
			}() && (! function() {
				var pR = aM.a5N(956);
				if (pR) {
					if (b8.fw.kc(pR.player)) return 1;
					aM.a48(956, 0)
				}
				return
			}() && (-1 === (g8 = (aC.hQ ? function() {
				var id = bf.l2(),
					ea = ak.jr;
				if (be.kC[id])
					for (var ya = ak.js, eY = be.eY, aA = 0; aA < ea; aA++) {
						var g8 = ya[aA];
						if (eY[g8] !== id) return g8
					} else if (1 < ea) return l5[ea - 1];
				return -1
			} : function() {
				for (var aA4 = ak.jr, kX = ak.js, aA5 = jb, aA = 0; aA < aA4; aA++) {
					var g8 = kX[aA];
					if (0 !== aA5[g8]) return g8
				}
				return -1
			})()) ? ! function() {
				var pR = aM.a5N(957);
				if (pR && pR.a4s) {
					if (ab.eR(pR.a4s.eM << 2)) return 1;
					aM.a48(957, 0)
				}
				return
			}() : (aM.zA(0, L(123, [af.zL[g8]]), 956, g8, b9.mh, b9.me, -1, !0), 0)))) {
			var ea = am.iV.ko;
			if (0 !== ea)
				for (var dr = am.iV.dr, aA = 0; aA < ea; aA++) {
					var eM = dr[aA];
					if (ab.eR(eM << 2)) return void aM.zA(0, L(124, [bK.ei(eM), bK.ek(eM)]), 957, 0, b9.mh, b9.me, -1, !0, void 0, {
						et: 1,
						eM: eM
					})
				}
		}
	}
}

function dJ() {
	this.aA6 = new aA7, this.dW = function() {
		this.aA6.resize()
	}
}

function aA7() {
	this.resize = function() {
		var aA, aA8 = document.head.querySelector("style#ss");
		if (aA8)
			for (aA = aA8.sheet.cssRules.length - 1; 0 <= aA; aA--) aA8.sheet.deleteRule(0);
		else(aA8 = document.createElement("style")).id = "ss", document.head.appendChild(aA8);
		var a70 = "::-webkit-scrollbar",
			aA9 = b8.pZ.pj(ba.rO),
			hS = b8.pZ.pj(Math.max(b8.pZ.qs(.012), 8));
		try {
			aA8.sheet.insertRule(a70 + "{width:" + hS + ";height:" + hS + ";}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 + "-thumb{background-color:white;}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 +
				"-track{background:" + b9.md + ";}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 + "-track:horizontal{border-top:" + aA9 + " solid white;}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 +
				"-track:vertical{border-left:" + aA9 + " solid white;}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 + "-button{display:none;}", aA8.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aA8.sheet.cssRules.length - 1; 0 <= aA; aA--) aA8.sheet.deleteRule(0)
		}
	}
}

function dH() {
	this.aAA = !1, this.mX = !1, this.a3A = !1, this.aAB = [0, 0, 0, 0], this.aAC = function() {
		var m7, m8, mK, mL;
		this.a3A = this.a3A || this.mX, (this.mX || this.aAA && this.a3A) && (m7 = bY.aAD[0], m8 = bY.aAD[1], mK = bY.aAD[2], mL = bY.aAD[3], m7 = m7 < this.aAB[0] ? this.aAB[0] : m7, m8 = m8 < this.aAB[1] ? this.aAB[1] : m8, mK = mK > this.aAB[
				2] ? this.aAB[2] : mK, mL = mL > this.aAB[3] ? this.aAB[3] : mL, this.mX = !1, this.aAA = !1, m7 === this.aAB[0] && m8 === this.aAB[1] && mK === this.aAB[2] && mL === this.aAB[3] ? this.a3B() : m7 <= mK && m8 <= mL && a3S
			.putImageData(a3T, 0, 0, m7, m8, mK - m7 + 1, mL - m8 + 1))
	}, this.a3B = function() {
		this.a3A && this.aAB[2] >= this.aAB[0] && this.aAB[3] >= this.aAB[1] && a3S.putImageData(a3T, 0, 0, this.aAB[0], this.aAB[1], this.aAB[2] - this.aAB[0] + 1, this.aAB[3] - this.aAB[1] + 1), this.a3A = !1
	}, this.yx = function() {
		this.aAB[2] >= this.aAB[0] && this.aAB[3] >= this.aAB[1] && a3S.putImageData(a3T, 0, 0, this.aAB[0], this.aAB[1], this.aAB[2] - this.aAB[0] + 1, this.aAB[3] - this.aAB[1] + 1), this.a3A = !1
	}, this.dW = function() {
		var eh, ej;
		this.aAA = !1, this.mX = !1, this.a3A = !1, this.aAB[0] = bQ.el, this.aAB[1] = bQ.em, this.aAB[2] = this.aAB[3] = 0;
		loop: for (eh = 1; eh < bQ.el - 1; eh++)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAE[ab.wY(eh, ej) + 2]) {
					this.aAB[0] = eh;
					break loop
				} loop: for (ej = 1; ej < bQ.em - 1; ej++)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAE[ab.wY(eh, ej) + 2]) {
					this.aAB[1] = ej;
					break loop
				} loop: for (eh = bQ.el - 2; 0 < eh; eh--)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAE[ab.wY(eh, ej) + 2]) {
					this.aAB[2] = eh;
					break loop
				} loop: for (ej = bQ.em - 2; 0 < ej; ej--)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAE[ab.wY(eh, ej) + 2]) {
					this.aAB[3] = ej;
					break loop
				}
	}
}

function L(value, aAF, uB) {
	var pG = "number" == typeof value ? b5.aAG[value] : value;
	if (uB && b5.aAH() && (pG = uB), aAF)
		for (var ea = aAF.length, aA = 0; aA < ea; aA++)
			for (var et = 0; et < 3; et++) pG = pG.replace("{" + (10 * et + aA) + "}", aAF[aA]);
	return pG
}

function by() {
	this.data = new aAI;
	var aAJ = (new aAK).L84,
		aAL = (this.aAG = aAJ, !1);
	this.dW = function() {
		var ea, g;
		aAL = !1, "en" !== bh.dr.data[12].value.split("-")[0].toLowerCase() ? bh.dr.data[12].value === bh.dr.data[145].value && 0 < bh.dr.data[146].value && (ea = bh.dr.data[146].value, (g = bh.pr.uH(ea, !1)).length === ea) && !!b8.pi.a1T(g) &&
			function(g) {
				for (var ea = g.length, j = 0; j < ea; j++) g[j] = g[j].replace("&#39;", "'");
				var aAR = bh.pr.uH(ea, !0);
				if (ea !== aAR.length) return !1;
				if (!b8.pi.a1T(aAR)) return !1;
				for (var kY = aAJ.length, a7t = new Array(kY), aAS = kY === ea, g3 = Math.min(ea, kY), aA = 0; aA < kY; aA++)
					if (a7t[aA] = aAJ[aA], aA < ea && aAR[aA] === a7t[aA]) a7t[aA] = g[aA];
					else {
						aAS = !1;
						for (var eu = 0; eu < g3; eu++)
							if (aAR[eu] === a7t[aA]) {
								a7t[aA] = g[eu];
								break
							}
					} return b5.aAG = a7t, aAS
			}(g) || (aAL = !0) : b5.aAG = aAJ
	}, this.dY = function() {
		be.dX(), aD.dX(), bc.dX(), bb.dX(), aN.dW(), bn = new dt
	}, this.aAH = function() {
		return this.aAG === aAJ || !aAJ.length
	}, this.aAT = function() {
		var aAU;
		aAL && (aAL = !1, 0 !== aAJ.length) && (aAU = bh.dr.data[12].value, ay.aAV.aAW(0, aAU.slice(0, 20)))
	}, this.aAX = function(g) {
		g.length === aAJ.length && (this.aAG = g, bh.r1.r2(145, bh.dr.data[12].value), bh.r1.r2(146, g.length), bh.pr.uN(g, !1), bh.pr.uN(aAJ, !0), 0 === aZ.zx()) && 5 === s.rm && s.x.aAY()
	}, this.aAZ = function() {
		var aAa, g = navigator.languages;
		return g && g.length ? (aAa = Math.max(b5.data.aAb(g[0]), 0), 1 === g.length ? [aAa, aAa] : [aAa, Math.max(b5.data.aAb(g[1]), 0)]) : [0, 0]
	}
}

function aAI() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAc = function() {
		for (var aAd = [], g = this.g, ea = g.length, aA = 0; aA < ea; aA++) aAd.push(g[aA]);
		var aAe = bh.dr.data[12].uB;
		for (aA = 0; aA < ea; aA++)
			if (aAd[aA] === aAe) {
				aAd.splice(aA, 1), ea--;
				break
			} aAd.sort(), ea++, aAd.unshift(aAe);
		try {
			if ("undefined" == typeof Intl) return aAd;
			for (aA = 0; aA < ea; aA++) {
				var pG = new Intl.DisplayNames([aAd[aA]], {
					type: "language"
				}).of(aAd[aA]);
				pG !== aAd[aA] && (aAd[aA] = aAd[aA] + ": " + pG)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAd
	}, this.aAg = function(aAh) {
		for (var pG = bh.dr.data[12].value, ea = aAh.length, aA = 0; aA < ea; aA++)
			if (pG === aAh[aA].split(":")[0]) return aA;
		return 0
	}, this.aAb = function(aAi) {
		if (!aAi || aAi.length < 2) return 0;
		aAi = aAi.split("-")[0].toLowerCase();
		for (var g = this.g, ea = g.length, aA = 0; aA < ea; aA++)
			if (aAi === g[aA]) return aA;
		return -1
	}
}

function aAK() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Lobby", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
		"The prize money has been distributed as follows:", "You have earned points based on the amount of prize money.", "Clan {0} has won {11} points.", "The following clan members have earned these additional amounts of gold and points:",
		"These clan members have collectively paid a tribute of {10} gold to the clan leader of {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.",
		"{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}",
		"Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.",
		"You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.",
		"{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Select a boat to send it to a new location.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Show Account", "Moderation Actions", "Report User", "Mention", "Loading", "White Arena", "Black Arena", "Island", "Mountains",
		"Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile",
		"🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is 1 gold. The Target Account ({2}) will receive {13} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit",
		"Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Additional Income", "Options", "Default",
		"Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index",
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water",
		"Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Reset", "Language", "Spawning",
		"Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?",
		"Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Replay Error", "Warning", "Loading...",
		"An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Avg. Attack Strength", "Land Attacks",
		"Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support",
		"Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!",
		"Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dc() {
	var eh, ej, j, sj, aAj, aAk, aAl, aAm, aAn, i, a26, aAo;
	this.hI = !1, this.dW = function(pG, aAp) {
		if (1 === z.id && 13 <= z.f3 && z.f3 < 18) return aAp ? void(a26 = pG) : a26 !== pG ? void 0 : void z.uF.saveString(200, pG);
		aAp && (a26 = pG, (aAo = document.createElement("a")).appendChild(document.createTextNode(a26)), this.hI = !0, aAo.title = a26, aAo.target = "_blank", aAo.href = a26, aAo.style.textAlign = "center", aAo.style.color = b9.mh, aAo.style
			.position = "absolute", aAo.style.padding = "0px", aAo.style.margin = "0px", this.resize(), document.body.appendChild(aAo), bd.de = !0)
	}, this.qq = function() {
		return !(!this.hI || (document.body.removeChild(aAo), this.hI = !1))
	}, this.go = function(ht, hu) {
		return !!this.hI && ((ht < eh || hu < ej || eh + i < ht || ej + j < hu || eh + i - sj < ht && hu < ej + sj) && (bd.de = !0, this.hI = !1, document.body.removeChild(aAo)), !0)
	}, this.resize = function() {
		var a4M, aAq;
		this.hI && (aAm = Math.floor(.8 * (z.a0.qx() ? h.i > h.j ? .6 : .55 : .4) * h.pb), sj = Math.floor(.15 * aAm), aAj = Math.floor(.35 * sj), aAk = Math.floor(.5 * sj), aAl = Math.floor(2.5 * aAk), j = sj + aAj + 3 * aAk, a4M = b8.pZ.rN(1,
			aAj / h.k), aAn = Math.floor(h.k * aP.measureText(a26, a4M)), aAq = i = (aAm < aAn ? aAn : aAm) + 2 * aAl, i = Math.min(i, h.i - 2 * (z.a0.qx() ? 2 : 1) * ba.gap), a4M = b8.pZ.rN(1, i / aAq * aAj / h.k), aAn = Math.floor(h.k *
			aP.measureText(a26, a4M)), eh = Math.floor((h.i - i) / 2), ej = Math.floor((h.j - j) / 2), aAo.style.font = a4M, aAo.style.top = Math.floor((ej + 1.4 * aAk + sj) / h.k) + "px", aAo.style.left = Math.floor((eh + (i - aAn) /
			2) / h.k) + "px")
	}, this.te = function() {
		this.hI && (tf.fillStyle = b9.me, tf.fillRect(eh, ej + sj, i, j - sj), tf.fillStyle = b9.nl, tf.fillRect(eh, ej, i, sj), tf.fillStyle = b9.mh, tf.lineWidth = ba.xn, tf.strokeStyle = b9.mh, tf.strokeRect(eh, ej, i, j), tf.fillRect(eh, ej +
			sj, i, ba.xn), tf.font = b8.pZ.rN(1, .48 * sj), b8.pZ.textAlign(tf, 1), b8.pZ.textBaseline(tf, 1), tf.fillText("You are leaving Territorial.io!", Math.floor(eh + (i - .5 * sj) / 2), Math.floor(ej + .55 * sj)), aL.a4X(Math
			.floor(eh + i - .8 * sj), Math.floor(ej + .25 * sj), Math.floor(.5 * sj)), tf.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function da() {
	var gap, a9C, eh = [0, 0, 0, 0, 0],
		ej = [0, 0, 0, 0, 0],
		mJ = [1, 1, 1, 1, 1],
		f2 = [!0, !0, !0, !1, !1],
		ev = (this.fM = [!0, !0, !0, !1, !1], null);
	this.aAr = function(a1e, aAs) {
		ev = a1e, f2 = aAs, a9C = [bI.aAt, bI.zs, bI.aAu, bI.aAu, bI.aAv], this.dW()
	}, this.dW = function() {
		if (aa.sE()) {
			var aA, rt = Math.floor((z.a0.qx() ? .261 : .195) * h.pb),
				ru = Math.floor(.9 * rt),
				a6s = Math.floor(.17 * ru);
			if (gap = z.a0.qx() ? 2 * ba.gap : ba.gap, mJ[0] = rt / ev[0].width, mJ[1] = ru / ev[1].width, mJ[2] = a6s / ev[2].height, mJ[3] = a6s / ev[3].height, mJ[4] = a6s / ev[4].height, mJ[2] *= 1.7, mJ[3] *= 1.07, eh[0] = gap, eh[1] = gap,
				eh[2] = gap, eh[3] = gap, eh[4] = Math.floor(2 * gap + mJ[3] * ev[3].width), ej[0] = gap, ej[1] = ej[0] + gap + mJ[0] * ev[0].height, ej[2] = ej[1] + gap + mJ[1] * ev[1].height, ej[3] = ej[2] + gap + mJ[2] * ev[2].height, ej[4] =
				ej[3], !f2[0])
				for (aA = 0; aA < 5; aA++) ej[aA] -= mJ[0] * ev[0].height + gap;
			if (!f2[1])
				for (aA = 2; aA < 5; aA++) ej[aA] -= mJ[1] * ev[1].height + gap
		}
	}, this.hI = function() {
		return !(7 === aZ.zx() && z.a0.qx())
	}, this.go = function(ht, hu) {
		if (ev && this.hI())
			for (var aA = f2.length - 1; 0 <= aA; aA--)
				if (f2[aA] && this.fM[aA] && eh[aA] < ht && ej[aA] < hu && ht < eh[aA] + mJ[aA] * ev[aA].width && hu < ej[aA] + mJ[aA] * ev[aA].height) return s.t(9, s.rm, new aAw("You are leaving Territorial.io.", b8.pZ.a25(a9C[aA]))), !0;
		return !1
	}, this.te = function() {
		if (ev && this.hI()) {
			var aA;
			for (tf.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f2[aA] && this.fM[aA] && (tf.setTransform(mJ[aA], 0, 0, mJ[aA], eh[aA], ej[aA]), tf.drawImage(ev[aA], 0, 0));
			tf.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dT() {
	this.aAx = 0, this.aAy = null, this.ss = null, this.qj = null, this.x = null, this.tE = null, this.sq = null, this.message = null, this.aAz = null, this.qp = null, this.aB0 = new aB1, this.a01 = 0, this.dW = function() {
		this.aAx = bE.rp.v9(bh.dr.data[105].value), this.ss = new aB2, this.qj = new aB3, this.x = new aB4, this.tE = new aB5, this.sq = new aB6, this.message = new aB7, this.aAz = new aB8, this.qp = new aB9, this.x.dW(), bo.dW(), this.a01 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.t8 = function() {
		this.qp && this.qp.t8(), this.aAy = null, this.ss = null, this.qj = null, this.x = null, this.tE = null, this.sq = null, this.message = null, this.aAz = null, this.qp = null, this.a01 = 0, bo.t8(), z.a0.setState(0)
	}
}

function aB2() {
	function aBS(g, s7, s8) {
		var aBT = g[s7];
		g[s7] = g[s8], g[s8] = aBT
	}
	this.st = [
		[],
		[],
		[],
		[]
	], this.su = [0, 0, 0, 0], this.aBA = function(aBB, rk, username, sz, ze, aBC, elo, color, uh, aBD) {
		this.st[aBB].push(this.aBE(rk, username, sz, ze, aBC, elo, color, uh, aBD)), bm.aAx === rk && (bm.aAy = this.st[aBB][this.st[aBB].length - 1]), bm.x.aBF += 29 === s.rm && bm.x.qc[0] === aBB && 1 === bm.x.qc[2]
	}, this.aBE = function(rk, username, sz, ze, aBC, elo, color, uh, aBD) {
		return {
			rk: rk,
			username: username,
			sz: sz,
			ze: ze,
			aBC: aBC,
			elo: elo,
			color: color,
			uh: uh,
			aBD: aBD
		}
	}, this.aBG = function(e2, aBB, sz, ze, aBC, elo, uh) {
		e2 = this.st[aBB][e2];
		e2.sz = sz, e2.ze = ze, e2.aBC = aBC, e2.elo = elo, e2.uh = uh, bm.x.aBF += 29 === s.rm && bm.x.qc[0] === aBB && 1 === bm.x.qc[2]
	}, this.aBH = function(e2, aBB, aBI) {
		var e2 = this.st[aBB][e2],
			aBJ = e2.username,
			aBK = "Redacted " + bD.rp.y4(e2.rk, 2);
		e2.username = aBI ? "[" + b8.zN.zS(aBJ) + "] " + aBK : aBK, aBJ.indexOf("Redacted") < 0 && (e2.aBL = aBJ), bm.x.aBF += 29 === s.rm && bm.x.qc[0] === aBB && 1 === bm.x.qc[2]
	}, this.aBM = function(e2, aBN, aBO) {
		var player = this.st[aBN][e2];
		this.aBP(e2, aBN), this.st[aBO].push(player), bm.x.aBF += 29 === s.rm && bm.x.qc[0] === aBO && 1 === bm.x.qc[2]
	}, this.aBP = function(e2, aBN) {
		var ss = this.st[aBN];
		e2 >= this.su[aBN] ? ss[e2] = ss[ss.length - 1] : (this.su[aBN]--, 2 === aBN ? (ss.splice(this.su[aBN] + 1, 0, ss[ss.length - 1]), ss.splice(e2, 1)) : (ss[e2] = ss[this.su[aBN]], ss[this.su[aBN]] = ss[ss.length - 1])), ss.pop(), bm.x
			.aBF += 29 === s.rm && bm.x.qc[0] === aBN && 1 === bm.x.qc[2]
	}, this.aBQ = function(e2, qb) {
		bm.x.aBF += 29 === s.rm && bm.x.qc[0] === qb && 1 === bm.x.qc[2];
		var ss = this.st[qb],
			pR = ss[e2];
		if (2 === qb)
			if (e2 >= this.su[qb]) {
				for (var aBR = this.su[qb], elo = pR.elo; aBR && elo > ss[aBR - 1].elo;) aBR--;
				ss[e2] = ss[this.su[qb]], ss.splice(this.su[qb]++, 1), ss.splice(aBR, 0, pR)
			} else ss.splice(this.su[qb]--, 0, pR), ss.splice(e2, 1);
		else e2 >= this.su[qb] ? aBS(ss, this.su[qb]++, e2) : aBS(ss, --this.su[qb], e2)
	}, this.aBU = function(rk) {
		for (var st = this.st, ea = st.length, aA = 0; aA < ea; aA++)
			for (var ss = st[aA], kY = ss.length, et = 0; et < kY; et++)
				if (rk === ss[et].rk) return ss[et];
		return null
	}
}

function aB1() {
	this.df = function(e2) {
		if ((su = bm.ss.su[e2]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qd = bm.x.qe[e2],
			aBV = 9 === qd.aBW ? 333 : 512,
			su = Math.min(su, aBV);
		8 === qd.aBW && (su -= su % 2);
		aBV = bm.ss.st[e2].splice(0, su), bm.ss.su[e2] -= su, su = function(aBX) {
			if (bm.aAy) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var ea = aBX.length, rk = bm.aAy.rk, aA = 0; aA < ea; aA++)
					if (aBX[aA].rk === rk) return aA
			}
			return -1
		}(aBV);
		return -1 === su ? (bm.x.aBF += 29 === s.rm && bm.x.qc[0] === e2 && 1 === bm.x.qc[2], !1) : (8 === qd.aBW && (qd.aBa = (qd.aBa + (su >> 1)) % 1024, e2 = su - su % 2, su %= 2, aBV = aBV.slice(e2, 2 + e2)), av.dW(qd, aBV, su), !0)
	}, this.aBb = function(qd, aBX, aBY) {
		var ed = aC.data = new a3G,
			aBf = (ed.spawningSeed = qd.spawningSeed, qd.aBW < 7 ? (ed.gameMode = 1, ed.numberTeams = qd.aBW + 2) : 9 === qd.aBW ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === qd.aBW ?
				0 : 10 === qd.aBW ? 1 : 2), ed.selectedPlayer = aBY, ed.isContest = qd.aBc, ed.mapType = bQ.aBd(qd.eG) ? 0 : 1, bQ.aBe(ed, qd.eG), ed.mapSeed = qd.mapSeed, ed.humanCount = aBX.length);
		ed.selectableSpawn = 1 === ed.gameMode || aBf < 100, ed.colorsData = new Uint32Array(aBf), ed.playerNamesData = new Array(aBf);
		for (var aA = 0; aA < aBf; aA++) ed.colorsData[aA] = aBX[aA].color, ed.playerNamesData[aA] = aBX[aA].username;
		if (2 === ed.battleRoyaleMode)
			for (ed.elo = new Uint16Array(aBf), aA = 0; aA < aBf; aA++) ed.elo[aA] = aBX[aA].elo;
		aZ.setState(8), bQ.a6(qd.eG, ed.mapSeed), aC.a3K(), aC.a3J = 2
	}
}

function aB3() {
	var du = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aBg = [b9.mv, b9.mv, b9.mw, b9.nP, b9.nQ, b9.nC, b9.nV, b9.mw, b9.nn, b9.nd],
		aBh = [
			[1],
			[1],
			[1.2],
			[1.4, 1.2],
			[1.7, 1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.2],
			[1.4, 1.2],
			[1.4, 1.2]
		],
		aBi = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!"];
	this.ql = function(aBj) {
		var p, zT;
		return 0 === aBj.id ? "@" + bD.rp.y4(aBj.rk, 5) + ": " + aBj.p : 1 === aBj.id ? (p = "@" + bD.rp.y4(aBj.rk, 5), zT = "@" + bD.rp.y4(aBj.target, 5), 0 === aBj.aBk ? 32768 <= aBj.value ? p + " voted with " + (aBj.value - 32768 + 1) +
				" gold against " + zT + " to weaken the latter's admin position." : p + " voted with " + (aBj.value + 1) + " gold for " + zT + " to strengthen the latter's admin position." : 1 === aBj.aBk ? p + " sent " + Math.floor(aBj.value /
					100) + " Gold to " + zT + "." : p + " voted with " + aBj.value + " points for " + zT + " to acknowledge the latter as clan leader.") : 2 === aBj.id ? 0 === aBj.aBk ? "@" + bD.rp.y4(aBj.rk, 5) + " was muted. Duration: 1 Hour" :
			"The username of @" + bD.rp.y4(aBj.rk, 5) + " was redacted. Duration: 1 Day" : 3 === aBj.id ? "@" + bD.rp.y4(aBj.rk, 5) + bn.e5(aBj.aBk, bn.dz[aBj.aBk][aBj.value]) + "@" + bD.rp.y4(aBj.target, 5) + bn.e7(aBj.aBk, bn.dz[aBj.aBk][aBj
				.value
			]) : 4 === aBj.id ? "@" + bD.rp.y4(aBj.rk, 5) + bn.e5(5, bn.dz[5][aBj.aBk]) + "@" + bD.rp.y4(aBj.target, 5) + bn.e7(5, bn.dz[5][aBj.aBk]) : 5 === aBj.id ? aBi[aBj.aBk] : 6 === aBj.id ? "You are about to mention " + aBj.value +
			" player" + (1 === aBj.value ? "" : "s") + ". This action will cost " + (Math.max(20 * aBj.value, 20) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qk = function(aBj, a5Z) {
		return {
			id: aBj.id,
			p: a5Z,
			aBl: 0,
			fontSize: 1,
			qo: 0,
			aBm: aBj.id ? b9.nO : b9.mh
		}
	}, this.sx = function(player, qb, aBn) {
		return (2 === qb ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (aBn && player.aBL ? " (" + player.aBL + ")" : "")
	}, this.sy = function(sz) {
		return aBg[sz]
	}, this.aBo = function(sz, ze) {
		return sz < 3 || 7 === sz ? aBh[sz][0] : 4 === sz ? aBh[sz][ze < 1 ? 0 : ze < 10 ? 1 : 2] : aBh[sz][ze < 10 ? 0 : 1]
	}, this.aBp = function(ze) {
		return 0 === ze
	}, this.aBU = function(qb, rk) {
		for (var st = bm.ss.st, ss = st[qb], ea = ss.length, aA = 0; aA < ea; aA++)
			if (rk === ss[aA].rk) return ss[aA];
		for (var eu = 0; eu < st.length; eu++)
			if (qb !== eu)
				for (ea = (ss = st[eu]).length, aA = 0; aA < ea; aA++)
					if (rk === ss[aA].rk) return ss[aA];
		return null
	}, this.t0 = function(pR) {
		return !!bm.aAy && pR.rk === bm.aAy.rk
	}, this.aBq = function(ss, aBr, aBs) {
		var zQ = [];
		loop: for (var aA = aBr; aA < aBs; aA++) {
			var zR = b8.zN.zS(ss[aA].username);
			if (zR) {
				for (var eu = zQ.length - 1; 0 <= eu; eu--)
					if (zR === zQ[eu].name) {
						zQ[eu].g3++;
						continue loop
					} zQ.push({
					name: zR,
					g3: 1
				})
			}
		}
		if (zQ.sort(function(et, eu) {
				return eu.g3 - et.g3
			}), 0 === zQ.length) return "";
		for (var pG = zQ[0].name + ": " + zQ[0].g3, aA = 1; aA < zQ.length; aA++) pG += "   " + zQ[aA].name + ": " + zQ[aA].g3;
		return pG
	}, this.aBt = function(sz, ze, aBC) {
		return 0 === du[sz].length ? "Rank: " + (ze + 1) : du[sz] + " Rank: " + (ze + 1) + (3 !== sz && aBC < 100 ? "   " + du[3] + " Rank: " + (aBC + 1) : "")
	}
}

function aB6() {
	var rH = 0,
		aBu = 0,
		aBv = 0,
		aBw = null,
		aBx = null;

	function aC0(pR, aC1, aC2) {
		var pG = pR.username;
		return (pG += "   " + bm.qj.aBt(pR.sz, pR.ze, pR.aBC)) + function(pR) {
			pR = pR.uh;
			if (pR < 1e3) return "   Gold: " + pR;
			if ((pR %= 1024) < 1e3) return "   Gold: " + pR + "k";
			return "   Gold: " + (pR - 999) + "M"
		}(pR) + ("   IP: " + bD.rp.y4(pR.aBD, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aC2 ? aBu : aBz(pR, aC1)])
	}

	function aBz(pR, aC1) {
		return aBu = aC1 || bm.ss.aBU(pR.rk) ? 1 : 0
	}
	this.aBy = function() {
		!rH || aBu === aBz(aBx) && aBv === aBx.uh || (aBv = aBx.uh, aBw.show(-1, -1, aC0(aBx, 0, 1), 1, 1))
	}, this.t1 = function(e, pR, aC1) {
		var a6z = e.target.getBoundingClientRect();
		this.show(a6z.left, a6z.top, pR, 0, aC1), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bm.sq && bm.sq.qq(1)
		})
	}, this.show = function(eh, ej, pR, rL, aC1) {
		aBw = aBw || new rF, aBv = (aBx = pR).uh, aBw.show(eh, ej, aC0(pR, aC1), rL), rH = 1
	}, this.qq = function(rP) {
		aBw && aBw.qq(rP) && (rH = 0, aBx = null)
	}
}

function aB4() {
	function aC7(aCA) {
		bm.x.aBF && 1 === bm.x.qc[2] && s.aCB(29).aCC(), bm.x.aBF = 0, s.aCB(29).aCD(), 0 !== bm.x.qe[bm.x.qc[0]].sd && !aCA || s.aCB(29).aCE(), bm.sq.aBy()
	}
	this.qe = new Array(4), this.qc = [0, 0, 1, 0], this.aBF = 0, this.aC4 = [0, 0], this.dW = function() {
		for (var aA = 0; aA < this.qe.length; aA++) this.qe[aA] = new aC5;
		this.qc[0] = bh.dr.data[158].value
	}, this.aC6 = function() {
		aC7(!0)
	}, this.aC8 = function() {
		for (var aA = 0; aA < bm.x.qe.length; aA++) {
			var qd = bm.x.qe[aA];
			0 === qd.sd ? qd.aCF = 0 : (qd.aCG = Math.max(qd.aCG - qd.aCF % 2, 0), qd.aCF++)
		}
		aC7(!1)
	}, this.aCH = function(qb) {
		this.qc[0] !== qb || this.qc[2] || s.aCB(29).aCI()
	}
}

function aB8() {
	var aCJ = 0,
		aCK = "",
		aCL = 0,
		aCM = 0,
		aCN = 0;

	function aCP(a5Z) {
		ay.aCa.aCb(3, a5Z)
	}

	function aCY(g3) {
		aCJ = 1, bm.message.aCc({
			id: 6,
			value: g3
		})
	}

	function aCS(p) {
		var aCf = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCf)
	}
	this.yq = function(p) {
		var aCO, g, aCU;
		if (aCJ) return aCJ = 0, "yes" === (aCO = p.toLowerCase()) || "y" === aCO ? void aCP(aCK) : void bm.message.aCc({
			id: 5,
			aBk: 7
		});
		!(p.indexOf("@") < 0) && (aCO = aCS(p)) ? (aCK = p, g = function(aCR) {
			for (var ea = aCR.length, aCd = [0, 0, 0, 0], aA = 0; aA < ea; aA++)
				for (var i = aCR[aA], et = 0; et < 4; et++) i === "@room" + (et + 1) && (aCd[et] = 1);
			if ((aCM = b8.pi.a1I(aCd)) % 4 == 0) return b8.pi.a1a(bm.ss.st);
			for (et = 0; et < 4; et++) aCd[et] = aCd[et] ? bm.ss.st[et] : [];
			return b8.pi.a1a(aCd)
		}(aCO), function(aCR, aCU, p) {
			if (!aCL) return;
			for (var ea = aCU.length, aA = 0; aA < ea; aA++) 2 === aCU[aA].id && (p = p.replace(aCR[aCU[aA].e2], "@" + aCU[aA].f2));
			return aCJ = 1, aCP((aCK = p).slice(0, 126) + "|"), 1
		}(aCO, aCU = function(aCR) {
			for (var aCU = [], ea = (aCN = aCL = 0, aCR.length), aA = 0; aA < ea; aA++) {
				var i = aCR[aA],
					kY = i.length;
				b8.zN.startsWith(i, "@[") ? kY <= 9 && b8.zN.a29(i, "]") && aCU.push({
					id: 0,
					f2: i.substring(2, kY - 1).toUpperCase()
				}) : 6 === kY ? b8.zN.startsWith(i, "@room") || (aCN++, aCU.push({
					id: 1,
					f2: bE.rp.v9(i.substring(1))
				})) : 1 < kY && kY < 5 && 0 <= (kY = b5.data.aAb(i.substring(1))) && (aCU.push({
					id: 2,
					f2: kY,
					e2: aA
				}), aCL = 1)
			}
			return aCU
		}(aCO), p) || (0 === aCU.length ? aCM || function(aCR) {
			for (var ea = aCR.length, aA = 0; aA < ea; aA++) {
				var i = aCR[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCO) ? aCY(g.length) : aCP(p) : aCO.length === aCN ? aCP(p) : (function(g, aCU) {
			var kY = aCU.length;
			if (0 === kY) return;
			var ea = g.length;
			loop: for (var aA = ea - 1; 0 <= aA; aA--) {
				for (var et = 0; et < kY; et++)
					if (0 === aCU[et].id) {
						if (aCU[et].f2 === b8.zN.zS(g[aA].username)) continue loop
					} else if (1 === aCU[et].id && aCU[et].f2 === g[aA].rk) continue loop;
				g[aA] = g[--ea], g.pop()
			}
		}(g, aCU), aCY(g.length)))) : aCP(p)
	}, this.aCg = function(p) {
		var aCR = aCS(p);
		if (aCR)
			for (var ea = aCR.length, aA = 0; aA < ea; aA++) {
				var aCe, i = aCR[aA];
				1 < i.length && (aCe = parseInt(i.substring(1), 10), !isNaN(aCe)) && 0 <= aCe && aCe < b5.data.g.length && (p = p.replace(i, "@" + b5.data.g[aCe]))
			}
		return p
	}
}

function aB7() {
	var aCh, aCi = [],
		aCj = -1,
		aCk = 0,
		aCl = 0;

	function aCp() {
		aCk = bd.lx, (3 === this.t5 ? (aCl = 1, aCo) : (aCj = (aCi.length + aCj + 2 * this.t5 - 1) % aCi.length, aCn))()
	}

	function aCn() {
		0 !== aCi.length && (aCl = 0, aCh && aCh.t8(), (aCh = new t2(aCp)).r2(aCj, aCi.length), aCh.show(aCi[aCj]), bm.message.resize())
	}

	function aCo() {
		aCh && aCh.t8(), (aCh = new t9(aCn)).r2(aCi.length), aCh.show(), bm.message.resize()
	}
	this.aCc = function(aBj) {
		var eu, aBj = bm.qj.qk(aBj, bm.qj.ql(aBj));
		5 === aBj.id || 6 === aBj.id ? s.aCB(29).aCm().qn(aBj) : (eu = bd.lx < aCk + 2e4, aCj !== aCi.length - 1 && eu || (aCj = aCi.length), aCi.push(aBj), bo.play(), aCh && (aCl && eu ? aCh.r2(aCi.length) : aCn()))
	}, this.show = function() {
		aCo()
	}, this.qq = function() {
		aCj = aCi.length - 1, aCh && aCh.t8(), aCh = null
	}, this.resize = function() {
		aCh && aCh.resize()
	}
}

function aB5() {
	var aCq = null,
		aCr = null,
		aCs = 0,
		aCt = 0,
		aCu = null;

	function aCw() {
		0 !== aCr.sz && (bm.tE.qq(), s.t(8, 29, new rn(25, {
			ro: 0,
			rk: bD.rp.y4(aCr.rk, 5),
			rl: 0
		}, 29)))
	}

	function aCx() {
		var eh = aCq.eh,
			ej = aCq.ej;
		bm.tE.qq(), aCq = new tA([new v("Kick User", function() {
			aD3(0, 0)
		}, aD8(0, 0)), new v("Block Chat", aD4, aD9(1)), new v("Censor Username", aD5, aD9(2)), new v("Elo Deduction", aD6, aD9(3)), new v("Gold Seizure", aD7, aD9(4))]), aD2(eh, ej), aCs = 2, aCt = 1
	}

	function aD9(id) {
		return !bm.aAy || bm.qj.t0(aCr) ? 1 : 4 === id && 9 === bm.aAy.sz && bm.aAy.ze < aCr.ze ? 0 : bm.aAy.aBC >= aCr.ze || 0 === id && aCr.ze < 200 ? 1 : 1 - bn.e0(id, bm.aAy.aBC, 0)
	}

	function aD0() {
		return !bm.aAy || bm.qj.t0(aCr) ? 1 : 0
	}

	function aD8(id, e2) {
		var ze;
		return !bm.aAy || bm.qj.t0(aCr) || (ze = bm.aAy.aBC, (ze = 4 === id && 9 === bm.aAy.sz ? Math.min(bm.aAy.ze, ze) : ze) >= aCr.ze) ? 1 : 1 - bn.e0(id, ze, e2)
	}

	function aCz() {
		var eh = aCq.eh,
			ej = aCq.ej,
			aDA = (bm.tE.qq(), aD0());
		aCq = new tA([new v(bn.dz[5][0], function() {
			aD3(5, 0)
		}, aDA), new v(bn.dz[5][1], function() {
			aD3(5, 1)
		}, aDA), new v(bn.dz[5][2], function() {
			aD3(5, 2)
		}, aDA), new v(bn.dz[5][3], function() {
			aD3(5, 3)
		}, aDA)]), aD2(eh, ej), aCt = aCs = 2
	}

	function aD1() {
		29 === s.rm && s.aDB().aAz(bD.rp.y4(aCr.rk, 5))
	}

	function aD3(id, value) {
		ay.aCa.aCb(5, {
			id: id,
			value: value,
			rk: aCr.rk
		})
	}

	function aD4() {
		var eh = aCq.eh,
			ej = aCq.ej;
		bm.tE.qq(), aCq = new tA([new v(bn.dz[1][0], function() {
			aD3(1, 0)
		}, aD8(1, 0)), new v(bn.dz[1][1], function() {
			aD3(1, 1)
		}, aD8(1, 1)), new v(bn.dz[1][2], function() {
			aD3(1, 2)
		}, aD8(1, 2)), new v(bn.dz[1][3], function() {
			aD3(1, 3)
		}, aD8(1, 3)), new v(bn.dz[1][4], function() {
			aD3(1, 4)
		}, aD8(1, 4))]), aD2(eh, ej), aCs = 3, aCt = 1
	}

	function aD5() {
		var eh = aCq.eh,
			ej = aCq.ej;
		bm.tE.qq(), aCq = new tA([new v(bn.dz[2][0], function() {
			aD3(2, 0)
		}, aD8(2, 0)), new v(bn.dz[2][1], function() {
			aD3(2, 1)
		}, aD8(2, 1)), new v(bn.dz[2][2], function() {
			aD3(2, 2)
		}, aD8(2, 2))]), aD2(eh, ej), aCs = 3, aCt = 2
	}

	function aD6() {
		var eh = aCq.eh,
			ej = aCq.ej;
		bm.tE.qq(), aCq = new tA([new v(bn.dz[3][0], function() {
			aD3(3, 0)
		}, aD8(3, 0)), new v(bn.dz[3][1], function() {
			aD3(3, 1)
		}, aD8(3, 1)), new v(bn.dz[3][2], function() {
			aD3(3, 2)
		}, aD8(3, 2))]), aD2(eh, ej), aCt = aCs = 3
	}

	function aD7() {
		var eh = aCq.eh,
			ej = aCq.ej;
		bm.tE.qq(), aCq = new tA([new v(bn.dz[4][0], function() {
			aD3(4, 0)
		}, aD8(4, 0)), new v(bn.dz[4][1], function() {
			aD3(4, 1)
		}, aD8(4, 1)), new v(bn.dz[4][2], function() {
			aD3(4, 2)
		}, aD8(4, 2)), new v(bn.dz[4][3], function() {
			aD3(4, 3)
		}, aD8(4, 3)), new v(bn.dz[4][4], function() {
			aD3(4, 4)
		}, aD8(4, 4))]), aD2(eh, ej), aCs = 3, aCt = 4
	}

	function aD2(eh, ej, tG) {
		aCq.show(eh, ej, tG), bm.sq.show(aCq.eh, aCq.ej, aCr, 1)
	}
	this.aCv = function(e, pR) {
		aCs = 1, aCr = pR, aCq = new tA([new v(L(125), aCw, 0 === aCr.sz ? 1 : 0), new v(L(126), aCx, function() {
			if (!bm.aAy) return 1;
			if (bm.qj.t0(aCr)) return 1;
			if (!(9 === bm.aAy.sz && bm.aAy.ze < aCr.ze)) {
				if (100 <= bm.aAy.aBC) return 1;
				if (bm.aAy.aBC >= aCr.ze) return 1
			}
			return 0
		}()), new v(L(127, 0, "Report"), aCz, aD0()), new v(L(128), aD1, 0)]), aD2((aCu = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aCu.clientY, 1)
	}, this.a0r = function(code) {
		if (29 !== s.rm) return !1;
		if (!aCr) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qq();
			else if (b8.zN.startsWith(code, "Numpad") || b8.zN.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aCs) this.aCv(aCu, aCr);
				else {
					if (!aCq) return !1;
					1 === aCs ? code <= 1 ? aCw() : 2 === code ? aCx() : 3 === code ? aCz() : (aD1(), this.qq()) : 2 === aCs ? 1 === aCt ? code <= 1 ? (aD3(0, 0), this.qq()) : (2 === code ? aD4 : 3 === code ? aD5 : 4 === code ? aD6 : aD7)() : (
						aD3(5, bJ.p7(code - 1, 0, 3)), this.qq()) : (aD3(aCt, bJ.p7(code - 1, 0, bn.dz[aCt].length - 1)), this.qq())
				}
		}
		return !0
	}, this.qq = function() {
		aCs = 0, aCq && aCq.qq(), aCq = null, bm.sq.qq()
	}
}

function aC5() {
	this.sd = 0, this.eG = 0, this.mapSeed = 0, this.aBW = 0, this.aDC = 0, this.aDD = 0, this.aBc = 0, this.aCG = 0, this.spawningSeed = 0, this.a03 = 0, this.aBa = 0, this.qf = [], this.qg = 1048575, this.aCF = 0
}

function aB9() {
	var aDE = [],
		rz = [];

	function aDK(pG, pR) {
		var aDL = function(pG) {
				var rk = bE.rp.v9(pG),
					aDL = bm.ss.aBU(rk);
				if (aDL) {
					for (aDE.push(aDL); 50 < aDE.length;) aDE.shift();
					return aDL
				}
				for (var aA = aDE.length - 1; 0 <= aA; aA--)
					if (rk === aDE[aA].rk) return aDL = aDE[aA], aA < 40 && aDE.push(aDL), aDL;
				return bm.ss.aBE(rk, pG, 1, 999999, 999999, 0, 0, 0, 0)
			}(pG),
			pG = (pR && 0 === pR.id && pR.qo && (pR.fontSize = bm.qj.aBo(aDL.sz, aDL.ze), pR.aBl = bm.qj.aBp(aDL.ze)), document.createElement("span"));
		return pG.textContent = aDL.username, pG.style.display = "inline-block", pG.style.color = bm.qj.sy(aDL.sz), pG.style.cursor = "pointer", pG.style.margin = "0", pG.style.font = "inherit", pG.style.minWidth = pG.style.minHeight = "1em", bm.qj
			.t0(aDL) && (pG.style.textDecoration = "underline"), bm.qj.aBp(aDL.ze) && (pG.style.fontWeight = "bold"), pG.onclick = function(e) {
				bm.tE.aCv(e, aDL)
			}, bH.q2() || (pG.onmouseover = function(e) {
				bm.sq.t1(e, aDL)
			}), rz.push(pG), pG
	}

	function aDJ(p, pR) {
		var qY = document.createElement("span");
		return qY.textContent = p, qY.style.color = pR.aBm, qY.style.margin = "0", qY.style.font = "inherit", qY
	}
	this.t8 = function() {
		for (var aA = 0; aA < rz.length; aA++) rz[aA].onclick = rz[aA].onmouseover = null;
		rz[aA] = null
	}, this.transform = function(pR) {
		for (var pE = document.createElement("div"), aDF = function(pR) {
				var p = pR.p,
					aDF = [];
				for (;;) {
					var ev = function aDI(p, position) {
						position = p.indexOf("@", position);
						if (position < 0) return -1;
						var pG = p.substring(position + 1, position + 6);
						if (5 !== pG.length) return aDI(p, position + 1);
						if (b8.zN.startsWith(pG, "room")) return aDI(p, position + 1);
						var aDN = new RegExp("^[a-zA-Z0-9_-]+$");
						if (!aDN.test(pG)) return aDI(p, position + 1);
						aDN = p.substring(position + 6, position + 7);
						if (1 !== aDN.length) return position;
						pG = new RegExp("^[ :!.]+$");
						if (!pG.test(aDN)) return aDI(p, position + 1);
						return position
					}(p, 0);
					if (-1 === ev) {
						aDF.push(aDJ(p, pR));
						break
					}
					0 === ev ? aDF.push(aDK(p.substring(1, 6), pR)) : (aDF.push(aDJ(p.substring(0, ev), pR)), aDF.push(aDK(p.substring(ev + 1, ev + 6)))), p = p.substring(ev + 6)
				}
				return aDF
			}(pR), aA = 0; aA < aDF.length; aA++) pE.appendChild(aDF[aA]);
		pE.style.margin = "0.6em 0.6em", pR.qo && (pE.style.marginLeft = pE.style.marginRight = "inherit"), pE.style.font = "inherit";
		var aDH = 0 < pR.id;
		return pR.aBl && (pE.style.fontWeight = "bold"), aDH && (pE.style.paddingLeft = "0.7em"), aDH && (pE.style.fontStyle = "italic"), pE.style.fontSize = pR.fontSize.toFixed(2) + "em", pE
	}
}

function cL() {
	var aDQ, aDR, aDS;

	function aDX(aA) {
		var button = aX.q9[aA],
			eh = button.eh,
			ej = button.ej,
			i = button.i,
			j = button.j;
		tf.fillStyle = button.aDV, tf.fillRect(eh, ej, i, j), aA === aDQ && (tf.fillStyle = aDS, tf.fillRect(eh, ej, i, j)), tf.lineWidth = ba.xn, tf.strokeStyle = aDR, tf.strokeRect(eh, ej, i, j),
			function(button) {
				var eh = button.eh,
					ej = button.ej,
					i = button.i,
					j = button.j;
				b8.pZ.textAlign(tf, 1), b8.pZ.textBaseline(tf, 1), tf.font = button.font, tf.fillStyle = aDR, tf.fillText(button.a5Z, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ej = 0, this.gap = 0, this.dW = function() {
		aDQ = -1, aDR = b9.mh, aDS = "rgba(255,255,255,0.16)", this.q9 = new Array(7), this.j = Math.floor((z.a0.qx() ? .123 : .093) * h.pb), this.i = Math.floor((z.a0.qx() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDT = Math.floor(.26 * this.j),
			aDU = b8.pZ.rN(1, aDT);
		this.q9[0] = {
			eh: 0,
			ej: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5Z: "Multiplayer",
			font: aDU,
			aDV: "rgba(22,88,22,0.8)",
			fontSize: aDT
		}, aDT = Math.floor(.18 * this.j), aDU = b8.pZ.rN(1, aDT), this.q9[1] = {
			eh: 0,
			ej: 0,
			i: this.i - this.q9[0].i - this.gap,
			j: this.j,
			a5Z: "Single Player",
			font: aDU,
			aDV: "rgba(22,88,88,0.8)",
			fontSize: aDT
		}, this.q9[2] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5Z: "",
			font: this.q9[1].font,
			aDV: "rgba(100,0,0,0.8)",
			fontSize: this.q9[1].fontSize
		}, this.q9[3] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: this.j,
			a5Z: "Back",
			font: this.q9[0].font,
			aDV: "rgba(0,0,0,0.8)",
			fontSize: this.q9[0].fontSize
		}, this.q9[4] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5Z: "The game was updated!",
			font: this.q9[1].font,
			aDV: "rgba(100,0,0,0.8)",
			fontSize: this.q9[1].fontSize
		}, this.q9[5] = {
			eh: 0,
			ej: 0,
			i: this.q9[0].i,
			j: Math.floor(.8 * this.j),
			a5Z: "Reload",
			font: this.q9[0].font,
			aDV: "rgba(0,100,0,0.8)",
			fontSize: this.q9[0].fontSize
		}, this.q9[6] = {
			eh: 0,
			ej: 0,
			i: this.q9[1].i,
			j: this.q9[5].j,
			a5Z: "Back",
			font: this.q9[0].font,
			aDV: "rgba(0,0,0,0.8)",
			fontSize: this.q9[0].fontSize
		}, this.a7w()
	}, this.a7w = function() {
		this.ej = Math.floor(.54 * h.j), this.q9[0].eh = Math.floor(.5 * h.i - .5 * this.i), this.q9[1].eh = this.q9[0].eh + this.q9[0].i + this.gap, this.q9[2].eh = this.q9[3].eh = this.q9[0].eh, this.q9[4].eh = this.q9[5].eh = this.q9[0].eh,
			this.q9[6].eh = this.q9[1].eh, this.q9[0].ej = Math.floor(.54 * h.j), this.q9[1].ej = this.q9[0].ej, this.q9[2].ej = Math.floor((h.j - this.q9[2].j - this.q9[3].j - this.gap) / 2), this.q9[3].ej = this.q9[2].ej + this.q9[2].j + this
			.gap, this.q9[4].ej = Math.floor((h.j - this.q9[4].j - this.q9[5].j - this.gap) / 2), this.q9[5].ej = this.q9[6].ej = this.q9[4].ej + this.q9[4].j + this.gap
	}, this.aDW = function() {
		aDX(0), aDX(1)
	}, this.aDY = function() {
		aDX(2), aDX(3)
	}, this.aDZ = function() {
		aDX(4), aDX(5), aDX(6)
	}, this.a0J = function(eh, ej, lQ) {
		var aA = -1;
		return 0 === aZ.zx() ? aA = this.a0n(eh, ej, 0, 2) : 3 === aZ.zx() ? aA = this.a0n(eh, ej, 3, 1) : 5 === aZ.zx() && (aA = this.a0n(eh, ej, 5, 2)), aDQ !== aA && (aDQ = aA, lQ) && (bd.de = !0), -1 !== aA && (aS.qZ(), !0)
	}, this.a0n = function(eh, ej, aDa, size) {
		for (var aA = aDa; aA < aDa + size; aA++)
			if (eh >= this.q9[aA].eh && ej >= this.q9[aA].ej && eh <= this.q9[aA].eh + this.q9[aA].i && ej <= this.q9[aA].ej + this.q9[aA].j) return aA;
		return -1
	}
}

function cM() {
	var aDc, aDd, a5j, a5t, a6k, aDe, aDf, aDg, aDh, a4M, fontSize, lr, aDi, aDk, aDj = 0;

	function aDn() {
		return ay.x.aDo[(aDi + aDj) % ay.x.aDp]
	}

	function aDs() {
		__fx.customLobby.isActive() ? (q.a08(3249), __fx.customLobby.setActive(false)) : q.a08(3249)
	}

	function aDy(ej, a7d, sd) {
		var m7 = Math.floor((h.i - a5t) / 2) + aDf,
			mK = m7 + Math.floor(sd * (a5t - 2 * aDf));
		tf.lineWidth = a7d, tf.beginPath(), tf.moveTo(m7, ej), tf.lineTo(mK, ej), tf.lineTo(Math.floor(m7 - aDf + sd * a5t), ej + a5j), tf.lineTo(m7 - aDf, ej + a5j), tf.closePath()
	}
	this.dW = function() {
		aZ.setState(6), aDc = 0, aDd = 1, aDg = "rgba(0,220,120,0.4)", aDh = "rgba(0,0,0,0.8)", this.resize(), bd.de = !0, aDi = 0, aDk = !1, aDi++, lr = bd.lx, ay.x.aDq(aDn(), 4) && (aDk = !0, ay.aCa.aDr(aDn()))
	}, this.resize = function() {
		a5t = Math.floor((z.a0.qx() ? .5 : .25) * h.pb), a6k = a5t + 12, a5j = Math.floor(.125 * a5t), aDf = 3 * a5j, aDe = Math.floor(.225 * a5t), fontSize = Math.floor(.3 * a5j), a4M = b8.pZ.rN(0, fontSize)
	}, this.aDm = function(et) {
		aDj = et
	}, this.a00 = function(zu) {
		zu === aDn() && (aDk = !1, aDs())
	}, this.aDt = function(zu) {
		6 !== aZ.zx() || aDk || (lr = bd.lx, aDk = !0)
	}, this.go = function(eh, ej) {
		var m7 = Math.floor((h.i - a6k) / 2),
			m8 = Math.floor(.5 * (h.j - ba.gap - a5j - aDe)) + a5j + ba.gap;
		return m7 < eh && eh < m7 + a6k && m8 < ej && ej < m8 + aDe && (this.a0z(), aX.a0J(eh, ej, !1), !0)
	}, this.a0z = function() {
		ay.x.a09(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ik = function() {
		6 === aZ.zx() && (aDk ? bd.lx > lr + 12e3 && q.a08(3250) : bd.lx > lr + 12e3 && aDs(), 100 < (aDc += .07 * aDd * (aDc < 16 ? 5 + aDc : 84 < aDc ? 105 - aDc : 17)) ? (aDc = 100, aDd = -1) : aDc < 0 && (aDc = 0, aDd = 1), aDg = "rgba(0," +
			Math.floor(190 - 1.9 * aDc) + "," + Math.floor(120 - 1.2 * aDc) + "," + (.4 + .004 * aDc) + ")", aDh = "rgba(0," + Math.floor(1.9 * aDc) + "," + Math.floor(1.2 * aDc) + "," + (.8 - .004 * aDc) + ")", bd.de = !0)
	}, this.te = function() {
		var eh = Math.floor((h.i - a6k) / 2),
			ej = Math.floor(.5 * (h.j - ba.gap - a5j - aDe));
		! function(title, ej, a7d, sd) {
			tf.fillStyle = aDh, aDy(ej, a7d, 1), tf.fill(), tf.fillStyle = aDg, aDy(ej, a7d, sd), tf.fill(), tf.strokeStyle = b9.mh, aDy(ej, a7d, 1), tf.stroke(),
				function(aE0, ej) {
					b8.pZ.textAlign(tf, 1), b8.pZ.textBaseline(tf, 1), tf.font = a4M, tf.fillStyle = b9.mh, tf.fillText(aE0, Math.floor(.5 * h.i), Math.floor(ej + .58 * a5j))
				}(title, ej)
		}(L(129), ej, 3, aDc / 100),
		function(eh, ej, i, j, a5Z) {
			tf.fillStyle = b9.mc, tf.fillRect(eh, ej, i, j), tf.lineWidth = 3, tf.strokeStyle = b9.mh, tf.strokeRect(eh, ej, i, j);
			var ea = Math.floor(.3 * j);
			b8.pZ.textAlign(tf, 1), b8.pZ.textBaseline(tf, 1), tf.font = b8.pZ.rN(0, ea), tf.fillStyle = b9.mh, tf.fillText(a5Z, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * ea))
		}(eh, ej + a5j + ba.gap, a6k, aDe, L(32))
	}
}

function cN() {
	var zp = 0;
	this.dW = function() {
		aX.dW(), zp = 0
	}, this.setState = function(aE1) {
		zp = aE1
	}, this.zx = function() {
		return zp
	}, this.aE2 = function() {
		this.setState(8), s.w()
	}, this.a0r = function(e) {
		if (!bQ.vP) return !1;
		if (!(bd.lx < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aE3()) return !0;
				if ("Enter" === e.key) {
					if (0 === zp) return !0;
					if (7 === zp) return !0
				}
			}
			return !1
		}
	}, this.aE4 = function() {
		bX.resize()
	}, this.aE3 = function() {
		return !!bX.qq()
	}, this.go = function(eh, ej) {
		!bQ.vP || bX.go(eh, ej) || 6 === zp && aY.go(eh, ej) || bW.go(eh, ej) || aS.go(eh, ej)
	}, this.a0J = function(eh, ej) {
		!aS.a7p && aX.a0J(eh, ej, !0) || aS.a0J(eh, ej)
	}, this.click = function(eh, ej) {
		aS.a0i()
	}, this.a0M = function(eh, ej, deltaY) {}, this.aE5 = function() {
		aX.a7w(), bd.de = !0
	}, this.te = function() {
		8 !== zp && 10 !== zp && (tf.imageSmoothingEnabled = !0, this.wx(), 0 !== zp && (aS.te(), aN.te(), this.aE6(), bW.te()), 0 !== zp && 6 === zp && aY.te(), bX.te(), s.te())
	}, this.wx = function() {
		var aE8, aE7;
		if (__fx.makeMainMenuTransparent) tf.clearRect(0, 0, h.i, h.j);
		else bQ.vP ? (aE7 = h.i / bQ.el, aE8 = h.j / bQ.em, tf.setTransform(aE7 = aE8 < aE7 ? aE7 : aE8, 0, 0, aE7, Math.floor((h.i - aE7 * bQ.el) / 2), Math.floor((h.j - aE7 * bQ.em) / 2)), tf.drawImage(bQ.vR, 0, 0), tf.setTransform(1, 0, 0, 1,
			0, 0), tf.fillStyle = b9.mc) : tf.fillStyle = b9.mY, tf.fillRect(0, 0, h.i, h.j)
	}, this.aE6 = function() {
		var ej = Math.floor(.3 * h.j),
			canvas = aa.aE9("territorial.io"),
			hX = (hX = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hX,
			eh = (tf.globalAlpha = .15, tf.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hX * canvas.width))),
			eh = Math.floor(eh / hX),
			ej = Math.floor(ej - .5 * canvas.height * hX),
			ej = Math.floor(ej / hX);
		tf.setTransform(hX, 0, 0, hX, eh, ej), tf.drawImage(canvas, eh, ej), tf.setTransform(1, 0, 0, 1, 0, 0), tf.globalAlpha = 1, tf.imageSmoothingEnabled = !0
	}
}

function cm() {
	this.aBa = 0;
	var aEB, aEC, aED, aEE, aEF, aEG = this.aEA = 0;

	function aEK() {
		aEE = aEF = null, aEG = 0
	}
	this.dW = function(qd, aBX, aBY) {
		s.w(), bm.t8(), aZ.setState(10), aEE = qd, aEF = aBX, aEG = aBY, this.aBa = qd.aBa, this.aEA = aBY, aEB = 0, aEC = bd.lx + 4500, ay.x.a02 > ay.x.aEH && (qd.a03 += ay.x.aEH), ay.x.a03 = qd.a03, ay.x.a02 === qd.a03 ? (console.log(
			"direct pass"), aED = 0) : (console.log("delayed pass"), ay.x.close(ay.x.a02, 3247), aED = 2, ay.x.aDq(qd.a03, 5) && ay.ny.aEI()), tf.imageSmoothingEnabled = !0, aZ.wx();
		aBX = aa.aE9("loading"), aBY = (z.a0.qx() ? .396 : .25) * h.pb / aBX.width;
		tf.setTransform(aBY, 0, 0, aBY, Math.floor((h.i - aBY * aBX.width) / 2), Math.floor((h.j - aBY * aBX.height) / 2)), tf.imageSmoothingEnabled = !1, tf.drawImage(aBX, 0, 0), tf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lO = function() {
		0 < aED && bd.lx > aEC && (aED--, aEC += 4500, 0 === bd.aEM) && 0 === bd.jn() && (0 === aED && ay.x.a03 < ay.x.aEN && (ay.x.a03 += ay.x.aEH), ay.x.aDq(ay.x.a03, 5))
	}, this.aEO = function() {
		return 10 === aZ.zx() && (bm.aB0.aBb(aEE, aEF, aEG), aEK(), !0)
	}, this.aEP = function() {
		10 === aZ.zx() && 2 <= ++aEB && (bm.aB0.aBb(aEE, aEF, aEG), aEK())
	}
}

function cO() {
	var aER, canvas, z8, aES;

	function aEY(e2, name, aEZ, pG) {
		z8[e2] = name, canvas[e2] = new Image, canvas[e2].onload = function() {
			! function(e2, aEZ) {
				var a2e, a2f = null;
				7 === aEZ ? a2e = b8.a15.a2h : 8 === aEZ ? (a2e = b8.a15.a2k, a2f = .1) : 3 === aEZ ? (a2e = b8.a15.a2i, a2f = .06) : 5 === aEZ ? a2e = b8.a15.a2l : 6 === aEZ ? a2e = b8.a15.a2g : 4 === aEZ && (a2e = b8.a15.a2m);
				canvas[e2] = b8.a15.a2d(canvas[e2], a2e, a2f)
			}(e2, aEZ), aEb()
		}, canvas[e2].onerror = function(e) {
			console.error("Error loading image at index", e2, "Error:", e), aEb()
		}, canvas[e2].src = "data:image/png;base64," + pG
	}

	function aEb() {
		aER--, aEV()
	}

	function aEV() {
		0 === aER && (aER = -1, aEX(), bd.de = !0, canvas[7] = aES, canvas[8] = aES, canvas[9] = aES, canvas[10] = aES, 5 === s.rm) && s.aDB().aEd.resize()
	}

	function aEX() {
		aK.a3q(), bW.aAr([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vU = new xK, ai.vU.dW(), au.dX()
	}
	this.dW = function() {
		if (void 0 === canvas) {
			aER = 23, canvas = new Array(aER), z8 = new Array(aER), (aES = document.createElement("canvas")).width = 1;
			for (var aA = aER - (aES.height = 1); 0 <= aA; aA--) canvas[aA] = aES;
			aEX(), aEY(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEY(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEY(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEY(3, "orders", 6,
					"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"
					), aEY(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aEY(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEY(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2jdGjR2dnAFBPLrjgghgzZkx2BtAIJk6cGMcdd1x2BgAADaCqqiqOPvromD9/fnYKFK0XXnghjjrqqOwMAICCMnz48Fi5cmV2BgAAAAAAAACkM9wDAAAAAAAAAECzMXDgwOwEarBw4cIYMmRIdgYbYOTIkTF37tzsDOrg6KOPjj322CM7A4B6Mnjw4Bg3blx2BtCAHn/88Tj00EOzMwAAaEBz586NPn36xIoVK7JToOgsWLAgfvzjH8eqVauyUwAACsrs2bPj3nvvzc4AAAAAAAAAgHSGewAAAAAAAAAAaBZOP/302G233bIzqMHvfvc7BxI2UdXV1XHttddmZ1AHrVq1ilGjRmVnAFCPfv3rX/v3GJqpKVOmxMEHHxzV1dXZKQAANLBHHnkkBgwYEFVVVdkpUDRWrlwZffr0iVdffTU7BQCgIA0cODDef//97AwAAAAAAAAASGW4BwAAAAAAAACAJq+0tDTOOOOM7Axq8O6770ZFRUV2Bhth7Nix8dprr2VnUAe9evWKnj17ZmcAUI9OO+20+N3vfpedAdSjKVOmxEEHHRRr1qzJTgEAoJFcf/31MXbs2OwMKApr166NX/3qVzFx4sTsFACAgrVgwYL4zW9+k50BAAAAAAAAAKkM9wAAAAAAAAAA0OQNHDgwOnXqlJ1BDa6++uqoqqrKzmAjXXXVVdkJ1EFZWVkMHTo0OwOAenbyyScb74FmwmgPAEDxGjx4cNx8883ZGdCsrVu3LoYNGxbjx4/PTgEAKHhjxoyJmTNnZmcAAAAAAAAAQBrDPQAAAAAAAAAANGllZWXRt2/f7AxqMHfu3Bg7dmx2BvXg8ssvj9mzZ2dnUAf77bdfHHvssdkZANSzk08+OW644YbsDGAjGO0BAODnP/95PPTQQ9kZ0GxdeumlMXr06OwMAIAmY+DAgfHJJ59kZwAAAAAAAABACsM9AAAAAAAAAAA0aSNHjowddtghO4MajBs3Lqqrq7MzqCfjxo3LTqCOzj333OwEABrAKaec4t9laKIeffRRoz0AAERExBFHHBFPP/10dgY0O9ddd12cffbZ2RkAAE3KpEmT4pprrsnOAAAAAAAAAIAUhnsAAAAAAAAAAGiyysvLo3fv3tkZ1GDOnDkOlG9mrr/++pg5c2Z2BnWw++67x4ABA7IzAGgAv/71r2Ps2LGxbt267BSglu655544+OCDjfYAABAREVVVVXHIIYfEc889l50Czcbvfve7OPXUU7MzAACapAEDBsTzzz+fnQEAAAAAAAAAjc5wDwAAAAAAAAAATdaIESOiffv22RnU4LLLLstOoAFceuml2QnUUf/+/aOsrCw7A4AGcO6558b5558fVVVV2SnAF/j9738fP/7xj6O6ujo7BQCAArJs2bL43ve+Fy+++GJ2CjR5t9xyS5x88snZGQAATVZ1dXWceuqpsXz58uwUAAAAAAAAAGhUhnsAAAAAAAAAAGiS2rVrFyeccEJ2BjWYOXNmXHfdddkZNIBbb701pk+fnp1BHey0005RWVmZnQFAA7ngggvi9NNPj1WrVmWnAOtRXV0dF154YfTp0yc7BQCAArV06VLjPbCRbrrppjjxxBOzMwAAmrxnn302hg8fnp0BAAAAAAAAAI3KcA8AAAAAAAAAAE3S6NGjo23bttkZ1ODiiy/OTqABXXzxxbFu3brsDOrglFNOiXbt2mVnANBArrnmmvj5z38eS5cuzU4BPuWTTz6Js846KwYNGpSdAgBAgVuwYIHxHthAN9xwQ5x00knZGQAAzcYll1wS//3f/52dAQAAAAAAAACNxnAPAAAAAAAAAABNTufOneOYY47JzqAG06dPj9tuuy07gwZ09913x9NPP52dQR1stdVWMXr06OwMABrQnXfeGYcddli8++672SlARHz44Ydx0kknxWWXXZadAgBAE/H/H+95/vnns1OgSVi3bl1cdNFFccopp2SnAAA0O8cff3w8++yz2RkAAAAAAAAA0CgM9wAAAAAAAAAA0OQMGzYs2rRpk53Beqxbty5GjRqVnUEjGDt2bFRXV2dnUAc//elPY9ddd83OAKABPfXUU3HAAQfE7Nmzs1OgqL3zzjvxwx/+MG6//fbsFAAAmpgFCxbEAQccEM8880x2ChS0Tz75JM4555w455xzslMAAJqlqqqqOPLII2Pu3LnZKQAAAAAAAADQ4Az3AAAAAAAAAADQpHTp0iWOPPLI7Axq8NRTT8Uf/vCH7AwawcMPPxyTJ0/OzqAOWrdubVgLoAi8/vrr0a1bt5g0aVJ2ChSlv/3tb9GjR4946qmnslMAAGiili1bFj169IjHHnssOwUK0vLly+PUU0+Niy++ODsFAKBZmzdvXhx99NHx/vvvZ6cAAAAAAAAAQIMy3AMAAAAAAAAAQJNSWVkZLVu2zM5gPaqrq6OysjI7g0Y0ZsyYqKqqys6gDg499NDo0aNHdgYADWzZsmXxve99L6655ppYt25ddg4Ujfvuuy+6desW77zzTnYKAABN3Jo1a6JXr15x5513ZqdAQXn//ffjmGOOiRtvvDE7BQCgKDz33HNx7LHHxgcffJCdAgAAAAAAAAANxnAPAAAAAAAAAABNRvfu3aNXr17ZGdRg0qRJMWnSpOwMGtHjjz8ejz32WHYGdbDJJpvE8OHDszMAaCT/9V//Fb/+9a9j5cqV2SnQrH3yyScxcuTIOPLII2PNmjXZOQAANBPV1dXxk5/8JH7zm98YZYWImDNnTnz/+9+PiRMnZqcAABSVSZMmRZ8+feKjjz7KTgEAAAAAAACABmG4BwAAAAAAAACAJmPw4MHRokWL7AzWY+3atVFZWZmdQYLKykqHkzcxPXr0iKOOOio7A4BGcvnll8cRRxwRf//737NToFlatGhR/OxnP4uhQ4dmpwAA0EydeeaZMWDAgFi1alV2CqR55JFH4t///d/j+eefz04BAChK999/f5x44onxwQcfZKcAAAAAAAAAQL0z3AMAAAAAAAAAQJPQs2fP6NmzZ3YGNfjjH/8YU6dOzc4gwbRp02LixInZGdRBSUlJDB48ODsDgEb02GOPxb777ht//vOfs1OgWXnuuefiO9/5Ttx9993ZKQAANHPjxo2LY489NhYtWpSdAo2qqqoqLr/88ujVq1csW7YsOwcAoKjdf//9ccwxx8R7772XnQIAAAAAAAAA9cpwDwAAAAAAAAAATUJFRUWUlrrdpRCtXr06RowYkZ1BohEjRsTq1auzM6iDPffcM/r27ZudAUAjmj9/fhxwwAFxxRVXRFVVVXYONGnV1dUxfvz4+Pd///d49dVXs3MAACgS999/fxxwwAHx4osvZqdAo/jwww+jb9++8atf/So7BQCA/zVp0qQ4+OCDY+7cudkpAAAAAAAAAFBvnGQCAAAAAAAAAEDBO+qoo2K//fbLzqAGDz74YMyYMSM7g0QzZsyIBx98MDuDOjrzzDOjrKwsOwOARta/f//42c9+FgsXLsxOgSbp/fffj1/84hfxi1/8Iqqrq7NzAAAoMrNnz47/9//+n5/H0uzNmjUrvvvd78Z1112XnQIAwGfMmDEjunfvHtOnT89OAQAAAAAAAIB6YbgHAAAAAAAAAICCN3DgwCgpKcnOYD1WrlwZ559/fnYGBWDo0KGxcuXK7AzqoGPHjjF06NDsDAAS3HHHHfHtb387/vznP2enQJMybdq06N69e/zud7/LTgEAoIitWrUqDj/88BgyZEisWrUqOwfqVXV1dfz+97+Prl27xvPPP5+dAwBADebPnx/77bdfTJgwITsFAAAAAAAAADaa4R4AAAAAAAAAAAraCSecEF27ds3OoAZ33313vP7669kZFIA5c+bEfffdl51BHf3yl7+M8vLy7AwAErzzzjtxwAEHxJgxYxz0DF9g9erVcfHFF0f37t3j1Vdfzc4BAICIiBg1alQcdthh8c4772SnQL1YvHhxnHLKKdGnT5+oqqrKzgEA4AtUVVXF8ccfH2eeeWYsW7YsOwcAAAAAAAAANpjhHgAAAAAAAAAACtrAgQOzE6jB8uXLY/DgwdkZFJAhQ4bE8uXLszOog3bt2sXYsWOzMwBIdP7558fBBx8cs2fPzk6BgjRnzpzo1auX700BAChIjz32WHzzm9+MBx98MDsFNsoTTzwR++67b/z+97/PTgEAoI5+85vfxAEHHBDPP/98dgoAAAAAAAAAbBDDPQAAAAAAAAAAFKzTTz89dtttt+wManDrrbfGvHnzsjMoIHPnzo0777wzO4M6Ou6446Jz587ZGQAkmjx5cnzjG9+Ia6+9NtauXZudAwVh7dq1cf3118cee+wRkydPzs4BAIAaLV26NA4//PAYMGBAfPjhh9k5UCcffPBBnHXWWdGzZ894/fXXs3MAANhAzz//fOyzzz5x9dVX+10TAAAAAAAAAE2O4R4AAAAAAAAAAApSaWlpnHHGGdkZ1OCDDz6IoUOHZmdQgAYPHhxLly7NzqAO2rRpE5WVldkZACSrqqqK0047LY444oh47bXXsnMg1Zw5c+Kwww6LX/7yl1FVVZWdAwAAtXLZZZfFfvvtF3/5y1+yU6BWnnjiifj2t78dl156aXYKAAD1oLq6Ovr16xe9evWKWbNmZecAAAAAAAAAQK0Z7gEAAAAAAAAAoCANHDgwOnXqlJ1BDW666aZYtGhRdgYFaMGCBXH77bdnZ1BHRxxxROy7777ZGQAUgIcffjh22223uPrqq2P16tXZOdCoVq1aFVdccUXsscceMXHixOwcAACos9mzZ8d+++0XFRUV8dFHH2XnwHq99957MWDAgOjZs2e8/vrr2TkAANSzxx9/PPbaa68YPnx4fPjhh9k5AAAAAAAAAPCFDPcAAAAAAAAAAFBwysrKom/fvtkZ1GDhwoUxbNiw7AwK2Pnnnx+LFy/OzqAOWrRoEcOHD8/OAKBAVFVVRb9+/eJ73/tezJw5MzsHGsUzzzwTPXv2jP79+0dVVVV2DgAAbJTKysrYb7/94sknn8xOgX9au3Zt3HbbbbH77rvHZZddlp0DAEADGz58eHzrW9+Ke+65J9asWZOdAwAAAAAAAAA1MtwDAAAAAAAAAEDBGTlyZOywww7ZGdTg97//fSxbtiw7gwK2dOnSuOWWW7IzqKMDDzwwDjvssOwMAArIU089FXvvvXdUVFTEkiVLsnOgQbz33ntx1llnxb777hvTpk3LzgEAgHrz4osvxoEHHhinn356LFiwIDuHIjdjxozo1atX/OxnP4vFixdn5wAA0EjefPPN+PGPfxw9evSIxx57LKqrq7OTAAAAAAAAAOD/MNwDAAAAAAAAAEBBKS8vj969e2dnUIN33303hgwZkp1BE3DeeefFwoULszOog5KSkhg8eHB2BgAFqLKyMvbcc8+46667oqqqKjsH6sWaNWtiwoQJsccee8Sll16anQMAAA3mqquuit122y1+//vfxyeffJKdQ5GZP39+DBo0KLp27RqPP/54dg4AAEmeeeaZ+P73vx+HHXZYTJkyxYAPAAAAAAAAAAXFcA8AAAAAAAAAAAVlxIgR0b59++wMavDb3/7WYe3UyqpVq+LGG2/MzqCOvvWtb8XJJ5+cnQFAAZo/f34cc8wx8cMf/jBmzJiRnQMbZerUqXHggQfG8ccfH4sWLcrOAQCABrd06dLo06dPfPe7342pU6dm51AEli5dGpdeeml07tw5LrzwwuwcAAAKxMMPPxz7779/fPe7342HHnrIuCgAAAAAAAAABcFwDwAAAAAAAAAABaNdu3ZxwgknZGdQg7lz58YFF1yQnUETMnjw4Hj33XezM6ijc845J0pL3V4IwPpNnDgxunbtGqeffnq888472TlQJ6+99lqcfPLJ0aNHD4eVAwBQlKZNmxY9evSIn/3sZzFnzpzsHJqhVatWxc033xxdunSJs846K1atWpWdBABAAZoyZUr88Ic/jK5du8ZNN90U77//fnYSAAAAAAAAAEXMM+sBAAAAAAAAACgYo0eP/v+1d7+xVdZ3H8e/lH/lXynyR0qIg9IBxREKI0NhcwQnGsxmdInzwRxOnTP4ZBuJ0WWOEBY3DIpmGhCcLhIwmVnGpixTt2kIgjABp4XBWkFrQRhtaWsLBfrnfnLH3N6Zu2X38Nf293o9O9dJzvXJyXlwnZyT6x3FxcWpZ/AxHnnkkejs7Ew9gx6ko6Mj1q9fn3oG52nSpEnxwx/+MPUMALq5xx57LCZNmhSrVq2KkydPpp4D/9KxY8fiRz/6UZSXl8eTTz6Zeg4AACS3adOmmDZtWtxzzz3x3nvvpZ5DL3DmzJl49tln4wtf+ELccsstcfTo0dSTAADoASorK+Pb3/52lJSUxNKlS+O1116Ljo6O1LMAAAAAAAAAyIxwDwAAAAAAAAAA3UJZWVncdNNNqWfwMQ4ePBiPPPJI6hn0QD/5yU/inXfeST2D87RkyZIYMmRI6hkAdHMdHR1x9913x9SpU2PdunXR0tKSehJ8RH19fTz88MNRWloa999/vxApAAD8Lw888ECUlpbG8uXL49ixY6nn0AOdOnUqNm7cGDNnzoxvfOMbUVlZmXoSAAA9UEdHR6xevTrmzp0bc+bMibVr10ZVVVXqWQAAAAAAAABkQrgHAAAAAAAAAIBuYfny5SIR3djq1atTT6CH6uzsjLVr16aewXkaO3Zs3H///alnANBDnDhxIu6888743Oc+Fxs3boxTp06lnkTmGhsbY82aNTF16tT4wQ9+EG1tbaknAQBAt9XR0RHLly+P0tLSWLFiRdTW1qaeRA/Q3NwcTz31VFRUVMTNN98cBw4cSD0JAIBeYs+ePbFkyZKYMmVKXHHFFbF+/fo4dOhQ6lkAAAAAAAAA9GLCPQAAAAAAAAAAJDd9+vS44YYbUs/gY/z1r3+NdevWpZ5BD/bAAw9EVVVV6hmcp8WLF8f48eNTzwCgB6mpqYmbb745KioqYsOGDdHS0pJ6EplpaGiINWvWxJQpU+Kuu+6K+vr61JMAAKDHaGtri2XLlsWECRPi3nvvjerq6tST6IZqampi5cqVMWnSpLjtttt8TgAAuKC2bdsW3/3ud6OsrCxmz54dK1eujB07dsSpU6dSTwMAAAAAAACgFxHuAQAAAAAAAAAguRUrVsTAgQNTz+BjrFq1KvUEeoFHH3009QTOU1FRUfzsZz9LPQOAHqi6ujoWL14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aEY(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEY(8,
					"googleplay", 3,
					"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"
					), aEY(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEY(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEY(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEY(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEY(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEY(14, "bestPlayer", 5,
					"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"
					), aEY(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEY(16, "apple", 3,
					"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"
					), aEY(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEY(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEY(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEY(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEY(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEY(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e2) {
		return canvas[e2]
	}, this.aE9 = function(name) {
		for (var aA = z8.length - 1; 0 <= aA; aA--)
			if (z8[aA] === name) return canvas[aA];
		return aES
	}, this.sE = function() {
		return aER <= 0
	}, this.aEU = function() {
		aER = 0, aEV()
	}
}

function cP() {
	var aEg, aEh, aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, aEe = [
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
		aEf = [
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

	function aEv(j7, mP) {
		for (var aA = j7; aA < mP; aA++) aEg[aA] = 4 * bJ.dn(64 * aw.random(), aw.value(100)), aEh[aA] = 4 * bJ.dn(64 * aw.random(), aw.value(100)), aEi[aA] = 4 * bJ.dn(64 * aw.random(), aw.value(100))
	}

	function aEu(j7, mP) {
		for (var colorsData = aC.data.colorsData, aA = j7; aA < mP; aA++) {
			var f2 = colorsData[aA];
			aEg[aA] = 4 * (f2 >> 12), aEh[aA] = 4 * (f2 >> 6 & 63), aEi[aA] = 4 * (63 & f2)
		}
	}

	function aF6(eE, aF8) {
		aAE[eE] = 0, aAE[eE + 1] = 0, aAE[eE + 2] = aF8, aAE[eE + 3] = 0, aF9(eE)
	}

	function aF9(eE) {
		var eh;
		bZ.mX || (eh = ab.wy(eE), eE = ab.wz(eE), bZ.mX = eh >= bY.aAD[0] && eh <= bY.aAD[2] && eE >= bY.aAD[1] && eE <= bY.aAD[3])
	}
	this.ec = new Int32Array(4), this.dX = function() {
		var ec = this.ec;
		ec[0] = -4 * bQ.el, ec[1] = 4, ec[2] = -ec[0], ec[3] = -ec[1]
	}, this.dW = function() {
		if (aEg = new Uint8Array(aC.eX), aEh = new Uint8Array(aC.eX), aEi = new Uint8Array(aC.eX), aEj = new Uint8Array(aC.eX), aEk = new Uint8Array(aC.eX), aEl = new Uint8Array(aC.eX), aEm = new Uint8Array(aC.eX), aEn = new Uint8Array(aC.eX),
			aEo = new Uint8Array(aC.eX), aEp = new Uint8Array(aC.eX), this.a6p = new Uint8Array(aC.eX), aC.hQ)
			for (var aA = aC.eX - 1; 0 <= aA; aA--) {
				var ev = be.kC[be.eY[aA]],
					kY = bJ.dn((aEf[ev][3] + 1) * aw.random(), aw.value(100));
				aEg[aA] = aEe[ev][0] + kY * aEf[ev][0], aEh[aA] = aEe[ev][1] + kY * aEf[ev][1], aEi[aA] = aEe[ev][2] + kY * aEf[ev][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aEu(0, aC.jq), aEv(aC.jq, aC.eX)) : aEv(0, aC.eX) : aEu(0, aC.eX);
		! function() {
			var aA, ed;
			for (aA = aC.eX - 1; 0 <= aA; aA--) ed = bJ.dn(aEg[aA] + aEh[aA] + aEi[aA], 3), aEg[aA] += aF1(ed - aEg[aA], 2), aEh[aA] += aF1(ed - aEh[aA], 2), aEi[aA] += aF1(ed - aEi[aA], 2), aEg[aA] -= aEg[aA] % 4, aEh[aA] -= aEh[aA] % 4, aEi[
				aA] -= aEi[aA] % 4
		}(),
		function() {
			for (var aA = aC.eX - 1; 0 <= aA; aA--) aEg[aA] += bJ.dn(aA, 128), aEh[aA] += bJ.dn(aA % 128, 32), aEi[aA] += bJ.dn(aA % 32, 8), aEj[aA] = aA % 8
		}(), this.aEy(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aEk[aA] = aEg[aA] < 32 ? aEg[aA] + 32 : aEg[aA] - 32, aEl[aA] = aEh[aA] < 32 ? aEh[aA] + 32 : aEh[aA] - 32, aEm[aA] = aEi[aA] < 32 ? aEi[aA] + 32 : aEi[aA] - 32
			}(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aEn[aA] = 235 < aEg[aA] ? aEg[aA] - 20 : aEg[aA] + 20, aEo[aA] = 235 < aEh[aA] ? aEh[aA] - 20 : aEh[aA] + 20, aEp[aA] = 235 < aEi[aA] ? aEi[aA] - 20 : aEi[aA] + 20
			}()
	}, this.a5o = function(player) {
		var g = bM.fA;
		return g[0] = aEg[player], g[1] = aEh[player], g[2] = aEi[player], g
	}, this.aEy = function() {
		for (var aA = aC.eX - 1; 0 <= aA; aA--) this.a6p[aA] = aEg[aA] + aEh[aA] + aEi[aA] < 280 ? 0 : 1
	}, this.wy = function(eE) {
		return bJ.dn(eE, 4) % bQ.el
	}, this.wz = function(eE) {
		return bJ.dn(eE, 4 * bQ.el)
	}, this.wY = function(eh, ej) {
		return Math.floor(4 * (ej * bQ.el + eh))
	}, this.wo = function(eE) {
		var ec = this.ec;
		return this.aF2(eE + ec[0]) || this.aF2(eE + ec[1]) || this.aF2(eE + ec[2]) || this.aF2(eE + ec[3])
	}, this.ez = function(eE) {
		var ec = this.ec;
		return this.ef(eE + ec[0]) || this.ef(eE + ec[1]) || this.ef(eE + ec[2]) || this.ef(eE + ec[3])
	}, this.wm = function(eE, player) {
		var ec = this.ec;
		return this.aF3(eE + ec[0], player) || this.aF3(eE + ec[1], player) || this.aF3(eE + ec[2], player) || this.aF3(eE + ec[3], player)
	}, this.gA = function(eE) {
		return 208 <= aAE[eE + 3]
	}, this.wt = function(player, eE) {
		return this.gA(eE) && this.aF4(player, eE)
	}, this.aF4 = function(player, eE) {
		return player === this.eS(eE)
	}, this.aF5 = function(eE) {
		return 208 <= aAE[eE + 3] && aAE[eE + 3] < 224
	}, this.j3 = function(eE) {
		return 224 <= aAE[eE + 3] && aAE[eE + 3] < 248
	}, this.wn = function(eE) {
		for (var ec = this.ec, aA = 3; 0 <= aA; aA--)
			if (this.h3(eE + ec[aA])) return !0;
		return !1
	}, this.eV = function(eE) {
		return this.gA(eE) || this.eR(eE)
	}, this.h3 = function(eE) {
		return 0 === aAE[eE + 3] && 2 === aAE[eE + 2]
	}, this.eR = function(eE) {
		return 0 === aAE[eE + 3] && 1 === aAE[eE + 2]
	}, this.vd = function(eE) {
		return 0 === aAE[eE + 3] && 3 === aAE[eE + 2]
	}, this.ef = function(eE) {
		return 0 === aAE[eE + 3] && 5 <= aAE[eE + 2]
	}, this.aF2 = function(eE) {
		return 0 === aAE[eE + 3] && 3 <= aAE[eE + 2]
	}, this.eI = function(eE) {
		return aAE[eE + 2] - 5
	}, this.aF3 = function(eE, player) {
		return this.eR(eE) || this.gA(eE) && player !== this.eS(eE)
	}, this.eS = function(eE) {
		return aAE[eE] % 4 * 128 + aAE[eE + 1] % 4 * 32 + aAE[eE + 2] % 4 * 8 + aAE[eE + 3] % 8
	}, this.wu = function(eE) {
		aF6(eE, 1)
	}, this.aF7 = function(eE) {
		aF6(eE, 2)
	}, this.wZ = function(eE, player) {
		aAE[eE] = aEg[player], aAE[eE + 1] = aEh[player], aAE[eE + 2] = aEi[player], aAE[eE + 3] = 208 + aEj[player], aF9(eE)
	}, this.g5 = function(eE, player) {
		aAE[eE] = aEk[player], aAE[eE + 1] = aEl[player], aAE[eE + 2] = aEm[player], aAE[eE + 3] = 224 + aEj[player], aF9(eE)
	}, this.j4 = function(eE, player) {
		aAE[eE] = aEn[player], aAE[eE + 1] = aEo[player], aAE[eE + 2] = aEp[player], aAE[eE + 3] = 248 + aEj[player], aF9(eE)
	}
}

function cn() {
	var e2 = 0,
		aFA = new Uint16Array(32);

	function remove(a3u) {
		var aA;
		for (e2 -= 2, aA = a3u; aA < e2; aA += 2) aFA[aA] = aFA[aA + 2], aFA[aA + 1] = aFA[aA + 3]
	}
	this.dW = function() {
		e2 = 0
	}, this.ik = function() {
		var aA, j1, iA;
		if (0 !== e2)
			if (0 === af.le[aC.eK] || ac.aFB(aC.eK) === ac.fg(aC.eK)) e2 = 0;
			else
				for (aA = e2 - 2; 0 <= aA; aA -= 2)(j1 = aFA[aA]) < aC.eX && 0 === af.le[j1] ? remove(aA) : (iA = aFA[aA + 1], (j1 >= aC.eX && aFC(aC.eK) || j1 < aC.eX && aFD(aC.eK, j1)) && (b6.gx.h8(iA, j1), remove(aA)))
	}, this.hA = function(j1, iA) {
		! function(j1, iA) {
			var aA;
			for (aA = 0; aA < e2; aA += 2)
				if (aFA[aA] === j1) return aFA[aA + 1] = Math.min(aFA[aA + 1] + iA, 1023), 1;
			return
		}(j1, iA) && 32 !== e2 && (aFA[e2] = j1, aFA[e2 + 1] = iA, e2 += 2)
	}
}

function cQ() {
	function aFK(player) {
		var dm;
		b8.fw.a2F(player) && (dm = af.gc[player] - af.a2J[player] + ac.aFM(player), bb.g0(player, Math.abs(dm), dm < 0 ? 18 : 12)), af.gc[player] = 0, af.a2J[player] = 0
	}

	function aFT() {
		aW.show(!1, !1, !1, !0), aV.a9O(), bP.yX.zH()
	}

	function aFH(player, aFS) {
		for (var aA = aFS.length - 1; 0 <= aA; aA--) ac.aFV(aFS[aA], player)
	}

	function aFJ(player) {
		for (var iP = af.iP, iQ = af.iQ, iR = af.iR, iS = af.iS, m7 = iP[player], m8 = iR[player], el = bQ.el, gO = af.gO, eh = iQ[player]; m7 <= eh; eh--)
			for (var ej = iS[player]; m8 <= ej; ej--) {
				var g8 = 4 * (ej * el + eh);
				ab.wt(player, g8) && (ab.wu(g8), gO[player]--)
			}
		iQ[player] = iS[player] = 0, iP[player] = iR[player] = Math.max(el, bQ.em)
	}
	this.df = function(g8) {
		var player, dm = af.gO[g8];
		bL.x.om[g8] ? dm && (aFH(player = g8, ac.aFI(player)), aFJ(player), aE.fy(player), ac.clear(player), aFK(player), function(player) {
			af.wU[player] = 0, af.g2[player] = [], af.gG[player] = [], af.gH[player] = [], af.f0[player] = []
		}(player)) : !dm && af.g2[g8].length || this.aFG(g8)
	}, this.aFG = function(player) {
		! function(player) {
			b8.fw.jE(player) || (af.zK[player] = bg.zb.aFR(), aC.yo++);
			var aFS = ac.aFI(player);
			0 === aFS.length ? b8.fw.a2C(player) && aFT() : (aFH(player, aFS), function(player, aFS) {
				var aFX = aFS[function(aFS) {
					var aA, e2 = 0;
					for (aA = aFS.length - 1; 1 <= aA; aA--) af.gO[aFS[aA]] > af.gO[aFS[e2]] && (e2 = aA);
					return e2
				}(aFS)];
				9 === aC.k7 && 1 === be.eY[player] && aw.ji(8) && ax.aFY(aFX);
				if (b8.fw.a2C(player)) aFT(), aM.yy(aFX, 1);
				else {
					for (var aA = aFS.length - 1; 0 <= aA; aA--)
						if (b8.fw.a2F(aFS[aA]) && (bb.la[4 - b8.fw.jE(player)]++, b8.fw.a2C(aFS[aA]))) return aM.yy(player, 0);
					b8.fw.jE(player) || aM.a56(0, player, aFX)
				}
			}(player, aFS))
		}(player), aFJ(player), aFK(player),
			function(player) {
				af.le[player] = 0, af.g2[player] = null, af.gG[player] = null, af.gH[player] = null, af.f0[player] = null
			}(player), aE.fy(player), ac.clear(player), bL.aFP.aFQ(player)
	}
}

function cs() {
	var input;

	function aFZ(e) {
		(e = e.target.files) && 0 < e.length && b4.aFc(e[0])
	}

	function aFg(e) {
		var ev = new Image;
		ev.onload = aFh, ev.src = e.target.result
	}

	function aFh(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aFj || j > bQ.aFj || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aFj + ".", z.uF ? z.uF.showToast(e) : alert(e)) : 20 === s.rm && s.aDB().aFh(canvas)
	}
	this.dW = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFZ
	}, this.t8 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFa = function() {
		input.click()
	}, this.aFc = function(aFd) {
		var g = aFd.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFg, g.readAsDataURL(aFd))
	}
}

function cq() {
	this.aFl = null, this.dW = function() {
		10 !== aC.k7 ? this.aFl = null : this.aFl = new Uint32Array(aC.eX)
	}, this.ik = function() {
		10 === aC.k7 && this.qj()
	}, this.qj = function() {
		for (var g8, target, a9Z, aFl = this.aFl, ya = ak.js, a2K = af.gc, aA = ak.jr - 1; 0 <= aA; aA--)(g8 = ya[aA]) >= aC.jq || (target = Math.max(bJ.dn(a2K[g8], 4), 2048), a9Z = Math.max(ad.a9a(g8), 100), aFl[g8] += bJ.dn(a9Z * target, 1e4),
			aFl[g8] > target && (aFl[g8] = target))
	}, this.a2Q = function(player, hF) {
		return hF > this.aFl[player] ? (hF = this.aFl[player], this.aFl[player] = 0) : this.aFl[player] -= hF, hF
	}
}

function dS() {
	function aFn(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aFv, g.readAsText(e))
	}

	function aFv(e) {
		var aFz;
		aC.ym || (e = JSON.parse(e.target.result), aFz = aC.data = new a3G, aG0(e, aFz, "mapType", 0, 2), aG0(e, aFz, "mapProceduralIndex", 0, 255), aG0(e, aFz, "mapRealisticIndex", 0, 255), aG0(e, aFz, "mapSeed", 0, 16383), function(aFy, aFz, g9,
				max) {
				aFy = aFy[g9];
				aFz[g9] = aG6(aFy) ? aFy.slice(0, max) : aFz[g9]
			}(e, aFz, "mapName", 20), function(aFy, aFz, g9) {
				var aFi;
				2 === aFz.mapType && (!aG6(aFy = aFy[g9]) || aFy.length <= 20 ? aFz.mapType = 0 : ((aFi = new Image).onload = function() {
					b7.aG7.aG8(aFi, 1), aFi.onload = null, aFi = null
				}, aFi.src = aFy))
			}(e, aFz, "canvas"), aG0(e, aFz, "passableWater", 0, 1), aG0(e, aFz, "passableMountains", 0, 1), aG0(e, aFz, "playerCount", 1, 512), aG0(e, aFz, "humanCount", 1, 1), aG0(e, aFz, "selectedPlayer", 0, 0), aG0(e, aFz, "gameMode", 0, 1),
			aG0(e, aFz, "playerMode", 0, 0), aG0(e, aFz, "battleRoyaleMode", 0, 0), aG0(e, aFz, "numberTeams", 0, 8), aG0(e, aFz, "isZombieMode", 0, 0), aG0(e, aFz, "isContest", 0, 0), aG0(e, aFz, "isReplay", 0, 0), aG3(e, aFz, "elo", 16, 2,
				16383), aG0(e, aFz, "colorsType", 0, 1), aG0(e, aFz, "colorsPersonalized", 0, 1), aG3(e, aFz, "colorsData", 32, 512, 262143), aG0(e, aFz, "selectableColor", 0, 1), aG3(e, aFz, "teamPlayerCount", 16, 9, 512), aG0(e, aFz,
				"neutralBots", 0, 1), aG0(e, aFz, "botDifficultyType", 0, 3), aG0(e, aFz, "botDifficultyValue", 0, 15), aG3(e, aFz, "botDifficultyTeam", 8, 9, 15), aG3(e, aFz, "botDifficultyData", 8, 512, 15), aG0(e, aFz, "spawningType", 0, 2),
			aG0(e, aFz, "spawningSeed", 0, 16383), aG3(e, aFz, "spawningData", 16, 1024, 4095), aG0(e, aFz, "selectableSpawn", 0, 1), aG0(e, aFz, "playerNamesType", 0, 2),
			function(aFy, aFz, g9, size, max) {
				var a1Q = aFy[g9];
				if (Array.isArray(a1Q)) {
					for (var a1R = new Array(size), ea = Math.min(a1Q.length, size), aA = 0; aA < ea; aA++) a1R[aA] = aG6(a1Q[aA]) ? a1Q[aA].slice(0, max) : "";
					aFz[g9] = a1R
				}
			}(e, aFz, "playerNamesData", 512, 20), aG0(e, aFz, "selectableName", 0, 1), aG0(e, aFz, "aIncomeType", 0, 2), aG0(e, aFz, "aIncomeValue", 0, 255), aG3(e, aFz, "aIncomeData", 8, 512, 255), aG0(e, aFz, "tIncomeType", 0, 2), aG0(e, aFz,
				"tIncomeValue", 0, 255), aG3(e, aFz, "tIncomeData", 8, 512, 255), aG0(e, aFz, "iIncomeType", 0, 2), aG0(e, aFz, "iIncomeValue", 0, 255), aG3(e, aFz, "iIncomeData", 8, 512, 255), aG0(e, aFz, "sResourcesType", 0, 2), aG0(e, aFz,
				"sResourcesValue", 0, 2047), aG3(e, aFz, "sResourcesData", 16, 512, 2047), s.w(), s.x.aFx[0] = 0, s.t(19))
	}

	function aG0(aFy, aFz, g9, min, max) {
		aFy = aFy[g9];
		aFz[g9] = "number" == typeof aFy && min <= aFy && aFy <= max ? Math.floor(aFy) : aFz[g9]
	}

	function aG6(pG) {
		return "string" == typeof pG
	}

	function aG3(aFy, aFz, g9, aG9, size, max) {
		var a1Q = aFy[g9];
		if (Array.isArray(a1Q)) {
			for (var a1R = new(8 === aG9 ? Uint8Array : 16 === aG9 ? Uint16Array : Uint32Array)(size), ea = Math.min(a1Q.length, size), aA = 0; aA < ea; aA++) a1R[aA] = bJ.p7(a1Q[aA], 0, max);
			aFz[g9] = a1R
		}
	}
	this.aFm = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aFn, input.click()
	}, this.aFo = function() {
		for (var aFr, aAo, a67 = aC.data, keys = Object.keys(a67), aFp = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a67[key] instanceof Uint8Array || a67[key] instanceof Uint16Array || a67[key] instanceof Uint32Array ? aFp[key] = Array.from(a67[key]) : aFp[key] = a67[key]
		}
		aFp.canvas = 2 === aFp.mapType && aFp.canvas ? aFp.canvas.toDataURL() : null, aFr = aFp, aFr = JSON.stringify(aFr, null, 2), aFr = new Blob([aFr], {
			type: "application/json"
		}), (aAo = document.createElement("a")).href = URL.createObjectURL(aFr), aAo.download = "tt_scenario.json", aAo.click()
	}
}

function cT() {
	var aGA, aGB, size, j1, hF, id, aGC;

	function aGD(player) {
		return player < aC.jq ? aGA * player : aGA * aC.jq + aGB * (player - aC.jq)
	}
	this.dW = function() {
		aGA = aC.jq < 16 ? 12 : 8, aGB = 4;
		var ea = aGD(aC.eX);
		size = new Uint8Array(aC.eX), j1 = new Uint16Array(ea), hF = new Uint32Array(ea), id = new Uint16Array(ea), aGC = new Uint8Array(ea)
	}, this.p6 = function(a6K, aGE) {
		var aGF = this.gd(a6K, aGE),
			aGE = (this.gb(a6K, aGE, 0), b8.fw.fz(a6K, aGF));
		bb.g0(a6K, aGF - aGE, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFV = function(player, aGE) {
		var aGI, aGE = function(player, aGE) {
			var aA, kY = aGD(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kY + aA] && j1[kY + aA] === aGE) return aA;
			return size[player]
		}(player, aGE);
		aGE !== size[player] && (aGI = hF[aGD(player) + aGE], this.g1(player, aGE), this.iy(player, aGI, aC.eX))
	}, this.jC = function(player, aGE) {
		for (var kY = aGD(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kY + aA] && j1[kY + aA] === aGE) return !0;
		return !1
	}, this.jU = function(player) {
		return player < aC.jq ? size[player] < aGA : size[player] < aGB
	}, this.fg = function(player) {
		return size[player]
	}, this.fm = function(player, aA) {
		return j1[aGD(player) + aA]
	}, this.fh = function(player, aA) {
		return id[aGD(player) + aA]
	}, this.aGJ = function(player, aGK) {
		for (var kY = aGD(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kY + aA] === aGK) return aA;
		return -1
	}, this.fn = function(player, aA) {
		return hF[aGD(player) + aA]
	}, this.gd = function(player, aGE) {
		for (var kY = aGD(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kY + aA] && j1[kY + aA] === aGE) return hF[kY + aA];
		return 0
	}, this.aFM = function(player) {
		for (var kY = aGD(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) f2 += hF[kY + aA];
		return f2
	}, this.aGL = function(player) {
		for (var kY = aGD(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kY + aA] && (f2 += hF[kY + aA]);
		return f2
	}, this.aFB = function(player) {
		for (var kY = aGD(player), g3 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kY + aA] && g3++;
		return g3
	}, this.gb = function(player, aGE, aGI) {
		for (var kY = aGD(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kY + aA] && j1[kY + aA] === aGE && (hF[kY + aA] = aGI)
	}, this.gM = function(player, aA, aGI) {
		hF[aGD(player) + aA] = Math.max(aGI, 0)
	}, this.gN = function(player, aA) {
		aGC[aGD(player) + aA] = 0
	}, this.fo = function(player, aA) {
		return aGC[aGD(player) + aA]
	}, this.iy = function(player, aGI, aGE) {
		b8.fw.a2F(aGE) && bb.la[6 - b8.fw.jE(player)]++;
		for (var kY = aGD(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kY + aA] && j1[kY + aA] === aGE) return hF[kY + aA] += aGI, void(hF[kY + aA] = hF[kY + aA] > aC.a2M ? aC.a2M : hF[kY + aA]);
		j1[kY + size[player]] = aGE, hF[kY + size[player]] = aGI, id[kY + size[player]] = 0, aGC[kY + size[player]] = 1, size[player]++, player < aC.jq && (aGE === aC.eK ? aM.yy(player, 5) : player === aC.eK && ae.a58(aGE))
	}, this.aGM = function(player, aGI, aGK) {
		var kY = aGD(player);
		j1[kY + size[player]] = 0, hF[kY + size[player]] = aGI, id[kY + size[player]] = aGK, aGC[kY + size[player]] = 0, size[player]++
	}, this.g1 = function(player, e2) {
		var et, kY;
		if (0 !== size[player])
			for (kY = aGD(player), size[player]--, et = e2; et < size[player]; et++) j1[kY + et] = j1[kY + et + 1], hF[kY + et] = hF[kY + et + 1], id[kY + et] = id[kY + et + 1], aGC[kY + et] = aGC[kY + et + 1]
	}, this.aFI = function(player) {
		for (var et, kY, aFS = [], aA = ak.jr - 1; 0 <= aA; aA--)
			for (kY = aGD(ak.js[aA]), et = size[ak.js[aA]] - 1; 0 <= et; et--)
				if (0 === id[kY + et] && j1[kY + et] === player) {
					aFS.push(ak.js[aA]);
					break
				} return aFS
	}
}

function cU() {
	var aGN;

	function aGP(player) {
		var e1, jV;
		return b8.fw.jE(player) && player < aC.jq ? 0 : (e1 = aGN[bJ.dn((aC.eX - 1) * af.gO[player], aC.ja)], bd.jn() < 1920 && (e1 = Math.max(bJ.dn(100 * (13440 - 6 * bd.jn()), 1920), e1)), jV = ad.jW(player), af.gc[player] > jV && (e1 -= bJ.dn(2 *
			e1 * (af.gc[player] - jV), jV)), Math.min(Math.max(e1, 0), 700))
	}

	function aGb(mJ) {
		for (var gO = af.gO, js = ak.js, aA = ak.jr - 1; 0 <= aA; aA--) {
			var g8 = js[aA];
			b8.fw.fz(g8, bJ.dn(mJ * gO[g8], 32))
		}
	}

	function aGY() {
		var vV = aC.eK;
		bM.f7[0] = af.gc[vV] - af.a2J[vV]
	}

	function aGa(e2) {
		var vV = aC.eK;
		bb.la[e2] += af.gc[vV] - af.a2J[vV] - bM.f7[0]
	}
	this.dd = function() {
		for (var ea = aC.eX, aA = (aGN = new Uint16Array(ea), 0); aA < ea; aA++) aGN[aA] = 100 + aGO(bJ.dn(25600 * aA, ea - 4), 9)
	}, this.dW = function() {
		0 === aC.data.iIncomeType ? this.a9a = aGP : 1 === aC.data.iIncomeType ? this.a9a = function(player) {
			return bJ.dn(aC.data.iIncomeValue * aGP(player), 64)
		} : this.a9a = function(player) {
			return bJ.dn(aC.data.iIncomeData[player] * aGP(player), 64)
		}
	}, this.ik = function() {
		if (bd.jn() % 10 == 9 && (function() {
				aGY();
				for (var js = ak.js, gc = af.gc, aA = ak.jr - 1; 0 <= aA; aA--) {
					var g8 = js[aA],
						aGZ = bJ.dn(ad.a9a(g8) * gc[g8], 1e4);
					b8.fw.fz(g8, Math.max(aGZ, 1))
				}
				aGa(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGY(), 1 === aC.data.aIncomeType)
						for (var gO = af.gO, js = ak.js, mJ = aC.data.aIncomeValue, aA = ak.jr - 1; 0 <= aA; aA--) {
							var g8 = js[aA];
							b8.fw.fz(g8, bJ.dn(mJ * gO[g8], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gO = af.gO, js = ak.js, mJ = aC.data.aIncomeData, aA = ak.jr - 1; 0 <= aA; aA--) {
								var g8 = js[aA];
								b8.fw.fz(g8, bJ.dn(mJ[g8] * gO[g8], 128))
							}
						}();
					aGa(18)
				}
			}(), bd.jn() % 100 == 99)) {
			if (aGY(), 0 === aC.data.tIncomeType) aGb(32);
			else if (1 === aC.data.tIncomeType) aGb(aC.data.tIncomeValue);
			else
				for (var gO = af.gO, js = ak.js, mJ = aC.data.tIncomeData, aA = ak.jr - 1; 0 <= aA; aA--) {
					var g8 = js[aA];
					b8.fw.fz(g8, bJ.dn(mJ[g8] * gO[g8], 32))
				}
			aGa(8)
		}
	}, this.jW = function(player) {
		return Math.min(100 * af.gO[player], aC.a3C)
	}, this.o1 = function(player, o2) {
		b8.fw.fz(o2, bM.f8[0]), bb.oN(player, o2), ae.aGR(player, bM.f8[0] + bM.f8[1]), ae.oO(o2, bM.f8[0]), b8.fw.ow(player)
	}, this.aGS = function() {
		for (var ea = ak.jr, ya = ak.js, kY = 0, a2K = af.gc, aA = 0; aA < ea; aA++) kY += a2K[ya[aA]];
		return kY
	}, this.aGT = function(aGU) {
		for (var g8, ea = ak.jr, ya = ak.js, kY = 0, a2K = af.gc, eY = be.eY, aA = 0; aA < ea; aA++) eY[g8 = ya[aA]] === aGU && (kY += a2K[g8]);
		return kY
	}
}

function cW() {
	var aGf, aGg, aGh, aGi, aGj, aGk, aGl, aGm, aGn, aGo, aGp, aGq, aGr, aGs, aGt, aGu, aGv, aGw, aGy, aGz, aAh, aH0, aH1, aH8, aH9, aGx = null,
		aH3 = 0,
		aH4 = !1,
		aH5 = new Float32Array(4),
		aH6 = 0,
		aH7 = !0,
		a8l = 400,
		aHA = 0;

	function pd() {
		aGn = Math.floor(+h.pb), aGo = Math.floor(.5 * aGn)
	}

	function aHB() {
		var aA, aHG;
		for (tf.font = b8.pZ.rN(1, 100 * aGp), aHG = 80 / Math.floor(tf.measureText(b8.zN.y4(aC.a2M)).width), tf.font = b8.pZ.rN(1, 100), aA = aC.eX - 1; 0 <= aA; aA--) aGm[aA] = 100 / Math.floor(tf.measureText(af.zL[aA]).width), aGl[aA] = Math.min(
			aHG, aGm[aA])
	}

	function aHH(aA) {
		return !aHA || (aA = af.gc[aA]) < 1e6 ? 1 : aA < 1e7 ? aH5[0] : aH5[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHF(hY) {
		aGw = !1, aGv = 1, aGt = aGu = 0, aH7 && (b8.pZ.textAlign(hY, 1), b8.pZ.textBaseline(hY, 1));
		for (var aHN, aHO, aA, aHP, fontSize, aHQ, m7 = iB / iC, m8 = iD / iC, mK = (h.i + iB) / iC, mL = (h.j + iD) / iC, aHR = 0 !== af.le[aC.eK] && !b8.fw.jE(aC.eK), et = ak.jr - 1; 0 <= et; et--) aA = ak.js[et], (fontSize = Math.floor(aGs * iC *
			aHH(aA) * aGl[aA] * aGj[aA])) < aGr || aGn <= fontSize || aGh[aA] + aGj[aA] > m7 && aGh[aA] < mK && aGi[aA] + aGk[aA] > m8 && aGi[aA] < mL && (aHN = Math.floor(h.i * (aGh[aA] + aGj[aA] / 2 - m7) / (mK - m7)), aHO = Math.floor(h.j * (
			aGi[aA] + aGk[aA] / 2 - m8) / (mL - m8) - .1 * fontSize), aHP = ab.a6p[aA], hY.font = b8.pZ.rN(1 === af.a2B[aA] ? 4 : 1, fontSize), hY.fillStyle = aHS(fontSize, aHP % 2), aHA ? aHT(hY, aA, fontSize, aHN, aHO, aHP) : aHU(aA,
			fontSize, aHN, aHO, hY), aGw = !0, 0 < aAh[aA] ? function(aHN, aHO, fontSize, aA, hY) {
			0 === jb[aA] ? ai.qp.xv(aGz[aA]) ? (function(aHN, aHO, fontSize, player, oC, hY) {
				for (var w3 = aHO, hX = (hY.globalAlpha = aHc(fontSize), aHH(player) * (aHA ? aH6 : aGm[player])), w2 = aHN - .5 * fontSize / hX - .9 * fontSize, eu = 0; eu < 2; eu++) hY.fillText(ai.qp.xp(oC), w2, w3), w2 = aHN + .5 *
					fontSize / hX + .9 * fontSize;
				hY.globalAlpha = 1
			}(aHN, aHO, fontSize, aA, aGz[aA], hY), aHW(aHN, aHO, fontSize, 0, 0, hY)) : ai.qp.xx(aGz[aA]) ? (aHf(aHN, aHO, fontSize, aGz[aA], 0, hY), aHW(aHN, aHO, fontSize, 0, 1, hY)) : (aHf(aHN, aHO, fontSize, aGz[aA], 1, hY), aHW(aHN,
				aHO, fontSize, 1, 0, hY)) : aHf(aHN, aHO, fontSize, aGz[aA], 0, hY)
		}(aHN, aHO, fontSize, aA, hY) : 0 === jb[aA] && aHW(aHN, aHO, fontSize, 0, 0, hY), aHR && (0 < aAh[aA + aC.eX] || 0 < aAh[aA + 2 * aC.eX] || 0 < aAh[aA + 3 * aC.eX] || 0 < aAh[aA + 4 * aC.eX]) && function(aHN, aHO, fontSize, aA, hY) {
			var ev, g3 = -1;
			for (ev = 4; 1 <= ev; ev--) 0 < aAh[aA + ev * aC.eX] && g3++;
			for (ev = 1; ev < 5; ev++) 0 < aAh[aA + ev * aC.eX] && (! function(aHN, aHO, fontSize, ev, aA, aHa, dm, hY) {
				var a1e;
				if (1 === ev) {
					aA = aGz[aA + aC.eX];
					if (!ai.qp.xw(aA)) return function(aHN, aHO, fontSize, oC, aHa, hY) {
						hY.globalAlpha = aHc(fontSize);
						aHN -= .534 * aHa * fontSize, aHa = aHO + 1.59 * fontSize;
						hY.font = b8.pZ.rN(0, .785 * fontSize), hY.fillText(ai.qp.xp(oC), aHN, aHa), hY.globalAlpha = 1
					}(aHN, aHO, fontSize, aA, aHa, hY);
					a1e = ai.vU.xO[aA - 1024 + ai.qp.xa]
				} else a1e = 2 === ev ? aK.a3s()[4].canvas[+(dm < 255)] : (3 === ev ? aK.a3s()[5] : aK.a3s()[6]).canvas[0];
				aA = ai.vU.xP, dm = .8 * fontSize / aA, ev = aHN - .5 * dm * aA - .534 * aHa * fontSize, aHN = aHO + 1.4 * dm * aA;
				hY.setTransform(dm, 0, 0, dm, ev, aHN), hY.globalAlpha = aHc(fontSize), hY.drawImage(a1e, 0, 0), hY.globalAlpha = 1, hY.setTransform(1, 0, 0, 1, 0, 0)
			}(aHN, aHO, fontSize, ev, aA, g3, aAh[aA + ev * aC.eX], hY), g3 -= 2)
		}(aHN, aHO, fontSize, aA, hY), (aHQ = aGp * fontSize) < aGr || (hY.font = b8.pZ.rN(1, aHQ), aHO += Math.floor(.78 * fontSize), aHA ? aHU(aA, aHQ, aHN, aHO, hY) : aHT(hY, aA, aHQ, aHN, aHO, aHP)))
	}

	function aHU(aA, fontSize, eh, ej, hY) {
		var ___id = aA;
		var showName = aA < aC.jq || !__fx.settings.hideBotNames;
		if (showName) hY.fillText(af.zL[aA], eh, ej), aA < aC.jq && 2 !== af.a2B[aA] || (aA = fontSize / aGm[aA], hY.fillRect(eh - .5 * aA, ej + b8.pZ.xq * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHA && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hY.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hY.fillText(__fx.utils.getDensity(___id), eh, showName ? ej + fontSize : ej)
		);
	}

	function aHT(hY, aA, fontSize, aHN, aHO, aHP) {
		var ___id = aA;
		aA = b8.zN.y4(af.gc[aA]);
		aHP >> 1 & 1 ? (hY.lineWidth = .05 * fontSize, hY.strokeStyle = aHS(fontSize, aHP % 2), hY.strokeText(aA, aHN, aHO)) : (1 < aHP && (hY.lineWidth = .12 * fontSize, hY.strokeStyle = aHS(fontSize, aHP), hY.strokeText(aA, aHN, aHO)), hY.fillText(
			aA, aHN, aHO));
		aHA || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hY.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hY.fillText(__fx.utils.getDensity(___id), aHN, aHO + fontSize))
	}

	function aHW(aHN, aHO, fontSize, aHa, aHb, hY) {
		var a4R = .95 * fontSize / aH1,
			aHN = aHN - .5 * a4R * aH0 + .8 * aHa * fontSize,
			aHa = aHO - 1.76 * a4R * aH1 - (.35 - b8.pZ.xq + .7) * aHb * fontSize;
		hY.setTransform(a4R, 0, 0, a4R, aHN, aHa), hY.globalAlpha = aHc(fontSize), hY.drawImage(aa.get(4), 0, 0), hY.globalAlpha = 1, hY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHf(aHN, aHO, fontSize, oC, aHa, hY) {
		var hS, w2, a4R;
		hY.globalAlpha = aHc(fontSize), ai.qp.xw(oC) ? (hS = ai.vU.xP, hY.setTransform(a4R = 1.1 * fontSize / hS, 0, 0, a4R, w2 = aHN - .5 * a4R * hS - .8 * aHa * fontSize, a4R = aHO - 1.55 * a4R * hS), hY.drawImage(ai.vU.xO[oC - 1024 + ai.qp.xa], 0,
			0), hY.setTransform(1, 0, 0, 1, 0, 0)) : (w2 = aHN - .8 * aHa * fontSize, a4R = aHO - (.35 - b8.pZ.xq + 1) * fontSize, hY.fillText(ai.qp.xp(oC), w2, a4R)), hY.globalAlpha = 1
	}

	function aHS(fontSize, aHP) {
		return aGo <= fontSize && fontSize < aGn ? be.aHh[aHP] + aHc(fontSize).toFixed(3) + ")" : be.aHi[aHP]
	}

	function aHc(fontSize) {
		return aGo <= fontSize && fontSize < aGn ? 1 - (fontSize - aGo) / (aGn - aGo) : 1
	}

	function aHr(hX, i) {
		return 1 + Math.floor(aGq * hX * i)
	}

	function aHo(aA) {
		for (var left = aGh[aA], et = aGh[aA] - af.iP[aA] - 1; 0 <= et; et--)
			if (!aHt(aA, --left, aGi[aA], aGk[aA])) {
				left++;
				break
			} var right = aGh[aA];
		for (et = af.iQ[aA] - aGh[aA] - aGj[aA]; 0 <= et; et--)
			if (!aHt(aA, ++right + aGj[aA] - 1, aGi[aA], aGk[aA])) {
				right--;
				break
			} var eh = Math.floor((left + right) / 2),
			top = aGi[aA];
		for (et = aGi[aA] - af.iR[aA] - 1; 0 <= et; et--)
			if (!aHu(aA, eh, --top, aGj[aA])) {
				top++;
				break
			} var bottom = aGi[aA];
		for (et = af.iS[aA] - aGi[aA] - aGk[aA]; 0 <= et; et--)
			if (!aHu(aA, eh, ++bottom + aGk[aA] - 1, aGj[aA])) {
				bottom--;
				break
			} var ej = Math.floor((top + bottom) / 2);
		aHl(aA, eh, ej, aGj[aA], aGk[aA]) && (aGh[aA] = eh, aGi[aA] = ej)
	}

	function aHl(player, eh, ej, i, j) {
		ed = Math.floor(.2 * i);
		for (var ed, ev = eh + i - 1; eh <= ev; ev--)
			if (!aHt(player, ev, ej, j)) return;
		for (ev = ej + j - 1 - (ed = (ed = Math.floor(.25 * j)) < 1 ? 1 : ed); ej + ed <= ev; ev--)
			if (!aHu(player, eh, ev, i)) return;
		return 1
	}

	function aHt(player, eh, ej, j) {
		return ab.wt(player, 4 * (ej * bQ.el + eh)) && ab.wt(player, 4 * ((ej + j - 1) * bQ.el + eh))
	}

	function aHu(player, eh, ej, i) {
		return ab.wt(player, 4 * (ej * bQ.el + eh)) && ab.wt(player, 4 * (ej * bQ.el + eh + i - 1))
	}
	this.dW = function() {
		if (aHA = bh.dr.data[7].value || 8 === aC.k7, a8l = 0 === (a8l = bh.dr.data[11].value) ? 280 : 1 === a8l ? 187 : 112, aGw = !1, aGs = .88, aGp = .5, aGq = 1.8, aGr = 12 - 3 * bh.dr.data[9].value, aGg = aGf = 0, aGh = new Uint16Array(aC
				.eX), aGi = new Uint16Array(aC.eX), aGj = new Uint16Array(aC.eX), aGk = new Uint16Array(aC.eX), aGl = new Float32Array(aC.eX), aGm = new Float32Array(aC.eX), aGz = new Uint16Array(2 * aC.eX), aAh = new Uint8Array(5 * aC.eX), aH8 =
			new Uint8Array(aC.eX), aH9 = new Uint8Array(aC.eX), aH7 || (aGx = aGx || document.createElement("canvas")), pd(), aGu = aGt = 0, aGv = 1, aHA) {
			var aA, aHG;
			for (aHB(), tf.font = b8.pZ.rN(1, 100), aHG = 100 / Math.floor(tf.measureText("900 000").width), aA = aC.eX - 1; 0 <= aA; aA--) aGl[aA] = Math.min(aHG, 2 * aGm[aA]);
			aH6 = aHG, aH5[0] = 100 / (aHG * Math.floor(tf.measureText("5 000 000").width)), aH5[1] = 100 / (aHG * Math.floor(tf.measureText("50 000 000").width)), aH5[2] = 100 / (aHG * Math.floor(tf.measureText("500 000 000").width)), aH5[3] =
				100 / (aHG * Math.floor(tf.measureText("1 000 000 000").width))
		} else aHB();
		! function() {
			var aA;
			for (aA = aC.eX - 1; 0 <= aA; aA--) af.gO[aA] < 12 ? (aGh[aA] = af.iP[aA] + 1, aGi[aA] = af.iR[aA] + 1, aGj[aA] = 1, aGk[aA] = 1) : (aGh[aA] = af.iP[aA], aGi[aA] = af.iR[aA] + 1, aGj[aA] = 4, aGk[aA] = 2);
			if (aC.gw)
				for (aA = 0; aA < aC.jq; aA++) aGj[aA] = 0;
			aH0 = aa.get(4).width, aH1 = aa.get(4).height
		}()
	}, this.aGR = function(g8, a5O) {
		a5O > 18 * af.gO[g8] ? (aH9[g8] = 6, ab.a6p[g8] = 2 + ab.a6p[g8] % 2) : (aH8[g8] = 4, (ab.a6p[g8] < 2 || 3 < ab.a6p[g8]) && (ab.a6p[g8] = 6 + ab.a6p[g8] % 2))
	}, this.oO = function(g8, a5O) {
		a5O > 6 * af.gO[g8] ? (aH9[g8] = 6, ab.a6p[g8] = 4 + ab.a6p[g8] % 2) : (aH8[g8] = 4, (ab.a6p[g8] < 4 || 5 < ab.a6p[g8]) && (ab.a6p[g8] = 8 + ab.a6p[g8] % 2))
	}, this.resize = function() {
		pd(), aH7 || aHF(aGy)
	}, this.a38 = function() {
		for (var aA = 0; aA < aC.jq; aA++) af.iQ[aA] - af.iP[aA] != 3 || af.iS[aA] - af.iR[aA] != 3 ? (aGh[aA] = af.iP[aA] + (af.iQ[aA] !== af.iP[aA] ? 1 : 0), aGi[aA] = af.iR[aA], aGj[aA] = 1, aGk[aA] = 1) : (aGh[aA] = af.iP[aA], aGi[aA] = af
			.iR[aA] + 1, aGj[aA] = 4, aGk[aA] = 2)
	}, this.p8 = function(player, e2, aHI) {
		! function(player, e2, aHI) {
			player += e2 * aC.eX;
			0 === e2 ? aGz[player] === aHI && 0 < aAh[player] ? aAh[player] = 0 : (aGz[player] = aHI, aAh[player] = ai.qp.xv(aHI) ? 255 : 64) : 1 === e2 ? (aAh[player] = 64, aGz[player] = aHI) : aAh[player] = aHI
		}(player, e2, aHI), 2 === aC.ym && this.lQ(!0)
	}, this.te = function() {
		aH7 ? aHF(tf) : aGw && (1 !== aGv ? (tf.imageSmoothingEnabled = !0, tf.setTransform(aGv, 0, 0, aGv, 0, 0), tf.drawImage(aGx, -aGt / aGv, -aGu / aGv), tf.setTransform(1, 0, 0, 1, 0, 0), tf.imageSmoothingEnabled = !1) : tf.drawImage(aGx, -
			aGt, -aGu))
	}, this.a7Z = function(hw, hz) {
		aGt += hw, aGu += hz
	}, this.a0J = function(hw, hz) {
		ae.a7Z(hw, hz)
	}, this.zoom = function(a1D, kt, ku) {
		aGv *= a1D, aGt = (aGt + kt) * a1D - kt, aGu = (aGu + ku) * a1D - ku
	}, this.lQ = function(bq) {
		return !aH7 && !(!aH4 && !bq && bd.lx < aH3 + (1 === aGv && 0 === aGt && 0 === aGu && (aC.a3b() || aC.gw || 2 === aC.ym) ? 1e3 : a8l) || (aH4 = !1, aH3 = bd.lx, aHF(aGy), 0))
	}, this.aHL = function(aA) {
		return aHH(aA) * aGl[aA]
	}, this.aHM = function(player) {
		return aGl[player]
	}, this.ik = function() {
		bd.jn() % 10 == 9 && (aH4 = aC.a3d() && !aC.a3b()), !aC.a3b() && 4 <= ++aGg && function() {
			var aA, et, eu;
			for (aGg = 0, eu = 4; 1 <= eu; eu--)
				for (et = ak.jr - 1; 0 <= et; et--) aA = ak.js[et] + eu * aC.eX, 0 < aAh[aA] && aAh[aA] < 255 && aAh[aA]--;
			if (2 !== aC.ym)
				for (et = ak.jr - 1; 0 <= et; et--) aA = ak.js[et], 0 < aAh[aA] && aAh[aA] < 255 && aAh[aA]--
		}();
		var aA, et, ea = Math.floor(.1 * ak.jr);
		for (ea = (ea = ea < 8 ? 8 : ea) > ak.jr ? ak.jr : ea, aA = aGf + ea - 1; aGf <= aA; aA--) et = aA % ak.jr, ! function(aA) {
			var hX = aHH(aA) * aGl[aA];
			0 < aGj[aA] && aHl(aA, aGh[aA], aGi[aA], aGj[aA], aGk[aA]) ? ! function(aA) {
				for (var eh, ej, i, j, eE = !1, eu = 0; eu < 8; eu++) {
					if (i = aGj[aA] + 2, j = aGk[aA] + 2, i > af.iQ[aA] - af.iP[aA] + 1 || j > af.iS[aA] - af.iR[aA] + 1) return eE;
					if (eh = aGh[aA] - 1, ej = aGi[aA] - 1, !aHl(aA, eh, ej, i, j)) return eE;
					aGh[aA] = eh, aGi[aA] = ej, aGj[aA] = i, aGk[aA] = j, eE = !0
				}
				return eE
			}(aA) && function(aA, hX) {
				for (var eh, ej, i, j, eE = !1, aAq = aGj[aA], mJ = 1 + Math.floor(.02 * aAq), eu = 1; eu < 5; eu++) {
					if ((i = aAq + eu * mJ) > af.iQ[aA] - af.iP[aA] + 1) return eE;
					if ((j = aHr(hX, i)) > af.iS[aA] - af.iR[aA] + 1) return eE;
					eh = af.iP[aA] + Math.floor(Math.random() * (af.iQ[aA] - af.iP[aA] + 2 - i)), ej = af.iR[aA] + Math.floor(Math.random() * (af.iS[aA] - af.iR[aA] + 2 - j)), aHl(aA, eh, ej, i, j) && (aGh[aA] = eh, aGi[aA] = ej, aGj[
						aA] = i, aGk[aA] = j, eE = !0)
				}
				return eE
			}(aA, hX) && aHo(aA) : ! function(aA, hX) {
				var j, eh = aGh[aA] + 1,
					ej = aGi[aA] + 1,
					i = aGj[aA] - 2;
				for (;;) {
					if (i < 1) {
						aGj[aA] = 0;
						break
					}
					if (j = aHr(hX, i), aHl(aA, eh, ej, i, j)) return aGh[aA] = eh, aGi[aA] = ej, aGj[aA] = i, aGk[aA] = j, 1;
					eh++, ej++, i -= 2
				}
				return
			}(aA, hX) ? function(aA, hX) {
				var eh, ej, i, j, eu, mP, j7 = af.iQ[aA] - af.iP[aA] + 1,
					aHs = Math.floor(.02 * j7);
				for (mP = -6 * (aHs = aHs < 1 ? 1 : aHs), eu = j7; mP <= eu; eu -= aHs)
					if (j = aHr(hX, i = 0 < eu ? eu : 1), eh = af.iP[aA] + Math.floor(Math.random() * (af.iQ[aA] - af.iP[aA] + 2 - i)), ej = af.iR[aA] + Math.floor(Math.random() * (af.iS[aA] - af.iR[aA] + 2 - j)), aHl(aA, eh, ej, i, j))
						return aGh[aA] = eh, aGi[aA] = ej, aGj[aA] = i, aGk[aA] = j
			}(aA, hX) : aHo(aA)
		}(ak.js[et]);
		aGf = (aGf += ea) % ak.jr
	}, this.lL = function() {
		var aA, g8, hg, hh;
		if (bd.jn() % 4 == 1)
			for (aA = ak.jr - 1; 0 <= aA; aA--) g8 = ak.js[aA], ab.a6p[g8] < 2 || ((hg = Math.max(aH8[g8] - 1, 0)) === (hh = Math.max(aH9[g8] - 1, 0)) ? 0 === hg && (ab.a6p[g8] %= 2) : 0 === hh && ab.a6p[g8] < 6 && (ab.a6p[g8] += 4), aH8[g8] =
				hg, aH9[g8] = hh)
	}, this.a58 = function(player) {
		var aA = player + 2 * aC.eX,
			dm = aAh[aA];
		return 0 < dm && (aM.yt(50, player), aAh[aA] = 0, 255 === dm)
	}, this.a4B = function(player) {
		return 255 === aAh[player + 2 * aC.eX]
	}
}

function cY() {
	var aHv, aHw;
	this.dW = function() {
		aHv =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aHw =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation;Necromancer"
			.split(";");
		for (var a5Q = ["K ", " Y", "E ", " Z", " z", " s", "S "], aHx = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aHv.length - 1; 0 <= aA; aA--)
			for (var et = a5Q.length - 1; 0 <= et; et--) aHv[aA] = aHv[aA].replace(a5Q[et], aHx[et]);
		if (__fx.settings.realisticNames) aHv = realisticNames;
	}, this.a3N = function() {
		var ea = aC.jq,
			zL = af.zL,
			zP = af.zP,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ea)
			for (var aA = 0; aA < ea; aA++) zL[aA] = zP[aA] = "Player " + aw.j8(1e3);
		else
			for (aA = 0; aA < ea; aA++) zL[aA] = zP[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k7) {
			for (var e1 = aw.random(), aI3 = aHv, aI4 = aHw, hF = aD.hF, ea = aI3.length, kY = aC.data.teamPlayerCount[7], zL = af.zL, zP = af.zP, aA = kY - 1; aA >= aC.jq; aA--) zL[aA] = zP[aA] = aI3[(aA + e1) % ea];
			for (ea = aI4.length - 1, aA = kY; aA < aC.eX; aA++) zL[aA] = zP[aA] = aI4[hF[aA] ? ea : aA % ea]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var ea = aC.eX, zL = af.zL, zP = af.zP, playerNamesData = aC.data.playerNamesData, aA = aC.jq; aA < ea; aA++) zL[aA] = zP[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zL = af.zL, zP = af.zP, aA = aC.jq; aA < aC.eX; aA++) zL[aA] = zP[aA] = "Bot " + aw.j8(1e3)
		} : function() {
			for (var aI3 = aHv, ea = aI3.length, e1 = aw.random(), zL = af.zL, zP = af.zP, aA = aC.jq; aA < aC.eX; aA++) zL[aA] = zP[aA] = aI3[(aA + e1) % ea]
		})()
	}
}

function cr() {
	this.aI5 = [], this.aI6 = [], this.dW = function() {
		this.aI5 = [], this.aI6 = []
	}, this.ik = function() {
		0 <= this.aI5.length && this.aI7(this.aI5), 0 <= this.aI6.length && this.aI7(this.aI6)
	}, this.aI7 = function(g) {
		for (var eu = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].lx--, g[aA].lx <= 0) {
				eu = aA;
				break
			} for (aA = eu; 0 <= aA; aA--) g.shift()
	}, this.a40 = function(id, ya, aI8) {
		return this.ew(this.aI5, id, ya, aI8)
	}, this.aI9 = function(id, ya, aI8) {
		return this.ew(this.aI6, id, ya, aI8)
	}, this.ew = function(g, id, ya, aI8) {
		return ! function(g, id, ya) {
			var aA, hO;
			for (aA = ya.length - 1; 0 <= aA; aA--)
				for (hO = g.length - 1; 0 <= hO; hO--)
					if (g[hO].player === ya[aA] && id === g[hO].id) return 1;
			return
		}(g, id, ya) && (aI8 && function(g, id, ya) {
			var aA;
			for (aA = ya.length - 1; 0 <= aA; aA--) g.push({
				player: ya[aA],
				id: id,
				lx: 384
			})
		}(g, id, ya), !0)
	}
}

function cX() {
	this.zP = new Array(aC.eX), this.zL = new Array(aC.eX), this.a2B = new Uint8Array(aC.eX), this.le = new Uint8Array(aC.eX), this.iP = new Uint16Array(aC.eX), this.iR = new Uint16Array(aC.eX), this.iQ = new Uint16Array(aC.eX), this.iS =
		new Uint16Array(aC.eX), this.gO = new Uint32Array(aC.eX), this.wU = new Uint32Array(aC.eX), this.gc = new Uint32Array(aC.eX), this.g2 = null, this.gG = null, this.gH = null, this.f0 = null, this.ov = new Uint16Array(aC.eX), this.it =
		new Uint16Array(aC.eX), this.iu = new Uint16Array(aC.eX), this.zK = new Uint16Array(aC.eX), this.zJ = new Uint8Array(aC.eX), this.a2J = new Uint16Array(aC.eX), this.dW = function() {
			this.zP.fill(""), this.zL.fill(""), this.a2B.fill(0), this.le.fill(0), this.iP.fill(0), this.iR.fill(0), this.iQ.fill(0), this.iS.fill(0), this.gO.fill(0), this.wU.fill(0), this.gc.fill(0), this.g2 = new Array(aC.eX), this.gG = new Array(
				aC.eX), this.gH = new Array(aC.eX), this.f0 = new Array(aC.eX), this.ov.fill(0), this.it.fill(0), this.iu.fill(0), this.zK.fill(0), this.zJ.fill(0), this.a2J.fill(0)
		}
}

function cp() {
	this.aBA = function(player) {
		aF.ld(player), aC.yo++, af.a2B[player] = 2, af.zK[player] = bg.zb.aFR(), player === aC.eK && (aW.show(!1, !1), aV.a9O(), bP.yX.zH()), ae.a58(player)
	}
}

function cR() {
	this.js = null, this.jr = 0, this.a3R = function() {
		for (this.jr = 0, aA = aC.eX - 1; 0 <= aA; aA--) 0 !== af.le[aA] && this.jr++;
		this.js = new Uint16Array(this.jr);
		for (var ea = 0, aA = 0; aA < aC.eX; aA++) 0 !== af.le[aA] && (this.js[ea++] = aA)
	}, this.lK = function() {
		for (var gO = af.gO, wU = af.wU, zJ = af.zJ, js = ak.js, aA = ak.jr - 1; 0 <= aA; aA--) {
			var dm, g8 = js[aA];
			gO[g8] <= bJ.dn(wU[g8], 4) ? aj.df(g8) : gO[g8] >= wU[g8] ? (dm = gO[g8], 250 <= (wU[g8] = dm) && (zJ[g8] = 1)) : wU[g8] -= Math.max(1, bJ.dn(wU[g8] - gO[g8], 1e3))
		}
		this.aID()
	}, this.aID = function() {
		for (var le = af.le, kX = this.js, aA4 = this.jr, aA = aA4 - 1; 0 <= aA; aA--) 0 === le[kX[aA]] && (kX[aA] = kX[--aA4]);
		this.jr = aA4
	}
}

function cZ() {
	var aIE;
	this.kG = null, this.kF = 0, this.dW = function() {
		aIE = [], 9 === aC.k7 && this.aIF()
	}, this.aIF = function() {
		var aIG = [59, 80, 105, 150, 190, 333];
		this.kG = [0, 0, 0, 0, 0, 0], this.kF = 0, aC.jq <= aIG[0] ? (this.kF = 256 - bJ.dn(256 * aC.jq, aIG[0]), this.kG[5] = bJ.dn(2 * Math.max(aC.jq - 5, 0), 11), this.kG[0] = aC.eX - aC.jq - this.kF - this.kG[5]) : (this.kG[5] = 9 + bJ.dn(
			100 * (aC.jq - 59), 161), this.kG[0] = 512 - aC.jq - this.kG[5]), aC.kB = aC.eX - aC.jq, aC.data.numberTeams = (0 < aC.jq) + (0 < aC.kB), aC.data.playerCount = aC.w0 = aC.jq + aC.kB, aC.data.teamPlayerCount = new Uint16Array([0,
			0, 0, 0, 0, 0, 0, aC.jq + this.kF, aC.kB - this.kF
		]), aC.a3H.a3L()
	}, this.aFY = function(player) {
		aIE.push({
			player: player,
			g3: 14 + aw.j8(20)
		})
	}, this.ik = function() {
		if (9 === aC.k7)
			for (var aA = aIE.length - 1; 0 <= aA; aA--) --aIE[aA].g3 <= 0 && (ae.p8(aIE[aA].player, 0, ai.qp.xd + ai.qp.xr), aIE.splice(aA))
	}
}

function d6() {
	function aIV() {
		return {
			el: bQ.el,
			em: bQ.em,
			vR: bQ.vR,
			vN: bQ.vN,
			vO: bQ.vO,
			vS: bQ.vS,
			eG: bQ.eG,
			mapSeed: bQ.mapSeed
		}
	}

	function aIN(aA) {
		return 1 !== aA && bQ.aBd(aA) && aA !== bQ.aIW()
	}
	this.aII = 22, this.aFj = 4096, this.el = 0, this.em = 0, this.vR = null, this.vN = null, this.vO = null, this.vS = null, this.eG = 0, this.mapSeed = 0, this.vP = !1, this.vQ = new aIJ, this.vH = new aIK, this.a5W = new aIL, this.dW =
function() {
		this.vH.dW()
	}, this.a6 = function(map, aIM) {
		((map %= this.aII) !== this.eG || aIN(this.eG) && aIM !== this.mapSeed) && (this.vP = !1, this.vQ.aIO(), aw.a3M(map), this.eG = map, this.mapSeed = aIM, aIN(map) && (bQ.vH.vI[map].aIP = aIM), this.aBd(this.eG) ? (map = bQ.vH.vI[this.eG],
			this.el = map.i, this.em = map.j, aw.a3M(map.aIP), ao.a6([this.el, this.em, map.lj, map.lg]), aIR(), an.aIS(), ao.aIT()) : aIQ())
	}, this.aIU = function(map, aIM) {
		var fI = aIV(),
			map = (this.a6(map, aIM), this.vQ.aIO(), aIV());
		return this.el = fI.el, this.em = fI.em, this.vR = fI.vR, this.vN = fI.vN, this.vO = fI.vO, this.vS = fI.vS, this.eG = fI.eG, this.mapSeed = fI.mapSeed, map
	}, this.a3h = function(canvas) {
		canvas && this.vR !== canvas && (this.el = canvas.width, this.em = canvas.height, this.vR = canvas, this.vN = this.vR.getContext("2d", {
			alpha: !1
		}), this.hV = this.vN.getImageData(0, 0, this.el, this.em), this.vS = this.hV.data, this.eG = this.aIW(), this.mapSeed = 0, bQ.vH.vI[this.eG].name = aC.data.mapName)
	}, this.eF = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIW()
	}, this.aIX = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIY = function(aA) {
		return 1 === aA
	}, this.aIW = function() {
		return this.aII
	}, this.aBd = function(aA) {
		return void 0 === this.vH.vI[aA].aIZ
	}, this.a3g = function(pR) {
		return 0 === pR.mapType ? pR.mapProceduralIndex < 10 ? pR.mapProceduralIndex : 10 + pR.mapProceduralIndex : 1 === pR.mapType ? pR.mapRealisticIndex + 10 : void 0
	}, this.aBe = function(pR, aIa) {
		0 === pR.mapType ? pR.mapProceduralIndex = aIa < 10 ? aIa : aIa - 10 : 1 === pR.mapType && (pR.mapRealisticIndex = aIa - 10)
	}
}

function aIJ() {
	function aIj() {
		bQ.vQ.ik()
	}

	function aIp(g8, aIo) {
		0 < aIo && (bQ.vS[g8] += aIo, bQ.vS[g8 + 1] += aIo, bQ.vS[g8 + 2] += aIo)
	}

	function h3(g8) {
		return bQ.vS[g8 + 2] > bQ.vS[g8] && bQ.vS[g8 + 2] > bQ.vS[g8 + 1]
	}
	this.a7l = -1, this.zp = 0, this.aIb = 0, this.aIc = 8, this.aId = 32, this.aIe = 8, this.aIf = 32, this.aIg = [0, 0], this.a6p = [0, 0, 0, 0], this.iK = null, this.aIh = !0, this.aIi = !1, this.aIO = function() {
		-1 !== this.a7l && clearTimeout(this.a7l), this.a7l = -1, this.iK = null, ao.aIT()
	}, this.dW = function() {
		7 === aZ.zx() || this.aIi || (this.aIh = !0, this.zp = 0, this.aIb = 1, this.aIg = [bQ.vH.vI[bQ.eG].vk[0], bQ.vH.vI[bQ.eG].vl[0]], this.a6p = [bQ.vH.vI[bQ.eG].aIZ[3], bQ.vH.vI[bQ.eG].aIZ[4], bQ.vH.vI[bQ.eG].aIZ[5], bQ.vH.vI[bQ.eG].aIZ[
			6]], this.aIc = bQ.vH.vI[bQ.eG].aIZ[7], this.aId = bQ.vH.vI[bQ.eG].aIZ[8], this.aIe = bQ.vH.vI[bQ.eG].aIZ[9], this.aIf = bQ.vH.vI[bQ.eG].aIZ[10], this.aIh ? this.a7l = setTimeout(aIj, 16) : this.ik())
	}, this.ik = function() {
		if (8 === aZ.zx() && aG.ly()) this.a7l = setTimeout(aIj, 16);
		else {
			if (0 === this.zp) {
				var aIP = aw.aIk();
				if (aw.a3M(bQ.vH.vI[bQ.eG].aIZ[2]), ao.a6([bQ.el, bQ.em, bQ.vH.vI[bQ.eG].aIZ[0], bQ.vH.vI[bQ.eG].aIZ[1]]), aw.a3M(aIP), this.iK = ao.aIl(), this.zp++, this.aIh) return void(this.a7l = setTimeout(aIj, 16))
			}
			for (var g8, eM, aIP = this.aIh ? 10 : 1e6, aIP = bQ.em - this.aIb - 1 < aIP ? bQ.em - this.aIb - 1 : aIP, wh = this.aIb + aIP, ej = this.aIb; ej < wh; ej++)
				for (var eh = 1; eh < bQ.el - 1; eh++) h3(g8 = 4 * (eM = eh + ej * bQ.el)) ? this.aIm(g8, eM, 1) : (this.aIm(g8, eM, 0), function(eh, ej, g8) {
					return 1 < eh && h3(g8 - 4) || eh < bQ.el - 2 && h3(g8 + 4) || 1 < ej && h3(g8 - 4 * bQ.el) || ej < bQ.em - 2 && h3(g8 + 4 * bQ.el)
				}(eh, ej, g8) && this.aIn(eh, ej));
			this.aIb = wh, this.aIb >= bQ.em - 1 ? (bQ.vN.putImageData(bQ.vO, 0, 0, 1, 1, bQ.el - 2, bQ.em - 2), bd.de = !0, this.aIO()) : this.aIh && (this.a7l = setTimeout(aIj, 16))
		}
	}, this.aIm = function(g8, eM, e2) {
		aIp(g8, Math.floor(this.aIg[e2] + this.a6p[e2] * this.iK[eM] / 1e4) - bQ.vS[g8])
	}, this.aIq = function(g8, e1, aIr, e2, a6p) {
		aIp(g8, Math.floor(this.aIg[e2] + (1 - e1 / aIr) * a6p) - bQ.vS[g8])
	}, this.aIn = function(kt, ku) {
		for (var g8, e1, aIr, a7b = kt - this.aId, aIs = ku - this.aId, wi = kt + this.aId, wh = ku + this.aId, a7b = a7b < 1 ? 1 : a7b, wi = wi > bQ.el - 2 ? bQ.el - 2 : wi, wh = wh > bQ.em - 2 ? bQ.em - 2 : wh, ej = aIs < 1 ? 1 : aIs; ej <=
			wh; ej++)
			for (var eh = a7b; eh <= wi; eh++) h3(g8 = 4 * (eh + ej * bQ.el)) ? (aIr = this.aIc + (this.aId - this.aIc) * this.iK[eh + bQ.el * ej] / 1e4, Math.abs(kt - eh) > aIr || Math.abs(ku - ej) > aIr || aIr <= (e1 = Math.sqrt((kt - eh) * (
				kt - eh) + (ku - ej) * (ku - ej))) || this.aIq(g8, e1, aIr, 1, this.a6p[3])) : (aIr = this.aIe + (this.aIf - this.aIe) * this.iK[eh + bQ.el * ej] / 1e4, Math.abs(kt - eh) > aIr || Math.abs(ku - ej) > aIr || aIr <= (e1 = Math
				.sqrt((kt - eh) * (kt - eh) + (ku - ej) * (ku - ej))) || this.aIq(g8, e1, aIr, 0, this.a6p[2]))
	}
}

function aIR() {
	2 === bQ.eG ? aIt([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eG ? aIt([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eG ? aIt([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eG ? aIt([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eG && aIt([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aIt(aIu, aIv, aIw, aIx, aIy) {
	for (var eh, ej, aJ0, aJ1, a1D, aJ2, hv = aIu.length - 1, aIz = bQ.el + bQ.em, ea = (aIz *= aIz, aIw.length), aA = ea - 1; 0 <= aA; aA--) aIw[aA] *= aIw[aA];
	var aJ3 = new Array(ea),
		aAe = new Array(ea),
		aJ4 = new Array(ea),
		f2 = ao.aIl();
	if (void 0 === aIy)
		for (aIy = new Array(ea), aA = ea - 1; 0 <= aA; aA--) aIy[aA] = 0;
	for (aA = 1; aA < ea; aA++) aJ3[aA] = aIw[aA] - aIw[aA - 1], aAe[aA] = aIx[aA] - aIx[aA - 1], aJ4[aA] = aIy[aA] - aIy[aA - 1];
	for (eh = bQ.el - 1; 0 <= eh; eh--)
		for (ej = bQ.em - 1; 0 <= ej; ej--) {
			for (aJ0 = aIz, aA = hv; 0 <= aA; aA--) aJ0 = (aJ1 = (eh - aIu[aA]) * (eh - aIu[aA]) + (ej - aIv[aA]) * (ej - aIv[aA])) < aJ0 ? aJ1 : aJ0;
			for (a1D = aIx[ea - 1], aJ2 = aIy[ea - 1], aA = 1; aA < ea; aA++)
				if (aJ0 < aIw[aA]) {
					a1D = aIx[aA - 1] + aF1((aJ0 - aIw[aA - 1]) * aAe[aA], aJ3[aA]), aJ2 = aIy[aA - 1] + aF1((aJ0 - aIw[aA - 1]) * aJ4[aA], aJ3[aA]);
					break
				} aJ5(bQ.el * ej + eh, a1D, aJ2, f2)
		}
}

function aJ5(e2, a1D, aJ2, f2) {
	a1D < 500 ? f2[e2] = bJ.dn(f2[e2] * a1D * 2, 1e3) : 500 < a1D && (f2[e2] += bJ.dn(2 * (1e4 - f2[e2]) * (a1D - 500), 1e3)), f2[e2] += bJ.dn(aJ2 * (10 * a1D - f2[e2]), 1e3)
}

function cb() {
	var aJ6;

	function aJG(a1e, hX, eh, ej, globalAlpha) {
		bQ.vN.save(), bQ.vN.globalAlpha = globalAlpha, bQ.vN.imageSmoothingEnabled = !1, bQ.vN.scale(hX, hX), bQ.vN.drawImage(a1e, Math.floor(eh * (bQ.el / hX - a1e.width)), Math.floor(ej * (bQ.em / hX - a1e.height))), bQ.vN.restore()
	}
	this.a5T = 0, this.a5U = 0, this.a5V = 0, this.a5W = 0, this.dW = function() {
		(aJ6 = new Array(bQ.aII))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e1: [220, 250, 255, 220],
			sB: [190, 220, 0, 0],
			eu: [170, 200, 0, 0]
		}, aJ6[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e1: [25, 0, 100, 0, 25],
			sB: [25, 0, 0, 0, 25],
			eu: [25, 0, 0, 0, 25]
		}, aJ6[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e1: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sB: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJ6[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e1: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sB: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eu: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJ6[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e1: [10, 10, 20, 10, 10, 170, 212],
			sB: [20, 20, 60, 100, 100, 110, 170],
			eu: [70, 70, 160, 30, 30, 60, 120]
		}, aJ6[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e1: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJ6[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e1: [10, 10, 60, 255, 255, 200, 200],
			sB: [10, 10, 60, 255, 255, 200, 200],
			eu: [80, 80, 255, 255, 255, 200, 200]
		}, aJ6[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e1: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJ6[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e1: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJ6[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e1: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJ6[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e1: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sB: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eu: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJ6[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e1: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sB: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eu: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIS = function() {
		var aJF, aA, et, fI, hV = function() {
				var hV;
				return bQ.vR = document.createElement("canvas"), bQ.vR.width = bQ.el, bQ.vR.height = bQ.em, bQ.vN = bQ.vR.getContext("2d", {
					alpha: !1
				}), hV = bQ.vN.getImageData(0, 0, bQ.el, bQ.em), bQ.vS = hV.data, hV
			}(),
			i = aJ6[bQ.eG].i,
			e1 = aJ6[bQ.eG].e1,
			sB = aJ6[bQ.eG].sB,
			eu = aJ6[bQ.eG].eu,
			f2 = ao.aIl(),
			ea = i.length - 2,
			aJA = new Array(1 + ea),
			aJB = new Array(1 + ea),
			aJC = new Array(1 + ea),
			aJD = new Array(1 + ea);
		for (et = ea; 0 <= et; et--) aJA[et] = i[et + 1] - i[et], aJB[et] = e1[et + 1] - e1[et], aJC[et] = sB[et + 1] - sB[et], aJD[et] = eu[et + 1] - eu[et];
		for (aA = bQ.el * bQ.em - 1; 0 <= aA; aA--)
			for (et = ea; 0 <= et; et--)
				if (f2[aA] >= i[et]) {
					fI = f2[aA] - i[et], bQ.vS[4 * aA] = e1[et] + aF1(aJB[et] * fI, aJA[et]), bQ.vS[4 * aA + 1] = sB[et] + aF1(aJC[et] * fI, aJA[et]), bQ.vS[4 * aA + 2] = eu[et] + aF1(aJD[et] * fI, aJA[et]), bQ.vS[4 * aA + 3] = 255;
					break
				} bQ.vN.putImageData(hV, 0, 0), bQ.aIY(bQ.eG) && aa.sE() && bQ.aIY(bQ.eG) && (hV = aa.aE9("arena"), aJF = aa.aE9("territorial.io"), aJG(hV, 5, .5, .5, .1), aJG(aJF, 2, .5, .45, .1)), bQ.vP = !0, bd.de = !0
	}, this.a3P = function() {
		for (var g8, eh, ej, aJH, hM, fK, a5U = 0, i = bQ.el, j = bQ.em, fI = i * j * 4, aJI = aAE, aJJ = bQ.vS, aA = i - 1; 0 <= aA; aA--) aJI[(g8 = aA << 2) + 2] = aJI[fI - g8 - 2] = 3;
		for (fI = 4 * i, aA = j - 1; 0 <= aA; aA--) aJI[(g8 = aA * fI) + 2] = aJI[g8 + fI - 2] = 3;
		for (aJH = i - 1, hM = j - 1, ej = 1; ej < hM; ej++)
			for (fI = ej * i, eh = 1; eh < aJH; eh++) fK = 1 - (aJJ[(g8 = fI + eh << 2) + 2] > aJJ[g8 + 1] && aJJ[g8 + 2] > aJJ[g8]), aJI[g8 + 2] = 2 - fK, a5U += fK;
		this.a5T = (i - 2) * (j - 2), this.a5W = 0, bQ.eF(bQ.eG) && (bQ.a5W.aJK(), bQ.a5W.aJL()), this.a5U = aC.ja = a5U - this.a5W, this.a5V = this.a5T - this.a5U - this.a5W
	}
}

function aIQ() {
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
			), (new vA).vC(pG)
}

function aIK() {
	this.vI = null, this.aJM = null, this.aJN = null, this.dW = function() {
		var aJO = [120, 105, 92],
			cos = [12, 12, 60],
			aJP = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJQ = [140, 130, 120],
			aJR = [12, 12, 76],
			aJS = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJT = [130, 117, 106],
			aJU = [12, 12, 68],
			aJV = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vI = new Array(bQ.aII + 1), __fx.customLobby.setMapInfo(this.vI), this.vI[0] = {
			name: L(130),
			i: 230,
			j: 230,
			lj: 1e3,
			lg: 2e3,
			aIP: 173
		}, this.vI[1] = {
			name: L(131),
			i: 800,
			j: 800,
			lj: 100,
			lg: 50,
			aIP: 43
		}, this.vI[2] = {
			name: L(132),
			i: 512,
			j: 512,
			lj: 128,
			lg: 32,
			aIP: 0
		}, this.vI[3] = {
			name: L(133) + " 1",
			i: 960,
			j: 960,
			lj: 60,
			lg: 8,
			aIP: 0
		}, this.vI[4] = {
			name: L(134),
			i: 900,
			j: 900,
			lj: 100,
			lg: 5,
			aIP: 0
		}, this.vI[5] = {
			name: L(135),
			i: 1e3,
			j: 1e3,
			lj: 100,
			lg: 40,
			aIP: 0
		}, this.vI[6] = {
			name: L(136),
			i: 1e3,
			j: 1e3,
			lj: 100,
			lg: 20,
			aIP: 0
		}, this.vI[7] = {
			name: L(137),
			i: 1024,
			j: 1024,
			lj: 128,
			lg: 32,
			aIP: 0
		}, this.vI[8] = {
			name: L(138),
			i: 820,
			j: 820,
			lj: 200,
			lg: 100,
			aIP: 0
		}, this.vI[9] = {
			name: L(139),
			i: 1024,
			j: 1024,
			lj: 128,
			lg: 32,
			aIP: 0
		}, this.vI[10] = {
			name: L(140),
			vk: aJQ,
			vl: aJR,
			aIZ: aJS
		}, this.vI[11] = {
			name: L(141),
			vk: aJT,
			vl: aJU,
			aIZ: aJV
		}, this.vI[12] = {
			name: L(142),
			vk: aJT,
			vl: aJU,
			aIZ: aJV
		}, this.vI[13] = {
			name: L(143),
			vk: aJO,
			vl: cos,
			aIZ: aJP
		}, this.vI[14] = {
			name: L(144),
			vk: aJO,
			vl: cos,
			aIZ: aJP
		}, this.vI[15] = {
			name: L(145),
			vk: aJQ,
			vl: aJR,
			aIZ: aJS
		}, this.vI[16] = {
			name: L(146),
			vk: aJQ,
			vl: aJR,
			aIZ: aJS
		}, this.vI[17] = {
			name: L(147),
			vk: aJO,
			vl: cos,
			aIZ: aJP
		}, this.vI[18] = {
			name: L(148),
			vk: aJT,
			vl: aJU,
			aIZ: aJV
		}, this.vI[19] = {
			name: L(149),
			vk: aJO,
			vl: cos,
			aIZ: aJP
		}, this.vI[20] = {
			name: L(150),
			i: 1024,
			j: 1024,
			lj: 128,
			lg: 32,
			aIP: 0
		}, this.vI[21] = {
			name: L(133) + " 2",
			i: 940,
			j: 940,
			lj: 80,
			lg: 8,
			aIP: 0
		}, this.vI[bQ.aII] = {
			name: ""
		}, this.aJM = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJM[aA] = aA;
		for (this.aJM[10] = 20, this.aJM[11] = 21, this.aJN = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJN[aA] = 10 + aA
	}
}

function aIL() {
	this.aJK = function() {
		for (var g8, eh, fI, aJI = aAE, aJJ = bQ.vS, i = bQ.el, aJH = i - 1, hM = bQ.em - 1, g3 = 0, ej = 1; ej < hM; ej++)
			for (fI = ej * i, eh = 1; eh < aJH; eh++) aJJ[g8 = fI + eh << 2] === aJJ[1 + g8] && aJJ[g8] === aJJ[2 + g8] && (g3++, aJI[2 + g8] = 4);
		an.a5W = g3
	}, this.aJL = function() {
		for (var aJI = aAE, i = bQ.el, aJH = i - 1, hM = bQ.em - 1, id = 5, ej = 1; ej < hM; ej++)
			for (var fI = ej * i, eh = 1; eh < aJH; eh++) {
				var eE = 2 + (fI + eh << 2);
				4 === aJI[eE] && (! function(eE, id) {
					var ea = 1,
						aJI = aAE,
						ec = ab.ec,
						a1Q = [eE];
					aJI[eE] = id;
					for (; ea;) {
						for (var a1R = [], aA = 0; aA < ea; aA++)
							for (var eP = a1Q[aA], ed = 3; 0 <= ed; ed--) {
								var ee = eP + ec[ed];
								4 === aJI[ee] && (aJI[ee] = id, a1R.push(ee))
							}
						ea = (a1Q = a1R).length
					}
				}(eE, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3O() {
	(x1 = void 0 === x1 ? document.createElement("canvas") : x1).width = bQ.el, x1.height = bQ.em, a3S = x1.getContext("2d", {
		alpha: !0
	}), a3T = aAE = null, a3T = a3S.getImageData(0, 0, bQ.el, bQ.em), aAE = a3T.data, b8.pi.vT(aAE)
}

function cc() {
	var f2, i, j, max, aJX, lg, aJZ, aJa, aJb, aJc, aJd, aJe, aJf, aJg, aJY = 1e4;

	function aJn(aJm, lj, ea) {
		var aA;
		for (aJZ[0] = aJm, aA = 1; aA < ea; aA++) aJZ[aA] = aJZ[aA - 1] + lj, lj = aJZ[aA] >= aJY ? (aJZ[aA] = aJY - 1, -lj) : aJZ[aA] < 0 ? (aJZ[aA] = 0, -lj) : (lj += 16384 <= aw.random() ? lg : -lg) < -aJX ? -aJX : aJX < lj ? aJX : lj
	}

	function aJp(eh, ej, aJq, ea) {
		(aJq ? function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA] = aJZ[aA]
		} : function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA * i] = aJZ[aA]
		})(eh, ej, ea)
	}

	function aJt(value, ea) {
		var aA, aHs, eE, hk = value - aJZ[ea - 1];
		if (0 != hk) {
			for (aHs = 1 + bJ.dn(Math.abs(hk), ea - 1), aHs = hk < 0 ? -aHs : aHs, aJZ[ea - 1] = value, eE = (eE = ea - 1 - bJ.dn(Math.abs(hk), Math.abs(aHs))) < 1 ? 1 : ea - 2 < eE ? ea - 2 : eE, aA = ea - 2; eE <= aA; aA--) aJZ[aA] += hk - (ea -
				1 - aA) * aHs;
			(hk < 0 ? function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJZ[aA] < 0 && (aJZ[aA] = -aJZ[aA] - 1)
			} : function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJZ[aA] >= aJY && (aJZ[aA] = 2 * aJY - aJZ[aA] - 1)
			})(ea)
		}
	}

	function aJw(a1Q, a1R, ea) {
		for (var aA = 0; aA < ea; aA++) a1Q[aA] = a1R[aA]
	}

	function aJx(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aJy(a3u, gap, hN) {
		aJa.push(a3u), aJb.push(gap), aJc.push(hN)
	}
	this.a6 = function(a2f) {
		! function(a2f) {
			var aA;
			for (i = a2f[0], j = a2f[1], aJX = a2f[2], lg = a2f[3], f2 = new Int16Array(i * j), max = j < i ? i : j, aJZ = new Int16Array(max), aJa = [], aJb = [], aJc = [], aJd = new Array(i), aJe = new Array(j), aA = i - 1; 0 <= aA; aA--) aJd[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJe[aA] = !1;
			aJf = new Int16Array(i), aJg = new Int16Array(j)
		}(a2f),
		function(ea) {
			var aJm = aw.random() % aJY,
				lj = aw.random() % (2 * aJX + 1) - aJX;
			aJn(aJm, lj, ea)
		}(max), aJw(aJg, aJZ, j), aJp(0, 0, !0, i);
		var eh, ej, a2f = f2[0],
			ea = max,
			lj = aw.random() % (2 * aJX + 1) - aJX;
		for (aJn(a2f, lj, ea), aJw(aJf, aJZ, i), aJp(0, 0, !1, j), aJx(aJf), aJx(aJg), aJn(f2[i - 1], aJf[i - 1], j), aJp(i - 1, 0, !1, j), aJn(f2[i * (j - 1)], aJg[j - 1], i), aJt(f2[i * j - 1], i), aJp(0, j - 1, !0, i), aJd[i - 1] = aJd[0] = !
			0, aJe[j - 1] = aJe[0] = !0, aJy(0, i, !0), aJy(0, j, !1), ! function() {
				var aK0, a3u;
				for (;;) {
					if (aK0 = function() {
							var aA, aK0 = aJa.length - 1;
							for (aA = aK0 - 1; 0 <= aA; aA--) aJb[aA] > aJb[aK0] && (aK0 = aA);
							return aK0
						}(), aJb[aK0] < 5) return;
					a3u = aJa[aK0] + bJ.dn(aJb[aK0], 2), (aJc[aK0] ? function(eh) {
						var ea, aK3, aA, aDa = 0,
							aK4 = 0;
						for (; aK4 < j - 1;) {
							for (aA = aDa + 1; aA < j; aA++)
								if (aJe[aA]) {
									aK4 = aA;
									break
								} ea = aK4 - aDa + 1, aJn(f2[eh + i * aDa], 0 === aDa ? aJf[eh] : aJZ[aK3 - 1] - aJZ[aK3 - 2], ea), aJt(f2[aK4 * i + eh], ea), aJp(eh, aDa, !1, ea), aK3 = ea, aDa = aK4
						}
						aJd[eh] = !0
					} : function(ej) {
						var ea, aK3, aA, aDa = 0,
							aK4 = 0;
						for (; aK4 < i - 1;) {
							for (aA = aDa + 1; aA < i; aA++)
								if (aJd[aA]) {
									aK4 = aA;
									break
								} ea = aK4 - aDa + 1, aJn(f2[ej * i + aDa], 0 === aDa ? aJg[ej] : aJZ[aK3 - 1] - aJZ[aK3 - 2], ea), aJt(f2[ej * i + aK4], ea), aJp(aDa, ej, !0, ea), aK3 = ea, aDa = aK4
						}
						aJe[ej] = !0
					})(a3u), aJy(a3u, aJa[aK0] + aJb[aK0] - a3u, aJc[aK0]), aJb[aK0] = a3u - aJa[aK0] + 1
				}
			}(), eh = 0; eh < i; eh++)
			if (!aJd[eh])
				for (ej = 0; ej < j; ej++) aJe[ej] || ! function(eh, ej) {
					var value = f2[ej * i + eh - 1] + f2[(ej - 1) * i + eh],
						a5h = 2;
					aJd[eh + 1] && (a5h++, value += f2[ej * i + eh + 1]);
					aJe[ej + 1] && (a5h++, value += f2[(ej + 1) * i + eh]);
					f2[ej * i + eh] = bJ.dn(value, a5h)
				}(eh, ej)
	}, this.aIl = function() {
		return f2
	}, this.aIT = function() {
		f2 = null
	}
}

function aF1(et, eu) {
	return 0 <= et ? bJ.dn(et, eu) : -bJ.dn(-et, eu)
}

function jN(f2) {
	return f2 * f2
}

function a4w(et, eu) {
	return eu < et ? et : eu
}

function a9i(et, eu) {
	return et < eu ? et : eu
}

function a78(et, f2, eu) {
	return f2 < et ? et : eu < f2 ? eu : f2
}

function aK6(f2, ea) {
	for (var ev = bJ.dn(f2 + 1, 2), aA = 0; aA < ea; aA++) ev = bJ.dn(ev + bJ.dn(f2, ev), 2);
	return ev
}

function aGO(f2, ea) {
	return f2 < 1 ? 0 : aK6(f2, ea)
}

function aK7(m7, m8, rt, a6s, mK, mL, ru, sb) {
	return !(m7 + rt <= mK || m8 + a6s <= mL || mK + ru <= m7 || mL + sb <= m8)
}

function aK8(m7, m8, rt, a6s, mK, mL, ru, sb) {
	return m7 <= mK && m8 <= mL && mK + ru <= m7 + rt && mL + sb <= m8 + a6s
}

function vK(f2) {
	return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
}

function bt() {
	this.dn = function(et, eu) {
		return Math.floor((et + .5) / eu)
	}, this.aK9 = function(et, eu) {
		return Math.floor(et * (eu + .5))
	}, this.sqrt = function(f2) {
		return ~~Math.sqrt(f2 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p7 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKA = function(fI, fK, fM) {
		return Math.max(Math.min(fI, fK), fM)
	}, this.aKB = function(aKC, aKD, eh, ej) {
		eh -= aKC, aKC = ej - aKD, ej = 0;
		return 0 == eh ? ej = 0 <= aKC ? Math.PI : 0 : (ej = Math.atan(aKC / eh), ej += 0 < eh ? .5 * Math.PI : 1.5 * Math.PI), ej
	}, this.log2 = function(f2) {
		return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
	}, this.log10 = function(f2) {
		return Math.floor(Math.log10(f2 + .5))
	}, this.aKF = function(aKG, aKH, aKI, aKJ, aKK) {
		return aKI - aKK < aKG && aKG < aKI + aKK && aKJ - aKK < aKH && aKH < aKJ + aKK
	}, this.wI = function(he, hf) {
		return he * he + hf * hf
	}
}

function d8() {
	this.x = new aKL, this.rm = 0;
	var aKM = new Array(30);

	function aKQ() {
		for (var ea = aKM.length, aA = 0; aA < ea; aA++) aKM[aA] = null
	}
	this.dW = function() {
		for (var aKN, aKO = document.body.firstChild; aKO;) {
			if (aKN = aKO.nextSibling, document.body.contains(aKO) && ("DIV" === aKO.tagName || "INPUT" === aKO.tagName || "BUTTON" === aKO.tagName)) try {
				document.body.removeChild(aKO)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKO = aKN
		}
	}, this.t = function(e2, aKP, a2f) {
		void 0 === aKP && (aKP = this.rm), bd.de = !0, 0 === e2 && (0 === aZ.zx() ? e2 = 5 : z.a0.setState(13)), this.qq(), this.rm === e2 && (aKP = aKM[e2].aKP, aKM[e2] = null), this.rm = e2;
		var kY = aKM[e2];
		if (!kY || 4 === e2 || 7 === e2 || 8 === e2 || 9 === e2 || 10 === e2 || 11 === e2 || 13 === e2 || 15 === e2 || 18 === e2 || 20 <= e2 && e2 <= 28) {
			if (0 === e2) return void aKQ();
			1 === e2 ? kY = new aKR : 2 === e2 ? kY = new aKS : 3 === e2 ? kY = new aKT : 4 === e2 || 9 === e2 || 10 === e2 || 11 === e2 || 13 === e2 ? kY = a2f : 5 === e2 ? kY = new aKU : 6 === e2 ? kY = new aKV : 7 === e2 ? kY = new aKW(s.x
					.aKX) : 8 === e2 ? kY = a2f : 12 === e2 ? kY = new aKY : 14 === e2 ? kY = new aKZ : 15 === e2 ? kY = new aKW(s.x.aKa) : 16 === e2 ? kY = new aKb : 17 === e2 ? kY = new aKc : 18 === e2 ? kY = new aKd : 19 === e2 ? kY =
				new aKe : 20 === e2 ? kY = new aKf : 21 === e2 ? kY = new aKg : 22 === e2 ? kY = new aKh : 23 === e2 ? kY = new aKi : 24 === e2 ? kY = new aKj : 25 === e2 ? kY = new aKk : 26 === e2 ? kY = new aKl : 27 === e2 ? kY = new aKm :
				28 === e2 ? kY = new aKn : 29 === e2 && (kY = new aKo), kY.aKP = aKP, aKM[e2] = kY
		}
		kY.show(a2f)
	}, this.a07 = function() {
		this.hI() && this.aKp(this.aDB().aKP)
	}, this.aKp = function(e2) {
		this.hI() && (aKM[e2] ? (this.qq(), bd.de = !0, this.rm = e2, aKM[e2].show()) : this.t(e2))
	}, this.qq = function() {
		this.hI() && aKM[this.rm].qq()
	}, this.w = function() {
		this.hI() && (aKM[this.rm].qq(), aKQ(), this.rm = 0, z.a0.setState(13))
	}, this.te = function() {
		var kY;
		this.hI() && (kY = aKM[this.rm]).te && kY.te()
	}, this.resize = function() {
		if (!this.hI()) return !1;
		aKM[this.rm].resize()
	}, this.go = function(eh, ej) {
		var kY;
		this.hI() && (kY = aKM[this.rm]).go && kY.go(eh, ej)
	}, this.a0J = function(eh, ej) {
		var kY;
		this.hI() && (kY = aKM[this.rm]).a0J && kY.a0J(eh, ej)
	}, this.a0h = function() {
		var kY;
		this.hI() && (kY = aKM[this.rm]).a0h && kY.a0h()
	}, this.a0M = function(kt, ku, deltaY) {
		var kY;
		this.hI() && (kY = aKM[this.rm]).a0M && kY.a0M(kt, ku, deltaY)
	}, this.a0r = function(code) {
		var kY;
		return !!this.hI() && ((kY = aKM[this.rm]).a0r && kY.a0r(code), !0)
	}, this.ik = function() {
		var kY;
		this.hI() && (kY = aKM[this.rm]) && kY.ik && kY.ik()
	}, this.hI = function() {
		return 0 < this.rm
	}, this.aDB = function() {
		return aKM[this.rm]
	}, this.aCB = function(e2) {
		return aKM[e2]
	}, this.aKq = function() {
		return aKM
	}
}

function aKW(data) {
	var aKr, aKs;
	this.show = function() {
		data.aKt && bG.aLb("account", data.rk), aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aKs.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(data.username, [new v("⬅️ " + L(32), function() {
		bG.clear(), s.a07()
	}), new v(data.aKt ? "🔄 " + L(151) : L(152), function() {
		s.t(8, s.aDB().aKP, new rn(25, {
			ro: 0,
			rk: data.rk,
			rl: data.rl
		}))
	}, 0, 0, 1)]), aKs = new pS(aKr.tV, function() {
		var pU = [];
		pU.push(function() {
				var aL9 = new pC,
					qN = (aL9.pF(L(201)), new qO({
						value: data.username,
						e2: -1
					}));
				qN.e.readOnly = !0, aL9.pQ(qN), aL9.pQ(new r4([new v(L(170), function(e) {
					return b8.pZ.a27(qN.e), b8.pZ.a28(e), !0
				}).button])), data.aKt || aL9.pH(L(202));
				return aL9
			}()),
			function(pU) {
				var aL9, pI, aAS, aLR, aLH;
				data.aKt || ((aL9 = new pC).pF(L(203)), (pI = aL9.pH(data.aLQ.length + " / 160")).style.textAlign = "center", aAS = !0, (aLR = new tn(0, 1, function(e) {
					e = e.target.value.length;
					pI.textContent = e + " / 160", 160 < e ? aAS && (aAS = !1, aLH.pu(1), aLH.button.style.color = b9.mh) : aAS || (aAS = !0, aLH.pu(0), aLH.button.style.color = b9.nd)
				})).e.rows = 6, aLR.e.style.fontSize = "1em", aLR.tu(data.aLQ), aL9.pQ(aLR), aLH = new v(L(204), function() {
					if (!aAS) return !0;
					s.t(8, s.aDB().aKP, new rn(29, {
						ro: 1,
						pG: aLR.tw().substring(0, 160)
					}))
				}, 0, 0, 1), aL9.pQ(new r4([aLH.button])), 0 !== data.aLS && (aL9.pQ(new r4([new v(L(1 === data.aLS ? 206 : 207), function() {
					s.t(8, s.aDB().aKP, new rn(29, {
						ro: 0,
						pG: ""
					}))
				}, 0, 0, 1).button])), aL9.pH(1 === data.aLS ? L(208, [data.aLU - 1]) : L(209, [data.aLU - 1]))), aL9.pH(L(205, [data.aLT])), pU.push(aL9))
			}(pU),
			function(pU) {
				var aL9;
				data.aKt && 0 !== data.aLS && ((aL9 = new pC).pF(L(210)), aL9.pJ(data.aLQ), aL9.pQ(new r4([new v(L(211, 0, "Report"), function(e) {
					return ay.x.aDk(0) && (b8.pZ.a28(e), ay.aLF.aLV({
						ro: 5,
						rk: data.rk
					})), !0
				}, 0, 0, 1).button])), pU.push(aL9))
			}(pU), pU.push(function() {
				var aL9 = new pC,
					aLA = (aL9.pF(L(153)), [L(154), L(155), L(156), L(157), L(158)]),
					e1 = data.aLB;
				aL9.pL(L(159) + b8.zN.a2u(data.uh, .01, 2) + "<br>" + L(160) + (e1 + 1) + " / " + data.ug + "<br>" + L(161) + aLA[e1 < 10 ? 0 : e1 < 50 ? 1 : e1 < 200 ? 2 : e1 < 1e3 ? 3 : 4]), data.aKt || (aL9.pH(L(162)), aL9.pH(L(163)),
					aL9.pH(L(164)));
				return aL9
			}()), data.aKt && pU.push(function() {
				var aL9 = new pC,
					qN = (aL9.pF(L(165)), new qO({
						value: bh.dr.data[147].value,
						e2: -1
					}, 1, void 0, function(e) {
						bh.r1.r2(147, aLC(e.target.value))
					})),
					aLD = (aL9.pQ(qN), new v(L(14), function(e) {
						return qN.e.readOnly && ay.x.aDk(0) && (b8.pZ.a28(e), aLE(), ay.aLF.aLG({
							ro: 0,
							rk: data.rk,
							value: bh.dr.data[147].value
						})), !0
					}, 1)),
					aLH = new v(L(166), function(e) {
						return e.textContent === L(166) ? (e.textContent = L(167), qN.e.readOnly = !0, aLD.pu(0), aLD.button.style.color = b9.nd, bh.r1.r2(147, qN.e.value), aLC(bh.dr.data[147].value)) : aLE(), !0
					}),
					pI = (aL9.pQ(new r4([aLH.button])), aL9.pH()),
					aLC = function(f2) {
						f2 = b8.fw.a2c(f2, 2, 1e6), pI.textContent = L(168, [f2, bh.dr.data[105].value, data.rk, f2 - 1])
					},
					aLE = function() {
						aLH.button.textContent = L(166), qN.e.readOnly = !1, aLD.pu(1), aLD.button.style.color = b9.mh
					};
				return aLC(bh.dr.data[147].value), aL9.pQ(new r4([aLD.button])), aL9
			}());
		pU.push(function() {
			var aL9 = new pC,
				qN = (aL9.pF(L(169)), new qO({
					value: data.rk,
					e2: -1
				}));
			return qN.e.readOnly = !0, aL9.pQ(qN), aL9.pQ(new r4([new v(L(170), function(e) {
				return b8.pZ.a27(qN.e), b8.pZ.a28(e), !0
			}).button])), aL9
		}()), data.aKt || (pU.push(function() {
			var aL9 = new pC,
				aLI = (aL9.pF(L(171)), new qO(bh.dr.data[106]));
			return aLI.e.readOnly = !0, aLI.e.type = "password", aL9.pQ(aLI), aL9.pQ(new r4([new v(L(172), function(e) {
				return e.textContent === L(172) ? (e.textContent = L(173), aLI.e.type = "text") : (e.textContent = L(172), aLI.e.type = "password"), !0
			}).button, new v(L(170), function(e) {
				return b8.pZ.a27(aLI.e), b8.pZ.a28(e), !0
			}).button])), aL9.pQ(new r4([new v(L(174), function() {
				s.t(8, s.aDB().aKP, new rn(15))
			}).button])), aL9.pF(L(175), "0.8em"), aL9.pH(L(176)), aL9.pH(L(177)), aL9.pH(L(178)), aL9
		}()), pU.push(function() {
			var aL9 = new pC;
			return aL9.pF(L(179)), aL9.pQ(new r4([new v(L(180), function() {
				s.t(6, s.aDB().aKP)
			}).button])), aL9.pQ(new r4([new v(L(181), function() {
				bh.r1.r2(105, ""), s.t(8, s.aDB().aKP, new rn(18))
			}).button])), aL9.pQ(new r4([new v(L(182) + bh.dr.data[105].value, function() {
				s.t(4, 0, new u(L(183), L(184), !0, [new v("⬅️ " + L(32), function() {
					s.t(7, s.aCB(7).aKP)
				})]))
			}, b9.nM).button])), aL9
		}()), pU.push(function() {
			function aLK(e2) {
				for (var aA = 0; aA < 2; aA++) aLJ[aA].pu(0 === e2 ? b9.mt : 0 === aA ? b9.nM : b9.n4)
			}
			var pO, aLJ, aL9 = new pC;
			aL9.pF(L(185)), aL9.pH(L(186)), bh.x.uR();
			return aLJ = [new v(L(187), function() {
				var e2 = Math.min(bh.dr.data[117].value, pO.pP.length - 1);
				if (!(e2 < 1)) {
					pO.pP[e2].remove(), pO.pP.splice(e2, 1);
					for (var aA = e2; aA < pO.pP.length; aA++) pO.pP[aA].name = "" + aA;
					bh.x.uU(e2), e2 = bh.dr.data[117].value, pO.pP[e2].textContent = pO.pP[e2].textContent.replace("⚪", "🟢"), aLK(e2)
				}
			}, b9.mt), new v(L(188), function() {
				var e2 = Math.min(bh.dr.data[117].value, pO.pP.length - 1);
				e2 < 1 || (e2 = bh.x.uV(e2), bh.r1.r2(105, e2.rk), bh.r1.r2(106, e2.password), s.t(8, s.aDB().aKP, new rn(18)))
			}, b9.mt)], (pO = new tK(bh.dr.data[117], aLK)).pP[0].style.marginTop = "0.5em", aL9.pN(pO), aL9.pQ(new r4([aLJ[1].button])), aL9.pQ(new r4([aLJ[0].button])), aL9
		}()));
		return pU.push(function() {
				var aL9 = new pC,
					aLA = (aL9.pF(L(192)), [L(193), L(194), L(195), L(196)]),
					e1 = data.aLL;
				return aL9.pL(L(197) + (data.aLM / 100).toFixed(2) + "<br>" + L(160) + (e1 + 1) + " / " + data.ug + "<br>" + L(161) + aLA[e1 < 10 ? 0 : e1 < 50 ? 1 : e1 < 200 ? 2 : 3]), aL9
			}()), pU.push(function() {
				var aL9 = new pC;
				return aL9.pF(L(189)), aL9.pL(L(190) + b8.zN.a2u(data.ud, .1, 1) + "<br>" + L(160) + (data.ue + 1) + " / " + data.ug + "<br>" + L(191) + data.uf), aL9
			}()),
			function(pU) {
				var aL9 = new pC,
					aLW = data.uk,
					aLX = (aL9.pF(L(212)), aL9.pL(L(213, [aLW ? "[" + data.ui + "]" : "-"])), aL9.pL(L(214, [b8.zN.a2u(aLW, .1, 1)])), aL9.pL(L(215, [data.um + 1 + " / " + data.ug])), data.un),
					aLY = (aL9.pL(L(216, [aLX])), data.up);
				aL9.pL(L(217, [aLY])), aL9.pL(L(218, [(aLX / Math.max(aLY, 1)).toFixed(1)])), aLW = data.ul, aL9.pF(L(219), "0.8em"), aL9.pL(L(213, [aLW ? "[" + data.uj + "]" : "-"])), aL9.pL(L(214, [b8.zN.a2u(aLW, .1, 1)])), aLX = data.uo,
					aL9.pL(L(216, [aLX])), aLY = data.uq, aL9.pL(L(217, [aLY])), aL9.pL(L(218, [(aLX / Math.max(aLY, 1)).toFixed(1)])), pU.push(aL9)
			}(pU),
			function(pU) {
				var aL9 = new pC;
				aL9.pF(L(220)), aL9.pL(L(197) + data.aLZ + "<br>" + L(161) + (data.aLa.length ? L(221, [data.aLa]) : L(222))), data.aKt && (aL9.pQ(new r4([new v(L(223), function(e) {
					return ay.x.aDk(0) && (b8.pZ.a28(e), ay.aLF.aLV({
						ro: 4,
						rk: data.rk
					})), !0
				}, 0, 0, 1).button])), aL9.pH(L(224)), aL9.pH(L(225)));
				pU.push(aL9)
			}(pU), pU.push(function() {
				var aL9 = new pC;
				if (aL9.pF(L(198)), aL9.pL(L(199) + data.aLN + "<br>" + L(160) + (data.aLO + 1) + " / " + data.ug + "<br>" + L(161) + bn.e4(data.aLO)), data.aKt) {
					var qN = new qO({
							value: bh.dr.data[157].value,
							e2: -1
						}, 1, void 0, function(e) {
							bh.r1.r2(157, aLC(e.target.value))
						}),
						aLH = (qN.e.style.marginTop = "0.6em", aL9.pQ(qN), new v(L(166), function(e) {
							return e.textContent === L(166) ? (e.textContent = L(167), qN.e.readOnly = !0, aLP[0].pu(0), aLP[1].pu(0), aLP[0].button.style.color = b9.nd, aLP[1].button.style.color = b9.nd, aLC(bh.dr.data[157]
								.value)) : aLE(), !0
						})),
						aLP = (aL9.pQ(new r4([aLH.button])), [new v("−", function(e) {
							return qN.e.readOnly && ay.x.aDk(0) && (b8.pZ.a28(e), aLE(), ay.aLF.aLG({
								ro: 2,
								rk: data.rk,
								value: bJ.p7(bh.dr.data[157].value, 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qN.e.readOnly && ay.x.aDk(0) && (b8.pZ.a28(e), aLE(), ay.aLF.aLG({
								ro: 1,
								rk: data.rk,
								value: bJ.p7(bh.dr.data[157].value, 3, 32767)
							})), !0
						}, 1)]),
						pI = aL9.pH(),
						aLC = function(f2) {
							return f2 = b8.fw.a2c(f2, 3, 32767), pI.textContent = L(200, [f2 - 1, f2, bh.dr.data[105].value]), f2
						};
					aL9.pQ(new r4([aLP[0].button, aLP[1].button]));
					for (var aA = 0; aA < 2; aA++) aLP[aA].button.style.fontSize = "1.6em";
					var aLE = function() {
						aLH.button.textContent = L(166), qN.e.readOnly = !1, aLP[0].pu(1), aLP[1].pu(1), aLP[0].button.style.color = b9.mh, aLP[1].button.style.color = b9.mh
					};
					aLC(bh.dr.data[157].value)
				}
				return aL9
			}()), pU
	}())
}

function aKh() {
	var aLc, aLd, aLe, pU;

	function aLf() {
		aLh(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		2 === aC.data.aIncomeType ? (b8.pi.a1U(aLe.tw(), aC.data.aIncomeData, 255), b8.pi.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(226), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), aL9.pN(new tK({
			tO: [L(228), L(229), L(230)],
			value: aC.data.aIncomeType
		}, function(e2) {
			aLh(), 2 !== e2 || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eX)), aC.data.aIncomeType = e2, s.t(22)
		})), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9;
		1 === aC.data.aIncomeType && ((aL9 = new pC).pF("Value"), aL9.pQ(new qO({
			e2: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pU.push(aL9))
	}(pU), function(pU) {
		var aL9;
		2 === aC.data.aIncomeType && ((aL9 = new pC).pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.aIncomeData, 4)), aL9.pQ(aLe), pU.push(aL9))
	}(pU), pU))
}

function aKk() {
	var aLc, aLd, aLe;

	function aLf() {
		aLh(), 3 !== aC.data.botDifficultyType || b8.pi.a1I(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		3 === aC.data.botDifficultyType && b8.pi.a1U(aLe.tw(), aC.data.botDifficultyData, aD.k1.length - 1)
	}

	function aLm(pU, e2) {
		var aL9 = new pC,
			value = (aL9.pF(e2 < 0 ? L(57) : L(56) + " " + be.z8[e2 % 9]), 0 <= e2 && (aL9.pL(L(233) + ": " + aC.data.teamPlayerCount[e2]).style.marginBottom = "1em"), e2 < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[e2]);
		aL9.pN(new tK({
			tO: aD.k1,
			value: value
		}, function(hO) {
			e2 < 0 ? aC.data.botDifficultyValue = hO : aC.data.botDifficultyTeam[e2] = hO
		})), pU.push(aL9)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(57), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, function() {
		var pU = [];
		if (function(pU) {
				var aL9 = new pC,
					tO = (aL9.pF(L(227)), [L(229), L(231), L(232), L(230)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tO.splice(2, 1));
				aL9.pN(new tK({
					tO: tO,
					value: value
				}, function(e2) {
					aLh(), aC.data.botDifficultyType = e2, 0 === aC.data.gameMode && 2 === e2 && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eX)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pU.push(aL9)
			}(pU), 0 === aC.data.botDifficultyType) aLm(pU, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aLm(pU, aA);
		else 3 === aC.data.botDifficultyType && ! function(pU) {
			var aL9 = new pC;
			aL9.pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.botDifficultyData, 8)), aL9.pQ(aLe), pU.push(aL9)
		}(pU);
		return pU
	}())
}

function aLn(data) {
	var aKr, aLo, aLp, aLq, aLr, aLs, aLt, colors, aLu, aLv, aLw = 0,
		aLx = 0,
		aLy = !1,
		aLz = !1,
		aM0 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMU(kt, ku) {
		! function(kt, ku) {
			return aLo < kt && kt < aLo + aLq && aLp < ku && ku < aLp + aLr
		}(aLw = kt, aLx = ku) ? (aLy && (bd.de = !0), aLy = !1) : (aLy = !0, bd.de = !0)
	}
	this.show = function() {
		aLz = bh.dr.data[127].value, aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize();
		var ev = h.k,
			td = aKr.ta(),
			aM9 = ev * td.tc,
			ev = ev * td.qt;
		aLs = b8.pZ.sC(.06), aLt = b8.pZ.sC(.04), aLo = b8.pZ.sC(.06), aLp = ev + aLs, aLq = h.i - aLo - aLt, aLr = aM9 + ev - aLp - aLt
	}, this.te = function() {
		aKr.te(),
			function() {
				var aA, aM6, g3, eh, et, g = data.data,
					aMD = 1,
					aME = .125,
					aMF = aLz ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aM6 = g[aA].aM6, g3 = aM6.length, aMD = Math.max(g3, aMD), et = 0; et < g3; et++) aME = Math.max(aM6[et], aME), aMF = Math.min(aM6[et], aMF);
				var m8 = aLp + aLr,
					wr = aLr / (aME - aMF),
					wq = 1 / (aMD - 1);
				for (tf.lineWidth = ba.xn, aA = 0; aA < g.length; aA++) {
					for (aM6 = g[aA].aM6, g3 = aM6.length, eh = aLo, tf.beginPath(), tf.moveTo(eh + aLq, m8 - wr * (aM6[g3 - 1] - aMF)), et = g3 - 2; 0 <= et; et--) tf.lineTo(eh + wq * et * aLq, m8 - wr * (aM6[et] - aMF));
					tf.strokeStyle = colors[aA], tf.stroke()
				}(function(aMF, aME, m8, wr) {
					tf.font = b8.pZ.rN(0, .25 * aLo), b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 2), tf.fillStyle = colors[0];
					for (var eh = .92 * aLo, aA = 0; aA < 3; aA++) {
						var f2 = aMF + aA * (aME - aMF) / 2;
						tf.fillText((f2 / 1e3).toFixed(3), eh, m8 - wr * (f2 - aMF))
					}
				})(aMF, aME, m8, wr),
				function(aMD) {
					var ej = aLp + aLr + .15 * aLt;
					tf.font = b8.pZ.rN(0, Math.min(.4 * aLt, .028 * h.i)), b8.pZ.textBaseline(tf, 0), b8.pZ.textAlign(tf, 2), tf.fillStyle = colors[0], tf.fillText(b8.a19.a1w(aLu), aLo + aLq, ej), b8.pZ.textAlign(tf, 0), tf.fillText(b8.a19.a1w(
						new Date(aLv.getTime() - 6e4 * (aMD - 1) * aM0[data.aM5])), aLo, ej)
				}(aMD),
				function(aMD, aMF, aME) {
					if (aLy && !(aMD < 2)) {
						for (var a70, e2 = (aLw - aLo) / aLq * (aMD - 1), aMI = Math.floor(e2), aMJ = Math.floor(1 + e2), aMK = e2 - aMI, aML = 1e5, aMM = -1, aMN = -1, aMO = aME - (aME - aMF) * (aLx - aLp) / aLr, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAe, aM6 = g[aA].aM6;
							aM6.length <= aMJ || (aM6 = aM6[aMI] + aMK * (aM6[aMJ] - aM6[aMI]), (aAe = Math.abs(aMO - aM6)) < aML && (aML = aAe, aMM = aA, aMN = aM6))
						} - 1 !== aMM && (aME = aLp + aLr - (aMN - aMF) / (aME - aMF) * aLr, tf.lineWidth = .5 * ba.xn, tf.strokeStyle = colors[aMM], tf.beginPath(), tf.moveTo(aLo, aME), tf.lineTo(aLw, aME), tf.lineTo(aLw, aLp + aLr), tf
						.stroke(), tf.beginPath(), tf.arc(aLw, aME, .1 * aLo, 0, 2 * Math.PI), tf.fillStyle = colors[aMM], tf.fill(), aMF = aLp + aLr + .15 * aLt, b8.pZ.textAlign(tf, 1), a70 = aMD - 2 < e2 ? (a70 = aLv.getTime() - 6e4 * aM0[
								data.aM5], new Date(a70 + (e2 - (aMD - 2)) * (aLu.getTime() - a70))) : new Date(aLv.getTime() - 6e4 * (aMD - e2 - 1) * aM0[data.aM5]), aMD = b8.a19.a1w(a70), e2 = b8.pZ.measureText(aMD), a70 = bJ.p7(aLw, aLo +
								.5 * e2, aLo + aLq - .5 * e2), tf.fillStyle = b8.color.mZ(70, 50, 20), tf.fillRect(a70 - .52 * e2, aLp + aLr, 1.04 * e2, .55 * aLt), tf.fillStyle = colors[0], tf.fillText(aMD, a70, aMF), tf.font = b8.pZ.rN(0,
								.25 * aLo), b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 2), a70 = .92 * aLo, aMD = (aMN / 1e3).toFixed(3), e2 = b8.pZ.measureText(aMD), aMF = a70 - 1.04 * e2, tf.fillStyle = b8.color.mZ(70, 50, 20), tf
							.fillRect(aMF, aME - .1625 * aLo, aLo - aMF, .275 * aLo), tf.fillStyle = colors[aMM], tf.fillText(aMD, a70, aME))
					}
				}(aMD, aMF, aME)
			}(), tf.lineWidth = ba.xn, tf.strokeStyle = b9.mh, tf.beginPath(), tf.moveTo(aLo, aLp), tf.lineTo(aLo, aLp + aLr), tf.lineTo(aLo + aLq, aLp + aLr), tf.stroke();
		var aA, fontSize = .5 * aLs,
			g = (tf.font = b8.pZ.rN(0, fontSize), b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 0), data.data),
			ea = g.length,
			ej = aLp - .5 * aLs,
			pG = "";
		for (aA = 0; aA < ea; aA++) pG += g[aA].name + "  ";
		pG = pG.trim();
		var aMR = b8.pZ.measureText(pG),
			eh = .5 * (h.i - aMR);
		for (aMR > h.i && (eh = 0, tf.font = b8.pZ.rN(0, h.i / aMR * fontSize)), aA = 0; aA < ea; aA++) tf.fillStyle = colors[aA], tf.fillText(g[aA].name, eh, ej), eh += b8.pZ.measureText(g[aA].name + "  ")
	}, this.go = function(kt, ku) {
		aMU(kt, ku)
	}, this.a0J = function(kt, ku) {
		aMU(kt, ku)
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	};
	var aA, dm, a1u, hO, ed = data.data,
		ea = ed.length,
		max = 1;
	for (aA = 0; aA < ea; aA++) max = Math.max(max, ed[aA].aM6.length);
	for (aA = 0; aA < ea; aA++)
		for (; ed[aA].aM6.length < max;) ed[aA].aM6.unshift(0);
	dm = new Date, a1u = 6e4 * dm.getTimezoneOffset(), hO = dm.getTime() - a1u, aLu = new Date(hO), 6 === data.aM5 ? function(dm, a1u) {
		var aM8 = dm.getUTCFullYear(),
			dm = dm.getUTCMonth() + 1;
		aLv = dm < 12 ? new Date(Date.UTC(aM8, dm) - a1u) : new Date(Date.UTC(aM8 + 1, 0) - a1u)
	}(dm, a1u) : (a1u = 6e4 * aM0[data.aM5], aLv = data.aM5 <= 4 ? new Date(hO + a1u - dm.getTime() % a1u) : new Date(hO + a1u - (dm.getTime() + 2592e5) % a1u)), hO = b8.color, colors = [b9.mh, hO.mZ(255, 0, 0), hO.mZ(0, 200, 0), hO.mZ(80, 80,
		255), hO.mZ(255, 255, 0), hO.mZ(255, 0, 255), hO.mZ(0, 255, 255), hO.mZ(255, 140, 0), hO.mZ(128, 128, 128), hO.mZ(0, 255, 140)], aKr = new tP(L(234) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aM5] + ", " + b8.a19.a1t(aLu), [
		new v("⬅️ " + L(32), function() {
			s.x.aAY()
		}), new v(L(235), function() {
			s.t(14)
		})
	], !1)
}

function aKZ() {
	var aKr, aKs, pU;
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aKs.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(L(236), [new v("⬅️ " + L(32), function() {
		s.aKp(13)
	})]), aKs = new pS(aKr.tV, ((pU = []).push(function() {
		var aL9 = new pC,
			aLH = (aL9.pF(L(237)), aL9.pH(L(238)), new v(L(239), function() {
				bh.r1.r2(130, 0), s.x.aMZ()
			}, 0, 0, 1)),
			qN = new qO(bh.dr.data[126], 0, function() {
				aLH.button.click()
			});
		return aL9.pQ(qN), qN.e.placeholder = "a,b,c", qN.e.style.marginTop = "0.5em", aL9.pQ(new r4([aLH.button])), aL9
	}()), pU.push(function() {
		var aL9 = new pC,
			aLH = new v(L(239), function() {
				bh.r1.r2(130, 1), s.x.aMZ()
			}, 0, 0, 1),
			aMa = new qO(bh.dr.data[129], 1, function() {
				aMa.e.focus()
			}),
			aMb = new qO(bh.dr.data[128], 1, function() {
				aLH.button.click()
			});
		return aL9.pF(L(240)), aL9.pQ(aMb), aMb.e.style.marginBottom = "0.5em", aL9.pF(L(241)), aL9.pQ(aMa), aL9.pQ(new r4([aLH.button])), aL9
	}()), pU.push(function() {
		var aL9 = new pC;
		return aL9.pF(L(242)), bh.dr.data[125].tO = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aL9.pN(new tK(bh.dr.data[125])), aL9
	}()), pU.push(function() {
		var aL9 = new pC;
		return aL9.pF(L(243)), aL9.pQ(new qy(bh.dr.data[127], L(244))), aL9
	}()), pU))
}

function aKY() {
	var aKr, aMc, aLq, aMd, aMe, aMf, colors = [0, 0, 0],
		aMg = -1;

	function aMj(aA) {
		var aMk = aMc.ej + aA * (ba.gap + aMf);
		tf.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", tf.fillRect(aMd, aMk, colors[aA] * aMe, aMf), tf.strokeStyle = b9.mh, tf.strokeRect(aMd, aMk, aMe,
			aMf), tf.fillStyle = b9.mh, tf.font = b8.pZ.rN(0, .32 * aMf), b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 0), tf.fillText(L(0 === aA ? 247 : 1 === aA ? 248 : 249) + aMh(aA), aMd + ba.gap, aMk + .53 * aMf)
	}

	function aMh(aA, aMl) {
		return aMl = aMl || 256, bJ.p7(Math.floor(aMl * colors[aA]), 0, aMl - 1)
	}

	function a0n(kt, ku) {
		return !(kt < aMd || ku < aMc.ej || kt > aMc.eh + aMc.i || ku > aMc.ej + aMc.j)
	}
	this.show = function() {
		var f2 = bh.dr.data[121].value;
		colors[0] = (f2 >> 12) / 63, colors[1] = (f2 >> 6 & 63) / 63, colors[2] = (63 & f2) / 63, aKr.show(), this.resize()
	}, this.qq = function() {
		bh.r1.r2(121, (aMh(0, 64) << 12) + (aMh(1, 64) << 6) + aMh(2, 64)), aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aMc.resize();
		var ev = h.k,
			td = aKr.ta(),
			aMi = (aMc.ej = Math.max(aMc.ej, ev * td.qt + ba.gap), ev * td.tc - 2 * ba.gap);
		aMc.j = Math.min(aMc.j, aMi), aMc.i = 2 * aMc.j, aMc.ej = ev * td.qt + .5 * (ev * td.tc - aMc.j), aMc.eh = .5 * (h.i - aMc.i), aLq = .25 * aMc.i, aMd = aMc.eh + aLq + ba.gap, aMe = aMc.i - aLq - ba.gap, aMf = (aMc.j - 2 * ba.gap) / 3
	}, this.te = function() {
		var e1, sB, eu;
		aKr.te(), tf.lineWidth = ba.xn, e1 = aMh(0), sB = aMh(1), eu = aMh(2), tf.fillStyle = "rgb(" + e1 + "," + sB + "," + eu + ")", tf.fillRect(aMc.eh, aMc.ej, aLq, aMc.j), tf.strokeStyle = b9.mh, tf.strokeRect(aMc.eh, aMc.ej, aLq, aMc.j), tf
			.fillStyle = e1 + sB + eu < 306 && sB < 150 ? b9.mh : b9.mY, b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 1), tf.font = b8.pZ.rN(0, .1 * aMc.j), tf.rotate(-Math.PI / 2), tf.fillText(L(246), -aMc.ej - .5 * aMc.j, aMc.eh + .5 * aLq),
			tf.setTransform(1, 0, 0, 1, 0, 0), aMj(0), aMj(1), aMj(2)
	}, this.go = function(kt, ku) {
		a0n(kt, ku) && (aMg = bJ.p7(Math.floor((ku - aMc.ej) / (aMf + .75 * ba.gap)), 0, 2), colors[aMg] = bJ.p7((kt - aMd) / aMe, 0, 1), bd.de = !0)
	}, this.a0J = function(kt) {
		-1 !== aMg && (colors[aMg] = bJ.p7((kt - aMd) / aMe, 0, 1), bd.de = !0)
	}, this.a0M = function(kt, ku, deltaY) {
		a0n(kt, ku) && (kt = bJ.p7(Math.floor((ku - aMc.ej) / (aMf + .75 * ba.gap)), 0, 2), colors[kt] = bJ.p7(colors[kt] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.de = !0)
	}, this.a0h = function() {
		0 <= aMg && (aMg = -1, bd.de = !0)
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(L(245), [new v("⬅️ " + L(32), function() {
		s.x.aAY()
	})], !1), aMc = new qB([.5, .25], [.5, .5], 1)
}

function aKg() {
	var aLc, aLd, aLe, q9;

	function aLf() {
		aLh(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aKq()[19] = null, s.a07()
	}

	function aMm() {
		aLh(), s.t(21)
	}

	function aLh() {
		1 === aC.data.gameMode ? aC.a3H.a3L() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pi.a1U(aLe.tw(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, q9 = [new v("⬅️ " + L(32), aLf)], 1 === aC.data.gameMode && q9.push(new v(L(250), aMm, 1, 1)), aLc = new tP(L(251), q9), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), 0 === aC.data.gameMode && (aL9.pN(new tK({
			tO: [L(252), L(230)],
			value: aC.data.colorsType
		}, function(e2) {
			aLh(), aC.data.colorsType = e2, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eX || (aC.data.colorsData = new Uint32Array(aC.eX)), s.t(21)
		})), aL9.pQ(new rE));
		aL9.pQ(new qy({
			value: aC.data.selectableColor
		}, L(253), function(value) {
			aC.data.selectableColor = value
		})), pU.push(aL9)
	}(q9 = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pU) {
		var aL9 = new pC;
		aL9.pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.colorsData, 1)), aL9.pQ(aLe), pU.push(aL9)
	}(q9) : (aC.a3H.a3L(), q9.push(function() {
		var aL9 = new pC;
		aL9.pF(L(233));
		for (var aA = 0; aA < be.z8.length; aA++) {
			var hO = (aA + 1) % be.z8.length,
				e = aL9.pL((0 == hO ? "" : "Team ") + be.z8[hO]);
			aA && (e.style.marginTop = "0.5em"), aL9.pQ(new qO({
				e2: -1,
				value: aC.data.teamPlayerCount[hO]
			}, 1, 0, function(e) {
				aLc.tW[1].pu(0);
				var playerCount = bJ.p7(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aMo] = playerCount
			})).e.aMo = hO
		}
		return aL9
	}())), q9))
}

function rn(id, a2f, aMp) {
	var aKr, aMq;

	function aMv() {
		aMq.pV.innerHTML += "<br>" + L(256)
	}

	function aMu() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dW(bB.aB), bh.r1.r2(110, bD.rp.rq(bD.rp.rr(8))), ay.aLF.aN9()
	}
	this.aMr = !0, this.aMs = id, this.show = function() {
		aKr.show(), this.resize(), 15 === id ? (ay.x.aMt(id) ? aMu : aMv)() : 16 === id ? ay.x.aMt(id) ? ay.aAV.aMw(2) : aMv() : 17 === id ? ay.x.aMt(id) ? ay.aAV.aMw(3) : aMv() : 18 === id ? (ay.x.close(0, 3253), ay.x.aDq(0, id), aMv()) : 21 ===
			id ? ay.x.aMt(id) ? ay.aMx.aMy(a2f.s6, a2f.s7, a2f.s8) : aMv() : 22 === id ? ay.x.aMt(id) ? ay.aMx.aMz(a2f.s6, a2f.aN0, a2f.aN1) : aMv() : 23 === id ? ay.x.aMt(id) ? ay.aMx.aN2(a2f.aM5, a2f.zQ) : aMv() : 24 === id ? ay.x.aMt(id) ? ay
			.aMx.aN3(a2f.aM5, a2f.s7, a2f.s8) : aMv() : 25 === id ? ay.x.aMt(id) ? ay.aLF.aLV(a2f) : aMv() : 28 === id ? ay.x.aMt(id) ? ay.aMx.aN4(a2f.s6, a2f.aN0, a2f.aN1) : aMv() : 29 === id && (ay.x.aMt(id) ? ay.aLF.aN5(a2f) : aMv())
	}, this.aN6 = function() {
		15 === id ? aMu() : 16 === id ? ay.aAV.aMw(2) : 17 === id ? ay.aAV.aMw(3) : 18 === id ? s.t(8, this.aKP, new rn(16)) : 21 === id ? ay.aMx.aMy(a2f.s6, a2f.s7, a2f.s8) : 22 === id ? ay.aMx.aMz(a2f.s6, a2f.aN0, a2f.aN1) : 23 === id ? ay.aMx
			.aN2(a2f.aM5, a2f.zQ) : 24 === id ? ay.aMx.aN3(a2f.aM5, a2f.s7, a2f.s8) : 25 === id ? ay.aLF.aLV(a2f) : 28 === id ? ay.aMx.aN4(a2f.s6, a2f.aN0, a2f.aN1) : 29 === id ? ay.aLF.aN5(a2f) : 1e3 === id && (this.aMs = id = 25, ay.aLF.aLV(
				a2f))
	}, this.aN7 = function(code, bq, data) {
		!bq && code !== id || (16 === code ? s.t(7, this.aKP) : 17 === code ? (ay.x.close(0, 3252), bh.x.uU(0), bh.dr.data[117].tO && 0 < bh.dr.data[117].tO.length ? (bq = bh.x.uV(0), bh.r1.r2(105, bq.rk), bh.r1.r2(106, bq.password), s.t(8, this
			.aKP, new rn(16))) : (bh.r1.r2(105, ""), s.x.aAY())) : 21 === code ? s.t(10, this.aKP, new aN8(data)) : 23 === code ? s.t(13, 0, new aLn({
			data: data,
			aM5: a2f.aM5
		})) : 25 === code && (s.x.aKa.rk = a2f.rk, s.t(15, this.aKP)))
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aMq.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(L(254), [new v("⬅️ " + L(32), function() {
		aMp ? s.t(29) : s.x.aAY()
	})]), aMq = new r3(aKr.tV, L(255))
}

function aKe() {
	var aLc, aLd, pU;

	function aNC() {
		var g3;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3H.a3L()), g3 = b8.pi.a1O(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g3) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aLf() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNE(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNE() {
		b7.op.dW(), bh.r1.r2(156, b7.a3X.yF())
	}

	function aNA() {
		aC.data.isReplay = 0, aNE(), aC.a3H.a3i(), aZ.aE2(), aC.a3H.a3f(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vR : null, aC.a3K(), aC.a3J = 1
	}

	function aNS() {
		aNC();
		for (var g = [aNH(), aNI(), aNJ()], aA = 3; aA < 6; aA++) aLd.pV.removeChild(aLd.pW[aA].pE), aLd.pW[aA] = g[aA - 3], aLd.pV.appendChild(aLd.pW[aA].pE);
		aLd.resize()
	}

	function aNH() {
		var aNT, aL9 = new pC;
		return aL9.pF(L(251)), aNT = 0 === aC.data.gameMode ? [L(252), L(230)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aL9.pL(aNT), aL9.pQ(new r4([new v(L(260), function() {
			s.t(21)
		}).button])), aL9
	}

	function aNI() {
		var aL9 = new pC,
			g = (aL9.pF(L(57)), [L(229) + ": " + aD.k1[aC.data.botDifficultyValue], L(231), L(232), L(230)]);
		return aL9.pL(g[aC.data.botDifficultyType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(25)
		}).button])), aL9
	}

	function aNJ() {
		var aL9 = new pC,
			g = (aL9.pF("Spawning"), [L(252), L(262), L(230)]);
		return aL9.pL(g[aC.data.spawningType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(24)
		}).button])), aL9
	}
	this.show = function() {
		aLc.show(), this.resize(), aLc.tV.scrollTop = s.x.aFx[0]
	}, this.qq = function() {
		s.x.aFx[0] = aLc.tV.scrollTop, aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP("🔧 " + L(257), [new v("⬅️ " + L(32), aLf), new v(L(258), aNA)]), aNC(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vR : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIU(bQ.a3g(aC.data), 0).vR : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIU(bQ.a3g(aC.data), aC.data.mapSeed).vR)), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC,
			a1e = (aL9.pF(L(259)), aC.data.canvas);
		a1e.style.width = "100%", aL9.pQ({
			e: a1e
		}), aL9.pQ(new r4([new v(L(260), function() {
			s.t(20)
		}).button])), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9 = new pC;
		aL9.pF(L(233)), aL9.pQ(new qO({
			e2: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p7(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pi.a1O(aC.data.teamPlayerCount, 0), aC.a3H.a3L(), b8.pi.a1O(aC.data.teamPlayerCount, 0) !== e) && aNS()
		})), pU.push(aL9)
	}(pU), function(pU) {
		var aL9 = new pC;
		aL9.pF(L(261)), aL9.pN(new tK({
			tO: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(e2) {
			aC.data.gameMode !== e2 && (aC.data.gameMode = e2, aNS())
		})), pU.push(aL9)
	}(pU), pU.push(aNH()), pU.push(aNI()), pU.push(aNJ()), function(pU) {
		var aL9 = new pC,
			g = (aL9.pF(L(263)), [L(264), L(265), L(230)]);
		aL9.pL(g[aC.data.playerNamesType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(23)
		}).button])), pU.push(aL9)
	}(pU), function(pU) {
		var aL9 = new pC,
			g = (aL9.pF(L(226)), [L(228), L(229) + ": " + aC.data.aIncomeValue, L(230)]);
		aL9.pL(g[aC.data.aIncomeType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(22)
		}).button])), pU.push(aL9)
	}(pU), function(pU) {
		var aL9 = new pC,
			g = (aL9.pF(L(266)), [L(228), L(229) + ": " + aC.data.tIncomeValue, L(230)]);
		aL9.pL(g[aC.data.tIncomeType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(26)
		}).button])), pU.push(aL9)
	}(pU), function(pU) {
		var aL9 = new pC,
			g = (aL9.pF(L(267)), [L(228), L(229) + ": " + aC.data.iIncomeValue, L(230)]);
		aL9.pL(g[aC.data.iIncomeType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(27)
		}).button])), pU.push(aL9)
	}(pU), function(pU) {
		var aL9 = new pC,
			g = (aL9.pF(L(268)), [L(228), L(229) + ": " + aC.data.sResourcesValue, L(230)]);
		aL9.pL(g[aC.data.sResourcesType]), aL9.pQ(new r4([new v(L(260), function() {
			s.t(28)
		}).button])), pU.push(aL9)
	}(pU), function(pU) {
		var aL9 = new pC;
		aL9.pF(L(269)), aL9.pQ(new r4([new v(L(270), function() {
			s.w(), aC.a3H.a3j(), s.x.aFx[0] = 0, s.t(19)
		}).button])), aL9.pQ(new r4([new v(L(271), function() {
			bl.aFm()
		}).button])), aL9.pQ(new r4([new v(L(272), function() {
			return bl.aFo(), !0
		}).button])), pU.push(aL9)
	}(pU), pU))
}

function aKm() {
	var aLc, aLd, aLe, pU;

	function aLf() {
		aLh(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		2 === aC.data.iIncomeType && b8.pi.a1U(aLe.tw(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(267), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), aL9.pN(new tK({
			tO: [L(228), L(229), L(230)],
			value: aC.data.iIncomeType
		}, function(e2) {
			aLh(), 2 !== e2 || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eX), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = e2, s.t(27)
		})), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9;
		1 === aC.data.iIncomeType && ((aL9 = new pC).pF("Value"), aL9.pQ(new qO({
			e2: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pU.push(aL9))
	}(pU), function(pU) {
		var aL9;
		2 === aC.data.iIncomeType && ((aL9 = new pC).pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.iIncomeData, 4)), aL9.pQ(aLe), pU.push(aL9))
	}(pU), pU))
}

function aKU() {
	var aNU, aNV, aMc, qN, aNW;
	this.aEd = new rv, aMc = new qB([.45, .27], [.5, .5], 2 / 3), aNV = [new v("⚔️<br>" + L(273), function() {
			aNX(0)
		}, b9.nA), new v("🗡️<br>" + L(257), function() {
			aNX(1)
		}, b9.nS), new v("🔑<br>" + L(274), function() {
			aNX(2)
		}, b9.ni), new v("☰<br>" + L(275), function() {
			aNX(3)
		}, b9.mu), new v("", function() {
			s.t(12)
		}, b9.md, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qN = new qO(bh.dr.data[122]);
	for (var aA = 0; aA < aNV.length; aA++) aNV[aA].button.style.position = "absolute";

	function aNX(e2) {
		z.a0.setState(10), aa.sE() || aa.aEU(), 0 === e2 ? s.x.a3a() : 1 === e2 ? (b7.aG7.vC(bh.dr.data[156].value, 1) || aC.a3H.a3j(), s.t(19)) : 2 === e2 ? 0 !== z.id || bh.dr.data[140].value ? s.t(8, s.rm, new rn(16)) : s.x.aNY(s.rm, 16) : 3 ===
			e2 && s.t(1)
	}
	qN.e.style.position = "absolute", qN.e.style.textAlign = "center", qN.e.placeholder = L(276), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEd.show(), aNV[4].pu(b8.color.a1l(bh.dr.data[121].value)), this.resize(), document.body.appendChild(qN.e);
		for (var aA = 0; aA < aNV.length; aA++) document.body.appendChild(aNV[aA].button);
		1 !== z.id || z.f3 < 5 || (aNW && bd.lx > aNW + 144e5 ? z.uF.setState(14) : aNW = bd.lx)
	}, this.qq = function() {
		this.aEd.qq(), document.body.removeChild(qN.e);
		for (var aA = 0; aA < aNV.length; aA++) document.body.removeChild(aNV[aA].button)
	}, this.resize = function() {
		this.aEd.resize(), this.aEd.resize(), aMc.resize();
		var gap = .5 * ba.gap,
			sj = 10 / 99 * .84 * aMc.i,
			aNb = .16 * aMc.j,
			a7X = .19 * aMc.i,
			eh = aMc.eh + a7X,
			sj = aMc.ej + sj + 3 * gap,
			i = .5 * (aMc.i - gap) - a7X,
			a7X = aMc.i - 2 * a7X - aNb - gap,
			a7X = (b8.pZ.sD(qN.e, eh, sj, a7X, aNb), b8.pZ.sD(aNV[4].button, eh + a7X + gap, sj, aNb, aNb), .5 * (aMc.ej + aMc.j - (sj += aNb + gap) - gap));
		b8.pZ.sD(aNV[0].button, eh, sj, i, a7X), b8.pZ.sD(aNV[1].button, eh + i + gap, sj, i, a7X), b8.pZ.sD(aNV[2].button, eh, sj + a7X + gap, i, a7X), b8.pZ.sD(aNV[3].button, eh + i + gap, sj + a7X + gap, i, a7X);
		b8.pZ.sD(aNV[5].button, eh, sj + a7X * 2 + gap * 2, i * 2 + gap, a7X / 3);
		b8.pZ.sD(aNV[6].button, eh, sj + a7X * 2.33 + gap * 3, i * 2 + gap, a7X / 3);
		for (var aA = 0; aA < aNV.length; aA++) aNV[aA].button.style.font = b8.pZ.rN(0, b8.pZ.a22(.065 * aMc.j)), b8.pZ.pk(aNV[aA].button, 5);
		qN.e.style.font = b8.pZ.rN(0, b8.pZ.a22(.08 * aMc.j)), b8.pZ.pk(qN.e, 5)
	}, this.te = function() {
		if (aZ.aE6(), aS.te(), aN.te(), bW.te(), aa.sE()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aMc.i * 0.03);
				tf.font = b8.pZ.rN(1, size);
				tf.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tf.measureText(text).width;
				tf.textAlign = "left";
				tf.textBaseline = "middle";
				tf.fillText(text, tf.canvas.width - textLength - size / 2, size);
			};
			tf.imageSmoothingEnabled = !1;
			var ev = aa.aE9("territorial.io"),
				mJ = .84 * aMc.i / ev.width;
			tf.setTransform(mJ, 0, 0, mJ, aMc.eh + .08 * aMc.i, aMc.ej), aNU = aNU || b8.a15.a2d(ev, b8.a15.a2j, [0, 0, 0]);
			for (var eh = -1; eh <= 1; eh += 2)
				for (var ej = -1; ej <= 1; ej += 2) tf.drawImage(aNU, eh, ej);
			tf.drawImage(ev, 0, 0), tf.imageSmoothingEnabled = !0;
			var hh = aa.aE9("logo"),
				aNd = .6666 * mJ * ev.height / hh.height,
				mK = .5 * h.i,
				mL = aMc.ej + .5 * mJ * ev.height - .5 * aNd * hh.height;
			tf.setTransform(aNd, 0, 0, aNd, mK - .6 * mJ * ev.width, mL), tf.drawImage(hh, 0, 0), tf.setTransform(aNd, 0, 0, aNd, mK + .6 * mJ * ev.width - aNd * hh.width, mL), tf.drawImage(hh, 0, 0), tf.setTransform(1, 0, 0, 1, 0, 0), tf
				.imageSmoothingEnabled = !0
		}
	}
}

function aKb() {
	var aKr, aNe, aNf, tQ;

	function aNg(aA) {
		s.t(8, s.rm, new rn(21, {
			s6: aA,
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aNe.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aNf = [new v(L(277), function() {
		aNg(1)
	}, 0, 0, 1), new v(L(278), function() {
		aNg(2)
	}, 0, 0, 1), new v(L(279), function() {
		aNg(3)
	}, 0, 0, 1), new v(L(280), function() {
		aNg(0)
	}, 0, 0, 1), new v(L(281), function() {
		aNg(9)
	}, 0, 0, 1), new v(L(282), function() {
		aNg(10)
	}, 0, 0, 1)], tQ = [new v("⬅️ " + L(32), function() {
		s.a07()
	})], aKr = new tP(L(283), tQ), aNe = new q8(aNf, aKr.tV)
}

function aAw(title, pM, aNh) {
	var aKr, aMq;
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aMq.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aNh = aNh || [new v("⬅️ " + L(32), function() {
		s.a07()
	}, b9.nM)], aKr = new tP(title, aNh), aMq = new r3(aKr.tV, pM), b8.pZ.textAlign(aKr.tV.style, 1)
}

function aN8(data) {
	var aKr, aNi, ev, rc;

	function aNj(hk) {
		var ea = data.data.length;
		if (ea) {
			for (var s7, max = min = parseInt(data.data[0][0]), aA = 1; aA < ea; aA++) var aCe = parseInt(data.data[aA][0]),
				min = Math.min(aCe, min),
				max = Math.max(aCe, max);
			s7 = hk < 0 ? min + hk : max + 1, s.t(8, s.aDB().aKP, new rn(21, {
				s6: data.s6,
				s7: s7,
				s8: s7 + Math.abs(hk)
			}))
		}
	}
	this.show = function() {
			aKr.show(), this.resize()
		}, this.qq = function() {
			aKr.qq()
		}, this.resize = function() {
			aKr.resize(), aNi.resize()
		}, this.a0r = function(ev) {
			2 === ev && aKr.tW[0].pr()
		}, ev = data.data.length ? 0 : 1, ev = [new v("⬅️ " + L(32), function() {
			s.a07()
		}), new v(L(284), function() {
			aNj(-10)
		}, ev, 0, 1), new v(L(285), function() {
			aNj(10)
		}, ev, 0, 1), new v(L(235), function() {
			s.t(11, 10, new aNk({
				s6: data.s6
			}))
		})], rc = [L(286), L(287), L(288), L(289), L(290), L(291), L(292), L(293), L(294), L(295), L(282)], aKr = new tP(rc[data.s6], ev),
		function() {
			var aA, ed = {
					rW: []
				},
				rW = ed.rW,
				aNm = data.data,
				ea = aNm.length;
			ea && 0 === aNm[0][0] && 0 <= (e2 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5][data.s6]) && (s.x.s9[e2] = aNm[0][1]);
			var mJ = [.1, .001, .1, 1, 100, 1, 1, 1, 100, .01, .01][data.s6],
				a2n = [1, 3, 1, 0, 0, 0, 0, 0, 0, 2, 2][data.s6],
				e2 = [
					[L(296), L(297) + " ↗", L(298)],
					[L(296), L(299), L(300), L(301) + " ↗"],
					[L(296), L(297) + " ↗", L(300)],
					[L(296), L(297) + " ↗", L(300)],
					[L(302), L(303), L(304) + " ↗", L(305) + " ↗", L(114)],
					[L(302), L(303), L(306) + " ↗", L(307) + " ↗", L(308)],
					[L(302), L(303), L(309) + " ↗", L(310) + " ↗", L(311)],
					[L(302), L(303), L(306) + " ↗", L(307) + " ↗", L(312)],
					[L(302), L(303), L(304) + " ↗", L(305) + " ↗", L(114)],
					[L(296), L(297) + " ↗", L(300)],
					[L(296), L(297) + " ↗", L(313)]
				];
			if (ed.rc = e2[data.s6], ed.rh = [
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
					[25, 40, 35]
				][data.s6], 0 === data.s6 || 2 === data.s6 || 3 === data.s6 || 9 === data.s6 || 10 === data.s6)
				for (aA = 0; aA < ea; aA++) rW.push([{
					f2: aNm[aA][0] + 1 + ".",
					dm: 0
				}, {
					f2: aNm[aA][1],
					dm: 1,
					rk: aNm[aA][4],
					rl: aNm[aA][3]
				}, {
					f2: (mJ * aNm[aA][2]).toFixed(a2n),
					dm: 0
				}]);
			else if (1 === data.s6)
				for (aA = 0; aA < ea; aA++) rW.push([{
					f2: aNm[aA][0] + 1 + ".",
					dm: 0
				}, {
					f2: aNm[aA][1],
					dm: 0
				}, {
					f2: (mJ * aNm[aA][2]).toFixed(a2n),
					dm: 0
				}, {
					f2: aNm[aA][3],
					dm: 1,
					rk: aNm[aA][5],
					rl: aNm[aA][4]
				}]);
			else if (4 === data.s6 || 5 === data.s6 || 6 === data.s6 || 7 === data.s6 || 8 === data.s6)
				for (aA = 0; aA < ea; aA++) {
					var aNp = aNm[aA][5];
					4 === data.s6 || 8 === data.s6 ? "100%" === (aNp = (aNp % 64 * 100 / (aNp >> 6)).toFixed(0) + "%") && (4 === data.s6 ? aNp += " (" + L(314) + ")" : aNp += " (" + L(315) + ")") : 5 === data.s6 ? 32768 <= aNp && (aNp = -(aNp -
						32768)) : aNp = (mJ * aNp).toFixed(a2n), rW.push([{
						f2: "" + aNm[aA][0],
						dm: 0
					}, {
						f2: "" + aNm[aA][6],
						dm: 0
					}, {
						f2: aNm[aA][7],
						dm: 1,
						rk: aNm[aA][1],
						rl: aNm[aA][2]
					}, {
						f2: aNm[aA][8],
						dm: 1,
						rk: aNm[aA][3],
						rl: aNm[aA][4]
					}, {
						f2: "" + aNp,
						dm: 0
					}])
				}
			aNi = new rV(aKr.tV, ed)
		}()
}

function aNk(a2f) {
	var aKr, aKs, pU;
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aKs.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(L(316), [new v("⬅️ " + L(32), function() {
		s.aKp(10)
	})]), aKs = new pS(aKr.tV, ((pU = []).push(function() {
		var aLH, aL9 = new pC,
			aMa = new qO(bh.dr.data[132], 1, function() {
				aLH.button.click()
			}),
			aMb = new qO(bh.dr.data[131], 1, function() {
				aMa.e.focus()
			});
		aL9.pF(L(240)), aL9.pQ(aMb), aMb.e.style.marginBottom = "0.8em", aL9.pF(L(241)), aL9.pQ(aMa);
		return aLH = new v(L(239), function() {
			s7 = Math.floor(aMb.e.value), s8 = Math.floor(aMa.e.value);
			var s8, s7 = {
				a1M: Math.min(s7, s8),
				aK0: Math.max(s7, s8)
			};
			s.t(8, s.aCB(10).aKP, new rn(21, {
				s6: a2f.s6,
				s7: s7.a1M,
				s8: s7.aK0
			}))
		}, 0, 0, 1), aL9.pQ(new r4([aLH.button])), aL9
	}()), pU.push(function() {
		var aLH, aL9 = new pC,
			aMa = new qO(bh.dr.data[134], 1, function() {
				aLH.button.click()
			}),
			aMb = new qO(bh.dr.data[133], 0, function() {
				aMa.e.focus()
			});
		return aL9.pF(1 === a2f.s6 ? L(317) : L(318)), aL9.pQ(aMb), aMb.e.style.marginBottom = "0.8em", aL9.pF(L(319)), aL9.pQ(aMa), aLH = new v(L(239), function() {
			var aN0 = aMb.e.value.slice(0, 20),
				aN1 = Math.abs(Math.floor(aMa.e.value));
			s.t(8, s.aCB(10).aKP, new rn(22, {
				s6: a2f.s6,
				aN0: aN0,
				aN1: aN1
			}))
		}, 0, 0, 1), aL9.pQ(new r4([aLH.button])), aL9
	}()), pU.push(function() {
		var aLH, aL9 = new pC,
			aMa = new qO(bh.dr.data[152], 1, function() {
				aLH.button.click()
			}),
			aMb = new qO(bh.dr.data[151], 0, function() {
				aMa.e.focus()
			});
		return aL9.pF(L(320)), aL9.pQ(aMb), aMb.e.style.marginBottom = "0.8em", aL9.pF(L(319)), aL9.pQ(aMa), aLH = new v(L(239), function() {
			var aN0 = aMb.e.value.slice(0, 5),
				aN1 = Math.abs(Math.floor(aMa.e.value));
			s.t(8, s.aCB(10).aKP, new rn(28, {
				s6: a2f.s6,
				aN0: aN0,
				aN1: aN1
			}))
		}, 0, 0, 1), aL9.pQ(new r4([aLH.button])), aL9
	}()), pU))
}

function aKo() {
	var aNt, sI, aNw, sH, sK, aNu = [new Array(4), [], new Array(2), new Array(2)],
		aNv = new Array(4),
		aNx = new Array(2),
		aNy = [L(56), L(281), L(321), L(322)];

	function aCP() {
		var a5Z = aNt.sV.qN.e.value.trim().slice(0, 127);
		a5Z.length < 1 || (aNt.sV.qN.e.value = "", bm.aAz.yq(a5Z))
	}

	function aO1(aO3) {
		bm.x.qc[3] = 1 - bm.x.qc[3], aO2(3, 1, bm.x.qc[3]), aO3 && ay.aCa.aCb(4), bm.x.qc[3] && bh.r1.r2(158, bm.x.qc[0])
	}

	function aNz(et, eu) {
		bm.x.qc[et] !== eu && (0 === et && bm.x.qc[3] && aO1(0), aO2(et, bm.x.qc[et], 0), aO2(et, eu, 1), bm.x.qc[et] = eu, 0 === et ? (ay.aCa.aCb(2, eu), bm.x.qc[2] ? (aNt.sW.lR(), aNt.sV.qZ(1)) : aNt.sV.qZ(0), s.aDB().aCE(), s.aDB().aCD()) : 2 ===
			et && (0 === eu ? (ay.aCa.aCb(0), aNt.sV.lR(), aNt.se()) : (ay.aCa.aCb(1), aNt.sW.lR(), aNt.sf())))
	}

	function aO2(et, eu, color) {
		aNt.sY[et].q9[eu].pu(color ? b9.n6 : b9.np)
	}

	function aO6(aBW) {
		return aBW < 7 ? aBW + 2 + " " + L(329) : 7 === aBW || 10 === aBW ? L(281) + " (Full-Sending: " + L(7 === aBW ? 330 : 331) + ")" : 8 === aBW ? "1v1" : L(332)
	}

	function aO7(f2) {
		var a5c = bJ.dn(f2, 60),
			f2 = f2 % 60;
		return (a5c < 10 ? "0" : "") + a5c + ":" + (f2 < 10 ? "0" : "") + f2
	}
	this.aCm = function() {
		return aNt.sV
	}, this.aAz = function(rk) {
		aNz(2, 0);
		var pG = aNt.sV.qN.e.value,
			rk = "@" + rk + " ";
		pG.length && !b8.zN.a29(pG, " ") && (rk = " " + rk), aNt.sV.qN.e.value = pG += rk, aNt.sV.qN.e.focus()
	}, this.aCC = function() {
		aNt.sW.lR()
	}, this.aCE = function() {
		var aO5 = bm.x.qc[0],
			aO5 = bm.x.qe[aO5];
		bQ.a6(aO5.eG, aO5.mapSeed), sI.q9[0].button.textContent = L(259) + ": " + bQ.vH.vI[aO5.eG].name, sI.q9[1].button.textContent = L(261, 0, "Mode") + ": " + aO6(aO5.aBW), sI.q9[2].button.textContent = L(326) + ": " + bQ.vH.vI[aO5.aDC].name,
			sI.q9[3].button.textContent = L(327, 0, "Next Mode") + ": " + aO6(aO5.aDD), sI.q9[4].button.textContent = L(328) + ": " + aO7(aO5.aCG), sI.resize()
	}, this.aCD = function() {
		var aO5 = bm.x.qc[0],
			qd = bm.x.qe[aO5];
		aNt.sc(qd.sd);
		for (var aA = 0; aA < bm.ss.st.length; aA++) aNu[0][aA].qY.textContent = "" + bm.ss.st[aA].length;
		var ss = bm.ss.st[aO5],
			aO8 = ss.length,
			aO9 = bm.ss.su[aO5];
		aNu[2][1].qY.textContent = "" + aO8, aNu[3][1].qY.textContent = "" + aO9, sI.q9[4].button.textContent = L(328) + ": " + aO7(qd.aCG);
		for (aA = 0; aA < 4; aA++) {
			var aOA = bm.x.qe[aA];
			aNv[aA] ? 0 === aOA.sd && (aNv[aA].qY.textContent = bQ.vH.vI[aOA.eG].name) : aNv[aA] = new qX(bQ.vH.vI[aOA.eG].name, sH.q9[aA].button, 1, 1), b8.zN.startsWith(aNy[aA], "🏆 ") ? aOA.aBc || (aNy[aA] = aNy[aA].substring(3), sH.q9[aA]
				.button.textContent = aNy[aA], sH.q9[aA].button.appendChild(aNu[0][aA].qY), sH.q9[aA].button.appendChild(aNv[aA].qY)) : aOA.aBc && (aNy[aA] = "🏆 " + aNy[aA], sH.q9[aA].button.textContent = aNy[aA], sH.q9[aA].button
				.appendChild(aNu[0][aA].qY), sH.q9[aA].button.appendChild(aNv[aA].qY))
		}
		var qd = "",
			aOC = "";
		0 === aO5 && (qd = bm.qj.aBq(ss, 0, aO8), aOC = bm.qj.aBq(ss, 0, aO9)), aNw[0].qY.textContent = qd, aNw[1].qY.textContent = aOC, aNx[1].qY.textContent = "MP: " + bm.x.aC4[0] + "   SP: " + bm.x.aC4[1] + "   Lobby: " + b8.pi.a1Z(bm.ss.st)
	}, this.aCI = function() {
		aNt.sV.lR()
	}, this.show = function() {
		aNt.show(), this.resize(), bm.message.show()
	}, this.qq = function() {
		aNt.qq(), bm.tE.qq(), bm.sq.qq(), bm.message.qq()
	}, this.resize = function() {
		aNt.resize(1 - bm.x.qc[2]), bm.message.resize()
	}, this.a0r = function(ev) {
		2 === ev ? bm.x.qc[3] ? aO1(1) : aNt.sY[3].q9[0].pr() : ev < 2 && aO1(1)
	}, sH = new r7([new v(aNy[0], function() {
		return aNz(0, 0), 2
	}), new v(aNy[1], function() {
		return aNz(0, 1), 2
	}), new v(aNy[2], function() {
		return aNz(0, 2), 2
	}), new v(aNy[3], function() {
		return aNz(0, 3), 2
	})], b9.np), sI = new r7([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.nq, 1);
	var aO0 = new r7([new v(L(323), function() {
		return aNz(2, 0), 2
	}), new v(L(110), function() {
		return aNz(2, 1), 2
	})], b9.np);
	sK = new r7([new v(L(324), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bm.t8(), ay.x.a09(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bm.t8(), ay.x.a09(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(325), function() {
		return aO1(1), 2
	})], b9.np), aNt = new sG(sH, sI, aO0, sK, aCP, bm.tE.aCv);
	for (var aA = 0; aA < 4; aA++) aNu[0][aA] = new qX("0", sH.q9[aA].button);
	aNu[2][1] = new qX("0", aO0.q9[1].button), aNu[3][1] = new qX("0", sK.q9[1].button), aNw = [new qX("", aO0.q9[1].button, 1, 1), new qX("", sK.q9[1].button, 1, 1)], aO2(0, bm.x.qc[0], 1), aO2(2, bm.x.qc[2], 1), (aNx = [new qX(L(233), aNt.sg(), 1,
		0), new qX("", aNt.sg(), 1, 1)])[0].qY.style.fontSize = "0.4em", aNx[1].qY.style.fontSize = "0.4em"
}

function aKV() {
	var aKr, aKs, pU;
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aKs.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(L(333), [new v("⬅️ " + L(32), function() {
		s.t(7, s.aCB(7).aKP)
	}), new v(L(188), function() {
		bh.r1.r2(105, bE.rp.v1(aKs.pW[0].pD[0].e.value, 5)), bh.r1.r2(106, bE.rp.v1(aKs.pW[1].pD[0].e.value, 8)), s.t(8, s.aCB(7).aKP, new rn(18))
	})]), aKs = new pS(aKr.tV, ((pU = []).push(function() {
		var aL9 = new pC;
		return aL9.pF(L(169)), aL9.pQ(new qO({
			value: "",
			e2: -1
		})), aL9
	}()), pU.push(function() {
		var aL9 = new pC,
			aLI = (aL9.pF(L(171)), new qO({
				value: "",
				e2: -1
			}));
		return aLI.e.type = "password", aL9.pQ(aLI), aL9.pQ(new r4([new v(L(172), function(e) {
			return e.textContent === L(172) ? (e.textContent = L(173), aLI.e.type = "text") : (e.textContent = L(172), aLI.e.type = "password"), !0
		}).button])), aL9
	}()), pU))
}

function aKc() {
	var aKr, aNe, aNf, tQ;

	function aNg(aA) {
		s.t(8, s.rm, new rn(21, {
			s6: aA,
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aNe.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aNf = [new v(L(291), function() {
		aNg(5)
	}, 0, 0, 1), new v(L(292), function() {
		aNg(6)
	}, 0, 0, 1), new v(L(293), function() {
		aNg(7)
	}, 0, 0, 1)], tQ = [new v("⬅️ " + L(32), function() {
		s.a07()
	})], aKr = new tP(L(334), tQ), aNe = new q8(aNf, aKr.tV)
}

function aKL() {
	this.dr = {}, this.s9 = new Array(6), this.aKa = null, this.aKX = null, this.rT = 0, this.aFx = [0], this.y = function() {
			s.t(5, 5)
		}, this.a3a = function() {
			s.w(), aY.aDm(0), aY.dW()
		},
		__fx.customLobby.setJoinFunction(() => {
			s.w();
			aY.aDm(0);
			aY.dW();
		}), this.aAY = function() {
			s.t(0 === aZ.zx() ? 5 : 0)
		}, this.aMZ = function() {
			if (1 === bh.dr.data[130].value) s.t(8, s.aDB().aKP, new rn(24, {
				aM5: bh.dr.data[125].value,
				s7: bh.dr.data[128].value,
				s8: bh.dr.data[129].value
			}));
			else {
				for (var g = (g = bh.dr.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDB().aKP, new rn(23, {
					aM5: bh.dr.data[125].value,
					zQ: g
				}))
			}
		}, this.aNY = function(aKP, target) {
			s.t(4, aKP, new u("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOE +
				"' target='_blank'>" + bI.aOE + "</a>", !1, [new v("⬅️ " + L(32), function() {
					s.t(aKP)
				}), new v("✅ Accept", function() {
					bh.r1.r2(140, 1), 0 === target ? s.t(2, aKP) : s.t(8, aKP, new rn(target))
				})]))
		}, this.aOF = function() {
			for (var aA = 0; aA < 6; aA++) this.s9[aA] = bE.us.uw(bF.oa(5));
			this.s9[1] = "[" + this.s9[1] + "]", 5 === s.rm && (s.aDB().aEd.r2(this.s9), s.aDB().resize())
		}
}

function aKf() {
	var aLc, aLd, aOG, pU;

	function aLf() {
		b4.t8(), s.aKq()[19] = null, s.a07()
	}

	function aON() {
		aOQ(), aOO()
	}

	function aOQ() {
		aOG.pE.lastChild && aOG.pE.removeChild(aOG.pE.lastChild)
	}

	function aOO() {
		var aOR = bQ.a3g(aC.data);
		aC.data.canvas = bQ.aIU(aOR, aC.data.mapSeed).vR, aOP()
	}

	function aOP() {
		var a1e = aC.data.canvas;
		a1e.style.width = "100%", aOG.pE.appendChild(a1e)
	}
	this.aFh = function(a1e) {
		aC.data.canvas && aOQ(), aC.data.canvas = a1e, aOP()
	}, this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(259), [new v("⬅️ " + L(32), aLf)]), 2 === aC.data.mapType && b4.dW(), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), aL9.pN(new tK({
			tO: [L(335), L(336), L(337)],
			value: aC.data.mapType
		}, function(e2) {
			2 === (aC.data.mapType = e2) ? (b4.dW(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.t8()), s.t(20)
		})), 2 <= aC.data.mapType && (aL9.pQ(new rE), aL9.pQ(new qy({
			value: aC.data.passableWater
		}, L(338), function(value) {
			aC.data.passableWater = value
		})), aL9.pQ(new qy({
			value: aC.data.passableMountains
		}, L(339), function(value) {
			aC.data.passableMountains = value
		})));
		pU.push(aL9)
	}(pU = []), function(pU) {
		if (0 === aC.data.mapType) {
			for (var aL9 = new pC, tO = (aL9.pF(L(259)), []), aA = 0; aA < bQ.vH.aJM.length; aA++) tO.push(bQ.vH.vI[bQ.vH.aJM[aA]].name);
			aL9.pN(new tK({
				tO: tO,
				value: aC.data.mapProceduralIndex
			}, function(e2) {
				aC.data.mapProceduralIndex = e2, aON()
			})), pU.push(aL9)
		}
	}(pU), function(pU) {
		if (1 === aC.data.mapType) {
			for (var aL9 = new pC, tO = (aL9.pF(L(259)), []), aA = 0; aA < bQ.vH.aJN.length; aA++) tO.push(bQ.vH.vI[bQ.vH.aJN[aA]].name);
			aL9.pN(new tK({
				tO: tO,
				value: aC.data.mapRealisticIndex
			}, function(e2) {
				aC.data.mapRealisticIndex = e2, aON()
			})), pU.push(aL9)
		}
	}(pU), function(pU) {
		var aL9;
		2 === aC.data.mapType && ((aL9 = new pC).pF(L(259)), aL9.pQ(new r4([new v(L(340), function() {
			return b4.aFa(), !0
		}).button])), pU.push(aL9))
	}(pU), function(pU) {
		(aOG = new pC).pF(L(341)), 2 !== aC.data.mapType ? aOO() : aC.data.canvas && aOP();
		pU.push(aOG)
	}(pU), function(pU) {
		var aL9, qN, aLH;
		0 === aC.data.mapType && ((aL9 = new pC).pF("Seed"), qN = new qO({
			e2: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aON())
		}), aLH = new v(L(252), function(e) {
			var aIP = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIP) return qN.e.value = aC.data.mapSeed = aIP, aON(), !0
		}), aL9.pQ(qN), aL9.pQ(new r4([aLH.button])), pU.push(aL9))
	}(pU), function(pU) {
		var aL9, qN;
		2 === aC.data.mapType && ((aL9 = new pC).pF(L(342)), qN = new qO({
			e2: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aL9.pQ(qN), pU.push(aL9))
	}(pU), pU))
}

function u(title, pM, aOS, aNh) {
	var aKr, aMq;
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aMq.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aNh = aNh || [new v("⬅️ " + L(32), function() {
		s.a07()
	})], aKr = new tP(title, aNh), aMq = new r3(aKr.tV, pM), aOS && b8.pZ.textAlign(aKr.tV.style, 1)
}

function aKi() {
	var aLc, aLd, aLe, pU;

	function aLf() {
		aLh(), 2 === aC.data.playerNamesType && 1 === b8.pi.a1I(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		2 === aC.data.playerNamesType && b8.pi.a1W(aLe.tw(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(263), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), aL9.pN(new tK({
			tO: [L(264), L(265), L(230)],
			value: aC.data.playerNamesType
		}, function(e2) {
			aLh(), aC.data.playerNamesType = e2, s.t(23)
		})), aL9.pQ(new rE), aL9.pQ(new qy({
			value: aC.data.selectableName
		}, L(343), function(value) {
			aC.data.selectableName = value
		})), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9;
		2 === aC.data.playerNamesType && ((aL9 = new pC).pF("Data"), aLe = new tn(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eX || (aC.data.playerNamesData = new Array(aC.eX), aC.data.playerNamesData
			.fill("")), aLe.tu(b8.zN.a30(aC.data.playerNamesData, 1, '"')), aL9.pQ(aLe), pU.push(aL9))
	}(pU), pU))
}

function aKT() {
	var aLc, ts;

	function aOT() {
		s.w();
		var pG = b7.aOX(ts.tw());
		(aC.ym && 0 < pG.length && pG === b7.op.a3W || b7.aG7.vC(pG)) && b7.aOY()
	}
	this.show = function(aOU) {
		this.aOV(aOU), aLc.show(), this.resize()
	}, this.aOV = function(aOU) {
		0 === aC.ym ? aOU ? ts.tu(aOU) : b7.op.a3W.length && ts.tu(b7.op.a3W) : (aC.gk || (b7.op.a3W = b7.a3X.yF()), ts.tu(b7.aOW(b7.op.a3W)))
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), ts.resize()
	}, this.a0r = function(ev) {
		2 === ev ? aLc.tW[0].pr() : aOT()
	}, aLc = new tP(L(344), [new v("⬅️ " + L(32), function() {
		s.aKp(1)
	}), new v(L(345), function() {
		ts.tx()
	}), new v(L(346), function() {
		ts.ty()
	}), new v(L(347), function() {
		ts.clear()
	}), new v(L(348), function() {
		aOT()
	})]), ts = new tn(L(349)), aLc.tV.appendChild(ts.e)
}

function aKS() {
	var aKr, aKs, pU, aAU, aL9;

	function aOZ() {
		var lx;
		aAU !== bh.dr.data[12].value ? (b5.dW(), b5.aAT(), lx = bd.lx, s.t(4, 1, new u(L(352), L(353), !1, [new v("⬅️ " + L(32), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.lx < lx + 1500 || z.a0.a1()
		}, b9.n4)]))) : s.t(1)
	}
	this.show = function() {
			aAU = bh.dr.data[12].value, aKr.show(), this.resize()
		}, this.qq = function() {
			aKr.qq()
		}, this.resize = function() {
			aKr.resize(), aKs.resize()
		}, this.a0r = function(ev) {
			2 === ev && aKr.tW[0].pr()
		}, aKr = new tP(L(350), [new v("⬅️ " + L(32), aOZ), new v(L(351), function() {
			s.w(), bh.r1.uZ(), s.t(2)
		})]), pU = [], (aL9 = new pC).pF(L(354)), aL9.pH(L(355)), pU.push(aL9),
		function(pU) {
			var aL9 = new pC,
				g = (aL9.pF(L(373)), b5.data.aAc());
			aL9.pN(new tK({
				tO: g,
				value: b5.data.aAg(g)
			}, function(e2) {
				return bh.r1.r2(12, g[e2].split(":")[0]), !0
			})), pU.push(aL9)
		}(pU),
		function(pU) {
			var aL9 = new pC,
				aOc = (aL9.pF(L(371)), []);
			aL9.pQ(new r4([new v(L(372), function(e) {
				bV.aOd();
				for (var aA = 0; aA < aOc.length; aA++) aOc[aA].e.value = bV.a9u[aA];
				return b8.pZ.a28(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aOe.length; aA++) {
				aL9.pH(bV.aOe[aA]);
				for (var et = 0; et < 2; et++) {
					var e2 = 2 * aA + et,
						qN = new qO({
							value: bV.a9u[e2],
							e2: -1
						});
					qN.e.aOf = e2, aOc.push(qN), qN.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aOg(e.target.aOf, code)
					}), et && (qN.e.style.marginLeft = "4%"), qN.e.style.width = "48%", aL9.pQ(qN)
				}
			}
			pU.push(aL9)
		}(pU), (aL9 = new pC).pF(L(356)), bh.dr.data[1].tO = [L(357), L(358), L(359), L(360)], aL9.pN(new tK(bh.dr.data[1])), pU.push(aL9), (aL9 = new pC).pF(L(361)), bh.dr.data[9].tO = [L(358), L(362), L(363)], aL9.pN(new tK(bh.dr.data[9])), pU
		.push(aL9), (aL9 = new pC).pF(L(364)), bh.dr.data[11].tO = [L(365), L(9), L(366)], aL9.pN(new tK(bh.dr.data[11])), pU.push(aL9), (aL9 = new pC).pF(L(367)), aL9.pQ(new qy(bh.dr.data[2])), pU.push(aL9), (aL9 = new pC).pF(L(368)), aL9.pQ(new qy(
			bh.dr.data[7])), pU.push(aL9), (aL9 = new pC).pF(L(369)), aL9.pQ(new qy(bh.dr.data[8])), pU.push(aL9), (aL9 = new pC).pF(L(370)), aL9.pQ(new qO(bh.dr.data[5])), pU.push(aL9), aKs = new pS(aKr.tV, pU)
}

function aKj() {
	var aLc, aLd, aLe, pU;

	function aLf() {
		aLh(), 2 !== aC.data.spawningType || b8.pi.a1I(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		2 === aC.data.spawningType && b8.pi.a1U(aLe.tw(), aC.data.spawningData, bQ.aFj - 1)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(374), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC,
			tO = (aL9.pF(L(227)), [L(252), L(262), L(230)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tO.splice(1, 1), 0 < value) && (value = 1);
		aL9.pN(new tK({
			tO: tO,
			value: value
		}, function(e2) {
			aLh(), aC.data.spawningType = e2, 0 === aC.data.gameMode && 1 === e2 && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eX)), s.t(24)
		})), aL9.pQ(new rE), aL9.pQ(new qy({
			value: aC.data.selectableSpawn
		}, L(375), function(value) {
			aC.data.selectableSpawn = value
		})), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9 = new pC;
		aL9.pF("Seed"), aL9.pQ(new qO({
			e2: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pU.push(aL9)
	}(pU), function(pU) {
		var aL9;
		2 === aC.data.spawningType && ((aL9 = new pC).pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.spawningData, 2)), aL9.pQ(aLe), pU.push(aL9))
	}(pU), pU))
}

function aKR() {
	var aKr, aNe, aNf, tQ;

	function aOh(id) {
		0 !== z.id || bh.dr.data[140].value ? 0 === id ? s.t(8, 1, new rn(16)) : s.t(2) : s.x.aNY(s.rm, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aKr.show(), this.resize(), this.ik()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aNe.resize()
	}, this.ik = function() {
		8 === aZ.zx() && (2 <= bb.aOm ? aNf[2].ps === b9.mt && aNf[2].pu(0) : aNf[2].ps !== b9.mt && aNf[2].pu(b9.mt), !aC.gk && aL.pA(aC.eK) ? aNf[1].ps === b9.mt && aNf[1].pu(0) : aNf[1].ps !== b9.mt && aNf[1].pu(b9.mt), !aC.gk && au.hL(aC
			.eK) ? aNf[0].ps === b9.mt && aNf[0].pu(0) : aNf[0].ps !== b9.mt && aNf[0].pu(b9.mt))
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aNf = [new v(L(376), function() {
		aOh(0)
	}), new v(L(283), function() {
		s.t(16)
	}), new v(L(334), function() {
		s.t(17)
	}), new v(L(377), function() {
		s.x.aMZ()
	}, 0, 0, 1), new v(L(344), function() {
		s.t(3, 1)
	}), new v(L(378), function() {
		s.t(18)
	}), new v(L(350), function() {
		aOh(1)
	}), new v(L(379), function() {
		s.t(4, 1, new u(L(379), b8.pZ.a23([L(388), L(389), "Discord", L(390), L(277), L(391), L(110), L(392), L(393), L(394)], [bI.aAt, bI.zs, bI.aAu, bI.aOn, bI.aOo, bI.zY, bI.aOp, bI.aOq, bI.aOr, bI.aOE]), !1, [new v("⬅️ " + L(32),
			function() {
				s.t(1)
			})]))
	}), new v(L(380), function() {
		s.t(4, 1, new u(L(380), dj + "<br><a href='" + bI.aOn + "' target='_blank'>" + bI.aOn + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(32), function() {
				s.t(1)
			})]))
	}), new v(L(381), function() {
		s.t(4, 1, new u(L(381), L(395) + "<br>" + L(396), !1, [new v("⬅️ " + L(32), function() {
			s.t(1)
		}), new v(L(397), function() {
			z.a0.zl(), s.t(1)
		})]))
	}), new v(L(382), function() {
		z.a0.zm(), s.t(4, 1, new u(L(398), L(399) + " <a href='" + bI.aOE + "' target='_blank'>" + bI.aOE + "</a>", !1, [new v("⬅️ " + L(32), function() {
			s.t(1)
		})]))
	})], tQ = [new v("⬅️ " + L(32), function() {
		s.x.aAY()
	})], 8 === aZ.zx() && (aNf.unshift(new v(L(385), function() {
		2 <= bb.aOm && (s.w(), bc.a0u(), bd.de = !0)
	}, 0, 1)), aNf.unshift(new v(L(386), function() {
		!aC.gk && aL.pA(aC.eK) && (b6.gx.oH(), s.w(), aL.gl) && aL.a0u()
	}, 0, 1)), aNf.unshift(new v(L(387), function() {
		!aC.gk && au.hL(aC.eK) && (bT.a42(2), b6.gx.hH(), s.w(), aL.gl) && aL.a0u()
	}, 0, 1))), 1 === z.id && 5 <= z.f3 && aNf.push(new v(L(383), function() {
		z.a0.zn()
	})), aKr = new tP(L(384), tQ), aNe = new q8(aNf, aKr.tV)
}

function aKn() {
	var aLc, aLd, aLe, pU;

	function aLf() {
		aLh(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		2 === aC.data.sResourcesType && b8.pi.a1U(aLe.tw(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(268), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), aL9.pN(new tK({
			tO: [L(228), L(229), L(230)],
			value: aC.data.sResourcesType
		}, function(e2) {
			aLh(), 2 !== e2 || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eX)), aC.data.sResourcesType = e2, s.t(28)
		})), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9;
		1 === aC.data.sResourcesType && ((aL9 = new pC).pF("Value"), aL9.pQ(new qO({
			e2: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pU.push(aL9))
	}(pU), function(pU) {
		var aL9;
		2 === aC.data.sResourcesType && ((aL9 = new pC).pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.sResourcesData, 2)), aL9.pQ(aLe), pU.push(aL9))
	}(pU), pU))
}

function aKl() {
	var aLc, aLd, aLe, pU;

	function aLf() {
		aLh(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aKq()[19] = null, s.a07()
	}

	function aLh() {
		2 === aC.data.tIncomeType && b8.pi.a1U(aLe.tw(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aLc.show(), this.resize()
	}, this.qq = function() {
		aLc.qq()
	}, this.resize = function() {
		aLc.resize(), aLd.resize()
	}, this.a0r = function(ev) {
		2 === ev && aLc.tW[0].pr()
	}, aLc = new tP(L(266), [new v("⬅️ " + L(32), aLf)]), aLd = new pS(aLc.tV, (function(pU) {
		var aL9 = new pC;
		aL9.pF(L(227)), aL9.pN(new tK({
			tO: [L(228), L(229), L(230)],
			value: aC.data.tIncomeType
		}, function(e2) {
			aLh(), 2 !== e2 || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eX), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = e2, s.t(26)
		})), pU.push(aL9)
	}(pU = []), function(pU) {
		var aL9;
		1 === aC.data.tIncomeType && ((aL9 = new pC).pF("Value"), aL9.pQ(new qO({
			e2: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pU.push(aL9))
	}(pU), function(pU) {
		var aL9;
		2 === aC.data.tIncomeType && ((aL9 = new pC).pF("Data"), (aLe = new tn(0, 1, 0, 1)).tu(b8.zN.a30(aC.data.tIncomeData, 4)), aL9.pQ(aLe), pU.push(aL9))
	}(pU), pU))
}

function aKd() {
	var aKr, aKs, pU;
	this.show = function() {
		aKr.show(), this.resize()
	}, this.qq = function() {
		aKr.qq()
	}, this.resize = function() {
		aKr.resize(), aKs.resize()
	}, this.a0r = function(ev) {
		2 === ev && aKr.tW[0].pr()
	}, aKr = new tP(L(378), [new v("⬅️ " + L(32), function() {
		s.a07()
	})]), aKs = new pS(aKr.tV, ((pU = []).push(function() {
		function aLE() {
			aOw.button.textContent = L(166), aOu.e.readOnly = !1, aOv.e.readOnly = !1, aLD.pu(1), aLD.button.style.color = b9.mh
		}
		var aL9 = new pC,
			aOt = (aL9.pF(L(400)), new qO({
				value: bh.dr.data[105].value,
				e2: -1
			})),
			aOu = (aOt.e.readOnly = !0, aL9.pQ(aOt), aL9.pF(L(307), "0.8em"), new qO(bh.dr.data[148])),
			aOu = new qO(bh.dr.data[148], 0, void 0, function(e) {
				aLC(bh.dr.data[149].value, e.target.value)
			}),
			aOv = (aL9.pQ(aOu), aL9.pF(L(311), "0.8em"), new qO(bh.dr.data[149], 1, void 0, function(e) {
				aLC(e.target.value, bh.dr.data[148].value)
			})),
			aOw = (aL9.pQ(aOv), new v(L(166), function(e) {
				return e.textContent === L(166) ? (e.textContent = L(167), aOu.e.readOnly = !0, aOv.e.readOnly = !0, aLD.pu(0), aLD.button.style.color = b9.nd, bh.r1.r2(149, aOv.e.value), aLC(bh.dr.data[149].value, bh.dr.data[
					148].value)) : aLE(), !0
			})),
			aLD = (aL9.pQ(new r4([aOw.button])), new v(L(14), function(e) {
				return aOu.e.readOnly && ay.x.aDk(0) && (b8.pZ.a28(e), aLE(), ay.aLF.aLG({
					ro: 0,
					rk: bh.dr.data[148].value,
					value: bh.dr.data[149].value
				})), !0
			}, 1)),
			pI = (aL9.pQ(new r4([aLD.button])), aL9.pH()),
			aLC = function(f2, pG) {
				f2 = b8.fw.a2c(f2, 2, 1e6), pI.textContent = L(168, [f2, bh.dr.data[105].value, pG, f2 - 1])
			};
		return aLC(bh.dr.data[149].value, bh.dr.data[148].value), aL9
	}()), pU))
}

function bs() {
	"function" != typeof Math.log2 && (Math.log2 = function(eh) {
		return Math.log(eh) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eh) {
		return Math.log(eh) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eh) {
		return 0 < eh ? 1 : eh < 0 ? -1 : 0
	})
}

function cd() {
	var a7l, aOy, aOz, aP0, aOx = !1;

	function aP1() {
		aOx = !0, a7l = -1, aOy = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aOy[aA] = !1;
		var wI = Math.floor(1 + .02 * h.min);
		aOz = new Array(4), (aP0 = new Array(4))[1] = aP0[3] = aOz[0] = aOz[2] = 0, aP0[0] = aOz[3] = -wI, aOz[1] = aP0[2] = wI
	}

	function aP2() {
		if (-1 !== a7l)
			if (0 !== aC.ym && aG.mP()) {
				for (var aP3 = !1, aA = 3; 0 <= aA; aA--) aOy[aA] && (aP3 = !0, iB += aOz[aA], iD += aP0[aA], ae.a0J(aOz[aA], aP0[aA]), aR.a7T());
				aP3 ? bd.de = !0 : ap.mF()
			} else ap.mF()
	}
	this.a0p = function(e2) {
		0 !== aC.ym && aG.mP() && (aOx || aP1(), aOy[e2] = !0, -1 === a7l) && (a7l = setInterval(aP2, 20), aP2())
	}, this.a0s = function(e2) {
		if (0 !== aC.ym && (aOx || aP1(), aOy[e2] = !1, -1 !== a7l)) {
			for (var aP3 = !1, aA = 3; 0 <= aA; aA--) aP3 = aP3 || aOy[aA];
			aP3 || this.mF()
		}
	}, this.mF = function() {
		if (aOx && -1 !== a7l) {
			for (var aA = 3; 0 <= aA; aA--) aOy[aA] = !1;
			clearInterval(a7l), a7l = -1
		}
	}
}

function ce() {
	this.x = new aP4, this.lM = new aP5, this.ny = new aP6, this.aCa = new aP7, this.aAV = new aP8, this.aLF = new aP9, this.oZ = new aPA, this.aMx = new aPB, this.a5F = new aPC, this.aPD = new aPE, this.aPF = new aPG, this.aPH = new aPI, this.aPJ =
		new aPK, this.dW = function() {
			this.x.dW()
		}
}

function aP4() {
	var aPL, aPN;
	this.aEN = 5, this.aEH = this.aEN - 1, this.aDp = this.aEN + this.aEH, this.aDo = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aPM = null;

	function aPV(aA) {
		return aPN[aA].aOx && aPL[aA].aPV()
	}

	function aPX(zu) {
		aPN[zu].lx = bd.lx, aPN[zu].aPP = !1
	}
	this.a03 = 0, this.a02 = 0, this.dW = function() {
		this.aPM = new Array(this.aEN);
		this.aPM[0] = "territorial.io";
		var aA, aIP = aw.aIk(0);
		for (aw.a3M(0), aA = 1; aA < this.aEN; aA++) this.aPM[aA] = aJ.yL() + ".territorial.io";
		for (aw.a3M(aIP), aPL = new Array(this.aDp), aPN = new Array(this.aDp), aA = this.aDp - 1; 0 <= aA; aA--) aPN[aA] = {
			aOx: !1,
			lx: 0,
			aPP: !1
		};
		this.aDq(0, 0)
	}, this.aPQ = function(aA) {
		return aPL[aA]
	}, this.aPR = function() {
		return this.a02 < this.aEN ? this.a02 : this.a02 - this.aEH
	}, this.ik = function() {
		for (var aA = this.aDp - 1; 0 <= aA; aA--) this.aDk(aA) && bd.lx > aPN[aA].lx + 15e3 && ay.ny.aPS(aA, aPN[aA].aPP);
		!this.aDk(0) && bd.lx > aPN[0].lx + 8e3 && (aPN[0].lx = bd.lx, this.aDq(0, 0))
	}, this.aMt = function(id) {
		return this.aDq(0, id) && this.aPT(0)
	}, this.aDq = function(zu, aKP) {
		if (aPN[zu].aOx) {
			if (aPL[zu].aPV()) return aPL[zu].aPW(aKP), aPL[zu].aDk();
			aPL[zu].qq()
		}
		return this.aPU(zu, aKP), !1
	}, this.aPU = function(zu, aKP) {
		aPN[zu].aOx = !0, aPX(zu), aPL[zu] = new aPY, aPL[zu].dW(zu, aKP)
	}, this.aPW = function(zu, aKP) {
		aPV(zu) && aPL[zu].aPW(aKP)
	}, this.aPZ = function(zu, aKP) {
		ay.aAV.aPa(zu)
	}, this.aPT = function(aA) {
		return this.aDk(aA) && aPL[aA].aPT()
	}, this.aPb = function(aA) {
		aPL[aA].aPb()
	}, this.aDk = function(aA) {
		return aPN[aA].aOx && aPL[aA].aDk()
	}, this.send = function(zu, aB) {
		aPX(zu), aPL[zu].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0a = function(zu) {
		8 === aZ.zx() && (aPN[zu].aPP = !0, ay.lM.aPc = !0)
	}, this.close = function(zu, aPd) {
		aPV(zu) && aPL[zu].close(aPd)
	}, this.aPe = function(zu, aPd) {
		q.a08(aPd), aPV(zu) && aPL[zu].close(aPd)
	}, this.a09 = function(aPd) {
		for (var aA = this.aDp - 1; 0 <= aA; aA--) this.close(aA, aPd)
	}, this.aPf = function(zu, aPd) {
		for (var aA = this.aDp - 1; 0 <= aA; aA--) aA !== zu && this.close(aA, aPd)
	}, this.a3Y = function() {
		this.close(this.a03, 3246)
	}, this.aPg = function(zu, e) {
		aPL[zu].qq(), q.zt(zu, e.code)
	}
}

function aP5() {
	this.aPc = !1, this.ik = function() {
		bd.jn() % 250 != 249 || aC.gk || (ay.aAV.aPh(+(this.aPc && af.le[aC.eK]), ak.jr + bL.x.on), this.aPc = !1)
	}
}

function aPC() {
	function aQ8(aQ9) {
		var ed = aC.data,
			aQ9 = (ed.selectedPlayer = bF.oa(aQ9), ed.spawningSeed = bF.oa(14), bF.oa(4)),
			aQ9 = (aQ9 < 7 ? (ed.gameMode = 1, ed.numberTeams = aQ9 + 2) : 9 === aQ9 ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === aQ9 ? 0 : 10 === aQ9 ? 1 : 2), ed.isContest = bF.oa(1), bF
				.oa(6));
		return ed.mapType = bQ.aBd(aQ9) ? 0 : 1, bQ.aBe(ed, aQ9), ed.mapSeed = bF.oa(14), aQ9
	}
	this.aPj = function(zu, aB) {
		bF.dW(aB), 0 === bF.size ? ay.x.aPe(zu, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oa(1) ? function(zu) {
			var aPn = bF.oa(6);
			0 === aPn ? function(zu) {
					if (0 === zu && 8 !== aZ.zx()) {
						s.x.aOF();
						for (var aQ0 = bF.oa(12), aQ1 = bF.oa(6), g = new Array(aQ0), aA = 0; aA < aQ0; aA++) g[aA] = bF.oa(aQ1);
						aS.a7s(g)
					}
				}(zu) : 2 === aPn ? ay.aPD.aPp(zu) : 3 === aPn || 4 === aPn ? av.dW() : 9 === aPn ? ay.aPF.aPq(zu) : 10 === aPn ? ay.aPH.aPr() : 11 === aPn ? ay.aPF.aPs(zu) : 12 === aPn ? ay.aPH.aPt() : 13 === aPn ? ay.aPJ.aPu() :
				14 === aPn ? ay.aPJ.aPv() : 15 === aPn ? ay.aPF.aPw() : 16 === aPn ? ay.aPD.aPx(zu) : 17 === aPn ? ay.aPD.aPy(zu) : 19 === aPn && ay.aPD.aPz(zu)
		} : function(zu) {
			if (8 !== aZ.zx() && !av.aEO()) return;
			if (zu !== ay.x.a03) ay.x.aPe(zu, 3244);
			else if (0 === bF.oa(1)) bd.yv.aQA(bF.aB);
			else {
				var aA, zu = bF.oa(2);
				if (0 === zu) {
					var oC, ny = bF.oa(9);
					0 !== af.le[ny] && 0 !== af.le[aC.eK] && (oC = bF.oa(10), aM.oB(ny, aC.eK, oC), ae.p8(ny, 1, oC))
				} else if (1 === zu) ! function() {
					var ny = bF.oa(9);
					0 !== af.le[ny] && 0 !== af.le[aC.eK] && b3.aI9(0, [ny], !0) && aM.oS(ny, 1)
				}();
				else if (2 === zu) ! function() {
					var ny = bF.oa(9),
						target = bF.oa(9);
					0 !== af.le[ny] && 0 !== af.le[target] && 0 !== af.le[aC.eK] && b3.aI9(1, [ny], !0) && (ae.p8(ny, 3, 96), ae.p8(target, 4, 96), aM.a5M(ny, target))
				}();
				else if (a8 && !a9) {
					var ea = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), ea = Math.min(b6.nv.oc.length, 540), aA = 0; aA < ea; aA++) bB.aQG(32, b6.nv.oc[aA]);
					ay.x.send(ay.x.a03, bB.aB)
				}
			}
		})(zu), bd.aPm())
	}, this.aQ2 = function(aB) {
		if (bF.dW(aB), bF.e2 = 1, 3 === bF.oa(6)) {
			bF.e2 += 20;
			var ed = aC.data = new a3G,
				aB = aQ8(9),
				aBf = ed.humanCount = bF.oa(9) + 1;
			ed.selectableSpawn = 1 === ed.gameMode || aBf < 100, ed.colorsData = new Uint32Array(aBf), ed.playerNamesData = new Array(aBf);
			for (var aA = 0; aA < aBf; aA++) bF.e2++, ed.colorsData[aA] = bF.oa(18), ed.playerNamesData[aA] = bE.us.uw(bF.oa(5));
			aZ.aE2(), bQ.a6(aB, ed.mapSeed), aC.a3K()
		} else ! function() {
			bF.e2 += 20;
			var ed = aC.data = new a3G,
				aQ7 = aQ8(1);
			ed.humanCount = 2;
			ed.selectableSpawn = 1, ed.elo = new Uint16Array(2), ed.colorsData = new Uint32Array(2), ed.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.e2++, ed.colorsData[aA] = bF.oa(18), ed.elo[aA] = bF.oa(14), ed.playerNamesData[aA] = bE.us.uw(bF.oa(5));
			aZ.aE2(), bQ.a6(aQ7, ed.mapSeed), aC.a3K()
		}()
	}, this.aQ5 = function() {
		bF.e2 = 1;
		var aPn = bF.oa(6),
			aQ6 = bF.oa(10);
		return ay.x.a02 > ay.x.aEH && (aQ6 += ay.x.aEH), ay.x.a02 === aQ6 ? (ay.x.a03 = aQ6, !1) : (ay.x.close(ay.x.a02, 3247), ay.x.a03 = aQ6, av.aBa = bF.oa(10), av.aEA = bF.oa(3 === aPn ? 9 : 1), ay.x.aDq(aQ6, 5) && ay.ny.aEI(), !0)
	}
}

function aPI() {
	this.aPr = function() {
		bh.x.uQ(), bh.r1.r2(105, bD.rp.rq(bD.rp.rr(5))), bh.r1.r2(106, bD.rp.rq(bD.rp.rr(8))), bh.r1.r2(109, bF.oa(30)), bh.r1.r2(108, bh.dr.data[109].value), bh.r1.r2(111, bh.dr.data[109].value + 1), bh.r1.r2(107, 0), bh.r1.r2(110, "")
	}, this.aPt = function() {
		var aQJ, aQK, aQL, aQM, aQI;
		bF.size < bB.aQH(29) ? ay.x.aPe(0, 3254) : (aQI = bF.oa(5), aQJ = bF.oa(3), aQK = bF.oa(3), aQL = bF.oa(3), aQM = bF.oa(8), bF.aQN(197 + 16 * (aQI + aQJ + aQK + aQL + aQM) + 32 + 32 + 30 + 128 + 32 + 30 + 32 + 2 + 10 + 5 + 30 + 30 + 32) ?
			(aQI = {
				rl: bF.oa(30),
				ud: bF.oa(16),
				ue: bF.oa(30),
				uf: bF.oa(30),
				ug: bF.oa(30),
				uh: bF.aQO(32),
				username: bE.us.uw(aQI),
				ui: bE.us.uw(aQJ),
				uj: bE.us.uw(aQK),
				uk: bF.aQO(32),
				ul: bF.aQO(32),
				um: bF.oa(30),
				un: bF.aQO(32),
				uo: bF.aQO(32),
				up: bF.aQO(32),
				uq: bF.aQO(32),
				aLN: bF.aQO(32),
				aLO: bF.aQO(30),
				aLZ: bF.aQO(32),
				aLa: bE.us.uw(aQL),
				aLS: bF.aQO(2),
				aLT: bF.aQO(10),
				aLQ: bE.us.uw(aQM),
				aLU: bF.aQO(5),
				aLB: bF.oa(30),
				aLL: bF.oa(30),
				aLM: bF.aQO(32)
			}, 8 === s.rm && (25 === s.aDB().aMs ? (aQI.aKt = !0, s.x.aKa = aQI, s.aDB().aN7(25, !1)) : (aQI.aKt = !1, aQI.rk = bh.dr.data[105].value, s.x.aKX = aQI, bh.r1.uc(aQI), s.aDB().aN7(16, !0)))) : ay.x.aPe(0, 3267))
	}
}

function aPK() {
	this.aPu = function() {
		var aA;
		if (bF.size < bB.aQH(39)) ay.x.aPe(0, 3259);
		else {
			var s6 = bF.oa(6),
				ea = bF.oa(10),
				data = [];
			if (9 === s6 || 10 === s6) {
				for (aA = 0; aA < ea; aA++) data.push([bF.oa(30), bE.uu.vC(5), bF.aQO(32), 0, bF.oa(30)]);
				8 === s.rm && s.aDB().aN7(21, !0, {
					s6: s6,
					data: data
				})
			} else {
				var hT = bF.oa(16);
				if (bF.aQN(39 + 16 * hT + ea * (0 === s6 ? 111 : 1 === s6 ? 101 : 2 === s6 || 3 === s6 ? 127 : 212))) {
					if (0 === s6)
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(30), bE.us.uw(bF.oa(5)), bF.oa(16), bF.oa(30), bF.oa(30)]);
					else if (1 === s6)
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(16), bE.us.uw(bF.oa(3)), bF.oa(16), bE.us.uw(bF.oa(5)), bF.oa(31), bF.oa(30)]);
					else if (2 === s6 || 3 === s6)
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(30), bE.us.uw(bF.oa(5)), bF.aQO(32), bF.oa(30), bF.oa(30)]);
					else
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(20), bF.oa(30), bF.oa(30), bF.oa(30), bF.oa(30), bF.aQO(32), bF.oa(30), bE.us.uw(bF.oa(5)), bE.us.uw(bF.oa(5))]);
					8 === s.rm && s.aDB().aN7(21, !0, {
						s6: s6,
						data: data
					})
				} else ay.x.aPe(0, 3260)
			}
		}
	}, this.aPv = function() {
		if (bF.size < bB.aQH(29)) ay.x.aPe(0, 3265);
		else {
			var aQP = bF.oa(4),
				aQQ = bF.oa(7),
				aQR = bF.oa(11);
			if (bF.aQN(29 + 16 * aQQ + 16 * aQR + 11 * aQP)) {
				for (var data = [], aA = 0; aA < aQP; aA++) {
					for (var zR = bE.us.uw(bF.oa(3)), aQS = bF.oa(8), aM6 = [], et = 0; et < aQS; et++) aM6.push(bF.oa(16));
					data.push({
						name: "[" + zR + "]",
						aM6: aM6
					})
				}
				8 === s.rm && s.aDB().aN7(23, !0, data)
			} else ay.x.aPe(0, 3266)
		}
	}
}

function aPE() {
	function aQU() {
		var id = bF.oa(3);
		return 0 === id ? {
			id: id,
			rk: bF.oa(30),
			p: bm.aAz.aCg(bE.uu.vC(7))
		} : 1 === id ? {
			id: id,
			rk: bF.oa(30),
			aBk: bF.oa(3),
			value: bF.oa(30),
			target: bF.oa(30)
		} : 2 === id ? {
			id: id,
			rk: bF.oa(30),
			aBk: bF.oa(3)
		} : 3 === id ? {
			id: id,
			rk: bF.oa(30),
			aBk: bF.oa(3),
			value: bF.oa(4),
			target: bF.oa(30)
		} : 4 === id ? {
			id: id,
			rk: bF.oa(30),
			aBk: bF.oa(3),
			target: bF.oa(30)
		} : 5 === id ? {
			id: id,
			aBk: bF.oa(3)
		} : 6 === id ? {
			id: id,
			value: bF.oa(17)
		} : null
	}
	this.aPp = function(zu) {
		if (zu !== ay.x.a02) ay.x.close(zu, 3239);
		else if (6 !== aZ.zx()) ay.x.close(zu, 3271);
		else {
			bm.dW();
			for (var aA = 0; aA < 4; aA++) {
				var qd = bm.x.qe[aA],
					playerCount = (qd.sd = bF.oa(10), qd.eG = bF.oa(6), qd.mapSeed = bF.oa(14), qd.aBW = bF.oa(4), qd.aDC = bF.oa(6), qd.aDD = bF.oa(4), qd.aBc = bF.oa(1), qd.aCG = bF.oa(12), qd.spawningSeed = bF.oa(14), bF.oa(16));
				bm.ss.su[aA] = bF.oa(16);
				for (var et = 0; et < playerCount; et++) bm.ss.aBA(aA, bF.oa(30), bE.uu.vC(5), bF.oa(4), bF.oa(30), bF.oa(7), bF.oa(16), bF.oa(18), bF.oa(11), bF.oa(12))
			}
			s.t(29), bm.x.aC6(!0)
		}
	}, this.aPx = function(zu) {
		if (zu !== ay.x.a02) ay.x.close(zu, 3239);
		else if (bm.a01) {
			bm.x.aC4[0] = bF.oa(20), bm.x.aC4[1] = bF.oa(20);
			for (var aQT = bF.oa(16), et = 0; et < aQT; et++) {
				var id = bF.oa(3);
				0 === id ? bm.ss.aBA(bF.oa(2), bF.oa(30), bE.uu.vC(5), 0, 1234566, 127, 0, bF.oa(18), 0, bF.oa(12)) : 1 === id ? bm.ss.aBQ(bF.oa(16), bF.oa(2)) : 2 === id ? bm.ss.aBM(bF.oa(16), bF.oa(2), bF.oa(2)) : 3 === id ? bm.ss.aBP(bF.oa(
					16), bF.oa(2)) : 4 === id ? bm.ss.aBG(bF.oa(16), bF.oa(2), bF.oa(4), bF.oa(30), bF.oa(7), bF.oa(16), bF.oa(11)) : 5 === id && bm.ss.aBH(bF.oa(16), bF.oa(2), bF.oa(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qd = bm.x.qe[aA];
				if (qd.sd = bF.oa(10), 0 === qd.sd) {
					if (qd.a03 = bF.oa(10), qd.aBa = bF.oa(10), bm.aB0.df(aA)) return;
					qd.eG = bF.oa(6), qd.mapSeed = bF.oa(14), qd.aBW = bF.oa(4), qd.aDC = bF.oa(6), qd.aDD = bF.oa(4), qd.aBc = bF.oa(1), qd.aCG = bF.oa(12), qd.spawningSeed = bF.oa(14)
				}
			}
			bm.x.aC8()
		} else ay.x.close(zu, 3251)
	}, this.aPy = function(zu) {
		if (zu !== ay.x.a02) ay.x.close(zu, 3272);
		else if (bm.a01) {
			for (var qb = bF.oa(4), qd = bm.x.qe[qb], qf = qd.qf, t7 = (qd.qg = bF.oa(20), bF.oa(6)), aA = 0; aA < t7; aA++) qf.push(aQU());
			bm.x.aCH(qb)
		} else ay.x.close(zu, 3273)
	}, this.aPz = function(zu) {
		zu !== ay.x.a02 ? ay.x.close(zu, 3276) : bm.a01 ? bm.message.aCc(aQU()) : ay.x.close(zu, 3277)
	}
}

function aPG() {
	this.aPq = function(zu) {
		var aQC, q6;
		bF.aQN(70) ? (aQC = bF.oa(3), q6 = bg.aQV.ik(bF.oa(30), bF.oa(30)), ay.aAV.aQW(zu, q6, aQC), 0 < aQC || (0 === zu && 0 === bh.dr.data[105].value.length ? ay.aAV.aMw(0) : ay.aLF.aQX(zu), 4 === ay.x.aPQ(zu).aQY() ? 6 === aZ.zx() && ay.aCa
			.aDr(zu) : 5 !== ay.x.aPQ(zu).aQY() || 8 !== aZ.zx() && 10 !== aZ.zx() || ay.ny.aEI())) : ay.x.aPe(zu, 3269)
	}, this.aPs = function(zu) {
		var id = bF.oa(6);
		0 === id ? (ay.x.aPb(zu), aS.a7o || ay.aAV.aMw(1), b5.aAT(), 8 === s.rm && s.aDB().aN6()) : 21 === id ? 8 === s.rm && s.aDB().aN7(17) : 22 === id && (bh.r1.r2(106, bh.dr.data[110].value), bh.r1.r2(110, ""), 8 === s.rm) && s.aDB().aN7(16)
	}, this.aPw = function() {
		var ea = bF.oa(16),
			aQZ = bF.oa(16);
		if (bF.aQN(55 + 10 * ea + 16 * aQZ)) {
			for (var g = [], aA = 0; aA < ea; aA++) g.push(bE.us.uw(bF.oa(10)));
			b5.aAX(g)
		} else ay.x.aPe(0, 3270)
	}
}

function aP6() {
	this.aPS = function(zu, aPP) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPP ? 1 : 0), ay.x.send(zu, bB.aB)
	}, this.aEI = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.aPR()), bB.a7(10, av.aBa), bB.a7(9, av.aEA), bB.a7(10, dk), bB.a7(14, l.dl), ay.x.send(ay.x.a03, bB.aB)
	}, this.nz = function(eM) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eM), ay.x.send(ay.x.a03, bB.aB)
	}, this.o0 = function(iA, j1) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, iA), bB.a7(10, j1), ay.x.send(ay.x.a03, bB.aB)
	}, this.o4 = function(iA, o2) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, iA), bB.a7(9, o2), ay.x.send(ay.x.a03, bB.aB)
	}, this.o5 = function(iA, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, iA), bB.a7(22, eM), ay.x.send(ay.x.a03, bB.aB)
	}, this.o8 = function(m3, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m3), bB.a7(22, eM), ay.x.send(ay.x.a03, bB.aB)
	}, this.oA = function(j1) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, j1), ay.x.send(ay.x.a03, bB.aB)
	}, this.oE = function(e2) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, e2), ay.x.send(ay.x.a03, bB.aB)
	}, this.oG = function(oF) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oF), ay.x.send(ay.x.a03, bB.aB)
	}, this.oI = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a03, bB.aB)
	}, this.oJ = function(iA, eM, j1) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, iA), bB.a7(10, j1), bB.a7(22, eM), ay.x.send(ay.x.a03, bB.aB)
	}, this.oQ = function(aQa, aQb) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQb), bB.a7(10, aQa), ay.x.send(ay.x.a03, bB.aB)
	}, this.oT = function(a5F) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5F), ay.x.send(ay.x.a03, bB.aB)
	}, this.oX = function(aQc, target) {
		var aA, ea = aQc.length;
		for (bB.a6(14 + 9 * ea), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < ea; aA++) bB.a7(9, aQc[aA]);
		ay.x.send(ay.x.a03, bB.aB)
	}
}

function aP9() {
	this.aQd = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAV.aQe(), ay.x.send(0, bB.aB)
	}, this.aQX = function(zu) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rp.v8(bh.dr.data[105].value, 5), bE.rp.v8(bh.dr.data[106].value, 8), bB.a7(30, bh.dr.data[109].value), ay.x.send(zu, bB.aB)
	}, this.aN9 = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rp.v7(bh.dr.data[110].value), ay.x.send(0, bB.aB)
	}, this.aN5 = function(a2f) {
		var ea = a2f.pG.length;
		bB.a6(21 + 16 * ea), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2f.ro), bB.a7(8, ea), bD.us.v7(a2f.pG), ay.x.send(0, bB.aB)
	}, this.aLV = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.ro), bE.rp.v8(data.rk, 5), ay.x.send(0, bB.aB)
	}, this.aLG = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.ro), bE.rp.v8(data.rk, 5), bB.aQG(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPA() {
	this.oY = function() {
		for (var ea = aC.jq, yb = bP.result.yb, kY = yb.length, zK = (bB.a6(17 + 16 * ea + 33 * kY), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kY), bB.a7(1, +(2 === aC.yj)), bB.a7(1, aC.z3 % 2), af.zK), aA = 0; aA < ea; aA++) bB.a7(16, zK[aA]);
		for (var gO = af.gO, aA = 0; aA < kY; aA++) {
			var g8 = yb[aA];
			bB.a7(9, g8), bB.a7(24, gO[g8])
		}
		ay.x.send(ay.x.a03, bB.aB)
	}
}

function aPB() {
	this.aMy = function(s6, s7, s8) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, s6), bB.a7(1, +(s7 < 0)), bB.a7(1, +(s8 < 0)), bB.a7(30, Math.abs(s7)), bB.a7(30, Math.abs(s8)), ay.x.send(0, bB.aB)
	}, this.aMz = function(s6, aN0, aN1) {
		bB.a6(18 + 16 * aN0.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, s6), ay.aAV.aQg(aN0), bB.a7(30, aN1), ay.x.send(0, bB.aB)
	}, this.aN4 = function(s6, aN0, aN1) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, s6), bE.rp.v8(aN0, 5), bB.a7(30, aN1), ay.x.send(0, bB.aB)
	}, this.aN2 = function(aM5, zQ) {
		for (var ea = zQ.length, hT = 0, aA = 0; aA < ea; aA++) hT += zQ[aA].length;
		for (bB.a6(21 + 3 * ea + 16 * hT), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aM5), bB.a7(4, ea), bB.a7(7, hT), aA = 0; aA < ea; aA++) bB.a7(3, zQ[aA].length), bD.us.v7(zQ[aA]);
		ay.x.send(0, bB.aB)
	}, this.aN3 = function(aM5, s7, s8) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aM5), bB.a7(1, +(s7 < 0)), bB.a7(1, +(s8 < 0)), bB.a7(20, Math.abs(s7)), bB.a7(20, Math.abs(s8)), ay.x.send(0, bB.aB)
	}
}

function aP7() {
	this.aDr = function(zu) {
		var username = bh.dr.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, dk), bB.a7(2, bh.dr.data[158].value), ay.aAV.aQg(username), b8.color.a1j(bh.x.uX())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAZ());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a02 = zu, ay.x.send(zu, bB.aB)
	}, this.aCb = function(aQj, a2f) {
		bC.dW(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aQj), 2 === aQj ? bC.a7(2, a2f) : 3 === aQj ? bD.uu.yF(a2f, 7, bC) : 5 === aQj && (bC.a7(3, a2f.id), bC.a7(3, a2f.value), bC.a7(30, a2f.rk)), ay.x.send(ay.x.a02, bC.aQk())
	}
}

function aP8() {
	this.aPa = function(zu) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dl), bB.a7(4, z.id), bB.a7(7, z.f3), bB.a7(1, +a8), bB.a7(1, +a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(zu, bB.aB)
	}, this.aQW = function(zu, q6, aQC) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQC), bB.a7(30, q6[0]), bB.a7(30, q6[1]), ay.x.send(zu, bB.aB)
	}, this.aMw = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAW = function(id, pG) {
		var ea = Math.min(pG.length, 63);
		bB.a6(19 + 16 * ea), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, ea), bD.us.v7(pG), ay.x.send(0, bB.aB)
	}, this.aQl = function(aQ6, pR) {
		bB.a6(7 + 26 * pR.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pR.length; aA++) bB.a7(16, pR[aA][0]), bB.a7(10, pR[aA][1]);
		ay.x.send(aQ6, bB.aB)
	}, this.aPh = function(aQm, aQn) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aQm), bB.a7(12, aQn), ay.x.send(ay.x.a03, bB.aB)
	}, this.aQg = function(username) {
		bB.a7(5, username.length), bD.us.v7(username)
	}
}

function aPY() {
	var zu, aKP, aQo, aQp = ["wss://", "/s50/", "/s51/", "/s52/"],
		aQq = 0;

	function aPZ() {
		ay.x.aPZ(zu, aKP)
	}

	function aQv(e) {
		ay.a5F.aPj(zu, new Uint8Array(e.data))
	}

	function aQw() {}

	function aPg(e) {
		ay.x.aPg(zu, e)
	}
	this.dW = function(e2, aQr) {
		zu = e2, aKP = aQr;
		e2 = aQp[0];
		zu < ay.x.aEN ? e2 += ay.x.aPM[zu] + aQp[1 + di] : e2 += ay.x.aPM[0] + "/i" + (1 + di) + (zu - ay.x.aEH) + "/", (aQo = new WebSocket(__fx.customLobby.isActive() && zu === 1 ? __fx.customLobby.getSocketURL() : e2)).binaryType =
			"arraybuffer", aQo.onopen = aPZ, aQo.onmessage = aQv, aQo.onclose = aPg, aQo.onerror = aQw
	}, this.aQt = function() {
		return aQo.readyState === aQo.CONNECTING
	}, this.aDk = function() {
		return aQo.readyState === aQo.OPEN
	}, this.aPT = function() {
		return aQq
	}, this.aPb = function() {
		aQq = 1
	}, this.aPV = function() {
		return this.aQt() || this.aDk()
	}, this.aPW = function(aQr) {
		aKP = aQr
	}, this.aQY = function() {
		return aKP
	}, this.send = function(aB) {
		this.aDk() && aQo.send(aB)
	}, this.close = function(aPd) {
		this.aPV() && (aQo.close(aPd), this.qq())
	}, this.qq = function() {
		aQo.onopen = null, aQo.onmessage = null, aQo.onclose = null, aQo.onerror = null
	}
}

function dF() {
	var aQx = !1,
		a5a = 0,
		i = 0,
		rt = 0,
		gap = 0,
		canvas = null,
		x3 = null,
		a1J = null;

	function aQz() {
		for (var aR5, aR3 = 0, ea = 0, ev = Math.floor(i / 2), e1 = Math.floor(rt / 2), aR4 = 1.5 * Math.PI, aA = aC.w7; 0 <= aA; aA--) ea += a1J[aA], 0 === a1J[aA] && aR3++;
		if (aQx = !1, x3.clearRect(0, 0, i, i), x3.fillStyle = b9.me, x3.fillRect(0, 0, i, i), x3.fillStyle = b9.mh, x3.fillRect(0, 0, i, gap), x3.fillRect(0, 0, gap, i), x3.fillRect(i - gap, 0, gap, i), x3.fillRect(0, i - gap, i, gap), 0 < ea)
			if (aR3 === aC.w7) {
				for (aA = aC.w7; 0 <= aA; aA--)
					if (0 < a1J[aA]) {
						! function(aA, ev, e1) {
							x3.fillStyle = be.aRC[be.kC[aA]], x3.beginPath(), x3.arc(ev, ev, e1, 0, 2 * Math.PI), x3.fill()
						}(aA, ev, e1);
						break
					}!
				function(ev) {
					var fontSize = ev / 3;
					x3.font = b8.pZ.rN(1, fontSize), x3.fillStyle = b9.mh, x3.fillText("100%", ev, ev + .1 * fontSize)
				}(ev)
			} else {
				for (aA = 0; aA <= aC.w7; aA++) 0 < a1J[aA] && (! function(aA, ev, e1, aR4, aR5) {
					x3.fillStyle = be.aRC[be.kC[aA]], x3.beginPath(), x3.arc(ev, ev, e1, aR4, aR5), x3.lineTo(ev, ev), x3.fill()
				}(aA, ev, e1, aR4, aR5 = aR4 + 2 * Math.PI * a1J[aA] / ea), function(ev, e1, aR4, aR5) {
					var f2 = (aR5 - aR4) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e1 * Math.min(f2, .37);
					fontSize < 8 || (aR4 = (aR4 + aR5) / 2, aR5 = (__fx.settings.detailedTeamPercentage ? (100 * f2).toFixed(2) : Math.floor(100 * f2 + .5)) + "%", e1 *= .525 - Math.max(.6 * (f2 - .7), 0), x3.font = b8.pZ.rN(1, fontSize), x3
						.fillStyle = b9.mh, x3.fillText(aR5, ev + Math.cos(aR4) * e1, ev + Math.cos(aR4 + 1.5 * Math.PI) * e1))
				}(ev, e1, aR4, aR5), 0 !== aA && aRA(ev, e1, aR4), aR4 = aR5);
				aRA(ev, e1, 1.5 * Math.PI)
			}!
		function(ev, e1) {
			x3.beginPath(), x3.arc(ev, ev, e1, 0, 2 * Math.PI), x3.stroke()
		}(ev, e1)
	}

	function aRA(ev, e1, aRD) {
		x3.beginPath(), x3.moveTo(ev, ev), x3.lineTo(ev + Math.cos(aRD) * e1, ev + Math.cos(aRD + 1.5 * Math.PI) * e1), x3.stroke()
	}
	this.dW = function() {
		if (aC.hQ) {
			a5a = 0, a1J = new Uint32Array(aC.w7 + 1);
			for (var aA = aC.w7; 0 <= aA; aA--) a1J[aA] = 0;
			for (aA = ak.jr - 1; 0 <= aA; aA--) a1J[be.eY[ak.js[aA]]] += 1;
			this.resize()
		} else a1J = x3 = canvas = null
	}, this.a6O = function() {
		return i
	}, this.resize = function() {
		aC.hQ && (i = Math.floor(z.a0.qx() && !aC.mA ? .18 * h.min : .13 * h.pb), i = (i *= 1 + (.5 + .2 * z.a0.qx()) * aC.mA) + i % 2, rt = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x3 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x3.lineWidth = gap, x3.strokeStyle = b9.mh, b8.pZ.textAlign(x3, 1), b8.pZ.textBaseline(x3, 1), aQz())
	}, this.a2b = function() {
		var dm, l1 = this.l2();
		return be.kC[l1] || (l1 = function() {
			for (var l1 = -1, aA = aC.w7; 1 <= aA; aA--)(-1 === l1 || a1J[aA] > a1J[l1]) && (l1 = aA);
			return l1
		}(), dm = af.gO[l5[0]], -1 !== l1 && a1J[l1] > dm) ? a1J[l1] : dm
	}, this.zg = function() {
		return a5a = 31, this.ik(), this.l2()
	}, this.l2 = function() {
		for (var l1 = 0, aA = aC.w7; 0 < aA; aA--) a1J[aA] > a1J[l1] && (l1 = aA);
		return l1
	}, this.l3 = function(aR1) {
		for (var g3 = 0, js = ak.js, eY = be.eY, ea = ak.jr, fE = bM.fE, aA = 0; aA < ea; aA++) {
			var g8 = js[aA];
			eY[g8] === aR1 && (fE[g3++] = g8)
		}
		bM.f6[0] = g3
	}, this.a2D = function() {
		for (var g3 = 0, aA = aC.w7; 0 <= aA; aA--) g3 += 0 < a1J[aA];
		return g3
	}, this.ik = function() {
		if (aC.hQ && 32 <= ++a5a) {
			a5a = 0;
			for (var aA = aC.w7; 0 <= aA; aA--) a1J[aA] = 0;
			for (aA = ak.jr - 1; 0 <= aA; aA--) a1J[be.eY[ak.js[aA]]] += af.gO[ak.js[aA]];
			aQx = !0
		}
	}, this.lR = function() {
		aC.hQ && aQx && aQz()
	}, this.te = function() {
		aC.hQ && (aC.mA ? tf.drawImage(canvas, ba.gap, ba.gap) : tf.drawImage(canvas, ba.gap, a6P + 2 * ba.gap))
	}
}

function cy() {
	function aRF(key) {
		var aOU;
		return "undefined" == typeof URLSearchParams || (aOU = window.location.search, "string" != typeof(aOU = new URLSearchParams(aOU).get(key))) || aOU.length < 1 ? null : aOU
	}
	this.df = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRF("account");
				if (!value && !(value = aRF("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rm, new rn(1e3, {
					ro: 0,
					rk: value,
					rl: 0
				})), 1
			}()) {
			var value = aRF("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zq = new URL(window.location.href);
		zq.search = "";
		try {
			return history.replaceState(null, "", zq.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aLb = function(key, value) {
		if (0 === z.id) try {
			var zq = new URL(window.location.href),
				g8 = zq.searchParams;
			g8.set(key, value), zq.search = g8.toString(), history.replaceState(null, "", zq.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cf() {
	var aRH, g;
	this.dW = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dn(32768 * aA, 100);
		this.a3M(0)
	}, this.value = function(g8) {
		return g[g8]
	}, this.aIk = function() {
		return bJ.dn(aRH - 1, 2)
	}, this.a3M = function(aIP) {
		aRH = 2 * aIP % 32768 + 1
	}, this.random = function() {
		return aRH = 167 * aRH % 32768
	}, this.j8 = function(lZ) {
		return bJ.dn(lZ * this.random(), 32768)
	}, this.ji = function(g8) {
		return 0 !== g8 && this.random() < this.value(g8)
	}, this.iU = function(et, eu) {
		return et + this.j8(eu - et)
	}
}

function cu() {
	this.op = new aRI, this.a3X = new aRJ, this.aG7 = new aRK, this.dW = function() {
		aC.gk || this.op.dW()
	}, this.ik = function() {
		aC.gk || (this.op.ik(), 3 !== s.rm) || bd.jn() % 15 != 5 && 2 !== aC.ym || s.aDB().aOV()
	}, this.aOY = function() {
		0 === aC.ym && aZ.aE2(), aC.a3H.a3f(), aC.data.canvas = null, ay.x.close(ay.x.a03, 3257), ay.x.a03 = 0, aC.data.isReplay = 1, aC.a3K()
	}, this.aOX = function(pG) {
		var aA = pG.indexOf("=");
		return 0 <= aA ? pG.substring(aA + 1) : pG
	}, this.aOW = function(pG) {
		return "https://territorial.io/?replay=" + pG
	}
}

function aRI() {
	this.aRM = null, this.aRN = null, this.aRO = null, this.aRP = null, this.aRQ = null, this.aRR = null, this.a3W = "";
	var aRS = 0;
	this.dW = function() {
		this.aRM = [], this.aRN = [], this.aRO = [], this.aRP = [], this.aRQ = [0], this.aRR = [0], aRS = 0, this.a3W = ""
	}, this.oq = function(id, fI, fK, fM) {
		aC.gk || 2 === aC.ym || (0 === this.aRQ[aRS] && (this.aRR[aRS] ? (this.aRQ.push(1), this.aRR.push(0), aRS++) : this.aRQ[aRS] = 1), this.aRM.push(id), this.aRN.push(fI), this.aRO.push(void 0 === fK ? 0 : fK), this.aRP.push(void 0 === fM ?
			0 : fM), this.aRR[aRS]++)
	}, this.ik = function() {
		0 === this.aRQ[aRS] ? this.aRR[aRS]++ : (this.aRQ.push(0), this.aRR.push(0), aRS++)
	}
}

function aRK() {
	var aRT = 0;

	function aRX(pG, id) {
		aRT || (id ? 1 === id ? aM.a4h = L(402) + ": " + pG : s.t(4, 3, new u(L(403), pG, 1)) : s.t(4, 3, new u("⚠️ " + L(401), pG, 1)))
	}
	this.vC = function(pG, aRU) {
		var pR;
		return aRT = aRU, bE.rp.v4(bE.rp.v2(bE.rp.v0(pG))), aM.a4h = "", !(! function() {
			if (bF.size < 10) aRX("File Too Small");
			else {
				var aRZ = bF.oa(12),
					aQn = (aRZ !== l.rVersion && aRX("Incompatible Version " + aRZ + " " + l.rVersion, 1), bF.oa(12)),
					aRa = bF.oa(31);
				if (aRa !== bF.size) aRX("Size Error: " + aRa + " " + bF.size);
				else if (function(j, aRZ) {
						for (var g8 = bF.aB, ea = bF.size, aQn = aRZ, aA = 3; aA < ea; aA++) aQn = aQn + g8[aA] & 4095;
						return aQn === j || (aRX("Hash Error: " + aQn + " " + j + " " + ea), !1)
					}(aQn, aRZ)) return 1
			}
			return
		}() || (aRU = bF, (pR = aC.data = new a3G).mapType = aRU.oa(2), pR.mapProceduralIndex = aRU.oa(8), pR.mapRealisticIndex = aRU.oa(8), pR.mapSeed = aRU.oa(14), pR.mapName = aRU.aRc(5), 2 === pR.mapType && aRU.aRd(), pR
			.passableWater = aRU.oa(1), pR.passableMountains = aRU.oa(1), pR.playerCount = aRU.oa(10), pR.humanCount = aRU.oa(10), pR.selectedPlayer = aRU.oa(9), pR.gameMode = aRU.oa(1), pR.playerMode = aRU.oa(2), pR.battleRoyaleMode =
			aRU.oa(2), pR.numberTeams = aRU.oa(4), pR.isZombieMode = aRU.oa(1), pR.isContest = aRU.oa(1), pR.isReplay = aRU.oa(1), pR.elo = aRU.aRe(2, 14, 2), pR.colorsType = aRU.oa(1), pR.colorsPersonalized = aRU.oa(1), pR.colorsData =
			aRU.aRe(10, 18, 512), pR.selectableColor = aRU.oa(1), pR.teamPlayerCount = aRU.aRe(4, 10, 9), pR.neutralBots = aRU.oa(1), pR.botDifficultyType = aRU.oa(2), pR.botDifficultyValue = aRU.oa(4), pR.botDifficultyTeam = aRU.aRe(4,
				4, 9), pR.botDifficultyData = aRU.aRe(10, 4, 512), pR.spawningType = aRU.oa(2), pR.spawningSeed = aRU.oa(14), pR.spawningData = aRU.aRe(11, 12, 1024), pR.selectableSpawn = aRU.oa(1), pR.playerNamesType = aRU.oa(2), pR
			.playerNamesData = aRU.aRf(10, 5, 512), pR.selectableName = aRU.oa(1), pR.aIncomeType = aRU.oa(2), pR.aIncomeValue = aRU.oa(8), pR.aIncomeData = aRU.aRe(10, 8, 512), pR.tIncomeType = aRU.oa(2), pR.tIncomeValue = aRU.oa(8), pR
			.tIncomeData = aRU.aRe(10, 8, 512), pR.iIncomeType = aRU.oa(2), pR.iIncomeValue = aRU.oa(8), pR.iIncomeData = aRU.aRe(10, 8, 512), pR.sResourcesType = aRU.oa(2), pR.sResourcesValue = aRU.oa(11), pR.sResourcesData = aRU.aRe(10,
				11, 512), ! function() {
				var hv = bF,
					vD = hv.oa(5),
					aRg = hv.oa(30),
					aRh = hv.oa(30);
				if (aRg + aRh > 8 * hv.size) return void aRX("Corrupted File");
				return function(ea) {
						var aRk = new Uint8Array(ea),
							aRl = new Uint16Array(ea),
							aRm = new Uint32Array(ea),
							aRn = new Uint32Array(ea);
						b7.op.aRM = aRk, b7.op.aRN = aRl, b7.op.aRO = aRm, b7.op.aRP = aRn;
						for (var aA = 0; aA < ea; aA++) {
							var id = bF.oa(4);
							aRk[aA] = id, aRl[aA] = bF.oa(9), 0 === id ? aRm[aA] = bF.oa(22) : 1 === id ? (aRm[aA] = bF.oa(10), aRn[aA] = bF.oa(10)) : 2 === id ? (aRm[aA] = bF.oa(10), aRn[aA] = bF.oa(9)) : 3 === id || 4 === id ? (aRm[
								aA] = bF.oa(10), aRn[aA] = bF.oa(22)) : 5 === id || 6 === id ? aRm[aA] = bF.oa(10) : 7 === id ? aRm[aA] = bF.oa(1) : 10 === id && (aRm[aA] = bF.oa(20), aRn[aA] = bF.oa(22))
						}
					}(aRg),
					function(ea, vD) {
						var aRQ = new Uint8Array(ea),
							aRR = new Array(ea);
						aRR.fill(0), b7.op.aRQ = aRQ, b7.op.aRR = aRR;
						for (var aA = 0; aA < ea; aA++) aRQ[aA] = bF.oa(1), aRR[aA] = bF.oa(vD)
					}(aRh, vD), 1
			}()) || (bF.e2 < 8 * bF.size - 13 || bF.e2 > 8 * bF.size ? (aRX("Out Of Bounds Error: " + bF.e2 + " " + 8 * bF.size), 1) : (b7.op.a3W = pG, 2 === aC.data.mapType && (aRX("Load base64 image...", 2), 1))))
	}, this.aG8 = function(aFi, aRY) {
		var a1e = document.createElement("canvas"),
			hY = a1e.getContext("2d");
		if (a1e.width = aFi.width, a1e.height = aFi.height, hY.drawImage(aFi, 0, 0), aRT || aRY) return aC.ym ? void 0 : (aC.data.canvas = a1e, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aOY()
	}
}

function aRJ() {
	this.yF = function() {
		var vD = function() {
				for (var aRR = b7.op.aRR, ea = aRR.length, max = 0, aA = 0; aA < ea; aA++) max = Math.max(max, aRR[aA]);
				return vK(Math.max(max, 1))
			}(),
			i = (pR = aC.data, (i = bC).dW(), i.a7(12, l.rVersion), i.e2 += 43, i.a7(2, pR.mapType), i.a7(8, pR.mapProceduralIndex), i.a7(8, pR.mapRealisticIndex), i.a7(14, pR.mapSeed), i.aRu(pR.mapName, 5), 2 === pR.mapType && i.aRv(pR.canvas),
				i.a7(1, pR.passableWater), i.a7(1, pR.passableMountains), i.a7(10, pR.playerCount), i.a7(10, pR.humanCount), i.a7(9, pR.selectedPlayer), i.a7(1, pR.gameMode), i.a7(2, pR.playerMode), i.a7(2, pR.battleRoyaleMode), i.a7(4, pR
					.numberTeams), i.a7(1, pR.isZombieMode), i.a7(1, pR.isContest), i.a7(1, pR.isReplay), i.dd(pR.elo, 2, 14), i.a7(1, pR.colorsType), i.a7(1, pR.colorsPersonalized), i.dd(pR.colorsData, 10, 18), i.a7(1, pR.selectableColor), i.dd(
					pR.teamPlayerCount, 4, 10), i.a7(1, pR.neutralBots), i.a7(2, pR.botDifficultyType), i.a7(4, pR.botDifficultyValue), i.dd(pR.botDifficultyTeam, 4, 4), i.dd(pR.botDifficultyData, 10, 4), i.a7(2, pR.spawningType), i.a7(14, pR
					.spawningSeed), i.dd(pR.spawningData, 11, 12), i.a7(1, pR.selectableSpawn), i.a7(2, pR.playerNamesType), i.aRw(pR.playerNamesData, 10, 5), i.a7(1, pR.selectableName), i.a7(2, pR.aIncomeType), i.a7(8, pR.aIncomeValue), i.dd(pR
					.aIncomeData, 10, 8), i.a7(2, pR.tIncomeType), i.a7(8, pR.tIncomeValue), i.dd(pR.tIncomeData, 10, 8), i.a7(2, pR.iIncomeType), i.a7(8, pR.iIncomeValue), i.dd(pR.iIncomeData, 10, 8), i.a7(2, pR.sResourcesType), i.a7(11, pR
					.sResourcesValue), i.dd(pR.sResourcesData, 10, 11), ! function(vD) {
					var i = bC,
						aRM = b7.op.aRM,
						fI = b7.op.aRN,
						fK = b7.op.aRO,
						fM = b7.op.aRP,
						ea = aRM.length;
					i.a7(5, vD), i.a7(30, ea), i.a7(30, b7.op.aRR.length);
					for (var aA = 0; aA < ea; aA++) {
						var ev = aRM[aA];
						i.a7(4, ev), i.a7(9, fI[aA]), 0 === ev ? i.a7(22, fK[aA]) : 1 === ev ? (i.a7(10, fK[aA]), i.a7(10, fM[aA])) : 2 === ev ? (i.a7(10, fK[aA]), i.a7(9, fM[aA])) : 3 === ev || 4 === ev ? (i.a7(10, fK[aA]), i.a7(22, fM[aA])) :
							5 === ev || 6 === ev ? i.a7(10, fK[aA]) : 7 === ev ? i.a7(1, fK[aA]) : 10 === ev && (i.a7(20, fK[aA]), i.a7(22, fM[aA]))
					}
				}(vD), ! function(vD) {
					for (var i = bC, aRQ = b7.op.aRQ, aRR = b7.op.aRR, ea = aRQ.length, aA = 0; aA < ea; aA++) i.a7(1, aRQ[aA]), i.a7(vD, aRR[aA])
				}(vD), bC.e2),
			pR = bJ.dn(i - 1, 6) + 1,
			vD = (bB.aQH(6 * pR) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.e2 = 24, i.a7(31, i.g.length), i.e2 = 12, i.a7(12, function() {
					for (var g = bC.g, ea = g.length, aQn = l.rVersion, aA = 3; aA < ea; aA++) aQn = aQn + g[aA] & 4095;
					return aQn
				}())
			}(), bF.dW(bC.g), bD.rp.rq(bD.rp.rr(pR)));
		return bF.t8(), bC.dW(), vD
	}
}

function ck() {
	var ev, bq = !1,
		aRy = !1,
		aRz = -1e4,
		aS0 = -1,
		aS1 = 0;

	function resize(aS5) {
		ev = 0, aa.sE() && (aS3(aS5) || bq) && (bq = !1, ba.resize(), bU.aA6.resize(), aX.dW(), bW.dW(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.ym ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7T()) : (aZ.aE4(), aZ.aE5()), bd.de = !0)
	}

	function aS2(f2) {
		return f2 && 128 < f2 ? Math.floor(f2) : 128
	}

	function aS3(aS5) {
		var i, j, aS7, rt, a6s;
		if (!(0 < h.rU)) return rt = aS2(document.documentElement.clientWidth), a6s = aS2(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rt, j = a6s, aS7 = 0 !== z.id || i < j ? 700 :
			1200, aS7 = Math.min(aS7 / ((i + j) / 2), 1), aS7 = 0 === bh.dr.data[1].value ? 2 * aS7 / 3 : Math.min(aS7 + (bh.dr.data[1].value - 1) * (1 - aS7) / 2, 1), h.k = (window.devicePixelRatio || 1) * aS7, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aS5 && !aRy ? (aRy = !0, document.body.removeChild(a0I)) : aRy && (aRy = !1, document.body.appendChild(a0I)), i = Math.floor(.5 + rt * h.k), j = Math.floor(.5 + a6s * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9i(i, j), h.max = a4w(i, j), h.pb = bJ.dn(i + j, 2), h.tb = i / j, a0I.width = i, a0I.height = j, a0I.style.width = rt + "px", a0I.style.height = a6s + "px", aS0 = bd.lx + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pb = 0, this.tb = 1, this.k = 1, this.rU = 0, this.dX = function() {
		this.i = aS2(document.documentElement.clientWidth) + 2, this.j = aS2(document.documentElement.clientHeight) + 2
	}, this.dW = function() {
		ev = 1, a0I = document.getElementById("canvasA"), (tf = a0I.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aS3(0)
	}, this.ik = function() {
		50 <= ++ev && resize(0), -1 === aS0 || bd.lx < aS0 || (aS0 = -1, 2e3 * ++aS1 >= bd.lx + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.dh = function(hk) {
		bq = !0, resize(hk)
	}, this.a0y = function() {
		aRz + 1e3 > bd.lx || (aRz = bd.lx, resize(0))
	}
}

function dC() {
	this.aQV = new aS9, this.zb = new aSA
}

function aSA() {
	this.zc = function() {
		for (var g8, ea = ak.jr, ya = ak.js, zK = af.zK, a6h = this.aFR(), aA = 0; aA < ea; aA++) g8 = ya[aA], b8.fw.jE(g8) || (zK[g8] = a6h);
		var ov = af.ov,
			it = af.it,
			iu = af.iu,
			zJ = af.zJ,
			ea = aC.jq;
		for (aA = 0; aA < ea; aA++)(0 === zJ[aA] || iu[aA] < 1 || 2 * ov[aA] > 3 * (it[aA] + iu[aA])) && (zK[aA] = 0);
		var zZ = 0;
		for (aA = 0; aA < ea; aA++) zZ += 0 < zK[aA];
		return zZ
	}, this.aFR = function() {
		return Math.min(65535, bd.jn())
	}
}

function aS9() {
	function aSE(g, f2, hO) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f2 >> (aA + hO) % 30 & 1)) % 256
	}
	this.ik = function(aSB, aSC) {
		var g = new Uint8Array(256);
		return function(g, aSB, aSC) {
				var aA, aSG = 3 + (4 + aSB) % 32768,
					aSH = 12 + aSC % 32768,
					aSI = 17 + ((aSB & aSC) + (aSB | aSC) + aSB) % 32768;
				for (aA = 0; aA < 256; aA++) aSG = 1 + aSG * aSH % aSI, g[aA] = aSG % 256
			}(g, aSB, aSC), aSE(g, aSB, 2), aSE(g, aSC, 7),
			function(g) {
				var aA, f2, e2 = 0;
				for (aA = 0; aA < 3e4; aA++) f2 = g[e2], g[e2] = (f2 + aA + g[(e2 + aA) % 256]) % 256, e2 = (f2 + aA + e2 + (f2 & e2)) % 256
			}(g),
			function(g) {
				var aA, a6s = 1,
					sb = 1;
				for (aA = 0; aA < 256; aA += 2) a6s = (1 + a6s) * (g[aA] + 1) % 1073741824, sb = (1 + sb) * (g[aA + 1] + 1) % 1073741824;
				return [a6s, sb]
			}(g)
	}
}

function ch() {
	var aSJ, aSK, h3, aSL;
	this.dW = function() {
		var aA, eh, ej, aQh, aSM, i, j, x3, hV, vU, f2, g8, eq, et, a46;
		if (function() {
				if (h3 = !0, aSL = "rgb(" + bQ.vS[0] + "," + bQ.vS[1] + "," + bQ.vS[2] + ")", bQ.aIX(bQ.eG)) return 1;
				return h3 = !1, 0
			}()) aSK = null;
		else {
			for (aSJ = bJ.dn(96, 4), aSM = 1 === bQ.eG ? (aQh = 0, 160) : (aQh = 128, 32), aSL = "rgb(" + aQh + "," + aQh + "," + aQh + ")", aSK = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSK[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.el : aSJ, j = aA % 2 == 0 ? aSJ : bQ.em + 2 * aSJ, aSK[aA].width = i, aSK[aA].height = j, vU = (hV = (x3 = aSK[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (ej = aSJ - 1; 0 <= ej; ej--)
						for (f2 = aSM + Math.floor((ej + 1) * (aQh - aSM) / (aSJ + 1)), eh = i - 1; 0 <= eh; eh--) vU[g8 = 4 * ((0 === aA ? aSJ - ej - 1 : ej) * i + eh)] = f2, vU[g8 + 1] = f2, vU[g8 + 2] = f2, vU[g8 + 3] = 255;
				else {
					for (eh = aSJ - 1; 0 <= eh; eh--)
						for (f2 = aSM + Math.floor((eh + 1) * (aQh - aSM) / (aSJ + 1)), ej = j - 1 - aSJ; aSJ <= ej; ej--) vU[g8 = 4 * (ej * i + (3 === aA ? aSJ - eh - 1 : eh))] = f2, vU[g8 + 1] = f2, vU[g8 + 2] = f2, vU[g8 + 3] = 255;
					for (et = 1; 0 <= et; et--)
						for (eh = aSJ - 1; 0 <= eh; eh--)
							for (ej = aSJ - 1; 0 <= ej; ej--) eq = (Math.pow(eh * eh + ej * ej, .5) + 1) / (aSJ + 1), f2 = aSM + Math.floor((1 < eq ? 1 : eq) * (aQh - aSM)), vU[g8 = 4 * ((0 === et ? aSJ - ej - 1 : ej + et * (j - aSJ)) * i + (
								1 === aA ? eh : aSJ - eh - 1))] = f2, vU[g8 + 1] = f2, vU[g8 + 2] = f2, vU[g8 + 3] = 255
				}
				x3.putImageData(hV, 0, 0)
			}
			a46 = aSM, bQ.vN.fillStyle = "rgb(" + a46 + "," + a46 + "," + a46 + ")", bQ.vN.fillRect(0, 0, bQ.el, 1), bQ.vN.fillRect(0, bQ.em - 1, bQ.el, 1), bQ.vN.fillRect(0, 0, 1, bQ.em), bQ.vN.fillRect(bQ.el - 1, 0, 1, bQ.em)
		}
	}, this.wx = function() {
		var et = h3 ? 0 : -aSJ;
		aK8(et, et, bQ.el - 2 * et, bQ.em - 2 * et, bY.aSP, bY.aSQ, bY.aSR, bY.aSS) || (tf.fillStyle = aSL, tf.fillRect(0, 0, h.i, h.j))
	}, this.te = function() {
		h3 || (aK7(0, -aSJ, bQ.el, aSJ, bY.aSP, bY.aSQ, bY.aSR, bY.aSS) && tf.drawImage(aSK[0], bY.aST, bY.aSU - aSJ), aK7(bQ.el, -aSJ, aSJ, bQ.em + 2 * aSJ, bY.aSP, bY.aSQ, bY.aSR, bY.aSS) && tf.drawImage(aSK[1], bY.aST + bQ.el, bY.aSU - aSJ),
			aK7(0, bQ.em, bQ.el, aSJ, bY.aSP, bY.aSQ, bY.aSR, bY.aSS) && tf.drawImage(aSK[2], bY.aST, bY.aSU + bQ.em), aK7(-aSJ, -aSJ, aSJ, bQ.em + 2 * aSJ, bY.aSP, bY.aSQ, bY.aSR, bY.aSS) && tf.drawImage(aSK[3], bY.aST - aSJ, bY.aSU - aSJ))
	}
}

function d1() {
	this.h4 = new aSV, this.aFP = new aSW, this.x0 = new aSX, this.x = new aSY, this.iK = new aSZ, this.a46 = new aSa, this.aSb = new aSc, this.je = new aSd, this.kS = new aSe, this.aSf = new aSg, this.dW = function() {
		this.x0.dW(), this.x.dW(), this.iK.dW(), this.a46.dW(), this.aSf.dW()
	}, this.te = function() {
		this.aSf.te(), this.x0.te()
	}
}

function aSd() {
	this.ik = function(player) {
		var om;
		return !!aC.data.passableWater && 0 !== af.gH[player].length && bL.x.on !== bL.x.k4 && !((om = bL.x.om[player]) >= Math.max(3 * am.performance.ks, aD.k4[aD.hF[player]]) || om === bL.x.oz || !b8.fw.ot(player, aD.k2[aD.hF[player]], 32,
			0) || !am.iX.ik(player) && !am.iZ.ik(player) || ! function(a2G) {
				var aSj = bM.fC[1] + bK.ha[bM.fC[2] - 1] << 2;
				if (ab.eR(aSj)) return 1;
				return aSj = ab.eS(aSj), a2G !== aSj && !!eT(a2G, aSj)
			}(player)) && function(player) {
			return b8.fw.ow(player), bL.x.p2(player), !0
		}(player)
	}
}

function aSV() {
	function aSr(aA, kt, ku) {
		var aSt, aSs;
		if (!(aA < 0)) return aSs = bL.x.m6[aA], aSt = bK.hy(aSs), aSs = bK.i1(aSs), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5E[aA])), aA = Math.max(aA, bK.iE(b8.pZ.sC(.02, 1.7))), bJ.aKF(bK.hx(kt), bK.i0(ku), aSt, aSs, aA)
	}

	function aSl(aSk) {
		var aSw = 4 + .03 * (1 + 1.5 * z.a0.qx()) * h.pb / iC;
		return bK.i2(aSk, bM.fC[1]) < aSw
	}
	this.h5 = function(player, aSk) {
		return !!(aC.data.passableWater && bK.iF(aSk) && bL.x.on !== bL.x.k4 && bL.x.om[player] !== bL.x.oz && 0 !== af.gH[player].length && bL.kS.kT(player, aSk) && aSl(aSk))
	}, this.o7 = function(player, m3, aSk) {
		return !!(bK.iF(aSk) && this.p3(player, m3) && bL.kS.p4(aSk) && aSl(aSk))
	}, this.p3 = function(player, id) {
		for (var aSm, s7 = player << 3, s8 = s7 + bL.x.om[player], aSn = bL.x.aSn, aSo = bL.x.aSo, aA = s7; aA < s8; aA++)
			if (id === aSo[aSm = aSn[aA]]) return bM.fC[3] = aSm, !0;
		return !1
	}, this.o6 = function(eM) {
		var a47 = bL.a46.a47;
		return !!this.p3(aC.eK, a47) && (b6.gx.o6(a47, eM), !0)
	}, this.a49 = function(kt, ku) {
		var player = aC.eK,
			ea = bL.x.om[player];
		if (0 === ea) return !1;
		for (var aSn = bL.x.aSn, m6 = bL.x.m6, s7 = player << 3, aSp = 80, aMM = -1, aA = s7 + ea - 1; s7 <= aA; aA--) {
			var aSq = aSn[aA],
				eq = bK.hs(kt, ku, m6[aSq]);
			eq < aSp && (aSp = eq, aMM = aSq)
		}
		return !!aSr(aMM, kt, ku) && (bL.a46.a47 = bL.x.aSo[aMM], bk.p1.a49(), !0)
	}, this.a4G = function(kt, ku) {
		var ea = bL.x.on;
		if (ea < 1) return -1;
		for (var m6 = bL.x.m6, aSp = 80, aMM = -1, aA = 0; aA < ea; aA++) {
			var eq = bK.hs(kt, ku, m6[aA]);
			eq < aSp && (aSp = eq, aMM = aA)
		}
		return aSr(aMM, kt, ku) ? aMM : -1
	}, this.m5 = function(player, id) {
		for (var s7 = player << 3, s8 = s7 + bL.x.om[player], aSo = bL.x.aSo, aSn = bL.x.aSn, aA = s7; aA < s8; aA++) {
			var aSq = aSn[aA];
			if (aSo[aSq] === id) return aSq
		}
		return -1
	}, this.aFM = function(player) {
		for (var s7 = player << 3, s8 = s7 + bL.x.om[player], aSn = bL.x.aSn, a5E = bL.x.a5E, hF = 0, aA = s7; aA < s8; aA++) hF += a5E[aSn[aA]];
		return hF
	}, this.mB = function(player) {
		return 0 === bL.x.om[player] ? -1 : bL.x.aSn[player << 3]
	}
}

function aSW() {
	this.aFQ = function(player) {
		for (var aSn = bL.x.aSn, s7 = player << 3, aA = s7 + bL.x.om[player] - 1; s7 <= aA; aA--) this.aSx(aSn[aA])
	}, this.aSx = function(aSy) {
		var x = bL.x,
			aSz = x.on - 1,
			aT0 = x.a5D[aSy],
			aT1 = x.aT2[aSy],
			aT3 = x.m6[aSy];
		x.on = aSz, x.a5D[aSy] = x.a5D[aSz], x.aT4[aSy] = x.aT4[aSz], x.aT5[aSy] = x.aT5[aSz], x.m6[aSy] = x.m6[aSz], x.aT6[aSy] = x.aT6[aSz], x.a5E[aSy] = x.a5E[aSz], x.aT2[aSy] = x.aT2[aSz], x.aSo[aSy] = x.aSo[aSz], x.aT7[aSy] = x.aT7[aSz], x
			.aT8[aSy] = x.aT8[aSz], x.aSn[x.a5D[aSy]] = aSy,
			function(aRD) {
				var player = aRD >> 3,
					x = bL.x,
					ea = x.om[player] - 1,
					aTB = (player << 3) + ea;
				x.om[player] = ea, aTB !== aRD && (x.aSn[aRD] = x.aSn[aTB], x.a5D[x.aSn[aRD]] = aRD)
			}(aT0), bL.iK.iK[bK.iJ(x.m6[aSy])][x.aT2[aSy]] = aSy, aSz = bK.iJ(aT3), aT0 = aT1, aSz = bL.iK.iK[aSz], x = aSz.pop(), aT0 !== aSz.length && (aSz[aT0] = x, bL.x.aT2[x] = aT0)
	}
}

function aSX() {
	var aTD, xP = 8,
		aTE = new Array(2);

	function aTF(e2) {
		var hS = xP + 4,
			a1e = b8.pZ.vJ(hS, hS),
			hY = b8.pZ.getContext(a1e, !0),
			hV = b8.pZ.getImageData(hY, hS, hS),
			vU = hV.data;
		return aTG(vU, hS + 1, e2), aTG(vU, hS + 2, e2), aTG(vU, 2 * hS + 1, e2), aTG(vU, 2 * hS - 3, e2), aTG(vU, 2 * hS - 2, e2), aTG(vU, 3 * hS - 2, e2), aTG(vU, hS * (hS - 3) + 1, e2), aTG(vU, hS * (hS - 2) + 1, e2), aTG(vU, hS * (hS - 2) + 2,
			e2), aTG(vU, hS * (hS - 2) - 2, e2), aTG(vU, hS * (hS - 1) - 3, e2), aTG(vU, hS * (hS - 1) - 2, e2), hY.putImageData(hV, 0, 0), a1e
	}

	function aTG(vU, eM, e2) {
		eM *= 4;
		vU[eM] = 255, vU[1 + eM] = 255, vU[2 + eM] = e2, vU[3 + eM] = 255
	}

	function vJ(player) {
		var a1e = b8.pZ.vJ(xP, xP);
		return function(hY, player) {
			var eh, ej, hw, eM, aTI, aTJ, hS = xP,
				hV = b8.pZ.getImageData(hY, hS, hS),
				vU = hV.data,
				kY = (hS >> 1) - .5,
				aSL = ab.a5o(player),
				aTL = b8.pi.a1C(aSL, .5);
			b8.pi.a1E(aSL, aTL, 300) || b8.pi.a1G(aSL, 100);
			for (ej = 0; ej < hS; ej++)
				for (eh = 0; eh < hS; eh++) aTJ = (hS - 1.5) * (hS - 1.5) / 4, aTI = (hw = (hw = eh - kY) * hw + (hw = ej - kY) * hw) <= (hS - 4.5) * (hS - 4.5) / 4 ? aTL : aSL, vU[eM = 4 * (ej * hS + eh)] = aTI[0], vU[1 + eM] = aTI[1], vU[2 +
					eM] = aTI[2], vU[3 + eM] = aTJ < hw ? 0 : 255;
			hY.putImageData(hV, 0, 0)
		}(b8.pZ.getContext(a1e, !0), player), a1e
	}
	this.dW = function() {
		aTD = new Array(aC.eX), aTE[0] = aTF(255), aTE[1] = aTF(0)
	}, this.te = function() {
		var aA, player, aTM, aKG, hF, hv, aTO, aTQ, aTR, m6 = bL.x.m6,
			a5D = bL.x.a5D,
			a5E = bL.x.a5E,
			aT8 = bL.x.aT8,
			aTS = aTD,
			aTT = aC.eK,
			aTU = -1,
			ea = bL.x.on,
			aTV = h.i,
			aTW = h.j,
			aTX = bQ.el << 4,
			eP = iC,
			eE = eP / xP,
			m7 = iB / eP,
			m8 = iD / eP,
			hw = (aTV + iB) / eP - m7,
			hz = (aTW + iD) / eP - m8,
			hY = tf;
		for (bL.h4.p3(aC.eK, bL.a46.a47) && (aTU = bM.fC[3]), hY.imageSmoothingEnabled = eP < 9, b8.pZ.textAlign(hY, 1), b8.pZ.textBaseline(hY, 1), aA = 0; aA < ea; aA++) player = a5D[aA] >> 3, hF = a5E[aA], aTM = .9 + .1 * Math.log10(hF), aKG =
			(hv = m6[aA]) % aTX / 16 - aTM, hv = aTW * (Math.floor(hv / aTX) / 16 - aTM - m8) / hz, aTO = -2 * (aTR = eP * aTM) * (1 + (aTQ = +(player === aTT)) / 8), aTQ = aTQ * aTR / 4, (aTR = aTV * (aKG - m7) / hw) < aTO || hv < aTO || aTV +
			aTQ < aTR || aTW + aTQ < hv || (aKG = 2 * aTM * eE, aTO = aTM * eP, void 0 === (aTQ = aTS[player]) && (aTS[player] = aTQ = vJ(player)), player === aTT && (hY.setTransform(aKG, 0, 0, aKG, aTR - 2 * aKG, hv - 2 * aKG), hY.drawImage(aTE[
				+(aA === aTU)], 0, 0)), hY.setTransform(aKG, 0, 0, aKG, aTR, hv), hY.drawImage(aTQ, 0, 0), (aTM = Math.floor(function(hF) {
				if (hF < 1e3) return .42;
				if (hF < 1e4) return .34;
				if (hF < 1e6) return .26;
				if (hF < 1e8) return .19;
				return .15
			}(hF) * aTO)) < 6) || (hY.setTransform(1, 0, 0, 1, 0, 0), hY.fillStyle = aT8[aA] ? b9.nF : b9.mh, hY.font = b8.pZ.rN(1, aTM), hY.fillText(b8.zN.y4(hF), aTR + aTO, hv + aTO + .1 * aTM));
		hY.imageSmoothingEnabled = !1, hY.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aSg() {
	var a1e;
	this.dW = function() {
		a1e = a1e || bN.x.aTa(20, be.aTb[7])
	}, this.te = function() {
		var mR = iC;
		if (!(5 <= mR)) {
			var aTV = h.i,
				aTW = h.j,
				m7 = iB / mR,
				m8 = iD / mR,
				mK = (aTV + iB) / mR,
				mL = (aTW + iD) / mR,
				g9 = -20 * mR,
				aTc = .5 * g9,
				aTX = bQ.el << 4,
				ea = bL.x.on,
				m6 = bL.x.m6,
				aTd = a1e,
				hY = tf;
			3 < mR && (hY.globalAlpha = .5 * (5 - mR));
			for (var aA = 0; aA < ea; aA++) {
				var hv = m6[aA],
					eh = aTV * (hv % aTX / 16 - m7) / (mK - m7) + aTc,
					hv = aTW * (Math.floor(hv / aTX) / 16 - m8) / (mL - m8) + aTc;
				aTV < eh || aTW < hv || eh < g9 || hv < g9 || (hY.setTransform(mR, 0, 0, mR, eh, hv), hY.drawImage(aTd, 0, 0))
			}
			hY.globalAlpha = 1, hY.setTransform(mR, 0, 0, mR, 0, 0)
		}
	}
}

function aSc() {
	this.ik = function() {
		for (var aSs, aSb, aT7 = bL.x.aT7, m6 = bL.x.m6, aT5 = bL.x.aT5, aA = bL.x.on - 1; 0 <= aA; aA--) aSs = m6[aA], 0 !== (aSb = aT7[aA]) && aSs === aT5[aA] && (! function(aA, aTh, hN) {
			var j1, player = bL.x.a5D[aA] >> 3,
				hN = aTh + bK.ha[hN] << 2,
				aA = bL.x.a5E[aA];
			if (bb.aTi(player), ab.eR(hN)) j1 = aC.eX;
			else {
				if ((j1 = ab.eS(hN)) === player) return hN = b8.fw.fz(player, aA), bb.g0(player, aA - hN, 12);
				if (!eT(player, j1)) return b6.jt.oL(player, j1, aA)
			}
			ac.jC(player, j1) || ac.jU(player) ? (af.g2[player].push(aTh << 2), ac.iy(player, aA, j1), aE.iz(player, !0)) : bb.g0(player, aA, 12)
		}(aA, bK.iI(aSs), aSb - 1), bL.aFP.aSx(aA))
	}, this.aTj = function(player, eM, hN, m3) {
		if (0 !== hN) {
			var aTT = aC.eK;
			if (b8.fw.gn(aTT) && eT(player, aTT) && player !== aTT && 0 !== af.gH[aTT].length) {
				var aSj = eM + bK.ha[--hN] << 2;
				if (ab.eR(aSj) || eT(player, ab.eS(aSj))) {
					for (var eo = !1, aA = 0; aA < 4; aA++)
						if (aSj = eM + bK.ha[aA] << 2, ab.eV(aSj) && !ab.eR(aSj) && ab.eS(aSj) === aTT) {
							eo = !0;
							break
						} eo && (aM.a48(719, 0), aM.zA(180, L(404, [af.zL[player]]), 719, player, b9.nE, b9.me, -1, !0, void 0, {
						eu: 1,
						m3: m3
					}))
				}
			}
		}
	}
}

function aSY() {
	this.aTk = null, this.k4 = 512, this.oz = 8, this.on = 0, this.aTl = 0, this.a5D = new Uint16Array(this.k4), this.aT4 = new Uint32Array(this.k4), this.aT5 = new Uint32Array(this.k4), this.m6 = new Uint32Array(this.k4), this.aT6 = new Uint16Array(
			this.k4), this.a5E = new Uint32Array(this.k4), this.aT2 = new Uint16Array(this.k4), this.aSo = new Uint16Array(this.k4), this.aT7 = new Uint8Array(this.k4), this.aT8 = new Uint8Array(this.k4), this.om = new Uint8Array(aC.eX), this.aSn =
		new Uint16Array(this.oz * aC.eX), this.dW = function() {
			this.aTl = 0, this.on = 0, this.aTk = new Uint8Array(bQ.el + bQ.em), this.om.fill(0)
		}, this.p2 = function(player) {
			var ea = this.on,
				aTm = bK.iH(bM.fC[0]),
				aTn = this.om[player],
				aTo = (player << 3) + aTn,
				hF = (this.a5D[ea] = aTo, this.aT4[ea] = aTm, this.m6[ea] = aTm, this.aT5[ea] = bK.iH(bM.fC[1]), this.aT6[ea] = 0, bM.f8[0]);
			hF < 60 ? (b8.fw.fx(player, 60 - hF), this.a5E[ea] = 60) : this.a5E[ea] = hF, this.aT2[ea] = bL.iK.p2(ea, bK.iJ(aTm)), this.aSo[ea] = this.aTl, this.aT7[ea] = bM.fC[2], this.aT8[ea] = 0, this.aTl = this.aTl + 1 & 1023, this.aSn[aTo] = ea,
				this.om[player] = aTn + 1, this.on++, bL.aSb.aTj(player, bM.fC[1], bM.fC[2], this.aSo[ea])
		}, this.o6 = function() {
			var aSm = bM.fC[3];
			this.aT4[aSm] = this.m6[aSm], this.aT5[aSm] = bK.iH(bM.fC[1]), this.aT6[aSm] = 0, this.aT7[aSm] = bM.fC[2], bL.aSb.aTj(this.a5D[aSm] >> 3, bM.fC[1], bM.fC[2], this.aSo[aSm])
		}, this.ik = function() {
			bL.aSb.ik();
			var aA, g8 = aC.eK,
				dm = bL.h4.aFM(g8),
				rB = (! function(rB) {
					var aA, aTt, aTu, aTv, aTw, aTm, aU0, aU1, ed, g9, aT4 = rB.aT4,
						aT5 = rB.aT5,
						m6 = rB.m6,
						a5E = rB.a5E,
						aT8 = rB.aT8,
						aT6 = rB.aT6,
						aT2 = rB.aT2,
						rB = rB.on,
						aTX = bQ.el << 4;
					for (aA = rB - 1; 0 <= aA; aA--) aTu = m6[aA], aTt = aT5[aA], aTu !== aTt && (aTm = aT4[aA], aU0 = aTt % aTX - (aTw = aTm % aTX), aU1 = ~~((aTt + .5) / aTX) - (aTm = ~~((aTm + .5) / aTX)), ed = ~~Math.sqrt(aU0 * aU0 + aU1 *
						aU1 + .5), g9 = 15e4 + 25e3 * bJ.log10(a5E[aA]), aT8[aA] && (g9 = bJ.dn(g9, 5)), 65535 <= (g9 = aT6[aA] + Math.max(~~((g9 + .5) / ed), 1)) ? m6[aA] = aTv = aTt : (aT6[aA] = g9, m6[aA] = aTv = aTw + bJ.dn(g9 * aU0,
						65536) + aTX * (aTm + bJ.dn(g9 * aU1, 65536))), aT2[aA] = bL.iK.aU3(aT2[aA], aTu, aTv))
				}(this), ! function(rB) {
					if (bd.jn() % 2 == 1) {
						var aA, hO, kY, eu, ev, aU4, xk, aU5, h0, m7, m8, aTm, aU6, he, aU8, vc, ea = rB.on,
							m6 = rB.m6,
							a5D = rB.a5D,
							a5E = rB.a5E,
							aT8 = rB.aT8,
							iK = bL.iK.iK,
							aUA = iK.length,
							aUB = bL.iK.aUB,
							aTX = bQ.el << 4,
							aUC = aC.hQ,
							aR1 = be.eY,
							g9 = (ea - 1) * (bJ.dn(bd.jn(), 2) % 2);
						for (aA = 0; aA < ea; aA++)
							for (hO = Math.abs(aA - g9), aTm = m6[hO], kY = bK.iJ(aTm), h0 = a5D[hO] >> 3, m7 = aTm % aTX, m8 = ~~((aTm + .5) / aTX), aU8 = a5E[hO], eu = 0; eu < 9; eu++)
								if (!((aU4 = kY + aUB[eu]) < 0 || aUA <= aU4))
									for (aU5 = iK[aU4], xk = aU5.length, ev = 0; ev < xk; ev++) aU6 = aU5[ev], vc = a5D[aU6] >> 3, h0 == vc || aUC && aR1[h0] === aR1[vc] && aR1[h0] || (vc = m6[aU6], (he = m7 - vc % aTX) * he + (he = m8 - ~~((vc +
										.5) / aTX)) * he < 14400 && (vc = a5E[aU6], he = vc <= aU8 ? Math.max(1, bJ.dn(vc + bJ.dn(aU8 - vc, 10), 10)) : Math.max(1, bJ.dn(aU8, 10)), a5E[aU6] = Math.max(vc - he, 0), aT8[aU6] = 4))
					}
				}(this), ! function(rB) {
					if (bd.jn() % 5 == 3) {
						var aA, hF, a5E = rB.a5E,
							ea = rB.on;
						for (aA = 0; aA < ea; aA++) hF = a5E[aA], a5E[aA] = Math.max(hF - Math.max(1, hF >> 7), 0)
					}
				}(this), this),
				a5E = rB.a5E,
				aT8 = rB.aT8;
			for (aA = rB.on - 1; 0 <= aA; aA--) aT8[aA] = aT8[aA] >> 1, 0 === a5E[aA] && bL.aFP.aSx(aA);
			bb.g0(g8, dm - bL.h4.aFM(g8), 15)
		}
}

function aSZ() {
	this.aUD = 32, this.eh = 0, this.ej = 0, this.iL = 0, this.aUE = 0, this.aUF = 4, this.iK = null, this.aUB = new Int16Array(9), this.dW = function() {
		this.iL = 1 + bJ.dn(bQ.el - 1, this.aUD), this.aUE = 1 + bJ.dn(bQ.em - 1, this.aUD), this.iK = new Array(this.iL * this.aUE), b8.pi.a1B(this.iK);
		var eh, ej, aUB = this.aUB,
			i = this.iL;
		for (eh = -1; eh <= 1; eh++)
			for (ej = -1; ej <= 1; ej++) aUB[3 * (1 + ej) + 1 + eh] = ej * i + eh
	}, this.p2 = function(aUH, aA) {
		return this.iK[aA].push(aUH), this.iK[aA].length - 1
	}, this.aU3 = function(aUI, aTm, aTt) {
		var aUJ, aUK, aTm = bK.iJ(aTm),
			aTt = bK.iJ(aTt);
		return aTm === aTt ? aUI : (aUJ = this.iK[aTm].pop(), this.iK[aTm].length === aUI ? this.p2(aUJ, aTt) : (aUK = this.iK[aTm][aUI], this.iK[aTm][aUI] = aUJ, bL.x.aT2[aUJ] = aUI, this.p2(aUK, aTt)))
	}
}

function aSe() {
	function a06(aTt, aUL) {
		if (! function(aTt, aSk) {
				var hd = bK.iI(aTt),
					aUP = Math.abs(bK.ei(aSk) - bK.ei(hd)),
					hd = Math.abs(bK.ek(aSk) - bK.ek(hd));
				return 0 !== Math.max(aUP, hd) && (function(aTm, aTt, aUP, aUQ) {
					var aUS = bK.hy(aTm),
						aTm = bK.i1(aTm),
						aUU = bK.hy(aTt),
						aTt = bK.i1(aTt),
						aUU = aUU - aUS,
						aTt = aTt - aTm,
						aUY = Math.abs(aUU),
						aUZ = Math.abs(aTt),
						aUU = 0 < aUU ? 1 : 3,
						aTt = 0 < aTt ? 2 : 0;
					aUZ < aUY ? aUc(aUS, aTm, aUS + aUY, aTm + aUZ, aUU, aTt, aUP) : aUc(aTm, aUS, aTm + aUZ, aUS + aUY, aTt, aUU, aUQ)
				}(aTt, bK.iH(aSk), aUP, hd), !0)
			}(aTt, aUL)) return !1;
		if (0 === bM.f5[0]) return !!ab.h3(aUL << 2);
		if (! function(aSk) {
				if (ab.h3(aSk << 2)) return 1;
				return function(aSk) {
					var aA, hN, aTk = bL.x.aTk,
						aUg = bK,
						ea = bM.f5[0],
						aUh = 4 * aSk;
					for (aA = ea - 1; 0 <= aA; aA--) {
						hN = aTk[aA];
						var aUi = aUh;
						if (aUh = aUg.iN(aUh, hN + 2 & 3), ab.h3(aUh)) return bM.f5[0] = aA, bM.fC[1] = aUh >> 2, bM.fC[2] = 1 + hN, bM.fC[4] = aUi, 1
					}
					return
				}(aSk)
			}(aUL)) return !1;
		if (bM.fC[2] && ab.ef(bM.fC[4])) return !1;
		var aA, aUL = bK.iI(aTt),
			vU = aAE,
			aTk = bL.x.aTk,
			ea = bM.f5[0] - 1,
			aUh = 4 * aUL,
			hb = bK.hb;
		for (aA = 0; aA < ea; aA++)
			if (aUh += hb[aTk[aA]], 0 !== vU[aUh + 3] || 2 !== vU[aUh + 2]) return !!void 0;
		return !!1
	}

	function aUc(aUS, aUT, aUU, aUV, aUa, aUb, aUP) {
		for (var ej, aTk = bL.x.aTk, g9 = 0, aUd = 0, j = aUV - aUT, i = aUU - aUS, aUe = aUS % 16, aA = 1; aA <= aUP; aA++) aTk[g9++] = aUa, aTk[g9] = aUb, g9 += (ej = (j * (aUe + (aA << 4)) + .5) / i >> 4) - aUd, aUd = ej;
		bM.fH(bM.f5, g9)
	}
	this.kT = function(player, aUL) {
		var hN, hd, gz = bK.hl(player, aUL);
		return gz !== aUL && (hN = bK.hc(gz, aUL), hd = bK.iM(gz, hN), !(!ab.h3(hd << 2) && (hN = bK.hj(gz, aUL, hN), hd = bK.iM(gz, hN), !ab.h3(hd << 2)) || (bM.fC[0] = hd, bM.fC[1] = aUL, bM.fC[2] = 0, hd !== aUL && (!a06(bK.iH(hd), aUL) ||
			0 !== bM.fC[2] && bK.hr(player, bM.fC[1] + bK.ha[bM.fC[2] - 1] << 2)))))
	}, this.p4 = function(aUL) {
		var aTm = bL.x.m6[bM.fC[3]];
		return bM.fC[1] = aUL, bM.fC[2] = 0, a06(aTm, aUL)
	}
}

function aSa() {
	var xP = 32,
		xO = new Array(2);

	function vJ(ev) {
		var eh, ej, eM, hz, hw, hS = xP,
			a1e = b8.pZ.vJ(hS, hS),
			hY = b8.pZ.getContext(a1e, !0),
			hV = b8.pZ.getImageData(hY, hS, hS),
			vU = hV.data,
			kY = (hS >> 1) - .5,
			kZ = Math.sqrt(kY * kY);
		for (vU.fill(255), ej = 0; ej < hS; ej++)
			for (eh = 0; eh < hS; eh++) hw = eh - kY, hz = ej - kY, eM = 4 * (ej * hS + eh), hw = 714 * (kZ - Math.sqrt(hw * hw + hz * hz)) / kZ, vU[2 + eM] = ev, vU[3 + eM] = 255 < hw ? 0 : hw;
		return hY.putImageData(hV, 0, 0), a1e
	}
	this.a47 = -1, this.dW = function() {
		this.a47 = -1, xO[0] || (xO[0] = vJ(255), xO[1] = vJ(0))
	}, this.aUk = function(hY, eE, eh, ej, e1, aA) {
		b8.fw.gn(aC.eK) && (hY.setTransform(eE *= 4 / 3 * .625, 0, 0, eE, eh - (e1 *= 4 / 3), ej - e1), hY.drawImage(xO[+(bL.x.aSo[aA] === this.a47)], 0, 0))
	}
}

function dZ() {
	this.aOe = [L(405), L(406), L(407), L(408), L(409), L(410), L(411), L(412), L(413), L(414), L(415), L(416), L(417), L(418), L(419)];
	var aUl = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.a9u = new Array(aUl.length), this.dW = function() {
		var g = bh.dr.data[155].value.split(";"),
			kY = g.length;
		if (function() {
				for (var ea = aUl.length, aA = 0; aA < ea; aA++) bV.a9u[aA] = aUl[aA]
			}(), !(kY > aUl.length))
			for (var aA = 0; aA < kY; aA++) g[aA].length && (this.a9u[aA] = g[aA])
	}, this.aOg = function(e2, code) {
		for (var a9u = this.a9u, aUn = aUl, pG = (a9u[e2] = code, ""), ea = a9u.length, aUo = [], aA = 0; aA < ea; aA++) aUo.push(a9u[aA] === aUn[aA] ? "" : a9u[aA]);
		ea--;
		for (aA = 0; aA < ea; aA++) pG += aUo[aA] + ";";
		bh.r1.r2(155, pG += aUo[ea])
	}, this.aOd = function() {
		bh.r1.r2(155, ""), this.dW()
	}, this.ev = function(code, e2) {
		return code === this.a9u[e2] || code === this.a9u[e2 + 1]
	}
}

function dU() {
	var aUq = new Array(1),
		aUr = new Array(1),
		aUs = 20,
		aUt = 0,
		aUu = !1;

	function aUw() {
		aUs++, bo.play()
	}
	this.dW = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aUr[aA] = 0, aUq[aA] = document.createElement("audio"), aUq[aA].src = src, aUq[aA].setAttribute("preload", "auto"), aUq[aA].setAttribute("controls", "none"), aUq[aA].style.display = "none", aUq[aA].onpause = function() {
					aUr[aA] = 1
				}, aUq[aA].oncanplaythrough = function() {
					aUr[aA] = 0 === aUr[aA] ? 1 : aUr[aA]
				}, document.body.appendChild(aUq[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aUu = !0
		}
	}, this.t8 = function() {
		if (aUu) {
			aUu = !1;
			for (var aA = 0; 0 <= aA; aA--) aUq[aA].onpause = null, aUq[aA].oncanplaythrough = null, document.body.removeChild(aUq[aA]), aUq[aA] = null
		}
	}, this.play = function() {
		if (aUu) {
			var dm = performance.now();
			if (aUt + 66 < dm)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aUr[aA]) return aUt = dm, aUr[aA] = 2, void aUq[aA].play();
			0 < aUs && (aUs--, setTimeout(aUw, 66))
		}
	}
}

function cV() {
	this.a6f = function() {
		var aUz;
		return !(ak.jr < 3 || af.gO[l5[0]] >= aC.ja >> 1) && (aC.hQ ? (aUz = ad.aGS(), !(2 * ad.aGT(bf.l2()) >= aUz)) : function() {
			var aUz = ad.aGS();
			if (2 * af.gc[l5[0]] >= aUz) return !1;
			return !0
		}())
	}
}

function c6() {
	this.dW = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aTn = aC.jq, gc = af.gc, aA = 0; aA < aTn; aA++) gc[aA] = 512;
			var aTo = aC.w0,
				k3 = aD.k3,
				hF = aD.hF;
			for (aA = aTn; aA < aTo; aA++) gc[aA] = k3[hF[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var ea = aC.w0, gc = af.gc, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < ea; aA++) gc[aA] = sResourcesValue
		} : function() {
			for (var ea = aC.w0, gc = af.gc, sResourcesData = aC.data.sResourcesData, aA = 0; aA < ea; aA++) gc[aA] = sResourcesData[aA]
		})();
		bb.la[8] = af.gc[aC.eK]
	}
}

function dK() {
	var aV4 = 501,
		aV6 = (this.aV5 = new Uint32Array(aV4), this.a2K = new Uint32Array(aV4), this.a9Z = new Uint16Array(aV4), this.aOm = 0, 1),
		aV7 = 0;

	function aVA(self) {
		self.max.fill(0)
	}

	function aVC(self, aA) {
		self.max[0] = Math.max(self.aV5[aA], self.max[0]), self.max[1] = Math.max(self.a2K[aA], self.max[1]), self.max[2] = Math.max(self.a9Z[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aV8 = 0, this.la = new Array(21), this.aV9 = null, this.dX = function() {
		this.aV9 = [L(420), L(421), L(422), L(423), L(424), L(425), L(426), L(427), L(266), L(267), L(428), L(429), L(430), L(431), "", L(432), L(433), L(434), L(226), L(435), L(436)]
	}, this.dW = function() {
		this.aOm = 0, aV6 = 1, this.aV8 = 0, aV7 = 0, aVA(this), this.la.fill(0)
	}, this.ox = function(player, iA) {
		b8.fw.a2F(player) && (this.la[0] += iA + 1, this.la[1]++, this.la[12] += bM.f8[1])
	}, this.oN = function(player, o2) {
		__fx.donationsTracker.logDonation(player, o2, bM.f8[0]);
		player === aC.eK && (aM.oN(bM.f8[0], bM.f8[1], o2), this.la[12] += bM.f8[1], this.la[16] += bM.f8[0]), o2 === aC.eK && (aM.a5R(bM.f8[0], player), this.la[10] += bM.f8[0])
	}, this.p0 = function(player) {
		b8.fw.a2F(player) && (this.la[2]++, this.la[12] += bM.f8[1])
	}, this.pB = function(player) {
		b8.fw.a2F(player) && (this.la[19]++, this.la[12] += bM.f8[1])
	}, this.aTi = function(player) {
		b8.fw.a2F(player) && this.la[20]++
	}, this.g0 = function(player, a2y, e2) {
		b8.fw.a2F(player) && (this.la[e2] += a2y)
	}, this.ik = function() {
		var self;
		this.aV8 || 0 < aV7-- || ((self = this).aV5[self.aOm] = af.gO[aC.eK], self.a2K[self.aOm] = af.gc[aC.eK], self.a9Z[self.aOm] = ad.a9a(aC.eK), aVC(self, self.aOm), self.aOm++, self.aOm === aV4 && function(self) {
			aVA(self), aVC(self, 0), self.aOm = 1 + bJ.dn(aV4, 2);
			for (var aA = 1; aA < self.aOm; aA++) self.aV5[aA] = self.aV5[2 * aA], self.a2K[aA] = self.a2K[2 * aA], self.a9Z[aA] = self.a9Z[2 * aA], aVC(self, aA);
			aV6 *= 2
		}(self), aV7 = aV6 - 1, bc.lR(), 0 === af.le[aC.eK] && (self.aV8 = bd.jn()))
	}
}

function dL() {
	this.i = 0, this.j = 0, this.rt = 0, this.ru = 0, this.aVE = 0, this.aVF = 0, this.a6s = 0, this.sb = 0;
	var aVH = this.aVG = 0;
	this.aVI = 0, this.aVJ = 0, this.aVK = 0, this.a6E = 0, this.e2 = 0, this.a9C = null, this.hI = !1, this.aVL = -1, this.aVM = !1, this.aVN = [0, 0], this.dX = function() {
		this.a9C = [L(437), L(116, 0, "Balance"), L(115, 0, "Interest"), L(438)]
	}, this.dW = function() {
		this.hI = !1, this.aVL = -1, this.aVM = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var ed = z.a0.qx() && h.i < h.j ? 1 : z.a0.qx() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(ed * this.i), this.i -= z.a0.qx() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6E = Math.floor(this.j / 150), this.a6E = Math.max(this.a6E, 1.5), this.rt = Math.floor(1 + .02 * this.i),
			this.ru = Math.floor(1 + .04 * this.i), this.a6s = this.ru, aVH = Math.floor(.75 * this.a6s), this.sb = Math.floor(1 + .075 * this.i), this.aVI = Math.floor(1 + .1125 * this.i), this.aVJ = Math.floor(this.i * (z.a0.qx() ? .03 :
			.029)), this.aVJ = Math.max(this.aVJ, 4), this.aVK = Math.floor(.035 * this.i), this.aVK = Math.max(this.aVK, 4), this.aVG = this.j - 2 * this.a6s - this.sb - this.aVI, this.hI && this.aVO()
	}, this.go = function(kt, ku) {
		var w3, w2;
		return !!this.hI && (w2 = kt, w3 = ku, kt -= bJ.dn(h.i - this.i, 2), ku -= bJ.dn(h.j - this.j, 2), kt < 0 || ku < 0 || kt >= this.i || ku >= this.j || kt >= this.i - this.aVI && ku < this.aVI ? -1 !== aL.go(w2, w3) || bA.go(w2, w3) ||
			this.qq() : ku < this.aVI || (ku < this.j - this.sb ? (this.aVM = !0, this.aVL = (kt - 2 * this.rt - this.aVE) / this.aVF, 3 !== this.e2 && (bd.de = !0)) : (w2 = (w2 = Math.floor(kt / (this.i / this.a9C.length))) < 0 ? 0 : w2 >=
				this.a9C.length ? this.a9C.length - 1 : w2) !== this.e2 && (this.e2 = w2, this.aVO(), bd.de = !0)), !0)
	}, this.a0J = function(kt, ku) {
		return this.aVN[0] = kt, this.aVN[1] = ku, !(!this.hI || !this.aVM || (kt -= bJ.dn(h.i - this.i, 2), ku = this.aVL, this.aVL = (kt - 2 * this.rt - this.aVE) / this.aVF, (0 <= this.aVL && this.aVL <= 1 || 0 <= ku && ku <= 1) && (bd.de = !
			0), 0))
	}, this.a0i = function() {
		this.aVM && (this.aVM = !1)
	}, this.a0u = function() {
		this.hI ? this.qq() : this.show()
	}, this.show = function() {
		bb.aOm < 2 || (this.hI = !0, this.aVO())
	}, this.qq = function() {
		this.hI = !1, this.aVL = -1, bd.de = !0
	}, this.aVO = function() {
		this.e2 < 2 ? this.aVE = aP.measureText(b8.zN.y4(bb.max[this.e2]), b8.pZ.rN(0, this.aVJ)) : 2 === this.e2 && (this.aVE = aP.measureText(b8.zN.a2r(6, 2), b8.pZ.rN(0, this.aVJ))), this.aVF = this.i - 2 * this.rt - this.aVE - this.ru
	}, this.lR = function() {
		this.hI && this.aVO()
	}, this.te = function() {
		this.hI && this.a79()
	}, this.a79 = function() {
		var eh = bJ.dn(h.i - this.i, 2),
			ej = bJ.dn(h.j - this.j, 2);
		tf.setTransform(1, 0, 0, 1, eh, ej), tf.fillStyle = b9.me, tf.fillRect(0, this.aVI, this.i, this.j - this.aVI), this.aVP(), this.aNc(), tf.strokeRect(0, 0, this.i, this.j), b8.pZ.textAlign(tf, 2), tf.font = b8.pZ.rN(0, this.aVJ), 0 ===
			this.e2 ? this.aVQ(bb.aV5, eh, ej) : 1 === this.e2 ? this.aVQ(bb.a2K, eh, ej) : 2 === this.e2 ? this.aVR(eh, ej) : 3 === this.e2 && (this.aVS(eh, ej), this.aVT(eh, ej)), aL.a4X(Math.floor(eh + this.i - .725 * this.aVI), Math.floor(
				ej + .275 * this.aVI), Math.floor(.45 * this.aVI)), tf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVP = function() {
		var aA, dm;
		for (tf.lineWidth = this.a6E, b8.pZ.textBaseline(tf, 1), b8.pZ.textAlign(tf, 1), tf.strokeStyle = b9.mh, tf.font = b8.pZ.rN(1, this.aVK), dm = this.i / this.a9C.length, tf.fillStyle = b9.n3, tf.fillRect(this.e2 * dm, this.j - this.sb, dm,
				this.sb), tf.fillStyle = b9.mh, tf.fillRect(0, this.j - this.sb - .5 * this.a6E, this.i, this.a6E), aA = 1; aA <= 3; aA++) tf.fillRect(aA * dm, this.j - this.sb, this.a6E, this.sb);
		for (aA = this.a9C.length - 1; 0 <= aA; aA--) tf.fillText(b8.x3.a1q(this.a9C[aA], 0, .9 * dm), (aA + .5) * dm, this.j - .46 * this.sb)
	}, this.aNc = function() {
		tf.fillStyle = b9.nT, tf.fillRect(0, 0, this.i, this.aVI), tf.fillStyle = b9.mh, tf.fillRect(0, this.aVI - .5 * this.a6E, this.i, this.a6E), tf.font = b8.pZ.rN(1, .39 * this.aVI), tf.fillText(b8.x3.a1q(L(439), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVI))
	}, this.aVQ = function(g, eh, ej) {
		var kY = bb.max[this.e2],
			a1D = (tf.setTransform(1, 0, 0, 1, eh + 2 * this.rt + this.aVE, ej + this.a6s + this.aVI), tf.lineWidth = 2, this.aVG / Math.sqrt(kY));
		tf.beginPath(), tf.moveTo(this.aVF, this.aVG - a1D * Math.sqrt(g[bb.aOm - 1]));
		for (var aA = bb.aOm - 2; 0 <= aA; aA--) tf.lineTo(aA * this.aVF / (bb.aOm - 1), this.aVG - a1D * Math.sqrt(g[aA]));
		tf.stroke();
		eh = this.a4X(g, a1D, .5);
		eh < .95 && tf.fillText(b8.zN.y4(kY), -this.rt, 0), .05 < Math.abs(eh - .5) && tf.fillText(b8.zN.y4(Math.floor(kY / 4)), -this.rt, Math.floor(this.aVG / 2)), .05 < eh && tf.fillText("0", -this.rt, this.aVG)
	}, this.aVR = function(eh, ej) {
		tf.setTransform(1, 0, 0, 1, eh + 2 * this.rt + this.aVE, ej + this.a6s + this.aVI), tf.lineWidth = 2;
		var a1D = this.aVG / Math.max(bb.max[this.e2], 1);
		tf.beginPath(), tf.moveTo(this.aVF, this.aVG - a1D * bb.a9Z[bb.aOm - 1]);
		for (var aA = bb.aOm - 2; 0 <= aA; aA--) tf.lineTo(aA * this.aVF / (bb.aOm - 1), this.aVG - a1D * bb.a9Z[aA]);
		tf.stroke();
		eh = this.a4X(bb.a9Z, a1D, 1), ej = bb.max[this.e2] / 100;
		eh < .95 && tf.fillText(b8.zN.a2r(ej, 2), -this.rt, 0), .05 < Math.abs(eh - .5) && tf.fillText(b8.zN.a2r(ej / 2, 2), -this.rt, Math.floor(this.aVG / 2)), .05 < eh && tf.fillText(b8.zN.a2r(0, 2), -this.rt, this.aVG)
	}, this.aVS = function(eh, ej) {
		tf.setTransform(1, 0, 0, 1, eh + .34 * this.i, ej + 2 * aVH + this.aVI), b8.pZ.textAlign(tf, 2);
		for (var a8x = this.j - 4 * aVH - this.sb - this.aVI, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) tf.fillText(b8.x3.a1q(bb.aV9[g[aA]], 0, .31 * this.i), 0, aA * a8x / 9);
		var f2 = bb.la;
		for (tf.setTransform(1, 0, 0, 1, eh + .39 * this.i, ej + 2 * aVH + this.aVI), b8.pZ.textAlign(tf, 0), tf.fillText(b8.zN.a2r(100 * f2[0] / (1024 * Math.max(f2[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) tf.fillText(f2[g[aA]].toString(), 0,
			aA * a8x / 9);
		tf.fillText(b8.zN.a2r(100 * (1 - af.gO[aC.eK] / f2[7]), 0), 0, a8x)
	}, this.aVT = function(eh, ej) {
		tf.setTransform(1, 0, 0, 1, eh + .79 * this.i, ej + 2 * aVH + this.aVI), b8.pZ.textAlign(tf, 2);
		var aA, a8x = this.j - 4 * aVH - this.sb - this.aVI;
		for (tf.fillStyle = b9.my, aA = 2; 0 <= aA; aA--) tf.fillText(b8.x3.a1q(bb.aV9[aA + 8], 0, .31 * this.i), 0, aA * a8x / 9);
		tf.fillText(b8.x3.a1q(bb.aV9[18], 0, .31 * this.i), 0, 3 * a8x / 9), tf.fillStyle = b9.mx, tf.fillText(b8.x3.a1q(bb.aV9[11], 0, .31 * this.i), 0, 4 * a8x / 9), tf.fillStyle = b9.nG, tf.fillText(b8.x3.a1q(bb.aV9[13], 0, .31 * this.i), 0,
				5 * a8x / 9), tf.fillText(b8.x3.a1q(bb.aV9[15], 0, .31 * this.i), 0, 6 * a8x / 9), tf.fillText(b8.x3.a1q(bb.aV9[16], 0, .31 * this.i), 0, 7 * a8x / 9), tf.fillText(b8.x3.a1q(bb.aV9[12], 0, .31 * this.i), 0, 8 * a8x / 9), tf
			.fillStyle = b9.nF, tf.fillText(b8.x3.a1q(bb.aV9[17], 0, .31 * this.i), 0, a8x), tf.fillStyle = b9.my;
		var f2 = bb.la,
			aCe = f2[8] + f2[9] + f2[10] + f2[18],
			aCe = b8.zN.y4(aCe),
			aMR = tf.measureText(aCe).width,
			eh = (tf.setTransform(1, 0, 0, 1, eh + .83 * this.i + aMR, ej + 2 * aVH + this.aVI), tf.fillText(b8.zN.y4(f2[8]), 0, 0), tf.fillText(b8.zN.y4(f2[9]), 0, a8x / 9), tf.fillText(b8.zN.y4(f2[10]), 0, 2 * a8x / 9), tf.fillText(b8.zN.y4(f2[
				18]), 0, 3 * a8x / 9), tf.fillStyle = b9.mx, tf.fillText(aCe, 0, 4 * a8x / 9), tf.fillStyle = b9.nG, tf.fillText(b8.zN.y4(f2[13]), 0, 5 * a8x / 9), tf.fillText(b8.zN.y4(f2[15]), 0, 6 * a8x / 9), tf.fillText(b8.zN.y4(f2[16]),
				0, 7 * a8x / 9), tf.fillText(b8.zN.y4(f2[12]), 0, 8 * a8x / 9), f2[12] + f2[13] + f2[15] + f2[16]);
		tf.fillStyle = b9.nF, tf.fillText(b8.zN.y4(eh), 0, a8x), tf.fillStyle = b9.mh
	}, this.a4X = function(g, a1D, a7k) {
		var aA, e, fI;
		return this.aVL < 0 || 1 < this.aVL ? .25 : (aA = this.aVL * (bb.aOm - 1), fI = g[e = Math.floor(aA)], fI += (aA - e) * (g[e < bb.aOm - 1 ? e + 1 : e] - fI), tf.strokeStyle = b9.mk, .04 < this.aVL && this.aVV(0, this.aVG - a1D * Math.pow(
				fI, a7k), aA * this.aVF / (bb.aOm - 1), this.aVG - a1D * Math.pow(fI, a7k)), .04 < fI / bb.max[this.e2] && this.aVV(aA * this.aVF / (bb.aOm - 1), this.aVG, aA * this.aVF / (bb.aOm - 1), this.aVG - a1D * Math.pow(fI, a7k)), tf
			.fillStyle = b9.nI, tf.beginPath(), tf.arc(aA * this.aVF / (bb.aOm - 1), this.aVG - a1D * Math.pow(fI, a7k), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tf.fill(), g = this.aVL * bd.a9b, g = 0 === af.le[aC.eK] ? Math.floor(g * bb
				.aV8) : Math.floor(g * bd.jn()), tf.fillStyle = b9.mh, tf.fillText(1 === a7k ? b8.zN.a2r(fI / 100, 2) : b8.zN.y4(Math.floor(fI)), -this.rt, this.aVG - a1D * Math.pow(fI, a7k)), b8.pZ.textAlign(tf, 1), tf.fillText(aV.a9Q(g),
				aA * this.aVF / (bb.aOm - 1), this.aVG + this.aVJ - (z.a0.qx() ? 2 : 0) - this.a6E), b8.pZ.textAlign(tf, 2), a1D * Math.pow(fI, a7k) / this.aVG)
	}, this.aVV = function(m7, m8, mK, mL) {
		tf.beginPath(), tf.moveTo(m7, m8), tf.lineTo(mK, mL), tf.stroke()
	}
}

function bu() {
	this.aVW = "https://", this.aVX = this.aVW + "territorial.io/", this.aOn = this.aVX + "changelog", this.aOr = this.aVX + "terms", this.aVY = this.aVX + "cookie_policy", this.aOE = this.aVX + "privacy", this.aOq = this.aVX + "tutorial", this.aOp =
		this.aVX + "players", this.aOo = this.aVX + "clans", this.zY = this.aVX + "clan-results", this.aAt = this.aVW + "play.google.com/store/apps/details?id=territorial.io", this.zs = this.aVW + "apps.apple.com/app/id1581110913", this.aVZ = this
		.aVW + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAu = this.aVW + "discord.gg/pthqvpTXmh", this.aAv = this.aVW + "www.instagram.com/davidtschacher/", this.xe =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d3() {
	this.x = new aVa, this.x0 = new aVb, this.dW = function() {
		this.x.dW()
	}, this.ik = function() {
		0 !== this.x.a5a && this.x.a5a--
	}
}

function aVb() {
	this.te = function() {
		if (0 !== bN.x.a5a && (tf.globalAlpha = Math.min(bN.x.a5a / 580, 1), tf.drawImage(bN.x.aVe, 1 + aR.wy(), 1 + aR.wz()), tf.globalAlpha = 1, aC.gw)) {
			for (var m7 = iB / iC, m8 = iD / iC, mK = (h.i + iB) / iC, mL = (h.j + iD) / iC, g9 = bN.x.aVf * iC, aVg = bN.x.aVg, aA = aC.jq - 1; 0 <= aA; aA--) ! function(aA, g9, m7, m8, mK, mL, aVg) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g9 *= 2;
				0 === af.le[aA] || 0 === af.gO[aA] || (mK = h.i * ((af.iP[aA] + af.iQ[aA] + 1) / 2 - m7) / (mK - m7) - .5 * g9, m7 = h.j * ((af.iR[aA] + af.iS[aA] + 1) / 2 - m8) / (mL - m8) - .5 * g9, mK > h.i) || m7 > h.j || mK < -g9 || m7 <
					-g9 || (tf.setTransform(highlight ? iC * 2 : iC, 0, 0, highlight ? iC * 2 : iC, mK, m7), tf.drawImage(aVg[aC.hQ ? be.eY[aA] : 1], 0, 0))
			}(aA, g9, m7, m8, mK, mL, aVg);
			tf.setTransform(iC, 0, 0, iC, 0, 0)
		}
	}
}

function aVa() {
	this.aVf = 28, this.a5a = 0, this.aVe = null;
	var aVi = this.aVg = null;

	function aVl(hS, aVm) {
		var eh, ej, eM, hw, a1e = b8.pZ.vJ(hS, hS),
			hY = b8.pZ.getContext(a1e, !0),
			hV = b8.pZ.getImageData(hY, hS, hS),
			vU = hV.data,
			kY = (hS >> 1) - .5,
			aVn = .5 + kY;
		for (aVn *= aVn, ej = 0; ej < hS; ej++)
			for (eh = 0; eh < hS; eh++) hw = (hw = eh - kY) * hw + (hw = ej - kY) * hw, vU[eM = 4 * (ej * hS + eh)] = aVm[0], vU[1 + eM] = aVm[1], vU[2 + eM] = aVm[2], vU[3 + eM] = (aVn - hw) * aVm[3] / aVn;
		return hY.putImageData(hV, 0, 0), a1e
	}

	function aUk(aA, hY, a1e, hS) {
		var eh, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
		if (highlight) hS *= 2;
		0 !== af.le[aA] && 0 !== af.gO[aA] && (eh = af.iP[aA] + af.iQ[aA] + 1 - hS - 2 >> 1, y = af.iR[aA] + af.iS[aA] + 1 - hS - 2 >> 1,
			highlight ? hY.drawImage(a1e[aC.hQ ? be.eY[aA] : aA < aC.jq ? 1 : 0], eh, y, hS, hS) :
			hY.drawImage(a1e[aC.hQ ? be.eY[aA] : aA < aC.jq ? 1 : 0], eh, y))
	}
	this.dW = function() {
		var rB;
		this.a5a = 700,
			function(rB) {
				var hS = rB.aVf;
				if (rB.aVg = [], aVi = [], aC.hQ)
					for (var aA = 0; aA <= aC.w7; aA++) rB.aVg.push(aVl(hS, be.aTb[be.kC[aA]])), aVi.push(aVl(hS >> 1, be.aTb[be.kC[aA]]));
				else rB.aVg.push(aVl(hS, be.aTb[7])), rB.aVg.push(aVl(hS, be.aTb[4])), aVi.push(aVl(hS >> 1, be.aTb[7]))
			}(this),
			function(rB, aVo) {
				var aA, aVe = rB.aVe,
					hY = b8.pZ.getContext(aVe, !0),
					ea = aC.eX,
					hS = rB.aVf >> 1;
				hY.imageSmoothingEnabled = !1, hY.setTransform(1, 0, 0, 1, 0, 0), aVo && hY.clearRect(0, 0, aVe.width, aVe.height);
				for (aA = aC.jq; aA < ea; aA++) aUk(aA, hY, aVi, hS)
			}(this, null !== (rB = this).aVe && rB.aVe.width === bQ.el - 2 && rB.aVe.height === bQ.em - 2 || (rB.aVe = b8.pZ.vJ(bQ.el - 2, bQ.em - 2), !1)), aC.gw || this.a39()
	}, this.aTa = aVl, this.a39 = function() {
		for (var ea = aC.jq, hS = this.aVf, aVg = this.aVg, hY = b8.pZ.getContext(this.aVe, !0), aA = 0; aA < ea; aA++) aUk(aA, hY, aVg, hS)
	}
}

function d4() {
	function aVq() {
		8 === aC.k7 && 1 === aC.ym && bP.yP.yl()
	}

	function aVp(player) {
		aC.gw ? (aj.aFG(player), ak.aID(), aC.k9 && aC.or.ik()) : b1.aBA(player)
	}
	this.oH = function(player) {
		aM.yy(player, player === aC.eK ? 21 : 22), aVp(player), aVq()
	}, this.oo = function(player) {
		1 === aC.ym && 0 !== af.le[player] && 2 !== af.a2B[player] && aVp(player), aC.yp--, aC.yo--, aM.yy(player, 4), b8.fw.gm(2) && aV.lQ(!0), aVq()
	}
}

function dE() {
	this.aRC = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8v = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.mh, "rgb(170,170,170)"
	], this.aVr = [b9.mh, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.mh, b9.mY], this.aVs = [b9.mY, b9.mh, b9.mh, b9.mh, b9.mY, b9.mY, b9.mY, b9.mY, b9.mh];
	var aVt = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aVu = (this.aHh = ["rgba(" + aVt[0] + ",", "rgba(" + aVt[1] + ",", "rgba(" + aVt[2] + ",", "rgba(" + aVt[3] + ",", "rgba(" + aVt[4] + ",", "rgba(" + aVt[5] + ",", "rgba(" + aVt[6] + ",", "rgba(" + aVt[7] + ",", "rgba(" + aVt[8] + ",",
			"rgba(" + aVt[9] + ","
		], this.aHi = ["rgb(" + aVt[0] + ")", "rgb(" + aVt[1] + ")", "rgb(" + aVt[2] + ")", "rgb(" + aVt[3] + ")", "rgb(" + aVt[4] + ")", "rgb(" + aVt[5] + ")", "rgb(" + aVt[6] + ")", "rgb(" + aVt[7] + ")", "rgb(" + aVt[8] + ")", "rgb(" + aVt[
			9] + ")"
		], this.z8 = null, this.aTb = [
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
	this.kC = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eY = new Uint8Array(aC.eX), this.wD = new Uint16Array(aC.eX), this.wE = new Uint16Array(this.kC.length + 1), this.wF = new Uint16Array(this.kC.length), this.dX = function() {
		this.z8 = [L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448)]
	}, this.dW = function() {
		if (this.eY.fill(0), this.aVv(), aC.hQ) {
			9 === aC.k7 ? this.aVw() : aC.k9 ? function() {
				var colorsData = aC.data.colorsData;
				if (!aC.data.selectableColor)
					for (var aA = aC.jq - 1; 0 <= aA; aA--) colorsData[aA] = aw.j8(262144);
				var aW5 = 0,
					eq = 768,
					aQh = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = aC.data.teamPlayerCount;
				for (aA = 0; aA < 9; aA++)
					if (teamPlayerCount[aA]) {
						for (var ed = 0, eu = 0; eu < 3; eu++) ed += Math.abs(aVu[aA][eu] - aQh[eu]);
						ed < eq && (aW5 = aA, eq = ed)
					} var aW6 = new Uint16Array(9);
				for (aA = 0; aA < 9; aA++) aW6[aA] = teamPlayerCount[aA];
				var kC = be.kC,
					aW7 = new Uint8Array(9),
					g3 = (kC[0] = 0, 1);
				for (aA = 1; aA < 9; aA++) aW6[aA] && (aW7[aA] = g3, kC[g3++] = aA);
				var j7 = aC.jq,
					eY = be.eY;
				aW6[aW5] ? (aW6[aW5]--, eY[0] = aW7[aW5]) : j7 = 0;
				var ev = 0;
				for (aA = j7; aA < aC.w0; aA++) {
					var hO = kC[ev];
					if (aW6[hO]) aW6[hO]--, eY[aA] = aW7[hO];
					else if (aA--, 9 <= ++ev) return console.log("error 325")
				}
			}() : this.ik();
			for (var ea = aC.eX, wD = be.wD, wE = be.wE, wF = be.wF, eY = be.eY, kC = be.kC, w6 = kC.length, dr = new Array(w6), aA = 0; aA < w6; aA++) dr[aA] = [];
			for (aA = 0; aA < ea; aA++) dr[kC[eY[aA]]].push(aA);
			for (aA = 1; aA <= w6; aA++) wE[aA] = wE[aA - 1] + dr[aA - 1].length;
			for (aA = 0; aA < w6; aA++)
				for (var g3 = dr[aA].length, kY = wE[aA], hO = 0; hO < g3; hO++) wD[hO + kY] = dr[aA][hO];
			var jq = aC.jq;
			for (aA = 0; aA < w6; aA++)
				for (g3 = dr[aA].length, kY = wE[aA], hO = 0; hO < g3; hO++)
					if (wD[hO + kY] >= jq) {
						wF[aA] = hO;
						break
					}
		}
	}, this.aVv = function() {
		for (var aA = this.kC.length - 1; 0 <= aA; aA--) this.kC[aA] = aA
	}, this.aVw = function() {
		for (var aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) this.eY[aA] = 1;
		for (aA = aC.data.teamPlayerCount[7]; aA < aC.eX; aA++) this.eY[aA] = 2;
		this.kC[1] = 7, this.kC[2] = 8
	}, this.ik = function() {
		var hg = new Uint8Array(aC.jq),
			hh = new Uint8Array(aC.jq),
			aVz = new Uint16Array(8),
			aW0 = new Uint16Array(this.kC.length);
		this.aW1(hg, hh, aVz, 1), this.aEt(aVz), this.aW2(aW0, hg, hh), this.aW3(hg, hh, aW0), this.aW4()
	}, this.aW1 = function(hg, hh, aW6, aW8) {
		for (var eu, e, aW9, ea = this.kC.length - aW8, g = new Uint16Array(ea), colorsData = aC.data.colorsData, aA = aC.jq - 1; 0 <= aA; aA--) {
			for (eu = ea; aW8 <= eu; eu--) g[eu - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aVu[eu][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aVu[eu][1]) + Math.abs(4 * (63 & colorsData[aA]) - aVu[eu][2]);
			for (aW9 = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aW9 && (aW9 = g[e], hg[aA] = e);
			for (aW6[hg[aA]] += 4, aW9 = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aW9 && e !== hg[aA] && (aW9 = g[e], hh[aA] = e);
			aW6[hh[aA]]++
		}
	}, this.aEt = function(aW6) {
		for (var eu, ka, ea = this.kC.length - 1, aA = ea; 0 <= aA; aA--) this.kC[aA] = aA;
		for (aA = ea - 1; 0 <= aA; aA--) aW6[aA]++;
		for (aA = 1; aA <= ea; aA++) {
			for (ka = 0, eu = 1; eu < ea; eu++) aW6[eu] > aW6[ka] && (ka = eu);
			aW6[ka] = 0, this.kC[aA] = ka + 1
		}
	}, this.aW2 = function(aW0, hg, hh) {
		var eu, zR, ev, ed, e, mJ, sB, aWA = this.kC.length - 1,
			q3 = new Uint16Array(aWA),
			aWB = [],
			aWC = 0,
			zQ = [],
			aWD = [];
		loop: for (var aA = 0; aA < aC.jq; aA++)
			if (null !== (zR = b8.zN.zS(af.zP[aA]))) {
				for (eu = zQ.length - 1; 0 <= eu; eu--)
					if (zR === zQ[eu]) {
						aWD[eu].push(aA), aWC = Math.max(aWC, aWD[eu].length);
						continue loop
					} zQ.push(zR), aWB.push(!1), aWD.push([aA]), aWC = Math.max(aWC, 1)
			}
		for (; 2 < aC.w7 && aWC > bJ.dn(aC.jq, aC.w7);) aC.w7--, aC.k7--;
		for (eu = zQ.length - 1; 0 <= eu; eu--) {
			for (ed = -1, ev = zQ.length - 1; 0 <= ev; ev--) !aWB[ev] && (-1 === ed || aWD[ev].length > aWD[ed].length) && (ed = ev);
			for (ev = aWA - 1; 0 <= ev; ev--) q3[ev] = 1;
			for (ev = aWD[ed].length - 1; 0 <= ev; ev--) q3[hg[aWD[ed][ev]]] += 3, q3[hh[aWD[ed][ev]]]++;
			for (aA = aWA - 1; 0 <= aA; aA--) {
				for (e = ed % aWA, ev = aWA - 1; 0 <= ev; ev--) q3[ev] > q3[e] && (e = ev);
				for (mJ = -1, ev = aC.w7; 0 < ev; ev--)
					if (this.kC[ev] === e + 1) {
						mJ = ev;
						break
					} if (q3[e] = 0, -1 !== mJ) {
					for (sB = 0, ev = aC.w7; 0 < ev; ev--) aW0[mJ] > aW0[ev] && sB++;
					if (sB !== aC.w7 - 1) {
						for (ev = aWD[ed].length - 1; 0 <= ev; ev--) aW0[mJ]++, this.eY[aWD[ed][ev]] = mJ;
						break
					}
				}
			}
			aWB[ed] = !0
		}
	}, this.aW3 = function(hg, hh, aW0) {
		for (var aA, hv, ea = this.kC.length - 1, border = bJ.dn(aC.jq, aC.w7), aWE = (0 < aC.jq % aC.w7 && border++, new Uint8Array(1 + ea)), eu = ea; 1 <= eu; eu--) aWE[this.kC[eu]] = eu;
		for (aA = 0; aA < aC.jq; aA++) hv = aWE[hg[aA] + 1], 0 === this.eY[aA] && hv <= aC.w7 && aW0[hv] < border && (aW0[hv]++, this.eY[aA] = hv);
		for (aA = 0; aA < aC.jq; aA++) hv = aWE[hh[aA] + 1], 0 === this.eY[aA] && hv <= aC.w7 && aW0[hv] < border && (aW0[hv]++, this.eY[aA] = hv);
		for (eu = aC.w7; 1 <= eu; eu--)
			for (aA = aC.jq - 1; 0 <= aA && !(aW0[eu] >= border); aA--) 0 === this.eY[aA] && (aW0[eu]++, this.eY[aA] = eu)
	}, this.aW4 = function() {
		for (var aA = aC.jq; aA < aC.eX; aA++) this.eY[aA] = 1 + aA % aC.w7
	}
}

function gP() {
	for (var eh, ej, aA = fV - 1; 0 <= aA; aA--) eh = bJ.dn(fX[aA], 4) % bQ.el, ej = bJ.dn(fX[aA], 4 * bQ.el), af.iP[fQ] = Math.min(eh, af.iP[fQ]), af.iR[fQ] = Math.min(ej, af.iR[fQ]), af.iQ[fQ] = Math.max(eh, af.iQ[fQ]), af.iS[fQ] = Math.max(ej, af
		.iS[fQ])
}

function fk() {
	var ed, g8, aA, ea = af.g2[fQ].length,
		ec = ab.ec;
	loop: for (aA = ea - 1; 0 <= aA; aA--) {
		for (ed = 3; 0 <= ed; ed--)
			if (g8 = af.g2[fQ][aA] + ec[ed], ab.eR(g8) || ab.gA(g8) && ab.eS(g8) !== fQ) {
				ab.j4(af.g2[fQ][aA], fQ);
				continue loop
			} af.g2[fQ][aA] = af.g2[fQ][ea - 1], af.g2[fQ].pop(), ea--
	}
}

function fl() {
	var player = fQ,
		gG = af.gG,
		gH = af.gH,
		f0 = af.f0,
		ea = gG[player].length,
		ec = ab.ec;
	loop: for (var aA = ea - 1; 0 <= aA; aA--) {
		for (var aWF = !1, aWG = !1, ed = 3; 0 <= ed; ed--) {
			var g8 = gG[player][aA] + ec[ed];
			if (ab.aF3(g8, player)) continue loop;
			aWF = aWF || ab.h3(g8), aWG = aWG || ab.aF2(g8)
		}
		aWF ? gH[player].push(gG[player][aA]) : aWG ? f0[player].push(gG[player][aA]) : ab.wZ(gG[player][aA], player), gG[player][aA] = gG[player][ea - 1], gG[player].pop(), ea--
	}
}

function gE() {
	af.gO[fU] -= fV
}

function gF(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) ab.wt(fU, border[aA]) || (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gI(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) !ab.wt(fU, border[aA]) && ab.eV(border[aA]) && (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gJ(border) {
	for (var ed, g8, ea = border.length, ec = ab.ec, aA = ea - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--)
			if (g8 = border[aA] + ec[ed], ab.aF3(g8, fU)) {
				af.gG[fU].push(border[aA]), border[aA] = border[ea - 1], border.pop(), ea--;
				break
			}
}

function gK() {
	for (var ed, g8, ec = ab.ec, aA = fV - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--) g8 = fX[aA] + ec[ed], ab.aF4(fU, g8) && ab.aF5(g8) && (af.gG[fU].push(g8), ab.g5(g8, fU))
}

function gL() {
	var eh, ej;
	loop: for (; af.iR[fU] < af.iS[fU];) {
		for (eh = af.iQ[fU]; eh >= af.iP[fU]; eh--)
			if (ab.wt(fU, 4 * (af.iR[fU] * bQ.el + eh))) break loop;
		af.iR[fU]++
	}
	loop: for (; af.iR[fU] < af.iS[fU];) {
		for (eh = af.iQ[fU]; eh >= af.iP[fU]; eh--)
			if (ab.wt(fU, 4 * (af.iS[fU] * bQ.el + eh))) break loop;
		af.iS[fU]--
	}
	loop: for (; af.iP[fU] < af.iQ[fU];) {
		for (ej = af.iS[fU]; ej >= af.iR[fU]; ej--)
			if (ab.wt(fU, 4 * (ej * bQ.el + af.iP[fU]))) break loop;
		af.iP[fU]++
	}
	loop: for (; af.iP[fU] < af.iQ[fU];) {
		for (ej = af.iS[fU]; ej >= af.iR[fU]; ej--)
			if (ab.wt(fU, 4 * (ej * bQ.el + af.iQ[fU]))) break loop;
		af.iQ[fU]--
	}
}

function eT(player, j1) {
	return 0 === be.eY[player] || be.eY[player] !== be.eY[j1]
}

function h9(player, j1) {
	for (var e, aWH = ac.fg(player), aA = 0; aA < aWH; aA++)
		if (0 === ac.fh(player, aA))
			if ((e = ac.fm(player, aA)) === aC.eX) {
				if (j1 === aC.eX) return !1;
				if (h7(j1)) return !0
			} else if (b8.fw.kc(e))
		if (j1 === aC.eX) {
			if (h7(e)) return !0
		} else if (hB(j1, e)) return !0;
	return !1
}

function h7(player) {
	for (var aA, g9, ea = af.gG[player].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g9 = ec[ed], aA = 0; aA < ea; aA++)
			if (ab.eR(af.gG[player][aA] + g9)) return !0;
	return !1
}

function aFC(player) {
	for (var aA, g9, ea = af.gG[player].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g9 = ec[ed], aA = 0; aA < ea; aA++)
			if (ab.j3(af.gG[player][aA]) && ab.eR(af.gG[player][aA] + g9)) return !0;
	return !1
}

function hB(a2G, a2H) {
	for (var aA, dm, g9, g8, aTn = af.gG[a2G].length, aTo = af.gG[a2H].length, ec = (aTo < aTn && (dm = a2G, a2G = a2H, a2H = dm, dm = aTn, aTn = aTo, 0), ab.ec), ed = 3; 0 <= ed; ed--)
		for (g9 = ec[ed], aA = 0; aA < aTn; aA++)
			if (g8 = af.gG[a2G][aA] + g9, ab.gA(g8) && ab.eS(g8) === a2H) return !0;
	return !1
}

function aFD(a2G, a2H) {
	for (var aA, g9, g8, aTn = af.gG[a2G].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g9 = ec[ed], aA = 0; aA < aTn; aA++)
			if (ab.j3(af.gG[a2G][aA]) && (g8 = af.gG[a2G][aA] + g9, ab.gA(g8)) && ab.eS(g8) === a2H) return !0;
	return !1
}

function dR() {
	this.p1 = new aWI
}

function aWI() {
	this.h6 = function(player) {
		b8.fw.a2C(player) && aM.zA(80, L(449), 637, 0, b9.nW, b9.me, -1, !1)
	}, this.a49 = function() {
		aM.zA(80, L(450), 637, 0, b9.nW, b9.me, -1, !1)
	}, this.o6 = function(player) {
		b8.fw.a2C(player) && aM.zA(80, L(451), 637, 0, b9.nW, b9.me, -1, !1)
	}
}

function aWJ() {
	this.aWK = 0, this.ik = function() {
		aN.ik(), aY.ik(), h.ik(), ay.x.ik(), av.aEP(), bd.de && (bd.de = !1, aZ.te())
	}
}

function aWL() {
	this.lx = bd.lx, this.e2 = 0, this.aWK = 0, this.aEM = 0, this.aWM = null, this.aWN = 7, this.a5b = 0, this.dW = function() {
		this.aEM = 0, this.aWM = [], this.e2 = 0, this.aWK = 0
	}, this.aQA = function(aB) {
		if (aC.gw) this.a9c(aB);
		else if (this.aWM.push(aB), 2 === aC.ym) {
			for (var aA = 0; aA < this.aWM.length; aA++) b6.nv.ik(this.aWM[aA]);
			this.aWM = []
		}
	}, this.a9c = function(aB) {
		2 !== aC.ym && (b6.nv.ik(aB), b7.ik(), aV.a9c(this.aEM), this.aEM === aC.a3F ? (aC.or.ik(), this.aEM = 0, this.e2 = 0, this.aWK = 0, this.lx = bd.lx) : (this.aEM++, ae.a38(), ae.lQ(!0), bZ.aAC()))
	}, this.ik = function() {
		h.ik(), aC.gw ? (bd.de = aV.a9c(-1) || bd.de, lS()) : (0 !== this.e2 || bd.lx >= this.lx && (this.lx += bd.a9b * Math.floor(1 + (bd.lx - this.lx) / bd.a9b), 2 === aC.ym ? lH() : this.aWO(), this.e2++, 27 < bd.lx - this.a5b)) && this
		.aWP(), lN(), bd.de && (bd.de = !1, ww()), this.a5b = bd.lx
	}, this.aWP = function() {
		bd.de = !0, lP(), this.e2 = 0
	}, this.aWO = function() {
		var uL, aA;
		if (this.aWK !== 7 * this.aEM) lJ(), bZ.aAC();
		else {
			uL = !1;
			loop: for (; this.aWQ() && (uL = !0, lJ(), 2 !== aC.ym) && 0 < this.aWM.length;)
				for (aA = this.aWN - 2; 0 <= aA; aA--)
					if (lJ(), 2 === aC.ym) break loop;
			uL ? bZ.aAC() : (lH(), bZ.a3B())
		}
	}, this.aWQ = function() {
		return 0 < this.aWM.length && (this.aEM++, b6.nv.ik(this.aWM[0]), this.aWM.shift(), !0)
	}
}

function aWR() {
	var aWS, aWT, aWU, aEM, aWV, e2 = 0,
		lx = bd.lx;

	function aWY() {
		! function() {
			if (!aC.gw) return;
			if (aC.k9) return;
			if (2 !== aC.ym)
				if (aWV % 7 != 0) aWV++;
				else if (aEM === aC.a3F) {
				if (!aWb()) return;
				aV.a9c(aEM), aC.or.ik()
			} else {
				if (!aWb()) return;
				aWV++, aEM++, ae.a38(), ae.lQ(!0)
			}
			return 1
		}() && aWb() && lJ()
	}

	function aWZ() {
		e2 = 0, (aC.gw ? (bd.de = aV.a9c(aEM - (aWV % 7 == 0 ? 0 : 1) + aWV % 7 / 7) || bd.de, lS) : aL.gl || !bA.a3c ? lS : (bd.de = !0, lP))()
	}

	function aWb() {
		var aA, ea, aWc = b7.op.aRM,
			fI = b7.op.aRN,
			fK = b7.op.aRO,
			fM = b7.op.aRP,
			aWd = b7.op.aRQ,
			aWe = b7.op.aRR;
		if (!(aWS >= aWe.length)) {
			if (aWe = aWe[aWS], aWd[aWS]) {
				for (ea = aWT + aWe, aA = aWT; aA < ea; aA++) b6.nv.ob(aWc[aA], fI[aA], fK[aA], fM[aA]);
				aWT += aWe, aWS++
			} else ++aWU >= aWe && (aWS++, aWU = 0);
			return 1
		}
		aM.a04("Replay file smaller than expected."), bA.a0v(!1), aC.ym = 2
	}
	this.aWK = 0, this.dW = function() {
		aWV = aEM = aWU = aWT = aWS = 0
	}, this.ik = function() {
		var aUA;
		h.ik(), bA.a74() < 1.7 ? 0 === e2 ? bd.lx >= lx && (aUA = bd.a9b / bA.a74(), lx += aUA * Math.floor(1 + (bd.lx - lx) / aUA), 2 === aC.ym || aL.gl || !bA.a3c ? lH() : (aWY(), bZ.aAC()), e2++) : aWZ() : function() {
			var aUA;
			if (bd.lx >= lx)
				if (2 === aC.ym || aL.gl || !bA.a3c) lH(), lx = bd.lx;
				else {
					for (aUA = bd.a9b / bA.a74(), 16 < (bd.lx - lx) / aUA && (lx = bd.lx - 16 * aUA); bd.lx >= lx && 2 !== aC.ym;) lx += aUA, aWY();
					bZ.aAC()
				} aWZ()
		}(), lN(), bd.de && (bd.de = !1, ww())
	}, this.yw = function() {
		b7.op.aRR.length - aWS <= 2 || aM.a04("Replay file larger than expected.")
	}
}

function aWf() {
	var e2 = 0,
		lx = bd.lx;
	this.aWK = 0, this.ik = function() {
		h.ik(), aC.gw ? lS() : 0 === e2 ? bd.lx >= lx && (lx += bd.a9b * Math.floor(1 + (bd.lx - lx) / bd.a9b), 2 === aC.ym || aL.gl ? lH() : (lJ(), bZ.aAC()), e2++) : ((aL.gl ? lS : (bd.de = !0, lP))(), e2 = 0), lN(), bd.de && (bd.de = !1, ww())
	}
}

function dM() {
	this.yv = null, this.de = !1, this.lx = 0, this.a9b = 56;
	var aWg = 0;

	function aWh() {
		bd.lx = aWg = performance.now(), bd.yv.ik(), window.requestAnimationFrame(aWh)
	}
	this.dW = function() {
		this.a3Z(), window.requestAnimationFrame(aWh), this.lx = performance.now()
	}, this.a3Q = function() {
		aC.gk ? (this.yv = new aWR, this.yv.dW()) : aC.k9 ? this.yv = new aWf : (this.yv = new aWL, this.yv.dW())
	}, this.a3Z = function() {
		this.yv = new aWJ, this.de = !0
	}, this.ik = function() {
		this.yv.aWK++
	}, this.jn = function() {
		return this.yv.aWK
	}, this.aPm = function() {
		var dm = performance.now();
		dm < aWg + 1e3 || (this.lx = dm, this.yv.ik())
	}
}

function co() {
	var aWi = 0,
		aWj = !0;

	function aWk(id) {
		id = [L(452), L(453), L(454), L(455)][id];
		aM.a5I(id)
	}
	this.ik = function() {
		var dm, a5d;
		bd.lx < aWi || (aWi = bd.lx + 5e3, aC.gk) || aC.k9 || b8.fw.gn(aC.eK) || (dm = new Date, a5d = dm.getUTCSeconds(), aWj ? a5d < 50 && (aWj = !1) : a5d < 50 || (aWj = !0, (a5d = (dm.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5d || 20 ==
			a5d || 40 == a5d ? aC.k7 < 7 && aWk(0) : 10 == a5d || 30 == a5d || 50 == a5d ? 7 !== aC.k7 && 10 !== aC.k7 || aWk(1) : 5 == a5d || 25 == a5d || 45 == a5d ? 8 === aC.k7 && aWk(2) : 35 == a5d && 9 === aC.k7 && aWk(3))))
	}
}

function ci() {
	var m7, m8, mK, mL, aWl = 0,
		aWm = 0;

	function aWo() {
		return Math.pow(Math.pow(mK - m7, 2) + Math.pow(mL - m8, 2), .5)
	}

	function aWn(e) {
		m7 = h.k * e.touches[0].clientX, m8 = h.k * e.touches[0].clientY, mK = h.k * e.touches[1].clientX, mL = h.k * e.touches[1].clientY
	}
	this.a0N = function(e) {
		return 1 < e.touches.length ? (aWm = bd.lx, aWl = 3, aWn(e), aK.qq(), !0) : (aWl = 0, !1)
	}, this.a0O = function(e) {
		var aJ0, ht, hu;
		return 0 !== aC.ym && 1 < e.touches.length && (aWl = Math.max(aWl - 1, 0), aG.mP() && (aJ0 = aWo(), aWn(e), e = aWo(), ht = Math.floor((m7 + mK) / 2), hu = Math.floor((m8 + mL) / 2), aR.a7U(ht, hu, Math.max(.125, e) / Math.max(.125,
			aJ0)), bd.de = !0), !0)
	}, this.a0l = function() {
		var eh, ej;
		return !!(aWl && (aWl = 0, bd.lx < aWm + 500)) && (eh = (m7 + mK) / 2, ej = (m8 + mL) / 2, aK.a0f(eh, ej), aK.click(eh, ej, !0) && (bd.de = !0), !0)
	}
}

function cx() {
	this.size = 0, this.e2 = 0, this.aB = null, this.dW = function(aB) {
		this.e2 = 0, this.aB = aB, this.size = aB.length
	}, this.t8 = function() {
		this.aB = null
	}, this.oa = function(size) {
		for (var f2 = 0, aB = this.aB, mP = this.e2 + size - 1, aA = this.e2; aA <= mP; aA++) f2 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mP - aA;
		return this.e2 += size, this.e2 > 8 * this.size && console.error("Unwrapper Overflow"), f2
	}, this.aQO = function(size) {
		var eu = size >> 1;
		return (1 << eu) * this.oa(size - eu) + this.oa(eu)
	}, this.aQN = function(aWp) {
		return this.size === bB.aQH(aWp)
	}, this.aRe = function(vm, aWq, aWr) {
		var g3 = this.oa(vm);
		if (!g3) return null;
		for (var vm = Math.max(g3, aWr), g = new(aWq <= 8 ? Uint8Array : aWq <= 16 ? Uint16Array : Uint32Array)(vm), aA = 0; aA < g3; aA++) g[aA] = this.oa(aWq);
		aWr = g[g3 - 1];
		return aWr && g.fill(aWr, g3), g
	}, this.aRf = function(vm, aWs, aWr) {
		var g3 = this.oa(vm);
		if (!g3) return null;
		for (var vm = Math.max(g3, aWr), g = new Array(vm), aA = 0; aA < g3; aA++) g[aA] = this.aRc(aWs);
		return g.fill(g[g3 - 1], g3), g
	}, this.aRc = function(vm) {
		return bE.us.uw(this.oa(vm))
	}, this.aRd = function() {
		var pG = bD.rp.rq(bD.rp.rr(this.oa(30))),
			pG = b8.zN.a33(pG, "_", "/");
		pG = b8.zN.a33(pG, "-", "+");
		for (var aWt = "";
			(pG.length + aWt.length) % 4;) aWt += "=";
		pG = "data:image/png;base64," + pG + aWt;
		var aFi = new Image;
		aFi.onload = function() {
			b7.aG7.aG8(aFi), aFi.onload = null, aFi = null
		}, aFi.src = pG
	}
}

function dG() {
	this.aST = 0, this.aSU = 0, this.aSP = 0, this.aSQ = 0, this.aSR = 0, this.aSS = 0, this.aAD = [0, 0, 0, 0], this.mO = function() {
		this.aST = aR.wy(), this.aSU = aR.wz(), this.aSP = -this.aST, this.aSQ = -this.aSU, this.aSR = h.i / iC, this.aSS = h.j / iC, this.aAD[0] = Math.floor(this.aSP), this.aAD[1] = Math.floor(this.aSQ), this.aAD[2] = Math.floor(this.aAD[0] +
			this.aSR + 1), this.aAD[3] = Math.floor(this.aAD[1] + this.aSS + 1), bZ.aAA = !0
	}
}

function cj() {
	var a6A, lr;
	this.dW = function() {
		a6A = 1, lr = 0
	}, this.ik = function() {
		0 < a6A && (lr = 0 === lr ? bd.lx + 16 : lr, a6A = (a6A -= .001 * (bd.lx - lr)) < 0 ? 0 : a6A, lr = bd.lx, bd.de = !0)
	}, this.te = function() {
		0 < a6A && (tf.fillStyle = "rgba(0,0,0," + a6A + ")", tf.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.e2 = 0, this.aB = null, this.dW = function(aB) {
		this.e2 = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aWp) {
		return this.dW(new Uint8Array(this.aQH(aWp))), this.aB
	}, this.t8 = function() {
		this.aB = null
	}, this.a7 = function(size, a5h) {
		for (var aB = this.aB, mP = this.e2 + size - 1, aA = this.e2; aA <= mP; aA++) aB[aA >> 3] |= (a5h >> mP - aA & 1) << 7 - (7 & aA);
		this.e2 += size, this.e2 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQG = function(size, a5h) {
		var eu = size >> 1,
			ed = 1 << eu;
		this.a7(size - eu, bJ.dn(a5h, ed)), this.a7(eu, a5h % ed)
	}, this.aWw = function(size) {
		for (var aB = this.aB, mP = this.e2 + size, aA = this.e2; aA < mP; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQH = function(aWp) {
		return aWp + 7 >> 3
	}, this.aWx = function(g, j7, mP, aWy) {
		for (var aA = j7; aA < mP; aA++) this.a7(aWy, g[aA])
	}
}

function cw() {
	this.dW = function() {
		this.g = [], this.e2 = 0
	}, this.aQk = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aWz, value) {
		for (var g = this.g, mP = this.e2 + aWz - 1, aX0 = 1 + (mP >> 3); g.length < aX0;) g.push(0);
		for (var aA = this.e2; aA <= mP; aA++) g[aA >> 3] |= (value >> mP - aA & 1) << 7 - (7 & aA);
		this.e2 += aWz
	}, this.dd = function(g, vm, aWq) {
		var aX1 = b8.pi.a1Y(g);
		this.a7(vm, aX1);
		for (var aA = 0; aA < aX1; aA++) this.a7(aWq, g[aA])
	}, this.aRw = function(g, vm, aWs) {
		var aX1 = b8.pi.a1Y(g);
		this.a7(vm, aX1);
		for (var aA = 0; aA < aX1; aA++) this.aRu(g[aA], aWs)
	}, this.aRu = function(pG, vm) {
		var ea = pG.length;
		this.a7(vm, ea);
		for (var aA = 0; aA < ea; aA++) this.a7(16, pG.charCodeAt(aA))
	}, this.aRv = function(a1e) {
		var aX2 = (a1e = a1e.toDataURL()).split(",");
		if (aX2.length < 2) console.log("error 266");
		else {
			a1e = b8.zN.a33(a1e = aX2[aX2.length - 1], "/", "_"), a1e = b8.zN.a33(a1e, "\\+", "-");
			var a1e = b8.zN.a33(a1e, "=", ""),
				v5 = bE.rp.v2(a1e),
				ea = v5.length;
			this.a7(30, ea);
			for (var aA = 0; aA < ea; aA++) this.a7(6, v5[aA])
		}
	}
}
a(), self.aiCommand746 = function(f2) {
	0 === f2 ? bp() : 1 !== f2 || !z || 1 !== z.id || z.f3 < 14 || bH.f4()
}, setTimeout(bp, 1e4), window.onload = function() {
	bp()
};