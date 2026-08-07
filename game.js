var ay, b0, b2, gc, f, gv, eE, hB, eS, gx, gy, a5T, eO, e2, eo, oG, h9, ba, h5, eZ, vw, h7, h4, h8, hA, a5U, oH, bi, iQ, a6, dC, dV, du, ci, a5V, gg, iX, wd, ez, e8, dT, dH, gp, rw, xg, gs, xQ, hJ, dy, oI, ao, ge, gZ, bg, hF, a5W, wg, hD, hE, q1, hG,
	hH, sR, gi, d0, v, b7, h6, ln, pm, lz, c1, bo, a5X, r9, a0O, ds, cq, ae, a9, h0, e4, gX, au, xV, c4, hU, gt, a5Y, xf, a5Z, a5a, fq, gr, fx, dL, h1, bR, l, f5, bL, a5O, fa, a5b, pM, dd, a5c, bk, sO, a5d, gY, a5e, a4S, a9y, f7, f4, a37, vD, h2, h3,
	xB, b5, aKw, a21, aKx, aLB, aL9, a2G, a1z, aYZ, a20, aYa, aYb, aYc, aKu, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "1em", "span",
		"email", "Data", " / ", "territorial.io", "0.5em", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined", "middle", "break-word", "50%",
		"0.6em", "underline", "text", "scroll", "pointer", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave", "inline-block",
		"game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "⚠️ ", "wheel",
		"translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Reload",
		"Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute",
		"1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160",
		" -> ", "   Contest"
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
	var bI, bJ, bE = "",
		bF = 0,
		bG = 0,
		bH = -1,
		bK = ["Team", "Zombie", "BR", "1v1"];

	function bP() {
		for (var bT = new Date, bU = bT.getUTCMinutes(), bT = bT.getUTCSeconds(), bW = [], bX = 0, q = 0; q < 6; q++) bW.push(bX), bW.push(bX + 2), bW.push(bX + 5), bW.push(bX + 7), bX += 10;
		for (var n = bW.length, q = 1; q < n && !(bU < bW[q]); q++);
		q %= n;
		bT = (bW[0] = 60) * (bW[q] - bU) - bT;
		return bT !== bH && (bE = bK[q % 4] + " " + bJ + ": " + bZ(Math.floor(bT / 60)) + ":" + bZ(bT % 60), bH = bT, bF = ba.measureText(bE, bI), bF += Math.floor(.4 * bG), 1)
	}

	function bZ(bb) {
		return bb < 10 ? "0" + bb : String(bb)
	}
	this.e = function() {
		bJ = L(0)
	}, this.resize = function() {
		bF = Math.floor((bL.bM.bN() ? .53 : .36) * ao.bO), bG = Math.floor(.065 * bF), bI = v.w.bA(1, Math.floor(.9 * bG)), bH += 1e3, bP()
	}, this.bQ = function() {
		bP() && (bR.bS = !0)
	}, this.aR = function(aE) {
		b5.lineWidth = 1 + Math.floor(bG / 15), b5.translate(ao.ap - bG, aE + bF), b5.rotate(-Math.PI / 2), b5.fillStyle = b7.b9, b5.fillRect(0, 0, bF, bG), b5.strokeStyle = b7.bc, b5.strokeRect(0, 0, bF, bG + 10), b5.fillStyle = b7.bc, b5.font =
			bI, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.fillText(bE, Math.floor(bF / 2), Math.floor(.59 * bG)), b5.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function bd() {
	function cS() {
		var id = bo.bp(3);
		return 0 === id ? {
			id: id,
			cW: bo.bp(30),
			cX: bk.cY.cZ(c1.c2.c3(7))
		} : 1 === id ? {
			id: id,
			cW: bo.bp(30),
			ca: bo.bp(3),
			value: bo.bp(30),
			target: bo.bp(30)
		} : 2 === id ? {
			id: id,
			cW: bo.bp(30),
			ca: bo.bp(3)
		} : 3 === id ? {
			id: id,
			cW: bo.bp(30),
			ca: bo.bp(3),
			value: bo.bp(4),
			target: bo.bp(30)
		} : 4 === id ? {
			id: id,
			cW: bo.bp(30),
			ca: bo.bp(3),
			target: bo.bp(30)
		} : 5 === id ? {
			id: id,
			ca: bo.bp(6)
		} : 6 === id ? {
			id: id,
			value: bo.bp(17)
		} : null
	}
	this.be = function(bf) {
		if (bf !== bg.af.bh) bg.af.close(bf, 3239);
		else if (6 !== bi.bj()) bg.af.close(bf, 3271);
		else {
			bk.e();
			for (var q = 0; q < 4; q++) {
				var bl = bk.af.bm[q],
					playerCount = (bl.bn = bo.bp(10), bl.bq = bo.bp(6), bl.mapSeed = bo.bp(14), bl.br = bo.bp(4), bl.bs = bo.bp(6), bl.bt = bo.bp(14), bl.bu = bo.bp(4), bl.bv = bo.bp(1), bl.bw = bo.bp(12), bl.spawningSeed = bo.bp(14), bo.bp(16));
				bk.bx.by[q] = bo.bp(16);
				for (var bz = 0; bz < playerCount; bz++) bk.bx.c0(q, bo.bp(30), c1.c2.c3(5), bo.bp(4), bo.bp(30), bo.bp(7), bo.bp(16), bo.bp(18), bo.bp(11), bo.bp(12))
			}
			c4.c5(29), bk.af.c6(!0)
		}
	}, this.c7 = function(bf) {
		if (bf !== bg.af.bh) bg.af.close(bf, 3239);
		else if (bk.c8) {
			bk.af.c9[0] = bo.bp(20), bk.af.c9[1] = bo.bp(20);
			for (var cA = bo.bp(16), bz = 0; bz < cA; bz++) {
				var id = bo.bp(3);
				0 === id ? bk.bx.c0(bo.bp(2), bo.bp(30), c1.c2.c3(5), 0, 1234566, 127, 0, bo.bp(18), 0, bo.bp(12)) : 1 === id ? bk.bx.cB(bo.bp(16), bo.bp(2)) : 2 === id ? bk.bx.cC(bo.bp(16), bo.bp(2), bo.bp(2)) : 3 === id ? bk.bx.cD(bo.bp(16), bo
					.bp(2)) : 4 === id ? bk.bx.cE(bo.bp(16), bo.bp(2), bo.bp(4), bo.bp(30), bo.bp(7), bo.bp(16), bo.bp(11), bo.bp(18)) : 5 === id && bk.bx.cF(bo.bp(16), bo.bp(2), bo.bp(1))
			}
			for (var q = 0; q < 4; q++) {
				var bl = bk.af.bm[q];
				if (bl.bn = bo.bp(10), bl.bs = bo.bp(6), bl.bt = bo.bp(14), bl.bu = bo.bp(4), 0 === bl.bn) {
					if (bl.cG = bo.bp(10), bl.cH = bo.bp(10), bk.cI.cJ(q)) return;
					bl.bq = bo.bp(6), bl.mapSeed = bo.bp(14), bl.br = bo.bp(4), bl.bv = bo.bp(1), bl.bw = bo.bp(12), bl.spawningSeed = bo.bp(14), bl.cK.push(bl.cK[0]), bl.cK.shift()
				}
			}
			bk.af.cL()
		} else bg.af.close(bf, 3251)
	}, this.cM = function(bf) {
		if (bf !== bg.af.bh) bg.af.close(bf, 3272);
		else if (bk.c8) {
			for (var cN = bo.bp(4), bl = bk.af.bm[cN], cO = bl.cO, cQ = (bl.cP = bo.bp(20), bo.bp(6)), q = 0; q < cQ; q++) {
				var cR = cS();
				bk.cT.cU(cR), cO.push(cR)
			}
			bk.af.cV(cN)
		} else bg.af.close(bf, 3273)
	}, this.cb = function(bf) {
		bf !== bg.af.bh ? bg.af.close(bf, 3276) : bk.c8 ? bk.message.cc(cS()) : bg.af.close(bf, 3277)
	}
}

function cd() {
	this.ce = function(player) {
		return !!f.data.passableWater && ae.af.am !== ae.af.cf && ae.af.cg[player] !== ae.af.ch && 0 !== ci.cj[player].length
	}, this.ck = function(cl) {
		var cm = a9.cn[1];
		return !(4 <= cm || !ae.co.cp(cq.cr(cl))) && a6.cs(cq.cr(cq.ct(cl, cm)))
	}
}

function cu() {
	this.cv = function(player, a2) {
		v.cw.cx(0) && v.cw.cy(player) && cq.cz(a2) && (d0.d1.d2(0, player, a2), f.d3.d4(player, a2))
	}, this.d5 = function(player, d6, d7) {
		v.cw.cx(1) && v.cw.cy(player) && v.cw.d8(player, d7) && v.cw.d9(player, d6, 12, 0) && v.cw.dA(player, d7) && ((d7 = dC.dD(player, a9.dE[0])) || dC.dF(player)) && (ci.dG[player]++, d0.d1.d2(1, player, d6, a9.dE[0]), dH.dI.dJ(player,
			d7)) && (v.cw.dK(player), dL.dM(player, d6), dH.dI.dN(player))
	}, this.dO = function(player, d6, dP) {
		v.cw.cx(1) && v.cw.cy(player) && f.j && v.cw.d8(player, dP) && v.cw.dQ(player, dP) && v.cw.dR(player, v.cw.dS(player, d6), dP) && dT.d4(dP, a9.dU[0]) && (d0.d1.d2(2, player, d6, dP), dV.dW(player, dP))
	}, this.dX = function(player, d6, dY) {
		a9.cn[1] = 7 & dY;
		var a2 = dY >> 3;
		v.cw.cx(1) && v.cw.cy(player) && cq.cz(a2) && ae.dZ.ce(player) && ae.dZ.ck(a2) && v.cw.d9(player, d6, 32, 0) && ae.da.db(player, a2, 1) && (dL.dc(player), d0.d1.d2(3, player, d6, dY), v.cw.dK(player), dd.de.dX(player), ae.af.df(player))
	}, this.dg = function(player, d6, dh) {
		849 === d6 ? this.di(player, dh) : v.cw.cx(1) && v.cw.cy(player) && v.cw.d9(player, d6, 32, 0) && ae.dj.dk(player, dh) && (dL.dc(player), d0.d1.d2(4, player, d6, dh), v.cw.dK(player), dd.de.dg(player), ae.af.df(player))
	}, this.di = function(player, dh) {
		v.cw.cx(1) && v.cw.cy(player) && ae.dl.bQ(player, dh) && d0.d1.d2(4, player, 849, dh)
	}, this.dm = function(player, d7) {
		513 === d7 ? this.dn(player) : v.cw.cx(1) && v.cw.cy(player) && (d7 = Math.min(d7, f.g), dC.dD(player, d7)) && (d0.d1.d2(5, player, d7), dC.dp(player, d7))
	}, this.dq = function(player, dr) {
		(v.cw.cx(1) || v.cw.cx(2)) && v.cw.cy(player) && (dr = ds.dt(dr, 0, 1023), d0.d1.d2(6, player, dr), du.dv(player, 0, dr))
	}, this.dw = function(player, dx) {
		dy.dz(player) && (d0.d1.d2(7, player, dx), dy.e0(player, dx))
	}, this.e1 = function(player) {
		(v.cw.cx(0) || v.cw.cx(1)) && v.cw.cy(player) && e2.e3(player) && (d0.d1.d2(8, player), e4.e1(player))
	}, this.e5 = function(player) {
		d0.d1.d2(9, player), e4.e5(player)
	}, this.dn = function(player) {
		dy.e6(player) && (d0.d1.d2(5, player, 513), dy.dn(player))
	}, this.e7 = function(player, d6, a2, d7) {
		v.cw.cx(1) && v.cw.cy(player) && v.cw.d8(player, d7) && v.cw.dA(player, d7) && cq.cz(a2) && e8.e9.eA(player, a2) && (dC.dD(player, a9.dE[0]) || dC.dF(player)) && (d0.d1.d2(10, player, (d6 << 10) + a9.dE[0], a2), d7 = v.cw.eB(player, d6),
			ci.eC[player].push(a9.eD[0]), dC.d4(player, d7, a9.dE[0]), eE.eF(player, !0), dL.eG(player))
	}
}

function eH() {
	var az, b1, b3, b4, eI = 0,
		eJ = 0;

	function eV() {
		return Math.pow(Math.pow(b3 - az, 2) + Math.pow(b4 - b1, 2), .5)
	}

	function eN(eL) {
		az = ao.ed * eL.touches[0].clientX, b1 = ao.ed * eL.touches[0].clientY, b3 = ao.ed * eL.touches[1].clientX, b4 = ao.ed * eL.touches[1].clientY
	}
	this.eK = function(eL) {
		return 1 < eL.touches.length ? (eJ = bR.eM, eI = 3, eN(eL), eO.eP(), !0) : (eI = 0, !1)
	}, this.eQ = function(eL) {
		var eU, eX, eY;
		return 0 !== f.eR && 1 < eL.touches.length && (eI = Math.max(eI - 1, 0), eS.eT() && (eU = eV(), eN(eL), eL = eV(), eX = Math.floor((az + b3) / 2), eY = Math.floor((b1 + b4) / 2), eZ.ea(eX, eY, Math.max(.125, eL) / Math.max(.125, eU)), bR
			.bS = !0), !0)
	}, this.eb = function() {
		var aD, aE;
		return !!(eI && (eI = 0, bR.eM < eJ + 500)) && (aD = (az + b3) / 2, aE = (b1 + b4) / 2, eO.ec(aD, aE), eO.click(aD, aE, !0) && (bR.bS = !0), !0)
	}
}

function ee() {
	var ef;
	this.e = function() {
		ef = !1
	}, this.bQ = function() {
		var es;
		if (function() {
				if (!ef) {
					if (bR.el() % 30 != 9) return;
					if (!v.cw.em(90)) return;
					ef = !0
				}
				return 1
			}() && (! function() {
				var en = eo.ep(956);
				if (en) {
					if (v.cw.eq(en.player)) return 1;
					eo.er(956, 0)
				}
				return
			}() && (-1 === (es = (f.j ? function() {
				var id = f5.f6(),
					n = ez.f0;
				if (l.m[id])
					for (var f8 = ez.f2, f9 = l.f9, q = 0; q < n; q++) {
						var es = f8[q];
						if (f9[es] !== id) return es
					} else if (1 < n) return f7[n - 1];
				return -1
			} : function() {
				for (var ey = ez.f0, f1 = ez.f2, f3 = f4, q = 0; q < ey; q++) {
					var es = f1[q];
					if (0 !== f3[es]) return es
				}
				return -1
			})()) ? ! function() {
				var en = eo.ep(957);
				if (en && en.fA) {
					if (a6.fB(en.fA.a2 << 2)) return 1;
					eo.er(957, 0)
				}
				return
			}() : (eo.ev(0, L(1, [ci.ew[es]]), 956, es, b7.b9, b7.ex, -1, !0), 0)))) {
			var n = dH.fC.fD;
			if (0 !== n)
				for (var fE = dH.fC.fE, q = 0; q < n; q++) {
					var a2 = fE[q];
					if (a6.fB(a2 << 2)) return void eo.ev(0, L(2, [cq.fF(a2), cq.fG(a2)]), 957, 0, b7.b9, b7.ex, -1, !0, void 0, {
						bz: 1,
						a2: a2
					})
				}
		}
	}
}

function fH() {
	var fI, fJ, ap, aD, aE, fK, fL;
	this.e = function() {
		fI = new Array(2), fJ = new Array(2), this.fM = !1, fL = fK = b2 = b0 = 0, ay = 1, this.resize()
	}, this.resize = function() {
		ap = (ap = Math.floor((bL.bM.bN() ? .072 : .0502) * ao.bO)) < 8 ? 8 : ap;
		for (var q = 1; 0 <= q; q--) fI[q] = document.createElement("canvas"), fI[q].width = ap, fI[q].height = ap, fJ[q] = fI[q].getContext("2d", {
			alpha: !0
		});
		this.fN(),
			function() {
				for (var fu = Math.floor(1 + ap / 20), q = 1; 0 <= q; q--) fJ[q].clearRect(0, 0, ap, ap), fJ[q].fillStyle = b7.fv, fJ[q].beginPath(), fJ[q].arc(ap / 2, ap / 2, ap / 2 - fu, 0, 2 * Math.PI), fJ[q].fill(), fJ[q].lineWidth = fu, fJ[
					q].fillStyle = b7.b9, fJ[q].strokeStyle = b7.b9, fJ[q].beginPath(), fJ[q].arc(ap / 2, ap / 2, ap / 2 - fu, 0, 2 * Math.PI), fJ[q].stroke(), fw(fJ[q], 0, 0, ap, fu, .3, 0 === q)
			}()
	}, this.fS = function() {
		return -b0 / ay
	}, this.fT = function() {
		return -b2 / ay
	}, this.fU = function(fV, eX) {
		b0 = ay * fV - eX
	}, this.fW = function(fX, eY) {
		b2 = ay * fX - eY
	}, this.fY = function(fQ, fR) {
		return f.fZ || ! function(fQ, fR) {
			return Math.pow(fQ - (aD + ap / 2), 2) + Math.pow(fR - (aE + ap / 2), 2) < ap * ap / 4 || Math.pow(fQ - (aD + ap / 2), 2) + Math.pow(fR - (aE + 2 * ap), 2) < ap * ap / 4
		}(fQ, fR) || fa.fE.data[8].value ? (eS.eT() && (this.fM = !0, fK = fQ, fL = fR), !1) : fR < aE + 1.25 * ap ? this.fb(Math.floor(ao.ap / 2), Math.floor(ao.ar / 2), -200) : this.fb(Math.floor(ao.ap / 2), Math.floor(ao.ar / 2), 200)
	}, this.fc = function(fQ, fR) {
		var fd, fe, aF, aG;
		return !eS.eT() || (fd = b0, fe = b2, b0 += aF = fK - fQ, b2 += aG = fL - fR, du.fc(aF, aG), this.ff(), fK = fQ, fL = fR, fd !== b0) || fe !== b2
	}, this.fb = function(fg, fh, deltaY) {
		var fi;
		if (eS.eT()) {
			if (0 < deltaY) fi = (fi = 500 / (500 + deltaY)) < .5 ? .5 : fi;
			else {
				if (!(deltaY < 0)) return !1;
				fi = 2 < (fi = (500 - deltaY) / 500) ? 2 : fi
			}
			this.ea(fg, fh, fi), bR.bS = !0
		}
		return !0
	}, this.ea = function(aD, aE, a3) {
		var ft;
		a3 = ft = (ft = 1024 < (ft = a3) * ay ? 1024 / ay : ft) * ay < .125 ? .125 / ay : ft, du.zoom(a3, aD, aE),
			function(ft, fg, fh) {
				ay *= ft, b0 = (b0 + fg) * ft - fg, b2 = (b2 + fh) * ft - fh, eZ.ff()
			}(a3, aD, aE)
	}, this.ff = function() {
		var fl = ao.ap / 16,
			fm = 0,
			fn = ao.ar / 16,
			fo = 0;
		b0 < fl - ao.ap && (fm = -ao.ap + fl - b0), b0 > ay * au.av - fl && (fm = ay * au.av - fl - b0), b2 < fn - ao.ar && (fo = -ao.ar + fn - b2), ay * au.fp - fn < b2 && (fo = ay * au.fp - fn - b2), b0 += fm, b2 += fo, fq.fr(), du.fs(fm, fo)
	}, this.fN = function() {
		aD = ao.ap - ap - fx.gap, aE = Math.floor(ao.ar / 2 - 1.25 * ap)
	}, this.aR = function() {
		fa.fE.data[8].value || (b5.drawImage(fI[0], aD, aE), b5.drawImage(fI[1], aD, Math.floor(aE + 3 * ap / 2)))
	}
}

function fy() {
	this.g = 512, this.fz = 15e8, this.g0 = 1e9, this.g1 = 5e4, this.g2 = 512, this.g3 = 2, this.al = 0, this.g4 = 0, this.g5 = 0, this.g6 = 0, this.g7 = 0, this.g8 = 512, this.g9 = 512, this.gA = 150, this.gB = !0, this.gC = 0, this.eR = 0, this
		.gD = 0, this.fZ = !1, this.gE = 0, this.gF = 0, this.j = !1, this.gG = 0, this.gH = 0, this.gI = 0, this.gJ = 0, this.d3 = null, this.gK = new gL, this.gM = 30, this.gN = 0, this.gO = 0, this.gP = 0, this.gQ = 0, this.data = new gR, this
		.gS = new gT, this.gU = 0, this.gV = "", this.gW = function() {
			a9.e(), gX.e(), gY.clear(), this.g5 = this.g4 = this.data.humanCount, this.gB = 1 === this.g5, this.fZ = !1, this.gC = this.data.isReplay, this.gI = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.gJ = this.data.isContest, this.j = this.gI < 7 || 9 === this.gI, this.gI = 10 === this.gI && this.gB ? 7 : this.gI, this.gI = 8 === this.gI && 2 !== this.g4 ? 7 : this.gI, gZ.e(),
				this.gG = this.data.numberTeams, this.data.teamPlayerCount ? this.gH = +(0 < this.data.teamPlayerCount[0]) : (this.gH = 0, this.j && this.gB && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this
					.gG + 1), f.gS.ga())), this.gM = this.g4 <= 2 ? 30 : this.g4 <= 50 ? 40 : 50, this.gF = this.gE = this.data.selectableSpawn, this.d3 = this.gE ? new gb : null, 1 === gc.gd ? this.g8 = this.g4 : this.g8 = this.data.playerCount,
				this.g9 = this.g8, this.g6 = this.g8 - this.g4, this.g7 = 0, this.al = this.data.selectedPlayer, this.gN = 0, this.gO = 0, this.gP = 0, this.gQ = 0, ge.gf(this.data.spawningSeed), dV.e(), ci.e(), dT.e(), gg.gh(), gi.gj.gk = [], gi.gl
				.gm = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), l.e(), this.eR = 1, dL.e(), gn(), a6.go(), gp.gq(), gr.e(), a6.e(), gs.e(), cq.e(), ae.e(), dH.e(),
				gt.gu(), gv.e(), gg.gw(), gx.e(), gy.e(), ez.gz(), d0.e(), f5.e(), h0.e(), h1.e(), h2.putImageData(h3, 0, 0), h4.e(), eZ.e(), h5.e(), h6.e(), dy.e(), h7.e(), h8.e(), e2.e(), ba.e(), eo.e(), h9.e(), eO.e(), hA.e(), eE.e(), hB.e(),
			hC(), dC.e(), du.e(), hD.e(), hE.e(), hF.e(), hG.e(), hH.e(), this.gK.e(), bR.gu(), eS.hK(), 0 === ci.hL[f.al] && hA.show(!1, !0), du.hM(!0), hJ.e(), bR.bS = !0, this.gC || this.gB && this.gE || bL.bM.setState(1), this.gU = 0
		}, this.hN = function(hO) {
			d0.d1.hP.length ? this.gV = d0.d1.hP : (this.gV = d0.hQ.hR(), __fx.replayHistory.save(this.gV)), bg.af.hS(), gY.clear(), this.eR = 0, bR.hT(), bL.bM.setState(0), bi.setState(0), hU.hV.show(hO), 2 === this.gU ? c4.af.hW(0) : 1 === this
				.gU ? c4.c5(19) : c4.c5(5, 5)
		}, this.hX = function() {
			return this.gC ? e2.hY || !h6.hZ : this.gB && (e2.hY || this.gE)
		}, this.ha = function() {
			return 1 === this.eR && !this.gE
		}
}

function hb() {
	var hc, hd, he, hf, hg, hh, hi, hj, hk, hl, hm, hn, ho, hp, hq, hr, hs, ht, hv, hw, hx, hy, hz, i5, i6, hu = null,
		i1 = 0,
		i2 = !1,
		i3 = new Float32Array(4),
		i4 = 0,
		i7 = 112,
		i8 = 0;

	function i9() {
		hk = Math.floor(+ao.bO), hl = Math.floor(.5 * hk), hu.width = ao.ap, hu.height = ao.ar, hv = hu.getContext("2d", {
			alpha: !0
		}), v.w.textAlign(hv, 1), v.w.textBaseline(hv, 1), hv.imageSmoothingEnabled = !0
	}

	function iA() {
		var q, iK;
		for (b5.font = v.w.bA(1, 100 * hm), iK = 80 / Math.floor(b5.measureText(v.bB.bC(f.fz)).width), b5.font = v.w.bA(1, 100), q = f.g - 1; 0 <= q; q--) hj[q] = 100 / Math.floor(b5.measureText(ci.ew[q]).width), hi[q] = Math.min(iK, hj[q])
	}

	function iL(q) {
		return !i8 || (q = ci.iN[q]) < 1e6 ? 1 : q < 1e7 ? i3[0] : i3[Math.min(Math.floor(Math.log10(q)) - 6, 3)]
	}

	function iJ(y) {
		i2 = !1, i1 = bR.eM, ht = !1, hs = 1, hq = hr = 0, y.clearRect(0, 0, ao.ap, ao.ar);
		for (var im, io, q, ip, fontSize, iq, az = b0 / ay, b1 = b2 / ay, b3 = (ao.ap + b0) / ay, b4 = (ao.ar + b2) / ay, ir = 0 !== ci.hL[f.al] && !v.cw.is(f.al), bz = ez.f0 - 1; 0 <= bz; bz--) q = ez.f2[bz], (fontSize = Math.floor(hp * ay * iL(q) *
			hi[q] * hg[q])) < ho || hk <= fontSize || he[q] + hg[q] > az && he[q] < b3 && hf[q] + hh[q] > b1 && hf[q] < b4 && (im = Math.floor(ao.ap * (he[q] + hg[q] / 2 - az) / (b3 - az)), io = Math.floor(ao.ar * (hf[q] + hh[q] / 2 - b1) / (b4 -
			b1) - .1 * fontSize), ip = a6.iG[q], y.font = v.w.bA(1 === ci.it[q] ? 4 : 1, fontSize), y.fillStyle = iu(fontSize, ip % 2), i8 ? iv(y, q, fontSize, im, io, ip) : iw(q, fontSize, im, io, y), ht = !0, 0 < hx[q] ? function(im, io,
			fontSize, q, y) {
			0 === f4[q] ? iX.cT.iY(hw[q]) ? (function(im, io, fontSize, player, dr, y) {
				for (var j8 = io, jN = (y.globalAlpha = j9(fontSize), iL(player) * (i8 ? i4 : hj[player])), j7 = im - .5 * fontSize / jN - .9 * fontSize, jO = 0; jO < 2; jO++) y.fillText(iX.cT.jK(dr), j7, j8), j7 = im + .5 *
					fontSize / jN + .9 * fontSize;
				y.globalAlpha = 1
			}(im, io, fontSize, q, hw[q], y), iy(im, io, fontSize, 0, 0, y)) : iX.cT.jE(hw[q]) ? (jF(im, io, fontSize, hw[q], 0, y), iy(im, io, fontSize, 0, 1, y)) : (jF(im, io, fontSize, hw[q], 1, y), iy(im, io, fontSize, 1, 0, y)) : jF(
				im, io, fontSize, hw[q], 0, y)
		}(im, io, fontSize, q, y) : 0 === f4[q] && iy(im, io, fontSize, 0, 0, y), ir && (0 < hx[q + f.g] || 0 < hx[q + 2 * f.g] || 0 < hx[q + 3 * f.g] || 0 < hx[q + 4 * f.g]) && function(im, io, fontSize, q, y) {
			var jA, jB = -1;
			for (jA = 4; 1 <= jA; jA--) 0 < hx[q + jA * f.g] && jB++;
			for (jA = 1; jA < 5; jA++) 0 < hx[q + jA * f.g] && (! function(im, io, fontSize, jA, q, j4, bT, y) {
				var k;
				if (1 === jA) {
					q = hw[q + f.g];
					if (!iX.cT.jG(q)) return function(im, io, fontSize, dr, j4, y) {
						y.globalAlpha = j9(fontSize);
						im -= .534 * j4 * fontSize, j4 = io + 1.59 * fontSize;
						y.font = v.w.bA(0, .785 * fontSize), y.fillText(iX.cT.jK(dr), im, j4), y.globalAlpha = 1
					}(im, io, fontSize, q, j4, y);
					k = iX.a0.jI[q - 1024 + iX.cT.jJ]
				} else k = 2 === jA ? eO.jM()[4].canvas[+(bT < 255)] : (3 === jA ? eO.jM()[5] : eO.jM()[6]).canvas[0];
				q = iX.a0.jH, bT = .8 * fontSize / q, jA = im - .5 * bT * q - .534 * j4 * fontSize, im = io + 1.4 * bT * q;
				y.setTransform(bT, 0, 0, bT, jA, im), y.globalAlpha = j9(fontSize), y.drawImage(k, 0, 0), y.globalAlpha = 1, y.setTransform(1, 0, 0, 1, 0, 0)
			}(im, io, fontSize, jA, q, jB, hx[q + jA * f.g], y), jB -= 2)
		}(im, io, fontSize, q, y), (iq = hm * fontSize) < ho || (y.font = v.w.bA(1, iq), io += Math.floor(.78 * fontSize), i8 ? iw(q, iq, im, io, y) : iv(y, q, iq, im, io, ip)))
	}

	function iw(q, fontSize, aD, aE, y) {
		var ___id = q;
		var showName = q < f.g4 || !__fx.settings.hideBotNames;
		if (showName) y.fillText(ci.ew[q], aD, aE), q < f.g4 && 2 !== ci.it[q] || (q = fontSize / hj[q], y.fillRect(aD - .5 * q, aE + v.w.j1 * fontSize, q, Math.max(1, .1 * fontSize)));
		i8 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (y.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			y.fillText(__fx.utils.getDensity(___id), aD, showName ? aE + fontSize : aE)
		);
	}

	function iv(y, q, fontSize, im, io, ip) {
		var j2 = ci.j2[q],
			j3 = v.bB.bC(ci.iN[q] - j2);

		function drawDensity() {
			!i8 && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (y.fillStyle = __fx.utils.textStyleBasedOnDensity(q)), y.fillText(__fx.utils.getDensity(q), im, io + fontSize))
		}
		j2 ? (j2 = y.fillStyle, y.fillStyle = iu(fontSize, 2 + ip % 2), y.fillText(j3, im, io), y.fillStyle = j2) : ip >> 1 & 1 ? (y.lineWidth = .05 * fontSize, y.strokeStyle = iu(fontSize, ip % 2), y.strokeText(j3, im, io)) : (1 < ip && (y
			.lineWidth = .12 * fontSize, y.strokeStyle = iu(fontSize, ip), y.strokeText(j3, im, io)), y.fillText(j3, im, io)), drawDensity()
	}

	function iy(im, io, fontSize, j4, j5, y) {
		var j6 = .95 * fontSize / hz,
			im = im - .5 * j6 * hy + .8 * j4 * fontSize,
			j4 = io - 1.76 * j6 * hz - (.35 - v.w.j1 + .7) * j5 * fontSize;
		y.setTransform(j6, 0, 0, j6, im, j4), y.globalAlpha = j9(fontSize), y.drawImage(iQ.get(4), 0, 0), y.globalAlpha = 1, y.setTransform(1, 0, 0, 1, 0, 0)
	}

	function jF(im, io, fontSize, dr, j4, y) {
		var u, j7, j6;
		y.globalAlpha = j9(fontSize), iX.cT.jG(dr) ? (u = iX.a0.jH, y.setTransform(j6 = 1.1 * fontSize / u, 0, 0, j6, j7 = im - .5 * j6 * u - .8 * j4 * fontSize, j6 = io - 1.55 * j6 * u), y.drawImage(iX.a0.jI[dr - 1024 + iX.cT.jJ], 0, 0), y
			.setTransform(1, 0, 0, 1, 0, 0)) : (j7 = im - .8 * j4 * fontSize, j6 = io - (.35 - v.w.j1 + 1) * fontSize, y.fillText(iX.cT.jK(dr), j7, j6)), y.globalAlpha = 1
	}

	function iu(fontSize, ip) {
		return hl <= fontSize && fontSize < hk ? l.jP[ip] + j9(fontSize).toFixed(3) + ")" : l.jQ[ip]
	}

	function j9(fontSize) {
		return hl <= fontSize && fontSize < hk ? 1 - (fontSize - hl) / (hk - hl) : 1
	}

	function jf(jN, ap) {
		return 1 + Math.floor(hn * jN * ap)
	}

	function jc(q) {
		for (var left = he[q], bz = he[q] - ci.iO[q] - 1; 0 <= bz; bz--)
			if (!jj(q, --left, hf[q], hh[q])) {
				left++;
				break
			} var right = he[q];
		for (bz = ci.iS[q] - he[q] - hg[q]; 0 <= bz; bz--)
			if (!jj(q, ++right + hg[q] - 1, hf[q], hh[q])) {
				right--;
				break
			} var aD = Math.floor((left + right) / 2),
			top = hf[q];
		for (bz = hf[q] - ci.iP[q] - 1; 0 <= bz; bz--)
			if (!jk(q, aD, --top, hg[q])) {
				top++;
				break
			} var bottom = hf[q];
		for (bz = ci.iT[q] - hf[q] - hh[q]; 0 <= bz; bz--)
			if (!jk(q, aD, ++bottom + hh[q] - 1, hg[q])) {
				bottom--;
				break
			} var aE = Math.floor((top + bottom) / 2);
		jZ(q, aD, aE, hg[q], hh[q]) && (he[q] = aD, hf[q] = aE)
	}

	function jZ(player, aD, aE, ap, ar) {
		jl = Math.floor(.2 * ap);
		for (var jl, jA = aD + ap - 1; aD <= jA; jA--)
			if (!jj(player, jA, aE, ar)) return;
		for (jA = aE + ar - 1 - (jl = (jl = Math.floor(.25 * ar)) < 1 ? 1 : jl); aE + jl <= jA; jA--)
			if (!jk(player, aD, jA, ap)) return;
		return 1
	}

	function jj(player, aD, aE, ar) {
		return a6.jm(player, 4 * (aE * au.av + aD)) && a6.jm(player, 4 * ((aE + ar - 1) * au.av + aD))
	}

	function jk(player, aD, aE, ap) {
		return a6.jm(player, 4 * (aE * au.av + aD)) && a6.jm(player, 4 * (aE * au.av + aD + ap - 1))
	}
	this.e = function() {
		if (i8 = fa.fE.data[7].value || 8 === f.gI, ht = !1, hp = .88, hm = .5, hn = 1.8, ho = 12 - 3 * fa.fE.data[9].value, hd = hc = 0, he = new Uint16Array(f.g), hf = new Uint16Array(f.g), hg = new Uint16Array(f.g), hh = new Uint16Array(f.g),
			hi = new Float32Array(f.g), hj = new Float32Array(f.g), hw = new Uint16Array(2 * f.g), hx = new Uint8Array(5 * f.g), i5 = new Uint8Array(f.g), i6 = new Uint8Array(f.g), hu = hu || document.createElement("canvas"), i9(), hr = hq = 0,
			hs = 1, i8) {
			var q, iK;
			for (iA(), b5.font = v.w.bA(1, 100), iK = 100 / Math.floor(b5.measureText("900 000").width), q = f.g - 1; 0 <= q; q--) hi[q] = Math.min(iK, 2 * hj[q]);
			i4 = iK, i3[0] = 100 / (iK * Math.floor(b5.measureText("5 000 000").width)), i3[1] = 100 / (iK * Math.floor(b5.measureText("50 000 000").width)), i3[2] = 100 / (iK * Math.floor(b5.measureText("500 000 000").width)), i3[3] = 100 / (
				iK * Math.floor(b5.measureText("1 000 000 000").width))
		} else iA();
		! function() {
			var q;
			for (q = f.g - 1; 0 <= q; q--) ci.iF[q] < 12 ? (he[q] = ci.iO[q] + 1, hf[q] = ci.iP[q] + 1, hg[q] = 1, hh[q] = 1) : (he[q] = ci.iO[q], hf[q] = ci.iP[q] + 1, hg[q] = 4, hh[q] = 2);
			if (f.gE)
				for (q = 0; q < f.g4; q++) hg[q] = 0;
			hy = iQ.get(4).width, hz = iQ.get(4).height
		}()
	}, this.iD = function(es, iE) {
		iE > 18 * ci.iF[es] ? (i6[es] = 6, a6.iG[es] = 2 + a6.iG[es] % 2) : (i5[es] = 4, (a6.iG[es] < 2 || 3 < a6.iG[es]) && (a6.iG[es] = 6 + a6.iG[es] % 2))
	}, this.iH = function(es, iE) {
		iE > 6 * ci.iF[es] ? (i6[es] = 6, a6.iG[es] = 4 + a6.iG[es] % 2) : (i5[es] = 4, (a6.iG[es] < 4 || 5 < a6.iG[es]) && (a6.iG[es] = 8 + a6.iG[es] % 2))
	}, this.resize = function() {
		i9(), iJ(hv)
	}, this.iR = function() {
		for (var q = 0; q < f.g4; q++) ci.iS[q] - ci.iO[q] != 3 || ci.iT[q] - ci.iP[q] != 3 ? (he[q] = ci.iO[q] + (ci.iS[q] !== ci.iO[q] ? 1 : 0), hf[q] = ci.iP[q], hg[q] = 1, hh[q] = 1) : (he[q] = ci.iO[q], hf[q] = ci.iP[q] + 1, hg[q] = 4, hh[
			q] = 2)
	}, this.dv = function(player, t, iU) {
		! function(player, t, iU) {
			player += t * f.g;
			0 === t ? hw[player] === iU && 0 < hx[player] ? hx[player] = 0 : (hw[player] = iU, hx[player] = iX.cT.iY(iU) ? 255 : 64) : 1 === t ? (hx[player] = 64, hw[player] = iU) : hx[player] = iU
		}(player, t, iU), 2 === f.eR && this.hM(!0)
	}, this.aR = function() {
		ht && (1 !== hs ? (b5.imageSmoothingEnabled = !0, b5.setTransform(hs, 0, 0, hs, 0, 0), b5.drawImage(hu, -hq / hs, -hr / hs), b5.setTransform(1, 0, 0, 1, 0, 0), b5.imageSmoothingEnabled = !1) : b5.drawImage(hu, -hq, -hr))
	}, this.fs = function(aF, aG) {
		hq += aF, hr += aG
	}, this.fc = function(aF, aG) {
		du.fs(aF, aG)
	}, this.zoom = function(ft, fg, fh) {
		hs *= ft, hq = (hq + fg) * ft - fg, hr = (hr + fh) * ft - fh
	}, this.ia = function(player) {
		var iO = ci.iO[player],
			iS = ci.iS[player],
			iP = ci.iP[player],
			iT = ci.iT[player],
			ib = cq.ic(0),
			ie = cq.ig(0),
			ih = cq.ic(ao.ap),
			ii = cq.ig(ao.ar);
		iO < ih && ib < iS && iP < ii && ie < iT && (hg[player] = 0, i2 = !0)
	}, this.hM = function(ij) {
		return !(!i2 && !ij && bR.eM < i1 + (1 === hs && 0 === hq && 0 === hr && (f.hX() || f.gE || 2 === f.eR) ? 1e3 : i7) || (iJ(hv), 0))
	}, this.ik = function(q) {
		return iL(q) * hi[q]
	}, this.il = function(player) {
		return hi[player]
	}, this.bQ = function() {
		bR.el() % 10 == 9 && (i2 = i2 || f.ha() && !f.hX()), !f.hX() && 4 <= ++hd && function() {
			var q, bz, jO;
			for (hd = 0, jO = 4; 1 <= jO; jO--)
				for (bz = ez.f0 - 1; 0 <= bz; bz--) q = ez.f2[bz] + jO * f.g, 0 < hx[q] && hx[q] < 255 && hx[q]--;
			if (2 !== f.eR)
				for (bz = ez.f0 - 1; 0 <= bz; bz--) q = ez.f2[bz], 0 < hx[q] && hx[q] < 255 && hx[q]--
		}();
		var q, bz, n = Math.floor(.1 * ez.f0);
		for (n = (n = n < 8 ? 8 : n) > ez.f0 ? ez.f0 : n, q = hc + n - 1; hc <= q; q--) bz = q % ez.f0, ! function(q) {
			var jN = iL(q) * hi[q];
			0 < hg[q] && jZ(q, he[q], hf[q], hg[q], hh[q]) ? ! function(q) {
				for (var aD, aE, ap, ar, a3 = !1, jO = 0; jO < 8; jO++) {
					if (ap = hg[q] + 2, ar = hh[q] + 2, ap > ci.iS[q] - ci.iO[q] + 1 || ar > ci.iT[q] - ci.iP[q] + 1) return a3;
					if (aD = he[q] - 1, aE = hf[q] - 1, !jZ(q, aD, aE, ap, ar)) return a3;
					he[q] = aD, hf[q] = aE, hg[q] = ap, hh[q] = ar, a3 = !0
				}
				return a3
			}(q) && function(q, jN) {
				for (var aD, aE, ap, ar, a3 = !1, jg = hg[q], fi = 1 + Math.floor(.02 * jg), jO = 1; jO < 5; jO++) {
					if ((ap = jg + jO * fi) > ci.iS[q] - ci.iO[q] + 1) return a3;
					if ((ar = jf(jN, ap)) > ci.iT[q] - ci.iP[q] + 1) return a3;
					aD = ci.iO[q] + Math.floor(Math.random() * (ci.iS[q] - ci.iO[q] + 2 - ap)), aE = ci.iP[q] + Math.floor(Math.random() * (ci.iT[q] - ci.iP[q] + 2 - ar)), jZ(q, aD, aE, ap, ar) && (he[q] = aD, hf[q] = aE, hg[q] = ap, hh[
						q] = ar, a3 = !0)
				}
				return a3
			}(q, jN) && jc(q) : ! function(q, jN) {
				var ar, aD = he[q] + 1,
					aE = hf[q] + 1,
					ap = hg[q] - 2;
				for (;;) {
					if (ap < 1) {
						hg[q] = 0;
						break
					}
					if (ar = jf(jN, ap), jZ(q, aD, aE, ap, ar)) return he[q] = aD, hf[q] = aE, hg[q] = ap, hh[q] = ar, 1;
					aD++, aE++, ap -= 2
				}
				return
			}(q, jN) ? function(q, jN) {
				var aD, aE, ap, ar, jO, eT, jh = ci.iS[q] - ci.iO[q] + 1,
					ji = Math.floor(.02 * jh);
				for (eT = -6 * (ji = ji < 1 ? 1 : ji), jO = jh; eT <= jO; jO -= ji)
					if (ar = jf(jN, ap = 0 < jO ? jO : 1), aD = ci.iO[q] + Math.floor(Math.random() * (ci.iS[q] - ci.iO[q] + 2 - ap)), aE = ci.iP[q] + Math.floor(Math.random() * (ci.iT[q] - ci.iP[q] + 2 - ar)), jZ(q, aD, aE, ap, ar))
						return he[q] = aD, hf[q] = aE, hg[q] = ap, hh[q] = ar
			}(q, jN) : jc(q)
		}(ez.f2[bz]);
		hc = (hc += n) % ez.f0
	}, this.jT = function() {
		var q, es, jU, jV;
		if (bR.el() % 4 == 1)
			for (q = ez.f0 - 1; 0 <= q; q--) es = ez.f2[q], a6.iG[es] < 2 || ((jU = Math.max(i5[es] - 1, 0)) === (jV = Math.max(i6[es] - 1, 0)) ? 0 === jU && (a6.iG[es] %= 2) : 0 === jV && a6.iG[es] < 6 && (a6.iG[es] += 4), i5[es] = jU, i6[es] =
				jV)
	}, this.jW = function(player) {
		var q = player + 2 * f.g,
			bT = hx[q];
		return 0 < bT && (eo.jX(50, player), hx[q] = 0, 255 === bT)
	}, this.jY = function(player) {
		return 255 === hx[player + 2 * f.g]
	}
}

function jn(jo, jp) {
	var jy, self, jq = document.createElement("div"),
		jr = document.createElement("div"),
		js = document.createElement("div"),
		jt = null,
		jz = (this.ju = new jv({
			value: "",
			t: -1
		}, 0, jw, function(eL) {
			eL.target.value = v.bB.kC(eL.target.value), jt.kB.textContent = 127 - eL.target.value.length
		}), 0),
		k0 = 1,
		k1 = 0,
		k2 = 1048575;

	function jw() {
		jo(), jt.kB.textContent = 127
	}

	function kH(kG, en) {
		en && (en.kM = 1, kG.appendChild(bk.cT.transform(en)))
	}

	function kK(ij) {
		k0 ? jq.scrollTop = jq.scrollHeight : ij && (jq.scrollTop = k1)
	}
	this.reset = function(kD) {
			k2 = 1048575, jr.textContent = "", kD || this.kE()
		}, this.kE = function() {
			var cN = bk.af.kF[0],
				cN = bk.af.bm[cN],
				cO = cN.cO,
				n = cO.length,
				jh = 1048575 === k2 ? 0 : n - (cN.cP - k2 + 1048575) % 1048575;
			if (k2 = cN.cP, !(n <= (jh = Math.max(jh, 0)))) {
				for (var kG = document.createDocumentFragment(), q = jh; q < n; q++) kH(kG, bk.co.kI(cO[q], bk.co.kJ(cO[q])));
				jr.appendChild(kG), kK()
			}
		}, this.kL = function(cX) {
			var kG = document.createDocumentFragment();
			kH(kG, cX), jr.appendChild(kG), kK()
		}, this.show = function(kN) {
			kN.appendChild(jq), kN.appendChild(js), this.resize(kN)
		}, this.eP = function(kN) {
			c4.removeChild(kN, jq), c4.removeChild(kN, js)
		}, this.resize = function(kN) {
			jz = kN ? kN.offsetHeight : jz;
			var kN = v.w.kP(.04, .75),
				kQ = Math.max(kN, jz - kN),
				kR = ao.ap / ao.ed,
				kS = .7 * kR,
				kT = v.w.kU(jz - kN - kQ),
				kQ = (js.style.height = v.w.kU(kN), jq.style.height = v.w.kU(kQ), ao.ar > ao.ap || bL.bM.bN() ? (js.style.top = kT, jq.style.top = v.w.kU(jz - kQ), v.w.kV(jq, 8)) : (jq.style.top = kT, js.style.top = v.w.kU(jz - kN), v.w.kV(jq, 2)),
					this.ju.eL.style.width = v.w.kU(kS), this.ju.eL.style.fontSize = jy.button.style.fontSize = v.w.kU(.5 * kN), v.w.kV(this.ju.eL, 6), jy.button.style.left = v.w.kU(kS), jy.button.style.width = v.w.kU(kR - kS), .385 * kN);
			bL.bM.bN() && (kQ *= .8 - .12 * (ao.ap > ao.ar)), jr.style.marginLeft = jr.style.marginRight = v.w.kU(.5 * kQ), jr.style.fontSize = v.w.kU(kQ), kK(1)
		}, (self = this).ju.eL.k4 = 127, jq.style.position = "absolute", jq.style.left = "0", jq.style.width = "100%", jq.style.overflowX = "hidden", jq.style.overflowY = "auto", jq.style.font = "inherit", jq.style.backgroundColor = b7.k5, jq
		.addEventListener("scroll", function() {
			k1 = jq.scrollTop, k0 = k1 < jq.scrollHeight - jq.clientHeight - 2 ? 0 : 1
		}), jr.style.font = "inherit", js.style.position = "absolute", js.style.left = "0", js.style.width = "100%", self.ju.eL.setAttribute("placeholder", L(3)), self.ju.eL.style.position = "absolute", self.ju.eL.style.top = "0", self.ju.eL.style
		.left = "0", self.ju.eL.style.height = "100%", self.ju.eL.style.backgroundColor = b7.k6, self.ju.eL.style.textAlign = "center", (jy = new k7(L(4), jw)).button.top = "0", jy.button.style.position = "absolute", jy.button.style.height = "100%",
		jy.k8(b7.k9), jt = new kA("127", jy.button, 1, 1), jq.appendChild(jr), js.appendChild(self.ju.eL), js.appendChild(jy.button)
}

function kX() {
	var kY = new Uint16Array(f.g),
		kZ = 0;

	function kg(kd, ke) {
		var jA = bR.el();
		return 3213 <= jA ? 4 + ds.kh(100 * ke, dV.ki(kd)) : (kd = 1 + ds.kh(f.gD, 300), jA < 357 ? 2 + ds.kh(100 * ke, kd) : jA < 714 ? 2 + ds.kh(100 * ke, 4 * kd) : jA < 1071 ? 2 + ds.kh(100 * ke, 10 * kd) : jA < 2142 ? 2 + ds.kh(100 * ke, 30 *
			kd) : 2 + ds.kh(100 * ke, 100 * kd))
	}

	function kf(kd) {
		return f.gB || 4284 <= bR.el() || v.cw.is(kd)
	}
	this.e = function() {
		kY.fill(0), kZ = 15
	}, this.ka = function(dP) {
		var player = f.al;
		return !!v.cw.dQ(player, dP) && !(!v.cw.dR(player, v.cw.dS(player, h5.kb()), dP) || (player = dP, dP = a9.dU[0], !kf(player) && kY[player] + kg(player, dP) > kZ))
	}, this.d4 = function(kd, ke) {
		if (!kf(kd)) {
			ke = kg(kd, ke);
			if (kY[kd] + ke > kZ) return !1;
			kY[kd] += ke
		}
		return !0
	}, this.bQ = function() {
		bR.el() % 100 == 99 && (bR.el() < 1071 ? kZ += 4 : bR.el() < 2142 ? kZ += 6 : bR.el() < 3213 ? kZ += 8 : kZ += 10)
	}
}

function kl() {
	var km, kn, kt;
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), kn.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(L(5), [new k7("⬅️ " + L(6), function() {
		c4.kp()
	})]), kn = new kq(km.kr, ((kt = []).push(function() {
		function l5() {
			l6.button.textContent = L(10), l2.eL.readOnly = !1, l4.eL.readOnly = !1, l7.k8(1), l7.button.style.color = b7.b9
		}
		var kv = new kw,
			l0 = (kv.kx(bg.af.ky("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", kv.kz(L(7)), new jv({
				value: fa.fE.data[105].value,
				t: -1
			})),
			l2 = (l0.eL.readOnly = !0, kv.l1(l0), kv.kz(L(8), "0.8em"), new jv(fa.fE.data[148], 0, void 0, function(eL) {
				l3(fa.fE.data[149].value, eL.target.value)
			})),
			l4 = (kv.l1(l2), kv.kz(L(9), "0.8em"), new jv(fa.fE.data[149], 1, void 0, function(eL) {
				l3(eL.target.value, fa.fE.data[148].value)
			})),
			l6 = (kv.l1(l4), new k7(L(10), function(eL) {
				return eL.textContent === L(10) ? (eL.textContent = L(11), l2.eL.readOnly = !0, l4.eL.readOnly = !0, l7.k8(0), l7.button.style.color = b7.l8, fa.l9.lA(149, l4.eL.value), l3(fa.fE.data[149].value, fa.fE.data[
					148].value)) : l5(), !0
			})),
			l7 = (kv.l1(new lB([l6.button])), new k7(L(4), function(eL) {
				return l2.eL.readOnly && bg.af.lC(0) && (v.w.lD(eL), l5(), bg.lE.lF({
					action: 0,
					cW: fa.fE.data[148].value,
					value: parseInt(fa.fE.data[149].value, 10)
				})), !0
			}, 1)),
			lG = kv.lH(),
			l3 = (kv.lH(L(12)).style.fontWeight = "bold", function(kk, lI) {
				lG.innerHTML = c4.af.lJ(kk, fa.fE.data[105].value, lI)
			});
		return kv.l1(new lB([l7.button])), l3(fa.fE.data[149].value, fa.fE.data[148].value), kv
	}()), kt))
}

function lN() {
	function lR(a8, kk, iW) {
		for (var q = 0; q < 256; q++) a8[q] = (a8[q] + (kk >> (q + iW) % 30 & 1)) % 256
	}
	this.bQ = function(lO, lP) {
		var a8 = new Uint8Array(256);
		return function(a8, lO, lP) {
				var q, lU = 3 + (4 + lO) % 32768,
					lV = 12 + lP % 32768,
					lW = 17 + ((lO & lP) + (lO | lP) + lO) % 32768;
				for (q = 0; q < 256; q++) lU = 1 + lU * lV % lW, a8[q] = lU % 256
			}(a8, lO, lP), lR(a8, lO, 2), lR(a8, lP, 7),
			function(a8) {
				var q, kk, t = 0;
				for (q = 0; q < 3e4; q++) kk = a8[t], a8[t] = (kk + q + a8[(t + q) % 256]) % 256, t = (kk + q + t + (kk & t)) % 256
			}(a8),
			function(a8) {
				var q, lX = 1,
					lY = 1;
				for (q = 0; q < 256; q += 2) lX = (1 + lX) * (a8[q] + 1) % 1073741824, lY = (1 + lY) * (a8[q + 1] + 1) % 1073741824;
				return [lX, lY]
			}(a8)
	}, this.lZ = function(la, lb, lc, result) {
		for (var jB = 1 << la, q = 0; q < jB; q++)
			if (this.ld(q, lb, lc) === result) return q;
		return 0
	}, this.ld = function(le, lb, lc) {
		for (var lf = lb + le, lg = lc + le, kk = lf + lg & 2147483647, bz = 1; bz <= 16; bz++) kk = (kk = (kk ^ kk >> bz) >>> 1 + (3 & lf)) * (7 + (1023 & (lf | lg))) & 1073741823, lg >>= 1 + (1 & (lf >>= 1 + (1 & (kk += 65535 & lg))));
		return kk &= 1073741823
	}
}

function lh() {
	this.size = 0, this.t = 0, this.li = null, this.e = function(li) {
		this.t = 0, this.li = li, this.size = li.length
	}, this.lj = function() {
		this.li = null
	}, this.bp = function(size) {
		for (var kk = 0, li = this.li, eT = this.t + size - 1, q = this.t; q <= eT; q++) kk |= (li[q >> 3] >> 7 - (7 & q) & 1) << eT - q;
		return this.t += size, this.t > 8 * this.size && console.error("Unwrapper Overflow"), kk
	}, this.lk = function(size) {
		var jO = size >> 1;
		return (1 << jO) * this.bp(size - jO) + this.bp(jO)
	}, this.ll = function(lm) {
		return this.size === ln.lo(lm)
	}, this.lp = function(lq, lr, ls) {
		var jB = this.bp(lq);
		if (!jB) return null;
		for (var lq = Math.max(jB, ls), a8 = new(lr <= 8 ? Uint8Array : lr <= 16 ? Uint16Array : Uint32Array)(lq), q = 0; q < jB; q++) a8[q] = this.bp(lr);
		ls = a8[jB - 1];
		return ls && a8.fill(ls, jB), a8
	}, this.lt = function(lq, lu, ls) {
		var jB = this.bp(lq);
		if (!jB) return null;
		for (var lq = Math.max(jB, ls), a8 = new Array(lq), q = 0; q < jB; q++) a8[q] = this.lv(lu);
		return a8.fill(a8[jB - 1], jB), a8
	}, this.lv = function(lq) {
		return c1.lw.lx(this.bp(lq))
	}, this.ly = function() {
		var lI = lz.m0.m1(lz.m0.m2(this.bp(30))),
			lI = v.bB.m3(lI, "_", "/");
		lI = v.bB.m3(lI, "-", "+");
		for (var m4 = "";
			(lI.length + m4.length) % 4;) m4 += "=";
		lI = "data:image/png;base64," + lI + m4;
		var m5 = new Image;
		m5.onload = function() {
			d0.m6.m7(m5), m5.onload = null, m5 = null
		}, m5.src = lI
	}
}

function m8() {
	var m9 = null,
		mA = 0,
		mB = 0;

	function mD() {
		var mJ;
		window.turnstile && (mA = 1, null !== m9 ? window.turnstile.reset(m9) : (mJ = document.createElement("div"), document.body.appendChild(mJ), m9 = window.turnstile.render(mJ, {
			sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
			action: "join_game",
			appearance: "interaction-only",
			callback: function(mG) {
				mB = bR.eM, mA = 0,
					function(mG) {
						bg.mH.mI(mG)
					}(mG)
			},
			"expired-callback": function() {
				mA = 0
			}
		})))
	}
	this.e = function() {
		var mC = document.createElement("script");
		mC.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", mC.async = !0, mC.onload = function() {
			mD()
		}, document.head.appendChild(mC)
	}, this.mE = function() {
		!mA && mB + 29e4 < bR.eM && mD()
	}
}

function mK() {
	var mL, mM, mP, mS, mT, mN = [new Array(4), new Array(4), new Array(2), new Array(2)],
		mO = new Array(4),
		mQ = new Array(2),
		mR = [L(13), L(14), L(15), L(16)];

	function mb() {
		var mh;
		!bk.c8 || (mh = mL.mi.ju.eL.value.trim().slice(0, 127)).length < 1 || (mL.mi.ju.eL.value = "", bk.cY.mj(mh))
	}

	function mZ(mn) {
		bk.af.kF[3] = 1 - bk.af.kF[3], mf(3, 1, bk.af.kF[3]), mn && bg.mo.mp(4), bk.af.kF[3] && fa.l9.lA(158, bk.af.kF[0])
	}

	function mV(bz, jO) {
		bk.af.kF[bz] !== jO && (0 === bz && bk.af.kF[3] && mZ(0), mf(bz, bk.af.kF[bz], 0), mf(bz, jO, 1), bk.af.kF[bz] = jO, 0 === bz ? (bg.mo.mp(2, jO), bk.af.kF[2] ? (mL.ms.kE(), mL.mi.reset(1)) : mL.mi.reset(0), c4.mt().mu(), c4.mt().mv()) : 2 ===
			bz && (0 === jO ? (bg.mo.mp(0), mL.mi.kE(), mL.mw()) : (bg.mo.mp(1), mL.ms.kE(), mL.mx())))
	}

	function mf(bz, jO, color) {
		mL.my[bz].me[jO].k8(color ? b7.mz : b7.k9)
	}

	function n3(bq) {
		return au.nD.nE[bq]
	}

	function n4(br) {
		return br < 7 ? "   " + (br + 2) + " Teams" : 10 === br ? "   No Full-Sending" : ""
	}

	function n5(bw, nK) {
		return nK ? bw <= 90 && 60 < bw ? "   Contest" : "" : bw <= 60 ? "   Contest" : ""
	}
	this.mk = function() {
		return mL.mi
	}, this.cY = function(cW) {
		mV(2, 0);
		var lI = mL.mi.ju.eL.value,
			cW = "@" + cW + " ";
		lI.length && !v.bB.mr(lI, " ") && (cW = " " + cW), mL.mi.ju.eL.value = lI += cW, mL.mi.ju.eL.focus()
	}, this.n0 = function() {
		mL.ms.kE()
	}, this.mu = function() {
		var n1 = bk.af.kF[0],
			n1 = bk.af.bm[n1],
			jO = (au.gw(n1.bq, n1.mapSeed), mM.me),
			n2 = n3(n1.bq, n1.mapSeed) + n4(n1.br) + n5(n1.bw),
			n1 = L(22) + "   " + n3(n1.bs, n1.bt) + n4(n1.bu) + n5(n1.bw, 1);
		jO[0].button.textContent === n2 && jO[1].button.textContent === n1 || (jO[0].button.textContent = n2, jO[1].button.textContent = n1, mM.resize())
	}, this.mv = function() {
		var n1 = bk.af.kF[0],
			bl = bk.af.bm[n1];
		mL.n7(bl.bn);
		for (var kk, bU, q = 0; q < bk.bx.n8.length; q++) mN[0][q].kB.textContent = bk.bx.n8[q].length, mN[1][q].kB.textContent = (kk = bk.af.bm[q].bw, bU = void 0, ((bU = ds.kh(kk, 60)) < 10 ? "0" : "") + bU + ":" + ((kk %= 60) < 10 ? "0" :
			"") + kk);
		var bl = bk.bx.n8[n1],
			nA = bl.length,
			nB = bk.bx.by[n1];
		mN[2][1].kB.textContent = "" + nA, mN[3][1].kB.textContent = "" + nB;
		for (q = 0; q < 4; q++) {
			var nC = bk.af.bm[q];
			mO[q] ? 0 === nC.bn && (mO[q].kB.textContent = au.nD.nE[nC.bq]) : mO[q] = new kA(au.nD.nE[nC.bq], mS.me[q].button, 1, 1), v.bB.startsWith(mR[q], "🏆 ") ? nC.bv || (mR[q] = mR[q].substring(3), mS.me[q].button.textContent = mR[q], mS
				.me[q].button.appendChild(mN[1][q].kB), mS.me[q].button.appendChild(mN[0][q].kB), mS.me[q].button.appendChild(mO[q].kB)) : nC.bv && (mR[q] = "🏆 " + mR[q], mS.me[q].button.textContent = mR[q], mS.me[q].button.appendChild(mN[1]
				[q].kB), mS.me[q].button.appendChild(mN[0][q].kB), mS.me[q].button.appendChild(mO[q].kB))
		}
		var nF = "",
			nG = "";
		0 === n1 && (nF = bk.co.nH(bl, 0, nA), nG = bk.co.nH(bl, 0, nB)), mP[0].kB.textContent = nF, mP[1].kB.textContent = nG, mQ[1].kB.textContent = "MP: " + bk.af.c9[0] + "   SP: " + bk.af.c9[1] + "   Lobby: " + v.aN.nI(bk.bx.n8)
	}, this.nL = function() {
		mL.mi.kE()
	}, this.show = function() {
		bk.af.nM++, mL.show(), this.resize(), bk.message.show()
	}, this.eP = function() {
		mL.eP(), bk.mc.eP(), bk.nN.eP(), bk.message.eP()
	}, this.resize = function() {
		mL.resize(1 - bk.af.kF[2]), bk.message.resize()
	}, this.lK = function(jA) {
		2 === jA ? bk.af.kF[3] ? mZ(1) : mL.my[3].me[0].lM() : jA < 2 && mZ(1)
	}, mS = new mU([new k7(mR[0], function() {
		return mV(0, 0), 2
	}), new k7(mR[1], function() {
		return mV(0, 1), 2
	}), new k7(mR[2], function() {
		return mV(0, 2), 2
	}), new k7(mR[3], function() {
		return mV(0, 3), 2
	})], b7.k9), mM = new mU([new k7("", 0, 2), new k7("", 0, 2)], b7.mW, 1);
	var mX = new mU([new k7(L(17), function() {
		return mV(2, 0), 2
	}), new k7(L(18), function() {
		return mV(2, 1), 2
	})], b7.k9);
	mT = new mU([new k7(L(19, 0, 0, 1), function() {
		c4.ml(), bk.lj(), bg.af.mm(3240), c4.c5(5, 5)
	}), new k7(L(20), function() {
		return mZ(1), 2
	})], b7.k9), mL = new ma(mS, mM, mX, mT, mb, bk.mc.md);
	for (var q = 0; q < 4; q++) mN[0][q] = new kA("0", mS.me[q].button), mN[1][q] = new kA("0", mS.me[q].button, 1);
	mN[2][1] = new kA("0", mX.me[1].button), mN[3][1] = new kA("0", mT.me[1].button), (mP = [new kA("", mX.me[1].button, 1, 1), new kA("", mT.me[1].button, 1, 1)])[0].kB.style.bottom = "0em", mP[1].kB.style.bottom = "0em", mf(0, bk.af.kF[0], 1), mf(
		2, bk.af.kF[2], 1), (mQ = [new kA(L(21), mL.mg(), 1, 0), new kA("", mL.mg(), 1, 1)])[0].kB.style.fontSize = "0.4em", mQ[1].kB.style.fontSize = "0.4em"
}

function nO() {
	function nQ() {
		if (2 === f.eR) return 1;
		dy.nT(), f.eR = 2, f.g7 = f.g5
	}

	function nR() {
		gX.nU.mj(), hA.show(1 === f.gO, !1, 2 === f.gO), gX.result.mj(), gX.nV.bQ(), gX.nW.bQ(), gX.nW.nX(), eo.nY(!0), eo.jX(247), eo.jX(956), eo.jX(957), h4.hM(!0), h8.hM(!0), dy.hM(), h6.nZ(), f.gC && bR.na.nb(), bR.bS = !0, gr.nc(), bL.bM
			.setState(0)
	}
	this.nP = function() {
		nQ() || (f.gN = 2, nR())
	}, this.nS = function() {
		nQ() || (f.gN = 1, nR())
	}
}

function nd() {
	var ne, nf, ng, nh, ni, t = 0,
		eM = bR.eM;

	function ns() {
		! function() {
			if (!f.gE) return;
			if (f.gB) return;
			if (2 !== f.eR)
				if (ni % 7 != 0) ni++;
				else if (nh === f.gM) {
				if (!nv()) return;
				h8.nx(nh), f.d3.bQ()
			} else {
				if (!nv()) return;
				ni++, nh++, du.iR(), du.hM(!0)
			}
			return 1
		}() && nv() && nw()
	}

	function nt() {
		t = 0, (f.gE ? (bR.bS = h8.nx(nh - (ni % 7 == 0 ? 0 : 1) + ni % 7 / 7) || bR.bS, ny) : e2.hY || !h6.hZ ? ny : (bR.bS = !0, nz))()
	}

	function nv() {
		var q, n, o0 = d0.d1.o1,
			o2 = d0.d1.o3,
			o4 = d0.d1.o5,
			o6 = d0.d1.o7,
			o8 = d0.d1.o9,
			oA = d0.d1.oB;
		if (!(ne >= oA.length)) {
			if (oA = oA[ne], o8[ne]) {
				for (n = nf + oA, q = nf; q < n; q++) gi.gj.oE(o0[q], o2[q], o4[q], o6[q]);
				nf += oA, ne++
			} else ++ng >= oA && (ne++, ng = 0);
			return __fx.replay.tick++, 1
		}
		eo.oC("Replay file smaller than expected."), h6.oD(!1), f.eR = 2
	}
	this.nj = 0, this.e = function() {
		ni = nh = ng = nf = ne = 0, __fx.replay.registerHooks({
			advance: () => ns(),
			finishTick: () => gr.render(),
			requestRedraw: () => {
				bR.bS = !0
			},
			isEnded: () => 2 === f.eR,
			getTickInterval: () => bR.nq
		})
	}, this.bQ = function() {
		var np;
		ao.bQ(), __fx.replay.frame() ? nr() : h6.nk() < 1.7 ? 0 === t ? bR.eM >= eM && (np = bR.nq / h6.nk(), eM += np * Math.floor(1 + (bR.eM - eM) / np), 2 === f.eR || e2.hY || !h6.hZ ? nr() : (ns(), gr.render()), t++) : nt() : function() {
			var np;
			if (bR.eM >= eM)
				if (2 === f.eR || e2.hY || !h6.hZ) nr(), eM = bR.eM;
				else {
					for (np = bR.nq / h6.nk(), 16 < (bR.eM - eM) / np && (eM = bR.eM - 16 * np); bR.eM >= eM && 2 !== f.eR;) eM += np, ns();
					gr.render()
				} nt()
		}(), nn(), bR.bS && (bR.bS = !1, no())
	}, this.nb = function() {
		d0.d1.oB.length - ne <= 2 || eo.oC("Replay file larger than expected.")
	}
}

function oF() {
	this.nj = 0, this.bQ = function() {
		oG.bQ(), oH.bQ(), ao.bQ(), bg.af.bQ(), oI.oJ(), hU.oK.bQ(), bR.bS && (bR.bS = !1, bi.aR())
	}
}

function oL() {
	this.oM = new lN, this.oN = new oO, this.oP = new oQ
}

function oR() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function oS() {
	var oT, oU, oV, kt;

	function mY() {
		oX(), 2 !== f.data.tIncomeType && (f.data.tIncomeData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		2 === f.data.tIncomeType && v.aN.oZ(oV.oa(), f.data.tIncomeData, 255)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(23), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(25), L(26), L(27)],
			value: f.data.tIncomeType
		}, function(t) {
			oX(), 2 !== t || f.data.tIncomeData || (f.data.tIncomeData = new Uint8Array(f.g), f.data.tIncomeData.fill(32)), f.data.tIncomeType = t, c4.c5(26)
		})), kt.push(kv)
	}(kt = []), function(kt) {
		var kv;
		1 === f.data.tIncomeType && ((kv = new kw).kz("Value"), kv.l1(new jv({
			t: -1,
			value: f.data.tIncomeValue
		}, 1, 0, function(eL) {
			var value = ds.dt(Math.floor(eL.target.value), 0, 255);
			eL.target.value = f.data.tIncomeValue = value
		})), kt.push(kv))
	}(kt), function(kt) {
		var kv;
		2 === f.data.tIncomeType && ((kv = new kw).kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.tIncomeData, 4)), kv.l1(oV), kt.push(kv))
	}(kt), kt))
}

function ol() {
	var oo, op;
	this.om = 3, this.on = null, this.cG = 0, this.bh = 0;

	function p3() {
		return 0 === oH.p4 ? gc.p5 ? 1 : 0 : oH.p4 - 1
	}

	function pA(bf, p8, p9) {
		op[bf].or = !0, ox(bf), oo[bf] = new pD, oo[bf].e(bf, p8, p9)
	}

	function pB(q) {
		return op[q].or && oo[q].pB()
	}

	function ox(bf) {
		op[bf].eM = bR.eM, op[bf].os = !1
	}
	this.e = function() {
		this.on = new Array(this.om), this.on[0] = "territorial.io", this.on[1] = "1.territorial.io", this.on[2] = "2.territorial.io", oo = new Array(this.om), op = new Array(this.om);
		for (var q = this.om - 1; 0 <= q; q--) op[q] = {
			or: !1,
			eM: 0,
			os: !1
		};
		this.ot(0, 0, 0)
	}, this.ou = function(q) {
		return oo[q]
	}, this.bQ = function() {
		for (var q = this.om - 1; 0 <= q; q--) this.lC(q) && bR.eM > op[q].eM + 15e3 && (bg.ov.ow(q, op[q].os), ox(q));
		!this.lC(0) && bR.eM > op[0].eM + 8e3 && (op[0].eM = bR.eM, this.ot(0, 0, 0))
	}, this.oy = function(id) {
		return this.ot(0, id, 0) && this.oz(0)
	}, this.p0 = function(p1) {
		return p1 ? oH.p2 : p3()
	}, this.p6 = function() {
		return p3() ? "game.territorial.io" : "territorial.io"
	}, this.ky = function(p7) {
		p7 = this.p6() + p7;
		return "<a href='https://" + p7 + "' target='_blank'>" + p7 + "</a>"
	}, this.ot = function(bf, p8, p1) {
		p1 = this.p0(p1);
		if (op[bf].or) {
			if (oo[bf].pB()) return oo[bf].pC(p8), oo[bf].lC();
			oo[bf].eP()
		}
		return pA(bf, p8, p1), !1
	}, this.pE = function(bf, p8) {
		console.log("Connection to Server " + bf), bg.mH.pF(bf)
	}, this.oz = function(q) {
		return this.lC(q) && oo[q].oz()
	}, this.pG = function(q) {
		oo[q].pG()
	}, this.lC = function(q) {
		return op[q].or && oo[q].lC()
	}, this.send = function(bf, li) {
		0 !== bf && ox(bf), oo[bf].send(li)
	}, this.pH = function(bf) {
		8 === bi.bj() && (op[bf].os = !0, bg.pI.pJ = !0)
	}, this.close = function(bf, pK) {
		pB(bf) && oo[bf].close(pK)
	}, this.pL = function(bf, pK) {
		pM.pN(pK), pB(bf) && oo[bf].close(pK)
	}, this.mm = function(pK) {
		for (var q = this.om - 1; 0 <= q; q--) this.close(q, pK)
	}, this.pO = function(bf, pK) {
		for (var q = this.om - 1; 0 <= q; q--) q !== bf && this.close(q, pK)
	}, this.hS = function() {
		0 === this.cG && (f.gB || f.gC) || this.close(this.cG, 3246)
	}, this.pP = function(bf, eL) {
		oo[bf].eP(), pM.pQ(bf, eL.code)
	}
}

function pR(u, size, pS, pT, font) {
	var q, jN = .2,
		canvas = document.createElement("canvas"),
		y = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = u, canvas.height = u, y.font = size + font, y.textAlign = "center", y.textBaseline = "middle", y.fillStyle = "red", q = 0; q < pS.length; q++) y.fillText(pS[q], .5 * u, .5 * u);
	return -1 < (canvas = function(z) {
		var q, pW, jl = z.data;
		for (q = jl.length - 4; 0 <= q; q -= 4)
			if (pW = jl[q], pT <= pW) return Math.floor(q / (4 * u));
		return -1
	}(y.getImageData(0, 0, u, u))) && (jN = (canvas - .5 * u + .1 * size) / size), Math.max(jN, 0)
}

function pX() {
	this.lM = new pY, this.fE = new pZ, this.l9 = new pa, this.af = new pb, this.pc = new pd, this.e = function() {
		this.fE.e(), (new pe).e(), this.pc.e(), this.af.pf()
	}
}

function pg() {
	this.hR = function() {
		var iM = function() {
				for (var oB = d0.d1.oB, n = oB.length, max = 0, q = 0; q < n; q++) max = Math.max(max, oB[q]);
				return py(Math.max(max, 1))
			}(),
			ap = (en = f.data, (ap = pm).e(), ap.pq(12, gc.rVersion), ap.t += 43, ap.pq(2, en.mapType), ap.pq(8, en.mapProceduralIndex), ap.pq(8, en.mapRealisticIndex), ap.pq(14, en.mapSeed), ap.pr(en.mapName, 5), 2 === en.mapType && ap.ps(en
				.canvas), ap.pq(1, en.passableWater), ap.pq(1, en.passableMountains), ap.pq(10, en.playerCount), ap.pq(10, en.humanCount), ap.pq(9, en.selectedPlayer), ap.pq(1, en.gameMode), ap.pq(2, en.playerMode), ap.pq(2, en
				.battleRoyaleMode), ap.pq(4, en.numberTeams), ap.pq(1, en.isZombieMode), ap.pq(1, en.isContest), ap.pq(1, en.isReplay), ap.pt(en.elo, 2, 14), ap.pq(1, en.colorsType), ap.pq(1, en.colorsPersonalized), ap.pt(en.colorsData, 10,
				18), ap.pq(1, en.selectableColor), ap.pt(en.teamPlayerCount, 4, 10), ap.pq(1, en.neutralBots), ap.pq(2, en.botDifficultyType), ap.pq(4, en.botDifficultyValue), ap.pt(en.botDifficultyTeam, 4, 4), ap.pt(en.botDifficultyData, 10,
				4), ap.pq(2, en.spawningType), ap.pq(14, en.spawningSeed), ap.pt(en.spawningData, 11, 12), ap.pq(1, en.selectableSpawn), ap.pq(2, en.playerNamesType), ap.pu(en.playerNamesData, 10, 5), ap.pq(1, en.selectableName), ap.pq(2, en
				.aIncomeType), ap.pq(8, en.aIncomeValue), ap.pt(en.aIncomeData, 10, 8), ap.pq(2, en.tIncomeType), ap.pq(8, en.tIncomeValue), ap.pt(en.tIncomeData, 10, 8), ap.pq(2, en.iIncomeType), ap.pq(8, en.iIncomeValue), ap.pt(en
				.iIncomeData, 10, 8), ap.pq(2, en.sResourcesType), ap.pq(11, en.sResourcesValue), ap.pt(en.sResourcesData, 10, 11), ap.pt(en.pv, 10, 30), ! function(iM) {
				var ap = pm,
					o1 = d0.d1.o1,
					o2 = d0.d1.o3,
					o4 = d0.d1.o5,
					o6 = d0.d1.o7,
					n = o1.length;
				ap.pq(5, iM), ap.pq(30, n), ap.pq(30, d0.d1.oB.length);
				for (var q = 0; q < n; q++) {
					var jA = o1[q];
					ap.pq(4, jA), ap.pq(9, o2[q]), 0 === jA ? ap.pq(22, o4[q]) : 1 === jA ? (ap.pq(10, o4[q]), ap.pq(10, o6[q])) : 2 === jA ? (ap.pq(10, o4[q]), ap.pq(9, o6[q])) : 3 === jA ? (ap.pq(10, o4[q]), ap.pq(27, o6[q])) : 4 === jA ? (
						ap.pq(10, o4[q]), ap.pq(16, o6[q])) : 5 === jA || 6 === jA ? ap.pq(10, o4[q]) : 7 === jA ? ap.pq(1, o4[q]) : 10 === jA && (ap.pq(20, o4[q]), ap.pq(22, o6[q]))
				}
			}(iM), ! function(iM) {
				for (var ap = pm, o9 = d0.d1.o9, oB = d0.d1.oB, n = o9.length, q = 0; q < n; q++) ap.pq(1, o9[q]), ap.pq(iM, oB[q])
			}(iM), pm.t),
			en = ds.kh(ap - 1, 6) + 1,
			iM = (ln.lo(6 * en) !== pm.a8.length && pm.a8.push(0), ! function() {
				var ap = pm;
				ap.t = 24, ap.pq(31, ap.a8.length), ap.t = 12, ap.pq(12, function() {
					for (var a8 = pm.a8, n = a8.length, px = gc.rVersion, q = 3; q < n; q++) px = px + a8[q] & 4095;
					return px
				}())
			}(), bo.e(pm.a8), lz.m0.m1(lz.m0.m2(en)));
		return bo.lj(), pm.e(), iM
	}
}

function pz() {
	var oT, oU, q0, kt;

	function mY() {
		q1.lj(), c4.oY()[19] = null, c4.kp()
	}

	function qD() {
		qJ(), qH()
	}

	function qJ() {
		q0.mJ.lastChild && c4.removeChild(q0.mJ, q0.mJ.lastChild)
	}

	function qH() {
		var qK = au.qL(f.data);
		f.data.canvas = au.qM(qK, f.data.mapSeed).qN, qI()
	}

	function qI() {
		var k = f.data.canvas;
		k.style.width = "100%", q0.mJ.appendChild(k)
	}
	this.qO = function(k) {
		f.data.canvas && qJ(), f.data.canvas = k, qI()
	}, this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(28), [new k7("⬅️ " + L(6), mY)]), 2 === f.data.mapType && q1.e(), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(29), L(30), L(31)],
			value: f.data.mapType
		}, function(t) {
			2 === (f.data.mapType = t) ? (q1.e(), f.data.canvas = null) : (f.data.passableWater = f.data.passableMountains = 1, q1.lj()), c4.c5(20)
		})), 2 <= f.data.mapType && (kv.l1(new q8), kv.l1(new q9({
			value: f.data.passableWater
		}, L(32), function(value) {
			f.data.passableWater = value
		})), kv.l1(new q9({
			value: f.data.passableMountains
		}, L(33), function(value) {
			f.data.passableMountains = value
		})));
		kt.push(kv)
	}(kt = []), function(kt) {
		if (0 === f.data.mapType) {
			for (var kv = new kw, oh = (kv.kz(L(28)), []), q = 0; q < au.nD.qA.length; q++) oh.push(au.nD.qB[au.nD.qA[q]].name);
			kv.oe(new og({
				oh: oh,
				value: f.data.mapProceduralIndex
			}, function(t) {
				f.data.mapProceduralIndex = t, qD()
			})), kt.push(kv)
		}
	}(kt), function(kt) {
		if (1 === f.data.mapType) {
			for (var kv = new kw, oh = (kv.kz(L(28)), []), q = 0; q < au.nD.qE.length; q++) oh.push(au.nD.qB[au.nD.qE[q]].name);
			kv.oe(new og({
				oh: oh,
				value: f.data.mapRealisticIndex
			}, function(t) {
				f.data.mapRealisticIndex = t, qD()
			})), kt.push(kv)
		}
	}(kt), function(kt) {
		var kv;
		2 === f.data.mapType && ((kv = new kw).kz(L(34)), kv.l1(new jv(fa.fE.data[162], 1)), kv.kz(L(35), "0.8em"), kv.l1(new lB([new k7(L(36), function() {
			return q1.qF(), !0
		}).button])), kt.push(kv))
	}(kt), function(kt) {
		var kv, ju;
		2 === f.data.mapType && ((kv = new kw).kz(L(37)), ju = new jv({
			t: -1,
			value: f.data.mapName
		}, 0, 0, function(eL) {
			f.data.mapName = eL.target.value = eL.target.value.slice(0, 20)
		}), kv.l1(ju), kt.push(kv))
	}(kt), function(kt) {
		var kv, ju, qG;
		0 === f.data.mapType && ((kv = new kw).kz("Seed"), ju = new jv({
			t: -1,
			value: f.data.mapSeed
		}, 1, 0, function(eL) {
			eL = Math.abs(Math.floor(eL.target.value)) % 16384;
			f.data.mapSeed !== eL && (f.data.mapSeed = eL, qD())
		}), qG = new k7(L(38), function(eL) {
			var nJ = Math.floor(16384 * Math.random());
			if (f.data.mapSeed !== nJ) return ju.eL.value = f.data.mapSeed = nJ, qD(), !0
		}), kv.l1(ju), kv.l1(new lB([qG.button])), kt.push(kv))
	}(kt), function(kt) {
		(q0 = new kw).kz(L(39)), 2 !== f.data.mapType ? qH() : f.data.canvas && qI();
		kt.push(q0)
	}(kt), kt))
}

function qP() {
	var qU, qV, qQ = document.createElement("div"),
		qR = document.createElement("div"),
		qS = document.createElement("div"),
		qT = document.createElement("div"),
		me = [],
		bK = [L(40), L(41), L(42), L(43), L(44), L(45), L(46), L(47)],
		qW = [1, 2, 3, 0, 9, 10, 11, 13];

	function qZ(q) {
		c4.c5(8, 0, new qh(21, {
			qi: qW[q],
			qj: 0,
			qk: 10
		}))
	}
	this.show = function() {
			this.lA(c4.af.ql), document.body.appendChild(qQ)
		}, this.eP = function() {
			c4.removeChild(document.body, qQ)
		}, this.lA = function(ql) {
			for (var qm = [3, 0, 1, 2, 4, 5, 6, 7], q = 0; q < me.length; q++) {
				var ap = ql[q];
				qU[qm[q]][1].kB.textContent = ap || ""
			}
		}, this.resize = function() {
			var q, kj = fx.gap,
				ar = v.w.qn(.085),
				ap = Math.min(4 * ar, ao.ap - 2 * kj),
				n = me.length;
			for (v.w.qo(qQ, kj, ao.ar - kj - ar, ap, ar), v.w.kV(qQ), v.w.kV(qR, 6), q = 0; q < n - 1; q++) v.w.kV(me[q].button, 6);
			for (q = 0; q < n; q++) qU[q][0].resize(), qU[q][1].resize();
			for (me[0].aD = 0, me[0].button.style.left = v.w.kU(me[0].aD), me[0].button.style.width = v.w.qp(1.7 * ar), q = 1; q < n; q++) me[q].aD = me[q - 1].aD + me[q - 1].button.offsetWidth, me[q].button.style.left = v.w.kU(me[q].aD);
			if (!qV) {
				if (!iQ.qq()) return;
				(qV = iQ.get(14)).style.width = "24%", qV.style.position = "absolute", qR.appendChild(qV)
			}
			qV.style.left = v.w.kU(0), qV.style.top = "7%", qS.qr && (qS.scrollLeft = qS.qr)
		}, qQ.style.position = "absolute", qR.style.width = "25%", qR.style.height = "100%", qR.style.backgroundColor = b7.qX, qS.style.position = "absolute", qS.style.width = "75%", qS.style.height = "100%", qS.style.backgroundColor = b7.qX, qS
		.style.top = qS.style.right = v.w.kU(0), v.w.qY(qS), qT.style.height = qT.style.maxHeight = "100%", me.push(new k7("", function() {
			qZ(0)
		}, b7.qa)), me.push(new k7("", function() {
			qZ(1)
		}, b7.qb)), me.push(new k7("", function() {
			qZ(2)
		}, b7.qc)), me.push(new k7("", function() {
			qZ(3)
		}, b7.qd)), me.push(new k7("", function() {
			qZ(4)
		}, b7.qe)), me.push(new k7("", function() {
			qZ(5)
		}, b7.qf)), me.push(new k7("", function() {
			qZ(6)
		}, b7.qe)), me.push(new k7("", function() {
			qZ(7)
		}, b7.bc)), qU = new Array(me.length);
	for (var q = 0; q < me.length; q++) me[q].button.style.position = "absolute", qU[q] = [new qg(bK[q], me[q].button, .25, .45), new qg("", me[q].button, .53, .84, 1)], me[q].button.style.height = me[q].button.style.maxHeight = "100%", me[q].button
		.top = v.w.kU(0), qT.appendChild(me[q].button);
	qS.appendChild(qT), qQ.appendChild(qR), qQ.appendChild(qS)
}

function oi(qs, qt, qu, qv) {
	var qw = document.createElement("textarea"),
		qx = (this.eL = qw, !0);

	function r3() {
		qw.select(), document.execCommand("copy")
	}
	this.resize = function() {
			qt && v.w.kV(qw, 5)
		}, this.oj = function(r0) {
			qw.value = r0
		}, this.oa = function() {
			return qw.value
		}, this.r1 = function() {
			qw.select()
		}, this.clear = function() {
			qw.value = ""
		}, this.r2 = function() {
			qx && navigator.clipboard ? (qw.select(), navigator.clipboard.writeText(qw.value).catch(function() {
				qx = !1, r3()
			})) : r3()
		}, qw.setAttribute("id", "textArea" + c4.af.qy++), qw.setAttribute("autocomplete", "off"), qs && qw.setAttribute("placeholder", qs), qw.style.top = "0", qw.style.left = "0", qw.style.width = "100%", qw.style.height = "100%", qw.style
		.userSelect = "none", qw.style.outline = "none", qw.style.resize = "none", qw.style.border = "none", qw.style.color = b7.b9, qw.style.backgroundColor = b7.fv, qv ? (qw.style.fontSize = "1em", qw.rows = 6, qw.style.padding = "0.25em") : (qw
			.style.padding = "0.45em", qw.style.fontSize = "1.2em"), qu && qw.addEventListener("input", function(eL) {
			qu(eL)
		}), qw.addEventListener("focus", function() {
			ao.qz++
		}), qw.addEventListener("blur", function() {
			ao.qz--
		})
}

function r4(r5) {
	var r6 = document.createElement("div");

	function r8() {
		r9.rA() || (r6.style.backgroundColor = v.color.rB(b7.qX, 50))
	}

	function r7() {
		r6.style.backgroundColor = b7.qX
	}
	this.lA = function(cQ) {
			r6.textContent = cQ
		}, this.show = function() {
			document.body.appendChild(r6)
		}, this.resize = function() {
			var ar = v.w.kP(.03, .5);
			r6.style.width = 2 * ar + "px", r6.style.height = ar + "px", r6.style.font = v.w.bA(1, .75 * ar), v.w.kV(r6, 4), v.w.kV(r6, 2)
		}, this.lj = function() {
			r6.onclick = null, r6.onmouseover = null, r6.onmouseout = null, c4.removeChild(document.body, r6), r6 = null
		}, r6.style.position = "absolute", r7(), r6.style.color = b7.b9, r6.style.zIndex = "3", r6.style.right = "0", r6.style.top = "0", r6.style.display = "flex", r6.style.justifyContent = "center", r6.style.alignItems = "center", r6.style
		.userSelect = "none", r6.style.outline = "none", r6.onclick = r5, r6.onmouseover = r8, r6.onmouseout = r7
}

function rC() {
	function rb(a8, qj, qk) {
		var rc = a8[qj];
		a8[qj] = a8[qk], a8[qk] = rc
	}
	this.n8 = [
		[],
		[],
		[],
		[]
	], this.by = [0, 0, 0, 0], this.rD = [], this.c0 = function(rE, cW, username, rF, rG, rH, elo, color, rI, rJ) {
		username = this.rL(cW, username, rF, rG, rH, elo, color, rI, rJ);
		this.n8[rE].push(username), bk.rM === cW && (bk.rN = username), bk.rO.rP(cW) && (username.rQ = 1), bk.af.nM += 29 === c4.rR && bk.af.kF[0] === rE && 1 === bk.af.kF[2]
	}, this.rL = function(cW, username, rF, rG, rH, elo, color, rI, rJ) {
		return {
			cW: cW,
			username: __fx.nameFilter.filter(username),
			rF: rF,
			rG: rG,
			rH: rH,
			elo: elo,
			color: color,
			rI: rI,
			rJ: rJ
		}
	}, this.cE = function(t, rE, rF, rG, rH, elo, rI, color) {
		t = this.n8[rE][t];
		t.rF = rF, t.rG = rG, t.rH = rH, t.elo = elo, t.rI = rI, t.color = color, bk.af.nM += 29 === c4.rR && bk.af.kF[0] === rE && 1 === bk.af.kF[2]
	}, this.cF = function(t, rE, rS) {
		var t = this.n8[rE][t],
			rT = t.username,
			rU = "Redacted " + lz.m0.bC(t.cW, 2);
		t.username = rS ? "[" + v.bB.rV(rT) + "] " + rU : rU, rT.indexOf("Redacted") < 0 && (t.rW = rT), bk.cT.rX(t.cW), bk.af.nM += 29 === c4.rR && bk.af.kF[0] === rE && 1 === bk.af.kF[2]
	}, this.cC = function(t, rY, rZ) {
		var player = this.n8[rY][t];
		this.cD(t, rY), this.n8[rZ].push(player), bk.af.nM += 29 === c4.rR && bk.af.kF[0] === rZ && 1 === bk.af.kF[2]
	}, this.cD = function(t, rY) {
		var bx = this.n8[rY];
		this.rD.push(bx[t]), 1e3 < this.rD.length && this.rD.shift(), t >= this.by[rY] ? bx[t] = bx[bx.length - 1] : (this.by[rY]--, 2 === rY ? (bx.splice(this.by[rY] + 1, 0, bx[bx.length - 1]), bx.splice(t, 1)) : (bx[t] = bx[this.by[rY]], bx[
			this.by[rY]] = bx[bx.length - 1])), bx.pop(), bk.af.nM += 29 === c4.rR && bk.af.kF[0] === rY && 1 === bk.af.kF[2]
	}, this.cB = function(t, cN) {
		bk.af.nM += 29 === c4.rR && bk.af.kF[0] === cN && 1 === bk.af.kF[2];
		var bx = this.n8[cN],
			en = bx[t];
		if (2 === cN)
			if (t >= this.by[cN]) {
				bk.rO.join(en);
				for (var ra = this.by[cN], elo = en.elo; ra && elo > bx[ra - 1].elo;) ra--;
				bx[t] = bx[this.by[cN]], bx.splice(this.by[cN]++, 1), bx.splice(ra, 0, en)
			} else bx.splice(this.by[cN]--, 0, en), bx.splice(t, 1);
		else t >= this.by[cN] ? (bk.rO.join(en), rb(bx, this.by[cN]++, t)) : rb(bx, --this.by[cN], t)
	}, this.rd = function(cW) {
		for (var n8 = this.n8, n = n8.length, q = 0; q < n; q++)
			for (var bx = n8[q], aL = bx.length, bz = 0; bz < aL; bz++)
				if (cW === bx[bz].cW) return bx[bz];
		return null
	}
}

function re() {
	function s2() {
		return {
			av: au.av,
			fp: au.fp,
			qN: au.qN,
			ri: au.ri,
			rj: au.rj,
			rk: au.rk,
			bq: au.bq,
			mapSeed: au.mapSeed,
			rl: au.rl
		}
	}

	function rs(q) {
		return 1 !== q && au.ru(q) && q !== au.s5()
	}
	this.rf = 25, this.rg = 13, this.rh = 4096, this.av = 0, this.fp = 0, this.qN = null, this.ri = null, this.rj = null, this.rk = null, this.bq = 0, this.mapSeed = 0, this.rl = !1, this.rm = new rn, this.nD = new ro, this.rp = new rq, this.e =
		function() {
			this.nD.e()
		}, this.gw = function(map, rr) {
			((map %= this.rf) !== this.bq || rs(this.bq) && rr !== this.mapSeed) && (this.rl = !1, this.rm.rt(), ge.gf(map), this.bq = map, this.mapSeed = rr, rs(map) && (au.nD.qB[map].nJ = rr), this.ru(this.bq) ? (map = au.nD.qB[this.bq], this.av =
				map.ap, this.fp = map.ar, ge.gf(map.nJ), rw.gw([this.av, this.fp, map.rx, map.ry]), rz(), gp.s0(), rw.s1()) : rv())
		}, this.qM = function(map, rr) {
			var o2 = s2(),
				map = (this.gw(map, rr), this.rm.rt(), s2());
			return rr = o2, au.av = rr.av, au.fp = rr.fp, au.qN = rr.qN, au.ri = rr.ri, au.rj = rr.rj, au.rk = rr.rk, au.bq = rr.bq, au.mapSeed = rr.mapSeed, au.rl = rr.rl, map
		}, this.s4 = function(canvas) {
			canvas && this.qN !== canvas && (this.av = canvas.width, this.fp = canvas.height, this.qN = canvas, this.ri = this.qN.getContext("2d", {
				alpha: !1
			}), this.z = this.ri.getImageData(0, 0, this.av, this.fp), this.rk = this.z.data, this.bq = this.s5(), this.mapSeed = 0, au.nD.qB[this.bq].name = f.data.mapName)
		}, this.s6 = function(q) {
			return 3 === q || 7 === q || 9 === q || 21 === q || q === this.s5()
		}, this.s7 = function(q) {
			return 2 === q || 7 === q || 9 === q || 20 === q
		}, this.s8 = function(q) {
			return 1 === q
		}, this.s5 = function() {
			return this.rf
		}, this.ru = function(q) {
			return void 0 === this.nD.qB[q].s9
		}, this.qL = function(en) {
			return 0 === en.mapType ? en.mapProceduralIndex < 10 ? en.mapProceduralIndex : 10 + en.mapProceduralIndex : 1 === en.mapType ? 10 <= en.mapRealisticIndex ? 22 + en.mapRealisticIndex - 10 : en.mapRealisticIndex + 10 : void 0
		}, this.sA = function(en, sB) {
			0 === en.mapType ? en.mapProceduralIndex = sB < 10 ? sB : sB - 10 : 1 === en.mapType && (en.mapRealisticIndex = sB - (22 <= sB ? 12 : 10))
		}
}

function sC() {
	this.data = new sD;
	var sE = (new sF).L84,
		sI = (this.sG = sE, !(this.sH = "en"));
	this.e = function() {
		var lI, a8;
		sI = !1, ("en" === (lI = fa.fE.data[12].value).split("-")[0].toLowerCase() ? (sR.sG = sE, sR.sH = lI, 1) : fa.fE.data[12].value === fa.fE.data[145].value && 0 < fa.fE.data[146].value && (lI = fa.fE.data[146].value, (a8 = fa.lM.sS(lI, !1))
			.length === lI) && !!v.aN.sT(a8) && function(a8) {
			for (var n = a8.length, ar = 0; ar < n; ar++) a8[ar] = a8[ar].replace("&#39;", "'");
			var sV = fa.lM.sS(n, !0);
			if (n !== sV.length) return !1;
			if (!v.aN.sT(sV)) return !1;
			for (var aL = sE.length, sW = new Array(aL), sX = aL === n, jB = Math.min(n, aL), q = 0; q < aL; q++)
				if (sW[q] = sE[q], q < n && sV[q] === sW[q]) sW[q] = a8[q];
				else {
					sX = !1;
					for (var jO = 0; jO < jB; jO++)
						if (sV[jO] === sW[q]) {
							sW[q] = a8[jO];
							break
						}
				} return sR.sG = sW, sR.sH = fa.fE.data[12].value, sX
		}(a8)) || (sI = !0)
	}, this.sN = function() {
		l.go(), gv.go(), h1.go(), dL.go(), oG.e(), sO = new sP
	}, this.sQ = function() {
		return this.sG === sE || !sE.length
	}, this.sY = function() {
		var sZ;
		return !!sI && (sI = !1, 0 !== sE.length) && (sZ = fa.fE.data[12].value, bg.mH.sa(0, sZ.slice(0, 20)), !0)
	}, this.sb = function(a8) {
		a8.length !== sE.length ? 8 === c4.rR && c4.mt().sc(30, 0, 1) : (this.sG = a8, this.sH = fa.fE.data[12].value, fa.l9.lA(145, this.sH), fa.l9.lA(146, a8.length), fa.lM.sd(a8, !1), fa.lM.sd(sE, !0), 8 === c4.rR ? c4.mt().sc(30) : 0 === bi
			.bj() && 5 === c4.rR && c4.af.se())
	}, this.sf = function() {
		var sg, a8 = navigator.languages;
		return a8 && a8.length ? (sg = Math.max(sR.data.sh(a8[0]), 0), 1 === a8.length ? [sg, sg] : [sg, Math.max(sR.data.sh(a8[1]), 0)]) : [0, 0]
	}
}

function sl() {
	var sm, sn, so, bG, sp, sq = 0,
		sr = 0;

	function su(q) {
		var sw = !0,
			jU = b7.b9,
			ap = (1 === sm[q].id ? sm[q].sx.fillStyle = b7.sy : sm[q].d7 === f.g ? sm[q].sx.fillStyle = b7.sz : (a6.a7(sm[q].d7), sm[q].sx.fillStyle = v.color.t0(a9.aA[0], a9.aA[1], a9.aA[2], .87), 400 < v.aN.t1(a9.aA, 0, 2) && (sw = !1, jU = b7
				.bc)), sm[q].canvas.width),
			t3 = (sm[q].sx.clearRect(0, 0, ap, bG), sm[q].sx.fillRect(0, 0, ap, bG), sm[q].sx.fillStyle = jU, ! function(sx, ap, bG) {
				sx.fillRect(0, 0, ap, 1), sx.fillRect(0, bG - 1, ap, 1), sx.fillRect(0, 0, 1, bG), sx.fillRect(ap - 1, 0, 1, bG)
			}(sm[q].sx, ap, bG), sn + 2 * bG < ap && (sm[q].sx.fillRect(ap - sn - bG, 0, 1, bG), sm[q].sx.fillText(ci.ew[sm[q].d7], Math.floor((ap - sn) / 2), Math.floor(.57 * bG))), 0 !== sm[q].id ? 0 : bG);
		sm[q].sx.fillText(v.bB.bC(sm[q].aW), Math.floor(ap - sn / 2 - t3), Math.floor(.57 * bG)),
			function(q, ap, t3, sw) {
				sm[q].sx.fillStyle = sw ? b7.t7 : b7.k5;
				sw = Math.floor(sn * sm[q].aW / sm[q].t9);
				sm[q].sx.fillRect(Math.floor(ap - sn - t3), bG - sp, sw, sp)
			}(q, ap, t3, sw), 0 === sm[q].id ? (t5(q, ap, sw, jU), function(q, ap, sw) {
				sm[q].sx.strokeStyle = sw ? b7.tD : b7.tE, sm[q].sx.fillRect(bG, 0, 1, bG);
				sw = ap - bG;
				sm[q].sx.beginPath(), sm[q].sx.moveTo(Math.floor(.3 * bG + sw), Math.floor(bG / 2)), sm[q].sx.lineTo(Math.floor(bG - .3 * bG + 0 + sw), Math.floor(bG / 2)), sm[q].sx.stroke(), sm[q].sx.beginPath(), sm[q].sx.moveTo(Math.floor(bG /
					2 + sw), Math.floor(.3 * bG)), sm[q].sx.lineTo(Math.floor(bG / 2 + sw), Math.floor(bG - .3 * bG + 0)), sm[q].sx.stroke()
			}(q, ap, sw)) : t5(q, 2 * bG, sw, jU)
	}

	function t5(q, ap, sw, jU) {
		sm[q].sx.strokeStyle = sm[q].tA ? b7.tB : sw ? b7.b8 : b7.tC, sm[q].sx.fillStyle = jU, sm[q].sx.fillRect(ap - bG, 0, 1, bG), sm[q].sx.lineWidth = Math.max(Math.floor(bG / 12), 3), sm[q].sx.lineCap = "round";
		sw = .35;
		ap = bG + 1, sm[q].sx.beginPath(), sm[q].sx.moveTo(Math.floor(ap - sw * bG + 0), Math.floor(sw * bG)), sm[q].sx.lineTo(Math.floor(ap - bG + sw * bG), Math.floor(bG - sw * bG + 0)), sm[q].sx.stroke(), sm[q].sx.beginPath(), sm[q].sx.moveTo(Math
			.floor(ap - bG + sw * bG), Math.floor(sw * bG)), sm[q].sx.lineTo(Math.floor(ap - sw * bG + 0), Math.floor(bG - sw * bG + 0)), sm[q].sx.stroke()
	}

	function tV(a8, tS) {
		for (var aW, q = tS - 1; 0 <= q; q--) aW = dC.tf(f.al, q), a8[q].aW !== aW && (a8[q].aW = aW, a8[q].t9 = Math.max(aW, a8[q].t9), a8[q].sv = !0)
	}

	function tZ(a8, tX) {
		for (var qj = f.al << 3, ah = ae.af.ah, tg = ae.af.tg, td = ae.af.td, q = tX - 1; 0 <= q; q--) {
			var te = td[qj + q],
				aW = ah[te];
			a8[q].aW !== aW ? (a8[q].aW = aW, a8[q].t9 = Math.max(aW, a8[q].t9), a8[q].sv = !0) : a8[q].tA || tg[te] % 64 != 5 || (a8[q].tA = !0, a8[q].sv = !0)
		}
	}

	function st(th) {
		th.canvas = document.createElement("canvas"), au.ri.font = so;
		var ap = sn;
		th.d7 < f.g && 0 === th.id && (ap += Math.floor(au.ri.measureText(ci.ew[th.d7] + "000").width)), ap += bG, 0 === th.id && (ap += bG), th.canvas.width = ap, th.canvas.height = bG, th.sx = th.canvas.getContext("2d", {
			alpha: !0
		}), th.sx.font = so, v.w.textBaseline(th.sx, 1), v.w.textAlign(th.sx, 1)
	}

	function tL(q) {
		return h7.tj() ? ao.ap - sm[q].canvas.width - fx.gap : h7.aD
	}

	function tM(q) {
		return Math.floor(2 * fx.gap + (h7.tj() ? h8.ar + fx.gap : 0) + h7.ar + q * (1.3 * bG))
	}
	this.e = function() {
		sq = sr = 0, sm = [], this.resize()
	}, this.resize = function() {
		so = eo.ss, bG = eo.fontSize + 5, bG = Math.floor(1.25 * bG), bL.bM.bN() && (bG = Math.floor(1.25 * bG)), sp = Math.floor(.15 * bG), au.ri.font = so, sn = Math.floor(au.ri.measureText("02 000 000 0000").width);
		for (var q = sm.length - 1; 0 <= q; q--) st(sm[q]), su(q)
	}, this.hM = function() {
		for (var q = sm.length - 1; 0 <= q; q--) sm[q].sv && (sm[q].sv = !1, su(q))
	}, this.fY = function(fg, fh) {
		if (2 !== f.eR && 0 !== ci.hL[f.al] && !f.gC && !v.cw.is(f.al))
			for (var tG, tH, tI, tJ = bL.bM.bN() ? bG : 0, tK = bL.bM.bN() ? Math.floor(.15 * bG) : 0, q = sm.length - 1; 0 <= q; q--)
				if (tG = tL(q), tH = tM(q), tI = sm[q].canvas.width, tH - tK <= fh && fh <= tH + bG + tK) {
					if (tG - tJ <= fg && fg <= tG + bG + tJ) return sm[q].tA || (sm[q].sv = !0, sm[q].tA = !0, 0 === sm[q].id ? gi.gl.dm(sm[q].d7) : gi.gl.di(sm[q].d7)), !0;
					if (0 === sm[q].id && tG + tI - bG - tJ <= fg && fg <= tG + tI + tJ) return gt.tN(3), gi.gl.d5(h5.kb(), sm[q].d7), !0
				} return !1
	}, this.bQ = function() {
		var tO, tP, a8, tS;
		0 === ci.hL[f.al] || v.cw.is(f.al) && !f.gC || (tO = sm.slice(0, sq), tP = sm.slice(sq, sq + sr), a8 = tO, tS = dC.tT(f.al), function(a8, tS) {
			if (sq !== tS) return 1;
			for (var q = tS - 1; 0 <= q; q--)
				if (a8[q].d7 !== dC.tb(f.al, q)) return 1;
			return
		}(a8, tS) ? tV(a8 = function(a8, tS) {
			var q, d7, jO, aW, ti = [];
			loop: for (q = 0; q < tS; q++) {
				for (d7 = dC.tb(f.al, q), jO = 0; jO < a8.length; jO++)
					if (a8[jO].d7 === d7) {
						ti.push(a8.splice(jO, 1)[0]);
						continue loop
					} aW = dC.tf(f.al, q), st(aW = {
					d7: d7,
					aW: aW,
					t9: aW,
					id: 0,
					sv: !0,
					tA: !1,
					canvas: null,
					sx: null
				}), ti.push(aW)
			}
			return ti
		}(a8, tS), tS) : tV(a8, tS), tO = a8, tP = function(a8) {
			var tX = ae.af.cg[f.al];
			return function(a8, tX) {
				if (sr !== tX) return 1;
				for (var qj = f.al << 3, tc = ae.af.tc, td = ae.af.td, q = tX - 1; 0 <= q; q--) {
					var te = td[qj + q];
					if (a8[q].d7 !== tc[te]) return 1
				}
				return
			}(a8, tX) ? tZ(a8 = function(a8, tX) {
				var q, d7, jO, ti = [],
					qj = f.al << 3,
					tc = ae.af.tc,
					ah = ae.af.ah,
					td = ae.af.td;
				loop: for (q = 0; q < tX; q++) {
					var te = td[qj + q];
					for (d7 = tc[te], jO = 0; jO < a8.length; jO++)
						if (a8[jO].d7 === d7) {
							ti.push(a8.splice(jO, 1)[0]);
							continue loop
						} te = ah[te], st(te = {
						d7: d7,
						aW: te,
						t9: te,
						id: 1,
						sv: !0,
						tA: !1,
						canvas: null,
						sx: null
					}), ti.push(te)
				}
				return ti
			}(a8, tX), tX) : tZ(a8, tX), a8
		}(tP), sq = tO.length, sr = tP.length, sm = tO.concat(tP))
	}, this.aR = function() {
		if (0 !== ci.hL[f.al] && (!v.cw.is(f.al) || f.gC))
			for (var q = sm.length - 1; 0 <= q; q--) b5.drawImage(sm[q].canvas, tL(q), tM(q))
	}
}

function tk() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
			"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
		], this.jJ = 13, this.tl = this.emojis.length, this.tm = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.tm, this.tn = 1024, this.tp = this.emojis.indexOf("💀"),
		this.tq = this.tp + 1, this.tr = this.emojis.indexOf("🥇"), this.ts = this.emojis.indexOf("😊"), this.jK = function(kk) {
			return kk < this.tm ? String.fromCharCode(55356, 56806 + ds.kh(kk, 26), 55356, 56806 + kk % 26) : this.emojis[Math.min(kk - this.tm, this.tl - 1)]
		}, this.tt = function(lI) {
			for (var n = lI.length - 2, a8 = [], q = 0; q < n; q++) {
				var jU = lI.charCodeAt(q) - 56806,
					jV = lI.charCodeAt(q + 2) - 56806;
				0 <= jU && jU < 26 && 0 <= jV && jV < 26 && (a8.push(26 * jU + jV), q += 3)
			}
			return a8
		}, this.iY = function(kk) {
			return kk < this.tm
		}, this.jG = function(kk) {
			return kk >= 1024 - this.jJ
		}, this.jE = function(kk) {
			return kk >= this.tm && kk < this.tm + this.tq
		}
}

function tu() {
	var oT, oU, oV, kt;

	function mY() {
		oX(), 2 === f.data.playerNamesType && 1 === v.aN.t1(f.data.playerNamesData).length && (f.data.playerNamesType = 0), 2 !== f.data.playerNamesType && (f.data.playerNamesData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		2 === f.data.playerNamesType && v.aN.tw(oV.oa(), f.data.playerNamesData, 20)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(48), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(49), L(50), L(27)],
			value: f.data.playerNamesType
		}, function(t) {
			oX(), f.data.playerNamesType = t, c4.c5(23)
		})), kv.l1(new q8), kv.l1(new q9({
			value: f.data.selectableName
		}, L(51), function(value) {
			f.data.selectableName = value
		})), kt.push(kv)
	}(kt = []), function(kt) {
		var kv;
		2 === f.data.playerNamesType && ((kv = new kw).kz("Data"), oV = new oi(0, 1, 0, 1), f.data.playerNamesData && f.data.playerNamesData.length === f.g || (f.data.playerNamesData = new Array(f.g), f.data.playerNamesData.fill("")), oV
			.oj(v.bB.ok(f.data.playerNamesData, 1, '"')), kv.l1(oV), kt.push(kv))
	}(kt), kt))
}

function tx() {
	var ty, a8;
	this.e = function() {
		for (var q = (a8 = new Uint16Array(101)).length - 1; 0 <= q; q--) a8[q] = ds.kh(32768 * q, 100);
		this.gf(0)
	}, this.value = function(es) {
		return a8[es]
	}, this.tz = function() {
		return ds.kh(ty - 1, 2)
	}, this.gf = function(nJ) {
		ty = 2 * nJ % 32768 + 1
	}, this.random = function() {
		return ty = 167 * ty % 32768
	}, this.u0 = function(u1) {
		return ds.kh(u1 * this.random(), 32768)
	}, this.u2 = function(es) {
		return 0 !== es && this.random() < this.value(es)
	}, this.u3 = function(bz, jO) {
		return bz + this.u0(jO - bz)
	}
}

function u4() {
	this.gm = 1, this.cv = function(a2) {
		f.gB ? gi.u5.cv(f.al, a2) : bg.ov.u6(a2)
	}, this.d5 = function(d6, d7) {
		this.gm && (this.gm = 0, fa.l9.lA(182, d6)), f.gB ? gi.u5.d5(f.al, d6, d7) : bg.ov.u7(d6, d7)
	}, this.dW = function(d6, dP) {
		f.gB ? gi.u5.dO(f.al, d6, dP) : bg.ov.u8(d6, dP)
	}, this.dX = function(d6, a2) {
		a2 = (a2 << 3) + a9.cn[6];
		f.gB ? gi.u5.dX(f.al, d6, a2) : ae.dZ.ce(f.al) && bg.ov.u9(d6, a2)
	}, this.dg = function(d6) {
		849 === d6 && (d6 = 850);
		var dh = a9.cn[3];
		f.gB ? gi.u5.dg(f.al, d6, dh) : ae.dj.uA(f.al, dh) && bg.ov.uB(d6, dh)
	}, this.di = function(dh) {
		f.gB ? gi.u5.di(f.al, dh) : bg.ov.uB(849, dh)
	}, this.dm = function(d7) {
		f.gB ? gi.u5.dm(f.al, d7) : bg.ov.uC(d7)
	}, this.uD = function(dr) {
		f.gB ? gi.u5.dq(f.al, dr) : bg.ov.uE(dr)
	}, this.dw = function(dx) {
		f.gB ? gi.u5.dw(f.al, dx) : bg.ov.uF(dx)
	}, this.e1 = function() {
		f.gB ? gi.u5.e1(f.al) : bg.ov.uG()
	}, this.dn = function() {
		f.gB ? gi.u5.dn(f.al) : bg.ov.uC(513)
	}, this.e7 = function(d6, a2, d7) {
		f.gB ? gi.u5.e7(f.al, d6, a2, d7) : bg.ov.uH(d6, a2, d7)
	}
}

function uI() {
	function uM(player, uK) {
		uK = cq.uT(ae.af.ad[uK]), uK = a6.uV(cq.cr(uK));
		return !!ae.co.uW(player, uK)
	}

	function uJ(player) {
		return ae.dZ.ce(player) && !ae.um.ur()
	}
	this.ka = function(player, a2) {
		return !!uJ(player) && -1 !== (a2 = function(player, a2) {
			for (var n = ae.af.am, ad = ae.af.ad, ag = ae.af.ag, uo = cq.up(), uq = -1, q = 0; q < n; q++) {
				var aH = cq.uc(a2, cq.uT(ad[q]));
				aH < uo && v.cw.uX(player, ag[q] >> 3) && (uo = aH, uq = q)
			}
			return uq
		}(player, a2)) && !!uM(player, a2) && (a9.cn[3] = ae.af.tc[a2], !0)
	}, this.uA = function(player, dh) {
		return !!uJ(player) && !!ae.co.uN(dh) && !!uM(player, a9.cn[2])
	}, this.dk = function(player, dh, uO) {
		return !! function(player, dh, uO) {
			if (uJ(player) && ae.co.uN(dh)) {
				dh = a9.cn[2];
				if (v.cw.uX(player, ae.af.ag[dh] >> 3)) {
					if (function(player, uK) {
							return ae.co.ul(player, uK) && (a9.a8[0] = ae.um.un(ae.af.uf[uK]), a9.cn[1] = 6, !0)
						}(player, dh)) return 1;
					var uS = cq.uT(ae.af.ad[dh]),
						uZ = ae.co.ua(player, uS);
					if (-1 !== uZ) {
						uZ = cq.uc(uZ, uS);
						if (!(uO && 120 < uZ)) {
							uO = function(uK, ub, uS) {
								var ue = ae.af.uf[uK],
									uK = ae.af.uh[uK],
									ui = cq.uc(uS, ue[uK + 1]);
								if (ub <= ui) return ae.co.uj(uS, ue[uK + 1], ui, ub);
								for (var aH = ub - ui, n = ue.length - 1, q = uK + 1; q < n; q++) {
									var uk = cq.uc(ue[q], ue[q + 1]);
									if (aH <= uk) return ae.co.uj(ue[q], ue[q + 1], uk, aH);
									aH -= uk
								}
								return ue[n]
							}(dh, uZ, uS);
							if (ae.da.db(player, uO, 1)) return a9.cn[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, dh, uO) && (player = a9.cn[2], ae.af.tg[player] = 64 + ae.af.tg[player] % 64, ae.uQ.d4(dh, ae.af.uR), !0)
	}
}

function us() {
	var ut;

	function v9(k, jN, aD, aE, globalAlpha) {
		au.ri.save(), au.ri.globalAlpha = globalAlpha, au.ri.imageSmoothingEnabled = !1, au.ri.scale(jN, jN), au.ri.drawImage(k, Math.floor(aD * (au.av / jN - k.width)), Math.floor(aE * (au.fp / jN - k.height))), au.ri.restore()
	}
	this.uu = 0, this.uv = 0, this.uw = 0, this.rp = 0, this.e = function() {
		(ut = new Array(au.rf))[0] = {
			ap: [0, 5e3, 8e3, 1e4],
			pW: [220, 250, 255, 220],
			kj: [190, 220, 0, 0],
			jO: [170, 200, 0, 0]
		}, ut[1] = {
			ap: [0, 4e3, 5e3, 6e3, 1e4],
			pW: [25, 0, 100, 0, 25],
			kj: [25, 0, 0, 0, 25],
			jO: [25, 0, 0, 0, 25]
		}, ut[2] = {
			ap: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			pW: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			kj: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			jO: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, ut[3] = {
			ap: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			pW: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			kj: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			jO: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, ut[4] = {
			ap: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			pW: [10, 10, 20, 10, 10, 170, 212],
			kj: [20, 20, 60, 100, 100, 110, 170],
			jO: [70, 70, 160, 30, 30, 60, 120]
		}, ut[5] = {
			ap: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			pW: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			kj: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			jO: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, ut[6] = {
			ap: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			pW: [10, 10, 60, 255, 255, 200, 200],
			kj: [10, 10, 60, 255, 255, 200, 200],
			jO: [80, 80, 255, 255, 255, 200, 200]
		}, ut[7] = {
			ap: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			pW: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			kj: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			jO: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, ut[8] = {
			ap: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			pW: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			kj: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			jO: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, ut[9] = {
			ap: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			pW: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			kj: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			jO: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, ut[20] = {
			ap: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			pW: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			kj: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			jO: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, ut[21] = {
			ap: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			pW: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			kj: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			jO: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.s0 = function() {
		var v8, q, bz, o2, z = function() {
				var z;
				return au.qN = document.createElement("canvas"), au.qN.width = au.av, au.qN.height = au.fp, au.ri = au.qN.getContext("2d", {
					alpha: !1
				}), z = au.ri.getImageData(0, 0, au.av, au.fp), au.rk = z.data, z
			}(),
			ap = ut[au.bq].ap,
			pW = ut[au.bq].pW,
			kj = ut[au.bq].kj,
			jO = ut[au.bq].jO,
			kk = rw.v0(),
			n = ap.length - 2,
			v1 = new Array(1 + n),
			v2 = new Array(1 + n),
			v3 = new Array(1 + n),
			v4 = new Array(1 + n);
		for (bz = n; 0 <= bz; bz--) v1[bz] = ap[bz + 1] - ap[bz], v2[bz] = pW[bz + 1] - pW[bz], v3[bz] = kj[bz + 1] - kj[bz], v4[bz] = jO[bz + 1] - jO[bz];
		for (q = au.av * au.fp - 1; 0 <= q; q--)
			for (bz = n; 0 <= bz; bz--)
				if (kk[q] >= ap[bz]) {
					o2 = kk[q] - ap[bz], au.rk[4 * q] = pW[bz] + v5(v2[bz] * o2, v1[bz]), au.rk[4 * q + 1] = kj[bz] + v5(v3[bz] * o2, v1[bz]), au.rk[4 * q + 2] = jO[bz] + v5(v4[bz] * o2, v1[bz]), au.rk[4 * q + 3] = 255;
					break
				} au.ri.putImageData(z, 0, 0), au.s8(au.bq) && iQ.qq() && au.s8(au.bq) && (z = iQ.v7("arena"), v8 = iQ.v7("territorial.io"), v9(z, 5, .5, .5, .1), v9(v8, 2, .5, .45, .1)), au.rl = !0, bR.bS = !0
	}, this.gq = function() {
		for (var es, aD, aE, vA, vB, o4, uv = 0, ap = au.av, ar = au.fp, o2 = ap * ar * 4, vC = vD, vE = au.rk, q = ap - 1; 0 <= q; q--) vC[(es = q << 2) + 2] = vC[o2 - es - 2] = 3;
		for (o2 = 4 * ap, q = ar - 1; 0 <= q; q--) vC[(es = q * o2) + 2] = vC[es + o2 - 2] = 3;
		for (vA = ap - 1, vB = ar - 1, aE = 1; aE < vB; aE++)
			for (o2 = aE * ap, aD = 1; aD < vA; aD++) o4 = 1 - (vE[(es = o2 + aD << 2) + 2] > vE[es + 1] && vE[es + 2] > vE[es]), vC[es + 2] = 6 - 5 * o4, uv += o4;
		this.uu = (ap - 2) * (ar - 2), this.rp = 0, au.s6(au.bq) && (au.rp.vF(), au.rp.vG(4, 5)), this.uv = f.gD = uv - this.rp, this.uw = this.uu - this.uv - this.rp, this.uw && (au.rp.vG(6, 2), au.rp.vH())
	}
}

function jv(vI, type, vJ, vK) {
	var eL;
	this.eL = document.createElement("input"), (eL = this.eL).type = type ? "number" : "text", eL.id = "input" + c4.af.qy++, eL.value = vI.value, eL.style.width = "100%", eL.style.userSelect = "none", eL.style.outline = "none", eL.style.resize =
		"none", eL.style.border = "inherit", eL.style.font = "inherit", eL.style.color = b7.b9, eL.style.backgroundColor = b7.fv, eL.style.fontSize = "1em", eL.style.padding = "0.1em 0.2em", eL.addEventListener("focus", function() {
			ao.qz++
		}), eL.addEventListener("blur", function() {
			ao.qz--, -1 !== vI.t && fa.l9.lA(vI.t, eL.value)
		}), eL.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vI.t && fa.l9.lA(vI.t, eL.value), vJ ? vJ() : eL.blur())
		}), vK && eL.addEventListener("input", function(en) {
			vK(en)
		})
}

function vL() {
	var km, kn, kt;
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), kn.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko("🔒 " + L(52), [new k7("⬅️ " + L(6), function() {
		c4.kp()
	})]), kn = new kq(km.kr, ((kt = []).push(function() {
		var kv = new kw,
			ju = (kv.kx(bg.af.ky("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", kv.kz(L(53)), new jv({
				value: "",
				t: -1
			})),
			vN = (kv.l1(ju), kv.kz(L(54), "0.8em"), new jv({
				value: "",
				t: -1
			}, 0, 0)),
			l7 = (vN.eL.type = "email", vN.eL.autocomplete = "email", vN.eL.name = "email", vN.eL.inputMode = "email", vN.eL.spellcheck = !1, kv.l1(vN), new k7(L(55), function(eL) {
				return v.w.lD(eL), bg.lE.vO({
					action: 4,
					lI: ju.eL.value.trim() + vN.eL.value.trim().substring(0, 63)
				}), !0
			}));
		return kv.l1(new lB([l7.button])), kv
	}()), kt))
}

function gT() {
	this.ga = function() {
		var vP = f.data;
		v.aN.vQ(vP.teamPlayerCount, vP.playerCount), vP.numberTeams = v.aN.vR(vP.teamPlayerCount, 0), vP.teamPlayerCount[0] && vP.teamPlayerCount[7] && (vP.teamPlayerCount[7] = 0, this.ga())
	}, this.vS = function() {
		var vP = f.data;
		vP.mapType < 2 ? au.gw(au.qL(vP), vP.mapSeed) : au.s4(vP.canvas)
	}, this.vT = function() {
		var vP = f.data;
		vP.colorsData || (vP.colorsData = new Uint32Array(1)), 0 === vP.gameMode && (vP.colorsData[0] = fa.af.vU()), vP.selectableName && (vP.playerNamesData || (vP.playerNamesData = new Array(1)), vP.playerNamesData[0] = fa.fE.data[122].value),
			vP.pv = new Uint32Array(1), vP.pv[0] = c1.m0.vV(fa.fE.data[105].value, 5)
	}, this.vW = function() {
		f.data = new gR
	}
}

function vX() {
	var a8, vY, vZ, va, gap, vb, vc, vd, ve, vf, ss, vg, vh, vi, t8, vj, vk;

	function vo() {
		va = Math.floor(.2 * (bL.bM.bN() ? .07 : .035) * ao.bO), va = vq(bL.bM.bN() ? 3 : 1, va);
		var vr = ao.ap / (a8.length + gap);
		va = va < vr ? vr : va, t8 = Math.floor((1 - gap) * va), vY = 0, vs()
	}

	function vs() {
		vY = (vY = vY < -20 ? -20 : vY) > (a8.length - 15) * va ? (a8.length - 15) * va : vY, vc = Math.floor(vY / va), vd = (vd = vc + Math.floor(ao.ap / va)) > a8.length - 1 ? a8.length - 1 : vd, vc = (vc = vd < vc ? vd : vc) < 0 ? 0 : vc;
		var aL = vd;
		vb = vZ / a8[aL];
		for (var q = vd - 1; vc <= q; q--) a8[q] > a8[aL] && (aL = q, vb = vZ / Math.pow(a8[q], vi))
	}

	function vv(aD) {
		aD = Math.floor((vY + ao.ap - aD - gap * va) / va);
		return (aD = aD < -1 ? -1 : -1 === aD ? 0 : aD > a8.length - 1 ? -1 : aD) !== ve && (ve = aD, -1 === vj && 0 === ve && vw.vl && (vj = setInterval(vx, 100)), 1)
	}

	function w0(q) {
		var w3 = Math.floor(vb * Math.pow(a8[q], vi));
		b5.fillRect(vY + ao.ap - (q + 1) * va, ao.ar - w3, t8, w3)
	}

	function vx() {
		var es;
		0 !== (ve = 8 === bi.bj() ? -1 : ve) ? (vk = (new Date).getTime(), clearInterval(vj), vj = -1) : (es = a8[1] / 864e3, -1 !== vk && (es += ((new Date).getTime() - vk) * a8[1] / 864e5, vk = -1), 0 < es && (a8[0] += Math.floor(es), bR.bS = !0))
	}
	this.vl = !1, this.e = function() {
		vk = vj = -1, ve = -(vi = 1), this.vm = !1, vh = 0, vg = new Date, vY = 0, gap = .3, a8 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		vZ = Math.floor(.15 * ao.ar), vf = (vf = Math.floor((bL.bM.bN() ? .018 : .0137) * ao.bO)) < 2 ? 2 : vf, ss = v.w.bA(1, vf), vo()
	}, this.vp = function(sW) {
		var q;
		for (this.vl = !0, q = 0; q < sW.length; q++) a8.unshift(sW[q]);
		vo(), bR.bS = !0
	}, this.vt = function() {
		vs()
	}, this.fc = function(aD, aE) {
		aE > ao.ar - .6 * vZ ? this.vm ? aD !== vh && (vY += aD - vh, vh = aD, vs(), vv(aD), this.vm = -1 !== ve, bR.bS = !0) : vv(aD) && (bR.bS = !0) : this.reset()
	}, this.reset = function() {
		-1 !== ve && (this.vm = !1, ve = -1, bR.bS = !0)
	}, this.fb = function(aD, deltaY) {
		-1 !== ve && (vY += Math.floor(deltaY), vs(), vv(aD), bR.bS = !0)
	}, this.fY = function(aD, aE) {
		this.fc(aD, aE), -1 !== ve && (vh = aD, this.vm = !0)
	}, this.vy = function() {
		-1 !== ve && (this.vm = !1)
	}, this.aR = function() {
		b5.fillStyle = b7.vz;
		for (var w4, month, bT, w7, w8, w9, b1, wA, wB, q = vd; vc <= q; q--) w0(q);
		this.vl && 0 === vc && (b5.fillStyle = b7.w1, w0(0)), -1 !== ve && (b5.fillStyle = b7.t7, w0(ve)), -1 !== ve && (b5.font = ss, v.w.textBaseline(b5, 2), (bT = new Date).setTime(vg.getTime() - 1e3 * ve * 60 * 60 * 24), month = "month", w4 =
			"day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(bT), w4 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(bT)), w4 = w4 + ", " + bT.getUTCDate() + " " + month + " " + bT.getFullYear(), month = 1 === a8[ve] ? L(56) : L(57), month = v.bB.bC(a8[ve]) + " " + month, bT = Math.floor(b5.measureText(w4).width), w7 = Math.floor(b5
				.measureText(month).width), w8 = Math.floor(.5 * (bT + vf)), w9 = (w9 = vY + ao.ap - (ve + 1) * va) < w8 ? w8 : w9 > ao.ap - w8 ? ao.ap - w8 : w9, b1 = ao.ar - Math.floor(vb * Math.pow(a8[ve], vi)), wA = Math.floor(1.1 * vf),
			wB = b1 > ao.ar - wA ? ao.ar - wA : b1, b5.fillStyle = b7.ex, b5.fillRect(ao.ap - w7 - vf, wB - wA, w7 + vf, wA), b5.fillRect(w9 - w8, ao.ar - wA, bT + vf, wA), b5.fillStyle = b7.b9, v.w.textAlign(b5, 2), b5.fillText(month, Math
				.floor(ao.ap - .5 * vf), wB), v.w.textAlign(b5, 1), b5.fillText(w4, w9, ao.ar), b5.strokeStyle = b7.wC, b5.lineWidth = 1, b5.beginPath(), b5.moveTo(0, b1), b5.lineTo(ao.ap, b1), b5.closePath(), b5.stroke())
	}
}

function pY() {
	this.wD = function(t, sj) {
		return Number(this.wE(t, sj))
	}, this.wE = function(t, sj) {
		var kk = null;
		return 0 === bL.id ? bL.wF && (kk = bL.wF.getItem((sj ? "v" : "d") + t)) : 1 === bL.id ? kk = bL.wG.loadString((sj ? 1e3 : 2e3) + t) : 2 === bL.id && (kk = bL.wH[(sj ? "v" : "d") + t]), kk && 0 !== kk.length ? kk : null
	}, this.sS = function(n, wI) {
		var a8 = [],
			wJ = wI ? "e" : "l";
		if (0 === bL.id) {
			if (bL.wF)
				for (q = 0; q < n; q++) a8.push(bL.wF.getItem(wJ + q))
		} else if (1 === bL.id)
			for (var wK = wI ? 5e3 : 3e3, q = 0; q < n; q++) a8.push(bL.wG.loadString(wK + q));
		else if (2 === bL.id)
			for (q = 0; q < n; q++) a8.push(bL.wH[wJ + q]);
		return a8
	}, this.save = function(t, value, sj) {
		var wL = (sj ? "v" : "d") + t;
		if (0 === bL.id) {
			if (bL.wF && fa.fE.data[140].value) try {
				bL.wF.setItem(wL, value)
			} catch (eL) {
				console.log(eL)
			}
		} else 1 === bL.id ? bL.wG.saveString((sj ? 1e3 : 2e3) + t, value) : 2 === bL.id && (bL.wH[wL] = value, bL.wM.postMessage(wL + " " + value))
	}, this.sd = function(a8, wI) {
		var n = a8.length,
			wJ = wI ? "e" : "l";
		if (0 === bL.id) {
			if (bL.wF && fa.fE.data[140].value) try {
				for (q = 0; q < n; q++) bL.wF.setItem(wJ + q, a8[q])
			} catch (eL) {
				console.log(eL)
			}
		} else if (1 === bL.id)
			for (var wK = wI ? 5e3 : 3e3, q = 0; q < n; q++) bL.wG.saveString(wK + q, a8[q]);
		else if (2 === bL.id)
			for (q = 0; q < n; q++) bL.wH[wJ + q] = a8[q], bL.wM.postMessage(wJ + q + " " + a8[q])
	}
}

function wN() {
	this.hV = new wO, this.oK = new wP, this.turnstile = new m8, this.e = function() {
		bL.bM.wQ(), this.turnstile.e()
	}, this.wR = function() {
		return fa.fE.data[160].value
	}
}

function oQ() {
	var wS = wT(),
		wU = wV(),
		wW = oR();
	this.bp = function() {
		return 123
	}, this.hR = function() {
		c1.m0.wX(fa.fE.data[183].value, 15), ln.pq(14, wS), ln.pq(7, wU), ln.pq(12, wW)
	}
}

function wY() {
	function wb() {
		8 === f.gI && 1 === f.eR && gX.wc.nS()
	}

	function wa(player) {
		f.gE ? (wd.we(player), ez.wf(), f.gB && f.d3.bQ()) : wg.c0(player)
	}
	this.e1 = function(player) {
		eo.wZ(player, player === f.al ? 21 : 22), wa(player), wb()
	}, this.e5 = function(player) {
		1 === f.eR && 0 !== ci.hL[player] && 2 !== ci.it[player] && wa(player), f.g5--, f.g7--, eo.wZ(player, 4), v.cw.cx(2) && h8.hM(!0), wb()
	}
}

function wh() {
	var wi = new Uint8Array(64);
	this.e = function() {
		var q;
		for (wi[0] = 45, wi[37] = 95, q = 0; q < 10; q++) wi[q + 1] = 48 + q;
		for (q = 0; q < 26; q++) wi[q + 11] = 65 + q, wi[q + 38] = 97 + q
	}, this.m2 = function(pn) {
		for (var wj = bo, wk = new Uint8Array(pn), q = 0; q < pn; q++) wk[q] = wj.bp(6);
		return wk
	}, this.m1 = function(wk) {
		for (var n = wk.length, wl = wi, a8 = [], q = 0; q < n; q++) a8.push(String.fromCharCode(wl[wk[q]]));
		return a8.join("")
	}, this.bC = function(value, wm) {
		for (var wl = wi, a8 = [], q = 0; q < wm; q++) a8.push(String.fromCharCode(wl[value >> 6 * (wm - 1 - q) & 63]));
		return a8.join("")
	}
}

function nr() {
	eo.bQ(), du.bQ(), h8.wn(), bg.af.bQ()
}

function nw() {
	hF.bQ(), hB.bQ(), dT.bQ(), dV.bQ(), hD.bQ(), eE.bQ(), dH.bQ(), ae.af.bQ(), ez.wo(), h4.bQ(), gZ.bQ(), gt.bQ(), du.bQ(), du.jT(), h8.bQ(), h0.bQ(), h7.bQ(), h9.bQ(), hH.wp(), eo.bQ(), hE.bQ(), h5.bQ(), dy.bQ(), dL.bQ(), f5.bQ(), bg.af.bQ(), bg.pI
		.bQ(), c4.bQ(), hU.oK.bQ(), d0.bQ(), bR.bQ()
}

function nn() {
	eS.bQ(), hA.bQ(), ba.bQ(), hJ.bQ(), h6.bQ(), hG.bQ(), hH.bQ(), oI.wq()
}

function nz() {
	h4.hM(!1), h9.hM(), h8.hM(!1), h7.hM(), h5.hM(), dy.hM(), du.hM(!1), f5.kE()
}

function ny() {
	du.hM(!1) && (bR.bS = !0), bg.af.bQ()
}

function wr() {
	this.bQ = function(player) {
		var ws = function(player) {
			for (var um = ae.um.wv(), n = um.length, aL = Math.min(n, 32), iW = ge.u0(n), q = 0; q < aL; q++) {
				var ws = (q + iW) % n,
					ue = um[ws],
					ww = ue[0],
					wx = ue[ue.length - 1];
				if (ae.co.wy(player, ww) && ae.co.wz(player, wx)) return ws;
				if (ae.co.wy(player, wx) && ae.co.wz(player, ww)) return 0 <= (ws = ae.um.x0(wx, ww)) ? ws : ae.um.ur() ? -1 : ae.um.x1(ae.um.un(ue))
			}
			return -1
		}(player);
		return -1 !== ws && (ws = ae.um.get(ws), !ae.co.wu(player, ws)) && (a9.a8[0] = ws, !0)
	}
}

function x2() {
	var x3, x4, x5 = -15e3,
		x6 = !1;

	function fY(eL) {
		xN() || (x6 = !0, xO(eL, 1), bg.af.pH(bg.af.cG), xP(Math.floor(ao.ed * eL.clientX), Math.floor(ao.ed * eL.clientY)))
	}

	function eK(eL) {
		x5 = bR.eM, xO(eL, 1), bg.af.pH(bg.af.cG), 0 < eL.touches.length && (x3 = Math.floor(ao.ed * eL.touches[0].clientX), x4 = Math.floor(ao.ed * eL.touches[0].clientY), xQ.eK(eL) || xP(x3, x4))
	}

	function xP(aD, aE) {
		c4.fY(aD, aE), 0 === f.eR ? bi.fY(aD, aE) : h6.xR(aD, aE) || h1.fY(aD, aE) || hA.fY(aD, aE) || eO.xS(aD, aE) || h9.fY(aD, aE) || 0 <= e2.fY(aD, aE) || dy.fY(aD, aE) || r9.xT(aD, aE) || eO.ec(aD, aE)
	}

	function fc(eL) {
		xN() || (x6 = !0, xO(eL, 1), xU(Math.floor(ao.ed * eL.clientX), Math.floor(ao.ed * eL.clientY)))
	}

	function eQ(eL) {
		x5 = bR.eM, xO(eL, 1), 0 < eL.touches.length && (x3 = Math.floor(ao.ed * eL.touches[0].clientX), x4 = Math.floor(ao.ed * eL.touches[0].clientY), xQ.eQ(eL) || xU(x3, x4))
	}

	function xU(aD, aE) {
		r9.rA() || (r9.vh = aD, r9.xA = aE), c4.fc(aD, aE), 0 === f.eR ? bi.fc(aD, aE) : (xV.xW(aD, aE), h1.fc(aD, aE) || (e2.fc(aD, aE), eO.xX() ? eO.fc(aD, aE) : h5.xY ? h5.fc(aD) && (bR.bS = !0) : (h4.fc(aD, aE), eZ.fM && eZ.fc(aD, aE) && (bR
			.bS = !0))))
	}

	function xD(eL) {
		xN() || (xO(eL, 1), xZ(), 0 === f.eR ? (bi.click(-1024, -1024), vw.reset()) : (h4.vy(-1024, -1024), e2.fc(-1024, -1024), h5.xa(), eZ.fM = !1))
	}

	function xC(eL) {
		xN() || (xO(eL, 1), xb(Math.floor(ao.ed * eL.clientX), Math.floor(ao.ed * eL.clientY), 2 === eL.button), r9.x9 && (r9.x9 = !1, eL.preventDefault()))
	}

	function click(eL) {
		xN() || xO(eL, 1)
	}

	function xE(eL) {
		x5 = bR.eM, xO(eL, 1), eL && eL.touches && 0 < eL.touches.length && 0 !== f.eR ? eZ.fM = !1 : xQ.eb() || (xb(x3, x4, !1), r9.x9 && (r9.x9 = !1, eL.preventDefault()))
	}

	function xF(eL) {
		x5 = bR.eM, xO(eL, 1), xb(x3, x4, !1), r9.x9 && (r9.x9 = !1, eL.preventDefault())
	}

	function xG(eL) {}

	function xH(eL) {}

	function xI(eL) {
		xN() || xO(eL, 0)
	}

	function xb(aD, aE, xc) {
		xZ(), 0 === f.eR ? bi.click(aD, aE) : (h4.vy(aD, aE), h1.vy(), h5.xa(), eZ.fM = !1, eO.click(aD, aE, xc) ? bR.bS = !0 : e2.xC(aD, aE))
	}

	function xZ() {
		c4.xZ()
	}

	function fb(eL) {
		var aD, aE, deltaY;
		xN() || (xO(eL, 1), bg.af.pH(bg.af.cG), aD = Math.floor(ao.ed * eL.clientX), aE = Math.floor(ao.ed * eL.clientY), deltaY = eL.deltaY, 1 === eL.deltaMode && (deltaY *= 16), c4.fb(aD, aE, deltaY), 0 === f.eR ? bi.fb(aD, aE, deltaY) : h4.fb(aD,
			aE, deltaY) || (h5.xd(aD, aE) ? h5.fb(deltaY) && (bR.bS = !0) : eZ.fb(aD, aE, deltaY)))
	}

	function xJ(eL) {
		xO(eL, 0)
	}

	function xO(eL, id) {
		0 === id && c4.xX() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== bi.bj() && eL.preventDefault()
	}

	function xK(eL) {
		if (__fx.keybindHandler(eL.key)) return;
		xN() || 0 < ao.qz || (eL = eL.code) && eL.length && (xf.jA(eL, 18) ? xg.xh(3) : xf.jA(eL, 22) ? xg.xh(0) : xf.jA(eL, 20) ? xg.xh(1) : xf.jA(eL, 24) ? xg.xh(2) : xf.jA(eL, 10) ? h5.xi(31 / 32) : xf.jA(eL, 8) ? h5.xi(32 / 31) : xf.jA(eL, 6) ?
			h5.xi(7 / 8) : xf.jA(eL, 4) ? h5.xi(8 / 7) : xf.jA(eL, 14) ? 0 !== f.eR && eZ.fb(Math.floor(ao.ap / 2), Math.floor(ao.ar / 2), -200) : xf.jA(eL, 16) ? 0 !== f.eR && eZ.fb(Math.floor(ao.ap / 2), Math.floor(ao.ar / 2), 200) : xf.jA(eL,
				0) ? f.eR && xV.xj(0) : xf.jA(eL, 2) ? f.eR && xV.xj(1) : xf.jA(eL, 30) ? f.eR && xV.xj(2) : xf.jA(eL, 26) ? f.eR && xV.xk() : xf.jA(eL, 28) && f.eR && xV.dn())
	}

	function xL(eL) {
		if (!xN() && !(0 < ao.qz || bR.eM < 400)) {
			var code = eL.code;
			if (code && code.length && !("Enter" === code && c4.lK(1) || "Space" === code && c4.lK(0))) return bk.c8 ? bk.mc.lK(code) ? void 0 : void("Escape" === code && r9.sk()) : void(8 !== bi.bj() && bi.lK(eL) ? bR.bS = !0 : "Escape" === code ?
				r9.sk() : xf.jA(code, 18) ? xg.xl(3) : xf.jA(code, 22) ? xg.xl(0) : xf.jA(code, 20) ? xg.xl(1) : xf.jA(code, 24) ? xg.xl(2) : xf.jA(code, 12) ? h6.xm(!f.fZ) : "Space" === code && f.eR && (e2.hY && e2.xn(), f.gC) && h6.oD(!1))
		}
	}

	function xM() {
		"hidden" !== document.visibilityState && (bR.bS = !0)
	}

	function xN() {
		return x5 + 15e3 > bR.eM
	}

	function resize() {
		ao.xp()
	}
	this.x7 = 0, this.x8 = "", this.x9 = !1, this.vh = 0, this.xA = 0, this.e = function() {
		xB.addEventListener("mousedown", fY, {
			passive: !1
		}), xB.addEventListener("mousemove", fc, {
			passive: !1
		}), xB.addEventListener("mouseup", xC, {
			passive: !1
		}), xB.addEventListener("click", click, {
			passive: !1
		}), xB.addEventListener("mouseleave", xD, {
			passive: !1
		}), xB.addEventListener("wheel", fb, {
			passive: !1
		}), xB.addEventListener("touchstart", eK, {
			passive: !1
		}), xB.addEventListener("touchmove", eQ, {
			passive: !1
		}), xB.addEventListener("touchend", xE, {
			passive: !1
		}), xB.addEventListener("touchcancel", xF, {
			passive: !1
		}), xB.addEventListener("dragover", xG), xB.addEventListener("drop", xH), xB.addEventListener("dblclick", xI), document.addEventListener("contextmenu", xJ), document.addEventListener("keydown", xK), document.addEventListener("keyup",
			xL), document.addEventListener("visibilitychange", xM), window.addEventListener("resize", resize)
	}, this.xT = function(aD, aE) {
		return !!h6.fY(aD, aE) || !!(h4.fY(aD, aE) || eZ.fY(aD, aE) || h5.fY(aD, aE) || eo.fY(aD, aE))
	}, this.xo = xN, this.rA = function() {
		return !x6 || 0 < x5
	}, this.sk = function() {
		if (!c4.xX()) return 8 === bi.bj() ? f.fZ ? void h6.xm(!1) : h1.xX ? void h1.xn() : void e2.xn() : void(7 !== bi.bj() && 6 === bi.bj() && oH.xq());
		c4.lK(2)
	}
}

function xr() {
	var xs;
	this.e = function() {
		if (!xs) {
			xs = new Array(l.xu.length);
			for (var q = 0; q < xs.length; q++) xs[q] = h0.af.xv(20, l.xu[q])
		}
	}, this.aR = function() {
		var xw = ay;
		if (!(5 <= xw)) {
			var an = ao.ap,
				aq = ao.ar,
				az = b0 / xw,
				b1 = b2 / xw,
				b3 = (an + b0) / xw,
				b4 = (aq + b2) / xw,
				xx = -20 * xw,
				xy = .5 * xx,
				at = au.av << 4,
				n = ae.af.am,
				ad = ae.af.ad,
				ag = ae.af.ag,
				p = l.p,
				k = xs,
				y = b5;
			3 < xw && (y.globalAlpha = .5 * (5 - xw));
			for (var q = 0; q < n; q++) {
				var aY = ad[q],
					aD = an * (aY % at / 16 - az) / (b3 - az) + xy,
					aY = aq * (Math.floor(aY / at) / 16 - b1) / (b4 - b1) + xy;
				an < aD || aq < aY || aD < xx || aY < xx || (y.setTransform(xw, 0, 0, xw, aD, aY), aD = k[p[ag[q] >> 3]], y.drawImage(aD, 0, 0))
			}
			y.globalAlpha = 1, y.setTransform(xw, 0, 0, xw, 0, 0)
		}
	}
}

function y1() {
	var t = 0,
		eM = bR.eM;
	this.nj = 0, this.bQ = function() {
		ao.bQ(), f.gE ? ny() : 0 === t ? bR.eM >= eM && (eM += bR.nq * Math.floor(1 + (bR.eM - eM) / bR.nq), 2 === f.eR || e2.hY ? nr() : (nw(), gr.render()), t++) : ((e2.hY ? ny : (bR.bS = !0, nz))(), t = 0), nn(), bR.bS && (bR.bS = !1, no())
	}
}

function y2() {
	var canvas, sx, aD, aE, w3, y3, gap, y4, fontSize, y5, y6, y7, y8, y9, yA, yB, yC, yD;

	function yI() {
		sx.clearRect(0, 0, h8.ap, h8.ar), sx.fillStyle = b7.ex, sx.fillRect(0, 0, h8.ap, h8.ar), sx.fillStyle = b7.yL, a3 = 0 < yB ? yB : y8[4] / 1e4, sx.fillRect(0, h8.ar - w3 - 1, Math.floor(a3 * h8.ap), w3), sx.fillStyle = b7.b9, sx.fillRect(0, 0,
			h8.ap, 1), sx.fillRect(0, 0, 1, h8.ar), sx.fillRect(h8.ap - 1, 0, 1, h8.ar), sx.fillRect(0, h8.ar - 1, h8.ap, 1), sx.fillRect(0, h8.ar - w3 - 1, h8.ap, 1);
		for (var a3, yM, bT = 0, q = 0; q < y7.length; q++) y9[q] ? (v.w.textAlign(sx, 0), yM = Math.floor((y3 - w3 + 2 * y4) * (q - bT + 1) / (y7.length + 1) - .7 * y4), sx.fillText(y7[q], gap, yM), v.w.textAlign(sx, 2), 5 === q && 0 !== ci.hL[f
			.al] && ci.iN[f.al] >= dV.ki(f.al) ? (sx.fillStyle = b7.yN, sx.fillText(yF(q), h8.ap - gap, yM), sx.fillStyle = b7.b9) : sx.fillText(yF(q), h8.ap - gap, yM)) : bT++
	}

	function yF(q) {
		return q < 3 ? y8[q].toString() : 3 === q || 4 === q || 5 === q ? v.bB.yO(y8[q] / 100, 2) : q < 7 ? v.bB.bC(y8[q]) : q === 7 ? h8.yP(y8[7]) : q === 8 ? __fx.utils.getMaxTroops(ci.iF, f.al) : __fx.utils.getDensity(f.al)
	}

	function yE() {
		ci.iF[f.al] !== y8[6] && (y8[6] = ci.iF[f.al], y5++)
	}
	this.e = function() {
		yB = yC = 0, (y6 = new Array(8))[0] = L(58), y6[1] = f.gB ? L(18) : L(59), y6[2] = L(60), y6[3] = L(61), y6[4] = L(62), y6[5] = L(63, 0, "Interest"), y6[6] = L(64), y6[7] = L(65),
			y6.push("Max Troops", "Density"), // add y6
			(y7 = new Array(y6.length)).fill(""), (y8 = new Array(y6.length))[0] = f.gB ? 0 : f.g4, y8[1] = f.gB ? ez.f0 : f.g6, y8[2] = f.g7, y8[3] = 0, y8[4] = ds.kh(1e4 * ci.iF[0], Math.max(f.gD, 1)), y8[5] = 0 === f.data.iIncomeType ? 700 :
			1 === f.data.iIncomeType ? ds.kh(700 * f.data.iIncomeValue, 64) : ds.kh(700 * f.data.iIncomeData[f.al], 64), y8[6] = 0, yE(), y8[7] = 0, yA = yF(6), (y9 = new Array(y6.length)).fill(!0), yD = 0, yD = f.gB ? (y9[0] = !1, y9[2] = !1,
				y9[3] = !1, 3) : (y9[3] = !1, 1), y5 = 0, this.resize()
	}, this.resize = function() {
		this.ap = Math.floor((bL.bM.bN() ? .1646 : .126) * 1.25 * ao.bO), this.ar = Math.floor(1.18 * this.ap), w3 = Math.floor(.04 * this.ap), gap = Math.floor(.035 * this.ap), y4 = .04 * this.ap, y3 = this.ar, this.ar -= Math.floor(yD * (this
			.ar - 2 * w3) / y6.length), fontSize = Math.floor(.7 * (y3 - w3) / y6.length);
		var ss = v.w.bA(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.ap, canvas.height = this.ar,
			function(ss, ap) {
				for (var q = 0; q < y7.length; q++) y7[q] = v.sx.yJ(y6[q], ss, ap)
			}((sx = canvas.getContext("2d", {
				alpha: !0
			})).font = ss, .575 * this.ap), v.w.textBaseline(sx, 1), sx.lineWidth = 1, this.yH(), this.fN(), h7.fN(), yI()
	}, this.fN = function() {
		aD = ao.ap - this.ap - fx.gap
	}, this.yK = function() {
		aE = fx.gap
	}, this.yH = function() {
		aE = fx.gap + (h7.tj() && 0 !== ci.hL[f.al] && !f.gE ? h7.ar + fx.gap : 0)
	}, this.hM = function(ij) {
		(ij || 100 <= y5) && (y5 = 0, yI())
	}, this.yQ = function() {
		return y8[7]
	}, this.yP = function(value) {
		var aL = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * aL) / 1e3);
		return value < 10 ? aL + ":0" + value : aL + ":" + value
	}, this.bQ = function() {
		var yd, per;
		y9[0] && f.g5 - f.g7 !== y8[0] && (y8[0] = f.g5 - f.g7, y5++), ez.f0 - y8[0] !== y8[1] && (y8[1] = ez.f0 - y8[0], y5++), this.wn(), (yd = dV.ye(f.al)) !== y8[5] && (y8[5] = yd, y5++), yE(), y8[7] += bR.nq, yd = yF(7), yA !== yd && (yA =
			yd, y5 += 100), yd = f.j ? f5.yY() : ci.iF[f7[0]], per = ds.kh(1e4 * yd, Math.max(f.gD, 1)), y8[3] = yd, y8[4] !== per && (y5++, y8[4] = per), 8 === f.gI && function() {
			for (var q = 0; q < 2; q++)
				if (!v.cw.cy(q)) return gX.wc.nS(), 1;
			return
		}() || y8[3] < f.gD || ! function() {
			for (var q = ez.f0 - 1; 0 <= q; q--)
				if (0 < ci.eC[ez.f2[q]].length) return;
			return 1
		}() || ae.co.yc().length || f.j && f5.yY(1) < f.gD || gX.wc.nS()
	}, this.wn = function() {
		y9[2] && f.g7 !== y8[2] && (y8[2] = f.g7, y5 += 2 === f.eR ? 100 : 1)
	}, this.yZ = function() {
		return y8[3] === f.gD
	}, this.nx = function(q) {
		var kj, yf, bT;
		return 2 !== f.eR && (q % 2 == 1 && (h4.hM(1, 1), bR.bS = !0), q === f.gM ? (yB = 0, yI(), !1) : (-1 !== q || 0 !== yC) && (yf = yB, yB = f.gC ? q / f.gM : (bT = performance.now(), 0 <= q && (kj = bT - 392 * q, yC = 0 === q || kj < yC ?
			kj : yC), 1 < (yB = (bT - yC) / (392 * f.gM)) ? 1 : yB), yI(), yB !== yf))
	}, this.aR = function() {
		b5.drawImage(canvas, aD, aE)
	}
}

function q9(yg, yh, yi) {
	function click() {
		var value = 1 - yg.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + yh, void 0 !== yg.t ? fa.l9.lA(yg.t, value) : yg.value = value, yi && yi(value)
	}
	var eL;
	yh = yh || L(66), this.eL = document.createElement("p"), (eL = this.eL).textContent = (yg.value ? "🟩 " : "⬜ ") + yh, eL.style.margin = "0", eL.style.marginBottom = "0.5em", eL.style.cursor = "pointer", eL.addEventListener("click", click)
}

function yj() {
	var yk = 0,
		yl = !0;

	function yn(id) {
		id = [L(67), L(68), L(69), L(70)][id];
		eo.yo(id)
	}
	this.bQ = function() {
		var bT, bV;
		bR.eM < yk || (yk = bR.eM + 3e3, f.gC) || f.gB || v.cw.cy(f.al) || (bT = new Date, bV = bT.getUTCSeconds(), yl ? bV < 43 && (yl = !1) : bV < 43 || (yk += 52e3, yl = !0, (bV = (bT.getUTCMinutes() + 2) % 60) % 10 == 0 ? f.gI < 7 && yn(0) :
			bV % 10 == 5 ? 7 !== f.gI && 10 !== f.gI || yn(1) : bV % 10 == 7 ? 8 === f.gI && yn(2) : bV % 10 == 2 && 9 === f.gI && yn(3)))
	}
}

function yp() {
	var yq = 0,
		yr = 0,
		ys = 300,
		yt = 300,
		yu = 0;
	this.fD = 0, this.fE = new Uint32Array(512), this.e = function() {
		yr = yq = 0, this.fD = 0, yu = 0
	}, this.bQ = function() {
		if (function() {
				var n = dH.fC.fD;
				if (0 === n) return 1;
				var fE = dH.fC.fE;
				if (bR.el() % 35 == 6) {
					for (var q = n - 1; 0 <= q; q--) a6.fB(fE[q] << 2) || (n--, fE[q] = fE[n]);
					dH.fC.fD = n
				}
				return n < fE.length
			}())
			if (ys <= yq) {
				var yy = dH.fC.fD;
				if (yy) {
					if (bR.el() % 350 != 1) return;
					if (yu !== yy) return void(yu = yy);
					if (!v.cw.is(f7[0])) return
				} else if (bR.el() % 12 != 8) return;
				v.cw.yz() || dH.fC.e()
			} else {
				var q, ap = au.av,
					z0 = ap - 2,
					yy = z0 * (au.fp - 2),
					z1 = ys,
					fE = dH.fC.fE,
					aL = dH.fC.fD,
					z2 = fE.length,
					xx = Math.min(yr + z1 * ((1 + 19 * dH.performance.z3) * yt), yy);
				for (q = yr; q < xx; q += z1) {
					var a3 = 4 * (q % z0 + (ds.kh(q, z0) + 1) * ap + 1);
					if (a6.fB(a3) && (fE[aL] = a3 >> 2, ++aL === z2)) {
						q += z1;
						break
					}
				}(yr = q) >= yy && (yr = ++yq), dH.fC.fD = aL
			}
	}
}

function z4() {
	this.z5 = function() {
		return bL.bM.bN() ? 2 : 1
	}
}

function z6() {
	this.z7 = function(player) {
		for (var td = ae.af.td, qj = player << 3, q = qj + ae.af.cg[player] - 1; qj <= q; q--) this.z8(td[q])
	}, this.z8 = function(z9) {
		var af = ae.af,
			zA = af.am - 1,
			zB = af.ag[z9],
			zC = af.zD[z9],
			zE = af.ad[z9];
		af.am = zA, af.ag[z9] = af.ag[zA], af.ad[z9] = af.ad[zA], af.zF[z9] = af.zF[zA], af.ah[z9] = af.ah[zA], af.zD[z9] = af.zD[zA], af.tc[z9] = af.tc[zA], af.tg[z9] = af.tg[zA], af.ai[z9] = af.ai[zA], af.uf[z9] = af.uf[zA], af.uh[z9] = af.uh[
				zA], af.td[af.ag[z9]] = z9,
			function(zK) {
				var player = zK >> 3,
					af = ae.af,
					n = af.cg[player] - 1,
					zL = (player << 3) + n;
				af.cg[player] = n, zL !== zK && (af.td[zK] = af.td[zL], af.ag[af.td[zK]] = zK)
			}(zB), ae.zH.zH[cq.zI(af.ad[z9])][af.zD[z9]] = z9, zA = cq.zI(zE), zB = zC, zA = ae.zH.zH[zA], af = zA.pop(), zB !== zA.length && (zA[zB] = af, ae.af.zD[af] = zB)
	}
}

function zN() {
	var ry, zO, zP, rx, zQ, zR, zS, zT, zU, zV, zW, zX, zY, zZ = !1,
		za = !1;

	function zb(zc) {
		zX = bR.eM, zP = rx = zO = 0, zQ = (zY = 33) / zc, ry = 1 / (zc / zY / 4), zR = (ao.ap / 2 + b0) / ay, zS = (ao.ar / 2 + b2) / ay, zT = ay
	}

	function zh(q) {
		var az; - 1 !== q && (q = cq.uT(ae.af.ad[q]), az = cq.fF(q) - 15, q = cq.fG(q) - 15, eS.ze(az, q, 29 + az, 29 + q))
	}

	function zq(zr) {
		Math.abs(Math.log(zW / zT)) < .125 && (zW = zr * zT)
	}

	function zp(az, b1, b3, b4) {
		zU = (az + b3 + 1) / 2, zV = (b1 + b4 + 1) / 2;
		b3 = ao.ap / (b3 - az + 1), az = ao.ar / (b4 - b1 + 1);
		zW = .9 * (b3 < az ? b3 : az)
	}
	this.zd = function() {
		return zZ
	}, this.hK = function() {
		zb(1), this.ze(0, 0, au.av - 1, au.fp - 1), f.gE || f.gC || this.zf(f.al, 3e3, !0, .3)
	}, this.zg = function(player, dh) {
		zh(ae.co.zi(player, dh))
	}, this.zf = function(player, zc, zj, zoom) {
		f.fZ || zZ && !zj && za || (0 === ci.iF[player] ? zh(ae.co.zk(player)) : (eZ.fM = !1, za = zj, zb(zc), function(player) {
			zU = (ci.iO[player] + ci.iS[player] + 1) / 2, zV = (ci.iP[player] + ci.iT[player] + 1) / 2
		}(player), function(zoom, player) {
			var aF = ci.iS[player] - ci.iO[player] + 1,
				player = ci.iT[player] - ci.iP[player] + 1,
				bz = ao.ap / aF,
				jO = ao.ar / player,
				bz = (zW = bz < jO ? bz : jO, 0 !== zoom ? zoom : aF < 20 && player < 20 ? .5 : .9);
			zW *= bz, zq(7 / 8)
		}(zoom, player), zZ = !0, xg.zn()))
	}, this.zo = function(zc) {
		f.gC || f.fZ || (eZ.fM = !1, za = !1, zb(zc), zp(0, 0, au.av - 1, au.fp - 1), zq(7 / 8), zZ = !0, xg.zn())
	}, this.ze = function(az, b1, b3, b4) {
		zZ = !1, zp(az, b1, b3, b4), ay = zW, eZ.fU(zU, ao.ap / 2), eZ.fW(zV, ao.ar / 2), fq.fr(), bR.bS = !0
	}, this.eT = function() {
		return !(zZ && za || (zZ = !1))
	}, this.bQ = function() {
		var zt, zu, jl, zx;
		zZ && (zO < .5 ? rx < zQ && (rx += zQ * ry, zP = zO) : 1 - zP < zO && (rx = (rx -= zQ * ry) < zQ * ry ? zQ * ry : rx), zX = zX >= bR.eM ? bR.eM - 1 : zX, zO = 1e3 < (jl = bR.eM - zX) || 1 < (zO += rx * jl / zY) ? 1 : zO, zX = bR.eM, jl =
			ay, zt = b0, zu = b2, jl = (ay = zT * Math.pow(zW / zT, zO)) / jl, zx = 1 - (zT * Math.pow(zW / zT, 1 - zO) - zT) / (zW - zT), eZ.fU(zR + zx * (zU - zR), ao.ap / 2), eZ.fW(zS + zx * (zV - zS), ao.ar / 2), du.zoom(jl, (zt * jl -
				b0) / (1 - jl), (zu * jl - b2) / (1 - jl)), fq.fr(), 1 <= zO && (zZ = !1, gr.zy = !0), bR.bS = !0)
	}
}

function zz() {
	this.a00 = 0, this.gap = 0, this.a01 = 0, this.a02 = 0, this.e = function() {
		this.resize()
	}, this.resize = function() {
		this.a00 = .0022 * v.w.a03(.5) * ao.bO, this.a01 = this.a00 / ao.ed, this.gap = Math.max(Math.floor((bL.bM.bN() ? .0114 : .01296) * ao.bO), 2), this.a02 = this.gap / ao.ed
	}
}

function a04() {
	this.a05 = null, this.e = function() {
		10 !== f.gI ? this.a05 = null : this.a05 = new Uint32Array(f.g)
	}, this.bQ = function() {
		10 === f.gI && this.co()
	}, this.co = function() {
		for (var es, target, yd, a05 = this.a05, f8 = ez.f2, a06 = ci.iN, q = ez.f0 - 1; 0 <= q; q--)(es = f8[q]) >= f.g4 || (target = Math.max(ds.kh(a06[es], 4), 2048), yd = Math.max(dV.ye(es), 100), a05[es] += ds.kh(yd * target, 1e4), a05[es] >
			target && (a05[es] = target))
	}, this.a07 = function(player, aW) {
		return aW > this.a05[player] ? (aW = this.a05[player], this.a05[player] = 0) : this.a05[player] -= aW, aW
	}
}

function a08() {
	this.xX = !1;
	this.jI = [], this.jH = 100;
	var az, b1, gap, u, a09, a0B, a0C = 0,
		a0D = new Array(9),
		a0E = [],
		a0F = [],
		a0G = 0,
		a0H = 0,
		a0I = 0,
		a0J = 0;

	function a0T() {
		a0D.sort(function(bz, jO) {
			return jO.a0Q - bz.a0Q
		});
		for (var lI = "" + a0D[0].dr, q = 1; q < 9; q++) lI += "," + a0D[q].dr;
		for (q = 0; q < 9; q++) lI += "," + a0D[q].a0Q;
		fa.fE.a0U(120, lI)
	}
	this.e = function() {
		for (var a0K = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], q = 0; q < a0K.length; q++) {
			var color = 6 === a0K[q] ? b7.a0L : b7.k5;
			this.jI.push(v.canvas.a0M(iQ.get(3), a0K[q], color))
		}
		for (q = 0; q < iX.cT.jJ; q++) a0F.push(iX.cT.tn - iX.cT.jJ + q);
		for (q = 0; q < iX.cT.tl; q++) a0F.push(iX.cT.tm + q);
		var a0N = iX.cT.tt(a0O.a0N);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a0N.slice(), q = 0; q < a0N.length; q++) a0F.push(a0N[q]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a0D[q] = {
						dr: isNaN(qcode) ? 1015 + q : qcode,
						a0Q: 0
					}
				} else {
					var a8 = fa.fE.data[120].value.split(",");
					if (18 !== a8.length)
						for (q = 0; q < 9; q++) a0D[q] = {
							dr: 1015 + q,
							a0Q: 0
						};
					else
						for (q = 0; q < 9; q++) {
							var kk = parseInt(a8[q]),
								jA = (kk = 0 <= kk && kk < iX.cT.tn ? kk : 0, parseInt(a8[q + 9]));
							jA = 0 <= jA && jA < 1e3 ? jA : 0, a0D[q] = {
								dr: kk,
								a0Q: jA
							}
						}
				}
		}()
	}, this.show = function(fg, fh, a0V) {
		var q;
		if (a0G = fg, a0H = fh, a0C = a0V || 0, this.xX = !0, a0E = [], 0 === a0C)
			for (q = 0; q < 9; q++) a0E.push(a0D[q].dr);
		else {
			var jO = 49 * a0C,
				a0V = jO - 49;
			for (a0V >= a0F.length && (a0C = 1, a0V = 0, jO = 49), q = a0V = (jO = Math.min(jO, a0F.length)) - 49; q < jO; q++) a0E.push(a0F[q])
		}
		a0E.push(1024);
		a0V = a0E.length, u = Math.floor((bL.bM.bN() ? .075 : .0468) * ao.bO), gap = Math.floor(u / 3), (a0I = 10 * (a09 = u + gap)) > ao.ap && (a0I = ao.ap, gap = (a09 = a0I / 10) - (u = 3 * a09 / 4)), a0B = ds.kh(a0V, 10) + !!(a0V % 10), (a0J =
			a0B * a09) > ao.ar && (a0J = ao.ar, gap = (a09 = a0J / a0B) - (u = 3 * a09 / 4)), a0V = .5 * gap;
		az = Math.min(Math.max(fg - .5 * a0I + a0V, a0V), ao.ap - a0I + a0V), b1 = Math.min(Math.max(fh - .5 * a0J + a0V, a0V), ao.ar - a0J + a0V)
	}, this.fY = function(fg, fh, player) {
		if (!this.xX) return !1;
		if (this.a0X(fg, fh)) {
			fg = ds.dt(ds.kh(fg - az + .5 * gap, a09), 0, 9);
			if ((fg += 10 * ds.dt(ds.kh(fh - b1 + .5 * gap, a09), 0, 9)) >= a0E.length) return eO.eP(), !0;
			fh = a0E[fg];
			if (1024 === fh) return this.show(a0G, a0H, a0C + 1), !0;
			! function(dr) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var q = 0; q < 9; q++) a0D[q].a0Q = Math.floor(.99 * a0D[q].a0Q);
					for (q = 0; q < 9; q++)
						if (dr === a0D[q].dr) return a0D[q].a0Q = Math.min(a0D[q].a0Q + 30, 999), a0T();
					a0D.splice(5, 0, {
						dr: dr,
						a0Q: Math.max(a0D[4].a0Q, 30)
					}), a0D.pop(), a0T()
				}
			}(fh), player === f.al ? gi.gl.uD(fh) : gi.cw.a0Y(fh, player)
		}
		return eO.eP(), !0
	}, this.a0X = function(fg, fh) {
		return !(fg < az - .5 * gap || fh < b1 - .5 * gap || az + a0I - .5 * gap <= fg || b1 + a0J - .5 * gap <= fh)
	}, this.aR = function() {
		b5.fillStyle = b7.ex, b5.fillRect(az - .5 * gap, b1 - .5 * gap, a0I, a0J);
		for (var iW = .5 * fx.a00, n = (b5.lineWidth = fx.a00, b5.strokeStyle = b5.fillStyle = b7.b9, b5.strokeRect(az - .5 * gap + iW, b1 - .5 * gap + iW, a0I - 2 * iW, a0J - 2 * iW), b5.imageSmoothingEnabled = !0, a0E.length), q = 0; q <
			n; q++) this.a0Z(a0E[q], b5, az + q % 10 * a09, b1 + ds.kh(q, 10) * a09, u);
		b5.imageSmoothingEnabled = !1
	}, this.a0Z = function(dr, y, aD, aE, u) {
		var a3;
		dr >= 1024 - iX.cT.jJ ? (a3 = u / this.jH, y.setTransform(a3, 0, 0, a3, aD, aE), y.drawImage(this.jI[dr - 1024 + iX.cT.jJ], 0, 0), y.setTransform(1, 0, 0, 1, 0, 0)) : (v.w.textAlign(y, 1), v.w.textBaseline(y, 1), y.font = v.w.bA(0, .89 *
			u), y.fillText(iX.cT.jK(dr), aD + .5 * u, aE + (.35 - v.w.j1 + .56) * u))
	}
}

function a0a() {
	this.a8 = new Array(4), this.a0b = new Uint16Array(2), this.a0c = new Uint16Array(2), this.a0d = new Int32Array(2), this.dU = new Uint32Array(2), this.a0e = new Uint32Array(2), this.aA = new Uint8Array(4), this.a0f = new Uint8Array(4), this.eD =
		new Uint32Array(4), this.a0g = new Uint32Array(5), this.dE = new Uint32Array(8), this.cn = new Uint32Array(8), this.a0h = new Uint16Array(16), this.a0i = new Uint16Array(512), this.a0j = new Uint16Array(512), this.a0k = new Uint16Array(512),
		this.a0l = new Uint16Array(0), this.e = function() {
			var n = au.av * au.fp;
			this.a0l.length !== n && (this.a0l = new Uint16Array(n))
		}, this.a0m = function(a8, o2) {
			return a8[0] = o2, a8
		}, this.a0n = function(a8, o2, o4) {
			return a8[0] = o2, a8[1] = o4, a8
		}, this.a0o = function(a8, o2, o4, o6) {
			return a8[0] = o2, a8[1] = o4, a8[2] = o6, a8
		}, this.a0p = function(a8, o2, o4, o6, a0q) {
			return a8[0] = o2, a8[1] = o4, a8[2] = o6, a8[3] = a0q, a8
		}
}

function a0r() {
	var a0s = 0,
		a0t = 0,
		a0u = 0,
		a0v = null,
		a0w = null;

	function a10(en, a12, a14) {
		var lI = en.username;
		return (lI += "   " + bk.co.a15(en.rF, en.rG, en.rH)) + function(en) {
			en = en.rI;
			if (en < 1e3) return "   Gold: " + en;
			if ((en %= 1024) < 1e3) return "   Gold: " + en + "k";
			return "   Gold: " + (en - 999) + "M"
		}(en) + ("   IP: " + lz.m0.bC(en.rJ, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][a14 ? a0t : a0z(en, a12)])
	}

	function a0z(en, a12) {
		return a0t = a12 || bk.bx.rd(en.cW) ? 1 : 0
	}
	this.a0x = 0, this.a0y = function() {
		!a0s || a0t === a0z(a0w) && a0u === a0w.rI || (a0u = a0w.rI, a0v.show(-1, -1, a10(a0w, 0, 1), 1, 1, a0w.color))
	}, this.a11 = function(eL, en, a12) {
		var a13 = eL.getBoundingClientRect();
		this.show(a13.left, a13.top, en, 0, a12), eL.addEventListener("mouseleave", function remove() {
			eL.removeEventListener("mouseleave", remove), bk.nN && bk.nN.eP(1)
		}), this.a0x = a12
	}, this.show = function(aD, aE, en, a17, a12) {
		a0v = a0v || new a18, a0u = (a0w = en).rI, a0v.show(aD, aE, a10(en, a12), a17, 0, a0w.color), a0s = 1
	}, this.eP = function(a19) {
		this.a0x = 0, a0v && a0v.eP(a19) && (a0s = 0, a0w = null)
	}
}

function wV() {
	var jl = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + jl + .5) / 15))
}

function a1A() {
	var a1B = null,
		a1C = null,
		a1D = 0,
		a1E = 0,
		a1F = null;

	function a1H() {
		0 !== a1C.rF && (bk.mc.eP(), c4.c5(8, 29, new qh(25, {
			action: 0,
			cW: lz.m0.bC(a1C.cW, 5),
			a1O: 0
		}, 29)))
	}

	function a1J() {
		return !bk.rN || bk.co.a1T(a1C) ? 1 : 0
	}

	function a1I() {
		var aD = a1B.aD,
			aE = a1B.aE,
			a1W = (bk.mc.eP(), a1J());
		a1B = new a1G([new k7(sO.a1N[5][0], function() {
			a1M(5, 0)
		}, a1W), new k7(sO.a1N[5][1], function() {
			a1M(5, 1)
		}, a1W), new k7(sO.a1N[5][2], function() {
			a1M(5, 2)
		}, a1W), new k7(sO.a1N[5][3], function() {
			a1M(5, 3)
		}, a1W)]), a1L(aD, aE), a1E = a1D = 2
	}

	function a1K() {
		29 === c4.rR && c4.mt().cY(lz.m0.bC(a1C.cW, 5))
	}

	function a1M(id, value) {
		5 === id && bg.lE.lF({
			action: 3,
			cW: lz.m0.bC(a1C.cW, 5),
			value: value
		})
	}

	function a1L(aD, aE, a1Z) {
		a1B.show(aD, aE, a1Z), bk.nN.show(a1B.aD, a1B.aE, a1C, 1)
	}
	this.md = function(eL, en) {
		a1D = 1, a1C = en, a1B = new a1G([new k7(L(71), a1H, 0 === en.rF ? 1 : 0), new k7(L(72), a1I, a1J()), new k7(L(73), a1K, 0)]), a1L((a1F = {
			clientX: eL.clientX,
			clientY: eL.clientY
		}).clientX, a1F.clientY, 1)
	}, this.lK = function(code) {
		if (29 !== c4.rR) return !1;
		if (!a1C) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.eP();
			else if (v.bB.startsWith(code, "Numpad") || v.bB.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === a1D) this.md(a1F, a1C);
				else {
					if (!a1B) return !1;
					1 === a1D ? code <= 1 ? a1H() : 2 === code ? a1I() : (a1K(), this.eP()) : (a1M(a1E, ds.dt(code - 1, 0, sO.a1N[a1E].length - 1)), this.eP())
				}
		}
		return !0
	}, this.eP = function() {
		a1D = 0, a1B && a1B.eP(), a1B = null, bk.nN.eP()
	}
}

function rn() {
	function a1l() {
		au.rm.bQ()
	}

	function a1s(es, a1r) {
		0 < a1r && (au.rk[es] += a1r, au.rk[es + 1] += a1r, au.rk[es + 2] += a1r)
	}

	function a1n(es) {
		return au.rk[es + 2] > au.rk[es] && au.rk[es + 2] > au.rk[es + 1]
	}
	this.vj = -1, this.a1a = 0, this.a1b = 0, this.a1c = 8, this.a1d = 32, this.a1e = 8, this.a1f = 32, this.a1g = [0, 0], this.iG = [0, 0, 0, 0], this.zH = null, this.a1h = !0, this.a1i = !1, this.rt = function() {
		-1 !== this.vj && clearTimeout(this.vj), this.vj = -1, this.zH = null, rw.s1()
	}, this.e = function() {
		7 === bi.bj() || this.a1i || (this.a1h = !0, this.a1a = 0, this.a1b = 1, this.a1g = [au.nD.qB[au.bq].a1j[0], au.nD.qB[au.bq].a1k[0]], this.iG = [au.nD.qB[au.bq].s9[3], au.nD.qB[au.bq].s9[4], au.nD.qB[au.bq].s9[5], au.nD.qB[au.bq].s9[6]],
			this.a1c = au.nD.qB[au.bq].s9[7], this.a1d = au.nD.qB[au.bq].s9[8], this.a1e = au.nD.qB[au.bq].s9[9], this.a1f = au.nD.qB[au.bq].s9[10], this.a1h ? this.vj = setTimeout(a1l, 16) : this.bQ())
	}, this.bQ = function() {
		if (8 === bi.bj() && eS.zd()) this.vj = setTimeout(a1l, 16);
		else {
			if (0 === this.a1a) {
				var nJ = ge.tz();
				if (ge.gf(au.nD.qB[au.bq].s9[2]), rw.gw([au.av, au.fp, au.nD.qB[au.bq].s9[0], au.nD.qB[au.bq].s9[1]]), ge.gf(nJ), this.zH = rw.v0(), this.a1a++, this.a1h) return void(this.vj = setTimeout(a1l, 16))
			}
			for (var es, a2, nJ = this.a1h ? 10 : 1e6, nJ = au.fp - this.a1b - 1 < nJ ? au.fp - this.a1b - 1 : nJ, a1m = this.a1b + nJ, aE = this.a1b; aE < a1m; aE++)
				for (var aD = 1; aD < au.av - 1; aD++) a1n(es = 4 * (a2 = aD + aE * au.av)) ? this.a1o(es, a2, 1) : (this.a1o(es, a2, 0), function(aD, aE, es) {
					return 1 < aD && a1n(es - 4) || aD < au.av - 2 && a1n(es + 4) || 1 < aE && a1n(es - 4 * au.av) || aE < au.fp - 2 && a1n(es + 4 * au.av)
				}(aD, aE, es) && this.a1q(aD, aE));
			this.a1b = a1m, this.a1b >= au.fp - 1 ? (au.ri.putImageData(au.rj, 0, 0, 1, 1, au.av - 2, au.fp - 2), bR.bS = !0, this.rt()) : this.a1h && (this.vj = setTimeout(a1l, 16))
		}
	}, this.a1o = function(es, a2, t) {
		a1s(es, Math.floor(this.a1g[t] + this.iG[t] * this.zH[a2] / 1e4) - au.rk[es])
	}, this.a1t = function(es, pW, a1u, t, iG) {
		a1s(es, Math.floor(this.a1g[t] + (1 - pW / a1u) * iG) - au.rk[es])
	}, this.a1q = function(fg, fh) {
		for (var es, pW, a1u, vY = fg - this.a1d, a1v = fh - this.a1d, a1w = fg + this.a1d, a1m = fh + this.a1d, vY = vY < 1 ? 1 : vY, a1w = a1w > au.av - 2 ? au.av - 2 : a1w, a1m = au.fp - 2 < a1m ? au.fp - 2 : a1m, aE = a1v < 1 ? 1 : a1v; aE <=
			a1m; aE++)
			for (var aD = vY; aD <= a1w; aD++) a1n(es = 4 * (aD + aE * au.av)) ? (a1u = this.a1c + (this.a1d - this.a1c) * this.zH[aD + au.av * aE] / 1e4, Math.abs(fg - aD) > a1u || Math.abs(fh - aE) > a1u || a1u <= (pW = Math.sqrt((fg - aD) * (
				fg - aD) + (fh - aE) * (fh - aE))) || this.a1t(es, pW, a1u, 1, this.iG[3])) : (a1u = this.a1e + (this.a1f - this.a1e) * this.zH[aD + au.av * aE] / 1e4, Math.abs(fg - aD) > a1u || Math.abs(fh - aE) > a1u || a1u <= (pW = Math
				.sqrt((fg - aD) * (fg - aD) + (fh - aE) * (fh - aE))) || this.a1t(es, pW, a1u, 0, this.iG[2]))
	}
}

function a1x() {
	this.a1y = function() {
		for (var aD, aE, q = a1z - 1; 0 <= q; q--) aD = ds.kh(a20[q], 4) % au.av, aE = ds.kh(a20[q], 4 * au.av), ci.iO[a21] = Math.min(aD, ci.iO[a21]), ci.iP[a21] = Math.min(aE, ci.iP[a21]), ci.iS[a21] = Math.max(aD, ci.iS[a21]), ci.iT[a21] =
			Math.max(aE, ci.iT[a21])
	}, this.a22 = function() {
		var jl, es, q, n = ci.eC[a21].length,
			a23 = a6.a23;
		loop: for (q = n - 1; 0 <= q; q--) {
			for (jl = 3; 0 <= jl; jl--)
				if (es = ci.eC[a21][q] + a23[jl], a6.fB(es) || a6.a24(es) && a6.a25(es) !== a21) {
					a6.a26(ci.eC[a21][q], a21);
					continue loop
				} ci.eC[a21][q] = ci.eC[a21][n - 1], ci.eC[a21].pop(), n--
		}
	}, this.a27 = function() {
		var player = a21,
			a28 = ci.a28,
			cj = ci.cj,
			a29 = ci.a29,
			n = a28[player].length,
			a23 = a6.a23;
		loop: for (var q = n - 1; 0 <= q; q--) {
			for (var a2A = !1, a2B = !1, jl = 3; 0 <= jl; jl--) {
				var es = a28[player][q] + a23[jl];
				if (a6.a2C(es, player)) continue loop;
				a2A = a2A || a6.a1n(es), a2B = a2B || a6.a2D(es)
			}
			a2A ? cj[player].push(a28[player][q]) : a2B ? a29[player].push(a28[player][q]) : a6.a2E(a28[player][q], player), a28[player][q] = a28[player][n - 1], a28[player].pop(), n--
		}
	}, this.a2F = function() {
		ci.iF[a2G] -= a1z
	}, this.a2H = function(border) {
		for (var n = border.length, q = n - 1; 0 <= q; q--) a6.jm(a2G, border[q]) || (border[q] = border[n - 1], border.pop(), n--)
	}, this.a2I = function(border) {
		for (var n = border.length, q = n - 1; 0 <= q; q--) !a6.jm(a2G, border[q]) && a6.cs(border[q]) && (border[q] = border[n - 1], border.pop(), n--)
	}, this.a2J = function(border) {
		for (var jl, es, n = border.length, a23 = a6.a23, q = n - 1; 0 <= q; q--)
			for (jl = 3; 0 <= jl; jl--)
				if (es = border[q] + a23[jl], a6.a2C(es, a2G)) {
					ci.a28[a2G].push(border[q]), border[q] = border[n - 1], border.pop(), n--;
					break
				}
	}, this.a2K = function() {
		for (var jl, es, a23 = a6.a23, q = a1z - 1; 0 <= q; q--)
			for (jl = 3; 0 <= jl; jl--) es = a20[q] + a23[jl], a6.a2L(a2G, es) && a6.a2M(es) && (ci.a28[a2G].push(es), a6.a2N(es, a2G))
	}, this.a2O = function() {
		var aD, aE;
		loop: for (; ci.iP[a2G] < ci.iT[a2G];) {
			for (aD = ci.iS[a2G]; aD >= ci.iO[a2G]; aD--)
				if (a6.jm(a2G, 4 * (ci.iP[a2G] * au.av + aD))) break loop;
			ci.iP[a2G]++
		}
		loop: for (; ci.iP[a2G] < ci.iT[a2G];) {
			for (aD = ci.iS[a2G]; aD >= ci.iO[a2G]; aD--)
				if (a6.jm(a2G, 4 * (ci.iT[a2G] * au.av + aD))) break loop;
			ci.iT[a2G]--
		}
		loop: for (; ci.iO[a2G] < ci.iS[a2G];) {
			for (aE = ci.iT[a2G]; aE >= ci.iP[a2G]; aE--)
				if (a6.jm(a2G, 4 * (aE * au.av + ci.iO[a2G]))) break loop;
			ci.iO[a2G]++
		}
		loop: for (; ci.iO[a2G] < ci.iS[a2G];) {
			for (aE = ci.iT[a2G]; aE >= ci.iP[a2G]; aE--)
				if (a6.jm(a2G, 4 * (aE * au.av + ci.iS[a2G]))) break loop;
			ci.iS[a2G]--
		}
	}, this.a2P = function(player, d7) {
		return 0 === l.f9[player] || l.f9[player] !== l.f9[d7]
	}, this.a2Q = function(player) {
		for (var q, xx, n = ci.a28[player].length, a23 = a6.a23, jl = 3; 0 <= jl; jl--)
			for (xx = a23[jl], q = 0; q < n; q++)
				if (a6.fB(ci.a28[player][q] + xx)) return !0;
		return !1
	}, this.a2R = function(player) {
		for (var q, xx, n = ci.a28[player].length, a23 = a6.a23, jl = 3; 0 <= jl; jl--)
			for (xx = a23[jl], q = 0; q < n; q++)
				if (a6.a2S(ci.a28[player][q]) && a6.fB(ci.a28[player][q] + xx)) return !0;
		return !1
	}, this.a2T = function(a2U, a2V) {
		for (var q, bT, xx, es, a2W = ci.a28[a2U].length, a2X = ci.a28[a2V].length, a23 = (a2X < a2W && (bT = a2U, a2U = a2V, a2V = bT, bT = a2W, a2W = a2X, 0), a6.a23), jl = 3; 0 <= jl; jl--)
			for (xx = a23[jl], q = 0; q < a2W; q++)
				if (es = ci.a28[a2U][q] + xx, a6.a24(es) && a6.a25(es) === a2V) return !0;
		return !1
	}, this.a2Y = function(a2U, a2V) {
		for (var q, xx, es, a2W = ci.a28[a2U].length, a23 = a6.a23, jl = 3; 0 <= jl; jl--)
			for (xx = a23[jl], q = 0; q < a2W; q++)
				if (a6.a2S(ci.a28[a2U][q]) && (es = ci.a28[a2U][q] + xx, a6.a24(es)) && a6.a25(es) === a2V) return !0;
		return !1
	}
}

function a2Z() {
	var a2a, a2b;

	function a2i() {
		(a2a = new WebSocket("wss://territorial.io/s52/")).onopen = a2n, a2a.onclose = function() {
			a2o()
		}
	}

	function a2n() {
		if (a2a && a2a.readyState === a2a.OPEN) {
			var ap = new a2q;
			ap.gw(1608), ap.pq(1, 0), ap.pq(6, 7), ap.pq(2, bL ? bL.id : 3), ap.pq(1, gc.a2r ? 1 : 0), ap.pq(1, gc.a2s ? 1 : 0), ap.pq(1, gc ? gc.a2f : 0);
			for (var q = 0; q < a2b.length && q < 228; q++) ap.pq(7, a2b.charCodeAt(q) % 128);
			a2a.send(ap.li), a2o()
		}
	}

	function a2o() {
		a2a && (a2a.onclose = null, a2a.onopen = null, a2a = null)
	}
	window.addEventListener("error", function a2c(eL) {
		a2b = "";
		try {
			var a2d = function(eL) {
				if (!eL.error) return 0;
				var stack = eL.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, a2p = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a2p.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(eL);
			return 0 === a2d || eL.lineno < 2 ? void console.log("Error: External Code") : (window.removeEventListener("error", a2c), a2b = eL.lineno + " " + eL.colno + "|" + a2d, __fx.reportError(eL, a2b), alert("Error:\n" + eL.filename +
				" " + eL.lineno + " " + eL.colno + " " + eL.message))
		} catch (eL) {
			a2b = "SE|" + a2b + "|" + eL, console.log(a2b), alert(a2b)
		}
		a2i()
	})
}

function a2t() {
	this.hR = function(lI, lq, a2u) {
		for (var a2v = [], n = lI.length, max = 0, q = 0; q < n; q++) {
			var kk = lI.charCodeAt(q);
			a2v.push(kk), max = Math.max(max, kk)
		}
		var a2w = max < 128 ? 7 : 16;
		for (a2u.pq(lq, n), a2u.pq(1, +(16 == a2w)), q = 0; q < n; q++) a2u.pq(a2w, a2v[q])
	}
}

function a2x() {
	this.e = function() {
		this.a8 = [], this.t = 0
	}, this.a2y = function() {
		return new Uint8Array(this.a8)
	}, this.pq = function(a2z, value) {
		for (var a8 = this.a8, eT = this.t + a2z - 1, a30 = 1 + (eT >> 3); a8.length < a30;) a8.push(0);
		for (var q = this.t; q <= eT; q++) a8[q >> 3] |= (value >> eT - q & 1) << 7 - (7 & q);
		this.t += a2z
	}, this.pt = function(a8, lq, lr) {
		var a31 = v.aN.a32(a8);
		this.pq(lq, a31);
		for (var q = 0; q < a31; q++) this.pq(lr, a8[q])
	}, this.pu = function(a8, lq, lu) {
		var a31 = v.aN.a32(a8);
		this.pq(lq, a31);
		for (var q = 0; q < a31; q++) this.pr(a8[q], lu)
	}, this.pr = function(lI, lq) {
		var n = lI.length;
		this.pq(lq, n);
		for (var q = 0; q < n; q++) this.pq(16, lI.charCodeAt(q))
	}, this.ps = function(k) {
		var a33 = (k = k.toDataURL()).split(",");
		if (a33.length < 2) console.log("error 266");
		else {
			k = v.bB.m3(k = a33[a33.length - 1], "/", "_"), k = v.bB.m3(k, "\\+", "-");
			var k = v.bB.m3(k, "=", ""),
				wk = c1.m0.a34(k),
				n = wk.length;
			this.pq(30, n);
			for (var q = 0; q < n; q++) this.pq(6, wk[q])
		}
	}
}

function no() {
	gs.a35(), b5.setTransform(ay, 0, 0, ay, 0, 0), b5.imageSmoothingEnabled = ay < 3, b5.drawImage(au.qN, eZ.fS(), eZ.fT()), h0.a36.aR(), b5.drawImage(a37, eZ.fS(), eZ.fT()), gs.aR(), ae.aR(), du.aR(), (f.fZ ? (f5.aR(), h6) : (eo.aR(), h4.aR(), h5
		.aR(), h6.aR(), dy.aR(), h8.aR(), eZ.aR(), ba.aR(), f5.aR(), h7.aR(), h9.aR(), e2.aR(), eO.aR(), hA.aR(), h1.aR(), hJ)).aR(), c4.aR()
}

function a38(sx, ap, ar) {
	sx.clearRect(0, 0, ap, ar), sx.fillStyle = b7.ex, sx.fillRect(0, 0, ap, ar)
}

function a39(sx, ap, ar, a3A) {
	sx.fillStyle = b7.b9, sx.fillRect(0, 0, ap, a3A), sx.fillRect(0, 0, a3A, ar), sx.fillRect(ap - a3A, 0, a3A, ar), sx.fillRect(0, ar - a3A, ap, a3A)
}

function fw(sx, aD, aE, u, a3A, es, a3B) {
	sx.fillStyle = b7.b9;
	var es = Math.floor(u * es),
		w7 = (es += (es - a3A) % 2, Math.floor((es - a3A) / 2)),
		u = Math.floor((u - es) / 2);
	sx.fillRect(aD + u, aE + u + w7, es, a3A), a3B && sx.fillRect(aD + u + w7, aE + u, a3A, es)
}

function a3D() {
	this.e9 = new a3E
}

function a3F() {
	var a3G = [];
	this.e = function() {
		a3G = []
	}, this.ur = function() {
		return 65536 === a3G.length
	}, this.x0 = function(a3H, a3I) {
		for (var um = a3G, n = um.length, q = 0; q < n; q++) {
			var es = um[q];
			if (es[0] === a3H && es[es.length - 1] === a3I) return q
		}
		return -1
	}, this.un = function(ue) {
		var a3J = new Uint32Array(ue.length);
		return a3J.set(ue), a3J.reverse()
	}, this.a3K = function(a3L, a3M) {
		var jB = a3L.length - 1,
			a3N = new Uint32Array(jB + a3M.length);
		return a3N.set(a3L, 0), a3N.set(a3M, jB), a3N
	}, this.a3O = function(a3L, a3M, a3P, a2, a3Q) {
		a3Q && (a3P = (a3M = this.un(a3M)).length - a3P - 2);
		a3Q = a3M.subarray(a3P + 1 + (a2 === a3M[a3P + 1])), a2 = new Uint32Array(a3L.length + a3Q.length);
		return a2.set(a3L, 0), a2.set(a3Q, a3L.length), a2
	}, this.x1 = function(ue) {
		return a3G.push(ue), a3G.length - 1
	}, this.get = function(q) {
		return a3G[q]
	}, this.wv = function() {
		return a3G
	}, this.a3S = function(a3H, a3I) {
		return null
	}
}

function a3T() {
	function a3j(player, d7, a3X) {
		3 <= a3X && 2142 < bR.el() && (d7 === f.g || ci.iN[d7] < ds.kh(ci.iN[player], 20)) && gv.a3a(player, 20)
	}

	function a3m(player, aW, d7, a3X) {
		3 <= a3X && a3X < 6 && ds.kh(ci.iN[player], 8) > ci.iN[d7] && (aW = Math.max(ds.kh(11 * ci.iN[d7], 5), ds.kh(ci.iN[player], 10)));
		a3X = ci.eC[player].length;
		dH.dI.a41(player, d7), dH.dI.a42(player, d7, a3X, aW)
	}

	function a3i(player, aW) {
		var d7 = f.g,
			n = ci.eC[player].length;
		dH.dI.a43(player), ci.eC[player].length !== n && dH.dI.a42(player, d7, n, aW)
	}
	this.a3U = new Uint8Array(f.g), this.e = function() {
		this.a3U.fill(0)
	}, this.a3V = function(player, aW) {
		var a3W, a3X, a3Y, a3Z;
		dC.dF(player) && (a3W = dV.ki(player), 3 <= (a3X = gv.aW[player]) && a3X < 6 && (aW = Math.max(ci.iN[player] - a3W, aW)), a3Y = ci.cj[player].length, a3Z = ci.a28[player].length, 30 * ci.iF[player] > f.gD && f4[player] < 10 && 100 *
			a3Z <= a3Y && gv.a3a(player, 10), f.j ? function(player, aW, a3X, a3W) {
				var d7;
				if (dH.dI.a3e(player, !1) || dH.dI.a3f(player, !1)) {
					if (!dH.dI.a3g(player))
						if (dH.dI.a3h()) a3i(player, aW), a3j(player, f.g, a3X);
						else {
							if (ge.u2(gv.a3k[a3X])) d7 = dH.dI.a3l(player);
							else {
								if (dH.dI.a3n() && ge.u2(gv.a3o[a3X]) && dH.dI.a3p(), 6 === a3X) return a3m(player, aW, dH.dI.a3q(), a3X);
								d7 = dH.dI.a3r(player)
							}
							a3m(player, aW, d7, a3X), a3j(player, d7, a3X)
						}
				} else ae.a3c.bQ(player) || dH.a3s.bQ(player) || ! function(player, aW, a3X, a3W) {
					var a3U = dH.a3u.a3U;
					a3U[player] = 0;
					var a3v = l.f9[player];
					if (0 !== a3v) {
						var a3w = ci.iN[player],
							iF = ci.iF;
						if (player < f.g4 && (aW = a3w), !(a3w < iF[player] || 5 === a3X && a3w < a3W || 4 === a3X && a3w < ds.kh(a3W, 2))) {
							f5.a3x(a3v);
							for (var n = a9.a0c[0], a0i = a9.a0i, q = ge.u0(n), jO = 0; jO < n; jO++) {
								var jA = a0i[(jO + q) % n];
								if (a3U[jA]) return gi.a3y.a3z(player, jA, aW)
							}
							var cg = ae.af.cg;
							for (jO = 0; jO < n; jO++)
								if (jA = a0i[(jO + q) % n], cg[jA] && jA !== player) return gi.a3y.a3z(player, jA, aW)
						}
					}
				}(player, aW, a3X, a3W)
			}(player, aW, a3X, a3W) : (!a3Z || a3Y && (a3Y < a3Z && !ge.u0(10) || 100 * a3Z <= a3Y && ge.u0(3) || !ge.u0(8))) && ae.a3c.bQ(player) || function(player, aW, a3X) {
				dH.dI.a3e(player, !0) || dH.dI.a3f(player, !0) ? dH.dI.a3g(player) || (dH.dI.a3h() ? a3i(player, aW) : ge.u2(gv.a3k[a3X]) ? a3m(player, aW, dH.dI.a3l(player), a3X) : 5 === a3X ? a3m(player, aW, dH.dI.a40(), a3X) : (dH.dI
				.a3n() && ge.u2(gv.a3o[a3X]) && dH.dI.a3p(), a3m(player, aW, 6 === a3X ? dH.dI.a3q() : dH.dI.a3r(player), a3X))) : dH.a3s.bQ(player)
			}(player, aW, a3X))
	}
}

function gb() {
	this.d4 = function(player, a2) {
		gx.a44(player, cq.fF(a2), cq.fG(a2)) && (bR.bS = !0), f.gB && this.bQ()
	}, this.bQ = function() {
		f.gE = !1;
		for (var q = 0; q < f.g4; q++) 0 !== ci.hL[q] && 0 === ci.iF[q] && gx.a45(q);
		0 !== ci.hL[f.al] ? (dL.a46[7] = ci.iF[f.al], dL.a46[8] = ci.iN[f.al], h5.a47(), h8.yH(), f.gC || eS.ze(ci.iO[f.al] - 5, ci.iP[f.al] - 5, ci.iS[f.al] + 5, ci.iT[f.al] + 5), hJ.e()) : hA.show(!1, !1, !1, !0), eo.a48(18), du.iR(), du.hM(!
			0), h0.af.a49(), eO.eP(), f.d3 = null, gr.a4A = !0, gr.a4B(), f.gB && bL.bM.setState(1)
	}
}

function a1G(a4C) {
	var a4D = document.createElement("div"),
		a4E = document.createElement("div"),
		a0s = (this.aD = 0, this.aE = 0);

	function a4G() {
		bk.mc.eP()
	}
	this.me = a4C, this.show = function(aD, aE, a1Z) {
		if (a0s) return [0, 0];
		a0s = 1, this.aD = aD, this.aE = aE,
			function(self, a1Z) {
				var ap = v.w.kP(.16, .7),
					ar = a4C.length * ap / 3,
					a4J = ao.ap / ao.ed,
					a4K = ao.ar / ao.ed,
					fi = Math.min(1, Math.min(a4J / ap, a4K / ar));
				ap *= fi, ar *= fi, a1Z && (self.aD += v.w.kP(.03, .5)), self.aD = ds.dt(self.aD, 0, a4J - ap), self.aE = ds.dt(self.aE, 0, a4K - ar), a4E.style.left = self.aD + "px", a4E.style.top = self.aE + "px", a4E.style.width = ap + "px",
					a4E.style.height = ar + "px", a4E.style.font = v.w.bA(0, .3 * ar / a4C.length), v.w.kV(a4E, 5);
				for (var q = 1; q < a4C.length; q++) v.w.kV(a4C[q].button, 8)
			}(this, a1Z), document.body.appendChild(a4D)
	}, this.eP = function() {
		a0s && (a0s = 0, a4D.removeEventListener("click", a4G), c4.removeChild(document.body, a4D))
	};
	for (var q = 0; q < a4C.length; q++) new kA("" + (1 + q), a4C[q].button, 0, 1);
	a4D.style.position = "fixed", a4D.style.top = "0", a4D.style.left = "0", a4D.style.width = "100%", a4D.style.height = "100%", a4D.style.zIndex = "5", a4E.style.position = "absolute",
		function() {
			for (var a4H = (100 / a4C.length).toFixed(2) + "%", q = 0; q < a4C.length; q++) a4C[q].button.style.width = "100%", a4C[q].button.style.height = a4C[q].button.style.maxHeight = a4H, a4C[q].button.style.padding = "0.0em 0.9em", a4E
				.appendChild(a4C[q].button)
		}(), a4D.appendChild(a4E), a4D.addEventListener("click", a4G)
}

function a4L() {
	var oT, oU, oV, kt;

	function mY() {
		oX(), 2 !== f.data.sResourcesType && (f.data.sResourcesData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		2 === f.data.sResourcesType && v.aN.oZ(oV.oa(), f.data.sResourcesData, 2047)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(74), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(25), L(26), L(27)],
			value: f.data.sResourcesType
		}, function(t) {
			oX(), 2 !== t || f.data.sResourcesData || (f.data.sResourcesData = new Uint16Array(f.g)), f.data.sResourcesType = t, c4.c5(28)
		})), kt.push(kv)
	}(kt = []), function(kt) {
		var kv;
		1 === f.data.sResourcesType && ((kv = new kw).kz("Value"), kv.l1(new jv({
			t: -1,
			value: f.data.sResourcesValue
		}, 1, 0, function(eL) {
			var value = ds.dt(Math.floor(eL.target.value), 0, 2047);
			eL.target.value = f.data.sResourcesValue = value
		})), kt.push(kv))
	}(kt), function(kt) {
		var kv;
		2 === f.data.sResourcesType && ((kv = new kw).kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.sResourcesData, 2)), kv.l1(oV), kt.push(kv))
	}(kt), kt))
}

function a3E() {
	this.a4M = function(a3) {
		var a4N;
		return au.s6(au.bq) && f.data.passableMountains && (a4N = a6.uV(a3), this.a4O(f.al, a4N) || this.a4P(f.al, a4N)) && 0 !== (a4N = function(a4V) {
			for (var aD = cq.fF(a4V), aE = cq.fG(a4V), max = Math.max(au.av, au.fp) - 2, a4W = max * max, a4X = !1, a4Y = 0, aH = 0; aH < max; aH++) {
				var a4Z, a2 = function(aD, aE, aH) {
					for (var q = 0; q <= aH; q++)
						for (var bz = -1; bz < 2; bz += 2)
							for (var jO = -1; jO < 2; jO += 2)
								for (var jA = 0; jA < 2; jA++) {
									var a3 = function(aD, aE) {
										if (cq.a4c(aD, aE)) {
											aD = cq.a4d(aD, aE), aE = cq.cr(aD);
											if (a6.cs(aE) && a6.a4e(aE)) return aD
										}
										return 0
									}(aD + jA * bz * q + (1 - jA) * jO * aH, aE + jA * jO * aH + (1 - jA) * bz * q);
									if (a3) return a3
								}
					return 0
				}(aD, aE, aH);
				a2 && (a4Z = cq.a4a(aD, aE, a2)) < a4W && (a4Y = a2, a4W = a4Z, a4X || (a4X = !0, max = Math.floor(Math.sqrt(a4Z)) + 1))
			}
			return a4Y
		}(cq.a4R(a3))) && (a3 = cq.cr(a4N), a6.fB(a3) || (a3 = a6.a25(a3)) !== f.al && a4S.a2P(a3, f.al)) ? a4N : 0
	}, this.eA = function(player, a2) {
		a2 = cq.cr(a2);
		if (a6.cs(a2)) {
			if (a6.fB(a2)) a9.dE[0] = f.g;
			else if (a6.a25(a2) !== a9.dE[0]) return !1;
			for (var f9 = function(a3) {
					var a23 = a6.a23,
						f9 = [];
					loop: for (var jl = 3; 0 <= jl; jl--) {
						var aV = a3 + a23[jl];
						if (a6.a4U(aV)) {
							for (var id = a6.uV(aV), q = 0; q < f9.length; q++)
								if (id === f9[q]) continue loop;
							a9.eD[f9.length] = aV, f9.push(id)
						}
					}
					return f9
				}(a2), n = f9.length, q = 0; q < n; q++)
				if (this.a4O(player, f9[q]) || this.a4P(player, f9[q])) return a9.eD[0] = a9.eD[q], !0
		}
		return !1
	}, this.a4O = function(player, a4N) {
		for (var a29 = ci.a29[player], n = a29.length, a4f = Math.max(ds.kh(n, 12), 1), a23 = a6.a23, q = 0; q < n; q += a4f)
			for (var ax = a29[q], jl = 3; 0 <= jl; jl--) {
				var aV = ax + a23[jl];
				if (a6.a4U(aV) && a4N === a6.uV(aV)) return !0
			}
		return !1
	}, this.a4P = function(player, a4N) {
		for (var a29 = ci.a29[player], n = a29.length, a23 = a6.a23, q = 0; q < n; q++)
			for (var ax = a29[q], jl = 3; 0 <= jl; jl--) {
				var aV = ax + a23[jl];
				if (a6.a4U(aV) && a4N === a6.uV(aV)) return !0
			}
		return !1
	}
}

function a4g() {
	var km, kn, kt, kv;

	function a4h() {
		sR.sH !== fa.fE.data[12].value ? (sR.e(), c4.c5(8, 1, new qh(30))) : c4.c5(1)
	}
	this.show = function() {
			km.show(), this.resize()
		}, this.eP = function() {
			km.eP()
		}, this.resize = function() {
			km.resize(), kn.resize()
		}, this.lK = function(jA) {
			2 === jA && km.lL[0].lM()
		}, km = new ko(L(75), [new k7("⬅️ " + L(6), a4h), new k7(L(76), function() {
			c4.ml(), fa.l9.a4i(), c4.c5(2)
		})]), kt = [], (kv = new kw).kz(L(77)), kv.lH(L(78)), kt.push(kv),
		function(kt) {
			var kv = new kw,
				a8 = (kv.kz(L(106)), sR.data.a4r());
			kv.oe(new og({
				oh: a8,
				value: sR.data.a4s(a8)
			}, function(t) {
				return fa.l9.lA(12, a8[t].split(":")[0]), !0
			})), kt.push(kv)
		}(kt),
		function(kt) {
			var kv = new kw,
				a4l = (kv.kz(L(104)), []);
			kv.l1(new lB([new k7(L(105), function(eL) {
				xf.a4m();
				for (var q = 0; q < a4l.length; q++) a4l[q].eL.value = xf.a4n[q];
				return v.w.lD(eL), !0
			}).button]));
			for (var q = 0; q < xf.a4o.length; q++) {
				kv.lH(xf.a4o[q]);
				for (var bz = 0; bz < 2; bz++) {
					var t = 2 * q + bz,
						ju = new jv({
							value: xf.a4n[t],
							t: -1
						});
					ju.eL.a4p = t, a4l.push(ju), ju.eL.addEventListener("keydown", function(eL) {
						eL.preventDefault();
						var code = eL.code;
						eL.target.value = code, xf.a4q(eL.target.a4p, code)
					}), bz && (ju.eL.style.marginLeft = "4%"), ju.eL.style.width = "48%", kv.l1(ju)
				}
			}
			kt.push(kv)
		}(kt), (kv = new kw).kz(L(79)), fa.fE.data[1].oh = [L(80), L(81), L(82), L(83)], kv.oe(new og(fa.fE.data[1])), kt.push(kv), (kv = new kw).kz(L(84)), fa.fE.data[9].oh = [L(81), L(85), L(86)], kv.oe(new og(fa.fE.data[9])), kt.push(kv), (kv =
			new kw).kz(L(87)), fa.fE.data[11].oh = [L(88), L(89), L(90)], kv.oe(new og(fa.fE.data[11])), kt.push(kv), (kv = new kw).kz(L(91)), kv.l1(new q9(fa.fE.data[2])), kt.push(kv), (kv = new kw).kz(L(92)), kv.l1(new q9(fa.fE.data[7])), kt.push(
			kv), (kv = new kw).kz(L(93)), kv.l1(new q9(fa.fE.data[8])), kt.push(kv), (kv = new kw).kz(L(94)), kv.l1(new jv(fa.fE.data[5])), kt.push(kv), (kv = new kw).kz(L(95)), kv.l1(new q9(fa.fE.data[13], L(96))), kv.l1(new q9(fa.fE.data[14], L(
			97))), kt.push(kv), (kv = new kw).kz(L(98)), kv.oe(new og({
			oh: [L(99), L(100), L(101)],
			value: oH.p4
		}, function(q) {
			oH.p4 = q
		})), kt.push(kv), (kv = new kw).kz(L(102)), kv.l1(new q9(fa.fE.data[15])), kv.lH(L(103)), kv.l1(new jv(fa.fE.data[16], 1, 0, function(eL) {
			eL.target.value = ds.dt(Math.floor(eL.target.value), 0, 16)
		})), kt.push(kv), kn = new kq(km.kr, kt)
}

function a4t() {
	this.a4u = function() {
		var q;
		if (bo.size < ln.lo(23)) bg.af.pL(0, 3259);
		else {
			var qi = bo.bp(6),
				n = bo.bp(10),
				data = [];
			if (9 === qi || 10 === qi || 11 === qi || 13 === qi) {
				for (q = 0; q < n; q++) data.push([bo.bp(30), c1.c2.c3(5), bo.lk(32), 0, bo.bp(30)]);
				8 === c4.rR && c4.mt().sc(21, !0, {
					qi: qi,
					data: data
				})
			} else if (12 === qi) {
				for (q = 0; q < n; q++) data.push([bo.bp(20), bo.bp(30), bo.bp(30), bo.lk(32), bo.bp(30), c1.c2.c3(5), c1.c2.c3(5)]);
				8 === c4.rR && c4.mt().sc(21, !0, {
					qi: qi,
					data: data
				})
			} else {
				var pS = bo.bp(16);
				if (bo.ll(39 + 16 * pS + n * (0 === qi ? 111 : 1 === qi ? 101 : 2 === qi || 3 === qi ? 127 : 212))) {
					if (0 === qi)
						for (q = 0; q < n; q++) data.push([bo.bp(30), c1.lw.lx(bo.bp(5)), bo.bp(16), bo.bp(30), bo.bp(30)]);
					else if (1 === qi)
						for (q = 0; q < n; q++) data.push([bo.bp(16), c1.lw.lx(bo.bp(3)), bo.bp(16), c1.lw.lx(bo.bp(5)), bo.bp(31), bo.bp(30)]);
					else if (2 === qi || 3 === qi)
						for (q = 0; q < n; q++) data.push([bo.bp(30), c1.lw.lx(bo.bp(5)), bo.lk(32), bo.bp(30), bo.bp(30)]);
					else
						for (q = 0; q < n; q++) data.push([bo.bp(20), bo.bp(30), bo.bp(30), bo.bp(30), bo.bp(30), bo.lk(32), bo.bp(30), c1.lw.lx(bo.bp(5)), c1.lw.lx(bo.bp(5))]);
					8 === c4.rR && c4.mt().sc(21, !0, {
						qi: qi,
						data: data
					})
				} else bg.af.pL(0, 3260)
			}
		}
	}, this.a4v = function() {
		if (bo.size < ln.lo(29)) bg.af.pL(0, 3265);
		else {
			var a4w = bo.bp(4),
				a4x = bo.bp(7),
				a4y = bo.bp(11);
			if (bo.ll(29 + 16 * a4x + 16 * a4y + 11 * a4w)) {
				for (var data = [], q = 0; q < a4w; q++) {
					for (var a4z = c1.lw.lx(bo.bp(3)), a50 = bo.bp(8), a51 = [], bz = 0; bz < a50; bz++) a51.push(bo.bp(16));
					data.push({
						name: "[" + a4z + "]",
						a51: a51
					})
				}
				8 === c4.rR && c4.mt().sc(23, !0, data)
			} else bg.af.pL(0, 3266)
		}
	}
}

function a52(title, a53, a54) {
	var km, a55;
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), a55.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, a54 = a54 || [new k7("⬅️ " + L(6), function() {
		c4.kp()
	}, b7.a56)], km = new ko(title, a54), a55 = new a57(km.kr, a53), v.w.textAlign(km.kr.style, 1)
}

function a58(a59, a5A, a5B) {
	this.aD = 0, this.aE = 0, this.ap = 0, this.ar = 0, this.resize = function() {
		this.ar = Math.min(v.w.a03(a5B || .5) * a59[1] * ao.bO, ao.ar - 2 * fx.gap), this.ap = Math.min(this.ar * (a59[0] / a59[1]), ao.ap - 2 * fx.gap), this.ar = a59[1] * this.ap / a59[0], this.aD = fx.gap + a5A[0] * (ao.ap - this.ap - 2 * fx
			.gap), this.aE = fx.gap + a5A[1] * (ao.ar - this.ar - 2 * fx.gap)
	}, this.a5C = function() {
		return this.aD + .5 * this.ap
	}
}

function a5D() {
	this.e = function() {
		this.a5E = 0, this.a5F = [], this.a5G = 0, this.a5H = 0
	}, this.mj = function() {
		var a5J;
		f.gB || (a5J = this, 2 === f.gN ? a5J.a5F = gX.a5K.a5L() : f.j ? a5J.a5F = gX.a5K.a5M() : a5J.a5F = gX.a5K.a5N(), a5J.a5E = a5O.oN.a5P(), a5J.a5G = Math.max(1, gX.a5K.a5Q(a5J.a5F)), gi.cw.a5R(), 8 === f.gI ? gX.result.a5H = 0 : a5J.a5H =
			100 * gX.result.a5E * (1 + f.gJ))
	}
}

function si(ij) {
	gc && !ij || (a5g(), ds = new a5h, a0O = new a5i, v = new a5j, b7 = new a5k, f = new fy, sR = new sC, lz = new a5l, c1 = new a5m, gv = new a5n, eE = new a5o, hB = new a5p, eS = new zN, gx = new a5q, gy = new a5r, a5T = new a5s, eO = new a5t, e2 =
		new a5u, eo = new a5v, oG = new bD, h9 = new sl, ba = new a5w, h5 = new a5x, eZ = new fH, vw = new vX, h7 = new a5y, h4 = new a5z, h8 = new y2, hA = new a60, a5U = new a61, oH = new a62, bi = new a63, iQ = new a64, a6 = new a65, wd =
		new a66, ez = new a67, dT = new kX, e8 = new a3D, dC = new a68, dV = new a69, a5V = new a6A, du = new hb, ci = new a6B, gg = new a6C, gZ = new a6D, iX = new a6E, gp = new us, rw = new a6F, xg = new a6G, bg = new a6H, ge = new tx, dH =
		new a6I, gs = new a6J, xQ = new eH, hJ = new a6K, ao = new a6L, dy = new a6M, oI = new a6N, hF = new a6O, a5W = new yj, wg = new a6P, hD = new a04, hE = new a6Q, q1 = new a6R, hG = new a6S, hH = new a6T, gi = new a6U, d0 = new a6V, h6 =
		new a6W, ln = new a2q, pm = new a2x, bo = new lh, a5X = new a6X, r9 = new x2, cq = new a6Y, ae = new a6Z, a9 = new a0a, h0 = new a6a, e4 = new wY, gX = new a6b, au = new re, xV = new a6c, c4 = new a6d, hU = new wN, bL = new a6e, gc =
		new a6f, a5O = new oL, fa = new pX, l = new a6g, f5 = new a6h, fq = new a6i, gr = new a6j, gt = new a6k, a5Y = new a6l, dL = new a6m, h1 = new a6n, bR = new a6o, a5b = new z4, fx = new zz, pM = new a6p, dd = new a6q, a5c = new a6r, bk =
		new a6s, a5d = new a6t, gY = new a6u, a5e = new a6v, a4S = new a1x, gc.e(), bL.e(), ao.go(), fa.e(), sR.e(), sR.sN(), (xf = new a6x).e(), v.e(), gt.e(), bg.e(), lz.e(), c1.e(), au.e(), c4.e(), a5Z = new a6y, ao.e(), bR.e(), fx.e(), a5Y
		.e(), a5a = new a6z, ge.e(), dV.pt(), hU.e(), gp.e(), bi.e(), vw.e(), gg.e(), r9.e(), iQ.e(), bR.bS = !0, setTimeout(function() {
			au.gw(2, 14071)
		}, 0), c4.c5(5, 5), a5X.cJ() || bL.bM.a70(), ao.a71(), gc.a2f = 1)
}

function a72() {
	var km, kn, kt;
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), kn.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(L(107), [new k7("⬅️ " + L(6), function() {
		c4.c5(7, c4.a73(7).p8)
	}), new k7(L(108), function() {
		fa.l9.lA(105, c1.m0.a75(kn.a76[0].a77[0].eL.value, 5)), fa.l9.lA(106, c1.m0.a75(kn.a76[1].a77[0].eL.value, 15)), c4.c5(8, c4.a73(7).p8, new qh(18))
	})]), kn = new kq(km.kr, ((kt = []).push(function() {
		var kv = new kw;
		return kv.kz(L(53)), kv.l1(new jv({
			value: "",
			t: -1
		})), kv
	}()), kt.push(function() {
		var kv = new kw,
			a7B = (kv.kz(L(109)), new jv({
				value: "",
				t: -1
			}));
		return a7B.eL.type = "password", kv.l1(a7B), kv.l1(new lB([new k7(L(110), function(eL) {
			return eL.textContent === L(110) ? (eL.textContent = L(111), a7B.eL.type = "text") : (eL.textContent = L(110), a7B.eL.type = "password"), !0
		}).button])), kv
	}()), kt.push(function() {
		var kv = new kw;
		return kv.kz(L(112)), kv.lH(L(113)), kv.lH(L(114)), kv.lH(L(115)), kv
	}()), kt))
}

function a7C() {
	function a7O() {
		var kj;
		return 8 === f.gI ? 0 : (kj = Math.floor(ci.a7P[f.al] / 50), (kj = Math.min(kj, 200)) / 100)
	}

	function a7D() {
		var kj = a7O();
		0 !== kj && eo.ev(440, L(116, [kj.toFixed(2)]), 40, 0, b7.tD, b7.ex, -1, !1)
	}
	this.bQ = function() {
		var a7E;
		0 === gX.result.a5H || 0 === gX.result.a5F.length || 8 === f.gI ? v.cw.cy(f.al) && a7D() : (function(a7E) {
			7 !== f.gI && 10 !== f.gI && 9 !== f.gI || 0 !== f.gO && a7E && eo.ev(600, L(120, [a7E.toFixed(2)]), 40, 0, b7.b9, b7.ex, -1, !1)
		}(a7E = function() {
			eo.ev(520, L(117), 40, 0, b7.b9, b7.ex, -1, !1);
			for (var a5F = gX.result.a5F, n = a5F.length, iF = ci.iF, a8 = [], q = 0; q < n; q++) {
				var es = a5F[q];
				a8.push({
					es: es,
					bT: iF[es]
				})
			}
			a8.sort((bz, jO) => jO.bT - bz.bT);
			var a7Q = ci.ew,
				bT = gX.result.a5G,
				kj = gX.result.a5H,
				lI = "",
				a7E = 0;
			for (q = 0; q < n; q++) {
				var a7S = a8[q].bT * kj / (100 * bT),
					a7T = a7Q[a8[q].es] + ": " + a7S.toFixed(2) + "   ";
				a8[q].es === f.al && (a7E = a7S), 2 < q && 4 !== n ? 3 === q && (lI += "(" + L(118, [n - 3]) + ")") : lI += a7T
			}
			eo.ev(560, v.bB.a7U(lI), 40, 0, b7.tD, b7.ex, -1, !1), a7E ? eo.ev(580, L(119, [a7E.toFixed(2) + " + " + a7O().toFixed(2)]), 40, 0, b7.tD, b7.ex, -1, !1) : v.cw.cy(f.al) && a7D();
			return a7E
		}()), 2 === f.gN || 7 <= f.gI || function(a7E) {
			var a5F = gX.result.a5F,
				n = a5F.length,
				a7V = ci.a7V,
				iF = ci.iF,
				a7W = [];
			loop: for (var q = 0; q < n; q++) {
				var es = a5F[q],
					a4z = v.bB.rV(a7V[es]);
				if (null !== a4z) {
					for (var a7X = iF[es], jO = a7W.length - 1; 0 <= jO; jO--)
						if (a4z === a7W[jO].name) {
							a7W[jO].bT += a7X, a7W[jO].a8.push({
								es: es,
								bT: a7X
							});
							continue loop
						} a7W.push({
						name: a4z,
						bT: a7X,
						a8: [{
							es: es,
							bT: a7X
						}]
					})
				}
			}
			if (0 !== a7W.length) {
				a7W.sort((bz, jO) => jO.bT - bz.bT);
				var a8 = a7W[0].a8,
					a7Y = (a8.sort((bz, jO) => jO.bT - bz.bT), "[" + a7W[0].name + "]"),
					a7Z = 512 * gX.result.a5H / 26214400,
					aL = (eo.ev(0, L(121, [a7Y, a7Z.toFixed(4)]), 40, 0, b7.b9, b7.ex, -1, !1), a8.length),
					a7a = a7W[0].bT,
					a7b = 1e4 * a7Z;
				for (q = 0; q < aL; q++)
					if (a8[q].es === f.al) {
						eo.ev(600, L(122, [(a7b * a8[q].bT / (10 * a7a)).toFixed(2)]), 40, 0, b7.b9, b7.ex, -1, !1), eo.ev(640, L(123, [(.2 * a7E).toFixed(2), a7Y]), 40, 0, b7.b9, b7.ex, -1, !1);
						break
					}
			}
		}(a7E))
	}, this.a7I = function() {
		var a7J, a7K;
		f.gB || (a7J = ci, a7K = f.al, 0 === a7J.a7L[a7K]) || a7J.a7M[a7K] < 1 || 2 * a7J.dG[a7K] > 3 * (a7J.a7N[a7K] + a7J.a7M[a7K]) || a7D()
	}
}

function og(vI, qC) {
	this.a7c = [];
	var a7d = this.a7c;

	function click() {
		for (var q = 0; q < a7d.length; q++) a7d[q].textContent = a7d[q].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var t = parseInt(this.name);
		void 0 !== vI.t && fa.l9.lA(vI.t, t), qC && qC(t)
	}
	for (var a7e, n = vI.oh.length, q = 0; q < n; q++)(a7e = document.createElement("p")).textContent = "⚪ " + vI.oh[q], a7e.style.margin = "0", a7e.name = "" + q, a7e.style.cursor = "pointer", a7e.style.fontSize = "1em", a7e.addEventListener(
		"click", click), a7d.push(a7e);
	a7d[vI.value].textContent = a7d[vI.value].textContent.replace("⚪", "🟢")
}

function a6s() {
	this.rM = 0, this.rN = null, this.bx = null, this.co = null, this.af = null, this.mc = null, this.nN = null, this.message = null, this.cY = null, this.cT = null, this.rO = null, this.cI = new a7f, this.c8 = 0, this.vg = 0, this.e = function() {
		this.vg = bR.eM, this.rM = c1.m0.vV(fa.fE.data[105].value, 5), this.bx = new rC, this.co = new a7g, this.af = new a7h, this.mc = new a1A, this.nN = new a0r, this.message = new a7i, this.cY = new a7j, this.cT = new a7k, this.rO = new a7l,
			this.af.e(), a5d.e(), this.c8 = 1, bL.bM.setState(1), bi.setState(0), hU.turnstile.mE()
	}, this.lj = function() {
		this.cT && this.cT.lj(), this.rN = null, this.bx = null, this.co = null, this.af = null, this.mc = null, this.nN = null, this.message = null, this.cY = null, this.cT = null, this.rO = null, this.c8 = 0, a5d.lj(), bL.bM.setState(0)
	}
}

function a7m() {
	this.mj = function() {
		if (2 === f.gN) f.gO = 2;
		else {
			if (8 === f.gI) v.cw.is(0) || 0 === ci.hL[0] ? f.gP = 1 : v.cw.is(1) || 0 === ci.hL[1] ? f.gP = 0 : f.gP = +(ci.iF[1] > ci.iF[0]);
			else {
				if (f.j) {
					var a7o = f5.a7p();
					if (f.gQ = a7o, l.m[a7o]) return void(f.gO = +(l.f9[f.al] === a7o))
				}
				f.gP = f7[0]
			}
			f.gO = +(f.gP === f.al)
		}
	}
}

function a62() {
	var a7q, a7r, sp, a7s, a7t, a7u, a7v, a7w, a7x, so, a7y, yk, a7z, a80 = 1,
		a81 = 0,
		a82 = 0;

	function a84(a85) {
		a85 ? a7z = (a7z + 1) % bg.af.om : (bg.af.close(a7z, 3280), a80 ? a80 = 0 : (a82 = 1 - a82, 0 === (a81 = (a81 + 1) % 2) && (a7z = (a7z + 1) % bg.af.om, bg.af.close(a7z, 3280)))), yk = bR.eM, oH.p2 = a82, bg.af.ot(a7z, 4, 1) && bg.mo.a86(a7z)
	}

	function a88() {
		0 === a7z ? pM.pN(3249) : a84()
	}

	function a8D(aE, va, bn) {
		var az = Math.floor((ao.ap - a7s) / 2) + a7v,
			b3 = az + Math.floor(bn * (a7s - 2 * a7v));
		b5.lineWidth = va, b5.beginPath(), b5.moveTo(az, aE), b5.lineTo(b3, aE), b5.lineTo(Math.floor(az - a7v + bn * a7s), aE + sp), b5.lineTo(az - a7v, aE + sp), b5.closePath()
	}
	this.a83 = 1, this.p4 = 0, this.p2 = 0, this.e = function() {
		bi.setState(6), a7q = 0, a7r = 1, a7w = "rgba(0,220,120,0.4)", a7x = "rgba(0,0,0,0.8)", this.resize(), bR.bS = !0, a80 = 1, a81 = 0, a7z = this.a83 - 1, a82 = 0 === this.p4 ? gc.p5 ? 1 : 0 : this.p4 - 1, a84(1)
	}, this.resize = function() {
		a7s = Math.floor((bL.bM.bN() ? .5 : .25) * ao.bO), a7t = a7s + 12, sp = Math.floor(.125 * a7s), a7v = 3 * sp, a7u = Math.floor(.225 * a7s), a7y = Math.floor(.3 * sp), so = v.w.bA(0, a7y)
	}, this.a87 = function(bf) {
		bf === a7z && a88()
	}, this.fY = function(aD, aE) {
		var az = Math.floor((ao.ap - a7t) / 2),
			b1 = Math.floor(.5 * (ao.ar - fx.gap - sp - a7u)) + sp + fx.gap;
		return az < aD && aD < az + a7t && b1 < aE && aE < b1 + a7u && (this.xq(), a5U.fc(aD, aE, !1), !0)
	}, this.xq = function() {
		bg.af.mm(3260), c4.af.a2l()
	}, this.bQ = function() {
		6 === bi.bj() && (bR.eM > yk + 12e3 && a88(), 100 < (a7q += .07 * a7r * (a7q < 16 ? 5 + a7q : 84 < a7q ? 105 - a7q : 17)) ? (a7q = 100, a7r = -1) : a7q < 0 && (a7q = 0, a7r = 1), a7w = "rgba(0," + Math.floor(190 - 1.9 * a7q) + "," + Math
			.floor(120 - 1.2 * a7q) + "," + (.4 + .004 * a7q) + ")", a7x = "rgba(0," + Math.floor(1.9 * a7q) + "," + Math.floor(1.2 * a7q) + "," + (.8 - .004 * a7q) + ")", bR.bS = !0)
	}, this.aR = function() {
		var aD = Math.floor((ao.ap - a7t) / 2),
			aE = Math.floor(.5 * (ao.ar - fx.gap - sp - a7u));
		! function(title, aE, va, bn) {
			b5.fillStyle = a7x, a8D(aE, va, 1), b5.fill(), b5.fillStyle = a7w, a8D(aE, va, bn), b5.fill(), b5.strokeStyle = b7.b9, a8D(aE, va, 1), b5.stroke(),
				function(a8F, aE) {
					v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = so, b5.fillStyle = b7.b9, b5.fillText(a8F, Math.floor(.5 * ao.ap), Math.floor(aE + .58 * sp))
				}(title, aE)
		}(L(124), aE, 3, a7q / 100),
		function(aD, aE, ap, ar, mh) {
			b5.fillStyle = b7.k6, b5.fillRect(aD, aE, ap, ar), b5.lineWidth = 3, b5.strokeStyle = b7.b9, b5.strokeRect(aD, aE, ap, ar);
			var n = Math.floor(.3 * ar);
			v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = v.w.bA(0, n), b5.fillStyle = b7.b9, b5.fillText(mh, Math.floor(aD + ap / 2), Math.floor(aE + ar / 2 + .1 * n))
		}(aD, aE + sp + fx.gap, a7t, a7u, L(6))
	}
}

function a6j() {
	this.a8G = !1, this.zy = !1, this.a4A = !1, this.a8H = [0, 0, 0, 0], this.render = function() {
		var az, b1, b3, b4;
		this.a4A = this.a4A || this.zy, (this.zy || this.a8G && this.a4A) && (az = fq.a8I[0], b1 = fq.a8I[1], b3 = fq.a8I[2], b4 = fq.a8I[3], az = az < this.a8H[0] ? this.a8H[0] : az, b1 = b1 < this.a8H[1] ? this.a8H[1] : b1, b3 = b3 > this.a8H[
				2] ? this.a8H[2] : b3, b4 = b4 > this.a8H[3] ? this.a8H[3] : b4, this.zy = !1, this.a8G = !1, az === this.a8H[0] && b1 === this.a8H[1] && b3 === this.a8H[2] && b4 === this.a8H[3] ? this.a4B() : az <= b3 && b1 <= b4 && h2
			.putImageData(h3, 0, 0, az, b1, b3 - az + 1, b4 - b1 + 1))
	}, this.a4B = function() {
		this.a4A && this.a8H[2] >= this.a8H[0] && this.a8H[3] >= this.a8H[1] && h2.putImageData(h3, 0, 0, this.a8H[0], this.a8H[1], this.a8H[2] - this.a8H[0] + 1, this.a8H[3] - this.a8H[1] + 1), this.a4A = !1
	}, this.nc = function() {
		this.a8H[2] >= this.a8H[0] && this.a8H[3] >= this.a8H[1] && h2.putImageData(h3, 0, 0, this.a8H[0], this.a8H[1], this.a8H[2] - this.a8H[0] + 1, this.a8H[3] - this.a8H[1] + 1), this.a4A = !1
	}, this.e = function() {
		var aD, aE;
		this.a8G = !1, this.zy = !1, this.a4A = !1, this.a8H[0] = au.av, this.a8H[1] = au.fp, this.a8H[2] = this.a8H[3] = 0;
		loop: for (aD = 1; aD < au.av - 1; aD++)
			for (aE = au.fp - 2; 1 < aE; aE--)
				if (1 === vD[a6.a8J(aD, aE) + 2]) {
					this.a8H[0] = aD;
					break loop
				} loop: for (aE = 1; aE < au.fp - 1; aE++)
			for (aD = au.av - 2; 1 < aD; aD--)
				if (1 === vD[a6.a8J(aD, aE) + 2]) {
					this.a8H[1] = aE;
					break loop
				} loop: for (aD = au.av - 2; 0 < aD; aD--)
			for (aE = au.fp - 2; 1 < aE; aE--)
				if (1 === vD[a6.a8J(aD, aE) + 2]) {
					this.a8H[2] = aD;
					break loop
				} loop: for (aE = au.fp - 2; 0 < aE; aE--)
			for (aD = au.av - 2; 1 < aD; aD--)
				if (1 === vD[a6.a8J(aD, aE) + 2]) {
					this.a8H[3] = aE;
					break loop
				}
	}
}

function a8K() {
	this.bn = 0, this.bq = 0, this.mapSeed = 0, this.br = 0, this.bs = 0, this.bt = 0, this.bu = 0, this.bv = 0, this.bw = 0, this.spawningSeed = 0, this.cG = 0, this.cH = 0, this.cO = [], this.cP = 1048575, this.a8L = 0, this.cK = [{
		bq: 0,
		mapSeed: 0,
		br: 0,
		eM: 100,
		bv: 0
	}, {
		bq: 1,
		mapSeed: 0,
		br: 1,
		eM: 200,
		bv: 0
	}, {
		bq: 2,
		mapSeed: 0,
		br: 2,
		eM: 300,
		bv: 0
	}, {
		bq: 3,
		mapSeed: 0,
		br: 3,
		eM: 400,
		bv: 0
	}, {
		bq: 0,
		mapSeed: 0,
		br: 9,
		eM: 500,
		bv: 0
	}, {
		bq: 1,
		mapSeed: 0,
		br: 10,
		eM: 600,
		bv: 0
	}, {
		bq: 2,
		mapSeed: 0,
		br: 8,
		eM: 700,
		bv: 0
	}, {
		bq: 3,
		mapSeed: 0,
		br: 3,
		eM: 800,
		bv: 0
	}]
}

function a5q() {
	var a8M, a8N, bF, bG, a8O, a8P, a8Q, a8R, a8S, a8T;

	function a8V() {
		var g8 = f.g8;
		for (a8S = g8; a8S < f.g; a8S++) a8U();
		for (a8S = f.gE ? f.g4 : 0; a8S < g8; a8S++) {
			if (!a8Y()) {
				for (var jO = f.g9 = a8S; jO < g8; jO++) a8S = jO, a8U();
				return
			}
			a8Z(a8P + a8M * a8O + ds.kh(a8O, 2), a8Q + a8N * a8O + ds.kh(a8O, 2))
		}
	}

	function a8w(player) {
		for (var iO = ci.iO, iP = ci.iP, iS = ci.iS, iT = ci.iT, aE = iP[player]; aE <= iT[player]; aE++)
			for (var aD = iO[player]; aD <= iS[player]; aD++) {
				var a3 = a6.a8J(aD, aE);
				a6.a24(a3) && (a6.a2S(a3) ? a6.a2N(a3, player) : a6.a2E(a3, player))
			}
	}

	function a8v(a8, qj, qk) {
		var bT = a8[qj];
		a8[qj] = a8[qk], a8[qk] = bT
	}

	function a8Y() {
		return function() {
			var q;
			for (q = 0; q < 8; q++)
				if (a8M = ds.kh(bF * ge.random(), ge.value(100)), a8N = ds.kh(bG * ge.random(), ge.value(100)), a91()) return 1;
			return
		}() || function() {
			var aF, aG, bz, j8, jO, j7;
			for (aF = ds.kh(bF * ge.random(), ge.value(100)), aG = ds.kh(bG * ge.random(), ge.value(100)), bz = 40; 1 <= bz; bz--)
				for (j8 = bG - bz; 0 <= j8; j8 -= 40)
					for (a8N = (j8 + aG) % bG, jO = 40; 1 <= jO; jO--)
						for (j7 = bF - jO; 0 <= j7; j7 -= 40)
							if (a8M = (j7 + aF) % bF, a91()) return 1;
			return
		}()
	}

	function a91() {
		for (var es, a93, gap = ds.kh(a8O - a8R, 2), a1m = a8Q + a8N * a8O + gap, a1w = a8P + a8M * a8O + gap, a92 = a1m + a8R - 1; a1m <= a92; a92--)
			for (a93 = a1w + a8R - 1; a1w <= a93; a93--)
				if (es = a6.a8J(a93, a92), !a6.cs(es) || a6.a2S(es)) return;
		return 1
	}

	function a8Z(j7, j8) {
		a8U(), a94(j7 - 2, j8 - 2)
	}

	function a8U() {
		ci.hL[a8S] = 0, ci.iF[a8S] = ci.a8t[a8S] = 0, ci.eC[a8S] = [], ci.a28[a8S] = [], ci.cj[a8S] = [], ci.a29[a8S] = [], ci.iO[a8S] = ci.iP[a8S] = ci.iS[a8S] = ci.iT[a8S] = 0
	}

	function a94(j7, j8) {
		var es, q, a95, a96;
		for (ci.hL[a8S] = 1, ci.iO[a8S] = j7 + 10, ci.iP[a8S] = j8 + 10, ci.iT[a8S] = ci.iS[a8S] = 0, a95 = j7; a95 < j7 + 4; a95++)
			for (a96 = j8; a96 < j8 + 4; a96++)(j7 < a95 && a95 < j7 + 3 || j8 < a96 && a96 < j8 + 3) && (es = a6.a8J(a95, a96), a6.cs(es)) && (ci.iO[a8S] = Math.min(a95, ci.iO[a8S]), ci.iS[a8S] = Math.max(a95, ci.iS[a8S]), ci.iP[a8S] = Math.min(a96,
				ci.iP[a8S]), ci.iT[a8S] = Math.max(a96, ci.iT[a8S]), a8T[ci.iF[a8S]] = es, ci.iF[a8S]++, a6.a2E(es, a8S));
		for (ci.a8t[a8S] = ci.iF[a8S], q = ci.iF[a8S] - 1; 0 <= q; q--) a6.a97(a8T[q], a8S) ? (a6.a2N(a8T[q], a8S), ci.a28[a8S].push(a8T[q])) : a6.a1p(a8T[q]) ? (a6.a2N(a8T[q], a8S), ci.cj[a8S].push(a8T[q])) : a6.a98(a8T[q]) && (a6.a2N(a8T[q], a8S),
			ci.a29[a8S].push(a8T[q]))
	}
	this.e = function() {
		if (a8T = new Array(12), a8R = 6, a8O = 10, bF = ds.kh(au.av, a8O), bG = ds.kh(au.fp, a8O), a8P = ds.kh(au.av - a8O * bF, 2), a8Q = ds.kh(au.fp - a8O * bG, 2), f.gE)
			for (var q = 0; q < f.g4; q++) a8S = q, a8U(), ci.hL[a8S] = 1;
		(0 === f.data.spawningType ? a8V : 1 === f.data.spawningType ? (a8V(), function() {
			var a8a = f.gG;
			f.gH || a8a++;
			if (!(a8a < 3)) {
				for (var data = f.data, jh = (f.gE ? f.g4 : 0) + data.teamPlayerCount[0], eT = f.g9, a8b = new Uint32Array(a8a), a8c = new Uint32Array(a8a), a8d = new Uint16Array(a8a), a8e = new Uint16Array(a8a), f9 = l.f9, iO = ci.iO,
						iP = ci.iP, iS = ci.iS, iT = ci.iT, a0j = a9.a0j, a0k = a9.a0k, q = jh; q < eT; q++) a0j[q] = iO[q] + iS[q] >> 1, a0k[q] = iP[q] + iT[q] >> 1;
				for (q = jh; q < eT; q++) {
					var id = f9[q];
					a8b[id] += a0j[q], a8c[id] += a0k[q]
				}
				var m = l.m;
				for (q = 1; q < a8a; q++) {
					var jB = Math.max(data.teamPlayerCount[m[q]], 1);
					a8d[q] = ds.kh(a8b[q], jB), a8e[q] = ds.kh(a8c[q], jB)
				}
				var a8f = l.a8f,
					a8g = l.a8g,
					a8h = l.a8h,
					a0i = a9.a0i;
				for (q = 0; q < 512; q++) a0i[q] = q;
				for (var pW = 0; pW < 2 + (4 <= a8a); pW++)
					for (q = jh; q < eT; q++) {
						for (var a3L = q, lf = a0i[a3L], a8i = 1, aH = ds.a8j(a0j[lf] - a8d[1], a0k[lf] - a8e[1]), bz = 2; bz < a8a; bz++) {
							var tF = ds.a8j(a0j[lf] - a8d[bz], a0k[lf] - a8e[bz]);
							tF < aH && (aH = tF, a8i = bz)
						}
						var a8k = f9[a3L];
						if (a8i !== a8k) {
							if (2 === pW && 4 <= a8a) {
								var a8l = Math.max((a8i + 1) % a8a, 1),
									a8m = ds.a8j(a0j[lf] - a8d[a8l], a0k[lf] - a8e[a8l]);
								for (bz = 1; bz < a8a; bz++) tF = ds.a8j(a0j[lf] - a8d[bz], a0k[lf] - a8e[bz]), aH < tF && tF < a8m && (a8m = tF, a8l = bz);
								a8l !== a8k && ds.a8j(a8d[a8k] - a8d[a8l], a8e[a8k] - a8e[a8l]) < ds.a8j(a8d[a8k] - a8d[a8i], a8e[a8k] - a8e[a8i]) && (a8i = a8l)
							}
							var a8n = m[a8i],
								a8o = a8g[a8n] + (f.gE ? 0 : a8h[a8n]),
								a3M = a8f[a8o],
								lg = a0i[a3M],
								a8p = a8g[a8n + 1];
							aH = ds.a8j(a0j[lg] - a8d[a8k], a0k[lg] - a8e[a8k]);
							for (var jA = a8o + 1; jA < a8p; jA++) {
								var a8q = a8f[jA],
									a8r = a0i[a8q];
								(tF = ds.a8j(a0j[a8r] - a8d[a8k], a0k[a8r] - a8e[a8k])) < aH && (aH = tF, a3M = a8q)
							}
							a3M < jh || eT <= a3M || (lg = a0i[a3M], a8b[a8k] += a0j[lg] - a0j[lf], a8c[a8k] += a0k[lg] - a0k[lf], a8b[a8i] += a0j[lf] - a0j[lg], a8c[a8i] += a0k[lf] - a0k[lg], jB = data.teamPlayerCount[m[a8k]], a8d[a8k] =
								ds.kh(a8b[a8k], jB), a8e[a8k] = ds.kh(a8c[a8k], jB), jB = data.teamPlayerCount[a8n], a8d[a8i] = ds.kh(a8b[a8i], jB), a8e[a8i] = ds.kh(a8c[a8i], jB), a0i[a3L] = lg, a0i[a3M] = lf)
						}
					}! function() {
						for (var a0i = a9.a0i, iO = ci.iO, iP = ci.iP, iS = ci.iS, iT = ci.iT, iF = ci.iF, a8t = ci.a8t, a28 = ci.a28, cj = ci.cj, a29 = ci.a29, q = 0; q < 512; q++) {
							var a8u = a0i[q];
							if (a8u !== q) {
								a8v(iO, q, a8u), a8v(iP, q, a8u), a8v(iS, q, a8u), a8v(iT, q, a8u), a8v(iF, q, a8u), a8v(a8t, q, a8u), a8v(a28, q, a8u), a8v(cj, q, a8u), a8v(a29, q, a8u), a8w(q), a8w(a8u), a0i[q] = q;
								for (var ar = a8u, xx = a0i[ar]; xx !== q;) xx = a0i[ar = xx];
								a0i[ar] = a8u
							}
						}
					}()
			}
		}) : function() {
			var g8 = f.g8;
			for (a8S = g8; a8S < f.g; a8S++) a8U();
			for (a8S = f.gE ? f.g4 : 0; a8S < g8; a8S++)
				if (! function() {
						var spawningData = f.data.spawningData,
							j7 = spawningData[2 * a8S] + 1,
							spawningData = spawningData[2 * a8S + 1] + 1;
						if (3 < j7 && j7 < au.av - 5 && 3 < spawningData && spawningData < au.fp - 5 && a6.cs(a6.a8J(j7, spawningData)) && function(j7, j8) {
								var es, a93, a92;
								for (a92 = j8; j8 - 6 < a92; a92--)
									for (a93 = j7; j7 - 6 < a93; a93--)
										if (es = a6.a8J(a93, a92), a6.a2S(es)) return;
								return 1
							}(j7 + 3, spawningData + 3)) return a8Z(j7 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a8Y()) {
						for (var jO = f.g9 = a8S; jO < g8; jO++) a8S = jO, a8U();
						return
					}
					var j7 = a8P + a8M * a8O + ds.kh(a8O, 2),
						j8 = a8Q + a8N * a8O + ds.kh(a8O, 2);
					a8Z(j7, j8)
				}
		})(), dL.a46[7] = ci.iF[f.al]
	}, this.a44 = function(d7, a99, a9A) {
		var q, j7, j8, es, a8M, a8N;
		for (a8S = d7, q = 0; q < 20; q++)
			for (j7 = a99 + q; a99 - q <= j7; j7--)
				for (j8 = a9A + q; a9A - q <= j8; j8--)
					if ((j7 === a99 + q || j7 === a99 - q || j8 === a9A + q || j8 === a9A - q) && 3 < j7 && j7 < au.av - 5 && 3 < j8 && j8 < au.fp - 5 && a6.cs(a6.a8J(j7, j8)) && function(j7, j8) {
							var es, a93, a92;
							for (a92 = j8; j8 - 6 < a92; a92--)
								for (a93 = j7; j7 - 6 < a93; a93--)
									if (es = a6.a8J(a93, a92), a6.a2S(es) && !a6.a2L(a8S, es)) return;
							return 1
						}(j7 + 3, j8 + 3)) {
						if (0 < ci.iF[a8S]) {
							for (a8N = a8M = es = void 0, a8M = ci.iS[a8S]; a8M >= ci.iO[a8S]; a8M--)
								for (a8N = ci.iT[a8S]; a8N >= ci.iP[a8S]; a8N--) es = 4 * (a8N * au.av + a8M), a6.jm(a8S, es) && (a6.a9D(es), ci.iF[a8S]--);
							a8U()
						}
						return a94(j7 - 1, j8 - 1), !0
					} return !1
	}, this.a45 = function(d7) {
		a8S = d7, a8Y() ? a8Z(a8P + a8M * a8O + ds.kh(a8O, 2), a8Q + a8N * a8O + ds.kh(a8O, 2)) : a8U()
	}
}

function ma(mS, mM, a9E, mT, jo, jp) {
	var a4D = document.createElement("div"),
		a9F = document.createElement("div"),
		a9G = document.createElement("div"),
		a9H = document.createElement("div"),
		a9I = document.createElement("div"),
		a9J = document.createElement("div"),
		a9K = document.createElement("div"),
		a9L = document.createElement("div"),
		a9M = document.createElement("span"),
		a9N = document.createElement("div");
	this.mi = new jn(jo, jp), this.ms = new a9O(jp), this.my = [mS, mM, a9E, mT], this.n7 = function(bn) {
		bn = (bn / 10).toFixed(1) + "%";
		a9L.style.width = bn, a9M.innerHTML = bn
	}, this.mw = function() {
		this.ms.eP(a9J), this.mi.show(a9J)
	}, this.mx = function() {
		this.mi.eP(a9J), this.ms.show(a9J)
	}, this.mg = function() {
		return a9F
	}, this.show = function() {
		document.body.appendChild(a4D)
	}, this.eP = function() {
		c4.removeChild(document.body, a4D)
	}, this.resize = function(a9T) {
		var a9U = 1 - .4 * bL.bM.bN() * (ao.ap > 1.6 * ao.ar),
			a9V = v.w.kP(.05 * a9U),
			a9W = ao.ar > ao.ap,
			a9X = v.w.kP(.06 * a9U + .03 * a9W),
			a9Y = v.w.kP(.08 * a9U + .03 * a9W),
			a9Z = v.w.kP(.04 + .02 * a9W),
			a9W = v.w.kP(.02 * a9U + .01 * a9W),
			a9b = v.w.kP(.025);
		a4D.style.font = v.w.bA(0, a9b), a9I.style.font = v.w.bA(0, .9 * a9b), a9N.style.font = v.w.bA(0, .9 * a9b), a9U < 1 && (a9b = v.w.bA(0, a9U * a9b), a9G.style.font = a9b, a9I.style.font = a9b, a9N.style.font = a9b, a9K.style.font = a9b,
				a9H.style.font = a9b), a9F.style.height = v.w.kU(a9V), a9F.style.font = v.w.bA(0, .72 * a9V), v.w.kV(a9F, 2), a9G.style.top = v.w.kU(a9V), a9G.style.height = v.w.kU(a9Y), v.w.kV(a9G, 2), a9H.style.font = v.w.bA(0, a9U * v.w.kP(
				.02)), a9H.style.top = v.w.kU(a9V + a9Y), a9H.style.height = v.w.kU(a9Z), v.w.kV(a9H, 2), a9I.style.top = v.w.kU(a9V + a9Y + a9Z), a9I.style.height = v.w.kU(a9X), v.w.kV(a9I, 2), a9J.style.top = v.w.kU(a9V + a9Y + a9Z + a9X), a9J
			.style.height = v.w.kU(ao.ar / ao.ed - a9V - a9Y - 2 * a9X - a9Z - a9W), a9K.style.top = v.w.kU(ao.ar / ao.ed - a9X - a9W), a9K.style.height = v.w.kU(a9W), v.w.kV(a9K, 8), a9M.style.font = v.w.bA(0, .8 * a9W), a9N.style.top = v.w.kU(
				ao.ar / ao.ed - a9X), a9N.style.height = v.w.kU(a9X), v.w.kV(a9N, 8), mS.resize(a9G), mM.resize(a9G), a9E.resize(a9G), mT.resize(a9G), a9T ? this.mi.resize(a9J) : this.ms.resize()
	};
	jo = this;
	a4D.style.position = "absolute", a4D.style.top = "0", a4D.style.left = "0", a4D.style.width = "100%", a4D.style.height = "100%", a4D.style.backgroundColor = b7.a9P, r9.rA() || (a4D.style.backdropFilter = "blur(4px)", a4D.style
		.webkitBackdropFilter = "blur(4px)"), a9F.style.position = "absolute", a9F.style.top = "0", a9F.style.left = "0", a9F.style.width = "100%", a9F.style.display = "flex", a9F.style.alignItems = "center";
	for (var a8 = [a9G, a9H, a9I, a9N], q = 0; q < a8.length; q++) a8[q].style.position = "absolute", a8[q].style.left = "0", a8[q].style.width = "100%", v.w.qY(a8[q]);
	a9J.style.position = "absolute", a9J.style.left = "0", a9J.style.width = "100%", a9J.style.font = "inherit", a9K.style.position = "absolute", a9K.style.left = "0", a9K.style.width = "100%", a9L.style.position = "absolute", a9L.style.top = "0",
		a9L.style.left = "0", a9L.style.height = "100%", a9L.style.width = "50%", a9L.style.backgroundColor = b7.a9Q, a9M.innerHTML = "", a9M.style.position = "absolute", a9M.style.top = "50%", a9M.style.left = "50%", a9M.style.transform =
		"translate(-50%, -50%)", a9F.appendChild(function() {
			var lY = document.createElement("h1");
			return lY.textContent = L(125), lY.style.margin = "0 auto 0.15em auto", lY.style.fontFamily = "Arial Black, system-ui", lY.style.fontSize = "inherit", lY.style.fontWeight = "inherit", lY
		}()), a9G.appendChild(mS.mJ), a9H.appendChild(mM.mJ), a9I.appendChild(a9E.mJ), a9K.appendChild(a9L), a9K.appendChild(a9M), a9N.appendChild(mT.mJ), a4D.appendChild(a9F), a4D.appendChild(a9G), a4D.appendChild(a9H), a4D.appendChild(a9I), a4D
		.appendChild(a9J), a4D.appendChild(a9K), a4D.appendChild(a9N), jo.ms.show(a9J)
}

function a9d() {
	this.a5R = function() {
		for (var n = f.g4, a5F = gX.result.a5F, aL = a5F.length, a7P = (ln.gw(17 + 16 * n + 33 * aL), ln.pq(1, 1), ln.pq(4, 12), ln.pq(10, aL), ln.pq(1, +(2 === f.gN)), ln.pq(1, f.gP % 2), ci.a7P), q = 0; q < n; q++) ln.pq(16, a7P[q]);
		for (var iF = ci.iF, q = 0; q < aL; q++) {
			var es = a5F[q];
			ln.pq(9, es), ln.pq(24, iF[es])
		}
		bg.af.send(bg.af.cG, ln.li)
	}
}

function a6l() {
	this.a9e = new a9f, this.e = function() {
		this.a9e.resize()
	}
}

function a6K() {
	var a9g, zX;
	this.e = function() {
		a9g = 1, zX = 0
	}, this.bQ = function() {
		0 < a9g && (zX = 0 === zX ? bR.eM + 16 : zX, a9g = (a9g -= .001 * (bR.eM - zX)) < 0 ? 0 : a9g, zX = bR.eM, bR.bS = !0)
	}, this.aR = function() {
		0 < a9g && (b5.fillStyle = "rgba(0,0,0," + a9g + ")", b5.fillRect(0, 0, ao.ap, ao.ar))
	}
}

function a5w() {
	var a9j, a0Q, a9g, a9k, ar, ss, fontSize, a9l, a9m, a9n, a9o, canvas, sx, zX, a9p;

	function oa(q) {
		return L(0 === q ? 126 : 1 === q ? 127 : 2 === q ? 128 : 129)
	}

	function a9x() {
		f.j ? a9y + 4 * fx.gap + ar + f5.a9z() > h5.aE ? b5.drawImage(canvas, 2 * fx.gap + f5.a9z(), a9y + 2 * fx.gap) : b5.drawImage(canvas, fx.gap, a9y + 3 * fx.gap + f5.a9z()) : b5.drawImage(canvas, fx.gap, a9y + 2 * fx.gap)
	}

	function a9q() {
		canvas.width = a9j[0].width + a9n, canvas.height = ar + a9n, (sx = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a9j[0].width + a9n, ar + a9n), sx.translate(Math.floor(a9n / 2), Math.floor(a9n / 2)), sx.lineWidth = a9n, sx.fillStyle = 1 === a9j[0].a9w ? b7.aA0 : b7.ex, aA1(), sx.fill(), sx.strokeStyle = 1 === a9j[0].a9w ? b7.bc :
			b7.b9, aA1(), sx.stroke(), v.w.textAlign(sx, 1), v.w.textBaseline(sx, 1), sx.fillStyle = 1 === a9j[0].a9w ? b7.bc : b7.b9, sx.font = ss[0], sx.fillText(oa(a9j[0].a9v), Math.floor(a9j[0].width / 2), Math.floor(.72 * a9l[0] * ar)), sx
			.font = ss[1], sx.fillText(a9j[0].lI, Math.floor(a9j[0].width / 2), Math.floor((a9l[0] + .48 * a9l[1]) * ar))
	}

	function aA1() {
		sx.beginPath(), sx.moveTo(a9o, 0), sx.lineTo(a9j[0].width - a9o, 0), sx.lineTo(a9j[0].width, a9o), sx.lineTo(a9j[0].width, ar - a9o), sx.lineTo(a9j[0].width - a9o, ar), sx.lineTo(a9o, ar), sx.lineTo(0, ar - a9o), sx.lineTo(0, a9o), sx
			.closePath()
	}
	this.e = function() {
		a0Q = 4, a9g = a9k = zX = 0, a9j = [], ss = new Array(2), fontSize = new Array(2), (a9l = new Array(2))[0] = .3, a9l[1] = .7, a9m = new Array(4), canvas = document.createElement("canvas"), a9p = bR.eM + 2e3, this.resize()
	}, this.resize = function() {
		var q, ap;
		for (ar = Math.floor((bL.bM.bN() ? .062 : .047) * ao.bO), fontSize[0] = Math.floor(.85 * a9l[0] * ar), fontSize[1] = Math.floor(.85 * a9l[1] * ar), ss[0] = v.w.bA(1, fontSize[0]), ss[1] = v.w.bA(1, fontSize[1]), q = a9m.length - 1; 0 <=
			q; q--) a9m[q] = this.measureText(oa(q) + "000", ss[0]);
		if (a9n = Math.floor(1 + .05 * ar), a9o = Math.floor(.2 * ar), 0 < a9j.length) {
			for (q = a9j.length - 1; 0 <= q; q--) ap = this.measureText(a9j[q].lI + "00", ss[1]), a9j[q].width = ap < a9m[q] ? a9m[q] : ap;
			a9q()
		}
	}, this.bQ = function() {
		0 !== a0Q && (4 === a0Q ? bR.eM > a9p && (a0Q = 0, 1 === f.eR) && ba.a9s(au.nD.qB[au.bq].name, 3, 1, 9) : (1 === a0Q ? (0 === a9g && (a9q(), a9g = 1e-4), 1 <= (a9g += .002 * (bR.eM - zX)) && (a9k = 0, a0Q = 2, a9g = 1), bR.bS = !0) :
			2 === a0Q ? ((a9k += (bR.eM - zX) / 1e3) > a9j[0].zc || 1 < a9k && 1 < a9j.length) && (a0Q = 3) : 3 === a0Q && ((a9g -= .002 * (bR.eM - zX)) <= 0 && (a9g = 0, a9j.shift(), a0Q = 0 < a9j.length ? 1 : 0), bR.bS = !0), zX = bR.eM
			))
	}, this.measureText = function(lI, ss) {
		return b5.font = ss, Math.floor(b5.measureText(lI).width)
	}, this.d4 = function(a9u, q) {
		this.a9s(ci.ew[a9u], q, 1, 0 === q ? 3 : 7)
	}, this.a9s = function(lI, a9v, a9w, zc) {
		var ap;
		lI.length && (ap = (ap = this.measureText(lI + "00", ss[1])) < a9m[a9v] ? a9m[a9v] : ap, a9j.push({
			lI: lI,
			width: ap,
			a9v: a9v,
			a9w: a9w,
			zc: zc
		}), 0 === a0Q) && (a9g = 0, a0Q = 1, zX = bR.eM)
	}, this.aR = function() {
		0 !== a0Q && 0 !== a9g && (a9g < 1 ? (b5.globalAlpha = a9g, a9x(), b5.globalAlpha = 1) : a9x())
	}
}

function pb() {
	function aA5(a8) {
		if (0 === a8.length) fa.l9.lA(116, "");
		else {
			for (var aA8 = a8[0], q = 1; q < a8.length; q++) aA8 += ";" + a8[q];
			fa.l9.lA(116, aA8)
		}
	}
	this.aA2 = function() {
		fa.fE.data[110].value.length && (fa.fE.data[106].value = fa.fE.data[110], fa.l9.lA(110, ""), this.aA3())
	}, this.aA3 = function() {
		var a8 = fa.fE.data[116].value.split(";");
		for (a8.length % 2 == 1 && a8.pop(), a8.unshift(fa.fE.data[106].value), a8.unshift(fa.fE.data[105].value), q = 2; q < a8.length; q += 2)
			if (a8[q] === a8[0]) {
				a8.splice(q, 2);
				break
			} for (var aA4 = [], q = 0; q < a8.length; q += 2) aA4.push(a8[q]);
		aA5(a8), fa.fE.data[117].value = 0, fa.fE.data[117].oh = aA4
	}, this.aA6 = function(t) {
		fa.fE.data[117].oh.splice(t, 1), fa.fE.data[117].value = Math.min(t, fa.fE.data[117].oh.length - 1);
		var a8 = fa.fE.data[116].value.split(";");
		a8.splice(2 * t, 2), aA5(a8)
	}, this.aA7 = function(t) {
		var a8 = fa.fE.data[116].value.split(";");
		return {
			cW: a8[2 * t],
			password: a8[2 * t + 1]
		}
	}, this.vU = function() {
		var kk = ds.dt(fa.fE.data[121].value, -1, 262143);
		return kk = -1 === kk ? ~~(262144 * Math.random()) : kk
	}, this.pf = function() {
		for (var a8 = document.cookie.split(";"), q = 0; q < a8.length; q++) {
			var a3P, lI = a8[q].trim();
			0 !== lI.length && (a3P = 0 <= (a3P = lI.indexOf("=")) ? lI.substring(0, a3P) : lI, document.cookie = a3P + "=;expires=0;path=/", document.cookie = a3P + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a3P +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function a64() {
	var aA9, canvas, a7Q, aAA;

	function aAG(t, name, aAH, lI) {
		a7Q[t] = name, canvas[t] = new Image, canvas[t].onload = function() {
			! function(t, aAH) {
				var aAL, aAK = null;
				7 === aAH ? aAL = v.aAM.aAN : 8 === aAH ? (aAL = v.aAM.aAO, aAK = .1) : 3 === aAH ? (aAL = v.aAM.aAP, aAK = .06) : 5 === aAH ? aAL = v.aAM.aAQ : 6 === aAH ? aAL = v.aAM.aAR : 4 === aAH && (aAL = v.aAM.aAS);
				canvas[t] = v.aAM.aAT(canvas[t], aAL, aAK)
			}(t, aAH), aAJ()
		}, canvas[t].onerror = function(eL) {
			console.error("Error loading image at index", t, "Error:", eL), aAJ()
		}, canvas[t].src = "data:image/png;base64," + lI
	}

	function aAJ() {
		aA9--, aAD()
	}

	function aAD() {
		0 === aA9 && (aA9 = -1, aAF(), bR.bS = !0, canvas[7] = aAA, canvas[8] = aAA, canvas[9] = aAA, canvas[10] = aAA, 5 === c4.rR) && c4.mt().aAV.resize()
	}

	function aAF() {
		eO.aAW(), a5Z.aAX([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== bL.id, 1 !== bL.id, !0, !0, !0]), iX.a0 = new a08, iX.a0.e(), dy.go()
	}
	this.e = function() {
		if (void 0 === canvas) {
			aA9 = 23, canvas = new Array(aA9), a7Q = new Array(aA9), (aAA = document.createElement("canvas")).width = 1;
			for (var q = aA9 - (aAA.height = 1); 0 <= q; q--) canvas[q] = aAA;
			aAF(), aAG(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aAG(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aAG(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAG(3, "orders", 6,
					"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"
					), aAG(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aAG(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aAG(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aAG(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAG(8,
					"googleplay", 3,
					"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"
					), aAG(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aAG(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAG(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAG(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAG(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAG(14, "bestPlayer", 5,
					"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"
					), aAG(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aAG(16, "apple", 3,
					"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"
					), aAG(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aAG(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aAG(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aAG(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aAG(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aAG(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(t) {
		return canvas[t]
	}, this.v7 = function(name) {
		for (var q = a7Q.length - 1; 0 <= q; q--)
			if (a7Q[q] === name) return canvas[q];
		return aAA
	}, this.qq = function() {
		return aA9 <= 0
	}, this.aAC = function() {
		aA9 = 0, aAD()
	}
}

function aAY() {
	var oT, oU, oV, me;

	function mY() {
		oX(), c4.oY()[19] = null, c4.kp()
	}

	function aAZ() {
		oX(), c4.c5(21)
	}

	function oX() {
		1 === f.data.gameMode ? f.gS.ga() : 0 === f.data.gameMode && 1 === f.data.colorsType && v.aN.oZ(oV.oa(), f.data.colorsData, 262143)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, me = [new k7("⬅️ " + L(6), mY)], 1 === f.data.gameMode && me.push(new k7(L(130), aAZ, 1, 1)), oT = new ko(L(131), me), oU = new kq(oT.kr, (me = [], 0 === f.data.gameMode ? (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(38), L(27)],
			value: f.data.colorsType
		}, function(t) {
			oX(), f.data.colorsType = t, 1 !== f.data.colorsType || f.data.colorsData && f.data.colorsData.length === f.g || (f.data.colorsData = new Uint32Array(f.g)), c4.c5(21)
		})), kt.push(kv)
	}(me), 1 === f.data.colorsType && function(kt) {
		var kv = new kw;
		kv.kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.colorsData, 1)), kv.l1(oV), kt.push(kv)
	}(me)) : (f.gS.ga(), me.push(function() {
		var kv = new kw;
		kv.kz(L(21));
		for (var q = 0; q < l.a7Q.length; q++) {
			var iW = (q + 1) % l.a7Q.length,
				eL = kv.kx((0 == iW ? "" : "Team ") + l.a7Q[iW]);
			q && (eL.style.marginTop = "0.5em"), kv.l1(new jv({
				t: -1,
				value: f.data.teamPlayerCount[iW]
			}, 1, 0, function(eL) {
				oT.lL[1].k8(0);
				var playerCount = ds.dt(Math.floor(eL.target.value), 0, 512);
				eL.target.value = playerCount, f.data.teamPlayerCount[eL.target.aAc] = playerCount
			})).eL.aAc = iW
		}
		return kv
	}()), function(kt) {
		for (var kv = new kw, oh = (kv.kz(L(132)), []), q = 0; q < l.a7Q.length; q++) {
			var iW = (q + 1) % l.a7Q.length;
			oh.push(l.a7Q[iW])
		}
		f.data.colorsData || (f.data.colorsData = new Uint32Array(1));
		kv.oe(new og({
			oh: oh,
			value: (f.data.colorsData[0] % 16 + l.a7Q.length - 1) % l.a7Q.length
		}, function(t) {
			var t = (t + 1) % l.a7Q.length,
				aAd = l.aB[t],
				aAd = (aAd[0] >> 2 << 12) + (aAd[1] >> 2 << 6) + (aAd[2] >> 2);
			f.data.colorsData[0] = aAd - (15 & aAd) + t
		})), kt.push(kv)
	}(me)), me))
}

function aAe(kN, data, oh) {
	var n = data.aAf.length,
		aAg = document.createElement("div"),
		aAh = document.createElement("div"),
		qT = document.createElement("div"),
		aAi = new Array(n),
		kt = new Array(n),
		aAj = new Array(data.aAk.length),
		aAl = v.color.t0(70, 70, 0, .35);

	function rB() {
		this.style.backgroundColor = v.color.rB(aAl, 160)
	}

	function aAt() {
		this.style.backgroundColor = aAl
	}

	function i9() {
		var bz;
		for (kN.style.font = v.w.bA(0, v.w.aAv(.026, .5, .03)), q = 1; q < aAj.length; q++) v.w.kV(aAj[q], 4);
		if (v.w.kV(aAg, 2), n) {
			for (var a3L, t3 = aAg.offsetWidth, w7 = qT.offsetWidth, q = 0; q < aAj.length; q++) a3L = .01 * data.aAs[q] * w7, aAj[q].style.width = (100 * a3L / t3).toFixed(2) + "%";
			var aL = data.aAf[0].length;
			for (q = 0; q < n; q++)
				for (v.w.kV(aAi[q], 2), bz = 1; bz < aL; bz++) v.w.kV(kt[q][bz], 4);
			aAh.aAm && (aAh.scrollTop = aAh.aAm)
		}
	}
	this.resize = function() {
			i9(), i9()
		}, kN.style.display = "flex", kN.style.flexDirection = "column", aAh.style.overflowX = "hidden", aAh.style.overflowY = "auto", aAh.addEventListener("scroll", function() {
			this.aAm = this.scrollTop, oh && oh.aAn && (c4.af.aAo[oh.aAn] = this.scrollTop)
		}),
		function() {
			var jl, q, aAf = data.aAf,
				aL = n ? aAf[0].length : 0;
			for (q = 0; q < n; q++) {
				aAi[q] = document.createElement("div"), aAi[q].style.backgroundColor = function(q) {
					return q % 2 == 1 ? v.color.t0(130, 130, 130, .35) : b7.a9P
				}(q), aAi[q].style.width = "100%", aAi[q].style.display = "flex", kt[q] = new Array(aL);
				for (var bz = 0; bz < aL; bz++) kt[q][bz] = jl = document.createElement("div"), jl.style.display = "flex", jl.style.justifyContent = "center", jl.style.wordBreak = "break-all", jl.style.padding = "0.4em 0em", jl.style.width = data
					.aAs[bz] + "%", jl.innerHTML = aAf[q][bz].kk, 1 === aAf[q][bz].bT && (jl.name = "" + q, jl.style.color = b7.l8, jl.style.backgroundColor = aAl, jl.addEventListener("mouseover", rB), jl.addEventListener("mouseout", aAt), function(
						jl, cW, a1O) {
						2147483647 !== a1O && jl.addEventListener("click", function() {
							ln.gw(30), ln.pq(30, cW), bo.e(ln.li), this.style.backgroundColor = aAl, c4.c5(8, c4.rR, new qh(25, {
								action: 0,
								cW: lz.m0.m1(lz.m0.m2(5)),
								a1O: a1O
							}))
						})
					}(jl, aAf[q][bz].cW, aAf[q][bz].a1O)), aAi[q].appendChild(jl)
			}
			for (aAg.style.display = "flex", aAg.style.backgroundColor = v.color.t0(0, 120, 0, .35), q = 0; q < aAj.length; q++) aAj[q] = jl = document.createElement("div"), jl.style.display = "flex", jl.style.justifyContent = "center", jl.style
				.wordBreak = "break-all", jl.style.padding = "0.4em 0em", jl.style.width = data.aAs[q] + "%", jl.innerHTML = data.aAk[q], aAg.appendChild(jl)
		}();
	for (var q = 0; q < n; q++) qT.appendChild(aAi[q]);
	aAh.appendChild(qT), kN.appendChild(aAg), kN.appendChild(aAh), oh && oh.aAn && (aAh.aAm = c4.af.aAo[oh.aAn])
}

function aAw() {
	var oT, oU, oV, kt;

	function mY() {
		oX(), 2 !== f.data.spawningType || v.aN.t1(f.data.spawningData) || (f.data.spawningType = 0), 2 !== f.data.spawningType && (f.data.spawningData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		2 === f.data.spawningType && v.aN.oZ(oV.oa(), f.data.spawningData, au.rh - 1)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(133), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw,
			oh = (kv.kz(L(24)), [L(38), L(134), L(27)]),
			value = f.data.spawningType;
		0 === f.data.gameMode && (oh.splice(1, 1), 0 < value) && (value = 1);
		kv.oe(new og({
			oh: oh,
			value: value
		}, function(t) {
			oX(), f.data.spawningType = t, 0 === f.data.gameMode && 1 === t && (f.data.spawningType = 2), 2 !== f.data.spawningType || f.data.spawningData || (f.data.spawningData = new Uint16Array(2 * f.g)), c4.c5(24)
		})), kt.push(kv)
	}(kt = []), function(kt) {
		var kv = new kw;
		kv.kz("My Spawn"), kv.l1(new q9({
			value: f.data.selectableSpawn
		}, L(135), function(value) {
			f.data.selectableSpawn = value
		})), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw,
			aAy = (kv.kz("Seed"), new jv({
				t: -1,
				value: f.data.spawningSeed
			}, 1, 0, function(eL) {
				var value = Math.abs(Math.floor(eL.target.value)) % 16384;
				eL.target.value = f.data.spawningSeed = value
			}));
		kv.l1(aAy), kv.l1(new lB([new k7(L(38), function() {
			aAy.eL.value = f.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), kt.push(kv)
	}(kt), function(kt) {
		var kv;
		2 === f.data.spawningType && ((kv = new kw).kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.spawningData, 2)), kv.l1(oV), kt.push(kv))
	}(kt), kt))
}

function aAz() {
	var aB0 = 0,
		aB1 = null;
	this.e = function() {
		null === aB1 && (aB1 = new Uint16Array(2 * ae.af.cf)), aB0 = 0
	}, this.d4 = function(aB2, uQ) {
		var aB3 = aB1;
		aB3[aB0++] = aB2, aB3[aB0++] = uQ
	}, this.aB4 = function(player, aB5) {
		for (var aB3 = aB1, n = aB0, q = 0; q < n; q += 2)
			if (aB3[q] === aB5 && ae.co.uN(aB3[q + 1]) && player === ae.af.ag[a9.cn[2]] >> 3) return !0;
		return !1
	}, this.aB6 = function(aB7) {
		var cm = ae.af.tg[aB7];
		if (!(cm < 64)) {
			for (var aB5 = ae.af.tc[aB7], aB3 = aB1, n = aB0, q = n - 2; 0 <= q; q -= 2)
				if (aB3[q] === aB5) {
					{
						aBC = void 0;
						var aBC = aB3[q + 1];
						ae.co.uN(aBC) && ae.uQ.aBI(a9.cn[2])
					}
					aB3[q] = aB3[n - 2], aB3[q + 1] = aB3[n - 1], n -= 2
				} aB0 = n
		}
	}, this.aB9 = function(aBA, aBB) {
		for (var aBC = ae.af.tc[aBA], aB5 = -1, aB3 = aB1, n = aB0, q = 1; q < n; q += 2)
			if (aB3[q] === aBC) {
				aB5 = aB3[q - 1];
				break
			} if (-1 === aB5) return !1;
		if (!ae.co.uN(aB5)) return !1;
		var aB7 = a9.cn[2],
			ue = ae.af.uf[aB7];
		if (aBB === ue[ue.length - 1]) ae.af.uf[aBA] = ae.um.a3K(ae.af.uf[aBA], ae.um.un(ue));
		else {
			var aBD = ae.co.aBE(ue, aBB);
			if (-1 === aBD) return !1;
			var aBF = ae.af.uh[aB7];
			aBD === aBF ? (aB7 = cq.uT(ae.af.ad[aB7]), ae.af.uf[aBA] = ae.um.a3O(ae.af.uf[aBA], ue, aBD, aBB, cq.uc(ue[aBD], aBB) > cq.uc(ue[aBD], aB7))) : ae.af.uf[aBA] = ae.um.a3O(ae.af.uf[aBA], ue, aBD, aBB, aBF < aBD)
		}
		return !0
	}, this.aBI = function(uK) {
		var ue, aL = ae.af,
			cm = aL.tg[uK];
		return cm % 64 != 5 && (ue = aL.uf[uK], aL.zF[uK] = 65535 - aL.zF[uK], aL.uh[uK] = ue.length - aL.uh[uK] - 2, aL.uf[uK] = ae.um.un(ue), aL.tg[uK] = cm - cm % 64 + 5, !0)
	}
}

function a6y() {
	var gap, y6, aD = [0, 0, 0, 0, 0],
		aE = [0, 0, 0, 0, 0],
		fi = [1, 1, 1, 1, 1],
		kk = [!0, !0, !0, !1, !1],
		jA = (this.o6 = [!0, !0, !0, !1, !1], null);
	this.aAX = function(k, aBJ) {
		jA = k, kk = aBJ, y6 = [a0O.aBK, a0O.aBL, a0O.aBM, a0O.aBM, a0O.aBN], this.e()
	}, this.e = function() {
		if (iQ.qq()) {
			var q, t3 = Math.floor((bL.bM.bN() ? .261 : .195) * ao.bO),
				w7 = Math.floor(.9 * t3),
				lX = Math.floor(.17 * w7);
			if (gap = bL.bM.bN() ? 2 * fx.gap : fx.gap, fi[0] = t3 / jA[0].width, fi[1] = w7 / jA[1].width, fi[2] = lX / jA[2].height, fi[3] = lX / jA[3].height, fi[4] = lX / jA[4].height, fi[2] *= 1.7, fi[3] *= 1.07, aD[0] = gap, aD[1] = gap,
				aD[2] = gap, aD[3] = gap, aD[4] = Math.floor(2 * gap + fi[3] * jA[3].width), aE[0] = gap, aE[1] = aE[0] + gap + fi[0] * jA[0].height, aE[2] = aE[1] + gap + fi[1] * jA[1].height, aE[3] = aE[2] + gap + fi[2] * jA[2].height, aE[4] =
				aE[3], !kk[0])
				for (q = 0; q < 5; q++) aE[q] -= fi[0] * jA[0].height + gap;
			if (!kk[1])
				for (q = 2; q < 5; q++) aE[q] -= fi[1] * jA[1].height + gap
		}
	}, this.xX = function() {
		return !(7 === bi.bj() && bL.bM.bN())
	}, this.fY = function(eX, eY) {
		if (jA && this.xX())
			for (var q = kk.length - 1; 0 <= q; q--)
				if (kk[q] && this.o6[q] && aD[q] < eX && aE[q] < eY && eX < aD[q] + fi[q] * jA[q].width && eY < aE[q] + fi[q] * jA[q].height) return c4.c5(9, c4.rR, new a52(L(136), v.w.aBO(y6[q]))), !0;
		return !1
	}, this.aR = function() {
		if (jA && this.xX()) {
			var q;
			for (b5.imageSmoothingEnabled = !0, q = 0; q < 5; q++) kk[q] && this.o6[q] && (b5.setTransform(fi[q], 0, 0, fi[q], aD[q], aE[q]), b5.drawImage(jA[q], 0, 0));
			b5.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a5v() {
	var a9j, ar, aBP, aBQ, aBR, aBS, aBT, aBU, aBV;

	function fT() {
		return h5.aBm(eo.aBj()) ? dy.xX ? __fx.settings.keybindButtons ? h5.aE - 2 * h5.ar - 3 * aBP : h5.aE - h5.ar - 2 * aBP : __fx.settings.keybindButtons ? h5.aE - h5.ar - 2 * aBP : h5.aE - aBP : h6.aBm(eo.aBl()) ? dy.xX ? h6.fT() - h5.ar - 2 *
			aBP : h6.fT() - aBP : dy.xX ? ao.ar - h5.ar - (a5b.z5() + 1) * aBP : ao.ar - a5b.z5() * fx.gap
	}

	function aBb(bT, lI, id, es, aBd, aBe, a3M, aBf, aBg, fA, aBq) {
		var q, sx, k, en, aBr = void 0 !== aBg,
			ap = Math.floor(ba.measureText(lI, eo.ss) + 1.5 * aBQ + (aBr ? ar : 1.5 * aBQ));
		if (bR.bS = !0, aBq || gY.ev(lI, aBg), ap + 2 * aBP + h5.ar > ao.ap && !aBr && 50 !== id && 20 < lI.length) aBb(bT, (aBq = v.bB.aBs(lI))[0], id, es, aBd, aBe, a3M, aBf, aBg, fA, !0), aBb(bT, aBq[1], id, es, aBd, aBe, a3M, aBf, aBg, fA, !0);
		else if (aBq = ap + (50 === id ? aBR : 0), (k = document.createElement("canvas")).width = ap, k.height = ar, (sx = k.getContext("2d", {
				alpha: !0
			})).font = eo.ss, v.w.textBaseline(sx, 1), v.w.textAlign(sx, 0), sx.clearRect(0, 0, ap, ar), sx.fillStyle = aBe, sx.fillRect(0, 0, ap, ar), sx.fillStyle = aBd, sx.fillText(lI, Math.floor(1.5 * aBQ), Math.floor(ar / 2)), aBr && (sx
				.imageSmoothingEnabled = !0, iX.a0.a0Z(aBg, sx, ap - ar, 0, ar)), 0 === (en = {
				eM: bT,
				lI: lI,
				id: id,
				player: es,
				canvas: k,
				aBd: aBd,
				aBe: aBe,
				ap: ap,
				aBk: aBq,
				a3M: a3M,
				aBf: aBf,
				aBg: aBg,
				fA: fA
			}).eM || 0 < a9j.length && 0 < a9j[0].eM) a9j.unshift(en);
		else {
			for (q = 1; q < a9j.length; q++)
				if (0 < a9j[q].eM) return void a9j.splice(q, 0, en);
			a9j.push(en)
		}
	}

	function aBc(pW, kj, jO) {
		return "rgb(" + pW + "," + kj + "," + jO + ")"
	}

	function aBt(id, jB) {
		for (var n = a9j.length, q = 0; q < n; q++) a9j[q].id === id && jB-- <= 0 && (a9j.splice(q, 1), q--, n--)
	}

	function aBu(id, player) {
		for (var a4X = !1, q = a9j.length - 1; 0 <= q; q--) a9j[q].id !== id || player !== f.g && a9j[q].player !== player || (a9j.splice(q, 1), a4X = !0);
		return a4X
	}

	function aCQ(lI) {
		aBb(340, lI, 6, 0, aBc(215, 245, 255), b7.ex, -1, !1)
	}
	this.aBW = "", this.e = function() {
		var self;
		aBU = 0, aBT = bL.bM.bN() ? 7 : 12, aBS = {
			f8: [0, 0, 0],
			aBX: [0, 0, 0],
			zc: [220, 180, 180],
			aBY: [0, 0, 0],
			jA: [0, 0, 0]
		}, a9j = [], this.resize(), f.gE && this.wZ(0, 18), au.nD.qB[au.bq].name.length && aCQ(L(178, [au.nD.qB[au.bq].name])), au.nD.qB[au.bq].aCR && aCQ(L(179, [au.nD.qB[au.bq].aCR])), aCQ(L(180, [au.av - 2 + "x" + (au.fp - 2)])), aCQ(L(
			181, [v.bB.bC(gp.uu)])), gp.uu !== gp.uv && aCQ(L(182, [v.bB.bC(gp.uv) + " (" + v.bB.yO(100 * gp.uv / gp.uu, 1) + ")"])), 0 < gp.uw && aCQ(L(158, [v.bB.bC(gp.uw) + " (" + v.bB.yO(100 * gp.uw / gp.uu, 1) + ")"])), 0 < gp.rp && aCQ(
			L(183, [v.bB.bC(gp.rp) + " (" + v.bB.yO(100 * gp.rp / gp.uu, 1) + ")"])), 10 === f.gI && aBb(120, L(184), 6, 0, aBc(235, 255, 120), b7.ex, -1, !1), 0 !== (self = this).aBW.length && (aBb(200, self.aBW, 0, 0, b7.b9, b7.ex, -1, !1),
			self.aBW = ""), f.gJ && aBb(340, L(137), 6, 0, aBc(255, 200, 0), b7.ex, -1, !1)
	}, this.resize = function() {
		var ti, q;
		if (ar = (ar = Math.floor((bL.bM.bN() ? .031 : .0249) * ao.bO)) < 10 ? 10 : ar, this.fontSize = Math.floor(2 * ar / 3), this.ss = v.w.bA(1, this.fontSize), aBP = fx.gap, aBQ = Math.floor(ar / 5), 0 < a9j.length)
			for (ti = a9j, a9j = [], q = ti.length - 1; 0 <= q; q--) aBb(ti[q].eM, ti[q].lI, ti[q].id, ti[q].player, ti[q].aBd, ti[q].aBe, ti[q].a3M, ti[q].aBf, ti[q].aBg, ti[q].fA, !0);
		this.aBh()
	}, this.aBh = function() {
		aBV = document.createElement("canvas");
		var lI = L(138),
			sx = (aBR = ba.measureText(lI, this.ss) + 5 * aBQ, aBV.height = ar, aBV.width = aBR, aBV.getContext("2d", {
				alpha: !0
			}));
		sx.font = this.ss, v.w.textBaseline(sx, 1), v.w.textAlign(sx, 1), sx.clearRect(0, 0, aBR, ar), sx.fillStyle = b7.aBi, sx.fillRect(0, 0, aBR, ar), sx.fillStyle = b7.b9, sx.fillText(lI, Math.floor(aBR / 2), Math.floor(ar / 2))
	}, this.aBj = function() {
		var n;
		return dy.xX ? dy.ap : 0 === (n = a9j.length) ? 0 : 1 === n ? a9j[0].aBk : vq(a9j[0].aBk, a9j[1].aBk)
	}, this.aBl = function() {
		var n = a9j.length;
		return dy.xX ? n ? vq(dy.ap, a9j[0].aBk) : dy.ap : 0 === n ? 0 : 1 === n ? a9j[0].aBk : 2 === n ? vq(a9j[0].aBk, a9j[1].aBk) : vq(vq(a9j[0].aBk, a9j[1].aBk), a9j[2].aBk)
	}, this.fY = function(aD, aE) {
		for (var az, fR, aBn = fT(), q = a9j.length - 1; 0 <= q; q--)
			if ((fR = aBn - (q + 1) * ar) <= aE && aE < fR + ar) return 50 === a9j[q].id ? aD >= ao.ap - aBR - aBP - a9j[q].ap && (aD >= ao.ap - aBR - aBP ? gi.cw.aBo(a9j[q].player) : eS.zf(a9j[q].player, 800, !1, 0), !0) : aD >= ao.ap - a9j[q]
				.ap - aBP && (736 === a9j[q].id ? window.open("https://" + a9j[q].lI, "_blank") : a9j[q].aBf && (a9j[q].fA && a9j[q].fA.bz ? (fR = a9j[q].fA.a2, az = cq.fF(fR) - 10, fR = cq.fG(fR) - 10, eS.ze(az, fR, 19 + az, 19 + fR)) : a9j[
					q].fA && a9j[q].fA.jO ? eS.zg(a9j[q].player, a9j[q].fA.dh) : (eS.zf(a9j[q].player, 800, !1, 0), 0 <= a9j[q].a3M && (az = a9j[q].a3M, a9j[q].a3M = a9j[q].player, a9j[q].player = az))), !0);
		return !1
	}, this.ev = function(bT, lI, id, es, aBd, aBe, a3M, aBf, aBg, fA) {
		aBb(bT, lI, id, es, aBd, aBe, a3M, aBf, aBg, fA)
	}, this.aBp = function(cX) {
		aBb(300, cX, 252, 0, b7.b9, b7.ex, -1, !1)
	}, this.a48 = function(id) {
		for (var q = a9j.length - 1; 0 <= q; q--) a9j[q].id === id && (a9j[q].eM = 1)
	}, this.wZ = function(player, id) {
		0 === id ? (ba.d4(player, 0), aBt(423, 2), aBb(160, L(139, [ci.ew[player]]), 423, player, "rgb(10,220,10)", b7.ex, -1, !1)) : 1 === id ? (aBu(50, f.g), ba.d4(player, 1), aBb(360, L(140, [ci.ew[player]]), 0, player, b7.aBv, b7.ex, -1, !0),
				eS.zf(player, 2700, !1, 0)) : 2 === id ? (ba.d4(player, 2), aBb(0, L(141), 0, player, "rgb(10,255,255)", b7.ex, -1, !0), eS.zf(player, 2700, !1, 0)) : 3 === id ? (ba.d4(player, 2), aBb(0, L(142, [ci.ew[player]]), 0, player, b7.b9,
				b7.ex, -1, !0), eS.zf(player, 2700, !1, 0)) : 4 === id ? this.aBw(1, player, player) : 5 === id ? v.cw.is(f.al) || (function(id, u1) {
				var q, aCA = 0,
					n = a9j.length;
				for (q = 0; q < n; q++)
					if (a9j[q].id === id && u1 <= ++aCA) return a9j.splice(q, 1)
			}(1, 5), du.jW(player) && aBb(180, L(143, [ci.ew[player]]), 1, player, aBc(255, 200, 180), b7.ex, -1, !0), v.cw.aBy(player, 10) && (aBt(573, 0), aBb(180, L(144, [ci.ew[player]]), 573, player, b7.aBv, b7.ex, -1, !0))) : 18 === id ?
			aBb(255, L(145), 18, 0, b7.b9, b7.ex, -1, !1) : 21 === id ? aBb(220, L(146), id, 0, b7.b9, b7.ex, -1, !1) : 22 === id ? this.aBw(2, player, player) : 59 === id && aBb(0, L(147), id, 0, b7.aBz, b7.ex, 0, !1)
	}, this.oC = function(cX) {
		aBb(200, L(148, [cX]), 94, 0, b7.b9, b7.aC0, -1, !1)
	}, this.aC1 = function(aC2) {
		if (f.al === aC2 && !f.gB && !f.gC)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aBb(0, "Your Win Count is now " + __fx.wins.count, 3, aC2, b7.b9, b7.ex, -1, !0);
		ci.iF[aC2] && (ba.d4(aC2, 2), f.g4 < 100 ? aBb(0, L(142, [ci.ew[aC2]]), 3, aC2, b7.b9, b7.ex, -1, !0) : aBb(0, L(149, [ci.ew[aC2]]), 3, aC2, b7.b9, b7.ex, -1, !0))
	}, this.aC3 = function(a3) {
		var lI, aC5, aC4 = "(" + cq.fF(a3 >> 2) + ", " + cq.fG(a3 >> 2) + ")",
			aBf = !1,
			player = 0;
		a6.cs(a3) ? a6.fB(a3) ? aC4 = L(150, [aC4]) : (player = a6.a25(a3), f.gC && !1 === __fx.hoveringTooltip.active && (f.al = player), lI = L(151, [v.sx.yJ(ci.a7V[player], v.w.bA(0, 10), 150)]) + "   ", lI = (lI += L(152, [v.bB.bC(ci.iN[
			player])]) + "   ") + L(153, [v.bB.bC(ci.iF[player])]) + "   ", f.j && (aC5 = l.a7Q[l.m[l.f9[player]]], lI += L(13) + ": " + aC5 + "   "), v.cw.is(player) && (lI += L(154) + ": " + gv.aC6[gv.aW[player]] + "   "), aC4 = lI = (
			lI += L(155, [player]) + "   ") + L(156, [aC4]), aBf = !0) : aC4 = a6.a4U(a3) ? L(157, [aC4]) + "   #" + a6.uV(a3) : L(158, [aC4]), aBt(55, 0), aBb(220, aC4, 55, player, b7.b9, b7.ex, -1, aBf, void 0, void 0, !0)
	}, this.aC7 = function(aC8) {
		var aL = ae.af,
			player = aL.ag[aC8] >> 3,
			lI = (bR.bS = !0, aBt(55, 0), L(159, [ci.ew[player]]) + "   ");
		aBb(220, lI += L(152, [v.bB.bC(aL.ah[aC8])]), 55, player, b7.b9, b7.ex, -1, !0)
	}, this.uD = function(ov, kd, dr) {
		ov === f.al ? aBb(175, " " + L(160, [ci.ew[kd]]) + ": ", 1001, kd, aBc(200, 255, 210), b7.ex, -1, !0, dr) : this.aC9(ov, dr)
	}, this.aC9 = function(ov, dr) {
		aBt(1e3, 0), aBb(175, ci.ew[ov] + ": ", 1e3, ov, b7.b9, "rgba(5,60,25,0.9)", -1, !0, dr)
	}, this.aCB = function() {
		var cX;
		f.gO ? (cX = L(161), ba.a9s(L(162), 2, 1, 12), aBb(0, cX, 40, 0, "rgb(10,220,10)", b7.ex, -1, !1)) : (cX = L(163), ba.a9s(L(164), 2, 0, 16), aBb(0, cX, 41, 0, b7.b9, b7.ex, -1, !1))
	}, this.aCC = function() {
		var jB = ci.ew,
			jl = f.data;
		aBb(300, jB[0] + " [" + f.gK.aCD(jl.elo[0]) + "] vs " + jB[1] + " [" + f.gK.aCD(jl.elo[1]) + "]", 65, 0, b7.bc, "rgba(100,255,255,0.75)", -1, !1)
	}, this.yo = function(cX) {
		aBb(350, cX, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aCE = function(aCF) {
		aBb(0, L(aCF ? 165 : 166), 247, 0, b7.l8, b7.ex, -1, !1)
	}, this.aCG = function(aCH, aCI, aCJ) {
		var jl = f.data,
			jB = ci.ew;
		aBb(0, jB[0] + ": " + f.gK.aCD(jl.elo[0]) + " -> " + aCH, 66, 0, b7.b9, aCJ[0], -1, !1), aBb(0, jB[1] + ": " + f.gK.aCD(jl.elo[1]) + " -> " + aCI, 66, 1, b7.b9, aCJ[1], -1, !1)
	}, this.aCK = function(player, id) {
		0 === id ? aBu(50, player) ? (aBb(128, L(167, [ci.ew[player]]), 52, player, aBc(180, 255, 180), b7.ex, -1, !0), du.dv(player, 2, 255)) : aBb(384, L(168, [ci.ew[player]]), 51, player, aBc(210, 210, 255), b7.ex, -1, !0) : aBu(51, player) ?
			(aBb(128, L(169, [ci.ew[player]]), 52, player, b7.b9, "rgba(60,120,10,0.9)", -1, !0), du.dv(player, 2, 255)) : (aBb(384, L(170, [ci.ew[player]]), 50, player, b7.b9, "rgba(90,90,90,0.9)", -1, !0), du.dv(player, 2, 96))
	}, this.aCL = function(f8, target) {
		var color = aBc(210, 255, 210);
		1 < f8.length ? aBb(230, L(171, [f8.length, ci.ew[target]]), 66, target, color, b7.ex, -1, !0) : aBb(230, L(172, [ci.ew[f8[0]], ci.ew[target]]), 66, f8[0], color, b7.ex, target, !0)
	}, this.aCM = function(player, target) {
		aBb(230, L(173, [ci.ew[player], ci.ew[target]]), 66, player, b7.b9, "rgba(75,65,5,0.9)", target, !0)
	}, this.er = function(id, jB) {
		aBt(id, jB)
	}, this.jX = function(id, player) {
		aBu(id, void 0 === player ? f.g : player)
	}, this.ep = function(id) {
		for (var q = a9j.length - 1; 0 <= q; q--)
			if (a9j[q].id === id) return a9j[q];
		return null
	}, this.aCN = function(iE, aCO, player) {
		2 !== ci.it[f.al] && aBb(200, 1 === iE ? L(174, [ci.ew[player]]) : L(175, [v.bB.bC(iE), ci.ew[player]]), 30, player, "rgb(190,255,190)", b7.ex, -1, !0)
	}, this.aCP = function(iE, player) {
		2 !== ci.it[f.al] && (aBt(31, 0), iE = " (" + v.bB.bC(iE) + ") 💸", aBb(150, iE = v.cw.is(player) ? L(176) + iE : L(177, [ci.ew[player]]) + iE, 31, player, b7.bc, "rgba(205,205,205,0.9)", -1, !0))
	}, this.nY = function(ij) {
		for (var jA = bR.el(), q = 2; 0 <= q; q--) 0 < aBS.aBY[q] && (ij || aBS.jA[q] < jA - 220) && this.aCS(q)
	}, this.aCS = function(id) {
		var lI, n = aBS.aBY[id],
			player = aBS.f8[id];
		aBS.aBY[id] = 0, 1 === n ? (0 === id ? lI = L(185, [ci.ew[player], ci.ew[aBS.aBX[0]]]) : 1 === id ? lI = L(186, [ci.ew[player]]) : 2 === id ? lI = L(187, [ci.ew[player]]) : 3 === id && (lI = L(188, [ci.ew[player]])), aBt(7, 0), aBb(aBS
			.zc[id], lI, 7, aBS.aBX[id], b7.b9, b7.ex, -1, !0)) : (lI = L(0 === id ? 189 : 1 === id ? 190 : 191, [n]), aBt(7, 0), aBb(aBS.zc[id], lI, 7, player, b7.b9, b7.ex, -1, !1))
	}, this.aBw = function(id, a3L, a3M) {
		var jA = bR.el(),
			n = aBS.aBY[id] + 1;
		aBS.aBY[id]++, aBS.f8[id] = a3L, aBS.aBX[id] = a3M, 1 === n && (aBS.jA[id] = jA), (1 === n && (f.g5 < 32 || 2 === f.eR) || 1 < n && (aBS.jA[id] < jA - 140 || 2 === f.eR)) && this.aCS(id)
	}, this.bQ = function() {
		a5W.bQ();
		for (var aCT = (aCT = a9j.length - aBT) <= 1 ? 1 : aCT * aCT, q = a9j.length - 1; 0 <= q; q--) 0 < a9j[q].eM && (a9j[q].eM -= aCT, a9j[q].eM <= 0) && (bR.bS = !0, a9j.splice(q, 1));
		! function() {
			var jB, q;
			if (128 !== aBU && !(++aBU < 128))
				for (jB = 5, q = ez.f0 - 1; 0 <= q; q--) 1 === ci.it[ez.f2[q]] && 0 < jB-- && aBb(240, L(188, [ci.ew[ez.f2[q]]]), 1, ez.f2[q], b7.bc, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.nY(!1)
	}, this.aR = function() {
		for (var j8, aE = fT(), q = a9j.length - 1; 0 <= q; q--) j8 = aE - (q + 1) * ar, 50 === a9j[q].id ? (b5.drawImage(a9j[q].canvas, ao.ap - a9j[q].ap - aBR - aBP, j8), b5.drawImage(aBV, ao.ap - aBR - aBP, j8)) : b5.drawImage(a9j[q].canvas,
			ao.ap - a9j[q].ap - aBP, j8)
	}, this.aCV = function(id, aW) {
		var aC4, aCW = b7.aCX;
		0 === id ? aC4 = L(192) : 1 === id ? (aC4 = L(193), aCW = b7.aCY) : 2 === id ? aC4 = L(194) : 3 === id ? aC4 = L(195) : (aC4 = v.bB.bC(aW), aCW = 5 === id ? b7.aCY : b7.ex), aBt(74, 0), aBb(0, aC4, 74, 0, b7.b9, aCW, -1, !1, void 0,
			void 0, !0)
	}
}

function q8() {
	var eL;
	this.eL = document.createElement("hr"), this.resize = function() {
		v.w.kV(this.eL, 8, b7.tB)
	}, (eL = this.eL).style.marginBottom = eL.style.marginTop = "0.65em", eL.style.marginLeft = eL.style.marginRight = "-4%", eL.style.border = "none"
}

function aCZ() {
	this.c3 = function(lq) {
		for (var wj = bo, size = wj.bp(lq), a2w = 7 + 9 * wj.bp(1), a8 = [], q = 0; q < size; q++) a8.push(String.fromCharCode(wj.bp(a2w)));
		return a8.join("")
	}
}

function a69() {
	var aCb;

	function aCd(player) {
		var pW, a3W;
		return v.cw.is(player) && player < f.g4 ? 0 : (pW = aCb[ds.kh((f.g - 1) * ci.iF[player], f.gD)], bR.el() < 1920 && (pW = Math.max(ds.kh(100 * (13440 - 6 * bR.el()), 1920), pW)), a3W = dV.ki(player), ci.iN[player] > a3W && (pW -= ds.kh(2 *
			pW * (ci.iN[player] - a3W), a3W)), Math.min(Math.max(pW, 0), 700))
	}

	function aCq(fi) {
		for (var iF = ci.iF, f2 = ez.f2, q = ez.f0 - 1; 0 <= q; q--) {
			var es = f2[q];
			v.cw.aCg(es, ds.kh(fi * iF[es], 32))
		}
	}

	function aCn() {
		var a7K = f.al;
		a9.a0d[0] = ci.iN[a7K] - ci.j2[a7K]
	}

	function aCp(t) {
		var a7K = f.al,
			a7K = ci.iN[a7K] - ci.j2[a7K] - a9.a0d[0];
		dV.aCa += a7K, dL.a46[t] += a7K
	}
	this.aCa = 0, this.pt = function() {
		for (var n = f.g, q = (aCb = new Uint16Array(n), 0); q < n; q++) aCb[q] = 100 + aCc(ds.kh(25600 * q, n - 4), 9)
	}, this.e = function() {
		(this.aCa = 0) === f.data.iIncomeType ? this.ye = aCd : 1 === f.data.iIncomeType ? this.ye = function(player) {
			return ds.kh(f.data.iIncomeValue * aCd(player), 64)
		} : this.ye = function(player) {
			return ds.kh(f.data.iIncomeData[player] * aCd(player), 64)
		}
	}, this.bQ = function() {
		if (bR.el() % 10 == 9 && (dV.aCa = 0, function() {
				aCn();
				for (var f2 = ez.f2, iN = ci.iN, q = ez.f0 - 1; 0 <= q; q--) {
					var es = f2[q],
						aCo = ds.kh(dV.ye(es) * iN[es], 1e4);
					v.cw.aCg(es, Math.max(aCo, 1))
				}
				aCp(9)
			}(), function() {
				if (0 !== f.data.aIncomeType) {
					if (aCn(), 1 === f.data.aIncomeType)
						for (var iF = ci.iF, f2 = ez.f2, fi = f.data.aIncomeValue, q = ez.f0 - 1; 0 <= q; q--) {
							var es = f2[q];
							v.cw.aCg(es, ds.kh(fi * iF[es], 128))
						} else 2 === f.data.aIncomeType && function() {
							for (var iF = ci.iF, f2 = ez.f2, fi = f.data.aIncomeData, q = ez.f0 - 1; 0 <= q; q--) {
								var es = f2[q];
								v.cw.aCg(es, ds.kh(fi[es] * iF[es], 128))
							}
						}();
					aCp(18)
				}
			}(), bR.el() % 100 == 99)) {
			if (aCn(), 0 === f.data.tIncomeType) aCq(32);
			else if (1 === f.data.tIncomeType) aCq(f.data.tIncomeValue);
			else
				for (var iF = ci.iF, f2 = ez.f2, fi = f.data.tIncomeData, q = ez.f0 - 1; 0 <= q; q--) {
					var es = f2[q];
					v.cw.aCg(es, ds.kh(fi[es] * iF[es], 32))
				}
			aCp(8)
		}
	}, this.ki = function(player) {
		return Math.min(100 * ci.iF[player], f.g0)
	}, this.dW = function(player, dP) {
		gY.aCf(player, dP, a9.dU[0], 0), v.cw.aCg(dP, a9.dU[0]), dL.aCN(player, dP), du.iD(player, a9.dU[0] + a9.dU[1]), du.iH(dP, a9.dU[0]), v.cw.dK(player)
	}, this.aCh = function() {
		for (var n = ez.f0, f8 = ez.f2, aL = 0, a06 = ci.iN, q = 0; q < n; q++) aL += a06[f8[q]];
		return aL
	}, this.aCi = function(aCj) {
		for (var es, n = ez.f0, f8 = ez.f2, aL = 0, a06 = ci.iN, f9 = l.f9, q = 0; q < n; q++) f9[es = f8[q]] === aCj && (aL += a06[es]);
		return aL
	}
}

function a6h() {
	var gap, aCu = !1,
		aCv = 0,
		ap = 0,
		t3 = 0,
		canvas = null,
		sx = null,
		aCw = null;

	function aD0() {
		for (var q = f.gG; 0 <= q; q--) aCw[q] = 0;
		for (q = ez.f0 - 1; 0 <= q; q--) aCw[l.f9[ez.f2[q]]] += ci.iF[ez.f2[q]];
		aCu = !0
	}

	function aCy() {
		for (var aD7, aD5 = 0, n = 0, jA = Math.floor(ap / 2), pW = Math.floor(t3 / 2), aD6 = 1.5 * Math.PI, q = f.gG; 0 <= q; q--) n += aCw[q], 0 === aCw[q] && aD5++;
		if (aCu = !1, sx.clearRect(0, 0, ap, ap), 0 < n)
			if (aD5 === f.gG) {
				for (q = f.gG; 0 <= q; q--)
					if (0 < aCw[q]) {
						! function(q, jA, pW) {
							sx.fillStyle = l.aDE[l.m[q]], sx.beginPath(), sx.arc(jA, jA, pW, 0, 2 * Math.PI), sx.fill()
						}(q, jA, pW);
						break
					}!
				function(jA) {
					var fontSize = jA / 3;
					sx.font = v.w.bA(1, fontSize), sx.fillStyle = b7.b9, sx.fillText("100%", jA, jA + .1 * fontSize)
				}(jA)
			} else {
				for (q = 0; q <= f.gG; q++) 0 < aCw[q] && (! function(q, jA, pW, aD6, aD7) {
					sx.fillStyle = l.aDE[l.m[q]], sx.beginPath(), sx.arc(jA, jA, pW, aD6, aD7), sx.lineTo(jA, jA), sx.fill()
				}(q, jA, pW, aD6, aD7 = aD6 + 2 * Math.PI * aCw[q] / n), function(jA, pW, aD6, aD7) {
					var kk = (aD7 - aD6) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * pW * Math.min(kk, .37);
					fontSize < 8 || (aD6 = (aD6 + aD7) / 2, aD7 = (__fx.settings.detailedTeamPercentage ? (100 * kk).toFixed(2) : Math.floor(100 * kk + .5)) + "%", pW *= .525 - Math.max(.6 * (kk - .7), 0), sx.font = v.w.bA(1, fontSize), sx
						.fillStyle = b7.b9, sx.fillText(aD7, jA + Math.cos(aD6) * pW, jA + Math.cos(aD6 + 1.5 * Math.PI) * pW))
				}(jA, pW, aD6, aD7), 0 !== q && aDC(jA, pW, aD6), aD6 = aD7);
				aDC(jA, pW, 1.5 * Math.PI)
			}!
		function(jA, pW) {
			sx.beginPath(), sx.arc(jA, jA, pW, 0, 2 * Math.PI), sx.stroke()
		}(jA, pW)
	}

	function aDC(jA, pW, zK) {
		sx.beginPath(), sx.moveTo(jA, jA), sx.lineTo(jA + Math.cos(zK) * pW, jA + Math.cos(zK + 1.5 * Math.PI) * pW), sx.stroke()
	}
	this.e = function() {
		if (f.j) {
			aCv = 0, aCw = new Uint32Array(f.gG + 1);
			for (var q = f.gG; 0 <= q; q--) aCw[q] = 0;
			for (q = ez.f0 - 1; 0 <= q; q--) aCw[l.f9[ez.f2[q]]] += 1;
			this.resize()
		} else aCw = sx = canvas = null
	}, this.a9z = function() {
		return ap
	}, this.resize = function() {
		f.j && (ap = Math.floor(.95 * (bL.bM.bN() && !f.fZ ? .18 * ao.min : .13 * ao.bO)), ap = (ap *= 1 + (.5 + .2 * bL.bM.bN()) * f.fZ) + ap % 2, gap = Math.max(1, .015 * ap), t3 = Math.floor(ap - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = ap, canvas.height = ap, (sx = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, sx.strokeStyle = b7.b9, v.w.textAlign(sx, 1), v.w.textBaseline(sx, 1), aCy())
	}, this.yY = function(aCz) {
		aCz && aD0();
		var bT, aCz = this.f6();
		return l.m[aCz] || (aCz = function() {
			for (var a7o = -1, q = f.gG; 1 <= q; q--)(-1 === a7o || aCw[q] > aCw[a7o]) && (a7o = q);
			return a7o
		}(), bT = ci.iF[f7[0]], -1 !== aCz && aCw[aCz] > bT) ? aCw[aCz] : bT
	}, this.a7p = function() {
		return aCv = 31, this.bQ(), this.f6()
	}, this.f6 = function() {
		for (var a7o = 0, q = f.gG; 0 < q; q--) aCw[q] > aCw[a7o] && (a7o = q);
		return a7o
	}, this.a3x = function(aD2) {
		for (var jB = 0, f2 = ez.f2, f9 = l.f9, n = ez.f0, a0i = a9.a0i, q = 0; q < n; q++) {
			var es = f2[q];
			f9[es] === aD2 && (a0i[jB++] = es)
		}
		a9.a0c[0] = jB
	}, this.aD3 = function(aD2) {
		for (var jB = 0, f2 = ez.f2, f9 = l.f9, n = ez.f0, a0i = a9.a0i, q = 0; q < n; q++) {
			var es = f2[q];
			f9[es] !== aD2 && (a0i[jB++] = es)
		}
		a9.a0c[0] = jB
	}, this.aD4 = function() {
		for (var jB = 0, q = f.gG; 0 <= q; q--) jB += 0 < aCw[q];
		return jB
	}, this.bQ = function() {
		f.j && 32 <= ++aCv && (aCv = 0, aD0())
	}, this.kE = function() {
		f.j && aCu && aCy()
	}, this.aR = function() {
		f.j && (f.fZ ? b5.drawImage(canvas, fx.gap, fx.gap) : b5.drawImage(canvas, fx.gap, a9y + 2 * fx.gap))
	}
}

function a6T() {
	var aDF = 0,
		aDG = 0,
		aDH = 0,
		aDI = 0,
		aDJ = -1;

	function aDP(a3) {
		if (aDJ === a3) return !1;
		if (-1 === (aDJ = a3)) aDF = 0, eo.aCV(aDF, 0);
		else {
			if (a6.a24(a3)) return aDH = a6.a25(a3), a3w = ci.iN[aDH] - ci.j2[aDH], (4 !== aDF || a3w !== aDG) && (aDF = 4, aDG = a3w, eo.aCV(aDF, a3w), !0);
			if (a6.fB(a3)) return 3 !== aDF && (aDF = 3, eo.aCV(aDF, 0), !0);
			if (a6.a4U(a3)) return 2 !== aDF && (aDF = 2, eo.aCV(aDF, 0), !0);
			var a3w = ae.co.aDR(r9.vh, r9.xA);
			if (-1 === a3w) return 1 !== aDF && (aDF = 1, eo.aCV(aDF, 0), !0);
			a3 = ae.af.ah[a3w];
			if (aDH = ae.af.tc[a3w], aDI = ae.af.ag[a3w] >> 3, 5 === aDF && a3 === aDG) return !1;
			aDF = 5, aDG = a3, eo.aCV(aDF, a3)
		}
		return !0
	}
	this.e = function() {
		aDI = aDH = aDG = aDF = 0, aDJ = -1
	}, this.bQ = function(ij) {
		var aDN;
		!ij && r9.rA() || (ij = cq.ic(r9.vh), aDN = cq.ig(r9.xA), cq.aDO(ij, aDN) ? (ij = cq.a4d(ij, aDN), aDP(cq.cr(ij))) : aDP(-1))
	}, this.wp = function() {
		var aDT, a3w, aDQ, aDS;
		if (0 !== aDF && 2 !== aDF)
			if (r9.rA()) {
				if (1 !== aDF && 3 !== aDF) {
					if (4 === aDF) return void(a3w = ci.iN[aDH] - ci.j2[aDH], aDG === a3w || (aDG = a3w, eo.aCV(aDF, a3w)));
					(aDQ = ae.co.zi(aDI, aDH)) < 0 ? (aDF = 1, eo.aCV(aDF, 0)) : (aDS = ae.af.ah[aDQ]) !== aDG && (aDG = aDS, eo.aCV(aDF, aDS))
				}
			} else if (1 === aDF) - 1 !== (aDQ = ae.co.aDR(r9.vh, r9.xA)) && (aDF = 5, aDG = ae.af.ah[aDQ], eo.aCV(aDF, aDG));
		else if (3 === aDF) a6.a24(aDJ) && (aDF = 4, aDT = a6.a25(aDJ), aDG = ci.iN[aDT] - ci.j2[aDT], eo.aCV(aDF, aDG));
		else if (4 === aDF) {
			if (a6.a24(aDJ)) return void(aDT = a6.a25(aDJ), a3w = ci.iN[aDT] - ci.j2[aDT], aDG === a3w || (aDG = a3w, eo.aCV(aDF, a3w)));
			aDF = 3, eo.aCV(aDF, 0)
		} else - 1 === (aDQ = ae.co.aDR(r9.vh, r9.xA)) ? (aDF = 1, eo.aCV(aDF, 0)) : (aDS = ae.af.ah[aDQ]) !== aDG && (aDG = aDS, eo.aCV(aDF, aDS))
	}
}

function k7(yh, aDU, aDV, aDW, aDX) {
	var self, aDY = document.createElement("button");

	function r8() {
		var aDg;
		r9.rA() || (aDg = v.color.aDh(aDV), !1 !== aDW && 0 < aDg[0] && aDg[0] < 255 && aDg[0] === aDg[1] && aDg[0] === aDg[2]) || (128 < aDg[0] && 128 < aDg[1] && 128 < aDg[2] ? aDY.style.backgroundColor = v.color.rB(aDV, -50) : aDY.style
			.backgroundColor = v.color.rB(aDV, aDg[3] && aDg[3] < 120 ? 150 : 50))
	}

	function aDb() {
		if (aDW) {
			var aDg = v.color.aDh(aDV);
			if (aDg[0] === aDg[1] && aDg[0] === aDg[2]) return
		}
		aDU && ((aDg = aDU(this)) ? 2 === aDg && r8() : aDi(this))
	}

	function aDc() {
		this.style.backgroundColor = aDV
	}

	function r7() {
		aDi(this)
	}

	function aDi(jl) {
		jl.style.backgroundColor = aDV, jl.blur()
	}
	this.button = aDY, this.lM = aDU, this.aDZ = aDV, this.aDa = function(aDd) {
			aDd = 1.1 - Math.min(.01 * yh.length, .6) + .2 * aDd;
			aDY.style.fontSize = aDd.toFixed(1) + "em"
		}, this.k8 = function(jA) {
			jA ? 1 === jA ? jA = b7.aDf : 2 === jA && (aDW = 1, jA = b7.aDf) : (aDW = 0, jA = b7.qX), this.aDZ = aDV = jA, aDY.style.backgroundColor = jA
		}, self = this, aDY.innerHTML = yh, aDY.style.color = aDX ? b7.l8 : b7.b9, aDY.style.userSelect = "none", aDY.style.outline = "none", aDY.style.overflowWrap = "break-word", self.k8(aDV), aDY.style.border = "none", aDY.style.font = "inherit",
		self.aDa(0), aDY.style.padding = "0em 0.3em", aDY.onclick = aDb, aDY.addEventListener("mouseover", r8), aDY.addEventListener("mouseout", r7), aDY.addEventListener("focus", r8), aDY.addEventListener("blur", aDc)
}

function aDj() {
	this.cf = 512, this.ch = 8, this.am = 0, this.uR = 0, this.ag = new Uint16Array(this.cf), this.ad = new Uint32Array(this.cf), this.zF = new Uint16Array(this.cf), this.ah = new Uint32Array(this.cf), this.zD = new Uint16Array(this.cf), this.tc =
		new Uint16Array(this.cf), this.tg = new Uint8Array(this.cf), this.ai = new Uint8Array(this.cf), this.uf = new Array(this.cf), this.uh = new Uint16Array(this.cf), this.cg = new Uint8Array(f.g), this.td = new Uint16Array(this.ch * f.g), this
		.e = function() {
			this.am = 0, this.uR = 0, this.cg.fill(0), this.uf.fill(null)
		}, this.df = function(player) {
			var aW = a9.dU[0],
				cm = a9.cn[1],
				ue = a9.a8[0],
				aDk = this.uR,
				n = this.am,
				aDl = cq.aDm(ue[0]),
				a2W = this.cg[player],
				a2X = (player << 3) + a2W;
			this.ag[n] = a2X, this.ad[n] = aDl, this.zF[n] = 0, aW < 60 && (v.cw.aDn(player, 60 - aW), aW = 60), this.ah[n] = aW, this.zD[n] = ae.zH.df(n, cq.zI(aDl)), this.tc[n] = aDk, this.tg[n] = cm, this.ai[n] = 0, this.uf[n] = ue, this.uh[n] =
				0, this.uR = (aDk + 1) % 65536, this.cg[player] = a2W + 1, this.td[a2X] = n, this.am++, ae.cm.aDo(player, ue[ue.length - 1], cm, aDk, aW)
		}, this.bQ = function() {
			ae.cm.bQ();
			for (var es = f.al, bT = ae.co.aDp(es), a5J = (! function(a5J) {
					for (var aDv, ad = a5J.ad, ah = a5J.ah, ai = a5J.ai, zF = a5J.zF, zD = a5J.zD, uf = a5J.uf, uh = a5J.uh, a5J = a5J.am, at = au.av << 4, q = a5J - 1; 0 <= q; q--) {
						var aDw = ad[q],
							ue = uf[q],
							aDx = uh[q],
							aDl = cq.aDm(ue[aDx]),
							aDy = cq.aDm(ue[aDx + 1]),
							aDz = aDl % at,
							aDl = ~~((aDl + .5) / at),
							aE1 = aDy % at,
							aE2 = ~~((aDy + .5) / at),
							aE3 = aE1 - aDz,
							aE4 = aE2 - aDl,
							jl = Math.max(~~Math.sqrt(aE3 * aE3 + aE4 * aE4 + .5), 1),
							aDS = ah[q],
							aDS = (aDS = ai[q] ? 4e4 : 25e4 + Math.min(20 * aDS, 3e5) + Math.min(aDS >> 3, 5e4), zF[q] + Math.max(~~((aDS + .5) / jl), 1));
						65535 <= aDS ? aDx + 2 < ue.length ? (uh[q] = aDx + 1, ad[q] = aDv = function(q, aE5, aDz, aE0, aDx, jl, ue, at) {
							aE5 = Math.min(aE5 - 65535, 65535);
							var ue = cq.aDm(ue[aDx + 2]),
								aDx = ue % at - aDz,
								ue = ~~((ue + .5) / at) - aE0,
								aE8 = Math.max(~~Math.sqrt(aDx * aDx + ue * ue + .5), 1);
							return aE5 = Math.min(Math.floor((jl * aE5 + .5) / aE8), 65534), ae.af.zF[q] = aE5, aDz + ds.kh(aE5 * aDx, 65535) + at * (aE0 + ds.kh(aE5 * ue, 65535))
						}(q, aDS, aE1, aE2, aDx, jl, ue, at)) : (ad[q] = aDv = aDy, zF[q] = 65535) : (zF[q] = aDS, ad[q] = aDv = aDz + ds.kh(aDS * aE3, 65535) + at * (aDl + ds.kh(aDS * aE4, 65535))), zD[q] = ae.zH.aE7(zD[q], aDw, aDv)
					}
				}(this), ! function(a5J) {
					if (bR.el() % 2 == 1) {
						var q, iW, aL, jO, jA, aE9, a0V, aEA, a3L, az, b1, aDl, aEB, fm, aED, a3M, n = a5J.am,
							ad = a5J.ad,
							ag = a5J.ag,
							ah = a5J.ah,
							ai = a5J.ai,
							zH = ae.zH.zH,
							np = zH.length,
							aEF = ae.zH.aEF,
							at = au.av << 4,
							aEG = f.j,
							aD2 = l.f9,
							xx = (n - 1) * (ds.kh(bR.el(), 2) % 2);
						for (q = 0; q < n; q++)
							for (iW = Math.abs(q - xx), aDl = ad[iW], aL = cq.zI(aDl), a3L = ag[iW] >> 3, az = aDl % at, b1 = ~~((aDl + .5) / at), aED = ah[iW], jO = 0; jO < 9; jO++)
								if (!((aE9 = aL + aEF[jO]) < 0 || np <= aE9))
									for (aEA = zH[aE9], a0V = aEA.length, jA = 0; jA < a0V; jA++) aEB = aEA[jA], a3M = ag[aEB] >> 3, a3L == a3M || aEG && aD2[a3L] === aD2[a3M] && aD2[a3L] || (a3M = ad[aEB], (fm = az - a3M % at) * fm + (fm =
										b1 - ~~((a3M + .5) / at)) * fm < 14400 && (a3M = ah[aEB], fm = a3M <= aED ? Math.max(1, ds.kh(a3M + ds.kh(aED - a3M, 10), 10)) : Math.max(1, ds.kh(aED, 10)), ah[aEB] = Math.max(a3M - fm, 0), ai[
										aEB] = 4))
					}
				}(this), ! function(a5J) {
					if (bR.el() % 5 == 3)
						for (var ah = a5J.ah, n = a5J.am, q = 0; q < n; q++) {
							var aW = ah[q];
							ah[q] = Math.max(aW - Math.max(1, aW >> 7), 0)
						}
				}(this), this), ah = a5J.ah, ai = a5J.ai, q = a5J.am - 1; 0 <= q; q--) ai[q] = ai[q] >> 1, 0 === ah[q] && (ae.uQ.aB6(q), ae.aEH.z8(q));
			dL.aDu(es, bT - ae.co.aDp(es), 15)
		}
}

function a5o() {
	var aEI, aEJ, aEK;

	function aEN(u1) {
		for (var q = aEI - 1; 0 <= q; q--) 0 === aEK[aEJ[q]] && ci.iF[aEJ[q]] >= u1 && aEM(aEJ[q])
	}

	function aEL(player) {
		var bT;
		64 === aEK[player] ? aEK[player] = 6 : (bT = ci.iF[player], aEK[player] = bT < 1e3 ? 3 : bT < 1e4 ? 2 : bT < 6e4 ? 1 : 0)
	}
	this.e = function() {
		aEI = 0, aEJ = new Uint16Array(f.g), aEK = new Uint8Array(f.g)
	}, this.bQ = function() {
		for (var q = aEI - 1; 0 <= q; q--) 64 === aEK[aEJ[q]] ? aEL(aEJ[q]) : 0 == aEK[aEJ[q]]-- && (aEL(aEJ[q]), aEM(aEJ[q]));
		16e4 <= ci.iF[f7[0]] && (aEN(16e4), 3e5 <= ci.iF[f7[0]]) && aEN(3e5), v.cw.eq(f.al) && (dL.a46[7] = Math.max(ci.iF[f.al], dL.a46[7]))
	}, this.aEP = function(player) {
		for (var bz, q = aEI - 1; 0 <= q; q--)
			if (player === aEJ[q]) {
				for (aEI--, bz = q; bz < aEI; bz++) aEJ[bz] = aEJ[bz + 1];
				return
			}
	}, this.eF = function(player, aEQ) {
		for (var q = aEI - 1; 0 <= q; q--)
			if (player === aEJ[q]) return;
		aEJ[aEI++] = player, aEK[player] = aEQ ? 2 : 64
	}
}

function a5g() {
	"function" != typeof Math.log2 && (Math.log2 = function(aD) {
		return Math.log(aD) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aD) {
		return Math.log(aD) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aD) {
		return 0 < aD ? 1 : aD < 0 ? -1 : 0
	})
}

function a67() {
	this.f2 = null, this.f0 = 0, this.gz = function() {
		for (this.f0 = 0, q = f.g - 1; 0 <= q; q--) 0 !== ci.hL[q] && this.f0++;
		this.f2 = new Uint16Array(this.f0);
		for (var n = 0, q = 0; q < f.g; q++) 0 !== ci.hL[q] && (this.f2[n++] = q)
	}, this.wo = function() {
		for (var iF = ci.iF, a8t = ci.a8t, a7L = ci.a7L, f2 = ez.f2, q = ez.f0 - 1; 0 <= q; q--) {
			var es = f2[q],
				bT = iF[es],
				aL = a8t[es];
			bT <= ds.kh(aL, 4) ? wd.cJ(es) : aL <= bT ? 250 <= (a8t[es] = bT) && (a7L[es] = 1) : a8t[es] = aL - Math.max(1, ds.kh(aL - bT, 1e3))
		}
		this.wf()
	}, this.wf = function() {
		for (var hL = ci.hL, f1 = this.f2, ey = this.f0, q = ey - 1; 0 <= q; q--) 0 === hL[f1[q]] && (f1[q] = f1[--ey]);
		this.f0 = ey
	}
}

function a6q() {
	this.de = new aES
}

function a66() {
	function aEX(player) {
		var bT;
		v.cw.aEZ(player) && (bT = ci.iN[player] - ci.j2[player] + dC.aDp(player), dL.aDu(player, Math.abs(bT), bT < 0 ? 18 : 12)), ci.iN[player] = 0, ci.j2[player] = 0
	}

	function aEf() {
		hA.show(!1, !1, !1, !0), h8.yK(), gX.nV.a7I()
	}

	function aEU(player, aEd) {
		for (var q = aEd.length - 1; 0 <= q; q--) dC.aEh(aEd[q], player)
	}

	function aEW(player) {
		var iO = ci.iO,
			iS = ci.iS,
			iP = ci.iP,
			iT = ci.iT,
			av = au.av;
		if (ci.iF[player]) {
			ci.iF[player] = 0;
			for (var az = iO[player], b1 = iP[player], aD = iS[player]; az <= aD; aD--)
				for (var aE = iT[player]; b1 <= aE; aE--) {
					var es = 4 * (aE * av + aD);
					a6.jm(player, es) && a6.a9D(es)
				}
		}
		iS[player] = iT[player] = 0, iO[player] = iP[player] = Math.max(av, au.fp)
	}
	this.cJ = function(es) {
		var player, bT = ci.iF[es] + ci.a8t[es];
		ae.af.cg[es] ? bT && (aEU(player = es, dC.aEV(player)), du.ia(player), aEW(player), eE.aEP(player), dC.clear(player), aEX(player), function(player) {
			ci.a8t[player] = 0, ci.eC[player] = [], ci.a28[player] = [], ci.cj[player] = [], ci.a29[player] = []
		}(player)) : !bT && ci.eC[es].length || this.we(es)
	}, this.we = function(player) {
		! function(player) {
			v.cw.is(player) || (ci.a7P[player] = a5O.oN.aEc(), f.g7++);
			var aEd = dC.aEV(player);
			0 === aEd.length ? v.cw.aEe(player) && aEf() : (aEU(player, aEd), function(player, aEd) {
				var aEj = aEd[function(aEd) {
					var q, t = 0;
					for (q = aEd.length - 1; 1 <= q; q--) ci.iF[aEd[q]] > ci.iF[aEd[t]] && (t = q);
					return t
				}(aEd)];
				9 === f.gI && (1 === l.f9[player] ? ge.u2(8) && gZ.aEk(aEj) : gv.aW[player] && (eo.er(765, 0), eo.ev(280, L(196, [ci.ew[aEj], ci.ew[player]]), 765, aEj, b7.bc, b7.aEl, -1, !0)));
				if (v.cw.aEe(player)) aEf(), eo.wZ(aEj, 1);
				else {
					for (var q = aEd.length - 1; 0 <= q; q--)
						if (v.cw.aEZ(aEd[q]) && (dL.a46[4 - v.cw.is(player)]++, v.cw.aEe(aEd[q]))) return eo.wZ(player, 0);
					v.cw.is(player) || eo.aBw(0, player, aEj)
				}
			}(player, aEd))
		}(player), du.ia(player), aEW(player), aEX(player),
			function(player) {
				ci.hL[player] = 0, ci.eC[player] = null, ci.a28[player] = null, ci.cj[player] = null, ci.a29[player] = null
			}(player), eE.aEP(player), dC.clear(player), ae.aEH.z7(player)
	}
}

function a6N() {
	this.cH = 0;
	var aEn, aEo, aEp, aEq, aEr, aEs = this.aEm = 0;

	function aEx() {
		aEq = aEr = null, aEs = 0
	}
	this.e = function(bl, aEt, aEu) {
		c4.ml(), bk.lj(), bi.setState(10), aEq = bl, aEr = aEt, aEs = aEu, this.cH = bl.cH, this.aEm = aEu, aEn = 0, aEo = bR.eM + 4500, bg.af.cG = bl.cG, bg.af.bh === bl.cG ? (console.log("direct pass"), aEp = 0) : (console.log("delayed pass"),
			bg.af.close(bg.af.bh, 3247), aEp = 2, bg.af.ot(bl.cG, 5, 2) && bg.ov.aEv()), b5.imageSmoothingEnabled = !0, bi.a35();
		aEt = iQ.v7("loading"), aEu = (bL.bM.bN() ? .396 : .25) * ao.bO / aEt.width;
		b5.setTransform(aEu, 0, 0, aEu, Math.floor((ao.ap - aEu * aEt.width) / 2), Math.floor((ao.ar - aEu * aEt.height) / 2)), b5.imageSmoothingEnabled = !1, b5.drawImage(aEt, 0, 0), b5.setTransform(1, 0, 0, 1, 0, 0)
	}, this.wq = function() {
		0 < aEp && bR.eM > aEo && (aEp--, aEo += 4500, 0 === bR.nh) && 0 === bR.el() && bg.af.ot(bg.af.cG, 5, 2)
	}, this.aEy = function() {
		return 10 === bi.bj() && (bk.cI.aEz(aEq, aEr, aEs), aEx(), !0)
	}, this.oJ = function() {
		10 === bi.bj() && 2 <= ++aEn && (bk.cI.aEz(aEq, aEr, aEs), aEx())
	}
}

function aF1() {
	this.aF2 = function() {
		fa.l9.a4i(), fa.l9.aF3(), bg.af.close(0, 3255), 0 === bL.id ? bL.wF && bL.wF.clear() : 1 === bL.id ? bL.wG.saveString(199, "") : 2 === bL.id && bL.wM.postMessage("clear")
	}, this.aF4 = function() {
		2 === bL.id ? bL.wM.postMessage("showConsentForm") : 1 === bL.id && bL.wG.setState(7)
	}, this.aF5 = function() {
		this.setState(14)
	}, this.bN = function() {
		return 1 === fa.fE.aF6(2)
	}, this.aF7 = function() {
		fa.fE.a0U(102, "")
	}, this.setState = function(a1a) {
		1 === bL.id && 5 <= bL.sj && bL.wG.setState(a1a)
	}, this.a2m = function() {
		var aF8;
		1 === bL.id && 7 <= bL.sj ? bL.wG.setState(5) : ((aF8 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aF8.toString())
	}, this.wQ = function() {
		0 !== bL.id && (1 === bL.id ? bL.wG.prepareAd("8646194357") : 2 === bL.id && (0 === bL.sj ? bL.wM.postMessage("prepare ad 2904813909") : bL.wM.postMessage("loadAds 2904813909")))
	}, this.aF9 = function(bT) {
		return 0 !== bL.id && (1 === bL.id ? 12 <= bL.sj && (bL.wG.presentAd(bT), !0) : 2 === bL.id && 0 !== bL.sj && (bL.wM.postMessage("showAd"), !0))
	}, this.a70 = function() {
		2 === bL.id && bL.sj < 23 && c4.c5(4, 1, new a2k("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + a0O.aBL + "' target='_blank'>" +
			a0O.aBL + "</a>", !0, [new k7("⬅️ " + L(6), function() {
				c4.c5(0)
			}, b7.a56)]))
	}
}

function a6C() {
	var aFA, aFB, aFC;
	this.e = function() {
		aFA =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aFB =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aFC = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var n2 = ["K ", " Y", "E ", " Z", " z", " s", "S "], n6 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], q = aFA.length - 1; 0 <= q; q--)
			for (var bz = n2.length - 1; 0 <= bz; bz--) aFA[q] = aFA[q].replace(n2[bz], n6[bz]);
		if (__fx.settings.realisticNames) aFA = realisticNames;
	}, this.gh = function() {
		var n = f.g4,
			ew = ci.ew,
			a7V = ci.a7V,
			playerNamesData = f.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < n)
			for (var q = 0; q < n; q++) ew[q] = a7V[q] = "Player " + ge.u0(1e3);
		else
			for (q = 0; q < n; q++) ew[q] = a7V[q] = __fx.nameFilter.filter(playerNamesData[q])
	}, this.gw = function() {
		if (9 === f.gI) {
			for (var pW = ge.random(), aFI = aFC, aFJ = aFB, aW = gv.aW, n = aFI.length, aL = f.data.teamPlayerCount[7], ew = ci.ew, a7V = ci.a7V, q = aL - 1; q >= f.g4; q--) ew[q] = a7V[q] = aFI[(q + pW) % n];
			for (n = aFJ.length - 1, q = aL; q < f.g; q++) ew[q] = a7V[q] = aFJ[aW[q] ? n : q % n]
		} else(2 === f.data.playerNamesType ? function() {
			for (var n = f.g, ew = ci.ew, a7V = ci.a7V, playerNamesData = f.data.playerNamesData, q = f.g4; q < n; q++) ew[q] = a7V[q] = __fx.nameFilter.filter(playerNamesData[q])
		} : 1 === f.data.playerNamesType ? function() {
			for (var ew = ci.ew, a7V = ci.a7V, q = f.g4; q < f.g; q++) ew[q] = a7V[q] = "Bot " + ge.u0(1e3)
		} : function() {
			for (var aFK = aFA, n = aFK.length, pW = ge.random(), ew = ci.ew, a7V = ci.a7V, q = f.g4; q < f.g; q++) ew[q] = a7V[q] = aFK[(q + pW) % n]
		})()
	}
}

function L(value, aFL, aFM, aFN) {
	var lI = "number" == typeof value ? sR.sG[value] : value;
	if (aFM && sR.sQ() && (lI = aFM), !aFL) return aFN ? lI.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : lI;
	for (var n = aFL.length, q = 0; q < n; q++)
		for (var bz = 0; bz < 3; bz++) lI = lI.replace("{" + (10 * bz + q) + "}", aFL[q]);
	return lI
}

function a6a() {
	this.af = new aFO, this.a36 = new aFP, this.e = function() {
		this.af.e()
	}, this.bQ = function() {
		0 !== this.af.aCv && this.af.aCv--
	}
}

function a5l() {
	this.m0 = new wh, this.lw = new aFQ, this.c2 = new a2t, this.e = function() {
		this.m0.e()
	}
}

function aFR() {
	function aFT(aDM, ie, ii) {
		for (var jh = Math.min(ie, ii), eT = Math.max(ie, ii), aE = jh + 1; aE < eT; aE++)
			if (!a6.a1n(cq.aFW(aDM, aE))) return;
		return 1
	}

	function aFU(aDN, ib, ih) {
		for (var jh = Math.min(ib, ih), eT = Math.max(ib, ih), aD = jh + 1; aD < eT; aD++)
			if (!a6.a1n(cq.aFW(aD, aDN))) return;
		return 1
	}

	function aFV(ib, ie, ih, ii, a3H, a3I) {
		for (var n = Math.min(Math.abs(ih - ib), Math.abs(ii - ie)), aF = Math.sign(ih - ib), aG = Math.sign(ii - ie), q = 0; q < n; q++)
			if (!a6.a1n(cq.aFW(ib += aF, ie += aG))) return null;
		return ib === ih ? aFT(ib, ie, ii) ? new Uint32Array([a3H, cq.a4d(ib, ie), a3I]) : null : aFU(ie, ib, ih) ? new Uint32Array([a3H, cq.a4d(ib, ie), a3I]) : null
	}
	this.db = function(a3H, a3I) {
		a3H = function(a3H, a3I) {
			var ib = cq.fF(a3H),
				ie = cq.fG(a3H),
				ih = cq.fF(a3I),
				ii = cq.fG(a3I);
			if (ib === ih) {
				if (aFT(ib, ie, ii)) return new Uint32Array([a3H, a3I])
			} else {
				if (ie !== ii) return aFV(ib, ie, ih, ii, a3H, a3I) || aFV(ih, ii, ib, ie, a3H, a3I);
				if (aFU(ie, ib, ih)) return new Uint32Array([a3H, a3I])
			}
			return null
		}(a3H, a3I);
		return null === a3H ? -1 : ae.um.x1(a3H)
	}
}

function aFX() {
	var ap, ar, aFY;

	function aFl(a3L, jl, aFj, aFb, a0) {
		jl = aFk(a3L, jl + 1 + 2 * aFb & 3);
		! function(a3L, a3M) {
			return 1 < Math.abs(a3L % ap - a3M % ap) || 1 < Math.abs(aFo(a3L) - aFo(a3M))
		}(a3L, jl) && 0 === a0[jl << 2] && (a0[jl << 2] = aFj)
	}

	function aFo(es) {
		return Math.floor((es + .5) / ap) % ar
	}

	function aFk(es, jl) {
		return es + aFY[jl]
	}
	this.c3 = function(lI) {
		var q, iM, n, aFZ, wj = bo;
		for (c1.m0.aFc(c1.m0.a34(lI)), au.nD.qB[au.bq].ap = au.av = ap = wj.bp(12), au.nD.qB[au.bq].ar = au.fp = ar = wj.bp(12), aFY = [-ap, -1, ap, 1], au.qN = document.createElement("canvas"), au.qN.width = au.av, au.qN.height = au.fp, au.ri =
			au.qN.getContext("2d", {
				alpha: !1
			}), au.rj = au.rk = null, au.rj = au.ri.getImageData(0, 0, au.av, au.fp), au.rk = au.rj.data, v.aN.aFf(au.rk), n = wj.bp(12), iM = wj.bp(5), aFZ = py(ap * ar - 1), q = 0; q < n; q++) ! function(aL, es, aFa, aFb) {
			var q, jl, wj = bo,
				a0 = au.rk,
				a7K = es,
				aFg = es,
				aFh = 0,
				aFi = 1 + aFa,
				aFj = 2 - aFa;
			for (a0[es << 2] = aFi, q = 0; q < aL; q++) jl = wj.bp(2), es = aFk(es, jl), a0[es << 2] === aFi ? aFh % 2 == 1 && aFl(aFg, aFh + 2 * aFb + 3, aFj, aFb, a0) : a0[es << 2] = aFi, aFl(es, jl, aFj, aFb, a0), aFl(aFg, jl, aFj, aFb,
				a0), aFg = es, aFh = jl;
			aFk(es, 0) === a7K ? (aFl(es, 0, aFj, aFb, a0), aFl(a7K, 0, aFj, aFb, a0)) : aFk(es, 1) === a7K && (aFl(es, 0, aFj, aFb, a0), aFl(a7K, 2, aFj, aFb, a0));
			0 === aL && (aFl(a7K, 0, aFj, aFb, a0), aFl(a7K, 2, aFj, aFb, a0))
		}(wj.bp(iM), wj.bp(aFZ), 1 === wj.bp(1), 1 === wj.bp(1));
		var aD, aE, iW, aFp, aFq, aFr, a0 = au.rk,
			aFs = !0,
			a1j = au.nD.qB[au.bq].a1j,
			a1k = au.nD.qB[au.bq].a1k;
		for (aE = 0; aE < ar; aE++)
			for (aFp = !0, aFq = aFs, aD = aFr = 0; aD < ap; aD++) iW = 4 * aE * ap + 4 * aD, aFr <= aD && 0 < a0[iW] && (aFq = 2 === a0[iW], aFp) && (aFp = !1, aFq !== aFs) ? (aFs = aFq, aFr = aD + 1, aD = -1) : (aFq ? (a0[iW] = a1k[0], a0[1 +
				iW] = a1k[1], a0[2 + iW] = a1k[2]) : (a0[iW] = a1j[0], a0[1 + iW] = a1j[1], a0[2 + iW] = a1j[2]), a0[3 + iW] = 255);
		au.ri.putImageData(au.rj, 0, 0), au.rl = !0, au.rm.e(), bR.bS = !0
	}
}

function aFt() {
	this.aFu = function() {
		ln.gw(39), ln.pq(1, 0), ln.pq(6, 16), bg.mH.aFv(), bg.af.send(0, ln.li)
	}, this.aFw = function(bf) {
		ln.gw(127), ln.pq(1, 0), ln.pq(6, 17), c1.m0.wX(fa.fE.data[105].value, 5), c1.m0.wX(fa.fE.data[106].value, 15), bg.af.send(bf, ln.li)
	}, this.aFy = function() {
		ln.gw(97), ln.pq(1, 0), ln.pq(6, 18), c1.m0.wX(fa.fE.data[110].value, 15), bg.af.send(0, ln.li)
	}, this.vO = function(aAK) {
		var n = aAK.lI.length;
		ln.gw(21 + 16 * n), ln.pq(1, 0), ln.pq(6, 29), ln.pq(6, aAK.action), ln.pq(8, n), lz.lw.aFz(aAK.lI), bg.af.send(0, ln.li)
	}, this.aG0 = function(rI, colors, aG1, r0) {
		pm.e(), pm.pq(1, 0), pm.pq(6, 16), pm.pq(20, Math.min(rI, 1e6));
		for (var q = 0; q < 11; q++)
			for (var bz = 0; bz < 3; bz++) pm.pq(8, colors[q][bz]);
		rI = sR.data.sh(aG1.trim());
		pm.pq(8, -1 === rI ? 255 : rI), lz.c2.hR(r0.trim().substring(0, 180), 8, pm), bg.af.send(0, pm.a2y())
	}, this.aG2 = function(data) {
		ln.gw(43), ln.pq(1, 0), ln.pq(6, 25), ln.pq(6, data.action), c1.m0.wX(data.cW, 5), bg.af.send(0, ln.li)
	}, this.lF = function(data) {
		ln.gw(75), ln.pq(1, 0), ln.pq(6, 27), ln.pq(6, data.action), c1.m0.wX(data.cW, 5), ln.aG3(32, data.value), bg.af.send(0, ln.li)
	}
}

function qg(bE, aG4, aG5, aG6, aG7) {
	var self;
	this.kB = document.createElement("span"), this.resize = function() {
			this.kB.style.fontSize = ((aG6 - aG5) * aG4.offsetHeight).toFixed(1) + "px"
		}, (self = this).kB.textContent = bE, self.kB.style.color = b7.b9, self.kB.style.font = "inherit", self.kB.style.margin = "0.1em 0.6em", self.kB.style.pointerEvents = "none", aG7 && (self.kB.style.fontWeight = "bold"), self.kB.style
		.whiteSpace = "nowrap", self.kB.style.display = "block", aG4.appendChild(self.kB)
}

function sP() {
	var aG8 = [L(197), L(198), L(199), L(200), L(201), L(202), L(203)],
		aG9 = [100, 60, 30, 15, 6, 1],
		aGA = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		aGB = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		aGC = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a1N = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.a1U = function(id, pW, t) {
		pW = this.aGD(pW);
		return +(aGA[pW][id] > t)
	}, this.aGD = function(pW) {
		for (var q = 0; q < aG9.length; q++)
			if (aG9[q] <= pW) return q;
		return aG9.length
	}, this.aGE = function(pW) {
		return aG8[this.aGD(pW)]
	}, this.aGF = function(id, zr) {
		return aGB[id].replace(new RegExp("x", "g"), zr)
	}, this.aGG = function(id, zr) {
		return aGC[id].replace(new RegExp("x", "g"), zr)
	}, this.aGH = function(id, aGI) {
		return this.a1N[5][id]
	}
}

function a6V() {
	this.d1 = new aGJ, this.hQ = new pg, this.m6 = new aGK, this.e = function() {
		f.gC || this.d1.e()
	}, this.bQ = function() {
		f.gC || (this.d1.bQ(), 3 !== c4.rR) || bR.el() % 15 != 5 && 2 !== f.eR || c4.mt().aGM()
	}, __fx.replay.restartReplay = () => this.aGN(), this.aGN = function() {
		var aGO = 0 !== f.eR,
			aGP = f.gU;
		aGO || bi.aGQ(), f.gS.vS(), f.data.canvas = null, bg.af.close(bg.af.cG, 3257), bg.af.cG = 0, f.data.isReplay = 1, f.gW(), aGO && (f.gU = aGP)
	}, this.aGR = function(lI) {
		var q = lI.indexOf("=");
		return 0 <= q ? lI.substring(q + 1) : lI
	}, this.aGS = function(lI) {
		return lI
	}, __fx.replayHistory.load = saved => {
		saved = d0.aGR(saved), d0.m6.c3(saved) && d0.aGN()
	}
}

function aGT() {
	this.z3 = 0, this.e = function() {
		this.z3 = 0
	}, this.bQ = function() {
		if (!this.z3 && bR.el() % 30 == 7 && v.cw.em(90) && (dH.performance.z3 = 1)) {
			if (f.j) {
				var a7o = f5.f6();
				if (l.m[a7o]) {
					f5.a3x(a7o);
					var a8 = a9.a0i,
						n = a9.a0c[0];
					if (0 !== n)
						for (var aGY = Math.min(100 + 10 * (n - 1), 400), q = 0; q < n; q++) gv.aGZ(a8[q], aGY)
				}
			}
			gv.aGZ(f7[0], 100)
		}
	}
}

function aGa() {
	this.bQ = function(player, dh) {
		player = ae.co.zi(player, dh);
		return !(player < 0 || !ae.uQ.aBI(player) || (ae.uQ.aB6(player), 0))
	}
}

function a5s() {
	var aGc, aGd, aGe;
	aGc = [32, 65, 191, 913, 931], aGd = [64, 127, 688, 930, 1155], aGe = new Array(aGc.length + 1);
	for (var q = 0; q < aGe.length; q++) {
		aGe[q] = 0;
		for (var bz = q - 1; 0 <= bz; bz--) aGe[q] += aGd[bz] - aGc[bz]
	}

	function aGl(jA) {
		for (var q = aGc.length - 1; 0 <= q; q--)
			if (jA >= aGc[q] && jA < aGd[q]) return q;
		return -1
	}
	this.aGg = function(lI) {
		return 0 !== (lI = lI.trim()).indexOf("Bot ") && 0 !== lI.indexOf("[Bot] ") && function(lI, aGi, aGj) {
			var n = (lI = lI.trim()).length;
			if (n < aGi || aGj < n) return !1;
			for (var jA, aGk = 0, q = 0; q < n; q++)
				if (jA = lI.charCodeAt(q), aGk += 65 <= jA && jA <= 90 || 1040 <= jA && jA <= 1071 ? 1 : 0, -1 === aGl(jA)) return !1;
			if (3 < aGk && aGk > Math.floor(n / 2)) return !1;
			return !0
		}(lI, 3, 20)
	}, this.hR = function(lI) {
		for (var n = (lI = lI.trim()).length, a8 = [], q = 0; q < n; q++) {
			var jA, es = aGl(jA = lI.charCodeAt(q));
			a8.push(aGe[es] + jA - aGc[es])
		}
		return a8
	}, this.c3 = function(a8) {
		for (var jA, jO, lI = "", n = a8.length, q = 0; q < n; q++)
			for (jO = 1; jO < aGe.length; jO++)
				if (a8[q] < aGe[jO]) {
					jA = aGc[jO - 1] + a8[q] - aGe[jO - 1], lI += String.fromCharCode(jA);
					break
				} return lI
	}, this.aGm = function(lI) {
		for (var a8 = this.hR(lI), result = "", q = 0; q < a8.length; q++) result = (result += a8[q] < 10 ? "00" : a8[q] < 100 ? "0" : "") + a8[q].toString(10);
		return result
	}, this.aGn = function(lI) {
		for (var a8 = new Array(Math.floor(lI.length / 3)), q = 0; q < lI.length; q += 3) a8[Math.floor(q / 3)] = parseInt(lI.substring(q, q + 3));
		return this.c3(a8)
	}, this.aGo = function(lI) {
		for (var kk, a8 = [lI.length], q = 0; q < lI.length; q++) a8[q] = lI.charCodeAt(q) - 48;
		var result = "";
		for (q = 0; q < lI.length; q++) q === lI.length - 1 || 51 < 10 * a8[q] + a8[q + 1] ? result += a8[q].toString() : (kk = 10 * a8[q] + a8[q + 1], result += String.fromCharCode(kk + (kk < 26 ? 65 : 71)), q++);
		return result
	}, this.aGp = function(lI) {
		for (var jA, result = "", q = 0; q < lI.length; q++) 48 <= (jA = lI.charCodeAt(q)) && jA < 58 ? result += String.fromCharCode(jA) : 65 <= jA && jA < 75 ? result += "0" + (jA - 65).toString() : 75 <= jA && jA < 91 ? result += (jA - 65)
			.toString() : 97 <= jA && jA < 123 && (result += (jA - 71).toString());
		return result
	}, this.aGq = function(lI) {
		for (var n = lI.length, a8 = [], q = 0; q < n; q++)(jA = lI.charCodeAt(q)) < 58 ? a8.push(lI[q]) : (jA -= jA < 91 ? 65 : 71, a8.push(String(ds.kh(jA, 10))), a8.push(String(jA - 10 * ds.kh(jA, 10))));
		var n = a8.length - 2,
			jA = 0,
			wk = [];
		for (q = 0; q < n; q += 3) wk[jA++] = parseInt(a8[q] + a8[q + 1] + a8[q + 2]);
		return wk
	}, this.aGr = function() {
		for (var pW, aGs = "", q = 0; q < 6; q++) pW = 48 + ge.random() % 36, pW += 58 <= pW ? 39 : 0, aGs += String.fromCharCode(pW);
		return aGs
	}
}

function a61() {
	var aGt, aGu, aGv;

	function aH0(q) {
		var button = a5U.me[q],
			aD = button.aD,
			aE = button.aE,
			ap = button.ap,
			ar = button.ar;
		b5.fillStyle = button.aGy, b5.fillRect(aD, aE, ap, ar), q === aGt && (b5.fillStyle = aGv, b5.fillRect(aD, aE, ap, ar)), b5.lineWidth = fx.a00, b5.strokeStyle = aGu, b5.strokeRect(aD, aE, ap, ar),
			function(button) {
				var aD = button.aD,
					aE = button.aE,
					ap = button.ap,
					ar = button.ar;
				v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = button.font, b5.fillStyle = aGu, b5.fillText(button.mh, Math.floor(aD + ap / 2), Math.floor(aE + ar / 2 + .1 * button.fontSize))
			}(button)
	}
	this.ap = 0, this.ar = 0, this.aE = 0, this.gap = 0, this.e = function() {
		aGt = -1, aGu = b7.b9, aGv = "rgba(255,255,255,0.16)", this.me = new Array(7), this.ar = Math.floor((bL.bM.bN() ? .123 : .093) * ao.bO), this.ap = Math.floor((bL.bM.bN() ? 3.96 : 4.2) * this.ar), this.gap = Math.floor(.025 * this.ap);
		var aGw = Math.floor(.26 * this.ar),
			aGx = v.w.bA(1, aGw);
		this.me[0] = {
			aD: 0,
			aE: 0,
			ap: Math.floor(.6 * this.ap - this.gap / 2),
			ar: this.ar,
			mh: "Multiplayer",
			font: aGx,
			aGy: "rgba(22,88,22,0.8)",
			fontSize: aGw
		}, aGw = Math.floor(.18 * this.ar), aGx = v.w.bA(1, aGw), this.me[1] = {
			aD: 0,
			aE: 0,
			ap: this.ap - this.me[0].ap - this.gap,
			ar: this.ar,
			mh: "Single Player",
			font: aGx,
			aGy: "rgba(22,88,88,0.8)",
			fontSize: aGw
		}, this.me[2] = {
			aD: 0,
			aE: 0,
			ap: this.ap,
			ar: Math.floor(.3 * this.ar),
			mh: "",
			font: this.me[1].font,
			aGy: "rgba(100,0,0,0.8)",
			fontSize: this.me[1].fontSize
		}, this.me[3] = {
			aD: 0,
			aE: 0,
			ap: this.ap,
			ar: this.ar,
			mh: "Back",
			font: this.me[0].font,
			aGy: "rgba(0,0,0,0.8)",
			fontSize: this.me[0].fontSize
		}, this.me[4] = {
			aD: 0,
			aE: 0,
			ap: this.ap,
			ar: Math.floor(.3 * this.ar),
			mh: "The game was updated!",
			font: this.me[1].font,
			aGy: "rgba(100,0,0,0.8)",
			fontSize: this.me[1].fontSize
		}, this.me[5] = {
			aD: 0,
			aE: 0,
			ap: this.me[0].ap,
			ar: Math.floor(.8 * this.ar),
			mh: "Reload",
			font: this.me[0].font,
			aGy: "rgba(0,100,0,0.8)",
			fontSize: this.me[0].fontSize
		}, this.me[6] = {
			aD: 0,
			aE: 0,
			ap: this.me[1].ap,
			ar: this.me[5].ar,
			mh: "Back",
			font: this.me[0].font,
			aGy: "rgba(0,0,0,0.8)",
			fontSize: this.me[0].fontSize
		}, this.vt()
	}, this.vt = function() {
		this.aE = Math.floor(.54 * ao.ar), this.me[0].aD = Math.floor(.5 * ao.ap - .5 * this.ap), this.me[1].aD = this.me[0].aD + this.me[0].ap + this.gap, this.me[2].aD = this.me[3].aD = this.me[0].aD, this.me[4].aD = this.me[5].aD = this.me[0]
			.aD, this.me[6].aD = this.me[1].aD, this.me[0].aE = Math.floor(.54 * ao.ar), this.me[1].aE = this.me[0].aE, this.me[2].aE = Math.floor((ao.ar - this.me[2].ar - this.me[3].ar - this.gap) / 2), this.me[3].aE = this.me[2].aE + this.me[2]
			.ar + this.gap, this.me[4].aE = Math.floor((ao.ar - this.me[4].ar - this.me[5].ar - this.gap) / 2), this.me[5].aE = this.me[6].aE = this.me[4].aE + this.me[4].ar + this.gap
	}, this.aGz = function() {
		aH0(0), aH0(1)
	}, this.aH1 = function() {
		aH0(2), aH0(3)
	}, this.aH2 = function() {
		aH0(4), aH0(5), aH0(6)
	}, this.fc = function(aD, aE, hM) {
		var q = -1;
		return 0 === bi.bj() ? q = this.xd(aD, aE, 0, 2) : 3 === bi.bj() ? q = this.xd(aD, aE, 3, 1) : 5 === bi.bj() && (q = this.xd(aD, aE, 5, 2)), aGt !== q && (aGt = q, hM) && (bR.bS = !0), -1 !== q && (vw.reset(), !0)
	}, this.xd = function(aD, aE, aH3, size) {
		for (var q = aH3; q < aH3 + size; q++)
			if (aD >= this.me[q].aD && aE >= this.me[q].aE && aD <= this.me[q].aD + this.me[q].ap && aE <= this.me[q].aE + this.me[q].ar) return q;
		return -1
	}
}

function aH5() {
	this.bQ = function(li) {
		var id, o2, eT;
		for (bo.e(li), bo.t += 2, eT = 8 * bo.size; bo.t + 8 <= eT;) id = bo.bp(4), o2 = bo.bp(9), 0 === id ? this.oE(id, o2, bo.bp(22)) : 1 === id ? this.oE(id, o2, bo.bp(10), bo.bp(10)) : 2 === id ? this.oE(id, o2, bo.bp(10), bo.bp(9)) : 3 ===
			id ? this.oE(id, o2, bo.bp(10), bo.bp(27)) : 4 === id ? this.oE(id, o2, bo.bp(10), bo.bp(16)) : 5 === id || 6 === id ? this.oE(id, o2, bo.bp(10)) : 7 === id ? this.oE(id, o2, bo.bp(1)) : 10 === id ? this.oE(id, o2, bo.bp(20), bo.bp(
				22)) : this.oE(id, o2)
	}, this.gk = [], this.aH6 = function() {
		for (var aH8 = 0, aH9 = 0, aHA = 0, aHB = 0, aHC = 0, aHD = 0, q = 0; q < 512; q++) aH8 += ci.hL[q], aH9 += ci.iF[q], aHA += ci.iN[q], aHB += ae.af.cg[q];
		aHC += ae.af.am, aHD += ez.f0, this.gk.push(aHA % 1073741824 * 4 + (aH8 + aH9 + aHB + aHC + aHD) % 4)
	}, this.oE = function(id, o2, o4, o6) {
		0 === id ? gi.u5.cv(o2, o4) : 1 === id ? gi.u5.d5(o2, o4, o6) : 2 === id ? gi.u5.dO(o2, o4, o6) : 3 === id ? gi.u5.dX(o2, o4, o6) : 4 === id ? gi.u5.dg(o2, o4, o6) : 5 === id ? gi.u5.dm(o2, o4) : 6 === id ? gi.u5.dq(o2, o4) : 7 === id ?
			gi.u5.dw(o2, o4) : 8 === id ? gi.u5.e1(o2) : 9 === id ? gi.u5.e5(o2) : 10 === id && gi.u5.e7(o2, o4 >> 10, o6, o4 % 1024)
	}
}

function a6c() {
	var vh = 0,
		xA = 0;
	this.xW = function(aD, aE) {
		vh = aD, xA = aE
	}, this.xj = function(code) {
		var aDM, aDN, a2;
		f.gC || e2.hY || (v.cw.cx(0) || v.cw.cx(1)) && v.cw.cy(f.al) && (h5.fY(vh, xA) ? h5.xY = !1 : h9.fY(vh, xA) || (aDM = cq.ic(vh), aDN = cq.ig(xA), a2 = cq.a4d(aDM, aDN), cq.aDO(aDM, aDN) && (0 === code ? function(a2) {
			var aHH, a3, ax;
			f.gE ? -1 !== (aHH = a5e.aHI(a2)) && gi.gl.cv(a2) : (a3 = cq.cr(a2), a6.a4U(a3) ? (aHH = e8.e9.a4M(a3)) && (ax = cq.cr(aHH), ax = a6.fB(ax) ? f.g : a6.a25(ax), gi.gl.e7(h5.kb(), aHH, ax)) : (aHH = a5e.aHJ(a2)) < 0 || (
				a3 = cq.cr(aHH), a6.fB(a3) ? a4S.a2Q(f.al) ? gi.gl.d5(h5.kb(), f.g) : dC.tT(f.al) && hF.aHK(f.g, h5.kb()) : (ax = a6.a25(a3), a4S.a2P(ax, f.al) && (a4S.a2T(f.al, ax) ? gi.gl.d5(h5.kb(), ax) : dC.tT(f.al) &&
					hF.aHK(ax, h5.kb())))))
		}(a2) : 1 === code ? function(a2) {
			ae.aHL.aHM(f.al, a2) && gi.gl.dX(h5.kb(), a9.cn[7])
		}(a2) : 2 === code && function(a2) {
			ae.dj.ka(f.al, a2) && gi.gl.dg(h5.kb())
		}(a2))))
	}, this.xk = function() {
		if (!f.gC && !e2.hY && v.cw.cx(1)) {
			var es = f.al;
			if (v.cw.cy(es)) {
				var n = dC.tT(es);
				if (n < 1) ! function() {
					var es = f.al;
					if (a4S.a2Q(es)) gi.gl.d5(h5.kb(), f.g);
					else
						for (var a23 = a6.a23, a28 = ci.a28, n = a28[es].length, vB = Math.floor(Math.random() * n), q = 0; q < n; q++)
							for (var aHP = 3; 0 <= aHP; aHP--) {
								var iW = a28[es][(q + vB) % n] + a23[aHP];
								if (a6.a24(iW)) {
									iW = a6.a25(iW);
									if (iW !== es && (!f.j || a4S.a2P(es, iW))) return gi.gl.d5(h5.kb(), iW)
								}
							}
				}();
				else {
					for (var aHO = 0, aW = dC.tf(es, 0), q = 1; q < n; q++) {
						var a7S = dC.tf(es, q);
						a7S < aW && (aW = a7S, aHO = q)
					}
					gi.gl.d5(h5.kb(), dC.tb(es, aHO))
				}
			}
		}
	}, this.dn = function() {
		if (!f.gC && !e2.hY && v.cw.cy(f.al) && v.cw.cx(1)) return dy.xX ? dy.dz(f.al) ? void gi.gl.dw(1) : void 0 : void(dy.e6(f.al) && gi.gl.dn())
	}
}

function aHR(data) {
	var km, kn;

	function aHT(kt, aIB) {
		if (!data.aHS) {
			if (data.aI6) {
				if (aIB) return
			} else {
				if (!aIB) return;
				if (data.rI < 1e4) return
			}
			var aIE, kv = new kw,
				aIC = 1e5 <= data.rI,
				aID = kv.kz(aIB ? (aIC ? "⚠️ " : "") + L(287) : L(54)),
				vN = (aIC && (aID.style.color = "yellow"), aIB ? kv.lH(L(288, [v.bB.aHl(data.rI, .01, 0)])) : ((aIE = new jv({
					value: data.aIF,
					t: -1
				})).eL.readOnly = !0, aIE.eL.type = "password", kv.l1(aIE), kv.l1(new lB([new k7(L(110), function(eL) {
					return eL.textContent === L(110) ? (eL.textContent = L(111), aIE.eL.type = "text") : (eL.textContent = L(110), aIE.eL.type = "password"), !0
				}).button, new k7(L(225), function(eL) {
					return v.w.aHo(aIE.eL), v.w.lD(eL), !0
				}).button]))), kv.kx(L(aIB ? 54 : 289)).style.marginTop = "0.75em", new jv({
					value: "",
					t: -1
				}, 0, 0)),
				aIG = (vN.eL.type = "email", vN.eL.autocomplete = "email", vN.eL.name = "email", vN.eL.inputMode = "email", vN.eL.spellcheck = !1, kv.l1(vN), kv.l1(new lB([new k7(L(290), function(eL) {
					return bg.lE.vO({
						action: 3,
						lI: vN.eL.value.trim().substring(0, 63)
					}), v.w.lD(eL), !0
				}).button])), aIB && kv.lH(L(291)), kv.kx(L(292)).style.marginTop = "0.75em", new jv({
					value: "",
					t: -1
				}, 1));
			kv.l1(aIG), kv.l1(new lB([new k7(L(293), function() {
				bg.lE.lF({
					action: 4,
					cW: "",
					value: Math.floor(+aIG.eL.value)
				}), c4.c5(8, c4.mt().p8, new qh(18))
			}).button])), kt.push(kv)
		}
	}
	this.show = function() {
		data.aHS && a5X.aIj("account", data.cW), km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), kn.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(data.username, [new k7("⬅️ " + L(6), function() {
		a5X.clear(), c4.kp()
	}), new k7(data.aHS ? "🔄 " + L(204) : L(205), function() {
		c4.c5(8, data.aHS ? c4.mt().p8 : void 0, new qh(25, {
			action: 0,
			cW: data.cW,
			a1O: data.a1O
		}))
	}, 0, 0, 1)]), kn = new kq(km.kr, function() {
		var kt = [];
		aHT(kt, 1), kt.push(function() {
				var kv = new kw;
				kv.kz(L(261)), data.aI6 && (kv.kx("✅ " + L(262)).style.marginBottom = "0.75em");
				var a7X = data.aI7;
				a7X < 1 ? (kv.kx(L(263)), 0 === data.aI8 ? kv.lH(L(264)) : 1 === data.aI8 ? kv.lH(L(265)) : 2 === data.aI8 ? kv.lH(L(266)) : 3 === data.aI8 ? kv.lH(L(267)) : 4 === data.aI8 ? kv.lH(L(268)) : 5 === data.aI8 ? kv.lH(L(
					269)) : 6 === data.aI8 ? kv.lH(L(270)) : kv.lH(L(271))) : (kv.kx(L(272)), a7X = a7X < 2 ? L(273) : a7X < 61 ? 2 === a7X ? L(274) : L(275, [a7X - 1]) : a7X < 84 ? 61 === a7X ? L(276) : L(277, [a7X - 60]) : a7X <
					255 ? 84 === a7X ? L(278) : L(279, [a7X - 83]) : L(280), kv.lH(a7X));
				{
					var lG, l3;
					kv.l1(new q8), data.aHS && (lG = kv.lH(), kv.l1(new lB([new k7(fa.pc.rQ(data.cW) ? L(281) : L(282), function(eL) {
						return fa.pc.aI9(data.cW) ? (eL.textContent = L(281), l3(1)) : (eL.textContent = L(282), l3(0)), !0
					}).button])), l3 = function(kk) {
						lG.textContent = kk ? L(283) : ""
					}, fa.pc.rQ(data.cW) && l3(1), kv.l1(new q8))
				}
				var ju = new jv({
					value: data.username,
					t: -1
				});
				ju.eL.readOnly = !0, kv.l1(ju), kv.l1(new lB([new k7(L(225), function(eL) {
					return v.w.aHo(ju.eL), v.w.lD(eL), !0
				}).button])), data.aHS ? (kv.l1(new q8), kv.kx(bg.af.ky("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", kv.l1(new lB([new k7(L(285), function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 0
					}), v.w.lD(eL), !0
				}, b7.a56).button])), kv.l1(new lB([new k7(L(286), function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 1
					}), v.w.lD(eL), !0
				}, b7.a56).button])), kv.l1(new lB([new k7("Cheater", function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 2
					}), v.w.lD(eL), !0
				}, b7.a56).button])), kv.l1(new lB([new k7("False Reporter", function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 3
					}), v.w.lD(eL), !0
				}, b7.a56).button])), (a7X = "CRTOR" === (a7X = fa.fE.data[105].value) || "ADMIN" === a7X) && (kv.l1(new lB([new k7("Block Account", function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 4
					}), v.w.lD(eL), !0
				}, b7.qc).button])), kv.l1(new lB([new k7("Ban IP", function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 5
					}), v.w.lD(eL), !0
				}, b7.qc).button])), kv.l1(new lB([new k7("Gold Seizure", function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 6
					}), v.w.lD(eL), !0
				}, b7.qc).button])), kv.l1(new lB([new k7("Remove Punishments", function(eL) {
					return bg.lE.lF({
						action: 3,
						cW: data.cW,
						value: 7
					}), v.w.lD(eL), !0
				}, b7.tE).button])))) : kv.lH(L(284));
				return kv
			}()),
			function(kt) {
				var kv, lG, sX, aII, l7, qG, l5;
				data.aHS || ((kv = new kw).kz(L(294)), (lG = kv.lH(data.aIH.length + " / 160")).style.textAlign = "center", sX = !0, (aII = new oi(0, 1, function(eL) {
					eL = eL.target.value.length;
					lG.textContent = eL + " / 160", 160 < eL ? sX && (sX = !1, qG.k8(1)) : sX || (sX = !0, qG.k8(0))
				})).eL.rows = 6, aII.eL.style.fontSize = "1em", aII.oj(data.aIH), kv.l1(aII), 0 !== data.aIJ ? (qG = new k7(L(295), function() {
					if (!sX) return !0;
					c4.c5(8, c4.mt().p8, new qh(29, {
						action: 1,
						lI: aII.oa().substring(0, 160)
					}))
				}, 0, 0, 1), kv.l1(new lB([qG.button])), kv.l1(new lB([new k7(1 === data.aIJ ? L(296) : L(297), function() {
					c4.c5(8, c4.mt().p8, new qh(29, {
						action: 0,
						lI: ""
					}))
				}, 0, 0, 1).button])), kv.lH(1 === data.aIJ ? L(298, [data.aIK - 1]) : L(299, [data.aIK - 1])), kv.lH(L(300, [data.aIL]))) : (l7 = new k7(L(301), function() {
					if (!aII.eL.readOnly) return !0;
					c4.c5(8, c4.mt().p8, new qh(29, {
						action: 1,
						lI: aII.oa().substring(0, 160)
					}))
				}, 1), qG = new k7(L(10), function(eL) {
					if (eL.textContent === L(10)) {
						if (!sX) return !0;
						eL.textContent = L(11), aII.eL.readOnly = !0, l7.k8(0), l7.button.style.color = b7.l8
					} else l5();
					return !0
				}), kv.l1(new lB([qG.button])), kv.lH(L(300, [data.aIL])), l5 = function() {
					qG.button.textContent = L(10), aII.eL.readOnly = !1, l7.k8(1), l7.button.style.color = b7.b9
				}, kv.l1(new lB([l7.button]))), kt.push(kv))
			}(kt),
			function(kt) {
				var kv;
				data.aHS && 0 !== data.aIJ && ((kv = new kw).kz(L(302)), kv.aIM(data.aIH), kv.l1(new lB([new k7(L(303, 0, "Report"), function(eL) {
					return bg.af.lC(0) && (v.w.lD(eL), bg.lE.aG2({
						action: 5,
						cW: data.cW
					})), !0
				}, 0, 0, 1).button])), kt.push(kv))
			}(kt), kt.push(function() {
				var kv = new kw,
					aHj = (kv.kz(L(206)), kv.kx(bg.af.ky("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(207), L(208), L(209), L(210), L(211), L(212), L(213), L(214), L(215), L(216), L(217), L(218), L(219), L(220)]),
					pW = data.aHk;
				return kv.kx(L(221) + v.bB.aHl(data.rI, .01, 2) + "<br>" + L(222) + (pW + 1) + " / " + data.aHm + "<br>" + L(223) + aHj[function(pW, rI) {
					if (pW < 10) return 0;
					if (pW < 30) return 1;
					if (pW < 60) return 2;
					if (3e4 <= (rI = ds.kh(rI, 100))) return 3;
					if (12e3 <= rI) return 4;
					if (7e3 <= rI) return 5;
					if (3e3 <= rI) return 6;
					if (1e3 <= rI) return 7;
					if (500 <= rI) return 8;
					if (200 <= rI) return 9;
					if (70 <= rI) return 10;
					if (20 <= rI) return 11;
					if (3 <= rI) return 12;
					return 13
				}(pW, data.rI)]), kv
			}()), data.aHS && kt.push(function() {
				var kv = new kw,
					ju = (kv.kz(L(224)), kv.kx(bg.af.ky("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new jv({
						value: fa.fE.data[147].value,
						t: -1
					}, 1, void 0, function(eL) {
						fa.l9.lA(147, l3(eL.target.value))
					})),
					l7 = (kv.l1(ju), new k7(L(4), function(eL) {
						return ju.eL.readOnly && bg.af.lC(0) && (v.w.lD(eL), l5(), bg.lE.lF({
							action: 0,
							cW: data.cW,
							value: parseInt(fa.fE.data[147].value, 10)
						})), !0
					}, 1)),
					qG = new k7(L(10), function(eL) {
						return eL.textContent === L(10) ? (eL.textContent = L(11), ju.eL.readOnly = !0, l7.k8(0), l7.button.style.color = b7.l8, fa.l9.lA(147, ju.eL.value), l3(fa.fE.data[147].value)) : l5(), !0
					}),
					lG = (kv.l1(new lB([qG.button])), kv.lH()),
					l3 = function(kk) {
						lG.innerHTML = c4.af.lJ(kk, fa.fE.data[105].value, data.cW)
					},
					l5 = function() {
						qG.button.textContent = L(10), ju.eL.readOnly = !1, l7.k8(1), l7.button.style.color = b7.b9
					};
				return l3(fa.fE.data[147].value), kv.l1(new lB([l7.button])), kv
			}());
		kt.push(function() {
			var kv = new kw,
				ju = (kv.kz(L(53)), new jv({
					value: data.cW,
					t: -1
				})),
				aHp = (ju.eL.readOnly = !0, kv.l1(ju), kv.l1(new lB([new k7(L(225), function(eL) {
					return v.w.aHo(ju.eL), v.w.lD(eL), !0
				}).button])), kv.l1(new q8), new jv({
					value: data.cW,
					t: -1
				}));
			return kv.l1(aHp), kv.l1(new lB([new k7(L(226), function(eL) {
				c4.c5(8, c4.mt().p8, new qh(25, {
					action: 0,
					cW: aHp.eL.value,
					a1O: 0
				}))
			}).button])), kv
		}()), data.aHS || (kt.push(function() {
			var kv = new kw,
				a7B = (kv.kz(L(109)), new jv(fa.fE.data[106]));
			return a7B.eL.readOnly = !0, a7B.eL.type = "password", kv.l1(a7B), kv.l1(new lB([new k7(L(110), function(eL) {
				return eL.textContent === L(110) ? (eL.textContent = L(111), a7B.eL.type = "text") : (eL.textContent = L(110), a7B.eL.type = "password"), !0
			}).button, new k7(L(225), function(eL) {
				return v.w.aHo(a7B.eL), v.w.lD(eL), !0
			}).button])), kv.l1(new lB([new k7(L(227), function() {
				c4.c5(8, c4.mt().p8, new qh(15))
			}).button])), kv.kz(L(112), "0.8em"), kv.lH(L(228)), kv.lH(L(229)), kv.lH(L(230)), kv
		}()), kt.push(function() {
			var kv = new kw;
			return kv.kz(L(231)), kv.l1(new lB([new k7(L(232), function() {
				c4.c5(6, c4.mt().p8)
			}).button])), kv.l1(new lB([new k7(L(233), function() {
				fa.l9.lA(105, ""), c4.c5(8, c4.mt().p8, new qh(18))
			}).button])), kv.l1(new lB([new k7(L(234) + fa.fE.data[105].value, function() {
				c4.c5(4, 0, new a2k(L(235), L(236), !0, [new k7("⬅️ " + L(6), function() {
					c4.c5(7, c4.a73(7).p8)
				})]))
			}, b7.a56).button])), kv
		}()), kt.push(function() {
			function aHs(t) {
				aHr[0].k8(0 === t ? b7.aDf : b7.aBi), aHr[1].k8(0 === t ? b7.aDf : b7.a56), aHr[2].k8(t === aHq.a7c.length - 1 || t < 5 ? b7.aDf : b7.a56)
			}
			var aHq, aHr, kv = new kw;
			kv.kz(L(241)), kv.lH(L(242)), fa.af.aA3();
			return aHr = [new k7(L(108), function() {
				var t = Math.min(fa.fE.data[117].value, aHq.a7c.length - 1);
				t < 1 || (t = fa.af.aA7(t), fa.l9.lA(105, t.cW), fa.l9.lA(106, t.password), c4.c5(8, c4.mt().p8, new qh(18)))
			}, b7.aDf, 1), new k7(L(239), function() {
				var t = Math.min(fa.fE.data[117].value, aHq.a7c.length - 1);
				if (!(t < 1)) {
					aHq.a7c[t].remove(), aHq.a7c.splice(t, 1);
					for (var q = t; q < aHq.a7c.length; q++) aHq.a7c[q].name = "" + q;
					fa.af.aA6(t), t = fa.fE.data[117].value, aHq.a7c[t].textContent = aHq.a7c[t].textContent.replace("⚪", "🟢"), aHs(t)
				}
			}, b7.aDf, 1), new k7(L(240), function() {
				var t = Math.min(fa.fE.data[117].value, aHq.a7c.length - 1);
				if (t !== aHq.a7c.length - 1) {
					for (var q = aHq.a7c.length - 1; t < q; q--) aHq.a7c[q].remove(), aHq.a7c.splice(q, 1), fa.af.aA6(q);
					aHs(t)
				}
			}, b7.aDf, 1)], aHq = new og(fa.fE.data[117], aHs), aHs(0), aHq.a7c[0].style.marginTop = "0.5em", kv.oe(aHq), kv.l1(new lB([aHr[0].button])), kv.l1(new lB([aHr[1].button])), kv.l1(new lB([aHr[2].button])), kv
		}()));
		return kt.push(function() {
				var kv = new kw,
					aHj = (kv.kz(L(246)), [L(247), L(248), L(249), L(250)]),
					pW = data.aHz;
				return kv.kx(L(251) + (data.a7E / 100).toFixed(2) + "<br>" + L(222) + (pW + 1) + " / " + data.aHm + "<br>" + L(223) + aHj[pW < 10 ? 0 : pW < 50 ? 1 : pW < 200 ? 2 : 3]), kv
			}()), kt.push(function() {
				var kv = new kw;
				return kv.kz(L(243)), kv.kx(L(244) + v.bB.aHl(data.aHw, .1, 1) + "<br>" + L(222) + (data.aHx + 1) + " / " + data.aHm + "<br>" + L(245) + data.aHy), kv
			}()),
			function(kt) {
				var kv = new kw,
					aIN = data.aIO,
					aIR = (kv.kz(L(304)), kv.kx(L(305, [data.aIP.length ? "[" + data.aIP + "]" : "-"])), kv.kx(L(306, [v.bB.aHl(aIN, .01, 2)])), kv.kx(L(307, [data.aIQ + 1 + " / " + data.aHm])), data.aIS),
					aIT = (kv.kx(L(308, [v.bB.aHl(aIR, .1, 1)])), data.aIU);
				kv.kx(L(309, [aIT])), kv.kx(L(310, [v.bB.aHl(aIR / Math.max(aIT, 1), .1, 2)])), aIN = data.aIV, kv.kz(L(311), "0.8em"), kv.kx(L(305, [data.aIW.length ? "[" + data.aIW + "]" : "-"])), kv.kx(L(306, [v.bB.aHl(aIN, .01, 2)])),
					aIR = data.aIX, kv.kx(L(308, [v.bB.aHl(aIR, .1, 1)])), aIT = data.aIY, kv.kx(L(309, [aIT])), kv.kx(L(310, [v.bB.aHl(aIR / Math.max(aIT, 1), .1, 2)])), kv.kx(bg.af.ky("/wiki/clans"), "0.75em").style.marginTop = "0.8em", kt
					.push(kv)
			}(kt),
			function(kt) {
				var kv = new kw;
				kv.kz(L(312)), kv.kx(L(251) + (data.aIZ / 10).toFixed(1) + "<br>" + L(223) + (data.aIa.length ? L(313, [data.aIa]) : L(314))), data.aHS && kv.l1(new lB([new k7(L(315), function(eL) {
					return bg.af.lC(0) && (v.w.lD(eL), bg.lE.aG2({
						action: 4,
						cW: data.cW
					})), !0
				}, 0, 0, 1).button]));
				kv.kx(bg.af.ky("/wiki/clans"), "0.75em").style.marginTop = "0.8em", kt.push(kv)
			}(kt), kt.push(function() {
				var kv = new kw;
				if (kv.kz(L(258)), kv.kx(L(259) + data.aI2 + "<br>" + L(222) + (data.aI3 + 1) + " / " + data.aHm + "<br>" + L(223) + sO.aGE(data.aI3)), data.aHS) {
					var ju = new jv({
							value: fa.fE.data[157].value,
							t: -1
						}, 1, void 0, function(eL) {
							fa.l9.lA(157, l3(eL.target.value))
						}),
						qG = (ju.eL.style.marginTop = "0.6em", kv.l1(ju), new k7(L(10), function(eL) {
							return eL.textContent === L(10) ? (eL.textContent = L(11), ju.eL.readOnly = !0, aI4[0].k8(0), aI4[1].k8(0), aI4[0].button.style.color = b7.l8, aI4[1].button.style.color = b7.l8, l3(fa.fE.data[157]
								.value)) : l5(), !0
						})),
						aI4 = (kv.l1(new lB([qG.button])), [new k7("−", function(eL) {
							return ju.eL.readOnly && bg.af.lC(0) && (v.w.lD(eL), l5(), bg.lE.lF({
								action: 2,
								cW: data.cW,
								value: ds.dt(parseInt(fa.fE.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new k7("+", function(eL) {
							return ju.eL.readOnly && bg.af.lC(0) && (v.w.lD(eL), l5(), bg.lE.lF({
								action: 1,
								cW: data.cW,
								value: ds.dt(parseInt(fa.fE.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						lG = kv.lH(),
						l3 = function(kk) {
							return kk = v.cw.aI5(kk, 3, 32767), lG.textContent = L(260, [kk - 1, kk, fa.fE.data[105].value]), kk
						};
					kv.l1(new lB([aI4[0].button, aI4[1].button]));
					for (var q = 0; q < 2; q++) aI4[q].button.style.fontSize = "1.6em";
					var l5 = function() {
						qG.button.textContent = L(10), ju.eL.readOnly = !1, aI4[0].k8(1), aI4[1].k8(1), aI4[0].button.style.color = b7.b9, aI4[1].button.style.color = b7.b9
					};
					l3(fa.fE.data[157].value)
				}
				return kv
			}()),
			function(kt) {
				var kv, aIi;
				data.aHS && !data.aIb || (0 === bL.id || data.aHS || data.aIb) && ((kv = new kw).kz("Patreon"), !data.aHS && data.aIc ? kv.l1(new lB([new k7(L(110), function() {
					bg.lE.aG2({
						action: 7,
						cW: data.cW
					}), data.aIc = 0, c4.c5(7)
				}).button])) : data.aIb ? (kv.kx(L(316, [(data.aId / 100).toFixed(2)]) + "<br>" + L(317, [1 + data.aIe + " / " + data.aIf]) + "<br>" + L(318, [data.aIg ? L(319) : L(320)])), data.aHS || kv.l1(new lB([new k7(L(321),
					function() {
						bg.lE.aG2({
							action: 8,
							cW: data.cW
						}), data.aIb = 0, fa.l9.lA(160, 0), c4.c5(7)
					}).button]))) : (kv.kx(L(322), "0.75em").style.marginBottom = "0.3em", kv.kx("  • " + L(323), "0.75em").style.whiteSpace = "pre", kv.kx("  • " + L(324), "0.75em").style.whiteSpace = "pre", kv.kx("  • " + L(325),
						"0.75em").style.whiteSpace = "pre", kv.kx(L(326), "0.75em").style.marginTop = "1.0em", kv.kx(L(327), "0.75em").style.marginTop = "1.0em", kv.kx("<a href='" + a0O.aIh +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aIi = "https://www.patreon.com/oauth2/authorize?state=" + data.cW +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + bg.af.p6() + "/", kv.kx(L(328), "0.75em").style.marginTop = "1.0em", kv.kx("<a href='" +
						aIi + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aHS || (kv.l1(new q8), kv.l1(new lB([new k7(L(111), function() {
						bg.lE.aG2({
							action: 6,
							cW: data.cW
						}), data.aIc = 1, c4.c5(7)
					}).button])), kv.kx(L(329), "0.75em").style.marginTop = "0.75em")), kt.push(kv))
			}(kt), kt.push(function() {
				var kv = new kw,
					aHj = (kv.kz(L(252)), [L(253), L(254), L(255), L(256), "Scout", L(257)]),
					pW = data.aI0;
				return kv.kx(L(251) + (data.aI1 / 100).toFixed(2) + "<br>" + L(222) + (pW + 1) + " / " + data.aHm + "<br>" + L(223) + aHj[pW < 3 ? 0 : pW < 20 ? 1 : pW < 100 ? 2 : pW < 500 ? 3 : pW < 2e3 ? 4 : 5]), kv.kx(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", kv
			}()),
			function(kt) {
				var kv, aHq, aHr, t, aHs;
				data.aHS || fa.pc.get().length && ((kv = new kw).kz(L(237)), t = 0, aHs = function() {
					var aHt = fa.pc.get().length;
					aHr[0].k8(t === aHt ? b7.aDf : b7.aBi), aHr[1].k8(t === aHt ? b7.aDf : b7.a56), aHr[2].k8(t === aHt || aHt - 1 <= t || t < 5 ? b7.aDf : b7.a56)
				}, aHr = [new k7(L(238), function() {
					c4.c5(8, void 0, new qh(25, {
						action: 0,
						cW: fa.pc.get()[t],
						a1O: 0
					}))
				}, b7.aDf, 1), new k7(L(239), function() {
					fa.pc.aHu(t), aHq.a7c[t].remove(), aHq.a7c.splice(t, 1);
					for (var q = t; q < aHq.a7c.length; q++) aHq.a7c[q].name = "" + q;
					fa.pc.get().length && (t = Math.max(t - 1, 0), aHq.a7c[t].textContent = aHq.a7c[t].textContent.replace("⚪", "🟢")), aHs()
				}, b7.aDf, 1), new k7(L(240), function() {
					for (var iW = aHq.a7c.length - 1; t < iW; iW--) fa.pc.aHu(iW), aHq.a7c[iW].remove(), aHq.a7c.splice(iW, 1);
					aHs()
				}, b7.aDf, 1)], aHs(), (aHq = new og(fa.pc.aHv(), function(q) {
					t = q, aHs()
				})).a7c[0].style.marginTop = "0.5em", kv.oe(aHq), kv.l1(new lB([aHr[0].button])), kv.l1(new lB([aHr[1].button])), kv.l1(new lB([aHr[2].button])), kt.push(kv))
			}(kt), aHT(kt, 0), kt
	}())
}

function a6d() {
	this.af = new aIk, this.rR = 0;
	var aIl = new Array(32);

	function aIo() {
		for (var n = aIl.length, q = 0; q < n; q++) aIl[q] = null
	}
	this.e = function() {
		for (var aIm, aIn = document.body.firstChild; aIn;) aIm = aIn.nextSibling, !document.body.contains(aIn) || "DIV" !== aIn.tagName && "INPUT" !== aIn.tagName && "BUTTON" !== aIn.tagName || c4.removeChild(document.body, aIn), aIn = aIm
	}, this.c5 = function(t, p8, aAK) {
		void 0 === p8 && (p8 = this.rR), bR.bS = !0, 0 === t && (0 === bi.bj() ? t = 5 : bL.bM.setState(13)), this.eP(), this.rR === t && (p8 = aIl[t].p8, aIl[t] = null), this.rR = t;
		var aL = aIl[t];
		if (!aL || 4 === t || 7 === t || 8 === t || 9 === t || 10 === t || 11 === t || 13 === t || 15 === t || 18 === t || 20 <= t && t <= 28 || 32 === t || 33 === t) {
			if (0 === t) return void aIo();
			1 === t ? aL = new aIp : 2 === t ? aL = new a4g : 3 === t ? aL = new aIq : 4 === t || 9 === t || 10 === t || 11 === t || 13 === t || 33 === t ? aL = aAK : 5 === t ? aL = new aIr : 6 === t ? aL = new a72 : 7 === t ? aL = new aHR(c4.af
					.aIs) : 8 === t ? aL = aAK : 12 === t ? aL = new aIt : 14 === t ? aL = new aIu : 15 === t ? aL = new aHR(c4.af.aIv) : 16 === t ? aL = new aIw : 17 === t ? aL = new aIx : 18 === t ? aL = new kl : 19 === t ? aL = new aIy :
				20 === t ? aL = new pz : 21 === t ? aL = new aAY : 22 === t ? aL = new aIz : 23 === t ? aL = new tu : 24 === t ? aL = new aAw : 25 === t ? aL = new aJ0 : 26 === t ? aL = new oS : 27 === t ? aL = new aJ1 : 28 === t ? aL = new a4L :
				29 === t ? aL = new mK : 30 === t ? aL = new aJ2 : 31 === t ? aL = new aJ3 : 32 === t && (aL = new vL), aL.p8 = p8, aIl[t] = aL
		}
		aL.show(aAK)
	}, this.kp = function() {
		this.xX() && this.aJ4(this.mt().p8)
	}, this.aJ4 = function(t) {
		this.xX() && (aIl[t] ? (this.eP(), bR.bS = !0, this.rR = t, aIl[t].show()) : this.c5(t))
	}, this.eP = function() {
		this.xX() && aIl[this.rR].eP()
	}, this.ml = function() {
		this.xX() && (aIl[this.rR].eP(), aIo(), this.rR = 0, bL.bM.setState(13))
	}, this.aR = function() {
		var aL;
		this.xX() && (aL = aIl[this.rR]).aR && aL.aR()
	}, this.resize = function() {
		if (!this.xX()) return !1;
		aIl[this.rR].resize()
	}, this.fY = function(aD, aE) {
		var aL;
		this.xX() && (aL = aIl[this.rR]).fY && aL.fY(aD, aE)
	}, this.fc = function(aD, aE) {
		var aL;
		this.xX() && (aL = aIl[this.rR]).fc && aL.fc(aD, aE)
	}, this.xZ = function() {
		var aL;
		this.xX() && (aL = aIl[this.rR]).xZ && aL.xZ()
	}, this.fb = function(fg, fh, deltaY) {
		var aL;
		this.xX() && (aL = aIl[this.rR]).fb && aL.fb(fg, fh, deltaY)
	}, this.lK = function(code) {
		var aL;
		return !!this.xX() && ((aL = aIl[this.rR]).lK && aL.lK(code), !0)
	}, this.bQ = function() {
		var aL;
		this.xX() && (aL = aIl[this.rR]) && aL.bQ && aL.bQ()
	}, this.xX = function() {
		return 0 < this.rR
	}, this.mt = function() {
		return aIl[this.rR]
	}, this.a73 = function(t) {
		return aIl[t]
	}, this.oY = function() {
		return aIl
	}, this.removeChild = function(aJ5, aJ6) {
		try {
			aJ5.removeChild(aJ6)
		} catch (eL) {
			console.log("removeChild error " + eL)
		}
	}
}

function a5z() {
	var aJ7, aJ8, aJ9, aJA, aJB, aJC, aJD, aJE, aJF, aJG, aJH, aJI, aJJ, aJK, aJL, aJM, aJN, aJO, aJP, aJQ, aJR, aJS, position, aJT, aJU, aJV, aJW, aJX, aJY = 1,
		i7 = 1,
		aJZ = "";
	var leaderboardHasChanged = true;
	this.playerPos = f.al;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => f4[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(f4[f.al]);
	}

	function aJb() {
		aJD.clearRect(0, 0, aJ7, a9y),
			aJD.fillStyle = aJX ? b7.aJe : b7.aJf,
			aJD.fillRect(0, 0, aJ7, aJI),
			aJD.fillStyle = b7.qX,
			aJD.fillRect(0, aJI, aJ7, a9y - aJI);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			f4[f.al]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aJS = -1;
		if (__fx.leaderboardFilter.enabled && aJS >= __fx.leaderboardFilter.filteredLeaderboard.length) aJS = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aJg(ownClanIndex - position, b7.mz);
			})() :
			(playerPos >= position && aJg(playerPos - position, b7.mz),
				0 !== f4[f.al] && 0 === position && aJg(0, b7.aJh))
		),
		-1 !== aJS && aJg(aJS, b7.aJi),
			aJD.fillStyle = b7.qX,
			//console.log("drawing", aJS),
			aJD.clearRect(0, a9y - __fx.leaderboardFilter.tabBarOffset, aJ7, __fx.leaderboardFilter.tabBarOffset);
		aJD.fillRect(0, a9y - __fx.leaderboardFilter.tabBarOffset, aJ7, __fx.leaderboardFilter.tabBarOffset);
		aJD.fillStyle = b7.b9,
			aJD.fillRect(0, aJI, aJ7, 1),
			aJD.fillRect(0, a9y - __fx.leaderboardFilter.tabBarOffset, aJ7, 1),
			__fx.leaderboardFilter.drawTabs(aJD, aJ7, a9y - __fx.leaderboardFilter.tabBarOffset, b7.mz),
			aJD.fillRect(0, 0, aJ7, fx.a00),
			aJD.fillRect(0, 0, fx.a00, a9y),
			aJD.fillRect(aJ7 - fx.a00, 0, fx.a00, a9y),
			aJD.fillRect(0, a9y - fx.a00, aJ7, fx.a00), aJD.font = aJ8, v.w.textBaseline(aJD, 1), v.w.textAlign(aJD, 1), aJD.fillText(aJZ, Math.floor((aJ7 + aJI - 22) / 2), Math.floor(aJG + aJ9 / 2));
		__fx.playerList.drawButton(aJD, 12, 12, aJI - 22);
		var bz, xx = playerPos < position + aJB - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) xx = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aJB)
				position = (rivalsCount > aJB ? rivalsCount : aJB) - aJB;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aJB; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ci.iF[repId], ci.ew[repId], ci.it[repId]]);
					ci.iF[repId] = rivalsEntry.territory;
					ci.ew[repId] = "[" + rivalsEntry.clan + "]";
					ci.it[repId] = 0;
				}
				for (aJD.font = aJA, v.w.textAlign(aJD, 0), bz = aJB - xx; 0 <= bz; bz--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[bz + position];
					if (rivalsEntryLeft !== undefined)
						aJj(rivalsEntryLeft.representativeId), aJk(bz, bz + position, rivalsEntryLeft.representativeId);
				}
				for (v.w.textAlign(aJD, 2), bz = aJB - xx; 0 <= bz; bz--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[bz + position];
					if (rivalsEntryRight !== undefined)
						aJj(rivalsEntryRight.representativeId), aJl(bz, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ci.iF[entry[0]] = entry[1];
					ci.ew[entry[0]] = entry[2];
					ci.it[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aJB)
				position = (result.length > aJB ? result.length : aJB) - aJB;
			//if (position >= result.length) position = result.length - 1;
			for (aJD.font = aJA, v.w.textAlign(aJD, 0), bz = aJB - xx; 0 <= bz; bz--) {
				const pos = result[bz + position];
				if (pos !== undefined)
					aJj(f7[pos]), aJk(bz, pos, f7[pos]);
			}
			for (v.w.textAlign(aJD, 2), bz = aJB - xx; 0 <= bz; bz--) {
				const pos = result[bz + position];
				if (pos !== undefined)
					aJj(f7[pos]), aJl(bz, f7[pos]);
			}
		} else {
			for (aJD.font = aJA, v.w.textAlign(aJD, 0), bz = aJB - xx; 0 <= bz; bz--)
				aJj(f7[bz + position]), aJk(bz, bz + position, f7[bz + position]);
			for (v.w.textAlign(aJD, 2), bz = aJB - xx; 0 <= bz; bz--)
				aJj(f7[bz + position]), aJl(bz, f7[bz + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == xx && (aJj(f.al), v.w.textAlign(aJD, 0), aJk(aJB - 1, f4[f.al], f.al), v.w.textAlign(aJD, 2), aJl(aJB - 1, f.al)), 0 === position && (xx = .7 * aJJ / iQ.get(4).height, aJD.setTransform(xx, 0, 0,
				xx, Math.floor(aJK + .58 * aJJ + .5 * xx * iQ.get(4).width), Math.floor(aJG + aJ9 + .4 * aJJ)), aJD.imageSmoothingEnabled = !0, aJD.drawImage(iQ.get(4), -Math.floor(iQ.get(4).width / 2), -Math.floor(iQ.get(4).height / 2)), aJD
			.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aJj(player) {
		f.j && (aJD.fillStyle = l.aJn[l.p[player]])
	}

	function aJg(q, aJo) {
		aJD.fillStyle = aJo, q = aJB - 1 < q ? aJB - 1 : q;
		aJo = Math.floor((q === aJB - 1 ? 2 : 0 === q ? 1.15 : 1) * aJJ), aJo = q === aJB - 2 ? Math.floor(aJI + 9.15 * aJJ) - Math.floor(aJI + 8.15 * aJJ) : aJo;
		aJD.fillRect(0, Math.floor(aJI + (q + (0 === q ? 0 : .15)) * aJJ), aJ7, aJo)
	}

	function aJk(a3P, rG, q) {
		aJD.fillText(aJO[rG], aJK, Math.floor(aJG + aJ9 + (a3P + .5) * aJJ)), 1 === ci.it[q] && (aJD.font = "italic " + aJA);
		rG = Math.floor(aJG + aJ9 + (a3P + .5) * aJJ);
		aJD.fillText(ci.ew[q], aJL, rG), 0 !== ci.it[q] && (aJD.font = aJA), q < f.g4 && 2 !== ci.it[q] || aJD.fillRect(aJL, rG + .35 * aJY, aJN[q], Math.max(1, .1 * aJY))
	}

	function aJl(a3P, q) {
		aJD.fillText(ci.iF[q], aJM, Math.floor(aJG + aJ9 + (a3P + .5) * aJJ))
	}
	this.e = function() {
		var q;
		for (c4.af.aAo[0] = 0, aJW = aJV = aJT = 0, aJX = aJU = !1, aJS = -1, aJB = bL.bM.bN() ? 6 : 10, i7 = (position = 0) === (i7 = fa.fE.data[11].value) ? 10 : 1 === i7 ? 5 : 1, aJR = !1, aJP = new Uint16Array(aJB + 1), aJQ = new Uint32Array(
				aJB + 1), aJF = f.g, f7 = new Uint16Array(aJF), f4 = new Uint16Array(aJF), q = aJF - 1; 0 <= q; q--) f7[q] = q, f4[q] = q;
		this.resize(!0), aJN = new Uint16Array(f.g);
		var aJa = Math.floor(aJ7 - aJL - aJK - aJE);
		for (aJO = new Array(f.g), aJD.font = aJA, q = f.g - 1; 0 <= q; q--) aJO[q] = q + 1 + ".", ci.ew[q] = v.sx.yJ(ci.a7V[q], aJA, aJa), aJN[q] = Math.floor(aJD.measureText(ci.ew[q]).width);
		aJb()
	}, this.resize = function(e) {
		if (a9y = bL.bM.bN() ? (aJ7 = Math.floor(.335 * ao.bO), Math.floor(aJB * aJ7 / 8)) : (aJ7 = Math.floor(.27 * ao.bO), Math.floor(aJB * aJ7 / 10)), aJ7 = Math.floor(.97 * aJ7), (aJC = document.createElement("canvas")).width = aJ7, aJC
			.height = a9y, aJD = aJC.getContext("2d", {
				alpha: !0
			}), aJG = .025 * aJ7, aJ9 = .16 * aJ7, aJH = 0 * aJ7, aJI = Math.floor(.45 * aJG + aJ9), aJJ = (a9y - aJ9 - 2 * aJG - aJH) / aJB,
			aJC.height = a9y += aJJ, __fx.leaderboardFilter.tabBarOffset = Math.floor(aJJ * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a9y - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aJ7,
			aJ8 = v.w.bA(1, Math.floor(.55 * aJ9)), aJY = Math.floor((bL.bM.bN() ? .67 : .72) * aJJ), aJA = v.w.bA(0, aJY), aJD.font = aJA, aJK = Math.floor(.04 * aJ7), aJL = Math.floor((bL.bM.bN() ? .195 : .18) * aJ7), aJE = Math.floor(aJD
				.measureText("00920600").width), aJD.font = aJ8, aJM = aJ7 - aJK, !e) {
			aJD.font = aJA;
			for (var q = f.g - 1; 0 <= q; q--) aJN[q] = Math.floor(aJD.measureText(ci.ew[q]).width);
			aJb()
		}
		aJZ = v.sx.yJ(L(330), aJ8, .96 * aJ7)
	}, this.aJc = function() {
		return aJ7
	}, this.hM = function(ij, aJd) {
		(aJd || aJR && (ij || bR.el() % i7 == 0)) && (aJR = !1, aJb())
	}, this.bQ = function() {
		! function() {
			for (var bz = aJF - 1; 0 <= bz; bz--) 0 === ci.hL[f7[bz]] && ! function(bz) {
				var aJw = f7[bz];
				aJF--;
				for (var q = bz; q < aJF; q++) f7[q] = f7[q + 1], f4[f7[q]] = q;
				f7[aJF] = aJw, f4[f7[aJF]] = aJF
			}(bz)
		}();
		for (var aJu, eT = aJF - 1, bz = 0; bz < eT; bz++) ci.iF[f7[bz]] < ci.iF[f7[bz + 1]] && (aJu = f7[bz], f7[bz] = f7[bz + 1], f7[bz + 1] = aJu, f4[f7[bz]] = bz, f4[f7[bz + 1]] = bz + 1);
		! function() {
			for (var bT = aJR, xx = (aJR = !0, f4[f.al] >= aJB - 1 ? aJB - 2 : aJB - 1), q = xx; 0 <= q; q--)
				if (aJP[q] !== f7[q] || aJQ[q] !== ci.iF[f7[q]]) return;
			(xx != aJB - 2 || aJP[aJB] === f4[f.al] && aJQ[aJB] === ci.iF[f.al]) && (aJR = bT)
		}();
		for (var q = aJB - 1; 0 <= q; q--) aJP[q] = f7[q], aJQ[q] = ci.iF[f7[q]];
		aJP[aJB] = f4[f.al], aJQ[aJB] = ci.iF[f.al];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.fY = function(aD, aE) {
		if (a0X(aD, aE)) {
			if (__fx.utils.isPointInRectangle(aD, aE, fx.gap + 12, fx.gap + 12, aJI - 22, aJI - 22)) __fx.playerList.display(ci.a7V);
			else {
				if (aE - fx.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aD - fx.gap);
				aD = aJy(aE);
				0 <= aD ? (aJT = bR.eM, aJU = !0, aJV = aJW = aD, r9.xo() && (aD = aJz(-1, aJW, aJB), aJS !== (aD = aD === aJB ? -1 : aD)) && (aJS = aD, aJb(), bR.bS = !0)) : (aJX && (aJX = !1, aJb(), bR.bS = !0), c4.c5(10, 0, new aK0({
					aK1: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aJb(), bR.bS = !0
	};

	function aJy(aE) {
		return (aE -= fx.gap + aJI) < 0 ? Math.floor(aE / aJJ) - 1 : aE < (aJB - 1) * aJJ ? Math.floor(aE / aJJ) : aE < a9y - aJI ? aJB - 1 : (aE -= a9y - aJI, aJB + Math.floor(aE / aJJ))
	}

	function a0X(aD, aE) {
		return aD >= fx.gap && aD < fx.gap + aJ7 && aE >= fx.gap && aE < fx.gap + a9y
	}
	this.fc = function(aD, aE) {
		var bT, aJx;
		if (__fx.utils.isPointInRectangle(aD, aE, fx.gap + 12, fx.gap + 12, aJI - 22, aJI - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aD, aE, fx.gap, fx.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aD - fx.gap)) return aJx = aJy(aE), aD = a0X(aD, aE), aE = !(!(aJx < 0 && aD) || r9.xo()), aJU ? (bT = position, (position = aJz(0, position += aJV - aJx, f.g - aJB)) !== bT ? (aJX = aE, aJx =
			aJz(-1, aJV = aJx, aJB), aJS = aJx = aJx !== aJB && aD ? aJx : -1, aJb(), bR.bS = !0) : aJX !== aE && (aJX = aE, aJb(), bR.bS = !0), !0) : (aJx = (aJx = aJz(-1, aJx, aJB)) === aJB || !aD || r9.xo() ? -1 : aJx, (aJS !== aJx ||
			aJX !== aE) && (aJS = aJx, aJX = aE, aJb(), bR.bS = !0))
	}, this.vy = function(aD, aE) {
		if (!aJU) return !1;
		aJU = !1;
		var aJx = aJy(aE);
		var isEmptySpace = false;
		return r9.xo() && -1 !== aJS && (aJS = -1, aJb(), bR.bS = !0), bR.eM - aJT < 350 && aJW === aJx && -1 !== (aJx = (aJx = aJz(-1, aJx, aJB)) !== aJB && a0X(aD, aE) ? aJx : -1) && (aD = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aJx + position] === undefined, __fx.leaderboardFilter.rivalsData[aJx + position]?.representativeId ?? f.al) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), f7[__fx.leaderboardFilter.filteredLeaderboard[aJx + position] ?? (isEmptySpace = true, f4[f.al])]) : f7[aJx + position]),
			aJx === aJB - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : f4[f.al]) >=
			position + aJB - 1 && (aD = f.al), !isEmptySpace && f.j && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aD, ci.a7V, f.gB), 0 === ci.hL[aD] || isEmptySpace || f.gE && !f.gB && !f.gC && aD !== gC
			.al || eS.zf(aD, 800, !1, 0)), !0
	}, this.fb = function(aD, aE, deltaY) {
		var aK4;
		return !(aJU || f.fZ || (aK4 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a0X(aD, aE)) || (aD = (aD = aJz(-1, aJy(aE), aJB)) === aJB || r9.xo() ? -1 : aD, 0 < deltaY ? position < f.g - aJB && (position += Math.min(f.g - aJB -
			position, aK4), aJS = aD, aJb(), bR.bS = !0) : 0 < position && (position -= Math.min(position, aK4), aJS = aD, aJb(), bR.bS = !0), 0))
	}, this.aR = function() {
		b5.drawImage(aJC, fx.gap, fx.gap)
	}
}

function a6x() {
	this.a4o = [L(331), L(332), L(333), L(334), L(335), L(336), L(337), L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(345), L(346)];
	var aK5 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.a4n = new Array(aK5.length), this.e = function() {
		var a8 = fa.fE.data[155].value.split(";"),
			aL = a8.length;
		if (function() {
				for (var n = aK5.length, q = 0; q < n; q++) xf.a4n[q] = aK5[q]
			}(), !(aL > aK5.length))
			for (var q = 0; q < aL; q++) a8[q].length && (this.a4n[q] = a8[q])
	}, this.a4q = function(t, code) {
		for (var a4n = this.a4n, aK7 = aK5, lI = (a4n[t] = code, ""), n = a4n.length, aK8 = [], q = 0; q < n; q++) aK8.push(a4n[q] === aK7[q] ? "" : a4n[q]);
		n--;
		for (q = 0; q < n; q++) lI += aK8[q] + ";";
		fa.l9.lA(155, lI += aK8[n])
	}, this.a4m = function() {
		fa.l9.lA(155, ""), this.e()
	}, this.jA = function(code, t) {
		return code === this.a4n[t] || code === this.a4n[t + 1]
	}
}

function aK9() {
	this.cx = function(a1a) {
		return 0 === a1a ? 1 === f.eR && f.gE : 1 === a1a ? 1 === f.eR && !f.gE : 2 === f.eR
	}, this.cy = function(player) {
		return 0 !== ci.hL[player] && 2 !== ci.it[player]
	}, this.aEe = function(player) {
		return player === f.al && 2 !== ci.it[player]
	}, this.uX = function(player, d7) {
		return player !== d7 && (0 === l.f9[player] || l.f9[player] !== l.f9[d7])
	}, this.yz = function() {
		return ez.f0 < 2 ? 0 : f.j ? 1 < f5.aD4() : ci.iF[f7[1]]
	}, this.aKA = function() {
		var f0 = ez.f0;
		if (0 !== f0) {
			if (!f.j) return !this.is(f7[0]);
			for (var f9 = l.f9, a7o = f5.f6(), f2 = ez.f2, q = f0 - 1; 0 <= q; q--) {
				var es = f2[q];
				if (f9[es] === a7o && !this.is(es)) return 1
			}
		}
		return 0
	}, this.aEZ = function(player) {
		return player === f.al
	}, this.aBy = function(d7, fi) {
		return ci.iN[f.al] < fi * ci.iN[d7]
	}, this.is = function(player) {
		return player >= f.g4 || 2 === ci.it[player]
	}, this.eq = function(player) {
		return 0 !== ci.hL[player]
	}, this.aKB = function(player) {
		return player < f.g4
	}, this.d8 = function(a2U, a2V) {
		return a2U !== a2V
	}, this.aCg = function(player, kk) {
		var min;
		return kk = this.aKC(player, kk), ci.iN[player] += kk, ci.j2[player] && (min = Math.min(ci.j2[player], ci.iN[player]), ci.j2[player] -= min, ci.iN[player] -= min), kk
	}, this.aKC = function(player, kk) {
		var a06 = ci.iN[player];
		return kk = Math.min(kk, ci.iF[player] * f.gA - a06), kk = Math.min(kk, f.fz - a06), Math.max(kk, 0)
	}, this.d9 = function(player, d6, aKD, aKE) {
		var a06 = ci.iN[player],
			d6 = ds.kh(a06 * (d6 + 1), 1024),
			aKD = ds.kh(aKD * a06, 1024),
			d6 = Math.min(d6, a06 - aKD);
		return 10 === f.gI && (d6 = hD.a07(player, d6)), a9.dU[0] = d6, a9.dU[1] = aKD, aKE <= d6
	}, this.dR = function(player, dO, dP) {
		var player = ci.iN[player],
			aKF = ds.kh(64 * player, 1024);
		return dO = Math.min(dO, player - aKF), dO = this.aKC(dP, dO), a9.dU[0] = dO, a9.dU[1] = aKF, 1 <= dO
	}, this.aKG = function(player, dO, dP) {
		var player = ci.iN[player],
			aKF = ds.kh(64 * player, 1024);
		return dO = Math.min(dO, player - aKF), this.aKC(dP, dO)
	}, this.aKH = function(dO, dP) {
		return dO = this.aKC(dP, dO), a9.dU[0] = dO, a9.dU[1] = 0, 1 <= dO
	}, this.dS = function(player, aKI) {
		return ds.kh(ci.iN[player] * (aKI + 1), 1024)
	}, this.aKJ = function(player, aKD) {
		aKD = ds.kh(aKD * ci.iN[player], 1024);
		a9.dU[1] = aKD, ci.iN[player] -= aKD
	}, this.aDn = function(player, aKK) {
		var o4, o6, jO = ci.iN[player];
		return aKK <= jO ? ci.iN[player] -= aKK : (ci.iN[player] = 0, o6 = ci.j2[player] + (o4 = 5 * ((jO = aKK - jO) >> 2)), dL.aDu(player, o4 - jO, 12), o6 <= f.g1 ? ci.j2[player] = o6 : (ci.j2[player] = f.g1, dL.aDu(player, o6 - f.g1, 18))),
			aKK
	}, this.eB = function(player, d6) {
		var iN = ci.iN,
			a06 = iN[player],
			d6 = ds.kh(a06 * (d6 + 1), 1024),
			aKF = Math.max(ds.kh(a06, 10), 1e3);
		return (d6 = Math.min(d6, a06 - aKF)) < 0 ? (iN[player] = 0, aKF = Math.min(1e3, a06 + f.g1 - ci.j2[player]), a9.dU[1] = aKF, ci.j2[player] += aKF - a06, 0) : (a9.dU[1] = aKF, 10 === f.gI && (d6 = hD.a07(player, d6)), iN[player] -= aKF +
			d6, d6)
	}, this.dK = function(player) {
		ci.iN[player] -= a9.dU[0] + a9.dU[1]
	}, this.dA = function(player, d7) {
		return (d7 = Math.min(d7, f.g)) < f.g && 0 === ci.hL[d7] && (d7 = f.g), (a9.dE[0] = d7) === f.g || a4S.a2P(player, d7)
	}, this.dQ = function(player, dP) {
		return 0 !== ci.hL[dP] && !a4S.a2P(player, dP)
	}, this.aKL = function(player, aKM) {
		for (var es, n = ez.f0, rG = 0, aKN = f7, q = 0; q < n; q++)
			if (es = aKN[q], !this.is(es)) {
				if (player === es) return !0;
				if (++rG > aKM) return !1
			} return !1
	}, this.em = function(es) {
		var yX = f.j ? f5.yY() : ci.iF[f7[0]];
		return yX >= ds.kh(es * f.gD, 100)
	}, this.aI5 = function(kk, min, max) {
		return Math.floor(ds.dt(isNaN(kk) ? 0 : Number(kk), min, max))
	}
}

function a5i() {
	this.aKO = "https://territorial.io/changelog", this.aKP = "https://territorial.io/terms", this.aKQ = "https://territorial.io/privacy", this.aKR = "https://territorial.io/tutorial", this.aKS = "https://territorial.io/players", this.aKT =
		"https://territorial.io/clans", this.aKU = "https://territorial.io/clan-results", this.aIh = "https://patreon.com/c/territorial", this.aBK = "https://play.google.com/store/apps/details?id=territorial.io", this.aBL =
		"https://apps.apple.com/app/id1581110913", this.aBM = "https://discord.gg/pthqvpTXmh", this.aBN = "https://www.instagram.com/davidtschacher/", this.a0N =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function pD() {
	var aKV, aKW, a2a, aKX = ["wss://", "/s50/", "/s51/", "/s52/"],
		aKY = 0;

	function pE() {
		bg.af.pE(aKV, aKW)
	}

	function aKd(eL) {
		bg.kd.aKf(aKV, new Uint8Array(eL.data))
	}

	function aKe() {}

	function pP(eL) {
		bg.af.pP(aKV, eL)
	}
	this.e = function(t, p8, p9) {
		aKV = t, aKW = p8,
			function(p9) {
				p9 = gc.aKc ? "ws://localhost:" + (7130 + aKV) + "/" : p9 ? aKX[0] + "game.territorial.io/x0" + aKV + "/" : aKX[0] + bg.af.on[aKV] + aKX[1 + gc.gd];
				(a2a = new WebSocket(p9)).binaryType = "arraybuffer", a2a.onopen = pE, a2a.onmessage = aKd, a2a.onclose = pP, a2a.onerror = aKe
			}(p9)
	}, this.aKa = function() {
		return a2a.readyState === a2a.CONNECTING
	}, this.lC = function() {
		return a2a.readyState === a2a.OPEN
	}, this.oz = function() {
		return aKY
	}, this.pG = function() {
		aKY = 1
	}, this.pB = function() {
		return this.aKa() || this.lC()
	}, this.pC = function(p8) {
		aKW = p8
	}, this.aKb = function() {
		return aKW
	}, this.send = function(li) {
		this.lC() && a2a.send(li)
	}, this.close = function(pK) {
		this.pB() && (this.eP(), a2a.close(pK))
	}, this.eP = function() {
		a2a.onopen = null, a2a.onmessage = null, a2a.onclose = null, a2a.onerror = null
	}
}

function aKg() {
	this.bQ = function() {
		var aKm;
		2 === f.gN ? (eo.wZ(0, 59), eS.zo(2700)) : f.gI < 7 ? (aKm = l.m[f.gQ], aKm = l.a7Q[aKm], ba.a9s(L(347, [aKm]), 2, 1, 12), eo.ev(0, L(348, [aKm]), 40, 0, b7.b9, b7.ex, -1, !1), eS.zo(2700)) : 8 === f.gI ? (f.gO ? eo.wZ(f.gP, 2) : eo.wZ(
			1 - f.al, 3), f.gK.aKl(f.gP), eS.zf(f.gP, 2700, !1, 0)) : 9 === f.gI ? (eo.aCB(), eS.zo(2700)) : (eo.aC1(f.gP), eS.zf(f.gP, 2700, !1, 0))
	}, this.nX = function() {
		var lI;
		f.gC || f.gB || (lI = bg.af.p6(), f.gI < 7 ? lI += "/log/team" : 8 === f.gI ? lI += "/log/1v1" : 9 === f.gI ? lI += "/log/zombies" : lI += "/log/br", eo.ev(720, lI, 736, 0, b7.b9, b7.qd, -1, !1))
	}
}

function a6b() {
	this.wc = new nO, this.result = new a5D, this.a5K = new aKo, this.nW = new aKg, this.nU = new a7m, this.nV = new a7C, this.e = function() {
		this.result.e()
	}
}

function aKp() {
	aKq() ? (aKr(), a2G !== f.g && aKs()) : aKt()
}

function aKs() {
	a4S.a2F(), a4S.a2H(ci.a28[a2G]), a4S.a2H(ci.cj[a2G]), au.s6(au.bq) && a4S.a2H(ci.a29[a2G]), a4S.a2I(ci.eC[a2G]), a4S.a2J(ci.cj[a2G]), a4S.a2J(ci.a29[a2G]), a4S.a2K(), a4S.a2O()
}

function aKr() {
	aKu = !0, dC.aKv(a21, aKw, aKx), dC.aKy(a21, aKw), ci.iF[a21] += a1z, a4S.a1y(), aKz()
}

function aKq() {
	return (a2G === f.g ? aL0 : aL1)()
}

function aL1() {
	var aL2 = a1z * f.g3,
		aL3 = aL4(),
		aL5 = aL6(),
		aL3 = aL2 + 2 * aL3 + aL5,
		aL8 = aL9 * a1z;
	return aL3 < aL8 ? (aKx -= aL3, dL.aDu(a21, aL3, 13), aLA(aL3 - aL2, aL5), !0) : aLB && 0 === aL5 ? (aKx -= aL8, aL8 += v.cw.aDn(a21, aL3 - aL8 + 1), dL.aDu(a21, aL8, 13), aLA(aL8 - aL2, 0), !0) : (aKx -= aL8, dL.aDu(a21, aL8, 13), aLA(aL8 - aL2,
		aL5), !1)
}

function aLA(aL8, aL5) {
	if (0 < aL5) {
		if (aL8 <= aL5) return dL.aDu(a2G, aL8, 13), void dC.aLC(a2G, a21, aL5 - aL8);
		dC.aLC(a2G, a21, 0), aL8 -= aL5
	}
	aL8 = ds.kh(aL8, 2), aL8 = Math.min(ci.iN[a2G], aL8), dL.aDu(a2G, aL8, 13), ci.iN[a2G] -= aL8
}

function aL6() {
	return dC.aLD(a2G, a21)
}

function aL4() {
	return ds.kh(a1z * ci.iN[a2G], 1 + ds.kh(10 * ci.iF[a2G], 16))
}

function aL0() {
	var aLE = a1z * f.g3;
	return aKx -= aLE, dL.aDu(a21, aLE, 13), !0
}

function aKz() {
	for (var q = a1z - 1; 0 <= q; q--) ci.eC[a21].push(a20[q]), ci.a28[a21].push(a20[q]), a6.a2N(a20[q], a21)
}

function wT() {
	for (var u = 24, jA = document.createElement("canvas"), jA = (jA.width = u, jA.height = u, jA.getContext("2d", {
			alpha: !1
		})), jl = (jA.fillStyle = "rgb(0,0,0)", jA.fillRect(0, 0, u, u), jA.font = "22px system-ui", jA.textBaseline = "middle", jA.textAlign = "center", jA.fillStyle = "rgb(255,255,255)", jA.fillText("Q", 12, 12), jA.getImageData(0, 0, u, u)
			.data), n = jl.length, aL = 0, q = 0; q < n; q += 4) aL += jl[q];
	return 16383 & aL
}

function aJ1() {
	var oT, oU, oV, kt;

	function mY() {
		oX(), 2 !== f.data.iIncomeType && (f.data.iIncomeData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		2 === f.data.iIncomeType && v.aN.oZ(oV.oa(), f.data.iIncomeData, 255)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(349), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(25), L(26), L(27)],
			value: f.data.iIncomeType
		}, function(t) {
			oX(), 2 !== t || f.data.iIncomeData || (f.data.iIncomeData = new Uint8Array(f.g), f.data.iIncomeData.fill(32)), f.data.iIncomeType = t, c4.c5(27)
		})), kt.push(kv)
	}(kt = []), function(kt) {
		var kv;
		1 === f.data.iIncomeType && ((kv = new kw).kz("Value"), kv.l1(new jv({
			t: -1,
			value: f.data.iIncomeValue
		}, 1, 0, function(eL) {
			var value = ds.dt(Math.floor(eL.target.value), 0, 255);
			eL.target.value = f.data.iIncomeValue = value
		})), kt.push(kv))
	}(kt), function(kt) {
		var kv;
		2 === f.data.iIncomeType && ((kv = new kw).kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.iIncomeData, 4)), kv.l1(oV), kt.push(kv))
	}(kt), kt))
}

function aLF(me, kN) {
	var mJ;
	this.resize = function() {
		for (var q = 0; q < me.length; q++) v.w.kV(me[q].button);
		mJ.style.gap = mJ.style.padding = v.w.kU(fx.a02)
	}, (mJ = document.createElement("div")).style.display = "grid", mJ.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", mJ.style.overflowY = "auto", mJ.style.gridAutoRows = "5.3em", mJ.style.maxHeight = "100%";
	for (var q = 0; q < me.length; q++) me[q].aDa(1), mJ.appendChild(me[q].button);
	kN.appendChild(mJ)
}

function aLG() {
	this.bQ = function(player) {
		return !!ae.dZ.ce(player) && !(ae.af.cg[player] >= Math.max(3 * dH.performance.z3, gv.cf[gv.aW[player]]) || !v.cw.d9(player, gv.aLH[gv.aW[player]], 32, 0)) && (h8.yZ() ? function(player) {
			var aLN = ae.co.yc(),
				n = aLN.length;
			if (0 === n) return !1;
			aLN = aLN[ge.u0(n)], n = ae.af.tc[aLN];
			if (ae.uQ.aB4(player, n)) return !1;
			return !! function(player, aGb) {
				var aGb = cq.uT(ae.af.ad[aGb]),
					aDM = cq.fF(aGb),
					aGb = cq.fG(aGb),
					az = ci.iO[player],
					b1 = ci.iP[player],
					b3 = ci.iS[player],
					player = ci.iT[player],
					b3 = Math.max(aDM - b3, az - aDM),
					az = Math.max(aGb - player, b1 - aGb);
				return b3 < 100 && az < 100
			}(player, aLN) && !!ae.dj.dk(player, n, 1) && (v.cw.dK(player), ae.af.df(player), !0)
		}(player) : !!(dH.aLJ.bQ(player) || dH.aLK.bQ(player) || dH.aLL.bQ(player)) && (function(player) {
			a9.cn[1] = 4, v.cw.dK(player), ae.af.df(player)
		}(player), !0))
	}
}

function aLP() {
	this.aLQ = function(player, a3I) {
		return -1 !== a3I && !!ae.co.wz(player, a3I) && this.db(player, a3I, 0)
	}, this.db = function(player, a3I, aLR) {
		player = function(player, a3I, aLR) {
			var uZ = ae.co.ua(player, a3I);
			if (-1 === uZ) return -1;
			uZ = ae.co.aLS(uZ, a3I);
			if (-1 === uZ) return -1;
			var ws = ae.um.x0(uZ, a3I);
			if (0 <= ws) return ws;
			if (ae.um.ur()) return -1;
			if (0 <= (ws = ae.um.x0(a3I, uZ))) return ae.um.x1(ae.um.un(ae.um.get(ws)));
			if (uZ === a3I) return ae.um.x1(new Uint32Array([uZ, a3I]));
			if (0 <= (ws = ae.aLT.db(uZ, a3I))) return ws;
			return aLR ? function(aLV, player) {
				var a0l = a9.a0l,
					fE = (a0l.fill(0), [aLV]),
					aLW = (a0l[aLV] = 1, cq.aLW),
					aLX = -1,
					n = fE.length;
				for (; - 1 === aLX && n;) {
					for (var a8 = [], q = 0; q < n; q++)
						for (var a2 = fE[q], aLY = a0l[a2], jl = 0; jl < 8; jl++) {
							var a7a, a7Y, a4V = a2 + aLW[jl],
								a3 = 4 * a4V;
							a6.a1n(a3) ? (a7a = a0l[a4V], a7Y = aLY + 5 + ((1 & jl) << 1), 0 === a7a ? (a8.push(a4V), a0l[a4V] = a7Y) : a0l[a4V] = Math.min(a7Y, a7a)) : -1 === aLX && jl % 2 == 0 && a6.jm(player, a3) && (aLX = a2)
						}
					n = (fE = a8).length
				}
				return -1 !== aLX ? function(ww, aLa) {
					var aLW = cq.aLW,
						aLb = -1,
						aHP = 0,
						a46 = [];
					for (; aLa !== ww;)(aHP = function(a2, aHP) {
						var a0l = a9.a0l,
							aLW = cq.aLW,
							aLY = a0l[a2];
						if (aLY - a0l[a2 + aLW[aHP]] != 5 + ((1 & aHP) << 1))
							for (var bz = 0; bz < 8; bz++) {
								var jl = bz + aHP + 6 & 7;
								if (aLY - a0l[a2 + aLW[jl]] == 5 + ((1 & jl) << 1)) return jl
							}
						return aHP
					}(aLa, aHP)) !== aLb && (a46.push(aLa), aLb = aHP), aLa += aLW[aHP];
					a46.push(ww);
					var ws = ae.um.x0(a46[0], ww);
					if (0 <= ws) return ws;
					return ae.um.x1(new Uint32Array(a46))
				}(aLV, aLX) : -1
			}(a3I, player) : -1
		}(player, a3I, aLR);
		return -1 !== player && (a9.a8[0] = ae.um.get(player), !0)
	}
}

function aIr() {
	var aLd, aLe, aLf, ju, aLg, a8N = 0;
	this.aAV = new qP, aLf = new a58([.45, .27], [.5, .5], 2 / 3), aLe = [new k7("⚔️<br>" + L(350), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aLh(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : b7.aLi), new k7("🗡️<br>" + L(351), function() {
			aLh(1)
		}, b7.qb), new k7("🔑<br>" + L(352), function() {
			aLh(2)
		}, b7.aLj), new k7("☰<br>" + L(353), function() {
			aLh(3)
		}, b7.aLk), new k7("", function() {
			c4.c5(12)
		}, b7.qX, !1),
		new k7("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new k7("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], ju = new jv(fa.fE.data[122]);
	for (var q = 0; q < aLe.length; q++) aLe[q].button.style.position = "absolute";

	function aLh(t) {
		bL.bM.setState(10), iQ.qq() || iQ.aAC(), 0 === t ? c4.af.hW(1) : 1 === t ? (d0.m6.c3(fa.fE.data[156].value, 1) || f.gS.vW(), c4.c5(19)) : 2 === t ? 0 !== bL.id || fa.fE.data[140].value ? c4.c5(8, c4.rR, new qh(16)) : c4.af.aLl(c4.rR, 16) :
			3 === t && c4.c5(1)
	}
	ju.eL.style.position = "absolute", ju.eL.style.textAlign = "center", ju.eL.placeholder = L(354), this.show = function() {
		bi.setState(0), bL.bM.setState(12), this.aAV.show(), aLe[4].k8(v.color.aLm(fa.fE.data[121].value)), this.resize(), document.body.appendChild(ju.eL);
		for (var q = 0; q < aLe.length; q++) document.body.appendChild(aLe[q].button);
		1 !== bL.id || bL.sj < 5 || (aLg && bR.eM > aLg + 144e5 ? bL.wG.setState(14) : aLg = bR.eM)
	}, this.eP = function() {
		this.aAV.eP(), c4.removeChild(document.body, ju.eL);
		for (var q = 0; q < aLe.length; q++) c4.removeChild(document.body, aLe[q].button)
	}, this.resize = function() {
		this.aAV.resize(), this.aAV.resize(), aLf.resize();
		var gap = .5 * fx.gap,
			a9V = 10 / 99 * .84 * aLf.ap,
			aLp = .16 * aLf.ar,
			fl = .19 * aLf.ap,
			aD = aLf.aD + fl,
			a9V = aLf.aE + a9V + 3 * gap,
			ap = .5 * (aLf.ap - gap) - fl,
			fl = aLf.ap - 2 * fl - aLp - gap,
			fl = (v.w.qo(ju.eL, aD, a9V, fl, aLp), v.w.qo(aLe[4].button, aD + fl + gap, a9V, aLp, aLp), a8N = a9V, .5 * (aLf.aE + aLf.ar - (a9V += aLp + gap) - gap));
		v.w.qo(aLe[0].button, aD, a9V, ap, fl), v.w.qo(aLe[1].button, aD + ap + gap, a9V, ap, fl), v.w.qo(aLe[2].button, aD, a9V + fl + gap, ap, fl), v.w.qo(aLe[3].button, aD + ap + gap, a9V + fl + gap, ap, fl);
		v.w.qo(aLe[5].button, aD, a9V + fl * 2 + gap * 2, ap * 2 + gap, fl / 3);
		v.w.qo(aLe[6].button, aD, a9V + fl * 2.33 + gap * 3, ap * 2 + gap, fl / 3);
		for (var q = 0; q < aLe.length; q++) aLe[q].button.style.font = v.w.bA(0, v.w.aLq(.065 * aLf.ar)), v.w.kV(aLe[q].button, 5);
		ju.eL.style.font = v.w.bA(0, v.w.aLq(.08 * aLf.ar)), v.w.kV(ju.eL, 5)
	}, this.aR = function() {
		if (bi.aLr(), vw.aR(), n = Math.floor((bL.bM.bN() ? .018 : .0137) * ao.bO), b5.font = v.w.bA(0, Math.max(5, n)), v.w.textBaseline(b5, 0), v.w.textAlign(b5, 2), b5.fillStyle = b7.b9, b5.fillText(gc.sj, ao.ap, 0), text = "Win count: " +
			__fx.wins.count, textLength = b5.measureText(text).width, n = Math.max(5, n), b5.textAlign = "left", b5.textBaseline = "middle", b5.fillText(text, b5.canvas.width - textLength - n / 2, 2 * n), oG.aR(a8N), a5Z.aR(), iQ.qq()) {
			b5.imageSmoothingEnabled = !1;
			var text = iQ.v7("territorial.io"),
				textLength = .84 * aLf.ap / text.width;
			b5.setTransform(textLength, 0, 0, textLength, aLf.aD + .08 * aLf.ap, aLf.aE), aLd = aLd || v.aAM.aAT(text, v.aAM.aLu, [0, 0, 0]);
			for (var aD = -1; aD <= 1; aD += 2)
				for (var aE = -1; aE <= 1; aE += 2) b5.drawImage(aLd, aD, aE);
			b5.drawImage(text, 0, 0), b5.imageSmoothingEnabled = !0;
			var n = iQ.v7("logo"),
				aLv = .6666 * textLength * text.height / n.height,
				b3 = .5 * ao.ap,
				b4 = aLf.aE + .5 * textLength * text.height - .5 * aLv * n.height;
			b5.setTransform(aLv, 0, 0, aLv, b3 - .6 * textLength * text.width, b4), b5.drawImage(n, 0, 0), b5.setTransform(aLv, 0, 0, aLv, b3 + .6 * textLength * text.width - aLv * n.width, b4), b5.drawImage(n, 0, 0), b5.setTransform(1, 0, 0, 1,
				0, 0), b5.imageSmoothingEnabled = !0
		}
	}
}

function a5x() {
	var ap, aD, aLw, canvas, sx, xX, d6, aLY, ss, sv, aLx = 11 / 12;

	function aLy() {
		var t8 = Math.floor(d6 * (ap - 2 * aLw)),
			aM0 = 1 + Math.floor(.0625 * h5.ar),
			aM1 = 1 + Math.floor(.3 * h5.ar),
			lX = Math.floor(.55 * h5.ar);
		sx.clearRect(0, 0, ap, h5.ar), sx.fillStyle = b7.qX, sx.fillRect(0, 0, aLw, h5.ar), sx.fillRect(aLw + t8, 0, ap - aLw - t8, h5.ar), sx.fillStyle = d6 < 1 / 3 ? "rgba(" + Math.floor(3 * d6 * 130) + ",130,0,0.85)" : d6 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (d6 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (d6 - 2 / 3) * 130) + ",0.85)", sx.fillRect(aLw, 0, t8, h5.ar), sx.fillStyle = b7.b9, sx.fillRect(0, 0, ap, 1), sx.fillRect(0, h5.ar - 1, ap, 1),
			sx.fillRect(0, 0, 1, h5.ar), sx.fillRect(aLw, 0, 1, h5.ar), sx.fillRect(aLw + t8, 0, 1, h5.ar), sx.fillRect(ap - aLw, 0, 1, h5.ar), sx.fillRect(ap - 1, 0, 1, h5.ar), sx.fillRect(Math.floor(.25 * h5.ar) + aM1, Math.floor((h5.ar - aM0) /
				2), h5.ar - 2 * aM1, aM0), sx.fillRect(Math.floor(ap - 1.25 * h5.ar) + aM1, Math.floor((h5.ar - aM0) / 2), h5.ar - 2 * aM1 - aM1 % 2, aM0), sx.fillRect(Math.floor(ap - 1.25 * h5.ar) + Math.floor((h5.ar - aM0) / 2), aM1, aM0, h5.ar -
				2 * aM1 - aM1 % 2), aLY = v.cw.dS(f.al, h5.kb()), sx.fillText(v.bB.bC(aLY) + " (" + v.bB.yO(100 * d6, +(d6 < .1)) + ")", Math.floor(.5 * ap), lX)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		d6 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => h5.xi(arg1);

	function aM7(ft) {
		return !(1 < ft && 1 === d6 || (1 < ft && ft * d6 - d6 < 1 / 1024 ? ft = (d6 + 1 / 1024) / d6 : ft < 1 && d6 - ft * d6 < 1 / 1024 && (ft = (d6 - 1 / 1024) / d6), d6 = ds.dt(d6 * ft, 1 / 1024, 1), aLy(), 0))
	}

	function aM8(fg) {
		return d6 !== (d6 = ds.dt((fg - aD - aLw) / (ap - 2 * aLw), 1 / 1024, 1)) && (aLy(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aLy(), bR.bS = !0
	}, this.aE = 0, this.xY = !1, this.e = function() {
		xX = !f.gE && !f.gC, sv = !1, d6 = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (fa.fE.data[182].value + 1) / 1024, aLY = 0, this.xY = !1, this.resize()
	}, this.resize = function() {
		bL.bM.bN() && ao.ap < .8 * ao.ar ? (this.ar = Math.floor(.066 * ao.bO), ap = ao.ap - 4 * fx.gap - this.ar) : (ap = Math.floor((bL.bM.bN() ? .65 : .389) * ao.bO), ap += 12 - ap % 12, this.ar = Math.floor(ap / 12)), aLw = Math.floor(3 *
			this.ar / 2), ss = v.w.bA(1, Math.floor(.5 * this.ar)), (canvas = document.createElement("canvas")).width = ap, __fx.mobileKeybinds.setSize(ap, this.ar, b5), canvas.height = this.ar, (sx = canvas.getContext("2d", {
			alpha: !0
		})).font = ss, v.w.textBaseline(sx, 1), v.w.textAlign(sx, 1), this.fN(), aLy()
	}, this.fN = function() {
		aD = bL.bM.bN() && ao.ap < .8 * ao.ar ? this.ar + 3 * fx.gap : Math.floor((ao.ap - ap) / 2), this.aE = ao.ar - this.ar - a5b.z5() * fx.gap
	}, this.hM = function() {
		sv && (sv = !1, aLy())
	}, this.xX = function() {
		return !(!xX || e2.hY && aD < Math.floor(fx.gap + 5.5 * this.ar))
	}, this.aBm = function(aM2) {
		return !!this.xX() && aD + ap > ao.ap - aM2 - fx.gap
	}, this.a47 = function() {
		xX = !f.gC
	}, this.aM3 = function() {
		xX = !1
	}, this.kb = function() {
		return ds.dt(Math.floor(1024 * d6 + .5) - 1, 0, 1023)
	}, this.xd = function(fg, fh) {
		return this.xX() && aD < fg && fg < aD + ap && fh > this.aE
	}, this.fY = function(fg, fh) {
		if (!this.xX()) return !1;
		if (!(__fx.settings.keybindButtons && fh > this.aE - Math.floor(fx.gap / 4) - this.ar && fh < this.aE - Math.floor(fx.gap / 4) && __fx.mobileKeybinds.click(fg - aD))) {
			if (!h5.xd(fg, fh)) return !1;
			eZ.fM = !1, ! function(a5J, fg, fh) {
				if (function(fg, fh) {
						return aD < fg && fg < aD + aLw && fh > h5.aE
					}(fg, fh)) return aM7(aLx);
				if (function(fg, fh) {
						return aD + ap - aLw < fg && fg < aD + ap && fh > h5.aE
					}(fg, fh)) return aM7(1 / aLx);
				return a5J.xY = !0, aM8(fg)
			}(this, fg, fh) || (bR.bS = !0)
		}
		return !0
	}, this.xi = function(fi) {
		0 !== f.eR && this.xX() && aM7(fi) && (bR.bS = !0)
	}, this.fb = function(deltaY) {
		var fi;
		return !(0 === deltaY || !this.xX()) && aM7(fi = 0 < deltaY ? (fi = 400 / (400 + deltaY)) < aLx ? aLx : fi : 1 / aLx < (fi = (400 - deltaY) / 400) ? 1 / aLx : fi)
	}, this.fc = function(fg) {
		return !!this.xY && aM8(fg)
	}, this.xa = function() {
		this.xY = !1
	}, this.bQ = function() {
		this.xX() && aLY !== v.cw.dS(f.al, this.kb()) && (sv = !0)
	}, this.aR = function() {
		this.xX() && (b5.drawImage(canvas, aD, this.aE), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(b5, aD, this.aE)
	}
}

function ro() {
	this.qB = null, this.qA = null, this.qE = null, this.e = function() {
		this.nE = [L(355), L(356), L(357), L(358), L(359), L(360), L(361), L(362), L(363), L(364), L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373), L(374), L(375), L(376), L(377), L(378), "Mare Nostrum"];
		var aM9 = [120, 105, 92],
			cos = [12, 12, 60],
			aMA = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aMB = [140, 130, 120],
			aMC = [12, 12, 76],
			aMD = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aME = [130, 117, 106],
			aMF = [12, 12, 68],
			aMG = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.qB = new Array(au.rf + 1), this.qB[0] = {
			ap: 230,
			ar: 230,
			rx: 1e3,
			ry: 2e3,
			nJ: 173
		}, this.qB[1] = {
			ap: 800,
			ar: 800,
			rx: 100,
			ry: 50,
			nJ: 43
		}, this.qB[2] = {
			ap: 512,
			ar: 512,
			rx: 128,
			ry: 32,
			nJ: 0
		}, this.qB[3] = {
			ap: 960,
			ar: 960,
			rx: 60,
			ry: 8,
			nJ: 0
		}, this.qB[4] = {
			ap: 900,
			ar: 900,
			rx: 100,
			ry: 5,
			nJ: 0
		}, this.qB[5] = {
			ap: 1e3,
			ar: 1e3,
			rx: 100,
			ry: 40,
			nJ: 0
		}, this.qB[6] = {
			ap: 1e3,
			ar: 1e3,
			rx: 100,
			ry: 20,
			nJ: 0
		}, this.qB[7] = {
			ap: 1024,
			ar: 1024,
			rx: 128,
			ry: 32,
			nJ: 0
		}, this.qB[8] = {
			ap: 820,
			ar: 820,
			rx: 200,
			ry: 100,
			nJ: 0
		}, this.qB[9] = {
			ap: 1024,
			ar: 1024,
			rx: 128,
			ry: 32,
			nJ: 0
		}, this.qB[10] = {
			a1j: aMB,
			a1k: aMC,
			s9: aMD
		}, this.qB[11] = {
			a1j: aME,
			a1k: aMF,
			s9: aMG
		}, this.qB[12] = {
			a1j: aME,
			a1k: aMF,
			s9: aMG
		}, this.qB[13] = {
			a1j: aM9,
			a1k: cos,
			s9: aMA
		}, this.qB[14] = {
			a1j: aM9,
			a1k: cos,
			s9: aMA
		}, this.qB[15] = {
			a1j: aMB,
			a1k: aMC,
			s9: aMD
		}, this.qB[16] = {
			a1j: aMB,
			a1k: aMC,
			s9: aMD
		}, this.qB[17] = {
			a1j: aM9,
			a1k: cos,
			s9: aMA
		}, this.qB[18] = {
			a1j: aME,
			a1k: aMF,
			s9: aMG
		}, this.qB[19] = {
			a1j: aM9,
			a1k: cos,
			s9: aMA
		}, this.qB[20] = {
			ap: 1024,
			ar: 1024,
			rx: 128,
			ry: 32,
			nJ: 0
		}, this.qB[21] = {
			ap: 940,
			ar: 940,
			rx: 80,
			ry: 8,
			nJ: 0
		}, this.qB[22] = {
			a1j: aME,
			a1k: aMF,
			s9: aMG
		}, this.qB[23] = {
			a1j: aMB,
			a1k: aMC,
			s9: aMD
		}, this.qB[24] = {
			a1j: [157, 136, 117],
			a1k: [16, 13, 68],
			s9: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aCR: "[OG] Neutronian"
		};
		for (var q = 0; q < au.rf; q++) this.qB[q].name = this.nE[q];
		this.qB[au.rf] = {
			name: ""
		}, this.qA = new Uint8Array(12);
		for (q = 0; q < 10; q++) this.qA[q] = q;
		for (this.qA[10] = 20, this.qA[11] = 21, this.qE = new Uint8Array(au.rg), q = 0; q < 10; q++) this.qE[q] = 10 + q;
		this.qE[10] = 22, this.qE[11] = 23, this.qE[12] = 24
	}
}

function aMK() {
	this.bQ = function() {
		if (bR.el() % 51 == 45)
			for (var n = ae.af.am, tg = ae.af.tg, uf = ae.af.uf, tc = ae.af.tc, ag = ae.af.ag, aML = gv.aML, aW = gv.aW, q = 0; q < n; q++) {
				var ue, player, aB5, cm = tg[q];
				cm % 64 == 6 || (ue = uf[q], (player = ae.co.aMM(ue[ue.length - 1])) < 0) || !v.cw.uX(player, ag[q] >> 3) || ge.u0(1e3) >= aML[aW[player]] || ! function(aGb, ue) {
					for (var n = ue.length - 1, ug = ae.af.uh[aGb], aH = 0, q = ug + 1; q < n; q++) aH += cq.uc(ue[q], ue[q + 1]);
					return (aH += cq.uc(cq.uT(ae.af.ad[aGb]), ue[ug + 1])) <= 60
				}(q, ue) || (aB5 = tc[q], 64 <= cm && ae.uQ.aB4(player, aB5)) || function(player, ue, aB5, aGb, cm) {
					ae.dZ.ce(player) && v.cw.d9(player, gv.aLH[gv.aW[player]], 32, 0) && (ae.af.tg[aGb] = 64 + cm % 64, ae.uQ.d4(aB5, ae.af.uR), a9.a8[0] = ae.um.un(ue), a9.cn[1] = 6, v.cw.dK(player), ae.af.df(player))
				}(player, ue, aB5, q, cm)
			}
	}
}

function aMP() {
	this.ow = function(bf, os) {
		ln.gw(11), ln.pq(1, 0), ln.pq(6, 4), ln.pq(1, os ? 1 : 0), ln.pq(3, 0 === f.eR ? bk.c8 ? 6 : 0 : f.gC ? 1 : f.gB ? 7 : f.gI < 7 ? 2 : 8 === f.gI ? 4 : 9 === f.gI ? 5 : 3), bg.af.send(bf, ln.li)
	}, this.aEv = function() {
		ln.gw(58), ln.pq(1, 0), ln.pq(6, 5), ln.pq(8, bg.af.bh), ln.pq(10, oI.cH), ln.pq(9, oI.aEm), ln.pq(10, gc.aMQ), ln.pq(14, gc.aMR), bg.af.send(bg.af.cG, ln.li)
	}, this.u6 = function(a2) {
		ln.gw(27), ln.pq(1, 1), ln.pq(4, 0), ln.pq(22, a2), bg.af.send(bg.af.cG, ln.li)
	}, this.u7 = function(d6, d7) {
		ln.gw(25), ln.pq(1, 1), ln.pq(4, 1), ln.pq(10, d6), ln.pq(10, d7), bg.af.send(bg.af.cG, ln.li)
	}, this.u8 = function(d6, dP) {
		ln.gw(24), ln.pq(1, 1), ln.pq(4, 2), ln.pq(10, d6), ln.pq(9, dP), bg.af.send(bg.af.cG, ln.li)
	}, this.u9 = function(d6, dY) {
		ln.gw(42), ln.pq(1, 1), ln.pq(4, 3), ln.pq(10, d6), ln.pq(27, dY), bg.af.send(bg.af.cG, ln.li)
	}, this.uB = function(d6, dh) {
		ln.gw(31), ln.pq(1, 1), ln.pq(4, 4), ln.pq(10, d6), ln.pq(16, dh), bg.af.send(bg.af.cG, ln.li)
	}, this.uC = function(d7) {
		ln.gw(15), ln.pq(1, 1), ln.pq(4, 5), ln.pq(10, d7), bg.af.send(bg.af.cG, ln.li)
	}, this.uE = function(t) {
		ln.gw(15), ln.pq(1, 1), ln.pq(4, 6), ln.pq(10, t), bg.af.send(bg.af.cG, ln.li)
	}, this.uF = function(dx) {
		ln.gw(6), ln.pq(1, 1), ln.pq(4, 7), ln.pq(1, dx), bg.af.send(bg.af.cG, ln.li)
	}, this.uG = function() {
		ln.gw(5), ln.pq(1, 1), ln.pq(4, 8), bg.af.send(bg.af.cG, ln.li)
	}, this.uH = function(d6, a2, d7) {
		ln.gw(47), ln.pq(1, 1), ln.pq(4, 10), ln.pq(10, d6), ln.pq(10, d7), ln.pq(22, a2), bg.af.send(bg.af.cG, ln.li)
	}, this.aMS = function(aMT, aMU) {
		ln.gw(24), ln.pq(1, 1), ln.pq(4, 15), ln.pq(9, aMU), ln.pq(10, aMT), bg.af.send(bg.af.cG, ln.li)
	}, this.aMV = function(kd) {
		ln.gw(14), ln.pq(1, 1), ln.pq(4, 14), ln.pq(9, kd), bg.af.send(bg.af.cG, ln.li)
	}, this.aMW = function(aMX, target) {
		var q, n = aMX.length;
		for (ln.gw(14 + 9 * n), ln.pq(1, 1), ln.pq(4, 13), ln.pq(9, target), q = 0; q < n; q++) ln.pq(9, aMX[q]);
		bg.af.send(bg.af.cG, ln.li)
	}
}

function aMY() {
	this.a3z = function(player, dP, aW) {
		v.cw.dR(player, aW, dP) && (dV.dW(player, dP), !v.cw.is(dP)) && dH.a3u.a3U[dP] && dH.a3u.a3U[dP]--
	}, this.aMZ = function(player, dP, aW) {
		v.cw.aKH(aW, dP) ? dT.d4(dP, a9.dU[0]) && (gY.aCf(player, dP, a9.dU[0], 1), v.cw.aCg(dP, a9.dU[0]), dL.aCN(player, dP), du.iH(dP, a9.dU[0])) : dL.aDu(player, aW, 12)
	}
}

function a7h() {
	function aMa() {
		c4.a73(29) && (bk.af.nM && 1 === bk.af.kF[2] && c4.a73(29).n0(), bk.af.nM = 0, c4.a73(29).mv(), c4.a73(29).mu(), bk.nN.a0y())
	}
	this.bm = new Array(4), this.kF = [0, 0, 1, 0], this.nM = 0, this.c9 = [0, 0], this.e = function() {
		for (var q = 0; q < this.bm.length; q++) this.bm[q] = new a8K;
		this.kF[0] = fa.fE.data[158].value, __fx.lobbyReminders.setRooms(this.bm), __fx.lobbyReminders.setPopupHandler(function(text) {
			bk.message.cc({
				id: 7,
				cX: text
			})
		})
	}, this.c6 = function() {
		aMa(), bk.rO.e(), __fx.lobbyReminders.check()
	}, this.cL = function() {
		bk.rO.cL();
		for (var q = 0; q < bk.af.bm.length; q++) {
			var bl = bk.af.bm[q];
			0 === bl.bn ? bl.a8L = 0 : (bl.bw = Math.max(bl.bw - bl.a8L % 2, 0), bl.a8L++)
		}
		aMa(), __fx.lobbyReminders.check()
	}, this.cV = function(cN) {
		this.kF[0] !== cN || this.kF[2] || c4.a73(29).nL()
	}
}

function a6M() {
	var ar, canvas, sx, aMd, aMe, aMf, aMg, sv, aMh, aMi, aMj, aMk, aCF = !1,
		k = (this.xX = !1, this.ap = 0, new Array(2)),
		aMl = 0;

	function kE() {
		var ap = dy.ap,
			aL = (sv = !1, a38(sx, ap, ar), Math.floor(ap / 2));
		1 === aMd ? (sx.fillStyle = b7.yL, sx.fillRect(aL, 0, aL, ar)) : -1 === aMd && (sx.fillStyle = b7.w1, sx.fillRect(0, 0, aL, ar)), a39(sx, ap, ar, 2);
		var aL = (aL = Math.floor(.25 * ar)) < 2 ? 2 : aL,
			uu = (sx.fillStyle = b7.aMo, Math.floor((ar - 4) * aMe[1] / aMf[1]));
		0 < uu && sx.fillRect(2, ar - 2 - uu, aL, uu), 0 < (uu = Math.floor((ar - 4) * aMe[0] / aMf[0])) && sx.fillRect(ap - 2 - aL, ar - 2 - uu, aL, uu);
		aL = (aL = Math.floor(ar / 8)) < 2 ? 2 : aL, fw(sx, Math.floor(.4 * ar), 0, ar, aL, .5, !1), fw(sx, Math.floor(ap - 1.4 * ar), 0, ar, aL, .5, !0), uu = 1.1 * ar / k[0].width;
		sx.imageSmoothingEnabled = !0, sx.setTransform(uu, 0, 0, uu, (ap - uu * k[0].width) / 2, -.05 * ar), sx.drawImage(k[+aCF], 0, 0), sx.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aMs() {
		aMk = -1, aCF = a5V.aMt(), eo.a48(257), eo.aCE(aCF), dy.xX = !0, sv = !0, aMh = 360;
		for (var kk, bT = 0, q = ez.f0 - 1; 0 <= q; q--) v.cw.is(ez.f2[q]) || (bT += ci.iF[ez.f2[q]]);
		aCF ? aMf[0] = Math.max(ds.kh(3 * bT, 4), 1) : f.j ? (kk = 9 === f.gI ? 8 === l.m[f5.f6()] ? 80 : (kk = ds.kh(100 * f5.yY(), f.gD), ds.kh(ds.dt(1550 - 11 * kk, 400, 1e3), 10)) : (kk = ds.kh(100 * f5.yY(), f.gD), ds.kh(ds.dt(1600 - 12 * kk,
			400, 1e3), 10)), kk = ds.kh(kk * bT, 100), aMf[0] = Math.max(kk, 1)) : 8 === f.gI ? aMf[0] = Math.max(ds.kh(3 * bT, 4), 1) : aMf[0] = Math.max(ds.kh(3 * bT, 5), 1), aMf[1] = Math.max(bT - aMf[0], 1)
	}

	function aM3() {
		aMj = bR.el(), sv = !0, aMh = aMd = 0, aMg = [], dy.xX = !1, eo.jX(247), aMe[0] = aMe[1] = 0, eo.a48(673)
	}

	function fT() {
		return h5.aBm(eo.aBj()) ? __fx.settings.keybindButtons ? h5.aE - 2 * (ar + fx.gap) : h5.aE - ar - fx.gap : h6.aBm(eo.aBl()) ? h6.fT() - ar - fx.gap : ao.ar - ar - a5b.z5() * fx.gap
	}
	this.go = function() {
		for (var q = 0; q < 2; q++) k[q] = v.canvas.a0M(iQ.get(3), 8 - q, b7.aMm), k[q] = v.canvas.aMn(k[q])
	}, this.e = function() {
		aMj = -1e4, aMi = aMl = 0, aMk = -1, this.xX = !1, sv = aCF = !1, aMe = [aMd = aMh = 0, 0], aMf = [1, 1], aMg = [], this.resize()
	}, this.resize = function() {
		ar = h5.ar, this.ap = 4 * ar, (canvas = document.createElement("canvas")).width = this.ap, canvas.height = ar, sx = canvas.getContext("2d", {
			alpha: !0
		}), kE()
	}, this.hM = function() {
		sv && kE()
	}, this.fY = function(aD, aE) {
		return !!this.xX && !(aD < ao.ap - this.ap - fx.gap || aE < fT() || (f.gC || this.dz(f.al) && (e2.hY && e2.xn(), gi.gl.dw(aD > ao.ap - fx.gap - this.ap / 2 ? 1 : 0)), 0))
	}, this.bQ = function() {
		0 < aMi ? 0 === --aMi && aM3() : this.xX ? 180 == --aMh && 3 * aMe[0] < aMf[0] ? aM3() : aMe[0] >= aMf[0] ? aCF ? gX.wc.nP() : gX.wc.nS() : aMe[1] >= aMf[1] ? aMi = 4 : aMh <= 0 && aM3() : ! function() {
			var aMv = bR.el();
			if (aMv % 40 == 14) {
				if (aMl) return !(aMv < aMl) && !(aMv < aMj + 535) && (aMl = aMv + 1071, v.cw.aKA()) ? (aMs(), 1) : 0;
				(1 === ez.f0 || (f.j ? f5.yY() : ci.iF[f7[0]]) >= ds.kh(96 * f.gD, 100)) && (aMl = aMv + 535)
			}
			return
		}() && 0 <= aMk && (eo.ev(250, L(379, [ci.ew[aMk]]), 673, aMk, b7.b9, b7.ex, -1, !0), aMs())
	}, this.nT = function() {
		this.xX && aMe[0] < aMf[0] && aM3()
	}, this.e0 = function(player, aMw) {
		var aMx = L(aMw ? 380 : 381, [ci.ew[player]]),
			aMx = (eo.ev(450, aMx, 257, player, aMw ? b7.tD : b7.aMy, b7.ex, -1, !0), aMg.push(player), sv = !0, f.gB ? Math.max(aMf[0], aMf[1]) : ci.iF[player]),
			aMx = Math.max(aMx, 1);
		aMw ? aMe[0] += aMx : aMe[1] += aMx, player === f.al && (aMd = aMw ? 1 : -1)
	}, this.aR = function() {
		var aE;
		this.xX && (aE = fT(), b5.drawImage(canvas, ao.ap - this.ap - fx.gap, aE))
	}, this.e6 = function(player) {
		if (0 !== aMh) return !1;
		if (!v.cw.cx(1)) return !1;
		if (!v.cw.cy(player)) return !1;
		if (10 <= f4[player] && !v.cw.aKL(player, 9)) return !1;
		if (!f.gB) {
			player = bR.el();
			if (player < aMj + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.dz = function(es) {
		if (!v.cw.cx(1)) return !1;
		if (!v.cw.cy(es)) return !1;
		if (!this.xX) return !1;
		for (var q = aMg.length - 1; 0 <= q; q--)
			if (aMg[q] === es) return !1;
		return !0
	}, this.dn = function(player) {
		aMk = player
	}
}

function a7l() {
	var aN0 = [],
		aN1 = [],
		aN2 = 0;

	function aN3(a8, n2, n6, aN5) {
		var n = a8.length;
		if (0 === n) return "";
		var lI = "@" + a8[0];
		if (1 === n) return lI + n2 + aN5;
		for (var q = 1; q < n - 1; q++) lI += ", @" + a8[q];
		return lI + " and @" + a8[n - 1] + n6 + aN5
	}
	this.e = function() {
		var lI = aN3(aN1, " is", " are", " in the lobby.");
		lI.length && bk.message.cc({
			id: 7,
			cX: lI
		}), aN0 = [], aN1 = [], aN2 = 0
	}, this.rP = function(aN4) {
		return bk.rM !== aN4 && (aN4 = lz.m0.bC(aN4, 5), !!fa.pc.rQ(aN4)) && (aN1.push(aN4), !0)
	}, this.join = function(player) {
		bk.rM !== player.cW && (player = lz.m0.bC(player.cW, 5), fa.pc.rQ(player)) && aN0.push(player)
	}, this.cL = function() {
		var n2, n6;
		++aN2 < 3 || (aN2 = 0, n2 = aN3(aN1, "", "", " entered the lobby!"), (n2 = (n6 = aN3(aN0, "", "", " joined a game!")).length ? n2.length ? n2 + " " + n6 : n6 : n2).length && bk.message.cc({
			id: 7,
			cX: n2
		}), aN0 = [], aN1 = [])
	}
}

function aN6() {
	this.aKf = function(bf, li) {
		bo.e(li), 0 === bo.size ? bg.af.pL(bf, 3205) : ((0 === bo.bp(1) ? function(bf) {
			var aNA = bo.bp(6);
			0 === aNA ? function(bf) {
					if (0 === bf && 8 !== bi.bj()) {
						c4.af.aNO();
						for (var aNP = bo.bp(12), aNQ = bo.bp(6), a8 = new Array(aNP), q = 0; q < aNP; q++) a8[q] = bo.bp(aNQ);
						vw.vp(a8)
					}
				}(bf) : 2 === aNA ? bg.aNC.be(bf) : 3 === aNA || 4 === aNA ? oI.e() : 5 === aNA ? bg.aND.aNE() : 9 === aNA ? bg.aND.aNF(bf) : 10 === aNA ? bg.aNG.aNH() : 11 === aNA ? bg.aND.aNI(bf) : 12 === aNA ? bg.aNG.aNJ() : 13 ===
				aNA ? bg.aNK.a4u() : 14 === aNA ? bg.aNK.a4v() : 15 === aNA ? bg.aND.aNL() : 16 === aNA ? bg.aNC.c7(bf) : 17 === aNA ? bg.aNC.cM(bf) : 19 === aNA ? bg.aNC.cb(bf) : 20 === aNA ? bg.aND.aNM(bf) : 21 === aNA && bg.aND
				.aNN(bf)
		} : function(bf) {
			if (8 !== bi.bj() && !oI.aEy()) return;
			if (bf !== bg.af.cG) bg.af.pL(bf, 3244);
			else if (0 === bo.bp(1)) bR.na.aNS(bo.li);
			else {
				var q, bf = bo.bp(2);
				if (0 === bf) {
					var dr, ov = bo.bp(9);
					0 !== ci.hL[ov] && 0 !== ci.hL[f.al] && (dr = bo.bp(10), eo.uD(ov, f.al, dr), du.dv(ov, 1, dr))
				} else if (1 === bf) ! function() {
					var ov = bo.bp(9);
					0 !== ci.hL[ov] && 0 !== ci.hL[f.al] && hE.aNY(0, [ov], !0) && eo.aCK(ov, 1)
				}();
				else if (2 === bf) ! function() {
					var ov = bo.bp(9),
						target = bo.bp(9);
					0 !== ci.hL[ov] && 0 !== ci.hL[target] && 0 !== ci.hL[f.al] && hE.aNY(1, [ov], !0) && (du.dv(ov, 3, 96), du.dv(target, 4, 96), eo.aCM(ov, target))
				}();
				else if (gc.a2r && !gc.a2s) {
					var n = 540;
					for (ln.gw(17287), ln.pq(1, 0), ln.pq(6, 10), n = Math.min(gi.gj.gk.length, 540), q = 0; q < n; q++) ln.aG3(32, gi.gj.gk[q]);
					bg.af.send(bg.af.cG, ln.li)
				}
			}
		})(bf), bR.aN9())
	}
}

function pd() {
	var aNZ = [];

	function aNb(cW) {
		aNZ.unshift(cW), fa.l9.lA(161, aNZ.join(";"))
	}

	function aNa(cW) {
		for (var aNc = aNZ, n = aNc.length, q = 0; q < n; q++)
			if (aNc[q] === cW) return aNc.splice(q, 1), fa.l9.lA(161, aNc.join(";")), 1
	}
	this.e = function() {
		var lI = fa.fE.data[161].value;
		lI.length && (aNZ = lI.split(";"))
	}, this.get = function() {
		return aNZ
	}, this.aHv = function() {
		return {
			oh: aNZ,
			value: 0
		}
	}, this.rQ = function(cW) {
		return v.aN.has(aNZ, cW)
	}, this.aI9 = function(cW) {
		return aNa(cW) ? 0 : (aNb(cW), 1)
	}, this.kE = function(cW) {
		aNa(cW) && aNb(cW)
	}, this.aHu = function(t) {
		t < aNZ.length && (aNZ.splice(t, 1), fa.l9.lA(161, aNZ.join(";")))
	}
}

function wP() {
	var aNd = null,
		aNe = 2e4,
		aNf = 0;
	this.bQ = function() {
		bR.eM < aNe || (aNe = bR.eM + 1e4, 0 !== bL.id) || aNd || hU.wR() || (bg.af.lC(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || bg.mH.aNg(5) : aNe = bR.eM + 1e3)
	}, this.d4 = function(jA) {
		aNd = jA
	}, this.show = function() {
		return !(!aNd || bR.eM < aNf) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aNf = bR.eM + 6e4, (new aNh).show(aNd.r0, aNd.colors, aNd.id), !(aNd = null)))
	}
}

function aKo() {
	this.a5L = function() {
		for (var n = ez.f0, f8 = ez.f2, a5F = [], q = 0; q < n; q++) {
			var es = f8[q];
			v.cw.aKB(es) && a5F.push(es)
		}
		return a5F
	}, this.a5M = function() {
		if (0 === l.m[f.gQ]) return this.a5N();
		f5.a3x(f.gQ);
		for (var a5F = [], n = a9.a0c[0], a0i = a9.a0i, q = 0; q < n; q++) {
			var es = a0i[q];
			v.cw.aKB(es) && a5F.push(es)
		}
		return a5F
	}, this.a5N = function() {
		var es = f7[0];
		return v.cw.aKB(es) ? [es] : []
	}, this.a5Q = function(a5F) {
		for (var n = a5F.length, bT = 0, iF = ci.iF, q = 0; q < n; q++) bT += iF[a5F[q]];
		return bT
	}
}

function a6t() {
	var aNi = new Array(1),
		aNj = new Array(1),
		aNk = 20,
		aNe = 0,
		aNl = !1;

	function aNn() {
		aNk++, a5d.play()
	}
	this.e = function() {
		if (!window.document.documentMode) {
			for (var q = 0; 0 <= q; q--) ! function(q, src) {
				aNj[q] = 0, aNi[q] = document.createElement("audio"), aNi[q].src = src, aNi[q].setAttribute("preload", "auto"), aNi[q].setAttribute("controls", "none"), aNi[q].style.display = "none", aNi[q].onpause = function() {
					aNj[q] = 1
				}, aNi[q].oncanplaythrough = function() {
					aNj[q] = 0 === aNj[q] ? 1 : aNj[q]
				}, document.body.appendChild(aNi[q])
			}(q,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
			aNl = !0
		}
	}, this.lj = function() {
		if (aNl) {
			aNl = !1;
			for (var q = 0; 0 <= q; q--) aNi[q].onpause = null, aNi[q].oncanplaythrough = null, c4.removeChild(document.body, aNi[q]), aNi[q] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		a5d.play()
	}), this.play = function() {
		if (aNl) {
			var bT = performance.now();
			if (aNe + 66 < bT)
				for (var q = 0; 0 <= q; q--)
					if (1 === aNj[q]) return aNe = bT, aNj[q] = 2, void aNi[q].play();
			0 < aNk && (aNk--, setTimeout(aNn, 66))
		}
	}
}

function aNo() {
	this.bQ = function(player) {
		return ae.da.aLQ(player, function(player) {
			var n = dH.fC.fD;
			if (0 === n) return -1;
			for (var aL = Math.min(n, dH.performance.z3 ? n : 10), fE = dH.fC.fE, jh = ds.kh(ge.random() * n, ge.value(100)), eL = jh + aL, fg = ge.u3(ci.iO[player], ci.iS[player]), fh = ge.u3(ci.iP[player], ci.iT[player]), aNq = -1, aH =
					cq.aNr(0, 0, au.av, au.fp), q = jh; q < eL; q++) {
				var xx = q % n,
					aNs = cq.a4a(fg, fh, fE[xx]);
				aNs < aH && (aH = aNs, aNq = xx)
			}
			return -1 !== aNq ? function(a2, fg, fh) {
				var aDM = cq.fF(a2),
					aDN = cq.fG(a2),
					aF = fg - aDM,
					aG = fh - aDN;
				Math.abs(aF) >= Math.abs(aG) ? (aG = 0, aF = Math.sign(aF)) : (aF = 0, aG = Math.sign(aG));
				aF === aG && (aF = 1);
				for (;;) {
					if (aDM += aF, aDN += aG, !cq.a4c(aDM, aDN)) break;
					if (a2 = cq.a4d(aDM, aDN), a6.a1n(cq.cr(a2))) return a2
				}
				return -1
			}(fE[aNq], fg, fh) : -1
		}(player))
	}
}

function a5m() {
	this.m0 = new aNu, this.lw = new aNv, this.c2 = new aCZ, this.e = function() {
		this.m0.e()
	}
}

function aNw() {
	this.aNx = function(qi, qj, qk) {
		ln.gw(75), ln.pq(1, 0), ln.pq(6, 21), ln.pq(6, qi), ln.pq(1, +(qj < 0)), ln.pq(1, +(qk < 0)), ln.pq(30, Math.abs(qj)), ln.pq(30, Math.abs(qk)), bg.af.send(0, ln.li)
	}, this.aNy = function(qi, aNz, aO0) {
		ln.gw(18 + 16 * aNz.length + 30), ln.pq(1, 0), ln.pq(6, 22), ln.pq(6, qi), bg.mH.aO1(aNz), ln.pq(30, aO0), bg.af.send(0, ln.li)
	}, this.aO2 = function(qi, aNz, aO0) {
		ln.gw(73), ln.pq(1, 0), ln.pq(6, 28), ln.pq(6, qi), c1.m0.wX(aNz, 5), ln.pq(30, aO0), bg.af.send(0, ln.li)
	}, this.aO3 = function(aO4, a7W) {
		for (var n = a7W.length, pS = 0, q = 0; q < n; q++) pS += a7W[q].length;
		for (ln.gw(21 + 3 * n + 16 * pS), ln.pq(1, 0), ln.pq(6, 23), ln.pq(3, aO4), ln.pq(4, n), ln.pq(7, pS), q = 0; q < n; q++) ln.pq(3, a7W[q].length), lz.lw.aFz(a7W[q]);
		bg.af.send(0, ln.li)
	}, this.aO5 = function(aO4, qj, qk) {
		ln.gw(52), ln.pq(1, 0), ln.pq(6, 24), ln.pq(3, aO4), ln.pq(1, +(qj < 0)), ln.pq(1, +(qk < 0)), ln.pq(20, Math.abs(qj)), ln.pq(20, Math.abs(qk)), bg.af.send(0, ln.li)
	}
}

function gn() {
	(a37 = void 0 === a37 ? document.createElement("canvas") : a37).width = au.av, a37.height = au.fp, h2 = a37.getContext("2d", {
		alpha: !0
	}), h3 = vD = null, h3 = h2.getImageData(0, 0, au.av, au.fp), vD = h3.data, v.aN.aFf(vD)
}

function a7j() {
	var aO6 = 0,
		aO7 = "",
		aO8 = 0,
		aO9 = 0,
		aOA = 0;

	function mb(mh) {
		bg.mo.mp(3, mh)
	}

	function aOK(jB) {
		aO6 = 1, bk.message.cc({
			id: 6,
			value: jB
		})
	}

	function aOE(cX) {
		var aOP = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return cX.match(aOP)
	}
	this.mj = function(cX) {
		var aOB, a8, aOG;
		if (aO6) return aO6 = 0, "yes" === (aOB = cX.toLowerCase()) || "y" === aOB ? void mb(aO7) : void bk.message.cc({
			id: 5,
			ca: 7
		});
		!(cX.indexOf("@") < 0) && (aOB = aOE(cX)) ? (aO7 = cX, a8 = function(aOD) {
			for (var n = aOD.length, aOM = [0, 0, 0, 0], q = 0; q < n; q++)
				for (var ap = aOD[q], bz = 0; bz < 4; bz++) ap === "@room" + (bz + 1) && (aOM[bz] = 1);
			if ((aO9 = v.aN.t1(aOM)) % 4 == 0) return v.aN.aON(bk.bx.n8);
			for (bz = 0; bz < 4; bz++) aOM[bz] = aOM[bz] ? bk.bx.n8[bz] : [];
			return v.aN.aON(aOM)
		}(aOB), function(aOD, aOG, cX) {
			if (!aO8) return;
			for (var n = aOG.length, q = 0; q < n; q++) 2 === aOG[q].id && (cX = cX.replace(aOD[aOG[q].t], "@" + aOG[q].kk));
			return aO6 = 1, mb((aO7 = cX).slice(0, 126) + "|"), 1
		}(aOB, aOG = function(aOD) {
			for (var aOG = [], n = (aOA = aO8 = 0, aOD.length), q = 0; q < n; q++) {
				var ap = aOD[q],
					aL = ap.length;
				v.bB.startsWith(ap, "@[") ? aL <= 9 && v.bB.mr(ap, "]") && aOG.push({
					id: 0,
					kk: ap.substring(2, aL - 1).toUpperCase()
				}) : 6 === aL ? v.bB.startsWith(ap, "@room") || (aOA++, aOG.push({
					id: 1,
					kk: c1.m0.vV(ap.substring(1), 5)
				})) : 1 < aL && aL < 5 && 0 <= (aL = sR.data.sh(ap.substring(1))) && (aOG.push({
					id: 2,
					kk: aL,
					t: q
				}), aO8 = 1)
			}
			return aOG
		}(aOB), cX) || (0 === aOG.length ? aO9 || function(aOD) {
			for (var n = aOD.length, q = 0; q < n; q++) {
				var ap = aOD[q];
				if ("@all" === ap || "@everyone" === ap) return 1
			}
			return
		}(aOB) ? aOK(a8.length) : mb(cX) : aOB.length === aOA ? mb(cX) : (function(a8, aOG) {
			var aL = aOG.length;
			if (0 === aL) return;
			var n = a8.length;
			loop: for (var q = n - 1; 0 <= q; q--) {
				for (var bz = 0; bz < aL; bz++)
					if (0 === aOG[bz].id) {
						if (aOG[bz].kk === v.bB.rV(a8[q].username)) continue loop
					} else if (1 === aOG[bz].id && aOG[bz].kk === a8[q].cW) continue loop;
				a8[q] = a8[--n], a8.pop()
			}
		}(a8, aOG), aOK(a8.length)))) : mb(cX)
	}, this.cZ = function(cX) {
		var aOD = aOE(cX);
		if (aOD)
			for (var a2p = new RegExp("^[0-9]+$"), n = aOD.length, q = 0; q < n; q++) {
				var ap = aOD[q].substring(1),
					aL = ap.length;
				1 <= aL && aL <= 3 && a2p.test(ap) && (aL = parseInt(ap, 10), !isNaN(aL)) && 0 <= aL && aL < sR.data.a8.length && (cX = cX.replace("@" + ap, "@" + sR.data.a8[aL]))
			}
		return cX
	}
}

function a18() {
	var a8M, a8N, r6 = document.createElement("div"),
		aOQ = document.createElement("div"),
		a0s = 0,
		aOR = 0;
	this.show = function(aD, aE, lI, a17, aOS, jA) {
			if (a0s) {
				if (!a17) return;
				this.eP()
			}
			aD === aE && -1 === aD ? (aD = a8M, aE = a8N) : (a8M = aD, a8N = aE);
			var aOT = Math.floor(v.w.kP(.018)),
				aOS = (aD = Math.max(aOT + 2, aD), aOS || (aOR = a17), a0s = 1, ao.ap / ao.ed),
				a17 = (r6.style.whiteSpace = "pre", r6.textContent = lI, v.w.kV(r6, 5), r6.style.font = v.w.bA(0, v.w.kP(.015)), r6.style.padding = "0.3em 0.6em", r6.style.left = aD + "px", r6.style.top = "0px", document.body.appendChild(r6), aD + r6
					.offsetWidth - aOS),
				lI = (0 < a17 && (aD -= a17, aD = Math.max(aOT + 1, aD), r6.style.left = aD + "px", aD < aOT + 2) && (r6.style.whiteSpace = "pre-wrap"), r6.offsetHeight);
			r6.style.top = aE - lI + aOR * fx.a01 + "px", aD -= aOT, aOQ.style.backgroundColor = v.color.aOW(jA >> 12 << 2, (jA >> 6 & 63) << 2, (63 & jA) << 2), aOQ.style.left = aD + "px", aOQ.style.top = r6.style.top, aOQ.style.width = aOT + "px",
				aOQ.style.height = lI + "px", v.w.kV(aOQ, 4), v.w.kV(aOQ, 8), v.w.kV(aOQ, 2), document.body.appendChild(aOQ)
		}, this.eP = function(a19) {
			if (a0s) {
				if (a19 && aOR) return 0;
				a0s = 0, c4.removeChild(document.body, r6), c4.removeChild(document.body, aOQ)
			}
			return 1
		}, r6.style.position = "absolute", r6.style.backgroundColor = b7.qX, r6.style.color = b7.b9, r6.style.pointerEvents = "none", r6.style.zIndex = "5", r6.style.maxWidth = "100%", aOQ.style.position = "absolute", aOQ.style.color = b7.b9, aOQ
		.style.pointerEvents = "none", aOQ.style.zIndex = "5"
}

function aIu() {
	var km, kn, kt, aOX = -1;
	this.show = function() {
		km.show(), this.resize(), aOX = fa.fE.data[125].value
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), kn.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(L(382), [new k7("⬅️ " + L(6), function() {
		aOX !== fa.fE.data[125].value ? c4.af.aOY() : c4.aJ4(13)
	})]), kn = new kq(km.kr, ((kt = []).push(function() {
		var kv = new kw,
			qG = (kv.kz(L(383)), kv.lH(L(384)), new k7(L(385), function() {
				fa.l9.lA(130, 0), c4.af.aOY()
			}, 0, 0, 1)),
			ju = new jv(fa.fE.data[126], 0, function() {
				qG.button.click()
			});
		return kv.l1(ju), ju.eL.placeholder = "a,b,c", ju.eL.style.marginTop = "0.5em", kv.l1(new lB([qG.button])), kv
	}()), kt.push(function() {
		var kv = new kw,
			qG = new k7(L(385), function() {
				fa.l9.lA(130, 1), c4.af.aOY()
			}, 0, 0, 1),
			aOd = new jv(fa.fE.data[129], 1, function() {
				aOd.eL.focus()
			}),
			aOe = new jv(fa.fE.data[128], 1, function() {
				qG.button.click()
			});
		return kv.kz(L(386)), kv.l1(aOe), aOe.eL.style.marginBottom = "0.5em", kv.kz(L(387)), kv.l1(aOd), kv.l1(new lB([qG.button])), kv
	}()), kt.push(function() {
		var kv = new kw;
		return kv.kz(L(388)), fa.fE.data[125].oh = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], kv.oe(new og(fa.fE.data[125])), kv
	}()), kt.push(function() {
		var kv = new kw;
		return kv.kz(L(389)), kv.l1(new q9(fa.fE.data[127], L(390))), kv
	}()), kt))
}

function a6U() {
	this.gl = new u4, this.cw = new aOf, this.u5 = new cu, this.gj = new aH5, this.a3y = new aMY
}

function a5k() {
	var jA = v.color;
	this.bc = jA.aOW(0, 0, 0), this.fv = jA.t0(0, 0, 0, .7), this.k6 = jA.t0(0, 0, 0, .5), this.qX = jA.t0(0, 0, 0, .85), this.ex = jA.t0(0, 0, 0, .75), this.k5 = jA.t0(0, 0, 0, .6), this.a9P = jA.t0(0, 0, 0, .35), this.b9 = jA.aOW(255, 255, 255),
		this.aJi = jA.t0(255, 255, 255, .3), this.t7 = jA.t0(255, 255, 255, .6), this.vz = jA.t0(255, 255, 255, .4), this.wC = jA.t0(255, 255, 255, .25), this.aA0 = jA.t0(255, 255, 255, .85), this.aMo = jA.t0(255, 255, 255, .75), this.aOg = jA.t0(
			255, 255, 255, .15), this.aOh = jA.t0(255, 255, 255, .11), this.tB = jA.aOW(128, 128, 128), this.aCX = jA.t0(64, 64, 64, .75), this.sz = jA.t0(88, 88, 88, .83), this.aDf = jA.t0(60, 60, 60, .85), this.aLk = jA.t0(80, 60, 60, .85), this
		.aOi = jA.aOW(170, 170, 170), this.aOj = jA.aOW(200, 235, 245), this.aOk = jA.aOW(30, 255, 30), this.aOl = jA.aOW(0, 200, 0), this.tD = jA.aOW(128, 255, 128), this.aOm = jA.t0(10, 65, 10, .75), this.yL = jA.t0(0, 255, 0, .6), this.aOn = jA
		.t0(0, 255, 0, .5), this.a9Q = jA.t0(0, 200, 0, .5), this.aBi = jA.t0(0, 100, 0, .75), this.qd = jA.t0(0, 60, 0, .8), this.mz = jA.t0(0, 255, 0, .3), this.a0L = jA.t0(0, 180, 0, .6), this.aOo = jA.t0(0, 120, 0, .85), this.tE = jA.aOW(0, 120,
			0), this.aLi = jA.t0(0, 70, 0, .85), this.aOp = jA.aOW(190, 230, 190), this.aOq = jA.aOW(0, 255, 0), this.aOr = jA.aOW(255, 120, 120), this.aMy = jA.aOW(255, 160, 160), this.b8 = jA.aOW(255, 70, 70), this.tC = jA.aOW(230, 0, 0), this.w1 =
		jA.t0(220, 0, 0, .6), this.aOs = jA.t0(255, 100, 100, .8), this.aC0 = jA.t0(100, 0, 0, .85), this.qc = jA.t0(60, 0, 0, .85), this.aOt = jA.t0(200, 0, 0, .6), this.a56 = jA.t0(120, 0, 0, .85), this.aBv = jA.aOW(255, 70, 10), this.aOu = jA.aOW(
			230, 190, 190), this.aOv = jA.aOW(255, 0, 0), this.aOw = jA.aOW(255, 0, 255), this.qa = jA.t0(60, 0, 60, .85), this.qb = jA.t0(0, 60, 60, .85), this.aOx = jA.t0(10, 60, 60, .9), this.aOy = jA.t0(0, 96, 96, .75), this.aOz = jA.aOW(0, 255,
			255), this.aP0 = jA.aOW(160, 160, 255), this.aJf = jA.t0(0, 40, 90, .75), this.aP1 = jA.t0(0, 0, 255, .6), this.aP2 = jA.aOW(200, 200, 255), this.sy = jA.t0(50, 50, 255, .83), this.aJe = jA.t0(20, 90, 150, .75), this.aCY = jA.t0(10, 10,
			120, .75), this.yN = jA.aOW(255, 120, 100), this.aP3 = jA.t0(255, 255, 0, .5), this.aJh = jA.t0(255, 255, 150, .2), this.l8 = jA.aOW(255, 255, 0), this.aBz = jA.aOW(255, 255, 200), this.aP4 = jA.t0(200, 200, 0, .6), this.aP5 = jA.t0(140,
			120, 0, .75), this.aP6 = jA.t0(180, 160, 40, .75), this.aLj = jA.t0(70, 50, 20, .85), this.aP7 = jA.t0(30, 30, 0, .85), this.qf = jA.t0(60, 60, 0, .85), this.aP8 = jA.aOW(255, 255, 100), this.aP9 = jA.aOW(255, 255, 140), this.aPA = jA.t0(
			255, 140, 0, .75), this.qe = jA.t0(70, 40, 0, .85), this.aPB = jA.aOW(255, 150, 0), this.aEl = jA.t0(255, 200, 80, .85), this.aMm = jA.t0(0, 0, 0, 0), this.k9 = jA.t0(255, 255, 255, 0), this.mW = jA.t0(254, 254, 254, 0)
}

function a6u() {
	var sm = [];
	this.aCf = function(player, dP, iE, aPC) {
		player === f.al || dP === f.al || !aPC && v.cw.is(player) || v.cw.is(dP) || this.ev(ci.ew[player] + " supported " + ci.ew[dP] + " with " + v.bB.bC(iE) + " ressource" + (1 === iE ? "." : "s."))
	}, this.ev = function(lI, dr) {
		lI = {
			eM: h8.yQ(),
			lI: lI,
			dr: dr
		};
		sm.push(lI), 30 === c4.rR && c4.mt().ev(lI)
	}, this.clear = function() {
		sm = [];
		var kj = c4.a73(30);
		kj && kj.clear()
	}, this.aPD = function() {
		return sm
	}
}

function v5(bz, jO) {
	return 0 <= bz ? ds.kh(bz, jO) : -ds.kh(-bz, jO)
}

function aPE(kk) {
	return kk * kk
}

function vq(bz, jO) {
	return jO < bz ? bz : jO
}

function aPF(bz, jO) {
	return bz < jO ? bz : jO
}

function aJz(bz, kk, jO) {
	return kk < bz ? bz : jO < kk ? jO : kk
}

function aPG(kk, n) {
	for (var jA = ds.kh(kk + 1, 2), q = 0; q < n; q++) jA = ds.kh(jA + ds.kh(kk, jA), 2);
	return jA
}

function aCc(kk, n) {
	return kk < 1 ? 0 : aPG(kk, n)
}

function aPH(az, b1, t3, lX, b3, b4, w7, lY) {
	return !(az + t3 <= b3 || b1 + lX <= b4 || b3 + w7 <= az || b4 + lY <= b1)
}

function aPI(az, b1, t3, lX, b3, b4, w7, lY) {
	return az <= b3 && b1 <= b4 && b3 + w7 <= az + t3 && b4 + lY <= b1 + lX
}

function py(kk) {
	return Math.floor(!!kk * (1 + Math.log2(kk + .5)))
}

function aIz() {
	var oT, oU, oV, kt;

	function mY() {
		oX(), 2 !== f.data.aIncomeType && (f.data.aIncomeData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		2 === f.data.aIncomeType ? (v.aN.oZ(oV.oa(), f.data.aIncomeData, 255), v.aN.max(f.data.aIncomeData) || (f.data.aIncomeType = 0)) : 1 !== f.data.aIncomeType || f.data.aIncomeValue || (f.data.aIncomeType = 0)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(391), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw;
		kv.kz(L(24)), kv.oe(new og({
			oh: [L(25), L(26), L(27)],
			value: f.data.aIncomeType
		}, function(t) {
			oX(), 2 !== t || f.data.aIncomeData || (f.data.aIncomeData = new Uint8Array(f.g)), f.data.aIncomeType = t, c4.c5(22)
		})), kt.push(kv)
	}(kt = []), function(kt) {
		var kv;
		1 === f.data.aIncomeType && ((kv = new kw).kz("Value"), kv.l1(new jv({
			t: -1,
			value: f.data.aIncomeValue
		}, 1, 0, function(eL) {
			var value = ds.dt(Math.floor(eL.target.value), 0, 255);
			eL.target.value = f.data.aIncomeValue = value
		})), kt.push(kv))
	}(kt), function(kt) {
		var kv;
		2 === f.data.aIncomeType && ((kv = new kw).kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.aIncomeData, 4)), kv.l1(oV), kt.push(kv))
	}(kt), kt))
}

function aPJ() {
	this.aAT = function(canvas, aAL, aAK) {
		var ap = canvas.width,
			ar = canvas.height,
			jA = v.w.x(ap, ar),
			y = v.w.getContext(jA, !0),
			canvas = (y.drawImage(canvas, 0, 0), y.getImageData(0, 0, ap, ar));
		return aAL(canvas.data, ap, ar, aAK), y.putImageData(canvas, 0, 0), jA
	}, this.aAR = function(a0, ap, ar) {
		for (var aD = ap - 1; 0 <= aD; aD--)
			for (var aE = ar - 1; 0 <= aE; aE--) {
				var q = 4 * (aD + aE * ap);
				a0[3 + q] = a0[q], a0[q] = a0[1 + q] = a0[2 + q] = 255
			}
	}, this.aAN = function(a0, ap, ar) {
		for (var aD = ap - 1; 0 <= aD; aD--)
			for (var aE = ar - 1; 0 <= aE; aE--) {
				var q = 4 * (aD + aE * ap);
				a0[1 + q] > a0[2 + q] + 10 && (a0[3 + q] = a0[q], a0[1 + q] = a0[2 + q])
			}
	}, this.aAP = function(a0, ap, ar, aAK) {
		for (var gap = Math.floor(Math.min(ap, ar) * aAK), aD = 0; aD < ap; aD++)
			for (var q, aE = 0; aE < ar; aE++)(aD < gap || aE < gap || ap - gap <= aD || ar - gap <= aE) && (a0[3 + (q = 4 * (aD + aE * ap))] = 255 - 255 * (a0[1 + q] - a0[q]) / (255 - a0[q]))
	}, this.aLu = function(a0, ap, ar, aAK) {
		for (var aD = ap - 1; 0 <= aD; aD--)
			for (var aE = ar - 1; 0 <= aE; aE--) {
				var q = 4 * (aD + aE * ap);
				a0[q] = aAK[0], a0[1 + q] = aAK[1], a0[2 + q] = aAK[2]
			}
	}, this.aAO = function(a0, ap, ar, aAK) {
		for (var gap = Math.floor(ap * aAK), aD = 0; aD < ap; aD++)
			for (var q, aE = 0; aE < ar; aE++)(aD < gap || aE < gap || ap - gap <= aD || ar - gap <= aE) && (a0[q = 4 * (aD + aE * ap)] = a0[1 + q] = a0[2 + q] = 0)
	}, this.aAQ = function(a0, ap, ar) {
		for (var aE, q, aD = ap - 1; 0 <= aD; aD--)
			for (aE = ar - 1; 0 <= aE; aE--) 200 < a0[1 + (q = 4 * (aD + aE * ap))] && a0[1 + q] - 20 > a0[q] && a0[1 + q] - 20 > a0[2 + q] ? a0[q] + a0[2 + q] < 40 ? a0[3 + q] = 0 : (a0[3 + q] = a0[q], a0[q] = 255, a0[1 + q] = 255, a0[2 + q] =
				255) : a0[q] < 50 && a0[1 + q] < 50 && a0[2 + q] < 50 && (a0[q] + a0[1 + q] + a0[2 + q] < 50 ? a0[3 + q] = 180 : a0[3 + q] = 180 + Math.floor(75 * (a0[q] + a0[1 + q] + a0[2 + q] - 50) / 100))
	}, this.aAS = function(a0, ap, ar) {
		for (var aE, q, aD = ap - 1; 0 <= aD; aD--)
			for (aE = ar - 1; 0 <= aE; aE--) a0[1 + (q = 4 * (aD + aE * ap))] > a0[q] + 20 && a0[1 + q] > a0[2 + q] + 20 && a0[q] + a0[2] < 40 && (a0[3 + q] = 255 - a0[1 + q], a0[q] = a0[1 + q] = a0[2 + q] = a0[q])
	}, this.aPK = function(a0, ap, ar, aAK) {
		for (var pW = ap >> 1, aD = 0; aD < ap; aD++)
			for (var aE = 0; aE < ar; aE++) Math.sqrt((aD - pW) * (aD - pW) + (aE - pW) * (aE - pW)) > aAK * pW && (a0[4 * (aD + aE * ap) + 3] = 0)
	}
}

function a6L() {
	var jA, ij = !1,
		aPL = !1,
		aPM = -1e4,
		aPN = -1,
		aPO = 0;

	function resize(aPT) {
		jA = 0, iQ.qq() && (aPR(aPT) || ij) && (ij = !1, fx.resize(), a5Y.a9e.resize(), a5U.e(), a5Z.e(), oH.resize(), vw.resize(), oG.resize(), c4.resize(), 1 <= f.eR ? (h4.resize(!1), h7.resize(), h8.resize(), eZ.resize(), h5.resize(), eo.resize(),
			e2.resize(), h6.resize(), dy.resize(), h9.resize(), ba.resize(), eO.resize(), h1.resize(), du.resize(), hA.resize(), f5.resize(), eZ.ff()) : (bi.aPU(), bi.aPV()), bR.bS = !0)
	}

	function aPQ(kk) {
		return kk && 128 < kk ? Math.floor(kk) : 128
	}

	function aPR(aPT) {
		var ap, ar, aPX, t3, lX;
		if (!(0 < ao.qz)) return t3 = aPQ(document.documentElement.clientWidth), lX = aPQ(window.visualViewport && 2 !== bL.id ? window.visualViewport.height : document.documentElement.clientHeight), ap = t3, ar = lX, aPX = 0 !== bL.id || ap < ar ?
			700 : 1200, aPX = Math.min(aPX / ((ap + ar) / 2), 1), aPX = 0 === fa.fE.data[1].value ? 2 * aPX / 3 : Math.min(aPX + (fa.fE.data[1].value - 1) * (1 - aPX) / 2, 1), ao.ed = (window.devicePixelRatio || 1) * aPX, __fx.hoveringTooltip
			.canvasPixelScale = ao.ed, aPT && !aPL ? (aPL = !0, c4.removeChild(document.body, xB)) : aPL && (aPL = !1, document.body.appendChild(xB)), ap = Math.floor(.5 + t3 * ao.ed), ar = Math.floor(.5 + lX * ao.ed), ap !== ao.ap || ar !== ao
			.ar ? (ao.ap = ap, ao.ar = ar, ao.min = aPF(ap, ar), ao.max = vq(ap, ar), ao.bO = ds.kh(ap + ar, 2), ao.aPP = ap / ar, xB.width = ap, xB.height = ar, xB.style.width = t3 + "px", xB.style.height = lX + "px", aPN = bR.eM + 1e3, 1) :
			void 0
	}
	this.ap = 0, this.ar = 0, this.min = 0, this.max = 0, this.bO = 0, this.aPP = 1, this.ed = 1, this.qz = 0, this.go = function() {
		this.ap = aPQ(document.documentElement.clientWidth) + 2, this.ar = aPQ(document.documentElement.clientHeight) + 2
	}, this.e = function() {
		jA = 1, xB = document.getElementById("canvasA"), 2 === bL.id && (xB.style.webkitUserSelect = "none"), (b5 = xB.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aPR(0)
	}, this.bQ = function() {
		50 <= ++jA && resize(0), -1 === aPN || bR.eM < aPN || (aPN = -1, 2e3 * ++aPO >= bR.eM + 8e3 ? console.log("error 3748") : bL.bM.setState(15))
	}, this.a71 = function(aCT) {
		ij = !0, resize(aCT)
	}, this.xp = function() {
		aPM + 1e3 > bR.eM || (aPM = bR.eM, resize(0))
	}
}

function aJ3() {
	var oT, oU, kt;

	function aPf() {
		for (var colors = new Array(11), q = 0; q < 11; q++) {
			var a8 = fa.fE.data[163 + q].value.split(",");
			colors[q] = new Uint8Array(3);
			for (var bz = 0; bz < 3; bz++) bz < a8.length && (colors[q][bz] = Number(a8[bz]))
		}
		return colors
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(392), [new k7("⬅️ " + L(6), function() {
		c4.kp()
	})]), oU = new kq(oT.kr, ((kt = []).push(function() {
		var kv = new kw;
		return kv.kz(L(393)), kv.kx(bg.af.ky("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", kv.kx("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), kv
	}()), kt.push(function() {
		var kv = new kw,
			r0 = (kv.kz(L(394)), fa.fE.data[174].value),
			lG = kv.lH(r0.length + " / 180"),
			aII = (lG.style.textAlign = "center", new oi(0, 1, function(eL) {
				var eL = eL.target.value,
					jB = eL.length;
				lG.textContent = jB + " / 180", jB <= 180 && fa.l9.lA(174, eL)
			}));
		return aII.eL.rows = 6, aII.eL.style.fontSize = "1em", aII.oj(r0), kv.l1(aII), kv
	}()), kt.push(function() {
		var kv = new kw;
		kv.kz(L(131));
		for (var q = 0; q < 11; q++) {
			var aY = kv.l1(new jv(fa.fE.data[163 + q]));
			q && (aY.eL.style.marginTop = "0.6em")
		}
		return kv.l1(new lB([new k7(L(105), function() {
			for (var data = fa.fE.data, q = 163; q < 174; q++) data[q] && fa.fE.a0U(q, data[q].aFM);
			c4.kp(), c4.oY()[31] = null, c4.c5(31)
		}).button])), kv
	}()), kt.push(function() {
		var kv = new kw;
		return kv.kz("Targeting"), kv.kx(L(106)), kv.l1(new jv(fa.fE.data[175], 0, 0)), kv
	}()), kt.push(function() {
		var kv = new kw;
		return kv.kz(L(39)), kv.l1(new lB([new k7(L(110), function() {
			(new aNh).show(fa.fE.data[174].value, aPf(), -1)
		}).button])), kv
	}()), kt.push(function() {
		var kv = new kw,
			aPg = (kv.kz(L(395)), kv.kx(L(396)), new jv(fa.fE.data[176], 1, 0)),
			aPh = (kv.l1(aPg), new k7(L(397), function(eL) {
				return l6.button.textContent === L(11) && bg.af.lC(0) && (v.w.lD(eL), l5(), bg.lE.aG0(fa.fE.data[176].value, aPf(), fa.fE.data[175].value, fa.fE.data[174].value)), !0
			}, 1)),
			l5 = function() {
				l6.button.textContent = L(10), aPh.k8(1), aPh.button.style.color = b7.b9
			},
			l6 = new k7(L(10), function(eL) {
				return eL.textContent === L(10) ? (eL.textContent = L(11), aPh.k8(0), aPh.button.style.color = b7.l8) : l5(), !0
			});
		return kv.l1(new lB([l6.button, aPh.button])), kv
	}()), kt))
}

function aPi() {
	function aPn(player, aW, aPk, uS) {
		var d7;
		if (a6.fB(aPk)) d7 = f.g;
		else {
			if ((d7 = a6.a25(aPk)) === player) return void dL.aDu(player, aW - v.cw.aCg(player, aW), 12);
			if (!a4S.a2P(player, d7)) return void gi.a3y.aMZ(player, d7, aW)
		}
		dC.dD(player, d7) || dC.dF(player) ? (ci.eC[player].push(uS << 2), dC.d4(player, aW, d7), eE.eF(player, !0)) : dL.aDu(player, aW, 12)
	}
	this.bQ = function() {
		for (var tg = ae.af.tg, ad = ae.af.ad, zF = ae.af.zF, q = ae.af.am - 1; 0 <= q; q--) 65535 === zF[q] && function(q, uS, aHP) {
			if (6 === aHP) {
				if (ae.uQ.aB9(q, uS)) return ae.af.uh[q]++, ae.af.zF[q] = 0, 0
			} else {
				var player = ae.af.ag[q] >> 3,
					q = ae.af.ah[q];
				dL.aPm(player), aHP < 4 ? aPn(player, q, uS + cq.aPl[aHP] << 2, uS) : 4 === aHP ? function(player, aW, uS) {
					var q, aV, aPq = cq.aPr,
						ax = cq.cr(uS);
					for (q = 0; q < 4; q++)
						if (aV = ax + aPq[q], a6.fB(aV)) return aPn(player, aW, aV, uS);
					for (q = 0; q < 4; q++)
						if (aV = ax + aPq[q], a6.a24(aV) && !a6.a2L(player, aV)) return aPn(player, aW, aV, uS);
					for (q = 0; q < 4; q++)
						if (aV = ax + aPq[q], a6.a24(aV)) return aPn(player, aW, aV, uS)
				}(player, q, uS) : 5 === aHP && function(player, aW, uS) {
					var q, aV, aPq = cq.aPr,
						ax = cq.cr(uS);
					for (q = 0; q < 4; q++)
						if (aV = ax + aPq[q], a6.a24(aV) && a6.a2L(player, aV)) return aPn(player, aW, aV, uS);
					for (q = 0; q < 4; q++)
						if (aV = ax + aPq[q], a6.a24(aV)) return aPn(player, aW, aV, uS);
					for (q = 0; q < 4; q++)
						if (aV = ax + aPq[q], a6.fB(aV)) return aPn(player, aW, aV, uS)
				}(player, q, uS)
			}
			return 1
		}(q, cq.uT(ad[q]), tg[q] % 64) && (ae.uQ.aB6(q), ae.aEH.z8(q))
	}, this.aDo = function(player, a2, aHP, dh, aW) {
		if (!(5 <= aHP)) {
			var ak = f.al;
			if (v.cw.cy(ak) && a4S.a2P(player, ak) && player !== ak && 0 !== ci.cj[ak].length && v.cw.aBy(player, 5)) {
				for (var aPk, a4X = !1, q = 0; q < 4; q++)
					if (aPk = a2 + cq.aPl[q] << 2, a6.cs(aPk) && !a6.fB(aPk) && a6.a25(aPk) === ak) {
						a4X = !0;
						break
					} a4X && (eo.er(719, 0), aHP = aW < 25e3 ? L(398) + " (" + v.bB.bC(aW) + ") ⛵" : L(399) + " (" + v.bB.bC(aW) + ") 🚢", eo.ev(180, aHP, 719, player, b7.aMy, b7.ex, -1, !0, void 0, {
					jO: 1,
					dh: dh
				}))
			}
		}
	}
}

function ko(title, aPs, aPt) {
	var qQ = document.createElement("div"),
		aPu = document.createElement("div"),
		qT = document.createElement("div"),
		aPv = document.createElement("div"),
		aPw = document.createElement("div");
	this.kr = qT, this.lL = aPs, this.show = function() {
			!1 !== aPt ? document.body.appendChild(qQ) : (document.body.appendChild(aPu), document.body.appendChild(aPv))
		}, this.eP = function() {
			!1 !== aPt ? c4.removeChild(document.body, qQ) : (c4.removeChild(document.body, aPu), c4.removeChild(document.body, aPv))
		}, this.aQ0 = function() {
			var kQ = v.w.kP(.1),
				kO = v.w.kP(.08 + .04 * (ao.aPP < 1), .3);
			return {
				kQ: kQ,
				kO: kO,
				aQ1: ao.ar / ao.ed - kQ - kO
			}
		}, this.resize = function(aQ2) {
			var n = aPs.length,
				aBY = this.aQ0(),
				kQ = aBY.kQ,
				kO = aBY.kO;
			for (aPu.style.height = v.w.kU(kQ), v.w.kV(aPu, 2), aPv.style.top = v.w.kU(ao.ar / ao.ed - kO), aPv.style.height = v.w.kU(kO), v.w.kV(aPv, 8), qT.style.top = v.w.kU(kQ), qT.style.height = qT.style.maxHeight = v.w.kU(aBY.aQ1), aPu.style
				.font = v.w.bA(0, v.w.kP(.02, .15)), aPv.style.font = v.w.bA(0, v.w.kP(.02, .7)), qT.style.font = v.w.bA(0, v.w.kP(.02, .35)), q = 1; q < n; q++) v.w.kV(aPs[q].button, 4);
			for (var aQ3 = 0, q = 0; q < n; q++) aQ3 += aPs[q].button.offsetWidth;
			if (aQ2 && aQ3 < aPv.offsetWidth)
				for (q = 0; q < n; q++) aPs[q].button.style.width = (100 * aPs[q].button.offsetWidth / aQ3).toFixed(2) + "%";
			else
				for (q = 0; q < n; q++) aPs[q].button.style.width = "auto";
			aPv.qr && (aPv.scrollLeft = aPv.qr), aQ2 || this.resize(!0)
		}, this.aR = function() {
			var aBY = this.aQ0(),
				jA = ao.ed;
			b5.fillStyle = b7.qX, b5.fillRect(0, jA * aBY.kQ, ao.ap, jA * aBY.aQ1)
		}, qQ.style.position = "absolute", qQ.style.top = "0", qQ.style.left = "0", qQ.style.width = "100%", qQ.style.height = "100%", aPu.style.position = "absolute", aPu.style.top = "0", aPu.style.left = "0", aPu.style.width = "100%", aPu.style
		.display = "flex", aPu.style.backgroundColor = b7.qX, aPv.style.position = "absolute", aPv.style.left = "0", aPv.style.width = "100%", v.w.qY(aPv), aPw.style.height = aPw.style.maxHeight = "100%", qT.style.position = "absolute", qT.style
		.width = "100%", qT.style.backgroundColor = b7.qX,
		function() {
			for (var q = 0; q < aPs.length; q++) aPs[q].button.style.height = "100%", aPs[q].button.style.padding = "0.0em 0.9em"
		}();
	for (var q = 0; q < aPs.length; q++) aPw.appendChild(aPs[q].button);
	aPu.appendChild(function() {
		var aPz = document.createElement("h1");
		return aPz.textContent = title, aPz.style.margin = "auto", aPz.style.fontSize = 18 <= title.length && ao.ar > ao.ap ? "1.8em" : "2.3em", aPz.style.fontFamily = "Arial Black, system-ui", aPz
	}()), aPv.appendChild(aPw), !1 !== aPt && (qQ.appendChild(qT), qQ.appendChild(aPu), qQ.appendChild(aPv))
}

function aQ4() {
	var aQ5 = null;
	this.j1 = 0, this.aQ6 = function() {
		var kk = fa.fE.data[5].value;
		aQ5 = "px " + kk, "system-ui" !== kk && (aQ5 += ", system-ui"), this.j1 = pR(32, 32, ["a", "b", "m"], 200, aQ5)
	}, this.x = function(ap, ar) {
		var jA = document.createElement("canvas");
		return jA.width = ap, jA.height = ar, jA
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(sx, ap, ar) {
		return sx.getImageData(0, 0, ap, ar)
	}, this.bA = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aQ5 : 1 === type ? "bold " + size + aQ5 : 2 === type ? "lighter " + size + aQ5 : 3 === type ? "italic " + size + aQ5 : 4 === type ? "oblique " + size + aQ5 : 5 === type ? "small-caps " +
			size + aQ5 : "small-caps bold " + size + aQ5
	}, this.textAlign = function(y, id) {
		y.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(y, id) {
		y.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.kV = function(eL, code, color) {
		color = this.kU(fx.a01) + " solid " + (color || b7.b9);
		5 === (code = code || 5) ? eL.style.border = color : 4 === code ? eL.style.borderLeft = color : 2 === code ? eL.style.borderBottom = color : 6 === code ? eL.style.borderRight = color : eL.style.borderTop = color
	}, this.qo = function(eL, aD, aE, ap, ar) {
		eL = eL.style;
		eL.left = this.qp(aD), eL.top = this.qp(aE), eL.width = this.qp(ap), eL.height = this.qp(ar)
	}, this.a03 = function(kk) {
		return 1 + kk * bL.bM.bN()
	}, this.kP = function(fi, xx) {
		return fi * this.a03(void 0 === xx ? .5 : xx) * ao.bO / ao.ed
	}, this.qn = function(fi, xx) {
		return fi * this.a03(void 0 === xx ? .5 : xx) * ao.bO
	}, this.aAv = function(fi, xx, aQ7) {
		return this.a03(xx) * Math.min(fi * ao.bO, aQ7 * ao.ap) / ao.ed
	}, this.kU = function(kk) {
		return kk.toFixed(1) + "px"
	}, this.qp = function(kk) {
		return this.aLq(kk).toFixed(1) + "px"
	}, this.aLq = function(kk) {
		return kk / ao.ed
	}, this.aQ9 = function(aQA) {
		for (var lI = "<ul>", n = aQA.length, q = 0; q < n; q++) lI += "<li>" + aQA[q][0] + ": <a href='" + aQA[q][1] + "' target='_blank'>" + aQA[q][0] + "</a></li>";
		return lI += "</ul>"
	}, this.aBO = function(aIi) {
		return "<a href='" + aIi + "' target='_blank'>" + aIi + "</a>"
	}, this.aHo = function(eL) {
		navigator.clipboard && navigator.clipboard.writeText(eL.value)
	}, this.lD = function(eL) {
		var bT = eL.textContent;
		v.bB.mr(bT, "✔") || (1 === bT.length ? eL.textContent = "✔" : eL.textContent = bT + " ✔", setTimeout(function() {
			eL.textContent = bT
		}, 500))
	}, this.measureText = function(lI) {
		return b5.measureText(lI).width
	}, this.qY = function(aJ6) {
		aJ6.style.overflowX = "auto", aJ6.style.overflowY = "hidden", aJ6.style.whiteSpace = "nowrap", aJ6.addEventListener("wheel", function(eL) {
			Math.abs(eL.deltaY) < Math.abs(eL.deltaX) || (this.scrollLeft += eL.deltaY, this.qr = this.scrollLeft, eL.preventDefault())
		}), aJ6.addEventListener("scroll", function() {
			this.qr = this.scrollLeft
		})
	}
}

function aQB() {
	function aQI(aD, n, aE, aQD, vZ, a4f, player) {
		if (!(aE < 1 || vZ < aE))
			for (var q = 0; q <= n; q++) {
				var a3 = cq.aFW(aD, aE);
				if (ae.co.cp(a3) && !v.aN.has(aQD, a6.uV(a3)) && a6.a97(a3, player)) return a3 >> 2;
				aD += a4f
			}
		return -1
	}

	function aQM(aE, n, aD, aQD, aQG, a4f, player) {
		if (!(aD < 1 || aQG < aD)) {
			n = Math.max(n, 0);
			for (var q = 0; q <= n; q++) {
				var a3 = cq.aFW(aD, aE);
				if (ae.co.cp(a3) && !v.aN.has(aQD, a6.uV(a3)) && a6.a97(a3, player)) return a3 >> 2;
				aE += a4f
			}
		}
		return -1
	}

	function aQQ(ww, wx, cl) {
		return -1 !== wx && (-1 === ww || cq.aQR(wx, cl) < cq.aQR(ww, cl)) ? wx : ww
	}
	this.aHM = function(player, cl) {
		if (ae.dZ.ce(player))
			for (var aQC = cq.up(), aQD = [];;) {
				var aLX = function(cl, aQC, aQD, player) {
					for (var aDM = cq.fF(cl), aDN = cq.fG(cl), aQG = au.av - 2, vZ = au.fp - 2, aQH = -1, jl = 0; jl < aQC; jl++) {
						var vY = Math.max(aDM - jl, 1),
							a1v = Math.max(aDN - jl, 1),
							a1w = Math.min(aDM + jl, aQG),
							a1m = Math.min(aDN + jl, vZ),
							ww = aQI(aDM, a1w - aDM, aDN - jl, aQD, vZ, 1, player),
							wx = aQI(aDM - 1, aDM - vY - 1, aDN - jl, aQD, vZ, -1, player),
							a1w = aQI(aDM, a1w - aDM, aDN + jl, aQD, vZ, 1, player),
							vY = aQI(aDM - 1, aDM - vY - 1, aDN + jl, aQD, vZ, -1, player),
							aQL = aQM(aDN, a1m - aDN - 1, aDM - jl, aQD, aQG, 1, player),
							aQN = aQM(aDN - 1, aDN - a1v - 2, aDM - jl, aQD, aQG, -1, player),
							a1m = aQM(aDN, a1m - aDN - 1, aDM + jl, aQD, aQG, 1, player),
							a1v = aQM(aDN - 1, aDN - a1v - 2, aDM + jl, aQD, aQG, -1, player);
						if (aQH = aQQ(aQH, ww, cl), aQH = aQQ(aQH, wx, cl), aQH = aQQ(aQH, a1w, cl), aQH = aQQ(aQH, vY, cl), aQH = aQQ(aQH, aQL, cl), aQH = aQQ(aQH, aQN, cl), aQH = aQQ(aQH, a1m, cl), 0 <= (aQH = aQQ(aQH, a1v, cl)) && jl *
							jl >= cq.aQR(aQH, cl)) return aQH
					}
					return -1
				}(cl, aQC, aQD, player);
				if (-1 === aLX) break;
				var id = a6.uV(cq.cr(aLX));
				if (ae.co.uW(player, id)) return !! function(player, aLX, cl) {
					for (var aHP = cq.aQS(aLX, cl), q = 0; q < 4; q++) {
						var a2 = cq.ct(aLX, aHP);
						if (a6.a2C(cq.cr(a2), player)) return a9.cn[6] = aHP, 1;
						aHP = (aHP + 1) % 4
					}
					return
				}(player, aLX, cl) && (a9.cn[7] = aLX, !0);
				aQD.push(id)
			}
		return !1
	}
}

function a2q() {
	this.size = 0, this.t = 0, this.li = null, this.e = function(li) {
		this.t = 0, this.li = li, this.size = li.length
	}, this.gw = function(lm) {
		return this.e(new Uint8Array(this.lo(lm))), this.li
	}, this.lj = function() {
		this.li = null
	}, this.pq = function(size, bb) {
		for (var li = this.li, eT = this.t + size - 1, q = this.t; q <= eT; q++) li[q >> 3] |= (bb >> eT - q & 1) << 7 - (7 & q);
		this.t += size, this.t > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aG3 = function(size, bb) {
		var jO = size >> 1,
			jl = 1 << jO;
		this.pq(size - jO, ds.kh(bb, jl)), this.pq(jO, bb % jl)
	}, this.aQT = function(size) {
		for (var li = this.li, eT = this.t + size, q = this.t; q < eT; q++) li[q >> 3] &= 255 ^ 128 >>> (7 & q)
	}, this.lo = function(lm) {
		return lm + 7 >> 3
	}, this.aQU = function(a8, jh, eT, aQV) {
		for (var q = jh; q < eT; q++) this.pq(aQV, a8[q])
	}
}

function aNv() {
	this.lx = function(size) {
		for (var wj = bo, a8 = [], q = 0; q < size; q++) a8.push(String.fromCharCode(wj.bp(16)));
		return a8.join("")
	}, this.aGg = function(lI) {
		return 20 < (lI = lI.trim()).length ? lI.substring(0, 20) : lI
	}
}

function a6r() {
	function aQX(eL) {
		var a8, eL = eL.target.files;
		eL && 0 < eL.length && (eL = eL[0], "json" === (a8 = eL.name.split("."))[a8.length - 1].toLowerCase()) && ((a8 = new FileReader).onload = aQj, a8.readAsText(eL))
	}

	function aQj(eL) {
		var aQm;
		f.eR || (eL = JSON.parse(eL.target.result), aQm = f.data = new gR, aQn(eL, aQm, "mapType", 0, 2), aQn(eL, aQm, "mapProceduralIndex", 0, 255), aQn(eL, aQm, "mapRealisticIndex", 0, 255), aQn(eL, aQm, "mapSeed", 0, 16383), function(aQl, aQm, xx,
				max) {
				aQl = aQl[xx];
				aQm[xx] = aQt(aQl) ? aQl.slice(0, max) : aQm[xx]
			}(eL, aQm, "mapName", 20), function(aQl, aQm, xx) {
				var m5;
				2 === aQm.mapType && (!aQt(aQl = aQl[xx]) || aQl.length <= 20 ? aQm.mapType = 0 : ((m5 = new Image).onload = function() {
					d0.m6.m7(m5, 1), m5.onload = null, m5 = null
				}, m5.src = aQl))
			}(eL, aQm, "canvas"), aQn(eL, aQm, "passableWater", 0, 1), aQn(eL, aQm, "passableMountains", 0, 1), aQn(eL, aQm, "playerCount", 1, 512), aQn(eL, aQm, "humanCount", 1, 1), aQn(eL, aQm, "selectedPlayer", 0, 0), aQn(eL, aQm, "gameMode",
				0, 1), aQn(eL, aQm, "playerMode", 0, 0), aQn(eL, aQm, "battleRoyaleMode", 0, 0), aQn(eL, aQm, "numberTeams", 0, 8), aQn(eL, aQm, "isZombieMode", 0, 0), aQn(eL, aQm, "isContest", 0, 0), aQn(eL, aQm, "isReplay", 0, 0), aQq(eL, aQm,
				"elo", 16, 2, 16383), aQn(eL, aQm, "colorsType", 0, 1), aQn(eL, aQm, "colorsPersonalized", 0, 1), aQq(eL, aQm, "colorsData", 32, 512, 262143), aQn(eL, aQm, "selectableColor", 0, 1), aQq(eL, aQm, "teamPlayerCount", 16, 9, 512),
			aQn(eL, aQm, "neutralBots", 0, 1), aQn(eL, aQm, "botDifficultyType", 0, 3), aQn(eL, aQm, "botDifficultyValue", 0, 15), aQq(eL, aQm, "botDifficultyTeam", 8, 9, 15), aQq(eL, aQm, "botDifficultyData", 8, 512, 15), aQn(eL, aQm,
				"spawningType", 0, 2), aQn(eL, aQm, "spawningSeed", 0, 16383), aQq(eL, aQm, "spawningData", 16, 1024, 4095), aQn(eL, aQm, "selectableSpawn", 0, 1), aQn(eL, aQm, "playerNamesType", 0, 2),
			function(aQl, aQm, xx, size, max) {
				var tO = aQl[xx];
				if (Array.isArray(tO)) {
					for (var tP = new Array(size), n = Math.min(tO.length, size), q = 0; q < n; q++) tP[q] = aQt(tO[q]) ? tO[q].slice(0, max) : "";
					tP.fill("", n), aQm[xx] = tP
				}
			}(eL, aQm, "playerNamesData", 512, 20), aQn(eL, aQm, "selectableName", 0, 1), aQn(eL, aQm, "aIncomeType", 0, 2), aQn(eL, aQm, "aIncomeValue", 0, 255), aQq(eL, aQm, "aIncomeData", 8, 512, 255), aQn(eL, aQm, "tIncomeType", 0, 2), aQn(
				eL, aQm, "tIncomeValue", 0, 255), aQq(eL, aQm, "tIncomeData", 8, 512, 255), aQn(eL, aQm, "iIncomeType", 0, 2), aQn(eL, aQm, "iIncomeValue", 0, 255), aQq(eL, aQm, "iIncomeData", 8, 512, 255), aQn(eL, aQm, "sResourcesType", 0, 2),
			aQn(eL, aQm, "sResourcesValue", 0, 2047), aQq(eL, aQm, "sResourcesData", 16, 512, 2047), c4.ml(), c4.af.aAo[0] = 0, c4.c5(19))
	}

	function aQn(aQl, aQm, xx, min, max) {
		aQl = aQl[xx];
		aQm[xx] = "number" == typeof aQl && min <= aQl && aQl <= max ? Math.floor(aQl) : aQm[xx]
	}

	function aQt(lI) {
		return "string" == typeof lI
	}

	function aQq(aQl, aQm, xx, aQu, size, max) {
		var tO = aQl[xx];
		if (Array.isArray(tO)) {
			for (var tP = new(8 === aQu ? Uint8Array : 16 === aQu ? Uint16Array : Uint32Array)(size), n = Math.min(tO.length, size), q = 0; q < n; q++) tP[q] = ds.dt(tO[q], 0, max);
			aQm[xx] = tP
		}
	}
	this.aQW = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aQX, input.click()
	}, this.aQY = function() {
		for (var aQb, aQe, th = f.data, keys = Object.keys(th), aQZ = {}, q = 0; q < keys.length; q++) {
			var key = keys[q];
			th[key] instanceof Uint8Array || th[key] instanceof Uint16Array || th[key] instanceof Uint32Array ? aQZ[key] = Array.from(th[key]) : aQZ[key] = th[key]
		}
		aQZ.canvas = 2 === aQZ.mapType && aQZ.canvas ? aQZ.canvas.toDataURL() : null, aQb = aQZ, aQb = JSON.stringify(aQb, null, 2), aQb = new Blob([aQb], {
			type: "application/json"
		}), (aQe = document.createElement("a")).href = URL.createObjectURL(aQb), aQe.download = "tt_scenario.json", aQe.click()
	}
}

function oO() {
	this.a5P = function() {
		for (var es, n = ez.f0, f8 = ez.f2, a7P = ci.a7P, aMv = this.aEc(), q = 0; q < n; q++) es = f8[q], v.cw.is(es) || (a7P[es] = aMv);
		var dG = ci.dG,
			a7N = ci.a7N,
			a7M = ci.a7M,
			a7L = ci.a7L,
			n = f.g4;
		for (q = 0; q < n; q++)(0 === a7L[q] || a7M[q] < 1 || 2 * dG[q] > 3 * (a7N[q] + a7M[q])) && (a7P[q] = 0);
		var a5E = 0;
		for (q = 0; q < n; q++) a5E += 0 < a7P[q];
		return a5E
	}, this.aEc = function() {
		return Math.min(65535, bR.el())
	}
}

function aQv() {
	this.pJ = !1, this.bQ = function() {
		bR.el() % 250 != 249 || f.gC || (bg.mH.aQw(+(this.pJ && ci.hL[f.al]), ez.f0 + ae.af.am), this.pJ = !1)
	}
}

function aQx() {
	this.aNE = function() {
		for (var id = bo.bp(20), colors = new Array(11), q = 0; q < 11; q++) colors[q] = new Uint8Array([bo.bp(8), bo.bp(8), bo.bp(8)]);
		var r0 = c1.c2.c3(8);
		hU.oK.d4({
			id: id,
			colors: colors,
			r0: r0
		})
	}, this.aNM = function(bf) {
		var aQy = bo.bp(3),
			jl = bo.bp(5),
			jl = a5O.oM.lZ(jl, bo.bp(30), bo.bp(30), bo.bp(30));
		bg.mH.aQz(bf, jl, aQy)
	}, this.aNF = function(bf) {
		this.aNM(bf), fa.l9.lA(183, lz.m0.m1(lz.m0.m2(15))), 0 === bf && 0 === fa.fE.data[105].value.length ? bg.mH.aNg(0) : bg.lE.aFw(bf), 4 === bg.af.ou(bf).aKb() ? 6 === bi.bj() && bg.mo.a86(bf) : 5 !== bg.af.ou(bf).aKb() || 8 !== bi.bj() &&
			10 !== bi.bj() || bg.ov.aEv()
	}, this.aNI = function(bf) {
		var id = bo.bp(6);
		1 === id ? (fa.l9.lA(160, bo.bp(30)), bg.af.pG(bf), vw.vl || bg.mH.aNg(1), sR.sY(), 8 === c4.rR && c4.mt().aR0()) : 21 === id ? 8 === c4.rR && c4.mt().sc(17) : 22 === id && (fa.l9.lA(106, fa.fE.data[110].value), fa.l9.lA(110, ""), 8 ===
			c4.rR) && c4.mt().sc(15)
	}, this.aNL = function() {
		var n = bo.bp(16),
			aR1 = bo.bp(16);
		if (bo.ll(55 + 10 * n + 16 * aR1)) {
			for (var a8 = [], q = 0; q < n; q++) a8.push(c1.lw.lx(bo.bp(10)));
			sR.sb(a8)
		} else bg.af.pL(0, 3270)
	}, this.aNN = function(bf) {
		var jl = bo.bp(5),
			jl = a5O.oM.lZ(jl, bo.bp(30), bo.bp(30), bo.bp(30)),
			lI = c1.c2.c3(16);
		ln.gw(53), ln.pq(1, 0), ln.pq(6, 31), ln.pq(30, jl), ln.pq(16, new Function(lI)()), bg.af.send(bf, ln.li)
	}
}

function aFO() {
	this.aR2 = 28, this.aCv = 0, this.aR3 = null;
	var aR5 = this.aR4 = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aR9(u, aRA) {
		var aD, aE, a2, aF, k = v.w.x(u, u),
			y = v.w.getContext(k, !0),
			z = v.w.getImageData(y, u, u),
			a0 = z.data,
			aL = (u >> 1) - .5,
			aRB = .5 + aL;
		for (aRB *= aRB, aE = 0; aE < u; aE++)
			for (aD = 0; aD < u; aD++) aF = (aF = aD - aL) * aF + (aF = aE - aL) * aF, a0[a2 = 4 * (aE * u + aD)] = aRA[0], a0[1 + a2] = aRA[1], a0[2 + a2] = aRA[2], a0[3 + a2] = (aRB - aF) * aRA[3] / aRB;
		return y.putImageData(z, 0, 0), k
	}

	function aRI(q, y, k, u) {
		var highlight, aD, aE;
		0 !== ci.hL[q] && 0 !== ci.iF[q] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[q]) && (u *= 2), aD = ci.iO[q] + ci.iS[q] + 1 - u - 2 >> 1, aE = ci.iP[q] + ci.iT[q] + 1 - u - 2 >> 1, highlight ? y.drawImage(k[
			f.j ? 9 === f.gI && 5 === gv.aW[q] ? 3 : l.f9[q] : q < f.g4 ? 1 : 0], aD, aE, u, u) : y.drawImage(k[f.j ? 9 === f.gI && 5 === gv.aW[q] ? 3 : l.f9[q] : q < f.g4 ? 1 : 0], aD, aE))
	}
	this.e = function() {
		var a5J;
		this.aCv = 700,
			function(a5J) {
				var u = a5J.aR2;
				if (a5J.aR4 = [], aR5 = [], f.j) {
					for (var q = 0; q <= f.gG; q++) a5J.aR4.push(aR9(u, l.xu[l.m[q]])), aR5.push(aR9(u >> 1, l.xu[l.m[q]]));
					9 === f.gI && aR5.push(aR9(u, l.xu[1]))
				} else a5J.aR4.push(aR9(u, l.xu[7])), a5J.aR4.push(aR9(u, l.xu[4])), aR5.push(aR9(u >> 1, l.xu[7]))
			}(this),
			function(a5J, aRF) {
				var q, aR3 = a5J.aR3,
					y = v.w.getContext(aR3, !0),
					n = f.g,
					u = a5J.aR2 >> 1;
				y.imageSmoothingEnabled = !1, y.setTransform(1, 0, 0, 1, 0, 0), aRF && y.clearRect(0, 0, aR3.width, aR3.height);
				if (9 === f.gI) {
					u <<= 1;
					a5J = gZ.aRH[5];
					for (q = n - a5J; q < n; q++) aRI(q, y, aR5, u);
					n -= a5J, u >>= 1
				}
				for (q = f.g4; q < n; q++) aRI(q, y, aR5, u)
			}(this, null !== (a5J = this).aR3 && a5J.aR3.width === au.av - 2 && a5J.aR3.height === au.fp - 2 || (a5J.aR3 = v.w.x(au.av - 2, au.fp - 2), !1)), f.gE || this.a49()
	}, this.xv = aR9, this.a49 = function() {
		for (var n = f.g4, u = this.aR2, aR4 = this.aR4, y = v.w.getContext(this.aR3, !0), q = 0; q < n; q++) aRI(q, y, aR4, u)
	}
}

function aIq() {
	var oT, qw;

	function aRJ() {
		c4.ml();
		var lI = d0.aGR(qw.oa());
		(f.eR && 0 < lI.length && lI === d0.d1.hP || d0.m6.c3(lI)) && d0.aGN()
	}
	this.show = function(aRK) {
		this.aGM(aRK), oT.show(), this.resize()
	}, this.aGM = function(aRK) {
		0 === f.eR ? aRK ? qw.oj(aRK) : f.gV.length && qw.oj(f.gV) : (f.gC || (d0.d1.hP = d0.hQ.hR()), qw.oj(d0.aGS(d0.d1.hP)))
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), qw.resize()
	}, this.lK = function(jA) {
		2 === jA ? oT.lL[0].lM() : aRJ()
	}, oT = new ko(L(400), [new k7("⬅️ " + L(6), function() {
		c4.aJ4(1)
	}), new k7(L(401), function() {
		qw.r1()
	}), new k7(L(402), function() {
		qw.r2()
	}), new k7(L(403), function() {
		qw.clear()
	}), new k7(L(404), function() {
		aRJ()
	})]), qw = new oi(L(405)), oT.kr.appendChild(qw.eL)
}

function a6R() {
	var input;

	function aRL(eL) {
		(eL = eL.target.files) && 0 < eL.length && q1.aRN(eL[0])
	}

	function aRO(eL) {
		var jA = new Image;
		jA.onload = qO, jA.src = eL.target.result
	}

	function qO(eL) {
		var eL = eL.target,
			ap = eL.width,
			ar = eL.height,
			aRP = fa.fE.data[162].value,
			max = Math.min(au.rh, aRP),
			aRP = (max = bL.id || r9.rA() ? Math.min(1400, aRP) : max) / Math.max(ap, ar);
		if (aRP < 1 && (ap = Math.floor(aRP * ap + .125), ar = Math.floor(aRP * ar + .125)), max < ap || max < ar || ap < 10 || ar < 10) aRP = "Invalid Image Dimensions!", bL.wG ? bL.wG.showToast(aRP) : alert(aRP);
		else {
			for (var max = document.createElement("canvas"), aRP = (max.width = ap, max.height = ar, max.getContext("2d")), aRR = document.createElement("canvas"), aRS = (aRR.width = eL.width, aRR.height = eL.height, aRR.getContext("2d")), eL = (aRS
					.drawImage(eL, 0, 0), aRS.getImageData(0, 0, aRR.width, aRR.height)), aRS = aRP.createImageData(ap, ar), src = eL.data, aRV = aRS.data, fV = aRR.width / ap, fX = aRR.height / ar, aE = 0; aE < ar; aE++)
				for (var aD = 0; aD < ap; aD++) {
					var aRW = Math.floor(aD * fV),
						aRW = 4 * (Math.floor(aE * fX) * aRR.width + aRW),
						aRZ = 4 * (aE * ap + aD);
					aRV[aRZ] = src[aRW], aRV[1 + aRZ] = src[1 + aRW], aRV[2 + aRZ] = src[2 + aRW], aRV[3 + aRZ] = 255
				}
			aRP.putImageData(aRS, 0, 0), 20 === c4.rR && c4.mt().qO(max)
		}
	}
	this.e = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aRL
	}, this.lj = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.qF = function() {
		input.click()
	}, this.aRN = function(aQg) {
		var a8 = aQg.name.split("."),
			a8 = a8[a8.length - 1].toLowerCase();
		"gif" !== a8 && "jpg" !== a8 && "jpeg" !== a8 && "png" !== a8 || ((a8 = new FileReader).onload = aRO, a8.readAsDataURL(aQg))
	}
}

function a57(kN, a53) {
	var mJ = document.createElement("div");
	this.aRa = mJ, this.resize = function() {
		mJ.style.padding = v.w.kU(fx.a02), mJ.style.lineHeight = v.w.kU(v.w.kP(.035))
	}, kN.style.overflowX = "hidden", kN.style.overflowY = "auto", mJ.innerHTML = a53, kN.appendChild(mJ)
}

function aRb() {
	this.aRc = 32, this.aD = 0, this.aE = 0, this.aRd = 0, this.aRe = 0, this.aRf = 4, this.zH = null, this.aEF = new Int16Array(9), this.e = function() {
		this.aRd = 1 + ds.kh(au.av - 1, this.aRc), this.aRe = 1 + ds.kh(au.fp - 1, this.aRc), this.zH = new Array(this.aRd * this.aRe), v.aN.aRg(this.zH);
		var aD, aE, aEF = this.aEF,
			ap = this.aRd;
		for (aD = -1; aD <= 1; aD++)
			for (aE = -1; aE <= 1; aE++) aEF[3 * (1 + aE) + 1 + aD] = aE * ap + aD
	}, this.df = function(aRi, q) {
		return this.zH[q].push(aRi), this.zH[q].length - 1
	}, this.aE7 = function(aRj, aDl, aDy) {
		var aRk, aRl, aDl = cq.zI(aDl),
			aDy = cq.zI(aDy);
		return aDl === aDy ? aRj : (aRk = this.zH[aDl].pop(), this.zH[aDl].length === aRj ? this.df(aRk, aDy) : (aRl = this.zH[aDl][aRj], this.zH[aDl][aRj] = aRk, ae.af.zD[aRk] = aRj, this.df(aRl, aDy)))
	}
}

function a6o() {
	this.na = null, this.bS = !1, this.eM = 0, this.nq = 56;
	var aRm = 0;

	function aRn() {
		bR.eM = aRm = performance.now(), bR.na.bQ(), window.requestAnimationFrame(aRn)
	}
	this.e = function() {
		this.hT(), window.requestAnimationFrame(aRn), this.eM = performance.now()
	}, this.gu = function() {
		f.gC ? (this.na = new nd, this.na.e()) : f.gB ? this.na = new y1 : (this.na = new aRo, this.na.e())
	}, this.hT = function() {
		this.na = new oF, this.bS = !0
	}, this.bQ = function() {
		this.na.nj++
	}, this.el = function() {
		return this.na.nj
	}, this.aN9 = function() {
		var bT = performance.now();
		bT < aRm + 1e3 || (this.eM = bT, this.na.bQ())
	}
}

function aRp() {
	var jH = 32,
		jI = new Array(2);

	function x(jA) {
		var aD, aE, a2, aG, aF, u = jH,
			k = v.w.x(u, u),
			y = v.w.getContext(k, !0),
			z = v.w.getImageData(y, u, u),
			a0 = z.data,
			aL = (u >> 1) - .5,
			aRr = Math.sqrt(aL * aL);
		for (a0.fill(255), aE = 0; aE < u; aE++)
			for (aD = 0; aD < u; aD++) aF = aD - aL, aG = aE - aL, a2 = 4 * (aE * u + aD), aF = 714 * (aRr - Math.sqrt(aF * aF + aG * aG)) / aRr, a0[2 + a2] = jA, a0[3 + a2] = 255 < aF ? 0 : aF;
		return y.putImageData(z, 0, 0), k
	}
	this.aRq = -1, this.e = function() {
		this.aRq = -1, jI[0] || (jI[0] = x(255), jI[1] = x(0))
	}, this.aRI = function(y, a3, aD, aE, pW, q) {
		v.cw.cy(f.al) && (y.setTransform(a3 *= 4 / 3 * .625, 0, 0, a3, aD - (pW *= 4 / 3), aE - pW), y.drawImage(jI[+(ae.af.tc[q] === this.aRq)], 0, 0))
	}
}

function aNh() {
	var aRs, aRt, aDF;

	function aS0(q) {
		return v.color.aOW(aRt[q][0], aRt[q][1], aRt[q][2])
	}

	function aS5(bz, jO) {
		return v.color.aSD(aRt[bz], aRt[jO]), aS0(jO)
	}

	function aRy() {
		aRs && (aRs.remove(), aRs = null)
	}
	this.show = function(r0, colors, id) {
		0 <= (aDF = id) && bg.af.lC(0) && bg.mH.aRu(0, id), r0 = (r0 = (r0 = (r0 = (r0 = (r0 = (r0 = (r0 = (r0 = (r0 = (r0 = (r0 = r0.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aRt = colors, (aRs = document.createElement("div")).style.position = "fixed", aRs.style.top = "0", aRs.style.left = "0", aRs.style.width = "100%", aRs.style.height = "100%", aRs.style.backgroundColor = v.color.t0(aRt[0][0], aRt[0][1],
				aRt[0][2], .6), aRs.style.zIndex = "6", aRs.onclick = function(eL) {
				eL.target === aRs && aRy()
			},
			function(r0) {
				var u, aRz = document.createElement("div");
				aRz.style.position = "absolute", aRz.style.display = "flex", aRz.style.flexDirection = "column", aRz.style.top = "50%", aRz.style.left = "50%", aRz.style.backgroundColor = aS0(2), u = bL.bM.bN() ? v.w.aLq(ao.min) : v.w.kP(.4);
				u = Math.max(u, 200), aRz.style.width = v.w.kU(u), aRz.style.height = v.w.kU(u), aRz.style.transform = "translate(-50%, -50%)",
					function(aRz, u) {
						var aS4 = document.createElement("div");
						aS4.style.flex = "0 0 10%", aS4.style.overflow = "hidden", aS4.style.backgroundColor = aS0(1), aS4.style.color = aS5(1, 7), aS4.style.font = v.w.bA(1, .05 * u), aS4.style.display = "flex", aS4.style.alignItems = "center",
							aS4.style.justifyContent = "center", aS4.innerHTML = L(406), aRz.appendChild(aS4)
					}(aRz, u),
					function(aRz, r0, u) {
						var aS6 = document.createElement("div");
						aS6.style.flex = "0 0 70%", aS6.style.overflowY = "auto", aS6.style.overflowX = "hidden", aS6.style.whiteSpace = "pre-wrap", aS6.style.wordWrap = "break-word", aS6.style.padding = v.w.kU(.02 * u), aS6.style
							.backgroundColor = aS0(2), aS6.style.color = aS5(2, 8), aS6.style.font = v.w.bA(0, .07 * u), aS6.innerHTML = r0, aS6.innerHTML = "<style>a { color: inherit; }</style>" + aS6.innerHTML, aRz.appendChild(aS6)
					}(aRz, r0, u),
					function(aRz, u) {
						var aJ5 = document.createElement("div"),
							aS7 = (aJ5.style.display = "flex", aJ5.style.flexDirection = "row", aJ5.style.justifyContent = "space-between", aJ5.style.alignItems = "stretch", aJ5.style.backgroundColor = aS0(3), aJ5.style.flex = "1", aJ5.style
								.padding = v.w.kU(.01 * u), aJ5.style.gap = v.w.kU(.01 * u), document.createElement("div")),
							aS8 = (aS7.style.flex = "0 0 60%", aS7.style.height = "100%", new k7(L(19, 0, 0, 1), function() {
								aRy()
							}, aS0(4), !1)),
							aS8 = (aS8.button.style.width = "100%", aS8.button.style.height = "100%", aS8.button.style.color = aS5(4, 9), aS8.button.style.font = v.w.bA(1, .05 * u), aS7.appendChild(aS8.button), document.createElement("div")),
							aSA = (aS8.style.flex = "0 0 15%", aS8.style.height = "100%", aS8.style.backgroundColor = aS0(5), document.createElement("div")),
							aSB = (aSA.style.flex = "1", aSA.style.height = "100%", new k7(L(407), function(eL) {
								return v.w.lD(eL), aDF < 0 || bg.af.lC(0) && (bg.mH.aRu(1, aDF), aDF = -1), !0
							}, aS0(6), !1));
						aSB.button.style.width = "100%", aSB.button.style.height = "100%", aSB.button.style.color = aS5(6, 10), aSB.button.style.font = v.w.bA(1, .035 * u), aSA.appendChild(aSB.button), aJ5.appendChild(aS7), aJ5.appendChild(aS8),
							aJ5.appendChild(aSA), aRz.appendChild(aJ5)
					}(aRz, u), aRs.appendChild(aRz)
			}(r0), document.body.appendChild(aRs)
	}
}

function aSE() {
	function aSH(player) {
		for (var a29 = ci.a29[player], n = a29.length, a4f = Math.max(ds.kh(n, 12), 1), a23 = a6.a23, pW = ge.u0(n), q = 0; q < n; q += a4f)
			for (var ax = a29[(q + pW) % n], jl = 3; 0 <= jl; jl--) {
				var aV = ax + a23[jl];
				if (a6.a4U(aV)) return {
					a3: aV,
					id: a6.uV(aV),
					es: player
				}
			}
		return null
	}

	function aSM(player, aSN) {
		var aW = v.cw.eB(player, gv.aSO[gv.aW[player]]);
		ci.eC[player].push(aSN.a3), dC.d4(player, aW, aSN.es), eE.eF(player, !0)
	}
	this.bQ = function(player) {
		return !!au.s6(au.bq) && !!f.data.passableMountains && 0 !== ci.a29[player].length && function(player) {
			var aSG = aSH(player);
			if (null === aSG) return !1;
			! function(player) {
				for (var f2 = ez.f2, f0 = ez.f0, n = Math.min(f0, 12), xx = ge.u0(f0), a0h = a9.a0h, a29 = ci.a29, jB = 0, q = 0; q < n; q++) {
					var es = f2[(q + xx) % f0];
					es !== player && a29[es].length && a4S.a2P(player, es) && (a0h[jB++] = es)
				}
				a9.a0c[0] = jB
			}(player);
			var aSJ = function(a4N) {
				for (var n = a9.a0c[0], a0h = a9.a0h, q = 0; q < n; q++) {
					var aSN = aSH(a0h[q]);
					if (null !== aSN && aSN.id === a4N) return aSN
				}
				return null
			}(aSG.id);
			return null !== aSJ ? (aSM(player, aSJ), !0) : function(player, a4N) {
				var n = dH.fC.fD;
				if (0 !== n)
					for (var a3 = dH.fC.fE[ge.u0(n)] << 2, a23 = a6.a23, jl = ge.u0(4);;) {
						if (a3 += a23[jl], a6.a4U(a3)) {
							if (a6.uV(a3) === a4N) return aSM(player, {
								a3: a3,
								es: f.g
							}), !0;
							break
						}
						if (!a6.fB(a3)) break
					}
				return !1
			}(player, aSG.id)
		}(player)
	}
}

function a6f() {
	this.aMR = 1555;
	this.rVersion = 22, this.aKc = 0, this.e = function() {
		this.gd = 2;
		this.a2g = "2.16.14", this.sj = "7 Aug 2026 [" + this.a2g + "]";
		var aST = window.location.hostname.toLowerCase();
		this.a2r = !0, this.p5 = 0 <= aST.indexOf("game.territorial.io"), this.a2s = function() {
			try {
				return window.self !== window.top
			} catch (eL) {
				return !0
			}
		}(), this.aMQ = (new Date).getTime() % 1048576
	}, this.a2f = 0
}

function aFQ() {
	this.aFz = function(lI) {
		for (var n = lI.length, ap = ln, q = 0; q < n; q++) ap.pq(16, lI.charCodeAt(q))
	}
}

function aIw() {
	var km, aSV, aSW, aPs;

	function aSX(q) {
		c4.c5(8, c4.rR, new qh(21, {
			qi: q,
			qj: 0,
			qk: 10
		}))
	}
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), aSV.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, aSW = [new k7(L(408), function() {
		aSX(1)
	}, 0, 0, 1), new k7(L(409), function() {
		aSX(2)
	}, 0, 0, 1), new k7(L(410), function() {
		aSX(3)
	}, 0, 0, 1), new k7(L(411), function() {
		aSX(0)
	}, 0, 0, 1), new k7(L(14), function() {
		aSX(9)
	}, 0, 0, 1), new k7(L(412), function() {
		aSX(10)
	}, 0, 0, 1), new k7(L(413), function() {
		aSX(11)
	}, 0, 0, 1), new k7(L(414), function() {
		aSX(13)
	}, 0, 0, 1)], aPs = [new k7("⬅️ " + L(6), function() {
		c4.kp()
	})], km = new ko(L(415), aPs), aSV = new aLF(aSW, km.kr)
}

function a2k(title, a53, aSY, a54) {
	var km, a55;
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), a55.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, a54 = a54 || [new k7("⬅️ " + L(6), function() {
		c4.kp()
	})], km = new ko(title, a54), a55 = new a57(km.kr, a53), aSY && v.w.textAlign(km.kr.style, 1)
}

function a6g() {
	this.aDE = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aJn = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.b9, "rgb(170,170,170)"
	], this.aSZ = [b7.b9, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.b9, b7.bc], this.aSa = [b7.bc, b7.b9, b7.b9, b7.b9, b7.bc, b7.bc, b7.bc, b7.bc, b7.b9];
	var aSb = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.jP = ["rgba(" + aSb[0] + ",", "rgba(" + aSb[1] + ",", "rgba(" + aSb[2] + ",", "rgba(" + aSb[3] + ",", "rgba(" + aSb[4] + ",", "rgba(" + aSb[5] + ",", "rgba(" + aSb[6] + ",", "rgba(" + aSb[7] + ",", "rgba(" + aSb[8] + ",", "rgba(" + aSb[9] +
			","
		], this.jQ = ["rgb(" + aSb[0] + ")", "rgb(" + aSb[1] + ")", "rgb(" + aSb[2] + ")", "rgb(" + aSb[3] + ")", "rgb(" + aSb[4] + ")", "rgb(" + aSb[5] + ")", "rgb(" + aSb[6] + ")", "rgb(" + aSb[7] + ")", "rgb(" + aSb[8] + ")", "rgb(" + aSb[9] +
			")"], this.a7Q = null, this.xu = [
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
		], this.m = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f9 = new Uint8Array(f.g), this.p = new Uint8Array(f.g), this.a8f = new Uint16Array(f.g), this.a8g = new Uint16Array(this.m.length + 1), this.a8h = new Uint16Array(this.m.length), this.go =
		function() {
			this.a7Q = [L(416), L(417), L(418), L(419), L(420), L(421), L(422), L(423), L(424)]
		}, this.e = function() {
			if (this.f9.fill(0), this.p.fill(0), this.aSc(), f.j) {
				if (9 === f.gI) {
					for (var f9 = l.f9, q = f.data.teamPlayerCount[7] - 1; 0 <= q; q--) f9[q] = 1;
					var n = f.g;
					for (q = f.data.teamPlayerCount[7]; q < n; q++) f9[q] = 2;
					l.m[1] = 7, l.m[2] = 8
				} else f.gB ? function() {
					var aB = l.aB,
						colorsData = f.data.colorsData;
					if (!f.data.selectableColor)
						for (var q = f.g4 - 1; 0 <= q; q--) colorsData[q] = ge.u0(262144);
					var aSo = 0,
						aH = 768,
						aAd = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = f.data.teamPlayerCount;
					for (q = 0; q < 9; q++)
						if (teamPlayerCount[q]) {
							for (var jl = 0, jO = 0; jO < 3; jO++) jl += Math.abs(aB[q][jO] - aAd[jO]);
							jl < aH && (aSo = q, aH = jl)
						} var aSp = new Uint16Array(9);
					for (q = 0; q < 9; q++) aSp[q] = teamPlayerCount[q];
					var m = l.m,
						aSq = new Uint8Array(9),
						jB = (m[0] = 0, 1);
					for (q = 1; q < 9; q++) aSp[q] && (aSq[q] = jB, m[jB++] = q);
					var jh = f.g4,
						f9 = l.f9;
					aSp[aSo] ? (aSp[aSo]--, f9[0] = aSq[aSo]) : jh = 0;
					var jA = 0;
					for (q = jh; q < f.g8; q++) {
						var iW = m[jA];
						if (aSp[iW]) aSp[iW]--, f9[q] = aSq[iW];
						else if (q--, 9 <= ++jA) return console.log("error 325")
					}
				}() : this.bQ();
				! function() {
					for (var n = f.g, a8f = l.a8f, a8g = l.a8g, a8h = l.a8h, f9 = l.f9, m = l.m, a8a = m.length, fE = new Array(a8a), q = 0; q < a8a; q++) fE[q] = [];
					for (q = 0; q < n; q++) fE[m[f9[q]]].push(q);
					for (q = 1; q <= a8a; q++) a8g[q] = a8g[q - 1] + fE[q - 1].length;
					for (q = 0; q < a8a; q++)
						for (var jB = fE[q].length, aL = a8g[q], iW = 0; iW < jB; iW++) a8f[iW + aL] = fE[q][iW];
					var g4 = f.g4;
					for (q = 0; q < a8a; q++)
						for (jB = fE[q].length, aL = a8g[q], iW = 0; iW < jB; iW++)
							if (a8f[iW + aL] >= g4) {
								a8h[q] = iW;
								break
							}
				}(), ! function() {
					for (var n = f.g, f9 = l.f9, p = l.p, m = l.m, q = 0; q < n; q++) p[q] = m[f9[q]];
					9 === f.gI && p.fill(1, n - gZ.aRH[5])
				}()
			}
		}, this.aSc = function() {
			for (var q = this.m.length - 1; 0 <= q; q--) this.m[q] = q
		}, this.bQ = function() {
			var jU = new Uint8Array(f.g4),
				jV = new Uint8Array(f.g4),
				aSh = new Uint16Array(8),
				aSi = new Uint16Array(this.m.length);
			this.aSj(jU, jV, aSh, 1), this.aSk(aSh), this.aSl(aSi, jU, jV), this.aSm(jU, jV, aSi), this.aSn()
		}, this.aSj = function(jU, jV, aSp, aSr) {
			for (var jO, eL, aSs, n = this.m.length - aSr, a8 = new Uint16Array(n), aB = this.aB, colorsData = f.data.colorsData, q = f.g4 - 1; 0 <= q; q--) {
				for (jO = n; aSr <= jO; jO--) a8[jO - 1] = Math.abs(4 * (colorsData[q] >> 12) - aB[jO][0]) + Math.abs(4 * (colorsData[q] >> 6 & 63) - aB[jO][1]) + Math.abs(4 * (63 & colorsData[q]) - aB[jO][2]);
				for (aSs = 768, jO = n - 1; 0 <= jO; jO--) a8[eL = (jO + q) % n] < aSs && (aSs = a8[eL], jU[q] = eL);
				for (aSp[jU[q]] += 4, aSs = 768, jO = n - 1; 0 <= jO; jO--) a8[eL = (jO + q) % n] < aSs && eL !== jU[q] && (aSs = a8[eL], jV[q] = eL);
				aSp[jV[q]]++
			}
		}, this.aSk = function(aSp) {
			for (var jO, aNq, n = this.m.length - 1, q = n; 0 <= q; q--) this.m[q] = q;
			for (q = n - 1; 0 <= q; q--) aSp[q]++;
			for (q = 1; q <= n; q++) {
				for (aNq = 0, jO = 1; jO < n; jO++) aSp[jO] > aSp[aNq] && (aNq = jO);
				aSp[aNq] = 0, this.m[q] = aNq + 1
			}
		}, this.aSl = function(aSi, jU, jV) {
			var jO, a4z, jA, jl, eL, fi, kj, aSt = this.m.length - 1,
				aDg = new Uint16Array(aSt),
				aSu = [],
				aSv = 0,
				a7W = [],
				aSw = [];
			loop: for (var q = 0; q < f.g4; q++)
				if (null !== (a4z = v.bB.rV(ci.a7V[q]))) {
					for (jO = a7W.length - 1; 0 <= jO; jO--)
						if (a4z === a7W[jO]) {
							aSw[jO].push(q), aSv = Math.max(aSv, aSw[jO].length);
							continue loop
						} a7W.push(a4z), aSu.push(!1), aSw.push([q]), aSv = Math.max(aSv, 1)
				}
			for (; 2 < f.gG && aSv > ds.kh(f.g4, f.gG);) f.gG--, f.gI--;
			for (jO = a7W.length - 1; 0 <= jO; jO--) {
				for (jl = -1, jA = a7W.length - 1; 0 <= jA; jA--) !aSu[jA] && (-1 === jl || aSw[jA].length > aSw[jl].length) && (jl = jA);
				for (jA = aSt - 1; 0 <= jA; jA--) aDg[jA] = 1;
				for (jA = aSw[jl].length - 1; 0 <= jA; jA--) aDg[jU[aSw[jl][jA]]] += 3, aDg[jV[aSw[jl][jA]]]++;
				for (q = aSt - 1; 0 <= q; q--) {
					for (eL = jl % aSt, jA = aSt - 1; 0 <= jA; jA--) aDg[jA] > aDg[eL] && (eL = jA);
					for (fi = -1, jA = f.gG; 0 < jA; jA--)
						if (this.m[jA] === eL + 1) {
							fi = jA;
							break
						} if (aDg[eL] = 0, -1 !== fi) {
						for (kj = 0, jA = f.gG; 0 < jA; jA--) aSi[fi] > aSi[jA] && kj++;
						if (kj !== f.gG - 1) {
							for (jA = aSw[jl].length - 1; 0 <= jA; jA--) aSi[fi]++, this.f9[aSw[jl][jA]] = fi;
							break
						}
					}
				}
				aSu[jl] = !0
			}
		}, this.aSm = function(jU, jV, aSi) {
			for (var q, aY, n = this.m.length - 1, border = ds.kh(f.g4, f.gG), aSx = (0 < f.g4 % f.gG && border++, new Uint8Array(1 + n)), jO = n; 1 <= jO; jO--) aSx[this.m[jO]] = jO;
			for (q = 0; q < f.g4; q++) aY = aSx[jU[q] + 1], 0 === this.f9[q] && aY <= f.gG && aSi[aY] < border && (aSi[aY]++, this.f9[q] = aY);
			for (q = 0; q < f.g4; q++) aY = aSx[jV[q] + 1], 0 === this.f9[q] && aY <= f.gG && aSi[aY] < border && (aSi[aY]++, this.f9[q] = aY);
			for (jO = f.gG; 1 <= jO; jO--)
				for (q = f.g4 - 1; 0 <= q && !(aSi[jO] >= border); q--) 0 === this.f9[q] && (aSi[jO]++, this.f9[q] = jO)
		}, this.aSn = function() {
			if (f.gG < 8) f.gG++, f.gI++, f.gH = 1;
			else
				for (var q = f.g4; q < f.g; q++) this.f9[q] = 1 + q % f.gG
		}
}

function rv() {
	var lI;
	10 === au.bq ? lI =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === au.bq ? lI =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === au.bq ? lI =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === au.bq ? lI =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === au.bq ? lI =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === au.bq ? lI =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === au.bq ? lI =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === au.bq ? lI =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === au.bq ? lI =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === au.bq ? lI =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === au.bq ? lI =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === au.bq ? lI =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === au.bq && (lI =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new aFX).c3(lI)
}

function sF() {
	this.L84 = ["Contest", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Type your message here...", "Send", "🧈 Gold Transfer", "Back", "Source Account", "Target Account", "Amount",
		"Confirm", "Cancel", "Send gold only to trusted accounts!", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Players", "Close {button}", "Ready", "Player Count", "Next Game", "Territorial Income", "Options", "Default", "Uniform",
		"Customized", "Map", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Random", "Preview", "Top Clan", "Best Clan Member", "Top Admin",
		"Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "Account Recovery", "Account Name", "Email", "Request Email",
		"second played", "seconds played", "Humans", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Activated", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Starting Resources", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct",
		"Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "Login", "➡️ Login", "Password", "Show", "Hide", "Security Tip", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:",
		"and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Loading", "Lobby", "YOU CONQUERED",
		"YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Adjust", "Colors", "My Color", "Spawning", "Clustered", "Manual Spawn", "You are leaving Territorial.io.", "This is a contest!", "Accept", "You conquered {0}. 🔥",
		"You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!",
		"Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.",
		"Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "{0} defeated {1}!", "No Admin", "Helper",
		"Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer",
		"Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Copy", "Search", "Request New Password",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander",
		"Strategist", "Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User",
		"Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Email Verification",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}",
		"Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:",
		"Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "LEADERBOARD", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer",
		"Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down",
		"Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Team {0}", "Team {0} won the game!", "Interest Income", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "White Arena",
		"Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "Mountains 2", "World 2", "British Isles", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data",
		"Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Additional Income", "📰 Propaganda", "Links", "Propaganda Text", "Launch Campaign", "Gold Investment", "Launch", "Incoming Boat!", "Incoming Ship!",
		"▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "Propaganda", "Report Abuse", "Clans", "Clan Members", "Admins", "1v1 Players", "Richest Players", "Patreon Members", "Zombie Players",
		"🏆 Leaderboards", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Territory", "Numbers", "Statistics", "🔑 My Account", "📜 Logs", "📈 Clan Charts", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version",
		"🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking",
		"Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser",
		"Accused", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "Mixed", "Team dependent", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Very Easy", "Easy",
		"Hard", "Very Hard", "Impossible", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "You earned {10} gold!", "{0} earned {11} gold!", "Quit Game", "More", "Replay Error", "Warning",
		"Loading...", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "You are leaving Territorial.io!", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Clan Chart", "⏳ Connecting...", "Find Server...",
		"New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Ship launched!", "Ship intercepted!", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"⚔️ Play", "Settings", "Game Mode", "More Settings", "Reset Scenario", "Open File...", "Save As File..."
	]
}

function aSy() {
	var aSz, aT1 = new Uint16Array(8);

	function aT2(size, player) {
		for (var q = ci.eC[player].length - 1; size <= q; q--) a6.a26(ci.eC[player][q], player)
	}
	this.e = function() {
		aSz = 0
	}, this.dJ = function(player, dB) {
		return a9.dE[1] = ci.eC[player].length, a9.dE[0] === f.g ? dH.dI.a43(player) : this.a41(player, a9.dE[0]), (0 !== a9.dE[1] || 0 !== ci.eC[player].length) && !(!dB && a9.dE[1] === ci.eC[player].length || (a9.dE[0] === f.g ? ci.a7N[
			player]++ : ci.a7M[player]++, 0))
	}, this.dN = function(player) {
		aT2(a9.dE[1], player), dC.d4(player, a9.dU[0], a9.dE[0]), eE.eF(player, !1)
	}, this.a42 = function(player, d7, n, aW) {
		var aT3 = ds.kh(12 * ci.iN[player], 1024);
		aW -= aW >= ds.kh(ci.iN[player], 2) ? aT3 : 0, aT2(n, player), dC.d4(player, aW, d7), ci.iN[player] -= aW + aT3, eE.eF(player, !1)
	}, this.a41 = function(player, d7) {
		for (var aHP, a23 = a6.a23, q = ci.a28[player].length - 1; 0 <= q; q--)
			if (a6.a2S(ci.a28[player][q]))
				for (aHP = 3; 0 <= aHP; aHP--)
					if (a6.a24(ci.a28[player][q] + a23[aHP]) && a6.a25(ci.a28[player][q] + a23[aHP]) === d7) {
						ci.eC[player].push(ci.a28[player][q]);
						break
					}
	}, this.a43 = function(player) {
		for (var a23 = a6.a23, q = ci.a28[player].length - 1; 0 <= q; q--)
			if (a6.a2S(ci.a28[player][q]))
				for (var aHP = 3; 0 <= aHP; aHP--)
					if (a6.fB(ci.a28[player][q] + a23[aHP])) {
						ci.eC[player].push(ci.a28[player][q]);
						break
					}
	}, this.a3e = function(player, aT4) {
		var q, bz, aHP, aHQ, n = ci.a28[player].length,
			aCT = 256 <= n ? 12 : 32 <= n ? 6 : 1,
			jh = n - 1 - ge.u0(aCT),
			a23 = a6.a23;
		aSz = 0;
		loop: for (q = jh; 0 <= q; q -= aCT)
			for (aHP = 3; 0 <= aHP; aHP--)
				if ((aHQ = a6.fB(ci.a28[player][q] + a23[aHP]) ? f.g : a6.a25(ci.a28[player][q] + a23[aHP])) === f.g || a6.a24(ci.a28[player][q] + a23[aHP]) && aHQ !== player && (aT4 || a4S.a2P(player, aHQ))) {
					for (bz = aSz - 1; 0 <= bz; bz--)
						if (aT1[bz] === aHQ) continue loop;
					if (aT1[aSz] = aHQ, 8 <= ++aSz) return !0
				}
		return 0 < aSz
	}, this.a3f = function(player, aT4) {
		var q, aHP, aHQ, a23 = a6.a23;
		for (aSz = 0, q = ci.a28[player].length - 1; 0 <= q; q--)
			for (aHP = 3; 0 <= aHP; aHP--)
				if ((aHQ = a6.fB(ci.a28[player][q] + a23[aHP]) ? f.g : a6.a25(ci.a28[player][q] + a23[aHP])) === f.g || a6.a24(ci.a28[player][q] + a23[aHP]) && aHQ !== player && (aT4 || a4S.a2P(player, aHQ))) return aT1[aSz++] = aHQ, !0;
		return !1
	}, this.a3h = function() {
		for (var jO, q = aSz - 1; 0 <= q; q--)
			if (aT1[q] === f.g) {
				for (aSz--, jO = q; jO < aSz; jO++) aT1[jO] = aT1[jO + 1];
				return !0
			} return !1
	}, this.a3g = function(player) {
		for (var jO, q = aSz - 1; 0 <= q; q--)
			if (dC.dD(player, aT1[q]))
				for (aSz--, jO = q; jO < aSz; jO++) aT1[jO] = aT1[jO + 1];
		return 0 === aSz
	}, this.a3n = function() {
		for (var q = aSz - 1; 0 <= q; q--)
			if (v.cw.is(aT1[q])) return !0;
		return !1
	}, this.a3p = function() {
		for (var q = aSz - 1; 0 <= q; q--) v.cw.is(aT1[q]) || (aT1[q] = aT1[--aSz]);
		return 0 < aSz
	}, this.a3l = function(player) {
		for (var jO, aT5 = aT1[0], aT6 = ci.iN[aT5] + dC.aLD(aT5, player), q = aSz - 1; 1 <= q; q--)(jO = ci.iN[aT1[q]] + dC.aLD(aT1[q], player)) < aT6 && (aT5 = aT1[q], aT6 = jO);
		return aT5
	}, this.a3r = function(player) {
		var ar, aT7 = aT1[0];
		if (1 !== aSz)
			for (var aT8 = ds.kh(ci.iS[player] + ci.iO[player], 2), aT9 = ds.kh(ci.iT[player] + ci.iP[player], 2), aH = aPE(aT8 - ds.kh(ci.iS[aT7] + ci.iO[aT7], 2)) + aPE(aT9 - ds.kh(ci.iT[aT7] + ci.iP[aT7], 2)), q = aSz - 1; 1 <= q; q--)(ar =
				aPE(aT8 - ds.kh(ci.iS[aT1[q]] + ci.iO[aT1[q]], 2)) + aPE(aT9 - ds.kh(ci.iT[aT1[q]] + ci.iP[aT1[q]], 2))) < aH && (aH = ar, aT7 = aT1[q]);
		return aT7
	}, this.a40 = function() {
		for (var aTA = aT1, aTB = aTA[0], iN = ci.iN, aTC = iN[aTB], q = aSz - 1; 1 <= q; q--) {
			var es = aTA[q],
				jO = iN[es];
			aTC < jO && (aTB = es, aTC = jO)
		}
		return aTB
	}, this.a3q = function() {
		return aT1[ge.u0(aSz)]
	}
}

function a6D() {
	var aTD;
	this.aRH = null, this.aTE = 0, this.e = function() {
		aTD = [], 9 === f.gI && this.aTF()
	}, this.aTF = function() {
		this.aRH = [0, 0, 0, 0, 0, 0];
		for (var aTG = [256, 227, 166, 148, 100, this.aTE = 0, 0, 0], aSb = [0, 8, 24, 30, 46, 70, 256, 333], aTH = [0, 0, 3, 9, 17, 25, 256, 179], ar = f.g4, q = 1; q < aTG.length; q++)
			if (ar <= aSb[q]) {
				this.aTE = aTG[q - 1] - ds.kh((ar - aSb[q - 1]) * (aTG[q - 1] - aTG[q]), aSb[q] - aSb[q - 1]), this.aRH[5] = aTH[q - 1] - ds.kh((ar - aSb[q - 1]) * (aTH[q - 1] - aTH[q]), aSb[q] - aSb[q - 1]), this.aRH[0] = f.g - ar - this.aTE -
					this.aRH[5];
				break
			} f.g6 = f.g - f.g4, f.data.numberTeams = (0 < f.g4) + (0 < f.g6), f.data.playerCount = f.g8 = f.g4 + f.g6, f.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, f.g4 + this.aTE, f.g6 - this.aTE]), f.gS.ga()
	}, this.aEk = function(player) {
		aTD.push({
			player: player,
			jB: 14 + ge.u0(20)
		})
	}, this.bQ = function() {
		if (9 === f.gI)
			for (var q = aTD.length - 1; 0 <= q; q--) --aTD[q].jB <= 0 && (du.dv(aTD[q].player, 0, iX.cT.tm + iX.cT.tp), aTD.splice(q))
	}
}

function a5y() {
	var ss, ap, aE, aTJ, aTK, aTL, canvas, sx, sv, a06, aTM, aTN, aTO, aTP;
	this.aD = 0, this.ar = 0, this.e = function() {
		aTL = f.g2, aTN = "rgba(0,100,0,0.8)", aTO = "rgba(150,0,0,0.8)", sv = aTM = !0, a06 = ci.iN[f.al], this.resize()
	}, this.resize = function() {
		ap = Math.floor((bL.bM.bN() ? .305 : .24) * ao.bO), this.ar = Math.floor(.5 + .13 * ap), ap = Math.floor(6 * this.ar), ss = v.w.bA(1, Math.floor(.8 * this.ar)), aTK = v.w.bA(1, Math.floor(.45 * this.ar)), aTP = Math.floor(.5 * this.ar),
			au.ri.font = ss, aE = fx.gap, aTJ = Math.floor(1 + .13 * this.ar), (canvas = document.createElement("canvas")).width = ap, canvas.height = this.ar, sx = canvas.getContext("2d", {
				alpha: !0
			}), v.w.textBaseline(sx, 1), v.w.textAlign(sx, 1), this.aTQ()
	}, this.tj = function() {
		return bL.bM.bN() && ao.ap < 1.2 * ao.ar
	}, this.fN = function() {
		this.tj() ? this.aD = ao.ap - ap - fx.gap : this.aD = Math.floor(h4.aJc() + (ao.ap - h4.aJc() - h8.ap - ap) / 2 - .5 * fx.gap)
	}, this.hM = function() {
		sv && (sv = !1, this.aTQ())
	}, this.aTQ = function() {
		sx.font = ss, sx.clearRect(0, 0, ap, this.ar), sx.fillStyle = aTM ? aTN : aTO, sx.fillRect(0, 0, ap, this.ar), sx.fillStyle = b7.t7;
		var jA = this.aTR(),
			aTT = (this.aTS(), sx.fillStyle = ci.iN[f.al] >= dV.ki(f.al) ? b7.aMy : b7.b9, v.bB.bC(a06)),
			aTT = (sx.fillText(aTT, Math.floor(ap / 2), aTP), sx.measureText(aTT).width),
			aTU = (sx.font = aTK, sx.fillStyle = 9 === jA ? b7.aP8 : b7.b9, dV.aCa),
			aTV = "+" + aTU,
			w7 = sx.measureText(aTV).width,
			aTW = Math.floor(this.ar / 12),
			aTT = .5 * (ap + aTT) + aTW;
		(aTT + w7 + aTJ <= ap || 1e3 <= aTU && (aTV = "+" + Math.floor(aTU / 1e3) + "K", aTT + (w7 = sx.measureText(aTV).width) + aTJ <= ap)) && sx.fillText(aTV, Math.floor(aTT + .5 * w7), Math.floor(.3 * this.ar)), __fx.settings
			.displayTickNumber && sx.fillText(9 - jA, Math.floor(2 * aTJ + aTW), Math.floor(.3 * this.ar)), sx.fillStyle = b7.b9, sx.fillRect(0, 0, ap, 1), sx.fillRect(0, 0, 1, this.ar), sx.fillRect(0, this.ar - 1, ap, 1), sx.fillRect(ap - 1, 0,
				1, this.ar)
	}, this.aTR = function() {
		var jA = bR.el() % 100,
			j8 = (jA = 9 - ds.kh(jA -= jA % 10, 10), Math.floor(jA * (this.ar - aTJ) / 9));
		return sx.fillRect(0, j8, aTJ, this.ar - j8), sx.fillRect(ap - aTJ, j8, aTJ, this.ar - j8), jA
	}, this.aTS = function() {
		sx.fillRect(aTJ, this.ar - aTJ, Math.floor((ap - 2 * aTJ) * ci.iN[f.al] / aTL), aTJ)
	}, this.bQ = function() {
		var es = f.al;
		v.cw.cy(es) && (es = ci.iN[es] - ci.j2[es], a06 !== es ? (aTL = vq(es, aTL), aTM = a06 < es && 10 <= es, a06 = es, sv = !0) : bR.el() % 10 == 9 && (sv = !0))
	}, this.aR = function() {
		0 === ci.hL[f.al] || f.gE || 2 === ci.it[f.al] || b5.drawImage(canvas, this.aD, aE)
	}
}

function aTX() {
	var aTY = new Uint16Array(f.g);

	function aTh(player, aTe) {
		for (var n = a9.a0c[0], a0h = a9.a0h, aRr = -1, aNq = f.g, q = 0; q < n; q++) {
			var aH, es = a0h[q];
			a4S.a2P(player, es) && (aH = cq.aQR(aTe, cq.aTn(es)), -1 === aRr || aH < aRr) && (aRr = aH, aNq = es)
		}
		return aNq
	}

	function aTj(aTg, aTe) {
		if (aTg === f.g) return 0;
		var cj = ci.cj[aTg],
			aL = cj.length;
		if (0 === aL) return 0;
		for (var n = Math.min(aL, 10), aNq = 0, aRr = cq.aQR(cj[aNq] >> 2, aTe), q = 0; q < n; q++) {
			var iW = ge.u0(aL),
				aH = cq.aQR(cj[iW] >> 2, aTe);
			aH < aRr && (aRr = aH, aNq = iW)
		}
		return cj[aNq] >> 2
	}

	function aTk(player, aTe, d7, aTo) {
		var aTp;
		(aTo === f.g || (aTp = cq.aTn(d7), aTo = cq.aTn(aTo), cq.aQR(aTe, aTp) < cq.aQR(aTe, aTo))) && (aTY[player] = d7)
	}
	this.e = function() {
		aTY.fill(f.g)
	}, this.aTZ = function() {
		if (bR.el() % 109 == 9 && !(ez.f0 < 20) && f.j && !(f5.yY() < ds.kh(8 * f.gD, 10))) {
			var a7o = f5.f6();
			if (l.m[a7o]) {
				f5.aD3(a7o);
				var n = a9.a0c[0];
				if (0 !== n)
					for (var a8 = a9.a0i, f2 = ez.f2, f0 = ez.f0, aTa = aTY, iW = ge.u0(n), q = 0; q < f0; q++) {
						var a3L = f2[q],
							a3M = a8[iW];
						v.cw.uX(a3L, a3M) && 512 === aTa[a3L] && (aTa[a3L] = a3M, iW = (iW + 1) % n)
					}
			}
		}
	}, this.bQ = function(player) {
		var aTe, aTi, aTg, aTb = function(player) {
			var d7 = aTY[player];
			if (d7 !== f.g) {
				if (v.cw.eq(d7) && ci.cj[d7]) return d7;
				aTY[player] = f.g
			}
			return f.g
		}(player);
		return function(player) {
			for (var f1 = ez.f2, aL = ez.f0, n = Math.min(aL, aL < 17 && 5 === ge.u0(20) ? 1 : 16), xx = ge.u0(aL), a0h = a9.a0h, cj = ci.cj, jB = 0, q = 0; q < n; q++) {
				var es = f1[(q + xx) % aL];
				es !== player && cj[es].length && (a0h[jB++] = es)
			}
			a9.a0c[0] = jB
		}(player), 0 !== a9.a0c[0] && (0 < (aTi = aTj(aTg = aTh(player, aTe = cq.aTf(player)), aTe)) && ae.da.aLQ(player, ae.co.aLS(aTi, aTe)) ? (aTk(player, aTe, aTg, aTb), !0) : 0 < (aTg = function(player, aTe) {
			for (var n = a9.a0c[0], a0h = a9.a0h, aTa = aTY, xx = 0, q = 0; q < n; q++) {
				var es = a0h[q],
					es = aTa[es];
				es !== f.g && v.cw.eq(es) && player !== es && a4S.a2P(player, es) && (a0h[xx++] = es)
			}
			return 0 !== (a9.a0c[0] = xx) ? aTj(aTh(player, aTe), aTe) : 0
		}(player, aTe)) && ae.da.aLQ(player, ae.co.aLS(aTg, aTe)) ? (aTk(player, aTe, a6.a25(aTg << 2), aTb), !0) : !!(0 < (aTi = aTj(aTb, aTe)) && ae.da.aLQ(player, ae.co.aLS(aTi, aTe))))
	}
}

function kq(kN, kt) {
	var mJ = document.createElement("div");

	function i9() {
		var q, aNR, ar, xx, jl, aTs = ao.ed * mJ.offsetWidth,
			aTu = new Float64Array(function(aTs) {
				var ap = .25 * v.w.a03(.6) * ao.bO;
				return Math.max(Math.floor(aTs / ap), 1)
			}(aTs)),
			a02 = fx.a02,
			aTv = (aTs - (aTu.length + 1) * fx.gap) / (aTu.length * ao.ed);
		for (aTu.fill(a02), q = 0; q < kt.length; q++) aNR = (jl = kt[q].mJ).style, ar = v.aN.min(aTu), xx = aTu.indexOf(ar), aNR.top = v.w.kU(ar), aNR.left = v.w.kU(a02 + xx * (aTv + a02)), aNR.width = v.w.kU(aTv), v.w.kV(jl, 5), aTu[xx] += jl
			.offsetHeight + 3 * a02;
		mJ.style.height = v.w.kU(v.aN.max(aTu) - 2 * a02)
	}
	this.aRa = mJ, this.a76 = kt, this.resize = function() {
		var q;
		for (q = 0; q < kt.length; q++) kt[q].resize();
		i9(), i9()
	}, mJ.style.width = "100%", mJ.style.maxWidth = "100%", kN.style.lineHeight = "1.5em", kN.style.overflowX = "hidden", kN.style.overflowY = "auto";
	for (var q = 0; q < kt.length; q++) mJ.appendChild(kt[q].mJ);
	kN.appendChild(mJ)
}

function aTw() {
	this.aFf = function(a8) {
		a8.fill(0)
	}, this.aRg = function(a8) {
		for (var n = a8.length, q = 0; q < n; q++) a8[q] = []
	}, this.aO = function(jU, ft) {
		for (var jV = a9.a0f, q = 0; q < 3; q++) jV[q] = ft * jU[q];
		return jV
	}, this.aP = function(jU, jV, aTx) {
		for (var aCT = 0, q = 0; q < 3; q++) aCT += Math.abs(jU[q] - jV[q]);
		return aTx <= aCT
	}, this.aQ = function(jU, aTy) {
		for (var q = 0; q < 3; q++) jU[q] = ds.dt(jU[q] + aTy, 0, 255);
		return jU
	}, this.t1 = function(a8, qj, qk) {
		qk = qk || a8.length - 1;
		for (var aCw = 0, q = qj = qj || 0; q <= qk; q++) aCw += a8[q];
		return aCw
	}, this.aTz = function(a8, aU0) {
		for (var q, aU1, n = a8.length, aU2 = [], bz = n - 1; 0 <= bz; bz--) {
			for (q = aU1 = 0; q < n; q++) aU0(a8[q]) < aU0(a8[aU1]) && (aU1 = q);
			n--, aU2.push(a8[aU1]), a8[aU1] = a8[n], a8.pop()
		}
		return aU2
	}, this.min = function(a8) {
		var q, kk, n = a8.length;
		if (0 === n) return 0;
		for (kk = a8[0], q = 1; q < n; q++) kk = Math.min(kk, a8[q]);
		return kk
	}, this.max = function(a8) {
		var n = a8.length;
		if (0 === n) return 0;
		for (var kk = a8[0], q = 1; q < n; q++) kk = Math.max(kk, a8[q]);
		return kk
	}, this.vR = function(a8, kk) {
		for (var n = a8.length, jB = 0, q = 0; q < n; q++) jB += a8[q] > kk;
		return jB
	}, this.aU3 = function(tO, tP, min) {
		for (var n = tP[0], q = n - 1; 0 <= q; q--) tO[q] < min && (tO[q] = tO[--n]);
		tP[0] = n
	}, this.aU4 = function(a8, n, value) {
		for (var q = 0; q < n; q++) a8[q] -= value
	}, this.sT = function(a8) {
		for (var n = a8.length, q = 0; q < n; q++)
			if ("string" != typeof a8[q]) return !1;
		return !0
	}, this.oZ = function(lI, a8, aU5) {
		a8.fill(0);
		for (var kj = lI.split(","), n = Math.min(kj.length, a8.length), q = 0; q < n; q++) a8[q] = Math.min(parseInt(kj[q]), aU5)
	}, this.tw = function(lI, a8, k4) {
		a8.fill("");
		for (var kj = lI.split('"'), n = Math.min(kj.length, 2 * a8.length), iW = 0, q = 1; q < n; q += 2) a8[iW++] = kj[q].slice(0, k4)
	}, this.vQ = function(a8, jB) {
		if (0 === jB) a8.fill(0);
		else {
			var aCw = this.t1(a8),
				n = a8.length;
			if (0 === aCw) a8.fill(ds.kh(jB, n));
			else
				for (var q = 0; q < n; q++) a8[q] = ds.kh(jB * a8[q], aCw);
			if (0 === (aCw = this.t1(a8))) a8[1] = jB;
			else
				for (var iW = 0; aCw++ < jB;) a8[iW = (iW + 1) % n] && a8[iW]++
		}
	}, this.a32 = function(a8) {
		if (!a8) return 0;
		var n = a8.length;
		if (0 === n) return 0;
		for (var kk = a8[n - 1], q = n - 2; 0 <= q; q--)
			if (a8[q] !== kk) return q + 2;
		return 1
	}, this.nI = function(a8) {
		for (var aCw = 0, q = 0; q < a8.length; q++) aCw += a8[q].length;
		return aCw
	}, this.aON = function(aU6) {
		for (var a8 = [], q = 0; q < aU6.length; q++) a8 = a8.concat(aU6[q]);
		return a8
	}, this.has = function(a8, kk) {
		for (var n = a8.length, q = 0; q < n; q++)
			if (a8[q] === kk) return !0;
		return !1
	}
}

function a5j() {
	this.w = new aQ4, this.aN = new aTw, this.cw = new aK9, this.bB = new aU7, this.sx = new aU8, this.aAM = new aPJ, this.canvas = new aU9, this.color = new aUA, this.aUB = new aUC, this.e = function() {
		this.w.aQ6()
	}
}

function a65() {
	var aUD = [
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
		aUE = [
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
	this.aUF = null, this.aUG = null, this.aUH = null, this.aUI = null, this.aUJ = null, this.aUK = null, this.aUL = null, this.aUM = null, this.aUN = null, this.aUO = null;

	function aUU(jh, eT) {
		for (var aUF = a6.aUF, aUG = a6.aUG, aUH = a6.aUH, q = jh; q < eT; q++) aUF[q] = ds.kh(64 * ge.random(), ge.value(100)) << 2, aUG[q] = ds.kh(64 * ge.random(), ge.value(100)) << 2, aUH[q] = ds.kh(64 * ge.random(), ge.value(100)) << 2
	}

	function aUT(jh, eT) {
		for (var colorsData = f.data.colorsData, aUF = a6.aUF, aUG = a6.aUG, aUH = a6.aUH, q = jh; q < eT; q++) {
			var kk = colorsData[q];
			aUF[q] = 4 * (kk >> 12), aUG[q] = 4 * (kk >> 6 & 63), aUH[q] = 4 * (63 & kk)
		}
	}

	function aUh(a3, aUj) {
		vD[a3] = 0, vD[a3 + 1] = 0, vD[a3 + 2] = aUj, vD[a3 + 3] = 0, aUk(a3)
	}

	function aUk(a3) {
		var aD;
		gr.zy || (aD = a6.fS(a3), a3 = a6.fT(a3), gr.zy = aD >= fq.a8I[0] && aD <= fq.a8I[2] && a3 >= fq.a8I[1] && a3 <= fq.a8I[3])
	}
	this.a23 = new Int32Array(4), this.aUS = new Int32Array(8), this.go = function() {
		var a23 = this.a23,
			a23 = (a23[0] = -4 * au.av, a23[1] = 4, a23[2] = -a23[0], a23[3] = -a23[1], this.aUS);
		a23[0] = -4 * au.av - 4, a23[1] = -4 * au.av, a23[2] = -4 * au.av + 4, a23[3] = -4, a23[4] = 4, a23[5] = 4 * au.av - 4, a23[6] = 4 * au.av, a23[7] = 4 * au.av + 4
	}, this.e = function() {
		if (this.aUF ? (this.aUF.fill(0), this.aUG.fill(0), this.aUH.fill(0), this.aUI.fill(0), this.aUJ.fill(0), this.aUK.fill(0), this.aUL.fill(0), this.aUM.fill(0), this.aUN.fill(0), this.aUO.fill(0), this.iG.fill(0)) : (this.aUF =
				new Uint8Array(f.g), this.aUG = new Uint8Array(f.g), this.aUH = new Uint8Array(f.g), this.aUI = new Uint8Array(f.g), this.aUJ = new Uint8Array(f.g), this.aUK = new Uint8Array(f.g), this.aUL = new Uint8Array(f.g), this.aUM =
				new Uint8Array(f.g), this.aUN = new Uint8Array(f.g), this.aUO = new Uint8Array(f.g), this.iG = new Uint8Array(f.g)), f.j)
			for (var p = l.p, aUF = a6.aUF, aUG = a6.aUG, aUH = a6.aUH, q = f.g - 1; 0 <= q; q--) {
				var jA = p[q],
					aL = ds.kh((aUE[jA][3] + 1) * ge.random(), ge.value(100));
				aUF[q] = aUD[jA][0] + aL * aUE[jA][0], aUG[q] = aUD[jA][1] + aL * aUE[jA][1], aUH[q] = aUD[jA][2] + aL * aUE[jA][2]
			} else 0 === f.data.colorsType ? f.data.selectableColor ? (aUT(0, f.g4), aUU(f.g4, f.g)) : aUU(0, f.g) : aUT(0, f.g);
		! function() {
			var q, jl, aUF = a6.aUF,
				aUG = a6.aUG,
				aUH = a6.aUH;
			for (q = f.g - 1; 0 <= q; q--) jl = ds.kh(aUF[q] + aUG[q] + aUH[q], 3), aUF[q] += v5(jl - aUF[q], 2), aUG[q] += v5(jl - aUG[q], 2), aUH[q] += v5(jl - aUH[q], 2), aUF[q] -= aUF[q] % 4, aUG[q] -= aUG[q] % 4, aUH[q] -= aUH[q] % 4
		}(),
		function() {
			for (var n = f.g, aUF = a6.aUF, aUG = a6.aUG, aUH = a6.aUH, aUI = a6.aUI, q = 0; q < n; q++) aUF[q] += q >> 7, aUG[q] += q >> 5 & 3, aUH[q] += q >> 3 & 3, aUI[q] = 7 & q
		}(), this.aUX(),
			function() {
				for (var n = f.g, aUJ = a6.aUJ, aUK = a6.aUK, aUL = a6.aUL, aUF = a6.aUF, aUG = a6.aUG, aUH = a6.aUH, q = 0; q < n; q++) {
					var pW = aUF[q],
						kj = aUG[q],
						jO = aUH[q];
					60 <= pW + kj + jO ? (aUJ[q] = Math.max(pW - 40, 3 & pW), aUK[q] = Math.max(kj - 40, 3 & kj), aUL[q] = Math.max(jO - 40, 3 & jO)) : (aUJ[q] = pW + 40, aUK[q] = kj + 40, aUL[q] = jO + 40)
				}
			}(),
			function() {
				for (var n = f.g, aUM = a6.aUM, aUN = a6.aUN, aUO = a6.aUO, aUF = a6.aUF, aUG = a6.aUG, aUH = a6.aUH, q = 0; q < n; q++) {
					var pW = aUF[q],
						kj = aUG[q],
						jO = aUH[q];
					688 <= pW + kj + jO ? (aUM[q] = pW - 88, aUN[q] = kj - 88, aUO[q] = jO - 88) : (aUM[q] = Math.min(pW + 88, 252 + (3 & pW)), aUN[q] = Math.min(kj + 88, 252 + (3 & kj)), aUO[q] = Math.min(jO + 88, 252 + (3 & jO)))
				}
			}()
	}, this.a7 = function(player) {
		var a8 = a9.aA;
		return a8[0] = this.aUF[player], a8[1] = this.aUG[player], a8[2] = this.aUH[player], a8
	}, this.aUX = function() {
		for (var q = f.g - 1; 0 <= q; q--) this.iG[q] = this.aUF[q] + this.aUG[q] + this.aUH[q] < 280 ? 0 : 1
	}, this.fS = function(a3) {
		return ds.kh(a3, 4) % au.av
	}, this.fT = function(a3) {
		return ds.kh(a3, 4 * au.av)
	}, this.a8J = function(aD, aE) {
		return Math.floor(4 * (aE * au.av + aD))
	}, this.a98 = function(a3) {
		var a23 = this.a23;
		return this.a2D(a3 + a23[0]) || this.a2D(a3 + a23[1]) || this.a2D(a3 + a23[2]) || this.a2D(a3 + a23[3])
	}, this.a4e = function(a3) {
		var a23 = this.a23;
		return this.a4U(a3 + a23[0]) || this.a4U(a3 + a23[1]) || this.a4U(a3 + a23[2]) || this.a4U(a3 + a23[3])
	}, this.a97 = function(a3, player) {
		var a23 = this.a23;
		return this.a2C(a3 + a23[0], player) || this.a2C(a3 + a23[1], player) || this.a2C(a3 + a23[2], player) || this.a2C(a3 + a23[3], player)
	}, this.aUa = function(q, aUb, aUc, aUd) {
		this.aUF[q] = aUb >> 16, this.aUG[q] = aUb >> 8 & 255, this.aUH[q] = 255 & aUb, this.aUJ[q] = aUc >> 16, this.aUK[q] = aUc >> 8 & 255, this.aUL[q] = 255 & aUc, this.aUM[q] = aUd >> 16, this.aUN[q] = aUd >> 8 & 255, this.aUO[q] = 255 & aUd
	}, this.aUe = function(q) {
		return [(this.aUF[q] << 16) + (this.aUG[q] << 8) + this.aUH[q], (this.aUJ[q] << 16) + (this.aUK[q] << 8) + this.aUL[q], (this.aUM[q] << 16) + (this.aUN[q] << 8) + this.aUO[q]]
	}, this.a24 = function(a3) {
		return 208 <= vD[a3 + 3]
	}, this.jm = function(player, a3) {
		return this.a24(a3) && this.a2L(player, a3)
	}, this.a2L = function(player, a3) {
		return player === this.a25(a3)
	}, this.a2M = function(a3) {
		return 208 <= vD[a3 + 3] && vD[a3 + 3] < 224
	}, this.a2S = function(a3) {
		return 224 <= vD[a3 + 3] && vD[a3 + 3] < 248
	}, this.aUf = function(a3) {
		return 248 <= vD[a3 + 3]
	}, this.a1p = function(a3) {
		for (var a23 = this.a23, q = 3; 0 <= q; q--)
			if (this.a1n(a3 + a23[q])) return !0;
		return !1
	}, this.cs = function(a3) {
		return this.a24(a3) || this.fB(a3)
	}, this.a1n = function(a3) {
		return 0 === vD[a3 + 3] && 2 === vD[a3 + 2]
	}, this.fB = function(a3) {
		return 0 === vD[a3 + 3] && 1 === vD[a3 + 2]
	}, this.aFm = function(a3) {
		return 0 === vD[a3 + 3] && 3 === vD[a3 + 2]
	}, this.a4U = function(a3) {
		return 0 === vD[a3 + 3] && 5 === vD[a3 + 2]
	}, this.a2D = function(a3) {
		return 0 === vD[a3 + 3] && 3 <= vD[a3 + 2]
	}, this.uV = function(a3) {
		return (vD[a3] >> 1 << 8) + vD[a3 + 1]
	}, this.aUg = function(a3) {
		return 1 & vD[a3]
	}, this.a2C = function(a3, player) {
		return this.fB(a3) || this.a24(a3) && player !== this.a25(a3)
	}, this.a25 = function(a3) {
		return ((3 & vD[a3]) << 7) + ((3 & vD[a3 + 1]) << 5) + ((3 & vD[a3 + 2]) << 3) + (7 & vD[a3 + 3])
	}, this.a9D = function(a3) {
		aUh(a3, 1)
	}, this.aUi = function(a3) {
		aUh(a3, 2)
	}, this.a2E = function(a3, player) {
		vD[a3] = this.aUF[player], vD[a3 + 1] = this.aUG[player], vD[a3 + 2] = this.aUH[player], vD[a3 + 3] = 208 + this.aUI[player], aUk(a3)
	}, this.a2N = function(a3, player) {
		vD[a3] = this.aUJ[player], vD[a3 + 1] = this.aUK[player], vD[a3 + 2] = this.aUL[player], vD[a3 + 3] = 224 + this.aUI[player], aUk(a3)
	}, this.a26 = function(a3, player) {
		vD[a3] = this.aUM[player], vD[a3 + 1] = this.aUN[player], vD[a3 + 2] = this.aUO[player], vD[a3 + 3] = 248 + this.aUI[player], aUk(a3)
	}
}

function a6i() {
	this.aUl = 0, this.aUm = 0, this.aUn = 0, this.aUo = 0, this.aUp = 0, this.aUq = 0, this.a8I = [0, 0, 0, 0], this.fr = function() {
		this.aUl = eZ.fS(), this.aUm = eZ.fT(), this.aUn = -this.aUl, this.aUo = -this.aUm, this.aUp = ao.ap / ay, this.aUq = ao.ar / ay, this.a8I[0] = Math.floor(this.aUn), this.a8I[1] = Math.floor(this.aUo), this.a8I[2] = Math.floor(this.a8I[
			0] + this.aUp + 1), this.a8I[3] = Math.floor(this.a8I[1] + this.aUq + 1), gr.a8G = !0
	}
}

function a5r() {
	this.e = function() {
		if (0 === f.data.sResourcesType) {
			for (var a2W = f.g4, iN = ci.iN, q = 0; q < a2W; q++) iN[q] = 512;
			var a2X = f.g8,
				aUu = gv.aUu,
				aW = gv.aW;
			for (q = a2W; q < a2X; q++) iN[q] = aUu[aW[q]]
		} else(1 === f.data.sResourcesType ? function() {
			for (var n = f.g8, iN = ci.iN, sResourcesValue = f.data.sResourcesValue, q = 0; q < n; q++) iN[q] = sResourcesValue
		} : function() {
			for (var n = f.g8, iN = ci.iN, sResourcesData = f.data.sResourcesData, q = 0; q < n; q++) iN[q] = sResourcesData[q]
		})();
		dL.a46[8] = ci.iN[f.al]
	}
}

function sD() {
	this.a8 = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.a4r = function() {
		for (var aUv = [], a8 = this.a8, n = a8.length, q = 0; q < n; q++) aUv.push(a8[q]);
		var aUw = fa.fE.data[12].aFM;
		for (q = 0; q < n; q++)
			if (aUv[q] === aUw) {
				aUv.splice(q, 1), n--;
				break
			} aUv.sort(), n++, aUv.unshift(aUw);
		try {
			if ("undefined" == typeof Intl) return aUv;
			for (q = 0; q < n; q++) {
				var lI = new Intl.DisplayNames([aUv[q]], {
					type: "language"
				}).of(aUv[q]);
				lI !== aUv[q] && (aUv[q] = aUv[q] + ": " + lI)
			}
		} catch (eL) {
			console.log("error 3646: " + eL)
		}
		return aUv
	}, this.a4s = function(hx) {
		for (var lI = fa.fE.data[12].value, n = hx.length, q = 0; q < n; q++)
			if (lI === hx[q].split(":")[0]) return q;
		return 0
	}, this.sh = function(aUy) {
		if (aUy && !(aUy.length < 2)) {
			aUy = aUy.split("-")[0].toLowerCase();
			for (var a8 = this.a8, n = a8.length, q = 0; q < n; q++)
				if (aUy === a8[q]) return q
		}
		return -1
	}
}

function aUz() {
	this.aNH = function() {
		fa.af.aA2(), fa.l9.lA(105, lz.m0.m1(lz.m0.m2(5))), fa.l9.lA(106, lz.m0.m1(lz.m0.m2(15))), fa.l9.lA(109, 0), fa.l9.lA(108, fa.fE.data[109].value), fa.l9.lA(111, fa.fE.data[109].value + 1), fa.l9.lA(107, 0), fa.l9.lA(110, "")
	}, this.aNJ = function() {
		var data;
		bo.size < ln.lo(29) ? bg.af.pL(0, 3254) : ((data = {
			a1O: bo.bp(30),
			aHw: bo.bp(16),
			aHx: bo.bp(30),
			aHy: bo.bp(30),
			aHm: bo.bp(30),
			rI: bo.lk(32),
			username: c1.c2.c3(5),
			aIP: c1.c2.c3(3),
			aIW: c1.c2.c3(3),
			aIO: bo.lk(32),
			aIV: bo.lk(32),
			aIQ: bo.bp(30),
			aIS: bo.lk(32),
			aIX: bo.lk(32),
			aIU: bo.lk(32),
			aIY: bo.lk(32),
			aI2: bo.lk(32),
			aI3: bo.lk(30),
			aIZ: bo.lk(32),
			aIa: c1.c2.c3(3),
			aIJ: bo.lk(2),
			aIL: bo.lk(10),
			aIH: c1.c2.c3(8),
			aIK: bo.lk(5),
			aHk: bo.bp(30),
			aHz: bo.bp(30),
			a7E: bo.lk(32),
			aI8: bo.bp(3),
			aI7: bo.bp(8),
			aI0: bo.bp(30),
			aI1: bo.lk(32),
			aI6: bo.bp(1),
			aIF: c1.c2.c3(6),
			aIb: bo.bp(1),
			aIc: bo.bp(1)
		}).aIb && (data.aId = bo.lk(32), data.aIe = bo.bp(30), data.aIf = bo.bp(30), data.aIg = bo.bp(1)), 8 === c4.rR && (25 === c4.mt().aV0 ? (data.aHS = !0, c4.af.aIv = data, c4.mt().sc(25, !1)) : (data.aHS = !1, fa.l9.lA(160, +(data
			.aIb && data.aIg)), data.cW = fa.fE.data[105].value, c4.af.aIs = data, fa.l9.aV1(data), c4.mt().sc(16, !0))))
	}
}

function a6n() {
	this.ap = 0, this.ar = 0, this.t3 = 0, this.w7 = 0, this.aV2 = 0, this.aV3 = 0, this.lX = 0, this.lY = 0;
	var aV5 = this.aV4 = 0;
	this.aV6 = 0, this.aV7 = 0, this.aV8 = 0, this.a9n = 0, this.t = 0, this.y6 = null, this.xX = !1, this.aV9 = -1, this.aVA = !1, this.aVB = [0, 0], this.go = function() {
		this.y6 = [L(425), L(64, 0, "Balance"), L(63, 0, "Interest"), L(426)]
	}, this.e = function() {
		this.xX = !1, this.aV9 = -1, this.aVA = !1, this.resize()
	}, this.resize = function() {
		this.ap = ao.ap < 1.369 * ao.ar ? ao.ap : 1.369 * ao.ar;
		var jl = bL.bM.bN() && ao.ap < ao.ar ? 1 : bL.bM.bN() ? .8 : ao.ap < ao.ar ? .65 : .59;
		this.ap = Math.floor(jl * this.ap), this.ap -= bL.bM.bN() && ao.ap < ao.ar ? 2 * fx.gap + 2 : 0, this.ar = Math.floor(this.ap / 1.369), this.a9n = Math.floor(this.ar / 150), this.a9n = Math.max(this.a9n, 1.5), this.t3 = Math.floor(1 +
			.02 * this.ap), this.w7 = Math.floor(1 + .04 * this.ap), this.lX = this.w7, aV5 = Math.floor(.75 * this.lX), this.lY = Math.floor(1 + .075 * this.ap), this.aV6 = Math.floor(1 + .1125 * this.ap), this.aV7 = Math.floor(this.ap * (bL
			.bM.bN() ? .03 : .029)), this.aV7 = Math.max(this.aV7, 4), this.aV8 = Math.floor(.035 * this.ap), this.aV8 = Math.max(this.aV8, 4), this.aV4 = this.ar - 2 * this.lX - this.lY - this.aV6, this.xX && this.aVC()
	}, this.fY = function(fg, fh) {
		var j8, j7;
		return !!this.xX && (j7 = fg, j8 = fh, fg -= ds.kh(ao.ap - this.ap, 2), fh -= ds.kh(ao.ar - this.ar, 2), fg < 0 || fh < 0 || fg >= this.ap || fh >= this.ar || fg >= this.ap - this.aV6 && fh < this.aV6 ? -1 !== e2.fY(j7, j8) || h6.fY(j7,
			j8) || this.eP() : fh < this.aV6 || (fh < this.ar - this.lY ? (this.aVA = !0, this.aV9 = (fg - 2 * this.t3 - this.aV2) / this.aV3, 3 !== this.t && (bR.bS = !0)) : (j7 = (j7 = Math.floor(fg / (this.ap / this.y6.length))) < 0 ?
			0 : j7 >= this.y6.length ? this.y6.length - 1 : j7) !== this.t && (this.t = j7, this.aVC(), bR.bS = !0)), !0)
	}, this.fc = function(fg, fh) {
		return this.aVB[0] = fg, this.aVB[1] = fh, !(!this.xX || !this.aVA || (fg -= ds.kh(ao.ap - this.ap, 2), fh = this.aV9, this.aV9 = (fg - 2 * this.t3 - this.aV2) / this.aV3, (0 <= this.aV9 && this.aV9 <= 1 || 0 <= fh && fh <= 1) && (bR
			.bS = !0), 0))
	}, this.vy = function() {
		this.aVA && (this.aVA = !1)
	}, this.xn = function() {
		this.xX ? this.eP() : this.show()
	}, this.show = function() {
		dL.aVD < 2 || (this.xX = !0, this.aVC())
	}, this.eP = function() {
		this.xX = !1, this.aV9 = -1, bR.bS = !0
	}, this.aVC = function() {
		this.t < 2 ? this.aV2 = ba.measureText(v.bB.bC(dL.max[this.t]), v.w.bA(0, this.aV7)) : 2 === this.t && (this.aV2 = ba.measureText(v.bB.yO(6, 2), v.w.bA(0, this.aV7))), this.aV3 = this.ap - 2 * this.t3 - this.aV2 - this.w7
	}, this.kE = function() {
		this.xX && this.aVC()
	}, this.aR = function() {
		this.xX && this.aVE()
	}, this.aVE = function() {
		var aD = ds.kh(ao.ap - this.ap, 2),
			aE = ds.kh(ao.ar - this.ar, 2);
		b5.setTransform(1, 0, 0, 1, aD, aE), b5.fillStyle = b7.ex, b5.fillRect(0, this.aV6, this.ap, this.ar - this.aV6), this.aVF(), this.aLt(), b5.strokeRect(0, 0, this.ap, this.ar), v.w.textAlign(b5, 2), b5.font = v.w.bA(0, this.aV7), 0 ===
			this.t ? this.aVG(dL.aVH, aD, aE) : 1 === this.t ? this.aVG(dL.a06, aD, aE) : 2 === this.t ? this.aVI(aD, aE) : 3 === this.t && (this.aVJ(aD, aE), this.aVK(aD, aE)), e2.aVL(Math.floor(aD + this.ap - .725 * this.aV6), Math.floor(aE +
				.275 * this.aV6), Math.floor(.45 * this.aV6)), b5.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVF = function() {
		var q, bT;
		for (b5.lineWidth = this.a9n, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.strokeStyle = b7.b9, b5.font = v.w.bA(1, this.aV8), bT = this.ap / this.y6.length, b5.fillStyle = b7.a9Q, b5.fillRect(this.t * bT, this.ar - this.lY, bT, this
				.lY), b5.fillStyle = b7.b9, b5.fillRect(0, this.ar - this.lY - .5 * this.a9n, this.ap, this.a9n), q = 1; q <= 3; q++) b5.fillRect(q * bT, this.ar - this.lY, this.a9n, this.lY);
		for (q = this.y6.length - 1; 0 <= q; q--) b5.fillText(v.sx.yJ(this.y6[q], 0, .9 * bT), (q + .5) * bT, this.ar - .46 * this.lY)
	}, this.aLt = function() {
		b5.fillStyle = b7.aOx, b5.fillRect(0, 0, this.ap, this.aV6), b5.fillStyle = b7.b9, b5.fillRect(0, this.aV6 - .5 * this.a9n, this.ap, this.a9n), b5.font = v.w.bA(1, .39 * this.aV6), b5.fillText(v.sx.yJ(L(427), 0, .8 * this.ap), Math.floor(
			this.ap / 2), Math.floor(.55 * this.aV6))
	}, this.aVG = function(a8, aD, aE) {
		var aL = dL.max[this.t],
			ft = (b5.setTransform(1, 0, 0, 1, aD + 2 * this.t3 + this.aV2, aE + this.lX + this.aV6), b5.lineWidth = 2, this.aV4 / Math.sqrt(aL));
		b5.beginPath(), b5.moveTo(this.aV3, this.aV4 - ft * Math.sqrt(a8[dL.aVD - 1]));
		for (var q = dL.aVD - 2; 0 <= q; q--) b5.lineTo(q * this.aV3 / (dL.aVD - 1), this.aV4 - ft * Math.sqrt(a8[q]));
		b5.stroke();
		aD = this.aVL(a8, ft, .5);
		aD < .95 && b5.fillText(v.bB.bC(aL), -this.t3, 0), .05 < Math.abs(aD - .5) && b5.fillText(v.bB.bC(Math.floor(aL / 4)), -this.t3, Math.floor(this.aV4 / 2)), .05 < aD && b5.fillText("0", -this.t3, this.aV4)
	}, this.aVI = function(aD, aE) {
		b5.setTransform(1, 0, 0, 1, aD + 2 * this.t3 + this.aV2, aE + this.lX + this.aV6), b5.lineWidth = 2;
		var ft = this.aV4 / Math.max(dL.max[this.t], 1);
		b5.beginPath(), b5.moveTo(this.aV3, this.aV4 - ft * dL.yd[dL.aVD - 1]);
		for (var q = dL.aVD - 2; 0 <= q; q--) b5.lineTo(q * this.aV3 / (dL.aVD - 1), this.aV4 - ft * dL.yd[q]);
		b5.stroke();
		aD = this.aVL(dL.yd, ft, 1), aE = dL.max[this.t] / 100;
		aD < .95 && b5.fillText(v.bB.yO(aE, 2), -this.t3, 0), .05 < Math.abs(aD - .5) && b5.fillText(v.bB.yO(aE / 2, 2), -this.t3, Math.floor(this.aV4 / 2)), .05 < aD && b5.fillText(v.bB.yO(0, 2), -this.t3, this.aV4)
	}, this.aVJ = function(aD, aE) {
		b5.setTransform(1, 0, 0, 1, aD + .34 * this.ap, aE + 2 * aV5 + this.aV6), v.w.textAlign(b5, 2);
		for (var aJp = this.ar - 4 * aV5 - this.lY - this.aV6, a8 = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], q = 9; 0 <= q; q--) b5.fillText(v.sx.yJ(dL.aVM[a8[q]], 0, .31 * this.ap), 0, q * aJp / 9);
		var kk = dL.a46;
		for (b5.setTransform(1, 0, 0, 1, aD + .39 * this.ap, aE + 2 * aV5 + this.aV6), v.w.textAlign(b5, 0), b5.fillText(v.bB.yO(100 * kk[0] / (1024 * Math.max(kk[1], 1)), 1), 0, 0), q = 8; 1 <= q; q--) b5.fillText(kk[a8[q]].toString(), 0, q *
			aJp / 9);
		b5.fillText(v.bB.yO(100 * (1 - ci.iF[f.al] / kk[7]), 0), 0, aJp)
	}, this.aVK = function(aD, aE) {
		b5.setTransform(1, 0, 0, 1, aD + .79 * this.ap, aE + 2 * aV5 + this.aV6), v.w.textAlign(b5, 2);
		var q, aJp = this.ar - 4 * aV5 - this.lY - this.aV6;
		for (b5.fillStyle = b7.aOl, q = 2; 0 <= q; q--) b5.fillText(v.sx.yJ(dL.aVM[q + 8], 0, .31 * this.ap), 0, q * aJp / 9);
		b5.fillText(v.sx.yJ(dL.aVM[18], 0, .31 * this.ap), 0, 3 * aJp / 9), b5.fillStyle = b7.aOk, b5.fillText(v.sx.yJ(dL.aVM[11], 0, .31 * this.ap), 0, 4 * aJp / 9), b5.fillStyle = b7.tC, b5.fillText(v.sx.yJ(dL.aVM[13], 0, .31 * this.ap), 0, 5 *
				aJp / 9), b5.fillText(v.sx.yJ(dL.aVM[15], 0, .31 * this.ap), 0, 6 * aJp / 9), b5.fillText(v.sx.yJ(dL.aVM[16], 0, .31 * this.ap), 0, 7 * aJp / 9), b5.fillText(v.sx.yJ(dL.aVM[12], 0, .31 * this.ap), 0, 8 * aJp / 9), b5.fillStyle =
			b7.b8, b5.fillText(v.sx.yJ(dL.aVM[17], 0, .31 * this.ap), 0, aJp), b5.fillStyle = b7.aOl;
		var kk = dL.a46,
			aOO = kk[8] + kk[9] + kk[10] + kk[18],
			aOO = v.bB.bC(aOO),
			aVN = b5.measureText(aOO).width,
			aD = (b5.setTransform(1, 0, 0, 1, aD + .83 * this.ap + aVN, aE + 2 * aV5 + this.aV6), b5.fillText(v.bB.bC(kk[8]), 0, 0), b5.fillText(v.bB.bC(kk[9]), 0, aJp / 9), b5.fillText(v.bB.bC(kk[10]), 0, 2 * aJp / 9), b5.fillText(v.bB.bC(kk[
				18]), 0, 3 * aJp / 9), b5.fillStyle = b7.aOk, b5.fillText(aOO, 0, 4 * aJp / 9), b5.fillStyle = b7.tC, b5.fillText(v.bB.bC(kk[13]), 0, 5 * aJp / 9), b5.fillText(v.bB.bC(kk[15]), 0, 6 * aJp / 9), b5.fillText(v.bB.bC(kk[16]), 0,
				7 * aJp / 9), b5.fillText(v.bB.bC(kk[12]), 0, 8 * aJp / 9), kk[12] + kk[13] + kk[15] + kk[16]);
		b5.fillStyle = b7.b8, b5.fillText(v.bB.bC(aD), 0, aJp), b5.fillStyle = b7.b9
	}, this.aVL = function(a8, ft, vi) {
		var q, eL, o2;
		return this.aV9 < 0 || 1 < this.aV9 ? .25 : (q = this.aV9 * (dL.aVD - 1), o2 = a8[eL = Math.floor(q)], o2 += (q - eL) * (a8[eL < dL.aVD - 1 ? eL + 1 : eL] - o2), b5.strokeStyle = b7.vz, .04 < this.aV9 && this.aVP(0, this.aV4 - ft * Math
				.pow(o2, vi), q * this.aV3 / (dL.aVD - 1), this.aV4 - ft * Math.pow(o2, vi)), .04 < o2 / dL.max[this.t] && this.aVP(q * this.aV3 / (dL.aVD - 1), this.aV4, q * this.aV3 / (dL.aVD - 1), this.aV4 - ft * Math.pow(o2, vi)), b5
			.fillStyle = b7.aOs, b5.beginPath(), b5.arc(q * this.aV3 / (dL.aVD - 1), this.aV4 - ft * Math.pow(o2, vi), Math.max(2, .014 * this.ar), 0, 2 * Math.PI), b5.fill(), a8 = this.aV9 * bR.nq, a8 = 0 === ci.hL[f.al] ? Math.floor(a8 * dL
				.aVQ) : Math.floor(a8 * bR.el()), b5.fillStyle = b7.b9, b5.fillText(1 === vi ? v.bB.yO(o2 / 100, 2) : v.bB.bC(Math.floor(o2)), -this.t3, this.aV4 - ft * Math.pow(o2, vi)), v.w.textAlign(b5, 1), b5.fillText(h8.yP(a8), q * this
				.aV3 / (dL.aVD - 1), this.aV4 + this.aV7 - (bL.bM.bN() ? 2 : 0) - this.a9n), v.w.textAlign(b5, 2), ft * Math.pow(o2, vi) / this.aV4)
	}, this.aVP = function(az, b1, b3, b4) {
		b5.beginPath(), b5.moveTo(az, b1), b5.lineTo(b3, b4), b5.stroke()
	}
}

function aU7() {
	var aVR = {
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
		aVS = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.kC = function(r0) {
		return r0.replace(aVS, function(match) {
			return aVR[match] || match
		})
	}, this.bC = function(kk) {
		var q, aVT, aVU, aVV, aVW;
		if (kk < 0) return "-" + this.bC(Math.abs(kk));
		if (kk < 1e3) return kk.toString();
		for (aVT = Math.floor(Math.log(kk + .5) / Math.log(10)) + 1, aVU = Math.floor((aVT - 1) / 3), aVW = (aVV = kk.toString()).substring(aVT - 3, aVT), q = 1; q < aVU; q++) aVW = aVV.substring(aVT - 3 * (q + 1), aVT - 3 * q) + " " + aVW;
		return aVV.substring(0, aVT - 3 * aVU) + " " + aVW
	}, this.yO = function(es, aVT) {
		return es.toFixed(aVT) + "%"
	}, this.aVX = function(kk, aVY) {
		return kk.toFixed(ds.dt(Math.floor((void 0 === aVY ? 3 : aVY) - Math.log10(Math.max(kk, 1))), 0, 8))
	}, this.aHl = function(kk, fi, aVT) {
		return (kk * fi).toFixed(aVT)
	}, this.rV = function(username) {
		var aV, ax = username.indexOf("[");
		return !(ax < 0) && 1 < (aV = username.indexOf("]")) - ax && aV - ax <= 8 ? username.substring(ax + 1, aV).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.rV;
	this.aBs = function(lI) {
		for (var bz = Math.floor(.5 * lI.length + .5), eT = Math.floor(.5 * (bz - 1)), q = 0; q < eT; q++)
			for (var jO = -1; jO < 2; jO += 2) {
				var jA = bz + jO * q;
				if (" " === lI[jA]) return [this.a7U(lI.substring(0, jA)), this.aVZ(lI.substring(jA))]
			}
		return [lI.substring(0, bz), lI.substring(bz)]
	}, this.aVZ = function(lI) {
		for (var n = lI.length, q = 0; q < n; q++)
			if (" " !== lI[q]) return lI.substring(q);
		return lI
	}, this.a7U = function(lI) {
		for (var q = lI.length - 1; 0 <= q; q--)
			if (" " !== lI[q]) return lI.substring(0, q + 1);
		return lI
	}, this.aVa = function(lI, aLY) {
		return lI.split("(")[0] + "(🧈 " + aLY.toFixed(2) + ")"
	}, this.startsWith = function(lI, aVb) {
		return lI.substring(0, aVb.length) === aVb
	}, this.mr = function(lI, aVb) {
		var n = lI.length;
		return lI.substring(n - aVb.length, n) === aVb
	}, this.ok = function(a8, aVc, aVd) {
		var lI = "",
			n = a8.length - 1;
		aVd = aVd || "";
		for (var q = 0; q < n; q++) lI += aVd + a8[q] + aVd + ",", (q + 1) % aVc == 0 && (lI += "\n");
		return lI += aVd + a8[n] + aVd
	}, this.m3 = function(lI, jU, jV) {
		return lI.replace(new RegExp(jU, "g"), jV)
	}
}

function a5h() {
	this.kh = function(bz, jO) {
		return Math.floor((bz + .5) / jO)
	}, this.aVe = function(bz, jO) {
		return Math.floor(bz * (jO + .5))
	}, this.sqrt = function(kk) {
		return ~~Math.sqrt(kk + .5)
	}, this.pow = function(eL) {
		return Math.floor(Math.pow(2, eL) + .5)
	}, this.dt = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aVf = function(o2, o4, o6) {
		return Math.max(Math.min(o2, o4), o6)
	}, this.aVg = function(aVh, aVi, aD, aE) {
		aD -= aVh, aVh = aE - aVi, aE = 0;
		return 0 == aD ? aE = 0 <= aVh ? Math.PI : 0 : (aE = Math.atan(aVh / aD), aE += 0 < aD ? .5 * Math.PI : 1.5 * Math.PI), aE
	}, this.log2 = function(kk) {
		return Math.floor(!!kk * (1 + Math.log2(kk + .5)))
	}, this.log10 = function(kk) {
		return Math.floor(Math.log10(kk + .5))
	}, this.aVk = function(aT, aU, aVl, aVm, aVn) {
		return aVl - aVn < aT && aT < aVl + aVn && aVm - aVn < aU && aU < aVm + aVn
	}, this.a8j = function(fm, fo) {
		return fm * fm + fo * fo
	}
}

function aIp() {
	var km, aSV, aSW, aPs;

	function aVo(id) {
		0 !== bL.id || fa.fE.data[140].value ? 0 === id ? c4.c5(8, 1, new qh(16)) : c4.c5(2) : c4.af.aLl(c4.rR, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bL.bM.setState(12), km.show(), this.resize(), this.bQ()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), aSV.resize()
	}, this.bQ = function() {
		8 === bi.bj() && (2 <= dL.aVD ? aSW[2].aDZ === b7.aDf && aSW[2].k8(0) : aSW[2].aDZ !== b7.aDf && aSW[2].k8(b7.aDf), !f.gC && e2.e3(f.al) ? aSW[1].aDZ === b7.aDf && aSW[1].k8(0) : aSW[1].aDZ !== b7.aDf && aSW[1].k8(b7.aDf), !f.gC && dy.e6(
			f.al) ? aSW[0].aDZ === b7.aDf && aSW[0].k8(0) : aSW[0].aDZ !== b7.aDf && aSW[0].k8(b7.aDf))
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, aSW = [new k7(L(428), function() {
		aVo(0)
	}), new k7(L(415), function() {
		c4.c5(16)
	}), new k7(L(429), function() {
		c4.c5(17)
	}), new k7(L(430), function() {
		c4.af.aOY()
	}, 0, 0, 1), new k7(L(400), function() {
		c4.c5(3, 1)
	}), new k7(L(5), function() {
		c4.c5(18)
	}), new k7(L(392), function() {
		c4.c5(31)
	}), new k7(L(431), function() {
		c4.af.hW(2)
	}), new k7(L(75), function() {
		aVo(1)
	}), new k7("🔒 " + L(52), function() {
		c4.c5(32)
	}), new k7(L(432), function() {
		var aQA, aNR;
		(aQA = []).push(["Wiki", (aNR = "https://territorial.io/") + "wiki/gold"]), aQA.push(["Team Games", aNR + "log/team"]), aQA.push(["Battle Royale Games", aNR + "log/br"]), aQA.push(["1v1 Games", aNR + "log/1v1"]), aQA.push([
				"Zombie Games", aNR + "log/zombies"
			]), aQA.push(["Changelog", aNR + "changelog"]), 2 !== bL.id && aQA.push(["Android App", a0O.aBK]), 1 !== bL.id && aQA.push(["iOS App", a0O.aBL]), 0 === bL.id && aQA.push(["Patreon", a0O.aIh]), aQA.push(["Terms", a0O.aKP]), aQA
			.push(["Privacy", a0O.aKQ]), c4.c5(4, 1, new a2k(L(432), v.w.aQ9(aQA), !1, [new k7("⬅️ " + L(6), function() {
				c4.c5(1)
			})]))
	}), new k7(L(433), function() {
		c4.c5(4, 1, new a2k(L(433), gc.sj + "<br>" + bg.af.ky("/changelog") + "<br><br><gc>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></gc>", !0, [new k7("⬅️ " + L(6),
				function() {
					c4.c5(1)
				})]))
	}), new k7(L(434), function() {
		c4.c5(4, 1, new a2k(L(434), L(442) + "<br>" + L(443), !1, [new k7("⬅️ " + L(6), function() {
			c4.c5(1)
		}), new k7(L(444), function() {
			bL.bM.aF2(), c4.c5(1)
		})]))
	}), new k7("👁️ " + L(435), function() {
		bL.bM.aF4(), c4.c5(4, 1, new a2k(L(445), L(446) + " " + bg.af.ky("/privacy"), !1, [new k7("⬅️ " + L(6), function() {
			c4.c5(1)
		})]))
	})], aPs = [new k7("⬅️ " + L(6), function() {
		c4.af.se()
	})], 8 === bi.bj() && (aSW.unshift(new k7(L(438), function() {
		c4.c5(30)
	})), aSW.unshift(new k7(L(439), function() {
		2 <= dL.aVD && (c4.ml(), h1.xn(), bR.bS = !0)
	}, 0, 1)), aSW.unshift(new k7(L(440), function() {
		!f.gC && e2.e3(f.al) && (gi.gl.e1(), c4.ml(), e2.hY) && e2.xn()
	}, 0, 1)), aSW.unshift(new k7(L(441), function() {
		!f.gC && dy.e6(f.al) && (gt.tN(2), gi.gl.dn(), c4.ml(), e2.hY) && e2.xn()
	}, 0, 1))), 1 === bL.id && 5 <= bL.sj && aSW.push(new k7(L(436), function() {
		bL.bM.aF5()
	})), km = new ko(L(437), aPs), aSV = new aLF(aSW, km.kr)
}

function aVt(aAK) {
	var km, kn, kt;
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), kn.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(L(447), [new k7("⬅️ " + L(6), function() {
		c4.aJ4(10)
	})]), kn = new kq(km.kr, ((kt = []).push(function() {
		var qG, kv = new kw,
			aOd = new jv(fa.fE.data[132], 1, function() {
				qG.button.click()
			}),
			aOe = new jv(fa.fE.data[131], 1, function() {
				aOd.eL.focus()
			});
		kv.kz(L(386)), kv.l1(aOe), aOe.eL.style.marginBottom = "0.8em", kv.kz(L(387)), kv.l1(aOd);
		return qG = new k7(L(385), function() {
			qj = Math.floor(aOe.eL.value), qk = Math.floor(aOd.eL.value);
			var qk, qj = {
				aU1: Math.min(qj, qk),
				aVx: Math.max(qj, qk)
			};
			c4.c5(8, c4.a73(10).p8, new qh(21, {
				qi: aAK.qi,
				qj: qj.aU1,
				qk: qj.aVx
			}))
		}, 0, 0, 1), kv.l1(new lB([qG.button])), kv
	}()), kt.push(function() {
		var qG, kv = new kw,
			aOd = new jv(fa.fE.data[134], 1, function() {
				qG.button.click()
			}),
			aOe = new jv(fa.fE.data[133], 0, function() {
				aOd.eL.focus()
			});
		return kv.kz(1 === aAK.qi ? L(448) : L(449)), kv.l1(aOe), aOe.eL.style.marginBottom = "0.8em", kv.kz(L(450)), kv.l1(aOd), qG = new k7(L(385), function() {
			var aNz = aOe.eL.value.slice(0, 20),
				aO0 = Math.abs(Math.floor(aOd.eL.value));
			c4.c5(8, c4.a73(10).p8, new qh(22, {
				qi: aAK.qi,
				aNz: aNz,
				aO0: aO0
			}))
		}, 0, 0, 1), kv.l1(new lB([qG.button])), kv
	}()), kt.push(function() {
		var qG, kv = new kw,
			aOd = new jv(fa.fE.data[152], 1, function() {
				qG.button.click()
			}),
			aOe = new jv(fa.fE.data[151], 0, function() {
				aOd.eL.focus()
			});
		return kv.kz(L(451)), kv.l1(aOe), aOe.eL.style.marginBottom = "0.8em", kv.kz(L(450)), kv.l1(aOd), qG = new k7(L(385), function() {
			var aNz = aOe.eL.value.slice(0, 5),
				aO0 = Math.abs(Math.floor(aOd.eL.value));
			c4.c5(8, c4.a73(10).p8, new qh(28, {
				qi: aAK.qi,
				aNz: aNz,
				aO0: aO0
			}))
		}, 0, 0, 1), kv.l1(new lB([qG.button])), kv
	}()), kt))
}

function a6P() {
	this.c0 = function(player) {
		hB.aVy(player), f.g7++, ci.it[player] = 2, ci.a7P[player] = a5O.oN.aEc(), player === f.al && (hA.show(!1, !1), h8.yK(), gX.nV.a7I()), du.jW(player)
	}
}

function a6G() {
	var vj, aVz, aW0, aW1, or = !1;

	function aW2() {
		or = !0, vj = -1, aVz = new Array(4);
		for (var q = 3; 0 <= q; q--) aVz[q] = !1;
		var a8j = Math.floor(1 + .02 * ao.min);
		aW0 = new Array(4), (aW1 = new Array(4))[1] = aW1[3] = aW0[0] = aW0[2] = 0, aW1[0] = aW0[3] = -a8j, aW0[1] = aW1[2] = a8j
	}

	function aW3() {
		if (-1 !== vj)
			if (0 !== f.eR && eS.eT()) {
				for (var aW4 = !1, q = 3; 0 <= q; q--) aVz[q] && (aW4 = !0, b0 += aW0[q], b2 += aW1[q], du.fc(aW0[q], aW1[q]), eZ.ff());
				aW4 ? bR.bS = !0 : xg.zn()
			} else xg.zn()
	}
	this.xh = function(t) {
		0 !== f.eR && eS.eT() && (or || aW2(), aVz[t] = !0, -1 === vj) && (vj = setInterval(aW3, 20), aW3())
	}, this.xl = function(t) {
		if (0 !== f.eR && (or || aW2(), aVz[t] = !1, -1 !== vj)) {
			for (var aW4 = !1, q = 3; 0 <= q; q--) aW4 = aW4 || aVz[q];
			aW4 || this.zn()
		}
	}, this.zn = function() {
		if (or && -1 !== vj) {
			for (var q = 3; 0 <= q; q--) aVz[q] = !1;
			clearInterval(vj), vj = -1
		}
	}
}

function mU(a4C, aDV, aW5) {
	this.mJ = document.createElement("div"), this.me = a4C;
	var aW6 = 0;
	this.resize = function(kN, aQ2) {
		var n = a4C.length;
		if (!aW5)
			for (var q = 1; q < n; q++) v.w.kV(a4C[q].button, 4);
		for (var aQ3 = 0, q = 0; q < n; q++) aQ3 += a4C[q].button.offsetWidth;
		if (kN && (aW6 = kN.offsetWidth), aQ2 && aQ3 < aW6)
			for (q = 0; q < n; q++) a4C[q].button.style.width = (100 * a4C[q].button.offsetWidth / aQ3).toFixed(2) + "%";
		else
			for (q = 0; q < n; q++) a4C[q].button.style.width = "auto";
		aQ2 || this.resize(kN, 1)
	};
	var a5J = this;
	a5J.mJ.style.height = a5J.mJ.style.maxHeight = "100%";
	for (var q = 0; q < a4C.length; q++) a4C[q].k8(aDV), a4C[q].button.style.height = "100%", a4C[q].button.style.padding = "0.0em 0.9em", a4C[q].button.style.whiteSpace = "pre", a5J.mJ.appendChild(a4C[q].button)
}

function a7i() {
	var aW7, aW8 = [],
		aW9 = -1,
		aWA = 0,
		aWB = 0;

	function aWH() {
		aWA = bR.eM, (3 === this.aWI ? aWG : (aW9 = (aW8.length + aW9 + 2 * this.aWI - 1) % aW8.length, aWF))()
	}

	function aWF() {
		0 !== aW8.length && (aWB = 0, aW7 && aW7.lj(), (aW7 = new aWJ(aWH)).lA(aW9, aW8.length), aW7.show(aW8[aW9]), bk.message.resize())
	}

	function aWG() {
		aWB = 1, aW7 && aW7.lj(), (aW7 = new r4(aWF)).lA(aW8.length), aW7.show(), bk.message.resize()
	}
	this.cc = function(aWC) {
		var en;
		2 === aWC.id && 3 === aWC.ca ? bk.co.aWD(aWC.cW) : (en = bk.co.kI(aWC, bk.co.kJ(aWC)), (5 !== aWC.id && 6 !== aWC.id || (c4.a73(29).mk().kL(en), 5 === aWC.id)) && (en = bR.eM < aWA + 2e4, aW9 !== aW8.length - 1 && en || (aW9 = aW8
			.length), __fx.pingFilter.isMuted(aWC, "cX") || (aW8.push(aWC), fa.fE.data[14].value || 7 === aWC.id || a5d.play(), aW7 && (aWB && (fa.fE.data[13].value || en) ? aW7.lA(aW8.length) : aWF()))))
	}, this.show = function() {
		aWG()
	}, this.eP = function() {
		aW9 = aW8.length - 1, aW7 && aW7.lj(), aW7 = null
	}, this.resize = function() {
		aW7 && aW7.resize()
	}, this.aWK = function() {
		return aW8
	}
}

function aK0(data) {
	var km, aWL;

	function aWT(n) {
		return n < 60 ? 1 === n ? n + " Second" : n + " Seconds" : n < 3600 ? 1 === (n = Math.floor(n / 60)) ? n + " Minute" : n + " Minutes" : n < 172800 ? 1 === (n = Math.floor(n / 3600)) ? n + " Hour" : n + " Hours" : (n = Math.floor(n /
			172800)) + " Days"
	}

	function aWN(aCT) {
		var n = data.data.length;
		if (n) {
			for (var qj, max = min = parseInt(data.data[0][0]), q = 1; q < n; q++) var aOO = parseInt(data.data[q][0]),
				min = Math.min(aOO, min),
				max = Math.max(aOO, max);
			qj = aCT < 0 ? min + aCT : max + 1, c4.c5(8, c4.mt().p8, new qh(21, {
				qi: data.qi,
				qj: qj,
				qk: qj + Math.abs(aCT)
			}))
		}
	}
	if (this.show = function() {
			km.show(), this.resize()
		}, this.eP = function() {
			km.eP()
		}, this.resize = function() {
			km.resize(), aWL.resize()
		}, this.lK = function(jA) {
			2 === jA && km.lL[0].lM()
		}, data.aK1) {
		km = new ko(L(18), [new k7("⬅️ " + L(6), function() {
			c4.kp()
		})]);
		var jl = {
				aAf: [],
				aAk: [L(465), L(466), L(467) + " ↗"],
				aAs: [12, 50, 38]
			},
			pv = f.data.pv;
		if (pv) {
			for (var n = pv.length, aAf = jl.aAf, ew = ci.ew, q = 0; q < n; q++) aAf.push([{
				kk: q + 1 + ".",
				bT: 0
			}, {
				kk: ew[q],
				bT: 0
			}, {
				kk: lz.m0.bC(pv[q], 5),
				bT: 1,
				cW: pv[q],
				a1O: 0
			}]);
			aWL = new aAe(km.kr, jl, {
				aAn: 1
			})
		} else aWL = new aAe(km.kr, jl)
	} else {
		var jl = data.data.length ? 0 : 1,
			a54 = [new k7("⬅️ " + L(6), function() {
				c4.kp()
			}), new k7(L(452), function() {
				aWN(-10)
			}, jl, 0, 1), new k7(L(453), function() {
				aWN(10)
			}, jl, 0, 1), new k7(L(454), function() {
				c4.c5(11, 10, new aVt({
					qi: data.qi
				}))
			})],
			aAk = [L(455), L(456), L(457), L(458), L(459), L(460), L(461), L(462), L(463), L(464), L(412), L(413), "Audit Log", L(414)];
		km = new ko(aAk[data.qi], a54), ! function() {
			var q, jl = {
					aAf: []
				},
				aAf = jl.aAf,
				aWP = data.data,
				n = aWP.length;
			n && 0 === aWP[0][0] && 0 <= (t = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.qi]) && (c4.af.ql[t] = aWP[0][1]);
			var fi = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.qi],
				aVT = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.qi],
				t = [
					[L(468), L(469) + " ↗", L(470)],
					[L(468), L(471), L(472), L(473) + " ↗"],
					[L(468), L(469) + " ↗", L(472)],
					[L(468), L(469) + " ↗", L(472)],
					[L(465), L(474), L(475) + " ↗", L(476) + " ↗", L(62)],
					[L(465), L(474), L(477) + " ↗", L(8) + " ↗", L(478)],
					[L(465), L(474), L(479) + " ↗", L(480) + " ↗", L(9)],
					[L(465), L(474), L(477) + " ↗", L(8) + " ↗", L(481)],
					[L(465), L(474), L(475) + " ↗", L(476) + " ↗", L(62)],
					[L(468), L(469) + " ↗", L(472)],
					[L(468), L(469) + " ↗", L(482)],
					[L(468), L(469) + " ↗", L(472)],
					[L(465), L(474), L(475) + " ↗", L(476) + " ↗", L(483)],
					[L(468), L(469) + " ↗", L(472)]
				];
			if (jl.aAk = t[data.qi], jl.aAs = [
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
				][data.qi], 0 === data.qi || 2 === data.qi || 3 === data.qi || 9 === data.qi || 10 === data.qi || 11 === data.qi || 13 === data.qi)
				for (q = 0; q < n; q++) aAf.push([{
					kk: aWP[q][0] + 1 + ".",
					bT: 0
				}, {
					kk: aWP[q][1],
					bT: 1,
					cW: aWP[q][4],
					a1O: aWP[q][3]
				}, {
					kk: (fi * aWP[q][2]).toFixed(aVT),
					bT: 0
				}]);
			else if (12 === data.qi)
				for (q = 0; q < n; q++) {
					var aWS = aWP[q][3];
					aAf.push([{
						kk: "" + aWP[q][0],
						bT: 0
					}, {
						kk: aWT(aWP[q][4]),
						bT: 0
					}, {
						kk: aWP[q][5],
						bT: 1,
						cW: aWP[q][1],
						a1O: 0
					}, {
						kk: aWP[q][6],
						bT: 1,
						cW: aWP[q][2],
						a1O: 0
					}, {
						kk: sO.aGH(aWS, lz.m0.bC(aWP[q][1], 5)),
						bT: 0
					}])
				} else if (1 === data.qi)
					for (q = 0; q < n; q++) aAf.push([{
						kk: aWP[q][0] + 1 + ".",
						bT: 0
					}, {
						kk: aWP[q][1],
						bT: 0
					}, {
						kk: (fi * aWP[q][2]).toFixed(aVT),
						bT: 0
					}, {
						kk: aWP[q][3],
						bT: 1,
						cW: aWP[q][5],
						a1O: aWP[q][4]
					}]);
				else if (4 === data.qi || 5 === data.qi || 6 === data.qi || 7 === data.qi || 8 === data.qi)
				for (q = 0; q < n; q++) {
					var aWU = aWP[q][5];
					4 === data.qi || 8 === data.qi ? "100%" === (aWU = (aWU % 64 * 100 / (aWU >> 6)).toFixed(0) + "%") && (4 === data.qi ? aWU += " (" + L(484) + ")" : aWU += " (" + L(485) + ")") : 5 === data.qi ? 32768 <= aWU && (aWU = -(aWU -
						32768)) : aWU = (fi * aWU).toFixed(aVT), aAf.push([{
						kk: "" + aWP[q][0],
						bT: 0
					}, {
						kk: aWT(aWP[q][6]),
						bT: 0
					}, {
						kk: aWP[q][7],
						bT: 1,
						cW: aWP[q][1],
						a1O: aWP[q][2]
					}, {
						kk: aWP[q][8],
						bT: 1,
						cW: aWP[q][3],
						a1O: aWP[q][4]
					}, {
						kk: "" + aWU,
						bT: 0
					}])
				}
			aWL = new aAe(km.kr, jl)
		}()
	}
}

function a6W() {
	var canvas, sx, a13, font, aWV = 0,
		aWW = !1,
		aWX = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aWY = 5;

	function aVE() {
		if (aWW) {
			var q, n = aWX.length,
				lX = Math.floor(.5 * a13.ar),
				ar = n * lX,
				aD = Math.floor(Math.floor(a13.aD) + .3 * a13.ap - .5),
				aE = Math.floor(Math.floor(a13.aE) - ar),
				ap = Math.floor(.4 * a13.ap + 2.5);
			for (b5.fillStyle = b7.qX, b5.fillRect(aD, aE, ap, ar), b5.fillStyle = b7.mz, b5.fillRect(aD, aE + aWY * lX, ap, lX), b5.fillStyle = b7.b9, b5.fillRect(aD, aE, 2, ar), b5.fillRect(aD, aE, ap, 2), b5.fillRect(aD + ap - 2, aE, 2, ar), q =
				1; q < n; q++) b5.fillRect(aD, aE + q * lX, ap, 2);
			for (b5.fillStyle = b7.b9, v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.font = v.w.bA(0, .6 * lX), aD += .5 * ap, q = 0; q < n; q++) b5.fillText(aWl(q), aD, aE + (q + .6) * lX)
		}
		b5.drawImage(canvas, Math.floor(a13.aD), Math.floor(a13.aE))
	}

	function kE(a5J) {
		var aD, az, b1, lX;
		sx.clearRect(0, 0, Math.floor(a13.ap), Math.floor(a13.ar)), sx.fillStyle = b7.qX, sx.fillRect(0, 0, Math.floor(a13.ap), Math.floor(a13.ar)), f.fZ && (sx.fillStyle = b7.mz, sx.fillRect(0, 0, Math.floor(.3 * a13.ap), Math.floor(a13.ar))), sx
			.fillStyle = b7.b9, sx.fillText("Hide UI", .15 * a13.ap, .5 * a13.ar), sx.fillRect(Math.floor(.3 * a13.ap - .5), 0, 2, Math.floor(a13.ar)), aD = .5 * a13.ap, sx.fillText("Replay Speed", aD, .31 * a13.ar), sx.fillText(aWl(aWY), aD, .69 *
				a13.ar), sx.fillRect(Math.floor(.7 * a13.ap - .5), 0, 2, Math.floor(a13.ar)), a5J.hZ ? (aD = Math.floor(.02 * a13.ap), a5J = Math.floor(.025 * a13.ap), az = Math.floor(.85 * a13.ap - aD - .5 * a5J), b1 = Math.floor(.25 * a13.ar), lX =
				Math.floor(a13.ar) - 2 * b1, sx.fillRect(az, b1, aD, lX), sx.fillRect(az + aD + a5J, b1, aD, lX)) : function() {
				var ap = Math.floor(.46 * a13.ar),
					ar = Math.floor(.23 * a13.ar),
					aD = Math.floor(.85 * a13.ap - .5 * ap + ap / 12),
					aE = Math.floor(.5 * a13.ar - ar);
				sx.beginPath(), sx.moveTo(aD, aE), sx.lineTo(aD + ap, aE + ar), sx.lineTo(aD, aE + (ar << 1)), sx.fill()
			}(), sx.fillRect(0, 0, Math.floor(a13.ap), 2), sx.fillRect(0, 0, 2, Math.floor(a13.ar)), sx.fillRect(0, Math.floor(a13.ar) - 2, Math.floor(a13.ap), 2), sx.fillRect(Math.floor(a13.ap - 2), 0, 2, Math.floor(a13.ar))
	}

	function aWl(q) {
		return 5 === q ? "Normal" : "" + aWX[q]
	}
	this.hZ = !1, this.e = function() {
		f.gC && (aWY = 5, this.hZ = !1, aWW = !1, a13 = new a58([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.nk = function() {
		return aWX[aWY]
	}, this.fT = function() {
		return a13.aE
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.hZ,
		fxGetSpeedIndex: () => aWY,
		fxSetSpeedIndex: index => {
			aWY = index, this.resize()
		},
		fxGetPanelTop: () => a13 && a13.aE
	}, this.aBm = function(aM2) {
		return !!f.gC && a13.aD + a13.ap > ao.ap - aM2 - fx.gap
	}, this.resize = function() {
		f.gC && (a13.resize(), a13.aE -= (a5b.z5() - 1) * fx.gap, font = v.w.bA(0, .3 * a13.ar), (canvas = document.createElement("canvas")).width = Math.floor(a13.ap), canvas.height = Math.floor(a13.ar), (sx = canvas.getContext("2d", {
			alpha: !0
		})).font = font, v.w.textAlign(sx, 1), v.w.textBaseline(sx, 1), kE(this))
	}, this.xm = function(aWZ) {
		0 === f.eR || c4.xX() || aWZ !== f.fZ && (f.fZ = aWZ, f5.resize(), bR.bS = !0, f.gC) && (aWV = bR.eM + 2e3, kE(this))
	}, this.fY = function(aD, aE) {
		if (!f.gC) return !1;
		if (aD < a13.aD || aE < a13.aE || aD > a13.aD + a13.ap) return aWW && function(a5J, aD, aE) {
			var n = aWX.length,
				lX = Math.floor(.5 * a13.ar),
				ar = n * lX,
				az = Math.floor(Math.floor(a13.aD) + .3 * a13.ap - .5),
				ar = Math.floor(Math.floor(a13.aE) - ar),
				ap = Math.floor(.4 * a13.ap + 2.5);
			return aWW = !1, bR.bS = !0, aD < az || az + ap < aD || aE < ar || (aWY = aJz(0, Math.floor((aE - ar) / lX), n - 1), kE(a5J)), !0
		}(this, aD, aE);
		if ((aD -= a13.aD) < .3 * a13.ap) aWW = !1, this.xm(!f.fZ);
		else {
			if (aD < .7 * a13.ap) return aWW = !aWW, bR.bS = !0;
			this.oD(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.oD(!0), this.oD = function(aWb) {
		2 === f.eR ? (this.xm(!1), c4.c5(3)) : (aWW = !1, this.hZ = !this.hZ, this.hZ ? (e2.hY && e2.xn(), bL.bM.setState(1)) : aWb || e2.aWc(), bR.bS = !0, kE(this))
	}, this.aWd = function() {
		this.hZ = !1, e2.aWc(), bR.bS = !0, kE(this)
	}, this.xR = function(aD, aE) {
		return !!f.fZ && (0 <= e2.fY(aD, aE) || (f.gC ? ((bR.eM > aWV || !this.fY(aD, aE)) && eZ.fY(aD, aE), bR.bS = !0, aWV = bR.eM + 2e3) : eZ.fY(aD, aE)), !0)
	}, this.bQ = function() {
		f.gC && f.fZ && bR.eM > aWV - 1e3 && bR.eM < aWV && (bR.bS = !0)
	}, this.nZ = function() {
		f.gC && (this.hZ = !1, bR.bS = !0, kE(this))
	}, this.aR = function() {
		if (f.gC) {
			if (f.fZ) {
				if (bR.eM > aWV) return;
				if (bR.eM > aWV - 1e3) return b5.globalAlpha = aJz(0, (1e3 - (bR.eM - (aWV - 1e3))) / 1e3, 1), aVE(), void(b5.globalAlpha = 1)
			}
			aVE()
		}
	}
}

function a6H() {
	this.af = new ol, this.pI = new aQv, this.ov = new aMP, this.mo = new aWm, this.mH = new aWn, this.lE = new aFt, this.aWo = new a9d, this.aWp = new aNw, this.kd = new aN6, this.aNC = new bd, this.aND = new aQx, this.aNG = new aUz, this.aNK =
		new a4t, this.e = function() {
			this.af.e()
		}
}

function aUA() {
	this.aWq = function(kk) {
		return [kk >> 12 & 63, kk >> 6 & 63, 63 & kk]
	}, this.aWr = function(kk) {
		for (var a8 = this.aWq(kk), q = 0; q < 3; q++) a8[q] = ~~(4.05 * a8[q]);
		return a8
	}, this.aLm = function(kk) {
		kk = this.aWr(kk);
		return v.color.aOW(kk[0], kk[1], kk[2])
	}, this.aWs = function(a8) {
		for (var q = 0; q < 3; q++) a8[q] = ~~(a8[q] / 4.04);
		return (a8[0] << 12) + (a8[1] << 6) + a8[2]
	}, this.aOW = function(pW, kj, jO) {
		return "rgb(" + pW + "," + kj + "," + jO + ")"
	}, this.t0 = function(pW, kj, jO, bz) {
		return "rgba(" + pW + "," + kj + "," + jO + "," + bz.toFixed(3) + ")"
	}, this.aDh = function(jA) {
		for (var a8 = jA.split("(")[1].split(","), aA = a9.aA, q = 0; q < 3; q++) aA[q] = parseInt(a8[q]);
		return 4 === a8.length ? aA[3] = 255 * parseFloat(a8[3].slice(0, -1)) : aA[3] = 255, aA
	}, this.rB = function(aWt, jl) {
		for (var a8 = aWt.slice(aWt.indexOf("(") + 1, aWt.indexOf(")")).split(","), aA = a9.aA, q = 0; q < 3; q++) aA[q] = ds.dt(parseInt(a8[q].trim(), 10) + jl, 0, 255);
		return 3 === a8.length ? this.aOW(aA[0], aA[1], aA[2]) : (aWt = parseFloat(a8[3].trim()), this.t0(aA[0], aA[1], aA[2], aWt = 0 === aWt ? .3 : aWt))
	}, this.aSD = function(aWu, aWv) {
		for (var aCT = 0, q = 0; q < 3; q++) aCT += Math.abs(aWv[q] - aWu[q]);
		if (!(240 <= aCT))
			for (q = 0; q < 3; q++) aWv[q] = aWu[q] + (aWu[q] < 128 ? 80 : -80)
	}, this.aWw = function(a8) {
		for (var lI = "#", q = 0; q < 3; q++) {
			var pW = a8[q].toString(16);
			lI += 1 === pW.length ? "0" + pW : pW
		}
		return lI
	}, this.aWx = function(lI) {
		var pW, kj;
		return lI.length < 7 ? b7.bc : (pW = parseInt(lI.slice(1, 3), 16), kj = parseInt(lI.slice(3, 5), 16), lI = parseInt(lI.slice(5, 7), 16), this.aOW(pW, kj, lI))
	}
}

function aGJ() {
	this.o1 = null, this.o3 = null, this.o5 = null, this.o7 = null, this.o9 = null, this.oB = null, this.hP = "";
	var aWy = 0;
	this.e = function() {
		this.o1 = [], this.o3 = [], this.o5 = [], this.o7 = [], this.o9 = [0], this.oB = [0], aWy = 0, this.hP = ""
	}, this.d2 = function(id, o2, o4, o6) {
		f.gC || 2 === f.eR || (0 === this.o9[aWy] && (this.oB[aWy] ? (this.o9.push(1), this.oB.push(0), aWy++) : this.o9[aWy] = 1), this.o1.push(id), this.o3.push(o2), this.o5.push(void 0 === o4 ? 0 : o4), this.o7.push(void 0 === o6 ? 0 : o6),
			this.oB[aWy]++)
	}, this.bQ = function() {
		0 === this.o9[aWy] ? this.oB[aWy]++ : (this.o9.push(0), this.oB.push(0), aWy++)
	}
}

function aUC() {
	var aWz = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aX0 = function(eM) {
		var aX2, lI = new Date(eM.getTime() - 6e4 * eM.getTimezoneOffset()).toUTCString();
		return lI.length < 12 || (lI = lI.substring(5, lI.length), 0 === (eM = eM.getTimezoneOffset())) ? lI : (aX2 = (eM < 0 ? "+" : "-") + ds.kh(Math.abs(eM), 60), 0 == (eM = Math.abs(eM) % 60) ? lI + aX2 : lI + aX2 + ":" + (eM < 10 ? "0" :
			"") + eM)
	}, this.aX3 = function(eM) {
		var lI = eM.toUTCString();
		return lI.length < 12 ? lI : function(eM) {
			return aWz[eM.getUTCDay()]
		}(eM) + ", " + lI.substring(5, lI.length - 4)
	}
}

function aJ0() {
	var oT, oU, oV;

	function mY() {
		oX(), 3 !== f.data.botDifficultyType || v.aN.t1(f.data.botDifficultyData) || (f.data.botDifficultyType = 0), 3 !== f.data.botDifficultyType && (f.data.botDifficultyData = null), c4.oY()[19] = null, c4.kp()
	}

	function oX() {
		3 === f.data.botDifficultyType && v.aN.oZ(oV.oa(), f.data.botDifficultyData, gv.aC6.length - 1)
	}

	function aX5(kt, t) {
		var kv = new kw,
			value = (kv.kz(t < 0 ? L(154) : L(13) + " " + l.a7Q[t % 9]), 0 <= t && (kv.kx(L(21) + ": " + f.data.teamPlayerCount[t]).style.marginBottom = "1em"), t < 0 ? f.data.botDifficultyValue : f.data.botDifficultyTeam[t]);
		kv.oe(new og({
			oh: gv.aC6,
			value: value
		}, function(iW) {
			t < 0 ? f.data.botDifficultyValue = iW : f.data.botDifficultyTeam[t] = iW
		})), kt.push(kv)
	}
	this.show = function() {
		oT.show(), this.resize()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko(L(154), [new k7("⬅️ " + L(6), mY)]), oU = new kq(oT.kr, function() {
		var kt = [];
		if (function(kt) {
				var kv = new kw,
					oh = (kv.kz(L(24)), [L(26), L(486), L(487), L(27)]),
					value = f.data.botDifficultyType;
				0 === f.data.gameMode && (value = Math.min(value, 2), oh.splice(2, 1));
				kv.oe(new og({
					oh: oh,
					value: value
				}, function(t) {
					oX(), f.data.botDifficultyType = t, 0 === f.data.gameMode && 2 === t && (f.data.botDifficultyType = 3), 3 !== f.data.botDifficultyType || f.data.botDifficultyData || (f.data.botDifficultyData = new Uint8Array(f
						.g)), 2 !== f.data.botDifficultyType || f.data.botDifficultyTeam || (f.data.botDifficultyTeam = new Uint8Array(9)), c4.c5(25)
				})), kt.push(kv)
			}(kt), 0 === f.data.botDifficultyType) aX5(kt, -1);
		else if (2 === f.data.botDifficultyType)
			for (var q = 0; q < f.data.teamPlayerCount.length; q++) f.data.teamPlayerCount[q] && aX5(kt, q);
		else 3 === f.data.botDifficultyType && ! function(kt) {
			var kv = new kw;
			kv.kz("Data"), (oV = new oi(0, 1, 0, 1)).oj(v.bB.ok(f.data.botDifficultyData, 8)), kv.l1(oV), kt.push(kv)
		}(kt);
		return kt
	}())
}

function a6S() {
	var aX6 = -1,
		aX7 = null,
		aDJ = -1,
		aS5 = 4;

	function aX9() {
		e2.aXB() ? gr.render() : gr.nc()
	}

	function aXG(jA, jl) {
		var pW = jA >> 16,
			kj = jA >> 8 & 255,
			jA = 255 & jA,
			aXH = 255 - jl,
			aXH = (aXH < pW && aXH < kj && aXH < jA && (jl = -jl), aX6 >> 7),
			aXJ = aX6 >> 5 & 3,
			aXK = aX6 >> 3 & 3;
		return (Math.max(Math.min(pW + jl, 252 + aXH), aXH) << 16) + (Math.max(Math.min(kj + jl, 252 + aXJ), aXJ) << 8) + Math.max(Math.min(jA + jl, 252 + aXK), aXK)
	}

	function aX8() {
		return -1 !== aX6 && (a6.aUa(aX6, aX7[0], aX7[1], aX7[2]), aXF(aX6), aX6 = -1)
	}

	function aXF(player) {
		bR.bS = !0;
		for (var iO = ci.iO[player], iP = ci.iP[player], iS = ci.iS[player], iT = ci.iT[player], aE = iP; aE <= iT; aE++)
			for (var aD = iO; aD <= iS; aD++) {
				var a3 = a6.a8J(aD, aE);
				a6.jm(player, a3) && (a6.aUf(a3) ? a6.a26(a3, player) : a6.a2S(a3) ? a6.a2N(a3, player) : a6.a2E(a3, player))
			}
	}
	this.e = function() {
		aX7 = null, aDJ = aX6 = -1, aS5 = ds.dt(Math.floor(fa.fE.data[16].value), 0, 16)
	}, this.bQ = function(ij) {
		if (fa.fE.data[15].value && 0 !== aS5 && (ij || !r9.rA())) {
			var ij = cq.ic(r9.vh),
				aDN = cq.ig(r9.xA);
			if (cq.aDO(ij, aDN)) {
				ij = cq.a4d(ij, aDN), aDN = cq.cr(ij);
				if (aDJ === aDN)
					if (a6.a24(aDN)) {
						if (aX6 === a6.a25(aDN)) return
					} else if (-1 === aX6) return;
				! function(a3) {
					a6.a24(a3) ? (a3 = a6.a25(a3)) !== aX6 && (aX8(), function(player) {
						aX6 = player, aX7 = a6.aUe(player);
						var aXD = function() {
							var en = aX7,
								eU = aS5 << 2,
								eW = eU << 1;
							return [aXG(en[0], eU), aXG(en[1], eW), aXG(en[2], eW)]
						}();
						a6.aUa(player, aXD[0], aXD[1], aXD[2]), aXF(player)
					}(a3), aX9()) : aX8() && aX9()
				}(aDJ = aDN)
			} else aX8() && aX9()
		}
	}
}

function a6F() {
	var kk, ap, ar, max, aXL, ry, aXN, aXO, aXP, aXQ, aXR, aXS, aXT, aXU, aXM = 1e4;

	function aXb(aXa, rx, n) {
		var q;
		for (aXN[0] = aXa, q = 1; q < n; q++) aXN[q] = aXN[q - 1] + rx, rx = aXN[q] >= aXM ? (aXN[q] = aXM - 1, -rx) : aXN[q] < 0 ? (aXN[q] = 0, -rx) : (rx += 16384 <= ge.random() ? ry : -ry) < -aXL ? -aXL : aXL < rx ? aXL : rx
	}

	function aXd(aD, aE, aXe, n) {
		(aXe ? function(aD, aE, n) {
			var q;
			for (q = 0; q < n; q++) kk[aE * ap + aD + q] = aXN[q]
		} : function(aD, aE, n) {
			var q;
			for (q = 0; q < n; q++) kk[aE * ap + aD + q * ap] = aXN[q]
		})(aD, aE, n)
	}

	function aXh(value, n) {
		var q, ji, a3, aCT = value - aXN[n - 1];
		if (0 != aCT) {
			for (ji = 1 + ds.kh(Math.abs(aCT), n - 1), ji = aCT < 0 ? -ji : ji, aXN[n - 1] = value, a3 = (a3 = n - 1 - ds.kh(Math.abs(aCT), Math.abs(ji))) < 1 ? 1 : n - 2 < a3 ? n - 2 : a3, q = n - 2; a3 <= q; q--) aXN[q] += aCT - (n - 1 - q) * ji;
			(aCT < 0 ? function(n) {
				var q;
				for (q = n - 2; 1 <= q; q--) aXN[q] < 0 && (aXN[q] = -aXN[q] - 1)
			} : function(n) {
				var q;
				for (q = n - 2; 1 <= q; q--) aXN[q] >= aXM && (aXN[q] = 2 * aXM - aXN[q] - 1)
			})(n)
		}
	}

	function aXk(tO, tP, n) {
		for (var q = 0; q < n; q++) tO[q] = tP[q]
	}

	function aXl(a8) {
		for (var q = 0; q < a8.length - 1; q++) a8[q] = a8[q + 1] - a8[q];
		a8[a8.length - 1] = a8[a8.length - 3]
	}

	function aXm(r, gap, aHP) {
		aXO.push(r), aXP.push(gap), aXQ.push(aHP)
	}
	this.gw = function(aAK) {
		! function(aAK) {
			var q;
			for (ap = aAK[0], ar = aAK[1], aXL = aAK[2], ry = aAK[3], kk = new Int16Array(ap * ar), max = ar < ap ? ap : ar, aXN = new Int16Array(max), aXO = [], aXP = [], aXQ = [], aXR = new Array(ap), aXS = new Array(ar), q = ap - 1; 0 <=
				q; q--) aXR[q] = !1;
			for (q = ar - 1; 0 <= q; q--) aXS[q] = !1;
			aXT = new Int16Array(ap), aXU = new Int16Array(ar)
		}(aAK),
		function(n) {
			var aXa = ge.random() % aXM,
				rx = ge.random() % (2 * aXL + 1) - aXL;
			aXb(aXa, rx, n)
		}(max), aXk(aXU, aXN, ar), aXd(0, 0, !0, ap);
		var aD, aE, aAK = kk[0],
			n = max,
			rx = ge.random() % (2 * aXL + 1) - aXL;
		for (aXb(aAK, rx, n), aXk(aXT, aXN, ap), aXd(0, 0, !1, ar), aXl(aXT), aXl(aXU), aXb(kk[ap - 1], aXT[ap - 1], ar), aXd(ap - 1, 0, !1, ar), aXb(kk[ap * (ar - 1)], aXU[ar - 1], ap), aXh(kk[ap * ar - 1], ap), aXd(0, ar - 1, !0, ap), aXR[ap -
				1] = aXR[0] = !0, aXS[ar - 1] = aXS[0] = !0, aXm(0, ap, !0), aXm(0, ar, !1), ! function() {
				var aVx, r;
				for (;;) {
					if (aVx = function() {
							var q, aVx = aXO.length - 1;
							for (q = aVx - 1; 0 <= q; q--) aXP[q] > aXP[aVx] && (aVx = q);
							return aVx
						}(), aXP[aVx] < 5) return;
					r = aXO[aVx] + ds.kh(aXP[aVx], 2), (aXQ[aVx] ? function(aD) {
						var n, aXq, q, aH3 = 0,
							aXr = 0;
						for (; aXr < ar - 1;) {
							for (q = aH3 + 1; q < ar; q++)
								if (aXS[q]) {
									aXr = q;
									break
								} n = aXr - aH3 + 1, aXb(kk[aD + ap * aH3], 0 === aH3 ? aXT[aD] : aXN[aXq - 1] - aXN[aXq - 2], n), aXh(kk[aXr * ap + aD], n), aXd(aD, aH3, !1, n), aXq = n, aH3 = aXr
						}
						aXR[aD] = !0
					} : function(aE) {
						var n, aXq, q, aH3 = 0,
							aXr = 0;
						for (; aXr < ap - 1;) {
							for (q = aH3 + 1; q < ap; q++)
								if (aXR[q]) {
									aXr = q;
									break
								} n = aXr - aH3 + 1, aXb(kk[aE * ap + aH3], 0 === aH3 ? aXU[aE] : aXN[aXq - 1] - aXN[aXq - 2], n), aXh(kk[aE * ap + aXr], n), aXd(aH3, aE, !0, n), aXq = n, aH3 = aXr
						}
						aXS[aE] = !0
					})(r), aXm(r, aXO[aVx] + aXP[aVx] - r, aXQ[aVx]), aXP[aVx] = r - aXO[aVx] + 1
				}
			}(), aD = 0; aD < ap; aD++)
			if (!aXR[aD])
				for (aE = 0; aE < ar; aE++) aXS[aE] || ! function(aD, aE) {
					var value = kk[aE * ap + aD - 1] + kk[(aE - 1) * ap + aD],
						bb = 2;
					aXR[aD + 1] && (bb++, value += kk[aE * ap + aD + 1]);
					aXS[aE + 1] && (bb++, value += kk[(aE + 1) * ap + aD]);
					kk[aE * ap + aD] = ds.kh(value, bb)
				}(aD, aE)
	}, this.v0 = function() {
		return kk
	}, this.s1 = function() {
		kk = null
	}
}

function a60() {
	var xX, aXt, ap, ar, lX, aXu, aXv, a9g, canvas, zX, aXw;

	function fT() {
		return Math.floor((ao.ap - ap) / 2) < h5.ar + 2 * fx.gap ? ao.ar - ar - 4 * fx.gap - h5.ar : ao.ar - ar - 2 * fx.gap
	}
	this.e = function() {
		aXw = xX = !1, lX = .61, aXu = .07, aXv = .09, zX = a9g = ar = 0
	}, this.resize = function() {
		var sx, az, jA, aY0, aY1, j6;
		xX && (ap = aPF(ap = bL.bM.bN() ? Math.floor(.69 * ao.bO) : Math.floor(.5 * ao.bO), vq(ao.ap - 2 * fx.gap, 10)), ap = aPF(ap, Math.floor(3.57 * vq(ao.ar - 2 * fx.gap, 3))), ar = Math.floor(.28 * ap), (canvas = document.createElement(
			"canvas")).width = ap, canvas.height = ar, sx = canvas.getContext("2d", {
			alpha: !0
		}), az = Math.floor(1 + ar / 40), sx.clearRect(0, 0, ap, ar), sx.fillStyle = b7.ex, sx.fillRect(az, az, ap - 2 * az, ar - 2 * az), sx.lineJoin = "bevel", sx.lineWidth = 2 * az, sx.strokeStyle = b7.b9, sx.strokeRect(az, az, ap -
			2 * az, ar - 2 * az), sx.imageSmoothingEnabled = !1, jA = iQ.get(aXt), aY0 = jA.width, j6 = (1 === aXt ? .85 : 21 === aXt ? .666 : .9) * lX * ar / (aY1 = jA.height), sx.setTransform(j6, 0, 0, j6, Math.floor((ap - j6 * aY0) /
			2), Math.floor((ar - j6 * aY1) / 2)), sx.drawImage(jA, 0, 0), sx.setTransform(1, 0, 0, 1, Math.floor(ap - aXv * ar - aXu * ar - az), Math.floor(az + aXu * ar)), function(sx, n) {
			sx.lineWidth = Math.floor(1 + ar / 80), sx.strokeStyle = b7.b9, sx.beginPath(), sx.moveTo(0, 0), sx.lineTo(n, n), sx.moveTo(0, n), sx.lineTo(n, 0), sx.stroke()
		}(sx, Math.floor(aXv * ar)), sx.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(kk, aXy, aMt, aXz) {
		xX || aXz && aXw || (aXt = aMt ? 21 : kk ? 1 : 2, xX = aXw = !0, this.resize(), eO.eP(), h5.aM3(), zX = bR.eM, a9g = aXy ? 1 : 0)
	}, this.bQ = function() {
		!xX || 1 <= a9g || (a9g = 1 < (a9g += 5e-4 * (bR.eM - zX)) ? 1 : a9g, zX = bR.eM, bR.bS = !0)
	}, this.fY = function(aD, aE) {
		return !(!xX || a9g <= 0 || (aD -= Math.floor((ao.ap - ap) / 2), aE -= fT(), aD < 0) || aE < 0 || ap < aD || ar < aE || (ap - ar / 3 < aD && aE < ar / 3 && (xX = !1, bR.bS = !0), 0))
	}, this.aR = function() {
		!xX || a9g <= 0 || (b5.globalAlpha = a9g, b5.drawImage(canvas, Math.floor((ao.ap - ap) / 2), fT()), b5.globalAlpha = 1)
	}
}

function aIt() {
	var km, aLf, aY3, aY4, aY5, aY6, colors = [0, 0, 0],
		aY7 = -1;

	function aYB(q) {
		var aYC = aLf.aE + q * (fx.gap + aY6);
		b5.fillStyle = "rgb(" + (0 === q ? 150 : 2 === q ? 30 : 0) + "," + (1 === q ? 130 : 2 === q ? 30 : 0) + "," + (2 === q ? 220 : 0) + ")", b5.fillRect(aY4, aYC, colors[q] * aY5, aY6), b5.strokeStyle = b7.b9, b5.strokeRect(aY4, aYC, aY5, aY6),
			b5.fillStyle = b7.b9, b5.font = v.w.bA(0, .32 * aY6), v.w.textBaseline(b5, 1), v.w.textAlign(b5, 0), b5.fillText(L(0 === q ? 490 : 1 === q ? 491 : 492) + aY8(q), aY4 + fx.gap, aYC + .53 * aY6)
	}

	function aY8(q, aYD) {
		return aYD = aYD || 256, ds.dt(Math.floor(aYD * colors[q]), 0, aYD - 1)
	}

	function xd(fg, fh) {
		return !(fg < aY4 || fh < aLf.aE || fg > aLf.aD + aLf.ap || fh > aLf.aE + aLf.ar)
	}
	this.show = function() {
		var kk = fa.fE.data[121].value;
		colors[0] = (kk >> 12) / 63, colors[1] = (kk >> 6 & 63) / 63, colors[2] = (63 & kk) / 63, km.show(), this.resize()
	}, this.eP = function() {
		fa.l9.lA(121, (aY8(0, 64) << 12) + (aY8(1, 64) << 6) + aY8(2, 64)), km.eP()
	}, this.resize = function() {
		km.resize(), aLf.resize();
		var jA = ao.ed,
			aBY = km.aQ0(),
			aY9 = (aLf.aE = Math.max(aLf.aE, jA * aBY.kQ + fx.gap), jA * aBY.aQ1 - 2 * fx.gap);
		aLf.ar = Math.min(aLf.ar, aY9), aLf.ap = 2 * aLf.ar, aLf.aE = jA * aBY.kQ + .5 * (jA * aBY.aQ1 - aLf.ar), aLf.aD = .5 * (ao.ap - aLf.ap), aY3 = .25 * aLf.ap, aY4 = aLf.aD + aY3 + fx.gap, aY5 = aLf.ap - aY3 - fx.gap, aY6 = (aLf.ar - 2 * fx
			.gap) / 3
	}, this.aR = function() {
		var pW, kj, jO;
		km.aR(), b5.lineWidth = fx.a00, pW = aY8(0), kj = aY8(1), jO = aY8(2), b5.fillStyle = "rgb(" + pW + "," + kj + "," + jO + ")", b5.fillRect(aLf.aD, aLf.aE, aY3, aLf.ar), b5.strokeStyle = b7.b9, b5.strokeRect(aLf.aD, aLf.aE, aY3, aLf.ar),
			b5.fillStyle = pW + kj + jO < 306 && kj < 150 ? b7.b9 : b7.bc, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.font = v.w.bA(0, .1 * aLf.ar), b5.rotate(-Math.PI / 2), b5.fillText(L(489), -aLf.aE - .5 * aLf.ar, aLf.aD + .5 * aY3), b5
			.setTransform(1, 0, 0, 1, 0, 0), aYB(0), aYB(1), aYB(2)
	}, this.fY = function(fg, fh) {
		xd(fg, fh) && (aY7 = ds.dt(Math.floor((fh - aLf.aE) / (aY6 + .75 * fx.gap)), 0, 2), colors[aY7] = ds.dt((fg - aY4) / aY5, 0, 1), bR.bS = !0)
	}, this.fc = function(fg) {
		-1 !== aY7 && (colors[aY7] = ds.dt((fg - aY4) / aY5, 0, 1), bR.bS = !0)
	}, this.fb = function(fg, fh, deltaY) {
		xd(fg, fh) && (fg = ds.dt(Math.floor((fh - aLf.aE) / (aY6 + .75 * fx.gap)), 0, 2), colors[fg] = ds.dt(colors[fg] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bR.bS = !0)
	}, this.xZ = function() {
		0 <= aY7 && (aY7 = -1, bR.bS = !0)
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(L(488), [new k7("⬅️ " + L(6), function() {
		c4.af.se()
	})], !1), aLf = new a58([.5, .25], [.5, .5], 1)
}

function aU9() {
	this.a0M = function(aYE, t, aMH) {
		var u = aYE.height,
			k = v.w.x(u, u),
			y = v.w.getContext(k);
		return function(ap, y, aMH) {
			y.fillStyle = aMH, y.beginPath(), y.arc(ap / 2, ap / 2, .47 * ap, 0, 2 * Math.PI), y.fill()
		}(u, y, aMH), y.drawImage(aYE, -t * u, 0), k
	}, this.aMn = function(aYG) {
		var y, z, u = aYG.height;
		return aYG.width === u && (z = (y = v.w.getContext(aYG, !0)).getImageData(0, 0, u, u), v.aAM.aPK(z.data, u, u, .9), y.putImageData(z, 0, 0)), aYG
	}
}

function a5n() {
	var a0Q = new Uint8Array(f.g),
		aYH = new Uint16Array(f.g),
		aYI = new Uint16Array(f.g),
		aYJ = new Uint8Array(f.g),
		aYK = (this.aW = new Uint8Array(f.g), new Uint16Array(f.g)),
		aYL = new Uint16Array(f.g);

	function aYQ(q) {
		a0Q[q] = 1 + ds.kh(aYK[q] * ge.random(), 10 * ge.value(100))
	}
	this.aC6 = null, this.a3o = [97, 94, 70, 40, 20, 0, 100], this.aLH = [500, 450, 400, 300, 80, 50, 100], this.a3k = [0, 0, 5, 25, 50, 100, 0], this.aUu = [60, 74, 112, 200, 256, 512, 512], this.cf = [1, 2, 3, 4, 6, 8, 1], this.aSO = [500, 450,
		400, 300, 80, 50, 100
	], this.aML = [100, 150, 250, 400, 600, 1e3, 100], this.go = function() {
		this.aC6 = [L(493), L(494), L(89), L(495), L(496), L(497), "H Bot"]
	}, this.e = function() {
		a0Q.fill(0), aYH.fill(0), aYI.fill(0), aYJ.fill(0), this.aW.fill(0), aYK.fill(0), aYL.fill(0);
		var aYM = f.g4;
		if (9 === f.gI) this.aYN();
		else if (f.gB)
			if (3 === f.data.botDifficultyType)
				for (q = f.g6 - 1; 0 <= q; q--) {
					var iW = q + aYM;
					this.aW[iW] = f.data.botDifficultyData[iW]
				} else if (2 === f.data.botDifficultyType)
					for (q = f.g6 - 1; 0 <= q; q--) this.aW[iW = q + aYM] = f.data.botDifficultyTeam[l.m[l.f9[iW]]];
				else if (1 === f.data.botDifficultyType) {
			var aYP = this.aC6.length;
			for (q = f.g6 - 1; 0 <= q; q--) this.aW[q + aYM] = q % aYP
		} else
			for (aYP = f.data.botDifficultyValue, q = f.g6 - 1; 0 <= q; q--) this.aW[q + aYM] = aYP;
		else
			for (var aYO = 8 === f.gI ? 1 : 0, q = f.g6 - 1; 0 <= q; q--) this.aW[q + aYM] = aYO;
		for (q = 0; q < aYM; q++) this.aW[q] = 6;
		var n = f.g;
		for (q = 0; q < n; q++) this.aW[q] <= 2 ? (aYJ[q] = 5, aYK[q] = aYL[q] = 1040, 0 === this.aW[q] ? (aYH[q] = 980, aYI[q] = 980) : 1 === this.aW[q] ? (aYH[q] = 980, aYI[q] = 920, aYK[q] = aYL[q] = 1100) : (aYH[q] = 825, aYI[q] = 750)) :
			this.aW[q] <= 4 ? (aYJ[q] = 1 + ge.u0(20), 3 === this.aW[q] ? (aYH[q] = aYI[q] = 500, aYK[q] = aYL[q] = 1e3) : (aYL[q] = 250 + ge.u0(1501), aYK[q] = 500 + ge.u0(501), aYH[q] = 300 + ge.u0(201), aYI[q] = 100 + ge.u0(201))) : this.aW[
			q] <= 5 ? (aYK[q] = 1e3, aYL[q] = 1e3, aYJ[q] = 35 + ge.u0(16), aYH[q] = 300 + ge.u0(201), aYI[q] = 50 + ge.u0(101)) : (aYK[q] = aYL[q] = 800, aYJ[q] = 5, aYH[q] = 10, aYI[q] = 250), aYQ(q)
	}, this.aYN = function() {
		for (var a3 = gZ.aTE, aYM = f.g4, q = a3 - 1; 0 <= q; q--) this.aW[q + aYM] = 0;
		for (var jO = 0; jO < 6; jO++) {
			for (q = a3 + gZ.aRH[jO] - 1; a3 <= q; q--) this.aW[q + aYM] = jO;
			a3 += gZ.aRH[jO]
		}
	}, this.a3a = function(es, value) {
		a0Q[es] = Math.min(value, a0Q[es])
	}, this.bQ = function(es) {
		0 == --a0Q[es] && ! function(es) {
			(function(es) {
				aYK[es] !== aYL[es] && (aYK[es] += aYK[es] < aYL[es] ? 3 : -3);
				aYH[es] !== aYI[es] && (aYH[es] += aYH[es] < aYI[es] ? aYJ[es] : -aYJ[es], aYH[es] = (Math.abs(aYH[es] - aYI[es]) <= aYJ[es] ? aYI : aYH)[es]);
				a0Q[es] = ds.kh(aYK[es], 10)
			})(es), dH.a3u.a3V(es, ds.kh(aYH[es] * ci.iN[es], 1e3))
		}(es)
	}, this.aGZ = function(es, jB) {
		aYK[es] = aYL[es] = jB
	}
}

function a6B() {
	this.a7V = new Array(f.g), this.ew = new Array(f.g), this.it = new Uint8Array(f.g), this.hL = new Uint8Array(f.g), this.iO = new Uint16Array(f.g), this.iP = new Uint16Array(f.g), this.iS = new Uint16Array(f.g), this.iT = new Uint16Array(f.g),
		this.iF = new Uint32Array(f.g), this.a8t = new Uint32Array(f.g), this.iN = new Uint32Array(f.g), this.eC = null, this.a28 = null, this.cj = null, this.a29 = null, this.dG = new Uint16Array(f.g), this.a7N = new Uint16Array(f.g), this.a7M =
		new Uint16Array(f.g), this.a7P = new Uint16Array(f.g), this.a7L = new Uint8Array(f.g), this.j2 = new Uint16Array(f.g), this.e = function() {
			this.a7V.fill(""), this.ew.fill(""), this.it.fill(0), this.hL.fill(0), this.iO.fill(0), this.iP.fill(0), this.iS.fill(0), this.iT.fill(0), this.iF.fill(0), this.a8t.fill(0), this.iN.fill(0), this.eC = new Array(f.g), this.a28 = new Array(
				f.g), this.cj = new Array(f.g), this.a29 = new Array(f.g), this.dG.fill(0), this.a7N.fill(0), this.a7M.fill(0), this.a7P.fill(0), this.a7L.fill(0), this.j2.fill(0)
		}
}

function aIx() {
	var km, aSV, aSW, aPs;

	function aSX(q) {
		c4.c5(8, c4.rR, new qh(21, {
			qi: q,
			qj: 0,
			qk: 10
		}))
	}
	this.show = function() {
		km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), aSV.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, aSW = [new k7(L(460), function() {
		aSX(5)
	}, 0, 0, 1), new k7(L(461), function() {
		aSX(6)
	}, 0, 0, 1), new k7(L(462), function() {
		aSX(7)
	}, 0, 0, 1), new k7("Audit Log", function() {
		aSX(12)
	}, 0, 0, 1)], aPs = [new k7("⬅️ " + L(6), function() {
		c4.kp()
	})], km = new ko(L(429), aPs), aSV = new aLF(aSW, km.kr)
}

function a6m() {
	var aYT = 501,
		aYU = (this.aVH = new Uint32Array(aYT), this.a06 = new Uint32Array(aYT), this.yd = new Uint16Array(aYT), this.aVD = 0, 1),
		aRt = 0;

	function aYV(self) {
		self.max.fill(0)
	}

	function aYX(self, q) {
		self.max[0] = Math.max(self.aVH[q], self.max[0]), self.max[1] = Math.max(self.a06[q], self.max[1]), self.max[2] = Math.max(self.yd[q], self.max[2])
	}
	this.max = [0, 0, 0], this.aVQ = 0, this.a46 = new Array(21), this.aVM = null, this.go = function() {
		this.aVM = [L(498), L(499), L(500), L(501), L(502), L(503), L(504), L(505), L(23), L(349), L(506), L(507), L(508), L(509), "", L(510), L(511), L(512), L(391), L(513), L(514)]
	}, this.e = function() {
		this.aVD = 0, aYU = 1, this.aVQ = 0, aRt = 0, aYV(this), this.a46.fill(0)
	}, this.dM = function(player, d6) {
		v.cw.aEZ(player) && (this.a46[0] += d6 + 1, this.a46[1]++, this.a46[12] += a9.dU[1])
	}, this.aCN = function(player, dP) {
		__fx.donationsTracker.logDonation(player, dP, a9.dU[0], h8.yQ());
		player === f.al && (eo.aCN(a9.dU[0], a9.dU[1], dP), this.a46[12] += a9.dU[1], this.a46[16] += a9.dU[0]), dP === f.al && (eo.aCP(a9.dU[0], player), this.a46[10] += a9.dU[0])
	}, this.dc = function(player) {
		v.cw.aEZ(player) && (this.a46[2]++, this.a46[12] += a9.dU[1])
	}, this.eG = function(player) {
		v.cw.aEZ(player) && (this.a46[19]++, this.a46[12] += a9.dU[1])
	}, this.aPm = function(player) {
		v.cw.aEZ(player) && this.a46[20]++
	}, this.aDu = function(player, aLY, t) {
		v.cw.aEZ(player) && (this.a46[t] += aLY)
	}, this.bQ = function() {
		var self;
		this.aVQ || 0 < aRt-- || ((self = this).aVH[self.aVD] = ci.iF[f.al], self.a06[self.aVD] = ci.iN[f.al], self.yd[self.aVD] = dV.ye(f.al), aYX(self, self.aVD), self.aVD++, self.aVD === aYT && function(self) {
			aYV(self), aYX(self, 0), self.aVD = 1 + ds.kh(aYT, 2);
			for (var q = 1; q < self.aVD; q++) self.aVH[q] = self.aVH[2 * q], self.a06[q] = self.a06[2 * q], self.yd[q] = self.yd[2 * q], aYX(self, q);
			aYU *= 2
		}(self), aRt = aYU - 1, h1.kE(), 0 === ci.hL[f.al] && (self.aVQ = bR.el()))
	}
}

function hC() {
	a1z = 0, aYZ = 2048, a20 = new Uint32Array(4 * aYZ), aYa = 0, aYb = new Uint32Array(aYZ), aYc = new Uint8Array(au.av * au.fp)
}

function aEM(player) {
	a21 = player, aKu = !1, aYd(), aYe();
	for (var q = dC.tT(a21) - 1; 0 <= q; q--) aKw = q, aYf();
	aKu && aYg()
}

function aYg() {
	a4S.a22(), a4S.a27()
}

function aYf() {
	a2G = dC.tb(a21, aKw), aKx = dC.tf(a21, aKw), aLB = dC.aYh(a21, aKw), aYi(), (0 !== a1z && (aYj(), aYk()) ? aKp : aKt)()
}

function aYk() {
	if (!((aL9 = ds.kh(aKx, a1z)) > f.g3)) {
		if (!aLB) return !1;
		var aYl = a1z * (1 + f.g3);
		aKx += v.cw.aDn(a21, aYl - aKx), aL9 = ds.kh(aKx, a1z)
	}
	return !0
}

function aYj() {
	for (var q = a1z - 1; 0 <= q; q--) aYc[ds.kh(a20[q], 4)] = 0
}

function aKt() {
	1 === dC.tT(a21) && eE.aEP(a21);
	var bT = v.cw.aCg(a21, aKx);
	dL.aDu(a21, aKx - bT, 12), dC.aYm(a21, aKw)
}

function aYd() {
	for (var player = a21, eC = ci.eC, n = Math.min(eC[player].length, aYZ), jB = 0, aYn = aYb, q = n - 1; 0 <= q; q--) aYn[jB++] = eC[player][q];
	aYa = jB
}

function aYe() {
	for (var q = ci.eC[a21].length - 1; 0 <= q; q--) a6.cs(ci.eC[a21][q]) && a6.a2N(ci.eC[a21][q], a21);
	ci.eC[a21] = []
}

function aYi() {
	a1z = 0, (a2G === f.g ? aYo : aYp)()
}

function aYp() {
	for (var es, xx, q, a23 = a6.a23, jl = 3; 0 <= jl; jl--)
		for (q = aYa - 1; 0 <= q; q--) es = aYb[q] + a23[jl], xx = ds.kh(es, 4), 0 === aYc[xx] && a6.a24(es) && a6.a25(es) === a2G && (aYc[xx] = 1, a20[a1z++] = es)
}

function aYo() {
	for (var es, xx, q, a23 = a6.a23, jl = 3; 0 <= jl; jl--)
		for (q = aYa - 1; 0 <= q; q--) es = aYb[q] + a23[jl], xx = ds.kh(es, 4), 0 === aYc[xx] && a6.fB(es) && (aYc[xx] = 1, a20[a1z++] = es)
}

function aWJ(r5) {
	var a4D = document.createElement("div"),
		js = document.createElement("div"),
		aYq = [];

	function r8() {
		r9.rA() || (this.style.backgroundColor = v.color.rB(b7.qX, 50))
	}

	function r7() {
		this.style.backgroundColor = b7.qX
	}
	this.lA = function(aYr, cQ) {
			aYq[2].textContent = aYr + 1 + " / " + cQ
		}, this.show = function(en) {
			en = bk.co.kI(en, bk.co.kJ(en)), js.appendChild(bk.cT.transform(en)), document.body.appendChild(a4D)
		}, this.resize = function() {
			var ar = v.w.kP(.03, .5);
			a4D.style.width = 10 * ar + "px", a4D.style.font = v.w.bA(1, .75 * ar), v.w.kV(a4D, 4), js.style.top = ar + "px", js.style.font = v.w.bA(0, .55 * ar), v.w.kV(js, 2), a4D.style.height = ar + js.offsetHeight + "px";
			for (var q = 0; q < 3; q++) v.w.kV(aYq[q], 6), aYq[[0, 1, 3][q]].style.width = 2 * ar + "px";
			for (q = 0; q < 4; q++) aYq[q].style.height = ar + "px", v.w.kV(aYq[q], 2);
			aYq[2].style.width = 4 * ar + "px", aYq[1].style.left = 2 * ar + "px", aYq[2].style.left = 4 * ar + "px", aYq[3].style.left = 8 * ar + "px"
		}, this.lj = function() {
			for (var q = 0; q < 4; q++) aYq[q].onclick = null, aYq[q].onmouseover = null, aYq[q].onmouseout = null;
			c4.removeChild(document.body, a4D), a4D = js = aYq = null
		}, a4D.style.position = "absolute", a4D.style.color = b7.b9, a4D.style.zIndex = "3", a4D.style.right = "0", a4D.style.top = "0", js.style.position = "absolute", js.style.height = "auto", js.style.color = b7.b9, js.style.backgroundColor = b7
		.qX, js.style.left = "0", js.style.width = "100%", js.style.overflowWrap = "break-word", a4D.appendChild(js);
	for (var q = 0; q < 4; q++) aYq[q] = document.createElement("div"), aYq[q].style.position = "absolute", aYq[q].style.backgroundColor = b7.qX, aYq[q].style.color = b7.b9, aYq[q].style.top = "0", aYq[q].style.display = "flex", aYq[q].style
		.justifyContent = "center", aYq[q].style.alignItems = "center", aYq[q].style.userSelect = "none", aYq[q].style.outline = "none", aYq[q].style.font = "inherit", 2 !== (aYq[q].aWI = q) && (aYq[q].onclick = r5, aYq[q].onmouseover = r8, aYq[q]
			.onmouseout = r7), a4D.appendChild(aYq[q]);
	aYq[0].textContent = "◀", aYq[1].textContent = "▶", aYq[3].textContent = "✖"
}

function pZ() {
	function aYs(q, type, aFM, sj) {
		fa.fE.data.push({
			t: q,
			type: type || 0,
			value: aFM || 0,
			aFM: aFM || 0,
			sj: sj || 0
		})
	}

	function aYt(q, type, aFM, sj) {
		fa.fE.data.push({
			t: q,
			type: type,
			value: aFM || "",
			aFM: aFM || "",
			sj: sj || 0
		})
	}

	function aYu(eT) {
		for (var q = fa.fE.data.length; q < eT; q++) fa.fE.data.push(null)
	}
	this.data = [], this.e = function() {
		aYs(0, 1, 0, 5), aYs(1, 1, 1), aYs(2, 0), aYt(3, 2), aYs(4, 1), aYt(5, 2, "system-ui", 2), aYs(6, 0), aYs(7, 0, 0), aYs(8, 0), aYs(9, 1, 1), aYs(10, 1), aYs(11, 1, 1), aYt(12, 2, navigator.language), aYs(13), aYs(14), aYs(15, 0, 1), aYs(
				16, 0, 4), aYu(100), aYt(100, 2), aYt(101, 2), aYt(102, 2), aYt(103, 2), aYt(104, 2), aYt(105, 2), aYt(106, 2), aYs(107), aYs(108), aYs(109), aYt(110, 2), aYs(111), aYs(112), aYs(113), aYt(114, 2), aYs(115), aYt(116, 2), aYs(117,
				1), aYt(118, 2, "", 2), aYs(119, 1, 0, 1), aYt(120, 2), aYs(121, 1, ~~(262144 * Math.random())), aYt(122, 2, "Player " + Math.floor(1e3 * Math.random())), aYs(123), aYt(124), aYs(125, 1), aYt(126, 2), aYs(127, 0, 1), aYs(128),
			aYs(129), aYs(130), aYs(131), aYs(132), aYt(133, 2), aYs(134, 0, 5), aYt(135, 2), aYt(136, 2), aYs(137), aYs(138), aYs(139), aYs(140), aYs(141), aYs(142), aYs(143), aYs(144), aYt(145, 2), aYs(146), aYs(147), aYt(148, 2), aYs(149),
			aYs(150, 0, 1), aYt(151, 2), aYs(152, 0, 5), aYs(153, 1), aYs(154, 1), aYt(155, 2), aYt(156, 2), aYs(157), aYs(158), aYs(159), aYs(160), aYt(161, 2), aYs(162, 0, 1024), aYt(163, 2, "0,0,0"), aYt(164, 2, "100,100,100"), aYt(165, 2,
				"30,30,30"), aYt(166, 2, "70,70,70"), aYt(167, 2, "100,100,100"), aYt(168, 2, "85,85,85"), aYt(169, 2, "100,100,100");
		for (var q = 0; q < 4; q++) aYt(170 + q, 2, "255,255,255");
		aYt(174, 2), aYt(175, 2), aYs(176, 0, 200), aYu(180), aYs(180, 0), aYs(181, 0), aYs(182, 0, 1023), aYt(183, 2)
	}, this.lA = function(t, value) {
		this.data[t].value = value
	}, this.a0U = function(t, value) {
		this.lA(t, value);
		var value = String(value),
			n = value.length;
		5e4 < n ? console.log("storage value too large: index " + t + " size " + n) : (fa.lM.save(t, value), fa.lM.save(t, String(this.data[t].sj), !0))
	}, this.aF6 = function(t) {
		return Number(this.data[t].value)
	}, this.aYv = function(t) {
		return String(this.data[t].value)
	}
}

function a63() {
	var a1a = 0;
	this.e = function() {
		a5U.e(), a1a = 0
	}, this.setState = function(aYw) {
		a1a = aYw
	}, this.bj = function() {
		return a1a
	}, this.aGQ = function() {
		this.setState(8), c4.ml()
	}, this.lK = function(eL) {
		if (!au.rl) return !1;
		if (!(bR.eM < 400)) {
			if ("Enter" === eL.key || "Escape" === eL.key) {
				if (this.aYx()) return !0;
				if ("Enter" === eL.key) {
					if (0 === a1a) return !0;
					if (7 === a1a) return !0
				}
			}
			return !1
		}
	}, this.aPU = function() {
		a5a.resize()
	}, this.aYx = function() {
		return !!a5a.eP()
	}, this.fY = function(aD, aE) {
		!au.rl || a5a.fY(aD, aE) || 6 === a1a && oH.fY(aD, aE) || a5Z.fY(aD, aE) || vw.fY(aD, aE)
	}, this.fc = function(aD, aE) {
		!vw.vm && a5U.fc(aD, aE, !0) || vw.fc(aD, aE)
	}, this.click = function(aD, aE) {
		vw.vy()
	}, this.fb = function(aD, aE, deltaY) {}, this.aPV = function() {
		a5U.vt(), bR.bS = !0
	}, this.aR = function() {
		8 !== a1a && 10 !== a1a && (b5.imageSmoothingEnabled = !0, this.a35(), 0 !== a1a && (vw.aR(), oG.aR(), this.aLr(), a5Z.aR()), 0 !== a1a && 6 === a1a && oH.aR(), a5a.aR(), c4.aR())
	}, this.a35 = function() {
		var aYz, aYy;
		if (__fx.makeMainMenuTransparent) b5.clearRect(0, 0, ao.ap, ao.ar);
		else au.rl ? (aYy = ao.ap / au.av, aYz = ao.ar / au.fp, b5.setTransform(aYy = aYz < aYy ? aYy : aYz, 0, 0, aYy, Math.floor((ao.ap - aYy * au.av) / 2), Math.floor((ao.ar - aYy * au.fp) / 2)), b5.drawImage(au.qN, 0, 0), b5.setTransform(1,
			0, 0, 1, 0, 0), b5.fillStyle = b7.k6) : b5.fillStyle = b7.bc, b5.fillRect(0, 0, ao.ap, ao.ar)
	}, this.aLr = function() {
		var aE = Math.floor(.3 * ao.ar),
			canvas = iQ.v7("territorial.io"),
			jN = (jN = 1.75 * ao.ar / canvas.width) * canvas.width < .98 * ao.ap ? .98 * ao.ap / canvas.width : jN,
			aD = (b5.globalAlpha = .15, b5.imageSmoothingEnabled = !1, Math.floor(.5 * (ao.ap - jN * canvas.width))),
			aD = Math.floor(aD / jN),
			aE = Math.floor(aE - .5 * canvas.height * jN),
			aE = Math.floor(aE / jN);
		b5.setTransform(jN, 0, 0, jN, aD, aE), b5.drawImage(canvas, aD, aE), b5.setTransform(1, 0, 0, 1, 0, 0), b5.globalAlpha = 1, b5.imageSmoothingEnabled = !0
	}
}

function aOf() {
	this.a0Y = function(dr, player) {
		eo.uD(f.al, player, dr), bg.ov.aMS(dr, player)
	}, this.aBo = function(player) {
		eo.aCK(player, 0), bg.ov.aMV(player)
	}, this.aZ0 = function(aZ1, player) {
		eo.aCL(aZ1, player), bg.ov.aMW(aZ1, player)
	}, this.a5R = function() {
		f.gB || f.gC || bg.aWo.a5R()
	}
}

function pe() {
	this.e = function() {
		! function() {
			var data = fa.fE.data;
			0 === data[2].sj && (ao.ar > ao.ap || 0 !== bL.id) && (data[2].value = data[2].aFM = 1);
			0 === data[100].sj && (data[100].value = data[100].aFM = (0 === bL.id ? "Player " : 1 === bL.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var q, data = fa.fE.data,
			n = data.length;
		for (q = 0; q < n; q++) {
			var sg = fa.lM.wD(q, !0);
			data[q] && data[q].sj === sg && (null === (sg = fa.lM.wE(q)) ? data[q].value = data[q].aFM : 2 === data[q].type ? data[q].value = sg : (sg = Number(sg), isNaN(sg) ? data[q].value = data[q].aFM : data[q].value = sg))
		}
	}
}

function pa() {
	this.lA = function(t, value) {
		2 !== fa.fE.data[t].type && (value = Math.floor(value)), fa.fE.data[t].value !== value && (fa.fE.a0U(t, value), 0 === t ? (c4.ml(), sR.e(), c4.c5(2)) : 1 === t ? ao.a71(1) : 2 === t ? ao.a71(0) : 5 === t && (v.w.aQ6(), ao.a71(0)))
	}, this.a4i = function() {
		for (var data = fa.fE.data, q = 0; q < 100; q++) data[q] && fa.fE.a0U(q, data[q].aFM);
		v.w.aQ6(), ao.a71(1)
	}, this.aF3 = function() {
		for (var data = fa.fE.data, q = 0; q < data.length; q++) data[q] && fa.fE.lA(q, data[q].aFM)
	}, this.aZ5 = function() {
		for (var jO = fa.fE, q = 128; q < 135; q++) jO.a0U(q, jO.data[q].aFM)
	}, this.aV1 = function(data) {
		fa.l9.lA(109, data.a1O), fa.l9.lA(107, data.aHw), fa.l9.lA(108, data.aHx), fa.l9.lA(112, data.aHy), fa.l9.lA(111, data.aHm), fa.l9.lA(113, data.rI), fa.l9.lA(135, data.aIP), fa.l9.lA(136, data.aIW), fa.l9.lA(137, data.aIO), fa.l9.lA(138,
			data.aIV), fa.l9.lA(139, data.aIQ), fa.l9.lA(141, data.aIS), fa.l9.lA(142, data.aIX), fa.l9.lA(143, data.aIU), fa.l9.lA(144, data.aIY)
	}
}

function gL() {
	this.e = function() {
		8 === f.gI && eo.aCC()
	}, this.aKl = function(aZ6) {
		var elo = f.data.elo,
			aCT = (elo[aZ6] - elo[1 - aZ6]) / 10,
			aCT = 8 / (1 + Math.pow(2, aCT / 32)),
			aCT = Math.floor(10 * aCT + .5),
			aZ8 = elo[aZ6] + aCT,
			aCH = this.aCD(aZ8),
			elo = this.aCD(elo[1 - aZ6] - aCT),
			aCT = (0 === aZ6 ? eo.aCG(aCH, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : eo.aCG(elo, aCH, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aZ8 * ds.sqrt(aZ8) >> 8),
			elo = ((1 + f.gJ) * aCT / 100).toFixed(2);
		aZ6 === f.al ? eo.ev(640, L(515, [elo]), 40, 0, b7.b9, b7.ex, -1, !1) : eo.ev(640, L(516, [ci.ew[aZ6], elo]), 40, 0, b7.b9, b7.ex, -1, !1)
	}, this.aCD = function(elo) {
		return 16e3 === (elo = ds.dt(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function a5u() {
	var ar, canvas, ss, aZB, aZC, aZD = -1;

	function aZE() {
		var j6, sx = canvas.getContext("2d", {
			alpha: !0
		});
		sx.clearRect(0, 0, ar, ar), sx.fillStyle = b7.qX, sx.fillRect(0, 0, ar, ar), 9 === aZB && (sx.fillStyle = b7.aJi, sx.fillRect(0, 0, ar, ar)), sx.fillStyle = b7.b9, sx.fillRect(0, 0, ar, 1), sx.fillRect(0, 0, 1, ar), sx.fillRect(0, ar - 1, ar,
			1), sx.fillRect(ar - 1, 0, 1, ar), j6 = .9 * ar / iQ.get(0).width, sx.imageSmoothingEnabled = !0, sx.setTransform(j6, 0, 0, j6, Math.floor((ar - j6 * iQ.get(0).width) / 2), Math.floor((ar - j6 * iQ.get(0).height) / 2)), sx.drawImage(
			iQ.get(0), 0, 0), sx.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aZF(fg, fh) {
		if (!e2.hY) return fg <= ar + fx.gap && fh >= h5.aE ? 9 : -1;
		if (fg <= 4 * ar + fx.gap) {
			if (fh >= h5.aE) return 0;
			if (fh >= h5.aE - ar - aZC * fx.gap) return 2
		} else if (fg <= 7 * ar + fx.gap && fh >= h5.aE - ar - aZC * fx.gap) return 1;
		return -1
	}
	this.hY = !1, this.e = function() {
		aZB = -1, this.hY = !1, aZC = bL.bM.bN() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ar = h5.ar, (canvas = document.createElement("canvas")).width = ar, canvas.height = ar, ss = v.w.bA(1, (bL.bM.bN() ? .5 : .45) * ar), aZE()
	}, this.aXB = function() {
		return !(1 !== f.eR || f.gE || (f.gC ? !h6.hZ : this.hY && f.gB))
	}, this.xn = function() {
		this.hY = !this.hY, this.hY ? (h6.xm(!1), f.gC && h6.hZ && h6.oD(!0), this.aWc(), 9 === aZB && (aZB = 0)) : (aZB = -1, aZE(), !f.gB || 1 !== f.eR || f.gE || f.gC || bL.bM.setState(1)), bR.bS = !0
	}, this.aWc = function() {
		(f.gB || f.gC) && 1 === f.eR && (h4.hM(!0), f.gE || setTimeout(function() {
			gr.nc()
		}, 0), bL.bM.setState(0))
	}, this.fY = function(fg, fh) {
		return 0 <= (aZD = aZF(fg, fh)) || !e2.hY || f.gB || f.gC || h1.xX || e2.xn(), aZD
	}, this.fc = function(fg, fh) {
		fg = aZF(fg, fh);
		fg !== aZB && (aZB = fg, this.hY || aZE(), bR.bS = !0)
	}, this.xC = function(fg, fh) {
		fg = aZF(fg, fh);
		return -1 !== fg && aZD === fg && (this.hY ? f.fZ ? (0 <= fg && h6.xm(!1), !f.gC) : (0 === fg ? f.hN() : 1 === fg ? this.xn() : 2 === fg && c4.c5(1, 0), !0) : 9 === fg && (this.xn(), !0))
	}, this.aR = function() {
		var ap;
		this.hY ? (ap = Math.floor(5.5 * ar), b5.setTransform(1, 0, 0, 1, fx.gap, h5.aE), b5.fillStyle = b7.qX, b5.fillRect(0, 0, ap, ar), 0 === aZB ? (b5.fillStyle = b7.aJi, b5.fillRect(0, 0, 4 * ar, ar)) : 1 === aZB && (b5.fillStyle = b7.aJi,
				b5.fillRect(4 * ar, 0, Math.floor(1.5 * ar), ar)), b5.fillStyle = b7.b9, b5.fillRect(0, 0, ap, 1), b5.fillRect(0, 0, 1, ar), b5.fillRect(4 * ar, 0, 1, ar), b5.fillRect(0, ar - 1, ap, 1), b5.fillRect(ap - 1, 0, 1, ar), b5
			.font = ss, v.w.textBaseline(b5, 1), v.w.textAlign(b5, 1), b5.fillText(L(517), 2 * ar, .54 * ar), ap = .4 * ar, e2.aVL(fx.gap + 4 * ar + (1.5 * ar - ap) / 2, h5.aE + .3 * ar, ap), ap = 1, b5.setTransform(1, 0, 0, 1, fx.gap, h5
				.aE - ap * aZC * fx.gap - ap * ar), b5.fillStyle = b7.qX, b5.fillRect(0, 0, 4 * ar, ar), aZB === ap + 1 && (b5.fillStyle = b7.aJi, b5.fillRect(0, 0, 4 * ar, ar)), b5.fillStyle = b7.b9, b5.fillRect(0, 0, 4 * ar, 1), b5
			.fillRect(0, 0, 1, ar), b5.fillRect(4 * ar, 0, 1, ar), b5.fillRect(0, ar - 1, 4 * ar, 1), b5.fillText(L(0 === ap ? 517 : 518), 2 * ar, .54 * ar), b5.setTransform(1, 0, 0, 1, 0, 0)) : b5.drawImage(canvas, fx.gap, h5.aE)
	}, this.e3 = function(player) {
		return 0 !== ci.hL[player] && 2 !== f.eR && !v.cw.is(player)
	}, this.aVL = function(aD, aE, n) {
		b5.setTransform(1, 0, 0, 1, aD, aE), b5.lineWidth = fx.a00, b5.strokeStyle = b7.b9, b5.beginPath(), b5.moveTo(0, 0), b5.lineTo(n, n), b5.moveTo(0, n), b5.lineTo(n, 0), b5.stroke()
	}
}

function aWm() {
	this.a86 = function(bf) {
		var username = fa.fE.data[122].value.slice(0, 20),
			username = (ln.gw(24 + 16 * username.length + 18), ln.pq(1, 0), ln.pq(6, 1), ln.pq(10, gc.aMQ), ln.pq(2, fa.fE.data[158].value), bg.mH.aO1(username), v.color.aWq(fa.af.vU()));
		ln.pq(6, username[0]), ln.pq(6, username[1]), ln.pq(6, username[2]), bg.af.bh = bf, bg.af.send(bf, ln.li)
	}, this.mp = function(aZK, aAK) {
		pm.e(), pm.pq(1, 0), pm.pq(6, 2), pm.pq(3, aZK), 2 === aZK ? pm.pq(2, aAK) : 3 === aZK ? lz.c2.hR(aAK, 7, pm) : 5 === aZK && (pm.pq(3, aAK.id), pm.pq(3, aAK.value), pm.pq(30, aAK.cW)), bg.af.send(bg.af.bh, pm.a2y())
	}
}

function aRo() {
	this.eM = bR.eM, this.t = 0, this.nj = 0, this.nh = 0, this.aZL = null, this.aZM = 7, this.aZN = 0, this.e = function() {
		this.nh = 0, this.aZL = [], this.t = 0, this.nj = 0
	}, this.aNS = function(li) {
		if (f.gE) this.nx(li);
		else if (this.aZL.push(li), 2 === f.eR) {
			for (var q = 0; q < this.aZL.length; q++) gi.gj.bQ(this.aZL[q]);
			this.aZL = []
		}
	}, this.nx = function(li) {
		2 !== f.eR && (gi.gj.bQ(li), d0.bQ(), h8.nx(this.nh), this.nh === f.gM ? (f.d3.bQ(), this.nh = 0, this.t = 0, this.nj = 0, this.eM = bR.eM) : (this.nh++, du.iR(), du.hM(!0), gr.render()))
	}, this.bQ = function() {
		ao.bQ(), f.gE ? (bR.bS = h8.nx(-1) || bR.bS, ny()) : (0 !== this.t || bR.eM >= this.eM && (this.eM += bR.nq * Math.floor(1 + (bR.eM - this.eM) / bR.nq), 2 === f.eR ? nr() : this.aZO(), this.t++, 27 < bR.eM - this.aZN)) && this.aZP(),
		nn(), bR.bS && (bR.bS = !1, no()), this.aZN = bR.eM
	}, this.aZP = function() {
		bR.bS = !0, nz(), this.t = 0
	}, this.aZO = function() {
		var wL, q;
		if (this.nj !== 7 * this.nh) nw(), gr.render();
		else {
			wL = !1;
			loop: for (; this.aZQ() && (wL = !0, nw(), 2 !== f.eR) && 0 < this.aZL.length;)
				for (q = this.aZM - 2; 0 <= q; q--)
					if (nw(), 2 === f.eR) break loop;
			wL ? gr.render() : (nr(), gr.a4B())
		}
	}, this.aZQ = function() {
		return 0 < this.aZL.length && (this.nh++, gi.gj.bQ(this.aZL[0]), this.aZL.shift(), !0)
	}
}

function aGK() {
	var aZR = 0;

	function aZW(lI, id) {
		aZR || (id ? 1 === id ? eo.aBW = L(520) + ": " + lI : c4.c5(4, 3, new a2k(L(521), lI, 1)) : c4.c5(4, 3, new a2k("⚠️ " + L(519), lI, 1)))
	}
	this.c3 = function(lI, aZS) {
		var aY, en;
		return aZR = aZS, c1.m0.aFc(c1.m0.a34(c1.m0.aZT(lI))), eo.aBW = "", !! function() {
			if (bo.size < 10) aZW("File Too Small");
			else {
				var aZY = bo.bp(12),
					cX = (aZY !== gc.rVersion && (cX = "Incompatible Version   Required: " + gc.rVersion, aZW(cX = (cX += "   Found: " + aZY) + ("   Compatible at " + bg.af.p6() + "/" + aZY), 1)), bo.bp(12)),
					aZZ = bo.bp(31);
				if (aZZ !== bo.size) aZW("Size Error: " + aZZ + " " + bo.size);
				else if (function(ar, aZY) {
						for (var es = bo.li, n = bo.size, px = aZY, q = 3; q < n; q++) px = px + es[q] & 4095;
						return px === ar || (aZW("Hash Error: " + px + " " + ar + " " + n), !1)
					}(cX, aZY)) return 1
			}
			return
		}() && (aY = bo, (en = f.data = new gR).mapType = aY.bp(2), en.mapProceduralIndex = aY.bp(8), en.mapRealisticIndex = aY.bp(8), en.mapSeed = aY.bp(14), en.mapName = aY.lv(5), 2 === en.mapType && aY.ly(), en.passableWater = aY.bp(1), en
			.passableMountains = aY.bp(1), en.playerCount = aY.bp(10), en.humanCount = aY.bp(10), en.selectedPlayer = aY.bp(9), en.gameMode = aY.bp(1), en.playerMode = aY.bp(2), en.battleRoyaleMode = aY.bp(2), en.numberTeams = aY.bp(4), en
			.isZombieMode = aY.bp(1), en.isContest = aY.bp(1), en.isReplay = aY.bp(1), en.elo = aY.lp(2, 14, 2), en.colorsType = aY.bp(1), en.colorsPersonalized = aY.bp(1), en.colorsData = aY.lp(10, 18, 512), en.selectableColor = aY.bp(1), en
			.teamPlayerCount = aY.lp(4, 10, 9), en.neutralBots = aY.bp(1), en.botDifficultyType = aY.bp(2), en.botDifficultyValue = aY.bp(4), en.botDifficultyTeam = aY.lp(4, 4, 9), en.botDifficultyData = aY.lp(10, 4, 512), en.spawningType =
			aY.bp(2), en.spawningSeed = aY.bp(14), en.spawningData = aY.lp(11, 12, 1024), en.selectableSpawn = aY.bp(1), en.playerNamesType = aY.bp(2), en.playerNamesData = aY.lt(10, 5, 512), en.selectableName = aY.bp(1), en.aIncomeType = aY
			.bp(2), en.aIncomeValue = aY.bp(8), en.aIncomeData = aY.lp(10, 8, 512), en.tIncomeType = aY.bp(2), en.tIncomeValue = aY.bp(8), en.tIncomeData = aY.lp(10, 8, 512), en.iIncomeType = aY.bp(2), en.iIncomeValue = aY.bp(8), en
			.iIncomeData = aY.lp(10, 8, 512), en.sResourcesType = aY.bp(2), en.sResourcesValue = aY.bp(11), en.sResourcesData = aY.lp(10, 11, 512), en.pv = aY.lp(10, 30, 0), !! function() {
				var aY = bo,
					iM = aY.bp(5),
					aZb = aY.bp(30),
					aZc = aY.bp(30);
				if (aZb + aZc > 8 * aY.size) return void aZW("Corrupted File");
				return function(n) {
						var aZf = new Uint8Array(n),
							aZg = new Uint16Array(n),
							aZh = new Uint32Array(n),
							aZi = new Uint32Array(n);
						d0.d1.o1 = aZf, d0.d1.o3 = aZg, d0.d1.o5 = aZh, d0.d1.o7 = aZi;
						for (var q = 0; q < n; q++) {
							var id = bo.bp(4);
							aZf[q] = id, aZg[q] = bo.bp(9), 0 === id ? aZh[q] = bo.bp(22) : 1 === id ? (aZh[q] = bo.bp(10), aZi[q] = bo.bp(10)) : 2 === id ? (aZh[q] = bo.bp(10), aZi[q] = bo.bp(9)) : 3 === id ? (aZh[q] = bo.bp(10), aZi[q] = bo
								.bp(27)) : 4 === id ? (aZh[q] = bo.bp(10), aZi[q] = bo.bp(16)) : 5 === id || 6 === id ? aZh[q] = bo.bp(10) : 7 === id ? aZh[q] = bo.bp(1) : 10 === id && (aZh[q] = bo.bp(20), aZi[q] = bo.bp(22))
						}
					}(aZb),
					function(n, iM) {
						var o9 = new Uint8Array(n),
							oB = new Array(n);
						oB.fill(0), d0.d1.o9 = o9, d0.d1.oB = oB;
						for (var q = 0; q < n; q++) o9[q] = bo.bp(1), oB[q] = bo.bp(iM)
					}(aZc, iM), 1
			}()) && (bo.t < 8 * bo.size - 13 || bo.t > 8 * bo.size ? (aZW("Out Of Bounds Error: " + bo.t + " " + 8 * bo.size), !1) : (d0.d1.hP = lI, 2 !== f.data.mapType || (aZW("Load base64 image...", 2), aZS)))
	}, this.m7 = function(m5, aZX) {
		var k = document.createElement("canvas"),
			y = k.getContext("2d");
		if (k.width = m5.width, k.height = m5.height, y.drawImage(m5, 0, 0), f.data.canvas = k, aZR || aZX) return f.eR ? void 0 : (f.data.mapType = 2, c4.ml(), void c4.c5(19));
		d0.aGN()
	}
}

function aIk() {
	this.fE = {}, this.ql = new Array(8), this.aIv = null, this.aIs = null, this.qy = 0, this.aAo = [0, 0], this.a2l = function() {
		c4.c5(5, 5)
	}, this.hW = function(aZj) {
		aZj && (oH.a83 = aZj), c4.ml(), oH.e()
	}, this.se = function() {
		c4.c5(0 === bi.bj() ? 5 : 0)
	}, this.aOY = function() {
		if (1 === fa.fE.data[130].value) c4.c5(8, c4.mt().p8, new qh(24, {
			aO4: fa.fE.data[125].value,
			qj: fa.fE.data[128].value,
			qk: fa.fE.data[129].value
		}));
		else {
			for (var a8 = (a8 = fa.fE.data[126].value.split(",")).slice(0, 10), q = 0; q < a8.length; q++) a8[q] = a8[q].trim().slice(0, 7).toUpperCase();
			1 === a8.length && 0 === a8[0].length && (a8 = []), c4.c5(8, c4.mt().p8, new qh(23, {
				aO4: fa.fE.data[125].value,
				a7W: a8
			}))
		}
	}, this.aLl = function(p8, target) {
		c4.c5(4, p8, new a2k("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + bg.af.ky(
				"/privacy"), !1, [new k7("⬅️ " + L(6), function() {
				c4.c5(p8)
			}), new k7("✅ Accept", function() {
				fa.l9.lA(140, 1), 0 === target ? c4.c5(2, p8) : c4.c5(8, p8, new qh(target))
			})]))
	}, this.aNO = function() {
		for (var q = 0; q < 8; q++) this.ql[q] = c1.lw.lx(bo.bp(5));
		this.ql[1] = "[" + this.ql[1] + "]", 5 === c4.rR && (c4.mt().aAV.lA(this.ql), c4.mt().resize())
	}, this.lJ = function(kk, ov, kd) {
		kk = v.cw.aI5(kk, 1, 1e6);
		var aZk = Math.max(1, 1 + Math.floor(.01 * (kk - 100))),
			ov = L(522, [ov]);
		return (ov += "<br>") + L(523, [kd]) + "<br>" + L(524, [aZk < 20 ? kk + aZk + "–" + (kk + 20) : kk + aZk]) + "<br>" + L(525, [kk])
	}
}

function aZl() {
	this.uW = function(player, id) {
		for (var aZm = ci.cj[player], n = aZm.length, q = 0; q < n; q++)
			if (cq.aZn(aZm[q], id)) return !0;
		return !1
	}, this.ua = function(player, a2) {
		for (var wx, aZo, a3, aZm = ci.cj[player], n = aZm.length, ap = au.av, aZq = cq.fF(a2), aZr = cq.fG(a2), a4V = -1, min = au.av * au.av + au.fp * au.fp, id = a6.uV(cq.cr(a2)), q = 0; q < n; q++)(aZo = (aZo = aZq - (wx = (a3 = aZm[q]) >>
			2) % ap) * aZo + (aZo = aZr - ~~((.5 + wx) / ap)) * aZo) < min && cq.aZn(a3, id) && (min = aZo, a4V = wx);
		return a4V
	}, this.aLS = function(ww, wx) {
		for (var id = a6.uV(cq.cr(wx)), aPq = cq.aPr, a3 = cq.cr(ww), aZs = -1, q = 0; q < 4; q++) {
			var ax = a3 + aPq[q];
			a6.a1n(ax) && a6.uV(ax) === id && (-1 === aZs || cq.aQR(cq.a4R(ax), wx) < cq.aQR(aZs, wx)) && (aZs = cq.a4R(ax))
		}
		return aZs
	}, this.wy = function(player, a2) {
		for (var aPq = cq.aPr, a3 = cq.cr(a2), q = 0; q < 4; q++) {
			var ax = a3 + aPq[q];
			if (a6.a24(ax) && a6.a2L(player, ax)) return !0
		}
		return !1
	}, this.wz = function(player, a2) {
		for (var aPq = cq.aPr, a3 = cq.cr(a2), q = 0; q < 4; q++) {
			var ax = a3 + aPq[q];
			if (a6.fB(ax)) return !0;
			if (a6.a24(ax)) {
				ax = a6.a25(ax);
				if (player !== ax && a4S.a2P(player, ax)) return !0
			}
		}
		return !1
	}, this.aMM = function(a2) {
		for (var aPq = cq.aPr, a3 = cq.cr(a2), q = 0; q < 4; q++) {
			var ax = a3 + aPq[q];
			if (a6.a24(ax)) {
				ax = a6.a25(ax);
				if (v.cw.is(ax)) return ax
			}
		}
		return -1
	}, this.cp = function(a3) {
		if (a6.a1n(a3))
			for (var aPq = cq.aPr, q = 0; q < 4; q++)
				if (a6.cs(a3 + aPq[q])) return !0;
		return !1
	}, this.zi = function(player, id) {
		for (var qj = player << 3, qk = qj + ae.af.cg[player], tc = ae.af.tc, td = ae.af.td, q = qj; q < qk; q++) {
			var te = td[q];
			if (tc[te] === id) return te
		}
		return -1
	}, this.zk = function(player) {
		return 0 === ae.af.cg[player] ? -1 : ae.af.td[player << 3]
	}, this.aDR = function(fg, fh) {
		var n = ae.af.am;
		if (n < 1) return -1;
		for (var ad = ae.af.ad, uo = 80, uq = -1, q = 0; q < n; q++) {
			var aH = cq.aZt(fg, fh, ad[q]);
			aH < uo && (uo = aH, uq = q)
		}
		return function(q, fg, fh) {
			if (q < 0) return;
			var aZy = ae.af.ad[q],
				aZz = cq.aa0(aZy),
				aZy = cq.aa2(aZy),
				q = 20 * (.9 + .1 * Math.log10(ae.af.ah[q]));
			return q = Math.max(q, cq.aa3(v.w.qn(.02, 1.7))), ds.aVk(cq.aa4(fg), cq.aa5(fh), aZz, aZy, q)
		}(uq, fg, fh) ? uq : -1
	}, this.uN = function(dh) {
		for (var n = ae.af.am, tc = ae.af.tc, q = 0; q < n; q++)
			if (tc[q] === dh) return a9.cn[2] = q, !0;
		return !1
	}, this.aDp = function(player) {
		for (var qj = player << 3, qk = qj + ae.af.cg[player], td = ae.af.td, ah = ae.af.ah, aW = 0, q = qj; q < qk; q++) aW += ah[td[q]];
		return aW
	}, this.ul = function(player, uK) {
		uK = ae.af.uf[uK];
		return this.wy(player, uK[uK.length - 1])
	}, this.uj = function(ww, wx, aH, aZv) {
		var ib = cq.fF(ww),
			ww = cq.fG(ww),
			ih = cq.fF(wx),
			wx = cq.fG(wx),
			ih = (aH = Math.max(aH, 1), ih - ib),
			wx = wx - ww,
			aF = ds.kh(Math.abs(ih) * aZv, aH),
			aZv = ds.kh(Math.abs(wx) * aZv, aH);
		return cq.a4d(ib + Math.sign(ih) * aF, ww + Math.sign(wx) * aZv)
	}, this.aBE = function(ue, a2) {
		for (var n = ue.length - 1, aD = cq.fF(a2), aE = cq.fG(a2), q = 0; q < n; q++) {
			var ww = ue[q],
				wx = ue[q + 1],
				az = cq.fF(ww),
				ww = cq.fG(ww),
				b3 = cq.fF(wx),
				wx = cq.fG(wx);
			if (!(aD !== az && aD !== b3 && Math.sign(aD - az) === Math.sign(aD - b3) || aE !== ww && aE !== wx && Math.sign(aE - ww) === Math.sign(aE - wx))) {
				if (az === b3 || ww === wx) return q;
				if (Math.abs(aD - az) === Math.abs(aE - ww) && Math.abs(aD - b3) === Math.abs(aE - wx)) return q
			}
		}
		return -1
	}, this.yc = function() {
		for (var aa6 = f7[0], ag = ae.af.ag, am = ae.af.am, a8 = [], q = 0; q < am; q++) v.cw.uX(aa6, ag[q] >> 3) && a8.push(q);
		return a8
	}, this.wu = function(player, ue) {
		for (var qj = player << 3, qk = qj + ae.af.cg[player], td = ae.af.td, uf = ae.af.uf, a3L = ue[0], a3M = ue[ue.length - 1], q = qj; q < qk; q++) {
			var es = uf[td[q]];
			if (es[0] === a3L && es[es.length - 1] === a3M) return !0
		}
		return !1
	}
}

function a6z() {
	var aD, aE, ar, a9V, aa7, aa8, aa9, aaA, aaB, ap, aIi, aQe;
	this.xX = !1, this.e = function(lI, aaC) {
		if (1 === bL.id && 13 <= bL.sj && bL.sj < 18) return aaC ? void(aIi = lI) : aIi !== lI ? void 0 : void bL.wG.saveString(200, lI);
		aaC && (aIi = lI, (aQe = document.createElement("a")).appendChild(document.createTextNode(aIi)), this.xX = !0, aQe.title = aIi, aQe.target = "_blank", aQe.href = aIi, aQe.style.textAlign = "center", aQe.style.color = b7.b9, aQe.style
			.position = "absolute", aQe.style.padding = "0px", aQe.style.margin = "0px", this.resize(), document.body.appendChild(aQe), bR.bS = !0)
	}, this.eP = function() {
		return !(!this.xX || (c4.removeChild(document.body, aQe), this.xX = !1))
	}, this.fY = function(eX, eY) {
		return !!this.xX && ((eX < aD || eY < aE || aD + ap < eX || aE + ar < eY || aD + ap - a9V < eX && eY < aE + a9V) && (bR.bS = !0, this.xX = !1, c4.removeChild(document.body, aQe)), !0)
	}, this.resize = function() {
		var ss, jg;
		this.xX && (aaA = Math.floor(.8 * (bL.bM.bN() ? ao.ap > ao.ar ? .6 : .55 : .4) * ao.bO), a9V = Math.floor(.15 * aaA), aa7 = Math.floor(.35 * a9V), aa8 = Math.floor(.5 * a9V), aa9 = Math.floor(2.5 * aa8), ar = a9V + aa7 + 3 * aa8, ss = v.w
			.bA(1, aa7 / ao.ed), aaB = Math.floor(ao.ed * ba.measureText(aIi, ss)), jg = ap = (aaA < aaB ? aaB : aaA) + 2 * aa9, ap = Math.min(ap, ao.ap - 2 * (bL.bM.bN() ? 2 : 1) * fx.gap), ss = v.w.bA(1, ap / jg * aa7 / ao.ed), aaB = Math
			.floor(ao.ed * ba.measureText(aIi, ss)), aD = Math.floor((ao.ap - ap) / 2), aE = Math.floor((ao.ar - ar) / 2), aQe.style.font = ss, aQe.style.top = Math.floor((aE + 1.4 * aa8 + a9V) / ao.ed) + "px", aQe.style.left = Math.floor((
				aD + (ap - aaB) / 2) / ao.ed) + "px")
	}, this.aR = function() {
		this.xX && (b5.fillStyle = b7.ex, b5.fillRect(aD, aE + a9V, ap, ar - a9V), b5.fillStyle = b7.aPA, b5.fillRect(aD, aE, ap, a9V), b5.fillStyle = b7.b9, b5.lineWidth = fx.a00, b5.strokeStyle = b7.b9, b5.strokeRect(aD, aE, ap, ar), b5
			.fillRect(aD, aE + a9V, ap, fx.a00), b5.font = v.w.bA(1, .48 * a9V), v.w.textAlign(b5, 1), v.w.textBaseline(b5, 1), b5.fillText(L(526), Math.floor(aD + (ap - .5 * a9V) / 2), Math.floor(aE + .55 * a9V)), e2.aVL(Math.floor(aD + ap -
				.8 * a9V), Math.floor(aE + .25 * a9V), Math.floor(.5 * a9V)), b5.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a7g() {
	var aG8 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aaD = [b7.aOi, b7.aOi, b7.aOj, b7.aOv, b7.aOw, b7.aOq, b7.aOz, b7.aOj, b7.aPB, b7.l8, b7.aP9, b7.bc],
		aaE = [
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
		aaF = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aaP(cO, cW, aaQ) {
		for (var jO = cO.length - 1; 0 <= jO; jO--) {
			var en = cO[jO];
			0 === en.id && en.cW === cW && (en.cX = "[Redacted Message]", aaQ) && (en.aaR = 1)
		}
	}
	this.kJ = function(aWC) {
		var aaG, a7X;
		return aWC.id < 5 && (aaG = "@" + lz.m0.bC(aWC.cW, 5)), 0 === aWC.id ? aaG + ": " + aWC.cX : 1 === aWC.id ? (a7X = "@" + lz.m0.bC(aWC.target, 5), 0 === aWC.ca ? 32768 <= aWC.value ? aaG + " voted with " + (aWC.value - 32768 + 1) +
				" gold against " + a7X + " to weaken the latter's admin position. 📉" : aaG + " voted with " + (aWC.value + 1) + " gold for " + a7X + " to strengthen the latter's admin position. 💪" : 1 === aWC.ca ? aaG + " sent " + Math.floor(
					aWC.value / 100) + " 🧈 gold to " + a7X + "." : aaG + " voted with " + (aWC.value / 10).toFixed(1) + " points for " + a7X + " to acknowledge the latter as clan leader. ✅") : 2 === aWC.id ? 0 === aWC.ca ? aaG +
			" was 🔇 muted for 1 Hour." : 1 === aWC.ca ? "The username of " + aaG + " was ✂️ redacted. Duration: 1 Day" : aaG + " 👢 was kicked." : 3 === aWC.id ? aaG + sO.aGF(aWC.ca, sO.a1N[aWC.ca][aWC.value]) + "@" + lz.m0.bC(aWC.target, 5) +
			sO.aGG(aWC.ca, sO.a1N[aWC.ca][aWC.value]) : 4 === aWC.id ? aaG + sO.aGF(5, sO.a1N[5][aWC.ca]) + "@" + lz.m0.bC(aWC.target, 5) + sO.aGG(5, sO.a1N[5][aWC.ca]) : 5 === aWC.id ? aaF[aWC.ca] : 6 === aWC.id ? "You are about to mention " +
			aWC.value + " player" + (1 === aWC.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aWC.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aWC.id ? aWC.cX : void 0
	}, this.kI = function(aWC, mh) {
		return {
			aWC: aWC,
			cX: mh,
			aaH: 0,
			fontSize: 1,
			kM: 0,
			aaI: aWC.id ? b7.aOu : b7.b9
		}
	}, this.aaJ = function(player, cN) {
		return (2 === cN ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.aaK = function(rF) {
		return aaD[rF]
	}, this.aaL = function(rF, rG) {
		return rF < 3 || 7 === rF ? aaE[rF][0] : 4 === rF ? aaE[rF][rG < 1 ? 0 : rG < 10 ? 1 : 2] : aaE[rF][rG < 10 ? 0 : 1]
	}, this.aaM = function(rG) {
		return 0 === rG
	}, this.rd = function(cN, cW) {
		for (var n8 = bk.bx.n8, bx = n8[cN], n = bx.length, q = 0; q < n; q++)
			if (cW === bx[q].cW) return bx[q];
		for (var jO = 0; jO < n8.length; jO++)
			if (cN !== jO)
				for (n = (bx = n8[jO]).length, q = 0; q < n; q++)
					if (cW === bx[q].cW) return bx[q];
		return null
	}, this.a1T = function(en) {
		return !!bk.rN && en.cW === bk.rN.cW
	}, this.nH = function(bx, aaN, aaO) {
		var a7W = [];
		loop: for (var q = aaN; q < aaO; q++) {
			var a4z = v.bB.rV(bx[q].username);
			if (a4z) {
				for (var jO = a7W.length - 1; 0 <= jO; jO--)
					if (a4z === a7W[jO].name) {
						a7W[jO].jB++;
						continue loop
					} a7W.push({
					name: a4z,
					jB: 1
				})
			}
		}
		if (a7W.sort(function(bz, jO) {
				return jO.jB - bz.jB
			}), 0 === a7W.length) return "";
		for (var lI = a7W[0].name + ": " + a7W[0].jB, q = 1; q < a7W.length; q++) lI += "   " + a7W[q].name + ": " + a7W[q].jB;
		return lI
	}, this.a15 = function(rF, rG, rH) {
		return 0 === aG8[rF].length ? "Rank: " + (rG + 1) : aG8[rF] + " Rank: " + (rG + 1) + (3 !== rF && rH < 100 ? "   " + aG8[3] + " Rank: " + (rH + 1) : "")
	}, this.aWD = function(cW) {
		for (var bm = bk.af.bm, q = 0; q < bm.length; q++) aaP(bm[q].cO, cW);
		aaP(bk.message.aWK(), cW, 1), bk.cT.aWD(cW)
	}
}

function a5t() {
	var me, aD, aE, aaS, aaT, aaU, eM, aaV, aaW, aaX, aaY, gap, zoom, aZ1, aaZ;

	function aaj(fg, fh, a3) {
		a6.cs(a3) || -1 === (fg = ae.co.aDR(fg, fh)) ? eo.aC3(a3) : eo.aC7(fg)
	}

	function aag(aaV) {
		for (var q = aZ1.length - 1; 0 <= q; q--)
			if (aZ1[q] === aaV) return 1
	}

	function aae(r) {
		var q, n;
		if (-1 !== r)
			for (n = me.length, q = 0; q < n; q++)
				if (me[q].xX && me[q].aD + 1 === r % 4 && me[q].aE + 1 === r >> 2) return q;
		return -1
	}

	function aac(fg, fh) {
		var kj = gap / 2;
		return fg < aD - aaS - 3 * kj || aD + 3 * aaS + 5 * kj < fg || fh < aE - aaS - 3 * kj || aE + 2 * aaS + 3 * kj < fh ? -1 : 4 * (fh < aE - kj ? 0 : fh < aE + aaS + kj ? 1 : 2) + (fg < aD - kj ? 0 : fg < aD + aaS + kj ? 1 : fg < aD + 2 * aaS +
			3 * kj ? 2 : 3)
	}
	this.aAW = function() {
		var q, jO, aab = [b7.a0L, b7.aOt, b7.k5, b7.aP4, b7.aP1];
		for (me = new Array(10), q = 0; q < 10; q++) me[q] = {
			id: q,
			xX: !1,
			aNq: 0,
			canvas: [],
			aD: 0,
			aE: 0
		};
		for (me[0].colors = [0, 1, 2, 3], me[0].aD = 0, me[0].aE = 0, me[1].colors = [1, 4], me[1].aD = 1, me[1].aE = 0, me[2].colors = [0, 1], me[2].aD = -1, me[2].aE = 0, me[3].colors = [0], me[3].aD = 0, me[3].aE = 0, me[4].colors = [0, 2],
			me[4].aD = 1, me[4].aE = 1, me[5].colors = [3], me[5].aD = 0, me[5].aE = -1, me[6].id = 20, me[6].colors = [0], me[6].aD = 1, me[6].aE = -1, me[7].id = 21, me[7].colors = [0], me[7].aD = 0, me[7].aE = 1, me[8].id = 16, me[8]
			.colors = [0], me[8].aD = 0, me[8].aE = 0, me[9].id = 10, me[9].colors = [4], me[9].aD = 2, me[9].aE = 0, q = 0; q < 10; q++)
			for (jO = 0; jO < me[q].colors.length; jO++) me[q].canvas.push(function(id, aMH) {
				if (id < 20) return v.canvas.a0M(iQ.get(3), id, aMH);
				var aMH = iQ.get(3).height,
					k = v.w.x(aMH, aMH),
					y = v.w.getContext(k);
				20 === id ? y.drawImage(iQ.get(18), 0, 0) : 21 === id && iX.a0.a0Z(iX.cT.tm + iX.cT.ts, y, 0, 0, aMH);
				return k
			}(me[q].id, aab[me[q].colors[jO]]))
	}, this.jM = function() {
		return me
	}, this.e = function() {
		aZ1 = [], aD = aE = eM = 0, aaT = aaU = -1e3, this.resize()
	}, this.resize = function() {
		aaS = Math.floor((bL.bM.bN() ? .075 : .0468) * ao.bO), zoom = aaS / iQ.get(3).height, gap = Math.floor(aaS / 3)
	}, this.xS = function(fg, fh) {
		return !!this.xX() && (bR.bS = !0, !!iX.a0.fY(fg, fh, aaW) || (fg = function(fg, fh) {
			aaU = aaT = -1e3;
			var aad = aae(aac(fg, fh));
			if (-1 === aad) return 0;
			if (1 !== me[aad].colors[me[aad].aNq])
				if (5 === aad) {
					if (! function() {
							var bT = performance.now();
							aaZ + 4e3 < bT && (aZ1 = []);
							aaZ = bT
						}(), aag(aaV)) return 1;
					aZ1.push(aaV), 16 < aZ1.length && aZ1.shift()
				} else if (6 === aad) {
				for (var q = aZ1.length - 1; 0 <= q; q--) 0 === ci.hL[aZ1[q]] && aZ1.splice(q, 1);
				0 < aZ1.length && (hE.aah(1, aZ1, !0) && gi.cw.aZ0(aZ1, aaV), aZ1 = [])
			} else if (2 === aad) dT.ka(aaV) && gi.gl.dW(h5.kb(), aaV);
			else if (3 === aad) f.gE && gi.gl.cv(aaX);
			else if (0 === aad)
				if (0 === me[0].aNq) {
					if (f.gF && h8.yQ() < 350) return 1;
					gt.tN(4), gi.gl.d5(h5.kb(), aaV)
				} else hF.aHK(aaV, h5.kb());
			else if (1 === aad) gi.gl.dX(h5.kb(), aaX);
			else if (9 === aad) gi.gl.dg(h5.kb());
			else {
				if (7 === aad) return gt.tN(0), iX.a0.show(fg, fh), 2;
				if (4 === aad) hE.aah(0, [aaV], !0) && gi.cw.aBo(aaV);
				else {
					if (8 !== aad) return 0;
					gi.gl.e7(h5.kb(), aaY, aaV)
				}
			}
			return 1
		}(fg, fh), this.eP(), 2 === fg && (iX.a0.xX = !0), 0 < fg))
	}, this.ec = function(fg, fh) {
		this.xX() || (aaT = fg, aaU = fh, eM = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = cq.ic(mouseX),
			coordY = cq.ig(mouseY),
			point = cq.cr(cq.a4d(coordX, coordY));
		cq.aDO(coordX, coordY) && aaj(mouseX, mouseY, point)
	}, this.click = function(fg, fh, xc) {
		var aDM = cq.ic(fg),
			aDN = cq.ig(fh),
			a2 = cq.a4d(aDM, aDN),
			a3 = cq.cr(a2),
			aai = (bL.bM.bN() ? .025 : .0144) * ao.bO,
			bT = performance.now();
		return !(Math.abs(fg - aaT) > aai || Math.abs(fh - aaU) > aai || eM + 500 < bT || (eM = bT, r9.rA() && (r9.vh = fg, r9.xA = fh, hG.bQ(1), hH.bQ(1)), !cq.aDO(aDM, aDN))) && (xc ? (aaj(fg, fh, a3), !1) : e2.hY || this.xX() || !v.cw.cy(f
			.al) || f.gC ? (this.eP(), !1) : (f.gE ? 0 <= (aaX = a5e.aHI(a2)) && (me[3].xX = !0) : 2 === f.eR ? a6.a24(a3) && (aaV = a6.a25(a3), v.cw.is(aaV) || (me[0].xX = !0, me[0].aNq = 1, me[7].xX = !0)) : (ae.dj.ka(f.al, a2) && (me[0]
				.xX = !0, me[0].aNq = 1, me[1].xX = !0, me[1].aNq = 0, me[9].xX = !0, me[9].aNq = 0), ae.aHL.aHM(f.al, a2) && (me[0].xX = !0, me[0].aNq = 1, me[1].xX = !0, me[1].aNq = 1, aaX = a9.cn[7]), a6.a4U(a3) ? (aaY = e8.e9.a4M(
				a3)) && (aai = cq.cr(aaY), me[8].xX = !0, aaV = a6.fB(aai) ? f.g : a6.a25(aai)) : (a6.jm(f.al, a3) && (aaW = f.al, me[0].xX = !0, me[0].aNq = 1, me[7].xX = !0), -1 !== (bT = a5e.aHJ(a2)) && (a6.fB(bT << 2) ? (aaV = f
				.g, a4S.a2Q(f.al) ? (me[0].xX = !0, me[0].aNq = 0) : dC.tT(f.al) && (me[0].xX = !0, me[0].aNq = 3)) : (aaV = a6.a25(bT << 2), me[0].aNq = 1, me[5].xX = function(aaV) {
				return !v.cw.is(aaV) && !aag(aaV) && hE.aah(1, [aaV], !1)
			}(aaV), me[7].xX || v.cw.is(aaV) || (aaW = aaV, me[7].xX = !0), me[4].xX = !v.cw.is(aaV) && !du.jY(aaV) && hE.aah(0, [aaV], !1), me[6].xX = function(aaV) {
				if (0 === aZ1.length) return !1;
				if (performance.now() > aaZ + 4e3) return !(aZ1 = []);
				return !aag(aaV) && ! function(aaV) {
					var q;
					if (f.j)
						for (q = aZ1.length - 1; 0 <= q; q--)
							if (!a4S.a2P(aaV, aZ1[q])) return 1;
					return
				}(aaV)
			}(aaV), a4S.a2P(aaV, f.al) ? (a4S.a2T(f.al, aaV) ? (me[0].aNq = 0, me[0].xX = !0) : dC.tT(f.al) && (me[0].aNq = 3, me[0].xX = !0), me[0].xX = this.aao()) : (me[2].xX = !0, dT.ka(aaV) ? me[2].aNq = 0 : me[2]
				.aNq = 1, me[0].xX = !0))))), this.aak(fg, fh)))
	}, this.aak = function(fg, fh) {
		return aD = fg - Math.floor(aaS / 2), aE = fh - Math.floor(aaS / 2), !!this.xX()
	}, this.fc = function(fg, fh) {
		return !!this.xX() && (iX.a0.xX ? !iX.a0.a0X(fg, fh) && (iX.a0.xX = !1, bR.bS = !0) : function(a5J, fg, fh) {
			fg = aac(fg, fh);
			if (0 <= aae(fg)) return !1;
			if ((1 === fg || 6 === fg) && 0 <= aae(2)) return !1;
			if ((6 === fg || 9 === fg) && 0 <= aae(10)) return !1;
			return a5J.eP(), bR.bS = !0
		}(this, fg, fh))
	}, this.eP = function() {
		for (var q = me.length - 1; 0 <= q; q--) me[q].xX = !1, me[q].aNq = 0;
		iX.a0.xX = !1
	}, this.xX = function() {
		return this.aao() || iX.a0.xX
	}, this.aao = function() {
		for (var n = me.length, q = 0; q < n; q++)
			if (me[q].xX) return !0;
		return !1
	}, this.aR = function() {
		if (this.xX())
			if (iX.a0.xX) iX.a0.aR();
			else {
				var q, y = b5,
					jO = me,
					n = jO.length,
					aas = (aaS + gap) / zoom;
				for (y.imageSmoothingEnabled = !0, y.setTransform(zoom, 0, 0, zoom, aD, aE), q = 0; q < n; q++) jO[q].xX && b5.drawImage(jO[q].canvas[jO[q].aNq], jO[q].aD * aas, jO[q].aE * aas);
				y.imageSmoothingEnabled = !1, y.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a6I() {
	this.fC = new yp, this.aLK = new aNo, this.aLL = new aTX, this.performance = new aGT, this.dI = new aSy, this.a3u = new a3T, this.a3s = new aSE, this.aLJ = new wr, this.aat = new aMK, this.e = function() {
		this.fC.e(), this.aLL.e(), this.performance.e(), this.dI.e(), this.a3u.e()
	}, this.bQ = function() {
		this.performance.bQ(), this.fC.bQ(), this.aLL.aTZ()
	}
}

function wO() {
	var aNe = 12e3;
	this.show = function(hO) {
		return !hO && !hU.wR() && (0 === bL.id ? hU.oK.show() : !(bR.eM < aNe) && (hO = 1 === bL.id ? 72e4 : 108e4, aNe = bR.eM + hO, 2 === gc.gd) && bL.bM.aF9(Math.floor(hO)))
	}
}

function a6Q() {
	this.aau = [], this.aav = [], this.e = function() {
		this.aau = [], this.aav = []
	}, this.bQ = function() {
		0 <= this.aau.length && this.aaw(this.aau), 0 <= this.aav.length && this.aaw(this.aav)
	}, this.aaw = function(a8) {
		for (var jO = -1, q = a8.length - 1; 0 <= q; q--)
			if (a8[q].eM--, a8[q].eM <= 0) {
				jO = q;
				break
			} for (q = jO; 0 <= q; q--) a8.shift()
	}, this.aah = function(id, f8, aax) {
		return this.a4b(this.aau, id, f8, aax)
	}, this.aNY = function(id, f8, aax) {
		return this.a4b(this.aav, id, f8, aax)
	}, this.a4b = function(a8, id, f8, aax) {
		return ! function(a8, id, f8) {
			var q, iW;
			for (q = f8.length - 1; 0 <= q; q--)
				for (iW = a8.length - 1; 0 <= iW; iW--)
					if (a8[iW].player === f8[q] && id === a8[iW].id) return 1;
			return
		}(a8, id, f8) && (aax && function(a8, id, f8) {
			var q;
			for (q = f8.length - 1; 0 <= q; q--) a8.push({
				player: f8[q],
				id: id,
				eM: 384
			})
		}(a8, id, f8), !0)
	}
}

function a5p() {
	var size, a3c;
	this.e = function() {
		size = f.g6, a3c = new Uint16Array(f.g);
		for (var g4 = f.g4, q = f.g6 - 1; 0 <= q; q--) a3c[q] = g4 + q
	}, this.bQ = function() {
		dH.aat.bQ();
		for (var q = size - 1; 0 <= q; q--)
			if (0 === ci.hL[a3c[q]]) {
				bz = void 0;
				var bz = q;
				size--, a3c[bz] = a3c[size]
			} else gv.bQ(a3c[q])
	}, this.aVy = function(es) {
		a3c[size++] = es
	}
}

function kw() {
	var mJ;
	this.a77 = [], this.mJ = document.createElement("div"), this.kz = function(lI, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = lI, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.mJ.appendChild(
			title), title
	}, this.lH = function(lI, marginBottom) {
		var lG = document.createElement("p");
		return lG.textContent = lI, lG.style.fontSize = "0.75em", lG.style.lineHeight = "1.2em", lG.style.marginBottom = marginBottom || "0", this.mJ.appendChild(lG), lG
	}, this.aIM = function(lI) {
		var ab2 = document.createElement("p");
		return ab2.textContent = lI, ab2.style.fontSize = "1em", ab2.style.marginBottom = "0", ab2.style.whiteSpace = "pre-wrap", ab2.style.overflowWrap = "break-word", this.mJ.appendChild(ab2), ab2
	}, this.kx = function(a53, fontSize) {
		var mJ = document.createElement("div");
		return mJ.innerHTML = a53, mJ.style.fontSize = fontSize || "1em", mJ.style.lineHeight = "1.2em", this.mJ.appendChild(mJ), mJ
	}, this.oe = function(aHq) {
		for (var a7c = aHq.a7c, n = a7c.length, q = 0; q < n; q++) this.mJ.appendChild(a7c[q])
	}, this.l1 = function(en) {
		return this.a77.push(en), this.mJ.appendChild(en.eL), en
	}, this.resize = function() {
		for (var n = this.a77.length, q = 0; q < n; q++) this.a77[q].resize && this.a77[q].resize()
	}, (mJ = this.mJ).style.position = "absolute", mJ.style.height = "auto", mJ.style.padding = "0.5em"
}

function a6k() {
	var ab3, ab4 = new Uint8Array(5),
		ab5 = new Uint8Array(5);
	this.ab6 = new ee, this.e = function() {
		for (var kk = fa.fE.data[119].value, q = 0; q < ab4.length; q++) ab4[q] = (kk >> 2 * q) % 4
	}, this.gu = function() {
		ab3 = [L(527), "", L(528, [xf.a4n[28]]), L(529, [xf.a4n[26]]), L(530, [xf.a4n[0]])], this.ab6.e()
	}, this.bQ = function() {
		this.ab6.bQ()
	}, this.tN = function(id) {
		1 < id && r9.rA() || ! function(t) {
			if (3 === ab4[t] || 1 === ab5[t]) return;
			if (ab5[t] = 1, !(Math.random() < .6)) {
				ab4[t]++;
				for (var kk = 0, q = 0; q < ab4.length; q++) kk += ab4[q] << 2 * q;
				fa.l9.lA(119, kk)
			}
			return 1
		}(id) || eo.aBp(ab3[id])
	}
}

function ab8(data) {
	var km, ab9, abA, aY3, abB, abC, abD, colors, abE, abF, abG = 0,
		abH = 0,
		abI = !1,
		abJ = !1,
		abK = [1, 5, 60, 240, 1440, 10080, 43200];

	function abj(fg, fh) {
		! function(fg, fh) {
			return ab9 < fg && fg < ab9 + aY3 && abA < fh && fh < abA + abB
		}(abG = fg, abH = fh) ? (abI && (bR.bS = !0), abI = !1) : (abI = !0, bR.bS = !0)
	}
	this.show = function() {
		abJ = fa.fE.data[127].value, km.show(), this.resize()
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize();
		var jA = ao.ed,
			aBY = km.aQ0(),
			abR = jA * aBY.aQ1,
			jA = jA * aBY.kQ;
		abC = v.w.qn(.06), abD = v.w.qn(.04), ab9 = v.w.qn(.06), abA = jA + abC, aY3 = ao.ap - ab9 - abD, abB = abR + jA - abA - abD
	}, this.aR = function() {
		km.aR(),
			function() {
				var q, a51, jB, aD, bz, a8 = data.data,
					abU = 1,
					abV = .125,
					abW = abJ ? 65536 : 0;
				for (q = 0; q < a8.length; q++)
					for (a51 = a8[q].a51, jB = a51.length, abU = Math.max(jB, abU), bz = 0; bz < jB; bz++) abV = Math.max(a51[bz], abV), abW = Math.min(a51[bz], abW);
				var b1 = abA + abB,
					a9A = abB / (abV - abW),
					a99 = 1 / (abU - 1);
				for (b5.lineWidth = fx.a00, q = 0; q < a8.length; q++) {
					for (a51 = a8[q].a51, jB = a51.length, aD = ab9, b5.beginPath(), b5.moveTo(aD + aY3, b1 - a9A * (a51[jB - 1] - abW)), bz = jB - 2; 0 <= bz; bz--) b5.lineTo(aD + a99 * bz * aY3, b1 - a9A * (a51[bz] - abW));
					b5.strokeStyle = colors[q], b5.stroke()
				}(function(abW, abV, b1, a9A) {
					b5.font = v.w.bA(0, .25 * ab9), v.w.textBaseline(b5, 1), v.w.textAlign(b5, 2), b5.fillStyle = colors[0];
					for (var aD = .92 * ab9, q = 0; q < 3; q++) {
						var kk = abW + q * (abV - abW) / 2;
						b5.fillText((kk / 1e3).toFixed(3), aD, b1 - a9A * (kk - abW))
					}
				})(abW, abV, b1, a9A),
				function(abU) {
					var aE = abA + abB + .15 * abD;
					b5.font = v.w.bA(0, Math.min(.4 * abD, .028 * ao.ap)), v.w.textBaseline(b5, 0), v.w.textAlign(b5, 2), b5.fillStyle = colors[0], b5.fillText(v.aUB.aX3(abE), ab9 + aY3, aE), v.w.textAlign(b5, 0), b5.fillText(v.aUB.aX3(new Date(
						abF.getTime() - 6e4 * (abU - 1) * abK[data.aO4])), ab9, aE)
				}(abU),
				function(abU, abW, abV) {
					if (abI && !(abU < 2)) {
						for (var aWV, t = (abG - ab9) / aY3 * (abU - 1), abZ = Math.floor(t), aba = Math.floor(1 + t), abb = t - abZ, abc = 1e5, uq = -1, abd = -1, abe = abV - (abV - abW) * (abH - abA) / abB, a8 = data.data, q = 0; q < a8
							.length; q++) {
							var aUw, a51 = a8[q].a51;
							a51.length <= aba || (a51 = a51[abZ] + abb * (a51[aba] - a51[abZ]), (aUw = Math.abs(abe - a51)) < abc && (abc = aUw, uq = q, abd = a51))
						} - 1 !== uq && (abV = abA + abB - (abd - abW) / (abV - abW) * abB, b5.lineWidth = .5 * fx.a00, b5.strokeStyle = colors[uq], b5.beginPath(), b5.moveTo(ab9, abV), b5.lineTo(abG, abV), b5.lineTo(abG, abA + abB), b5.stroke(),
							b5.beginPath(), b5.arc(abG, abV, .1 * ab9, 0, 2 * Math.PI), b5.fillStyle = colors[uq], b5.fill(), abW = abA + abB + .15 * abD, v.w.textAlign(b5, 1), aWV = abU - 2 < t ? (aWV = abF.getTime() - 6e4 * abK[data.aO4],
								new Date(aWV + (t - (abU - 2)) * (abE.getTime() - aWV))) : new Date(abF.getTime() - 6e4 * (abU - t - 1) * abK[data.aO4]), abU = v.aUB.aX3(aWV), t = v.w.measureText(abU), aWV = ds.dt(abG, ab9 + .5 * t, ab9 +
								aY3 - .5 * t), b5.fillStyle = v.color.aOW(70, 50, 20), b5.fillRect(aWV - .52 * t, abA + abB, 1.04 * t, .55 * abD), b5.fillStyle = colors[0], b5.fillText(abU, aWV, abW), b5.font = v.w.bA(0, .25 * ab9), v.w
							.textBaseline(b5, 1), v.w.textAlign(b5, 2), aWV = .92 * ab9, abU = (abd / 1e3).toFixed(3), t = v.w.measureText(abU), abW = aWV - 1.04 * t, b5.fillStyle = v.color.aOW(70, 50, 20), b5.fillRect(abW, abV - .1625 * ab9,
								ab9 - abW, .275 * ab9), b5.fillStyle = colors[uq], b5.fillText(abU, aWV, abV))
					}
				}(abU, abW, abV)
			}(), b5.lineWidth = fx.a00, b5.strokeStyle = b7.b9, b5.beginPath(), b5.moveTo(ab9, abA), b5.lineTo(ab9, abA + abB), b5.lineTo(ab9 + aY3, abA + abB), b5.stroke();
		var q, fontSize = .5 * abC,
			a8 = (b5.font = v.w.bA(0, fontSize), v.w.textBaseline(b5, 1), v.w.textAlign(b5, 0), data.data),
			n = a8.length,
			aE = abA - .5 * abC,
			lI = "";
		for (q = 0; q < n; q++) lI += a8[q].name + "  ";
		lI = lI.trim();
		var aVN = v.w.measureText(lI),
			aD = .5 * (ao.ap - aVN);
		for (aVN > ao.ap && (aD = 0, b5.font = v.w.bA(0, ao.ap / aVN * fontSize)), q = 0; q < n; q++) b5.fillStyle = colors[q], b5.fillText(a8[q].name, aD, aE), aD += v.w.measureText(a8[q].name + "  ")
	}, this.fY = function(fg, fh) {
		abj(fg, fh)
	}, this.fc = function(fg, fh) {
		abj(fg, fh)
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	};
	var q, bT, aX1, iW, jl = data.data,
		n = jl.length,
		max = 1;
	for (q = 0; q < n; q++) max = Math.max(max, jl[q].a51.length);
	for (q = 0; q < n; q++)
		for (; jl[q].a51.length < max;) jl[q].a51.unshift(0);
	bT = new Date, aX1 = 6e4 * bT.getTimezoneOffset(), iW = bT.getTime() - aX1, abE = new Date(iW), 6 === data.aO4 ? function(bT, aX1) {
		var abQ = bT.getUTCFullYear(),
			bT = bT.getUTCMonth() + 1;
		abF = bT < 12 ? new Date(Date.UTC(abQ, bT) - aX1) : new Date(Date.UTC(abQ + 1, 0) - aX1)
	}(bT, aX1) : (aX1 = 6e4 * abK[data.aO4], abF = data.aO4 <= 4 ? new Date(iW + aX1 - bT.getTime() % aX1) : new Date(iW + aX1 - (bT.getTime() + 2592e5) % aX1)), iW = v.color, colors = [b7.b9, iW.aOW(255, 0, 0), iW.aOW(0, 200, 0), iW.aOW(80, 80,
		255), iW.aOW(255, 255, 0), iW.aOW(255, 0, 255), iW.aOW(0, 255, 255), iW.aOW(255, 140, 0), iW.aOW(128, 128, 128), iW.aOW(0, 255, 140)], km = new ko(L(531) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aO4] + ", " + v.aUB.aX0(
		abE), [new k7("⬅️ " + L(6), function() {
		c4.c5(1)
	}), new k7(L(454), function() {
		c4.c5(14)
	})], !1)
}

function a6X() {
	function abl(key) {
		var aRK;
		return "undefined" == typeof URLSearchParams || (aRK = window.location.search, "string" != typeof(aRK = new URLSearchParams(aRK).get(key))) || aRK.length < 1 ? null : aRK
	}
	this.cJ = function() {
		if (0 !== bL.id) return !1;
		if (! function() {
				var value = abl("account");
				if (!value && !(value = abl("a"))) return void a5X.clear();
				return a5X.clear(), c4.c5(8, c4.rR, new qh(1e3, {
					action: 0,
					cW: value,
					a1O: 0
				})), 1
			}()) {
			var value = abl("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			c4.c5(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aF8 = new URL(window.location.href);
		aF8.search = "";
		try {
			return history.replaceState(null, "", aF8.toString()), !0
		} catch (eL) {
			console.log("error 352: " + eL)
		}
		return !1
	}, this.aIj = function(key, value) {
		if (0 === bL.id) try {
			var aF8 = new URL(window.location.href),
				es = aF8.searchParams;
			es.set(key, value), aF8.search = es.toString(), history.replaceState(null, "", aF8.toString())
		} catch (eL) {
			console.log("error 358: " + eL)
		}
	}
}

function a6Y() {
	this.aPl = new Int16Array(4), this.aPr = new Int16Array(4), this.aLW = null, this.e = function() {
		var q;
		for (this.aPl[0] = -au.av, this.aPl[1] = 1, this.aPl[2] = au.av, this.aPl[3] = -1, this.aLW = new Int16Array([-au.av, 1 - au.av, 1, au.av + 1, au.av, au.av - 1, -1, -au.av - 1]), q = 0; q < 4; q++) this.aPr[q] = 4 * this.aPl[q]
	}, this.up = function() {
		return ds.dt(Math.floor(.15 * (1 + .25 * bL.bM.bN()) * ao.bO / ay), 4, 128)
	}, this.aZn = function(a3, id) {
		for (var aPq = this.aPr, q = 0; q < 4; q++) {
			var ax = a3 + aPq[q];
			if (a6.a1n(ax) && a6.uV(ax) === id) return !0
		}
		return !1
	}, this.abn = function(player, a3) {
		return !a6.fB(a3) && player === a6.a25(a3)
	}, this.a4a = function(aDM, aDN, a2) {
		return (aDM -= this.fF(a2)) * aDM + (aDN -= this.fG(a2)) * aDN
	}, this.aZt = function(eX, eY, aY) {
		eX = this.aa4(eX) - this.aa0(aY), eY = this.aa5(eY) - this.aa2(aY);
		return Math.sqrt(eX * eX + eY * eY)
	}, this.uc = function(ww, wx) {
		var aF = this.fF(ww) - this.fF(wx),
			ww = this.fG(ww) - this.fG(wx);
		return ~~Math.sqrt(aF * aF + ww * ww + .5)
	}, this.aQR = function(ww, wx) {
		var aF = this.fF(ww) - this.fF(wx),
			ww = this.fG(ww) - this.fG(wx);
		return aF * aF + ww * ww
	}, this.aNr = function(ib, ie, ih, ii) {
		return (ib -= ih) * ib + (ie -= ii) * ie
	}, this.dS = function(es, d6) {
		return ds.kh(d6 * ci.iN[es], 1e3)
	}, this.aa4 = function(eX) {
		return 16 * (eX + b0) / ay
	}, this.aa5 = function(eY) {
		return 16 * (eY + b2) / ay
	}, this.aa3 = function(jl) {
		return 16 * jl / ay
	}, this.ic = function(eX) {
		return Math.floor((eX + b0) / ay)
	}, this.ig = function(eY) {
		return Math.floor((eY + b2) / ay)
	}, this.aDO = function(aDM, aDN) {
		return 1 <= aDM && 1 <= aDN && aDM < au.av - 1 && aDN < au.fp - 1
	}, this.fF = function(a2) {
		return a2 % au.av
	}, this.fG = function(a2) {
		return ds.kh(a2, au.av)
	}, this.a4d = function(aDM, aDN) {
		return aDN * au.av + aDM
	}, this.aFW = function(aDM, aDN) {
		return 4 * this.a4d(aDM, aDN)
	}, this.cz = function(a2) {
		return this.a4c(this.fF(a2), this.fG(a2))
	}, this.a4c = function(aDM, aDN) {
		return 0 < aDM && aDM < au.av - 1 && 0 < aDN && aDN < au.fp - 1
	}, this.cr = function(a2) {
		return a2 << 2
	}, this.a4R = function(a3) {
		return a3 >> 2
	}, this.abo = function(a2) {
		return au.av * this.fG(a2) * 256 + (this.fF(a2) << 4)
	}, this.aDm = function(a2) {
		return this.abo(a2) + 8 + (au.av << 7)
	}, this.uT = function(aY) {
		return au.av * (this.aa2(aY) >> 4) + (this.aa0(aY) >> 4)
	}, this.zI = function(aY) {
		aY = this.uT(aY);
		return (this.fF(aY) >> 5) + ae.zH.aRd * (this.fG(aY) >> 5)
	}, this.aa0 = function(aY) {
		return aY % (au.av << 4)
	}, this.aa2 = function(aY) {
		return ds.kh(aY, au.av << 4)
	}, this.ct = function(a2, aHP) {
		return a2 + this.aPl[aHP]
	}, this.abp = function(a3, aHP) {
		return a3 + this.aPr[aHP]
	}, this.aQS = function(ww, wx) {
		var aF = this.fF(wx) - this.fF(ww),
			wx = this.fG(wx) - this.fG(ww);
		return Math.abs(aF) >= Math.abs(wx) ? 1 + 2 * (aF < 0) : 2 * (0 < wx)
	}, this.aTn = function(player) {
		return this.a4d(ci.iO[player] + ci.iS[player] >> 1, ci.iP[player] + ci.iT[player] >> 1)
	}, this.aTf = function(player) {
		return this.a4d(ge.u3(ci.iO[player], ci.iS[player]), ge.u3(ci.iP[player], ci.iT[player]))
	}
}

function a6E() {
	this.cT = new tk, this.a0 = new a08
}

function qh(id, aAK, abq) {
	var km, a55;

	function abu() {
		a55.aRa.innerHTML += "<br>" + L(534)
	}

	function abv() {
		var jO = 1;
		c4.c5(4, 1, new a2k(L(535), L(536), !1, [new k7("🔄 Reload", function() {
			jO && (setTimeout(function() {
				c4.c5(1)
			}, 5e3), bL.bM.a2m()), jO = 0
		}, b7.aBi)]))
	}

	function abt() {
		ln.gw(90), ln.pq(30, Math.floor(ds.pow(30) * Math.random())), ln.pq(30, Math.floor(ds.pow(30) * Math.random())), ln.pq(30, Math.floor(ds.pow(30) * Math.random())), bo.e(ln.li), fa.l9.lA(110, lz.m0.m1(lz.m0.m2(15))), bg.lE.aFy()
	}
	this.abr = !0, this.aV0 = id, this.show = function() {
		km.show(), this.resize(), 15 === id ? (bg.af.oy(id) ? abt : abu)() : 16 === id ? bg.af.oy(id) ? bg.mH.aNg(2) : abu() : 17 === id ? bg.af.oy(id) ? bg.mH.aNg(3) : abu() : 18 === id ? (bg.af.close(0, 3253), bg.af.ot(0, id, 0), abu()) :
			21 === id ? bg.af.oy(id) ? bg.aWp.aNx(aAK.qi, aAK.qj, aAK.qk) : abu() : 22 === id ? bg.af.oy(id) ? bg.aWp.aNy(aAK.qi, aAK.aNz, aAK.aO0) : abu() : 23 === id ? bg.af.oy(id) ? bg.aWp.aO3(aAK.aO4, aAK.a7W) : abu() : 24 === id ? bg.af.oy(
				id) ? bg.aWp.aO5(aAK.aO4, aAK.qj, aAK.qk) : abu() : 25 === id ? bg.af.oy(id) ? bg.lE.aG2(aAK) : abu() : 28 === id ? bg.af.oy(id) ? bg.aWp.aO2(aAK.qi, aAK.aNz, aAK.aO0) : abu() : 29 === id ? bg.af.oy(id) ? bg.lE.vO(aAK) : abu() :
			30 === id && (bg.af.oy(id) ? sR.sY() || abv() : abu())
	}, this.aR0 = function() {
		15 === id ? abt() : 16 === id ? bg.mH.aNg(2) : 17 === id ? bg.mH.aNg(3) : 18 === id ? c4.c5(8, this.p8, new qh(16)) : 21 === id ? bg.aWp.aNx(aAK.qi, aAK.qj, aAK.qk) : 22 === id ? bg.aWp.aNy(aAK.qi, aAK.aNz, aAK.aO0) : 23 === id ? bg.aWp
			.aO3(aAK.aO4, aAK.a7W) : 24 === id ? bg.aWp.aO5(aAK.aO4, aAK.qj, aAK.qk) : 25 === id ? bg.lE.aG2(aAK) : 28 === id ? bg.aWp.aO2(aAK.qi, aAK.aNz, aAK.aO0) : 29 === id ? bg.lE.vO(aAK) : 30 === id ? sR.sY() || abv() : 1e3 === id && (this
				.aV0 = id = 25, bg.lE.aG2(aAK))
	}, this.sc = function(code, ij, data) {
		!ij && code !== id || (15 === code || 16 === code ? c4.c5(7, this.p8) : 17 === code ? (bg.af.close(0, 3252), fa.af.aA6(0), fa.fE.data[117].oh && 0 < fa.fE.data[117].oh.length ? (ij = fa.af.aA7(0), fa.l9.lA(105, ij.cW), fa.l9.lA(106, ij
			.password), c4.c5(8, this.p8, new qh(16))) : (fa.l9.lA(105, ""), c4.af.se())) : 21 === code ? c4.c5(10, this.p8, new aK0(data)) : 23 === code ? c4.c5(13, this.p8, new ab8({
			data: data,
			aO4: aAK.aO4
		})) : 25 === code ? (c4.af.aIv.cW = aAK.cW, fa.pc.kE(aAK.cW), c4.c5(15, this.p8)) : 30 === code && (data ? c4.c5(1) : abv()))
	}, this.eP = function() {
		km.eP()
	}, this.resize = function() {
		km.resize(), a55.resize()
	}, this.lK = function(jA) {
		2 === jA && km.lL[0].lM()
	}, km = new ko(L(532), [new k7("⬅️ " + L(6), function() {
		abq ? c4.c5(29) : c4.af.se()
	})]), a55 = new a57(km.kr, L(533))
}

function a6v() {
	function aQI(aD, n, aE, wc, vZ, a4f) {
		if (!(aE < 1 || vZ < aE))
			for (var q = 0; q <= n; q++) {
				var a3 = cq.aFW(aD, aE);
				if (wc(a3)) return a3 >> 2;
				aD += a4f
			}
		return -1
	}

	function aQM(aE, n, aD, wc, aQG, a4f) {
		if (!(aD < 1 || aQG < aD)) {
			n = Math.max(n, 0);
			for (var q = 0; q <= n; q++) {
				var a3 = cq.aFW(aD, aE);
				if (wc(a3)) return a3 >> 2;
				aE += a4f
			}
		}
		return -1
	}

	function aQQ(ww, wx, cl) {
		return -1 !== wx && (-1 === ww || cq.aQR(wx, cl) < cq.aQR(ww, cl)) ? wx : ww
	}
	this.aHI = function(cl) {
		return this.mj(cl, function(a3) {
			return a6.cs(a3)
		})
	}, this.aHJ = function(cl) {
		return this.mj(cl, function(a3) {
			return a6.a2C(a3, f.al)
		})
	}, this.mj = function(cl, wc) {
		return function(cl, aQC, wc) {
			for (var aDM = cq.fF(cl), aDN = cq.fG(cl), aQG = au.av - 2, vZ = au.fp - 2, aQH = -1, jl = 0; jl < aQC; jl++) {
				var vY = Math.max(aDM - jl, 1),
					a1v = Math.max(aDN - jl, 1),
					a1w = Math.min(aDM + jl, aQG),
					a1m = Math.min(aDN + jl, vZ),
					ww = aQI(aDM, a1w - aDM, aDN - jl, wc, vZ, 1),
					wx = aQI(aDM - 1, aDM - vY - 1, aDN - jl, wc, vZ, -1),
					a1w = aQI(aDM, a1w - aDM, aDN + jl, wc, vZ, 1),
					vY = aQI(aDM - 1, aDM - vY - 1, aDN + jl, wc, vZ, -1),
					aQL = aQM(aDN, a1m - aDN - 1, aDM - jl, wc, aQG, 1),
					aQN = aQM(aDN - 1, aDN - a1v - 2, aDM - jl, wc, aQG, -1),
					a1m = aQM(aDN, a1m - aDN - 1, aDM + jl, wc, aQG, 1),
					a1v = aQM(aDN - 1, aDN - a1v - 2, aDM + jl, wc, aQG, -1);
				if (aQH = aQQ(aQH, ww, cl), aQH = aQQ(aQH, wx, cl), aQH = aQQ(aQH, a1w, cl), aQH = aQQ(aQH, vY, cl), aQH = aQQ(aQH, aQL, cl), aQH = aQQ(aQH, aQN, cl), aQH = aQQ(aQH, a1m, cl), 0 <= (aQH = aQQ(aQH, a1v, cl)) && jl * jl >= cq
					.aQR(aQH, cl)) return aQH
			}
			return -1
		}(cl, cq.up(), wc)
	}
}

function gR() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.pv = null
}

function aU8() {
	this.yJ = function(lI, font, maxWidth) {
		if (font && (b5.font = font), b5.measureText(lI).width <= maxWidth) return lI;
		for (var q = lI.length - 1; 1 <= q; q--)
			if (lI = lI.substring(0, q), b5.measureText(lI + "...").width <= maxWidth) return lI + "...";
		return "..."
	}
}

function rq() {
	this.vF = function() {
		for (var es, aD, o2, vC = vD, vE = au.rk, ap = au.av, vA = ap - 1, vB = au.fp - 1, jB = 0, aE = 1; aE < vB; aE++)
			for (o2 = aE * ap, aD = 1; aD < vA; aD++) vE[es = o2 + aD << 2] === vE[1 + es] && vE[es] === vE[2 + es] && (jB++, vC[2 + es] = 4);
		gp.rp = jB
	}, this.vG = function(aby, abz) {
		for (var vC = vD, ap = au.av, vA = ap - 1, vB = au.fp - 1, id = 0, aE = 1; aE < vB; aE++)
			for (var o2 = aE * ap, aD = 1; aD < vA; aD++) {
				var a3 = 2 + (o2 + aD << 2);
				vC[a3] === aby && (! function(a3, id, aby, abz) {
					var n = 1,
						vC = vD,
						a23 = a6.aUS,
						tO = [a3],
						ac1 = id >> 8 << 1,
						ac2 = 255 & id;
					vC[a3 - 2] = ac1, vC[a3 - 1] = ac2, vC[a3] = 5;
					for (; n;) {
						for (var tP = [], q = 0; q < n; q++)
							for (var ax = tO[q], jl = 0; jl < 8; jl++) {
								var aV = ax + a23[jl];
								vC[aV] === aby && (vC[aV - 2] = ac1, vC[aV - 1] = ac2, vC[aV] = abz, tP.push(aV))
							}
						n = (tO = tP).length
					}
				}(a3, id, aby, abz), id = (id + 1) % 32768)
			}
	}, this.vH = function() {
		for (var vC = vD, ap = au.av, vA = ap - 3, vB = au.fp - 3, ac4 = 12 * ap, aE = 3; aE < vB; aE++)
			for (var o2 = aE * ap, aD = 3; aD < vA; aD++) {
				var a3 = 2 + (o2 + aD << 2);
				2 !== vC[a3] || 2 === vC[a3 - 12] && 2 === vC[12 + a3] && 2 === vC[a3 - ac4] && 2 === vC[a3 + ac4] || (vC[a3 - 2] = 1 | vC[a3 - 2])
			}
	}
}

function aFP() {
	this.aR = function() {
		if (0 !== h0.af.aCv && (b5.globalAlpha = Math.min(h0.af.aCv / 580, 1), b5.drawImage(h0.af.aR3, 1 + eZ.fS(), 1 + eZ.fT()), b5.globalAlpha = 1, f.gE)) {
			for (var az = b0 / ay, b1 = b2 / ay, b3 = (ao.ap + b0) / ay, b4 = (ao.ar + b2) / ay, xx = h0.af.aR2 * ay, aR4 = h0.af.aR4, q = f.g4 - 1; 0 <= q; q--) ! function(q, xx, az, b1, b3, b4, aR4) {
				var highlight;
				0 === ci.hL[q] || 0 === ci.iF[q] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[q]) && (xx *= 2), b3 = ao.ap * ((ci.iO[q] + ci.iS[q] + 1) / 2 - az) / (b3 - az) - .5 * xx, az = ao.ar * ((ci.iP[
					q] + ci.iT[q] + 1) / 2 - b1) / (b4 - b1) - .5 * xx, b3 > ao.ap) || az > ao.ar || b3 < -xx || az < -xx || (highlight ? b5.setTransform(2 * ay, 0, 0, 2 * ay, b3, az) : b5.setTransform(ay, 0, 0, ay, b3, az), b5.drawImage(
					aR4[f.j ? l.f9[q] : 1], 0, 0))
			}(q, xx, az, b1, b3, b4, aR4);
			b5.setTransform(ay, 0, 0, ay, 0, 0)
		}
	}
}

function aES() {
	this.dX = function(player) {
		v.cw.aEe(player) && eo.ev(80, L(537), 637, 0, b7.aP0, b7.ex, -1, !1)
	}, this.dg = function(player) {
		v.cw.aEe(player) && eo.ev(80, L(538), 637, 0, b7.aP0, b7.ex, -1, !1)
	}
}

function aJ2() {
	var oT, k0 = !0;

	function kH(kG, th) {
		var mJ = document.createElement("div"),
			ac9 = document.createElement("span"),
			acA = document.createElement("span");
		ac9.textContent = h8.yP(th.eM) + ":", ac9.style.color = b7.aOj, ac9.style.paddingRight = "0.4em", ac9.style.display = "table-cell", ac9.style.width = "6ch", ac9.style.textAlign = "end", mJ.appendChild(ac9), acA.textContent = th.lI, mJ
			.appendChild(acA), mJ.style.display = "table", th.dr && function(mJ, dr) {
				{
					var m5;
					dr >= 1024 - iX.cT.jJ ? ((m5 = document.createElement("img")).src = iX.a0.jI[dr - 1024 + iX.cT.jJ].toDataURL(), m5.style.width = "1.5em", m5.style.height = "1.5em", m5.style.verticalAlign = "middle", mJ.appendChild(m5)) : ((m5 =
						document.createElement("span")).textContent = iX.cT.jK(dr), m5.style.display = "inline-block", m5.style.fontSize = "1.5em", m5.style.lineHeight = "1em", m5.style.verticalAlign = "middle", mJ.appendChild(m5))
				}
			}(mJ, th.dr), kG.appendChild(mJ)
	}

	function kK() {
		k0 && (oT.kr.scrollTop = oT.kr.scrollHeight)
	}
	this.clear = function() {
		oT.kr.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a9j = gY.aPD(), n = a9j.length, kG = document.createDocumentFragment(), q = 0; q < n; q++) kH(kG, a9j[q]);
		oT.kr.appendChild(kG), kK(), oT.show(), this.resize(), k0 = !0, kK()
	}, this.eP = function() {
		oT.eP()
	}, this.resize = function() {
		oT.resize(), oT.kr.style.padding = "0.4em " + v.w.kU(fx.a02)
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, this.ev = function(th) {
		var kG = document.createDocumentFragment();
		kH(kG, th), oT.kr.appendChild(kG), kK()
	}, (oT = new ko(L(438), [new k7("⬅️ " + L(6), function() {
		c4.aJ4(1)
	})])).kr.style.overflowY = "auto", oT.kr.addEventListener("scroll", function() {
		k0 = oT.kr.scrollTop >= oT.kr.scrollHeight - oT.kr.clientHeight - 2
	})
}

function a6p() {
	function acC(eL) {
		wt(eL), c4.c5(4, 5, new a2k("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new k7("⬅️ " + L(6), function() {
				c4.kp()
			}), new k7("🔄 Reload", function() {
				bL.bM.a2m()
			}, b7.aBi)]))
	}

	function acH(eL) {
		wt(eL), c4.c5(4, 5, new a2k(L(539), acG(eL), !0))
	}

	function acG(eL) {
		var lI = " [" + eL + "]";
		return 3249 === eL || 1006 === eL ? "No Internet / No Server Response / Server Restart" + lI : 4527 === eL ? "Player already in lobby" + lI : 4577 === eL ? "Your IP is banned." + lI : 4530 === eL ? "Lobby Timeout" + lI : 4528 === eL ?
			"Lobby Kick: Another login detected." + lI : 4540 === eL ? "You have been kicked." + lI : 4495 === eL ? "Account doesn't exist." : 4229 === eL ? "Bad Internet / Unresponsive Client" + lI : 4555 === eL ? "This Account is blocked." + lI :
			4580 === eL ? "More Gold needed" + lI : 4557 <= eL && eL <= 4560 || 4589 == eL ? "Please try again later!" + lI : "Unknown error" + lI
	}

	function wt(eL) {
		acD(eL), c4.af.a2l()
	}

	function acD(eL) {
		4540 === eL && bg.af.mm(eL);
		var a1a = bi.bj();
		6 === a1a ? bg.af.mm(eL) : bk.c8 ? (c4.ml(), bk.lj(), bg.af.close(bg.af.bh, 3256)) : 8 === a1a && f.hN(!0)
	}
	this.a2h = [], this.pQ = function(bf, eL) {
		if (this.a2h.push(eL), 8 === c4.rR && 0 === bf)
			if (4211 === eL) acC(eL);
			else {
				if (bk.c8 && (4495 === eL || 4480 === eL) && bg.af.bh !== bf) return void c4.kp();
				if (8 !== bi.bj() && acD(), 4480 === eL) return fa.l9.aZ5(), void c4.c5(4, 0, new a2k(L(541), L(542), !0));
				var acF = 0;
				c4.mt() && 10 === c4.mt().p8 && (acF = c4.mt().p8), c4.c5(4, acF, new a2k(L(539), acG(eL), !0))
			}
		else {
			acF = bi.bj();
			if (6 === acF) {
				if (4211 === eL) return void acC(eL);
				if (4215 !== eL && 4516 !== eL && 4527 !== eL && 4533 !== eL && 4528 !== eL && !(4557 <= eL && eL <= 4560) && 4577 !== eL && 4576 !== eL) return void oH.a87(bf)
			} else if (bk.c8) {
				if (bf !== bg.af.bh) return
			} else {
				if (8 === acF) return void(bf !== bg.af.cG || f.gB || 1 !== f.eR || f.gC || eo.oC(L(540, [eL])));
				if (!(4579 <= eL && eL <= 4589)) return
			}
			acH(eL)
		}
	}, this.pN = function(eL) {
		this.a2h.push(eL), 8 === bi.bj() ? f.gB || 1 !== f.eR || eo.oC(L(540, [eL])) : acH(eL)
	}, this.a2j = function() {
		this.a2h.push(3268), wt(3268)
	}
}

function a6e() {
	this.id = 0, this.sj = 0, this.wF = null, this.wG = null, this.wH = null, this.wM = null, this.bM = new aF1, this.e = function() {
		var self, sj;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (sj = Android.getVersion()) < 12 || (self.sj = sj, self.id = 1, self.wG = Android),
			function(self) {
				var sj;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wH = mwIOSdataX, self.wM = window.webkit.messageHandlers.iosCommandA, sj = self
					.wH.version, self.sj = sj ? Number(sj) : 0)
			}(this),
			function(self) {
				var wF;
				try {
					if (!(wF = window.localStorage)) return;
					wF.setItem("tls7", "1"), wF.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wF = wF
			}(this)
	}
}

function a7f() {
	this.cJ = function(t) {
		if ((by = bk.bx.by[t]) < 2) return !1;
		var bl = bk.af.bm[t],
			acL = 9 === bl.br ? 333 : 512,
			by = Math.min(by, acL);
		8 === bl.br && (by -= by % 2);
		acL = bk.bx.n8[t].splice(0, by), bk.bx.by[t] -= by, by = function(aEt) {
			if (bk.rN)
				for (var n = aEt.length, cW = bk.rN.cW, q = 0; q < n; q++)
					if (aEt[q].cW === cW) return q;
			return -1
		}(acL);
		return -1 === by ? (bk.bx.rD = bk.bx.rD.concat(acL), 1e3 < bk.bx.rD.length && bk.bx.rD.splice(0, bk.bx.rD.length - 1e3), bk.af.nM += 29 === c4.rR && bk.af.kF[0] === t && 1 === bk.af.kF[2], !1) : (8 === bl.br && (bl.cH = (bl.cH + (by >>
			1)) % 1024, t = by - by % 2, by %= 2, acL = acL.slice(t, 2 + t)), oI.e(bl, acL, by), !0)
	}, this.aEz = function(bl, aEt, aEu) {
		var jl = f.data = new gR,
			acN = (jl.spawningSeed = bl.spawningSeed, bl.br < 7 ? (jl.gameMode = 1, jl.numberTeams = bl.br + 2) : 9 === bl.br ? (jl.gameMode = jl.isZombieMode = 1, jl.numberTeams = 2) : (jl.gameMode = 0, jl.battleRoyaleMode = 7 === bl.br ? 0 :
				10 === bl.br ? 1 : 2), jl.selectedPlayer = aEu, jl.isContest = bl.bv, jl.mapType = au.ru(bl.bq) ? 0 : 1, au.sA(jl, bl.bq), jl.mapSeed = bl.mapSeed, jl.humanCount = aEt.length);
		jl.selectableSpawn = 1 === jl.gameMode || acN < 100, jl.colorsData = new Uint32Array(acN), jl.playerNamesData = new Array(acN), jl.pv = new Uint32Array(acN);
		for (var q = 0; q < acN; q++) jl.colorsData[q] = aEt[q].color, jl.playerNamesData[q] = aEt[q].username, jl.pv[q] = aEt[q].cW;
		if (2 === jl.battleRoyaleMode)
			for (jl.elo = new Uint16Array(acN), q = 0; q < acN; q++) jl.elo[q] = aEt[q].elo;
		bi.setState(8), au.gw(bl.bq, jl.mapSeed), f.gW(), f.gU = 2
	}
}

function a9O(jp) {
	var a4D = document.createElement("div"),
		a9J = document.createElement("div");
	this.kE = function() {
			a9J.textContent = "", bk.nN.a0x && bk.nN.eP(1);
			for (var kG = document.createDocumentFragment(), acO = bk.af.kF[0], bx = bk.bx.n8[acO], by = bk.bx.by[acO], q = 0; q < bx.length; q++) ! function(kG, en, acQ, acO) {
				var kB = document.createElement("span");
				kB.textContent = (acQ ? "🟢 " : "⚪ ") + bk.co.aaJ(en, acO), kB.style.color = bk.co.aaK(en.rF), 11 === en.rF && (kB.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				kB.style.cursor = "pointer", kB.style.margin = "0.2em 0.2em 0.2em 0.2em", kB.style.width = kB.style.maxWidth = 2 === acO ? "10em" : "9em", kB.style.height = kB.style.maxHeight = "1.4em", kB.style.whiteSpace = "nowrap", kB.style
					.overflow = "hidden", kB.style.textOverflow = "ellipsis", kB.style.font = "inherit", kB.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (acQ = __fx.utils.getDuplicateIpHighlightColor(en, bk.bx.n8,
					"rJ")) && (kB.style.backgroundColor = acQ, kB.style.borderRadius = "0.3em");
				bk.co.a1T(en) && (kB.style.textDecoration = "underline"), en.rQ && (kB.style.textDecorationLine = "underline", kB.style.textDecorationStyle = "dotted");
				kB.onclick = function(eL) {
					jp(eL, en)
				}, r9.rA() || (kB.onmouseover = function(eL) {
					bk.nN.a11(eL.target, en, 1)
				}), kG.appendChild(kB)
			}(kG, bx[q], q < by, acO);
			a9J.appendChild(kG)
		}, this.show = function(kN) {
			kN.appendChild(a4D)
		}, this.eP = function(kN) {
			c4.removeChild(kN, a4D)
		}, this.resize = function() {
			a9J.style.fontSize = v.w.kU(v.w.kP(.02, .3))
		}, a4D.style.top = "0", a4D.style.left = "0", a4D.style.width = a4D.style.height = "100%", a4D.style.overflowX = "hidden", a4D.style.overflowY = "auto", a4D.style.font = "inherit", a9J.style.font = "inherit", a9J.style.margin = "0.4em", a4D
		.appendChild(a9J)
}

function rz() {
	var oh = acR(au.bq);
	oh && acS(oh[0], oh[1], oh[2], oh[3], oh[4])
}

function acR(bq) {
	return 2 === bq ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === bq ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === bq ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === bq ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === bq ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function acS(acT, acU, acV, acW, acX) {
	for (var aD, aE, eU, eW, ft, aca, aY = acT.length - 1, acY = au.av + au.fp, n = (acY *= acY, acV.length), acZ = Array(n), q = n - 1; 0 <= q; q--) acZ[q] = acV[q] * acV[q];
	var acb = new Array(n),
		aUw = new Array(n),
		acc = new Array(n),
		kk = rw.v0();
	if (void 0 === acX)
		for (acX = new Array(n), q = n - 1; 0 <= q; q--) acX[q] = 0;
	for (q = 1; q < n; q++) acb[q] = acZ[q] - acZ[q - 1], aUw[q] = acW[q] - acW[q - 1], acc[q] = acX[q] - acX[q - 1];
	for (aD = au.av - 1; 0 <= aD; aD--)
		for (aE = au.fp - 1; 0 <= aE; aE--) {
			for (eU = acY, q = aY; 0 <= q; q--) eU = (eW = (aD - acT[q]) * (aD - acT[q]) + (aE - acU[q]) * (aE - acU[q])) < eU ? eW : eU;
			for (ft = acW[n - 1], aca = acX[n - 1], q = 1; q < n; q++)
				if (eU < acZ[q]) {
					ft = acW[q - 1] + v5((eU - acZ[q - 1]) * aUw[q], acb[q]), aca = acX[q - 1] + v5((eU - acZ[q - 1]) * acc[q], acb[q]);
					break
				} acd(au.av * aE + aD, ft, aca, kk)
		}
}

function acd(t, ft, aca, kk) {
	ft < 500 ? kk[t] = ds.kh(kk[t] * ft * 2, 1e3) : 500 < ft && (kk[t] += ds.kh(2 * (1e4 - kk[t]) * (ft - 500), 1e3)), kk[t] += ds.kh(aca * (10 * ft - kk[t]), 1e3)
}

function kA(bE, aG4, ace, acf) {
	var self;
	this.kB = document.createElement("span"), (self = this).kB.textContent = bE, self.kB.style.color = b7.b9, self.kB.style.position = "absolute", self.kB.style.font = "inherit", acf ? self.kB.style.bottom = "0.06em" : self.kB.style.top = "0.12em",
		ace ? self.kB.style.left = "0.2em" : self.kB.style.right = "0.2em", self.kB.style.fontSize = "0.6em", self.kB.style.pointerEvents = "none", self.kB.style.whiteSpace = "pre", aG4.style.position = "relative", aG4.style.overflow = "hidden", aG4
		.appendChild(self.kB)
}

function a6A() {
	this.aMt = function() {
		var aci;
		return !(ez.f0 < 3 || ci.iF[f7[0]] >= f.gD >> 1) && (f.j ? 9 !== f.gI && (aci = dV.aCh(), !(2 * dV.aCi(f5.f6()) >= aci)) : function() {
			if (8 === f.gI) return !1;
			var aci = dV.aCh();
			if (2 * ci.iN[f7[0]] >= aci) return !1;
			return !0
		}())
	}
}

function a7k() {
	var ack = [],
		qU = [],
		acl = [];

	function acn(en) {
		for (var cX = en.cX, acm = [];;) {
			var jA = function acp(cX, position) {
				position = cX.indexOf("@", position);
				if (position < 0) return -1;
				var lI = cX.substring(position + 1, position + 6);
				if (5 !== lI.length) return acp(cX, position + 1);
				if (v.bB.startsWith(lI, "room")) return acp(cX, position + 1);
				var acw = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!acw.test(lI)) return acp(cX, position + 1);
				acw = cX.substring(position + 6, position + 7);
				if (1 !== acw.length) return position;
				lI = new RegExp("^[ :!.]+$");
				if (!lI.test(acw)) return acp(cX, position + 1);
				return position
			}(cX, 0);
			if (-1 === jA) {
				acm.push(acq(cX, en));
				break
			}
			0 === jA ? acm.push(acr(cX.substring(1, 6), en, jA)) : (acm.push(acq(cX.substring(0, jA), en)), acm.push(acr(cX.substring(jA + 1, jA + 6), en, jA))), cX = cX.substring(jA + 6)
		}
		return acm
	}

	function acr(lI, en, jA) {
		var rK = function(lI) {
				var cW = c1.m0.vV(lI, 5),
					rK = bk.bx.rd(cW);
				if (rK) {
					for (ack.push(rK); 75 < ack.length;) ack.shift();
					return rK
				}
				for (var rD = bk.bx.rD, q = rD.length - 1; 0 <= q; q--)
					if (rK = rD[q], cW === rK.cW) return ack.push(rK), rK;
				for (q = ack.length - 1; 0 <= q; q--)
					if (rK = ack[q], cW === rK.cW) return ack.push(rK), rK;
				return bk.bx.rL(cW, lI, 1, 999999, 999999, 0, 0, 0, 0)
			}(lI),
			lI = (0 === jA && 0 === en.aWC.id && en.kM && (en.fontSize = bk.co.aaL(rK.rF, rK.rG), en.aaH = bk.co.aaM(rK.rG)), document.createElement("span"));
		return lI.textContent = function(rK, en, jA) {
				if (rK.acu) return rK.acu--, jA = 2 === en.aWC.id || (3 === en.aWC.id || 4 === en.aWC.id) && 0 !== jA, rK.username + (jA ? " (" + rK.rW + ")" : "");
				if (en.aWC.aaR) return "Redacted " + lz.m0.bC(rK.cW, 2);
				return rK.username
			}(rK, en, jA), lI.style.display = "inline-block", lI.style.color = bk.co.aaK(rK.rF), 11 === rK.rF && (lI.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), lI.style.cursor =
			"pointer", lI.style.margin = "0", lI.style.font = "inherit", lI.style.minWidth = lI.style.minHeight = "1em", bk.co.a1T(rK) && (lI.style.textDecoration = "underline"), rK.rQ && (lI.style.textDecorationLine = "underline", lI.style
				.textDecorationStyle = "dotted"), bk.co.aaM(rK.rG) && (lI.style.fontWeight = "bold"), lI.onclick = function(eL) {
				bk.mc.md(eL, rK)
			}, r9.rA() || (lI.onmouseover = function(eL) {
				bk.nN.a11(eL.target, rK)
			}), qU.push(lI), lI
	}

	function acq(cX, en) {
		var kB = document.createElement("span");
		return kB.textContent = cX, kB.style.color = en.aaI, kB.style.margin = "0", kB.style.font = "inherit", kB
	}

	function acz(rK, rU, cW) {
		cW !== rK.cW || rK.rW || (rK.rW = rK.username, rK.username = rU)
	}
	this.lj = function() {
		for (var q = 0; q < qU.length; q++) qU[q].onclick = qU[q].onmouseover = null;
		acl = qU = null
	}, this.transform = function(en) {
		for (var mJ = document.createElement("div"), acm = acn(en), q = 0; q < acm.length; q++) mJ.appendChild(acm[q]);
		0 === en.aWC.id && (mJ.vx143 = en.aWC, acl.push(mJ)), mJ.style.margin = "0.6em 0.6em", en.kM && (mJ.style.marginLeft = mJ.style.marginRight = "inherit"), mJ.style.font = "inherit";
		var aco = 0 < en.aWC.id;
		return en.aaH && (mJ.style.fontWeight = "bold"), aco && (mJ.style.paddingLeft = "0.7em"), aco && (mJ.style.fontStyle = "italic"), mJ.style.fontSize = en.fontSize.toFixed(2) + "em", mJ
	}, this.cU = function(cR) {
		if (cR && (2 === cR.id && 1 === cR.ca || 3 === cR.id && 2 === cR.ca)) {
			var cW = 3 === cR.id ? cR.target : cR.cW;
			if (!bk.bx.rd(cW)) {
				for (var rU = "Redacted " + lz.m0.bC(cW, 2), rD = bk.bx.rD, q = rD.length - 1; 0 <= q; q--) acz(rD[q], rU, cW);
				for (q = ack.length - 1; 0 <= q; q--) acz(ack[q], rU, cW)
			}
		}
	}, this.rX = function(cW) {
		for (var ad0 = acl, ad1 = "@" + lz.m0.bC(cW, 5), q = ad0.length - 1; 0 <= q; q--) {
			var jl = ad0[q];
			if (jl.vx143.cW === cW || 0 <= jl.vx143.cX.indexOf(ad1)) {
				for (; jl.firstChild;) c4.removeChild(jl, jl.firstChild);
				for (var acm = acn(bk.co.kI(jl.vx143, bk.co.kJ(jl.vx143))), bz = 0; bz < acm.length; bz++) jl.appendChild(acm[bz]);
				ad0.splice(q, 1)
			}
		}
	}, this.aWD = function(cW) {
		for (var ad0 = acl, q = ad0.length - 1; 0 <= q; q--) {
			var jl = ad0[q];
			if (jl.vx143.cW === cW) {
				for (; jl.firstChild;) c4.removeChild(jl, jl.firstChild);
				jl.vx143.cX = "[Redacted Message]";
				for (var acm = acn(bk.co.kI(jl.vx143, bk.co.kJ(jl.vx143))), bz = 0; bz < acm.length; bz++) jl.appendChild(acm[bz]);
				ad0.splice(q, 1)
			}
		}
	}
}

function aIy() {
	var oT, oU, kt;

	function ad4() {
		var jB;
		1 === f.data.gameMode ? (f.data.teamPlayerCount || (f.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), f.gS.ga()), jB = v.aN.vR(f.data.teamPlayerCount, 0), f.data.numberTeams = jB) : (2 === f.data.botDifficultyType && (f
			.data.botDifficultyType = 0), 1 === f.data.spawningType && (f.data.spawningType = 0))
	}

	function mY() {
		1 !== f.data.gameMode && (f.data.teamPlayerCount = null), ad6(), f.data.canvas = null, c4.c5(5, 5)
	}

	function ad6() {
		d0.d1.e(), fa.l9.lA(156, d0.hQ.hR())
	}

	function ad2() {
		f.data.isReplay = 0, ad6(), f.gS.vT(), bi.aGQ(), f.gS.vS(), f.data.canvas = 2 === f.data.mapType ? au.qN : null, f.gW(), f.gU = 1
	}

	function adH() {
		ad4();
		for (var a8 = [aPb(), ad9(), adA()], q = 3; q < 6; q++) c4.removeChild(oU.aRa, oU.a76[q].mJ), oU.a76[q] = a8[q - 3], oU.aRa.appendChild(oU.a76[q].mJ);
		oU.resize()
	}

	function aPb() {
		var adI, kv = new kw;
		return kv.kz(L(131)), adI = 0 === f.data.gameMode ? [L(38), L(27)][f.data.colorsType] : f.data.numberTeams + " Team" + (1 === f.data.numberTeams ? "" : "s"), kv.kx(adI), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(21)
		}).button])), kv
	}

	function ad9() {
		var kv = new kw,
			a8 = (kv.kz(L(154)), [L(26) + ": " + gv.aC6[f.data.botDifficultyValue], L(486), L(487), L(27)]);
		return kv.kx(a8[f.data.botDifficultyType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(25)
		}).button])), kv
	}

	function adA() {
		var kv = new kw,
			a8 = (kv.kz("Spawning"), [L(38), L(134), L(27)]);
		return kv.kx(a8[f.data.spawningType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(24)
		}).button])), kv
	}
	this.show = function() {
		oT.show(), this.resize(), oT.kr.scrollTop = c4.af.aAo[0]
	}, this.eP = function() {
		c4.af.aAo[0] = oT.kr.scrollTop, oT.eP()
	}, this.resize = function() {
		oT.resize(), oU.resize()
	}, this.lK = function(jA) {
		2 === jA && oT.lL[0].lM()
	}, oT = new ko("🔧 " + L(351), [new k7("⬅️ " + L(6), mY), new k7(L(543), ad2)]), ad4(), f.data.canvas || (2 === f.data.mapType ? f.data.canvas = au.qN : 1 === f.data.mapType ? f.data.canvas = au.qM(au.qL(f.data), 0).qN : (f.data.mapType = 0,
		f.data.passableWater = f.data.passableMountains = 1, f.data.canvas = au.qM(au.qL(f.data), f.data.mapSeed).qN)), oU = new kq(oT.kr, (function(kt) {
		var kv = new kw,
			k = (kv.kz(L(28)), f.data.canvas);
		k.style.width = "100%", kv.l1({
			eL: k
		}), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(20)
		}).button])), kt.push(kv)
	}(kt = []), function(kt) {
		var kv = new kw;
		kv.kz(L(21)), kv.l1(new jv({
			t: -1,
			value: f.data.playerCount
		}, 1, 0, function(eL) {
			var playerCount = ds.dt(Math.floor(eL.target.value), 1, 512);
			eL.target.value = f.data.playerCount = playerCount, 1 === f.data.gameMode && (eL = v.aN.vR(f.data.teamPlayerCount, 0), f.gS.ga(), v.aN.vR(f.data.teamPlayerCount, 0) !== eL) && adH()
		})), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw;
		kv.kz(L(545)), kv.oe(new og({
			oh: ["Battle Royale", "Teams"],
			value: f.data.gameMode
		}, function(t) {
			f.data.gameMode !== t && (1 === (f.data.gameMode = t) && (f.data.colorsData || (f.data.colorsData = new Uint32Array(1)), f.data.colorsData[0] = 258049), adH())
		})), kt.push(kv)
	}(kt), kt.push(aPb()), kt.push(ad9()), kt.push(adA()), function(kt) {
		var kv = new kw,
			a8 = (kv.kz(L(48)), [L(49), L(50), L(27)]);
		kv.kx(a8[f.data.playerNamesType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(23)
		}).button])), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw,
			a8 = (kv.kz(L(391)), [L(25), L(26) + ": " + f.data.aIncomeValue, L(27)]);
		kv.kx(a8[f.data.aIncomeType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(22)
		}).button])), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw,
			a8 = (kv.kz(L(23)), [L(25), L(26) + ": " + f.data.tIncomeValue, L(27)]);
		kv.kx(a8[f.data.tIncomeType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(26)
		}).button])), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw,
			a8 = (kv.kz(L(349)), [L(25), L(26) + ": " + f.data.iIncomeValue, L(27)]);
		kv.kx(a8[f.data.iIncomeType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(27)
		}).button])), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw,
			a8 = (kv.kz(L(74)), [L(25), L(26) + ": " + f.data.sResourcesValue, L(27)]);
		kv.kx(a8[f.data.sResourcesType]), kv.l1(new lB([new k7(L(544), function() {
			c4.c5(28)
		}).button])), kt.push(kv)
	}(kt), function(kt) {
		var kv = new kw;
		kv.kz(L(546)), kv.l1(new lB([new k7(L(547), function() {
			c4.ml(), f.gS.vW(), c4.af.aAo[0] = 0, c4.c5(19)
		}).button])), kv.l1(new lB([new k7(L(548), function() {
			a5c.aQW()
		}).button])), kv.l1(new lB([new k7(L(549), function() {
			return a5c.aQY(), !0
		}).button])), kt.push(kv)
	}(kt), kt))
}

function aNu() {
	var adJ = new Uint8Array(78);
	this.e = function() {
		var q;
		for (adJ[50] = 37, q = 0; q < 10; q++) adJ[q + 3] = q + 1;
		for (q = 0; q < 26; q++) adJ[q + 20] = q + 11, adJ[q + 52] = q + 38
	}, this.aZT = function(lI) {
		return lI.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a75 = function(lI, size) {
		if ((lI = this.aZT(lI)).length > size) return lI.substring(0, size);
		for (; lI.length < size;) lI = "-" + lI;
		return lI
	}, this.a34 = function(lI) {
		for (var a7a = adJ, n = lI.length, a8 = new Uint8Array(n), q = 0; q < n; q++) a8[q] = a7a[lI.charCodeAt(q) - 45];
		return a8
	}, this.aFc = function(wk) {
		ln.gw(6 * wk.length), this.adK(wk), bo.e(ln.li)
	}, this.adK = function(wk) {
		for (var n = wk.length, ap = ln, q = 0; q < n; q++) ap.pq(6, wk[q])
	}, this.aFz = function(lI) {
		this.adK(this.a34(lI))
	}, this.wX = function(lI, size) {
		this.adK(this.a34(this.a75(lI, size)))
	}, this.vV = function(lI, size) {
		for (var a8 = this.a34(this.a75(lI, size)), kk = 0, fi = 1, q = a8.length - 1; 0 <= q; q--) kk += fi * a8[q], fi *= 64;
		return kk
	}
}

function a6J() {
	var adL, adM, a1n, aC;
	this.e = function() {
		var q, aD, aE, aAd, adN, ap, ar, sx, z, a0, kk, es, aH, bz, adQ;
		if (function() {
				if (a1n = !0, aC = "rgb(" + au.rk[0] + "," + au.rk[1] + "," + au.rk[2] + ")", au.s7(au.bq)) return 1;
				return a1n = !1, 0
			}()) adM = null;
		else {
			for (adL = ds.kh(96, 4), adN = 1 === au.bq ? (aAd = 0, 160) : (aAd = 128, 32), aC = "rgb(" + aAd + "," + aAd + "," + aAd + ")", adM = new Array(4), q = 3; 0 <= q; q--) {
				if (adM[q] = document.createElement("canvas"), ap = q % 2 == 0 ? au.av : adL, ar = q % 2 == 0 ? adL : au.fp + 2 * adL, adM[q].width = ap, adM[q].height = ar, a0 = (z = (sx = adM[q].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, ap, ar)).data, q % 2 == 0)
					for (aE = adL - 1; 0 <= aE; aE--)
						for (kk = adN + Math.floor((aE + 1) * (aAd - adN) / (adL + 1)), aD = ap - 1; 0 <= aD; aD--) a0[es = 4 * ((0 === q ? adL - aE - 1 : aE) * ap + aD)] = kk, a0[es + 1] = kk, a0[es + 2] = kk, a0[es + 3] = 255;
				else {
					for (aD = adL - 1; 0 <= aD; aD--)
						for (kk = adN + Math.floor((aD + 1) * (aAd - adN) / (adL + 1)), aE = ar - 1 - adL; adL <= aE; aE--) a0[es = 4 * (aE * ap + (3 === q ? adL - aD - 1 : aD))] = kk, a0[es + 1] = kk, a0[es + 2] = kk, a0[es + 3] = 255;
					for (bz = 1; 0 <= bz; bz--)
						for (aD = adL - 1; 0 <= aD; aD--)
							for (aE = adL - 1; 0 <= aE; aE--) aH = (Math.pow(aD * aD + aE * aE, .5) + 1) / (adL + 1), kk = adN + Math.floor((1 < aH ? 1 : aH) * (aAd - adN)), a0[es = 4 * ((0 === bz ? adL - aE - 1 : aE + bz * (ar - adL)) * ap + (
								1 === q ? aD : adL - aD - 1))] = kk, a0[es + 1] = kk, a0[es + 2] = kk, a0[es + 3] = 255
				}
				sx.putImageData(z, 0, 0)
			}
			adQ = adN, au.ri.fillStyle = "rgb(" + adQ + "," + adQ + "," + adQ + ")", au.ri.fillRect(0, 0, au.av, 1), au.ri.fillRect(0, au.fp - 1, au.av, 1), au.ri.fillRect(0, 0, 1, au.fp), au.ri.fillRect(au.av - 1, 0, 1, au.fp)
		}
	}, this.a35 = function() {
		var bz = a1n ? 0 : -adL;
		aPI(bz, bz, au.av - 2 * bz, au.fp - 2 * bz, fq.aUn, fq.aUo, fq.aUp, fq.aUq) || (b5.fillStyle = aC, b5.fillRect(0, 0, ao.ap, ao.ar))
	}, this.aR = function() {
		a1n || (aPH(0, -adL, au.av, adL, fq.aUn, fq.aUo, fq.aUp, fq.aUq) && b5.drawImage(adM[0], fq.aUl, fq.aUm - adL), aPH(au.av, -adL, adL, au.fp + 2 * adL, fq.aUn, fq.aUo, fq.aUp, fq.aUq) && b5.drawImage(adM[1], fq.aUl + au.av, fq.aUm - adL),
			aPH(0, au.fp, au.av, adL, fq.aUn, fq.aUo, fq.aUp, fq.aUq) && b5.drawImage(adM[2], fq.aUl, fq.aUm + au.fp), aPH(-adL, -adL, adL, au.fp + 2 * adL, fq.aUn, fq.aUo, fq.aUp, fq.aUq) && b5.drawImage(adM[3], fq.aUl - adL, fq.aUm - adL))
	}
}

function a6O() {
	var adR = 0,
		adS = new Uint16Array(64);

	function aNa(r) {
		adR -= 2;
		for (var q = r; q < adR; q += 2) adS[q] = adS[q + 2], adS[q + 1] = adS[q + 3]
	}
	this.e = function() {
		adR = 0
	}, this.bQ = function() {
		var q, d7, d6;
		if (0 !== adR)
			if (0 === ci.hL[f.al]) adR = 0;
			else if (0 === dC.tT(f.al)) adR = 0;
		else
			for (q = adR - 2; 0 <= q; q -= 2)(d7 = adS[q]) < f.g && 0 === ci.hL[d7] ? aNa(q) : (d6 = adS[q + 1], (d7 >= f.g && a4S.a2R(f.al) || d7 < f.g && a4S.a2Y(f.al, d7)) && (gi.gl.d5(d6, d7), aNa(q)))
	}, this.aHK = function(d7, d6) {
		! function(d7, d6) {
			for (var q = 0; q < adR; q += 2)
				if (adS[q] === d7) return adS[q + 1] = Math.min(adS[q + 1] + d6, 1023), 1;
			return
		}(d7, d6) && 64 !== adR && (adS[adR] = d7, adS[adR + 1] = d6, adR += 2)
	}
}

function lB(adV) {
	var mJ = document.createElement("div");
	this.eL = mJ, this.adW = adV, this.resize = function() {
		for (var n = adV.length, q = 1; q < n; q++) v.w.kV(adV[q], 4)
	};
	var q, n = adV.length;
	for (mJ.style.width = "100%", mJ.style.height = "2.7em", mJ.style.marginTop = "0.6em", mJ.style.border = "inherit", q = 0; q < n; q++) adV[q].style.verticalAlign = "top", adV[q].style.width = (100 / n).toFixed(2) + "%", adV[q].style.height =
		"100%", adV[q].style.fontSize = "0.75em", mJ.appendChild(adV[q])
}

function a9f() {
	this.resize = function() {
		var q, aHt = document.head.querySelector("style#ss");
		if (aHt)
			for (q = aHt.sheet.cssRules.length - 1; 0 <= q; q--) aHt.sheet.deleteRule(0);
		else(aHt = document.createElement("style")).id = "ss", document.head.appendChild(aHt);
		var aWV = "::-webkit-scrollbar",
			aST = v.w.kU(fx.a01),
			u = v.w.kU(Math.max(v.w.kP(.012), 8));
		try {
			aHt.sheet.insertRule(aWV + "{width:" + u + ";height:" + u + ";}", aHt.sheet.cssRules.length), aHt.sheet.insertRule(aWV + "-thumb{background-color:white;}", aHt.sheet.cssRules.length), aHt.sheet.insertRule(aWV + "-track{background:" +
				b7.qX + ";}", aHt.sheet.cssRules.length), aHt.sheet.insertRule(aWV + "-track:horizontal{border-top:" + aST + " solid white;}", aHt.sheet.cssRules.length), aHt.sheet.insertRule(aWV + "-track:vertical{border-left:" + aST +
				" solid white;}", aHt.sheet.cssRules.length), aHt.sheet.insertRule(aWV + "-button{display:none;}", aHt.sheet.cssRules.length)
		} catch (eL) {
			for (console.log("error 3425: " + eL), q = aHt.sheet.cssRules.length - 1; 0 <= q; q--) aHt.sheet.deleteRule(0)
		}
	}
}

function aWn() {
	this.pF = function(bf) {
		var ada;
		ln.gw(55 + a5O.oP.bp()), ln.pq(1, 0), ln.pq(6, 13), ln.pq(14, gc.aMR), ln.pq(4, bL.id), ln.pq(7, bL.sj), ln.pq(1, +gc.a2r), ln.pq(1, +gc.a2s), ln.pq(5, (new Date).getHours() % 24), ada = sR.sf(), ln.pq(8, ada[0]), ln.pq(8, ada[1]), a5O.oP
			.hR(), bg.af.send(bf, ln.li)
	}, this.aQz = function(bf, pp, aQy) {
		ln.gw(40), ln.pq(1, 0), ln.pq(6, 30), ln.pq(3, aQy), ln.pq(30, pp), bg.af.send(bf, ln.li)
	}, this.mI = function(mG) {
		pm.e(), pm.pq(1, 0), pm.pq(6, 6), lz.c2.hR(mG, 16, pm), bg.af.send(0, pm.a2y())
	}, this.aNg = function(id) {
		ln.gw(13), ln.pq(1, 0), ln.pq(6, 15), ln.pq(6, id), bg.af.send(0, ln.li)
	}, this.aRu = function(id, value) {
		ln.gw(43), ln.pq(1, 0), ln.pq(6, 3), ln.pq(6, id), ln.pq(30, value), bg.af.send(0, ln.li)
	}, this.sa = function(id, lI) {
		var n = Math.min(lI.length, 63);
		ln.gw(19 + 16 * n), ln.pq(1, 0), ln.pq(6, 26), ln.pq(6, id), ln.pq(6, n), lz.lw.aFz(lI), bg.af.send(0, ln.li)
	}, this.adY = function(aZj, en) {
		ln.gw(7 + 26 * en.length), ln.pq(1, 0), ln.pq(6, 9);
		for (var q = 0; q < en.length; q++) ln.pq(16, en[q][0]), ln.pq(10, en[q][1]);
		bg.af.send(aZj, ln.li)
	}, this.aQw = function(adZ, px) {
		ln.gw(20), ln.pq(1, 0), ln.pq(6, 19), ln.pq(1, adZ), ln.pq(12, px), bg.af.send(bg.af.cG, ln.li)
	}, this.aO1 = function(username) {
		ln.pq(5, username.length), lz.lw.aFz(username)
	}
}

function a68() {
	var adb, adc, size, d7, aW, add;

	function ade(player) {
		return player < f.g4 ? adb * player : adb * f.g4 + adc * (player - f.g4)
	}
	this.e = function() {
		adb = f.g4 < 16 ? 12 : 8, adc = 4;
		var n = ade(f.g);
		size = new Uint8Array(f.g), d7 = new Uint16Array(n), aW = new Uint32Array(n), add = new Uint8Array(n)
	}, this.dp = function(a9u, adf) {
		var adg = this.aLD(a9u, adf),
			adf = (this.aLC(a9u, adf, 0), v.cw.aCg(a9u, adg));
		dL.aDu(a9u, adg - adf, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aEh = function(player, adf) {
		var adj, adf = function(player, adf) {
			var q, aL = ade(player);
			for (q = size[player] - 1; 0 <= q; q--)
				if (d7[aL + q] === adf) return q;
			return size[player]
		}(player, adf);
		adf !== size[player] && (adj = aW[ade(player) + adf], this.aYm(player, adf), this.d4(player, adj, f.g))
	}, this.dD = function(player, adf) {
		for (var aL = ade(player), q = size[player] - 1; 0 <= q; q--)
			if (d7[aL + q] === adf) return !0;
		return !1
	}, this.dF = function(player) {
		return player < f.g4 ? size[player] < adb : size[player] < adc
	}, this.tT = function(player) {
		return size[player]
	}, this.tb = function(player, q) {
		return d7[ade(player) + q]
	}, this.tf = function(player, q) {
		return aW[ade(player) + q]
	}, this.aLD = function(player, adf) {
		for (var aL = ade(player), q = size[player] - 1; 0 <= q; q--)
			if (d7[aL + q] === adf) return aW[aL + q];
		return 0
	}, this.aDp = function(player) {
		for (var aL = ade(player), kk = 0, q = size[player] - 1; 0 <= q; q--) kk += aW[aL + q];
		return kk
	}, this.aLC = function(player, adf, adj) {
		for (var aL = ade(player), q = size[player] - 1; 0 <= q; q--) d7[aL + q] === adf && (aW[aL + q] = adj)
	}, this.aKv = function(player, q, adj) {
		aW[ade(player) + q] = Math.max(adj, 0)
	}, this.aKy = function(player, q) {
		add[ade(player) + q] = 0
	}, this.aYh = function(player, q) {
		return add[ade(player) + q]
	}, this.d4 = function(player, adj, adf) {
		dH.a3u.a3U[player] = dH.a3u.a3U[adf] = 8, v.cw.aEZ(adf) && dL.a46[6 - v.cw.is(player)]++;
		for (var aL = ade(player), q = size[player] - 1; 0 <= q; q--)
			if (d7[aL + q] === adf) return aW[aL + q] += adj, void(aW[aL + q] = aW[aL + q] > f.fz ? f.fz : aW[aL + q]);
		d7[aL + size[player]] = adf, aW[aL + size[player]] = adj, add[aL + size[player]] = 1, size[player]++, adf === f.al ? eo.wZ(player, 5) : player < f.g4 && player === f.al && du.jW(adf)
	}, this.aYm = function(player, t) {
		var bz, aL;
		if (0 !== size[player])
			for (aL = ade(player), size[player]--, bz = t; bz < size[player]; bz++) d7[aL + bz] = d7[aL + bz + 1], aW[aL + bz] = aW[aL + bz + 1], add[aL + bz] = add[aL + bz + 1]
	}, this.aEV = function(player) {
		for (var bz, aL, aEd = [], q = ez.f0 - 1; 0 <= q; q--)
			for (aL = ade(ez.f2[q]), bz = size[ez.f2[q]] - 1; 0 <= bz; bz--)
				if (d7[aL + bz] === player) {
					aEd.push(ez.f2[q]);
					break
				} return aEd
	}
}

function a6Z() {
	this.aEH = new z6, this.a36 = new a, this.af = new aDj, this.zH = new aRb, this.adQ = new aRp, this.cm = new aPi, this.a3c = new aLG, this.da = new aLP, this.aLT = new aFR, this.adk = new xr, this.dZ = new cd, this.aHL = new aQB, this.um =
		new a3F, this.co = new aZl, this.dj = new uI, this.uQ = new aAz, this.dl = new aGa, this.e = function() {
			this.um.e(), this.a36.e(), this.af.e(), this.zH.e(), this.adQ.e(), this.adk.e(), this.uQ.e()
		}, this.aR = function() {
			this.adk.aR(), this.a36.aR()
		}
}
self.aiCommand746 = function(kk) {
	0 === kk ? si() : 1 !== kk || !bL || 1 !== bL.id || bL.sj < 14 || r9.sk()
}, a2Z(), setTimeout(si, 1e4), window.onload = function() {
	si()
};