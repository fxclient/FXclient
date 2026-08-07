var bw, aO, gc, l3, l4, l5, l6, l7, l8, l9, ce, b3, lA, lB, jB, iJ, ib, lC, lD, lE, cs, lF, lG, lH, bi, lI, h3, lJ, gN, b5, fZ, lK, lL, lM, lN, bB, lO, lP, av, lQ, jm, lR, lS, lT, lU, lV, bX, o, lW, lX, dc, lY, lZ, la, lb, lc, ld, le, lf, jF, dF, d0,
	aZ, e8, cU, hc, lg, hp, hl, lh, li, ei, lj, gT, gq, a4, gD, h, lk, fM, a1, ll, bT, lm, ln, lo, lp, lq, lr, ls, cj, i9, ac, gR, cR, e, lt, c9, lu, df, iD, bz, lv, lw, bH, lx, ly, lz, m0, m1, a2n, x3, x1, x2, a0C, wO, vj, a38, si, a39, a3N, a3L,
	ss, sg, aTk, sh, aTl, aTm, aTn, a37, aA8, aB, m, t, v, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "1em", "span", "email", "Data",
		" / ", "territorial.io", "0.5em", "pre", "password", "input",
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
	var b;
	this.d = function() {
		if (!b) {
			b = new Array(e.f.length);
			for (var g = 0; g < b.length; g++) b[g] = h.i.j(20, e.f[g])
		}
	}, this.k = function() {
		var l = m;
		if (!(5 <= l)) {
			var n = o.p,
				q = o.r,
				s = t / l,
				u = v / l,
				w = (n + t) / l,
				x = (q + v) / l,
				y = -20 * l,
				z = .5 * y,
				a0 = a1.a2 << 4,
				a3 = a4.i.a5,
				a6 = a4.i.a6,
				a7 = a4.i.a7,
				a8 = e.a8,
				a9 = b,
				aA = aB;
			3 < l && (aA.globalAlpha = .5 * (5 - l));
			for (var g = 0; g < a3; g++) {
				var aC = a6[g],
					aF = n * (aC % a0 / 16 - s) / (w - s) + z,
					aC = q * (Math.floor(aC / a0) / 16 - u) / (x - u) + z;
				n < aF || q < aC || aF < y || aC < y || (aA.setTransform(l, 0, 0, l, aF, aC), aF = a9[a8[a7[g] >> 3]], aA.drawImage(aF, 0, 0))
			}
			aA.globalAlpha = 1, aA.setTransform(l, 0, 0, l, 0, 0)
		}
	}
}

function aI() {
	var aJ, aK, size, aL, aM, aN;

	function aQ(player) {
		return player < aO.aP ? aJ * player : aJ * aO.aP + aK * (player - aO.aP)
	}
	this.d = function() {
		aJ = aO.aP < 16 ? 12 : 8, aK = 4;
		var a3 = aQ(aO.aR);
		size = new Uint8Array(aO.aR), aL = new Uint16Array(a3), aM = new Uint32Array(a3), aN = new Uint8Array(a3)
	}, this.aS = function(aT, aU) {
		var aV = this.aW(aT, aU),
			aU = (this.aX(aT, aU, 0), aZ.aa.ab(aT, aV));
		ac.ad(aT, aV - aU, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.ae = function(player, aU) {
		var ag, aU = function(player, aU) {
			var g, aj = aQ(player);
			for (g = size[player] - 1; 0 <= g; g--)
				if (aL[aj + g] === aU) return g;
			return size[player]
		}(player, aU);
		aU !== size[player] && (ag = aM[aQ(player) + aU], this.ah(player, aU), this.ai(player, ag, aO.aR))
	}, this.ak = function(player, aU) {
		for (var aj = aQ(player), g = size[player] - 1; 0 <= g; g--)
			if (aL[aj + g] === aU) return !0;
		return !1
	}, this.al = function(player) {
		return player < aO.aP ? size[player] < aJ : size[player] < aK
	}, this.am = function(player) {
		return size[player]
	}, this.an = function(player, g) {
		return aL[aQ(player) + g]
	}, this.ao = function(player, g) {
		return aM[aQ(player) + g]
	}, this.aW = function(player, aU) {
		for (var aj = aQ(player), g = size[player] - 1; 0 <= g; g--)
			if (aL[aj + g] === aU) return aM[aj + g];
		return 0
	}, this.ap = function(player) {
		for (var aj = aQ(player), aq = 0, g = size[player] - 1; 0 <= g; g--) aq += aM[aj + g];
		return aq
	}, this.aX = function(player, aU, ag) {
		for (var aj = aQ(player), g = size[player] - 1; 0 <= g; g--) aL[aj + g] === aU && (aM[aj + g] = ag)
	}, this.ar = function(player, g, ag) {
		aM[aQ(player) + g] = Math.max(ag, 0)
	}, this.at = function(player, g) {
		aN[aQ(player) + g] = 0
	}, this.au = function(player, g) {
		return aN[aQ(player) + g]
	}, this.ai = function(player, ag, aU) {
		av.aw.ax[player] = av.aw.ax[aU] = 8, aZ.aa.ay(aU) && ac.az[6 - aZ.aa.b0(player)]++;
		for (var aj = aQ(player), g = size[player] - 1; 0 <= g; g--)
			if (aL[aj + g] === aU) return aM[aj + g] += ag, void(aM[aj + g] = aM[aj + g] > aO.b1 ? aO.b1 : aM[aj + g]);
		aL[aj + size[player]] = aU, aM[aj + size[player]] = ag, aN[aj + size[player]] = 1, size[player]++, aU === aO.b2 ? b3.b4(player, 5) : player < aO.aP && player === aO.b2 && b5.b6(aU)
	}, this.ah = function(player, b7) {
		var b8, aj;
		if (0 !== size[player])
			for (aj = aQ(player), size[player]--, b8 = b7; b8 < size[player]; b8++) aL[aj + b8] = aL[aj + b8 + 1], aM[aj + b8] = aM[aj + b8 + 1], aN[aj + b8] = aN[aj + b8 + 1]
	}, this.b9 = function(player) {
		for (var b8, aj, bA = [], g = bB.bC - 1; 0 <= g; g--)
			for (aj = aQ(bB.bD[g]), b8 = size[bB.bD[g]] - 1; 0 <= b8; b8--)
				if (aL[aj + b8] === player) {
					bA.push(bB.bD[g]);
					break
				} return bA
	}
}

function bE() {
	this.bF = function(b7) {
		if ((bG = bH.bI.bG[b7]) < 2) return !1;
		var bJ = bH.i.bK[b7],
			bL = 9 === bJ.bM ? 333 : 512,
			bG = Math.min(bG, bL);
		8 === bJ.bM && (bG -= bG % 2);
		bL = bH.bI.bN[b7].splice(0, bG), bH.bI.bG[b7] -= bG, bG = function(bO) {
			if (bH.bm)
				for (var a3 = bO.length, bh = bH.bm.bh, g = 0; g < a3; g++)
					if (bO[g].bh === bh) return g;
			return -1
		}(bL);
		return -1 === bG ? (bH.bI.bR = bH.bI.bR.concat(bL), 1e3 < bH.bI.bR.length && bH.bI.bR.splice(0, bH.bI.bR.length - 1e3), bH.i.bS += 29 === bT.bU && bH.i.bV[0] === b7 && 1 === bH.i.bV[2], !1) : (8 === bJ.bM && (bJ.bW = (bJ.bW + (bG >> 1)) %
			1024, b7 = bG - bG % 2, bG %= 2, bL = bL.slice(b7, 2 + b7)), bX.d(bJ, bL, bG), !0)
	}, this.bY = function(bJ, bO, bP) {
		var bZ = aO.data = new ba,
			bf = (bZ.spawningSeed = bJ.spawningSeed, bJ.bM < 7 ? (bZ.gameMode = 1, bZ.numberTeams = bJ.bM + 2) : 9 === bJ.bM ? (bZ.gameMode = bZ.isZombieMode = 1, bZ.numberTeams = 2) : (bZ.gameMode = 0, bZ.battleRoyaleMode = 7 === bJ.bM ? 0 :
				10 === bJ.bM ? 1 : 2), bZ.selectedPlayer = bP, bZ.isContest = bJ.bb, bZ.mapType = a1.bc(bJ.bd) ? 0 : 1, a1.be(bZ, bJ.bd), bZ.mapSeed = bJ.mapSeed, bZ.humanCount = bO.length);
		bZ.selectableSpawn = 1 === bZ.gameMode || bf < 100, bZ.colorsData = new Uint32Array(bf), bZ.playerNamesData = new Array(bf), bZ.bg = new Uint32Array(bf);
		for (var g = 0; g < bf; g++) bZ.colorsData[g] = bO[g].color, bZ.playerNamesData[g] = bO[g].username, bZ.bg[g] = bO[g].bh;
		if (2 === bZ.battleRoyaleMode)
			for (bZ.elo = new Uint16Array(bf), g = 0; g < bf; g++) bZ.elo[g] = bO[g].elo;
		bi.setState(8), a1.bj(bJ.bd, bZ.mapSeed), aO.bk(), aO.bl = 2
	}
}

function bn() {
	var bo, bp;

	function c1() {
		(bo = new WebSocket("wss://territorial.io/s52/")).onopen = cC, bo.onclose = function() {
			cD()
		}
	}

	function cC() {
		if (bo && bo.readyState === bo.OPEN) {
			var p = new cF;
			p.bj(1608), p.cG(1, 0), p.cG(6, 7), p.cG(2, c9 ? c9.id : 3), p.cG(1, bw.cH ? 1 : 0), p.cG(1, bw.cI ? 1 : 0), p.cG(1, bw ? bw.bx : 0);
			for (var g = 0; g < bp.length && g < 228; g++) p.cG(7, bp.charCodeAt(g) % 128);
			bo.send(p.cJ), cD()
		}
	}

	function cD() {
		bo && (bo.onclose = null, bo.onopen = null, bo = null)
	}
	window.addEventListener("error", function bq(br) {
		bp = "";
		try {
			var bs = function(br) {
				if (!br.error) return 0;
				var stack = br.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, cE = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = cE.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(br);
			return 0 === bs || br.lineno < 2 ? void console.log("Error: External Code") : (window.removeEventListener("error", bq), bp = br.lineno + " " + br.colno + "|" + bs, __fx.reportError(br, bp), alert("Error:\n" + br.filename + " " +
				br.lineno + " " + br.colno + " " + br.message))
		} catch (br) {
			bp = "SE|" + bp + "|" + br, console.log(bp), alert(bp)
		}
		c1()
	})
}

function cK() {
	var cL, cM, cN, cO, cP, b7 = 0,
		cQ = cR.cQ;

	function ci() {
		! function() {
			if (!aO.cp) return;
			if (aO.cq) return;
			if (2 !== aO.cd)
				if (cP % 7 != 0) cP++;
				else if (cO === aO.cr) {
				if (!cn()) return;
				cs.ct(cO), aO.cu.cT()
			} else {
				if (!cn()) return;
				cP++, cO++, b5.cv(), b5.cw(!0)
			}
			return 1
		}() && cn() && co()
	}

	function cl() {
		b7 = 0, (aO.cp ? (cR.cZ = cs.ct(cO - (cP % 7 == 0 ? 0 : 1) + cP % 7 / 7) || cR.cZ, cx) : ce.cf || !cU.cg ? cx : (cR.cZ = !0, cy))()
	}

	function cn() {
		var g, a3, cz = d0.d1.d2,
			d3 = d0.d1.d4,
			d5 = d0.d1.d6,
			d7 = d0.d1.d8,
			d9 = d0.d1.dA,
			dB = d0.d1.dC;
		if (!(cL >= dB.length)) {
			if (dB = dB[cL], d9[cL]) {
				for (a3 = cM + dB, g = cM; g < a3; g++) dF.dG.dH(cz[g], d3[g], d5[g], d7[g]);
				cM += dB, cL++
			} else ++cN >= dB && (cL++, cN = 0);
			return __fx.replay.tick++, 1
		}
		b3.dD("Replay file smaller than expected."), cU.dE(!1), aO.cd = 2
	}
	this.cS = 0, this.d = function() {
		cP = cO = cN = cM = cL = 0, __fx.replay.registerHooks({
			advance: () => ci(),
			finishTick: () => cj.ck(),
			requestRedraw: () => {
				cR.cZ = !0
			},
			isEnded: () => 2 === aO.cd,
			getTickInterval: () => cR.cc
		})
	}, this.cT = function() {
		var cb;
		o.cT(), __fx.replay.frame() ? ch() : cU.cV() < 1.7 ? 0 === b7 ? cR.cQ >= cQ && (cb = cR.cc / cU.cV(), cQ += cb * Math.floor(1 + (cR.cQ - cQ) / cb), 2 === aO.cd || ce.cf || !cU.cg ? ch() : (ci(), cj.ck()), b7++) : cl() : function() {
			var cb;
			if (cR.cQ >= cQ)
				if (2 === aO.cd || ce.cf || !cU.cg) ch(), cQ = cR.cQ;
				else {
					for (cb = cR.cc / cU.cV(), 16 < (cR.cQ - cQ) / cb && (cQ = cR.cQ - 16 * cb); cR.cQ >= cQ && 2 !== aO.cd;) cQ += cb, ci();
					cj.ck()
				} cl()
		}(), cY(), cR.cZ && (cR.cZ = !1, ca())
	}, this.dI = function() {
		d0.d1.dC.length - cL <= 2 || b3.dD("Replay file larger than expected.")
	}
}

function dJ() {
	var dK, dL, dR;

	function dx() {
		for (var colors = new Array(11), g = 0; g < 11; g++) {
			var bu = df.dg.data[163 + g].value.split(",");
			colors[g] = new Uint8Array(3);
			for (var b8 = 0; b8 < 3; b8++) b8 < bu.length && (colors[g][b8] = Number(bu[b8]))
		}
		return colors
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(0), [new c6("⬅️ " + L(1), function() {
		bT.dN()
	})]), dL = new dO(dK.dP, ((dR = []).push(function() {
		var dY = new dZ;
		return dY.da(L(2)), dY.db(dc.i.dd("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", dY.db("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), dY
	}()), dR.push(function() {
		var dY = new dZ,
			de = (dY.da(L(3)), df.dg.data[174].value),
			dh = dY.di(de.length + " / 180"),
			dj = (dh.style.textAlign = "center", new dk(0, 1, function(br) {
				var br = br.target.value,
					dl = br.length;
				dh.textContent = dl + " / 180", dl <= 180 && df.dm.dn(174, br)
			}));
		return dj.br.rows = 6, dj.br.style.fontSize = "1em", dj.dp(de), dY.dq(dj), dY
	}()), dR.push(function() {
		var dY = new dZ;
		dY.da(L(4));
		for (var g = 0; g < 11; g++) {
			var aC = dY.dq(new dr(df.dg.data[163 + g]));
			g && (aC.br.style.marginTop = "0.6em")
		}
		return dY.dq(new ds([new c6(L(5), function() {
			for (var data = df.dg.data, g = 163; g < 174; g++) data[g] && df.dg.dt(g, data[g].du);
			bT.dN(), bT.dv()[31] = null, bT.c4(31)
		}).button])), dY
	}()), dR.push(function() {
		var dY = new dZ;
		return dY.da("Targeting"), dY.db(L(6)), dY.dq(new dr(df.dg.data[175], 0, 0)), dY
	}()), dR.push(function() {
		var dY = new dZ;
		return dY.da(L(7)), dY.dq(new ds([new c6(L(8), function() {
			(new dw).show(df.dg.data[174].value, dx(), -1)
		}).button])), dY
	}()), dR.push(function() {
		var dY = new dZ,
			dy = (dY.da(L(9)), dY.db(L(10)), new dr(df.dg.data[176], 1, 0)),
			dz = (dY.dq(dy), new c6(L(11), function(br) {
				return e0.button.textContent === L(12) && dc.i.e1(0) && (aZ.e2.e3(br), e4(), dc.e5.e6(df.dg.data[176].value, dx(), df.dg.data[175].value, df.dg.data[174].value)), !0
			}, 1)),
			e4 = function() {
				e0.button.textContent = L(13), dz.e7(1), dz.button.style.color = e8.e9
			},
			e0 = new c6(L(13), function(br) {
				return br.textContent === L(13) ? (br.textContent = L(12), dz.e7(0), dz.button.style.color = e8.eA) : e4(), !0
			});
		return dY.dq(new ds([e0.button, dz.button])), dY
	}()), dR))
}

function eF() {
	function eG(g, type, du, eK) {
		df.dg.data.push({
			b7: g,
			type: type || 0,
			value: du || 0,
			du: du || 0,
			eK: eK || 0
		})
	}

	function eH(g, type, du, eK) {
		df.dg.data.push({
			b7: g,
			type: type,
			value: du || "",
			du: du || "",
			eK: eK || 0
		})
	}

	function eI(eN) {
		for (var g = df.dg.data.length; g < eN; g++) df.dg.data.push(null)
	}
	this.data = [], this.d = function() {
		eG(0, 1, 0, 5), eG(1, 1, 1), eG(2, 0), eH(3, 2), eG(4, 1), eH(5, 2, "system-ui", 2), eG(6, 0), eG(7, 0, 0), eG(8, 0), eG(9, 1, 1), eG(10, 1), eG(11, 1, 1), eH(12, 2, navigator.language), eG(13), eG(14), eG(15, 0, 1), eG(16, 0, 4), eI(
			100), eH(100, 2), eH(101, 2), eH(102, 2), eH(103, 2), eH(104, 2), eH(105, 2), eH(106, 2), eG(107), eG(108), eG(109), eH(110, 2), eG(111), eG(112), eG(113), eH(114, 2), eG(115), eH(116, 2), eG(117, 1), eH(118, 2, "", 2), eG(119, 1, 0,
				1), eH(120, 2), eG(121, 1, ~~(262144 * Math.random())), eH(122, 2, "Player " + Math.floor(1e3 * Math.random())), eG(123), eH(124), eG(125, 1), eH(126, 2), eG(127, 0, 1), eG(128), eG(129), eG(130), eG(131), eG(132), eH(133, 2), eG(
				134, 0, 5), eH(135, 2), eH(136, 2), eG(137), eG(138), eG(139), eG(140), eG(141), eG(142), eG(143), eG(144), eH(145, 2), eG(146), eG(147), eH(148, 2), eG(149), eG(150, 0, 1), eH(151, 2), eG(152, 0, 5), eG(153, 1), eG(154, 1), eH(
				155, 2), eH(156, 2), eG(157), eG(158), eG(159), eG(160), eH(161, 2), eG(162, 0, 1024), eH(163, 2, "0,0,0"), eH(164, 2, "100,100,100"), eH(165, 2, "30,30,30"), eH(166, 2, "70,70,70"), eH(167, 2, "100,100,100"), eH(168, 2,
				"85,85,85"), eH(169, 2, "100,100,100");
		for (var g = 0; g < 4; g++) eH(170 + g, 2, "255,255,255");
		eH(174, 2), eH(175, 2), eG(176, 0, 200), eI(180), eG(180, 0), eG(181, 0), eG(182, 0, 1023), eH(183, 2)
	}, this.dn = function(b7, value) {
		this.data[b7].value = value
	}, this.dt = function(b7, value) {
		this.dn(b7, value);
		var value = String(value),
			a3 = value.length;
		5e4 < a3 ? console.log("storage value too large: index " + b7 + " size " + a3) : (df.eE.save(b7, value), df.eE.save(b7, String(this.data[b7].eK), !0))
	}, this.eL = function(b7) {
		return Number(this.data[b7].value)
	}, this.eM = function(b7) {
		return String(this.data[b7].value)
	}
}

function eO(eP) {
	var eQ = document.createElement("div"),
		eR = document.createElement("div");
	this.eT = function() {
			eR.textContent = "", bH.eU.eV && bH.eU.eB(1);
			for (var eW = document.createDocumentFragment(), eX = bH.i.bV[0], bI = bH.bI.bN[eX], bG = bH.bI.bG[eX], g = 0; g < bI.length; g++) ! function(eW, eZ, ea, eX) {
				var eb = document.createElement("span");
				eb.textContent = (ea ? "🟢 " : "⚪ ") + bH.ec.ed(eZ, eX), eb.style.color = bH.ec.ee(eZ.ef), 11 === eZ.ef && (eb.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				eb.style.cursor = "pointer", eb.style.margin = "0.2em 0.2em 0.2em 0.2em", eb.style.width = eb.style.maxWidth = 2 === eX ? "10em" : "9em", eb.style.height = eb.style.maxHeight = "1.4em", eb.style.whiteSpace = "nowrap", eb.style
					.overflow = "hidden", eb.style.textOverflow = "ellipsis", eb.style.font = "inherit", eb.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (ea = __fx.utils.getDuplicateIpHighlightColor(eZ, bH.uT.uU)) && (eb
						.style.backgroundColor = ea, eb.style.borderRadius = "0.3em");
				bH.ec.eg(eZ) && (eb.style.textDecoration = "underline"), eZ.eh && (eb.style.textDecorationLine = "underline", eb.style.textDecorationStyle = "dotted");
				eb.onclick = function(br) {
					eP(br, eZ)
				}, ei.ej() || (eb.onmouseover = function(br) {
					bH.eU.ek(br.target, eZ, 1)
				}), eW.appendChild(eb)
			}(eW, bI[g], g < bG, eX);
			eR.appendChild(eW)
		}, this.show = function(el) {
			el.appendChild(eQ)
		}, this.eB = function(el) {
			bT.removeChild(el, eQ)
		}, this.resize = function() {
			eR.style.fontSize = aZ.e2.em(aZ.e2.en(.02, .3))
		}, eQ.style.top = "0", eQ.style.left = "0", eQ.style.width = eQ.style.height = "100%", eQ.style.overflowX = "hidden", eQ.style.overflowY = "auto", eQ.style.font = "inherit", eR.style.font = "inherit", eR.style.margin = "0.4em", eQ
		.appendChild(eR)
}

function eo() {
	var ep, eq, er, et;

	function es(g) {
		bT.c4(8, bT.bU, new ev(21, {
			ew: g,
			ex: 0,
			ey: 10
		}))
	}
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), eq.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, er = [new c6(L(14), function() {
		es(5)
	}, 0, 0, 1), new c6(L(15), function() {
		es(6)
	}, 0, 0, 1), new c6(L(16), function() {
		es(7)
	}, 0, 0, 1), new c6("Audit Log", function() {
		es(12)
	}, 0, 0, 1)], et = [new c6("⬅️ " + L(1), function() {
		bT.dN()
	})], ep = new dM(L(17), et), eq = new eu(er, ep.dP)
}

function ez() {
	this.f0 = new Array(aO.aR), this.f1 = new Array(aO.aR), this.f2 = new Uint8Array(aO.aR), this.f3 = new Uint8Array(aO.aR), this.f4 = new Uint16Array(aO.aR), this.f5 = new Uint16Array(aO.aR), this.f6 = new Uint16Array(aO.aR), this.f7 =
		new Uint16Array(aO.aR), this.f8 = new Uint32Array(aO.aR), this.f9 = new Uint32Array(aO.aR), this.fA = new Uint32Array(aO.aR), this.fB = null, this.fC = null, this.fD = null, this.fE = null, this.fF = new Uint16Array(aO.aR), this.fG =
		new Uint16Array(aO.aR), this.fH = new Uint16Array(aO.aR), this.fI = new Uint16Array(aO.aR), this.fJ = new Uint8Array(aO.aR), this.fK = new Uint16Array(aO.aR), this.d = function() {
			this.f0.fill(""), this.f1.fill(""), this.f2.fill(0), this.f3.fill(0), this.f4.fill(0), this.f5.fill(0), this.f6.fill(0), this.f7.fill(0), this.f8.fill(0), this.f9.fill(0), this.fA.fill(0), this.fB = new Array(aO.aR), this.fC = new Array(
				aO.aR), this.fD = new Array(aO.aR), this.fE = new Array(aO.aR), this.fF.fill(0), this.fG.fill(0), this.fH.fill(0), this.fI.fill(0), this.fJ.fill(0), this.fK.fill(0)
		}
}

function fL() {
	function fb() {
		var fc;
		return 8 === aO.fP ? 0 : (fc = Math.floor(fZ.fI[aO.b2] / 50), (fc = Math.min(fc, 200)) / 100)
	}

	function fR() {
		var fc = fb();
		0 !== fc && b3.fd(440, L(18, [fc.toFixed(2)]), 40, 0, e8.fe, e8.ff, -1, !1)
	}
	this.cT = function() {
		var fS;
		0 === fM.result.fN || 0 === fM.result.fO.length || 8 === aO.fP ? aZ.aa.fQ(aO.b2) && fR() : (function(fS) {
			7 !== aO.fP && 10 !== aO.fP && 9 !== aO.fP || 0 !== aO.fq && fS && b3.fd(600, L(22, [fS.toFixed(2)]), 40, 0, e8.e9, e8.ff, -1, !1)
		}(fS = function() {
			b3.fd(520, L(19), 40, 0, e8.e9, e8.ff, -1, !1);
			for (var fO = fM.result.fO, a3 = fO.length, f8 = fZ.f8, bu = [], g = 0; g < a3; g++) {
				var fg = fO[g];
				bu.push({
					fg: fg,
					fh: f8[fg]
				})
			}
			bu.sort((b8, fi) => fi.fh - b8.fh);
			var fj = fZ.f1,
				fh = fM.result.fk,
				fc = fM.result.fN,
				eJ = "",
				fS = 0;
			for (g = 0; g < a3; g++) {
				var fm = bu[g].fh * fc / (100 * fh),
					fn = fj[bu[g].fg] + ": " + fm.toFixed(2) + "   ";
				bu[g].fg === aO.b2 && (fS = fm), 2 < g && 4 !== a3 ? 3 === g && (eJ += "(" + L(20, [a3 - 3]) + ")") : eJ += fn
			}
			b3.fd(560, aZ.fo.fp(eJ), 40, 0, e8.fe, e8.ff, -1, !1), fS ? b3.fd(580, L(21, [fS.toFixed(2) + " + " + fb().toFixed(2)]), 40, 0, e8.fe, e8.ff, -1, !1) : aZ.aa.fQ(aO.b2) && fR();
			return fS
		}()), 2 === aO.fV || 7 <= aO.fP || function(fS) {
			var fO = fM.result.fO,
				a3 = fO.length,
				f0 = fZ.f0,
				f8 = fZ.f8,
				fr = [];
			loop: for (var g = 0; g < a3; g++) {
				var fg = fO[g],
					fs = aZ.fo.ft(f0[fg]);
				if (null !== fs) {
					for (var fu = f8[fg], fi = fr.length - 1; 0 <= fi; fi--)
						if (fs === fr[fi].name) {
							fr[fi].fh += fu, fr[fi].bu.push({
								fg: fg,
								fh: fu
							});
							continue loop
						} fr.push({
						name: fs,
						fh: fu,
						bu: [{
							fg: fg,
							fh: fu
						}]
					})
				}
			}
			if (0 !== fr.length) {
				fr.sort((b8, fi) => fi.fh - b8.fh);
				var bu = fr[0].bu,
					fv = (bu.sort((b8, fi) => fi.fh - b8.fh), "[" + fr[0].name + "]"),
					fw = 512 * fM.result.fN / 26214400,
					aj = (b3.fd(0, L(23, [fv, fw.toFixed(4)]), 40, 0, e8.e9, e8.ff, -1, !1), bu.length),
					fx = fr[0].fh,
					fy = 1e4 * fw;
				for (g = 0; g < aj; g++)
					if (bu[g].fg === aO.b2) {
						b3.fd(600, L(24, [(fy * bu[g].fh / (10 * fx)).toFixed(2)]), 40, 0, e8.e9, e8.ff, -1, !1), b3.fd(640, L(25, [(.2 * fS).toFixed(2), fv]), 40, 0, e8.e9, e8.ff, -1, !1);
						break
					}
			}
		}(fS))
	}, this.fX = function() {
		var fY, fa;
		aO.cq || (fY = fZ, fa = aO.b2, 0 === fY.fJ[fa]) || fY.fH[fa] < 1 || 2 * fY.fF[fa] > 3 * (fY.fG[fa] + fY.fH[fa]) || fR()
	}
}

function fz() {
	var g0 = 501,
		g5 = (this.g1 = new Uint32Array(g0), this.g2 = new Uint32Array(g0), this.g3 = new Uint16Array(g0), this.g4 = 0, 1),
		g6 = 0;

	function gA(self) {
		self.max.fill(0)
	}

	function gP(self, g) {
		self.max[0] = Math.max(self.g1[g], self.max[0]), self.max[1] = Math.max(self.g2[g], self.max[1]), self.max[2] = Math.max(self.g3[g], self.max[2])
	}
	this.max = [0, 0, 0], this.g7 = 0, this.az = new Array(21), this.g8 = null, this.g9 = function() {
		this.g8 = [L(26), L(27), L(28), L(29), L(30), L(31), L(32), L(33), L(34), L(35), L(36), L(37), L(38), L(39), "", L(40), L(41), L(42), L(43), L(44), L(45)]
	}, this.d = function() {
		this.g4 = 0, g5 = 1, this.g7 = 0, g6 = 0, gA(this), this.az.fill(0)
	}, this.gB = function(player, gC) {
		aZ.aa.ay(player) && (this.az[0] += gC + 1, this.az[1]++, this.az[12] += gD.gE[1])
	}, this.gF = function(player, gG) {
		__fx.donationsTracker.logDonation(player, gG, gD.gE[0], cs.a2W());
		player === aO.b2 && (b3.gF(gD.gE[0], gD.gE[1], gG), this.az[12] += gD.gE[1], this.az[16] += gD.gE[0]), gG === aO.b2 && (b3.gH(gD.gE[0], player), this.az[10] += gD.gE[0])
	}, this.gI = function(player) {
		aZ.aa.ay(player) && (this.az[2]++, this.az[12] += gD.gE[1])
	}, this.gJ = function(player) {
		aZ.aa.ay(player) && (this.az[19]++, this.az[12] += gD.gE[1])
	}, this.gK = function(player) {
		aZ.aa.ay(player) && this.az[20]++
	}, this.ad = function(player, gL, b7) {
		aZ.aa.ay(player) && (this.az[b7] += gL)
	}, this.cT = function() {
		var self;
		this.g7 || 0 < g6-- || ((self = this).g1[self.g4] = fZ.f8[aO.b2], self.g2[self.g4] = fZ.fA[aO.b2], self.g3[self.g4] = gN.gO(aO.b2), gP(self, self.g4), self.g4++, self.g4 === g0 && function(self) {
			gA(self), gP(self, 0), self.g4 = 1 + gT.gU(g0, 2);
			for (var g = 1; g < self.g4; g++) self.g1[g] = self.g1[2 * g], self.g2[g] = self.g2[2 * g], self.g3[g] = self.g3[2 * g], gP(self, g);
			g5 *= 2
		}(self), g6 = g5 - 1, gR.eT(), 0 === fZ.f3[aO.b2] && (self.g7 = cR.gS()))
	}
}

function gV() {
	var size, gW;
	this.d = function() {
		size = aO.gX, gW = new Uint16Array(aO.aR);
		for (var aP = aO.aP, g = aO.gX - 1; 0 <= g; g--) gW[g] = aP + g
	}, this.cT = function() {
		av.gY.cT();
		for (var g = size - 1; 0 <= g; g--)
			if (0 === fZ.f3[gW[g]]) {
				b8 = void 0;
				var b8 = g;
				size--, gW[b8] = gW[size]
			} else gc.cT(gW[g])
	}, this.ga = function(fg) {
		gW[size++] = fg
	}
}

function gd() {
	this.i = new ge, this.gf = new gg, this.d = function() {
		this.i.d()
	}, this.cT = function() {
		0 !== this.i.gh && this.i.gh--
	}
}

function gi() {
	var gj = -1,
		gk = null,
		gl = -1,
		gm = 4;

	function gy() {
		ce.h7() ? cj.ck() : cj.h8()
	}

	function hH(aH, bZ) {
		var hI = aH >> 16,
			fc = aH >> 8 & 255,
			aH = 255 & aH,
			hJ = 255 - bZ,
			hJ = (hJ < hI && hJ < fc && hJ < aH && (bZ = -bZ), gj >> 7),
			hL = gj >> 5 & 3,
			hM = gj >> 3 & 3;
		return (Math.max(Math.min(hI + bZ, 252 + hJ), hJ) << 16) + (Math.max(Math.min(fc + bZ, 252 + hL), hL) << 8) + Math.max(Math.min(aH + bZ, 252 + hM), hM)
	}

	function gx() {
		return -1 !== gj && (h3.hD(gj, gk[0], gk[1], gk[2]), hE(gj), gj = -1)
	}

	function hE(player) {
		cR.cZ = !0;
		for (var f4 = fZ.f4[player], f5 = fZ.f5[player], f6 = fZ.f6[player], f7 = fZ.f7[player], aG = f5; aG <= f7; aG++)
			for (var aF = f4; aF <= f6; aF++) {
				var h1 = h3.hN(aF, aG);
				h3.hO(player, h1) && (h3.hP(h1) ? h3.hQ(h1, player) : h3.hR(h1) ? h3.hS(h1, player) : h3.hT(h1, player))
			}
	}
	this.d = function() {
		gk = null, gl = gj = -1, gm = gT.gn(Math.floor(df.dg.data[16].value), 0, 16)
	}, this.cT = function(go) {
		if (df.dg.data[15].value && 0 !== gm && (go || !ei.ej())) {
			var go = gq.gr(ei.gs),
				gt = gq.gu(ei.gv);
			if (gq.gw(go, gt)) {
				go = gq.h0(go, gt), gt = gq.h2(go);
				if (gl === gt)
					if (h3.h4(gt)) {
						if (gj === h3.h5(gt)) return
					} else if (-1 === gj) return;
				! function(h1) {
					h3.h4(h1) ? (h1 = h3.h5(h1)) !== gj && (gx(), function(player) {
						gj = player, gk = h3.hA(player);
						var hB = function() {
							var eZ = gk,
								hF = gm << 2,
								hG = hF << 1;
							return [hH(eZ[0], hF), hH(eZ[1], hG), hH(eZ[2], hG)]
						}();
						h3.hD(player, hB[0], hB[1], hB[2]), hE(player)
					}(h1), gy()) : gx() && gy()
				}(gl = gt)
			} else gx() && gy()
		}
	}
}

function hW() {
	this.size = 0, this.b7 = 0, this.cJ = null, this.d = function(cJ) {
		this.b7 = 0, this.cJ = cJ, this.size = cJ.length
	}, this.hX = function() {
		this.cJ = null
	}, this.hY = function(size) {
		for (var aq = 0, cJ = this.cJ, eN = this.b7 + size - 1, g = this.b7; g <= eN; g++) aq |= (cJ[g >> 3] >> 7 - (7 & g) & 1) << eN - g;
		return this.b7 += size, this.b7 > 8 * this.size && console.error("Unwrapper Overflow"), aq
	}, this.hZ = function(size) {
		var fi = size >> 1;
		return (1 << fi) * this.hY(size - fi) + this.hY(fi)
	}, this.ha = function(hb) {
		return this.size === hc.hd(hb)
	}, this.he = function(hf, hg, hh) {
		var dl = this.hY(hf);
		if (!dl) return null;
		for (var hf = Math.max(dl, hh), bu = new(hg <= 8 ? Uint8Array : hg <= 16 ? Uint16Array : Uint32Array)(hf), g = 0; g < dl; g++) bu[g] = this.hY(hg);
		hh = bu[dl - 1];
		return hh && bu.fill(hh, dl), bu
	}, this.hi = function(hf, hj, hh) {
		var dl = this.hY(hf);
		if (!dl) return null;
		for (var hf = Math.max(dl, hh), bu = new Array(hf), g = 0; g < dl; g++) bu[g] = this.hk(hj);
		return bu.fill(bu[dl - 1], dl), bu
	}, this.hk = function(hf) {
		return hl.hm.hn(this.hY(hf))
	}, this.ho = function() {
		var eJ = hp.hq.hr(hp.hq.hs(this.hY(30))),
			eJ = aZ.fo.ht(eJ, "_", "/");
		eJ = aZ.fo.ht(eJ, "-", "+");
		for (var hu = "";
			(eJ.length + hu.length) % 4;) hu += "=";
		eJ = "data:image/png;base64," + eJ + hu;
		var hv = new Image;
		hv.onload = function() {
			d0.hw.hx(hv), hv.onload = null, hv = null
		}, hv.src = eJ
	}
}

function hy() {
	var p, aF, hz, canvas, i0, i1, gC, gL, i2, i3, i4 = 11 / 12;

	function iC() {
		var iH = Math.floor(gC * (p - 2 * hz)),
			iI = 1 + Math.floor(.0625 * iJ.r),
			iK = 1 + Math.floor(.3 * iJ.r),
			iL = Math.floor(.55 * iJ.r);
		i0.clearRect(0, 0, p, iJ.r), i0.fillStyle = e8.iM, i0.fillRect(0, 0, hz, iJ.r), i0.fillRect(hz + iH, 0, p - hz - iH, iJ.r), i0.fillStyle = gC < 1 / 3 ? "rgba(" + Math.floor(3 * gC * 130) + ",130,0,0.85)" : gC < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (gC - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (gC - 2 / 3) * 130) + ",0.85)", i0.fillRect(hz, 0, iH, iJ.r), i0.fillStyle = e8.e9, i0.fillRect(0, 0, p, 1), i0.fillRect(0, iJ.r - 1, p, 1), i0
			.fillRect(0, 0, 1, iJ.r), i0.fillRect(hz, 0, 1, iJ.r), i0.fillRect(hz + iH, 0, 1, iJ.r), i0.fillRect(p - hz, 0, 1, iJ.r), i0.fillRect(p - 1, 0, 1, iJ.r), i0.fillRect(Math.floor(.25 * iJ.r) + iK, Math.floor((iJ.r - iI) / 2), iJ.r - 2 * iK,
				iI), i0.fillRect(Math.floor(p - 1.25 * iJ.r) + iK, Math.floor((iJ.r - iI) / 2), iJ.r - 2 * iK - iK % 2, iI), i0.fillRect(Math.floor(p - 1.25 * iJ.r) + Math.floor((iJ.r - iI) / 2), iK, iI, iJ.r - 2 * iK - iK % 2), gL = aZ.aa.iN(aO.b2,
				iJ.iO()), i0.fillText(aZ.fo.iP(gL) + " (" + aZ.fo.iQ(100 * gC, +(gC < .1)) + ")", Math.floor(.5 * p), iL)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		gC = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => iJ.ij(arg1);

	function ih(il) {
		return !(1 < il && 1 === gC || (1 < il && il * gC - gC < 1 / 1024 ? il = (gC + 1 / 1024) / gC : il < 1 && gC - il * gC < 1 / 1024 && (il = (gC - 1 / 1024) / gC), gC = gT.gn(gC * il, 1 / 1024, 1), iC(), 0))
	}

	function ii(iW) {
		return gC !== (gC = gT.gn((iW - aF - hz) / (p - 2 * hz), 1 / 1024, 1)) && (iC(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		iC(), cR.cZ = !0
	}, this.aG = 0, this.i5 = !1, this.d = function() {
		i1 = !aO.cp && !aO.i6, i3 = !1, gC = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (df.dg.data[182].value + 1) / 1024, gL = 0, this.i5 = !1, this.resize()
	}, this.resize = function() {
		c9.cA.i7() && o.p < .8 * o.r ? (this.r = Math.floor(.066 * o.i8), p = o.p - 4 * i9.gap - this.r) : (p = Math.floor((c9.cA.i7() ? .65 : .389) * o.i8), p += 12 - p % 12, this.r = Math.floor(p / 12)), hz = Math.floor(3 * this.r / 2), i2 = aZ
			.e2.iA(1, Math.floor(.5 * this.r)), (canvas = document.createElement("canvas")).width = p, __fx.mobileKeybinds.setSize(p, this.r, aB), canvas.height = this.r, (i0 = canvas.getContext("2d", {
				alpha: !0
			})).font = i2, aZ.e2.textBaseline(i0, 1), aZ.e2.textAlign(i0, 1), this.iB(), iC()
	}, this.iB = function() {
		aF = c9.cA.i7() && o.p < .8 * o.r ? this.r + 3 * i9.gap : Math.floor((o.p - p) / 2), this.aG = o.r - this.r - iD.iE() * i9.gap
	}, this.cw = function() {
		i3 && (i3 = !1, iC())
	}, this.i1 = function() {
		return !(!i1 || ce.cf && aF < Math.floor(i9.gap + 5.5 * this.r))
	}, this.iR = function(iS) {
		return !!this.i1() && aF + p > o.p - iS - i9.gap
	}, this.iT = function() {
		i1 = !aO.i6
	}, this.iU = function() {
		i1 = !1
	}, this.iO = function() {
		return gT.gn(Math.floor(1024 * gC + .5) - 1, 0, 1023)
	}, this.iV = function(iW, iX) {
		return this.i1() && aF < iW && iW < aF + p && iX > this.aG
	}, this.ia = function(iW, iX) {
		if (!this.i1()) return !1;
		if (!(__fx.settings.keybindButtons && iX > this.aG - Math.floor(i9.gap / 4) - this.r && iX < this.aG - Math.floor(i9.gap / 4) && __fx.mobileKeybinds.click(iW - aF))) {
			if (!iJ.iV(iW, iX)) return !1;
			ib.ic = !1, ! function(ig, iW, iX) {
				if (function(iW, iX) {
						return aF < iW && iW < aF + hz && iX > iJ.aG
					}(iW, iX)) return ih(i4);
				if (function(iW, iX) {
						return aF + p - hz < iW && iW < aF + p && iX > iJ.aG
					}(iW, iX)) return ih(1 / i4);
				return ig.i5 = !0, ii(iW)
			}(this, iW, iX) || (cR.cZ = !0)
		}
		return !0
	}, this.ij = function(ik) {
		0 !== aO.cd && this.i1() && ih(ik) && (cR.cZ = !0)
	}, this.im = function(deltaY) {
		var ik;
		return !(0 === deltaY || !this.i1()) && ih(ik = 0 < deltaY ? (ik = 400 / (400 + deltaY)) < i4 ? i4 : ik : 1 / i4 < (ik = (400 - deltaY) / 400) ? 1 / i4 : ik)
	}, this.io = function(iW) {
		return !!this.i5 && ii(iW)
	}, this.ip = function() {
		this.i5 = !1
	}, this.cT = function() {
		this.i1() && gL !== aZ.aa.iN(aO.b2, this.iO()) && (i3 = !0)
	}, this.k = function() {
		this.i1() && (aB.drawImage(canvas, aF, this.aG), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(aB, aF, this.aG)
	}
}

function cF() {
	this.size = 0, this.b7 = 0, this.cJ = null, this.d = function(cJ) {
		this.b7 = 0, this.cJ = cJ, this.size = cJ.length
	}, this.bj = function(hb) {
		return this.d(new Uint8Array(this.hd(hb))), this.cJ
	}, this.hX = function() {
		this.cJ = null
	}, this.cG = function(size, iq) {
		for (var cJ = this.cJ, eN = this.b7 + size - 1, g = this.b7; g <= eN; g++) cJ[g >> 3] |= (iq >> eN - g & 1) << 7 - (7 & g);
		this.b7 += size, this.b7 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.ir = function(size, iq) {
		var fi = size >> 1,
			bZ = 1 << fi;
		this.cG(size - fi, gT.gU(iq, bZ)), this.cG(fi, iq % bZ)
	}, this.is = function(size) {
		for (var cJ = this.cJ, eN = this.b7 + size, g = this.b7; g < eN; g++) cJ[g >> 3] &= 255 ^ 128 >>> (7 & g)
	}, this.hd = function(hb) {
		return hb + 7 >> 3
	}, this.it = function(bu, iu, eN, iv) {
		for (var g = iu; g < eN; g++) this.cG(iv, bu[g])
	}
}

function iw() {
	var j1, j2, ix = "",
		iy = 0,
		iz = 0,
		j0 = -1,
		j3 = ["Team", "Zombie", "BR", "1v1"];

	function j4() {
		for (var fh = new Date, j5 = fh.getUTCMinutes(), fh = fh.getUTCSeconds(), j7 = [], j8 = 0, g = 0; g < 6; g++) j7.push(j8), j7.push(j8 + 2), j7.push(j8 + 5), j7.push(j8 + 7), j8 += 10;
		for (var a3 = j7.length, g = 1; g < a3 && !(j5 < j7[g]); g++);
		g %= a3;
		fh = (j7[0] = 60) * (j7[g] - j5) - fh;
		return fh !== j0 && (ix = j3[g % 4] + " " + j2 + ": " + jA(Math.floor(fh / 60)) + ":" + jA(fh % 60), j0 = fh, iy = jB.measureText(ix, j1), iy += Math.floor(.4 * iz), 1)
	}

	function jA(iq) {
		return iq < 10 ? "0" + iq : String(iq)
	}
	this.d = function() {
		j2 = L(46)
	}, this.resize = function() {
		iy = Math.floor((c9.cA.i7() ? .53 : .36) * o.i8), iz = Math.floor(.065 * iy), j1 = aZ.e2.iA(1, Math.floor(.9 * iz)), j0 += 1e3, j4()
	}, this.cT = function() {
		j4() && (cR.cZ = !0)
	}, this.k = function(aG) {
		aB.lineWidth = 1 + Math.floor(iz / 15), aB.translate(o.p - iz, aG + iy), aB.rotate(-Math.PI / 2), aB.fillStyle = e8.e9, aB.fillRect(0, 0, iy, iz), aB.strokeStyle = e8.jC, aB.strokeRect(0, 0, iy, iz + 10), aB.fillStyle = e8.jC, aB.font =
			j1, aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 1), aB.fillText(ix, Math.floor(iy / 2), Math.floor(.59 * iz)), aB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function L(value, jD, du, jE) {
	var eJ = "number" == typeof value ? jF.jG[value] : value;
	if (du && jF.jH() && (eJ = du), !jD) return jE ? eJ.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : eJ;
	for (var a3 = jD.length, g = 0; g < a3; g++)
		for (var b8 = 0; b8 < 3; b8++) eJ = eJ.replace("{" + (10 * b8 + g) + "}", jD[g]);
	return eJ
}

function jI(jJ) {
	var eQ = document.createElement("div"),
		jK = document.createElement("div"),
		jL = [];

	function jN() {
		ei.ej() || (this.style.backgroundColor = aZ.color.jR(e8.iM, 50))
	}

	function jO() {
		this.style.backgroundColor = e8.iM
	}
	this.dn = function(jP, jQ) {
			jL[2].textContent = jP + 1 + " / " + jQ
		}, this.show = function(eZ) {
			eZ = bH.ec.jS(eZ, bH.ec.jT(eZ)), jK.appendChild(bH.jU.transform(eZ)), document.body.appendChild(eQ)
		}, this.resize = function() {
			var r = aZ.e2.en(.03, .5);
			eQ.style.width = 10 * r + "px", eQ.style.font = aZ.e2.iA(1, .75 * r), aZ.e2.jV(eQ, 4), jK.style.top = r + "px", jK.style.font = aZ.e2.iA(0, .55 * r), aZ.e2.jV(jK, 2), eQ.style.height = r + jK.offsetHeight + "px";
			for (var g = 0; g < 3; g++) aZ.e2.jV(jL[g], 6), jL[[0, 1, 3][g]].style.width = 2 * r + "px";
			for (g = 0; g < 4; g++) jL[g].style.height = r + "px", aZ.e2.jV(jL[g], 2);
			jL[2].style.width = 4 * r + "px", jL[1].style.left = 2 * r + "px", jL[2].style.left = 4 * r + "px", jL[3].style.left = 8 * r + "px"
		}, this.hX = function() {
			for (var g = 0; g < 4; g++) jL[g].onclick = null, jL[g].onmouseover = null, jL[g].onmouseout = null;
			bT.removeChild(document.body, eQ), eQ = jK = jL = null
		}, eQ.style.position = "absolute", eQ.style.color = e8.e9, eQ.style.zIndex = "3", eQ.style.right = "0", eQ.style.top = "0", jK.style.position = "absolute", jK.style.height = "auto", jK.style.color = e8.e9, jK.style.backgroundColor = e8.iM, jK
		.style.left = "0", jK.style.width = "100%", jK.style.overflowWrap = "break-word", eQ.appendChild(jK);
	for (var g = 0; g < 4; g++) jL[g] = document.createElement("div"), jL[g].style.position = "absolute", jL[g].style.backgroundColor = e8.iM, jL[g].style.color = e8.e9, jL[g].style.top = "0", jL[g].style.display = "flex", jL[g].style
		.justifyContent = "center", jL[g].style.alignItems = "center", jL[g].style.userSelect = "none", jL[g].style.outline = "none", jL[g].style.font = "inherit", 2 !== (jL[g].jM = g) && (jL[g].onclick = jJ, jL[g].onmouseover = jN, jL[g]
			.onmouseout = jO), eQ.appendChild(jL[g]);
	jL[0].textContent = "◀", jL[1].textContent = "▶", jL[3].textContent = "✖"
}

function jW() {
	var jX = jY(a1.bd);
	jX && jZ(jX[0], jX[1], jX[2], jX[3], jX[4])
}

function jY(bd) {
	return 2 === bd ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === bd ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === bd ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === bd ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === bd ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function jZ(ja, jb, jc, jd, je) {
	for (var aF, aG, hF, hG, il, ji, aC = ja.length - 1, jf = a1.a2 + a1.jg, a3 = (jf *= jf, jc.length), jh = Array(a3), g = a3 - 1; 0 <= g; g--) jh[g] = jc[g] * jc[g];
	var jj = new Array(a3),
		jk = new Array(a3),
		jl = new Array(a3),
		aq = jm.jn();
	if (void 0 === je)
		for (je = new Array(a3), g = a3 - 1; 0 <= g; g--) je[g] = 0;
	for (g = 1; g < a3; g++) jj[g] = jh[g] - jh[g - 1], jk[g] = jd[g] - jd[g - 1], jl[g] = je[g] - je[g - 1];
	for (aF = a1.a2 - 1; 0 <= aF; aF--)
		for (aG = a1.jg - 1; 0 <= aG; aG--) {
			for (hF = jf, g = aC; 0 <= g; g--) hF = (hG = (aF - ja[g]) * (aF - ja[g]) + (aG - jb[g]) * (aG - jb[g])) < hF ? hG : hF;
			for (il = jd[a3 - 1], ji = je[a3 - 1], g = 1; g < a3; g++)
				if (hF < jh[g]) {
					il = jd[g - 1] + jo((hF - jh[g - 1]) * jk[g], jj[g]), ji = je[g - 1] + jo((hF - jh[g - 1]) * jl[g], jj[g]);
					break
				} jp(a1.a2 * aG + aF, il, ji, aq)
		}
}

function jp(b7, il, ji, aq) {
	il < 500 ? aq[b7] = gT.gU(aq[b7] * il * 2, 1e3) : 500 < il && (aq[b7] += gT.gU(2 * (1e4 - aq[b7]) * (il - 500), 1e3)), aq[b7] += gT.gU(ji * (10 * il - aq[b7]), 1e3)
}

function jq() {
	var jr, js, jv, jy, jz, jt = [new Array(4), new Array(4), new Array(2), new Array(2)],
		ju = new Array(4),
		jw = new Array(2),
		jx = [L(47), L(48), L(49), L(50)];

	function k8() {
		var kG;
		!bH.kF || (kG = jr.kH.kI.br.value.trim().slice(0, 127)).length < 1 || (jr.kH.kI.br.value = "", bH.kJ.kK(kG))
	}

	function k6(kN) {
		bH.i.bV[3] = 1 - bH.i.bV[3], kD(3, 1, bH.i.bV[3]), kN && dc.kO.kP(4), bH.i.bV[3] && df.dm.dn(158, bH.i.bV[0])
	}

	function k1(b8, fi) {
		bH.i.bV[b8] !== fi && (0 === b8 && bH.i.bV[3] && k6(0), kD(b8, bH.i.bV[b8], 0), kD(b8, fi, 1), bH.i.bV[b8] = fi, 0 === b8 ? (dc.kO.kP(2, fi), bH.i.bV[2] ? (jr.kS.eT(), jr.kH.kT(1)) : jr.kH.kT(0), bT.kU().kV(), bT.kU().kW()) : 2 === b8 && (
			0 === fi ? (dc.kO.kP(0), jr.kH.eT(), jr.kX()) : (dc.kO.kP(1), jr.kS.eT(), jr.kY())))
	}

	function kD(b8, fi, color) {
		jr.kZ[b8].kC[fi].e7(color ? e8.ka : e8.k2)
	}

	function ke(bd) {
		return a1.ks.kt[bd]
	}

	function kf(bM) {
		return bM < 7 ? "   " + (bM + 2) + " Teams" : 10 === bM ? "   No Full-Sending" : ""
	}

	function kg(kh, l1) {
		return l1 ? kh <= 90 && 60 < kh ? "   Contest" : "" : kh <= 60 ? "   Contest" : ""
	}
	this.kL = function() {
		return jr.kH
	}, this.kJ = function(bh) {
		k1(2, 0);
		var eJ = jr.kH.kI.br.value,
			bh = "@" + bh + " ";
		eJ.length && !aZ.fo.kR(eJ, " ") && (bh = " " + bh), jr.kH.kI.br.value = eJ += bh, jr.kH.kI.br.focus()
	}, this.kb = function() {
		jr.kS.eT()
	}, this.kV = function() {
		var kc = bH.i.bV[0],
			kc = bH.i.bK[kc],
			fi = (a1.bj(kc.bd, kc.mapSeed), js.kC),
			kd = ke(kc.bd, kc.mapSeed) + kf(kc.bM) + kg(kc.kh),
			kc = L(56) + "   " + ke(kc.kj, kc.kk) + kf(kc.kl) + kg(kc.kh, 1);
		fi[0].button.textContent === kd && fi[1].button.textContent === kc || (fi[0].button.textContent = kd, fi[1].button.textContent = kc, js.resize())
	}, this.kW = function() {
		var kc = bH.i.bV[0],
			bJ = bH.i.bK[kc];
		jr.km(bJ.kn);
		for (var aq, j5, g = 0; g < bH.bI.bN.length; g++) jt[0][g].eb.textContent = bH.bI.bN[g].length, jt[1][g].eb.textContent = (aq = bH.i.bK[g].kh, j5 = void 0, ((j5 = gT.gU(aq, 60)) < 10 ? "0" : "") + j5 + ":" + ((aq %= 60) < 10 ? "0" : "") +
			aq);
		var bJ = bH.bI.bN[kc],
			kp = bJ.length,
			kq = bH.bI.bG[kc];
		jt[2][1].eb.textContent = "" + kp, jt[3][1].eb.textContent = "" + kq;
		for (g = 0; g < 4; g++) {
			var kr = bH.i.bK[g];
			ju[g] ? 0 === kr.kn && (ju[g].eb.textContent = a1.ks.kt[kr.bd]) : ju[g] = new kB(a1.ks.kt[kr.bd], jy.kC[g].button, 1, 1), aZ.fo.startsWith(jx[g], "🏆 ") ? kr.bb || (jx[g] = jx[g].substring(3), jy.kC[g].button.textContent = jx[g], jy
				.kC[g].button.appendChild(jt[1][g].eb), jy.kC[g].button.appendChild(jt[0][g].eb), jy.kC[g].button.appendChild(ju[g].eb)) : kr.bb && (jx[g] = "🏆 " + jx[g], jy.kC[g].button.textContent = jx[g], jy.kC[g].button.appendChild(jt[1]
				[g].eb), jy.kC[g].button.appendChild(jt[0][g].eb), jy.kC[g].button.appendChild(ju[g].eb))
		}
		var ku = "",
			kv = "";
		0 === kc && (ku = bH.ec.kw(bJ, 0, kp), kv = bH.ec.kw(bJ, 0, kq)), jv[0].eb.textContent = ku, jv[1].eb.textContent = kv, jw[1].eb.textContent = "MP: " + bH.i.kx[0] + "   SP: " + bH.i.kx[1] + "   Lobby: " + aZ.ky.kz(bH.bI.bN)
	}, this.l2 = function() {
		jr.kH.eT()
	}, this.show = function() {
		bH.i.bS++, jr.show(), this.resize(), bH.message.show()
	}, this.eB = function() {
		jr.eB(), bH.k9.eB(), bH.eU.eB(), bH.message.eB()
	}, this.resize = function() {
		jr.resize(1 - bH.i.bV[2]), bH.message.resize()
	}, this.eC = function(aH) {
		2 === aH ? bH.i.bV[3] ? k6(1) : jr.kZ[3].kC[0].eE() : aH < 2 && k6(1)
	}, jy = new k0([new c6(jx[0], function() {
		return k1(0, 0), 2
	}), new c6(jx[1], function() {
		return k1(0, 1), 2
	}), new c6(jx[2], function() {
		return k1(0, 2), 2
	}), new c6(jx[3], function() {
		return k1(0, 3), 2
	})], e8.k2), js = new k0([new c6("", 0, 2), new c6("", 0, 2)], e8.k3, 1);
	var k4 = new k0([new c6(L(51), function() {
		return k1(2, 0), 2
	}), new c6(L(52), function() {
		return k1(2, 1), 2
	})], e8.k2);
	jz = new k0([new c6(L(53, 0, 0, 1), function() {
		bT.c7(), bH.hX(), dc.i.kM(3240), bT.c4(5, 5)
	}), new c6(L(54), function() {
		return k6(1), 2
	})], e8.k2), jr = new k7(jy, js, k4, jz, k8, bH.k9.kA);
	for (var g = 0; g < 4; g++) jt[0][g] = new kB("0", jy.kC[g].button), jt[1][g] = new kB("0", jy.kC[g].button, 1);
	jt[2][1] = new kB("0", k4.kC[1].button), jt[3][1] = new kB("0", jz.kC[1].button), (jv = [new kB("", k4.kC[1].button, 1, 1), new kB("", jz.kC[1].button, 1, 1)])[0].eb.style.bottom = "0em", jv[1].eb.style.bottom = "0em", kD(0, bH.i.bV[0], 1), kD(2,
		bH.i.bV[2], 1), (jw = [new kB(L(55), jr.kE(), 1, 0), new kB("", jr.kE(), 1, 1)])[0].eb.style.fontSize = "0.4em", jw[1].eb.style.fontSize = "0.4em"
}

function hU(go) {
	bw && !go || (m3(), gT = new m4, lj = new m5, aZ = new m6, e8 = new m7, aO = new m8, jF = new m9, hp = new mA, hl = new mB, gc = new mC, l3 = new mD, l4 = new gV, l5 = new mE, l6 = new mF, l7 = new mG, l8 = new mH, l9 = new mI, ce = new mJ, b3 =
		new mK, lA = new iw, lB = new mL, jB = new mM, iJ = new hy, ib = new mN, lC = new mO, lD = new mP, lE = new mQ, cs = new mR, lF = new mS, lG = new mT, lH = new mU, bi = new mV, lI = new mW, h3 = new mX, lN = new mY, bB = new mZ, lP =
		new ma, lO = new mb, lJ = new aI, gN = new mc, lK = new md, b5 = new me, fZ = new ez, lL = new mf, lX = new mg, lM = new mh, lQ = new mi, jm = new mj, lR = new mk, dc = new ml, lW = new mm, av = new mn, lS = new mo, lT = new mp, lU =
		new mq, o = new mr, lV = new ms, bX = new mt, lY = new mu, lZ = new mv, la = new mw, lb = new mx, lc = new my, ld = new mz, le = new gi, lf = new n0, dF = new n1, d0 = new n2, cU = new n3, hc = new cF, lg = new n4, lh = new hW, li =
		new n5, ei = new n6, gq = new n7, a4 = new n8, gD = new n9, h = new gd, lk = new nA, fM = new nB, a1 = new nC, ll = new nD, bT = new nE, lm = new nF, c9 = new nG, bw = new nH, lu = new nI, df = new nJ, e = new nK, lt = new nL, ls =
		new nM, cj = new nN, ln = new nO, lo = new nP, ac = new fz, gR = new nQ, cR = new nR, iD = new nS, i9 = new nT, bz = new nU, lv = new nV, lw = new nW, bH = new nX, ly = new nY, lz = new nZ, m0 = new na, m1 = new nb, bw.d(), c9.d(), o
	.g9(), df.d(), jF.d(), jF.nd(), (lp = new ne).d(), aZ.d(), ln.d(), dc.d(), hp.d(), hl.d(), a1.d(), bT.d(), lq = new nf, o.d(), cR.d(), i9.d(), lo.d(), lr = new ng, lW.d(), gN.nh(), lm.d(), lQ.d(), bi.d(), lC.d(), lL.d(), ei.d(), lI.d(), cR
		.cZ = !0, setTimeout(function() {
			a1.bj(2, 14071)
		}, 0), bT.c4(5, 5), li.bF() || c9.cA.ni(), o.nj(), bw.bx = 1)
}

function mv() {
	var nk = 0,
		nl = !0;

	function nn(id) {
		id = [L(57), L(58), L(59), L(60)][id];
		b3.no(id)
	}
	this.cT = function() {
		var fh, j6;
		cR.cQ < nk || (nk = cR.cQ + 3e3, aO.i6) || aO.cq || aZ.aa.fQ(aO.b2) || (fh = new Date, j6 = fh.getUTCSeconds(), nl ? j6 < 43 && (nl = !1) : j6 < 43 || (nk += 52e3, nl = !0, (j6 = (fh.getUTCMinutes() + 2) % 60) % 10 == 0 ? aO.fP < 7 && nn(
			0) : j6 % 10 == 5 ? 7 !== aO.fP && 10 !== aO.fP || nn(1) : j6 % 10 == 7 ? 8 === aO.fP && nn(2) : j6 % 10 == 2 && 9 === aO.fP && nn(3)))
	}
}

function np() {
	var ep, eq, er, et;

	function es(g) {
		bT.c4(8, bT.bU, new ev(21, {
			ew: g,
			ex: 0,
			ey: 10
		}))
	}
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), eq.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, er = [new c6(L(61), function() {
		es(1)
	}, 0, 0, 1), new c6(L(62), function() {
		es(2)
	}, 0, 0, 1), new c6(L(63), function() {
		es(3)
	}, 0, 0, 1), new c6(L(64), function() {
		es(0)
	}, 0, 0, 1), new c6(L(48), function() {
		es(9)
	}, 0, 0, 1), new c6(L(65), function() {
		es(10)
	}, 0, 0, 1), new c6(L(66), function() {
		es(11)
	}, 0, 0, 1), new c6(L(67), function() {
		es(13)
	}, 0, 0, 1)], et = [new c6("⬅️ " + L(1), function() {
		bT.dN()
	})], ep = new dM(L(68), et), eq = new eu(er, ep.dP)
}

function nq() {
	function o9() {
		a1.oA.cT()
	}

	function oN(fg, oL) {
		0 < oL && (a1.oM[fg] += oL, a1.oM[fg + 1] += oL, a1.oM[fg + 2] += oL)
	}

	function oF(fg) {
		return a1.oM[fg + 2] > a1.oM[fg] && a1.oM[fg + 2] > a1.oM[fg + 1]
	}
	this.nr = -1, this.ns = 0, this.nt = 0, this.nu = 8, this.nv = 32, this.nw = 8, this.nx = 32, this.ny = [0, 0], this.iG = [0, 0, 0, 0], this.nz = null, this.o0 = !0, this.o1 = !1, this.o2 = function() {
		-1 !== this.nr && clearTimeout(this.nr), this.nr = -1, this.nz = null, jm.o3()
	}, this.d = function() {
		7 === bi.o4() || this.o1 || (this.o0 = !0, this.ns = 0, this.nt = 1, this.ny = [a1.ks.o5[a1.bd].o6[0], a1.ks.o5[a1.bd].o7[0]], this.iG = [a1.ks.o5[a1.bd].o8[3], a1.ks.o5[a1.bd].o8[4], a1.ks.o5[a1.bd].o8[5], a1.ks.o5[a1.bd].o8[6]], this
			.nu = a1.ks.o5[a1.bd].o8[7], this.nv = a1.ks.o5[a1.bd].o8[8], this.nw = a1.ks.o5[a1.bd].o8[9], this.nx = a1.ks.o5[a1.bd].o8[10], this.o0 ? this.nr = setTimeout(o9, 16) : this.cT())
	}, this.cT = function() {
		if (8 === bi.o4() && l5.oB()) this.nr = setTimeout(o9, 16);
		else {
			if (0 === this.ns) {
				var l0 = lW.oC();
				if (lW.oD(a1.ks.o5[a1.bd].o8[2]), jm.bj([a1.a2, a1.jg, a1.ks.o5[a1.bd].o8[0], a1.ks.o5[a1.bd].o8[1]]), lW.oD(l0), this.nz = jm.jn(), this.ns++, this.o0) return void(this.nr = setTimeout(o9, 16))
			}
			for (var fg, gz, l0 = this.o0 ? 10 : 1e6, l0 = a1.jg - this.nt - 1 < l0 ? a1.jg - this.nt - 1 : l0, oE = this.nt + l0, aG = this.nt; aG < oE; aG++)
				for (var aF = 1; aF < a1.a2 - 1; aF++) oF(fg = 4 * (gz = aF + aG * a1.a2)) ? this.oG(fg, gz, 1) : (this.oG(fg, gz, 0), function(aF, aG, fg) {
					return 1 < aF && oF(fg - 4) || aF < a1.a2 - 2 && oF(fg + 4) || 1 < aG && oF(fg - 4 * a1.a2) || aG < a1.jg - 2 && oF(fg + 4 * a1.a2)
				}(aF, aG, fg) && this.oI(aF, aG));
			this.nt = oE, this.nt >= a1.jg - 1 ? (a1.oJ.putImageData(a1.oK, 0, 0, 1, 1, a1.a2 - 2, a1.jg - 2), cR.cZ = !0, this.o2()) : this.o0 && (this.nr = setTimeout(o9, 16))
		}
	}, this.oG = function(fg, gz, b7) {
		oN(fg, Math.floor(this.ny[b7] + this.iG[b7] * this.nz[gz] / 1e4) - a1.oM[fg])
	}, this.oO = function(fg, hI, oP, b7, iG) {
		oN(fg, Math.floor(this.ny[b7] + (1 - hI / oP) * iG) - a1.oM[fg])
	}, this.oI = function(iW, iX) {
		for (var fg, hI, oP, oQ = iW - this.nv, oR = iX - this.nv, oS = iW + this.nv, oE = iX + this.nv, oQ = oQ < 1 ? 1 : oQ, oS = oS > a1.a2 - 2 ? a1.a2 - 2 : oS, oE = oE > a1.jg - 2 ? a1.jg - 2 : oE, aG = oR < 1 ? 1 : oR; aG <= oE; aG++)
			for (var aF = oQ; aF <= oS; aF++) oF(fg = 4 * (aF + aG * a1.a2)) ? (oP = this.nu + (this.nv - this.nu) * this.nz[aF + a1.a2 * aG] / 1e4, Math.abs(iW - aF) > oP || Math.abs(iX - aG) > oP || oP <= (hI = Math.sqrt((iW - aF) * (iW - aF) +
				(iX - aG) * (iX - aG))) || this.oO(fg, hI, oP, 1, this.iG[3])) : (oP = this.nw + (this.nx - this.nw) * this.nz[aF + a1.a2 * aG] / 1e4, Math.abs(iW - aF) > oP || Math.abs(iX - aG) > oP || oP <= (hI = Math.sqrt((iW - aF) * (iW -
				aF) + (iX - aG) * (iX - aG))) || this.oO(fg, hI, oP, 0, this.iG[2]))
	}
}

function oT() {
	this.d = function() {
		! function() {
			var data = df.dg.data;
			0 === data[2].eK && (o.r > o.p || 0 !== c9.id) && (data[2].value = data[2].du = 1);
			0 === data[100].eK && (data[100].value = data[100].du = (0 === c9.id ? "Player " : 1 === c9.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var g, data = df.dg.data,
			a3 = data.length;
		for (g = 0; g < a3; g++) {
			var oW = df.eE.oX(g, !0);
			data[g] && data[g].eK === oW && (null === (oW = df.eE.oY(g)) ? data[g].value = data[g].du : 2 === data[g].type ? data[g].value = oW : (oW = Number(oW), isNaN(oW) ? data[g].value = data[g].du : data[g].value = oW))
		}
	}
}

function oa() {
	this.hn = function(size) {
		for (var ob = lh, bu = [], g = 0; g < size; g++) bu.push(String.fromCharCode(ob.hY(16)));
		return bu.join("")
	}, this.oc = function(eJ) {
		return 20 < (eJ = eJ.trim()).length ? eJ.substring(0, 20) : eJ
	}
}

function nB() {
	this.od = new oe, this.result = new og, this.oh = new oi, this.oj = new ok, this.ol = new om, this.on = new fL, this.d = function() {
		this.result.d()
	}
}

function oo() {
	var ot, ou;
	this.op = 3, this.oq = null, this.or = 0, this.os = 0;

	function p8() {
		return 0 === lH.p9 ? bw.pA ? 1 : 0 : lH.p9 - 1
	}

	function pG(pD, pE, pF) {
		ou[pD].ow = !0, p2(pD), ot[pD] = new pJ, ot[pD].d(pD, pE, pF)
	}

	function pH(g) {
		return ou[g].ow && ot[g].pH()
	}

	function p2(pD) {
		ou[pD].cQ = cR.cQ, ou[pD].ox = !1
	}
	this.d = function() {
		this.oq = new Array(this.op), this.oq[0] = "territorial.io", this.oq[1] = "1.territorial.io", this.oq[2] = "2.territorial.io", ot = new Array(this.op), ou = new Array(this.op);
		for (var g = this.op - 1; 0 <= g; g--) ou[g] = {
			ow: !1,
			cQ: 0,
			ox: !1
		};
		this.oy(0, 0, 0)
	}, this.oz = function(g) {
		return ot[g]
	}, this.cT = function() {
		for (var g = this.op - 1; 0 <= g; g--) this.e1(g) && cR.cQ > ou[g].cQ + 15e3 && (dc.p0.p1(g, ou[g].ox), p2(g));
		!this.e1(0) && cR.cQ > ou[0].cQ + 8e3 && (ou[0].cQ = cR.cQ, this.oy(0, 0, 0))
	}, this.p3 = function(id) {
		return this.oy(0, id, 0) && this.p4(0)
	}, this.p5 = function(p6) {
		return p6 ? lH.p7 : p8()
	}, this.pB = function() {
		return p8() ? "game.territorial.io" : "territorial.io"
	}, this.dd = function(pC) {
		pC = this.pB() + pC;
		return "<a href='https://" + pC + "' target='_blank'>" + pC + "</a>"
	}, this.oy = function(pD, pE, p6) {
		p6 = this.p5(p6);
		if (ou[pD].ow) {
			if (ot[pD].pH()) return ot[pD].pI(pE), ot[pD].e1();
			ot[pD].eB()
		}
		return pG(pD, pE, p6), !1
	}, this.pK = function(pD, pE) {
		console.log("Connection to Server " + pD), dc.pL.pM(pD)
	}, this.p4 = function(g) {
		return this.e1(g) && ot[g].p4()
	}, this.pN = function(g) {
		ot[g].pN()
	}, this.e1 = function(g) {
		return ou[g].ow && ot[g].e1()
	}, this.send = function(pD, cJ) {
		0 !== pD && p2(pD), ot[pD].send(cJ)
	}, this.pO = function(pD) {
		8 === bi.o4() && (ou[pD].ox = !0, dc.pP.pQ = !0)
	}, this.close = function(pD, pR) {
		pH(pD) && ot[pD].close(pR)
	}, this.pS = function(pD, pR) {
		bz.pT(pR), pH(pD) && ot[pD].close(pR)
	}, this.kM = function(pR) {
		for (var g = this.op - 1; 0 <= g; g--) this.close(g, pR)
	}, this.pU = function(pD, pR) {
		for (var g = this.op - 1; 0 <= g; g--) g !== pD && this.close(g, pR)
	}, this.pV = function() {
		0 === this.or && (aO.cq || aO.i6) || this.close(this.or, 3246)
	}, this.pW = function(pD, br) {
		ot[pD].eB(), bz.pX(pD, br.code)
	}
}

function pY(el, pZ) {
	var pa = document.createElement("div");
	this.pb = pa, this.resize = function() {
		pa.style.padding = aZ.e2.em(i9.pc), pa.style.lineHeight = aZ.e2.em(aZ.e2.en(.035))
	}, el.style.overflowX = "hidden", el.style.overflowY = "auto", pa.innerHTML = pZ, el.appendChild(pa)
}

function mo() {
	var pd, pe, oF, pf;
	this.d = function() {
		var g, aF, aG, pg, ph, p, r, i0, pi, pj, aq, fg, pk, b8, po;
		if (function() {
				if (oF = !0, pf = "rgb(" + a1.oM[0] + "," + a1.oM[1] + "," + a1.oM[2] + ")", a1.pn(a1.bd)) return 1;
				return oF = !1, 0
			}()) pe = null;
		else {
			for (pd = gT.gU(96, 4), ph = 1 === a1.bd ? (pg = 0, 160) : (pg = 128, 32), pf = "rgb(" + pg + "," + pg + "," + pg + ")", pe = new Array(4), g = 3; 0 <= g; g--) {
				if (pe[g] = document.createElement("canvas"), p = g % 2 == 0 ? a1.a2 : pd, r = g % 2 == 0 ? pd : a1.jg + 2 * pd, pe[g].width = p, pe[g].height = r, pj = (pi = (i0 = pe[g].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, p, r)).data, g % 2 == 0)
					for (aG = pd - 1; 0 <= aG; aG--)
						for (aq = ph + Math.floor((aG + 1) * (pg - ph) / (pd + 1)), aF = p - 1; 0 <= aF; aF--) pj[fg = 4 * ((0 === g ? pd - aG - 1 : aG) * p + aF)] = aq, pj[fg + 1] = aq, pj[fg + 2] = aq, pj[fg + 3] = 255;
				else {
					for (aF = pd - 1; 0 <= aF; aF--)
						for (aq = ph + Math.floor((aF + 1) * (pg - ph) / (pd + 1)), aG = r - 1 - pd; pd <= aG; aG--) pj[fg = 4 * (aG * p + (3 === g ? pd - aF - 1 : aF))] = aq, pj[fg + 1] = aq, pj[fg + 2] = aq, pj[fg + 3] = 255;
					for (b8 = 1; 0 <= b8; b8--)
						for (aF = pd - 1; 0 <= aF; aF--)
							for (aG = pd - 1; 0 <= aG; aG--) pk = (Math.pow(aF * aF + aG * aG, .5) + 1) / (pd + 1), aq = ph + Math.floor((1 < pk ? 1 : pk) * (pg - ph)), pj[fg = 4 * ((0 === b8 ? pd - aG - 1 : aG + b8 * (r - pd)) * p + (1 === g ?
								aF : pd - aF - 1))] = aq, pj[fg + 1] = aq, pj[fg + 2] = aq, pj[fg + 3] = 255
				}
				i0.putImageData(pi, 0, 0)
			}
			po = ph, a1.oJ.fillStyle = "rgb(" + po + "," + po + "," + po + ")", a1.oJ.fillRect(0, 0, a1.a2, 1), a1.oJ.fillRect(0, a1.jg - 1, a1.a2, 1), a1.oJ.fillRect(0, 0, 1, a1.jg), a1.oJ.fillRect(a1.a2 - 1, 0, 1, a1.jg)
		}
	}, this.pp = function() {
		var b8 = oF ? 0 : -pd;
		pq(b8, b8, a1.a2 - 2 * b8, a1.jg - 2 * b8, ls.pr, ls.ps, ls.pt, ls.pu) || (aB.fillStyle = pf, aB.fillRect(0, 0, o.p, o.r))
	}, this.k = function() {
		oF || (pv(0, -pd, a1.a2, pd, ls.pr, ls.ps, ls.pt, ls.pu) && aB.drawImage(pe[0], ls.pw, ls.px - pd), pv(a1.a2, -pd, pd, a1.jg + 2 * pd, ls.pr, ls.ps, ls.pt, ls.pu) && aB.drawImage(pe[1], ls.pw + a1.a2, ls.px - pd), pv(0, a1.jg, a1.a2, pd,
			ls.pr, ls.ps, ls.pt, ls.pu) && aB.drawImage(pe[2], ls.pw, ls.px + a1.jg), pv(-pd, -pd, pd, a1.jg + 2 * pd, ls.pr, ls.ps, ls.pt, ls.pu) && aB.drawImage(pe[3], ls.pw - pd, ls.px - pd))
	}
}

function dZ() {
	var pa;
	this.py = [], this.pa = document.createElement("div"), this.da = function(eJ, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = eJ, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.pa.appendChild(
			title), title
	}, this.di = function(eJ, marginBottom) {
		var dh = document.createElement("p");
		return dh.textContent = eJ, dh.style.fontSize = "0.75em", dh.style.lineHeight = "1.2em", dh.style.marginBottom = marginBottom || "0", this.pa.appendChild(dh), dh
	}, this.pz = function(eJ) {
		var q0 = document.createElement("p");
		return q0.textContent = eJ, q0.style.fontSize = "1em", q0.style.marginBottom = "0", q0.style.whiteSpace = "pre-wrap", q0.style.overflowWrap = "break-word", this.pa.appendChild(q0), q0
	}, this.db = function(pZ, fontSize) {
		var pa = document.createElement("div");
		return pa.innerHTML = pZ, pa.style.fontSize = fontSize || "1em", pa.style.lineHeight = "1.2em", this.pa.appendChild(pa), pa
	}, this.q1 = function(q2) {
		for (var q3 = q2.q3, a3 = q3.length, g = 0; g < a3; g++) this.pa.appendChild(q3[g])
	}, this.dq = function(eZ) {
		return this.py.push(eZ), this.pa.appendChild(eZ.br), eZ
	}, this.resize = function() {
		for (var a3 = this.py.length, g = 0; g < a3; g++) this.py[g].resize && this.py[g].resize()
	}, (pa = this.pa).style.position = "absolute", pa.style.height = "auto", pa.style.padding = "0.5em"
}

function q4() {
	this.pQ = !1, this.cT = function() {
		cR.gS() % 250 != 249 || aO.i6 || (dc.pL.q5(+(this.pQ && fZ.f3[aO.b2]), bB.bC + a4.i.a5), this.pQ = !1)
	}
}

function mG() {
	this.d = function() {
		if (0 === aO.data.sResourcesType) {
			for (var qA = aO.aP, fA = fZ.fA, g = 0; g < qA; g++) fA[g] = 512;
			var qB = aO.qC,
				qD = gc.qD,
				aM = gc.aM;
			for (g = qA; g < qB; g++) fA[g] = qD[aM[g]]
		} else(1 === aO.data.sResourcesType ? function() {
			for (var a3 = aO.qC, fA = fZ.fA, sResourcesValue = aO.data.sResourcesValue, g = 0; g < a3; g++) fA[g] = sResourcesValue
		} : function() {
			for (var a3 = aO.qC, fA = fZ.fA, sResourcesData = aO.data.sResourcesData, g = 0; g < a3; g++) fA[g] = sResourcesData[g]
		})();
		ac.az[8] = fZ.fA[aO.b2]
	}
}

function mt() {
	this.bW = 0;
	var qF, qG, qH, qI, qJ, qK = this.qE = 0;

	function qN() {
		qI = qJ = null, qK = 0
	}
	this.d = function(bJ, bO, bP) {
		bT.c7(), bH.hX(), bi.setState(10), qI = bJ, qJ = bO, qK = bP, this.bW = bJ.bW, this.qE = bP, qF = 0, qG = cR.cQ + 4500, dc.i.or = bJ.or, dc.i.os === bJ.or ? (console.log("direct pass"), qH = 0) : (console.log("delayed pass"), dc.i.close(
			dc.i.os, 3247), qH = 2, dc.i.oy(bJ.or, 5, 2) && dc.p0.qL()), aB.imageSmoothingEnabled = !0, bi.pp();
		bO = lI.qT("loading"), bP = (c9.cA.i7() ? .396 : .25) * o.i8 / bO.width;
		aB.setTransform(bP, 0, 0, bP, Math.floor((o.p - bP * bO.width) / 2), Math.floor((o.r - bP * bO.height) / 2)), aB.imageSmoothingEnabled = !1, aB.drawImage(bO, 0, 0), aB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.qO = function() {
		0 < qH && cR.cQ > qG && (qH--, qG += 4500, 0 === cR.cO) && 0 === cR.gS() && dc.i.oy(dc.i.or, 5, 2)
	}, this.qP = function() {
		return 10 === bi.o4() && (bH.qQ.bY(qI, qJ, qK), qN(), !0)
	}, this.qR = function() {
		10 === bi.o4() && 2 <= ++qF && (bH.qQ.bY(qI, qJ, qK), qN())
	}
}

function qU() {
	var qV = new Uint16Array(aO.aR);

	function qs(player, qp) {
		for (var a3 = gD.qe[0], r2 = gD.r2, r3 = -1, r4 = aO.aR, g = 0; g < a3; g++) {
			var pk, fg = r2[g];
			m1.r5(player, fg) && (pk = gq.r6(qp, gq.r7(fg)), -1 === r3 || pk < r3) && (r3 = pk, r4 = fg)
		}
		return r4
	}

	function qu(qr, qp) {
		if (qr === aO.aR) return 0;
		var fD = fZ.fD[qr],
			aj = fD.length;
		if (0 === aj) return 0;
		for (var a3 = Math.min(aj, 10), r4 = 0, r3 = gq.r6(fD[r4] >> 2, qp), g = 0; g < a3; g++) {
			var qh = lW.qi(aj),
				pk = gq.r6(fD[qh] >> 2, qp);
			pk < r3 && (r3 = pk, r4 = qh)
		}
		return fD[r4] >> 2
	}

	function qy(player, qp, aL, r9) {
		var rA;
		(r9 === aO.aR || (rA = gq.r7(aL), r9 = gq.r7(r9), gq.r6(qp, rA) < gq.r6(qp, r9))) && (qV[player] = aL)
	}
	this.d = function() {
		qV.fill(aO.aR)
	}, this.qW = function() {
		if (cR.gS() % 109 == 9 && !(bB.bC < 20) && aO.qX && !(lt.qY() < gT.gU(8 * aO.qZ, 10))) {
			var qa = lt.qb();
			if (e.qc[qa]) {
				lt.qd(qa);
				var a3 = gD.qe[0];
				if (0 !== a3)
					for (var bu = gD.qf, bD = bB.bD, bC = bB.bC, qg = qV, qh = lW.qi(a3), g = 0; g < bC; g++) {
						var qj = bD[g],
							qk = bu[qh];
						aZ.aa.ql(qj, qk) && 512 === qg[qj] && (qg[qj] = qk, qh = (qh + 1) % a3)
					}
			}
		}
	}, this.cT = function(player) {
		var qp, qt, qr, qm = function(player) {
			var aL = qV[player];
			if (aL !== aO.aR) {
				if (aZ.aa.r8(aL) && fZ.fD[aL]) return aL;
				qV[player] = aO.aR
			}
			return aO.aR
		}(player);
		return function(player) {
			for (var r1 = bB.bD, aj = bB.bC, a3 = Math.min(aj, aj < 17 && 5 === lW.qi(20) ? 1 : 16), y = lW.qi(aj), r2 = gD.r2, fD = fZ.fD, dl = 0, g = 0; g < a3; g++) {
				var fg = r1[(g + y) % aj];
				fg !== player && fD[fg].length && (r2[dl++] = fg)
			}
			gD.qe[0] = dl
		}(player), 0 !== gD.qe[0] && (0 < (qt = qu(qr = qs(player, qp = gq.qq(player)), qp)) && a4.qv.qw(player, a4.ec.qx(qt, qp)) ? (qy(player, qp, qr, qm), !0) : 0 < (qr = function(player, qp) {
			for (var a3 = gD.qe[0], r2 = gD.r2, qg = qV, y = 0, g = 0; g < a3; g++) {
				var fg = r2[g],
					fg = qg[fg];
				fg !== aO.aR && aZ.aa.r8(fg) && player !== fg && m1.r5(player, fg) && (r2[y++] = fg)
			}
			return 0 !== (gD.qe[0] = y) ? qu(qs(player, qp), qp) : 0
		}(player, qp)) && a4.qv.qw(player, a4.ec.qx(qr, qp)) ? (qy(player, qp, h3.h5(qr << 2), qm), !0) : !!(0 < (qt = qu(qm, qp)) && a4.qv.qw(player, a4.ec.qx(qt, qp))))
	}
}

function ev(id, rC, rD) {
	var ep, rE;

	function rJ() {
		rE.pb.innerHTML += "<br>" + L(71)
	}

	function rX() {
		var fi = 1;
		bT.c4(4, 1, new c5(L(72), L(73), !1, [new c6("🔄 Reload", function() {
			fi && (setTimeout(function() {
				bT.c4(1)
			}, 5e3), c9.cA.cB()), fi = 0
		}, e8.rg)]))
	}

	function rI() {
		hc.bj(90), hc.cG(30, Math.floor(gT.pow(30) * Math.random())), hc.cG(30, Math.floor(gT.pow(30) * Math.random())), hc.cG(30, Math.floor(gT.pow(30) * Math.random())), lh.d(hc.cJ), df.dm.dn(110, hp.hq.hr(hp.hq.hs(15))), dc.e5.rh()
	}
	this.rF = !0, this.rG = id, this.show = function() {
		ep.show(), this.resize(), 15 === id ? (dc.i.p3(id) ? rI : rJ)() : 16 === id ? dc.i.p3(id) ? dc.pL.rK(2) : rJ() : 17 === id ? dc.i.p3(id) ? dc.pL.rK(3) : rJ() : 18 === id ? (dc.i.close(0, 3253), dc.i.oy(0, id, 0), rJ()) : 21 === id ? dc.i
			.p3(id) ? dc.rL.rM(rC.ew, rC.ex, rC.ey) : rJ() : 22 === id ? dc.i.p3(id) ? dc.rL.rN(rC.ew, rC.rO, rC.rP) : rJ() : 23 === id ? dc.i.p3(id) ? dc.rL.rQ(rC.rR, rC.fr) : rJ() : 24 === id ? dc.i.p3(id) ? dc.rL.rS(rC.rR, rC.ex, rC.ey) :
		rJ() : 25 === id ? dc.i.p3(id) ? dc.e5.rT(rC) : rJ() : 28 === id ? dc.i.p3(id) ? dc.rL.rU(rC.ew, rC.rO, rC.rP) : rJ() : 29 === id ? dc.i.p3(id) ? dc.e5.rV(rC) : rJ() : 30 === id && (dc.i.p3(id) ? jF.rW() || rX() : rJ())
	}, this.rY = function() {
		15 === id ? rI() : 16 === id ? dc.pL.rK(2) : 17 === id ? dc.pL.rK(3) : 18 === id ? bT.c4(8, this.pE, new ev(16)) : 21 === id ? dc.rL.rM(rC.ew, rC.ex, rC.ey) : 22 === id ? dc.rL.rN(rC.ew, rC.rO, rC.rP) : 23 === id ? dc.rL.rQ(rC.rR, rC
			.fr) : 24 === id ? dc.rL.rS(rC.rR, rC.ex, rC.ey) : 25 === id ? dc.e5.rT(rC) : 28 === id ? dc.rL.rU(rC.ew, rC.rO, rC.rP) : 29 === id ? dc.e5.rV(rC) : 30 === id ? jF.rW() || rX() : 1e3 === id && (this.rG = id = 25, dc.e5.rT(rC))
	}, this.rZ = function(code, go, data) {
		!go && code !== id || (15 === code || 16 === code ? bT.c4(7, this.pE) : 17 === code ? (dc.i.close(0, 3252), df.i.ra(0), df.dg.data[117].jX && 0 < df.dg.data[117].jX.length ? (go = df.i.rb(0), df.dm.dn(105, go.bh), df.dm.dn(106, go
			.password), bT.c4(8, this.pE, new ev(16))) : (df.dm.dn(105, ""), bT.i.rH())) : 21 === code ? bT.c4(10, this.pE, new rc(data)) : 23 === code ? bT.c4(13, this.pE, new rd({
			data: data,
			rR: rC.rR
		})) : 25 === code ? (bT.i.re.bh = rC.bh, df.rf.eT(rC.bh), bT.c4(15, this.pE)) : 30 === code && (data ? bT.c4(1) : rX()))
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), rE.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(L(69), [new c6("⬅️ " + L(1), function() {
		rD ? bT.c4(29) : bT.i.rH()
	})]), rE = new pY(ep.dP, L(70))
}

function ri(el, data, jX) {
	var a3 = data.rj.length,
		rk = document.createElement("div"),
		rl = document.createElement("div"),
		rm = document.createElement("div"),
		rn = new Array(a3),
		dR = new Array(a3),
		ro = new Array(data.rp.length),
		rq = aZ.color.rr(70, 70, 0, .35);

	function jR() {
		this.style.backgroundColor = aZ.color.jR(rq, 160)
	}

	function rz() {
		this.style.backgroundColor = rq
	}

	function s4() {
		var b8;
		for (el.style.font = aZ.e2.iA(0, aZ.e2.s5(.026, .5, .03)), g = 1; g < ro.length; g++) aZ.e2.jV(ro[g], 4);
		if (aZ.e2.jV(rk, 2), a3) {
			for (var qj, s6 = rk.offsetWidth, s7 = rm.offsetWidth, g = 0; g < ro.length; g++) qj = .01 * data.ry[g] * s7, ro[g].style.width = (100 * qj / s6).toFixed(2) + "%";
			var aj = data.rj[0].length;
			for (g = 0; g < a3; g++)
				for (aZ.e2.jV(rn[g], 2), b8 = 1; b8 < aj; b8++) aZ.e2.jV(dR[g][b8], 4);
			rl.rs && (rl.scrollTop = rl.rs)
		}
	}
	this.resize = function() {
			s4(), s4()
		}, el.style.display = "flex", el.style.flexDirection = "column", rl.style.overflowX = "hidden", rl.style.overflowY = "auto", rl.addEventListener("scroll", function() {
			this.rs = this.scrollTop, jX && jX.rt && (bT.i.ru[jX.rt] = this.scrollTop)
		}),
		function() {
			var bZ, g, rj = data.rj,
				aj = a3 ? rj[0].length : 0;
			for (g = 0; g < a3; g++) {
				rn[g] = document.createElement("div"), rn[g].style.backgroundColor = function(g) {
					return g % 2 == 1 ? aZ.color.rr(130, 130, 130, .35) : e8.s3
				}(g), rn[g].style.width = "100%", rn[g].style.display = "flex", dR[g] = new Array(aj);
				for (var b8 = 0; b8 < aj; b8++) dR[g][b8] = bZ = document.createElement("div"), bZ.style.display = "flex", bZ.style.justifyContent = "center", bZ.style.wordBreak = "break-all", bZ.style.padding = "0.4em 0em", bZ.style.width = data.ry[
					b8] + "%", bZ.innerHTML = rj[g][b8].aq, 1 === rj[g][b8].fh && (bZ.name = "" + g, bZ.style.color = e8.eA, bZ.style.backgroundColor = rq, bZ.addEventListener("mouseover", jR), bZ.addEventListener("mouseout", rz), function(bZ,
					bh, s1) {
					2147483647 !== s1 && bZ.addEventListener("click", function() {
						hc.bj(30), hc.cG(30, bh), lh.d(hc.cJ), this.style.backgroundColor = rq, bT.c4(8, bT.bU, new ev(25, {
							s2: 0,
							bh: hp.hq.hr(hp.hq.hs(5)),
							s1: s1
						}))
					})
				}(bZ, rj[g][b8].bh, rj[g][b8].s1)), rn[g].appendChild(bZ)
			}
			for (rk.style.display = "flex", rk.style.backgroundColor = aZ.color.rr(0, 120, 0, .35), g = 0; g < ro.length; g++) ro[g] = bZ = document.createElement("div"), bZ.style.display = "flex", bZ.style.justifyContent = "center", bZ.style
				.wordBreak = "break-all", bZ.style.padding = "0.4em 0em", bZ.style.width = data.ry[g] + "%", bZ.innerHTML = data.rp[g], rk.appendChild(bZ)
		}();
	for (var g = 0; g < a3; g++) rm.appendChild(rn[g]);
	rl.appendChild(rm), el.appendChild(rk), el.appendChild(rl), jX && jX.rt && (rl.rs = bT.i.ru[jX.rt])
}

function s8() {
	this.s9 = function(player) {
		aZ.aa.sA(player) && b3.fd(80, L(74), 637, 0, e8.sB, e8.ff, -1, !1)
	}, this.sC = function(player) {
		aZ.aa.sA(player) && b3.fd(80, L(75), 637, 0, e8.sB, e8.ff, -1, !1)
	}
}

function m3() {
	"function" != typeof Math.log2 && (Math.log2 = function(aF) {
		return Math.log(aF) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aF) {
		return Math.log(aF) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aF) {
		return 0 < aF ? 1 : aF < 0 ? -1 : 0
	})
}

function sD() {
	this.sE = function() {
		var g;
		if (lh.size < hc.hd(23)) dc.i.pS(0, 3259);
		else {
			var ew = lh.hY(6),
				a3 = lh.hY(10),
				data = [];
			if (9 === ew || 10 === ew || 11 === ew || 13 === ew) {
				for (g = 0; g < a3; g++) data.push([lh.hY(30), hl.sF.sG(5), lh.hZ(32), 0, lh.hY(30)]);
				8 === bT.bU && bT.kU().rZ(21, !0, {
					ew: ew,
					data: data
				})
			} else if (12 === ew) {
				for (g = 0; g < a3; g++) data.push([lh.hY(20), lh.hY(30), lh.hY(30), lh.hZ(32), lh.hY(30), hl.sF.sG(5), hl.sF.sG(5)]);
				8 === bT.bU && bT.kU().rZ(21, !0, {
					ew: ew,
					data: data
				})
			} else {
				var sH = lh.hY(16);
				if (lh.ha(39 + 16 * sH + a3 * (0 === ew ? 111 : 1 === ew ? 101 : 2 === ew || 3 === ew ? 127 : 212))) {
					if (0 === ew)
						for (g = 0; g < a3; g++) data.push([lh.hY(30), hl.hm.hn(lh.hY(5)), lh.hY(16), lh.hY(30), lh.hY(30)]);
					else if (1 === ew)
						for (g = 0; g < a3; g++) data.push([lh.hY(16), hl.hm.hn(lh.hY(3)), lh.hY(16), hl.hm.hn(lh.hY(5)), lh.hY(31), lh.hY(30)]);
					else if (2 === ew || 3 === ew)
						for (g = 0; g < a3; g++) data.push([lh.hY(30), hl.hm.hn(lh.hY(5)), lh.hZ(32), lh.hY(30), lh.hY(30)]);
					else
						for (g = 0; g < a3; g++) data.push([lh.hY(20), lh.hY(30), lh.hY(30), lh.hY(30), lh.hY(30), lh.hZ(32), lh.hY(30), hl.hm.hn(lh.hY(5)), hl.hm.hn(lh.hY(5))]);
					8 === bT.bU && bT.kU().rZ(21, !0, {
						ew: ew,
						data: data
					})
				} else dc.i.pS(0, 3260)
			}
		}
	}, this.sI = function() {
		if (lh.size < hc.hd(29)) dc.i.pS(0, 3265);
		else {
			var sJ = lh.hY(4),
				sK = lh.hY(7),
				sL = lh.hY(11);
			if (lh.ha(29 + 16 * sK + 16 * sL + 11 * sJ)) {
				for (var data = [], g = 0; g < sJ; g++) {
					for (var fs = hl.hm.hn(lh.hY(3)), sM = lh.hY(8), sN = [], b8 = 0; b8 < sM; b8++) sN.push(lh.hY(16));
					data.push({
						name: "[" + fs + "]",
						sN: sN
					})
				}
				8 === bT.bU && bT.kU().rZ(23, !0, data)
			} else dc.i.pS(0, 3266)
		}
	}
}

function c6(sO, sP, sQ, sR, sS) {
	var self, sT = document.createElement("button");

	function jN() {
		var sb;
		ei.ej() || (sb = aZ.color.sc(sQ), !1 !== sR && 0 < sb[0] && sb[0] < 255 && sb[0] === sb[1] && sb[0] === sb[2]) || (128 < sb[0] && 128 < sb[1] && 128 < sb[2] ? sT.style.backgroundColor = aZ.color.jR(sQ, -50) : sT.style.backgroundColor = aZ
			.color.jR(sQ, sb[3] && sb[3] < 120 ? 150 : 50))
	}

	function sW() {
		if (sR) {
			var sb = aZ.color.sc(sQ);
			if (sb[0] === sb[1] && sb[0] === sb[2]) return
		}
		sP && ((sb = sP(this)) ? 2 === sb && jN() : se(this))
	}

	function sX() {
		this.style.backgroundColor = sQ
	}

	function jO() {
		se(this)
	}

	function se(bZ) {
		bZ.style.backgroundColor = sQ, bZ.blur()
	}
	this.button = sT, this.eE = sP, this.sU = sQ, this.sV = function(sY) {
		sY = 1.1 - Math.min(.01 * sO.length, .6) + .2 * sY;
		sT.style.fontSize = sY.toFixed(1) + "em"
	}, this.e7 = function(aH) {
		aH ? 1 === aH ? aH = e8.sa : 2 === aH && (sR = 1, aH = e8.sa) : (sR = 0, aH = e8.iM), this.sU = sQ = aH, sT.style.backgroundColor = aH
	}, self = this, sT.innerHTML = sO, sT.style.color = sS ? e8.eA : e8.e9, sT.style.userSelect = "none", sT.style.outline = "none", sT.style.overflowWrap = "break-word", self.e7(sQ), sT.style.border = "none", sT.style.font = "inherit", self.sV(
		0), sT.style.padding = "0em 0.3em", sT.onclick = sW, sT.addEventListener("mouseover", jN), sT.addEventListener("mouseout", jO), sT.addEventListener("focus", jN), sT.addEventListener("blur", sX)
}

function nb() {
	this.sf = function() {
		for (var aF, aG, g = sg - 1; 0 <= g; g--) aF = gT.gU(sh[g], 4) % a1.a2, aG = gT.gU(sh[g], 4 * a1.a2), fZ.f4[si] = Math.min(aF, fZ.f4[si]), fZ.f5[si] = Math.min(aG, fZ.f5[si]), fZ.f6[si] = Math.max(aF, fZ.f6[si]), fZ.f7[si] = Math.max(aG,
			fZ.f7[si])
	}, this.sj = function() {
		var bZ, fg, g, a3 = fZ.fB[si].length,
			sk = h3.sk;
		loop: for (g = a3 - 1; 0 <= g; g--) {
			for (bZ = 3; 0 <= bZ; bZ--)
				if (fg = fZ.fB[si][g] + sk[bZ], h3.sl(fg) || h3.h4(fg) && h3.h5(fg) !== si) {
					h3.hQ(fZ.fB[si][g], si);
					continue loop
				} fZ.fB[si][g] = fZ.fB[si][a3 - 1], fZ.fB[si].pop(), a3--
		}
	}, this.sm = function() {
		var player = si,
			fC = fZ.fC,
			fD = fZ.fD,
			fE = fZ.fE,
			a3 = fC[player].length,
			sk = h3.sk;
		loop: for (var g = a3 - 1; 0 <= g; g--) {
			for (var sn = !1, so = !1, bZ = 3; 0 <= bZ; bZ--) {
				var fg = fC[player][g] + sk[bZ];
				if (h3.sp(fg, player)) continue loop;
				sn = sn || h3.oF(fg), so = so || h3.sq(fg)
			}
			sn ? fD[player].push(fC[player][g]) : so ? fE[player].push(fC[player][g]) : h3.hT(fC[player][g], player), fC[player][g] = fC[player][a3 - 1], fC[player].pop(), a3--
		}
	}, this.sr = function() {
		fZ.f8[ss] -= sg
	}, this.st = function(border) {
		for (var a3 = border.length, g = a3 - 1; 0 <= g; g--) h3.hO(ss, border[g]) || (border[g] = border[a3 - 1], border.pop(), a3--)
	}, this.su = function(border) {
		for (var a3 = border.length, g = a3 - 1; 0 <= g; g--) !h3.hO(ss, border[g]) && h3.sv(border[g]) && (border[g] = border[a3 - 1], border.pop(), a3--)
	}, this.sw = function(border) {
		for (var bZ, fg, a3 = border.length, sk = h3.sk, g = a3 - 1; 0 <= g; g--)
			for (bZ = 3; 0 <= bZ; bZ--)
				if (fg = border[g] + sk[bZ], h3.sp(fg, ss)) {
					fZ.fC[ss].push(border[g]), border[g] = border[a3 - 1], border.pop(), a3--;
					break
				}
	}, this.sx = function() {
		for (var bZ, fg, sk = h3.sk, g = sg - 1; 0 <= g; g--)
			for (bZ = 3; 0 <= bZ; bZ--) fg = sh[g] + sk[bZ], h3.sy(ss, fg) && h3.sz(fg) && (fZ.fC[ss].push(fg), h3.hS(fg, ss))
	}, this.t0 = function() {
		var aF, aG;
		loop: for (; fZ.f5[ss] < fZ.f7[ss];) {
			for (aF = fZ.f6[ss]; aF >= fZ.f4[ss]; aF--)
				if (h3.hO(ss, 4 * (fZ.f5[ss] * a1.a2 + aF))) break loop;
			fZ.f5[ss]++
		}
		loop: for (; fZ.f5[ss] < fZ.f7[ss];) {
			for (aF = fZ.f6[ss]; aF >= fZ.f4[ss]; aF--)
				if (h3.hO(ss, 4 * (fZ.f7[ss] * a1.a2 + aF))) break loop;
			fZ.f7[ss]--
		}
		loop: for (; fZ.f4[ss] < fZ.f6[ss];) {
			for (aG = fZ.f7[ss]; aG >= fZ.f5[ss]; aG--)
				if (h3.hO(ss, 4 * (aG * a1.a2 + fZ.f4[ss]))) break loop;
			fZ.f4[ss]++
		}
		loop: for (; fZ.f4[ss] < fZ.f6[ss];) {
			for (aG = fZ.f7[ss]; aG >= fZ.f5[ss]; aG--)
				if (h3.hO(ss, 4 * (aG * a1.a2 + fZ.f6[ss]))) break loop;
			fZ.f6[ss]--
		}
	}, this.r5 = function(player, aL) {
		return 0 === e.t1[player] || e.t1[player] !== e.t1[aL]
	}, this.t2 = function(player) {
		for (var g, y, a3 = fZ.fC[player].length, sk = h3.sk, bZ = 3; 0 <= bZ; bZ--)
			for (y = sk[bZ], g = 0; g < a3; g++)
				if (h3.sl(fZ.fC[player][g] + y)) return !0;
		return !1
	}, this.t3 = function(player) {
		for (var g, y, a3 = fZ.fC[player].length, sk = h3.sk, bZ = 3; 0 <= bZ; bZ--)
			for (y = sk[bZ], g = 0; g < a3; g++)
				if (h3.hR(fZ.fC[player][g]) && h3.sl(fZ.fC[player][g] + y)) return !0;
		return !1
	}, this.t4 = function(t5, t6) {
		for (var g, fh, y, fg, qA = fZ.fC[t5].length, qB = fZ.fC[t6].length, sk = (qB < qA && (fh = t5, t5 = t6, t6 = fh, fh = qA, qA = qB, 0), h3.sk), bZ = 3; 0 <= bZ; bZ--)
			for (y = sk[bZ], g = 0; g < qA; g++)
				if (fg = fZ.fC[t5][g] + y, h3.h4(fg) && h3.h5(fg) === t6) return !0;
		return !1
	}, this.t7 = function(t5, t6) {
		for (var g, y, fg, qA = fZ.fC[t5].length, sk = h3.sk, bZ = 3; 0 <= bZ; bZ--)
			for (y = sk[bZ], g = 0; g < qA; g++)
				if (h3.hR(fZ.fC[t5][g]) && (fg = fZ.fC[t5][g] + y, h3.h4(fg)) && h3.h5(fg) === t6) return !0;
		return !1
	}
}

function t8() {
	this.cQ = cR.cQ, this.b7 = 0, this.cS = 0, this.cO = 0, this.t9 = null, this.tA = 7, this.tB = 0, this.d = function() {
		this.cO = 0, this.t9 = [], this.b7 = 0, this.cS = 0
	}, this.tC = function(cJ) {
		if (aO.cp) this.ct(cJ);
		else if (this.t9.push(cJ), 2 === aO.cd) {
			for (var g = 0; g < this.t9.length; g++) dF.dG.cT(this.t9[g]);
			this.t9 = []
		}
	}, this.ct = function(cJ) {
		2 !== aO.cd && (dF.dG.cT(cJ), d0.cT(), cs.ct(this.cO), this.cO === aO.cr ? (aO.cu.cT(), this.cO = 0, this.b7 = 0, this.cS = 0, this.cQ = cR.cQ) : (this.cO++, b5.cv(), b5.cw(!0), cj.ck()))
	}, this.cT = function() {
		o.cT(), aO.cp ? (cR.cZ = cs.ct(-1) || cR.cZ, cx()) : (0 !== this.b7 || cR.cQ >= this.cQ && (this.cQ += cR.cc * Math.floor(1 + (cR.cQ - this.cQ) / cR.cc), 2 === aO.cd ? ch() : this.tD(), this.b7++, 27 < cR.cQ - this.tB)) && this.tE(),
		cY(), cR.cZ && (cR.cZ = !1, ca()), this.tB = cR.cQ
	}, this.tE = function() {
		cR.cZ = !0, cy(), this.b7 = 0
	}, this.tD = function() {
		var tF, g;
		if (this.cS !== 7 * this.cO) co(), cj.ck();
		else {
			tF = !1;
			loop: for (; this.tG() && (tF = !0, co(), 2 !== aO.cd) && 0 < this.t9.length;)
				for (g = this.tA - 2; 0 <= g; g--)
					if (co(), 2 === aO.cd) break loop;
			tF ? cj.ck() : (ch(), cj.tH())
		}
	}, this.tG = function() {
		return 0 < this.t9.length && (this.cO++, dF.dG.cT(this.t9[0]), this.t9.shift(), !0)
	}
}

function tI() {
	this.i1 = !1;
	this.tN = [], this.tO = 100;
	var s, u, gap, tJ, tK, tM, tP = 0,
		tQ = new Array(9),
		tR = [],
		tS = [],
		tT = 0,
		tU = 0,
		tV = 0,
		tW = 0;

	function tm() {
		tQ.sort(function(b8, fi) {
			return fi.tj - b8.tj
		});
		for (var eJ = "" + tQ[0].ti, g = 1; g < 9; g++) eJ += "," + tQ[g].ti;
		for (g = 0; g < 9; g++) eJ += "," + tQ[g].tj;
		df.dg.dt(120, eJ)
	}
	this.d = function() {
		for (var tX = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], g = 0; g < tX.length; g++) {
			var color = 6 === tX[g] ? e8.tY : e8.tZ;
			this.tN.push(aZ.canvas.ta(lI.get(3), tX[g], color))
		}
		for (g = 0; g < lM.jU.tb; g++) tS.push(lM.jU.tc - lM.jU.tb + g);
		for (g = 0; g < lM.jU.td; g++) tS.push(lM.jU.te + g);
		var tf = lM.jU.tg(lj.tf);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = tf.slice(), g = 0; g < tf.length; g++) tS.push(tf[g]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					zk[q] = {
						pl: isNaN(qcode) ? 1015 + q : qcode,
						kZ: 0
					}
				} else {
					var g, bu = df.dg.data[120].value.split(",");
					if (18 !== bu.length)
						for (g = 0; g < 9; g++) tQ[g] = {
							ti: 1015 + g,
							tj: 0
						};
					else
						for (g = 0; g < 9; g++) {
							var aq = parseInt(bu[g]),
								aH = (aq = 0 <= aq && aq < lM.jU.tc ? aq : 0, parseInt(bu[g + 9]));
							aH = 0 <= aH && aH < 1e3 ? aH : 0, tQ[g] = {
								ti: aq,
								tj: aH
							}
						}
				}
		}()
	}, this.show = function(iW, iX, tn) {
		var g;
		if (tT = iW, tU = iX, tP = tn || 0, this.i1 = !0, tR = [], 0 === tP)
			for (g = 0; g < 9; g++) tR.push(tQ[g].ti);
		else {
			var fi = 49 * tP,
				tn = fi - 49;
			for (tn >= tS.length && (tP = 1, tn = 0, fi = 49), g = tn = (fi = Math.min(fi, tS.length)) - 49; g < fi; g++) tR.push(tS[g])
		}
		tR.push(1024);
		tn = tR.length, tJ = Math.floor((c9.cA.i7() ? .075 : .0468) * o.i8), gap = Math.floor(tJ / 3), (tV = 10 * (tK = tJ + gap)) > o.p && (tV = o.p, gap = (tK = tV / 10) - (tJ = 3 * tK / 4)), tM = gT.gU(tn, 10) + !!(tn % 10), (tW = tM * tK) > o
			.r && (tW = o.r, gap = (tK = tW / tM) - (tJ = 3 * tK / 4)), tn = .5 * gap;
		s = Math.min(Math.max(iW - .5 * tV + tn, tn), o.p - tV + tn), u = Math.min(Math.max(iX - .5 * tW + tn, tn), o.r - tW + tn)
	}, this.ia = function(iW, iX, player) {
		if (!this.i1) return !1;
		if (this.tq(iW, iX)) {
			iW = gT.gn(gT.gU(iW - s + .5 * gap, tK), 0, 9);
			if ((iW += 10 * gT.gn(gT.gU(iX - u + .5 * gap, tK), 0, 9)) >= tR.length) return l9.eB(), !0;
			iX = tR[iW];
			if (1024 === iX) return this.show(tT, tU, tP + 1), !0;
			! function(ti) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var g = 0; g < 9; g++) tQ[g].tj = Math.floor(.99 * tQ[g].tj);
					for (g = 0; g < 9; g++)
						if (ti === tQ[g].ti) return tQ[g].tj = Math.min(tQ[g].tj + 30, 999), tm();
					tQ.splice(5, 0, {
						ti: ti,
						tj: Math.max(tQ[4].tj, 30)
					}), tQ.pop(), tm()
				}
			}(iX), player === aO.b2 ? dF.tr.ts(iX) : dF.aa.tt(iX, player)
		}
		return l9.eB(), !0
	}, this.tq = function(iW, iX) {
		return !(iW < s - .5 * gap || iX < u - .5 * gap || s + tV - .5 * gap <= iW || u + tW - .5 * gap <= iX)
	}, this.k = function() {
		aB.fillStyle = e8.ff, aB.fillRect(s - .5 * gap, u - .5 * gap, tV, tW);
		for (var qh = .5 * i9.tu, a3 = (aB.lineWidth = i9.tu, aB.strokeStyle = aB.fillStyle = e8.e9, aB.strokeRect(s - .5 * gap + qh, u - .5 * gap + qh, tV - 2 * qh, tW - 2 * qh), aB.imageSmoothingEnabled = !0, tR.length), g = 0; g < a3; g++)
			this.tv(tR[g], aB, s + g % 10 * tK, u + gT.gU(g, 10) * tK, tJ);
		aB.imageSmoothingEnabled = !1
	}, this.tv = function(ti, aA, aF, aG, tJ) {
		var h1;
		ti >= 1024 - lM.jU.tb ? (h1 = tJ / this.tO, aA.setTransform(h1, 0, 0, h1, aF, aG), aA.drawImage(this.tN[ti - 1024 + lM.jU.tb], 0, 0), aA.setTransform(1, 0, 0, 1, 0, 0)) : (aZ.e2.textAlign(aA, 1), aZ.e2.textBaseline(aA, 1), aA.font = aZ.e2
			.iA(0, .89 * tJ), aA.fillText(lM.jU.tw(ti), aF + .5 * tJ, aG + (.35 - aZ.e2.tx + .56) * tJ))
	}
}

function ty() {
	var dK, dL, tz, dR;

	function k5() {
		u0(), 2 !== aO.data.spawningType || aZ.ky.u5(aO.data.spawningData) || (aO.data.spawningType = 0), 2 !== aO.data.spawningType && (aO.data.spawningData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		2 === aO.data.spawningType && aZ.ky.u2(tz.u3(), aO.data.spawningData, a1.u4 - 1)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(76), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ,
			jX = (dY.da(L(77)), [L(78), L(79), L(80)]),
			value = aO.data.spawningType;
		0 === aO.data.gameMode && (jX.splice(1, 1), 0 < value) && (value = 1);
		dY.q1(new uA({
			jX: jX,
			value: value
		}, function(b7) {
			u0(), aO.data.spawningType = b7, 0 === aO.data.gameMode && 1 === b7 && (aO.data.spawningType = 2), 2 !== aO.data.spawningType || aO.data.spawningData || (aO.data.spawningData = new Uint16Array(2 * aO.aR)), bT.c4(
				24)
		})), dR.push(dY)
	}(dR = []), function(dR) {
		var dY = new dZ;
		dY.da("My Spawn"), dY.dq(new uB({
			value: aO.data.selectableSpawn
		}, L(81), function(value) {
			aO.data.selectableSpawn = value
		})), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ,
			uC = (dY.da("Seed"), new dr({
				b7: -1,
				value: aO.data.spawningSeed
			}, 1, 0, function(br) {
				var value = Math.abs(Math.floor(br.target.value)) % 16384;
				br.target.value = aO.data.spawningSeed = value
			}));
		dY.dq(uC), dY.dq(new ds([new c6(L(78), function() {
			uC.br.value = aO.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), dR.push(dY)
	}(dR), function(dR) {
		var dY;
		2 === aO.data.spawningType && ((dY = new dZ).da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.spawningData, 2)), dY.dq(tz), dR.push(dY))
	}(dR), dR))
}

function uE() {
	var uF = new Uint8Array(64);
	this.d = function() {
		var g;
		for (uF[0] = 45, uF[37] = 95, g = 0; g < 10; g++) uF[g + 1] = 48 + g;
		for (g = 0; g < 26; g++) uF[g + 11] = 65 + g, uF[g + 38] = 97 + g
	}, this.hs = function(uG) {
		for (var ob = lh, uH = new Uint8Array(uG), g = 0; g < uG; g++) uH[g] = ob.hY(6);
		return uH
	}, this.hr = function(uH) {
		for (var a3 = uH.length, uI = uF, bu = [], g = 0; g < a3; g++) bu.push(String.fromCharCode(uI[uH[g]]));
		return bu.join("")
	}, this.iP = function(value, uJ) {
		for (var uI = uF, bu = [], g = 0; g < uJ; g++) bu.push(String.fromCharCode(uI[value >> 6 * (uJ - 1 - g) & 63]));
		return bu.join("")
	}
}

function uK() {
	function uO(bu, aq, qh) {
		for (var g = 0; g < 256; g++) bu[g] = (bu[g] + (aq >> (g + qh) % 30 & 1)) % 256
	}
	this.cT = function(uL, uM) {
		var bu = new Uint8Array(256);
		return function(bu, uL, uM) {
				var g, uQ = 3 + (4 + uL) % 32768,
					uR = 12 + uM % 32768,
					uS = 17 + ((uL & uM) + (uL | uM) + uL) % 32768;
				for (g = 0; g < 256; g++) uQ = 1 + uQ * uR % uS, bu[g] = uQ % 256
			}(bu, uL, uM), uO(bu, uL, 2), uO(bu, uM, 7),
			function(bu) {
				var g, aq, b7 = 0;
				for (g = 0; g < 3e4; g++) aq = bu[b7], bu[b7] = (aq + g + bu[(b7 + g) % 256]) % 256, b7 = (aq + g + b7 + (aq & b7)) % 256
			}(bu),
			function(bu) {
				var g, iL = 1,
					uT = 1;
				for (g = 0; g < 256; g += 2) iL = (1 + iL) * (bu[g] + 1) % 1073741824, uT = (1 + uT) * (bu[g + 1] + 1) % 1073741824;
				return [iL, uT]
			}(bu)
	}, this.uU = function(uV, uW, uX, result) {
		for (var dl = 1 << uV, g = 0; g < dl; g++)
			if (this.uY(g, uW, uX) === result) return g;
		return 0
	}, this.uY = function(uZ, uW, uX) {
		for (var ua = uW + uZ, ub = uX + uZ, aq = ua + ub & 2147483647, b8 = 1; b8 <= 16; b8++) aq = (aq = (aq ^ aq >> b8) >>> 1 + (3 & ua)) * (7 + (1023 & (ua | ub))) & 1073741823, ub >>= 1 + (1 & (ua >>= 1 + (1 & (aq += 65535 & ub))));
		return aq &= 1073741823
	}
}

function me() {
	var uc, ud, ue, uf, ug, uh, ui, uj, uk, ul, um, un, uo, up, uq, ur, us, ut, uv, uw, ux, uy, uz, v5, v6, uu = null,
		v1 = 0,
		v2 = !1,
		v3 = new Float32Array(4),
		v4 = 0,
		v7 = 112,
		v8 = 0;

	function s4() {
		uk = Math.floor(+o.i8), ul = Math.floor(.5 * uk), uu.width = o.p, uu.height = o.r, uv = uu.getContext("2d", {
			alpha: !0
		}), aZ.e2.textAlign(uv, 1), aZ.e2.textBaseline(uv, 1), uv.imageSmoothingEnabled = !0
	}

	function v9() {
		var g, vH;
		for (aB.font = aZ.e2.iA(1, 100 * um), vH = 80 / Math.floor(aB.measureText(aZ.fo.iP(aO.b1)).width), aB.font = aZ.e2.iA(1, 100), g = aO.aR - 1; 0 <= g; g--) uj[g] = 100 / Math.floor(aB.measureText(fZ.f1[g]).width), ui[g] = Math.min(vH, uj[g])
	}

	function vI(g) {
		return !v8 || (g = fZ.fA[g]) < 1e6 ? 1 : g < 1e7 ? v3[0] : v3[Math.min(Math.floor(Math.log10(g)) - 6, 3)]
	}

	function vG(aA) {
		v2 = !1, v1 = cR.cQ, ut = !1, us = 1, uq = ur = 0, aA.clearRect(0, 0, o.p, o.r);
		for (var va, vb, g, vc, fontSize, vd, s = t / m, u = v / m, w = (o.p + t) / m, x = (o.r + v) / m, ve = 0 !== fZ.f3[aO.b2] && !aZ.aa.b0(aO.b2), b8 = bB.bC - 1; 0 <= b8; b8--) g = bB.bD[b8], (fontSize = Math.floor(up * m * vI(g) * ui[g] * ug[
			g])) < uo || uk <= fontSize || ue[g] + ug[g] > s && ue[g] < w && uf[g] + uh[g] > u && uf[g] < x && (va = Math.floor(o.p * (ue[g] + ug[g] / 2 - s) / (w - s)), vb = Math.floor(o.r * (uf[g] + uh[g] / 2 - u) / (x - u) - .1 * fontSize),
			vc = h3.iG[g], aA.font = aZ.e2.iA(1 === fZ.f2[g] ? 4 : 1, fontSize), aA.fillStyle = vf(fontSize, vc % 2), v8 ? vg(aA, g, fontSize, va, vb, vc) : vh(g, fontSize, va, vb, aA), ut = !0, 0 < ux[g] ? function(va, vb, fontSize, g, aA) {
				0 === vj[g] ? lM.jU.vN(uw[g]) ? (function(va, vb, fontSize, player, ti, aA) {
						for (var vs = vb, w1 = (aA.globalAlpha = vt(fontSize), vI(player) * (v8 ? v4 : uj[player])), vr = va - .5 * fontSize / w1 - .9 * fontSize, fi = 0; fi < 2; fi++) aA.fillText(lM.jU.tw(ti), vr, vs), vr = va + .5 *
							fontSize / w1 + .9 * fontSize;
						aA.globalAlpha = 1
					}(va, vb, fontSize, g, uw[g], aA), vk(va, vb, fontSize, 0, 0, aA)) : lM.jU.vw(uw[g]) ? (vx(va, vb, fontSize, uw[g], 0, aA), vk(va, vb, fontSize, 0, 1, aA)) : (vx(va, vb, fontSize, uw[g], 1, aA), vk(va, vb, fontSize, 1, 0,
					aA)) : vx(va, vb, fontSize, uw[g], 0, aA)
			}(va, vb, fontSize, g, aA) : 0 === vj[g] && vk(va, vb, fontSize, 0, 0, aA), ve && (0 < ux[g + aO.aR] || 0 < ux[g + 2 * aO.aR] || 0 < ux[g + 3 * aO.aR] || 0 < ux[g + 4 * aO.aR]) && function(va, vb, fontSize, g, aA) {
				var aH, dl = -1;
				for (aH = 4; 1 <= aH; aH--) 0 < ux[g + aH * aO.aR] && dl++;
				for (aH = 1; aH < 5; aH++) 0 < ux[g + aH * aO.aR] && (! function(va, vb, fontSize, aH, g, vo, fh, aA) {
					var a9;
					if (1 === aH) {
						g = uw[g + aO.aR];
						if (!lM.jU.vy(g)) return function(va, vb, fontSize, ti, vo, aA) {
							aA.globalAlpha = vt(fontSize);
							va -= .534 * vo * fontSize, vo = vb + 1.59 * fontSize;
							aA.font = aZ.e2.iA(0, .785 * fontSize), aA.fillText(lM.jU.tw(ti), va, vo), aA.globalAlpha = 1
						}(va, vb, fontSize, g, vo, aA);
						a9 = lM.pj.tN[g - 1024 + lM.jU.tb]
					} else a9 = 2 === aH ? l9.w0()[4].canvas[+(fh < 255)] : (3 === aH ? l9.w0()[5] : l9.w0()[6]).canvas[0];
					g = lM.pj.tO, fh = .8 * fontSize / g, aH = va - .5 * fh * g - .534 * vo * fontSize, va = vb + 1.4 * fh * g;
					aA.setTransform(fh, 0, 0, fh, aH, va), aA.globalAlpha = vt(fontSize), aA.drawImage(a9, 0, 0), aA.globalAlpha = 1, aA.setTransform(1, 0, 0, 1, 0, 0)
				}(va, vb, fontSize, aH, g, dl, ux[g + aH * aO.aR], aA), dl -= 2)
			}(va, vb, fontSize, g, aA), (vd = um * fontSize) < uo || (aA.font = aZ.e2.iA(1, vd), vb += Math.floor(.78 * fontSize), v8 ? vh(g, vd, va, vb, aA) : vg(aA, g, vd, va, vb, vc)))
	}

	function vh(g, fontSize, aF, aG, aA) {
		var ___id = g;
		var showName = g < aO.aP || !__fx.settings.hideBotNames;
		if (showName) aA.fillText(fZ.f1[g], aF, aG), g < aO.aP && 2 !== fZ.f2[g] || (g = fontSize / uj[g], aA.fillRect(aF - .5 * g, aG + aZ.e2.tx * fontSize, g, Math.max(1, .1 * fontSize)));
		v8 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (aA.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			aA.fillText(__fx.utils.getDensity(___id), aF, showName ? aG + fontSize : aG)
		);
	}

	function vg(aA, g, fontSize, va, vb, vc) {
		var fK = fZ.fK[g],
			vn = aZ.fo.iP(fZ.fA[g] - fK);

		function drawDensity() {
			!v8 && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (aA.fillStyle = __fx.utils.textStyleBasedOnDensity(g)), aA.fillText(__fx.utils.getDensity(g), va, vb + fontSize))
		}
		fK ? (fK = aA.fillStyle, aA.fillStyle = vf(fontSize, 2 + vc % 2), aA.fillText(vn, va, vb), aA.fillStyle = fK) : vc >> 1 & 1 ? (aA.lineWidth = .05 * fontSize, aA.strokeStyle = vf(fontSize, vc % 2), aA.strokeText(vn, va, vb)) : (1 < vc && (aA
			.lineWidth = .12 * fontSize, aA.strokeStyle = vf(fontSize, vc), aA.strokeText(vn, va, vb)), aA.fillText(vn, va, vb)), drawDensity()
	}

	function vk(va, vb, fontSize, vo, vp, aA) {
		var vq = .95 * fontSize / uz,
			va = va - .5 * vq * uy + .8 * vo * fontSize,
			vo = vb - 1.76 * vq * uz - (.35 - aZ.e2.tx + .7) * vp * fontSize;
		aA.setTransform(vq, 0, 0, vq, va, vo), aA.globalAlpha = vt(fontSize), aA.drawImage(lI.get(4), 0, 0), aA.globalAlpha = 1, aA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function vx(va, vb, fontSize, ti, vo, aA) {
		var tJ, vr, vq;
		aA.globalAlpha = vt(fontSize), lM.jU.vy(ti) ? (tJ = lM.pj.tO, aA.setTransform(vq = 1.1 * fontSize / tJ, 0, 0, vq, vr = va - .5 * vq * tJ - .8 * vo * fontSize, vq = vb - 1.55 * vq * tJ), aA.drawImage(lM.pj.tN[ti - 1024 + lM.jU.tb], 0, 0), aA
			.setTransform(1, 0, 0, 1, 0, 0)) : (vr = va - .8 * vo * fontSize, vq = vb - (.35 - aZ.e2.tx + 1) * fontSize, aA.fillText(lM.jU.tw(ti), vr, vq)), aA.globalAlpha = 1
	}

	function vf(fontSize, vc) {
		return ul <= fontSize && fontSize < uk ? e.w2[vc] + vt(fontSize).toFixed(3) + ")" : e.w3[vc]
	}

	function vt(fontSize) {
		return ul <= fontSize && fontSize < uk ? 1 - (fontSize - ul) / (uk - ul) : 1
	}

	function wI(w1, p) {
		return 1 + Math.floor(un * w1 * p)
	}

	function wF(g) {
		for (var left = ue[g], b8 = ue[g] - fZ.f4[g] - 1; 0 <= b8; b8--)
			if (!wL(g, --left, uf[g], uh[g])) {
				left++;
				break
			} var right = ue[g];
		for (b8 = fZ.f6[g] - ue[g] - ug[g]; 0 <= b8; b8--)
			if (!wL(g, ++right + ug[g] - 1, uf[g], uh[g])) {
				right--;
				break
			} var aF = Math.floor((left + right) / 2),
			top = uf[g];
		for (b8 = uf[g] - fZ.f5[g] - 1; 0 <= b8; b8--)
			if (!wM(g, aF, --top, ug[g])) {
				top++;
				break
			} var bottom = uf[g];
		for (b8 = fZ.f7[g] - uf[g] - uh[g]; 0 <= b8; b8--)
			if (!wM(g, aF, ++bottom + uh[g] - 1, ug[g])) {
				bottom--;
				break
			} var aG = Math.floor((top + bottom) / 2);
		wC(g, aF, aG, ug[g], uh[g]) && (ue[g] = aF, uf[g] = aG)
	}

	function wC(player, aF, aG, p, r) {
		bZ = Math.floor(.2 * p);
		for (var bZ, aH = aF + p - 1; aF <= aH; aH--)
			if (!wL(player, aH, aG, r)) return;
		for (aH = aG + r - 1 - (bZ = (bZ = Math.floor(.25 * r)) < 1 ? 1 : bZ); aG + bZ <= aH; aH--)
			if (!wM(player, aF, aH, p)) return;
		return 1
	}

	function wL(player, aF, aG, r) {
		return h3.hO(player, 4 * (aG * a1.a2 + aF)) && h3.hO(player, 4 * ((aG + r - 1) * a1.a2 + aF))
	}

	function wM(player, aF, aG, p) {
		return h3.hO(player, 4 * (aG * a1.a2 + aF)) && h3.hO(player, 4 * (aG * a1.a2 + aF + p - 1))
	}
	this.d = function() {
		if (v8 = df.dg.data[7].value || 8 === aO.fP, ut = !1, up = .88, um = .5, un = 1.8, uo = 12 - 3 * df.dg.data[9].value, ud = uc = 0, ue = new Uint16Array(aO.aR), uf = new Uint16Array(aO.aR), ug = new Uint16Array(aO.aR), uh =
			new Uint16Array(aO.aR), ui = new Float32Array(aO.aR), uj = new Float32Array(aO.aR), uw = new Uint16Array(2 * aO.aR), ux = new Uint8Array(5 * aO.aR), v5 = new Uint8Array(aO.aR), v6 = new Uint8Array(aO.aR), uu = uu || document
			.createElement("canvas"), s4(), ur = uq = 0, us = 1, v8) {
			var g, vH;
			for (v9(), aB.font = aZ.e2.iA(1, 100), vH = 100 / Math.floor(aB.measureText("900 000").width), g = aO.aR - 1; 0 <= g; g--) ui[g] = Math.min(vH, 2 * uj[g]);
			v4 = vH, v3[0] = 100 / (vH * Math.floor(aB.measureText("5 000 000").width)), v3[1] = 100 / (vH * Math.floor(aB.measureText("50 000 000").width)), v3[2] = 100 / (vH * Math.floor(aB.measureText("500 000 000").width)), v3[3] = 100 / (
				vH * Math.floor(aB.measureText("1 000 000 000").width))
		} else v9();
		! function() {
			var g;
			for (g = aO.aR - 1; 0 <= g; g--) fZ.f8[g] < 12 ? (ue[g] = fZ.f4[g] + 1, uf[g] = fZ.f5[g] + 1, ug[g] = 1, uh[g] = 1) : (ue[g] = fZ.f4[g], uf[g] = fZ.f5[g] + 1, ug[g] = 4, uh[g] = 2);
			if (aO.cp)
				for (g = 0; g < aO.aP; g++) ug[g] = 0;
			uy = lI.get(4).width, uz = lI.get(4).height
		}()
	}, this.vC = function(fg, vD) {
		vD > 18 * fZ.f8[fg] ? (v6[fg] = 6, h3.iG[fg] = 2 + h3.iG[fg] % 2) : (v5[fg] = 4, (h3.iG[fg] < 2 || 3 < h3.iG[fg]) && (h3.iG[fg] = 6 + h3.iG[fg] % 2))
	}, this.vE = function(fg, vD) {
		vD > 6 * fZ.f8[fg] ? (v6[fg] = 6, h3.iG[fg] = 4 + h3.iG[fg] % 2) : (v5[fg] = 4, (h3.iG[fg] < 4 || 5 < h3.iG[fg]) && (h3.iG[fg] = 8 + h3.iG[fg] % 2))
	}, this.resize = function() {
		s4(), vG(uv)
	}, this.cv = function() {
		for (var g = 0; g < aO.aP; g++) fZ.f6[g] - fZ.f4[g] != 3 || fZ.f7[g] - fZ.f5[g] != 3 ? (ue[g] = fZ.f4[g] + (fZ.f6[g] !== fZ.f4[g] ? 1 : 0), uf[g] = fZ.f5[g], ug[g] = 1, uh[g] = 1) : (ue[g] = fZ.f4[g], uf[g] = fZ.f5[g] + 1, ug[g] = 4, uh[
			g] = 2)
	}, this.vK = function(player, b7, vL) {
		! function(player, b7, vL) {
			player += b7 * aO.aR;
			0 === b7 ? uw[player] === vL && 0 < ux[player] ? ux[player] = 0 : (uw[player] = vL, ux[player] = lM.jU.vN(vL) ? 255 : 64) : 1 === b7 ? (ux[player] = 64, uw[player] = vL) : ux[player] = vL
		}(player, b7, vL), 2 === aO.cd && this.cw(!0)
	}, this.k = function() {
		ut && (1 !== us ? (aB.imageSmoothingEnabled = !0, aB.setTransform(us, 0, 0, us, 0, 0), aB.drawImage(uu, -uq / us, -ur / us), aB.setTransform(1, 0, 0, 1, 0, 0), aB.imageSmoothingEnabled = !1) : aB.drawImage(uu, -uq, -ur))
	}, this.vO = function(vP, vQ) {
		uq += vP, ur += vQ
	}, this.io = function(vP, vQ) {
		b5.vO(vP, vQ)
	}, this.zoom = function(il, iW, iX) {
		us *= il, uq = (uq + iW) * il - iW, ur = (ur + iX) * il - iX
	}, this.vT = function(player) {
		var f4 = fZ.f4[player],
			f6 = fZ.f6[player],
			f5 = fZ.f5[player],
			f7 = fZ.f7[player],
			vU = gq.gr(0),
			vV = gq.gu(0),
			vW = gq.gr(o.p),
			vX = gq.gu(o.r);
		f4 < vW && vU < f6 && f5 < vX && vV < f7 && (ug[player] = 0, v2 = !0)
	}, this.cw = function(go) {
		return !(!v2 && !go && cR.cQ < v1 + (1 === us && 0 === uq && 0 === ur && (aO.vS() || aO.cp || 2 === aO.cd) ? 1e3 : v7) || (vG(uv), 0))
	}, this.vY = function(g) {
		return vI(g) * ui[g]
	}, this.vZ = function(player) {
		return ui[player]
	}, this.cT = function() {
		cR.gS() % 10 == 9 && (v2 = v2 || aO.w4() && !aO.vS()), !aO.vS() && 4 <= ++ud && function() {
			var g, b8, fi;
			for (ud = 0, fi = 4; 1 <= fi; fi--)
				for (b8 = bB.bC - 1; 0 <= b8; b8--) g = bB.bD[b8] + fi * aO.aR, 0 < ux[g] && ux[g] < 255 && ux[g]--;
			if (2 !== aO.cd)
				for (b8 = bB.bC - 1; 0 <= b8; b8--) g = bB.bD[b8], 0 < ux[g] && ux[g] < 255 && ux[g]--
		}();
		var g, b8, a3 = Math.floor(.1 * bB.bC);
		for (a3 = (a3 = a3 < 8 ? 8 : a3) > bB.bC ? bB.bC : a3, g = uc + a3 - 1; uc <= g; g--) b8 = g % bB.bC, ! function(g) {
			var w1 = vI(g) * ui[g];
			0 < ug[g] && wC(g, ue[g], uf[g], ug[g], uh[g]) ? ! function(g) {
				for (var aF, aG, p, r, h1 = !1, fi = 0; fi < 8; fi++) {
					if (p = ug[g] + 2, r = uh[g] + 2, p > fZ.f6[g] - fZ.f4[g] + 1 || r > fZ.f7[g] - fZ.f5[g] + 1) return h1;
					if (aF = ue[g] - 1, aG = uf[g] - 1, !wC(g, aF, aG, p, r)) return h1;
					ue[g] = aF, uf[g] = aG, ug[g] = p, uh[g] = r, h1 = !0
				}
				return h1
			}(g) && function(g, w1) {
				for (var aF, aG, p, r, h1 = !1, wJ = ug[g], ik = 1 + Math.floor(.02 * wJ), fi = 1; fi < 5; fi++) {
					if ((p = wJ + fi * ik) > fZ.f6[g] - fZ.f4[g] + 1) return h1;
					if ((r = wI(w1, p)) > fZ.f7[g] - fZ.f5[g] + 1) return h1;
					aF = fZ.f4[g] + Math.floor(Math.random() * (fZ.f6[g] - fZ.f4[g] + 2 - p)), aG = fZ.f5[g] + Math.floor(Math.random() * (fZ.f7[g] - fZ.f5[g] + 2 - r)), wC(g, aF, aG, p, r) && (ue[g] = aF, uf[g] = aG, ug[g] = p, uh[g] =
						r, h1 = !0)
				}
				return h1
			}(g, w1) && wF(g) : ! function(g, w1) {
				var r, aF = ue[g] + 1,
					aG = uf[g] + 1,
					p = ug[g] - 2;
				for (;;) {
					if (p < 1) {
						ug[g] = 0;
						break
					}
					if (r = wI(w1, p), wC(g, aF, aG, p, r)) return ue[g] = aF, uf[g] = aG, ug[g] = p, uh[g] = r, 1;
					aF++, aG++, p -= 2
				}
				return
			}(g, w1) ? function(g, w1) {
				var aF, aG, p, r, fi, eN, iu = fZ.f6[g] - fZ.f4[g] + 1,
					wK = Math.floor(.02 * iu);
				for (eN = -6 * (wK = wK < 1 ? 1 : wK), fi = iu; eN <= fi; fi -= wK)
					if (r = wI(w1, p = 0 < fi ? fi : 1), aF = fZ.f4[g] + Math.floor(Math.random() * (fZ.f6[g] - fZ.f4[g] + 2 - p)), aG = fZ.f5[g] + Math.floor(Math.random() * (fZ.f7[g] - fZ.f5[g] + 2 - r)), wC(g, aF, aG, p, r)) return ue[
						g] = aF, uf[g] = aG, ug[g] = p, uh[g] = r
			}(g, w1) : wF(g)
		}(bB.bD[b8]);
		uc = (uc += a3) % bB.bC
	}, this.w7 = function() {
		var g, fg, w8, w9;
		if (cR.gS() % 4 == 1)
			for (g = bB.bC - 1; 0 <= g; g--) fg = bB.bD[g], h3.iG[fg] < 2 || ((w8 = Math.max(v5[fg] - 1, 0)) === (w9 = Math.max(v6[fg] - 1, 0)) ? 0 === w8 && (h3.iG[fg] %= 2) : 0 === w9 && h3.iG[fg] < 6 && (h3.iG[fg] += 4), v5[fg] = w8, v6[fg] =
				w9)
	}, this.b6 = function(player) {
		var g = player + 2 * aO.aR,
			fh = ux[g];
		return 0 < fh && (b3.wA(50, player), ux[g] = 0, 255 === fh)
	}, this.wB = function(player) {
		return 255 === ux[player + 2 * aO.aR]
	}
}

function md() {
	this.wN = function() {
		var wR;
		return !(bB.bC < 3 || fZ.f8[wO[0]] >= aO.qZ >> 1) && (aO.qX ? 9 !== aO.fP && (wR = gN.wS(), !(2 * gN.wU(lt.qb()) >= wR)) : function() {
			if (8 === aO.fP) return !1;
			var wR = gN.wS();
			if (2 * fZ.fA[wO[0]] >= wR) return !1;
			return !0
		}())
	}
}

function wV() {
	var dK, wW = !0;

	function wc(eW, wd) {
		var pa = document.createElement("div"),
			we = document.createElement("span"),
			wf = document.createElement("span");
		we.textContent = cs.wg(wd.cQ) + ":", we.style.color = e8.wh, we.style.paddingRight = "0.4em", we.style.display = "table-cell", we.style.width = "6ch", we.style.textAlign = "end", pa.appendChild(we), wf.textContent = wd.eJ, pa.appendChild(wf),
			pa.style.display = "table", wd.ti && function(pa, ti) {
				{
					var hv;
					ti >= 1024 - lM.jU.tb ? ((hv = document.createElement("img")).src = lM.pj.tN[ti - 1024 + lM.jU.tb].toDataURL(), hv.style.width = "1.5em", hv.style.height = "1.5em", hv.style.verticalAlign = "middle", pa.appendChild(hv)) : ((hv =
						document.createElement("span")).textContent = lM.jU.tw(ti), hv.style.display = "inline-block", hv.style.fontSize = "1.5em", hv.style.lineHeight = "1em", hv.style.verticalAlign = "middle", pa.appendChild(hv))
				}
			}(pa, wd.ti), eW.appendChild(pa)
	}

	function wZ() {
		wW && (dK.dP.scrollTop = dK.dP.scrollHeight)
	}
	this.clear = function() {
		dK.dP.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var wa = lz.wb(), a3 = wa.length, eW = document.createDocumentFragment(), g = 0; g < a3; g++) wc(eW, wa[g]);
		dK.dP.appendChild(eW), wZ(), dK.show(), this.resize(), wW = !0, wZ()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dK.dP.style.padding = "0.4em " + aZ.e2.em(i9.pc)
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, this.fd = function(wd) {
		var eW = document.createDocumentFragment();
		wc(eW, wd), dK.dP.appendChild(eW), wZ()
	}, (dK = new dM(L(82), [new c6("⬅️ " + L(1), function() {
		bT.wX(1)
	})])).dP.style.overflowY = "auto", dK.dP.addEventListener("scroll", function() {
		wW = dK.dP.scrollTop >= dK.dP.scrollHeight - dK.dP.clientHeight - 2
	})
}

function wj() {
	this.cT = function(player) {
		return a4.qv.qw(player, function(player) {
			var a3 = av.wl.wm;
			if (0 === a3) return -1;
			for (var aj = Math.min(a3, av.performance.wn ? a3 : 10), dg = av.wl.dg, iu = gT.gU(lW.random() * a3, lW.value(100)), br = iu + aj, iW = lW.wo(fZ.f4[player], fZ.f6[player]), iX = lW.wo(fZ.f5[player], fZ.f7[player]), r4 = -1,
					pk = gq.wp(0, 0, a1.a2, a1.jg), g = iu; g < br; g++) {
				var y = g % a3,
					wq = gq.wr(iW, iX, dg[y]);
				wq < pk && (pk = wq, r4 = y)
			}
			return -1 !== r4 ? function(gz, iW, iX) {
				var gp = gq.wt(gz),
					gt = gq.wu(gz),
					vP = iW - gp,
					vQ = iX - gt;
				Math.abs(vP) >= Math.abs(vQ) ? (vQ = 0, vP = Math.sign(vP)) : (vP = 0, vQ = Math.sign(vQ));
				vP === vQ && (vP = 1);
				for (;;) {
					if (gp += vP, gt += vQ, !gq.wv(gp, gt)) break;
					if (gz = gq.h0(gp, gt), h3.oF(gq.h2(gz))) return gz
				}
				return -1
			}(dg[r4], iW, iX) : -1
		}(player))
	}
}

function nN() {
	this.ww = !1, this.wx = !1, this.wy = !1, this.wz = [0, 0, 0, 0], this.ck = function() {
		var s, u, w, x;
		this.wy = this.wy || this.wx, (this.wx || this.ww && this.wy) && (s = ls.x0[0], u = ls.x0[1], w = ls.x0[2], x = ls.x0[3], s = s < this.wz[0] ? this.wz[0] : s, u = u < this.wz[1] ? this.wz[1] : u, w = w > this.wz[2] ? this.wz[2] : w, x =
			x > this.wz[3] ? this.wz[3] : x, this.wx = !1, this.ww = !1, s === this.wz[0] && u === this.wz[1] && w === this.wz[2] && x === this.wz[3] ? this.tH() : s <= w && u <= x && x1.putImageData(x2, 0, 0, s, u, w - s + 1, x - u + 1))
	}, this.tH = function() {
		this.wy && this.wz[2] >= this.wz[0] && this.wz[3] >= this.wz[1] && x1.putImageData(x2, 0, 0, this.wz[0], this.wz[1], this.wz[2] - this.wz[0] + 1, this.wz[3] - this.wz[1] + 1), this.wy = !1
	}, this.h8 = function() {
		this.wz[2] >= this.wz[0] && this.wz[3] >= this.wz[1] && x1.putImageData(x2, 0, 0, this.wz[0], this.wz[1], this.wz[2] - this.wz[0] + 1, this.wz[3] - this.wz[1] + 1), this.wy = !1
	}, this.d = function() {
		var aF, aG;
		this.ww = !1, this.wx = !1, this.wy = !1, this.wz[0] = a1.a2, this.wz[1] = a1.jg, this.wz[2] = this.wz[3] = 0;
		loop: for (aF = 1; aF < a1.a2 - 1; aF++)
			for (aG = a1.jg - 2; 1 < aG; aG--)
				if (1 === x3[h3.hN(aF, aG) + 2]) {
					this.wz[0] = aF;
					break loop
				} loop: for (aG = 1; aG < a1.jg - 1; aG++)
			for (aF = a1.a2 - 2; 1 < aF; aF--)
				if (1 === x3[h3.hN(aF, aG) + 2]) {
					this.wz[1] = aG;
					break loop
				} loop: for (aF = a1.a2 - 2; 0 < aF; aF--)
			for (aG = a1.jg - 2; 1 < aG; aG--)
				if (1 === x3[h3.hN(aF, aG) + 2]) {
					this.wz[2] = aF;
					break loop
				} loop: for (aG = a1.jg - 2; 0 < aG; aG--)
			for (aF = a1.a2 - 2; 1 < aF; aF--)
				if (1 === x3[h3.hN(aF, aG) + 2]) {
					this.wz[3] = aG;
					break loop
				}
	}
}

function x4() {
	function xM(aF, a3, aG, xB, xJ, xW, player) {
		if (!(aG < 1 || xJ < aG))
			for (var g = 0; g <= a3; g++) {
				var h1 = gq.xX(aF, aG);
				if (a4.ec.xY(h1) && !aZ.ky.has(xB, h3.xE(h1)) && h3.xZ(h1, player)) return h1 >> 2;
				aF += xW
			}
		return -1
	}

	function xR(aG, a3, aF, xB, xI, xW, player) {
		if (!(aF < 1 || xI < aF)) {
			a3 = Math.max(a3, 0);
			for (var g = 0; g <= a3; g++) {
				var h1 = gq.xX(aF, aG);
				if (a4.ec.xY(h1) && !aZ.ky.has(xB, h3.xE(h1)) && h3.xZ(h1, player)) return h1 >> 2;
				aG += xW
			}
		}
		return -1
	}

	function xV(xL, xN, x6) {
		return -1 !== xN && (-1 === xL || gq.r6(xN, x6) < gq.r6(xL, x6)) ? xN : xL
	}
	this.x5 = function(player, x6) {
		if (a4.x7.x8(player))
			for (var x9 = gq.xA(), xB = [];;) {
				var xC = function(x6, x9, xB, player) {
					for (var gp = gq.wt(x6), gt = gq.wu(x6), xI = a1.a2 - 2, xJ = a1.jg - 2, xK = -1, bZ = 0; bZ < x9; bZ++) {
						var oQ = Math.max(gp - bZ, 1),
							oR = Math.max(gt - bZ, 1),
							oS = Math.min(gp + bZ, xI),
							oE = Math.min(gt + bZ, xJ),
							xL = xM(gp, oS - gp, gt - bZ, xB, xJ, 1, player),
							xN = xM(gp - 1, gp - oQ - 1, gt - bZ, xB, xJ, -1, player),
							oS = xM(gp, oS - gp, gt + bZ, xB, xJ, 1, player),
							oQ = xM(gp - 1, gp - oQ - 1, gt + bZ, xB, xJ, -1, player),
							xQ = xR(gt, oE - gt - 1, gp - bZ, xB, xI, 1, player),
							xS = xR(gt - 1, gt - oR - 2, gp - bZ, xB, xI, -1, player),
							oE = xR(gt, oE - gt - 1, gp + bZ, xB, xI, 1, player),
							oR = xR(gt - 1, gt - oR - 2, gp + bZ, xB, xI, -1, player);
						if (xK = xV(xK, xL, x6), xK = xV(xK, xN, x6), xK = xV(xK, oS, x6), xK = xV(xK, oQ, x6), xK = xV(xK, xQ, x6), xK = xV(xK, xS, x6), xK = xV(xK, oE, x6), 0 <= (xK = xV(xK, oR, x6)) && bZ * bZ >= gq.r6(xK, x6)) return xK
					}
					return -1
				}(x6, x9, xB, player);
				if (-1 === xC) break;
				var id = h3.xE(gq.h2(xC));
				if (a4.ec.xF(player, id)) return !! function(player, xC, x6) {
					for (var xa = gq.xb(xC, x6), g = 0; g < 4; g++) {
						var gz = gq.xc(xC, xa);
						if (h3.sp(gq.h2(gz), player)) return gD.xH[6] = xa, 1;
						xa = (xa + 1) % 4
					}
					return
				}(player, xC, x6) && (gD.xH[7] = xC, !0);
				xB.push(id)
			}
		return !1
	}
}

function nP() {
	this.xd = new xe, this.d = function() {
		this.xd.resize()
	}
}

function ms() {
	var r, canvas, i0, xf, xg, xh, xi, i3, xj, xk, xl, xn, xm = !1,
		a9 = (this.i1 = !1, this.p = 0, new Array(2)),
		xo = 0;

	function eT() {
		var p = lV.p,
			aj = (i3 = !1, xr(i0, p, r), Math.floor(p / 2));
		1 === xf ? (i0.fillStyle = e8.xs, i0.fillRect(aj, 0, aj, r)) : -1 === xf && (i0.fillStyle = e8.xt, i0.fillRect(0, 0, aj, r)), xu(i0, p, r, 2);
		var aj = (aj = Math.floor(.25 * r)) < 2 ? 2 : aj,
			xw = (i0.fillStyle = e8.xv, Math.floor((r - 4) * xg[1] / xh[1]));
		0 < xw && i0.fillRect(2, r - 2 - xw, aj, xw), 0 < (xw = Math.floor((r - 4) * xg[0] / xh[0])) && i0.fillRect(p - 2 - aj, r - 2 - xw, aj, xw);
		aj = (aj = Math.floor(r / 8)) < 2 ? 2 : aj, xy(i0, Math.floor(.4 * r), 0, r, aj, .5, !1), xy(i0, Math.floor(p - 1.4 * r), 0, r, aj, .5, !0), xw = 1.1 * r / a9[0].width;
		i0.imageSmoothingEnabled = !0, i0.setTransform(xw, 0, 0, xw, (p - xw * a9[0].width) / 2, -.05 * r), i0.drawImage(a9[+xm], 0, 0), i0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function y6() {
		xn = -1, xm = lK.wN(), b3.y7(257), b3.y8(xm), lV.i1 = !0, i3 = !0, xj = 360;
		for (var aq, fh = 0, g = bB.bC - 1; 0 <= g; g--) aZ.aa.b0(bB.bD[g]) || (fh += fZ.f8[bB.bD[g]]);
		xm ? xh[0] = Math.max(gT.gU(3 * fh, 4), 1) : aO.qX ? (aq = 9 === aO.fP ? 8 === e.qc[lt.qb()] ? 80 : (aq = gT.gU(100 * lt.qY(), aO.qZ), gT.gU(gT.gn(1550 - 11 * aq, 400, 1e3), 10)) : (aq = gT.gU(100 * lt.qY(), aO.qZ), gT.gU(gT.gn(1600 - 12 *
			aq, 400, 1e3), 10)), aq = gT.gU(aq * fh, 100), xh[0] = Math.max(aq, 1)) : 8 === aO.fP ? xh[0] = Math.max(gT.gU(3 * fh, 4), 1) : xh[0] = Math.max(gT.gU(3 * fh, 5), 1), xh[1] = Math.max(fh - xh[0], 1)
	}

	function iU() {
		xl = cR.gS(), i3 = !0, xj = xf = 0, xi = [], lV.i1 = !1, b3.wA(247), xg[0] = xg[1] = 0, b3.y7(673)
	}

	function xz() {
		return iJ.iR(b3.yK()) ? __fx.settings.keybindButtons ? iJ.aG - 2 * (r + i9.gap) : iJ.aG - r - i9.gap : cU.iR(b3.yL()) ? cU.xz() - r - i9.gap : o.r - r - iD.iE() * i9.gap
	}
	this.g9 = function() {
		for (var g = 0; g < 2; g++) a9[g] = aZ.canvas.ta(lI.get(3), 8 - g, e8.xp), a9[g] = aZ.canvas.xq(a9[g])
	}, this.d = function() {
		xl = -1e4, xk = xo = 0, xn = -1, this.i1 = !1, i3 = xm = !1, xg = [xf = xj = 0, 0], xh = [1, 1], xi = [], this.resize()
	}, this.resize = function() {
		r = iJ.r, this.p = 4 * r, (canvas = document.createElement("canvas")).width = this.p, canvas.height = r, i0 = canvas.getContext("2d", {
			alpha: !0
		}), eT()
	}, this.cw = function() {
		i3 && eT()
	}, this.ia = function(aF, aG) {
		return !!this.i1 && !(aF < o.p - this.p - i9.gap || aG < xz() || (aO.i6 || this.y0(aO.b2) && (ce.cf && ce.y1(), dF.tr.y2(aF > o.p - i9.gap - this.p / 2 ? 1 : 0)), 0))
	}, this.cT = function() {
		0 < xk ? 0 === --xk && iU() : this.i1 ? 180 == --xj && 3 * xg[0] < xh[0] ? iU() : xg[0] >= xh[0] ? xm ? fM.od.yD() : fM.od.yE() : xg[1] >= xh[1] ? xk = 4 : xj <= 0 && iU() : ! function() {
			var yA = cR.gS();
			if (yA % 40 == 14) {
				if (xo) return !(yA < xo) && !(yA < xl + 535) && (xo = yA + 1071, aZ.aa.yB()) ? (y6(), 1) : 0;
				(1 === bB.bC || (aO.qX ? lt.qY() : fZ.f8[wO[0]]) >= gT.gU(96 * aO.qZ, 100)) && (xo = yA + 535)
			}
			return
		}() && 0 <= xn && (b3.fd(250, L(83, [fZ.f1[xn]]), 673, xn, e8.e9, e8.ff, -1, !0), y6())
	}, this.yF = function() {
		this.i1 && xg[0] < xh[0] && iU()
	}, this.yG = function(player, yH) {
		var yI = L(yH ? 84 : 85, [fZ.f1[player]]),
			yI = (b3.fd(450, yI, 257, player, yH ? e8.fe : e8.yJ, e8.ff, -1, !0), xi.push(player), i3 = !0, aO.cq ? Math.max(xh[0], xh[1]) : fZ.f8[player]),
			yI = Math.max(yI, 1);
		yH ? xg[0] += yI : xg[1] += yI, player === aO.b2 && (xf = yH ? 1 : -1)
	}, this.k = function() {
		var aG;
		this.i1 && (aG = xz(), aB.drawImage(canvas, o.p - this.p - i9.gap, aG))
	}, this.yM = function(player) {
		if (0 !== xj) return !1;
		if (!aZ.aa.yN(1)) return !1;
		if (!aZ.aa.fQ(player)) return !1;
		if (10 <= vj[player] && !aZ.aa.yO(player, 9)) return !1;
		if (!aO.cq) {
			player = cR.gS();
			if (player < xl + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.y0 = function(fg) {
		if (!aZ.aa.yN(1)) return !1;
		if (!aZ.aa.fQ(fg)) return !1;
		if (!this.i1) return !1;
		for (var g = xi.length - 1; 0 <= g; g--)
			if (xi[g] === fg) return !1;
		return !0
	}, this.yQ = function(player) {
		xn = player
	}
}

function yR() {
	var yS = {
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
		yT = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.yU = function(de) {
		return de.replace(yT, function(match) {
			return yS[match] || match
		})
	}, this.iP = function(aq) {
		var g, yV, yW, yX, yY;
		if (aq < 0) return "-" + this.iP(Math.abs(aq));
		if (aq < 1e3) return aq.toString();
		for (yV = Math.floor(Math.log(aq + .5) / Math.log(10)) + 1, yW = Math.floor((yV - 1) / 3), yY = (yX = aq.toString()).substring(yV - 3, yV), g = 1; g < yW; g++) yY = yX.substring(yV - 3 * (g + 1), yV - 3 * g) + " " + yY;
		return yX.substring(0, yV - 3 * yW) + " " + yY
	}, this.iQ = function(fg, yV) {
		return fg.toFixed(yV) + "%"
	}, this.yZ = function(aq, ya) {
		return aq.toFixed(gT.gn(Math.floor((void 0 === ya ? 3 : ya) - Math.log10(Math.max(aq, 1))), 0, 8))
	}, this.yb = function(aq, ik, yV) {
		return (aq * ik).toFixed(yV)
	}, this.ft = function(username) {
		var yd, yc = username.indexOf("[");
		return !(yc < 0) && 1 < (yd = username.indexOf("]")) - yc && yd - yc <= 8 ? username.substring(yc + 1, yd).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.ft;
	this.ye = function(eJ) {
		for (var b8 = Math.floor(.5 * eJ.length + .5), eN = Math.floor(.5 * (b8 - 1)), g = 0; g < eN; g++)
			for (var fi = -1; fi < 2; fi += 2) {
				var aH = b8 + fi * g;
				if (" " === eJ[aH]) return [this.fp(eJ.substring(0, aH)), this.yf(eJ.substring(aH))]
			}
		return [eJ.substring(0, b8), eJ.substring(b8)]
	}, this.yf = function(eJ) {
		for (var a3 = eJ.length, g = 0; g < a3; g++)
			if (" " !== eJ[g]) return eJ.substring(g);
		return eJ
	}, this.fp = function(eJ) {
		for (var g = eJ.length - 1; 0 <= g; g--)
			if (" " !== eJ[g]) return eJ.substring(0, g + 1);
		return eJ
	}, this.yg = function(eJ, gL) {
		return eJ.split("(")[0] + "(🧈 " + gL.toFixed(2) + ")"
	}, this.startsWith = function(eJ, yh) {
		return eJ.substring(0, yh.length) === yh
	}, this.kR = function(eJ, yh) {
		var a3 = eJ.length;
		return eJ.substring(a3 - yh.length, a3) === yh
	}, this.uD = function(bu, yi, yj) {
		var eJ = "",
			a3 = bu.length - 1;
		yj = yj || "";
		for (var g = 0; g < a3; g++) eJ += yj + bu[g] + yj + ",", (g + 1) % yi == 0 && (eJ += "\n");
		return eJ += yj + bu[a3] + yj
	}, this.ht = function(eJ, w8, w9) {
		return eJ.replace(new RegExp(w8, "g"), w9)
	}
}

function yk() {
	var yl = 0,
		ym = 0,
		yn = 300,
		yo = 300,
		yp = 0;
	this.wm = 0, this.dg = new Uint32Array(512), this.d = function() {
		ym = yl = 0, this.wm = 0, yp = 0
	}, this.cT = function() {
		if (function() {
				var a3 = av.wl.wm;
				if (0 === a3) return 1;
				var dg = av.wl.dg;
				if (cR.gS() % 35 == 6) {
					for (var g = a3 - 1; 0 <= g; g--) h3.sl(dg[g] << 2) || (a3--, dg[g] = dg[a3]);
					av.wl.wm = a3
				}
				return a3 < dg.length
			}())
			if (yn <= yl) {
				var yt = av.wl.wm;
				if (yt) {
					if (cR.gS() % 350 != 1) return;
					if (yp !== yt) return void(yp = yt);
					if (!aZ.aa.b0(wO[0])) return
				} else if (cR.gS() % 12 != 8) return;
				aZ.aa.yu() || av.wl.d()
			} else {
				var g, p = a1.a2,
					yv = p - 2,
					yt = yv * (a1.jg - 2),
					yw = yn,
					dg = av.wl.dg,
					aj = av.wl.wm,
					yx = dg.length,
					y = Math.min(ym + yw * ((1 + 19 * av.performance.wn) * yo), yt);
				for (g = ym; g < y; g += yw) {
					var h1 = 4 * (g % yv + (gT.gU(g, yv) + 1) * p + 1);
					if (h3.sl(h1) && (dg[aj] = h1 >> 2, ++aj === yx)) {
						g += yw;
						break
					}
				}(ym = g) >= yt && (ym = ++yl), av.wl.wm = aj
			}
	}
}

function yy() {
	this.yz = function() {
		df.i.z0(), df.dm.dn(105, hp.hq.hr(hp.hq.hs(5))), df.dm.dn(106, hp.hq.hr(hp.hq.hs(15))), df.dm.dn(109, 0), df.dm.dn(108, df.dg.data[109].value), df.dm.dn(111, df.dg.data[109].value + 1), df.dm.dn(107, 0), df.dm.dn(110, "")
	}, this.z1 = function() {
		var data;
		lh.size < hc.hd(29) ? dc.i.pS(0, 3254) : ((data = {
			s1: lh.hY(30),
			z2: lh.hY(16),
			z3: lh.hY(30),
			z4: lh.hY(30),
			z5: lh.hY(30),
			z6: lh.hZ(32),
			username: hl.sF.sG(5),
			z7: hl.sF.sG(3),
			z8: hl.sF.sG(3),
			z9: lh.hZ(32),
			zA: lh.hZ(32),
			zB: lh.hY(30),
			zC: lh.hZ(32),
			zD: lh.hZ(32),
			zE: lh.hZ(32),
			zF: lh.hZ(32),
			zG: lh.hZ(32),
			zH: lh.hZ(30),
			zI: lh.hZ(32),
			zJ: hl.sF.sG(3),
			zK: lh.hZ(2),
			zL: lh.hZ(10),
			zM: hl.sF.sG(8),
			zN: lh.hZ(5),
			zO: lh.hY(30),
			zP: lh.hY(30),
			fS: lh.hZ(32),
			zQ: lh.hY(3),
			zR: lh.hY(8),
			zS: lh.hY(30),
			zT: lh.hZ(32),
			zU: lh.hY(1),
			zV: hl.sF.sG(6),
			zW: lh.hY(1),
			zX: lh.hY(1)
		}).zW && (data.zY = lh.hZ(32), data.zZ = lh.hY(30), data.za = lh.hY(30), data.zb = lh.hY(1)), 8 === bT.bU && (25 === bT.kU().rG ? (data.zc = !0, bT.i.re = data, bT.kU().rZ(25, !1)) : (data.zc = !1, df.dm.dn(160, +(data.zW && data
			.zb)), data.bh = df.dg.data[105].value, bT.i.zd = data, df.dm.ze(data), bT.kU().rZ(16, !0))))
	}
}

function ne() {
	this.zf = [L(86), L(87), L(88), L(89), L(90), L(91), L(92), L(93), L(94), L(95), L(96), L(97), L(98), L(99), L(100), L(101)];
	var zg = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.zh = new Array(zg.length), this.d = function() {
		var bu = df.dg.data[155].value.split(";"),
			aj = bu.length;
		if (function() {
				for (var a3 = zg.length, g = 0; g < a3; g++) lp.zh[g] = zg[g]
			}(), !(aj > zg.length))
			for (var g = 0; g < aj; g++) bu[g].length && (this.zh[g] = bu[g])
	}, this.zj = function(b7, code) {
		for (var zh = this.zh, zk = zg, eJ = (zh[b7] = code, ""), a3 = zh.length, zl = [], g = 0; g < a3; g++) zl.push(zh[g] === zk[g] ? "" : zh[g]);
		a3--;
		for (g = 0; g < a3; g++) eJ += zl[g] + ";";
		df.dm.dn(155, eJ += zl[a3])
	}, this.zm = function() {
		df.dm.dn(155, ""), this.d()
	}, this.aH = function(code, b7) {
		return code === this.zh[b7] || code === this.zh[b7 + 1]
	}
}

function nL() {
	var gap, zn = !1,
		gh = 0,
		p = 0,
		s6 = 0,
		canvas = null,
		i0 = null,
		zo = null;

	function zv() {
		for (var g = aO.zp; 0 <= g; g--) zo[g] = 0;
		for (g = bB.bC - 1; 0 <= g; g--) zo[e.t1[bB.bD[g]]] += fZ.f8[bB.bD[g]];
		zn = !0
	}

	function zt() {
		for (var a03, a01 = 0, a3 = 0, aH = Math.floor(p / 2), hI = Math.floor(s6 / 2), a02 = 1.5 * Math.PI, g = aO.zp; 0 <= g; g--) a3 += zo[g], 0 === zo[g] && a01++;
		if (zn = !1, i0.clearRect(0, 0, p, p), 0 < a3)
			if (a01 === aO.zp) {
				for (g = aO.zp; 0 <= g; g--)
					if (0 < zo[g]) {
						! function(g, aH, hI) {
							i0.fillStyle = e.a0A[e.qc[g]], i0.beginPath(), i0.arc(aH, aH, hI, 0, 2 * Math.PI), i0.fill()
						}(g, aH, hI);
						break
					}!
				function(aH) {
					var fontSize = aH / 3;
					i0.font = aZ.e2.iA(1, fontSize), i0.fillStyle = e8.e9, i0.fillText("100%", aH, aH + .1 * fontSize)
				}(aH)
			} else {
				for (g = 0; g <= aO.zp; g++) 0 < zo[g] && (! function(g, aH, hI, a02, a03) {
					i0.fillStyle = e.a0A[e.qc[g]], i0.beginPath(), i0.arc(aH, aH, hI, a02, a03), i0.lineTo(aH, aH), i0.fill()
				}(g, aH, hI, a02, a03 = a02 + 2 * Math.PI * zo[g] / a3), function(aH, hI, a02, a03) {
					var aq = (a03 - a02) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * hI * Math.min(aq, .37);
					fontSize < 8 || (a02 = (a02 + a03) / 2, a03 = (__fx.settings.detailedTeamPercentage ? (100 * aq).toFixed(2) : Math.floor(100 * aq + .5)) + "%", hI *= .525 - Math.max(.6 * (aq - .7), 0), i0.font = aZ.e2.iA(1, fontSize), i0
						.fillStyle = e8.e9, i0.fillText(a03, aH + Math.cos(a02) * hI, aH + Math.cos(a02 + 1.5 * Math.PI) * hI))
				}(aH, hI, a02, a03), 0 !== g && a08(aH, hI, a02), a02 = a03);
				a08(aH, hI, 1.5 * Math.PI)
			}!
		function(aH, hI) {
			i0.beginPath(), i0.arc(aH, aH, hI, 0, 2 * Math.PI), i0.stroke()
		}(aH, hI)
	}

	function a08(aH, hI, a0B) {
		i0.beginPath(), i0.moveTo(aH, aH), i0.lineTo(aH + Math.cos(a0B) * hI, aH + Math.cos(a0B + 1.5 * Math.PI) * hI), i0.stroke()
	}
	this.d = function() {
		if (aO.qX) {
			gh = 0, zo = new Uint32Array(aO.zp + 1);
			for (var g = aO.zp; 0 <= g; g--) zo[g] = 0;
			for (g = bB.bC - 1; 0 <= g; g--) zo[e.t1[bB.bD[g]]] += 1;
			this.resize()
		} else zo = i0 = canvas = null
	}, this.zr = function() {
		return p
	}, this.resize = function() {
		aO.qX && (p = Math.floor(.95 * (c9.cA.i7() && !aO.zs ? .18 * o.min : .13 * o.i8)), p = (p *= 1 + (.5 + .2 * c9.cA.i7()) * aO.zs) + p % 2, gap = Math.max(1, .015 * p), s6 = Math.floor(p - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = p, canvas.height = p, (i0 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, i0.strokeStyle = e8.e9, aZ.e2.textAlign(i0, 1), aZ.e2.textBaseline(i0, 1), zt())
	}, this.qY = function(zu) {
		zu && zv();
		var fh, zu = this.qb();
		return e.qc[zu] || (zu = function() {
			for (var qa = -1, g = aO.zp; 1 <= g; g--)(-1 === qa || zo[g] > zo[qa]) && (qa = g);
			return qa
		}(), fh = fZ.f8[wO[0]], -1 !== zu && zo[zu] > fh) ? zo[zu] : fh
	}, this.zx = function() {
		return gh = 31, this.cT(), this.qb()
	}, this.qb = function() {
		for (var qa = 0, g = aO.zp; 0 < g; g--) zo[g] > zo[qa] && (qa = g);
		return qa
	}, this.zy = function(zz) {
		for (var dl = 0, bD = bB.bD, t1 = e.t1, a3 = bB.bC, qf = gD.qf, g = 0; g < a3; g++) {
			var fg = bD[g];
			t1[fg] === zz && (qf[dl++] = fg)
		}
		gD.qe[0] = dl
	}, this.qd = function(zz) {
		for (var dl = 0, bD = bB.bD, t1 = e.t1, a3 = bB.bC, qf = gD.qf, g = 0; g < a3; g++) {
			var fg = bD[g];
			t1[fg] !== zz && (qf[dl++] = fg)
		}
		gD.qe[0] = dl
	}, this.a00 = function() {
		for (var dl = 0, g = aO.zp; 0 <= g; g--) dl += 0 < zo[g];
		return dl
	}, this.cT = function() {
		aO.qX && 32 <= ++gh && (gh = 0, zv())
	}, this.eT = function() {
		aO.qX && zn && zt()
	}, this.k = function() {
		aO.qX && (aO.zs ? aB.drawImage(canvas, i9.gap, i9.gap) : aB.drawImage(canvas, i9.gap, a0C + 2 * i9.gap))
	}
}

function a0D() {
	var a0E = new Uint8Array(78);
	this.d = function() {
		var g;
		for (a0E[50] = 37, g = 0; g < 10; g++) a0E[g + 3] = g + 1;
		for (g = 0; g < 26; g++) a0E[g + 20] = g + 11, a0E[g + 52] = g + 38
	}, this.a0F = function(eJ) {
		return eJ.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0G = function(eJ, size) {
		if ((eJ = this.a0F(eJ)).length > size) return eJ.substring(0, size);
		for (; eJ.length < size;) eJ = "-" + eJ;
		return eJ
	}, this.a0H = function(eJ) {
		for (var fx = a0E, a3 = eJ.length, bu = new Uint8Array(a3), g = 0; g < a3; g++) bu[g] = fx[eJ.charCodeAt(g) - 45];
		return bu
	}, this.a0I = function(uH) {
		hc.bj(6 * uH.length), this.a0J(uH), lh.d(hc.cJ)
	}, this.a0J = function(uH) {
		for (var a3 = uH.length, p = hc, g = 0; g < a3; g++) p.cG(6, uH[g])
	}, this.a0K = function(eJ) {
		this.a0J(this.a0H(eJ))
	}, this.a0L = function(eJ, size) {
		this.a0J(this.a0H(this.a0G(eJ, size)))
	}, this.a0M = function(eJ, size) {
		for (var bu = this.a0H(this.a0G(eJ, size)), aq = 0, ik = 1, g = bu.length - 1; 0 <= g; g--) aq += ik * bu[g], ik *= 64;
		return aq
	}
}

function mb() {
	this.a0N = new a0O
}

function dM(title, et, a0P) {
	var a0Q = document.createElement("div"),
		a0R = document.createElement("div"),
		rm = document.createElement("div"),
		a0S = document.createElement("div"),
		a0T = document.createElement("div");
	this.dP = rm, this.eD = et, this.show = function() {
			!1 !== a0P ? document.body.appendChild(a0Q) : (document.body.appendChild(a0R), document.body.appendChild(a0S))
		}, this.eB = function() {
			!1 !== a0P ? bT.removeChild(document.body, a0Q) : (bT.removeChild(document.body, a0R), bT.removeChild(document.body, a0S))
		}, this.a0Y = function() {
			var a0Z = aZ.e2.en(.1),
				a0a = aZ.e2.en(.08 + .04 * (o.a0b < 1), .3);
			return {
				a0Z: a0Z,
				a0a: a0a,
				a0c: o.r / o.bv - a0Z - a0a
			}
		}, this.resize = function(a0d) {
			var a3 = et.length,
				a0e = this.a0Y(),
				a0Z = a0e.a0Z,
				a0a = a0e.a0a;
			for (a0R.style.height = aZ.e2.em(a0Z), aZ.e2.jV(a0R, 2), a0S.style.top = aZ.e2.em(o.r / o.bv - a0a), a0S.style.height = aZ.e2.em(a0a), aZ.e2.jV(a0S, 8), rm.style.top = aZ.e2.em(a0Z), rm.style.height = rm.style.maxHeight = aZ.e2.em(a0e
					.a0c), a0R.style.font = aZ.e2.iA(0, aZ.e2.en(.02, .15)), a0S.style.font = aZ.e2.iA(0, aZ.e2.en(.02, .7)), rm.style.font = aZ.e2.iA(0, aZ.e2.en(.02, .35)), g = 1; g < a3; g++) aZ.e2.jV(et[g].button, 4);
			for (var a0f = 0, g = 0; g < a3; g++) a0f += et[g].button.offsetWidth;
			if (a0d && a0f < a0S.offsetWidth)
				for (g = 0; g < a3; g++) et[g].button.style.width = (100 * et[g].button.offsetWidth / a0f).toFixed(2) + "%";
			else
				for (g = 0; g < a3; g++) et[g].button.style.width = "auto";
			a0S.a0g && (a0S.scrollLeft = a0S.a0g), a0d || this.resize(!0)
		}, this.k = function() {
			var a0e = this.a0Y(),
				aH = o.bv;
			aB.fillStyle = e8.iM, aB.fillRect(0, aH * a0e.a0Z, o.p, aH * a0e.a0c)
		}, a0Q.style.position = "absolute", a0Q.style.top = "0", a0Q.style.left = "0", a0Q.style.width = "100%", a0Q.style.height = "100%", a0R.style.position = "absolute", a0R.style.top = "0", a0R.style.left = "0", a0R.style.width = "100%", a0R
		.style.display = "flex", a0R.style.backgroundColor = e8.iM, a0S.style.position = "absolute", a0S.style.left = "0", a0S.style.width = "100%", aZ.e2.a0U(a0S), a0T.style.height = a0T.style.maxHeight = "100%", rm.style.position = "absolute", rm
		.style.width = "100%", rm.style.backgroundColor = e8.iM,
		function() {
			for (var g = 0; g < et.length; g++) et[g].button.style.height = "100%", et[g].button.style.padding = "0.0em 0.9em"
		}();
	for (var g = 0; g < et.length; g++) a0T.appendChild(et[g].button);
	a0R.appendChild(function() {
		var a0X = document.createElement("h1");
		return a0X.textContent = title, a0X.style.margin = "auto", a0X.style.fontSize = 18 <= title.length && o.r > o.p ? "1.8em" : "2.3em", a0X.style.fontFamily = "Arial Black, system-ui", a0X
	}()), a0S.appendChild(a0T), !1 !== a0P && (a0Q.appendChild(rm), a0Q.appendChild(a0R), a0Q.appendChild(a0S))
}

function ok() {
	this.cT = function() {
		var a0q;
		2 === aO.fV ? (b3.b4(0, 59), l5.a0h(2700)) : aO.fP < 7 ? (a0q = e.qc[aO.a0r], a0q = e.fj[a0q], jB.a0t(L(102, [a0q]), 2, 1, 12), b3.fd(0, L(103, [a0q]), 40, 0, e8.e9, e8.ff, -1, !1), l5.a0h(2700)) : 8 === aO.fP ? (aO.fq ? b3.b4(aO.a0m,
			2) : b3.b4(1 - aO.b2, 3), aO.a0n.a0o(aO.a0m), l5.a0p(aO.a0m, 2700, !1, 0)) : 9 === aO.fP ? (b3.a0u(), l5.a0h(2700)) : (b3.a0v(aO.a0m), l5.a0p(aO.a0m, 2700, !1, 0))
	}, this.a0w = function() {
		var eJ;
		aO.i6 || aO.cq || (eJ = dc.i.pB(), aO.fP < 7 ? eJ += "/log/team" : 8 === aO.fP ? eJ += "/log/1v1" : 9 === aO.fP ? eJ += "/log/zombies" : eJ += "/log/br", b3.fd(720, eJ, 736, 0, e8.e9, e8.a0x, -1, !1))
	}
}

function nY() {
	var a0z = new Array(1),
		a10 = new Array(1),
		a11 = 20,
		a12 = 0,
		a13 = !1;

	function a15() {
		a11++, ly.play()
	}
	this.d = function() {
		if (!window.document.documentMode) {
			for (var g = 0; 0 <= g; g--) ! function(g, src) {
				a10[g] = 0, a0z[g] = document.createElement("audio"), a0z[g].src = src, a0z[g].setAttribute("preload", "auto"), a0z[g].setAttribute("controls", "none"), a0z[g].style.display = "none", a0z[g].onpause = function() {
					a10[g] = 1
				}, a0z[g].oncanplaythrough = function() {
					a10[g] = 0 === a10[g] ? 1 : a10[g]
				}, document.body.appendChild(a0z[g])
			}(g,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
			a13 = !0
		}
	}, this.hX = function() {
		if (a13) {
			a13 = !1;
			for (var g = 0; 0 <= g; g--) a0z[g].onpause = null, a0z[g].oncanplaythrough = null, bT.removeChild(document.body, a0z[g]), a0z[g] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		ly.play()
	}), this.play = function() {
		if (a13) {
			var fh = performance.now();
			if (a12 + 66 < fh)
				for (var g = 0; 0 <= g; g--)
					if (1 === a10[g]) return a12 = fh, a10[g] = 2, void a0z[g].play();
			0 < a11 && (a11--, setTimeout(a15, 66))
		}
	}
}

function nO() {
	var a16, a17 = new Uint8Array(5),
		a18 = new Uint8Array(5);
	this.a19 = new a1A, this.d = function() {
		for (var aq = df.dg.data[119].value, g = 0; g < a17.length; g++) a17[g] = (aq >> 2 * g) % 4
	}, this.a1B = function() {
		a16 = [L(104), "", L(105, [lp.zh[28]]), L(106, [lp.zh[26]]), L(107, [lp.zh[0]])], this.a19.d()
	}, this.cT = function() {
		this.a19.cT()
	}, this.a1C = function(id) {
		1 < id && ei.ej() || ! function(b7) {
			if (3 === a17[b7] || 1 === a18[b7]) return;
			if (a18[b7] = 1, !(Math.random() < .6)) {
				a17[b7]++;
				for (var aq = 0, g = 0; g < a17.length; g++) aq += a17[g] << 2 * g;
				df.dm.dn(119, aq)
			}
			return 1
		}(id) || b3.a1E(a16[id])
	}
}

function a1F() {
	this.d = function() {
		8 === aO.fP && b3.a1G()
	}, this.a0o = function(a1H) {
		var elo = aO.data.elo,
			a1I = (elo[a1H] - elo[1 - a1H]) / 10,
			a1I = 8 / (1 + Math.pow(2, a1I / 32)),
			a1I = Math.floor(10 * a1I + .5),
			a1K = elo[a1H] + a1I,
			a1L = this.a1M(a1K),
			elo = this.a1M(elo[1 - a1H] - a1I),
			a1I = (0 === a1H ? b3.a1O(a1L, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : b3.a1O(elo, a1L, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a1K * gT.sqrt(a1K) >> 8),
			elo = ((1 + aO.a1R) * a1I / 100).toFixed(2);
		a1H === aO.b2 ? b3.fd(640, L(108, [elo]), 40, 0, e8.e9, e8.ff, -1, !1) : b3.fd(640, L(109, [fZ.f1[a1H], elo]), 40, 0, e8.e9, e8.ff, -1, !1)
	}, this.a1M = function(elo) {
		return 16e3 === (elo = gT.gn(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function n8() {
	this.a1S = new a1T, this.gf = new a1U, this.i = new a1V, this.nz = new a1W, this.po = new a1X, this.a1Y = new a1Z, this.gW = new a1a, this.qv = new a1b, this.a1c = new a1d, this.a1e = new a, this.x7 = new a1f, this.a1g = new x4, this.a1h =
		new a1i, this.ec = new a1j, this.a1k = new a1l, this.a1m = new a1n, this.a1o = new a1p, this.d = function() {
			this.a1h.d(), this.gf.d(), this.i.d(), this.nz.d(), this.po.d(), this.a1e.d(), this.a1m.d()
		}, this.k = function() {
			this.a1e.k(), this.gf.k()
		}
}

function a1q() {
	var dK, dL, tz, dR;

	function k5() {
		u0(), 2 !== aO.data.sResourcesType && (aO.data.sResourcesData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		2 === aO.data.sResourcesType && aZ.ky.u2(tz.u3(), aO.data.sResourcesData, 2047)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(110), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(111), L(112), L(80)],
			value: aO.data.sResourcesType
		}, function(b7) {
			u0(), 2 !== b7 || aO.data.sResourcesData || (aO.data.sResourcesData = new Uint16Array(aO.aR)), aO.data.sResourcesType = b7, bT.c4(28)
		})), dR.push(dY)
	}(dR = []), function(dR) {
		var dY;
		1 === aO.data.sResourcesType && ((dY = new dZ).da("Value"), dY.dq(new dr({
			b7: -1,
			value: aO.data.sResourcesValue
		}, 1, 0, function(br) {
			var value = gT.gn(Math.floor(br.target.value), 0, 2047);
			br.target.value = aO.data.sResourcesValue = value
		})), dR.push(dY))
	}(dR), function(dR) {
		var dY;
		2 === aO.data.sResourcesType && ((dY = new dZ).da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.sResourcesData, 2)), dY.dq(tz), dR.push(dY))
	}(dR), dR))
}

function a1r() {
	this.p1 = function(pD, ox) {
		hc.bj(11), hc.cG(1, 0), hc.cG(6, 4), hc.cG(1, ox ? 1 : 0), hc.cG(3, 0 === aO.cd ? bH.kF ? 6 : 0 : aO.i6 ? 1 : aO.cq ? 7 : aO.fP < 7 ? 2 : 8 === aO.fP ? 4 : 9 === aO.fP ? 5 : 3), dc.i.send(pD, hc.cJ)
	}, this.qL = function() {
		hc.bj(58), hc.cG(1, 0), hc.cG(6, 5), hc.cG(8, dc.i.os), hc.cG(10, bX.bW), hc.cG(9, bX.qE), hc.cG(10, bw.a1s), hc.cG(14, bw.a1t), dc.i.send(dc.i.or, hc.cJ)
	}, this.a1u = function(gz) {
		hc.bj(27), hc.cG(1, 1), hc.cG(4, 0), hc.cG(22, gz), dc.i.send(dc.i.or, hc.cJ)
	}, this.a1v = function(gC, aL) {
		hc.bj(25), hc.cG(1, 1), hc.cG(4, 1), hc.cG(10, gC), hc.cG(10, aL), dc.i.send(dc.i.or, hc.cJ)
	}, this.a1w = function(gC, gG) {
		hc.bj(24), hc.cG(1, 1), hc.cG(4, 2), hc.cG(10, gC), hc.cG(9, gG), dc.i.send(dc.i.or, hc.cJ)
	}, this.a1x = function(gC, a1y) {
		hc.bj(42), hc.cG(1, 1), hc.cG(4, 3), hc.cG(10, gC), hc.cG(27, a1y), dc.i.send(dc.i.or, hc.cJ)
	}, this.a1z = function(gC, a20) {
		hc.bj(31), hc.cG(1, 1), hc.cG(4, 4), hc.cG(10, gC), hc.cG(16, a20), dc.i.send(dc.i.or, hc.cJ)
	}, this.a21 = function(aL) {
		hc.bj(15), hc.cG(1, 1), hc.cG(4, 5), hc.cG(10, aL), dc.i.send(dc.i.or, hc.cJ)
	}, this.a22 = function(b7) {
		hc.bj(15), hc.cG(1, 1), hc.cG(4, 6), hc.cG(10, b7), dc.i.send(dc.i.or, hc.cJ)
	}, this.a23 = function(a24) {
		hc.bj(6), hc.cG(1, 1), hc.cG(4, 7), hc.cG(1, a24), dc.i.send(dc.i.or, hc.cJ)
	}, this.a25 = function() {
		hc.bj(5), hc.cG(1, 1), hc.cG(4, 8), dc.i.send(dc.i.or, hc.cJ)
	}, this.a26 = function(gC, gz, aL) {
		hc.bj(47), hc.cG(1, 1), hc.cG(4, 10), hc.cG(10, gC), hc.cG(10, aL), hc.cG(22, gz), dc.i.send(dc.i.or, hc.cJ)
	}, this.a27 = function(a28, a29) {
		hc.bj(24), hc.cG(1, 1), hc.cG(4, 15), hc.cG(9, a29), hc.cG(10, a28), dc.i.send(dc.i.or, hc.cJ)
	}, this.a2A = function(a2B) {
		hc.bj(14), hc.cG(1, 1), hc.cG(4, 14), hc.cG(9, a2B), dc.i.send(dc.i.or, hc.cJ)
	}, this.a2C = function(a2D, target) {
		var g, a3 = a2D.length;
		for (hc.bj(14 + 9 * a3), hc.cG(1, 1), hc.cG(4, 13), hc.cG(9, target), g = 0; g < a3; g++) hc.cG(9, a2D[g]);
		dc.i.send(dc.i.or, hc.cJ)
	}
}

function a2E() {
	this.a2F = function() {
		df.dm.a2G(), df.dm.a2H(), dc.i.close(0, 3255), 0 === c9.id ? c9.a2I && c9.a2I.clear() : 1 === c9.id ? c9.a2J.saveString(199, "") : 2 === c9.id && c9.a2K.postMessage("clear")
	}, this.a2L = function() {
		2 === c9.id ? c9.a2K.postMessage("showConsentForm") : 1 === c9.id && c9.a2J.setState(7)
	}, this.a2M = function() {
		this.setState(14)
	}, this.i7 = function() {
		return 1 === df.dg.eL(2)
	}, this.a2N = function() {
		df.dg.dt(102, "")
	}, this.setState = function(ns) {
		1 === c9.id && 5 <= c9.eK && c9.a2J.setState(ns)
	}, this.cB = function() {
		var a2O;
		1 === c9.id && 7 <= c9.eK ? c9.a2J.setState(5) : ((a2O = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a2O.toString())
	}, this.a2P = function() {
		0 !== c9.id && (1 === c9.id ? c9.a2J.prepareAd("8646194357") : 2 === c9.id && (0 === c9.eK ? c9.a2K.postMessage("prepare ad 2904813909") : c9.a2K.postMessage("loadAds 2904813909")))
	}, this.a2Q = function(fh) {
		return 0 !== c9.id && (1 === c9.id ? 12 <= c9.eK && (c9.a2J.presentAd(fh), !0) : 2 === c9.id && 0 !== c9.eK && (c9.a2K.postMessage("showAd"), !0))
	}, this.ni = function() {
		2 === c9.id && c9.eK < 23 && bT.c4(4, 1, new c5("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + lj.a2R + "' target='_blank'>" + lj
			.a2R + "</a>", !0, [new c6("⬅️ " + L(1), function() {
				bT.c4(0)
			}, e8.a2S)]))
	}
}

function nZ() {
	var a2T = [];
	this.a2U = function(player, gG, vD, a2V) {
		player === aO.b2 || gG === aO.b2 || !a2V && aZ.aa.b0(player) || aZ.aa.b0(gG) || this.fd(fZ.f1[player] + " supported " + fZ.f1[gG] + " with " + aZ.fo.iP(vD) + " ressource" + (1 === vD ? "." : "s."))
	}, this.fd = function(eJ, ti) {
		eJ = {
			cQ: cs.a2W(),
			eJ: eJ,
			ti: ti
		};
		a2T.push(eJ), 30 === bT.bU && bT.kU().fd(eJ)
	}, this.clear = function() {
		a2T = [];
		var fc = bT.a2X(30);
		fc && fc.clear()
	}, this.wb = function() {
		return a2T
	}
}

function a2Y() {
	var a2Z = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a2a = function(cQ) {
		var a2c, eJ = new Date(cQ.getTime() - 6e4 * cQ.getTimezoneOffset()).toUTCString();
		return eJ.length < 12 || (eJ = eJ.substring(5, eJ.length), 0 === (cQ = cQ.getTimezoneOffset())) ? eJ : (a2c = (cQ < 0 ? "+" : "-") + gT.gU(Math.abs(cQ), 60), 0 == (cQ = Math.abs(cQ) % 60) ? eJ + a2c : eJ + a2c + ":" + (cQ < 10 ? "0" :
			"") + cQ)
	}, this.a2d = function(cQ) {
		var eJ = cQ.toUTCString();
		return eJ.length < 12 ? eJ : function(cQ) {
			return a2Z[cQ.getUTCDay()]
		}(cQ) + ", " + eJ.substring(5, eJ.length - 4)
	}
}

function a2f() {
	var bZ = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + bZ + .5) / 15))
}

function a2g() {
	this.oX = function(b7, eK) {
		return Number(this.oY(b7, eK))
	}, this.oY = function(b7, eK) {
		var aq = null;
		return 0 === c9.id ? c9.a2I && (aq = c9.a2I.getItem((eK ? "v" : "d") + b7)) : 1 === c9.id ? aq = c9.a2J.loadString((eK ? 1e3 : 2e3) + b7) : 2 === c9.id && (aq = c9.a2h[(eK ? "v" : "d") + b7]), aq && 0 !== aq.length ? aq : null
	}, this.a2i = function(a3, a2j) {
		var bu = [],
			a2k = a2j ? "e" : "l";
		if (0 === c9.id) {
			if (c9.a2I)
				for (g = 0; g < a3; g++) bu.push(c9.a2I.getItem(a2k + g))
		} else if (1 === c9.id)
			for (var a2l = a2j ? 5e3 : 3e3, g = 0; g < a3; g++) bu.push(c9.a2J.loadString(a2l + g));
		else if (2 === c9.id)
			for (g = 0; g < a3; g++) bu.push(c9.a2h[a2k + g]);
		return bu
	}, this.save = function(b7, value, eK) {
		var tF = (eK ? "v" : "d") + b7;
		if (0 === c9.id) {
			if (c9.a2I && df.dg.data[140].value) try {
				c9.a2I.setItem(tF, value)
			} catch (br) {
				console.log(br)
			}
		} else 1 === c9.id ? c9.a2J.saveString((eK ? 1e3 : 2e3) + b7, value) : 2 === c9.id && (c9.a2h[tF] = value, c9.a2K.postMessage(tF + " " + value))
	}, this.a2m = function(bu, a2j) {
		var a3 = bu.length,
			a2k = a2j ? "e" : "l";
		if (0 === c9.id) {
			if (c9.a2I && df.dg.data[140].value) try {
				for (g = 0; g < a3; g++) c9.a2I.setItem(a2k + g, bu[g])
			} catch (br) {
				console.log(br)
			}
		} else if (1 === c9.id)
			for (var a2l = a2j ? 5e3 : 3e3, g = 0; g < a3; g++) c9.a2J.saveString(a2l + g, bu[g]);
		else if (2 === c9.id)
			for (g = 0; g < a3; g++) c9.a2h[a2k + g] = bu[g], c9.a2K.postMessage(a2k + g + " " + bu[g])
	}
}

function a2o() {
	(a2n = void 0 === a2n ? document.createElement("canvas") : a2n).width = a1.a2, a2n.height = a1.jg, x1 = a2n.getContext("2d", {
		alpha: !0
	}), x2 = x3 = null, x2 = x1.getImageData(0, 0, a1.a2, a1.jg), x3 = x2.data, aZ.ky.a2p(x3)
}

function a2q() {
	this.a2r = function() {
		var a2s = aO.data;
		aZ.ky.a2t(a2s.teamPlayerCount, a2s.playerCount), a2s.numberTeams = aZ.ky.a2u(a2s.teamPlayerCount, 0), a2s.teamPlayerCount[0] && a2s.teamPlayerCount[7] && (a2s.teamPlayerCount[7] = 0, this.a2r())
	}, this.a2v = function() {
		var a2s = aO.data;
		a2s.mapType < 2 ? a1.bj(a1.a2w(a2s), a2s.mapSeed) : a1.a2x(a2s.canvas)
	}, this.a2y = function() {
		var a2s = aO.data;
		a2s.colorsData || (a2s.colorsData = new Uint32Array(1)), 0 === a2s.gameMode && (a2s.colorsData[0] = df.i.a2z()), a2s.selectableName && (a2s.playerNamesData || (a2s.playerNamesData = new Array(1)), a2s.playerNamesData[0] = df.dg.data[122]
			.value), a2s.bg = new Uint32Array(1), a2s.bg[0] = hl.hq.a0M(df.dg.data[105].value, 5)
	}, this.a30 = function() {
		aO.data = new ba
	}
}

function a31() {
	a32() ? (a33(), ss !== aO.aR && a34()) : a35()
}

function a34() {
	m1.sr(), m1.st(fZ.fC[ss]), m1.st(fZ.fD[ss]), a1.a36(a1.bd) && m1.st(fZ.fE[ss]), m1.su(fZ.fB[ss]), m1.sw(fZ.fD[ss]), m1.sw(fZ.fE[ss]), m1.sx(), m1.t0()
}

function a33() {
	a37 = !0, lJ.ar(si, a38, a39), lJ.at(si, a38), fZ.f8[si] += sg, m1.sf(), a3A()
}

function a32() {
	return (ss === aO.aR ? a3B : a3C)()
}

function a3C() {
	var a3D = sg * aO.a3E,
		a3F = a3G(),
		a3H = a3I(),
		a3F = a3D + 2 * a3F + a3H,
		a3K = a3L * sg;
	return a3F < a3K ? (a39 -= a3F, ac.ad(si, a3F, 13), a3M(a3F - a3D, a3H), !0) : a3N && 0 === a3H ? (a39 -= a3K, a3K += aZ.aa.a3O(si, a3F - a3K + 1), ac.ad(si, a3K, 13), a3M(a3K - a3D, 0), !0) : (a39 -= a3K, ac.ad(si, a3K, 13), a3M(a3K - a3D, a3H),
		!1)
}

function a3M(a3K, a3H) {
	if (0 < a3H) {
		if (a3K <= a3H) return ac.ad(ss, a3K, 13), void lJ.aX(ss, si, a3H - a3K);
		lJ.aX(ss, si, 0), a3K -= a3H
	}
	a3K = gT.gU(a3K, 2), a3K = Math.min(fZ.fA[ss], a3K), ac.ad(ss, a3K, 13), fZ.fA[ss] -= a3K
}

function a3I() {
	return lJ.aW(ss, si)
}

function a3G() {
	return gT.gU(sg * fZ.fA[ss], 1 + gT.gU(10 * fZ.f8[ss], 16))
}

function a3B() {
	var a3P = sg * aO.a3E;
	return a39 -= a3P, ac.ad(si, a3P, 13), !0
}

function a3A() {
	for (var g = sg - 1; 0 <= g; g--) fZ.fB[si].push(sh[g]), fZ.fC[si].push(sh[g]), h3.hS(sh[g], si)
}

function a3Q() {
	this.a3R = function(eJ, hf, a3S) {
		for (var a3T = [], a3 = eJ.length, max = 0, g = 0; g < a3; g++) {
			var aq = eJ.charCodeAt(g);
			a3T.push(aq), max = Math.max(max, aq)
		}
		var a3U = max < 128 ? 7 : 16;
		for (a3S.cG(hf, a3), a3S.cG(1, +(16 == a3U)), g = 0; g < a3; g++) a3S.cG(a3U, a3T[g])
	}
}

function a3V() {
	var dK, dL, tz, dR;

	function k5() {
		u0(), 2 !== aO.data.tIncomeType && (aO.data.tIncomeData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		2 === aO.data.tIncomeType && aZ.ky.u2(tz.u3(), aO.data.tIncomeData, 255)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(34), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(111), L(112), L(80)],
			value: aO.data.tIncomeType
		}, function(b7) {
			u0(), 2 !== b7 || aO.data.tIncomeData || (aO.data.tIncomeData = new Uint8Array(aO.aR), aO.data.tIncomeData.fill(32)), aO.data.tIncomeType = b7, bT.c4(26)
		})), dR.push(dY)
	}(dR = []), function(dR) {
		var dY;
		1 === aO.data.tIncomeType && ((dY = new dZ).da("Value"), dY.dq(new dr({
			b7: -1,
			value: aO.data.tIncomeValue
		}, 1, 0, function(br) {
			var value = gT.gn(Math.floor(br.target.value), 0, 255);
			br.target.value = aO.data.tIncomeValue = value
		})), dR.push(dY))
	}(dR), function(dR) {
		var dY;
		2 === aO.data.tIncomeType && ((dY = new dZ).da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.tIncomeData, 4)), dY.dq(tz), dR.push(dY))
	}(dR), dR))
}

function a3W() {
	this.rM = function(ew, ex, ey) {
		hc.bj(75), hc.cG(1, 0), hc.cG(6, 21), hc.cG(6, ew), hc.cG(1, +(ex < 0)), hc.cG(1, +(ey < 0)), hc.cG(30, Math.abs(ex)), hc.cG(30, Math.abs(ey)), dc.i.send(0, hc.cJ)
	}, this.rN = function(ew, rO, rP) {
		hc.bj(18 + 16 * rO.length + 30), hc.cG(1, 0), hc.cG(6, 22), hc.cG(6, ew), dc.pL.a3X(rO), hc.cG(30, rP), dc.i.send(0, hc.cJ)
	}, this.rU = function(ew, rO, rP) {
		hc.bj(73), hc.cG(1, 0), hc.cG(6, 28), hc.cG(6, ew), hl.hq.a0L(rO, 5), hc.cG(30, rP), dc.i.send(0, hc.cJ)
	}, this.rQ = function(rR, fr) {
		for (var a3 = fr.length, sH = 0, g = 0; g < a3; g++) sH += fr[g].length;
		for (hc.bj(21 + 3 * a3 + 16 * sH), hc.cG(1, 0), hc.cG(6, 23), hc.cG(3, rR), hc.cG(4, a3), hc.cG(7, sH), g = 0; g < a3; g++) hc.cG(3, fr[g].length), hp.hm.a0K(fr[g]);
		dc.i.send(0, hc.cJ)
	}, this.rS = function(rR, ex, ey) {
		hc.bj(52), hc.cG(1, 0), hc.cG(6, 24), hc.cG(3, rR), hc.cG(1, +(ex < 0)), hc.cG(1, +(ey < 0)), hc.cG(20, Math.abs(ex)), hc.cG(20, Math.abs(ey)), dc.i.send(0, hc.cJ)
	}
}

function a1p() {
	this.cT = function(player, a20) {
		player = a4.ec.a3Z(player, a20);
		return !(player < 0 || !a4.a1m.a3a(player) || (a4.a1m.a3b(player), 0))
	}
}

function mR() {
	var canvas, i0, aF, aG, a3c, a3d, gap, a3e, fontSize, a3f, a3g, a3h, a3i, a3j, a3k, a3l, a3m, a3n;

	function a3t() {
		i0.clearRect(0, 0, cs.p, cs.r), i0.fillStyle = e8.ff, i0.fillRect(0, 0, cs.p, cs.r), i0.fillStyle = e8.xs, h1 = 0 < a3l ? a3l : a3i[4] / 1e4, i0.fillRect(0, cs.r - a3c - 1, Math.floor(h1 * cs.p), a3c), i0.fillStyle = e8.e9, i0.fillRect(0, 0,
			cs.p, 1), i0.fillRect(0, 0, 1, cs.r), i0.fillRect(cs.p - 1, 0, 1, cs.r), i0.fillRect(0, cs.r - 1, cs.p, 1), i0.fillRect(0, cs.r - a3c - 1, cs.p, 1);
		for (var h1, a3x, fh = 0, g = 0; g < a3h.length; g++) a3j[g] ? (aZ.e2.textAlign(i0, 0), a3x = Math.floor((a3d - a3c + 2 * a3e) * (g - fh + 1) / (a3h.length + 1) - .7 * a3e), i0.fillText(a3h[g], gap, a3x), aZ.e2.textAlign(i0, 2), 5 === g &&
			0 !== fZ.f3[aO.b2] && fZ.fA[aO.b2] >= gN.a3y(aO.b2) ? (i0.fillStyle = e8.a3z, i0.fillText(a3q(g), cs.p - gap, a3x), i0.fillStyle = e8.e9) : i0.fillText(a3q(g), cs.p - gap, a3x)) : fh++
	}

	function a3q(g) {
		return g < 3 ? a3i[g].toString() : 3 === g || 4 === g || 5 === g ? aZ.fo.iQ(a3i[g] / 100, 2) : g < 7 ? aZ.fo.iP(a3i[g]) : g === 7 ? cs.wg(a3i[7]) : g === 8 ? __fx.utils.getMaxTroops(fZ.f8, aO.b2) : __fx.utils.getDensity(aO.b2)
	}

	function a3p() {
		fZ.f8[aO.b2] !== a3i[6] && (a3i[6] = fZ.f8[aO.b2], a3f++)
	}
	this.d = function() {
		a3l = a3m = 0, (a3g = new Array(8))[0] = L(113), a3g[1] = aO.cq ? L(52) : L(114), a3g[2] = L(115), a3g[3] = L(116), a3g[4] = L(117), a3g[5] = L(118, 0, "Interest"), a3g[6] = L(119), a3g[7] = L(120),
			a3g.push("Max Troops", "Density"), // add a3g
			(a3h = new Array(a3g.length)).fill(""), (a3i = new Array(a3g.length))[0] = aO.cq ? 0 : aO.aP, a3i[1] = aO.cq ? bB.bC : aO.gX, a3i[2] = aO.a3o, a3i[3] = 0, a3i[4] = gT.gU(1e4 * fZ.f8[0], Math.max(aO.qZ, 1)), a3i[5] = 0 === aO.data
			.iIncomeType ? 700 : 1 === aO.data.iIncomeType ? gT.gU(700 * aO.data.iIncomeValue, 64) : gT.gU(700 * aO.data.iIncomeData[aO.b2], 64), a3i[6] = 0, a3p(), a3i[7] = 0, a3k = a3q(6), (a3j = new Array(a3g.length)).fill(!0), a3n = 0, a3n =
			aO.cq ? (a3j[0] = !1, a3j[2] = !1, a3j[3] = !1, 3) : (a3j[3] = !1, 1), a3f = 0, this.resize()
	}, this.resize = function() {
		this.p = Math.floor((c9.cA.i7() ? .1646 : .126) * 1.25 * o.i8), this.r = Math.floor(1.18 * this.p), a3c = Math.floor(.04 * this.p), gap = Math.floor(.035 * this.p), a3e = .04 * this.p, a3d = this.r, this.r -= Math.floor(a3n * (this.r -
			2 * a3c) / a3g.length), fontSize = Math.floor(.7 * (a3d - a3c) / a3g.length);
		var i2 = aZ.e2.iA(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.p, canvas.height = this.r,
			function(i2, p) {
				for (var g = 0; g < a3h.length; g++) a3h[g] = aZ.i0.a3u(a3g[g], i2, p)
			}((i0 = canvas.getContext("2d", {
				alpha: !0
			})).font = i2, .575 * this.p), aZ.e2.textBaseline(i0, 1), i0.lineWidth = 1, this.a3s(), this.iB(), lD.iB(), a3t()
	}, this.iB = function() {
		aF = o.p - this.p - i9.gap
	}, this.a3v = function() {
		aG = i9.gap
	}, this.a3s = function() {
		aG = i9.gap + (lD.a3w() && 0 !== fZ.f3[aO.b2] && !aO.cp ? lD.r + i9.gap : 0)
	}, this.cw = function(go) {
		(go || 100 <= a3f) && (a3f = 0, a3t())
	}, this.a2W = function() {
		return a3i[7]
	}, this.wg = function(value) {
		var aj = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * aj) / 1e3);
		return value < 10 ? aj + ":0" + value : aj + ":" + value
	}, this.cT = function() {
		var g3, per;
		a3j[0] && aO.a47 - aO.a3o !== a3i[0] && (a3i[0] = aO.a47 - aO.a3o, a3f++), bB.bC - a3i[0] !== a3i[1] && (a3i[1] = bB.bC - a3i[0], a3f++), this.a42(), (g3 = gN.gO(aO.b2)) !== a3i[5] && (a3i[5] = g3, a3f++), a3p(), a3i[7] += cR.cc, g3 =
			a3q(7), a3k !== g3 && (a3k = g3, a3f += 100), g3 = aO.qX ? lt.qY() : fZ.f8[wO[0]], per = gT.gU(1e4 * g3, Math.max(aO.qZ, 1)), a3i[3] = g3, a3i[4] !== per && (a3f++, a3i[4] = per), 8 === aO.fP && function() {
				for (var g = 0; g < 2; g++)
					if (!aZ.aa.fQ(g)) return fM.od.yE(), 1;
				return
			}() || a3i[3] < aO.qZ || ! function() {
				for (var g = bB.bC - 1; 0 <= g; g--)
					if (0 < fZ.fB[bB.bD[g]].length) return;
				return 1
			}() || a4.ec.a4B().length || aO.qX && lt.qY(1) < aO.qZ || fM.od.yE()
	}, this.a42 = function() {
		a3j[2] && aO.a3o !== a3i[2] && (a3i[2] = aO.a3o, a3f += 2 === aO.cd ? 100 : 1)
	}, this.a48 = function() {
		return a3i[3] === aO.qZ
	}, this.ct = function(g) {
		var fc, a4C, fh;
		return 2 !== aO.cd && (g % 2 == 1 && (lE.cw(1, 1), cR.cZ = !0), g === aO.cr ? (a3l = 0, a3t(), !1) : (-1 !== g || 0 !== a3m) && (a4C = a3l, a3l = aO.i6 ? g / aO.cr : (fh = performance.now(), 0 <= g && (fc = fh - 392 * g, a3m = 0 === g ||
			fc < a3m ? fc : a3m), 1 < (a3l = (fh - a3m) / (392 * aO.cr)) ? 1 : a3l), a3t(), a3l !== a4C))
	}, this.k = function() {
		aB.drawImage(canvas, aF, aG)
	}
}

function a1i() {
	var a4D = [];
	this.d = function() {
		a4D = []
	}, this.a4E = function() {
		return 65536 === a4D.length
	}, this.a4F = function(a4G, a4H) {
		for (var a1h = a4D, a3 = a1h.length, g = 0; g < a3; g++) {
			var fg = a1h[g];
			if (fg[0] === a4G && fg[fg.length - 1] === a4H) return g
		}
		return -1
	}, this.a4I = function(a4J) {
		var a4K = new Uint32Array(a4J.length);
		return a4K.set(a4J), a4K.reverse()
	}, this.a4L = function(qj, qk) {
		var dl = qj.length - 1,
			a4M = new Uint32Array(dl + qk.length);
		return a4M.set(qj, 0), a4M.set(qk, dl), a4M
	}, this.a4N = function(qj, qk, a4O, gz, a4P) {
		a4P && (a4O = (qk = this.a4I(qk)).length - a4O - 2);
		a4P = qk.subarray(a4O + 1 + (gz === qk[a4O + 1])), gz = new Uint32Array(qj.length + a4P.length);
		return gz.set(qj, 0), gz.set(a4P, qj.length), gz
	}, this.a4R = function(a4J) {
		return a4D.push(a4J), a4D.length - 1
	}, this.get = function(g) {
		return a4D[g]
	}, this.a4S = function() {
		return a4D
	}, this.a4T = function(a4G, a4H) {
		return null
	}
}

function a4U() {
	var a4V = [],
		a4W = [],
		a4X = [];

	function a4Z(eZ) {
		for (var c2 = eZ.c2, a4Y = [];;) {
			var aH = function a4e(c2, position) {
				position = c2.indexOf("@", position);
				if (position < 0) return -1;
				var eJ = c2.substring(position + 1, position + 6);
				if (5 !== eJ.length) return a4e(c2, position + 1);
				if (aZ.fo.startsWith(eJ, "room")) return a4e(c2, position + 1);
				var a4u = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!a4u.test(eJ)) return a4e(c2, position + 1);
				a4u = c2.substring(position + 6, position + 7);
				if (1 !== a4u.length) return position;
				eJ = new RegExp("^[ :!.]+$");
				if (!eJ.test(a4u)) return a4e(c2, position + 1);
				return position
			}(c2, 0);
			if (-1 === aH) {
				a4Y.push(a4f(c2, eZ));
				break
			}
			0 === aH ? a4Y.push(a4g(c2.substring(1, 6), eZ, aH)) : (a4Y.push(a4f(c2.substring(0, aH), eZ)), a4Y.push(a4g(c2.substring(aH + 1, aH + 6), eZ, aH))), c2 = c2.substring(aH + 6)
		}
		return a4Y
	}

	function a4g(eJ, eZ, aH) {
		var a4h = function(eJ) {
				var bh = hl.hq.a0M(eJ, 5),
					a4h = bH.bI.a4s(bh);
				if (a4h) {
					for (a4V.push(a4h); 75 < a4V.length;) a4V.shift();
					return a4h
				}
				for (var bR = bH.bI.bR, g = bR.length - 1; 0 <= g; g--)
					if (a4h = bR[g], bh === a4h.bh) return a4V.push(a4h), a4h;
				for (g = a4V.length - 1; 0 <= g; g--)
					if (a4h = a4V[g], bh === a4h.bh) return a4V.push(a4h), a4h;
				return bH.bI.a4t(bh, eJ, 1, 999999, 999999, 0, 0, 0, 0)
			}(eJ),
			eJ = (0 === aH && 0 === eZ.a4a.id && eZ.a4b && (eZ.fontSize = bH.ec.a4j(a4h.ef, a4h.a4k), eZ.a4d = bH.ec.a4l(a4h.a4k)), document.createElement("span"));
		return eJ.textContent = function(a4h, eZ, aH) {
				if (a4h.a4n) return a4h.a4n--, aH = 2 === eZ.a4a.id || (3 === eZ.a4a.id || 4 === eZ.a4a.id) && 0 !== aH, a4h.username + (aH ? " (" + a4h.a4p + ")" : "");
				if (eZ.a4a.a4q) return "Redacted " + hp.hq.iP(a4h.bh, 2);
				return a4h.username
			}(a4h, eZ, aH), eJ.style.display = "inline-block", eJ.style.color = bH.ec.ee(a4h.ef), 11 === a4h.ef && (eJ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), eJ.style.cursor =
			"pointer", eJ.style.margin = "0", eJ.style.font = "inherit", eJ.style.minWidth = eJ.style.minHeight = "1em", bH.ec.eg(a4h) && (eJ.style.textDecoration = "underline"), a4h.eh && (eJ.style.textDecorationLine = "underline", eJ.style
				.textDecorationStyle = "dotted"), bH.ec.a4l(a4h.a4k) && (eJ.style.fontWeight = "bold"), eJ.onclick = function(br) {
				bH.k9.kA(br, a4h)
			}, ei.ej() || (eJ.onmouseover = function(br) {
				bH.eU.ek(br.target, a4h)
			}), a4W.push(eJ), eJ
	}

	function a4f(c2, eZ) {
		var eb = document.createElement("span");
		return eb.textContent = c2, eb.style.color = eZ.a4r, eb.style.margin = "0", eb.style.font = "inherit", eb
	}

	function a51(a4h, a50, bh) {
		bh !== a4h.bh || a4h.a4p || (a4h.a4p = a4h.username, a4h.username = a50)
	}
	this.hX = function() {
		for (var g = 0; g < a4W.length; g++) a4W[g].onclick = a4W[g].onmouseover = null;
		a4X = a4W = null
	}, this.transform = function(eZ) {
		for (var pa = document.createElement("div"), a4Y = a4Z(eZ), g = 0; g < a4Y.length; g++) pa.appendChild(a4Y[g]);
		0 === eZ.a4a.id && (pa.vx143 = eZ.a4a, a4X.push(pa)), pa.style.margin = "0.6em 0.6em", eZ.a4b && (pa.style.marginLeft = pa.style.marginRight = "inherit"), pa.style.font = "inherit";
		var a4c = 0 < eZ.a4a.id;
		return eZ.a4d && (pa.style.fontWeight = "bold"), a4c && (pa.style.paddingLeft = "0.7em"), a4c && (pa.style.fontStyle = "italic"), pa.style.fontSize = eZ.fontSize.toFixed(2) + "em", pa
	}, this.a4x = function(a4y) {
		if (a4y && (2 === a4y.id && 1 === a4y.a4z || 3 === a4y.id && 2 === a4y.a4z)) {
			var bh = 3 === a4y.id ? a4y.target : a4y.bh;
			if (!bH.bI.a4s(bh)) {
				for (var a50 = "Redacted " + hp.hq.iP(bh, 2), bR = bH.bI.bR, g = bR.length - 1; 0 <= g; g--) a51(bR[g], a50, bh);
				for (g = a4V.length - 1; 0 <= g; g--) a51(a4V[g], a50, bh)
			}
		}
	}, this.a52 = function(bh) {
		for (var a53 = a4X, a54 = "@" + hp.hq.iP(bh, 5), g = a53.length - 1; 0 <= g; g--) {
			var bZ = a53[g];
			if (bZ.vx143.bh === bh || 0 <= bZ.vx143.c2.indexOf(a54)) {
				for (; bZ.firstChild;) bT.removeChild(bZ, bZ.firstChild);
				for (var a4Y = a4Z(bH.ec.jS(bZ.vx143, bH.ec.jT(bZ.vx143))), b8 = 0; b8 < a4Y.length; b8++) bZ.appendChild(a4Y[b8]);
				a53.splice(g, 1)
			}
		}
	}, this.a55 = function(bh) {
		for (var a53 = a4X, g = a53.length - 1; 0 <= g; g--) {
			var bZ = a53[g];
			if (bZ.vx143.bh === bh) {
				for (; bZ.firstChild;) bT.removeChild(bZ, bZ.firstChild);
				bZ.vx143.c2 = "[Redacted Message]";
				for (var a4Y = a4Z(bH.ec.jS(bZ.vx143, bH.ec.jT(bZ.vx143))), b8 = 0; b8 < a4Y.length; b8++) bZ.appendChild(a4Y[b8]);
				a53.splice(g, 1)
			}
		}
	}
}

function a56() {
	this.cT = function(cJ) {
		var id, d3, eN;
		for (lh.d(cJ), lh.b7 += 2, eN = 8 * lh.size; lh.b7 + 8 <= eN;) id = lh.hY(4), d3 = lh.hY(9), 0 === id ? this.dH(id, d3, lh.hY(22)) : 1 === id ? this.dH(id, d3, lh.hY(10), lh.hY(10)) : 2 === id ? this.dH(id, d3, lh.hY(10), lh.hY(9)) :
			3 === id ? this.dH(id, d3, lh.hY(10), lh.hY(27)) : 4 === id ? this.dH(id, d3, lh.hY(10), lh.hY(16)) : 5 === id || 6 === id ? this.dH(id, d3, lh.hY(10)) : 7 === id ? this.dH(id, d3, lh.hY(1)) : 10 === id ? this.dH(id, d3, lh.hY(20), lh
				.hY(22)) : this.dH(id, d3)
	}, this.a57 = [], this.a58 = function() {
		for (var a5A = 0, a5B = 0, a5C = 0, a5D = 0, a5E = 0, a5F = 0, g = 0; g < 512; g++) a5A += fZ.f3[g], a5B += fZ.f8[g], a5C += fZ.fA[g], a5D += a4.i.a5G[g];
		a5E += a4.i.a5, a5F += bB.bC, this.a57.push(a5C % 1073741824 * 4 + (a5A + a5B + a5D + a5E + a5F) % 4)
	}, this.dH = function(id, d3, d5, d7) {
		0 === id ? dF.a5H.a5I(d3, d5) : 1 === id ? dF.a5H.a5J(d3, d5, d7) : 2 === id ? dF.a5H.a5K(d3, d5, d7) : 3 === id ? dF.a5H.s9(d3, d5, d7) : 4 === id ? dF.a5H.sC(d3, d5, d7) : 5 === id ? dF.a5H.a5L(d3, d5) : 6 === id ? dF.a5H.a5M(d3, d5) :
			7 === id ? dF.a5H.y2(d3, d5) : 8 === id ? dF.a5H.a5N(d3) : 9 === id ? dF.a5H.a5O(d3) : 10 === id && dF.a5H.a5P(d3, d5 >> 10, d7, d5 % 1024)
	}
}

function a5Q() {
	var dK, dL, tz, dR;

	function k5() {
		u0(), 2 === aO.data.playerNamesType && 1 === aZ.ky.u5(aO.data.playerNamesData).length && (aO.data.playerNamesType = 0), 2 !== aO.data.playerNamesType && (aO.data.playerNamesData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		2 === aO.data.playerNamesType && aZ.ky.a5R(tz.u3(), aO.data.playerNamesData, 20)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(121), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(122), L(123), L(80)],
			value: aO.data.playerNamesType
		}, function(b7) {
			u0(), aO.data.playerNamesType = b7, bT.c4(23)
		})), dY.dq(new a5S), dY.dq(new uB({
			value: aO.data.selectableName
		}, L(124), function(value) {
			aO.data.selectableName = value
		})), dR.push(dY)
	}(dR = []), function(dR) {
		var dY;
		2 === aO.data.playerNamesType && ((dY = new dZ).da("Data"), tz = new dk(0, 1, 0, 1), aO.data.playerNamesData && aO.data.playerNamesData.length === aO.aR || (aO.data.playerNamesData = new Array(aO.aR), aO.data.playerNamesData.fill(
			"")), tz.dp(aZ.fo.uD(aO.data.playerNamesData, 1, '"')), dY.dq(tz), dR.push(dY))
	}(dR), dR))
}

function a5T(title, pZ, a5U) {
	var ep, rE;
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), rE.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, a5U = a5U || [new c6("⬅️ " + L(1), function() {
		bT.dN()
	}, e8.a2S)], ep = new dM(title, a5U), rE = new pY(ep.dP, pZ), aZ.e2.textAlign(ep.dP.style, 1)
}

function mT() {
	var a5V, a5W, a5X;

	function a5d(g) {
		var button = lG.kC[g],
			aF = button.aF,
			aG = button.aG,
			p = button.p,
			r = button.r;
		aB.fillStyle = button.a5a, aB.fillRect(aF, aG, p, r), g === a5V && (aB.fillStyle = a5X, aB.fillRect(aF, aG, p, r)), aB.lineWidth = i9.tu, aB.strokeStyle = a5W, aB.strokeRect(aF, aG, p, r),
			function(button) {
				var aF = button.aF,
					aG = button.aG,
					p = button.p,
					r = button.r;
				aZ.e2.textAlign(aB, 1), aZ.e2.textBaseline(aB, 1), aB.font = button.font, aB.fillStyle = a5W, aB.fillText(button.kG, Math.floor(aF + p / 2), Math.floor(aG + r / 2 + .1 * button.fontSize))
			}(button)
	}
	this.p = 0, this.r = 0, this.aG = 0, this.gap = 0, this.d = function() {
		a5V = -1, a5W = e8.e9, a5X = "rgba(255,255,255,0.16)", this.kC = new Array(7), this.r = Math.floor((c9.cA.i7() ? .123 : .093) * o.i8), this.p = Math.floor((c9.cA.i7() ? 3.96 : 4.2) * this.r), this.gap = Math.floor(.025 * this.p);
		var a5Y = Math.floor(.26 * this.r),
			a5Z = aZ.e2.iA(1, a5Y);
		this.kC[0] = {
			aF: 0,
			aG: 0,
			p: Math.floor(.6 * this.p - this.gap / 2),
			r: this.r,
			kG: "Multiplayer",
			font: a5Z,
			a5a: "rgba(22,88,22,0.8)",
			fontSize: a5Y
		}, a5Y = Math.floor(.18 * this.r), a5Z = aZ.e2.iA(1, a5Y), this.kC[1] = {
			aF: 0,
			aG: 0,
			p: this.p - this.kC[0].p - this.gap,
			r: this.r,
			kG: "Single Player",
			font: a5Z,
			a5a: "rgba(22,88,88,0.8)",
			fontSize: a5Y
		}, this.kC[2] = {
			aF: 0,
			aG: 0,
			p: this.p,
			r: Math.floor(.3 * this.r),
			kG: "",
			font: this.kC[1].font,
			a5a: "rgba(100,0,0,0.8)",
			fontSize: this.kC[1].fontSize
		}, this.kC[3] = {
			aF: 0,
			aG: 0,
			p: this.p,
			r: this.r,
			kG: "Back",
			font: this.kC[0].font,
			a5a: "rgba(0,0,0,0.8)",
			fontSize: this.kC[0].fontSize
		}, this.kC[4] = {
			aF: 0,
			aG: 0,
			p: this.p,
			r: Math.floor(.3 * this.r),
			kG: "The game was updated!",
			font: this.kC[1].font,
			a5a: "rgba(100,0,0,0.8)",
			fontSize: this.kC[1].fontSize
		}, this.kC[5] = {
			aF: 0,
			aG: 0,
			p: this.kC[0].p,
			r: Math.floor(.8 * this.r),
			kG: "Reload",
			font: this.kC[0].font,
			a5a: "rgba(0,100,0,0.8)",
			fontSize: this.kC[0].fontSize
		}, this.kC[6] = {
			aF: 0,
			aG: 0,
			p: this.kC[1].p,
			r: this.kC[5].r,
			kG: "Back",
			font: this.kC[0].font,
			a5a: "rgba(0,0,0,0.8)",
			fontSize: this.kC[0].fontSize
		}, this.a5b()
	}, this.a5b = function() {
		this.aG = Math.floor(.54 * o.r), this.kC[0].aF = Math.floor(.5 * o.p - .5 * this.p), this.kC[1].aF = this.kC[0].aF + this.kC[0].p + this.gap, this.kC[2].aF = this.kC[3].aF = this.kC[0].aF, this.kC[4].aF = this.kC[5].aF = this.kC[0].aF,
			this.kC[6].aF = this.kC[1].aF, this.kC[0].aG = Math.floor(.54 * o.r), this.kC[1].aG = this.kC[0].aG, this.kC[2].aG = Math.floor((o.r - this.kC[2].r - this.kC[3].r - this.gap) / 2), this.kC[3].aG = this.kC[2].aG + this.kC[2].r + this
			.gap, this.kC[4].aG = Math.floor((o.r - this.kC[4].r - this.kC[5].r - this.gap) / 2), this.kC[5].aG = this.kC[6].aG = this.kC[4].aG + this.kC[4].r + this.gap
	}, this.a5c = function() {
		a5d(0), a5d(1)
	}, this.a5e = function() {
		a5d(2), a5d(3)
	}, this.a5f = function() {
		a5d(4), a5d(5), a5d(6)
	}, this.io = function(aF, aG, cw) {
		var g = -1;
		return 0 === bi.o4() ? g = this.iV(aF, aG, 0, 2) : 3 === bi.o4() ? g = this.iV(aF, aG, 3, 1) : 5 === bi.o4() && (g = this.iV(aF, aG, 5, 2)), a5V !== g && (a5V = g, cw) && (cR.cZ = !0), -1 !== g && (lC.kT(), !0)
	}, this.iV = function(aF, aG, a5g, size) {
		for (var g = a5g; g < a5g + size; g++)
			if (aF >= this.kC[g].aF && aG >= this.kC[g].aG && aF <= this.kC[g].aF + this.kC[g].p && aG <= this.kC[g].aG + this.kC[g].r) return g;
		return -1
	}
}

function a5i() {
	this.a5j = function(pD, cJ) {
		lh.d(cJ), 0 === lh.size ? dc.i.pS(pD, 3205) : ((0 === lh.hY(1) ? function(pD) {
			var a5n = lh.hY(6);
			0 === a5n ? function(pD) {
					if (0 === pD && 8 !== bi.o4()) {
						bT.i.a63();
						for (var a64 = lh.hY(12), a65 = lh.hY(6), bu = new Array(a64), g = 0; g < a64; g++) bu[g] = lh.hY(a65);
						lC.a66(bu)
					}
				}(pD) : 2 === a5n ? dc.a5p.a5q(pD) : 3 === a5n || 4 === a5n ? bX.d() : 5 === a5n ? dc.a5r.a5s() : 9 === a5n ? dc.a5r.a5t(pD) : 10 === a5n ? dc.a5u.yz() : 11 === a5n ? dc.a5r.a5v(pD) : 12 === a5n ? dc.a5u.z1() : 13 ===
				a5n ? dc.a5w.sE() : 14 === a5n ? dc.a5w.sI() : 15 === a5n ? dc.a5r.a5x() : 16 === a5n ? dc.a5p.a5y(pD) : 17 === a5n ? dc.a5p.a5z(pD) : 19 === a5n ? dc.a5p.a60(pD) : 20 === a5n ? dc.a5r.a61(pD) : 21 === a5n && dc.a5r
				.a62(pD)
		} : function(pD) {
			if (8 !== bi.o4() && !bX.qP()) return;
			if (pD !== dc.i.or) dc.i.pS(pD, 3244);
			else if (0 === lh.hY(1)) cR.a68.tC(lh.cJ);
			else {
				var g, pD = lh.hY(2);
				if (0 === pD) {
					var ti, p0 = lh.hY(9);
					0 !== fZ.f3[p0] && 0 !== fZ.f3[aO.b2] && (ti = lh.hY(10), b3.ts(p0, aO.b2, ti), b5.vK(p0, 1, ti))
				} else if (1 === pD) ! function() {
					var p0 = lh.hY(9);
					0 !== fZ.f3[p0] && 0 !== fZ.f3[aO.b2] && lc.a6E(0, [p0], !0) && b3.a6F(p0, 1)
				}();
				else if (2 === pD) ! function() {
					var p0 = lh.hY(9),
						target = lh.hY(9);
					0 !== fZ.f3[p0] && 0 !== fZ.f3[target] && 0 !== fZ.f3[aO.b2] && lc.a6E(1, [p0], !0) && (b5.vK(p0, 3, 96), b5.vK(target, 4, 96), b3.a6G(p0, target))
				}();
				else if (bw.cH && !bw.cI) {
					var a3 = 540;
					for (hc.bj(17287), hc.cG(1, 0), hc.cG(6, 10), a3 = Math.min(dF.dG.a57.length, 540), g = 0; g < a3; g++) hc.ir(32, dF.dG.a57[g]);
					dc.i.send(dc.i.or, hc.cJ)
				}
			}
		})(pD), cR.a5m())
	}
}

function oe() {
	function a6H() {
		if (2 === aO.cd) return 1;
		lV.yF(), aO.cd = 2, aO.a3o = aO.a47
	}

	function a6I() {
		fM.ol.kK(), lF.show(1 === aO.fq, !1, 2 === aO.fq), fM.result.kK(), fM.on.cT(), fM.oj.cT(), fM.oj.a0w(), b3.a6J(!0), b3.wA(247), b3.wA(956), b3.wA(957), lE.cw(!0), cs.cw(!0), lV.cw(), cU.a6K(), aO.i6 && cR.a68.dI(), cR.cZ = !0, cj.h8(), c9.cA
			.setState(0)
	}
	this.yD = function() {
		a6H() || (aO.fV = 2, a6I())
	}, this.yE = function() {
		a6H() || (aO.fV = 1, a6I())
	}
}

function n5() {
	function a6M(key) {
		var a6N;
		return "undefined" == typeof URLSearchParams || (a6N = window.location.search, "string" != typeof(a6N = new URLSearchParams(a6N).get(key))) || a6N.length < 1 ? null : a6N
	}
	this.bF = function() {
		if (0 !== c9.id) return !1;
		if (! function() {
				var value = a6M("account");
				if (!value && !(value = a6M("a"))) return void li.clear();
				return li.clear(), bT.c4(8, bT.bU, new ev(1e3, {
					s2: 0,
					bh: value,
					s1: 0
				})), 1
			}()) {
			var value = a6M("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			bT.c4(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a2O = new URL(window.location.href);
		a2O.search = "";
		try {
			return history.replaceState(null, "", a2O.toString()), !0
		} catch (br) {
			console.log("error 352: " + br)
		}
		return !1
	}, this.a6P = function(key, value) {
		if (0 === c9.id) try {
			var a2O = new URL(window.location.href),
				fg = a2O.searchParams;
			fg.set(key, value), a2O.search = fg.toString(), history.replaceState(null, "", a2O.toString())
		} catch (br) {
			console.log("error 358: " + br)
		}
	}
}

function nT() {
	this.tu = 0, this.gap = 0, this.a6Q = 0, this.pc = 0, this.d = function() {
		this.resize()
	}, this.resize = function() {
		this.tu = .0022 * aZ.e2.a6R(.5) * o.i8, this.a6Q = this.tu / o.bv, this.gap = Math.max(Math.floor((c9.cA.i7() ? .0114 : .01296) * o.i8), 2), this.pc = this.gap / o.bv
	}
}

function a6S() {
	this.a2p = function(bu) {
		bu.fill(0)
	}, this.a6T = function(bu) {
		for (var a3 = bu.length, g = 0; g < a3; g++) bu[g] = []
	}, this.a6U = function(w8, il) {
		for (var w9 = gD.a6V, g = 0; g < 3; g++) w9[g] = il * w8[g];
		return w9
	}, this.a6W = function(w8, w9, a6X) {
		for (var a1I = 0, g = 0; g < 3; g++) a1I += Math.abs(w8[g] - w9[g]);
		return a6X <= a1I
	}, this.a6Y = function(w8, a6Z) {
		for (var g = 0; g < 3; g++) w8[g] = gT.gn(w8[g] + a6Z, 0, 255);
		return w8
	}, this.u5 = function(bu, ex, ey) {
		ey = ey || bu.length - 1;
		for (var zo = 0, g = ex = ex || 0; g <= ey; g++) zo += bu[g];
		return zo
	}, this.a6a = function(bu, a6b) {
		for (var g, a6c, a3 = bu.length, a6d = [], b8 = a3 - 1; 0 <= b8; b8--) {
			for (g = a6c = 0; g < a3; g++) a6b(bu[g]) < a6b(bu[a6c]) && (a6c = g);
			a3--, a6d.push(bu[a6c]), bu[a6c] = bu[a3], bu.pop()
		}
		return a6d
	}, this.min = function(bu) {
		var g, aq, a3 = bu.length;
		if (0 === a3) return 0;
		for (aq = bu[0], g = 1; g < a3; g++) aq = Math.min(aq, bu[g]);
		return aq
	}, this.max = function(bu) {
		var a3 = bu.length;
		if (0 === a3) return 0;
		for (var aq = bu[0], g = 1; g < a3; g++) aq = Math.max(aq, bu[g]);
		return aq
	}, this.a2u = function(bu, aq) {
		for (var a3 = bu.length, dl = 0, g = 0; g < a3; g++) dl += bu[g] > aq;
		return dl
	}, this.a6e = function(a6f, a6g, min) {
		for (var a3 = a6g[0], g = a3 - 1; 0 <= g; g--) a6f[g] < min && (a6f[g] = a6f[--a3]);
		a6g[0] = a3
	}, this.a6h = function(bu, a3, value) {
		for (var g = 0; g < a3; g++) bu[g] -= value
	}, this.a6i = function(bu) {
		for (var a3 = bu.length, g = 0; g < a3; g++)
			if ("string" != typeof bu[g]) return !1;
		return !0
	}, this.u2 = function(eJ, bu, a6j) {
		bu.fill(0);
		for (var fc = eJ.split(","), a3 = Math.min(fc.length, bu.length), g = 0; g < a3; g++) bu[g] = Math.min(parseInt(fc[g]), a6j)
	}, this.a5R = function(eJ, bu, a6k) {
		bu.fill("");
		for (var fc = eJ.split('"'), a3 = Math.min(fc.length, 2 * bu.length), qh = 0, g = 1; g < a3; g += 2) bu[qh++] = fc[g].slice(0, a6k)
	}, this.a2t = function(bu, dl) {
		if (0 === dl) bu.fill(0);
		else {
			var zo = this.u5(bu),
				a3 = bu.length;
			if (0 === zo) bu.fill(gT.gU(dl, a3));
			else
				for (var g = 0; g < a3; g++) bu[g] = gT.gU(dl * bu[g], zo);
			if (0 === (zo = this.u5(bu))) bu[1] = dl;
			else
				for (var qh = 0; zo++ < dl;) bu[qh = (qh + 1) % a3] && bu[qh]++
		}
	}, this.a6l = function(bu) {
		if (!bu) return 0;
		var a3 = bu.length;
		if (0 === a3) return 0;
		for (var aq = bu[a3 - 1], g = a3 - 2; 0 <= g; g--)
			if (bu[g] !== aq) return g + 2;
		return 1
	}, this.kz = function(bu) {
		for (var zo = 0, g = 0; g < bu.length; g++) zo += bu[g].length;
		return zo
	}, this.a6m = function(a6n) {
		for (var bu = [], g = 0; g < a6n.length; g++) bu = bu.concat(a6n[g]);
		return bu
	}, this.has = function(bu, aq) {
		for (var a3 = bu.length, g = 0; g < a3; g++)
			if (bu[g] === aq) return !0;
		return !1
	}
}

function a6o(a6p) {
	var eQ = document.createElement("div"),
		a6q = document.createElement("div"),
		a6r = (this.aF = 0, this.aG = 0);

	function a6t() {
		bH.k9.eB()
	}
	this.kC = a6p, this.show = function(aF, aG, a6v) {
		if (a6r) return [0, 0];
		a6r = 1, this.aF = aF, this.aG = aG,
			function(self, a6v) {
				var p = aZ.e2.en(.16, .7),
					r = a6p.length * p / 3,
					a6x = o.p / o.bv,
					a6y = o.r / o.bv,
					ik = Math.min(1, Math.min(a6x / p, a6y / r));
				p *= ik, r *= ik, a6v && (self.aF += aZ.e2.en(.03, .5)), self.aF = gT.gn(self.aF, 0, a6x - p), self.aG = gT.gn(self.aG, 0, a6y - r), a6q.style.left = self.aF + "px", a6q.style.top = self.aG + "px", a6q.style.width = p + "px", a6q
					.style.height = r + "px", a6q.style.font = aZ.e2.iA(0, .3 * r / a6p.length), aZ.e2.jV(a6q, 5);
				for (var g = 1; g < a6p.length; g++) aZ.e2.jV(a6p[g].button, 8)
			}(this, a6v), document.body.appendChild(eQ)
	}, this.eB = function() {
		a6r && (a6r = 0, eQ.removeEventListener("click", a6t), bT.removeChild(document.body, eQ))
	};
	for (var g = 0; g < a6p.length; g++) new kB("" + (1 + g), a6p[g].button, 0, 1);
	eQ.style.position = "fixed", eQ.style.top = "0", eQ.style.left = "0", eQ.style.width = "100%", eQ.style.height = "100%", eQ.style.zIndex = "5", a6q.style.position = "absolute",
		function() {
			for (var a6u = (100 / a6p.length).toFixed(2) + "%", g = 0; g < a6p.length; g++) a6p[g].button.style.width = "100%", a6p[g].button.style.height = a6p[g].button.style.maxHeight = a6u, a6p[g].button.style.padding = "0.0em 0.9em", a6q
				.appendChild(a6p[g].button)
		}(), eQ.appendChild(a6q), eQ.addEventListener("click", a6t)
}

function nC() {
	function a7D() {
		return {
			a2: a1.a2,
			jg: a1.jg,
			a71: a1.a71,
			oJ: a1.oJ,
			oK: a1.oK,
			oM: a1.oM,
			bd: a1.bd,
			mapSeed: a1.mapSeed,
			a72: a1.a72
		}
	}

	function a77(g) {
		return 1 !== g && a1.bc(g) && g !== a1.a7F()
	}
	this.a6z = 25, this.a70 = 13, this.u4 = 4096, this.a2 = 0, this.jg = 0, this.a71 = null, this.oJ = null, this.oK = null, this.oM = null, this.bd = 0, this.mapSeed = 0, this.a72 = !1, this.oA = new nq, this.ks = new a73, this.a74 = new a75, this
		.d = function() {
			this.ks.d()
		}, this.bj = function(map, a76) {
			((map %= this.a6z) !== this.bd || a77(this.bd) && a76 !== this.mapSeed) && (this.a72 = !1, this.oA.o2(), lW.oD(map), this.bd = map, this.mapSeed = a76, a77(map) && (a1.ks.o5[map].l0 = a76), this.bc(this.bd) ? (map = a1.ks.o5[this.bd],
				this.a2 = map.p, this.jg = map.r, lW.oD(map.l0), jm.bj([this.a2, this.jg, map.a79, map.a7A]), jW(), lQ.a7B(), jm.o3()) : a78())
		}, this.a7C = function(map, a76) {
			var d3 = a7D(),
				map = (this.bj(map, a76), this.oA.o2(), a7D());
			return a76 = d3, a1.a2 = a76.a2, a1.jg = a76.jg, a1.a71 = a76.a71, a1.oJ = a76.oJ, a1.oK = a76.oK, a1.oM = a76.oM, a1.bd = a76.bd, a1.mapSeed = a76.mapSeed, a1.a72 = a76.a72, map
		}, this.a2x = function(canvas) {
			canvas && this.a71 !== canvas && (this.a2 = canvas.width, this.jg = canvas.height, this.a71 = canvas, this.oJ = this.a71.getContext("2d", {
				alpha: !1
			}), this.pi = this.oJ.getImageData(0, 0, this.a2, this.jg), this.oM = this.pi.data, this.bd = this.a7F(), this.mapSeed = 0, a1.ks.o5[this.bd].name = aO.data.mapName)
		}, this.a36 = function(g) {
			return 3 === g || 7 === g || 9 === g || 21 === g || g === this.a7F()
		}, this.pn = function(g) {
			return 2 === g || 7 === g || 9 === g || 20 === g
		}, this.a7G = function(g) {
			return 1 === g
		}, this.a7F = function() {
			return this.a6z
		}, this.bc = function(g) {
			return void 0 === this.ks.o5[g].o8
		}, this.a2w = function(eZ) {
			return 0 === eZ.mapType ? eZ.mapProceduralIndex < 10 ? eZ.mapProceduralIndex : 10 + eZ.mapProceduralIndex : 1 === eZ.mapType ? 10 <= eZ.mapRealisticIndex ? 22 + eZ.mapRealisticIndex - 10 : eZ.mapRealisticIndex + 10 : void 0
		}, this.be = function(eZ, a7H) {
			0 === eZ.mapType ? eZ.mapProceduralIndex = a7H < 10 ? a7H : a7H - 10 : 1 === eZ.mapType && (eZ.mapRealisticIndex = a7H - (22 <= a7H ? 12 : 10))
		}
}

function a7I() {
	this.yN = function(ns) {
		return 0 === ns ? 1 === aO.cd && aO.cp : 1 === ns ? 1 === aO.cd && !aO.cp : 2 === aO.cd
	}, this.fQ = function(player) {
		return 0 !== fZ.f3[player] && 2 !== fZ.f2[player]
	}, this.sA = function(player) {
		return player === aO.b2 && 2 !== fZ.f2[player]
	}, this.ql = function(player, aL) {
		return player !== aL && (0 === e.t1[player] || e.t1[player] !== e.t1[aL])
	}, this.yu = function() {
		return bB.bC < 2 ? 0 : aO.qX ? 1 < lt.a00() : fZ.f8[wO[1]]
	}, this.yB = function() {
		var bC = bB.bC;
		if (0 !== bC) {
			if (!aO.qX) return !this.b0(wO[0]);
			for (var t1 = e.t1, qa = lt.qb(), bD = bB.bD, g = bC - 1; 0 <= g; g--) {
				var fg = bD[g];
				if (t1[fg] === qa && !this.b0(fg)) return 1
			}
		}
		return 0
	}, this.ay = function(player) {
		return player === aO.b2
	}, this.a7J = function(aL, ik) {
		return fZ.fA[aO.b2] < ik * fZ.fA[aL]
	}, this.b0 = function(player) {
		return player >= aO.aP || 2 === fZ.f2[player]
	}, this.r8 = function(player) {
		return 0 !== fZ.f3[player]
	}, this.a7K = function(player) {
		return player < aO.aP
	}, this.a7L = function(t5, t6) {
		return t5 !== t6
	}, this.ab = function(player, aq) {
		var min;
		return aq = this.a7M(player, aq), fZ.fA[player] += aq, fZ.fK[player] && (min = Math.min(fZ.fK[player], fZ.fA[player]), fZ.fK[player] -= min, fZ.fA[player] -= min), aq
	}, this.a7M = function(player, aq) {
		var g2 = fZ.fA[player];
		return aq = Math.min(aq, fZ.f8[player] * aO.a7N - g2), aq = Math.min(aq, aO.b1 - g2), Math.max(aq, 0)
	}, this.a7O = function(player, gC, a7P, a7Q) {
		var g2 = fZ.fA[player],
			gC = gT.gU(g2 * (gC + 1), 1024),
			a7P = gT.gU(a7P * g2, 1024),
			gC = Math.min(gC, g2 - a7P);
		return 10 === aO.fP && (gC = lb.a7S(player, gC)), gD.gE[0] = gC, gD.gE[1] = a7P, a7Q <= gC
	}, this.a7T = function(player, a5K, gG) {
		var player = fZ.fA[player],
			a7R = gT.gU(64 * player, 1024);
		return a5K = Math.min(a5K, player - a7R), a5K = this.a7M(gG, a5K), gD.gE[0] = a5K, gD.gE[1] = a7R, 1 <= a5K
	}, this.a7U = function(player, a5K, gG) {
		var player = fZ.fA[player],
			a7R = gT.gU(64 * player, 1024);
		return a5K = Math.min(a5K, player - a7R), this.a7M(gG, a5K)
	}, this.a7V = function(a5K, gG) {
		return a5K = this.a7M(gG, a5K), gD.gE[0] = a5K, gD.gE[1] = 0, 1 <= a5K
	}, this.iN = function(player, a7W) {
		return gT.gU(fZ.fA[player] * (a7W + 1), 1024)
	}, this.a7X = function(player, a7P) {
		a7P = gT.gU(a7P * fZ.fA[player], 1024);
		gD.gE[1] = a7P, fZ.fA[player] -= a7P
	}, this.a3O = function(player, a7Y) {
		var d5, d7, fi = fZ.fA[player];
		return a7Y <= fi ? fZ.fA[player] -= a7Y : (fZ.fA[player] = 0, d7 = fZ.fK[player] + (d5 = 5 * ((fi = a7Y - fi) >> 2)), ac.ad(player, d5 - fi, 12), d7 <= aO.a7Z ? fZ.fK[player] = d7 : (fZ.fK[player] = aO.a7Z, ac.ad(player, d7 - aO.a7Z,
			18))), a7Y
	}, this.a7a = function(player, gC) {
		var fA = fZ.fA,
			g2 = fA[player],
			gC = gT.gU(g2 * (gC + 1), 1024),
			a7R = Math.max(gT.gU(g2, 10), 1e3);
		return (gC = Math.min(gC, g2 - a7R)) < 0 ? (fA[player] = 0, a7R = Math.min(1e3, g2 + aO.a7Z - fZ.fK[player]), gD.gE[1] = a7R, fZ.fK[player] += a7R - g2, 0) : (gD.gE[1] = a7R, 10 === aO.fP && (gC = lb.a7S(player, gC)), fA[player] -= a7R +
			gC, gC)
	}, this.a7b = function(player) {
		fZ.fA[player] -= gD.gE[0] + gD.gE[1]
	}, this.a7c = function(player, aL) {
		return (aL = Math.min(aL, aO.aR)) < aO.aR && 0 === fZ.f3[aL] && (aL = aO.aR), (gD.a7d[0] = aL) === aO.aR || m1.r5(player, aL)
	}, this.a7e = function(player, gG) {
		return 0 !== fZ.f3[gG] && !m1.r5(player, gG)
	}, this.yO = function(player, a7f) {
		for (var fg, a3 = bB.bC, a4k = 0, a7g = wO, g = 0; g < a3; g++)
			if (fg = a7g[g], !this.b0(fg)) {
				if (player === fg) return !0;
				if (++a4k > a7f) return !1
			} return !1
	}, this.a7h = function(fg) {
		var yC = aO.qX ? lt.qY() : fZ.f8[wO[0]];
		return yC >= gT.gU(fg * aO.qZ, 100)
	}, this.a7i = function(aq, min, max) {
		return Math.floor(gT.gn(isNaN(aq) ? 0 : Number(aq), min, max))
	}
}

function a7j() {
	var a7k = [];

	function a7o(bh) {
		a7k.unshift(bh), df.dm.dn(161, a7k.join(";"))
	}

	function a7n(bh) {
		for (var a7q = a7k, a3 = a7q.length, g = 0; g < a3; g++)
			if (a7q[g] === bh) return a7q.splice(g, 1), df.dm.dn(161, a7q.join(";")), 1
	}
	this.d = function() {
		var eJ = df.dg.data[161].value;
		eJ.length && (a7k = eJ.split(";"))
	}, this.get = function() {
		return a7k
	}, this.a7l = function() {
		return {
			jX: a7k,
			value: 0
		}
	}, this.eh = function(bh) {
		return aZ.ky.has(a7k, bh)
	}, this.a7m = function(bh) {
		return a7n(bh) ? 0 : (a7o(bh), 1)
	}, this.eT = function(bh) {
		a7n(bh) && a7o(bh)
	}, this.a7p = function(b7) {
		b7 < a7k.length && (a7k.splice(b7, 1), df.dm.dn(161, a7k.join(";")))
	}
}

function a7r() {
	this.d2 = null, this.d4 = null, this.d6 = null, this.d8 = null, this.dA = null, this.dC = null, this.a7s = "";
	var a7t = 0;
	this.d = function() {
		this.d2 = [], this.d4 = [], this.d6 = [], this.d8 = [], this.dA = [0], this.dC = [0], a7t = 0, this.a7s = ""
	}, this.a7u = function(id, d3, d5, d7) {
		aO.i6 || 2 === aO.cd || (0 === this.dA[a7t] && (this.dC[a7t] ? (this.dA.push(1), this.dC.push(0), a7t++) : this.dA[a7t] = 1), this.d2.push(id), this.d4.push(d3), this.d6.push(void 0 === d5 ? 0 : d5), this.d8.push(void 0 === d7 ? 0 : d7),
			this.dC[a7t]++)
	}, this.cT = function() {
		0 === this.dA[a7t] ? this.dC[a7t]++ : (this.dA.push(0), this.dC.push(0), a7t++)
	}
}

function a7v() {
	var p, r, a7w;

	function a89(qj, bZ, a87, a7z, pj) {
		bZ = a88(qj, bZ + 1 + 2 * a7z & 3);
		! function(qj, qk) {
			return 1 < Math.abs(qj % p - qk % p) || 1 < Math.abs(a8C(qj) - a8C(qk))
		}(qj, bZ) && 0 === pj[bZ << 2] && (pj[bZ << 2] = a87)
	}

	function a8C(fg) {
		return Math.floor((fg + .5) / p) % r
	}

	function a88(fg, bZ) {
		return fg + a7w[bZ]
	}
	this.sG = function(eJ) {
		var g, vJ, a3, a7x, ob = lh;
		for (hl.hq.a0I(hl.hq.a0H(eJ)), a1.ks.o5[a1.bd].p = a1.a2 = p = ob.hY(12), a1.ks.o5[a1.bd].r = a1.jg = r = ob.hY(12), a7w = [-p, -1, p, 1], a1.a71 = document.createElement("canvas"), a1.a71.width = a1.a2, a1.a71.height = a1.jg, a1.oJ = a1
			.a71.getContext("2d", {
				alpha: !1
			}), a1.oK = a1.oM = null, a1.oK = a1.oJ.getImageData(0, 0, a1.a2, a1.jg), a1.oM = a1.oK.data, aZ.ky.a2p(a1.oM), a3 = ob.hY(12), vJ = ob.hY(5), a7x = a81(p * r - 1), g = 0; g < a3; g++) ! function(aj, fg, a7y, a7z) {
			var g, bZ, ob = lh,
				pj = a1.oM,
				fa = fg,
				a84 = fg,
				a85 = 0,
				a86 = 1 + a7y,
				a87 = 2 - a7y;
			for (pj[fg << 2] = a86, g = 0; g < aj; g++) bZ = ob.hY(2), fg = a88(fg, bZ), pj[fg << 2] === a86 ? a85 % 2 == 1 && a89(a84, a85 + 2 * a7z + 3, a87, a7z, pj) : pj[fg << 2] = a86, a89(fg, bZ, a87, a7z, pj), a89(a84, bZ, a87, a7z,
				pj), a84 = fg, a85 = bZ;
			a88(fg, 0) === fa ? (a89(fg, 0, a87, a7z, pj), a89(fa, 0, a87, a7z, pj)) : a88(fg, 1) === fa && (a89(fg, 0, a87, a7z, pj), a89(fa, 2, a87, a7z, pj));
			0 === aj && (a89(fa, 0, a87, a7z, pj), a89(fa, 2, a87, a7z, pj))
		}(ob.hY(vJ), ob.hY(a7x), 1 === ob.hY(1), 1 === ob.hY(1));
		var aF, aG, qh, a8D, a8E, a8F, pj = a1.oM,
			a8G = !0,
			o6 = a1.ks.o5[a1.bd].o6,
			o7 = a1.ks.o5[a1.bd].o7;
		for (aG = 0; aG < r; aG++)
			for (a8D = !0, a8E = a8G, aF = a8F = 0; aF < p; aF++) qh = 4 * aG * p + 4 * aF, a8F <= aF && 0 < pj[qh] && (a8E = 2 === pj[qh], a8D) && (a8D = !1, a8E !== a8G) ? (a8G = a8E, a8F = aF + 1, aF = -1) : (a8E ? (pj[qh] = o7[0], pj[1 +
				qh] = o7[1], pj[2 + qh] = o7[2]) : (pj[qh] = o6[0], pj[1 + qh] = o6[1], pj[2 + qh] = o6[2]), pj[3 + qh] = 255);
		a1.oJ.putImageData(a1.oK, 0, 0), a1.a72 = !0, a1.oA.d(), cR.cZ = !0
	}
}

function mq() {
	var a8H, a8I;
	this.d = function() {
		a8H = 1, a8I = 0
	}, this.cT = function() {
		0 < a8H && (a8I = 0 === a8I ? cR.cQ + 16 : a8I, a8H = (a8H -= .001 * (cR.cQ - a8I)) < 0 ? 0 : a8H, a8I = cR.cQ, cR.cZ = !0)
	}, this.k = function() {
		0 < a8H && (aB.fillStyle = "rgba(0,0,0," + a8H + ")", aB.fillRect(0, 0, o.p, o.r))
	}
}

function a8L() {
	this.a0K = function(eJ) {
		for (var a3 = eJ.length, p = hc, g = 0; g < a3; g++) p.cG(16, eJ.charCodeAt(g))
	}
}

function a8M(data) {
	var ep, a8N;

	function a8P(dR, a90) {
		if (!data.zc) {
			if (data.zU) {
				if (a90) return
			} else {
				if (!a90) return;
				if (data.z6 < 1e4) return
			}
			var a93, dY = new dZ,
				a91 = 1e5 <= data.z6,
				a92 = dY.da(a90 ? (a91 ? "⚠️ " : "") + L(214) : L(215)),
				a94 = (a91 && (a92.style.color = "yellow"), a90 ? dY.di(L(216, [aZ.fo.yb(data.z6, .01, 0)])) : ((a93 = new dr({
					value: data.zV,
					b7: -1
				})).br.readOnly = !0, a93.br.type = "password", dY.dq(a93), dY.dq(new ds([new c6(L(8), function(br) {
					return br.textContent === L(8) ? (br.textContent = L(151), a93.br.type = "text") : (br.textContent = L(8), a93.br.type = "password"), !0
				}).button, new c6(L(148), function(br) {
					return aZ.e2.a8o(a93.br), aZ.e2.e3(br), !0
				}).button]))), dY.db(L(a90 ? 215 : 217)).style.marginTop = "0.75em", new dr({
					value: "",
					b7: -1
				}, 0, 0)),
				a95 = (a94.br.type = "email", a94.br.autocomplete = "email", a94.br.name = "email", a94.br.inputMode = "email", a94.br.spellcheck = !1, dY.dq(a94), dY.dq(new ds([new c6(L(218), function(br) {
					return dc.e5.rV({
						s2: 3,
						eJ: a94.br.value.trim().substring(0, 63)
					}), aZ.e2.e3(br), !0
				}).button])), a90 && dY.di(L(219)), dY.db(L(220)).style.marginTop = "0.75em", new dr({
					value: "",
					b7: -1
				}, 1));
			dY.dq(a95), dY.dq(new ds([new c6(L(221), function() {
				dc.e5.a8l({
					s2: 4,
					bh: "",
					value: Math.floor(+a95.br.value)
				}), bT.c4(8, bT.kU().pE, new ev(18))
			}).button])), dR.push(dY)
		}
	}
	this.show = function() {
		data.zc && li.a6P("account", data.bh), ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), a8N.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(data.username, [new c6("⬅️ " + L(1), function() {
		li.clear(), bT.dN()
	}), new c6(data.zc ? "🔄 " + L(125) : L(126), function() {
		bT.c4(8, data.zc ? bT.kU().pE : void 0, new ev(25, {
			s2: 0,
			bh: data.bh,
			s1: data.s1
		}))
	}, 0, 0, 1)]), a8N = new dO(ep.dP, function() {
		var dR = [];
		a8P(dR, 1), dR.push(function() {
				var dY = new dZ;
				dY.da(L(188)), data.zU && (dY.db("✅ " + L(189)).style.marginBottom = "0.75em");
				var fu = data.zR;
				fu < 1 ? (dY.db(L(190)), 0 === data.zQ ? dY.di(L(191)) : 1 === data.zQ ? dY.di(L(192)) : 2 === data.zQ ? dY.di(L(193)) : 3 === data.zQ ? dY.di(L(194)) : 4 === data.zQ ? dY.di(L(195)) : 5 === data.zQ ? dY.di(L(196)) : 6 ===
					data.zQ ? dY.di(L(197)) : dY.di(L(198))) : (dY.db(L(199)), fu = fu < 2 ? L(200) : fu < 61 ? 2 === fu ? L(201) : L(202, [fu - 1]) : fu < 84 ? 61 === fu ? L(203) : L(204, [fu - 60]) : fu < 255 ? 84 === fu ? L(205) :
					L(206, [fu - 83]) : L(207), dY.di(fu));
				{
					var dh, a8j;
					dY.dq(new a5S), data.zc && (dh = dY.di(), dY.dq(new ds([new c6(df.rf.eh(data.bh) ? L(208) : L(209), function(br) {
						return df.rf.a7m(data.bh) ? (br.textContent = L(208), a8j(1)) : (br.textContent = L(209), a8j(0)), !0
					}).button])), a8j = function(aq) {
						dh.textContent = aq ? L(210) : ""
					}, df.rf.eh(data.bh) && a8j(1), dY.dq(new a5S))
				}
				var kI = new dr({
					value: data.username,
					b7: -1
				});
				kI.br.readOnly = !0, dY.dq(kI), dY.dq(new ds([new c6(L(148), function(br) {
					return aZ.e2.a8o(kI.br), aZ.e2.e3(br), !0
				}).button])), data.zc ? (dY.dq(new a5S), dY.db(dc.i.dd("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", dY.dq(new ds([new c6(L(212), function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 0
					}), aZ.e2.e3(br), !0
				}, e8.a2S).button])), dY.dq(new ds([new c6(L(213), function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 1
					}), aZ.e2.e3(br), !0
				}, e8.a2S).button])), dY.dq(new ds([new c6("Cheater", function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 2
					}), aZ.e2.e3(br), !0
				}, e8.a2S).button])), dY.dq(new ds([new c6("False Reporter", function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 3
					}), aZ.e2.e3(br), !0
				}, e8.a2S).button])), (fu = "CRTOR" === (fu = df.dg.data[105].value) || "ADMIN" === fu) && (dY.dq(new ds([new c6("Block Account", function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 4
					}), aZ.e2.e3(br), !0
				}, e8.a8y).button])), dY.dq(new ds([new c6("Ban IP", function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 5
					}), aZ.e2.e3(br), !0
				}, e8.a8y).button])), dY.dq(new ds([new c6("Gold Seizure", function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 6
					}), aZ.e2.e3(br), !0
				}, e8.a8y).button])), dY.dq(new ds([new c6("Remove Punishments", function(br) {
					return dc.e5.a8l({
						s2: 3,
						bh: data.bh,
						value: 7
					}), aZ.e2.e3(br), !0
				}, e8.a8z).button])))) : dY.di(L(211));
				return dY
			}()),
			function(dR) {
				var dY, dh, a96, dj, a8k, a8m, e4;
				data.zc || ((dY = new dZ).da(L(222)), (dh = dY.di(data.zM.length + " / 160")).style.textAlign = "center", a96 = !0, (dj = new dk(0, 1, function(br) {
					br = br.target.value.length;
					dh.textContent = br + " / 160", 160 < br ? a96 && (a96 = !1, a8m.e7(1)) : a96 || (a96 = !0, a8m.e7(0))
				})).br.rows = 6, dj.br.style.fontSize = "1em", dj.dp(data.zM), dY.dq(dj), 0 !== data.zK ? (a8m = new c6(L(223), function() {
					if (!a96) return !0;
					bT.c4(8, bT.kU().pE, new ev(29, {
						s2: 1,
						eJ: dj.u3().substring(0, 160)
					}))
				}, 0, 0, 1), dY.dq(new ds([a8m.button])), dY.dq(new ds([new c6(1 === data.zK ? L(224) : L(225), function() {
					bT.c4(8, bT.kU().pE, new ev(29, {
						s2: 0,
						eJ: ""
					}))
				}, 0, 0, 1).button])), dY.di(1 === data.zK ? L(226, [data.zN - 1]) : L(227, [data.zN - 1])), dY.di(L(228, [data.zL]))) : (a8k = new c6(L(229), function() {
					if (!dj.br.readOnly) return !0;
					bT.c4(8, bT.kU().pE, new ev(29, {
						s2: 1,
						eJ: dj.u3().substring(0, 160)
					}))
				}, 1), a8m = new c6(L(13), function(br) {
					if (br.textContent === L(13)) {
						if (!a96) return !0;
						br.textContent = L(12), dj.br.readOnly = !0, a8k.e7(0), a8k.button.style.color = e8.eA
					} else e4();
					return !0
				}), dY.dq(new ds([a8m.button])), dY.di(L(228, [data.zL])), e4 = function() {
					a8m.button.textContent = L(13), dj.br.readOnly = !1, a8k.e7(1), a8k.button.style.color = e8.e9
				}, dY.dq(new ds([a8k.button]))), dR.push(dY))
			}(dR),
			function(dR) {
				var dY;
				data.zc && 0 !== data.zK && ((dY = new dZ).da(L(230)), dY.pz(data.zM), dY.dq(new ds([new c6(L(231, 0, "Report"), function(br) {
					return dc.i.e1(0) && (aZ.e2.e3(br), dc.e5.rT({
						s2: 5,
						bh: data.bh
					})), !0
				}, 0, 0, 1).button])), dR.push(dY))
			}(dR), dR.push(function() {
				var dY = new dZ,
					a8h = (dY.da(L(127)), dY.db(dc.i.dd("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(128), L(129), L(130), L(131), L(132), L(133), L(134), L(135), L(136), L(137), L(138), L(139), L(140), L(141)]),
					hI = data.zO;
				return dY.db(L(142) + aZ.fo.yb(data.z6, .01, 2) + "<br>" + L(143) + (hI + 1) + " / " + data.z5 + "<br>" + L(144) + a8h[function(hI, z6) {
					if (hI < 10) return 0;
					if (hI < 30) return 1;
					if (hI < 60) return 2;
					if (3e4 <= (z6 = gT.gU(z6, 100))) return 3;
					if (12e3 <= z6) return 4;
					if (7e3 <= z6) return 5;
					if (3e3 <= z6) return 6;
					if (1e3 <= z6) return 7;
					if (500 <= z6) return 8;
					if (200 <= z6) return 9;
					if (70 <= z6) return 10;
					if (20 <= z6) return 11;
					if (3 <= z6) return 12;
					return 13
				}(hI, data.z6)]), dY
			}()), data.zc && dR.push(function() {
				var dY = new dZ,
					kI = (dY.da(L(145)), dY.db(dc.i.dd("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new dr({
						value: df.dg.data[147].value,
						b7: -1
					}, 1, void 0, function(br) {
						df.dm.dn(147, a8j(br.target.value))
					})),
					a8k = (dY.dq(kI), new c6(L(146), function(br) {
						return kI.br.readOnly && dc.i.e1(0) && (aZ.e2.e3(br), e4(), dc.e5.a8l({
							s2: 0,
							bh: data.bh,
							value: parseInt(df.dg.data[147].value, 10)
						})), !0
					}, 1)),
					a8m = new c6(L(13), function(br) {
						return br.textContent === L(13) ? (br.textContent = L(12), kI.br.readOnly = !0, a8k.e7(0), a8k.button.style.color = e8.eA, df.dm.dn(147, kI.br.value), a8j(df.dg.data[147].value)) : e4(), !0
					}),
					dh = (dY.dq(new ds([a8m.button])), dY.di()),
					a8j = function(aq) {
						dh.innerHTML = bT.i.a8n(aq, df.dg.data[105].value, data.bh)
					},
					e4 = function() {
						a8m.button.textContent = L(13), kI.br.readOnly = !1, a8k.e7(1), a8k.button.style.color = e8.e9
					};
				return a8j(df.dg.data[147].value), dY.dq(new ds([a8k.button])), dY
			}());
		dR.push(function() {
			var dY = new dZ,
				kI = (dY.da(L(147)), new dr({
					value: data.bh,
					b7: -1
				})),
				a8p = (kI.br.readOnly = !0, dY.dq(kI), dY.dq(new ds([new c6(L(148), function(br) {
					return aZ.e2.a8o(kI.br), aZ.e2.e3(br), !0
				}).button])), dY.dq(new a5S), new dr({
					value: data.bh,
					b7: -1
				}));
			return dY.dq(a8p), dY.dq(new ds([new c6(L(149), function(br) {
				bT.c4(8, bT.kU().pE, new ev(25, {
					s2: 0,
					bh: a8p.br.value,
					s1: 0
				}))
			}).button])), dY
		}()), data.zc || (dR.push(function() {
			var dY = new dZ,
				a8q = (dY.da(L(150)), new dr(df.dg.data[106]));
			return a8q.br.readOnly = !0, a8q.br.type = "password", dY.dq(a8q), dY.dq(new ds([new c6(L(8), function(br) {
				return br.textContent === L(8) ? (br.textContent = L(151), a8q.br.type = "text") : (br.textContent = L(8), a8q.br.type = "password"), !0
			}).button, new c6(L(148), function(br) {
				return aZ.e2.a8o(a8q.br), aZ.e2.e3(br), !0
			}).button])), dY.dq(new ds([new c6(L(152), function() {
				bT.c4(8, bT.kU().pE, new ev(15))
			}).button])), dY.da(L(153), "0.8em"), dY.di(L(154)), dY.di(L(155)), dY.di(L(156)), dY
		}()), dR.push(function() {
			var dY = new dZ;
			return dY.da(L(157)), dY.dq(new ds([new c6(L(158), function() {
				bT.c4(6, bT.kU().pE)
			}).button])), dY.dq(new ds([new c6(L(159), function() {
				df.dm.dn(105, ""), bT.c4(8, bT.kU().pE, new ev(18))
			}).button])), dY.dq(new ds([new c6(L(160) + df.dg.data[105].value, function() {
				bT.c4(4, 0, new c5(L(161), L(162), !0, [new c6("⬅️ " + L(1), function() {
					bT.c4(7, bT.a2X(7).pE)
				})]))
			}, e8.a2S).button])), dY
		}()), dR.push(function() {
			function a8s(b7) {
				a8r[0].e7(0 === b7 ? e8.sa : e8.rg), a8r[1].e7(0 === b7 ? e8.sa : e8.a2S), a8r[2].e7(b7 === q2.q3.length - 1 || b7 < 5 ? e8.sa : e8.a2S)
			}
			var q2, a8r, dY = new dZ;
			dY.da(L(167)), dY.di(L(168)), df.i.a8u();
			return a8r = [new c6(L(169), function() {
				var b7 = Math.min(df.dg.data[117].value, q2.q3.length - 1);
				b7 < 1 || (b7 = df.i.rb(b7), df.dm.dn(105, b7.bh), df.dm.dn(106, b7.password), bT.c4(8, bT.kU().pE, new ev(18)))
			}, e8.sa, 1), new c6(L(165), function() {
				var b7 = Math.min(df.dg.data[117].value, q2.q3.length - 1);
				if (!(b7 < 1)) {
					q2.q3[b7].remove(), q2.q3.splice(b7, 1);
					for (var g = b7; g < q2.q3.length; g++) q2.q3[g].name = "" + g;
					df.i.ra(b7), b7 = df.dg.data[117].value, q2.q3[b7].textContent = q2.q3[b7].textContent.replace("⚪", "🟢"), a8s(b7)
				}
			}, e8.sa, 1), new c6(L(166), function() {
				var b7 = Math.min(df.dg.data[117].value, q2.q3.length - 1);
				if (b7 !== q2.q3.length - 1) {
					for (var g = q2.q3.length - 1; b7 < g; g--) q2.q3[g].remove(), q2.q3.splice(g, 1), df.i.ra(g);
					a8s(b7)
				}
			}, e8.sa, 1)], q2 = new uA(df.dg.data[117], a8s), a8s(0), q2.q3[0].style.marginTop = "0.5em", dY.q1(q2), dY.dq(new ds([a8r[0].button])), dY.dq(new ds([a8r[1].button])), dY.dq(new ds([a8r[2].button])), dY
		}()));
		return dR.push(function() {
				var dY = new dZ,
					a8h = (dY.da(L(173)), [L(174), L(175), L(176), L(177)]),
					hI = data.zP;
				return dY.db(L(178) + (data.fS / 100).toFixed(2) + "<br>" + L(143) + (hI + 1) + " / " + data.z5 + "<br>" + L(144) + a8h[hI < 10 ? 0 : hI < 50 ? 1 : hI < 200 ? 2 : 3]), dY
			}()), dR.push(function() {
				var dY = new dZ;
				return dY.da(L(170)), dY.db(L(171) + aZ.fo.yb(data.z2, .1, 1) + "<br>" + L(143) + (data.z3 + 1) + " / " + data.z5 + "<br>" + L(172) + data.z4), dY
			}()),
			function(dR) {
				var dY = new dZ,
					a97 = data.z9,
					a98 = (dY.da(L(232)), dY.db(L(233, [data.z7.length ? "[" + data.z7 + "]" : "-"])), dY.db(L(234, [aZ.fo.yb(a97, .01, 2)])), dY.db(L(235, [data.zB + 1 + " / " + data.z5])), data.zC),
					a99 = (dY.db(L(236, [aZ.fo.yb(a98, .1, 1)])), data.zE);
				dY.db(L(237, [a99])), dY.db(L(238, [aZ.fo.yb(a98 / Math.max(a99, 1), .1, 2)])), a97 = data.zA, dY.da(L(239), "0.8em"), dY.db(L(233, [data.z8.length ? "[" + data.z8 + "]" : "-"])), dY.db(L(234, [aZ.fo.yb(a97, .01, 2)])), a98 =
					data.zD, dY.db(L(236, [aZ.fo.yb(a98, .1, 1)])), a99 = data.zF, dY.db(L(237, [a99])), dY.db(L(238, [aZ.fo.yb(a98 / Math.max(a99, 1), .1, 2)])), dY.db(dc.i.dd("/wiki/clans"), "0.75em").style.marginTop = "0.8em", dR.push(dY)
			}(dR),
			function(dR) {
				var dY = new dZ;
				dY.da(L(240)), dY.db(L(178) + (data.zI / 10).toFixed(1) + "<br>" + L(144) + (data.zJ.length ? L(241, [data.zJ]) : L(242))), data.zc && dY.dq(new ds([new c6(L(243), function(br) {
					return dc.i.e1(0) && (aZ.e2.e3(br), dc.e5.rT({
						s2: 4,
						bh: data.bh
					})), !0
				}, 0, 0, 1).button]));
				dY.db(dc.i.dd("/wiki/clans"), "0.75em").style.marginTop = "0.8em", dR.push(dY)
			}(dR), dR.push(function() {
				var dY = new dZ;
				if (dY.da(L(185)), dY.db(L(186) + data.zG + "<br>" + L(143) + (data.zH + 1) + " / " + data.z5 + "<br>" + L(144) + lx.a8v(data.zH)), data.zc) {
					var kI = new dr({
							value: df.dg.data[157].value,
							b7: -1
						}, 1, void 0, function(br) {
							df.dm.dn(157, a8j(br.target.value))
						}),
						a8m = (kI.br.style.marginTop = "0.6em", dY.dq(kI), new c6(L(13), function(br) {
							return br.textContent === L(13) ? (br.textContent = L(12), kI.br.readOnly = !0, a8w[0].e7(0), a8w[1].e7(0), a8w[0].button.style.color = e8.eA, a8w[1].button.style.color = e8.eA, a8j(df.dg.data[157]
								.value)) : e4(), !0
						})),
						a8w = (dY.dq(new ds([a8m.button])), [new c6("−", function(br) {
							return kI.br.readOnly && dc.i.e1(0) && (aZ.e2.e3(br), e4(), dc.e5.a8l({
								s2: 2,
								bh: data.bh,
								value: gT.gn(parseInt(df.dg.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new c6("+", function(br) {
							return kI.br.readOnly && dc.i.e1(0) && (aZ.e2.e3(br), e4(), dc.e5.a8l({
								s2: 1,
								bh: data.bh,
								value: gT.gn(parseInt(df.dg.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						dh = dY.di(),
						a8j = function(aq) {
							return aq = aZ.aa.a7i(aq, 3, 32767), dh.textContent = L(187, [aq - 1, aq, df.dg.data[105].value]), aq
						};
					dY.dq(new ds([a8w[0].button, a8w[1].button]));
					for (var g = 0; g < 2; g++) a8w[g].button.style.fontSize = "1.6em";
					var e4 = function() {
						a8m.button.textContent = L(13), kI.br.readOnly = !1, a8w[0].e7(1), a8w[1].e7(1), a8w[0].button.style.color = e8.e9, a8w[1].button.style.color = e8.e9
					};
					a8j(df.dg.data[157].value)
				}
				return dY
			}()),
			function(dR) {
				var dY, a9B;
				data.zc && !data.zW || (0 === c9.id || data.zc || data.zW) && ((dY = new dZ).da("Patreon"), !data.zc && data.zX ? dY.dq(new ds([new c6(L(8), function() {
					dc.e5.rT({
						s2: 7,
						bh: data.bh
					}), data.zX = 0, bT.c4(7)
				}).button])) : data.zW ? (dY.db(L(244, [(data.zY / 100).toFixed(2)]) + "<br>" + L(245, [1 + data.zZ + " / " + data.za]) + "<br>" + L(246, [data.zb ? L(247) : L(248)])), data.zc || dY.dq(new ds([new c6(L(249),
				function() {
					dc.e5.rT({
						s2: 8,
						bh: data.bh
					}), data.zW = 0, df.dm.dn(160, 0), bT.c4(7)
				}).button]))) : (dY.db(L(250), "0.75em").style.marginBottom = "0.3em", dY.db("  • " + L(251), "0.75em").style.whiteSpace = "pre", dY.db("  • " + L(252), "0.75em").style.whiteSpace = "pre", dY.db("  • " + L(253),
						"0.75em").style.whiteSpace = "pre", dY.db(L(254), "0.75em").style.marginTop = "1.0em", dY.db(L(255), "0.75em").style.marginTop = "1.0em", dY.db("<a href='" + lj.a9A +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a9B = "https://www.patreon.com/oauth2/authorize?state=" + data.bh +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + dc.i.pB() + "/", dY.db(L(256), "0.75em").style.marginTop = "1.0em", dY.db("<a href='" + a9B +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.zc || (dY.dq(new a5S), dY.dq(new ds([new c6(L(151), function() {
						dc.e5.rT({
							s2: 6,
							bh: data.bh
						}), data.zX = 1, bT.c4(7)
					}).button])), dY.db(L(257), "0.75em").style.marginTop = "0.75em")), dR.push(dY))
			}(dR), dR.push(function() {
				var dY = new dZ,
					a8h = (dY.da(L(179)), [L(180), L(181), L(182), L(183), "Scout", L(184)]),
					hI = data.zS;
				return dY.db(L(178) + (data.zT / 100).toFixed(2) + "<br>" + L(143) + (hI + 1) + " / " + data.z5 + "<br>" + L(144) + a8h[hI < 3 ? 0 : hI < 20 ? 1 : hI < 100 ? 2 : hI < 500 ? 3 : hI < 2e3 ? 4 : 5]), dY.db(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", dY
			}()),
			function(dR) {
				var dY, q2, a8r, b7, a8s;
				data.zc || df.rf.get().length && ((dY = new dZ).da(L(163)), b7 = 0, a8s = function() {
					var a8t = df.rf.get().length;
					a8r[0].e7(b7 === a8t ? e8.sa : e8.rg), a8r[1].e7(b7 === a8t ? e8.sa : e8.a2S), a8r[2].e7(b7 === a8t || a8t - 1 <= b7 || b7 < 5 ? e8.sa : e8.a2S)
				}, a8r = [new c6(L(164), function() {
					bT.c4(8, void 0, new ev(25, {
						s2: 0,
						bh: df.rf.get()[b7],
						s1: 0
					}))
				}, e8.sa, 1), new c6(L(165), function() {
					df.rf.a7p(b7), q2.q3[b7].remove(), q2.q3.splice(b7, 1);
					for (var g = b7; g < q2.q3.length; g++) q2.q3[g].name = "" + g;
					df.rf.get().length && (b7 = Math.max(b7 - 1, 0), q2.q3[b7].textContent = q2.q3[b7].textContent.replace("⚪", "🟢")), a8s()
				}, e8.sa, 1), new c6(L(166), function() {
					for (var qh = q2.q3.length - 1; b7 < qh; qh--) df.rf.a7p(qh), q2.q3[qh].remove(), q2.q3.splice(qh, 1);
					a8s()
				}, e8.sa, 1)], a8s(), (q2 = new uA(df.rf.a7l(), function(g) {
					b7 = g, a8s()
				})).q3[0].style.marginTop = "0.5em", dY.q1(q2), dY.dq(new ds([a8r[0].button])), dY.dq(new ds([a8r[1].button])), dY.dq(new ds([a8r[2].button])), dR.push(dY))
			}(dR), a8P(dR, 0), dR
	}())
}

function pJ() {
	var a9C, a9D, bo, a9E = ["wss://", "/s50/", "/s51/", "/s52/"],
		a9F = 0;

	function pK() {
		dc.i.pK(a9C, a9D)
	}

	function a9L(br) {
		dc.a2B.a5j(a9C, new Uint8Array(br.data))
	}

	function a9M() {}

	function pW(br) {
		dc.i.pW(a9C, br)
	}
	this.d = function(b7, pE, pF) {
		a9C = b7, a9D = pE,
			function(pF) {
				pF = bw.a9J ? "ws://localhost:" + (7130 + a9C) + "/" : pF ? a9E[0] + "game.territorial.io/x0" + a9C + "/" : a9E[0] + dc.i.oq[a9C] + a9E[1 + bw.a9K];
				(bo = new WebSocket(pF)).binaryType = "arraybuffer", bo.onopen = pK, bo.onmessage = a9L, bo.onclose = pW, bo.onerror = a9M
			}(pF)
	}, this.a9H = function() {
		return bo.readyState === bo.CONNECTING
	}, this.e1 = function() {
		return bo.readyState === bo.OPEN
	}, this.p4 = function() {
		return a9F
	}, this.pN = function() {
		a9F = 1
	}, this.pH = function() {
		return this.a9H() || this.e1()
	}, this.pI = function(pE) {
		a9D = pE
	}, this.a9I = function() {
		return a9D
	}, this.send = function(cJ) {
		this.e1() && bo.send(cJ)
	}, this.close = function(pR) {
		this.pH() && (this.eB(), bo.close(pR))
	}, this.eB = function() {
		bo.onopen = null, bo.onmessage = null, bo.onclose = null, bo.onerror = null
	}
}

function mz() {
	var input;

	function a9N(br) {
		(br = br.target.files) && 0 < br.length && ld.a9Q(br[0])
	}

	function a9U(br) {
		var aH = new Image;
		aH.onload = a9V, aH.src = br.target.result
	}

	function a9V(br) {
		var br = br.target,
			p = br.width,
			r = br.height,
			a9W = df.dg.data[162].value,
			max = Math.min(a1.u4, a9W),
			a9W = (max = c9.id || ei.ej() ? Math.min(1400, a9W) : max) / Math.max(p, r);
		if (a9W < 1 && (p = Math.floor(a9W * p + .125), r = Math.floor(a9W * r + .125)), max < p || max < r || p < 10 || r < 10) a9W = "Invalid Image Dimensions!", c9.a2J ? c9.a2J.showToast(a9W) : alert(a9W);
		else {
			for (var max = document.createElement("canvas"), a9W = (max.width = p, max.height = r, max.getContext("2d")), a9Y = document.createElement("canvas"), a9Z = (a9Y.width = br.width, a9Y.height = br.height, a9Y.getContext("2d")), br = (a9Z
					.drawImage(br, 0, 0), a9Z.getImageData(0, 0, a9Y.width, a9Y.height)), a9Z = a9W.createImageData(p, r), src = br.data, a9c = a9Z.data, a9d = a9Y.width / p, a9e = a9Y.height / r, aG = 0; aG < r; aG++)
				for (var aF = 0; aF < p; aF++) {
					var a9f = Math.floor(aF * a9d),
						a9f = 4 * (Math.floor(aG * a9e) * a9Y.width + a9f),
						a9i = 4 * (aG * p + aF);
					a9c[a9i] = src[a9f], a9c[1 + a9i] = src[1 + a9f], a9c[2 + a9i] = src[2 + a9f], a9c[3 + a9i] = 255
				}
			a9W.putImageData(a9Z, 0, 0), 20 === bT.bU && bT.kU().a9V(max)
		}
	}
	this.d = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = a9N
	}, this.hX = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.a9O = function() {
		input.click()
	}, this.a9Q = function(a9R) {
		var bu = a9R.name.split("."),
			bu = bu[bu.length - 1].toLowerCase();
		"gif" !== bu && "jpg" !== bu && "jpeg" !== bu && "png" !== bu || ((bu = new FileReader).onload = a9U, bu.readAsDataURL(a9R))
	}
}

function a9j() {
	function a9x() {
		var id = lh.hY(3);
		return 0 === id ? {
			id: id,
			bh: lh.hY(30),
			c2: bH.kJ.a9z(hl.sF.sG(7))
		} : 1 === id ? {
			id: id,
			bh: lh.hY(30),
			a4z: lh.hY(3),
			value: lh.hY(30),
			target: lh.hY(30)
		} : 2 === id ? {
			id: id,
			bh: lh.hY(30),
			a4z: lh.hY(3)
		} : 3 === id ? {
			id: id,
			bh: lh.hY(30),
			a4z: lh.hY(3),
			value: lh.hY(4),
			target: lh.hY(30)
		} : 4 === id ? {
			id: id,
			bh: lh.hY(30),
			a4z: lh.hY(3),
			target: lh.hY(30)
		} : 5 === id ? {
			id: id,
			a4z: lh.hY(6)
		} : 6 === id ? {
			id: id,
			value: lh.hY(17)
		} : null
	}
	this.a5q = function(pD) {
		if (pD !== dc.i.os) dc.i.close(pD, 3239);
		else if (6 !== bi.o4()) dc.i.close(pD, 3271);
		else {
			bH.d();
			for (var g = 0; g < 4; g++) {
				var bJ = bH.i.bK[g],
					playerCount = (bJ.kn = lh.hY(10), bJ.bd = lh.hY(6), bJ.mapSeed = lh.hY(14), bJ.bM = lh.hY(4), bJ.kj = lh.hY(6), bJ.kk = lh.hY(14), bJ.kl = lh.hY(4), bJ.bb = lh.hY(1), bJ.kh = lh.hY(12), bJ.spawningSeed = lh.hY(14), lh.hY(16));
				bH.bI.bG[g] = lh.hY(16);
				for (var b8 = 0; b8 < playerCount; b8++) bH.bI.a9k(g, lh.hY(30), hl.sF.sG(5), lh.hY(4), lh.hY(30), lh.hY(7), lh.hY(16), lh.hY(18), lh.hY(11), lh.hY(12))
			}
			bT.c4(29), bH.i.a9l(!0)
		}
	}, this.a5y = function(pD) {
		if (pD !== dc.i.os) dc.i.close(pD, 3239);
		else if (bH.kF) {
			bH.i.kx[0] = lh.hY(20), bH.i.kx[1] = lh.hY(20);
			for (var a9m = lh.hY(16), b8 = 0; b8 < a9m; b8++) {
				var id = lh.hY(3);
				0 === id ? bH.bI.a9k(lh.hY(2), lh.hY(30), hl.sF.sG(5), 0, 1234566, 127, 0, lh.hY(18), 0, lh.hY(12)) : 1 === id ? bH.bI.a9n(lh.hY(16), lh.hY(2)) : 2 === id ? bH.bI.a9o(lh.hY(16), lh.hY(2), lh.hY(2)) : 3 === id ? bH.bI.a9p(lh.hY(
					16), lh.hY(2)) : 4 === id ? bH.bI.a9q(lh.hY(16), lh.hY(2), lh.hY(4), lh.hY(30), lh.hY(7), lh.hY(16), lh.hY(11), lh.hY(18)) : 5 === id && bH.bI.a9r(lh.hY(16), lh.hY(2), lh.hY(1))
			}
			for (var g = 0; g < 4; g++) {
				var bJ = bH.i.bK[g];
				if (bJ.kn = lh.hY(10), bJ.kj = lh.hY(6), bJ.kk = lh.hY(14), bJ.kl = lh.hY(4), 0 === bJ.kn) {
					if (bJ.or = lh.hY(10), bJ.bW = lh.hY(10), bH.qQ.bF(g)) return;
					bJ.bd = lh.hY(6), bJ.mapSeed = lh.hY(14), bJ.bM = lh.hY(4), bJ.bb = lh.hY(1), bJ.kh = lh.hY(12), bJ.spawningSeed = lh.hY(14), bJ.a9s.push(bJ.a9s[0]), bJ.a9s.shift()
				}
			}
			bH.i.a9t()
		} else dc.i.close(pD, 3251)
	}, this.a5z = function(pD) {
		if (pD !== dc.i.os) dc.i.close(pD, 3272);
		else if (bH.kF) {
			for (var a9u = lh.hY(4), bJ = bH.i.bK[a9u], a9v = bJ.a9v, jQ = (bJ.a9w = lh.hY(20), lh.hY(6)), g = 0; g < jQ; g++) {
				var a4y = a9x();
				bH.jU.a4x(a4y), a9v.push(a4y)
			}
			bH.i.a9y(a9u)
		} else dc.i.close(pD, 3273)
	}, this.a60 = function(pD) {
		pD !== dc.i.os ? dc.i.close(pD, 3276) : bH.kF ? bH.message.aA0(a9x()) : dc.i.close(pD, 3277)
	}
}

function mr() {
	var aH, go = !1,
		aA1 = !1,
		aA2 = -1e4,
		aA3 = -1,
		aA4 = 0;

	function resize(aAB) {
		aH = 0, lI.aAC() && (aA7(aAB) || go) && (go = !1, i9.resize(), lo.xd.resize(), lG.d(), lq.d(), lH.resize(), lC.resize(), lA.resize(), bT.resize(), 1 <= aO.cd ? (lE.resize(!1), lD.resize(), cs.resize(), ib.resize(), iJ.resize(), b3.resize(),
			ce.resize(), cU.resize(), lV.resize(), lB.resize(), jB.resize(), l9.resize(), gR.resize(), b5.resize(), lF.resize(), lt.resize(), ib.aAD()) : (bi.aAE(), bi.aAF()), cR.cZ = !0)
	}

	function aA6(aq) {
		return aq && 128 < aq ? Math.floor(aq) : 128
	}

	function aA7(aAB) {
		var p, r, aAH, s6, iL;
		if (!(0 < o.aA5)) return s6 = aA6(document.documentElement.clientWidth), iL = aA6(window.visualViewport && 2 !== c9.id ? window.visualViewport.height : document.documentElement.clientHeight), p = s6, r = iL, aAH = 0 !== c9.id || p < r ? 700 :
			1200, aAH = Math.min(aAH / ((p + r) / 2), 1), aAH = 0 === df.dg.data[1].value ? 2 * aAH / 3 : Math.min(aAH + (df.dg.data[1].value - 1) * (1 - aAH) / 2, 1), o.bv = (window.devicePixelRatio || 1) * aAH, __fx.hoveringTooltip
			.canvasPixelScale = o.bv, aAB && !aA1 ? (aA1 = !0, bT.removeChild(document.body, aA8)) : aA1 && (aA1 = !1, document.body.appendChild(aA8)), p = Math.floor(.5 + s6 * o.bv), r = Math.floor(.5 + iL * o.bv), p !== o.p || r !== o.r ? (o
				.p = p, o.r = r, o.min = aAJ(p, r), o.max = aAK(p, r), o.i8 = gT.gU(p + r, 2), o.a0b = p / r, aA8.width = p, aA8.height = r, aA8.style.width = s6 + "px", aA8.style.height = iL + "px", aA3 = cR.cQ + 1e3, 1) : void 0
	}
	this.p = 0, this.r = 0, this.min = 0, this.max = 0, this.i8 = 0, this.a0b = 1, this.bv = 1, this.aA5 = 0, this.g9 = function() {
		this.p = aA6(document.documentElement.clientWidth) + 2, this.r = aA6(document.documentElement.clientHeight) + 2
	}, this.d = function() {
		aH = 1, aA8 = document.getElementById("canvasA"), 2 === c9.id && (aA8.style.webkitUserSelect = "none"), (aB = aA8.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aA7(0)
	}, this.cT = function() {
		50 <= ++aH && resize(0), -1 === aA3 || cR.cQ < aA3 || (aA3 = -1, 2e3 * ++aA4 >= cR.cQ + 8e3 ? console.log("error 3748") : c9.cA.setState(15))
	}, this.nj = function(a1I) {
		go = !0, resize(a1I)
	}, this.aAA = function() {
		aA2 + 1e3 > cR.cQ || (aA2 = cR.cQ, resize(0))
	}
}

function a1W() {
	this.aAL = 32, this.aF = 0, this.aG = 0, this.aAM = 0, this.aAN = 0, this.aAO = 4, this.nz = null, this.aAP = new Int16Array(9), this.d = function() {
		this.aAM = 1 + gT.gU(a1.a2 - 1, this.aAL), this.aAN = 1 + gT.gU(a1.jg - 1, this.aAL), this.nz = new Array(this.aAM * this.aAN), aZ.ky.a6T(this.nz);
		var aF, aG, aAP = this.aAP,
			p = this.aAM;
		for (aF = -1; aF <= 1; aF++)
			for (aG = -1; aG <= 1; aG++) aAP[3 * (1 + aG) + 1 + aF] = aG * p + aF
	}, this.aAR = function(aAS, g) {
		return this.nz[g].push(aAS), this.nz[g].length - 1
	}, this.aAT = function(aAU, aAV, aAW) {
		var aAX, aAY, aAV = gq.aAZ(aAV),
			aAW = gq.aAZ(aAW);
		return aAV === aAW ? aAU : (aAX = this.nz[aAV].pop(), this.nz[aAV].length === aAU ? this.aAR(aAX, aAW) : (aAY = this.nz[aAV][aAU], this.nz[aAV][aAU] = aAX, a4.i.aAa[aAX] = aAU, this.aAR(aAY, aAW)))
	}
}

function nI() {
	this.aAb = new uK, this.aAc = new aAd, this.aAe = new aAf
}

function mj() {
	var aq, p, r, max, aAg, a7A, aAi, aAj, aAk, aAl, aAm, aAn, aAo, aAp, aAh = 1e4;

	function aAw(aAv, a79, a3) {
		var g;
		for (aAi[0] = aAv, g = 1; g < a3; g++) aAi[g] = aAi[g - 1] + a79, a79 = aAi[g] >= aAh ? (aAi[g] = aAh - 1, -a79) : aAi[g] < 0 ? (aAi[g] = 0, -a79) : (a79 += 16384 <= lW.random() ? a7A : -a7A) < -aAg ? -aAg : aAg < a79 ? aAg : a79
	}

	function aAy(aF, aG, aAz, a3) {
		(aAz ? function(aF, aG, a3) {
			var g;
			for (g = 0; g < a3; g++) aq[aG * p + aF + g] = aAi[g]
		} : function(aF, aG, a3) {
			var g;
			for (g = 0; g < a3; g++) aq[aG * p + aF + g * p] = aAi[g]
		})(aF, aG, a3)
	}

	function aB2(value, a3) {
		var g, wK, h1, a1I = value - aAi[a3 - 1];
		if (0 != a1I) {
			for (wK = 1 + gT.gU(Math.abs(a1I), a3 - 1), wK = a1I < 0 ? -wK : wK, aAi[a3 - 1] = value, h1 = (h1 = a3 - 1 - gT.gU(Math.abs(a1I), Math.abs(wK))) < 1 ? 1 : a3 - 2 < h1 ? a3 - 2 : h1, g = a3 - 2; h1 <= g; g--) aAi[g] += a1I - (a3 - 1 -
				g) * wK;
			(a1I < 0 ? function(a3) {
				var g;
				for (g = a3 - 2; 1 <= g; g--) aAi[g] < 0 && (aAi[g] = -aAi[g] - 1)
			} : function(a3) {
				var g;
				for (g = a3 - 2; 1 <= g; g--) aAi[g] >= aAh && (aAi[g] = 2 * aAh - aAi[g] - 1)
			})(a3)
		}
	}

	function aB5(a6f, a6g, a3) {
		for (var g = 0; g < a3; g++) a6f[g] = a6g[g]
	}

	function aB6(bu) {
		for (var g = 0; g < bu.length - 1; g++) bu[g] = bu[g + 1] - bu[g];
		bu[bu.length - 1] = bu[bu.length - 3]
	}

	function aB7(aB8, gap, xa) {
		aAj.push(aB8), aAk.push(gap), aAl.push(xa)
	}
	this.bj = function(rC) {
		! function(rC) {
			var g;
			for (p = rC[0], r = rC[1], aAg = rC[2], a7A = rC[3], aq = new Int16Array(p * r), max = r < p ? p : r, aAi = new Int16Array(max), aAj = [], aAk = [], aAl = [], aAm = new Array(p), aAn = new Array(r), g = p - 1; 0 <= g; g--) aAm[g] = !
			1;
			for (g = r - 1; 0 <= g; g--) aAn[g] = !1;
			aAo = new Int16Array(p), aAp = new Int16Array(r)
		}(rC),
		function(a3) {
			var aAv = lW.random() % aAh,
				a79 = lW.random() % (2 * aAg + 1) - aAg;
			aAw(aAv, a79, a3)
		}(max), aB5(aAp, aAi, r), aAy(0, 0, !0, p);
		var aF, aG, rC = aq[0],
			a3 = max,
			a79 = lW.random() % (2 * aAg + 1) - aAg;
		for (aAw(rC, a79, a3), aB5(aAo, aAi, p), aAy(0, 0, !1, r), aB6(aAo), aB6(aAp), aAw(aq[p - 1], aAo[p - 1], r), aAy(p - 1, 0, !1, r), aAw(aq[p * (r - 1)], aAp[r - 1], p), aB2(aq[p * r - 1], p), aAy(0, r - 1, !0, p), aAm[p - 1] = aAm[0] = !
			0, aAn[r - 1] = aAn[0] = !0, aB7(0, p, !0), aB7(0, r, !1), ! function() {
				var aBA, aB8;
				for (;;) {
					if (aBA = function() {
							var g, aBA = aAj.length - 1;
							for (g = aBA - 1; 0 <= g; g--) aAk[g] > aAk[aBA] && (aBA = g);
							return aBA
						}(), aAk[aBA] < 5) return;
					aB8 = aAj[aBA] + gT.gU(aAk[aBA], 2), (aAl[aBA] ? function(aF) {
						var a3, aBD, g, a5g = 0,
							aBE = 0;
						for (; aBE < r - 1;) {
							for (g = a5g + 1; g < r; g++)
								if (aAn[g]) {
									aBE = g;
									break
								} a3 = aBE - a5g + 1, aAw(aq[aF + p * a5g], 0 === a5g ? aAo[aF] : aAi[aBD - 1] - aAi[aBD - 2], a3), aB2(aq[aBE * p + aF], a3), aAy(aF, a5g, !1, a3), aBD = a3, a5g = aBE
						}
						aAm[aF] = !0
					} : function(aG) {
						var a3, aBD, g, a5g = 0,
							aBE = 0;
						for (; aBE < p - 1;) {
							for (g = a5g + 1; g < p; g++)
								if (aAm[g]) {
									aBE = g;
									break
								} a3 = aBE - a5g + 1, aAw(aq[aG * p + a5g], 0 === a5g ? aAp[aG] : aAi[aBD - 1] - aAi[aBD - 2], a3), aB2(aq[aG * p + aBE], a3), aAy(a5g, aG, !0, a3), aBD = a3, a5g = aBE
						}
						aAn[aG] = !0
					})(aB8), aB7(aB8, aAj[aBA] + aAk[aBA] - aB8, aAl[aBA]), aAk[aBA] = aB8 - aAj[aBA] + 1
				}
			}(), aF = 0; aF < p; aF++)
			if (!aAm[aF])
				for (aG = 0; aG < r; aG++) aAn[aG] || ! function(aF, aG) {
					var value = aq[aG * p + aF - 1] + aq[(aG - 1) * p + aF],
						iq = 2;
					aAm[aF + 1] && (iq++, value += aq[aG * p + aF + 1]);
					aAn[aG + 1] && (iq++, value += aq[(aG + 1) * p + aF]);
					aq[aG * p + aF] = gT.gU(value, iq)
				}(aF, aG)
	}, this.jn = function() {
		return aq
	}, this.o3 = function() {
		aq = null
	}
}

function aBG() {
	var aBH = null;
	this.tx = 0, this.aBI = function() {
		var aq = df.dg.data[5].value;
		aBH = "px " + aq, "system-ui" !== aq && (aBH += ", system-ui"), this.tx = aBJ(32, 32, ["a", "b", "m"], 200, aBH)
	}, this.a80 = function(p, r) {
		var aH = document.createElement("canvas");
		return aH.width = p, aH.height = r, aH
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(i0, p, r) {
		return i0.getImageData(0, 0, p, r)
	}, this.iA = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aBH : 1 === type ? "bold " + size + aBH : 2 === type ? "lighter " + size + aBH : 3 === type ? "italic " + size + aBH : 4 === type ? "oblique " + size + aBH : 5 === type ? "small-caps " +
			size + aBH : "small-caps bold " + size + aBH
	}, this.textAlign = function(aA, id) {
		aA.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(aA, id) {
		aA.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.jV = function(br, code, color) {
		color = this.em(i9.a6Q) + " solid " + (color || e8.e9);
		5 === (code = code || 5) ? br.style.border = color : 4 === code ? br.style.borderLeft = color : 2 === code ? br.style.borderBottom = color : 6 === code ? br.style.borderRight = color : br.style.borderTop = color
	}, this.aBK = function(br, aF, aG, p, r) {
		br = br.style;
		br.left = this.aBL(aF), br.top = this.aBL(aG), br.width = this.aBL(p), br.height = this.aBL(r)
	}, this.a6R = function(aq) {
		return 1 + aq * c9.cA.i7()
	}, this.en = function(ik, y) {
		return ik * this.a6R(void 0 === y ? .5 : y) * o.i8 / o.bv
	}, this.aBM = function(ik, y) {
		return ik * this.a6R(void 0 === y ? .5 : y) * o.i8
	}, this.s5 = function(ik, y, aBN) {
		return this.a6R(y) * Math.min(ik * o.i8, aBN * o.p) / o.bv
	}, this.em = function(aq) {
		return aq.toFixed(1) + "px"
	}, this.aBL = function(aq) {
		return this.aBP(aq).toFixed(1) + "px"
	}, this.aBP = function(aq) {
		return aq / o.bv
	}, this.aBQ = function(aBR) {
		for (var eJ = "<ul>", a3 = aBR.length, g = 0; g < a3; g++) eJ += "<li>" + aBR[g][0] + ": <a href='" + aBR[g][1] + "' target='_blank'>" + aBR[g][0] + "</a></li>";
		return eJ += "</ul>"
	}, this.aBS = function(a9B) {
		return "<a href='" + a9B + "' target='_blank'>" + a9B + "</a>"
	}, this.a8o = function(br) {
		navigator.clipboard && navigator.clipboard.writeText(br.value)
	}, this.e3 = function(br) {
		var fh = br.textContent;
		aZ.fo.kR(fh, "✔") || (1 === fh.length ? br.textContent = "✔" : br.textContent = fh + " ✔", setTimeout(function() {
			br.textContent = fh
		}, 500))
	}, this.measureText = function(eJ) {
		return aB.measureText(eJ).width
	}, this.a0U = function(aBT) {
		aBT.style.overflowX = "auto", aBT.style.overflowY = "hidden", aBT.style.whiteSpace = "nowrap", aBT.addEventListener("wheel", function(br) {
			Math.abs(br.deltaY) < Math.abs(br.deltaX) || (this.scrollLeft += br.deltaY, this.a0g = this.scrollLeft, br.preventDefault())
		}), aBT.addEventListener("scroll", function() {
			this.a0g = this.scrollLeft
		})
	}
}

function mE() {
	var a7A, aBU, aBV, a79, aBW, aBX, aBY, aBZ, aBa, aBb, aBc, a8I, aBd, aBe = !1,
		aBf = !1;

	function aBg(aBh) {
		a8I = cR.cQ, aBV = a79 = aBU = 0, aBW = (aBd = 33) / aBh, a7A = 1 / (aBh / aBd / 4), aBX = (o.p / 2 + t) / m, aBY = (o.r / 2 + v) / m, aBZ = m
	}

	function aBl(g) {
		var s; - 1 !== g && (g = gq.aBm(a4.i.a6[g]), s = gq.wt(g) - 15, g = gq.wu(g) - 15, l5.aBj(s, g, 29 + s, 29 + g))
	}

	function aBt(aBu) {
		Math.abs(Math.log(aBc / aBZ)) < .125 && (aBc = aBu * aBZ)
	}

	function aBs(s, u, w, x) {
		aBa = (s + w + 1) / 2, aBb = (u + x + 1) / 2;
		w = o.p / (w - s + 1), s = o.r / (x - u + 1);
		aBc = .9 * (w < s ? w : s)
	}
	this.oB = function() {
		return aBe
	}, this.aBi = function() {
		aBg(1), this.aBj(0, 0, a1.a2 - 1, a1.jg - 1), aO.cp || aO.i6 || this.a0p(aO.b2, 3e3, !0, .3)
	}, this.aBk = function(player, a20) {
		aBl(a4.ec.a3Z(player, a20))
	}, this.a0p = function(player, aBh, aBn, zoom) {
		aO.zs || aBe && !aBn && aBf || (0 === fZ.f8[player] ? aBl(a4.ec.aBo(player)) : (ib.ic = !1, aBf = aBn, aBg(aBh), function(player) {
			aBa = (fZ.f4[player] + fZ.f6[player] + 1) / 2, aBb = (fZ.f5[player] + fZ.f7[player] + 1) / 2
		}(player), function(zoom, player) {
			var vP = fZ.f6[player] - fZ.f4[player] + 1,
				player = fZ.f7[player] - fZ.f5[player] + 1,
				b8 = o.p / vP,
				fi = o.r / player,
				b8 = (aBc = b8 < fi ? b8 : fi, 0 !== zoom ? zoom : vP < 20 && player < 20 ? .5 : .9);
			aBc *= b8, aBt(7 / 8)
		}(zoom, player), aBe = !0, lR.aBr()))
	}, this.a0h = function(aBh) {
		aO.i6 || aO.zs || (ib.ic = !1, aBf = !1, aBg(aBh), aBs(0, 0, a1.a2 - 1, a1.jg - 1), aBt(7 / 8), aBe = !0, lR.aBr())
	}, this.aBj = function(s, u, w, x) {
		aBe = !1, aBs(s, u, w, x), m = aBc, ib.aBv(aBa, o.p / 2), ib.aBw(aBb, o.r / 2), ls.aBx(), cR.cZ = !0
	}, this.eN = function() {
		return !(aBe && aBf || (aBe = !1))
	}, this.cT = function() {
		var aBz, aC0, bZ, aC3;
		aBe && (aBU < .5 ? a79 < aBW && (a79 += aBW * a7A, aBV = aBU) : 1 - aBV < aBU && (a79 = (a79 -= aBW * a7A) < aBW * a7A ? aBW * a7A : a79), a8I = a8I >= cR.cQ ? cR.cQ - 1 : a8I, bZ = cR.cQ - a8I, aBU = 1e3 < bZ || 1 < (aBU += a79 * bZ /
			aBd) ? 1 : aBU, a8I = cR.cQ, bZ = m, aBz = t, aC0 = v, bZ = (m = aBZ * Math.pow(aBc / aBZ, aBU)) / bZ, aC3 = 1 - (aBZ * Math.pow(aBc / aBZ, 1 - aBU) - aBZ) / (aBc - aBZ), ib.aBv(aBX + aC3 * (aBa - aBX), o.p / 2), ib.aBw(aBY +
			aC3 * (aBb - aBY), o.r / 2), b5.zoom(bZ, (aBz * bZ - t) / (1 - bZ), (aC0 * bZ - v) / (1 - bZ)), ls.aBx(), 1 <= aBU && (aBe = !1, cj.wx = !0), cR.cZ = !0)
	}
}

function n0() {
	var aC4 = 0,
		aC5 = 0,
		aC6 = 0,
		aC7 = 0,
		gl = -1;

	function aCB(h1) {
		if (gl === h1) return !1;
		if (-1 === (gl = h1)) aC4 = 0, b3.aCC(aC4, 0);
		else {
			if (h3.h4(h1)) return aC6 = h3.h5(h1), aCD = fZ.fA[aC6] - fZ.fK[aC6], (4 !== aC4 || aCD !== aC5) && (aC4 = 4, aC5 = aCD, b3.aCC(aC4, aCD), !0);
			if (h3.sl(h1)) return 3 !== aC4 && (aC4 = 3, b3.aCC(aC4, 0), !0);
			if (h3.aCE(h1)) return 2 !== aC4 && (aC4 = 2, b3.aCC(aC4, 0), !0);
			var aCD = a4.ec.aCG(ei.gs, ei.gv);
			if (-1 === aCD) return 1 !== aC4 && (aC4 = 1, b3.aCC(aC4, 0), !0);
			h1 = a4.i.aCI[aCD];
			if (aC6 = a4.i.aCJ[aCD], aC7 = a4.i.a7[aCD] >> 3, 5 === aC4 && h1 === aC5) return !1;
			aC4 = 5, aC5 = h1, b3.aCC(aC4, h1)
		}
		return !0
	}
	this.d = function() {
		aC7 = aC6 = aC5 = aC4 = 0, gl = -1
	}, this.cT = function(go) {
		var gt;
		!go && ei.ej() || (go = gq.gr(ei.gs), gt = gq.gu(ei.gv), gq.gw(go, gt) ? (go = gq.h0(go, gt), aCB(gq.h2(go))) : aCB(-1))
	}, this.aC9 = function() {
		var aCK, aCD, aCF, aCH;
		if (0 !== aC4 && 2 !== aC4)
			if (ei.ej()) {
				if (1 !== aC4 && 3 !== aC4) {
					if (4 === aC4) return void(aCD = fZ.fA[aC6] - fZ.fK[aC6], aC5 === aCD || (aC5 = aCD, b3.aCC(aC4, aCD)));
					(aCF = a4.ec.a3Z(aC7, aC6)) < 0 ? (aC4 = 1, b3.aCC(aC4, 0)) : (aCH = a4.i.aCI[aCF]) !== aC5 && (aC5 = aCH, b3.aCC(aC4, aCH))
				}
			} else if (1 === aC4) - 1 !== (aCF = a4.ec.aCG(ei.gs, ei.gv)) && (aC4 = 5, aC5 = a4.i.aCI[aCF], b3.aCC(aC4, aC5));
		else if (3 === aC4) h3.h4(gl) && (aC4 = 4, aCK = h3.h5(gl), aC5 = fZ.fA[aCK] - fZ.fK[aCK], b3.aCC(aC4, aC5));
		else if (4 === aC4) {
			if (h3.h4(gl)) return void(aCK = h3.h5(gl), aCD = fZ.fA[aCK] - fZ.fK[aCK], aC5 === aCD || (aC5 = aCD, b3.aCC(aC4, aCD)));
			aC4 = 3, b3.aCC(aC4, 0)
		} else - 1 === (aCF = a4.ec.aCG(ei.gs, ei.gv)) ? (aC4 = 1, b3.aCC(aC4, 0)) : (aCH = a4.i.aCI[aCF]) !== aC5 && (aC5 = aCH, b3.aCC(aC4, aCH))
	}
}

function mm() {
	var aCL, bu;
	this.d = function() {
		for (var g = (bu = new Uint16Array(101)).length - 1; 0 <= g; g--) bu[g] = gT.gU(32768 * g, 100);
		this.oD(0)
	}, this.value = function(fg) {
		return bu[fg]
	}, this.oC = function() {
		return gT.gU(aCL - 1, 2)
	}, this.oD = function(l0) {
		aCL = 2 * l0 % 32768 + 1
	}, this.random = function() {
		return aCL = 167 * aCL % 32768
	}, this.qi = function(aCM) {
		return gT.gU(aCM * this.random(), 32768)
	}, this.aCN = function(fg) {
		return 0 !== fg && this.random() < this.value(fg)
	}, this.wo = function(b8, fi) {
		return b8 + this.qi(fi - b8)
	}
}

function mQ() {
	var aCO, aCP, aCQ, aCR, aCS, aCT, aCU, aCV, aCW, aCX, aCY, aCZ, aCa, aCb, aCc, aCd, aCe, aCf, aCg, aCh, aCi, aCj, position, aCk, aCl, aCm, aCn, aCo, aCp = 1,
		v7 = 1,
		aCq = "";
	var leaderboardHasChanged = true;
	this.playerPos = aO.b2;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => vj[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(vj[aO.b2]);
	}

	function aCs() {
		aCU.clearRect(0, 0, aCO, a0C),
			aCU.fillStyle = aCo ? e8.aCv : e8.aCw,
			aCU.fillRect(0, 0, aCO, aCZ),
			aCU.fillStyle = e8.iM,
			aCU.fillRect(0, aCZ, aCO, a0C - aCZ);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			vj[aO.b2]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aCj = -1;
		if (__fx.leaderboardFilter.enabled && aCj >= __fx.leaderboardFilter.filteredLeaderboard.length) aCj = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aCx(ownClanIndex - position, e8.ka);
			})() :
			(playerPos >= position && aCx(playerPos - position, e8.ka),
				0 !== vj[aO.b2] && 0 === position && aCx(0, e8.aCy))
		),
		-1 !== aCj && aCx(aCj, e8.aCz),
			aCU.fillStyle = e8.iM,
			//console.log("drawing", aCj),
			aCU.clearRect(0, a0C - __fx.leaderboardFilter.tabBarOffset, aCO, __fx.leaderboardFilter.tabBarOffset);
		aCU.fillRect(0, a0C - __fx.leaderboardFilter.tabBarOffset, aCO, __fx.leaderboardFilter.tabBarOffset);
		aCU.fillStyle = e8.e9,
			aCU.fillRect(0, aCZ, aCO, 1),
			aCU.fillRect(0, a0C - __fx.leaderboardFilter.tabBarOffset, aCO, 1),
			__fx.leaderboardFilter.drawTabs(aCU, aCO, a0C - __fx.leaderboardFilter.tabBarOffset, e8.ka),
			aCU.fillRect(0, 0, aCO, i9.tu),
			aCU.fillRect(0, 0, i9.tu, a0C),
			aCU.fillRect(aCO - i9.tu, 0, i9.tu, a0C),
			aCU.fillRect(0, a0C - i9.tu, aCO, i9.tu), aCU.font = aCP, aZ.e2.textBaseline(aCU, 1), aZ.e2.textAlign(aCU, 1), aCU.fillText(aCq, Math.floor((aCO + aCZ - 22) / 2), Math.floor(aCX + aCQ / 2));
		__fx.playerList.drawButton(aCU, 12, 12, aCZ - 22);
		var b8, y = playerPos < position + aCS - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) y = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aCS)
				position = (rivalsCount > aCS ? rivalsCount : aCS) - aCS;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aCS; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, fZ.f8[repId], fZ.f1[repId], fZ.f2[repId]]);
					fZ.f8[repId] = rivalsEntry.territory;
					fZ.f1[repId] = "[" + rivalsEntry.clan + "]";
					fZ.f2[repId] = 0;
				}
				for (aCU.font = aCR, aZ.e2.textAlign(aCU, 0), b8 = aCS - y; 0 <= b8; b8--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[b8 + position];
					if (rivalsEntryLeft !== undefined)
						aD0(rivalsEntryLeft.representativeId), aD1(b8, b8 + position, rivalsEntryLeft.representativeId);
				}
				for (aZ.e2.textAlign(aCU, 2), b8 = aCS - y; 0 <= b8; b8--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[b8 + position];
					if (rivalsEntryRight !== undefined)
						aD0(rivalsEntryRight.representativeId), aD2(b8, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					fZ.f8[entry[0]] = entry[1];
					fZ.f1[entry[0]] = entry[2];
					fZ.f2[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aCS)
				position = (result.length > aCS ? result.length : aCS) - aCS;
			//if (position >= result.length) position = result.length - 1;
			for (aCU.font = aCR, aZ.e2.textAlign(aCU, 0), b8 = aCS - y; 0 <= b8; b8--) {
				const pos = result[b8 + position];
				if (pos !== undefined)
					aD0(wO[pos]), aD1(b8, pos, wO[pos]);
			}
			for (aZ.e2.textAlign(aCU, 2), b8 = aCS - y; 0 <= b8; b8--) {
				const pos = result[b8 + position];
				if (pos !== undefined)
					aD0(wO[pos]), aD2(b8, wO[pos]);
			}
		} else {
			for (aCU.font = aCR, aZ.e2.textAlign(aCU, 0), b8 = aCS - y; 0 <= b8; b8--)
				aD0(wO[b8 + position]), aD1(b8, b8 + position, wO[b8 + position]);
			for (aZ.e2.textAlign(aCU, 2), b8 = aCS - y; 0 <= b8; b8--)
				aD0(wO[b8 + position]), aD2(b8, wO[b8 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == y && (aD0(aO.b2), aZ.e2.textAlign(aCU, 0), aD1(aCS - 1, vj[aO.b2], aO.b2), aZ.e2.textAlign(aCU, 2), aD2(aCS - 1, aO.b2)), 0 === position && (y = .7 * aCa / lI.get(4).height, aCU.setTransform(y,
				0, 0, y, Math.floor(aCb + .58 * aCa + .5 * y * lI.get(4).width), Math.floor(aCX + aCQ + .4 * aCa)), aCU.imageSmoothingEnabled = !0, aCU.drawImage(lI.get(4), -Math.floor(lI.get(4).width / 2), -Math.floor(lI.get(4).height / 2)), aCU
			.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aD0(player) {
		aO.qX && (aCU.fillStyle = e.aD4[e.a8[player]])
	}

	function aCx(g, aD5) {
		aCU.fillStyle = aD5, g = aCS - 1 < g ? aCS - 1 : g;
		aD5 = Math.floor((g === aCS - 1 ? 2 : 0 === g ? 1.15 : 1) * aCa), aD5 = g === aCS - 2 ? Math.floor(aCZ + 9.15 * aCa) - Math.floor(aCZ + 8.15 * aCa) : aD5;
		aCU.fillRect(0, Math.floor(aCZ + (g + (0 === g ? 0 : .15)) * aCa), aCO, aD5)
	}

	function aD1(a4O, a4k, g) {
		aCU.fillText(aCf[a4k], aCb, Math.floor(aCX + aCQ + (a4O + .5) * aCa)), 1 === fZ.f2[g] && (aCU.font = "italic " + aCR);
		a4k = Math.floor(aCX + aCQ + (a4O + .5) * aCa);
		aCU.fillText(fZ.f1[g], aCc, a4k), 0 !== fZ.f2[g] && (aCU.font = aCR), g < aO.aP && 2 !== fZ.f2[g] || aCU.fillRect(aCc, a4k + .35 * aCp, aCe[g], Math.max(1, .1 * aCp))
	}

	function aD2(a4O, g) {
		aCU.fillText(fZ.f8[g], aCd, Math.floor(aCX + aCQ + (a4O + .5) * aCa))
	}
	this.d = function() {
		var g;
		for (bT.i.ru[0] = 0, aCn = aCm = aCk = 0, aCo = aCl = !1, aCj = -1, aCS = c9.cA.i7() ? 6 : 10, v7 = (position = 0) === (v7 = df.dg.data[11].value) ? 10 : 1 === v7 ? 5 : 1, aCi = !1, aCg = new Uint16Array(aCS + 1), aCh = new Uint32Array(
				aCS + 1), aCW = aO.aR, wO = new Uint16Array(aCW), vj = new Uint16Array(aCW), g = aCW - 1; 0 <= g; g--) wO[g] = g, vj[g] = g;
		this.resize(!0), aCe = new Uint16Array(aO.aR);
		var aCr = Math.floor(aCO - aCc - aCb - aCV);
		for (aCf = new Array(aO.aR), aCU.font = aCR, g = aO.aR - 1; 0 <= g; g--) aCf[g] = g + 1 + ".", fZ.f1[g] = aZ.i0.a3u(fZ.f0[g], aCR, aCr), aCe[g] = Math.floor(aCU.measureText(fZ.f1[g]).width);
		aCs()
	}, this.resize = function(d) {
		if (a0C = c9.cA.i7() ? (aCO = Math.floor(.335 * o.i8), Math.floor(aCS * aCO / 8)) : (aCO = Math.floor(.27 * o.i8), Math.floor(aCS * aCO / 10)), aCO = Math.floor(.97 * aCO), (aCT = document.createElement("canvas")).width = aCO, aCT
			.height = a0C, aCU = aCT.getContext("2d", {
				alpha: !0
			}), aCX = .025 * aCO, aCQ = .16 * aCO, aCY = 0 * aCO, aCZ = Math.floor(.45 * aCX + aCQ), aCa = (a0C - aCQ - 2 * aCX - aCY) / aCS,
			aCT.height = a0C += aCa, __fx.leaderboardFilter.tabBarOffset = Math.floor(aCa * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a0C - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aCO,
			aCP = aZ.e2.iA(1, Math.floor(.55 * aCQ)), aCp = Math.floor((c9.cA.i7() ? .67 : .72) * aCa), aCR = aZ.e2.iA(0, aCp), aCU.font = aCR, aCb = Math.floor(.04 * aCO), aCc = Math.floor((c9.cA.i7() ? .195 : .18) * aCO), aCV = Math.floor(aCU
				.measureText("00920600").width), aCU.font = aCP, aCd = aCO - aCb, !d) {
			aCU.font = aCR;
			for (var g = aO.aR - 1; 0 <= g; g--) aCe[g] = Math.floor(aCU.measureText(fZ.f1[g]).width);
			aCs()
		}
		aCq = aZ.i0.a3u(L(258), aCP, .96 * aCO)
	}, this.aCt = function() {
		return aCO
	}, this.cw = function(go, aCu) {
		(aCu || aCi && (go || cR.gS() % v7 == 0)) && (aCi = !1, aCs())
	}, this.cT = function() {
		! function() {
			for (var b8 = aCW - 1; 0 <= b8; b8--) 0 === fZ.f3[wO[b8]] && ! function(b8) {
				var aDD = wO[b8];
				aCW--;
				for (var g = b8; g < aCW; g++) wO[g] = wO[g + 1], vj[wO[g]] = g;
				wO[aCW] = aDD, vj[wO[aCW]] = aCW
			}(b8)
		}();
		for (var aDB, eN = aCW - 1, b8 = 0; b8 < eN; b8++) fZ.f8[wO[b8]] < fZ.f8[wO[b8 + 1]] && (aDB = wO[b8], wO[b8] = wO[b8 + 1], wO[b8 + 1] = aDB, vj[wO[b8]] = b8, vj[wO[b8 + 1]] = b8 + 1);
		! function() {
			for (var fh = aCi, y = (aCi = !0, vj[aO.b2] >= aCS - 1 ? aCS - 2 : aCS - 1), g = y; 0 <= g; g--)
				if (aCg[g] !== wO[g] || aCh[g] !== fZ.f8[wO[g]]) return;
			(y != aCS - 2 || aCg[aCS] === vj[aO.b2] && aCh[aCS] === fZ.f8[aO.b2]) && (aCi = fh)
		}();
		for (var g = aCS - 1; 0 <= g; g--) aCg[g] = wO[g], aCh[g] = fZ.f8[wO[g]];
		aCg[aCS] = vj[aO.b2], aCh[aCS] = fZ.f8[aO.b2];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.ia = function(aF, aG) {
		if (tq(aF, aG)) {
			if (__fx.utils.isPointInRectangle(aF, aG, i9.gap + 12, i9.gap + 12, aCZ - 22, aCZ - 22)) __fx.playerList.display(bT.f0);
			else {
				if (aG - i9.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aF - i9.gap);
				aF = aDF(aG);
				0 <= aF ? (aCk = cR.cQ, aCl = !0, aCm = aCn = aF, ei.aDG() && (aF = aDH(-1, aCn, aCS), aCj !== (aF = aF === aCS ? -1 : aF)) && (aCj = aF, aCs(), cR.cZ = !0)) : (aCo && (aCo = !1, aCs(), cR.cZ = !0), bT.c4(10, 0, new rc({
					aDI: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aCs(), cR.cZ = !0
	};

	function aDF(aG) {
		return (aG -= i9.gap + aCZ) < 0 ? Math.floor(aG / aCa) - 1 : aG < (aCS - 1) * aCa ? Math.floor(aG / aCa) : aG < a0C - aCZ ? aCS - 1 : (aG -= a0C - aCZ, aCS + Math.floor(aG / aCa))
	}

	function tq(aF, aG) {
		return aF >= i9.gap && aF < i9.gap + aCO && aG >= i9.gap && aG < i9.gap + a0C
	}
	this.io = function(aF, aG) {
		var fh, aDE;
		if (__fx.utils.isPointInRectangle(aF, aG, i9.gap + 12, i9.gap + 12, aCZ - 22, aCZ - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aF, aG, i9.gap, i9.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aF - i9.gap)) return aDE = aDF(aG), aF = tq(aF, aG), aG = !(!(aDE < 0 && aF) || ei.aDG()), aCl ? (fh = position, (position = aDH(0, position += aCm - aDE, aO.aR - aCS)) !== fh ? (aCo = aG,
			aDE = aDH(-1, aCm = aDE, aCS), aCj = aDE = aDE !== aCS && aF ? aDE : -1, aCs(), cR.cZ = !0) : aCo !== aG && (aCo = aG, aCs(), cR.cZ = !0), !0) : (aDE = (aDE = aDH(-1, aDE, aCS)) === aCS || !aF || ei.aDG() ? -1 : aDE, (aCj !==
			aDE || aCo !== aG) && (aCj = aDE, aCo = aG, aCs(), cR.cZ = !0))
	}, this.aDL = function(aF, aG) {
		if (!aCl) return !1;
		aCl = !1;
		var aDE = aDF(aG);
		var isEmptySpace = false;
		return ei.aDG() && -1 !== aCj && (aCj = -1, aCs(), cR.cZ = !0), cR.cQ - aCk < 350 && aCn === aDE && -1 !== (aDE = (aDE = aDH(-1, aDE, aCS)) !== aCS && tq(aF, aG) ? aDE : -1) && (aF = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aDE + position] === undefined, __fx.leaderboardFilter.rivalsData[aDE + position]?.representativeId ?? aO.b2) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), wO[__fx.leaderboardFilter.filteredLeaderboard[aDE + position] ?? (isEmptySpace = true, vj[aO.b2])]) : wO[aDE + position]),
			aDE === aCS - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : vj[aO.b2]) >=
			position + aCS - 1 && (aF = aO.b2), !isEmptySpace && aO.qX && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aF, fZ.f0, aO.cq), 0 === fZ.f3[aF] || isEmptySpace || aO.cp && !aO.cq && !aO.i6 &&
			aF !== aO.b2 || l5.a0p(aF, 800, !1, 0)), !0
	}, this.im = function(aF, aG, deltaY) {
		var aDM;
		return !(aCl || aO.zs || (aDM = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !tq(aF, aG)) || (aF = (aF = aDH(-1, aDF(aG), aCS)) === aCS || ei.aDG() ? -1 : aF, 0 < deltaY ? position < aO.aR - aCS && (position += Math.min(aO.aR - aCS -
			position, aDM), aCj = aF, aCs(), cR.cZ = !0) : 0 < position && (position -= Math.min(position, aDM), aCj = aF, aCs(), cR.cZ = !0), 0))
	}, this.k = function() {
		aB.drawImage(aCT, i9.gap, i9.gap)
	}
}

function aDN() {
	this.ai = function(player, gz) {
		l6.aDO(player, gq.wt(gz), gq.wu(gz)) && (cR.cZ = !0), aO.cq && this.cT()
	}, this.cT = function() {
		aO.cp = !1;
		for (var g = 0; g < aO.aP; g++) 0 !== fZ.f3[g] && 0 === fZ.f8[g] && l6.aDP(g);
		0 !== fZ.f3[aO.b2] ? (ac.az[7] = fZ.f8[aO.b2], ac.az[8] = fZ.fA[aO.b2], iJ.iT(), cs.a3s(), aO.i6 || l5.aBj(fZ.f4[aO.b2] - 5, fZ.f5[aO.b2] - 5, fZ.f6[aO.b2] + 5, fZ.f7[aO.b2] + 5), lU.d()) : lF.show(!1, !1, !1, !0), b3.y7(18), b5.cv(), b5
			.cw(!0), h.i.aDQ(), l9.eB(), aO.cu = null, cj.wy = !0, cj.tH(), aO.cq && c9.cA.setState(1)
	}
}

function mU() {
	var aDR, aDS, aDT, aDU, aDV, aDW, aDX, aDY, aDZ, aDa, aDb, nk, aDc, aDd = 1,
		aDe = 0,
		aDf = 0;

	function aDh(aDi) {
		aDi ? aDc = (aDc + 1) % dc.i.op : (dc.i.close(aDc, 3280), aDd ? aDd = 0 : (aDf = 1 - aDf, 0 === (aDe = (aDe + 1) % 2) && (aDc = (aDc + 1) % dc.i.op, dc.i.close(aDc, 3280)))), nk = cR.cQ, lH.p7 = aDf, dc.i.oy(aDc, 4, 1) && dc.kO.aDj(aDc)
	}

	function aDl() {
		0 === aDc ? bz.pT(3249) : aDh()
	}

	function aDt(aG, aDs, kn) {
		var s = Math.floor((o.p - aDU) / 2) + aDX,
			w = s + Math.floor(kn * (aDU - 2 * aDX));
		aB.lineWidth = aDs, aB.beginPath(), aB.moveTo(s, aG), aB.lineTo(w, aG), aB.lineTo(Math.floor(s - aDX + kn * aDU), aG + aDT), aB.lineTo(s - aDX, aG + aDT), aB.closePath()
	}
	this.aDg = 1, this.p9 = 0, this.p7 = 0, this.d = function() {
		bi.setState(6), aDR = 0, aDS = 1, aDY = "rgba(0,220,120,0.4)", aDZ = "rgba(0,0,0,0.8)", this.resize(), cR.cZ = !0, aDd = 1, aDe = 0, aDc = this.aDg - 1, aDf = 0 === this.p9 ? bw.pA ? 1 : 0 : this.p9 - 1, aDh(1)
	}, this.resize = function() {
		aDU = Math.floor((c9.cA.i7() ? .5 : .25) * o.i8), aDV = aDU + 12, aDT = Math.floor(.125 * aDU), aDX = 3 * aDT, aDW = Math.floor(.225 * aDU), aDb = Math.floor(.3 * aDT), aDa = aZ.e2.iA(0, aDb)
	}, this.aDk = function(pD) {
		pD === aDc && aDl()
	}, this.ia = function(aF, aG) {
		var s = Math.floor((o.p - aDV) / 2),
			u = Math.floor(.5 * (o.r - i9.gap - aDT - aDW)) + aDT + i9.gap;
		return s < aF && aF < s + aDV && u < aG && aG < u + aDW && (this.aDn(), lG.io(aF, aG, !1), !0)
	}, this.aDn = function() {
		dc.i.kM(3260), bT.i.c8()
	}, this.cT = function() {
		6 === bi.o4() && (cR.cQ > nk + 12e3 && aDl(), 100 < (aDR += .07 * aDS * (aDR < 16 ? 5 + aDR : 84 < aDR ? 105 - aDR : 17)) ? (aDR = 100, aDS = -1) : aDR < 0 && (aDR = 0, aDS = 1), aDY = "rgba(0," + Math.floor(190 - 1.9 * aDR) + "," + Math
			.floor(120 - 1.2 * aDR) + "," + (.4 + .004 * aDR) + ")", aDZ = "rgba(0," + Math.floor(1.9 * aDR) + "," + Math.floor(1.2 * aDR) + "," + (.8 - .004 * aDR) + ")", cR.cZ = !0)
	}, this.k = function() {
		var aF = Math.floor((o.p - aDV) / 2),
			aG = Math.floor(.5 * (o.r - i9.gap - aDT - aDW));
		! function(title, aG, aDs, kn) {
			aB.fillStyle = aDZ, aDt(aG, aDs, 1), aB.fill(), aB.fillStyle = aDY, aDt(aG, aDs, kn), aB.fill(), aB.strokeStyle = e8.e9, aDt(aG, aDs, 1), aB.stroke(),
				function(aDv, aG) {
					aZ.e2.textAlign(aB, 1), aZ.e2.textBaseline(aB, 1), aB.font = aDa, aB.fillStyle = e8.e9, aB.fillText(aDv, Math.floor(.5 * o.p), Math.floor(aG + .58 * aDT))
				}(title, aG)
		}(L(259), aG, 3, aDR / 100),
		function(aF, aG, p, r, kG) {
			aB.fillStyle = e8.aDr, aB.fillRect(aF, aG, p, r), aB.lineWidth = 3, aB.strokeStyle = e8.e9, aB.strokeRect(aF, aG, p, r);
			var a3 = Math.floor(.3 * r);
			aZ.e2.textAlign(aB, 1), aZ.e2.textBaseline(aB, 1), aB.font = aZ.e2.iA(0, a3), aB.fillStyle = e8.e9, aB.fillText(kG, Math.floor(aF + p / 2), Math.floor(aG + r / 2 + .1 * a3))
		}(aF, aG + aDT + i9.gap, aDV, aDW, L(1))
	}
}

function aDw() {
	this.ta = function(aDx, b7, aDy) {
		var tJ = aDx.height,
			a9 = aZ.e2.a80(tJ, tJ),
			aA = aZ.e2.getContext(a9);
		return function(p, aA, aDy) {
			aA.fillStyle = aDy, aA.beginPath(), aA.arc(p / 2, p / 2, .47 * p, 0, 2 * Math.PI), aA.fill()
		}(tJ, aA, aDy), aA.drawImage(aDx, -b7 * tJ, 0), a9
	}, this.xq = function(aE0) {
		var aA, pi, tJ = aE0.height;
		return aE0.width === tJ && (pi = (aA = aZ.e2.getContext(aE0, !0)).getImageData(0, 0, tJ, tJ), aZ.aE1.aE2(pi.data, tJ, tJ, .9), aA.putImageData(pi, 0, 0)), aE0
	}
}

function ma() {
	var aE3 = new Uint16Array(aO.aR),
		aE4 = 0;

	function aE9(a2B, aE7) {
		var aH = cR.gS();
		return 3213 <= aH ? 4 + gT.gU(100 * aE7, gN.a3y(a2B)) : (a2B = 1 + gT.gU(aO.qZ, 300), aH < 357 ? 2 + gT.gU(100 * aE7, a2B) : aH < 714 ? 2 + gT.gU(100 * aE7, 4 * a2B) : aH < 1071 ? 2 + gT.gU(100 * aE7, 10 * a2B) : aH < 2142 ? 2 + gT.gU(100 *
			aE7, 30 * a2B) : 2 + gT.gU(100 * aE7, 100 * a2B))
	}

	function aE8(a2B) {
		return aO.cq || 4284 <= cR.gS() || aZ.aa.b0(a2B)
	}
	this.d = function() {
		aE3.fill(0), aE4 = 15
	}, this.aE5 = function(gG) {
		var player = aO.b2;
		return !!aZ.aa.a7e(player, gG) && !(!aZ.aa.a7T(player, aZ.aa.iN(player, iJ.iO()), gG) || (player = gG, gG = gD.gE[0], !aE8(player) && aE3[player] + aE9(player, gG) > aE4))
	}, this.ai = function(a2B, aE7) {
		if (!aE8(a2B)) {
			aE7 = aE9(a2B, aE7);
			if (aE3[a2B] + aE7 > aE4) return !1;
			aE3[a2B] += aE7
		}
		return !0
	}, this.cT = function() {
		cR.gS() % 100 == 99 && (cR.gS() < 1071 ? aE4 += 4 : cR.gS() < 2142 ? aE4 += 6 : cR.gS() < 3213 ? aE4 += 8 : aE4 += 10)
	}
}

function mc() {
	var aEB;

	function aED(player) {
		var hI, aEF;
		return aZ.aa.b0(player) && player < aO.aP ? 0 : (hI = aEB[gT.gU((aO.aR - 1) * fZ.f8[player], aO.qZ)], cR.gS() < 1920 && (hI = Math.max(gT.gU(100 * (13440 - 6 * cR.gS()), 1920), hI)), aEF = gN.a3y(player), fZ.fA[player] > aEF && (hI -= gT.gU(
			2 * hI * (fZ.fA[player] - aEF), aEF)), Math.min(Math.max(hI, 0), 700))
	}

	function aEQ(ik) {
		for (var f8 = fZ.f8, bD = bB.bD, g = bB.bC - 1; 0 <= g; g--) {
			var fg = bD[g];
			aZ.aa.ab(fg, gT.gU(ik * f8[fg], 32))
		}
	}

	function aEN() {
		var fa = aO.b2;
		gD.aEU[0] = fZ.fA[fa] - fZ.fK[fa]
	}

	function aEP(b7) {
		var fa = aO.b2,
			fa = fZ.fA[fa] - fZ.fK[fa] - gD.aEU[0];
		gN.aEA += fa, ac.az[b7] += fa
	}
	this.aEA = 0, this.nh = function() {
		for (var a3 = aO.aR, g = (aEB = new Uint16Array(a3), 0); g < a3; g++) aEB[g] = 100 + aEC(gT.gU(25600 * g, a3 - 4), 9)
	}, this.d = function() {
		(this.aEA = 0) === aO.data.iIncomeType ? this.gO = aED : 1 === aO.data.iIncomeType ? this.gO = function(player) {
			return gT.gU(aO.data.iIncomeValue * aED(player), 64)
		} : this.gO = function(player) {
			return gT.gU(aO.data.iIncomeData[player] * aED(player), 64)
		}
	}, this.cT = function() {
		if (cR.gS() % 10 == 9 && (gN.aEA = 0, function() {
				aEN();
				for (var bD = bB.bD, fA = fZ.fA, g = bB.bC - 1; 0 <= g; g--) {
					var fg = bD[g],
						aEO = gT.gU(gN.gO(fg) * fA[fg], 1e4);
					aZ.aa.ab(fg, Math.max(aEO, 1))
				}
				aEP(9)
			}(), function() {
				if (0 !== aO.data.aIncomeType) {
					if (aEN(), 1 === aO.data.aIncomeType)
						for (var f8 = fZ.f8, bD = bB.bD, ik = aO.data.aIncomeValue, g = bB.bC - 1; 0 <= g; g--) {
							var fg = bD[g];
							aZ.aa.ab(fg, gT.gU(ik * f8[fg], 128))
						} else 2 === aO.data.aIncomeType && function() {
							for (var f8 = fZ.f8, bD = bB.bD, ik = aO.data.aIncomeData, g = bB.bC - 1; 0 <= g; g--) {
								var fg = bD[g];
								aZ.aa.ab(fg, gT.gU(ik[fg] * f8[fg], 128))
							}
						}();
					aEP(18)
				}
			}(), cR.gS() % 100 == 99)) {
			if (aEN(), 0 === aO.data.tIncomeType) aEQ(32);
			else if (1 === aO.data.tIncomeType) aEQ(aO.data.tIncomeValue);
			else
				for (var f8 = fZ.f8, bD = bB.bD, ik = aO.data.tIncomeData, g = bB.bC - 1; 0 <= g; g--) {
					var fg = bD[g];
					aZ.aa.ab(fg, gT.gU(ik[fg] * f8[fg], 32))
				}
			aEP(8)
		}
	}, this.a3y = function(player) {
		return Math.min(100 * fZ.f8[player], aO.aEG)
	}, this.aEH = function(player, gG) {
		lz.a2U(player, gG, gD.gE[0], 0), aZ.aa.ab(gG, gD.gE[0]), ac.gF(player, gG), b5.vC(player, gD.gE[0] + gD.gE[1]), b5.vE(gG, gD.gE[0]), aZ.aa.a7b(player)
	}, this.wS = function() {
		for (var a3 = bB.bC, aEI = bB.bD, aj = 0, g2 = fZ.fA, g = 0; g < a3; g++) aj += g2[aEI[g]];
		return aj
	}, this.wU = function(aEJ) {
		for (var fg, a3 = bB.bC, aEI = bB.bD, aj = 0, g2 = fZ.fA, t1 = e.t1, g = 0; g < a3; g++) t1[fg = aEI[g]] === aEJ && (aj += g2[fg]);
		return aj
	}
}

function nJ() {
	this.eE = new a2g, this.dg = new eF, this.dm = new aEV, this.i = new aEW, this.rf = new a7j, this.d = function() {
		this.dg.d(), (new oT).d(), this.rf.d(), this.i.aEX()
	}
}

function kB(ix, aEY, aEZ, aEa) {
	var self;
	this.eb = document.createElement("span"), (self = this).eb.textContent = ix, self.eb.style.color = e8.e9, self.eb.style.position = "absolute", self.eb.style.font = "inherit", aEa ? self.eb.style.bottom = "0.06em" : self.eb.style.top = "0.12em",
		aEZ ? self.eb.style.left = "0.2em" : self.eb.style.right = "0.2em", self.eb.style.fontSize = "0.6em", self.eb.style.pointerEvents = "none", self.eb.style.whiteSpace = "pre", aEY.style.position = "relative", aEY.style.overflow = "hidden", aEY
		.appendChild(self.eb)
}

function aEV() {
	this.dn = function(b7, value) {
		2 !== df.dg.data[b7].type && (value = Math.floor(value)), df.dg.data[b7].value !== value && (df.dg.dt(b7, value), 0 === b7 ? (bT.c7(), jF.d(), bT.c4(2)) : 1 === b7 ? o.nj(1) : 2 === b7 ? o.nj(0) : 5 === b7 && (aZ.e2.aBI(), o.nj(0)))
	}, this.a2G = function() {
		for (var data = df.dg.data, g = 0; g < 100; g++) data[g] && df.dg.dt(g, data[g].du);
		aZ.e2.aBI(), o.nj(1)
	}, this.a2H = function() {
		for (var data = df.dg.data, g = 0; g < data.length; g++) data[g] && df.dg.dn(g, data[g].du)
	}, this.aEb = function() {
		for (var fi = df.dg, g = 128; g < 135; g++) fi.dt(g, fi.data[g].du)
	}, this.ze = function(data) {
		df.dm.dn(109, data.s1), df.dm.dn(107, data.z2), df.dm.dn(108, data.z3), df.dm.dn(112, data.z4), df.dm.dn(111, data.z5), df.dm.dn(113, data.z6), df.dm.dn(135, data.z7), df.dm.dn(136, data.z8), df.dm.dn(137, data.z9), df.dm.dn(138, data
			.zA), df.dm.dn(139, data.zB), df.dm.dn(141, data.zC), df.dm.dn(142, data.zD), df.dm.dn(143, data.zE), df.dm.dn(144, data.zF)
	}
}

function mk() {
	var nr, aEc, aEd, aEe, ow = !1;

	function aEf() {
		ow = !0, nr = -1, aEc = new Array(4);
		for (var g = 3; 0 <= g; g--) aEc[g] = !1;
		var aEg = Math.floor(1 + .02 * o.min);
		aEd = new Array(4), (aEe = new Array(4))[1] = aEe[3] = aEd[0] = aEd[2] = 0, aEe[0] = aEd[3] = -aEg, aEd[1] = aEe[2] = aEg
	}

	function aEi() {
		if (-1 !== nr)
			if (0 !== aO.cd && l5.eN()) {
				for (var aEk = !1, g = 3; 0 <= g; g--) aEc[g] && (aEk = !0, t += aEd[g], v += aEe[g], b5.io(aEd[g], aEe[g]), ib.aAD());
				aEk ? cR.cZ = !0 : lR.aBr()
			} else lR.aBr()
	}
	this.aEh = function(b7) {
		0 !== aO.cd && l5.eN() && (ow || aEf(), aEc[b7] = !0, -1 === nr) && (nr = setInterval(aEi, 20), aEi())
	}, this.aEj = function(b7) {
		if (0 !== aO.cd && (ow || aEf(), aEc[b7] = !1, -1 !== nr)) {
			for (var aEk = !1, g = 3; 0 <= g; g--) aEk = aEk || aEc[g];
			aEk || this.aBr()
		}
	}, this.aBr = function() {
		if (ow && -1 !== nr) {
			for (var g = 3; 0 <= g; g--) aEc[g] = !1;
			clearInterval(nr), nr = -1
		}
	}
}

function mw() {
	this.a9k = function(player) {
		l4.ga(player), aO.a3o++, fZ.f2[player] = 2, fZ.fI[player] = lu.aAc.aEl(), player === aO.b2 && (lF.show(!1, !1), cs.a3v(), fM.on.fX()), b5.b6(player)
	}
}

function nW() {
	function aEn(br) {
		var bu, br = br.target.files;
		br && 0 < br.length && (br = br[0], "json" === (bu = br.name.split("."))[bu.length - 1].toLowerCase()) && ((bu = new FileReader).onload = aEw, bu.readAsText(br))
	}

	function aEw(br) {
		var aEz;
		aO.cd || (br = JSON.parse(br.target.result), aEz = aO.data = new ba, aF0(br, aEz, "mapType", 0, 2), aF0(br, aEz, "mapProceduralIndex", 0, 255), aF0(br, aEz, "mapRealisticIndex", 0, 255), aF0(br, aEz, "mapSeed", 0, 16383), function(aEy, aEz,
				y, max) {
				aEy = aEy[y];
				aEz[y] = aF6(aEy) ? aEy.slice(0, max) : aEz[y]
			}(br, aEz, "mapName", 20), function(aEy, aEz, y) {
				var hv;
				2 === aEz.mapType && (!aF6(aEy = aEy[y]) || aEy.length <= 20 ? aEz.mapType = 0 : ((hv = new Image).onload = function() {
					d0.hw.hx(hv, 1), hv.onload = null, hv = null
				}, hv.src = aEy))
			}(br, aEz, "canvas"), aF0(br, aEz, "passableWater", 0, 1), aF0(br, aEz, "passableMountains", 0, 1), aF0(br, aEz, "playerCount", 1, 512), aF0(br, aEz, "humanCount", 1, 1), aF0(br, aEz, "selectedPlayer", 0, 0), aF0(br, aEz, "gameMode",
				0, 1), aF0(br, aEz, "playerMode", 0, 0), aF0(br, aEz, "battleRoyaleMode", 0, 0), aF0(br, aEz, "numberTeams", 0, 8), aF0(br, aEz, "isZombieMode", 0, 0), aF0(br, aEz, "isContest", 0, 0), aF0(br, aEz, "isReplay", 0, 0), aF3(br, aEz,
				"elo", 16, 2, 16383), aF0(br, aEz, "colorsType", 0, 1), aF0(br, aEz, "colorsPersonalized", 0, 1), aF3(br, aEz, "colorsData", 32, 512, 262143), aF0(br, aEz, "selectableColor", 0, 1), aF3(br, aEz, "teamPlayerCount", 16, 9, 512),
			aF0(br, aEz, "neutralBots", 0, 1), aF0(br, aEz, "botDifficultyType", 0, 3), aF0(br, aEz, "botDifficultyValue", 0, 15), aF3(br, aEz, "botDifficultyTeam", 8, 9, 15), aF3(br, aEz, "botDifficultyData", 8, 512, 15), aF0(br, aEz,
				"spawningType", 0, 2), aF0(br, aEz, "spawningSeed", 0, 16383), aF3(br, aEz, "spawningData", 16, 1024, 4095), aF0(br, aEz, "selectableSpawn", 0, 1), aF0(br, aEz, "playerNamesType", 0, 2),
			function(aEy, aEz, y, size, max) {
				var a6f = aEy[y];
				if (Array.isArray(a6f)) {
					for (var a6g = new Array(size), a3 = Math.min(a6f.length, size), g = 0; g < a3; g++) a6g[g] = aF6(a6f[g]) ? a6f[g].slice(0, max) : "";
					a6g.fill("", a3), aEz[y] = a6g
				}
			}(br, aEz, "playerNamesData", 512, 20), aF0(br, aEz, "selectableName", 0, 1), aF0(br, aEz, "aIncomeType", 0, 2), aF0(br, aEz, "aIncomeValue", 0, 255), aF3(br, aEz, "aIncomeData", 8, 512, 255), aF0(br, aEz, "tIncomeType", 0, 2), aF0(
				br, aEz, "tIncomeValue", 0, 255), aF3(br, aEz, "tIncomeData", 8, 512, 255), aF0(br, aEz, "iIncomeType", 0, 2), aF0(br, aEz, "iIncomeValue", 0, 255), aF3(br, aEz, "iIncomeData", 8, 512, 255), aF0(br, aEz, "sResourcesType", 0, 2),
			aF0(br, aEz, "sResourcesValue", 0, 2047), aF3(br, aEz, "sResourcesData", 16, 512, 2047), bT.c7(), bT.i.ru[0] = 0, bT.c4(19))
	}

	function aF0(aEy, aEz, y, min, max) {
		aEy = aEy[y];
		aEz[y] = "number" == typeof aEy && min <= aEy && aEy <= max ? Math.floor(aEy) : aEz[y]
	}

	function aF6(eJ) {
		return "string" == typeof eJ
	}

	function aF3(aEy, aEz, y, aF7, size, max) {
		var a6f = aEy[y];
		if (Array.isArray(a6f)) {
			for (var a6g = new(8 === aF7 ? Uint8Array : 16 === aF7 ? Uint16Array : Uint32Array)(size), a3 = Math.min(a6f.length, size), g = 0; g < a3; g++) a6g[g] = gT.gn(a6f[g], 0, max);
			aEz[y] = a6g
		}
	}
	this.aEm = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aEn, input.click()
	}, this.aEo = function() {
		for (var aEr, aEu, wd = aO.data, keys = Object.keys(wd), aEp = {}, g = 0; g < keys.length; g++) {
			var key = keys[g];
			wd[key] instanceof Uint8Array || wd[key] instanceof Uint16Array || wd[key] instanceof Uint32Array ? aEp[key] = Array.from(wd[key]) : aEp[key] = wd[key]
		}
		aEp.canvas = 2 === aEp.mapType && aEp.canvas ? aEp.canvas.toDataURL() : null, aEr = aEp, aEr = JSON.stringify(aEr, null, 2), aEr = new Blob([aEr], {
			type: "application/json"
		}), (aEu = document.createElement("a")).href = URL.createObjectURL(aEr), aEu.download = "tt_scenario.json", aEu.click()
	}
}

function aF8() {
	var ep, a8N, dR;
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), a8N.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(L(260), [new c6("⬅️ " + L(1), function() {
		bT.c4(7, bT.a2X(7).pE)
	}), new c6(L(169), function() {
		df.dm.dn(105, hl.hq.a0G(a8N.aFA[0].py[0].br.value, 5)), df.dm.dn(106, hl.hq.a0G(a8N.aFA[1].py[0].br.value, 15)), bT.c4(8, bT.a2X(7).pE, new ev(18))
	})]), a8N = new dO(ep.dP, ((dR = []).push(function() {
		var dY = new dZ;
		return dY.da(L(147)), dY.dq(new dr({
			value: "",
			b7: -1
		})), dY
	}()), dR.push(function() {
		var dY = new dZ,
			a8q = (dY.da(L(150)), new dr({
				value: "",
				b7: -1
			}));
		return a8q.br.type = "password", dY.dq(a8q), dY.dq(new ds([new c6(L(8), function(br) {
			return br.textContent === L(8) ? (br.textContent = L(151), a8q.br.type = "text") : (br.textContent = L(8), a8q.br.type = "password"), !0
		}).button])), dY
	}()), dR.push(function() {
		var dY = new dZ;
		return dY.da(L(153)), dY.di(L(261)), dY.di(L(262)), dY.di(L(263)), dY
	}()), dR))
}

function a1V() {
	this.aFC = 512, this.aFD = 8, this.a5 = 0, this.aFE = 0, this.a7 = new Uint16Array(this.aFC), this.a6 = new Uint32Array(this.aFC), this.aFF = new Uint16Array(this.aFC), this.aCI = new Uint32Array(this.aFC), this.aAa = new Uint16Array(this.aFC),
		this.aCJ = new Uint16Array(this.aFC), this.aFG = new Uint8Array(this.aFC), this.aFH = new Uint8Array(this.aFC), this.aFI = new Array(this.aFC), this.aFJ = new Uint16Array(this.aFC), this.a5G = new Uint8Array(aO.aR), this.aFK =
		new Uint16Array(this.aFD * aO.aR), this.d = function() {
			this.a5 = 0, this.aFE = 0, this.a5G.fill(0), this.aFI.fill(null)
		}, this.aAR = function(player) {
			var aM = gD.gE[0],
				a1Y = gD.xH[1],
				a4J = gD.bu[0],
				aFL = this.aFE,
				a3 = this.a5,
				aAV = gq.aFM(a4J[0]),
				qA = this.a5G[player],
				qB = (player << 3) + qA;
			this.a7[a3] = qB, this.a6[a3] = aAV, this.aFF[a3] = 0, aM < 60 && (aZ.aa.a3O(player, 60 - aM), aM = 60), this.aCI[a3] = aM, this.aAa[a3] = a4.nz.aAR(a3, gq.aAZ(aAV)), this.aCJ[a3] = aFL, this.aFG[a3] = a1Y, this.aFH[a3] = 0, this.aFI[
				a3] = a4J, this.aFJ[a3] = 0, this.aFE = (aFL + 1) % 65536, this.a5G[player] = qA + 1, this.aFK[qB] = a3, this.a5++, a4.a1Y.aFN(player, a4J[a4J.length - 1], a1Y, aFL, aM)
		}, this.cT = function() {
			a4.a1Y.cT();
			for (var fg = aO.b2, fh = a4.ec.ap(fg), ig = (! function(ig) {
					for (var aFS, a6 = ig.a6, aCI = ig.aCI, aFH = ig.aFH, aFF = ig.aFF, aAa = ig.aAa, aFI = ig.aFI, aFJ = ig.aFJ, ig = ig.a5, a0 = a1.a2 << 4, g = ig - 1; 0 <= g; g--) {
						var aFT = a6[g],
							a4J = aFI[g],
							aFU = aFJ[g],
							aAV = gq.aFM(a4J[aFU]),
							aAW = gq.aFM(a4J[aFU + 1]),
							aFV = aAV % a0,
							aAV = ~~((aAV + .5) / a0),
							aFX = aAW % a0,
							aFY = ~~((aAW + .5) / a0),
							aFZ = aFX - aFV,
							aFa = aFY - aAV,
							bZ = Math.max(~~Math.sqrt(aFZ * aFZ + aFa * aFa + .5), 1),
							aCH = aCI[g],
							aCH = (aCH = aFH[g] ? 4e4 : 25e4 + Math.min(20 * aCH, 3e5) + Math.min(aCH >> 3, 5e4), aFF[g] + Math.max(~~((aCH + .5) / bZ), 1));
						65535 <= aCH ? aFU + 2 < a4J.length ? (aFJ[g] = aFU + 1, a6[g] = aFS = function(g, aFb, aFV, aFW, aFU, bZ, a4J, a0) {
							aFb = Math.min(aFb - 65535, 65535);
							var a4J = gq.aFM(a4J[aFU + 2]),
								aFU = a4J % a0 - aFV,
								a4J = ~~((a4J + .5) / a0) - aFW,
								aFd = Math.max(~~Math.sqrt(aFU * aFU + a4J * a4J + .5), 1);
							return aFb = Math.min(Math.floor((bZ * aFb + .5) / aFd), 65534), a4.i.aFF[g] = aFb, aFV + gT.gU(aFb * aFU, 65535) + a0 * (aFW + gT.gU(aFb * a4J, 65535))
						}(g, aCH, aFX, aFY, aFU, bZ, a4J, a0)) : (a6[g] = aFS = aAW, aFF[g] = 65535) : (aFF[g] = aCH, a6[g] = aFS = aFV + gT.gU(aCH * aFZ, 65535) + a0 * (aAV + gT.gU(aCH * aFa, 65535))), aAa[g] = a4.nz.aAT(aAa[g], aFT,
							aFS)
					}
				}(this), ! function(ig) {
					if (cR.gS() % 2 == 1) {
						var g, qh, aj, fi, aH, aFe, tn, aFf, qj, s, u, aAV, aFi, aFg, aFk, qk, a3 = ig.a5,
							a6 = ig.a6,
							a7 = ig.a7,
							aCI = ig.aCI,
							aFH = ig.aFH,
							nz = a4.nz.nz,
							cb = nz.length,
							aAP = a4.nz.aAP,
							a0 = a1.a2 << 4,
							aFm = aO.qX,
							zz = e.t1,
							y = (a3 - 1) * (gT.gU(cR.gS(), 2) % 2);
						for (g = 0; g < a3; g++)
							for (qh = Math.abs(g - y), aAV = a6[qh], aj = gq.aAZ(aAV), qj = a7[qh] >> 3, s = aAV % a0, u = ~~((aAV + .5) / a0), aFk = aCI[qh], fi = 0; fi < 9; fi++)
								if (!((aFe = aj + aAP[fi]) < 0 || cb <= aFe))
									for (aFf = nz[aFe], tn = aFf.length, aH = 0; aH < tn; aH++) aFi = aFf[aH], qk = a7[aFi] >> 3, qj == qk || aFm && zz[qj] === zz[qk] && zz[qj] || (qk = a6[aFi], (aFg = s - qk % a0) * aFg + (aFg = u - ~~((qk +
										.5) / a0)) * aFg < 14400 && (qk = aCI[aFi], aFg = qk <= aFk ? Math.max(1, gT.gU(qk + gT.gU(aFk - qk, 10), 10)) : Math.max(1, gT.gU(aFk, 10)), aCI[aFi] = Math.max(qk - aFg, 0), aFH[aFi] = 4))
					}
				}(this), ! function(ig) {
					if (cR.gS() % 5 == 3)
						for (var aCI = ig.aCI, a3 = ig.a5, g = 0; g < a3; g++) {
							var aM = aCI[g];
							aCI[g] = Math.max(aM - Math.max(1, aM >> 7), 0)
						}
				}(this), this), aCI = ig.aCI, aFH = ig.aFH, g = ig.a5 - 1; 0 <= g; g--) aFH[g] = aFH[g] >> 1, 0 === aCI[g] && (a4.a1m.a3b(g), a4.a1S.aFo(g));
			ac.ad(fg, fh - a4.ec.ap(fg), 15)
		}
}

function aFp() {
	var a6r = 0,
		aFq = 0,
		aFr = 0,
		aFs = null,
		aFt = null;

	function aFw(eZ, aFx, aFz) {
		var eJ = eZ.username;
		return (eJ += "   " + bH.ec.aG0(eZ.ef, eZ.a4k, eZ.aG1)) + function(eZ) {
			eZ = eZ.z6;
			if (eZ < 1e3) return "   Gold: " + eZ;
			if ((eZ %= 1024) < 1e3) return "   Gold: " + eZ + "k";
			return "   Gold: " + (eZ - 999) + "M"
		}(eZ) + ("   IP: " + hp.hq.iP(eZ.aG3, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFz ? aFq : aFv(eZ, aFx)])
	}

	function aFv(eZ, aFx) {
		return aFq = aFx || bH.bI.a4s(eZ.bh) ? 1 : 0
	}
	this.eV = 0, this.aFu = function() {
		!a6r || aFq === aFv(aFt) && aFr === aFt.z6 || (aFr = aFt.z6, aFs.show(-1, -1, aFw(aFt, 0, 1), 1, 1, aFt.color))
	}, this.ek = function(br, eZ, aFx) {
		var aFy = br.getBoundingClientRect();
		this.show(aFy.left, aFy.top, eZ, 0, aFx), br.addEventListener("mouseleave", function remove() {
			br.removeEventListener("mouseleave", remove), bH.eU && bH.eU.eB(1)
		}), this.eV = aFx
	}, this.show = function(aF, aG, eZ, aG4, aFx) {
		aFs = aFs || new aG5, aFr = (aFt = eZ).z6, aFs.show(aF, aG, aFw(eZ, aFx), aG4, 0, aFt.color), a6r = 1
	}, this.eB = function(aG6) {
		this.eV = 0, aFs && aFs.eB(aG6) && (a6r = 0, aFt = null)
	}
}

function gg() {
	this.k = function() {
		if (0 !== h.i.gh && (aB.globalAlpha = Math.min(h.i.gh / 580, 1), aB.drawImage(h.i.aG9, 1 + ib.aGA(), 1 + ib.xz()), aB.globalAlpha = 1, aO.cp)) {
			for (var s = t / m, u = v / m, w = (o.p + t) / m, x = (o.r + v) / m, y = h.i.aGB * m, aGC = h.i.aGC, g = aO.aP - 1; 0 <= g; g--) ! function(g, y, s, u, w, x, aGC) {
				var highlight;
				0 === fZ.f3[g] || 0 === fZ.f8[g] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[g]) && (y *= 2), w = o.p * ((fZ.f4[g] + fZ.f6[g] + 1) / 2 - s) / (w - s) - .5 * y, s = o.r * ((fZ.f5[g] + fZ.f7[
					g] + 1) / 2 - u) / (x - u) - .5 * y, w > o.p) || s > o.r || w < -y || s < -y || (highlight ? aB.setTransform(2 * m, 0, 0, 2 * m, w, s) : aB.setTransform(m, 0, 0, m, w, s), aB.drawImage(aGC[aO.qX ? e.t1[g] : 1], 0, 0))
			}(g, y, s, u, w, x, aGC);
			aB.setTransform(m, 0, 0, m, 0, 0)
		}
	}
}

function nE() {
	this.i = new aGE, this.bU = 0;
	var aGF = new Array(32);

	function aGI() {
		for (var a3 = aGF.length, g = 0; g < a3; g++) aGF[g] = null
	}
	this.d = function() {
		for (var aGG, aGH = document.body.firstChild; aGH;) aGG = aGH.nextSibling, !document.body.contains(aGH) || "DIV" !== aGH.tagName && "INPUT" !== aGH.tagName && "BUTTON" !== aGH.tagName || bT.removeChild(document.body, aGH), aGH = aGG
	}, this.c4 = function(b7, pE, rC) {
		void 0 === pE && (pE = this.bU), cR.cZ = !0, 0 === b7 && (0 === bi.o4() ? b7 = 5 : c9.cA.setState(13)), this.eB(), this.bU === b7 && (pE = aGF[b7].pE, aGF[b7] = null), this.bU = b7;
		var aj = aGF[b7];
		if (!aj || 4 === b7 || 7 === b7 || 8 === b7 || 9 === b7 || 10 === b7 || 11 === b7 || 13 === b7 || 15 === b7 || 18 === b7 || 20 <= b7 && b7 <= 28 || 32 === b7 || 33 === b7) {
			if (0 === b7) return void aGI();
			1 === b7 ? aj = new aGJ : 2 === b7 ? aj = new aGK : 3 === b7 ? aj = new aGL : 4 === b7 || 9 === b7 || 10 === b7 || 11 === b7 || 13 === b7 || 33 === b7 ? aj = rC : 5 === b7 ? aj = new aGM : 6 === b7 ? aj = new aF8 : 7 === b7 ? aj =
				new a8M(bT.i.zd) : 8 === b7 ? aj = rC : 12 === b7 ? aj = new aGN : 14 === b7 ? aj = new aGO : 15 === b7 ? aj = new a8M(bT.i.re) : 16 === b7 ? aj = new np : 17 === b7 ? aj = new eo : 18 === b7 ? aj = new aGP : 19 === b7 ? aj =
				new aGQ : 20 === b7 ? aj = new aGR : 21 === b7 ? aj = new aGS : 22 === b7 ? aj = new aGT : 23 === b7 ? aj = new a5Q : 24 === b7 ? aj = new ty : 25 === b7 ? aj = new aGU : 26 === b7 ? aj = new a3V : 27 === b7 ? aj = new aGV :
				28 === b7 ? aj = new a1q : 29 === b7 ? aj = new jq : 30 === b7 ? aj = new wV : 31 === b7 ? aj = new dJ : 32 === b7 && (aj = new aGW), aj.pE = pE, aGF[b7] = aj
		}
		aj.show(rC)
	}, this.dN = function() {
		this.i1() && this.wX(this.kU().pE)
	}, this.wX = function(b7) {
		this.i1() && (aGF[b7] ? (this.eB(), cR.cZ = !0, this.bU = b7, aGF[b7].show()) : this.c4(b7))
	}, this.eB = function() {
		this.i1() && aGF[this.bU].eB()
	}, this.c7 = function() {
		this.i1() && (aGF[this.bU].eB(), aGI(), this.bU = 0, c9.cA.setState(13))
	}, this.k = function() {
		var aj;
		this.i1() && (aj = aGF[this.bU]).k && aj.k()
	}, this.resize = function() {
		if (!this.i1()) return !1;
		aGF[this.bU].resize()
	}, this.ia = function(aF, aG) {
		var aj;
		this.i1() && (aj = aGF[this.bU]).ia && aj.ia(aF, aG)
	}, this.io = function(aF, aG) {
		var aj;
		this.i1() && (aj = aGF[this.bU]).io && aj.io(aF, aG)
	}, this.aGX = function() {
		var aj;
		this.i1() && (aj = aGF[this.bU]).aGX && aj.aGX()
	}, this.im = function(iW, iX, deltaY) {
		var aj;
		this.i1() && (aj = aGF[this.bU]).im && aj.im(iW, iX, deltaY)
	}, this.eC = function(code) {
		var aj;
		return !!this.i1() && ((aj = aGF[this.bU]).eC && aj.eC(code), !0)
	}, this.cT = function() {
		var aj;
		this.i1() && (aj = aGF[this.bU]) && aj.cT && aj.cT()
	}, this.i1 = function() {
		return 0 < this.bU
	}, this.kU = function() {
		return aGF[this.bU]
	}, this.a2X = function(b7) {
		return aGF[b7]
	}, this.dv = function() {
		return aGF
	}, this.removeChild = function(aGY, aBT) {
		try {
			aGY.removeChild(aBT)
		} catch (br) {
			console.log("removeChild error " + br)
		}
	}
}

function aGM() {
	var aGZ, aGa, aGb, kI, aGc, aGd = 0;
	this.aGe = new aGf, aGb = new aGg([.45, .27], [.5, .5], 2 / 3), aGa = [new c6("⚔️<br>" + L(264), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aGh(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : e8.aGi), new c6("🗡️<br>" + L(265), function() {
			aGh(1)
		}, e8.aGj), new c6("🔑<br>" + L(266), function() {
			aGh(2)
		}, e8.aGk), new c6("☰<br>" + L(267), function() {
			aGh(3)
		}, e8.aGl), new c6("", function() {
			bT.c4(12)
		}, e8.iM, !1),
		new c6("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new c6("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], kI = new dr(df.dg.data[122]);
	for (var g = 0; g < aGa.length; g++) aGa[g].button.style.position = "absolute";

	function aGh(b7) {
		c9.cA.setState(10), lI.aAC() || lI.aGm(), 0 === b7 ? bT.i.aGn(1) : 1 === b7 ? (d0.hw.sG(df.dg.data[156].value, 1) || aO.aGo.a30(), bT.c4(19)) : 2 === b7 ? 0 !== c9.id || df.dg.data[140].value ? bT.c4(8, bT.bU, new ev(16)) : bT.i.aGp(bT.bU,
			16) : 3 === b7 && bT.c4(1)
	}
	kI.br.style.position = "absolute", kI.br.style.textAlign = "center", kI.br.placeholder = L(268), this.show = function() {
		bi.setState(0), c9.cA.setState(12), this.aGe.show(), aGa[4].e7(aZ.color.aGq(df.dg.data[121].value)), this.resize(), document.body.appendChild(kI.br);
		for (var g = 0; g < aGa.length; g++) document.body.appendChild(aGa[g].button);
		1 !== c9.id || c9.eK < 5 || (aGc && cR.cQ > aGc + 144e5 ? c9.a2J.setState(14) : aGc = cR.cQ)
	}, this.eB = function() {
		this.aGe.eB(), bT.removeChild(document.body, kI.br);
		for (var g = 0; g < aGa.length; g++) bT.removeChild(document.body, aGa[g].button)
	}, this.resize = function() {
		this.aGe.resize(), this.aGe.resize(), aGb.resize();
		var gap = .5 * i9.gap,
			aGs = 10 / 99 * .84 * aGb.p,
			aGu = .16 * aGb.r,
			aGv = .19 * aGb.p,
			aF = aGb.aF + aGv,
			aGs = aGb.aG + aGs + 3 * gap,
			p = .5 * (aGb.p - gap) - aGv,
			aGv = aGb.p - 2 * aGv - aGu - gap,
			aGv = (aZ.e2.aBK(kI.br, aF, aGs, aGv, aGu), aZ.e2.aBK(aGa[4].button, aF + aGv + gap, aGs, aGu, aGu), aGd = aGs, .5 * (aGb.aG + aGb.r - (aGs += aGu + gap) - gap));
		aZ.e2.aBK(aGa[0].button, aF, aGs, p, aGv), aZ.e2.aBK(aGa[1].button, aF + p + gap, aGs, p, aGv), aZ.e2.aBK(aGa[2].button, aF, aGs + aGv + gap, p, aGv), aZ.e2.aBK(aGa[3].button, aF + p + gap, aGs + aGv + gap, p, aGv);
		aZ.e2.aBK(aGa[5].button, aF, aGs + aGv * 2 + gap * 2, p * 2 + gap, aGv / 3);
		aZ.e2.aBK(aGa[6].button, aF, aGs + aGv * 2.33 + gap * 3, p * 2 + gap, aGv / 3);
		for (var g = 0; g < aGa.length; g++) aGa[g].button.style.font = aZ.e2.iA(0, aZ.e2.aBP(.065 * aGb.r)), aZ.e2.jV(aGa[g].button, 5);
		kI.br.style.font = aZ.e2.iA(0, aZ.e2.aBP(.08 * aGb.r)), aZ.e2.jV(kI.br, 5)
	}, this.k = function() {
		if (bi.aGx(), lC.k(), a3 = Math.floor((c9.cA.i7() ? .018 : .0137) * o.i8), aB.font = aZ.e2.iA(0, Math.max(5, a3)), aZ.e2.textBaseline(aB, 0), aZ.e2.textAlign(aB, 2), aB.fillStyle = e8.e9, aB.fillText(bw.eK, o.p, 0), text = "Win count: " +
			__fx.wins.count, textLength = aB.measureText(text).width, a3 = Math.max(5, a3), aB.textAlign = "left", aB.textBaseline = "middle", aB.fillText(text, aB.canvas.width - textLength - a3 / 2, 2 * a3), lA.k(aGd), lq.k(), lI.aAC()) {
			aB.imageSmoothingEnabled = !1;
			var text = lI.qT("territorial.io"),
				textLength = .84 * aGb.p / text.width;
			aB.setTransform(textLength, 0, 0, textLength, aGb.aF + .08 * aGb.p, aGb.aG), aGZ = aGZ || aZ.aE1.aH0(text, aZ.aE1.aH1, [0, 0, 0]);
			for (var aF = -1; aF <= 1; aF += 2)
				for (var aG = -1; aG <= 1; aG += 2) aB.drawImage(aGZ, aF, aG);
			aB.drawImage(text, 0, 0), aB.imageSmoothingEnabled = !0;
			var a3 = lI.qT("logo"),
				aH2 = .6666 * textLength * text.height / a3.height,
				w = .5 * o.p,
				x = aGb.aG + .5 * textLength * text.height - .5 * aH2 * a3.height;
			aB.setTransform(aH2, 0, 0, aH2, w - .6 * textLength * text.width, x), aB.drawImage(a3, 0, 0), aB.setTransform(aH2, 0, 0, aH2, w + .6 * textLength * text.width - aH2 * a3.width, x), aB.drawImage(a3, 0, 0), aB.setTransform(1, 0, 0, 1,
				0, 0), aB.imageSmoothingEnabled = !0
		}
	}
}

function mS() {
	var i1, aH3, p, r, iL, aH4, aH5, a8H, canvas, a8I, aH6;

	function xz() {
		return Math.floor((o.p - p) / 2) < iJ.r + 2 * i9.gap ? o.r - r - 4 * i9.gap - iJ.r : o.r - r - 2 * i9.gap
	}
	this.d = function() {
		aH6 = i1 = !1, iL = .61, aH4 = .07, aH5 = .09, a8I = a8H = r = 0
	}, this.resize = function() {
		var i0, s, aH, aHA, aHB, vq;
		i1 && (p = aAJ(p = c9.cA.i7() ? Math.floor(.69 * o.i8) : Math.floor(.5 * o.i8), aAK(o.p - 2 * i9.gap, 10)), p = aAJ(p, Math.floor(3.57 * aAK(o.r - 2 * i9.gap, 3))), r = Math.floor(.28 * p), (canvas = document.createElement("canvas"))
			.width = p, canvas.height = r, i0 = canvas.getContext("2d", {
				alpha: !0
			}), s = Math.floor(1 + r / 40), i0.clearRect(0, 0, p, r), i0.fillStyle = e8.ff, i0.fillRect(s, s, p - 2 * s, r - 2 * s), i0.lineJoin = "bevel", i0.lineWidth = 2 * s, i0.strokeStyle = e8.e9, i0.strokeRect(s, s, p - 2 * s, r - 2 *
				s), i0.imageSmoothingEnabled = !1, aH = lI.get(aH3), aHA = aH.width, vq = (1 === aH3 ? .85 : 21 === aH3 ? .666 : .9) * iL * r / (aHB = aH.height), i0.setTransform(vq, 0, 0, vq, Math.floor((p - vq * aHA) / 2), Math.floor((r -
				vq * aHB) / 2)), i0.drawImage(aH, 0, 0), i0.setTransform(1, 0, 0, 1, Math.floor(p - aH5 * r - aH4 * r - s), Math.floor(s + aH4 * r)),
			function(i0, a3) {
				i0.lineWidth = Math.floor(1 + r / 80), i0.strokeStyle = e8.e9, i0.beginPath(), i0.moveTo(0, 0), i0.lineTo(a3, a3), i0.moveTo(0, a3), i0.lineTo(a3, 0), i0.stroke()
			}(i0, Math.floor(aH5 * r)), i0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aq, aH8, wN, aH9) {
		i1 || aH9 && aH6 || (aH3 = wN ? 21 : aq ? 1 : 2, i1 = aH6 = !0, this.resize(), l9.eB(), iJ.iU(), a8I = cR.cQ, a8H = aH8 ? 1 : 0)
	}, this.cT = function() {
		!i1 || 1 <= a8H || (a8H = 1 < (a8H += 5e-4 * (cR.cQ - a8I)) ? 1 : a8H, a8I = cR.cQ, cR.cZ = !0)
	}, this.ia = function(aF, aG) {
		return !(!i1 || a8H <= 0 || (aF -= Math.floor((o.p - p) / 2), aG -= xz(), aF < 0) || aG < 0 || p < aF || r < aG || (p - r / 3 < aF && aG < r / 3 && (i1 = !1, cR.cZ = !0), 0))
	}, this.k = function() {
		!i1 || a8H <= 0 || (aB.globalAlpha = a8H, aB.drawImage(canvas, Math.floor((o.p - p) / 2), xz()), aB.globalAlpha = 1)
	}
}

function a1b() {
	this.qw = function(player, a4H) {
		return -1 !== a4H && !!a4.ec.aHD(player, a4H) && this.aHE(player, a4H, 0)
	}, this.aHE = function(player, a4H, aHF) {
		player = function(player, a4H, aHF) {
			var aHI = a4.ec.aHJ(player, a4H);
			if (-1 === aHI) return -1;
			aHI = a4.ec.qx(aHI, a4H);
			if (-1 === aHI) return -1;
			var aHG = a4.a1h.a4F(aHI, a4H);
			if (0 <= aHG) return aHG;
			if (a4.a1h.a4E()) return -1;
			if (0 <= (aHG = a4.a1h.a4F(a4H, aHI))) return a4.a1h.a4R(a4.a1h.a4I(a4.a1h.get(aHG)));
			if (aHI === a4H) return a4.a1h.a4R(new Uint32Array([aHI, a4H]));
			if (0 <= (aHG = a4.a1c.aHE(aHI, a4H))) return aHG;
			return aHF ? function(aHL, player) {
				var aHM = gD.aHM,
					dg = (aHM.fill(0), [aHL]),
					aHN = (aHM[aHL] = 1, gq.aHN),
					xC = -1,
					a3 = dg.length;
				for (; - 1 === xC && a3;) {
					for (var bu = [], g = 0; g < a3; g++)
						for (var gz = dg[g], gL = aHM[gz], bZ = 0; bZ < 8; bZ++) {
							var fx, fv, aHO = gz + aHN[bZ],
								h1 = 4 * aHO;
							h3.oF(h1) ? (fx = aHM[aHO], fv = gL + 5 + ((1 & bZ) << 1), 0 === fx ? (bu.push(aHO), aHM[aHO] = fv) : aHM[aHO] = Math.min(fv, fx)) : -1 === xC && bZ % 2 == 0 && h3.hO(player, h1) && (xC = gz)
						}
					a3 = (dg = bu).length
				}
				return -1 !== xC ? function(xL, aHQ) {
					var aHN = gq.aHN,
						aHR = -1,
						xa = 0,
						az = [];
					for (; aHQ !== xL;)(xa = function(gz, xa) {
						var aHM = gD.aHM,
							aHN = gq.aHN,
							gL = aHM[gz];
						if (gL - aHM[gz + aHN[xa]] != 5 + ((1 & xa) << 1))
							for (var b8 = 0; b8 < 8; b8++) {
								var bZ = b8 + xa + 6 & 7;
								if (gL - aHM[gz + aHN[bZ]] == 5 + ((1 & bZ) << 1)) return bZ
							}
						return xa
					}(aHQ, xa)) !== aHR && (az.push(aHQ), aHR = xa), aHQ += aHN[xa];
					az.push(xL);
					var aHG = a4.a1h.a4F(az[0], xL);
					if (0 <= aHG) return aHG;
					return a4.a1h.a4R(new Uint32Array(az))
				}(aHL, xC) : -1
			}(a4H, player) : -1
		}(player, a4H, aHF);
		return -1 !== player && (gD.bu[0] = a4.a1h.get(player), !0)
	}
}

function rd(data) {
	var ep, aHT, aHU, aHV, aHW, aHX, aHY, colors, aHZ, aHa, aHb = 0,
		aHc = 0,
		aHd = !1,
		aHe = !1,
		aHf = [1, 5, 60, 240, 1440, 10080, 43200];

	function aID(iW, iX) {
		! function(iW, iX) {
			return aHT < iW && iW < aHT + aHV && aHU < iX && iX < aHU + aHW
		}(aHb = iW, aHc = iX) ? (aHd && (cR.cZ = !0), aHd = !1) : (aHd = !0, cR.cZ = !0)
	}
	this.show = function() {
		aHe = df.dg.data[127].value, ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize();
		var aH = o.bv,
			a0e = ep.a0Y(),
			aHo = aH * a0e.a0c,
			aH = aH * a0e.a0Z;
		aHX = aZ.e2.aBM(.06), aHY = aZ.e2.aBM(.04), aHT = aZ.e2.aBM(.06), aHU = aH + aHX, aHV = o.p - aHT - aHY, aHW = aHo + aH - aHU - aHY
	}, this.k = function() {
		ep.k(),
			function() {
				var g, sN, dl, aF, b8, bu = data.data,
					aHs = 1,
					aHt = .125,
					aHu = aHe ? 65536 : 0;
				for (g = 0; g < bu.length; g++)
					for (sN = bu[g].sN, dl = sN.length, aHs = Math.max(dl, aHs), b8 = 0; b8 < dl; b8++) aHt = Math.max(sN[b8], aHt), aHu = Math.min(sN[b8], aHu);
				var u = aHU + aHW,
					aHv = aHW / (aHt - aHu),
					aHw = 1 / (aHs - 1);
				for (aB.lineWidth = i9.tu, g = 0; g < bu.length; g++) {
					for (sN = bu[g].sN, dl = sN.length, aF = aHT, aB.beginPath(), aB.moveTo(aF + aHV, u - aHv * (sN[dl - 1] - aHu)), b8 = dl - 2; 0 <= b8; b8--) aB.lineTo(aF + aHw * b8 * aHV, u - aHv * (sN[b8] - aHu));
					aB.strokeStyle = colors[g], aB.stroke()
				}(function(aHu, aHt, u, aHv) {
					aB.font = aZ.e2.iA(0, .25 * aHT), aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 2), aB.fillStyle = colors[0];
					for (var aF = .92 * aHT, g = 0; g < 3; g++) {
						var aq = aHu + g * (aHt - aHu) / 2;
						aB.fillText((aq / 1e3).toFixed(3), aF, u - aHv * (aq - aHu))
					}
				})(aHu, aHt, u, aHv),
				function(aHs) {
					var aG = aHU + aHW + .15 * aHY;
					aB.font = aZ.e2.iA(0, Math.min(.4 * aHY, .028 * o.p)), aZ.e2.textBaseline(aB, 0), aZ.e2.textAlign(aB, 2), aB.fillStyle = colors[0], aB.fillText(aZ.aHk.a2d(aHZ), aHT + aHV, aG), aZ.e2.textAlign(aB, 0), aB.fillText(aZ.aHk.a2d(
						new Date(aHa.getTime() - 6e4 * (aHs - 1) * aHf[data.rR])), aHT, aG)
				}(aHs),
				function(aHs, aHu, aHt) {
					if (aHd && !(aHs < 2)) {
						for (var aI9, b7 = (aHb - aHT) / aHV * (aHs - 1), aI0 = Math.floor(b7), aI1 = Math.floor(1 + b7), aI2 = b7 - aI0, aI3 = 1e5, aI4 = -1, aI5 = -1, aI6 = aHt - (aHt - aHu) * (aHc - aHU) / aHW, bu = data.data, g = 0; g < bu
							.length; g++) {
							var jk, sN = bu[g].sN;
							sN.length <= aI1 || (sN = sN[aI0] + aI2 * (sN[aI1] - sN[aI0]), (jk = Math.abs(aI6 - sN)) < aI3 && (aI3 = jk, aI4 = g, aI5 = sN))
						} - 1 !== aI4 && (aHt = aHU + aHW - (aI5 - aHu) / (aHt - aHu) * aHW, aB.lineWidth = .5 * i9.tu, aB.strokeStyle = colors[aI4], aB.beginPath(), aB.moveTo(aHT, aHt), aB.lineTo(aHb, aHt), aB.lineTo(aHb, aHU + aHW), aB
						.stroke(), aB.beginPath(), aB.arc(aHb, aHt, .1 * aHT, 0, 2 * Math.PI), aB.fillStyle = colors[aI4], aB.fill(), aHu = aHU + aHW + .15 * aHY, aZ.e2.textAlign(aB, 1), aI9 = aHs - 2 < b7 ? (aI9 = aHa.getTime() - 6e4 * aHf[
								data.rR], new Date(aI9 + (b7 - (aHs - 2)) * (aHZ.getTime() - aI9))) : new Date(aHa.getTime() - 6e4 * (aHs - b7 - 1) * aHf[data.rR]), aHs = aZ.aHk.a2d(aI9), b7 = aZ.e2.measureText(aHs), aI9 = gT.gn(aHb, aHT +
								.5 * b7, aHT + aHV - .5 * b7), aB.fillStyle = aZ.color.aHn(70, 50, 20), aB.fillRect(aI9 - .52 * b7, aHU + aHW, 1.04 * b7, .55 * aHY), aB.fillStyle = colors[0], aB.fillText(aHs, aI9, aHu), aB.font = aZ.e2.iA(0,
								.25 * aHT), aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 2), aI9 = .92 * aHT, aHs = (aI5 / 1e3).toFixed(3), b7 = aZ.e2.measureText(aHs), aHu = aI9 - 1.04 * b7, aB.fillStyle = aZ.color.aHn(70, 50, 20), aB
							.fillRect(aHu, aHt - .1625 * aHT, aHT - aHu, .275 * aHT), aB.fillStyle = colors[aI4], aB.fillText(aHs, aI9, aHt))
					}
				}(aHs, aHu, aHt)
			}(), aB.lineWidth = i9.tu, aB.strokeStyle = e8.e9, aB.beginPath(), aB.moveTo(aHT, aHU), aB.lineTo(aHT, aHU + aHW), aB.lineTo(aHT + aHV, aHU + aHW), aB.stroke();
		var g, fontSize = .5 * aHX,
			bu = (aB.font = aZ.e2.iA(0, fontSize), aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 0), data.data),
			a3 = bu.length,
			aG = aHU - .5 * aHX,
			eJ = "";
		for (g = 0; g < a3; g++) eJ += bu[g].name + "  ";
		eJ = eJ.trim();
		var aIA = aZ.e2.measureText(eJ),
			aF = .5 * (o.p - aIA);
		for (aIA > o.p && (aF = 0, aB.font = aZ.e2.iA(0, o.p / aIA * fontSize)), g = 0; g < a3; g++) aB.fillStyle = colors[g], aB.fillText(bu[g].name, aF, aG), aF += aZ.e2.measureText(bu[g].name + "  ")
	}, this.ia = function(iW, iX) {
		aID(iW, iX)
	}, this.io = function(iW, iX) {
		aID(iW, iX)
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	};
	var g, fh, a2b, qh, bZ = data.data,
		a3 = bZ.length,
		max = 1;
	for (g = 0; g < a3; g++) max = Math.max(max, bZ[g].sN.length);
	for (g = 0; g < a3; g++)
		for (; bZ[g].sN.length < max;) bZ[g].sN.unshift(0);
	fh = new Date, a2b = 6e4 * fh.getTimezoneOffset(), qh = fh.getTime() - a2b, aHZ = new Date(qh), 6 === data.rR ? function(fh, a2b) {
		var aHm = fh.getUTCFullYear(),
			fh = fh.getUTCMonth() + 1;
		aHa = fh < 12 ? new Date(Date.UTC(aHm, fh) - a2b) : new Date(Date.UTC(aHm + 1, 0) - a2b)
	}(fh, a2b) : (a2b = 6e4 * aHf[data.rR], aHa = data.rR <= 4 ? new Date(qh + a2b - fh.getTime() % a2b) : new Date(qh + a2b - (fh.getTime() + 2592e5) % a2b)), qh = aZ.color, colors = [e8.e9, qh.aHn(255, 0, 0), qh.aHn(0, 200, 0), qh.aHn(80, 80,
		255), qh.aHn(255, 255, 0), qh.aHn(255, 0, 255), qh.aHn(0, 255, 255), qh.aHn(255, 140, 0), qh.aHn(128, 128, 128), qh.aHn(0, 255, 140)], ep = new dM(L(269) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.rR] + ", " + aZ.aHk.a2a(
		aHZ), [new c6("⬅️ " + L(1), function() {
		bT.c4(1)
	}), new c6(L(270), function() {
		bT.c4(14)
	})], !1)
}

function a1Z() {
	function aIM(player, aM, aIH, aIK) {
		var aL;
		if (h3.sl(aIH)) aL = aO.aR;
		else {
			if ((aL = h3.h5(aIH)) === player) return void ac.ad(player, aM - aZ.aa.ab(player, aM), 12);
			if (!m1.r5(player, aL)) return void dF.aIR.aIS(player, aL, aM)
		}
		lJ.ak(player, aL) || lJ.al(player) ? (fZ.fB[player].push(aIK << 2), lJ.ai(player, aM, aL), l3.aIT(player, !0)) : ac.ad(player, aM, 12)
	}
	this.cT = function() {
		for (var aFG = a4.i.aFG, a6 = a4.i.a6, aFF = a4.i.aFF, g = a4.i.a5 - 1; 0 <= g; g--) 65535 === aFF[g] && function(g, aIK, xa) {
			if (6 === xa) {
				if (a4.a1m.aIL(g, aIK)) return a4.i.aFJ[g]++, a4.i.aFF[g] = 0, 0
			} else {
				var player = a4.i.a7[g] >> 3,
					g = a4.i.aCI[g];
				ac.gK(player), xa < 4 ? aIM(player, g, aIK + gq.aII[xa] << 2, aIK) : 4 === xa ? function(player, aM, aIK) {
					var g, yd, aIP = gq.aIQ,
						yc = gq.h2(aIK);
					for (g = 0; g < 4; g++)
						if (yd = yc + aIP[g], h3.sl(yd)) return aIM(player, aM, yd, aIK);
					for (g = 0; g < 4; g++)
						if (yd = yc + aIP[g], h3.h4(yd) && !h3.sy(player, yd)) return aIM(player, aM, yd, aIK);
					for (g = 0; g < 4; g++)
						if (yd = yc + aIP[g], h3.h4(yd)) return aIM(player, aM, yd, aIK)
				}(player, g, aIK) : 5 === xa && function(player, aM, aIK) {
					var g, yd, aIP = gq.aIQ,
						yc = gq.h2(aIK);
					for (g = 0; g < 4; g++)
						if (yd = yc + aIP[g], h3.h4(yd) && h3.sy(player, yd)) return aIM(player, aM, yd, aIK);
					for (g = 0; g < 4; g++)
						if (yd = yc + aIP[g], h3.h4(yd)) return aIM(player, aM, yd, aIK);
					for (g = 0; g < 4; g++)
						if (yd = yc + aIP[g], h3.sl(yd)) return aIM(player, aM, yd, aIK)
				}(player, g, aIK)
			}
			return 1
		}(g, gq.aBm(a6[g]), aFG[g] % 64) && (a4.a1m.a3b(g), a4.a1S.aFo(g))
	}, this.aFN = function(player, gz, xa, a20, aM) {
		if (!(5 <= xa)) {
			var aIF = aO.b2;
			if (aZ.aa.fQ(aIF) && m1.r5(player, aIF) && player !== aIF && 0 !== fZ.fD[aIF].length && aZ.aa.a7J(player, 5)) {
				for (var aIH, aIG = !1, g = 0; g < 4; g++)
					if (aIH = gz + gq.aII[g] << 2, h3.sv(aIH) && !h3.sl(aIH) && h3.h5(aIH) === aIF) {
						aIG = !0;
						break
					} aIG && (b3.aIJ(719, 0), xa = aM < 25e3 ? L(271) + " (" + aZ.fo.iP(aM) + ") ⛵" : L(272) + " (" + aZ.fo.iP(aM) + ") 🚢", b3.fd(180, xa, 719, player, e8.yJ, e8.ff, -1, !0, void 0, {
					fi: 1,
					a20: a20
				}))
			}
		}
	}
}

function aIU(jJ) {
	var aIV = document.createElement("div");

	function jN() {
		ei.ej() || (aIV.style.backgroundColor = aZ.color.jR(e8.iM, 50))
	}

	function jO() {
		aIV.style.backgroundColor = e8.iM
	}
	this.dn = function(jQ) {
			aIV.textContent = jQ
		}, this.show = function() {
			document.body.appendChild(aIV)
		}, this.resize = function() {
			var r = aZ.e2.en(.03, .5);
			aIV.style.width = 2 * r + "px", aIV.style.height = r + "px", aIV.style.font = aZ.e2.iA(1, .75 * r), aZ.e2.jV(aIV, 4), aZ.e2.jV(aIV, 2)
		}, this.hX = function() {
			aIV.onclick = null, aIV.onmouseover = null, aIV.onmouseout = null, bT.removeChild(document.body, aIV), aIV = null
		}, aIV.style.position = "absolute", jO(), aIV.style.color = e8.e9, aIV.style.zIndex = "3", aIV.style.right = "0", aIV.style.top = "0", aIV.style.display = "flex", aIV.style.justifyContent = "center", aIV.style.alignItems = "center", aIV.style
		.userSelect = "none", aIV.style.outline = "none", aIV.onclick = jJ, aIV.onmouseover = jN, aIV.onmouseout = jO
}

function aIW() {
	this.aIX = function() {
		for (var a3 = aO.aP, fO = fM.result.fO, aj = fO.length, fI = (hc.bj(17 + 16 * a3 + 33 * aj), hc.cG(1, 1), hc.cG(4, 12), hc.cG(10, aj), hc.cG(1, +(2 === aO.fV)), hc.cG(1, aO.a0m % 2), fZ.fI), g = 0; g < a3; g++) hc.cG(16, fI[g]);
		for (var f8 = fZ.f8, g = 0; g < aj; g++) {
			var fg = fO[g];
			hc.cG(9, fg), hc.cG(24, f8[fg])
		}
		dc.i.send(dc.i.or, hc.cJ)
	}
}

function a0O() {
	this.aIY = function(h1) {
		var aIZ;
		return a1.a36(a1.bd) && aO.data.passableMountains && (aIZ = h3.xE(h1), this.aIa(aO.b2, aIZ) || this.aIb(aO.b2, aIZ)) && 0 !== (aIZ = function(aHO) {
			for (var aF = gq.wt(aHO), aG = gq.wu(aHO), max = Math.max(a1.a2, a1.jg) - 2, aIh = max * max, aIG = !1, aIi = 0, pk = 0; pk < max; pk++) {
				var aIj, gz = function(aF, aG, pk) {
					for (var g = 0; g <= pk; g++)
						for (var b8 = -1; b8 < 2; b8 += 2)
							for (var fi = -1; fi < 2; fi += 2)
								for (var aH = 0; aH < 2; aH++) {
									var h1 = function(aF, aG) {
										if (gq.wv(aF, aG)) {
											aF = gq.h0(aF, aG), aG = gq.h2(aF);
											if (h3.sv(aG) && h3.aIl(aG)) return aF
										}
										return 0
									}(aF + aH * b8 * g + (1 - aH) * fi * pk, aG + aH * fi * pk + (1 - aH) * b8 * g);
									if (h1) return h1
								}
					return 0
				}(aF, aG, pk);
				gz && (aIj = gq.wr(aF, aG, gz)) < aIh && (aIi = gz, aIh = aIj, aIG || (aIG = !0, max = Math.floor(Math.sqrt(aIj)) + 1))
			}
			return aIi
		}(gq.aId(h1))) && (h1 = gq.h2(aIZ), h3.sl(h1) || (h1 = h3.h5(h1)) !== aO.b2 && m1.r5(h1, aO.b2)) ? aIZ : 0
	}, this.aIe = function(player, gz) {
		gz = gq.h2(gz);
		if (h3.sv(gz)) {
			if (h3.sl(gz)) gD.a7d[0] = aO.aR;
			else if (h3.h5(gz) !== gD.a7d[0]) return !1;
			for (var t1 = function(h1) {
					var sk = h3.sk,
						t1 = [];
					loop: for (var bZ = 3; 0 <= bZ; bZ--) {
						var yd = h1 + sk[bZ];
						if (h3.aCE(yd)) {
							for (var id = h3.xE(yd), g = 0; g < t1.length; g++)
								if (id === t1[g]) continue loop;
							gD.aIg[t1.length] = yd, t1.push(id)
						}
					}
					return t1
				}(gz), a3 = t1.length, g = 0; g < a3; g++)
				if (this.aIa(player, t1[g]) || this.aIb(player, t1[g])) return gD.aIg[0] = gD.aIg[g], !0
		}
		return !1
	}, this.aIa = function(player, aIZ) {
		for (var fE = fZ.fE[player], a3 = fE.length, xW = Math.max(gT.gU(a3, 12), 1), sk = h3.sk, g = 0; g < a3; g += xW)
			for (var yc = fE[g], bZ = 3; 0 <= bZ; bZ--) {
				var yd = yc + sk[bZ];
				if (h3.aCE(yd) && aIZ === h3.xE(yd)) return !0
			}
		return !1
	}, this.aIb = function(player, aIZ) {
		for (var fE = fZ.fE[player], a3 = fE.length, sk = h3.sk, g = 0; g < a3; g++)
			for (var yc = fE[g], bZ = 3; 0 <= bZ; bZ--) {
				var yd = yc + sk[bZ];
				if (h3.aCE(yd) && aIZ === h3.xE(yd)) return !0
			}
		return !1
	}
}

function mx() {
	this.aIm = null, this.d = function() {
		10 !== aO.fP ? this.aIm = null : this.aIm = new Uint32Array(aO.aR)
	}, this.cT = function() {
		10 === aO.fP && this.ec()
	}, this.ec = function() {
		for (var fg, target, g3, aIm = this.aIm, aEI = bB.bD, g2 = fZ.fA, g = bB.bC - 1; 0 <= g; g--)(fg = aEI[g]) >= aO.aP || (target = Math.max(gT.gU(g2[fg], 4), 2048), g3 = Math.max(gN.gO(fg), 100), aIm[fg] += gT.gU(g3 * target, 1e4), aIm[
			fg] > target && (aIm[fg] = target))
	}, this.a7S = function(player, aM) {
		return aM > this.aIm[player] ? (aM = this.aIm[player], this.aIm[player] = 0) : this.aIm[player] -= aM, aM
	}
}

function a1d() {
	function aIn(gp, vV, vX) {
		for (var iu = Math.min(vV, vX), eN = Math.max(vV, vX), aG = iu + 1; aG < eN; aG++)
			if (!h3.oF(gq.xX(gp, aG))) return;
		return 1
	}

	function aIo(gt, vU, vW) {
		for (var iu = Math.min(vU, vW), eN = Math.max(vU, vW), aF = iu + 1; aF < eN; aF++)
			if (!h3.oF(gq.xX(aF, gt))) return;
		return 1
	}

	function aIp(vU, vV, vW, vX, a4G, a4H) {
		for (var a3 = Math.min(Math.abs(vW - vU), Math.abs(vX - vV)), vP = Math.sign(vW - vU), vQ = Math.sign(vX - vV), g = 0; g < a3; g++)
			if (!h3.oF(gq.xX(vU += vP, vV += vQ))) return null;
		return vU === vW ? aIn(vU, vV, vX) ? new Uint32Array([a4G, gq.h0(vU, vV), a4H]) : null : aIo(vV, vU, vW) ? new Uint32Array([a4G, gq.h0(vU, vV), a4H]) : null
	}
	this.aHE = function(a4G, a4H) {
		a4G = function(a4G, a4H) {
			var vU = gq.wt(a4G),
				vV = gq.wu(a4G),
				vW = gq.wt(a4H),
				vX = gq.wu(a4H);
			if (vU === vW) {
				if (aIn(vU, vV, vX)) return new Uint32Array([a4G, a4H])
			} else {
				if (vV !== vX) return aIp(vU, vV, vW, vX, a4G, a4H) || aIp(vW, vX, vU, vV, a4G, a4H);
				if (aIo(vV, vU, vW)) return new Uint32Array([a4G, a4H])
			}
			return null
		}(a4G, a4H);
		return null === a4G ? -1 : a4.a1h.a4R(a4G)
	}
}

function mY() {
	function aIv(player) {
		var fh;
		aZ.aa.ay(player) && (fh = fZ.fA[player] - fZ.fK[player] + lJ.ap(player), ac.ad(player, Math.abs(fh), fh < 0 ? 18 : 12)), fZ.fA[player] = 0, fZ.fK[player] = 0
	}

	function aJ0() {
		lF.show(!1, !1, !1, !0), cs.a3v(), fM.on.fX()
	}

	function aIs(player, bA) {
		for (var g = bA.length - 1; 0 <= g; g--) lJ.ae(bA[g], player)
	}

	function aIt(player) {
		var f4 = fZ.f4,
			f6 = fZ.f6,
			f5 = fZ.f5,
			f7 = fZ.f7,
			a2 = a1.a2;
		if (fZ.f8[player]) {
			fZ.f8[player] = 0;
			for (var s = f4[player], u = f5[player], aF = f6[player]; s <= aF; aF--)
				for (var aG = f7[player]; u <= aG; aG--) {
					var fg = 4 * (aG * a2 + aF);
					h3.hO(player, fg) && h3.aJ7(fg)
				}
		}
		f6[player] = f7[player] = 0, f4[player] = f5[player] = Math.max(a2, a1.jg)
	}
	this.bF = function(fg) {
		var player, fh = fZ.f8[fg] + fZ.f9[fg];
		a4.i.a5G[fg] ? fh && (aIs(player = fg, lJ.b9(player)), b5.vT(player), aIt(player), l3.aIu(player), lJ.clear(player), aIv(player), function(player) {
			fZ.f9[player] = 0, fZ.fB[player] = [], fZ.fC[player] = [], fZ.fD[player] = [], fZ.fE[player] = []
		}(player)) : !fh && fZ.fB[fg].length || this.aIr(fg)
	}, this.aIr = function(player) {
		! function(player) {
			aZ.aa.b0(player) || (fZ.fI[player] = lu.aAc.aEl(), aO.a3o++);
			var bA = lJ.b9(player);
			0 === bA.length ? aZ.aa.sA(player) && aJ0() : (aIs(player, bA), function(player, bA) {
				var aJ3 = bA[function(bA) {
					var g, b7 = 0;
					for (g = bA.length - 1; 1 <= g; g--) fZ.f8[bA[g]] > fZ.f8[bA[b7]] && (b7 = g);
					return b7
				}(bA)];
				9 === aO.fP && (1 === e.t1[player] ? lW.aCN(8) && lX.aJ4(aJ3) : gc.aM[player] && (b3.aIJ(765, 0), b3.fd(280, L(273, [fZ.f1[aJ3], fZ.f1[player]]), 765, aJ3, e8.jC, e8.aJ5, -1, !0)));
				if (aZ.aa.sA(player)) aJ0(), b3.b4(aJ3, 1);
				else {
					for (var g = bA.length - 1; 0 <= g; g--)
						if (aZ.aa.ay(bA[g]) && (ac.az[4 - aZ.aa.b0(player)]++, aZ.aa.sA(bA[g]))) return b3.b4(player, 0);
					aZ.aa.b0(player) || b3.aJ6(0, player, aJ3)
				}
			}(player, bA))
		}(player), b5.vT(player), aIt(player), aIv(player),
			function(player) {
				fZ.f3[player] = 0, fZ.fB[player] = null, fZ.fC[player] = null, fZ.fD[player] = null, fZ.fE[player] = null
			}(player), l3.aIu(player), lJ.clear(player), a4.a1S.aIz(player)
	}
}

function aJ8() {
	this.aH0 = function(canvas, aJ9, rC) {
		var p = canvas.width,
			r = canvas.height,
			aH = aZ.e2.a80(p, r),
			aA = aZ.e2.getContext(aH, !0),
			canvas = (aA.drawImage(canvas, 0, 0), aA.getImageData(0, 0, p, r));
		return aJ9(canvas.data, p, r, rC), aA.putImageData(canvas, 0, 0), aH
	}, this.aJA = function(pj, p, r) {
		for (var aF = p - 1; 0 <= aF; aF--)
			for (var aG = r - 1; 0 <= aG; aG--) {
				var g = 4 * (aF + aG * p);
				pj[3 + g] = pj[g], pj[g] = pj[1 + g] = pj[2 + g] = 255
			}
	}, this.aJB = function(pj, p, r) {
		for (var aF = p - 1; 0 <= aF; aF--)
			for (var aG = r - 1; 0 <= aG; aG--) {
				var g = 4 * (aF + aG * p);
				pj[1 + g] > pj[2 + g] + 10 && (pj[3 + g] = pj[g], pj[1 + g] = pj[2 + g])
			}
	}, this.aJC = function(pj, p, r, rC) {
		for (var gap = Math.floor(Math.min(p, r) * rC), aF = 0; aF < p; aF++)
			for (var g, aG = 0; aG < r; aG++)(aF < gap || aG < gap || p - gap <= aF || r - gap <= aG) && (pj[3 + (g = 4 * (aF + aG * p))] = 255 - 255 * (pj[1 + g] - pj[g]) / (255 - pj[g]))
	}, this.aH1 = function(pj, p, r, rC) {
		for (var aF = p - 1; 0 <= aF; aF--)
			for (var aG = r - 1; 0 <= aG; aG--) {
				var g = 4 * (aF + aG * p);
				pj[g] = rC[0], pj[1 + g] = rC[1], pj[2 + g] = rC[2]
			}
	}, this.aJD = function(pj, p, r, rC) {
		for (var gap = Math.floor(p * rC), aF = 0; aF < p; aF++)
			for (var g, aG = 0; aG < r; aG++)(aF < gap || aG < gap || p - gap <= aF || r - gap <= aG) && (pj[g = 4 * (aF + aG * p)] = pj[1 + g] = pj[2 + g] = 0)
	}, this.aJE = function(pj, p, r) {
		for (var aG, g, aF = p - 1; 0 <= aF; aF--)
			for (aG = r - 1; 0 <= aG; aG--) 200 < pj[1 + (g = 4 * (aF + aG * p))] && pj[1 + g] - 20 > pj[g] && pj[1 + g] - 20 > pj[2 + g] ? pj[g] + pj[2 + g] < 40 ? pj[3 + g] = 0 : (pj[3 + g] = pj[g], pj[g] = 255, pj[1 + g] = 255, pj[2 + g] =
				255) : pj[g] < 50 && pj[1 + g] < 50 && pj[2 + g] < 50 && (pj[g] + pj[1 + g] + pj[2 + g] < 50 ? pj[3 + g] = 180 : pj[3 + g] = 180 + Math.floor(75 * (pj[g] + pj[1 + g] + pj[2 + g] - 50) / 100))
	}, this.aJF = function(pj, p, r) {
		for (var aG, g, aF = p - 1; 0 <= aF; aF--)
			for (aG = r - 1; 0 <= aG; aG--) pj[1 + (g = 4 * (aF + aG * p))] > pj[g] + 20 && pj[1 + g] > pj[2 + g] + 20 && pj[g] + pj[2] < 40 && (pj[3 + g] = 255 - pj[1 + g], pj[g] = pj[1 + g] = pj[2 + g] = pj[g])
	}, this.aE2 = function(pj, p, r, rC) {
		for (var hI = p >> 1, aF = 0; aF < p; aF++)
			for (var aG = 0; aG < r; aG++) Math.sqrt((aF - hI) * (aF - hI) + (aG - hI) * (aG - hI)) > rC * hI && (pj[4 * (aF + aG * p) + 3] = 0)
	}
}

function a1U() {
	var aJG, aJH = 8,
		aJI = null;

	function aJN(pj, gz, b7) {
		gz *= 4;
		pj[gz] = 255, pj[1 + gz] = 255, pj[2 + gz] = b7, pj[3 + gz] = 255
	}

	function aJP(aA, pf) {
		var aF, aG, vP, gz, aJT, aJU, tJ = aJH,
			pi = aZ.e2.getImageData(aA, tJ, tJ),
			pj = pi.data,
			aj = (tJ >> 1) - .5,
			aJW = aZ.ky.a6U(pf, .5);
		for (aZ.ky.a6W(pf, aJW, 300) || aZ.ky.a6Y(pf, 100), aG = 0; aG < tJ; aG++)
			for (aF = 0; aF < tJ; aF++) aJU = (tJ - 1.5) * (tJ - 1.5) / 4, pj[gz = 4 * (aG * tJ + aF)] = (aJT = (vP = (vP = aF - aj) * vP + (vP = aG - aj) * vP) <= (tJ - 4.5) * (tJ - 4.5) / 4 ? aJW : pf)[0], pj[1 + gz] = aJT[1], pj[2 + gz] = aJT[2],
				pj[3 + gz] = aJU < vP ? 0 : 255;
		aA.putImageData(pi, 0, 0)
	}
	this.d = function() {
		var b7, tJ, a9, aA, pi, pj;
		(aJG = aJG || new Array(aO.aR)).fill(null), b7 = 255, tJ = aJH + 4, a9 = aZ.e2.a80(tJ, tJ), aA = aZ.e2.getContext(a9, !0), pi = aZ.e2.getImageData(aA, tJ, tJ), aJN(pj = pi.data, tJ + 1, b7), aJN(pj, tJ + 2, b7), aJN(pj, 2 * tJ + 1, b7),
			aJN(pj, 2 * tJ - 3, b7), aJN(pj, 2 * tJ - 2, b7), aJN(pj, 3 * tJ - 2, b7), aJN(pj, tJ * (tJ - 3) + 1, b7), aJN(pj, tJ * (tJ - 2) + 1, b7), aJN(pj, tJ * (tJ - 2) + 2, b7), aJN(pj, tJ * (tJ - 2) - 2, b7), aJN(pj, tJ * (tJ - 1) - 3, b7),
			aJN(pj, tJ * (tJ - 1) - 2, b7), aA.putImageData(pi, 0, 0), aJI = a9,
			function() {
				if (aO.qX)
					for (var a9 = new Array(e.qc.length), a3 = aO.aR, aJL = aJG, a8 = e.a8, g = 0; g < a3; g++) {
						var aB8 = a8[g];
						a9[aB8] || (a9[aB8] = function(aB8) {
							var a9 = aZ.e2.a80(aJH, aJH),
								aA = aZ.e2.getContext(a9, !0),
								bu = gD.aJR;
							return bu.set(e.aJS[aB8]), aJP(aA, bu), a9
						}(aB8)), aJL[g] = a9[aB8]
					}
			}()
	}, this.k = function() {
		var g, player, aJX, aJY, aM, aC, aJb, aJd, aJe, a6 = a4.i.a6,
			a7 = a4.i.a7,
			aCI = a4.i.aCI,
			aFH = a4.i.aFH,
			aJf = aJG,
			aIF = aO.b2,
			a3 = a4.i.a5,
			n = o.p,
			q = o.r,
			a0 = a1.a2 << 4,
			yc = m,
			h1 = yc / aJH,
			s = t / yc,
			u = v / yc,
			vP = (n + t) / yc - s,
			vQ = (q + v) / yc - u,
			aA = aB;
		for (aA.imageSmoothingEnabled = yc < 9, aZ.e2.textAlign(aA, 1), aZ.e2.textBaseline(aA, 1), g = 0; g < a3; g++) player = a7[g] >> 3, aM = aCI[g], aJX = .9 + .1 * Math.log10(aM), aJY = (aC = a6[g]) % a0 / 16 - aJX, aC = q * (Math.floor(aC /
			a0) / 16 - aJX - u) / vQ, aJb = -2 * (aJe = yc * aJX) * (1 + (aJd = +(player === aIF)) / 8), aJd = aJd * aJe / 4, (aJe = n * (aJY - s) / vP) < aJb || aC < aJb || n + aJd < aJe || q + aJd < aC || (aJY = 2 * aJX * h1, aJb = aJX *
			yc, null === (aJd = aJf[player]) && (aJf[player] = aJd = function(player) {
				var a9 = aZ.e2.a80(aJH, aJH);
				return aJP(aZ.e2.getContext(a9, !0), h3.aJQ(player)), a9
			}(player)), player === aIF && (aA.setTransform(aJY, 0, 0, aJY, aJe - 2 * aJY, aC - 2 * aJY), aA.drawImage(aJI, 0, 0)), aA.setTransform(aJY, 0, 0, aJY, aJe, aC), aA.drawImage(aJd, 0, 0), (aJX = Math.floor(function(aM) {
				if (aM < 1e3) return .42;
				if (aM < 1e4) return .34;
				if (aM < 1e6) return .26;
				if (aM < 1e8) return .19;
				return .15
			}(aM) * aJb)) < 6) || (aA.setTransform(1, 0, 0, 1, 0, 0), aA.fillStyle = aFH[g] ? e8.aJi : e8.e9, aA.font = aZ.e2.iA(1, aJX), aA.fillText(aZ.fo.iP(aM), aJe + aJb, aC + aJb + .1 * aJX));
		aA.imageSmoothingEnabled = !1, aA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aJj() {
	this.a3u = function(eJ, font, maxWidth) {
		if (font && (aB.font = font), aB.measureText(eJ).width <= maxWidth) return eJ;
		for (var g = eJ.length - 1; 1 <= g; g--)
			if (eJ = eJ.substring(0, g), aB.measureText(eJ + "...").width <= maxWidth) return eJ + "...";
		return "..."
	}
}

function mD() {
	var aJl, aJm, aJn;

	function aJq(aCM) {
		for (var g = aJl - 1; 0 <= g; g--) 0 === aJn[aJm[g]] && fZ.f8[aJm[g]] >= aCM && aJp(aJm[g])
	}

	function aJo(player) {
		var fh;
		64 === aJn[player] ? aJn[player] = 6 : (fh = fZ.f8[player], aJn[player] = fh < 1e3 ? 3 : fh < 1e4 ? 2 : fh < 6e4 ? 1 : 0)
	}
	this.d = function() {
		aJl = 0, aJm = new Uint16Array(aO.aR), aJn = new Uint8Array(aO.aR)
	}, this.cT = function() {
		for (var g = aJl - 1; 0 <= g; g--) 64 === aJn[aJm[g]] ? aJo(aJm[g]) : 0 == aJn[aJm[g]]-- && (aJo(aJm[g]), aJp(aJm[g]));
		16e4 <= fZ.f8[wO[0]] && (aJq(16e4), 3e5 <= fZ.f8[wO[0]]) && aJq(3e5), aZ.aa.r8(aO.b2) && (ac.az[7] = Math.max(fZ.f8[aO.b2], ac.az[7]))
	}, this.aIu = function(player) {
		for (var b8, g = aJl - 1; 0 <= g; g--)
			if (player === aJm[g]) {
				for (aJl--, b8 = g; b8 < aJl; b8++) aJm[b8] = aJm[b8 + 1];
				return
			}
	}, this.aIT = function(player, aJs) {
		for (var g = aJl - 1; 0 <= g; g--)
			if (player === aJm[g]) return;
		aJm[aJl++] = player, aJn[player] = aJs ? 2 : 64
	}
}

function nf() {
	var gap, a3g, aF = [0, 0, 0, 0, 0],
		aG = [0, 0, 0, 0, 0],
		ik = [1, 1, 1, 1, 1],
		aq = [!0, !0, !0, !1, !1],
		aH = (this.d7 = [!0, !0, !0, !1, !1], null);
	this.aJt = function(a9, aJu) {
		aH = a9, aq = aJu, a3g = [lj.aJv, lj.a2R, lj.aJw, lj.aJw, lj.aJx], this.d()
	}, this.d = function() {
		if (lI.aAC()) {
			var g, s6 = Math.floor((c9.cA.i7() ? .261 : .195) * o.i8),
				s7 = Math.floor(.9 * s6),
				iL = Math.floor(.17 * s7);
			if (gap = c9.cA.i7() ? 2 * i9.gap : i9.gap, ik[0] = s6 / aH[0].width, ik[1] = s7 / aH[1].width, ik[2] = iL / aH[2].height, ik[3] = iL / aH[3].height, ik[4] = iL / aH[4].height, ik[2] *= 1.7, ik[3] *= 1.07, aF[0] = gap, aF[1] = gap,
				aF[2] = gap, aF[3] = gap, aF[4] = Math.floor(2 * gap + ik[3] * aH[3].width), aG[0] = gap, aG[1] = aG[0] + gap + ik[0] * aH[0].height, aG[2] = aG[1] + gap + ik[1] * aH[1].height, aG[3] = aG[2] + gap + ik[2] * aH[2].height, aG[4] =
				aG[3], !aq[0])
				for (g = 0; g < 5; g++) aG[g] -= ik[0] * aH[0].height + gap;
			if (!aq[1])
				for (g = 2; g < 5; g++) aG[g] -= ik[1] * aH[1].height + gap
		}
	}, this.i1 = function() {
		return !(7 === bi.o4() && c9.cA.i7())
	}, this.ia = function(aJy, aJz) {
		if (aH && this.i1())
			for (var g = aq.length - 1; 0 <= g; g--)
				if (aq[g] && this.d7[g] && aF[g] < aJy && aG[g] < aJz && aJy < aF[g] + ik[g] * aH[g].width && aJz < aG[g] + ik[g] * aH[g].height) return bT.c4(9, bT.bU, new a5T(L(274), aZ.e2.aBS(a3g[g]))), !0;
		return !1
	}, this.k = function() {
		if (aH && this.i1()) {
			var g;
			for (aB.imageSmoothingEnabled = !0, g = 0; g < 5; g++) aq[g] && this.d7[g] && (aB.setTransform(ik[g], 0, 0, ik[g], aF[g], aG[g]), aB.drawImage(aH[g], 0, 0));
			aB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function mF() {
	var aK0, aGd, iy, iz, aK1, aK2, aK3, aK4, aK5, aK6;

	function aK8() {
		var qC = aO.qC;
		for (aK5 = qC; aK5 < aO.aR; aK5++) aK7();
		for (aK5 = aO.cp ? aO.aP : 0; aK5 < qC; aK5++) {
			if (!aKB()) {
				for (var fi = aO.aKD = aK5; fi < qC; fi++) aK5 = fi, aK7();
				return
			}
			aKC(aK2 + aK0 * aK1 + gT.gU(aK1, 2), aK3 + aGd * aK1 + gT.gU(aK1, 2))
		}
	}

	function aKc(player) {
		for (var f4 = fZ.f4, f5 = fZ.f5, f6 = fZ.f6, f7 = fZ.f7, aG = f5[player]; aG <= f7[player]; aG++)
			for (var aF = f4[player]; aF <= f6[player]; aF++) {
				var h1 = h3.hN(aF, aG);
				h3.h4(h1) && (h3.hR(h1) ? h3.hS(h1, player) : h3.hT(h1, player))
			}
	}

	function aKb(bu, ex, ey) {
		var fh = bu[ex];
		bu[ex] = bu[ey], bu[ey] = fh
	}

	function aKB() {
		return function() {
			var g;
			for (g = 0; g < 8; g++)
				if (aK0 = gT.gU(iy * lW.random(), lW.value(100)), aGd = gT.gU(iz * lW.random(), lW.value(100)), aKh()) return 1;
			return
		}() || function() {
			var vP, vQ, b8, vs, fi, vr;
			for (vP = gT.gU(iy * lW.random(), lW.value(100)), vQ = gT.gU(iz * lW.random(), lW.value(100)), b8 = 40; 1 <= b8; b8--)
				for (vs = iz - b8; 0 <= vs; vs -= 40)
					for (aGd = (vs + vQ) % iz, fi = 40; 1 <= fi; fi--)
						for (vr = iy - fi; 0 <= vr; vr -= 40)
							if (aK0 = (vr + vP) % iy, aKh()) return 1;
			return
		}()
	}

	function aKh() {
		for (var fg, aKj, gap = gT.gU(aK1 - aK4, 2), oE = aK3 + aGd * aK1 + gap, oS = aK2 + aK0 * aK1 + gap, aKi = oE + aK4 - 1; oE <= aKi; aKi--)
			for (aKj = oS + aK4 - 1; oS <= aKj; aKj--)
				if (fg = h3.hN(aKj, aKi), !h3.sv(fg) || h3.hR(fg)) return;
		return 1
	}

	function aKC(vr, vs) {
		aK7(), aKk(vr - 2, vs - 2)
	}

	function aK7() {
		fZ.f3[aK5] = 0, fZ.f8[aK5] = fZ.f9[aK5] = 0, fZ.fB[aK5] = [], fZ.fC[aK5] = [], fZ.fD[aK5] = [], fZ.fE[aK5] = [], fZ.f4[aK5] = fZ.f5[aK5] = fZ.f6[aK5] = fZ.f7[aK5] = 0
	}

	function aKk(vr, vs) {
		var fg, g, aKl, aKm;
		for (fZ.f3[aK5] = 1, fZ.f4[aK5] = vr + 10, fZ.f5[aK5] = vs + 10, fZ.f7[aK5] = fZ.f6[aK5] = 0, aKl = vr; aKl < vr + 4; aKl++)
			for (aKm = vs; aKm < vs + 4; aKm++)(vr < aKl && aKl < vr + 3 || vs < aKm && aKm < vs + 3) && (fg = h3.hN(aKl, aKm), h3.sv(fg)) && (fZ.f4[aK5] = Math.min(aKl, fZ.f4[aK5]), fZ.f6[aK5] = Math.max(aKl, fZ.f6[aK5]), fZ.f5[aK5] = Math.min(aKm,
				fZ.f5[aK5]), fZ.f7[aK5] = Math.max(aKm, fZ.f7[aK5]), aK6[fZ.f8[aK5]] = fg, fZ.f8[aK5]++, h3.hT(fg, aK5));
		for (fZ.f9[aK5] = fZ.f8[aK5], g = fZ.f8[aK5] - 1; 0 <= g; g--) h3.xZ(aK6[g], aK5) ? (h3.hS(aK6[g], aK5), fZ.fC[aK5].push(aK6[g])) : h3.oH(aK6[g]) ? (h3.hS(aK6[g], aK5), fZ.fD[aK5].push(aK6[g])) : h3.aKn(aK6[g]) && (h3.hS(aK6[g], aK5), fZ.fE[
			aK5].push(aK6[g]))
	}
	this.d = function() {
		if (aK6 = new Array(12), aK4 = 6, aK1 = 10, iy = gT.gU(a1.a2, aK1), iz = gT.gU(a1.jg, aK1), aK2 = gT.gU(a1.a2 - aK1 * iy, 2), aK3 = gT.gU(a1.jg - aK1 * iz, 2), aO.cp)
			for (var g = 0; g < aO.aP; g++) aK5 = g, aK7(), fZ.f3[aK5] = 1;
		(0 === aO.data.spawningType ? aK8 : 1 === aO.data.spawningType ? (aK8(), function() {
			var aKE = aO.zp;
			aO.aKF || aKE++;
			if (!(aKE < 3)) {
				for (var data = aO.data, iu = (aO.cp ? aO.aP : 0) + data.teamPlayerCount[0], eN = aO.aKD, aKG = new Uint32Array(aKE), aKH = new Uint32Array(aKE), aKI = new Uint16Array(aKE), aKJ = new Uint16Array(aKE), t1 = e.t1, f4 = fZ
						.f4, f5 = fZ.f5, f6 = fZ.f6, f7 = fZ.f7, aKK = gD.aKK, aKL = gD.aKL, g = iu; g < eN; g++) aKK[g] = f4[g] + f6[g] >> 1, aKL[g] = f5[g] + f7[g] >> 1;
				for (g = iu; g < eN; g++) {
					var id = t1[g];
					aKG[id] += aKK[g], aKH[id] += aKL[g]
				}
				var qc = e.qc;
				for (g = 1; g < aKE; g++) {
					var dl = Math.max(data.teamPlayerCount[qc[g]], 1);
					aKI[g] = gT.gU(aKG[g], dl), aKJ[g] = gT.gU(aKH[g], dl)
				}
				var aKM = e.aKM,
					aKN = e.aKN,
					aKO = e.aKO,
					qf = gD.qf;
				for (g = 0; g < 512; g++) qf[g] = g;
				for (var hI = 0; hI < 2 + (4 <= aKE); hI++)
					for (g = iu; g < eN; g++) {
						for (var qj = g, ua = qf[qj], aKP = 1, pk = gT.aEg(aKK[ua] - aKI[1], aKL[ua] - aKJ[1]), b8 = 2; b8 < aKE; b8++) {
							var aKQ = gT.aEg(aKK[ua] - aKI[b8], aKL[ua] - aKJ[b8]);
							aKQ < pk && (pk = aKQ, aKP = b8)
						}
						var aKR = t1[qj];
						if (aKP !== aKR) {
							if (2 === hI && 4 <= aKE) {
								var aKS = Math.max((aKP + 1) % aKE, 1),
									aKT = gT.aEg(aKK[ua] - aKI[aKS], aKL[ua] - aKJ[aKS]);
								for (b8 = 1; b8 < aKE; b8++) aKQ = gT.aEg(aKK[ua] - aKI[b8], aKL[ua] - aKJ[b8]), pk < aKQ && aKQ < aKT && (aKT = aKQ, aKS = b8);
								aKS !== aKR && gT.aEg(aKI[aKR] - aKI[aKS], aKJ[aKR] - aKJ[aKS]) < gT.aEg(aKI[aKR] - aKI[aKP], aKJ[aKR] - aKJ[aKP]) && (aKP = aKS)
							}
							var aKU = qc[aKP],
								aKV = aKN[aKU] + (aO.cp ? 0 : aKO[aKU]),
								qk = aKM[aKV],
								ub = qf[qk],
								aKW = aKN[aKU + 1];
							pk = gT.aEg(aKK[ub] - aKI[aKR], aKL[ub] - aKJ[aKR]);
							for (var aH = aKV + 1; aH < aKW; aH++) {
								var aKX = aKM[aH],
									aKY = qf[aKX];
								(aKQ = gT.aEg(aKK[aKY] - aKI[aKR], aKL[aKY] - aKJ[aKR])) < pk && (pk = aKQ, qk = aKX)
							}
							qk < iu || eN <= qk || (ub = qf[qk], aKG[aKR] += aKK[ub] - aKK[ua], aKH[aKR] += aKL[ub] - aKL[ua], aKG[aKP] += aKK[ua] - aKK[ub], aKH[aKP] += aKL[ua] - aKL[ub], dl = data.teamPlayerCount[qc[aKR]], aKI[aKR] = gT
								.gU(aKG[aKR], dl), aKJ[aKR] = gT.gU(aKH[aKR], dl), dl = data.teamPlayerCount[aKU], aKI[aKP] = gT.gU(aKG[aKP], dl), aKJ[aKP] = gT.gU(aKH[aKP], dl), qf[qj] = ub, qf[qk] = ua)
						}
					}! function() {
						for (var qf = gD.qf, f4 = fZ.f4, f5 = fZ.f5, f6 = fZ.f6, f7 = fZ.f7, f8 = fZ.f8, f9 = fZ.f9, fC = fZ.fC, fD = fZ.fD, fE = fZ.fE, g = 0; g < 512; g++) {
							var aKa = qf[g];
							if (aKa !== g) {
								aKb(f4, g, aKa), aKb(f5, g, aKa), aKb(f6, g, aKa), aKb(f7, g, aKa), aKb(f8, g, aKa), aKb(f9, g, aKa), aKb(fC, g, aKa), aKb(fD, g, aKa), aKb(fE, g, aKa), aKc(g), aKc(aKa), qf[g] = g;
								for (var r = aKa, y = qf[r]; y !== g;) y = qf[r = y];
								qf[r] = aKa
							}
						}
					}()
			}
		}) : function() {
			var qC = aO.qC;
			for (aK5 = qC; aK5 < aO.aR; aK5++) aK7();
			for (aK5 = aO.cp ? aO.aP : 0; aK5 < qC; aK5++)
				if (! function() {
						var spawningData = aO.data.spawningData,
							vr = spawningData[2 * aK5] + 1,
							spawningData = spawningData[2 * aK5 + 1] + 1;
						if (3 < vr && vr < a1.a2 - 5 && 3 < spawningData && spawningData < a1.jg - 5 && h3.sv(h3.hN(vr, spawningData)) && function(vr, vs) {
								var fg, aKj, aKi;
								for (aKi = vs; vs - 6 < aKi; aKi--)
									for (aKj = vr; vr - 6 < aKj; aKj--)
										if (fg = h3.hN(aKj, aKi), h3.hR(fg)) return;
								return 1
							}(vr + 3, spawningData + 3)) return aKC(vr + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aKB()) {
						for (var fi = aO.aKD = aK5; fi < qC; fi++) aK5 = fi, aK7();
						return
					}
					var vr = aK2 + aK0 * aK1 + gT.gU(aK1, 2),
						vs = aK3 + aGd * aK1 + gT.gU(aK1, 2);
					aKC(vr, vs)
				}
		})(), ac.az[7] = fZ.f8[aO.b2]
	}, this.aDO = function(aL, aHw, aHv) {
		var g, vr, vs, fg, aK0, aGd;
		for (aK5 = aL, g = 0; g < 20; g++)
			for (vr = aHw + g; aHw - g <= vr; vr--)
				for (vs = aHv + g; aHv - g <= vs; vs--)
					if ((vr === aHw + g || vr === aHw - g || vs === aHv + g || vs === aHv - g) && 3 < vr && vr < a1.a2 - 5 && 3 < vs && vs < a1.jg - 5 && h3.sv(h3.hN(vr, vs)) && function(vr, vs) {
							var fg, aKj, aKi;
							for (aKi = vs; vs - 6 < aKi; aKi--)
								for (aKj = vr; vr - 6 < aKj; aKj--)
									if (fg = h3.hN(aKj, aKi), h3.hR(fg) && !h3.sy(aK5, fg)) return;
							return 1
						}(vr + 3, vs + 3)) {
						if (0 < fZ.f8[aK5]) {
							for (aGd = aK0 = fg = void 0, aK0 = fZ.f6[aK5]; aK0 >= fZ.f4[aK5]; aK0--)
								for (aGd = fZ.f7[aK5]; aGd >= fZ.f5[aK5]; aGd--) fg = 4 * (aGd * a1.a2 + aK0), h3.hO(aK5, fg) && (h3.aJ7(fg), fZ.f8[aK5]--);
							aK7()
						}
						return aKk(vr - 1, vs - 1), !0
					} return !1
	}, this.aDP = function(aL) {
		aK5 = aL, aKB() ? aKC(aK2 + aK0 * aK1 + gT.gU(aK1, 2), aK3 + aGd * aK1 + gT.gU(aK1, 2)) : aK7()
	}
}

function aGf() {
	var a4W, aKs, a0Q = document.createElement("div"),
		aKq = document.createElement("div"),
		aKr = document.createElement("div"),
		rm = document.createElement("div"),
		kC = [],
		j3 = [L(275), L(276), L(277), L(278), L(279), L(280), L(281), L(282)],
		aKt = [1, 2, 3, 0, 9, 10, 11, 13];

	function aKu(g) {
		bT.c4(8, 0, new ev(21, {
			ew: aKt[g],
			ex: 0,
			ey: 10
		}))
	}
	this.show = function() {
			this.dn(bT.i.aKz), document.body.appendChild(a0Q)
		}, this.eB = function() {
			bT.removeChild(document.body, a0Q)
		}, this.dn = function(aKz) {
			for (var aL0 = [3, 0, 1, 2, 4, 5, 6, 7], g = 0; g < kC.length; g++) {
				var p = aKz[g];
				a4W[aL0[g]][1].eb.textContent = p || ""
			}
		}, this.resize = function() {
			var g, fc = i9.gap,
				r = aZ.e2.aBM(.085),
				p = Math.min(4 * r, o.p - 2 * fc),
				a3 = kC.length;
			for (aZ.e2.aBK(a0Q, fc, o.r - fc - r, p, r), aZ.e2.jV(a0Q), aZ.e2.jV(aKq, 6), g = 0; g < a3 - 1; g++) aZ.e2.jV(kC[g].button, 6);
			for (g = 0; g < a3; g++) a4W[g][0].resize(), a4W[g][1].resize();
			for (kC[0].aF = 0, kC[0].button.style.left = aZ.e2.em(kC[0].aF), kC[0].button.style.width = aZ.e2.aBL(1.7 * r), g = 1; g < a3; g++) kC[g].aF = kC[g - 1].aF + kC[g - 1].button.offsetWidth, kC[g].button.style.left = aZ.e2.em(kC[g].aF);
			if (!aKs) {
				if (!lI.aAC()) return;
				(aKs = lI.get(14)).style.width = "24%", aKs.style.position = "absolute", aKq.appendChild(aKs)
			}
			aKs.style.left = aZ.e2.em(0), aKs.style.top = "7%", aKr.a0g && (aKr.scrollLeft = aKr.a0g)
		}, a0Q.style.position = "absolute", aKq.style.width = "25%", aKq.style.height = "100%", aKq.style.backgroundColor = e8.iM, aKr.style.position = "absolute", aKr.style.width = "75%", aKr.style.height = "100%", aKr.style.backgroundColor = e8.iM,
		aKr.style.top = aKr.style.right = aZ.e2.em(0), aZ.e2.a0U(aKr), rm.style.height = rm.style.maxHeight = "100%", kC.push(new c6("", function() {
			aKu(0)
		}, e8.aKv)), kC.push(new c6("", function() {
			aKu(1)
		}, e8.aGj)), kC.push(new c6("", function() {
			aKu(2)
		}, e8.a8y)), kC.push(new c6("", function() {
			aKu(3)
		}, e8.a0x)), kC.push(new c6("", function() {
			aKu(4)
		}, e8.aKw)), kC.push(new c6("", function() {
			aKu(5)
		}, e8.aKx)), kC.push(new c6("", function() {
			aKu(6)
		}, e8.aKw)), kC.push(new c6("", function() {
			aKu(7)
		}, e8.jC)), a4W = new Array(kC.length);
	for (var g = 0; g < kC.length; g++) kC[g].button.style.position = "absolute", a4W[g] = [new aKy(j3[g], kC[g].button, .25, .45), new aKy("", kC[g].button, .53, .84, 1)], kC[g].button.style.height = kC[g].button.style.maxHeight = "100%", kC[g]
		.button.top = aZ.e2.em(0), rm.appendChild(kC[g].button);
	aKr.appendChild(rm), a0Q.appendChild(aKq), a0Q.appendChild(aKr)
}

function m6() {
	this.e2 = new aBG, this.ky = new a6S, this.aa = new a7I, this.fo = new yR, this.i0 = new aJj, this.aE1 = new aJ8, this.canvas = new aDw, this.color = new aL1, this.aHk = new a2Y, this.d = function() {
		this.e2.aBI()
	}
}

function dk(aL2, aL3, aL4, aL5) {
	var aL6 = document.createElement("textarea"),
		aL7 = (this.br = aL6, !0);

	function aLC() {
		aL6.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aL3 && aZ.e2.jV(aL6, 5)
		}, this.dp = function(de) {
			aL6.value = de
		}, this.u3 = function() {
			return aL6.value
		}, this.aLA = function() {
			aL6.select()
		}, this.clear = function() {
			aL6.value = ""
		}, this.aLB = function() {
			aL7 && navigator.clipboard ? (aL6.select(), navigator.clipboard.writeText(aL6.value).catch(function() {
				aL7 = !1, aLC()
			})) : aLC()
		}, aL6.setAttribute("id", "textArea" + bT.i.aL8++), aL6.setAttribute("autocomplete", "off"), aL2 && aL6.setAttribute("placeholder", aL2), aL6.style.top = "0", aL6.style.left = "0", aL6.style.width = "100%", aL6.style.height = "100%", aL6
		.style.userSelect = "none", aL6.style.outline = "none", aL6.style.resize = "none", aL6.style.border = "none", aL6.style.color = e8.e9, aL6.style.backgroundColor = e8.aL9, aL5 ? (aL6.style.fontSize = "1em", aL6.rows = 6, aL6.style.padding =
			"0.25em") : (aL6.style.padding = "0.45em", aL6.style.fontSize = "1.2em"), aL4 && aL6.addEventListener("input", function(br) {
			aL4(br)
		}), aL6.addEventListener("focus", function() {
			o.aA5++
		}), aL6.addEventListener("blur", function() {
			o.aA5--
		})
}

function aLD() {
	this.aLE = function(player, gG, aM) {
		aZ.aa.a7T(player, aM, gG) && (gN.aEH(player, gG), !aZ.aa.b0(gG)) && av.aw.ax[gG] && av.aw.ax[gG]--
	}, this.aIS = function(player, gG, aM) {
		aZ.aa.a7V(aM, gG) ? lP.ai(gG, gD.gE[0]) && (lz.a2U(player, gG, gD.gE[0], 1), aZ.aa.ab(gG, gD.gE[0]), ac.gF(player, gG), b5.vE(gG, gD.gE[0])) : ac.ad(player, aM, 12)
	}
}

function aGg(aLF, aLG, aLH) {
	this.aF = 0, this.aG = 0, this.p = 0, this.r = 0, this.resize = function() {
		this.r = Math.min(aZ.e2.a6R(aLH || .5) * aLF[1] * o.i8, o.r - 2 * i9.gap), this.p = Math.min(this.r * (aLF[0] / aLF[1]), o.p - 2 * i9.gap), this.r = aLF[1] * this.p / aLF[0], this.aF = i9.gap + aLG[0] * (o.p - this.p - 2 * i9.gap), this
			.aG = i9.gap + aLG[1] * (o.r - this.r - 2 * i9.gap)
	}, this.aLI = function() {
		return this.aF + .5 * this.p
	}
}

function ba() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.bg = null
}

function aLJ(rC) {
	var ep, a8N, dR;
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), a8N.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(L(283), [new c6("⬅️ " + L(1), function() {
		bT.wX(10)
	})]), a8N = new dO(ep.dP, ((dR = []).push(function() {
		var a8m, dY = new dZ,
			aLN = new dr(df.dg.data[132], 1, function() {
				a8m.button.click()
			}),
			aLO = new dr(df.dg.data[131], 1, function() {
				aLN.br.focus()
			});
		dY.da(L(284)), dY.dq(aLO), aLO.br.style.marginBottom = "0.8em", dY.da(L(285)), dY.dq(aLN);
		return a8m = new c6(L(286), function() {
			ex = Math.floor(aLO.br.value), ey = Math.floor(aLN.br.value);
			var ey, ex = {
				a6c: Math.min(ex, ey),
				aBA: Math.max(ex, ey)
			};
			bT.c4(8, bT.a2X(10).pE, new ev(21, {
				ew: rC.ew,
				ex: ex.a6c,
				ey: ex.aBA
			}))
		}, 0, 0, 1), dY.dq(new ds([a8m.button])), dY
	}()), dR.push(function() {
		var a8m, dY = new dZ,
			aLN = new dr(df.dg.data[134], 1, function() {
				a8m.button.click()
			}),
			aLO = new dr(df.dg.data[133], 0, function() {
				aLN.br.focus()
			});
		return dY.da(1 === rC.ew ? L(287) : L(288)), dY.dq(aLO), aLO.br.style.marginBottom = "0.8em", dY.da(L(289)), dY.dq(aLN), a8m = new c6(L(286), function() {
			var rO = aLO.br.value.slice(0, 20),
				rP = Math.abs(Math.floor(aLN.br.value));
			bT.c4(8, bT.a2X(10).pE, new ev(22, {
				ew: rC.ew,
				rO: rO,
				rP: rP
			}))
		}, 0, 0, 1), dY.dq(new ds([a8m.button])), dY
	}()), dR.push(function() {
		var a8m, dY = new dZ,
			aLN = new dr(df.dg.data[152], 1, function() {
				a8m.button.click()
			}),
			aLO = new dr(df.dg.data[151], 0, function() {
				aLN.br.focus()
			});
		return dY.da(L(290)), dY.dq(aLO), aLO.br.style.marginBottom = "0.8em", dY.da(L(289)), dY.dq(aLN), a8m = new c6(L(286), function() {
			var rO = aLO.br.value.slice(0, 5),
				rP = Math.abs(Math.floor(aLN.br.value));
			bT.c4(8, bT.a2X(10).pE, new ev(28, {
				ew: rC.ew,
				rO: rO,
				rP: rP
			}))
		}, 0, 0, 1), dY.dq(new ds([a8m.button])), dY
	}()), dR))
}

function aLQ() {
	function aLT(player) {
		for (var fE = fZ.fE[player], a3 = fE.length, xW = Math.max(gT.gU(a3, 12), 1), sk = h3.sk, hI = lW.qi(a3), g = 0; g < a3; g += xW)
			for (var yc = fE[(g + hI) % a3], bZ = 3; 0 <= bZ; bZ--) {
				var yd = yc + sk[bZ];
				if (h3.aCE(yd)) return {
					h1: yd,
					id: h3.xE(yd),
					fg: player
				}
			}
		return null
	}

	function aLY(player, aLZ) {
		var aM = aZ.aa.a7a(player, gc.aLa[gc.aM[player]]);
		fZ.fB[player].push(aLZ.h1), lJ.ai(player, aM, aLZ.fg), l3.aIT(player, !0)
	}
	this.cT = function(player) {
		return !!a1.a36(a1.bd) && !!aO.data.passableMountains && 0 !== fZ.fE[player].length && function(player) {
			var aLS = aLT(player);
			if (null === aLS) return !1;
			! function(player) {
				for (var bD = bB.bD, bC = bB.bC, a3 = Math.min(bC, 12), y = lW.qi(bC), r2 = gD.r2, fE = fZ.fE, dl = 0, g = 0; g < a3; g++) {
					var fg = bD[(g + y) % bC];
					fg !== player && fE[fg].length && m1.r5(player, fg) && (r2[dl++] = fg)
				}
				gD.qe[0] = dl
			}(player);
			var aLV = function(aIZ) {
				for (var a3 = gD.qe[0], r2 = gD.r2, g = 0; g < a3; g++) {
					var aLZ = aLT(r2[g]);
					if (null !== aLZ && aLZ.id === aIZ) return aLZ
				}
				return null
			}(aLS.id);
			return null !== aLV ? (aLY(player, aLV), !0) : function(player, aIZ) {
				var a3 = av.wl.wm;
				if (0 !== a3)
					for (var h1 = av.wl.dg[lW.qi(a3)] << 2, sk = h3.sk, bZ = lW.qi(4);;) {
						if (h1 += sk[bZ], h3.aCE(h1)) {
							if (h3.xE(h1) === aIZ) return aLY(player, {
								h1: h1,
								fg: aO.aR
							}), !0;
							break
						}
						if (!h3.sl(h1)) break
					}
				return !1
			}(player, aLS.id)
		}(player)
	}
}

function mW() {
	var aLb, canvas, fj, aLc;

	function aLh(b7, name, aLi, eJ) {
		fj[b7] = name, canvas[b7] = new Image, canvas[b7].onload = function() {
			! function(b7, aLi) {
				var aJ9, rC = null;
				7 === aLi ? aJ9 = aZ.aE1.aJB : 8 === aLi ? (aJ9 = aZ.aE1.aJD, rC = .1) : 3 === aLi ? (aJ9 = aZ.aE1.aJC, rC = .06) : 5 === aLi ? aJ9 = aZ.aE1.aJE : 6 === aLi ? aJ9 = aZ.aE1.aJA : 4 === aLi && (aJ9 = aZ.aE1.aJF);
				canvas[b7] = aZ.aE1.aH0(canvas[b7], aJ9, rC)
			}(b7, aLi), aLk()
		}, canvas[b7].onerror = function(br) {
			console.error("Error loading image at index", b7, "Error:", br), aLk()
		}, canvas[b7].src = "data:image/png;base64," + eJ
	}

	function aLk() {
		aLb--, aLe()
	}

	function aLe() {
		0 === aLb && (aLb = -1, aLg(), cR.cZ = !0, canvas[7] = aLc, canvas[8] = aLc, canvas[9] = aLc, canvas[10] = aLc, 5 === bT.bU) && bT.kU().aGe.resize()
	}

	function aLg() {
		l9.aLm(), lq.aJt([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== c9.id, 1 !== c9.id, !0, !0, !0]), lM.pj = new tI, lM.pj.d(), lV.g9()
	}
	this.d = function() {
		if (void 0 === canvas) {
			aLb = 23, canvas = new Array(aLb), fj = new Array(aLb), (aLc = document.createElement("canvas")).width = 1;
			for (var g = aLb - (aLc.height = 1); 0 <= g; g--) canvas[g] = aLc;
			aLg(), aLh(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aLh(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aLh(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLh(3, "orders", 6,
					"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"
					), aLh(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aLh(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aLh(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAptRLHQAAAAAAAAAAAAAAAAAA5K4OHTpE165dY++9947dd989SktLo3nz5tGoUaNo2LBhlJSUxA477BCFhYX/8X2ffvppfPbZZ/Hxxx/HunXr4sMPP4z3338/3nnnnVi1alW88sorsWjRoli7dm2iRwYAAAAAAAAAAAAAQJYZ7gEAAAAAAAAAAAAAAAAAIiKie/fucfTRR0eXLl2ibdu2seeee0aTJk1q7f4qKyvjrbfeipUrV8ayZcvimWeeiTlz5sTbb79da/cJAAAAAAAAAAAAAAAREQURsTF1BAAAAAAAAAAAAAAAAACw/bVp0yYGDBgQvXr1iq5du0azZs1SJ0VlZWUsX748nn322ViwYEHcfvvtUVFRkToLAAAAAAAAAAAAAIA6xnAPAAAAAAAAAAAAAAAAAGRIq1atYtiwYXHEEUdEly5dol69eqmTNmvNmjWxePHiuP/+++Pmm2+OysrK1EkAAAAAAAAAAAAAANQBhnsAAAAAAAAAAAAAAAAAIANOOeWUOOOMM6Jnz55RXFycOqdG3nnnnZg3b15cd911sXTp0tQ5AAAAAAAAAAAAAADkMcM9AAAAAAAAAAAAAAAAAFBHFRYWxqhRo+KMM86Idu3apc7ZZj7//PN4+umn48c//nE89NBDqXMAAAAAAAAAAAAAAMhDhnsAAAAAAAAAAAAAAAAAoA668MILY+jQodG6devUKbVm48aNsXDhwpg8eXLMnTs3dQ4AAAAAAAAAAAAAAHnEcA8AAAAAAAAAAAAAAAAA1CEnnXRSjB8/Pjp27Jg6ZbuprKyMefPmRVlZWbz00kupcwAAAAAAAAAAAAAAyAOGewAAAAAAAAAAAAAAAID/csUVV0T79u1TZ2TO9OnTY8GCBakzyFOtWrWK6dOnx7HHHhsFBQWpc5JYt25dzJgxI8rLy6OysjJ1DgAAAAAAAAAAAAAAOcxwDwAAAAAAAAAAAAAAAPBfFi9eHN/4xjdSZ2TO0KFDY9asWakzyENnnXVWTJ48OZo1a5Y6JSe88MILcc4558SSJUtSpwAAAAAAAAAAAAAAkKMKUwcAAAAAAAAAAAAAAAAAADVTv379uOOOO2LWrFlGe/5Nly5d4rHHHosRI0akTgEAAAAAAAAAAAAAIEcZ7gEAAAAAAAAAAAAAAACAPNSuXbtYvHhxnHLKKVFQUJA6J+c0btw4rr766rj99tujsNDHKQEAAAAAAAAAAAAA+E+uNAcAAAAAAAAAAAAAAACAPHPIIYfE448/HgcccEDqlJx36qmnxtNPPx1NmzZNnQIAAAAAAAAAAAAAQA4x3AMAAAAAAAAAAAAAAAAAeaR///7xwAMPRMuWLVOn5I2DDz44fv/730ebNm1SpwAAAAAAAAAAAAAAkCMM9wAAAAAAAAAAAAAAAABAnujfv3/Mnj07mjZtmjol73To0CHmzZtnvAcAAAAAAAAAAAAAgIgw3AMAAAAAAAAAAAAAAAAAeaFPnz4xe/bs2HHHHVOn5K22bdvGI488Ei1atEidAgAAAAAAAAAAAABAYoZ7AAAAAAAAAAAAAAAAACDHde/e3WjPNtKuXbt46KGHoqSkJHUKAAAAAAAAAAAAAAAJGe4BAAAAAAAAAAAAAAAAgBxWWload9xxRzRr1ix1Sp3RtWvXuPvuu1NnAAAAAAAAAAAAAACQkOEeAAAAAAAAAAAAAAAAAMhh9957b+y1116pM+qcY489NiZPnpw6AwAAAAAAAAAAAACARAz3AAAAAAAAAAAAAAAAAECOuvzyy+PQQw9NnVFnDR8+PPr27Zs6AwAAAAAAAAAAAACABAz3AAAAAAAAAAAAAAAAAEAOOuyww+L8889PnVGnNWjQIKZNmxaNGjVKnQIAAAAAAAAAAAAAwHZmuAcAAAAAAAAAAAAAAAAAckxhYWFMnTo1SkpKUqfUea1bt44ZM2akzgAAAAAAAAAAAAAAYDsz3AMAAAAAAAAAAAAAAAAAOWbixImx7777ps7IjFNOOSWOOeaY1BkAAAAAAAAAAAAAAGxH9VIHAAAAAAAAAAAAAABAXVFaWhr77LNPtGjRInbZZZfYeeedo2nTptGkSZNo0qRJ1KtXL3bYYYcoKSmJevXqRaNGjaKgoOBf319YWBgNGzaMDRs2xKeffvqv2ysqKuKTTz6JTz/9NDZs2BAfffRRfPzxx7F27dr48MMP48MPP4z33nsv/va3v8Vrr70Wb7/9doqHDwBsI61atYpzzz03dUam1KtXLyZOnBjz589PnQIAAAAAAAAAAAAAwHZiuAcAAAAAAAAAAAAAALagsLAwDjzwwGjfvn20bt06WrZsGbvttls0a9YsSktLo0mTJtG0adMoKSlJnRoREZ999lmsWbMmPvjgg3jvvffi7bffjrfffjtWrVoVy5Yti8WLF8e7776bOhMA2IQpU6ZE06ZNU2dkTrdu3WLYsGExY8aM1CkAAAAAAAAAAAAAAGwHhnsAAAAAAAAAAAAAAOCfOnToED179ox99tnnXwM9LVu2jBYtWkT9+vVT51VZgwYNYtddd41dd911k1/zj3/8I956661YtWpV/OUvf4lly5bFkiVL4plnntmOpQDAF7Vt2zb69++fOiOzfvjDHxruAQAAAAAAAAAAAADICMM9AAAAAAAAAAAAAABkTv369aN3795x0EEHRadOnaJ169axxx57RNOmTVOnbTc777xz7LzzztGxY8f/uH3dunXx17/+NZYvXx5//vOfY+HChTF//vyorKxMVAoA2TJhwoRo2LBh6ozM2nvvveO8886LadOmpU4BAAAAAAAAAAAAAKCWFUTExtQRAAAAAAAAAAAAAABQmw477LA49NBDo2vXrtGuXbto3bp11K9fP3VW3vjkk0/i9ddfjz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUlJbH11lvH1ltvnZ1CgZo4cWIsXrw4OwMA4As9//zz2QkAAAAAAAAA0GSUZgcAAAAAAAAAAEAhqKysjJYtW2ZnsB4fffRRDBkyJDujSRs7dmy89tpr2RnU0p577hn9+vXLzgCgjvr37x/z58/PzgD4p3fffTcGDBiQnQEA0KQ99NBD8eyzz2ZnAAWguro6xo0bl50BAFArTz/9dHzyySfZGQAAAAAAAADQJBjuAQAAAAAAAACg6HXv3j169eqVnUENbr311pg3b152RpN31VVXZSdQBwMGDIiysrLsDADqYNmyZTF8+PDsDIB/GjVqVCxbtiw7AwCgybvkkkuyE4AC8Ne//jX+8pe/ZGcAANRKdXV1zJ8/PzsDAAAAAAAAAJoEwz0AAAAAAAAAABS9wYMHR4sWLbIzWI8lS5bEsGHDsjOahcsvvzxmz56dnUEtdezY0ec+QBN0/fXXx8SJE7MzAOLPf/5zXHPNNdkZAADNwl133RXTp0/PzgCSjRs3LjsBAKBO3n777ewEAAAAAAAAAGgSDPcAAAAAAAAAAFDUevbsGT179szOoAY333xzLFq0KDuj2XCoXNPyy1/+Mtq2bZudAUAd9e3bN5YsWZKdARSx5cuXxxlnnJGdAQDQrFxyySXZCUCi559/Pu66667sDACAOpkzZ052AgAAAAAAAAA0CYZ7AAAAAAAAAAAoahUVFVFa6jaaQrRw4cI477zzsjOaleuvvz5mzpyZnUEtbbPNNjFmzJjsDADqaO7cuTF69OjsDKCIXX755fHCCy9kZwAANCt33XVX/OUvf8nOAJJcdtll2QkAAHX23HPPZScAAAAAAAAAQJPgxBEAAAAAAAAAAIrWUUcdFfvtt192BjW44YYbYtWqVdkZzc6ll16anUAdHHfccdG5c+fsDADq6NJLL40///nP2RlAEZo5c2YMHjw4OwMAoFkaMWJEVFdXZ2cAjezFF1+MW265JTsDAKDOJk6cGOvWrcvOAAAAAAAAAICCZ7gHAAAAAAAAAICiNXDgwCgpKcnOYD3efffdGDp0aHZGs3TrrbfG9OnTszOopTZt2sTo0aOzMwDYAKecckosWbIkOwMoIqtWrYozzjgjOwMAoNl65JFH4rHHHsvOABrZlVdemZ0AALBB5s+fH++++252BgAAAAAAAAAUPMM9AAAAAAAAAAAUpRNOOCG6du2anUENrrrqqqiqqsrOaLYuvvjiWLduXXYGtXTYYYfFvvvum50BQB29/vrrhgiBRnX55ZfH1KlTszMAAJq1IUOGxCeffJKdATSSF198Ma677rrsDACADfbKK69kJwAAAAAAAABAwTPcAwAAAAAAAABAURo4cGB2AjV466234sILL8zOaNbuvvvuePrpp7MzqKUWLVrEiBEjsjMA2ABXXXVVPPzww9kZQBGYMWNGDBo0KDsDAKDZe+655+KOO+7IzgAawbp166KysjI7AwBgozz33HPZCQAAAAAAAABQ8Az3AAAAAAAAAABQdE4//fTYbbfdsjOoweWXXx7V1dXZGc3e2LFj/XduQr773e/G4Ycfnp0BwAY45ZRTYv78+dkZQDO2fPnyOO2007IzAACKxllnnRVLlizJzgAa2JQpU+LOO+/MzgAA2CgTJ07MTgAAAAAAAACAgme4BwAAAAAAAACAolJaWhpnnHFGdgY1ePnll2PcuHHZGUXh4YcfjsmTJ2dnUEslJSVx/vnnZ2cAsAEWLFgQZ5xxRqxduzY7BWimRo8eHc8++2x2BgBA0Vi0aFFcffXV2RlAA1q7dm0MHTo0OwMAYKNNmTIl3n///ewMAAAAAAAAAChohnsAAAAAAAAAACgqAwcOjE6dOmVnUIPLLrssO6GojBkzJqqqqrIzqKVvfetb8Ytf/CI7A4ANcO+998a1116bnQE0Q48++mhccMEF2RkAAEVn2LBh8corr2RnAA3kD3/4Q0yZMiU7AwCgXsycOTM7AQAAAAAAAAAKmuEeAAAAAAAAAACKRllZWfTt2zc7gxrMnDkzrr/++uyMovL444/HY489lp1BHZx99tlRWurWP4CmqH///vG3v/0tOwNoRubPnx+9e/fOzgAAKErV1dVx7rnnRnV1dXYKUM+WLVsW5557bnYGAEC9+ctf/pKdAAAAAAAAAAAFzbP3AQAAAAAAAAAoGiNHjowddtghO4MaXHTRRdkJRamysjLWrFmTnUEtderUKc4777zsDAA2QHV1dZx00kmxZMmS7BSgGVizZk3069cv5s+fn50CAFC07r///njwwQezM4B6dtVVV8Wrr76anQEAUG8mTJgQVVVV2RkAAAAAAAAAULAM9wAAAAAAAAAAUBTKy8ujd+/e2RnUYPr06XH77bdnZxSladOmxcSJE7MzqIO+fftGeXl5dgYAG+DFF1+MAQMGOBwN2Gjjxo2L+++/PzsDAKDoDRgwwEArNCOzZ8+OIUOGZGcAANSrV199NV5++eXsDAAAAAAAAAAoWIZ7AAAAAAAAAAAoCiNGjIj27dtnZ7Ae69ati8rKyuyMojZixIhYvXp1dga1tO2228bIkSOzMwDYQDfffHNce+212RlAE/bnP/85Bg4cmJ0BAEBEzJ07Ny644ILsDKAeVFVVxaBBg6K6ujo7BQCg3k2ZMiU7AQAAAAAAAAAKluEeAAAAAAAAAACavXbt2sUJJ5yQnUENnnrqqXjooYeyM4rajBkz4sEHH8zOoA5OPPHE6NChQ3YGABuoX79+MW3atOwMoAmaN29eHH/88dkZAAB8ysUXXxxTp07NzgA20n333ef3VQBAs3XHHXdkJwAAAAAAAABAwTLcAwAAAAAAAABAszd69Oho27ZtdgbrUV1dHZWVldkZRMTw4cNj5cqV2RnUUnl5eYwZMyY7A4CNcOyxx8a8efOyM4AmZOXKldG7d29/dwAAFKDTTz89li9fnp0BbKAFCxbEGWeckZ0BANBgnnrqqXj99dezMwAAAAAAAACgIBnuAQAAAAAAAACgWevcuXMcc8wx2RnUYNKkSTFp0qTsDCJi9uzZcd9992VnUAc/+tGPomvXrtkZAGygd955J0466aRYsWJFdgrQRAwdOtT3TwAABWrWrFlx4YUXZmcAG2DdunUxaNCgWLBgQXYKAECD+uMf/5idAAAAAAAAAAAFyXAPAAAAAAAAAADN2rBhw6JNmzbZGazH2rVro7KyMjuDTxk6dGgsX748O4NaatmyZYwcOTI7A4CN8Pjjj8egQYNi3bp12SlAgbv55pvjkksuyc4AAOBzVFZWxlNPPZWdAdTRPffcEzfffHN2BgBAg7vmmmti7dq12RkAAAAAAAAAUHAM9wAAAAAAAAAA0Gx16dIljjzyyOwMavDHP/4xpk6dmp3Bp7z55ptx5513ZmdQBwcddFD06tUrOwOAjXDVVVfFddddl50BFLCpU6dG7969szMAAKiF0047LT744IPsDKCW5s2bF7/4xS+yMwAAGsWcOXPi2Wefzc4AAAAAAAAAgIJjuAcAAAAAAAAAgGarsrIyWrZsmZ3BeqxevTqGDx+encF6VFRUxNKlS7MzqKXS0tKoqKjIzgBgI5122mnxyCOPZGcABeiNN96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aLh(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLh(8,
					"googleplay", 3,
					"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"
					), aLh(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aLh(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLh(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLh(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLh(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLh(14, "bestPlayer", 5,
					"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"
					), aLh(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aLh(16, "apple", 3,
					"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"
					), aLh(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aLh(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aLh(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aLh(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aLh(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aLh(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(b7) {
		return canvas[b7]
	}, this.qT = function(name) {
		for (var g = fj.length - 1; 0 <= g; g--)
			if (fj[g] === name) return canvas[g];
		return aLc
	}, this.aAC = function() {
		return aLb <= 0
	}, this.aGm = function() {
		aLb = 0, aLe()
	}
}

function aGT() {
	var dK, dL, tz, dR;

	function k5() {
		u0(), 2 !== aO.data.aIncomeType && (aO.data.aIncomeData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		2 === aO.data.aIncomeType ? (aZ.ky.u2(tz.u3(), aO.data.aIncomeData, 255), aZ.ky.max(aO.data.aIncomeData) || (aO.data.aIncomeType = 0)) : 1 !== aO.data.aIncomeType || aO.data.aIncomeValue || (aO.data.aIncomeType = 0)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(43), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(111), L(112), L(80)],
			value: aO.data.aIncomeType
		}, function(b7) {
			u0(), 2 !== b7 || aO.data.aIncomeData || (aO.data.aIncomeData = new Uint8Array(aO.aR)), aO.data.aIncomeType = b7, bT.c4(22)
		})), dR.push(dY)
	}(dR = []), function(dR) {
		var dY;
		1 === aO.data.aIncomeType && ((dY = new dZ).da("Value"), dY.dq(new dr({
			b7: -1,
			value: aO.data.aIncomeValue
		}, 1, 0, function(br) {
			var value = gT.gn(Math.floor(br.target.value), 0, 255);
			br.target.value = aO.data.aIncomeValue = value
		})), dR.push(dY))
	}(dR), function(dR) {
		var dY;
		2 === aO.data.aIncomeType && ((dY = new dZ).da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.aIncomeData, 4)), dY.dq(tz), dR.push(dY))
	}(dR), dR))
}

function jo(b8, fi) {
	return 0 <= b8 ? gT.gU(b8, fi) : -gT.gU(-b8, fi)
}

function aLn(aq) {
	return aq * aq
}

function aAK(b8, fi) {
	return fi < b8 ? b8 : fi
}

function aAJ(b8, fi) {
	return b8 < fi ? b8 : fi
}

function aDH(b8, aq, fi) {
	return aq < b8 ? b8 : fi < aq ? fi : aq
}

function aLo(aq, a3) {
	for (var aH = gT.gU(aq + 1, 2), g = 0; g < a3; g++) aH = gT.gU(aH + gT.gU(aq, aH), 2);
	return aH
}

function aEC(aq, a3) {
	return aq < 1 ? 0 : aLo(aq, a3)
}

function pv(s, u, s6, iL, w, x, s7, uT) {
	return !(s + s6 <= w || u + iL <= x || w + s7 <= s || x + uT <= u)
}

function pq(s, u, s6, iL, w, x, s7, uT) {
	return s <= w && u <= x && w + s7 <= s + s6 && x + uT <= u + iL
}

function a81(aq) {
	return Math.floor(!!aq * (1 + Math.log2(aq + .5)))
}

function dr(aLp, type, aLq, aLr) {
	var br;
	this.br = document.createElement("input"), (br = this.br).type = type ? "number" : "text", br.id = "input" + bT.i.aL8++, br.value = aLp.value, br.style.width = "100%", br.style.userSelect = "none", br.style.outline = "none", br.style.resize =
		"none", br.style.border = "inherit", br.style.font = "inherit", br.style.color = e8.e9, br.style.backgroundColor = e8.aL9, br.style.fontSize = "1em", br.style.padding = "0.1em 0.2em", br.addEventListener("focus", function() {
			o.aA5++
		}), br.addEventListener("blur", function() {
			o.aA5--, -1 !== aLp.b7 && df.dm.dn(aLp.b7, br.value)
		}), br.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== aLp.b7 && df.dm.dn(aLp.b7, br.value), aLq ? aLq() : br.blur())
		}), aLr && br.addEventListener("input", function(eZ) {
			aLr(eZ)
		})
}

function my() {
	this.aLs = [], this.aLt = [], this.d = function() {
		this.aLs = [], this.aLt = []
	}, this.cT = function() {
		0 <= this.aLs.length && this.aLu(this.aLs), 0 <= this.aLt.length && this.aLu(this.aLt)
	}, this.aLu = function(bu) {
		for (var fi = -1, g = bu.length - 1; 0 <= g; g--)
			if (bu[g].cQ--, bu[g].cQ <= 0) {
				fi = g;
				break
			} for (g = fi; 0 <= g; g--) bu.shift()
	}, this.aLv = function(id, aEI, aLw) {
		return this.aIk(this.aLs, id, aEI, aLw)
	}, this.a6E = function(id, aEI, aLw) {
		return this.aIk(this.aLt, id, aEI, aLw)
	}, this.aIk = function(bu, id, aEI, aLw) {
		return ! function(bu, id, aEI) {
			var g, qh;
			for (g = aEI.length - 1; 0 <= g; g--)
				for (qh = bu.length - 1; 0 <= qh; qh--)
					if (bu[qh].player === aEI[g] && id === bu[qh].id) return 1;
			return
		}(bu, id, aEI) && (aLw && function(bu, id, aEI) {
			var g;
			for (g = aEI.length - 1; 0 <= g; g--) bu.push({
				player: aEI[g],
				id: id,
				cQ: 384
			})
		}(bu, id, aEI), !0)
	}
}

function aAd() {
	this.aLz = function() {
		for (var fg, a3 = bB.bC, aEI = bB.bD, fI = fZ.fI, yA = this.aEl(), g = 0; g < a3; g++) fg = aEI[g], aZ.aa.b0(fg) || (fI[fg] = yA);
		var fF = fZ.fF,
			fG = fZ.fG,
			fH = fZ.fH,
			fJ = fZ.fJ,
			a3 = aO.aP;
		for (g = 0; g < a3; g++)(0 === fJ[g] || fH[g] < 1 || 2 * fF[g] > 3 * (fG[g] + fH[g])) && (fI[g] = 0);
		var aM0 = 0;
		for (g = 0; g < a3; g++) aM0 += 0 < fI[g];
		return aM0
	}, this.aEl = function() {
		return Math.min(65535, cR.gS())
	}
}

function aM1() {
	this.aM2 = 1, this.a5I = function(gz) {
		aO.cq ? dF.a5H.a5I(aO.b2, gz) : dc.p0.a1u(gz)
	}, this.a5J = function(gC, aL) {
		this.aM2 && (this.aM2 = 0, df.dm.dn(182, gC)), aO.cq ? dF.a5H.a5J(aO.b2, gC, aL) : dc.p0.a1v(gC, aL)
	}, this.aEH = function(gC, gG) {
		aO.cq ? dF.a5H.a5K(aO.b2, gC, gG) : dc.p0.a1w(gC, gG)
	}, this.s9 = function(gC, gz) {
		gz = (gz << 3) + gD.xH[6];
		aO.cq ? dF.a5H.s9(aO.b2, gC, gz) : a4.x7.x8(aO.b2) && dc.p0.a1x(gC, gz)
	}, this.sC = function(gC) {
		849 === gC && (gC = 850);
		var a20 = gD.xH[3];
		aO.cq ? dF.a5H.sC(aO.b2, gC, a20) : a4.a1k.aM3(aO.b2, a20) && dc.p0.a1z(gC, a20)
	}, this.aM4 = function(a20) {
		aO.cq ? dF.a5H.aM4(aO.b2, a20) : dc.p0.a1z(849, a20)
	}, this.a5L = function(aL) {
		aO.cq ? dF.a5H.a5L(aO.b2, aL) : dc.p0.a21(aL)
	}, this.ts = function(ti) {
		aO.cq ? dF.a5H.a5M(aO.b2, ti) : dc.p0.a22(ti)
	}, this.y2 = function(a24) {
		aO.cq ? dF.a5H.y2(aO.b2, a24) : dc.p0.a23(a24)
	}, this.a5N = function() {
		aO.cq ? dF.a5H.a5N(aO.b2) : dc.p0.a25()
	}, this.yQ = function() {
		aO.cq ? dF.a5H.yQ(aO.b2) : dc.p0.a21(513)
	}, this.a5P = function(gC, gz, aL) {
		aO.cq ? dF.a5H.a5P(aO.b2, gC, gz, aL) : dc.p0.a26(gC, gz, aL)
	}
}

function nD() {
	var gs = 0,
		gv = 0;
	this.aM5 = function(aF, aG) {
		gs = aF, gv = aG
	}, this.aM6 = function(code) {
		var gp, gt, gz;
		aO.i6 || ce.cf || (aZ.aa.yN(0) || aZ.aa.yN(1)) && aZ.aa.fQ(aO.b2) && (iJ.ia(gs, gv) ? iJ.i5 = !1 : lB.ia(gs, gv) || (gp = gq.gr(gs), gt = gq.gu(gv), gz = gq.h0(gp, gt), gq.gw(gp, gt) && (0 === code ? function(gz) {
			var aMA, h1, yc;
			aO.cp ? -1 !== (aMA = m0.aMB(gz)) && dF.tr.a5I(gz) : (h1 = gq.h2(gz), h3.aCE(h1) ? (aMA = lO.a0N.aIY(h1)) && (yc = gq.h2(aMA), yc = h3.sl(yc) ? aO.aR : h3.h5(yc), dF.tr.a5P(iJ.iO(), aMA, yc)) : (aMA = m0.aMC(gz)) <
				0 || (h1 = gq.h2(aMA), h3.sl(h1) ? m1.t2(aO.b2) ? dF.tr.a5J(iJ.iO(), aO.aR) : lJ.am(aO.b2) && lY.aMD(aO.aR, iJ.iO()) : (yc = h3.h5(h1), m1.r5(yc, aO.b2) && (m1.t4(aO.b2, yc) ? dF.tr.a5J(iJ.iO(), yc) : lJ.am(aO
					.b2) && lY.aMD(yc, iJ.iO())))))
		}(gz) : 1 === code ? function(gz) {
			a4.a1g.x5(aO.b2, gz) && dF.tr.s9(iJ.iO(), gD.xH[7])
		}(gz) : 2 === code && function(gz) {
			a4.a1k.aE5(aO.b2, gz) && dF.tr.sC(iJ.iO())
		}(gz))))
	}, this.aME = function() {
		if (!aO.i6 && !ce.cf && aZ.aa.yN(1)) {
			var fg = aO.b2;
			if (aZ.aa.fQ(fg)) {
				var a3 = lJ.am(fg);
				if (a3 < 1) ! function() {
					var fg = aO.b2;
					if (m1.t2(fg)) dF.tr.a5J(iJ.iO(), aO.aR);
					else
						for (var sk = h3.sk, fC = fZ.fC, a3 = fC[fg].length, aMH = Math.floor(Math.random() * a3), g = 0; g < a3; g++)
							for (var xa = 3; 0 <= xa; xa--) {
								var qh = fC[fg][(g + aMH) % a3] + sk[xa];
								if (h3.h4(qh)) {
									qh = h3.h5(qh);
									if (qh !== fg && (!aO.qX || m1.r5(fg, qh))) return dF.tr.a5J(iJ.iO(), qh)
								}
							}
				}();
				else {
					for (var aMG = 0, aM = lJ.ao(fg, 0), g = 1; g < a3; g++) {
						var fm = lJ.ao(fg, g);
						fm < aM && (aM = fm, aMG = g)
					}
					dF.tr.a5J(iJ.iO(), lJ.an(fg, aMG))
				}
			}
		}
	}, this.yQ = function() {
		if (!aO.i6 && !ce.cf && aZ.aa.fQ(aO.b2) && aZ.aa.yN(1)) return lV.i1 ? lV.y0(aO.b2) ? void dF.tr.y2(1) : void 0 : void(lV.yM(aO.b2) && dF.tr.yQ())
	}
}

function aMJ() {
	this.bu = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aMK = function() {
		for (var aML = [], bu = this.bu, a3 = bu.length, g = 0; g < a3; g++) aML.push(bu[g]);
		var jk = df.dg.data[12].du;
		for (g = 0; g < a3; g++)
			if (aML[g] === jk) {
				aML.splice(g, 1), a3--;
				break
			} aML.sort(), a3++, aML.unshift(jk);
		try {
			if ("undefined" == typeof Intl) return aML;
			for (g = 0; g < a3; g++) {
				var eJ = new Intl.DisplayNames([aML[g]], {
					type: "language"
				}).of(aML[g]);
				eJ !== aML[g] && (aML[g] = aML[g] + ": " + eJ)
			}
		} catch (br) {
			console.log("error 3646: " + br)
		}
		return aML
	}, this.aMN = function(ux) {
		for (var eJ = df.dg.data[12].value, a3 = ux.length, g = 0; g < a3; g++)
			if (eJ === ux[g].split(":")[0]) return g;
		return 0
	}, this.aMO = function(aMP) {
		if (aMP && !(aMP.length < 2)) {
			aMP = aMP.split("-")[0].toLowerCase();
			for (var bu = this.bu, a3 = bu.length, g = 0; g < a3; g++)
				if (aMP === bu[g]) return g
		}
		return -1
	}
}

function aMQ() {
	this.tt = function(ti, player) {
		b3.ts(aO.b2, player, ti), dc.p0.a27(ti, player)
	}, this.aMR = function(player) {
		b3.a6F(player, 0), dc.p0.a2A(player)
	}, this.aMS = function(aMT, player) {
		b3.aMU(aMT, player), dc.p0.a2C(aMT, player)
	}, this.aIX = function() {
		aO.cq || aO.i6 || dc.aMV.aIX()
	}
}

function ge() {
	this.aGB = 28, this.gh = 0, this.aG9 = null;
	var aMW = this.aGC = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aMa(tJ, aMb) {
		var aF, aG, gz, vP, a9 = aZ.e2.a80(tJ, tJ),
			aA = aZ.e2.getContext(a9, !0),
			pi = aZ.e2.getImageData(aA, tJ, tJ),
			pj = pi.data,
			aj = (tJ >> 1) - .5,
			aMc = .5 + aj;
		for (aMc *= aMc, aG = 0; aG < tJ; aG++)
			for (aF = 0; aF < tJ; aF++) vP = (vP = aF - aj) * vP + (vP = aG - aj) * vP, pj[gz = 4 * (aG * tJ + aF)] = aMb[0], pj[1 + gz] = aMb[1], pj[2 + gz] = aMb[2], pj[3 + gz] = (aMc - vP) * aMb[3] / aMc;
		return aA.putImageData(pi, 0, 0), a9
	}

	function aMj(g, aA, a9, tJ) {
		var highlight, aF, aG;
		0 !== fZ.f3[g] && 0 !== fZ.f8[g] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[g]) && (tJ *= 2), aF = fZ.f4[g] + fZ.f6[g] + 1 - tJ - 2 >> 1, aG = fZ.f5[g] + fZ.f7[g] + 1 - tJ - 2 >> 1, highlight ? aA
			.drawImage(a9[aO.qX ? 9 === aO.fP && 5 === gc.aM[g] ? 3 : e.t1[g] : g < aO.aP ? 1 : 0], aF, aG, tJ, tJ) : aA.drawImage(a9[aO.qX ? 9 === aO.fP && 5 === gc.aM[g] ? 3 : e.t1[g] : g < aO.aP ? 1 : 0], aF, aG))
	}
	this.d = function() {
		var ig;
		this.gh = 700,
			function(ig) {
				var tJ = ig.aGB;
				if (ig.aGC = [], aMW = [], aO.qX) {
					for (var g = 0; g <= aO.zp; g++) ig.aGC.push(aMa(tJ, e.f[e.qc[g]])), aMW.push(aMa(tJ >> 1, e.f[e.qc[g]]));
					9 === aO.fP && aMW.push(aMa(tJ, e.f[1]))
				} else ig.aGC.push(aMa(tJ, e.f[7])), ig.aGC.push(aMa(tJ, e.f[4])), aMW.push(aMa(tJ >> 1, e.f[7]))
			}(this),
			function(ig, aMg) {
				var g, aG9 = ig.aG9,
					aA = aZ.e2.getContext(aG9, !0),
					a3 = aO.aR,
					tJ = ig.aGB >> 1;
				aA.imageSmoothingEnabled = !1, aA.setTransform(1, 0, 0, 1, 0, 0), aMg && aA.clearRect(0, 0, aG9.width, aG9.height);
				if (9 === aO.fP) {
					tJ <<= 1;
					ig = lX.aMi[5];
					for (g = a3 - ig; g < a3; g++) aMj(g, aA, aMW, tJ);
					a3 -= ig, tJ >>= 1
				}
				for (g = aO.aP; g < a3; g++) aMj(g, aA, aMW, tJ)
			}(this, null !== (ig = this).aG9 && ig.aG9.width === a1.a2 - 2 && ig.aG9.height === a1.jg - 2 || (ig.aG9 = aZ.e2.a80(a1.a2 - 2, a1.jg - 2), !1)), aO.cp || this.aDQ()
	}, this.j = aMa, this.aDQ = function() {
		for (var a3 = aO.aP, tJ = this.aGB, aGC = this.aGC, aA = aZ.e2.getContext(this.aG9, !0), g = 0; g < a3; g++) aMj(g, aA, aGC, tJ)
	}
}

function aMk() {
	function aMm() {
		bT.a2X(29) && (bH.i.bS && 1 === bH.i.bV[2] && bT.a2X(29).kb(), bH.i.bS = 0, bT.a2X(29).kW(), bT.a2X(29).kV(), bH.eU.aFu())
	}
	this.bK = new Array(4), this.bV = [0, 0, 1, 0], this.bS = 0, this.kx = [0, 0], this.d = function() {
		for (var g = 0; g < this.bK.length; g++) this.bK[g] = new aMl;
		this.bV[0] = df.dg.data[158].value, __fx.lobbyReminders.setRooms(this.bK), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aEd({
				id: 7,
				s: text
			})
		})
	}, this.a9l = function() {
		aMm(), bH.aMn.d(), __fx.lobbyReminders.check()
	}, this.a9t = function() {
		bH.aMn.a9t();
		for (var g = 0; g < bH.i.bK.length; g++) {
			var bJ = bH.i.bK[g];
			0 === bJ.kn ? bJ.aMq = 0 : (bJ.kh = Math.max(bJ.kh - bJ.aMq % 2, 0), bJ.aMq++)
		}
		aMm(), __fx.lobbyReminders.check()
	}, this.a9y = function(a9u) {
		this.bV[0] !== a9u || this.bV[2] || bT.a2X(29).l2()
	}
}

function mp() {
	var s, u, w, x, aMr = 0,
		aMs = 0;

	function aMw() {
		return Math.pow(Math.pow(w - s, 2) + Math.pow(x - u, 2), .5)
	}

	function aMu(br) {
		s = o.bv * br.touches[0].clientX, u = o.bv * br.touches[0].clientY, w = o.bv * br.touches[1].clientX, x = o.bv * br.touches[1].clientY
	}
	this.aMt = function(br) {
		return 1 < br.touches.length ? (aMs = cR.cQ, aMr = 3, aMu(br), l9.eB(), !0) : (aMr = 0, !1)
	}, this.aMv = function(br) {
		var hF, aJy, aJz;
		return 0 !== aO.cd && 1 < br.touches.length && (aMr = Math.max(aMr - 1, 0), l5.eN() && (hF = aMw(), aMu(br), br = aMw(), aJy = Math.floor((s + w) / 2), aJz = Math.floor((u + x) / 2), ib.aMx(aJy, aJz, Math.max(.125, br) / Math.max(.125,
			hF)), cR.cZ = !0), !0)
	}, this.aMy = function() {
		var aF, aG;
		return !!(aMr && (aMr = 0, cR.cQ < aMs + 500)) && (aF = (s + w) / 2, aG = (u + x) / 2, l9.aMz(aF, aG), l9.click(aF, aG, !0) && (cR.cZ = !0), !0)
	}
}

function mJ() {
	var r, canvas, i2, aN0, aN1, aN2 = -1;

	function aN3() {
		var vq, i0 = canvas.getContext("2d", {
			alpha: !0
		});
		i0.clearRect(0, 0, r, r), i0.fillStyle = e8.iM, i0.fillRect(0, 0, r, r), 9 === aN0 && (i0.fillStyle = e8.aCz, i0.fillRect(0, 0, r, r)), i0.fillStyle = e8.e9, i0.fillRect(0, 0, r, 1), i0.fillRect(0, 0, 1, r), i0.fillRect(0, r - 1, r, 1), i0
			.fillRect(r - 1, 0, 1, r), vq = .9 * r / lI.get(0).width, i0.imageSmoothingEnabled = !0, i0.setTransform(vq, 0, 0, vq, Math.floor((r - vq * lI.get(0).width) / 2), Math.floor((r - vq * lI.get(0).height) / 2)), i0.drawImage(lI.get(0), 0,
			0), i0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aN6(iW, iX) {
		if (!ce.cf) return iW <= r + i9.gap && iX >= iJ.aG ? 9 : -1;
		if (iW <= 4 * r + i9.gap) {
			if (iX >= iJ.aG) return 0;
			if (iX >= iJ.aG - r - aN1 * i9.gap) return 2
		} else if (iW <= 7 * r + i9.gap && iX >= iJ.aG - r - aN1 * i9.gap) return 1;
		return -1
	}
	this.cf = !1, this.d = function() {
		aN0 = -1, this.cf = !1, aN1 = c9.cA.i7() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		r = iJ.r, (canvas = document.createElement("canvas")).width = r, canvas.height = r, i2 = aZ.e2.iA(1, (c9.cA.i7() ? .5 : .45) * r), aN3()
	}, this.h7 = function() {
		return !(1 !== aO.cd || aO.cp || (aO.i6 ? !cU.cg : this.cf && aO.cq))
	}, this.y1 = function() {
		this.cf = !this.cf, this.cf ? (cU.aN4(!1), aO.i6 && cU.cg && cU.dE(!0), this.aN5(), 9 === aN0 && (aN0 = 0)) : (aN0 = -1, aN3(), !aO.cq || 1 !== aO.cd || aO.cp || aO.i6 || c9.cA.setState(1)), cR.cZ = !0
	}, this.aN5 = function() {
		(aO.cq || aO.i6) && 1 === aO.cd && (lE.cw(!0), aO.cp || setTimeout(function() {
			cj.h8()
		}, 0), c9.cA.setState(0))
	}, this.ia = function(iW, iX) {
		return 0 <= (aN2 = aN6(iW, iX)) || !ce.cf || aO.cq || aO.i6 || gR.i1 || ce.y1(), aN2
	}, this.io = function(iW, iX) {
		iW = aN6(iW, iX);
		iW !== aN0 && (aN0 = iW, this.cf || aN3(), cR.cZ = !0)
	}, this.aN8 = function(iW, iX) {
		iW = aN6(iW, iX);
		return -1 !== iW && aN2 === iW && (this.cf ? aO.zs ? (0 <= iW && cU.aN4(!1), !aO.i6) : (0 === iW ? aO.aN9() : 1 === iW ? this.y1() : 2 === iW && bT.c4(1, 0), !0) : 9 === iW && (this.y1(), !0))
	}, this.k = function() {
		var p;
		this.cf ? (p = Math.floor(5.5 * r), aB.setTransform(1, 0, 0, 1, i9.gap, iJ.aG), aB.fillStyle = e8.iM, aB.fillRect(0, 0, p, r), 0 === aN0 ? (aB.fillStyle = e8.aCz, aB.fillRect(0, 0, 4 * r, r)) : 1 === aN0 && (aB.fillStyle = e8.aCz, aB
				.fillRect(4 * r, 0, Math.floor(1.5 * r), r)), aB.fillStyle = e8.e9, aB.fillRect(0, 0, p, 1), aB.fillRect(0, 0, 1, r), aB.fillRect(4 * r, 0, 1, r), aB.fillRect(0, r - 1, p, 1), aB.fillRect(p - 1, 0, 1, r), aB.font = i2, aZ.e2
			.textBaseline(aB, 1), aZ.e2.textAlign(aB, 1), aB.fillText(L(291), 2 * r, .54 * r), p = .4 * r, ce.aHz(i9.gap + 4 * r + (1.5 * r - p) / 2, iJ.aG + .3 * r, p), p = 1, aB.setTransform(1, 0, 0, 1, i9.gap, iJ.aG - p * aN1 * i9.gap -
				p * r), aB.fillStyle = e8.iM, aB.fillRect(0, 0, 4 * r, r), aN0 === p + 1 && (aB.fillStyle = e8.aCz, aB.fillRect(0, 0, 4 * r, r)), aB.fillStyle = e8.e9, aB.fillRect(0, 0, 4 * r, 1), aB.fillRect(0, 0, 1, r), aB.fillRect(4 * r,
				0, 1, r), aB.fillRect(0, r - 1, 4 * r, 1), aB.fillText(L(0 === p ? 291 : 292), 2 * r, .54 * r), aB.setTransform(1, 0, 0, 1, 0, 0)) : aB.drawImage(canvas, i9.gap, iJ.aG)
	}, this.aNC = function(player) {
		return 0 !== fZ.f3[player] && 2 !== aO.cd && !aZ.aa.b0(player)
	}, this.aHz = function(aF, aG, a3) {
		aB.setTransform(1, 0, 0, 1, aF, aG), aB.lineWidth = i9.tu, aB.strokeStyle = e8.e9, aB.beginPath(), aB.moveTo(0, 0), aB.lineTo(a3, a3), aB.moveTo(0, a3), aB.lineTo(a3, 0), aB.stroke()
	}
}

function aNE() {
	this.L84 = ["📰 Propaganda", "Back", "Links", "Propaganda Text", "Colors", "Reset", "Language", "Preview", "Show", "Launch Campaign", "Gold Investment", "Launch", "Cancel", "Confirm", "Admin Election", "Blockchain", "Clan Leader Election",
		"📜 Logs", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans",
		"Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks",
		"Ships landed", "Contest", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Players", "Close {button}", "Ready", "Player Count", "Next Game", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!", "Clans", "Clan Members", "Admins", "1v1 Players", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Ship launched!", "Ship intercepted!", "Spawning", "Options", "Random", "Clustered", "Customized", "Manual Spawn", "📜 Game Log", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Team {0}",
		"Team {0} won the game!", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "You earned {10} gold!", "{0} earned {11} gold!", "Starting Resources", "Default", "Uniform", "Humans", "Bots", "Spectators", "Threshold", "Percentage", "Growth",
		"Income", "Time", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer",
		"Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Send", "Account Name", "Copy", "Search", "Password", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ",
		"You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.",
		"Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.",
		"Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Offensive Name",
		"Hate Speech", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio",
		"Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy",
		"Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics",
		"Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked",
		"Join Territorial.io on Patreon:", "Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "LEADERBOARD", "Loading", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "Clan Chart",
		"🛠️ Options", "Incoming Boat!", "Incoming Ship!", "{0} defeated {1}!", "You are leaving Territorial.io.", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon",
		"Best Zombie Player", "🛠️ List Options", "Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥",
		"You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!",
		"Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.",
		"Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Activated", "You are leaving Territorial.io!",
		"second played", "seconds played", "Account Recovery", "Request Email", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount",
		"Send gold only to trusted accounts!", "Propaganda", "Report Abuse", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "Replay Error", "Warning", "Loading...", "⚔️ Play", "Map", "Settings",
		"Game Mode", "Mixed", "Team dependent", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe",
		"World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Highlighting", "Intensity", "Shortcut Keys", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "🔑 My Account", "📈 Clan Charts", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version",
		"🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Adjust", "My Color", "Type your message here...", "Lobby", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Votes",
		"Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name",
		"🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe", "More Options", "Y-Axis Compression", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "YOU CONQUERED", "YOU WERE CONQUERED BY",
		"THE GAME WAS WON BY", "MAP:", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}"
	]
}

function nM() {
	this.pw = 0, this.px = 0, this.pr = 0, this.ps = 0, this.pt = 0, this.pu = 0, this.x0 = [0, 0, 0, 0], this.aBx = function() {
		this.pw = ib.aGA(), this.px = ib.xz(), this.pr = -this.pw, this.ps = -this.px, this.pt = o.p / m, this.pu = o.r / m, this.x0[0] = Math.floor(this.pr), this.x0[1] = Math.floor(this.ps), this.x0[2] = Math.floor(this.x0[0] + this.pt + 1),
			this.x0[3] = Math.floor(this.x0[1] + this.pu + 1), cj.ww = !0
	}
}

function m5() {
	this.aNF = "https://territorial.io/changelog", this.aNG = "https://territorial.io/terms", this.aNH = "https://territorial.io/privacy", this.aNI = "https://territorial.io/tutorial", this.aNJ = "https://territorial.io/players", this.aNK =
		"https://territorial.io/clans", this.aNL = "https://territorial.io/clan-results", this.a9A = "https://patreon.com/c/territorial", this.aJv = "https://play.google.com/store/apps/details?id=territorial.io", this.a2R =
		"https://apps.apple.com/app/id1581110913", this.aJw = "https://discord.gg/pthqvpTXmh", this.aJx = "https://www.instagram.com/davidtschacher/", this.tf =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function mK() {
	var wa, r, aNM, aNN, aNO, aNP, aNQ, aNR, aNS;

	function xz() {
		return iJ.iR(b3.yK()) ? lV.i1 ? __fx.settings.keybindButtons ? iJ.aG - 2 * iJ.r - 3 * aNM : iJ.aG - iJ.r - 2 * aNM : __fx.settings.keybindButtons ? iJ.aG - iJ.r - 2 * aNM : iJ.aG - aNM : cU.iR(b3.yL()) ? lV.i1 ? cU.xz() - iJ.r - 2 * aNM : cU
			.xz() - aNM : lV.i1 ? o.r - iJ.r - (iD.iE() + 1) * aNM : o.r - iD.iE() * i9.gap
	}

	function aNX(fh, eJ, id, fg, aNa, aNb, qk, aNc, aNd, aNe, aNj) {
		var g, i0, a9, eZ, aNk = void 0 !== aNd,
			p = Math.floor(jB.measureText(eJ, b3.i2) + 1.5 * aNN + (aNk ? r : 1.5 * aNN));
		if (cR.cZ = !0, aNj || lz.fd(eJ, aNd), p + 2 * aNM + iJ.r > o.p && !aNk && 50 !== id && 20 < eJ.length) aNX(fh, (aNj = aZ.fo.ye(eJ))[0], id, fg, aNa, aNb, qk, aNc, aNd, aNe, !0), aNX(fh, aNj[1], id, fg, aNa, aNb, qk, aNc, aNd, aNe, !0);
		else if (aNj = p + (50 === id ? aNO : 0), (a9 = document.createElement("canvas")).width = p, a9.height = r, (i0 = a9.getContext("2d", {
				alpha: !0
			})).font = b3.i2, aZ.e2.textBaseline(i0, 1), aZ.e2.textAlign(i0, 0), i0.clearRect(0, 0, p, r), i0.fillStyle = aNb, i0.fillRect(0, 0, p, r), i0.fillStyle = aNa, i0.fillText(eJ, Math.floor(1.5 * aNN), Math.floor(r / 2)), aNk && (i0
				.imageSmoothingEnabled = !0, lM.pj.tv(aNd, i0, p - r, 0, r)), 0 === (eZ = {
				cQ: fh,
				eJ: eJ,
				id: id,
				player: fg,
				canvas: a9,
				aNa: aNa,
				aNb: aNb,
				p: p,
				aNg: aNj,
				qk: qk,
				aNc: aNc,
				aNd: aNd,
				aNe: aNe
			}).cQ || 0 < wa.length && 0 < wa[0].cQ) wa.unshift(eZ);
		else {
			for (g = 1; g < wa.length; g++)
				if (0 < wa[g].cQ) return void wa.splice(g, 0, eZ);
			wa.push(eZ)
		}
	}

	function aNY(hI, fc, fi) {
		return "rgb(" + hI + "," + fc + "," + fi + ")"
	}

	function aNl(id, dl) {
		for (var a3 = wa.length, g = 0; g < a3; g++) wa[g].id === id && dl-- <= 0 && (wa.splice(g, 1), g--, a3--)
	}

	function aNm(id, player) {
		for (var aIG = !1, g = wa.length - 1; 0 <= g; g--) wa[g].id !== id || player !== aO.aR && wa[g].player !== player || (wa.splice(g, 1), aIG = !0);
		return aIG
	}

	function aO3(eJ) {
		aNX(340, eJ, 6, 0, aNY(215, 245, 255), e8.ff, -1, !1)
	}
	this.aNT = "", this.d = function() {
		var self;
		aNR = 0, aNQ = c9.cA.i7() ? 7 : 12, aNP = {
				aEI: [0, 0, 0],
				aNU: [0, 0, 0],
				aBh: [220, 180, 180],
				a0e: [0, 0, 0],
				aH: [0, 0, 0]
			}, wa = [], this.resize(), aO.cp && this.b4(0, 18), a1.ks.o5[a1.bd].name.length && aO3(L(334, [a1.ks.o5[a1.bd].name])), a1.ks.o5[a1.bd].aO4 && aO3(L(335, [a1.ks.o5[a1.bd].aO4])), aO3(L(336, [a1.a2 - 2 + "x" + (a1.jg - 2)])), aO3(L(
				337, [aZ.fo.iP(lQ.xw)])), lQ.xw !== lQ.aO5 && aO3(L(338, [aZ.fo.iP(lQ.aO5) + " (" + aZ.fo.iQ(100 * lQ.aO5 / lQ.xw, 1) + ")"])), 0 < lQ.aO6 && aO3(L(314, [aZ.fo.iP(lQ.aO6) + " (" + aZ.fo.iQ(100 * lQ.aO6 / lQ.xw, 1) + ")"])), 0 < lQ
			.a74 && aO3(L(339, [aZ.fo.iP(lQ.a74) + " (" + aZ.fo.iQ(100 * lQ.a74 / lQ.xw, 1) + ")"])), 10 === aO.fP && aNX(120, L(340), 6, 0, aNY(235, 255, 120), e8.ff, -1, !1), 0 !== (self = this).aNT.length && (aNX(200, self.aNT, 0, 0, e8.e9, e8
				.ff, -1, !1), self.aNT = ""), aO.a1R && aNX(340, L(293), 6, 0, aNY(255, 200, 0), e8.ff, -1, !1)
	}, this.resize = function() {
		var aNZ, g;
		if (r = (r = Math.floor((c9.cA.i7() ? .031 : .0249) * o.i8)) < 10 ? 10 : r, this.fontSize = Math.floor(2 * r / 3), this.i2 = aZ.e2.iA(1, this.fontSize), aNM = i9.gap, aNN = Math.floor(r / 5), 0 < wa.length)
			for (aNZ = wa, wa = [], g = aNZ.length - 1; 0 <= g; g--) aNX(aNZ[g].cQ, aNZ[g].eJ, aNZ[g].id, aNZ[g].player, aNZ[g].aNa, aNZ[g].aNb, aNZ[g].qk, aNZ[g].aNc, aNZ[g].aNd, aNZ[g].aNe, !0);
		this.aNf()
	}, this.aNf = function() {
		aNS = document.createElement("canvas");
		var eJ = L(294),
			i0 = (aNO = jB.measureText(eJ, this.i2) + 5 * aNN, aNS.height = r, aNS.width = aNO, aNS.getContext("2d", {
				alpha: !0
			}));
		i0.font = this.i2, aZ.e2.textBaseline(i0, 1), aZ.e2.textAlign(i0, 1), i0.clearRect(0, 0, aNO, r), i0.fillStyle = e8.rg, i0.fillRect(0, 0, aNO, r), i0.fillStyle = e8.e9, i0.fillText(eJ, Math.floor(aNO / 2), Math.floor(r / 2))
	}, this.yK = function() {
		var a3;
		return lV.i1 ? lV.p : 0 === (a3 = wa.length) ? 0 : 1 === a3 ? wa[0].aNg : aAK(wa[0].aNg, wa[1].aNg)
	}, this.yL = function() {
		var a3 = wa.length;
		return lV.i1 ? a3 ? aAK(lV.p, wa[0].aNg) : lV.p : 0 === a3 ? 0 : 1 === a3 ? wa[0].aNg : 2 === a3 ? aAK(wa[0].aNg, wa[1].aNg) : aAK(aAK(wa[0].aNg, wa[1].aNg), wa[2].aNg)
	}, this.ia = function(aF, aG) {
		for (var s, aNh, aNi = xz(), g = wa.length - 1; 0 <= g; g--)
			if ((aNh = aNi - (g + 1) * r) <= aG && aG < aNh + r) return 50 === wa[g].id ? aF >= o.p - aNO - aNM - wa[g].p && (aF >= o.p - aNO - aNM ? dF.aa.aMR(wa[g].player) : l5.a0p(wa[g].player, 800, !1, 0), !0) : aF >= o.p - wa[g].p - aNM && (
				736 === wa[g].id ? window.open("https://" + wa[g].eJ, "_blank") : wa[g].aNc && (wa[g].aNe && wa[g].aNe.b8 ? (aNh = wa[g].aNe.gz, s = gq.wt(aNh) - 10, aNh = gq.wu(aNh) - 10, l5.aBj(s, aNh, 19 + s, 19 + aNh)) : wa[g].aNe &&
					wa[g].aNe.fi ? l5.aBk(wa[g].player, wa[g].aNe.a20) : (l5.a0p(wa[g].player, 800, !1, 0), 0 <= wa[g].qk && (s = wa[g].qk, wa[g].qk = wa[g].player, wa[g].player = s))), !0);
		return !1
	}, this.fd = function(fh, eJ, id, fg, aNa, aNb, qk, aNc, aNd, aNe) {
		aNX(fh, eJ, id, fg, aNa, aNb, qk, aNc, aNd, aNe)
	}, this.a1E = function(c2) {
		aNX(300, c2, 252, 0, e8.e9, e8.ff, -1, !1)
	}, this.y7 = function(id) {
		for (var g = wa.length - 1; 0 <= g; g--) wa[g].id === id && (wa[g].cQ = 1)
	}, this.b4 = function(player, id) {
		0 === id ? (jB.ai(player, 0), aNl(423, 2), aNX(160, L(295, [fZ.f1[player]]), 423, player, "rgb(10,220,10)", e8.ff, -1, !1)) : 1 === id ? (aNm(50, aO.aR), jB.ai(player, 1), aNX(360, L(296, [fZ.f1[player]]), 0, player, e8.aNn, e8.ff, -1, !
				0), l5.a0p(player, 2700, !1, 0)) : 2 === id ? (jB.ai(player, 2), aNX(0, L(297), 0, player, "rgb(10,255,255)", e8.ff, -1, !0), l5.a0p(player, 2700, !1, 0)) : 3 === id ? (jB.ai(player, 2), aNX(0, L(298, [fZ.f1[player]]), 0, player,
				e8.e9, e8.ff, -1, !0), l5.a0p(player, 2700, !1, 0)) : 4 === id ? this.aJ6(1, player, player) : 5 === id ? aZ.aa.b0(aO.b2) || (function(id, aCM) {
				var g, aNz = 0,
					a3 = wa.length;
				for (g = 0; g < a3; g++)
					if (wa[g].id === id && aCM <= ++aNz) return wa.splice(g, 1)
			}(1, 5), b5.b6(player) && aNX(180, L(299, [fZ.f1[player]]), 1, player, aNY(255, 200, 180), e8.ff, -1, !0), aZ.aa.a7J(player, 10) && (aNl(573, 0), aNX(180, L(300, [fZ.f1[player]]), 573, player, e8.aNn, e8.ff, -1, !0))) : 18 === id ?
			aNX(255, L(301), 18, 0, e8.e9, e8.ff, -1, !1) : 21 === id ? aNX(220, L(302), id, 0, e8.e9, e8.ff, -1, !1) : 22 === id ? this.aJ6(2, player, player) : 59 === id && aNX(0, L(303), id, 0, e8.aNp, e8.ff, 0, !1)
	}, this.dD = function(c2) {
		aNX(200, L(304, [c2]), 94, 0, e8.e9, e8.aNq, -1, !1)
	}, this.a0v = function(aNr) {
		if (aO.b2 === aNr && !aO.cq && !aO.i6)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aNX(0, "Your Win Count is now " + __fx.wins.count, 3, aNr, e8.e9, e8.ff, -1, !0);
		fZ.f8[aNr] && (jB.ai(aNr, 2), aO.aP < 100 ? aNX(0, L(298, [fZ.f1[aNr]]), 3, aNr, e8.e9, e8.ff, -1, !0) : aNX(0, L(305, [fZ.f1[aNr]]), 3, aNr, e8.e9, e8.ff, -1, !0))
	}, this.aNs = function(h1) {
		var eJ, aNu, aNt = "(" + gq.wt(h1 >> 2) + ", " + gq.wu(h1 >> 2) + ")",
			aNc = !1,
			player = 0;
		h3.sv(h1) ? h3.sl(h1) ? aNt = L(306, [aNt]) : (player = h3.h5(h1), aO.i6 && !1 === __fx.hoveringTooltip.active && (aO.b2 = player), eJ = L(307, [aZ.i0.a3u(fZ.f0[player], aZ.e2.iA(0, 10), 150)]) + "   ", eJ = (eJ += L(308, [aZ.fo.iP(fZ.fA[
				player])]) + "   ") + L(309, [aZ.fo.iP(fZ.f8[player])]) + "   ", aO.qX && (aNu = e.fj[e.qc[e.t1[player]]], eJ += L(47) + ": " + aNu + "   "), aZ.aa.b0(player) && (eJ += L(310) + ": " + gc.aNv[gc.aM[player]] + "   "), aNt =
			eJ = (eJ += L(311, [player]) + "   ") + L(312, [aNt]), aNc = !0) : aNt = h3.aCE(h1) ? L(313, [aNt]) + "   #" + h3.xE(h1) : L(314, [aNt]), aNl(55, 0), aNX(220, aNt, 55, player, e8.e9, e8.ff, -1, aNc, void 0, void 0, !0)
	}, this.aNw = function(aNx) {
		var aj = a4.i,
			player = aj.a7[aNx] >> 3,
			eJ = (cR.cZ = !0, aNl(55, 0), L(315, [fZ.f1[player]]) + "   ");
		aNX(220, eJ += L(308, [aZ.fo.iP(aj.aCI[aNx])]), 55, player, e8.e9, e8.ff, -1, !0)
	}, this.ts = function(p0, a2B, ti) {
		p0 === aO.b2 ? aNX(175, " " + L(316, [fZ.f1[a2B]]) + ": ", 1001, a2B, aNY(200, 255, 210), e8.ff, -1, !0, ti) : this.aNy(p0, ti)
	}, this.aNy = function(p0, ti) {
		aNl(1e3, 0), aNX(175, fZ.f1[p0] + ": ", 1e3, p0, e8.e9, "rgba(5,60,25,0.9)", -1, !0, ti)
	}, this.a0u = function() {
		var c2;
		aO.fq ? (c2 = L(317), jB.a0t(L(318), 2, 1, 12), aNX(0, c2, 40, 0, "rgb(10,220,10)", e8.ff, -1, !1)) : (c2 = L(319), jB.a0t(L(320), 2, 0, 16), aNX(0, c2, 41, 0, e8.e9, e8.ff, -1, !1))
	}, this.a1G = function() {
		var dl = fZ.f1,
			bZ = aO.data;
		aNX(300, dl[0] + " [" + aO.a0n.a1M(bZ.elo[0]) + "] vs " + dl[1] + " [" + aO.a0n.a1M(bZ.elo[1]) + "]", 65, 0, e8.jC, "rgba(100,255,255,0.75)", -1, !1)
	}, this.no = function(c2) {
		aNX(350, c2, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.y8 = function(xm) {
		aNX(0, L(xm ? 321 : 322), 247, 0, e8.eA, e8.ff, -1, !1)
	}, this.a1O = function(a1L, a1N, aO0) {
		var bZ = aO.data,
			dl = fZ.f1;
		aNX(0, dl[0] + ": " + aO.a0n.a1M(bZ.elo[0]) + " -> " + a1L, 66, 0, e8.e9, aO0[0], -1, !1), aNX(0, dl[1] + ": " + aO.a0n.a1M(bZ.elo[1]) + " -> " + a1N, 66, 1, e8.e9, aO0[1], -1, !1)
	}, this.a6F = function(player, id) {
		0 === id ? aNm(50, player) ? (aNX(128, L(323, [fZ.f1[player]]), 52, player, aNY(180, 255, 180), e8.ff, -1, !0), b5.vK(player, 2, 255)) : aNX(384, L(324, [fZ.f1[player]]), 51, player, aNY(210, 210, 255), e8.ff, -1, !0) : aNm(51, player) ?
			(aNX(128, L(325, [fZ.f1[player]]), 52, player, e8.e9, "rgba(60,120,10,0.9)", -1, !0), b5.vK(player, 2, 255)) : (aNX(384, L(326, [fZ.f1[player]]), 50, player, e8.e9, "rgba(90,90,90,0.9)", -1, !0), b5.vK(player, 2, 96))
	}, this.aMU = function(aEI, target) {
		var color = aNY(210, 255, 210);
		1 < aEI.length ? aNX(230, L(327, [aEI.length, fZ.f1[target]]), 66, target, color, e8.ff, -1, !0) : aNX(230, L(328, [fZ.f1[aEI[0]], fZ.f1[target]]), 66, aEI[0], color, e8.ff, target, !0)
	}, this.a6G = function(player, target) {
		aNX(230, L(329, [fZ.f1[player], fZ.f1[target]]), 66, player, e8.e9, "rgba(75,65,5,0.9)", target, !0)
	}, this.aIJ = function(id, dl) {
		aNl(id, dl)
	}, this.wA = function(id, player) {
		aNm(id, void 0 === player ? aO.aR : player)
	}, this.aO1 = function(id) {
		for (var g = wa.length - 1; 0 <= g; g--)
			if (wa[g].id === id) return wa[g];
		return null
	}, this.gF = function(vD, aO2, player) {
		2 !== fZ.f2[aO.b2] && aNX(200, 1 === vD ? L(330, [fZ.f1[player]]) : L(331, [aZ.fo.iP(vD), fZ.f1[player]]), 30, player, "rgb(190,255,190)", e8.ff, -1, !0)
	}, this.gH = function(vD, player) {
		2 !== fZ.f2[aO.b2] && (aNl(31, 0), vD = " (" + aZ.fo.iP(vD) + ") 💸", aNX(150, vD = aZ.aa.b0(player) ? L(332) + vD : L(333, [fZ.f1[player]]) + vD, 31, player, e8.jC, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a6J = function(go) {
		for (var aH = cR.gS(), g = 2; 0 <= g; g--) 0 < aNP.a0e[g] && (go || aNP.aH[g] < aH - 220) && this.aO7(g)
	}, this.aO7 = function(id) {
		var eJ, a3 = aNP.a0e[id],
			player = aNP.aEI[id];
		aNP.a0e[id] = 0, 1 === a3 ? (0 === id ? eJ = L(341, [fZ.f1[player], fZ.f1[aNP.aNU[0]]]) : 1 === id ? eJ = L(342, [fZ.f1[player]]) : 2 === id ? eJ = L(343, [fZ.f1[player]]) : 3 === id && (eJ = L(344, [fZ.f1[player]])), aNl(7, 0), aNX(aNP
			.aBh[id], eJ, 7, aNP.aNU[id], e8.e9, e8.ff, -1, !0)) : (eJ = L(0 === id ? 345 : 1 === id ? 346 : 347, [a3]), aNl(7, 0), aNX(aNP.aBh[id], eJ, 7, player, e8.e9, e8.ff, -1, !1))
	}, this.aJ6 = function(id, qj, qk) {
		var aH = cR.gS(),
			a3 = aNP.a0e[id] + 1;
		aNP.a0e[id]++, aNP.aEI[id] = qj, aNP.aNU[id] = qk, 1 === a3 && (aNP.aH[id] = aH), (1 === a3 && (aO.a47 < 32 || 2 === aO.cd) || 1 < a3 && (aNP.aH[id] < aH - 140 || 2 === aO.cd)) && this.aO7(id)
	}, this.cT = function() {
		lZ.cT();
		for (var a1I = (a1I = wa.length - aNQ) <= 1 ? 1 : a1I * a1I, g = wa.length - 1; 0 <= g; g--) 0 < wa[g].cQ && (wa[g].cQ -= a1I, wa[g].cQ <= 0) && (cR.cZ = !0, wa.splice(g, 1));
		! function() {
			var dl, g;
			if (128 !== aNR && !(++aNR < 128))
				for (dl = 5, g = bB.bC - 1; 0 <= g; g--) 1 === fZ.f2[bB.bD[g]] && 0 < dl-- && aNX(240, L(344, [fZ.f1[bB.bD[g]]]), 1, bB.bD[g], e8.jC, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a6J(!1)
	}, this.k = function() {
		for (var vs, aG = xz(), g = wa.length - 1; 0 <= g; g--) vs = aG - (g + 1) * r, 50 === wa[g].id ? (aB.drawImage(wa[g].canvas, o.p - wa[g].p - aNO - aNM, vs), aB.drawImage(aNS, o.p - aNO - aNM, vs)) : aB.drawImage(wa[g].canvas, o.p - wa[g]
			.p - aNM, vs)
	}, this.aCC = function(id, aM) {
		var aNt, aO9 = e8.aOA;
		0 === id ? aNt = L(348) : 1 === id ? (aNt = L(349), aO9 = e8.aOB) : 2 === id ? aNt = L(350) : 3 === id ? aNt = L(351) : (aNt = aZ.fo.iP(aM), aO9 = 5 === id ? e8.aOB : e8.ff), aNl(74, 0), aNX(0, aNt, 74, 0, e8.e9, aO9, -1, !1, void 0,
			void 0, !0)
	}
}

function aOC() {
	this.a5I = function(player, gz) {
		aZ.aa.yN(0) && aZ.aa.fQ(player) && gq.aOD(gz) && (d0.d1.a7u(0, player, gz), aO.cu.ai(player, gz))
	}, this.a5J = function(player, gC, aL) {
		aZ.aa.yN(1) && aZ.aa.fQ(player) && aZ.aa.a7L(player, aL) && aZ.aa.a7O(player, gC, 12, 0) && aZ.aa.a7c(player, aL) && ((aL = lJ.ak(player, gD.a7d[0])) || lJ.al(player)) && (fZ.fF[player]++, d0.d1.a7u(1, player, gC, gD.a7d[0]), av.aOF.aOG(
			player, aL)) && (aZ.aa.a7b(player), ac.gB(player, gC), av.aOF.aOH(player))
	}, this.a5K = function(player, gC, gG) {
		aZ.aa.yN(1) && aZ.aa.fQ(player) && aO.qX && aZ.aa.a7L(player, gG) && aZ.aa.a7e(player, gG) && aZ.aa.a7T(player, aZ.aa.iN(player, gC), gG) && lP.ai(gG, gD.gE[0]) && (d0.d1.a7u(2, player, gC, gG), gN.aEH(player, gG))
	}, this.s9 = function(player, gC, a1y) {
		gD.xH[1] = 7 & a1y;
		var gz = a1y >> 3;
		aZ.aa.yN(1) && aZ.aa.fQ(player) && gq.aOD(gz) && a4.x7.x8(player) && a4.x7.aOI(gz) && aZ.aa.a7O(player, gC, 32, 0) && a4.qv.aHE(player, gz, 1) && (ac.gI(player), d0.d1.a7u(3, player, gC, a1y), aZ.aa.a7b(player), lv.aOJ.s9(player), a4.i
			.aAR(player))
	}, this.sC = function(player, gC, a20) {
		849 === gC ? this.aM4(player, a20) : aZ.aa.yN(1) && aZ.aa.fQ(player) && aZ.aa.a7O(player, gC, 32, 0) && a4.a1k.aOK(player, a20) && (ac.gI(player), d0.d1.a7u(4, player, gC, a20), aZ.aa.a7b(player), lv.aOJ.sC(player), a4.i.aAR(player))
	}, this.aM4 = function(player, a20) {
		aZ.aa.yN(1) && aZ.aa.fQ(player) && a4.a1o.cT(player, a20) && d0.d1.a7u(4, player, 849, a20)
	}, this.a5L = function(player, aL) {
		513 === aL ? this.yQ(player) : aZ.aa.yN(1) && aZ.aa.fQ(player) && (aL = Math.min(aL, aO.aR), lJ.ak(player, aL)) && (d0.d1.a7u(5, player, aL), lJ.aS(player, aL))
	}, this.a5M = function(player, ti) {
		(aZ.aa.yN(1) || aZ.aa.yN(2)) && aZ.aa.fQ(player) && (ti = gT.gn(ti, 0, 1023), d0.d1.a7u(6, player, ti), b5.vK(player, 0, ti))
	}, this.y2 = function(player, a24) {
		lV.y0(player) && (d0.d1.a7u(7, player, a24), lV.yG(player, a24))
	}, this.a5N = function(player) {
		(aZ.aa.yN(0) || aZ.aa.yN(1)) && aZ.aa.fQ(player) && ce.aNC(player) && (d0.d1.a7u(8, player), lk.a5N(player))
	}, this.a5O = function(player) {
		d0.d1.a7u(9, player), lk.a5O(player)
	}, this.yQ = function(player) {
		lV.yM(player) && (d0.d1.a7u(5, player, 513), lV.yQ(player))
	}, this.a5P = function(player, gC, gz, aL) {
		aZ.aa.yN(1) && aZ.aa.fQ(player) && aZ.aa.a7L(player, aL) && aZ.aa.a7c(player, aL) && gq.aOD(gz) && lO.a0N.aIe(player, gz) && (lJ.ak(player, gD.a7d[0]) || lJ.al(player)) && (d0.d1.a7u(10, player, (gC << 10) + gD.a7d[0], gz), aL = aZ.aa
			.a7a(player, gC), fZ.fB[player].push(gD.aIg[0]), lJ.ai(player, aL, gD.a7d[0]), l3.aIT(player, !0), ac.gJ(player))
	}
}

function uB(aOL, sO, aOM) {
	function click() {
		var value = 1 - aOL.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + sO, void 0 !== aOL.b7 ? df.dm.dn(aOL.b7, value) : aOL.value = value, aOM && aOM(value)
	}
	var br;
	sO = sO || L(352), this.br = document.createElement("p"), (br = this.br).textContent = (aOL.value ? "🟩 " : "⬜ ") + sO, br.style.margin = "0", br.style.marginBottom = "0.5em", br.style.cursor = "pointer", br.addEventListener("click", click)
}

function aON() {
	this.wn = 0, this.d = function() {
		this.wn = 0
	}, this.cT = function() {
		if (!this.wn && cR.gS() % 30 == 7 && aZ.aa.a7h(90) && (av.performance.wn = 1)) {
			if (aO.qX) {
				var qa = lt.qb();
				if (e.qc[qa]) {
					lt.zy(qa);
					var bu = gD.qf,
						a3 = gD.qe[0];
					if (0 !== a3)
						for (var aOS = Math.min(100 + 10 * (a3 - 1), 400), g = 0; g < a3; g++) gc.aOT(bu[g], aOS)
				}
			}
			gc.aOT(wO[0], 100)
		}
	}
}

function ng() {
	var aF, aG, r, aGs, aOU, aOV, aOW, aOX, aOY, p, a9B, aEu;
	this.i1 = !1, this.d = function(eJ, aOZ) {
		if (1 === c9.id && 13 <= c9.eK && c9.eK < 18) return aOZ ? void(a9B = eJ) : a9B !== eJ ? void 0 : void c9.a2J.saveString(200, eJ);
		aOZ && (a9B = eJ, (aEu = document.createElement("a")).appendChild(document.createTextNode(a9B)), this.i1 = !0, aEu.title = a9B, aEu.target = "_blank", aEu.href = a9B, aEu.style.textAlign = "center", aEu.style.color = e8.e9, aEu.style
			.position = "absolute", aEu.style.padding = "0px", aEu.style.margin = "0px", this.resize(), document.body.appendChild(aEu), cR.cZ = !0)
	}, this.eB = function() {
		return !(!this.i1 || (bT.removeChild(document.body, aEu), this.i1 = !1))
	}, this.ia = function(aJy, aJz) {
		return !!this.i1 && ((aJy < aF || aJz < aG || aF + p < aJy || aG + r < aJz || aF + p - aGs < aJy && aJz < aG + aGs) && (cR.cZ = !0, this.i1 = !1, bT.removeChild(document.body, aEu)), !0)
	}, this.resize = function() {
		var i2, wJ;
		this.i1 && (aOX = Math.floor(.8 * (c9.cA.i7() ? o.p > o.r ? .6 : .55 : .4) * o.i8), aGs = Math.floor(.15 * aOX), aOU = Math.floor(.35 * aGs), aOV = Math.floor(.5 * aGs), aOW = Math.floor(2.5 * aOV), r = aGs + aOU + 3 * aOV, i2 = aZ.e2.iA(
			1, aOU / o.bv), aOY = Math.floor(o.bv * jB.measureText(a9B, i2)), wJ = p = (aOX < aOY ? aOY : aOX) + 2 * aOW, p = Math.min(p, o.p - 2 * (c9.cA.i7() ? 2 : 1) * i9.gap), i2 = aZ.e2.iA(1, p / wJ * aOU / o.bv), aOY = Math.floor(o
			.bv * jB.measureText(a9B, i2)), aF = Math.floor((o.p - p) / 2), aG = Math.floor((o.r - r) / 2), aEu.style.font = i2, aEu.style.top = Math.floor((aG + 1.4 * aOV + aGs) / o.bv) + "px", aEu.style.left = Math.floor((aF + (p -
			aOY) / 2) / o.bv) + "px")
	}, this.k = function() {
		this.i1 && (aB.fillStyle = e8.ff, aB.fillRect(aF, aG + aGs, p, r - aGs), aB.fillStyle = e8.aOa, aB.fillRect(aF, aG, p, aGs), aB.fillStyle = e8.e9, aB.lineWidth = i9.tu, aB.strokeStyle = e8.e9, aB.strokeRect(aF, aG, p, r), aB.fillRect(aF,
			aG + aGs, p, i9.tu), aB.font = aZ.e2.iA(1, .48 * aGs), aZ.e2.textAlign(aB, 1), aZ.e2.textBaseline(aB, 1), aB.fillText(L(353), Math.floor(aF + (p - .5 * aGs) / 2), Math.floor(aG + .55 * aGs)), ce.aHz(Math.floor(aF + p - .8 *
			aGs), Math.floor(aG + .25 * aGs), Math.floor(.5 * aGs)), aB.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aOb() {
	var aOc = null,
		a12 = 2e4,
		aOd = 0;
	this.cT = function() {
		cR.cQ < a12 || (a12 = cR.cQ + 1e4, 0 !== c9.id) || aOc || lm.aOe() || (dc.i.e1(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || dc.pL.rK(5) : a12 = cR.cQ + 1e3)
	}, this.ai = function(aH) {
		aOc = aH
	}, this.show = function() {
		return !(!aOc || cR.cQ < aOd) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aOd = cR.cQ + 6e4, (new dw).show(aOc.de, aOc.colors, aOc.id), !(aOc = null)))
	}
}

function oi() {
	this.aOf = function() {
		for (var a3 = bB.bC, aEI = bB.bD, fO = [], g = 0; g < a3; g++) {
			var fg = aEI[g];
			aZ.aa.a7K(fg) && fO.push(fg)
		}
		return fO
	}, this.aOg = function() {
		if (0 === e.qc[aO.a0r]) return this.aOh();
		lt.zy(aO.a0r);
		for (var fO = [], a3 = gD.qe[0], qf = gD.qf, g = 0; g < a3; g++) {
			var fg = qf[g];
			aZ.aa.a7K(fg) && fO.push(fg)
		}
		return fO
	}, this.aOh = function() {
		var fg = wO[0];
		return aZ.aa.a7K(fg) ? [fg] : []
	}, this.aOi = function(fO) {
		for (var a3 = fO.length, fh = 0, f8 = fZ.f8, g = 0; g < a3; g++) fh += f8[fO[g]];
		return fh
	}
}

function mO() {
	var bu, oQ, xJ, aDs, gap, aOj, aOk, aOl, aOm, aOn, i2, aOo, gs, aOp, iH, nr, aOq;

	function aOu() {
		aDs = Math.floor(.2 * (c9.cA.i7() ? .07 : .035) * o.i8), aDs = aAK(c9.cA.i7() ? 3 : 1, aDs);
		var aOw = o.p / (bu.length + gap);
		aDs = aDs < aOw ? aOw : aDs, iH = Math.floor((1 - gap) * aDs), oQ = 0, aOx()
	}

	function aOx() {
		oQ = (oQ = oQ < -20 ? -20 : oQ) > (bu.length - 15) * aDs ? (bu.length - 15) * aDs : oQ, aOk = Math.floor(oQ / aDs), aOl = (aOl = aOk + Math.floor(o.p / aDs)) > bu.length - 1 ? bu.length - 1 : aOl, aOk = (aOk = aOl < aOk ? aOl : aOk) < 0 ? 0 :
			aOk;
		var aj = aOl;
		aOj = xJ / bu[aj];
		for (var g = aOl - 1; aOk <= g; g--) bu[g] > bu[aj] && (aj = g, aOj = xJ / Math.pow(bu[g], aOp))
	}

	function aOz(aF) {
		aF = Math.floor((oQ + o.p - aF - gap * aDs) / aDs);
		return (aF = aF < -1 ? -1 : -1 === aF ? 0 : aF > bu.length - 1 ? -1 : aF) !== aOm && (aOm = aF, -1 === nr && 0 === aOm && lC.aOr && (nr = setInterval(aP0, 100)), 1)
	}

	function aP2(g) {
		var a3c = Math.floor(aOj * Math.pow(bu[g], aOp));
		aB.fillRect(oQ + o.p - (g + 1) * aDs, o.r - a3c, iH, a3c)
	}

	function aP0() {
		var fg;
		0 !== (aOm = 8 === bi.o4() ? -1 : aOm) ? (aOq = (new Date).getTime(), clearInterval(nr), nr = -1) : (fg = bu[1] / 864e3, -1 !== aOq && (fg += ((new Date).getTime() - aOq) * bu[1] / 864e5, aOq = -1), 0 < fg && (bu[0] += Math.floor(fg), cR
			.cZ = !0))
	}
	this.aOr = !1, this.d = function() {
		aOq = nr = -1, aOm = -(aOp = 1), this.aOs = !1, gs = 0, aOo = new Date, oQ = 0, gap = .3, bu = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		xJ = Math.floor(.15 * o.r), aOn = (aOn = Math.floor((c9.cA.i7() ? .018 : .0137) * o.i8)) < 2 ? 2 : aOn, i2 = aZ.e2.iA(1, aOn), aOu()
	}, this.a66 = function(aOv) {
		var g;
		for (this.aOr = !0, g = 0; g < aOv.length; g++) bu.unshift(aOv[g]);
		aOu(), cR.cZ = !0
	}, this.a5b = function() {
		aOx()
	}, this.io = function(aF, aG) {
		aG > o.r - .6 * xJ ? this.aOs ? aF !== gs && (oQ += aF - gs, gs = aF, aOx(), aOz(aF), this.aOs = -1 !== aOm, cR.cZ = !0) : aOz(aF) && (cR.cZ = !0) : this.kT()
	}, this.kT = function() {
		-1 !== aOm && (this.aOs = !1, aOm = -1, cR.cZ = !0)
	}, this.im = function(aF, deltaY) {
		-1 !== aOm && (oQ += Math.floor(deltaY), aOx(), aOz(aF), cR.cZ = !0)
	}, this.ia = function(aF, aG) {
		this.io(aF, aG), -1 !== aOm && (gs = aF, this.aOs = !0)
	}, this.aDL = function() {
		-1 !== aOm && (this.aOs = !1)
	}, this.k = function() {
		aB.fillStyle = e8.aP1;
		for (var aP5, month, fh, s7, aP8, aP9, u, aPA, aPB, g = aOl; aOk <= g; g--) aP2(g);
		this.aOr && 0 === aOk && (aB.fillStyle = e8.xt, aP2(0)), -1 !== aOm && (aB.fillStyle = e8.aP3, aP2(aOm)), -1 !== aOm && (aB.font = i2, aZ.e2.textBaseline(aB, 2), (fh = new Date).setTime(aOo.getTime() - 1e3 * aOm * 60 * 60 * 24), month =
			"month", aP5 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(fh), aP5 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(fh)), aP5 = aP5 + ", " + fh.getUTCDate() + " " + month + " " + fh.getFullYear(), month = 1 === bu[aOm] ? L(354) : L(355), month = aZ.fo.iP(bu[aOm]) + " " + month, fh = Math.floor(aB.measureText(aP5).width), s7 = Math
			.floor(aB.measureText(month).width), aP8 = Math.floor(.5 * (fh + aOn)), aP9 = (aP9 = oQ + o.p - (aOm + 1) * aDs) < aP8 ? aP8 : aP9 > o.p - aP8 ? o.p - aP8 : aP9, u = o.r - Math.floor(aOj * Math.pow(bu[aOm], aOp)), aPA = Math
			.floor(1.1 * aOn), aPB = u > o.r - aPA ? o.r - aPA : u, aB.fillStyle = e8.ff, aB.fillRect(o.p - s7 - aOn, aPB - aPA, s7 + aOn, aPA), aB.fillRect(aP9 - aP8, o.r - aPA, fh + aOn, aPA), aB.fillStyle = e8.e9, aZ.e2.textAlign(aB, 2),
			aB.fillText(month, Math.floor(o.p - .5 * aOn), aPB), aZ.e2.textAlign(aB, 1), aB.fillText(aP5, aP9, o.r), aB.strokeStyle = e8.aPC, aB.lineWidth = 1, aB.beginPath(), aB.moveTo(0, u), aB.lineTo(o.p, u), aB.closePath(), aB.stroke())
	}
}

function m8() {
	this.aR = 512, this.b1 = 15e8, this.aEG = 1e9, this.a7Z = 5e4, this.aPD = 512, this.a3E = 2, this.b2 = 0, this.aP = 0, this.a47 = 0, this.gX = 0, this.a3o = 0, this.qC = 512, this.aKD = 512, this.a7N = 150, this.cq = !0, this.i6 = 0, this.cd = 0,
		this.qZ = 0, this.zs = !1, this.cp = 0, this.aPE = 0, this.qX = !1, this.zp = 0, this.aKF = 0, this.fP = 0, this.a1R = 0, this.cu = null, this.a0n = new a1F, this.cr = 30, this.fV = 0, this.fq = 0, this.a0m = 0, this.a0r = 0, this.data =
		new ba, this.aGo = new a2q, this.bl = 0, this.aPF = "", this.bk = function() {
			gD.d(), fM.d(), lz.clear(), this.a47 = this.aP = this.data.humanCount, this.cq = 1 === this.a47, this.zs = !1, this.i6 = this.data.isReplay, this.fP = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1R = this.data.isContest, this.qX = this.fP < 7 || 9 === this.fP, this.fP = 10 === this.fP && this.cq ? 7 : this.fP, this.fP = 8 === this.fP && 2 !== this.aP ? 7 : this.fP, lX.d(),
				this.zp = this.data.numberTeams, this.data.teamPlayerCount ? this.aKF = +(0 < this.data.teamPlayerCount[0]) : (this.aKF = 0, this.qX && this.cq && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.zp + 1), aO.aGo.a2r())), this.cr = this.aP <= 2 ? 30 : this.aP <= 50 ? 40 : 50, this.aPE = this.cp = this.data.selectableSpawn, this.cu = this.cp ? new aDN : null, 1 === bw.a9K ? this.qC = this.aP : this.qC = this.data
				.playerCount, this.aKD = this.qC, this.gX = this.qC - this.aP, this.a3o = 0, this.b2 = this.data.selectedPlayer, this.fV = 0, this.fq = 0, this.a0m = 0, this.a0r = 0, lW.oD(this.data.spawningSeed), gN.d(), fZ.d(), lP.d(), lL.aPG(), dF
				.dG.a57 = [], dF.tr.aM2 = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), e.d(), this.cd = 1, ac.d(), a2o(), h3.g9(), lQ.aPH(), cj.d(), h3.d(), lS.d(), gq
				.d(), a4.d(), av.d(), ln.a1B(), gc.d(), lL.bj(), l6.d(), l7.d(), bB.aPI(), d0.d(), lt.d(), h.d(), gR.d(), x1.putImageData(x2, 0, 0), lE.d(), ib.d(), iJ.d(), cU.d(), lV.d(), lD.d(), cs.d(), ce.d(), jB.d(), b3.d(), lB.d(), l9.d(), lF
				.d(), l3.d(), l4.d(), aPJ(), lJ.d(), b5.d(), lb.d(), lc.d(), lY.d(), le.d(), lf.d(), this.a0n.d(), cR.a1B(), l5.aBi(), 0 === fZ.f3[aO.b2] && lF.show(!1, !0), b5.cw(!0), lU.d(), cR.cZ = !0, this.i6 || this.cq && this.cp || c9.cA
				.setState(1), this.bl = 0
		}, this.aN9 = function(aPL) {
			d0.d1.a7s.length ? this.aPF = d0.d1.a7s : (this.aPF = d0.aPM.a3R(), __fx.replayHistory.save(this.aPF)), dc.i.pV(), lz.clear(), this.cd = 0, cR.aPN(), c9.cA.setState(0), bi.setState(0), lm.aPO.show(aPL), 2 === this.bl ? bT.i.aGn(0) : 1 ===
				this.bl ? bT.c4(19) : bT.c4(5, 5)
		}, this.vS = function() {
			return this.i6 ? ce.cf || !cU.cg : this.cq && (ce.cf || this.cp)
		}, this.w4 = function() {
			return 1 === this.cd && !this.cp
		}
}

function mZ() {
	this.bD = null, this.bC = 0, this.aPI = function() {
		for (this.bC = 0, g = aO.aR - 1; 0 <= g; g--) 0 !== fZ.f3[g] && this.bC++;
		this.bD = new Uint16Array(this.bC);
		for (var a3 = 0, g = 0; g < aO.aR; g++) 0 !== fZ.f3[g] && (this.bD[a3++] = g)
	}, this.aPP = function() {
		for (var f8 = fZ.f8, f9 = fZ.f9, fJ = fZ.fJ, bD = bB.bD, g = bB.bC - 1; 0 <= g; g--) {
			var fg = bD[g],
				fh = f8[fg],
				aj = f9[fg];
			fh <= gT.gU(aj, 4) ? lN.bF(fg) : aj <= fh ? 250 <= (f9[fg] = fh) && (fJ[fg] = 1) : f9[fg] = aj - Math.max(1, gT.gU(aj - fh, 1e3))
		}
		this.aPR()
	}, this.aPR = function() {
		for (var f3 = fZ.f3, r1 = this.bD, aPS = this.bC, g = aPS - 1; 0 <= g; g--) 0 === f3[r1[g]] && (r1[g] = r1[--aPS]);
		this.bC = aPS
	}
}

function mh() {
	this.jU = new aPT, this.pj = new tI
}

function mH() {
	var aPU, aPV, aPW;
	aPU = [32, 65, 191, 913, 931], aPV = [64, 127, 688, 930, 1155], aPW = new Array(aPU.length + 1);
	for (var g = 0; g < aPW.length; g++) {
		aPW[g] = 0;
		for (var b8 = g - 1; 0 <= b8; b8--) aPW[g] += aPV[b8] - aPU[b8]
	}

	function aPc(aH) {
		for (var g = aPU.length - 1; 0 <= g; g--)
			if (aH >= aPU[g] && aH < aPV[g]) return g;
		return -1
	}
	this.oc = function(eJ) {
		return 0 !== (eJ = eJ.trim()).indexOf("Bot ") && 0 !== eJ.indexOf("[Bot] ") && function(eJ, aPZ, aPa) {
			var a3 = (eJ = eJ.trim()).length;
			if (a3 < aPZ || aPa < a3) return !1;
			for (var aH, aPb = 0, g = 0; g < a3; g++)
				if (aH = eJ.charCodeAt(g), aPb += 65 <= aH && aH <= 90 || 1040 <= aH && aH <= 1071 ? 1 : 0, -1 === aPc(aH)) return !1;
			if (3 < aPb && aPb > Math.floor(a3 / 2)) return !1;
			return !0
		}(eJ, 3, 20)
	}, this.a3R = function(eJ) {
		for (var a3 = (eJ = eJ.trim()).length, bu = [], g = 0; g < a3; g++) {
			var aH, fg = aPc(aH = eJ.charCodeAt(g));
			bu.push(aPW[fg] + aH - aPU[fg])
		}
		return bu
	}, this.sG = function(bu) {
		for (var aH, fi, eJ = "", a3 = bu.length, g = 0; g < a3; g++)
			for (fi = 1; fi < aPW.length; fi++)
				if (bu[g] < aPW[fi]) {
					aH = aPU[fi - 1] + bu[g] - aPW[fi - 1], eJ += String.fromCharCode(aH);
					break
				} return eJ
	}, this.aPd = function(eJ) {
		for (var bu = this.a3R(eJ), result = "", g = 0; g < bu.length; g++) result = (result += bu[g] < 10 ? "00" : bu[g] < 100 ? "0" : "") + bu[g].toString(10);
		return result
	}, this.aPe = function(eJ) {
		for (var bu = new Array(Math.floor(eJ.length / 3)), g = 0; g < eJ.length; g += 3) bu[Math.floor(g / 3)] = parseInt(eJ.substring(g, g + 3));
		return this.sG(bu)
	}, this.aPf = function(eJ) {
		for (var aq, bu = [eJ.length], g = 0; g < eJ.length; g++) bu[g] = eJ.charCodeAt(g) - 48;
		var result = "";
		for (g = 0; g < eJ.length; g++) g === eJ.length - 1 || 51 < 10 * bu[g] + bu[g + 1] ? result += bu[g].toString() : (aq = 10 * bu[g] + bu[g + 1], result += String.fromCharCode(aq + (aq < 26 ? 65 : 71)), g++);
		return result
	}, this.aPg = function(eJ) {
		for (var aH, result = "", g = 0; g < eJ.length; g++) 48 <= (aH = eJ.charCodeAt(g)) && aH < 58 ? result += String.fromCharCode(aH) : 65 <= aH && aH < 75 ? result += "0" + (aH - 65).toString() : 75 <= aH && aH < 91 ? result += (aH - 65)
			.toString() : 97 <= aH && aH < 123 && (result += (aH - 71).toString());
		return result
	}, this.aPh = function(eJ) {
		for (var a3 = eJ.length, bu = [], g = 0; g < a3; g++)(aH = eJ.charCodeAt(g)) < 58 ? bu.push(eJ[g]) : (aH -= aH < 91 ? 65 : 71, bu.push(String(gT.gU(aH, 10))), bu.push(String(aH - 10 * gT.gU(aH, 10))));
		var a3 = bu.length - 2,
			aH = 0,
			uH = [];
		for (g = 0; g < a3; g += 3) uH[aH++] = parseInt(bu[g] + bu[g + 1] + bu[g + 2]);
		return uH
	}, this.aPi = function() {
		for (var hI, aPj = "", g = 0; g < 6; g++) hI = 48 + lW.random() % 36, hI += 58 <= hI ? 39 : 0, aPj += String.fromCharCode(hI);
		return aPj
	}
}

function ml() {
	this.i = new oo, this.pP = new q4, this.p0 = new a1r, this.kO = new aPk, this.pL = new aPl, this.e5 = new aPm, this.aMV = new aIW, this.rL = new a3W, this.a2B = new a5i, this.a5p = new a9j, this.a5r = new aPn, this.a5u = new yy, this.a5w =
		new sD, this.d = function() {
			this.i.d()
		}
}

function aGW() {
	var ep, a8N, dR;
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), a8N.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM("🔒 " + L(356), [new c6("⬅️ " + L(1), function() {
		bT.dN()
	})]), a8N = new dO(ep.dP, ((dR = []).push(function() {
		var dY = new dZ,
			kI = (dY.db(dc.i.dd("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", dY.da(L(147)), new dr({
				value: "",
				b7: -1
			})),
			a94 = (dY.dq(kI), dY.da(L(215), "0.8em"), new dr({
				value: "",
				b7: -1
			}, 0, 0)),
			a8k = (a94.br.type = "email", a94.br.autocomplete = "email", a94.br.name = "email", a94.br.inputMode = "email", a94.br.spellcheck = !1, dY.dq(a94), new c6(L(357), function(br) {
				return aZ.e2.e3(br), dc.e5.rV({
					s2: 4,
					eJ: kI.br.value.trim() + a94.br.value.trim().substring(0, 63)
				}), !0
			}));
		return dY.dq(new ds([a8k.button])), dY
	}()), dR))
}

function aPk() {
	this.aDj = function(pD) {
		var username = df.dg.data[122].value.slice(0, 20),
			username = (hc.bj(24 + 16 * username.length + 18), hc.cG(1, 0), hc.cG(6, 1), hc.cG(10, bw.a1s), hc.cG(2, df.dg.data[158].value), dc.pL.a3X(username), aZ.color.aPp(df.i.a2z()));
		hc.cG(6, username[0]), hc.cG(6, username[1]), hc.cG(6, username[2]), dc.i.os = pD, dc.i.send(pD, hc.cJ)
	}, this.kP = function(aPq, rC) {
		lg.d(), lg.cG(1, 0), lg.cG(6, 2), lg.cG(3, aPq), 2 === aPq ? lg.cG(2, rC) : 3 === aPq ? hp.sF.a3R(rC, 7, lg) : 5 === aPq && (lg.cG(3, rC.id), lg.cG(3, rC.value), lg.cG(30, rC.bh)), dc.i.send(dc.i.os, lg.aPr())
	}
}

function n6() {
	var aPs, aPt, aPu = -15e3,
		aPv = !1;

	function ia(br) {
		aQ9() || (aPv = !0, aQA(br, 1), dc.i.pO(dc.i.or), aQB(Math.floor(o.bv * br.clientX), Math.floor(o.bv * br.clientY)))
	}

	function aMt(br) {
		aPu = cR.cQ, aQA(br, 1), dc.i.pO(dc.i.or), 0 < br.touches.length && (aPs = Math.floor(o.bv * br.touches[0].clientX), aPt = Math.floor(o.bv * br.touches[0].clientY), lT.aMt(br) || aQB(aPs, aPt))
	}

	function aQB(aF, aG) {
		bT.ia(aF, aG), 0 === aO.cd ? bi.ia(aF, aG) : cU.aQC(aF, aG) || gR.ia(aF, aG) || lF.ia(aF, aG) || l9.aQD(aF, aG) || lB.ia(aF, aG) || 0 <= ce.ia(aF, aG) || lV.ia(aF, aG) || ei.aQE(aF, aG) || l9.aMz(aF, aG)
	}

	function io(br) {
		aQ9() || (aPv = !0, aQA(br, 1), aQF(Math.floor(o.bv * br.clientX), Math.floor(o.bv * br.clientY)))
	}

	function aMv(br) {
		aPu = cR.cQ, aQA(br, 1), 0 < br.touches.length && (aPs = Math.floor(o.bv * br.touches[0].clientX), aPt = Math.floor(o.bv * br.touches[0].clientY), lT.aMv(br) || aQF(aPs, aPt))
	}

	function aQF(aF, aG) {
		ei.ej() || (ei.gs = aF, ei.gv = aG), bT.io(aF, aG), 0 === aO.cd ? bi.io(aF, aG) : (ll.aM5(aF, aG), gR.io(aF, aG) || (ce.io(aF, aG), l9.i1() ? l9.io(aF, aG) : iJ.i5 ? iJ.io(aF) && (cR.cZ = !0) : (lE.io(aF, aG), ib.ic && ib.io(aF, aG) && (cR
			.cZ = !0))))
	}

	function aPz(br) {
		aQ9() || (aQA(br, 1), aGX(), 0 === aO.cd ? (bi.click(-1024, -1024), lC.kT()) : (lE.aDL(-1024, -1024), ce.io(-1024, -1024), iJ.ip(), ib.ic = !1))
	}

	function aN8(br) {
		aQ9() || (aQA(br, 1), aQG(Math.floor(o.bv * br.clientX), Math.floor(o.bv * br.clientY), 2 === br.button), ei.aPy && (ei.aPy = !1, br.preventDefault()))
	}

	function click(br) {
		aQ9() || aQA(br, 1)
	}

	function aQ0(br) {
		aPu = cR.cQ, aQA(br, 1), br && br.touches && 0 < br.touches.length && 0 !== aO.cd ? ib.ic = !1 : lT.aMy() || (aQG(aPs, aPt, !1), ei.aPy && (ei.aPy = !1, br.preventDefault()))
	}

	function aQ1(br) {
		aPu = cR.cQ, aQA(br, 1), aQG(aPs, aPt, !1), ei.aPy && (ei.aPy = !1, br.preventDefault())
	}

	function aQ2(br) {}

	function aQ3(br) {}

	function aQ4(br) {
		aQ9() || aQA(br, 0)
	}

	function aQG(aF, aG, aQH) {
		aGX(), 0 === aO.cd ? bi.click(aF, aG) : (lE.aDL(aF, aG), gR.aDL(), iJ.ip(), ib.ic = !1, l9.click(aF, aG, aQH) ? cR.cZ = !0 : ce.aN8(aF, aG))
	}

	function aGX() {
		bT.aGX()
	}

	function im(br) {
		var aF, aG, deltaY;
		aQ9() || (aQA(br, 1), dc.i.pO(dc.i.or), aF = Math.floor(o.bv * br.clientX), aG = Math.floor(o.bv * br.clientY), deltaY = br.deltaY, 1 === br.deltaMode && (deltaY *= 16), bT.im(aF, aG, deltaY), 0 === aO.cd ? bi.im(aF, aG, deltaY) : lE.im(aF,
			aG, deltaY) || (iJ.iV(aF, aG) ? iJ.im(deltaY) && (cR.cZ = !0) : ib.im(aF, aG, deltaY)))
	}

	function aQ5(br) {
		aQA(br, 0)
	}

	function aQA(br, id) {
		0 === id && bT.i1() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== bi.o4() && br.preventDefault()
	}

	function aQ6(br) {
		if (__fx.keybindHandler(br.key)) return;
		aQ9() || 0 < o.aA5 || (br = br.code) && br.length && (lp.aH(br, 18) ? lR.aEh(3) : lp.aH(br, 22) ? lR.aEh(0) : lp.aH(br, 20) ? lR.aEh(1) : lp.aH(br, 24) ? lR.aEh(2) : lp.aH(br, 10) ? iJ.ij(31 / 32) : lp.aH(br, 8) ? iJ.ij(32 / 31) : lp.aH(br,
			6) ? iJ.ij(7 / 8) : lp.aH(br, 4) ? iJ.ij(8 / 7) : lp.aH(br, 14) ? 0 !== aO.cd && ib.im(Math.floor(o.p / 2), Math.floor(o.r / 2), -200) : lp.aH(br, 16) ? 0 !== aO.cd && ib.im(Math.floor(o.p / 2), Math.floor(o.r / 2), 200) : lp.aH(
			br, 0) ? aO.cd && ll.aM6(0) : lp.aH(br, 2) ? aO.cd && ll.aM6(1) : lp.aH(br, 30) ? aO.cd && ll.aM6(2) : lp.aH(br, 26) ? aO.cd && ll.aME() : lp.aH(br, 28) && aO.cd && ll.yQ())
	}

	function aQ7(br) {
		if (!aQ9() && !(0 < o.aA5 || cR.cQ < 400)) {
			var code = br.code;
			if (code && code.length && !("Enter" === code && bT.eC(1) || "Space" === code && bT.eC(0))) return bH.kF ? bH.k9.eC(code) ? void 0 : void("Escape" === code && ei.hV()) : void(8 !== bi.o4() && bi.eC(br) ? cR.cZ = !0 : "Escape" === code ?
				ei.hV() : lp.aH(code, 18) ? lR.aEj(3) : lp.aH(code, 22) ? lR.aEj(0) : lp.aH(code, 20) ? lR.aEj(1) : lp.aH(code, 24) ? lR.aEj(2) : lp.aH(code, 12) ? cU.aN4(!aO.zs) : "Space" === code && aO.cd && (ce.cf && ce.y1(), aO.i6) && cU
				.dE(!1))
		}
	}

	function aQ8() {
		"hidden" !== document.visibilityState && (cR.cZ = !0)
	}

	function aQ9() {
		return aPu + 15e3 > cR.cQ
	}

	function resize() {
		o.aAA()
	}
	this.aPw = 0, this.aPx = "", this.aPy = !1, this.gs = 0, this.gv = 0, this.d = function() {
		aA8.addEventListener("mousedown", ia, {
			passive: !1
		}), aA8.addEventListener("mousemove", io, {
			passive: !1
		}), aA8.addEventListener("mouseup", aN8, {
			passive: !1
		}), aA8.addEventListener("click", click, {
			passive: !1
		}), aA8.addEventListener("mouseleave", aPz, {
			passive: !1
		}), aA8.addEventListener("wheel", im, {
			passive: !1
		}), aA8.addEventListener("touchstart", aMt, {
			passive: !1
		}), aA8.addEventListener("touchmove", aMv, {
			passive: !1
		}), aA8.addEventListener("touchend", aQ0, {
			passive: !1
		}), aA8.addEventListener("touchcancel", aQ1, {
			passive: !1
		}), aA8.addEventListener("dragover", aQ2), aA8.addEventListener("drop", aQ3), aA8.addEventListener("dblclick", aQ4), document.addEventListener("contextmenu", aQ5), document.addEventListener("keydown", aQ6), document.addEventListener(
			"keyup", aQ7), document.addEventListener("visibilitychange", aQ8), window.addEventListener("resize", resize)
	}, this.aQE = function(aF, aG) {
		return !!cU.ia(aF, aG) || !!(lE.ia(aF, aG) || ib.ia(aF, aG) || iJ.ia(aF, aG) || b3.ia(aF, aG))
	}, this.aDG = aQ9, this.ej = function() {
		return !aPv || 0 < aPu
	}, this.hV = function() {
		if (!bT.i1()) return 8 === bi.o4() ? aO.zs ? void cU.aN4(!1) : gR.i1 ? void gR.y1() : void ce.y1() : void(7 !== bi.o4() && 6 === bi.o4() && lH.aDn());
		bT.eC(2)
	}
}

function nA() {
	function aQK() {
		8 === aO.fP && 1 === aO.cd && fM.od.yE()
	}

	function aQJ(player) {
		aO.cp ? (lN.aIr(player), bB.aPR(), aO.cq && aO.cu.cT()) : la.a9k(player)
	}
	this.a5N = function(player) {
		b3.b4(player, player === aO.b2 ? 21 : 22), aQJ(player), aQK()
	}, this.a5O = function(player) {
		1 === aO.cd && 0 !== fZ.f3[player] && 2 !== fZ.f2[player] && aQJ(player), aO.a47--, aO.a3o--, b3.b4(player, 4), aZ.aa.yN(2) && cs.cw(!0), aQK()
	}
}

function aQL() {
	var aQM = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aQN = [e8.aQO, e8.aQO, e8.wh, e8.aQP, e8.aQQ, e8.aQR, e8.aQS, e8.wh, e8.aQT, e8.eA, e8.aQU, e8.jC],
		aQV = [
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
		aQW = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aQe(a9v, bh, aQg) {
		for (var fi = a9v.length - 1; 0 <= fi; fi--) {
			var eZ = a9v[fi];
			0 === eZ.id && eZ.bh === bh && (eZ.c2 = "[Redacted Message]", aQg) && (eZ.a4q = 1)
		}
	}
	this.jT = function(a4a) {
		var aQX, fu;
		return a4a.id < 5 && (aQX = "@" + hp.hq.iP(a4a.bh, 5)), 0 === a4a.id ? aQX + ": " + a4a.c2 : 1 === a4a.id ? (fu = "@" + hp.hq.iP(a4a.target, 5), 0 === a4a.a4z ? 32768 <= a4a.value ? aQX + " voted with " + (a4a.value - 32768 + 1) +
				" gold against " + fu + " to weaken the latter's admin position. 📉" : aQX + " voted with " + (a4a.value + 1) + " gold for " + fu + " to strengthen the latter's admin position. 💪" : 1 === a4a.a4z ? aQX + " sent " + Math.floor(a4a
					.value / 100) + " 🧈 gold to " + fu + "." : aQX + " voted with " + (a4a.value / 10).toFixed(1) + " points for " + fu + " to acknowledge the latter as clan leader. ✅") : 2 === a4a.id ? 0 === a4a.a4z ? aQX +
			" was 🔇 muted for 1 Hour." : 1 === a4a.a4z ? "The username of " + aQX + " was ✂️ redacted. Duration: 1 Day" : aQX + " 👢 was kicked." : 3 === a4a.id ? aQX + lx.aQY(a4a.a4z, lx.aQZ[a4a.a4z][a4a.value]) + "@" + hp.hq.iP(a4a.target,
			5) + lx.aQa(a4a.a4z, lx.aQZ[a4a.a4z][a4a.value]) : 4 === a4a.id ? aQX + lx.aQY(5, lx.aQZ[5][a4a.a4z]) + "@" + hp.hq.iP(a4a.target, 5) + lx.aQa(5, lx.aQZ[5][a4a.a4z]) : 5 === a4a.id ? aQW[a4a.a4z] : 6 === a4a.id ?
			"You are about to mention " + a4a.value + " player" + (1 === a4a.value ? "" : "s") + ". This action will cost " + (Math.max(10 * a4a.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === a4a.id ? a4a.c2 : void 0
	}, this.jS = function(a4a, kG) {
		return {
			a4a: a4a,
			c2: kG,
			a4d: 0,
			fontSize: 1,
			a4b: 0,
			a4r: a4a.id ? e8.aQb : e8.e9
		}
	}, this.ed = function(player, a9u) {
		return (2 === a9u ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.ee = function(ef) {
		return aQN[ef]
	}, this.a4j = function(ef, a4k) {
		return ef < 3 || 7 === ef ? aQV[ef][0] : 4 === ef ? aQV[ef][a4k < 1 ? 0 : a4k < 10 ? 1 : 2] : aQV[ef][a4k < 10 ? 0 : 1]
	}, this.a4l = function(a4k) {
		return 0 === a4k
	}, this.a4s = function(a9u, bh) {
		for (var bN = bH.bI.bN, bI = bN[a9u], a3 = bI.length, g = 0; g < a3; g++)
			if (bh === bI[g].bh) return bI[g];
		for (var fi = 0; fi < bN.length; fi++)
			if (a9u !== fi)
				for (a3 = (bI = bN[fi]).length, g = 0; g < a3; g++)
					if (bh === bI[g].bh) return bI[g];
		return null
	}, this.eg = function(eZ) {
		return !!bH.bm && eZ.bh === bH.bm.bh
	}, this.kw = function(bI, aQc, aQd) {
		var fr = [];
		loop: for (var g = aQc; g < aQd; g++) {
			var fs = aZ.fo.ft(bI[g].username);
			if (fs) {
				for (var fi = fr.length - 1; 0 <= fi; fi--)
					if (fs === fr[fi].name) {
						fr[fi].dl++;
						continue loop
					} fr.push({
					name: fs,
					dl: 1
				})
			}
		}
		if (fr.sort(function(b8, fi) {
				return fi.dl - b8.dl
			}), 0 === fr.length) return "";
		for (var eJ = fr[0].name + ": " + fr[0].dl, g = 1; g < fr.length; g++) eJ += "   " + fr[g].name + ": " + fr[g].dl;
		return eJ
	}, this.aG0 = function(ef, a4k, aG1) {
		return 0 === aQM[ef].length ? "Rank: " + (a4k + 1) : aQM[ef] + " Rank: " + (a4k + 1) + (3 !== ef && aG1 < 100 ? "   " + aQM[3] + " Rank: " + (aG1 + 1) : "")
	}, this.a55 = function(bh) {
		for (var bK = bH.i.bK, g = 0; g < bK.length; g++) aQe(bK[g].a9v, bh);
		aQe(bH.message.aQf(), bh, 1), bH.jU.a55(bh)
	}
}

function aPl() {
	this.pM = function(pD) {
		var aQq;
		hc.bj(55 + lu.aAe.hY()), hc.cG(1, 0), hc.cG(6, 13), hc.cG(14, bw.a1t), hc.cG(4, c9.id), hc.cG(7, c9.eK), hc.cG(1, +bw.cH), hc.cG(1, +bw.cI), hc.cG(5, (new Date).getHours() % 24), aQq = jF.aQr(), hc.cG(8, aQq[0]), hc.cG(8, aQq[1]), lu.aAe
			.a3R(), dc.i.send(pD, hc.cJ)
	}, this.aQi = function(pD, sd, aQj) {
		hc.bj(40), hc.cG(1, 0), hc.cG(6, 30), hc.cG(3, aQj), hc.cG(30, sd), dc.i.send(pD, hc.cJ)
	}, this.rK = function(id) {
		hc.bj(13), hc.cG(1, 0), hc.cG(6, 15), hc.cG(6, id), dc.i.send(0, hc.cJ)
	}, this.aQk = function(id, value) {
		hc.bj(43), hc.cG(1, 0), hc.cG(6, 3), hc.cG(6, id), hc.cG(30, value), dc.i.send(0, hc.cJ)
	}, this.aQl = function(id, eJ) {
		var a3 = Math.min(eJ.length, 63);
		hc.bj(19 + 16 * a3), hc.cG(1, 0), hc.cG(6, 26), hc.cG(6, id), hc.cG(6, a3), hp.hm.a0K(eJ), dc.i.send(0, hc.cJ)
	}, this.aQm = function(aQn, eZ) {
		hc.bj(7 + 26 * eZ.length), hc.cG(1, 0), hc.cG(6, 9);
		for (var g = 0; g < eZ.length; g++) hc.cG(16, eZ[g][0]), hc.cG(10, eZ[g][1]);
		dc.i.send(aQn, hc.cJ)
	}, this.q5 = function(aQo, aQp) {
		hc.bj(20), hc.cG(1, 0), hc.cG(6, 19), hc.cG(1, aQo), hc.cG(12, aQp), dc.i.send(dc.i.or, hc.cJ)
	}, this.a3X = function(username) {
		hc.cG(5, username.length), hp.hm.a0K(username)
	}
}

function mC() {
	var tj = new Uint8Array(aO.aR),
		aQs = new Uint16Array(aO.aR),
		aQt = new Uint16Array(aO.aR),
		aQu = new Uint8Array(aO.aR),
		aQv = (this.aM = new Uint8Array(aO.aR), new Uint16Array(aO.aR)),
		aQw = new Uint16Array(aO.aR);

	function aR5(g) {
		tj[g] = 1 + gT.gU(aQv[g] * lW.random(), 10 * lW.value(100))
	}
	this.aNv = null, this.aQx = [97, 94, 70, 40, 20, 0, 100], this.aQy = [500, 450, 400, 300, 80, 50, 100], this.aQz = [0, 0, 5, 25, 50, 100, 0], this.qD = [60, 74, 112, 200, 256, 512, 512], this.aFC = [1, 2, 3, 4, 6, 8, 1], this.aLa = [500, 450,
		400, 300, 80, 50, 100
	], this.aR0 = [100, 150, 250, 400, 600, 1e3, 100], this.g9 = function() {
		this.aNv = [L(358), L(359), L(360), L(361), L(362), L(363), "H Bot"]
	}, this.d = function() {
		tj.fill(0), aQs.fill(0), aQt.fill(0), aQu.fill(0), this.aM.fill(0), aQv.fill(0), aQw.fill(0);
		var aR1 = aO.aP;
		if (9 === aO.fP) this.aR2();
		else if (aO.cq)
			if (3 === aO.data.botDifficultyType)
				for (g = aO.gX - 1; 0 <= g; g--) {
					var qh = g + aR1;
					this.aM[qh] = aO.data.botDifficultyData[qh]
				} else if (2 === aO.data.botDifficultyType)
					for (g = aO.gX - 1; 0 <= g; g--) this.aM[qh = g + aR1] = aO.data.botDifficultyTeam[e.qc[e.t1[qh]]];
				else if (1 === aO.data.botDifficultyType) {
			var aR4 = this.aNv.length;
			for (g = aO.gX - 1; 0 <= g; g--) this.aM[g + aR1] = g % aR4
		} else
			for (aR4 = aO.data.botDifficultyValue, g = aO.gX - 1; 0 <= g; g--) this.aM[g + aR1] = aR4;
		else
			for (var aR3 = 8 === aO.fP ? 1 : 0, g = aO.gX - 1; 0 <= g; g--) this.aM[g + aR1] = aR3;
		for (g = 0; g < aR1; g++) this.aM[g] = 6;
		var a3 = aO.aR;
		for (g = 0; g < a3; g++) this.aM[g] <= 2 ? (aQu[g] = 5, aQv[g] = aQw[g] = 1040, 0 === this.aM[g] ? (aQs[g] = 980, aQt[g] = 980) : 1 === this.aM[g] ? (aQs[g] = 980, aQt[g] = 920, aQv[g] = aQw[g] = 1100) : (aQs[g] = 825, aQt[g] = 750)) :
			this.aM[g] <= 4 ? (aQu[g] = 1 + lW.qi(20), 3 === this.aM[g] ? (aQs[g] = aQt[g] = 500, aQv[g] = aQw[g] = 1e3) : (aQw[g] = 250 + lW.qi(1501), aQv[g] = 500 + lW.qi(501), aQs[g] = 300 + lW.qi(201), aQt[g] = 100 + lW.qi(201))) : this.aM[
			g] <= 5 ? (aQv[g] = 1e3, aQw[g] = 1e3, aQu[g] = 35 + lW.qi(16), aQs[g] = 300 + lW.qi(201), aQt[g] = 50 + lW.qi(101)) : (aQv[g] = aQw[g] = 800, aQu[g] = 5, aQs[g] = 10, aQt[g] = 250), aR5(g)
	}, this.aR2 = function() {
		for (var h1 = lX.aR6, aR1 = aO.aP, g = h1 - 1; 0 <= g; g--) this.aM[g + aR1] = 0;
		for (var fi = 0; fi < 6; fi++) {
			for (g = h1 + lX.aMi[fi] - 1; h1 <= g; g--) this.aM[g + aR1] = fi;
			h1 += lX.aMi[fi]
		}
	}, this.aR7 = function(fg, value) {
		tj[fg] = Math.min(value, tj[fg])
	}, this.cT = function(fg) {
		0 == --tj[fg] && ! function(fg) {
			(function(fg) {
				aQv[fg] !== aQw[fg] && (aQv[fg] += aQv[fg] < aQw[fg] ? 3 : -3);
				aQs[fg] !== aQt[fg] && (aQs[fg] += aQs[fg] < aQt[fg] ? aQu[fg] : -aQu[fg], aQs[fg] = (Math.abs(aQs[fg] - aQt[fg]) <= aQu[fg] ? aQt : aQs)[fg]);
				tj[fg] = gT.gU(aQv[fg], 10)
			})(fg), av.aw.aRA(fg, gT.gU(aQs[fg] * fZ.fA[fg], 1e3))
		}(fg)
	}, this.aOT = function(fg, dl) {
		aQv[fg] = aQw[fg] = dl
	}
}

function n1() {
	this.tr = new aM1, this.aa = new aMQ, this.a5H = new aOC, this.dG = new a56, this.aIR = new aLD
}

function aGV() {
	var dK, dL, tz, dR;

	function k5() {
		u0(), 2 !== aO.data.iIncomeType && (aO.data.iIncomeData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		2 === aO.data.iIncomeType && aZ.ky.u2(tz.u3(), aO.data.iIncomeData, 255)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(35), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(111), L(112), L(80)],
			value: aO.data.iIncomeType
		}, function(b7) {
			u0(), 2 !== b7 || aO.data.iIncomeData || (aO.data.iIncomeData = new Uint8Array(aO.aR), aO.data.iIncomeData.fill(32)), aO.data.iIncomeType = b7, bT.c4(27)
		})), dR.push(dY)
	}(dR = []), function(dR) {
		var dY;
		1 === aO.data.iIncomeType && ((dY = new dZ).da("Value"), dY.dq(new dr({
			b7: -1,
			value: aO.data.iIncomeValue
		}, 1, 0, function(br) {
			var value = gT.gn(Math.floor(br.target.value), 0, 255);
			br.target.value = aO.data.iIncomeValue = value
		})), dR.push(dY))
	}(dR), function(dR) {
		var dY;
		2 === aO.data.iIncomeType && ((dY = new dZ).da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.iIncomeData, 4)), dY.dq(tz), dR.push(dY))
	}(dR), dR))
}

function aGP() {
	var ep, a8N, dR;
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), a8N.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(L(364), [new c6("⬅️ " + L(1), function() {
		bT.dN()
	})]), a8N = new dO(ep.dP, ((dR = []).push(function() {
		function e4() {
			e0.button.textContent = L(13), aRD.br.readOnly = !1, aRE.br.readOnly = !1, a8k.e7(1), a8k.button.style.color = e8.e9
		}
		var dY = new dZ,
			aRC = (dY.db(dc.i.dd("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", dY.da(L(365)), new dr({
				value: df.dg.data[105].value,
				b7: -1
			})),
			aRD = (aRC.br.readOnly = !0, dY.dq(aRC), dY.da(L(366), "0.8em"), new dr(df.dg.data[148], 0, void 0, function(br) {
				a8j(df.dg.data[149].value, br.target.value)
			})),
			aRE = (dY.dq(aRD), dY.da(L(367), "0.8em"), new dr(df.dg.data[149], 1, void 0, function(br) {
				a8j(br.target.value, df.dg.data[148].value)
			})),
			e0 = (dY.dq(aRE), new c6(L(13), function(br) {
				return br.textContent === L(13) ? (br.textContent = L(12), aRD.br.readOnly = !0, aRE.br.readOnly = !0, a8k.e7(0), a8k.button.style.color = e8.eA, df.dm.dn(149, aRE.br.value), a8j(df.dg.data[149].value, df.dg
					.data[148].value)) : e4(), !0
			})),
			a8k = (dY.dq(new ds([e0.button])), new c6(L(146), function(br) {
				return aRD.br.readOnly && dc.i.e1(0) && (aZ.e2.e3(br), e4(), dc.e5.a8l({
					s2: 0,
					bh: df.dg.data[148].value,
					value: parseInt(df.dg.data[149].value, 10)
				})), !0
			}, 1)),
			dh = dY.di(),
			a8j = (dY.di(L(368)).style.fontWeight = "bold", function(aq, eJ) {
				dh.innerHTML = bT.i.a8n(aq, df.dg.data[105].value, eJ)
			});
		return dY.dq(new ds([a8k.button])), a8j(df.dg.data[149].value, df.dg.data[148].value), dY
	}()), dR))
}

function a1a() {
	this.cT = function(player) {
		return !!a4.x7.x8(player) && !(a4.i.a5G[player] >= Math.max(3 * av.performance.wn, gc.aFC[gc.aM[player]]) || !aZ.aa.a7O(player, gc.aQy[gc.aM[player]], 32, 0)) && (cs.a48() ? function(player) {
			var aRK = a4.ec.a4B(),
				a3 = aRK.length;
			if (0 === a3) return !1;
			aRK = aRK[lW.qi(a3)], a3 = a4.i.aCJ[aRK];
			if (a4.a1m.aRL(player, a3)) return !1;
			return !! function(player, a3Y) {
				var a3Y = gq.aBm(a4.i.a6[a3Y]),
					gp = gq.wt(a3Y),
					a3Y = gq.wu(a3Y),
					s = fZ.f4[player],
					u = fZ.f5[player],
					w = fZ.f6[player],
					player = fZ.f7[player],
					w = Math.max(gp - w, s - gp),
					s = Math.max(a3Y - player, u - a3Y);
				return w < 100 && s < 100
			}(player, aRK) && !!a4.a1k.aOK(player, a3, 1) && (aZ.aa.a7b(player), a4.i.aAR(player), !0)
		}(player) : !!(av.aRG.cT(player) || av.aRH.cT(player) || av.aRI.cT(player)) && (function(player) {
			gD.xH[1] = 4, aZ.aa.a7b(player), a4.i.aAR(player)
		}(player), !0))
	}
}

function dw() {
	var aRN, g6, aC4;

	function aRT(g) {
		return aZ.color.aHn(g6[g][0], g6[g][1], g6[g][2])
	}

	function gm(b8, fi) {
		return aZ.color.aRf(g6[b8], g6[fi]), aRT(fi)
	}

	function aRR() {
		aRN && (aRN.remove(), aRN = null)
	}
	this.show = function(de, colors, id) {
		0 <= (aC4 = id) && dc.i.e1(0) && dc.pL.aQk(0, id), de = (de = (de = (de = (de = (de = (de = (de = (de = (de = (de = (de = de.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			g6 = colors, (aRN = document.createElement("div")).style.position = "fixed", aRN.style.top = "0", aRN.style.left = "0", aRN.style.width = "100%", aRN.style.height = "100%", aRN.style.backgroundColor = aZ.color.rr(g6[0][0], g6[0][1],
				g6[0][2], .6), aRN.style.zIndex = "6", aRN.onclick = function(br) {
				br.target === aRN && aRR()
			},
			function(de) {
				var tJ, aRS = document.createElement("div");
				aRS.style.position = "absolute", aRS.style.display = "flex", aRS.style.flexDirection = "column", aRS.style.top = "50%", aRS.style.left = "50%", aRS.style.backgroundColor = aRT(2), tJ = c9.cA.i7() ? aZ.e2.aBP(o.min) : aZ.e2.en(.4);
				tJ = Math.max(tJ, 200), aRS.style.width = aZ.e2.em(tJ), aRS.style.height = aZ.e2.em(tJ), aRS.style.transform = "translate(-50%, -50%)",
					function(aRS, tJ) {
						var aRX = document.createElement("div");
						aRX.style.flex = "0 0 10%", aRX.style.overflow = "hidden", aRX.style.backgroundColor = aRT(1), aRX.style.color = gm(1, 7), aRX.style.font = aZ.e2.iA(1, .05 * tJ), aRX.style.display = "flex", aRX.style.alignItems =
							"center", aRX.style.justifyContent = "center", aRX.innerHTML = L(369), aRS.appendChild(aRX)
					}(aRS, tJ),
					function(aRS, de, tJ) {
						var aRY = document.createElement("div");
						aRY.style.flex = "0 0 70%", aRY.style.overflowY = "auto", aRY.style.overflowX = "hidden", aRY.style.whiteSpace = "pre-wrap", aRY.style.wordWrap = "break-word", aRY.style.padding = aZ.e2.em(.02 * tJ), aRY.style
							.backgroundColor = aRT(2), aRY.style.color = gm(2, 8), aRY.style.font = aZ.e2.iA(0, .07 * tJ), aRY.innerHTML = de, aRY.innerHTML = "<style>a { color: inherit; }</style>" + aRY.innerHTML, aRS.appendChild(aRY)
					}(aRS, de, tJ),
					function(aRS, tJ) {
						var aGY = document.createElement("div"),
							aRZ = (aGY.style.display = "flex", aGY.style.flexDirection = "row", aGY.style.justifyContent = "space-between", aGY.style.alignItems = "stretch", aGY.style.backgroundColor = aRT(3), aGY.style.flex = "1", aGY.style
								.padding = aZ.e2.em(.01 * tJ), aGY.style.gap = aZ.e2.em(.01 * tJ), document.createElement("div")),
							aRa = (aRZ.style.flex = "0 0 60%", aRZ.style.height = "100%", new c6(L(53, 0, 0, 1), function() {
								aRR()
							}, aRT(4), !1)),
							aRa = (aRa.button.style.width = "100%", aRa.button.style.height = "100%", aRa.button.style.color = gm(4, 9), aRa.button.style.font = aZ.e2.iA(1, .05 * tJ), aRZ.appendChild(aRa.button), document.createElement("div")),
							aRc = (aRa.style.flex = "0 0 15%", aRa.style.height = "100%", aRa.style.backgroundColor = aRT(5), document.createElement("div")),
							aRd = (aRc.style.flex = "1", aRc.style.height = "100%", new c6(L(370), function(br) {
								return aZ.e2.e3(br), aC4 < 0 || dc.i.e1(0) && (dc.pL.aQk(1, aC4), aC4 = -1), !0
							}, aRT(6), !1));
						aRd.button.style.width = "100%", aRd.button.style.height = "100%", aRd.button.style.color = gm(6, 10), aRd.button.style.font = aZ.e2.iA(1, .035 * tJ), aRc.appendChild(aRd.button), aGY.appendChild(aRZ), aGY.appendChild(
							aRa), aGY.appendChild(aRc), aRS.appendChild(aGY)
					}(aRS, tJ), aRN.appendChild(aRS)
			}(de), document.body.appendChild(aRN)
	}
}

function aGL() {
	var dK, aL6;

	function aRg() {
		bT.c7();
		var eJ = d0.aRj(aL6.u3());
		(aO.cd && 0 < eJ.length && eJ === d0.d1.a7s || d0.hw.sG(eJ)) && d0.aRk()
	}
	this.show = function(a6N) {
		this.aRh(a6N), dK.show(), this.resize()
	}, this.aRh = function(a6N) {
		0 === aO.cd ? a6N ? aL6.dp(a6N) : aO.aPF.length && aL6.dp(aO.aPF) : (aO.i6 || (d0.d1.a7s = d0.aPM.a3R()), aL6.dp(d0.aRi(d0.d1.a7s)))
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), aL6.resize()
	}, this.eC = function(aH) {
		2 === aH ? dK.eD[0].eE() : aRg()
	}, dK = new dM(L(371), [new c6("⬅️ " + L(1), function() {
		bT.wX(1)
	}), new c6(L(372), function() {
		aL6.aLA()
	}), new c6(L(373), function() {
		aL6.aLB()
	}), new c6(L(374), function() {
		aL6.clear()
	}), new c6(L(375), function() {
		aRg()
	})]), aL6 = new dk(L(376)), dK.dP.appendChild(aL6.br)
}

function mX() {
	var aRl = [
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
		aRm = [
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
	this.aRn = null, this.aRo = null, this.aRp = null, this.aRq = null, this.aRr = null, this.aRs = null, this.aRt = null, this.aRu = null, this.aRv = null, this.aRw = null;

	function aS3(iu, eN) {
		for (var aRn = h3.aRn, aRo = h3.aRo, aRp = h3.aRp, g = iu; g < eN; g++) aRn[g] = gT.gU(64 * lW.random(), lW.value(100)) << 2, aRo[g] = gT.gU(64 * lW.random(), lW.value(100)) << 2, aRp[g] = gT.gU(64 * lW.random(), lW.value(100)) << 2
	}

	function aS2(iu, eN) {
		for (var colorsData = aO.data.colorsData, aRn = h3.aRn, aRo = h3.aRo, aRp = h3.aRp, g = iu; g < eN; g++) {
			var aq = colorsData[g];
			aRn[g] = 4 * (aq >> 12), aRo[g] = 4 * (aq >> 6 & 63), aRp[g] = 4 * (63 & aq)
		}
	}

	function aSD(h1, aSF) {
		x3[h1] = 0, x3[h1 + 1] = 0, x3[h1 + 2] = aSF, x3[h1 + 3] = 0, aSG(h1)
	}

	function aSG(h1) {
		var aF;
		cj.wx || (aF = h3.aGA(h1), h1 = h3.xz(h1), cj.wx = aF >= ls.x0[0] && aF <= ls.x0[2] && h1 >= ls.x0[1] && h1 <= ls.x0[3])
	}
	this.sk = new Int32Array(4), this.aS0 = new Int32Array(8), this.g9 = function() {
		var sk = this.sk,
			sk = (sk[0] = -4 * a1.a2, sk[1] = 4, sk[2] = -sk[0], sk[3] = -sk[1], this.aS0);
		sk[0] = -4 * a1.a2 - 4, sk[1] = -4 * a1.a2, sk[2] = -4 * a1.a2 + 4, sk[3] = -4, sk[4] = 4, sk[5] = 4 * a1.a2 - 4, sk[6] = 4 * a1.a2, sk[7] = 4 * a1.a2 + 4
	}, this.d = function() {
		if (this.aRn ? (this.aRn.fill(0), this.aRo.fill(0), this.aRp.fill(0), this.aRq.fill(0), this.aRr.fill(0), this.aRs.fill(0), this.aRt.fill(0), this.aRu.fill(0), this.aRv.fill(0), this.aRw.fill(0), this.iG.fill(0)) : (this.aRn =
				new Uint8Array(aO.aR), this.aRo = new Uint8Array(aO.aR), this.aRp = new Uint8Array(aO.aR), this.aRq = new Uint8Array(aO.aR), this.aRr = new Uint8Array(aO.aR), this.aRs = new Uint8Array(aO.aR), this.aRt = new Uint8Array(aO.aR),
				this.aRu = new Uint8Array(aO.aR), this.aRv = new Uint8Array(aO.aR), this.aRw = new Uint8Array(aO.aR), this.iG = new Uint8Array(aO.aR)), aO.qX)
			for (var a8 = e.a8, aRn = h3.aRn, aRo = h3.aRo, aRp = h3.aRp, g = aO.aR - 1; 0 <= g; g--) {
				var aH = a8[g],
					aj = gT.gU((aRm[aH][3] + 1) * lW.random(), lW.value(100));
				aRn[g] = aRl[aH][0] + aj * aRm[aH][0], aRo[g] = aRl[aH][1] + aj * aRm[aH][1], aRp[g] = aRl[aH][2] + aj * aRm[aH][2]
			} else 0 === aO.data.colorsType ? aO.data.selectableColor ? (aS2(0, aO.aP), aS3(aO.aP, aO.aR)) : aS3(0, aO.aR) : aS2(0, aO.aR);
		! function() {
			var g, bZ, aRn = h3.aRn,
				aRo = h3.aRo,
				aRp = h3.aRp;
			for (g = aO.aR - 1; 0 <= g; g--) bZ = gT.gU(aRn[g] + aRo[g] + aRp[g], 3), aRn[g] += jo(bZ - aRn[g], 2), aRo[g] += jo(bZ - aRo[g], 2), aRp[g] += jo(bZ - aRp[g], 2), aRn[g] -= aRn[g] % 4, aRo[g] -= aRo[g] % 4, aRp[g] -= aRp[g] % 4
		}(),
		function() {
			for (var a3 = aO.aR, aRn = h3.aRn, aRo = h3.aRo, aRp = h3.aRp, aRq = h3.aRq, g = 0; g < a3; g++) aRn[g] += g >> 7, aRo[g] += g >> 5 & 3, aRp[g] += g >> 3 & 3, aRq[g] = 7 & g
		}(), this.aS6(),
			function() {
				for (var a3 = aO.aR, aRr = h3.aRr, aRs = h3.aRs, aRt = h3.aRt, aRn = h3.aRn, aRo = h3.aRo, aRp = h3.aRp, g = 0; g < a3; g++) {
					var hI = aRn[g],
						fc = aRo[g],
						fi = aRp[g];
					60 <= hI + fc + fi ? (aRr[g] = Math.max(hI - 40, 3 & hI), aRs[g] = Math.max(fc - 40, 3 & fc), aRt[g] = Math.max(fi - 40, 3 & fi)) : (aRr[g] = hI + 40, aRs[g] = fc + 40, aRt[g] = fi + 40)
				}
			}(),
			function() {
				for (var a3 = aO.aR, aRu = h3.aRu, aRv = h3.aRv, aRw = h3.aRw, aRn = h3.aRn, aRo = h3.aRo, aRp = h3.aRp, g = 0; g < a3; g++) {
					var hI = aRn[g],
						fc = aRo[g],
						fi = aRp[g];
					688 <= hI + fc + fi ? (aRu[g] = hI - 88, aRv[g] = fc - 88, aRw[g] = fi - 88) : (aRu[g] = Math.min(hI + 88, 252 + (3 & hI)), aRv[g] = Math.min(fc + 88, 252 + (3 & fc)), aRw[g] = Math.min(fi + 88, 252 + (3 & fi)))
				}
			}()
	}, this.aJQ = function(player) {
		var bu = gD.aJR;
		return bu[0] = this.aRn[player], bu[1] = this.aRo[player], bu[2] = this.aRp[player], bu
	}, this.aS6 = function() {
		for (var g = aO.aR - 1; 0 <= g; g--) this.iG[g] = this.aRn[g] + this.aRo[g] + this.aRp[g] < 280 ? 0 : 1
	}, this.aGA = function(h1) {
		return gT.gU(h1, 4) % a1.a2
	}, this.xz = function(h1) {
		return gT.gU(h1, 4 * a1.a2)
	}, this.hN = function(aF, aG) {
		return Math.floor(4 * (aG * a1.a2 + aF))
	}, this.aKn = function(h1) {
		var sk = this.sk;
		return this.sq(h1 + sk[0]) || this.sq(h1 + sk[1]) || this.sq(h1 + sk[2]) || this.sq(h1 + sk[3])
	}, this.aIl = function(h1) {
		var sk = this.sk;
		return this.aCE(h1 + sk[0]) || this.aCE(h1 + sk[1]) || this.aCE(h1 + sk[2]) || this.aCE(h1 + sk[3])
	}, this.xZ = function(h1, player) {
		var sk = this.sk;
		return this.sp(h1 + sk[0], player) || this.sp(h1 + sk[1], player) || this.sp(h1 + sk[2], player) || this.sp(h1 + sk[3], player)
	}, this.hD = function(g, aS9, aSA, aSB) {
		this.aRn[g] = aS9 >> 16, this.aRo[g] = aS9 >> 8 & 255, this.aRp[g] = 255 & aS9, this.aRr[g] = aSA >> 16, this.aRs[g] = aSA >> 8 & 255, this.aRt[g] = 255 & aSA, this.aRu[g] = aSB >> 16, this.aRv[g] = aSB >> 8 & 255, this.aRw[g] = 255 & aSB
	}, this.hA = function(g) {
		return [(this.aRn[g] << 16) + (this.aRo[g] << 8) + this.aRp[g], (this.aRr[g] << 16) + (this.aRs[g] << 8) + this.aRt[g], (this.aRu[g] << 16) + (this.aRv[g] << 8) + this.aRw[g]]
	}, this.h4 = function(h1) {
		return 208 <= x3[h1 + 3]
	}, this.hO = function(player, h1) {
		return this.h4(h1) && this.sy(player, h1)
	}, this.sy = function(player, h1) {
		return player === this.h5(h1)
	}, this.sz = function(h1) {
		return 208 <= x3[h1 + 3] && x3[h1 + 3] < 224
	}, this.hR = function(h1) {
		return 224 <= x3[h1 + 3] && x3[h1 + 3] < 248
	}, this.hP = function(h1) {
		return 248 <= x3[h1 + 3]
	}, this.oH = function(h1) {
		for (var sk = this.sk, g = 3; 0 <= g; g--)
			if (this.oF(h1 + sk[g])) return !0;
		return !1
	}, this.sv = function(h1) {
		return this.h4(h1) || this.sl(h1)
	}, this.oF = function(h1) {
		return 0 === x3[h1 + 3] && 2 === x3[h1 + 2]
	}, this.sl = function(h1) {
		return 0 === x3[h1 + 3] && 1 === x3[h1 + 2]
	}, this.a8A = function(h1) {
		return 0 === x3[h1 + 3] && 3 === x3[h1 + 2]
	}, this.aCE = function(h1) {
		return 0 === x3[h1 + 3] && 5 === x3[h1 + 2]
	}, this.sq = function(h1) {
		return 0 === x3[h1 + 3] && 3 <= x3[h1 + 2]
	}, this.xE = function(h1) {
		return (x3[h1] >> 1 << 8) + x3[h1 + 1]
	}, this.aSC = function(h1) {
		return 1 & x3[h1]
	}, this.sp = function(h1, player) {
		return this.sl(h1) || this.h4(h1) && player !== this.h5(h1)
	}, this.h5 = function(h1) {
		return ((3 & x3[h1]) << 7) + ((3 & x3[h1 + 1]) << 5) + ((3 & x3[h1 + 2]) << 3) + (7 & x3[h1 + 3])
	}, this.aJ7 = function(h1) {
		aSD(h1, 1)
	}, this.aSE = function(h1) {
		aSD(h1, 2)
	}, this.hT = function(h1, player) {
		x3[h1] = this.aRn[player], x3[h1 + 1] = this.aRo[player], x3[h1 + 2] = this.aRp[player], x3[h1 + 3] = 208 + this.aRq[player], aSG(h1)
	}, this.hS = function(h1, player) {
		x3[h1] = this.aRr[player], x3[h1 + 1] = this.aRs[player], x3[h1 + 2] = this.aRt[player], x3[h1 + 3] = 224 + this.aRq[player], aSG(h1)
	}, this.hQ = function(h1, player) {
		x3[h1] = this.aRu[player], x3[h1 + 1] = this.aRv[player], x3[h1 + 2] = this.aRw[player], x3[h1 + 3] = 248 + this.aRq[player], aSG(h1)
	}
}

function mf() {
	var aSH, aSI, aSJ;
	this.d = function() {
		aSH =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aSI =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aSJ = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var kd = ["K ", " Y", "E ", " Z", " z", " s", "S "], ki = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], g = aSH.length - 1; 0 <= g; g--)
			for (var b8 = kd.length - 1; 0 <= b8; b8--) aSH[g] = aSH[g].replace(kd[b8], ki[b8]);
		if (__fx.settings.realisticNames) aSH = realisticNames;
	}, this.aPG = function() {
		var a3 = aO.aP,
			f1 = fZ.f1,
			f0 = fZ.f0,
			playerNamesData = aO.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < a3)
			for (var g = 0; g < a3; g++) f1[g] = f0[g] = "Player " + lW.qi(1e3);
		else
			for (g = 0; g < a3; g++) f1[g] = f0[g] = __fx.nameFilter.filter(playerNamesData[g])
	}, this.bj = function() {
		if (9 === aO.fP) {
			for (var hI = lW.random(), aSP = aSJ, aSQ = aSI, aM = gc.aM, a3 = aSP.length, aj = aO.data.teamPlayerCount[7], f1 = fZ.f1, f0 = fZ.f0, g = aj - 1; g >= aO.aP; g--) f1[g] = f0[g] = aSP[(g + hI) % a3];
			for (a3 = aSQ.length - 1, g = aj; g < aO.aR; g++) f1[g] = f0[g] = aSQ[aM[g] ? a3 : g % a3]
		} else(2 === aO.data.playerNamesType ? function() {
			for (var a3 = aO.aR, f1 = fZ.f1, f0 = fZ.f0, playerNamesData = aO.data.playerNamesData, g = aO.aP; g < a3; g++) f1[g] = f0[g] = __fx.nameFilter.filter(playerNamesData[g])
		} : 1 === aO.data.playerNamesType ? function() {
			for (var f1 = fZ.f1, f0 = fZ.f0, g = aO.aP; g < aO.aR; g++) f1[g] = f0[g] = "Bot " + lW.qi(1e3)
		} : function() {
			for (var aSR = aSH, a3 = aSR.length, hI = lW.random(), f1 = fZ.f1, f0 = fZ.f0, g = aO.aP; g < aO.aR; g++) f1[g] = f0[g] = aSR[(g + hI) % a3]
		})()
	}
}

function aPT() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
			"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
		], this.tb = 13, this.td = this.emojis.length, this.te = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.te, this.tc = 1024, this.aSS = this.emojis.indexOf("💀"),
		this.aST = this.aSS + 1, this.aSU = this.emojis.indexOf("🥇"), this.aSV = this.emojis.indexOf("😊"), this.tw = function(aq) {
			return aq < this.te ? String.fromCharCode(55356, 56806 + gT.gU(aq, 26), 55356, 56806 + aq % 26) : this.emojis[Math.min(aq - this.te, this.td - 1)]
		}, this.tg = function(eJ) {
			for (var a3 = eJ.length - 2, bu = [], g = 0; g < a3; g++) {
				var w8 = eJ.charCodeAt(g) - 56806,
					w9 = eJ.charCodeAt(g + 2) - 56806;
				0 <= w8 && w8 < 26 && 0 <= w9 && w9 < 26 && (bu.push(26 * w8 + w9), g += 3)
			}
			return bu
		}, this.vN = function(aq) {
			return aq < this.te
		}, this.vy = function(aq) {
			return aq >= 1024 - this.tb
		}, this.vw = function(aq) {
			return aq >= this.te && aq < this.te + this.aST
		}
}

function a5S() {
	var br;
	this.br = document.createElement("hr"), this.resize = function() {
		aZ.e2.jV(this.br, 8, e8.aSW)
	}, (br = this.br).style.marginBottom = br.style.marginTop = "0.65em", br.style.marginLeft = br.style.marginRight = "-4%", br.style.border = "none"
}

function nH() {
	this.a1t = 1234;
	this.rVersion = 22, this.a9J = 0, this.d = function() {
		this.a9K = 2;
		this.by = "2.16.12", this.eK = "7 Aug 2026 [" + this.by + "]";
		var aSb = window.location.hostname.toLowerCase();
		this.cH = !0, this.pA = 0 <= aSb.indexOf("game.territorial.io"), this.cI = function() {
			try {
				return window.self !== window.top
			} catch (br) {
				return !0
			}
		}(), this.a1s = (new Date).getTime() % 1048576
	}, this.bx = 0
}

function mP() {
	var i2, p, aG, aSd, aSe, aSf, canvas, i0, i3, g2, aSg, aSh, aSi, aSj;
	this.aF = 0, this.r = 0, this.d = function() {
		aSf = aO.aPD, aSh = "rgba(0,100,0,0.8)", aSi = "rgba(150,0,0,0.8)", i3 = aSg = !0, g2 = fZ.fA[aO.b2], this.resize()
	}, this.resize = function() {
		p = Math.floor((c9.cA.i7() ? .305 : .24) * o.i8), this.r = Math.floor(.5 + .13 * p), p = Math.floor(6 * this.r), i2 = aZ.e2.iA(1, Math.floor(.8 * this.r)), aSe = aZ.e2.iA(1, Math.floor(.45 * this.r)), aSj = Math.floor(.5 * this.r), a1.oJ
			.font = i2, aG = i9.gap, aSd = Math.floor(1 + .13 * this.r), (canvas = document.createElement("canvas")).width = p, canvas.height = this.r, i0 = canvas.getContext("2d", {
				alpha: !0
			}), aZ.e2.textBaseline(i0, 1), aZ.e2.textAlign(i0, 1), this.aSk()
	}, this.a3w = function() {
		return c9.cA.i7() && o.p < 1.2 * o.r
	}, this.iB = function() {
		this.a3w() ? this.aF = o.p - p - i9.gap : this.aF = Math.floor(lE.aCt() + (o.p - lE.aCt() - cs.p - p) / 2 - .5 * i9.gap)
	}, this.cw = function() {
		i3 && (i3 = !1, this.aSk())
	}, this.aSk = function() {
		i0.font = i2, i0.clearRect(0, 0, p, this.r), i0.fillStyle = aSg ? aSh : aSi, i0.fillRect(0, 0, p, this.r), i0.fillStyle = e8.aP3;
		var aH = this.aSl(),
			aSn = (this.aSm(), i0.fillStyle = fZ.fA[aO.b2] >= gN.a3y(aO.b2) ? e8.yJ : e8.e9, aZ.fo.iP(g2)),
			aSn = (i0.fillText(aSn, Math.floor(p / 2), aSj), i0.measureText(aSn).width),
			aSp = (i0.font = aSe, i0.fillStyle = 9 === aH ? e8.aSo : e8.e9, gN.aEA),
			aSq = "+" + aSp,
			s7 = i0.measureText(aSq).width,
			aSr = Math.floor(this.r / 12),
			aSn = .5 * (p + aSn) + aSr;
		(aSn + s7 + aSd <= p || 1e3 <= aSp && (aSq = "+" + Math.floor(aSp / 1e3) + "K", aSn + (s7 = i0.measureText(aSq).width) + aSd <= p)) && i0.fillText(aSq, Math.floor(aSn + .5 * s7), Math.floor(.3 * this.r)), __fx.settings
			.displayTickNumber && i0.fillText(9 - aH, Math.floor(2 * aSd + aSr), Math.floor(.3 * this.r)), i0.fillStyle = e8.e9, i0.fillRect(0, 0, p, 1), i0.fillRect(0, 0, 1, this.r), i0.fillRect(0, this.r - 1, p, 1), i0.fillRect(p - 1, 0, 1,
				this.r)
	}, this.aSl = function() {
		var aH = cR.gS() % 100,
			vs = (aH = 9 - gT.gU(aH -= aH % 10, 10), Math.floor(aH * (this.r - aSd) / 9));
		return i0.fillRect(0, vs, aSd, this.r - vs), i0.fillRect(p - aSd, vs, aSd, this.r - vs), aH
	}, this.aSm = function() {
		i0.fillRect(aSd, this.r - aSd, Math.floor((p - 2 * aSd) * fZ.fA[aO.b2] / aSf), aSd)
	}, this.cT = function() {
		var fg = aO.b2;
		aZ.aa.fQ(fg) && (fg = fZ.fA[fg] - fZ.fK[fg], g2 !== fg ? (aSf = aAK(fg, aSf), aSg = g2 < fg && 10 <= fg, g2 = fg, i3 = !0) : cR.gS() % 10 == 9 && (i3 = !0))
	}, this.k = function() {
		0 === fZ.f3[aO.b2] || aO.cp || 2 === fZ.f2[aO.b2] || aB.drawImage(canvas, this.aF, aG)
	}
}

function aSs() {
	function aT3(player, aL, aSt) {
		3 <= aSt && 2142 < cR.gS() && (aL === aO.aR || fZ.fA[aL] < gT.gU(fZ.fA[player], 20)) && gc.aR7(player, 20)
	}

	function aT5(player, aM, aL, aSt) {
		3 <= aSt && aSt < 6 && gT.gU(fZ.fA[player], 8) > fZ.fA[aL] && (aM = Math.max(gT.gU(11 * fZ.fA[aL], 5), gT.gU(fZ.fA[player], 10)));
		aSt = fZ.fB[player].length;
		av.aOF.aTE(player, aL), av.aOF.aTF(player, aL, aSt, aM)
	}

	function aT2(player, aM) {
		var aL = aO.aR,
			a3 = fZ.fB[player].length;
		av.aOF.aTG(player), fZ.fB[player].length !== a3 && av.aOF.aTF(player, aL, a3, aM)
	}
	this.ax = new Uint8Array(aO.aR), this.d = function() {
		this.ax.fill(0)
	}, this.aRA = function(player, aM) {
		var aEF, aSt, aSu, aSv;
		lJ.al(player) && (aEF = gN.a3y(player), 3 <= (aSt = gc.aM[player]) && aSt < 6 && (aM = Math.max(fZ.fA[player] - aEF, aM)), aSu = fZ.fD[player].length, aSv = fZ.fC[player].length, 30 * fZ.f8[player] > aO.qZ && vj[player] < 10 && 100 *
			aSv <= aSu && gc.aR7(player, 10), aO.qX ? function(player, aM, aSt, aEF) {
				var aL;
				if (av.aOF.aSy(player, !1) || av.aOF.aSz(player, !1)) {
					if (!av.aOF.aT0(player))
						if (av.aOF.aT1()) aT2(player, aM), aT3(player, aO.aR, aSt);
						else {
							if (lW.aCN(gc.aQz[aSt])) aL = av.aOF.aT4(player);
							else {
								if (av.aOF.aT6() && lW.aCN(gc.aQx[aSt]) && av.aOF.aT7(), 6 === aSt) return aT5(player, aM, av.aOF.aT8(), aSt);
								aL = av.aOF.aT9(player)
							}
							aT5(player, aM, aL, aSt), aT3(player, aL, aSt)
						}
				} else a4.gW.cT(player) || av.aTA.cT(player) || ! function(player, aM, aSt, aEF) {
					var ax = av.aw.ax;
					ax[player] = 0;
					var aTC = e.t1[player];
					if (0 !== aTC) {
						var aCD = fZ.fA[player],
							f8 = fZ.f8;
						if (player < aO.aP && (aM = aCD), !(aCD < f8[player] || 5 === aSt && aCD < aEF || 4 === aSt && aCD < gT.gU(aEF, 2))) {
							lt.zy(aTC);
							for (var a3 = gD.qe[0], qf = gD.qf, g = lW.qi(a3), fi = 0; fi < a3; fi++) {
								var aH = qf[(fi + g) % a3];
								if (ax[aH]) return dF.aIR.aLE(player, aH, aM)
							}
							var a5G = a4.i.a5G;
							for (fi = 0; fi < a3; fi++)
								if (aH = qf[(fi + g) % a3], a5G[aH] && aH !== player) return dF.aIR.aLE(player, aH, aM)
						}
					}
				}(player, aM, aSt, aEF)
			}(player, aM, aSt, aEF) : (!aSv || aSu && (aSu < aSv && !lW.qi(10) || 100 * aSv <= aSu && lW.qi(3) || !lW.qi(8))) && a4.gW.cT(player) || function(player, aM, aSt) {
				av.aOF.aSy(player, !0) || av.aOF.aSz(player, !0) ? av.aOF.aT0(player) || (av.aOF.aT1() ? aT2(player, aM) : lW.aCN(gc.aQz[aSt]) ? aT5(player, aM, av.aOF.aT4(player), aSt) : 5 === aSt ? aT5(player, aM, av.aOF.aTD(), aSt) : (av
					.aOF.aT6() && lW.aCN(gc.aQx[aSt]) && av.aOF.aT7(), aT5(player, aM, 6 === aSt ? av.aOF.aT8() : av.aOF.aT9(player), aSt))) : av.aTA.cT(player)
			}(player, aM, aSt))
	}
}

function aMl() {
	this.kn = 0, this.bd = 0, this.mapSeed = 0, this.bM = 0, this.kj = 0, this.kk = 0, this.kl = 0, this.bb = 0, this.kh = 0, this.spawningSeed = 0, this.or = 0, this.bW = 0, this.a9v = [], this.a9w = 1048575, this.aMq = 0, this.a9s = [{
		bd: 0,
		mapSeed: 0,
		bM: 0,
		cQ: 100,
		bb: 0
	}, {
		bd: 1,
		mapSeed: 0,
		bM: 1,
		cQ: 200,
		bb: 0
	}, {
		bd: 2,
		mapSeed: 0,
		bM: 2,
		cQ: 300,
		bb: 0
	}, {
		bd: 3,
		mapSeed: 0,
		bM: 3,
		cQ: 400,
		bb: 0
	}, {
		bd: 0,
		mapSeed: 0,
		bM: 9,
		cQ: 500,
		bb: 0
	}, {
		bd: 1,
		mapSeed: 0,
		bM: 10,
		cQ: 600,
		bb: 0
	}, {
		bd: 2,
		mapSeed: 0,
		bM: 8,
		cQ: 700,
		bb: 0
	}, {
		bd: 3,
		mapSeed: 0,
		bM: 3,
		cQ: 800,
		bb: 0
	}]
}

function n2() {
	this.d1 = new a7r, this.aPM = new aTH, this.hw = new aTI, this.d = function() {
		aO.i6 || this.d1.d()
	}, this.cT = function() {
		aO.i6 || (this.d1.cT(), 3 !== bT.bU) || cR.gS() % 15 != 5 && 2 !== aO.cd || bT.kU().aRh()
	}, __fx.replay.restartReplay = () => this.aRk(), this.aRk = function() {
		var aTK = 0 !== aO.cd,
			aTL = aO.bl;
		aTK || bi.aTM(), aO.aGo.a2v(), aO.data.canvas = null, dc.i.close(dc.i.or, 3257), dc.i.or = 0, aO.data.isReplay = 1, aO.bk(), aTK && (aO.bl = aTL)
	}, this.aRj = function(eJ) {
		var g = eJ.indexOf("=");
		return 0 <= g ? eJ.substring(g + 1) : eJ
	}, this.aRi = function(eJ) {
		return eJ
	}, __fx.replayHistory.load = saved => {
		saved = d0.aRj(saved), d0.hw.sG(saved) && d0.aRk()
	}
}

function aTI() {
	var aTN = 0;

	function aTR(eJ, id) {
		aTN || (id ? 1 === id ? b3.aNT = L(378) + ": " + eJ : bT.c4(4, 3, new c5(L(379), eJ, 1)) : bT.c4(4, 3, new c5("⚠️ " + L(377), eJ, 1)))
	}
	this.sG = function(eJ, aTO) {
		var aC, eZ;
		return aTN = aTO, hl.hq.a0I(hl.hq.a0H(hl.hq.a0F(eJ))), b3.aNT = "", !! function() {
			if (lh.size < 10) aTR("File Too Small");
			else {
				var aTT = lh.hY(12),
					c2 = (aTT !== bw.rVersion && (c2 = "Incompatible Version   Required: " + bw.rVersion, aTR(c2 = (c2 += "   Found: " + aTT) + ("   Compatible at " + dc.i.pB() + "/" + aTT), 1)), lh.hY(12)),
					aTU = lh.hY(31);
				if (aTU !== lh.size) aTR("Size Error: " + aTU + " " + lh.size);
				else if (function(r, aTT) {
						for (var fg = lh.cJ, a3 = lh.size, aQp = aTT, g = 3; g < a3; g++) aQp = aQp + fg[g] & 4095;
						return aQp === r || (aTR("Hash Error: " + aQp + " " + r + " " + a3), !1)
					}(c2, aTT)) return 1
			}
			return
		}() && (aC = lh, (eZ = aO.data = new ba).mapType = aC.hY(2), eZ.mapProceduralIndex = aC.hY(8), eZ.mapRealisticIndex = aC.hY(8), eZ.mapSeed = aC.hY(14), eZ.mapName = aC.hk(5), 2 === eZ.mapType && aC.ho(), eZ.passableWater = aC.hY(1),
			eZ.passableMountains = aC.hY(1), eZ.playerCount = aC.hY(10), eZ.humanCount = aC.hY(10), eZ.selectedPlayer = aC.hY(9), eZ.gameMode = aC.hY(1), eZ.playerMode = aC.hY(2), eZ.battleRoyaleMode = aC.hY(2), eZ.numberTeams = aC.hY(4), eZ
			.isZombieMode = aC.hY(1), eZ.isContest = aC.hY(1), eZ.isReplay = aC.hY(1), eZ.elo = aC.he(2, 14, 2), eZ.colorsType = aC.hY(1), eZ.colorsPersonalized = aC.hY(1), eZ.colorsData = aC.he(10, 18, 512), eZ.selectableColor = aC.hY(1), eZ
			.teamPlayerCount = aC.he(4, 10, 9), eZ.neutralBots = aC.hY(1), eZ.botDifficultyType = aC.hY(2), eZ.botDifficultyValue = aC.hY(4), eZ.botDifficultyTeam = aC.he(4, 4, 9), eZ.botDifficultyData = aC.he(10, 4, 512), eZ.spawningType =
			aC.hY(2), eZ.spawningSeed = aC.hY(14), eZ.spawningData = aC.he(11, 12, 1024), eZ.selectableSpawn = aC.hY(1), eZ.playerNamesType = aC.hY(2), eZ.playerNamesData = aC.hi(10, 5, 512), eZ.selectableName = aC.hY(1), eZ.aIncomeType = aC
			.hY(2), eZ.aIncomeValue = aC.hY(8), eZ.aIncomeData = aC.he(10, 8, 512), eZ.tIncomeType = aC.hY(2), eZ.tIncomeValue = aC.hY(8), eZ.tIncomeData = aC.he(10, 8, 512), eZ.iIncomeType = aC.hY(2), eZ.iIncomeValue = aC.hY(8), eZ
			.iIncomeData = aC.he(10, 8, 512), eZ.sResourcesType = aC.hY(2), eZ.sResourcesValue = aC.hY(11), eZ.sResourcesData = aC.he(10, 11, 512), eZ.bg = aC.he(10, 30, 0), !! function() {
				var aC = lh,
					vJ = aC.hY(5),
					aTW = aC.hY(30),
					aTX = aC.hY(30);
				if (aTW + aTX > 8 * aC.size) return void aTR("Corrupted File");
				return function(a3) {
						var aTa = new Uint8Array(a3),
							aTb = new Uint16Array(a3),
							aTc = new Uint32Array(a3),
							aTd = new Uint32Array(a3);
						d0.d1.d2 = aTa, d0.d1.d4 = aTb, d0.d1.d6 = aTc, d0.d1.d8 = aTd;
						for (var g = 0; g < a3; g++) {
							var id = lh.hY(4);
							aTa[g] = id, aTb[g] = lh.hY(9), 0 === id ? aTc[g] = lh.hY(22) : 1 === id ? (aTc[g] = lh.hY(10), aTd[g] = lh.hY(10)) : 2 === id ? (aTc[g] = lh.hY(10), aTd[g] = lh.hY(9)) : 3 === id ? (aTc[g] = lh.hY(10), aTd[g] = lh
								.hY(27)) : 4 === id ? (aTc[g] = lh.hY(10), aTd[g] = lh.hY(16)) : 5 === id || 6 === id ? aTc[g] = lh.hY(10) : 7 === id ? aTc[g] = lh.hY(1) : 10 === id && (aTc[g] = lh.hY(20), aTd[g] = lh.hY(22))
						}
					}(aTW),
					function(a3, vJ) {
						var dA = new Uint8Array(a3),
							dC = new Array(a3);
						dC.fill(0), d0.d1.dA = dA, d0.d1.dC = dC;
						for (var g = 0; g < a3; g++) dA[g] = lh.hY(1), dC[g] = lh.hY(vJ)
					}(aTX, vJ), 1
			}()) && (lh.b7 < 8 * lh.size - 13 || lh.b7 > 8 * lh.size ? (aTR("Out Of Bounds Error: " + lh.b7 + " " + 8 * lh.size), !1) : (d0.d1.a7s = eJ, 2 !== aO.data.mapType || (aTR("Load base64 image...", 2), aTO)))
	}, this.hx = function(hv, aTS) {
		var a9 = document.createElement("canvas"),
			aA = a9.getContext("2d");
		if (a9.width = hv.width, a9.height = hv.height, aA.drawImage(hv, 0, 0), aO.data.canvas = a9, aTN || aTS) return aO.cd ? void 0 : (aO.data.mapType = 2, bT.c7(), void bT.c4(19));
		d0.aRk()
	}
}

function mA() {
	this.hq = new uE, this.hm = new a8L, this.sF = new a3Q, this.d = function() {
		this.hq.d()
	}
}

function aG5() {
	var aK0, aGd, aIV = document.createElement("div"),
		aTe = document.createElement("div"),
		a6r = 0,
		aTf = 0;
	this.show = function(aF, aG, eJ, aG4, aTg, aH) {
			if (a6r) {
				if (!aG4) return;
				this.eB()
			}
			aF === aG && -1 === aF ? (aF = aK0, aG = aGd) : (aK0 = aF, aGd = aG);
			var aTh = Math.floor(aZ.e2.en(.018)),
				aTg = (aF = Math.max(aTh + 2, aF), aTg || (aTf = aG4), a6r = 1, o.p / o.bv),
				aG4 = (aIV.style.whiteSpace = "pre", aIV.textContent = eJ, aZ.e2.jV(aIV, 5), aIV.style.font = aZ.e2.iA(0, aZ.e2.en(.015)), aIV.style.padding = "0.3em 0.6em", aIV.style.left = aF + "px", aIV.style.top = "0px", document.body
					.appendChild(aIV), aF + aIV.offsetWidth - aTg),
				eJ = (0 < aG4 && (aF -= aG4, aF = Math.max(aTh + 1, aF), aIV.style.left = aF + "px", aF < aTh + 2) && (aIV.style.whiteSpace = "pre-wrap"), aIV.offsetHeight);
			aIV.style.top = aG - eJ + aTf * i9.a6Q + "px", aF -= aTh, aTe.style.backgroundColor = aZ.color.aHn(aH >> 12 << 2, (aH >> 6 & 63) << 2, (63 & aH) << 2), aTe.style.left = aF + "px", aTe.style.top = aIV.style.top, aTe.style.width = aTh +
				"px", aTe.style.height = eJ + "px", aZ.e2.jV(aTe, 4), aZ.e2.jV(aTe, 8), aZ.e2.jV(aTe, 2), document.body.appendChild(aTe)
		}, this.eB = function(aG6) {
			if (a6r) {
				if (aG6 && aTf) return 0;
				a6r = 0, bT.removeChild(document.body, aIV), bT.removeChild(document.body, aTe)
			}
			return 1
		}, aIV.style.position = "absolute", aIV.style.backgroundColor = e8.iM, aIV.style.color = e8.e9, aIV.style.pointerEvents = "none", aIV.style.zIndex = "5", aIV.style.maxWidth = "100%", aTe.style.position = "absolute", aTe.style.color = e8.e9,
		aTe.style.pointerEvents = "none", aTe.style.zIndex = "5"
}

function aPJ() {
	sg = 0, aTk = 2048, sh = new Uint32Array(4 * aTk), aTl = 0, aTm = new Uint32Array(aTk), aTn = new Uint8Array(a1.a2 * a1.jg)
}

function aJp(player) {
	si = player, a37 = !1, aTo(), aTp();
	for (var g = lJ.am(si) - 1; 0 <= g; g--) a38 = g, aTq();
	a37 && aTr()
}

function aTr() {
	m1.sj(), m1.sm()
}

function aTq() {
	ss = lJ.an(si, a38), a39 = lJ.ao(si, a38), a3N = lJ.au(si, a38), aTs(), (0 !== sg && (aTt(), aTu()) ? a31 : a35)()
}

function aTu() {
	if (!((a3L = gT.gU(a39, sg)) > aO.a3E)) {
		if (!a3N) return !1;
		var aTv = sg * (1 + aO.a3E);
		a39 += aZ.aa.a3O(si, aTv - a39), a3L = gT.gU(a39, sg)
	}
	return !0
}

function aTt() {
	for (var g = sg - 1; 0 <= g; g--) aTn[gT.gU(sh[g], 4)] = 0
}

function a35() {
	1 === lJ.am(si) && l3.aIu(si);
	var fh = aZ.aa.ab(si, a39);
	ac.ad(si, a39 - fh, 12), lJ.ah(si, a38)
}

function aTo() {
	for (var player = si, fB = fZ.fB, a3 = Math.min(fB[player].length, aTk), dl = 0, aTw = aTm, g = a3 - 1; 0 <= g; g--) aTw[dl++] = fB[player][g];
	aTl = dl
}

function aTp() {
	for (var g = fZ.fB[si].length - 1; 0 <= g; g--) h3.sv(fZ.fB[si][g]) && h3.hS(fZ.fB[si][g], si);
	fZ.fB[si] = []
}

function aTs() {
	sg = 0, (ss === aO.aR ? aTx : aTy)()
}

function aTy() {
	for (var fg, y, g, sk = h3.sk, bZ = 3; 0 <= bZ; bZ--)
		for (g = aTl - 1; 0 <= g; g--) fg = aTm[g] + sk[bZ], y = gT.gU(fg, 4), 0 === aTn[y] && h3.h4(fg) && h3.h5(fg) === ss && (aTn[y] = 1, sh[sg++] = fg)
}

function aTx() {
	for (var fg, y, g, sk = h3.sk, bZ = 3; 0 <= bZ; bZ--)
		for (g = aTl - 1; 0 <= g; g--) fg = aTm[g] + sk[bZ], y = gT.gU(fg, 4), 0 === aTn[y] && h3.sl(fg) && (aTn[y] = 1, sh[sg++] = fg)
}

function aPm() {
	this.aTz = function() {
		hc.bj(39), hc.cG(1, 0), hc.cG(6, 16), dc.pL.aU0(), dc.i.send(0, hc.cJ)
	}, this.aU1 = function(pD) {
		hc.bj(127), hc.cG(1, 0), hc.cG(6, 17), hl.hq.a0L(df.dg.data[105].value, 5), hl.hq.a0L(df.dg.data[106].value, 15), dc.i.send(pD, hc.cJ)
	}, this.rh = function() {
		hc.bj(97), hc.cG(1, 0), hc.cG(6, 18), hl.hq.a0L(df.dg.data[110].value, 15), dc.i.send(0, hc.cJ)
	}, this.rV = function(rC) {
		var a3 = rC.eJ.length;
		hc.bj(21 + 16 * a3), hc.cG(1, 0), hc.cG(6, 29), hc.cG(6, rC.s2), hc.cG(8, a3), hp.hm.a0K(rC.eJ), dc.i.send(0, hc.cJ)
	}, this.e6 = function(z6, colors, aU3, de) {
		lg.d(), lg.cG(1, 0), lg.cG(6, 16), lg.cG(20, Math.min(z6, 1e6));
		for (var g = 0; g < 11; g++)
			for (var b8 = 0; b8 < 3; b8++) lg.cG(8, colors[g][b8]);
		z6 = jF.data.aMO(aU3.trim());
		lg.cG(8, -1 === z6 ? 255 : z6), hp.sF.a3R(de.trim().substring(0, 180), 8, lg), dc.i.send(0, lg.aPr())
	}, this.rT = function(data) {
		hc.bj(43), hc.cG(1, 0), hc.cG(6, 25), hc.cG(6, data.s2), hl.hq.a0L(data.bh, 5), dc.i.send(0, hc.cJ)
	}, this.a8l = function(data) {
		hc.bj(75), hc.cG(1, 0), hc.cG(6, 27), hc.cG(6, data.s2), hl.hq.a0L(data.bh, 5), hc.ir(32, data.value), dc.i.send(0, hc.cJ)
	}
}

function ch() {
	b3.cT(), b5.cT(), cs.a42(), dc.i.cT()
}

function co() {
	lY.cT(), l4.cT(), lP.cT(), gN.cT(), lb.cT(), l3.cT(), av.cT(), a4.i.cT(), bB.aPP(), lE.cT(), lX.cT(), ln.cT(), b5.cT(), b5.w7(), cs.cT(), h.cT(), lD.cT(), lB.cT(), lf.aC9(), b3.cT(), lc.cT(), iJ.cT(), lV.cT(), ac.cT(), lt.cT(), dc.i.cT(), dc.pP
		.cT(), bT.cT(), lm.aU4.cT(), d0.cT(), cR.cT()
}

function cY() {
	l5.cT(), lF.cT(), jB.cT(), lU.cT(), cU.cT(), le.cT(), lf.cT(), bX.qO()
}

function cy() {
	lE.cw(!1), lB.cw(), cs.cw(!1), lD.cw(), iJ.cw(), lV.cw(), b5.cw(!1), lt.eT()
}

function cx() {
	b5.cw(!1) && (cR.cZ = !0), dc.i.cT()
}

function eu(kC, el) {
	var pa;
	this.resize = function() {
		for (var g = 0; g < kC.length; g++) aZ.e2.jV(kC[g].button);
		pa.style.gap = pa.style.padding = aZ.e2.em(i9.pc)
	}, (pa = document.createElement("div")).style.display = "grid", pa.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pa.style.overflowY = "auto", pa.style.gridAutoRows = "5.3em", pa.style.maxHeight = "100%";
	for (var g = 0; g < kC.length; g++) kC[g].sV(1), pa.appendChild(kC[g].button);
	el.appendChild(pa)
}

function om() {
	this.kK = function() {
		if (2 === aO.fV) aO.fq = 2;
		else {
			if (8 === aO.fP) aZ.aa.b0(0) || 0 === fZ.f3[0] ? aO.a0m = 1 : aZ.aa.b0(1) || 0 === fZ.f3[1] ? aO.a0m = 0 : aO.a0m = +(fZ.f8[1] > fZ.f8[0]);
			else {
				if (aO.qX) {
					var qa = lt.zx();
					if (aO.a0r = qa, e.qc[qa]) return void(aO.fq = +(e.t1[aO.b2] === qa))
				}
				aO.a0m = wO[0]
			}
			aO.fq = +(aO.a0m === aO.b2)
		}
	}
}

function aKy(ix, aEY, aU6, aU7, aU8) {
	var self;
	this.eb = document.createElement("span"), this.resize = function() {
			this.eb.style.fontSize = ((aU7 - aU6) * aEY.offsetHeight).toFixed(1) + "px"
		}, (self = this).eb.textContent = ix, self.eb.style.color = e8.e9, self.eb.style.font = "inherit", self.eb.style.margin = "0.1em 0.6em", self.eb.style.pointerEvents = "none", aU8 && (self.eb.style.fontWeight = "bold"), self.eb.style
		.whiteSpace = "nowrap", self.eb.style.display = "block", aEY.appendChild(self.eb)
}

function n4() {
	this.d = function() {
		this.bu = [], this.b7 = 0
	}, this.aPr = function() {
		return new Uint8Array(this.bu)
	}, this.cG = function(aU9, value) {
		for (var bu = this.bu, eN = this.b7 + aU9 - 1, aUA = 1 + (eN >> 3); bu.length < aUA;) bu.push(0);
		for (var g = this.b7; g <= eN; g++) bu[g >> 3] |= (value >> eN - g & 1) << 7 - (7 & g);
		this.b7 += aU9
	}, this.nh = function(bu, hf, hg) {
		var aUB = aZ.ky.a6l(bu);
		this.cG(hf, aUB);
		for (var g = 0; g < aUB; g++) this.cG(hg, bu[g])
	}, this.aUC = function(bu, hf, hj) {
		var aUB = aZ.ky.a6l(bu);
		this.cG(hf, aUB);
		for (var g = 0; g < aUB; g++) this.aUD(bu[g], hj)
	}, this.aUD = function(eJ, hf) {
		var a3 = eJ.length;
		this.cG(hf, a3);
		for (var g = 0; g < a3; g++) this.cG(16, eJ.charCodeAt(g))
	}, this.aUE = function(a9) {
		var aUF = (a9 = a9.toDataURL()).split(",");
		if (aUF.length < 2) console.log("error 266");
		else {
			a9 = aZ.fo.ht(a9 = aUF[aUF.length - 1], "/", "_"), a9 = aZ.fo.ht(a9, "\\+", "-");
			var a9 = aZ.fo.ht(a9, "=", ""),
				uH = hl.hq.a0H(a9),
				a3 = uH.length;
			this.cG(30, a3);
			for (var g = 0; g < a3; g++) this.cG(6, uH[g])
		}
	}
}

function nS() {
	this.iE = function() {
		return c9.cA.i7() ? 2 : 1
	}
}

function aUG() {
	this.sG = function(hf) {
		for (var ob = lh, size = ob.hY(hf), a3U = 7 + 9 * ob.hY(1), bu = [], g = 0; g < size; g++) bu.push(String.fromCharCode(ob.hY(a3U)));
		return bu.join("")
	}
}

function m7() {
	var aH = aZ.color;
	this.jC = aH.aHn(0, 0, 0), this.aL9 = aH.rr(0, 0, 0, .7), this.aDr = aH.rr(0, 0, 0, .5), this.iM = aH.rr(0, 0, 0, .85), this.ff = aH.rr(0, 0, 0, .75), this.tZ = aH.rr(0, 0, 0, .6), this.s3 = aH.rr(0, 0, 0, .35), this.e9 = aH.aHn(255, 255, 255),
		this.aCz = aH.rr(255, 255, 255, .3), this.aP3 = aH.rr(255, 255, 255, .6), this.aP1 = aH.rr(255, 255, 255, .4), this.aPC = aH.rr(255, 255, 255, .25), this.aUH = aH.rr(255, 255, 255, .85), this.xv = aH.rr(255, 255, 255, .75), this.aUI = aH.rr(
			255, 255, 255, .15), this.aUJ = aH.rr(255, 255, 255, .11), this.aSW = aH.aHn(128, 128, 128), this.aOA = aH.rr(64, 64, 64, .75), this.aUK = aH.rr(88, 88, 88, .83), this.sa = aH.rr(60, 60, 60, .85), this.aGl = aH.rr(80, 60, 60, .85), this
		.aQO = aH.aHn(170, 170, 170), this.wh = aH.aHn(200, 235, 245), this.aUL = aH.aHn(30, 255, 30), this.aUM = aH.aHn(0, 200, 0), this.fe = aH.aHn(128, 255, 128), this.aUN = aH.rr(10, 65, 10, .75), this.xs = aH.rr(0, 255, 0, .6), this.aUO = aH.rr(
			0, 255, 0, .5), this.aUP = aH.rr(0, 200, 0, .5), this.rg = aH.rr(0, 100, 0, .75), this.a0x = aH.rr(0, 60, 0, .8), this.ka = aH.rr(0, 255, 0, .3), this.tY = aH.rr(0, 180, 0, .6), this.aUQ = aH.rr(0, 120, 0, .85), this.a8z = aH.aHn(0, 120,
			0), this.aGi = aH.rr(0, 70, 0, .85), this.aUR = aH.aHn(190, 230, 190), this.aQR = aH.aHn(0, 255, 0), this.aUS = aH.aHn(255, 120, 120), this.yJ = aH.aHn(255, 160, 160), this.aJi = aH.aHn(255, 70, 70), this.aUT = aH.aHn(230, 0, 0), this
		.xt = aH.rr(220, 0, 0, .6), this.aUU = aH.rr(255, 100, 100, .8), this.aNq = aH.rr(100, 0, 0, .85), this.a8y = aH.rr(60, 0, 0, .85), this.aUV = aH.rr(200, 0, 0, .6), this.a2S = aH.rr(120, 0, 0, .85), this.aNn = aH.aHn(255, 70, 10), this.aQb =
		aH.aHn(230, 190, 190), this.aQP = aH.aHn(255, 0, 0), this.aQQ = aH.aHn(255, 0, 255), this.aKv = aH.rr(60, 0, 60, .85), this.aGj = aH.rr(0, 60, 60, .85), this.aUW = aH.rr(10, 60, 60, .9), this.aUX = aH.rr(0, 96, 96, .75), this.aQS = aH.aHn(0,
			255, 255), this.sB = aH.aHn(160, 160, 255), this.aCw = aH.rr(0, 40, 90, .75), this.aUY = aH.rr(0, 0, 255, .6), this.aUZ = aH.aHn(200, 200, 255), this.aUa = aH.rr(50, 50, 255, .83), this.aCv = aH.rr(20, 90, 150, .75), this.aOB = aH.rr(10,
			10, 120, .75), this.a3z = aH.aHn(255, 120, 100), this.aUb = aH.rr(255, 255, 0, .5), this.aCy = aH.rr(255, 255, 150, .2), this.eA = aH.aHn(255, 255, 0), this.aNp = aH.aHn(255, 255, 200), this.aUc = aH.rr(200, 200, 0, .6), this.aUd = aH.rr(
			140, 120, 0, .75), this.aUe = aH.rr(180, 160, 40, .75), this.aGk = aH.rr(70, 50, 20, .85), this.aUf = aH.rr(30, 30, 0, .85), this.aKx = aH.rr(60, 60, 0, .85), this.aSo = aH.aHn(255, 255, 100), this.aQU = aH.aHn(255, 255, 140), this.aOa =
		aH.rr(255, 140, 0, .75), this.aKw = aH.rr(70, 40, 0, .85), this.aQT = aH.aHn(255, 150, 0), this.aJ5 = aH.rr(255, 200, 80, .85), this.xp = aH.rr(0, 0, 0, 0), this.k2 = aH.rr(255, 255, 255, 0), this.k3 = aH.rr(254, 254, 254, 0)
}

function aAf() {
	var aUg = aUh(),
		aUi = a2f(),
		aUj = aUk();
	this.hY = function() {
		return 123
	}, this.a3R = function() {
		hl.hq.a0L(df.dg.data[183].value, 15), hc.cG(14, aUg), hc.cG(7, aUi), hc.cG(12, aUj)
	}
}

function aBJ(tJ, size, sH, aUl, font) {
	var g, w1 = .2,
		canvas = document.createElement("canvas"),
		aA = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = tJ, canvas.height = tJ, aA.font = size + font, aA.textAlign = "center", aA.textBaseline = "middle", aA.fillStyle = "red", g = 0; g < sH.length; g++) aA.fillText(sH[g], .5 * tJ, .5 * tJ);
	return -1 < (canvas = function(pi) {
		var g, hI, bZ = pi.data;
		for (g = bZ.length - 4; 0 <= g; g -= 4)
			if (hI = bZ[g], aUl <= hI) return Math.floor(g / (4 * tJ));
		return -1
	}(aA.getImageData(0, 0, tJ, tJ))) && (w1 = (canvas - .5 * tJ + .1 * size) / size), Math.max(w1, 0)
}

function aGQ() {
	var dK, dL, dR;

	function aUq() {
		var dl;
		1 === aO.data.gameMode ? (aO.data.teamPlayerCount || (aO.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aO.aGo.a2r()), dl = aZ.ky.a2u(aO.data.teamPlayerCount, 0), aO.data.numberTeams = dl) : (2 === aO.data
			.botDifficultyType && (aO.data.botDifficultyType = 0), 1 === aO.data.spawningType && (aO.data.spawningType = 0))
	}

	function k5() {
		1 !== aO.data.gameMode && (aO.data.teamPlayerCount = null), aUs(), aO.data.canvas = null, bT.c4(5, 5)
	}

	function aUs() {
		d0.d1.d(), df.dm.dn(156, d0.aPM.a3R())
	}

	function aUo() {
		aO.data.isReplay = 0, aUs(), aO.aGo.a2y(), bi.aTM(), aO.aGo.a2v(), aO.data.canvas = 2 === aO.data.mapType ? a1.a71 : null, aO.bk(), aO.bl = 1
	}

	function aV6() {
		aUq();
		for (var bu = [dU(), aUw(), aUx()], g = 3; g < 6; g++) bT.removeChild(dL.pb, dL.aFA[g].pa), dL.aFA[g] = bu[g - 3], dL.pb.appendChild(dL.aFA[g].pa);
		dL.resize()
	}

	function dU() {
		var aV7, dY = new dZ;
		return dY.da(L(4)), aV7 = 0 === aO.data.gameMode ? [L(78), L(80)][aO.data.colorsType] : aO.data.numberTeams + " Team" + (1 === aO.data.numberTeams ? "" : "s"), dY.db(aV7), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(21)
		}).button])), dY
	}

	function aUw() {
		var dY = new dZ,
			bu = (dY.da(L(310)), [L(112) + ": " + gc.aNv[aO.data.botDifficultyValue], L(384), L(385), L(80)]);
		return dY.db(bu[aO.data.botDifficultyType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(25)
		}).button])), dY
	}

	function aUx() {
		var dY = new dZ,
			bu = (dY.da("Spawning"), [L(78), L(79), L(80)]);
		return dY.db(bu[aO.data.spawningType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(24)
		}).button])), dY
	}
	this.show = function() {
		dK.show(), this.resize(), dK.dP.scrollTop = bT.i.ru[0]
	}, this.eB = function() {
		bT.i.ru[0] = dK.dP.scrollTop, dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM("🔧 " + L(265), [new c6("⬅️ " + L(1), k5), new c6(L(380), aUo)]), aUq(), aO.data.canvas || (2 === aO.data.mapType ? aO.data.canvas = a1.a71 : 1 === aO.data.mapType ? aO.data.canvas = a1.a7C(a1.a2w(aO.data), 0).a71 : (aO.data
		.mapType = 0, aO.data.passableWater = aO.data.passableMountains = 1, aO.data.canvas = a1.a7C(a1.a2w(aO.data), aO.data.mapSeed).a71)), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ,
			a9 = (dY.da(L(381)), aO.data.canvas);
		a9.style.width = "100%", dY.dq({
			br: a9
		}), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(20)
		}).button])), dR.push(dY)
	}(dR = []), function(dR) {
		var dY = new dZ;
		dY.da(L(55)), dY.dq(new dr({
			b7: -1,
			value: aO.data.playerCount
		}, 1, 0, function(br) {
			var playerCount = gT.gn(Math.floor(br.target.value), 1, 512);
			br.target.value = aO.data.playerCount = playerCount, 1 === aO.data.gameMode && (br = aZ.ky.a2u(aO.data.teamPlayerCount, 0), aO.aGo.a2r(), aZ.ky.a2u(aO.data.teamPlayerCount, 0) !== br) && aV6()
		})), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ;
		dY.da(L(383)), dY.q1(new uA({
			jX: ["Battle Royale", "Teams"],
			value: aO.data.gameMode
		}, function(b7) {
			aO.data.gameMode !== b7 && (1 === (aO.data.gameMode = b7) && (aO.data.colorsData || (aO.data.colorsData = new Uint32Array(1)), aO.data.colorsData[0] = 258049), aV6())
		})), dR.push(dY)
	}(dR), dR.push(dU()), dR.push(aUw()), dR.push(aUx()), function(dR) {
		var dY = new dZ,
			bu = (dY.da(L(121)), [L(122), L(123), L(80)]);
		dY.db(bu[aO.data.playerNamesType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(23)
		}).button])), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ,
			bu = (dY.da(L(43)), [L(111), L(112) + ": " + aO.data.aIncomeValue, L(80)]);
		dY.db(bu[aO.data.aIncomeType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(22)
		}).button])), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ,
			bu = (dY.da(L(34)), [L(111), L(112) + ": " + aO.data.tIncomeValue, L(80)]);
		dY.db(bu[aO.data.tIncomeType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(26)
		}).button])), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ,
			bu = (dY.da(L(35)), [L(111), L(112) + ": " + aO.data.iIncomeValue, L(80)]);
		dY.db(bu[aO.data.iIncomeType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(27)
		}).button])), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ,
			bu = (dY.da(L(110)), [L(111), L(112) + ": " + aO.data.sResourcesValue, L(80)]);
		dY.db(bu[aO.data.sResourcesType]), dY.dq(new ds([new c6(L(382), function() {
			bT.c4(28)
		}).button])), dR.push(dY)
	}(dR), function(dR) {
		var dY = new dZ;
		dY.da(L(386)), dY.dq(new ds([new c6(L(387), function() {
			bT.c7(), aO.aGo.a30(), bT.i.ru[0] = 0, bT.c4(19)
		}).button])), dY.dq(new ds([new c6(L(388), function() {
			lw.aEm()
		}).button])), dY.dq(new ds([new c6(L(389), function() {
			return lw.aEo(), !0
		}).button])), dR.push(dY)
	}(dR), dR))
}

function a1l() {
	function aVB(player, aV9) {
		aV9 = gq.aBm(a4.i.a6[aV9]), aV9 = h3.xE(gq.h2(aV9));
		return !!a4.ec.xF(player, aV9)
	}

	function aV8(player) {
		return a4.x7.x8(player) && !a4.a1h.a4E()
	}
	this.aE5 = function(player, gz) {
		return !!aV8(player) && -1 !== (gz = function(player, gz) {
			for (var a3 = a4.i.a5, a6 = a4.i.a6, a7 = a4.i.a7, aFn = gq.xA(), aI4 = -1, g = 0; g < a3; g++) {
				var pk = gq.aVI(gz, gq.aBm(a6[g]));
				pk < aFn && aZ.aa.ql(player, a7[g] >> 3) && (aFn = pk, aI4 = g)
			}
			return aI4
		}(player, gz)) && !!aVB(player, gz) && (gD.xH[3] = a4.i.aCJ[gz], !0)
	}, this.aM3 = function(player, a20) {
		return !!aV8(player) && !!a4.ec.aVC(a20) && !!aVB(player, gD.xH[2])
	}, this.aOK = function(player, a20, aVD) {
		return !! function(player, a20, aVD) {
			if (aV8(player) && a4.ec.aVC(a20)) {
				a20 = gD.xH[2];
				if (aZ.aa.ql(player, a4.i.a7[a20] >> 3)) {
					if (function(player, aV9) {
							return a4.ec.aVO(player, aV9) && (gD.bu[0] = a4.a1h.a4I(a4.i.aFI[aV9]), gD.xH[1] = 6, !0)
						}(player, a20)) return 1;
					var aIK = gq.aBm(a4.i.a6[a20]),
						aHI = a4.ec.aHJ(player, aIK);
					if (-1 !== aHI) {
						aHI = gq.aVI(aHI, aIK);
						if (!(aVD && 120 < aHI)) {
							aVD = function(aV9, aVH, aIK) {
								var a4J = a4.i.aFI[aV9],
									aV9 = a4.i.aFJ[aV9],
									aVL = gq.aVI(aIK, a4J[aV9 + 1]);
								if (aVH <= aVL) return a4.ec.aVM(aIK, a4J[aV9 + 1], aVL, aVH);
								for (var pk = aVH - aVL, a3 = a4J.length - 1, g = aV9 + 1; g < a3; g++) {
									var aVN = gq.aVI(a4J[g], a4J[g + 1]);
									if (pk <= aVN) return a4.ec.aVM(a4J[g], a4J[g + 1], aVN, pk);
									pk -= aVN
								}
								return a4J[a3]
							}(a20, aHI, aIK);
							if (a4.qv.aHE(player, aVD, 1)) return gD.xH[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, a20, aVD) && (player = gD.xH[2], a4.i.aFG[player] = 64 + a4.i.aFG[player] % 64, a4.a1m.ai(a20, a4.i.aFE), !0)
	}
}

function a73() {
	this.o5 = null, this.aVP = null, this.aVQ = null, this.d = function() {
		this.kt = [L(390), L(391), L(392), L(393), L(394), L(395), L(396), L(397), L(398), L(399), L(400), L(401), L(402), L(403), L(404), L(405), L(406), L(407), L(408), L(409), L(410), L(411), L(412), L(413), "Mare Nostrum"];
		var aVR = [120, 105, 92],
			cos = [12, 12, 60],
			aVS = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aVT = [140, 130, 120],
			aVU = [12, 12, 76],
			aVV = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aVW = [130, 117, 106],
			aVX = [12, 12, 68],
			aVY = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.o5 = new Array(a1.a6z + 1), this.o5[0] = {
			p: 230,
			r: 230,
			a79: 1e3,
			a7A: 2e3,
			l0: 173
		}, this.o5[1] = {
			p: 800,
			r: 800,
			a79: 100,
			a7A: 50,
			l0: 43
		}, this.o5[2] = {
			p: 512,
			r: 512,
			a79: 128,
			a7A: 32,
			l0: 0
		}, this.o5[3] = {
			p: 960,
			r: 960,
			a79: 60,
			a7A: 8,
			l0: 0
		}, this.o5[4] = {
			p: 900,
			r: 900,
			a79: 100,
			a7A: 5,
			l0: 0
		}, this.o5[5] = {
			p: 1e3,
			r: 1e3,
			a79: 100,
			a7A: 40,
			l0: 0
		}, this.o5[6] = {
			p: 1e3,
			r: 1e3,
			a79: 100,
			a7A: 20,
			l0: 0
		}, this.o5[7] = {
			p: 1024,
			r: 1024,
			a79: 128,
			a7A: 32,
			l0: 0
		}, this.o5[8] = {
			p: 820,
			r: 820,
			a79: 200,
			a7A: 100,
			l0: 0
		}, this.o5[9] = {
			p: 1024,
			r: 1024,
			a79: 128,
			a7A: 32,
			l0: 0
		}, this.o5[10] = {
			o6: aVT,
			o7: aVU,
			o8: aVV
		}, this.o5[11] = {
			o6: aVW,
			o7: aVX,
			o8: aVY
		}, this.o5[12] = {
			o6: aVW,
			o7: aVX,
			o8: aVY
		}, this.o5[13] = {
			o6: aVR,
			o7: cos,
			o8: aVS
		}, this.o5[14] = {
			o6: aVR,
			o7: cos,
			o8: aVS
		}, this.o5[15] = {
			o6: aVT,
			o7: aVU,
			o8: aVV
		}, this.o5[16] = {
			o6: aVT,
			o7: aVU,
			o8: aVV
		}, this.o5[17] = {
			o6: aVR,
			o7: cos,
			o8: aVS
		}, this.o5[18] = {
			o6: aVW,
			o7: aVX,
			o8: aVY
		}, this.o5[19] = {
			o6: aVR,
			o7: cos,
			o8: aVS
		}, this.o5[20] = {
			p: 1024,
			r: 1024,
			a79: 128,
			a7A: 32,
			l0: 0
		}, this.o5[21] = {
			p: 940,
			r: 940,
			a79: 80,
			a7A: 8,
			l0: 0
		}, this.o5[22] = {
			o6: aVW,
			o7: aVX,
			o8: aVY
		}, this.o5[23] = {
			o6: aVT,
			o7: aVU,
			o8: aVV
		}, this.o5[24] = {
			o6: [157, 136, 117],
			o7: [16, 13, 68],
			o8: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aO4: "[OG] Neutronian"
		};
		for (var g = 0; g < a1.a6z; g++) this.o5[g].name = this.kt[g];
		this.o5[a1.a6z] = {
			name: ""
		}, this.aVP = new Uint8Array(12);
		for (g = 0; g < 10; g++) this.aVP[g] = g;
		for (this.aVP[10] = 20, this.aVP[11] = 21, this.aVQ = new Uint8Array(a1.a70), g = 0; g < 10; g++) this.aVQ[g] = 10 + g;
		this.aVQ[10] = 22, this.aVQ[11] = 23, this.aVQ[12] = 24
	}
}

function aVb() {
	var aVc = 0,
		aVd = "",
		aVe = 0,
		aVf = 0,
		aVg = 0;

	function k8(kG) {
		dc.kO.kP(3, kG)
	}

	function aVq(dl) {
		aVc = 1, bH.message.aA0({
			id: 6,
			value: dl
		})
	}

	function aVk(c2) {
		var aVu = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return c2.match(aVu)
	}
	this.kK = function(c2) {
		var aVh, bu, aVm;
		if (aVc) return aVc = 0, "yes" === (aVh = c2.toLowerCase()) || "y" === aVh ? void k8(aVd) : void bH.message.aA0({
			id: 5,
			a4z: 7
		});
		!(c2.indexOf("@") < 0) && (aVh = aVk(c2)) ? (aVd = c2, bu = function(aVj) {
			for (var a3 = aVj.length, aVs = [0, 0, 0, 0], g = 0; g < a3; g++)
				for (var p = aVj[g], b8 = 0; b8 < 4; b8++) p === "@room" + (b8 + 1) && (aVs[b8] = 1);
			if ((aVf = aZ.ky.u5(aVs)) % 4 == 0) return aZ.ky.a6m(bH.bI.bN);
			for (b8 = 0; b8 < 4; b8++) aVs[b8] = aVs[b8] ? bH.bI.bN[b8] : [];
			return aZ.ky.a6m(aVs)
		}(aVh), function(aVj, aVm, c2) {
			if (!aVe) return;
			for (var a3 = aVm.length, g = 0; g < a3; g++) 2 === aVm[g].id && (c2 = c2.replace(aVj[aVm[g].b7], "@" + aVm[g].aq));
			return aVc = 1, k8((aVd = c2).slice(0, 126) + "|"), 1
		}(aVh, aVm = function(aVj) {
			for (var aVm = [], a3 = (aVg = aVe = 0, aVj.length), g = 0; g < a3; g++) {
				var p = aVj[g],
					aj = p.length;
				aZ.fo.startsWith(p, "@[") ? aj <= 9 && aZ.fo.kR(p, "]") && aVm.push({
					id: 0,
					aq: p.substring(2, aj - 1).toUpperCase()
				}) : 6 === aj ? aZ.fo.startsWith(p, "@room") || (aVg++, aVm.push({
					id: 1,
					aq: hl.hq.a0M(p.substring(1), 5)
				})) : 1 < aj && aj < 5 && 0 <= (aj = jF.data.aMO(p.substring(1))) && (aVm.push({
					id: 2,
					aq: aj,
					b7: g
				}), aVe = 1)
			}
			return aVm
		}(aVh), c2) || (0 === aVm.length ? aVf || function(aVj) {
			for (var a3 = aVj.length, g = 0; g < a3; g++) {
				var p = aVj[g];
				if ("@all" === p || "@everyone" === p) return 1
			}
			return
		}(aVh) ? aVq(bu.length) : k8(c2) : aVh.length === aVg ? k8(c2) : (function(bu, aVm) {
			var aj = aVm.length;
			if (0 === aj) return;
			var a3 = bu.length;
			loop: for (var g = a3 - 1; 0 <= g; g--) {
				for (var b8 = 0; b8 < aj; b8++)
					if (0 === aVm[b8].id) {
						if (aVm[b8].aq === aZ.fo.ft(bu[g].username)) continue loop
					} else if (1 === aVm[b8].id && aVm[b8].aq === bu[g].bh) continue loop;
				bu[g] = bu[--a3], bu.pop()
			}
		}(bu, aVm), aVq(bu.length)))) : k8(c2)
	}, this.a9z = function(c2) {
		var aVj = aVk(c2);
		if (aVj)
			for (var cE = new RegExp("^[0-9]+$"), a3 = aVj.length, g = 0; g < a3; g++) {
				var p = aVj[g].substring(1),
					aj = p.length;
				1 <= aj && aj <= 3 && cE.test(p) && (aj = parseInt(p, 10), !isNaN(aj)) && 0 <= aj && aj < jF.data.bu.length && (c2 = c2.replace("@" + p, "@" + jF.data.bu[aj]))
			}
		return c2
	}
}

function a1X() {
	var tO = 32,
		tN = new Array(2);

	function a80(aH) {
		var aF, aG, gz, vQ, vP, tJ = tO,
			a9 = aZ.e2.a80(tJ, tJ),
			aA = aZ.e2.getContext(a9, !0),
			pi = aZ.e2.getImageData(aA, tJ, tJ),
			pj = pi.data,
			aj = (tJ >> 1) - .5,
			r3 = Math.sqrt(aj * aj);
		for (pj.fill(255), aG = 0; aG < tJ; aG++)
			for (aF = 0; aF < tJ; aF++) vP = aF - aj, vQ = aG - aj, gz = 4 * (aG * tJ + aF), vP = 714 * (r3 - Math.sqrt(vP * vP + vQ * vQ)) / r3, pj[2 + gz] = aH, pj[3 + gz] = 255 < vP ? 0 : vP;
		return aA.putImageData(pi, 0, 0), a9
	}
	this.aVv = -1, this.d = function() {
		this.aVv = -1, tN[0] || (tN[0] = a80(255), tN[1] = a80(0))
	}, this.aMj = function(aA, h1, aF, aG, hI, g) {
		aZ.aa.fQ(aO.b2) && (aA.setTransform(h1 *= 4 / 3 * .625, 0, 0, h1, aF - (hI *= 4 / 3), aG - hI), aA.drawImage(tN[+(a4.i.aCJ[g] === this.aVv)], 0, 0))
	}
}

function m9() {
	this.data = new aMJ;
	var aVw = (new aNE).L84,
		aVy = (this.jG = aVw, !(this.aVx = "en"));
	this.d = function() {
		var eJ, bu;
		aVy = !1, ("en" === (eJ = df.dg.data[12].value).split("-")[0].toLowerCase() ? (jF.jG = aVw, jF.aVx = eJ, 1) : df.dg.data[12].value === df.dg.data[145].value && 0 < df.dg.data[146].value && (eJ = df.dg.data[146].value, (bu = df.eE.a2i(eJ,
			!1)).length === eJ) && !!aZ.ky.a6i(bu) && function(bu) {
			for (var a3 = bu.length, r = 0; r < a3; r++) bu[r] = bu[r].replace("&#39;", "'");
			var aW5 = df.eE.a2i(a3, !0);
			if (a3 !== aW5.length) return !1;
			if (!aZ.ky.a6i(aW5)) return !1;
			for (var aj = aVw.length, aOv = new Array(aj), a96 = aj === a3, dl = Math.min(a3, aj), g = 0; g < aj; g++)
				if (aOv[g] = aVw[g], g < a3 && aW5[g] === aOv[g]) aOv[g] = bu[g];
				else {
					a96 = !1;
					for (var fi = 0; fi < dl; fi++)
						if (aW5[fi] === aOv[g]) {
							aOv[g] = bu[fi];
							break
						}
				} return jF.jG = aOv, jF.aVx = df.dg.data[12].value, a96
		}(bu)) || (aVy = !0)
	}, this.nd = function() {
		e.g9(), gc.g9(), gR.g9(), ac.g9(), lA.d(), lx = new aW3
	}, this.jH = function() {
		return this.jG === aVw || !aVw.length
	}, this.rW = function() {
		var aW6;
		return !!aVy && (aVy = !1, 0 !== aVw.length) && (aW6 = df.dg.data[12].value, dc.pL.aQl(0, aW6.slice(0, 20)), !0)
	}, this.aW7 = function(bu) {
		bu.length !== aVw.length ? 8 === bT.bU && bT.kU().rZ(30, 0, 1) : (this.jG = bu, this.aVx = df.dg.data[12].value, df.dm.dn(145, this.aVx), df.dm.dn(146, bu.length), df.eE.a2m(bu, !1), df.eE.a2m(aVw, !0), 8 === bT.bU ? bT.kU().rZ(30) :
			0 === bi.o4() && 5 === bT.bU && bT.i.rH())
	}, this.aQr = function() {
		var oW, bu = navigator.languages;
		return bu && bu.length ? (oW = Math.max(jF.data.aMO(bu[0]), 0), 1 === bu.length ? [oW, oW] : [oW, Math.max(jF.data.aMO(bu[1]), 0)]) : [0, 0]
	}
}

function a1n() {
	var a0y = 0,
		aW8 = null;
	this.d = function() {
		null === aW8 && (aW8 = new Uint16Array(2 * a4.i.aFC)), a0y = 0
	}, this.ai = function(aW9, a1m) {
		var aWA = aW8;
		aWA[a0y++] = aW9, aWA[a0y++] = a1m
	}, this.aRL = function(player, aWB) {
		for (var aWA = aW8, a3 = a0y, g = 0; g < a3; g += 2)
			if (aWA[g] === aWB && a4.ec.aVC(aWA[g + 1]) && player === a4.i.a7[gD.xH[2]] >> 3) return !0;
		return !1
	}, this.a3b = function(aWC) {
		var a1Y = a4.i.aFG[aWC];
		if (!(a1Y < 64)) {
			for (var aWB = a4.i.aCJ[aWC], aWA = aW8, a3 = a0y, g = a3 - 2; 0 <= g; g -= 2)
				if (aWA[g] === aWB) {
					{
						aWG = void 0;
						var aWG = aWA[g + 1];
						a4.ec.aVC(aWG) && a4.a1m.a3a(gD.xH[2])
					}
					aWA[g] = aWA[a3 - 2], aWA[g + 1] = aWA[a3 - 1], a3 -= 2
				} a0y = a3
		}
	}, this.aIL = function(aWE, aWF) {
		for (var aWG = a4.i.aCJ[aWE], aWB = -1, aWA = aW8, a3 = a0y, g = 1; g < a3; g += 2)
			if (aWA[g] === aWG) {
				aWB = aWA[g - 1];
				break
			} if (-1 === aWB) return !1;
		if (!a4.ec.aVC(aWB)) return !1;
		var aWC = gD.xH[2],
			a4J = a4.i.aFI[aWC];
		if (aWF === a4J[a4J.length - 1]) a4.i.aFI[aWE] = a4.a1h.a4L(a4.i.aFI[aWE], a4.a1h.a4I(a4J));
		else {
			var aWH = a4.ec.aWI(a4J, aWF);
			if (-1 === aWH) return !1;
			var aWJ = a4.i.aFJ[aWC];
			aWH === aWJ ? (aWC = gq.aBm(a4.i.a6[aWC]), a4.i.aFI[aWE] = a4.a1h.a4N(a4.i.aFI[aWE], a4J, aWH, aWF, gq.aVI(a4J[aWH], aWF) > gq.aVI(a4J[aWH], aWC))) : a4.i.aFI[aWE] = a4.a1h.a4N(a4.i.aFI[aWE], a4J, aWH, aWF, aWJ < aWH)
		}
		return !0
	}, this.a3a = function(aV9) {
		var a4J, aj = a4.i,
			a1Y = aj.aFG[aV9];
		return a1Y % 64 != 5 && (a4J = aj.aFI[aV9], aj.aFF[aV9] = 65535 - aj.aFF[aV9], aj.aFJ[aV9] = a4J.length - aj.aFJ[aV9] - 2, aj.aFI[aV9] = a4.a1h.a4I(a4J), aj.aFG[aV9] = a1Y - a1Y % 64 + 5, !0)
	}
}

function aWM() {
	var a12 = 12e3;
	this.show = function(aPL) {
		return !aPL && !lm.aOe() && (0 === c9.id ? lm.aU4.show() : !(cR.cQ < a12) && (aPL = 1 === c9.id ? 72e4 : 108e4, a12 = cR.cQ + aPL, 2 === bw.a9K) && c9.cA.a2Q(Math.floor(aPL)))
	}
}

function xe() {
	this.resize = function() {
		var g, a8t = document.head.querySelector("style#ss");
		if (a8t)
			for (g = a8t.sheet.cssRules.length - 1; 0 <= g; g--) a8t.sheet.deleteRule(0);
		else(a8t = document.createElement("style")).id = "ss", document.head.appendChild(a8t);
		var aI9 = "::-webkit-scrollbar",
			aSb = aZ.e2.em(i9.a6Q),
			tJ = aZ.e2.em(Math.max(aZ.e2.en(.012), 8));
		try {
			a8t.sheet.insertRule(aI9 + "{width:" + tJ + ";height:" + tJ + ";}", a8t.sheet.cssRules.length), a8t.sheet.insertRule(aI9 + "-thumb{background-color:white;}", a8t.sheet.cssRules.length), a8t.sheet.insertRule(aI9 +
				"-track{background:" + e8.iM + ";}", a8t.sheet.cssRules.length), a8t.sheet.insertRule(aI9 + "-track:horizontal{border-top:" + aSb + " solid white;}", a8t.sheet.cssRules.length), a8t.sheet.insertRule(aI9 +
				"-track:vertical{border-left:" + aSb + " solid white;}", a8t.sheet.cssRules.length), a8t.sheet.insertRule(aI9 + "-button{display:none;}", a8t.sheet.cssRules.length)
		} catch (br) {
			for (console.log("error 3425: " + br), g = a8t.sheet.cssRules.length - 1; 0 <= g; g--) a8t.sheet.deleteRule(0)
		}
	}
}

function k0(a6p, sQ, aWN) {
	this.pa = document.createElement("div"), this.kC = a6p;
	var aWO = 0;
	this.resize = function(el, a0d) {
		var a3 = a6p.length;
		if (!aWN)
			for (var g = 1; g < a3; g++) aZ.e2.jV(a6p[g].button, 4);
		for (var a0f = 0, g = 0; g < a3; g++) a0f += a6p[g].button.offsetWidth;
		if (el && (aWO = el.offsetWidth), a0d && a0f < aWO)
			for (g = 0; g < a3; g++) a6p[g].button.style.width = (100 * a6p[g].button.offsetWidth / a0f).toFixed(2) + "%";
		else
			for (g = 0; g < a3; g++) a6p[g].button.style.width = "auto";
		a0d || this.resize(el, 1)
	};
	var ig = this;
	ig.pa.style.height = ig.pa.style.maxHeight = "100%";
	for (var g = 0; g < a6p.length; g++) a6p[g].e7(sQ), a6p[g].button.style.height = "100%", a6p[g].button.style.padding = "0.0em 0.9em", a6p[g].button.style.whiteSpace = "pre", ig.pa.appendChild(a6p[g].button)
}

function mI() {
	var kC, aF, aG, aWP, aWQ, aWR, cQ, aWS, aWT, aWU, aWV, gap, zoom, aMT, aWW;

	function aWf(iW, iX, h1) {
		h3.sv(h1) || -1 === (iW = a4.ec.aCG(iW, iX)) ? b3.aNs(h1) : b3.aNw(iW)
	}

	function aWd(aWS) {
		for (var g = aMT.length - 1; 0 <= g; g--)
			if (aMT[g] === aWS) return 1
	}

	function aWb(aB8) {
		var g, a3;
		if (-1 !== aB8)
			for (a3 = kC.length, g = 0; g < a3; g++)
				if (kC[g].i1 && kC[g].aF + 1 === aB8 % 4 && kC[g].aG + 1 === aB8 >> 2) return g;
		return -1
	}

	function aWZ(iW, iX) {
		var fc = gap / 2;
		return iW < aF - aWP - 3 * fc || aF + 3 * aWP + 5 * fc < iW || iX < aG - aWP - 3 * fc || aG + 2 * aWP + 3 * fc < iX ? -1 : 4 * (iX < aG - fc ? 0 : iX < aG + aWP + fc ? 1 : 2) + (iW < aF - fc ? 0 : iW < aF + aWP + fc ? 1 : iW < aF + 2 * aWP +
			3 * fc ? 2 : 3)
	}
	this.aLm = function() {
		var g, fi, aWY = [e8.tY, e8.aUV, e8.tZ, e8.aUc, e8.aUY];
		for (kC = new Array(10), g = 0; g < 10; g++) kC[g] = {
			id: g,
			i1: !1,
			r4: 0,
			canvas: [],
			aF: 0,
			aG: 0
		};
		for (kC[0].colors = [0, 1, 2, 3], kC[0].aF = 0, kC[0].aG = 0, kC[1].colors = [1, 4], kC[1].aF = 1, kC[1].aG = 0, kC[2].colors = [0, 1], kC[2].aF = -1, kC[2].aG = 0, kC[3].colors = [0], kC[3].aF = 0, kC[3].aG = 0, kC[4].colors = [0, 2],
			kC[4].aF = 1, kC[4].aG = 1, kC[5].colors = [3], kC[5].aF = 0, kC[5].aG = -1, kC[6].id = 20, kC[6].colors = [0], kC[6].aF = 1, kC[6].aG = -1, kC[7].id = 21, kC[7].colors = [0], kC[7].aF = 0, kC[7].aG = 1, kC[8].id = 16, kC[8]
			.colors = [0], kC[8].aF = 0, kC[8].aG = 0, kC[9].id = 10, kC[9].colors = [4], kC[9].aF = 2, kC[9].aG = 0, g = 0; g < 10; g++)
			for (fi = 0; fi < kC[g].colors.length; fi++) kC[g].canvas.push(function(id, aDy) {
				if (id < 20) return aZ.canvas.ta(lI.get(3), id, aDy);
				var aDy = lI.get(3).height,
					a9 = aZ.e2.a80(aDy, aDy),
					aA = aZ.e2.getContext(a9);
				20 === id ? aA.drawImage(lI.get(18), 0, 0) : 21 === id && lM.pj.tv(lM.jU.te + lM.jU.aSV, aA, 0, 0, aDy);
				return a9
			}(kC[g].id, aWY[kC[g].colors[fi]]))
	}, this.w0 = function() {
		return kC
	}, this.d = function() {
		aMT = [], aF = aG = cQ = 0, aWQ = aWR = -1e3, this.resize()
	}, this.resize = function() {
		aWP = Math.floor((c9.cA.i7() ? .075 : .0468) * o.i8), zoom = aWP / lI.get(3).height, gap = Math.floor(aWP / 3)
	}, this.aQD = function(iW, iX) {
		return !!this.i1() && (cR.cZ = !0, !!lM.pj.ia(iW, iX, aWT) || (iW = function(iW, iX) {
			aWR = aWQ = -1e3;
			var aWa = aWb(aWZ(iW, iX));
			if (-1 === aWa) return 0;
			if (1 !== kC[aWa].colors[kC[aWa].r4])
				if (5 === aWa) {
					if (! function() {
							var fh = performance.now();
							aWW + 4e3 < fh && (aMT = []);
							aWW = fh
						}(), aWd(aWS)) return 1;
					aMT.push(aWS), 16 < aMT.length && aMT.shift()
				} else if (6 === aWa) {
				for (var g = aMT.length - 1; 0 <= g; g--) 0 === fZ.f3[aMT[g]] && aMT.splice(g, 1);
				0 < aMT.length && (lc.aLv(1, aMT, !0) && dF.aa.aMS(aMT, aWS), aMT = [])
			} else if (2 === aWa) lP.aE5(aWS) && dF.tr.aEH(iJ.iO(), aWS);
			else if (3 === aWa) aO.cp && dF.tr.a5I(aWU);
			else if (0 === aWa)
				if (0 === kC[0].r4) {
					if (aO.aPE && cs.a2W() < 350) return 1;
					ln.a1C(4), dF.tr.a5J(iJ.iO(), aWS)
				} else lY.aMD(aWS, iJ.iO());
			else if (1 === aWa) dF.tr.s9(iJ.iO(), aWU);
			else if (9 === aWa) dF.tr.sC(iJ.iO());
			else {
				if (7 === aWa) return ln.a1C(0), lM.pj.show(iW, iX), 2;
				if (4 === aWa) lc.aLv(0, [aWS], !0) && dF.aa.aMR(aWS);
				else {
					if (8 !== aWa) return 0;
					dF.tr.a5P(iJ.iO(), aWV, aWS)
				}
			}
			return 1
		}(iW, iX), this.eB(), 2 === iW && (lM.pj.i1 = !0), 0 < iW))
	}, this.aMz = function(iW, iX) {
		this.i1() || (aWQ = iW, aWR = iX, cQ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = gq.gr(mouseX),
			coordY = gq.gu(mouseY),
			point = gq.h2(gq.h0(coordX, coordY));
		gq.gw(coordX, coordY) && aWf(mouseX, mouseY, point)
	}, this.click = function(iW, iX, aQH) {
		var gp = gq.gr(iW),
			gt = gq.gu(iX),
			gz = gq.h0(gp, gt),
			h1 = gq.h2(gz),
			aWe = (c9.cA.i7() ? .025 : .0144) * o.i8,
			fh = performance.now();
		return !(Math.abs(iW - aWQ) > aWe || Math.abs(iX - aWR) > aWe || cQ + 500 < fh || (cQ = fh, ei.ej() && (ei.gs = iW, ei.gv = iX, le.cT(1), lf.cT(1)), !gq.gw(gp, gt))) && (aQH ? (aWf(iW, iX, h1), !1) : ce.cf || this.i1() || !aZ.aa.fQ(aO
			.b2) || aO.i6 ? (this.eB(), !1) : (aO.cp ? 0 <= (aWU = m0.aMB(gz)) && (kC[3].i1 = !0) : 2 === aO.cd ? h3.h4(h1) && (aWS = h3.h5(h1), aZ.aa.b0(aWS) || (kC[0].i1 = !0, kC[0].r4 = 1, kC[7].i1 = !0)) : (a4.a1k.aE5(aO.b2, gz) && (kC[0]
					.i1 = !0, kC[0].r4 = 1, kC[1].i1 = !0, kC[1].r4 = 0, kC[9].i1 = !0, kC[9].r4 = 0), a4.a1g.x5(aO.b2, gz) && (kC[0].i1 = !0, kC[0].r4 = 1, kC[1].i1 = !0, kC[1].r4 = 1, aWU = gD.xH[7]), h3.aCE(h1) ? (aWV = lO.a0N.aIY(
				h1)) && (aWe = gq.h2(aWV), kC[8].i1 = !0, aWS = h3.sl(aWe) ? aO.aR : h3.h5(aWe)) : (h3.hO(aO.b2, h1) && (aWT = aO.b2, kC[0].i1 = !0, kC[0].r4 = 1, kC[7].i1 = !0), -1 !== (fh = m0.aMC(gz)) && (h3.sl(fh << 2) ? (aWS = aO.aR,
					m1.t2(aO.b2) ? (kC[0].i1 = !0, kC[0].r4 = 0) : lJ.am(aO.b2) && (kC[0].i1 = !0, kC[0].r4 = 3)) : (aWS = h3.h5(fh << 2), kC[0].r4 = 1, kC[5].i1 = function(aWS) {
					return !aZ.aa.b0(aWS) && !aWd(aWS) && lc.aLv(1, [aWS], !1)
				}(aWS), kC[7].i1 || aZ.aa.b0(aWS) || (aWT = aWS, kC[7].i1 = !0), kC[4].i1 = !aZ.aa.b0(aWS) && !b5.wB(aWS) && lc.aLv(0, [aWS], !1), kC[6].i1 = function(aWS) {
					if (0 === aMT.length) return !1;
					if (performance.now() > aWW + 4e3) return !(aMT = []);
					return !aWd(aWS) && ! function(aWS) {
						var g;
						if (aO.qX)
							for (g = aMT.length - 1; 0 <= g; g--)
								if (!m1.r5(aWS, aMT[g])) return 1;
						return
					}(aWS)
				}(aWS), m1.r5(aWS, aO.b2) ? (m1.t4(aO.b2, aWS) ? (kC[0].r4 = 0, kC[0].i1 = !0) : lJ.am(aO.b2) && (kC[0].r4 = 3, kC[0].i1 = !0), kC[0].i1 = this.aWk()) : (kC[2].i1 = !0, lP.aE5(aWS) ? kC[2].r4 = 0 : kC[2].r4 =
					1, kC[0].i1 = !0))))), this.aWg(iW, iX)))
	}, this.aWg = function(iW, iX) {
		return aF = iW - Math.floor(aWP / 2), aG = iX - Math.floor(aWP / 2), !!this.i1()
	}, this.io = function(iW, iX) {
		return !!this.i1() && (lM.pj.i1 ? !lM.pj.tq(iW, iX) && (lM.pj.i1 = !1, cR.cZ = !0) : function(ig, iW, iX) {
			iW = aWZ(iW, iX);
			if (0 <= aWb(iW)) return !1;
			if ((1 === iW || 6 === iW) && 0 <= aWb(2)) return !1;
			if ((6 === iW || 9 === iW) && 0 <= aWb(10)) return !1;
			return ig.eB(), cR.cZ = !0
		}(this, iW, iX))
	}, this.eB = function() {
		for (var g = kC.length - 1; 0 <= g; g--) kC[g].i1 = !1, kC[g].r4 = 0;
		lM.pj.i1 = !1
	}, this.i1 = function() {
		return this.aWk() || lM.pj.i1
	}, this.aWk = function() {
		for (var a3 = kC.length, g = 0; g < a3; g++)
			if (kC[g].i1) return !0;
		return !1
	}, this.k = function() {
		if (this.i1())
			if (lM.pj.i1) lM.pj.k();
			else {
				var g, aA = aB,
					fi = kC,
					a3 = fi.length,
					aWo = (aWP + gap) / zoom;
				for (aA.imageSmoothingEnabled = !0, aA.setTransform(zoom, 0, 0, zoom, aF, aG), g = 0; g < a3; g++) fi[g].i1 && aB.drawImage(fi[g].canvas[fi[g].r4], fi[g].aF * aWo, fi[g].aG * aWo);
				aA.imageSmoothingEnabled = !1, aA.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aGK() {
	var ep, a8N, dR, dY;

	function aWp() {
		jF.aVx !== df.dg.data[12].value ? (jF.d(), bT.c4(8, 1, new ev(30))) : bT.c4(1)
	}
	this.show = function() {
			ep.show(), this.resize()
		}, this.eB = function() {
			ep.eB()
		}, this.resize = function() {
			ep.resize(), a8N.resize()
		}, this.eC = function(aH) {
			2 === aH && ep.eD[0].eE()
		}, ep = new dM(L(414), [new c6("⬅️ " + L(1), aWp), new c6(L(415), function() {
			bT.c7(), df.dm.a2G(), bT.c4(2)
		})]), dR = [], (dY = new dZ).da(L(416)), dY.di(L(417)), dR.push(dY),
		function(dR) {
			var dY = new dZ,
				bu = (dY.da(L(6)), jF.data.aMK());
			dY.q1(new uA({
				jX: bu,
				value: jF.data.aMN(bu)
			}, function(b7) {
				return df.dm.dn(12, bu[b7].split(":")[0]), !0
			})), dR.push(dY)
		}(dR),
		function(dR) {
			var dY = new dZ,
				aWs = (dY.da(L(442)), []);
			dY.dq(new ds([new c6(L(5), function(br) {
				lp.zm();
				for (var g = 0; g < aWs.length; g++) aWs[g].br.value = lp.zh[g];
				return aZ.e2.e3(br), !0
			}).button]));
			for (var g = 0; g < lp.zf.length; g++) {
				dY.di(lp.zf[g]);
				for (var b8 = 0; b8 < 2; b8++) {
					var b7 = 2 * g + b8,
						kI = new dr({
							value: lp.zh[b7],
							b7: -1
						});
					kI.br.aWt = b7, aWs.push(kI), kI.br.addEventListener("keydown", function(br) {
						br.preventDefault();
						var code = br.code;
						br.target.value = code, lp.zj(br.target.aWt, code)
					}), b8 && (kI.br.style.marginLeft = "4%"), kI.br.style.width = "48%", dY.dq(kI)
				}
			}
			dR.push(dY)
		}(dR), (dY = new dZ).da(L(418)), df.dg.data[1].jX = [L(419), L(420), L(421), L(422)], dY.q1(new uA(df.dg.data[1])), dR.push(dY), (dY = new dZ).da(L(423)), df.dg.data[9].jX = [L(420), L(424), L(425)], dY.q1(new uA(df.dg.data[9])), dR.push(dY),
		(dY = new dZ).da(L(426)), df.dg.data[11].jX = [L(427), L(360), L(428)], dY.q1(new uA(df.dg.data[11])), dR.push(dY), (dY = new dZ).da(L(429)), dY.dq(new uB(df.dg.data[2])), dR.push(dY), (dY = new dZ).da(L(430)), dY.dq(new uB(df.dg.data[7])),
		dR.push(dY), (dY = new dZ).da(L(431)), dY.dq(new uB(df.dg.data[8])), dR.push(dY), (dY = new dZ).da(L(432)), dY.dq(new dr(df.dg.data[5])), dR.push(dY), (dY = new dZ).da(L(433)), dY.dq(new uB(df.dg.data[13], L(434))), dY.dq(new uB(df.dg.data[
			14], L(435))), dR.push(dY), (dY = new dZ).da(L(436)), dY.q1(new uA({
			jX: [L(437), L(438), L(439)],
			value: lH.p9
		}, function(g) {
			lH.p9 = g
		})), dR.push(dY), (dY = new dZ).da(L(440)), dY.dq(new uB(df.dg.data[15])), dY.di(L(441)), dY.dq(new dr(df.dg.data[16], 1, 0, function(br) {
			br.target.value = gT.gn(Math.floor(br.target.value), 0, 16)
		})), dR.push(dY), a8N = new dO(ep.dP, dR)
}

function mL() {
	var a2T, aWu, aDa, iz, aDT, aWv = 0,
		aWw = 0;

	function aWy(g) {
		var aWz = !0,
			w8 = e8.e9,
			p = (1 === a2T[g].id ? a2T[g].i0.fillStyle = e8.aUa : a2T[g].aL === aO.aR ? a2T[g].i0.fillStyle = e8.aUK : (h3.aJQ(a2T[g].aL), a2T[g].i0.fillStyle = aZ.color.rr(gD.aJR[0], gD.aJR[1], gD.aJR[2], .87), 400 < aZ.ky.u5(gD.aJR, 0, 2) && (
				aWz = !1, w8 = e8.jC)), a2T[g].canvas.width),
			s6 = (a2T[g].i0.clearRect(0, 0, p, iz), a2T[g].i0.fillRect(0, 0, p, iz), a2T[g].i0.fillStyle = w8, ! function(i0, p, iz) {
				i0.fillRect(0, 0, p, 1), i0.fillRect(0, iz - 1, p, 1), i0.fillRect(0, 0, 1, iz), i0.fillRect(p - 1, 0, 1, iz)
			}(a2T[g].i0, p, iz), aWu + 2 * iz < p && (a2T[g].i0.fillRect(p - aWu - iz, 0, 1, iz), a2T[g].i0.fillText(fZ.f1[a2T[g].aL], Math.floor((p - aWu) / 2), Math.floor(.57 * iz))), 0 !== a2T[g].id ? 0 : iz);
		a2T[g].i0.fillText(aZ.fo.iP(a2T[g].aM), Math.floor(p - aWu / 2 - s6), Math.floor(.57 * iz)),
			function(g, p, s6, aWz) {
				a2T[g].i0.fillStyle = aWz ? e8.aP3 : e8.tZ;
				aWz = Math.floor(aWu * a2T[g].aM / a2T[g].aX4);
				a2T[g].i0.fillRect(Math.floor(p - aWu - s6), iz - aDT, aWz, aDT)
			}(g, p, s6, aWz), 0 === a2T[g].id ? (aX2(g, p, aWz, w8), function(g, p, aWz) {
				a2T[g].i0.strokeStyle = aWz ? e8.fe : e8.a8z, a2T[g].i0.fillRect(iz, 0, 1, iz);
				aWz = p - iz;
				a2T[g].i0.beginPath(), a2T[g].i0.moveTo(Math.floor(.3 * iz + aWz), Math.floor(iz / 2)), a2T[g].i0.lineTo(Math.floor(iz - .3 * iz + 0 + aWz), Math.floor(iz / 2)), a2T[g].i0.stroke(), a2T[g].i0.beginPath(), a2T[g].i0.moveTo(Math
					.floor(iz / 2 + aWz), Math.floor(.3 * iz)), a2T[g].i0.lineTo(Math.floor(iz / 2 + aWz), Math.floor(iz - .3 * iz + 0)), a2T[g].i0.stroke()
			}(g, p, aWz)) : aX2(g, 2 * iz, aWz, w8)
	}

	function aX2(g, p, aWz, w8) {
		a2T[g].i0.strokeStyle = a2T[g].aX5 ? e8.aSW : aWz ? e8.aJi : e8.aUT, a2T[g].i0.fillStyle = w8, a2T[g].i0.fillRect(p - iz, 0, 1, iz), a2T[g].i0.lineWidth = Math.max(Math.floor(iz / 12), 3), a2T[g].i0.lineCap = "round";
		aWz = .35;
		p = iz + 1, a2T[g].i0.beginPath(), a2T[g].i0.moveTo(Math.floor(p - aWz * iz + 0), Math.floor(aWz * iz)), a2T[g].i0.lineTo(Math.floor(p - iz + aWz * iz), Math.floor(iz - aWz * iz + 0)), a2T[g].i0.stroke(), a2T[g].i0.beginPath(), a2T[g].i0
			.moveTo(Math.floor(p - iz + aWz * iz), Math.floor(aWz * iz)), a2T[g].i0.lineTo(Math.floor(p - aWz * iz + 0), Math.floor(iz - aWz * iz + 0)), a2T[g].i0.stroke()
	}

	function aXG(bu, aV4) {
		for (var aM, g = aV4 - 1; 0 <= g; g--) aM = lJ.ao(aO.b2, g), bu[g].aM !== aM && (bu[g].aM = aM, bu[g].aX4 = Math.max(aM, bu[g].aX4), bu[g].i3 = !0)
	}

	function aXJ(bu, aV5) {
		for (var ex = aO.b2 << 3, aCI = a4.i.aCI, aFG = a4.i.aFG, aFK = a4.i.aFK, g = aV5 - 1; 0 <= g; g--) {
			var aXL = aFK[ex + g],
				aM = aCI[aXL];
			bu[g].aM !== aM ? (bu[g].aM = aM, bu[g].aX4 = Math.max(aM, bu[g].aX4), bu[g].i3 = !0) : bu[g].aX5 || aFG[aXL] % 64 != 5 || (bu[g].aX5 = !0, bu[g].i3 = !0)
		}
	}

	function aWx(wd) {
		wd.canvas = document.createElement("canvas"), a1.oJ.font = aDa;
		var p = aWu;
		wd.aL < aO.aR && 0 === wd.id && (p += Math.floor(a1.oJ.measureText(fZ.f1[wd.aL] + "000").width)), p += iz, 0 === wd.id && (p += iz), wd.canvas.width = p, wd.canvas.height = iz, wd.i0 = wd.canvas.getContext("2d", {
			alpha: !0
		}), wd.i0.font = aDa, aZ.e2.textBaseline(wd.i0, 1), aZ.e2.textAlign(wd.i0, 1)
	}

	function aXB(g) {
		return lD.a3w() ? o.p - a2T[g].canvas.width - i9.gap : lD.aF
	}

	function aXC(g) {
		return Math.floor(2 * i9.gap + (lD.a3w() ? cs.r + i9.gap : 0) + lD.r + g * (1.3 * iz))
	}
	this.d = function() {
		aWv = aWw = 0, a2T = [], this.resize()
	}, this.resize = function() {
		aDa = b3.i2, iz = b3.fontSize + 5, iz = Math.floor(1.25 * iz), c9.cA.i7() && (iz = Math.floor(1.25 * iz)), aDT = Math.floor(.15 * iz), a1.oJ.font = aDa, aWu = Math.floor(a1.oJ.measureText("02 000 000 0000").width);
		for (var g = a2T.length - 1; 0 <= g; g--) aWx(a2T[g]), aWy(g)
	}, this.cw = function() {
		for (var g = a2T.length - 1; 0 <= g; g--) a2T[g].i3 && (a2T[g].i3 = !1, aWy(g))
	}, this.ia = function(iW, iX) {
		if (2 !== aO.cd && 0 !== fZ.f3[aO.b2] && !aO.i6 && !aZ.aa.b0(aO.b2))
			for (var aX6, aX7, aX8, aX9 = c9.cA.i7() ? iz : 0, aXA = c9.cA.i7() ? Math.floor(.15 * iz) : 0, g = a2T.length - 1; 0 <= g; g--)
				if (aX6 = aXB(g), aX7 = aXC(g), aX8 = a2T[g].canvas.width, aX7 - aXA <= iX && iX <= aX7 + iz + aXA) {
					if (aX6 - aX9 <= iW && iW <= aX6 + iz + aX9) return a2T[g].aX5 || (a2T[g].i3 = !0, a2T[g].aX5 = !0, 0 === a2T[g].id ? dF.tr.a5L(a2T[g].aL) : dF.tr.aM4(a2T[g].aL)), !0;
					if (0 === a2T[g].id && aX6 + aX8 - iz - aX9 <= iW && iW <= aX6 + aX8 + aX9) return ln.a1C(3), dF.tr.a5J(iJ.iO(), a2T[g].aL), !0
				} return !1
	}, this.cT = function() {
		var a6f, a6g, bu, aV4;
		0 === fZ.f3[aO.b2] || aZ.aa.b0(aO.b2) && !aO.i6 || (a6f = a2T.slice(0, aWv), a6g = a2T.slice(aWv, aWv + aWw), bu = a6f, aV4 = lJ.am(aO.b2), function(bu, aV4) {
			if (aWv !== aV4) return 1;
			for (var g = aV4 - 1; 0 <= g; g--)
				if (bu[g].aL !== lJ.an(aO.b2, g)) return 1;
			return
		}(bu, aV4) ? aXG(bu = function(bu, aV4) {
			var g, aL, fi, aM, aNZ = [];
			loop: for (g = 0; g < aV4; g++) {
				for (aL = lJ.an(aO.b2, g), fi = 0; fi < bu.length; fi++)
					if (bu[fi].aL === aL) {
						aNZ.push(bu.splice(fi, 1)[0]);
						continue loop
					} aM = lJ.ao(aO.b2, g), aWx(aM = {
					aL: aL,
					aM: aM,
					aX4: aM,
					id: 0,
					i3: !0,
					aX5: !1,
					canvas: null,
					i0: null
				}), aNZ.push(aM)
			}
			return aNZ
		}(bu, aV4), aV4) : aXG(bu, aV4), a6f = bu, a6g = function(bu) {
			var aV5 = a4.i.a5G[aO.b2];
			return function(bu, aV5) {
				if (aWw !== aV5) return 1;
				for (var ex = aO.b2 << 3, aCJ = a4.i.aCJ, aFK = a4.i.aFK, g = aV5 - 1; 0 <= g; g--) {
					var aXL = aFK[ex + g];
					if (bu[g].aL !== aCJ[aXL]) return 1
				}
				return
			}(bu, aV5) ? aXJ(bu = function(bu, aV5) {
				var g, aL, fi, aNZ = [],
					ex = aO.b2 << 3,
					aCJ = a4.i.aCJ,
					aCI = a4.i.aCI,
					aFK = a4.i.aFK;
				loop: for (g = 0; g < aV5; g++) {
					var aXL = aFK[ex + g];
					for (aL = aCJ[aXL], fi = 0; fi < bu.length; fi++)
						if (bu[fi].aL === aL) {
							aNZ.push(bu.splice(fi, 1)[0]);
							continue loop
						} aXL = aCI[aXL], aWx(aXL = {
						aL: aL,
						aM: aXL,
						aX4: aXL,
						id: 1,
						i3: !0,
						aX5: !1,
						canvas: null,
						i0: null
					}), aNZ.push(aXL)
				}
				return aNZ
			}(bu, aV5), aV5) : aXJ(bu, aV5), bu
		}(a6g), aWv = a6f.length, aWw = a6g.length, a2T = a6f.concat(a6g))
	}, this.k = function() {
		if (0 !== fZ.f3[aO.b2] && (!aZ.aa.b0(aO.b2) || aO.i6))
			for (var g = a2T.length - 1; 0 <= g; g--) aB.drawImage(a2T[g].canvas, aXB(g), aXC(g))
	}
}

function aW3() {
	var aQM = [L(443), L(444), L(445), L(446), L(447), L(448), L(449)],
		aXM = [100, 60, 30, 15, 6, 1],
		aXN = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		aXO = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		aXP = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.aQZ = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.aXQ = function(id, hI, b7) {
		hI = this.aXR(hI);
		return +(aXN[hI][id] > b7)
	}, this.aXR = function(hI) {
		for (var g = 0; g < aXM.length; g++)
			if (aXM[g] <= hI) return g;
		return aXM.length
	}, this.a8v = function(hI) {
		return aQM[this.aXR(hI)]
	}, this.aQY = function(id, aBu) {
		return aXO[id].replace(new RegExp("x", "g"), aBu)
	}, this.aQa = function(id, aBu) {
		return aXP[id].replace(new RegExp("x", "g"), aBu)
	}, this.aXS = function(id, aXT) {
		return this.aQZ[5][id]
	}
}

function mg() {
	var aXU;
	this.aMi = null, this.aR6 = 0, this.d = function() {
		aXU = [], 9 === aO.fP && this.aXV()
	}, this.aXV = function() {
		this.aMi = [0, 0, 0, 0, 0, 0];
		for (var aXW = [256, 227, 166, 148, 100, this.aR6 = 0, 0, 0], aXX = [0, 8, 24, 30, 46, 70, 256, 333], aXY = [0, 0, 3, 9, 17, 25, 256, 179], r = aO.aP, g = 1; g < aXW.length; g++)
			if (r <= aXX[g]) {
				this.aR6 = aXW[g - 1] - gT.gU((r - aXX[g - 1]) * (aXW[g - 1] - aXW[g]), aXX[g] - aXX[g - 1]), this.aMi[5] = aXY[g - 1] - gT.gU((r - aXX[g - 1]) * (aXY[g - 1] - aXY[g]), aXX[g] - aXX[g - 1]), this.aMi[0] = aO.aR - r - this.aR6 -
					this.aMi[5];
				break
			} aO.gX = aO.aR - aO.aP, aO.data.numberTeams = (0 < aO.aP) + (0 < aO.gX), aO.data.playerCount = aO.qC = aO.aP + aO.gX, aO.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aO.aP + this.aR6, aO.gX - this.aR6]), aO.aGo.a2r()
	}, this.aJ4 = function(player) {
		aXU.push({
			player: player,
			dl: 14 + lW.qi(20)
		})
	}, this.cT = function() {
		if (9 === aO.fP)
			for (var g = aXU.length - 1; 0 <= g; g--) --aXU[g].dl <= 0 && (b5.vK(aXU[g].player, 0, lM.jU.te + lM.jU.aSS), aXU.splice(g))
	}
}

function aGJ() {
	var ep, eq, er, et;

	function aXa(id) {
		0 !== c9.id || df.dg.data[140].value ? 0 === id ? bT.c4(8, 1, new ev(16)) : bT.c4(2) : bT.i.aGp(bT.bU, 0 === id ? 16 : 0)
	}
	this.show = function() {
		c9.cA.setState(12), ep.show(), this.resize(), this.cT()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), eq.resize()
	}, this.cT = function() {
		8 === bi.o4() && (2 <= ac.g4 ? er[2].sU === e8.sa && er[2].e7(0) : er[2].sU !== e8.sa && er[2].e7(e8.sa), !aO.i6 && ce.aNC(aO.b2) ? er[1].sU === e8.sa && er[1].e7(0) : er[1].sU !== e8.sa && er[1].e7(e8.sa), !aO.i6 && lV.yM(aO.b2) ? er[0]
			.sU === e8.sa && er[0].e7(0) : er[0].sU !== e8.sa && er[0].e7(e8.sa))
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, er = [new c6(L(450), function() {
		aXa(0)
	}), new c6(L(68), function() {
		bT.c4(16)
	}), new c6(L(17), function() {
		bT.c4(17)
	}), new c6(L(451), function() {
		bT.i.aXb()
	}, 0, 0, 1), new c6(L(371), function() {
		bT.c4(3, 1)
	}), new c6(L(364), function() {
		bT.c4(18)
	}), new c6(L(0), function() {
		bT.c4(31)
	}), new c6(L(452), function() {
		bT.i.aGn(2)
	}), new c6(L(414), function() {
		aXa(1)
	}), new c6("🔒 " + L(356), function() {
		bT.c4(32)
	}), new c6(L(453), function() {
		var aBR, a67;
		(aBR = []).push(["Wiki", (a67 = "https://territorial.io/") + "wiki/gold"]), aBR.push(["Team Games", a67 + "log/team"]), aBR.push(["Battle Royale Games", a67 + "log/br"]), aBR.push(["1v1 Games", a67 + "log/1v1"]), aBR.push([
				"Zombie Games", a67 + "log/zombies"
			]), aBR.push(["Changelog", a67 + "changelog"]), 2 !== c9.id && aBR.push(["Android App", lj.aJv]), 1 !== c9.id && aBR.push(["iOS App", lj.a2R]), 0 === c9.id && aBR.push(["Patreon", lj.a9A]), aBR.push(["Terms", lj.aNG]), aBR
			.push(["Privacy", lj.aNH]), bT.c4(4, 1, new c5(L(453), aZ.e2.aBQ(aBR), !1, [new c6("⬅️ " + L(1), function() {
				bT.c4(1)
			})]))
	}), new c6(L(454), function() {
		bT.c4(4, 1, new c5(L(454), bw.eK + "<br>" + dc.i.dd("/changelog") + "<br><br><bw>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></bw>", !0, [new c6("⬅️ " + L(1),
				function() {
					bT.c4(1)
				})]))
	}), new c6(L(455), function() {
		bT.c4(4, 1, new c5(L(455), L(462) + "<br>" + L(463), !1, [new c6("⬅️ " + L(1), function() {
			bT.c4(1)
		}), new c6(L(464), function() {
			c9.cA.a2F(), bT.c4(1)
		})]))
	}), new c6("👁️ " + L(456), function() {
		c9.cA.a2L(), bT.c4(4, 1, new c5(L(465), L(466) + " " + dc.i.dd("/privacy"), !1, [new c6("⬅️ " + L(1), function() {
			bT.c4(1)
		})]))
	})], et = [new c6("⬅️ " + L(1), function() {
		bT.i.rH()
	})], 8 === bi.o4() && (er.unshift(new c6(L(82), function() {
		bT.c4(30)
	})), er.unshift(new c6(L(459), function() {
		2 <= ac.g4 && (bT.c7(), gR.y1(), cR.cZ = !0)
	}, 0, 1)), er.unshift(new c6(L(460), function() {
		!aO.i6 && ce.aNC(aO.b2) && (dF.tr.a5N(), bT.c7(), ce.cf) && ce.y1()
	}, 0, 1)), er.unshift(new c6(L(461), function() {
		!aO.i6 && lV.yM(aO.b2) && (ln.a1C(2), dF.tr.yQ(), bT.c7(), ce.cf) && ce.y1()
	}, 0, 1))), 1 === c9.id && 5 <= c9.eK && er.push(new c6(L(457), function() {
		c9.cA.a2M()
	})), ep = new dM(L(458), et), eq = new eu(er, ep.dP)
}

function a75() {
	this.aXg = function() {
		for (var fg, aF, d3, aXh = x3, aXi = a1.oM, p = a1.a2, aXj = p - 1, aMH = a1.jg - 1, dl = 0, aG = 1; aG < aMH; aG++)
			for (d3 = aG * p, aF = 1; aF < aXj; aF++) aXi[fg = d3 + aF << 2] === aXi[1 + fg] && aXi[fg] === aXi[2 + fg] && (dl++, aXh[2 + fg] = 4);
		lQ.a74 = dl
	}, this.aXk = function(aXl, aXm) {
		for (var aXh = x3, p = a1.a2, aXj = p - 1, aMH = a1.jg - 1, id = 0, aG = 1; aG < aMH; aG++)
			for (var d3 = aG * p, aF = 1; aF < aXj; aF++) {
				var h1 = 2 + (d3 + aF << 2);
				aXh[h1] === aXl && (! function(h1, id, aXl, aXm) {
					var a3 = 1,
						aXh = x3,
						sk = h3.aS0,
						a6f = [h1],
						aXo = id >> 8 << 1,
						aXp = 255 & id;
					aXh[h1 - 2] = aXo, aXh[h1 - 1] = aXp, aXh[h1] = 5;
					for (; a3;) {
						for (var a6g = [], g = 0; g < a3; g++)
							for (var yc = a6f[g], bZ = 0; bZ < 8; bZ++) {
								var yd = yc + sk[bZ];
								aXh[yd] === aXl && (aXh[yd - 2] = aXo, aXh[yd - 1] = aXp, aXh[yd] = aXm, a6g.push(yd))
							}
						a3 = (a6f = a6g).length
					}
				}(h1, id, aXl, aXm), id = (id + 1) % 32768)
			}
	}, this.aXq = function() {
		for (var aXh = x3, p = a1.a2, aXj = p - 3, aMH = a1.jg - 3, aXs = 12 * p, aG = 3; aG < aMH; aG++)
			for (var d3 = aG * p, aF = 3; aF < aXj; aF++) {
				var h1 = 2 + (d3 + aF << 2);
				2 !== aXh[h1] || 2 === aXh[h1 - 12] && 2 === aXh[12 + h1] && 2 === aXh[h1 - aXs] && 2 === aXh[h1 + aXs] || (aXh[h1 - 2] = 1 | aXh[h1 - 2])
			}
	}
}

function aGS() {
	var dK, dL, tz, kC;

	function k5() {
		u0(), bT.dv()[19] = null, bT.dN()
	}

	function aXt() {
		u0(), bT.c4(21)
	}

	function u0() {
		1 === aO.data.gameMode ? aO.aGo.a2r() : 0 === aO.data.gameMode && 1 === aO.data.colorsType && aZ.ky.u2(tz.u3(), aO.data.colorsData, 262143)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, kC = [new c6("⬅️ " + L(1), k5)], 1 === aO.data.gameMode && kC.push(new c6(L(467), aXt, 1, 1)), dK = new dM(L(4), kC), dL = new dO(dK.dP, (kC = [], 0 === aO.data.gameMode ? (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(78), L(80)],
			value: aO.data.colorsType
		}, function(b7) {
			u0(), aO.data.colorsType = b7, 1 !== aO.data.colorsType || aO.data.colorsData && aO.data.colorsData.length === aO.aR || (aO.data.colorsData = new Uint32Array(aO.aR)), bT.c4(21)
		})), dR.push(dY)
	}(kC), 1 === aO.data.colorsType && function(dR) {
		var dY = new dZ;
		dY.da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.colorsData, 1)), dY.dq(tz), dR.push(dY)
	}(kC)) : (aO.aGo.a2r(), kC.push(function() {
		var dY = new dZ;
		dY.da(L(55));
		for (var g = 0; g < e.fj.length; g++) {
			var qh = (g + 1) % e.fj.length,
				br = dY.db((0 == qh ? "" : "Team ") + e.fj[qh]);
			g && (br.style.marginTop = "0.5em"), dY.dq(new dr({
				b7: -1,
				value: aO.data.teamPlayerCount[qh]
			}, 1, 0, function(br) {
				dK.eD[1].e7(0);
				var playerCount = gT.gn(Math.floor(br.target.value), 0, 512);
				br.target.value = playerCount, aO.data.teamPlayerCount[br.target.aXv] = playerCount
			})).br.aXv = qh
		}
		return dY
	}()), function(dR) {
		for (var dY = new dZ, jX = (dY.da(L(468)), []), g = 0; g < e.fj.length; g++) {
			var qh = (g + 1) % e.fj.length;
			jX.push(e.fj[qh])
		}
		aO.data.colorsData || (aO.data.colorsData = new Uint32Array(1));
		dY.q1(new uA({
			jX: jX,
			value: (aO.data.colorsData[0] % 16 + e.fj.length - 1) % e.fj.length
		}, function(b7) {
			var b7 = (b7 + 1) % e.fj.length,
				pg = e.aJS[b7],
				pg = (pg[0] >> 2 << 12) + (pg[1] >> 2 << 6) + (pg[2] >> 2);
			aO.data.colorsData[0] = pg - (15 & pg) + b7
		})), dR.push(dY)
	}(kC)), kC))
}

function n9() {
	this.bu = new Array(4), this.aXx = new Uint16Array(2), this.qe = new Uint16Array(2), this.aEU = new Int32Array(2), this.gE = new Uint32Array(2), this.aXy = new Uint32Array(2), this.aJR = new Uint8Array(4), this.a6V = new Uint8Array(4), this.aIg =
		new Uint32Array(4), this.aXz = new Uint32Array(5), this.a7d = new Uint32Array(8), this.xH = new Uint32Array(8), this.r2 = new Uint16Array(16), this.qf = new Uint16Array(512), this.aKK = new Uint16Array(512), this.aKL = new Uint16Array(512),
		this.aHM = new Uint16Array(0), this.d = function() {
			var a3 = a1.a2 * a1.jg;
			this.aHM.length !== a3 && (this.aHM = new Uint16Array(a3))
		}, this.aY0 = function(bu, d3) {
			return bu[0] = d3, bu
		}, this.aY1 = function(bu, d3, d5) {
			return bu[0] = d3, bu[1] = d5, bu
		}, this.aY2 = function(bu, d3, d5, d7) {
			return bu[0] = d3, bu[1] = d5, bu[2] = d7, bu
		}, this.aY3 = function(bu, d3, d5, d7, aY4) {
			return bu[0] = d3, bu[1] = d5, bu[2] = d7, bu[3] = aY4, bu
		}
}

function aY5(aY6, eP) {
	var aYC, self, aY7 = document.createElement("div"),
		aY8 = document.createElement("div"),
		jK = document.createElement("div"),
		aY9 = null,
		aYD = (this.kI = new dr({
			value: "",
			b7: -1
		}, 0, aYA, function(br) {
			br.target.value = aZ.fo.yU(br.target.value), aY9.eb.textContent = 127 - br.target.value.length
		}), 0),
		wW = 1,
		aYE = 0,
		aYF = 1048575;

	function aYA() {
		aY6(), aY9.eb.textContent = 127
	}

	function wc(eW, eZ) {
		eZ && (eZ.a4b = 1, eW.appendChild(bH.jU.transform(eZ)))
	}

	function wZ(go) {
		wW ? aY7.scrollTop = aY7.scrollHeight : go && (aY7.scrollTop = aYE)
	}
	this.kT = function(aYG) {
			aYF = 1048575, aY8.textContent = "", aYG || this.eT()
		}, this.eT = function() {
			var a9u = bH.i.bV[0],
				a9u = bH.i.bK[a9u],
				a9v = a9u.a9v,
				a3 = a9v.length,
				iu = 1048575 === aYF ? 0 : a3 - (a9u.a9w - aYF + 1048575) % 1048575;
			if (aYF = a9u.a9w, !(a3 <= (iu = Math.max(iu, 0)))) {
				for (var eW = document.createDocumentFragment(), g = iu; g < a3; g++) wc(eW, bH.ec.jS(a9v[g], bH.ec.jT(a9v[g])));
				aY8.appendChild(eW), wZ()
			}
		}, this.aYH = function(c2) {
			var eW = document.createDocumentFragment();
			wc(eW, c2), aY8.appendChild(eW), wZ()
		}, this.show = function(el) {
			el.appendChild(aY7), el.appendChild(jK), this.resize(el)
		}, this.eB = function(el) {
			bT.removeChild(el, aY7), bT.removeChild(el, jK)
		}, this.resize = function(el) {
			aYD = el ? el.offsetHeight : aYD;
			var el = aZ.e2.en(.04, .75),
				a0Z = Math.max(el, aYD - el),
				aYI = o.p / o.bv,
				aGw = .7 * aYI,
				aYJ = aZ.e2.em(aYD - el - a0Z),
				a0Z = (jK.style.height = aZ.e2.em(el), aY7.style.height = aZ.e2.em(a0Z), o.r > o.p || c9.cA.i7() ? (jK.style.top = aYJ, aY7.style.top = aZ.e2.em(aYD - a0Z), aZ.e2.jV(aY7, 8)) : (aY7.style.top = aYJ, jK.style.top = aZ.e2.em(aYD - el),
						aZ.e2.jV(aY7, 2)), this.kI.br.style.width = aZ.e2.em(aGw), this.kI.br.style.fontSize = aYC.button.style.fontSize = aZ.e2.em(.5 * el), aZ.e2.jV(this.kI.br, 6), aYC.button.style.left = aZ.e2.em(aGw), aYC.button.style.width = aZ
					.e2.em(aYI - aGw), .385 * el);
			c9.cA.i7() && (a0Z *= .8 - .12 * (o.p > o.r)), aY8.style.marginLeft = aY8.style.marginRight = aZ.e2.em(.5 * a0Z), aY8.style.fontSize = aZ.e2.em(a0Z), wZ(1)
		}, (self = this).kI.br.a6k = 127, aY7.style.position = "absolute", aY7.style.left = "0", aY7.style.width = "100%", aY7.style.overflowX = "hidden", aY7.style.overflowY = "auto", aY7.style.font = "inherit", aY7.style.backgroundColor = e8.tZ,
		aY7.addEventListener("scroll", function() {
			aYE = aY7.scrollTop, wW = aYE < aY7.scrollHeight - aY7.clientHeight - 2 ? 0 : 1
		}), aY8.style.font = "inherit", jK.style.position = "absolute", jK.style.left = "0", jK.style.width = "100%", self.kI.br.setAttribute("placeholder", L(469)), self.kI.br.style.position = "absolute", self.kI.br.style.top = "0", self.kI.br.style
		.left = "0", self.kI.br.style.height = "100%", self.kI.br.style.backgroundColor = e8.aDr, self.kI.br.style.textAlign = "center", (aYC = new c6(L(146), aYA)).button.top = "0", aYC.button.style.position = "absolute", aYC.button.style.height =
		"100%", aYC.e7(e8.k2), aY9 = new kB("127", aYC.button, 1, 1), aY7.appendChild(aY8), jK.appendChild(self.kI.br), jK.appendChild(aYC.button)
}

function mN() {
	var aYL, aYM, p, aF, aG, aYN, aYO;
	this.d = function() {
		aYL = new Array(2), aYM = new Array(2), this.ic = !1, aYO = aYN = v = t = 0, m = 1, this.resize()
	}, this.resize = function() {
		p = (p = Math.floor((c9.cA.i7() ? .072 : .0502) * o.i8)) < 8 ? 8 : p;
		for (var g = 1; 0 <= g; g--) aYL[g] = document.createElement("canvas"), aYL[g].width = p, aYL[g].height = p, aYM[g] = aYL[g].getContext("2d", {
			alpha: !0
		});
		this.iB(),
			function() {
				for (var aYX = Math.floor(1 + p / 20), g = 1; 0 <= g; g--) aYM[g].clearRect(0, 0, p, p), aYM[g].fillStyle = e8.aL9, aYM[g].beginPath(), aYM[g].arc(p / 2, p / 2, p / 2 - aYX, 0, 2 * Math.PI), aYM[g].fill(), aYM[g].lineWidth = aYX,
					aYM[g].fillStyle = e8.e9, aYM[g].strokeStyle = e8.e9, aYM[g].beginPath(), aYM[g].arc(p / 2, p / 2, p / 2 - aYX, 0, 2 * Math.PI), aYM[g].stroke(), xy(aYM[g], 0, 0, p, aYX, .3, 0 === g)
			}()
	}, this.aGA = function() {
		return -t / m
	}, this.xz = function() {
		return -v / m
	}, this.aBv = function(a9d, aJy) {
		t = m * a9d - aJy
	}, this.aBw = function(a9e, aJz) {
		v = m * a9e - aJz
	}, this.ia = function(aYR, aNh) {
		return aO.zs || ! function(aYR, aNh) {
			return Math.pow(aYR - (aF + p / 2), 2) + Math.pow(aNh - (aG + p / 2), 2) < p * p / 4 || Math.pow(aYR - (aF + p / 2), 2) + Math.pow(aNh - (aG + 2 * p), 2) < p * p / 4
		}(aYR, aNh) || df.dg.data[8].value ? (l5.eN() && (this.ic = !0, aYN = aYR, aYO = aNh), !1) : aNh < aG + 1.25 * p ? this.im(Math.floor(o.p / 2), Math.floor(o.r / 2), -200) : this.im(Math.floor(o.p / 2), Math.floor(o.r / 2), 200)
	}, this.io = function(aYR, aNh) {
		var aYS, aYT, vP, vQ;
		return !l5.eN() || (aYS = t, aYT = v, t += vP = aYN - aYR, v += vQ = aYO - aNh, b5.io(vP, vQ), this.aAD(), aYN = aYR, aYO = aNh, aYS !== t) || aYT !== v
	}, this.im = function(iW, iX, deltaY) {
		var ik;
		if (l5.eN()) {
			if (0 < deltaY) ik = (ik = 500 / (500 + deltaY)) < .5 ? .5 : ik;
			else {
				if (!(deltaY < 0)) return !1;
				ik = 2 < (ik = (500 - deltaY) / 500) ? 2 : ik
			}
			this.aMx(iW, iX, ik), cR.cZ = !0
		}
		return !0
	}, this.aMx = function(aF, aG, h1) {
		var il;
		h1 = il = (il = 1024 < (il = h1) * m ? 1024 / m : il) * m < .125 ? .125 / m : il, b5.zoom(h1, aF, aG),
			function(il, iW, iX) {
				m *= il, t = (t + iW) * il - iW, v = (v + iX) * il - iX, ib.aAD()
			}(h1, aF, aG)
	}, this.aAD = function() {
		var aGv = o.p / 16,
			aFg = 0,
			aYW = o.r / 16,
			aFh = 0;
		t < -o.p + aGv && (aFg = -o.p + aGv - t), t > m * a1.a2 - aGv && (aFg = m * a1.a2 - aGv - t), v < -o.r + aYW && (aFh = -o.r + aYW - v), v > m * a1.jg - aYW && (aFh = m * a1.jg - aYW - v), t += aFg, v += aFh, ls.aBx(), b5.vO(aFg, aFh)
	}, this.iB = function() {
		aF = o.p - p - i9.gap, aG = Math.floor(o.r / 2 - 1.25 * p)
	}, this.k = function() {
		df.dg.data[8].value || (aB.drawImage(aYL[0], aF, aG), aB.drawImage(aYL[1], aF, Math.floor(aG + 3 * p / 2)))
	}
}

function mu() {
	var aYY = 0,
		aYZ = new Uint16Array(64);

	function a7n(aB8) {
		aYY -= 2;
		for (var g = aB8; g < aYY; g += 2) aYZ[g] = aYZ[g + 2], aYZ[g + 1] = aYZ[g + 3]
	}
	this.d = function() {
		aYY = 0
	}, this.cT = function() {
		var g, aL, gC;
		if (0 !== aYY)
			if (0 === fZ.f3[aO.b2]) aYY = 0;
			else if (0 === lJ.am(aO.b2)) aYY = 0;
		else
			for (g = aYY - 2; 0 <= g; g -= 2)(aL = aYZ[g]) < aO.aR && 0 === fZ.f3[aL] ? a7n(g) : (gC = aYZ[g + 1], (aL >= aO.aR && m1.t3(aO.b2) || aL < aO.aR && m1.t7(aO.b2, aL)) && (dF.tr.a5J(gC, aL), a7n(g)))
	}, this.aMD = function(aL, gC) {
		! function(aL, gC) {
			for (var g = 0; g < aYY; g += 2)
				if (aYZ[g] === aL) return aYZ[g + 1] = Math.min(aYZ[g + 1] + gC, 1023), 1;
			return
		}(aL, gC) && 64 !== aYY && (aYZ[aYY] = aL, aYZ[aYY + 1] = gC, aYY += 2)
	}
}

function k7(jy, js, aYc, jz, aY6, eP) {
	var eQ = document.createElement("div"),
		aYd = document.createElement("div"),
		aYe = document.createElement("div"),
		aYf = document.createElement("div"),
		aYg = document.createElement("div"),
		eR = document.createElement("div"),
		aYh = document.createElement("div"),
		aYi = document.createElement("div"),
		aYj = document.createElement("span"),
		aYk = document.createElement("div");
	this.kH = new aY5(aY6, eP), this.kS = new eO(eP), this.kZ = [jy, js, aYc, jz], this.km = function(kn) {
		kn = (kn / 10).toFixed(1) + "%";
		aYi.style.width = kn, aYj.innerHTML = kn
	}, this.kX = function() {
		this.kS.eB(eR), this.kH.show(eR)
	}, this.kY = function() {
		this.kH.eB(eR), this.kS.show(eR)
	}, this.kE = function() {
		return aYd
	}, this.show = function() {
		document.body.appendChild(eQ)
	}, this.eB = function() {
		bT.removeChild(document.body, eQ)
	}, this.resize = function(aYn) {
		var aYo = 1 - .4 * c9.cA.i7() * (o.p > 1.6 * o.r),
			aGs = aZ.e2.en(.05 * aYo),
			aYp = o.r > o.p,
			aYq = aZ.e2.en(.06 * aYo + .03 * aYp),
			aYr = aZ.e2.en(.08 * aYo + .03 * aYp),
			aYs = aZ.e2.en(.04 + .02 * aYp),
			aYp = aZ.e2.en(.02 * aYo + .01 * aYp),
			aYu = aZ.e2.en(.025);
		eQ.style.font = aZ.e2.iA(0, aYu), aYg.style.font = aZ.e2.iA(0, .9 * aYu), aYk.style.font = aZ.e2.iA(0, .9 * aYu), aYo < 1 && (aYu = aZ.e2.iA(0, aYo * aYu), aYe.style.font = aYu, aYg.style.font = aYu, aYk.style.font = aYu, aYh.style.font =
				aYu, aYf.style.font = aYu), aYd.style.height = aZ.e2.em(aGs), aYd.style.font = aZ.e2.iA(0, .72 * aGs), aZ.e2.jV(aYd, 2), aYe.style.top = aZ.e2.em(aGs), aYe.style.height = aZ.e2.em(aYr), aZ.e2.jV(aYe, 2), aYf.style.font = aZ.e2.iA(
				0, aYo * aZ.e2.en(.02)), aYf.style.top = aZ.e2.em(aGs + aYr), aYf.style.height = aZ.e2.em(aYs), aZ.e2.jV(aYf, 2), aYg.style.top = aZ.e2.em(aGs + aYr + aYs), aYg.style.height = aZ.e2.em(aYq), aZ.e2.jV(aYg, 2), eR.style.top = aZ.e2
			.em(aGs + aYr + aYs + aYq), eR.style.height = aZ.e2.em(o.r / o.bv - aGs - aYr - 2 * aYq - aYs - aYp), aYh.style.top = aZ.e2.em(o.r / o.bv - aYq - aYp), aYh.style.height = aZ.e2.em(aYp), aZ.e2.jV(aYh, 8), aYj.style.font = aZ.e2.iA(0,
				.8 * aYp), aYk.style.top = aZ.e2.em(o.r / o.bv - aYq), aYk.style.height = aZ.e2.em(aYq), aZ.e2.jV(aYk, 8), jy.resize(aYe), js.resize(aYe), aYc.resize(aYe), jz.resize(aYe), aYn ? this.kH.resize(eR) : this.kS.resize()
	};
	aY6 = this;
	eQ.style.position = "absolute", eQ.style.top = "0", eQ.style.left = "0", eQ.style.width = "100%", eQ.style.height = "100%", eQ.style.backgroundColor = e8.s3, ei.ej() || (eQ.style.backdropFilter = "blur(4px)", eQ.style.webkitBackdropFilter =
		"blur(4px)"), aYd.style.position = "absolute", aYd.style.top = "0", aYd.style.left = "0", aYd.style.width = "100%", aYd.style.display = "flex", aYd.style.alignItems = "center";
	for (var bu = [aYe, aYf, aYg, aYk], g = 0; g < bu.length; g++) bu[g].style.position = "absolute", bu[g].style.left = "0", bu[g].style.width = "100%", aZ.e2.a0U(bu[g]);
	eR.style.position = "absolute", eR.style.left = "0", eR.style.width = "100%", eR.style.font = "inherit", aYh.style.position = "absolute", aYh.style.left = "0", aYh.style.width = "100%", aYi.style.position = "absolute", aYi.style.top = "0", aYi
		.style.left = "0", aYi.style.height = "100%", aYi.style.width = "50%", aYi.style.backgroundColor = e8.aUP, aYj.innerHTML = "", aYj.style.position = "absolute", aYj.style.top = "50%", aYj.style.left = "50%", aYj.style.transform =
		"translate(-50%, -50%)", aYd.appendChild(function() {
			var uT = document.createElement("h1");
			return uT.textContent = L(470), uT.style.margin = "0 auto 0.15em auto", uT.style.fontFamily = "Arial Black, system-ui", uT.style.fontSize = "inherit", uT.style.fontWeight = "inherit", uT
		}()), aYe.appendChild(jy.pa), aYf.appendChild(js.pa), aYg.appendChild(aYc.pa), aYh.appendChild(aYi), aYh.appendChild(aYj), aYk.appendChild(jz.pa), eQ.appendChild(aYd), eQ.appendChild(aYe), eQ.appendChild(aYf), eQ.appendChild(aYg), eQ
		.appendChild(eR), eQ.appendChild(aYh), eQ.appendChild(aYk), aY6.kS.show(eR)
}

function n7() {
	this.aII = new Int16Array(4), this.aIQ = new Int16Array(4), this.aHN = null, this.d = function() {
		var g;
		for (this.aII[0] = -a1.a2, this.aII[1] = 1, this.aII[2] = a1.a2, this.aII[3] = -1, this.aHN = new Int16Array([-a1.a2, 1 - a1.a2, 1, a1.a2 + 1, a1.a2, a1.a2 - 1, -1, -a1.a2 - 1]), g = 0; g < 4; g++) this.aIQ[g] = 4 * this.aII[g]
	}, this.xA = function() {
		return gT.gn(Math.floor(.15 * (1 + .25 * c9.cA.i7()) * o.i8 / m), 4, 128)
	}, this.aYw = function(h1, id) {
		for (var aIP = this.aIQ, g = 0; g < 4; g++) {
			var yc = h1 + aIP[g];
			if (h3.oF(yc) && h3.xE(yc) === id) return !0
		}
		return !1
	}, this.aYx = function(player, h1) {
		return !h3.sl(h1) && player === h3.h5(h1)
	}, this.wr = function(gp, gt, gz) {
		return (gp -= this.wt(gz)) * gp + (gt -= this.wu(gz)) * gt
	}, this.aYy = function(aJy, aJz, aC) {
		aJy = this.aYz(aJy) - this.aZ0(aC), aJz = this.aZ1(aJz) - this.aZ2(aC);
		return Math.sqrt(aJy * aJy + aJz * aJz)
	}, this.aVI = function(xL, xN) {
		var vP = this.wt(xL) - this.wt(xN),
			xL = this.wu(xL) - this.wu(xN);
		return ~~Math.sqrt(vP * vP + xL * xL + .5)
	}, this.r6 = function(xL, xN) {
		var vP = this.wt(xL) - this.wt(xN),
			xL = this.wu(xL) - this.wu(xN);
		return vP * vP + xL * xL
	}, this.wp = function(vU, vV, vW, vX) {
		return (vU -= vW) * vU + (vV -= vX) * vV
	}, this.iN = function(fg, gC) {
		return gT.gU(gC * fZ.fA[fg], 1e3)
	}, this.aYz = function(aJy) {
		return 16 * (aJy + t) / m
	}, this.aZ1 = function(aJz) {
		return 16 * (aJz + v) / m
	}, this.aZ3 = function(bZ) {
		return 16 * bZ / m
	}, this.gr = function(aJy) {
		return Math.floor((aJy + t) / m)
	}, this.gu = function(aJz) {
		return Math.floor((aJz + v) / m)
	}, this.gw = function(gp, gt) {
		return 1 <= gp && 1 <= gt && gp < a1.a2 - 1 && gt < a1.jg - 1
	}, this.wt = function(gz) {
		return gz % a1.a2
	}, this.wu = function(gz) {
		return gT.gU(gz, a1.a2)
	}, this.h0 = function(gp, gt) {
		return gt * a1.a2 + gp
	}, this.xX = function(gp, gt) {
		return 4 * this.h0(gp, gt)
	}, this.aOD = function(gz) {
		return this.wv(this.wt(gz), this.wu(gz))
	}, this.wv = function(gp, gt) {
		return 0 < gp && gp < a1.a2 - 1 && 0 < gt && gt < a1.jg - 1
	}, this.h2 = function(gz) {
		return gz << 2
	}, this.aId = function(h1) {
		return h1 >> 2
	}, this.aZ4 = function(gz) {
		return a1.a2 * this.wu(gz) * 256 + (this.wt(gz) << 4)
	}, this.aFM = function(gz) {
		return this.aZ4(gz) + 8 + (a1.a2 << 7)
	}, this.aBm = function(aC) {
		return a1.a2 * (this.aZ2(aC) >> 4) + (this.aZ0(aC) >> 4)
	}, this.aAZ = function(aC) {
		aC = this.aBm(aC);
		return (this.wt(aC) >> 5) + a4.nz.aAM * (this.wu(aC) >> 5)
	}, this.aZ0 = function(aC) {
		return aC % (a1.a2 << 4)
	}, this.aZ2 = function(aC) {
		return gT.gU(aC, a1.a2 << 4)
	}, this.xc = function(gz, xa) {
		return gz + this.aII[xa]
	}, this.aZ5 = function(h1, xa) {
		return h1 + this.aIQ[xa]
	}, this.xb = function(xL, xN) {
		var vP = this.wt(xN) - this.wt(xL),
			xN = this.wu(xN) - this.wu(xL);
		return Math.abs(vP) >= Math.abs(xN) ? 1 + 2 * (vP < 0) : 2 * (0 < xN)
	}, this.r7 = function(player) {
		return this.h0(fZ.f4[player] + fZ.f6[player] >> 1, fZ.f5[player] + fZ.f7[player] >> 1)
	}, this.qq = function(player) {
		return this.h0(lW.wo(fZ.f4[player], fZ.f6[player]), lW.wo(fZ.f5[player], fZ.f7[player]))
	}
}

function aEW() {
	function aZ7(bu) {
		if (0 === bu.length) df.dm.dn(116, "");
		else {
			for (var aZ8 = bu[0], g = 1; g < bu.length; g++) aZ8 += ";" + bu[g];
			df.dm.dn(116, aZ8)
		}
	}
	this.z0 = function() {
		df.dg.data[110].value.length && (df.dg.data[106].value = df.dg.data[110], df.dm.dn(110, ""), this.a8u())
	}, this.a8u = function() {
		var bu = df.dg.data[116].value.split(";");
		for (bu.length % 2 == 1 && bu.pop(), bu.unshift(df.dg.data[106].value), bu.unshift(df.dg.data[105].value), g = 2; g < bu.length; g += 2)
			if (bu[g] === bu[0]) {
				bu.splice(g, 2);
				break
			} for (var aZ6 = [], g = 0; g < bu.length; g += 2) aZ6.push(bu[g]);
		aZ7(bu), df.dg.data[117].value = 0, df.dg.data[117].jX = aZ6
	}, this.ra = function(b7) {
		df.dg.data[117].jX.splice(b7, 1), df.dg.data[117].value = Math.min(b7, df.dg.data[117].jX.length - 1);
		var bu = df.dg.data[116].value.split(";");
		bu.splice(2 * b7, 2), aZ7(bu)
	}, this.rb = function(b7) {
		var bu = df.dg.data[116].value.split(";");
		return {
			bh: bu[2 * b7],
			password: bu[2 * b7 + 1]
		}
	}, this.a2z = function() {
		var aq = gT.gn(df.dg.data[121].value, -1, 262143);
		return aq = -1 === aq ? ~~(262144 * Math.random()) : aq
	}, this.aEX = function() {
		for (var bu = document.cookie.split(";"), g = 0; g < bu.length; g++) {
			var a4O, eJ = bu[g].trim();
			0 !== eJ.length && (a4O = 0 <= (a4O = eJ.indexOf("=")) ? eJ.substring(0, a4O) : eJ, document.cookie = a4O + "=;expires=0;path=/", document.cookie = a4O + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a4O +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function mB() {
	this.hq = new a0D, this.hm = new oa, this.sF = new aUG, this.d = function() {
		this.hq.d()
	}
}

function aPn() {
	this.a5s = function() {
		for (var id = lh.hY(20), colors = new Array(11), g = 0; g < 11; g++) colors[g] = new Uint8Array([lh.hY(8), lh.hY(8), lh.hY(8)]);
		var de = hl.sF.sG(8);
		lm.aU4.ai({
			id: id,
			colors: colors,
			de: de
		})
	}, this.a61 = function(pD) {
		var aQj = lh.hY(3),
			bZ = lh.hY(5),
			bZ = lu.aAb.uU(bZ, lh.hY(30), lh.hY(30), lh.hY(30));
		dc.pL.aQi(pD, bZ, aQj)
	}, this.a5t = function(pD) {
		this.a61(pD), df.dm.dn(183, hp.hq.hr(hp.hq.hs(15))), 0 === pD && 0 === df.dg.data[105].value.length ? dc.pL.rK(0) : dc.e5.aU1(pD), 4 === dc.i.oz(pD).a9I() ? 6 === bi.o4() && dc.kO.aDj(pD) : 5 !== dc.i.oz(pD).a9I() || 8 !== bi.o4() &&
			10 !== bi.o4() || dc.p0.qL()
	}, this.a5v = function(pD) {
		var id = lh.hY(6);
		1 === id ? (df.dm.dn(160, lh.hY(30)), dc.i.pN(pD), lC.aOr || dc.pL.rK(1), jF.rW(), 8 === bT.bU && bT.kU().rY()) : 21 === id ? 8 === bT.bU && bT.kU().rZ(17) : 22 === id && (df.dm.dn(106, df.dg.data[110].value), df.dm.dn(110, ""), 8 === bT
			.bU) && bT.kU().rZ(15)
	}, this.a5x = function() {
		var a3 = lh.hY(16),
			aZ9 = lh.hY(16);
		if (lh.ha(55 + 10 * a3 + 16 * aZ9)) {
			for (var bu = [], g = 0; g < a3; g++) bu.push(hl.hm.hn(lh.hY(10)));
			jF.aW7(bu)
		} else dc.i.pS(0, 3270)
	}, this.a62 = function(pD) {
		var bZ = lh.hY(5),
			bZ = lu.aAb.uU(bZ, lh.hY(30), lh.hY(30), lh.hY(30)),
			eJ = hl.sF.sG(16);
		hc.bj(53), hc.cG(1, 0), hc.cG(6, 31), hc.cG(30, bZ), hc.cG(16, new Function(eJ)()), dc.i.send(pD, hc.cJ)
	}
}

function nR() {
	this.a68 = null, this.cZ = !1, this.cQ = 0, this.cc = 56;
	var aZA = 0;

	function aZB() {
		cR.cQ = aZA = performance.now(), cR.a68.cT(), window.requestAnimationFrame(aZB)
	}
	this.d = function() {
		this.aPN(), window.requestAnimationFrame(aZB), this.cQ = performance.now()
	}, this.a1B = function() {
		aO.i6 ? (this.a68 = new cK, this.a68.d()) : aO.cq ? this.a68 = new aZC : (this.a68 = new t8, this.a68.d())
	}, this.aPN = function() {
		this.a68 = new aZD, this.cZ = !0
	}, this.cT = function() {
		this.a68.cS++
	}, this.gS = function() {
		return this.a68.cS
	}, this.a5m = function() {
		var fh = performance.now();
		fh < aZA + 1e3 || (this.cQ = fh, this.a68.cT())
	}
}

function a1f() {
	this.x8 = function(player) {
		return !!aO.data.passableWater && a4.i.a5 !== a4.i.aFC && a4.i.a5G[player] !== a4.i.aFD && 0 !== fZ.fD[player].length
	}, this.aOI = function(x6) {
		var a1Y = gD.xH[1];
		return !(4 <= a1Y || !a4.ec.xY(gq.h2(x6))) && h3.sv(gq.h2(gq.xc(x6, a1Y)))
	}
}

function n3() {
	var canvas, i0, aFy, font, aI9 = 0,
		aZE = !1,
		aZF = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aZG = 5;

	function aZL() {
		if (aZE) {
			var g, a3 = aZF.length,
				iL = Math.floor(.5 * aFy.r),
				r = a3 * iL,
				aF = Math.floor(Math.floor(aFy.aF) + .3 * aFy.p - .5),
				aG = Math.floor(Math.floor(aFy.aG) - r),
				p = Math.floor(.4 * aFy.p + 2.5);
			for (aB.fillStyle = e8.iM, aB.fillRect(aF, aG, p, r), aB.fillStyle = e8.ka, aB.fillRect(aF, aG + aZG * iL, p, iL), aB.fillStyle = e8.e9, aB.fillRect(aF, aG, 2, r), aB.fillRect(aF, aG, p, 2), aB.fillRect(aF + p - 2, aG, 2, r), g = 1; g <
				a3; g++) aB.fillRect(aF, aG + g * iL, p, 2);
			for (aB.fillStyle = e8.e9, aZ.e2.textAlign(aB, 1), aZ.e2.textBaseline(aB, 1), aB.font = aZ.e2.iA(0, .6 * iL), aF += .5 * p, g = 0; g < a3; g++) aB.fillText(aZT(g), aF, aG + (g + .6) * iL)
		}
		aB.drawImage(canvas, Math.floor(aFy.aF), Math.floor(aFy.aG))
	}

	function eT(ig) {
		var aF, s, u, iL;
		i0.clearRect(0, 0, Math.floor(aFy.p), Math.floor(aFy.r)), i0.fillStyle = e8.iM, i0.fillRect(0, 0, Math.floor(aFy.p), Math.floor(aFy.r)), aO.zs && (i0.fillStyle = e8.ka, i0.fillRect(0, 0, Math.floor(.3 * aFy.p), Math.floor(aFy.r))), i0
			.fillStyle = e8.e9, i0.fillText("Hide UI", .15 * aFy.p, .5 * aFy.r), i0.fillRect(Math.floor(.3 * aFy.p - .5), 0, 2, Math.floor(aFy.r)), aF = .5 * aFy.p, i0.fillText("Replay Speed", aF, .31 * aFy.r), i0.fillText(aZT(aZG), aF, .69 * aFy.r),
			i0.fillRect(Math.floor(.7 * aFy.p - .5), 0, 2, Math.floor(aFy.r)), ig.cg ? (aF = Math.floor(.02 * aFy.p), ig = Math.floor(.025 * aFy.p), s = Math.floor(.85 * aFy.p - aF - .5 * ig), u = Math.floor(.25 * aFy.r), iL = Math.floor(aFy.r) - 2 *
				u, i0.fillRect(s, u, aF, iL), i0.fillRect(s + aF + ig, u, aF, iL)) : function() {
				var p = Math.floor(.46 * aFy.r),
					r = Math.floor(.23 * aFy.r),
					aF = Math.floor(.85 * aFy.p - .5 * p + p / 12),
					aG = Math.floor(.5 * aFy.r - r);
				i0.beginPath(), i0.moveTo(aF, aG), i0.lineTo(aF + p, aG + r), i0.lineTo(aF, aG + (r << 1)), i0.fill()
			}(), i0.fillRect(0, 0, Math.floor(aFy.p), 2), i0.fillRect(0, 0, 2, Math.floor(aFy.r)), i0.fillRect(0, Math.floor(aFy.r) - 2, Math.floor(aFy.p), 2), i0.fillRect(Math.floor(aFy.p - 2), 0, 2, Math.floor(aFy.r))
	}

	function aZT(g) {
		return 5 === g ? "Normal" : "" + aZF[g]
	}
	this.cg = !1, this.d = function() {
		aO.i6 && (aZG = 5, this.cg = !1, aZE = !1, aFy = new aGg([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.cV = function() {
		return aZF[aZG]
	}, this.xz = function() {
		return aFy.aG
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.cg,
		fxGetSpeedIndex: () => aZG,
		fxSetSpeedIndex: index => {
			aZG = index, this.resize()
		},
		fxGetPanelTop: () => aFy && aFy.aG
	}, this.iR = function(iS) {
		return !!aO.i6 && aFy.aF + aFy.p > o.p - iS - i9.gap
	}, this.resize = function() {
		aO.i6 && (aFy.resize(), aFy.aG -= (iD.iE() - 1) * i9.gap, font = aZ.e2.iA(0, .3 * aFy.r), (canvas = document.createElement("canvas")).width = Math.floor(aFy.p), canvas.height = Math.floor(aFy.r), (i0 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aZ.e2.textAlign(i0, 1), aZ.e2.textBaseline(i0, 1), eT(this))
	}, this.aN4 = function(aZH) {
		0 === aO.cd || bT.i1() || aZH !== aO.zs && (aO.zs = aZH, lt.resize(), cR.cZ = !0, aO.i6) && (aI9 = cR.cQ + 2e3, eT(this))
	}, this.ia = function(aF, aG) {
		if (!aO.i6) return !1;
		if (aF < aFy.aF || aG < aFy.aG || aF > aFy.aF + aFy.p) return aZE && function(ig, aF, aG) {
			var a3 = aZF.length,
				iL = Math.floor(.5 * aFy.r),
				r = a3 * iL,
				s = Math.floor(Math.floor(aFy.aF) + .3 * aFy.p - .5),
				r = Math.floor(Math.floor(aFy.aG) - r),
				p = Math.floor(.4 * aFy.p + 2.5);
			return aZE = !1, cR.cZ = !0, aF < s || s + p < aF || aG < r || (aZG = aDH(0, Math.floor((aG - r) / iL), a3 - 1), eT(ig)), !0
		}(this, aF, aG);
		if ((aF -= aFy.aF) < .3 * aFy.p) aZE = !1, this.aN4(!aO.zs);
		else {
			if (aF < .7 * aFy.p) return aZE = !aZE, cR.cZ = !0;
			this.dE(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.dE(!0), this.dE = function(aZJ) {
		2 === aO.cd ? (this.aN4(!1), bT.c4(3)) : (aZE = !1, this.cg = !this.cg, this.cg ? (ce.cf && ce.y1(), c9.cA.setState(1)) : aZJ || ce.aN5(), cR.cZ = !0, eT(this))
	}, this.aZK = function() {
		this.cg = !1, ce.aN5(), cR.cZ = !0, eT(this)
	}, this.aQC = function(aF, aG) {
		return !!aO.zs && (0 <= ce.ia(aF, aG) || (aO.i6 ? ((cR.cQ > aI9 || !this.ia(aF, aG)) && ib.ia(aF, aG), cR.cZ = !0, aI9 = cR.cQ + 2e3) : ib.ia(aF, aG)), !0)
	}, this.cT = function() {
		aO.i6 && aO.zs && cR.cQ > aI9 - 1e3 && cR.cQ < aI9 && (cR.cZ = !0)
	}, this.a6K = function() {
		aO.i6 && (this.cg = !1, cR.cZ = !0, eT(this))
	}, this.k = function() {
		if (aO.i6) {
			if (aO.zs) {
				if (cR.cQ > aI9) return;
				if (cR.cQ > aI9 - 1e3) return aB.globalAlpha = aDH(0, (1e3 - (cR.cQ - (aI9 - 1e3))) / 1e3, 1), aZL(), void(aB.globalAlpha = 1)
			}
			aZL()
		}
	}
}

function a1A() {
	var aZU;
	this.d = function() {
		aZU = !1
	}, this.cT = function() {
		var fg;
		if (function() {
				if (!aZU) {
					if (cR.gS() % 30 != 9) return;
					if (!aZ.aa.a7h(90)) return;
					aZU = !0
				}
				return 1
			}() && (! function() {
				var eZ = b3.aO1(956);
				if (eZ) {
					if (aZ.aa.r8(eZ.player)) return 1;
					b3.aIJ(956, 0)
				}
				return
			}() && (-1 === (fg = (aO.qX ? function() {
				var id = lt.qb(),
					a3 = bB.bC;
				if (e.qc[id])
					for (var aEI = bB.bD, t1 = e.t1, g = 0; g < a3; g++) {
						var fg = aEI[g];
						if (t1[fg] !== id) return fg
					} else if (1 < a3) return wO[a3 - 1];
				return -1
			} : function() {
				for (var aPS = bB.bC, r1 = bB.bD, aZc = vj, g = 0; g < aPS; g++) {
					var fg = r1[g];
					if (0 !== aZc[fg]) return fg
				}
				return -1
			})()) ? ! function() {
				var eZ = b3.aO1(957);
				if (eZ && eZ.aNe) {
					if (h3.sl(eZ.aNe.gz << 2)) return 1;
					b3.aIJ(957, 0)
				}
				return
			}() : (b3.fd(0, L(471, [fZ.f1[fg]]), 956, fg, e8.e9, e8.ff, -1, !0), 0)))) {
			var a3 = av.wl.wm;
			if (0 !== a3)
				for (var dg = av.wl.dg, g = 0; g < a3; g++) {
					var gz = dg[g];
					if (h3.sl(gz << 2)) return void b3.fd(0, L(472, [gq.wt(gz), gq.wu(gz)]), 957, 0, e8.e9, e8.ff, -1, !0, void 0, {
						b8: 1,
						gz: gz
					})
				}
		}
	}
}

function a1T() {
	this.aIz = function(player) {
		for (var aFK = a4.i.aFK, ex = player << 3, g = ex + a4.i.a5G[player] - 1; ex <= g; g--) this.aFo(aFK[g])
	}, this.aFo = function(aZd) {
		var i = a4.i,
			aZe = i.a5 - 1,
			aZf = i.a7[aZd],
			aZg = i.aAa[aZd],
			aZh = i.a6[aZd];
		i.a5 = aZe, i.a7[aZd] = i.a7[aZe], i.a6[aZd] = i.a6[aZe], i.aFF[aZd] = i.aFF[aZe], i.aCI[aZd] = i.aCI[aZe], i.aAa[aZd] = i.aAa[aZe], i.aCJ[aZd] = i.aCJ[aZe], i.aFG[aZd] = i.aFG[aZe], i.aFH[aZd] = i.aFH[aZe], i.aFI[aZd] = i.aFI[aZe], i
			.aFJ[aZd] = i.aFJ[aZe], i.aFK[i.a7[aZd]] = aZd,
			function(a0B) {
				var player = a0B >> 3,
					i = a4.i,
					a3 = i.a5G[player] - 1,
					aZk = (player << 3) + a3;
				i.a5G[player] = a3, aZk !== a0B && (i.aFK[a0B] = i.aFK[aZk], i.a7[i.aFK[a0B]] = a0B)
			}(aZf), a4.nz.nz[gq.aAZ(i.a6[aZd])][i.aAa[aZd]] = aZd, aZe = gq.aAZ(aZh), aZf = aZg, aZe = a4.nz.nz[aZe], i = aZe.pop(), aZf !== aZe.length && (aZe[aZf] = i, a4.i.aAa[i] = aZf)
	}
}

function aZm() {
	var aZn, aZp = new Uint16Array(8);

	function aZq(size, player) {
		for (var g = fZ.fB[player].length - 1; size <= g; g--) h3.hQ(fZ.fB[player][g], player)
	}
	this.d = function() {
		aZn = 0
	}, this.aOG = function(player, aOE) {
		return gD.a7d[1] = fZ.fB[player].length, gD.a7d[0] === aO.aR ? av.aOF.aTG(player) : this.aTE(player, gD.a7d[0]), (0 !== gD.a7d[1] || 0 !== fZ.fB[player].length) && !(!aOE && gD.a7d[1] === fZ.fB[player].length || (gD.a7d[0] === aO.aR ? fZ
			.fG[player]++ : fZ.fH[player]++, 0))
	}, this.aOH = function(player) {
		aZq(gD.a7d[1], player), lJ.ai(player, gD.gE[0], gD.a7d[0]), l3.aIT(player, !1)
	}, this.aTF = function(player, aL, a3, aM) {
		var aZr = gT.gU(12 * fZ.fA[player], 1024);
		aM -= aM >= gT.gU(fZ.fA[player], 2) ? aZr : 0, aZq(a3, player), lJ.ai(player, aM, aL), fZ.fA[player] -= aM + aZr, l3.aIT(player, !1)
	}, this.aTE = function(player, aL) {
		for (var xa, sk = h3.sk, g = fZ.fC[player].length - 1; 0 <= g; g--)
			if (h3.hR(fZ.fC[player][g]))
				for (xa = 3; 0 <= xa; xa--)
					if (h3.h4(fZ.fC[player][g] + sk[xa]) && h3.h5(fZ.fC[player][g] + sk[xa]) === aL) {
						fZ.fB[player].push(fZ.fC[player][g]);
						break
					}
	}, this.aTG = function(player) {
		for (var sk = h3.sk, g = fZ.fC[player].length - 1; 0 <= g; g--)
			if (h3.hR(fZ.fC[player][g]))
				for (var xa = 3; 0 <= xa; xa--)
					if (h3.sl(fZ.fC[player][g] + sk[xa])) {
						fZ.fB[player].push(fZ.fC[player][g]);
						break
					}
	}, this.aSy = function(player, aZs) {
		var g, b8, xa, aMI, a3 = fZ.fC[player].length,
			a1I = 256 <= a3 ? 12 : 32 <= a3 ? 6 : 1,
			iu = a3 - 1 - lW.qi(a1I),
			sk = h3.sk;
		aZn = 0;
		loop: for (g = iu; 0 <= g; g -= a1I)
			for (xa = 3; 0 <= xa; xa--)
				if ((aMI = h3.sl(fZ.fC[player][g] + sk[xa]) ? aO.aR : h3.h5(fZ.fC[player][g] + sk[xa])) === aO.aR || h3.h4(fZ.fC[player][g] + sk[xa]) && aMI !== player && (aZs || m1.r5(player, aMI))) {
					for (b8 = aZn - 1; 0 <= b8; b8--)
						if (aZp[b8] === aMI) continue loop;
					if (aZp[aZn] = aMI, 8 <= ++aZn) return !0
				}
		return 0 < aZn
	}, this.aSz = function(player, aZs) {
		var g, xa, aMI, sk = h3.sk;
		for (aZn = 0, g = fZ.fC[player].length - 1; 0 <= g; g--)
			for (xa = 3; 0 <= xa; xa--)
				if ((aMI = h3.sl(fZ.fC[player][g] + sk[xa]) ? aO.aR : h3.h5(fZ.fC[player][g] + sk[xa])) === aO.aR || h3.h4(fZ.fC[player][g] + sk[xa]) && aMI !== player && (aZs || m1.r5(player, aMI))) return aZp[aZn++] = aMI, !0;
		return !1
	}, this.aT1 = function() {
		for (var fi, g = aZn - 1; 0 <= g; g--)
			if (aZp[g] === aO.aR) {
				for (aZn--, fi = g; fi < aZn; fi++) aZp[fi] = aZp[fi + 1];
				return !0
			} return !1
	}, this.aT0 = function(player) {
		for (var fi, g = aZn - 1; 0 <= g; g--)
			if (lJ.ak(player, aZp[g]))
				for (aZn--, fi = g; fi < aZn; fi++) aZp[fi] = aZp[fi + 1];
		return 0 === aZn
	}, this.aT6 = function() {
		for (var g = aZn - 1; 0 <= g; g--)
			if (aZ.aa.b0(aZp[g])) return !0;
		return !1
	}, this.aT7 = function() {
		for (var g = aZn - 1; 0 <= g; g--) aZ.aa.b0(aZp[g]) || (aZp[g] = aZp[--aZn]);
		return 0 < aZn
	}, this.aT4 = function(player) {
		for (var fi, aZt = aZp[0], aZu = fZ.fA[aZt] + lJ.aW(aZt, player), g = aZn - 1; 1 <= g; g--)(fi = fZ.fA[aZp[g]] + lJ.aW(aZp[g], player)) < aZu && (aZt = aZp[g], aZu = fi);
		return aZt
	}, this.aT9 = function(player) {
		var r, aZv = aZp[0];
		if (1 !== aZn)
			for (var aZw = gT.gU(fZ.f6[player] + fZ.f4[player], 2), aZx = gT.gU(fZ.f7[player] + fZ.f5[player], 2), pk = aLn(aZw - gT.gU(fZ.f6[aZv] + fZ.f4[aZv], 2)) + aLn(aZx - gT.gU(fZ.f7[aZv] + fZ.f5[aZv], 2)), g = aZn - 1; 1 <= g; g--)(r =
				aLn(aZw - gT.gU(fZ.f6[aZp[g]] + fZ.f4[aZp[g]], 2)) + aLn(aZx - gT.gU(fZ.f7[aZp[g]] + fZ.f5[aZp[g]], 2))) < pk && (pk = r, aZv = aZp[g]);
		return aZv
	}, this.aTD = function() {
		for (var aZy = aZp, aZz = aZy[0], fA = fZ.fA, aa0 = fA[aZz], g = aZn - 1; 1 <= g; g--) {
			var fg = aZy[g],
				fi = fA[fg];
			aa0 < fi && (aZz = fg, aa0 = fi)
		}
		return aZz
	}, this.aT8 = function() {
		return aZp[lW.qi(aZn)]
	}
}

function aa1() {
	this.cT = function() {
		if (cR.gS() % 51 == 45)
			for (var a3 = a4.i.a5, aFG = a4.i.aFG, aFI = a4.i.aFI, aCJ = a4.i.aCJ, a7 = a4.i.a7, aR0 = gc.aR0, aM = gc.aM, g = 0; g < a3; g++) {
				var a4J, player, aWB, a1Y = aFG[g];
				a1Y % 64 == 6 || (a4J = aFI[g], (player = a4.ec.aa2(a4J[a4J.length - 1])) < 0) || !aZ.aa.ql(player, a7[g] >> 3) || lW.qi(1e3) >= aR0[aM[player]] || ! function(a3Y, a4J) {
					for (var a3 = a4J.length - 1, aVK = a4.i.aFJ[a3Y], pk = 0, g = aVK + 1; g < a3; g++) pk += gq.aVI(a4J[g], a4J[g + 1]);
					return (pk += gq.aVI(gq.aBm(a4.i.a6[a3Y]), a4J[aVK + 1])) <= 60
				}(g, a4J) || (aWB = aCJ[g], 64 <= a1Y && a4.a1m.aRL(player, aWB)) || function(player, a4J, aWB, a3Y, a1Y) {
					a4.x7.x8(player) && aZ.aa.a7O(player, gc.aQy[gc.aM[player]], 32, 0) && (a4.i.aFG[a3Y] = 64 + a1Y % 64, a4.a1m.ai(aWB, a4.i.aFE), gD.bu[0] = a4.a1h.a4I(a4J), gD.xH[1] = 6, aZ.aa.a7b(player), a4.i.aAR(player))
				}(player, a4J, aWB, g, a1Y)
			}
	}
}

function uA(aLp, aXw) {
	this.q3 = [];
	var aa5 = this.q3;

	function click() {
		for (var g = 0; g < aa5.length; g++) aa5[g].textContent = aa5[g].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var b7 = parseInt(this.name);
		void 0 !== aLp.b7 && df.dm.dn(aLp.b7, b7), aXw && aXw(b7)
	}
	for (var aa6, a3 = aLp.jX.length, g = 0; g < a3; g++)(aa6 = document.createElement("p")).textContent = "⚪ " + aLp.jX[g], aa6.style.margin = "0", aa6.name = "" + g, aa6.style.cursor = "pointer", aa6.style.fontSize = "1em", aa6.addEventListener(
		"click", click), aa5.push(aa6);
	aa5[aLp.value].textContent = aa5[aLp.value].textContent.replace("⚪", "🟢")
}

function nQ() {
	this.p = 0, this.r = 0, this.s6 = 0, this.s7 = 0, this.aa7 = 0, this.aa8 = 0, this.iL = 0, this.uT = 0;
	var aaA = this.aa9 = 0;
	this.aaB = 0, this.aaC = 0, this.aaD = 0, this.aaE = 0, this.b7 = 0, this.a3g = null, this.i1 = !1, this.aaF = -1, this.aaG = !1, this.aaH = [0, 0], this.g9 = function() {
		this.a3g = [L(473), L(119, 0, "Balance"), L(118, 0, "Interest"), L(474)]
	}, this.d = function() {
		this.i1 = !1, this.aaF = -1, this.aaG = !1, this.resize()
	}, this.resize = function() {
		this.p = o.p < 1.369 * o.r ? o.p : 1.369 * o.r;
		var bZ = c9.cA.i7() && o.p < o.r ? 1 : c9.cA.i7() ? .8 : o.p < o.r ? .65 : .59;
		this.p = Math.floor(bZ * this.p), this.p -= c9.cA.i7() && o.p < o.r ? 2 * i9.gap + 2 : 0, this.r = Math.floor(this.p / 1.369), this.aaE = Math.floor(this.r / 150), this.aaE = Math.max(this.aaE, 1.5), this.s6 = Math.floor(1 + .02 * this
			.p), this.s7 = Math.floor(1 + .04 * this.p), this.iL = this.s7, aaA = Math.floor(.75 * this.iL), this.uT = Math.floor(1 + .075 * this.p), this.aaB = Math.floor(1 + .1125 * this.p), this.aaC = Math.floor(this.p * (c9.cA.i7() ? .03 :
				.029)), this.aaC = Math.max(this.aaC, 4), this.aaD = Math.floor(.035 * this.p), this.aaD = Math.max(this.aaD, 4), this.aa9 = this.r - 2 * this.iL - this.uT - this.aaB, this.i1 && this.aaI()
	}, this.ia = function(iW, iX) {
		var vs, vr;
		return !!this.i1 && (vr = iW, vs = iX, iW -= gT.gU(o.p - this.p, 2), iX -= gT.gU(o.r - this.r, 2), iW < 0 || iX < 0 || iW >= this.p || iX >= this.r || iW >= this.p - this.aaB && iX < this.aaB ? -1 !== ce.ia(vr, vs) || cU.ia(vr, vs) ||
			this.eB() : iX < this.aaB || (iX < this.r - this.uT ? (this.aaG = !0, this.aaF = (iW - 2 * this.s6 - this.aa7) / this.aa8, 3 !== this.b7 && (cR.cZ = !0)) : (vr = (vr = Math.floor(iW / (this.p / this.a3g.length))) < 0 ? 0 : vr >=
				this.a3g.length ? this.a3g.length - 1 : vr) !== this.b7 && (this.b7 = vr, this.aaI(), cR.cZ = !0)), !0)
	}, this.io = function(iW, iX) {
		return this.aaH[0] = iW, this.aaH[1] = iX, !(!this.i1 || !this.aaG || (iW -= gT.gU(o.p - this.p, 2), iX = this.aaF, this.aaF = (iW - 2 * this.s6 - this.aa7) / this.aa8, (0 <= this.aaF && this.aaF <= 1 || 0 <= iX && iX <= 1) && (cR.cZ = !
			0), 0))
	}, this.aDL = function() {
		this.aaG && (this.aaG = !1)
	}, this.y1 = function() {
		this.i1 ? this.eB() : this.show()
	}, this.show = function() {
		ac.g4 < 2 || (this.i1 = !0, this.aaI())
	}, this.eB = function() {
		this.i1 = !1, this.aaF = -1, cR.cZ = !0
	}, this.aaI = function() {
		this.b7 < 2 ? this.aa7 = jB.measureText(aZ.fo.iP(ac.max[this.b7]), aZ.e2.iA(0, this.aaC)) : 2 === this.b7 && (this.aa7 = jB.measureText(aZ.fo.iQ(6, 2), aZ.e2.iA(0, this.aaC))), this.aa8 = this.p - 2 * this.s6 - this.aa7 - this.s7
	}, this.eT = function() {
		this.i1 && this.aaI()
	}, this.k = function() {
		this.i1 && this.aZL()
	}, this.aZL = function() {
		var aF = gT.gU(o.p - this.p, 2),
			aG = gT.gU(o.r - this.r, 2);
		aB.setTransform(1, 0, 0, 1, aF, aG), aB.fillStyle = e8.ff, aB.fillRect(0, this.aaB, this.p, this.r - this.aaB), this.aaJ(), this.aGz(), aB.strokeRect(0, 0, this.p, this.r), aZ.e2.textAlign(aB, 2), aB.font = aZ.e2.iA(0, this.aaC), 0 ===
			this.b7 ? this.aaK(ac.g1, aF, aG) : 1 === this.b7 ? this.aaK(ac.g2, aF, aG) : 2 === this.b7 ? this.aaL(aF, aG) : 3 === this.b7 && (this.aaM(aF, aG), this.aaN(aF, aG)), ce.aHz(Math.floor(aF + this.p - .725 * this.aaB), Math.floor(aG +
				.275 * this.aaB), Math.floor(.45 * this.aaB)), aB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aaJ = function() {
		var g, fh;
		for (aB.lineWidth = this.aaE, aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 1), aB.strokeStyle = e8.e9, aB.font = aZ.e2.iA(1, this.aaD), fh = this.p / this.a3g.length, aB.fillStyle = e8.aUP, aB.fillRect(this.b7 * fh, this.r - this.uT,
				fh, this.uT), aB.fillStyle = e8.e9, aB.fillRect(0, this.r - this.uT - .5 * this.aaE, this.p, this.aaE), g = 1; g <= 3; g++) aB.fillRect(g * fh, this.r - this.uT, this.aaE, this.uT);
		for (g = this.a3g.length - 1; 0 <= g; g--) aB.fillText(aZ.i0.a3u(this.a3g[g], 0, .9 * fh), (g + .5) * fh, this.r - .46 * this.uT)
	}, this.aGz = function() {
		aB.fillStyle = e8.aUW, aB.fillRect(0, 0, this.p, this.aaB), aB.fillStyle = e8.e9, aB.fillRect(0, this.aaB - .5 * this.aaE, this.p, this.aaE), aB.font = aZ.e2.iA(1, .39 * this.aaB), aB.fillText(aZ.i0.a3u(L(475), 0, .8 * this.p), Math
			.floor(this.p / 2), Math.floor(.55 * this.aaB))
	}, this.aaK = function(bu, aF, aG) {
		var aj = ac.max[this.b7],
			il = (aB.setTransform(1, 0, 0, 1, aF + 2 * this.s6 + this.aa7, aG + this.iL + this.aaB), aB.lineWidth = 2, this.aa9 / Math.sqrt(aj));
		aB.beginPath(), aB.moveTo(this.aa8, this.aa9 - il * Math.sqrt(bu[ac.g4 - 1]));
		for (var g = ac.g4 - 2; 0 <= g; g--) aB.lineTo(g * this.aa8 / (ac.g4 - 1), this.aa9 - il * Math.sqrt(bu[g]));
		aB.stroke();
		aF = this.aHz(bu, il, .5);
		aF < .95 && aB.fillText(aZ.fo.iP(aj), -this.s6, 0), .05 < Math.abs(aF - .5) && aB.fillText(aZ.fo.iP(Math.floor(aj / 4)), -this.s6, Math.floor(this.aa9 / 2)), .05 < aF && aB.fillText("0", -this.s6, this.aa9)
	}, this.aaL = function(aF, aG) {
		aB.setTransform(1, 0, 0, 1, aF + 2 * this.s6 + this.aa7, aG + this.iL + this.aaB), aB.lineWidth = 2;
		var il = this.aa9 / Math.max(ac.max[this.b7], 1);
		aB.beginPath(), aB.moveTo(this.aa8, this.aa9 - il * ac.g3[ac.g4 - 1]);
		for (var g = ac.g4 - 2; 0 <= g; g--) aB.lineTo(g * this.aa8 / (ac.g4 - 1), this.aa9 - il * ac.g3[g]);
		aB.stroke();
		aF = this.aHz(ac.g3, il, 1), aG = ac.max[this.b7] / 100;
		aF < .95 && aB.fillText(aZ.fo.iQ(aG, 2), -this.s6, 0), .05 < Math.abs(aF - .5) && aB.fillText(aZ.fo.iQ(aG / 2, 2), -this.s6, Math.floor(this.aa9 / 2)), .05 < aF && aB.fillText(aZ.fo.iQ(0, 2), -this.s6, this.aa9)
	}, this.aaM = function(aF, aG) {
		aB.setTransform(1, 0, 0, 1, aF + .34 * this.p, aG + 2 * aaA + this.aaB), aZ.e2.textAlign(aB, 2);
		for (var aD6 = this.r - 4 * aaA - this.uT - this.aaB, bu = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], g = 9; 0 <= g; g--) aB.fillText(aZ.i0.a3u(ac.g8[bu[g]], 0, .31 * this.p), 0, g * aD6 / 9);
		var aq = ac.az;
		for (aB.setTransform(1, 0, 0, 1, aF + .39 * this.p, aG + 2 * aaA + this.aaB), aZ.e2.textAlign(aB, 0), aB.fillText(aZ.fo.iQ(100 * aq[0] / (1024 * Math.max(aq[1], 1)), 1), 0, 0), g = 8; 1 <= g; g--) aB.fillText(aq[bu[g]].toString(), 0, g *
			aD6 / 9);
		aB.fillText(aZ.fo.iQ(100 * (1 - fZ.f8[aO.b2] / aq[7]), 0), 0, aD6)
	}, this.aaN = function(aF, aG) {
		aB.setTransform(1, 0, 0, 1, aF + .79 * this.p, aG + 2 * aaA + this.aaB), aZ.e2.textAlign(aB, 2);
		var g, aD6 = this.r - 4 * aaA - this.uT - this.aaB;
		for (aB.fillStyle = e8.aUM, g = 2; 0 <= g; g--) aB.fillText(aZ.i0.a3u(ac.g8[g + 8], 0, .31 * this.p), 0, g * aD6 / 9);
		aB.fillText(aZ.i0.a3u(ac.g8[18], 0, .31 * this.p), 0, 3 * aD6 / 9), aB.fillStyle = e8.aUL, aB.fillText(aZ.i0.a3u(ac.g8[11], 0, .31 * this.p), 0, 4 * aD6 / 9), aB.fillStyle = e8.aUT, aB.fillText(aZ.i0.a3u(ac.g8[13], 0, .31 * this.p), 0,
				5 * aD6 / 9), aB.fillText(aZ.i0.a3u(ac.g8[15], 0, .31 * this.p), 0, 6 * aD6 / 9), aB.fillText(aZ.i0.a3u(ac.g8[16], 0, .31 * this.p), 0, 7 * aD6 / 9), aB.fillText(aZ.i0.a3u(ac.g8[12], 0, .31 * this.p), 0, 8 * aD6 / 9), aB
			.fillStyle = e8.aJi, aB.fillText(aZ.i0.a3u(ac.g8[17], 0, .31 * this.p), 0, aD6), aB.fillStyle = e8.aUM;
		var aq = ac.az,
			aVt = aq[8] + aq[9] + aq[10] + aq[18],
			aVt = aZ.fo.iP(aVt),
			aIA = aB.measureText(aVt).width,
			aF = (aB.setTransform(1, 0, 0, 1, aF + .83 * this.p + aIA, aG + 2 * aaA + this.aaB), aB.fillText(aZ.fo.iP(aq[8]), 0, 0), aB.fillText(aZ.fo.iP(aq[9]), 0, aD6 / 9), aB.fillText(aZ.fo.iP(aq[10]), 0, 2 * aD6 / 9), aB.fillText(aZ.fo.iP(aq[
				18]), 0, 3 * aD6 / 9), aB.fillStyle = e8.aUL, aB.fillText(aVt, 0, 4 * aD6 / 9), aB.fillStyle = e8.aUT, aB.fillText(aZ.fo.iP(aq[13]), 0, 5 * aD6 / 9), aB.fillText(aZ.fo.iP(aq[15]), 0, 6 * aD6 / 9), aB.fillText(aZ.fo.iP(aq[16]),
				0, 7 * aD6 / 9), aB.fillText(aZ.fo.iP(aq[12]), 0, 8 * aD6 / 9), aq[12] + aq[13] + aq[15] + aq[16]);
		aB.fillStyle = e8.aJi, aB.fillText(aZ.fo.iP(aF), 0, aD6), aB.fillStyle = e8.e9
	}, this.aHz = function(bu, il, aOp) {
		var g, br, d3;
		return this.aaF < 0 || 1 < this.aaF ? .25 : (g = this.aaF * (ac.g4 - 1), d3 = bu[br = Math.floor(g)], d3 += (g - br) * (bu[br < ac.g4 - 1 ? br + 1 : br] - d3), aB.strokeStyle = e8.aP1, .04 < this.aaF && this.aaP(0, this.aa9 - il * Math
				.pow(d3, aOp), g * this.aa8 / (ac.g4 - 1), this.aa9 - il * Math.pow(d3, aOp)), .04 < d3 / ac.max[this.b7] && this.aaP(g * this.aa8 / (ac.g4 - 1), this.aa9, g * this.aa8 / (ac.g4 - 1), this.aa9 - il * Math.pow(d3, aOp)), aB
			.fillStyle = e8.aUU, aB.beginPath(), aB.arc(g * this.aa8 / (ac.g4 - 1), this.aa9 - il * Math.pow(d3, aOp), Math.max(2, .014 * this.r), 0, 2 * Math.PI), aB.fill(), bu = this.aaF * cR.cc, bu = 0 === fZ.f3[aO.b2] ? Math.floor(bu * ac
				.g7) : Math.floor(bu * cR.gS()), aB.fillStyle = e8.e9, aB.fillText(1 === aOp ? aZ.fo.iQ(d3 / 100, 2) : aZ.fo.iP(Math.floor(d3)), -this.s6, this.aa9 - il * Math.pow(d3, aOp)), aZ.e2.textAlign(aB, 1), aB.fillText(cs.wg(bu), g *
				this.aa8 / (ac.g4 - 1), this.aa9 + this.aaC - (c9.cA.i7() ? 2 : 0) - this.aaE), aZ.e2.textAlign(aB, 2), il * Math.pow(d3, aOp) / this.aa9)
	}, this.aaP = function(s, u, w, x) {
		aB.beginPath(), aB.moveTo(s, u), aB.lineTo(w, x), aB.stroke()
	}
}

function nK() {
	this.a0A = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aD4 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", e8.e9, "rgb(170,170,170)"
	], this.aaQ = [e8.e9, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", e8.e9, e8.jC], this.aaR = [e8.jC, e8.e9, e8.e9, e8.e9, e8.jC, e8.jC, e8.jC, e8.jC, e8.e9];
	var aXX = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.w2 = ["rgba(" + aXX[0] + ",", "rgba(" + aXX[1] + ",", "rgba(" + aXX[2] + ",", "rgba(" + aXX[3] + ",", "rgba(" + aXX[4] + ",", "rgba(" + aXX[5] + ",", "rgba(" + aXX[6] + ",", "rgba(" + aXX[7] + ",", "rgba(" + aXX[8] + ",", "rgba(" + aXX[9] +
			","
		], this.w3 = ["rgb(" + aXX[0] + ")", "rgb(" + aXX[1] + ")", "rgb(" + aXX[2] + ")", "rgb(" + aXX[3] + ")", "rgb(" + aXX[4] + ")", "rgb(" + aXX[5] + ")", "rgb(" + aXX[6] + ")", "rgb(" + aXX[7] + ")", "rgb(" + aXX[8] + ")", "rgb(" + aXX[9] +
			")"], this.fj = null, this.f = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aJS = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.qc = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.t1 = new Uint8Array(aO.aR), this.a8 = new Uint8Array(aO.aR), this.aKM = new Uint16Array(aO.aR), this.aKN = new Uint16Array(this.qc.length + 1), this.aKO = new Uint16Array(this.qc.length), this
		.g9 = function() {
			this.fj = [L(476), L(477), L(478), L(479), L(480), L(481), L(482), L(483), L(484)]
		}, this.d = function() {
			if (this.t1.fill(0), this.a8.fill(0), this.aaS(), aO.qX) {
				if (9 === aO.fP) {
					for (var t1 = e.t1, g = aO.data.teamPlayerCount[7] - 1; 0 <= g; g--) t1[g] = 1;
					var a3 = aO.aR;
					for (g = aO.data.teamPlayerCount[7]; g < a3; g++) t1[g] = 2;
					e.qc[1] = 7, e.qc[2] = 8
				} else aO.cq ? function() {
					var aJS = e.aJS,
						colorsData = aO.data.colorsData;
					if (!aO.data.selectableColor)
						for (var g = aO.aP - 1; 0 <= g; g--) colorsData[g] = lW.qi(262144);
					var aad = 0,
						pk = 768,
						pg = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aO.data.teamPlayerCount;
					for (g = 0; g < 9; g++)
						if (teamPlayerCount[g]) {
							for (var bZ = 0, fi = 0; fi < 3; fi++) bZ += Math.abs(aJS[g][fi] - pg[fi]);
							bZ < pk && (aad = g, pk = bZ)
						} var aae = new Uint16Array(9);
					for (g = 0; g < 9; g++) aae[g] = teamPlayerCount[g];
					var qc = e.qc,
						aaf = new Uint8Array(9),
						dl = (qc[0] = 0, 1);
					for (g = 1; g < 9; g++) aae[g] && (aaf[g] = dl, qc[dl++] = g);
					var iu = aO.aP,
						t1 = e.t1;
					aae[aad] ? (aae[aad]--, t1[0] = aaf[aad]) : iu = 0;
					var aH = 0;
					for (g = iu; g < aO.qC; g++) {
						var qh = qc[aH];
						if (aae[qh]) aae[qh]--, t1[g] = aaf[qh];
						else if (g--, 9 <= ++aH) return console.log("error 325")
					}
				}() : this.cT();
				! function() {
					for (var a3 = aO.aR, aKM = e.aKM, aKN = e.aKN, aKO = e.aKO, t1 = e.t1, qc = e.qc, aKE = qc.length, dg = new Array(aKE), g = 0; g < aKE; g++) dg[g] = [];
					for (g = 0; g < a3; g++) dg[qc[t1[g]]].push(g);
					for (g = 1; g <= aKE; g++) aKN[g] = aKN[g - 1] + dg[g - 1].length;
					for (g = 0; g < aKE; g++)
						for (var dl = dg[g].length, aj = aKN[g], qh = 0; qh < dl; qh++) aKM[qh + aj] = dg[g][qh];
					var aP = aO.aP;
					for (g = 0; g < aKE; g++)
						for (dl = dg[g].length, aj = aKN[g], qh = 0; qh < dl; qh++)
							if (aKM[qh + aj] >= aP) {
								aKO[g] = qh;
								break
							}
				}(), ! function() {
					for (var a3 = aO.aR, t1 = e.t1, a8 = e.a8, qc = e.qc, g = 0; g < a3; g++) a8[g] = qc[t1[g]];
					9 === aO.fP && a8.fill(1, a3 - lX.aMi[5])
				}()
			}
		}, this.aaS = function() {
			for (var g = this.qc.length - 1; 0 <= g; g--) this.qc[g] = g
		}, this.cT = function() {
			var w8 = new Uint8Array(aO.aP),
				w9 = new Uint8Array(aO.aP),
				aaX = new Uint16Array(8),
				aaY = new Uint16Array(this.qc.length);
			this.aaZ(w8, w9, aaX, 1), this.aS1(aaX), this.aaa(aaY, w8, w9), this.aab(w8, w9, aaY), this.aac()
		}, this.aaZ = function(w8, w9, aae, aag) {
			for (var fi, br, aah, a3 = this.qc.length - aag, bu = new Uint16Array(a3), aJS = this.aJS, colorsData = aO.data.colorsData, g = aO.aP - 1; 0 <= g; g--) {
				for (fi = a3; aag <= fi; fi--) bu[fi - 1] = Math.abs(4 * (colorsData[g] >> 12) - aJS[fi][0]) + Math.abs(4 * (colorsData[g] >> 6 & 63) - aJS[fi][1]) + Math.abs(4 * (63 & colorsData[g]) - aJS[fi][2]);
				for (aah = 768, fi = a3 - 1; 0 <= fi; fi--) bu[br = (fi + g) % a3] < aah && (aah = bu[br], w8[g] = br);
				for (aae[w8[g]] += 4, aah = 768, fi = a3 - 1; 0 <= fi; fi--) bu[br = (fi + g) % a3] < aah && br !== w8[g] && (aah = bu[br], w9[g] = br);
				aae[w9[g]]++
			}
		}, this.aS1 = function(aae) {
			for (var fi, r4, a3 = this.qc.length - 1, g = a3; 0 <= g; g--) this.qc[g] = g;
			for (g = a3 - 1; 0 <= g; g--) aae[g]++;
			for (g = 1; g <= a3; g++) {
				for (r4 = 0, fi = 1; fi < a3; fi++) aae[fi] > aae[r4] && (r4 = fi);
				aae[r4] = 0, this.qc[g] = r4 + 1
			}
		}, this.aaa = function(aaY, w8, w9) {
			var fi, fs, aH, bZ, br, ik, fc, aai = this.qc.length - 1,
				sb = new Uint16Array(aai),
				aaj = [],
				aak = 0,
				fr = [],
				aal = [];
			loop: for (var g = 0; g < aO.aP; g++)
				if (null !== (fs = aZ.fo.ft(fZ.f0[g]))) {
					for (fi = fr.length - 1; 0 <= fi; fi--)
						if (fs === fr[fi]) {
							aal[fi].push(g), aak = Math.max(aak, aal[fi].length);
							continue loop
						} fr.push(fs), aaj.push(!1), aal.push([g]), aak = Math.max(aak, 1)
				}
			for (; 2 < aO.zp && aak > gT.gU(aO.aP, aO.zp);) aO.zp--, aO.fP--;
			for (fi = fr.length - 1; 0 <= fi; fi--) {
				for (bZ = -1, aH = fr.length - 1; 0 <= aH; aH--) !aaj[aH] && (-1 === bZ || aal[aH].length > aal[bZ].length) && (bZ = aH);
				for (aH = aai - 1; 0 <= aH; aH--) sb[aH] = 1;
				for (aH = aal[bZ].length - 1; 0 <= aH; aH--) sb[w8[aal[bZ][aH]]] += 3, sb[w9[aal[bZ][aH]]]++;
				for (g = aai - 1; 0 <= g; g--) {
					for (br = bZ % aai, aH = aai - 1; 0 <= aH; aH--) sb[aH] > sb[br] && (br = aH);
					for (ik = -1, aH = aO.zp; 0 < aH; aH--)
						if (this.qc[aH] === br + 1) {
							ik = aH;
							break
						} if (sb[br] = 0, -1 !== ik) {
						for (fc = 0, aH = aO.zp; 0 < aH; aH--) aaY[ik] > aaY[aH] && fc++;
						if (fc !== aO.zp - 1) {
							for (aH = aal[bZ].length - 1; 0 <= aH; aH--) aaY[ik]++, this.t1[aal[bZ][aH]] = ik;
							break
						}
					}
				}
				aaj[bZ] = !0
			}
		}, this.aab = function(w8, w9, aaY) {
			for (var g, aC, a3 = this.qc.length - 1, border = gT.gU(aO.aP, aO.zp), aam = (0 < aO.aP % aO.zp && border++, new Uint8Array(1 + a3)), fi = a3; 1 <= fi; fi--) aam[this.qc[fi]] = fi;
			for (g = 0; g < aO.aP; g++) aC = aam[w8[g] + 1], 0 === this.t1[g] && aC <= aO.zp && aaY[aC] < border && (aaY[aC]++, this.t1[g] = aC);
			for (g = 0; g < aO.aP; g++) aC = aam[w9[g] + 1], 0 === this.t1[g] && aC <= aO.zp && aaY[aC] < border && (aaY[aC]++, this.t1[g] = aC);
			for (fi = aO.zp; 1 <= fi; fi--)
				for (g = aO.aP - 1; 0 <= g && !(aaY[fi] >= border); g--) 0 === this.t1[g] && (aaY[fi]++, this.t1[g] = fi)
		}, this.aac = function() {
			if (aO.zp < 8) aO.zp++, aO.fP++, aO.aKF = 1;
			else
				for (var g = aO.aP; g < aO.aR; g++) this.t1[g] = 1 + g % aO.zp
		}
}

function aZD() {
	this.cS = 0, this.cT = function() {
		lA.cT(), lH.cT(), o.cT(), dc.i.cT(), bX.qR(), lm.aU4.cT(), cR.cZ && (cR.cZ = !1, bi.k())
	}
}

function aan() {
	var aao, aap = [],
		aaq = -1,
		aar = 0,
		aas = 0;

	function aaw() {
		aar = cR.cQ, (3 === this.jM ? aav : (aaq = (aap.length + aaq + 2 * this.jM - 1) % aap.length, aau))()
	}

	function aau() {
		0 !== aap.length && (aas = 0, aao && aao.hX(), (aao = new jI(aaw)).dn(aaq, aap.length), aao.show(aap[aaq]), bH.message.resize())
	}

	function aav() {
		aas = 1, aao && aao.hX(), (aao = new aIU(aau)).dn(aap.length), aao.show(), bH.message.resize()
	}
	this.aA0 = function(a4a) {
		var eZ;
		2 === a4a.id && 3 === a4a.a4z ? bH.ec.a55(a4a.bh) : (eZ = bH.ec.jS(a4a, bH.ec.jT(a4a)), (5 !== a4a.id && 6 !== a4a.id || (bT.a2X(29).kL().aYH(eZ), 5 === a4a.id)) && (eZ = cR.cQ < aar + 2e4, aaq !== aap.length - 1 && eZ || (aaq = aap
			.length), aap.push(a4a), __fx.pingFilter.isMuted(a4a) || (df.dg.data[14].value || 7 === a4a.id || ly.play(), aao && (aas && (df.dg.data[13].value || eZ) ? aao.dn(aap.length) : aau()))))
	}, this.show = function() {
		aav()
	}, this.eB = function() {
		aaq = aap.length - 1, aao && aao.hX(), aao = null
	}, this.resize = function() {
		aao && aao.resize()
	}, this.aQf = function() {
		return aap
	}
}

function aGN() {
	var ep, aGb, aHV, aax, aay, aaz, colors = [0, 0, 0],
		ab0 = -1;

	function ab3(g) {
		var ab4 = aGb.aG + g * (i9.gap + aaz);
		aB.fillStyle = "rgb(" + (0 === g ? 150 : 2 === g ? 30 : 0) + "," + (1 === g ? 130 : 2 === g ? 30 : 0) + "," + (2 === g ? 220 : 0) + ")", aB.fillRect(aax, ab4, colors[g] * aay, aaz), aB.strokeStyle = e8.e9, aB.strokeRect(aax, ab4, aay, aaz),
			aB.fillStyle = e8.e9, aB.font = aZ.e2.iA(0, .32 * aaz), aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 0), aB.fillText(L(0 === g ? 487 : 1 === g ? 488 : 489) + ab1(g), aax + i9.gap, ab4 + .53 * aaz)
	}

	function ab1(g, ab5) {
		return ab5 = ab5 || 256, gT.gn(Math.floor(ab5 * colors[g]), 0, ab5 - 1)
	}

	function iV(iW, iX) {
		return !(iW < aax || iX < aGb.aG || iW > aGb.aF + aGb.p || iX > aGb.aG + aGb.r)
	}
	this.show = function() {
		var aq = df.dg.data[121].value;
		colors[0] = (aq >> 12) / 63, colors[1] = (aq >> 6 & 63) / 63, colors[2] = (63 & aq) / 63, ep.show(), this.resize()
	}, this.eB = function() {
		df.dm.dn(121, (ab1(0, 64) << 12) + (ab1(1, 64) << 6) + ab1(2, 64)), ep.eB()
	}, this.resize = function() {
		ep.resize(), aGb.resize();
		var aH = o.bv,
			a0e = ep.a0Y(),
			ab2 = (aGb.aG = Math.max(aGb.aG, aH * a0e.a0Z + i9.gap), aH * a0e.a0c - 2 * i9.gap);
		aGb.r = Math.min(aGb.r, ab2), aGb.p = 2 * aGb.r, aGb.aG = aH * a0e.a0Z + .5 * (aH * a0e.a0c - aGb.r), aGb.aF = .5 * (o.p - aGb.p), aHV = .25 * aGb.p, aax = aGb.aF + aHV + i9.gap, aay = aGb.p - aHV - i9.gap, aaz = (aGb.r - 2 * i9.gap) / 3
	}, this.k = function() {
		var hI, fc, fi;
		ep.k(), aB.lineWidth = i9.tu, hI = ab1(0), fc = ab1(1), fi = ab1(2), aB.fillStyle = "rgb(" + hI + "," + fc + "," + fi + ")", aB.fillRect(aGb.aF, aGb.aG, aHV, aGb.r), aB.strokeStyle = e8.e9, aB.strokeRect(aGb.aF, aGb.aG, aHV, aGb.r), aB
			.fillStyle = hI + fc + fi < 306 && fc < 150 ? e8.e9 : e8.jC, aZ.e2.textBaseline(aB, 1), aZ.e2.textAlign(aB, 1), aB.font = aZ.e2.iA(0, .1 * aGb.r), aB.rotate(-Math.PI / 2), aB.fillText(L(486), -aGb.aG - .5 * aGb.r, aGb.aF + .5 * aHV),
			aB.setTransform(1, 0, 0, 1, 0, 0), ab3(0), ab3(1), ab3(2)
	}, this.ia = function(iW, iX) {
		iV(iW, iX) && (ab0 = gT.gn(Math.floor((iX - aGb.aG) / (aaz + .75 * i9.gap)), 0, 2), colors[ab0] = gT.gn((iW - aax) / aay, 0, 1), cR.cZ = !0)
	}, this.io = function(iW) {
		-1 !== ab0 && (colors[ab0] = gT.gn((iW - aax) / aay, 0, 1), cR.cZ = !0)
	}, this.im = function(iW, iX, deltaY) {
		iV(iW, iX) && (iW = gT.gn(Math.floor((iX - aGb.aG) / (aaz + .75 * i9.gap)), 0, 2), colors[iW] = gT.gn(colors[iW] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), cR.cZ = !0)
	}, this.aGX = function() {
		0 <= ab0 && (ab0 = -1, cR.cZ = !0)
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(L(485), [new c6("⬅️ " + L(1), function() {
		bT.i.rH()
	})], !1), aGb = new aGg([.5, .25], [.5, .5], 1)
}

function nF() {
	this.aPO = new aWM, this.aU4 = new aOb, this.d = function() {
		c9.cA.a2P()
	}, this.aOe = function() {
		return df.dg.data[160].value
	}
}

function aUk() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aTH() {
	this.a3R = function() {
		var vJ = function() {
				for (var dC = d0.d1.dC, a3 = dC.length, max = 0, g = 0; g < a3; g++) max = Math.max(max, dC[g]);
				return a81(Math.max(max, 1))
			}(),
			p = (eZ = aO.data, (p = lg).d(), p.cG(12, bw.rVersion), p.b7 += 43, p.cG(2, eZ.mapType), p.cG(8, eZ.mapProceduralIndex), p.cG(8, eZ.mapRealisticIndex), p.cG(14, eZ.mapSeed), p.aUD(eZ.mapName, 5), 2 === eZ.mapType && p.aUE(eZ.canvas),
				p.cG(1, eZ.passableWater), p.cG(1, eZ.passableMountains), p.cG(10, eZ.playerCount), p.cG(10, eZ.humanCount), p.cG(9, eZ.selectedPlayer), p.cG(1, eZ.gameMode), p.cG(2, eZ.playerMode), p.cG(2, eZ.battleRoyaleMode), p.cG(4, eZ
					.numberTeams), p.cG(1, eZ.isZombieMode), p.cG(1, eZ.isContest), p.cG(1, eZ.isReplay), p.nh(eZ.elo, 2, 14), p.cG(1, eZ.colorsType), p.cG(1, eZ.colorsPersonalized), p.nh(eZ.colorsData, 10, 18), p.cG(1, eZ.selectableColor), p.nh(
					eZ.teamPlayerCount, 4, 10), p.cG(1, eZ.neutralBots), p.cG(2, eZ.botDifficultyType), p.cG(4, eZ.botDifficultyValue), p.nh(eZ.botDifficultyTeam, 4, 4), p.nh(eZ.botDifficultyData, 10, 4), p.cG(2, eZ.spawningType), p.cG(14, eZ
					.spawningSeed), p.nh(eZ.spawningData, 11, 12), p.cG(1, eZ.selectableSpawn), p.cG(2, eZ.playerNamesType), p.aUC(eZ.playerNamesData, 10, 5), p.cG(1, eZ.selectableName), p.cG(2, eZ.aIncomeType), p.cG(8, eZ.aIncomeValue), p.nh(eZ
					.aIncomeData, 10, 8), p.cG(2, eZ.tIncomeType), p.cG(8, eZ.tIncomeValue), p.nh(eZ.tIncomeData, 10, 8), p.cG(2, eZ.iIncomeType), p.cG(8, eZ.iIncomeValue), p.nh(eZ.iIncomeData, 10, 8), p.cG(2, eZ.sResourcesType), p.cG(11, eZ
					.sResourcesValue), p.nh(eZ.sResourcesData, 10, 11), p.nh(eZ.bg, 10, 30), ! function(vJ) {
					var p = lg,
						d2 = d0.d1.d2,
						d3 = d0.d1.d4,
						d5 = d0.d1.d6,
						d7 = d0.d1.d8,
						a3 = d2.length;
					p.cG(5, vJ), p.cG(30, a3), p.cG(30, d0.d1.dC.length);
					for (var g = 0; g < a3; g++) {
						var aH = d2[g];
						p.cG(4, aH), p.cG(9, d3[g]), 0 === aH ? p.cG(22, d5[g]) : 1 === aH ? (p.cG(10, d5[g]), p.cG(10, d7[g])) : 2 === aH ? (p.cG(10, d5[g]), p.cG(9, d7[g])) : 3 === aH ? (p.cG(10, d5[g]), p.cG(27, d7[g])) : 4 === aH ? (p.cG(10,
							d5[g]), p.cG(16, d7[g])) : 5 === aH || 6 === aH ? p.cG(10, d5[g]) : 7 === aH ? p.cG(1, d5[g]) : 10 === aH && (p.cG(20, d5[g]), p.cG(22, d7[g]))
					}
				}(vJ), ! function(vJ) {
					for (var p = lg, dA = d0.d1.dA, dC = d0.d1.dC, a3 = dA.length, g = 0; g < a3; g++) p.cG(1, dA[g]), p.cG(vJ, dC[g])
				}(vJ), lg.b7),
			eZ = gT.gU(p - 1, 6) + 1,
			vJ = (hc.hd(6 * eZ) !== lg.bu.length && lg.bu.push(0), ! function() {
				var p = lg;
				p.b7 = 24, p.cG(31, p.bu.length), p.b7 = 12, p.cG(12, function() {
					for (var bu = lg.bu, a3 = bu.length, aQp = bw.rVersion, g = 3; g < a3; g++) aQp = aQp + bu[g] & 4095;
					return aQp
				}())
			}(), lh.d(lg.bu), hp.hq.hr(hp.hq.hs(eZ)));
		return lh.hX(), lg.d(), vJ
	}
}

function abD() {
	function abM(bu, ex, ey) {
		var abN = bu[ex];
		bu[ex] = bu[ey], bu[ey] = abN
	}
	this.bN = [
		[],
		[],
		[],
		[]
	], this.bG = [0, 0, 0, 0], this.bR = [], this.a9k = function(abE, bh, username, ef, a4k, aG1, elo, color, z6, aG3) {
		username = this.a4t(bh, username, ef, a4k, aG1, elo, color, z6, aG3);
		this.bN[abE].push(username), bH.abF === bh && (bH.bm = username), bH.aMn.abG(bh) && (username.eh = 1), bH.i.bS += 29 === bT.bU && bH.i.bV[0] === abE && 1 === bH.i.bV[2]
	}, this.a4t = function(bh, username, ef, a4k, aG1, elo, color, z6, aG3) {
		return {
			bh: bh,
			username: __fx.nameFilter.filter(username),
			ef: ef,
			a4k: a4k,
			aG1: aG1,
			elo: elo,
			color: color,
			z6: z6,
			aG3: aG3
		}
	}, this.a9q = function(b7, abE, ef, a4k, aG1, elo, z6, color) {
		b7 = this.bN[abE][b7];
		b7.ef = ef, b7.a4k = a4k, b7.aG1 = aG1, b7.elo = elo, b7.z6 = z6, b7.color = color, bH.i.bS += 29 === bT.bU && bH.i.bV[0] === abE && 1 === bH.i.bV[2]
	}, this.a9r = function(b7, abE, abH) {
		var b7 = this.bN[abE][b7],
			abI = b7.username,
			a50 = "Redacted " + hp.hq.iP(b7.bh, 2);
		b7.username = abH ? "[" + aZ.fo.ft(abI) + "] " + a50 : a50, abI.indexOf("Redacted") < 0 && (b7.a4p = abI), bH.jU.a52(b7.bh), bH.i.bS += 29 === bT.bU && bH.i.bV[0] === abE && 1 === bH.i.bV[2]
	}, this.a9o = function(b7, abJ, abK) {
		var player = this.bN[abJ][b7];
		this.a9p(b7, abJ), this.bN[abK].push(player), bH.i.bS += 29 === bT.bU && bH.i.bV[0] === abK && 1 === bH.i.bV[2]
	}, this.a9p = function(b7, abJ) {
		var bI = this.bN[abJ];
		this.bR.push(bI[b7]), 1e3 < this.bR.length && this.bR.shift(), b7 >= this.bG[abJ] ? bI[b7] = bI[bI.length - 1] : (this.bG[abJ]--, 2 === abJ ? (bI.splice(this.bG[abJ] + 1, 0, bI[bI.length - 1]), bI.splice(b7, 1)) : (bI[b7] = bI[this.bG[
			abJ]], bI[this.bG[abJ]] = bI[bI.length - 1])), bI.pop(), bH.i.bS += 29 === bT.bU && bH.i.bV[0] === abJ && 1 === bH.i.bV[2]
	}, this.a9n = function(b7, a9u) {
		bH.i.bS += 29 === bT.bU && bH.i.bV[0] === a9u && 1 === bH.i.bV[2];
		var bI = this.bN[a9u],
			eZ = bI[b7];
		if (2 === a9u)
			if (b7 >= this.bG[a9u]) {
				bH.aMn.join(eZ);
				for (var abL = this.bG[a9u], elo = eZ.elo; abL && elo > bI[abL - 1].elo;) abL--;
				bI[b7] = bI[this.bG[a9u]], bI.splice(this.bG[a9u]++, 1), bI.splice(abL, 0, eZ)
			} else bI.splice(this.bG[a9u]--, 0, eZ), bI.splice(b7, 1);
		else b7 >= this.bG[a9u] ? (bH.aMn.join(eZ), abM(bI, this.bG[a9u]++, b7)) : abM(bI, --this.bG[a9u], b7)
	}, this.a4s = function(bh) {
		for (var bN = this.bN, a3 = bN.length, g = 0; g < a3; g++)
			for (var bI = bN[g], aj = bI.length, b8 = 0; b8 < aj; b8++)
				if (bh === bI[b8].bh) return bI[b8];
		return null
	}
}

function aZC() {
	var b7 = 0,
		cQ = cR.cQ;
	this.cS = 0, this.cT = function() {
		o.cT(), aO.cp ? cx() : 0 === b7 ? cR.cQ >= cQ && (cQ += cR.cc * Math.floor(1 + (cR.cQ - cQ) / cR.cc), 2 === aO.cd || ce.cf ? ch() : (co(), cj.ck()), b7++) : ((ce.cf ? cx : (cR.cZ = !0, cy))(), b7 = 0), cY(), cR.cZ && (cR.cZ = !1, ca())
	}
}

function abO() {
	this.cT = function(player) {
		var aHG = function(player) {
			for (var a1h = a4.a1h.a4S(), a3 = a1h.length, aj = Math.min(a3, 32), qh = lW.qi(a3), g = 0; g < aj; g++) {
				var aHG = (g + qh) % a3,
					a4J = a1h[aHG],
					xL = a4J[0],
					xN = a4J[a4J.length - 1];
				if (a4.ec.abR(player, xL) && a4.ec.aHD(player, xN)) return aHG;
				if (a4.ec.abR(player, xN) && a4.ec.aHD(player, xL)) return 0 <= (aHG = a4.a1h.a4F(xN, xL)) ? aHG : a4.a1h.a4E() ? -1 : a4.a1h.a4R(a4.a1h.a4I(a4J))
			}
			return -1
		}(player);
		return -1 !== aHG && (aHG = a4.a1h.get(aHG), !a4.ec.abQ(player, aHG)) && (gD.bu[0] = aHG, !0)
	}
}

function rc(data) {
	var ep, abS;

	function aba(a3) {
		return a3 < 60 ? 1 === a3 ? a3 + " Second" : a3 + " Seconds" : a3 < 3600 ? 1 === (a3 = Math.floor(a3 / 60)) ? a3 + " Minute" : a3 + " Minutes" : a3 < 172800 ? 1 === (a3 = Math.floor(a3 / 3600)) ? a3 + " Hour" : a3 + " Hours" : (a3 = Math
			.floor(a3 / 172800)) + " Days"
	}

	function abU(a1I) {
		var a3 = data.data.length;
		if (a3) {
			for (var ex, max = min = parseInt(data.data[0][0]), g = 1; g < a3; g++) var aVt = parseInt(data.data[g][0]),
				min = Math.min(aVt, min),
				max = Math.max(aVt, max);
			ex = a1I < 0 ? min + a1I : max + 1, bT.c4(8, bT.kU().pE, new ev(21, {
				ew: data.ew,
				ex: ex,
				ey: ex + Math.abs(a1I)
			}))
		}
	}
	if (this.show = function() {
			ep.show(), this.resize()
		}, this.eB = function() {
			ep.eB()
		}, this.resize = function() {
			ep.resize(), abS.resize()
		}, this.eC = function(aH) {
			2 === aH && ep.eD[0].eE()
		}, data.aDI) {
		ep = new dM(L(52), [new c6("⬅️ " + L(1), function() {
			bT.dN()
		})]);
		var bZ = {
				rj: [],
				rp: [L(499), L(500), L(501) + " ↗"],
				ry: [12, 50, 38]
			},
			bg = aO.data.bg;
		if (bg) {
			for (var a3 = bg.length, rj = bZ.rj, f1 = fZ.f1, g = 0; g < a3; g++) rj.push([{
				aq: g + 1 + ".",
				fh: 0
			}, {
				aq: f1[g],
				fh: 0
			}, {
				aq: hp.hq.iP(bg[g], 5),
				fh: 1,
				bh: bg[g],
				s1: 0
			}]);
			abS = new ri(ep.dP, bZ, {
				rt: 1
			})
		} else abS = new ri(ep.dP, bZ)
	} else {
		var bZ = data.data.length ? 0 : 1,
			a5U = [new c6("⬅️ " + L(1), function() {
				bT.dN()
			}), new c6(L(490), function() {
				abU(-10)
			}, bZ, 0, 1), new c6(L(491), function() {
				abU(10)
			}, bZ, 0, 1), new c6(L(270), function() {
				bT.c4(11, 10, new aLJ({
					ew: data.ew
				}))
			})],
			rp = [L(492), L(493), L(494), L(495), L(496), L(14), L(15), L(16), L(497), L(498), L(65), L(66), "Audit Log", L(67)];
		ep = new dM(rp[data.ew], a5U), ! function() {
			var g, bZ = {
					rj: []
				},
				rj = bZ.rj,
				abW = data.data,
				a3 = abW.length;
			a3 && 0 === abW[0][0] && 0 <= (b7 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.ew]) && (bT.i.aKz[b7] = abW[0][1]);
			var ik = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.ew],
				yV = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.ew],
				b7 = [
					[L(502), L(503) + " ↗", L(504)],
					[L(502), L(505), L(506), L(507) + " ↗"],
					[L(502), L(503) + " ↗", L(506)],
					[L(502), L(503) + " ↗", L(506)],
					[L(499), L(508), L(509) + " ↗", L(510) + " ↗", L(117)],
					[L(499), L(508), L(511) + " ↗", L(366) + " ↗", L(512)],
					[L(499), L(508), L(513) + " ↗", L(514) + " ↗", L(367)],
					[L(499), L(508), L(511) + " ↗", L(366) + " ↗", L(515)],
					[L(499), L(508), L(509) + " ↗", L(510) + " ↗", L(117)],
					[L(502), L(503) + " ↗", L(506)],
					[L(502), L(503) + " ↗", L(516)],
					[L(502), L(503) + " ↗", L(506)],
					[L(499), L(508), L(509) + " ↗", L(510) + " ↗", L(517)],
					[L(502), L(503) + " ↗", L(506)]
				];
			if (bZ.rp = b7[data.ew], bZ.ry = [
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
				][data.ew], 0 === data.ew || 2 === data.ew || 3 === data.ew || 9 === data.ew || 10 === data.ew || 11 === data.ew || 13 === data.ew)
				for (g = 0; g < a3; g++) rj.push([{
					aq: abW[g][0] + 1 + ".",
					fh: 0
				}, {
					aq: abW[g][1],
					fh: 1,
					bh: abW[g][4],
					s1: abW[g][3]
				}, {
					aq: (ik * abW[g][2]).toFixed(yV),
					fh: 0
				}]);
			else if (12 === data.ew)
				for (g = 0; g < a3; g++) {
					var abZ = abW[g][3];
					rj.push([{
						aq: "" + abW[g][0],
						fh: 0
					}, {
						aq: aba(abW[g][4]),
						fh: 0
					}, {
						aq: abW[g][5],
						fh: 1,
						bh: abW[g][1],
						s1: 0
					}, {
						aq: abW[g][6],
						fh: 1,
						bh: abW[g][2],
						s1: 0
					}, {
						aq: lx.aXS(abZ, hp.hq.iP(abW[g][1], 5)),
						fh: 0
					}])
				} else if (1 === data.ew)
					for (g = 0; g < a3; g++) rj.push([{
						aq: abW[g][0] + 1 + ".",
						fh: 0
					}, {
						aq: abW[g][1],
						fh: 0
					}, {
						aq: (ik * abW[g][2]).toFixed(yV),
						fh: 0
					}, {
						aq: abW[g][3],
						fh: 1,
						bh: abW[g][5],
						s1: abW[g][4]
					}]);
				else if (4 === data.ew || 5 === data.ew || 6 === data.ew || 7 === data.ew || 8 === data.ew)
				for (g = 0; g < a3; g++) {
					var abb = abW[g][5];
					4 === data.ew || 8 === data.ew ? "100%" === (abb = (abb % 64 * 100 / (abb >> 6)).toFixed(0) + "%") && (4 === data.ew ? abb += " (" + L(518) + ")" : abb += " (" + L(519) + ")") : 5 === data.ew ? 32768 <= abb && (abb = -(abb -
						32768)) : abb = (ik * abb).toFixed(yV), rj.push([{
						aq: "" + abW[g][0],
						fh: 0
					}, {
						aq: aba(abW[g][6]),
						fh: 0
					}, {
						aq: abW[g][7],
						fh: 1,
						bh: abW[g][1],
						s1: abW[g][2]
					}, {
						aq: abW[g][8],
						fh: 1,
						bh: abW[g][3],
						s1: abW[g][4]
					}, {
						aq: "" + abb,
						fh: 0
					}])
				}
			abS = new ri(ep.dP, bZ)
		}()
	}
}

function abc() {
	var abd = [],
		abe = [],
		abf = 0;

	function abg(bu, kd, ki, abi) {
		var a3 = bu.length;
		if (0 === a3) return "";
		var eJ = "@" + bu[0];
		if (1 === a3) return eJ + kd + abi;
		for (var g = 1; g < a3 - 1; g++) eJ += ", @" + bu[g];
		return eJ + " and @" + bu[a3 - 1] + ki + abi
	}
	this.d = function() {
		var eJ = abg(abe, " is", " are", " in the lobby.");
		eJ.length && bH.message.aA0({
			id: 7,
			c2: eJ
		}), abd = [], abe = [], abf = 0
	}, this.abG = function(abh) {
		return bH.abF !== abh && (abh = hp.hq.iP(abh, 5), !!df.rf.eh(abh)) && (abe.push(abh), !0)
	}, this.join = function(player) {
		bH.abF !== player.bh && (player = hp.hq.iP(player.bh, 5), df.rf.eh(player)) && abd.push(player)
	}, this.a9t = function() {
		var kd, ki;
		++abf < 3 || (abf = 0, kd = abg(abe, "", "", " entered the lobby!"), (kd = (ki = abg(abd, "", "", " joined a game!")).length ? kd.length ? kd + " " + ki : ki : kd).length && bH.message.aA0({
			id: 7,
			c2: kd
		}), abd = [], abe = [])
	}
}

function nG() {
	this.id = 0, this.eK = 0, this.a2I = null, this.a2J = null, this.a2h = null, this.a2K = null, this.cA = new a2E, this.d = function() {
		var self, eK;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eK = Android.getVersion()) < 12 || (self.eK = eK, self.id = 1, self.a2J = Android),
			function(self) {
				var eK;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.a2h = mwIOSdataX, self.a2K = window.webkit.messageHandlers.iosCommandA, eK =
					self.a2h.version, self.eK = eK ? Number(eK) : 0)
			}(this),
			function(self) {
				var a2I;
				try {
					if (!(a2I = window.localStorage)) return;
					a2I.setItem("tls7", "1"), a2I.removeItem("tls7")
				} catch (error) {
					return
				}
				self.a2I = a2I
			}(this)
	}
}

function mi() {
	var abm;

	function abx(a9, w1, aF, aG, globalAlpha) {
		a1.oJ.save(), a1.oJ.globalAlpha = globalAlpha, a1.oJ.imageSmoothingEnabled = !1, a1.oJ.scale(w1, w1), a1.oJ.drawImage(a9, Math.floor(aF * (a1.a2 / w1 - a9.width)), Math.floor(aG * (a1.jg / w1 - a9.height))), a1.oJ.restore()
	}
	this.xw = 0, this.aO5 = 0, this.aO6 = 0, this.a74 = 0, this.d = function() {
		(abm = new Array(a1.a6z))[0] = {
			p: [0, 5e3, 8e3, 1e4],
			hI: [220, 250, 255, 220],
			fc: [190, 220, 0, 0],
			fi: [170, 200, 0, 0]
		}, abm[1] = {
			p: [0, 4e3, 5e3, 6e3, 1e4],
			hI: [25, 0, 100, 0, 25],
			fc: [25, 0, 0, 0, 25],
			fi: [25, 0, 0, 0, 25]
		}, abm[2] = {
			p: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			hI: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			fc: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fi: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, abm[3] = {
			p: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			hI: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			fc: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fi: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, abm[4] = {
			p: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			hI: [10, 10, 20, 10, 10, 170, 212],
			fc: [20, 20, 60, 100, 100, 110, 170],
			fi: [70, 70, 160, 30, 30, 60, 120]
		}, abm[5] = {
			p: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			hI: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			fc: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fi: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, abm[6] = {
			p: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			hI: [10, 10, 60, 255, 255, 200, 200],
			fc: [10, 10, 60, 255, 255, 200, 200],
			fi: [80, 80, 255, 255, 255, 200, 200]
		}, abm[7] = {
			p: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			hI: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			fc: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fi: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, abm[8] = {
			p: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			hI: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			fc: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fi: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, abm[9] = {
			p: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			hI: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			fc: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fi: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, abm[20] = {
			p: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			hI: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			fc: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fi: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, abm[21] = {
			p: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			hI: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			fc: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fi: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a7B = function() {
		var abw, g, b8, d3, pi = function() {
				var pi;
				return a1.a71 = document.createElement("canvas"), a1.a71.width = a1.a2, a1.a71.height = a1.jg, a1.oJ = a1.a71.getContext("2d", {
					alpha: !1
				}), pi = a1.oJ.getImageData(0, 0, a1.a2, a1.jg), a1.oM = pi.data, pi
			}(),
			p = abm[a1.bd].p,
			hI = abm[a1.bd].hI,
			fc = abm[a1.bd].fc,
			fi = abm[a1.bd].fi,
			aq = jm.jn(),
			a3 = p.length - 2,
			abq = new Array(1 + a3),
			abr = new Array(1 + a3),
			abt = new Array(1 + a3),
			abu = new Array(1 + a3);
		for (b8 = a3; 0 <= b8; b8--) abq[b8] = p[b8 + 1] - p[b8], abr[b8] = hI[b8 + 1] - hI[b8], abt[b8] = fc[b8 + 1] - fc[b8], abu[b8] = fi[b8 + 1] - fi[b8];
		for (g = a1.a2 * a1.jg - 1; 0 <= g; g--)
			for (b8 = a3; 0 <= b8; b8--)
				if (aq[g] >= p[b8]) {
					d3 = aq[g] - p[b8], a1.oM[4 * g] = hI[b8] + jo(abr[b8] * d3, abq[b8]), a1.oM[4 * g + 1] = fc[b8] + jo(abt[b8] * d3, abq[b8]), a1.oM[4 * g + 2] = fi[b8] + jo(abu[b8] * d3, abq[b8]), a1.oM[4 * g + 3] = 255;
					break
				} a1.oJ.putImageData(pi, 0, 0), a1.a7G(a1.bd) && lI.aAC() && a1.a7G(a1.bd) && (pi = lI.qT("arena"), abw = lI.qT("territorial.io"), abx(pi, 5, .5, .5, .1), abx(abw, 2, .5, .45, .1)), a1.a72 = !0, cR.cZ = !0
	}, this.aPH = function() {
		for (var fg, aF, aG, aXj, aMH, d5, aO5 = 0, p = a1.a2, r = a1.jg, d3 = p * r * 4, aXh = x3, aXi = a1.oM, g = p - 1; 0 <= g; g--) aXh[(fg = g << 2) + 2] = aXh[d3 - fg - 2] = 3;
		for (d3 = 4 * p, g = r - 1; 0 <= g; g--) aXh[(fg = g * d3) + 2] = aXh[fg + d3 - 2] = 3;
		for (aXj = p - 1, aMH = r - 1, aG = 1; aG < aMH; aG++)
			for (d3 = aG * p, aF = 1; aF < aXj; aF++) d5 = 1 - (aXi[(fg = d3 + aF << 2) + 2] > aXi[fg + 1] && aXi[fg + 2] > aXi[fg]), aXh[fg + 2] = 6 - 5 * d5, aO5 += d5;
		this.xw = (p - 2) * (r - 2), this.a74 = 0, a1.a36(a1.bd) && (a1.a74.aXg(), a1.a74.aXk(4, 5)), this.aO5 = aO.qZ = aO5 - this.a74, this.aO6 = this.xw - this.aO5 - this.a74, this.aO6 && (a1.a74.aXk(6, 2), a1.a74.aXq())
	}
}

function m4() {
	this.gU = function(b8, fi) {
		return Math.floor((b8 + .5) / fi)
	}, this.aby = function(b8, fi) {
		return Math.floor(b8 * (fi + .5))
	}, this.sqrt = function(aq) {
		return ~~Math.sqrt(aq + .5)
	}, this.pow = function(br) {
		return Math.floor(Math.pow(2, br) + .5)
	}, this.gn = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.abz = function(d3, d5, d7) {
		return Math.max(Math.min(d3, d5), d7)
	}, this.ac0 = function(ac1, ac2, aF, aG) {
		aF -= ac1, ac1 = aG - ac2, aG = 0;
		return 0 == aF ? aG = 0 <= ac1 ? Math.PI : 0 : (aG = Math.atan(ac1 / aF), aG += 0 < aF ? .5 * Math.PI : 1.5 * Math.PI), aG
	}, this.log2 = function(aq) {
		return Math.floor(!!aq * (1 + Math.log2(aq + .5)))
	}, this.log10 = function(aq) {
		return Math.floor(Math.log10(aq + .5))
	}, this.ac4 = function(aJY, aJZ, ac5, ac6, ac7) {
		return ac5 - ac7 < aJY && aJY < ac5 + ac7 && ac6 - ac7 < aJZ && aJZ < ac6 + ac7
	}, this.aEg = function(aFg, aFh) {
		return aFg * aFg + aFh * aFh
	}
}

function aGU() {
	var dK, dL, tz;

	function k5() {
		u0(), 3 !== aO.data.botDifficultyType || aZ.ky.u5(aO.data.botDifficultyData) || (aO.data.botDifficultyType = 0), 3 !== aO.data.botDifficultyType && (aO.data.botDifficultyData = null), bT.dv()[19] = null, bT.dN()
	}

	function u0() {
		3 === aO.data.botDifficultyType && aZ.ky.u2(tz.u3(), aO.data.botDifficultyData, gc.aNv.length - 1)
	}

	function ac8(dR, b7) {
		var dY = new dZ,
			value = (dY.da(b7 < 0 ? L(310) : L(47) + " " + e.fj[b7 % 9]), 0 <= b7 && (dY.db(L(55) + ": " + aO.data.teamPlayerCount[b7]).style.marginBottom = "1em"), b7 < 0 ? aO.data.botDifficultyValue : aO.data.botDifficultyTeam[b7]);
		dY.q1(new uA({
			jX: gc.aNv,
			value: value
		}, function(qh) {
			b7 < 0 ? aO.data.botDifficultyValue = qh : aO.data.botDifficultyTeam[b7] = qh
		})), dR.push(dY)
	}
	this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(310), [new c6("⬅️ " + L(1), k5)]), dL = new dO(dK.dP, function() {
		var dR = [];
		if (function(dR) {
				var dY = new dZ,
					jX = (dY.da(L(77)), [L(112), L(384), L(385), L(80)]),
					value = aO.data.botDifficultyType;
				0 === aO.data.gameMode && (value = Math.min(value, 2), jX.splice(2, 1));
				dY.q1(new uA({
					jX: jX,
					value: value
				}, function(b7) {
					u0(), aO.data.botDifficultyType = b7, 0 === aO.data.gameMode && 2 === b7 && (aO.data.botDifficultyType = 3), 3 !== aO.data.botDifficultyType || aO.data.botDifficultyData || (aO.data.botDifficultyData =
						new Uint8Array(aO.aR)), 2 !== aO.data.botDifficultyType || aO.data.botDifficultyTeam || (aO.data.botDifficultyTeam = new Uint8Array(9)), bT.c4(25)
				})), dR.push(dY)
			}(dR), 0 === aO.data.botDifficultyType) ac8(dR, -1);
		else if (2 === aO.data.botDifficultyType)
			for (var g = 0; g < aO.data.teamPlayerCount.length; g++) aO.data.teamPlayerCount[g] && ac8(dR, g);
		else 3 === aO.data.botDifficultyType && ! function(dR) {
			var dY = new dZ;
			dY.da("Data"), (tz = new dk(0, 1, 0, 1)).dp(aZ.fo.uD(aO.data.botDifficultyData, 8)), dY.dq(tz), dR.push(dY)
		}(dR);
		return dR
	}())
}

function aUh() {
	for (var aH = document.createElement("canvas"), aH = (aH.width = 24, aH.height = 24, aH.getContext("2d", {
			alpha: !1
		})), bZ = (aH.fillStyle = "rgb(0,0,0)", aH.fillRect(0, 0, 24, 24), aH.font = "22px system-ui", aH.textBaseline = "middle", aH.textAlign = "center", aH.fillStyle = "rgb(255,255,255)", aH.fillText("Q", 12, 12), aH.getImageData(0, 0, 24, 24)
			.data), a3 = bZ.length, aj = 0, g = 0; g < a3; g += 4) aj += bZ[g];
	return 16383 & aj
}

function aGR() {
	var dK, dL, ac9, dR;

	function k5() {
		ld.hX(), bT.dv()[19] = null, bT.dN()
	}

	function acG() {
		acJ(), acH()
	}

	function acJ() {
		ac9.pa.lastChild && bT.removeChild(ac9.pa, ac9.pa.lastChild)
	}

	function acH() {
		var acK = a1.a2w(aO.data);
		aO.data.canvas = a1.a7C(acK, aO.data.mapSeed).a71, acI()
	}

	function acI() {
		var a9 = aO.data.canvas;
		a9.style.width = "100%", ac9.pa.appendChild(a9)
	}
	this.a9V = function(a9) {
		aO.data.canvas && acJ(), aO.data.canvas = a9, acI()
	}, this.show = function() {
		dK.show(), this.resize()
	}, this.eB = function() {
		dK.eB()
	}, this.resize = function() {
		dK.resize(), dL.resize()
	}, this.eC = function(aH) {
		2 === aH && dK.eD[0].eE()
	}, dK = new dM(L(381), [new c6("⬅️ " + L(1), k5)]), 2 === aO.data.mapType && ld.d(), dL = new dO(dK.dP, (function(dR) {
		var dY = new dZ;
		dY.da(L(77)), dY.q1(new uA({
			jX: [L(520), L(521), L(522)],
			value: aO.data.mapType
		}, function(b7) {
			2 === (aO.data.mapType = b7) ? (ld.d(), aO.data.canvas = null) : (aO.data.passableWater = aO.data.passableMountains = 1, ld.hX()), bT.c4(20)
		})), 2 <= aO.data.mapType && (dY.dq(new a5S), dY.dq(new uB({
			value: aO.data.passableWater
		}, L(523), function(value) {
			aO.data.passableWater = value
		})), dY.dq(new uB({
			value: aO.data.passableMountains
		}, L(524), function(value) {
			aO.data.passableMountains = value
		})));
		dR.push(dY)
	}(dR = []), function(dR) {
		if (0 === aO.data.mapType) {
			for (var dY = new dZ, jX = (dY.da(L(381)), []), g = 0; g < a1.ks.aVP.length; g++) jX.push(a1.ks.o5[a1.ks.aVP[g]].name);
			dY.q1(new uA({
				jX: jX,
				value: aO.data.mapProceduralIndex
			}, function(b7) {
				aO.data.mapProceduralIndex = b7, acG()
			})), dR.push(dY)
		}
	}(dR), function(dR) {
		if (1 === aO.data.mapType) {
			for (var dY = new dZ, jX = (dY.da(L(381)), []), g = 0; g < a1.ks.aVQ.length; g++) jX.push(a1.ks.o5[a1.ks.aVQ[g]].name);
			dY.q1(new uA({
				jX: jX,
				value: aO.data.mapRealisticIndex
			}, function(b7) {
				aO.data.mapRealisticIndex = b7, acG()
			})), dR.push(dY)
		}
	}(dR), function(dR) {
		var dY;
		2 === aO.data.mapType && ((dY = new dZ).da(L(525)), dY.dq(new dr(df.dg.data[162], 1)), dY.da(L(526), "0.8em"), dY.dq(new ds([new c6(L(527), function() {
			return ld.a9O(), !0
		}).button])), dR.push(dY))
	}(dR), function(dR) {
		var dY, kI;
		2 === aO.data.mapType && ((dY = new dZ).da(L(528)), kI = new dr({
			b7: -1,
			value: aO.data.mapName
		}, 0, 0, function(br) {
			aO.data.mapName = br.target.value = br.target.value.slice(0, 20)
		}), dY.dq(kI), dR.push(dY))
	}(dR), function(dR) {
		var dY, kI, a8m;
		0 === aO.data.mapType && ((dY = new dZ).da("Seed"), kI = new dr({
			b7: -1,
			value: aO.data.mapSeed
		}, 1, 0, function(br) {
			br = Math.abs(Math.floor(br.target.value)) % 16384;
			aO.data.mapSeed !== br && (aO.data.mapSeed = br, acG())
		}), a8m = new c6(L(78), function(br) {
			var l0 = Math.floor(16384 * Math.random());
			if (aO.data.mapSeed !== l0) return kI.br.value = aO.data.mapSeed = l0, acG(), !0
		}), dY.dq(kI), dY.dq(new ds([a8m.button])), dR.push(dY))
	}(dR), function(dR) {
		(ac9 = new dZ).da(L(7)), 2 !== aO.data.mapType ? acH() : aO.data.canvas && acI();
		dR.push(ac9)
	}(dR), dR))
}

function aL1() {
	this.aPp = function(aq) {
		return [aq >> 12 & 63, aq >> 6 & 63, 63 & aq]
	}, this.acL = function(aq) {
		for (var bu = this.aPp(aq), g = 0; g < 3; g++) bu[g] = ~~(4.05 * bu[g]);
		return bu
	}, this.aGq = function(aq) {
		aq = this.acL(aq);
		return aZ.color.aHn(aq[0], aq[1], aq[2])
	}, this.acM = function(bu) {
		for (var g = 0; g < 3; g++) bu[g] = ~~(bu[g] / 4.04);
		return (bu[0] << 12) + (bu[1] << 6) + bu[2]
	}, this.aHn = function(hI, fc, fi) {
		return "rgb(" + hI + "," + fc + "," + fi + ")"
	}, this.rr = function(hI, fc, fi, b8) {
		return "rgba(" + hI + "," + fc + "," + fi + "," + b8.toFixed(3) + ")"
	}, this.sc = function(aH) {
		for (var bu = aH.split("(")[1].split(","), aJR = gD.aJR, g = 0; g < 3; g++) aJR[g] = parseInt(bu[g]);
		return 4 === bu.length ? aJR[3] = 255 * parseFloat(bu[3].slice(0, -1)) : aJR[3] = 255, aJR
	}, this.jR = function(acN, bZ) {
		for (var bu = acN.slice(acN.indexOf("(") + 1, acN.indexOf(")")).split(","), aJR = gD.aJR, g = 0; g < 3; g++) aJR[g] = gT.gn(parseInt(bu[g].trim(), 10) + bZ, 0, 255);
		return 3 === bu.length ? this.aHn(aJR[0], aJR[1], aJR[2]) : (acN = parseFloat(bu[3].trim()), this.rr(aJR[0], aJR[1], aJR[2], acN = 0 === acN ? .3 : acN))
	}, this.aRf = function(acO, acP) {
		for (var a1I = 0, g = 0; g < 3; g++) a1I += Math.abs(acP[g] - acO[g]);
		if (!(240 <= a1I))
			for (g = 0; g < 3; g++) acP[g] = acO[g] + (acO[g] < 128 ? 80 : -80)
	}, this.acQ = function(bu) {
		for (var eJ = "#", g = 0; g < 3; g++) {
			var hI = bu[g].toString(16);
			eJ += 1 === hI.length ? "0" + hI : hI
		}
		return eJ
	}, this.acR = function(eJ) {
		var hI, fc;
		return eJ.length < 7 ? e8.jC : (hI = parseInt(eJ.slice(1, 3), 16), fc = parseInt(eJ.slice(3, 5), 16), eJ = parseInt(eJ.slice(5, 7), 16), this.aHn(hI, fc, eJ))
	}
}

function mn() {
	this.wl = new yk, this.aRH = new wj, this.aRI = new qU, this.performance = new aON, this.aOF = new aZm, this.aw = new aSs, this.aTA = new aLQ, this.aRG = new abO, this.gY = new aa1, this.d = function() {
		this.wl.d(), this.aRI.d(), this.performance.d(), this.aOF.d(), this.aw.d()
	}, this.cT = function() {
		this.performance.cT(), this.wl.cT(), this.aRI.qW()
	}
}

function aGO() {
	var ep, a8N, dR, acS = -1;
	this.show = function() {
		ep.show(), this.resize(), acS = df.dg.data[125].value
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), a8N.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, ep = new dM(L(529), [new c6("⬅️ " + L(1), function() {
		acS !== df.dg.data[125].value ? bT.i.aXb() : bT.wX(13)
	})]), a8N = new dO(ep.dP, ((dR = []).push(function() {
		var dY = new dZ,
			a8m = (dY.da(L(530)), dY.di(L(531)), new c6(L(286), function() {
				df.dm.dn(130, 0), bT.i.aXb()
			}, 0, 0, 1)),
			kI = new dr(df.dg.data[126], 0, function() {
				a8m.button.click()
			});
		return dY.dq(kI), kI.br.placeholder = "a,b,c", kI.br.style.marginTop = "0.5em", dY.dq(new ds([a8m.button])), dY
	}()), dR.push(function() {
		var dY = new dZ,
			a8m = new c6(L(286), function() {
				df.dm.dn(130, 1), bT.i.aXb()
			}, 0, 0, 1),
			aLN = new dr(df.dg.data[129], 1, function() {
				aLN.br.focus()
			}),
			aLO = new dr(df.dg.data[128], 1, function() {
				a8m.button.click()
			});
		return dY.da(L(284)), dY.dq(aLO), aLO.br.style.marginBottom = "0.5em", dY.da(L(285)), dY.dq(aLN), dY.dq(new ds([a8m.button])), dY
	}()), dR.push(function() {
		var dY = new dZ;
		return dY.da(L(532)), df.dg.data[125].jX = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], dY.q1(new uA(df.dg.data[125])), dY
	}()), dR.push(function() {
		var dY = new dZ;
		return dY.da(L(533)), dY.dq(new uB(df.dg.data[127], L(534))), dY
	}()), dR))
}

function nX() {
	this.abF = 0, this.bm = null, this.bI = null, this.ec = null, this.i = null, this.k9 = null, this.eU = null, this.message = null, this.kJ = null, this.jU = null, this.aMn = null, this.qQ = new bE, this.kF = 0, this.aOo = 0, this.d = function() {
		this.aOo = cR.cQ, this.abF = hl.hq.a0M(df.dg.data[105].value, 5), this.bI = new abD, this.ec = new aQL, this.i = new aMk, this.k9 = new acW, this.eU = new aFp, this.message = new aan, this.kJ = new aVb, this.jU = new a4U, this.aMn =
			new abc, this.i.d(), ly.d(), this.kF = 1, c9.cA.setState(1), bi.setState(0)
	}, this.hX = function() {
		this.jU && this.jU.hX(), this.bm = null, this.bI = null, this.ec = null, this.i = null, this.k9 = null, this.eU = null, this.message = null, this.kJ = null, this.jU = null, this.aMn = null, this.kF = 0, ly.hX(), c9.cA.setState(0)
	}
}

function a78() {
	var eJ;
	10 === a1.bd ? eJ =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === a1.bd ? eJ =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === a1.bd ? eJ =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === a1.bd ? eJ =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === a1.bd ? eJ =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === a1.bd ? eJ =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === a1.bd ? eJ =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === a1.bd ? eJ =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === a1.bd ? eJ =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === a1.bd ? eJ =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === a1.bd ? eJ =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === a1.bd ? eJ =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === a1.bd && (eJ =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new a7v).sG(eJ)
}

function og() {
	this.d = function() {
		this.aM0 = 0, this.fO = [], this.fk = 0, this.fN = 0
	}, this.kK = function() {
		var ig;
		aO.cq || (ig = this, 2 === aO.fV ? ig.fO = fM.oh.aOf() : aO.qX ? ig.fO = fM.oh.aOg() : ig.fO = fM.oh.aOh(), ig.aM0 = lu.aAc.aLz(), ig.fk = Math.max(1, fM.oh.aOi(ig.fO)), dF.aa.aIX(), 8 === aO.fP ? fM.result.fN = 0 : ig.fN = 100 * fM
			.result.aM0 * (1 + aO.a1R))
	}
}

function ca() {
	lS.pp(), aB.setTransform(m, 0, 0, m, 0, 0), aB.imageSmoothingEnabled = m < 3, aB.drawImage(a1.a71, ib.aGA(), ib.xz()), h.gf.k(), aB.drawImage(a2n, ib.aGA(), ib.xz()), lS.k(), a4.k(), b5.k(), (aO.zs ? (lt.k(), cU) : (b3.k(), lE.k(), iJ.k(), cU
	.k(), lV.k(), cs.k(), ib.k(), jB.k(), lt.k(), lD.k(), lB.k(), ce.k(), l9.k(), lF.k(), gR.k(), lU)).k(), bT.k()
}

function xr(i0, p, r) {
	i0.clearRect(0, 0, p, r), i0.fillStyle = e8.ff, i0.fillRect(0, 0, p, r)
}

function xu(i0, p, r, xx) {
	i0.fillStyle = e8.e9, i0.fillRect(0, 0, p, xx), i0.fillRect(0, 0, xx, r), i0.fillRect(p - xx, 0, xx, r), i0.fillRect(0, r - xx, p, xx)
}

function xy(i0, aF, aG, tJ, xx, fg, acZ) {
	i0.fillStyle = e8.e9;
	var fg = Math.floor(tJ * fg),
		s7 = (fg += (fg - xx) % 2, Math.floor((fg - xx) / 2)),
		tJ = Math.floor((tJ - fg) / 2);
	i0.fillRect(aF + tJ, aG + tJ + s7, fg, xx), acZ && i0.fillRect(aF + tJ + s7, aG + tJ, xx, fg)
}

function acW() {
	var acb = null,
		acc = null,
		acd = 0,
		ace = 0,
		acf = null;

	function acg() {
		0 !== acc.ef && (bH.k9.eB(), bT.c4(8, 29, new ev(25, {
			s2: 0,
			bh: hp.hq.iP(acc.bh, 5),
			s1: 0
		}, 29)))
	}

	function aci() {
		return !bH.bm || bH.ec.eg(acc) ? 1 : 0
	}

	function ach() {
		var aF = acb.aF,
			aG = acb.aG,
			acr = (bH.k9.eB(), aci());
		acb = new a6o([new c6(lx.aQZ[5][0], function() {
			acl(5, 0)
		}, acr), new c6(lx.aQZ[5][1], function() {
			acl(5, 1)
		}, acr), new c6(lx.aQZ[5][2], function() {
			acl(5, 2)
		}, acr), new c6(lx.aQZ[5][3], function() {
			acl(5, 3)
		}, acr)]), ack(aF, aG), ace = acd = 2
	}

	function acj() {
		29 === bT.bU && bT.kU().kJ(hp.hq.iP(acc.bh, 5))
	}

	function acl(id, value) {
		5 === id && dc.e5.a8l({
			s2: 3,
			bh: hp.hq.iP(acc.bh, 5),
			value: value
		})
	}

	function ack(aF, aG, a6v) {
		acb.show(aF, aG, a6v), bH.eU.show(acb.aF, acb.aG, acc, 1)
	}
	this.kA = function(br, eZ) {
		acd = 1, acc = eZ, acb = new a6o([new c6(L(535), acg, 0 === eZ.ef ? 1 : 0), new c6(L(536), ach, aci()), new c6(L(537), acj, 0)]), ack((acf = {
			clientX: br.clientX,
			clientY: br.clientY
		}).clientX, acf.clientY, 1)
	}, this.eC = function(code) {
		if (29 !== bT.bU) return !1;
		if (!acc) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.eB();
			else if (aZ.fo.startsWith(code, "Numpad") || aZ.fo.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === acd) this.kA(acf, acc);
				else {
					if (!acb) return !1;
					1 === acd ? code <= 1 ? acg() : 2 === code ? ach() : (acj(), this.eB()) : (acl(ace, gT.gn(code - 1, 0, lx.aQZ[ace].length - 1)), this.eB())
				}
		}
		return !0
	}, this.eB = function() {
		acd = 0, acb && acb.eB(), acb = null, bH.eU.eB()
	}
}

function dO(el, dR) {
	var pa = document.createElement("div");

	function s4() {
		var g, a67, r, y, bZ, acv = o.bv * pa.offsetWidth,
			acx = new Float64Array(function(acv) {
				var p = .25 * aZ.e2.a6R(.6) * o.i8;
				return Math.max(Math.floor(acv / p), 1)
			}(acv)),
			pc = i9.pc,
			acy = (acv - (acx.length + 1) * i9.gap) / (acx.length * o.bv);
		for (acx.fill(pc), g = 0; g < dR.length; g++) a67 = (bZ = dR[g].pa).style, r = aZ.ky.min(acx), y = acx.indexOf(r), a67.top = aZ.e2.em(r), a67.left = aZ.e2.em(pc + y * (acy + pc)), a67.width = aZ.e2.em(acy), aZ.e2.jV(bZ, 5), acx[y] += bZ
			.offsetHeight + 3 * pc;
		pa.style.height = aZ.e2.em(aZ.ky.max(acx) - 2 * pc)
	}
	this.pb = pa, this.aFA = dR, this.resize = function() {
		var g;
		for (g = 0; g < dR.length; g++) dR[g].resize();
		s4(), s4()
	}, pa.style.width = "100%", pa.style.maxWidth = "100%", el.style.lineHeight = "1.5em", el.style.overflowX = "hidden", el.style.overflowY = "auto";
	for (var g = 0; g < dR.length; g++) pa.appendChild(dR[g].pa);
	el.appendChild(pa)
}

function mM() {
	var wa, tj, a8H, acz, r, i2, fontSize, ad0, ad1, aaE, ad2, canvas, i0, a8I, ad3;

	function u3(g) {
		return L(0 === g ? 538 : 1 === g ? 539 : 2 === g ? 540 : 541)
	}

	function ad9() {
		aO.qX ? a0C + 4 * i9.gap + r + lt.zr() > iJ.aG ? aB.drawImage(canvas, 2 * i9.gap + lt.zr(), a0C + 2 * i9.gap) : aB.drawImage(canvas, i9.gap, a0C + 3 * i9.gap + lt.zr()) : aB.drawImage(canvas, i9.gap, a0C + 2 * i9.gap)
	}

	function ad4() {
		canvas.width = wa[0].width + aaE, canvas.height = r + aaE, (i0 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, wa[0].width + aaE, r + aaE), i0.translate(Math.floor(aaE / 2), Math.floor(aaE / 2)), i0.lineWidth = aaE, i0.fillStyle = 1 === wa[0].ad8 ? e8.aUH : e8.ff, adA(), i0.fill(), i0.strokeStyle = 1 === wa[0].ad8 ? e8.jC : e8
			.e9, adA(), i0.stroke(), aZ.e2.textAlign(i0, 1), aZ.e2.textBaseline(i0, 1), i0.fillStyle = 1 === wa[0].ad8 ? e8.jC : e8.e9, i0.font = i2[0], i0.fillText(u3(wa[0].ad7), Math.floor(wa[0].width / 2), Math.floor(.72 * ad0[0] * r)), i0.font =
			i2[1], i0.fillText(wa[0].eJ, Math.floor(wa[0].width / 2), Math.floor((ad0[0] + .48 * ad0[1]) * r))
	}

	function adA() {
		i0.beginPath(), i0.moveTo(ad2, 0), i0.lineTo(wa[0].width - ad2, 0), i0.lineTo(wa[0].width, ad2), i0.lineTo(wa[0].width, r - ad2), i0.lineTo(wa[0].width - ad2, r), i0.lineTo(ad2, r), i0.lineTo(0, r - ad2), i0.lineTo(0, ad2), i0.closePath()
	}
	this.d = function() {
		tj = 4, a8H = acz = a8I = 0, wa = [], i2 = new Array(2), fontSize = new Array(2), (ad0 = new Array(2))[0] = .3, ad0[1] = .7, ad1 = new Array(4), canvas = document.createElement("canvas"), ad3 = cR.cQ + 2e3, this.resize()
	}, this.resize = function() {
		var g, p;
		for (r = Math.floor((c9.cA.i7() ? .062 : .047) * o.i8), fontSize[0] = Math.floor(.85 * ad0[0] * r), fontSize[1] = Math.floor(.85 * ad0[1] * r), i2[0] = aZ.e2.iA(1, fontSize[0]), i2[1] = aZ.e2.iA(1, fontSize[1]), g = ad1.length - 1; 0 <=
			g; g--) ad1[g] = this.measureText(u3(g) + "000", i2[0]);
		if (aaE = Math.floor(1 + .05 * r), ad2 = Math.floor(.2 * r), 0 < wa.length) {
			for (g = wa.length - 1; 0 <= g; g--) p = this.measureText(wa[g].eJ + "00", i2[1]), wa[g].width = p < ad1[g] ? ad1[g] : p;
			ad4()
		}
	}, this.cT = function() {
		0 !== tj && (4 === tj ? cR.cQ > ad3 && (tj = 0, 1 === aO.cd) && jB.a0t(a1.ks.o5[a1.bd].name, 3, 1, 9) : (1 === tj ? (0 === a8H && (ad4(), a8H = 1e-4), 1 <= (a8H += .002 * (cR.cQ - a8I)) && (acz = 0, tj = 2, a8H = 1), cR.cZ = !0) : 2 ===
			tj ? ((acz += (cR.cQ - a8I) / 1e3) > wa[0].aBh || 1 < acz && 1 < wa.length) && (tj = 3) : 3 === tj && ((a8H -= .002 * (cR.cQ - a8I)) <= 0 && (a8H = 0, wa.shift(), tj = 0 < wa.length ? 1 : 0), cR.cZ = !0), a8I = cR.cQ))
	}, this.measureText = function(eJ, i2) {
		return aB.font = i2, Math.floor(aB.measureText(eJ).width)
	}, this.ai = function(aT, g) {
		this.a0t(fZ.f1[aT], g, 1, 0 === g ? 3 : 7)
	}, this.a0t = function(eJ, ad7, ad8, aBh) {
		var p;
		eJ.length && (p = (p = this.measureText(eJ + "00", i2[1])) < ad1[ad7] ? ad1[ad7] : p, wa.push({
			eJ: eJ,
			width: p,
			ad7: ad7,
			ad8: ad8,
			aBh: aBh
		}), 0 === tj) && (a8H = 0, tj = 1, a8I = cR.cQ)
	}, this.k = function() {
		0 !== tj && 0 !== a8H && (a8H < 1 ? (aB.globalAlpha = a8H, ad9(), aB.globalAlpha = 1) : ad9())
	}
}

function c5(title, pZ, adB, a5U) {
	var ep, rE;
	this.show = function() {
		ep.show(), this.resize()
	}, this.eB = function() {
		ep.eB()
	}, this.resize = function() {
		ep.resize(), rE.resize()
	}, this.eC = function(aH) {
		2 === aH && ep.eD[0].eE()
	}, a5U = a5U || [new c6("⬅️ " + L(1), function() {
		bT.dN()
	})], ep = new dM(title, a5U), rE = new pY(ep.dP, pZ), adB && aZ.e2.textAlign(ep.dP.style, 1)
}

function na() {
	function xM(aF, a3, aG, od, xJ, xW) {
		if (!(aG < 1 || xJ < aG))
			for (var g = 0; g <= a3; g++) {
				var h1 = gq.xX(aF, aG);
				if (od(h1)) return h1 >> 2;
				aF += xW
			}
		return -1
	}

	function xR(aG, a3, aF, od, xI, xW) {
		if (!(aF < 1 || xI < aF)) {
			a3 = Math.max(a3, 0);
			for (var g = 0; g <= a3; g++) {
				var h1 = gq.xX(aF, aG);
				if (od(h1)) return h1 >> 2;
				aG += xW
			}
		}
		return -1
	}

	function xV(xL, xN, x6) {
		return -1 !== xN && (-1 === xL || gq.r6(xN, x6) < gq.r6(xL, x6)) ? xN : xL
	}
	this.aMB = function(x6) {
		return this.kK(x6, function(h1) {
			return h3.sv(h1)
		})
	}, this.aMC = function(x6) {
		return this.kK(x6, function(h1) {
			return h3.sp(h1, aO.b2)
		})
	}, this.kK = function(x6, od) {
		return function(x6, x9, od) {
			for (var gp = gq.wt(x6), gt = gq.wu(x6), xI = a1.a2 - 2, xJ = a1.jg - 2, xK = -1, bZ = 0; bZ < x9; bZ++) {
				var oQ = Math.max(gp - bZ, 1),
					oR = Math.max(gt - bZ, 1),
					oS = Math.min(gp + bZ, xI),
					oE = Math.min(gt + bZ, xJ),
					xL = xM(gp, oS - gp, gt - bZ, od, xJ, 1),
					xN = xM(gp - 1, gp - oQ - 1, gt - bZ, od, xJ, -1),
					oS = xM(gp, oS - gp, gt + bZ, od, xJ, 1),
					oQ = xM(gp - 1, gp - oQ - 1, gt + bZ, od, xJ, -1),
					xQ = xR(gt, oE - gt - 1, gp - bZ, od, xI, 1),
					xS = xR(gt - 1, gt - oR - 2, gp - bZ, od, xI, -1),
					oE = xR(gt, oE - gt - 1, gp + bZ, od, xI, 1),
					oR = xR(gt - 1, gt - oR - 2, gp + bZ, od, xI, -1);
				if (xK = xV(xK, xL, x6), xK = xV(xK, xN, x6), xK = xV(xK, oS, x6), xK = xV(xK, oQ, x6), xK = xV(xK, xQ, x6), xK = xV(xK, xS, x6), xK = xV(xK, oE, x6), 0 <= (xK = xV(xK, oR, x6)) && bZ * bZ >= gq.r6(xK, x6)) return xK
			}
			return -1
		}(x6, gq.xA(), od)
	}
}

function ds(adD) {
	var pa = document.createElement("div");
	this.br = pa, this.adE = adD, this.resize = function() {
		for (var a3 = adD.length, g = 1; g < a3; g++) aZ.e2.jV(adD[g], 4)
	};
	var g, a3 = adD.length;
	for (pa.style.width = "100%", pa.style.height = "2.7em", pa.style.marginTop = "0.6em", pa.style.border = "inherit", g = 0; g < a3; g++) adD[g].style.verticalAlign = "top", adD[g].style.width = (100 / a3).toFixed(2) + "%", adD[g].style.height =
		"100%", adD[g].style.fontSize = "0.75em", pa.appendChild(adD[g])
}

function nV() {
	this.aOJ = new s8
}

function a1j() {
	this.xF = function(player, id) {
		for (var adF = fZ.fD[player], a3 = adF.length, g = 0; g < a3; g++)
			if (gq.aYw(adF[g], id)) return !0;
		return !1
	}, this.aHJ = function(player, gz) {
		for (var xN, adG, h1, adF = fZ.fD[player], a3 = adF.length, p = a1.a2, adI = gq.wt(gz), adJ = gq.wu(gz), aHO = -1, min = a1.a2 * a1.a2 + a1.jg * a1.jg, id = h3.xE(gq.h2(gz)), g = 0; g < a3; g++)(adG = (adG = adI - (xN = (h1 = adF[g]) >>
			2) % p) * adG + (adG = adJ - ~~((.5 + xN) / p)) * adG) < min && gq.aYw(h1, id) && (min = adG, aHO = xN);
		return aHO
	}, this.qx = function(xL, xN) {
		for (var id = h3.xE(gq.h2(xN)), aIP = gq.aIQ, h1 = gq.h2(xL), adK = -1, g = 0; g < 4; g++) {
			var yc = h1 + aIP[g];
			h3.oF(yc) && h3.xE(yc) === id && (-1 === adK || gq.r6(gq.aId(yc), xN) < gq.r6(adK, xN)) && (adK = gq.aId(yc))
		}
		return adK
	}, this.abR = function(player, gz) {
		for (var aIP = gq.aIQ, h1 = gq.h2(gz), g = 0; g < 4; g++) {
			var yc = h1 + aIP[g];
			if (h3.h4(yc) && h3.sy(player, yc)) return !0
		}
		return !1
	}, this.aHD = function(player, gz) {
		for (var aIP = gq.aIQ, h1 = gq.h2(gz), g = 0; g < 4; g++) {
			var yc = h1 + aIP[g];
			if (h3.sl(yc)) return !0;
			if (h3.h4(yc)) {
				yc = h3.h5(yc);
				if (player !== yc && m1.r5(player, yc)) return !0
			}
		}
		return !1
	}, this.aa2 = function(gz) {
		for (var aIP = gq.aIQ, h1 = gq.h2(gz), g = 0; g < 4; g++) {
			var yc = h1 + aIP[g];
			if (h3.h4(yc)) {
				yc = h3.h5(yc);
				if (aZ.aa.b0(yc)) return yc
			}
		}
		return -1
	}, this.xY = function(h1) {
		if (h3.oF(h1))
			for (var aIP = gq.aIQ, g = 0; g < 4; g++)
				if (h3.sv(h1 + aIP[g])) return !0;
		return !1
	}, this.a3Z = function(player, id) {
		for (var ex = player << 3, ey = ex + a4.i.a5G[player], aCJ = a4.i.aCJ, aFK = a4.i.aFK, g = ex; g < ey; g++) {
			var aXL = aFK[g];
			if (aCJ[aXL] === id) return aXL
		}
		return -1
	}, this.aBo = function(player) {
		return 0 === a4.i.a5G[player] ? -1 : a4.i.aFK[player << 3]
	}, this.aCG = function(iW, iX) {
		var a3 = a4.i.a5;
		if (a3 < 1) return -1;
		for (var a6 = a4.i.a6, aFn = 80, aI4 = -1, g = 0; g < a3; g++) {
			var pk = gq.aYy(iW, iX, a6[g]);
			pk < aFn && (aFn = pk, aI4 = g)
		}
		return function(g, iW, iX) {
			if (g < 0) return;
			var adP = a4.i.a6[g],
				adQ = gq.aZ0(adP),
				adP = gq.aZ2(adP),
				g = 20 * (.9 + .1 * Math.log10(a4.i.aCI[g]));
			return g = Math.max(g, gq.aZ3(aZ.e2.aBM(.02, 1.7))), gT.ac4(gq.aYz(iW), gq.aZ1(iX), adQ, adP, g)
		}(aI4, iW, iX) ? aI4 : -1
	}, this.aVC = function(a20) {
		for (var a3 = a4.i.a5, aCJ = a4.i.aCJ, g = 0; g < a3; g++)
			if (aCJ[g] === a20) return gD.xH[2] = g, !0;
		return !1
	}, this.ap = function(player) {
		for (var ex = player << 3, ey = ex + a4.i.a5G[player], aFK = a4.i.aFK, aCI = a4.i.aCI, aM = 0, g = ex; g < ey; g++) aM += aCI[aFK[g]];
		return aM
	}, this.aVO = function(player, aV9) {
		aV9 = a4.i.aFI[aV9];
		return this.abR(player, aV9[aV9.length - 1])
	}, this.aVM = function(xL, xN, pk, adM) {
		var vU = gq.wt(xL),
			xL = gq.wu(xL),
			vW = gq.wt(xN),
			xN = gq.wu(xN),
			vW = (pk = Math.max(pk, 1), vW - vU),
			xN = xN - xL,
			vP = gT.gU(Math.abs(vW) * adM, pk),
			adM = gT.gU(Math.abs(xN) * adM, pk);
		return gq.h0(vU + Math.sign(vW) * vP, xL + Math.sign(xN) * adM)
	}, this.aWI = function(a4J, gz) {
		for (var a3 = a4J.length - 1, aF = gq.wt(gz), aG = gq.wu(gz), g = 0; g < a3; g++) {
			var xL = a4J[g],
				xN = a4J[g + 1],
				s = gq.wt(xL),
				xL = gq.wu(xL),
				w = gq.wt(xN),
				xN = gq.wu(xN);
			if (!(aF !== s && aF !== w && Math.sign(aF - s) === Math.sign(aF - w) || aG !== xL && aG !== xN && Math.sign(aG - xL) === Math.sign(aG - xN))) {
				if (s === w || xL === xN) return g;
				if (Math.abs(aF - s) === Math.abs(aG - xL) && Math.abs(aF - w) === Math.abs(aG - xN)) return g
			}
		}
		return -1
	}, this.a4B = function() {
		for (var adS = wO[0], a7 = a4.i.a7, a5 = a4.i.a5, bu = [], g = 0; g < a5; g++) aZ.aa.ql(adS, a7[g] >> 3) && bu.push(g);
		return bu
	}, this.abQ = function(player, a4J) {
		for (var ex = player << 3, ey = ex + a4.i.a5G[player], aFK = a4.i.aFK, aFI = a4.i.aFI, qj = a4J[0], qk = a4J[a4J.length - 1], g = ex; g < ey; g++) {
			var fg = aFI[aFK[g]];
			if (fg[0] === qj && fg[fg.length - 1] === qk) return !0
		}
		return !1
	}
}

function nU() {
	function adT(br) {
		abP(br), bT.c4(4, 5, new c5("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new c6("⬅️ " + L(1), function() {
				bT.dN()
			}), new c6("🔄 Reload", function() {
				c9.cA.cB()
			}, e8.rg)]))
	}

	function adY(br) {
		abP(br), bT.c4(4, 5, new c5(L(542), adX(br), !0))
	}

	function adX(br) {
		var eJ = " [" + br + "]";
		return 3249 === br || 1006 === br ? "No Internet / No Server Response / Server Restart" + eJ : 4527 === br ? "Player already in lobby" + eJ : 4577 === br ? "Your IP is banned." + eJ : 4530 === br ? "Lobby Timeout" + eJ : 4528 === br ?
			"Lobby Kick: Another login detected." + eJ : 4540 === br ? "You have been kicked." + eJ : 4495 === br ? "Account doesn't exist." : 4229 === br ? "Bad Internet / Unresponsive Client" + eJ : 4555 === br ? "This Account is blocked." + eJ :
			4580 === br ? "More Gold needed" + eJ : 4557 <= br && br <= 4560 || 4589 == br ? "Please try again later!" + eJ : "Unknown error" + eJ
	}

	function abP(br) {
		adU(br), bT.i.c8()
	}

	function adU(br) {
		4540 === br && dc.i.kM(br);
		var ns = bi.o4();
		6 === ns ? dc.i.kM(br) : bH.kF ? (bT.c7(), bH.hX(), dc.i.close(dc.i.os, 3256)) : 8 === ns && aO.aN9(!0)
	}
	this.c0 = [], this.pX = function(pD, br) {
		if (this.c0.push(br), 8 === bT.bU && 0 === pD)
			if (4211 === br) adT(br);
			else {
				if (bH.kF && (4495 === br || 4480 === br) && dc.i.os !== pD) return void bT.dN();
				if (8 !== bi.o4() && adU(), 4480 === br) return df.dm.aEb(), void bT.c4(4, 0, new c5(L(544), L(545), !0));
				var adW = 0;
				bT.kU() && 10 === bT.kU().pE && (adW = bT.kU().pE), bT.c4(4, adW, new c5(L(542), adX(br), !0))
			}
		else {
			adW = bi.o4();
			if (6 === adW) {
				if (4211 === br) return void adT(br);
				if (4215 !== br && 4516 !== br && 4527 !== br && 4533 !== br && 4528 !== br && !(4557 <= br && br <= 4560) && 4577 !== br && 4576 !== br) return void lH.aDk(pD)
			} else if (bH.kF) {
				if (pD !== dc.i.os) return
			} else {
				if (8 === adW) return void(pD !== dc.i.or || aO.cq || 1 !== aO.cd || aO.i6 || b3.dD(L(543, [br])));
				if (!(4579 <= br && br <= 4589)) return
			}
			adY(br)
		}
	}, this.pT = function(br) {
		this.c0.push(br), 8 === bi.o4() ? aO.cq || 1 !== aO.cd || b3.dD(L(543, [br])) : adY(br)
	}, this.c3 = function() {
		this.c0.push(3268), abP(3268)
	}
}

function aGE() {
	this.dg = {}, this.aKz = new Array(8), this.re = null, this.zd = null, this.aL8 = 0, this.ru = [0, 0], this.c8 = function() {
		bT.c4(5, 5)
	}, this.aGn = function(aQn) {
		aQn && (lH.aDg = aQn), bT.c7(), lH.d()
	}, this.rH = function() {
		bT.c4(0 === bi.o4() ? 5 : 0)
	}, this.aXb = function() {
		if (1 === df.dg.data[130].value) bT.c4(8, bT.kU().pE, new ev(24, {
			rR: df.dg.data[125].value,
			ex: df.dg.data[128].value,
			ey: df.dg.data[129].value
		}));
		else {
			for (var bu = (bu = df.dg.data[126].value.split(",")).slice(0, 10), g = 0; g < bu.length; g++) bu[g] = bu[g].trim().slice(0, 7).toUpperCase();
			1 === bu.length && 0 === bu[0].length && (bu = []), bT.c4(8, bT.kU().pE, new ev(23, {
				rR: df.dg.data[125].value,
				fr: bu
			}))
		}
	}, this.aGp = function(pE, target) {
		bT.c4(4, pE, new c5("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + dc.i.dd(
				"/privacy"), !1, [new c6("⬅️ " + L(1), function() {
				bT.c4(pE)
			}), new c6("✅ Accept", function() {
				df.dm.dn(140, 1), 0 === target ? bT.c4(2, pE) : bT.c4(8, pE, new ev(target))
			})]))
	}, this.a63 = function() {
		for (var g = 0; g < 8; g++) this.aKz[g] = hl.hm.hn(lh.hY(5));
		this.aKz[1] = "[" + this.aKz[1] + "]", 5 === bT.bU && (bT.kU().aGe.dn(this.aKz), bT.kU().resize())
	}, this.a8n = function(aq, p0, a2B) {
		aq = aZ.aa.a7i(aq, 1, 1e6);
		var adZ = Math.max(1, 1 + Math.floor(.01 * (aq - 100))),
			p0 = L(546, [p0]);
		return (p0 += "<br>") + L(547, [a2B]) + "<br>" + L(548, [adZ < 20 ? aq + adZ + "–" + (aq + 20) : aq + adZ]) + "<br>" + L(549, [aq])
	}
}

function mV() {
	var ns = 0;
	this.d = function() {
		lG.d(), ns = 0
	}, this.setState = function(ada) {
		ns = ada
	}, this.o4 = function() {
		return ns
	}, this.aTM = function() {
		this.setState(8), bT.c7()
	}, this.eC = function(br) {
		if (!a1.a72) return !1;
		if (!(cR.cQ < 400)) {
			if ("Enter" === br.key || "Escape" === br.key) {
				if (this.adb()) return !0;
				if ("Enter" === br.key) {
					if (0 === ns) return !0;
					if (7 === ns) return !0
				}
			}
			return !1
		}
	}, this.aAE = function() {
		lr.resize()
	}, this.adb = function() {
		return !!lr.eB()
	}, this.ia = function(aF, aG) {
		!a1.a72 || lr.ia(aF, aG) || 6 === ns && lH.ia(aF, aG) || lq.ia(aF, aG) || lC.ia(aF, aG)
	}, this.io = function(aF, aG) {
		!lC.aOs && lG.io(aF, aG, !0) || lC.io(aF, aG)
	}, this.click = function(aF, aG) {
		lC.aDL()
	}, this.im = function(aF, aG, deltaY) {}, this.aAF = function() {
		lG.a5b(), cR.cZ = !0
	}, this.k = function() {
		8 !== ns && 10 !== ns && (aB.imageSmoothingEnabled = !0, this.pp(), 0 !== ns && (lC.k(), lA.k(), this.aGx(), lq.k()), 0 !== ns && 6 === ns && lH.k(), lr.k(), bT.k())
	}, this.pp = function() {
		var add, adc;
		if (__fx.makeMainMenuTransparent) aB.clearRect(0, 0, o.p, o.r);
		else a1.a72 ? (adc = o.p / a1.a2, add = o.r / a1.jg, aB.setTransform(adc = add < adc ? adc : add, 0, 0, adc, Math.floor((o.p - adc * a1.a2) / 2), Math.floor((o.r - adc * a1.jg) / 2)), aB.drawImage(a1.a71, 0, 0), aB.setTransform(1, 0, 0,
			1, 0, 0), aB.fillStyle = e8.aDr) : aB.fillStyle = e8.jC, aB.fillRect(0, 0, o.p, o.r)
	}, this.aGx = function() {
		var aG = Math.floor(.3 * o.r),
			canvas = lI.qT("territorial.io"),
			w1 = (w1 = 1.75 * o.r / canvas.width) * canvas.width < .98 * o.p ? .98 * o.p / canvas.width : w1,
			aF = (aB.globalAlpha = .15, aB.imageSmoothingEnabled = !1, Math.floor(.5 * (o.p - w1 * canvas.width))),
			aF = Math.floor(aF / w1),
			aG = Math.floor(aG - .5 * canvas.height * w1),
			aG = Math.floor(aG / w1);
		aB.setTransform(w1, 0, 0, w1, aF, aG), aB.drawImage(canvas, aF, aG), aB.setTransform(1, 0, 0, 1, 0, 0), aB.globalAlpha = 1, aB.imageSmoothingEnabled = !0
	}
}
bn(), self.aiCommand746 = function(aq) {
	0 === aq ? hU() : 1 !== aq || !c9 || 1 !== c9.id || c9.eK < 14 || ei.hV()
}, setTimeout(hU, 1e4), window.onload = function() {
	hU()
};