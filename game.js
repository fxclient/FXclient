var qN, mg, ju, jv, ay, b0, b2, mD, mC, mE, mV, mS, lw, mG, a8W, mb, a8X, a8Y, a8Z, mA, hu, cP, cM, a12, b5, jV, f, jn, k1, k2, kB, jo, jp, aGc, jz, fF, c5, a2T, g7, fK, g5, jx, d9, jy, jw, fv, k0, a5m, i4, dV, r1, a6, gb, jZ, k4, cD, rG, jb, tL,
	aGd, cH, gQ, ja, cU, jh, zW, a1b, jk, a1L, kA, gu, aFV, ao, jX, jS, bZ, gd, aGe, aGf, k5, k6, qT, k7, k8, sB, gL, jr, v, b7, fG, bW, s9, bo, bh, eM, a8v, nm, aBK, fD, cX, ae, a9, js, aEa, jQ, au, a1R, dk, jP, jl, aGg, a1a, aGh, aGi, xG, jj, f7,
	fI, jt, c0, l, cN, cu, wY, bK, rc, nE, aEU, os, la, lH, a4w, jR, gJ, gY, aFR, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "span",
		"1em", "0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "middle", "break-word", "Escape",
		"50%", "0.6em", "underline", "text", "scroll", "pointer", "bold", "Value", "Player ", "Enter", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave",
		"keydown", "inline-block", "game.territorial.io", "focus", "fixed", "button", "blur", "aria-label", "Space", "Reload", "Redacted ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "⚠️ ", "wheel", "true", "translate(-50%, -50%)", "top", "tls7", "system-ui", "style", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "aria-pressed", "arena", "account",
		"accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui",
		"@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x",
		"-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
	];

function a() {
	var b, c = 8,
		d = null;

	function a1(a0, a2, t) {
		a2 *= 4;
		a0[a2] = 255, a0[1 + a2] = 255, a0[2 + a2] = t, a0[3 + a2] = 255
	}

	function a5(y, aC) {
		var aD, aE, aF, a2, aI, aJ, u = c,
			z = v.w.getImageData(y, u, u),
			a0 = z.data,
			aL = (u >> 1) - .5,
			aM = v.aN.aO(aC, .5);
		for (v.aN.aP(aC, aM, 300) || v.aN.aQ(aC, 100), aE = 0; aE < u; aE++)
			for (aD = 0; aD < u; aD++) aJ = (u - 1.5) * (u - 1.5) / 4, a0[a2 = 4 * (aE * u + aD)] = (aI = (aF = (aF = aD - aL) * aF + (aF = aE - aL) * aF) <= (u - 4.5) * (u - 4.5) / 4 ? aM : aC)[0], a0[1 + a2] = aI[1], a0[2 + a2] = aI[2], a0[3 +
				a2] = aJ < aF ? 0 : 255;
		y.putImageData(z, 0, 0)
	}
	this.e = function() {
		var t, u, k, y, z, a0;
		(b = b || new Array(f.g)).fill(null), t = 255, u = c + 4, k = v.w.x(u, u), y = v.w.getContext(k, !0), z = v.w.getImageData(y, u, u), a1(a0 = z.data, u + 1, t), a1(a0, u + 2, t), a1(a0, 2 * u + 1, t), a1(a0, 2 * u - 3, t), a1(a0, 2 * u -
				2, t), a1(a0, 3 * u - 2, t), a1(a0, u * (u - 3) + 1, t), a1(a0, u * (u - 2) + 1, t), a1(a0, u * (u - 2) + 2, t), a1(a0, u * (u - 2) - 2, t), a1(a0, u * (u - 1) - 3, t), a1(a0, u * (u - 1) - 2, t), y.putImageData(z, 0, 0), d = k,
			function() {
				if (f.j)
					for (var k = new Array(l.m.length), n = f.g, o = b, p = l.p, q = 0; q < n; q++) {
						var r = p[q];
						k[r] || (k[r] = function(r) {
							var k = v.w.x(c, c),
								y = v.w.getContext(k, !0),
								a8 = a9.aA;
							return a8.set(l.aB[r]), a5(y, a8), k
						}(r)), o[q] = k[r]
					}
			}()
	}, this.aR = function() {
		var q, player, aS, aT, aW, aY, aZ, ab, ac, ad = ae.af.ad,
			ag = ae.af.ag,
			ah = ae.af.ah,
			ai = ae.af.ai,
			aj = b,
			ak = f.al,
			n = ae.af.am,
			an = ao.ap,
			aq = ao.ar,
			at = au.av << 4,
			ax = ay,
			a3 = ax / c,
			az = b0 / ax,
			b1 = b2 / ax,
			aF = (an + b0) / ax - az,
			aG = (aq + b2) / ax - b1,
			y = b5;
		for (y.imageSmoothingEnabled = ax < 9, v.w.textAlign(y, 1), v.w.textBaseline(y, 1), q = 0; q < n; q++) player = ag[q] >> 3, aW = ah[q], aS = .9 + .1 * Math.log10(aW), aT = (aY = ad[q]) % at / 16 - aS, aY = aq * (Math.floor(aY / at) / 16 -
			aS - b1) / aG, aZ = -2 * (ac = ax * aS) * (1 + (ab = +(player === ak)) / 8), ab = ab * ac / 4, (ac = an * (aT - az) / aF) < aZ || aY < aZ || an + ab < ac || aq + ab < aY || (aT = 2 * aS * a3, aZ = aS * ax, null === (ab = aj[
			player]) && (aj[player] = ab = function(player) {
			var k = v.w.x(c, c);
			return a5(v.w.getContext(k, !0), a6.a7(player)), k
		}(player)), player === ak && (y.setTransform(aT, 0, 0, aT, ac - 2 * aT, aY - 2 * aT), y.drawImage(d, 0, 0)), y.setTransform(aT, 0, 0, aT, ac, aY), y.drawImage(ab, 0, 0), (aS = Math.floor(function(aW) {
			if (aW < 1e3) return .42;
			if (aW < 1e4) return .34;
			if (aW < 1e6) return .26;
			if (aW < 1e8) return .19;
			return .15
		}(aW) * aZ)) < 6) || (y.setTransform(1, 0, 0, 1, 0, 0), y.fillStyle = ai[q] ? b7.b8 : b7.b9, y.font = v.w.bA(1, aS), y.fillText(v.bB.bC(aW), ac + aZ, aY + aZ + .1 * aS));
		y.imageSmoothingEnabled = !1, y.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function bD() {
	function bE(q, type, bP, bM) {
		bK.buffer.data.push({
			t: q,
			type: type || 0,
			value: bP || 0,
			bP: bP || 0,
			bM: bM || 0
		})
	}

	function bF(q, type, bP, bM) {
		bK.buffer.data.push({
			t: q,
			type: type,
			value: bP || "",
			bP: bP || "",
			bM: bM || 0
		})
	}

	function bG(bQ) {
		for (var q = bK.buffer.data.length; q < bQ; q++) bK.buffer.data.push(null)
	}
	this.data = [], this.e = function() {
		bE(0, 1, 0, 5), bE(1, 1, 1), bE(2, 0), bF(3, 2), bE(4, 1), bF(5, 2, "system-ui", 2), bE(6, 0), bE(7, 0, 0), bE(8, 0), bE(9, 1, 1), bE(10, 1), bE(11, 1, 1), bF(12, 2, navigator.language), bE(13), bE(14), bE(15, 0, 1), bE(16, 0, 3), bG(
			100), bF(100, 2), bF(101, 2), bF(102, 2), bF(103, 2), bF(104, 2), bF(105, 2), bF(106, 2), bE(107), bE(108), bE(109), bF(110, 2), bE(111), bE(112), bE(113), bF(114, 2), bE(115), bF(116, 2), bE(117, 1), bF(118, 2, "", 2), bE(119, 1, 0,
				1), bF(120, 2), bE(121, 1, ~~(262144 * Math.random())), bF(122, 2, "Player " + Math.floor(1e3 * Math.random())), bE(123), bF(124), bE(125, 1), bF(126, 2), bE(127, 0, 1), bE(128), bE(129), bE(130), bE(131), bE(132), bF(133, 2), bE(
				134, 0, 5), bF(135, 2), bF(136, 2), bE(137), bE(138), bE(139), bE(140), bE(141), bE(142), bE(143), bE(144), bF(145, 2), bE(146), bE(147), bF(148, 2), bE(149), bE(150, 0, 1), bF(151, 2), bE(152, 0, 5), bE(153, 1), bE(154, 1), bF(
				155, 2), bF(156, 2), bE(157), bE(158), bE(159), bE(160), bF(161, 2), bE(162, 0, 1024), bF(163, 2, "0,0,0"), bF(164, 2, "100,100,100"), bF(165, 2, "30,30,30"), bF(166, 2, "70,70,70"), bF(167, 2, "100,100,100"), bF(168, 2,
				"85,85,85"), bF(169, 2, "100,100,100");
		for (var q = 0; q < 4; q++) bF(170 + q, 2, "255,255,255");
		bF(174, 2), bF(175, 2), bE(176, 0, 200), bG(180), bE(180, 0), bE(181, 0), bE(182, 0, 1023), bF(183, 2)
	}, this.bH = function(t, value) {
		this.data[t].value = value
	}, this.bI = function(t, value) {
		this.bH(t, value);
		var value = String(value),
			n = value.length;
		5e4 < n ? console.log("storage value too large: index " + t + " size " + n) : (bK.bL.save(t, value), bK.bL.save(t, String(this.data[t].bM), !0))
	}, this.bN = function(t) {
		return Number(this.data[t].value)
	}, this.bO = function(t) {
		return String(this.data[t].value)
	}
}

function bR() {
	this.bS = function(bT, bU, bV) {
		bW.bX(75), bW.bY(1, 0), bW.bY(6, 21), bW.bY(6, bT), bW.bY(1, +(bU < 0)), bW.bY(1, +(bV < 0)), bW.bY(30, Math.abs(bU)), bW.bY(30, Math.abs(bV)), bZ.af.send(0, bW.ba)
	}, this.bb = function(bT, bc, bd) {
		bW.bX(18 + 16 * bc.length + 30), bW.bY(1, 0), bW.bY(6, 22), bW.bY(6, bT), bZ.be.bf(bc), bW.bY(30, bd), bZ.af.send(0, bW.ba)
	}, this.bg = function(bT, bc, bd) {
		bW.bX(73), bW.bY(1, 0), bW.bY(6, 28), bW.bY(6, bT), bh.bi.bj(bc, 5), bW.bY(30, bd), bZ.af.send(0, bW.ba)
	}, this.bk = function(bl, bm) {
		for (var n = bm.length, bn = 0, q = 0; q < n; q++) bn += bm[q].length;
		for (bW.bX(21 + 3 * n + 16 * bn), bW.bY(1, 0), bW.bY(6, 23), bW.bY(3, bl), bW.bY(4, n), bW.bY(7, bn), q = 0; q < n; q++) bW.bY(3, bm[q].length), bo.bp.bq(bm[q]);
		bZ.af.send(0, bW.ba)
	}, this.br = function(bl, bU, bV) {
		bW.bX(52), bW.bY(1, 0), bW.bY(6, 24), bW.bY(3, bl), bW.bY(1, +(bU < 0)), bW.bY(1, +(bV < 0)), bW.bY(20, Math.abs(bU)), bW.bY(20, Math.abs(bV)), bZ.af.send(0, bW.ba)
	}
}

function bs() {
	var bt;
	this.e = function() {
		bt = !1
	}, this.bu = function() {
		var c9;
		if (function() {
				if (!bt) {
					if (c0.c1() % 30 != 9) return;
					if (!v.c2.c3(90)) return;
					bt = !0
				}
				return 1
			}() && (! function() {
				var c4 = c5.c6(956);
				if (c4) {
					if (v.c2.c7(c4.player)) return 1;
					c5.c8(956, 0)
				}
				return
			}() && (-1 === (c9 = (f.j ? function() {
				var id = cN.cO(),
					n = cH.cI;
				if (l.m[id])
					for (var cQ = cH.cK, cR = l.cR, q = 0; q < n; q++) {
						var c9 = cQ[q];
						if (cR[c9] !== id) return c9
					} else if (1 < n) return cP[n - 1];
				return -1
			} : function() {
				for (var cG = cH.cI, cJ = cH.cK, cL = cM, q = 0; q < cG; q++) {
					var c9 = cJ[q];
					if (0 !== cL[c9]) return c9
				}
				return -1
			})()) ? ! function() {
				var c4 = c5.c6(957);
				if (c4 && c4.cS) {
					if (a6.cT(c4.cS.a2 << 2)) return 1;
					c5.c8(957, 0)
				}
				return
			}() : (c5.cC(0, L(0, [cD.cE[c9]]), 956, c9, b7.b9, b7.cF, -1, !0), 0)))) {
			var n = cU.cV.cW;
			if (0 !== n)
				for (var buffer = cU.cV.buffer, q = 0; q < n; q++) {
					var a2 = buffer[q];
					if (a6.cT(a2 << 2)) return void c5.cC(0, L(1, [cX.cY(a2), cX.cZ(a2)]), 957, 0, b7.b9, b7.cF, -1, !0, void 0, {
						ca: 1,
						a2: a2
					})
				}
		}
	}
}

function cb() {
	var a8, cc, cd, ce, gap, cf, cg, ch, ci, cj, ck, cl, cm, cn, co, cp, cq;

	function cy() {
		ce = Math.floor(.2 * (cu.cv.cw() ? .07 : .035) * ao.cx), ce = d2(cu.cv.cw() ? 3 : 1, ce);
		var d3 = ao.ap / (a8.length + gap);
		ce = ce < d3 ? d3 : ce, co = Math.floor((1 - gap) * ce), cc = 0, d4()
	}

	function d4() {
		cc = (cc = cc < -20 ? -20 : cc) > (a8.length - 15) * ce ? (a8.length - 15) * ce : cc, cg = Math.floor(cc / ce), ch = (ch = cg + Math.floor(ao.ap / ce)) > a8.length - 1 ? a8.length - 1 : ch, cg = (cg = ch < cg ? ch : cg) < 0 ? 0 : cg;
		var aL = ch;
		cf = cd / a8[aL];
		for (var q = ch - 1; cg <= q; q--) a8[q] > a8[aL] && (aL = q, cf = cd / Math.pow(a8[q], cn))
	}

	function d7(aD) {
		aD = Math.floor((cc + ao.ap - aD - gap * ce) / ce);
		return (aD = aD < -1 ? -1 : -1 === aD ? 0 : aD > a8.length - 1 ? -1 : aD) !== ci && (ci = aD, -1 === cp && 0 === ci && d9.cr && (cp = setInterval(dA, 100)), 1)
	}

	function dG(q) {
		var dK = Math.floor(cf * Math.pow(a8[q], cn));
		b5.fillRect(cc + ao.ap - (q + 1) * ce, ao.ar - dK, co, dK)
	}

	function dA() {
		var c9;
		0 !== (ci = 8 === dV.dW() ? -1 : ci) ? (cq = (new Date).getTime(), clearInterval(cp), cp = -1) : (c9 = a8[1] / 864e3, -1 !== cq && (c9 += ((new Date).getTime() - cq) * a8[1] / 864e5, cq = -1), 0 < c9 && (a8[0] += Math.floor(c9), c0.d1 = !0))
	}
	this.cr = !1, this.e = function() {
		cq = cp = -1, ci = -(cn = 1), this.cs = !1, cm = 0, cl = new Date, cc = 0, gap = .3, a8 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		cd = Math.floor(.15 * ao.ar), cj = (cj = Math.floor((cu.cv.cw() ? .018 : .0137) * ao.cx)) < 2 ? 2 : cj, ck = v.w.bA(1, cj), cy()
	}, this.cz = function(d0) {
		var q;
		for (this.cr = !0, q = 0; q < d0.length; q++) a8.unshift(d0[q]);
		cy(), c0.d1 = !0
	}, this.d5 = function() {
		d4()
	}, this.dB = function(aD, aE) {
		aE > ao.ar - .6 * cd ? this.cs ? aD !== cm && (cc += aD - cm, cm = aD, d4(), d7(aD), this.cs = -1 !== ci, c0.d1 = !0) : d7(aD) && (c0.d1 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== ci && (this.cs = !1, ci = -1, c0.d1 = !0)
	}, this.dC = function(aD, deltaY) {
		-1 !== ci && (cc += Math.floor(deltaY), d4(), d7(aD), c0.d1 = !0)
	}, this.dD = function(aD, aE) {
		this.dB(aD, aE), -1 !== ci && (cm = aD, this.cs = !0)
	}, this.dE = function() {
		-1 !== ci && (this.cs = !1)
	}, this.aR = function() {
		b5.fillStyle = b7.dF;
		for (var dL, month, d8, dP, dQ, dR, b1, dS, dT, q = ch; cg <= q; q--) dG(q);
		this.cr && 0 === cg && (b5.fillStyle = b7.dH, dG(0)), -1 !== ci && (b5.fillStyle = b7.dI, dG(ci)), -1 !== ci && (b5.font = ck, v.w.textBaseline(b5, 2), (d8 = new Date).setTime(cl.getTime() - 1e3 * ci * 60 * 60 * 24), month = "month", dL =
			"day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(d8), dL = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(d8)), dL = dL + ", " + d8.getUTCDate() + " " + month + " " + d8.getFullYear(), month = 1 === a8[ci] ? L(2) : L(3), month = v.bB.bC(a8[ci]) + " " + month, d8 = Math.floor(b5.measureText(dL).width), dP = Math.floor(b5
				.measureText(month).width), dQ = Math.floor(.5 * (d8 + cj)), dR = (dR = cc + ao.ap - (ci + 1) * ce) < dQ ? dQ : dR > ao.ap - dQ ? ao.ap - dQ : dR, b1 = ao.ar - Math.floor(cf * Math.pow(a8[ci], cn)), dS = Math.floor(1.1 * cj),
			dT = b1 > ao.ar - dS ? ao.ar - dS : b1, b5.fillStyle = b7.cF, b5.fillRect(ao.ap - dP - cj, dT - dS, dP + cj, dS), b5.fillRect(dR - dQ, ao.ar - dS, d8 + cj, dS), b5.fillStyle = b7.b9, v.w.textAlign(b5, 2), b5.fillText(month, Math
				.floor(ao.ap - .5 * cj), dT), v.w.textAlign(b5, 1), b5.fillText(dL, dR, ao.ar), b5.strokeStyle = b7.dU, b5.lineWidth = 1, b5.beginPath(), b5.moveTo(0, b1), b5.lineTo(ao.ap, b1), b5.closePath(), b5.stroke())
	}
}

function dX() {
	var dY, dZ, da, ds;

	function de() {
		di(), 2 !== f.data.spawningType || v.aN.dr(f.data.spawningData) || (f.data.spawningType = 0), 2 !== f.data.spawningType && (f.data.spawningData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		2 === f.data.spawningType && v.aN.dn(da.dp(), f.data.spawningData, au.dq - 1)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(4), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy,
			e0 = (dx.dz(L(6)), [L(7), L(8), L(9)]),
			value = f.data.spawningType;
		0 === f.data.gameMode && (e0.splice(1, 1), 0 < value) && (value = 1);
		dx.e1(new e2({
			e0: e0,
			value: value
		}, function(t) {
			di(), f.data.spawningType = t, 0 === f.data.gameMode && 1 === t && (f.data.spawningType = 2), 2 !== f.data.spawningType || f.data.spawningData || (f.data.spawningData = new Uint16Array(2 * f.g)), dk.e3(24)
		})), ds.push(dx)
	}(ds = []), function(ds) {
		var dx = new dy;
		dx.dz("My Spawn"), dx.e4(new e5({
			value: f.data.selectableSpawn
		}, L(10), function(value) {
			f.data.selectableSpawn = value
		})), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy,
			e6 = (dx.dz("Seed"), new e7({
				t: -1,
				value: f.data.spawningSeed
			}, 1, 0, function(e8) {
				var value = Math.abs(Math.floor(e8.target.value)) % 16384;
				e8.target.value = f.data.spawningSeed = value
			}));
		dx.e4(e6), dx.e4(new e9([new dd(L(7), function() {
			e6.e8.value = f.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), ds.push(dx)
	}(ds), function(ds) {
		var dx;
		2 === f.data.spawningType && ((dx = new dy).dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.spawningData, 2)), dx.e4(da), ds.push(dx))
	}(ds), ds))
}

function eH() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function eI() {
	this.eJ = function(eK) {
		for (var eL = eM, size = eL.eN(eK), eO = 7 + 9 * eL.eN(1), a8 = [], q = 0; q < size; q++) a8.push(String.fromCharCode(eL.eN(eO)));
		return a8.join("")
	}
}

function eP() {
	this.a8 = new Array(4), this.eQ = new Uint16Array(2), this.eR = new Uint16Array(2), this.eS = new Int32Array(2), this.eT = new Uint32Array(2), this.eU = new Uint32Array(2), this.aA = new Uint8Array(4), this.eV = new Uint8Array(4), this.eW =
		new Uint32Array(4), this.eX = new Uint32Array(5), this.eY = new Uint32Array(8), this.eZ = new Uint32Array(8), this.ea = new Uint16Array(16), this.eb = new Uint16Array(512), this.ec = new Uint16Array(512), this.ed = new Uint16Array(512), this
		.ee = new Uint16Array(0), this.e = function() {
			var n = au.av * au.ef;
			this.ee.length !== n && (this.ee = new Uint16Array(n))
		}, this.eg = function(a8, eh) {
			return a8[0] = eh, a8
		}, this.ei = function(a8, eh, ej) {
			return a8[0] = eh, a8[1] = ej, a8
		}, this.ek = function(a8, eh, ej, el) {
			return a8[0] = eh, a8[1] = ej, a8[2] = el, a8
		}, this.em = function(a8, eh, ej, el, en) {
			return a8[0] = eh, a8[1] = ej, a8[2] = el, a8[3] = en, a8
		}
}

function eo() {
	this.ap = 0, this.ar = 0, this.dO = 0, this.dP = 0, this.ep = 0, this.eq = 0, this.er = 0, this.es = 0;
	var eu = this.et = 0;
	this.ev = 0, this.ew = 0, this.ex = 0, this.ey = 0, this.t = 0, this.ez = null, this.f0 = !1, this.f1 = -1, this.f2 = !1, this.f3 = [0, 0], this.f4 = function() {
		this.ez = [L(11), L(12, 0, "Balance"), L(13, 0, "Interest"), L(14)]
	}, this.e = function() {
		this.f0 = !1, this.f1 = -1, this.f2 = !1, this.resize()
	}, this.resize = function() {
		this.ap = ao.ap < 1.369 * ao.ar ? ao.ap : 1.369 * ao.ar;
		var f6 = cu.cv.cw() && ao.ap < ao.ar ? 1 : cu.cv.cw() ? .8 : ao.ap < ao.ar ? .65 : .59;
		this.ap = Math.floor(f6 * this.ap), this.ap -= cu.cv.cw() && ao.ap < ao.ar ? 2 * f7.gap + 2 : 0, this.ar = Math.floor(this.ap / 1.369), this.ey = Math.floor(this.ar / 150), this.ey = Math.max(this.ey, 1.5), this.dO = Math.floor(1 + .02 *
			this.ap), this.dP = Math.floor(1 + .04 * this.ap), this.er = this.dP, eu = Math.floor(.75 * this.er), this.es = Math.floor(1 + .075 * this.ap), this.ev = Math.floor(1 + .1125 * this.ap), this.ew = Math.floor(this.ap * (cu.cv
		.cw() ? .03 : .029)), this.ew = Math.max(this.ew, 4), this.ex = Math.floor(.035 * this.ap), this.ex = Math.max(this.ex, 4), this.et = this.ar - 2 * this.er - this.es - this.ev, this.f0 && this.f8()
	}, this.dD = function(f9, fA) {
		var fC, fB;
		return !!this.f0 && (fB = f9, fC = fA, f9 -= fD.fE(ao.ap - this.ap, 2), fA -= fD.fE(ao.ar - this.ar, 2), f9 < 0 || fA < 0 || f9 >= this.ap || fA >= this.ar || f9 >= this.ap - this.ev && fA < this.ev ? -1 !== fF.dD(fB, fC) || fG.dD(fB,
			fC) || this.eD() : fA < this.ev || (fA < this.ar - this.es ? (this.f2 = !0, this.f1 = (f9 - 2 * this.dO - this.ep) / this.eq, 3 !== this.t && (c0.d1 = !0)) : (fB = (fB = Math.floor(f9 / (this.ap / this.ez.length))) < 0 ? 0 : fB >=
				this.ez.length ? this.ez.length - 1 : fB) !== this.t && (this.t = fB, this.f8(), c0.d1 = !0)), !0)
	}, this.dB = function(f9, fA) {
		return this.f3[0] = f9, this.f3[1] = fA, !(!this.f0 || !this.f2 || (f9 -= fD.fE(ao.ap - this.ap, 2), fA = this.f1, this.f1 = (f9 - 2 * this.dO - this.ep) / this.eq, (0 <= this.f1 && this.f1 <= 1 || 0 <= fA && fA <= 1) && (c0.d1 = !0), 0))
	}, this.dE = function() {
		this.f2 && (this.f2 = !1)
	}, this.fH = function() {
		this.f0 ? this.eD() : this.show()
	}, this.show = function() {
		fI.fJ < 2 || (this.f0 = !0, this.f8())
	}, this.eD = function() {
		this.f0 = !1, this.f1 = -1, c0.d1 = !0
	}, this.f8 = function() {
		this.t < 2 ? this.ep = fK.measureText(v.bB.bC(fI.max[this.t]), v.w.bA(0, this.ew)) : 2 === this.t && (this.ep = fK.measureText(v.bB.fL(6, 2), v.w.bA(0, this.ew))), this.eq = this.ap - 2 * this.dO - this.ep - this.dP
	}, this.fM = function() {
		this.f0 && this.f8()
	}, this.aR = function() {
		this.f0 && this.fN()
	}, this.fN = function() {
		var aD = fD.fE(ao.ap - this.ap, 2),
			aE = fD.fE(ao.ar - this.ar, 2);
		b5.setTransform(1, 0, 0, 1, aD, aE), b5.fillStyle = b7.cF, b5.fillRect(0, this.ev, this.ap, this.ar - this.ev), this.fO(), this.fP(), b5.strokeRect(0, 0, this.ap, this.ar), v.w.textAlign(b5, 2), b5.font = v.w.bA(0, this.ew), 0 === this
			.t ? this.fQ(fI.fR, aD, aE) : 1 === this.t ? this.fQ(fI.fS, aD, aE) : 2 === this.t ? this.fT(aD, aE) : 3 === this.t && (this.fU(aD, aE), this.fV(aD, aE)), fF.fW(Math.floor(aD + this.ap - .725 * this.ev), Math.floor(aE + .275 * this
				.ev), Math.floor(.45 * this.ev)), b5.setTransform(1, 0, 0, 1, 0, 0)
	}, this.fO = function() {
		var q, d8;
		for (b5.lineWidth = this.ey, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.strokeStyle = b7.b9, b5.font = v.w.bA(1, this.ex), d8 = this.ap / this.ez.length, b5.fillStyle = b7.fX, b5.fillRect(this.t * d8, this.ar - this.es, d8, this
				.es), b5.fillStyle = b7.b9, b5.fillRect(0, this.ar - this.es - .5 * this.ey, this.ap, this.ey), q = 1; q <= 3; q++) b5.fillRect(q * d8, this.ar - this.es, this.ey, this.es);
		for (q = this.ez.length - 1; 0 <= q; q--) b5.fillText(v.fY.fZ(this.ez[q], 0, .9 * d8), (q + .5) * d8, this.ar - .46 * this.es)
	}, this.fP = function() {
		b5.fillStyle = b7.fa, b5.fillRect(0, 0, this.ap, this.ev), b5.fillStyle = b7.b9, b5.fillRect(0, this.ev - .5 * this.ey, this.ap, this.ey), b5.font = v.w.bA(1, .39 * this.ev), b5.fillText(v.fY.fZ(L(15), 0, .8 * this.ap), Math.floor(this
			.ap / 2), Math.floor(.55 * this.ev))
	}, this.fQ = function(a8, aD, aE) {
		var aL = fI.max[this.t],
			fb = (b5.setTransform(1, 0, 0, 1, aD + 2 * this.dO + this.ep, aE + this.er + this.ev), b5.lineWidth = 2, this.et / Math.sqrt(aL));
		b5.beginPath(), b5.moveTo(this.eq, this.et - fb * Math.sqrt(a8[fI.fJ - 1]));
		for (var q = fI.fJ - 2; 0 <= q; q--) b5.lineTo(q * this.eq / (fI.fJ - 1), this.et - fb * Math.sqrt(a8[q]));
		b5.stroke();
		aD = this.fW(a8, fb, .5);
		aD < .95 && b5.fillText(v.bB.bC(aL), -this.dO, 0), .05 < Math.abs(aD - .5) && b5.fillText(v.bB.bC(Math.floor(aL / 4)), -this.dO, Math.floor(this.et / 2)), .05 < aD && b5.fillText("0", -this.dO, this.et)
	}, this.fT = function(aD, aE) {
		b5.setTransform(1, 0, 0, 1, aD + 2 * this.dO + this.ep, aE + this.er + this.ev), b5.lineWidth = 2;
		var fb = this.et / Math.max(fI.max[this.t], 1);
		b5.beginPath(), b5.moveTo(this.eq, this.et - fb * fI.fc[fI.fJ - 1]);
		for (var q = fI.fJ - 2; 0 <= q; q--) b5.lineTo(q * this.eq / (fI.fJ - 1), this.et - fb * fI.fc[q]);
		b5.stroke();
		aD = this.fW(fI.fc, fb, 1), aE = fI.max[this.t] / 100;
		aD < .95 && b5.fillText(v.bB.fL(aE, 2), -this.dO, 0), .05 < Math.abs(aD - .5) && b5.fillText(v.bB.fL(aE / 2, 2), -this.dO, Math.floor(this.et / 2)), .05 < aD && b5.fillText(v.bB.fL(0, 2), -this.dO, this.et)
	}, this.fU = function(aD, aE) {
		b5.setTransform(1, 0, 0, 1, aD + .34 * this.ap, aE + 2 * eu + this.ev), v.w.textAlign(b5, 2);
		for (var fd = this.ar - 4 * eu - this.es - this.ev, a8 = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], q = 9; 0 <= q; q--) b5.fillText(v.fY.fZ(fI.fe[a8[q]], 0, .31 * this.ap), 0, q * fd / 9);
		var ff = fI.fg;
		for (b5.setTransform(1, 0, 0, 1, aD + .39 * this.ap, aE + 2 * eu + this.ev), v.w.textAlign(b5, 0), b5.fillText(v.bB.fL(100 * ff[0] / (1024 * Math.max(ff[1], 1)), 1), 0, 0), q = 8; 1 <= q; q--) b5.fillText(ff[a8[q]].toString(), 0, q * fd /
			9);
		b5.fillText(v.bB.fL(100 * (1 - cD.fh[f.al] / ff[7]), 0), 0, fd)
	}, this.fV = function(aD, aE) {
		b5.setTransform(1, 0, 0, 1, aD + .79 * this.ap, aE + 2 * eu + this.ev), v.w.textAlign(b5, 2);
		var q, fd = this.ar - 4 * eu - this.es - this.ev;
		for (b5.fillStyle = b7.fi, q = 2; 0 <= q; q--) b5.fillText(v.fY.fZ(fI.fe[q + 8], 0, .31 * this.ap), 0, q * fd / 9);
		b5.fillText(v.fY.fZ(fI.fe[18], 0, .31 * this.ap), 0, 3 * fd / 9), b5.fillStyle = b7.fj, b5.fillText(v.fY.fZ(fI.fe[11], 0, .31 * this.ap), 0, 4 * fd / 9), b5.fillStyle = b7.fk, b5.fillText(v.fY.fZ(fI.fe[13], 0, .31 * this.ap), 0, 5 * fd /
				9), b5.fillText(v.fY.fZ(fI.fe[15], 0, .31 * this.ap), 0, 6 * fd / 9), b5.fillText(v.fY.fZ(fI.fe[16], 0, .31 * this.ap), 0, 7 * fd / 9), b5.fillText(v.fY.fZ(fI.fe[12], 0, .31 * this.ap), 0, 8 * fd / 9), b5.fillStyle = b7.b8, b5
			.fillText(v.fY.fZ(fI.fe[17], 0, .31 * this.ap), 0, fd), b5.fillStyle = b7.fi;
		var ff = fI.fg,
			fl = ff[8] + ff[9] + ff[10] + ff[18],
			fl = v.bB.bC(fl),
			fn = b5.measureText(fl).width,
			aD = (b5.setTransform(1, 0, 0, 1, aD + .83 * this.ap + fn, aE + 2 * eu + this.ev), b5.fillText(v.bB.bC(ff[8]), 0, 0), b5.fillText(v.bB.bC(ff[9]), 0, fd / 9), b5.fillText(v.bB.bC(ff[10]), 0, 2 * fd / 9), b5.fillText(v.bB.bC(ff[18]), 0,
					3 * fd / 9), b5.fillStyle = b7.fj, b5.fillText(fl, 0, 4 * fd / 9), b5.fillStyle = b7.fk, b5.fillText(v.bB.bC(ff[13]), 0, 5 * fd / 9), b5.fillText(v.bB.bC(ff[15]), 0, 6 * fd / 9), b5.fillText(v.bB.bC(ff[16]), 0, 7 * fd / 9), b5
				.fillText(v.bB.bC(ff[12]), 0, 8 * fd / 9), ff[12] + ff[13] + ff[15] + ff[16]);
		b5.fillStyle = b7.b8, b5.fillText(v.bB.bC(aD), 0, fd), b5.fillStyle = b7.b9
	}, this.fW = function(a8, fb, cn) {
		var q, e8, eh;
		return this.f1 < 0 || 1 < this.f1 ? .25 : (q = this.f1 * (fI.fJ - 1), eh = a8[e8 = Math.floor(q)], eh += (q - e8) * (a8[e8 < fI.fJ - 1 ? e8 + 1 : e8] - eh), b5.strokeStyle = b7.dF, .04 < this.f1 && this.fp(0, this.et - fb * Math.pow(eh,
				cn), q * this.eq / (fI.fJ - 1), this.et - fb * Math.pow(eh, cn)), .04 < eh / fI.max[this.t] && this.fp(q * this.eq / (fI.fJ - 1), this.et, q * this.eq / (fI.fJ - 1), this.et - fb * Math.pow(eh, cn)), b5.fillStyle = b7.fq, b5
			.beginPath(), b5.arc(q * this.eq / (fI.fJ - 1), this.et - fb * Math.pow(eh, cn), Math.max(2, .014 * this.ar), 0, 2 * Math.PI), b5.fill(), a8 = this.f1 * c0.fs, a8 = 0 === cD.ft[f.al] ? Math.floor(a8 * fI.fu) : Math.floor(a8 * c0
				.c1()), b5.fillStyle = b7.b9, b5.fillText(1 === cn ? v.bB.fL(eh / 100, 2) : v.bB.bC(Math.floor(eh)), -this.dO, this.et - fb * Math.pow(eh, cn)), v.w.textAlign(b5, 1), b5.fillText(fv.fw(a8), q * this.eq / (fI.fJ - 1), this.et +
				this.ew - (cu.cv.cw() ? 2 : 0) - this.ey), v.w.textAlign(b5, 2), fb * Math.pow(eh, cn) / this.et)
	}, this.fp = function(az, b1, b3, b4) {
		b5.beginPath(), b5.moveTo(az, b1), b5.lineTo(b3, b4), b5.stroke()
	}
}

function fx() {
	var cm = 0,
		fy = 0;
	this.fz = function(aD, aE) {
		cm = aD, fy = aE
	}, this.g0 = function(code) {
		var g8, gA, a2;
		f.g1 || fF.g2 || (v.c2.g3(0) || v.c2.g3(1)) && v.c2.g4(f.al) && (g5.dD(cm, fy) ? g5.g6 = !1 : g7.dD(cm, fy) || (g8 = cX.g9(cm), gA = cX.gB(fy), a2 = cX.gC(g8, gA), cX.gD(g8, gA) && (0 === code ? function(a2) {
			var gH, a3, ax;
			f.gI ? -1 !== (gH = gJ.gK(a2)) && gL.gM.gN(a2) : (a3 = cX.gO(a2), a6.gP(a3) ? (gH = gQ.gR.gS(a3)) && (ax = cX.gO(gH), ax = a6.cT(ax) ? f.g : a6.gU(ax), gL.gM.gV(g5.gW(), gH, ax)) : (gH = gJ.gX(a2)) < 0 || (a3 = cX.gO(
				gH), a6.cT(a3) ? gY.gZ(f.al) ? gL.gM.ga(g5.gW(), f.g) : gb.gc(f.al) && gd.ge(f.g, g5.gW()) : (ax = a6.gU(a3), gY.gf(ax, f.al) && (gY.gg(f.al, ax) ? gL.gM.ga(g5.gW(), ax) : gb.gc(f.al) && gd.ge(ax, g5
				.gW())))))
		}(a2) : 1 === code ? function(a2) {
			ae.gh.gi(f.al, a2) && gL.gM.gj(g5.gW(), a9.eZ[7])
		}(a2) : 2 === code && function(a2) {
			ae.gk.gl(f.al, a2) && gL.gM.gm(g5.gW())
		}(a2))))
	}, this.gn = function() {
		if (!f.g1 && !fF.g2 && v.c2.g3(1)) {
			var c9 = f.al;
			if (v.c2.g4(c9)) {
				var n = gb.gc(c9);
				if (n < 1) ! function() {
					var c9 = f.al;
					if (gY.gZ(c9)) gL.gM.ga(g5.gW(), f.g);
					else
						for (var gy = a6.gy, gz = cD.gz, n = gz[c9].length, h0 = Math.floor(Math.random() * n), q = 0; q < n; q++)
							for (var h1 = 3; 0 <= h1; h1--) {
								var h2 = gz[c9][(q + h0) % n] + gy[h1];
								if (a6.h3(h2)) {
									h2 = a6.gU(h2);
									if (h2 !== c9 && (!f.j || gY.gf(c9, h2))) return gL.gM.ga(g5.gW(), h2)
								}
							}
				}();
				else {
					for (var gp = 0, aW = gb.gq(c9, 0), q = 1; q < n; q++) {
						var gr = gb.gq(c9, q);
						gr < aW && (aW = gr, gp = q)
					}
					gL.gM.ga(g5.gW(), gb.gs(c9, gp))
				}
			}
		}
	}, this.gt = function() {
		if (!f.g1 && !fF.g2 && v.c2.g4(f.al) && v.c2.g3(1)) return gu.f0 ? gu.gv(f.al) ? void gL.gM.gw(1) : void 0 : void(gu.gx(f.al) && gL.gM.gt())
	}
}

function df(h5, ds) {
	var h6 = document.createElement("div");

	function hD() {
		var q, hE, ar, hF, f6, hA = ao.hG * h6.offsetWidth,
			hH = new Float64Array(function(hA) {
				var ap = .25 * v.w.hB(.6) * ao.cx;
				return Math.max(Math.floor(hA / ap), 1)
			}(hA)),
			hI = f7.hI,
			hJ = (hA - (hH.length + 1) * f7.gap) / (hH.length * ao.hG);
		for (hH.fill(hI), q = 0; q < ds.length; q++) hE = (f6 = ds[q].h6).style, ar = v.aN.min(hH), hF = hH.indexOf(ar), hE.top = v.w.hK(ar), hE.left = v.w.hK(hI + hF * (hJ + hI)), hE.width = v.w.hK(hJ), v.w.hL(f6, 5), hH[hF] += f6.offsetHeight + 3 *
			hI;
		h6.style.height = v.w.hK(v.aN.max(hH) - 2 * hI)
	}
	this.h7 = h6, this.h8 = ds, this.resize = function() {
		var q;
		for (q = 0; q < ds.length; q++) ds[q].resize();
		hD(), hD()
	}, h6.style.width = "100%", h6.style.maxWidth = "100%", h5.style.lineHeight = "1.5em", h5.style.overflowX = "hidden", h5.style.overflowY = "auto";
	for (var q = 0; q < ds.length; q++) h6.appendChild(ds[q].h6);
	h5.appendChild(h6)
}

function hM() {
	var gap, hN = !1,
		hO = 0,
		ap = 0,
		dO = 0,
		canvas = null,
		fY = null,
		hP = null;

	function hX() {
		for (var q = f.hQ; 0 <= q; q--) hP[q] = 0;
		for (q = cH.cI - 1; 0 <= q; q--) hP[l.cR[cH.cK[q]]] += cD.fh[cH.cK[q]];
		hN = !0
	}

	function hU() {
		for (var hj, hg = 0, n = 0, eF = Math.floor(ap / 2), hh = Math.floor(dO / 2), hi = 1.5 * Math.PI, q = f.hQ; 0 <= q; q--) n += hP[q], 0 === hP[q] && hg++;
		if (hN = !1, fY.clearRect(0, 0, ap, ap), 0 < n)
			if (hg === f.hQ) {
				for (q = f.hQ; 0 <= q; q--)
					if (0 < hP[q]) {
						! function(q, eF, hh) {
							fY.fillStyle = l.hr[l.m[q]], fY.beginPath(), fY.arc(eF, eF, hh, 0, 2 * Math.PI), fY.fill()
						}(q, eF, hh);
						break
					}!
				function(eF) {
					var fontSize = eF / 3;
					fY.font = v.w.bA(1, fontSize), fY.fillStyle = b7.b9, fY.fillText("100%", eF, eF + .1 * fontSize)
				}(eF)
			} else {
				for (q = 0; q <= f.hQ; q++) 0 < hP[q] && (! function(q, eF, hh, hi, hj) {
					fY.fillStyle = l.hr[l.m[q]], fY.beginPath(), fY.arc(eF, eF, hh, hi, hj), fY.lineTo(eF, eF), fY.fill()
				}(q, eF, hh, hi, hj = hi + 2 * Math.PI * hP[q] / n), function(eF, hh, hi, hj) {
					var ff = (hj - hi) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * hh * Math.min(ff, .37);
					fontSize < 8 || (hi = (hi + hj) / 2, hj = (__fx.settings.detailedTeamPercentage ? (100 * ff).toFixed(2) : Math.floor(100 * ff + .5)) + "%", hh *= .525 - Math.max(.6 * (ff - .7), 0), fY.font = v.w.bA(1, fontSize), fY
						.fillStyle = b7.b9, fY.fillText(hj, eF + Math.cos(hi) * hh, eF + Math.cos(hi + 1.5 * Math.PI) * hh))
				}(eF, hh, hi, hj), 0 !== q && hp(eF, hh, hi), hi = hj);
				hp(eF, hh, 1.5 * Math.PI)
			}!
		function(eF, hh) {
			fY.beginPath(), fY.arc(eF, eF, hh, 0, 2 * Math.PI), fY.stroke()
		}(eF, hh)
	}

	function hp(eF, hh, hs) {
		fY.beginPath(), fY.moveTo(eF, eF), fY.lineTo(eF + Math.cos(hs) * hh, eF + Math.cos(hs + 1.5 * Math.PI) * hh), fY.stroke()
	}
	this.e = function() {
		if (f.j) {
			hO = 0, hP = new Uint32Array(f.hQ + 1);
			for (var q = f.hQ; 0 <= q; q--) hP[q] = 0;
			for (q = cH.cI - 1; 0 <= q; q--) hP[l.cR[cH.cK[q]]] += 1;
			this.resize()
		} else hP = fY = canvas = null
	}, this.hS = function() {
		return ap
	}, this.resize = function() {
		f.j && (ap = Math.floor(.95 * (cu.cv.cw() && !f.hT ? .18 * ao.min : .13 * ao.cx)), ap = (ap *= 1 + (.5 + .2 * cu.cv.cw()) * f.hT) + ap % 2, gap = Math.max(1, .015 * ap), dO = Math.floor(ap - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = ap, canvas.height = ap, (fY = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, fY.strokeStyle = b7.b9, v.w.textAlign(fY, 1), v.w.textBaseline(fY, 1), hU())
	}, this.hV = function(hW) {
		hW && hX();
		var d8, hW = this.cO();
		return l.m[hW] || (hW = function() {
			for (var hY = -1, q = f.hQ; 1 <= q; q--)(-1 === hY || hP[q] > hP[hY]) && (hY = q);
			return hY
		}(), d8 = cD.fh[cP[0]], -1 !== hW && hP[hW] > d8) ? hP[hW] : d8
	}, this.ha = function() {
		return hO = 31, this.bu(), this.cO()
	}, this.cO = function() {
		for (var hY = 0, q = f.hQ; 0 < q; q--) hP[q] > hP[hY] && (hY = q);
		return hY
	}, this.hb = function(hc) {
		for (var hd = 0, cK = cH.cK, cR = l.cR, n = cH.cI, eb = a9.eb, q = 0; q < n; q++) {
			var c9 = cK[q];
			cR[c9] === hc && (eb[hd++] = c9)
		}
		a9.eR[0] = hd
	}, this.he = function(hc) {
		for (var hd = 0, cK = cH.cK, cR = l.cR, n = cH.cI, eb = a9.eb, q = 0; q < n; q++) {
			var c9 = cK[q];
			cR[c9] !== hc && (eb[hd++] = c9)
		}
		a9.eR[0] = hd
	}, this.hf = function() {
		for (var hd = 0, q = f.hQ; 0 <= q; q--) hd += 0 < hP[q];
		return hd
	}, this.bu = function() {
		f.j && 32 <= ++hO && (hO = 0, hX())
	}, this.fM = function() {
		f.j && hN && hU()
	}, this.aR = function() {
		f.j && (f.hT ? b5.drawImage(canvas, f7.gap, f7.gap) : b5.drawImage(canvas, f7.gap, hu + 2 * f7.gap))
	}
}

function hv() {
	this.buffer = {}, this.hw = new Array(8), this.hx = null, this.hy = null, this.hz = 0, this.i0 = [0, 0], this.i1 = function() {
		dk.e3(5, 5)
	}, this.i2 = function(i3) {
		i3 && (i4.i5 = i3), dk.i6(), i4.e()
	}, __fx.customLobby.setJoinFunction(() => this.i2(1)), this.i7 = function() {
		dk.e3(0 === dV.dW() ? 5 : 0)
	}, this.i8 = function() {
		if (1 === bK.buffer.data[130].value) dk.e3(8, dk.i9().iA, new iB(24, {
			bl: bK.buffer.data[125].value,
			bU: bK.buffer.data[128].value,
			bV: bK.buffer.data[129].value
		}));
		else {
			for (var a8 = (a8 = bK.buffer.data[126].value.split(",")).slice(0, 10), q = 0; q < a8.length; q++) a8[q] = a8[q].trim().slice(0, 7).toUpperCase();
			1 === a8.length && 0 === a8[0].length && (a8 = []), dk.e3(8, dk.i9().iA, new iB(23, {
				bl: bK.buffer.data[125].value,
				bm: a8
			}))
		}
	}, this.iC = function(iA, target) {
		dk.e3(4, iA, new iD("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + bZ.af.iE(
				"/privacy"), !1, [new dd("⬅️ " + L(5), function() {
				dk.e3(iA)
			}), new dd("✅ Accept", function() {
				bK.iF.bH(140, 1), 0 === target ? dk.e3(2, iA) : dk.e3(8, iA, new iB(target))
			})]))
	}, this.iG = function() {
		for (var q = 0; q < 8; q++) this.hw[q] = bh.bp.iH(eM.eN(5));
		this.hw[1] = "[" + this.hw[1] + "]", 5 === dk.iI && (dk.i9().iJ.bH(this.hw), dk.i9().resize())
	}, this.iK = function(ff, iL, iM) {
		ff = v.c2.iN(ff, 1, 1e6);
		iL = L(16, [iL]);
		return (iL += "<br>") + L(17, [iM]) + "<br>" + L(18, [ff + "–" + (ff + 2)]) + "<br>" + L(19, [ff])
	}
}

function iO() {
	var iP, iQ, ds, iR = -1;
	this.show = function() {
		iP.show(), this.resize(), iR = bK.buffer.data[125].value
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), iQ.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(L(20), [new dd("⬅️ " + L(5), function() {
		iR !== bK.buffer.data[125].value ? dk.af.i8() : dk.iS(13)
	})]), iQ = new df(iP.dg, ((ds = []).push(function() {
		var dx = new dy,
			iZ = (dx.dz(L(21)), dx.iY(L(22)), new dd(L(23), function() {
				bK.iF.bH(130, 0), dk.af.i8()
			}, 0, 0, 1)),
			ia = new e7(bK.buffer.data[126], 0, function() {
				iZ.button.click()
			});
		return dx.e4(ia), ia.e8.placeholder = "a,b,c", ia.e8.style.marginTop = "0.5em", dx.e4(new e9([iZ.button])), dx
	}()), ds.push(function() {
		var dx = new dy,
			iZ = new dd(L(23), function() {
				bK.iF.bH(130, 1), dk.af.i8()
			}, 0, 0, 1),
			ib = new e7(bK.buffer.data[129], 1, function() {
				ib.e8.focus()
			}),
			ic = new e7(bK.buffer.data[128], 1, function() {
				iZ.button.click()
			});
		return dx.dz(L(24)), dx.e4(ic), ic.e8.style.marginBottom = "0.5em", dx.dz(L(25)), dx.e4(ib), dx.e4(new e9([iZ.button])), dx
	}()), ds.push(function() {
		var dx = new dy;
		return dx.dz(L(26)), bK.buffer.data[125].e0 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], dx.e1(new e2(bK.buffer.data[125])), dx
	}()), ds.push(function() {
		var dx = new dy;
		return dx.dz(L(27)), dx.e4(new e5(bK.buffer.data[127], L(28))), dx
	}()), ds))
}

function ie() {
	var ig = [];

	function im(ij) {
		ig.unshift(ij), bK.iF.bH(161, ig.join(";"))
	}

	function il(ij) {
		for (var ip = ig, n = ip.length, q = 0; q < n; q++)
			if (ip[q] === ij) return ip.splice(q, 1), bK.iF.bH(161, ip.join(";")), 1
	}
	this.e = function() {
		var bJ = bK.buffer.data[161].value;
		bJ.length && (ig = bJ.split(";"))
	}, this.get = function() {
		return ig
	}, __fx.followedAccounts.setSource(this.get), this.ih = function() {
		return {
			e0: __fx.followedAccounts.decorate(ig),
			value: 0
		}
	}, this.ii = function(ij) {
		return v.aN.has(ig, ij)
	}, this.ik = function(ij) {
		return il(ij) ? 0 : (im(ij), 1)
	}, this.fM = function(ij) {
		il(ij) && im(ij)
	}, this.io = function(t) {
		t < ig.length && (ig.splice(t, 1), bK.iF.bH(161, ig.join(";")))
	}
}

function iq() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.ir = null
}

function is() {
	this.g = 512, this.it = 15e8, this.iu = 1e9, this.iv = 5e4, this.iw = 512, this.ix = 2, this.al = 0, this.iy = 0, this.iz = 0, this.j0 = 0, this.j1 = 0, this.j2 = 512, this.j3 = 512, this.j4 = 150, this.j5 = !0, this.g1 = 0, this.j6 = 0, this
		.j7 = 0, this.hT = !1, this.gI = 0, this.j8 = 0, this.j = !1, this.hQ = 0, this.j9 = 0, this.jA = 0, this.jB = 0, this.jC = null, this.jD = new jE, this.jF = 30, this.jG = 0, this.jH = 0, this.jI = 0, this.jJ = 0, this.data = new iq, this
		.jK = new jL, this.jM = 0, this.jN = "", this.jO = function() {
			jP.turnstile.close(), a9.e(), jQ.e(), jR.clear(), this.iz = this.iy = this.data.humanCount, this.j5 = 1 === this.iz && !__fx.customLobby.isActive(), this.hT = !1, this.g1 = this.data.isReplay, this.jA = 0 === this.data.gameMode ? [7, 10,
					8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.jB = this.data.isContest, this.j = this.jA < 7 || 9 === this.jA, this.jA = 10 === this.jA && this.j5 ? 7 : this.jA, this.jA = 8 === this
				.jA && 2 !== this.iy ? 7 : this.jA, jS.e(), this.hQ = this.data.numberTeams, this.data.teamPlayerCount ? this.j9 = +(0 < this.data.teamPlayerCount[0]) : (this.j9 = 0, this.j && this.j5 && (this.data.teamPlayerCount = new Uint16Array(
					9), this.data.teamPlayerCount.fill(1, 1, this.hQ + 1), f.jK.jT())), this.jF = this.iy <= 2 ? 30 : this.iy <= 50 ? 40 : 50, this.j8 = this.gI = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data
				.selectableSpawn, this.jC = this.gI ? new jU : null, this.j2 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.iy) : 1 === jV.jW ? this.j2 = this.iy : this.j2 = this
				.data.playerCount,
				this.j3 = this.j2, this.j0 = this.j2 - this.iy, this.j1 = 0, this.al = this.data.selectedPlayer, this.jG = 0, this.jH = 0, this.jI = 0, this.jJ = 0, jX.jY(this.data.spawningSeed), jZ.e(), cD.e(), ja.e(), jb.jc(), gL.jd.je = [], gL.gM
				.jf = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), l.e(), this.j6 = 1, fI.e(), jg(), a6.f4(), jh.ji(), jj.e(), a6.e(), jk.e(), cX.e(), ae.e(), cU.e(),
				jl.jm(), jn.e(), jb.bX(), jo.e(), jp.e(), cH.jq(), jr.e(), cN.e(), js.e(), jt.e(), ju.putImageData(jv, 0, 0), jw.e(), jx.e(), g5.e(), fG.e(), gu.e(), jy.e(), fv.e(), fF.e(), fK.e(), c5.e(), g7.e(), jz.e(), k0.e(), k1.e(), k2.e(),
			k3(), gb.e(), k4.e(), k5.e(), k6.e(), gd.e(), k7.e(), k8.e(), this.jD.e(), c0.jm(), kB.kC(), 0 === cD.ft[f.al] && k0.show(!1, !0), k4.kD(!0), kA.e(), c0.d1 = !0, this.g1 || this.j5 && this.gI || cu.cv.setState(1), this.jM = 0
		}, this.kE = function(kF) {
			jr.kG.kH.length ? this.jN = jr.kG.kH : this.jN = jr.kI.kJ(), __fx.replayHistory.save(this.jN), !1 === __fx.customLobby.isActive() && bZ.af.kK(), jR.clear(), this.j6 = 0, c0.kL(), cu.cv.setState(0), dV.setState(0), __fx.customLobby
				.isActive() || jP.kM.show(kF), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.jM ? dk.af.i2(0) : 1 === this.jM ? dk.e3(19) : dk.e3(5, 5)
		}, this.kN = function() {
			return this.g1 ? fF.g2 || !fG.kO : this.j5 && (fF.g2 || this.gI)
		}, this.kP = function() {
			return 1 === this.j6 && !this.gI
		}
}

function kQ() {
	var kR, kS, kT;

	function kc(q) {
		return v.color.kt(kS[q][0], kS[q][1], kS[q][2])
	}

	function kj(ca, ku) {
		return v.color.kv(kS[ca], kS[ku]), kc(ku)
	}

	function ka() {
		kR && (kR.remove(), kR = null)
	}
	this.show = function(ht, colors, id) {
		0 <= (kT = id) && bZ.af.kU(0) && bZ.be.kV(0, id), ht = (ht = (ht = (ht = (ht = (ht = (ht = (ht = (ht = (ht = (ht = (ht = ht.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			kS = colors, (kR = document.createElement("div")).style.position = "fixed", kR.style.top = "0", kR.style.left = "0", kR.style.width = "100%", kR.style.height = "100%", kR.style.backgroundColor = v.color.kZ(kS[0][0], kS[0][1], kS[0][
				2], .6), kR.style.zIndex = "6", kR.onclick = function(e8) {
				e8.target === kR && ka()
			},
			function(ht) {
				var u, kb = document.createElement("div");
				kb.style.position = "absolute", kb.style.display = "flex", kb.style.flexDirection = "column", kb.style.top = "50%", kb.style.left = "50%", kb.style.backgroundColor = kc(2), u = cu.cv.cw() ? v.w.kd(ao.min) : v.w.ke(.4);
				u = Math.max(u, 200), kb.style.width = v.w.hK(u), kb.style.height = v.w.hK(u), kb.style.transform = "translate(-50%, -50%)",
					function(kb, u) {
						var ki = document.createElement("div");
						ki.style.flex = "0 0 10%", ki.style.overflow = "hidden", ki.style.backgroundColor = kc(1), ki.style.color = kj(1, 7), ki.style.font = v.w.bA(1, .05 * u), ki.style.display = "flex", ki.style.alignItems = "center", ki.style
							.justifyContent = "center", ki.innerHTML = L(29), kb.appendChild(ki)
					}(kb, u),
					function(kb, ht, u) {
						var kk = document.createElement("div");
						kk.style.flex = "0 0 70%", kk.style.overflowY = "auto", kk.style.overflowX = "hidden", kk.style.whiteSpace = "pre-wrap", kk.style.wordWrap = "break-word", kk.style.padding = v.w.hK(.02 * u), kk.style.backgroundColor = kc(
							2), kk.style.color = kj(2, 8), kk.style.font = v.w.bA(0, .07 * u), kk.innerHTML = ht, kk.innerHTML = "<style>a { color: inherit; }</style>" + kk.innerHTML, kb.appendChild(kk)
					}(kb, ht, u),
					function(kb, u) {
						var kl = document.createElement("div"),
							km = (kl.style.display = "flex", kl.style.flexDirection = "row", kl.style.justifyContent = "space-between", kl.style.alignItems = "stretch", kl.style.backgroundColor = kc(3), kl.style.flex = "1", kl.style.padding = v.w
								.hK(.01 * u), kl.style.gap = v.w.hK(.01 * u), document.createElement("div")),
							kn = (km.style.flex = "0 0 60%", km.style.height = "100%", new dd(L(30, 0, 0, 1), function() {
								ka()
							}, kc(4), !1)),
							kn = (kn.button.style.width = "100%", kn.button.style.height = "100%", kn.button.style.color = kj(4, 9), kn.button.style.font = v.w.bA(1, .05 * u), km.appendChild(kn.button), document.createElement("div")),
							kp = (kn.style.flex = "0 0 15%", kn.style.height = "100%", kn.style.backgroundColor = kc(5), document.createElement("div")),
							kq = (kp.style.flex = "1", kp.style.height = "100%", new dd(L(31), function(e8) {
								return v.w.kr(e8), kT < 0 || bZ.af.kU(0) && (bZ.be.kV(1, kT), kT = -1), !0
							}, kc(6), !1));
						kq.button.style.width = "100%", kq.button.style.height = "100%", kq.button.style.color = kj(6, 10), kq.button.style.font = v.w.bA(1, .035 * u), kp.appendChild(kq.button), kl.appendChild(km), kl.appendChild(kn), kl
							.appendChild(kp), kb.appendChild(kl)
					}(kb, u), kR.appendChild(kb)
			}(ht), document.body.appendChild(kR)
	}
}

function kw() {
	var kx = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		ky = [b7.kz, b7.kz, b7.l0, b7.l1, b7.l2, b7.l3, b7.l4, b7.l0, b7.l5, b7.l6, b7.l7, b7.l8],
		l9 = [
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
			[1.4, 1.2],
			[1.4, 1.2]
		],
		lA = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function ln(lo, ij, lr) {
		for (var ku = lo.length - 1; 0 <= ku; ku--) {
			var c4 = lo[ku];
			0 === c4.id && c4.ij === ij && (c4.lE = "[Redacted Message]", lr) && (c4.ls = 1)
		}
	}
	this.lB = function(lC) {
		var lD, lF;
		return lC.id < 5 && (lD = "@" + bo.bi.bC(lC.ij, 5)), 0 === lC.id ? lD + ": " + lC.lE : 1 === lC.id ? (lF = "@" + bo.bi.bC(lC.target, 5), 0 === lC.lG ? 32768 <= lC.value ? lD + " voted with " + (lC.value - 32768 + 1) + " gold against " +
				lF + " to weaken the latter's admin position. 📉" : lD + " voted with " + (lC.value + 1) + " gold for " + lF + " to strengthen the latter's admin position. 💪" : 1 === lC.lG ? lD + " sent " + Math.floor(lC.value / 100) +
				" 🧈 gold to " + lF + "." : lD + " voted with " + (lC.value / 10).toFixed(1) + " points for " + lF + " to acknowledge the latter as clan leader. ✅") : 2 === lC.id ? 0 === lC.lG ? lD + " was 🔇 muted for 1 Hour." : 1 === lC.lG ?
			"The username of " + lD + " was ✂️ redacted. Duration: 1 Day" : lD + " 👢 was kicked." : 3 === lC.id ? lD + lH.lI(lC.lG, lH.lJ[lC.lG][lC.value]) + "@" + bo.bi.bC(lC.target, 5) + lH.lK(lC.lG, lH.lJ[lC.lG][lC.value]) : 4 === lC.id ?
			lD + lH.lI(5, lH.lJ[5][lC.lG]) + "@" + bo.bi.bC(lC.target, 5) + lH.lK(5, lH.lJ[5][lC.lG]) : 5 === lC.id ? lA[lC.lG] : 6 === lC.id ? "You are about to mention " + lC.value + " player" + (1 === lC.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * lC.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === lC.id ? lC.lE : void 0
	}, this.lL = function(lC, lM) {
		return {
			lC: lC,
			lE: lM,
			lN: 0,
			fontSize: 1,
			lO: 0,
			lP: lC.id ? b7.lQ : b7.b9
		}
	}, this.lR = function(player, lS) {
		return (2 === lS ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.lT = function(lU) {
		return ky[lU]
	}, this.lV = function(lU, lW) {
		return lU < 3 || 7 === lU ? l9[lU][0] : 4 === lU ? l9[lU][lW < 1 ? 0 : lW < 10 ? 1 : 2] : l9[lU][lW < 10 ? 0 : 1]
	}, this.lX = function(lW) {
		return 0 === lW
	}, this.lY = function(lS, ij) {
		for (var lZ = la.lb.lZ, lb = lZ[lS], n = lb.length, q = 0; q < n; q++)
			if (ij === lb[q].ij) return lb[q];
		for (var ku = 0; ku < lZ.length; ku++)
			if (lS !== ku)
				for (n = (lb = lZ[ku]).length, q = 0; q < n; q++)
					if (ij === lb[q].ij) return lb[q];
		return null
	}, this.lc = function(c4) {
		return !!la.ld && c4.ij === la.ld.ij
	}, this.le = function(lb, lf, lg) {
		var bm = [];
		loop: for (var q = lf; q < lg; q++) {
			var lh = v.bB.li(lb[q].username);
			if (lh) {
				for (var ku = bm.length - 1; 0 <= ku; ku--)
					if (lh === bm[ku].name) {
						bm[ku].hd++;
						continue loop
					} bm.push({
					name: lh,
					hd: 1
				})
			}
		}
		if (bm.sort(function(ca, ku) {
				return ku.hd - ca.hd
			}), 0 === bm.length) return "";
		for (var bJ = bm[0].name + ": " + bm[0].hd, q = 1; q < bm.length; q++) bJ += "   " + bm[q].name + ": " + bm[q].hd;
		return bJ
	}, this.lj = function(lU, lW, lk) {
		return 0 === kx[lU].length ? "Rank: " + (lW + 1) : kx[lU] + " Rank: " + (lW + 1) + (3 !== lU && lk < 100 ? "   " + kx[3] + " Rank: " + (lk + 1) : "")
	}, this.ll = function(ij) {
		for (var lm = la.af.lm, q = 0; q < lm.length; q++) ln(lm[q].lo, ij);
		ln(la.message.lp(), ij, 1), la.lq.ll(ij)
	}
}

function lt() {
	lu() ? (lv(), lw !== f.g && lx()) : ly()
}

function lx() {
	gY.lz(), gY.m0(cD.gz[lw]), gY.m0(cD.m1[lw]), au.m2(au.m3) && gY.m0(cD.m4[lw]), gY.m5(cD.m6[lw]), gY.m7(cD.m1[lw]), gY.m7(cD.m4[lw]), gY.m8(), gY.m9()
}

function lv() {
	mA = !0, gb.mB(mC, mD, mE), gb.mF(mC, mD), cD.fh[mC] += mG, gY.mH(), mI()
}

function lu() {
	return (lw === f.g ? mJ : mK)()
}

function mK() {
	var mL = mG * f.ix,
		mM = mN(),
		mO = mP(),
		mM = mL + 2 * mM + mO,
		mR = mS * mG;
	return mM < mR ? (mE -= mM, fI.mT(mC, mM, 13), mU(mM - mL, mO), !0) : mV && 0 === mO ? (mE -= mR, mR += v.c2.mW(mC, mM - mR + 1), fI.mT(mC, mR, 13), mU(mR - mL, 0), !0) : (mE -= mR, fI.mT(mC, mR, 13), mU(mR - mL, mO), !1)
}

function mU(mR, mO) {
	if (0 < mO) {
		if (mR <= mO) return fI.mT(lw, mR, 13), void gb.mX(lw, mC, mO - mR);
		gb.mX(lw, mC, 0), mR -= mO
	}
	mR = fD.fE(mR, 2), mR = Math.min(cD.mY[lw], mR), fI.mT(lw, mR, 13), cD.mY[lw] -= mR
}

function mP() {
	return gb.mZ(lw, mC)
}

function mN() {
	return fD.fE(mG * cD.mY[lw], 1 + fD.fE(10 * cD.fh[lw], 16))
}

function mJ() {
	var ma = mG * f.ix;
	return mE -= ma, fI.mT(mC, ma, 13), !0
}

function mI() {
	for (var q = mG - 1; 0 <= q; q--) cD.m6[mC].push(mb[q]), cD.gz[mC].push(mb[q]), a6.mc(mb[q], mC)
}

function md() {
	this.me = function() {
		for (var c9, aD, eh, mf = mg, mh = au.mi, ap = au.av, mj = ap - 1, h0 = au.ef - 1, hd = 0, aE = 1; aE < h0; aE++)
			for (eh = aE * ap, aD = 1; aD < mj; aD++) mh[c9 = eh + aD << 2] === mh[1 + c9] && mh[c9] === mh[2 + c9] && (hd++, mf[2 + c9] = 4);
		jh.mk = hd
	}, this.ml = function(mm, mn) {
		for (var mf = mg, ap = au.av, mj = ap - 1, h0 = au.ef - 1, id = 0, aE = 1; aE < h0; aE++)
			for (var eh = aE * ap, aD = 1; aD < mj; aD++) {
				var a3 = 2 + (eh + aD << 2);
				mf[a3] === mm && (! function(a3, id, mm, mn) {
					var n = 1,
						mf = mg,
						gy = a6.mp,
						mq = [a3],
						mr = id >> 8 << 1,
						ms = 255 & id;
					mf[a3 - 2] = mr, mf[a3 - 1] = ms, mf[a3] = 5;
					for (; n;) {
						for (var mt = [], q = 0; q < n; q++)
							for (var ax = mq[q], f6 = 0; f6 < 8; f6++) {
								var aV = ax + gy[f6];
								mf[aV] === mm && (mf[aV - 2] = mr, mf[aV - 1] = ms, mf[aV] = mn, mt.push(aV))
							}
						n = (mq = mt).length
					}
				}(a3, id, mm, mn), id = (id + 1) % 32768)
			}
	}, this.mu = function() {
		for (var mf = mg, ap = au.av, mj = ap - 3, h0 = au.ef - 3, mw = 12 * ap, aE = 3; aE < h0; aE++)
			for (var eh = aE * ap, aD = 3; aD < mj; aD++) {
				var a3 = 2 + (eh + aD << 2);
				2 !== mf[a3] || 2 === mf[a3 - 12] && 2 === mf[12 + a3] && 2 === mf[a3 - mw] && 2 === mf[a3 + mw] || (mf[a3 - 2] = 1 | mf[a3 - 2])
			}
	}
}

function mx() {
	var size, my;
	this.e = function() {
		size = f.j0, my = new Uint16Array(f.g);
		for (var iy = f.iy, q = f.j0 - 1; 0 <= q; q--) my[q] = iy + q
	}, this.bu = function() {
		cU.mz.bu();
		for (var q = size - 1; 0 <= q; q--)
			if (0 === cD.ft[my[q]]) {
				ca = void 0;
				var ca = q;
				size--, my[ca] = my[size]
			} else jn.bu(my[q])
	}, this.n1 = function(c9) {
		my[size++] = c9
	}
}

function n3() {
	this.kJ = function(bJ, eK, n4) {
		for (var n5 = [], n = bJ.length, max = 0, q = 0; q < n; q++) {
			var ff = bJ.charCodeAt(q);
			n5.push(ff), max = Math.max(max, ff)
		}
		var eO = max < 128 ? 7 : 16;
		for (n4.bY(eK, n), n4.bY(1, +(16 == eO)), q = 0; q < n; q++) n4.bY(eO, n5[q])
	}
}

function n6() {
	var n7, n8;

	function nG() {
		(n7 = new WebSocket("wss://territorial.io/s52/")).onopen = nJ, n7.onclose = function() {
			nK()
		}
	}

	function nJ() {
		if (n7 && n7.readyState === n7.OPEN) {
			var ap = new nM;
			ap.bX(1608), ap.bY(1, 0), ap.bY(6, 7), ap.bY(2, cu ? cu.id : 3), ap.bY(1, jV.nN ? 1 : 0), ap.bY(1, jV.nO ? 1 : 0), ap.bY(1, jV ? jV.nC : 0);
			for (var q = 0; q < n8.length && q < 228; q++) ap.bY(7, n8.charCodeAt(q) % 128);
			n7.send(ap.ba), nK()
		}
	}

	function nK() {
		n7 && (n7.onclose = null, n7.onopen = null, n7 = null)
	}
	window.addEventListener("error", function n9(e8) {
		n8 = "";
		try {
			var nA = function(e8) {
				if (!e8.error) return 0;
				var stack = e8.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, nL = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = nL.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(e8);
			return 0 === nA || e8.lineno <= 3 ? void console.log("Error: External Code | " + nA) : (window.removeEventListener("error", n9), n8 = e8.lineno + " " + e8.colno + "|" + nA, __fx.reportError(e8, n8), alert("Error:\n" + e8
				.filename + " " + e8.lineno + " " + e8.colno + " " + e8.message))
		} catch (e8) {
			n8 = "SE|" + n8 + "|" + e8, console.log(n8), alert(n8)
		}
		nG()
	})
}

function nP(nQ, nR, nS, nT, nU, nV) {
	var nW = document.createElement("div"),
		nX = document.createElement("div"),
		nY = document.createElement("div"),
		nZ = document.createElement("div"),
		na = document.createElement("div"),
		nb = document.createElement("div"),
		nc = document.createElement("div"),
		nd = document.createElement("div"),
		ne = document.createElement("span"),
		nf = document.createElement("div");
	this.ng = new nh(nU, nV), this.ni = new nj(nV), this.nk = [nQ, nR, nS, nT], this.nr = function(ns) {
		ns = (ns / 10).toFixed(1) + "%";
		nd.style.width = ns, ne.innerHTML = ns
	}, this.nt = function() {
		this.ni.eD(nb), this.ng.show(nb)
	}, this.nu = function() {
		this.ng.eD(nb), this.ni.show(nb)
	}, this.nv = function() {
		return nX
	}, this.show = function() {
		document.body.appendChild(nW)
	}, this.eD = function() {
		dk.removeChild(document.body, nW)
	}, this.resize = function(nw) {
		var nx = 1 - .4 * cu.cv.cw() * (ao.ap > 1.6 * ao.ar),
			ny = v.w.ke(.05 * nx),
			nz = ao.ar > ao.ap,
			o0 = v.w.ke(.06 * nx + .03 * nz),
			o1 = v.w.ke(.08 * nx + .03 * nz),
			o2 = v.w.ke(.04 + .02 * nz),
			nz = v.w.ke(.02 * nx + .01 * nz),
			o4 = v.w.ke(.025);
		nW.style.font = v.w.bA(0, o4), na.style.font = v.w.bA(0, .9 * o4), nf.style.font = v.w.bA(0, .9 * o4), nx < 1 && (o4 = v.w.bA(0, nx * o4), nY.style.font = o4, na.style.font = o4, nf.style.font = o4, nc.style.font = o4, nZ.style.font =
			o4), nX.style.height = v.w.hK(ny), nX.style.font = v.w.bA(0, .72 * ny), v.w.hL(nX, 2), nY.style.top = v.w.hK(ny), nY.style.height = v.w.hK(o1), v.w.hL(nY, 2), nZ.style.font = v.w.bA(0, nx * v.w.ke(.02)), nZ.style.top = v.w.hK(ny +
			o1), nZ.style.height = v.w.hK(o2), v.w.hL(nZ, 2), na.style.top = v.w.hK(ny + o1 + o2), na.style.height = v.w.hK(o0), v.w.hL(na, 2), nb.style.top = v.w.hK(ny + o1 + o2 + o0), nb.style.height = v.w.hK(ao.ar / ao.hG - ny - o1 - 2 * o0 -
				o2 - nz), nc.style.top = v.w.hK(ao.ar / ao.hG - o0 - nz), nc.style.height = v.w.hK(nz), v.w.hL(nc, 8), ne.style.font = v.w.bA(0, .8 * nz), nf.style.top = v.w.hK(ao.ar / ao.hG - o0), nf.style.height = v.w.hK(o0), v.w.hL(nf, 8), nQ
			.resize(nY), nR.resize(nY), nS.resize(nY), nT.resize(nY), nw ? this.ng.resize(nb) : this.ni.resize()
	};
	nU = this;
	nW.style.position = "absolute", nW.style.top = "0", nW.style.left = "0", nW.style.width = "100%", nW.style.height = "100%", nW.style.backgroundColor = b7.nl, nm.nn() || (nW.style.backdropFilter = "blur(4px)", nW.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (nW.style.display = "none"), nX.style.position = "absolute", nX.style.top = "0", nX.style.left = "0", nX.style.width = "100%", nX.style.display = "flex", nX.style.alignItems = "center";
	for (var a8 = [nY, nZ, na, nf], q = 0; q < a8.length; q++) a8[q].style.position = "absolute", a8[q].style.left = "0", a8[q].style.width = "100%", v.w.no(a8[q]);
	nb.style.position = "absolute", nb.style.left = "0", nb.style.width = "100%", nb.style.font = "inherit", nc.style.position = "absolute", nc.style.left = "0", nc.style.width = "100%", nd.style.position = "absolute", nd.style.top = "0", nd.style
		.left = "0", nd.style.height = "100%", nd.style.width = "50%", nd.style.backgroundColor = b7.fX, ne.innerHTML = "", ne.style.position = "absolute", ne.style.top = "50%", ne.style.left = "50%", ne.style.transform = "translate(-50%, -50%)", nX
		.appendChild(function() {
			var es = document.createElement("h1");
			return es.textContent = L(32), es.style.margin = "0 auto 0.15em auto", es.style.fontFamily = "Arial Black, system-ui", es.style.fontSize = "inherit", es.style.fontWeight = "inherit", es
		}()), nY.appendChild(nQ.h6), nZ.appendChild(nR.h6), na.appendChild(nS.h6), nc.appendChild(nd), nc.appendChild(ne), nf.appendChild(nT.h6), nW.appendChild(nX), nW.appendChild(nY), nW.appendChild(nZ), nW.appendChild(na), nW.appendChild(nb), nW
		.appendChild(nc), nW.appendChild(nf), nU.ni.show(nb)
}

function o6() {
	this.o7 = function(o8, player) {
		c5.o9(f.al, player, o8), bZ.iL.oA(o8, player)
	}, this.oB = function(player) {
		c5.oC(player, 0), bZ.iL.oD(player)
	}, this.oE = function(oF, player) {
		c5.oG(oF, player), bZ.iL.oH(oF, player)
	}, this.oI = function() {
		f.j5 || f.g1 || bZ.oJ.oI()
	}
}

function oK() {
	var dY, dZ, ds;

	function oN() {
		var hd;
		1 === f.data.gameMode ? (f.data.teamPlayerCount || (f.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), f.jK.jT()), hd = v.aN.oS(f.data.teamPlayerCount, 0), f.data.numberTeams = hd) : (2 === f.data.botDifficultyType && (f
			.data.botDifficultyType = 0), 1 === f.data.spawningType && (f.data.spawningType = 0))
	}

	function de() {
		1 !== f.data.gameMode && (f.data.teamPlayerCount = null), oT(), f.data.canvas = null, dk.e3(5, 5)
	}

	function oT() {
		jr.kG.e(), bK.iF.bH(156, jr.kI.kJ())
	}

	function oL() {
		f.data.isReplay = 0, oT(), f.jK.oU(), dV.oV(), f.jK.oW(), f.data.canvas = 2 === f.data.mapType ? au.oP : null, f.jO(), f.jM = 1
	}

	function on() {
		oN();
		for (var a8 = [oa(), ob(), oc()], q = 3; q < 6; q++) dk.removeChild(dZ.h7, dZ.h8[q].h6), dZ.h8[q] = a8[q - 3], dZ.h7.appendChild(dZ.h8[q].h6);
		dZ.resize()
	}

	function oa() {
		var oo, dx = new dy;
		return dx.dz(L(39)), oo = 0 === f.data.gameMode ? [L(7), L(9)][f.data.colorsType] : f.data.numberTeams + " Team" + (1 === f.data.numberTeams ? "" : "s"), dx.op(oo), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(21)
		}).button])), dx
	}

	function ob() {
		var dx = new dy,
			a8 = (dx.dz(L(40)), [L(41) + ": " + jn.oq[f.data.botDifficultyValue], L(42), L(43), L(9)]);
		return dx.op(a8[f.data.botDifficultyType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(25)
		}).button])), dx
	}

	function oc() {
		var dx = new dy,
			a8 = (dx.dz("Spawning"), [L(7), L(8), L(9)]);
		return dx.op(a8[f.data.spawningType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(24)
		}).button])), dx
	}
	this.show = function() {
		dY.show(), this.resize(), dY.dg.scrollTop = dk.af.i0[0]
	}, this.eD = function() {
		dk.af.i0[0] = dY.dg.scrollTop, dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc("🔧 " + L(33), [new dd("⬅️ " + L(5), de), new dd(L(34), oL)]), oN(), f.data.canvas || (2 === f.data.mapType ? f.data.canvas = au.oP : 1 === f.data.mapType ? f.data.canvas = au.oQ(au.oR(f.data), 0).oP : (f.data.mapType = 0, f
		.data.passableWater = f.data.passableMountains = 1, f.data.canvas = au.oQ(au.oR(f.data), f.data.mapSeed).oP)), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy,
			k = (dx.dz(L(35)), f.data.canvas);
		k.style.width = "100%", dx.e4({
			e8: k
		}), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(20)
		}).button])), ds.push(dx)
	}(ds = []), function(ds) {
		var dx = new dy;
		dx.dz(L(37)), dx.e4(new e7({
			t: -1,
			value: f.data.playerCount
		}, 1, 0, function(e8) {
			var playerCount = fD.ok(Math.floor(e8.target.value), 1, 512);
			e8.target.value = f.data.playerCount = playerCount, 1 === f.data.gameMode && (e8 = v.aN.oS(f.data.teamPlayerCount, 0), f.jK.jT(), v.aN.oS(f.data.teamPlayerCount, 0) !== e8) && on()
		})), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy;
		dx.dz(L(38)), dx.e1(new e2({
			e0: ["Battle Royale", "Teams"],
			value: f.data.gameMode
		}, function(t) {
			f.data.gameMode !== t && (1 === (f.data.gameMode = t) && (f.data.colorsData || (f.data.colorsData = new Uint32Array(1)), f.data.colorsData[0] = 258049), on())
		})), ds.push(dx)
	}(ds), ds.push(oa()), ds.push(ob()), ds.push(oc()), function(ds) {
		var dx = new dy,
			a8 = (dx.dz(L(44)), [L(45), L(46), L(9)]);
		dx.op(a8[f.data.playerNamesType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(23)
		}).button])), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy,
			a8 = (dx.dz(L(47)), [L(48), L(41) + ": " + f.data.aIncomeValue, L(9)]);
		dx.op(a8[f.data.aIncomeType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(22)
		}).button])), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy,
			a8 = (dx.dz(L(49)), [L(48), L(41) + ": " + f.data.tIncomeValue, L(9)]);
		dx.op(a8[f.data.tIncomeType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(26)
		}).button])), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy,
			a8 = (dx.dz(L(50)), [L(48), L(41) + ": " + f.data.iIncomeValue, L(9)]);
		dx.op(a8[f.data.iIncomeType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(27)
		}).button])), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy,
			a8 = (dx.dz(L(51)), [L(48), L(41) + ": " + f.data.sResourcesValue, L(9)]);
		dx.op(a8[f.data.sResourcesType]), dx.e4(new e9([new dd(L(36), function() {
			dk.e3(28)
		}).button])), ds.push(dx)
	}(ds), function(ds) {
		var dx = new dy;
		dx.dz(L(52)), dx.e4(new e9([new dd(L(53), function() {
			dk.i6(), f.jK.or(), dk.af.i0[0] = 0, dk.e3(19)
		}).button])), dx.e4(new e9([new dd(L(54), function() {
			os.ot()
		}).button])), dx.e4(new e9([new dd(L(55), function() {
			return os.ou(), !0
		}).button])), ds.push(dx)
	}(ds), ds))
}

function ov() {
	var ow, ox;
	this.e = function() {
		ow = 1, ox = 0
	}, this.bu = function() {
		0 < ow && (ox = 0 === ox ? c0.fr + 16 : ox, ow = (ow -= .001 * (c0.fr - ox)) < 0 ? 0 : ow, ox = c0.fr, c0.d1 = !0)
	}, this.aR = function() {
		0 < ow && (b5.fillStyle = "rgba(0,0,0," + ow + ")", b5.fillRect(0, 0, ao.ap, ao.ar))
	}
}

function p0() {
	var p1 = new Uint8Array(78);
	this.e = function() {
		var q;
		for (p1[50] = 37, q = 0; q < 10; q++) p1[q + 3] = q + 1;
		for (q = 0; q < 26; q++) p1[q + 20] = q + 11, p1[q + 52] = q + 38
	}, this.p2 = function(bJ) {
		return bJ.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.p3 = function(bJ, size) {
		if ((bJ = this.p2(bJ)).length > size) return bJ.substring(0, size);
		for (; bJ.length < size;) bJ = "-" + bJ;
		return bJ
	}, this.p4 = function(bJ) {
		for (var p5 = p1, n = bJ.length, a8 = new Uint8Array(n), q = 0; q < n; q++) a8[q] = p5[bJ.charCodeAt(q) - 45];
		return a8
	}, this.p6 = function(p7) {
		bW.bX(6 * p7.length), this.p8(p7), eM.e(bW.ba)
	}, this.p8 = function(p7) {
		for (var n = p7.length, ap = bW, q = 0; q < n; q++) ap.bY(6, p7[q])
	}, this.bq = function(bJ) {
		this.p8(this.p4(bJ))
	}, this.bj = function(bJ, size) {
		this.p8(this.p4(this.p3(bJ, size)))
	}, this.p9 = function(bJ, size) {
		for (var a8 = this.p4(this.p3(bJ, size)), ff = 0, pA = 1, q = a8.length - 1; 0 <= q; q--) ff += pA * a8[q], pA *= 64;
		return ff
	}
}

function pB() {
	this.pC = 0, this.pD = 0, this.pE = 0, this.pF = 0, this.pG = 0, this.pH = 0, this.pI = [0, 0, 0, 0], this.pJ = function() {
		this.pC = jx.pK(), this.pD = jx.pL(), this.pE = -this.pC, this.pF = -this.pD, this.pG = ao.ap / ay, this.pH = ao.ar / ay, this.pI[0] = Math.floor(this.pE), this.pI[1] = Math.floor(this.pF), this.pI[2] = Math.floor(this.pI[0] + this.pG +
			1), this.pI[3] = Math.floor(this.pI[1] + this.pH + 1), jj.pM = !0
	}
}

function pN() {
	var iP, pO, pP, pR;

	function pQ(q) {
		dk.e3(8, dk.iI, new iB(21, {
			bT: q,
			bU: 0,
			bV: 10
		}))
	}
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), pO.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, pP = [new dd(L(56), function() {
		pQ(1)
	}, 0, 0, 1), new dd(L(57), function() {
		pQ(2)
	}, 0, 0, 1), new dd(L(58), function() {
		pQ(3)
	}, 0, 0, 1), new dd(L(59), function() {
		pQ(0)
	}, 0, 0, 1), new dd(L(60), function() {
		pQ(9)
	}, 0, 0, 1), new dd(L(61), function() {
		pQ(10)
	}, 0, 0, 1), new dd(L(62), function() {
		pQ(11)
	}, 0, 0, 1), new dd(L(63), function() {
		pQ(13)
	}, 0, 0, 1)], pR = [new dd("⬅️ " + L(5), function() {
		dk.dm()
	})], iP = new dc(L(64), pR), pO = new pS(pP, iP.dg)
}

function pT() {
	var pU = 501,
		pV = (this.fR = new Uint32Array(pU), this.fS = new Uint32Array(pU), this.fc = new Uint16Array(pU), this.fJ = 0, 1),
		kS = 0;

	function pW(self) {
		self.max.fill(0)
	}

	function pj(self, q) {
		self.max[0] = Math.max(self.fR[q], self.max[0]), self.max[1] = Math.max(self.fS[q], self.max[1]), self.max[2] = Math.max(self.fc[q], self.max[2])
	}
	this.max = [0, 0, 0], this.fu = 0, this.fg = new Array(21), this.fe = null, this.f4 = function() {
		this.fe = [L(65), L(66), L(67), L(68), L(69), L(70), L(71), L(72), L(49), L(50), L(73), L(74), L(75), L(76), "", L(77), L(78), L(79), L(47), L(80), L(81)]
	}, this.e = function() {
		this.fJ = 0, pV = 1, this.fu = 0, kS = 0, pW(this), this.fg.fill(0)
	}, this.pX = function(player, pY) {
		v.c2.pZ(player) && (this.fg[0] += pY + 1, this.fg[1]++, this.fg[12] += a9.eT[1])
	}, this.pa = function(player, pb) {
		__fx.donationsTracker.logDonation(player, pb, a9.eT[0], fv.a4G());
		player === f.al && (c5.pa(a9.eT[0], a9.eT[1], pb), this.fg[12] += a9.eT[1], this.fg[16] += a9.eT[0]), pb === f.al && (c5.pc(a9.eT[0], player), this.fg[10] += a9.eT[0])
	}, this.pd = function(player) {
		v.c2.pZ(player) && (this.fg[2]++, this.fg[12] += a9.eT[1])
	}, this.pe = function(player) {
		v.c2.pZ(player) && (this.fg[19]++, this.fg[12] += a9.eT[1])
	}, this.pf = function(player) {
		v.c2.pZ(player) && this.fg[20]++
	}, this.mT = function(player, pg, t) {
		v.c2.pZ(player) && (this.fg[t] += pg)
	}, this.bu = function() {
		var self;
		this.fu || 0 < kS-- || ((self = this).fR[self.fJ] = cD.fh[f.al], self.fS[self.fJ] = cD.mY[f.al], self.fc[self.fJ] = jZ.pi(f.al), pj(self, self.fJ), self.fJ++, self.fJ === pU && function(self) {
			pW(self), pj(self, 0), self.fJ = 1 + fD.fE(pU, 2);
			for (var q = 1; q < self.fJ; q++) self.fR[q] = self.fR[2 * q], self.fS[q] = self.fS[2 * q], self.fc[q] = self.fc[2 * q], pj(self, q);
			pV *= 2
		}(self), kS = pV - 1, jt.fM(), 0 === cD.ft[f.al] && (self.fu = c0.c1()))
	}
}

function e2(pl, pm) {
	this.pn = [];
	var po = this.pn;

	function click() {
		for (var q = 0; q < po.length; q++) po[q].textContent = po[q].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var t = parseInt(this.name);
		void 0 !== pl.t && bK.iF.bH(pl.t, t), pm && pm(t)
	}
	for (var pp, n = pl.e0.length, q = 0; q < n; q++)(pp = document.createElement("p")).textContent = "⚪ " + pl.e0[q], pp.style.margin = "0", pp.name = "" + q, pp.style.cursor = "pointer", pp.style.fontSize = "1em", pp.addEventListener("click",
		click), po.push(pp);
	po[pl.value].textContent = po[pl.value].textContent.replace("⚪", "🟢")
}

function pq() {
	var iP, iQ, ds;
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), iQ.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(L(82), [new dd("⬅️ " + L(5), function() {
		dk.dm()
	})]), iQ = new df(iP.dg, ((ds = []).push(function() {
		function pw() {
			px.button.textContent = L(86), pt.e8.readOnly = !1, pv.e8.readOnly = !1, py.pz(1), py.button.style.color = b7.b9
		}
		var dx = new dy,
			ps = (dx.op(bZ.af.iE("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", dx.dz(L(83)), new e7({
				value: bK.buffer.data[105].value,
				t: -1
			})),
			pt = (ps.e8.readOnly = !0, dx.e4(ps), dx.dz(L(84), "0.8em"), new e7(bK.buffer.data[148], 0, void 0, function(e8) {
				pu(bK.buffer.data[149].value, e8.target.value)
			})),
			pv = (dx.e4(pt), dx.dz(L(85), "0.8em"), new e7(bK.buffer.data[149], 1, void 0, function(e8) {
				pu(e8.target.value, bK.buffer.data[148].value)
			})),
			px = (dx.e4(pv), new dd(L(86), function(e8) {
				return e8.textContent === L(86) ? (e8.textContent = L(87), pt.e8.readOnly = !0, pv.e8.readOnly = !0, py.pz(0), py.button.style.color = b7.l6, bK.iF.bH(149, pv.e8.value), pu(bK.buffer.data[149].value, bK.buffer
					.data[148].value)) : pw(), !0
			})),
			py = (dx.e4(new e9([px.button])), new dd(L(88), function(e8) {
				return pt.e8.readOnly && bZ.af.kU(0) && (v.w.kr(e8), pw(), bZ.q0.q1({
					action: 0,
					ij: bK.buffer.data[148].value,
					value: parseInt(bK.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			q2 = dx.iY(),
			pu = (dx.iY(L(89)).style.fontWeight = "bold", function(ff, bJ) {
				q2.innerHTML = dk.af.iK(ff, bK.buffer.data[105].value, bJ)
			});
		return dx.e4(new e9([py.button])), pu(bK.buffer.data[149].value, bK.buffer.data[148].value), dx
	}()), ds))
}

function q3() {
	this.size = 0, this.t = 0, this.ba = null, this.e = function(ba) {
		this.t = 0, this.ba = ba, this.size = ba.length
	}, this.q4 = function() {
		this.ba = null
	}, this.eN = function(size) {
		for (var ff = 0, ba = this.ba, bQ = this.t + size - 1, q = this.t; q <= bQ; q++) ff |= (ba[q >> 3] >> 7 - (7 & q) & 1) << bQ - q;
		return this.t += size, this.t > 8 * this.size && console.error("Unwrapper Overflow"), ff
	}, this.q5 = function(size) {
		var ku = size >> 1;
		return (1 << ku) * this.eN(size - ku) + this.eN(ku)
	}, this.q6 = function(q7) {
		return this.size === bW.q8(q7)
	}, this.q9 = function(eK, qA, qB) {
		var hd = this.eN(eK);
		if (!hd) return null;
		for (var eK = Math.max(hd, qB), a8 = new(qA <= 8 ? Uint8Array : qA <= 16 ? Uint16Array : Uint32Array)(eK), q = 0; q < hd; q++) a8[q] = this.eN(qA);
		qB = a8[hd - 1];
		return qB && a8.fill(qB, hd), a8
	}, this.qC = function(eK, qD, qB) {
		var hd = this.eN(eK);
		if (!hd) return null;
		for (var eK = Math.max(hd, qB), a8 = new Array(eK), q = 0; q < hd; q++) a8[q] = this.qE(qD);
		return a8.fill(a8[hd - 1], hd), a8
	}, this.qE = function(eK) {
		return bh.bp.iH(this.eN(eK))
	}, this.qF = function() {
		var bJ = bo.bi.qG(bo.bi.qH(this.eN(30))),
			bJ = v.bB.qI(bJ, "_", "/");
		bJ = v.bB.qI(bJ, "-", "+");
		for (var qJ = "";
			(bJ.length + qJ.length) % 4;) qJ += "=";
		bJ = "data:image/png;base64," + bJ + qJ;
		var qK = new Image;
		qK.onload = function() {
			jr.qL.qM(qK), qK.onload = null, qK = null
		}, qK.src = bJ
	}
}

function jg() {
	(qN = void 0 === qN ? document.createElement("canvas") : qN).width = au.av, qN.height = au.ef, ju = qN.getContext("2d", {
		alpha: !0
	}), jv = mg = null, jv = ju.getImageData(0, 0, au.av, au.ef), mg = jv.data, v.aN.qO(mg)
}

function qP() {
	var input;

	function qQ(e8) {
		(e8 = e8.target.files) && 0 < e8.length && qT.qU(e8[0])
	}

	function qY(e8) {
		var eF = new Image;
		eF.onload = qZ, eF.src = e8.target.result
	}

	function qZ(e8) {
		var e8 = e8.target,
			ap = e8.width,
			ar = e8.height,
			qa = bK.buffer.data[162].value,
			max = Math.min(au.dq, qa),
			qa = (max = cu.id || nm.nn() ? Math.min(1400, qa) : max) / Math.max(ap, ar);
		if (qa < 1 && (ap = Math.floor(qa * ap + .125), ar = Math.floor(qa * ar + .125)), max < ap || max < ar || ap < 10 || ar < 10) qa = "Invalid Image Dimensions!", cu.qc ? cu.qc.showToast(qa) : alert(qa);
		else {
			for (var max = document.createElement("canvas"), qa = (max.width = ap, max.height = ar, max.getContext("2d")), qd = document.createElement("canvas"), qe = (qd.width = e8.width, qd.height = e8.height, qd.getContext("2d")), e8 = (qe
					.drawImage(e8, 0, 0), qe.getImageData(0, 0, qd.width, qd.height)), qe = qa.createImageData(ap, ar), src = e8.data, qh = qe.data, qi = qd.width / ap, qj = qd.height / ar, aE = 0; aE < ar; aE++)
				for (var aD = 0; aD < ap; aD++) {
					var qk = Math.floor(aD * qi),
						qk = 4 * (Math.floor(aE * qj) * qd.width + qk),
						qn = 4 * (aE * ap + aD);
					qh[qn] = src[qk], qh[1 + qn] = src[1 + qk], qh[2 + qn] = src[2 + qk], qh[3 + qn] = 255
				}
			qa.putImageData(qe, 0, 0), 20 === dk.iI && dk.i9().qZ(max)
		}
	}
	this.e = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = qQ
	}, this.q4 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.qR = function() {
		input.click()
	}, this.qU = function(qV) {
		var a8 = qV.name.split("."),
			a8 = a8[a8.length - 1].toLowerCase();
		"gif" !== a8 && "jpg" !== a8 && "jpeg" !== a8 && "png" !== a8 || ((a8 = new FileReader).onload = qY, a8.readAsDataURL(qV))
	}
}

function qo() {
	var ar, canvas, fY, qp, qq, qr, qs, qt, qu, qv, qw, qy, qx = !1,
		k = (this.f0 = !1, this.ap = 0, new Array(2)),
		qz = 0;

	function fM() {
		var ap = gu.ap,
			aL = (qt = !1, r4(fY, ap, ar), Math.floor(ap / 2));
		1 === qp ? (fY.fillStyle = b7.r5, fY.fillRect(aL, 0, aL, ar)) : -1 === qp && (fY.fillStyle = b7.dH, fY.fillRect(0, 0, aL, ar)), r6(fY, ap, ar, 2);
		var aL = (aL = Math.floor(.25 * ar)) < 2 ? 2 : aL,
			r8 = (fY.fillStyle = b7.r7, Math.floor((ar - 4) * qq[1] / qr[1]));
		0 < r8 && fY.fillRect(2, ar - 2 - r8, aL, r8), 0 < (r8 = Math.floor((ar - 4) * qq[0] / qr[0])) && fY.fillRect(ap - 2 - aL, ar - 2 - r8, aL, r8);
		aL = (aL = Math.floor(ar / 8)) < 2 ? 2 : aL, rA(fY, Math.floor(.4 * ar), 0, ar, aL, .5, !1), rA(fY, Math.floor(ap - 1.4 * ar), 0, ar, aL, .5, !0), r8 = 1.1 * ar / k[0].width;
		fY.imageSmoothingEnabled = !0, fY.setTransform(r8, 0, 0, r8, (ap - r8 * k[0].width) / 2, -.05 * ar), fY.drawImage(k[+qx], 0, 0), fY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function rF() {
		qy = -1, qx = rG.rH(), c5.rI(257), c5.rJ(qx), gu.f0 = !0, qt = !0, qu = 360;
		for (var ff, d8 = 0, q = cH.cI - 1; 0 <= q; q--) v.c2.rO(cH.cK[q]) || (d8 += cD.fh[cH.cK[q]]);
		qx ? qr[0] = Math.max(fD.fE(3 * d8, 4), 1) : f.j ? (ff = 9 === f.jA ? 8 === l.m[cN.cO()] ? 80 : (ff = fD.fE(100 * cN.hV(), f.j7), fD.fE(fD.ok(1550 - 11 * ff, 400, 1e3), 10)) : (ff = fD.fE(100 * cN.hV(), f.j7), fD.fE(fD.ok(1600 - 12 * ff, 400,
			1e3), 10)), ff = fD.fE(ff * d8, 100), qr[0] = Math.max(ff, 1)) : 8 === f.jA ? qr[0] = Math.max(fD.fE(3 * d8, 4), 1) : qr[0] = Math.max(fD.fE(3 * d8, 5), 1), qr[1] = Math.max(d8 - qr[0], 1)
	}

	function rB() {
		qw = c0.c1(), qt = !0, qu = qp = 0, qs = [], gu.f0 = !1, c5.rS(247), qq[0] = qq[1] = 0, c5.rI(673)
	}

	function pL() {
		return g5.rZ(c5.ra()) ? __fx.settings.keybindButtons ? g5.aE - 2 * (ar + f7.gap) : g5.aE - ar - f7.gap : fG.rZ(c5.rb()) ? fG.pL() - ar - f7.gap : ao.ar - ar - rc.rd() * f7.gap
	}
	this.f4 = function() {
		for (var q = 0; q < 2; q++) k[q] = v.canvas.r0(r1.get(3), 8 - q, b7.r2), k[q] = v.canvas.r3(k[q])
	}, this.e = function() {
		qw = -1e4, qv = qz = 0, qy = -1, this.f0 = !1, qt = qx = !1, qq = [qp = qu = 0, 0], qr = [1, 1], qs = [], this.resize()
	}, this.resize = function() {
		ar = g5.ar, this.ap = 4 * ar, (canvas = document.createElement("canvas")).width = this.ap, canvas.height = ar, fY = canvas.getContext("2d", {
			alpha: !0
		}), fM()
	}, this.kD = function() {
		qt && fM()
	}, this.dD = function(aD, aE) {
		return !!this.f0 && !(aD < ao.ap - this.ap - f7.gap || aE < pL() || (f.g1 || this.gv(f.al) && (fF.g2 && fF.fH(), gL.gM.gw(aD > ao.ap - f7.gap - this.ap / 2 ? 1 : 0)), 0))
	}, this.bu = function() {
		0 < qv ? 0 === --qv && rB() : this.f0 ? 180 == --qu && 3 * qq[0] < qr[0] ? rB() : qq[0] >= qr[0] ? qx ? jQ.rP.rQ() : jQ.rP.rR() : qq[1] >= qr[1] ? qv = 4 : qu <= 0 && rB() : ! function() {
			var rL = c0.c1();
			if (rL % 40 == 14) {
				if (qz) return !(rL < qz) && !(rL < qw + 535) && (qz = rL + 1071, v.c2.rM()) ? (rF(), 1) : 0;
				(1 === cH.cI || (f.j ? cN.hV() : cD.fh[cP[0]]) >= fD.fE(96 * f.j7, 100)) && (qz = rL + 535)
			}
			return
		}() && 0 <= qy && (c5.cC(250, L(90, [cD.cE[qy]]), 673, qy, b7.b9, b7.cF, -1, !0), rF())
	}, this.rT = function() {
		this.f0 && qq[0] < qr[0] && rB()
	}, this.rU = function(player, rV) {
		var rW = L(rV ? 91 : 92, [cD.cE[player]]),
			rW = (c5.cC(450, rW, 257, player, rV ? b7.rX : b7.rY, b7.cF, -1, !0), qs.push(player), qt = !0, f.j5 ? Math.max(qr[0], qr[1]) : cD.fh[player]),
			rW = Math.max(rW, 1);
		rV ? qq[0] += rW : qq[1] += rW, player === f.al && (qp = rV ? 1 : -1)
	}, this.aR = function() {
		var aE;
		this.f0 && (aE = pL(), b5.drawImage(canvas, ao.ap - this.ap - f7.gap, aE))
	}, this.gx = function(player) {
		if (0 !== qu) return !1;
		if (!v.c2.g3(1)) return !1;
		if (!v.c2.g4(player)) return !1;
		if (10 <= cM[player] && !v.c2.re(player, 9)) return !1;
		if (!f.j5) {
			player = c0.c1();
			if (player < qw + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.gv = function(c9) {
		if (!v.c2.g3(1)) return !1;
		if (!v.c2.g4(c9)) return !1;
		if (!this.f0) return !1;
		for (var q = qs.length - 1; 0 <= q; q--)
			if (qs[q] === c9) return !1;
		return !0
	}, this.gt = function(player) {
		qy = player
	}
}

function rg() {
	this.bu = function(ba) {
		var id, eh, bQ;
		for (eM.e(ba), eM.t += 2, bQ = 8 * eM.size; eM.t + 8 <= bQ;) id = eM.eN(4), eh = eM.eN(9), 0 === id ? this.rh(id, eh, eM.eN(22)) : 1 === id ? this.rh(id, eh, eM.eN(10), eM.eN(10)) : 2 === id ? this.rh(id, eh, eM.eN(10), eM.eN(9)) : 3 ===
			id ? this.rh(id, eh, eM.eN(10), eM.eN(27)) : 4 === id ? this.rh(id, eh, eM.eN(10), eM.eN(16)) : 5 === id || 6 === id ? this.rh(id, eh, eM.eN(10)) : 7 === id ? this.rh(id, eh, eM.eN(1)) : 10 === id ? this.rh(id, eh, eM.eN(20), eM.eN(
				22)) : this.rh(id, eh)
	}, this.je = [], this.ri = function() {
		for (var rk = 0, rl = 0, rm = 0, rn = 0, ro = 0, rp = 0, q = 0; q < 512; q++) rk += cD.ft[q], rl += cD.fh[q], rm += cD.mY[q], rn += ae.af.rq[q];
		ro += ae.af.am, rp += cH.cI, this.je.push(rm % 1073741824 * 4 + (rk + rl + rn + ro + rp) % 4)
	}, this.rh = function(id, eh, ej, el) {
		0 === id ? gL.rr.gN(eh, ej) : 1 === id ? gL.rr.ga(eh, ej, el) : 2 === id ? gL.rr.rs(eh, ej, el) : 3 === id ? gL.rr.gj(eh, ej, el) : 4 === id ? gL.rr.gm(eh, ej, el) : 5 === id ? gL.rr.rt(eh, ej) : 6 === id ? gL.rr.ru(eh, ej) : 7 === id ?
			gL.rr.gw(eh, ej) : 8 === id ? gL.rr.rv(eh) : 9 === id ? gL.rr.rw(eh) : 10 === id && gL.rr.gV(eh, ej >> 10, el, ej % 1024)
	}
}

function rx() {
	this.ry = function() {
		bW.bX(39), bW.bY(1, 0), bW.bY(6, 16), bZ.be.rz(), bZ.af.send(0, bW.ba)
	}, this.s0 = function(s1) {
		bW.bX(127), bW.bY(1, 0), bW.bY(6, 17), bh.bi.bj(bK.buffer.data[105].value, 5), bh.bi.bj(bK.buffer.data[106].value, 15), bZ.af.send(s1, bW.ba)
	}, this.s3 = function() {
		bW.bX(97), bW.bY(1, 0), bW.bY(6, 18), bh.bi.bj(bK.buffer.data[110].value, 15), bZ.af.send(0, bW.ba)
	}, this.s4 = function(s5) {
		var n = s5.bJ.length;
		bW.bX(21 + 16 * n), bW.bY(1, 0), bW.bY(6, 29), bW.bY(6, s5.action), bW.bY(8, n), bo.bp.bq(s5.bJ), bZ.af.send(0, bW.ba)
	}, this.s6 = function(s7, colors, s8, ht) {
		s9.e(), s9.bY(1, 0), s9.bY(6, 16), s9.bY(20, Math.min(s7, 1e6));
		for (var q = 0; q < 11; q++)
			for (var ca = 0; ca < 3; ca++) s9.bY(8, colors[q][ca]);
		s7 = sB.data.sC(s8.trim());
		s9.bY(8, -1 === s7 ? 255 : s7), bo.sD.kJ(ht.trim().substring(0, 180), 8, s9), bZ.af.send(0, s9.sE())
	}, this.sF = function(data) {
		bW.bX(43), bW.bY(1, 0), bW.bY(6, 25), bW.bY(6, data.action), bh.bi.bj(data.ij, 5), bZ.af.send(0, bW.ba)
	}, this.q1 = function(data) {
		bW.bX(75), bW.bY(1, 0), bW.bY(6, 27), bW.bY(6, data.action), bh.bi.bj(data.ij, 5), bW.sG(32, data.value), bZ.af.send(0, bW.ba)
	}
}

function sH() {
	this.sI = new sJ, this.sK = new sL, this.sM = new sN
}

function sO() {
	var f6 = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + f6 + .5) / 15))
}

function sP() {
	this.sQ = new Array(f.g), this.cE = new Array(f.g), this.sR = new Uint8Array(f.g), this.ft = new Uint8Array(f.g), this.sS = new Uint16Array(f.g), this.sT = new Uint16Array(f.g), this.sU = new Uint16Array(f.g), this.sV = new Uint16Array(f.g), this
		.fh = new Uint32Array(f.g), this.sW = new Uint32Array(f.g), this.mY = new Uint32Array(f.g), this.m6 = null, this.gz = null, this.m1 = null, this.m4 = null, this.sX = new Uint16Array(f.g), this.sY = new Uint16Array(f.g), this.sZ =
		new Uint16Array(f.g), this.sa = new Uint16Array(f.g), this.sb = new Uint8Array(f.g), this.sc = new Uint16Array(f.g), this.e = function() {
			this.sQ.fill(""), this.cE.fill(""), this.sR.fill(0), this.ft.fill(0), this.sS.fill(0), this.sT.fill(0), this.sU.fill(0), this.sV.fill(0), this.fh.fill(0), this.sW.fill(0), this.mY.fill(0), this.m6 = new Array(f.g), this.gz = new Array(f
				.g), this.m1 = new Array(f.g), this.m4 = new Array(f.g), this.sX.fill(0), this.sY.fill(0), this.sZ.fill(0), this.sa.fill(0), this.sb.fill(0), this.sc.fill(0)
		}
}

function sd() {
	this.iH = function(size) {
		for (var eL = eM, a8 = [], q = 0; q < size; q++) a8.push(String.fromCharCode(eL.eN(16)));
		return a8.join("")
	}, this.se = function(bJ) {
		return 20 < (bJ = bJ.trim()).length ? bJ.substring(0, 20) : bJ
	}
}

function sf() {
	var ck, ap, aE, sg, sh, si, canvas, fY, qt, fS, sj, sk, sl, sm;
	this.aD = 0, this.ar = 0, this.e = function() {
		si = f.iw, sk = "rgba(0,100,0,0.8)", sl = "rgba(150,0,0,0.8)", qt = sj = !0, fS = cD.mY[f.al], this.resize()
	}, this.resize = function() {
		ap = Math.floor((cu.cv.cw() ? .305 : .24) * ao.cx), this.ar = Math.floor(.5 + .13 * ap), ap = Math.floor(6 * this.ar), ck = v.w.bA(1, Math.floor(.8 * this.ar)), sh = v.w.bA(1, Math.floor(.45 * this.ar)), sm = Math.floor(.5 * this.ar), au
			.sn.font = ck, aE = f7.gap, sg = Math.floor(1 + .13 * this.ar), (canvas = document.createElement("canvas")).width = ap, canvas.height = this.ar, fY = canvas.getContext("2d", {
				alpha: !0
			}), v.w.textBaseline(fY, 1), v.w.textAlign(fY, 1), this.so()
	}, this.sp = function() {
		return cu.cv.cw() && ao.ap < 1.2 * ao.ar
	}, this.sq = function() {
		this.sp() ? this.aD = ao.ap - ap - f7.gap : this.aD = Math.floor(jw.sr() + (ao.ap - jw.sr() - fv.ap - ap) / 2 - .5 * f7.gap)
	}, this.kD = function() {
		qt && (qt = !1, this.so())
	}, this.so = function() {
		fY.font = ck, fY.clearRect(0, 0, ap, this.ar), fY.fillStyle = sj ? sk : sl, fY.fillRect(0, 0, ap, this.ar), fY.fillStyle = b7.dI;
		var eF = this.ss(),
			sv = (this.st(), fY.fillStyle = cD.mY[f.al] >= jZ.su(f.al) ? b7.rY : b7.b9, v.bB.bC(fS)),
			sv = (fY.fillText(sv, Math.floor(ap / 2), sm), fY.measureText(sv).width),
			sx = (fY.font = sh, fY.fillStyle = 9 === eF ? b7.sw : b7.b9, jZ.sy),
			sz = "+" + sx,
			dP = fY.measureText(sz).width,
			t0 = Math.floor(this.ar / 12),
			sv = .5 * (ap + sv) + t0;
		(sv + dP + sg <= ap || 1e3 <= sx && (sz = "+" + Math.floor(sx / 1e3) + "K", sv + (dP = fY.measureText(sz).width) + sg <= ap)) && fY.fillText(sz, Math.floor(sv + .5 * dP), Math.floor(.3 * this.ar)), __fx.settings.displayTickNumber && fY
			.fillText(9 - eF, Math.floor(2 * sg + t0), Math.floor(.3 * this.ar)), fY.fillStyle = b7.b9, fY.fillRect(0, 0, ap, 1), fY.fillRect(0, 0, 1, this.ar), fY.fillRect(0, this.ar - 1, ap, 1), fY.fillRect(ap - 1, 0, 1, this.ar)
	}, this.ss = function() {
		var eF = c0.c1() % 100,
			fC = (eF = 9 - fD.fE(eF -= eF % 10, 10), Math.floor(eF * (this.ar - sg) / 9));
		return fY.fillRect(0, fC, sg, this.ar - fC), fY.fillRect(ap - sg, fC, sg, this.ar - fC), eF
	}, this.st = function() {
		fY.fillRect(sg, this.ar - sg, Math.floor((ap - 2 * sg) * cD.mY[f.al] / si), sg)
	}, this.bu = function() {
		var c9 = f.al;
		v.c2.g4(c9) && (c9 = cD.mY[c9] - cD.sc[c9], fS !== c9 ? (si = d2(c9, si), sj = fS < c9 && 10 <= c9, fS = c9, qt = !0) : c0.c1() % 10 == 9 && (qt = !0))
	}, this.aR = function() {
		0 === cD.ft[f.al] || f.gI || 2 === cD.sR[f.al] || b5.drawImage(canvas, this.aD, aE)
	}
}

function t1() {
	var t2 = 0,
		t3 = !0;

	function t7(id) {
		id = [L(93), L(94), L(95), L(96)][id];
		c5.t8(id)
	}
	this.bu = function() {
		var d8, t5;
		c0.fr < t2 || (t2 = c0.fr + 3e3, f.g1) || f.j5 || v.c2.g4(f.al) || (d8 = new Date, t5 = d8.getUTCSeconds(), t3 ? t5 < 43 && (t3 = !1) : t5 < 43 || (t2 += 52e3, t3 = !0, (t5 = (d8.getUTCMinutes() + 2) % 60) % 10 == 0 ? f.jA < 7 && t7(0) :
			t5 % 10 == 5 ? 7 !== f.jA && 10 !== f.jA || t7(1) : t5 % 10 == 7 ? 8 === f.jA && t7(2) : t5 % 10 == 2 && 9 === f.jA && t7(3)))
	}
}

function t9() {
	var tA;
	this.tB = null, this.tC = 0, this.e = function() {
		tA = [], 9 === f.jA && this.tD()
	}, this.tD = function() {
		this.tB = [0, 0, 0, 0, 0, 0];
		for (var tE = [250, 226, 166, 148, 100, this.tC = 0, 0, 0], tF = [0, 8, 24, 30, 46, 70, 256, 333], tG = [0, 0, 3, 9, 17, 25, 256, 179], ar = f.iy, q = 1; q < tE.length; q++)
			if (ar <= tF[q]) {
				this.tC = tE[q - 1] - fD.fE((ar - tF[q - 1]) * (tE[q - 1] - tE[q]), tF[q] - tF[q - 1]), this.tB[5] = tG[q - 1] - fD.fE((ar - tF[q - 1]) * (tG[q - 1] - tG[q]), tF[q] - tF[q - 1]), this.tB[0] = f.g - ar - this.tC - this.tB[5];
				break
			} f.j0 = f.g - f.iy, f.data.numberTeams = (0 < f.iy) + (0 < f.j0), f.data.playerCount = f.j2 = f.iy + f.j0, f.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, f.iy + this.tC, f.j0 - this.tC]), f.jK.jT()
	}, this.tH = function(player) {
		tA.push({
			player: player,
			hd: 14 + jX.tI(20)
		})
	}, this.bu = function() {
		if (9 === f.jA)
			for (var q = tA.length - 1; 0 <= q; q--) --tA[q].hd <= 0 && (k4.tK(tA[q].player, 0, tL.lq.tM + tL.lq.tN), tA.splice(q, 1))
	}
}

function tO() {
	var tP = 0,
		tQ = 0,
		tR = 0,
		tS = null,
		tT = null;

	function tX(c4, tZ, tc) {
		var bJ = c4.username;
		return (bJ += "   " + la.td.lj(c4.lU, c4.lW, c4.lk)) + function(c4) {
			c4 = c4.s7;
			if (c4 < 1e3) return "   Gold: " + c4;
			if ((c4 %= 1024) < 1e3) return "   Gold: " + c4 + "k";
			return "   Gold: " + (c4 - 999) + "M"
		}(c4) + ("   IP: " + bo.bi.bC(c4.tf, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][tc ? tQ : tW(c4, tZ)])
	}

	function tW(c4, tZ) {
		return tQ = tZ || la.lb.lY(c4.ij) ? 1 : 0
	}
	this.tU = 0, this.tV = function() {
		!tP || tQ === tW(tT) && tR === tT.s7 || (tR = tT.s7, tS.show(-1, -1, tX(tT, 0, 1), 1, 1, tT.color))
	}, this.tY = function(e8, c4, tZ) {
		var ta = e8.getBoundingClientRect();
		this.show(ta.left, ta.top, c4, 0, tZ), e8.addEventListener("mouseleave", function remove() {
			e8.removeEventListener("mouseleave", remove), la.tb && la.tb.eD(1)
		}), this.tU = tZ
	}, this.show = function(aD, aE, c4, th, tZ) {
		tS = tS || new ti, tR = (tT = c4).s7, tS.show(aD, aE, tX(c4, tZ), th, 0, tT.color), tP = 1
	}, this.eD = function(tj) {
		this.tU = 0, tS && tS.eD(tj) && (tP = 0, tT = null)
	}
}

function tk() {
	function u4(player, aW, ty, u1) {
		var uA;
		if (a6.cT(ty)) uA = f.g;
		else {
			if ((uA = a6.gU(ty)) === player) return void fI.mT(player, aW - v.c2.uB(player, aW), 12);
			if (!gY.gf(player, uA)) return void gL.uC.uD(player, uA, aW)
		}
		gb.uE(player, uA) || gb.uF(player) ? (cD.m6[player].push(u1 << 2), gb.uG(player, aW, uA), k1.uH(player, !0)) : fI.mT(player, aW, 12)
	}
	this.bu = function() {
		for (var tl = ae.af.tl, ad = ae.af.ad, tm = ae.af.tm, q = ae.af.am - 1; 0 <= q; q--) 65535 === tm[q] && function(q, u1, h1) {
			if (6 === h1) {
				if (ae.tq.u2(q, u1)) return ae.af.u3[q]++, ae.af.tm[q] = 0, 0
			} else {
				var player = ae.af.ag[q] >> 3,
					q = ae.af.ah[q];
				fI.pf(player), h1 < 4 ? u4(player, q, u1 + cX.tz[h1] << 2, u1) : 4 === h1 ? function(player, aW, u1) {
					var q, aV, u7 = cX.u8,
						ax = cX.gO(u1);
					for (q = 0; q < 4; q++)
						if (aV = ax + u7[q], a6.cT(aV)) return u4(player, aW, aV, u1);
					for (q = 0; q < 4; q++)
						if (aV = ax + u7[q], a6.h3(aV) && !a6.u9(player, aV)) return u4(player, aW, aV, u1);
					for (q = 0; q < 4; q++)
						if (aV = ax + u7[q], a6.h3(aV)) return u4(player, aW, aV, u1)
				}(player, q, u1) : 5 === h1 && function(player, aW, u1) {
					var q, aV, u7 = cX.u8,
						ax = cX.gO(u1);
					for (q = 0; q < 4; q++)
						if (aV = ax + u7[q], a6.h3(aV) && a6.u9(player, aV)) return u4(player, aW, aV, u1);
					for (q = 0; q < 4; q++)
						if (aV = ax + u7[q], a6.h3(aV)) return u4(player, aW, aV, u1);
					for (q = 0; q < 4; q++)
						if (aV = ax + u7[q], a6.cT(aV)) return u4(player, aW, aV, u1)
				}(player, q, u1)
			}
			return 1
		}(q, cX.tp(ad[q]), tl[q] % 64) && (ae.tq.tr(q), ae.ts.tt(q))
	}, this.tu = function(player, a2, h1, tv, aW) {
		if (!(5 <= h1)) {
			var ak = f.al;
			if (v.c2.g4(ak) && gY.gf(player, ak) && player !== ak && 0 !== cD.m1[ak].length && v.c2.tw(player, 5)) {
				for (var ty, tx = !1, q = 0; q < 4; q++)
					if (ty = a2 + cX.tz[q] << 2, a6.u0(ty) && !a6.cT(ty) && a6.gU(ty) === ak) {
						tx = !0;
						break
					} tx && (c5.c8(719, 0), h1 = aW < 25e3 ? L(97) + " (" + v.bB.bC(aW) + ") ⛵" : L(98) + " (" + v.bB.bC(aW) + ") 🚢", c5.cC(180, h1, 719, player, b7.rY, b7.cF, -1, !0, void 0, {
					ku: 1,
					tv: tv
				}))
			}
		}
	}
}

function uI() {
	var uJ = {
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
		uK = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.uL = function(ht) {
		return ht.replace(uK, function(match) {
			return uJ[match] || match
		})
	}, this.bC = function(ff) {
		var q, uM, uN, uO, uP;
		if (ff < 0) return "-" + this.bC(Math.abs(ff));
		if (ff < 1e3) return ff.toString();
		for (uM = Math.floor(Math.log(ff + .5) / Math.log(10)) + 1, uN = Math.floor((uM - 1) / 3), uP = (uO = ff.toString()).substring(uM - 3, uM), q = 1; q < uN; q++) uP = uO.substring(uM - 3 * (q + 1), uM - 3 * q) + " " + uP;
		return uO.substring(0, uM - 3 * uN) + " " + uP
	}, this.fL = function(c9, uM) {
		return c9.toFixed(uM) + "%"
	}, this.uQ = function(ff, uR) {
		return ff.toFixed(fD.ok(Math.floor((void 0 === uR ? 3 : uR) - Math.log10(Math.max(ff, 1))), 0, 8))
	}, this.uS = function(ff, pA, uM) {
		return (ff * pA).toFixed(uM)
	}, this.li = function(username) {
		var aV, ax = username.indexOf("[");
		return !(ax < 0) && 1 < (aV = username.indexOf("]")) - ax && aV - ax <= 8 ? username.substring(ax + 1, aV).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.li;
	this.uT = function(bJ) {
		for (var ca = Math.floor(.5 * bJ.length + .5), bQ = Math.floor(.5 * (ca - 1)), q = 0; q < bQ; q++)
			for (var ku = -1; ku < 2; ku += 2) {
				var eF = ca + ku * q;
				if (" " === bJ[eF]) return [this.uU(bJ.substring(0, eF)), this.uV(bJ.substring(eF))]
			}
		return [bJ.substring(0, ca), bJ.substring(ca)]
	}, this.uV = function(bJ) {
		for (var n = bJ.length, q = 0; q < n; q++)
			if (" " !== bJ[q]) return bJ.substring(q);
		return bJ
	}, this.uU = function(bJ) {
		for (var q = bJ.length - 1; 0 <= q; q--)
			if (" " !== bJ[q]) return bJ.substring(0, q + 1);
		return bJ
	}, this.uW = function(bJ, pg) {
		return bJ.split("(")[0] + "(🧈 " + pg.toFixed(2) + ")"
	}, this.startsWith = function(bJ, uX) {
		return bJ.substring(0, uX.length) === uX
	}, this.uY = function(bJ, uX) {
		var n = bJ.length;
		return bJ.substring(n - uX.length, n) === uX
	}, this.eC = function(a8, uZ, ua) {
		var bJ = "",
			n = a8.length - 1;
		ua = ua || "";
		for (var q = 0; q < n; q++) bJ += ua + a8[q] + ua + ",", (q + 1) % uZ == 0 && (bJ += "\n");
		return bJ += ua + a8[n] + ua
	}, this.qI = function(bJ, ub, uc) {
		return bJ.replace(new RegExp(ub, "g"), uc)
	}
}

function ud() {
	this.hr = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.ue = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.b9, "rgb(170,170,170)"
	], this.uf = [b7.b9, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.b9, b7.l8], this.ug = [b7.l8, b7.b9, b7.b9, b7.b9, b7.l8, b7.l8, b7.l8, b7.l8, b7.b9];
	var tF = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.uh = ["rgba(" + tF[0] + ",", "rgba(" + tF[1] + ",", "rgba(" + tF[2] + ",", "rgba(" + tF[3] + ",", "rgba(" + tF[4] + ",", "rgba(" + tF[5] + ",", "rgba(" + tF[6] + ",", "rgba(" + tF[7] + ",", "rgba(" + tF[8] + ",", "rgba(" + tF[9] + ","], this
		.ui = ["rgb(" + tF[0] + ")", "rgb(" + tF[1] + ")", "rgb(" + tF[2] + ")", "rgb(" + tF[3] + ")", "rgb(" + tF[4] + ")", "rgb(" + tF[5] + ")", "rgb(" + tF[6] + ")", "rgb(" + tF[7] + ")", "rgb(" + tF[8] + ")", "rgb(" + tF[9] + ")"], this.uj =
		null, this.uk = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aB = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.m = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.cR = new Uint8Array(f.g), this.p = new Uint8Array(f.g), this.ul = new Uint16Array(f.g), this.um = new Uint16Array(this.m.length + 1), this.un = new Uint16Array(this.m.length), this.f4 =
	function() {
			this.uj = [L(99), L(100), L(101), L(102), L(103), L(104), L(105), L(106), L(107)]
		}, this.e = function() {
			if (this.cR.fill(0), this.p.fill(0), this.uo(), f.j) {
				if (9 === f.jA) {
					for (var cR = l.cR, q = f.data.teamPlayerCount[7] - 1; 0 <= q; q--) cR[q] = 1;
					var n = f.g;
					for (q = f.data.teamPlayerCount[7]; q < n; q++) cR[q] = 2;
					l.m[1] = 7, l.m[2] = 8
				} else f.j5 ? function() {
					var aB = l.aB,
						colorsData = f.data.colorsData;
					if (!f.data.selectableColor)
						for (var q = f.iy - 1; 0 <= q; q--) colorsData[q] = jX.tI(262144);
					var v0 = 0,
						aH = 768,
						v1 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = f.data.teamPlayerCount;
					for (q = 0; q < 9; q++)
						if (teamPlayerCount[q]) {
							for (var f6 = 0, ku = 0; ku < 3; ku++) f6 += Math.abs(aB[q][ku] - v1[ku]);
							f6 < aH && (v0 = q, aH = f6)
						} var v2 = new Uint16Array(9);
					for (q = 0; q < 9; q++) v2[q] = teamPlayerCount[q];
					var m = l.m,
						v3 = new Uint8Array(9),
						hd = (m[0] = 0, 1);
					for (q = 1; q < 9; q++) v2[q] && (v3[q] = hd, m[hd++] = q);
					var v4 = f.iy,
						cR = l.cR;
					v2[v0] ? (v2[v0]--, cR[0] = v3[v0]) : v4 = 0;
					var eF = 0;
					for (q = v4; q < f.j2; q++) {
						var h2 = m[eF];
						if (v2[h2]) v2[h2]--, cR[q] = v3[h2];
						else if (q--, 9 <= ++eF) return console.log("error 325")
					}
				}() : this.bu();
				! function() {
					for (var n = f.g, ul = l.ul, um = l.um, un = l.un, cR = l.cR, m = l.m, vE = m.length, buffer = new Array(vE), q = 0; q < vE; q++) buffer[q] = [];
					for (q = 0; q < n; q++) buffer[m[cR[q]]].push(q);
					for (q = 1; q <= vE; q++) um[q] = um[q - 1] + buffer[q - 1].length;
					for (q = 0; q < vE; q++)
						for (var hd = buffer[q].length, aL = um[q], h2 = 0; h2 < hd; h2++) ul[h2 + aL] = buffer[q][h2];
					var iy = f.iy;
					for (q = 0; q < vE; q++)
						for (hd = buffer[q].length, aL = um[q], h2 = 0; h2 < hd; h2++)
							if (ul[h2 + aL] >= iy) {
								un[q] = h2;
								break
							}
				}(), ! function() {
					for (var n = f.g, cR = l.cR, p = l.p, m = l.m, q = 0; q < n; q++) p[q] = m[cR[q]];
					9 === f.jA && p.fill(1, n - jS.tB[5])
				}()
			}
		}, this.uo = function() {
			for (var q = this.m.length - 1; 0 <= q; q--) this.m[q] = q
		}, this.bu = function() {
			var ub = new Uint8Array(f.iy),
				uc = new Uint8Array(f.iy),
				ut = new Uint16Array(8),
				uu = new Uint16Array(this.m.length);
			this.uv(ub, uc, ut, 1), this.uw(ut), this.ux(uu, ub, uc), this.uy(ub, uc, uu), this.uz()
		}, this.uv = function(ub, uc, v2, v5) {
			for (var ku, e8, v6, n = this.m.length - v5, a8 = new Uint16Array(n), aB = this.aB, colorsData = f.data.colorsData, q = f.iy - 1; 0 <= q; q--) {
				for (ku = n; v5 <= ku; ku--) a8[ku - 1] = Math.abs(4 * (colorsData[q] >> 12) - aB[ku][0]) + Math.abs(4 * (colorsData[q] >> 6 & 63) - aB[ku][1]) + Math.abs(4 * (63 & colorsData[q]) - aB[ku][2]);
				for (v6 = 768, ku = n - 1; 0 <= ku; ku--) a8[e8 = (ku + q) % n] < v6 && (v6 = a8[e8], ub[q] = e8);
				for (v2[ub[q]] += 4, v6 = 768, ku = n - 1; 0 <= ku; ku--) a8[e8 = (ku + q) % n] < v6 && e8 !== ub[q] && (v6 = a8[e8], uc[q] = e8);
				v2[uc[q]]++
			}
		}, this.uw = function(v2) {
			for (var ku, v7, n = this.m.length - 1, q = n; 0 <= q; q--) this.m[q] = q;
			for (q = n - 1; 0 <= q; q--) v2[q]++;
			for (q = 1; q <= n; q++) {
				for (v7 = 0, ku = 1; ku < n; ku++) v2[ku] > v2[v7] && (v7 = ku);
				v2[v7] = 0, this.m[q] = v7 + 1
			}
		}, this.ux = function(uu, ub, uc) {
			var ku, lh, eF, f6, e8, pA, tg, v8 = this.m.length - 1,
				v9 = new Uint16Array(v8),
				vA = [],
				vB = 0,
				bm = [],
				vC = [];
			loop: for (var q = 0; q < f.iy; q++)
				if (null !== (lh = v.bB.li(cD.sQ[q]))) {
					for (ku = bm.length - 1; 0 <= ku; ku--)
						if (lh === bm[ku]) {
							vC[ku].push(q), vB = Math.max(vB, vC[ku].length);
							continue loop
						} bm.push(lh), vA.push(!1), vC.push([q]), vB = Math.max(vB, 1)
				}
			for (; 2 < f.hQ && vB > fD.fE(f.iy, f.hQ);) f.hQ--, f.jA--;
			for (ku = bm.length - 1; 0 <= ku; ku--) {
				for (f6 = -1, eF = bm.length - 1; 0 <= eF; eF--) !vA[eF] && (-1 === f6 || vC[eF].length > vC[f6].length) && (f6 = eF);
				for (eF = v8 - 1; 0 <= eF; eF--) v9[eF] = 1;
				for (eF = vC[f6].length - 1; 0 <= eF; eF--) v9[ub[vC[f6][eF]]] += 3, v9[uc[vC[f6][eF]]]++;
				for (q = v8 - 1; 0 <= q; q--) {
					for (e8 = f6 % v8, eF = v8 - 1; 0 <= eF; eF--) v9[eF] > v9[e8] && (e8 = eF);
					for (pA = -1, eF = f.hQ; 0 < eF; eF--)
						if (this.m[eF] === e8 + 1) {
							pA = eF;
							break
						} if (v9[e8] = 0, -1 !== pA) {
						for (tg = 0, eF = f.hQ; 0 < eF; eF--) uu[pA] > uu[eF] && tg++;
						if (tg !== f.hQ - 1) {
							for (eF = vC[f6].length - 1; 0 <= eF; eF--) uu[pA]++, this.cR[vC[f6][eF]] = pA;
							break
						}
					}
				}
				vA[f6] = !0
			}
		}, this.uy = function(ub, uc, uu) {
			for (var q, aY, n = this.m.length - 1, border = fD.fE(f.iy, f.hQ), vD = (0 < f.iy % f.hQ && border++, new Uint8Array(1 + n)), ku = n; 1 <= ku; ku--) vD[this.m[ku]] = ku;
			for (q = 0; q < f.iy; q++) aY = vD[ub[q] + 1], 0 === this.cR[q] && aY <= f.hQ && uu[aY] < border && (uu[aY]++, this.cR[q] = aY);
			for (q = 0; q < f.iy; q++) aY = vD[uc[q] + 1], 0 === this.cR[q] && aY <= f.hQ && uu[aY] < border && (uu[aY]++, this.cR[q] = aY);
			for (ku = f.hQ; 1 <= ku; ku--)
				for (q = f.iy - 1; 0 <= q && !(uu[ku] >= border); q--) 0 === this.cR[q] && (uu[ku]++, this.cR[q] = ku)
		}, this.uz = function() {
			if (f.hQ < 8) f.hQ++, f.jA++, f.j9 = 1;
			else
				for (var q = f.iy; q < f.g; q++) this.cR[q] = 1 + q % f.hQ
		}
}

function vF() {
	this.vG = function(player, id) {
		for (var vH = cD.m1[player], n = vH.length, q = 0; q < n; q++)
			if (cX.vI(vH[q], id)) return !0;
		return !1
	}, this.vJ = function(player, a2) {
		for (var vK, vL, a3, vH = cD.m1[player], n = vH.length, ap = au.av, vN = cX.cY(a2), vO = cX.cZ(a2), vP = -1, min = au.av * au.av + au.ef * au.ef, id = a6.vQ(cX.gO(a2)), q = 0; q < n; q++)(vL = (vL = vN - (vK = (a3 = vH[q]) >> 2) % ap) *
			vL + (vL = vO - ~~((.5 + vK) / ap)) * vL) < min && cX.vI(a3, id) && (min = vL, vP = vK);
		return vP
	}, this.vR = function(vS, vK) {
		for (var id = a6.vQ(cX.gO(vK)), u7 = cX.u8, a3 = cX.gO(vS), vT = -1, q = 0; q < 4; q++) {
			var ax = a3 + u7[q];
			a6.vU(ax) && a6.vQ(ax) === id && (-1 === vT || cX.vV(cX.vW(ax), vK) < cX.vV(vT, vK)) && (vT = cX.vW(ax))
		}
		return vT
	}, this.vX = function(player, a2) {
		for (var u7 = cX.u8, a3 = cX.gO(a2), q = 0; q < 4; q++) {
			var ax = a3 + u7[q];
			if (a6.h3(ax) && a6.u9(player, ax)) return !0
		}
		return !1
	}, this.vY = function(player, a2) {
		for (var u7 = cX.u8, a3 = cX.gO(a2), q = 0; q < 4; q++) {
			var ax = a3 + u7[q];
			if (a6.cT(ax)) return !0;
			if (a6.h3(ax)) {
				ax = a6.gU(ax);
				if (player !== ax && gY.gf(player, ax)) return !0
			}
		}
		return !1
	}, this.vZ = function(a2) {
		for (var u7 = cX.u8, a3 = cX.gO(a2), q = 0; q < 4; q++) {
			var ax = a3 + u7[q];
			if (a6.h3(ax)) {
				ax = a6.gU(ax);
				if (v.c2.rO(ax)) return ax
			}
		}
		return -1
	}, this.va = function(a3) {
		if (a6.vU(a3))
			for (var u7 = cX.u8, q = 0; q < 4; q++)
				if (a6.u0(a3 + u7[q])) return !0;
		return !1
	}, this.vb = function(player, id) {
		for (var bU = player << 3, bV = bU + ae.af.rq[player], vc = ae.af.vc, vd = ae.af.vd, q = bU; q < bV; q++) {
			var ve = vd[q];
			if (vc[ve] === id) return ve
		}
		return -1
	}, this.vf = function(player) {
		return 0 === ae.af.rq[player] ? -1 : ae.af.vd[player << 3]
	}, this.vg = function(f9, fA) {
		var n = ae.af.am;
		if (n < 1) return -1;
		for (var ad = ae.af.ad, vh = 80, vi = -1, q = 0; q < n; q++) {
			var aH = cX.vj(f9, fA, ad[q]);
			aH < vh && (vh = aH, vi = q)
		}
		return function(q, f9, fA) {
			if (q < 0) return;
			var vz = ae.af.ad[q],
				w0 = cX.w1(vz),
				vz = cX.w3(vz),
				q = 20 * (.9 + .1 * Math.log10(ae.af.ah[q]));
			return q = Math.max(q, cX.w5(v.w.w6(.02, 1.7))), fD.w7(cX.w8(f9), cX.w9(fA), w0, vz, q)
		}(vi, f9, fA) ? vi : -1
	}, this.vl = function(tv) {
		for (var n = ae.af.am, vc = ae.af.vc, q = 0; q < n; q++)
			if (vc[q] === tv) return a9.eZ[2] = q, !0;
		return !1
	}, this.vm = function(player) {
		for (var bU = player << 3, bV = bU + ae.af.rq[player], vd = ae.af.vd, ah = ae.af.ah, aW = 0, q = bU; q < bV; q++) aW += ah[vd[q]];
		return aW
	}, this.vn = function(player, vo) {
		vo = ae.af.vq[vo];
		return this.vX(player, vo[vo.length - 1])
	}, this.vr = function(vS, vK, aH, vs) {
		var vt = cX.cY(vS),
			vS = cX.cZ(vS),
			vv = cX.cY(vK),
			vK = cX.cZ(vK),
			vv = (aH = Math.max(aH, 1), vv - vt),
			vK = vK - vS,
			aF = fD.fE(Math.abs(vv) * vs, aH),
			vs = fD.fE(Math.abs(vK) * vs, aH);
		return cX.gC(vt + Math.sign(vv) * aF, vS + Math.sign(vK) * vs)
	}, this.wA = function(vp, a2) {
		for (var n = vp.length - 1, aD = cX.cY(a2), aE = cX.cZ(a2), q = 0; q < n; q++) {
			var vS = vp[q],
				vK = vp[q + 1],
				az = cX.cY(vS),
				vS = cX.cZ(vS),
				b3 = cX.cY(vK),
				vK = cX.cZ(vK);
			if (!(aD !== az && aD !== b3 && Math.sign(aD - az) === Math.sign(aD - b3) || aE !== vS && aE !== vK && Math.sign(aE - vS) === Math.sign(aE - vK))) {
				if (az === b3 || vS === vK) return q;
				if (Math.abs(aD - az) === Math.abs(aE - vS) && Math.abs(aD - b3) === Math.abs(aE - vK)) return q
			}
		}
		return -1
	}, this.wB = function() {
		for (var wC = cP[0], ag = ae.af.ag, am = ae.af.am, a8 = [], q = 0; q < am; q++) v.c2.wD(wC, ag[q] >> 3) && a8.push(q);
		return a8
	}, this.wE = function(player, vp) {
		for (var bU = player << 3, bV = bU + ae.af.rq[player], vd = ae.af.vd, vq = ae.af.vq, gT = vp[0], wF = vp[vp.length - 1], q = bU; q < bV; q++) {
			var c9 = vq[vd[q]];
			if (c9[0] === gT && c9[c9.length - 1] === wF) return !0
		}
		return !1
	}
}

function e7(pl, type, wG, wH) {
	var e8;
	this.e8 = document.createElement("input"), (e8 = this.e8).type = type ? "number" : "text", e8.id = "input" + dk.af.hz++, e8.value = pl.value, e8.style.width = "100%", e8.style.userSelect = "none", e8.style.outline = "none", e8.style.resize =
		"none", e8.style.border = "inherit", e8.style.font = "inherit", e8.style.color = b7.b9, e8.style.backgroundColor = b7.wI, e8.style.fontSize = "1em", e8.style.padding = "0.1em 0.2em", e8.addEventListener("focus", function() {
			ao.wJ++
		}), e8.addEventListener("blur", function() {
			ao.wJ--, -1 !== pl.t && bK.iF.bH(pl.t, e8.value)
		}), e8.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== pl.t && bK.iF.bH(pl.t, e8.value), wG ? wG() : e8.blur())
		}), wH && e8.addEventListener("input", function(c4) {
			wH(c4)
		})
}

function wK() {
	function wT(player) {
		var d8;
		v.c2.pZ(player) && (d8 = cD.mY[player] - cD.sc[player] + gb.vm(player), fI.mT(player, Math.abs(d8), d8 < 0 ? 18 : 12)), cD.mY[player] = 0, cD.sc[player] = 0
	}

	function wc() {
		k0.show(!1, !1, !1, !0), fv.we(), jQ.wf.wg()
	}

	function wO(player, wa) {
		for (var q = wa.length - 1; 0 <= q; q--) gb.wh(wa[q], player)
	}

	function wR(player) {
		var sS = cD.sS,
			sU = cD.sU,
			sT = cD.sT,
			sV = cD.sV,
			av = au.av;
		if (cD.fh[player]) {
			cD.fh[player] = 0;
			for (var az = sS[player], b1 = sT[player], aD = sU[player]; az <= aD; aD--)
				for (var aE = sV[player]; b1 <= aE; aE--) {
					var c9 = 4 * (aE * av + aD);
					a6.wo(player, c9) && a6.wp(c9)
				}
		}
		sU[player] = sV[player] = 0, sS[player] = sT[player] = Math.max(av, au.ef)
	}
	this.wL = function(c9) {
		var player, d8 = cD.fh[c9] + cD.sW[c9];
		ae.af.rq[c9] ? d8 && (wO(player = c9, gb.wP(player)), k4.wQ(player), wR(player), k1.wS(player), gb.clear(player), wT(player), function(player) {
			cD.sW[player] = 0, cD.m6[player] = [], cD.gz[player] = [], cD.m1[player] = [], cD.m4[player] = []
		}(player)) : !d8 && cD.m6[c9].length || this.wN(c9)
	}, this.wN = function(player) {
		! function(player) {
			v.c2.rO(player) || (cD.sa[player] = wY.sK.wZ(), f.j1++);
			var wa = gb.wP(player);
			0 === wa.length ? v.c2.wb(player) && wc() : (wO(player, wa), function(player, wa) {
				var wj = wa[function(wa) {
					var q, t = 0;
					for (q = wa.length - 1; 1 <= q; q--) cD.fh[wa[q]] > cD.fh[wa[t]] && (t = q);
					return t
				}(wa)];
				9 === f.jA && (1 === l.cR[player] ? jX.wk(8) && jS.tH(wj) : jn.aW[player] && (c5.c8(765, 0), c5.cC(280, L(108, [cD.cE[wj], cD.cE[player]]), 765, wj, b7.l8, b7.wl, -1, !0)));
				if (v.c2.wb(player)) wc(), c5.wm(wj, 1);
				else {
					for (var q = wa.length - 1; 0 <= q; q--)
						if (v.c2.pZ(wa[q]) && (fI.fg[4 - v.c2.rO(player)]++, v.c2.wb(wa[q]))) return c5.wm(player, 0);
					v.c2.rO(player) || c5.wn(0, player, wj)
				}
			}(player, wa))
		}(player), k4.wQ(player), wR(player), wT(player),
			function(player) {
				cD.ft[player] = 0, cD.m6[player] = null, cD.gz[player] = null, cD.m1[player] = null, cD.m4[player] = null
			}(player), k1.wS(player), gb.clear(player), ae.ts.wX(player)
	}
}

function iB(id, s5, wq) {
	var iP, wr;

	function wx() {
		wr.h7.innerHTML += "<br>" + L(111)
	}

	function x2() {
		var ku = 1;
		dk.e3(4, 1, new iD(L(112), L(113), !1, [new dd("🔄 Reload", function() {
			ku && (setTimeout(function() {
				dk.e3(1)
			}, 5e3), cu.cv.nI()), ku = 0
		}, b7.xB)]))
	}

	function ww() {
		bW.bX(90), bW.bY(30, Math.floor(fD.pow(30) * Math.random())), bW.bY(30, Math.floor(fD.pow(30) * Math.random())), bW.bY(30, Math.floor(fD.pow(30) * Math.random())), eM.e(bW.ba), bK.iF.bH(110, bo.bi.qG(bo.bi.qH(15))), bZ.q0.s3()
	}
	this.ws = !0, this.wt = id, this.show = function() {
		iP.show(), this.resize(), 15 === id ? (bZ.af.wv(id) ? ww : wx)() : 16 === id ? bZ.af.wv(id) ? bZ.be.wy(2) : wx() : 17 === id ? bZ.af.wv(id) ? bZ.be.wy(3) : wx() : 18 === id ? (bZ.af.close(0, 3253), bZ.af.wz(0, id, 0), wx()) : 21 === id ?
			bZ.af.wv(id) ? bZ.x0.bS(s5.bT, s5.bU, s5.bV) : wx() : 22 === id ? bZ.af.wv(id) ? bZ.x0.bb(s5.bT, s5.bc, s5.bd) : wx() : 23 === id ? bZ.af.wv(id) ? bZ.x0.bk(s5.bl, s5.bm) : wx() : 24 === id ? bZ.af.wv(id) ? bZ.x0.br(s5.bl, s5.bU, s5
				.bV) : wx() : 25 === id ? bZ.af.wv(id) ? bZ.q0.sF(s5) : wx() : 28 === id ? bZ.af.wv(id) ? bZ.x0.bg(s5.bT, s5.bc, s5.bd) : wx() : 29 === id ? bZ.af.wv(id) ? bZ.q0.s4(s5) : wx() : 30 === id && (bZ.af.wv(id) ? sB.x1() || x2() : wx())
	}, this.x3 = function() {
		15 === id ? ww() : 16 === id ? bZ.be.wy(2) : 17 === id ? bZ.be.wy(3) : 18 === id ? dk.e3(8, this.iA, new iB(16)) : 21 === id ? bZ.x0.bS(s5.bT, s5.bU, s5.bV) : 22 === id ? bZ.x0.bb(s5.bT, s5.bc, s5.bd) : 23 === id ? bZ.x0.bk(s5.bl, s5
			.bm) : 24 === id ? bZ.x0.br(s5.bl, s5.bU, s5.bV) : 25 === id ? bZ.q0.sF(s5) : 28 === id ? bZ.x0.bg(s5.bT, s5.bc, s5.bd) : 29 === id ? bZ.q0.s4(s5) : 30 === id ? sB.x1() || x2() : 1e3 === id && (this.wt = id = 25, bZ.q0.sF(s5))
	}, this.x4 = function(code, x5, data) {
		!x5 && code !== id || (15 === code || 16 === code ? dk.e3(7, this.iA) : 17 === code ? (bZ.af.close(0, 3252), bK.af.x6(0), bK.buffer.data[117].e0 && 0 < bK.buffer.data[117].e0.length ? (x5 = bK.af.x7(0), bK.iF.bH(105, x5.ij), bK.iF.bH(106,
			x5.password), dk.e3(8, this.iA, new iB(16))) : (bK.iF.bH(105, ""), dk.af.i7())) : 21 === code ? dk.e3(10, this.iA, new x8(data)) : 23 === code ? dk.e3(13, this.iA, new x9({
			data: data,
			bl: s5.bl
		})) : 25 === code ? (dk.af.hx.ij = s5.ij, bK.xA.fM(s5.ij), dk.e3(15, this.iA)) : 30 === code && (data ? dk.e3(1) : x2()))
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), wr.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(L(109), [new dd("⬅️ " + L(5), function() {
		wq ? dk.e3(29) : dk.af.i7()
	})]), wr = new wu(iP.dg, L(110))
}

function xC() {
	this.pM = !1, this.xD = !1, this.xE = !1, this.xF = [0, 0, 0, 0], this.render = function() {
		var az, b1, b3, b4;
		this.xE = this.xE || this.xD, (this.xD || this.pM && this.xE) && (az = xG.pI[0], b1 = xG.pI[1], b3 = xG.pI[2], b4 = xG.pI[3], az = az < this.xF[0] ? this.xF[0] : az, b1 = b1 < this.xF[1] ? this.xF[1] : b1, b3 = b3 > this.xF[2] ? this.xF[
			2] : b3, b4 = b4 > this.xF[3] ? this.xF[3] : b4, this.xD = !1, this.pM = !1, az === this.xF[0] && b1 === this.xF[1] && b3 === this.xF[2] && b4 === this.xF[3] ? this.xH() : az <= b3 && b1 <= b4 && ju.putImageData(jv, 0, 0, az,
			b1, b3 - az + 1, b4 - b1 + 1))
	}, this.xH = function() {
		this.xE && this.xF[2] >= this.xF[0] && this.xF[3] >= this.xF[1] && ju.putImageData(jv, 0, 0, this.xF[0], this.xF[1], this.xF[2] - this.xF[0] + 1, this.xF[3] - this.xF[1] + 1), this.xE = !1
	}, this.xI = function() {
		this.xF[2] >= this.xF[0] && this.xF[3] >= this.xF[1] && ju.putImageData(jv, 0, 0, this.xF[0], this.xF[1], this.xF[2] - this.xF[0] + 1, this.xF[3] - this.xF[1] + 1), this.xE = !1
	}, this.e = function() {
		var aD, aE;
		this.pM = !1, this.xD = !1, this.xE = !1, this.xF[0] = au.av, this.xF[1] = au.ef, this.xF[2] = this.xF[3] = 0;
		loop: for (aD = 1; aD < au.av - 1; aD++)
			for (aE = au.ef - 2; 1 < aE; aE--)
				if (1 === mg[a6.xJ(aD, aE) + 2]) {
					this.xF[0] = aD;
					break loop
				} loop: for (aE = 1; aE < au.ef - 1; aE++)
			for (aD = au.av - 2; 1 < aD; aD--)
				if (1 === mg[a6.xJ(aD, aE) + 2]) {
					this.xF[1] = aE;
					break loop
				} loop: for (aD = au.av - 2; 0 < aD; aD--)
			for (aE = au.ef - 2; 1 < aE; aE--)
				if (1 === mg[a6.xJ(aD, aE) + 2]) {
					this.xF[2] = aD;
					break loop
				} loop: for (aE = au.ef - 2; 0 < aE; aE--)
			for (aD = au.av - 2; 1 < aD; aD--)
				if (1 === mg[a6.xJ(aD, aE) + 2]) {
					this.xF[3] = aE;
					break loop
				}
	}
}

function xK() {
	this.tz = new Int16Array(4), this.u8 = new Int16Array(4), this.xL = null, this.e = function() {
		var q;
		for (this.tz[0] = -au.av, this.tz[1] = 1, this.tz[2] = au.av, this.tz[3] = -1, this.xL = new Int16Array([-au.av, 1 - au.av, 1, au.av + 1, au.av, au.av - 1, -1, -au.av - 1]), q = 0; q < 4; q++) this.u8[q] = 4 * this.tz[q]
	}, this.xM = function() {
		return fD.ok(Math.floor(.15 * (1 + .25 * cu.cv.cw()) * ao.cx / ay), 4, 128)
	}, this.vI = function(a3, id) {
		for (var u7 = this.u8, q = 0; q < 4; q++) {
			var ax = a3 + u7[q];
			if (a6.vU(ax) && a6.vQ(ax) === id) return !0
		}
		return !1
	}, this.xN = function(player, a3) {
		return !a6.cT(a3) && player === a6.gU(a3)
	}, this.xO = function(g8, gA, a2) {
		return (g8 -= this.cY(a2)) * g8 + (gA -= this.cZ(a2)) * gA
	}, this.vj = function(xP, xQ, aY) {
		xP = this.w8(xP) - this.w1(aY), xQ = this.w9(xQ) - this.w3(aY);
		return Math.sqrt(xP * xP + xQ * xQ)
	}, this.xR = function(vS, vK) {
		var aF = this.cY(vS) - this.cY(vK),
			vS = this.cZ(vS) - this.cZ(vK);
		return ~~Math.sqrt(aF * aF + vS * vS + .5)
	}, this.vV = function(vS, vK) {
		var aF = this.cY(vS) - this.cY(vK),
			vS = this.cZ(vS) - this.cZ(vK);
		return aF * aF + vS * vS
	}, this.xS = function(vt, vu, vv, vw) {
		return (vt -= vv) * vt + (vu -= vw) * vu
	}, this.xT = function(c9, pY) {
		return fD.fE(pY * cD.mY[c9], 1e3)
	}, this.w8 = function(xP) {
		return 16 * (xP + b0) / ay
	}, this.w9 = function(xQ) {
		return 16 * (xQ + b2) / ay
	}, this.w5 = function(f6) {
		return 16 * f6 / ay
	}, this.g9 = function(xP) {
		return Math.floor((xP + b0) / ay)
	}, this.gB = function(xQ) {
		return Math.floor((xQ + b2) / ay)
	}, this.gD = function(g8, gA) {
		return 1 <= g8 && 1 <= gA && g8 < au.av - 1 && gA < au.ef - 1
	}, this.cY = function(a2) {
		return a2 % au.av
	}, this.cZ = function(a2) {
		return fD.fE(a2, au.av)
	}, this.gC = function(g8, gA) {
		return gA * au.av + g8
	}, this.xU = function(g8, gA) {
		return 4 * this.gC(g8, gA)
	}, this.xV = function(a2) {
		return this.xW(this.cY(a2), this.cZ(a2))
	}, this.xW = function(g8, gA) {
		return 0 < g8 && g8 < au.av - 1 && 0 < gA && gA < au.ef - 1
	}, this.gO = function(a2) {
		return a2 << 2
	}, this.vW = function(a3) {
		return a3 >> 2
	}, this.xX = function(a2) {
		return au.av * this.cZ(a2) * 256 + (this.cY(a2) << 4)
	}, this.xY = function(a2) {
		return this.xX(a2) + 8 + (au.av << 7)
	}, this.tp = function(aY) {
		return au.av * (this.w3(aY) >> 4) + (this.w1(aY) >> 4)
	}, this.xZ = function(aY) {
		aY = this.tp(aY);
		return (this.cY(aY) >> 5) + ae.xa.xb * (this.cZ(aY) >> 5)
	}, this.w1 = function(aY) {
		return aY % (au.av << 4)
	}, this.w3 = function(aY) {
		return fD.fE(aY, au.av << 4)
	}, this.xc = function(a2, h1) {
		return a2 + this.tz[h1]
	}, this.xd = function(a3, h1) {
		return a3 + this.u8[h1]
	}, this.xe = function(vS, vK) {
		var aF = this.cY(vK) - this.cY(vS),
			vK = this.cZ(vK) - this.cZ(vS);
		return Math.abs(aF) >= Math.abs(vK) ? 1 + 2 * (aF < 0) : 2 * (0 < vK)
	}, this.xf = function(player) {
		return this.gC(cD.sS[player] + cD.sU[player] >> 1, cD.sT[player] + cD.sV[player] >> 1)
	}, this.xg = function(player) {
		return this.gC(jX.xh(cD.sS[player], cD.sU[player]), jX.xh(cD.sT[player], cD.sV[player]))
	}
}

function jE() {
	this.e = function() {
		8 === f.jA && c5.xi()
	}, this.xj = function(xk) {
		var elo = f.data.elo,
			xl = (elo[xk] - elo[1 - xk]) / 10,
			xl = 8 / (1 + Math.pow(2, xl / 32)),
			xl = Math.floor(10 * xl + .5),
			xn = elo[xk] + xl,
			xo = this.xp(xn),
			elo = this.xp(elo[1 - xk] - xl),
			xl = (0 === xk ? c5.xr(xo, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : c5.xr(elo, xo, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), xn * fD.sqrt(xn) >> 8),
			elo = ((1 + f.jB) * xl / 100).toFixed(2);
		xk === f.al ? c5.cC(640, L(114, [elo]), 40, 0, b7.b9, b7.cF, -1, !1) : c5.cC(640, L(115, [cD.cE[xk], elo]), 40, 0, b7.b9, b7.cF, -1, !1)
	}, this.xp = function(elo) {
		return 16e3 === (elo = fD.ok(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function L(value, xu, bP, xv) {
	var bJ = "number" == typeof value ? sB.xw[value] : value;
	if (bP && sB.xx() && (bJ = bP), !xu) return xv ? bJ.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : bJ;
	for (var n = xu.length, q = 0; q < n; q++)
		for (var ca = 0; ca < 3; ca++) bJ = bJ.replace("{" + (10 * ca + q) + "}", xu[q]);
	return bJ
}

function jL() {
	this.jT = function() {
		var xy = f.data;
		v.aN.xz(xy.teamPlayerCount, xy.playerCount), xy.numberTeams = v.aN.oS(xy.teamPlayerCount, 0), xy.teamPlayerCount[0] && xy.teamPlayerCount[7] && (xy.teamPlayerCount[7] = 0, this.jT())
	}, this.oW = function() {
		var xy = f.data;
		xy.mapType < 2 ? au.bX(au.oR(xy), xy.mapSeed) : au.y0(xy.canvas)
	}, this.oU = function() {
		var xy = f.data;
		xy.colorsData || (xy.colorsData = new Uint32Array(1)), 0 === xy.gameMode && (xy.colorsData[0] = bK.af.y1()), xy.selectableName && (xy.playerNamesData || (xy.playerNamesData = new Array(1)), xy.playerNamesData[0] = bK.buffer.data[122]
			.value), xy.ir = new Uint32Array(1), xy.ir[0] = bh.bi.p9(bK.buffer.data[105].value, 5)
	}, this.or = function() {
		f.data = new iq
	}
}

function y2() {
	function yT(a8, bU, bV) {
		var yU = a8[bU];
		a8[bU] = a8[bV], a8[bV] = yU
	}
	this.lZ = [
		[],
		[],
		[],
		[]
	], this.y3 = [0, 0, 0, 0], this.y4 = [], this.y5 = function(y6, ij, username, lU, lW, lk, elo, color, s7, tf, code) {
		username = this.y8(ij, username, lU, lW, lk, elo, color, s7, tf, code);
		this.lZ[y6].push(username), la.y9 === ij && (la.ld = username), la.yA.yB(ij) && (username.ii = 1), la.af.yC += 29 === dk.iI && la.af.yD[0] === y6 && 1 === la.af.yD[2]
	}, this.y8 = function(ij, username, lU, lW, lk, elo, color, s7, tf, code) {
		return {
			ij: ij,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bo.bi.bC(ij, 2),
			yE: __fx.nameFilter.filter(username),
			lU: lU,
			lW: lW,
			lk: lk,
			elo: elo,
			color: color,
			s7: s7,
			tf: tf
		}
	}, this.yF = function(t, y6, lU, lW, lk, elo, s7, color) {
		t = this.lZ[y6][t];
		t.lU = lU, t.lW = lW, t.lk = lk, t.elo = elo, t.s7 = s7, t.color = color, la.af.yC += 29 === dk.iI && la.af.yD[0] === y6 && 1 === la.af.yD[2]
	}, this.yG = function(t, y6, code) {
		t = this.lZ[y6][t];
		1 === code && (t.username = t.yE), la.af.yC += 29 === dk.iI && la.af.yD[0] === y6 && 1 === la.af.yD[2]
	}, this.yH = function(t, y6, yI) {
		var t = this.lZ[y6][t],
			yJ = t.username,
			yK = "Redacted " + bo.bi.bC(t.ij, 2);
		t.username = yI ? "[" + v.bB.li(yJ) + "] " + yK : yK, yJ.indexOf("Redacted") < 0 && (t.yL = yJ), la.lq.yM(t.ij), la.af.yC += 29 === dk.iI && la.af.yD[0] === y6 && 1 === la.af.yD[2]
	}, this.yN = function(t, yO, yP) {
		var player = this.lZ[yO][t];
		this.yQ(t, yO), this.lZ[yP].push(player), la.af.yC += 29 === dk.iI && la.af.yD[0] === yP && 1 === la.af.yD[2]
	}, this.yQ = function(t, yO) {
		var lb = this.lZ[yO];
		this.y4.push(lb[t]), 1e3 < this.y4.length && this.y4.shift(), t >= this.y3[yO] ? lb[t] = lb[lb.length - 1] : (this.y3[yO]--, 2 === yO ? (lb.splice(this.y3[yO] + 1, 0, lb[lb.length - 1]), lb.splice(t, 1)) : (lb[t] = lb[this.y3[yO]], lb[
			this.y3[yO]] = lb[lb.length - 1])), lb.pop(), la.af.yC += 29 === dk.iI && la.af.yD[0] === yO && 1 === la.af.yD[2]
	}, this.yR = function(t, lS) {
		la.af.yC += 29 === dk.iI && la.af.yD[0] === lS && 1 === la.af.yD[2];
		var lb = this.lZ[lS],
			c4 = lb[t];
		if (2 === lS)
			if (t >= this.y3[lS]) {
				la.yA.join(c4);
				for (var yS = this.y3[lS], elo = c4.elo; yS && elo > lb[yS - 1].elo;) yS--;
				lb[t] = lb[this.y3[lS]], lb.splice(this.y3[lS]++, 1), lb.splice(yS, 0, c4)
			} else lb.splice(this.y3[lS]--, 0, c4), lb.splice(t, 1);
		else t >= this.y3[lS] ? (la.yA.join(c4), yT(lb, this.y3[lS]++, t)) : yT(lb, --this.y3[lS], t)
	}, this.lY = function(ij) {
		for (var lZ = this.lZ, n = lZ.length, q = 0; q < n; q++)
			for (var lb = lZ[q], aL = lb.length, ca = 0; ca < aL; ca++)
				if (ij === lb[ca].ij) return lb[ca];
		return null
	}
}

function yV() {
	this.yW = null, this.yX = null, this.yY = null, this.yZ = null, this.ya = null, this.yb = null, this.kH = "";
	var yc = 0;
	this.e = function() {
		this.yW = [], this.yX = [], this.yY = [], this.yZ = [], this.ya = [0], this.yb = [0], yc = 0, this.kH = ""
	}, this.yd = function(id, eh, ej, el) {
		f.g1 || 2 === f.j6 || (0 === this.ya[yc] && (this.yb[yc] ? (this.ya.push(1), this.yb.push(0), yc++) : this.ya[yc] = 1), this.yW.push(id), this.yX.push(eh), this.yY.push(void 0 === ej ? 0 : ej), this.yZ.push(void 0 === el ? 0 : el), this
			.yb[yc]++)
	}, this.bu = function() {
		0 === this.ya[yc] ? this.yb[yc]++ : (this.ya.push(0), this.yb.push(0), yc++)
	}
}

function ye() {
	this.yf = !1, this.bu = function() {
		c0.c1() % 250 != 249 || f.g1 || (bZ.be.yg(+(this.yf && cD.ft[f.al]), cH.cI + ae.af.am), this.yf = !1)
	}
}

function yi() {
	var dY, yj;

	function ym() {
		dk.i6();
		var bJ = jr.yq(yj.dp());
		(f.j6 && 0 < bJ.length && bJ === jr.kG.kH || jr.qL.eJ(bJ)) && jr.yr()
	}
	this.show = function(yn) {
		this.yo(yn), dY.show(), this.resize()
	}, this.yo = function(yn) {
		0 === f.j6 ? yn ? yj.eB(yn) : f.jN.length && yj.eB(f.jN) : (f.g1 || (jr.kG.kH = jr.kI.kJ()), yj.eB(jr.yp(jr.kG.kH)))
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), yj.resize()
	}, this.eE = function(eF) {
		2 === eF ? dY.eG[0].bL() : ym()
	}, dY = new dc(L(116), [new dd("⬅️ " + L(5), function() {
		dk.iS(1)
	}), new dd(L(117), function() {
		yj.yk()
	}), new dd(L(118), function() {
		yj.yl()
	}), new dd(L(119), function() {
		yj.clear()
	}), new dd(L(120), function() {
		ym()
	})]), yj = new eA(L(121)), dY.dg.appendChild(yj.e8)
}

function dy() {
	var h6;
	this.ys = [], this.h6 = document.createElement("div"), this.dz = function(bJ, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = bJ, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.h6.appendChild(
			title), title
	}, this.iY = function(bJ, marginBottom) {
		var q2 = document.createElement("p");
		return q2.textContent = bJ, q2.style.fontSize = "0.75em", q2.style.lineHeight = "1.2em", q2.style.marginBottom = marginBottom || "0", this.h6.appendChild(q2), q2
	}, this.yt = function(bJ) {
		var yu = document.createElement("p");
		return yu.textContent = bJ, yu.style.fontSize = "1em", yu.style.marginBottom = "0", yu.style.whiteSpace = "pre-wrap", yu.style.overflowWrap = "break-word", this.h6.appendChild(yu), yu
	}, this.op = function(yv, fontSize) {
		var h6 = document.createElement("div");
		return h6.innerHTML = yv, h6.style.fontSize = fontSize || "1em", h6.style.lineHeight = "1.2em", this.h6.appendChild(h6), h6
	}, this.e1 = function(yw) {
		for (var pn = yw.pn, n = pn.length, q = 0; q < n; q++) this.h6.appendChild(pn[q])
	}, this.e4 = function(c4) {
		return this.ys.push(c4), this.h6.appendChild(c4.e8), c4
	}, this.resize = function() {
		for (var n = this.ys.length, q = 0; q < n; q++) this.ys[q].resize && this.ys[q].resize()
	}, (h6 = this.h6).style.position = "absolute", h6.style.height = "auto", h6.style.padding = "0.5em"
}

function yx() {
	this.yy = 0;
	var z1, yz = null,
		z0 = 0,
		z2 = "",
		z3 = 0,
		z4 = null,
		z5 = -1,
		z6 = -1,
		z7 = 0;

	function il() {
		if (null !== z4 && null !== yz) {
			z0 = 0;
			try {
				window.turnstile.remove(yz), z4.remove()
			} catch (e8) {
				console.log("turnstile remove failed " + e8)
			}
			yz = z4 = null
		}
	}

	function zD(zJ) {
		return "" !== z2 && z3 + 1e3 * (300 - zJ) > performance.now()
	}
	this.e = function() {
		var zB;
		jV.z9 || !jV.nN && !jV.zA ? (console.log("turnstile cannot be loaded"), this.yy = -1) : ((zB = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", zB.async = !0, zB.onload =
			function() {
				jP.turnstile.yy = 1, console.log("turnstile onload"), jP.turnstile.zC()
			}, zB.onerror = function() {
				jP.turnstile.yy = -1, console.log("turnstile onerror")
			}, document.head.appendChild(zB))
	}, this.zC = function() {
		var d8;
		return !(1 !== this.yy || (window.turnstile ? z0 ? (console.log("turnstile error 246"), 1) : zD(30) || (d8 = performance.now()) < z7 && z5 === bh.bi.p9(bK.buffer.data[105].value, 5) && z6 === i4.i5 || (z2 = "", z0 = 1, z1 = d8, (z4 =
			document.createElement("div")).style.position = "fixed", z4.style.left = "0", z4.style.top = "0", z4.style.zIndex = "100", document.body.appendChild(z4), console.log("turnstile render"), yz = window.turnstile.render(
			z4, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(zE) {
					console.log("turnstile success " + Math.floor(performance.now() - z1)), z2 = zE, z3 = performance.now(), jP.turnstile.zF(), il()
				},
				"expired-callback": function() {
					il(), console.log("turnstile expired " + Math.floor(performance.now() - z1))
				},
				"error-callback": function() {
					il(), console.log("turnstile callback error " + Math.floor(performance.now() - z1)), jP.turnstile.yy = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		il()
	}, this.zF = function() {
		zD(8) && la.zG && bZ.af.kU(bZ.af.zH) && (z7 = performance.now() + 36e5 - 1e4, z5 = bh.bi.p9(bK.buffer.data[105].value, 5), z6 = i4.i5, bZ.be.zI(z2), z2 = "", console.log("sendTokenToLobby success"))
	}
}

function zK() {
	function zd() {
		au.ze.bu()
	}

	function zp(c9, zo) {
		0 < zo && (au.mi[c9] += zo, au.mi[c9 + 1] += zo, au.mi[c9 + 2] += zo)
	}

	function vU(c9) {
		return au.mi[c9 + 2] > au.mi[c9] && au.mi[c9 + 2] > au.mi[c9 + 1]
	}
	this.cp = -1, this.zL = 0, this.zM = 0, this.zN = 8, this.zO = 32, this.zP = 8, this.zQ = 32, this.zR = [0, 0], this.zS = [0, 0, 0, 0], this.xa = null, this.zT = !0, this.zU = !1, this.zV = function() {
		-1 !== this.cp && clearTimeout(this.cp), this.cp = -1, this.xa = null, zW.zX()
	}, this.e = function() {
		7 === dV.dW() || this.zU || (this.zT = !0, this.zL = 0, this.zM = 1, this.zR = [au.zY.zZ[au.m3].za[0], au.zY.zZ[au.m3].zb[0]], this.zS = [au.zY.zZ[au.m3].zc[3], au.zY.zZ[au.m3].zc[4], au.zY.zZ[au.m3].zc[5], au.zY.zZ[au.m3].zc[6]], this
			.zN = au.zY.zZ[au.m3].zc[7], this.zO = au.zY.zZ[au.m3].zc[8], this.zP = au.zY.zZ[au.m3].zc[9], this.zQ = au.zY.zZ[au.m3].zc[10], this.zT ? this.cp = setTimeout(zd, 16) : this.bu())
	}, this.bu = function() {
		if (8 === dV.dW() && kB.zf()) this.cp = setTimeout(zd, 16);
		else {
			if (0 === this.zL) {
				var zg = jX.zh();
				if (jX.jY(au.zY.zZ[au.m3].zc[2]), zW.bX([au.av, au.ef, au.zY.zZ[au.m3].zc[0], au.zY.zZ[au.m3].zc[1]]), jX.jY(zg), this.xa = zW.zi(), this.zL++, this.zT) return void(this.cp = setTimeout(zd, 16))
			}
			for (var c9, a2, zg = this.zT ? 10 : 1e6, zg = au.ef - this.zM - 1 < zg ? au.ef - this.zM - 1 : zg, zj = this.zM + zg, aE = this.zM; aE < zj; aE++)
				for (var aD = 1; aD < au.av - 1; aD++) vU(c9 = 4 * (a2 = aD + aE * au.av)) ? this.zk(c9, a2, 1) : (this.zk(c9, a2, 0), function(aD, aE, c9) {
					return 1 < aD && vU(c9 - 4) || aD < au.av - 2 && vU(c9 + 4) || 1 < aE && vU(c9 - 4 * au.av) || aE < au.ef - 2 && vU(c9 + 4 * au.av)
				}(aD, aE, c9) && this.zm(aD, aE));
			this.zM = zj, this.zM >= au.ef - 1 ? (au.sn.putImageData(au.zn, 0, 0, 1, 1, au.av - 2, au.ef - 2), c0.d1 = !0, this.zV()) : this.zT && (this.cp = setTimeout(zd, 16))
		}
	}, this.zk = function(c9, a2, t) {
		zp(c9, Math.floor(this.zR[t] + this.zS[t] * this.xa[a2] / 1e4) - au.mi[c9])
	}, this.zq = function(c9, hh, zr, t, zS) {
		zp(c9, Math.floor(this.zR[t] + (1 - hh / zr) * zS) - au.mi[c9])
	}, this.zm = function(f9, fA) {
		for (var c9, hh, zr, cc = f9 - this.zO, zs = fA - this.zO, zt = f9 + this.zO, zj = fA + this.zO, cc = cc < 1 ? 1 : cc, zt = zt > au.av - 2 ? au.av - 2 : zt, zj = au.ef - 2 < zj ? au.ef - 2 : zj, aE = zs < 1 ? 1 : zs; aE <= zj; aE++)
			for (var aD = cc; aD <= zt; aD++) vU(c9 = 4 * (aD + aE * au.av)) ? (zr = this.zN + (this.zO - this.zN) * this.xa[aD + au.av * aE] / 1e4, Math.abs(f9 - aD) > zr || Math.abs(fA - aE) > zr || zr <= (hh = Math.sqrt((f9 - aD) * (f9 - aD) +
				(fA - aE) * (fA - aE))) || this.zq(c9, hh, zr, 1, this.zS[3])) : (zr = this.zP + (this.zQ - this.zP) * this.xa[aD + au.av * aE] / 1e4, Math.abs(f9 - aD) > zr || Math.abs(fA - aE) > zr || zr <= (hh = Math.sqrt((f9 - aD) * (f9 -
				aD) + (fA - aE) * (fA - aE))) || this.zq(c9, hh, zr, 0, this.zS[2]))
	}
}

function zu() {
	this.af = new zv, this.zw = new ye, this.iL = new zx, this.zy = new zz, this.be = new a00, this.q0 = new rx, this.oJ = new a01, this.x0 = new bR, this.iM = new a02, this.a03 = new a04, this.a05 = new a06, this.a07 = new a08, this.a09 = new a0A,
		this.e = function() {
			this.af.e()
		}
}

function a0B() {
	function a0E(player, vo) {
		vo = cX.tp(ae.af.ad[vo]), vo = a6.vQ(cX.gO(vo));
		return !!ae.td.vG(player, vo)
	}

	function a0C(player) {
		return ae.a0X.a0Y(player) && !ae.a0V.a0Z()
	}
	this.gl = function(player, a2) {
		return !!a0C(player) && -1 !== (a2 = function(player, a2) {
			for (var n = ae.af.am, ad = ae.af.ad, ag = ae.af.ag, vh = cX.xM(), vi = -1, q = 0; q < n; q++) {
				var aH = cX.xR(a2, cX.tp(ad[q]));
				aH < vh && v.c2.wD(player, ag[q] >> 3) && (vh = aH, vi = q)
			}
			return vi
		}(player, a2)) && !!a0E(player, a2) && (a9.eZ[3] = ae.af.vc[a2], !0)
	}, this.a0F = function(player, tv) {
		return !!a0C(player) && !!ae.td.vl(tv) && !!a0E(player, a9.eZ[2])
	}, this.a0G = function(player, tv, a0H) {
		return !! function(player, tv, a0H) {
			if (a0C(player) && ae.td.vl(tv)) {
				tv = a9.eZ[2];
				if (v.c2.wD(player, ae.af.ag[tv] >> 3)) {
					if (function(player, vo) {
							return ae.td.vn(player, vo) && (a9.a8[0] = ae.a0V.a0W(ae.af.vq[vo]), a9.eZ[1] = 6, !0)
						}(player, tv)) return 1;
					var u1 = cX.tp(ae.af.ad[tv]),
						a0M = ae.td.vJ(player, u1);
					if (-1 !== a0M) {
						a0M = cX.xR(a0M, u1);
						if (!(a0H && 120 < a0M)) {
							a0H = function(vo, a0N, u1) {
								var vp = ae.af.vq[vo],
									vo = ae.af.u3[vo],
									a0T = cX.xR(u1, vp[vo + 1]);
								if (a0N <= a0T) return ae.td.vr(u1, vp[vo + 1], a0T, a0N);
								for (var aH = a0N - a0T, n = vp.length - 1, q = vo + 1; q < n; q++) {
									var a0U = cX.xR(vp[q], vp[q + 1]);
									if (aH <= a0U) return ae.td.vr(vp[q], vp[q + 1], a0U, aH);
									aH -= a0U
								}
								return vp[n]
							}(tv, a0M, u1);
							if (ae.a0Q.a0R(player, a0H, 1)) return a9.eZ[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, tv, a0H) && (player = a9.eZ[2], ae.af.tl[player] = 64 + ae.af.tl[player] % 64, ae.tq.uG(tv, ae.af.a0J), !0)
	}
}

function a0a() {
	function a0n() {
		return {
			av: au.av,
			ef: au.ef,
			oP: au.oP,
			sn: au.sn,
			zn: au.zn,
			mi: au.mi,
			m3: au.m3,
			mapSeed: au.mapSeed,
			a0d: au.a0d
		}
	}

	function a0g(q) {
		return 1 !== q && au.a0h(q) && q !== au.a0p()
	}
	this.a0b = 25, this.a0c = 13, this.dq = 4096, this.av = 0, this.ef = 0, this.oP = null, this.sn = null, this.zn = null, this.mi = null, this.m3 = 0, this.mapSeed = 0, this.a0d = !1, this.ze = new zK, this.zY = new a0e, this.mk = new md, this.e =
		function() {
			this.zY.e()
		}, this.bX = function(map, a0f) {
			((map %= this.a0b) !== this.m3 || a0g(this.m3) && a0f !== this.mapSeed) && (this.a0d = !1, this.ze.zV(), jX.jY(map), this.m3 = map, this.mapSeed = a0f, a0g(map) && (au.zY.zZ[map].zg = a0f), this.a0h(this.m3) ? (map = au.zY.zZ[this.m3],
				this.av = map.ap, this.ef = map.ar, jX.jY(map.zg), zW.bX([this.av, this.ef, map.a0j, map.a0k]), a0l(), jh.a0m(), zW.zX()) : a0i())
		}, this.oQ = function(map, a0f) {
			var eh = a0n(),
				map = (this.bX(map, a0f), this.ze.zV(), a0n());
			return a0f = eh, au.av = a0f.av, au.ef = a0f.ef, au.oP = a0f.oP, au.sn = a0f.sn, au.zn = a0f.zn, au.mi = a0f.mi, au.m3 = a0f.m3, au.mapSeed = a0f.mapSeed, au.a0d = a0f.a0d, map
		}, this.y0 = function(canvas) {
			canvas && this.oP !== canvas && (this.av = canvas.width, this.ef = canvas.height, this.oP = canvas, this.sn = this.oP.getContext("2d", {
				alpha: !1
			}), this.z = this.sn.getImageData(0, 0, this.av, this.ef), this.mi = this.z.data, this.m3 = this.a0p(), this.mapSeed = 0, au.zY.zZ[this.m3].name = f.data.mapName)
		}, this.m2 = function(q) {
			return 3 === q || 7 === q || 9 === q || 21 === q || q === this.a0p()
		}, this.a0q = function(q) {
			return 2 === q || 7 === q || 9 === q || 20 === q
		}, this.a0r = function(q) {
			return 1 === q
		}, this.a0p = function() {
			return this.a0b
		}, this.a0h = function(q) {
			return void 0 === this.zY.zZ[q].zc
		}, this.oR = function(c4) {
			return 0 === c4.mapType ? c4.mapProceduralIndex < 10 ? c4.mapProceduralIndex : 10 + c4.mapProceduralIndex : 1 === c4.mapType ? 10 <= c4.mapRealisticIndex ? 22 + c4.mapRealisticIndex - 10 : c4.mapRealisticIndex + 10 : void 0
		}, this.a0s = function(c4, a0t) {
			0 === c4.mapType ? c4.mapProceduralIndex = a0t < 10 ? a0t : a0t - 10 : 1 === c4.mapType && (c4.mapRealisticIndex = a0t - (22 <= a0t ? 12 : 10))
		}
}

function a0u() {
	var a0v, a0w, a0x = -15e3,
		a0y = !1;

	function dD(e8) {
		a1G() || (a0y = !0, a1H(e8, 1), bZ.af.a1I(bZ.af.a1J), a1K(Math.floor(ao.hG * e8.clientX), Math.floor(ao.hG * e8.clientY)))
	}

	function a15(e8) {
		a0x = c0.fr, a1H(e8, 1), bZ.af.a1I(bZ.af.a1J), 0 < e8.touches.length && (a0v = Math.floor(ao.hG * e8.touches[0].clientX), a0w = Math.floor(ao.hG * e8.touches[0].clientY), a1L.a15(e8) || a1K(a0v, a0w))
	}

	function a1K(aD, aE) {
		dk.dD(aD, aE), 0 === f.j6 ? dV.dD(aD, aE) : fG.a1M(aD, aE) || jt.dD(aD, aE) || k0.dD(aD, aE) || jz.a1N(aD, aE) || g7.dD(aD, aE) || 0 <= fF.dD(aD, aE) || gu.dD(aD, aE) || nm.a1O(aD, aE) || jz.a1P(aD, aE)
	}

	function dB(e8) {
		a1G() || (a0y = !0, a1H(e8, 1), a1Q(Math.floor(ao.hG * e8.clientX), Math.floor(ao.hG * e8.clientY)))
	}

	function a16(e8) {
		a0x = c0.fr, a1H(e8, 1), 0 < e8.touches.length && (a0v = Math.floor(ao.hG * e8.touches[0].clientX), a0w = Math.floor(ao.hG * e8.touches[0].clientY), a1L.a16(e8) || a1Q(a0v, a0w))
	}

	function a1Q(aD, aE) {
		nm.nn() || (nm.cm = aD, nm.fy = aE), dk.dB(aD, aE), 0 === f.j6 ? dV.dB(aD, aE) : (a1R.fz(aD, aE), jt.dB(aD, aE) || (fF.dB(aD, aE), jz.f0() ? jz.dB(aD, aE) : g5.g6 ? g5.dB(aD) && (c0.d1 = !0) : (jw.dB(aD, aE), jx.a1S && jx.dB(aD, aE) && (c0
			.d1 = !0))))
	}

	function a14(e8) {
		a1G() || (a1H(e8, 1), a1T(), 0 === f.j6 ? (dV.click(-1024, -1024), d9.reset()) : (jw.dE(-1024, -1024), fF.dB(-1024, -1024), g5.a1U(), jx.a1S = !1))
	}

	function a13(e8) {
		a1G() || (a1H(e8, 1), a1V(Math.floor(ao.hG * e8.clientX), Math.floor(ao.hG * e8.clientY), 2 === e8.button), nm.a11 && (nm.a11 = !1, e8.preventDefault()))
	}

	function click(e8) {
		a1G() || a1H(e8, 1)
	}

	function a17(e8) {
		a0x = c0.fr, a1H(e8, 1), e8 && e8.touches && 0 < e8.touches.length && 0 !== f.j6 ? jx.a1S = !1 : a1L.a1W() || (a1V(a0v, a0w, !1), nm.a11 && (nm.a11 = !1, e8.preventDefault()))
	}

	function a18(e8) {
		a0x = c0.fr, a1H(e8, 1), a1V(a0v, a0w, !1), nm.a11 && (nm.a11 = !1, e8.preventDefault())
	}

	function a19(e8) {}

	function a1A(e8) {}

	function a1B(e8) {
		a1G() || a1H(e8, 0)
	}

	function a1V(aD, aE, a1X) {
		a1T(), 0 === f.j6 ? dV.click(aD, aE) : (jw.dE(aD, aE), jt.dE(), g5.a1U(), jx.a1S = !1, jz.click(aD, aE, a1X) ? c0.d1 = !0 : fF.a13(aD, aE))
	}

	function a1T() {
		dk.a1T()
	}

	function dC(e8) {
		var aD, aE, deltaY;
		a1G() || (a1H(e8, 1), bZ.af.a1I(bZ.af.a1J), aD = Math.floor(ao.hG * e8.clientX), aE = Math.floor(ao.hG * e8.clientY), deltaY = e8.deltaY, 1 === e8.deltaMode && (deltaY *= 16), dk.dC(aD, aE, deltaY), 0 === f.j6 ? dV.dC(aD, aE, deltaY) : jw.dC(
			aD, aE, deltaY) || (g5.a1Y(aD, aE) ? g5.dC(deltaY) && (c0.d1 = !0) : jx.dC(aD, aE, deltaY)))
	}

	function a1C(e8) {
		a1H(e8, 0)
	}

	function a1H(e8, id) {
		0 === id && dk.f0() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== dV.dW() && e8.preventDefault()
	}

	function a1D(e8) {
		if (__fx.keybindHandler(e8.key)) return;
		a1G() || 0 < ao.wJ || (e8 = e8.code) && e8.length && (a1a.eF(e8, 18) ? a1b.a1c(3) : a1a.eF(e8, 22) ? a1b.a1c(0) : a1a.eF(e8, 20) ? a1b.a1c(1) : a1a.eF(e8, 24) ? a1b.a1c(2) : a1a.eF(e8, 10) ? g5.a1d(31 / 32) : a1a.eF(e8, 8) ? g5.a1d(32 / 31) :
			a1a.eF(e8, 6) ? g5.a1d(7 / 8) : a1a.eF(e8, 4) ? g5.a1d(8 / 7) : a1a.eF(e8, 14) ? 0 !== f.j6 && jx.dC(Math.floor(ao.ap / 2), Math.floor(ao.ar / 2), -200) : a1a.eF(e8, 16) ? 0 !== f.j6 && jx.dC(Math.floor(ao.ap / 2), Math.floor(ao.ar /
				2), 200) : a1a.eF(e8, 0) ? f.j6 && a1R.g0(0) : a1a.eF(e8, 2) ? f.j6 && a1R.g0(1) : a1a.eF(e8, 30) ? f.j6 && a1R.g0(2) : a1a.eF(e8, 26) ? f.j6 && a1R.gn() : a1a.eF(e8, 28) && f.j6 && a1R.gt())
	}

	function a1E(e8) {
		if (!a1G() && !(0 < ao.wJ || c0.fr < 400)) {
			var code = e8.code;
			if (code && code.length && !("Enter" === code && dk.eE(1) || "Space" === code && dk.eE(0))) return la.zG ? la.a1e.eE(code) ? void 0 : void("Escape" === code && nm.a1f()) : void(8 !== dV.dW() && dV.eE(e8) ? c0.d1 = !0 : "Escape" === code ?
				nm.a1f() : a1a.eF(code, 18) ? a1b.a1g(3) : a1a.eF(code, 22) ? a1b.a1g(0) : a1a.eF(code, 20) ? a1b.a1g(1) : a1a.eF(code, 24) ? a1b.a1g(2) : a1a.eF(code, 12) ? fG.a1h(!f.hT) : "Space" === code && f.j6 && (fF.g2 && fF.fH(), f
				.g1) && fG.a1i(!1))
		}
	}

	function a1F() {
		"hidden" !== document.visibilityState && (c0.d1 = !0)
	}

	function a1G() {
		return a0x + 15e3 > c0.fr
	}

	function resize() {
		ao.a1k()
	}
	this.a0z = 0, this.a10 = "", this.a11 = !1, this.cm = 0, this.fy = 0, this.e = function() {
		a12.addEventListener("mousedown", dD, {
			passive: !1
		}), a12.addEventListener("mousemove", dB, {
			passive: !1
		}), a12.addEventListener("mouseup", a13, {
			passive: !1
		}), a12.addEventListener("click", click, {
			passive: !1
		}), a12.addEventListener("mouseleave", a14, {
			passive: !1
		}), a12.addEventListener("wheel", dC, {
			passive: !1
		}), a12.addEventListener("touchstart", a15, {
			passive: !1
		}), a12.addEventListener("touchmove", a16, {
			passive: !1
		}), a12.addEventListener("touchend", a17, {
			passive: !1
		}), a12.addEventListener("touchcancel", a18, {
			passive: !1
		}), a12.addEventListener("dragover", a19), a12.addEventListener("drop", a1A), a12.addEventListener("dblclick", a1B), document.addEventListener("contextmenu", a1C), document.addEventListener("keydown", a1D), document.addEventListener(
			"keyup", a1E), document.addEventListener("visibilitychange", a1F), window.addEventListener("resize", resize)
	}, this.a1O = function(aD, aE) {
		return !!fG.dD(aD, aE) || !!(jw.dD(aD, aE) || jx.dD(aD, aE) || g5.dD(aD, aE) || c5.dD(aD, aE))
	}, this.a1j = a1G, this.nn = function() {
		return !a0y || 0 < a0x
	}, this.a1f = function() {
		if (!dk.f0()) return 8 === dV.dW() ? f.hT ? void fG.a1h(!1) : jt.f0 ? void jt.fH() : void fF.fH() : void(7 !== dV.dW() && 6 === dV.dW() && i4.a1l());
		dk.eE(2)
	}
}

function a1m() {
	var dY, dZ, da, ds;

	function de() {
		di(), 2 !== f.data.sResourcesType && (f.data.sResourcesData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		2 === f.data.sResourcesType && v.aN.dn(da.dp(), f.data.sResourcesData, 2047)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(51), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(48), L(41), L(9)],
			value: f.data.sResourcesType
		}, function(t) {
			di(), 2 !== t || f.data.sResourcesData || (f.data.sResourcesData = new Uint16Array(f.g)), f.data.sResourcesType = t, dk.e3(28)
		})), ds.push(dx)
	}(ds = []), function(ds) {
		var dx;
		1 === f.data.sResourcesType && ((dx = new dy).dz("Value"), dx.e4(new e7({
			t: -1,
			value: f.data.sResourcesValue
		}, 1, 0, function(e8) {
			var value = fD.ok(Math.floor(e8.target.value), 0, 2047);
			e8.target.value = f.data.sResourcesValue = value
		})), ds.push(dx))
	}(ds), function(ds) {
		var dx;
		2 === f.data.sResourcesType && ((dx = new dy).dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.sResourcesData, 2)), dx.e4(da), ds.push(dx))
	}(ds), ds))
}

function ti() {
	var a1q, a1r, a1n = document.createElement("div"),
		a1o = document.createElement("div"),
		tP = 0,
		a1p = 0;
	this.show = function(aD, aE, bJ, th, a1t, eF) {
			if (tP) {
				if (!th) return;
				this.eD()
			}
			aD === aE && -1 === aD ? (aD = a1q, aE = a1r) : (a1q = aD, a1r = aE);
			var a1u = Math.floor(v.w.ke(.018)),
				a1t = (aD = Math.max(a1u + 2, aD), a1t || (a1p = th), tP = 1, ao.ap / ao.hG),
				th = (a1n.style.whiteSpace = "pre", a1n.textContent = bJ, v.w.hL(a1n, 5), a1n.style.font = v.w.bA(0, v.w.ke(.015)), a1n.style.padding = "0.3em 0.6em", a1n.style.left = aD + "px", a1n.style.top = "0px", document.body.appendChild(a1n),
					aD + a1n.offsetWidth - a1t),
				bJ = (0 < th && (aD -= th, aD = Math.max(a1u + 1, aD), a1n.style.left = aD + "px", aD < a1u + 2) && (a1n.style.whiteSpace = "pre-wrap"), a1n.offsetHeight);
			a1n.style.top = aE - bJ + a1p * f7.a1x + "px", aD -= a1u, a1o.style.backgroundColor = v.color.kt(eF >> 12 << 2, (eF >> 6 & 63) << 2, (63 & eF) << 2), a1o.style.left = aD + "px", a1o.style.top = a1n.style.top, a1o.style.width = a1u + "px",
				a1o.style.height = bJ + "px", v.w.hL(a1o, 4), v.w.hL(a1o, 8), v.w.hL(a1o, 2), document.body.appendChild(a1o)
		}, this.eD = function(tj) {
			if (tP) {
				if (tj && a1p) return 0;
				tP = 0, dk.removeChild(document.body, a1n), dk.removeChild(document.body, a1o)
			}
			return 1
		}, a1n.style.position = "absolute", a1n.style.backgroundColor = b7.a1s, a1n.style.color = b7.b9, a1n.style.pointerEvents = "none", a1n.style.zIndex = "5", a1n.style.maxWidth = "100%", a1o.style.position = "absolute", a1o.style.color = b7.b9,
		a1o.style.pointerEvents = "none", a1o.style.zIndex = "5"
}

function a1y() {
	var a1z, a20, vU, aC;
	this.e = function() {
		var q, aD, aE, v1, a21, ap, ar, fY, z, a0, ff, c9, aH, ca, a24;
		if (function() {
				if (vU = !0, aC = "rgb(" + au.mi[0] + "," + au.mi[1] + "," + au.mi[2] + ")", au.a0q(au.m3)) return 1;
				return vU = !1, 0
			}()) a20 = null;
		else {
			for (a1z = fD.fE(96, 4), a21 = 1 === au.m3 ? (v1 = 0, 160) : (v1 = 128, 32), aC = "rgb(" + v1 + "," + v1 + "," + v1 + ")", a20 = new Array(4), q = 3; 0 <= q; q--) {
				if (a20[q] = document.createElement("canvas"), ap = q % 2 == 0 ? au.av : a1z, ar = q % 2 == 0 ? a1z : au.ef + 2 * a1z, a20[q].width = ap, a20[q].height = ar, a0 = (z = (fY = a20[q].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, ap, ar)).data, q % 2 == 0)
					for (aE = a1z - 1; 0 <= aE; aE--)
						for (ff = a21 + Math.floor((aE + 1) * (v1 - a21) / (a1z + 1)), aD = ap - 1; 0 <= aD; aD--) a0[c9 = 4 * ((0 === q ? a1z - aE - 1 : aE) * ap + aD)] = ff, a0[c9 + 1] = ff, a0[c9 + 2] = ff, a0[c9 + 3] = 255;
				else {
					for (aD = a1z - 1; 0 <= aD; aD--)
						for (ff = a21 + Math.floor((aD + 1) * (v1 - a21) / (a1z + 1)), aE = ar - 1 - a1z; a1z <= aE; aE--) a0[c9 = 4 * (aE * ap + (3 === q ? a1z - aD - 1 : aD))] = ff, a0[c9 + 1] = ff, a0[c9 + 2] = ff, a0[c9 + 3] = 255;
					for (ca = 1; 0 <= ca; ca--)
						for (aD = a1z - 1; 0 <= aD; aD--)
							for (aE = a1z - 1; 0 <= aE; aE--) aH = (Math.pow(aD * aD + aE * aE, .5) + 1) / (a1z + 1), ff = a21 + Math.floor((1 < aH ? 1 : aH) * (v1 - a21)), a0[c9 = 4 * ((0 === ca ? a1z - aE - 1 : aE + ca * (ar - a1z)) * ap + (
								1 === q ? aD : a1z - aD - 1))] = ff, a0[c9 + 1] = ff, a0[c9 + 2] = ff, a0[c9 + 3] = 255
				}
				fY.putImageData(z, 0, 0)
			}
			a24 = a21, au.sn.fillStyle = "rgb(" + a24 + "," + a24 + "," + a24 + ")", au.sn.fillRect(0, 0, au.av, 1), au.sn.fillRect(0, au.ef - 1, au.av, 1), au.sn.fillRect(0, 0, 1, au.ef), au.sn.fillRect(au.av - 1, 0, 1, au.ef)
		}
	}, this.hk = function() {
		var ca = vU ? 0 : -a1z;
		a25(ca, ca, au.av - 2 * ca, au.ef - 2 * ca, xG.pE, xG.pF, xG.pG, xG.pH) || (b5.fillStyle = aC, b5.fillRect(0, 0, ao.ap, ao.ar))
	}, this.aR = function() {
		vU || (a26(0, -a1z, au.av, a1z, xG.pE, xG.pF, xG.pG, xG.pH) && b5.drawImage(a20[0], xG.pC, xG.pD - a1z), a26(au.av, -a1z, a1z, au.ef + 2 * a1z, xG.pE, xG.pF, xG.pG, xG.pH) && b5.drawImage(a20[1], xG.pC + au.av, xG.pD - a1z), a26(0, au.ef,
			au.av, a1z, xG.pE, xG.pF, xG.pG, xG.pH) && b5.drawImage(a20[2], xG.pC, xG.pD + au.ef), a26(-a1z, -a1z, a1z, au.ef + 2 * a1z, xG.pE, xG.pF, xG.pG, xG.pH) && b5.drawImage(a20[3], xG.pC - a1z, xG.pD - a1z))
	}
}

function a0i() {
	var bJ;
	10 === au.m3 ? bJ =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === au.m3 ? bJ =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === au.m3 ? bJ =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === au.m3 ? bJ =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === au.m3 ? bJ =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === au.m3 ? bJ =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === au.m3 ? bJ =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === au.m3 ? bJ =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === au.m3 ? bJ =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === au.m3 ? bJ =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === au.m3 ? bJ =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === au.m3 ? bJ =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === au.m3 && (bJ =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new a27).eJ(bJ)
}

function sN() {
	var a28 = a29(),
		a2A = sO(),
		a2B = eH();
	this.eN = function() {
		return 123
	}, this.kJ = function() {
		bh.bi.bj(bK.buffer.data[183].value, 15), bW.bY(14, a28), bW.bY(7, a2A), bW.bY(12, a2B)
	}
}

function a2C() {
	this.e = function() {
		! function() {
			var data = bK.buffer.data;
			0 === data[2].bM && (ao.ar > ao.ap || 0 !== cu.id) && (data[2].value = data[2].bP = 1);
			0 === data[100].bM && (data[100].value = data[100].bP = (0 === cu.id ? "Player " : 1 === cu.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var q, data = bK.buffer.data,
			n = data.length;
		for (q = 0; q < n; q++) {
			var sA = bK.bL.a2F(q, !0);
			data[q] && data[q].bM === sA && (null === (sA = bK.bL.a2G(q)) ? data[q].value = data[q].bP : 2 === data[q].type ? data[q].value = sA : (sA = Number(sA), isNaN(sA) ? data[q].value = data[q].bP : data[q].value = sA))
		}
	}
}

function a2I() {
	this.data = new a2J;
	var a2K = (new a2L).L84,
		a2N = (this.xw = a2K, !(this.a2M = "en"));
	this.e = function() {
		var bJ, a8;
		a2N = !1, ("en" === (bJ = bK.buffer.data[12].value).split("-")[0].toLowerCase() ? (sB.xw = a2K, sB.a2M = bJ, 1) : bK.buffer.data[12].value === bK.buffer.data[145].value && 0 < bK.buffer.data[146].value && (bJ = bK.buffer.data[146].value,
			(a8 = bK.bL.a2V(bJ, !1)).length === bJ) && !!v.aN.a2W(a8) && function(a8) {
			for (var n = a8.length, ar = 0; ar < n; ar++) a8[ar] = a8[ar].replace("&#39;", "'");
			var a2Y = bK.bL.a2V(n, !0);
			if (n !== a2Y.length) return !1;
			if (!v.aN.a2W(a2Y)) return !1;
			for (var aL = a2K.length, d0 = new Array(aL), a2Z = aL === n, hd = Math.min(n, aL), q = 0; q < aL; q++)
				if (d0[q] = a2K[q], q < n && a2Y[q] === d0[q]) d0[q] = a8[q];
				else {
					a2Z = !1;
					for (var ku = 0; ku < hd; ku++)
						if (a2Y[ku] === d0[q]) {
							d0[q] = a8[ku];
							break
						}
				} return sB.xw = d0, sB.a2M = bK.buffer.data[12].value, a2Z
		}(a8)) || (a2N = !0)
	}, this.a2S = function() {
		l.f4(), jn.f4(), jt.f4(), fI.f4(), a2T.e(), lH = new a2U
	}, this.xx = function() {
		return this.xw === a2K || !a2K.length
	}, this.x1 = function() {
		var a2a;
		return !!a2N && (a2N = !1, 0 !== a2K.length) && (a2a = bK.buffer.data[12].value, bZ.be.a2b(0, a2a.slice(0, 20)), !0)
	}, this.a2c = function(a8) {
		a8.length !== a2K.length ? 8 === dk.iI && dk.i9().x4(30, 0, 1) : (this.xw = a8, this.a2M = bK.buffer.data[12].value, bK.iF.bH(145, this.a2M), bK.iF.bH(146, a8.length), bK.bL.a2d(a8, !1), bK.bL.a2d(a2K, !0), 8 === dk.iI ? dk.i9().x4(30) :
			0 === dV.dW() && 5 === dk.iI && dk.af.i7())
	}, this.a2e = function() {
		var sA, a8 = navigator.languages;
		return a8 && a8.length ? (sA = Math.max(sB.data.sC(a8[0]), 0), 1 === a8.length ? [sA, sA] : [sA, Math.max(sB.data.sC(a8[1]), 0)]) : [0, 0]
	}
}

function a2f() {
	var a2g = [];
	this.e = function() {
		a2g = []
	}, this.a0Z = function() {
		return 65536 === a2g.length
	}, this.a2h = function(a2i, a2j) {
		for (var a0V = a2g, n = a0V.length, q = 0; q < n; q++) {
			var c9 = a0V[q];
			if (c9[0] === a2i && c9[c9.length - 1] === a2j) return q
		}
		return -1
	}, this.a0W = function(vp) {
		var a2k = new Uint32Array(vp.length);
		return a2k.set(vp), a2k.reverse()
	}, this.a2l = function(gT, wF) {
		var hd = gT.length - 1,
			a2m = new Uint32Array(hd + wF.length);
		return a2m.set(gT, 0), a2m.set(wF, hd), a2m
	}, this.a2n = function(gT, wF, a2o, a2, a2p) {
		a2p && (a2o = (wF = this.a0W(wF)).length - a2o - 2);
		a2p = wF.subarray(a2o + 1 + (a2 === wF[a2o + 1])), a2 = new Uint32Array(gT.length + a2p.length);
		return a2.set(gT, 0), a2.set(a2p, gT.length), a2
	}, this.a2r = function(vp) {
		return a2g.push(vp), a2g.length - 1
	}, this.get = function(q) {
		return a2g[q]
	}, this.a2s = function() {
		return a2g
	}, this.a2t = function(a2i, a2j) {
		return null
	}
}

function sJ() {
	function a2x(a8, ff, h2) {
		for (var q = 0; q < 256; q++) a8[q] = (a8[q] + (ff >> (q + h2) % 30 & 1)) % 256
	}
	this.bu = function(a2u, a2v) {
		var a8 = new Uint8Array(256);
		return function(a8, a2u, a2v) {
				var q, a2z = 3 + (4 + a2u) % 32768,
					a30 = 12 + a2v % 32768,
					a31 = 17 + ((a2u & a2v) + (a2u | a2v) + a2u) % 32768;
				for (q = 0; q < 256; q++) a2z = 1 + a2z * a30 % a31, a8[q] = a2z % 256
			}(a8, a2u, a2v), a2x(a8, a2u, 2), a2x(a8, a2v, 7),
			function(a8) {
				var q, ff, t = 0;
				for (q = 0; q < 3e4; q++) ff = a8[t], a8[t] = (ff + q + a8[(t + q) % 256]) % 256, t = (ff + q + t + (ff & t)) % 256
			}(a8),
			function(a8) {
				var q, er = 1,
					es = 1;
				for (q = 0; q < 256; q += 2) er = (1 + er) * (a8[q] + 1) % 1073741824, es = (1 + es) * (a8[q + 1] + 1) % 1073741824;
				return [er, es]
			}(a8)
	}, this.a32 = function(a33, a34, a35, result) {
		for (var hd = 1 << a33, q = 0; q < hd; q++)
			if (this.a36(q, a34, a35) === result) return q;
		return 0
	}, this.a36 = function(a37, a34, a35) {
		for (var a38 = a34 + a37, a39 = a35 + a37, ff = a38 + a39 & 2147483647, ca = 1; ca <= 16; ca++) ff = (ff = (ff ^ ff >> ca) >>> 1 + (3 & a38)) * (7 + (1023 & (a38 | a39))) & 1073741823, a39 >>= 1 + (1 & (a38 >>= 1 + (1 & (ff += 65535 &
			a39))));
		return ff &= 1073741823
	}
}

function a3A() {
	this.ts = new a3B, this.a3C = new a, this.af = new a3D, this.xa = new a3E, this.a24 = new a3F, this.a3G = new tk, this.my = new a3H, this.a0Q = new a3I, this.a3J = new a3K, this.a3L = new a3M, this.a0X = new a3N, this.gh = new a3O, this.a0V =
		new a2f, this.td = new vF, this.gk = new a0B, this.tq = new a3P, this.a3Q = new a3R, this.e = function() {
			this.a0V.e(), this.a3C.e(), this.af.e(), this.xa.e(), this.a24.e(), this.a3L.e(), this.tq.e()
		}, this.aR = function() {
			this.a3L.aR(), this.a3C.aR()
		}
}

function a3I() {
	this.a3S = function(player, a2j) {
		return -1 !== a2j && !!ae.td.vY(player, a2j) && this.a0R(player, a2j, 0)
	}, this.a0R = function(player, a2j, a3T) {
		player = function(player, a2j, a3T) {
			var a0M = ae.td.vJ(player, a2j);
			if (-1 === a0M) return -1;
			a0M = ae.td.vR(a0M, a2j);
			if (-1 === a0M) return -1;
			var a3U = ae.a0V.a2h(a0M, a2j);
			if (0 <= a3U) return a3U;
			if (ae.a0V.a0Z()) return -1;
			if (0 <= (a3U = ae.a0V.a2h(a2j, a0M))) return ae.a0V.a2r(ae.a0V.a0W(ae.a0V.get(a3U)));
			if (a0M === a2j) return ae.a0V.a2r(new Uint32Array([a0M, a2j]));
			if (0 <= (a3U = ae.a3J.a0R(a0M, a2j))) return a3U;
			return a3T ? function(a3X, player) {
				var ee = a9.ee,
					buffer = (ee.fill(0), [a3X]),
					xL = (ee[a3X] = 1, cX.xL),
					a3Y = -1,
					n = buffer.length;
				for (; - 1 === a3Y && n;) {
					for (var a8 = [], q = 0; q < n; q++)
						for (var a2 = buffer[q], pg = ee[a2], f6 = 0; f6 < 8; f6++) {
							var p5, a3Z, vP = a2 + xL[f6],
								a3 = 4 * vP;
							a6.vU(a3) ? (p5 = ee[vP], a3Z = pg + 5 + ((1 & f6) << 1), 0 === p5 ? (a8.push(vP), ee[vP] = a3Z) : ee[vP] = Math.min(a3Z, p5)) : -1 === a3Y && f6 % 2 == 0 && a6.wo(player, a3) && (a3Y = a2)
						}
					n = (buffer = a8).length
				}
				return -1 !== a3Y ? function(vS, a3b) {
					var xL = cX.xL,
						a3c = -1,
						h1 = 0,
						fg = [];
					for (; a3b !== vS;)(h1 = function(a2, h1) {
						var ee = a9.ee,
							xL = cX.xL,
							pg = ee[a2];
						if (pg - ee[a2 + xL[h1]] != 5 + ((1 & h1) << 1))
							for (var ca = 0; ca < 8; ca++) {
								var f6 = ca + h1 + 6 & 7;
								if (pg - ee[a2 + xL[f6]] == 5 + ((1 & f6) << 1)) return f6
							}
						return h1
					}(a3b, h1)) !== a3c && (fg.push(a3b), a3c = h1), a3b += xL[h1];
					fg.push(vS);
					var a3U = ae.a0V.a2h(fg[0], vS);
					if (0 <= a3U) return a3U;
					return ae.a0V.a2r(new Uint32Array(fg))
				}(a3X, a3Y) : -1
			}(a2j, player) : -1
		}(player, a2j, a3T);
		return -1 !== player && (a9.a8[0] = ae.a0V.get(player), !0)
	}
}

function a3H() {
	this.bu = function(player) {
		return !!ae.a0X.a0Y(player) && !(ae.af.rq[player] >= Math.max(3 * cU.performance.a3e, jn.a3f[jn.aW[player]]) || !v.c2.a3g(player, jn.a3h[jn.aW[player]], 32, 0)) && (fv.a3i() ? function(player) {
			var a3o = ae.td.wB(),
				n = a3o.length;
			if (0 === n) return !1;
			a3o = a3o[jX.tI(n)], n = ae.af.vc[a3o];
			if (ae.tq.a3q(player, n)) return !1;
			return !! function(player, a3p) {
				var a3p = cX.tp(ae.af.ad[a3p]),
					g8 = cX.cY(a3p),
					a3p = cX.cZ(a3p),
					az = cD.sS[player],
					b1 = cD.sT[player],
					b3 = cD.sU[player],
					player = cD.sV[player],
					b3 = Math.max(g8 - b3, az - g8),
					az = Math.max(a3p - player, b1 - a3p);
				return b3 < 100 && az < 100
			}(player, a3o) && !!ae.gk.a0G(player, n, 1) && (v.c2.a3s(player), ae.af.a3t(player), !0)
		}(player) : !!(cU.a3k.bu(player) || cU.a3l.bu(player) || cU.a3m.bu(player)) && (function(player) {
			a9.eZ[1] = 4, v.c2.a3s(player), ae.af.a3t(player)
		}(player), !0))
	}
}

function a3u(a3v) {
	var nW = document.createElement("div"),
		a3w = document.createElement("div"),
		a3x = [];

	function a3z() {
		nm.nn() || (this.style.backgroundColor = v.color.a43(b7.a1s, 50))
	}

	function a40() {
		this.style.backgroundColor = b7.a1s
	}
	this.bH = function(a41, a42) {
			a3x[2].textContent = a41 + 1 + " / " + a42
		}, this.show = function(c4) {
			c4 = la.td.lL(c4, la.td.lB(c4)), a3w.appendChild(la.lq.transform(c4)), document.body.appendChild(nW)
		}, this.resize = function() {
			var ar = v.w.ke(.03, .5);
			nW.style.width = 10 * ar + "px", nW.style.font = v.w.bA(1, .75 * ar), v.w.hL(nW, 4), a3w.style.top = ar + "px", a3w.style.font = v.w.bA(0, .55 * ar), v.w.hL(a3w, 2), nW.style.height = ar + a3w.offsetHeight + "px";
			for (var q = 0; q < 3; q++) v.w.hL(a3x[q], 6), a3x[[0, 1, 3][q]].style.width = 2 * ar + "px";
			for (q = 0; q < 4; q++) a3x[q].style.height = ar + "px", v.w.hL(a3x[q], 2);
			a3x[2].style.width = 4 * ar + "px", a3x[1].style.left = 2 * ar + "px", a3x[2].style.left = 4 * ar + "px", a3x[3].style.left = 8 * ar + "px"
		}, this.q4 = function() {
			for (var q = 0; q < 4; q++) a3x[q].onclick = null, a3x[q].onmouseover = null, a3x[q].onmouseout = null;
			dk.removeChild(document.body, nW), nW = a3w = a3x = null
		}, nW.style.position = "absolute", nW.style.color = b7.b9, nW.style.zIndex = "3", nW.style.right = "0", nW.style.top = "0", a3w.style.position = "absolute", a3w.style.height = "auto", a3w.style.color = b7.b9, a3w.style.backgroundColor = b7
		.a1s, a3w.style.left = "0", a3w.style.width = "100%", a3w.style.overflowWrap = "break-word", nW.appendChild(a3w);
	for (var q = 0; q < 4; q++) a3x[q] = document.createElement("div"), a3x[q].style.position = "absolute", a3x[q].style.backgroundColor = b7.a1s, a3x[q].style.color = b7.b9, a3x[q].style.top = "0", a3x[q].style.display = "flex", a3x[q].style
		.justifyContent = "center", a3x[q].style.alignItems = "center", a3x[q].style.userSelect = "none", a3x[q].style.outline = "none", a3x[q].style.font = "inherit", 2 !== (a3x[q].a3y = q) && (a3x[q].onclick = a3v, a3x[q].onmouseover = a3z, a3x[q]
			.onmouseout = a40), nW.appendChild(a3x[q]);
	a3x[0].textContent = "◀", a3x[1].textContent = "▶", a3x[3].textContent = "✖"
}

function a44() {
	this.kG = new yV, this.kI = new a45, this.qL = new a46, this.e = function() {
		f.g1 || this.kG.e()
	}, this.bu = function() {
		f.g1 || (this.kG.bu(), 3 !== dk.iI) || c0.c1() % 15 != 5 && 2 !== f.j6 || dk.i9().yo()
	}, __fx.replay.restartReplay = () => this.yr(), this.yr = function() {
		var a48 = 0 !== f.j6,
			a49 = f.jM;
		a48 || dV.oV(), f.jK.oW(), f.data.canvas = null, bZ.af.close(bZ.af.a1J, 3257), bZ.af.a1J = 0, f.data.isReplay = 1, f.jO(), a48 && (f.jM = a49)
	}, this.yq = function(bJ) {
		var q = bJ.indexOf("=");
		return 0 <= q ? bJ.substring(q + 1) : bJ
	}, this.yp = function(bJ) {
		return bJ
	}, __fx.replayHistory.load = saved => {
		saved = jr.yq(saved), jr.qL.eJ(saved) && jr.yr()
	}
}

function a4A() {
	var a4B = [];
	this.a4C = function(player, pb, a4D, a4E) {
		player === f.al || pb === f.al || !a4E && v.c2.rO(player) || v.c2.rO(pb) || this.cC(cD.cE[player] + " supported " + cD.cE[pb] + " with " + v.bB.bC(a4D) + " ressource" + (1 === a4D ? "." : "s."))
	}, this.cC = function(bJ, o8) {
		bJ = {
			fr: fv.a4G(),
			bJ: bJ,
			o8: o8
		};
		a4B.push(bJ), 30 === dk.iI && dk.i9().cC(bJ)
	}, this.clear = function() {
		a4B = [];
		var tg = dk.a4H(30);
		tg && tg.clear()
	}, this.a4I = function() {
		return a4B
	}
}

function a4J() {
	var a4K, a4L, a4M;

	function a4P(a4R) {
		for (var q = a4K - 1; 0 <= q; q--) 0 === a4M[a4L[q]] && cD.fh[a4L[q]] >= a4R && a4O(a4L[q])
	}

	function a4N(player) {
		var d8;
		64 === a4M[player] ? a4M[player] = 6 : (d8 = cD.fh[player], a4M[player] = d8 < 1e3 ? 3 : d8 < 1e4 ? 2 : d8 < 6e4 ? 1 : 0)
	}
	this.e = function() {
		a4K = 0, a4L = new Uint16Array(f.g), a4M = new Uint8Array(f.g)
	}, this.bu = function() {
		for (var q = a4K - 1; 0 <= q; q--) 64 === a4M[a4L[q]] ? a4N(a4L[q]) : 0 == a4M[a4L[q]]-- && (a4N(a4L[q]), a4O(a4L[q]));
		16e4 <= cD.fh[cP[0]] && (a4P(16e4), 3e5 <= cD.fh[cP[0]]) && a4P(3e5), v.c2.c7(f.al) && (fI.fg[7] = Math.max(cD.fh[f.al], fI.fg[7]))
	}, this.wS = function(player) {
		for (var ca, q = a4K - 1; 0 <= q; q--)
			if (player === a4L[q]) {
				for (a4K--, ca = q; ca < a4K; ca++) a4L[ca] = a4L[ca + 1];
				return
			}
	}, this.uH = function(player, a4S) {
		for (var q = a4K - 1; 0 <= q; q--)
			if (player === a4L[q]) return;
		a4L[a4K++] = player, a4M[player] = a4S ? 2 : 64
	}
}

function a4T() {
	var a4U = new Uint16Array(f.g),
		a4V = 0;

	function a4b(iM, a4Z) {
		var eF = c0.c1();
		return 3213 <= eF ? 4 + fD.fE(100 * a4Z, jZ.su(iM)) : (iM = 1 + fD.fE(f.j7, 300), eF < 357 ? 2 + fD.fE(100 * a4Z, iM) : eF < 714 ? 2 + fD.fE(100 * a4Z, 4 * iM) : eF < 1071 ? 2 + fD.fE(100 * a4Z, 10 * iM) : eF < 2142 ? 2 + fD.fE(100 * a4Z,
			30 * iM) : 2 + fD.fE(100 * a4Z, 100 * iM))
	}

	function a4a(iM) {
		return f.j5 || 4284 <= c0.c1() || v.c2.rO(iM)
	}
	this.e = function() {
		a4U.fill(0), a4V = 15
	}, this.gl = function(pb) {
		var player = f.al;
		return !!v.c2.a4W(player, pb) && !(!v.c2.a4X(player, v.c2.xT(player, g5.gW()), pb) || (player = pb, pb = a9.eT[0], !a4a(player) && a4U[player] + a4b(player, pb) > a4V))
	}, this.uG = function(iM, a4Z) {
		if (!a4a(iM)) {
			a4Z = a4b(iM, a4Z);
			if (a4U[iM] + a4Z > a4V) return !1;
			a4U[iM] += a4Z
		}
		return !0
	}, this.bu = function() {
		c0.c1() % 100 == 99 && (c0.c1() < 1071 ? a4V += 4 : c0.c1() < 2142 ? a4V += 6 : c0.c1() < 3213 ? a4V += 8 : a4V += 10)
	}
}

function a4c() {
	this.e = function() {
		this.a8 = [], this.t = 0
	}, this.sE = function() {
		return new Uint8Array(this.a8)
	}, this.bY = function(a4d, value) {
		for (var a8 = this.a8, bQ = this.t + a4d - 1, a4e = 1 + (bQ >> 3); a8.length < a4e;) a8.push(0);
		for (var q = this.t; q <= bQ; q++) a8[q >> 3] |= (value >> bQ - q & 1) << 7 - (7 & q);
		this.t += a4d
	}, this.a4f = function(a8, eK, qA) {
		var a4g = v.aN.a4h(a8);
		this.bY(eK, a4g);
		for (var q = 0; q < a4g; q++) this.bY(qA, a8[q])
	}, this.a4i = function(a8, eK, qD) {
		var a4g = v.aN.a4h(a8);
		this.bY(eK, a4g);
		for (var q = 0; q < a4g; q++) this.a4j(a8[q], qD)
	}, this.a4j = function(bJ, eK) {
		var n = bJ.length;
		this.bY(eK, n);
		for (var q = 0; q < n; q++) this.bY(16, bJ.charCodeAt(q))
	}, this.a4k = function(k) {
		var a4l = (k = k.toDataURL()).split(",");
		if (a4l.length < 2) console.log("error 266");
		else {
			k = v.bB.qI(k = a4l[a4l.length - 1], "/", "_"), k = v.bB.qI(k, "\\+", "-");
			var k = v.bB.qI(k, "=", ""),
				p7 = bh.bi.p4(k),
				n = p7.length;
			this.bY(30, n);
			for (var q = 0; q < n; q++) this.bY(6, p7[q])
		}
	}
}

function a29() {
	for (var u = 24, eF = document.createElement("canvas"), eF = (eF.width = u, eF.height = u, eF.getContext("2d", {
			alpha: !1
		})), f6 = (eF.fillStyle = "rgb(0,0,0)", eF.fillRect(0, 0, u, u), eF.font = "22px system-ui", eF.textBaseline = "middle", eF.textAlign = "center", eF.fillStyle = "rgb(255,255,255)", eF.fillText("Q", 12, 12), eF.getImageData(0, 0, u, u)
			.data), n = f6.length, aL = 0, q = 0; q < n; q += 4) aL += f6[q];
	return 16383 & aL
}

function a4m() {
	var a4n, a4o = [],
		a4p = -1,
		a4q = 0,
		a4r = 0;

	function a4z() {
		a4q = c0.fr, (3 === this.a3y ? a4y : (a4p = (a4o.length + a4p + 2 * this.a3y - 1) % a4o.length, a4x))()
	}

	function a4x() {
		0 !== a4o.length && (a4r = 0, a4n && a4n.q4(), (a4n = new a3u(a4z)).bH(a4p, a4o.length), a4n.show(a4o[a4p]), la.message.resize())
	}

	function a4y() {
		a4r = 1, a4n && a4n.q4(), (a4n = new a50(a4x)).bH(a4o.length), a4n.show(), la.message.resize()
	}
	this.a4s = function(lC) {
		var c4;
		2 === lC.id && 3 === lC.lG ? la.td.ll(lC.ij) : (c4 = la.td.lL(lC, la.td.lB(lC)), (5 !== lC.id && 6 !== lC.id || (dk.a4H(29).a4t().a4u(c4), 5 === lC.id)) && (c4 = c0.fr < a4q + 2e4, a4p !== a4o.length - 1 && c4 || (a4p = a4o.length), __fx
			.pingFilter.isMuted(lC, "lE") || (a4o.push(lC), bK.buffer.data[14].value || 7 === lC.id || a4w.play(), a4n && (a4r && (bK.buffer.data[13].value || c4) ? a4n.bH(a4o.length) : a4x()))))
	}, this.show = function() {
		a4y()
	}, this.eD = function() {
		a4p = a4o.length - 1, a4n && a4n.q4(), a4n = null
	}, this.resize = function() {
		a4n && a4n.resize()
	}, this.lp = function() {
		return a4o
	}
}

function a51(a52, a53, a54, a55) {
	var self;
	this.a56 = document.createElement("span"), (self = this).a56.textContent = a52, self.a56.style.color = b7.b9, self.a56.style.position = "absolute", self.a56.style.font = "inherit", a55 ? self.a56.style.bottom = "0.06em" : self.a56.style.top =
		"0.12em", a54 ? self.a56.style.left = "0.2em" : self.a56.style.right = "0.2em", self.a56.style.fontSize = "0.6em", self.a56.style.pointerEvents = "none", self.a56.style.whiteSpace = "pre", a53.style.position = "relative", a53.style.overflow =
		"hidden", a53.appendChild(self.a56)
}

function iD(title, yv, a57, a58) {
	var iP, wr;
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), wr.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, a58 = a58 || [new dd("⬅️ " + L(5), function() {
		dk.dm()
	})], iP = new dc(title, a58), wr = new wu(iP.dg, yv), a57 && v.w.textAlign(iP.dg.style, 1)
}

function a0A() {
	this.a59 = function() {
		var q;
		if (eM.size < bW.q8(23)) bZ.af.a5A(0, 3259);
		else {
			var bT = eM.eN(6),
				n = eM.eN(10),
				data = [];
			if (9 === bT || 10 === bT || 11 === bT || 13 === bT) {
				for (q = 0; q < n; q++) data.push([eM.eN(30), bh.sD.eJ(5), eM.q5(32), 0, eM.eN(30)]);
				8 === dk.iI && dk.i9().x4(21, !0, {
					bT: bT,
					data: data
				})
			} else if (12 === bT) {
				for (q = 0; q < n; q++) data.push([eM.eN(20), eM.eN(30), eM.eN(30), eM.q5(32), eM.eN(30), bh.sD.eJ(5), bh.sD.eJ(5)]);
				8 === dk.iI && dk.i9().x4(21, !0, {
					bT: bT,
					data: data
				})
			} else {
				var bn = eM.eN(16);
				if (eM.q6(39 + 16 * bn + n * (0 === bT ? 111 : 1 === bT ? 101 : 2 === bT || 3 === bT ? 127 : 212))) {
					if (0 === bT)
						for (q = 0; q < n; q++) data.push([eM.eN(30), bh.bp.iH(eM.eN(5)), eM.eN(16), eM.eN(30), eM.eN(30)]);
					else if (1 === bT)
						for (q = 0; q < n; q++) data.push([eM.eN(16), bh.bp.iH(eM.eN(3)), eM.eN(16), bh.bp.iH(eM.eN(5)), eM.eN(31), eM.eN(30)]);
					else if (2 === bT || 3 === bT)
						for (q = 0; q < n; q++) data.push([eM.eN(30), bh.bp.iH(eM.eN(5)), eM.q5(32), eM.eN(30), eM.eN(30)]);
					else
						for (q = 0; q < n; q++) data.push([eM.eN(20), eM.eN(30), eM.eN(30), eM.eN(30), eM.eN(30), eM.q5(32), eM.eN(30), bh.bp.iH(eM.eN(5)), bh.bp.iH(eM.eN(5))]);
					8 === dk.iI && dk.i9().x4(21, !0, {
						bT: bT,
						data: data
					})
				} else bZ.af.a5A(0, 3260)
			}
		}
	}, this.a5B = function() {
		if (eM.size < bW.q8(29)) bZ.af.a5A(0, 3265);
		else {
			var a5C = eM.eN(4),
				a5D = eM.eN(7),
				a5E = eM.eN(11);
			if (eM.q6(29 + 16 * a5D + 16 * a5E + 11 * a5C)) {
				for (var data = [], q = 0; q < a5C; q++) {
					for (var lh = bh.bp.iH(eM.eN(3)), a5F = eM.eN(8), a5G = [], ca = 0; ca < a5F; ca++) a5G.push(eM.eN(16));
					data.push({
						name: "[" + lh + "]",
						a5G: a5G
					})
				}
				8 === dk.iI && dk.i9().x4(23, !0, data)
			} else bZ.af.a5A(0, 3266)
		}
	}
}

function zz() {
	this.a5H = function(s1) {
		var username = bK.buffer.data[122].value.slice(0, 20),
			username = (bW.bX(24 + 16 * username.length + 18), bW.bY(1, 0), bW.bY(6, 1), bW.bY(10, jV.a5I), bW.bY(2, bK.buffer.data[158].value), bZ.be.bf(username), v.color.a5J(bK.af.y1()));
		bW.bY(6, username[0]), bW.bY(6, username[1]), bW.bY(6, username[2]), bZ.af.zH = s1, bZ.af.send(s1, bW.ba)
	}, this.a5K = function(a5L, s5) {
		s9.e(), s9.bY(1, 0), s9.bY(6, 2), s9.bY(3, a5L), 2 === a5L ? s9.bY(2, s5) : 3 === a5L ? bo.sD.kJ(s5, 7, s9) : 5 === a5L && (s9.bY(3, s5.id), s9.bY(3, s5.value), s9.bY(30, s5.ij)), bZ.af.send(bZ.af.zH, s9.sE())
	}
}

function a5M() {
	var a5N, a5O, a5P, a5Q, a5R, a5S, a5T, a5U, a5V, a5W, a5X, t2, a5Y, a5Z = 1,
		a5a = 0,
		a5b = 0;

	function a5f(a5g) {
		a5g ? a5Y = (a5Y + 1) % bZ.af.a5h : (bZ.af.close(a5Y, 3280), a5Z ? a5Z = 0 : (a5b = 1 - a5b, 0 === (a5a = (a5a + 1) % 2) && (a5Y = (a5Y + 1) % bZ.af.a5h, bZ.af.close(a5Y, 3280)))), t2 = c0.fr, i4.a5d = a5b, bZ.af.wz(a5Y, 4, 1) && bZ.zy.a5H(
			a5Y)
	}

	function a5j() {
		if (0 !== a5Y) return 1 === a5Y && __fx.customLobby.isActive() ? (nE.a5l(3249), __fx.customLobby.setActive(!1)) : void a5f();
		nE.a5l(3249)
	}

	function a5s(aE, ce, ns) {
		var az = Math.floor((ao.ap - a5Q) / 2) + a5T,
			b3 = az + Math.floor(ns * (a5Q - 2 * a5T));
		b5.lineWidth = ce, b5.beginPath(), b5.moveTo(az, aE), b5.lineTo(b3, aE), b5.lineTo(Math.floor(az - a5T + ns * a5Q), aE + a5P), b5.lineTo(az - a5T, aE + a5P), b5.closePath()
	}
	this.i5 = 1, this.a5c = 0, this.a5d = 0, this.e = function() {
		jP.turnstile.zC(), dV.setState(6), a5N = 0, a5O = 1, a5U = "rgba(0,220,120,0.4)", a5V = "rgba(0,0,0,0.8)", this.resize(), c0.d1 = !0, a5Z = 1, a5a = 0, a5Y = this.i5 - 1, a5b = 0 === this.a5c ? jV.a5e ? 1 : 0 : this.a5c - 1, a5f(1)
	}, this.resize = function() {
		a5Q = Math.floor((cu.cv.cw() ? .5 : .25) * ao.cx), a5R = a5Q + 12, a5P = Math.floor(.125 * a5Q), a5T = 3 * a5P, a5S = Math.floor(.225 * a5Q), a5X = Math.floor(.3 * a5P), a5W = v.w.bA(0, a5X)
	}, this.a5i = function(s1) {
		s1 === a5Y && a5j()
	}, this.dD = function(aD, aE) {
		var az = Math.floor((ao.ap - a5R) / 2),
			b1 = Math.floor(.5 * (ao.ar - f7.gap - a5P - a5S)) + a5P + f7.gap;
		return az < aD && aD < az + a5R && b1 < aE && aE < b1 + a5S && (this.a1l(), a5m.dB(aD, aE, !1), !0)
	}, this.a1l = function() {
		bZ.af.a5n(3260), __fx.customLobby.setActive(false), dk.af.i1()
	}, this.bu = function() {
		6 === dV.dW() && (c0.fr > t2 + 12e3 && a5j(), 100 < (a5N += .07 * a5O * (a5N < 16 ? 5 + a5N : 84 < a5N ? 105 - a5N : 17)) ? (a5N = 100, a5O = -1) : a5N < 0 && (a5N = 0, a5O = 1), a5U = "rgba(0," + Math.floor(190 - 1.9 * a5N) + "," + Math
			.floor(120 - 1.2 * a5N) + "," + (.4 + .004 * a5N) + ")", a5V = "rgba(0," + Math.floor(1.9 * a5N) + "," + Math.floor(1.2 * a5N) + "," + (.8 - .004 * a5N) + ")", c0.d1 = !0)
	}, this.aR = function() {
		var aD = Math.floor((ao.ap - a5R) / 2),
			aE = Math.floor(.5 * (ao.ar - f7.gap - a5P - a5S));
		! function(title, aE, ce, ns) {
			b5.fillStyle = a5V, a5s(aE, ce, 1), b5.fill(), b5.fillStyle = a5U, a5s(aE, ce, ns), b5.fill(), b5.strokeStyle = b7.b9, a5s(aE, ce, 1), b5.stroke(),
				function(a5u, aE) {
					v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = a5W, b5.fillStyle = b7.b9, b5.fillText(a5u, Math.floor(.5 * ao.ap), Math.floor(aE + .58 * a5P))
				}(title, aE)
		}(L(122), aE, 3, a5N / 100),
		function(aD, aE, ap, ar, lM) {
			b5.fillStyle = b7.a5r, b5.fillRect(aD, aE, ap, ar), b5.lineWidth = 3, b5.strokeStyle = b7.b9, b5.strokeRect(aD, aE, ap, ar);
			var n = Math.floor(.3 * ar);
			v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = v.w.bA(0, n), b5.fillStyle = b7.b9, b5.fillText(lM, Math.floor(aD + ap / 2), Math.floor(aE + ar / 2 + .1 * n))
		}(aD, aE + a5P + f7.gap, a5R, a5S, L(5))
	}
}

function a5v(ca, ku) {
	return 0 <= ca ? fD.fE(ca, ku) : -fD.fE(-ca, ku)
}

function a5w(ff) {
	return ff * ff
}

function d2(ca, ku) {
	return ku < ca ? ca : ku
}

function a5x(ca, ku) {
	return ca < ku ? ca : ku
}

function a5y(ca, ff, ku) {
	return ff < ca ? ca : ku < ff ? ku : ff
}

function a5z(ff, n) {
	for (var eF = fD.fE(ff + 1, 2), q = 0; q < n; q++) eF = fD.fE(eF + fD.fE(ff, eF), 2);
	return eF
}

function a60(ff, n) {
	return ff < 1 ? 0 : a5z(ff, n)
}

function a26(az, b1, dO, er, b3, b4, dP, es) {
	return !(az + dO <= b3 || b1 + er <= b4 || b3 + dP <= az || b4 + es <= b1)
}

function a25(az, b1, dO, er, b3, b4, dP, es) {
	return az <= b3 && b1 <= b4 && b3 + dP <= az + dO && b4 + es <= b1 + er
}

function a61(ff) {
	return Math.floor(!!ff * (1 + Math.log2(ff + .5)))
}

function a62() {
	this.w = new a63, this.aN = new a64, this.c2 = new a65, this.bB = new uI, this.fY = new a66, this.a67 = new a68, this.canvas = new a69, this.color = new a6A, this.a6B = new a6C, this.e = function() {
		this.w.a6D()
	}
}

function a2J() {
	this.a8 = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.a6E = function() {
		for (var a6F = [], a8 = this.a8, n = a8.length, q = 0; q < n; q++) a6F.push(a8[q]);
		var a6G = bK.buffer.data[12].bP;
		for (q = 0; q < n; q++)
			if (a6F[q] === a6G) {
				a6F.splice(q, 1), n--;
				break
			} a6F.sort(), n++, a6F.unshift(a6G);
		try {
			if ("undefined" == typeof Intl) return a6F;
			for (q = 0; q < n; q++) {
				var bJ = new Intl.DisplayNames([a6F[q]], {
					type: "language"
				}).of(a6F[q]);
				bJ !== a6F[q] && (a6F[q] = a6F[q] + ": " + bJ)
			}
		} catch (e8) {
			console.log("error 3646: " + e8)
		}
		return a6F
	}, this.a6I = function(a6J) {
		for (var bJ = bK.buffer.data[12].value, n = a6J.length, q = 0; q < n; q++)
			if (bJ === a6J[q].split(":")[0]) return q;
		return 0
	}, this.sC = function(a6K) {
		if (a6K && !(a6K.length < 2)) {
			a6K = a6K.split("-")[0].toLowerCase();
			for (var a8 = this.a8, n = a8.length, q = 0; q < n; q++)
				if (a6K === a8[q]) return q
		}
		return -1
	}
}

function a6L() {
	this.bi = new p0, this.bp = new sd, this.sD = new eI, this.e = function() {
		this.bi.e()
	}
}

function a6M() {
	var a6N = 0,
		a6O = new Uint16Array(64);

	function il(r) {
		a6N -= 2;
		for (var q = r; q < a6N; q += 2) a6O[q] = a6O[q + 2], a6O[q + 1] = a6O[q + 3]
	}
	this.e = function() {
		a6N = 0
	}, this.bu = function() {
		var q, uA, pY;
		if (0 !== a6N)
			if (0 === cD.ft[f.al]) a6N = 0;
			else if (0 === gb.gc(f.al)) a6N = 0;
		else
			for (q = a6N - 2; 0 <= q; q -= 2)(uA = a6O[q]) < f.g && 0 === cD.ft[uA] ? il(q) : (pY = a6O[q + 1], (f.g <= uA && gY.a6Q(f.al) || uA < f.g && gY.a6R(f.al, uA)) && (gL.gM.ga(pY, uA), il(q)))
	}, this.ge = function(uA, pY) {
		! function(uA, pY) {
			for (var q = 0; q < a6N; q += 2)
				if (a6O[q] === uA) return a6O[q + 1] = Math.min(a6O[q + 1] + pY, 1023), 1;
			return
		}(uA, pY) && 64 !== a6N && (a6O[a6N] = uA, a6O[a6N + 1] = pY, a6N += 2)
	}
}

function a6T() {
	this.ns = 0, this.m3 = 0, this.mapSeed = 0, this.a6U = 0, this.a6V = 0, this.a6W = 0, this.a6X = 0, this.a6Y = 0, this.a6Z = 0, this.spawningSeed = 0, this.a1J = 0, this.a6a = 0, this.lo = [], this.a6b = 1048575, this.a6c = 0, this.a6d = [{
		m3: 0,
		mapSeed: 0,
		a6U: 0,
		fr: 100,
		a6Y: 0
	}, {
		m3: 1,
		mapSeed: 0,
		a6U: 1,
		fr: 200,
		a6Y: 0
	}, {
		m3: 2,
		mapSeed: 0,
		a6U: 2,
		fr: 300,
		a6Y: 0
	}, {
		m3: 3,
		mapSeed: 0,
		a6U: 3,
		fr: 400,
		a6Y: 0
	}, {
		m3: 0,
		mapSeed: 0,
		a6U: 9,
		fr: 500,
		a6Y: 0
	}, {
		m3: 1,
		mapSeed: 0,
		a6U: 10,
		fr: 600,
		a6Y: 0
	}, {
		m3: 2,
		mapSeed: 0,
		a6U: 8,
		fr: 700,
		a6Y: 0
	}, {
		m3: 3,
		mapSeed: 0,
		a6U: 3,
		fr: 800,
		a6Y: 0
	}]
}

function a6e() {
	var e8;
	this.e8 = document.createElement("hr"), this.resize = function() {
		v.w.hL(this.e8, 8, b7.a6f)
	}, (e8 = this.e8).style.marginBottom = e8.style.marginTop = "0.65em", e8.style.marginLeft = e8.style.marginRight = "-4%", e8.style.border = "none"
}

function a6g() {
	var dY, dZ, da, ds;

	function de() {
		di(), 2 === f.data.playerNamesType && 1 === v.aN.dr(f.data.playerNamesData).length && (f.data.playerNamesType = 0), 2 !== f.data.playerNamesType && (f.data.playerNamesData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		2 === f.data.playerNamesType && v.aN.a6h(da.dp(), f.data.playerNamesData, 20)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(44), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(45), L(46), L(9)],
			value: f.data.playerNamesType
		}, function(t) {
			di(), f.data.playerNamesType = t, dk.e3(23)
		})), dx.e4(new a6e), dx.e4(new e5({
			value: f.data.selectableName
		}, L(123), function(value) {
			f.data.selectableName = value
		})), ds.push(dx)
	}(ds = []), function(ds) {
		var dx;
		2 === f.data.playerNamesType && ((dx = new dy).dz("Data"), da = new eA(0, 1, 0, 1), f.data.playerNamesData && f.data.playerNamesData.length === f.g || (f.data.playerNamesData = new Array(f.g), f.data.playerNamesData.fill("")), da
			.eB(v.bB.eC(f.data.playerNamesData, 1, '"')), dx.e4(da), ds.push(dx))
	}(ds), ds))
}

function a6i() {
	this.id = 0, this.bM = 0, this.a6j = null, this.qc = null, this.a6k = null, this.a6l = null, this.cv = new a6m, this.e = function() {
		var self, bM;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (bM = Android.getVersion()) < 12 || (self.bM = bM, self.id = 1, self.qc = Android),
			function(self) {
				var bM;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.a6k = mwIOSdataX, self.a6l = window.webkit.messageHandlers.iosCommandA, bM =
					self.a6k.version, self.bM = bM ? Number(bM) : 0)
			}(this),
			function(self) {
				var a6j;
				try {
					if (!(a6j = window.localStorage)) return;
					a6j.setItem("tls7", "1"), a6j.removeItem("tls7")
				} catch (error) {
					return
				}
				self.a6j = a6j
			}(this)
	}
}

function a6q() {
	this.e = function() {
		if (0 === f.data.sResourcesType) {
			for (var a6u = f.iy, mY = cD.mY, q = 0; q < a6u; q++) mY[q] = 512;
			var a6v = f.j2,
				a6w = jn.a6w,
				aW = jn.aW;
			for (q = a6u; q < a6v; q++) mY[q] = a6w[aW[q]]
		} else(1 === f.data.sResourcesType ? function() {
			for (var n = f.j2, mY = cD.mY, sResourcesValue = f.data.sResourcesValue, q = 0; q < n; q++) mY[q] = sResourcesValue
		} : function() {
			for (var n = f.j2, mY = cD.mY, sResourcesData = f.data.sResourcesData, q = 0; q < n; q++) mY[q] = sResourcesData[q]
		})();
		fI.fg[8] = cD.mY[f.al]
	}
}

function a6x(a6y, a6z, a70) {
	this.h6 = document.createElement("div"), this.a71 = a6y;
	var a72 = 0;
	this.resize = function(h5, a74) {
		var n = a6y.length;
		if (!a70)
			for (var q = 1; q < n; q++) v.w.hL(a6y[q].button, 4);
		for (var a75 = 0, q = 0; q < n; q++) a75 += a6y[q].button.offsetWidth;
		if (h5 && (a72 = h5.offsetWidth), a74 && a75 < a72)
			for (q = 0; q < n; q++) a6y[q].button.style.width = (100 * a6y[q].button.offsetWidth / a75).toFixed(2) + "%";
		else
			for (q = 0; q < n; q++) a6y[q].button.style.width = "auto";
		a74 || this.resize(h5, 1)
	};
	var a73 = this;
	a73.h6.style.height = a73.h6.style.maxHeight = "100%";
	for (var q = 0; q < a6y.length; q++) a6y[q].pz(a6z), a6y[q].button.style.height = "100%", a6y[q].button.style.padding = "0.0em 0.9em", a6y[q].button.style.whiteSpace = "pre", a73.h6.appendChild(a6y[q].button)
}

function a76() {
	var a77, a78, a79;

	function a7E(q) {
		var button = a5m.a71[q],
			aD = button.aD,
			aE = button.aE,
			ap = button.ap,
			ar = button.ar;
		b5.fillStyle = button.a7C, b5.fillRect(aD, aE, ap, ar), q === a77 && (b5.fillStyle = a79, b5.fillRect(aD, aE, ap, ar)), b5.lineWidth = f7.a7I, b5.strokeStyle = a78, b5.strokeRect(aD, aE, ap, ar),
			function(button) {
				var aD = button.aD,
					aE = button.aE,
					ap = button.ap,
					ar = button.ar;
				v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = button.font, b5.fillStyle = a78, b5.fillText(button.lM, Math.floor(aD + ap / 2), Math.floor(aE + ar / 2 + .1 * button.fontSize))
			}(button)
	}
	this.ap = 0, this.ar = 0, this.aE = 0, this.gap = 0, this.e = function() {
		a77 = -1, a78 = b7.b9, a79 = "rgba(255,255,255,0.16)", this.a71 = new Array(7), this.ar = Math.floor((cu.cv.cw() ? .123 : .093) * ao.cx), this.ap = Math.floor((cu.cv.cw() ? 3.96 : 4.2) * this.ar), this.gap = Math.floor(.025 * this.ap);
		var a7A = Math.floor(.26 * this.ar),
			a7B = v.w.bA(1, a7A);
		this.a71[0] = {
			aD: 0,
			aE: 0,
			ap: Math.floor(.6 * this.ap - this.gap / 2),
			ar: this.ar,
			lM: "Multiplayer",
			font: a7B,
			a7C: "rgba(22,88,22,0.8)",
			fontSize: a7A
		}, a7A = Math.floor(.18 * this.ar), a7B = v.w.bA(1, a7A), this.a71[1] = {
			aD: 0,
			aE: 0,
			ap: this.ap - this.a71[0].ap - this.gap,
			ar: this.ar,
			lM: "Single Player",
			font: a7B,
			a7C: "rgba(22,88,88,0.8)",
			fontSize: a7A
		}, this.a71[2] = {
			aD: 0,
			aE: 0,
			ap: this.ap,
			ar: Math.floor(.3 * this.ar),
			lM: "",
			font: this.a71[1].font,
			a7C: "rgba(100,0,0,0.8)",
			fontSize: this.a71[1].fontSize
		}, this.a71[3] = {
			aD: 0,
			aE: 0,
			ap: this.ap,
			ar: this.ar,
			lM: "Back",
			font: this.a71[0].font,
			a7C: "rgba(0,0,0,0.8)",
			fontSize: this.a71[0].fontSize
		}, this.a71[4] = {
			aD: 0,
			aE: 0,
			ap: this.ap,
			ar: Math.floor(.3 * this.ar),
			lM: "The game was updated!",
			font: this.a71[1].font,
			a7C: "rgba(100,0,0,0.8)",
			fontSize: this.a71[1].fontSize
		}, this.a71[5] = {
			aD: 0,
			aE: 0,
			ap: this.a71[0].ap,
			ar: Math.floor(.8 * this.ar),
			lM: "Reload",
			font: this.a71[0].font,
			a7C: "rgba(0,100,0,0.8)",
			fontSize: this.a71[0].fontSize
		}, this.a71[6] = {
			aD: 0,
			aE: 0,
			ap: this.a71[1].ap,
			ar: this.a71[5].ar,
			lM: "Back",
			font: this.a71[0].font,
			a7C: "rgba(0,0,0,0.8)",
			fontSize: this.a71[0].fontSize
		}, this.d5()
	}, this.d5 = function() {
		this.aE = Math.floor(.54 * ao.ar), this.a71[0].aD = Math.floor(.5 * ao.ap - .5 * this.ap), this.a71[1].aD = this.a71[0].aD + this.a71[0].ap + this.gap, this.a71[2].aD = this.a71[3].aD = this.a71[0].aD, this.a71[4].aD = this.a71[5].aD =
			this.a71[0].aD, this.a71[6].aD = this.a71[1].aD, this.a71[0].aE = Math.floor(.54 * ao.ar), this.a71[1].aE = this.a71[0].aE, this.a71[2].aE = Math.floor((ao.ar - this.a71[2].ar - this.a71[3].ar - this.gap) / 2), this.a71[3].aE = this
			.a71[2].aE + this.a71[2].ar + this.gap, this.a71[4].aE = Math.floor((ao.ar - this.a71[4].ar - this.a71[5].ar - this.gap) / 2), this.a71[5].aE = this.a71[6].aE = this.a71[4].aE + this.a71[4].ar + this.gap
	}, this.a7D = function() {
		a7E(0), a7E(1)
	}, this.a7F = function() {
		a7E(2), a7E(3)
	}, this.a7G = function() {
		a7E(4), a7E(5), a7E(6)
	}, this.dB = function(aD, aE, kD) {
		var q = -1;
		return 0 === dV.dW() ? q = this.a1Y(aD, aE, 0, 2) : 3 === dV.dW() ? q = this.a1Y(aD, aE, 3, 1) : 5 === dV.dW() && (q = this.a1Y(aD, aE, 5, 2)), a77 !== q && (a77 = q, kD) && (c0.d1 = !0), -1 !== q && (d9.reset(), !0)
	}, this.a1Y = function(aD, aE, a7H, size) {
		for (var q = a7H; q < a7H + size; q++)
			if (aD >= this.a71[q].aD && aE >= this.a71[q].aE && aD <= this.a71[q].aD + this.a71[q].ap && aE <= this.a71[q].aE + this.a71[q].ar) return q;
		return -1
	}
}

function a7K() {
	this.bq = function(bJ) {
		for (var n = bJ.length, ap = bW, q = 0; q < n; q++) ap.bY(16, bJ.charCodeAt(q))
	}
}

function a69() {
	this.r0 = function(a7L, t, a7M) {
		var u = a7L.height,
			k = v.w.x(u, u),
			y = v.w.getContext(k);
		return function(ap, y, a7M) {
			y.fillStyle = a7M, y.beginPath(), y.arc(ap / 2, ap / 2, .47 * ap, 0, 2 * Math.PI), y.fill()
		}(u, y, a7M), y.drawImage(a7L, -t * u, 0), k
	}, this.r3 = function(a7O) {
		var y, z, u = a7O.height;
		return a7O.width === u && (z = (y = v.w.getContext(a7O, !0)).getImageData(0, 0, u, u), v.a67.a7P(z.data, u, u, .9), y.putImageData(z, 0, 0)), a7O
	}
}

function a7Q() {
	this.y9 = 0, this.ld = null, this.lb = null, this.td = null, this.af = null, this.a1e = null, this.tb = null, this.message = null, this.a7R = null, this.lq = null, this.yA = null, this.a7S = new a7T, this.zG = 0, this.cl = 0, this.e =
function() {
		this.cl = c0.fr, this.y9 = bh.bi.p9(bK.buffer.data[105].value, 5), this.lb = new y2, this.td = new kw, this.af = new a7U, this.a1e = new a7V, this.tb = new tO, this.message = new a4m, this.a7R = new a7W, this.lq = new a7X, this.yA =
			new a7Y, this.af.e(), a4w.e(), this.zG = 1, cu.cv.setState(1), dV.setState(0), jP.turnstile.zF()
	}, this.q4 = function() {
		this.lq && this.lq.q4(), this.ld = null, this.lb = null, this.td = null, this.af = null, this.a1e = null, this.tb = null, this.message = null, this.a7R = null, this.lq = null, this.yA = null, this.zG = 0, a4w.q4(), cu.cv.setState(0)
	}
}

function a7Z() {
	function a7j() {
		var tg;
		return 8 === f.jA ? 0 : (tg = Math.floor(cD.sa[f.al] / 50), (tg = Math.min(tg, 200)) / 100)
	}

	function a7c() {
		var tg = a7j();
		0 !== tg && c5.cC(440, L(124, [tg.toFixed(2)]), 40, 0, b7.rX, b7.cF, -1, !1)
	}
	this.bu = function() {
		var a7d;
		0 === jQ.result.a7a || 0 === jQ.result.a7b.length || 8 === f.jA ? v.c2.g4(f.al) && a7c() : (function(a7d) {
			7 !== f.jA && 10 !== f.jA && 9 !== f.jA || 0 !== f.jH && a7d && c5.cC(600, L(128, [a7d.toFixed(2)]), 40, 0, b7.b9, b7.cF, -1, !1)
		}(a7d = function() {
			c5.cC(520, L(125), 40, 0, b7.b9, b7.cF, -1, !1);
			for (var a7b = jQ.result.a7b, n = a7b.length, fh = cD.fh, a8 = [], q = 0; q < n; q++) {
				var c9 = a7b[q];
				a8.push({
					c9: c9,
					d8: fh[c9]
				})
			}
			a8.sort((ca, ku) => ku.d8 - ca.d8);
			var uj = cD.cE,
				d8 = jQ.result.a7k,
				tg = jQ.result.a7a,
				bJ = "",
				a7d = 0;
			for (q = 0; q < n; q++) {
				var gr = a8[q].d8 * tg / (100 * d8),
					a7m = uj[a8[q].c9] + ": " + gr.toFixed(2) + "   ";
				a8[q].c9 === f.al && (a7d = gr), 2 < q && 4 !== n ? 3 === q && (bJ += "(" + L(126, [n - 3]) + ")") : bJ += a7m
			}
			c5.cC(560, v.bB.uU(bJ), 40, 0, b7.rX, b7.cF, -1, !1), a7d ? c5.cC(580, L(127, [a7d.toFixed(2) + " + " + a7j().toFixed(2)]), 40, 0, b7.rX, b7.cF, -1, !1) : v.c2.g4(f.al) && a7c();
			return a7d
		}()), 2 === f.jG || 7 <= f.jA || function(a7d) {
			var a7b = jQ.result.a7b,
				n = a7b.length,
				sQ = cD.sQ,
				fh = cD.fh,
				bm = [];
			loop: for (var q = 0; q < n; q++) {
				var c9 = a7b[q],
					lh = v.bB.li(sQ[c9]);
				if (null !== lh) {
					for (var lF = fh[c9], ku = bm.length - 1; 0 <= ku; ku--)
						if (lh === bm[ku].name) {
							bm[ku].d8 += lF, bm[ku].a8.push({
								c9: c9,
								d8: lF
							});
							continue loop
						} bm.push({
						name: lh,
						d8: lF,
						a8: [{
							c9: c9,
							d8: lF
						}]
					})
				}
			}
			if (0 !== bm.length) {
				bm.sort((ca, ku) => ku.d8 - ca.d8);
				var a8 = bm[0].a8,
					a3Z = (a8.sort((ca, ku) => ku.d8 - ca.d8), "[" + bm[0].name + "]"),
					a7n = 512 * jQ.result.a7a / 26214400,
					aL = (c5.cC(0, L(129, [a3Z, a7n.toFixed(4)]), 40, 0, b7.b9, b7.cF, -1, !1), a8.length),
					p5 = bm[0].d8,
					a7o = 1e4 * a7n;
				for (q = 0; q < aL; q++)
					if (a8[q].c9 === f.al) {
						c5.cC(600, L(130, [(a7o * a8[q].d8 / (10 * p5)).toFixed(2)]), 40, 0, b7.b9, b7.cF, -1, !1), c5.cC(640, L(131, [(.2 * a7d).toFixed(2), a3Z]), 40, 0, b7.b9, b7.cF, -1, !1);
						break
					}
			}
		}(a7d))
	}, this.wg = function() {
		var a7h, a7i;
		f.j5 || (a7h = cD, a7i = f.al, 0 === a7h.sb[a7i]) || a7h.sZ[a7i] < 1 || 2 * a7h.sX[a7i] > 3 * (a7h.sY[a7i] + a7h.sZ[a7i]) || a7c()
	}
}

function a7p() {
	var iP, iQ, ds;
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), iQ.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(L(132), [new dd("⬅️ " + L(5), function() {
		dk.e3(7, dk.a4H(7).iA)
	}), new dd(L(133), function() {
		bK.iF.bH(105, bh.bi.p3(iQ.h8[0].ys[0].e8.value, 5)), bK.iF.bH(106, bh.bi.p3(iQ.h8[1].ys[0].e8.value, 15)), dk.e3(8, dk.a4H(7).iA, new iB(18))
	})]), iQ = new df(iP.dg, ((ds = []).push(function() {
		var dx = new dy;
		return dx.dz(L(134)), dx.e4(new e7({
			value: "",
			t: -1
		})), dx
	}()), ds.push(function() {
		var dx = new dy,
			a7u = (dx.dz(L(135)), new e7({
				value: "",
				t: -1
			}));
		return a7u.e8.type = "password", dx.e4(a7u), dx.e4(new e9([new dd(L(136), function(e8) {
			return e8.textContent === L(136) ? (e8.textContent = L(137), a7u.e8.type = "text") : (e8.textContent = L(136), a7u.e8.type = "password"), !0
		}).button])), dx
	}()), ds.push(function() {
		var dx = new dy;
		return dx.dz(L(138)), dx.iY(L(139)), dx.iY(L(140)), dx.iY(L(141)), dx
	}()), ds))
}

function a7v() {
	var a7w = 0,
		a7x = 0,
		a7y = 300,
		a7z = 300,
		a80 = 0;
	this.cW = 0, this.buffer = new Uint32Array(512), this.e = function() {
		a7x = a7w = 0, this.cW = 0, a80 = 0
	}, this.bu = function() {
		if (function() {
				var n = cU.cV.cW;
				if (0 === n) return 1;
				var buffer = cU.cV.buffer;
				if (c0.c1() % 35 == 6) {
					for (var q = n - 1; 0 <= q; q--) a6.cT(buffer[q] << 2) || (n--, buffer[q] = buffer[n]);
					cU.cV.cW = n
				}
				return n < buffer.length
			}())
			if (a7y <= a7w) {
				var a84 = cU.cV.cW;
				if (a84) {
					if (c0.c1() % 350 != 1) return;
					if (a80 !== a84) return void(a80 = a84);
					if (!v.c2.rO(cP[0])) return
				} else if (c0.c1() % 12 != 8) return;
				v.c2.a85() || cU.cV.e()
			} else {
				var q, ap = au.av,
					a86 = ap - 2,
					a84 = a86 * (au.ef - 2),
					a87 = a7y,
					buffer = cU.cV.buffer,
					aL = cU.cV.cW,
					a88 = buffer.length,
					hF = Math.min(a7x + a87 * ((1 + 19 * cU.performance.a3e) * a7z), a84);
				for (q = a7x; q < hF; q += a87) {
					var a3 = 4 * (q % a86 + (fD.fE(q, a86) + 1) * ap + 1);
					if (a6.cT(a3) && (buffer[aL] = a3 >> 2, ++aL === a88)) {
						q += a87;
						break
					}
				}(a7x = q) >= a84 && (a7x = ++a7w), cU.cV.cW = aL
			}
	}
}

function a89() {
	var a8A, a8B, ap, aD, aE, a8C, a8D;
	this.e = function() {
		a8A = new Array(2), a8B = new Array(2), this.a1S = !1, a8D = a8C = b2 = b0 = 0, ay = 1, this.resize()
	}, this.resize = function() {
		ap = (ap = Math.floor((cu.cv.cw() ? .072 : .0502) * ao.cx)) < 8 ? 8 : ap;
		for (var q = 1; 0 <= q; q--) a8A[q] = document.createElement("canvas"), a8A[q].width = ap, a8A[q].height = ap, a8B[q] = a8A[q].getContext("2d", {
			alpha: !0
		});
		this.sq(),
			function() {
				for (var a8V = Math.floor(1 + ap / 20), q = 1; 0 <= q; q--) a8B[q].clearRect(0, 0, ap, ap), a8B[q].fillStyle = b7.wI, a8B[q].beginPath(), a8B[q].arc(ap / 2, ap / 2, ap / 2 - a8V, 0, 2 * Math.PI), a8B[q].fill(), a8B[q].lineWidth =
					a8V, a8B[q].fillStyle = b7.b9, a8B[q].strokeStyle = b7.b9, a8B[q].beginPath(), a8B[q].arc(ap / 2, ap / 2, ap / 2 - a8V, 0, 2 * Math.PI), a8B[q].stroke(), rA(a8B[q], 0, 0, ap, a8V, .3, 0 === q)
			}()
	}, this.pK = function() {
		return -b0 / ay
	}, this.pL = function() {
		return -b2 / ay
	}, this.a8I = function(qi, xP) {
		b0 = ay * qi - xP
	}, this.a8J = function(qj, xQ) {
		b2 = ay * qj - xQ
	}, this.dD = function(a8G, a8H) {
		return f.hT || ! function(a8G, a8H) {
			return Math.pow(a8G - (aD + ap / 2), 2) + Math.pow(a8H - (aE + ap / 2), 2) < ap * ap / 4 || Math.pow(a8G - (aD + ap / 2), 2) + Math.pow(a8H - (aE + 2 * ap), 2) < ap * ap / 4
		}(a8G, a8H) || bK.buffer.data[8].value ? (kB.bQ() && (this.a1S = !0, a8C = a8G, a8D = a8H), !1) : a8H < aE + 1.25 * ap ? this.dC(Math.floor(ao.ap / 2), Math.floor(ao.ar / 2), -200) : this.dC(Math.floor(ao.ap / 2), Math.floor(ao.ar /
			2), 200)
	}, this.dB = function(a8G, a8H) {
		var a8K, a8L, aF, aG;
		return !kB.bQ() || (a8K = b0, a8L = b2, b0 += aF = a8C - a8G, b2 += aG = a8D - a8H, k4.dB(aF, aG), this.a8M(), a8C = a8G, a8D = a8H, a8K !== b0) || a8L !== b2
	}, this.dC = function(f9, fA, deltaY) {
		var pA;
		if (kB.bQ()) {
			if (0 < deltaY) pA = (pA = 500 / (500 + deltaY)) < .5 ? .5 : pA;
			else {
				if (!(deltaY < 0)) return !1;
				pA = 2 < (pA = (500 - deltaY) / 500) ? 2 : pA
			}
			this.a8N(f9, fA, pA), c0.d1 = !0
		}
		return !0
	}, this.a8N = function(aD, aE, a3) {
		var fb;
		a3 = fb = (fb = 1024 < (fb = a3) * ay ? 1024 / ay : fb) * ay < .125 ? .125 / ay : fb, k4.zoom(a3, aD, aE),
			function(fb, f9, fA) {
				ay *= fb, b0 = (b0 + f9) * fb - f9, b2 = (b2 + fA) * fb - fA, jx.a8M()
			}(a3, aD, aE)
	}, this.a8M = function() {
		var a8Q = ao.ap / 16,
			a8R = 0,
			a8S = ao.ar / 16,
			a8T = 0;
		b0 < a8Q - ao.ap && (a8R = -ao.ap + a8Q - b0), b0 > ay * au.av - a8Q && (a8R = ay * au.av - a8Q - b0), b2 < a8S - ao.ar && (a8T = -ao.ar + a8S - b2), ay * au.ef - a8S < b2 && (a8T = ay * au.ef - a8S - b2), b0 += a8R, b2 += a8T, xG.pJ(),
			k4.a8U(a8R, a8T)
	}, this.sq = function() {
		aD = ao.ap - ap - f7.gap, aE = Math.floor(ao.ar / 2 - 1.25 * ap)
	}, this.aR = function() {
		bK.buffer.data[8].value || (b5.drawImage(a8A[0], aD, aE), b5.drawImage(a8A[1], aD, Math.floor(aE + 3 * ap / 2)))
	}
}

function k3() {
	mG = 0, a8W = 2048, mb = new Uint32Array(4 * a8W), a8X = 0, a8Y = new Uint32Array(a8W), a8Z = new Uint8Array(au.av * au.ef)
}

function a4O(player) {
	mC = player, mA = !1, a8a(), a8b();
	for (var q = gb.gc(mC) - 1; 0 <= q; q--) mD = q, a8c();
	mA && a8d()
}

function a8d() {
	gY.a8e(), gY.a8f()
}

function a8c() {
	lw = gb.gs(mC, mD), mE = gb.gq(mC, mD), mV = gb.a8g(mC, mD), a8h(), (0 !== mG && (a8i(), a8j()) ? lt : ly)()
}

function a8j() {
	if (!((mS = fD.fE(mE, mG)) > f.ix)) {
		if (!mV) return !1;
		var a8k = mG * (1 + f.ix);
		mE += v.c2.mW(mC, a8k - mE), mS = fD.fE(mE, mG)
	}
	return !0
}

function a8i() {
	for (var q = mG - 1; 0 <= q; q--) a8Z[fD.fE(mb[q], 4)] = 0
}

function ly() {
	1 === gb.gc(mC) && k1.wS(mC);
	var d8 = v.c2.uB(mC, mE);
	fI.mT(mC, mE - d8, 12), gb.a8l(mC, mD)
}

function a8a() {
	for (var player = mC, m6 = cD.m6, n = Math.min(m6[player].length, a8W), hd = 0, a8m = a8Y, q = n - 1; 0 <= q; q--) a8m[hd++] = m6[player][q];
	a8X = hd
}

function a8b() {
	for (var q = cD.m6[mC].length - 1; 0 <= q; q--) a6.u0(cD.m6[mC][q]) && a6.mc(cD.m6[mC][q], mC);
	cD.m6[mC] = []
}

function a8h() {
	mG = 0, (lw === f.g ? a8n : a8o)()
}

function a8o() {
	for (var c9, hF, q, gy = a6.gy, f6 = 3; 0 <= f6; f6--)
		for (q = a8X - 1; 0 <= q; q--) c9 = a8Y[q] + gy[f6], hF = fD.fE(c9, 4), 0 === a8Z[hF] && a6.h3(c9) && a6.gU(c9) === lw && (a8Z[hF] = 1, mb[mG++] = c9)
}

function a8n() {
	for (var c9, hF, q, gy = a6.gy, f6 = 3; 0 <= f6; f6--)
		for (q = a8X - 1; 0 <= q; q--) c9 = a8Y[q] + gy[f6], hF = fD.fE(c9, 4), 0 === a8Z[hF] && a6.cT(c9) && (a8Z[hF] = 1, mb[mG++] = c9)
}

function a8p() {
	this.rd = function() {
		return cu.cv.cw() ? 2 : 1
	}
}

function pS(a71, h5) {
	var h6;
	this.resize = function() {
		for (var q = 0; q < a71.length; q++) v.w.hL(a71[q].button);
		h6.style.gap = h6.style.padding = v.w.hK(f7.hI)
	}, (h6 = document.createElement("div")).style.display = "grid", h6.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", h6.style.overflowY = "auto", h6.style.gridAutoRows = "5.3em", h6.style.maxHeight = "100%";
	for (var q = 0; q < a71.length; q++) a71[q].a8r(1), h6.appendChild(a71[q].button);
	h5.appendChild(h6)
}

function a8s() {
	function a8u(key) {
		var yn;
		return "undefined" == typeof URLSearchParams || (yn = window.location.search, "string" != typeof(yn = new URLSearchParams(yn).get(key))) || yn.length < 1 ? null : yn
	}
	this.wL = function() {
		if (0 !== cu.id) return !1;
		if (! function() {
				var value = a8u("account");
				if (!value && !(value = a8u("a"))) return void a8v.clear();
				return a8v.clear(), dk.e3(8, dk.iI, new iB(1e3, {
					action: 0,
					ij: value,
					a8w: 0
				})), 1
			}()) {
			var value = a8u("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			dk.e3(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a8x = new URL(window.location.href);
		a8x.search = "";
		try {
			return history.replaceState(null, "", a8x.toString()), !0
		} catch (e8) {
			console.log("error 352: " + e8)
		}
		return !1
	}, this.a8z = function(key, value) {
		if (0 === cu.id) try {
			var a8x = new URL(window.location.href),
				c9 = a8x.searchParams;
			c9.set(key, value), a8x.search = c9.toString(), history.replaceState(null, "", a8x.toString())
		} catch (e8) {
			console.log("error 358: " + e8)
		}
	}
}

function a90() {
	this.a3e = 0, this.e = function() {
		this.a3e = 0
	}, this.bu = function() {
		if (!this.a3e && c0.c1() % 30 == 7 && v.c2.c3(90) && (cU.performance.a3e = 1)) {
			if (f.j) {
				var hY = cN.cO();
				if (l.m[hY]) {
					cN.hb(hY);
					var a8 = a9.eb,
						n = a9.eR[0];
					if (0 !== n)
						for (var a95 = Math.min(100 + 10 * (n - 1), 400), q = 0; q < n; q++) jn.a96(a8[q], a95)
				}
			}
			jn.a96(cP[0], 100)
		}
	}
}

function a97() {
	var canvas, fY, ta, font, a98 = 0,
		a99 = !1,
		a9A = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9B = 5;

	function fN() {
		if (a99) {
			var q, n = a9A.length,
				er = Math.floor(.5 * ta.ar),
				ar = n * er,
				aD = Math.floor(Math.floor(ta.aD) + .3 * ta.ap - .5),
				aE = Math.floor(Math.floor(ta.aE) - ar),
				ap = Math.floor(.4 * ta.ap + 2.5);
			for (b5.fillStyle = b7.a1s, b5.fillRect(aD, aE, ap, ar), b5.fillStyle = b7.a9S, b5.fillRect(aD, aE + a9B * er, ap, er), b5.fillStyle = b7.b9, b5.fillRect(aD, aE, 2, ar), b5.fillRect(aD, aE, ap, 2), b5.fillRect(aD + ap - 2, aE, 2, ar), q =
				1; q < n; q++) b5.fillRect(aD, aE + q * er, ap, 2);
			for (b5.fillStyle = b7.b9, v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = v.w.bA(0, .6 * er), aD += .5 * ap, q = 0; q < n; q++) b5.fillText(a9T(q), aD, aE + (q + .6) * er)
		}
		b5.drawImage(canvas, Math.floor(ta.aD), Math.floor(ta.aE))
	}

	function fM(a73) {
		var aD, az, b1, er;
		fY.clearRect(0, 0, Math.floor(ta.ap), Math.floor(ta.ar)), fY.fillStyle = b7.a1s, fY.fillRect(0, 0, Math.floor(ta.ap), Math.floor(ta.ar)), f.hT && (fY.fillStyle = b7.a9S, fY.fillRect(0, 0, Math.floor(.3 * ta.ap), Math.floor(ta.ar))), fY
			.fillStyle = b7.b9, fY.fillText("Hide UI", .15 * ta.ap, .5 * ta.ar), fY.fillRect(Math.floor(.3 * ta.ap - .5), 0, 2, Math.floor(ta.ar)), aD = .5 * ta.ap, fY.fillText("Replay Speed", aD, .31 * ta.ar), fY.fillText(a9T(a9B), aD, .69 * ta.ar),
			fY.fillRect(Math.floor(.7 * ta.ap - .5), 0, 2, Math.floor(ta.ar)), a73.kO ? (aD = Math.floor(.02 * ta.ap), a73 = Math.floor(.025 * ta.ap), az = Math.floor(.85 * ta.ap - aD - .5 * a73), b1 = Math.floor(.25 * ta.ar), er = Math.floor(ta
				.ar) - 2 * b1, fY.fillRect(az, b1, aD, er), fY.fillRect(az + aD + a73, b1, aD, er)) : function() {
				var ap = Math.floor(.46 * ta.ar),
					ar = Math.floor(.23 * ta.ar),
					aD = Math.floor(.85 * ta.ap - .5 * ap + ap / 12),
					aE = Math.floor(.5 * ta.ar - ar);
				fY.beginPath(), fY.moveTo(aD, aE), fY.lineTo(aD + ap, aE + ar), fY.lineTo(aD, aE + (ar << 1)), fY.fill()
			}(), fY.fillRect(0, 0, Math.floor(ta.ap), 2), fY.fillRect(0, 0, 2, Math.floor(ta.ar)), fY.fillRect(0, Math.floor(ta.ar) - 2, Math.floor(ta.ap), 2), fY.fillRect(Math.floor(ta.ap - 2), 0, 2, Math.floor(ta.ar))
	}

	function a9T(q) {
		return 5 === q ? "Normal" : "" + a9A[q]
	}
	this.kO = !1, this.e = function() {
		f.g1 && (a9B = 5, this.kO = !1, a99 = !1, ta = new a9C([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9D = function() {
		return a9A[a9B]
	}, this.pL = function() {
		return ta.aE
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.kO,
		fxGetSpeedIndex: () => a9B,
		fxSetSpeedIndex: index => {
			a9B = index, this.resize()
		},
		fxGetPanelTop: () => ta && ta.aE
	}, this.rZ = function(a9E) {
		return !!f.g1 && ta.aD + ta.ap > ao.ap - a9E - f7.gap
	}, this.resize = function() {
		f.g1 && (ta.resize(), ta.aE -= (rc.rd() - 1) * f7.gap, font = v.w.bA(0, .3 * ta.ar), (canvas = document.createElement("canvas")).width = Math.floor(ta.ap), canvas.height = Math.floor(ta.ar), (fY = canvas.getContext("2d", {
			alpha: !0
		})).font = font, v.w.textAlign(fY, 1), v.w.textBaseline(fY, 1), fM(this))
	}, this.a1h = function(a9F) {
		0 === f.j6 || dk.f0() || a9F !== f.hT && (f.hT = a9F, cN.resize(), c0.d1 = !0, f.g1) && (a98 = c0.fr + 2e3, fM(this))
	}, this.dD = function(aD, aE) {
		if (!f.g1) return !1;
		if (aD < ta.aD || aE < ta.aE || aD > ta.aD + ta.ap) return a99 && function(a73, aD, aE) {
			var n = a9A.length,
				er = Math.floor(.5 * ta.ar),
				ar = n * er,
				az = Math.floor(Math.floor(ta.aD) + .3 * ta.ap - .5),
				ar = Math.floor(Math.floor(ta.aE) - ar),
				ap = Math.floor(.4 * ta.ap + 2.5);
			return a99 = !1, c0.d1 = !0, aD < az || az + ap < aD || aE < ar || (a9B = a5y(0, Math.floor((aE - ar) / er), n - 1), fM(a73)), !0
		}(this, aD, aE);
		if ((aD -= ta.aD) < .3 * ta.ap) a99 = !1, this.a1h(!f.hT);
		else {
			if (aD < .7 * ta.ap) return a99 = !a99, c0.d1 = !0;
			this.a1i(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a1i(!0), this.a1i = function(a9H) {
		2 === f.j6 ? (this.a1h(!1), dk.e3(3)) : (a99 = !1, this.kO = !this.kO, this.kO ? (fF.g2 && fF.fH(), cu.cv.setState(1)) : a9H || fF.a9I(), c0.d1 = !0, fM(this))
	}, this.a9J = function() {
		this.kO = !1, fF.a9I(), c0.d1 = !0, fM(this)
	}, this.a1M = function(aD, aE) {
		return !!f.hT && (0 <= fF.dD(aD, aE) || (f.g1 ? ((c0.fr > a98 || !this.dD(aD, aE)) && jx.dD(aD, aE), c0.d1 = !0, a98 = c0.fr + 2e3) : jx.dD(aD, aE)), !0)
	}, this.bu = function() {
		f.g1 && f.hT && c0.fr > a98 - 1e3 && c0.fr < a98 && (c0.d1 = !0)
	}, this.a9K = function() {
		f.g1 && (this.kO = !1, c0.d1 = !0, fM(this))
	}, this.aR = function() {
		if (f.g1) {
			if (f.hT) {
				if (c0.fr > a98) return;
				if (a98 - 1e3 < c0.fr) return b5.globalAlpha = a5y(0, (1e3 - (c0.fr - (a98 - 1e3))) / 1e3, 1), fN(), void(b5.globalAlpha = 1)
			}
			fN()
		}
	}
}

function a9U() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a9V = 13, this.a9W = this.emojis.length, this.tM = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.tM, this.a9X = 1024, this.tN = this.emojis.indexOf(
		"💀"), this.a9Y = this.tN + 1, this.a9Z = this.emojis.indexOf("🥇"), this.a9a = this.emojis.indexOf("😊"), this.a9b = function(ff) {
		return ff < this.tM ? String.fromCharCode(55356, 56806 + fD.fE(ff, 26), 55356, 56806 + ff % 26) : this.emojis[Math.min(ff - this.tM, this.a9W - 1)]
	}, this.a9c = function(bJ) {
		for (var n = bJ.length - 2, a8 = [], q = 0; q < n; q++) {
			var ub = bJ.charCodeAt(q) - 56806,
				uc = bJ.charCodeAt(q + 2) - 56806;
			0 <= ub && ub < 26 && 0 <= uc && uc < 26 && (a8.push(26 * ub + uc), q += 3)
		}
		return a8
	}, this.a9d = function(ff) {
		return ff < this.tM
	}, this.a9e = function(ff) {
		return ff >= 1024 - this.a9V
	}, this.a9f = function(ff) {
		return ff >= this.tM && ff < this.tM + this.a9Y
	}
}

function x8(data) {
	var iP, a9g;

	function a9v(n) {
		return n < 60 ? 1 === n ? n + " Second" : n + " Seconds" : n < 3600 ? 1 === (n = Math.floor(n / 60)) ? n + " Minute" : n + " Minutes" : n < 172800 ? 1 === (n = Math.floor(n / 3600)) ? n + " Hour" : n + " Hours" : (n = Math.floor(n /
			172800)) + " Days"
	}

	function a9j(xl) {
		var n = data.data.length;
		if (n) {
			for (var bU, max = min = parseInt(data.data[0][0]), q = 1; q < n; q++) var fl = parseInt(data.data[q][0]),
				min = Math.min(fl, min),
				max = Math.max(fl, max);
			bU = xl < 0 ? min + xl : max + 1, dk.e3(8, dk.i9().iA, new iB(21, {
				bT: data.bT,
				bU: bU,
				bV: bU + Math.abs(xl)
			}))
		}
	}
	if (this.show = function() {
			iP.show(), this.resize()
		}, this.eD = function() {
			iP.eD()
		}, this.resize = function() {
			iP.resize(), a9g.resize()
		}, this.eE = function(eF) {
			2 === eF && iP.eG[0].bL()
		}, data.a9h) {
		iP = new dc(L(142), [new dd("⬅️ " + L(5), function() {
			dk.dm()
		})]);
		var f6 = {
				a9n: [],
				a9l: [L(156), L(157), L(158) + " ↗"],
				a9o: [12, 50, 38]
			},
			ir = f.data.ir;
		if (ir) {
			for (var n = ir.length, a9n = f6.a9n, cE = cD.cE, q = 0; q < n; q++) a9n.push([{
				ff: q + 1 + ".",
				d8: 0
			}, {
				ff: cE[q],
				d8: 0
			}, {
				ff: bo.bi.bC(ir[q], 5),
				d8: 1,
				ij: ir[q],
				a8w: 0
			}]);
			a9g = new a9p(iP.dg, f6, {
				a9q: 1
			})
		} else a9g = new a9p(iP.dg, f6)
	} else {
		var f6 = data.data.length ? 0 : 1,
			a58 = [new dd("⬅️ " + L(5), function() {
				dk.dm()
			}), new dd(L(143), function() {
				a9j(-10)
			}, f6, 0, 1), new dd(L(144), function() {
				a9j(10)
			}, f6, 0, 1), new dd(L(145), function() {
				dk.e3(11, 10, new a9k({
					bT: data.bT
				}))
			})],
			a9l = [L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(61), L(62), "Audit Log", L(63)];
		iP = new dc(a9l[data.bT], a58), ! function() {
			var q, f6 = {
					a9n: []
				},
				a9n = f6.a9n,
				a9r = data.data,
				n = a9r.length;
			n && 0 === a9r[0][0] && 0 <= (t = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.bT]) && (dk.af.hw[t] = a9r[0][1]);
			var pA = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.bT],
				uM = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.bT],
				t = [
					[L(159), L(160) + " ↗", L(161)],
					[L(159), L(162), L(163), L(164) + " ↗"],
					[L(159), L(160) + " ↗", L(163)],
					[L(159), L(160) + " ↗", L(163)],
					[L(156), L(165), L(166) + " ↗", L(167) + " ↗", L(168)],
					[L(156), L(165), L(169) + " ↗", L(84) + " ↗", L(170)],
					[L(156), L(165), L(171) + " ↗", L(172) + " ↗", L(85)],
					[L(156), L(165), L(169) + " ↗", L(84) + " ↗", L(173)],
					[L(156), L(165), L(166) + " ↗", L(167) + " ↗", L(168)],
					[L(159), L(160) + " ↗", L(163)],
					[L(159), L(160) + " ↗", L(174)],
					[L(159), L(160) + " ↗", L(163)],
					[L(156), L(165), L(166) + " ↗", L(167) + " ↗", L(175)],
					[L(159), L(160) + " ↗", L(163)]
				];
			if (f6.a9l = t[data.bT], f6.a9o = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[25, 40, 35],
					[25, 40, 35],
					[25, 40, 35],
					[10, 15, 25, 25, 25],
					[25, 40, 35]
				][data.bT], 0 === data.bT || 2 === data.bT || 3 === data.bT || 9 === data.bT || 10 === data.bT || 11 === data.bT || 13 === data.bT)
				for (q = 0; q < n; q++) a9n.push([{
					ff: a9r[q][0] + 1 + ".",
					d8: 0
				}, {
					ff: a9r[q][1],
					d8: 1,
					ij: a9r[q][4],
					a8w: a9r[q][3]
				}, {
					ff: (pA * a9r[q][2]).toFixed(uM),
					d8: 0
				}]);
			else if (12 === data.bT)
				for (q = 0; q < n; q++) {
					var a9u = a9r[q][3];
					a9n.push([{
						ff: "" + a9r[q][0],
						d8: 0
					}, {
						ff: a9v(a9r[q][4]),
						d8: 0
					}, {
						ff: a9r[q][5],
						d8: 1,
						ij: a9r[q][1],
						a8w: 0
					}, {
						ff: a9r[q][6],
						d8: 1,
						ij: a9r[q][2],
						a8w: 0
					}, {
						ff: lH.a9w(a9u, bo.bi.bC(a9r[q][1], 5)),
						d8: 0
					}])
				} else if (1 === data.bT)
					for (q = 0; q < n; q++) a9n.push([{
						ff: a9r[q][0] + 1 + ".",
						d8: 0
					}, {
						ff: a9r[q][1],
						d8: 0
					}, {
						ff: (pA * a9r[q][2]).toFixed(uM),
						d8: 0
					}, {
						ff: a9r[q][3],
						d8: 1,
						ij: a9r[q][5],
						a8w: a9r[q][4]
					}]);
				else if (4 === data.bT || 5 === data.bT || 6 === data.bT || 7 === data.bT || 8 === data.bT)
				for (q = 0; q < n; q++) {
					var a9x = a9r[q][5];
					4 === data.bT || 8 === data.bT ? "100%" === (a9x = (a9x % 64 * 100 / (a9x >> 6)).toFixed(0) + "%") && (4 === data.bT ? a9x += " (" + L(176) + ")" : a9x += " (" + L(177) + ")") : 5 === data.bT ? 32768 <= a9x && (a9x = -(a9x -
						32768)) : a9x = (pA * a9x).toFixed(uM), a9n.push([{
						ff: "" + a9r[q][0],
						d8: 0
					}, {
						ff: a9v(a9r[q][6]),
						d8: 0
					}, {
						ff: a9r[q][7],
						d8: 1,
						ij: a9r[q][1],
						a8w: a9r[q][2]
					}, {
						ff: a9r[q][8],
						d8: 1,
						ij: a9r[q][3],
						a8w: a9r[q][4]
					}, {
						ff: "" + a9x,
						d8: 0
					}])
				}
			a9g = new a9p(iP.dg, f6)
		}()
	}
}

function a9y() {
	var a9z, aA0, aA1, aA2, aA3, aA4, aA5, aA6, aA7, aA8, aA9, aAA, aAB, aAC, aAD, aAE, aAF, aAG, aAH, aAI, aAJ, aAK, position, aAL, aAM, aAN, aAO, aAP, aAQ = 1,
		aAR = 1,
		aAS = "";
	var leaderboardHasChanged = true;
	this.playerPos = f.al;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => cM[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(cM[f.al]);
	}

	function aAU() {
		aA5.clearRect(0, 0, a9z, hu),
			aA5.fillStyle = aAP ? b7.aAW : b7.aAX,
			aA5.fillRect(0, 0, a9z, aAA),
			aA5.fillStyle = b7.a1s,
			aA5.fillRect(0, aAA, a9z, hu - aAA);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			cM[f.al]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aAK = -1;
		if (__fx.leaderboardFilter.enabled && aAK >= __fx.leaderboardFilter.filteredLeaderboard.length) aAK = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aAY(ownClanIndex - position, b7.a9S);
			})() :
			(playerPos >= position && aAY(playerPos - position, b7.a9S),
				0 !== cM[f.al] && 0 === position && aAY(0, b7.aAZ))
		),
		-1 !== aAK && aAY(aAK, b7.aAa),
			aA5.fillStyle = b7.a1s,
			//console.log("drawing", aAK),
			aA5.clearRect(0, hu - __fx.leaderboardFilter.tabBarOffset, a9z, __fx.leaderboardFilter.tabBarOffset);
		aA5.fillRect(0, hu - __fx.leaderboardFilter.tabBarOffset, a9z, __fx.leaderboardFilter.tabBarOffset);
		aA5.fillStyle = b7.b9,
			aA5.fillRect(0, aAA, a9z, 1),
			aA5.fillRect(0, hu - __fx.leaderboardFilter.tabBarOffset, a9z, 1),
			__fx.leaderboardFilter.drawTabs(aA5, a9z, hu - __fx.leaderboardFilter.tabBarOffset, b7.a9S),
			aA5.fillRect(0, 0, a9z, f7.a7I),
			aA5.fillRect(0, 0, f7.a7I, hu),
			aA5.fillRect(a9z - f7.a7I, 0, f7.a7I, hu),
			aA5.fillRect(0, hu - f7.a7I, a9z, f7.a7I), aA5.font = aA0, v.w.textBaseline(aA5, 1), v.w.textAlign(aA5, 1), aA5.fillText(aAS, Math.floor((a9z + aAA - 22) / 2), Math.floor(aA8 + aA1 / 2));
		__fx.playerList.drawButton(aA5, 12, 12, aAA - 22);
		var ca, hF = playerPos < position + aA3 - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hF = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aA3)
				position = (rivalsCount > aA3 ? rivalsCount : aA3) - aA3;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aA3; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, cD.fh[repId], cD.cE[repId], cD.sR[repId]]);
					cD.fh[repId] = rivalsEntry.territory;
					cD.cE[repId] = "[" + rivalsEntry.clan + "]";
					cD.sR[repId] = 0;
				}
				for (aA5.font = aA2, v.w.textAlign(aA5, 0), ca = aA3 - hF; 0 <= ca; ca--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[ca + position];
					if (rivalsEntryLeft !== undefined)
						aAb(rivalsEntryLeft.representativeId), aAc(ca, ca + position, rivalsEntryLeft.representativeId);
				}
				for (v.w.textAlign(aA5, 2), ca = aA3 - hF; 0 <= ca; ca--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[ca + position];
					if (rivalsEntryRight !== undefined)
						aAb(rivalsEntryRight.representativeId), aAd(ca, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					cD.fh[entry[0]] = entry[1];
					cD.cE[entry[0]] = entry[2];
					cD.sR[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aA3)
				position = (result.length > aA3 ? result.length : aA3) - aA3;
			//if (position >= result.length) position = result.length - 1;
			for (aA5.font = aA2, v.w.textAlign(aA5, 0), ca = aA3 - hF; 0 <= ca; ca--) {
				const pos = result[ca + position];
				if (pos !== undefined)
					aAb(cP[pos]), aAc(ca, pos, cP[pos]);
			}
			for (v.w.textAlign(aA5, 2), ca = aA3 - hF; 0 <= ca; ca--) {
				const pos = result[ca + position];
				if (pos !== undefined)
					aAb(cP[pos]), aAd(ca, cP[pos]);
			}
		} else {
			for (aA5.font = aA2, v.w.textAlign(aA5, 0), ca = aA3 - hF; 0 <= ca; ca--)
				aAb(cP[ca + position]), aAc(ca, ca + position, cP[ca + position]);
			for (v.w.textAlign(aA5, 2), ca = aA3 - hF; 0 <= ca; ca--)
				aAb(cP[ca + position]), aAd(ca, cP[ca + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hF && (aAb(f.al), v.w.textAlign(aA5, 0), aAc(aA3 - 1, cM[f.al], f.al), v.w.textAlign(aA5, 2), aAd(aA3 - 1, f.al)), 0 === position && (hF = .7 * aAB / r1.get(4).height, aA5.setTransform(hF, 0, 0,
				hF, Math.floor(aAC + .58 * aAB + .5 * hF * r1.get(4).width), Math.floor(aA8 + aA1 + .4 * aAB)), aA5.imageSmoothingEnabled = !0, aA5.drawImage(r1.get(4), -Math.floor(r1.get(4).width / 2), -Math.floor(r1.get(4).height / 2)), aA5
			.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAb(player) {
		f.j && (aA5.fillStyle = l.ue[l.p[player]])
	}

	function aAY(q, aAf) {
		aA5.fillStyle = aAf, q = aA3 - 1 < q ? aA3 - 1 : q;
		aAf = Math.floor((q === aA3 - 1 ? 2 : 0 === q ? 1.15 : 1) * aAB), aAf = q === aA3 - 2 ? Math.floor(aAA + 9.15 * aAB) - Math.floor(aAA + 8.15 * aAB) : aAf;
		aA5.fillRect(0, Math.floor(aAA + (q + (0 === q ? 0 : .15)) * aAB), a9z, aAf)
	}

	function aAc(a2o, lW, q) {
		aA5.fillText(aAG[lW], aAC, Math.floor(aA8 + aA1 + (a2o + .5) * aAB)), 1 === cD.sR[q] && (aA5.font = "italic " + aA2);
		lW = Math.floor(aA8 + aA1 + (a2o + .5) * aAB);
		aA5.fillText(cD.cE[q], aAD, lW), 0 !== cD.sR[q] && (aA5.font = aA2), q < f.iy && 2 !== cD.sR[q] || aA5.fillRect(aAD, lW + .35 * aAQ, aAF[q], Math.max(1, .1 * aAQ))
	}

	function aAd(a2o, q) {
		aA5.fillText(cD.fh[q], aAE, Math.floor(aA8 + aA1 + (a2o + .5) * aAB))
	}
	this.e = function() {
		var q;
		for (dk.af.i0[0] = 0, aAO = aAN = aAL = 0, aAP = aAM = !1, aAK = -1, aA3 = cu.cv.cw() ? 6 : 10, aAR = (position = 0) === (aAR = bK.buffer.data[11].value) ? 10 : 1 === aAR ? 5 : 1, aAJ = !1, aAH = new Uint16Array(aA3 + 1), aAI =
			new Uint32Array(aA3 + 1), aA7 = f.g, cP = new Uint16Array(aA7), cM = new Uint16Array(aA7), q = aA7 - 1; 0 <= q; q--) cP[q] = q, cM[q] = q;
		this.resize(!0), aAF = new Uint16Array(f.g);
		var aAT = Math.floor(a9z - aAD - aAC - aA6);
		for (aAG = new Array(f.g), aA5.font = aA2, q = f.g - 1; 0 <= q; q--) aAG[q] = q + 1 + ".", cD.cE[q] = v.fY.fZ(cD.sQ[q], aA2, aAT), aAF[q] = Math.floor(aA5.measureText(cD.cE[q]).width);
		aAU()
	}, this.resize = function(e) {
		if (hu = cu.cv.cw() ? (a9z = Math.floor(.335 * ao.cx), Math.floor(aA3 * a9z / 8)) : (a9z = Math.floor(.27 * ao.cx), Math.floor(aA3 * a9z / 10)), a9z = Math.floor(.97 * a9z), (aA4 = document.createElement("canvas")).width = a9z, aA4
			.height = hu, aA5 = aA4.getContext("2d", {
				alpha: !0
			}), aA8 = .025 * a9z, aA1 = .16 * a9z, aA9 = 0 * a9z, aAA = Math.floor(.45 * aA8 + aA1), aAB = (hu - aA1 - 2 * aA8 - aA9) / aA3,
			aA4.height = hu += aAB, __fx.leaderboardFilter.tabBarOffset = Math.floor(aAB * 1.3), __fx.leaderboardFilter.verticalClickThreshold = hu - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9z,
			aA0 = v.w.bA(1, Math.floor(.55 * aA1)), aAQ = Math.floor((cu.cv.cw() ? .67 : .72) * aAB), aA2 = v.w.bA(0, aAQ), aA5.font = aA2, aAC = Math.floor(.04 * a9z), aAD = Math.floor((cu.cv.cw() ? .195 : .18) * a9z), aA6 = Math.floor(aA5
				.measureText("00920600").width), aA5.font = aA0, aAE = a9z - aAC, !e) {
			aA5.font = aA2;
			for (var q = f.g - 1; 0 <= q; q--) aAF[q] = Math.floor(aA5.measureText(cD.cE[q]).width);
			aAU()
		}
		aAS = v.fY.fZ(L(178), aA0, .96 * a9z)
	}, this.sr = function() {
		return a9z
	}, this.kD = function(x5, aAV) {
		(aAV || aAJ && (x5 || c0.c1() % aAR == 0)) && (aAJ = !1, aAU())
	}, this.bu = function() {
		! function() {
			for (var ca = aA7 - 1; 0 <= ca; ca--) 0 === cD.ft[cP[ca]] && ! function(ca) {
				var aAn = cP[ca];
				aA7--;
				for (var q = ca; q < aA7; q++) cP[q] = cP[q + 1], cM[cP[q]] = q;
				cP[aA7] = aAn, cM[cP[aA7]] = aA7
			}(ca)
		}();
		for (var aAl, bQ = aA7 - 1, ca = 0; ca < bQ; ca++) cD.fh[cP[ca]] < cD.fh[cP[ca + 1]] && (aAl = cP[ca], cP[ca] = cP[ca + 1], cP[ca + 1] = aAl, cM[cP[ca]] = ca, cM[cP[ca + 1]] = ca + 1);
		! function() {
			for (var d8 = aAJ, hF = (aAJ = !0, cM[f.al] >= aA3 - 1 ? aA3 - 2 : aA3 - 1), q = hF; 0 <= q; q--)
				if (aAH[q] !== cP[q] || aAI[q] !== cD.fh[cP[q]]) return;
			(hF != aA3 - 2 || aAH[aA3] === cM[f.al] && aAI[aA3] === cD.fh[f.al]) && (aAJ = d8)
		}();
		for (var q = aA3 - 1; 0 <= q; q--) aAH[q] = cP[q], aAI[q] = cD.fh[cP[q]];
		aAH[aA3] = cM[f.al], aAI[aA3] = cD.fh[f.al];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.dD = function(aD, aE) {
		if (aAo(aD, aE)) {
			if (__fx.utils.isPointInRectangle(aD, aE, f7.gap + 12, f7.gap + 12, aAA - 22, aAA - 22)) __fx.playerList.display(cD.sQ);
			else {
				if (aE - f7.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aD - f7.gap);
				aD = aAq(aE);
				0 <= aD ? (aAL = c0.fr, aAM = !0, aAN = aAO = aD, nm.a1j() && (aD = a5y(-1, aAO, aA3), aAK !== (aD = aD === aA3 ? -1 : aD)) && (aAK = aD, aAU(), c0.d1 = !0)) : (aAP && (aAP = !1, aAU(), c0.d1 = !0), dk.e3(10, 0, new x8({
					a9h: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aAU(), c0.d1 = !0
	};

	function aAq(aE) {
		return (aE -= f7.gap + aAA) < 0 ? Math.floor(aE / aAB) - 1 : aE < (aA3 - 1) * aAB ? Math.floor(aE / aAB) : aE < hu - aAA ? aA3 - 1 : (aE -= hu - aAA, aA3 + Math.floor(aE / aAB))
	}

	function aAo(aD, aE) {
		return aD >= f7.gap && aD < f7.gap + a9z && aE >= f7.gap && aE < f7.gap + hu
	}
	this.dB = function(aD, aE) {
		var d8, aAp;
		if (__fx.utils.isPointInRectangle(aD, aE, f7.gap + 12, f7.gap + 12, aAA - 22, aAA - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aD, aE, f7.gap, f7.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aD - f7.gap)) return aAp = aAq(aE), aD = aAo(aD, aE), aE = !(!(aAp < 0 && aD) || nm.a1j()), aAM ? (d8 = position, (position = a5y(0, position += aAN - aAp, f.g - aA3)) !== d8 ? (aAP = aE,
			aAp = a5y(-1, aAN = aAp, aA3), aAK = aAp = aAp !== aA3 && aD ? aAp : -1, aAU(), c0.d1 = !0) : aAP !== aE && (aAP = aE, aAU(), c0.d1 = !0), !0) : (aAp = (aAp = a5y(-1, aAp, aA3)) === aA3 || !aD || nm.a1j() ? -1 : aAp, (aAK !==
			aAp || aAP !== aE) && (aAK = aAp, aAP = aE, aAU(), c0.d1 = !0))
	}, this.dE = function(aD, aE) {
		if (!aAM) return !1;
		aAM = !1;
		var aAp = aAq(aE);
		var isEmptySpace = false;
		return nm.a1j() && -1 !== aAK && (aAK = -1, aAU(), c0.d1 = !0), c0.fr - aAL < 350 && aAO === aAp && -1 !== (aAp = (aAp = a5y(-1, aAp, aA3)) !== aA3 && aAo(aD, aE) ? aAp : -1) && (aD = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aAp + position] === undefined, __fx.leaderboardFilter.rivalsData[aAp + position]?.representativeId ?? f.al) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), cP[__fx.leaderboardFilter.filteredLeaderboard[aAp + position] ?? (isEmptySpace = true, cM[f.al])]) : cP[aAp + position]),
			aAp === aA3 - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : cM[f.al]) >=
			position + aA3 - 1 && (aD = f.al), !isEmptySpace && f.j && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aD, cD.sQ, f.j5), 0 === cD.ft[aD] || isEmptySpace || f.gI && !f.j5 && !f.g1 && aD !== g1
			.al || kB.aAt(aD, 800, !1, 0)), !0
	}, this.dC = function(aD, aE, deltaY) {
		var aAu;
		return !(aAM || f.hT || (aAu = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aAo(aD, aE)) || (aD = (aD = a5y(-1, aAq(aE), aA3)) === aA3 || nm.a1j() ? -1 : aD, 0 < deltaY ? position < f.g - aA3 && (position += Math.min(f.g - aA3 -
			position, aAu), aAK = aD, aAU(), c0.d1 = !0) : 0 < position && (position -= Math.min(position, aAu), aAK = aD, aAU(), c0.d1 = !0), 0))
	}, this.aR = function() {
		b5.drawImage(aA4, f7.gap, f7.gap)
	}
}

function aAv() {
	var aAw, aAx, aAy;
	aAw = [32, 65, 191, 913, 931], aAx = [64, 127, 688, 930, 1155], aAy = new Array(aAw.length + 1);
	for (var q = 0; q < aAy.length; q++) {
		aAy[q] = 0;
		for (var ca = q - 1; 0 <= ca; ca--) aAy[q] += aAx[ca] - aAw[ca]
	}

	function aB4(eF) {
		for (var q = aAw.length - 1; 0 <= q; q--)
			if (eF >= aAw[q] && eF < aAx[q]) return q;
		return -1
	}
	this.se = function(bJ) {
		return 0 !== (bJ = bJ.trim()).indexOf("Bot ") && 0 !== bJ.indexOf("[Bot] ") && function(bJ, aB1, aB2) {
			var n = (bJ = bJ.trim()).length;
			if (n < aB1 || aB2 < n) return !1;
			for (var eF, aB3 = 0, q = 0; q < n; q++)
				if (eF = bJ.charCodeAt(q), aB3 += 65 <= eF && eF <= 90 || 1040 <= eF && eF <= 1071 ? 1 : 0, -1 === aB4(eF)) return !1;
			if (3 < aB3 && aB3 > Math.floor(n / 2)) return !1;
			return !0
		}(bJ, 3, 20)
	}, this.kJ = function(bJ) {
		for (var n = (bJ = bJ.trim()).length, a8 = [], q = 0; q < n; q++) {
			var eF, c9 = aB4(eF = bJ.charCodeAt(q));
			a8.push(aAy[c9] + eF - aAw[c9])
		}
		return a8
	}, this.eJ = function(a8) {
		for (var eF, ku, bJ = "", n = a8.length, q = 0; q < n; q++)
			for (ku = 1; ku < aAy.length; ku++)
				if (a8[q] < aAy[ku]) {
					eF = aAw[ku - 1] + a8[q] - aAy[ku - 1], bJ += String.fromCharCode(eF);
					break
				} return bJ
	}, this.aB5 = function(bJ) {
		for (var a8 = this.kJ(bJ), result = "", q = 0; q < a8.length; q++) result = (result += a8[q] < 10 ? "00" : a8[q] < 100 ? "0" : "") + a8[q].toString(10);
		return result
	}, this.aB6 = function(bJ) {
		for (var a8 = new Array(Math.floor(bJ.length / 3)), q = 0; q < bJ.length; q += 3) a8[Math.floor(q / 3)] = parseInt(bJ.substring(q, q + 3));
		return this.eJ(a8)
	}, this.aB7 = function(bJ) {
		for (var ff, a8 = [bJ.length], q = 0; q < bJ.length; q++) a8[q] = bJ.charCodeAt(q) - 48;
		var result = "";
		for (q = 0; q < bJ.length; q++) q === bJ.length - 1 || 51 < 10 * a8[q] + a8[q + 1] ? result += a8[q].toString() : (ff = 10 * a8[q] + a8[q + 1], result += String.fromCharCode(ff + (ff < 26 ? 65 : 71)), q++);
		return result
	}, this.aB8 = function(bJ) {
		for (var eF, result = "", q = 0; q < bJ.length; q++) 48 <= (eF = bJ.charCodeAt(q)) && eF < 58 ? result += String.fromCharCode(eF) : 65 <= eF && eF < 75 ? result += "0" + (eF - 65).toString() : 75 <= eF && eF < 91 ? result += (eF - 65)
			.toString() : 97 <= eF && eF < 123 && (result += (eF - 71).toString());
		return result
	}, this.aB9 = function(bJ) {
		for (var n = bJ.length, a8 = [], q = 0; q < n; q++)(eF = bJ.charCodeAt(q)) < 58 ? a8.push(bJ[q]) : (eF -= eF < 91 ? 65 : 71, a8.push(String(fD.fE(eF, 10))), a8.push(String(eF - 10 * fD.fE(eF, 10))));
		var n = a8.length - 2,
			eF = 0,
			p7 = [];
		for (q = 0; q < n; q += 3) p7[eF++] = parseInt(a8[q] + a8[q + 1] + a8[q + 2]);
		return p7
	}, this.aBA = function() {
		for (var hh, aBB = "", q = 0; q < 6; q++) hh = 48 + jX.random() % 36, hh += 58 <= hh ? 39 : 0, aBB += String.fromCharCode(hh);
		return aBB
	}
}

function aBC(title, yv, a58) {
	var iP, wr;
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), wr.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, a58 = a58 || [new dd("⬅️ " + L(5), function() {
		dk.dm()
	}, b7.aBD)], iP = new dc(title, a58), wr = new wu(iP.dg, yv), v.w.textAlign(iP.dg.style, 1)
}

function aBE() {
	this.resize = function() {
		var q, aBF = document.head.querySelector("style#ss");
		if (aBF)
			for (q = aBF.sheet.cssRules.length - 1; 0 <= q; q--) aBF.sheet.deleteRule(0);
		else(aBF = document.createElement("style")).id = "ss", document.head.appendChild(aBF);
		var a98 = "::-webkit-scrollbar",
			aBG = v.w.hK(f7.a1x),
			u = v.w.hK(Math.max(v.w.ke(.012), 8));
		try {
			aBF.sheet.insertRule(a98 + "{width:" + u + ";height:" + u + ";}", aBF.sheet.cssRules.length), aBF.sheet.insertRule(a98 + "-thumb{background-color:white;}", aBF.sheet.cssRules.length), aBF.sheet.insertRule(a98 + "-track{background:" +
				b7.a1s + ";}", aBF.sheet.cssRules.length), aBF.sheet.insertRule(a98 + "-track:horizontal{border-top:" + aBG + " solid white;}", aBF.sheet.cssRules.length), aBF.sheet.insertRule(a98 + "-track:vertical{border-left:" + aBG +
				" solid white;}", aBF.sheet.cssRules.length), aBF.sheet.insertRule(a98 + "-button{display:none;}", aBF.sheet.cssRules.length)
		} catch (e8) {
			for (console.log("error 3425: " + e8), q = aBF.sheet.cssRules.length - 1; 0 <= q; q--) aBF.sheet.deleteRule(0)
		}
	}
}

function aBH() {
	var gap, ez, aD = [0, 0, 0, 0, 0],
		aE = [0, 0, 0, 0, 0],
		pA = [1, 1, 1, 1, 1],
		ff = [!0, !0, !0, !1, !1],
		eF = (this.el = [!0, !0, !0, !1, !1], null);
	this.aBI = function(k, aBJ) {
		eF = k, ff = aBJ, ez = [aBK.aBL, aBK.aBM, aBK.aBN, aBK.aBN, aBK.aBO], this.e()
	}, this.e = function() {
		if (r1.aBP()) {
			var q, dO = Math.floor((cu.cv.cw() ? .261 : .195) * ao.cx),
				dP = Math.floor(.9 * dO),
				er = Math.floor(.17 * dP);
			if (gap = cu.cv.cw() ? 2 * f7.gap : f7.gap, pA[0] = dO / eF[0].width, pA[1] = dP / eF[1].width, pA[2] = er / eF[2].height, pA[3] = er / eF[3].height, pA[4] = er / eF[4].height, pA[2] *= 1.7, pA[3] *= 1.07, aD[0] = gap, aD[1] = gap,
				aD[2] = gap, aD[3] = gap, aD[4] = Math.floor(2 * gap + pA[3] * eF[3].width), aE[0] = gap, aE[1] = aE[0] + gap + pA[0] * eF[0].height, aE[2] = aE[1] + gap + pA[1] * eF[1].height, aE[3] = aE[2] + gap + pA[2] * eF[2].height, aE[4] =
				aE[3], !ff[0])
				for (q = 0; q < 5; q++) aE[q] -= pA[0] * eF[0].height + gap;
			if (!ff[1])
				for (q = 2; q < 5; q++) aE[q] -= pA[1] * eF[1].height + gap
		}
	}, this.f0 = function() {
		return !(7 === dV.dW() && cu.cv.cw())
	}, this.dD = function(xP, xQ) {
		if (eF && this.f0())
			for (var q = ff.length - 1; 0 <= q; q--)
				if (ff[q] && this.el[q] && aD[q] < xP && aE[q] < xQ && xP < aD[q] + pA[q] * eF[q].width && xQ < aE[q] + pA[q] * eF[q].height) return dk.e3(9, dk.iI, new aBC(L(179), v.w.aBQ(ez[q]))), !0;
		return !1
	}, this.aR = function() {
		if (eF && this.f0()) {
			var q;
			for (b5.imageSmoothingEnabled = !0, q = 0; q < 5; q++) ff[q] && this.el[q] && (b5.setTransform(pA[q], 0, 0, pA[q], aD[q], aE[q]), b5.drawImage(eF[q], 0, 0));
			b5.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aBR(a6y) {
	var nW = document.createElement("div"),
		aBS = document.createElement("div"),
		tP = (this.aD = 0, this.aE = 0);

	function aBU() {
		la.a1e.eD()
	}
	this.a71 = a6y, this.show = function(aD, aE, aBW) {
		if (tP) return [0, 0];
		tP = 1, this.aD = aD, this.aE = aE,
			function(self, aBW) {
				var ap = v.w.ke(.16, .7),
					ar = a6y.length * ap / 3,
					aBY = ao.ap / ao.hG,
					aBZ = ao.ar / ao.hG,
					pA = Math.min(1, Math.min(aBY / ap, aBZ / ar));
				ap *= pA, ar *= pA, aBW && (self.aD += v.w.ke(.03, .5)), self.aD = fD.ok(self.aD, 0, aBY - ap), self.aE = fD.ok(self.aE, 0, aBZ - ar), aBS.style.left = self.aD + "px", aBS.style.top = self.aE + "px", aBS.style.width = ap + "px",
					aBS.style.height = ar + "px", aBS.style.font = v.w.bA(0, .3 * ar / a6y.length), v.w.hL(aBS, 5);
				for (var q = 1; q < a6y.length; q++) v.w.hL(a6y[q].button, 8)
			}(this, aBW), document.body.appendChild(nW)
	}, this.eD = function() {
		tP && (tP = 0, nW.removeEventListener("click", aBU), dk.removeChild(document.body, nW))
	};
	for (var q = 0; q < a6y.length; q++) new a51("" + (1 + q), a6y[q].button, 0, 1);
	nW.style.position = "fixed", nW.style.top = "0", nW.style.left = "0", nW.style.width = "100%", nW.style.height = "100%", nW.style.zIndex = "5", aBS.style.position = "absolute",
		function() {
			for (var aBV = (100 / a6y.length).toFixed(2) + "%", q = 0; q < a6y.length; q++) a6y[q].button.style.width = "100%", a6y[q].button.style.height = a6y[q].button.style.maxHeight = aBV, a6y[q].button.style.padding = "0.0em 0.9em", aBS
				.appendChild(a6y[q].button)
		}(), nW.appendChild(aBS), nW.addEventListener("click", aBU)
}

function a01() {
	this.oI = function() {
		for (var n = f.iy, a7b = jQ.result.a7b, aL = a7b.length, sa = (bW.bX(17 + 16 * n + 33 * aL), bW.bY(1, 1), bW.bY(4, 12), bW.bY(10, aL), bW.bY(1, +(2 === f.jG)), bW.bY(1, f.jI % 2), cD.sa), q = 0; q < n; q++) bW.bY(16, sa[q]);
		for (var fh = cD.fh, q = 0; q < aL; q++) {
			var c9 = a7b[q];
			bW.bY(9, c9), bW.bY(24, fh[c9])
		}
		bZ.af.send(bZ.af.a1J, bW.ba)
	}
}

function aBa() {
	this.rH = function() {
		var aBd;
		return !(cH.cI < 3 || cD.fh[cP[0]] >= f.j7 >> 1) && (f.j ? 9 !== f.jA && (aBd = jZ.aBe(), !(2 * jZ.aBg(cN.cO()) >= aBd)) : function() {
			if (8 === f.jA) return !1;
			var aBd = jZ.aBe();
			if (2 * cD.mY[cP[0]] >= aBd) return !1;
			return !0
		}())
	}
}

function aBh() {
	this.fr = c0.fr, this.t = 0, this.aBi = 0, this.aBj = 0, this.aBk = null, this.aBl = 7, this.aBm = 0, this.e = function() {
		this.aBj = 0, this.aBk = [], this.t = 0, this.aBi = 0
	}, this.aBn = function(ba) {
		if (f.gI) this.aBo(ba);
		else if (this.aBk.push(ba), 2 === f.j6) {
			for (var q = 0; q < this.aBk.length; q++) gL.jd.bu(this.aBk[q]);
			this.aBk = []
		}
	}, this.aBo = function(ba) {
		2 !== f.j6 && (gL.jd.bu(ba), jr.bu(), fv.aBo(this.aBj), this.aBj === f.jF ? (f.jC.bu(), this.aBj = 0, this.t = 0, this.aBi = 0, this.fr = c0.fr) : (this.aBj++, k4.aBp(), k4.kD(!0), jj.render()))
	}, this.bu = function() {
		ao.bu(), f.gI ? (c0.d1 = fv.aBo(-1) || c0.d1, aBq()) : (0 !== this.t || c0.fr >= this.fr && (this.fr += c0.fs * Math.floor(1 + (c0.fr - this.fr) / c0.fs), 2 === f.j6 ? aBr() : this.aBs(), this.t++, 27 < c0.fr - this.aBm)) && this.aBt(),
			aBu(), c0.d1 && (c0.d1 = !1, aBv()), this.aBm = c0.fr
	}, this.aBt = function() {
		c0.d1 = !0, aBw(), this.t = 0
	}, this.aBs = function() {
		var aBx, q;
		if (this.aBi !== 7 * this.aBj) aBy(), jj.render();
		else {
			aBx = !1;
			loop: for (; this.aBz() && (aBx = !0, aBy(), 2 !== f.j6) && 0 < this.aBk.length;)
				for (q = this.aBl - 2; 0 <= q; q--)
					if (aBy(), 2 === f.j6) break loop;
			aBx ? jj.render() : (aBr(), jj.xH())
		}
	}, this.aBz = function() {
		return 0 < this.aBk.length && (this.aBj++, gL.jd.bu(this.aBk[0]), this.aBk.shift(), !0)
	}
}

function aC0() {
	this.aC1 = "https://territorial.io/changelog", this.aC2 = "https://territorial.io/terms", this.aC3 = "https://territorial.io/privacy", this.aC4 = "https://territorial.io/tutorial", this.aC5 = "https://territorial.io/players", this.aC6 =
		"https://territorial.io/clans", this.aC7 = "https://territorial.io/clan-results", this.aC8 = "https://patreon.com/c/territorial", this.aBL = "https://play.google.com/store/apps/details?id=territorial.io", this.aBM =
		"https://apps.apple.com/app/id1581110913", this.aBN = "https://discord.gg/pthqvpTXmh", this.aBO = "https://www.instagram.com/davidtschacher/", this.aC9 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aCA() {
	var dY, aCB = !0;

	function aCG(aCF, a4F) {
		var h6 = document.createElement("div"),
			aCH = document.createElement("span"),
			aCI = document.createElement("span");
		aCH.textContent = fv.fw(a4F.fr) + ":", aCH.style.color = b7.l0, aCH.style.paddingRight = "0.4em", aCH.style.display = "table-cell", aCH.style.width = "6ch", aCH.style.textAlign = "end", h6.appendChild(aCH), aCI.textContent = a4F.bJ, h6
			.appendChild(aCI), h6.style.display = "table", a4F.o8 && function(h6, o8) {
				{
					var qK;
					o8 >= 1024 - tL.lq.a9V ? ((qK = document.createElement("img")).src = tL.a0.aCK[o8 - 1024 + tL.lq.a9V].toDataURL(), qK.style.width = "1.5em", qK.style.height = "1.5em", qK.style.verticalAlign = "middle", h6.appendChild(qK)) : ((
						qK = document.createElement("span")).textContent = tL.lq.a9b(o8), qK.style.display = "inline-block", qK.style.fontSize = "1.5em", qK.style.lineHeight = "1em", qK.style.verticalAlign = "middle", h6.appendChild(qK))
				}
			}(h6, a4F.o8), aCF.appendChild(h6)
	}

	function aCD() {
		aCB && (dY.dg.scrollTop = dY.dg.scrollHeight)
	}
	this.clear = function() {
		dY.dg.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aCE = jR.a4I(), n = aCE.length, aCF = document.createDocumentFragment(), q = 0; q < n; q++) aCG(aCF, aCE[q]);
		dY.dg.appendChild(aCF), aCD(), dY.show(), this.resize(), aCB = !0, aCD()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dY.dg.style.padding = "0.4em " + v.w.hK(f7.hI)
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, this.cC = function(a4F) {
		var aCF = document.createDocumentFragment();
		aCG(aCF, a4F), dY.dg.appendChild(aCF), aCD()
	}, (dY = new dc(L(180), [new dd("⬅️ " + L(5), function() {
		dk.iS(1)
	})])).dg.style.overflowY = "auto", dY.dg.addEventListener("scroll", function() {
		aCB = dY.dg.scrollTop >= dY.dg.scrollHeight - dY.dg.clientHeight - 2
	})
}

function aCL() {
	var aCM = new Uint8Array(64);
	this.e = function() {
		var q;
		for (aCM[0] = 45, aCM[37] = 95, q = 0; q < 10; q++) aCM[q + 1] = 48 + q;
		for (q = 0; q < 26; q++) aCM[q + 11] = 65 + q, aCM[q + 38] = 97 + q
	}, this.qH = function(aCN) {
		for (var eL = eM, p7 = new Uint8Array(aCN), q = 0; q < aCN; q++) p7[q] = eL.eN(6);
		return p7
	}, this.qG = function(p7) {
		for (var n = p7.length, aCO = aCM, a8 = [], q = 0; q < n; q++) a8.push(String.fromCharCode(aCO[p7[q]]));
		return a8.join("")
	}, this.bC = function(value, aCP) {
		for (var aCO = aCM, a8 = [], q = 0; q < aCP; q++) a8.push(String.fromCharCode(aCO[value >> 6 * (aCP - 1 - q) & 63]));
		return a8.join("")
	}
}

function aCQ() {
	var aCR = -1,
		aCS = null,
		aCT = -1,
		kj = 4;

	function aCV() {
		fF.aCX() ? jj.render() : jj.xI()
	}

	function aCg(eF, f6) {
		var hh = eF >> 16,
			tg = eF >> 8 & 255,
			eF = 255 & eF,
			aCh = 255 - f6,
			aCh = (aCh < hh && aCh < tg && aCh < eF && (f6 = -f6), aCR >> 7),
			aCj = aCR >> 5 & 3,
			aCk = aCR >> 3 & 3;
		return (Math.max(Math.min(hh + f6, 252 + aCh), aCh) << 16) + (Math.max(Math.min(tg + f6, 252 + aCj), aCj) << 8) + Math.max(Math.min(eF + f6, 252 + aCk), aCk)
	}

	function aCU() {
		return -1 !== aCR && (a6.aCc(aCR, aCS[0], aCS[1], aCS[2]), aCd(aCR), aCR = -1)
	}

	function aCd(player) {
		c0.d1 = !0;
		for (var sS = cD.sS[player], sT = cD.sT[player], sU = cD.sU[player], sV = cD.sV[player], aE = sT; aE <= sV; aE++)
			for (var aD = sS; aD <= sU; aD++) {
				var a3 = a6.xJ(aD, aE);
				a6.wo(player, a3) && (a6.aCl(a3) ? a6.aCm(a3, player) : a6.aCn(a3) ? a6.mc(a3, player) : a6.aCo(a3, player))
			}
	}
	this.e = function() {
		aCS = null, aCT = aCR = -1, kj = fD.ok(Math.floor(bK.buffer.data[16].value), 0, 16)
	}, this.bu = function(x5) {
		if (bK.buffer.data[15].value && 0 !== kj && (x5 || !nm.nn())) {
			var x5 = cX.g9(nm.cm),
				gA = cX.gB(nm.fy);
			if (cX.gD(x5, gA)) {
				x5 = cX.gC(x5, gA), gA = cX.gO(x5);
				if (aCT === gA)
					if (a6.h3(gA)) {
						if (aCR === a6.gU(gA)) return
					} else if (-1 === aCR) return;
				! function(a3) {
					a6.h3(a3) ? (a3 = a6.gU(a3)) !== aCR && (aCU(), function(player) {
						aCR = player, aCS = a6.aCZ(player);
						var aCa = function() {
							var c4 = aCS,
								aCe = kj << 2,
								aCf = aCe << 1;
							return [aCg(c4[0], aCe), aCg(c4[1], aCf), aCg(c4[2], aCf)]
						}();
						a6.aCc(player, aCa[0], aCa[1], aCa[2]), aCd(player)
					}(a3), aCV()) : aCU() && aCV()
				}(aCT = gA)
			} else aCU() && aCV()
		}
	}
}

function aCp() {
	var dY, dZ, da, ds;

	function de() {
		di(), 2 !== f.data.aIncomeType && (f.data.aIncomeData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		2 === f.data.aIncomeType ? (v.aN.dn(da.dp(), f.data.aIncomeData, 255), v.aN.max(f.data.aIncomeData) || (f.data.aIncomeType = 0)) : 1 !== f.data.aIncomeType || f.data.aIncomeValue || (f.data.aIncomeType = 0)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(47), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(48), L(41), L(9)],
			value: f.data.aIncomeType
		}, function(t) {
			di(), 2 !== t || f.data.aIncomeData || (f.data.aIncomeData = new Uint8Array(f.g)), f.data.aIncomeType = t, dk.e3(22)
		})), ds.push(dx)
	}(ds = []), function(ds) {
		var dx;
		1 === f.data.aIncomeType && ((dx = new dy).dz("Value"), dx.e4(new e7({
			t: -1,
			value: f.data.aIncomeValue
		}, 1, 0, function(e8) {
			var value = fD.ok(Math.floor(e8.target.value), 0, 255);
			e8.target.value = f.data.aIncomeValue = value
		})), ds.push(dx))
	}(ds), function(ds) {
		var dx;
		2 === f.data.aIncomeType && ((dx = new dy).dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.aIncomeData, 4)), dx.e4(da), ds.push(dx))
	}(ds), ds))
}

function aCq() {
	var aCr, aCs, aCt, aCu, aCv, aCw, aCx, aCy, aCz, aD0, aD1, aD2, aD3, aD4, aD5, aD6, aD7, aD8, aDA, aDB, a6J, aDC, aDD, aDJ, aDK, aD9 = null,
		aDF = 0,
		aDG = !1,
		aDH = new Float32Array(4),
		aDI = 0,
		aAR = 112,
		aDL = 0;

	function hD() {
		aCz = Math.floor(+ao.cx), aD0 = Math.floor(.5 * aCz), aD9.width = ao.ap, aD9.height = ao.ar, aDA = aD9.getContext("2d", {
			alpha: !0
		}), v.w.textAlign(aDA, 1), v.w.textBaseline(aDA, 1), aDA.imageSmoothingEnabled = !0
	}

	function aDM() {
		var q, aDT;
		for (b5.font = v.w.bA(1, 100 * aD1), aDT = 80 / Math.floor(b5.measureText(v.bB.bC(f.it)).width), b5.font = v.w.bA(1, 100), q = f.g - 1; 0 <= q; q--) aCy[q] = 100 / Math.floor(b5.measureText(cD.cE[q]).width), aCx[q] = Math.min(aDT, aCy[q])
	}

	function aDU(q) {
		return !aDL || (q = cD.mY[q]) < 1e6 ? 1 : q < 1e7 ? aDH[0] : aDH[Math.min(Math.floor(Math.log10(q)) - 6, 3)]
	}

	function aDS(y) {
		aDG = !1, aDF = c0.fr, aD8 = !1, aD7 = 1, aD5 = aD6 = 0, y.clearRect(0, 0, ao.ap, ao.ar);
		for (var aDb, aDc, q, aDd, fontSize, aDe, az = b0 / ay, b1 = b2 / ay, b3 = (ao.ap + b0) / ay, b4 = (ao.ar + b2) / ay, aDf = 0 !== cD.ft[f.al] && !v.c2.rO(f.al), ca = cH.cI - 1; 0 <= ca; ca--) q = cH.cK[ca], (fontSize = Math.floor(aD4 * ay *
			aDU(q) * aCx[q] * aCv[q])) < aD3 || aCz <= fontSize || aCt[q] + aCv[q] > az && aCt[q] < b3 && aCu[q] + aCw[q] > b1 && aCu[q] < b4 && (aDb = Math.floor(ao.ap * (aCt[q] + aCv[q] / 2 - az) / (b3 - az)), aDc = Math.floor(ao.ar * (aCu[q] +
				aCw[q] / 2 - b1) / (b4 - b1) - .1 * fontSize), aDd = a6.zS[q], y.font = v.w.bA(1 === cD.sR[q] ? 4 : 1, fontSize), y.fillStyle = aDg(fontSize, aDd % 2), aDL ? aDh(y, q, fontSize, aDb, aDc, aDd) : aDi(q, fontSize, aDb, aDc, y),
			aD8 = !0, 0 < a6J[q] ? function(aDb, aDc, fontSize, q, y) {
				0 === cM[q] ? tL.lq.a9d(aDB[q]) ? (function(aDb, aDc, fontSize, player, o8, y) {
					for (var fC = aDc, f5 = (y.globalAlpha = aDr(fontSize), aDU(player) * (aDL ? aDI : aCy[player])), fB = aDb - .5 * fontSize / f5 - .9 * fontSize, ku = 0; ku < 2; ku++) y.fillText(tL.lq.a9b(o8), fB, fC), fB = aDb + .5 *
						fontSize / f5 + .9 * fontSize;
					y.globalAlpha = 1
				}(aDb, aDc, fontSize, q, aDB[q], y), aDk(aDb, aDc, fontSize, 0, 0, y)) : tL.lq.a9f(aDB[q]) ? (aDu(aDb, aDc, fontSize, aDB[q], 0, y), aDk(aDb, aDc, fontSize, 0, 1, y)) : (aDu(aDb, aDc, fontSize, aDB[q], 1, y), aDk(aDb, aDc,
					fontSize, 1, 0, y)) : aDu(aDb, aDc, fontSize, aDB[q], 0, y)
			}(aDb, aDc, fontSize, q, y) : 0 === cM[q] && aDk(aDb, aDc, fontSize, 0, 0, y), aDf && (0 < a6J[q + f.g] || 0 < a6J[q + 2 * f.g] || 0 < a6J[q + 3 * f.g] || 0 < a6J[q + 4 * f.g]) && function(aDb, aDc, fontSize, q, y) {
				var eF, hd = -1;
				for (eF = 4; 1 <= eF; eF--) 0 < a6J[q + eF * f.g] && hd++;
				for (eF = 1; eF < 5; eF++) 0 < a6J[q + eF * f.g] && (! function(aDb, aDc, fontSize, eF, q, aDp, d8, y) {
					var k;
					if (1 === eF) {
						q = aDB[q + f.g];
						if (!tL.lq.a9e(q)) return function(aDb, aDc, fontSize, o8, aDp, y) {
							y.globalAlpha = aDr(fontSize);
							aDb -= .534 * aDp * fontSize, aDp = aDc + 1.59 * fontSize;
							y.font = v.w.bA(0, .785 * fontSize), y.fillText(tL.lq.a9b(o8), aDb, aDp), y.globalAlpha = 1
						}(aDb, aDc, fontSize, q, aDp, y);
						k = tL.a0.aCK[q - 1024 + tL.lq.a9V]
					} else k = 2 === eF ? jz.aDx()[4].canvas[+(d8 < 255)] : (3 === eF ? jz.aDx()[5] : jz.aDx()[6]).canvas[0];
					q = tL.a0.aDv, d8 = .8 * fontSize / q, eF = aDb - .5 * d8 * q - .534 * aDp * fontSize, aDb = aDc + 1.4 * d8 * q;
					y.setTransform(d8, 0, 0, d8, eF, aDb), y.globalAlpha = aDr(fontSize), y.drawImage(k, 0, 0), y.globalAlpha = 1, y.setTransform(1, 0, 0, 1, 0, 0)
				}(aDb, aDc, fontSize, eF, q, hd, a6J[q + eF * f.g], y), hd -= 2)
			}(aDb, aDc, fontSize, q, y), (aDe = aD1 * fontSize) < aD3 || (y.font = v.w.bA(1, aDe), aDc += Math.floor(.78 * fontSize), aDL ? aDi(q, aDe, aDb, aDc, y) : aDh(y, q, aDe, aDb, aDc, aDd)))
	}

	function aDi(q, fontSize, aD, aE, y) {
		var ___id = q;
		var showName = q < f.iy || !__fx.settings.hideBotNames;
		if (showName) y.fillText(cD.cE[q], aD, aE), q < f.iy && 2 !== cD.sR[q] || (q = fontSize / aCy[q], y.fillRect(aD - .5 * q, aE + v.w.aDn * fontSize, q, Math.max(1, .1 * fontSize)));
		aDL && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (y.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			y.fillText(__fx.utils.getDensity(___id), aD, showName ? aE + fontSize : aE)
		);
	}

	function aDh(y, q, fontSize, aDb, aDc, aDd) {
		var sc = cD.sc[q],
			aDo = v.bB.bC(cD.mY[q] - sc);

		function drawDensity() {
			!aDL && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (y.fillStyle = __fx.utils.textStyleBasedOnDensity(q)), y.fillText(__fx.utils.getDensity(q), aDb, aDc + fontSize))
		}
		sc ? (sc = y.fillStyle, y.fillStyle = aDg(fontSize, 2 + aDd % 2), y.fillText(aDo, aDb, aDc), y.fillStyle = sc) : aDd >> 1 & 1 ? (y.lineWidth = .05 * fontSize, y.strokeStyle = aDg(fontSize, aDd % 2), y.strokeText(aDo, aDb, aDc)) : (1 < aDd &&
			(y.lineWidth = .12 * fontSize, y.strokeStyle = aDg(fontSize, aDd), y.strokeText(aDo, aDb, aDc)), y.fillText(aDo, aDb, aDc)), drawDensity()
	}

	function aDk(aDb, aDc, fontSize, aDp, aDq, y) {
		var aAg = .95 * fontSize / aDD,
			aDb = aDb - .5 * aAg * aDC + .8 * aDp * fontSize,
			aDp = aDc - 1.76 * aAg * aDD - (.35 - v.w.aDn + .7) * aDq * fontSize;
		y.setTransform(aAg, 0, 0, aAg, aDb, aDp), y.globalAlpha = aDr(fontSize), y.drawImage(r1.get(4), 0, 0), y.globalAlpha = 1, y.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aDu(aDb, aDc, fontSize, o8, aDp, y) {
		var u, fB, aAg;
		y.globalAlpha = aDr(fontSize), tL.lq.a9e(o8) ? (u = tL.a0.aDv, y.setTransform(aAg = 1.1 * fontSize / u, 0, 0, aAg, fB = aDb - .5 * aAg * u - .8 * aDp * fontSize, aAg = aDc - 1.55 * aAg * u), y.drawImage(tL.a0.aCK[o8 - 1024 + tL.lq.a9V], 0,
			0), y.setTransform(1, 0, 0, 1, 0, 0)) : (fB = aDb - .8 * aDp * fontSize, aAg = aDc - (.35 - v.w.aDn + 1) * fontSize, y.fillText(tL.lq.a9b(o8), fB, aAg)), y.globalAlpha = 1
	}

	function aDg(fontSize, aDd) {
		return aD0 <= fontSize && fontSize < aCz ? l.uh[aDd] + aDr(fontSize).toFixed(3) + ")" : l.ui[aDd]
	}

	function aDr(fontSize) {
		return aD0 <= fontSize && fontSize < aCz ? 1 - (fontSize - aD0) / (aCz - aD0) : 1
	}

	function aE9(f5, ap) {
		return 1 + Math.floor(aD2 * f5 * ap)
	}

	function aE6(q) {
		for (var left = aCt[q], ca = aCt[q] - cD.sS[q] - 1; 0 <= ca; ca--)
			if (!aEC(q, --left, aCu[q], aCw[q])) {
				left++;
				break
			} var right = aCt[q];
		for (ca = cD.sU[q] - aCt[q] - aCv[q]; 0 <= ca; ca--)
			if (!aEC(q, ++right + aCv[q] - 1, aCu[q], aCw[q])) {
				right--;
				break
			} var aD = Math.floor((left + right) / 2),
			top = aCu[q];
		for (ca = aCu[q] - cD.sT[q] - 1; 0 <= ca; ca--)
			if (!aED(q, aD, --top, aCv[q])) {
				top++;
				break
			} var bottom = aCu[q];
		for (ca = cD.sV[q] - aCu[q] - aCw[q]; 0 <= ca; ca--)
			if (!aED(q, aD, ++bottom + aCw[q] - 1, aCv[q])) {
				bottom--;
				break
			} var aE = Math.floor((top + bottom) / 2);
		aE3(q, aD, aE, aCv[q], aCw[q]) && (aCt[q] = aD, aCu[q] = aE)
	}

	function aE3(player, aD, aE, ap, ar) {
		f6 = Math.floor(.2 * ap);
		for (var f6, eF = aD + ap - 1; aD <= eF; eF--)
			if (!aEC(player, eF, aE, ar)) return;
		for (eF = aE + ar - 1 - (f6 = (f6 = Math.floor(.25 * ar)) < 1 ? 1 : f6); aE + f6 <= eF; eF--)
			if (!aED(player, aD, eF, ap)) return;
		return 1
	}

	function aEC(player, aD, aE, ar) {
		return a6.wo(player, 4 * (aE * au.av + aD)) && a6.wo(player, 4 * ((aE + ar - 1) * au.av + aD))
	}

	function aED(player, aD, aE, ap) {
		return a6.wo(player, 4 * (aE * au.av + aD)) && a6.wo(player, 4 * (aE * au.av + aD + ap - 1))
	}
	this.e = function() {
		if (aDL = bK.buffer.data[7].value || 8 === f.jA, aD8 = !1, aD4 = .88, aD1 = .5, aD2 = 1.8, aD3 = 12 - 3 * bK.buffer.data[9].value, aCs = aCr = 0, aCt = new Uint16Array(f.g), aCu = new Uint16Array(f.g), aCv = new Uint16Array(f.g), aCw =
			new Uint16Array(f.g), aCx = new Float32Array(f.g), aCy = new Float32Array(f.g), aDB = new Uint16Array(2 * f.g), a6J = new Uint8Array(5 * f.g), aDJ = new Uint8Array(f.g), aDK = new Uint8Array(f.g), aD9 = aD9 || document.createElement(
				"canvas"), hD(), aD6 = aD5 = 0, aD7 = 1, aDL) {
			var q, aDT;
			for (aDM(), b5.font = v.w.bA(1, 100), aDT = 100 / Math.floor(b5.measureText("900 000").width), q = f.g - 1; 0 <= q; q--) aCx[q] = Math.min(aDT, 2 * aCy[q]);
			aDI = aDT, aDH[0] = 100 / (aDT * Math.floor(b5.measureText("5 000 000").width)), aDH[1] = 100 / (aDT * Math.floor(b5.measureText("50 000 000").width)), aDH[2] = 100 / (aDT * Math.floor(b5.measureText("500 000 000").width)), aDH[3] =
				100 / (aDT * Math.floor(b5.measureText("1 000 000 000").width))
		} else aDM();
		! function() {
			var q;
			for (q = f.g - 1; 0 <= q; q--) cD.fh[q] < 12 ? (aCt[q] = cD.sS[q] + 1, aCu[q] = cD.sT[q] + 1, aCv[q] = 1, aCw[q] = 1) : (aCt[q] = cD.sS[q], aCu[q] = cD.sT[q] + 1, aCv[q] = 4, aCw[q] = 2);
			if (f.gI)
				for (q = 0; q < f.iy; q++) aCv[q] = 0;
			aDC = r1.get(4).width, aDD = r1.get(4).height
		}()
	}, this.aDP = function(c9, a4D) {
		a4D > 18 * cD.fh[c9] ? (aDK[c9] = 6, a6.zS[c9] = 2 + a6.zS[c9] % 2) : (aDJ[c9] = 4, (a6.zS[c9] < 2 || 3 < a6.zS[c9]) && (a6.zS[c9] = 6 + a6.zS[c9] % 2))
	}, this.aDQ = function(c9, a4D) {
		a4D > 6 * cD.fh[c9] ? (aDK[c9] = 6, a6.zS[c9] = 4 + a6.zS[c9] % 2) : (aDJ[c9] = 4, (a6.zS[c9] < 4 || 5 < a6.zS[c9]) && (a6.zS[c9] = 8 + a6.zS[c9] % 2))
	}, this.resize = function() {
		hD(), aDS(aDA)
	}, this.aBp = function() {
		for (var q = 0; q < f.iy; q++) cD.sU[q] - cD.sS[q] != 3 || cD.sV[q] - cD.sT[q] != 3 ? (aCt[q] = cD.sS[q] + (cD.sU[q] !== cD.sS[q] ? 1 : 0), aCu[q] = cD.sT[q], aCv[q] = 1, aCw[q] = 1) : (aCt[q] = cD.sS[q], aCu[q] = cD.sT[q] + 1, aCv[q] =
			4, aCw[q] = 2)
	}, this.tK = function(player, t, aDW) {
		! function(player, t, aDW) {
			player += t * f.g;
			0 === t ? aDB[player] === aDW && 0 < a6J[player] ? a6J[player] = 0 : (aDB[player] = aDW, a6J[player] = tL.lq.a9d(aDW) ? 255 : 64) : 1 === t ? (a6J[player] = 64, aDB[player] = aDW) : a6J[player] = aDW
		}(player, t, aDW), 2 === f.j6 && this.kD(!0)
	}, this.aR = function() {
		aD8 && (1 !== aD7 ? (b5.imageSmoothingEnabled = !0, b5.setTransform(aD7, 0, 0, aD7, 0, 0), b5.drawImage(aD9, -aD5 / aD7, -aD6 / aD7), b5.setTransform(1, 0, 0, 1, 0, 0), b5.imageSmoothingEnabled = !1) : b5.drawImage(aD9, -aD5, -aD6))
	}, this.a8U = function(aF, aG) {
		aD5 += aF, aD6 += aG
	}, this.dB = function(aF, aG) {
		k4.a8U(aF, aG)
	}, this.zoom = function(fb, f9, fA) {
		aD7 *= fb, aD5 = (aD5 + f9) * fb - f9, aD6 = (aD6 + fA) * fb - fA
	}, this.wQ = function(player) {
		var sS = cD.sS[player],
			sU = cD.sU[player],
			sT = cD.sT[player],
			sV = cD.sV[player],
			vt = cX.g9(0),
			vu = cX.gB(0),
			vv = cX.g9(ao.ap),
			vw = cX.gB(ao.ar);
		sS < vv && vt < sU && sT < vw && vu < sV && (aCv[player] = 0, aDG = !0)
	}, this.kD = function(x5) {
		return !(!aDG && !x5 && c0.fr < aDF + (1 === aD7 && 0 === aD5 && 0 === aD6 && (f.kN() || f.gI || 2 === f.j6) ? 1e3 : aAR) || (aDS(aDA), 0))
	}, this.aDZ = function(q) {
		return aDU(q) * aCx[q]
	}, this.aDa = function(player) {
		return aCx[player]
	}, this.bu = function() {
		c0.c1() % 10 == 9 && (aDG = aDG || f.kP() && !f.kN()), !f.kN() && 4 <= ++aCs && function() {
			var q, ca, ku;
			for (aCs = 0, ku = 4; 1 <= ku; ku--)
				for (ca = cH.cI - 1; 0 <= ca; ca--) q = cH.cK[ca] + ku * f.g, 0 < a6J[q] && a6J[q] < 255 && a6J[q]--;
			if (2 !== f.j6)
				for (ca = cH.cI - 1; 0 <= ca; ca--) q = cH.cK[ca], 0 < a6J[q] && a6J[q] < 255 && a6J[q]--
		}();
		var q, ca, n = Math.floor(.1 * cH.cI);
		for (n = (n = n < 8 ? 8 : n) > cH.cI ? cH.cI : n, q = aCr + n - 1; aCr <= q; q--) ca = q % cH.cI, ! function(q) {
			var f5 = aDU(q) * aCx[q];
			0 < aCv[q] && aE3(q, aCt[q], aCu[q], aCv[q], aCw[q]) ? ! function(q) {
				for (var aD, aE, ap, ar, a3 = !1, ku = 0; ku < 8; ku++) {
					if (ap = aCv[q] + 2, ar = aCw[q] + 2, ap > cD.sU[q] - cD.sS[q] + 1 || ar > cD.sV[q] - cD.sT[q] + 1) return a3;
					if (aD = aCt[q] - 1, aE = aCu[q] - 1, !aE3(q, aD, aE, ap, ar)) return a3;
					aCt[q] = aD, aCu[q] = aE, aCv[q] = ap, aCw[q] = ar, a3 = !0
				}
				return a3
			}(q) && function(q, f5) {
				for (var aD, aE, ap, ar, a3 = !1, aEA = aCv[q], pA = 1 + Math.floor(.02 * aEA), ku = 1; ku < 5; ku++) {
					if ((ap = aEA + ku * pA) > cD.sU[q] - cD.sS[q] + 1) return a3;
					if ((ar = aE9(f5, ap)) > cD.sV[q] - cD.sT[q] + 1) return a3;
					aD = cD.sS[q] + Math.floor(Math.random() * (cD.sU[q] - cD.sS[q] + 2 - ap)), aE = cD.sT[q] + Math.floor(Math.random() * (cD.sV[q] - cD.sT[q] + 2 - ar)), aE3(q, aD, aE, ap, ar) && (aCt[q] = aD, aCu[q] = aE, aCv[q] = ap,
						aCw[q] = ar, a3 = !0)
				}
				return a3
			}(q, f5) && aE6(q) : ! function(q, f5) {
				var ar, aD = aCt[q] + 1,
					aE = aCu[q] + 1,
					ap = aCv[q] - 2;
				for (;;) {
					if (ap < 1) {
						aCv[q] = 0;
						break
					}
					if (ar = aE9(f5, ap), aE3(q, aD, aE, ap, ar)) return aCt[q] = aD, aCu[q] = aE, aCv[q] = ap, aCw[q] = ar, 1;
					aD++, aE++, ap -= 2
				}
				return
			}(q, f5) ? function(q, f5) {
				var aD, aE, ap, ar, ku, bQ, v4 = cD.sU[q] - cD.sS[q] + 1,
					aEB = Math.floor(.02 * v4);
				for (bQ = -6 * (aEB = aEB < 1 ? 1 : aEB), ku = v4; bQ <= ku; ku -= aEB)
					if (ar = aE9(f5, ap = 0 < ku ? ku : 1), aD = cD.sS[q] + Math.floor(Math.random() * (cD.sU[q] - cD.sS[q] + 2 - ap)), aE = cD.sT[q] + Math.floor(Math.random() * (cD.sV[q] - cD.sT[q] + 2 - ar)), aE3(q, aD, aE, ap, ar))
						return aCt[q] = aD, aCu[q] = aE, aCv[q] = ap, aCw[q] = ar
			}(q, f5) : aE6(q)
		}(cH.cK[ca]);
		aCr = (aCr += n) % cH.cI
	}, this.aE0 = function() {
		var q, c9, ub, uc;
		if (c0.c1() % 4 == 1)
			for (q = cH.cI - 1; 0 <= q; q--) c9 = cH.cK[q], a6.zS[c9] < 2 || ((ub = Math.max(aDJ[c9] - 1, 0)) === (uc = Math.max(aDK[c9] - 1, 0)) ? 0 === ub && (a6.zS[c9] %= 2) : 0 === uc && a6.zS[c9] < 6 && (a6.zS[c9] += 4), aDJ[c9] = ub, aDK[
				c9] = uc)
	}, this.aE1 = function(player) {
		var q = player + 2 * f.g,
			d8 = a6J[q];
		return 0 < d8 && (c5.rS(50, player), a6J[q] = 0, 255 === d8)
	}, this.aE2 = function(player) {
		return 255 === a6J[player + 2 * f.g]
	}
}

function a6C() {
	var aEE = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aEF = function(fr) {
		var aEH, bJ = new Date(fr.getTime() - 6e4 * fr.getTimezoneOffset()).toUTCString();
		return bJ.length < 12 || (bJ = bJ.substring(5, bJ.length), 0 === (fr = fr.getTimezoneOffset())) ? bJ : (aEH = (fr < 0 ? "+" : "-") + fD.fE(Math.abs(fr), 60), 0 == (fr = Math.abs(fr) % 60) ? bJ + aEH : bJ + aEH + ":" + (fr < 10 ? "0" :
			"") + fr)
	}, this.aEI = function(fr) {
		var bJ = fr.toUTCString();
		return bJ.length < 12 ? bJ : function(fr) {
			return aEE[fr.getUTCDay()]
		}(fr) + ", " + bJ.substring(5, bJ.length - 4)
	}
}

function aEK() {
	this.gN = function(player, a2) {
		v.c2.g3(0) && v.c2.g4(player) && cX.xV(a2) && (jr.kG.yd(0, player, a2), f.jC.uG(player, a2))
	}, this.ga = function(player, pY, uA) {
		v.c2.g3(1) && v.c2.g4(player) && v.c2.aEL(player, uA) && v.c2.a3g(player, pY, 12, 0) && v.c2.aEM(player, uA) && ((uA = gb.uE(player, a9.eY[0])) || gb.uF(player)) && (cD.sX[player]++, jr.kG.yd(1, player, pY, a9.eY[0]), cU.aEO.aEP(player,
			uA)) && (v.c2.a3s(player), fI.pX(player, pY), cU.aEO.aEQ(player))
	}, this.rs = function(player, pY, pb) {
		v.c2.g3(1) && v.c2.g4(player) && f.j && v.c2.aEL(player, pb) && v.c2.a4W(player, pb) && v.c2.a4X(player, v.c2.xT(player, pY), pb) && ja.uG(pb, a9.eT[0]) && (jr.kG.yd(2, player, pY, pb), jZ.aER(player, pb))
	}, this.gj = function(player, pY, aES) {
		a9.eZ[1] = 7 & aES;
		var a2 = aES >> 3;
		v.c2.g3(1) && v.c2.g4(player) && cX.xV(a2) && ae.a0X.a0Y(player) && ae.a0X.aET(a2) && v.c2.a3g(player, pY, 32, 0) && ae.a0Q.a0R(player, a2, 1) && (fI.pd(player), jr.kG.yd(3, player, pY, aES), v.c2.a3s(player), aEU.aEV.gj(player), ae.af
			.a3t(player))
	}, this.gm = function(player, pY, tv) {
		849 === pY ? this.aEW(player, tv) : v.c2.g3(1) && v.c2.g4(player) && v.c2.a3g(player, pY, 32, 0) && ae.gk.a0G(player, tv) && (fI.pd(player), jr.kG.yd(4, player, pY, tv), v.c2.a3s(player), aEU.aEV.gm(player), ae.af.a3t(player))
	}, this.aEW = function(player, tv) {
		v.c2.g3(1) && v.c2.g4(player) && ae.a3Q.bu(player, tv) && jr.kG.yd(4, player, 849, tv)
	}, this.rt = function(player, uA) {
		513 === uA ? this.gt(player) : v.c2.g3(1) && v.c2.g4(player) && (uA = Math.min(uA, f.g), gb.uE(player, uA)) && (jr.kG.yd(5, player, uA), gb.aEX(player, uA))
	}, this.ru = function(player, o8) {
		(v.c2.g3(1) || v.c2.g3(2)) && v.c2.g4(player) && (o8 = fD.ok(o8, 0, 1023), jr.kG.yd(6, player, o8), k4.tK(player, 0, o8))
	}, this.gw = function(player, aEY) {
		gu.gv(player) && (jr.kG.yd(7, player, aEY), gu.rU(player, aEY))
	}, this.rv = function(player) {
		(v.c2.g3(0) || v.c2.g3(1)) && v.c2.g4(player) && fF.aEZ(player) && (jr.kG.yd(8, player), aEa.rv(player))
	}, this.rw = function(player) {
		jr.kG.yd(9, player), aEa.rw(player)
	}, this.gt = function(player) {
		gu.gx(player) && (jr.kG.yd(5, player, 513), gu.gt(player))
	}, this.gV = function(player, pY, a2, uA) {
		v.c2.g3(1) && v.c2.g4(player) && v.c2.aEL(player, uA) && v.c2.aEM(player, uA) && cX.xV(a2) && gQ.gR.aEb(player, a2) && (gb.uE(player, a9.eY[0]) || gb.uF(player)) && (jr.kG.yd(10, player, (pY << 10) + a9.eY[0], a2), uA = v.c2.aEc(player,
			pY), cD.m6[player].push(a9.eW[0]), gb.uG(player, uA, a9.eY[0]), k1.uH(player, !0), fI.pe(player))
	}
}

function aBv() {
	jk.hk(), b5.setTransform(ay, 0, 0, ay, 0, 0), b5.imageSmoothingEnabled = ay < 3, b5.drawImage(au.oP, jx.pK(), jx.pL()), js.a3C.aR(), b5.drawImage(qN, jx.pK(), jx.pL()), jk.aR(), ae.aR(), k4.aR(), (f.hT ? (cN.aR(), fG) : (c5.aR(), jw.aR(), g5
	.aR(), fG.aR(), gu.aR(), fv.aR(), jx.aR(), fK.aR(), cN.aR(), jy.aR(), g7.aR(), fF.aR(), jz.aR(), k0.aR(), jt.aR(), kA)).aR(), dk.aR()
}

function r4(fY, ap, ar) {
	fY.clearRect(0, 0, ap, ar), fY.fillStyle = b7.cF, fY.fillRect(0, 0, ap, ar)
}

function r6(fY, ap, ar, r9) {
	fY.fillStyle = b7.b9, fY.fillRect(0, 0, ap, r9), fY.fillRect(0, 0, r9, ar), fY.fillRect(ap - r9, 0, r9, ar), fY.fillRect(0, ar - r9, ap, r9)
}

function rA(fY, aD, aE, u, r9, c9, aEd) {
	fY.fillStyle = b7.b9;
	var c9 = Math.floor(u * c9),
		dP = (c9 += (c9 - r9) % 2, Math.floor((c9 - r9) / 2)),
		u = Math.floor((u - c9) / 2);
	fY.fillRect(aD + u, aE + u + dP, c9, r9), aEd && fY.fillRect(aD + u + dP, aE + u, r9, c9)
}

function aEf() {
	this.bu = function() {
		if (c0.c1() % 51 == 45)
			for (var n = ae.af.am, tl = ae.af.tl, vq = ae.af.vq, vc = ae.af.vc, ag = ae.af.ag, aEg = jn.aEg, aW = jn.aW, q = 0; q < n; q++) {
				var vp, player, aEi, a3G = tl[q];
				a3G % 64 == 6 || (vp = vq[q], (player = ae.td.vZ(vp[vp.length - 1])) < 0) || !v.c2.wD(player, ag[q] >> 3) || jX.tI(1e3) >= aEg[aW[player]] || ! function(a3p, vp) {
					for (var n = vp.length - 1, a0S = ae.af.u3[a3p], aH = 0, q = a0S + 1; q < n; q++) aH += cX.xR(vp[q], vp[q + 1]);
					return (aH += cX.xR(cX.tp(ae.af.ad[a3p]), vp[a0S + 1])) <= 60
				}(q, vp) || (aEi = vc[q], 64 <= a3G && ae.tq.a3q(player, aEi)) || function(player, vp, aEi, a3p, a3G) {
					ae.a0X.a0Y(player) && v.c2.a3g(player, jn.a3h[jn.aW[player]], 32, 0) && (ae.af.tl[a3p] = 64 + a3G % 64, ae.tq.uG(aEi, ae.af.a0J), a9.a8[0] = ae.a0V.a0W(vp), a9.eZ[1] = 6, v.c2.a3s(player), ae.af.a3t(player))
				}(player, vp, aEi, q, a3G)
			}
	}
}

function aEk() {
	var aEl = null,
		aEm = 2e4,
		aEn = 0;
	this.bu = function() {
		c0.fr < aEm || (aEm = c0.fr + 1e4, 0 !== cu.id) || aEl || jP.aEo() || (bZ.af.kU(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || bZ.be.wy(5) : aEm = c0.fr + 1e3)
	}, this.uG = function(eF) {
		aEl = eF
	}, this.show = function() {
		return !(!aEl || c0.fr < aEn) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aEn = c0.fr + 6e4, (new kQ).show(aEl.ht, aEl.colors, aEl.id), !(aEl = null)))
	}
}

function a3K() {
	function aEp(g8, vu, vw) {
		for (var v4 = Math.min(vu, vw), bQ = Math.max(vu, vw), aE = v4 + 1; aE < bQ; aE++)
			if (!a6.vU(cX.xU(g8, aE))) return;
		return 1
	}

	function aEq(gA, vt, vv) {
		for (var v4 = Math.min(vt, vv), bQ = Math.max(vt, vv), aD = v4 + 1; aD < bQ; aD++)
			if (!a6.vU(cX.xU(aD, gA))) return;
		return 1
	}

	function aEr(vt, vu, vv, vw, a2i, a2j) {
		for (var n = Math.min(Math.abs(vv - vt), Math.abs(vw - vu)), aF = Math.sign(vv - vt), aG = Math.sign(vw - vu), q = 0; q < n; q++)
			if (!a6.vU(cX.xU(vt += aF, vu += aG))) return null;
		return vt === vv ? aEp(vt, vu, vw) ? new Uint32Array([a2i, cX.gC(vt, vu), a2j]) : null : aEq(vu, vt, vv) ? new Uint32Array([a2i, cX.gC(vt, vu), a2j]) : null
	}
	this.a0R = function(a2i, a2j) {
		a2i = function(a2i, a2j) {
			var vt = cX.cY(a2i),
				vu = cX.cZ(a2i),
				vv = cX.cY(a2j),
				vw = cX.cZ(a2j);
			if (vt === vv) {
				if (aEp(vt, vu, vw)) return new Uint32Array([a2i, a2j])
			} else {
				if (vu !== vw) return aEr(vt, vu, vv, vw, a2i, a2j) || aEr(vv, vw, vt, vu, a2i, a2j);
				if (aEq(vu, vt, vv)) return new Uint32Array([a2i, a2j])
			}
			return null
		}(a2i, a2j);
		return null === a2i ? -1 : ae.a0V.a2r(a2i)
	}
}

function a64() {
	this.qO = function(a8) {
		a8.fill(0)
	}, this.aEs = function(a8) {
		for (var n = a8.length, q = 0; q < n; q++) a8[q] = []
	}, this.aO = function(ub, fb) {
		for (var uc = a9.eV, q = 0; q < 3; q++) uc[q] = fb * ub[q];
		return uc
	}, this.aP = function(ub, uc, aEt) {
		for (var xl = 0, q = 0; q < 3; q++) xl += Math.abs(ub[q] - uc[q]);
		return aEt <= xl
	}, this.aQ = function(ub, aEu) {
		for (var q = 0; q < 3; q++) ub[q] = fD.ok(ub[q] + aEu, 0, 255);
		return ub
	}, this.dr = function(a8, bU, bV) {
		bV = bV || a8.length - 1;
		for (var hP = 0, q = bU = bU || 0; q <= bV; q++) hP += a8[q];
		return hP
	}, this.aEv = function(a8, aEw) {
		for (var q, aEx, n = a8.length, aEy = [], ca = n - 1; 0 <= ca; ca--) {
			for (q = aEx = 0; q < n; q++) aEw(a8[q]) < aEw(a8[aEx]) && (aEx = q);
			n--, aEy.push(a8[aEx]), a8[aEx] = a8[n], a8.pop()
		}
		return aEy
	}, this.min = function(a8) {
		var q, ff, n = a8.length;
		if (0 === n) return 0;
		for (ff = a8[0], q = 1; q < n; q++) ff = Math.min(ff, a8[q]);
		return ff
	}, this.max = function(a8) {
		var n = a8.length;
		if (0 === n) return 0;
		for (var ff = a8[0], q = 1; q < n; q++) ff = Math.max(ff, a8[q]);
		return ff
	}, this.oS = function(a8, ff) {
		for (var n = a8.length, hd = 0, q = 0; q < n; q++) hd += a8[q] > ff;
		return hd
	}, this.aEz = function(mq, mt, min) {
		for (var n = mt[0], q = n - 1; 0 <= q; q--) mq[q] < min && (mq[q] = mq[--n]);
		mt[0] = n
	}, this.aF0 = function(a8, n, value) {
		for (var q = 0; q < n; q++) a8[q] -= value
	}, this.a2W = function(a8) {
		for (var n = a8.length, q = 0; q < n; q++)
			if ("string" != typeof a8[q]) return !1;
		return !0
	}, this.dn = function(bJ, a8, aF1) {
		a8.fill(0);
		for (var tg = bJ.split(","), n = Math.min(tg.length, a8.length), q = 0; q < n; q++) a8[q] = Math.min(parseInt(tg[q]), aF1)
	}, this.a6h = function(bJ, a8, aF2) {
		a8.fill("");
		for (var tg = bJ.split('"'), n = Math.min(tg.length, 2 * a8.length), h2 = 0, q = 1; q < n; q += 2) a8[h2++] = tg[q].slice(0, aF2)
	}, this.xz = function(a8, hd) {
		if (0 === hd) a8.fill(0);
		else {
			var hP = this.dr(a8),
				n = a8.length;
			if (0 === hP) a8.fill(fD.fE(hd, n));
			else
				for (var q = 0; q < n; q++) a8[q] = fD.fE(hd * a8[q], hP);
			if (0 === (hP = this.dr(a8))) a8[1] = hd;
			else
				for (var h2 = 0; hP++ < hd;) a8[h2 = (h2 + 1) % n] && a8[h2]++
		}
	}, this.a4h = function(a8) {
		if (!a8) return 0;
		var n = a8.length;
		if (0 === n) return 0;
		for (var ff = a8[n - 1], q = n - 2; 0 <= q; q--)
			if (a8[q] !== ff) return q + 2;
		return 1
	}, this.aF3 = function(a8) {
		for (var hP = 0, q = 0; q < a8.length; q++) hP += a8[q].length;
		return hP
	}, this.aF4 = function(aF5) {
		for (var a8 = [], q = 0; q < aF5.length; q++) a8 = a8.concat(aF5[q]);
		return a8
	}, this.has = function(a8, ff) {
		for (var n = a8.length, q = 0; q < n; q++)
			if (a8[q] === ff) return !0;
		return !1
	}
}

function aF6() {
	var aF7, aF8 = new Uint8Array(5),
		aF9 = new Uint8Array(5);
	this.aFA = new bs, this.e = function() {
		for (var ff = bK.buffer.data[119].value, q = 0; q < aF8.length; q++) aF8[q] = (ff >> 2 * q) % 4
	}, this.jm = function() {
		aF7 = [L(181), "", L(182, [a1a.aFB[28]]), L(183, [a1a.aFB[26]]), L(184, [a1a.aFB[0]])], this.aFA.e()
	}, this.bu = function() {
		this.aFA.bu()
	}, this.aFC = function(id) {
		1 < id && nm.nn() || ! function(t) {
			if (3 === aF8[t] || 1 === aF9[t]) return;
			if (aF9[t] = 1, !(Math.random() < .6)) {
				aF8[t]++;
				for (var ff = 0, q = 0; q < aF8.length; q++) ff += aF8[q] << 2 * q;
				bK.iF.bH(119, ff)
			}
			return 1
		}(id) || c5.aFE(aF7[id])
	}
}

function aFF() {
	function aFH(e8) {
		aFP(e8), dk.e3(4, 5, new iD("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new dd("⬅️ " + L(5), function() {
				dk.dm()
			}), new dd("🔄 Reload", function() {
				cu.cv.nI()
			}, b7.xB)]))
	}

	function aFO(e8) {
		aFP(e8), dk.e3(4, 5, new iD(L(185), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e8] ?? aFL(e8), !0))
	}

	function aFL(e8) {
		var bJ = " [" + e8 + "]";
		return 3249 === e8 || 1006 === e8 ? "No Internet / No Server Response / Server Restart" + bJ : 4527 === e8 ? "Player already in lobby" + bJ : 4577 === e8 ? "Your IP is banned." + bJ : 4530 === e8 ? "Lobby Timeout" + bJ : 4528 === e8 ?
			"Lobby Kick: Another login detected." + bJ : 4540 === e8 ? "You have been kicked." + bJ : 4495 === e8 ? "Account doesn't exist." : 4229 === e8 ? "Bad Internet / Unresponsive Client" + bJ : 4555 === e8 ? "This Account is blocked." + bJ :
			4580 === e8 ? "More Gold needed" + bJ : 4557 <= e8 && e8 <= 4560 || 4589 == e8 ? "Please try again later!" + bJ : 4591 === e8 ? "The algo determined you are a bot." + bJ : "Unknown error" + bJ
	}

	function aFP(e8) {
		aFI(e8), dk.af.i1()
	}

	function aFI(e8) {
		4540 === e8 && bZ.af.a5n(e8);
		var zL = dV.dW();
		aFR.close(), 6 === zL ? bZ.af.a5n(e8) : la.zG ? (dk.i6(), la.q4(), bZ.af.close(bZ.af.zH, 3256)) : 8 === zL && f.kE(!0)
	}
	this.nF = [], this.aFG = function(s1, e8) {
		if (1 === s1 && __fx.customLobby.isActive() && 6 !== dV.dW() && __fx.customLobby.setActive(!1), this.nF.push(e8), 4321 === e8 && (data = bK.af.x7(0), console.log("Reset to: " + data.ij), bK.iF.bH(105, data.ij), bK.iF.bH(106, data
				.password)), 8 === dk.iI && 0 === s1)
			if (4211 === e8) aFH(e8);
			else {
				if (la.zG && (4495 === e8 || 4480 === e8) && bZ.af.zH !== s1) return void dk.dm();
				if (8 !== dV.dW() && aFI(), 4480 === e8) return bK.iF.aFQ(), void dk.e3(4, 0, new iD(L(187), L(188), !0));
				var data = 0;
				dk.i9() && 10 === dk.i9().iA && (data = dk.i9().iA), dk.e3(4, data, new iD(L(185), aFL(e8), !0))
			}
		else {
			data = dV.dW();
			if (6 === data) {
				if (4211 === e8) return void aFH(e8);
				if (4215 !== e8 && 4516 !== e8 && 4527 !== e8 && 4533 !== e8 && 4528 !== e8 && !(4557 <= e8 && e8 <= 4560) && 4577 !== e8 && 4576 !== e8) return void i4.a5i(s1)
			} else if (la.zG) {
				if (s1 !== bZ.af.zH) return
			} else {
				if (8 === data) return void(s1 !== bZ.af.a1J || f.j5 || 1 !== f.j6 || f.g1 || c5.aFM(L(186, [e8])));
				if (!(4579 <= e8 && e8 <= 4589)) return
			}(4591 === e8 ? function(e8) {
				aFP(e8), dk.e3(4, 5, new iD("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new dd("⬅️ " + L(5), function() {
					dk.dm()
				}), new dd("🔄 Reload", function() {
					cu.cv.nI()
				}, b7.xB)]))
			} : aFO)(e8)
		}
	}, this.a5l = function(e8) {
		this.nF.push(e8), 8 === dV.dW() ? f.j5 || 1 !== f.j6 || c5.aFM(L(186, [e8])) : aFO(e8)
	}, this.nH = function() {
		this.nF.push(3268), aFP(3268)
	}
}

function zx() {
	this.aFS = function(s1, aFT) {
		bW.bX(11), bW.bY(1, 0), bW.bY(6, 4), bW.bY(1, aFT ? 1 : 0), bW.bY(3, 0 === f.j6 ? la.zG ? 6 : 0 : f.g1 ? 1 : f.j5 ? 7 : f.jA < 7 ? 2 : 8 === f.jA ? 4 : 9 === f.jA ? 5 : 3), bZ.af.send(s1, bW.ba)
	}, this.aFU = function() {
		bW.bX(58), bW.bY(1, 0), bW.bY(6, 5), bW.bY(8, bZ.af.zH), bW.bY(10, aFV.a6a), bW.bY(9, aFV.aFW), bW.bY(10, jV.a5I), bW.bY(14, jV.aFX), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFY = function(a2) {
		bW.bX(27), bW.bY(1, 1), bW.bY(4, 0), bW.bY(22, a2), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFZ = function(pY, uA) {
		bW.bX(25), bW.bY(1, 1), bW.bY(4, 1), bW.bY(10, pY), bW.bY(10, uA), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFa = function(pY, pb) {
		bW.bX(24), bW.bY(1, 1), bW.bY(4, 2), bW.bY(10, pY), bW.bY(9, pb), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFb = function(pY, aES) {
		bW.bX(42), bW.bY(1, 1), bW.bY(4, 3), bW.bY(10, pY), bW.bY(27, aES), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFc = function(pY, tv) {
		bW.bX(31), bW.bY(1, 1), bW.bY(4, 4), bW.bY(10, pY), bW.bY(16, tv), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFd = function(uA) {
		bW.bX(15), bW.bY(1, 1), bW.bY(4, 5), bW.bY(10, uA), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFe = function(t) {
		bW.bX(15), bW.bY(1, 1), bW.bY(4, 6), bW.bY(10, t), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFf = function(aEY) {
		bW.bX(6), bW.bY(1, 1), bW.bY(4, 7), bW.bY(1, aEY), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFg = function() {
		bW.bX(5), bW.bY(1, 1), bW.bY(4, 8), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.aFh = function(pY, a2, uA) {
		bW.bX(47), bW.bY(1, 1), bW.bY(4, 10), bW.bY(10, pY), bW.bY(10, uA), bW.bY(22, a2), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.oA = function(aFi, aFj) {
		bW.bX(24), bW.bY(1, 1), bW.bY(4, 15), bW.bY(9, aFj), bW.bY(10, aFi), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.oD = function(iM) {
		bW.bX(14), bW.bY(1, 1), bW.bY(4, 14), bW.bY(9, iM), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.oH = function(aFk, target) {
		var q, n = aFk.length;
		for (bW.bX(14 + 9 * n), bW.bY(1, 1), bW.bY(4, 13), bW.bY(9, target), q = 0; q < n; q++) bW.bY(9, aFk[q]);
		bZ.af.send(bZ.af.a1J, bW.ba)
	}
}

function aFm() {
	this.bi = new aCL, this.bp = new a7K, this.sD = new n3, this.e = function() {
		this.bi.e()
	}
}

function a9k(s5) {
	var iP, iQ, ds;
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), iQ.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(L(189), [new dd("⬅️ " + L(5), function() {
		dk.iS(10)
	})]), iQ = new df(iP.dg, ((ds = []).push(function() {
		var iZ, dx = new dy,
			ib = new e7(bK.buffer.data[132], 1, function() {
				iZ.button.click()
			}),
			ic = new e7(bK.buffer.data[131], 1, function() {
				ib.e8.focus()
			});
		dx.dz(L(24)), dx.e4(ic), ic.e8.style.marginBottom = "0.8em", dx.dz(L(25)), dx.e4(ib);
		return iZ = new dd(L(23), function() {
			bU = Math.floor(ic.e8.value), bV = Math.floor(ib.e8.value);
			var bV, bU = {
				aEx: Math.min(bU, bV),
				aFq: Math.max(bU, bV)
			};
			dk.e3(8, dk.a4H(10).iA, new iB(21, {
				bT: s5.bT,
				bU: bU.aEx,
				bV: bU.aFq
			}))
		}, 0, 0, 1), dx.e4(new e9([iZ.button])), dx
	}()), ds.push(function() {
		var iZ, dx = new dy,
			ib = new e7(bK.buffer.data[134], 1, function() {
				iZ.button.click()
			}),
			ic = new e7(bK.buffer.data[133], 0, function() {
				ib.e8.focus()
			});
		return dx.dz(1 === s5.bT ? L(190) : L(191)), dx.e4(ic), ic.e8.style.marginBottom = "0.8em", dx.dz(L(192)), dx.e4(ib), iZ = new dd(L(23), function() {
			var bc = ic.e8.value.slice(0, 20),
				bd = Math.abs(Math.floor(ib.e8.value));
			dk.e3(8, dk.a4H(10).iA, new iB(22, {
				bT: s5.bT,
				bc: bc,
				bd: bd
			}))
		}, 0, 0, 1), dx.e4(new e9([iZ.button])), dx
	}()), ds.push(function() {
		var iZ, dx = new dy,
			ib = new e7(bK.buffer.data[152], 1, function() {
				iZ.button.click()
			}),
			ic = new e7(bK.buffer.data[151], 0, function() {
				ib.e8.focus()
			});
		return dx.dz(L(193)), dx.e4(ic), ic.e8.style.marginBottom = "0.8em", dx.dz(L(192)), dx.e4(ib), iZ = new dd(L(23), function() {
			var bc = ic.e8.value.slice(0, 5),
				bd = Math.abs(Math.floor(ib.e8.value));
			dk.e3(8, dk.a4H(10).iA, new iB(28, {
				bT: s5.bT,
				bc: bc,
				bd: bd
			}))
		}, 0, 0, 1), dx.e4(new e9([iZ.button])), dx
	}()), ds))
}

function aFr() {
	var a71, aD, aE, aFs, aFt, aFu, fr, aFv, aFw, aFx, aFy, gap, zoom, oF, aFz;

	function aGG(f9, fA, a3) {
		a6.u0(a3) || -1 === (f9 = ae.td.vg(f9, fA)) ? c5.aGN(a3) : c5.aGO(f9)
	}

	function aGD(aFv) {
		for (var q = oF.length - 1; 0 <= q; q--)
			if (oF[q] === aFv) return 1
	}

	function aGB(r) {
		var q, n;
		if (-1 !== r)
			for (n = a71.length, q = 0; q < n; q++)
				if (a71[q].f0 && a71[q].aD + 1 === r % 4 && a71[q].aE + 1 === r >> 2) return q;
		return -1
	}

	function aG9(f9, fA) {
		var tg = gap / 2;
		return f9 < aD - aFs - 3 * tg || aD + 3 * aFs + 5 * tg < f9 || fA < aE - aFs - 3 * tg || aE + 2 * aFs + 3 * tg < fA ? -1 : 4 * (fA < aE - tg ? 0 : fA < aE + aFs + tg ? 1 : 2) + (f9 < aD - tg ? 0 : f9 < aD + aFs + tg ? 1 : f9 < aD + 2 * aFs +
			3 * tg ? 2 : 3)
	}
	this.aG0 = function() {
		var q, ku, aG2 = [b7.aG3, b7.aG4, b7.aG5, b7.aG6, b7.aG7];
		for (a71 = new Array(10), q = 0; q < 10; q++) a71[q] = {
			id: q,
			f0: !1,
			v7: 0,
			canvas: [],
			aD: 0,
			aE: 0
		};
		for (a71[0].colors = [0, 1, 2, 3], a71[0].aD = 0, a71[0].aE = 0, a71[1].colors = [1, 4], a71[1].aD = 1, a71[1].aE = 0, a71[2].colors = [0, 1], a71[2].aD = -1, a71[2].aE = 0, a71[3].colors = [0], a71[3].aD = 0, a71[3].aE = 0, a71[4]
			.colors = [0, 2], a71[4].aD = 1, a71[4].aE = 1, a71[5].colors = [3], a71[5].aD = 0, a71[5].aE = -1, a71[6].id = 20, a71[6].colors = [0], a71[6].aD = 1, a71[6].aE = -1, a71[7].id = 21, a71[7].colors = [0], a71[7].aD = 0, a71[7].aE = 1,
			a71[8].id = 16, a71[8].colors = [0], a71[8].aD = 0, a71[8].aE = 0, a71[9].id = 10, a71[9].colors = [4], a71[9].aD = 2, a71[9].aE = 0, q = 0; q < 10; q++)
			for (ku = 0; ku < a71[q].colors.length; ku++) a71[q].canvas.push(function(id, a7M) {
				if (id < 20) return v.canvas.r0(r1.get(3), id, a7M);
				var a7M = r1.get(3).height,
					k = v.w.x(a7M, a7M),
					y = v.w.getContext(k);
				20 === id ? y.drawImage(r1.get(18), 0, 0) : 21 === id && tL.a0.aG8(tL.lq.tM + tL.lq.a9a, y, 0, 0, a7M);
				return k
			}(a71[q].id, aG2[a71[q].colors[ku]]))
	}, this.aDx = function() {
		return a71
	}, this.e = function() {
		oF = [], aD = aE = fr = 0, aFt = aFu = -1e3, this.resize()
	}, this.resize = function() {
		aFs = Math.floor((cu.cv.cw() ? .075 : .0468) * ao.cx), zoom = aFs / r1.get(3).height, gap = Math.floor(aFs / 3)
	}, this.a1N = function(f9, fA) {
		return !!this.f0() && (c0.d1 = !0, !!tL.a0.dD(f9, fA, aFw) || (f9 = function(f9, fA) {
			aFu = aFt = -1e3;
			var aGA = aGB(aG9(f9, fA));
			if (-1 === aGA) return 0;
			if (1 !== a71[aGA].colors[a71[aGA].v7])
				if (5 === aGA) {
					if (! function() {
							var d8 = performance.now();
							aFz + 4e3 < d8 && (oF = []);
							aFz = d8
						}(), aGD(aFv)) return 1;
					oF.push(aFv), 16 < oF.length && oF.shift()
				} else if (6 === aGA) {
				for (var q = oF.length - 1; 0 <= q; q--) 0 === cD.ft[oF[q]] && oF.splice(q, 1);
				0 < oF.length && (k6.aGE(1, oF, !0) && gL.c2.oE(oF, aFv), oF = [])
			} else if (2 === aGA) ja.gl(aFv) && gL.gM.aER(g5.gW(), aFv);
			else if (3 === aGA) f.gI && gL.gM.gN(aFx);
			else if (0 === aGA)
				if (0 === a71[0].v7) {
					if (f.j8 && fv.a4G() < 350) return 1;
					jl.aFC(4), gL.gM.ga(g5.gW(), aFv)
				} else gd.ge(aFv, g5.gW());
			else if (1 === aGA) gL.gM.gj(g5.gW(), aFx);
			else if (9 === aGA) gL.gM.gm(g5.gW());
			else {
				if (7 === aGA) return jl.aFC(0), tL.a0.show(f9, fA), 2;
				if (4 === aGA) k6.aGE(0, [aFv], !0) && gL.c2.oB(aFv);
				else {
					if (8 !== aGA) return 0;
					gL.gM.gV(g5.gW(), aFy, aFv)
				}
			}
			return 1
		}(f9, fA), this.eD(), 2 === f9 && (tL.a0.f0 = !0), 0 < f9))
	}, this.a1P = function(f9, fA) {
		this.f0() || (aFt = f9, aFu = fA, fr = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = cX.g9(mouseX),
			coordY = cX.gB(mouseY),
			point = cX.gO(cX.gC(coordX, coordY));
		cX.gD(coordX, coordY) && aGG(mouseX, mouseY, point)
	}, this.click = function(f9, fA, a1X) {
		var g8 = cX.g9(f9),
			gA = cX.gB(fA),
			a2 = cX.gC(g8, gA),
			a3 = cX.gO(a2),
			aGF = (cu.cv.cw() ? .025 : .0144) * ao.cx,
			d8 = performance.now();
		return !(Math.abs(f9 - aFt) > aGF || Math.abs(fA - aFu) > aGF || fr + 500 < d8 || (fr = d8, nm.nn() && (nm.cm = f9, nm.fy = fA, k7.bu(1), k8.bu(1)), !cX.gD(g8, gA))) && (a1X ? (aGG(f9, fA, a3), !1) : fF.g2 || this.f0() || !v.c2.g4(f
			.al) || f.g1 ? (this.eD(), !1) : (f.gI ? 0 <= (aFx = gJ.gK(a2)) && (a71[3].f0 = !0) : 2 === f.j6 ? a6.h3(a3) && (aFv = a6.gU(a3), v.c2.rO(aFv) || (a71[0].f0 = !0, a71[0].v7 = 1, a71[7].f0 = !0)) : (ae.gk.gl(f.al, a2) && (a71[0]
				.f0 = !0, a71[0].v7 = 1, a71[1].f0 = !0, a71[1].v7 = 0, a71[9].f0 = !0, a71[9].v7 = 0), ae.gh.gi(f.al, a2) && (a71[0].f0 = !0, a71[0].v7 = 1, a71[1].f0 = !0, a71[1].v7 = 1, aFx = a9.eZ[7]), a6.gP(a3) ? (aFy = gQ.gR.gS(
				a3)) && (aGF = cX.gO(aFy), a71[8].f0 = !0, aFv = a6.cT(aGF) ? f.g : a6.gU(aGF)) : (a6.wo(f.al, a3) && (aFw = f.al, a71[0].f0 = !0, a71[0].v7 = 1, a71[7].f0 = !0), -1 !== (d8 = gJ.gX(a2)) && (a6.cT(d8 << 2) ? (aFv = f
				.g, gY.gZ(f.al) ? (a71[0].f0 = !0, a71[0].v7 = 0) : gb.gc(f.al) && (a71[0].f0 = !0, a71[0].v7 = 3)) : (aFv = a6.gU(d8 << 2), a71[0].v7 = 1, a71[5].f0 = function(aFv) {
				return !v.c2.rO(aFv) && !aGD(aFv) && k6.aGE(1, [aFv], !1)
			}(aFv), a71[7].f0 || v.c2.rO(aFv) || (aFw = aFv, a71[7].f0 = !0), a71[4].f0 = !v.c2.rO(aFv) && !k4.aE2(aFv) && k6.aGE(0, [aFv], !1), a71[6].f0 = function(aFv) {
				if (0 === oF.length) return !1;
				if (performance.now() > aFz + 4e3) return !(oF = []);
				return !aGD(aFv) && ! function(aFv) {
					var q;
					if (f.j)
						for (q = oF.length - 1; 0 <= q; q--)
							if (!gY.gf(aFv, oF[q])) return 1;
					return
				}(aFv)
			}(aFv), gY.gf(aFv, f.al) ? (gY.gg(f.al, aFv) ? (a71[0].v7 = 0, a71[0].f0 = !0) : gb.gc(f.al) && (a71[0].v7 = 3, a71[0].f0 = !0), a71[0].f0 = this.aGL()) : (a71[2].f0 = !0, ja.gl(aFv) ? a71[2].v7 = 0 : a71[2]
				.v7 = 1, a71[0].f0 = !0))))), this.aGH(f9, fA)))
	}, this.aGH = function(f9, fA) {
		return aD = f9 - Math.floor(aFs / 2), aE = fA - Math.floor(aFs / 2), !!this.f0()
	}, this.dB = function(f9, fA) {
		return !!this.f0() && (tL.a0.f0 ? !tL.a0.aAo(f9, fA) && (tL.a0.f0 = !1, c0.d1 = !0) : function(a73, f9, fA) {
			f9 = aG9(f9, fA);
			if (0 <= aGB(f9)) return !1;
			if ((1 === f9 || 6 === f9) && 0 <= aGB(2)) return !1;
			if ((6 === f9 || 9 === f9) && 0 <= aGB(10)) return !1;
			return a73.eD(), c0.d1 = !0
		}(this, f9, fA))
	}, this.eD = function() {
		for (var q = a71.length - 1; 0 <= q; q--) a71[q].f0 = !1, a71[q].v7 = 0;
		tL.a0.f0 = !1
	}, this.f0 = function() {
		return this.aGL() || tL.a0.f0
	}, this.aGL = function() {
		for (var n = a71.length, q = 0; q < n; q++)
			if (a71[q].f0) return !0;
		return !1
	}, this.aR = function() {
		if (this.f0())
			if (tL.a0.f0) tL.a0.aR();
			else {
				var q, y = b5,
					ku = a71,
					n = ku.length,
					aGS = (aFs + gap) / zoom;
				for (y.imageSmoothingEnabled = !0, y.setTransform(zoom, 0, 0, zoom, aD, aE), q = 0; q < n; q++) ku[q].f0 && b5.drawImage(ku[q].canvas[ku[q].v7], ku[q].aD * aGS, ku[q].aE * aGS);
				y.imageSmoothingEnabled = !1, y.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function e9(aGT) {
	var h6 = document.createElement("div");
	this.e8 = h6, this.aGU = aGT, this.resize = function() {
		for (var n = aGT.length, q = 1; q < n; q++) v.w.hL(aGT[q], 4)
	};
	var q, n = aGT.length;
	for (h6.style.width = "100%", h6.style.height = "2.7em", h6.style.marginTop = "0.6em", h6.style.border = "inherit", q = 0; q < n; q++) aGT[q].style.verticalAlign = "top", aGT[q].style.width = (100 / n).toFixed(2) + "%", aGT[q].style.height =
		"100%", aGT[q].style.fontSize = "0.75em", h6.appendChild(aGT[q])
}

function aGV() {
	var dY, dZ, da, a71;

	function de() {
		di(), dk.dl()[19] = null, dk.dm()
	}

	function aGW() {
		di(), dk.e3(21)
	}

	function di() {
		1 === f.data.gameMode ? f.jK.jT() : 0 === f.data.gameMode && 1 === f.data.colorsType && v.aN.dn(da.dp(), f.data.colorsData, 262143)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, a71 = [new dd("⬅️ " + L(5), de)], 1 === f.data.gameMode && a71.push(new dd(L(194), aGW, 1, 1)), dY = new dc(L(39), a71), dZ = new df(dY.dg, (a71 = [], 0 === f.data.gameMode ? (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(7), L(9)],
			value: f.data.colorsType
		}, function(t) {
			di(), f.data.colorsType = t, 1 !== f.data.colorsType || f.data.colorsData && f.data.colorsData.length === f.g || (f.data.colorsData = new Uint32Array(f.g)), dk.e3(21)
		})), ds.push(dx)
	}(a71), 1 === f.data.colorsType && function(ds) {
		var dx = new dy;
		dx.dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.colorsData, 1)), dx.e4(da), ds.push(dx)
	}(a71)) : (f.jK.jT(), a71.push(function() {
		var dx = new dy;
		dx.dz(L(37));
		for (var q = 0; q < l.uj.length; q++) {
			var h2 = (q + 1) % l.uj.length,
				e8 = dx.op((0 == h2 ? "" : "Team ") + l.uj[h2]);
			q && (e8.style.marginTop = "0.5em"), dx.e4(new e7({
				t: -1,
				value: f.data.teamPlayerCount[h2]
			}, 1, 0, function(e8) {
				dY.eG[1].pz(0);
				var playerCount = fD.ok(Math.floor(e8.target.value), 0, 512);
				e8.target.value = playerCount, f.data.teamPlayerCount[e8.target.aGY] = playerCount
			})).e8.aGY = h2
		}
		return dx
	}()), function(ds) {
		for (var dx = new dy, e0 = (dx.dz(L(195)), []), q = 0; q < l.uj.length; q++) {
			var h2 = (q + 1) % l.uj.length;
			e0.push(l.uj[h2])
		}
		f.data.colorsData || (f.data.colorsData = new Uint32Array(1));
		dx.e1(new e2({
			e0: e0,
			value: (f.data.colorsData[0] % 16 + l.uj.length - 1) % l.uj.length
		}, function(t) {
			var t = (t + 1) % l.uj.length,
				v1 = l.aB[t],
				v1 = (v1[0] >> 2 << 12) + (v1[1] >> 2 << 6) + (v1[2] >> 2);
			f.data.colorsData[0] = v1 - (15 & v1) + t
		})), ds.push(dx)
	}(a71)), a71))
}

function a3F() {
	var aDv = 32,
		aCK = new Array(2);

	function x(eF) {
		var aD, aE, a2, aG, aF, u = aDv,
			k = v.w.x(u, u),
			y = v.w.getContext(k, !0),
			z = v.w.getImageData(y, u, u),
			a0 = z.data,
			aL = (u >> 1) - .5,
			aGa = Math.sqrt(aL * aL);
		for (a0.fill(255), aE = 0; aE < u; aE++)
			for (aD = 0; aD < u; aD++) aF = aD - aL, aG = aE - aL, a2 = 4 * (aE * u + aD), aF = 714 * (aGa - Math.sqrt(aF * aF + aG * aG)) / aGa, a0[2 + a2] = eF, a0[3 + a2] = 255 < aF ? 0 : aF;
		return y.putImageData(z, 0, 0), k
	}
	this.aGZ = -1, this.e = function() {
		this.aGZ = -1, aCK[0] || (aCK[0] = x(255), aCK[1] = x(0))
	}, this.aGb = function(y, a3, aD, aE, hh, q) {
		v.c2.g4(f.al) && (y.setTransform(a3 *= 4 / 3 * .625, 0, 0, a3, aD - (hh *= 4 / 3), aE - hh), y.drawImage(aCK[+(ae.af.vc[q] === this.aGZ)], 0, 0))
	}
}

function aFl(x5) {
	jV && !x5 || (aGk(), fD = new aGl, aBK = new aC0, v = new a62, b7 = new aGm, f = new is, sB = new a2I, bo = new aFm, bh = new a6L, jn = new aGn, k1 = new a4J, k2 = new mx, kB = new aGo, jo = new aGp, jp = new a6q, aGc = new aAv, jz = new aFr,
		fF = new aGq, c5 = new aGr, a2T = new aGs, g7 = new aGt, fK = new aGu, g5 = new aGv, jx = new a89, d9 = new cb, jy = new sf, jw = new a9y, fv = new aGw, k0 = new aGx, a5m = new a76, i4 = new a5M, dV = new aGy, r1 = new aGz, a6 = new aH0,
		aGd = new wK, cH = new aH1, ja = new a4T, gQ = new aH2, gb = new aH3, jZ = new aH4, rG = new aBa, k4 = new aCq, cD = new sP, jb = new aH5, jS = new t9, tL = new aH6, jh = new aH7, zW = new aH8, a1b = new aH9, bZ = new zu, jX = new aHA,
		cU = new aHB, jk = new a1y, a1L = new aHC, kA = new ov, ao = new aHD, gu = new qo, aFV = new aHE, gd = new a6M, aGe = new t1, aGf = new aHF, k5 = new aHG, k6 = new aHH, qT = new qP, k7 = new aCQ, k8 = new aHI, gL = new aHJ, jr = new a44,
		fG = new a97, bW = new nM, s9 = new a4c, eM = new q3, a8v = new a8s, nm = new a0u, cX = new xK, ae = new a3A, a9 = new eP, js = new aHK, aEa = new aHL, jQ = new aHM, au = new a0a, a1R = new fx, dk = new aHN, jP = new aHO, cu = new a6i,
		jV = new aHP, wY = new sH, bK = new aHQ, l = new ud, cN = new hM, xG = new pB, jj = new xC, jl = new aF6, aGg = new aHR, fI = new pT, jt = new eo, c0 = new aHS, rc = new a8p, f7 = new aHT, nE = new aFF, aEU = new aHU, os = new aHV, la =
		new a7Q, a4w = new aHW, jR = new a4A, gJ = new aHX, gY = new aHY, aFR = new aHZ, jV.e(), cu.e(), ao.f4(), bK.e(), sB.e(), sB.a2S(), (a1a = new aHb).e(), v.e(), jl.e(), bZ.e(), bo.e(), bh.e(), au.e(), dk.e(), aGh = new aBH, ao.e(), c0.e(),
		f7.e(), aGg.e(), aGi = new aHc, jX.e(), jZ.a4f(), jP.e(), jh.e(), dV.e(), d9.e(), jb.e(), nm.e(), r1.e(), c0.d1 = !0, setTimeout(function() {
			au.bX(2, 14071)
		}, 0), dk.e3(5, 5), a8v.wL() || cu.cv.aHd(), ao.aHe(), jV.nC = 1)
}

function aGk() {
	"function" != typeof Math.log2 && (Math.log2 = function(aD) {
		return Math.log(aD) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aD) {
		return Math.log(aD) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aD) {
		return 0 < aD ? 1 : aD < 0 ? -1 : 0
	})
}

function a3M() {
	var aHf;
	this.e = function() {
		if (!aHf) {
			aHf = new Array(l.uk.length);
			for (var q = 0; q < aHf.length; q++) aHf[q] = js.af.aHh(20, l.uk[q])
		}
	}, this.aR = function() {
		var aHi = ay;
		if (!(5 <= aHi)) {
			var an = ao.ap,
				aq = ao.ar,
				az = b0 / aHi,
				b1 = b2 / aHi,
				b3 = (an + b0) / aHi,
				b4 = (aq + b2) / aHi,
				hF = -20 * aHi,
				aHj = .5 * hF,
				at = au.av << 4,
				n = ae.af.am,
				ad = ae.af.ad,
				ag = ae.af.ag,
				p = l.p,
				k = aHf,
				y = b5;
			3 < aHi && (y.globalAlpha = .5 * (5 - aHi));
			for (var q = 0; q < n; q++) {
				var aY = ad[q],
					aD = an * (aY % at / 16 - az) / (b3 - az) + aHj,
					aY = aq * (Math.floor(aY / at) / 16 - b1) / (b4 - b1) + aHj;
				an < aD || aq < aY || aD < hF || aY < hF || (y.setTransform(aHi, 0, 0, aHi, aD, aY), aD = k[p[ag[q] >> 3]], y.drawImage(aD, 0, 0))
			}
			y.globalAlpha = 1, y.setTransform(aHi, 0, 0, aHi, 0, 0)
		}
	}
}

function a45() {
	this.kJ = function() {
		var aDV = function() {
				for (var yb = jr.kG.yb, n = yb.length, max = 0, q = 0; q < n; q++) max = Math.max(max, yb[q]);
				return a61(Math.max(max, 1))
			}(),
			ap = (c4 = f.data, (ap = s9).e(), ap.bY(12, jV.rVersion), ap.t += 43, ap.bY(2, c4.mapType), ap.bY(8, c4.mapProceduralIndex), ap.bY(8, c4.mapRealisticIndex), ap.bY(14, c4.mapSeed), ap.a4j(c4.mapName, 5), 2 === c4.mapType && ap.a4k(c4
				.canvas), ap.bY(1, c4.passableWater), ap.bY(1, c4.passableMountains), ap.bY(10, c4.playerCount), ap.bY(10, c4.humanCount), ap.bY(9, c4.selectedPlayer), ap.bY(1, c4.gameMode), ap.bY(2, c4.playerMode), ap.bY(2, c4
				.battleRoyaleMode), ap.bY(4, c4.numberTeams), ap.bY(1, c4.isZombieMode), ap.bY(1, c4.isContest), ap.bY(1, c4.isReplay), ap.a4f(c4.elo, 2, 14), ap.bY(1, c4.colorsType), ap.bY(1, c4.colorsPersonalized), ap.a4f(c4.colorsData, 10,
				18), ap.bY(1, c4.selectableColor), ap.a4f(c4.teamPlayerCount, 4, 10), ap.bY(1, c4.neutralBots), ap.bY(2, c4.botDifficultyType), ap.bY(4, c4.botDifficultyValue), ap.a4f(c4.botDifficultyTeam, 4, 4), ap.a4f(c4.botDifficultyData,
				10, 4), ap.bY(2, c4.spawningType), ap.bY(14, c4.spawningSeed), ap.a4f(c4.spawningData, 11, 12), ap.bY(1, c4.selectableSpawn), ap.bY(2, c4.playerNamesType), ap.a4i(c4.playerNamesData, 10, 5), ap.bY(1, c4.selectableName), ap.bY(
				2, c4.aIncomeType), ap.bY(8, c4.aIncomeValue), ap.a4f(c4.aIncomeData, 10, 8), ap.bY(2, c4.tIncomeType), ap.bY(8, c4.tIncomeValue), ap.a4f(c4.tIncomeData, 10, 8), ap.bY(2, c4.iIncomeType), ap.bY(8, c4.iIncomeValue), ap.a4f(c4
				.iIncomeData, 10, 8), ap.bY(2, c4.sResourcesType), ap.bY(11, c4.sResourcesValue), ap.a4f(c4.sResourcesData, 10, 11), ap.a4f(c4.ir, 10, 30), ! function(aDV) {
				var ap = s9,
					yW = jr.kG.yW,
					eh = jr.kG.yX,
					ej = jr.kG.yY,
					el = jr.kG.yZ,
					n = yW.length;
				ap.bY(5, aDV), ap.bY(30, n), ap.bY(30, jr.kG.yb.length);
				for (var q = 0; q < n; q++) {
					var eF = yW[q];
					ap.bY(4, eF), ap.bY(9, eh[q]), 0 === eF ? ap.bY(22, ej[q]) : 1 === eF ? (ap.bY(10, ej[q]), ap.bY(10, el[q])) : 2 === eF ? (ap.bY(10, ej[q]), ap.bY(9, el[q])) : 3 === eF ? (ap.bY(10, ej[q]), ap.bY(27, el[q])) : 4 === eF ? (
						ap.bY(10, ej[q]), ap.bY(16, el[q])) : 5 === eF || 6 === eF ? ap.bY(10, ej[q]) : 7 === eF ? ap.bY(1, ej[q]) : 10 === eF && (ap.bY(20, ej[q]), ap.bY(22, el[q]))
				}
			}(aDV), ! function(aDV) {
				for (var ap = s9, ya = jr.kG.ya, yb = jr.kG.yb, n = ya.length, q = 0; q < n; q++) ap.bY(1, ya[q]), ap.bY(aDV, yb[q])
			}(aDV), s9.t),
			c4 = fD.fE(ap - 1, 6) + 1,
			aDV = (bW.q8(6 * c4) !== s9.a8.length && s9.a8.push(0), ! function() {
				var ap = s9;
				ap.t = 24, ap.bY(31, ap.a8.length), ap.t = 12, ap.bY(12, function() {
					for (var a8 = s9.a8, n = a8.length, aHu = jV.rVersion, q = 3; q < n; q++) aHu = aHu + a8[q] & 4095;
					return aHu
				}())
			}(), eM.e(s9.a8), bo.bi.qG(bo.bi.qH(c4)));
		return eM.q4(), s9.e(), aDV
	}
}

function aHv() {
	var aEm = 12e3;
	this.show = function(kF) {
		return !kF && !jP.aEo() && (0 === cu.id ? jP.aHw.show() : !(c0.fr < aEm) && (kF = 1 === cu.id ? 72e4 : 108e4, aEm = c0.fr + kF, 2 === jV.jW) && cu.cv.aHx(Math.floor(kF)))
	}
}

function a6m() {
	this.aHy = function() {
		bK.iF.aHz(), bK.iF.aI0(), bZ.af.close(0, 3255), 0 === cu.id ? cu.a6j && cu.a6j.clear() : 1 === cu.id ? cu.qc.saveString(199, "") : 2 === cu.id && cu.a6l.postMessage("clear")
	}, this.aI1 = function() {
		2 === cu.id ? cu.a6l.postMessage("showConsentForm") : 1 === cu.id && cu.qc.setState(7)
	}, this.aI2 = function() {
		this.setState(14)
	}, this.cw = function() {
		return 1 === bK.buffer.bN(2)
	}, this.aI3 = function() {
		bK.buffer.bI(102, "")
	}, this.setState = function(zL) {
		1 === cu.id && 5 <= cu.bM && cu.qc.setState(zL)
	}, this.nI = function() {
		var a8x;
		1 === cu.id && 7 <= cu.bM ? cu.qc.setState(5) : 2 === cu.id ? cu.a6l.postMessage("reload 0") : ((a8x = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a8x.toString())
	}, this.aI4 = function() {
		0 !== cu.id && (1 === cu.id ? cu.qc.prepareAd("8646194357") : 2 === cu.id && (0 === cu.bM ? cu.a6l.postMessage("prepare ad 2904813909") : cu.a6l.postMessage("loadAds 2904813909")))
	}, this.aHx = function(d8) {
		return 0 !== cu.id && (1 === cu.id ? 12 <= cu.bM && (cu.qc.presentAd(d8), !0) : 2 === cu.id && 0 !== cu.bM && (cu.a6l.postMessage("showAd"), !0))
	}, this.aHd = function() {
		2 === cu.id && cu.bM < 23 && dk.e3(4, 1, new iD("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + aBK.aBM + "' target='_blank'>" +
			aBK.aBM + "</a>", !0, [new dd("⬅️ " + L(5), function() {
				dk.e3(0)
			}, b7.aBD)]))
	}
}

function aI5() {
	this.aR = function() {
		if (0 !== js.af.hO && (b5.globalAlpha = Math.min(js.af.hO / 580, 1), b5.drawImage(js.af.aI8, 1 + jx.pK(), 1 + jx.pL()), b5.globalAlpha = 1, f.gI)) {
			for (var az = b0 / ay, b1 = b2 / ay, b3 = (ao.ap + b0) / ay, b4 = (ao.ar + b2) / ay, hF = js.af.aI9 * ay, aIA = js.af.aIA, q = f.iy - 1; 0 <= q; q--) ! function(q, hF, az, b1, b3, b4, aIA) {
				var highlight;
				0 === cD.ft[q] || 0 === cD.fh[q] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[q]) && (hF *= 2), b3 = ao.ap * ((cD.sS[q] + cD.sU[q] + 1) / 2 - az) / (b3 - az) - .5 * hF, az = ao.ar * ((cD.sT[
					q] + cD.sV[q] + 1) / 2 - b1) / (b4 - b1) - .5 * hF, b3 > ao.ap) || az > ao.ar || b3 < -hF || az < -hF || (highlight ? b5.setTransform(2 * ay, 0, 0, 2 * ay, b3, az) : b5.setTransform(ay, 0, 0, ay, b3, az), b5.drawImage(
					aIA[f.j ? l.cR[q] : 1], 0, 0))
			}(q, hF, az, b1, b3, b4, aIA);
			b5.setTransform(ay, 0, 0, ay, 0, 0)
		}
	}
}

function aHD() {
	var eF, x5 = !1,
		aIC = !1,
		aID = -1e4,
		aIE = -1,
		aIF = 0;

	function resize(aIK) {
		eF = 0, r1.aBP() && (aII(aIK) || x5) && (x5 = !1, f7.resize(), aGg.aIL.resize(), a5m.e(), aGh.e(), i4.resize(), d9.resize(), a2T.resize(), aFR.resize(), dk.resize(), 1 <= f.j6 ? (jw.resize(!1), jy.resize(), fv.resize(), jx.resize(), g5
			.resize(), c5.resize(), fF.resize(), fG.resize(), gu.resize(), g7.resize(), fK.resize(), jz.resize(), jt.resize(), k4.resize(), k0.resize(), cN.resize(), jx.a8M()) : (dV.aIM(), dV.aIN()), c0.d1 = !0)
	}

	function aIH(ff) {
		return ff && 128 < ff ? Math.floor(ff) : 128
	}

	function aII(aIK) {
		var ap, ar, aIP, dO, er;
		if (!(0 < ao.wJ)) return dO = aIH(document.documentElement.clientWidth), er = aIH(window.visualViewport && 2 !== cu.id ? window.visualViewport.height : document.documentElement.clientHeight), ap = dO, ar = er, aIP = 0 !== cu.id || ap < ar ?
			700 : 1200, aIP = Math.min(aIP / ((ap + ar) / 2), 1), aIP = 0 === bK.buffer.data[1].value ? 2 * aIP / 3 : Math.min(aIP + (bK.buffer.data[1].value - 1) * (1 - aIP) / 2, 1), ao.hG = (window.devicePixelRatio || 1) * aIP, __fx
			.hoveringTooltip.canvasPixelScale = ao.hG, aIK && !aIC ? (aIC = !0, dk.removeChild(document.body, a12)) : aIC && (aIC = !1, document.body.appendChild(a12)), ap = Math.floor(.5 + dO * ao.hG), ar = Math.floor(.5 + er * ao.hG), ap !== ao
			.ap || ar !== ao.ar ? (ao.ap = ap, ao.ar = ar, ao.min = a5x(ap, ar), ao.max = d2(ap, ar), ao.cx = fD.fE(ap + ar, 2), ao.aIG = ap / ar, a12.width = ap, a12.height = ar, a12.style.width = dO + "px", a12.style.height = er + "px", aIE =
				c0.fr + 1e3, 1) : void 0
	}
	this.ap = 0, this.ar = 0, this.min = 0, this.max = 0, this.cx = 0, this.aIG = 1, this.hG = 1, this.wJ = 0, this.f4 = function() {
		this.ap = aIH(document.documentElement.clientWidth) + 2, this.ar = aIH(document.documentElement.clientHeight) + 2
	}, this.e = function() {
		eF = 1, a12 = document.getElementById("canvasA"), 2 === cu.id && (a12.style.webkitUserSelect = "none"), (b5 = a12.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aII(0)
	}, this.bu = function() {
		50 <= ++eF && resize(0), -1 === aIE || c0.fr < aIE || (aIE = -1, 2e3 * ++aIF >= c0.fr + 8e3 ? console.log("error 3748") : cu.cv.setState(15))
	}, this.aHe = function(xl) {
		x5 = !0, resize(xl)
	}, this.a1k = function() {
		aID + 1e3 > c0.fr || (aID = c0.fr, resize(0))
	}
}

function aHK() {
	this.af = new aIR, this.a3C = new aI5, this.e = function() {
		this.af.e()
	}, this.bu = function() {
		0 !== this.af.hO && this.af.hO--
	}
}

function wu(h5, yv) {
	var h6 = document.createElement("div");
	this.h7 = h6, this.resize = function() {
		h6.style.padding = v.w.hK(f7.hI), h6.style.lineHeight = v.w.hK(v.w.ke(.035))
	}, h5.style.overflowX = "hidden", h5.style.overflowY = "auto", h6.innerHTML = yv, h5.appendChild(h6)
}

function aGv() {
	var ap, aD, aIS, canvas, fY, f0, pY, pg, ck, qt, aIT = 11 / 12;

	function aIU() {
		var co = Math.floor(pY * (ap - 2 * aIS)),
			aIW = 1 + Math.floor(.0625 * g5.ar),
			aIX = 1 + Math.floor(.3 * g5.ar),
			er = Math.floor(.55 * g5.ar);
		fY.clearRect(0, 0, ap, g5.ar), fY.fillStyle = b7.a1s, fY.fillRect(0, 0, aIS, g5.ar), fY.fillRect(aIS + co, 0, ap - aIS - co, g5.ar), fY.fillStyle = pY < 1 / 3 ? "rgba(" + Math.floor(3 * pY * 130) + ",130,0,0.85)" : pY < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (pY - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (pY - 2 / 3) * 130) + ",0.85)", fY.fillRect(aIS, 0, co, g5.ar), fY.fillStyle = b7.b9, fY.fillRect(0, 0, ap, 1), fY.fillRect(0, g5.ar - 1, ap, 1), fY
			.fillRect(0, 0, 1, g5.ar), fY.fillRect(aIS, 0, 1, g5.ar), fY.fillRect(aIS + co, 0, 1, g5.ar), fY.fillRect(ap - aIS, 0, 1, g5.ar), fY.fillRect(ap - 1, 0, 1, g5.ar), fY.fillRect(Math.floor(.25 * g5.ar) + aIX, Math.floor((g5.ar - aIW) / 2),
				g5.ar - 2 * aIX, aIW), fY.fillRect(Math.floor(ap - 1.25 * g5.ar) + aIX, Math.floor((g5.ar - aIW) / 2), g5.ar - 2 * aIX - aIX % 2, aIW), fY.fillRect(Math.floor(ap - 1.25 * g5.ar) + Math.floor((g5.ar - aIW) / 2), aIX, aIW, g5.ar - 2 *
				aIX - aIX % 2), pg = v.c2.xT(f.al, g5.gW()), fY.fillText(v.bB.bC(pg) + " (" + v.bB.fL(100 * pY, +(pY < .1)) + ")", Math.floor(.5 * ap), er)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		pY = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => g5.a1d(arg1);

	function aIc(fb) {
		return !(1 < fb && 1 === pY || (1 < fb && fb * pY - pY < 1 / 1024 ? fb = (pY + 1 / 1024) / pY : fb < 1 && pY - fb * pY < 1 / 1024 && (fb = (pY - 1 / 1024) / pY), pY = fD.ok(pY * fb, 1 / 1024, 1), aIU(), 0))
	}

	function aId(f9) {
		return pY !== (pY = fD.ok((f9 - aD - aIS) / (ap - 2 * aIS), 1 / 1024, 1)) && (aIU(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aIU(), c0.d1 = !0
	}, this.aE = 0, this.g6 = !1, this.e = function() {
		f0 = !f.gI && !f.g1, qt = !1, pY = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bK.buffer.data[182].value + 1) / 1024, pg = 0, this.g6 = !1, this.resize()
	}, this.resize = function() {
		cu.cv.cw() && ao.ap < .8 * ao.ar ? (this.ar = Math.floor(.066 * ao.cx), ap = ao.ap - 4 * f7.gap - this.ar) : (ap = Math.floor((cu.cv.cw() ? .65 : .389) * ao.cx), ap += 12 - ap % 12, this.ar = Math.floor(ap / 12)), aIS = Math.floor(3 *
			this.ar / 2), ck = v.w.bA(1, Math.floor(.5 * this.ar)), (canvas = document.createElement("canvas")).width = ap, __fx.mobileKeybinds.setSize(ap, this.ar, b5), canvas.height = this.ar, (fY = canvas.getContext("2d", {
			alpha: !0
		})).font = ck, v.w.textBaseline(fY, 1), v.w.textAlign(fY, 1), this.sq(), aIU()
	}, this.sq = function() {
		aD = cu.cv.cw() && ao.ap < .8 * ao.ar ? this.ar + 3 * f7.gap : Math.floor((ao.ap - ap) / 2), this.aE = ao.ar - this.ar - rc.rd() * f7.gap
	}, this.kD = function() {
		qt && (qt = !1, aIU())
	}, this.f0 = function() {
		return !(!f0 || fF.g2 && aD < Math.floor(f7.gap + 5.5 * this.ar))
	}, this.rZ = function(a9E) {
		return !!this.f0() && aD + ap > ao.ap - a9E - f7.gap
	}, this.aIY = function() {
		f0 = !f.g1
	}, this.rB = function() {
		f0 = !1
	}, this.gW = function() {
		return fD.ok(Math.floor(1024 * pY + .5) - 1, 0, 1023)
	}, this.a1Y = function(f9, fA) {
		return this.f0() && aD < f9 && f9 < aD + ap && fA > this.aE
	}, this.dD = function(f9, fA) {
		if (!this.f0()) return !1;
		if (!(__fx.settings.keybindButtons && fA > this.aE - Math.floor(f7.gap / 4) - this.ar && fA < this.aE - Math.floor(f7.gap / 4) && __fx.mobileKeybinds.click(f9 - aD))) {
			if (!g5.a1Y(f9, fA)) return !1;
			jx.a1S = !1, ! function(a73, f9, fA) {
				if (function(f9, fA) {
						return aD < f9 && f9 < aD + aIS && fA > g5.aE
					}(f9, fA)) return aIc(aIT);
				if (function(f9, fA) {
						return aD + ap - aIS < f9 && f9 < aD + ap && fA > g5.aE
					}(f9, fA)) return aIc(1 / aIT);
				return a73.g6 = !0, aId(f9)
			}(this, f9, fA) || (c0.d1 = !0)
		}
		return !0
	}, this.a1d = function(pA) {
		0 !== f.j6 && this.f0() && aIc(pA) && (c0.d1 = !0)
	}, this.dC = function(deltaY) {
		var pA;
		return !(0 === deltaY || !this.f0()) && aIc(pA = 0 < deltaY ? (pA = 400 / (400 + deltaY)) < aIT ? aIT : pA : 1 / aIT < (pA = (400 - deltaY) / 400) ? 1 / aIT : pA)
	}, this.dB = function(f9) {
		return !!this.g6 && aId(f9)
	}, this.a1U = function() {
		this.g6 = !1
	}, this.bu = function() {
		this.f0() && pg !== v.c2.xT(f.al, this.gW()) && (qt = !0)
	}, this.aR = function() {
		this.f0() && (b5.drawImage(canvas, aD, this.aE), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(b5, aD, this.aE)
	}
}

function zv() {
	var aIf, aIg;
	this.a5h = 3, this.aIe = null, this.a1J = 0, this.zH = 0;

	function aIo() {
		return 0 === i4.a5c ? jV.a5e ? 1 : 0 : i4.a5c - 1
	}

	function aIs(s1, iA, aIr) {
		aIg[s1].aIi = !0, aIk(s1), aIf[s1] = new aIv, aIf[s1].e(s1, iA, aIr)
	}

	function aIt(q) {
		return aIg[q].aIi && aIf[q].aIt()
	}

	function aIk(s1) {
		aIg[s1].fr = c0.fr, aIg[s1].aFT = !1
	}
	this.e = function() {
		this.aIe = new Array(this.a5h), this.aIe[0] = "territorial.io", this.aIe[1] = "1.territorial.io", this.aIe[2] = "4.territorial.io", aIf = new Array(this.a5h), aIg = new Array(this.a5h);
		for (var q = this.a5h - 1; 0 <= q; q--) aIg[q] = {
			aIi: !1,
			fr: 0,
			aFT: !1
		};
		this.wz(0, 0, 0)
	}, this.aIj = function(q) {
		return aIf[q]
	}, this.bu = function() {
		for (var q = this.a5h - 1; 0 <= q; q--) this.kU(q) && c0.fr > aIg[q].fr + 15e3 && (bZ.iL.aFS(q, aIg[q].aFT), aIk(q));
		!this.kU(0) && c0.fr > aIg[0].fr + 8e3 && (aIg[0].fr = c0.fr, this.wz(0, 0, 0))
	}, this.wv = function(id) {
		return this.wz(0, id, 0) && this.aIl(0)
	}, this.aIm = function(aIn) {
		return aIn ? i4.a5d : aIo()
	}, this.aIp = function() {
		return aIo() ? "game.territorial.io" : "territorial.io"
	}, this.iE = function(aIq) {
		aIq = this.aIp() + aIq;
		return "<a href='https://" + aIq + "' target='_blank'>" + aIq + "</a>"
	}, this.wz = function(s1, iA, aIn) {
		aIn = this.aIm(aIn);
		if (aIg[s1].aIi) {
			if (aIf[s1].aIt()) return aIf[s1].aIu(iA), aIf[s1].kU();
			aIf[s1].eD()
		}
		return aIs(s1, iA, aIn), !1
	}, this.aIw = function(s1, iA) {
		console.log("Connection to Server " + s1), bZ.be.aIx(s1)
	}, this.aIl = function(q) {
		return this.kU(q) && aIf[q].aIl()
	}, this.aIy = function(q) {
		aIf[q].aIy()
	}, this.kU = function(q) {
		return aIg[q].aIi && aIf[q].kU()
	}, this.send = function(s1, ba) {
		0 !== s1 && aIk(s1), aIf[s1].send(ba)
	}, __fx.customLobby.setSendFunction(this.send), this.a1I = function(s1) {
		8 === dV.dW() && (aIg[s1].aFT = !0, bZ.zw.yf = !0)
	}, this.close = function(s1, aIz) {
		aIt(s1) && aIf[s1].close(aIz)
	}, this.a5A = function(s1, aIz) {
		nE.a5l(aIz), aIt(s1) && aIf[s1].close(aIz)
	}, this.a5n = function(aIz) {
		for (var q = this.a5h - 1; 0 <= q; q--) this.close(q, aIz)
	}, this.aJ0 = function(s1, aIz) {
		for (var q = this.a5h - 1; 0 <= q; q--) q !== s1 && this.close(q, aIz)
	}, this.kK = function() {
		0 === this.a1J && (f.j5 || f.g1) || this.close(this.a1J, 3246)
	}, this.aJ1 = function(s1, e8) {
		aIf[s1].eD(), nE.aFG(s1, e8.code)
	}
}

function aJ2() {
	this.aJ3 = function() {
		for (var n = cH.cI, cQ = cH.cK, a7b = [], q = 0; q < n; q++) {
			var c9 = cQ[q];
			v.c2.aJ4(c9) && a7b.push(c9)
		}
		return a7b
	}, this.aJ5 = function() {
		if (0 === l.m[f.jJ]) return this.aJ6();
		cN.hb(f.jJ);
		for (var a7b = [], n = a9.eR[0], eb = a9.eb, q = 0; q < n; q++) {
			var c9 = eb[q];
			v.c2.aJ4(c9) && a7b.push(c9)
		}
		return a7b
	}, this.aJ6 = function() {
		var c9 = cP[0];
		return v.c2.aJ4(c9) ? [c9] : []
	}, this.aJ7 = function(a7b) {
		for (var n = a7b.length, d8 = 0, fh = cD.fh, q = 0; q < n; q++) d8 += fh[a7b[q]];
		return d8
	}
}

function a3B() {
	this.wX = function(player) {
		for (var vd = ae.af.vd, bU = player << 3, q = bU + ae.af.rq[player] - 1; bU <= q; q--) this.tt(vd[q])
	}, this.tt = function(aJ8) {
		var af = ae.af,
			aJ9 = af.am - 1,
			aJA = af.ag[aJ8],
			aJB = af.aJC[aJ8],
			aJD = af.ad[aJ8];
		af.am = aJ9, af.ag[aJ8] = af.ag[aJ9], af.ad[aJ8] = af.ad[aJ9], af.tm[aJ8] = af.tm[aJ9], af.ah[aJ8] = af.ah[aJ9], af.aJC[aJ8] = af.aJC[aJ9], af.vc[aJ8] = af.vc[aJ9], af.tl[aJ8] = af.tl[aJ9], af.ai[aJ8] = af.ai[aJ9], af.vq[aJ8] = af.vq[
			aJ9], af.u3[aJ8] = af.u3[aJ9], af.vd[af.ag[aJ8]] = aJ8,
			function(hs) {
				var player = hs >> 3,
					af = ae.af,
					n = af.rq[player] - 1,
					aJG = (player << 3) + n;
				af.rq[player] = n, aJG !== hs && (af.vd[hs] = af.vd[aJG], af.ag[af.vd[hs]] = hs)
			}(aJA), ae.xa.xa[cX.xZ(af.ad[aJ8])][af.aJC[aJ8]] = aJ8, aJ9 = cX.xZ(aJD), aJA = aJB, aJ9 = ae.xa.xa[aJ9], af = aJ9.pop(), aJA !== aJ9.length && (aJ9[aJA] = af, ae.af.aJC[af] = aJA)
	}
}

function a9C(aJI, aJJ, aJK) {
	this.aD = 0, this.aE = 0, this.ap = 0, this.ar = 0, this.resize = function() {
		this.ar = Math.min(v.w.hB(aJK || .5) * aJI[1] * ao.cx, ao.ar - 2 * f7.gap), this.ap = Math.min(this.ar * (aJI[0] / aJI[1]), ao.ap - 2 * f7.gap), this.ar = aJI[1] * this.ap / aJI[0], this.aD = f7.gap + aJJ[0] * (ao.ap - this.ap - 2 * f7
			.gap), this.aE = f7.gap + aJJ[1] * (ao.ar - this.ar - 2 * f7.gap)
	}, this.aJL = function() {
		return this.aD + .5 * this.ap
	}
}

function aHX() {
	function aJR(aD, n, aE, rP, cd, aJa) {
		if (!(aE < 1 || cd < aE))
			for (var q = 0; q <= n; q++) {
				var a3 = cX.xU(aD, aE);
				if (rP(a3)) return a3 >> 2;
				aD += aJa
			}
		return -1
	}

	function aJV(aE, n, aD, rP, aJP, aJa) {
		if (!(aD < 1 || aJP < aD)) {
			n = Math.max(n, 0);
			for (var q = 0; q <= n; q++) {
				var a3 = cX.xU(aD, aE);
				if (rP(a3)) return a3 >> 2;
				aE += aJa
			}
		}
		return -1
	}

	function aJZ(vS, vK, a0O) {
		return -1 !== vK && (-1 === vS || cX.vV(vK, a0O) < cX.vV(vS, a0O)) ? vK : vS
	}
	this.gK = function(a0O) {
		return this.aJM(a0O, function(a3) {
			return a6.u0(a3)
		})
	}, this.gX = function(a0O) {
		return this.aJM(a0O, function(a3) {
			return a6.aJN(a3, f.al)
		})
	}, this.aJM = function(a0O, rP) {
		return function(a0O, w4, rP) {
			for (var g8 = cX.cY(a0O), gA = cX.cZ(a0O), aJP = au.av - 2, cd = au.ef - 2, aJQ = -1, f6 = 0; f6 < w4; f6++) {
				var cc = Math.max(g8 - f6, 1),
					zs = Math.max(gA - f6, 1),
					zt = Math.min(g8 + f6, aJP),
					zj = Math.min(gA + f6, cd),
					vS = aJR(g8, zt - g8, gA - f6, rP, cd, 1),
					vK = aJR(g8 - 1, g8 - cc - 1, gA - f6, rP, cd, -1),
					zt = aJR(g8, zt - g8, gA + f6, rP, cd, 1),
					cc = aJR(g8 - 1, g8 - cc - 1, gA + f6, rP, cd, -1),
					aJU = aJV(gA, zj - gA - 1, g8 - f6, rP, aJP, 1),
					aJW = aJV(gA - 1, gA - zs - 2, g8 - f6, rP, aJP, -1),
					zj = aJV(gA, zj - gA - 1, g8 + f6, rP, aJP, 1),
					zs = aJV(gA - 1, gA - zs - 2, g8 + f6, rP, aJP, -1);
				if (aJQ = aJZ(aJQ, vS, a0O), aJQ = aJZ(aJQ, vK, a0O), aJQ = aJZ(aJQ, zt, a0O), aJQ = aJZ(aJQ, cc, a0O), aJQ = aJZ(aJQ, aJU, a0O), aJQ = aJZ(aJQ, aJW, a0O), aJQ = aJZ(aJQ, zj, a0O), 0 <= (aJQ = aJZ(aJQ, zs, a0O)) && f6 * f6 >=
					cX.vV(aJQ, a0O)) return aJQ
			}
			return -1
		}(a0O, cX.xM(), rP)
	}
}

function aGm() {
	var eF = v.color;
	this.l8 = eF.kt(0, 0, 0), this.wI = eF.kZ(0, 0, 0, .7), this.a5r = eF.kZ(0, 0, 0, .5), this.a1s = eF.kZ(0, 0, 0, .85), this.cF = eF.kZ(0, 0, 0, .75), this.aG5 = eF.kZ(0, 0, 0, .6), this.nl = eF.kZ(0, 0, 0, .35), this.b9 = eF.kt(255, 255, 255),
		this.aAa = eF.kZ(255, 255, 255, .3), this.dI = eF.kZ(255, 255, 255, .6), this.dF = eF.kZ(255, 255, 255, .4), this.dU = eF.kZ(255, 255, 255, .25), this.aJb = eF.kZ(255, 255, 255, .85), this.r7 = eF.kZ(255, 255, 255, .75), this.aJc = eF.kZ(255,
			255, 255, .15), this.aJd = eF.kZ(255, 255, 255, .11), this.a6f = eF.kt(128, 128, 128), this.aJe = eF.kZ(64, 64, 64, .75), this.aJf = eF.kZ(88, 88, 88, .83), this.aJg = eF.kZ(60, 60, 60, .85), this.aJh = eF.kZ(80, 60, 60, .85), this.kz =
		eF.kt(170, 170, 170), this.l0 = eF.kt(200, 235, 245), this.fj = eF.kt(30, 255, 30), this.fi = eF.kt(0, 200, 0), this.rX = eF.kt(128, 255, 128), this.aJi = eF.kZ(10, 65, 10, .75), this.r5 = eF.kZ(0, 255, 0, .6), this.aJj = eF.kZ(0, 255, 0,
		.5), this.fX = eF.kZ(0, 200, 0, .5), this.xB = eF.kZ(0, 100, 0, .75), this.aJk = eF.kZ(0, 60, 0, .8), this.a9S = eF.kZ(0, 255, 0, .3), this.aG3 = eF.kZ(0, 180, 0, .6), this.aJl = eF.kZ(0, 120, 0, .85), this.aJm = eF.kt(0, 120, 0), this.aJn =
		eF.kZ(0, 70, 0, .85), this.aJo = eF.kt(190, 230, 190), this.l3 = eF.kt(0, 255, 0), this.aJp = eF.kt(255, 120, 120), this.rY = eF.kt(255, 160, 160), this.b8 = eF.kt(255, 70, 70), this.fk = eF.kt(230, 0, 0), this.dH = eF.kZ(220, 0, 0, .6), this
		.fq = eF.kZ(255, 100, 100, .8), this.aJq = eF.kZ(100, 0, 0, .85), this.aJr = eF.kZ(60, 0, 0, .85), this.aG4 = eF.kZ(200, 0, 0, .6), this.aBD = eF.kZ(120, 0, 0, .85), this.aJs = eF.kt(255, 70, 10), this.lQ = eF.kt(230, 190, 190), this.l1 = eF
		.kt(255, 0, 0), this.l2 = eF.kt(255, 0, 255), this.aJt = eF.kZ(60, 0, 60, .85), this.aJu = eF.kZ(0, 60, 60, .85), this.fa = eF.kZ(10, 60, 60, .9), this.aJv = eF.kZ(0, 96, 96, .75), this.l4 = eF.kt(0, 255, 255), this.aJw = eF.kt(160, 160,
		255), this.aAX = eF.kZ(0, 40, 90, .75), this.aG7 = eF.kZ(0, 0, 255, .6), this.aJx = eF.kt(200, 200, 255), this.aJy = eF.kZ(50, 50, 255, .83), this.aAW = eF.kZ(20, 90, 150, .75), this.aJz = eF.kZ(10, 10, 120, .75), this.aK0 = eF.kt(255, 120,
			100), this.aK1 = eF.kZ(255, 255, 0, .5), this.aAZ = eF.kZ(255, 255, 150, .2), this.l6 = eF.kt(255, 255, 0), this.aK2 = eF.kt(255, 255, 200), this.aG6 = eF.kZ(200, 200, 0, .6), this.aK3 = eF.kZ(140, 120, 0, .75), this.aK4 = eF.kZ(180, 160,
			40, .75), this.aK5 = eF.kZ(70, 50, 20, .85), this.aK6 = eF.kZ(30, 30, 0, .85), this.aK7 = eF.kZ(60, 60, 0, .85), this.sw = eF.kt(255, 255, 100), this.l7 = eF.kt(255, 255, 140), this.aK8 = eF.kZ(255, 140, 0, .75), this.aK9 = eF.kZ(70, 40,
			0, .85), this.l5 = eF.kt(255, 150, 0), this.wl = eF.kZ(255, 200, 80, .85), this.r2 = eF.kZ(0, 0, 0, 0), this.aKA = eF.kZ(255, 255, 255, 0), this.aKB = eF.kZ(254, 254, 254, 0)
}

function a65() {
	this.g3 = function(zL) {
		return 0 === zL ? 1 === f.j6 && f.gI : 1 === zL ? 1 === f.j6 && !f.gI : 2 === f.j6
	}, this.g4 = function(player) {
		return 0 !== cD.ft[player] && 2 !== cD.sR[player]
	}, this.wb = function(player) {
		return player === f.al && 2 !== cD.sR[player]
	}, this.wD = function(player, uA) {
		return player !== uA && (0 === l.cR[player] || l.cR[player] !== l.cR[uA])
	}, this.a85 = function() {
		return cH.cI < 2 ? 0 : f.j ? 1 < cN.hf() : cD.fh[cP[1]]
	}, this.rM = function() {
		var cI = cH.cI;
		if (0 !== cI) {
			if (!f.j) return !this.rO(cP[0]);
			for (var cR = l.cR, hY = cN.cO(), cK = cH.cK, q = cI - 1; 0 <= q; q--) {
				var c9 = cK[q];
				if (cR[c9] === hY && !this.rO(c9)) return 1
			}
		}
		return 0
	}, this.pZ = function(player) {
		return player === f.al
	}, this.tw = function(uA, pA) {
		return cD.mY[f.al] < pA * cD.mY[uA]
	}, this.rO = function(player) {
		return player >= f.iy || 2 === cD.sR[player]
	}, this.c7 = function(player) {
		return 0 !== cD.ft[player]
	}, this.aJ4 = function(player) {
		return player < f.iy
	}, this.aEL = function(aKC, aKD) {
		return aKC !== aKD
	}, this.uB = function(player, ff) {
		var min;
		return ff = this.aKE(player, ff), cD.mY[player] += ff, cD.sc[player] && (min = Math.min(cD.sc[player], cD.mY[player]), cD.sc[player] -= min, cD.mY[player] -= min), ff
	}, this.aKE = function(player, ff) {
		var fS = cD.mY[player];
		return ff = Math.min(ff, cD.fh[player] * f.j4 - fS), ff = Math.min(ff, f.it - fS), Math.max(ff, 0)
	}, this.a3g = function(player, pY, aKF, aKG) {
		var fS = cD.mY[player],
			pY = fD.fE(fS * (pY + 1), 1024),
			aKF = fD.fE(aKF * fS, 1024),
			pY = Math.min(pY, fS - aKF);
		return pY = k5.aKI(player, pY), a9.eT[0] = pY, a9.eT[1] = aKF, aKG <= pY
	}, this.a4X = function(player, rs, pb) {
		var player = cD.mY[player],
			aKH = fD.fE(64 * player, 1024);
		return rs = Math.min(rs, player - aKH), rs = this.aKE(pb, rs), a9.eT[0] = rs, a9.eT[1] = aKH, 1 <= rs
	}, this.aKJ = function(player, rs, pb) {
		var player = cD.mY[player],
			aKH = fD.fE(64 * player, 1024);
		return rs = Math.min(rs, player - aKH), this.aKE(pb, rs)
	}, this.aKK = function(rs, pb) {
		return rs = this.aKE(pb, rs), a9.eT[0] = rs, a9.eT[1] = 0, 1 <= rs
	}, this.xT = function(player, aKL) {
		return fD.fE(cD.mY[player] * (aKL + 1), 1024)
	}, this.aKM = function(player, aKF) {
		aKF = fD.fE(aKF * cD.mY[player], 1024);
		a9.eT[1] = aKF, cD.mY[player] -= aKF
	}, this.mW = function(player, aKN) {
		var ej, el, ku = cD.mY[player];
		return aKN <= ku ? cD.mY[player] -= aKN : (cD.mY[player] = 0, el = cD.sc[player] + (ej = 5 * ((ku = aKN - ku) >> 2)), fI.mT(player, ej - ku, 12), el <= f.iv ? cD.sc[player] = el : (cD.sc[player] = f.iv, fI.mT(player, el - f.iv, 18))), aKN
	}, this.aEc = function(player, pY) {
		var mY = cD.mY,
			fS = mY[player],
			pY = fD.fE(fS * (pY + 1), 1024),
			aKH = Math.max(fD.fE(fS, 10), 1e3);
		return (pY = Math.min(pY, fS - aKH)) < 0 ? (mY[player] = 0, aKH = Math.min(1e3, fS + f.iv - cD.sc[player]), a9.eT[1] = aKH, cD.sc[player] += aKH - fS, 0) : (a9.eT[1] = aKH, pY = k5.aKI(player, pY), mY[player] -= aKH + pY, k5.aKO(player,
			pY), pY)
	}, this.a3s = function(player) {
		var aW = a9.eT[0];
		cD.mY[player] -= aW + a9.eT[1], k5.aKO(player, aW)
	}, this.aEM = function(player, uA) {
		return (uA = Math.min(uA, f.g)) < f.g && 0 === cD.ft[uA] && (uA = f.g), (a9.eY[0] = uA) === f.g || gY.gf(player, uA)
	}, this.a4W = function(player, pb) {
		return 0 !== cD.ft[pb] && !gY.gf(player, pb)
	}, this.re = function(player, aKP) {
		for (var c9, n = cH.cI, lW = 0, aKQ = cP, q = 0; q < n; q++)
			if (c9 = aKQ[q], !this.rO(c9)) {
				if (player === c9) return !0;
				if (++lW > aKP) return !1
			} return !1
	}, this.c3 = function(c9) {
		var rN = f.j ? cN.hV() : cD.fh[cP[0]];
		return rN >= fD.fE(c9 * f.j7, 100)
	}, this.iN = function(ff, min, max) {
		return Math.floor(fD.ok(isNaN(ff) ? 0 : Number(ff), min, max))
	}
}

function a66() {
	this.fZ = function(bJ, font, maxWidth) {
		if (font && (b5.font = font), b5.measureText(bJ).width <= maxWidth) return bJ;
		for (var q = bJ.length - 1; 1 <= q; q--)
			if (bJ = bJ.substring(0, q), b5.measureText(bJ + "...").width <= maxWidth) return bJ + "...";
		return "..."
	}
}

function aGq() {
	var ar, canvas, ck, aKS, aKT, aKU = -1;

	function aKV() {
		var aAg, fY = canvas.getContext("2d", {
			alpha: !0
		});
		fY.clearRect(0, 0, ar, ar), fY.fillStyle = b7.a1s, fY.fillRect(0, 0, ar, ar), 9 === aKS && (fY.fillStyle = b7.aAa, fY.fillRect(0, 0, ar, ar)), fY.fillStyle = b7.b9, fY.fillRect(0, 0, ar, 1), fY.fillRect(0, 0, 1, ar), fY.fillRect(0, ar - 1,
				ar, 1), fY.fillRect(ar - 1, 0, 1, ar), aAg = .9 * ar / r1.get(0).width, fY.imageSmoothingEnabled = !0, fY.setTransform(aAg, 0, 0, aAg, Math.floor((ar - aAg * r1.get(0).width) / 2), Math.floor((ar - aAg * r1.get(0).height) / 2)), fY
			.drawImage(r1.get(0), 0, 0), fY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aKW(f9, fA) {
		if (!fF.g2) return f9 <= ar + f7.gap && fA >= g5.aE ? 9 : -1;
		if (f9 <= 4 * ar + f7.gap) {
			if (fA >= g5.aE) return 0;
			if (fA >= g5.aE - ar - aKT * f7.gap) return 2
		} else if (f9 <= 7 * ar + f7.gap && fA >= g5.aE - ar - aKT * f7.gap) return 1;
		return -1
	}
	this.g2 = !1, this.e = function() {
		aKS = -1, this.g2 = !1, aKT = cu.cv.cw() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ar = g5.ar, (canvas = document.createElement("canvas")).width = ar, canvas.height = ar, ck = v.w.bA(1, (cu.cv.cw() ? .5 : .45) * ar), aKV()
	}, this.aCX = function() {
		return !(1 !== f.j6 || f.gI || (f.g1 ? !fG.kO : this.g2 && f.j5))
	}, this.fH = function() {
		this.g2 = !this.g2, this.g2 ? (fG.a1h(!1), f.g1 && fG.kO && fG.a1i(!0), this.a9I(), 9 === aKS && (aKS = 0)) : (aKS = -1, aKV(), !f.j5 || 1 !== f.j6 || f.gI || f.g1 || cu.cv.setState(1)), c0.d1 = !0
	}, this.a9I = function() {
		(f.j5 || f.g1) && 1 === f.j6 && (jw.kD(!0), f.gI || setTimeout(function() {
			jj.xI()
		}, 0), cu.cv.setState(0))
	}, this.dD = function(f9, fA) {
		return 0 <= (aKU = aKW(f9, fA)) || !fF.g2 || f.j5 || f.g1 || jt.f0 || fF.fH(), aKU
	}, this.dB = function(f9, fA) {
		f9 = aKW(f9, fA);
		f9 !== aKS && (aKS = f9, this.g2 || aKV(), c0.d1 = !0)
	}, this.a13 = function(f9, fA) {
		f9 = aKW(f9, fA);
		return -1 !== f9 && aKU === f9 && (this.g2 ? f.hT ? (0 <= f9 && fG.a1h(!1), !f.g1) : (0 === f9 ? f.kE() : 1 === f9 ? this.fH() : 2 === f9 && dk.e3(1, 0), !0) : 9 === f9 && (this.fH(), !0))
	}, this.aR = function() {
		var ap;
		this.g2 ? (ap = Math.floor(5.5 * ar), b5.setTransform(1, 0, 0, 1, f7.gap, g5.aE), b5.fillStyle = b7.a1s, b5.fillRect(0, 0, ap, ar), 0 === aKS ? (b5.fillStyle = b7.aAa, b5.fillRect(0, 0, 4 * ar, ar)) : 1 === aKS && (b5.fillStyle = b7.aAa,
				b5.fillRect(4 * ar, 0, Math.floor(1.5 * ar), ar)), b5.fillStyle = b7.b9, b5.fillRect(0, 0, ap, 1), b5.fillRect(0, 0, 1, ar), b5.fillRect(4 * ar, 0, 1, ar), b5.fillRect(0, ar - 1, ap, 1), b5.fillRect(ap - 1, 0, 1, ar), b5
			.font = ck, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.fillText(L(196), 2 * ar, .54 * ar), ap = .4 * ar, fF.fW(f7.gap + 4 * ar + (1.5 * ar - ap) / 2, g5.aE + .3 * ar, ap), ap = 1, b5.setTransform(1, 0, 0, 1, f7.gap, g5.aE -
				ap * aKT * f7.gap - ap * ar), b5.fillStyle = b7.a1s, b5.fillRect(0, 0, 4 * ar, ar), aKS === ap + 1 && (b5.fillStyle = b7.aAa, b5.fillRect(0, 0, 4 * ar, ar)), b5.fillStyle = b7.b9, b5.fillRect(0, 0, 4 * ar, 1), b5.fillRect(0,
				0, 1, ar), b5.fillRect(4 * ar, 0, 1, ar), b5.fillRect(0, ar - 1, 4 * ar, 1), b5.fillText(L(0 === ap ? 196 : 197), 2 * ar, .54 * ar), b5.setTransform(1, 0, 0, 1, 0, 0)) : b5.drawImage(canvas, f7.gap, g5.aE)
	}, this.aEZ = function(player) {
		return 0 !== cD.ft[player] && 2 !== f.j6 && !v.c2.rO(player)
	}, this.fW = function(aD, aE, n) {
		b5.setTransform(1, 0, 0, 1, aD, aE), b5.lineWidth = f7.a7I, b5.strokeStyle = b7.b9, b5.beginPath(), b5.moveTo(0, 0), b5.lineTo(n, n), b5.moveTo(0, n), b5.lineTo(n, 0), b5.stroke()
	}
}

function aKb() {
	this.gS = function(a3) {
		var aKc;
		return au.m2(au.m3) && f.data.passableMountains && (aKc = a6.vQ(a3), this.aKd(f.al, aKc) || this.aKe(f.al, aKc)) && 0 !== (aKc = function(vP) {
			for (var aD = cX.cY(vP), aE = cX.cZ(vP), max = Math.max(au.av, au.ef) - 2, aKh = max * max, tx = !1, aKi = 0, aH = 0; aH < max; aH++) {
				var aKj, a2 = function(aD, aE, aH) {
					for (var q = 0; q <= aH; q++)
						for (var ca = -1; ca < 2; ca += 2)
							for (var ku = -1; ku < 2; ku += 2)
								for (var eF = 0; eF < 2; eF++) {
									var a3 = function(aD, aE) {
										if (cX.xW(aD, aE)) {
											aD = cX.gC(aD, aE), aE = cX.gO(aD);
											if (a6.u0(aE) && a6.aKl(aE)) return aD
										}
										return 0
									}(aD + eF * ca * q + (1 - eF) * ku * aH, aE + eF * ku * aH + (1 - eF) * ca * q);
									if (a3) return a3
								}
					return 0
				}(aD, aE, aH);
				a2 && (aKj = cX.xO(aD, aE, a2)) < aKh && (aKi = a2, aKh = aKj, tx || (tx = !0, max = Math.floor(Math.sqrt(aKj)) + 1))
			}
			return aKi
		}(cX.vW(a3))) && (a3 = cX.gO(aKc), a6.cT(a3) || (a3 = a6.gU(a3)) !== f.al && gY.gf(a3, f.al)) ? aKc : 0
	}, this.aEb = function(player, a2) {
		a2 = cX.gO(a2);
		if (a6.u0(a2)) {
			if (a6.cT(a2)) a9.eY[0] = f.g;
			else if (a6.gU(a2) !== a9.eY[0]) return !1;
			for (var cR = function(a3) {
					var gy = a6.gy,
						cR = [];
					loop: for (var f6 = 3; 0 <= f6; f6--) {
						var aV = a3 + gy[f6];
						if (a6.gP(aV)) {
							for (var id = a6.vQ(aV), q = 0; q < cR.length; q++)
								if (id === cR[q]) continue loop;
							a9.eW[cR.length] = aV, cR.push(id)
						}
					}
					return cR
				}(a2), n = cR.length, q = 0; q < n; q++)
				if (this.aKd(player, cR[q]) || this.aKe(player, cR[q])) return a9.eW[0] = a9.eW[q], !0
		}
		return !1
	}, this.aKd = function(player, aKc) {
		for (var m4 = cD.m4[player], n = m4.length, aJa = Math.max(fD.fE(n, 12), 1), gy = a6.gy, q = 0; q < n; q += aJa)
			for (var ax = m4[q], f6 = 3; 0 <= f6; f6--) {
				var aV = ax + gy[f6];
				if (a6.gP(aV) && aKc === a6.vQ(aV)) return !0
			}
		return !1
	}, this.aKe = function(player, aKc) {
		for (var m4 = cD.m4[player], n = m4.length, gy = a6.gy, q = 0; q < n; q++)
			for (var ax = m4[q], f6 = 3; 0 <= f6; f6--) {
				var aV = ax + gy[f6];
				if (a6.gP(aV) && aKc === a6.vQ(aV)) return !0
			}
		return !1
	}
}

function a06() {
	this.aKm = function() {
		for (var id = eM.eN(20), colors = new Array(11), q = 0; q < 11; q++) colors[q] = new Uint8Array([eM.eN(8), eM.eN(8), eM.eN(8)]);
		var ht = bh.sD.eJ(8);
		jP.aHw.uG({
			id: id,
			colors: colors,
			ht: ht
		})
	}, this.aKn = function(s1) {
		var aKo = eM.eN(3),
			f6 = eM.eN(5),
			f6 = wY.sI.a32(f6, eM.eN(30), eM.eN(30), eM.eN(30));
		bZ.be.aKp(s1, f6, aKo, 0)
	}, this.aKq = function(s1) {
		this.aKn(s1), bK.iF.bH(183, bo.bi.qG(bo.bi.qH(15))), 0 === s1 && 0 === bK.buffer.data[105].value.length ? bZ.be.wy(0) : bZ.q0.s0(s1), 4 === bZ.af.aIj(s1).aKr() ? 6 === dV.dW() && bZ.zy.a5H(s1) : 5 !== bZ.af.aIj(s1).aKr() || 8 !== dV
		.dW() && 10 !== dV.dW() || bZ.iL.aFU()
	}, this.aKs = function(s1) {
		var id = eM.eN(6);
		1 === id ? (bK.iF.bH(160, eM.eN(30)), bZ.af.aIy(s1), d9.cr || bZ.be.wy(1), sB.x1(), 8 === dk.iI && dk.i9().x3()) : 21 === id ? 8 === dk.iI && dk.i9().x4(17) : 22 === id && (bK.iF.bH(106, bK.buffer.data[110].value), bK.iF.bH(110, ""),
			8 === dk.iI) && dk.i9().x4(15)
	}, this.aKt = function() {
		var n = eM.eN(16),
			aKu = eM.eN(16);
		if (eM.q6(55 + 10 * n + 16 * aKu)) {
			for (var a8 = [], q = 0; q < n; q++) a8.push(bh.bp.iH(eM.eN(10)));
			sB.a2c(a8)
		} else bZ.af.a5A(0, 3270)
	}, this.aKv = function(s1) {
		for (var aKo = eM.eN(3), f6 = eM.eN(5), aKo = {
				aKo: aKo,
				aHs: wY.sI.a32(f6, eM.eN(30), eM.eN(30), eM.eN(30))
			}, f6 = eM.q5(32), aKx = [], q = 0; q < 17; q++) aKx.push(new Uint8Array(eM.eN(16)));
		for (q = 0; q < 17; q++)
			for (var a8 = aKx[q], n = a8.length, h2 = 0; h2 < n; h2++) a8[h2] = eM.q5(8);
		aFR.show(aKx, f6, s1, aKo)
	}
}

function aIR() {
	this.aI9 = 28, this.hO = 0, this.aI8 = null;
	var aKy = this.aIA = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aL3(u, aL4) {
		var aD, aE, a2, aF, k = v.w.x(u, u),
			y = v.w.getContext(k, !0),
			z = v.w.getImageData(y, u, u),
			a0 = z.data,
			aL = (u >> 1) - .5,
			aL5 = .5 + aL;
		for (aL5 *= aL5, aE = 0; aE < u; aE++)
			for (aD = 0; aD < u; aD++) aF = (aF = aD - aL) * aF + (aF = aE - aL) * aF, a0[a2 = 4 * (aE * u + aD)] = aL4[0], a0[1 + a2] = aL4[1], a0[2 + a2] = aL4[2], a0[3 + a2] = (aL5 - aF) * aL4[3] / aL5;
		return y.putImageData(z, 0, 0), k
	}

	function aGb(q, y, k, u) {
		var highlight, aD, aE;
		0 !== cD.ft[q] && 0 !== cD.fh[q] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[q]) && (u *= 2), aD = cD.sS[q] + cD.sU[q] + 1 - u - 2 >> 1, aE = cD.sT[q] + cD.sV[q] + 1 - u - 2 >> 1, highlight ? y.drawImage(k[
			f.j ? 9 === f.jA && 5 === jn.aW[q] ? 3 : l.cR[q] : q < f.iy ? 1 : 0], aD, aE, u, u) : y.drawImage(k[f.j ? 9 === f.jA && 5 === jn.aW[q] ? 3 : l.cR[q] : q < f.iy ? 1 : 0], aD, aE))
	}
	this.e = function() {
		var a73;
		this.hO = 700,
			function(a73) {
				var u = a73.aI9;
				if (a73.aIA = [], aKy = [], f.j) {
					for (var q = 0; q <= f.hQ; q++) a73.aIA.push(aL3(u, l.uk[l.m[q]])), aKy.push(aL3(u >> 1, l.uk[l.m[q]]));
					9 === f.jA && aKy.push(aL3(u, l.uk[1]))
				} else a73.aIA.push(aL3(u, l.uk[7])), a73.aIA.push(aL3(u, l.uk[4])), aKy.push(aL3(u >> 1, l.uk[7]))
			}(this),
			function(a73, aLB) {
				var q, aI8 = a73.aI8,
					y = v.w.getContext(aI8, !0),
					n = f.g,
					u = a73.aI9 >> 1;
				y.imageSmoothingEnabled = !1, y.setTransform(1, 0, 0, 1, 0, 0), aLB && y.clearRect(0, 0, aI8.width, aI8.height);
				if (9 === f.jA) {
					u <<= 1;
					a73 = jS.tB[5];
					for (q = n - a73; q < n; q++) aGb(q, y, aKy, u);
					n -= a73, u >>= 1
				}
				for (q = f.iy; q < n; q++) aGb(q, y, aKy, u)
			}(this, null !== (a73 = this).aI8 && a73.aI8.width === au.av - 2 && a73.aI8.height === au.ef - 2 || (a73.aI8 = v.w.x(au.av - 2, au.ef - 2), !1)), f.gI || this.aL2()
	}, this.aHh = aL3, this.aL2 = function() {
		for (var n = f.iy, u = this.aI9, aIA = this.aIA, y = v.w.getContext(this.aI8, !0), q = 0; q < n; q++) aGb(q, y, aIA, u)
	}
}

function aLD() {
	var dY, dZ, aLE, ds;

	function de() {
		qT.q4(), dk.dl()[19] = null, dk.dm()
	}

	function aLM() {
		aLQ(), aLO()
	}

	function aLQ() {
		aLE.h6.lastChild && dk.removeChild(aLE.h6, aLE.h6.lastChild)
	}

	function aLO() {
		var aLR = au.oR(f.data);
		f.data.canvas = au.oQ(aLR, f.data.mapSeed).oP, aLP()
	}

	function aLP() {
		var k = f.data.canvas;
		k.style.width = "100%", aLE.h6.appendChild(k)
	}
	this.qZ = function(k) {
		f.data.canvas && aLQ(), f.data.canvas = k, aLP()
	}, this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(35), [new dd("⬅️ " + L(5), de)]), 2 === f.data.mapType && qT.e(), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(198), L(199), L(200)],
			value: f.data.mapType
		}, function(t) {
			2 === (f.data.mapType = t) ? (qT.e(), f.data.canvas = null) : (f.data.passableWater = f.data.passableMountains = 1, qT.q4()), dk.e3(20)
		})), 2 <= f.data.mapType && (dx.e4(new a6e), dx.e4(new e5({
			value: f.data.passableWater
		}, L(201), function(value) {
			f.data.passableWater = value
		})), dx.e4(new e5({
			value: f.data.passableMountains
		}, L(202), function(value) {
			f.data.passableMountains = value
		})));
		ds.push(dx)
	}(ds = []), function(ds) {
		if (0 === f.data.mapType) {
			for (var dx = new dy, e0 = (dx.dz(L(35)), []), q = 0; q < au.zY.aLL.length; q++) e0.push(au.zY.zZ[au.zY.aLL[q]].name);
			dx.e1(new e2({
				e0: e0,
				value: f.data.mapProceduralIndex
			}, function(t) {
				f.data.mapProceduralIndex = t, aLM()
			})), ds.push(dx)
		}
	}(ds), function(ds) {
		if (1 === f.data.mapType) {
			for (var dx = new dy, e0 = (dx.dz(L(35)), []), q = 0; q < au.zY.aLN.length; q++) e0.push(au.zY.zZ[au.zY.aLN[q]].name);
			dx.e1(new e2({
				e0: e0,
				value: f.data.mapRealisticIndex
			}, function(t) {
				f.data.mapRealisticIndex = t, aLM()
			})), ds.push(dx)
		}
	}(ds), function(ds) {
		var dx;
		2 === f.data.mapType && ((dx = new dy).dz(L(203)), dx.e4(new e7(bK.buffer.data[162], 1)), dx.dz(L(204), "0.8em"), dx.e4(new e9([new dd(L(205), function() {
			return qT.qR(), !0
		}).button])), ds.push(dx))
	}(ds), function(ds) {
		var dx, ia;
		2 === f.data.mapType && ((dx = new dy).dz(L(206)), ia = new e7({
			t: -1,
			value: f.data.mapName
		}, 0, 0, function(e8) {
			f.data.mapName = e8.target.value = e8.target.value.slice(0, 20)
		}), dx.e4(ia), ds.push(dx))
	}(ds), function(ds) {
		var dx, ia, iZ;
		0 === f.data.mapType && ((dx = new dy).dz("Seed"), ia = new e7({
			t: -1,
			value: f.data.mapSeed
		}, 1, 0, function(e8) {
			e8 = Math.abs(Math.floor(e8.target.value)) % 16384;
			f.data.mapSeed !== e8 && (f.data.mapSeed = e8, aLM())
		}), iZ = new dd(L(7), function(e8) {
			var zg = Math.floor(16384 * Math.random());
			if (f.data.mapSeed !== zg) return ia.e8.value = f.data.mapSeed = zg, aLM(), !0
		}), dx.e4(ia), dx.e4(new e9([iZ.button])), ds.push(dx))
	}(ds), function(ds) {
		(aLE = new dy).dz(L(207)), 2 !== f.data.mapType ? aLO() : f.data.canvas && aLP();
		ds.push(aLE)
	}(ds), ds))
}

function nM() {
	this.size = 0, this.t = 0, this.ba = null, this.e = function(ba) {
		this.t = 0, this.ba = ba, this.size = ba.length
	}, this.bX = function(q7) {
		return this.e(new Uint8Array(this.q8(q7))), this.ba
	}, this.q4 = function() {
		this.ba = null
	}, this.bY = function(size, aLS) {
		for (var ba = this.ba, bQ = this.t + size - 1, q = this.t; q <= bQ; q++) ba[q >> 3] |= (aLS >> bQ - q & 1) << 7 - (7 & q);
		this.t += size, this.t > 8 * this.size && console.error("Wrapper Overflow")
	}, this.sG = function(size, aLS) {
		var ku = size >> 1,
			f6 = 1 << ku;
		this.bY(size - ku, fD.fE(aLS, f6)), this.bY(ku, aLS % f6)
	}, this.aLT = function(size) {
		for (var ba = this.ba, bQ = this.t + size, q = this.t; q < bQ; q++) ba[q >> 3] &= 255 ^ 128 >>> (7 & q)
	}, this.q8 = function(q7) {
		return q7 + 7 >> 3
	}, this.aLU = function(a8, v4, bQ, aLV) {
		for (var q = v4; q < bQ; q++) this.bY(aLV, a8[q])
	}
}

function aIv() {
	var aLW, aLX, n7, aLY = ["wss://", "/s50/", "/s51/", "/s52/"],
		aLZ = 0;

	function aIw() {
		bZ.af.aIw(aLW, aLX)
	}

	function aLc(e8) {
		bZ.iM.aLe(aLW, new Uint8Array(e8.data))
	}

	function aLd() {}

	function aJ1(e8) {
		bZ.af.aJ1(aLW, e8)
	}
	this.e = function(t, iA, aIr) {
		aLW = t, aLX = iA,
			function(aIr) {
				aIr = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : jV.z9 ? "ws://localhost:" + (7130 + aLW) + "/" : aIr ? aLY[0] + "game.territorial.io/x0" + aLW + "/" : aLY[0] + bZ.af.aIe[aLW] + aLY[1 + jV.jW];
				(n7 = new WebSocket(aIr)).binaryType = "arraybuffer", n7.onopen = aIw, n7.onmessage = aLc, n7.onclose = aJ1, n7.onerror = aLd
			}(aIr)
	}, this.aLb = function() {
		return n7.readyState === n7.CONNECTING
	}, this.kU = function() {
		return n7.readyState === n7.OPEN
	}, this.aIl = function() {
		return aLZ
	}, this.aIy = function() {
		aLZ = 1
	}, this.aIt = function() {
		return this.aLb() || this.kU()
	}, this.aIu = function(iA) {
		aLX = iA
	}, this.aKr = function() {
		return aLX
	}, this.send = function(ba) {
		this.kU() && n7.send(ba)
	}, this.close = function(aIz) {
		this.aIt() && (this.eD(), n7.close(aIz))
	}, this.eD = function() {
		n7.onopen = null, n7.onmessage = null, n7.onclose = null, n7.onerror = null
	}
}

function aLf() {
	var aLg, aLh, aLi, aBj, aLj, t = 0,
		fr = c0.fr;

	function aLn() {
		! function() {
			if (!f.gI) return;
			if (f.j5) return;
			if (2 !== f.j6)
				if (aLj % 7 != 0) aLj++;
				else if (aBj === f.jF) {
				if (!aLq()) return;
				fv.aBo(aBj), f.jC.bu()
			} else {
				if (!aLq()) return;
				aLj++, aBj++, k4.aBp(), k4.kD(!0)
			}
			return 1
		}() && aLq() && aBy()
	}

	function aLo() {
		t = 0, (f.gI ? (c0.d1 = fv.aBo(aBj - (aLj % 7 == 0 ? 0 : 1) + aLj % 7 / 7) || c0.d1, aBq) : fF.g2 || !fG.kO ? aBq : (c0.d1 = !0, aBw))()
	}

	function aLq() {
		var q, n, aLr = jr.kG.yW,
			eh = jr.kG.yX,
			ej = jr.kG.yY,
			el = jr.kG.yZ,
			aLs = jr.kG.ya,
			aLt = jr.kG.yb;
		if (!(aLg >= aLt.length)) {
			if (aLt = aLt[aLg], aLs[aLg]) {
				for (n = aLh + aLt, q = aLh; q < n; q++) gL.jd.rh(aLr[q], eh[q], ej[q], el[q]);
				aLh += aLt, aLg++
			} else ++aLi >= aLt && (aLg++, aLi = 0);
			return __fx.replay.tick++, 1
		}
		c5.aFM("Replay file smaller than expected."), fG.a1i(!1), f.j6 = 2
	}
	this.aBi = 0, this.e = function() {
		aLj = aBj = aLi = aLh = aLg = 0, __fx.replay.registerHooks({
			advance: () => aLn(),
			finishTick: () => jj.render(),
			requestRedraw: () => {
				c0.d1 = !0
			},
			isEnded: () => 2 === f.j6,
			getTickInterval: () => c0.fs
		})
	}, this.bu = function() {
		var aLm;
		ao.bu(), __fx.replay.frame() ? aBr() : fG.a9D() < 1.7 ? 0 === t ? c0.fr >= fr && (aLm = c0.fs / fG.a9D(), fr += aLm * Math.floor(1 + (c0.fr - fr) / aLm), 2 === f.j6 || fF.g2 || !fG.kO ? aBr() : (aLn(), jj.render()), t++) : aLo() :
			function() {
				var aLm;
				if (c0.fr >= fr)
					if (2 === f.j6 || fF.g2 || !fG.kO) aBr(), fr = c0.fr;
					else {
						for (aLm = c0.fs / fG.a9D(), 16 < (c0.fr - fr) / aLm && (fr = c0.fr - 16 * aLm); c0.fr >= fr && 2 !== f.j6;) fr += aLm, aLn();
						jj.render()
					} aLo()
			}(), aBu(), c0.d1 && (c0.d1 = !1, aBv())
	}, this.aLu = function() {
		jr.kG.yb.length - aLg <= 2 || c5.aFM("Replay file larger than expected.")
	}
}

function aGz() {
	var aLv, canvas, uj, aLw;

	function aM3(t, name, aM4, bJ) {
		uj[t] = name, canvas[t] = new Image, canvas[t].onload = function() {
			! function(t, aM4) {
				var aM7, s5 = null;
				7 === aM4 ? aM7 = v.a67.aM8 : 8 === aM4 ? (aM7 = v.a67.aM9, s5 = .1) : 3 === aM4 ? (aM7 = v.a67.aMA, s5 = .06) : 5 === aM4 ? aM7 = v.a67.aMB : 6 === aM4 ? aM7 = v.a67.aMC : 4 === aM4 && (aM7 = v.a67.aMD);
				canvas[t] = v.a67.aME(canvas[t], aM7, s5)
			}(t, aM4), aM6()
		}, canvas[t].onerror = function(e8) {
			console.error("Error loading image at index", t, "Error:", e8), aM6()
		}, canvas[t].src = "data:image/png;base64," + bJ
	}

	function aM6() {
		aLv--, aM0()
	}

	function aM0() {
		0 === aLv && (aLv = -1, aM2(), c0.d1 = !0, canvas[7] = aLw, canvas[8] = aLw, canvas[9] = aLw, canvas[10] = aLw, 5 === dk.iI) && dk.i9().iJ.resize()
	}

	function aM2() {
		jz.aG0(), aGh.aBI([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== cu.id, 1 !== cu.id, !0, !0, !0]), tL.a0 = new aMG, tL.a0.e(), gu.f4()
	}
	this.e = function() {
		if (void 0 === canvas) {
			aLv = 23, canvas = new Array(aLv), uj = new Array(aLv), (aLw = document.createElement("canvas")).width = 1;
			for (var q = aLv - (aLw.height = 1); 0 <= q; q--) canvas[q] = aLw;
			aM2(), aM3(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aM3(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aM3(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM3(3, "orders", 6,
					"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"
					), aM3(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aM3(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aM3(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aM3(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM3(8,
					"googleplay", 3,
					"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"
					), aM3(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aM3(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM3(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM3(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM3(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM3(14, "bestPlayer", 5,
					"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"
					), aM3(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aM3(16, "apple", 3,
					"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"
					), aM3(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aM3(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aM3(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aM3(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aM3(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aM3(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(t) {
		return canvas[t]
	}, this.aLy = function(name) {
		for (var q = uj.length - 1; 0 <= q; q--)
			if (uj[q] === name) return canvas[q];
		return aLw
	}, this.aBP = function() {
		return aLv <= 0
	}, this.aLz = function() {
		aLv = 0, aM0()
	}
}

function a50(a3v) {
	var a1n = document.createElement("div");

	function a3z() {
		nm.nn() || (a1n.style.backgroundColor = v.color.a43(b7.a1s, 50))
	}

	function a40() {
		a1n.style.backgroundColor = b7.a1s
	}
	this.bH = function(a42) {
			a1n.textContent = a42
		}, this.show = function() {
			document.body.appendChild(a1n)
		}, this.resize = function() {
			var ar = v.w.ke(.03, .5);
			a1n.style.width = 2 * ar + "px", a1n.style.height = ar + "px", a1n.style.font = v.w.bA(1, .75 * ar), v.w.hL(a1n, 4), v.w.hL(a1n, 2)
		}, this.q4 = function() {
			a1n.onclick = null, a1n.onmouseover = null, a1n.onmouseout = null, dk.removeChild(document.body, a1n), a1n = null
		}, a1n.style.position = "absolute", a40(), a1n.style.color = b7.b9, a1n.style.zIndex = "3", a1n.style.right = "0", a1n.style.top = "0", a1n.style.display = "flex", a1n.style.justifyContent = "center", a1n.style.alignItems = "center", a1n
		.style.userSelect = "none", a1n.style.outline = "none", a1n.onclick = a3v, a1n.onmouseover = a3z, a1n.onmouseout = a40
}

function aH7() {
	var aMH;

	function aMT(k, f5, aD, aE, globalAlpha) {
		au.sn.save(), au.sn.globalAlpha = globalAlpha, au.sn.imageSmoothingEnabled = !1, au.sn.scale(f5, f5), au.sn.drawImage(k, Math.floor(aD * (au.av / f5 - k.width)), Math.floor(aE * (au.ef / f5 - k.height))), au.sn.restore()
	}
	this.r8 = 0, this.aMI = 0, this.aMJ = 0, this.mk = 0, this.e = function() {
		(aMH = new Array(au.a0b))[0] = {
			ap: [0, 5e3, 8e3, 1e4],
			hh: [220, 250, 255, 220],
			tg: [190, 220, 0, 0],
			ku: [170, 200, 0, 0]
		}, aMH[1] = {
			ap: [0, 4e3, 5e3, 6e3, 1e4],
			hh: [25, 0, 100, 0, 25],
			tg: [25, 0, 0, 0, 25],
			ku: [25, 0, 0, 0, 25]
		}, aMH[2] = {
			ap: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			hh: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tg: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ku: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMH[3] = {
			ap: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			hh: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tg: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ku: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMH[4] = {
			ap: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			hh: [10, 10, 20, 10, 10, 170, 212],
			tg: [20, 20, 60, 100, 100, 110, 170],
			ku: [70, 70, 160, 30, 30, 60, 120]
		}, aMH[5] = {
			ap: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			hh: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tg: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ku: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMH[6] = {
			ap: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			hh: [10, 10, 60, 255, 255, 200, 200],
			tg: [10, 10, 60, 255, 255, 200, 200],
			ku: [80, 80, 255, 255, 255, 200, 200]
		}, aMH[7] = {
			ap: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			hh: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tg: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ku: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMH[8] = {
			ap: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			hh: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tg: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ku: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMH[9] = {
			ap: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			hh: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tg: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ku: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMH[20] = {
			ap: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			hh: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tg: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ku: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMH[21] = {
			ap: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			hh: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tg: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ku: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a0m = function() {
		var aMS, q, ca, eh, z = function() {
				var z;
				return au.oP = document.createElement("canvas"), au.oP.width = au.av, au.oP.height = au.ef, au.sn = au.oP.getContext("2d", {
					alpha: !1
				}), z = au.sn.getImageData(0, 0, au.av, au.ef), au.mi = z.data, z
			}(),
			ap = aMH[au.m3].ap,
			hh = aMH[au.m3].hh,
			tg = aMH[au.m3].tg,
			ku = aMH[au.m3].ku,
			ff = zW.zi(),
			n = ap.length - 2,
			aMN = new Array(1 + n),
			aMO = new Array(1 + n),
			aMP = new Array(1 + n),
			aMQ = new Array(1 + n);
		for (ca = n; 0 <= ca; ca--) aMN[ca] = ap[ca + 1] - ap[ca], aMO[ca] = hh[ca + 1] - hh[ca], aMP[ca] = tg[ca + 1] - tg[ca], aMQ[ca] = ku[ca + 1] - ku[ca];
		for (q = au.av * au.ef - 1; 0 <= q; q--)
			for (ca = n; 0 <= ca; ca--)
				if (ff[q] >= ap[ca]) {
					eh = ff[q] - ap[ca], au.mi[4 * q] = hh[ca] + a5v(aMO[ca] * eh, aMN[ca]), au.mi[4 * q + 1] = tg[ca] + a5v(aMP[ca] * eh, aMN[ca]), au.mi[4 * q + 2] = ku[ca] + a5v(aMQ[ca] * eh, aMN[ca]), au.mi[4 * q + 3] = 255;
					break
				} au.sn.putImageData(z, 0, 0), au.a0r(au.m3) && r1.aBP() && au.a0r(au.m3) && (z = r1.aLy("arena"), aMS = r1.aLy("territorial.io"), aMT(z, 5, .5, .5, .1), aMT(aMS, 2, .5, .45, .1)), au.a0d = !0, c0.d1 = !0
	}, this.ji = function() {
		for (var c9, aD, aE, mj, h0, ej, aMI = 0, ap = au.av, ar = au.ef, eh = ap * ar * 4, mf = mg, mh = au.mi, q = ap - 1; 0 <= q; q--) mf[(c9 = q << 2) + 2] = mf[eh - c9 - 2] = 3;
		for (eh = 4 * ap, q = ar - 1; 0 <= q; q--) mf[(c9 = q * eh) + 2] = mf[c9 + eh - 2] = 3;
		for (mj = ap - 1, h0 = ar - 1, aE = 1; aE < h0; aE++)
			for (eh = aE * ap, aD = 1; aD < mj; aD++) ej = 1 - (mh[(c9 = eh + aD << 2) + 2] > mh[c9 + 1] && mh[c9 + 2] > mh[c9]), mf[c9 + 2] = 6 - 5 * ej, aMI += ej;
		this.r8 = (ap - 2) * (ar - 2), this.mk = 0, au.m2(au.m3) && (au.mk.me(), au.mk.ml(4, 5)), this.aMI = f.j7 = aMI - this.mk, this.aMJ = this.r8 - this.aMI - this.mk, this.aMJ && (au.mk.ml(6, 2), au.mk.mu())
	}
}

function aH2() {
	this.gR = new aKb
}

function aHC() {
	var az, b1, b3, b4, aMU = 0,
		aMV = 0;

	function aMX() {
		return Math.pow(Math.pow(b3 - az, 2) + Math.pow(b4 - b1, 2), .5)
	}

	function aMW(e8) {
		az = ao.hG * e8.touches[0].clientX, b1 = ao.hG * e8.touches[0].clientY, b3 = ao.hG * e8.touches[1].clientX, b4 = ao.hG * e8.touches[1].clientY
	}
	this.a15 = function(e8) {
		return 1 < e8.touches.length ? (aMV = c0.fr, aMU = 3, aMW(e8), jz.eD(), !0) : (aMU = 0, !1)
	}, this.a16 = function(e8) {
		var aCe, xP, xQ;
		return 0 !== f.j6 && 1 < e8.touches.length && (aMU = Math.max(aMU - 1, 0), kB.bQ() && (aCe = aMX(), aMW(e8), e8 = aMX(), xP = Math.floor((az + b3) / 2), xQ = Math.floor((b1 + b4) / 2), jx.a8N(xP, xQ, Math.max(.125, e8) / Math.max(.125,
			aCe)), c0.d1 = !0), !0)
	}, this.a1W = function() {
		var aD, aE;
		return !!(aMU && (aMU = 0, c0.fr < aMV + 500)) && (aD = (az + b3) / 2, aE = (b1 + b4) / 2, jz.a1P(aD, aE), jz.click(aD, aE, !0) && (c0.d1 = !0), !0)
	}
}

function aGx() {
	var f0, aMY, ap, ar, er, aMZ, aMa, ow, canvas, ox, aMb;

	function pL() {
		return Math.floor((ao.ap - ap) / 2) < g5.ar + 2 * f7.gap ? ao.ar - ar - 4 * f7.gap - g5.ar : ao.ar - ar - 2 * f7.gap
	}
	this.e = function() {
		aMb = f0 = !1, er = .61, aMZ = .07, aMa = .09, ox = ow = ar = 0
	}, this.resize = function() {
		var fY, az, eF, aMf, aMg, aAg;
		f0 && (ap = a5x(ap = cu.cv.cw() ? Math.floor(.69 * ao.cx) : Math.floor(.5 * ao.cx), d2(ao.ap - 2 * f7.gap, 10)), ap = a5x(ap, Math.floor(3.57 * d2(ao.ar - 2 * f7.gap, 3))), ar = Math.floor(.28 * ap), (canvas = document.createElement(
			"canvas")).width = ap, canvas.height = ar, fY = canvas.getContext("2d", {
			alpha: !0
		}), az = Math.floor(1 + ar / 40), fY.clearRect(0, 0, ap, ar), fY.fillStyle = b7.cF, fY.fillRect(az, az, ap - 2 * az, ar - 2 * az), fY.lineJoin = "bevel", fY.lineWidth = 2 * az, fY.strokeStyle = b7.b9, fY.strokeRect(az, az, ap -
			2 * az, ar - 2 * az), fY.imageSmoothingEnabled = !1, eF = r1.get(aMY), aMf = eF.width, aAg = (1 === aMY ? .85 : 21 === aMY ? .666 : .9) * er * ar / (aMg = eF.height), fY.setTransform(aAg, 0, 0, aAg, Math.floor((ap - aAg *
			aMf) / 2), Math.floor((ar - aAg * aMg) / 2)), fY.drawImage(eF, 0, 0), fY.setTransform(1, 0, 0, 1, Math.floor(ap - aMa * ar - aMZ * ar - az), Math.floor(az + aMZ * ar)), function(fY, n) {
			fY.lineWidth = Math.floor(1 + ar / 80), fY.strokeStyle = b7.b9, fY.beginPath(), fY.moveTo(0, 0), fY.lineTo(n, n), fY.moveTo(0, n), fY.lineTo(n, 0), fY.stroke()
		}(fY, Math.floor(aMa * ar)), fY.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ff, aMd, rH, aMe) {
		f0 || aMe && aMb || (aMY = rH ? 21 : ff ? 1 : 2, f0 = aMb = !0, this.resize(), jz.eD(), g5.rB(), ox = c0.fr, ow = aMd ? 1 : 0)
	}, this.bu = function() {
		!f0 || 1 <= ow || (ow = 1 < (ow += 5e-4 * (c0.fr - ox)) ? 1 : ow, ox = c0.fr, c0.d1 = !0)
	}, this.dD = function(aD, aE) {
		return !(!f0 || ow <= 0 || (aD -= Math.floor((ao.ap - ap) / 2), aE -= pL(), aD < 0) || aE < 0 || ap < aD || ar < aE || (ap - ar / 3 < aD && aE < ar / 3 && (f0 = !1, c0.d1 = !0), 0))
	}, this.aR = function() {
		!f0 || ow <= 0 || (b5.globalAlpha = ow, b5.drawImage(canvas, Math.floor((ao.ap - ap) / 2), pL()), b5.globalAlpha = 1)
	}
}

function a7X() {
	var aMi = [],
		aMj = [],
		aMk = [];

	function aMm(c4) {
		for (var lE = c4.lE, aMl = [];;) {
			var eF = function aMo(lE, position) {
				position = lE.indexOf("@", position);
				if (position < 0) return -1;
				var bJ = lE.substring(position + 1, position + 6);
				if (5 !== bJ.length) return aMo(lE, position + 1);
				if (v.bB.startsWith(bJ, "room")) return aMo(lE, position + 1);
				var aMw = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aMw.test(bJ)) return aMo(lE, position + 1);
				aMw = lE.substring(position + 6, position + 7);
				if (1 !== aMw.length) return position;
				bJ = new RegExp("^[ :!.]+$");
				if (!bJ.test(aMw)) return aMo(lE, position + 1);
				return position
			}(lE, 0);
			if (-1 === eF) {
				aMl.push(aMp(lE, c4));
				break
			}
			0 === eF ? aMl.push(aMq(lE.substring(1, 6), c4, eF)) : (aMl.push(aMp(lE.substring(0, eF), c4)), aMl.push(aMq(lE.substring(eF + 1, eF + 6), c4, eF))), lE = lE.substring(eF + 6)
		}
		return aMl
	}

	function aMq(bJ, c4, eF) {
		var y7 = function(bJ) {
				var ij = bh.bi.p9(bJ, 5),
					y7 = la.lb.lY(ij);
				if (y7) {
					for (aMi.push(y7); 75 < aMi.length;) aMi.shift();
					return y7
				}
				for (var y4 = la.lb.y4, q = y4.length - 1; 0 <= q; q--)
					if (y7 = y4[q], ij === y7.ij) return aMi.push(y7), y7;
				for (q = aMi.length - 1; 0 <= q; q--)
					if (y7 = aMi[q], ij === y7.ij) return aMi.push(y7), y7;
				return la.lb.y8(ij, bJ, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(bJ),
			bJ = (0 === eF && 0 === c4.lC.id && c4.lO && (c4.fontSize = la.td.lV(y7.lU, y7.lW), c4.lN = la.td.lX(y7.lW)), document.createElement("span"));
		return bJ.textContent = function(y7, c4, eF) {
				if (y7.aMu) return y7.aMu--, eF = 2 === c4.lC.id || (3 === c4.lC.id || 4 === c4.lC.id) && 0 !== eF, y7.username + (eF ? " (" + y7.yL + ")" : "");
				if (c4.lC.ls) return "Redacted " + bo.bi.bC(y7.ij, 2);
				return y7.username
			}(y7, c4, eF), bJ.style.display = "inline-block", bJ.style.color = la.td.lT(y7.lU), 11 === y7.lU && (bJ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), bJ.style.cursor =
			"pointer", bJ.style.margin = "0", bJ.style.font = "inherit", bJ.style.minWidth = bJ.style.minHeight = "1em", la.td.lc(y7) && (bJ.style.textDecoration = "underline"), y7.ii && (bJ.style.textDecorationLine = "underline", bJ.style
				.textDecorationStyle = "dotted"), la.td.lX(y7.lW) && (bJ.style.fontWeight = "bold"), bJ.onclick = function(e8) {
				la.a1e.aMt(e8, y7)
			}, nm.nn() || (bJ.onmouseover = function(e8) {
				la.tb.tY(e8.target, y7)
			}), aMj.push(bJ), bJ
	}

	function aMp(lE, c4) {
		var a56 = document.createElement("span");
		return a56.textContent = lE, a56.style.color = c4.lP, a56.style.margin = "0", a56.style.font = "inherit", a56
	}

	function aN1(y7, yK, ij) {
		ij !== y7.ij || y7.yL || (y7.yL = y7.username, y7.username = yK)
	}
	this.q4 = function() {
		for (var q = 0; q < aMj.length; q++) aMj[q].onclick = aMj[q].onmouseover = null;
		aMk = aMj = null
	}, this.transform = function(c4) {
		for (var h6 = document.createElement("div"), aMl = aMm(c4), q = 0; q < aMl.length; q++) h6.appendChild(aMl[q]);
		0 === c4.lC.id && (h6.vx143 = c4.lC, aMk.push(h6)), h6.style.margin = "0.6em 0.6em", c4.lO && (h6.style.marginLeft = h6.style.marginRight = "inherit"), h6.style.font = "inherit";
		var aMn = 0 < c4.lC.id;
		return c4.lN && (h6.style.fontWeight = "bold"), aMn && (h6.style.paddingLeft = "0.7em"), aMn && (h6.style.fontStyle = "italic"), h6.style.fontSize = c4.fontSize.toFixed(2) + "em", h6
	}, this.aMz = function(aN0) {
		if (aN0 && (2 === aN0.id && 1 === aN0.lG || 3 === aN0.id && 2 === aN0.lG)) {
			var ij = 3 === aN0.id ? aN0.target : aN0.ij;
			if (!la.lb.lY(ij)) {
				for (var yK = "Redacted " + bo.bi.bC(ij, 2), y4 = la.lb.y4, q = y4.length - 1; 0 <= q; q--) aN1(y4[q], yK, ij);
				for (q = aMi.length - 1; 0 <= q; q--) aN1(aMi[q], yK, ij)
			}
		}
	}, this.yM = function(ij) {
		for (var aN2 = aMk, aN3 = "@" + bo.bi.bC(ij, 5), q = aN2.length - 1; 0 <= q; q--) {
			var f6 = aN2[q];
			if (f6.vx143.ij === ij || 0 <= f6.vx143.lE.indexOf(aN3)) {
				for (; f6.firstChild;) dk.removeChild(f6, f6.firstChild);
				for (var aMl = aMm(la.td.lL(f6.vx143, la.td.lB(f6.vx143))), ca = 0; ca < aMl.length; ca++) f6.appendChild(aMl[ca]);
				aN2.splice(q, 1)
			}
		}
	}, this.ll = function(ij) {
		for (var aN2 = aMk, q = aN2.length - 1; 0 <= q; q--) {
			var f6 = aN2[q];
			if (f6.vx143.ij === ij) {
				for (; f6.firstChild;) dk.removeChild(f6, f6.firstChild);
				f6.vx143.lE = "[Redacted Message]";
				for (var aMl = aMm(la.td.lL(f6.vx143, la.td.lB(f6.vx143))), ca = 0; ca < aMl.length; ca++) f6.appendChild(aMl[ca]);
				aN2.splice(q, 1)
			}
		}
	}
}

function aN4() {
	this.jf = 1, this.gN = function(a2) {
		f.j5 ? gL.rr.gN(f.al, a2) : bZ.iL.aFY(a2)
	}, this.ga = function(pY, uA) {
		this.jf && (this.jf = 0, bK.iF.bH(182, pY)), f.j5 ? gL.rr.ga(f.al, pY, uA) : bZ.iL.aFZ(pY, uA)
	}, this.aER = function(pY, pb) {
		f.j5 ? gL.rr.rs(f.al, pY, pb) : bZ.iL.aFa(pY, pb)
	}, this.gj = function(pY, a2) {
		a2 = (a2 << 3) + a9.eZ[6];
		f.j5 ? gL.rr.gj(f.al, pY, a2) : ae.a0X.a0Y(f.al) && bZ.iL.aFb(pY, a2)
	}, this.gm = function(pY) {
		849 === pY && (pY = 850);
		var tv = a9.eZ[3];
		f.j5 ? gL.rr.gm(f.al, pY, tv) : ae.gk.a0F(f.al, tv) && bZ.iL.aFc(pY, tv)
	}, this.aEW = function(tv) {
		f.j5 ? gL.rr.aEW(f.al, tv) : bZ.iL.aFc(849, tv)
	}, this.rt = function(uA) {
		f.j5 ? gL.rr.rt(f.al, uA) : bZ.iL.aFd(uA)
	}, this.o9 = function(o8) {
		f.j5 ? gL.rr.ru(f.al, o8) : bZ.iL.aFe(o8)
	}, this.gw = function(aEY) {
		f.j5 ? gL.rr.gw(f.al, aEY) : bZ.iL.aFf(aEY)
	}, this.rv = function() {
		f.j5 ? gL.rr.rv(f.al) : bZ.iL.aFg()
	}, this.gt = function() {
		f.j5 ? gL.rr.gt(f.al) : bZ.iL.aFd(513)
	}, this.gV = function(pY, a2, uA) {
		f.j5 ? gL.rr.gV(f.al, pY, a2, uA) : bZ.iL.aFh(pY, a2, uA)
	}
}

function aN5() {
	var iP, pO, pP, pR;

	function aN6(id) {
		0 !== cu.id || bK.buffer.data[140].value ? 0 === id ? dk.e3(8, 1, new iB(16)) : dk.e3(2) : dk.af.iC(dk.iI, 0 === id ? 16 : 0)
	}
	this.show = function() {
		cu.cv.setState(12), iP.show(), this.resize(), this.bu()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), pO.resize()
	}, this.bu = function() {
		8 === dV.dW() && (2 <= fI.fJ ? pP[2].aND === b7.aJg && pP[2].pz(0) : pP[2].aND !== b7.aJg && pP[2].pz(b7.aJg), !f.g1 && fF.aEZ(f.al) ? pP[1].aND === b7.aJg && pP[1].pz(0) : pP[1].aND !== b7.aJg && pP[1].pz(b7.aJg), !f.g1 && gu.gx(f.al) ?
			pP[0].aND === b7.aJg && pP[0].pz(0) : pP[0].aND !== b7.aJg && pP[0].pz(b7.aJg))
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, pP = [new dd(L(208), function() {
		aN6(0)
	}), new dd(L(64), function() {
		dk.e3(16)
	}), new dd(L(209), function() {
		dk.e3(17)
	}), new dd(L(210), function() {
		dk.af.i8()
	}, 0, 0, 1), new dd(L(116), function() {
		dk.e3(3, 1)
	}), new dd(L(82), function() {
		dk.e3(18)
	}), new dd(L(211), function() {
		dk.e3(31)
	}), new dd(L(212), function() {
		dk.af.i2(2)
	}), new dd(L(213), function() {
		aN6(1)
	}), new dd("🔒 " + L(214), function() {
		dk.e3(32)
	}), new dd(L(215), function() {
		var aNB, hE;
		(aNB = []).push(["Wiki", (hE = "https://territorial.io/") + "wiki/gold"]), aNB.push(["Team Games", hE + "log/team"]), aNB.push(["Battle Royale Games", hE + "log/br"]), aNB.push(["1v1 Games", hE + "log/1v1"]), aNB.push([
			"Zombie Games", hE + "log/zombies"
		]), aNB.push(["Transactions", hE + "log/transactions"]), aNB.push(["Changelog", hE + "changelog"]), 2 !== cu.id && aNB.push(["Android App", aBK.aBL]), 1 !== cu.id && aNB.push(["iOS App", aBK.aBM]), 0 === cu.id && aNB.push([
			"Patreon", aBK.aC8
		]), aNB.push(["Terms", aBK.aC2]), aNB.push(["Privacy", aBK.aC3]), dk.e3(4, 1, new iD(L(215), v.w.aNC(aNB), !1, [new dd("⬅️ " + L(5), function() {
			dk.e3(1)
		})]))
	}), new dd(L(216), function() {
		dk.e3(4, 1, new iD(L(216), jV.bM + "<br>" + bZ.af.iE("/changelog") + "<br><br><jV>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></jV>", !0, [new dd("⬅️ " + L(5),
				function() {
					dk.e3(1)
				})]))
	}), new dd(L(217), function() {
		dk.e3(4, 1, new iD(L(217), L(224) + "<br>" + L(225), !1, [new dd("⬅️ " + L(5), function() {
			dk.e3(1)
		}), new dd(L(226), function() {
			cu.cv.aHy(), dk.e3(1)
		})]))
	}), new dd("👁️ " + L(218), function() {
		cu.cv.aI1(), dk.e3(4, 1, new iD(L(227), L(228) + " " + bZ.af.iE("/privacy"), !1, [new dd("⬅️ " + L(5), function() {
			dk.e3(1)
		})]))
	})], pR = [new dd("⬅️ " + L(5), function() {
		dk.af.i7()
	})], 8 === dV.dW() && (pP.unshift(new dd(L(180), function() {
		dk.e3(30)
	})), pP.unshift(new dd(L(221), function() {
		2 <= fI.fJ && (dk.i6(), jt.fH(), c0.d1 = !0)
	}, 0, 1)), pP.unshift(new dd(L(222), function() {
		!f.g1 && fF.aEZ(f.al) && (gL.gM.rv(), dk.i6(), fF.g2) && fF.fH()
	}, 0, 1)), pP.unshift(new dd(L(223), function() {
		!f.g1 && gu.gx(f.al) && (jl.aFC(2), gL.gM.gt(), dk.i6(), fF.g2) && fF.fH()
	}, 0, 1))), 1 === cu.id && 5 <= cu.bM && pP.push(new dd(L(219), function() {
		cu.cv.aI2()
	})), iP = new dc(L(220), pR), pO = new pS(pP, iP.dg)
}

function a7V() {
	var aNE = null,
		aNF = null,
		aNG = 0,
		aNH = 0,
		aNI = null;

	function aNJ() {
		0 !== aNF.lU && (la.a1e.eD(), dk.e3(8, 29, new iB(25, {
			action: 0,
			ij: bo.bi.bC(aNF.ij, 5),
			a8w: 0
		}, 29)))
	}

	function aNL() {
		return !la.ld || la.td.lc(aNF) ? 1 : 0
	}

	function aNK() {
		var aD = aNE.aD,
			aE = aNE.aE,
			aNS = (la.a1e.eD(), aNL());
		aNE = new aBR([new dd(lH.lJ[5][0], function() {
			aNO(5, 0)
		}, aNS), new dd(lH.lJ[5][1], function() {
			aNO(5, 1)
		}, aNS), new dd(lH.lJ[5][2], function() {
			aNO(5, 2)
		}, aNS), new dd(lH.lJ[5][3], function() {
			aNO(5, 3)
		}, aNS)]), aNN(aD, aE), aNH = aNG = 2
	}

	function aNM() {
		29 === dk.iI && dk.i9().a7R(bo.bi.bC(aNF.ij, 5))
	}

	function aNO(id, value) {
		5 === id && bZ.q0.q1({
			action: 3,
			ij: bo.bi.bC(aNF.ij, 5),
			value: value
		})
	}

	function aNN(aD, aE, aBW) {
		aNE.show(aD, aE, aBW), la.tb.show(aNE.aD, aNE.aE, aNF, 1)
	}
	this.aMt = function(e8, c4) {
		aNG = 1, aNF = c4, aNE = new aBR([new dd(L(229), aNJ, 0 === c4.lU ? 1 : 0), new dd(L(230), aNK, aNL()), new dd(L(231), aNM, 0)]), aNN((aNI = {
			clientX: e8.clientX,
			clientY: e8.clientY
		}).clientX, aNI.clientY, 1)
	}, this.eE = function(code) {
		if (29 !== dk.iI) return !1;
		if (!aNF) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.eD();
			else if (v.bB.startsWith(code, "Numpad") || v.bB.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aNG) this.aMt(aNI, aNF);
				else {
					if (!aNE) return !1;
					1 === aNG ? code <= 1 ? aNJ() : 2 === code ? aNK() : (aNM(), this.eD()) : (aNO(aNH, fD.ok(code - 1, 0, lH.lJ[aNH].length - 1)), this.eD())
				}
		}
		return !0
	}, this.eD = function() {
		aNG = 0, aNE && aNE.eD(), aNE = null, la.tb.eD()
	}
}

function aH8() {
	var ff, ap, ar, max, aNX, a0k, aNZ, aNa, aNb, aNc, aNd, aNe, aNf, aNg, aNY = 1e4;

	function aNn(aNm, a0j, n) {
		var q;
		for (aNZ[0] = aNm, q = 1; q < n; q++) aNZ[q] = aNZ[q - 1] + a0j, a0j = aNZ[q] >= aNY ? (aNZ[q] = aNY - 1, -a0j) : aNZ[q] < 0 ? (aNZ[q] = 0, -a0j) : (a0j += 16384 <= jX.random() ? a0k : -a0k) < -aNX ? -aNX : aNX < a0j ? aNX : a0j
	}

	function aNp(aD, aE, aNq, n) {
		(aNq ? function(aD, aE, n) {
			var q;
			for (q = 0; q < n; q++) ff[aE * ap + aD + q] = aNZ[q]
		} : function(aD, aE, n) {
			var q;
			for (q = 0; q < n; q++) ff[aE * ap + aD + q * ap] = aNZ[q]
		})(aD, aE, n)
	}

	function aNt(value, n) {
		var q, aEB, a3, xl = value - aNZ[n - 1];
		if (0 != xl) {
			for (aEB = 1 + fD.fE(Math.abs(xl), n - 1), aEB = xl < 0 ? -aEB : aEB, aNZ[n - 1] = value, a3 = (a3 = n - 1 - fD.fE(Math.abs(xl), Math.abs(aEB))) < 1 ? 1 : n - 2 < a3 ? n - 2 : a3, q = n - 2; a3 <= q; q--) aNZ[q] += xl - (n - 1 - q) * aEB;
			(xl < 0 ? function(n) {
				var q;
				for (q = n - 2; 1 <= q; q--) aNZ[q] < 0 && (aNZ[q] = -aNZ[q] - 1)
			} : function(n) {
				var q;
				for (q = n - 2; 1 <= q; q--) aNZ[q] >= aNY && (aNZ[q] = 2 * aNY - aNZ[q] - 1)
			})(n)
		}
	}

	function aNw(mq, mt, n) {
		for (var q = 0; q < n; q++) mq[q] = mt[q]
	}

	function aNx(a8) {
		for (var q = 0; q < a8.length - 1; q++) a8[q] = a8[q + 1] - a8[q];
		a8[a8.length - 1] = a8[a8.length - 3]
	}

	function aNy(r, gap, h1) {
		aNa.push(r), aNb.push(gap), aNc.push(h1)
	}
	this.bX = function(s5) {
		! function(s5) {
			var q;
			for (ap = s5[0], ar = s5[1], aNX = s5[2], a0k = s5[3], ff = new Int16Array(ap * ar), max = ar < ap ? ap : ar, aNZ = new Int16Array(max), aNa = [], aNb = [], aNc = [], aNd = new Array(ap), aNe = new Array(ar), q = ap - 1; 0 <= q; q--)
				aNd[q] = !1;
			for (q = ar - 1; 0 <= q; q--) aNe[q] = !1;
			aNf = new Int16Array(ap), aNg = new Int16Array(ar)
		}(s5),
		function(n) {
			var aNm = jX.random() % aNY,
				a0j = jX.random() % (2 * aNX + 1) - aNX;
			aNn(aNm, a0j, n)
		}(max), aNw(aNg, aNZ, ar), aNp(0, 0, !0, ap);
		var aD, aE, s5 = ff[0],
			n = max,
			a0j = jX.random() % (2 * aNX + 1) - aNX;
		for (aNn(s5, a0j, n), aNw(aNf, aNZ, ap), aNp(0, 0, !1, ar), aNx(aNf), aNx(aNg), aNn(ff[ap - 1], aNf[ap - 1], ar), aNp(ap - 1, 0, !1, ar), aNn(ff[ap * (ar - 1)], aNg[ar - 1], ap), aNt(ff[ap * ar - 1], ap), aNp(0, ar - 1, !0, ap), aNd[ap -
				1] = aNd[0] = !0, aNe[ar - 1] = aNe[0] = !0, aNy(0, ap, !0), aNy(0, ar, !1), ! function() {
				var aFq, r;
				for (;;) {
					if (aFq = function() {
							var q, aFq = aNa.length - 1;
							for (q = aFq - 1; 0 <= q; q--) aNb[q] > aNb[aFq] && (aFq = q);
							return aFq
						}(), aNb[aFq] < 5) return;
					r = aNa[aFq] + fD.fE(aNb[aFq], 2), (aNc[aFq] ? function(aD) {
						var n, aO2, q, a7H = 0,
							aO3 = 0;
						for (; aO3 < ar - 1;) {
							for (q = a7H + 1; q < ar; q++)
								if (aNe[q]) {
									aO3 = q;
									break
								} n = aO3 - a7H + 1, aNn(ff[aD + ap * a7H], 0 === a7H ? aNf[aD] : aNZ[aO2 - 1] - aNZ[aO2 - 2], n), aNt(ff[aO3 * ap + aD], n), aNp(aD, a7H, !1, n), aO2 = n, a7H = aO3
						}
						aNd[aD] = !0
					} : function(aE) {
						var n, aO2, q, a7H = 0,
							aO3 = 0;
						for (; aO3 < ap - 1;) {
							for (q = a7H + 1; q < ap; q++)
								if (aNd[q]) {
									aO3 = q;
									break
								} n = aO3 - a7H + 1, aNn(ff[aE * ap + a7H], 0 === a7H ? aNg[aE] : aNZ[aO2 - 1] - aNZ[aO2 - 2], n), aNt(ff[aE * ap + aO3], n), aNp(a7H, aE, !0, n), aO2 = n, a7H = aO3
						}
						aNe[aE] = !0
					})(r), aNy(r, aNa[aFq] + aNb[aFq] - r, aNc[aFq]), aNb[aFq] = r - aNa[aFq] + 1
				}
			}(), aD = 0; aD < ap; aD++)
			if (!aNd[aD])
				for (aE = 0; aE < ar; aE++) aNe[aE] || ! function(aD, aE) {
					var value = ff[aE * ap + aD - 1] + ff[(aE - 1) * ap + aD],
						aLS = 2;
					aNd[aD + 1] && (aLS++, value += ff[aE * ap + aD + 1]);
					aNe[aE + 1] && (aLS++, value += ff[(aE + 1) * ap + aD]);
					ff[aE * ap + aD] = fD.fE(value, aLS)
				}(aD, aE)
	}, this.zi = function() {
		return ff
	}, this.zX = function() {
		ff = null
	}
}

function aHS() {
	this.aO5 = null, this.d1 = !1, this.fr = 0, this.fs = 56;
	var aO6 = 0;

	function aO7() {
		c0.fr = aO6 = performance.now(), c0.aO5.bu(), window.requestAnimationFrame(aO7)
	}
	this.e = function() {
		this.kL(), window.requestAnimationFrame(aO7), this.fr = performance.now()
	}, this.jm = function() {
		f.g1 ? (this.aO5 = new aLf, this.aO5.e()) : f.j5 ? this.aO5 = new aO8 : (this.aO5 = new aBh, this.aO5.e())
	}, this.kL = function() {
		this.aO5 = new aO9, this.d1 = !0
	}, this.bu = function() {
		this.aO5.aBi++
	}, this.c1 = function() {
		return this.aO5.aBi
	}, this.aOA = function() {
		var d8 = performance.now();
		d8 < aO6 + 1e3 || (this.fr = d8, this.aO5.bu())
	}
}

function a9p(h5, data, e0) {
	var n = data.a9n.length,
		aOB = document.createElement("div"),
		aOC = document.createElement("div"),
		aOD = document.createElement("div"),
		aOE = new Array(n),
		ds = new Array(n),
		aOF = new Array(data.a9l.length),
		aOG = v.color.kZ(70, 70, 0, .35);

	function a43() {
		this.style.backgroundColor = v.color.a43(aOG, 160)
	}

	function aOK() {
		this.style.backgroundColor = aOG
	}

	function hD() {
		var ca;
		for (h5.style.font = v.w.bA(0, v.w.aOM(.026, .5, .03)), q = 1; q < aOF.length; q++) v.w.hL(aOF[q], 4);
		if (v.w.hL(aOB, 2), n) {
			for (var gT, dO = aOB.offsetWidth, dP = aOD.offsetWidth, q = 0; q < aOF.length; q++) gT = .01 * data.a9o[q] * dP, aOF[q].style.width = (100 * gT / dO).toFixed(2) + "%";
			var aL = data.a9n[0].length;
			for (q = 0; q < n; q++)
				for (v.w.hL(aOE[q], 2), ca = 1; ca < aL; ca++) v.w.hL(ds[q][ca], 4);
			aOC.aOH && (aOC.scrollTop = aOC.aOH)
		}
	}
	this.resize = function() {
			hD(), hD()
		}, h5.style.display = "flex", h5.style.flexDirection = "column", aOC.style.overflowX = "hidden", aOC.style.overflowY = "auto", aOC.addEventListener("scroll", function() {
			this.aOH = this.scrollTop, e0 && e0.a9q && (dk.af.i0[e0.a9q] = this.scrollTop)
		}),
		function() {
			var f6, q, a9n = data.a9n,
				aL = n ? a9n[0].length : 0;
			for (q = 0; q < n; q++) {
				aOE[q] = document.createElement("div"), aOE[q].style.backgroundColor = function(q) {
					return q % 2 == 1 ? v.color.kZ(130, 130, 130, .35) : b7.nl
				}(q), aOE[q].style.width = "100%", aOE[q].style.display = "flex", ds[q] = new Array(aL);
				for (var ca = 0; ca < aL; ca++) ds[q][ca] = f6 = document.createElement("div"), f6.style.display = "flex", f6.style.justifyContent = "center", f6.style.wordBreak = "break-all", f6.style.padding = "0.4em 0em", f6.style.width = data
					.a9o[ca] + "%", f6.textContent = a9n[q][ca].ff, 1 === a9n[q][ca].d8 && (f6.name = "" + q, f6.style.color = b7.l6, f6.style.backgroundColor = aOG, f6.addEventListener("mouseover", a43), f6.addEventListener("mouseout", aOK),
						function(f6, ij, a8w) {
							2147483647 !== a8w && f6.addEventListener("click", function() {
								bW.bX(30), bW.bY(30, ij), eM.e(bW.ba), this.style.backgroundColor = aOG, dk.e3(8, dk.iI, new iB(25, {
									action: 0,
									ij: bo.bi.qG(bo.bi.qH(5)),
									a8w: a8w
								}))
							})
						}(f6, a9n[q][ca].ij, a9n[q][ca].a8w)), aOE[q].appendChild(f6)
			}
			for (aOB.style.display = "flex", aOB.style.backgroundColor = v.color.kZ(0, 120, 0, .35), q = 0; q < aOF.length; q++) aOF[q] = f6 = document.createElement("div"), f6.style.display = "flex", f6.style.justifyContent = "center", f6.style
				.wordBreak = "break-all", f6.style.padding = "0.4em 0em", f6.style.width = data.a9o[q] + "%", f6.innerHTML = data.a9l[q], aOB.appendChild(f6)
		}();
	for (var q = 0; q < n; q++) aOD.appendChild(aOE[q]);
	aOC.appendChild(aOD), h5.appendChild(aOB), h5.appendChild(aOC), e0 && e0.a9q && (aOC.aOH = dk.af.i0[e0.a9q])
}

function a3O() {
	function aJR(aD, n, aE, aON, cd, aJa, player) {
		if (!(aE < 1 || cd < aE))
			for (var q = 0; q <= n; q++) {
				var a3 = cX.xU(aD, aE);
				if (ae.td.va(a3) && !v.aN.has(aON, a6.vQ(a3)) && a6.aOQ(a3, player)) return a3 >> 2;
				aD += aJa
			}
		return -1
	}

	function aJV(aE, n, aD, aON, aJP, aJa, player) {
		if (!(aD < 1 || aJP < aD)) {
			n = Math.max(n, 0);
			for (var q = 0; q <= n; q++) {
				var a3 = cX.xU(aD, aE);
				if (ae.td.va(a3) && !v.aN.has(aON, a6.vQ(a3)) && a6.aOQ(a3, player)) return a3 >> 2;
				aE += aJa
			}
		}
		return -1
	}

	function aJZ(vS, vK, a0O) {
		return -1 !== vK && (-1 === vS || cX.vV(vK, a0O) < cX.vV(vS, a0O)) ? vK : vS
	}
	this.gi = function(player, a0O) {
		if (ae.a0X.a0Y(player))
			for (var w4 = cX.xM(), aON = [];;) {
				var a3Y = function(a0O, w4, aON, player) {
					for (var g8 = cX.cY(a0O), gA = cX.cZ(a0O), aJP = au.av - 2, cd = au.ef - 2, aJQ = -1, f6 = 0; f6 < w4; f6++) {
						var cc = Math.max(g8 - f6, 1),
							zs = Math.max(gA - f6, 1),
							zt = Math.min(g8 + f6, aJP),
							zj = Math.min(gA + f6, cd),
							vS = aJR(g8, zt - g8, gA - f6, aON, cd, 1, player),
							vK = aJR(g8 - 1, g8 - cc - 1, gA - f6, aON, cd, -1, player),
							zt = aJR(g8, zt - g8, gA + f6, aON, cd, 1, player),
							cc = aJR(g8 - 1, g8 - cc - 1, gA + f6, aON, cd, -1, player),
							aJU = aJV(gA, zj - gA - 1, g8 - f6, aON, aJP, 1, player),
							aJW = aJV(gA - 1, gA - zs - 2, g8 - f6, aON, aJP, -1, player),
							zj = aJV(gA, zj - gA - 1, g8 + f6, aON, aJP, 1, player),
							zs = aJV(gA - 1, gA - zs - 2, g8 + f6, aON, aJP, -1, player);
						if (aJQ = aJZ(aJQ, vS, a0O), aJQ = aJZ(aJQ, vK, a0O), aJQ = aJZ(aJQ, zt, a0O), aJQ = aJZ(aJQ, cc, a0O), aJQ = aJZ(aJQ, aJU, a0O), aJQ = aJZ(aJQ, aJW, a0O), aJQ = aJZ(aJQ, zj, a0O), 0 <= (aJQ = aJZ(aJQ, zs, a0O)) &&
							f6 * f6 >= cX.vV(aJQ, a0O)) return aJQ
					}
					return -1
				}(a0O, w4, aON, player);
				if (-1 === a3Y) break;
				var id = a6.vQ(cX.gO(a3Y));
				if (ae.td.vG(player, id)) return !! function(player, a3Y, a0O) {
					for (var h1 = cX.xe(a3Y, a0O), q = 0; q < 4; q++) {
						var a2 = cX.xc(a3Y, h1);
						if (a6.aJN(cX.gO(a2), player)) return a9.eZ[6] = h1, 1;
						h1 = (h1 + 1) % 4
					}
					return
				}(player, a3Y, a0O) && (a9.eZ[7] = a3Y, !0);
				aON.push(id)
			}
		return !1
	}
}

function a3R() {
	this.bu = function(player, tv) {
		player = ae.td.vb(player, tv);
		return !(player < 0 || !ae.tq.aOR(player) || (ae.tq.tr(player), 0))
	}
}

function aHO() {
	this.kM = new aHv, this.aHw = new aEk, this.turnstile = new yx, this.e = function() {
		cu.cv.aI4(), this.turnstile.e()
	}, this.aEo = function() {
		return bK.buffer.data[160].value
	}
}

function aOS() {
	var dY, dZ, da, ds;

	function de() {
		di(), 2 !== f.data.tIncomeType && (f.data.tIncomeData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		2 === f.data.tIncomeType && v.aN.dn(da.dp(), f.data.tIncomeData, 255)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(49), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(48), L(41), L(9)],
			value: f.data.tIncomeType
		}, function(t) {
			di(), 2 !== t || f.data.tIncomeData || (f.data.tIncomeData = new Uint8Array(f.g), f.data.tIncomeData.fill(32)), f.data.tIncomeType = t, dk.e3(26)
		})), ds.push(dx)
	}(ds = []), function(ds) {
		var dx;
		1 === f.data.tIncomeType && ((dx = new dy).dz("Value"), dx.e4(new e7({
			t: -1,
			value: f.data.tIncomeValue
		}, 1, 0, function(e8) {
			var value = fD.ok(Math.floor(e8.target.value), 0, 255);
			e8.target.value = f.data.tIncomeValue = value
		})), ds.push(dx))
	}(ds), function(ds) {
		var dx;
		2 === f.data.tIncomeType && ((dx = new dy).dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.tIncomeData, 4)), dx.e4(da), ds.push(dx))
	}(ds), ds))
}

function a00() {
	this.aIx = function(s1) {
		var aOX;
		bW.bX(55 + wY.sM.eN()), bW.bY(1, 0), bW.bY(6, 13), bW.bY(14, jV.aFX), bW.bY(4, cu.id), bW.bY(7, cu.bM), bW.bY(1, +jV.nN), bW.bY(1, +jV.nO), bW.bY(5, (new Date).getHours() % 24), aOX = sB.a2e(), bW.bY(8, aOX[0]), bW.bY(8, aOX[1]), wY.sM
			.kJ(), bZ.af.send(s1, bW.ba)
	}, this.aKp = function(s1, aHs, aKo, aOU) {
		bW.bX(70), bW.bY(1, 0), bW.bY(6, 30), bW.bY(3, aKo), bW.bY(30, aHs), bW.bY(30, aOU), bZ.af.send(s1, bW.ba)
	}, this.zI = function(zE) {
		s9.e(), s9.bY(1, 0), s9.bY(6, 6), bo.sD.kJ(zE, 16, s9), bZ.af.send(bZ.af.zH, s9.sE())
	}, this.wy = function(id) {
		bW.bX(13), bW.bY(1, 0), bW.bY(6, 15), bW.bY(6, id), bZ.af.send(0, bW.ba)
	}, this.kV = function(id, value) {
		bW.bX(43), bW.bY(1, 0), bW.bY(6, 3), bW.bY(6, id), bW.bY(30, value), bZ.af.send(0, bW.ba)
	}, this.a2b = function(id, bJ) {
		var n = Math.min(bJ.length, 63);
		bW.bX(19 + 16 * n), bW.bY(1, 0), bW.bY(6, 26), bW.bY(6, id), bW.bY(6, n), bo.bp.bq(bJ), bZ.af.send(0, bW.ba)
	}, this.aOV = function(i3, c4) {
		bW.bX(7 + 26 * c4.length), bW.bY(1, 0), bW.bY(6, 9);
		for (var q = 0; q < c4.length; q++) bW.bY(16, c4[q][0]), bW.bY(10, c4[q][1]);
		bZ.af.send(i3, bW.ba)
	}, this.yg = function(aOW, aHu) {
		bW.bX(20), bW.bY(1, 0), bW.bY(6, 19), bW.bY(1, aOW), bW.bY(12, aHu), bZ.af.send(bZ.af.a1J, bW.ba)
	}, this.bf = function(username) {
		bW.bY(5, username.length), bo.bp.bq(username)
	}, this.aOY = function(aOZ, aKw, s1, pow) {
		bW.bX(88), bW.bY(1, 0), bW.bY(6, 8), bW.bY(3, pow.aKo), bW.bY(30, pow.aHs), bW.sG(32, aKw), bW.bY(16, aOZ), bZ.af.send(s1, bW.ba)
	}
}

function aHB() {
	this.cV = new a7v, this.a3l = new aOa, this.a3m = new aOb, this.performance = new a90, this.aEO = new aOc, this.aOd = new aOe, this.aOf = new aOg, this.a3k = new aOh, this.mz = new aEf, this.e = function() {
		this.cV.e(), this.a3m.e(), this.performance.e(), this.aEO.e(), this.aOd.e()
	}, this.bu = function() {
		this.performance.bu(), this.cV.bu(), this.a3m.aOi()
	}
}

function aOj() {
	this.bH = function(t, value) {
		2 !== bK.buffer.data[t].type && (value = Math.floor(value)), bK.buffer.data[t].value !== value && (bK.buffer.bI(t, value), 0 === t ? (dk.i6(), sB.e(), dk.e3(2)) : 1 === t ? ao.aHe(1) : 2 === t ? ao.aHe(0) : 5 === t && (v.w.a6D(), ao.aHe(
			0)))
	}, this.aHz = function() {
		for (var data = bK.buffer.data, q = 0; q < 100; q++) data[q] && bK.buffer.bI(q, data[q].bP);
		v.w.a6D(), ao.aHe(1)
	}, this.aI0 = function() {
		for (var data = bK.buffer.data, q = 0; q < data.length; q++) data[q] && bK.buffer.bH(q, data[q].bP)
	}, this.aFQ = function() {
		for (var ku = bK.buffer, q = 128; q < 135; q++) ku.bI(q, ku.data[q].bP)
	}, this.aOk = function(data) {
		bK.iF.bH(109, data.a8w), bK.iF.bH(107, data.aOl), bK.iF.bH(108, data.aOm), bK.iF.bH(112, data.aOn), bK.iF.bH(111, data.aOo), bK.iF.bH(113, data.s7), bK.iF.bH(135, data.aOp), bK.iF.bH(136, data.aOq), bK.iF.bH(137, data.aOr), bK.iF.bH(138,
			data.aOs), bK.iF.bH(139, data.aOt), bK.iF.bH(141, data.aOu), bK.iF.bH(142, data.aOv), bK.iF.bH(143, data.aOw), bK.iF.bH(144, data.aOx)
	}
}

function a02() {
	this.aLe = function(s1, ba) {
		eM.e(ba), 0 === eM.size ? bZ.af.a5A(s1, 3205) : __fx.customLobby.isCustomMessage(ba) || ((0 === eM.eN(1) ? function(s1) {
			var aP0 = eM.eN(6);
			0 === aP0 ? function(s1) {
					if (0 === s1 && 8 !== dV.dW()) {
						dk.af.iG();
						for (var aP8 = eM.eN(12), aP9 = eM.eN(6), a8 = new Array(aP8), q = 0; q < aP8; q++) a8[q] = eM.eN(aP9);
						d9.cz(a8)
					}
				}(s1) : 2 === aP0 ? bZ.a03.aP2(s1) : 3 === aP0 || 4 === aP0 ? aFV.e() : 5 === aP0 ? bZ.a05.aKm() : 9 === aP0 ? bZ.a05.aKq(s1) : 10 === aP0 ? bZ.a07.aP3() : 11 === aP0 ? bZ.a05.aKs(s1) : 12 === aP0 ? bZ.a07.aP4() :
				13 === aP0 ? bZ.a09.a59() : 14 === aP0 ? bZ.a09.a5B() : 15 === aP0 ? bZ.a05.aKt() : 16 === aP0 ? bZ.a03.aP5(s1) : 17 === aP0 ? bZ.a03.aP6(s1) : 19 === aP0 ? bZ.a03.aP7(s1) : 20 === aP0 ? bZ.a05.aKn(s1) : 21 !== aP0 &&
				22 !== aP0 && 23 === aP0 && bZ.a05.aKv(s1)
		} : function(s1) {
			if (8 !== dV.dW() && !aFV.aPA()) return;
			if (s1 !== bZ.af.a1J) bZ.af.a5A(s1, 3244);
			else if (0 === eM.eN(1)) c0.aO5.aBn(eM.ba);
			else {
				var q, s1 = eM.eN(2);
				if (0 === s1) {
					var o8, iL = eM.eN(9);
					0 !== cD.ft[iL] && 0 !== cD.ft[f.al] && (o8 = eM.eN(10), c5.o9(iL, f.al, o8), k4.tK(iL, 1, o8))
				} else if (1 === s1) ! function() {
					var iL = eM.eN(9);
					0 !== cD.ft[iL] && 0 !== cD.ft[f.al] && k6.aPG(0, [iL], !0) && c5.oC(iL, 1)
				}();
				else if (2 === s1) ! function() {
					var iL = eM.eN(9),
						target = eM.eN(9);
					0 !== cD.ft[iL] && 0 !== cD.ft[target] && 0 !== cD.ft[f.al] && k6.aPG(1, [iL], !0) && (k4.tK(iL, 3, 96), k4.tK(target, 4, 96), c5.aPH(iL, target))
				}();
				else if (jV.nN && !jV.nO) {
					var n = 540;
					for (bW.bX(17287), bW.bY(1, 0), bW.bY(6, 10), n = Math.min(gL.jd.je.length, 540), q = 0; q < n; q++) bW.sG(32, gL.jd.je[q]);
					bZ.af.send(bZ.af.a1J, bW.ba)
				}
			}
		})(s1), c0.aOA())
	}
}

function a3N() {
	this.a0Y = function(player) {
		return !!f.data.passableWater && ae.af.am !== ae.af.a3f && ae.af.rq[player] !== ae.af.aPI && 0 !== cD.m1[player].length
	}, this.aET = function(a0O) {
		var a3G = a9.eZ[1];
		return !(4 <= a3G || !ae.td.va(cX.gO(a0O))) && a6.u0(cX.gO(cX.xc(a0O, a3G)))
	}
}

function a08() {
	this.aP3 = function() {
		bK.af.aPJ(), bK.iF.bH(105, bo.bi.qG(bo.bi.qH(5))), bK.iF.bH(106, bo.bi.qG(bo.bi.qH(15))), bK.iF.bH(109, 0), bK.iF.bH(108, bK.buffer.data[109].value), bK.iF.bH(111, bK.buffer.data[109].value + 1), bK.iF.bH(107, 0), bK.iF.bH(110, "")
	}, this.aP4 = function() {
		var data;
		eM.size < bW.q8(29) ? bZ.af.a5A(0, 3254) : ((data = {
			a8w: eM.eN(30),
			aOl: eM.eN(16),
			aOm: eM.eN(30),
			aOn: eM.eN(30),
			aOo: eM.eN(30),
			s7: eM.q5(32),
			username: bh.sD.eJ(5),
			aOp: bh.sD.eJ(3),
			aOq: bh.sD.eJ(3),
			aOr: eM.q5(32),
			aOs: eM.q5(32),
			aOt: eM.eN(30),
			aOu: eM.q5(32),
			aOv: eM.q5(32),
			aOw: eM.q5(32),
			aOx: eM.q5(32),
			aPK: eM.q5(32),
			aPL: eM.q5(30),
			aPM: eM.q5(32),
			aPN: bh.sD.eJ(3),
			aPO: eM.q5(2),
			aPP: eM.q5(10),
			aPQ: bh.sD.eJ(8),
			aPR: eM.q5(5),
			aPS: eM.eN(30),
			aPT: eM.eN(30),
			a7d: eM.q5(32),
			aPU: eM.eN(3),
			aPV: eM.eN(8),
			aPW: eM.eN(30),
			aPX: eM.q5(32),
			aPY: eM.eN(1),
			aPZ: bh.sD.eJ(6),
			aPa: eM.eN(1),
			aPb: eM.eN(1),
			aPc: eM.eN(1),
			aPd: eM.eN(17),
			aPe: eM.eN(5),
			aPf: eM.eN(1),
			aPg: eM.eN(1)
		}).aPf && (data.aPh = eM.q5(32), data.aPi = eM.eN(30), data.aPj = eM.eN(30), data.aPk = eM.eN(1)), 8 === dk.iI && (25 === dk.i9().wt ? (data.aPl = !0, dk.af.hx = data, dk.i9().x4(25, !1)) : (data.aPl = !1, bK.iF.bH(160, +(data
			.aPf && data.aPk)), data.ij = bK.buffer.data[105].value, dk.af.hy = data, bK.iF.aOk(data), dk.i9().x4(16, !0))))
	}
}

function aH0() {
	var aPm = [
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
		aPn = [
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
	this.aPo = null, this.aPp = null, this.aPq = null, this.aPr = null, this.aPs = null, this.aPt = null, this.aPu = null, this.aPv = null, this.aPw = null, this.aPx = null;

	function aQ2(v4, bQ) {
		for (var aPo = a6.aPo, aPp = a6.aPp, aPq = a6.aPq, q = v4; q < bQ; q++) aPo[q] = fD.fE(64 * jX.random(), jX.value(100)) << 2, aPp[q] = fD.fE(64 * jX.random(), jX.value(100)) << 2, aPq[q] = fD.fE(64 * jX.random(), jX.value(100)) << 2
	}

	function aQ1(v4, bQ) {
		for (var colorsData = f.data.colorsData, aPo = a6.aPo, aPp = a6.aPp, aPq = a6.aPq, q = v4; q < bQ; q++) {
			var ff = colorsData[q];
			aPo[q] = 4 * (ff >> 12), aPp[q] = 4 * (ff >> 6 & 63), aPq[q] = 4 * (63 & ff)
		}
	}

	function aQG(a3, aQI) {
		mg[a3] = 0, mg[a3 + 1] = 0, mg[a3 + 2] = aQI, mg[a3 + 3] = 0, aQJ(a3)
	}

	function aQJ(a3) {
		var aD;
		jj.xD || (aD = a6.pK(a3), a3 = a6.pL(a3), jj.xD = aD >= xG.pI[0] && aD <= xG.pI[2] && a3 >= xG.pI[1] && a3 <= xG.pI[3])
	}
	this.gy = new Int32Array(4), this.mp = new Int32Array(8), this.f4 = function() {
		var gy = this.gy,
			gy = (gy[0] = -4 * au.av, gy[1] = 4, gy[2] = -gy[0], gy[3] = -gy[1], this.mp);
		gy[0] = -4 * au.av - 4, gy[1] = -4 * au.av, gy[2] = -4 * au.av + 4, gy[3] = -4, gy[4] = 4, gy[5] = 4 * au.av - 4, gy[6] = 4 * au.av, gy[7] = 4 * au.av + 4
	}, this.e = function() {
		if (this.aPo ? (this.aPo.fill(0), this.aPp.fill(0), this.aPq.fill(0), this.aPr.fill(0), this.aPs.fill(0), this.aPt.fill(0), this.aPu.fill(0), this.aPv.fill(0), this.aPw.fill(0), this.aPx.fill(0), this.zS.fill(0)) : (this.aPo =
				new Uint8Array(f.g), this.aPp = new Uint8Array(f.g), this.aPq = new Uint8Array(f.g), this.aPr = new Uint8Array(f.g), this.aPs = new Uint8Array(f.g), this.aPt = new Uint8Array(f.g), this.aPu = new Uint8Array(f.g), this.aPv =
				new Uint8Array(f.g), this.aPw = new Uint8Array(f.g), this.aPx = new Uint8Array(f.g), this.zS = new Uint8Array(f.g)), f.j)
			for (var p = l.p, aPo = a6.aPo, aPp = a6.aPp, aPq = a6.aPq, q = f.g - 1; 0 <= q; q--) {
				var eF = p[q],
					aL = fD.fE((aPn[eF][3] + 1) * jX.random(), jX.value(100));
				aPo[q] = aPm[eF][0] + aL * aPn[eF][0], aPp[q] = aPm[eF][1] + aL * aPn[eF][1], aPq[q] = aPm[eF][2] + aL * aPn[eF][2]
			} else 0 === f.data.colorsType ? f.data.selectableColor ? (aQ1(0, f.iy), aQ2(f.iy, f.g)) : aQ2(0, f.g) : aQ1(0, f.g);
		! function() {
			var q, f6, aPo = a6.aPo,
				aPp = a6.aPp,
				aPq = a6.aPq;
			for (q = f.g - 1; 0 <= q; q--) f6 = fD.fE(aPo[q] + aPp[q] + aPq[q], 3), aPo[q] += a5v(f6 - aPo[q], 2), aPp[q] += a5v(f6 - aPp[q], 2), aPq[q] += a5v(f6 - aPq[q], 2), aPo[q] -= aPo[q] % 4, aPp[q] -= aPp[q] % 4, aPq[q] -= aPq[q] % 4
		}(),
		function() {
			for (var n = f.g, aPo = a6.aPo, aPp = a6.aPp, aPq = a6.aPq, aPr = a6.aPr, q = 0; q < n; q++) aPo[q] += q >> 7, aPp[q] += q >> 5 & 3, aPq[q] += q >> 3 & 3, aPr[q] = 7 & q
		}(), this.aQ5(),
			function() {
				for (var n = f.g, aPs = a6.aPs, aPt = a6.aPt, aPu = a6.aPu, aPo = a6.aPo, aPp = a6.aPp, aPq = a6.aPq, q = 0; q < n; q++) {
					var hh = aPo[q],
						tg = aPp[q],
						ku = aPq[q];
					60 <= hh + tg + ku ? (aPs[q] = Math.max(hh - 40, 3 & hh), aPt[q] = Math.max(tg - 40, 3 & tg), aPu[q] = Math.max(ku - 40, 3 & ku)) : (aPs[q] = hh + 40, aPt[q] = tg + 40, aPu[q] = ku + 40)
				}
			}(),
			function() {
				for (var n = f.g, aPv = a6.aPv, aPw = a6.aPw, aPx = a6.aPx, aPo = a6.aPo, aPp = a6.aPp, aPq = a6.aPq, q = 0; q < n; q++) {
					var hh = aPo[q],
						tg = aPp[q],
						ku = aPq[q];
					688 <= hh + tg + ku ? (aPv[q] = hh - 88, aPw[q] = tg - 88, aPx[q] = ku - 88) : (aPv[q] = Math.min(hh + 88, 252 + (3 & hh)), aPw[q] = Math.min(tg + 88, 252 + (3 & tg)), aPx[q] = Math.min(ku + 88, 252 + (3 & ku)))
				}
			}()
	}, this.a7 = function(player) {
		var a8 = a9.aA;
		return a8[0] = this.aPo[player], a8[1] = this.aPp[player], a8[2] = this.aPq[player], a8
	}, this.aQ5 = function() {
		for (var q = f.g - 1; 0 <= q; q--) this.zS[q] = this.aPo[q] + this.aPp[q] + this.aPq[q] < 280 ? 0 : 1
	}, this.pK = function(a3) {
		return fD.fE(a3, 4) % au.av
	}, this.pL = function(a3) {
		return fD.fE(a3, 4 * au.av)
	}, this.xJ = function(aD, aE) {
		return Math.floor(4 * (aE * au.av + aD))
	}, this.aQ8 = function(a3) {
		var gy = this.gy;
		return this.aQ9(a3 + gy[0]) || this.aQ9(a3 + gy[1]) || this.aQ9(a3 + gy[2]) || this.aQ9(a3 + gy[3])
	}, this.aKl = function(a3) {
		var gy = this.gy;
		return this.gP(a3 + gy[0]) || this.gP(a3 + gy[1]) || this.gP(a3 + gy[2]) || this.gP(a3 + gy[3])
	}, this.aOQ = function(a3, player) {
		var gy = this.gy;
		return this.aJN(a3 + gy[0], player) || this.aJN(a3 + gy[1], player) || this.aJN(a3 + gy[2], player) || this.aJN(a3 + gy[3], player)
	}, this.aCc = function(q, aQA, aQB, aQC) {
		this.aPo[q] = aQA >> 16, this.aPp[q] = aQA >> 8 & 255, this.aPq[q] = 255 & aQA, this.aPs[q] = aQB >> 16, this.aPt[q] = aQB >> 8 & 255, this.aPu[q] = 255 & aQB, this.aPv[q] = aQC >> 16, this.aPw[q] = aQC >> 8 & 255, this.aPx[q] = 255 & aQC
	}, this.aCZ = function(q) {
		return [(this.aPo[q] << 16) + (this.aPp[q] << 8) + this.aPq[q], (this.aPs[q] << 16) + (this.aPt[q] << 8) + this.aPu[q], (this.aPv[q] << 16) + (this.aPw[q] << 8) + this.aPx[q]]
	}, this.h3 = function(a3) {
		return 208 <= mg[a3 + 3]
	}, this.wo = function(player, a3) {
		return this.h3(a3) && this.u9(player, a3)
	}, this.u9 = function(player, a3) {
		return player === this.gU(a3)
	}, this.aQD = function(a3) {
		return 208 <= mg[a3 + 3] && mg[a3 + 3] < 224
	}, this.aCn = function(a3) {
		return 224 <= mg[a3 + 3] && mg[a3 + 3] < 248
	}, this.aCl = function(a3) {
		return 248 <= mg[a3 + 3]
	}, this.zl = function(a3) {
		for (var gy = this.gy, q = 3; 0 <= q; q--)
			if (this.vU(a3 + gy[q])) return !0;
		return !1
	}, this.u0 = function(a3) {
		return this.h3(a3) || this.cT(a3)
	}, this.vU = function(a3) {
		return 0 === mg[a3 + 3] && 2 === mg[a3 + 2]
	}, this.cT = function(a3) {
		return 0 === mg[a3 + 3] && 1 === mg[a3 + 2]
	}, this.aQE = function(a3) {
		return 0 === mg[a3 + 3] && 3 === mg[a3 + 2]
	}, this.gP = function(a3) {
		return 0 === mg[a3 + 3] && 5 === mg[a3 + 2]
	}, this.aQ9 = function(a3) {
		return 0 === mg[a3 + 3] && 3 <= mg[a3 + 2]
	}, this.vQ = function(a3) {
		return (mg[a3] >> 1 << 8) + mg[a3 + 1]
	}, this.aQF = function(a3) {
		return 1 & mg[a3]
	}, this.aJN = function(a3, player) {
		return this.cT(a3) || this.h3(a3) && player !== this.gU(a3)
	}, this.gU = function(a3) {
		return ((3 & mg[a3]) << 7) + ((3 & mg[a3 + 1]) << 5) + ((3 & mg[a3 + 2]) << 3) + (7 & mg[a3 + 3])
	}, this.wp = function(a3) {
		aQG(a3, 1)
	}, this.aQH = function(a3) {
		aQG(a3, 2)
	}, this.aCo = function(a3, player) {
		mg[a3] = this.aPo[player], mg[a3 + 1] = this.aPp[player], mg[a3 + 2] = this.aPq[player], mg[a3 + 3] = 208 + this.aPr[player], aQJ(a3)
	}, this.mc = function(a3, player) {
		mg[a3] = this.aPs[player], mg[a3 + 1] = this.aPt[player], mg[a3 + 2] = this.aPu[player], mg[a3 + 3] = 224 + this.aPr[player], aQJ(a3)
	}, this.aCm = function(a3, player) {
		mg[a3] = this.aPv[player], mg[a3 + 1] = this.aPw[player], mg[a3 + 2] = this.aPx[player], mg[a3 + 3] = 248 + this.aPr[player], aQJ(a3)
	}
}

function aH6() {
	this.lq = new a9U, this.a0 = new aMG
}

function eA(aQK, aQL, aQM, aQN) {
	var yj = document.createElement("textarea"),
		aQO = (this.e8 = yj, !0);

	function aQP() {
		yj.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aQL && v.w.hL(yj, 5)
		}, this.eB = function(ht) {
			yj.value = ht
		}, this.dp = function() {
			return yj.value
		}, this.yk = function() {
			yj.select()
		}, this.clear = function() {
			yj.value = ""
		}, this.yl = function() {
			aQO && navigator.clipboard ? (yj.select(), navigator.clipboard.writeText(yj.value).catch(function() {
				aQO = !1, aQP()
			})) : aQP()
		}, yj.setAttribute("id", "textArea" + dk.af.hz++), yj.setAttribute("autocomplete", "off"), aQK && yj.setAttribute("placeholder", aQK), yj.style.top = "0", yj.style.left = "0", yj.style.width = "100%", yj.style.height = "100%", yj.style
		.userSelect = "none", yj.style.outline = "none", yj.style.resize = "none", yj.style.border = "none", yj.style.color = b7.b9, yj.style.backgroundColor = b7.wI, aQN ? (yj.style.fontSize = "1em", yj.rows = 6, yj.style.padding = "0.25em") : (yj
			.style.padding = "0.45em", yj.style.fontSize = "1.2em"), aQM && yj.addEventListener("input", function(e8) {
			aQM(e8)
		}), yj.addEventListener("focus", function() {
			ao.wJ++
		}), yj.addEventListener("blur", function() {
			ao.wJ--
		})
}

function aGl() {
	this.fE = function(ca, ku) {
		return Math.floor((ca + .5) / ku)
	}, this.aQQ = function(ca, ku) {
		return Math.floor(ca * (ku + .5))
	}, this.sqrt = function(ff) {
		return ~~Math.sqrt(ff + .5)
	}, this.pow = function(e8) {
		return Math.floor(Math.pow(2, e8) + .5)
	}, this.ok = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aQR = function(eh, ej, el) {
		return Math.max(Math.min(eh, ej), el)
	}, this.aQS = function(aQT, aQU, aD, aE) {
		aD -= aQT, aQT = aE - aQU, aE = 0;
		return 0 == aD ? aE = 0 <= aQT ? Math.PI : 0 : (aE = Math.atan(aQT / aD), aE += 0 < aD ? .5 * Math.PI : 1.5 * Math.PI), aE
	}, this.log2 = function(ff) {
		return Math.floor(!!ff * (1 + Math.log2(ff + .5)))
	}, this.log10 = function(ff) {
		return Math.floor(Math.log10(ff + .5))
	}, this.w7 = function(aT, aU, aQW, aQX, aQY) {
		return aQW - aQY < aT && aT < aQW + aQY && aQX - aQY < aU && aU < aQX + aQY
	}, this.aQZ = function(a8R, a8T) {
		return a8R * a8R + a8T * a8T
	}
}

function aOh() {
	this.bu = function(player) {
		var a3U = function(player) {
			for (var a0V = ae.a0V.a2s(), n = a0V.length, aL = Math.min(n, 32), h2 = jX.tI(n), q = 0; q < aL; q++) {
				var a3U = (q + h2) % n,
					vp = a0V[a3U],
					vS = vp[0],
					vK = vp[vp.length - 1];
				if (ae.td.vX(player, vS) && ae.td.vY(player, vK)) return a3U;
				if (ae.td.vX(player, vK) && ae.td.vY(player, vS)) return 0 <= (a3U = ae.a0V.a2h(vK, vS)) ? a3U : ae.a0V.a0Z() ? -1 : ae.a0V.a2r(ae.a0V.a0W(vp))
			}
			return -1
		}(player);
		return -1 !== a3U && (a3U = ae.a0V.get(a3U), !ae.td.wE(player, a3U)) && (a9.a8[0] = a3U, !0)
	}
}

function a7T() {
	this.wL = function(t) {
		if ((y3 = la.lb.y3[t]) < 2 && !__fx.customLobby.isActive()) return !1;
		var aQa = la.af.lm[t],
			aQb = 9 === aQa.a6U ? 333 : 512,
			y3 = Math.min(y3, aQb);
		8 === aQa.a6U && (y3 -= y3 % 2);
		aQb = la.lb.lZ[t].splice(0, y3), la.lb.y3[t] -= y3, y3 = function(aQc) {
			if (la.ld) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var n = aQc.length, ij = la.ld.ij, q = 0; q < n; q++)
					if (aQc[q].ij === ij) return q
			}
			return -1
		}(aQb);
		return -1 === y3 ? (la.lb.y4 = la.lb.y4.concat(aQb), 1e3 < la.lb.y4.length && la.lb.y4.splice(0, la.lb.y4.length - 1e3), la.af.yC += 29 === dk.iI && la.af.yD[0] === t && 1 === la.af.yD[2], !1) : (8 === aQa.a6U && (aQa.a6a = (aQa.a6a + (
			y3 >> 1)) % 1024, t = y3 - y3 % 2, y3 %= 2, aQb = aQb.slice(t, 2 + t)), aFV.e(aQa, aQb, y3), !0)
	}, this.aQf = function(aQa, aQc, aQd) {
		var f6 = f.data = new iq,
			aQg = (f6.spawningSeed = aQa.spawningSeed, aQa.a6U < 7 ? (f6.gameMode = 1, f6.numberTeams = aQa.a6U + 2) : 9 === aQa.a6U ? (f6.gameMode = f6.isZombieMode = 1, f6.numberTeams = 2) : (f6.gameMode = 0, f6.battleRoyaleMode = 7 === aQa
				.a6U ? 0 : 10 === aQa.a6U ? 1 : 2), f6.selectedPlayer = aQd, f6.isContest = aQa.a6Y, f6.mapType = au.a0h(aQa.m3) ? 0 : 1, au.a0s(f6, aQa.m3), f6.mapSeed = aQa.mapSeed, f6.humanCount = aQc.length);
		f6.selectableSpawn = 1 === f6.gameMode || aQg < 100, f6.colorsData = new Uint32Array(aQg), f6.playerNamesData = new Array(aQg), f6.ir = new Uint32Array(aQg);
		for (var q = 0; q < aQg; q++) f6.colorsData[q] = aQc[q].color, f6.playerNamesData[q] = aQc[q].username, f6.ir[q] = aQc[q].ij;
		if (2 === f6.battleRoyaleMode)
			for (f6.elo = new Uint16Array(aQg), q = 0; q < aQg; q++) f6.elo[q] = aQc[q].elo;
		aFR.close(), dV.setState(8), au.bX(aQa.m3, f6.mapSeed), f.jO(), f.jM = 2
	}
}

function aOe() {
	function aQv(player, uA, aQk) {
		3 <= aQk && 2142 < c0.c1() && (uA === f.g || cD.mY[uA] < fD.fE(cD.mY[player], 20)) && jn.aQn(player, 20)
	}

	function aQy(player, aW, uA, aQk) {
		3 <= aQk && aQk < 6 && fD.fE(cD.mY[player], 8) > cD.mY[uA] && (aW = Math.max(fD.fE(11 * cD.mY[uA], 5), fD.fE(cD.mY[player], 10)));
		aQk = cD.m6[player].length;
		cU.aEO.aR9(player, uA), cU.aEO.aRA(player, uA, aQk, aW)
	}

	function aQu(player, aW) {
		var uA = f.g,
			n = cD.m6[player].length;
		cU.aEO.aRB(player), cD.m6[player].length !== n && cU.aEO.aRA(player, uA, n, aW)
	}
	this.aQh = new Uint8Array(f.g), this.e = function() {
		this.aQh.fill(0)
	}, this.aQi = function(player, aW) {
		var aQj, aQk, aQl, aQm;
		gb.uF(player) && (aQj = jZ.su(player), 3 <= (aQk = jn.aW[player]) && aQk < 6 && (aW = Math.max(cD.mY[player] - aQj, aW)), aQl = cD.m1[player].length, aQm = cD.gz[player].length, 30 * cD.fh[player] > f.j7 && cM[player] < 10 && 100 * aQm <=
			aQl && jn.aQn(player, 10), f.j ? function(player, aW, aQk, aQj) {
				var uA;
				if (cU.aEO.aQq(player, !1) || cU.aEO.aQr(player, !1)) {
					if (!cU.aEO.aQs(player))
						if (cU.aEO.aQt()) aQu(player, aW), aQv(player, f.g, aQk);
						else {
							if (jX.wk(jn.aQw[aQk])) uA = cU.aEO.aQx(player);
							else {
								if (cU.aEO.aQz() && jX.wk(jn.aR0[aQk]) && cU.aEO.aR1(), 6 === aQk) return aQy(player, aW, cU.aEO.aR2(), aQk);
								uA = cU.aEO.aR3(player)
							}
							aQy(player, aW, uA, aQk), aQv(player, uA, aQk)
						}
				} else ae.my.bu(player) || cU.aOf.bu(player) || ! function(player, aW, aQk, aQj) {
					var aQh = cU.aOd.aQh;
					aQh[player] = 0;
					var aR5 = l.cR[player];
					if (0 !== aR5) {
						var aR6 = cD.mY[player],
							fh = cD.fh;
						if (player < f.iy && (aW = aR6), !(aR6 < fh[player] || 5 === aQk && aR6 < aQj || 4 === aQk && aR6 < fD.fE(aQj, 2))) {
							cN.hb(aR5);
							for (var n = a9.eR[0], eb = a9.eb, q = jX.tI(n), ku = 0; ku < n; ku++) {
								var eF = eb[(ku + q) % n];
								if (aQh[eF]) return gL.uC.aR7(player, eF, aW)
							}
							var rq = ae.af.rq;
							for (ku = 0; ku < n; ku++)
								if (eF = eb[(ku + q) % n], rq[eF] && eF !== player) return gL.uC.aR7(player, eF, aW)
						}
					}
				}(player, aW, aQk, aQj)
			}(player, aW, aQk, aQj) : (!aQm || aQl && (aQl < aQm && !jX.tI(10) || 100 * aQm <= aQl && jX.tI(3) || !jX.tI(8))) && ae.my.bu(player) || function(player, aW, aQk) {
				cU.aEO.aQq(player, !0) || cU.aEO.aQr(player, !0) ? cU.aEO.aQs(player) || (cU.aEO.aQt() ? aQu(player, aW) : jX.wk(jn.aQw[aQk]) ? aQy(player, aW, cU.aEO.aQx(player), aQk) : 5 === aQk ? aQy(player, aW, cU.aEO.aR8(), aQk) : (cU
					.aEO.aQz() && jX.wk(jn.aR0[aQk]) && cU.aEO.aR1(), aQy(player, aW, 6 === aQk ? cU.aEO.aR2() : cU.aEO.aR3(player), aQk))) : cU.aOf.bu(player)
			}(player, aW, aQk))
	}
}

function aBr() {
	c5.bu(), k4.bu(), fv.aRC(), bZ.af.bu()
}

function aBy() {
	gd.bu(), k2.bu(), ja.bu(), jZ.bu(), k5.bu(), k1.bu(), cU.bu(), ae.af.bu(), cH.aRD(), jw.bu(), jS.bu(), jl.bu(), k4.bu(), k4.aE0(), fv.bu(), js.bu(), jy.bu(), g7.bu(), k8.aRE(), c5.bu(), k6.bu(), g5.bu(), gu.bu(), fI.bu(), cN.bu(), bZ.af.bu(), bZ
		.zw.bu(), dk.bu(), jP.aHw.bu(), jr.bu(), c0.bu()
}

function aBu() {
	kB.bu(), k0.bu(), fK.bu(), kA.bu(), fG.bu(), k7.bu(), k8.bu(), aFV.aRF()
}

function aBw() {
	jw.kD(!1), g7.kD(), fv.kD(!1), jy.kD(), g5.kD(), gu.kD(), k4.kD(!1), cN.fM()
}

function aBq() {
	k4.kD(!1) && (c0.d1 = !0), bZ.af.bu()
}

function aRG() {
	function aRJ(a8) {
		if (0 === a8.length) bK.iF.bH(116, "");
		else {
			for (var aRK = a8[0], q = 1; q < a8.length; q++) aRK += ";" + a8[q];
			bK.iF.bH(116, aRK)
		}
	}
	this.aPJ = function() {
		bK.buffer.data[110].value.length && (bK.buffer.data[106].value = bK.buffer.data[110], bK.iF.bH(110, ""), this.aRH())
	}, this.aRH = function() {
		var a8 = bK.buffer.data[116].value.split(";");
		for (a8.length % 2 == 1 && a8.pop(), a8.unshift(bK.buffer.data[106].value), a8.unshift(bK.buffer.data[105].value), q = 2; q < a8.length; q += 2)
			if (a8[q] === a8[0]) {
				a8.splice(q, 2);
				break
			} for (var aRI = [], q = 0; q < a8.length; q += 2) aRI.push(a8[q]);
		aRJ(a8), bK.buffer.data[117].value = 0, bK.buffer.data[117].e0 = aRI
	}, this.x6 = function(t) {
		bK.buffer.data[117].e0.splice(t, 1), bK.buffer.data[117].value = Math.min(t, bK.buffer.data[117].e0.length - 1);
		var a8 = bK.buffer.data[116].value.split(";");
		a8.splice(2 * t, 2), aRJ(a8)
	}, this.x7 = function(t) {
		var a8 = bK.buffer.data[116].value.split(";");
		return {
			ij: a8[2 * t],
			password: a8[2 * t + 1]
		}
	}, this.y1 = function() {
		var ff = fD.ok(bK.buffer.data[121].value, -1, 262143);
		return ff = -1 === ff ? ~~(262144 * Math.random()) : ff
	}, this.aRL = function() {
		for (var a8 = document.cookie.split(";"), q = 0; q < a8.length; q++) {
			var a2o, bJ = a8[q].trim();
			0 !== bJ.length && (a2o = 0 <= (a2o = bJ.indexOf("=")) ? bJ.substring(0, a2o) : bJ, document.cookie = a2o + "=;expires=0;path=/", document.cookie = a2o + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a2o +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function dc(title, pR, aRM) {
	var aRN = document.createElement("div"),
		aRO = document.createElement("div"),
		aOD = document.createElement("div"),
		aRP = document.createElement("div"),
		aRQ = document.createElement("div");
	this.dg = aOD, this.eG = pR, this.show = function() {
			!1 !== aRM ? document.body.appendChild(aRN) : (document.body.appendChild(aRO), document.body.appendChild(aRP))
		}, this.eD = function() {
			!1 !== aRM ? dk.removeChild(document.body, aRN) : (dk.removeChild(document.body, aRO), dk.removeChild(document.body, aRP))
		}, this.aRU = function() {
			var aRV = v.w.ke(.1),
				aRW = v.w.ke(.08 + .04 * (ao.aIG < 1), .3);
			return {
				aRV: aRV,
				aRW: aRW,
				aRX: ao.ar / ao.hG - aRV - aRW
			}
		}, this.resize = function(a74) {
			var n = pR.length,
				aRY = this.aRU(),
				aRV = aRY.aRV,
				aRW = aRY.aRW;
			for (aRO.style.height = v.w.hK(aRV), v.w.hL(aRO, 2), aRP.style.top = v.w.hK(ao.ar / ao.hG - aRW), aRP.style.height = v.w.hK(aRW), v.w.hL(aRP, 8), aOD.style.top = v.w.hK(aRV), aOD.style.height = aOD.style.maxHeight = v.w.hK(aRY.aRX), aRO
				.style.font = v.w.bA(0, v.w.ke(.02, .15)), aRP.style.font = v.w.bA(0, v.w.ke(.02, .7)), aOD.style.font = v.w.bA(0, v.w.ke(.02, .35)), q = 1; q < n; q++) v.w.hL(pR[q].button, 4);
			for (var a75 = 0, q = 0; q < n; q++) a75 += pR[q].button.offsetWidth;
			if (a74 && a75 < aRP.offsetWidth)
				for (q = 0; q < n; q++) pR[q].button.style.width = (100 * pR[q].button.offsetWidth / a75).toFixed(2) + "%";
			else
				for (q = 0; q < n; q++) pR[q].button.style.width = "auto";
			aRP.aRZ && (aRP.scrollLeft = aRP.aRZ), a74 || this.resize(!0)
		}, this.aR = function() {
			var aRY = this.aRU(),
				eF = ao.hG;
			b5.fillStyle = b7.a1s, b5.fillRect(0, eF * aRY.aRV, ao.ap, eF * aRY.aRX)
		}, aRN.style.position = "absolute", aRN.style.top = "0", aRN.style.left = "0", aRN.style.width = "100%", aRN.style.height = "100%", aRO.style.position = "absolute", aRO.style.top = "0", aRO.style.left = "0", aRO.style.width = "100%", aRO
		.style.display = "flex", aRO.style.backgroundColor = b7.a1s, aRP.style.position = "absolute", aRP.style.left = "0", aRP.style.width = "100%", v.w.no(aRP), aRQ.style.height = aRQ.style.maxHeight = "100%", aOD.style.position = "absolute", aOD
		.style.width = "100%", aOD.style.backgroundColor = b7.a1s,
		function() {
			for (var q = 0; q < pR.length; q++) pR[q].button.style.height = "100%", pR[q].button.style.padding = "0.0em 0.9em"
		}();
	for (var q = 0; q < pR.length; q++) aRQ.appendChild(pR[q].button);
	aRO.appendChild(function() {
		var aRT = document.createElement("h1");
		return aRT.textContent = title, aRT.style.margin = "auto", aRT.style.fontSize = 18 <= title.length && ao.ar > ao.ap ? "1.8em" : "2.3em", aRT.style.fontFamily = "Arial Black, system-ui", aRT
	}()), aRP.appendChild(aRQ), !1 !== aRM && (aRN.appendChild(aOD), aRN.appendChild(aRO), aRN.appendChild(aRP))
}

function aHR() {
	this.aIL = new aBE, this.e = function() {
		this.aIL.resize()
	}
}

function a0e() {
	this.zZ = null, this.aLL = null, this.aLN = null, this.e = function() {
		this.aRa = [L(232), L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241), L(242), L(243), L(244), L(245), L(246), L(247), L(248), L(249), L(250), L(251), L(252), L(253), L(254), L(255), "Mare Nostrum"];
		var aRb = [120, 105, 92],
			cos = [12, 12, 60],
			aRc = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aRd = [140, 130, 120],
			aRe = [12, 12, 76],
			aRf = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aRg = [130, 117, 106],
			aRh = [12, 12, 68],
			aRi = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.zZ = new Array(au.a0b + 1), __fx.customLobby.setMapInfo(this.zZ), this.zZ[0] = {
			ap: 230,
			ar: 230,
			a0j: 1e3,
			a0k: 2e3,
			zg: 173
		}, this.zZ[1] = {
			ap: 800,
			ar: 800,
			a0j: 100,
			a0k: 50,
			zg: 43
		}, this.zZ[2] = {
			ap: 512,
			ar: 512,
			a0j: 128,
			a0k: 32,
			zg: 0
		}, this.zZ[3] = {
			ap: 960,
			ar: 960,
			a0j: 60,
			a0k: 8,
			zg: 0
		}, this.zZ[4] = {
			ap: 900,
			ar: 900,
			a0j: 100,
			a0k: 5,
			zg: 0
		}, this.zZ[5] = {
			ap: 1e3,
			ar: 1e3,
			a0j: 100,
			a0k: 40,
			zg: 0
		}, this.zZ[6] = {
			ap: 1e3,
			ar: 1e3,
			a0j: 100,
			a0k: 20,
			zg: 0
		}, this.zZ[7] = {
			ap: 1024,
			ar: 1024,
			a0j: 128,
			a0k: 32,
			zg: 0
		}, this.zZ[8] = {
			ap: 820,
			ar: 820,
			a0j: 200,
			a0k: 100,
			zg: 0
		}, this.zZ[9] = {
			ap: 1024,
			ar: 1024,
			a0j: 128,
			a0k: 32,
			zg: 0
		}, this.zZ[10] = {
			za: aRd,
			zb: aRe,
			zc: aRf
		}, this.zZ[11] = {
			za: aRg,
			zb: aRh,
			zc: aRi
		}, this.zZ[12] = {
			za: aRg,
			zb: aRh,
			zc: aRi
		}, this.zZ[13] = {
			za: aRb,
			zb: cos,
			zc: aRc
		}, this.zZ[14] = {
			za: aRb,
			zb: cos,
			zc: aRc
		}, this.zZ[15] = {
			za: aRd,
			zb: aRe,
			zc: aRf
		}, this.zZ[16] = {
			za: aRd,
			zb: aRe,
			zc: aRf
		}, this.zZ[17] = {
			za: aRb,
			zb: cos,
			zc: aRc
		}, this.zZ[18] = {
			za: aRg,
			zb: aRh,
			zc: aRi
		}, this.zZ[19] = {
			za: aRb,
			zb: cos,
			zc: aRc
		}, this.zZ[20] = {
			ap: 1024,
			ar: 1024,
			a0j: 128,
			a0k: 32,
			zg: 0
		}, this.zZ[21] = {
			ap: 940,
			ar: 940,
			a0j: 80,
			a0k: 8,
			zg: 0
		}, this.zZ[22] = {
			za: aRg,
			zb: aRh,
			zc: aRi
		}, this.zZ[23] = {
			za: aRd,
			zb: aRe,
			zc: aRf
		}, this.zZ[24] = {
			za: [157, 136, 117],
			zb: [16, 13, 68],
			zc: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aRl: "[OG] Neutronian"
		};
		for (var q = 0; q < au.a0b; q++) this.zZ[q].name = this.aRa[q];
		this.zZ[au.a0b] = {
			name: ""
		}, this.aLL = new Uint8Array(12);
		for (q = 0; q < 10; q++) this.aLL[q] = q;
		for (this.aLL[10] = 20, this.aLL[11] = 21, this.aLN = new Uint8Array(au.a0c), q = 0; q < 10; q++) this.aLN[q] = 10 + q;
		this.aLN[10] = 22, this.aLN[11] = 23, this.aLN[12] = 24
	}
}

function a46() {
	var aRm = 0;

	function aRr(bJ, id) {
		console.log(bJ), aRm || (id ? 1 === id ? c5.aRo = L(257) + ": " + bJ : dk.e3(4, 3, new iD(L(258), bJ, 1)) : dk.e3(4, 3, new iD("⚠️ " + L(256), bJ, 1)))
	}
	this.eJ = function(bJ, aRn) {
		var aY, c4;
		return aRm = aRn, bh.bi.p6(bh.bi.p4(bh.bi.p2(bJ))), c5.aRo = "", !! function() {
			if (eM.size < 10) aRr("File Too Small");
			else {
				var aRt = eM.eN(12),
					lE = (aRt !== jV.rVersion && (lE = "Incompatible Version   Required: " + jV.rVersion, aRr(lE = (lE += "   Found: " + aRt) + ("   Compatible at " + bZ.af.aIp() + "/" + aRt), 1)), eM.eN(12)),
					aRu = eM.eN(31);
				if (aRu !== eM.size) aRr("Size Error: Stated Size " + aRu + " Actual Size " + eM.size);
				else if (function(ar, aRt) {
						for (var c9 = eM.ba, n = eM.size, aHu = aRt, q = 3; q < n; q++) aHu = aHu + c9[q] & 4095;
						return aHu === ar || (aRr("Hash Error: " + aHu + " " + ar + " " + n), !1)
					}(lE, aRt)) return 1
			}
			return
		}() && (aY = eM, (c4 = f.data = new iq).mapType = aY.eN(2), c4.mapProceduralIndex = aY.eN(8), c4.mapRealisticIndex = aY.eN(8), c4.mapSeed = aY.eN(14), c4.mapName = aY.qE(5), 2 === c4.mapType && aY.qF(), c4.passableWater = aY.eN(1), c4
			.passableMountains = aY.eN(1), c4.playerCount = aY.eN(10), c4.humanCount = aY.eN(10), c4.selectedPlayer = aY.eN(9), c4.gameMode = aY.eN(1), c4.playerMode = aY.eN(2), c4.battleRoyaleMode = aY.eN(2), c4.numberTeams = aY.eN(4), c4
			.isZombieMode = aY.eN(1), c4.isContest = aY.eN(1), c4.isReplay = aY.eN(1), c4.elo = aY.q9(2, 14, 2), c4.colorsType = aY.eN(1), c4.colorsPersonalized = aY.eN(1), c4.colorsData = aY.q9(10, 18, 512), c4.selectableColor = aY.eN(1), c4
			.teamPlayerCount = aY.q9(4, 10, 9), c4.neutralBots = aY.eN(1), c4.botDifficultyType = aY.eN(2), c4.botDifficultyValue = aY.eN(4), c4.botDifficultyTeam = aY.q9(4, 4, 9), c4.botDifficultyData = aY.q9(10, 4, 512), c4.spawningType =
			aY.eN(2), c4.spawningSeed = aY.eN(14), c4.spawningData = aY.q9(11, 12, 1024), c4.selectableSpawn = aY.eN(1), c4.playerNamesType = aY.eN(2), c4.playerNamesData = aY.qC(10, 5, 512), c4.selectableName = aY.eN(1), c4.aIncomeType = aY
			.eN(2), c4.aIncomeValue = aY.eN(8), c4.aIncomeData = aY.q9(10, 8, 512), c4.tIncomeType = aY.eN(2), c4.tIncomeValue = aY.eN(8), c4.tIncomeData = aY.q9(10, 8, 512), c4.iIncomeType = aY.eN(2), c4.iIncomeValue = aY.eN(8), c4
			.iIncomeData = aY.q9(10, 8, 512), c4.sResourcesType = aY.eN(2), c4.sResourcesValue = aY.eN(11), c4.sResourcesData = aY.q9(10, 11, 512), c4.ir = aY.q9(10, 30, 0), !! function() {
				var aY = eM,
					aDV = aY.eN(5),
					aRw = aY.eN(30),
					aRx = aY.eN(30);
				if (aRw + aRx > 8 * aY.size) return void aRr("Corrupted File");
				return function(n) {
						var aS0 = new Uint8Array(n),
							aS1 = new Uint16Array(n),
							aS2 = new Uint32Array(n),
							aS3 = new Uint32Array(n);
						jr.kG.yW = aS0, jr.kG.yX = aS1, jr.kG.yY = aS2, jr.kG.yZ = aS3;
						for (var q = 0; q < n; q++) {
							var id = eM.eN(4);
							aS0[q] = id, aS1[q] = eM.eN(9), 0 === id ? aS2[q] = eM.eN(22) : 1 === id ? (aS2[q] = eM.eN(10), aS3[q] = eM.eN(10)) : 2 === id ? (aS2[q] = eM.eN(10), aS3[q] = eM.eN(9)) : 3 === id ? (aS2[q] = eM.eN(10), aS3[q] = eM
								.eN(27)) : 4 === id ? (aS2[q] = eM.eN(10), aS3[q] = eM.eN(16)) : 5 === id || 6 === id ? aS2[q] = eM.eN(10) : 7 === id ? aS2[q] = eM.eN(1) : 10 === id && (aS2[q] = eM.eN(20), aS3[q] = eM.eN(22))
						}
					}(aRw),
					function(n, aDV) {
						var ya = new Uint8Array(n),
							yb = new Array(n);
						yb.fill(0), jr.kG.ya = ya, jr.kG.yb = yb;
						for (var q = 0; q < n; q++) ya[q] = eM.eN(1), yb[q] = eM.eN(aDV)
					}(aRx, aDV), 1
			}()) && (eM.t < 8 * eM.size - 13 || eM.t > 8 * eM.size ? (aRr("Out Of Bounds Error: " + eM.t + " " + 8 * eM.size), !1) : (jr.kG.kH = bJ, 2 !== f.data.mapType || (aRr("Load base64 image...", 2), aRn)))
	}, this.qM = function(qK, aRs) {
		var k = document.createElement("canvas"),
			y = k.getContext("2d");
		if (k.width = qK.width, k.height = qK.height, y.drawImage(qK, 0, 0), f.data.canvas = k, aRm || aRs) return f.j6 ? void 0 : (f.data.mapType = 2, dk.i6(), void dk.e3(19));
		jr.yr()
	}
}

function aGw() {
	var canvas, fY, aD, aE, dK, aS4, gap, aS5, fontSize, aS6, ez, aS7, aS8, aS9, aSA, aSB, aSC, aSD;

	function aSI() {
		fY.clearRect(0, 0, fv.ap, fv.ar), fY.fillStyle = b7.cF, fY.fillRect(0, 0, fv.ap, fv.ar), fY.fillStyle = b7.r5, a3 = 0 < aSB ? aSB : aS8[4] / 1e4, fY.fillRect(0, fv.ar - dK - 1, Math.floor(a3 * fv.ap), dK), fY.fillStyle = b7.b9, fY.fillRect(0,
			0, fv.ap, 1), fY.fillRect(0, 0, 1, fv.ar), fY.fillRect(fv.ap - 1, 0, 1, fv.ar), fY.fillRect(0, fv.ar - 1, fv.ap, 1), fY.fillRect(0, fv.ar - dK - 1, fv.ap, 1);
		for (var a3, aSJ, d8 = 0, q = 0; q < aS7.length; q++) aS9[q] ? (v.w.textAlign(fY, 0), aSJ = Math.floor((aS4 - dK + 2 * aS5) * (q - d8 + 1) / (aS7.length + 1) - .7 * aS5), fY.fillText(aS7[q], gap, aSJ), v.w.textAlign(fY, 2), 5 === q && 0 !==
			cD.ft[f.al] && cD.mY[f.al] >= jZ.su(f.al) ? (fY.fillStyle = b7.aK0, fY.fillText(aSF(q), fv.ap - gap, aSJ), fY.fillStyle = b7.b9) : fY.fillText(aSF(q), fv.ap - gap, aSJ)) : d8++
	}

	function aSF(q) {
		return q < 3 ? aS8[q].toString() : 3 === q || 4 === q || 5 === q ? v.bB.fL(aS8[q] / 100, 2) : q < 7 ? v.bB.bC(aS8[q]) : q === 7 ? fv.fw(aS8[7]) : q === 8 ? __fx.utils.getMaxTroops(cD.fh, f.al) : __fx.utils.getDensity(f.al)
	}

	function aSE() {
		cD.fh[f.al] !== aS8[6] && (aS8[6] = cD.fh[f.al], aS6++)
	}
	this.e = function() {
		aSB = aSC = 0, (ez = new Array(8))[0] = L(259), ez[1] = f.j5 ? L(142) : L(260), ez[2] = L(261), ez[3] = L(262), ez[4] = L(168), ez[5] = L(13, 0, "Interest"), ez[6] = L(12), ez[7] = L(263),
			ez.push("Max Troops", "Density"), // add ez
			(aS7 = new Array(ez.length)).fill(""), (aS8 = new Array(ez.length))[0] = f.j5 ? 0 : f.iy, aS8[1] = f.j5 ? cH.cI : f.j0, aS8[2] = f.j1, aS8[3] = 0, aS8[4] = fD.fE(1e4 * cD.fh[0], Math.max(f.j7, 1)), aS8[5] = 0 === f.data.iIncomeType ?
			700 : 1 === f.data.iIncomeType ? fD.fE(700 * f.data.iIncomeValue, 64) : fD.fE(700 * f.data.iIncomeData[f.al], 64), aS8[6] = 0, aSE(), aS8[7] = 0, aSA = aSF(6), (aS9 = new Array(ez.length)).fill(!0), aSD = 0, aSD = f.j5 ? (aS9[0] = !1,
				aS9[2] = !1, aS9[3] = !1, 3) : (aS9[3] = !1, 1), aS6 = 0, this.resize()
	}, this.resize = function() {
		this.ap = Math.floor((cu.cv.cw() ? .1646 : .126) * 1.25 * ao.cx), this.ar = Math.floor(1.18 * this.ap), dK = Math.floor(.04 * this.ap), gap = Math.floor(.035 * this.ap), aS5 = .04 * this.ap, aS4 = this.ar, this.ar -= Math.floor(aSD * (
			this.ar - 2 * dK) / ez.length), fontSize = Math.floor(.7 * (aS4 - dK) / ez.length);
		var ck = v.w.bA(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.ap, canvas.height = this.ar,
			function(ck, ap) {
				for (var q = 0; q < aS7.length; q++) aS7[q] = v.fY.fZ(ez[q], ck, ap)
			}((fY = canvas.getContext("2d", {
				alpha: !0
			})).font = ck, .575 * this.ap), v.w.textBaseline(fY, 1), fY.lineWidth = 1, this.aSH(), this.sq(), jy.sq(), aSI()
	}, this.sq = function() {
		aD = ao.ap - this.ap - f7.gap
	}, this.we = function() {
		aE = f7.gap
	}, this.aSH = function() {
		aE = f7.gap + (jy.sp() && 0 !== cD.ft[f.al] && !f.gI ? jy.ar + f7.gap : 0)
	}, this.kD = function(x5) {
		(x5 || 100 <= aS6) && (aS6 = 0, aSI())
	}, this.a4G = function() {
		return aS8[7]
	}, this.fw = function(value) {
		var aL = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * aL) / 1e3);
		return value < 10 ? aL + ":0" + value : aL + ":" + value
	}, this.bu = function() {
		var fc, per;
		aS9[0] && f.iz - f.j1 !== aS8[0] && (aS8[0] = f.iz - f.j1, aS6++), cH.cI - aS8[0] !== aS8[1] && (aS8[1] = cH.cI - aS8[0], aS6++), this.aRC(), (fc = jZ.pi(f.al)) !== aS8[5] && (aS8[5] = fc, aS6++), aSE(), aS8[7] += c0.fs, fc = aSF(7),
			aSA !== fc && (aSA = fc, aS6 += 100), fc = f.j ? cN.hV() : cD.fh[cP[0]], per = fD.fE(1e4 * fc, Math.max(f.j7, 1)), aS8[3] = fc, aS8[4] !== per && (aS6++, aS8[4] = per), 8 === f.jA && function() {
				for (var q = 0; q < 2; q++)
					if (!v.c2.g4(q)) return jQ.rP.rR(), 1;
				return
			}() || aS8[3] < f.j7 || ! function() {
				for (var q = cH.cI - 1; 0 <= q; q--)
					if (0 < cD.m6[cH.cK[q]].length) return;
				return 1
			}() || ae.td.wB().length || f.j && cN.hV(1) < f.j7 || jQ.rP.rR()
	}, this.aRC = function() {
		aS9[2] && f.j1 !== aS8[2] && (aS8[2] = f.j1, aS6 += 2 === f.j6 ? 100 : 1)
	}, this.a3i = function() {
		return aS8[3] === f.j7
	}, this.aBo = function(q) {
		var tg, aSS, d8;
		return 2 !== f.j6 && (q % 2 == 1 && (jw.kD(1, 1), c0.d1 = !0), q === f.jF ? (aSB = 0, aSI(), !1) : (-1 !== q || 0 !== aSC) && (aSS = aSB, aSB = f.g1 ? q / f.jF : (d8 = performance.now(), 0 <= q && (tg = d8 - 392 * q, aSC = 0 === q || tg <
			aSC ? tg : aSC), 1 < (aSB = (d8 - aSC) / (392 * f.jF)) ? 1 : aSB), aSI(), aSB !== aSS))
	}, this.aR = function() {
		b5.drawImage(canvas, aD, aE)
	}
}

function aST() {
	var dY, dZ, ds;

	function aSa() {
		for (var colors = new Array(11), q = 0; q < 11; q++) {
			var a8 = bK.buffer.data[163 + q].value.split(",");
			colors[q] = new Uint8Array(3);
			for (var ca = 0; ca < 3; ca++) ca < a8.length && (colors[q][ca] = Number(a8[ca]))
		}
		return colors
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(211), [new dd("⬅️ " + L(5), function() {
		dk.dm()
	})]), dZ = new df(dY.dg, ((ds = []).push(function() {
		var dx = new dy;
		return dx.dz(L(264)), dx.op(bZ.af.iE("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", dx.op("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), dx
	}()), ds.push(function() {
		var dx = new dy,
			ht = (dx.dz(L(265)), bK.buffer.data[174].value),
			q2 = dx.iY(ht.length + " / 180"),
			aSZ = (q2.style.textAlign = "center", new eA(0, 1, function(e8) {
				var e8 = e8.target.value,
					hd = e8.length;
				q2.textContent = hd + " / 180", hd <= 180 && bK.iF.bH(174, e8)
			}));
		return aSZ.e8.rows = 6, aSZ.e8.style.fontSize = "1em", aSZ.eB(ht), dx.e4(aSZ), dx
	}()), ds.push(function() {
		var dx = new dy;
		dx.dz(L(39));
		for (var q = 0; q < 11; q++) {
			var aY = dx.e4(new e7(bK.buffer.data[163 + q]));
			q && (aY.e8.style.marginTop = "0.6em")
		}
		return dx.e4(new e9([new dd(L(266), function() {
			for (var data = bK.buffer.data, q = 163; q < 174; q++) data[q] && bK.buffer.bI(q, data[q].bP);
			dk.dm(), dk.dl()[31] = null, dk.e3(31)
		}).button])), dx
	}()), ds.push(function() {
		var dx = new dy;
		return dx.dz("Targeting"), dx.op(L(267)), dx.e4(new e7(bK.buffer.data[175], 0, 0)), dx
	}()), ds.push(function() {
		var dx = new dy;
		return dx.dz(L(207)), dx.e4(new e9([new dd(L(136), function() {
			(new kQ).show(bK.buffer.data[174].value, aSa(), -1)
		}).button])), dx
	}()), ds.push(function() {
		var dx = new dy,
			aSb = (dx.dz(L(268)), dx.op(L(269)), new e7(bK.buffer.data[176], 1, 0)),
			aSc = (dx.e4(aSb), new dd(L(270), function(e8) {
				return px.button.textContent === L(87) && bZ.af.kU(0) && (v.w.kr(e8), pw(), bZ.q0.s6(bK.buffer.data[176].value, aSa(), bK.buffer.data[175].value, bK.buffer.data[174].value)), !0
			}, 1)),
			pw = function() {
				px.button.textContent = L(86), aSc.pz(1), aSc.button.style.color = b7.b9
			},
			px = new dd(L(86), function(e8) {
				return e8.textContent === L(86) ? (e8.textContent = L(87), aSc.pz(0), aSc.button.style.color = b7.l6) : pw(), !0
			});
		return dx.e4(new e9([px.button, aSc.button])), dx
	}()), ds))
}

function a3E() {
	this.aSd = 32, this.aD = 0, this.aE = 0, this.xb = 0, this.aSe = 0, this.aSf = 4, this.xa = null, this.aSg = new Int16Array(9), this.e = function() {
		this.xb = 1 + fD.fE(au.av - 1, this.aSd), this.aSe = 1 + fD.fE(au.ef - 1, this.aSd), this.xa = new Array(this.xb * this.aSe), v.aN.aEs(this.xa);
		var aD, aE, aSg = this.aSg,
			ap = this.xb;
		for (aD = -1; aD <= 1; aD++)
			for (aE = -1; aE <= 1; aE++) aSg[3 * (1 + aE) + 1 + aD] = aE * ap + aD
	}, this.a3t = function(aSi, q) {
		return this.xa[q].push(aSi), this.xa[q].length - 1
	}, this.aSj = function(aSk, aSl, aSm) {
		var aSn, aSo, aSl = cX.xZ(aSl),
			aSm = cX.xZ(aSm);
		return aSl === aSm ? aSk : (aSn = this.xa[aSl].pop(), this.xa[aSl].length === aSk ? this.a3t(aSn, aSm) : (aSo = this.xa[aSl][aSk], this.xa[aSl][aSk] = aSn, ae.af.aJC[aSn] = aSk, this.a3t(aSo, aSm)))
	}
}

function aSp() {
	var dY, dZ, da;

	function de() {
		di(), 3 !== f.data.botDifficultyType || v.aN.dr(f.data.botDifficultyData) || (f.data.botDifficultyType = 0), 3 !== f.data.botDifficultyType && (f.data.botDifficultyData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		3 === f.data.botDifficultyType && v.aN.dn(da.dp(), f.data.botDifficultyData, jn.oq.length - 1)
	}

	function aSq(ds, t) {
		var dx = new dy,
			value = (dx.dz(t < 0 ? L(40) : L(271) + " " + l.uj[t % 9]), 0 <= t && (dx.op(L(37) + ": " + f.data.teamPlayerCount[t]).style.marginBottom = "1em"), t < 0 ? f.data.botDifficultyValue : f.data.botDifficultyTeam[t]);
		dx.e1(new e2({
			e0: jn.oq,
			value: value
		}, function(h2) {
			t < 0 ? f.data.botDifficultyValue = h2 : f.data.botDifficultyTeam[t] = h2
		})), ds.push(dx)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(40), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, function() {
		var ds = [];
		if (function(ds) {
				var dx = new dy,
					e0 = (dx.dz(L(6)), [L(41), L(42), L(43), L(9)]),
					value = f.data.botDifficultyType;
				0 === f.data.gameMode && (value = Math.min(value, 2), e0.splice(2, 1));
				dx.e1(new e2({
					e0: e0,
					value: value
				}, function(t) {
					di(), f.data.botDifficultyType = t, 0 === f.data.gameMode && 2 === t && (f.data.botDifficultyType = 3), 3 !== f.data.botDifficultyType || f.data.botDifficultyData || (f.data.botDifficultyData = new Uint8Array(f
						.g)), 2 !== f.data.botDifficultyType || f.data.botDifficultyTeam || (f.data.botDifficultyTeam = new Uint8Array(9)), dk.e3(25)
				})), ds.push(dx)
			}(ds), 0 === f.data.botDifficultyType) aSq(ds, -1);
		else if (2 === f.data.botDifficultyType)
			for (var q = 0; q < f.data.teamPlayerCount.length; q++) f.data.teamPlayerCount[q] && aSq(ds, q);
		else 3 === f.data.botDifficultyType && ! function(ds) {
			var dx = new dy;
			dx.dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.botDifficultyData, 8)), dx.e4(da), ds.push(dx)
		}(ds);
		return ds
	}())
}

function aOb() {
	var aSr = new Uint16Array(f.g);

	function aSy(player, aSw) {
		for (var n = a9.eR[0], ea = a9.ea, aGa = -1, v7 = f.g, q = 0; q < n; q++) {
			var aH, c9 = ea[q];
			gY.gf(player, c9) && (aH = cX.vV(aSw, cX.xf(c9)), -1 === aGa || aH < aGa) && (aGa = aH, v7 = c9)
		}
		return v7
	}

	function aT0(aSx, aSw) {
		if (aSx === f.g) return 0;
		var m1 = cD.m1[aSx],
			aL = m1.length;
		if (0 === aL) return 0;
		for (var n = Math.min(aL, 10), v7 = 0, aGa = cX.vV(m1[v7] >> 2, aSw), q = 0; q < n; q++) {
			var h2 = jX.tI(aL),
				aH = cX.vV(m1[h2] >> 2, aSw);
			aH < aGa && (aGa = aH, v7 = h2)
		}
		return m1[v7] >> 2
	}

	function aT1(player, aSw, uA, aT4) {
		var aT5;
		(aT4 === f.g || (aT5 = cX.xf(uA), aT4 = cX.xf(aT4), cX.vV(aSw, aT5) < cX.vV(aSw, aT4))) && (aSr[player] = uA)
	}
	this.e = function() {
		aSr.fill(f.g)
	}, this.aOi = function() {
		if (c0.c1() % 109 == 9 && !(cH.cI < 20) && f.j && !(cN.hV() < fD.fE(8 * f.j7, 10))) {
			var hY = cN.cO();
			if (l.m[hY]) {
				cN.he(hY);
				var n = a9.eR[0];
				if (0 !== n)
					for (var a8 = a9.eb, cK = cH.cK, cI = cH.cI, aSs = aSr, h2 = jX.tI(n), q = 0; q < cI; q++) {
						var gT = cK[q],
							wF = a8[h2];
						v.c2.wD(gT, wF) && 512 === aSs[gT] && (aSs[gT] = wF, h2 = (h2 + 1) % n)
					}
			}
		}
	}, this.bu = function(player) {
		var aSw, aSz, aSx, aSt = function(player) {
			var uA = aSr[player];
			if (uA !== f.g) {
				if (v.c2.c7(uA) && cD.m1[uA]) return uA;
				aSr[player] = f.g
			}
			return f.g
		}(player);
		return function(player) {
			for (var cJ = cH.cK, aL = cH.cI, n = Math.min(aL, aL < 17 && 5 === jX.tI(20) ? 1 : 16), hF = jX.tI(aL), ea = a9.ea, m1 = cD.m1, hd = 0, q = 0; q < n; q++) {
				var c9 = cJ[(q + hF) % aL];
				c9 !== player && m1[c9].length && (ea[hd++] = c9)
			}
			a9.eR[0] = hd
		}(player), 0 !== a9.eR[0] && (0 < (aSz = aT0(aSx = aSy(player, aSw = cX.xg(player)), aSw)) && ae.a0Q.a3S(player, ae.td.vR(aSz, aSw)) ? (aT1(player, aSw, aSx, aSt), !0) : 0 < (aSx = function(player, aSw) {
			for (var n = a9.eR[0], ea = a9.ea, aSs = aSr, hF = 0, q = 0; q < n; q++) {
				var c9 = ea[q],
					c9 = aSs[c9];
				c9 !== f.g && v.c2.c7(c9) && player !== c9 && gY.gf(player, c9) && (ea[hF++] = c9)
			}
			return 0 !== (a9.eR[0] = hF) ? aT0(aSy(player, aSw), aSw) : 0
		}(player, aSw)) && ae.a0Q.a3S(player, ae.td.vR(aSx, aSw)) ? (aT1(player, aSw, a6.gU(aSx << 2), aSt), !0) : !!(0 < (aSz = aT0(aSt, aSw)) && ae.a0Q.a3S(player, ae.td.vR(aSz, aSw))))
	}
}

function aT7() {
	this.a2F = function(t, bM) {
		return Number(this.a2G(t, bM))
	}, this.a2G = function(t, bM) {
		var ff = null;
		return 0 === cu.id ? cu.a6j && (ff = cu.a6j.getItem((bM ? "v" : "d") + t)) : 1 === cu.id ? ff = cu.qc.loadString((bM ? 1e3 : 2e3) + t) : 2 === cu.id && (ff = cu.a6k[(bM ? "v" : "d") + t]), ff && 0 !== ff.length ? ff : null
	}, this.a2V = function(n, aT8) {
		var a8 = [],
			aT9 = aT8 ? "e" : "l";
		if (0 === cu.id) {
			if (cu.a6j)
				for (q = 0; q < n; q++) a8.push(cu.a6j.getItem(aT9 + q))
		} else if (1 === cu.id)
			for (var aTA = aT8 ? 5e3 : 3e3, q = 0; q < n; q++) a8.push(cu.qc.loadString(aTA + q));
		else if (2 === cu.id)
			for (q = 0; q < n; q++) a8.push(cu.a6k[aT9 + q]);
		return a8
	}, this.save = function(t, value, bM) {
		var aBx = (bM ? "v" : "d") + t;
		if (0 === cu.id) {
			if (cu.a6j && bK.buffer.data[140].value) try {
				cu.a6j.setItem(aBx, value)
			} catch (e8) {
				console.log(e8)
			}
		} else 1 === cu.id ? cu.qc.saveString((bM ? 1e3 : 2e3) + t, value) : 2 === cu.id && (cu.a6k[aBx] = value, cu.a6l.postMessage(aBx + " " + value))
	}, this.a2d = function(a8, aT8) {
		var n = a8.length,
			aT9 = aT8 ? "e" : "l";
		if (0 === cu.id) {
			if (cu.a6j && bK.buffer.data[140].value) try {
				for (q = 0; q < n; q++) cu.a6j.setItem(aT9 + q, a8[q])
			} catch (e8) {
				console.log(e8)
			}
		} else if (1 === cu.id)
			for (var aTA = aT8 ? 5e3 : 3e3, q = 0; q < n; q++) cu.qc.saveString(aTA + q, a8[q]);
		else if (2 === cu.id)
			for (q = 0; q < n; q++) cu.a6k[aT9 + q] = a8[q], cu.a6l.postMessage(aT9 + q + " " + a8[q])
	}
}

function aHb() {
	this.aTB = [L(272), L(273), L(274), L(275), L(276), L(277), L(278), L(279), L(280), L(281), L(282), L(283), L(284), L(285), L(286), L(287)];
	var aTC = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aFB = new Array(aTC.length), this.e = function() {
		var a8 = bK.buffer.data[155].value.split(";"),
			aL = a8.length;
		if (function() {
				for (var n = aTC.length, q = 0; q < n; q++) a1a.aFB[q] = aTC[q]
			}(), !(aL > aTC.length))
			for (var q = 0; q < aL; q++) a8[q].length && (this.aFB[q] = a8[q])
	}, this.aTE = function(t, code) {
		for (var aFB = this.aFB, aTF = aTC, bJ = (aFB[t] = code, ""), n = aFB.length, aTG = [], q = 0; q < n; q++) aTG.push(aFB[q] === aTF[q] ? "" : aFB[q]);
		n--;
		for (q = 0; q < n; q++) bJ += aTG[q] + ";";
		bK.iF.bH(155, bJ += aTG[n])
	}, this.aTH = function() {
		bK.iF.bH(155, ""), this.e()
	}, this.eF = function(code, t) {
		return code === this.aFB[t] || code === this.aFB[t + 1]
	}
}

function aHT() {
	this.a7I = 0, this.gap = 0, this.a1x = 0, this.hI = 0, this.e = function() {
		this.resize()
	}, this.resize = function() {
		this.a7I = .0022 * v.w.hB(.5) * ao.cx, this.a1x = this.a7I / ao.hG, this.gap = Math.max(Math.floor((cu.cv.cw() ? .0114 : .01296) * ao.cx), 2), this.hI = this.gap / ao.hG
	}
}

function a7U() {
	function aTK() {
		dk.a4H(29) && (la.af.yC && 1 === la.af.yD[2] && dk.a4H(29).aTO(), la.af.yC = 0, dk.a4H(29).aTP(), dk.a4H(29).aTQ(), la.tb.tV())
	}
	this.lm = new Array(4), this.yD = [0, 0, 1, 0], this.yC = 0, this.aTI = [0, 0], this.e = function() {
		for (var q = 0; q < this.lm.length; q++) this.lm[q] = new a6T;
		this.yD[0] = bK.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.lm), __fx.lobbyReminders.setPopupHandler(function(text) {
			la.message.a4s({
				id: 7,
				lE: text
			})
		})
	}, this.aTJ = function() {
		aTK(), la.yA.e(), __fx.lobbyReminders.check()
	}, this.aTL = function() {
		la.yA.aTL();
		for (var q = 0; q < la.af.lm.length; q++) {
			var aQa = la.af.lm[q];
			0 === aQa.ns ? aQa.a6c = 0 : (aQa.a6Z = Math.max(aQa.a6Z - aQa.a6c % 2, 0), aQa.a6c++)
		}
		aTK(), __fx.lobbyReminders.check()
	}, this.aTR = function(lS) {
		this.yD[0] !== lS || this.yD[2] || dk.a4H(29).aTS()
	}
}

function aHY() {
	this.mH = function() {
		for (var aD, aE, q = mG - 1; 0 <= q; q--) aD = fD.fE(mb[q], 4) % au.av, aE = fD.fE(mb[q], 4 * au.av), cD.sS[mC] = Math.min(aD, cD.sS[mC]), cD.sT[mC] = Math.min(aE, cD.sT[mC]), cD.sU[mC] = Math.max(aD, cD.sU[mC]), cD.sV[mC] = Math.max(aE,
			cD.sV[mC])
	}, this.a8e = function() {
		var f6, c9, q, n = cD.m6[mC].length,
			gy = a6.gy;
		loop: for (q = n - 1; 0 <= q; q--) {
			for (f6 = 3; 0 <= f6; f6--)
				if (c9 = cD.m6[mC][q] + gy[f6], a6.cT(c9) || a6.h3(c9) && a6.gU(c9) !== mC) {
					a6.aCm(cD.m6[mC][q], mC);
					continue loop
				} cD.m6[mC][q] = cD.m6[mC][n - 1], cD.m6[mC].pop(), n--
		}
	}, this.a8f = function() {
		var player = mC,
			gz = cD.gz,
			m1 = cD.m1,
			m4 = cD.m4,
			n = gz[player].length,
			gy = a6.gy;
		loop: for (var q = n - 1; 0 <= q; q--) {
			for (var aTT = !1, aTU = !1, f6 = 3; 0 <= f6; f6--) {
				var c9 = gz[player][q] + gy[f6];
				if (a6.aJN(c9, player)) continue loop;
				aTT = aTT || a6.vU(c9), aTU = aTU || a6.aQ9(c9)
			}
			aTT ? m1[player].push(gz[player][q]) : aTU ? m4[player].push(gz[player][q]) : a6.aCo(gz[player][q], player), gz[player][q] = gz[player][n - 1], gz[player].pop(), n--
		}
	}, this.lz = function() {
		cD.fh[lw] -= mG
	}, this.m0 = function(border) {
		for (var n = border.length, q = n - 1; 0 <= q; q--) a6.wo(lw, border[q]) || (border[q] = border[n - 1], border.pop(), n--)
	}, this.m5 = function(border) {
		for (var n = border.length, q = n - 1; 0 <= q; q--) !a6.wo(lw, border[q]) && a6.u0(border[q]) && (border[q] = border[n - 1], border.pop(), n--)
	}, this.m7 = function(border) {
		for (var f6, c9, n = border.length, gy = a6.gy, q = n - 1; 0 <= q; q--)
			for (f6 = 3; 0 <= f6; f6--)
				if (c9 = border[q] + gy[f6], a6.aJN(c9, lw)) {
					cD.gz[lw].push(border[q]), border[q] = border[n - 1], border.pop(), n--;
					break
				}
	}, this.m8 = function() {
		for (var f6, c9, gy = a6.gy, q = mG - 1; 0 <= q; q--)
			for (f6 = 3; 0 <= f6; f6--) c9 = mb[q] + gy[f6], a6.u9(lw, c9) && a6.aQD(c9) && (cD.gz[lw].push(c9), a6.mc(c9, lw))
	}, this.m9 = function() {
		var aD, aE;
		loop: for (; cD.sT[lw] < cD.sV[lw];) {
			for (aD = cD.sU[lw]; aD >= cD.sS[lw]; aD--)
				if (a6.wo(lw, 4 * (cD.sT[lw] * au.av + aD))) break loop;
			cD.sT[lw]++
		}
		loop: for (; cD.sT[lw] < cD.sV[lw];) {
			for (aD = cD.sU[lw]; aD >= cD.sS[lw]; aD--)
				if (a6.wo(lw, 4 * (cD.sV[lw] * au.av + aD))) break loop;
			cD.sV[lw]--
		}
		loop: for (; cD.sS[lw] < cD.sU[lw];) {
			for (aE = cD.sV[lw]; aE >= cD.sT[lw]; aE--)
				if (a6.wo(lw, 4 * (aE * au.av + cD.sS[lw]))) break loop;
			cD.sS[lw]++
		}
		loop: for (; cD.sS[lw] < cD.sU[lw];) {
			for (aE = cD.sV[lw]; aE >= cD.sT[lw]; aE--)
				if (a6.wo(lw, 4 * (aE * au.av + cD.sU[lw]))) break loop;
			cD.sU[lw]--
		}
	}, this.gf = function(player, uA) {
		return 0 === l.cR[player] || l.cR[player] !== l.cR[uA]
	}, this.gZ = function(player) {
		for (var q, hF, n = cD.gz[player].length, gy = a6.gy, f6 = 3; 0 <= f6; f6--)
			for (hF = gy[f6], q = 0; q < n; q++)
				if (a6.cT(cD.gz[player][q] + hF)) return !0;
		return !1
	}, this.a6Q = function(player) {
		for (var q, hF, n = cD.gz[player].length, gy = a6.gy, f6 = 3; 0 <= f6; f6--)
			for (hF = gy[f6], q = 0; q < n; q++)
				if (a6.aCn(cD.gz[player][q]) && a6.cT(cD.gz[player][q] + hF)) return !0;
		return !1
	}, this.gg = function(aKC, aKD) {
		for (var q, d8, hF, c9, a6u = cD.gz[aKC].length, a6v = cD.gz[aKD].length, gy = (a6v < a6u && (d8 = aKC, aKC = aKD, aKD = d8, d8 = a6u, a6u = a6v, 0), a6.gy), f6 = 3; 0 <= f6; f6--)
			for (hF = gy[f6], q = 0; q < a6u; q++)
				if (c9 = cD.gz[aKC][q] + hF, a6.h3(c9) && a6.gU(c9) === aKD) return !0;
		return !1
	}, this.a6R = function(aKC, aKD) {
		for (var q, hF, c9, a6u = cD.gz[aKC].length, gy = a6.gy, f6 = 3; 0 <= f6; f6--)
			for (hF = gy[f6], q = 0; q < a6u; q++)
				if (a6.aCn(cD.gz[aKC][q]) && (c9 = cD.gz[aKC][q] + hF, a6.h3(c9)) && a6.gU(c9) === aKD) return !0;
		return !1
	}
}

function aGy() {
	var zL = 0;
	this.e = function() {
		a5m.e(), zL = 0
	}, this.setState = function(aTV) {
		zL = aTV
	}, this.dW = function() {
		return zL
	}, this.oV = function() {
		this.setState(8), dk.i6()
	}, this.eE = function(e8) {
		if (!au.a0d) return !1;
		if (!(c0.fr < 400)) {
			if ("Enter" === e8.key || "Escape" === e8.key) {
				if (this.aTW()) return !0;
				if ("Enter" === e8.key) {
					if (0 === zL) return !0;
					if (7 === zL) return !0
				}
			}
			return !1
		}
	}, this.aIM = function() {
		aGi.resize()
	}, this.aTW = function() {
		return !!aGi.eD()
	}, this.dD = function(aD, aE) {
		!au.a0d || aGi.dD(aD, aE) || 6 === zL && i4.dD(aD, aE) || aGh.dD(aD, aE) || d9.dD(aD, aE)
	}, this.dB = function(aD, aE) {
		!d9.cs && a5m.dB(aD, aE, !0) || d9.dB(aD, aE)
	}, this.click = function(aD, aE) {
		d9.dE()
	}, this.dC = function(aD, aE, deltaY) {}, this.aIN = function() {
		a5m.d5(), c0.d1 = !0
	}, this.aR = function() {
		8 !== zL && 10 !== zL && (b5.imageSmoothingEnabled = !0, this.hk(), 0 !== zL && (d9.aR(), a2T.aR(), this.aTX(), aGh.aR()), 0 !== zL && 6 === zL && i4.aR(), aGi.aR(), dk.aR())
	}, this.hk = function() {
		var aTZ, aTY;
		if (__fx.makeMainMenuTransparent) b5.clearRect(0, 0, ao.ap, ao.ar);
		else au.a0d ? (aTY = ao.ap / au.av, aTZ = ao.ar / au.ef, b5.setTransform(aTY = aTZ < aTY ? aTY : aTZ, 0, 0, aTY, Math.floor((ao.ap - aTY * au.av) / 2), Math.floor((ao.ar - aTY * au.ef) / 2)), b5.drawImage(au.oP, 0, 0), b5.setTransform(1,
			0, 0, 1, 0, 0), b5.fillStyle = b7.a5r) : b5.fillStyle = b7.l8, b5.fillRect(0, 0, ao.ap, ao.ar)
	}, this.aTX = function() {
		var aE = Math.floor(.3 * ao.ar),
			canvas = r1.aLy("territorial.io"),
			f5 = (f5 = 1.75 * ao.ar / canvas.width) * canvas.width < .98 * ao.ap ? .98 * ao.ap / canvas.width : f5,
			aD = (b5.globalAlpha = .15, b5.imageSmoothingEnabled = !1, Math.floor(.5 * (ao.ap - f5 * canvas.width))),
			aD = Math.floor(aD / f5),
			aE = Math.floor(aE - .5 * canvas.height * f5),
			aE = Math.floor(aE / f5);
		b5.setTransform(f5, 0, 0, f5, aD, aE), b5.drawImage(canvas, aD, aE), b5.setTransform(1, 0, 0, 1, 0, 0), b5.globalAlpha = 1, b5.imageSmoothingEnabled = !0
	}
}

function aH4() {
	var aTa;

	function aTb(player) {
		var hh, aQj;
		return v.c2.rO(player) && player < f.iy ? 0 : (hh = aTa[fD.fE((f.g - 1) * cD.fh[player], f.j7)], c0.c1() < 1920 && (hh = Math.max(fD.fE(100 * (13440 - 6 * c0.c1()), 1920), hh)), aQj = jZ.su(player), cD.mY[player] > aQj && (hh -= fD.fE(2 *
			hh * (cD.mY[player] - aQj), aQj)), Math.min(Math.max(hh, 0), 700))
	}

	function aTk(pA) {
		for (var fh = cD.fh, cK = cH.cK, q = cH.cI - 1; 0 <= q; q--) {
			var c9 = cK[q];
			v.c2.uB(c9, fD.fE(pA * fh[c9], 32))
		}
	}

	function aTh() {
		var a7i = f.al;
		a9.eS[0] = cD.mY[a7i] - cD.sc[a7i]
	}

	function aTj(t) {
		var a7i = f.al,
			a7i = cD.mY[a7i] - cD.sc[a7i] - a9.eS[0];
		jZ.sy += a7i, fI.fg[t] += a7i
	}
	this.sy = 0, this.a4f = function() {
		for (var n = f.g, q = (aTa = new Uint16Array(n), 0); q < n; q++) aTa[q] = 100 + a60(fD.fE(25600 * q, n - 4), 9)
	}, this.e = function() {
		(this.sy = 0) === f.data.iIncomeType ? this.pi = aTb : 1 === f.data.iIncomeType ? this.pi = function(player) {
			return fD.fE(f.data.iIncomeValue * aTb(player), 64)
		} : this.pi = function(player) {
			return fD.fE(f.data.iIncomeData[player] * aTb(player), 64)
		}
	}, this.bu = function() {
		if (c0.c1() % 10 == 9 && (jZ.sy = 0, function() {
				aTh();
				for (var cK = cH.cK, mY = cD.mY, q = cH.cI - 1; 0 <= q; q--) {
					var c9 = cK[q],
						aTi = fD.fE(jZ.pi(c9) * mY[c9], 1e4);
					v.c2.uB(c9, Math.max(aTi, 1))
				}
				aTj(9)
			}(), function() {
				if (0 !== f.data.aIncomeType) {
					if (aTh(), 1 === f.data.aIncomeType)
						for (var fh = cD.fh, cK = cH.cK, pA = f.data.aIncomeValue, q = cH.cI - 1; 0 <= q; q--) {
							var c9 = cK[q];
							v.c2.uB(c9, fD.fE(pA * fh[c9], 128))
						} else 2 === f.data.aIncomeType && function() {
							for (var fh = cD.fh, cK = cH.cK, pA = f.data.aIncomeData, q = cH.cI - 1; 0 <= q; q--) {
								var c9 = cK[q];
								v.c2.uB(c9, fD.fE(pA[c9] * fh[c9], 128))
							}
						}();
					aTj(18)
				}
			}(), c0.c1() % 100 == 99)) {
			if (aTh(), 0 === f.data.tIncomeType) aTk(32);
			else if (1 === f.data.tIncomeType) aTk(f.data.tIncomeValue);
			else
				for (var fh = cD.fh, cK = cH.cK, pA = f.data.tIncomeData, q = cH.cI - 1; 0 <= q; q--) {
					var c9 = cK[q];
					v.c2.uB(c9, fD.fE(pA[c9] * fh[c9], 32))
				}
			aTj(8)
		}
	}, this.su = function(player) {
		return Math.min(100 * cD.fh[player], f.iu)
	}, this.aER = function(player, pb) {
		jR.a4C(player, pb, a9.eT[0], 0), v.c2.uB(pb, a9.eT[0]), fI.pa(player, pb), k4.aDP(player, a9.eT[0] + a9.eT[1]), k4.aDQ(pb, a9.eT[0]), v.c2.a3s(player)
	}, this.aBe = function() {
		for (var n = cH.cI, cQ = cH.cK, aL = 0, fS = cD.mY, q = 0; q < n; q++) aL += fS[cQ[q]];
		return aL
	}, this.aBg = function(aTd) {
		for (var c9, n = cH.cI, cQ = cH.cK, aL = 0, fS = cD.mY, cR = l.cR, q = 0; q < n; q++) cR[c9 = cQ[q]] === aTd && (aL += fS[c9]);
		return aL
	}
}

function aTo() {
	this.aJM = function() {
		if (2 === f.jG) f.jH = 2;
		else {
			if (8 === f.jA) v.c2.rO(0) || 0 === cD.ft[0] ? f.jI = 1 : v.c2.rO(1) || 0 === cD.ft[1] ? f.jI = 0 : f.jI = +(cD.fh[1] > cD.fh[0]);
			else {
				if (f.j) {
					var hY = cN.ha();
					if (f.jJ = hY, l.m[hY]) return void(f.jH = +(l.cR[f.al] === hY))
				}
				f.jI = cP[0]
			}
			f.jH = +(f.jI === f.al)
		}
	}
}

function aTq(u, size, bn, aTr, font) {
	var q, f5 = .2,
		canvas = document.createElement("canvas"),
		y = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = u, canvas.height = u, y.font = size + font, y.textAlign = "center", y.textBaseline = "middle", y.fillStyle = "red", q = 0; q < bn.length; q++) y.fillText(bn[q], .5 * u, .5 * u);
	return -1 < (canvas = function(z) {
		var q, hh, f6 = z.data;
		for (q = f6.length - 4; 0 <= q; q -= 4)
			if (hh = f6[q], aTr <= hh) return Math.floor(q / (4 * u));
		return -1
	}(y.getImageData(0, 0, u, u))) && (f5 = (canvas - .5 * u + .1 * size) / size), Math.max(f5, 0)
}

function x9(data) {
	var iP, aTu, aTv, aTw, aTx, aTy, aTz, colors, aU0, aU1, aU2 = 0,
		aU3 = 0,
		aU4 = !1,
		aU5 = !1,
		aU6 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aUW(f9, fA) {
		! function(f9, fA) {
			return aTu < f9 && f9 < aTu + aTw && aTv < fA && fA < aTv + aTx
		}(aU2 = f9, aU3 = fA) ? (aU4 && (c0.d1 = !0), aU4 = !1) : (aU4 = !0, c0.d1 = !0)
	}
	this.show = function() {
		aU5 = bK.buffer.data[127].value, iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize();
		var eF = ao.hG,
			aRY = iP.aRU(),
			aUD = eF * aRY.aRX,
			eF = eF * aRY.aRV;
		aTy = v.w.w6(.06), aTz = v.w.w6(.04), aTu = v.w.w6(.06), aTv = eF + aTy, aTw = ao.ap - aTu - aTz, aTx = aUD + eF - aTv - aTz
	}, this.aR = function() {
		iP.aR(),
			function() {
				var q, a5G, hd, aD, ca, a8 = data.data,
					aUH = 1,
					aUI = .125,
					aUJ = aU5 ? 65536 : 0;
				for (q = 0; q < a8.length; q++)
					for (a5G = a8[q].a5G, hd = a5G.length, aUH = Math.max(hd, aUH), ca = 0; ca < hd; ca++) aUI = Math.max(a5G[ca], aUI), aUJ = Math.min(a5G[ca], aUJ);
				var b1 = aTv + aTx,
					aL8 = aTx / (aUI - aUJ),
					aL7 = 1 / (aUH - 1);
				for (b5.lineWidth = f7.a7I, q = 0; q < a8.length; q++) {
					for (a5G = a8[q].a5G, hd = a5G.length, aD = aTu, b5.beginPath(), b5.moveTo(aD + aTw, b1 - aL8 * (a5G[hd - 1] - aUJ)), ca = hd - 2; 0 <= ca; ca--) b5.lineTo(aD + aL7 * ca * aTw, b1 - aL8 * (a5G[ca] - aUJ));
					b5.strokeStyle = colors[q], b5.stroke()
				}(function(aUJ, aUI, b1, aL8) {
					b5.font = v.w.bA(0, .25 * aTu), v.w.textBaseline(b5, 1), v.w.textAlign(b5, 2), b5.fillStyle = colors[0];
					for (var aD = .92 * aTu, q = 0; q < 3; q++) {
						var ff = aUJ + q * (aUI - aUJ) / 2;
						b5.fillText((ff / 1e3).toFixed(3), aD, b1 - aL8 * (ff - aUJ))
					}
				})(aUJ, aUI, b1, aL8),
				function(aUH) {
					var aE = aTv + aTx + .15 * aTz;
					b5.font = v.w.bA(0, Math.min(.4 * aTz, .028 * ao.ap)), v.w.textBaseline(b5, 0), v.w.textAlign(b5, 2), b5.fillStyle = colors[0], b5.fillText(v.a6B.aEI(aU0), aTu + aTw, aE), v.w.textAlign(b5, 0), b5.fillText(v.a6B.aEI(new Date(
						aU1.getTime() - 6e4 * (aUH - 1) * aU6[data.bl])), aTu, aE)
				}(aUH),
				function(aUH, aUJ, aUI) {
					if (aU4 && !(aUH < 2)) {
						for (var a98, t = (aU2 - aTu) / aTw * (aUH - 1), aUM = Math.floor(t), aUN = Math.floor(1 + t), aUO = t - aUM, aUP = 1e5, vi = -1, aUQ = -1, aUR = aUI - (aUI - aUJ) * (aU3 - aTv) / aTx, a8 = data.data, q = 0; q < a8
							.length; q++) {
							var a6G, a5G = a8[q].a5G;
							a5G.length <= aUN || (a5G = a5G[aUM] + aUO * (a5G[aUN] - a5G[aUM]), (a6G = Math.abs(aUR - a5G)) < aUP && (aUP = a6G, vi = q, aUQ = a5G))
						} - 1 !== vi && (aUI = aTv + aTx - (aUQ - aUJ) / (aUI - aUJ) * aTx, b5.lineWidth = .5 * f7.a7I, b5.strokeStyle = colors[vi], b5.beginPath(), b5.moveTo(aTu, aUI), b5.lineTo(aU2, aUI), b5.lineTo(aU2, aTv + aTx), b5.stroke(),
							b5.beginPath(), b5.arc(aU2, aUI, .1 * aTu, 0, 2 * Math.PI), b5.fillStyle = colors[vi], b5.fill(), aUJ = aTv + aTx + .15 * aTz, v.w.textAlign(b5, 1), a98 = aUH - 2 < t ? (a98 = aU1.getTime() - 6e4 * aU6[data.bl],
								new Date(a98 + (t - (aUH - 2)) * (aU0.getTime() - a98))) : new Date(aU1.getTime() - 6e4 * (aUH - t - 1) * aU6[data.bl]), aUH = v.a6B.aEI(a98), t = v.w.measureText(aUH), a98 = fD.ok(aU2, aTu + .5 * t, aTu +
								aTw - .5 * t), b5.fillStyle = v.color.kt(70, 50, 20), b5.fillRect(a98 - .52 * t, aTv + aTx, 1.04 * t, .55 * aTz), b5.fillStyle = colors[0], b5.fillText(aUH, a98, aUJ), b5.font = v.w.bA(0, .25 * aTu), v.w
							.textBaseline(b5, 1), v.w.textAlign(b5, 2), a98 = .92 * aTu, aUH = (aUQ / 1e3).toFixed(3), t = v.w.measureText(aUH), aUJ = a98 - 1.04 * t, b5.fillStyle = v.color.kt(70, 50, 20), b5.fillRect(aUJ, aUI - .1625 * aTu,
								aTu - aUJ, .275 * aTu), b5.fillStyle = colors[vi], b5.fillText(aUH, a98, aUI))
					}
				}(aUH, aUJ, aUI)
			}(), b5.lineWidth = f7.a7I, b5.strokeStyle = b7.b9, b5.beginPath(), b5.moveTo(aTu, aTv), b5.lineTo(aTu, aTv + aTx), b5.lineTo(aTu + aTw, aTv + aTx), b5.stroke();
		var q, fontSize = .5 * aTy,
			a8 = (b5.font = v.w.bA(0, fontSize), v.w.textBaseline(b5, 1), v.w.textAlign(b5, 0), data.data),
			n = a8.length,
			aE = aTv - .5 * aTy,
			bJ = "";
		for (q = 0; q < n; q++) bJ += a8[q].name + "  ";
		bJ = bJ.trim();
		var fn = v.w.measureText(bJ),
			aD = .5 * (ao.ap - fn);
		for (fn > ao.ap && (aD = 0, b5.font = v.w.bA(0, ao.ap / fn * fontSize)), q = 0; q < n; q++) b5.fillStyle = colors[q], b5.fillText(a8[q].name, aD, aE), aD += v.w.measureText(a8[q].name + "  ")
	}, this.dD = function(f9, fA) {
		aUW(f9, fA)
	}, this.dB = function(f9, fA) {
		aUW(f9, fA)
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	};
	var q, d8, aEG, h2, f6 = data.data,
		n = f6.length,
		max = 1;
	for (q = 0; q < n; q++) max = Math.max(max, f6[q].a5G.length);
	for (q = 0; q < n; q++)
		for (; f6[q].a5G.length < max;) f6[q].a5G.unshift(0);
	d8 = new Date, aEG = 6e4 * d8.getTimezoneOffset(), h2 = d8.getTime() - aEG, aU0 = new Date(h2), 6 === data.bl ? function(d8, aEG) {
		var aUC = d8.getUTCFullYear(),
			d8 = d8.getUTCMonth() + 1;
		aU1 = d8 < 12 ? new Date(Date.UTC(aUC, d8) - aEG) : new Date(Date.UTC(aUC + 1, 0) - aEG)
	}(d8, aEG) : (aEG = 6e4 * aU6[data.bl], aU1 = data.bl <= 4 ? new Date(h2 + aEG - d8.getTime() % aEG) : new Date(h2 + aEG - (d8.getTime() + 2592e5) % aEG)), h2 = v.color, colors = [b7.b9, h2.kt(255, 0, 0), h2.kt(0, 200, 0), h2.kt(80, 80, 255),
		h2.kt(255, 255, 0), h2.kt(255, 0, 255), h2.kt(0, 255, 255), h2.kt(255, 140, 0), h2.kt(128, 128, 128), h2.kt(0, 255, 140)
	], iP = new dc(L(288) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.bl] + ", " + v.a6B.aEF(aU0), [new dd("⬅️ " + L(5), function() {
		dk.e3(1)
	}), new dd(L(145), function() {
		dk.e3(14)
	})], !1)
}

function aUX() {
	this.bu = function() {
		var aUd;
		2 === f.jG ? (c5.wm(0, 59), kB.aUY(2700)) : f.jA < 7 ? (aUd = l.m[f.jJ], aUd = l.uj[aUd], fK.aUf(L(289, [aUd]), 2, 1, 12), c5.cC(0, L(290, [aUd]), 40, 0, b7.b9, b7.cF, -1, !1), kB.aUY(2700)) : 8 === f.jA ? (f.jH ? c5.wm(f.jI, 2) : c5.wm(
			1 - f.al, 3), f.jD.xj(f.jI), kB.aAt(f.jI, 2700, !1, 0)) : 9 === f.jA ? (c5.aUg(), kB.aUY(2700)) : (c5.aUh(f.jI), kB.aAt(f.jI, 2700, !1, 0))
	}, this.aUi = function() {
		var bJ;
		f.g1 || f.j5 || (bJ = bZ.af.aIp(), f.jA < 7 ? bJ += "/log/team" : 8 === f.jA ? bJ += "/log/1v1" : 9 === f.jA ? bJ += "/log/zombies" : bJ += "/log/br", c5.cC(720, bJ, 736, 0, b7.b9, b7.aJk, -1, !1))
	}
}

function aHJ() {
	this.gM = new aN4, this.c2 = new o6, this.rr = new aEK, this.jd = new rg, this.uC = new aUj
}

function aHU() {
	this.aEV = new aUk
}

function aUl(data) {
	var iP, iQ;

	function aUm(ds, aVD) {
		if (!data.aPl) {
			if (data.aPY) {
				if (aVD) return
			} else {
				if (!aVD) return;
				if (data.s7 < 1e4) return
			}
			var aVG, dx = new dy,
				aVE = 1e5 <= data.s7,
				aVF = dx.dz(aVD ? (aVE ? "⚠️ " : "") + L(375) : L(376)),
				aVH = (aVE && (aVF.style.color = "yellow"), aVD ? dx.iY(L(377, [v.bB.uS(data.s7, .01, 0)])) : ((aVG = new e7({
					value: data.aPZ,
					t: -1
				})).e8.readOnly = !0, aVG.e8.type = "password", dx.e4(aVG), dx.e4(new e9([new dd(L(136), function(e8) {
					return e8.textContent === L(136) ? (e8.textContent = L(137), aVG.e8.type = "text") : (e8.textContent = L(136), aVG.e8.type = "password"), !0
				}).button, new dd(L(312), function(e8) {
					return v.w.aV5(aVG.e8), v.w.kr(e8), !0
				}).button]))), dx.op(L(aVD ? 376 : 378)).style.marginTop = "0.75em", new e7({
					value: "",
					t: -1
				}, 0, 0)),
				aVI = (aVH.e8.type = "email", aVH.e8.autocomplete = "email", aVH.e8.name = "email", aVH.e8.inputMode = "email", aVH.e8.spellcheck = !1, dx.e4(aVH), dx.e4(new e9([new dd(L(379), function(e8) {
					return bZ.q0.s4({
						action: 3,
						bJ: aVH.e8.value.trim().substring(0, 63)
					}), v.w.kr(e8), !0
				}).button])), aVD && dx.iY(L(380)), dx.op(L(381)).style.marginTop = "0.75em", new e7({
					value: "",
					t: -1
				}, 1));
			dx.e4(aVI), dx.e4(new e9([new dd(L(382), function() {
				bZ.q0.q1({
					action: 4,
					ij: "",
					value: Math.floor(+aVI.e8.value)
				}), dk.e3(8, dk.i9().iA, new iB(18))
			}).button])), ds.push(dx)
		}
	}
	this.show = function() {
		data.aPl && a8v.a8z("account", data.ij), iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), iQ.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(data.username, [new dd("⬅️ " + L(5), function() {
		a8v.clear(), dk.dm()
	}), new dd(data.aPl ? "🔄 " + L(291) : L(292), function() {
		dk.e3(8, data.aPl ? dk.i9().iA : void 0, new iB(25, {
			action: 0,
			ij: data.ij,
			a8w: data.a8w
		}))
	}, 0, 0, 1)]), iQ = new df(iP.dg, function() {
		var ds = [];
		aUm(ds, 1), ds.push(function() {
				var dx = new dy;
				dx.dz(L(348)), data.aPY && (dx.op("✅ " + L(349)).style.marginBottom = "0.75em");
				var lF = data.aPV;
				lF < 1 ? (dx.op(L(350)), 0 === data.aPU ? dx.iY(L(351)) : 1 === data.aPU ? dx.iY(L(352)) : 2 === data.aPU ? dx.iY(L(353)) : 3 === data.aPU ? dx.iY(L(354)) : 4 === data.aPU ? dx.iY(L(355)) : 5 === data.aPU ? dx.iY(L(356)) :
					6 === data.aPU ? dx.iY(L(357)) : dx.iY(L(358))) : (dx.op(L(359)), lF = lF < 2 ? L(360) : lF < 61 ? 2 === lF ? L(361) : L(362, [lF - 1]) : lF < 84 ? 61 === lF ? L(363) : L(364, [lF - 60]) : lF < 255 ? 84 === lF ? L(
					365) : L(366, [lF - 83]) : L(367), dx.iY(lF));
				{
					var q2, pu;
					dx.e4(new a6e), data.aPl && (q2 = dx.iY(), dx.e4(new e9([new dd(bK.xA.ii(data.ij) ? L(368) : L(369), function(e8) {
						return bK.xA.ik(data.ij) ? (e8.textContent = L(368), pu(1)) : (e8.textContent = L(369), pu(0)), !0
					}).button])), pu = function(ff) {
						q2.textContent = ff ? L(370) : ""
					}, bK.xA.ii(data.ij) && pu(1), dx.e4(new a6e))
				}
				var hE, ia = new e7({
					value: data.username,
					t: -1
				});
				ia.e8.readOnly = !0, dx.e4(ia), dx.e4(new e9([new dd(L(312), function(e8) {
					return v.w.aV5(ia.e8), v.w.kr(e8), !0
				}).button])), data.aPl || dx.iY(L(371));
				(data.aPa || data.aPb || data.aPc) && (dx.e4(new a6e), dx.iY(L(372)), data.aPa && (dx.iY("• Account Timeout").style.color = "orange"), data.aPb && ((hE = dx.iY("• Muted")).style.color = "orange", hE.style.marginTop =
					"0.5em"), data.aPc) && ((hE = dx.iY("• Redacted")).style.color = "orange", hE.style.marginTop = "0.5em");
				data.aPl && (dx.e4(new a6e), dx.op(bZ.af.iE("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", dx.e4(new e9([new dd(L(373), function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 0
					}), v.w.kr(e8), !0
				}, b7.aBD).button])), dx.e4(new e9([new dd(L(374), function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 1
					}), v.w.kr(e8), !0
				}, b7.aBD).button])), dx.e4(new e9([new dd("Cheater", function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 2
					}), v.w.kr(e8), !0
				}, b7.aBD).button])), dx.e4(new e9([new dd("False Reporter", function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 3
					}), v.w.kr(e8), !0
				}, b7.aBD).button])), lF = "CRTOR" === (lF = bK.buffer.data[105].value) || "ADMIN" === lF) && (dx.e4(new e9([new dd("Block Account", function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 4
					}), v.w.kr(e8), !0
				}, b7.aJr).button])), dx.e4(new e9([new dd("Ban IP", function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 5
					}), v.w.kr(e8), !0
				}, b7.aJr).button])), dx.e4(new e9([new dd("Gold Seizure", function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 6
					}), v.w.kr(e8), !0
				}, b7.aJr).button])), dx.e4(new e9([new dd("Remove Punishments", function(e8) {
					return bZ.q0.q1({
						action: 3,
						ij: data.ij,
						value: 7
					}), v.w.kr(e8), !0
				}, b7.aJm).button])));
				return dx
			}()),
			function(ds) {
				var dx, q2, a2Z, aSZ, py, iZ, pw;
				data.aPl || ((dx = new dy).dz(L(383)), (q2 = dx.iY(data.aPQ.length + " / 160")).style.textAlign = "center", a2Z = !0, (aSZ = new eA(0, 1, function(e8) {
					e8 = e8.target.value.length;
					q2.textContent = e8 + " / 160", 160 < e8 ? a2Z && (a2Z = !1, iZ.pz(1)) : a2Z || (a2Z = !0, iZ.pz(0))
				})).e8.rows = 6, aSZ.e8.style.fontSize = "1em", aSZ.eB(data.aPQ), dx.e4(aSZ), 0 !== data.aPO ? (iZ = new dd(L(384), function() {
					if (!a2Z) return !0;
					dk.e3(8, dk.i9().iA, new iB(29, {
						action: 1,
						bJ: aSZ.dp().substring(0, 160)
					}))
				}, 0, 0, 1), dx.e4(new e9([iZ.button])), dx.e4(new e9([new dd(1 === data.aPO ? L(385) : L(386), function() {
					dk.e3(8, dk.i9().iA, new iB(29, {
						action: 0,
						bJ: ""
					}))
				}, 0, 0, 1).button])), dx.iY(1 === data.aPO ? L(387, [data.aPR - 1]) : L(388, [data.aPR - 1])), dx.iY(L(389, [data.aPP]))) : (py = new dd(L(390), function() {
					if (!aSZ.e8.readOnly) return !0;
					dk.e3(8, dk.i9().iA, new iB(29, {
						action: 1,
						bJ: aSZ.dp().substring(0, 160)
					}))
				}, 1), iZ = new dd(L(86), function(e8) {
					if (e8.textContent === L(86)) {
						if (!a2Z) return !0;
						e8.textContent = L(87), aSZ.e8.readOnly = !0, py.pz(0), py.button.style.color = b7.l6
					} else pw();
					return !0
				}), dx.e4(new e9([iZ.button])), dx.iY(L(389, [data.aPP])), pw = function() {
					iZ.button.textContent = L(86), aSZ.e8.readOnly = !1, py.pz(1), py.button.style.color = b7.b9
				}, dx.e4(new e9([py.button]))), ds.push(dx))
			}(ds),
			function(ds) {
				var dx;
				data.aPl && 0 !== data.aPO && ((dx = new dy).dz(L(391)), dx.yt(data.aPQ), dx.e4(new e9([new dd(L(392, 0, "Report"), function(e8) {
					return bZ.af.kU(0) && (v.w.kr(e8), bZ.q0.sF({
						action: 5,
						ij: data.ij
					})), !0
				}, 0, 0, 1).button])), ds.push(dx))
			}(ds), ds.push(function() {
				var dx = new dy,
					aV3 = (dx.dz(L(293)), dx.op(bZ.af.iE("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(294), L(295), L(296), L(297), L(298), L(299), L(300), L(301), L(302), L(303), L(304), L(305), L(306), L(307)]),
					hh = data.aPS;
				return dx.op(L(308) + v.bB.uS(data.s7, .01, 2) + "<br>" + L(309) + (hh + 1) + " / " + data.aOo + "<br>" + L(310) + aV3[function(hh, s7) {
					if (hh < 10) return 0;
					if (hh < 30) return 1;
					if (hh < 60) return 2;
					if (3e4 <= (s7 = fD.fE(s7, 100))) return 3;
					if (12e3 <= s7) return 4;
					if (7e3 <= s7) return 5;
					if (3e3 <= s7) return 6;
					if (1e3 <= s7) return 7;
					if (500 <= s7) return 8;
					if (200 <= s7) return 9;
					if (70 <= s7) return 10;
					if (20 <= s7) return 11;
					if (3 <= s7) return 12;
					return 13
				}(hh, data.s7)]), dx
			}()), data.aPl && ds.push(function() {
				var dx = new dy,
					ia = (dx.dz(L(311)), dx.op(bZ.af.iE("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new e7({
						value: bK.buffer.data[147].value,
						t: -1
					}, 1, void 0, function(e8) {
						bK.iF.bH(147, pu(e8.target.value))
					})),
					py = (dx.e4(ia), new dd(L(88), function(e8) {
						return ia.e8.readOnly && bZ.af.kU(0) && (v.w.kr(e8), pw(), bZ.q0.q1({
							action: 0,
							ij: data.ij,
							value: parseInt(bK.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					iZ = new dd(L(86), function(e8) {
						return e8.textContent === L(86) ? (e8.textContent = L(87), ia.e8.readOnly = !0, py.pz(0), py.button.style.color = b7.l6, bK.iF.bH(147, ia.e8.value), pu(bK.buffer.data[147].value)) : pw(), !0
					}),
					q2 = (dx.e4(new e9([iZ.button])), dx.iY()),
					pu = function(ff) {
						q2.innerHTML = dk.af.iK(ff, bK.buffer.data[105].value, data.ij)
					},
					pw = function() {
						iZ.button.textContent = L(86), ia.e8.readOnly = !1, py.pz(1), py.button.style.color = b7.b9
					};
				return pu(bK.buffer.data[147].value), dx.e4(new e9([py.button])), dx
			}());
		ds.push(function() {
			var dx = new dy,
				ia = (dx.dz(L(134)), new e7({
					value: data.ij,
					t: -1
				})),
				aV6 = (ia.e8.readOnly = !0, dx.e4(ia), dx.e4(new e9([new dd(L(312), function(e8) {
					return v.w.aV5(ia.e8), v.w.kr(e8), !0
				}).button])), dx.e4(new a6e), new e7({
					value: data.ij,
					t: -1
				}));
			return dx.e4(aV6), dx.e4(new e9([new dd(L(313), function(e8) {
				dk.e3(8, dk.i9().iA, new iB(25, {
					action: 0,
					ij: aV6.e8.value,
					a8w: 0
				}))
			}).button])), dx
		}()), data.aPl || (ds.push(function() {
			var dx = new dy,
				a7u = (dx.dz(L(135)), new e7(bK.buffer.data[106]));
			return a7u.e8.readOnly = !0, a7u.e8.type = "password", dx.e4(a7u), dx.e4(new e9([new dd(L(136), function(e8) {
				return e8.textContent === L(136) ? (e8.textContent = L(137), a7u.e8.type = "text") : (e8.textContent = L(136), a7u.e8.type = "password"), !0
			}).button, new dd(L(312), function(e8) {
				return v.w.aV5(a7u.e8), v.w.kr(e8), !0
			}).button])), dx.e4(new e9([new dd(L(314), function() {
				dk.e3(8, dk.i9().iA, new iB(15))
			}).button])), dx.dz(L(138), "0.8em"), dx.iY(L(315)), dx.iY(L(316)), dx.iY(L(317)), dx
		}()), ds.push(function() {
			var dx = new dy;
			return dx.dz(L(318)), dx.e4(new e9([new dd(L(319), function() {
				dk.e3(6, dk.i9().iA)
			}).button])), dx.e4(new e9([new dd(L(320), function() {
				bK.iF.bH(105, ""), dk.e3(8, dk.i9().iA, new iB(18))
			}).button])), dx.e4(new e9([new dd(L(321) + bK.buffer.data[105].value, function() {
				dk.e3(4, 0, new iD(L(322), L(323), !0, [new dd("⬅️ " + L(5), function() {
					dk.e3(7, dk.a4H(7).iA)
				})]))
			}, b7.aBD).button])), dx
		}()), ds.push(function() {
			function aV8(t) {
				aV7[0].pz(0 === t ? b7.aJg : b7.xB), aV7[1].pz(0 === t ? b7.aJg : b7.aBD)
			}
			var yw, aV7, dx = new dy;
			dx.dz(L(327)), dx.iY(L(328)), bK.af.aRH();
			return aV7 = [new dd(L(133), function() {
				var t = Math.min(bK.buffer.data[117].value, yw.pn.length - 1);
				t < 1 || (t = bK.af.x7(t), bK.iF.bH(105, t.ij), bK.iF.bH(106, t.password), dk.e3(8, dk.i9().iA, new iB(18)))
			}, b7.aJg, 1), new dd(L(326), function() {
				var t = Math.min(bK.buffer.data[117].value, yw.pn.length - 1);
				if (!(t < 1)) {
					yw.pn[t].remove(), yw.pn.splice(t, 1);
					for (var q = t; q < yw.pn.length; q++) yw.pn[q].name = "" + q;
					bK.af.x6(t), t = bK.buffer.data[117].value, yw.pn[t].textContent = yw.pn[t].textContent.replace("⚪", "🟢"), aV8(t)
				}
			}, b7.aJg, 1)], yw = new e2(bK.buffer.data[117], aV8), aV8(0), yw.pn[0].style.marginTop = "0.5em", dx.e1(yw), dx.e4(new e9([aV7[0].button])), dx.e4(new e9([aV7[1].button])), dx
		}()));
		return ds.push(function() {
				var aS, dx = new dy;
				return dx.dz("Report Power"), aS = 1 / (aS = 1 - .95 * Math.max((10 - Math.sqrt(data.aPL)) / 10, 0)), dx.op("Power: " + v.bB.bC(data.aPd) + "<br>Remaining Reports ≈ " + Math.floor(aS * Math.max(30 - data.aPe, 0))), dx
			}()), ds.push(function() {
				var dx = new dy,
					aV3 = (dx.dz(L(332)), [L(333), L(334), L(335), L(336)]),
					hh = data.aPT;
				return dx.op(L(337) + (data.a7d / 100).toFixed(2) + "<br>" + L(309) + (hh + 1) + " / " + data.aOo + "<br>" + L(310) + aV3[hh < 10 ? 0 : hh < 50 ? 1 : hh < 200 ? 2 : 3]), dx
			}()), ds.push(function() {
				var dx = new dy;
				return dx.dz(L(329)), dx.op(L(330) + v.bB.uS(data.aOl, .1, 1) + "<br>" + L(309) + (data.aOm + 1) + " / " + data.aOo + "<br>" + L(331) + data.aOn), dx
			}()),
			function(ds) {
				var dx = new dy,
					aVJ = data.aOr,
					aVK = (dx.dz(L(393)), dx.op(L(394, [data.aOp.length ? "[" + data.aOp + "]" : "-"])), dx.op(L(395, [v.bB.uS(aVJ, .01, 2)])), dx.op(L(396, [data.aOt + 1 + " / " + data.aOo])), data.aOu),
					aVL = (dx.op(L(397, [v.bB.uS(aVK, .1, 1)])), data.aOw);
				dx.op(L(398, [aVL])), dx.op(L(399, [v.bB.uS(aVK / Math.max(aVL, 1), .1, 2)])), aVJ = data.aOs, dx.dz(L(400), "0.8em"), dx.op(L(394, [data.aOq.length ? "[" + data.aOq + "]" : "-"])), dx.op(L(395, [v.bB.uS(aVJ, .01, 2)])), aVK =
					data.aOv, dx.op(L(397, [v.bB.uS(aVK, .1, 1)])), aVL = data.aOx, dx.op(L(398, [aVL])), dx.op(L(399, [v.bB.uS(aVK / Math.max(aVL, 1), .1, 2)])), dx.op(bZ.af.iE("/wiki/clans"), "0.75em").style.marginTop = "0.8em", ds.push(dx)
			}(ds),
			function(ds) {
				var dx = new dy;
				dx.dz(L(401)), dx.op(L(337) + (data.aPM / 10).toFixed(1) + "<br>" + L(310) + (data.aPN.length ? L(402, [data.aPN]) : L(403))), data.aPl && dx.e4(new e9([new dd(L(346), function(e8) {
					return bZ.af.kU(0) && (v.w.kr(e8), bZ.q0.sF({
						action: 4,
						ij: data.ij
					})), !0
				}, 0, 0, 1).button]));
				dx.op(bZ.af.iE("/wiki/clans"), "0.75em").style.marginTop = "0.8em", ds.push(dx)
			}(ds), ds.push(function() {
				var dx = new dy;
				{
					var ia, iZ, aVA, q2, pu, pw;
					dx.dz(L(344)), dx.op(L(345) + data.aPK + "<br>" + L(309) + (data.aPL + 1) + " / " + data.aOo + "<br>" + L(310) + lH.aV9(data.aPL)), data.aPl && ((ia = new e7({
						value: bK.buffer.data[157].value,
						t: -1
					}, 1, void 0, function(e8) {
						bK.iF.bH(157, pu(e8.target.value))
					})).e8.style.marginTop = "0.6em", dx.e4(ia), iZ = new dd(L(86), function(e8) {
						return e8.textContent === L(86) ? (e8.textContent = L(87), ia.e8.readOnly = !0, aVA[0].pz(0), aVA[0].button.style.color = b7.l6, pu(bK.buffer.data[157].value)) : pw(), !0
					}), dx.e4(new e9([iZ.button])), aVA = [new dd(L(346), function(e8) {
						return ia.e8.readOnly && bZ.af.kU(0) && (v.w.kr(e8), pw(), bZ.q0.q1({
							action: 1,
							ij: data.ij,
							value: fD.ok(parseInt(bK.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], q2 = dx.iY(), pu = function(ff) {
						return ff = v.c2.iN(ff, 2, 3e4), q2.textContent = L(347, [ff - 1, ff, bK.buffer.data[105].value]), ff
					}, dx.e4(new e9([aVA[0].button])), pw = function() {
						iZ.button.textContent = L(86), ia.e8.readOnly = !1, aVA[0].pz(1), aVA[0].button.style.color = b7.b9
					}, pu(bK.buffer.data[157].value))
				}
				return dx
			}()),
			function(ds) {
				var dx, aVM;
				data.aPl && !data.aPf || (0 === cu.id || data.aPl || data.aPf) && ((dx = new dy).dz("Patreon"), !data.aPl && data.aPg ? dx.e4(new e9([new dd(L(136), function() {
					bZ.q0.sF({
						action: 7,
						ij: data.ij
					}), data.aPg = 0, dk.e3(7)
				}).button])) : data.aPf ? (dx.op(L(404, [(data.aPh / 100).toFixed(2)]) + "<br>" + L(405, [1 + data.aPi + " / " + data.aPj]) + "<br>" + L(406, [data.aPk ? L(407) : L(408)])), data.aPl || dx.e4(new e9([new dd(L(409),
					function() {
						bZ.q0.sF({
							action: 8,
							ij: data.ij
						}), data.aPf = 0, bK.iF.bH(160, 0), dk.e3(7)
					}).button]))) : (dx.op(L(410), "0.75em").style.marginBottom = "0.3em", dx.op("  • " + L(411), "0.75em").style.whiteSpace = "pre", dx.op("  • " + L(412), "0.75em").style.whiteSpace = "pre", dx.op("  • " + L(413),
						"0.75em").style.whiteSpace = "pre", dx.op(L(414), "0.75em").style.marginTop = "1.0em", dx.op(L(415), "0.75em").style.marginTop = "1.0em", dx.op("<a href='" + aBK.aC8 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aVM = "https://www.patreon.com/oauth2/authorize?state=" + data.ij +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + bZ.af.aIp() + "/", dx.op(L(416), "0.75em").style.marginTop = "1.0em", dx.op("<a href='" +
						aVM + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aPl || (dx.e4(new a6e), dx.e4(new e9([new dd(L(137), function() {
						bZ.q0.sF({
							action: 6,
							ij: data.ij
						}), data.aPg = 1, dk.e3(7)
					}).button])), dx.op(L(417), "0.75em").style.marginTop = "0.75em")), ds.push(dx))
			}(ds), ds.push(function() {
				var dx = new dy,
					aV3 = (dx.dz(L(338)), [L(339), L(340), L(341), L(342), "Scout", L(343)]),
					hh = data.aPW;
				return dx.op(L(337) + (data.aPX / 100).toFixed(2) + "<br>" + L(309) + (hh + 1) + " / " + data.aOo + "<br>" + L(310) + aV3[hh < 3 ? 0 : hh < 20 ? 1 : hh < 100 ? 2 : hh < 500 ? 3 : hh < 2e3 ? 4 : 5]), dx.op(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", dx
			}()),
			function(ds) {
				var dx, yw, aV7, t, aV8;
				data.aPl || bK.xA.get().length && ((dx = new dy).dz(L(324)), t = 0, aV8 = function() {
					var aBF = bK.xA.get().length;
					aV7[0].pz(t === aBF ? b7.aJg : b7.xB), aV7[1].pz(t === aBF ? b7.aJg : b7.aBD)
				}, aV7 = [new dd(L(325), function() {
					dk.e3(8, void 0, new iB(25, {
						action: 0,
						ij: bK.xA.get()[t],
						a8w: 0
					}))
				}, b7.aJg, 1), new dd(L(326), function() {
					bK.xA.io(t), yw.pn[t].remove(), yw.pn.splice(t, 1);
					for (var q = t; q < yw.pn.length; q++) yw.pn[q].name = "" + q;
					bK.xA.get().length && (t = Math.max(t - 1, 0), yw.pn[t].textContent = yw.pn[t].textContent.replace("⚪", "🟢")), aV8()
				}, b7.aJg, 1)], aV8(), (yw = new e2(bK.xA.ih(), function(q) {
					t = q, aV8()
				})).pn[0].style.marginTop = "0.5em", dx.e1(yw), dx.e4(new e9([aV7[0].button])), dx.e4(new e9([aV7[1].button])), ds.push(dx))
			}(ds), aUm(ds, 0), ds
	}())
}

function aGs() {
	var aVQ, aVR, a52 = "",
		aVN = 0,
		aVO = 0,
		aVP = -1,
		aVS = ["Team", "Zombie", "BR", "1v1"];

	function aVT() {
		for (var d8 = new Date, t6 = d8.getUTCMinutes(), d8 = d8.getUTCSeconds(), aVU = [], aVV = 0, q = 0; q < 6; q++) aVU.push(aVV), aVU.push(aVV + 2), aVU.push(aVV + 5), aVU.push(aVV + 7), aVV += 10;
		for (var n = aVU.length, q = 1; q < n && !(t6 < aVU[q]); q++);
		q %= n;
		d8 = (aVU[0] = 60) * (aVU[q] - t6) - d8;
		return d8 !== aVP && (a52 = aVS[q % 4] + " " + aVR + ": " + aVX(Math.floor(d8 / 60)) + ":" + aVX(d8 % 60), aVP = d8, aVN = fK.measureText(a52, aVQ), aVN += Math.floor(.4 * aVO), 1)
	}

	function aVX(aLS) {
		return aLS < 10 ? "0" + aLS : String(aLS)
	}
	this.e = function() {
		aVR = L(418)
	}, this.resize = function() {
		aVN = Math.floor((cu.cv.cw() ? .53 : .36) * ao.cx), aVO = Math.floor(.065 * aVN), aVQ = v.w.bA(1, Math.floor(.9 * aVO)), aVP += 1e3, aVT()
	}, this.bu = function() {
		aVT() && (c0.d1 = !0)
	}, this.aR = function(aE) {
		b5.lineWidth = 1 + Math.floor(aVO / 15), b5.translate(ao.ap - aVO, aE + aVN), b5.rotate(-Math.PI / 2), b5.fillStyle = b7.b9, b5.fillRect(0, 0, aVN, aVO), b5.strokeStyle = b7.l8, b5.strokeRect(0, 0, aVN, aVO + 10), b5.fillStyle = b7.l8, b5
			.font = aVQ, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.fillText(a52, Math.floor(aVN / 2), Math.floor(.59 * aVO)), b5.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aHQ() {
	this.bL = new aT7, this.buffer = new bD, this.iF = new aOj, this.af = new aRG, this.xA = new ie, this.e = function() {
		this.buffer.e(), (new a2C).e(), this.xA.e(), this.af.aRL()
	}
}

function aGt() {
	var a4B, aVY, a5W, aVO, a5P, aVZ = 0,
		aVa = 0;

	function aVc(q) {
		var aVd = !0,
			ub = b7.b9,
			ap = (1 === a4B[q].id ? a4B[q].fY.fillStyle = b7.aJy : a4B[q].uA === f.g ? a4B[q].fY.fillStyle = b7.aJf : (a6.a7(a4B[q].uA), a4B[q].fY.fillStyle = v.color.kZ(a9.aA[0], a9.aA[1], a9.aA[2], .87), 400 < v.aN.dr(a9.aA, 0, 2) && (aVd = !1,
				ub = b7.l8)), a4B[q].canvas.width),
			dO = (a4B[q].fY.clearRect(0, 0, ap, aVO), a4B[q].fY.fillRect(0, 0, ap, aVO), a4B[q].fY.fillStyle = ub, ! function(fY, ap, aVO) {
				fY.fillRect(0, 0, ap, 1), fY.fillRect(0, aVO - 1, ap, 1), fY.fillRect(0, 0, 1, aVO), fY.fillRect(ap - 1, 0, 1, aVO)
			}(a4B[q].fY, ap, aVO), aVY + 2 * aVO < ap && (a4B[q].fY.fillRect(ap - aVY - aVO, 0, 1, aVO), a4B[q].fY.fillText(cD.cE[a4B[q].uA], Math.floor((ap - aVY) / 2), Math.floor(.57 * aVO))), 0 !== a4B[q].id ? 0 : aVO);
		a4B[q].fY.fillText(v.bB.bC(a4B[q].aW), Math.floor(ap - aVY / 2 - dO), Math.floor(.57 * aVO)),
			function(q, ap, dO, aVd) {
				a4B[q].fY.fillStyle = aVd ? b7.dI : b7.aG5;
				aVd = Math.floor(aVY * a4B[q].aW / a4B[q].aVi);
				a4B[q].fY.fillRect(Math.floor(ap - aVY - dO), aVO - a5P, aVd, a5P)
			}(q, ap, dO, aVd), 0 === a4B[q].id ? (aVg(q, ap, aVd, ub), function(q, ap, aVd) {
				a4B[q].fY.strokeStyle = aVd ? b7.rX : b7.aJm, a4B[q].fY.fillRect(aVO, 0, 1, aVO);
				aVd = ap - aVO;
				a4B[q].fY.beginPath(), a4B[q].fY.moveTo(Math.floor(.3 * aVO + aVd), Math.floor(aVO / 2)), a4B[q].fY.lineTo(Math.floor(aVO - .3 * aVO + 0 + aVd), Math.floor(aVO / 2)), a4B[q].fY.stroke(), a4B[q].fY.beginPath(), a4B[q].fY.moveTo(
					Math.floor(aVO / 2 + aVd), Math.floor(.3 * aVO)), a4B[q].fY.lineTo(Math.floor(aVO / 2 + aVd), Math.floor(aVO - .3 * aVO + 0)), a4B[q].fY.stroke()
			}(q, ap, aVd)) : aVg(q, 2 * aVO, aVd, ub)
	}

	function aVg(q, ap, aVd, ub) {
		a4B[q].fY.strokeStyle = a4B[q].aVj ? b7.a6f : aVd ? b7.b8 : b7.fk, a4B[q].fY.fillStyle = ub, a4B[q].fY.fillRect(ap - aVO, 0, 1, aVO), a4B[q].fY.lineWidth = Math.max(Math.floor(aVO / 12), 3), a4B[q].fY.lineCap = "round";
		aVd = .35;
		ap = aVO + 1, a4B[q].fY.beginPath(), a4B[q].fY.moveTo(Math.floor(ap - aVd * aVO + 0), Math.floor(aVd * aVO)), a4B[q].fY.lineTo(Math.floor(ap - aVO + aVd * aVO), Math.floor(aVO - aVd * aVO + 0)), a4B[q].fY.stroke(), a4B[q].fY.beginPath(), a4B[
			q].fY.moveTo(Math.floor(ap - aVO + aVd * aVO), Math.floor(aVd * aVO)), a4B[q].fY.lineTo(Math.floor(ap - aVd * aVO + 0), Math.floor(aVO - aVd * aVO + 0)), a4B[q].fY.stroke()
	}

	function aVv(a8, ol) {
		for (var aW, q = ol - 1; 0 <= q; q--) aW = gb.gq(f.al, q), a8[q].aW !== aW && (a8[q].aW = aW, a8[q].aVi = Math.max(aW, a8[q].aVi), a8[q].qt = !0)
	}

	function aVy(a8, om) {
		for (var bU = f.al << 3, ah = ae.af.ah, tl = ae.af.tl, vd = ae.af.vd, q = om - 1; 0 <= q; q--) {
			var ve = vd[bU + q],
				aW = ah[ve];
			a8[q].aW !== aW ? (a8[q].aW = aW, a8[q].aVi = Math.max(aW, a8[q].aVi), a8[q].qt = !0) : a8[q].aVj || tl[ve] % 64 != 5 || (a8[q].aVj = !0, a8[q].qt = !0)
		}
	}

	function aVb(a4F) {
		a4F.canvas = document.createElement("canvas"), au.sn.font = a5W;
		var ap = aVY;
		a4F.uA < f.g && 0 === a4F.id && (ap += Math.floor(au.sn.measureText(cD.cE[a4F.uA] + "000").width)), ap += aVO, 0 === a4F.id && (ap += aVO), a4F.canvas.width = ap, a4F.canvas.height = aVO, a4F.fY = a4F.canvas.getContext("2d", {
			alpha: !0
		}), a4F.fY.font = a5W, v.w.textBaseline(a4F.fY, 1), v.w.textAlign(a4F.fY, 1)
	}

	function aVq(q) {
		return jy.sp() ? ao.ap - a4B[q].canvas.width - f7.gap : jy.aD
	}

	function aVr(q) {
		return Math.floor(2 * f7.gap + (jy.sp() ? fv.ar + f7.gap : 0) + jy.ar + q * (1.3 * aVO))
	}
	this.e = function() {
		aVZ = aVa = 0, a4B = [], this.resize()
	}, this.resize = function() {
		a5W = c5.ck, aVO = c5.fontSize + 5, aVO = Math.floor(1.25 * aVO), cu.cv.cw() && (aVO = Math.floor(1.25 * aVO)), a5P = Math.floor(.15 * aVO), au.sn.font = a5W, aVY = Math.floor(au.sn.measureText("02 000 000 0000").width);
		for (var q = a4B.length - 1; 0 <= q; q--) aVb(a4B[q]), aVc(q)
	}, this.kD = function() {
		for (var q = a4B.length - 1; 0 <= q; q--) a4B[q].qt && (a4B[q].qt = !1, aVc(q))
	}, this.dD = function(f9, fA) {
		if (2 !== f.j6 && 0 !== cD.ft[f.al] && !f.g1 && !v.c2.rO(f.al))
			for (var aVl, aVm, aVn, aVo = cu.cv.cw() ? aVO : 0, aVp = cu.cv.cw() ? Math.floor(.15 * aVO) : 0, q = a4B.length - 1; 0 <= q; q--)
				if (aVl = aVq(q), aVm = aVr(q), aVn = a4B[q].canvas.width, aVm - aVp <= fA && fA <= aVm + aVO + aVp) {
					if (aVl - aVo <= f9 && f9 <= aVl + aVO + aVo) return a4B[q].aVj || (a4B[q].qt = !0, a4B[q].aVj = !0, 0 === a4B[q].id ? gL.gM.rt(a4B[q].uA) : gL.gM.aEW(a4B[q].uA)), !0;
					if (0 === a4B[q].id && aVl + aVn - aVO - aVo <= f9 && f9 <= aVl + aVn + aVo) return jl.aFC(3), gL.gM.ga(g5.gW(), a4B[q].uA), !0
				} return !1
	}, this.bu = function() {
		var mq, mt, a8, ol;
		0 === cD.ft[f.al] || v.c2.rO(f.al) && !f.g1 || (mq = a4B.slice(0, aVZ), mt = a4B.slice(aVZ, aVZ + aVa), a8 = mq, ol = gb.gc(f.al), function(a8, ol) {
			if (aVZ !== ol) return 1;
			for (var q = ol - 1; 0 <= q; q--)
				if (a8[q].uA !== gb.gs(f.al, q)) return 1;
			return
		}(a8, ol) ? aVv(a8 = function(a8, ol) {
			var q, uA, ku, aW, aW0 = [];
			loop: for (q = 0; q < ol; q++) {
				for (uA = gb.gs(f.al, q), ku = 0; ku < a8.length; ku++)
					if (a8[ku].uA === uA) {
						aW0.push(a8.splice(ku, 1)[0]);
						continue loop
					} aW = gb.gq(f.al, q), aVb(aW = {
					uA: uA,
					aW: aW,
					aVi: aW,
					id: 0,
					qt: !0,
					aVj: !1,
					canvas: null,
					fY: null
				}), aW0.push(aW)
			}
			return aW0
		}(a8, ol), ol) : aVv(a8, ol), mq = a8, mt = function(a8) {
			var om = ae.af.rq[f.al];
			return function(a8, om) {
				if (aVa !== om) return 1;
				for (var bU = f.al << 3, vc = ae.af.vc, vd = ae.af.vd, q = om - 1; 0 <= q; q--) {
					var ve = vd[bU + q];
					if (a8[q].uA !== vc[ve]) return 1
				}
				return
			}(a8, om) ? aVy(a8 = function(a8, om) {
				var q, uA, ku, aW0 = [],
					bU = f.al << 3,
					vc = ae.af.vc,
					ah = ae.af.ah,
					vd = ae.af.vd;
				loop: for (q = 0; q < om; q++) {
					var ve = vd[bU + q];
					for (uA = vc[ve], ku = 0; ku < a8.length; ku++)
						if (a8[ku].uA === uA) {
							aW0.push(a8.splice(ku, 1)[0]);
							continue loop
						} ve = ah[ve], aVb(ve = {
						uA: uA,
						aW: ve,
						aVi: ve,
						id: 1,
						qt: !0,
						aVj: !1,
						canvas: null,
						fY: null
					}), aW0.push(ve)
				}
				return aW0
			}(a8, om), om) : aVy(a8, om), a8
		}(mt), aVZ = mq.length, aVa = mt.length, a4B = mq.concat(mt))
	}, this.aR = function() {
		if (0 !== cD.ft[f.al] && (!v.c2.rO(f.al) || f.g1))
			for (var q = a4B.length - 1; 0 <= q; q--) b5.drawImage(a4B[q].canvas, aVq(q), aVr(q))
	}
}

function a68() {
	this.aME = function(canvas, aM7, s5) {
		var ap = canvas.width,
			ar = canvas.height,
			eF = v.w.x(ap, ar),
			y = v.w.getContext(eF, !0),
			canvas = (y.drawImage(canvas, 0, 0), y.getImageData(0, 0, ap, ar));
		return aM7(canvas.data, ap, ar, s5), y.putImageData(canvas, 0, 0), eF
	}, this.aMC = function(a0, ap, ar) {
		for (var aD = ap - 1; 0 <= aD; aD--)
			for (var aE = ar - 1; 0 <= aE; aE--) {
				var q = 4 * (aD + aE * ap);
				a0[3 + q] = a0[q], a0[q] = a0[1 + q] = a0[2 + q] = 255
			}
	}, this.aM8 = function(a0, ap, ar) {
		for (var aD = ap - 1; 0 <= aD; aD--)
			for (var aE = ar - 1; 0 <= aE; aE--) {
				var q = 4 * (aD + aE * ap);
				a0[1 + q] > a0[2 + q] + 10 && (a0[3 + q] = a0[q], a0[1 + q] = a0[2 + q])
			}
	}, this.aMA = function(a0, ap, ar, s5) {
		for (var gap = Math.floor(Math.min(ap, ar) * s5), aD = 0; aD < ap; aD++)
			for (var q, aE = 0; aE < ar; aE++)(aD < gap || aE < gap || ap - gap <= aD || ar - gap <= aE) && (a0[3 + (q = 4 * (aD + aE * ap))] = 255 - 255 * (a0[1 + q] - a0[q]) / (255 - a0[q]))
	}, this.aW1 = function(a0, ap, ar, s5) {
		for (var aD = ap - 1; 0 <= aD; aD--)
			for (var aE = ar - 1; 0 <= aE; aE--) {
				var q = 4 * (aD + aE * ap);
				a0[q] = s5[0], a0[1 + q] = s5[1], a0[2 + q] = s5[2]
			}
	}, this.aM9 = function(a0, ap, ar, s5) {
		for (var gap = Math.floor(ap * s5), aD = 0; aD < ap; aD++)
			for (var q, aE = 0; aE < ar; aE++)(aD < gap || aE < gap || ap - gap <= aD || ar - gap <= aE) && (a0[q = 4 * (aD + aE * ap)] = a0[1 + q] = a0[2 + q] = 0)
	}, this.aMB = function(a0, ap, ar) {
		for (var aE, q, aD = ap - 1; 0 <= aD; aD--)
			for (aE = ar - 1; 0 <= aE; aE--) 200 < a0[1 + (q = 4 * (aD + aE * ap))] && a0[1 + q] - 20 > a0[q] && a0[1 + q] - 20 > a0[2 + q] ? a0[q] + a0[2 + q] < 40 ? a0[3 + q] = 0 : (a0[3 + q] = a0[q], a0[q] = 255, a0[1 + q] = 255, a0[2 + q] =
				255) : a0[q] < 50 && a0[1 + q] < 50 && a0[2 + q] < 50 && (a0[q] + a0[1 + q] + a0[2 + q] < 50 ? a0[3 + q] = 180 : a0[3 + q] = 180 + Math.floor(75 * (a0[q] + a0[1 + q] + a0[2 + q] - 50) / 100))
	}, this.aMD = function(a0, ap, ar) {
		for (var aE, q, aD = ap - 1; 0 <= aD; aD--)
			for (aE = ar - 1; 0 <= aE; aE--) a0[1 + (q = 4 * (aD + aE * ap))] > a0[q] + 20 && a0[1 + q] > a0[2 + q] + 20 && a0[q] + a0[2] < 40 && (a0[3 + q] = 255 - a0[1 + q], a0[q] = a0[1 + q] = a0[2 + q] = a0[q])
	}, this.a7P = function(a0, ap, ar, s5) {
		for (var hh = ap >> 1, aD = 0; aD < ap; aD++)
			for (var aE = 0; aE < ar; aE++) Math.sqrt((aD - hh) * (aD - hh) + (aE - hh) * (aE - hh)) > s5 * hh && (a0[4 * (aD + aE * ap) + 3] = 0)
	}
}

function aHL() {
	function aW3() {
		8 === f.jA && 1 === f.j6 && jQ.rP.rR()
	}

	function aW2(player) {
		f.gI ? (aGd.wN(player), cH.aW4(), f.j5 && f.jC.bu()) : aGf.y5(player)
	}
	this.rv = function(player) {
		c5.wm(player, player === f.al ? 21 : 22), aW2(player), aW3()
	}, this.rw = function(player) {
		1 === f.j6 && 0 !== cD.ft[player] && 2 !== cD.sR[player] && aW2(player), f.iz--, f.j1--, c5.wm(player, 4), v.c2.g3(2) && fv.kD(!0), aW3()
	}
}

function aHA() {
	var aW5, a8;
	this.e = function() {
		for (var q = (a8 = new Uint16Array(101)).length - 1; 0 <= q; q--) a8[q] = fD.fE(32768 * q, 100);
		this.jY(0)
	}, this.value = function(c9) {
		return a8[c9]
	}, this.zh = function() {
		return fD.fE(aW5 - 1, 2)
	}, this.jY = function(zg) {
		aW5 = 2 * zg % 32768 + 1
	}, this.random = function() {
		return aW5 = 167 * aW5 % 32768
	}, this.tI = function(a4R) {
		return fD.fE(a4R * this.random(), 32768)
	}, this.wk = function(c9) {
		return 0 !== c9 && this.random() < this.value(c9)
	}, this.xh = function(ca, ku) {
		return ca + this.tI(ku - ca)
	}
}

function a3P() {
	var aW6 = 0,
		aW7 = null;
	this.e = function() {
		null === aW7 && (aW7 = new Uint16Array(2 * ae.af.a3f)), aW6 = 0
	}, this.uG = function(aW8, tq) {
		var aW9 = aW7;
		aW9[aW6++] = aW8, aW9[aW6++] = tq
	}, this.a3q = function(player, aEi) {
		for (var aW9 = aW7, n = aW6, q = 0; q < n; q += 2)
			if (aW9[q] === aEi && ae.td.vl(aW9[q + 1]) && player === ae.af.ag[a9.eZ[2]] >> 3) return !0;
		return !1
	}, this.tr = function(aWA) {
		var a3G = ae.af.tl[aWA];
		if (!(a3G < 64)) {
			for (var aEi = ae.af.vc[aWA], aW9 = aW7, n = aW6, q = n - 2; 0 <= q; q -= 2)
				if (aW9[q] === aEi) {
					{
						aWE = void 0;
						var aWE = aW9[q + 1];
						ae.td.vl(aWE) && ae.tq.aOR(a9.eZ[2])
					}
					aW9[q] = aW9[n - 2], aW9[q + 1] = aW9[n - 1], n -= 2
				} aW6 = n
		}
	}, this.u2 = function(aWC, aWD) {
		for (var aWE = ae.af.vc[aWC], aEi = -1, aW9 = aW7, n = aW6, q = 1; q < n; q += 2)
			if (aW9[q] === aWE) {
				aEi = aW9[q - 1];
				break
			} if (-1 === aEi) return !1;
		if (!ae.td.vl(aEi)) return !1;
		var aWA = a9.eZ[2],
			vp = ae.af.vq[aWA];
		if (aWD === vp[vp.length - 1]) ae.af.vq[aWC] = ae.a0V.a2l(ae.af.vq[aWC], ae.a0V.a0W(vp));
		else {
			var aWF = ae.td.wA(vp, aWD);
			if (-1 === aWF) return !1;
			var aWG = ae.af.u3[aWA];
			aWF === aWG ? (aWA = cX.tp(ae.af.ad[aWA]), ae.af.vq[aWC] = ae.a0V.a2n(ae.af.vq[aWC], vp, aWF, aWD, cX.xR(vp[aWF], aWD) > cX.xR(vp[aWF], aWA))) : ae.af.vq[aWC] = ae.a0V.a2n(ae.af.vq[aWC], vp, aWF, aWD, aWG < aWF)
		}
		return !0
	}, this.aOR = function(vo) {
		var vp, aL = ae.af,
			a3G = aL.tl[vo];
		return a3G % 64 != 5 && (vp = aL.vq[vo], aL.tm[vo] = 65535 - aL.tm[vo], aL.u3[vo] = vp.length - aL.u3[vo] - 2, aL.vq[vo] = ae.a0V.a0W(vp), aL.tl[vo] = a3G - a3G % 64 + 5, !0)
	}
}

function aHM() {
	this.rP = new aWJ, this.result = new aWK, this.aWL = new aJ2, this.aWM = new aUX, this.aWN = new aTo, this.wf = new a7Z, this.e = function() {
		this.result.e()
	}
}

function aHV() {
	function aWO(e8) {
		var a8, e8 = e8.target.files;
		e8 && 0 < e8.length && (e8 = e8[0], "json" === (a8 = e8.name.split("."))[a8.length - 1].toLowerCase()) && ((a8 = new FileReader).onload = aWW, a8.readAsText(e8))
	}

	function aWW(e8) {
		var aWZ;
		f.j6 || (e8 = JSON.parse(e8.target.result), aWZ = f.data = new iq, aWa(e8, aWZ, "mapType", 0, 2), aWa(e8, aWZ, "mapProceduralIndex", 0, 255), aWa(e8, aWZ, "mapRealisticIndex", 0, 255), aWa(e8, aWZ, "mapSeed", 0, 16383), function(aWY, aWZ, hF,
				max) {
				aWY = aWY[hF];
				aWZ[hF] = aWg(aWY) ? aWY.slice(0, max) : aWZ[hF]
			}(e8, aWZ, "mapName", 20), function(aWY, aWZ, hF) {
				var qK;
				2 === aWZ.mapType && (!aWg(aWY = aWY[hF]) || aWY.length <= 20 ? aWZ.mapType = 0 : ((qK = new Image).onload = function() {
					jr.qL.qM(qK, 1), qK.onload = null, qK = null
				}, qK.src = aWY))
			}(e8, aWZ, "canvas"), aWa(e8, aWZ, "passableWater", 0, 1), aWa(e8, aWZ, "passableMountains", 0, 1), aWa(e8, aWZ, "playerCount", 1, 512), aWa(e8, aWZ, "humanCount", 1, 1), aWa(e8, aWZ, "selectedPlayer", 0, 0), aWa(e8, aWZ, "gameMode",
				0, 1), aWa(e8, aWZ, "playerMode", 0, 0), aWa(e8, aWZ, "battleRoyaleMode", 0, 0), aWa(e8, aWZ, "numberTeams", 0, 8), aWa(e8, aWZ, "isZombieMode", 0, 0), aWa(e8, aWZ, "isContest", 0, 0), aWa(e8, aWZ, "isReplay", 0, 0), aWd(e8, aWZ,
				"elo", 16, 2, 16383), aWa(e8, aWZ, "colorsType", 0, 1), aWa(e8, aWZ, "colorsPersonalized", 0, 1), aWd(e8, aWZ, "colorsData", 32, 512, 262143), aWa(e8, aWZ, "selectableColor", 0, 1), aWd(e8, aWZ, "teamPlayerCount", 16, 9, 512),
			aWa(e8, aWZ, "neutralBots", 0, 1), aWa(e8, aWZ, "botDifficultyType", 0, 3), aWa(e8, aWZ, "botDifficultyValue", 0, 15), aWd(e8, aWZ, "botDifficultyTeam", 8, 9, 15), aWd(e8, aWZ, "botDifficultyData", 8, 512, 15), aWa(e8, aWZ,
				"spawningType", 0, 2), aWa(e8, aWZ, "spawningSeed", 0, 16383), aWd(e8, aWZ, "spawningData", 16, 1024, 4095), aWa(e8, aWZ, "selectableSpawn", 0, 1), aWa(e8, aWZ, "playerNamesType", 0, 2),
			function(aWY, aWZ, hF, size, max) {
				var mq = aWY[hF];
				if (Array.isArray(mq)) {
					for (var mt = new Array(size), n = Math.min(mq.length, size), q = 0; q < n; q++) mt[q] = aWg(mq[q]) ? mq[q].slice(0, max) : "";
					mt.fill("", n), aWZ[hF] = mt
				}
			}(e8, aWZ, "playerNamesData", 512, 20), aWa(e8, aWZ, "selectableName", 0, 1), aWa(e8, aWZ, "aIncomeType", 0, 2), aWa(e8, aWZ, "aIncomeValue", 0, 255), aWd(e8, aWZ, "aIncomeData", 8, 512, 255), aWa(e8, aWZ, "tIncomeType", 0, 2), aWa(
				e8, aWZ, "tIncomeValue", 0, 255), aWd(e8, aWZ, "tIncomeData", 8, 512, 255), aWa(e8, aWZ, "iIncomeType", 0, 2), aWa(e8, aWZ, "iIncomeValue", 0, 255), aWd(e8, aWZ, "iIncomeData", 8, 512, 255), aWa(e8, aWZ, "sResourcesType", 0, 2),
			aWa(e8, aWZ, "sResourcesValue", 0, 2047), aWd(e8, aWZ, "sResourcesData", 16, 512, 2047), dk.i6(), dk.af.i0[0] = 0, dk.e3(19))
	}

	function aWa(aWY, aWZ, hF, min, max) {
		aWY = aWY[hF];
		aWZ[hF] = "number" == typeof aWY && min <= aWY && aWY <= max ? Math.floor(aWY) : aWZ[hF]
	}

	function aWg(bJ) {
		return "string" == typeof bJ
	}

	function aWd(aWY, aWZ, hF, aWh, size, max) {
		var mq = aWY[hF];
		if (Array.isArray(mq)) {
			for (var mt = new(8 === aWh ? Uint8Array : 16 === aWh ? Uint16Array : Uint32Array)(size), n = Math.min(mq.length, size), q = 0; q < n; q++) mt[q] = fD.ok(mq[q], 0, max);
			aWZ[hF] = mt
		}
	}
	this.ot = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aWO, input.click()
	}, this.ou = function() {
		for (var aWR, aWU, a4F = f.data, keys = Object.keys(a4F), aWP = {}, q = 0; q < keys.length; q++) {
			var key = keys[q];
			a4F[key] instanceof Uint8Array || a4F[key] instanceof Uint16Array || a4F[key] instanceof Uint32Array ? aWP[key] = Array.from(a4F[key]) : aWP[key] = a4F[key]
		}
		aWP.canvas = 2 === aWP.mapType && aWP.canvas ? aWP.canvas.toDataURL() : null, aWR = aWP, aWR = JSON.stringify(aWR, null, 2), aWR = new Blob([aWR], {
			type: "application/json"
		}), (aWU = document.createElement("a")).href = URL.createObjectURL(aWR), aWU.download = "tt_scenario.json", aWU.click()
	}
}

function aGr() {
	var aCE, ar, aWi, aWj, aWk, aWl, aWm, aWn, aWo;

	function pL() {
		return g5.rZ(c5.ra()) ? gu.f0 ? __fx.settings.keybindButtons ? g5.aE - 2 * g5.ar - 3 * aWi : g5.aE - g5.ar - 2 * aWi : __fx.settings.keybindButtons ? g5.aE - g5.ar - 2 * aWi : g5.aE - aWi : fG.rZ(c5.rb()) ? gu.f0 ? fG.pL() - g5.ar - 2 * aWi :
			fG.pL() - aWi : gu.f0 ? ao.ar - g5.ar - (rc.rd() + 1) * aWi : ao.ar - rc.rd() * f7.gap
	}

	function aWt(d8, bJ, id, c9, aWv, aWw, wF, aWx, aWy, cS, aX4) {
		var q, fY, k, c4, aX5 = void 0 !== aWy,
			ap = Math.floor(fK.measureText(bJ, c5.ck) + 1.5 * aWj + (aX5 ? ar : 1.5 * aWj));
		if (c0.d1 = !0, aX4 || jR.cC(bJ, aWy), ap + 2 * aWi + g5.ar > ao.ap && !aX5 && 50 !== id && 20 < bJ.length) aWt(d8, (aX4 = v.bB.uT(bJ))[0], id, c9, aWv, aWw, wF, aWx, aWy, cS, !0), aWt(d8, aX4[1], id, c9, aWv, aWw, wF, aWx, aWy, cS, !0);
		else if (aX4 = ap + (50 === id ? aWk : 0), (k = document.createElement("canvas")).width = ap, k.height = ar, (fY = k.getContext("2d", {
				alpha: !0
			})).font = c5.ck, v.w.textBaseline(fY, 1), v.w.textAlign(fY, 0), fY.clearRect(0, 0, ap, ar), fY.fillStyle = aWw, fY.fillRect(0, 0, ap, ar), fY.fillStyle = aWv, fY.fillText(bJ, Math.floor(1.5 * aWj), Math.floor(ar / 2)), aX5 && (fY
				.imageSmoothingEnabled = !0, tL.a0.aG8(aWy, fY, ap - ar, 0, ar)), 0 === (c4 = {
				fr: d8,
				bJ: bJ,
				id: id,
				player: c9,
				canvas: k,
				aWv: aWv,
				aWw: aWw,
				ap: ap,
				aX0: aX4,
				wF: wF,
				aWx: aWx,
				aWy: aWy,
				cS: cS
			}).fr || 0 < aCE.length && 0 < aCE[0].fr) aCE.unshift(c4);
		else {
			for (q = 1; q < aCE.length; q++)
				if (0 < aCE[q].fr) return void aCE.splice(q, 0, c4);
			aCE.push(c4)
		}
	}

	function aWu(hh, tg, ku) {
		return "rgb(" + hh + "," + tg + "," + ku + ")"
	}

	function aX6(id, hd) {
		for (var n = aCE.length, q = 0; q < n; q++) aCE[q].id === id && hd-- <= 0 && (aCE.splice(q, 1), q--, n--)
	}

	function aX7(id, player) {
		for (var tx = !1, q = aCE.length - 1; 0 <= q; q--) aCE[q].id !== id || player !== f.g && aCE[q].player !== player || (aCE.splice(q, 1), tx = !0);
		return tx
	}

	function aXG(bJ) {
		aWt(340, bJ, 6, 0, aWu(215, 245, 255), b7.cF, -1, !1)
	}
	this.aRo = "", this.e = function() {
		var self;
		aWn = 0, aWm = cu.cv.cw() ? 7 : 12, aWl = {
				cQ: [0, 0, 0],
				aWp: [0, 0, 0],
				aWq: [220, 180, 180],
				aRY: [0, 0, 0],
				eF: [0, 0, 0]
			}, aCE = [], this.resize(), f.gI && this.wm(0, 18), au.zY.zZ[au.m3].name.length && aXG(L(459, [au.zY.zZ[au.m3].name])), au.zY.zZ[au.m3].aRl && aXG(L(460, [au.zY.zZ[au.m3].aRl])), aXG(L(461, [au.av - 2 + "x" + (au.ef - 2)])), aXG(L(
				462, [v.bB.bC(jh.r8)])), jh.r8 !== jh.aMI && aXG(L(463, [v.bB.bC(jh.aMI) + " (" + v.bB.fL(100 * jh.aMI / jh.r8, 1) + ")"])), 0 < jh.aMJ && aXG(L(439, [v.bB.bC(jh.aMJ) + " (" + v.bB.fL(100 * jh.aMJ / jh.r8, 1) + ")"])), 0 < jh
			.mk && aXG(L(464, [v.bB.bC(jh.mk) + " (" + v.bB.fL(100 * jh.mk / jh.r8, 1) + ")"])), 10 === f.jA && aWt(120, L(465), 6, 0, aWu(235, 255, 120), b7.cF, -1, !1), 0 !== (self = this).aRo.length && (aWt(200, self.aRo, 0, 0, b7.b9, b7.cF, -
				1, !1), self.aRo = ""), f.jB && aWt(340, L(419), 6, 0, aWu(255, 200, 0), b7.cF, -1, !1)
	}, this.resize = function() {
		var aW0, q;
		if (ar = (ar = Math.floor((cu.cv.cw() ? .031 : .0249) * ao.cx)) < 10 ? 10 : ar, this.fontSize = Math.floor(2 * ar / 3), this.ck = v.w.bA(1, this.fontSize), aWi = f7.gap, aWj = Math.floor(ar / 5), 0 < aCE.length)
			for (aW0 = aCE, aCE = [], q = aW0.length - 1; 0 <= q; q--) aWt(aW0[q].fr, aW0[q].bJ, aW0[q].id, aW0[q].player, aW0[q].aWv, aW0[q].aWw, aW0[q].wF, aW0[q].aWx, aW0[q].aWy, aW0[q].cS, !0);
		this.aWz()
	}, this.aWz = function() {
		aWo = document.createElement("canvas");
		var bJ = L(420),
			fY = (aWk = fK.measureText(bJ, this.ck) + 5 * aWj, aWo.height = ar, aWo.width = aWk, aWo.getContext("2d", {
				alpha: !0
			}));
		fY.font = this.ck, v.w.textBaseline(fY, 1), v.w.textAlign(fY, 1), fY.clearRect(0, 0, aWk, ar), fY.fillStyle = b7.xB, fY.fillRect(0, 0, aWk, ar), fY.fillStyle = b7.b9, fY.fillText(bJ, Math.floor(aWk / 2), Math.floor(ar / 2))
	}, this.ra = function() {
		var n;
		return gu.f0 ? gu.ap : 0 === (n = aCE.length) ? 0 : 1 === n ? aCE[0].aX0 : d2(aCE[0].aX0, aCE[1].aX0)
	}, this.rb = function() {
		var n = aCE.length;
		return gu.f0 ? n ? d2(gu.ap, aCE[0].aX0) : gu.ap : 0 === n ? 0 : 1 === n ? aCE[0].aX0 : 2 === n ? d2(aCE[0].aX0, aCE[1].aX0) : d2(d2(aCE[0].aX0, aCE[1].aX0), aCE[2].aX0)
	}, this.dD = function(aD, aE) {
		for (var az, a8H, aX1 = pL(), q = aCE.length - 1; 0 <= q; q--)
			if ((a8H = aX1 - (q + 1) * ar) <= aE && aE < a8H + ar) return 50 === aCE[q].id ? aD >= ao.ap - aWk - aWi - aCE[q].ap && (aD >= ao.ap - aWk - aWi ? gL.c2.oB(aCE[q].player) : kB.aAt(aCE[q].player, 800, !1, 0), !0) : aD >= ao.ap - aCE[q]
				.ap - aWi && (736 === aCE[q].id ? window.open("https://" + aCE[q].bJ, "_blank") : aCE[q].aWx && (aCE[q].cS && aCE[q].cS.ca ? (a8H = aCE[q].cS.a2, az = cX.cY(a8H) - 10, a8H = cX.cZ(a8H) - 10, kB.aX2(az, a8H, 19 + az, 19 +
					a8H)) : aCE[q].cS && aCE[q].cS.ku ? kB.aX3(aCE[q].player, aCE[q].cS.tv) : (kB.aAt(aCE[q].player, 800, !1, 0), 0 <= aCE[q].wF && (az = aCE[q].wF, aCE[q].wF = aCE[q].player, aCE[q].player = az))), !0);
		return !1
	}, this.cC = function(d8, bJ, id, c9, aWv, aWw, wF, aWx, aWy, cS) {
		aWt(d8, bJ, id, c9, aWv, aWw, wF, aWx, aWy, cS)
	}, this.aFE = function(lE) {
		aWt(300, lE, 252, 0, b7.b9, b7.cF, -1, !1)
	}, this.rI = function(id) {
		for (var q = aCE.length - 1; 0 <= q; q--) aCE[q].id === id && (aCE[q].fr = 1)
	}, this.wm = function(player, id) {
		0 === id ? (fK.uG(player, 0), aX6(423, 2), aWt(160, L(421, [cD.cE[player]]), 423, player, "rgb(10,220,10)", b7.cF, -1, !1)) : 1 === id ? (aX7(50, f.g), fK.uG(player, 1), aWt(360, L(422, [cD.cE[player]]), 0, player, b7.aJs, b7.cF, -1, !0),
				kB.aAt(player, 2700, !1, 0)) : 2 === id ? (fK.uG(player, 2), aWt(0, L(423), 0, player, "rgb(10,255,255)", b7.cF, -1, !0), kB.aAt(player, 2700, !1, 0)) : 3 === id ? (fK.uG(player, 2), aWt(0, L(424, [cD.cE[player]]), 0, player, b7
				.b9, b7.cF, -1, !0), kB.aAt(player, 2700, !1, 0)) : 4 === id ? this.wn(1, player, player) : 5 === id ? v.c2.rO(f.al) || (function(id, a4R) {
				var q, aXD = 0,
					n = aCE.length;
				for (q = 0; q < n; q++)
					if (aCE[q].id === id && a4R <= ++aXD) return aCE.splice(q, 1)
			}(1, 5), k4.aE1(player) && aWt(180, L(425, [cD.cE[player]]), 1, player, aWu(255, 200, 180), b7.cF, -1, !0), v.c2.tw(player, 10) && (aX6(573, 0), aWt(180, L(426, [cD.cE[player]]), 573, player, b7.aJs, b7.cF, -1, !0))) : 18 === id ?
			aWt(255, L(427), 18, 0, b7.b9, b7.cF, -1, !1) : 21 === id ? aWt(220, L(428), id, 0, b7.b9, b7.cF, -1, !1) : 22 === id ? this.wn(2, player, player) : 59 === id && aWt(0, L(429), id, 0, b7.aK2, b7.cF, 0, !1)
	}, this.aFM = function(lE) {
		aWt(200, L(430, [lE]), 94, 0, b7.b9, b7.aJq, -1, !1)
	}, this.aUh = function(aX9) {
		if (f.al === aX9 && !f.j5 && !f.g1)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aWt(0, "Your Win Count is now " + __fx.wins.count, 3, aX9, b7.b9, b7.cF, -1, !0);
		cD.fh[aX9] && (fK.uG(aX9, 2), f.iy < 100 ? aWt(0, L(424, [cD.cE[aX9]]), 3, aX9, b7.b9, b7.cF, -1, !0) : aWt(0, L(431, [cD.cE[aX9]]), 3, aX9, b7.b9, b7.cF, -1, !0))
	}, this.aGN = function(a3) {
		var bJ, aXA, fm = "(" + cX.cY(a3 >> 2) + ", " + cX.cZ(a3 >> 2) + ")",
			aWx = !1,
			player = 0;
		a6.u0(a3) ? a6.cT(a3) ? fm = L(432, [fm]) : (player = a6.gU(a3), f.g1 && !1 === __fx.hoveringTooltip.active && (f.al = player), bJ = L(433, [v.fY.fZ(cD.sQ[player], v.w.bA(0, 10), 150)]) + "   ", bJ = (bJ += L(434, [v.bB.bC(cD.mY[
			player])]) + "   ") + L(435, [v.bB.bC(cD.fh[player])]) + "   ", f.j && (aXA = l.uj[l.m[l.cR[player]]], bJ += L(271) + ": " + aXA + "   "), v.c2.rO(player) && (bJ += L(40) + ": " + jn.oq[jn.aW[player]] + "   "), fm = bJ = (
			bJ += L(436, [player]) + "   ") + L(437, [fm]), aWx = !0) : fm = a6.gP(a3) ? L(438, [fm]) + "   #" + a6.vQ(a3) : L(439, [fm]), aX6(55, 0), aWt(220, fm, 55, player, b7.b9, b7.cF, -1, aWx, void 0, void 0, !0)
	}, this.aGO = function(aXB) {
		var aL = ae.af,
			player = aL.ag[aXB] >> 3,
			bJ = (c0.d1 = !0, aX6(55, 0), L(440, [cD.cE[player]]) + "   ");
		aWt(220, bJ += L(434, [v.bB.bC(aL.ah[aXB])]), 55, player, b7.b9, b7.cF, -1, !0)
	}, this.o9 = function(iL, iM, o8) {
		iL === f.al ? aWt(175, " " + L(441, [cD.cE[iM]]) + ": ", 1001, iM, aWu(200, 255, 210), b7.cF, -1, !0, o8) : this.aXC(iL, o8)
	}, this.aXC = function(iL, o8) {
		aX6(1e3, 0), aWt(175, cD.cE[iL] + ": ", 1e3, iL, b7.b9, "rgba(5,60,25,0.9)", -1, !0, o8)
	}, this.aUg = function() {
		var lE;
		f.jH ? (lE = L(442), fK.aUf(L(443), 2, 1, 12), aWt(0, lE, 40, 0, "rgb(10,220,10)", b7.cF, -1, !1)) : (lE = L(444), fK.aUf(L(445), 2, 0, 16), aWt(0, lE, 41, 0, b7.b9, b7.cF, -1, !1))
	}, this.xi = function() {
		var hd = cD.cE,
			f6 = f.data;
		aWt(300, hd[0] + " [" + f.jD.xp(f6.elo[0]) + "] vs " + hd[1] + " [" + f.jD.xp(f6.elo[1]) + "]", 65, 0, b7.l8, "rgba(100,255,255,0.75)", -1, !1)
	}, this.t8 = function(lE) {
		aWt(350, lE, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.rJ = function(qx) {
		aWt(0, L(qx ? 446 : 447), 247, 0, b7.l6, b7.cF, -1, !1)
	}, this.xr = function(xo, xq, aXE) {
		var f6 = f.data,
			hd = cD.cE;
		aWt(0, hd[0] + ": " + f.jD.xp(f6.elo[0]) + " -> " + xo, 66, 0, b7.b9, aXE[0], -1, !1), aWt(0, hd[1] + ": " + f.jD.xp(f6.elo[1]) + " -> " + xq, 66, 1, b7.b9, aXE[1], -1, !1)
	}, this.oC = function(player, id) {
		0 === id ? aX7(50, player) ? (aWt(128, L(448, [cD.cE[player]]), 52, player, aWu(180, 255, 180), b7.cF, -1, !0), k4.tK(player, 2, 255)) : aWt(384, L(449, [cD.cE[player]]), 51, player, aWu(210, 210, 255), b7.cF, -1, !0) : aX7(51, player) ?
			(aWt(128, L(450, [cD.cE[player]]), 52, player, b7.b9, "rgba(60,120,10,0.9)", -1, !0), k4.tK(player, 2, 255)) : (aWt(384, L(451, [cD.cE[player]]), 50, player, b7.b9, "rgba(90,90,90,0.9)", -1, !0), k4.tK(player, 2, 96))
	}, this.oG = function(cQ, target) {
		var color = aWu(210, 255, 210);
		1 < cQ.length ? aWt(230, L(452, [cQ.length, cD.cE[target]]), 66, target, color, b7.cF, -1, !0) : aWt(230, L(453, [cD.cE[cQ[0]], cD.cE[target]]), 66, cQ[0], color, b7.cF, target, !0)
	}, this.aPH = function(player, target) {
		aWt(230, L(454, [cD.cE[player], cD.cE[target]]), 66, player, b7.b9, "rgba(75,65,5,0.9)", target, !0)
	}, this.c8 = function(id, hd) {
		aX6(id, hd)
	}, this.rS = function(id, player) {
		aX7(id, void 0 === player ? f.g : player)
	}, this.c6 = function(id) {
		for (var q = aCE.length - 1; 0 <= q; q--)
			if (aCE[q].id === id) return aCE[q];
		return null
	}, this.pa = function(a4D, aXF, player) {
		2 !== cD.sR[f.al] && aWt(200, 1 === a4D ? L(455, [cD.cE[player]]) : L(456, [v.bB.bC(a4D), cD.cE[player]]), 30, player, "rgb(190,255,190)", b7.cF, -1, !0)
	}, this.pc = function(a4D, player) {
		2 !== cD.sR[f.al] && (aX6(31, 0), a4D = " (" + v.bB.bC(a4D) + ") 💸", aWt(150, a4D = v.c2.rO(player) ? L(457) + a4D : L(458, [cD.cE[player]]) + a4D, 31, player, b7.l8, "rgba(205,205,205,0.9)", -1, !0))
	}, this.aXH = function(x5) {
		for (var eF = c0.c1(), q = 2; 0 <= q; q--) 0 < aWl.aRY[q] && (x5 || aWl.eF[q] < eF - 220) && this.aXI(q)
	}, this.aXI = function(id) {
		var bJ, n = aWl.aRY[id],
			player = aWl.cQ[id];
		aWl.aRY[id] = 0, 1 === n ? (0 === id ? bJ = L(466, [cD.cE[player], cD.cE[aWl.aWp[0]]]) : 1 === id ? bJ = L(467, [cD.cE[player]]) : 2 === id ? bJ = L(468, [cD.cE[player]]) : 3 === id && (bJ = L(469, [cD.cE[player]])), aX6(7, 0), aWt(aWl
			.aWq[id], bJ, 7, aWl.aWp[id], b7.b9, b7.cF, -1, !0)) : (bJ = L(0 === id ? 470 : 1 === id ? 471 : 472, [n]), aX6(7, 0), aWt(aWl.aWq[id], bJ, 7, player, b7.b9, b7.cF, -1, !1))
	}, this.wn = function(id, gT, wF) {
		var eF = c0.c1(),
			n = aWl.aRY[id] + 1;
		aWl.aRY[id]++, aWl.cQ[id] = gT, aWl.aWp[id] = wF, 1 === n && (aWl.eF[id] = eF), (1 === n && (f.iz < 32 || 2 === f.j6) || 1 < n && (aWl.eF[id] < eF - 140 || 2 === f.j6)) && this.aXI(id)
	}, this.bu = function() {
		aGe.bu();
		for (var xl = (xl = aCE.length - aWm) <= 1 ? 1 : xl * xl, q = aCE.length - 1; 0 <= q; q--) 0 < aCE[q].fr && (aCE[q].fr -= xl, aCE[q].fr <= 0) && (c0.d1 = !0, aCE.splice(q, 1));
		! function() {
			var hd, q;
			if (128 !== aWn && !(++aWn < 128))
				for (hd = 5, q = cH.cI - 1; 0 <= q; q--) 1 === cD.sR[cH.cK[q]] && 0 < hd-- && aWt(240, L(469, [cD.cE[cH.cK[q]]]), 1, cH.cK[q], b7.l8, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.aXH(!1)
	}, this.aR = function() {
		for (var fC, aE = pL(), q = aCE.length - 1; 0 <= q; q--) fC = aE - (q + 1) * ar, 50 === aCE[q].id ? (b5.drawImage(aCE[q].canvas, ao.ap - aCE[q].ap - aWk - aWi, fC), b5.drawImage(aWo, ao.ap - aWk - aWi, fC)) : b5.drawImage(aCE[q].canvas,
			ao.ap - aCE[q].ap - aWi, fC)
	}, this.aXK = function(id, aW) {
		var fm, aXL = b7.aJe;
		0 === id ? fm = L(473) : 1 === id ? (fm = L(474), aXL = b7.aJz) : 2 === id ? fm = L(475) : 3 === id ? fm = L(476) : (fm = v.bB.bC(aW), aXL = 5 === id ? b7.aJz : b7.cF), aX6(74, 0), aWt(0, fm, 74, 0, b7.b9, aXL, -1, !1, void 0, void 0, !0)
	}
}

function a7W() {
	var aXM = 0,
		aXN = "",
		aXO = 0,
		aXP = 0,
		aXQ = 0;

	function aXS(lM) {
		bZ.zy.a5K(3, lM)
	}

	function aXb(hd) {
		aXM = 1, la.message.a4s({
			id: 6,
			value: hd
		})
	}

	function aXV(lE) {
		var aXe = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return lE.match(aXe)
	}
	this.aJM = function(lE) {
		var aXR, a8, aXX;
		if (aXM) return aXM = 0, "yes" === (aXR = lE.toLowerCase()) || "y" === aXR ? void aXS(aXN) : void la.message.a4s({
			id: 5,
			lG: 7
		});
		!(lE.indexOf("@") < 0) && (aXR = aXV(lE)) ? (aXN = lE, a8 = function(aXU) {
			for (var n = aXU.length, aXd = [0, 0, 0, 0], q = 0; q < n; q++)
				for (var ap = aXU[q], ca = 0; ca < 4; ca++) ap === "@room" + (ca + 1) && (aXd[ca] = 1);
			if ((aXP = v.aN.dr(aXd)) % 4 == 0) return v.aN.aF4(la.lb.lZ);
			for (ca = 0; ca < 4; ca++) aXd[ca] = aXd[ca] ? la.lb.lZ[ca] : [];
			return v.aN.aF4(aXd)
		}(aXR), function(aXU, aXX, lE) {
			if (!aXO) return;
			for (var n = aXX.length, q = 0; q < n; q++) 2 === aXX[q].id && (lE = lE.replace(aXU[aXX[q].t], "@" + aXX[q].ff));
			return aXM = 1, aXS((aXN = lE).slice(0, 126) + "|"), 1
		}(aXR, aXX = function(aXU) {
			for (var aXX = [], n = (aXQ = aXO = 0, aXU.length), q = 0; q < n; q++) {
				var ap = aXU[q],
					aL = ap.length;
				v.bB.startsWith(ap, "@[") ? aL <= 9 && v.bB.uY(ap, "]") && aXX.push({
					id: 0,
					ff: ap.substring(2, aL - 1).toUpperCase()
				}) : 6 === aL ? v.bB.startsWith(ap, "@room") || (aXQ++, aXX.push({
					id: 1,
					ff: bh.bi.p9(ap.substring(1), 5)
				})) : 1 < aL && aL < 5 && 0 <= (aL = sB.data.sC(ap.substring(1))) && (aXX.push({
					id: 2,
					ff: aL,
					t: q
				}), aXO = 1)
			}
			return aXX
		}(aXR), lE) || (0 === aXX.length ? aXP || function(aXU) {
			for (var n = aXU.length, q = 0; q < n; q++) {
				var ap = aXU[q];
				if ("@all" === ap || "@everyone" === ap) return 1
			}
			return
		}(aXR) ? aXb(a8.length) : aXS(lE) : aXR.length === aXQ ? aXS(lE) : (function(a8, aXX) {
			var aL = aXX.length;
			if (0 === aL) return;
			var n = a8.length;
			loop: for (var q = n - 1; 0 <= q; q--) {
				for (var ca = 0; ca < aL; ca++)
					if (0 === aXX[ca].id) {
						if (aXX[ca].ff === v.bB.li(a8[q].username)) continue loop
					} else if (1 === aXX[ca].id && aXX[ca].ff === a8[q].ij) continue loop;
				a8[q] = a8[--n], a8.pop()
			}
		}(a8, aXX), aXb(a8.length)))) : aXS(lE)
	}, this.aXf = function(lE) {
		var aXU = aXV(lE);
		if (aXU)
			for (var nL = new RegExp("^[0-9]+$"), n = aXU.length, q = 0; q < n; q++) {
				var ap = aXU[q].substring(1),
					aL = ap.length;
				1 <= aL && aL <= 3 && nL.test(ap) && (aL = parseInt(ap, 10), !isNaN(aL)) && 0 <= aL && aL < sB.data.a8.length && (lE = lE.replace("@" + ap, "@" + sB.data.a8[aL]))
			}
		return lE
	}
}

function aH3() {
	var aXg, aXh, size, uA, aW, aXi;

	function aXj(player) {
		return player < f.iy ? aXg * player : aXg * f.iy + aXh * (player - f.iy)
	}
	this.e = function() {
		aXg = f.iy < 16 ? 12 : 8, aXh = 4;
		var n = aXj(f.g);
		size = new Uint8Array(f.g), uA = new Uint16Array(n), aW = new Uint32Array(n), aXi = new Uint8Array(n)
	}, this.aEX = function(aXk, aXl) {
		var aXm = this.mZ(aXk, aXl),
			aXl = (this.mX(aXk, aXl, 0), v.c2.uB(aXk, aXm));
		fI.mT(aXk, aXm - aXl, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.wh = function(player, aXl) {
		var aXp, aXl = function(player, aXl) {
			var q, aL = aXj(player);
			for (q = size[player] - 1; 0 <= q; q--)
				if (uA[aL + q] === aXl) return q;
			return size[player]
		}(player, aXl);
		aXl !== size[player] && (aXp = aW[aXj(player) + aXl], this.a8l(player, aXl), this.uG(player, aXp, f.g))
	}, this.uE = function(player, aXl) {
		for (var aL = aXj(player), q = size[player] - 1; 0 <= q; q--)
			if (uA[aL + q] === aXl) return !0;
		return !1
	}, this.uF = function(player) {
		return player < f.iy ? size[player] < aXg : size[player] < aXh
	}, this.gc = function(player) {
		return size[player]
	}, this.gs = function(player, q) {
		return uA[aXj(player) + q]
	}, this.gq = function(player, q) {
		return aW[aXj(player) + q]
	}, this.mZ = function(player, aXl) {
		for (var aL = aXj(player), q = size[player] - 1; 0 <= q; q--)
			if (uA[aL + q] === aXl) return aW[aL + q];
		return 0
	}, this.vm = function(player) {
		for (var aL = aXj(player), ff = 0, q = size[player] - 1; 0 <= q; q--) ff += aW[aL + q];
		return ff
	}, this.mX = function(player, aXl, aXp) {
		for (var aL = aXj(player), q = size[player] - 1; 0 <= q; q--) uA[aL + q] === aXl && (aW[aL + q] = aXp)
	}, this.mB = function(player, q, aXp) {
		aW[aXj(player) + q] = Math.max(aXp, 0)
	}, this.mF = function(player, q) {
		aXi[aXj(player) + q] = 0
	}, this.a8g = function(player, q) {
		return aXi[aXj(player) + q]
	}, this.uG = function(player, aXp, aXl) {
		cU.aOd.aQh[player] = cU.aOd.aQh[aXl] = 8, v.c2.pZ(aXl) && fI.fg[6 - v.c2.rO(player)]++;
		for (var aL = aXj(player), q = size[player] - 1; 0 <= q; q--)
			if (uA[aL + q] === aXl) return aW[aL + q] += aXp, void(aW[aL + q] = aW[aL + q] > f.it ? f.it : aW[aL + q]);
		uA[aL + size[player]] = aXl, aW[aL + size[player]] = aXp, aXi[aL + size[player]] = 1, size[player]++, aXl === f.al ? c5.wm(player, 5) : player < f.iy && player === f.al && k4.aE1(aXl)
	}, this.a8l = function(player, t) {
		var ca, aL;
		if (0 !== size[player])
			for (aL = aXj(player), size[player]--, ca = t; ca < size[player]; ca++) uA[aL + ca] = uA[aL + ca + 1], aW[aL + ca] = aW[aL + ca + 1], aXi[aL + ca] = aXi[aL + ca + 1]
	}, this.wP = function(player) {
		for (var ca, aL, wa = [], q = cH.cI - 1; 0 <= q; q--)
			for (aL = aXj(cH.cK[q]), ca = size[cH.cK[q]] - 1; 0 <= ca; ca--)
				if (uA[aL + ca] === player) {
					wa.push(cH.cK[q]);
					break
				} return wa
	}
}

function aHP() {
	this.jW = 2, this.aFX = 1763, this.z9 = 0;
	this.rVersion = 25, this.e = function() {
		this.nD = "2.16.59", this.bM = "21 Oct 2026 [" + this.nD + "]", this.hostname = window.location.hostname.toLowerCase(), this.nN = 0 <= this.hostname.indexOf("territorial.io"), this.zA = 0 <= this.hostname.indexOf("github.io"), this.a5e =
			0 <= this.hostname.indexOf("game.territorial.io"), this.nO = function() {
				try {
					return window.self !== window.top
				} catch (e8) {
					return !0
				}
			}(), this.a5I = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.nN + " validMod: " + +this.zA)
	}, this.nC = 0
}

function nj(nV) {
	var nW = document.createElement("div"),
		nb = document.createElement("div");
	this.fM = function() {
			nb.textContent = "", la.tb.tU && la.tb.eD(1);
			for (var aCF = document.createDocumentFragment(), aXv = la.af.yD[0], lb = la.lb.lZ[aXv], y3 = la.lb.y3[aXv], q = 0; q < lb.length; q++) ! function(aCF, c4, aXx, aXv) {
				var a56 = document.createElement("span");
				a56.textContent = (aXx ? "🟢 " : "⚪ ") + la.td.lR(c4, aXv), a56.style.color = la.td.lT(c4.lU), 11 === c4.lU && (a56.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				a56.style.cursor = "pointer", a56.style.margin = "0.2em 0.2em 0.2em 0.2em", a56.style.width = a56.style.maxWidth = 2 === aXv ? "10em" : "9em", a56.style.height = a56.style.maxHeight = "1.4em", a56.style.whiteSpace = "nowrap", a56
					.style.overflow = "hidden", a56.style.textOverflow = "ellipsis", a56.style.font = "inherit", a56.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (aXx = __fx.utils.getDuplicateIpHighlightColor(c4, la.lb
						.lZ[aXv], "tf")) && (a56.style.backgroundColor = aXx, a56.style.borderRadius = "0.3em");
				la.td.lc(c4) && (a56.style.textDecoration = "underline"), c4.ii && (a56.style.textDecorationLine = "underline", a56.style.textDecorationStyle = "dotted");
				a56.onclick = function(e8) {
					nV(e8, c4)
				}, nm.nn() || (a56.onmouseover = function(e8) {
					la.tb.tY(e8.target, c4, 1)
				}), aCF.appendChild(a56)
			}(aCF, lb[q], q < y3, aXv);
			nb.appendChild(aCF)
		}, this.show = function(h5) {
			h5.appendChild(nW)
		}, this.eD = function(h5) {
			dk.removeChild(h5, nW)
		}, this.resize = function() {
			nb.style.fontSize = v.w.hK(v.w.ke(.02, .3))
		}, nW.style.top = "0", nW.style.left = "0", nW.style.width = nW.style.height = "100%", nW.style.overflowX = "hidden", nW.style.overflowY = "auto", nW.style.font = "inherit", nb.style.font = "inherit", nb.style.margin = "0.4em", nW
		.appendChild(nb)
}

function a7Y() {
	var aXy = [],
		aXz = [],
		aY0 = 0;

	function aY1(a8, aVB, aY3, aY4) {
		var n = a8.length;
		if (0 === n) return "";
		var bJ = "@" + a8[0];
		if (1 === n) return bJ + aVB + aY4;
		for (var q = 1; q < n - 1; q++) bJ += ", @" + a8[q];
		return bJ + " and @" + a8[n - 1] + aY3 + aY4
	}
	this.e = function() {
		var bJ = aY1(aXz, " is", " are", " in the lobby.");
		bJ.length && la.message.a4s({
			id: 7,
			lE: bJ
		}), aXy = [], aXz = [], aY0 = 0
	}, this.yB = function(aY2) {
		return la.y9 !== aY2 && (aY2 = bo.bi.bC(aY2, 5), !!bK.xA.ii(aY2)) && (aXz.push(aY2), !0)
	}, this.join = function(player) {
		la.y9 !== player.ij && (player = bo.bi.bC(player.ij, 5), bK.xA.ii(player)) && aXy.push(player)
	}, this.aTL = function() {
		var aVB, aY3;
		++aY0 < 3 || (aY0 = 0, aVB = aY1(aXz, "", "", " entered the lobby!"), (aVB = (aY3 = aY1(aXy, "", "", " joined a game!")).length ? aVB.length ? aVB + " " + aY3 : aY3 : aVB).length && la.message.a4s({
			id: 7,
			lE: aVB
		}), aXy = [], aXz = [])
	}
}

function nh(nU, nV) {
	var aYA, self, aY5 = document.createElement("div"),
		aY6 = document.createElement("div"),
		a3w = document.createElement("div"),
		aY7 = null,
		aYB = (this.ia = new e7({
			value: "",
			t: -1
		}, 0, aY8, function(e8) {
			e8.target.value = v.bB.uL(e8.target.value), aY7.a56.textContent = 127 - e8.target.value.length
		}), 0),
		aCB = 1,
		aYC = 0,
		aYD = 1048575;

	function aY8() {
		nU(), aY7.a56.textContent = 127
	}

	function aCG(aCF, c4) {
		c4 && (c4.lO = 1, aCF.appendChild(la.lq.transform(c4)))
	}

	function aCD(x5) {
		aCB ? aY5.scrollTop = aY5.scrollHeight : x5 && (aY5.scrollTop = aYC)
	}
	this.reset = function(aYE) {
			aYD = 1048575, aY6.textContent = "", aYE || this.fM()
		}, this.fM = function() {
			var lS = la.af.yD[0],
				lS = la.af.lm[lS],
				lo = lS.lo,
				n = lo.length,
				v4 = 1048575 === aYD ? 0 : n - (lS.a6b - aYD + 1048575) % 1048575;
			if (aYD = lS.a6b, !(n <= (v4 = Math.max(v4, 0)))) {
				for (var aCF = document.createDocumentFragment(), q = v4; q < n; q++) aCG(aCF, la.td.lL(lo[q], la.td.lB(lo[q])));
				aY6.appendChild(aCF), aCD()
			}
		}, this.a4u = function(lE) {
			var aCF = document.createDocumentFragment();
			aCG(aCF, lE), aY6.appendChild(aCF), aCD()
		}, this.show = function(h5) {
			h5.appendChild(aY5), h5.appendChild(a3w), this.resize(h5)
		}, this.eD = function(h5) {
			dk.removeChild(h5, aY5), dk.removeChild(h5, a3w)
		}, this.resize = function(h5) {
			aYB = h5 ? h5.offsetHeight : aYB;
			var h5 = v.w.ke(.04, .75),
				aRV = Math.max(h5, aYB - h5),
				aYF = ao.ap / ao.hG,
				aYG = .7 * aYF,
				aYH = v.w.hK(aYB - h5 - aRV),
				aRV = (a3w.style.height = v.w.hK(h5), aY5.style.height = v.w.hK(aRV), ao.ar > ao.ap || cu.cv.cw() ? (a3w.style.top = aYH, aY5.style.top = v.w.hK(aYB - aRV), v.w.hL(aY5, 8)) : (aY5.style.top = aYH, a3w.style.top = v.w.hK(aYB - h5), v.w
					.hL(aY5, 2)), this.ia.e8.style.width = v.w.hK(aYG), this.ia.e8.style.fontSize = aYA.button.style.fontSize = v.w.hK(.5 * h5), v.w.hL(this.ia.e8, 6), aYA.button.style.left = v.w.hK(aYG), aYA.button.style.width = v.w.hK(aYF -
					aYG), .385 * h5);
			cu.cv.cw() && (aRV *= .8 - .12 * (ao.ap > ao.ar)), aY6.style.marginLeft = aY6.style.marginRight = v.w.hK(.5 * aRV), aY6.style.fontSize = v.w.hK(aRV), aCD(1)
		}, (self = this).ia.e8.aF2 = 127, aY5.style.position = "absolute", aY5.style.left = "0", aY5.style.width = "100%", aY5.style.overflowX = "hidden", aY5.style.overflowY = "auto", aY5.style.font = "inherit", aY5.style.backgroundColor = b7.aG5,
		aY5.addEventListener("scroll", function() {
			aYC = aY5.scrollTop, aCB = aYC < aY5.scrollHeight - aY5.clientHeight - 2 ? 0 : 1
		}), aY6.style.font = "inherit", a3w.style.position = "absolute", a3w.style.left = "0", a3w.style.width = "100%", self.ia.e8.setAttribute("placeholder", L(477)), self.ia.e8.style.position = "absolute", self.ia.e8.style.top = "0", self.ia.e8
		.style.left = "0", self.ia.e8.style.height = "100%", self.ia.e8.style.backgroundColor = b7.a5r, self.ia.e8.style.textAlign = "center", (aYA = new dd(L(88), aY8)).button.top = "0", aYA.button.style.position = "absolute", aYA.button.style
		.height = "100%", aYA.pz(b7.aKA), aY7 = new a51("127", aYA.button, 1, 1), aY5.appendChild(aY6), a3w.appendChild(self.ia.e8), a3w.appendChild(aYA.button)
}

function a6A() {
	this.a5J = function(ff) {
		return [ff >> 12 & 63, ff >> 6 & 63, 63 & ff]
	}, this.aYJ = function(ff) {
		for (var a8 = this.a5J(ff), q = 0; q < 3; q++) a8[q] = ~~(4.05 * a8[q]);
		return a8
	}, this.aYK = function(ff) {
		ff = this.aYJ(ff);
		return v.color.kt(ff[0], ff[1], ff[2])
	}, this.aYL = function(a8) {
		for (var q = 0; q < 3; q++) a8[q] = ~~(a8[q] / 4.04);
		return (a8[0] << 12) + (a8[1] << 6) + a8[2]
	}, this.kt = function(hh, tg, ku) {
		return "rgb(" + hh + "," + tg + "," + ku + ")"
	}, this.kZ = function(hh, tg, ku, ca) {
		return "rgba(" + hh + "," + tg + "," + ku + "," + ca.toFixed(3) + ")"
	}, this.aYM = function(eF) {
		for (var a8 = eF.split("(")[1].split(","), aA = a9.aA, q = 0; q < 3; q++) aA[q] = parseInt(a8[q]);
		return 4 === a8.length ? aA[3] = 255 * parseFloat(a8[3].slice(0, -1)) : aA[3] = 255, aA
	}, this.a43 = function(aYN, f6) {
		for (var a8 = aYN.slice(aYN.indexOf("(") + 1, aYN.indexOf(")")).split(","), aA = a9.aA, q = 0; q < 3; q++) aA[q] = fD.ok(parseInt(a8[q].trim(), 10) + f6, 0, 255);
		return 3 === a8.length ? this.kt(aA[0], aA[1], aA[2]) : (aYN = parseFloat(a8[3].trim()), this.kZ(aA[0], aA[1], aA[2], aYN = 0 === aYN ? .3 : aYN))
	}, this.kv = function(aYO, aYP) {
		for (var xl = 0, q = 0; q < 3; q++) xl += Math.abs(aYP[q] - aYO[q]);
		if (!(240 <= xl))
			for (q = 0; q < 3; q++) aYP[q] = aYO[q] + (aYO[q] < 128 ? 80 : -80)
	}, this.aYQ = function(a8) {
		for (var bJ = "#", q = 0; q < 3; q++) {
			var hh = a8[q].toString(16);
			bJ += 1 === hh.length ? "0" + hh : hh
		}
		return bJ
	}, this.aYR = function(bJ) {
		var hh, tg;
		return bJ.length < 7 ? b7.l8 : (hh = parseInt(bJ.slice(1, 3), 16), tg = parseInt(bJ.slice(3, 5), 16), bJ = parseInt(bJ.slice(5, 7), 16), this.kt(hh, tg, bJ))
	}
}

function aGu() {
	var aCE, aYS, ow, aYT, ar, ck, fontSize, aYU, aYV, ey, aYW, canvas, fY, ox, aYX;

	function dp(q) {
		return L(0 === q ? 478 : 1 === q ? 479 : 2 === q ? 480 : 481)
	}

	function aYd() {
		f.j ? hu + 4 * f7.gap + ar + cN.hS() > g5.aE ? b5.drawImage(canvas, 2 * f7.gap + cN.hS(), hu + 2 * f7.gap) : b5.drawImage(canvas, f7.gap, hu + 3 * f7.gap + cN.hS()) : b5.drawImage(canvas, f7.gap, hu + 2 * f7.gap)
	}

	function aYY() {
		canvas.width = aCE[0].width + ey, canvas.height = ar + ey, (fY = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aCE[0].width + ey, ar + ey), fY.translate(Math.floor(ey / 2), Math.floor(ey / 2)), fY.lineWidth = ey, fY.fillStyle = 1 === aCE[0].aYc ? b7.aJb : b7.cF, aYe(), fY.fill(), fY.strokeStyle = 1 === aCE[0].aYc ? b7.l8 : b7
			.b9, aYe(), fY.stroke(), v.w.textAlign(fY, 1), v.w.textBaseline(fY, 1), fY.fillStyle = 1 === aCE[0].aYc ? b7.l8 : b7.b9, fY.font = ck[0], fY.fillText(dp(aCE[0].aYb), Math.floor(aCE[0].width / 2), Math.floor(.72 * aYU[0] * ar)), fY.font =
			ck[1], fY.fillText(aCE[0].bJ, Math.floor(aCE[0].width / 2), Math.floor((aYU[0] + .48 * aYU[1]) * ar))
	}

	function aYe() {
		fY.beginPath(), fY.moveTo(aYW, 0), fY.lineTo(aCE[0].width - aYW, 0), fY.lineTo(aCE[0].width, aYW), fY.lineTo(aCE[0].width, ar - aYW), fY.lineTo(aCE[0].width - aYW, ar), fY.lineTo(aYW, ar), fY.lineTo(0, ar - aYW), fY.lineTo(0, aYW), fY
			.closePath()
	}
	this.e = function() {
		aYS = 4, ow = aYT = ox = 0, aCE = [], ck = new Array(2), fontSize = new Array(2), (aYU = new Array(2))[0] = .3, aYU[1] = .7, aYV = new Array(4), canvas = document.createElement("canvas"), aYX = c0.fr + 2e3, this.resize()
	}, this.resize = function() {
		var q, ap;
		for (ar = Math.floor((cu.cv.cw() ? .062 : .047) * ao.cx), fontSize[0] = Math.floor(.85 * aYU[0] * ar), fontSize[1] = Math.floor(.85 * aYU[1] * ar), ck[0] = v.w.bA(1, fontSize[0]), ck[1] = v.w.bA(1, fontSize[1]), q = aYV.length - 1; 0 <=
			q; q--) aYV[q] = this.measureText(dp(q) + "000", ck[0]);
		if (ey = Math.floor(1 + .05 * ar), aYW = Math.floor(.2 * ar), 0 < aCE.length) {
			for (q = aCE.length - 1; 0 <= q; q--) ap = this.measureText(aCE[q].bJ + "00", ck[1]), aCE[q].width = ap < aYV[q] ? aYV[q] : ap;
			aYY()
		}
	}, this.bu = function() {
		0 !== aYS && (4 === aYS ? c0.fr > aYX && (aYS = 0, 1 === f.j6) && fK.aUf(au.zY.zZ[au.m3].name, 3, 1, 9) : (1 === aYS ? (0 === ow && (aYY(), ow = 1e-4), 1 <= (ow += .002 * (c0.fr - ox)) && (aYT = 0, aYS = 2, ow = 1), c0.d1 = !0) : 2 ===
			aYS ? ((aYT += (c0.fr - ox) / 1e3) > aCE[0].aWq || 1 < aYT && 1 < aCE.length) && (aYS = 3) : 3 === aYS && ((ow -= .002 * (c0.fr - ox)) <= 0 && (ow = 0, aCE.shift(), aYS = 0 < aCE.length ? 1 : 0), c0.d1 = !0), ox = c0.fr))
	}, this.measureText = function(bJ, ck) {
		return b5.font = ck, Math.floor(b5.measureText(bJ).width)
	}, this.uG = function(aXk, q) {
		this.aUf(cD.cE[aXk], q, 1, 0 === q ? 3 : 7)
	}, this.aUf = function(bJ, aYb, aYc, aWq) {
		var ap;
		bJ.length && (ap = (ap = this.measureText(bJ + "00", ck[1])) < aYV[aYb] ? aYV[aYb] : ap, aCE.push({
			bJ: bJ,
			width: ap,
			aYb: aYb,
			aYc: aYc,
			aWq: aWq
		}), 0 === aYS) && (ow = 0, aYS = 1, ox = c0.fr)
	}, this.aR = function() {
		0 !== aYS && 0 !== ow && (ow < 1 ? (b5.globalAlpha = ow, aYd(), b5.globalAlpha = 1) : aYd())
	}
}

function aH9() {
	var cp, aYf, aYg, aYh, aIi = !1;

	function aYi() {
		aIi = !0, cp = -1, aYf = new Array(4);
		for (var q = 3; 0 <= q; q--) aYf[q] = !1;
		var aQZ = Math.floor(1 + .02 * ao.min);
		aYg = new Array(4), (aYh = new Array(4))[1] = aYh[3] = aYg[0] = aYg[2] = 0, aYh[0] = aYg[3] = -aQZ, aYg[1] = aYh[2] = aQZ
	}

	function aYj() {
		if (-1 !== cp)
			if (0 !== f.j6 && kB.bQ()) {
				for (var aYk = !1, q = 3; 0 <= q; q--) aYf[q] && (aYk = !0, b0 += aYg[q], b2 += aYh[q], k4.dB(aYg[q], aYh[q]), jx.a8M());
				aYk ? c0.d1 = !0 : a1b.aYl()
			} else a1b.aYl()
	}
	this.a1c = function(t) {
		0 !== f.j6 && kB.bQ() && (aIi || aYi(), aYf[t] = !0, -1 === cp) && (cp = setInterval(aYj, 20), aYj())
	}, this.a1g = function(t) {
		if (0 !== f.j6 && (aIi || aYi(), aYf[t] = !1, -1 !== cp)) {
			for (var aYk = !1, q = 3; 0 <= q; q--) aYk = aYk || aYf[q];
			aYk || this.aYl()
		}
	}, this.aYl = function() {
		if (aIi && -1 !== cp) {
			for (var q = 3; 0 <= q; q--) aYf[q] = !1;
			clearInterval(cp), cp = -1
		}
	}
}

function aYm() {
	var iP, iQ, ds, dx;

	function aYn() {
		sB.a2M !== bK.buffer.data[12].value ? (sB.e(), dk.e3(8, 1, new iB(30))) : dk.e3(1)
	}
	this.show = function() {
			iP.show(), this.resize()
		}, this.eD = function() {
			iP.eD()
		}, this.resize = function() {
			iP.resize(), iQ.resize()
		}, this.eE = function(eF) {
			2 === eF && iP.eG[0].bL()
		}, iP = new dc(L(213), [new dd("⬅️ " + L(5), aYn), new dd(L(482), function() {
			dk.i6(), bK.iF.aHz(), dk.e3(2)
		})]), ds = [], (dx = new dy).dz(L(483)), dx.iY(L(484)), ds.push(dx),
		function(ds) {
			var dx = new dy,
				a8 = (dx.dz(L(267)), sB.data.a6E());
			dx.e1(new e2({
				e0: a8,
				value: sB.data.a6I(a8)
			}, function(t) {
				return bK.iF.bH(12, a8[t].split(":")[0]), !0
			})), ds.push(dx)
		}(ds),
		function(ds) {
			var dx = new dy,
				aYq = (dx.dz(L(510)), []);
			dx.e4(new e9([new dd(L(266), function(e8) {
				a1a.aTH();
				for (var q = 0; q < aYq.length; q++) aYq[q].e8.value = a1a.aFB[q];
				return v.w.kr(e8), !0
			}).button]));
			for (var q = 0; q < a1a.aTB.length; q++) {
				dx.iY(a1a.aTB[q]);
				for (var ca = 0; ca < 2; ca++) {
					var t = 2 * q + ca,
						ia = new e7({
							value: a1a.aFB[t],
							t: -1
						});
					ia.e8.aYr = t, aYq.push(ia), ia.e8.addEventListener("keydown", function(e8) {
						e8.preventDefault();
						var code = e8.code;
						e8.target.value = code, a1a.aTE(e8.target.aYr, code)
					}), ca && (ia.e8.style.marginLeft = "4%"), ia.e8.style.width = "48%", dx.e4(ia)
				}
			}
			ds.push(dx)
		}(ds), (dx = new dy).dz(L(485)), bK.buffer.data[1].e0 = [L(486), L(487), L(488), L(489)], dx.e1(new e2(bK.buffer.data[1])), ds.push(dx), (dx = new dy).dz(L(490)), bK.buffer.data[9].e0 = [L(487), L(491), L(492)], dx.e1(new e2(bK.buffer.data[
			9])), ds.push(dx), (dx = new dy).dz(L(493)), bK.buffer.data[11].e0 = [L(494), L(495), L(496)], dx.e1(new e2(bK.buffer.data[11])), ds.push(dx), (dx = new dy).dz(L(497)), dx.e4(new e5(bK.buffer.data[2])), ds.push(dx), (dx = new dy).dz(L(
			498)), dx.e4(new e5(bK.buffer.data[7])), ds.push(dx), (dx = new dy).dz(L(499)), dx.e4(new e5(bK.buffer.data[8])), ds.push(dx), (dx = new dy).dz(L(500)), dx.e4(new e7(bK.buffer.data[5])), ds.push(dx), (dx = new dy).dz(L(501)), dx.e4(
			new e5(bK.buffer.data[13], L(502))), dx.e4(new e5(bK.buffer.data[14], L(503))), ds.push(dx), (dx = new dy).dz(L(504)), dx.e1(new e2({
			e0: [L(505), L(506), L(507)],
			value: i4.a5c
		}, function(q) {
			i4.a5c = q
		})), ds.push(dx), (dx = new dy).dz(L(508)), dx.e4(new e5(bK.buffer.data[15])), dx.iY(L(509)), dx.e4(new e7(bK.buffer.data[16], 1, 0, function(e8) {
			e8.target.value = fD.ok(Math.floor(e8.target.value), 0, 16)
		})), ds.push(dx), iQ = new df(iP.dg, ds)
}

function aYs() {
	var aMj, aYv, aRN = document.createElement("div"),
		aYt = document.createElement("div"),
		aYu = document.createElement("div"),
		aOD = document.createElement("div"),
		a71 = [],
		aVS = [L(511), L(512), L(513), L(514), L(515), L(516), L(517), L(518)],
		aYw = [1, 2, 3, 0, 9, 10, 11, 13];

	function aYx(q) {
		dk.e3(8, 0, new iB(21, {
			bT: aYw[q],
			bU: 0,
			bV: 10
		}))
	}
	this.show = function() {
			this.bH(dk.af.hw), document.body.appendChild(aRN)
		}, this.eD = function() {
			dk.removeChild(document.body, aRN)
		}, this.bH = function(hw) {
			for (var aYz = [3, 0, 1, 2, 4, 5, 6, 7], q = 0; q < a71.length; q++) {
				var ap = hw[q];
				aMj[aYz[q]][1].a56.textContent = ap || ""
			}
		}, this.resize = function() {
			var q, tg = f7.gap,
				ar = v.w.w6(.085),
				ap = Math.min(4 * ar, ao.ap - 2 * tg),
				n = a71.length;
			for (v.w.aZ0(aRN, tg, ao.ar - tg - ar, ap, ar), v.w.hL(aRN), v.w.hL(aYt, 6), q = 0; q < n - 1; q++) v.w.hL(a71[q].button, 6);
			for (q = 0; q < n; q++) aMj[q][0].resize(), aMj[q][1].resize();
			for (a71[0].aD = 0, a71[0].button.style.left = v.w.hK(a71[0].aD), a71[0].button.style.width = v.w.aZ1(1.7 * ar), q = 1; q < n; q++) a71[q].aD = a71[q - 1].aD + a71[q - 1].button.offsetWidth, a71[q].button.style.left = v.w.hK(a71[q].aD);
			if (!aYv) {
				if (!r1.aBP()) return;
				(aYv = r1.get(14)).style.width = "24%", aYv.style.position = "absolute", aYt.appendChild(aYv)
			}
			aYv.style.left = v.w.hK(0), aYv.style.top = "7%", aYu.aRZ && (aYu.scrollLeft = aYu.aRZ)
		}, aRN.style.position = "absolute", aYt.style.width = "25%", aYt.style.height = "100%", aYt.style.backgroundColor = b7.a1s, aYu.style.position = "absolute", aYu.style.width = "75%", aYu.style.height = "100%", aYu.style.backgroundColor = b7
		.a1s, aYu.style.top = aYu.style.right = v.w.hK(0), v.w.no(aYu), aOD.style.height = aOD.style.maxHeight = "100%", a71.push(new dd("", function() {
			aYx(0)
		}, b7.aJt)), a71.push(new dd("", function() {
			aYx(1)
		}, b7.aJu)), a71.push(new dd("", function() {
			aYx(2)
		}, b7.aJr)), a71.push(new dd("", function() {
			aYx(3)
		}, b7.aJk)), a71.push(new dd("", function() {
			aYx(4)
		}, b7.aK9)), a71.push(new dd("", function() {
			aYx(5)
		}, b7.aK7)), a71.push(new dd("", function() {
			aYx(6)
		}, b7.aK9)), a71.push(new dd("", function() {
			aYx(7)
		}, b7.l8)), aMj = new Array(a71.length);
	for (var q = 0; q < a71.length; q++) a71[q].button.style.position = "absolute", aMj[q] = [new aYy(aVS[q], a71[q].button, .25, .45), new aYy("", a71[q].button, .53, .84, 1)], a71[q].button.style.height = a71[q].button.style.maxHeight = "100%",
		a71[q].button.top = v.w.hK(0), aOD.appendChild(a71[q].button);
	aYu.appendChild(aOD), aRN.appendChild(aYt), aRN.appendChild(aYu)
}

function aZ2() {
	var aZ3, aZ4, aZ5, ia, aZ6, a1r = 0;
	this.iJ = new aYs, aZ5 = new a9C([.45, .27], [.5, .5], 2 / 3), aZ4 = [new dd("⚔️<br>" + L(519), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aZ7(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : b7.aJn), new dd("🗡️<br>" + L(33), function() {
			aZ7(1)
		}, b7.aJu), new dd("🔑<br>" + L(520), function() {
			aZ7(2)
		}, b7.aK5), new dd("☰<br>" + L(521), function() {
			aZ7(3)
		}, b7.aJh), new dd("", function() {
			dk.e3(12)
		}, b7.a1s, !1),
		new dd("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new dd("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], ia = new e7(bK.buffer.data[122]);
	for (var q = 0; q < aZ4.length; q++) aZ4[q].button.style.position = "absolute";

	function aZ7(t) {
		cu.cv.setState(10), r1.aBP() || r1.aLz(), 0 === t ? dk.af.i2(1) : 1 === t ? (jr.qL.eJ(bK.buffer.data[156].value, 1) || f.jK.or(), dk.e3(19)) : 2 === t ? 0 !== cu.id || bK.buffer.data[140].value ? dk.e3(8, dk.iI, new iB(16)) : dk.af.iC(dk.iI,
			16) : 3 === t && dk.e3(1)
	}
	ia.e8.style.position = "absolute", ia.e8.style.textAlign = "center", ia.e8.placeholder = L(522), this.show = function() {
		dV.setState(0), cu.cv.setState(12), this.iJ.show(), aZ4[4].pz(v.color.aYK(bK.buffer.data[121].value)), this.resize(), document.body.appendChild(ia.e8);
		for (var q = 0; q < aZ4.length; q++) document.body.appendChild(aZ4[q].button);
		1 !== cu.id || cu.bM < 5 || (aZ6 && c0.fr > aZ6 + 144e5 ? cu.qc.setState(14) : aZ6 = c0.fr)
	}, this.eD = function() {
		this.iJ.eD(), dk.removeChild(document.body, ia.e8);
		for (var q = 0; q < aZ4.length; q++) dk.removeChild(document.body, aZ4[q].button)
	}, this.resize = function() {
		this.iJ.resize(), this.iJ.resize(), aZ5.resize();
		var gap = .5 * f7.gap,
			ny = 10 / 99 * .84 * aZ5.ap,
			aZA = .16 * aZ5.ar,
			a8Q = .19 * aZ5.ap,
			aD = aZ5.aD + a8Q,
			ny = aZ5.aE + ny + 3 * gap,
			ap = .5 * (aZ5.ap - gap) - a8Q,
			a8Q = aZ5.ap - 2 * a8Q - aZA - gap,
			a8Q = (v.w.aZ0(ia.e8, aD, ny, a8Q, aZA), v.w.aZ0(aZ4[4].button, aD + a8Q + gap, ny, aZA, aZA), a1r = ny, .5 * (aZ5.aE + aZ5.ar - (ny += aZA + gap) - gap));
		v.w.aZ0(aZ4[0].button, aD, ny, ap, a8Q), v.w.aZ0(aZ4[1].button, aD + ap + gap, ny, ap, a8Q), v.w.aZ0(aZ4[2].button, aD, ny + a8Q + gap, ap, a8Q), v.w.aZ0(aZ4[3].button, aD + ap + gap, ny + a8Q + gap, ap, a8Q);
		v.w.aZ0(aZ4[5].button, aD, ny + a8Q * 2 + gap * 2, ap * 2 + gap, a8Q / 3);
		v.w.aZ0(aZ4[6].button, aD, ny + a8Q * 2.33 + gap * 3, ap * 2 + gap, a8Q / 3);
		for (var q = 0; q < aZ4.length; q++) aZ4[q].button.style.font = v.w.bA(0, v.w.kd(.065 * aZ5.ar)), v.w.hL(aZ4[q].button, 5);
		ia.e8.style.font = v.w.bA(0, v.w.kd(.08 * aZ5.ar)), v.w.hL(ia.e8, 5)
	}, this.aR = function() {
		if (dV.aTX(), d9.aR(), n = Math.floor((cu.cv.cw() ? .018 : .0137) * ao.cx), b5.font = v.w.bA(0, Math.max(5, n)), v.w.textBaseline(b5, 0), v.w.textAlign(b5, 2), b5.fillStyle = b7.b9, b5.fillText(jV.bM, ao.ap, 0), text = "Win count: " +
			__fx.wins.count, textLength = b5.measureText(text).width, n = Math.max(5, n), b5.textAlign = "left", b5.textBaseline = "middle", b5.fillText(text, b5.canvas.width - textLength - n / 2, 2 * n), a2T.aR(a1r), aGh.aR(), r1.aBP()) {
			b5.imageSmoothingEnabled = !1;
			var text = r1.aLy("territorial.io"),
				textLength = .84 * aZ5.ap / text.width;
			b5.setTransform(textLength, 0, 0, textLength, aZ5.aD + .08 * aZ5.ap, aZ5.aE), aZ3 = aZ3 || v.a67.aME(text, v.a67.aW1, [0, 0, 0]);
			for (var aD = -1; aD <= 1; aD += 2)
				for (var aE = -1; aE <= 1; aE += 2) b5.drawImage(aZ3, aD, aE);
			b5.drawImage(text, 0, 0), b5.imageSmoothingEnabled = !0;
			var n = r1.aLy("logo"),
				aZC = .6666 * textLength * text.height / n.height,
				b3 = .5 * ao.ap,
				b4 = aZ5.aE + .5 * textLength * text.height - .5 * aZC * n.height;
			b5.setTransform(aZC, 0, 0, aZC, b3 - .6 * textLength * text.width, b4), b5.drawImage(n, 0, 0), b5.setTransform(aZC, 0, 0, aZC, b3 + .6 * textLength * text.width - aZC * n.width, b4), b5.drawImage(n, 0, 0), b5.setTransform(1, 0, 0, 1,
				0, 0), b5.imageSmoothingEnabled = !0
		}
	}
}

function aWJ() {
	function aZD() {
		if (2 === f.j6) return 1;
		gu.rT(), f.j6 = 2, f.j1 = f.iz
	}

	function aZE() {
		jQ.aWN.aJM(), k0.show(1 === f.jH, !1, 2 === f.jH), jQ.result.aJM(), jQ.wf.bu(), jQ.aWM.bu(), jQ.aWM.aUi(), c5.aXH(!0), c5.rS(247), c5.rS(956), c5.rS(957), jw.kD(!0), fv.kD(!0), gu.kD(), fG.a9K(), f.g1 && c0.aO5.aLu(), c0.d1 = !0, jj.xI(), cu
			.cv.setState(0)
	}
	this.rQ = function() {
		aZD() || (f.jG = 2, aZE())
	}, this.rR = function() {
		aZD() || (f.jG = 1, aZE())
	}
}

function aHG() {
	this.aZF = new Uint32Array(f.g), this.e = function() {
		10 === f.jA && this.aZF.fill(0)
	}, this.bu = function() {
		10 === f.jA && this.td()
	}, this.td = function() {
		for (var c9, target, fc, aZF = this.aZF, cQ = cH.cK, fS = cD.mY, q = cH.cI - 1; 0 <= q; q--)(c9 = cQ[q]) >= f.iy || (target = Math.max(fD.fE(fS[c9], 4), 2048), fc = Math.max(jZ.pi(c9), 100), aZF[c9] += fD.fE(fc * target, 1e4), aZF[c9] >
			target && (aZF[c9] = target))
	}, this.aKI = function(player, aW) {
		return 10 !== f.jA || v.c2.rO(player) ? aW : Math.min(this.aZF[player], aW)
	}, this.aKO = function(player, aW) {
		10 !== f.jA || v.c2.rO(player) || (this.aZF[player] -= aW)
	}
}

function aZG() {
	var iP, pO, pP, pR;

	function pQ(q) {
		dk.e3(8, dk.iI, new iB(21, {
			bT: q,
			bU: 0,
			bV: 10
		}))
	}
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), pO.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, pP = [new dd(L(151), function() {
		pQ(5)
	}, 0, 0, 1), new dd(L(152), function() {
		pQ(6)
	}, 0, 0, 1), new dd(L(153), function() {
		pQ(7)
	}, 0, 0, 1), new dd("Audit Log", function() {
		pQ(12)
	}, 0, 0, 1)], pR = [new dd("⬅️ " + L(5), function() {
		dk.dm()
	})], iP = new dc(L(209), pR), pO = new pS(pP, iP.dg)
}

function aHF() {
	this.y5 = function(player) {
		k2.n1(player), f.j1++, cD.sR[player] = 2, cD.sa[player] = wY.sK.wZ(), player === f.al && (k0.show(!1, !1), fv.we(), jQ.wf.wg()), k4.aE1(player)
	}
}

function aGp() {
	var a1q, a1r, aVN, aVO, aZH, aZI, aZJ, aZK, aZL, aZM;

	function aZO() {
		var j2 = f.j2;
		for (aZL = j2; aZL < f.g; aZL++) aZN();
		for (aZL = f.gI ? f.iy : 0; aZL < j2; aZL++) {
			if (!aZR()) {
				for (var ku = f.j3 = aZL; ku < j2; ku++) aZL = ku, aZN();
				return
			}
			aZS(aZI + a1q * aZH + fD.fE(aZH, 2), aZJ + a1r * aZH + fD.fE(aZH, 2))
		}
	}

	function aZj(player) {
		for (var sS = cD.sS, sT = cD.sT, sU = cD.sU, sV = cD.sV, aE = sT[player]; aE <= sV[player]; aE++)
			for (var aD = sS[player]; aD <= sU[player]; aD++) {
				var a3 = a6.xJ(aD, aE);
				a6.h3(a3) && (a6.aCn(a3) ? a6.mc(a3, player) : a6.aCo(a3, player))
			}
	}

	function aZi(a8, bU, bV) {
		var d8 = a8[bU];
		a8[bU] = a8[bV], a8[bV] = d8
	}

	function aZR() {
		return function() {
			var q;
			for (q = 0; q < 8; q++)
				if (a1q = fD.fE(aVN * jX.random(), jX.value(100)), a1r = fD.fE(aVO * jX.random(), jX.value(100)), aZo()) return 1;
			return
		}() || function() {
			var aF, aG, ca, fC, ku, fB;
			for (aF = fD.fE(aVN * jX.random(), jX.value(100)), aG = fD.fE(aVO * jX.random(), jX.value(100)), ca = 40; 1 <= ca; ca--)
				for (fC = aVO - ca; 0 <= fC; fC -= 40)
					for (a1r = (fC + aG) % aVO, ku = 40; 1 <= ku; ku--)
						for (fB = aVN - ku; 0 <= fB; fB -= 40)
							if (a1q = (fB + aF) % aVN, aZo()) return 1;
			return
		}()
	}

	function aZo() {
		for (var c9, aZq, gap = fD.fE(aZH - aZK, 2), zj = aZJ + a1r * aZH + gap, zt = aZI + a1q * aZH + gap, aZp = zj + aZK - 1; zj <= aZp; aZp--)
			for (aZq = zt + aZK - 1; zt <= aZq; aZq--)
				if (c9 = a6.xJ(aZq, aZp), !a6.u0(c9) || a6.aCn(c9)) return;
		return 1
	}

	function aZS(fB, fC) {
		aZN(), aZr(fB - 2, fC - 2)
	}

	function aZN() {
		cD.ft[aZL] = 0, cD.fh[aZL] = cD.sW[aZL] = 0, cD.m6[aZL] = [], cD.gz[aZL] = [], cD.m1[aZL] = [], cD.m4[aZL] = [], cD.sS[aZL] = cD.sT[aZL] = cD.sU[aZL] = cD.sV[aZL] = 0
	}

	function aZr(fB, fC) {
		var c9, q, aZs, aZt;
		for (cD.ft[aZL] = 1, cD.sS[aZL] = fB + 10, cD.sT[aZL] = fC + 10, cD.sV[aZL] = cD.sU[aZL] = 0, aZs = fB; aZs < fB + 4; aZs++)
			for (aZt = fC; aZt < fC + 4; aZt++)(fB < aZs && aZs < fB + 3 || fC < aZt && aZt < fC + 3) && (c9 = a6.xJ(aZs, aZt), a6.u0(c9)) && (cD.sS[aZL] = Math.min(aZs, cD.sS[aZL]), cD.sU[aZL] = Math.max(aZs, cD.sU[aZL]), cD.sT[aZL] = Math.min(aZt,
				cD.sT[aZL]), cD.sV[aZL] = Math.max(aZt, cD.sV[aZL]), aZM[cD.fh[aZL]] = c9, cD.fh[aZL]++, a6.aCo(c9, aZL));
		for (cD.sW[aZL] = cD.fh[aZL], q = cD.fh[aZL] - 1; 0 <= q; q--) a6.aOQ(aZM[q], aZL) ? (a6.mc(aZM[q], aZL), cD.gz[aZL].push(aZM[q])) : a6.zl(aZM[q]) ? (a6.mc(aZM[q], aZL), cD.m1[aZL].push(aZM[q])) : a6.aQ8(aZM[q]) && (a6.mc(aZM[q], aZL), cD.m4[
			aZL].push(aZM[q]))
	}
	this.e = function() {
		if (aZM = new Array(12), aZK = 6, aZH = 10, aVN = fD.fE(au.av, aZH), aVO = fD.fE(au.ef, aZH), aZI = fD.fE(au.av - aZH * aVN, 2), aZJ = fD.fE(au.ef - aZH * aVO, 2), f.gI)
			for (var q = 0; q < f.iy; q++) aZL = q, aZN(), cD.ft[aZL] = 1;
		(0 === f.data.spawningType ? aZO : 1 === f.data.spawningType ? (aZO(), function() {
			var vE = f.hQ;
			f.j9 || vE++;
			if (!(vE < 3)) {
				for (var data = f.data, v4 = (f.gI ? f.iy : 0) + data.teamPlayerCount[0], bQ = f.j3, aZT = new Uint32Array(vE), aZU = new Uint32Array(vE), aZV = new Uint16Array(vE), aZW = new Uint16Array(vE), cR = l.cR, sS = cD.sS, sT =
						cD.sT, sU = cD.sU, sV = cD.sV, ec = a9.ec, ed = a9.ed, q = v4; q < bQ; q++) ec[q] = sS[q] + sU[q] >> 1, ed[q] = sT[q] + sV[q] >> 1;
				for (q = v4; q < bQ; q++) {
					var id = cR[q];
					aZT[id] += ec[q], aZU[id] += ed[q]
				}
				var m = l.m;
				for (q = 1; q < vE; q++) {
					var hd = Math.max(data.teamPlayerCount[m[q]], 1);
					aZV[q] = fD.fE(aZT[q], hd), aZW[q] = fD.fE(aZU[q], hd)
				}
				var ul = l.ul,
					um = l.um,
					un = l.un,
					eb = a9.eb;
				for (q = 0; q < 512; q++) eb[q] = q;
				for (var hh = 0; hh < 2 + (4 <= vE); hh++)
					for (q = v4; q < bQ; q++) {
						for (var gT = q, a38 = eb[gT], aZX = 1, aH = fD.aQZ(ec[a38] - aZV[1], ed[a38] - aZW[1]), ca = 2; ca < vE; ca++) {
							var aVk = fD.aQZ(ec[a38] - aZV[ca], ed[a38] - aZW[ca]);
							aVk < aH && (aH = aVk, aZX = ca)
						}
						var aZY = cR[gT];
						if (aZX !== aZY) {
							if (2 === hh && 4 <= vE) {
								var aZZ = Math.max((aZX + 1) % vE, 1),
									aZa = fD.aQZ(ec[a38] - aZV[aZZ], ed[a38] - aZW[aZZ]);
								for (ca = 1; ca < vE; ca++) aVk = fD.aQZ(ec[a38] - aZV[ca], ed[a38] - aZW[ca]), aH < aVk && aVk < aZa && (aZa = aVk, aZZ = ca);
								aZZ !== aZY && fD.aQZ(aZV[aZY] - aZV[aZZ], aZW[aZY] - aZW[aZZ]) < fD.aQZ(aZV[aZY] - aZV[aZX], aZW[aZY] - aZW[aZX]) && (aZX = aZZ)
							}
							var aZb = m[aZX],
								aZc = um[aZb] + (f.gI ? 0 : un[aZb]),
								wF = ul[aZc],
								a39 = eb[wF],
								aZd = um[aZb + 1];
							aH = fD.aQZ(ec[a39] - aZV[aZY], ed[a39] - aZW[aZY]);
							for (var eF = aZc + 1; eF < aZd; eF++) {
								var aZe = ul[eF],
									aZf = eb[aZe];
								(aVk = fD.aQZ(ec[aZf] - aZV[aZY], ed[aZf] - aZW[aZY])) < aH && (aH = aVk, wF = aZe)
							}
							wF < v4 || bQ <= wF || (a39 = eb[wF], aZT[aZY] += ec[a39] - ec[a38], aZU[aZY] += ed[a39] - ed[a38], aZT[aZX] += ec[a38] - ec[a39], aZU[aZX] += ed[a38] - ed[a39], hd = data.teamPlayerCount[m[aZY]], aZV[aZY] = fD
								.fE(aZT[aZY], hd), aZW[aZY] = fD.fE(aZU[aZY], hd), hd = data.teamPlayerCount[aZb], aZV[aZX] = fD.fE(aZT[aZX], hd), aZW[aZX] = fD.fE(aZU[aZX], hd), eb[gT] = a39, eb[wF] = a38)
						}
					}! function() {
						for (var eb = a9.eb, sS = cD.sS, sT = cD.sT, sU = cD.sU, sV = cD.sV, fh = cD.fh, sW = cD.sW, gz = cD.gz, m1 = cD.m1, m4 = cD.m4, q = 0; q < 512; q++) {
							var aZh = eb[q];
							if (aZh !== q) {
								aZi(sS, q, aZh), aZi(sT, q, aZh), aZi(sU, q, aZh), aZi(sV, q, aZh), aZi(fh, q, aZh), aZi(sW, q, aZh), aZi(gz, q, aZh), aZi(m1, q, aZh), aZi(m4, q, aZh), aZj(q), aZj(aZh), eb[q] = q;
								for (var ar = aZh, hF = eb[ar]; hF !== q;) hF = eb[ar = hF];
								eb[ar] = aZh
							}
						}
					}()
			}
		}) : function() {
			var j2 = f.j2;
			for (aZL = j2; aZL < f.g; aZL++) aZN();
			for (aZL = f.gI ? f.iy : 0; aZL < j2; aZL++)
				if (! function() {
						var spawningData = f.data.spawningData,
							fB = spawningData[2 * aZL] + 1,
							spawningData = spawningData[2 * aZL + 1] + 1;
						if (3 < fB && fB < au.av - 5 && 3 < spawningData && spawningData < au.ef - 5 && a6.u0(a6.xJ(fB, spawningData)) && function(fB, fC) {
								var c9, aZq, aZp;
								for (aZp = fC; fC - 6 < aZp; aZp--)
									for (aZq = fB; fB - 6 < aZq; aZq--)
										if (c9 = a6.xJ(aZq, aZp), a6.aCn(c9)) return;
								return 1
							}(fB + 3, spawningData + 3)) return aZS(fB + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aZR()) {
						for (var ku = f.j3 = aZL; ku < j2; ku++) aZL = ku, aZN();
						return
					}
					var fB = aZI + a1q * aZH + fD.fE(aZH, 2),
						fC = aZJ + a1r * aZH + fD.fE(aZH, 2);
					aZS(fB, fC)
				}
		})(), fI.fg[7] = cD.fh[f.al]
	}, this.aZu = function(uA, aL7, aL8) {
		var q, fB, fC, c9, a1q, a1r;
		for (aZL = uA, q = 0; q < 20; q++)
			for (fB = aL7 + q; aL7 - q <= fB; fB--)
				for (fC = aL8 + q; aL8 - q <= fC; fC--)
					if ((fB === aL7 + q || fB === aL7 - q || fC === aL8 + q || fC === aL8 - q) && 3 < fB && fB < au.av - 5 && 3 < fC && fC < au.ef - 5 && a6.u0(a6.xJ(fB, fC)) && function(fB, fC) {
							var c9, aZq, aZp;
							for (aZp = fC; fC - 6 < aZp; aZp--)
								for (aZq = fB; fB - 6 < aZq; aZq--)
									if (c9 = a6.xJ(aZq, aZp), a6.aCn(c9) && !a6.u9(aZL, c9)) return;
							return 1
						}(fB + 3, fC + 3)) {
						if (0 < cD.fh[aZL]) {
							for (a1r = a1q = c9 = void 0, a1q = cD.sU[aZL]; a1q >= cD.sS[aZL]; a1q--)
								for (a1r = cD.sV[aZL]; a1r >= cD.sT[aZL]; a1r--) c9 = 4 * (a1r * au.av + a1q), a6.wo(aZL, c9) && (a6.wp(c9), cD.fh[aZL]--);
							aZN()
						}
						return aZr(fB - 1, fC - 1), !0
					} return !1
	}, this.aZx = function(uA) {
		aZL = uA, aZR() ? aZS(aZI + a1q * aZH + fD.fE(aZH, 2), aZJ + a1r * aZH + fD.fE(aZH, 2)) : aZN()
	}
}

function a0l() {
	var e0 = aZy(au.m3);
	e0 && aZz(e0[0], e0[1], e0[2], e0[3], e0[4])
}

function aZy(m3) {
	return 2 === m3 ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === m3 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === m3 ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === m3 ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === m3 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aZz(aa0, aa1, aa2, aa3, aa4) {
	for (var aD, aE, aCe, aCf, fb, aa7, aY = aa0.length - 1, aa5 = au.av + au.ef, n = (aa5 *= aa5, aa2.length), aa6 = Array(n), q = n - 1; 0 <= q; q--) aa6[q] = aa2[q] * aa2[q];
	var aa8 = new Array(n),
		a6G = new Array(n),
		aa9 = new Array(n),
		ff = zW.zi();
	if (void 0 === aa4)
		for (aa4 = new Array(n), q = n - 1; 0 <= q; q--) aa4[q] = 0;
	for (q = 1; q < n; q++) aa8[q] = aa6[q] - aa6[q - 1], a6G[q] = aa3[q] - aa3[q - 1], aa9[q] = aa4[q] - aa4[q - 1];
	for (aD = au.av - 1; 0 <= aD; aD--)
		for (aE = au.ef - 1; 0 <= aE; aE--) {
			for (aCe = aa5, q = aY; 0 <= q; q--) aCe = (aCf = (aD - aa0[q]) * (aD - aa0[q]) + (aE - aa1[q]) * (aE - aa1[q])) < aCe ? aCf : aCe;
			for (fb = aa3[n - 1], aa7 = aa4[n - 1], q = 1; q < n; q++)
				if (aCe < aa6[q]) {
					fb = aa3[q - 1] + a5v((aCe - aa6[q - 1]) * a6G[q], aa8[q]), aa7 = aa4[q - 1] + a5v((aCe - aa6[q - 1]) * aa9[q], aa8[q]);
					break
				} aaA(au.av * aE + aD, fb, aa7, ff)
		}
}

function aaA(t, fb, aa7, ff) {
	fb < 500 ? ff[t] = fD.fE(ff[t] * fb * 2, 1e3) : 500 < fb && (ff[t] += fD.fE(2 * (1e4 - ff[t]) * (fb - 500), 1e3)), ff[t] += fD.fE(aa7 * (10 * fb - ff[t]), 1e3)
}

function aOa() {
	this.bu = function(player) {
		return ae.a0Q.a3S(player, function(player) {
			var n = cU.cV.cW;
			if (0 === n) return -1;
			for (var aL = Math.min(n, cU.performance.a3e ? n : 10), buffer = cU.cV.buffer, v4 = fD.fE(jX.random() * n, jX.value(100)), e8 = v4 + aL, f9 = jX.xh(cD.sS[player], cD.sU[player]), fA = jX.xh(cD.sT[player], cD.sV[player]),
					v7 = -1, aH = cX.xS(0, 0, au.av, au.ef), q = v4; q < e8; q++) {
				var hF = q % n,
					aaC = cX.xO(f9, fA, buffer[hF]);
				aaC < aH && (aH = aaC, v7 = hF)
			}
			return -1 !== v7 ? function(a2, f9, fA) {
				var g8 = cX.cY(a2),
					gA = cX.cZ(a2),
					aF = f9 - g8,
					aG = fA - gA;
				Math.abs(aF) >= Math.abs(aG) ? (aG = 0, aF = Math.sign(aF)) : (aF = 0, aG = Math.sign(aG));
				aF === aG && (aF = 1);
				for (;;) {
					if (g8 += aF, gA += aG, !cX.xW(g8, gA)) break;
					if (a2 = cX.gC(g8, gA), a6.vU(cX.gO(a2))) return a2
				}
				return -1
			}(buffer[v7], f9, fA) : -1
		}(player))
	}
}

function sL() {
	this.aaE = function() {
		for (var c9, n = cH.cI, cQ = cH.cK, sa = cD.sa, rL = this.wZ(), q = 0; q < n; q++) c9 = cQ[q], v.c2.rO(c9) || (sa[c9] = rL);
		var sX = cD.sX,
			sY = cD.sY,
			sZ = cD.sZ,
			sb = cD.sb,
			n = f.iy;
		for (q = 0; q < n; q++)(0 === sb[q] || sZ[q] < 1 || 2 * sX[q] > 3 * (sY[q] + sZ[q])) && (sa[q] = 0);
		var aaF = 0;
		for (q = 0; q < n; q++) aaF += 0 < sa[q];
		return aaF
	}, this.wZ = function() {
		return Math.min(65535, c0.c1())
	}
}

function aO9() {
	this.aBi = 0, this.bu = function() {
		a2T.bu(), i4.bu(), ao.bu(), bZ.af.bu(), aFV.aaG(), jP.aHw.bu(), c0.d1 && (c0.d1 = !1, dV.aR())
	}
}

function aO8() {
	var t = 0,
		fr = c0.fr;
	this.aBi = 0, this.bu = function() {
		ao.bu(), f.gI ? aBq() : 0 === t ? c0.fr >= fr && (fr += c0.fs * Math.floor(1 + (c0.fr - fr) / c0.fs), 2 === f.j6 || fF.g2 ? aBr() : (aBy(), jj.render()), t++) : ((fF.g2 ? aBq : (c0.d1 = !0, aBw))(), t = 0), aBu(), c0.d1 && (c0.d1 = !1,
			aBv())
	}
}

function a3D() {
	this.a3f = 512, this.aPI = 8, this.am = 0, this.a0J = 0, this.ag = new Uint16Array(this.a3f), this.ad = new Uint32Array(this.a3f), this.tm = new Uint16Array(this.a3f), this.ah = new Uint32Array(this.a3f), this.aJC = new Uint16Array(this.a3f),
		this.vc = new Uint16Array(this.a3f), this.tl = new Uint8Array(this.a3f), this.ai = new Uint8Array(this.a3f), this.vq = new Array(this.a3f), this.u3 = new Uint16Array(this.a3f), this.rq = new Uint8Array(f.g), this.vd = new Uint16Array(this
			.aPI * f.g), this.e = function() {
			this.am = 0, this.a0J = 0, this.rq.fill(0), this.vq.fill(null)
		}, this.a3t = function(player) {
			var aW = a9.eT[0],
				a3G = a9.eZ[1],
				vp = a9.a8[0],
				aaH = this.a0J,
				n = this.am,
				aSl = cX.xY(vp[0]),
				a6u = this.rq[player],
				a6v = (player << 3) + a6u;
			this.ag[n] = a6v, this.ad[n] = aSl, this.tm[n] = 0, aW < 60 && (v.c2.mW(player, 60 - aW), aW = 60), this.ah[n] = aW, this.aJC[n] = ae.xa.a3t(n, cX.xZ(aSl)), this.vc[n] = aaH, this.tl[n] = a3G, this.ai[n] = 0, this.vq[n] = vp, this.u3[n] =
				0, this.a0J = (aaH + 1) % 65536, this.rq[player] = a6u + 1, this.vd[a6v] = n, this.am++, ae.a3G.tu(player, vp[vp.length - 1], a3G, aaH, aW)
		}, this.bu = function() {
			ae.a3G.bu();
			for (var c9 = f.al, d8 = ae.td.vm(c9), a73 = (! function(a73) {
					for (var aaM, ad = a73.ad, ah = a73.ah, ai = a73.ai, tm = a73.tm, aJC = a73.aJC, vq = a73.vq, u3 = a73.u3, a73 = a73.am, at = au.av << 4, q = a73 - 1; 0 <= q; q--) {
						var aaN = ad[q],
							vp = vq[q],
							aaO = u3[q],
							aSl = cX.xY(vp[aaO]),
							aSm = cX.xY(vp[aaO + 1]),
							aaP = aSl % at,
							aSl = ~~((aSl + .5) / at),
							aaR = aSm % at,
							aaS = ~~((aSm + .5) / at),
							aaT = aaR - aaP,
							aaU = aaS - aSl,
							f6 = Math.max(~~Math.sqrt(aaT * aaT + aaU * aaU + .5), 1),
							aaV = ah[q],
							aaV = (aaV = ai[q] ? 4e4 : 25e4 + Math.min(20 * aaV, 3e5) + Math.min(aaV >> 3, 5e4), tm[q] + Math.max(~~((aaV + .5) / f6), 1));
						65535 <= aaV ? aaO + 2 < vp.length ? (u3[q] = aaO + 1, ad[q] = aaM = function(q, aaW, aaP, aaQ, aaO, f6, vp, at) {
							aaW = Math.min(aaW - 65535, 65535);
							var vp = cX.xY(vp[aaO + 2]),
								aaO = vp % at - aaP,
								vp = ~~((vp + .5) / at) - aaQ,
								aaY = Math.max(~~Math.sqrt(aaO * aaO + vp * vp + .5), 1);
							return aaW = Math.min(Math.floor((f6 * aaW + .5) / aaY), 65534), ae.af.tm[q] = aaW, aaP + fD.fE(aaW * aaO, 65535) + at * (aaQ + fD.fE(aaW * vp, 65535))
						}(q, aaV, aaR, aaS, aaO, f6, vp, at)) : (ad[q] = aaM = aSm, tm[q] = 65535) : (tm[q] = aaV, ad[q] = aaM = aaP + fD.fE(aaV * aaT, 65535) + at * (aSl + fD.fE(aaV * aaU, 65535))), aJC[q] = ae.xa.aSj(aJC[q], aaN, aaM)
					}
				}(this), ! function(a73) {
					if (c0.c1() % 2 == 1) {
						var q, h2, aL, ku, eF, aaZ, aaa, aab, gT, az, b1, aSl, aac, a8R, aae, wF, n = a73.am,
							ad = a73.ad,
							ag = a73.ag,
							ah = a73.ah,
							ai = a73.ai,
							xa = ae.xa.xa,
							aLm = xa.length,
							aSg = ae.xa.aSg,
							at = au.av << 4,
							aag = f.j,
							hc = l.cR,
							hF = (n - 1) * (fD.fE(c0.c1(), 2) % 2);
						for (q = 0; q < n; q++)
							for (h2 = Math.abs(q - hF), aSl = ad[h2], aL = cX.xZ(aSl), gT = ag[h2] >> 3, az = aSl % at, b1 = ~~((aSl + .5) / at), aae = ah[h2], ku = 0; ku < 9; ku++)
								if (!((aaZ = aL + aSg[ku]) < 0 || aLm <= aaZ))
									for (aab = xa[aaZ], aaa = aab.length, eF = 0; eF < aaa; eF++) aac = aab[eF], wF = ag[aac] >> 3, gT == wF || aag && hc[gT] === hc[wF] && hc[gT] || (wF = ad[aac], (a8R = az - wF % at) * a8R + (a8R = b1 - ~~((
										wF + .5) / at)) * a8R < 14400 && (wF = ah[aac], a8R = wF <= aae ? Math.max(1, fD.fE(wF + fD.fE(aae - wF, 10), 10)) : Math.max(1, fD.fE(aae, 10)), ah[aac] = Math.max(wF - a8R, 0), ai[aac] = 4))
					}
				}(this), ! function(a73) {
					if (c0.c1() % 5 == 3)
						for (var ah = a73.ah, n = a73.am, q = 0; q < n; q++) {
							var aW = ah[q];
							ah[q] = Math.max(aW - Math.max(1, aW >> 7), 0)
						}
				}(this), this), ah = a73.ah, ai = a73.ai, q = a73.am - 1; 0 <= q; q--) ai[q] = ai[q] >> 1, 0 === ah[q] && (ae.tq.tr(q), ae.ts.tt(q));
			fI.mT(c9, d8 - ae.td.vm(c9), 15)
		}
}

function aah() {
	var iP, aZ5, aTw, aai, aaj, aak, colors = [0, 0, 0],
		aal = -1;

	function aao(q) {
		var aap = aZ5.aE + q * (f7.gap + aak);
		b5.fillStyle = "rgb(" + (0 === q ? 150 : 2 === q ? 30 : 0) + "," + (1 === q ? 130 : 2 === q ? 30 : 0) + "," + (2 === q ? 220 : 0) + ")", b5.fillRect(aai, aap, colors[q] * aaj, aak), b5.strokeStyle = b7.b9, b5.strokeRect(aai, aap, aaj, aak),
			b5.fillStyle = b7.b9, b5.font = v.w.bA(0, .32 * aak), v.w.textBaseline(b5, 1), v.w.textAlign(b5, 0), b5.fillText(L(0 === q ? 525 : 1 === q ? 526 : 527) + aam(q), aai + f7.gap, aap + .53 * aak)
	}

	function aam(q, aaq) {
		return aaq = aaq || 256, fD.ok(Math.floor(aaq * colors[q]), 0, aaq - 1)
	}

	function a1Y(f9, fA) {
		return !(f9 < aai || fA < aZ5.aE || f9 > aZ5.aD + aZ5.ap || fA > aZ5.aE + aZ5.ar)
	}
	this.show = function() {
		var ff = bK.buffer.data[121].value;
		colors[0] = (ff >> 12) / 63, colors[1] = (ff >> 6 & 63) / 63, colors[2] = (63 & ff) / 63, iP.show(), this.resize()
	}, this.eD = function() {
		bK.iF.bH(121, (aam(0, 64) << 12) + (aam(1, 64) << 6) + aam(2, 64)), iP.eD()
	}, this.resize = function() {
		iP.resize(), aZ5.resize();
		var eF = ao.hG,
			aRY = iP.aRU(),
			aan = (aZ5.aE = Math.max(aZ5.aE, eF * aRY.aRV + f7.gap), eF * aRY.aRX - 2 * f7.gap);
		aZ5.ar = Math.min(aZ5.ar, aan), aZ5.ap = 2 * aZ5.ar, aZ5.aE = eF * aRY.aRV + .5 * (eF * aRY.aRX - aZ5.ar), aZ5.aD = .5 * (ao.ap - aZ5.ap), aTw = .25 * aZ5.ap, aai = aZ5.aD + aTw + f7.gap, aaj = aZ5.ap - aTw - f7.gap, aak = (aZ5.ar - 2 *
			f7.gap) / 3
	}, this.aR = function() {
		var hh, tg, ku;
		iP.aR(), b5.lineWidth = f7.a7I, hh = aam(0), tg = aam(1), ku = aam(2), b5.fillStyle = "rgb(" + hh + "," + tg + "," + ku + ")", b5.fillRect(aZ5.aD, aZ5.aE, aTw, aZ5.ar), b5.strokeStyle = b7.b9, b5.strokeRect(aZ5.aD, aZ5.aE, aTw, aZ5.ar),
			b5.fillStyle = hh + tg + ku < 306 && tg < 150 ? b7.b9 : b7.l8, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.font = v.w.bA(0, .1 * aZ5.ar), b5.rotate(-Math.PI / 2), b5.fillText(L(524), -aZ5.aE - .5 * aZ5.ar, aZ5.aD + .5 * aTw), b5
			.setTransform(1, 0, 0, 1, 0, 0), aao(0), aao(1), aao(2)
	}, this.dD = function(f9, fA) {
		a1Y(f9, fA) && (aal = fD.ok(Math.floor((fA - aZ5.aE) / (aak + .75 * f7.gap)), 0, 2), colors[aal] = fD.ok((f9 - aai) / aaj, 0, 1), c0.d1 = !0)
	}, this.dB = function(f9) {
		-1 !== aal && (colors[aal] = fD.ok((f9 - aai) / aaj, 0, 1), c0.d1 = !0)
	}, this.dC = function(f9, fA, deltaY) {
		a1Y(f9, fA) && (f9 = fD.ok(Math.floor((fA - aZ5.aE) / (aak + .75 * f7.gap)), 0, 2), colors[f9] = fD.ok(colors[f9] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), c0.d1 = !0)
	}, this.a1T = function() {
		0 <= aal && (aal = -1, c0.d1 = !0)
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc(L(523), [new dd("⬅️ " + L(5), function() {
		dk.af.i7()
	})], !1), aZ5 = new a9C([.5, .25], [.5, .5], 1)
}

function a2U() {
	var kx = [L(528), L(529), L(530), L(531), L(532), L(533), L(534)],
		aar = [100, 60, 30, 15, 6, 1],
		aas = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		aat = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		aau = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.lJ = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.aNQ = function(id, hh, t) {
		hh = this.aav(hh);
		return +(aas[hh][id] > t)
	}, this.aav = function(hh) {
		for (var q = 0; q < aar.length; q++)
			if (aar[q] <= hh) return q;
		return aar.length
	}, this.aV9 = function(hh) {
		return kx[this.aav(hh)]
	}, this.lI = function(id, aaw) {
		return aat[id].replace(new RegExp("x", "g"), aaw)
	}, this.lK = function(id, aaw) {
		return aau[id].replace(new RegExp("x", "g"), aaw)
	}, this.a9w = function(id, aax) {
		return this.lJ[5][id]
	}
}

function aWK() {
	this.e = function() {
		this.aaF = 0, this.a7b = [], this.a7k = 0, this.a7a = 0
	}, this.aJM = function() {
		var a73;
		f.j5 || (a73 = this, 2 === f.jG ? a73.a7b = jQ.aWL.aJ3() : f.j ? a73.a7b = jQ.aWL.aJ5() : a73.a7b = jQ.aWL.aJ6(), a73.aaF = wY.sK.aaE(), a73.a7k = Math.max(1, jQ.aWL.aJ7(a73.a7b)), gL.c2.oI(), 8 === f.jA ? jQ.result.a7a = 0 : a73.a7a =
			100 * jQ.result.aaF * (1 + f.jB))
	}
}

function ab0() {
	var ab1, nR, ab4, nQ, nT, ab2 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		ab3 = new Array(4),
		ab5 = new Array(2),
		ab6 = [L(271), L(60), L(535), L(536)];

	function aXS() {
		var lM;
		!la.zG || (lM = ab1.ng.ia.e8.value.trim().slice(0, 127)).length < 1 || (ab1.ng.ia.e8.value = "", la.a7R.aJM(lM))
	}

	function ab9(abB) {
		la.af.yD[3] = 1 - la.af.yD[3], abA(3, 1, la.af.yD[3]), abB && bZ.zy.a5K(4), la.af.yD[3] && bK.iF.bH(158, la.af.yD[0])
	}

	function ab7(ca, ku) {
		la.af.yD[ca] !== ku && (0 === ca && la.af.yD[3] && ab9(0), abA(ca, la.af.yD[ca], 0), abA(ca, ku, 1), la.af.yD[ca] = ku, 0 === ca ? (bZ.zy.a5K(2, ku), la.af.yD[2] ? (ab1.ni.fM(), ab1.ng.reset(1)) : ab1.ng.reset(0), dk.i9().aTQ(), dk.i9()
		.aTP()) : 2 === ca && (0 === ku ? (bZ.zy.a5K(0), ab1.ng.fM(), ab1.nt()) : (bZ.zy.a5K(1), ab1.ni.fM(), ab1.nu())))
	}

	function abA(ca, ku, color) {
		ab1.nk[ca].a71[ku].pz(color ? b7.a9S : b7.aKA)
	}

	function abE(m3) {
		return au.zY.aRa[m3]
	}

	function abF(a6U) {
		return a6U < 7 ? "   " + (a6U + 2) + " Teams" : 10 === a6U ? "   No Full-Sending" : ""
	}

	function abG(a6Z, abN) {
		return abN ? a6Z <= 90 && 60 < a6Z ? "   Contest" : "" : a6Z <= 60 ? "   Contest" : ""
	}
	this.a4t = function() {
		return ab1.ng
	}, this.a7R = function(ij) {
		ab7(2, 0);
		var bJ = ab1.ng.ia.e8.value,
			ij = "@" + ij + " ";
		bJ.length && !v.bB.uY(bJ, " ") && (ij = " " + ij), ab1.ng.ia.e8.value = bJ += ij, ab1.ng.ia.e8.focus()
	}, this.aTO = function() {
		ab1.ni.fM()
	}, this.aTQ = function() {
		var abD = la.af.yD[0],
			abD = la.af.lm[abD],
			ku = (au.bX(abD.m3, abD.mapSeed), nR.a71),
			aVB = abE(abD.m3, abD.mapSeed) + abF(abD.a6U) + abG(abD.a6Z),
			abD = L(539) + "   " + abE(abD.a6V, abD.a6W) + abF(abD.a6X) + abG(abD.a6Z, 1);
		ku[0].button.textContent === aVB && ku[1].button.textContent === abD || (ku[0].button.textContent = aVB, ku[1].button.textContent = abD, nR.resize())
	}, this.aTP = function() {
		var abD = la.af.yD[0],
			aQa = la.af.lm[abD];
		ab1.nr(aQa.ns);
		for (var ff, t6, q = 0; q < la.lb.lZ.length; q++) ab2[0][q].a56.textContent = la.lb.lZ[q].length, ab2[1][q].a56.textContent = (ff = la.af.lm[q].a6Z, t6 = void 0, ((t6 = fD.fE(ff, 60)) < 10 ? "0" : "") + t6 + ":" + ((ff %= 60) < 10 ? "0" :
			"") + ff);
		var aQa = la.lb.lZ[abD],
			abI = aQa.length,
			abJ = la.lb.y3[abD];
		ab2[2][1].a56.textContent = "" + abI, ab2[3][1].a56.textContent = "" + abJ;
		for (q = 0; q < 4; q++) {
			var abK = la.af.lm[q];
			ab3[q] ? 0 === abK.ns && (ab3[q].a56.textContent = au.zY.aRa[abK.m3]) : ab3[q] = new a51(au.zY.aRa[abK.m3], nQ.a71[q].button, 1, 1), v.bB.startsWith(ab6[q], "🏆 ") ? abK.a6Y || (ab6[q] = ab6[q].substring(3), nQ.a71[q].button
				.textContent = ab6[q], nQ.a71[q].button.appendChild(ab2[1][q].a56), nQ.a71[q].button.appendChild(ab2[0][q].a56), nQ.a71[q].button.appendChild(ab3[q].a56)) : abK.a6Y && (ab6[q] = "🏆 " + ab6[q], nQ.a71[q].button.textContent =
				ab6[q], nQ.a71[q].button.appendChild(ab2[1][q].a56), nQ.a71[q].button.appendChild(ab2[0][q].a56), nQ.a71[q].button.appendChild(ab3[q].a56))
		}
		var abL = "",
			abM = "";
		0 === abD && (abL = la.td.le(aQa, 0, abI), abM = la.td.le(aQa, 0, abJ)), ab4[0].a56.textContent = abL, ab4[1].a56.textContent = abM, ab5[1].a56.textContent = "MP: " + la.af.aTI[0] + "   SP: " + la.af.aTI[1] + "   Lobby: " + v.aN.aF3(la.lb
			.lZ)
	}, this.aTS = function() {
		ab1.ng.fM()
	}, this.show = function() {
		la.af.yC++, ab1.show(), this.resize(), la.message.show()
	}, this.eD = function() {
		ab1.eD(), la.a1e.eD(), la.tb.eD(), la.message.eD()
	}, this.resize = function() {
		ab1.resize(1 - la.af.yD[2]), la.message.resize()
	}, this.eE = function(eF) {
		2 === eF ? la.af.yD[3] ? ab9(1) : ab1.nk[3].a71[0].bL() : eF < 2 && ab9(1)
	}, nQ = new a6x([new dd(ab6[0], function() {
		return ab7(0, 0), 2
	}), new dd(ab6[1], function() {
		return ab7(0, 1), 2
	}), new dd(ab6[2], function() {
		return ab7(0, 2), 2
	}), new dd(ab6[3], function() {
		return ab7(0, 3), 2
	})], b7.aKA), nR = new a6x([new dd("", 0, 2), new dd("", 0, 2)], b7.aKB, 1);
	var ab8 = new a6x([new dd(L(537), function() {
		return ab7(2, 0), 2
	}), new dd(L(142), function() {
		return ab7(2, 1), 2
	})], b7.aKA);
	nT = new a6x([new dd(L(30, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			dk.i6(), la.q4(), bZ.af.a5n(3240), __fx.customLobby.setActive(false), dk.e3(5, 5)
		}),
		function() {
			dk.i6(), la.q4(), bZ.af.a5n(3240), __fx.customLobby.setActive(false), dk.e3(5, 5)
		})), new dd(L(538), function() {
		return ab9(1), 2
	})], b7.aKA), ab1 = new nP(nQ, nR, ab8, nT, aXS, la.a1e.aMt);
	for (var q = 0; q < 4; q++) ab2[0][q] = new a51("0", nQ.a71[q].button), ab2[1][q] = new a51("0", nQ.a71[q].button, 1);
	ab2[2][1] = new a51("0", ab8.a71[1].button), ab2[3][1] = new a51("0", nT.a71[1].button), (ab4 = [new a51("", ab8.a71[1].button, 1, 1), new a51("", nT.a71[1].button, 1, 1)])[0].a56.style.bottom = "0em", ab4[1].a56.style.bottom = "0em", abA(0, la
		.af.yD[0], 1), abA(2, la.af.yD[2], 1), (ab5 = [new a51(L(37), ab1.nv(), 1, 0), new a51("", ab1.nv(), 1, 1)])[0].a56.style.fontSize = "0.4em", ab5[1].a56.style.fontSize = "0.4em"
}

function aHc() {
	var aD, aE, ar, ny, abO, abP, abQ, abR, abS, ap, aVM, aWU;
	this.f0 = !1, this.e = function(bJ, abT) {
		if (1 === cu.id && 13 <= cu.bM && cu.bM < 18) return abT ? void(aVM = bJ) : aVM !== bJ ? void 0 : void cu.qc.saveString(200, bJ);
		abT && (aVM = bJ, (aWU = document.createElement("a")).appendChild(document.createTextNode(aVM)), this.f0 = !0, aWU.title = aVM, aWU.target = "_blank", aWU.href = aVM, aWU.style.textAlign = "center", aWU.style.color = b7.b9, aWU.style
			.position = "absolute", aWU.style.padding = "0px", aWU.style.margin = "0px", this.resize(), document.body.appendChild(aWU), c0.d1 = !0)
	}, this.eD = function() {
		return !(!this.f0 || (dk.removeChild(document.body, aWU), this.f0 = !1))
	}, this.dD = function(xP, xQ) {
		return !!this.f0 && ((xP < aD || xQ < aE || aD + ap < xP || aE + ar < xQ || aD + ap - ny < xP && xQ < aE + ny) && (c0.d1 = !0, this.f0 = !1, dk.removeChild(document.body, aWU)), !0)
	}, this.resize = function() {
		var ck, aEA;
		this.f0 && (abR = Math.floor(.8 * (cu.cv.cw() ? ao.ap > ao.ar ? .6 : .55 : .4) * ao.cx), ny = Math.floor(.15 * abR), abO = Math.floor(.35 * ny), abP = Math.floor(.5 * ny), abQ = Math.floor(2.5 * abP), ar = ny + abO + 3 * abP, ck = v.w.bA(
				1, abO / ao.hG), abS = Math.floor(ao.hG * fK.measureText(aVM, ck)), aEA = ap = (abR < abS ? abS : abR) + 2 * abQ, ap = Math.min(ap, ao.ap - 2 * (cu.cv.cw() ? 2 : 1) * f7.gap), ck = v.w.bA(1, ap / aEA * abO / ao.hG), abS = Math
			.floor(ao.hG * fK.measureText(aVM, ck)), aD = Math.floor((ao.ap - ap) / 2), aE = Math.floor((ao.ar - ar) / 2), aWU.style.font = ck, aWU.style.top = Math.floor((aE + 1.4 * abP + ny) / ao.hG) + "px", aWU.style.left = Math.floor((
				aD + (ap - abS) / 2) / ao.hG) + "px")
	}, this.aR = function() {
		this.f0 && (b5.fillStyle = b7.cF, b5.fillRect(aD, aE + ny, ap, ar - ny), b5.fillStyle = b7.aK8, b5.fillRect(aD, aE, ap, ny), b5.fillStyle = b7.b9, b5.lineWidth = f7.a7I, b5.strokeStyle = b7.b9, b5.strokeRect(aD, aE, ap, ar), b5.fillRect(
			aD, aE + ny, ap, f7.a7I), b5.font = v.w.bA(1, .48 * ny), v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.fillText(L(540), Math.floor(aD + (ap - .5 * ny) / 2), Math.floor(aE + .55 * ny)), fF.fW(Math.floor(aD + ap - .8 * ny),
			Math.floor(aE + .25 * ny), Math.floor(.5 * ny)), b5.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aH1() {
	this.cK = null, this.cI = 0, this.jq = function() {
		for (this.cI = 0, q = f.g - 1; 0 <= q; q--) 0 !== cD.ft[q] && this.cI++;
		this.cK = new Uint16Array(this.cI);
		for (var n = 0, q = 0; q < f.g; q++) 0 !== cD.ft[q] && (this.cK[n++] = q)
	}, this.aRD = function() {
		for (var fh = cD.fh, sW = cD.sW, sb = cD.sb, cK = cH.cK, q = cH.cI - 1; 0 <= q; q--) {
			var c9 = cK[q],
				d8 = fh[c9],
				aL = sW[c9];
			d8 <= fD.fE(aL, 4) ? aGd.wL(c9) : aL <= d8 ? 250 <= (sW[c9] = d8) && (sb[c9] = 1) : sW[c9] = aL - Math.max(1, fD.fE(aL - d8, 1e3))
		}
		this.aW4()
	}, this.aW4 = function() {
		for (var ft = cD.ft, cJ = this.cK, cG = this.cI, q = cG - 1; 0 <= q; q--) 0 === ft[cJ[q]] && (cJ[q] = cJ[--cG]);
		this.cI = cG
	}
}

function aH5() {
	var abV, abW, abX;
	this.e = function() {
		abV =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), abW =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), abX = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aVB = ["K ", " Y", "E ", " Z", " z", " s", "S "], aY3 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], q = abV.length - 1; 0 <= q; q--)
			for (var ca = aVB.length - 1; 0 <= ca; ca--) abV[q] = abV[q].replace(aVB[ca], aY3[ca]);
		if (__fx.settings.realisticNames) abV = realisticNames;
	}, this.jc = function() {
		var n = f.iy,
			cE = cD.cE,
			sQ = cD.sQ,
			playerNamesData = f.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < n)
			for (var q = 0; q < n; q++) cE[q] = sQ[q] = "Player " + jX.tI(1e3);
		else
			for (q = 0; q < n; q++) cE[q] = sQ[q] = __fx.nameFilter.filter(playerNamesData[q])
	}, this.bX = function() {
		if (9 === f.jA) {
			for (var hh = jX.random(), abd = abX, abe = abW, aW = jn.aW, n = abd.length, aL = f.data.teamPlayerCount[7], cE = cD.cE, sQ = cD.sQ, q = aL - 1; q >= f.iy; q--) cE[q] = sQ[q] = abd[(q + hh) % n];
			for (n = abe.length - 1, q = aL; q < f.g; q++) cE[q] = sQ[q] = abe[aW[q] ? n : q % n]
		} else(2 === f.data.playerNamesType ? function() {
			for (var n = f.g, cE = cD.cE, sQ = cD.sQ, playerNamesData = f.data.playerNamesData, q = f.iy; q < n; q++) cE[q] = sQ[q] = __fx.nameFilter.filter(playerNamesData[q])
		} : 1 === f.data.playerNamesType ? function() {
			for (var cE = cD.cE, sQ = cD.sQ, q = f.iy; q < f.g; q++) cE[q] = sQ[q] = "Bot " + jX.tI(1e3)
		} : function() {
			for (var abf = abV, n = abf.length, hh = jX.random(), cE = cD.cE, sQ = cD.sQ, q = f.iy; q < f.g; q++) cE[q] = sQ[q] = abf[(q + hh) % n]
		})()
	}
}

function aUk() {
	this.gj = function(player) {
		v.c2.wb(player) && c5.cC(80, L(541), 637, 0, b7.aJw, b7.cF, -1, !1)
	}, this.gm = function(player) {
		v.c2.wb(player) && c5.cC(80, L(542), 637, 0, b7.aJw, b7.cF, -1, !1)
	}
}

function aHW() {
	var abg = new Array(1),
		abh = new Array(1),
		abi = 20,
		aEm = 0,
		abj = !1;

	function abl() {
		abi++, a4w.play()
	}
	this.e = function() {
		if (!window.document.documentMode) {
			for (var q = 0; 0 <= q; q--) ! function(q, src) {
				abh[q] = 0, abg[q] = document.createElement("audio"), abg[q].src = src, abg[q].setAttribute("preload", "auto"), abg[q].setAttribute("controls", "none"), abg[q].style.display = "none", abg[q].onpause = function() {
					abh[q] = 1
				}, abg[q].oncanplaythrough = function() {
					abh[q] = 0 === abh[q] ? 1 : abh[q]
				}, document.body.appendChild(abg[q])
			}(q,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
			abj = !0
		}
	}, this.q4 = function() {
		if (abj) {
			abj = !1;
			for (var q = 0; 0 <= q; q--) abg[q].onpause = null, abg[q].oncanplaythrough = null, dk.removeChild(document.body, abg[q]), abg[q] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		a4w.play()
	}), this.play = function() {
		if (abj) {
			var d8 = performance.now();
			if (aEm + 66 < d8)
				for (var q = 0; 0 <= q; q--)
					if (1 === abh[q]) return aEm = d8, abh[q] = 2, void abg[q].play();
			0 < abi && (abi--, setTimeout(abl, 66))
		}
	}
}

function aHE() {
	this.a6a = 0;
	var abm, abn, abo, abp, abq, abr = this.aFW = 0;

	function abu() {
		abp = abq = null, abr = 0
	}
	this.e = function(aQa, aQc, aQd) {
		dk.i6(), la.q4(), dV.setState(10), abp = aQa, abq = aQc, abr = aQd, this.a6a = aQa.a6a, this.aFW = aQd, abm = 0, abn = c0.fr + 4500, bZ.af.a1J = aQa.a1J, bZ.af.zH === aQa.a1J ? (console.log("direct pass"), abo = 0) : (console.log(
			"delayed pass"), bZ.af.close(bZ.af.zH, 3247), abo = 2, bZ.af.wz(aQa.a1J, 5, 2) && bZ.iL.aFU()), b5.imageSmoothingEnabled = !0, dV.hk();
		aQc = r1.aLy("loading"), aQd = (cu.cv.cw() ? .396 : .25) * ao.cx / aQc.width;
		b5.setTransform(aQd, 0, 0, aQd, Math.floor((ao.ap - aQd * aQc.width) / 2), Math.floor((ao.ar - aQd * aQc.height) / 2)), b5.imageSmoothingEnabled = !1, b5.drawImage(aQc, 0, 0), b5.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aRF = function() {
		0 < abo && c0.fr > abn && (abo--, abn += 4500, 0 === c0.aBj) && 0 === c0.c1() && bZ.af.wz(bZ.af.a1J, 5, 2)
	}, this.aPA = function() {
		return 10 === dV.dW() && (la.a7S.aQf(abp, abq, abr), abu(), !0)
	}, this.aaG = function() {
		10 === dV.dW() && 2 <= ++abm && (la.a7S.aQf(abp, abq, abr), abu())
	}
}

function aOc() {
	var abw, aby = new Uint16Array(8);

	function abz(size, player) {
		for (var q = cD.m6[player].length - 1; size <= q; q--) a6.aCm(cD.m6[player][q], player)
	}
	this.e = function() {
		abw = 0
	}, this.aEP = function(player, aEN) {
		return a9.eY[1] = cD.m6[player].length, a9.eY[0] === f.g ? cU.aEO.aRB(player) : this.aR9(player, a9.eY[0]), (0 !== a9.eY[1] || 0 !== cD.m6[player].length) && !(!aEN && a9.eY[1] === cD.m6[player].length || (a9.eY[0] === f.g ? cD.sY[
			player]++ : cD.sZ[player]++, 0))
	}, this.aEQ = function(player) {
		abz(a9.eY[1], player), gb.uG(player, a9.eT[0], a9.eY[0]), k1.uH(player, !1)
	}, this.aRA = function(player, uA, n, aW) {
		var ac0 = fD.fE(12 * cD.mY[player], 1024);
		aW -= aW >= fD.fE(cD.mY[player], 2) ? ac0 : 0, abz(n, player), gb.uG(player, aW, uA), cD.mY[player] -= aW + ac0, k1.uH(player, !1)
	}, this.aR9 = function(player, uA) {
		for (var h1, gy = a6.gy, q = cD.gz[player].length - 1; 0 <= q; q--)
			if (a6.aCn(cD.gz[player][q]))
				for (h1 = 3; 0 <= h1; h1--)
					if (a6.h3(cD.gz[player][q] + gy[h1]) && a6.gU(cD.gz[player][q] + gy[h1]) === uA) {
						cD.m6[player].push(cD.gz[player][q]);
						break
					}
	}, this.aRB = function(player) {
		for (var gy = a6.gy, q = cD.gz[player].length - 1; 0 <= q; q--)
			if (a6.aCn(cD.gz[player][q]))
				for (var h1 = 3; 0 <= h1; h1--)
					if (a6.cT(cD.gz[player][q] + gy[h1])) {
						cD.m6[player].push(cD.gz[player][q]);
						break
					}
	}, this.aQq = function(player, ac1) {
		var q, ca, h1, h4, n = cD.gz[player].length,
			xl = 256 <= n ? 12 : 32 <= n ? 6 : 1,
			v4 = n - 1 - jX.tI(xl),
			gy = a6.gy;
		abw = 0;
		loop: for (q = v4; 0 <= q; q -= xl)
			for (h1 = 3; 0 <= h1; h1--)
				if ((h4 = a6.cT(cD.gz[player][q] + gy[h1]) ? f.g : a6.gU(cD.gz[player][q] + gy[h1])) === f.g || a6.h3(cD.gz[player][q] + gy[h1]) && h4 !== player && (ac1 || gY.gf(player, h4))) {
					for (ca = abw - 1; 0 <= ca; ca--)
						if (aby[ca] === h4) continue loop;
					if (aby[abw] = h4, 8 <= ++abw) return !0
				}
		return 0 < abw
	}, this.aQr = function(player, ac1) {
		var q, h1, h4, gy = a6.gy;
		for (abw = 0, q = cD.gz[player].length - 1; 0 <= q; q--)
			for (h1 = 3; 0 <= h1; h1--)
				if ((h4 = a6.cT(cD.gz[player][q] + gy[h1]) ? f.g : a6.gU(cD.gz[player][q] + gy[h1])) === f.g || a6.h3(cD.gz[player][q] + gy[h1]) && h4 !== player && (ac1 || gY.gf(player, h4))) return aby[abw++] = h4, !0;
		return !1
	}, this.aQt = function() {
		for (var ku, q = abw - 1; 0 <= q; q--)
			if (aby[q] === f.g) {
				for (abw--, ku = q; ku < abw; ku++) aby[ku] = aby[ku + 1];
				return !0
			} return !1
	}, this.aQs = function(player) {
		for (var ku, q = abw - 1; 0 <= q; q--)
			if (gb.uE(player, aby[q]))
				for (abw--, ku = q; ku < abw; ku++) aby[ku] = aby[ku + 1];
		return 0 === abw
	}, this.aQz = function() {
		for (var q = abw - 1; 0 <= q; q--)
			if (v.c2.rO(aby[q])) return !0;
		return !1
	}, this.aR1 = function() {
		for (var q = abw - 1; 0 <= q; q--) v.c2.rO(aby[q]) || (aby[q] = aby[--abw]);
		return 0 < abw
	}, this.aQx = function(player) {
		for (var ku, ac2 = aby[0], ac3 = cD.mY[ac2] + gb.mZ(ac2, player), q = abw - 1; 1 <= q; q--)(ku = cD.mY[aby[q]] + gb.mZ(aby[q], player)) < ac3 && (ac2 = aby[q], ac3 = ku);
		return ac2
	}, this.aR3 = function(player) {
		var ar, ac4 = aby[0];
		if (1 !== abw)
			for (var ac5 = fD.fE(cD.sU[player] + cD.sS[player], 2), ac6 = fD.fE(cD.sV[player] + cD.sT[player], 2), aH = a5w(ac5 - fD.fE(cD.sU[ac4] + cD.sS[ac4], 2)) + a5w(ac6 - fD.fE(cD.sV[ac4] + cD.sT[ac4], 2)), q = abw - 1; 1 <= q; q--)(ar =
				a5w(ac5 - fD.fE(cD.sU[aby[q]] + cD.sS[aby[q]], 2)) + a5w(ac6 - fD.fE(cD.sV[aby[q]] + cD.sT[aby[q]], 2))) < aH && (aH = ar, ac4 = aby[q]);
		return ac4
	}, this.aR8 = function() {
		for (var ac7 = aby, ac8 = ac7[0], mY = cD.mY, ac9 = mY[ac8], q = abw - 1; 1 <= q; q--) {
			var c9 = ac7[q],
				ku = mY[c9];
			ac9 < ku && (ac8 = c9, ac9 = ku)
		}
		return ac8
	}, this.aR2 = function() {
		return aby[jX.tI(abw)]
	}
}

function aGn() {
	var aYS = new Uint8Array(f.g),
		acA = new Uint16Array(f.g),
		acB = new Uint16Array(f.g),
		acC = new Uint8Array(f.g),
		acD = (this.aW = new Uint8Array(f.g), new Uint16Array(f.g)),
		acE = new Uint16Array(f.g);

	function acK(q) {
		aYS[q] = 1 + fD.fE(acD[q] * jX.random(), 10 * jX.value(100))
	}
	this.oq = null, this.aR0 = [97, 94, 70, 40, 20, 0, 100], this.a3h = [500, 450, 400, 300, 80, 50, 100], this.aQw = [0, 0, 5, 25, 50, 100, 0], this.a6w = [60, 74, 112, 200, 256, 512, 512], this.a3f = [1, 2, 3, 4, 6, 8, 1], this.acF = [500, 450,
		400, 300, 80, 50, 100
	], this.aEg = [100, 150, 250, 400, 600, 1e3, 100], this.f4 = function() {
		this.oq = [L(543), L(544), L(495), L(545), L(546), L(547), "H Bot"]
	}, this.e = function() {
		aYS.fill(0), acA.fill(0), acB.fill(0), acC.fill(0), this.aW.fill(0), acD.fill(0), acE.fill(0);
		var acG = f.iy;
		if (9 === f.jA) this.acH();
		else if (__fx.customLobby.isActive())
			for (q = f.j0 - 1; 0 <= q; q--) this.aW[q + acG] = __fx.customLobby.gameInfo.difficulty;
		else if (f.j5)
			if (3 === f.data.botDifficultyType)
				for (q = f.j0 - 1; 0 <= q; q--) {
					var h2 = q + acG;
					this.aW[h2] = f.data.botDifficultyData[h2]
				} else if (2 === f.data.botDifficultyType)
					for (q = f.j0 - 1; 0 <= q; q--) this.aW[h2 = q + acG] = f.data.botDifficultyTeam[l.m[l.cR[h2]]];
				else if (1 === f.data.botDifficultyType) {
			var acJ = this.oq.length;
			for (q = f.j0 - 1; 0 <= q; q--) this.aW[q + acG] = q % acJ
		} else
			for (acJ = f.data.botDifficultyValue, q = f.j0 - 1; 0 <= q; q--) this.aW[q + acG] = acJ;
		else
			for (var acI = 8 === f.jA ? 1 : 0, q = f.j0 - 1; 0 <= q; q--) this.aW[q + acG] = acI;
		for (q = 0; q < acG; q++) this.aW[q] = 6;
		var n = f.g;
		for (q = 0; q < n; q++) this.aW[q] <= 2 ? (acC[q] = 5, acD[q] = acE[q] = 1040, 0 === this.aW[q] ? (acA[q] = 980, acB[q] = 980) : 1 === this.aW[q] ? (acA[q] = 980, acB[q] = 920, acD[q] = acE[q] = 1100) : (acA[q] = 825, acB[q] = 750)) :
			this.aW[q] <= 4 ? (acC[q] = 1 + jX.tI(20), 3 === this.aW[q] ? (acA[q] = acB[q] = 500, acD[q] = acE[q] = 1e3) : (acE[q] = 250 + jX.tI(1501), acD[q] = 500 + jX.tI(501), acA[q] = 300 + jX.tI(201), acB[q] = 100 + jX.tI(201))) : this.aW[
			q] <= 5 ? (acD[q] = 1e3, acE[q] = 1e3, acC[q] = 35 + jX.tI(16), acA[q] = 300 + jX.tI(201), acB[q] = 50 + jX.tI(101)) : (acD[q] = acE[q] = 800, acC[q] = 5, acA[q] = 10, acB[q] = 250), acK(q)
	}, this.acH = function() {
		for (var a3 = jS.tC, acG = f.iy, q = a3 - 1; 0 <= q; q--) this.aW[q + acG] = 0;
		for (var ku = 0; ku < 6; ku++) {
			for (q = a3 + jS.tB[ku] - 1; a3 <= q; q--) this.aW[q + acG] = ku;
			a3 += jS.tB[ku]
		}
	}, this.aQn = function(c9, value) {
		aYS[c9] = Math.min(value, aYS[c9])
	}, this.bu = function(c9) {
		0 == --aYS[c9] && ! function(c9) {
			(function(c9) {
				acD[c9] !== acE[c9] && (acD[c9] += acD[c9] < acE[c9] ? 3 : -3);
				acA[c9] !== acB[c9] && (acA[c9] += acA[c9] < acB[c9] ? acC[c9] : -acC[c9], acA[c9] = (Math.abs(acA[c9] - acB[c9]) <= acC[c9] ? acB : acA)[c9]);
				aYS[c9] = fD.fE(acD[c9], 10)
			})(c9), cU.aOd.aQi(c9, fD.fE(acA[c9] * cD.mY[c9], 1e3))
		}(c9)
	}, this.a96 = function(c9, hd) {
		acD[c9] = acE[c9] = hd
	}
}

function aUj() {
	this.aR7 = function(player, pb, aW) {
		v.c2.a4X(player, aW, pb) && (jZ.aER(player, pb), !v.c2.rO(pb)) && cU.aOd.aQh[pb] && cU.aOd.aQh[pb]--
	}, this.uD = function(player, pb, aW) {
		v.c2.aKK(aW, pb) ? ja.uG(pb, a9.eT[0]) && (jR.a4C(player, pb, a9.eT[0], 1), v.c2.uB(pb, a9.eT[0]), fI.pa(player, pb), k4.aDQ(pb, a9.eT[0])) : fI.mT(player, aW, 12)
	}
}

function a63() {
	var acN = null;
	this.aDn = 0, this.a6D = function() {
		var ff = bK.buffer.data[5].value;
		acN = "px " + ff, "system-ui" !== ff && (acN += ", system-ui"), this.aDn = aTq(32, 32, ["a", "b", "m"], 200, acN)
	}, this.x = function(ap, ar) {
		var eF = document.createElement("canvas");
		return eF.width = ap, eF.height = ar, eF
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(fY, ap, ar) {
		return fY.getImageData(0, 0, ap, ar)
	}, this.bA = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + acN : 1 === type ? "bold " + size + acN : 2 === type ? "lighter " + size + acN : 3 === type ? "italic " + size + acN : 4 === type ? "oblique " + size + acN : 5 === type ? "small-caps " +
			size + acN : "small-caps bold " + size + acN
	}, this.textAlign = function(y, id) {
		y.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(y, id) {
		y.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.hL = function(e8, code, color) {
		color = this.hK(f7.a1x) + " solid " + (color || b7.b9);
		5 === (code = code || 5) ? e8.style.border = color : 4 === code ? e8.style.borderLeft = color : 2 === code ? e8.style.borderBottom = color : 6 === code ? e8.style.borderRight = color : e8.style.borderTop = color
	}, this.aZ0 = function(e8, aD, aE, ap, ar) {
		e8 = e8.style;
		e8.left = this.aZ1(aD), e8.top = this.aZ1(aE), e8.width = this.aZ1(ap), e8.height = this.aZ1(ar)
	}, this.hB = function(ff) {
		return 1 + ff * cu.cv.cw()
	}, this.ke = function(pA, hF) {
		return pA * this.hB(void 0 === hF ? .5 : hF) * ao.cx / ao.hG
	}, this.w6 = function(pA, hF) {
		return pA * this.hB(void 0 === hF ? .5 : hF) * ao.cx
	}, this.aOM = function(pA, hF, acO) {
		return this.hB(hF) * Math.min(pA * ao.cx, acO * ao.ap) / ao.hG
	}, this.hK = function(ff) {
		return ff.toFixed(1) + "px"
	}, this.aZ1 = function(ff) {
		return this.kd(ff).toFixed(1) + "px"
	}, this.kd = function(ff) {
		return ff / ao.hG
	}, this.aNC = function(aNB) {
		for (var bJ = "<ul>", n = aNB.length, q = 0; q < n; q++) bJ += "<li>" + aNB[q][0] + ": <a href='" + aNB[q][1] + "' target='_blank'>" + aNB[q][0] + "</a></li>";
		return bJ += "</ul>"
	}, this.aBQ = function(aVM) {
		return "<a href='" + aVM + "' target='_blank'>" + aVM + "</a>"
	}, this.aV5 = function(e8) {
		navigator.clipboard && navigator.clipboard.writeText(e8.value)
	}, this.kr = function(e8) {
		var d8 = e8.textContent;
		v.bB.uY(d8, "✔") || (1 === d8.length ? e8.textContent = "✔" : e8.textContent = d8 + " ✔", setTimeout(function() {
			e8.textContent = d8
		}, 500))
	}, this.measureText = function(bJ) {
		return b5.measureText(bJ).width
	}, this.no = function(acQ) {
		acQ.style.overflowX = "auto", acQ.style.overflowY = "hidden", acQ.style.whiteSpace = "nowrap", acQ.addEventListener("wheel", function(e8) {
			Math.abs(e8.deltaY) < Math.abs(e8.deltaX) || (this.scrollLeft += e8.deltaY, this.aRZ = this.scrollLeft, e8.preventDefault())
		}), acQ.addEventListener("scroll", function() {
			this.aRZ = this.scrollLeft
		})
	}
}

function aYy(a52, a53, acR, acS, acT) {
	var self;
	this.a56 = document.createElement("span"), this.resize = function() {
			this.a56.style.fontSize = ((acS - acR) * a53.offsetHeight).toFixed(1) + "px"
		}, (self = this).a56.textContent = a52, self.a56.style.color = b7.b9, self.a56.style.font = "inherit", self.a56.style.margin = "0.1em 0.6em", self.a56.style.pointerEvents = "none", acT && (self.a56.style.fontWeight = "bold"), self.a56.style
		.whiteSpace = "nowrap", self.a56.style.display = "block", a53.appendChild(self.a56)
}

function aHN() {
	this.af = new hv, this.iI = 0;
	var acU = new Array(32);

	function acX() {
		for (var n = acU.length, q = 0; q < n; q++) acU[q] = null
	}
	this.e = function() {
		for (var acV, acW = document.body.firstChild; acW;) acV = acW.nextSibling, !document.body.contains(acW) || "DIV" !== acW.tagName && "INPUT" !== acW.tagName && "BUTTON" !== acW.tagName || dk.removeChild(document.body, acW), acW = acV
	}, this.e3 = function(t, iA, s5) {
		void 0 === iA && (iA = this.iI), c0.d1 = !0, 0 === t && (0 === dV.dW() ? t = 5 : cu.cv.setState(13)), this.eD(), this.iI === t && (iA = acU[t].iA, acU[t] = null), this.iI = t;
		var aL = acU[t];
		if (!aL || 4 === t || 7 === t || 8 === t || 9 === t || 10 === t || 11 === t || 13 === t || 15 === t || 18 === t || 20 <= t && t <= 28 || 32 === t || 33 === t) {
			if (0 === t) return void acX();
			1 === t ? aL = new aN5 : 2 === t ? aL = new aYm : 3 === t ? aL = new yi : 4 === t || 9 === t || 10 === t || 11 === t || 13 === t || 33 === t ? aL = s5 : 5 === t ? aL = new aZ2 : 6 === t ? aL = new a7p : 7 === t ? aL = new aUl(dk.af
					.hy) : 8 === t ? aL = s5 : 12 === t ? aL = new aah : 14 === t ? aL = new iO : 15 === t ? aL = new aUl(dk.af.hx) : 16 === t ? aL = new pN : 17 === t ? aL = new aZG : 18 === t ? aL = new pq : 19 === t ? aL = new oK : 20 === t ?
				aL = new aLD : 21 === t ? aL = new aGV : 22 === t ? aL = new aCp : 23 === t ? aL = new a6g : 24 === t ? aL = new dX : 25 === t ? aL = new aSp : 26 === t ? aL = new aOS : 27 === t ? aL = new acY : 28 === t ? aL = new a1m : 29 ===
				t ? aL = new ab0 : 30 === t ? aL = new aCA : 31 === t ? aL = new aST : 32 === t && (aL = new acZ), aL.iA = iA, acU[t] = aL
		}
		aL.show(s5)
	}, this.dm = function() {
		this.f0() && this.iS(this.i9().iA)
	}, this.iS = function(t) {
		this.f0() && (acU[t] ? (this.eD(), c0.d1 = !0, this.iI = t, acU[t].show()) : this.e3(t))
	}, this.eD = function() {
		this.f0() && acU[this.iI].eD()
	}, this.i6 = function() {
		this.f0() && (acU[this.iI].eD(), acX(), this.iI = 0, cu.cv.setState(13))
	}, this.aR = function() {
		var aL;
		this.f0() && (aL = acU[this.iI]).aR && aL.aR()
	}, this.resize = function() {
		if (!this.f0()) return !1;
		acU[this.iI].resize()
	}, this.dD = function(aD, aE) {
		var aL;
		this.f0() && (aL = acU[this.iI]).dD && aL.dD(aD, aE)
	}, this.dB = function(aD, aE) {
		var aL;
		this.f0() && (aL = acU[this.iI]).dB && aL.dB(aD, aE)
	}, this.a1T = function() {
		var aL;
		this.f0() && (aL = acU[this.iI]).a1T && aL.a1T()
	}, this.dC = function(f9, fA, deltaY) {
		var aL;
		this.f0() && (aL = acU[this.iI]).dC && aL.dC(f9, fA, deltaY)
	}, this.eE = function(code) {
		var aL;
		return !!this.f0() && ((aL = acU[this.iI]).eE && aL.eE(code), !0)
	}, this.bu = function() {
		var aL;
		this.f0() && (aL = acU[this.iI]) && aL.bu && aL.bu()
	}, this.f0 = function() {
		return 0 < this.iI
	}, this.i9 = function() {
		return acU[this.iI]
	}, this.a4H = function(t) {
		return acU[t]
	}, this.dl = function() {
		return acU
	}, this.removeChild = function(kl, acQ) {
		try {
			kl.removeChild(acQ)
		} catch (e8) {
			console.log("removeChild error " + e8)
		}
	}
}

function e5(aca, acb, acc) {
	function click() {
		var value = 1 - aca.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + acb, void 0 !== aca.t ? bK.iF.bH(aca.t, value) : aca.value = value, acc && acc(value)
	}
	var e8;
	acb = acb || L(548), this.e8 = document.createElement("p"), (e8 = this.e8).textContent = (aca.value ? "🟩 " : "⬜ ") + acb, e8.style.margin = "0", e8.style.marginBottom = "0.5em", e8.style.cursor = "pointer", e8.addEventListener("click", click)
}

function dd(acb, acd, a6z, ace, acf) {
	var self, acg = document.createElement("button");

	function a3z() {
		var v9;
		nm.nn() || (v9 = v.color.aYM(a6z), !1 !== ace && 0 < v9[0] && v9[0] < 255 && v9[0] === v9[1] && v9[0] === v9[2]) || (128 < v9[0] && 128 < v9[1] && 128 < v9[2] ? acg.style.backgroundColor = v.color.a43(a6z, -50) : acg.style.backgroundColor = v
			.color.a43(a6z, v9[3] && v9[3] < 120 ? 150 : 50))
	}

	function ach() {
		if (ace) {
			var v9 = v.color.aYM(a6z);
			if (v9[0] === v9[1] && v9[0] === v9[2]) return
		}
		acd && ((v9 = acd(this)) ? 2 === v9 && a3z() : acl(this))
	}

	function aci() {
		this.style.backgroundColor = a6z
	}

	function a40() {
		acl(this)
	}

	function acl(f6) {
		f6.style.backgroundColor = a6z, f6.blur()
	}
	this.button = acg, this.bL = acd, this.aND = a6z, this.a8r = function(acj) {
			acj = 1.1 - Math.min(.01 * acb.length, .6) + .2 * acj;
			acg.style.fontSize = acj.toFixed(1) + "em"
		}, this.pz = function(eF) {
			eF ? 1 === eF ? eF = b7.aJg : 2 === eF && (ace = 1, eF = b7.aJg) : (ace = 0, eF = b7.a1s), this.aND = a6z = eF, acg.style.backgroundColor = eF
		}, self = this, acg.innerHTML = acb, acg.style.color = acf ? b7.l6 : b7.b9, acg.style.userSelect = "none", acg.style.outline = "none", acg.style.overflowWrap = "break-word", self.pz(a6z), acg.style.border = "none", acg.style.font = "inherit",
		self.a8r(0), acg.style.padding = "0em 0.3em", acg.onclick = ach, acg.addEventListener("mouseover", a3z), acg.addEventListener("mouseout", a40), acg.addEventListener("focus", a3z), acg.addEventListener("blur", aci)
}

function aHH() {
	this.acm = [], this.acn = [], this.e = function() {
		this.acm = [], this.acn = []
	}, this.bu = function() {
		0 <= this.acm.length && this.aco(this.acm), 0 <= this.acn.length && this.aco(this.acn)
	}, this.aco = function(a8) {
		for (var ku = -1, q = a8.length - 1; 0 <= q; q--)
			if (a8[q].fr--, a8[q].fr <= 0) {
				ku = q;
				break
			} for (q = ku; 0 <= q; q--) a8.shift()
	}, this.aGE = function(id, cQ, acp) {
		return this.aKk(this.acm, id, cQ, acp)
	}, this.aPG = function(id, cQ, acp) {
		return this.aKk(this.acn, id, cQ, acp)
	}, this.aKk = function(a8, id, cQ, acp) {
		return ! function(a8, id, cQ) {
			var q, h2;
			for (q = cQ.length - 1; 0 <= q; q--)
				for (h2 = a8.length - 1; 0 <= h2; h2--)
					if (a8[h2].player === cQ[q] && id === a8[h2].id) return 1;
			return
		}(a8, id, cQ) && (acp && function(a8, id, cQ) {
			var q;
			for (q = cQ.length - 1; 0 <= q; q--) a8.push({
				player: cQ[q],
				id: id,
				fr: 384
			})
		}(a8, id, cQ), !0)
	}
}

function acY() {
	var dY, dZ, da, ds;

	function de() {
		di(), 2 !== f.data.iIncomeType && (f.data.iIncomeData = null), dk.dl()[19] = null, dk.dm()
	}

	function di() {
		2 === f.data.iIncomeType && v.aN.dn(da.dp(), f.data.iIncomeData, 255)
	}
	this.show = function() {
		dY.show(), this.resize()
	}, this.eD = function() {
		dY.eD()
	}, this.resize = function() {
		dY.resize(), dZ.resize()
	}, this.eE = function(eF) {
		2 === eF && dY.eG[0].bL()
	}, dY = new dc(L(50), [new dd("⬅️ " + L(5), de)]), dZ = new df(dY.dg, (function(ds) {
		var dx = new dy;
		dx.dz(L(6)), dx.e1(new e2({
			e0: [L(48), L(41), L(9)],
			value: f.data.iIncomeType
		}, function(t) {
			di(), 2 !== t || f.data.iIncomeData || (f.data.iIncomeData = new Uint8Array(f.g), f.data.iIncomeData.fill(32)), f.data.iIncomeType = t, dk.e3(27)
		})), ds.push(dx)
	}(ds = []), function(ds) {
		var dx;
		1 === f.data.iIncomeType && ((dx = new dy).dz("Value"), dx.e4(new e7({
			t: -1,
			value: f.data.iIncomeValue
		}, 1, 0, function(e8) {
			var value = fD.ok(Math.floor(e8.target.value), 0, 255);
			e8.target.value = f.data.iIncomeValue = value
		})), ds.push(dx))
	}(ds), function(ds) {
		var dx;
		2 === f.data.iIncomeType && ((dx = new dy).dz("Data"), (da = new eA(0, 1, 0, 1)).eB(v.bB.eC(f.data.iIncomeData, 4)), dx.e4(da), ds.push(dx))
	}(ds), ds))
}

function a04() {
	function act() {
		var id = eM.eN(3);
		return 0 === id ? {
			id: id,
			ij: eM.eN(30),
			lE: la.a7R.aXf(bh.sD.eJ(7))
		} : 1 === id ? {
			id: id,
			ij: eM.eN(30),
			lG: eM.eN(3),
			value: eM.eN(30),
			target: eM.eN(30)
		} : 2 === id ? {
			id: id,
			ij: eM.eN(30),
			lG: eM.eN(3)
		} : 3 === id ? {
			id: id,
			ij: eM.eN(30),
			lG: eM.eN(3),
			value: eM.eN(4),
			target: eM.eN(30)
		} : 4 === id ? {
			id: id,
			ij: eM.eN(30),
			lG: eM.eN(3),
			target: eM.eN(30)
		} : 5 === id ? {
			id: id,
			lG: eM.eN(6)
		} : 6 === id ? {
			id: id,
			value: eM.eN(17)
		} : null
	}
	this.aP2 = function(s1) {
		if (s1 !== bZ.af.zH) bZ.af.close(s1, 3239);
		else if (6 !== dV.dW()) bZ.af.close(s1, 3271);
		else {
			la.e();
			for (var q = 0; q < 4; q++) {
				var aQa = la.af.lm[q],
					playerCount = (aQa.ns = eM.eN(10), aQa.m3 = eM.eN(6), aQa.mapSeed = eM.eN(14), aQa.a6U = eM.eN(4), aQa.a6V = eM.eN(6), aQa.a6W = eM.eN(14), aQa.a6X = eM.eN(4), aQa.a6Y = eM.eN(1), aQa.a6Z = eM.eN(12), aQa.spawningSeed = eM.eN(
						14), eM.eN(16));
				la.lb.y3[q] = eM.eN(16);
				for (var ca = 0; ca < playerCount; ca++) la.lb.y5(q, eM.eN(30), bh.sD.eJ(5), eM.eN(4), eM.eN(30), eM.eN(7), eM.eN(16), eM.eN(18), eM.eN(11), eM.eN(12), eM.eN(6))
			}
			dk.e3(29), la.af.aTJ(!0)
		}
	}, this.aP5 = function(s1) {
		if (s1 !== bZ.af.zH) bZ.af.close(s1, 3239);
		else if (la.zG) {
			la.af.aTI[0] = eM.eN(20), la.af.aTI[1] = eM.eN(20);
			for (var acs = eM.eN(16), ca = 0; ca < acs; ca++) {
				var id = eM.eN(3);
				0 === id ? la.lb.y5(eM.eN(2), eM.eN(30), bh.sD.eJ(5), 0, 1234566, 127, 0, eM.eN(18), 0, eM.eN(12), 0) : 1 === id ? la.lb.yR(eM.eN(16), eM.eN(2)) : 2 === id ? la.lb.yN(eM.eN(16), eM.eN(2), eM.eN(2)) : 3 === id ? la.lb.yQ(eM.eN(16),
					eM.eN(2)) : 4 === id ? la.lb.yF(eM.eN(16), eM.eN(2), eM.eN(4), eM.eN(30), eM.eN(7), eM.eN(16), eM.eN(11), eM.eN(18)) : 5 === id ? la.lb.yH(eM.eN(16), eM.eN(2), eM.eN(1)) : 6 === id && la.lb.yG(eM.eN(16), eM.eN(2), eM.eN(
					6))
			}
			for (var q = 0; q < 4; q++) {
				var aQa = la.af.lm[q];
				if (aQa.ns = eM.eN(10), aQa.a6V = eM.eN(6), aQa.a6W = eM.eN(14), aQa.a6X = eM.eN(4), 0 === aQa.ns) {
					if (aQa.a1J = eM.eN(10), aQa.a6a = eM.eN(10), la.a7S.wL(q)) return;
					aQa.m3 = eM.eN(6), aQa.mapSeed = eM.eN(14), aQa.a6U = eM.eN(4), aQa.a6Y = eM.eN(1), aQa.a6Z = eM.eN(12), aQa.spawningSeed = eM.eN(14), aQa.a6d.push(aQa.a6d[0]), aQa.a6d.shift()
				}
			}
			la.af.aTL()
		} else bZ.af.close(s1, 3251)
	}, this.aP6 = function(s1) {
		if (s1 !== bZ.af.zH) bZ.af.close(s1, 3272);
		else if (la.zG) {
			for (var lS = eM.eN(4), aQa = la.af.lm[lS], lo = aQa.lo, a42 = (aQa.a6b = eM.eN(20), eM.eN(6)), q = 0; q < a42; q++) {
				var aN0 = act();
				la.lq.aMz(aN0), lo.push(aN0)
			}
			la.af.aTR(lS)
		} else bZ.af.close(s1, 3273)
	}, this.aP7 = function(s1) {
		s1 !== bZ.af.zH ? bZ.af.close(s1, 3276) : la.zG ? la.message.a4s(act()) : bZ.af.close(s1, 3277)
	}
}

function a2L() {
	this.L84 = ["{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "second played", "seconds played", "Spawning", "Back", "Options", "Random", "Clustered", "Customized", "Manual Spawn",
		"Territory", "Income", "Growth", "Numbers", "Statistics", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.",
		"Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Propaganda", "Close {button}", "Report Abuse", "Lobby", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Player Count", "Game Mode", "Colors",
		"Bot Difficulty", "Uniform", "Mixed", "Team dependent", "Player Names", "Kingdom Names", "Simple Names", "Additional Income", "Default", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario",
		"Open File...", "Save As File...", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Avg. Attack Strength", "Land Attacks", "Ships launched",
		"Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses",
		"Mountain Attacks", "Ships landed", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!", "{0} called the peace vote.", "{0} voted for peace.",
		"{0} rejected peace.", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Incoming Boat!", "Incoming Ship!", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan",
		"White", "Black", "{0} defeated {1}!", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "You earned {10} gold!", "{0} earned {11} gold!",
		"▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "Loading", "Selectable Name", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:",
		"and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Login", "➡️ Login", "Account Name",
		"Password", "Show", "Hide", "Security Tip", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "Players",
		"Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index",
		"Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "LEADERBOARD",
		"You are leaving Territorial.io.", "📜 Game Log", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "Adjust", "My Color", "Quit Game", "More", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview",
		"🔑 My Account", "📜 Logs", "📈 Clan Charts", "📰 Propaganda", "⚔️ Join Lobby 2", "⚙️ Settings", "Account Recovery", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu",
		"📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "White Arena", "Black Arena", "Island",
		"Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2",
		"World 2", "British Isles", "Replay Error", "Warning", "Loading...", "Humans", "Bots", "Spectators", "Threshold", "Time", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "Team",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Clan Chart", "Team {0}", "Team {0} won the game!", "Refresh", "Public Profile",
		"🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ",
		"Gold Transfer", "Copy", "Search", "Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier",
		"Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified",
		"🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Contest", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Type your message here...", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct",
		"Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Multiplayer", "My Account",
		"Game Menu", "Your Kingdom's Name", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "1v1", "Zombie",
		"Chat", "Ready", "Next Game", "You are leaving Territorial.io!", "Ship launched!", "Ship intercepted!", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "Activated", "Request Email"
	]
}

function aOg() {
	function acw(player) {
		for (var m4 = cD.m4[player], n = m4.length, aJa = Math.max(fD.fE(n, 12), 1), gy = a6.gy, hh = jX.tI(n), q = 0; q < n; q += aJa)
			for (var ax = m4[(q + hh) % n], f6 = 3; 0 <= f6; f6--) {
				var aV = ax + gy[f6];
				if (a6.gP(aV)) return {
					a3: aV,
					id: a6.vQ(aV),
					c9: player
				}
			}
		return null
	}

	function ad1(player, ad2) {
		var aW = v.c2.aEc(player, jn.acF[jn.aW[player]]);
		cD.m6[player].push(ad2.a3), gb.uG(player, aW, ad2.c9), k1.uH(player, !0)
	}
	this.bu = function(player) {
		return !!au.m2(au.m3) && !!f.data.passableMountains && 0 !== cD.m4[player].length && function(player) {
			var acv = acw(player);
			if (null === acv) return !1;
			! function(player) {
				for (var cK = cH.cK, cI = cH.cI, n = Math.min(cI, 12), hF = jX.tI(cI), ea = a9.ea, m4 = cD.m4, hd = 0, q = 0; q < n; q++) {
					var c9 = cK[(q + hF) % cI];
					c9 !== player && m4[c9].length && gY.gf(player, c9) && (ea[hd++] = c9)
				}
				a9.eR[0] = hd
			}(player);
			var acy = function(aKc) {
				for (var n = a9.eR[0], ea = a9.ea, q = 0; q < n; q++) {
					var ad2 = acw(ea[q]);
					if (null !== ad2 && ad2.id === aKc) return ad2
				}
				return null
			}(acv.id);
			return null !== acy ? (ad1(player, acy), !0) : function(player, aKc) {
				var n = cU.cV.cW;
				if (0 !== n)
					for (var a3 = cU.cV.buffer[jX.tI(n)] << 2, gy = a6.gy, f6 = jX.tI(4);;) {
						if (a3 += gy[f6], a6.gP(a3)) {
							if (a6.vQ(a3) === aKc) return ad1(player, {
								a3: a3,
								c9: f.g
							}), !0;
							break
						}
						if (!a6.cT(a3)) break
					}
				return !1
			}(player, acv.id)
		}(player)
	}
}

function aHZ(e0) {
	this.s1 = -1, this.pow = -1;
	var aQN = e0 || {},
		ad3 = this,
		ad4 = null,
		ad5 = null,
		ad6 = null,
		ad7 = null,
		ad8 = null,
		ad9 = [],
		adA = 0,
		adB = null,
		adC = null,
		adD = null,
		adE = !1,
		adF = null,
		adI = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function adJ(adK, kl, className) {
		adK = document.createElement(adK);
		return className && (adK.className = className), kl && kl.appendChild(adK), adK
	}

	function adL(ht, kl, action) {
		kl = adJ("button", kl);
		return kl.type = "button", kl.textContent = ht, kl.addEventListener("click", action), kl
	}

	function adM(kl) {
		kl = adJ("canvas", kl);
		return kl.width = kl.height = 128, kl
	}

	function abt(canvas, adR) {
		for (var canvas = canvas.getContext("2d"), data = (adC || (adC = canvas.createImageData(128, 128), adD = new Uint32Array(adC.data.buffer)), adR), adO = adD, adP = 0, position = 0, color = 0; position < 16384; adP += 6, color ^= 1) {
			for (var t = adP >> 3, bQ = position + ((data[t] << 8 | data[1 + t]) >> 10 - (7 & adP) & 63), a67 = color ? adI : 4294967295, q = position; q < bQ; q++) adO[q] = a67;
			position = bQ
		}
		canvas.putImageData(adC, 0, 0)
	}

	function adS() {
		if (ad4) {
			ad4.setAttribute("aria-busy", String(adE)), ad8.disabled = adE, ad7.disabled = adE || !adA;
			for (var q = 0; q < ad9.length; q++) ad9[q].disabled = adE, ad9[q].setAttribute("aria-pressed", String(Boolean(adA & 1 << q)))
		}
	}

	function adU(event) {
		var adV, a71;
		"Escape" === event.key && (event.preventDefault(), ad3.close()), "Tab" === event.key && ad4 && (adV = (a71 = ad4.querySelectorAll("button:not(:disabled)"))[0], a71 = a71[a71.length - 1], event.shiftKey && document.activeElement === adV ? (
			event.preventDefault(), a71.focus()) : event.shiftKey || document.activeElement !== a71 || (event.preventDefault(), adV.focus()))
	}

	function adX() {
		adF = document.activeElement, (ad4 = adJ("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), ad4.setAttribute("aria-modal", "true"), ad4.setAttribute("aria-label", "Select all images matching the reference");
		adJ("style", ad4).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var adY = adJ("div", ad4, "captcha-reference-row");
		adJ("span", adY, "captcha-reference-label").textContent = "Find All:", (ad6 = adM(adY)).className = "captcha-reference", ad6.setAttribute("aria-label", "Reference image"), ad5 = adJ("div", ad4, "captcha-grid");
		for (var q = 0; q < 16; q++) ad9.push(function(t) {
			var button = adL("", ad5, function() {
				adE || (adA ^= 1 << t, adS())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (t + 1)), button.setAttribute("aria-pressed", "false"), adM(button).setAttribute("aria-hidden", "true"), button
		}(q));
		var adY = adJ("div", ad4, "captcha-actions"),
			adb = adL("Close", adY, function() {
				ad3.close()
			});
		ad8 = adL("Reload", adY, adc), ad7 = adL("Verify", adY, add), ad4.addEventListener("keydown", adU), ad3.resize(), adS(), adb.focus()
	}

	function adc() {
		adE || (ad3.close(), bZ.be.aOY(0, 0, aFR.s1, aFR.pow))
	}

	function add() {
		var aOZ, aKw;
		!adE && adA && (aOZ = adA, aKw = adB, ad3.close(), bZ.be.aOY(aOZ, aKw, aFR.s1, aFR.pow))
	}
	this.show = function(ade, aKw, s1, pow) {
		this.s1 = s1, this.pow = pow, adB = aKw, ad4 || adX(), abt(ad6, ade[0]);
		for (var h2 = 0; h2 < 16; h2++) abt(ad9[h2].firstChild, ade[h2 + 1]);
		adA = 0, adE = !1, adS(), "function" == typeof aQN.adf && aQN.adf()
	}, this.resize = function() {
		var size;
		ad4 && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), ad4.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (ad4) {
			for (var adg = ad4.querySelectorAll("canvas"), q = 0; q < adg.length; q++) adg[q].width = adg[q].height = 0;
			ad4.remove(), ad4 = ad5 = ad6 = ad7 = ad8 = null, adC = adD = adB = null, adA = 0, adE = !(ad9 = []), adF && document.body.contains(adF) && adF.focus(), adF = null, "function" == typeof aQN.adh && aQN.adh()
		}
	}
}

function a27() {
	var ap, ar, adi;

	function adt(gT, f6, adr, adl, a0) {
		f6 = ads(gT, f6 + 1 + 2 * adl & 3);
		! function(gT, wF) {
			return 1 < Math.abs(gT % ap - wF % ap) || 1 < Math.abs(adv(gT) - adv(wF))
		}(gT, f6) && 0 === a0[f6 << 2] && (a0[f6 << 2] = adr)
	}

	function adv(c9) {
		return Math.floor((c9 + .5) / ap) % ar
	}

	function ads(c9, f6) {
		return c9 + adi[f6]
	}
	this.eJ = function(bJ) {
		var q, aDV, n, adj, eL = eM;
		for (bh.bi.p6(bh.bi.p4(bJ)), au.zY.zZ[au.m3].ap = au.av = ap = eL.eN(12), au.zY.zZ[au.m3].ar = au.ef = ar = eL.eN(12), adi = [-ap, -1, ap, 1], au.oP = document.createElement("canvas"), au.oP.width = au.av, au.oP.height = au.ef, au.sn = au
			.oP.getContext("2d", {
				alpha: !1
			}), au.zn = au.mi = null, au.zn = au.sn.getImageData(0, 0, au.av, au.ef), au.mi = au.zn.data, v.aN.qO(au.mi), n = eL.eN(12), aDV = eL.eN(5), adj = a61(ap * ar - 1), q = 0; q < n; q++) ! function(aL, c9, adk, adl) {
			var q, f6, eL = eM,
				a0 = au.mi,
				a7i = c9,
				ado = c9,
				adp = 0,
				adq = 1 + adk,
				adr = 2 - adk;
			for (a0[c9 << 2] = adq, q = 0; q < aL; q++) f6 = eL.eN(2), c9 = ads(c9, f6), a0[c9 << 2] === adq ? adp % 2 == 1 && adt(ado, adp + 2 * adl + 3, adr, adl, a0) : a0[c9 << 2] = adq, adt(c9, f6, adr, adl, a0), adt(ado, f6, adr, adl,
				a0), ado = c9, adp = f6;
			ads(c9, 0) === a7i ? (adt(c9, 0, adr, adl, a0), adt(a7i, 0, adr, adl, a0)) : ads(c9, 1) === a7i && (adt(c9, 0, adr, adl, a0), adt(a7i, 2, adr, adl, a0));
			0 === aL && (adt(a7i, 0, adr, adl, a0), adt(a7i, 2, adr, adl, a0))
		}(eL.eN(aDV), eL.eN(adj), 1 === eL.eN(1), 1 === eL.eN(1));
		var aD, aE, h2, adw, adx, ady, a0 = au.mi,
			adz = !0,
			za = au.zY.zZ[au.m3].za,
			zb = au.zY.zZ[au.m3].zb;
		for (aE = 0; aE < ar; aE++)
			for (adw = !0, adx = adz, aD = ady = 0; aD < ap; aD++) h2 = 4 * aE * ap + 4 * aD, ady <= aD && 0 < a0[h2] && (adx = 2 === a0[h2], adw) && (adw = !1, adx !== adz) ? (adz = adx, ady = aD + 1, aD = -1) : (adx ? (a0[h2] = zb[0], a0[1 +
				h2] = zb[1], a0[2 + h2] = zb[2]) : (a0[h2] = za[0], a0[1 + h2] = za[1], a0[2 + h2] = za[2]), a0[3 + h2] = 255);
		au.sn.putImageData(au.zn, 0, 0), au.a0d = !0, au.ze.e(), c0.d1 = !0
	}
}

function acZ() {
	var iP, iQ, ds;
	this.show = function() {
		iP.show(), this.resize()
	}, this.eD = function() {
		iP.eD()
	}, this.resize = function() {
		iP.resize(), iQ.resize()
	}, this.eE = function(eF) {
		2 === eF && iP.eG[0].bL()
	}, iP = new dc("🔒 " + L(214), [new dd("⬅️ " + L(5), function() {
		dk.dm()
	})]), iQ = new df(iP.dg, ((ds = []).push(function() {
		var dx = new dy,
			ia = (dx.op(bZ.af.iE("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", dx.dz(L(134)), new e7({
				value: "",
				t: -1
			})),
			aVH = (dx.e4(ia), dx.dz(L(376), "0.8em"), new e7({
				value: "",
				t: -1
			}, 0, 0)),
			py = (aVH.e8.type = "email", aVH.e8.autocomplete = "email", aVH.e8.name = "email", aVH.e8.inputMode = "email", aVH.e8.spellcheck = !1, dx.e4(aVH), new dd(L(549), function(e8) {
				return v.w.kr(e8), bZ.q0.s4({
					action: 4,
					bJ: ia.e8.value.trim() + aVH.e8.value.trim().substring(0, 63)
				}), !0
			}));
		return dx.e4(new e9([py.button])), dx
	}()), ds))
}

function jU() {
	this.uG = function(player, a2) {
		jo.aZu(player, cX.cY(a2), cX.cZ(a2)) && (c0.d1 = !0), f.j5 && this.bu()
	}, this.bu = function() {
		f.gI = !1;
		for (var q = 0; q < f.iy; q++) 0 !== cD.ft[q] && 0 === cD.fh[q] && jo.aZx(q);
		0 !== cD.ft[f.al] ? (fI.fg[7] = cD.fh[f.al], fI.fg[8] = cD.mY[f.al], g5.aIY(), fv.aSH(), f.g1 || kB.aX2(cD.sS[f.al] - 5, cD.sT[f.al] - 5, cD.sU[f.al] + 5, cD.sV[f.al] + 5), kA.e()) : k0.show(!1, !1, !1, !0), c5.rI(18), k4.aBp(), k4.kD(!
			0), js.af.aL2(), jz.eD(), f.jC = null, jj.xE = !0, jj.xH(), f.j5 && cu.cv.setState(1)
	}
}

function aHI() {
	var kT = 0,
		ae1 = 0,
		ae2 = 0,
		ae3 = 0,
		aCT = -1;

	function ae6(a3) {
		if (aCT === a3) return !1;
		if (-1 === (aCT = a3)) kT = 0, c5.aXK(kT, 0);
		else {
			if (a6.h3(a3)) return ae2 = a6.gU(a3), aR6 = cD.mY[ae2] - cD.sc[ae2], (4 !== kT || aR6 !== ae1) && (kT = 4, ae1 = aR6, c5.aXK(kT, aR6), !0);
			if (a6.cT(a3)) return 3 !== kT && (kT = 3, c5.aXK(kT, 0), !0);
			if (a6.gP(a3)) return 2 !== kT && (kT = 2, c5.aXK(kT, 0), !0);
			var aR6 = ae.td.vg(nm.cm, nm.fy);
			if (-1 === aR6) return 1 !== kT && (kT = 1, c5.aXK(kT, 0), !0);
			a3 = ae.af.ah[aR6];
			if (ae2 = ae.af.vc[aR6], ae3 = ae.af.ag[aR6] >> 3, 5 === kT && a3 === ae1) return !1;
			kT = 5, ae1 = a3, c5.aXK(kT, a3)
		}
		return !0
	}
	this.e = function() {
		ae3 = ae2 = ae1 = kT = 0, aCT = -1
	}, this.bu = function(x5) {
		var gA;
		!x5 && nm.nn() || (x5 = cX.g9(nm.cm), gA = cX.gB(nm.fy), cX.gD(x5, gA) ? (x5 = cX.gC(x5, gA), ae6(cX.gO(x5))) : ae6(-1))
	}, this.aRE = function() {
		var ae7, aR6, aGM, aaV;
		if (0 !== kT && 2 !== kT)
			if (nm.nn()) {
				if (1 !== kT && 3 !== kT) {
					if (4 === kT) return void(aR6 = cD.mY[ae2] - cD.sc[ae2], ae1 === aR6 || (ae1 = aR6, c5.aXK(kT, aR6)));
					(aGM = ae.td.vb(ae3, ae2)) < 0 ? (kT = 1, c5.aXK(kT, 0)) : (aaV = ae.af.ah[aGM]) !== ae1 && (ae1 = aaV, c5.aXK(kT, aaV))
				}
			} else if (1 === kT) - 1 !== (aGM = ae.td.vg(nm.cm, nm.fy)) && (kT = 5, ae1 = ae.af.ah[aGM], c5.aXK(kT, ae1));
		else if (3 === kT) a6.h3(aCT) && (kT = 4, ae7 = a6.gU(aCT), ae1 = cD.mY[ae7] - cD.sc[ae7], c5.aXK(kT, ae1));
		else if (4 === kT) {
			if (a6.h3(aCT)) return void(ae7 = a6.gU(aCT), aR6 = cD.mY[ae7] - cD.sc[ae7], ae1 === aR6 || (ae1 = aR6, c5.aXK(kT, aR6)));
			kT = 3, c5.aXK(kT, 0)
		} else - 1 === (aGM = ae.td.vg(nm.cm, nm.fy)) ? (kT = 1, c5.aXK(kT, 0)) : (aaV = ae.af.ah[aGM]) !== ae1 && (ae1 = aaV, c5.aXK(kT, aaV))
	}
}

function aMG() {
	this.f0 = !1;
	this.aCK = [], this.aDv = 100;
	var az, b1, gap, u, ae8, aeA, aeB = 0,
		aeC = new Array(9),
		aeD = [],
		aeE = [],
		aeF = 0,
		aeG = 0,
		aeH = 0,
		aeI = 0;

	function aeN() {
		aeC.sort(function(ca, ku) {
			return ku.aYS - ca.aYS
		});
		for (var bJ = "" + aeC[0].o8, q = 1; q < 9; q++) bJ += "," + aeC[q].o8;
		for (q = 0; q < 9; q++) bJ += "," + aeC[q].aYS;
		bK.buffer.bI(120, bJ)
	}
	this.e = function() {
		for (var aeJ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], q = 0; q < aeJ.length; q++) {
			var color = 6 === aeJ[q] ? b7.aG3 : b7.aG5;
			this.aCK.push(v.canvas.r0(r1.get(3), aeJ[q], color))
		}
		for (q = 0; q < tL.lq.a9V; q++) aeE.push(tL.lq.a9X - tL.lq.a9V + q);
		for (q = 0; q < tL.lq.a9W; q++) aeE.push(tL.lq.tM + q);
		var aC9 = tL.lq.a9c(aBK.aC9);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = aC9.slice(), q = 0; q < aC9.length; q++) aeE.push(aC9[q]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					aeC[q] = {
						o8: isNaN(qcode) ? 1015 + q : qcode,
						aYS: 0
					}
				} else {
					var a8 = bK.buffer.data[120].value.split(",");
					if (18 !== a8.length)
						for (q = 0; q < 9; q++) aeC[q] = {
							o8: 1015 + q,
							aYS: 0
						};
					else
						for (q = 0; q < 9; q++) {
							var ff = parseInt(a8[q]),
								eF = (ff = 0 <= ff && ff < tL.lq.a9X ? ff : 0, parseInt(a8[q + 9]));
							eF = 0 <= eF && eF < 1e3 ? eF : 0, aeC[q] = {
								o8: ff,
								aYS: eF
							}
						}
				}
		}()
	}, this.show = function(f9, fA, aaa) {
		var q;
		if (aeF = f9, aeG = fA, aeB = aaa || 0, this.f0 = !0, aeD = [], 0 === aeB)
			for (q = 0; q < 9; q++) aeD.push(aeC[q].o8);
		else {
			var ku = 49 * aeB,
				aaa = ku - 49;
			for (aaa >= aeE.length && (aeB = 1, aaa = 0, ku = 49), q = aaa = (ku = Math.min(ku, aeE.length)) - 49; q < ku; q++) aeD.push(aeE[q])
		}
		aeD.push(1024);
		aaa = aeD.length, u = Math.floor((cu.cv.cw() ? .075 : .0468) * ao.cx), gap = Math.floor(u / 3), (aeH = 10 * (ae8 = u + gap)) > ao.ap && (aeH = ao.ap, gap = (ae8 = aeH / 10) - (u = 3 * ae8 / 4)), aeA = fD.fE(aaa, 10) + !!(aaa % 10), (aeI =
			aeA * ae8) > ao.ar && (aeI = ao.ar, gap = (ae8 = aeI / aeA) - (u = 3 * ae8 / 4)), aaa = .5 * gap;
		az = Math.min(Math.max(f9 - .5 * aeH + aaa, aaa), ao.ap - aeH + aaa), b1 = Math.min(Math.max(fA - .5 * aeI + aaa, aaa), ao.ar - aeI + aaa)
	}, this.dD = function(f9, fA, player) {
		if (!this.f0) return !1;
		if (this.aAo(f9, fA)) {
			f9 = fD.ok(fD.fE(f9 - az + .5 * gap, ae8), 0, 9);
			if ((f9 += 10 * fD.ok(fD.fE(fA - b1 + .5 * gap, ae8), 0, 9)) >= aeD.length) return jz.eD(), !0;
			fA = aeD[f9];
			if (1024 === fA) return this.show(aeF, aeG, aeB + 1), !0;
			! function(o8) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var q = 0; q < 9; q++) aeC[q].aYS = Math.floor(.99 * aeC[q].aYS);
					for (q = 0; q < 9; q++)
						if (o8 === aeC[q].o8) return aeC[q].aYS = Math.min(aeC[q].aYS + 30, 999), aeN();
					aeC.splice(5, 0, {
						o8: o8,
						aYS: Math.max(aeC[4].aYS, 30)
					}), aeC.pop(), aeN()
				}
			}(fA), player === f.al ? gL.gM.o9(fA) : gL.c2.o7(fA, player)
		}
		return jz.eD(), !0
	}, this.aAo = function(f9, fA) {
		return !(f9 < az - .5 * gap || fA < b1 - .5 * gap || az + aeH - .5 * gap <= f9 || b1 + aeI - .5 * gap <= fA)
	}, this.aR = function() {
		b5.fillStyle = b7.cF, b5.fillRect(az - .5 * gap, b1 - .5 * gap, aeH, aeI);
		for (var h2 = .5 * f7.a7I, n = (b5.lineWidth = f7.a7I, b5.strokeStyle = b5.fillStyle = b7.b9, b5.strokeRect(az - .5 * gap + h2, b1 - .5 * gap + h2, aeH - 2 * h2, aeI - 2 * h2), b5.imageSmoothingEnabled = !0, aeD.length), q = 0; q <
			n; q++) this.aG8(aeD[q], b5, az + q % 10 * ae8, b1 + fD.fE(q, 10) * ae8, u);
		b5.imageSmoothingEnabled = !1
	}, this.aG8 = function(o8, y, aD, aE, u) {
		var a3;
		o8 >= 1024 - tL.lq.a9V ? (a3 = u / this.aDv, y.setTransform(a3, 0, 0, a3, aD, aE), y.drawImage(this.aCK[o8 - 1024 + tL.lq.a9V], 0, 0), y.setTransform(1, 0, 0, 1, 0, 0)) : (v.w.textAlign(y, 1), v.w.textBaseline(y, 1), y.font = v.w.bA(0,
			.89 * u), y.fillText(tL.lq.a9b(o8), aD + .5 * u, aE + (.35 - v.w.aDn + .56) * u))
	}
}

function aGo() {
	var a0k, aeP, aeQ, a0j, aeR, aeS, aeT, aeU, aeV, aeW, aeX, ox, aeY, aeZ = !1,
		aea = !1;

	function aeb(aWq) {
		ox = c0.fr, aeQ = a0j = aeP = 0, aeR = (aeY = 33) / aWq, a0k = 1 / (aWq / aeY / 4), aeS = (ao.ap / 2 + b0) / ay, aeT = (ao.ar / 2 + b2) / ay, aeU = ay
	}

	function aec(q) {
		var az; - 1 !== q && (q = cX.tp(ae.af.ad[q]), az = cX.cY(q) - 15, q = cX.cZ(q) - 15, kB.aX2(az, q, 29 + az, 29 + q))
	}

	function aeh(aaw) {
		Math.abs(Math.log(aeX / aeU)) < .125 && (aeX = aaw * aeU)
	}

	function aeg(az, b1, b3, b4) {
		aeV = (az + b3 + 1) / 2, aeW = (b1 + b4 + 1) / 2;
		b3 = ao.ap / (b3 - az + 1), az = ao.ar / (b4 - b1 + 1);
		aeX = .9 * (b3 < az ? b3 : az)
	}
	this.zf = function() {
		return aeZ
	}, this.kC = function() {
		aeb(1), this.aX2(0, 0, au.av - 1, au.ef - 1), f.gI || f.g1 || this.aAt(f.al, 3e3, !0, .3)
	}, this.aX3 = function(player, tv) {
		aec(ae.td.vb(player, tv))
	}, this.aAt = function(player, aWq, aed, zoom) {
		f.hT || aeZ && !aed && aea || (0 === cD.fh[player] ? aec(ae.td.vf(player)) : (jx.a1S = !1, aea = aed, aeb(aWq), function(player) {
			aeV = (cD.sS[player] + cD.sU[player] + 1) / 2, aeW = (cD.sT[player] + cD.sV[player] + 1) / 2
		}(player), function(zoom, player) {
			var aF = cD.sU[player] - cD.sS[player] + 1,
				player = cD.sV[player] - cD.sT[player] + 1,
				ca = ao.ap / aF,
				ku = ao.ar / player,
				ca = (aeX = ca < ku ? ca : ku, 0 !== zoom ? zoom : aF < 20 && player < 20 ? .5 : .9);
			aeX *= ca, aeh(7 / 8)
		}(zoom, player), aeZ = !0, a1b.aYl()))
	}, this.aUY = function(aWq) {
		f.g1 || f.hT || (jx.a1S = !1, aea = !1, aeb(aWq), aeg(0, 0, au.av - 1, au.ef - 1), aeh(7 / 8), aeZ = !0, a1b.aYl())
	}, this.aX2 = function(az, b1, b3, b4) {
		aeZ = !1, aeg(az, b1, b3, b4), ay = aeX, jx.a8I(aeV, ao.ap / 2), jx.a8J(aeW, ao.ar / 2), xG.pJ(), c0.d1 = !0
	}, this.bQ = function() {
		return !(aeZ && aea || (aeZ = !1))
	}, this.bu = function() {
		var aej, aek, f6, aen;
		aeZ && (aeP < .5 ? a0j < aeR && (a0j += aeR * a0k, aeQ = aeP) : 1 - aeQ < aeP && (a0j = (a0j -= aeR * a0k) < aeR * a0k ? aeR * a0k : a0j), ox = ox >= c0.fr ? c0.fr - 1 : ox, f6 = c0.fr - ox, aeP = 1e3 < f6 || 1 < (aeP += a0j * f6 / aeY) ?
			1 : aeP, ox = c0.fr, f6 = ay, aej = b0, aek = b2, f6 = (ay = aeU * Math.pow(aeX / aeU, aeP)) / f6, aen = 1 - (aeU * Math.pow(aeX / aeU, 1 - aeP) - aeU) / (aeX - aeU), jx.a8I(aeS + aen * (aeV - aeS), ao.ap / 2), jx.a8J(aeT + aen *
				(aeW - aeT), ao.ar / 2), k4.zoom(f6, (aej * f6 - b0) / (1 - f6), (aek * f6 - b2) / (1 - f6)), xG.pJ(), 1 <= aeP && (aeZ = !1, jj.xD = !0), c0.d1 = !0)
	}
}
n6(), self.aiCommand746 = function(ff) {
	0 === ff ? aFl() : 1 !== ff || !cu || 1 !== cu.id || cu.bM < 14 || nm.a1f()
}, setTimeout(aFl, 1e4), window.onload = function() {
	aFl()
};