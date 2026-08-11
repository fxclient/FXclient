var z5, mn, z6, z7, w, bz, fq, mh, a2a, kH, a2b, a2c, a2d, iX, cp, iU, iP, iW, gc, gp, iT, iO, iR, iQ, iS, iZ, iL, iN, cA, iH, n0, ly, mD, iY, ef, a2e, a2f, sd, xv, en, mb, mB, fk, ms, a2g, kN, a2h, uu, a2i, cw, bw, eT, qT, qV, y, a2j, a2k, a2l, qz,
	a2m, gw, a2n, a2o, hv, cs, lo, aB, dK, iV, hQ, hb, hc, j8, ft, a2p, h6, d7, io, kA, g6, er, a2q, ma, qM, c2, v0, br, xy, cy, iJ, dW, iM, a2r, kX, kg, dk, ch, ck, cm, eb, go, cZ, cE, d1, a2s, a2t, mN, a2u, bf, a2v, a2w, vw, a2x, nI, iB, fD, jv,
	ju, jw, fE, eh, t1, nT, nS, nU, nm, nj, nF, nW, aX1, nr, aX2, aX3, aX4, nQ, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "1em", "span",
		"0.5em", "email", "Data", " / ", "territorial.io", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined", "middle", "break-word", "50%",
		"0.6em", "underline", "text", "scroll", "pointer", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave", "inline-block",
		"game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "⚠️ ", "wheel",
		"translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Reload",
		"Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute",
		"1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160",
		" -> ", "   Contest"
	];

function a() {
	var b, c, d, e = ["wss://", "/s50/", "/s51/", "/s52/"],
		f = 0;

	function a2() {
		y.z.a2(b, c)
	}

	function a3(a6) {
		y.a7.a8(b, new Uint8Array(a6.data))
	}

	function a5() {}

	function a4(a6) {
		y.z.a4(b, a6)
	}
	this.g = function(h, i, j) {
		b = h, c = i,
			function(j) {
				j = w.x ? "ws://localhost:" + (7130 + b) + "/" : j ? e[0] + "game.territorial.io/x0" + b + "/" : e[0] + y.z.a0[b] + e[1 + w.a1];
				(d = new WebSocket(j)).binaryType = "arraybuffer", d.onopen = a2, d.onmessage = a3, d.onclose = a4, d.onerror = a5
			}(j)
	}, this.l = function() {
		return d.readyState === d.CONNECTING
	}, this.m = function() {
		return d.readyState === d.OPEN
	}, this.n = function() {
		return f
	}, this.o = function() {
		f = 1
	}, this.p = function() {
		return this.l() || this.m()
	}, this.q = function(i) {
		c = i
	}, this.r = function() {
		return c
	}, this.send = function(s) {
		this.m() && d.send(s)
	}, this.close = function(t) {
		this.p() && (this.u(), d.close(t))
	}, this.u = function() {
		d.onopen = null, d.onmessage = null, d.onclose = null, d.onerror = null
	}
}

function a9() {
	var aA = aB.color;
	this.aC = aA.aD(0, 0, 0), this.aE = aA.aF(0, 0, 0, .7), this.aG = aA.aF(0, 0, 0, .5), this.aH = aA.aF(0, 0, 0, .85), this.aI = aA.aF(0, 0, 0, .75), this.aJ = aA.aF(0, 0, 0, .6), this.aK = aA.aF(0, 0, 0, .35), this.aL = aA.aD(255, 255, 255), this
		.aM = aA.aF(255, 255, 255, .3), this.aN = aA.aF(255, 255, 255, .6), this.aO = aA.aF(255, 255, 255, .4), this.aP = aA.aF(255, 255, 255, .25), this.aQ = aA.aF(255, 255, 255, .85), this.aR = aA.aF(255, 255, 255, .75), this.aS = aA.aF(255, 255,
			255, .15), this.aT = aA.aF(255, 255, 255, .11), this.aU = aA.aD(128, 128, 128), this.aV = aA.aF(64, 64, 64, .75), this.aW = aA.aF(88, 88, 88, .83), this.aX = aA.aF(60, 60, 60, .85), this.aY = aA.aF(80, 60, 60, .85), this.aZ = aA.aD(170,
			170, 170), this.aa = aA.aD(200, 235, 245), this.ab = aA.aD(30, 255, 30), this.ac = aA.aD(0, 200, 0), this.ad = aA.aD(128, 255, 128), this.ae = aA.aF(10, 65, 10, .75), this.af = aA.aF(0, 255, 0, .6), this.ag = aA.aF(0, 255, 0, .5), this
		.ah = aA.aF(0, 200, 0, .5), this.ai = aA.aF(0, 100, 0, .75), this.aj = aA.aF(0, 60, 0, .8), this.ak = aA.aF(0, 255, 0, .3), this.al = aA.aF(0, 180, 0, .6), this.am = aA.aF(0, 120, 0, .85), this.an = aA.aD(0, 120, 0), this.ao = aA.aF(0, 70, 0,
			.85), this.ap = aA.aD(190, 230, 190), this.aq = aA.aD(0, 255, 0), this.ar = aA.aD(255, 120, 120), this.at = aA.aD(255, 160, 160), this.au = aA.aD(255, 70, 70), this.av = aA.aD(230, 0, 0), this.aw = aA.aF(220, 0, 0, .6), this.ax = aA.aF(
			255, 100, 100, .8), this.ay = aA.aF(100, 0, 0, .85), this.az = aA.aF(60, 0, 0, .85), this.b0 = aA.aF(200, 0, 0, .6), this.b1 = aA.aF(120, 0, 0, .85), this.b2 = aA.aD(255, 70, 10), this.b3 = aA.aD(230, 190, 190), this.b4 = aA.aD(255, 0,
		0), this.b5 = aA.aD(255, 0, 255), this.b6 = aA.aF(60, 0, 60, .85), this.b7 = aA.aF(0, 60, 60, .85), this.b8 = aA.aF(10, 60, 60, .9), this.b9 = aA.aF(0, 96, 96, .75), this.bA = aA.aD(0, 255, 255), this.bB = aA.aD(160, 160, 255), this.bC = aA
		.aF(0, 40, 90, .75), this.bD = aA.aF(0, 0, 255, .6), this.bE = aA.aD(200, 200, 255), this.bF = aA.aF(50, 50, 255, .83), this.bG = aA.aF(20, 90, 150, .75), this.bH = aA.aF(10, 10, 120, .75), this.bI = aA.aD(255, 120, 100), this.bJ = aA.aF(255,
			255, 0, .5), this.bK = aA.aF(255, 255, 150, .2), this.bL = aA.aD(255, 255, 0), this.bM = aA.aD(255, 255, 200), this.bN = aA.aF(200, 200, 0, .6), this.bO = aA.aF(140, 120, 0, .75), this.bP = aA.aF(180, 160, 40, .75), this.bQ = aA.aF(70,
			50, 20, .85), this.bR = aA.aF(30, 30, 0, .85), this.bS = aA.aF(60, 60, 0, .85), this.bT = aA.aD(255, 255, 100), this.bU = aA.aD(255, 255, 140), this.bV = aA.aF(255, 140, 0, .75), this.bW = aA.aF(70, 40, 0, .85), this.bX = aA.aD(255, 150,
			0), this.bY = aA.aF(255, 200, 80, .85), this.bZ = aA.aF(0, 0, 0, 0), this.ba = aA.aF(255, 255, 255, 0), this.bb = aA.aF(254, 254, 254, 0)
}

function bc() {
	this.bd = function(h) {
		if ((be = bf.bg.be[h]) < 2) return !1;
		var bh = bf.z.bi[h],
			bj = 9 === bh.bk ? 333 : 512,
			be = Math.min(be, bj);
		8 === bh.bk && (be -= be % 2);
		bj = bf.bg.bl[h].splice(0, be), bf.bg.be[h] -= be, be = function(bm) {
			if (bf.cH)
				for (var cI = bm.length, c9 = bf.cH.c9, c8 = 0; c8 < cI; c8++)
					if (bm[c8].c9 === c9) return c8;
			return -1
		}(bj);
		return -1 === be ? (bf.bg.bp = bf.bg.bp.concat(bj), 1e3 < bf.bg.bp.length && bf.bg.bp.splice(0, bf.bg.bp.length - 1e3), bf.z.bq += 29 === br.bs && bf.z.bt[0] === h && 1 === bf.z.bt[2], !1) : (8 === bh.bk && (bh.bu = (bh.bu + (be >> 1)) %
			1024, h = be - be % 2, be %= 2, bj = bj.slice(h, 2 + h)), bw.g(bh, bj, be), !0)
	}, this.bx = function(bh, bm, bn) {
		var by = bz.data = new c0,
			c6 = (by.spawningSeed = bh.spawningSeed, bh.bk < 7 ? (by.gameMode = 1, by.numberTeams = bh.bk + 2) : 9 === bh.bk ? (by.gameMode = by.isZombieMode = 1, by.numberTeams = 2) : (by.gameMode = 0, by.battleRoyaleMode = 7 === bh.bk ? 0 :
				10 === bh.bk ? 1 : 2), by.selectedPlayer = bn, by.isContest = bh.c1, by.mapType = c2.c3(bh.c4) ? 0 : 1, c2.c5(by, bh.c4), by.mapSeed = bh.mapSeed, by.humanCount = bm.length);
		by.selectableSpawn = 1 === by.gameMode || c6 < 100, by.colorsData = new Uint32Array(c6), by.playerNamesData = new Array(c6), by.c7 = new Uint32Array(c6);
		for (var c8 = 0; c8 < c6; c8++) by.colorsData[c8] = bm[c8].color, by.playerNamesData[c8] = bm[c8].username, by.c7[c8] = bm[c8].c9;
		if (2 === by.battleRoyaleMode)
			for (by.elo = new Uint16Array(c6), c8 = 0; c8 < c6; c8++) by.elo[c8] = bm[c8].elo;
		cA.setState(8), c2.cB(bh.c4, by.mapSeed), bz.cC(), bz.cD = 2, cE.cF.cG = -1
	}
}

function cJ() {
	var cK, cL, cM, cW;

	function cO(id) {
		0 !== cZ.id || d1.d2.data[140].value ? 0 === id ? br.cP(8, 1, new d4(16)) : br.cP(2) : br.z.d3(br.bs, 0 === id ? 16 : 0)
	}
	this.show = function() {
		cZ.cb.setState(12), cK.show(), this.resize(), this.dI()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), cL.resize()
	}, this.dI = function() {
		8 === cA.cg() && (2 <= ch.ci ? cM[2].dJ === dK.aX && cM[2].dL(0) : cM[2].dJ !== dK.aX && cM[2].dL(dK.aX), !bz.co && cp.cq(bz.cr) ? cM[1].dJ === dK.aX && cM[1].dL(0) : cM[1].dJ !== dK.aX && cM[1].dL(dK.aX), !bz.co && cw.cx(bz.cr) ? cM[0]
			.dJ === dK.aX && cM[0].dL(0) : cM[0].dJ !== dK.aX && cM[0].dL(dK.aX))
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cM = [new cN(L(0), function() {
		cO(0)
	}), new cN(L(1), function() {
		br.cP(16)
	}), new cN(L(2), function() {
		br.cP(17)
	}), new cN(L(3), function() {
		br.z.cQ()
	}, 0, 0, 1), new cN(L(4), function() {
		br.cP(3, 1)
	}), new cN(L(5), function() {
		br.cP(18)
	}), new cN(L(6), function() {
		br.cP(31)
	}), new cN(L(7), function() {
		br.z.cR(2)
	}), new cN(L(8), function() {
		cO(1)
	}), new cN("🔒 " + L(9), function() {
		br.cP(32)
	}), new cN(L(10), function() {
		var d5, d6;
		(d5 = []).push(["Wiki", (d6 = "https://territorial.io/") + "wiki/gold"]), d5.push(["Team Games", d6 + "log/team"]), d5.push(["Battle Royale Games", d6 + "log/br"]), d5.push(["1v1 Games", d6 + "log/1v1"]), d5.push(["Zombie Games",
			d6 + "log/zombies"
		]), d5.push(["Changelog", d6 + "changelog"]), 2 !== cZ.id && d5.push(["Android App", d7.d8]), 1 !== cZ.id && d5.push(["iOS App", d7.d9]), 0 === cZ.id && d5.push(["Patreon", d7.dA]), d5.push(["Terms", d7.dB]), d5.push([
			"Privacy", d7.dC
		]), br.cP(4, 1, new dD(L(10), aB.dE.dF(d5), !1, [new cN("⬅️ " + L(14), function() {
			br.cP(1)
		})]))
	}), new cN(L(11), function() {
		br.cP(4, 1, new dD(L(11), w.ca + "<br>" + y.z.dG("/changelog") + "<br><br><w>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></w>", !0, [new cN("⬅️ " + L(14),
				function() {
					br.cP(1)
				})]))
	}), new cN(L(12), function() {
		br.cP(4, 1, new dD(L(12), L(21) + "<br>" + L(22), !1, [new cN("⬅️ " + L(14), function() {
			br.cP(1)
		}), new cN(L(23), function() {
			cZ.cb.dH(), br.cP(1)
		})]))
	}), new cN("👁️ " + L(13), function() {
		cZ.cb.cV(), br.cP(4, 1, new dD(L(24), L(25) + " " + y.z.dG("/privacy"), !1, [new cN("⬅️ " + L(14), function() {
			br.cP(1)
		})]))
	})], cW = [new cN("⬅️ " + L(14), function() {
		br.z.cX()
	})], 8 === cA.cg() && (cM.unshift(new cN(L(17), function() {
		br.cP(30)
	})), cM.unshift(new cN(L(18), function() {
		2 <= ch.ci && (br.cj(), ck.cl(), cm.cn = !0)
	}, 0, 1)), cM.unshift(new cN(L(19), function() {
		!bz.co && cp.cq(bz.cr) && (cs.ct.cu(), br.cj(), cp.cv) && cp.cl()
	}, 0, 1)), cM.unshift(new cN(L(20), function() {
		!bz.co && cw.cx(bz.cr) && (cy.cz(2), cs.ct.d0(), br.cj(), cp.cv) && cp.cl()
	}, 0, 1))), 1 === cZ.id && 5 <= cZ.ca && cM.push(new cN(L(15), function() {
		cZ.cb.cc()
	})), cK = new cd(L(16), cW), cL = new ce(cM, cK.cf)
}

function dP() {
	this.dQ = [L(26), L(27), L(28), L(29), L(30), L(31), L(32), L(33), L(34), L(35), L(36), L(37), L(38), L(39), L(40), L(41)];
	var dR = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.dS = new Array(dR.length), this.g = function() {
		var dT = d1.d2.data[155].value.split(";"),
			dU = dT.length;
		if (function() {
				for (var cI = dR.length, c8 = 0; c8 < cI; c8++) dW.dS[c8] = dR[c8]
			}(), !(dU > dR.length))
			for (var c8 = 0; c8 < dU; c8++) dT[c8].length && (this.dS[c8] = dT[c8])
	}, this.dX = function(h, code) {
		for (var dS = this.dS, dY = dR, dZ = (dS[h] = code, ""), cI = dS.length, da = [], c8 = 0; c8 < cI; c8++) da.push(dS[c8] === dY[c8] ? "" : dS[c8]);
		cI--;
		for (c8 = 0; c8 < cI; c8++) dZ += da[c8] + ";";
		d1.db.dc(155, dZ += da[cI])
	}, this.dd = function() {
		d1.db.dc(155, ""), this.g()
	}, this.aA = function(code, h) {
		return code === this.dS[h] || code === this.dS[h + 1]
	}
}

function de(df, dg) {
	var dh = document.createElement("div");
	this.di = dh, this.resize = function() {
		dh.style.padding = aB.dE.dj(dk.dl), dh.style.lineHeight = aB.dE.dj(aB.dE.dm(.035))
	}, df.style.overflowX = "hidden", df.style.overflowY = "auto", dh.innerHTML = dg, df.appendChild(dh)
}

function dn() {
	this.dp = function(dq, dr) {
		return Math.floor((dq + .5) / dr)
	}, this.ds = function(dq, dr) {
		return Math.floor(dq * (dr + .5))
	}, this.sqrt = function(dt) {
		return ~~Math.sqrt(dt + .5)
	}, this.pow = function(a6) {
		return Math.floor(Math.pow(2, a6) + .5)
	}, this.du = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.dv = function(dw, dx, dy) {
		return Math.max(Math.min(dw, dx), dy)
	}, this.dz = function(e0, e1, e2, e3) {
		e2 -= e0, e0 = e3 - e1, e3 = 0;
		return 0 == e2 ? e3 = 0 <= e0 ? Math.PI : 0 : (e3 = Math.atan(e0 / e2), e3 += 0 < e2 ? .5 * Math.PI : 1.5 * Math.PI), e3
	}, this.log2 = function(dt) {
		return Math.floor(!!dt * (1 + Math.log2(dt + .5)))
	}, this.log10 = function(dt) {
		return Math.floor(Math.log10(dt + .5))
	}, this.e7 = function(e8, e9, eA, eB, eC) {
		return eA - eC < e8 && e8 < eA + eC && eB - eC < e9 && e9 < eB + eC
	}, this.eD = function(eE, eF) {
		return eE * eE + eF * eF
	}
}

function eG() {
	var gap, eH = !1,
		eI = 0,
		eJ = 0,
		eK = 0,
		canvas = null,
		eL = null,
		eM = null;

	function eY() {
		for (var c8 = bz.eO; 0 <= c8; c8--) eM[c8] = 0;
		for (c8 = en.ep - 1; 0 <= c8; c8--) eM[eb.eo[en.em[c8]]] += ef.eg[en.em[c8]];
		eH = !0
	}

	function eV() {
		for (var f0, ex = 0, cI = 0, aA = Math.floor(eJ / 2), ey = Math.floor(eK / 2), ez = 1.5 * Math.PI, c8 = bz.eO; 0 <= c8; c8--) cI += eM[c8], 0 === eM[c8] && ex++;
		if (eH = !1, eL.clearRect(0, 0, eJ, eJ), 0 < cI)
			if (ex === bz.eO) {
				for (c8 = bz.eO; 0 <= c8; c8--)
					if (0 < eM[c8]) {
						! function(c8, aA, ey) {
							eL.fillStyle = eb.f8[eb.ec[c8]], eL.beginPath(), eL.arc(aA, aA, ey, 0, 2 * Math.PI), eL.fill()
						}(c8, aA, ey);
						break
					}!
				function(aA) {
					var fontSize = aA / 3;
					eL.font = aB.dE.f9(1, fontSize), eL.fillStyle = dK.aL, eL.fillText("100%", aA, aA + .1 * fontSize)
				}(aA)
			} else {
				for (c8 = 0; c8 <= bz.eO; c8++) 0 < eM[c8] && (! function(c8, aA, ey, ez, f0) {
					eL.fillStyle = eb.f8[eb.ec[c8]], eL.beginPath(), eL.arc(aA, aA, ey, ez, f0), eL.lineTo(aA, aA), eL.fill()
				}(c8, aA, ey, ez, f0 = ez + 2 * Math.PI * eM[c8] / cI), function(aA, ey, ez, f0) {
					var dt = (f0 - ez) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * ey * Math.min(dt, .37);
					fontSize < 8 || (ez = (ez + f0) / 2, f0 = (__fx.settings.detailedTeamPercentage ? (100 * dt).toFixed(2) : Math.floor(100 * dt + .5)) + "%", ey *= .525 - Math.max(.6 * (dt - .7), 0), eL.font = aB.dE.f9(1, fontSize), eL
						.fillStyle = dK.aL, eL.fillText(f0, aA + Math.cos(ez) * ey, aA + Math.cos(ez + 1.5 * Math.PI) * ey))
				}(aA, ey, ez, f0), 0 !== c8 && f6(aA, ey, ez), ez = f0);
				f6(aA, ey, 1.5 * Math.PI)
			}!
		function(aA, ey) {
			eL.beginPath(), eL.arc(aA, aA, ey, 0, 2 * Math.PI), eL.stroke()
		}(aA, ey)
	}

	function f6(aA, ey, fA) {
		eL.beginPath(), eL.moveTo(aA, aA), eL.lineTo(aA + Math.cos(fA) * ey, aA + Math.cos(fA + 1.5 * Math.PI) * ey), eL.stroke()
	}
	this.g = function() {
		if (bz.eN) {
			eI = 0, eM = new Uint32Array(bz.eO + 1);
			for (var c8 = bz.eO; 0 <= c8; c8--) eM[c8] = 0;
			for (c8 = en.ep - 1; 0 <= c8; c8--) eM[eb.eo[en.em[c8]]] += 1;
			this.resize()
		} else eM = eL = canvas = null
	}, this.eQ = function() {
		return eJ
	}, this.resize = function() {
		bz.eN && (eJ = Math.floor(.95 * (cZ.cb.eR() && !bz.eS ? .18 * eT.min : .13 * eT.eU)), eJ = (eJ *= 1 + (.5 + .2 * cZ.cb.eR()) * bz.eS) + eJ % 2, gap = Math.max(1, .015 * eJ), eK = Math.floor(eJ - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = eJ, canvas.height = eJ, (eL = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, eL.strokeStyle = dK.aL, aB.dE.textAlign(eL, 1), aB.dE.textBaseline(eL, 1), eV())
	}, this.eW = function(eX) {
		eX && eY();
		var ee, eX = this.ea();
		return eb.ec[eX] || (eX = function() {
			for (var eZ = -1, c8 = bz.eO; 1 <= c8; c8--)(-1 === eZ || eM[c8] > eM[eZ]) && (eZ = c8);
			return eZ
		}(), ee = ef.eg[eh[0]], -1 !== eX && eM[eX] > ee) ? eM[eX] : ee
	}, this.ei = function() {
		return eI = 31, this.dI(), this.ea()
	}, this.ea = function() {
		for (var eZ = 0, c8 = bz.eO; 0 < c8; c8--) eM[c8] > eM[eZ] && (eZ = c8);
		return eZ
	}, this.ej = function(ek) {
		for (var el = 0, em = en.em, eo = eb.eo, cI = en.ep, eq = er.eq, c8 = 0; c8 < cI; c8++) {
			var es = em[c8];
			eo[es] === ek && (eq[el++] = es)
		}
		er.et[0] = el
	}, this.eu = function(ek) {
		for (var el = 0, em = en.em, eo = eb.eo, cI = en.ep, eq = er.eq, c8 = 0; c8 < cI; c8++) {
			var es = em[c8];
			eo[es] !== ek && (eq[el++] = es)
		}
		er.et[0] = el
	}, this.ev = function() {
		for (var el = 0, c8 = bz.eO; 0 <= c8; c8--) el += 0 < eM[c8];
		return el
	}, this.dI = function() {
		bz.eN && 32 <= ++eI && (eI = 0, eY())
	}, this.ew = function() {
		bz.eN && eH && eV()
	}, this.fC = function() {
		bz.eN && (bz.eS ? fD.drawImage(canvas, dk.gap, dk.gap) : fD.drawImage(canvas, dk.gap, fE + 2 * dk.gap))
	}
}

function fF() {
	var cK, fG, fL, fH = -1;
	this.show = function() {
		cK.show(), this.resize(), fH = d1.d2.data[125].value
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), fG.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(L(42), [new cN("⬅️ " + L(14), function() {
		fH !== d1.d2.data[125].value ? br.z.cQ() : br.fI(13)
	})]), fG = new fJ(cK.cf, ((fL = []).push(function() {
		var fQ = new fR,
			fU = (fQ.fS(L(43)), fQ.fT(L(44)), new cN(L(45), function() {
				d1.db.dc(130, 0), br.z.cQ()
			}, 0, 0, 1)),
			fV = new fW(d1.d2.data[126], 0, function() {
				fU.button.click()
			});
		return fQ.fX(fV), fV.a6.placeholder = "a,b,c", fV.a6.style.marginTop = "0.5em", fQ.fX(new fY([fU.button])), fQ
	}()), fL.push(function() {
		var fQ = new fR,
			fU = new cN(L(45), function() {
				d1.db.dc(130, 1), br.z.cQ()
			}, 0, 0, 1),
			fZ = new fW(d1.d2.data[129], 1, function() {
				fZ.a6.focus()
			}),
			fa = new fW(d1.d2.data[128], 1, function() {
				fU.button.click()
			});
		return fQ.fS(L(46)), fQ.fX(fa), fa.a6.style.marginBottom = "0.5em", fQ.fS(L(47)), fQ.fX(fZ), fQ.fX(new fY([fU.button])), fQ
	}()), fL.push(function() {
		var fQ = new fR;
		return fQ.fS(L(48)), d1.d2.data[125].fb = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], fQ.fc(new fd(d1.d2.data[125])), fQ
	}()), fL.push(function() {
		var fQ = new fR;
		return fQ.fS(L(49)), fQ.fX(new fe(d1.d2.data[127], L(50))), fQ
	}()), fL))
}

function ff() {
	var size, fg;
	this.g = function() {
		size = bz.fh, fg = new Uint16Array(bz.fi);
		for (var fj = bz.fj, c8 = bz.fh - 1; 0 <= c8; c8--) fg[c8] = fj + c8
	}, this.dI = function() {
		fk.fl.dI();
		for (var c8 = size - 1; 0 <= c8; c8--)
			if (0 === ef.fo[fg[c8]]) {
				dq = void 0;
				var dq = c8;
				size--, fg[dq] = fg[size]
			} else fq.dI(fg[c8])
	}, this.fn = function(es) {
		fg[size++] = es
	}
}

function fr() {
	this.dI = function(s) {
		var id, dw, fs;
		for (ft.g(s), ft.h += 2, fs = 8 * ft.size; ft.h + 8 <= fs;) id = ft.fu(4), dw = ft.fu(9), 0 === id ? this.fv(id, dw, ft.fu(22)) : 1 === id ? this.fv(id, dw, ft.fu(10), ft.fu(10)) : 2 === id ? this.fv(id, dw, ft.fu(10), ft.fu(9)) : 3 ===
			id ? this.fv(id, dw, ft.fu(10), ft.fu(27)) : 4 === id ? this.fv(id, dw, ft.fu(10), ft.fu(16)) : 5 === id || 6 === id ? this.fv(id, dw, ft.fu(10)) : 7 === id ? this.fv(id, dw, ft.fu(1)) : 10 === id ? this.fv(id, dw, ft.fu(20), ft.fu(
				22)) : this.fv(id, dw)
	}, this.fw = [], this.fx = function() {
		for (var fz = 0, g0 = 0, g1 = 0, g2 = 0, g3 = 0, g4 = 0, c8 = 0; c8 < 512; c8++) fz += ef.fo[c8], g0 += ef.eg[c8], g1 += ef.g5[c8], g2 += g6.z.g7[c8];
		g3 += g6.z.g8, g4 += en.ep, this.fw.push(g1 % 1073741824 * 4 + (fz + g0 + g2 + g3 + g4) % 4)
	}, this.fv = function(id, dw, dx, dy) {
		0 === id ? cs.g9.gA(dw, dx) : 1 === id ? cs.g9.gB(dw, dx, dy) : 2 === id ? cs.g9.gC(dw, dx, dy) : 3 === id ? cs.g9.gD(dw, dx, dy) : 4 === id ? cs.g9.gE(dw, dx, dy) : 5 === id ? cs.g9.gF(dw, dx) : 6 === id ? cs.g9.gG(dw, dx) : 7 === id ?
			cs.g9.gH(dw, dx) : 8 === id ? cs.g9.cu(dw) : 9 === id ? cs.g9.gI(dw) : 10 === id && cs.g9.gJ(dw, dx >> 10, dy, dx % 1024)
	}
}

function gK() {
	var gL, gM, gN, gO, gP, gQ, fontSize, gR, gS, gT, gU, canvas, eL, gV, gW;

	function gY(c8) {
		return L(0 === c8 ? 51 : 1 === c8 ? 52 : 2 === c8 ? 53 : 54)
	}

	function gn() {
		bz.eN ? fE + 4 * dk.gap + gP + go.eQ() > gp.e3 ? fD.drawImage(canvas, 2 * dk.gap + go.eQ(), fE + 2 * dk.gap) : fD.drawImage(canvas, dk.gap, fE + 3 * dk.gap + go.eQ()) : fD.drawImage(canvas, dk.gap, fE + 2 * dk.gap)
	}

	function gZ() {
		canvas.width = gL[0].width + gT, canvas.height = gP + gT, (eL = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, gL[0].width + gT, gP + gT), eL.translate(Math.floor(gT / 2), Math.floor(gT / 2)), eL.lineWidth = gT, eL.fillStyle = 1 === gL[0].gl ? dK.aQ : dK.aI, gq(), eL.fill(), eL.strokeStyle = 1 === gL[0].gl ? dK.aC : dK.aL,
		gq(), eL.stroke(), aB.dE.textAlign(eL, 1), aB.dE.textBaseline(eL, 1), eL.fillStyle = 1 === gL[0].gl ? dK.aC : dK.aL, eL.font = gQ[0], eL.fillText(gY(gL[0].gk), Math.floor(gL[0].width / 2), Math.floor(.72 * gR[0] * gP)), eL.font = gQ[1], eL
			.fillText(gL[0].dZ, Math.floor(gL[0].width / 2), Math.floor((gR[0] + .48 * gR[1]) * gP))
	}

	function gq() {
		eL.beginPath(), eL.moveTo(gU, 0), eL.lineTo(gL[0].width - gU, 0), eL.lineTo(gL[0].width, gU), eL.lineTo(gL[0].width, gP - gU), eL.lineTo(gL[0].width - gU, gP), eL.lineTo(gU, gP), eL.lineTo(0, gP - gU), eL.lineTo(0, gU), eL.closePath()
	}
	this.g = function() {
		gM = 4, gN = gO = gV = 0, gL = [], gQ = new Array(2), fontSize = new Array(2), (gR = new Array(2))[0] = .3, gR[1] = .7, gS = new Array(4), canvas = document.createElement("canvas"), gW = cm.gX + 2e3, this.resize()
	}, this.resize = function() {
		var c8, eJ;
		for (gP = Math.floor((cZ.cb.eR() ? .062 : .047) * eT.eU), fontSize[0] = Math.floor(.85 * gR[0] * gP), fontSize[1] = Math.floor(.85 * gR[1] * gP), gQ[0] = aB.dE.f9(1, fontSize[0]), gQ[1] = aB.dE.f9(1, fontSize[1]), c8 = gS.length - 1; 0 <=
			c8; c8--) gS[c8] = this.measureText(gY(c8) + "000", gQ[0]);
		if (gT = Math.floor(1 + .05 * gP), gU = Math.floor(.2 * gP), 0 < gL.length) {
			for (c8 = gL.length - 1; 0 <= c8; c8--) eJ = this.measureText(gL[c8].dZ + "00", gQ[1]), gL[c8].width = eJ < gS[c8] ? gS[c8] : eJ;
			gZ()
		}
	}, this.dI = function() {
		0 !== gM && (4 === gM ? cm.gX > gW && (gM = 0, 1 === bz.gb) && gc.gd(c2.ge.gf[c2.c4].name, 3, 1, 9) : (1 === gM ? (0 === gN && (gZ(), gN = 1e-4), 1 <= (gN += .002 * (cm.gX - gV)) && (gO = 0, gM = 2, gN = 1), cm.cn = !0) : 2 === gM ? ((
			gO += (cm.gX - gV) / 1e3) > gL[0].gm || 1 < gO && 1 < gL.length) && (gM = 3) : 3 === gM && ((gN -= .002 * (cm.gX - gV)) <= 0 && (gN = 0, gL.shift(), gM = 0 < gL.length ? 1 : 0), cm.cn = !0), gV = cm.gX))
	}, this.measureText = function(dZ, gQ) {
		return fD.font = gQ, Math.floor(fD.measureText(dZ).width)
	}, this.gh = function(gi, c8) {
		this.gd(ef.gj[gi], c8, 1, 0 === c8 ? 3 : 7)
	}, this.gd = function(dZ, gk, gl, gm) {
		var eJ;
		dZ.length && (eJ = (eJ = this.measureText(dZ + "00", gQ[1])) < gS[gk] ? gS[gk] : eJ, gL.push({
			dZ: dZ,
			width: eJ,
			gk: gk,
			gl: gl,
			gm: gm
		}), 0 === gM) && (gN = 0, gM = 1, gV = cm.gX)
	}, this.fC = function() {
		0 !== gM && 0 !== gN && (gN < 1 ? (fD.globalAlpha = gN, gn(), fD.globalAlpha = 1) : gn())
	}
}

function gr() {
	var input;

	function gs(a6) {
		(a6 = a6.target.files) && 0 < a6.length && gw.gx(a6[0])
	}

	function h1(a6) {
		var aA = new Image;
		aA.onload = h2, aA.src = a6.target.result
	}

	function h2(a6) {
		var a6 = a6.target,
			eJ = a6.width,
			gP = a6.height,
			h4 = d1.d2.data[162].value,
			max = Math.min(c2.h5, h4),
			h4 = (max = cZ.id || h6.h7() ? Math.min(1400, h4) : max) / Math.max(eJ, gP);
		if (h4 < 1 && (eJ = Math.floor(h4 * eJ + .125), gP = Math.floor(h4 * gP + .125)), max < eJ || max < gP || eJ < 10 || gP < 10) h4 = "Invalid Image Dimensions!", cZ.hA ? cZ.hA.showToast(h4) : alert(h4);
		else {
			for (var max = document.createElement("canvas"), h4 = (max.width = eJ, max.height = gP, max.getContext("2d")), hC = document.createElement("canvas"), hD = (hC.width = a6.width, hC.height = a6.height, hC.getContext("2d")), a6 = (hD
					.drawImage(a6, 0, 0), hD.getImageData(0, 0, hC.width, hC.height)), hD = h4.createImageData(eJ, gP), src = a6.data, hG = hD.data, hH = hC.width / eJ, hI = hC.height / gP, e3 = 0; e3 < gP; e3++)
				for (var e2 = 0; e2 < eJ; e2++) {
					var hJ = Math.floor(e2 * hH),
						hJ = 4 * (Math.floor(e3 * hI) * hC.width + hJ),
						hM = 4 * (e3 * eJ + e2);
					hG[hM] = src[hJ], hG[1 + hM] = src[1 + hJ], hG[2 + hM] = src[2 + hJ], hG[3 + hM] = 255
				}
			h4.putImageData(hD, 0, 0), 20 === br.bs && br.hN().h2(max)
		}
	}
	this.g = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = gs
	}, this.gt = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.gu = function() {
		input.click()
	}, this.gx = function(gy) {
		var dT = gy.name.split("."),
			dT = dT[dT.length - 1].toLowerCase();
		"gif" !== dT && "jpg" !== dT && "jpeg" !== dT && "png" !== dT || ((dT = new FileReader).onload = h1, dT.readAsDataURL(gy))
	}
}

function hO() {
	this.hP = function(cG) {
		var hu;
		hQ.cB(55 + cE.hR.fu()), hQ.hS(1, 0), hQ.hS(6, 13), hQ.hS(14, w.hr), hQ.hS(4, cZ.id), hQ.hS(7, cZ.ca), hQ.hS(1, +w.hs), hQ.hS(1, +w.ht), hQ.hS(5, (new Date).getHours() % 24), hu = hv.hw(), hQ.hS(8, hu[0]), hQ.hS(8, hu[1]), cE.hR.hU(), y.z
			.send(cG, hQ.s)
	}, this.hV = function(cG, hW, hX, hY) {
		hQ.cB(70), hQ.hS(1, 0), hQ.hS(6, 30), hQ.hS(3, hX), hQ.hS(30, hW), hQ.hS(30, hY), y.z.send(cG, hQ.s)
	}, this.hZ = function(ha) {
		hb.g(), hb.hS(1, 0), hb.hS(6, 6), hc.hd.hU(ha, 16, hb), y.z.send(0, hb.he())
	}, this.hf = function(id) {
		hQ.cB(13), hQ.hS(1, 0), hQ.hS(6, 15), hQ.hS(6, id), y.z.send(0, hQ.s)
	}, this.hg = function(id, value) {
		hQ.cB(43), hQ.hS(1, 0), hQ.hS(6, 3), hQ.hS(6, id), hQ.hS(30, value), y.z.send(0, hQ.s)
	}, this.hh = function(id, dZ) {
		var cI = Math.min(dZ.length, 63);
		hQ.cB(19 + 16 * cI), hQ.hS(1, 0), hQ.hS(6, 26), hQ.hS(6, id), hQ.hS(6, cI), hc.hi.hj(dZ), y.z.send(0, hQ.s)
	}, this.hk = function(hl, hm) {
		hQ.cB(7 + 26 * hm.length), hQ.hS(1, 0), hQ.hS(6, 9);
		for (var c8 = 0; c8 < hm.length; c8++) hQ.hS(16, hm[c8][0]), hQ.hS(10, hm[c8][1]);
		y.z.send(hl, hQ.s)
	}, this.hn = function(ho, hp) {
		hQ.cB(20), hQ.hS(1, 0), hQ.hS(6, 19), hQ.hS(1, ho), hQ.hS(12, hp), y.z.send(y.z.hq, hQ.s)
	}, this.hx = function(username) {
		hQ.hS(5, username.length), hc.hi.hj(username)
	}
}

function hy() {
	var aA, hz = !1,
		i0 = !1,
		i1 = -1e4,
		i2 = -1,
		i3 = 0;

	function resize(iG) {
		aA = 0, iH.iI() && (iA(iG) || hz) && (hz = !1, dk.resize(), iJ.iK.resize(), iL.g(), iM.g(), iN.resize(), iO.resize(), iP.resize(), br.resize(), 1 <= bz.gb ? (iQ.resize(!1), iR.resize(), iS.resize(), iT.resize(), gp.resize(), iU.resize(), cp
			.resize(), iV.resize(), cw.resize(), iW.resize(), gc.resize(), iX.resize(), ck.resize(), iY.resize(), iZ.resize(), go.resize(), iT.ia()) : (cA.ib(), cA.ic()), cm.cn = !0)
	}

	function i8(dt) {
		return dt && 128 < dt ? Math.floor(dt) : 128
	}

	function iA(iG) {
		var eJ, gP, ig, eK, ii;
		if (!(0 < eT.i6)) return eK = i8(document.documentElement.clientWidth), ii = i8(window.visualViewport && 2 !== cZ.id ? window.visualViewport.height : document.documentElement.clientHeight), eJ = eK, gP = ii, ig = 0 !== cZ.id || eJ < gP ?
			700 : 1200, ig = Math.min(ig / ((eJ + gP) / 2), 1), ig = 0 === d1.d2.data[1].value ? 2 * ig / 3 : Math.min(ig + (d1.d2.data[1].value - 1) * (1 - ig) / 2, 1), eT.i5 = (window.devicePixelRatio || 1) * ig, __fx.hoveringTooltip
			.canvasPixelScale = eT.i5, iG && !i0 ? (i0 = !0, br.removeChild(document.body, iB)) : i0 && (i0 = !1, document.body.appendChild(iB)), eJ = Math.floor(.5 + eK * eT.i5), gP = Math.floor(.5 + ii * eT.i5), eJ !== eT.eJ || gP !== eT.gP ? (
				eT.eJ = eJ, eT.gP = gP, eT.min = il(eJ, gP), eT.max = im(eJ, gP), eT.eU = io.dp(eJ + gP, 2), eT.i4 = eJ / gP, iB.width = eJ, iB.height = gP, iB.style.width = eK + "px", iB.style.height = ii + "px", i2 = cm.gX + 1e3, 1) : void 0
	}
	this.eJ = 0, this.gP = 0, this.min = 0, this.max = 0, this.eU = 0, this.i4 = 1, this.i5 = 1, this.i6 = 0, this.i7 = function() {
		this.eJ = i8(document.documentElement.clientWidth) + 2, this.gP = i8(document.documentElement.clientHeight) + 2
	}, this.g = function() {
		aA = 1, iB = document.getElementById("canvasA"), 2 === cZ.id && (iB.style.webkitUserSelect = "none"), (fD = iB.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, iA(0)
	}, this.dI = function() {
		50 <= ++aA && resize(0), -1 === i2 || cm.gX < i2 || (i3++, i2 = -1, cm.gX + 8e3 <= 2e3 * i3 ? console.log("error 3748") : cZ.cb.setState(15))
	}, this.iD = function(iE) {
		hz = !0, resize(iE)
	}, this.iF = function() {
		i1 + 1e3 > cm.gX || (i1 = cm.gX, resize(0))
	}
}

function ip() {
	this.iq = function(canvas, ir, is) {
		var eJ = canvas.width,
			gP = canvas.height,
			aA = aB.dE.i9(eJ, gP),
			hB = aB.dE.getContext(aA, !0),
			canvas = (hB.drawImage(canvas, 0, 0), hB.getImageData(0, 0, eJ, gP));
		return ir(canvas.data, eJ, gP, is), hB.putImageData(canvas, 0, 0), aA
	}, this.iu = function(iv, eJ, gP) {
		for (var e2 = eJ - 1; 0 <= e2; e2--)
			for (var e3 = gP - 1; 0 <= e3; e3--) {
				var c8 = 4 * (e2 + e3 * eJ);
				iv[3 + c8] = iv[c8], iv[c8] = iv[1 + c8] = iv[2 + c8] = 255
			}
	}, this.iw = function(iv, eJ, gP) {
		for (var e2 = eJ - 1; 0 <= e2; e2--)
			for (var e3 = gP - 1; 0 <= e3; e3--) {
				var c8 = 4 * (e2 + e3 * eJ);
				iv[1 + c8] > iv[2 + c8] + 10 && (iv[3 + c8] = iv[c8], iv[1 + c8] = iv[2 + c8])
			}
	}, this.ix = function(iv, eJ, gP, is) {
		for (var gap = Math.floor(Math.min(eJ, gP) * is), e2 = 0; e2 < eJ; e2++)
			for (var c8, e3 = 0; e3 < gP; e3++)(e2 < gap || e3 < gap || eJ - gap <= e2 || gP - gap <= e3) && (iv[3 + (c8 = 4 * (e2 + e3 * eJ))] = 255 - 255 * (iv[1 + c8] - iv[c8]) / (255 - iv[c8]))
	}, this.iy = function(iv, eJ, gP, is) {
		for (var e2 = eJ - 1; 0 <= e2; e2--)
			for (var e3 = gP - 1; 0 <= e3; e3--) {
				var c8 = 4 * (e2 + e3 * eJ);
				iv[c8] = is[0], iv[1 + c8] = is[1], iv[2 + c8] = is[2]
			}
	}, this.iz = function(iv, eJ, gP, is) {
		for (var gap = Math.floor(eJ * is), e2 = 0; e2 < eJ; e2++)
			for (var c8, e3 = 0; e3 < gP; e3++)(e2 < gap || e3 < gap || eJ - gap <= e2 || gP - gap <= e3) && (iv[c8 = 4 * (e2 + e3 * eJ)] = iv[1 + c8] = iv[2 + c8] = 0)
	}, this.j0 = function(iv, eJ, gP) {
		for (var e3, c8, e2 = eJ - 1; 0 <= e2; e2--)
			for (e3 = gP - 1; 0 <= e3; e3--) 200 < iv[1 + (c8 = 4 * (e2 + e3 * eJ))] && iv[1 + c8] - 20 > iv[c8] && iv[1 + c8] - 20 > iv[2 + c8] ? iv[c8] + iv[2 + c8] < 40 ? iv[3 + c8] = 0 : (iv[3 + c8] = iv[c8], iv[c8] = 255, iv[1 + c8] = 255,
				iv[2 + c8] = 255) : iv[c8] < 50 && iv[1 + c8] < 50 && iv[2 + c8] < 50 && (iv[c8] + iv[1 + c8] + iv[2 + c8] < 50 ? iv[3 + c8] = 180 : iv[3 + c8] = 180 + Math.floor(75 * (iv[c8] + iv[1 + c8] + iv[2 + c8] - 50) / 100))
	}, this.j1 = function(iv, eJ, gP) {
		for (var e3, c8, e2 = eJ - 1; 0 <= e2; e2--)
			for (e3 = gP - 1; 0 <= e3; e3--) iv[1 + (c8 = 4 * (e2 + e3 * eJ))] > iv[c8] + 20 && iv[1 + c8] > iv[2 + c8] + 20 && iv[c8] + iv[2] < 40 && (iv[3 + c8] = 255 - iv[1 + c8], iv[c8] = iv[1 + c8] = iv[2 + c8] = iv[c8])
	}, this.j2 = function(iv, eJ, gP, is) {
		for (var ey = eJ >> 1, e2 = 0; e2 < eJ; e2++)
			for (var e3 = 0; e3 < gP; e3++) Math.sqrt((e2 - ey) * (e2 - ey) + (e3 - ey) * (e3 - ey)) > is * ey && (iv[4 * (e2 + e3 * eJ) + 3] = 0)
	}
}

function j3() {
	this.j4 = function() {
		var c8;
		if (ft.size < hQ.j5(23)) y.z.j6(0, 3259);
		else {
			var j7 = ft.fu(6),
				cI = ft.fu(10),
				data = [];
			if (9 === j7 || 10 === j7 || 11 === j7 || 13 === j7) {
				for (c8 = 0; c8 < cI; c8++) data.push([ft.fu(30), j8.hd.j9(5), ft.jA(32), 0, ft.fu(30)]);
				8 === br.bs && br.hN().jB(21, !0, {
					j7: j7,
					data: data
				})
			} else if (12 === j7) {
				for (c8 = 0; c8 < cI; c8++) data.push([ft.fu(20), ft.fu(30), ft.fu(30), ft.jA(32), ft.fu(30), j8.hd.j9(5), j8.hd.j9(5)]);
				8 === br.bs && br.hN().jB(21, !0, {
					j7: j7,
					data: data
				})
			} else {
				var jC = ft.fu(16);
				if (ft.jD(39 + 16 * jC + cI * (0 === j7 ? 111 : 1 === j7 ? 101 : 2 === j7 || 3 === j7 ? 127 : 212))) {
					if (0 === j7)
						for (c8 = 0; c8 < cI; c8++) data.push([ft.fu(30), j8.hi.jE(ft.fu(5)), ft.fu(16), ft.fu(30), ft.fu(30)]);
					else if (1 === j7)
						for (c8 = 0; c8 < cI; c8++) data.push([ft.fu(16), j8.hi.jE(ft.fu(3)), ft.fu(16), j8.hi.jE(ft.fu(5)), ft.fu(31), ft.fu(30)]);
					else if (2 === j7 || 3 === j7)
						for (c8 = 0; c8 < cI; c8++) data.push([ft.fu(30), j8.hi.jE(ft.fu(5)), ft.jA(32), ft.fu(30), ft.fu(30)]);
					else
						for (c8 = 0; c8 < cI; c8++) data.push([ft.fu(20), ft.fu(30), ft.fu(30), ft.fu(30), ft.fu(30), ft.jA(32), ft.fu(30), j8.hi.jE(ft.fu(5)), j8.hi.jE(ft.fu(5))]);
					8 === br.bs && br.hN().jB(21, !0, {
						j7: j7,
						data: data
					})
				} else y.z.j6(0, 3260)
			}
		}
	}, this.jF = function() {
		if (ft.size < hQ.j5(29)) y.z.j6(0, 3265);
		else {
			var jG = ft.fu(4),
				jH = ft.fu(7),
				jI = ft.fu(11);
			if (ft.jD(29 + 16 * jH + 16 * jI + 11 * jG)) {
				for (var data = [], c8 = 0; c8 < jG; c8++) {
					for (var jJ = j8.hi.jE(ft.fu(3)), jK = ft.fu(8), jL = [], dq = 0; dq < jK; dq++) jL.push(ft.fu(16));
					data.push({
						name: "[" + jJ + "]",
						jL: jL
					})
				}
				8 === br.bs && br.hN().jB(23, !0, data)
			} else y.z.j6(0, 3266)
		}
	}
}

function jM() {
	this.jN = new Array(bz.fi), this.gj = new Array(bz.fi), this.jO = new Uint8Array(bz.fi), this.fo = new Uint8Array(bz.fi), this.jP = new Uint16Array(bz.fi), this.jQ = new Uint16Array(bz.fi), this.jR = new Uint16Array(bz.fi), this.jS =
		new Uint16Array(bz.fi), this.eg = new Uint32Array(bz.fi), this.jT = new Uint32Array(bz.fi), this.g5 = new Uint32Array(bz.fi), this.jU = null, this.jV = null, this.jW = null, this.jX = null, this.jY = new Uint16Array(bz.fi), this.jZ =
		new Uint16Array(bz.fi), this.ja = new Uint16Array(bz.fi), this.jb = new Uint16Array(bz.fi), this.jc = new Uint8Array(bz.fi), this.jd = new Uint16Array(bz.fi), this.g = function() {
			this.jN.fill(""), this.gj.fill(""), this.jO.fill(0), this.fo.fill(0), this.jP.fill(0), this.jQ.fill(0), this.jR.fill(0), this.jS.fill(0), this.eg.fill(0), this.jT.fill(0), this.g5.fill(0), this.jU = new Array(bz.fi), this.jV = new Array(
				bz.fi), this.jW = new Array(bz.fi), this.jX = new Array(bz.fi), this.jY.fill(0), this.jZ.fill(0), this.ja.fill(0), this.jb.fill(0), this.jc.fill(0), this.jd.fill(0)
		}
}

function je() {
	var jf, jg, jh, ji, jj, jk, jl, jm, jn, jo, jp, gV, jq, jr = !1,
		js = !1;

	function jt(gm) {
		gV = cm.gX, jh = ji = jg = 0, jj = (jq = 33) / gm, jf = 1 / (gm / jq / 4), jk = (eT.eJ / 2 + ju) / jv, jl = (eT.gP / 2 + jw) / jv, jm = jv
	}

	function k6(c8) {
		var kD; - 1 !== c8 && (c8 = kA.kB(g6.z.kC[c8]), kD = kA.kE(c8) - 15, c8 = kA.kG(c8) - 15, kH.jz(kD, c8, 29 + kD, 29 + c8))
	}

	function kR(kS) {
		Math.abs(Math.log(jp / jm)) < .125 && (jp = kS * jm)
	}

	function kQ(kD, kF, kT, kU) {
		jn = (kD + kT + 1) / 2, jo = (kF + kU + 1) / 2;
		kT = eT.eJ / (kT - kD + 1), kD = eT.gP / (kU - kF + 1);
		jp = .9 * (kT < kD ? kT : kD)
	}
	this.jx = function() {
		return jr
	}, this.jy = function() {
		jt(1), this.jz(0, 0, c2.k0 - 1, c2.k1 - 1), bz.k2 || bz.co || this.k3(bz.cr, 3e3, !0, .3)
	}, this.k4 = function(player, k5) {
		k6(g6.k7.k8(player, k5))
	}, this.k3 = function(player, gm, kI, zoom) {
		bz.eS || jr && !kI && js || (0 === ef.eg[player] ? k6(g6.k7.kJ(player)) : (iT.kK = !1, js = kI, jt(gm), function(player) {
			jn = (ef.jP[player] + ef.jR[player] + 1) / 2, jo = (ef.jQ[player] + ef.jS[player] + 1) / 2
		}(player), function(zoom, player) {
			var e4 = ef.jR[player] - ef.jP[player] + 1,
				player = ef.jS[player] - ef.jQ[player] + 1,
				dq = eT.eJ / e4,
				dr = eT.gP / player,
				dq = (jp = dq < dr ? dq : dr, 0 !== zoom ? zoom : e4 < 20 && player < 20 ? .5 : .9);
			jp *= dq, kR(7 / 8)
		}(zoom, player), jr = !0, kN.kO()))
	}, this.kP = function(gm) {
		bz.co || bz.eS || (iT.kK = !1, js = !1, jt(gm), kQ(0, 0, c2.k0 - 1, c2.k1 - 1), kR(7 / 8), jr = !0, kN.kO())
	}, this.jz = function(kD, kF, kT, kU) {
		jr = !1, kQ(kD, kF, kT, kU), jv = jp, iT.kV(jn, eT.eJ / 2), iT.kW(jo, eT.gP / 2), kX.kY(), cm.cn = !0
	}, this.fs = function() {
		return !(jr && js || (jr = !1))
	}, this.dI = function() {
		var kb, kc, by, kf;
		jr && (jg < .5 ? ji < jj && (ji += jj * jf, jh = jg) : 1 - jh < jg && (ji = (ji -= jj * jf) < jj * jf ? jj * jf : ji), gV = gV >= cm.gX ? cm.gX - 1 : gV, jg = 1e3 < (by = cm.gX - gV) || 1 < (jg += ji * by / jq) ? 1 : jg, gV = cm.gX, by =
			jv, kb = ju, kc = jw, by = (jv = jm * Math.pow(jp / jm, jg)) / by, kf = 1 - (jm * Math.pow(jp / jm, 1 - jg) - jm) / (jp - jm), iT.kV(jk + kf * (jn - jk), eT.eJ / 2), iT.kW(jl + kf * (jo - jl), eT.gP / 2), iY.zoom(by, (kb * by -
				ju) / (1 - by), (kc * by - jw) / (1 - by)), kX.kY(), 1 <= jg && (jr = !1, kg.kh = !0), cm.cn = !0)
	}
}

function kk() {
	var cK, fG, fL;
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), fG.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd("🔒 " + L(9), [new cN("⬅️ " + L(14), function() {
		br.kl()
	})]), fG = new fJ(cK.cf, ((fL = []).push(function() {
		var fQ = new fR,
			fV = (fQ.kn(y.z.dG("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", fQ.fS(L(55)), new fW({
				value: "",
				h: -1
			})),
			ko = (fQ.fX(fV), fQ.fS(L(56), "0.8em"), new fW({
				value: "",
				h: -1
			}, 0, 0)),
			kp = (ko.a6.type = "email", ko.a6.autocomplete = "email", ko.a6.name = "email", ko.a6.inputMode = "email", ko.a6.spellcheck = !1, fQ.fX(ko), new cN(L(57), function(a6) {
				return aB.dE.kq(a6), y.kr.ks({
					action: 4,
					dZ: fV.a6.value.trim() + ko.a6.value.trim().substring(0, 63)
				}), !0
			}));
		return fQ.fX(new fY([kp.button])), fQ
	}()), fL))
}

function kt() {
	this.ku = function(cG) {
		var username = d1.d2.data[122].value.slice(0, 20),
			username = (hQ.cB(24 + 16 * username.length + 18), hQ.hS(1, 0), hQ.hS(6, 1), hQ.hS(10, w.kv), hQ.hS(2, d1.d2.data[158].value), y.kw.hx(username), aB.color.ky(d1.z.kz()));
		hQ.hS(6, username[0]), hQ.hS(6, username[1]), hQ.hS(6, username[2]), y.z.l0 = cG, y.z.send(cG, hQ.s)
	}, this.l1 = function(l2, is) {
		hb.g(), hb.hS(1, 0), hb.hS(6, 2), hb.hS(3, l2), 2 === l2 ? hb.hS(2, is) : 3 === l2 ? hc.hd.hU(is, 7, hb) : 5 === l2 && (hb.hS(3, is.id), hb.hS(3, is.value), hb.hS(30, is.c9)), y.z.send(y.z.l0, hb.he())
	}
}

function l3() {
	this.bu = 0;
	var l5, l6, l7, l8, l9, lA = this.l4 = 0;

	function lF() {
		l8 = l9 = null, lA = 0
	}
	this.g = function(bh, bm, bn) {
		br.cj(), bf.gt(), cA.setState(10), l8 = bh, l9 = bm, lA = bn, this.bu = bh.bu, this.l4 = bn, l5 = 0, l6 = cm.gX + 4500, y.z.hq = bh.hq, y.z.l0 === bh.hq ? (console.log("direct pass"), l7 = 0) : (console.log("delayed pass"), y.z.close(y.z
			.l0, 3247), l7 = 2, y.z.lB(bh.hq, 5, 2) && y.lC.lD()), fD.imageSmoothingEnabled = !0, cA.f1();
		bm = iH.lO("loading"), bn = (cZ.cb.eR() ? .396 : .25) * eT.eU / bm.width;
		fD.setTransform(bn, 0, 0, bn, Math.floor((eT.eJ - bn * bm.width) / 2), Math.floor((eT.gP - bn * bm.height) / 2)), fD.imageSmoothingEnabled = !1, fD.drawImage(bm, 0, 0), fD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lG = function() {
		0 < l7 && cm.gX > l6 && (l7--, l6 += 4500, 0 === cm.lI) && 0 === cm.lJ() && y.z.lB(y.z.hq, 5, 2)
	}, this.lK = function() {
		return 10 === cA.cg() && (bf.lL.bx(l8, l9, lA), lF(), !0)
	}, this.lM = function() {
		10 === cA.cg() && 2 <= ++l5 && (bf.lL.bx(l8, l9, lA), lF())
	}
}

function cd(title, cW, lP) {
	var lQ = document.createElement("div"),
		lR = document.createElement("div"),
		lS = document.createElement("div"),
		lT = document.createElement("div"),
		lU = document.createElement("div");
	this.cf = lS, this.dN = cW, this.show = function() {
			!1 !== lP ? document.body.appendChild(lQ) : (document.body.appendChild(lR), document.body.appendChild(lT))
		}, this.u = function() {
			!1 !== lP ? br.removeChild(document.body, lQ) : (br.removeChild(document.body, lR), br.removeChild(document.body, lT))
		}, this.la = function() {
			var lb = aB.dE.dm(.1),
				lc = aB.dE.dm(.08 + .04 * (eT.i4 < 1), .3);
			return {
				lb: lb,
				lc: lc,
				ld: eT.gP / eT.i5 - lb - lc
			}
		}, this.resize = function(le) {
			var cI = cW.length,
				lf = this.la(),
				lb = lf.lb,
				lc = lf.lc;
			for (lR.style.height = aB.dE.dj(lb), aB.dE.lg(lR, 2), lT.style.top = aB.dE.dj(eT.gP / eT.i5 - lc), lT.style.height = aB.dE.dj(lc), aB.dE.lg(lT, 8), lS.style.top = aB.dE.dj(lb), lS.style.height = lS.style.maxHeight = aB.dE.dj(lf.ld), lR
				.style.font = aB.dE.f9(0, aB.dE.dm(.02, .15)), lT.style.font = aB.dE.f9(0, aB.dE.dm(.02, .7)), lS.style.font = aB.dE.f9(0, aB.dE.dm(.02, .35)), c8 = 1; c8 < cI; c8++) aB.dE.lg(cW[c8].button, 4);
			for (var lh = 0, c8 = 0; c8 < cI; c8++) lh += cW[c8].button.offsetWidth;
			if (le && lh < lT.offsetWidth)
				for (c8 = 0; c8 < cI; c8++) cW[c8].button.style.width = (100 * cW[c8].button.offsetWidth / lh).toFixed(2) + "%";
			else
				for (c8 = 0; c8 < cI; c8++) cW[c8].button.style.width = "auto";
			lT.li && (lT.scrollLeft = lT.li), le || this.resize(!0)
		}, this.fC = function() {
			var lf = this.la(),
				aA = eT.i5;
			fD.fillStyle = dK.aH, fD.fillRect(0, aA * lf.lb, eT.eJ, aA * lf.ld)
		}, lQ.style.position = "absolute", lQ.style.top = "0", lQ.style.left = "0", lQ.style.width = "100%", lQ.style.height = "100%", lR.style.position = "absolute", lR.style.top = "0", lR.style.left = "0", lR.style.width = "100%", lR.style
		.display = "flex", lR.style.backgroundColor = dK.aH, lT.style.position = "absolute", lT.style.left = "0", lT.style.width = "100%", aB.dE.lV(lT), lU.style.height = lU.style.maxHeight = "100%", lS.style.position = "absolute", lS.style.width =
		"100%", lS.style.backgroundColor = dK.aH,
		function() {
			for (var c8 = 0; c8 < cW.length; c8++) cW[c8].button.style.height = "100%", cW[c8].button.style.padding = "0.0em 0.9em"
		}();
	for (var c8 = 0; c8 < cW.length; c8++) lU.appendChild(cW[c8].button);
	lR.appendChild(function() {
		var lZ = document.createElement("h1");
		return lZ.textContent = title, lZ.style.margin = "auto", lZ.style.fontSize = 18 <= title.length && eT.gP > eT.eJ ? "1.8em" : "2.3em", lZ.style.fontFamily = "Arial Black, system-ui", lZ
	}()), lT.appendChild(lU), !1 !== lP && (lQ.appendChild(lS), lQ.appendChild(lR), lQ.appendChild(lT))
}

function lj() {
	this.gA = function(player, k9) {
		aB.lk.ll(0) && aB.lk.lm(player) && kA.ln(k9) && (lo.lp.lq(0, player, k9), bz.lr.gh(player, k9))
	}, this.gB = function(player, ls, lt) {
		aB.lk.ll(1) && aB.lk.lm(player) && aB.lk.lu(player, lt) && aB.lk.lv(player, ls, 12, 0) && aB.lk.lw(player, lt) && ((lt = ly.lz(player, er.m0[0])) || ly.m1(player)) && (ef.jY[player]++, lo.lp.lq(1, player, ls, er.m0[0]), fk.m2.m3(player,
			lt)) && (aB.lk.m4(player), ch.m5(player, ls), fk.m2.m6(player))
	}, this.gC = function(player, ls, m7) {
		aB.lk.ll(1) && aB.lk.lm(player) && bz.eN && aB.lk.lu(player, m7) && aB.lk.m8(player, m7) && aB.lk.m9(player, aB.lk.mA(player, ls), m7) && mB.gh(m7, er.mC[0]) && (lo.lp.lq(2, player, ls, m7), mD.mE(player, m7))
	}, this.gD = function(player, ls, mF) {
		er.mG[1] = 7 & mF;
		var k9 = mF >> 3;
		aB.lk.ll(1) && aB.lk.lm(player) && kA.ln(k9) && g6.mH.mI(player) && g6.mH.mJ(k9) && aB.lk.lv(player, ls, 32, 0) && g6.mK.mL(player, k9, 1) && (ch.mM(player), lo.lp.lq(3, player, ls, mF), aB.lk.m4(player), mN.mO.gD(player), g6.z.mP(
			player))
	}, this.gE = function(player, ls, k5) {
		849 === ls ? this.mQ(player, k5) : aB.lk.ll(1) && aB.lk.lm(player) && aB.lk.lv(player, ls, 32, 0) && g6.mR.mS(player, k5) && (ch.mM(player), lo.lp.lq(4, player, ls, k5), aB.lk.m4(player), mN.mO.gE(player), g6.z.mP(player))
	}, this.mQ = function(player, k5) {
		aB.lk.ll(1) && aB.lk.lm(player) && g6.mT.dI(player, k5) && lo.lp.lq(4, player, 849, k5)
	}, this.gF = function(player, lt) {
		513 === lt ? this.d0(player) : aB.lk.ll(1) && aB.lk.lm(player) && (lt = Math.min(lt, bz.fi), ly.lz(player, lt)) && (lo.lp.lq(5, player, lt), ly.mU(player, lt))
	}, this.gG = function(player, mV) {
		(aB.lk.ll(1) || aB.lk.ll(2)) && aB.lk.lm(player) && (mV = io.du(mV, 0, 1023), lo.lp.lq(6, player, mV), iY.mW(player, 0, mV))
	}, this.gH = function(player, mX) {
		cw.mY(player) && (lo.lp.lq(7, player, mX), cw.mZ(player, mX))
	}, this.cu = function(player) {
		(aB.lk.ll(0) || aB.lk.ll(1)) && aB.lk.lm(player) && cp.cq(player) && (lo.lp.lq(8, player), ma.cu(player))
	}, this.gI = function(player) {
		lo.lp.lq(9, player), ma.gI(player)
	}, this.d0 = function(player) {
		cw.cx(player) && (lo.lp.lq(5, player, 513), cw.d0(player))
	}, this.gJ = function(player, ls, k9, lt) {
		aB.lk.ll(1) && aB.lk.lm(player) && aB.lk.lu(player, lt) && aB.lk.lw(player, lt) && kA.ln(k9) && mb.mc.md(player, k9) && (ly.lz(player, er.m0[0]) || ly.m1(player)) && (lo.lp.lq(10, player, (ls << 10) + er.m0[0], k9), lt = aB.lk.mf(player,
			ls), ef.jU[player].push(er.mg[0]), ly.gh(player, lt, er.m0[0]), mh.mi(player, !0), ch.mj(player))
	}
}

function mk() {
	this.ml = function() {
		for (var es, e2, dw, mm = mn, mo = c2.mp, eJ = c2.k0, mq = eJ - 1, mr = c2.k1 - 1, el = 0, e3 = 1; e3 < mr; e3++)
			for (dw = e3 * eJ, e2 = 1; e2 < mq; e2++) mo[es = dw + e2 << 2] === mo[1 + es] && mo[es] === mo[2 + es] && (el++, mm[2 + es] = 4);
		ms.mt = el
	}, this.mu = function(mv, mw) {
		for (var mm = mn, eJ = c2.k0, mq = eJ - 1, mr = c2.k1 - 1, id = 0, e3 = 1; e3 < mr; e3++)
			for (var dw = e3 * eJ, e2 = 1; e2 < mq; e2++) {
				var mx = 2 + (dw + e2 << 2);
				mm[mx] === mv && (! function(mx, id, mv, mw) {
					var cI = 1,
						mm = mn,
						mz = n0.n1,
						n2 = [mx],
						n3 = id >> 8 << 1,
						n4 = 255 & id;
					mm[mx - 2] = n3, mm[mx - 1] = n4, mm[mx] = 5;
					for (; cI;) {
						for (var n5 = [], c8 = 0; c8 < cI; c8++)
							for (var n6 = n2[c8], by = 0; by < 8; by++) {
								var n7 = n6 + mz[by];
								mm[n7] === mv && (mm[n7 - 2] = n3, mm[n7 - 1] = n4, mm[n7] = mw, n5.push(n7))
							}
						cI = (n2 = n5).length
					}
				}(mx, id, mv, mw), id = (id + 1) % 32768)
			}
	}, this.n8 = function() {
		for (var mm = mn, eJ = c2.k0, mq = eJ - 3, mr = c2.k1 - 3, nB = 12 * eJ, e3 = 3; e3 < mr; e3++)
			for (var dw = e3 * eJ, e2 = 3; e2 < mq; e2++) {
				var mx = 2 + (dw + e2 << 2);
				2 !== mm[mx] || 2 === mm[mx - 12] && 2 === mm[12 + mx] && 2 === mm[mx - nB] && 2 === mm[mx + nB] || (mm[mx - 2] = 1 | mm[mx - 2])
			}
	}
}

function nC() {
	nD() ? (nE(), nF !== bz.fi && nG()) : nH()
}

function nG() {
	nI.nJ(), nI.nK(ef.jV[nF]), nI.nK(ef.jW[nF]), c2.nL(c2.c4) && nI.nK(ef.jX[nF]), nI.nM(ef.jU[nF]), nI.nN(ef.jW[nF]), nI.nN(ef.jX[nF]), nI.nO(), nI.nP()
}

function nE() {
	nQ = !0, ly.nR(nS, nT, nU), ly.nV(nS, nT), ef.eg[nS] += nW, nI.nX(), nY()
}

function nD() {
	return (nF === bz.fi ? nZ : na)()
}

function na() {
	var nb = nW * bz.nc,
		nd = ne(),
		nf = ng(),
		nd = nb + 2 * nd + nf,
		ni = nj * nW;
	return nd < ni ? (nU -= nd, ch.nk(nS, nd, 13), nl(nd - nb, nf), !0) : nm && 0 === nf ? (nU -= ni, ni += aB.lk.nn(nS, nd - ni + 1), ch.nk(nS, ni, 13), nl(ni - nb, 0), !0) : (nU -= ni, ch.nk(nS, ni, 13), nl(ni - nb, nf), !1)
}

function nl(ni, nf) {
	if (0 < nf) {
		if (ni <= nf) return ch.nk(nF, ni, 13), void ly.no(nF, nS, nf - ni);
		ly.no(nF, nS, 0), ni -= nf
	}
	ni = io.dp(ni, 2), ni = Math.min(ef.g5[nF], ni), ch.nk(nF, ni, 13), ef.g5[nF] -= ni
}

function ng() {
	return ly.np(nF, nS)
}

function ne() {
	return io.dp(nW * ef.g5[nF], 1 + io.dp(10 * ef.eg[nF], 16))
}

function nZ() {
	var nq = nW * bz.nc;
	return nU -= nq, ch.nk(nS, nq, 13), !0
}

function nY() {
	for (var c8 = nW - 1; 0 <= c8; c8--) ef.jU[nS].push(nr[c8]), ef.jV[nS].push(nr[c8]), n0.ns(nr[c8], nS)
}

function nt(nu, nv) {
	var o2, self, nw = document.createElement("div"),
		nx = document.createElement("div"),
		ny = document.createElement("div"),
		nz = null,
		o3 = (this.fV = new fW({
			value: "",
			h: -1
		}, 0, o0, function(a6) {
			a6.target.value = aB.oB.oC(a6.target.value), nz.oA.textContent = 127 - a6.target.value.length
		}), 0),
		o4 = 1,
		o5 = 0,
		o6 = 1048575;

	function o0() {
		nu(), nz.oA.textContent = 127
	}

	function oJ(oI, hm) {
		hm && (hm.oP = 1, oI.appendChild(bf.oQ.transform(hm)))
	}

	function oM(hz) {
		o4 ? nw.scrollTop = nw.scrollHeight : hz && (nw.scrollTop = o5)
	}
	this.reset = function(oD) {
			o6 = 1048575, nx.textContent = "", oD || this.ew()
		}, this.ew = function() {
			var oE = bf.z.bt[0],
				oE = bf.z.bi[oE],
				oF = oE.oF,
				cI = oF.length,
				oG = 1048575 === o6 ? 0 : cI - (oE.oH - o6 + 1048575) % 1048575;
			if (o6 = oE.oH, !(cI <= (oG = Math.max(oG, 0)))) {
				for (var oI = document.createDocumentFragment(), c8 = oG; c8 < cI; c8++) oJ(oI, bf.k7.oK(oF[c8], bf.k7.oL(oF[c8])));
				nx.appendChild(oI), oM()
			}
		}, this.oN = function(oO) {
			var oI = document.createDocumentFragment();
			oJ(oI, oO), nx.appendChild(oI), oM()
		}, this.show = function(df) {
			df.appendChild(nw), df.appendChild(ny), this.resize(df)
		}, this.u = function(df) {
			br.removeChild(df, nw), br.removeChild(df, ny)
		}, this.resize = function(df) {
			o3 = df ? df.offsetHeight : o3;
			var df = aB.dE.dm(.04, .75),
				lb = Math.max(df, o3 - df),
				oR = eT.eJ / eT.i5,
				oS = .7 * oR,
				oT = aB.dE.dj(o3 - df - lb),
				lb = (ny.style.height = aB.dE.dj(df), nw.style.height = aB.dE.dj(lb), eT.gP > eT.eJ || cZ.cb.eR() ? (ny.style.top = oT, nw.style.top = aB.dE.dj(o3 - lb), aB.dE.lg(nw, 8)) : (nw.style.top = oT, ny.style.top = aB.dE.dj(o3 - df), aB.dE
					.lg(nw, 2)), this.fV.a6.style.width = aB.dE.dj(oS), this.fV.a6.style.fontSize = o2.button.style.fontSize = aB.dE.dj(.5 * df), aB.dE.lg(this.fV.a6, 6), o2.button.style.left = aB.dE.dj(oS), o2.button.style.width = aB.dE.dj(oR -
					oS), .385 * df);
			cZ.cb.eR() && (lb *= .8 - .12 * (eT.eJ > eT.gP)), nx.style.marginLeft = nx.style.marginRight = aB.dE.dj(.5 * lb), nx.style.fontSize = aB.dE.dj(lb), oM(1)
		}, (self = this).fV.a6.o8 = 127, nw.style.position = "absolute", nw.style.left = "0", nw.style.width = "100%", nw.style.overflowX = "hidden", nw.style.overflowY = "auto", nw.style.font = "inherit", nw.style.backgroundColor = dK.aJ, nw
		.addEventListener("scroll", function() {
			o5 = nw.scrollTop, o4 = o5 < nw.scrollHeight - nw.clientHeight - 2 ? 0 : 1
		}), nx.style.font = "inherit", ny.style.position = "absolute", ny.style.left = "0", ny.style.width = "100%", self.fV.a6.setAttribute("placeholder", L(58)), self.fV.a6.style.position = "absolute", self.fV.a6.style.top = "0", self.fV.a6.style
		.left = "0", self.fV.a6.style.height = "100%", self.fV.a6.style.backgroundColor = dK.aG, self.fV.a6.style.textAlign = "center", (o2 = new cN(L(59), o0)).button.top = "0", o2.button.style.position = "absolute", o2.button.style.height = "100%",
		o2.dL(dK.ba), nz = new o9("127", o2.button, 1, 1), nw.appendChild(nx), ny.appendChild(self.fV.a6), ny.appendChild(o2.button)
}

function oV() {
	function oW(c8, type, oc, ca) {
		d1.d2.data.push({
			h: c8,
			type: type || 0,
			value: oc || 0,
			oc: oc || 0,
			ca: ca || 0
		})
	}

	function oX(c8, type, oc, ca) {
		d1.d2.data.push({
			h: c8,
			type: type,
			value: oc || "",
			oc: oc || "",
			ca: ca || 0
		})
	}

	function oY(fs) {
		for (var c8 = d1.d2.data.length; c8 < fs; c8++) d1.d2.data.push(null)
	}
	this.data = [], this.g = function() {
		oW(0, 1, 0, 5), oW(1, 1, 1), oW(2, 0), oX(3, 2), oW(4, 1), oX(5, 2, "system-ui", 2), oW(6, 0), oW(7, 0, 0), oW(8, 0), oW(9, 1, 1), oW(10, 1), oW(11, 1, 1), oX(12, 2, navigator.language), oW(13), oW(14), oW(15, 0, 1), oW(16, 0, 4), oY(
			100), oX(100, 2), oX(101, 2), oX(102, 2), oX(103, 2), oX(104, 2), oX(105, 2), oX(106, 2), oW(107), oW(108), oW(109), oX(110, 2), oW(111), oW(112), oW(113), oX(114, 2), oW(115), oX(116, 2), oW(117, 1), oX(118, 2, "", 2), oW(119, 1, 0,
				1), oX(120, 2), oW(121, 1, ~~(262144 * Math.random())), oX(122, 2, "Player " + Math.floor(1e3 * Math.random())), oW(123), oX(124), oW(125, 1), oX(126, 2), oW(127, 0, 1), oW(128), oW(129), oW(130), oW(131), oW(132), oX(133, 2), oW(
				134, 0, 5), oX(135, 2), oX(136, 2), oW(137), oW(138), oW(139), oW(140), oW(141), oW(142), oW(143), oW(144), oX(145, 2), oW(146), oW(147), oX(148, 2), oW(149), oW(150, 0, 1), oX(151, 2), oW(152, 0, 5), oW(153, 1), oW(154, 1), oX(
				155, 2), oX(156, 2), oW(157), oW(158), oW(159), oW(160), oX(161, 2), oW(162, 0, 1024), oX(163, 2, "0,0,0"), oX(164, 2, "100,100,100"), oX(165, 2, "30,30,30"), oX(166, 2, "70,70,70"), oX(167, 2, "100,100,100"), oX(168, 2,
				"85,85,85"), oX(169, 2, "100,100,100");
		for (var c8 = 0; c8 < 4; c8++) oX(170 + c8, 2, "255,255,255");
		oX(174, 2), oX(175, 2), oW(176, 0, 200), oY(180), oW(180, 0), oW(181, 0), oW(182, 0, 1023), oX(183, 2)
	}, this.dc = function(h, value) {
		this.data[h].value = value
	}, this.oZ = function(h, value) {
		this.dc(h, value);
		var value = String(value),
			cI = value.length;
		5e4 < cI ? console.log("storage value too large: index " + h + " size " + cI) : (d1.dO.save(h, value), d1.dO.save(h, String(this.data[h].ca), !0))
	}, this.oa = function(h) {
		return Number(this.data[h].value)
	}, this.ob = function(h) {
		return String(this.data[h].value)
	}
}

function od() {
	function oi() {
		br.on(29) && (bf.z.bq && 1 === bf.z.bt[2] && br.on(29).oo(), bf.z.bq = 0, br.on(29).op(), br.on(29).oq(), bf.or.os())
	}
	this.bi = new Array(4), this.bt = [0, 0, 1, 0], this.bq = 0, this.oe = [0, 0], this.g = function() {
		for (var c8 = 0; c8 < this.bi.length; c8++) this.bi[c8] = new og;
		this.bt[0] = d1.d2.data[158].value, __fx.lobbyReminders.setRooms(this.bi), __fx.lobbyReminders.setPopupHandler(function(text) {
			bf.message.uS({
				id: 7,
				oO: text
			})
		})
	}, this.oh = function() {
		oi(), bf.oj.g(), __fx.lobbyReminders.check()
	}, this.ok = function() {
		bf.oj.ok();
		for (var c8 = 0; c8 < bf.z.bi.length; c8++) {
			var bh = bf.z.bi[c8];
			0 === bh.ot ? bh.ou = 0 : (bh.ov = Math.max(bh.ov - bh.ou % 2, 0), bh.ou++)
		}
		oi(), __fx.lobbyReminders.check()
	}, this.ow = function(oE) {
		this.bt[0] !== oE || this.bt[2] || br.on(29).ox()
	}
}

function oy() {
	var oz, p0, p3, p6, p7, p1 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		p2 = new Array(4),
		p4 = new Array(2),
		p5 = [L(60), L(61), L(62), L(63)];

	function pE() {
		var pL;
		!bf.pK || (pL = oz.pM.fV.a6.value.trim().slice(0, 127)).length < 1 || (oz.pM.fV.a6.value = "", bf.pN.pO(pL))
	}

	function pC(pR) {
		bf.z.bt[3] = 1 - bf.z.bt[3], pI(3, 1, bf.z.bt[3]), pR && y.pS.l1(4), bf.z.bt[3] && d1.db.dc(158, bf.z.bt[0])
	}

	function p9(dq, dr) {
		bf.z.bt[dq] !== dr && (0 === dq && bf.z.bt[3] && pC(0), pI(dq, bf.z.bt[dq], 0), pI(dq, dr, 1), bf.z.bt[dq] = dr, 0 === dq ? (y.pS.l1(2, dr), bf.z.bt[2] ? (oz.pV.ew(), oz.pM.reset(1)) : oz.pM.reset(0), br.hN().oq(), br.hN().op()) : 2 === dq &&
			(0 === dr ? (y.pS.l1(0), oz.pM.ew(), oz.pW()) : (y.pS.l1(1), oz.pV.ew(), oz.pX())))
	}

	function pI(dq, dr, color) {
		oz.pY[dq].pH[dr].dL(color ? dK.ak : dK.ba)
	}

	function pb(c4) {
		return c2.ge.pn[c4]
	}

	function pc(bk) {
		return bk < 7 ? "   " + (bk + 2) + " Teams" : 10 === bk ? "   No Full-Sending" : ""
	}

	function pd(ov, pu) {
		return pu ? ov <= 90 && 60 < ov ? "   Contest" : "" : ov <= 60 ? "   Contest" : ""
	}
	this.pP = function() {
		return oz.pM
	}, this.pN = function(c9) {
		p9(2, 0);
		var dZ = oz.pM.fV.a6.value,
			c9 = "@" + c9 + " ";
		dZ.length && !aB.oB.pU(dZ, " ") && (c9 = " " + c9), oz.pM.fV.a6.value = dZ += c9, oz.pM.fV.a6.focus()
	}, this.oo = function() {
		oz.pV.ew()
	}, this.oq = function() {
		var pZ = bf.z.bt[0],
			pZ = bf.z.bi[pZ],
			dr = (c2.cB(pZ.c4, pZ.mapSeed), p0.pH),
			pa = pb(pZ.c4, pZ.mapSeed) + pc(pZ.bk) + pd(pZ.ov),
			pZ = L(69) + "   " + pb(pZ.pf, pZ.pg) + pc(pZ.ph) + pd(pZ.ov, 1);
		dr[0].button.textContent === pa && dr[1].button.textContent === pZ || (dr[0].button.textContent = pa, dr[1].button.textContent = pZ, p0.resize())
	}, this.op = function() {
		var pZ = bf.z.bt[0],
			bh = bf.z.bi[pZ];
		oz.pi(bh.ot);
		for (var dt, pv, c8 = 0; c8 < bf.bg.bl.length; c8++) p1[0][c8].oA.textContent = bf.bg.bl[c8].length, p1[1][c8].oA.textContent = (dt = bf.z.bi[c8].ov, pv = void 0, ((pv = io.dp(dt, 60)) < 10 ? "0" : "") + pv + ":" + ((dt %= 60) < 10 ?
			"0" : "") + dt);
		var bh = bf.bg.bl[pZ],
			pk = bh.length,
			pl = bf.bg.be[pZ];
		p1[2][1].oA.textContent = "" + pk, p1[3][1].oA.textContent = "" + pl;
		for (c8 = 0; c8 < 4; c8++) {
			var pm = bf.z.bi[c8];
			p2[c8] ? 0 === pm.ot && (p2[c8].oA.textContent = c2.ge.pn[pm.c4]) : p2[c8] = new o9(c2.ge.pn[pm.c4], p6.pH[c8].button, 1, 1), aB.oB.startsWith(p5[c8], "🏆 ") ? pm.c1 || (p5[c8] = p5[c8].substring(3), p6.pH[c8].button.textContent = p5[
				c8], p6.pH[c8].button.appendChild(p1[1][c8].oA), p6.pH[c8].button.appendChild(p1[0][c8].oA), p6.pH[c8].button.appendChild(p2[c8].oA)) : pm.c1 && (p5[c8] = "🏆 " + p5[c8], p6.pH[c8].button.textContent = p5[c8], p6.pH[c8].button
				.appendChild(p1[1][c8].oA), p6.pH[c8].button.appendChild(p1[0][c8].oA), p6.pH[c8].button.appendChild(p2[c8].oA))
		}
		var po = "",
			pp = "";
		0 === pZ && (po = bf.k7.pq(bh, 0, pk), pp = bf.k7.pq(bh, 0, pl)), p3[0].oA.textContent = po, p3[1].oA.textContent = pp, p4[1].oA.textContent = "MP: " + bf.z.oe[0] + "   SP: " + bf.z.oe[1] + "   Lobby: " + aB.pr.ps(bf.bg.bl)
	}, this.ox = function() {
		oz.pM.ew()
	}, this.show = function() {
		bf.z.bq++, oz.show(), this.resize(), bf.message.show()
	}, this.u = function() {
		oz.u(), bf.pF.u(), bf.or.u(), bf.message.u()
	}, this.resize = function() {
		oz.resize(1 - bf.z.bt[2]), bf.message.resize()
	}, this.dM = function(aA) {
		2 === aA ? bf.z.bt[3] ? pC(1) : oz.pY[3].pH[0].dO() : aA < 2 && pC(1)
	}, p6 = new p8([new cN(p5[0], function() {
		return p9(0, 0), 2
	}), new cN(p5[1], function() {
		return p9(0, 1), 2
	}), new cN(p5[2], function() {
		return p9(0, 2), 2
	}), new cN(p5[3], function() {
		return p9(0, 3), 2
	})], dK.ba), p0 = new p8([new cN("", 0, 2), new cN("", 0, 2)], dK.bb, 1);
	var pA = new p8([new cN(L(64), function() {
		return p9(2, 0), 2
	}), new cN(L(65), function() {
		return p9(2, 1), 2
	})], dK.ba);
	p7 = new p8([new cN(L(66, 0, 0, 1), function() {
		cE.cF.cG = -1, br.cj(), bf.gt(), y.z.pQ(3240), br.cP(5, 5)
	}), new cN(L(67), function() {
		return pC(1), 2
	})], dK.ba), oz = new pD(p6, p0, pA, p7, pE, bf.pF.pG);
	for (var c8 = 0; c8 < 4; c8++) p1[0][c8] = new o9("0", p6.pH[c8].button), p1[1][c8] = new o9("0", p6.pH[c8].button, 1);
	p1[2][1] = new o9("0", pA.pH[1].button), p1[3][1] = new o9("0", p7.pH[1].button), (p3 = [new o9("", pA.pH[1].button, 1, 1), new o9("", p7.pH[1].button, 1, 1)])[0].oA.style.bottom = "0em", p3[1].oA.style.bottom = "0em", pI(0, bf.z.bt[0], 1), pI(2,
		bf.z.bt[2], 1), (p4 = [new o9(L(68), oz.pJ(), 1, 0), new o9("", oz.pJ(), 1, 1)])[0].oA.style.fontSize = "0.4em", p4[1].oA.style.fontSize = "0.4em"
}

function px() {
	function q5(player) {
		var ee;
		aB.lk.q7(player) && (ee = ef.g5[player] - ef.jd[player] + ly.q8(player), ch.nk(player, Math.abs(ee), ee < 0 ? 18 : 12)), ef.g5[player] = 0, ef.jd[player] = 0
	}

	function qJ() {
		iZ.show(!1, !1, !1, !0), iS.qL(), qM.qN.qO()
	}

	function q0(player, qH) {
		for (var c8 = qH.length - 1; 0 <= c8; c8--) ly.qP(qH[c8], player)
	}

	function q3(player) {
		var jP = ef.jP,
			jR = ef.jR,
			jQ = ef.jQ,
			jS = ef.jS,
			k0 = c2.k0;
		if (ef.eg[player]) {
			ef.eg[player] = 0;
			for (var kD = jP[player], kF = jQ[player], e2 = jR[player]; kD <= e2; e2--)
				for (var e3 = jS[player]; kF <= e3; e3--) {
					var es = 4 * (e3 * k0 + e2);
					n0.qc(player, es) && n0.qd(es)
				}
		}
		jR[player] = jS[player] = 0, jP[player] = jQ[player] = Math.max(k0, c2.k1)
	}
	this.bd = function(es) {
		var player, ee = ef.eg[es] + ef.jT[es];
		g6.z.g7[es] ? ee && (q0(player = es, ly.q1(player)), iY.q2(player), q3(player), mh.q4(player), ly.clear(player), q5(player), function(player) {
			ef.jT[player] = 0, ef.jU[player] = [], ef.jV[player] = [], ef.jW[player] = [], ef.jX[player] = []
		}(player)) : !ee && ef.jU[es].length || this.pz(es)
	}, this.pz = function(player) {
		! function(player) {
			aB.lk.qD(player) || (ef.jb[player] = cE.qE.qF(), bz.qG++);
			var qH = ly.q1(player);
			0 === qH.length ? aB.lk.qI(player) && qJ() : (q0(player, qH), function(player, qH) {
				var qR = qH[function(qH) {
					var c8, h = 0;
					for (c8 = qH.length - 1; 1 <= c8; c8--) ef.eg[qH[c8]] > ef.eg[qH[h]] && (h = c8);
					return h
				}(qH)];
				9 === bz.qS && (1 === eb.eo[player] ? qT.qU(8) && qV.qW(qR) : fq.me[player] && (iU.qX(765, 0), iU.qY(280, L(70, [ef.gj[qR], ef.gj[player]]), 765, qR, dK.aC, dK.bY, -1, !0)));
				if (aB.lk.qI(player)) qJ(), iU.qZ(qR, 1);
				else {
					for (var c8 = qH.length - 1; 0 <= c8; c8--)
						if (aB.lk.q7(qH[c8]) && (ch.qa[4 - aB.lk.qD(player)]++, aB.lk.qI(qH[c8]))) return iU.qZ(player, 0);
					aB.lk.qD(player) || iU.qb(0, player, qR)
				}
			}(player, qH))
		}(player), iY.q2(player), q3(player), q5(player),
			function(player) {
				ef.fo[player] = 0, ef.jU[player] = null, ef.jV[player] = null, ef.jW[player] = null, ef.jX[player] = null
			}(player), mh.q4(player), ly.clear(player), g6.qB.qC(player)
	}
}

function dD(title, dg, qe, qf) {
	var cK, qg;
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), qg.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, qf = qf || [new cN("⬅️ " + L(14), function() {
		br.kl()
	})], cK = new cd(title, qf), qg = new de(cK.cf, dg), qe && aB.dE.textAlign(cK.cf.style, 1)
}

function qh() {
	this.ll = function(qi) {
		return 0 === qi ? 1 === bz.gb && bz.k2 : 1 === qi ? 1 === bz.gb && !bz.k2 : 2 === bz.gb
	}, this.lm = function(player) {
		return 0 !== ef.fo[player] && 2 !== ef.jO[player]
	}, this.qI = function(player) {
		return player === bz.cr && 2 !== ef.jO[player]
	}, this.qj = function(player, lt) {
		return player !== lt && (0 === eb.eo[player] || eb.eo[player] !== eb.eo[lt])
	}, this.qk = function() {
		return en.ep < 2 ? 0 : bz.eN ? 1 < go.ev() : ef.eg[eh[1]]
	}, this.ql = function() {
		var ep = en.ep;
		if (0 !== ep) {
			if (!bz.eN) return !this.qD(eh[0]);
			for (var eo = eb.eo, eZ = go.ea(), em = en.em, c8 = ep - 1; 0 <= c8; c8--) {
				var es = em[c8];
				if (eo[es] === eZ && !this.qD(es)) return 1
			}
		}
		return 0
	}, this.q7 = function(player) {
		return player === bz.cr
	}, this.qm = function(lt, h8) {
		return ef.g5[bz.cr] < h8 * ef.g5[lt]
	}, this.qD = function(player) {
		return player >= bz.fj || 2 === ef.jO[player]
	}, this.qn = function(player) {
		return 0 !== ef.fo[player]
	}, this.qo = function(player) {
		return player < bz.fj
	}, this.lu = function(qp, qq) {
		return qp !== qq
	}, this.qr = function(player, dt) {
		var min;
		return dt = this.qs(player, dt), ef.g5[player] += dt, ef.jd[player] && (min = Math.min(ef.jd[player], ef.g5[player]), ef.jd[player] -= min, ef.g5[player] -= min), dt
	}, this.qs = function(player, dt) {
		var qt = ef.g5[player];
		return dt = Math.min(dt, ef.eg[player] * bz.qu - qt), dt = Math.min(dt, bz.qv - qt), Math.max(dt, 0)
	}, this.lv = function(player, ls, qw, qx) {
		var qt = ef.g5[player],
			ls = io.dp(qt * (ls + 1), 1024),
			qw = io.dp(qw * qt, 1024),
			ls = Math.min(ls, qt - qw);
		return 10 === bz.qS && (ls = qz.r0(player, ls)), er.mC[0] = ls, er.mC[1] = qw, qx <= ls
	}, this.m9 = function(player, gC, m7) {
		var player = ef.g5[player],
			qy = io.dp(64 * player, 1024);
		return gC = Math.min(gC, player - qy), gC = this.qs(m7, gC), er.mC[0] = gC, er.mC[1] = qy, 1 <= gC
	}, this.r1 = function(player, gC, m7) {
		var player = ef.g5[player],
			qy = io.dp(64 * player, 1024);
		return gC = Math.min(gC, player - qy), this.qs(m7, gC)
	}, this.r2 = function(gC, m7) {
		return gC = this.qs(m7, gC), er.mC[0] = gC, er.mC[1] = 0, 1 <= gC
	}, this.mA = function(player, r3) {
		return io.dp(ef.g5[player] * (r3 + 1), 1024)
	}, this.r4 = function(player, qw) {
		qw = io.dp(qw * ef.g5[player], 1024);
		er.mC[1] = qw, ef.g5[player] -= qw
	}, this.nn = function(player, r5) {
		var dx, dy, dr = ef.g5[player];
		return r5 <= dr ? ef.g5[player] -= r5 : (ef.g5[player] = 0, dy = ef.jd[player] + (dx = 5 * ((dr = r5 - dr) >> 2)), ch.nk(player, dx - dr, 12), dy <= bz.r6 ? ef.jd[player] = dy : (ef.jd[player] = bz.r6, ch.nk(player, dy - bz.r6, 18))), r5
	}, this.mf = function(player, ls) {
		var g5 = ef.g5,
			qt = g5[player],
			ls = io.dp(qt * (ls + 1), 1024),
			qy = Math.max(io.dp(qt, 10), 1e3);
		return (ls = Math.min(ls, qt - qy)) < 0 ? (g5[player] = 0, qy = Math.min(1e3, qt + bz.r6 - ef.jd[player]), er.mC[1] = qy, ef.jd[player] += qy - qt, 0) : (er.mC[1] = qy, 10 === bz.qS && (ls = qz.r0(player, ls)), g5[player] -= qy + ls, ls)
	}, this.m4 = function(player) {
		ef.g5[player] -= er.mC[0] + er.mC[1]
	}, this.lw = function(player, lt) {
		return (lt = Math.min(lt, bz.fi)) < bz.fi && 0 === ef.fo[lt] && (lt = bz.fi), (er.m0[0] = lt) === bz.fi || nI.r7(player, lt)
	}, this.m8 = function(player, m7) {
		return 0 !== ef.fo[m7] && !nI.r7(player, m7)
	}, this.r8 = function(player, r9) {
		for (var es, cI = en.ep, rA = 0, rB = eh, c8 = 0; c8 < cI; c8++)
			if (es = rB[c8], !this.qD(es)) {
				if (player === es) return !0;
				if (++rA > r9) return !1
			} return !1
	}, this.rC = function(es) {
		var rD = bz.eN ? go.eW() : ef.eg[eh[0]];
		return rD >= io.dp(es * bz.rE, 100)
	}, this.rF = function(dt, min, max) {
		return Math.floor(io.du(isNaN(dt) ? 0 : Number(dt), min, max))
	}
}

function rG() {
	var rH = 0,
		rI = 0,
		rJ = 0,
		rK = 0,
		rL = -1;

	function rW(mx) {
		if (rL === mx) return !1;
		if (-1 === (rL = mx)) rH = 0, iU.rZ(rH, 0);
		else {
			if (n0.ra(mx)) return rJ = n0.rb(mx), rc = ef.g5[rJ] - ef.jd[rJ], (4 !== rH || rc !== rI) && (rH = 4, rI = rc, iU.rZ(rH, rc), !0);
			if (n0.rd(mx)) return 3 !== rH && (rH = 3, iU.rZ(rH, 0), !0);
			if (n0.re(mx)) return 2 !== rH && (rH = 2, iU.rZ(rH, 0), !0);
			var rc = g6.k7.rg(h6.rR, h6.rU);
			if (-1 === rc) return 1 !== rH && (rH = 1, iU.rZ(rH, 0), !0);
			mx = g6.z.ri[rc];
			if (rJ = g6.z.rj[rc], rK = g6.z.rk[rc] >> 3, 5 === rH && mx === rI) return !1;
			rH = 5, rI = mx, iU.rZ(rH, mx)
		}
		return !0
	}
	this.g = function() {
		rK = rJ = rI = rH = 0, rL = -1
	}, this.dI = function(hz) {
		var rS;
		!hz && h6.h7() || (hz = kA.rQ(h6.rR), rS = kA.rT(h6.rU), kA.rV(hz, rS) ? (hz = kA.rX(hz, rS), rW(kA.rY(hz))) : rW(-1))
	}, this.rN = function() {
		var rl, rc, rf, rh;
		if (0 !== rH && 2 !== rH)
			if (h6.h7()) {
				if (1 !== rH && 3 !== rH) {
					if (4 === rH) return void(rc = ef.g5[rJ] - ef.jd[rJ], rI === rc || (rI = rc, iU.rZ(rH, rc)));
					(rf = g6.k7.k8(rK, rJ)) < 0 ? (rH = 1, iU.rZ(rH, 0)) : (rh = g6.z.ri[rf]) !== rI && (rI = rh, iU.rZ(rH, rh))
				}
			} else if (1 === rH) - 1 !== (rf = g6.k7.rg(h6.rR, h6.rU)) && (rH = 5, rI = g6.z.ri[rf], iU.rZ(rH, rI));
		else if (3 === rH) n0.ra(rL) && (rH = 4, rl = n0.rb(rL), rI = ef.g5[rl] - ef.jd[rl], iU.rZ(rH, rI));
		else if (4 === rH) {
			if (n0.ra(rL)) return void(rl = n0.rb(rL), rc = ef.g5[rl] - ef.jd[rl], rI === rc || (rI = rc, iU.rZ(rH, rc)));
			rH = 3, iU.rZ(rH, 0)
		} else - 1 === (rf = g6.k7.rg(h6.rR, h6.rU)) ? (rH = 1, iU.rZ(rH, 0)) : (rh = g6.z.ri[rf]) !== rI && (rI = rh, iU.rZ(rH, rh))
	}
}

function rm() {
	var rn, ro, rp, rq, rr, rs, rt, ru, rv, rw, rx, ry, rz, s0, s1, s2, s3, s4, s6, s7, s8, s9, sA, sG, sH, s5 = null,
		sC = 0,
		sD = !1,
		sE = new Float32Array(4),
		sF = 0,
		sI = 112,
		sJ = 0;

	function sK() {
		rv = Math.floor(+eT.eU), rw = Math.floor(.5 * rv), s5.width = eT.eJ, s5.height = eT.gP, s6 = s5.getContext("2d", {
			alpha: !0
		}), aB.dE.textAlign(s6, 1), aB.dE.textBaseline(s6, 1), s6.imageSmoothingEnabled = !0
	}

	function sL() {
		var c8, sU;
		for (fD.font = aB.dE.f9(1, 100 * rx), sU = 80 / Math.floor(fD.measureText(aB.oB.sV(bz.qv)).width), fD.font = aB.dE.f9(1, 100), c8 = bz.fi - 1; 0 <= c8; c8--) ru[c8] = 100 / Math.floor(fD.measureText(ef.gj[c8]).width), rt[c8] = Math.min(sU,
			ru[c8])
	}

	function sW(c8) {
		return !sJ || (c8 = ef.g5[c8]) < 1e6 ? 1 : c8 < 1e7 ? sE[0] : sE[Math.min(Math.floor(Math.log10(c8)) - 6, 3)]
	}

	function sT(hB) {
		sD = !1, sC = cm.gX, s4 = !1, s3 = 1, s1 = s2 = 0, hB.clearRect(0, 0, eT.eJ, eT.gP);
		for (var ss, st, c8, su, fontSize, sv, kD = ju / jv, kF = jw / jv, kT = (eT.eJ + ju) / jv, kU = (eT.gP + jw) / jv, sw = 0 !== ef.fo[bz.cr] && !aB.lk.qD(bz.cr), dq = en.ep - 1; 0 <= dq; dq--) c8 = en.em[dq], (fontSize = Math.floor(s0 * jv *
			sW(c8) * rt[c8] * rr[c8])) < rz || rv <= fontSize || rp[c8] + rr[c8] > kD && rp[c8] < kT && rq[c8] + rs[c8] > kF && rq[c8] < kU && (ss = Math.floor(eT.eJ * (rp[c8] + rr[c8] / 2 - kD) / (kT - kD)), st = Math.floor(eT.gP * (rq[c8] + rs[
				c8] / 2 - kF) / (kU - kF) - .1 * fontSize), su = n0.sQ[c8], hB.font = aB.dE.f9(1 === ef.jO[c8] ? 4 : 1, fontSize), hB.fillStyle = sx(fontSize, su % 2), sJ ? sy(hB, c8, fontSize, ss, st, su) : sz(c8, fontSize, ss, st, hB), s4 = !0,
			0 < s8[c8] ? function(ss, st, fontSize, c8, hB) {
				0 === t1[c8] ? sd.oQ.se(s7[c8]) ? (function(ss, st, fontSize, player, mV, hB) {
					for (var tB = st, tQ = (hB.globalAlpha = tC(fontSize), sW(player) * (sJ ? sF : ru[player])), tA = ss - .5 * fontSize / tQ - .9 * fontSize, dr = 0; dr < 2; dr++) hB.fillText(sd.oQ.tM(mV), tA, tB), tA = ss + .5 *
						fontSize / tQ + .9 * fontSize;
					hB.globalAlpha = 1
				}(ss, st, fontSize, c8, s7[c8], hB), t2(ss, st, fontSize, 0, 0, hB)) : sd.oQ.tF(s7[c8]) ? (tG(ss, st, fontSize, s7[c8], 0, hB), t2(ss, st, fontSize, 0, 1, hB)) : (tG(ss, st, fontSize, s7[c8], 1, hB), t2(ss, st, fontSize, 1, 0,
					hB)) : tG(ss, st, fontSize, s7[c8], 0, hB)
			}(ss, st, fontSize, c8, hB) : 0 === t1[c8] && t2(ss, st, fontSize, 0, 0, hB), sw && (0 < s8[c8 + bz.fi] || 0 < s8[c8 + 2 * bz.fi] || 0 < s8[c8 + 3 * bz.fi] || 0 < s8[c8 + 4 * bz.fi]) && function(ss, st, fontSize, c8, hB) {
				var aA, el = -1;
				for (aA = 4; 1 <= aA; aA--) 0 < s8[c8 + aA * bz.fi] && el++;
				for (aA = 1; aA < 5; aA++) 0 < s8[c8 + aA * bz.fi] && (! function(ss, st, fontSize, aA, c8, t7, ee, hB) {
					var tN;
					if (1 === aA) {
						c8 = s7[c8 + bz.fi];
						if (!sd.oQ.tI(c8)) return function(ss, st, fontSize, mV, t7, hB) {
							hB.globalAlpha = tC(fontSize);
							ss -= .534 * t7 * fontSize, t7 = st + 1.59 * fontSize;
							hB.font = aB.dE.f9(0, .785 * fontSize), hB.fillText(sd.oQ.tM(mV), ss, t7), hB.globalAlpha = 1
						}(ss, st, fontSize, c8, t7, hB);
						tN = sd.iv.tK[c8 - 1024 + sd.oQ.tL]
					} else tN = 2 === aA ? iX.tP()[4].canvas[+(ee < 255)] : (3 === aA ? iX.tP()[5] : iX.tP()[6]).canvas[0];
					c8 = sd.iv.tJ, ee = .8 * fontSize / c8, aA = ss - .5 * ee * c8 - .534 * t7 * fontSize, ss = st + 1.4 * ee * c8;
					hB.setTransform(ee, 0, 0, ee, aA, ss), hB.globalAlpha = tC(fontSize), hB.drawImage(tN, 0, 0), hB.globalAlpha = 1, hB.setTransform(1, 0, 0, 1, 0, 0)
				}(ss, st, fontSize, aA, c8, el, s8[c8 + aA * bz.fi], hB), el -= 2)
			}(ss, st, fontSize, c8, hB), (sv = rx * fontSize) < rz || (hB.font = aB.dE.f9(1, sv), st += Math.floor(.78 * fontSize), sJ ? sz(c8, sv, ss, st, hB) : sy(hB, c8, sv, ss, st, su)))
	}

	function sz(c8, fontSize, e2, e3, hB) {
		var ___id = c8;
		var showName = c8 < bz.fj || !__fx.settings.hideBotNames;
		if (showName) hB.fillText(ef.gj[c8], e2, e3), c8 < bz.fj && 2 !== ef.jO[c8] || (c8 = fontSize / ru[c8], hB.fillRect(e2 - .5 * c8, e3 + aB.dE.t5 * fontSize, c8, Math.max(1, .1 * fontSize)));
		sJ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hB.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hB.fillText(__fx.utils.getDensity(___id), e2, showName ? e3 + fontSize : e3)
		);
	}

	function sy(hB, c8, fontSize, ss, st, su) {
		var jd = ef.jd[c8],
			t6 = aB.oB.sV(ef.g5[c8] - jd);

		function drawDensity() {
			!sJ && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hB.fillStyle = __fx.utils.textStyleBasedOnDensity(c8)), hB.fillText(__fx.utils.getDensity(c8), ss, st + fontSize))
		}
		jd ? (jd = hB.fillStyle, hB.fillStyle = sx(fontSize, 2 + su % 2), hB.fillText(t6, ss, st), hB.fillStyle = jd) : su >> 1 & 1 ? (hB.lineWidth = .05 * fontSize, hB.strokeStyle = sx(fontSize, su % 2), hB.strokeText(t6, ss, st)) : (1 < su && (hB
			.lineWidth = .12 * fontSize, hB.strokeStyle = sx(fontSize, su), hB.strokeText(t6, ss, st)), hB.fillText(t6, ss, st)), drawDensity()
	}

	function t2(ss, st, fontSize, t7, t8, hB) {
		var t9 = .95 * fontSize / sA,
			ss = ss - .5 * t9 * s9 + .8 * t7 * fontSize,
			t7 = st - 1.76 * t9 * sA - (.35 - aB.dE.t5 + .7) * t8 * fontSize;
		hB.setTransform(t9, 0, 0, t9, ss, t7), hB.globalAlpha = tC(fontSize), hB.drawImage(iH.get(4), 0, 0), hB.globalAlpha = 1, hB.setTransform(1, 0, 0, 1, 0, 0)
	}

	function tG(ss, st, fontSize, mV, t7, hB) {
		var tH, tA, t9;
		hB.globalAlpha = tC(fontSize), sd.oQ.tI(mV) ? (tH = sd.iv.tJ, hB.setTransform(t9 = 1.1 * fontSize / tH, 0, 0, t9, tA = ss - .5 * t9 * tH - .8 * t7 * fontSize, t9 = st - 1.55 * t9 * tH), hB.drawImage(sd.iv.tK[mV - 1024 + sd.oQ.tL], 0, 0), hB
			.setTransform(1, 0, 0, 1, 0, 0)) : (tA = ss - .8 * t7 * fontSize, t9 = st - (.35 - aB.dE.t5 + 1) * fontSize, hB.fillText(sd.oQ.tM(mV), tA, t9)), hB.globalAlpha = 1
	}

	function sx(fontSize, su) {
		return rw <= fontSize && fontSize < rv ? eb.tR[su] + tC(fontSize).toFixed(3) + ")" : eb.tS[su]
	}

	function tC(fontSize) {
		return rw <= fontSize && fontSize < rv ? 1 - (fontSize - rw) / (rv - rw) : 1
	}

	function ti(tQ, eJ) {
		return 1 + Math.floor(ry * tQ * eJ)
	}

	function tf(c8) {
		for (var left = rp[c8], dq = rp[c8] - ef.jP[c8] - 1; 0 <= dq; dq--)
			if (!tl(c8, --left, rq[c8], rs[c8])) {
				left++;
				break
			} var right = rp[c8];
		for (dq = ef.jR[c8] - rp[c8] - rr[c8]; 0 <= dq; dq--)
			if (!tl(c8, ++right + rr[c8] - 1, rq[c8], rs[c8])) {
				right--;
				break
			} var e2 = Math.floor((left + right) / 2),
			top = rq[c8];
		for (dq = rq[c8] - ef.jQ[c8] - 1; 0 <= dq; dq--)
			if (!tm(c8, e2, --top, rr[c8])) {
				top++;
				break
			} var bottom = rq[c8];
		for (dq = ef.jS[c8] - rq[c8] - rs[c8]; 0 <= dq; dq--)
			if (!tm(c8, e2, ++bottom + rs[c8] - 1, rr[c8])) {
				bottom--;
				break
			} var e3 = Math.floor((top + bottom) / 2);
		tc(c8, e2, e3, rr[c8], rs[c8]) && (rp[c8] = e2, rq[c8] = e3)
	}

	function tc(player, e2, e3, eJ, gP) {
		by = Math.floor(.2 * eJ);
		for (var by, aA = e2 + eJ - 1; e2 <= aA; aA--)
			if (!tl(player, aA, e3, gP)) return;
		for (aA = e3 + gP - 1 - (by = (by = Math.floor(.25 * gP)) < 1 ? 1 : by); e3 + by <= aA; aA--)
			if (!tm(player, e2, aA, eJ)) return;
		return 1
	}

	function tl(player, e2, e3, gP) {
		return n0.qc(player, 4 * (e3 * c2.k0 + e2)) && n0.qc(player, 4 * ((e3 + gP - 1) * c2.k0 + e2))
	}

	function tm(player, e2, e3, eJ) {
		return n0.qc(player, 4 * (e3 * c2.k0 + e2)) && n0.qc(player, 4 * (e3 * c2.k0 + e2 + eJ - 1))
	}
	this.g = function() {
		if (sJ = d1.d2.data[7].value || 8 === bz.qS, s4 = !1, s0 = .88, rx = .5, ry = 1.8, rz = 12 - 3 * d1.d2.data[9].value, ro = rn = 0, rp = new Uint16Array(bz.fi), rq = new Uint16Array(bz.fi), rr = new Uint16Array(bz.fi), rs =
			new Uint16Array(bz.fi), rt = new Float32Array(bz.fi), ru = new Float32Array(bz.fi), s7 = new Uint16Array(2 * bz.fi), s8 = new Uint8Array(5 * bz.fi), sG = new Uint8Array(bz.fi), sH = new Uint8Array(bz.fi), s5 = s5 || document
			.createElement("canvas"), sK(), s2 = s1 = 0, s3 = 1, sJ) {
			var c8, sU;
			for (sL(), fD.font = aB.dE.f9(1, 100), sU = 100 / Math.floor(fD.measureText("900 000").width), c8 = bz.fi - 1; 0 <= c8; c8--) rt[c8] = Math.min(sU, 2 * ru[c8]);
			sF = sU, sE[0] = 100 / (sU * Math.floor(fD.measureText("5 000 000").width)), sE[1] = 100 / (sU * Math.floor(fD.measureText("50 000 000").width)), sE[2] = 100 / (sU * Math.floor(fD.measureText("500 000 000").width)), sE[3] = 100 / (
				sU * Math.floor(fD.measureText("1 000 000 000").width))
		} else sL();
		! function() {
			var c8;
			for (c8 = bz.fi - 1; 0 <= c8; c8--) ef.eg[c8] < 12 ? (rp[c8] = ef.jP[c8] + 1, rq[c8] = ef.jQ[c8] + 1, rr[c8] = 1, rs[c8] = 1) : (rp[c8] = ef.jP[c8], rq[c8] = ef.jQ[c8] + 1, rr[c8] = 4, rs[c8] = 2);
			if (bz.k2)
				for (c8 = 0; c8 < bz.fj; c8++) rr[c8] = 0;
			s9 = iH.get(4).width, sA = iH.get(4).height
		}()
	}, this.sO = function(es, sP) {
		sP > 18 * ef.eg[es] ? (sH[es] = 6, n0.sQ[es] = 2 + n0.sQ[es] % 2) : (sG[es] = 4, (n0.sQ[es] < 2 || 3 < n0.sQ[es]) && (n0.sQ[es] = 6 + n0.sQ[es] % 2))
	}, this.sR = function(es, sP) {
		sP > 6 * ef.eg[es] ? (sH[es] = 6, n0.sQ[es] = 4 + n0.sQ[es] % 2) : (sG[es] = 4, (n0.sQ[es] < 4 || 5 < n0.sQ[es]) && (n0.sQ[es] = 8 + n0.sQ[es] % 2))
	}, this.resize = function() {
		sK(), sT(s6)
	}, this.sY = function() {
		for (var c8 = 0; c8 < bz.fj; c8++) ef.jR[c8] - ef.jP[c8] != 3 || ef.jS[c8] - ef.jQ[c8] != 3 ? (rp[c8] = ef.jP[c8] + (ef.jR[c8] !== ef.jP[c8] ? 1 : 0), rq[c8] = ef.jQ[c8], rr[c8] = 1, rs[c8] = 1) : (rp[c8] = ef.jP[c8], rq[c8] = ef.jQ[c8] +
			1, rr[c8] = 4, rs[c8] = 2)
	}, this.mW = function(player, h, sZ) {
		! function(player, h, sZ) {
			player += h * bz.fi;
			0 === h ? s7[player] === sZ && 0 < s8[player] ? s8[player] = 0 : (s7[player] = sZ, s8[player] = sd.oQ.se(sZ) ? 255 : 64) : 1 === h ? (s8[player] = 64, s7[player] = sZ) : s8[player] = sZ
		}(player, h, sZ), 2 === bz.gb && this.sb(!0)
	}, this.fC = function() {
		s4 && (1 !== s3 ? (fD.imageSmoothingEnabled = !0, fD.setTransform(s3, 0, 0, s3, 0, 0), fD.drawImage(s5, -s1 / s3, -s2 / s3), fD.setTransform(1, 0, 0, 1, 0, 0), fD.imageSmoothingEnabled = !1) : fD.drawImage(s5, -s1, -s2))
	}, this.sf = function(e4, e5) {
		s1 += e4, s2 += e5
	}, this.sg = function(e4, e5) {
		iY.sf(e4, e5)
	}, this.zoom = function(sh, si, sj) {
		s3 *= sh, s1 = (s1 + si) * sh - si, s2 = (s2 + sj) * sh - sj
	}, this.q2 = function(player) {
		var jP = ef.jP[player],
			jR = ef.jR[player],
			jQ = ef.jQ[player],
			jS = ef.jS[player],
			sm = kA.rQ(0),
			sn = kA.rT(0),
			so = kA.rQ(eT.eJ),
			sp = kA.rT(eT.gP);
		jP < so && sm < jR && jQ < sp && sn < jS && (rr[player] = 0, sD = !0)
	}, this.sb = function(hz) {
		return !(!sD && !hz && cm.gX < sC + (1 === s3 && 0 === s1 && 0 === s2 && (bz.sl() || bz.k2 || 2 === bz.gb) ? 1e3 : sI) || (sT(s6), 0))
	}, this.sq = function(c8) {
		return sW(c8) * rt[c8]
	}, this.sr = function(player) {
		return rt[player]
	}, this.dI = function() {
		cm.lJ() % 10 == 9 && (sD = sD || bz.tT() && !bz.sl()), !bz.sl() && 4 <= ++ro && function() {
			var c8, dq, dr;
			for (ro = 0, dr = 4; 1 <= dr; dr--)
				for (dq = en.ep - 1; 0 <= dq; dq--) c8 = en.em[dq] + dr * bz.fi, 0 < s8[c8] && s8[c8] < 255 && s8[c8]--;
			if (2 !== bz.gb)
				for (dq = en.ep - 1; 0 <= dq; dq--) c8 = en.em[dq], 0 < s8[c8] && s8[c8] < 255 && s8[c8]--
		}();
		var c8, dq, cI = Math.floor(.1 * en.ep);
		for (cI = (cI = cI < 8 ? 8 : cI) > en.ep ? en.ep : cI, c8 = rn + cI - 1; rn <= c8; c8--) dq = c8 % en.ep, ! function(c8) {
			var tQ = sW(c8) * rt[c8];
			0 < rr[c8] && tc(c8, rp[c8], rq[c8], rr[c8], rs[c8]) ? ! function(c8) {
				for (var e2, e3, eJ, gP, mx = !1, dr = 0; dr < 8; dr++) {
					if (eJ = rr[c8] + 2, gP = rs[c8] + 2, eJ > ef.jR[c8] - ef.jP[c8] + 1 || gP > ef.jS[c8] - ef.jQ[c8] + 1) return mx;
					if (e2 = rp[c8] - 1, e3 = rq[c8] - 1, !tc(c8, e2, e3, eJ, gP)) return mx;
					rp[c8] = e2, rq[c8] = e3, rr[c8] = eJ, rs[c8] = gP, mx = !0
				}
				return mx
			}(c8) && function(c8, tQ) {
				for (var e2, e3, eJ, gP, mx = !1, tj = rr[c8], h8 = 1 + Math.floor(.02 * tj), dr = 1; dr < 5; dr++) {
					if ((eJ = tj + dr * h8) > ef.jR[c8] - ef.jP[c8] + 1) return mx;
					if ((gP = ti(tQ, eJ)) > ef.jS[c8] - ef.jQ[c8] + 1) return mx;
					e2 = ef.jP[c8] + Math.floor(Math.random() * (ef.jR[c8] - ef.jP[c8] + 2 - eJ)), e3 = ef.jQ[c8] + Math.floor(Math.random() * (ef.jS[c8] - ef.jQ[c8] + 2 - gP)), tc(c8, e2, e3, eJ, gP) && (rp[c8] = e2, rq[c8] = e3, rr[
						c8] = eJ, rs[c8] = gP, mx = !0)
				}
				return mx
			}(c8, tQ) && tf(c8) : ! function(c8, tQ) {
				var gP, e2 = rp[c8] + 1,
					e3 = rq[c8] + 1,
					eJ = rr[c8] - 2;
				for (;;) {
					if (eJ < 1) {
						rr[c8] = 0;
						break
					}
					if (gP = ti(tQ, eJ), tc(c8, e2, e3, eJ, gP)) return rp[c8] = e2, rq[c8] = e3, rr[c8] = eJ, rs[c8] = gP, 1;
					e2++, e3++, eJ -= 2
				}
				return
			}(c8, tQ) ? function(c8, tQ) {
				var e2, e3, eJ, gP, dr, fs, oG = ef.jR[c8] - ef.jP[c8] + 1,
					tk = Math.floor(.02 * oG);
				for (fs = -6 * (tk = tk < 1 ? 1 : tk), dr = oG; fs <= dr; dr -= tk)
					if (gP = ti(tQ, eJ = 0 < dr ? dr : 1), e2 = ef.jP[c8] + Math.floor(Math.random() * (ef.jR[c8] - ef.jP[c8] + 2 - eJ)), e3 = ef.jQ[c8] + Math.floor(Math.random() * (ef.jS[c8] - ef.jQ[c8] + 2 - gP)), tc(c8, e2, e3, eJ,
							gP)) return rp[c8] = e2, rq[c8] = e3, rr[c8] = eJ, rs[c8] = gP
			}(c8, tQ) : tf(c8)
		}(en.em[dq]);
		rn = (rn += cI) % en.ep
	}, this.tW = function() {
		var c8, es, tX, tY;
		if (cm.lJ() % 4 == 1)
			for (c8 = en.ep - 1; 0 <= c8; c8--) es = en.em[c8], n0.sQ[es] < 2 || ((tX = Math.max(sG[es] - 1, 0)) === (tY = Math.max(sH[es] - 1, 0)) ? 0 === tX && (n0.sQ[es] %= 2) : 0 === tY && n0.sQ[es] < 6 && (n0.sQ[es] += 4), sG[es] = tX, sH[
				es] = tY)
	}, this.tZ = function(player) {
		var c8 = player + 2 * bz.fi,
			ee = s8[c8];
		return 0 < ee && (iU.ta(50, player), s8[c8] = 0, 255 === ee)
	}, this.tb = function(player) {
		return 255 === s8[player + 2 * bz.fi]
	}
}

function fR() {
	var dh;
	this.tn = [], this.dh = document.createElement("div"), this.fS = function(dZ, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = dZ, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.dh.appendChild(
			title), title
	}, this.fT = function(dZ, marginBottom) {
		var tp = document.createElement("p");
		return tp.textContent = dZ, tp.style.fontSize = "0.75em", tp.style.lineHeight = "1.2em", tp.style.marginBottom = marginBottom || "0", this.dh.appendChild(tp), tp
	}, this.tq = function(dZ) {
		var tr = document.createElement("p");
		return tr.textContent = dZ, tr.style.fontSize = "1em", tr.style.marginBottom = "0", tr.style.whiteSpace = "pre-wrap", tr.style.overflowWrap = "break-word", this.dh.appendChild(tr), tr
	}, this.kn = function(dg, fontSize) {
		var dh = document.createElement("div");
		return dh.innerHTML = dg, dh.style.fontSize = fontSize || "1em", dh.style.lineHeight = "1.2em", this.dh.appendChild(dh), dh
	}, this.fc = function(ts) {
		for (var tt = ts.tt, cI = tt.length, c8 = 0; c8 < cI; c8++) this.dh.appendChild(tt[c8])
	}, this.fX = function(hm) {
		return this.tn.push(hm), this.dh.appendChild(hm.a6), hm
	}, this.resize = function() {
		for (var cI = this.tn.length, c8 = 0; c8 < cI; c8++) this.tn[c8].resize && this.tn[c8].resize()
	}, (dh = this.dh).style.position = "absolute", dh.style.height = "auto", dh.style.padding = "0.5em"
}

function tu() {
	var tv, tw, tx;
	this.g = function() {
		tv = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), tw =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), tx = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var pa = ["K ", " Y", "E ", " Z", " z", " s", "S "], pe = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], c8 = tv.length - 1; 0 <= c8; c8--)
			for (var dq = pa.length - 1; 0 <= dq; dq--) tv[c8] = tv[c8].replace(pa[dq], pe[dq]);
		if (__fx.settings.realisticNames) tv = realisticNames;
	}, this.ty = function() {
		var cI = bz.fj,
			gj = ef.gj,
			jN = ef.jN,
			playerNamesData = bz.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < cI)
			for (var c8 = 0; c8 < cI; c8++) gj[c8] = jN[c8] = "Player " + qT.u4(1e3);
		else
			for (c8 = 0; c8 < cI; c8++) gj[c8] = jN[c8] = __fx.nameFilter.filter(playerNamesData[c8])
	}, this.cB = function() {
		if (9 === bz.qS) {
			for (var ey = qT.random(), u5 = tx, u6 = tw, me = fq.me, cI = u5.length, dU = bz.data.teamPlayerCount[7], gj = ef.gj, jN = ef.jN, c8 = dU - 1; c8 >= bz.fj; c8--) gj[c8] = jN[c8] = u5[(c8 + ey) % cI];
			for (cI = u6.length - 1, c8 = dU; c8 < bz.fi; c8++) gj[c8] = jN[c8] = u6[me[c8] ? cI : c8 % cI]
		} else(2 === bz.data.playerNamesType ? function() {
			for (var cI = bz.fi, gj = ef.gj, jN = ef.jN, playerNamesData = bz.data.playerNamesData, c8 = bz.fj; c8 < cI; c8++) gj[c8] = jN[c8] = __fx.nameFilter.filter(playerNamesData[c8])
		} : 1 === bz.data.playerNamesType ? function() {
			for (var gj = ef.gj, jN = ef.jN, c8 = bz.fj; c8 < bz.fi; c8++) gj[c8] = jN[c8] = "Bot " + qT.u4(1e3)
		} : function() {
			for (var u7 = tv, cI = u7.length, ey = qT.random(), gj = ef.gj, jN = ef.jN, c8 = bz.fj; c8 < bz.fi; c8++) gj[c8] = jN[c8] = u7[(c8 + ey) % cI]
		})()
	}
}

function u8() {
	function uN() {
		var id = ft.fu(3);
		return 0 === id ? {
			id: id,
			c9: ft.fu(30),
			oO: bf.pN.uP(j8.hd.j9(7))
		} : 1 === id ? {
			id: id,
			c9: ft.fu(30),
			uQ: ft.fu(3),
			value: ft.fu(30),
			target: ft.fu(30)
		} : 2 === id ? {
			id: id,
			c9: ft.fu(30),
			uQ: ft.fu(3)
		} : 3 === id ? {
			id: id,
			c9: ft.fu(30),
			uQ: ft.fu(3),
			value: ft.fu(4),
			target: ft.fu(30)
		} : 4 === id ? {
			id: id,
			c9: ft.fu(30),
			uQ: ft.fu(3),
			target: ft.fu(30)
		} : 5 === id ? {
			id: id,
			uQ: ft.fu(6)
		} : 6 === id ? {
			id: id,
			value: ft.fu(17)
		} : null
	}
	this.u9 = function(cG) {
		cE.cF.cG = cG, cE.cF.g(ft.fu(30), ft.fu(30), ft.fu(5))
	}, this.uA = function(cG) {
		if (cG !== y.z.l0) y.z.close(cG, 3239);
		else if (6 !== cA.cg()) y.z.close(cG, 3271);
		else {
			bf.g();
			for (var c8 = 0; c8 < 4; c8++) {
				var bh = bf.z.bi[c8],
					playerCount = (bh.ot = ft.fu(10), bh.c4 = ft.fu(6), bh.mapSeed = ft.fu(14), bh.bk = ft.fu(4), bh.pf = ft.fu(6), bh.pg = ft.fu(14), bh.ph = ft.fu(4), bh.c1 = ft.fu(1), bh.ov = ft.fu(12), bh.spawningSeed = ft.fu(14), ft.fu(16));
				bf.bg.be[c8] = ft.fu(16);
				for (var dq = 0; dq < playerCount; dq++) bf.bg.uB(c8, ft.fu(30), j8.hd.j9(5), ft.fu(4), ft.fu(30), ft.fu(7), ft.fu(16), ft.fu(18), ft.fu(11), ft.fu(12))
			}
			br.cP(29), bf.z.oh(!0)
		}
	}, this.uC = function(cG) {
		if (cG !== y.z.l0) y.z.close(cG, 3239);
		else if (bf.pK) {
			bf.z.oe[0] = ft.fu(20), bf.z.oe[1] = ft.fu(20);
			for (var uD = ft.fu(16), dq = 0; dq < uD; dq++) {
				var id = ft.fu(3);
				0 === id ? bf.bg.uB(ft.fu(2), ft.fu(30), j8.hd.j9(5), 0, 1234566, 127, 0, ft.fu(18), 0, ft.fu(12)) : 1 === id ? bf.bg.uE(ft.fu(16), ft.fu(2)) : 2 === id ? bf.bg.uF(ft.fu(16), ft.fu(2), ft.fu(2)) : 3 === id ? bf.bg.uG(ft.fu(16), ft
					.fu(2)) : 4 === id ? bf.bg.uH(ft.fu(16), ft.fu(2), ft.fu(4), ft.fu(30), ft.fu(7), ft.fu(16), ft.fu(11), ft.fu(18)) : 5 === id && bf.bg.uI(ft.fu(16), ft.fu(2), ft.fu(1))
			}
			for (var c8 = 0; c8 < 4; c8++) {
				var bh = bf.z.bi[c8];
				if (bh.ot = ft.fu(10), bh.pf = ft.fu(6), bh.pg = ft.fu(14), bh.ph = ft.fu(4), 0 === bh.ot) {
					if (bh.hq = ft.fu(10), bh.bu = ft.fu(10), bf.lL.bd(c8)) return;
					bh.c4 = ft.fu(6), bh.mapSeed = ft.fu(14), bh.bk = ft.fu(4), bh.c1 = ft.fu(1), bh.ov = ft.fu(12), bh.spawningSeed = ft.fu(14), bh.uJ.push(bh.uJ[0]), bh.uJ.shift()
				}
			}
			bf.z.ok()
		} else y.z.close(cG, 3251)
	}, this.uK = function(cG) {
		if (cG !== y.z.l0) y.z.close(cG, 3272);
		else if (bf.pK) {
			for (var oE = ft.fu(4), bh = bf.z.bi[oE], oF = bh.oF, uL = (bh.oH = ft.fu(20), ft.fu(6)), c8 = 0; c8 < uL; c8++) {
				var uM = uN();
				bf.oQ.uO(uM), oF.push(uM)
			}
			bf.z.ow(oE)
		} else y.z.close(cG, 3273)
	}, this.uR = function(cG) {
		cG !== y.z.l0 ? y.z.close(cG, 3276) : bf.pK ? bf.message.uS(uN()) : y.z.close(cG, 3277)
	}
}

function uT() {
	var uU, uV, uW = -15e3,
		uX = !1;

	function ub(a6) {
		uq() || (uX = !0, ur(a6, 1), y.z.us(y.z.hq), ut(Math.floor(eT.i5 * a6.clientX), Math.floor(eT.i5 * a6.clientY)))
	}

	function uf(a6) {
		uW = cm.gX, ur(a6, 1), y.z.us(y.z.hq), 0 < a6.touches.length && (uU = Math.floor(eT.i5 * a6.touches[0].clientX), uV = Math.floor(eT.i5 * a6.touches[0].clientY), uu.uf(a6) || ut(uU, uV))
	}

	function ut(e2, e3) {
		br.ub(e2, e3), 0 === bz.gb ? cA.ub(e2, e3) : iV.uv(e2, e3) || ck.ub(e2, e3) || iZ.ub(e2, e3) || iX.uw(e2, e3) || iW.ub(e2, e3) || 0 <= cp.ub(e2, e3) || cw.ub(e2, e3) || h6.ux(e2, e3) || iX.uy(e2, e3)
	}

	function sg(a6) {
		uq() || (uX = !0, ur(a6, 1), uz(Math.floor(eT.i5 * a6.clientX), Math.floor(eT.i5 * a6.clientY)))
	}

	function ug(a6) {
		uW = cm.gX, ur(a6, 1), 0 < a6.touches.length && (uU = Math.floor(eT.i5 * a6.touches[0].clientX), uV = Math.floor(eT.i5 * a6.touches[0].clientY), uu.ug(a6) || uz(uU, uV))
	}

	function uz(e2, e3) {
		h6.h7() || (h6.rR = e2, h6.rU = e3), br.sg(e2, e3), 0 === bz.gb ? cA.sg(e2, e3) : (v0.v1(e2, e3), ck.sg(e2, e3) || (cp.sg(e2, e3), iX.v2() ? iX.sg(e2, e3) : gp.v3 ? gp.sg(e2) && (cm.cn = !0) : (iQ.sg(e2, e3), iT.kK && iT.sg(e2, e3) && (cm
			.cn = !0))))
	}

	function ud(a6) {
		uq() || (ur(a6, 1), v4(), 0 === bz.gb ? (cA.click(-1024, -1024), iO.reset()) : (iQ.v5(-1024, -1024), cp.sg(-1024, -1024), gp.v6(), iT.kK = !1))
	}

	function uc(a6) {
		uq() || (ur(a6, 1), v7(Math.floor(eT.i5 * a6.clientX), Math.floor(eT.i5 * a6.clientY), 2 === a6.button), h6.ua && (h6.ua = !1, a6.preventDefault()))
	}

	function click(a6) {
		uq() || ur(a6, 1)
	}

	function uh(a6) {
		uW = cm.gX, ur(a6, 1), a6 && a6.touches && 0 < a6.touches.length && 0 !== bz.gb ? iT.kK = !1 : uu.v8() || (v7(uU, uV, !1), h6.ua && (h6.ua = !1, a6.preventDefault()))
	}

	function ui(a6) {
		uW = cm.gX, ur(a6, 1), v7(uU, uV, !1), h6.ua && (h6.ua = !1, a6.preventDefault())
	}

	function uj(a6) {}

	function uk(a6) {}

	function ul(a6) {
		uq() || ur(a6, 0)
	}

	function v7(e2, e3, v9) {
		v4(), 0 === bz.gb ? cA.click(e2, e3) : (iQ.v5(e2, e3), ck.v5(), gp.v6(), iT.kK = !1, iX.click(e2, e3, v9) ? cm.cn = !0 : cp.uc(e2, e3))
	}

	function v4() {
		br.v4()
	}

	function ue(a6) {
		var e2, e3, deltaY;
		uq() || (ur(a6, 1), y.z.us(y.z.hq), e2 = Math.floor(eT.i5 * a6.clientX), e3 = Math.floor(eT.i5 * a6.clientY), deltaY = a6.deltaY, 1 === a6.deltaMode && (deltaY *= 16), br.ue(e2, e3, deltaY), 0 === bz.gb ? cA.ue(e2, e3, deltaY) : iQ.ue(e2, e3,
			deltaY) || (gp.vA(e2, e3) ? gp.ue(deltaY) && (cm.cn = !0) : iT.ue(e2, e3, deltaY)))
	}

	function um(a6) {
		ur(a6, 0)
	}

	function ur(a6, id) {
		0 === id && br.v2() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cA.cg() && a6.preventDefault()
	}

	function un(a6) {
		if (__fx.keybindHandler(a6.key)) return;
		uq() || 0 < eT.i6 || (a6 = a6.code) && a6.length && (dW.aA(a6, 18) ? kN.vC(3) : dW.aA(a6, 22) ? kN.vC(0) : dW.aA(a6, 20) ? kN.vC(1) : dW.aA(a6, 24) ? kN.vC(2) : dW.aA(a6, 10) ? gp.vD(31 / 32) : dW.aA(a6, 8) ? gp.vD(32 / 31) : dW.aA(a6, 6) ?
			gp.vD(7 / 8) : dW.aA(a6, 4) ? gp.vD(8 / 7) : dW.aA(a6, 14) ? 0 !== bz.gb && iT.ue(Math.floor(eT.eJ / 2), Math.floor(eT.gP / 2), -200) : dW.aA(a6, 16) ? 0 !== bz.gb && iT.ue(Math.floor(eT.eJ / 2), Math.floor(eT.gP / 2), 200) : dW.aA(
				a6, 0) ? bz.gb && v0.vE(0) : dW.aA(a6, 2) ? bz.gb && v0.vE(1) : dW.aA(a6, 30) ? bz.gb && v0.vE(2) : dW.aA(a6, 26) ? bz.gb && v0.vF() : dW.aA(a6, 28) && bz.gb && v0.d0())
	}

	function uo(a6) {
		if (!uq() && !(0 < eT.i6 || cm.gX < 400)) {
			var code = a6.code;
			if (code && code.length && !("Enter" === code && br.dM(1) || "Space" === code && br.dM(0))) return bf.pK ? bf.pF.dM(code) ? void 0 : void("Escape" === code && h6.kj()) : void(8 !== cA.cg() && cA.dM(a6) ? cm.cn = !0 : "Escape" === code ?
				h6.kj() : dW.aA(code, 18) ? kN.vG(3) : dW.aA(code, 22) ? kN.vG(0) : dW.aA(code, 20) ? kN.vG(1) : dW.aA(code, 24) ? kN.vG(2) : dW.aA(code, 12) ? iV.vH(!bz.eS) : "Space" === code && bz.gb && (cp.cv && cp.cl(), bz.co) && iV.vI(!
					1))
		}
	}

	function up() {
		"hidden" !== document.visibilityState && (cm.cn = !0)
	}

	function uq() {
		return uW + 15e3 > cm.gX
	}

	function resize() {
		eT.iF()
	}
	this.uY = 0, this.uZ = "", this.ua = !1, this.rR = 0, this.rU = 0, this.g = function() {
		iB.addEventListener("mousedown", ub, {
			passive: !1
		}), iB.addEventListener("mousemove", sg, {
			passive: !1
		}), iB.addEventListener("mouseup", uc, {
			passive: !1
		}), iB.addEventListener("click", click, {
			passive: !1
		}), iB.addEventListener("mouseleave", ud, {
			passive: !1
		}), iB.addEventListener("wheel", ue, {
			passive: !1
		}), iB.addEventListener("touchstart", uf, {
			passive: !1
		}), iB.addEventListener("touchmove", ug, {
			passive: !1
		}), iB.addEventListener("touchend", uh, {
			passive: !1
		}), iB.addEventListener("touchcancel", ui, {
			passive: !1
		}), iB.addEventListener("dragover", uj), iB.addEventListener("drop", uk), iB.addEventListener("dblclick", ul), document.addEventListener("contextmenu", um), document.addEventListener("keydown", un), document.addEventListener("keyup",
			uo), document.addEventListener("visibilitychange", up), window.addEventListener("resize", resize)
	}, this.ux = function(e2, e3) {
		return !!iV.ub(e2, e3) || !!(iQ.ub(e2, e3) || iT.ub(e2, e3) || gp.ub(e2, e3) || iU.ub(e2, e3))
	}, this.vJ = uq, this.h7 = function() {
		return !uX || 0 < uW
	}, this.kj = function() {
		if (!br.v2()) return 8 === cA.cg() ? bz.eS ? void iV.vH(!1) : ck.v2 ? void ck.cl() : void cp.cl() : void(7 !== cA.cg() && 6 === cA.cg() && iN.vK());
		br.dM(2)
	}
}

function vL() {
	var vM = 501,
		vP = (this.vN = new Uint32Array(vM), this.qt = new Uint32Array(vM), this.vO = new Uint16Array(vM), this.ci = 0, 1),
		vQ = 0;

	function vT(self) {
		self.max.fill(0)
	}

	function va(self, c8) {
		self.max[0] = Math.max(self.vN[c8], self.max[0]), self.max[1] = Math.max(self.qt[c8], self.max[1]), self.max[2] = Math.max(self.vO[c8], self.max[2])
	}
	this.max = [0, 0, 0], this.vR = 0, this.qa = new Array(21), this.vS = null, this.i7 = function() {
		this.vS = [L(71), L(72), L(73), L(74), L(75), L(76), L(77), L(78), L(79), L(80), L(81), L(82), L(83), L(84), "", L(85), L(86), L(87), L(88), L(89), L(90)]
	}, this.g = function() {
		this.ci = 0, vP = 1, this.vR = 0, vQ = 0, vT(this), this.qa.fill(0)
	}, this.m5 = function(player, ls) {
		aB.lk.q7(player) && (this.qa[0] += ls + 1, this.qa[1]++, this.qa[12] += er.mC[1])
	}, this.vU = function(player, m7) {
		__fx.donationsTracker.logDonation(player, m7, er.mC[0], iS.a5p());
		player === bz.cr && (iU.vU(er.mC[0], er.mC[1], m7), this.qa[12] += er.mC[1], this.qa[16] += er.mC[0]), m7 === bz.cr && (iU.vV(er.mC[0], player), this.qa[10] += er.mC[0])
	}, this.mM = function(player) {
		aB.lk.q7(player) && (this.qa[2]++, this.qa[12] += er.mC[1])
	}, this.mj = function(player) {
		aB.lk.q7(player) && (this.qa[19]++, this.qa[12] += er.mC[1])
	}, this.vW = function(player) {
		aB.lk.q7(player) && this.qa[20]++
	}, this.nk = function(player, vX, h) {
		aB.lk.q7(player) && (this.qa[h] += vX)
	}, this.dI = function() {
		var self;
		this.vR || 0 < vQ-- || ((self = this).vN[self.ci] = ef.eg[bz.cr], self.qt[self.ci] = ef.g5[bz.cr], self.vO[self.ci] = mD.vZ(bz.cr), va(self, self.ci), self.ci++, self.ci === vM && function(self) {
			vT(self), va(self, 0), self.ci = 1 + io.dp(vM, 2);
			for (var c8 = 1; c8 < self.ci; c8++) self.vN[c8] = self.vN[2 * c8], self.qt[c8] = self.qt[2 * c8], self.vO[c8] = self.vO[2 * c8], va(self, c8);
			vP *= 2
		}(self), vQ = vP - 1, ck.ew(), 0 === ef.fo[bz.cr] && (self.vR = cm.lJ()))
	}
}

function vc() {
	function vf(player) {
		for (var jX = ef.jX[player], cI = jX.length, vp = Math.max(io.dp(cI, 12), 1), mz = n0.mz, ey = qT.u4(cI), c8 = 0; c8 < cI; c8 += vp)
			for (var n6 = jX[(c8 + ey) % cI], by = 3; 0 <= by; by--) {
				var n7 = n6 + mz[by];
				if (n0.re(n7)) return {
					mx: n7,
					id: n0.vo(n7),
					es: player
				}
			}
		return null
	}

	function vk(player, vr) {
		var me = aB.lk.mf(player, fq.vs[fq.me[player]]);
		ef.jU[player].push(vr.mx), ly.gh(player, me, vr.es), mh.mi(player, !0)
	}
	this.dI = function(player) {
		return !!c2.nL(c2.c4) && !!bz.data.passableMountains && 0 !== ef.jX[player].length && function(player) {
			var ve = vf(player);
			if (null === ve) return !1;
			! function(player) {
				for (var em = en.em, ep = en.ep, cI = Math.min(ep, 12), bv = qT.u4(ep), vq = er.vq, jX = ef.jX, el = 0, c8 = 0; c8 < cI; c8++) {
					var es = em[(c8 + bv) % ep];
					es !== player && jX[es].length && nI.r7(player, es) && (vq[el++] = es)
				}
				er.et[0] = el
			}(player);
			var vh = function(vl) {
				for (var cI = er.et[0], vq = er.vq, c8 = 0; c8 < cI; c8++) {
					var vr = vf(vq[c8]);
					if (null !== vr && vr.id === vl) return vr
				}
				return null
			}(ve.id);
			return null !== vh ? (vk(player, vh), !0) : function(player, vl) {
				var cI = fk.vm.vn;
				if (0 !== cI)
					for (var mx = fk.vm.d2[qT.u4(cI)] << 2, mz = n0.mz, by = qT.u4(4);;) {
						if (mx += mz[by], n0.re(mx)) {
							if (n0.vo(mx) === vl) return vk(player, {
								mx: mx,
								es: bz.fi
							}), !0;
							break
						}
						if (!n0.rd(mx)) break
					}
				return !1
			}(player, ve.id)
		}(player)
	}
}

function vt() {
	var vu, o4 = !0;

	function oJ(oI, vy) {
		var dh = document.createElement("div"),
			vz = document.createElement("span"),
			w0 = document.createElement("span");
		vz.textContent = iS.w1(vy.gX) + ":", vz.style.color = dK.aa, vz.style.paddingRight = "0.4em", vz.style.display = "table-cell", vz.style.width = "6ch", vz.style.textAlign = "end", dh.appendChild(vz), w0.textContent = vy.dZ, dh.appendChild(w0),
			dh.style.display = "table", vy.mV && function(dh, mV) {
				{
					var h3;
					mV >= 1024 - sd.oQ.tL ? ((h3 = document.createElement("img")).src = sd.iv.tK[mV - 1024 + sd.oQ.tL].toDataURL(), h3.style.width = "1.5em", h3.style.height = "1.5em", h3.style.verticalAlign = "middle", dh.appendChild(h3)) : ((h3 =
						document.createElement("span")).textContent = sd.oQ.tM(mV), h3.style.display = "inline-block", h3.style.fontSize = "1.5em", h3.style.lineHeight = "1em", h3.style.verticalAlign = "middle", dh.appendChild(h3))
				}
			}(dh, vy.mV), oI.appendChild(dh)
	}

	function oM() {
		o4 && (vu.cf.scrollTop = vu.cf.scrollHeight)
	}
	this.clear = function() {
		vu.cf.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var gL = vw.vx(), cI = gL.length, oI = document.createDocumentFragment(), c8 = 0; c8 < cI; c8++) oJ(oI, gL[c8]);
		vu.cf.appendChild(oI), oM(), vu.show(), this.resize(), o4 = !0, oM()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), vu.cf.style.padding = "0.4em " + aB.dE.dj(dk.dl)
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, this.qY = function(vy) {
		var oI = document.createDocumentFragment();
		oJ(oI, vy), vu.cf.appendChild(oI), oM()
	}, (vu = new cd(L(17), [new cN("⬅️ " + L(14), function() {
		br.fI(1)
	})])).cf.style.overflowY = "auto", vu.cf.addEventListener("scroll", function() {
		o4 = vu.cf.scrollTop >= vu.cf.scrollHeight - vu.cf.clientHeight - 2
	})
}

function w3() {
	var w4;
	this.g = function() {
		w4 = !1
	}, this.dI = function() {
		var es;
		if (function() {
				if (!w4) {
					if (cm.lJ() % 30 != 9) return;
					if (!aB.lk.rC(90)) return;
					w4 = !0
				}
				return 1
			}() && (! function() {
				var hm = iU.wA(956);
				if (hm) {
					if (aB.lk.qn(hm.player)) return 1;
					iU.qX(956, 0)
				}
				return
			}() && (-1 === (es = (bz.eN ? function() {
				var id = go.ea(),
					cI = en.ep;
				if (eb.ec[id])
					for (var wG = en.em, eo = eb.eo, c8 = 0; c8 < cI; c8++) {
						var es = wG[c8];
						if (eo[es] !== id) return es
					} else if (1 < cI) return eh[cI - 1];
				return -1
			} : function() {
				for (var wD = en.ep, wE = en.em, wF = t1, c8 = 0; c8 < wD; c8++) {
					var es = wE[c8];
					if (0 !== wF[es]) return es
				}
				return -1
			})()) ? ! function() {
				var hm = iU.wA(957);
				if (hm && hm.wH) {
					if (n0.rd(hm.wH.k9 << 2)) return 1;
					iU.qX(957, 0)
				}
				return
			}() : (iU.qY(0, L(91, [ef.gj[es]]), 956, es, dK.aL, dK.aI, -1, !0), 0)))) {
			var cI = fk.vm.vn;
			if (0 !== cI)
				for (var d2 = fk.vm.d2, c8 = 0; c8 < cI; c8++) {
					var k9 = d2[c8];
					if (n0.rd(k9 << 2)) return void iU.qY(0, L(92, [kA.kE(k9), kA.kG(k9)]), 957, 0, dK.aL, dK.aI, -1, !0, void 0, {
						dq: 1,
						k9: k9
					})
				}
		}
	}
}

function L(value, wI, oc, wJ) {
	var dZ = "number" == typeof value ? hv.wK[value] : value;
	if (oc && hv.wL() && (dZ = oc), !wI) return wJ ? dZ.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : dZ;
	for (var cI = wI.length, c8 = 0; c8 < cI; c8++)
		for (var dq = 0; dq < 3; dq++) dZ = dZ.replace("{" + (10 * dq + c8) + "}", wI[c8]);
	return dZ
}

function wM() {
	this.size = 0, this.h = 0, this.s = null, this.g = function(s) {
		this.h = 0, this.s = s, this.size = s.length
	}, this.cB = function(wN) {
		return this.g(new Uint8Array(this.j5(wN))), this.s
	}, this.gt = function() {
		this.s = null
	}, this.hS = function(size, wO) {
		for (var s = this.s, fs = this.h + size - 1, c8 = this.h; c8 <= fs; c8++) s[c8 >> 3] |= (wO >> fs - c8 & 1) << 7 - (7 & c8);
		this.h += size, this.h > 8 * this.size && console.error("Wrapper Overflow")
	}, this.wP = function(size, wO) {
		var dr = size >> 1,
			by = 1 << dr;
		this.hS(size - dr, io.dp(wO, by)), this.hS(dr, wO % by)
	}, this.wQ = function(size) {
		for (var s = this.s, fs = this.h + size, c8 = this.h; c8 < fs; c8++) s[c8 >> 3] &= 255 ^ 128 >>> (7 & c8)
	}, this.j5 = function(wN) {
		return wN + 7 >> 3
	}, this.wR = function(dT, oG, fs, wS) {
		for (var c8 = oG; c8 < fs; c8++) this.hS(wS, dT[c8])
	}
}

function wT() {
	var wU = [],
		wV = [],
		wW = 0;

	function wX(dT, pa, pe, we) {
		var cI = dT.length;
		if (0 === cI) return "";
		var dZ = "@" + dT[0];
		if (1 === cI) return dZ + pa + we;
		for (var c8 = 1; c8 < cI - 1; c8++) dZ += ", @" + dT[c8];
		return dZ + " and @" + dT[cI - 1] + pe + we
	}
	this.g = function() {
		var dZ = wX(wV, " is", " are", " in the lobby.");
		dZ.length && bf.message.uS({
			id: 7,
			oO: dZ
		}), wU = [], wV = [], wW = 0
	}, this.wY = function(wZ) {
		return bf.wa !== wZ && (wZ = hc.wb.sV(wZ, 5), !!d1.wc.wd(wZ)) && (wV.push(wZ), !0)
	}, this.join = function(player) {
		bf.wa !== player.c9 && (player = hc.wb.sV(player.c9, 5), d1.wc.wd(player)) && wU.push(player)
	}, this.ok = function() {
		var pa, pe;
		++wW < 3 || (wW = 0, pa = wX(wV, "", "", " entered the lobby!"), (pa = (pe = wX(wU, "", "", " joined a game!")).length ? pa.length ? pa + " " + pe : pe : pa).length && bf.message.uS({
			id: 7,
			oO: pa
		}), wU = [], wV = [])
	}
}

function wf() {
	var wh, wi, wj, wk, wg = !1;

	function wl() {
		wg = !0, wh = -1, wi = new Array(4);
		for (var c8 = 3; 0 <= c8; c8--) wi[c8] = !1;
		var eD = Math.floor(1 + .02 * eT.min);
		wj = new Array(4), (wk = new Array(4))[1] = wk[3] = wj[0] = wj[2] = 0, wk[0] = wj[3] = -eD, wj[1] = wk[2] = eD
	}

	function wm() {
		if (-1 !== wh)
			if (0 !== bz.gb && kH.fs()) {
				for (var wn = !1, c8 = 3; 0 <= c8; c8--) wi[c8] && (wn = !0, ju += wj[c8], jw += wk[c8], iY.sg(wj[c8], wk[c8]), iT.ia());
				wn ? cm.cn = !0 : kN.kO()
			} else kN.kO()
	}
	this.vC = function(h) {
		0 !== bz.gb && kH.fs() && (wg || wl(), wi[h] = !0, -1 === wh) && (wh = setInterval(wm, 20), wm())
	}, this.vG = function(h) {
		if (0 !== bz.gb && (wg || wl(), wi[h] = !1, -1 !== wh)) {
			for (var wn = !1, c8 = 3; 0 <= c8; c8--) wn = wn || wi[c8];
			wn || this.kO()
		}
	}, this.kO = function() {
		if (wg && -1 !== wh) {
			for (var c8 = 3; 0 <= c8; c8--) wi[c8] = !1;
			clearInterval(wh), wh = -1
		}
	}
}

function wo(wp) {
	var wq = document.createElement("div");

	function ws() {
		h6.h7() || (wq.style.backgroundColor = aB.color.wt(dK.aH, 50))
	}

	function wr() {
		wq.style.backgroundColor = dK.aH
	}
	this.dc = function(uL) {
			wq.textContent = uL
		}, this.show = function() {
			document.body.appendChild(wq)
		}, this.resize = function() {
			var gP = aB.dE.dm(.03, .5);
			wq.style.width = 2 * gP + "px", wq.style.height = gP + "px", wq.style.font = aB.dE.f9(1, .75 * gP), aB.dE.lg(wq, 4), aB.dE.lg(wq, 2)
		}, this.gt = function() {
			wq.onclick = null, wq.onmouseover = null, wq.onmouseout = null, br.removeChild(document.body, wq), wq = null
		}, wq.style.position = "absolute", wr(), wq.style.color = dK.aL, wq.style.zIndex = "3", wq.style.right = "0", wq.style.top = "0", wq.style.display = "flex", wq.style.justifyContent = "center", wq.style.alignItems = "center", wq.style
		.userSelect = "none", wq.style.outline = "none", wq.onclick = wp, wq.onmouseover = ws, wq.onmouseout = wr
}

function wu() {
	var wv = 0,
		ww = !0;

	function wy(id) {
		id = [L(93), L(94), L(95), L(96)][id];
		iU.wz(id)
	}
	this.dI = function() {
		var ee, pw;
		cm.gX < wv || (wv = cm.gX + 3e3, bz.co) || bz.wx || aB.lk.lm(bz.cr) || (ee = new Date, pw = ee.getUTCSeconds(), ww ? pw < 43 && (ww = !1) : pw < 43 || (wv += 52e3, ww = !0, (pw = (ee.getUTCMinutes() + 2) % 60) % 10 == 0 ? bz.qS < 7 && wy(
			0) : pw % 10 == 5 ? 7 !== bz.qS && 10 !== bz.qS || wy(1) : pw % 10 == 7 ? 8 === bz.qS && wy(2) : pw % 10 == 2 && 9 === bz.qS && wy(3)))
	}
}

function x0(is) {
	var cK, fG, fL;
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), fG.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(L(97), [new cN("⬅️ " + L(14), function() {
		br.fI(10)
	})]), fG = new fJ(cK.cf, ((fL = []).push(function() {
		var fU, fQ = new fR,
			fZ = new fW(d1.d2.data[132], 1, function() {
				fU.button.click()
			}),
			fa = new fW(d1.d2.data[131], 1, function() {
				fZ.a6.focus()
			});
		fQ.fS(L(46)), fQ.fX(fa), fa.a6.style.marginBottom = "0.8em", fQ.fS(L(47)), fQ.fX(fZ);
		return fU = new cN(L(45), function() {
			x4 = Math.floor(fa.a6.value), x5 = Math.floor(fZ.a6.value);
			var x5, x4 = {
				x6: Math.min(x4, x5),
				x7: Math.max(x4, x5)
			};
			br.cP(8, br.on(10).i, new d4(21, {
				j7: is.j7,
				x4: x4.x6,
				x5: x4.x7
			}))
		}, 0, 0, 1), fQ.fX(new fY([fU.button])), fQ
	}()), fL.push(function() {
		var fU, fQ = new fR,
			fZ = new fW(d1.d2.data[134], 1, function() {
				fU.button.click()
			}),
			fa = new fW(d1.d2.data[133], 0, function() {
				fZ.a6.focus()
			});
		return fQ.fS(1 === is.j7 ? L(98) : L(99)), fQ.fX(fa), fa.a6.style.marginBottom = "0.8em", fQ.fS(L(100)), fQ.fX(fZ), fU = new cN(L(45), function() {
			var x8 = fa.a6.value.slice(0, 20),
				x9 = Math.abs(Math.floor(fZ.a6.value));
			br.cP(8, br.on(10).i, new d4(22, {
				j7: is.j7,
				x8: x8,
				x9: x9
			}))
		}, 0, 0, 1), fQ.fX(new fY([fU.button])), fQ
	}()), fL.push(function() {
		var fU, fQ = new fR,
			fZ = new fW(d1.d2.data[152], 1, function() {
				fU.button.click()
			}),
			fa = new fW(d1.d2.data[151], 0, function() {
				fZ.a6.focus()
			});
		return fQ.fS(L(101)), fQ.fX(fa), fa.a6.style.marginBottom = "0.8em", fQ.fS(L(100)), fQ.fX(fZ), fU = new cN(L(45), function() {
			var x8 = fa.a6.value.slice(0, 5),
				x9 = Math.abs(Math.floor(fZ.a6.value));
			br.cP(8, br.on(10).i, new d4(28, {
				j7: is.j7,
				x8: x8,
				x9: x9
			}))
		}, 0, 0, 1), fQ.fX(new fY([fU.button])), fQ
	}()), fL))
}

function xA() {
	var gN, gV;
	this.g = function() {
		gN = 1, gV = 0
	}, this.dI = function() {
		0 < gN && (gV = 0 === gV ? cm.gX + 16 : gV, gN = (gN -= .001 * (cm.gX - gV)) < 0 ? 0 : gN, gV = cm.gX, cm.cn = !0)
	}, this.fC = function() {
		0 < gN && (fD.fillStyle = "rgba(0,0,0," + gN + ")", fD.fillRect(0, 0, eT.eJ, eT.gP))
	}
}

function xD() {
	var vu, xE, xF, pH;

	function pB() {
		xI(), br.xJ()[19] = null, br.kl()
	}

	function xG() {
		xI(), br.cP(21)
	}

	function xI() {
		1 === bz.data.gameMode ? bz.xK.xL() : 0 === bz.data.gameMode && 1 === bz.data.colorsType && aB.pr.xM(xF.gY(), bz.data.colorsData, 262143)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, pH = [new cN("⬅️ " + L(14), pB)], 1 === bz.data.gameMode && pH.push(new cN(L(102), xG, 1, 1)), vu = new cd(L(103), pH), xE = new fJ(vu.cf, (pH = [], 0 === bz.data.gameMode ? (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(105), L(106)],
			value: bz.data.colorsType
		}, function(h) {
			xI(), bz.data.colorsType = h, 1 !== bz.data.colorsType || bz.data.colorsData && bz.data.colorsData.length === bz.fi || (bz.data.colorsData = new Uint32Array(bz.fi)), br.cP(21)
		})), fL.push(fQ)
	}(pH), 1 === bz.data.colorsType && function(fL) {
		var fQ = new fR;
		fQ.fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.colorsData, 1)), fQ.fX(xF), fL.push(fQ)
	}(pH)) : (bz.xK.xL(), pH.push(function() {
		var fQ = new fR;
		fQ.fS(L(68));
		for (var c8 = 0; c8 < eb.xU.length; c8++) {
			var sc = (c8 + 1) % eb.xU.length,
				a6 = fQ.kn((0 == sc ? "" : "Team ") + eb.xU[sc]);
			c8 && (a6.style.marginTop = "0.5em"), fQ.fX(new fW({
				h: -1,
				value: bz.data.teamPlayerCount[sc]
			}, 1, 0, function(a6) {
				vu.dN[1].dL(0);
				var playerCount = io.du(Math.floor(a6.target.value), 0, 512);
				a6.target.value = playerCount, bz.data.teamPlayerCount[a6.target.xV] = playerCount
			})).a6.xV = sc
		}
		return fQ
	}()), function(fL) {
		for (var fQ = new fR, fb = (fQ.fS(L(107)), []), c8 = 0; c8 < eb.xU.length; c8++) {
			var sc = (c8 + 1) % eb.xU.length;
			fb.push(eb.xU[sc])
		}
		bz.data.colorsData || (bz.data.colorsData = new Uint32Array(1));
		fQ.fc(new fd({
			fb: fb,
			value: (bz.data.colorsData[0] % 16 + eb.xU.length - 1) % eb.xU.length
		}, function(h) {
			var h = (h + 1) % eb.xU.length,
				kx = eb.xX[h],
				kx = (kx[0] >> 2 << 12) + (kx[1] >> 2 << 6) + (kx[2] >> 2);
			bz.data.colorsData[0] = kx - (15 & kx) + h
		})), fL.push(fQ)
	}(pH)), pH))
}

function xY() {
	this.xZ = new xa, this.xb = new xc, this.g = function() {
		cZ.cb.xd()
	}, this.xe = function() {
		return d1.d2.data[160].value
	}
}

function xf() {
	var cK, fG, fL, fQ;

	function xg() {
		hv.xi !== d1.d2.data[12].value ? (hv.g(), br.cP(8, 1, new d4(30))) : br.cP(1)
	}
	this.show = function() {
			cK.show(), this.resize()
		}, this.u = function() {
			cK.u()
		}, this.resize = function() {
			cK.resize(), fG.resize()
		}, this.dM = function(aA) {
			2 === aA && cK.dN[0].dO()
		}, cK = new cd(L(8), [new cN("⬅️ " + L(14), xg), new cN(L(108), function() {
			br.cj(), d1.db.xh(), br.cP(2)
		})]), fL = [], (fQ = new fR).fS(L(109)), fQ.fT(L(110)), fL.push(fQ),
		function(fL) {
			var fQ = new fR,
				dT = (fQ.fS(L(138)), hv.data.xo());
			fQ.fc(new fd({
				fb: dT,
				value: hv.data.xp(dT)
			}, function(h) {
				return d1.db.dc(12, dT[h].split(":")[0]), !0
			})), fL.push(fQ)
		}(fL),
		function(fL) {
			var fQ = new fR,
				xm = (fQ.fS(L(136)), []);
			fQ.fX(new fY([new cN(L(137), function(a6) {
				dW.dd();
				for (var c8 = 0; c8 < xm.length; c8++) xm[c8].a6.value = dW.dS[c8];
				return aB.dE.kq(a6), !0
			}).button]));
			for (var c8 = 0; c8 < dW.dQ.length; c8++) {
				fQ.fT(dW.dQ[c8]);
				for (var dq = 0; dq < 2; dq++) {
					var h = 2 * c8 + dq,
						fV = new fW({
							value: dW.dS[h],
							h: -1
						});
					fV.a6.xn = h, xm.push(fV), fV.a6.addEventListener("keydown", function(a6) {
						a6.preventDefault();
						var code = a6.code;
						a6.target.value = code, dW.dX(a6.target.xn, code)
					}), dq && (fV.a6.style.marginLeft = "4%"), fV.a6.style.width = "48%", fQ.fX(fV)
				}
			}
			fL.push(fQ)
		}(fL), (fQ = new fR).fS(L(111)), d1.d2.data[1].fb = [L(112), L(113), L(114), L(115)], fQ.fc(new fd(d1.d2.data[1])), fL.push(fQ), (fQ = new fR).fS(L(116)), d1.d2.data[9].fb = [L(113), L(117), L(118)], fQ.fc(new fd(d1.d2.data[9])), fL.push(fQ),
		(fQ = new fR).fS(L(119)), d1.d2.data[11].fb = [L(120), L(121), L(122)], fQ.fc(new fd(d1.d2.data[11])), fL.push(fQ), (fQ = new fR).fS(L(123)), fQ.fX(new fe(d1.d2.data[2])), fL.push(fQ), (fQ = new fR).fS(L(124)), fQ.fX(new fe(d1.d2.data[7])),
		fL.push(fQ), (fQ = new fR).fS(L(125)), fQ.fX(new fe(d1.d2.data[8])), fL.push(fQ), (fQ = new fR).fS(L(126)), fQ.fX(new fW(d1.d2.data[5])), fL.push(fQ), (fQ = new fR).fS(L(127)), fQ.fX(new fe(d1.d2.data[13], L(128))), fQ.fX(new fe(d1.d2.data[
			14], L(129))), fL.push(fQ), (fQ = new fR).fS(L(130)), fQ.fc(new fd({
			fb: [L(131), L(132), L(133)],
			value: iN.xl
		}, function(c8) {
			iN.xl = c8
		})), fL.push(fQ), (fQ = new fR).fS(L(134)), fQ.fX(new fe(d1.d2.data[15])), fQ.fT(L(135)), fQ.fX(new fW(d1.d2.data[16], 1, 0, function(a6) {
			a6.target.value = io.du(Math.floor(a6.target.value), 0, 16)
		})), fL.push(fQ), fG = new fJ(cK.cf, fL)
}

function xq() {
	this.em = null, this.ep = 0, this.xr = function() {
		for (this.ep = 0, c8 = bz.fi - 1; 0 <= c8; c8--) 0 !== ef.fo[c8] && this.ep++;
		this.em = new Uint16Array(this.ep);
		for (var cI = 0, c8 = 0; c8 < bz.fi; c8++) 0 !== ef.fo[c8] && (this.em[cI++] = c8)
	}, this.xs = function() {
		for (var eg = ef.eg, jT = ef.jT, jc = ef.jc, em = en.em, c8 = en.ep - 1; 0 <= c8; c8--) {
			var es = em[c8],
				ee = eg[es],
				dU = jT[es];
			ee <= io.dp(dU, 4) ? xv.bd(es) : dU <= ee ? 250 <= (jT[es] = ee) && (jc[es] = 1) : jT[es] = dU - Math.max(1, io.dp(dU - ee, 1e3))
		}
		this.xu()
	}, this.xu = function() {
		for (var fo = ef.fo, wE = this.em, wD = this.ep, c8 = wD - 1; 0 <= c8; c8--) 0 === fo[wE[c8]] && (wE[c8] = wE[--wD]);
		this.ep = wD
	}
}

function xw() {
	this.xx = 0, this.dI = function() {
		iP.dI(), iN.dI(), eT.dI(), y.z.dI(), bw.lM(), xy.xb.dI(), cm.cn && (cm.cn = !1, cA.fC())
	}
}

function xz() {
	this.y0 = function() {
		d1.z.y1(), d1.db.dc(105, hc.wb.y2(hc.wb.y3(5))), d1.db.dc(106, hc.wb.y2(hc.wb.y3(15))), d1.db.dc(109, 0), d1.db.dc(108, d1.d2.data[109].value), d1.db.dc(111, d1.d2.data[109].value + 1), d1.db.dc(107, 0), d1.db.dc(110, "")
	}, this.y4 = function() {
		var data;
		ft.size < hQ.j5(29) ? y.z.j6(0, 3254) : ((data = {
			y5: ft.fu(30),
			y6: ft.fu(16),
			y7: ft.fu(30),
			y8: ft.fu(30),
			y9: ft.fu(30),
			yA: ft.jA(32),
			username: j8.hd.j9(5),
			yB: j8.hd.j9(3),
			yC: j8.hd.j9(3),
			yD: ft.jA(32),
			yE: ft.jA(32),
			yF: ft.fu(30),
			yG: ft.jA(32),
			yH: ft.jA(32),
			yI: ft.jA(32),
			yJ: ft.jA(32),
			yK: ft.jA(32),
			yL: ft.jA(30),
			yM: ft.jA(32),
			yN: j8.hd.j9(3),
			yO: ft.jA(2),
			yP: ft.jA(10),
			yQ: j8.hd.j9(8),
			yR: ft.jA(5),
			yS: ft.fu(30),
			yT: ft.fu(30),
			yU: ft.jA(32),
			yV: ft.fu(3),
			yW: ft.fu(8),
			yX: ft.fu(30),
			yY: ft.jA(32),
			yZ: ft.fu(1),
			ya: j8.hd.j9(6),
			yb: ft.fu(1),
			yc: ft.fu(1),
			yd: ft.fu(1),
			ye: ft.fu(1),
			yf: ft.fu(1)
		}).ye && (data.yg = ft.jA(32), data.yh = ft.fu(30), data.yi = ft.fu(30), data.yj = ft.fu(1)), 8 === br.bs && (25 === br.hN().yk ? (data.yl = !0, br.z.ym = data, br.hN().jB(25, !1)) : (data.yl = !1, d1.db.dc(160, +(data.ye && data
			.yj)), data.c9 = d1.d2.data[105].value, br.z.yn = data, d1.db.yo(data), br.hN().jB(16, !0))))
	}
}

function yp() {
	var cK, yq, yr, ys, yt, yu, colors = [0, 0, 0],
		yv = -1;

	function z1(c8) {
		var z3 = yq.e3 + c8 * (dk.gap + yu);
		fD.fillStyle = "rgb(" + (0 === c8 ? 150 : 2 === c8 ? 30 : 0) + "," + (1 === c8 ? 130 : 2 === c8 ? 30 : 0) + "," + (2 === c8 ? 220 : 0) + ")", fD.fillRect(ys, z3, colors[c8] * yt, yu), fD.strokeStyle = dK.aL, fD.strokeRect(ys, z3, yt, yu), fD
			.fillStyle = dK.aL, fD.font = aB.dE.f9(0, .32 * yu), aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 0), fD.fillText(L(0 === c8 ? 141 : 1 === c8 ? 142 : 143) + yx(c8), ys + dk.gap, z3 + .53 * yu)
	}

	function yx(c8, z4) {
		return z4 = z4 || 256, io.du(Math.floor(z4 * colors[c8]), 0, z4 - 1)
	}

	function vA(si, sj) {
		return !(si < ys || sj < yq.e3 || si > yq.e2 + yq.eJ || sj > yq.e3 + yq.gP)
	}
	this.show = function() {
		var dt = d1.d2.data[121].value;
		colors[0] = (dt >> 12) / 63, colors[1] = (dt >> 6 & 63) / 63, colors[2] = (63 & dt) / 63, cK.show(), this.resize()
	}, this.u = function() {
		d1.db.dc(121, (yx(0, 64) << 12) + (yx(1, 64) << 6) + yx(2, 64)), cK.u()
	}, this.resize = function() {
		cK.resize(), yq.resize();
		var aA = eT.i5,
			lf = cK.la(),
			yy = (yq.e3 = Math.max(yq.e3, aA * lf.lb + dk.gap), aA * lf.ld - 2 * dk.gap);
		yq.gP = Math.min(yq.gP, yy), yq.eJ = 2 * yq.gP, yq.e3 = aA * lf.lb + .5 * (aA * lf.ld - yq.gP), yq.e2 = .5 * (eT.eJ - yq.eJ), yr = .25 * yq.eJ, ys = yq.e2 + yr + dk.gap, yt = yq.eJ - yr - dk.gap, yu = (yq.gP - 2 * dk.gap) / 3
	}, this.fC = function() {
		var ey, z2, dr;
		cK.fC(), fD.lineWidth = dk.yz, ey = yx(0), z2 = yx(1), dr = yx(2), fD.fillStyle = "rgb(" + ey + "," + z2 + "," + dr + ")", fD.fillRect(yq.e2, yq.e3, yr, yq.gP), fD.strokeStyle = dK.aL, fD.strokeRect(yq.e2, yq.e3, yr, yq.gP), fD
			.fillStyle = ey + z2 + dr < 306 && z2 < 150 ? dK.aL : dK.aC, aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 1), fD.font = aB.dE.f9(0, .1 * yq.gP), fD.rotate(-Math.PI / 2), fD.fillText(L(140), -yq.e3 - .5 * yq.gP, yq.e2 + .5 * yr), fD
			.setTransform(1, 0, 0, 1, 0, 0), z1(0), z1(1), z1(2)
	}, this.ub = function(si, sj) {
		vA(si, sj) && (yv = io.du(Math.floor((sj - yq.e3) / (yu + .75 * dk.gap)), 0, 2), colors[yv] = io.du((si - ys) / yt, 0, 1), cm.cn = !0)
	}, this.sg = function(si) {
		-1 !== yv && (colors[yv] = io.du((si - ys) / yt, 0, 1), cm.cn = !0)
	}, this.ue = function(si, sj, deltaY) {
		vA(si, sj) && (si = io.du(Math.floor((sj - yq.e3) / (yu + .75 * dk.gap)), 0, 2), colors[si] = io.du(colors[si] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), cm.cn = !0)
	}, this.v4 = function() {
		0 <= yv && (yv = -1, cm.cn = !0)
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(L(139), [new cN("⬅️ " + L(14), function() {
		br.z.cX()
	})], !1), yq = new yw([.5, .25], [.5, .5], 1)
}

function z8() {
	(z5 = void 0 === z5 ? document.createElement("canvas") : z5).width = c2.k0, z5.height = c2.k1, z6 = z5.getContext("2d", {
		alpha: !0
	}), z7 = mn = null, z7 = z6.getImageData(0, 0, c2.k0, c2.k1), mn = z7.data, aB.pr.z9(mn)
}

function zA() {
	var zB;
	this.zC = null, this.zD = 0, this.g = function() {
		zB = [], 9 === bz.qS && this.zE()
	}, this.zE = function() {
		this.zC = [0, 0, 0, 0, 0, 0];
		for (var zF = [256, 227, 166, 148, 100, this.zD = 0, 0, 0], zG = [0, 8, 24, 30, 46, 70, 256, 333], zH = [0, 0, 3, 9, 17, 25, 256, 179], gP = bz.fj, c8 = 1; c8 < zF.length; c8++)
			if (gP <= zG[c8]) {
				this.zD = zF[c8 - 1] - io.dp((gP - zG[c8 - 1]) * (zF[c8 - 1] - zF[c8]), zG[c8] - zG[c8 - 1]), this.zC[5] = zH[c8 - 1] - io.dp((gP - zG[c8 - 1]) * (zH[c8 - 1] - zH[c8]), zG[c8] - zG[c8 - 1]), this.zC[0] = bz.fi - gP - this.zD -
					this.zC[5];
				break
			} bz.fh = bz.fi - bz.fj, bz.data.numberTeams = (0 < bz.fj) + (0 < bz.fh), bz.data.playerCount = bz.zI = bz.fj + bz.fh, bz.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, bz.fj + this.zD, bz.fh - this.zD]), bz.xK.xL()
	}, this.qW = function(player) {
		zB.push({
			player: player,
			el: 14 + qT.u4(20)
		})
	}, this.dI = function() {
		if (9 === bz.qS)
			for (var c8 = zB.length - 1; 0 <= c8; c8--) --zB[c8].el <= 0 && (iY.mW(zB[c8].player, 0, sd.oQ.zK + sd.oQ.zL), zB.splice(c8))
	}
}

function zM() {
	var zN = 0,
		zO = 0,
		zP = 300,
		zQ = 300,
		zR = 0;
	this.vn = 0, this.d2 = new Uint32Array(512), this.g = function() {
		zO = zN = 0, this.vn = 0, zR = 0
	}, this.dI = function() {
		if (function() {
				var cI = fk.vm.vn;
				if (0 === cI) return 1;
				var d2 = fk.vm.d2;
				if (cm.lJ() % 35 == 6) {
					for (var c8 = cI - 1; 0 <= c8; c8--) n0.rd(d2[c8] << 2) || (cI--, d2[c8] = d2[cI]);
					fk.vm.vn = cI
				}
				return cI < d2.length
			}())
			if (zP <= zN) {
				var zV = fk.vm.vn;
				if (zV) {
					if (cm.lJ() % 350 != 1) return;
					if (zR !== zV) return void(zR = zV);
					if (!aB.lk.qD(eh[0])) return
				} else if (cm.lJ() % 12 != 8) return;
				aB.lk.qk() || fk.vm.g()
			} else {
				var c8, eJ = c2.k0,
					zW = eJ - 2,
					zV = zW * (c2.k1 - 2),
					zX = zP,
					d2 = fk.vm.d2,
					dU = fk.vm.vn,
					zY = d2.length,
					bv = Math.min(zO + zX * ((1 + 19 * fk.performance.zZ) * zQ), zV);
				for (c8 = zO; c8 < bv; c8 += zX) {
					var mx = 4 * (c8 % zW + (io.dp(c8, zW) + 1) * eJ + 1);
					if (n0.rd(mx) && (d2[dU] = mx >> 2, ++dU === zY)) {
						c8 += zX;
						break
					}
				}(zO = c8) >= zV && (zO = ++zN), fk.vm.vn = dU
			}
	}
}

function za(title, dg, qf) {
	var cK, qg;
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), qg.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, qf = qf || [new cN("⬅️ " + L(14), function() {
		br.kl()
	}, dK.b1)], cK = new cd(title, qf), qg = new de(cK.cf, dg), aB.dE.textAlign(cK.cf.style, 1)
}

function zb() {
	var a6;
	this.a6 = document.createElement("hr"), this.resize = function() {
		aB.dE.lg(this.a6, 8, dK.aU)
	}, (a6 = this.a6).style.marginBottom = a6.style.marginTop = "0.65em", a6.style.marginLeft = a6.style.marginRight = "-4%", a6.style.border = "none"
}

function zc() {
	var zd, ze, yq, fV, zf, zg = 0;
	this.zh = new zi, yq = new yw([.45, .27], [.5, .5], 2 / 3), ze = [new cN("⚔️<br>" + L(144), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : zj(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : dK.ao), new cN("🗡️<br>" + L(145), function() {
			zj(1)
		}, dK.b7), new cN("🔑<br>" + L(146), function() {
			zj(2)
		}, dK.bQ), new cN("☰<br>" + L(147), function() {
			zj(3)
		}, dK.aY), new cN("", function() {
			br.cP(12)
		}, dK.aH, !1),
		new cN("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new cN("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], fV = new fW(d1.d2.data[122]);
	for (var c8 = 0; c8 < ze.length; c8++) ze[c8].button.style.position = "absolute";

	function zj(h) {
		cZ.cb.setState(10), iH.iI() || iH.zk(), 0 === h ? br.z.cR(1) : 1 === h ? (lo.zl.j9(d1.d2.data[156].value, 1) || bz.xK.zm(), br.cP(19)) : 2 === h ? 0 !== cZ.id || d1.d2.data[140].value ? br.cP(8, br.bs, new d4(16)) : br.z.d3(br.bs, 16) : 3 ===
			h && br.cP(1)
	}
	fV.a6.style.position = "absolute", fV.a6.style.textAlign = "center", fV.a6.placeholder = L(148), this.show = function() {
		cA.setState(0), cZ.cb.setState(12), this.zh.show(), ze[4].dL(aB.color.zn(d1.d2.data[121].value)), this.resize(), document.body.appendChild(fV.a6);
		for (var c8 = 0; c8 < ze.length; c8++) document.body.appendChild(ze[c8].button);
		1 !== cZ.id || cZ.ca < 5 || (zf && cm.gX > zf + 144e5 ? cZ.hA.setState(14) : zf = cm.gX)
	}, this.u = function() {
		this.zh.u(), br.removeChild(document.body, fV.a6);
		for (var c8 = 0; c8 < ze.length; c8++) br.removeChild(document.body, ze[c8].button)
	}, this.resize = function() {
		this.zh.resize(), this.zh.resize(), yq.resize();
		var gap = .5 * dk.gap,
			zp = 10 / 99 * .84 * yq.eJ,
			zr = .16 * yq.gP,
			zs = .19 * yq.eJ,
			e2 = yq.e2 + zs,
			zp = yq.e3 + zp + 3 * gap,
			eJ = .5 * (yq.eJ - gap) - zs,
			zs = yq.eJ - 2 * zs - zr - gap,
			zs = (aB.dE.zt(fV.a6, e2, zp, zs, zr), aB.dE.zt(ze[4].button, e2 + zs + gap, zp, zr, zr), zg = zp, .5 * (yq.e3 + yq.gP - (zp += zr + gap) - gap));
		aB.dE.zt(ze[0].button, e2, zp, eJ, zs), aB.dE.zt(ze[1].button, e2 + eJ + gap, zp, eJ, zs), aB.dE.zt(ze[2].button, e2, zp + zs + gap, eJ, zs), aB.dE.zt(ze[3].button, e2 + eJ + gap, zp + zs + gap, eJ, zs);
		aB.dE.zt(ze[5].button, e2, zp + zs * 2 + gap * 2, eJ * 2 + gap, zs / 3);
		aB.dE.zt(ze[6].button, e2, zp + zs * 2.33 + gap * 3, eJ * 2 + gap, zs / 3);
		for (var c8 = 0; c8 < ze.length; c8++) ze[c8].button.style.font = aB.dE.f9(0, aB.dE.zu(.065 * yq.gP)), aB.dE.lg(ze[c8].button, 5);
		fV.a6.style.font = aB.dE.f9(0, aB.dE.zu(.08 * yq.gP)), aB.dE.lg(fV.a6, 5)
	}, this.fC = function() {
		if (cA.zv(), iO.fC(), cI = Math.floor((cZ.cb.eR() ? .018 : .0137) * eT.eU), fD.font = aB.dE.f9(0, Math.max(5, cI)), aB.dE.textBaseline(fD, 0), aB.dE.textAlign(fD, 2), fD.fillStyle = dK.aL, fD.fillText(w.ca, eT.eJ, 0), text =
			"Win count: " + __fx.wins.count, textLength = fD.measureText(text).width, cI = Math.max(5, cI), fD.textAlign = "left", fD.textBaseline = "middle", fD.fillText(text, fD.canvas.width - textLength - cI / 2, 2 * cI), iP.fC(zg), iM.fC(),
			iH.iI()) {
			fD.imageSmoothingEnabled = !1;
			var text = iH.lO("territorial.io"),
				textLength = .84 * yq.eJ / text.width;
			fD.setTransform(textLength, 0, 0, textLength, yq.e2 + .08 * yq.eJ, yq.e3), zd = zd || aB.zy.iq(text, aB.zy.iy, [0, 0, 0]);
			for (var e2 = -1; e2 <= 1; e2 += 2)
				for (var e3 = -1; e3 <= 1; e3 += 2) fD.drawImage(zd, e2, e3);
			fD.drawImage(text, 0, 0), fD.imageSmoothingEnabled = !0;
			var cI = iH.lO("logo"),
				zz = .6666 * textLength * text.height / cI.height,
				kT = .5 * eT.eJ,
				kU = yq.e3 + .5 * textLength * text.height - .5 * zz * cI.height;
			fD.setTransform(zz, 0, 0, zz, kT - .6 * textLength * text.width, kU), fD.drawImage(cI, 0, 0), fD.setTransform(zz, 0, 0, zz, kT + .6 * textLength * text.width - zz * cI.width, kU), fD.drawImage(cI, 0, 0), fD.setTransform(1, 0, 0, 1, 0,
				0), fD.imageSmoothingEnabled = !0
		}
	}
}

function a00() {
	this.a01 = 0, this.a02 = 0, this.a03 = 0, this.a04 = 0, this.a05 = 0, this.a06 = 0, this.a07 = [0, 0, 0, 0], this.kY = function() {
		this.a01 = iT.a08(), this.a02 = iT.a09(), this.a03 = -this.a01, this.a04 = -this.a02, this.a05 = eT.eJ / jv, this.a06 = eT.gP / jv, this.a07[0] = Math.floor(this.a03), this.a07[1] = Math.floor(this.a04), this.a07[2] = Math.floor(this.a07[
			0] + this.a05 + 1), this.a07[3] = Math.floor(this.a07[1] + this.a06 + 1), kg.a0A = !0
	}
}

function a0B() {
	this.a0C = new Int16Array(4), this.a0D = new Int16Array(4), this.a0E = null, this.g = function() {
		var c8;
		for (this.a0C[0] = -c2.k0, this.a0C[1] = 1, this.a0C[2] = c2.k0, this.a0C[3] = -1, this.a0E = new Int16Array([-c2.k0, 1 - c2.k0, 1, c2.k0 + 1, c2.k0, c2.k0 - 1, -1, -c2.k0 - 1]), c8 = 0; c8 < 4; c8++) this.a0D[c8] = 4 * this.a0C[c8]
	}, this.a0F = function() {
		return io.du(Math.floor(.15 * (1 + .25 * cZ.cb.eR()) * eT.eU / jv), 4, 128)
	}, this.a0G = function(mx, id) {
		for (var a0H = this.a0D, c8 = 0; c8 < 4; c8++) {
			var n6 = mx + a0H[c8];
			if (n0.a0I(n6) && n0.vo(n6) === id) return !0
		}
		return !1
	}, this.a0J = function(player, mx) {
		return !n0.rd(mx) && player === n0.rb(mx)
	}, this.a0K = function(rP, rS, k9) {
		return (rP -= this.kE(k9)) * rP + (rS -= this.kG(k9)) * rS
	}, this.a0L = function(a0M, a0N, a0O) {
		a0M = this.a0P(a0M) - this.a0Q(a0O), a0N = this.a0R(a0N) - this.a0S(a0O);
		return Math.sqrt(a0M * a0M + a0N * a0N)
	}, this.a0T = function(a0U, a0V) {
		var e4 = this.kE(a0U) - this.kE(a0V),
			a0U = this.kG(a0U) - this.kG(a0V);
		return ~~Math.sqrt(e4 * e4 + a0U * a0U + .5)
	}, this.a0W = function(a0U, a0V) {
		var e4 = this.kE(a0U) - this.kE(a0V),
			a0U = this.kG(a0U) - this.kG(a0V);
		return e4 * e4 + a0U * a0U
	}, this.a0X = function(sm, sn, so, sp) {
		return (sm -= so) * sm + (sn -= sp) * sn
	}, this.mA = function(es, ls) {
		return io.dp(ls * ef.g5[es], 1e3)
	}, this.a0P = function(a0M) {
		return 16 * (a0M + ju) / jv
	}, this.a0R = function(a0N) {
		return 16 * (a0N + jw) / jv
	}, this.a0Y = function(by) {
		return 16 * by / jv
	}, this.rQ = function(a0M) {
		return Math.floor((a0M + ju) / jv)
	}, this.rT = function(a0N) {
		return Math.floor((a0N + jw) / jv)
	}, this.rV = function(rP, rS) {
		return 1 <= rP && 1 <= rS && rP < c2.k0 - 1 && rS < c2.k1 - 1
	}, this.kE = function(k9) {
		return k9 % c2.k0
	}, this.kG = function(k9) {
		return io.dp(k9, c2.k0)
	}, this.rX = function(rP, rS) {
		return rS * c2.k0 + rP
	}, this.a0Z = function(rP, rS) {
		return 4 * this.rX(rP, rS)
	}, this.ln = function(k9) {
		return this.a0a(this.kE(k9), this.kG(k9))
	}, this.a0a = function(rP, rS) {
		return 0 < rP && rP < c2.k0 - 1 && 0 < rS && rS < c2.k1 - 1
	}, this.rY = function(k9) {
		return k9 << 2
	}, this.a0b = function(mx) {
		return mx >> 2
	}, this.a0c = function(k9) {
		return c2.k0 * this.kG(k9) * 256 + (this.kE(k9) << 4)
	}, this.a0d = function(k9) {
		return this.a0c(k9) + 8 + (c2.k0 << 7)
	}, this.kB = function(a0O) {
		return c2.k0 * (this.a0S(a0O) >> 4) + (this.a0Q(a0O) >> 4)
	}, this.a0e = function(a0O) {
		a0O = this.kB(a0O);
		return (this.kE(a0O) >> 5) + g6.a0f.a0g * (this.kG(a0O) >> 5)
	}, this.a0Q = function(a0O) {
		return a0O % (c2.k0 << 4)
	}, this.a0S = function(a0O) {
		return io.dp(a0O, c2.k0 << 4)
	}, this.a0h = function(k9, a0i) {
		return k9 + this.a0C[a0i]
	}, this.a0j = function(mx, a0i) {
		return mx + this.a0D[a0i]
	}, this.a0k = function(a0U, a0V) {
		var e4 = this.kE(a0V) - this.kE(a0U),
			a0V = this.kG(a0V) - this.kG(a0U);
		return Math.abs(e4) >= Math.abs(a0V) ? 1 + 2 * (e4 < 0) : 2 * (0 < a0V)
	}, this.a0l = function(player) {
		return this.rX(ef.jP[player] + ef.jR[player] >> 1, ef.jQ[player] + ef.jS[player] >> 1)
	}, this.a0m = function(player) {
		return this.rX(qT.a0n(ef.jP[player], ef.jR[player]), qT.a0n(ef.jQ[player], ef.jS[player]))
	}
}

function a0o() {
	this.wb = new a0p, this.hi = new a0q, this.hd = new a0r, this.g = function() {
		this.wb.g()
	}
}

function a0s() {
	this.a0t = 512, this.a0u = 8, this.g8 = 0, this.a0v = 0, this.rk = new Uint16Array(this.a0t), this.kC = new Uint32Array(this.a0t), this.a0w = new Uint16Array(this.a0t), this.ri = new Uint32Array(this.a0t), this.a0x = new Uint16Array(this.a0t),
		this.rj = new Uint16Array(this.a0t), this.a0y = new Uint8Array(this.a0t), this.a0z = new Uint8Array(this.a0t), this.a10 = new Array(this.a0t), this.a11 = new Uint16Array(this.a0t), this.g7 = new Uint8Array(bz.fi), this.a12 = new Uint16Array(
			this.a0u * bz.fi), this.g = function() {
			this.g8 = 0, this.a0v = 0, this.g7.fill(0), this.a10.fill(null)
		}, this.mP = function(player) {
			var me = er.mC[0],
				a13 = er.mG[1],
				v = er.dT[0],
				a14 = this.a0v,
				cI = this.g8,
				a15 = kA.a0d(v[0]),
				a16 = this.g7[player],
				a17 = (player << 3) + a16;
			this.rk[cI] = a17, this.kC[cI] = a15, this.a0w[cI] = 0, me < 60 && (aB.lk.nn(player, 60 - me), me = 60), this.ri[cI] = me, this.a0x[cI] = g6.a0f.mP(cI, kA.a0e(a15)), this.rj[cI] = a14, this.a0y[cI] = a13, this.a0z[cI] = 0, this.a10[cI] =
				v, this.a11[cI] = 0, this.a0v = (a14 + 1) % 65536, this.g7[player] = a16 + 1, this.a12[a17] = cI, this.g8++, g6.a13.a18(player, v[v.length - 1], a13, a14, me)
		}, this.dI = function() {
			g6.a13.dI();
			for (var es = bz.cr, ee = g6.k7.q8(es), a1D = (! function(a1D) {
					for (var a1E, kC = a1D.kC, ri = a1D.ri, a0z = a1D.a0z, a0w = a1D.a0w, a0x = a1D.a0x, a10 = a1D.a10, a11 = a1D.a11, a1D = a1D.g8, a1F = c2.k0 << 4, c8 = a1D - 1; 0 <= c8; c8--) {
						var a1G = kC[c8],
							v = a10[c8],
							a1H = a11[c8],
							a15 = kA.a0d(v[a1H]),
							a1I = kA.a0d(v[a1H + 1]),
							a1J = a15 % a1F,
							a15 = ~~((a15 + .5) / a1F),
							a1L = a1I % a1F,
							a1M = ~~((a1I + .5) / a1F),
							a1N = a1L - a1J,
							a1O = a1M - a15,
							by = Math.max(~~Math.sqrt(a1N * a1N + a1O * a1O + .5), 1),
							rh = ri[c8],
							rh = (rh = a0z[c8] ? 4e4 : 25e4 + Math.min(20 * rh, 3e5) + Math.min(rh >> 3, 5e4), a0w[c8] + Math.max(~~((rh + .5) / by), 1));
						65535 <= rh ? a1H + 2 < v.length ? (a11[c8] = a1H + 1, kC[c8] = a1E = function(c8, a1P, a1J, a1K, a1H, by, v, a1F) {
							a1P = Math.min(a1P - 65535, 65535);
							var v = kA.a0d(v[a1H + 2]),
								a1H = v % a1F - a1J,
								v = ~~((v + .5) / a1F) - a1K,
								a1S = Math.max(~~Math.sqrt(a1H * a1H + v * v + .5), 1);
							return a1P = Math.min(Math.floor((by * a1P + .5) / a1S), 65534), g6.z.a0w[c8] = a1P, a1J + io.dp(a1P * a1H, 65535) + a1F * (a1K + io.dp(a1P * v, 65535))
						}(c8, rh, a1L, a1M, a1H, by, v, a1F)) : (kC[c8] = a1E = a1I, a0w[c8] = 65535) : (a0w[c8] = rh, kC[c8] = a1E = a1J + io.dp(rh * a1N, 65535) + a1F * (a15 + io.dp(rh * a1O, 65535))), a0x[c8] = g6.a0f.a1R(a0x[c8], a1G,
							a1E)
					}
				}(this), ! function(a1D) {
					if (cm.lJ() % 2 == 1) {
						var c8, sc, dU, dr, aA, a1T, a1U, a1V, a1W, kD, kF, a15, a1Y, eE, a1a, a1X, cI = a1D.g8,
							kC = a1D.kC,
							rk = a1D.rk,
							ri = a1D.ri,
							a0z = a1D.a0z,
							a0f = g6.a0f.a0f,
							a1c = a0f.length,
							a1d = g6.a0f.a1d,
							a1F = c2.k0 << 4,
							a1e = bz.eN,
							ek = eb.eo,
							bv = (cI - 1) * (io.dp(cm.lJ(), 2) % 2);
						for (c8 = 0; c8 < cI; c8++)
							for (sc = Math.abs(c8 - bv), a15 = kC[sc], dU = kA.a0e(a15), a1W = rk[sc] >> 3, kD = a15 % a1F, kF = ~~((a15 + .5) / a1F), a1a = ri[sc], dr = 0; dr < 9; dr++)
								if (!((a1T = dU + a1d[dr]) < 0 || a1c <= a1T))
									for (a1V = a0f[a1T], a1U = a1V.length, aA = 0; aA < a1U; aA++) a1Y = a1V[aA], a1X = rk[a1Y] >> 3, a1W == a1X || a1e && ek[a1W] === ek[a1X] && ek[a1W] || (a1X = kC[a1Y], (eE = kD - a1X % a1F) * eE + (eE =
										kF - ~~((a1X + .5) / a1F)) * eE < 14400 && (a1X = ri[a1Y], eE = a1X <= a1a ? Math.max(1, io.dp(a1X + io.dp(a1a - a1X, 10), 10)) : Math.max(1, io.dp(a1a, 10)), ri[a1Y] = Math.max(a1X - eE, 0),
										a0z[a1Y] = 4))
					}
				}(this), ! function(a1D) {
					if (cm.lJ() % 5 == 3)
						for (var ri = a1D.ri, cI = a1D.g8, c8 = 0; c8 < cI; c8++) {
							var me = ri[c8];
							ri[c8] = Math.max(me - Math.max(1, me >> 7), 0)
						}
				}(this), this), ri = a1D.ri, a0z = a1D.a0z, c8 = a1D.g8 - 1; 0 <= c8; c8--) a0z[c8] = a0z[c8] >> 1, 0 === ri[c8] && (g6.a1g.a1h(c8), g6.qB.a1i(c8));
			ch.nk(es, ee - g6.k7.q8(es), 15)
		}
}

function a1j() {
	var a1k = [
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
		a1l = [
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
	this.a1m = null, this.a1n = null, this.a1o = null, this.a1p = null, this.a1q = null, this.a1r = null, this.a1s = null, this.a1t = null, this.a1u = null, this.a1v = null;

	function a21(oG, fs) {
		for (var a1m = n0.a1m, a1n = n0.a1n, a1o = n0.a1o, c8 = oG; c8 < fs; c8++) a1m[c8] = io.dp(64 * qT.random(), qT.value(100)) << 2, a1n[c8] = io.dp(64 * qT.random(), qT.value(100)) << 2, a1o[c8] = io.dp(64 * qT.random(), qT.value(100)) << 2
	}

	function a20(oG, fs) {
		for (var colorsData = bz.data.colorsData, a1m = n0.a1m, a1n = n0.a1n, a1o = n0.a1o, c8 = oG; c8 < fs; c8++) {
			var dt = colorsData[c8];
			a1m[c8] = 4 * (dt >> 12), a1n[c8] = 4 * (dt >> 6 & 63), a1o[c8] = 4 * (63 & dt)
		}
	}

	function a2U(mx, a2W) {
		mn[mx] = 0, mn[mx + 1] = 0, mn[mx + 2] = a2W, mn[mx + 3] = 0, a2X(mx)
	}

	function a2X(mx) {
		var e2;
		kg.kh || (e2 = n0.a08(mx), mx = n0.a09(mx), kg.kh = e2 >= kX.a07[0] && e2 <= kX.a07[2] && mx >= kX.a07[1] && mx <= kX.a07[3])
	}
	this.mz = new Int32Array(4), this.n1 = new Int32Array(8), this.i7 = function() {
		var mz = this.mz,
			mz = (mz[0] = -4 * c2.k0, mz[1] = 4, mz[2] = -mz[0], mz[3] = -mz[1], this.n1);
		mz[0] = -4 * c2.k0 - 4, mz[1] = -4 * c2.k0, mz[2] = -4 * c2.k0 + 4, mz[3] = -4, mz[4] = 4, mz[5] = 4 * c2.k0 - 4, mz[6] = 4 * c2.k0, mz[7] = 4 * c2.k0 + 4
	}, this.g = function() {
		if (this.a1m ? (this.a1m.fill(0), this.a1n.fill(0), this.a1o.fill(0), this.a1p.fill(0), this.a1q.fill(0), this.a1r.fill(0), this.a1s.fill(0), this.a1t.fill(0), this.a1u.fill(0), this.a1v.fill(0), this.sQ.fill(0)) : (this.a1m =
				new Uint8Array(bz.fi), this.a1n = new Uint8Array(bz.fi), this.a1o = new Uint8Array(bz.fi), this.a1p = new Uint8Array(bz.fi), this.a1q = new Uint8Array(bz.fi), this.a1r = new Uint8Array(bz.fi), this.a1s = new Uint8Array(bz.fi),
				this.a1t = new Uint8Array(bz.fi), this.a1u = new Uint8Array(bz.fi), this.a1v = new Uint8Array(bz.fi), this.sQ = new Uint8Array(bz.fi)), bz.eN)
			for (var a2A = eb.a2A, a1m = n0.a1m, a1n = n0.a1n, a1o = n0.a1o, c8 = bz.fi - 1; 0 <= c8; c8--) {
				var aA = a2A[c8],
					dU = io.dp((a1l[aA][3] + 1) * qT.random(), qT.value(100));
				a1m[c8] = a1k[aA][0] + dU * a1l[aA][0], a1n[c8] = a1k[aA][1] + dU * a1l[aA][1], a1o[c8] = a1k[aA][2] + dU * a1l[aA][2]
			} else 0 === bz.data.colorsType ? bz.data.selectableColor ? (a20(0, bz.fj), a21(bz.fj, bz.fi)) : a21(0, bz.fi) : a20(0, bz.fi);
		! function() {
			var c8, by, a1m = n0.a1m,
				a1n = n0.a1n,
				a1o = n0.a1o;
			for (c8 = bz.fi - 1; 0 <= c8; c8--) by = io.dp(a1m[c8] + a1n[c8] + a1o[c8], 3), a1m[c8] += a29(by - a1m[c8], 2), a1n[c8] += a29(by - a1n[c8], 2), a1o[c8] += a29(by - a1o[c8], 2), a1m[c8] -= a1m[c8] % 4, a1n[c8] -= a1n[c8] % 4, a1o[
				c8] -= a1o[c8] % 4
		}(),
		function() {
			for (var cI = bz.fi, a1m = n0.a1m, a1n = n0.a1n, a1o = n0.a1o, a1p = n0.a1p, c8 = 0; c8 < cI; c8++) a1m[c8] += c8 >> 7, a1n[c8] += c8 >> 5 & 3, a1o[c8] += c8 >> 3 & 3, a1p[c8] = 7 & c8
		}(), this.a24(),
			function() {
				for (var cI = bz.fi, a1q = n0.a1q, a1r = n0.a1r, a1s = n0.a1s, a1m = n0.a1m, a1n = n0.a1n, a1o = n0.a1o, c8 = 0; c8 < cI; c8++) {
					var ey = a1m[c8],
						z2 = a1n[c8],
						dr = a1o[c8];
					60 <= ey + z2 + dr ? (a1q[c8] = Math.max(ey - 40, 3 & ey), a1r[c8] = Math.max(z2 - 40, 3 & z2), a1s[c8] = Math.max(dr - 40, 3 & dr)) : (a1q[c8] = ey + 40, a1r[c8] = z2 + 40, a1s[c8] = dr + 40)
				}
			}(),
			function() {
				for (var cI = bz.fi, a1t = n0.a1t, a1u = n0.a1u, a1v = n0.a1v, a1m = n0.a1m, a1n = n0.a1n, a1o = n0.a1o, c8 = 0; c8 < cI; c8++) {
					var ey = a1m[c8],
						z2 = a1n[c8],
						dr = a1o[c8];
					688 <= ey + z2 + dr ? (a1t[c8] = ey - 88, a1u[c8] = z2 - 88, a1v[c8] = dr - 88) : (a1t[c8] = Math.min(ey + 88, 252 + (3 & ey)), a1u[c8] = Math.min(z2 + 88, 252 + (3 & z2)), a1v[c8] = Math.min(dr + 88, 252 + (3 & dr)))
				}
			}()
	}, this.a27 = function(player) {
		var dT = er.a28;
		return dT[0] = this.a1m[player], dT[1] = this.a1n[player], dT[2] = this.a1o[player], dT
	}, this.a24 = function() {
		for (var c8 = bz.fi - 1; 0 <= c8; c8--) this.sQ[c8] = this.a1m[c8] + this.a1n[c8] + this.a1o[c8] < 280 ? 0 : 1
	}, this.a08 = function(mx) {
		return io.dp(mx, 4) % c2.k0
	}, this.a09 = function(mx) {
		return io.dp(mx, 4 * c2.k0)
	}, this.a2B = function(e2, e3) {
		return Math.floor(4 * (e3 * c2.k0 + e2))
	}, this.a2C = function(mx) {
		var mz = this.mz;
		return this.a2D(mx + mz[0]) || this.a2D(mx + mz[1]) || this.a2D(mx + mz[2]) || this.a2D(mx + mz[3])
	}, this.a2E = function(mx) {
		var mz = this.mz;
		return this.re(mx + mz[0]) || this.re(mx + mz[1]) || this.re(mx + mz[2]) || this.re(mx + mz[3])
	}, this.a2F = function(mx, player) {
		var mz = this.mz;
		return this.a2G(mx + mz[0], player) || this.a2G(mx + mz[1], player) || this.a2G(mx + mz[2], player) || this.a2G(mx + mz[3], player)
	}, this.a2H = function(c8, a2I, a2J, a2K) {
		this.a1m[c8] = a2I >> 16, this.a1n[c8] = a2I >> 8 & 255, this.a1o[c8] = 255 & a2I, this.a1q[c8] = a2J >> 16, this.a1r[c8] = a2J >> 8 & 255, this.a1s[c8] = 255 & a2J, this.a1t[c8] = a2K >> 16, this.a1u[c8] = a2K >> 8 & 255, this.a1v[c8] =
			255 & a2K
	}, this.a2L = function(c8) {
		return [(this.a1m[c8] << 16) + (this.a1n[c8] << 8) + this.a1o[c8], (this.a1q[c8] << 16) + (this.a1r[c8] << 8) + this.a1s[c8], (this.a1t[c8] << 16) + (this.a1u[c8] << 8) + this.a1v[c8]]
	}, this.ra = function(mx) {
		return 208 <= mn[mx + 3]
	}, this.qc = function(player, mx) {
		return this.ra(mx) && this.a2M(player, mx)
	}, this.a2M = function(player, mx) {
		return player === this.rb(mx)
	}, this.a2N = function(mx) {
		return 208 <= mn[mx + 3] && mn[mx + 3] < 224
	}, this.a2O = function(mx) {
		return 224 <= mn[mx + 3] && mn[mx + 3] < 248
	}, this.a2P = function(mx) {
		return 248 <= mn[mx + 3]
	}, this.a2Q = function(mx) {
		for (var mz = this.mz, c8 = 3; 0 <= c8; c8--)
			if (this.a0I(mx + mz[c8])) return !0;
		return !1
	}, this.a2R = function(mx) {
		return this.ra(mx) || this.rd(mx)
	}, this.a0I = function(mx) {
		return 0 === mn[mx + 3] && 2 === mn[mx + 2]
	}, this.rd = function(mx) {
		return 0 === mn[mx + 3] && 1 === mn[mx + 2]
	}, this.a2S = function(mx) {
		return 0 === mn[mx + 3] && 3 === mn[mx + 2]
	}, this.re = function(mx) {
		return 0 === mn[mx + 3] && 5 === mn[mx + 2]
	}, this.a2D = function(mx) {
		return 0 === mn[mx + 3] && 3 <= mn[mx + 2]
	}, this.vo = function(mx) {
		return (mn[mx] >> 1 << 8) + mn[mx + 1]
	}, this.a2T = function(mx) {
		return 1 & mn[mx]
	}, this.a2G = function(mx, player) {
		return this.rd(mx) || this.ra(mx) && player !== this.rb(mx)
	}, this.rb = function(mx) {
		return ((3 & mn[mx]) << 7) + ((3 & mn[mx + 1]) << 5) + ((3 & mn[mx + 2]) << 3) + (7 & mn[mx + 3])
	}, this.qd = function(mx) {
		a2U(mx, 1)
	}, this.a2V = function(mx) {
		a2U(mx, 2)
	}, this.a2Y = function(mx, player) {
		mn[mx] = this.a1m[player], mn[mx + 1] = this.a1n[player], mn[mx + 2] = this.a1o[player], mn[mx + 3] = 208 + this.a1p[player], a2X(mx)
	}, this.ns = function(mx, player) {
		mn[mx] = this.a1q[player], mn[mx + 1] = this.a1r[player], mn[mx + 2] = this.a1s[player], mn[mx + 3] = 224 + this.a1p[player], a2X(mx)
	}, this.a2Z = function(mx, player) {
		mn[mx] = this.a1t[player], mn[mx + 1] = this.a1u[player], mn[mx + 2] = this.a1v[player], mn[mx + 3] = 248 + this.a1p[player], a2X(mx)
	}
}

function ki(hz) {
	w && !hz || (a2z(), io = new dn, d7 = new a30, aB = new a31, dK = new a9, bz = new a32, hv = new a33, hc = new a0o, j8 = new a34, fq = new a35, mh = new a36, a2a = new ff, kH = new je, a2b = new a37, a2c = new a38, a2d = new a39, iX = new a3A,
		cp = new a3B, iU = new a3C, iP = new a3D, iW = new a3E, gc = new gK, gp = new a3F, iT = new a3G, iO = new a3H, iR = new a3I, iQ = new a3J, iS = new a3K, iZ = new a3L, iL = new a3M, iN = new a3N, cA = new a3O, iH = new a3P, n0 = new a1j,
		xv = new px, en = new xq, mB = new a3Q, mb = new a3R, ly = new a3S, mD = new a3T, a2e = new a3U, iY = new rm, ef = new jM, a2f = new tu, qV = new zA, sd = new a3V, ms = new a3W, a2g = new a3X, kN = new wf, y = new a3Y, qT = new a3Z, fk =
		new a3a, a2h = new a3b, uu = new a3c, a2i = new xA, eT = new hy, cw = new a3d, bw = new l3, a2j = new a3e, a2k = new wu, a2l = new a3f, qz = new a3g, a2m = new a3h, gw = new gr, a2n = new a3i, a2o = new rG, cs = new a3j, lo = new a3k,
		iV = new a3l, hQ = new wM, hb = new a3m, ft = new a3n, a2p = new a3o, h6 = new uT, kA = new a0B, g6 = new a3p, er = new a3q, a2q = new a3r, ma = new a3s, qM = new a3t, c2 = new a3u, v0 = new a3v, br = new a3w, xy = new xY, cZ = new a3x,
		w = new a3y, cE = new a3z, d1 = new a40, eb = new a41, go = new eG, kX = new a00, kg = new a42, cy = new a43, iJ = new a44, ch = new vL, ck = new a45, cm = new a46, a2s = new a47, dk = new a48, a2t = new a49, mN = new a4A, a2u = new a4B,
		bf = new a4C, a2w = new a4D, vw = new a4E, a2x = new a4F, nI = new a4G, w.g(), cZ.g(), eT.i7(), d1.g(), hv.g(), hv.a4I(), (dW = new dP).g(), aB.g(), cy.g(), y.g(), hc.g(), j8.g(), c2.g(), br.g(), iM = new a4J, eT.g(), cm.g(), dk.g(), iJ
		.g(), a2r = new a4K, qT.g(), mD.a4L(), xy.g(), ms.g(), cA.g(), iO.g(), a2f.g(), h6.g(), iH.g(), cm.cn = !0, setTimeout(function() {
			c2.cB(2, 14071)
		}, 0), br.cP(5, 5), a2p.bd() || cZ.cb.a4M(), eT.iD(), w.a4N = 1)
}

function a4O() {
	function a4Y() {
		var z2;
		return 8 === bz.qS ? 0 : (z2 = Math.floor(ef.jb[bz.cr] / 50), (z2 = Math.min(z2, 200)) / 100)
	}

	function a4R() {
		var z2 = a4Y();
		0 !== z2 && iU.qY(440, L(149, [z2.toFixed(2)]), 40, 0, dK.ad, dK.aI, -1, !1)
	}
	this.dI = function() {
		var yU;
		0 === qM.result.a4P || 0 === qM.result.a4Q.length || 8 === bz.qS ? aB.lk.lm(bz.cr) && a4R() : (function(yU) {
			7 !== bz.qS && 10 !== bz.qS && 9 !== bz.qS || 0 !== bz.a4e && yU && iU.qY(600, L(153, [yU.toFixed(2)]), 40, 0, dK.aL, dK.aI, -1, !1)
		}(yU = function() {
			iU.qY(520, L(150), 40, 0, dK.aL, dK.aI, -1, !1);
			for (var a4Q = qM.result.a4Q, cI = a4Q.length, eg = ef.eg, dT = [], c8 = 0; c8 < cI; c8++) {
				var es = a4Q[c8];
				dT.push({
					es: es,
					ee: eg[es]
				})
			}
			dT.sort((dq, dr) => dr.ee - dq.ee);
			var xU = ef.gj,
				ee = qM.result.a4Z,
				z2 = qM.result.a4P,
				dZ = "",
				yU = 0;
			for (c8 = 0; c8 < cI; c8++) {
				var a4b = dT[c8].ee * z2 / (100 * ee),
					a4c = xU[dT[c8].es] + ": " + a4b.toFixed(2) + "   ";
				dT[c8].es === bz.cr && (yU = a4b), 2 < c8 && 4 !== cI ? 3 === c8 && (dZ += "(" + L(151, [cI - 3]) + ")") : dZ += a4c
			}
			iU.qY(560, aB.oB.a4d(dZ), 40, 0, dK.ad, dK.aI, -1, !1), yU ? iU.qY(580, L(152, [yU.toFixed(2) + " + " + a4Y().toFixed(2)]), 40, 0, dK.ad, dK.aI, -1, !1) : aB.lk.lm(bz.cr) && a4R();
			return yU
		}()), 2 === bz.a4U || 7 <= bz.qS || function(yU) {
			var a4Q = qM.result.a4Q,
				cI = a4Q.length,
				jN = ef.jN,
				eg = ef.eg,
				a4f = [];
			loop: for (var c8 = 0; c8 < cI; c8++) {
				var es = a4Q[c8],
					jJ = aB.oB.a4g(jN[es]);
				if (null !== jJ) {
					for (var a4h = eg[es], dr = a4f.length - 1; 0 <= dr; dr--)
						if (jJ === a4f[dr].name) {
							a4f[dr].ee += a4h, a4f[dr].dT.push({
								es: es,
								ee: a4h
							});
							continue loop
						} a4f.push({
						name: jJ,
						ee: a4h,
						dT: [{
							es: es,
							ee: a4h
						}]
					})
				}
			}
			if (0 !== a4f.length) {
				a4f.sort((dq, dr) => dr.ee - dq.ee);
				var dT = a4f[0].dT,
					a4i = (dT.sort((dq, dr) => dr.ee - dq.ee), "[" + a4f[0].name + "]"),
					a4j = 512 * qM.result.a4P / 26214400,
					dU = (iU.qY(0, L(154, [a4i, a4j.toFixed(4)]), 40, 0, dK.aL, dK.aI, -1, !1), dT.length),
					a4k = a4f[0].ee,
					a4l = 1e4 * a4j;
				for (c8 = 0; c8 < dU; c8++)
					if (dT[c8].es === bz.cr) {
						iU.qY(600, L(155, [(a4l * dT[c8].ee / (10 * a4k)).toFixed(2)]), 40, 0, dK.aL, dK.aI, -1, !1), iU.qY(640, L(156, [(.2 * yU).toFixed(2), a4i]), 40, 0, dK.aL, dK.aI, -1, !1);
						break
					}
			}
		}(yU))
	}, this.qO = function() {
		var a4W, a4X;
		bz.wx || (a4W = ef, a4X = bz.cr, 0 === a4W.jc[a4X]) || a4W.ja[a4X] < 1 || 2 * a4W.jY[a4X] > 3 * (a4W.jZ[a4X] + a4W.ja[a4X]) || a4R()
	}
}

function a4m() {
	var d, a4n;

	function a4t() {
		(d = new WebSocket("wss://territorial.io/s52/")).onopen = a4x, d.onclose = function() {
			a4y()
		}
	}

	function a4x() {
		if (d && d.readyState === d.OPEN) {
			var eJ = new wM;
			eJ.cB(1608), eJ.hS(1, 0), eJ.hS(6, 7), eJ.hS(2, cZ ? cZ.id : 3), eJ.hS(1, w.hs ? 1 : 0), eJ.hS(1, w.ht ? 1 : 0), eJ.hS(1, w ? w.a4N : 0);
			for (var c8 = 0; c8 < a4n.length && c8 < 228; c8++) eJ.hS(7, a4n.charCodeAt(c8) % 128);
			d.send(eJ.s), a4y()
		}
	}

	function a4y() {
		d && (d.onclose = null, d.onopen = null, d = null)
	}
	window.addEventListener("error", function a4o(a6) {
		a4n = "";
		try {
			var a4p = function(a6) {
				if (!a6.error) return 0;
				var stack = a6.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, a4z = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a4z.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(a6);
			return 0 === a4p || a6.lineno < 2 ? void console.log("Error: External Code") : (window.removeEventListener("error", a4o), a4n = a6.lineno + " " + a6.colno + "|" + a4p, __fx.reportError(a6, a4n), alert("Error:\n" + a6.filename +
				" " + a6.lineno + " " + a6.colno + " " + a6.message))
		} catch (a6) {
			a4n = "SE|" + a4n + "|" + a6, console.log(a4n), alert(a4n)
		}
		a4t()
	})
}

function a50() {
	this.j9 = function(a51) {
		for (var a52 = ft, size = a52.fu(a51), a53 = 7 + 9 * a52.fu(1), dT = [], c8 = 0; c8 < size; c8++) dT.push(String.fromCharCode(a52.fu(a53)));
		return dT.join("")
	}
}

function a54() {
	this.a55 = function() {
		hQ.cB(39), hQ.hS(1, 0), hQ.hS(6, 16), y.kw.a56(), y.z.send(0, hQ.s)
	}, this.a57 = function(cG) {
		hQ.cB(127), hQ.hS(1, 0), hQ.hS(6, 17), j8.wb.a5A(d1.d2.data[105].value, 5), j8.wb.a5A(d1.d2.data[106].value, 15), y.z.send(cG, hQ.s)
	}, this.a59 = function() {
		hQ.cB(97), hQ.hS(1, 0), hQ.hS(6, 18), j8.wb.a5A(d1.d2.data[110].value, 15), y.z.send(0, hQ.s)
	}, this.ks = function(is) {
		var cI = is.dZ.length;
		hQ.cB(21 + 16 * cI), hQ.hS(1, 0), hQ.hS(6, 29), hQ.hS(6, is.action), hQ.hS(8, cI), hc.hi.hj(is.dZ), y.z.send(0, hQ.s)
	}, this.a5B = function(yA, colors, a5C, fB) {
		hb.g(), hb.hS(1, 0), hb.hS(6, 16), hb.hS(20, Math.min(yA, 1e6));
		for (var c8 = 0; c8 < 11; c8++)
			for (var dq = 0; dq < 3; dq++) hb.hS(8, colors[c8][dq]);
		yA = hv.data.a5E(a5C.trim());
		hb.hS(8, -1 === yA ? 255 : yA), hc.hd.hU(fB.trim().substring(0, 180), 8, hb), y.z.send(0, hb.he())
	}, this.a5F = function(data) {
		hQ.cB(43), hQ.hS(1, 0), hQ.hS(6, 25), hQ.hS(6, data.action), j8.wb.a5A(data.c9, 5), y.z.send(0, hQ.s)
	}, this.a5G = function(data) {
		hQ.cB(75), hQ.hS(1, 0), hQ.hS(6, 27), hQ.hS(6, data.action), j8.wb.a5A(data.c9, 5), hQ.wP(32, data.value), y.z.send(0, hQ.s)
	}
}

function a5H() {
	this.d2 = {}, this.a5I = new Array(8), this.ym = null, this.yn = null, this.a5J = 0, this.a5K = [0, 0], this.a4v = function() {
		br.cP(5, 5)
	}, this.cR = function(hl) {
		hl && (iN.a5L = hl), br.cj(), iN.g()
	}, this.cX = function() {
		br.cP(0 === cA.cg() ? 5 : 0)
	}, this.cQ = function() {
		if (1 === d1.d2.data[130].value) br.cP(8, br.hN().i, new d4(24, {
			a5M: d1.d2.data[125].value,
			x4: d1.d2.data[128].value,
			x5: d1.d2.data[129].value
		}));
		else {
			for (var dT = (dT = d1.d2.data[126].value.split(",")).slice(0, 10), c8 = 0; c8 < dT.length; c8++) dT[c8] = dT[c8].trim().slice(0, 7).toUpperCase();
			1 === dT.length && 0 === dT[0].length && (dT = []), br.cP(8, br.hN().i, new d4(23, {
				a5M: d1.d2.data[125].value,
				a4f: dT
			}))
		}
	}, this.d3 = function(i, target) {
		br.cP(4, i, new dD("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + y.z.dG(
			"/privacy"), !1, [new cN("⬅️ " + L(14), function() {
				br.cP(i)
			}), new cN("✅ Accept", function() {
				d1.db.dc(140, 1), 0 === target ? br.cP(2, i) : br.cP(8, i, new d4(target))
			})]))
	}, this.a5N = function() {
		for (var c8 = 0; c8 < 8; c8++) this.a5I[c8] = j8.hi.jE(ft.fu(5));
		this.a5I[1] = "[" + this.a5I[1] + "]", 5 === br.bs && (br.hN().zh.dc(this.a5I), br.hN().resize())
	}, this.a5O = function(dt, lC, a7) {
		dt = aB.lk.rF(dt, 1, 1e6);
		var a5P = Math.max(1, 1 + Math.floor(.01 * (dt - 100))),
			lC = L(157, [lC]);
		return (lC += "<br>") + L(158, [a7]) + "<br>" + L(159, [a5P < 20 ? dt + a5P + "–" + (dt + 20) : dt + a5P]) + "<br>" + L(160, [dt])
	}
}

function a3W() {
	var a5Q;

	function a5k(tN, tQ, e2, e3, globalAlpha) {
		c2.a5Y.save(), c2.a5Y.globalAlpha = globalAlpha, c2.a5Y.imageSmoothingEnabled = !1, c2.a5Y.scale(tQ, tQ), c2.a5Y.drawImage(tN, Math.floor(e2 * (c2.k0 / tQ - tN.width)), Math.floor(e3 * (c2.k1 / tQ - tN.height))), c2.a5Y.restore()
	}
	this.a5R = 0, this.a5S = 0, this.a5T = 0, this.mt = 0, this.g = function() {
		(a5Q = new Array(c2.a5U))[0] = {
			eJ: [0, 5e3, 8e3, 1e4],
			ey: [220, 250, 255, 220],
			z2: [190, 220, 0, 0],
			dr: [170, 200, 0, 0]
		}, a5Q[1] = {
			eJ: [0, 4e3, 5e3, 6e3, 1e4],
			ey: [25, 0, 100, 0, 25],
			z2: [25, 0, 0, 0, 25],
			dr: [25, 0, 0, 0, 25]
		}, a5Q[2] = {
			eJ: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			ey: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			z2: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			dr: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a5Q[3] = {
			eJ: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			ey: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			z2: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			dr: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, a5Q[4] = {
			eJ: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			ey: [10, 10, 20, 10, 10, 170, 212],
			z2: [20, 20, 60, 100, 100, 110, 170],
			dr: [70, 70, 160, 30, 30, 60, 120]
		}, a5Q[5] = {
			eJ: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			ey: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			z2: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			dr: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a5Q[6] = {
			eJ: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			ey: [10, 10, 60, 255, 255, 200, 200],
			z2: [10, 10, 60, 255, 255, 200, 200],
			dr: [80, 80, 255, 255, 255, 200, 200]
		}, a5Q[7] = {
			eJ: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			ey: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			z2: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			dr: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a5Q[8] = {
			eJ: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			ey: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			z2: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			dr: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a5Q[9] = {
			eJ: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			ey: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			z2: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			dr: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a5Q[20] = {
			eJ: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			ey: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			z2: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			dr: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, a5Q[21] = {
			eJ: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			ey: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			z2: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			dr: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a5V = function() {
		var a5j, c8, dq, dw, it = function() {
				var it;
				return c2.a5c = document.createElement("canvas"), c2.a5c.width = c2.k0, c2.a5c.height = c2.k1, c2.a5Y = c2.a5c.getContext("2d", {
					alpha: !1
				}), it = c2.a5Y.getImageData(0, 0, c2.k0, c2.k1), c2.mp = it.data, it
			}(),
			eJ = a5Q[c2.c4].eJ,
			ey = a5Q[c2.c4].ey,
			z2 = a5Q[c2.c4].z2,
			dr = a5Q[c2.c4].dr,
			dt = a2g.a5d(),
			cI = eJ.length - 2,
			a5e = new Array(1 + cI),
			a5f = new Array(1 + cI),
			a5g = new Array(1 + cI),
			a5h = new Array(1 + cI);
		for (dq = cI; 0 <= dq; dq--) a5e[dq] = eJ[dq + 1] - eJ[dq], a5f[dq] = ey[dq + 1] - ey[dq], a5g[dq] = z2[dq + 1] - z2[dq], a5h[dq] = dr[dq + 1] - dr[dq];
		for (c8 = c2.k0 * c2.k1 - 1; 0 <= c8; c8--)
			for (dq = cI; 0 <= dq; dq--)
				if (dt[c8] >= eJ[dq]) {
					dw = dt[c8] - eJ[dq], c2.mp[4 * c8] = ey[dq] + a29(a5f[dq] * dw, a5e[dq]), c2.mp[4 * c8 + 1] = z2[dq] + a29(a5g[dq] * dw, a5e[dq]), c2.mp[4 * c8 + 2] = dr[dq] + a29(a5h[dq] * dw, a5e[dq]), c2.mp[4 * c8 + 3] = 255;
					break
				} c2.a5Y.putImageData(it, 0, 0), c2.a5Z(c2.c4) && iH.iI() && c2.a5Z(c2.c4) && (it = iH.lO("arena"), a5j = iH.lO("territorial.io"), a5k(it, 5, .5, .5, .1), a5k(a5j, 2, .5, .45, .1)), c2.a5b = !0, cm.cn = !0
	}, this.a5l = function() {
		for (var es, e2, e3, mq, mr, dx, a5S = 0, eJ = c2.k0, gP = c2.k1, dw = eJ * gP * 4, mm = mn, mo = c2.mp, c8 = eJ - 1; 0 <= c8; c8--) mm[(es = c8 << 2) + 2] = mm[dw - es - 2] = 3;
		for (dw = 4 * eJ, c8 = gP - 1; 0 <= c8; c8--) mm[(es = c8 * dw) + 2] = mm[es + dw - 2] = 3;
		for (mq = eJ - 1, mr = gP - 1, e3 = 1; e3 < mr; e3++)
			for (dw = e3 * eJ, e2 = 1; e2 < mq; e2++) dx = 1 - (mo[(es = dw + e2 << 2) + 2] > mo[es + 1] && mo[es + 2] > mo[es]), mm[es + 2] = 6 - 5 * dx, a5S += dx;
		this.a5R = (eJ - 2) * (gP - 2), this.mt = 0, c2.nL(c2.c4) && (c2.mt.ml(), c2.mt.mu(4, 5)), this.a5S = bz.rE = a5S - this.mt, this.a5T = this.a5R - this.a5S - this.mt, this.a5T && (c2.mt.mu(6, 2), c2.mt.n8())
	}
}

function a4E() {
	var a5m = [];
	this.a5n = function(player, m7, sP, a5o) {
		player === bz.cr || m7 === bz.cr || !a5o && aB.lk.qD(player) || aB.lk.qD(m7) || this.qY(ef.gj[player] + " supported " + ef.gj[m7] + " with " + aB.oB.sV(sP) + " ressource" + (1 === sP ? "." : "s."))
	}, this.qY = function(dZ, mV) {
		dZ = {
			gX: iS.a5p(),
			dZ: dZ,
			mV: mV
		};
		a5m.push(dZ), 30 === br.bs && br.hN().qY(dZ)
	}, this.clear = function() {
		a5m = [];
		var z2 = br.on(30);
		z2 && z2.clear()
	}, this.vx = function() {
		return a5m
	}
}

function a3V() {
	this.oQ = new a5q, this.iv = new a5r
}

function a3C() {
	var gL, gP, a5s, a5t, a5u, a5v, a5w, a5x, a5y;

	function a09() {
		return gp.a6F(iU.a6C()) ? cw.v2 ? __fx.settings.keybindButtons ? gp.e3 - 2 * gp.gP - 3 * a5s : gp.e3 - gp.gP - 2 * a5s : __fx.settings.keybindButtons ? gp.e3 - gp.gP - 2 * a5s : gp.e3 - a5s : iV.a6F(iU.a6E()) ? cw.v2 ? iV.a09() - gp.gP - 2 *
			a5s : iV.a09() - a5s : cw.v2 ? eT.gP - gp.gP - (a2s.a6G() + 1) * a5s : eT.gP - a2s.a6G() * dk.gap
	}

	function a64(ee, dZ, id, es, a67, a68, a1X, a69, a6A, wH, a6L) {
		var c8, eL, tN, hm, a6M = void 0 !== a6A,
			eJ = Math.floor(gc.measureText(dZ, iU.gQ) + 1.5 * a5t + (a6M ? gP : 1.5 * a5t));
		if (cm.cn = !0, a6L || vw.qY(dZ, a6A), eJ + 2 * a5s + gp.gP > eT.eJ && !a6M && 50 !== id && 20 < dZ.length) a64(ee, (a6L = aB.oB.a6N(dZ))[0], id, es, a67, a68, a1X, a69, a6A, wH, !0), a64(ee, a6L[1], id, es, a67, a68, a1X, a69, a6A, wH, !0);
		else if (a6L = eJ + (50 === id ? a5u : 0), (tN = document.createElement("canvas")).width = eJ, tN.height = gP, (eL = tN.getContext("2d", {
				alpha: !0
			})).font = iU.gQ, aB.dE.textBaseline(eL, 1), aB.dE.textAlign(eL, 0), eL.clearRect(0, 0, eJ, gP), eL.fillStyle = a68, eL.fillRect(0, 0, eJ, gP), eL.fillStyle = a67, eL.fillText(dZ, Math.floor(1.5 * a5t), Math.floor(gP / 2)), a6M && (eL
				.imageSmoothingEnabled = !0, sd.iv.a6O(a6A, eL, eJ - gP, 0, gP)), 0 === (hm = {
				gX: ee,
				dZ: dZ,
				id: id,
				player: es,
				canvas: tN,
				a67: a67,
				a68: a68,
				eJ: eJ,
				a6D: a6L,
				a1X: a1X,
				a69: a69,
				a6A: a6A,
				wH: wH
			}).gX || 0 < gL.length && 0 < gL[0].gX) gL.unshift(hm);
		else {
			for (c8 = 1; c8 < gL.length; c8++)
				if (0 < gL[c8].gX) return void gL.splice(c8, 0, hm);
			gL.push(hm)
		}
	}

	function a65(ey, z2, dr) {
		return "rgb(" + ey + "," + z2 + "," + dr + ")"
	}

	function a6Q(id, el) {
		for (var cI = gL.length, c8 = 0; c8 < cI; c8++) gL[c8].id === id && el-- <= 0 && (gL.splice(c8, 1), c8--, cI--)
	}

	function a6R(id, player) {
		for (var a6u = !1, c8 = gL.length - 1; 0 <= c8; c8--) gL[c8].id !== id || player !== bz.fi && gL[c8].player !== player || (gL.splice(c8, 1), a6u = !0);
		return a6u
	}

	function a6w(dZ) {
		a64(340, dZ, 6, 0, a65(215, 245, 255), dK.aI, -1, !1)
	}
	this.a5z = "", this.g = function() {
		var self;
		a5x = 0, a5w = cZ.cb.eR() ? 7 : 12, a5v = {
				wG: [0, 0, 0],
				a60: [0, 0, 0],
				gm: [220, 180, 180],
				lf: [0, 0, 0],
				aA: [0, 0, 0]
			}, gL = [], this.resize(), bz.k2 && this.qZ(0, 18), c2.ge.gf[c2.c4].name.length && a6w(L(202, [c2.ge.gf[c2.c4].name])), c2.ge.gf[c2.c4].a6x && a6w(L(203, [c2.ge.gf[c2.c4].a6x])), a6w(L(204, [c2.k0 - 2 + "x" + (c2.k1 - 2)])), a6w(L(
				205, [aB.oB.sV(ms.a5R)])), ms.a5R !== ms.a5S && a6w(L(206, [aB.oB.sV(ms.a5S) + " (" + aB.oB.a6y(100 * ms.a5S / ms.a5R, 1) + ")"])), 0 < ms.a5T && a6w(L(182, [aB.oB.sV(ms.a5T) + " (" + aB.oB.a6y(100 * ms.a5T / ms.a5R, 1) + ")"])),
			0 < ms.mt && a6w(L(207, [aB.oB.sV(ms.mt) + " (" + aB.oB.a6y(100 * ms.mt / ms.a5R, 1) + ")"])), 10 === bz.qS && a64(120, L(208), 6, 0, a65(235, 255, 120), dK.aI, -1, !1), 0 !== (self = this).a5z.length && (a64(200, self.a5z, 0, 0, dK
				.aL, dK.aI, -1, !1), self.a5z = ""), bz.a63 && a64(340, L(161), 6, 0, a65(255, 200, 0), dK.aI, -1, !1)
	}, this.resize = function() {
		var a66, c8;
		if (gP = (gP = Math.floor((cZ.cb.eR() ? .031 : .0249) * eT.eU)) < 10 ? 10 : gP, this.fontSize = Math.floor(2 * gP / 3), this.gQ = aB.dE.f9(1, this.fontSize), a5s = dk.gap, a5t = Math.floor(gP / 5), 0 < gL.length)
			for (a66 = gL, gL = [], c8 = a66.length - 1; 0 <= c8; c8--) a64(a66[c8].gX, a66[c8].dZ, a66[c8].id, a66[c8].player, a66[c8].a67, a66[c8].a68, a66[c8].a1X, a66[c8].a69, a66[c8].a6A, a66[c8].wH, !0);
		this.a6B()
	}, this.a6B = function() {
		a5y = document.createElement("canvas");
		var dZ = L(162),
			eL = (a5u = gc.measureText(dZ, this.gQ) + 5 * a5t, a5y.height = gP, a5y.width = a5u, a5y.getContext("2d", {
				alpha: !0
			}));
		eL.font = this.gQ, aB.dE.textBaseline(eL, 1), aB.dE.textAlign(eL, 1), eL.clearRect(0, 0, a5u, gP), eL.fillStyle = dK.ai, eL.fillRect(0, 0, a5u, gP), eL.fillStyle = dK.aL, eL.fillText(dZ, Math.floor(a5u / 2), Math.floor(gP / 2))
	}, this.a6C = function() {
		var cI;
		return cw.v2 ? cw.eJ : 0 === (cI = gL.length) ? 0 : 1 === cI ? gL[0].a6D : im(gL[0].a6D, gL[1].a6D)
	}, this.a6E = function() {
		var cI = gL.length;
		return cw.v2 ? cI ? im(cw.eJ, gL[0].a6D) : cw.eJ : 0 === cI ? 0 : 1 === cI ? gL[0].a6D : 2 === cI ? im(gL[0].a6D, gL[1].a6D) : im(im(gL[0].a6D, gL[1].a6D), gL[2].a6D)
	}, this.ub = function(e2, e3) {
		for (var kD, a6H, a6I = a09(), c8 = gL.length - 1; 0 <= c8; c8--)
			if ((a6H = a6I - (c8 + 1) * gP) <= e3 && e3 < a6H + gP) return 50 === gL[c8].id ? e2 >= eT.eJ - a5u - a5s - gL[c8].eJ && (e2 >= eT.eJ - a5u - a5s ? cs.lk.a6J(gL[c8].player) : kH.k3(gL[c8].player, 800, !1, 0), !0) : e2 >= eT.eJ - gL[
				c8].eJ - a5s && (736 === gL[c8].id ? window.open("https://" + gL[c8].dZ, "_blank") : gL[c8].a69 && (gL[c8].wH && gL[c8].wH.dq ? (a6H = gL[c8].wH.k9, kD = kA.kE(a6H) - 10, a6H = kA.kG(a6H) - 10, kH.jz(kD, a6H, 19 + kD, 19 +
				a6H)) : gL[c8].wH && gL[c8].wH.dr ? kH.k4(gL[c8].player, gL[c8].wH.k5) : (kH.k3(gL[c8].player, 800, !1, 0), 0 <= gL[c8].a1X && (kD = gL[c8].a1X, gL[c8].a1X = gL[c8].player, gL[c8].player = kD))), !0);
		return !1
	}, this.qY = function(ee, dZ, id, es, a67, a68, a1X, a69, a6A, wH) {
		a64(ee, dZ, id, es, a67, a68, a1X, a69, a6A, wH)
	}, this.a6K = function(oO) {
		a64(300, oO, 252, 0, dK.aL, dK.aI, -1, !1)
	}, this.a6P = function(id) {
		for (var c8 = gL.length - 1; 0 <= c8; c8--) gL[c8].id === id && (gL[c8].gX = 1)
	}, this.qZ = function(player, id) {
		0 === id ? (gc.gh(player, 0), a6Q(423, 2), a64(160, L(163, [ef.gj[player]]), 423, player, "rgb(10,220,10)", dK.aI, -1, !1)) : 1 === id ? (a6R(50, bz.fi), gc.gh(player, 1), a64(360, L(164, [ef.gj[player]]), 0, player, dK.b2, dK.aI, -1, !
			0), kH.k3(player, 2700, !1, 0)) : 2 === id ? (gc.gh(player, 2), a64(0, L(165), 0, player, "rgb(10,255,255)", dK.aI, -1, !0), kH.k3(player, 2700, !1, 0)) : 3 === id ? (gc.gh(player, 2), a64(0, L(166, [ef.gj[player]]), 0, player, dK
			.aL, dK.aI, -1, !0), kH.k3(player, 2700, !1, 0)) : 4 === id ? this.qb(1, player, player) : 5 === id ? aB.lk.qD(bz.cr) || (function(id, a6f) {
			var c8, a6g = 0,
				cI = gL.length;
			for (c8 = 0; c8 < cI; c8++)
				if (gL[c8].id === id && a6f <= ++a6g) return gL.splice(c8, 1)
		}(1, 5), iY.tZ(player) && a64(180, L(167, [ef.gj[player]]), 1, player, a65(255, 200, 180), dK.aI, -1, !0), aB.lk.qm(player, 10) && (a6Q(573, 0), a64(180, L(168, [ef.gj[player]]), 573, player, dK.b2, dK.aI, -1, !0))) : 18 === id ? a64(
			255, L(169), 18, 0, dK.aL, dK.aI, -1, !1) : 21 === id ? a64(220, L(170), id, 0, dK.aL, dK.aI, -1, !1) : 22 === id ? this.qb(2, player, player) : 59 === id && a64(0, L(171), id, 0, dK.bM, dK.aI, 0, !1)
	}, this.a6T = function(oO) {
		a64(200, L(172, [oO]), 94, 0, dK.aL, dK.ay, -1, !1)
	}, this.a6U = function(a6V) {
		if (bz.cr === a6V && !bz.wx && !bz.co)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a64(0, "Your Win Count is now " + __fx.wins.count, 3, a6V, dK.aL, dK.aI, -1, !0);
		ef.eg[a6V] && (gc.gh(a6V, 2), bz.fj < 100 ? a64(0, L(166, [ef.gj[a6V]]), 3, a6V, dK.aL, dK.aI, -1, !0) : a64(0, L(173, [ef.gj[a6V]]), 3, a6V, dK.aL, dK.aI, -1, !0))
	}, this.a6W = function(mx) {
		var dZ, a6Z, a6X = "(" + kA.kE(mx >> 2) + ", " + kA.kG(mx >> 2) + ")",
			a69 = !1,
			player = 0;
		n0.a2R(mx) ? n0.rd(mx) ? a6X = L(174, [a6X]) : (player = n0.rb(mx), bz.co && !1 === __fx.hoveringTooltip.active && (bz.cr = player), dZ = L(175, [aB.eL.a6Y(ef.jN[player], aB.dE.f9(0, 10), 150)]) + "   ", dZ = (dZ += L(176, [aB.oB.sV(ef
				.g5[player])]) + "   ") + L(177, [aB.oB.sV(ef.eg[player])]) + "   ", bz.eN && (a6Z = eb.xU[eb.ec[eb.eo[player]]], dZ += L(60) + ": " + a6Z + "   "), aB.lk.qD(player) && (dZ += L(178) + ": " + fq.a6a[fq.me[player]] + "   "),
			a6X = dZ = (dZ += L(179, [player]) + "   ") + L(180, [a6X]), a69 = !0) : a6X = n0.re(mx) ? L(181, [a6X]) + "   #" + n0.vo(mx) : L(182, [a6X]), a6Q(55, 0), a64(220, a6X, 55, player, dK.aL, dK.aI, -1, a69, void 0, void 0, !0)
	}, this.a6b = function(a6c) {
		var dU = g6.z,
			player = dU.rk[a6c] >> 3,
			dZ = (cm.cn = !0, a6Q(55, 0), L(183, [ef.gj[player]]) + "   ");
		a64(220, dZ += L(176, [aB.oB.sV(dU.ri[a6c])]), 55, player, dK.aL, dK.aI, -1, !0)
	}, this.a6d = function(lC, a7, mV) {
		lC === bz.cr ? a64(175, " " + L(184, [ef.gj[a7]]) + ": ", 1001, a7, a65(200, 255, 210), dK.aI, -1, !0, mV) : this.a6e(lC, mV)
	}, this.a6e = function(lC, mV) {
		a6Q(1e3, 0), a64(175, ef.gj[lC] + ": ", 1e3, lC, dK.aL, "rgba(5,60,25,0.9)", -1, !0, mV)
	}, this.a6h = function() {
		var oO;
		bz.a4e ? (oO = L(185), gc.gd(L(186), 2, 1, 12), a64(0, oO, 40, 0, "rgb(10,220,10)", dK.aI, -1, !1)) : (oO = L(187), gc.gd(L(188), 2, 0, 16), a64(0, oO, 41, 0, dK.aL, dK.aI, -1, !1))
	}, this.a6i = function() {
		var el = ef.gj,
			by = bz.data;
		a64(300, el[0] + " [" + bz.a6j.a6k(by.elo[0]) + "] vs " + el[1] + " [" + bz.a6j.a6k(by.elo[1]) + "]", 65, 0, dK.aC, "rgba(100,255,255,0.75)", -1, !1)
	}, this.wz = function(oO) {
		a64(350, oO, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6l = function(a6m) {
		a64(0, L(a6m ? 189 : 190), 247, 0, dK.bL, dK.aI, -1, !1)
	}, this.a6n = function(a6o, a6p, a6q) {
		var by = bz.data,
			el = ef.gj;
		a64(0, el[0] + ": " + bz.a6j.a6k(by.elo[0]) + " -> " + a6o, 66, 0, dK.aL, a6q[0], -1, !1), a64(0, el[1] + ": " + bz.a6j.a6k(by.elo[1]) + " -> " + a6p, 66, 1, dK.aL, a6q[1], -1, !1)
	}, this.a6r = function(player, id) {
		0 === id ? a6R(50, player) ? (a64(128, L(191, [ef.gj[player]]), 52, player, a65(180, 255, 180), dK.aI, -1, !0), iY.mW(player, 2, 255)) : a64(384, L(192, [ef.gj[player]]), 51, player, a65(210, 210, 255), dK.aI, -1, !0) : a6R(51, player) ?
			(a64(128, L(193, [ef.gj[player]]), 52, player, dK.aL, "rgba(60,120,10,0.9)", -1, !0), iY.mW(player, 2, 255)) : (a64(384, L(194, [ef.gj[player]]), 50, player, dK.aL, "rgba(90,90,90,0.9)", -1, !0), iY.mW(player, 2, 96))
	}, this.a6s = function(wG, target) {
		var color = a65(210, 255, 210);
		1 < wG.length ? a64(230, L(195, [wG.length, ef.gj[target]]), 66, target, color, dK.aI, -1, !0) : a64(230, L(196, [ef.gj[wG[0]], ef.gj[target]]), 66, wG[0], color, dK.aI, target, !0)
	}, this.a6t = function(player, target) {
		a64(230, L(197, [ef.gj[player], ef.gj[target]]), 66, player, dK.aL, "rgba(75,65,5,0.9)", target, !0)
	}, this.qX = function(id, el) {
		a6Q(id, el)
	}, this.ta = function(id, player) {
		a6R(id, void 0 === player ? bz.fi : player)
	}, this.wA = function(id) {
		for (var c8 = gL.length - 1; 0 <= c8; c8--)
			if (gL[c8].id === id) return gL[c8];
		return null
	}, this.vU = function(sP, a6v, player) {
		2 !== ef.jO[bz.cr] && a64(200, 1 === sP ? L(198, [ef.gj[player]]) : L(199, [aB.oB.sV(sP), ef.gj[player]]), 30, player, "rgb(190,255,190)", dK.aI, -1, !0)
	}, this.vV = function(sP, player) {
		2 !== ef.jO[bz.cr] && (a6Q(31, 0), sP = " (" + aB.oB.sV(sP) + ") 💸", a64(150, sP = aB.lk.qD(player) ? L(200) + sP : L(201, [ef.gj[player]]) + sP, 31, player, dK.aC, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a6z = function(hz) {
		for (var aA = cm.lJ(), c8 = 2; 0 <= c8; c8--) 0 < a5v.lf[c8] && (hz || a5v.aA[c8] < aA - 220) && this.a70(c8)
	}, this.a70 = function(id) {
		var dZ, cI = a5v.lf[id],
			player = a5v.wG[id];
		a5v.lf[id] = 0, 1 === cI ? (0 === id ? dZ = L(209, [ef.gj[player], ef.gj[a5v.a60[0]]]) : 1 === id ? dZ = L(210, [ef.gj[player]]) : 2 === id ? dZ = L(211, [ef.gj[player]]) : 3 === id && (dZ = L(212, [ef.gj[player]])), a6Q(7, 0), a64(a5v
			.gm[id], dZ, 7, a5v.a60[id], dK.aL, dK.aI, -1, !0)) : (dZ = L(0 === id ? 213 : 1 === id ? 214 : 215, [cI]), a6Q(7, 0), a64(a5v.gm[id], dZ, 7, player, dK.aL, dK.aI, -1, !1))
	}, this.qb = function(id, a1W, a1X) {
		var aA = cm.lJ(),
			cI = a5v.lf[id] + 1;
		a5v.lf[id]++, a5v.wG[id] = a1W, a5v.a60[id] = a1X, 1 === cI && (a5v.aA[id] = aA), (1 === cI && (bz.a71 < 32 || 2 === bz.gb) || 1 < cI && (a5v.aA[id] < aA - 140 || 2 === bz.gb)) && this.a70(id)
	}, this.dI = function() {
		a2k.dI();
		for (var iE = (iE = gL.length - a5w) <= 1 ? 1 : iE * iE, c8 = gL.length - 1; 0 <= c8; c8--) 0 < gL[c8].gX && (gL[c8].gX -= iE, gL[c8].gX <= 0) && (cm.cn = !0, gL.splice(c8, 1));
		! function() {
			var el, c8;
			if (128 !== a5x && !(++a5x < 128))
				for (el = 5, c8 = en.ep - 1; 0 <= c8; c8--) 1 === ef.jO[en.em[c8]] && 0 < el-- && a64(240, L(212, [ef.gj[en.em[c8]]]), 1, en.em[c8], dK.aC, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a6z(!1)
	}, this.fC = function() {
		for (var tB, e3 = a09(), c8 = gL.length - 1; 0 <= c8; c8--) tB = e3 - (c8 + 1) * gP, 50 === gL[c8].id ? (fD.drawImage(gL[c8].canvas, eT.eJ - gL[c8].eJ - a5u - a5s, tB), fD.drawImage(a5y, eT.eJ - a5u - a5s, tB)) : fD.drawImage(gL[c8]
			.canvas, eT.eJ - gL[c8].eJ - a5s, tB)
	}, this.rZ = function(id, me) {
		var a6X, a73 = dK.aV;
		0 === id ? a6X = L(216) : 1 === id ? (a6X = L(217), a73 = dK.bH) : 2 === id ? a6X = L(218) : 3 === id ? a6X = L(219) : (a6X = aB.oB.sV(me), a73 = 5 === id ? dK.bH : dK.aI), a6Q(74, 0), a64(0, a6X, 74, 0, dK.aL, a73, -1, !1, void 0,
			void 0, !0)
	}
}

function a3Q() {
	var a74 = new Uint16Array(bz.fi),
		a75 = 0;

	function a7B(a7, a79) {
		var aA = cm.lJ();
		return 3213 <= aA ? 4 + io.dp(100 * a79, mD.a7C(a7)) : (a7 = 1 + io.dp(bz.rE, 300), aA < 357 ? 2 + io.dp(100 * a79, a7) : aA < 714 ? 2 + io.dp(100 * a79, 4 * a7) : aA < 1071 ? 2 + io.dp(100 * a79, 10 * a7) : aA < 2142 ? 2 + io.dp(100 * a79,
			30 * a7) : 2 + io.dp(100 * a79, 100 * a7))
	}

	function a7A(a7) {
		return bz.wx || 4284 <= cm.lJ() || aB.lk.qD(a7)
	}
	this.g = function() {
		a74.fill(0), a75 = 15
	}, this.a76 = function(m7) {
		var player = bz.cr;
		return !!aB.lk.m8(player, m7) && !(!aB.lk.m9(player, aB.lk.mA(player, gp.a77()), m7) || (player = m7, m7 = er.mC[0], !a7A(player) && a74[player] + a7B(player, m7) > a75))
	}, this.gh = function(a7, a79) {
		if (!a7A(a7)) {
			a79 = a7B(a7, a79);
			if (a74[a7] + a79 > a75) return !1;
			a74[a7] += a79
		}
		return !0
	}, this.dI = function() {
		cm.lJ() % 100 == 99 && (cm.lJ() < 1071 ? a75 += 4 : cm.lJ() < 2142 ? a75 += 6 : cm.lJ() < 3213 ? a75 += 8 : a75 += 10)
	}
}

function a7D() {
	var vu, xE, xF, fL;

	function pB() {
		xI(), 2 !== bz.data.spawningType || aB.pr.a7F(bz.data.spawningData) || (bz.data.spawningType = 0), 2 !== bz.data.spawningType && (bz.data.spawningData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		2 === bz.data.spawningType && aB.pr.xM(xF.gY(), bz.data.spawningData, c2.h5 - 1)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(220), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR,
			fb = (fQ.fS(L(104)), [L(105), L(221), L(106)]),
			value = bz.data.spawningType;
		0 === bz.data.gameMode && (fb.splice(1, 1), 0 < value) && (value = 1);
		fQ.fc(new fd({
			fb: fb,
			value: value
		}, function(h) {
			xI(), bz.data.spawningType = h, 0 === bz.data.gameMode && 1 === h && (bz.data.spawningType = 2), 2 !== bz.data.spawningType || bz.data.spawningData || (bz.data.spawningData = new Uint16Array(2 * bz.fi)), br.cP(24)
		})), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ = new fR;
		fQ.fS("My Spawn"), fQ.fX(new fe({
			value: bz.data.selectableSpawn
		}, L(222), function(value) {
			bz.data.selectableSpawn = value
		})), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR,
			a7I = (fQ.fS("Seed"), new fW({
				h: -1,
				value: bz.data.spawningSeed
			}, 1, 0, function(a6) {
				var value = Math.abs(Math.floor(a6.target.value)) % 16384;
				a6.target.value = bz.data.spawningSeed = value
			}));
		fQ.fX(a7I), fQ.fX(new fY([new cN(L(105), function() {
			a7I.a6.value = bz.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), fL.push(fQ)
	}(fL), function(fL) {
		var fQ;
		2 === bz.data.spawningType && ((fQ = new fR).fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.spawningData, 2)), fQ.fX(xF), fL.push(fQ))
	}(fL), fL))
}

function cN(a7J, a7K, a7L, a7M, a7N) {
	var self, a7O = document.createElement("button");

	function ws() {
		var a7U;
		h6.h7() || (a7U = aB.color.a7V(a7L), !1 !== a7M && 0 < a7U[0] && a7U[0] < 255 && a7U[0] === a7U[1] && a7U[0] === a7U[2]) || (128 < a7U[0] && 128 < a7U[1] && 128 < a7U[2] ? a7O.style.backgroundColor = aB.color.wt(a7L, -50) : a7O.style
			.backgroundColor = aB.color.wt(a7L, a7U[3] && a7U[3] < 120 ? 150 : 50))
	}

	function a7Q() {
		if (a7M) {
			var a7U = aB.color.a7V(a7L);
			if (a7U[0] === a7U[1] && a7U[0] === a7U[2]) return
		}
		a7K && ((a7U = a7K(this)) ? 2 === a7U && ws() : a7W(this))
	}

	function a7R() {
		this.style.backgroundColor = a7L
	}

	function wr() {
		a7W(this)
	}

	function a7W(by) {
		by.style.backgroundColor = a7L, by.blur()
	}
	this.button = a7O, this.dO = a7K, this.dJ = a7L, this.a7P = function(a7S) {
			a7S = 1.1 - Math.min(.01 * a7J.length, .6) + .2 * a7S;
			a7O.style.fontSize = a7S.toFixed(1) + "em"
		}, this.dL = function(aA) {
			aA ? 1 === aA ? aA = dK.aX : 2 === aA && (a7M = 1, aA = dK.aX) : (a7M = 0, aA = dK.aH), this.dJ = a7L = aA, a7O.style.backgroundColor = aA
		}, self = this, a7O.innerHTML = a7J, a7O.style.color = a7N ? dK.bL : dK.aL, a7O.style.userSelect = "none", a7O.style.outline = "none", a7O.style.overflowWrap = "break-word", self.dL(a7L), a7O.style.border = "none", a7O.style.font = "inherit",
		self.a7P(0), a7O.style.padding = "0em 0.3em", a7O.onclick = a7Q, a7O.addEventListener("mouseover", ws), a7O.addEventListener("mouseout", wr), a7O.addEventListener("focus", ws), a7O.addEventListener("blur", a7R)
}

function a7X() {
	this.dI = function(player, k5) {
		player = g6.k7.k8(player, k5);
		return !(player < 0 || !g6.a1g.a7Z(player) || (g6.a1g.a1h(player), 0))
	}
}

function a7a() {
	var a7b = [L(223), L(224), L(225), L(226), L(227), L(228), L(229)],
		a7c = [100, 60, 30, 15, 6, 1],
		a7d = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		a7e = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		a7g = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a7h = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.a7i = function(id, ey, h) {
		ey = this.a7j(ey);
		return +(a7d[ey][id] > h)
	}, this.a7j = function(ey) {
		for (var c8 = 0; c8 < a7c.length; c8++)
			if (a7c[c8] <= ey) return c8;
		return a7c.length
	}, this.a7k = function(ey) {
		return a7b[this.a7j(ey)]
	}, this.a7l = function(id, kS) {
		return a7e[id].replace(new RegExp("x", "g"), kS)
	}, this.a7m = function(id, kS) {
		return a7g[id].replace(new RegExp("x", "g"), kS)
	}, this.a7n = function(id, a7o) {
		return this.a7h[5][id]
	}
}

function a7p() {
	this.pO = function() {
		if (2 === bz.a4U) bz.a4e = 2;
		else {
			if (8 === bz.qS) aB.lk.qD(0) || 0 === ef.fo[0] ? bz.a7r = 1 : aB.lk.qD(1) || 0 === ef.fo[1] ? bz.a7r = 0 : bz.a7r = +(ef.eg[1] > ef.eg[0]);
			else {
				if (bz.eN) {
					var eZ = go.ei();
					if (bz.a7s = eZ, eb.ec[eZ]) return void(bz.a4e = +(eb.eo[bz.cr] === eZ))
				}
				bz.a7r = eh[0]
			}
			bz.a4e = +(bz.a7r === bz.cr)
		}
	}
}

function a3a() {
	this.vm = new zM, this.a7t = new a7u, this.a7v = new a7w, this.performance = new a7x, this.m2 = new a7y, this.a7z = new a80, this.a81 = new vc, this.a82 = new a83, this.fl = new a84, this.g = function() {
		this.vm.g(), this.a7v.g(), this.performance.g(), this.m2.g(), this.a7z.g()
	}, this.dI = function() {
		this.performance.dI(), this.vm.dI(), this.a7v.a85()
	}
}

function a86() {
	var a87 = new Uint8Array(78);
	this.g = function() {
		var c8;
		for (a87[50] = 37, c8 = 0; c8 < 10; c8++) a87[c8 + 3] = c8 + 1;
		for (c8 = 0; c8 < 26; c8++) a87[c8 + 20] = c8 + 11, a87[c8 + 52] = c8 + 38
	}, this.a88 = function(dZ) {
		return dZ.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a89 = function(dZ, size) {
		if ((dZ = this.a88(dZ)).length > size) return dZ.substring(0, size);
		for (; dZ.length < size;) dZ = "-" + dZ;
		return dZ
	}, this.a8A = function(dZ) {
		for (var a4k = a87, cI = dZ.length, dT = new Uint8Array(cI), c8 = 0; c8 < cI; c8++) dT[c8] = a4k[dZ.charCodeAt(c8) - 45];
		return dT
	}, this.a8B = function(a8C) {
		hQ.cB(6 * a8C.length), this.a8D(a8C), ft.g(hQ.s)
	}, this.a8D = function(a8C) {
		for (var cI = a8C.length, eJ = hQ, c8 = 0; c8 < cI; c8++) eJ.hS(6, a8C[c8])
	}, this.hj = function(dZ) {
		this.a8D(this.a8A(dZ))
	}, this.a5A = function(dZ, size) {
		this.a8D(this.a8A(this.a89(dZ, size)))
	}, this.a8E = function(dZ, size) {
		for (var dT = this.a8A(this.a89(dZ, size)), dt = 0, h8 = 1, c8 = dT.length - 1; 0 <= c8; c8--) dt += h8 * dT[c8], h8 *= 64;
		return dt
	}
}

function a3p() {
	this.qB = new a8F, this.a8G = new a8H, this.z = new a0s, this.a0f = new a8I, this.a8J = new a8K, this.a13 = new a8L, this.fg = new a8M, this.mK = new a8N, this.a8O = new a8P, this.a8Q = new a8R, this.mH = new a8S, this.a8T = new a8U, this.a8V =
		new a8W, this.k7 = new a8X, this.mR = new a8Y, this.a1g = new a8Z, this.mT = new a7X, this.g = function() {
			this.a8V.g(), this.a8G.g(), this.z.g(), this.a0f.g(), this.a8J.g(), this.a8Q.g(), this.a1g.g()
		}, this.fC = function() {
			this.a8Q.fC(), this.a8G.fC()
		}
}

function a3G() {
	var a8a, a8b, eJ, e2, e3, a8c, a8d;
	this.g = function() {
		a8a = new Array(2), a8b = new Array(2), this.kK = !1, a8d = a8c = jw = ju = 0, jv = 1, this.resize()
	}, this.resize = function() {
		eJ = (eJ = Math.floor((cZ.cb.eR() ? .072 : .0502) * eT.eU)) < 8 ? 8 : eJ;
		for (var c8 = 1; 0 <= c8; c8--) a8a[c8] = document.createElement("canvas"), a8a[c8].width = eJ, a8a[c8].height = eJ, a8b[c8] = a8a[c8].getContext("2d", {
			alpha: !0
		});
		this.a8e(),
			function() {
				for (var a8o = Math.floor(1 + eJ / 20), c8 = 1; 0 <= c8; c8--) a8b[c8].clearRect(0, 0, eJ, eJ), a8b[c8].fillStyle = dK.aE, a8b[c8].beginPath(), a8b[c8].arc(eJ / 2, eJ / 2, eJ / 2 - a8o, 0, 2 * Math.PI), a8b[c8].fill(), a8b[c8]
					.lineWidth = a8o, a8b[c8].fillStyle = dK.aL, a8b[c8].strokeStyle = dK.aL, a8b[c8].beginPath(), a8b[c8].arc(eJ / 2, eJ / 2, eJ / 2 - a8o, 0, 2 * Math.PI), a8b[c8].stroke(), a8p(a8b[c8], 0, 0, eJ, a8o, .3, 0 === c8)
			}()
	}, this.a08 = function() {
		return -ju / jv
	}, this.a09 = function() {
		return -jw / jv
	}, this.kV = function(hH, a0M) {
		ju = jv * hH - a0M
	}, this.kW = function(hI, a0N) {
		jw = jv * hI - a0N
	}, this.ub = function(a8h, a6H) {
		return bz.eS || ! function(a8h, a6H) {
			return Math.pow(a8h - (e2 + eJ / 2), 2) + Math.pow(a6H - (e3 + eJ / 2), 2) < eJ * eJ / 4 || Math.pow(a8h - (e2 + eJ / 2), 2) + Math.pow(a6H - (e3 + 2 * eJ), 2) < eJ * eJ / 4
		}(a8h, a6H) || d1.d2.data[8].value ? (kH.fs() && (this.kK = !0, a8c = a8h, a8d = a6H), !1) : a6H < e3 + 1.25 * eJ ? this.ue(Math.floor(eT.eJ / 2), Math.floor(eT.gP / 2), -200) : this.ue(Math.floor(eT.eJ / 2), Math.floor(eT.gP / 2),
			200)
	}, this.sg = function(a8h, a6H) {
		var a8i, a8j, e4, e5;
		return !kH.fs() || (a8i = ju, a8j = jw, ju += e4 = a8c - a8h, jw += e5 = a8d - a6H, iY.sg(e4, e5), this.ia(), a8c = a8h, a8d = a6H, a8i !== ju) || a8j !== jw
	}, this.ue = function(si, sj, deltaY) {
		var h8;
		if (kH.fs()) {
			if (0 < deltaY) h8 = (h8 = 500 / (500 + deltaY)) < .5 ? .5 : h8;
			else {
				if (!(deltaY < 0)) return !1;
				h8 = 2 < (h8 = (500 - deltaY) / 500) ? 2 : h8
			}
			this.a8k(si, sj, h8), cm.cn = !0
		}
		return !0
	}, this.a8k = function(e2, e3, mx) {
		var sh;
		mx = sh = (sh = 1024 < (sh = mx) * jv ? 1024 / jv : sh) * jv < .125 ? .125 / jv : sh, iY.zoom(mx, e2, e3),
			function(sh, si, sj) {
				jv *= sh, ju = (ju + si) * sh - si, jw = (jw + sj) * sh - sj, iT.ia()
			}(mx, e2, e3)
	}, this.ia = function() {
		var zs = eT.eJ / 16,
			eE = 0,
			a8n = eT.gP / 16,
			eF = 0;
		ju < -eT.eJ + zs && (eE = -eT.eJ + zs - ju), ju > jv * c2.k0 - zs && (eE = jv * c2.k0 - zs - ju), jw < -eT.gP + a8n && (eF = -eT.gP + a8n - jw), jw > jv * c2.k1 - a8n && (eF = jv * c2.k1 - a8n - jw), ju += eE, jw += eF, kX.kY(), iY.sf(eE,
			eF)
	}, this.a8e = function() {
		e2 = eT.eJ - eJ - dk.gap, e3 = Math.floor(eT.gP / 2 - 1.25 * eJ)
	}, this.fC = function() {
		d1.d2.data[8].value || (fD.drawImage(a8a[0], e2, e3), fD.drawImage(a8a[1], e2, Math.floor(e3 + 3 * eJ / 2)))
	}
}

function a3d() {
	var gP, canvas, eL, a8q, a8r, a8s, a8t, a8u, a8v, a8w, a8x, a8y, a6m = !1,
		tN = (this.v2 = !1, this.eJ = 0, new Array(2)),
		a8z = 0;

	function ew() {
		var eJ = cw.eJ,
			dU = (a8u = !1, a92(eL, eJ, gP), Math.floor(eJ / 2));
		1 === a8q ? (eL.fillStyle = dK.af, eL.fillRect(dU, 0, dU, gP)) : -1 === a8q && (eL.fillStyle = dK.aw, eL.fillRect(0, 0, dU, gP)), a93(eL, eJ, gP, 2);
		var dU = (dU = Math.floor(.25 * gP)) < 2 ? 2 : dU,
			a5R = (eL.fillStyle = dK.aR, Math.floor((gP - 4) * a8r[1] / a8s[1]));
		0 < a5R && eL.fillRect(2, gP - 2 - a5R, dU, a5R), 0 < (a5R = Math.floor((gP - 4) * a8r[0] / a8s[0])) && eL.fillRect(eJ - 2 - dU, gP - 2 - a5R, dU, a5R);
		dU = (dU = Math.floor(gP / 8)) < 2 ? 2 : dU, a8p(eL, Math.floor(.4 * gP), 0, gP, dU, .5, !1), a8p(eL, Math.floor(eJ - 1.4 * gP), 0, gP, dU, .5, !0), a5R = 1.1 * gP / tN[0].width;
		eL.imageSmoothingEnabled = !0, eL.setTransform(a5R, 0, 0, a5R, (eJ - a5R * tN[0].width) / 2, -.05 * gP), eL.drawImage(tN[+a6m], 0, 0), eL.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a99() {
		a8y = -1, a6m = a2e.a9A(), iU.a6P(257), iU.a6l(a6m), cw.v2 = !0, a8u = !0, a8v = 360;
		for (var dt, ee = 0, c8 = en.ep - 1; 0 <= c8; c8--) aB.lk.qD(en.em[c8]) || (ee += ef.eg[en.em[c8]]);
		a6m ? a8s[0] = Math.max(io.dp(3 * ee, 4), 1) : bz.eN ? (dt = 9 === bz.qS ? 8 === eb.ec[go.ea()] ? 80 : (dt = io.dp(100 * go.eW(), bz.rE), io.dp(io.du(1550 - 11 * dt, 400, 1e3), 10)) : (dt = io.dp(100 * go.eW(), bz.rE), io.dp(io.du(1600 - 12 *
			dt, 400, 1e3), 10)), dt = io.dp(dt * ee, 100), a8s[0] = Math.max(dt, 1)) : 8 === bz.qS ? a8s[0] = Math.max(io.dp(3 * ee, 4), 1) : a8s[0] = Math.max(io.dp(3 * ee, 5), 1), a8s[1] = Math.max(ee - a8s[0], 1)
	}

	function a95() {
		a8x = cm.lJ(), a8u = !0, a8v = a8q = 0, a8t = [], cw.v2 = !1, iU.ta(247), a8r[0] = a8r[1] = 0, iU.a6P(673)
	}

	function a09() {
		return gp.a6F(iU.a6C()) ? __fx.settings.keybindButtons ? gp.e3 - 2 * (gP + dk.gap) : gp.e3 - gP - dk.gap : iV.a6F(iU.a6E()) ? iV.a09() - gP - dk.gap : eT.gP - gP - a2s.a6G() * dk.gap
	}
	this.i7 = function() {
		for (var c8 = 0; c8 < 2; c8++) tN[c8] = aB.canvas.a90(iH.get(3), 8 - c8, dK.bZ), tN[c8] = aB.canvas.a91(tN[c8])
	}, this.g = function() {
		a8x = -1e4, a8w = a8z = 0, a8y = -1, this.v2 = !1, a8u = a6m = !1, a8r = [a8q = a8v = 0, 0], a8s = [1, 1], a8t = [], this.resize()
	}, this.resize = function() {
		gP = gp.gP, this.eJ = 4 * gP, (canvas = document.createElement("canvas")).width = this.eJ, canvas.height = gP, eL = canvas.getContext("2d", {
			alpha: !0
		}), ew()
	}, this.sb = function() {
		a8u && ew()
	}, this.ub = function(e2, e3) {
		return !!this.v2 && !(e2 < eT.eJ - this.eJ - dk.gap || e3 < a09() || (bz.co || this.mY(bz.cr) && (cp.cv && cp.cl(), cs.ct.gH(e2 > eT.eJ - dk.gap - this.eJ / 2 ? 1 : 0)), 0))
	}, this.dI = function() {
		0 < a8w ? 0 === --a8w && a95() : this.v2 ? 180 == --a8v && 3 * a8r[0] < a8s[0] ? a95() : a8r[0] >= a8s[0] ? a6m ? qM.a9D.a9E() : qM.a9D.a9F() : a8r[1] >= a8s[1] ? a8w = 4 : a8v <= 0 && a95() : ! function() {
			var a9C = cm.lJ();
			if (a9C % 40 == 14) {
				if (a8z) return !(a9C < a8z) && !(a9C < a8x + 535) && (a8z = a9C + 1071, aB.lk.ql()) ? (a99(), 1) : 0;
				(1 === en.ep || (bz.eN ? go.eW() : ef.eg[eh[0]]) >= io.dp(96 * bz.rE, 100)) && (a8z = a9C + 535)
			}
			return
		}() && 0 <= a8y && (iU.qY(250, L(230, [ef.gj[a8y]]), 673, a8y, dK.aL, dK.aI, -1, !0), a99())
	}, this.a9G = function() {
		this.v2 && a8r[0] < a8s[0] && a95()
	}, this.mZ = function(player, a9H) {
		var a9I = L(a9H ? 231 : 232, [ef.gj[player]]),
			a9I = (iU.qY(450, a9I, 257, player, a9H ? dK.ad : dK.at, dK.aI, -1, !0), a8t.push(player), a8u = !0, bz.wx ? Math.max(a8s[0], a8s[1]) : ef.eg[player]),
			a9I = Math.max(a9I, 1);
		a9H ? a8r[0] += a9I : a8r[1] += a9I, player === bz.cr && (a8q = a9H ? 1 : -1)
	}, this.fC = function() {
		var e3;
		this.v2 && (e3 = a09(), fD.drawImage(canvas, eT.eJ - this.eJ - dk.gap, e3))
	}, this.cx = function(player) {
		if (0 !== a8v) return !1;
		if (!aB.lk.ll(1)) return !1;
		if (!aB.lk.lm(player)) return !1;
		if (10 <= t1[player] && !aB.lk.r8(player, 9)) return !1;
		if (!bz.wx) {
			player = cm.lJ();
			if (player < a8x + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.mY = function(es) {
		if (!aB.lk.ll(1)) return !1;
		if (!aB.lk.lm(es)) return !1;
		if (!this.v2) return !1;
		for (var c8 = a8t.length - 1; 0 <= c8; c8--)
			if (a8t[c8] === es) return !1;
		return !0
	}, this.d0 = function(player) {
		a8y = player
	}
}

function a3e() {
	var a9K = 0,
		a9L = new Uint16Array(64);

	function a9O(a9R) {
		a9K -= 2;
		for (var c8 = a9R; c8 < a9K; c8 += 2) a9L[c8] = a9L[c8 + 2], a9L[c8 + 1] = a9L[c8 + 3]
	}
	this.g = function() {
		a9K = 0
	}, this.dI = function() {
		var c8, lt, ls;
		if (0 !== a9K)
			if (0 === ef.fo[bz.cr]) a9K = 0;
			else if (0 === ly.a9M(bz.cr)) a9K = 0;
		else
			for (c8 = a9K - 2; 0 <= c8; c8 -= 2)(lt = a9L[c8]) < bz.fi && 0 === ef.fo[lt] ? a9O(c8) : (ls = a9L[c8 + 1], (lt >= bz.fi && nI.a9P(bz.cr) || lt < bz.fi && nI.a9Q(bz.cr, lt)) && (cs.ct.gB(ls, lt), a9O(c8)))
	}, this.a9S = function(lt, ls) {
		! function(lt, ls) {
			for (var c8 = 0; c8 < a9K; c8 += 2)
				if (a9L[c8] === lt) return a9L[c8 + 1] = Math.min(a9L[c8 + 1] + ls, 1023), 1;
			return
		}(lt, ls) && 64 !== a9K && (a9L[a9K] = lt, a9L[a9K + 1] = ls, a9K += 2)
	}
}

function a3D() {
	var a9Y, a9Z, a9U = "",
		a9V = 0,
		a9W = 0,
		a9X = -1,
		a7f = ["Team", "Zombie", "BR", "1v1"];

	function a9a() {
		for (var ee = new Date, pv = ee.getUTCMinutes(), ee = ee.getUTCSeconds(), a9b = [], a9c = 0, c8 = 0; c8 < 6; c8++) a9b.push(a9c), a9b.push(a9c + 2), a9b.push(a9c + 5), a9b.push(a9c + 7), a9c += 10;
		for (var cI = a9b.length, c8 = 1; c8 < cI && !(pv < a9b[c8]); c8++);
		c8 %= cI;
		ee = (a9b[0] = 60) * (a9b[c8] - pv) - ee;
		return ee !== a9X && (a9U = a7f[c8 % 4] + " " + a9Z + ": " + a9e(Math.floor(ee / 60)) + ":" + a9e(ee % 60), a9X = ee, a9V = gc.measureText(a9U, a9Y), a9V += Math.floor(.4 * a9W), 1)
	}

	function a9e(wO) {
		return wO < 10 ? "0" + wO : String(wO)
	}
	this.g = function() {
		a9Z = L(233)
	}, this.resize = function() {
		a9V = Math.floor((cZ.cb.eR() ? .53 : .36) * eT.eU), a9W = Math.floor(.065 * a9V), a9Y = aB.dE.f9(1, Math.floor(.9 * a9W)), a9X += 1e3, a9a()
	}, this.dI = function() {
		a9a() && (cm.cn = !0)
	}, this.fC = function(e3) {
		fD.lineWidth = 1 + Math.floor(a9W / 15), fD.translate(eT.eJ - a9W, e3 + a9V), fD.rotate(-Math.PI / 2), fD.fillStyle = dK.aL, fD.fillRect(0, 0, a9V, a9W), fD.strokeStyle = dK.aC, fD.strokeRect(0, 0, a9V, a9W + 10), fD.fillStyle = dK.aC, fD
			.font = a9Y, aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 1), fD.fillText(a9U, Math.floor(a9V / 2), Math.floor(.59 * a9W)), fD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a9f(wp) {
	var a9g = document.createElement("div"),
		ny = document.createElement("div"),
		a9h = [];

	function ws() {
		h6.h7() || (this.style.backgroundColor = aB.color.wt(dK.aH, 50))
	}

	function wr() {
		this.style.backgroundColor = dK.aH
	}
	this.dc = function(a9j, uL) {
			a9h[2].textContent = a9j + 1 + " / " + uL
		}, this.show = function(hm) {
			hm = bf.k7.oK(hm, bf.k7.oL(hm)), ny.appendChild(bf.oQ.transform(hm)), document.body.appendChild(a9g)
		}, this.resize = function() {
			var gP = aB.dE.dm(.03, .5);
			a9g.style.width = 10 * gP + "px", a9g.style.font = aB.dE.f9(1, .75 * gP), aB.dE.lg(a9g, 4), ny.style.top = gP + "px", ny.style.font = aB.dE.f9(0, .55 * gP), aB.dE.lg(ny, 2), a9g.style.height = gP + ny.offsetHeight + "px";
			for (var c8 = 0; c8 < 3; c8++) aB.dE.lg(a9h[c8], 6), a9h[[0, 1, 3][c8]].style.width = 2 * gP + "px";
			for (c8 = 0; c8 < 4; c8++) a9h[c8].style.height = gP + "px", aB.dE.lg(a9h[c8], 2);
			a9h[2].style.width = 4 * gP + "px", a9h[1].style.left = 2 * gP + "px", a9h[2].style.left = 4 * gP + "px", a9h[3].style.left = 8 * gP + "px"
		}, this.gt = function() {
			for (var c8 = 0; c8 < 4; c8++) a9h[c8].onclick = null, a9h[c8].onmouseover = null, a9h[c8].onmouseout = null;
			br.removeChild(document.body, a9g), a9g = ny = a9h = null
		}, a9g.style.position = "absolute", a9g.style.color = dK.aL, a9g.style.zIndex = "3", a9g.style.right = "0", a9g.style.top = "0", ny.style.position = "absolute", ny.style.height = "auto", ny.style.color = dK.aL, ny.style.backgroundColor = dK
		.aH, ny.style.left = "0", ny.style.width = "100%", ny.style.overflowWrap = "break-word", a9g.appendChild(ny);
	for (var c8 = 0; c8 < 4; c8++) a9h[c8] = document.createElement("div"), a9h[c8].style.position = "absolute", a9h[c8].style.backgroundColor = dK.aH, a9h[c8].style.color = dK.aL, a9h[c8].style.top = "0", a9h[c8].style.display = "flex", a9h[c8]
		.style.justifyContent = "center", a9h[c8].style.alignItems = "center", a9h[c8].style.userSelect = "none", a9h[c8].style.outline = "none", a9h[c8].style.font = "inherit", 2 !== (a9h[c8].a9i = c8) && (a9h[c8].onclick = wp, a9h[c8].onmouseover =
			ws, a9h[c8].onmouseout = wr), a9g.appendChild(a9h[c8]);
	a9h[0].textContent = "◀", a9h[1].textContent = "▶", a9h[3].textContent = "✖"
}

function a3s() {
	function a9l() {
		8 === bz.qS && 1 === bz.gb && qM.a9D.a9F()
	}

	function a9k(player) {
		bz.k2 ? (xv.pz(player), en.xu(), bz.wx && bz.lr.dI()) : a2l.uB(player)
	}
	this.cu = function(player) {
		iU.qZ(player, player === bz.cr ? 21 : 22), a9k(player), a9l()
	}, this.gI = function(player) {
		1 === bz.gb && 0 !== ef.fo[player] && 2 !== ef.jO[player] && a9k(player), bz.a71--, bz.qG--, iU.qZ(player, 4), aB.lk.ll(2) && iS.sb(!0), a9l()
	}
}

function a0q() {
	this.hj = function(dZ) {
		for (var cI = dZ.length, eJ = hQ, c8 = 0; c8 < cI; c8++) eJ.hS(16, dZ.charCodeAt(c8))
	}
}

function a9m() {
	var a9n = [],
		a9o = [],
		a9p = [];

	function a9r(hm) {
		for (var oO = hm.oO, a9q = [];;) {
			var aA = function a9v(oO, position) {
				position = oO.indexOf("@", position);
				if (position < 0) return -1;
				var dZ = oO.substring(position + 1, position + 6);
				if (5 !== dZ.length) return a9v(oO, position + 1);
				if (aB.oB.startsWith(dZ, "room")) return a9v(oO, position + 1);
				var aAE = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aAE.test(dZ)) return a9v(oO, position + 1);
				aAE = oO.substring(position + 6, position + 7);
				if (1 !== aAE.length) return position;
				dZ = new RegExp("^[ :!.]+$");
				if (!dZ.test(aAE)) return a9v(oO, position + 1);
				return position
			}(oO, 0);
			if (-1 === aA) {
				a9q.push(a9w(oO, hm));
				break
			}
			0 === aA ? a9q.push(a9x(oO.substring(1, 6), hm, aA)) : (a9q.push(a9w(oO.substring(0, aA), hm)), a9q.push(a9x(oO.substring(aA + 1, aA + 6), hm, aA))), oO = oO.substring(aA + 6)
		}
		return a9q
	}

	function a9x(dZ, hm, aA) {
		var a9y = function(dZ) {
				var c9 = j8.wb.a8E(dZ, 5),
					a9y = bf.bg.aAC(c9);
				if (a9y) {
					for (a9n.push(a9y); 75 < a9n.length;) a9n.shift();
					return a9y
				}
				for (var bp = bf.bg.bp, c8 = bp.length - 1; 0 <= c8; c8--)
					if (a9y = bp[c8], c9 === a9y.c9) return a9n.push(a9y), a9y;
				for (c8 = a9n.length - 1; 0 <= c8; c8--)
					if (a9y = a9n[c8], c9 === a9y.c9) return a9n.push(a9y), a9y;
				return bf.bg.aAD(c9, dZ, 1, 999999, 999999, 0, 0, 0, 0)
			}(dZ),
			dZ = (0 === aA && 0 === hm.a9s.id && hm.oP && (hm.fontSize = bf.k7.aA0(a9y.aA1, a9y.rA), hm.a9u = bf.k7.aA2(a9y.rA)), document.createElement("span"));
		return dZ.textContent = function(a9y, hm, aA) {
				if (a9y.aA7) return a9y.aA7--, aA = 2 === hm.a9s.id || (3 === hm.a9s.id || 4 === hm.a9s.id) && 0 !== aA, a9y.username + (aA ? " (" + a9y.aA9 + ")" : "");
				if (hm.a9s.aAA) return "Redacted " + hc.wb.sV(a9y.c9, 2);
				return a9y.username
			}(a9y, hm, aA), dZ.style.display = "inline-block", dZ.style.color = bf.k7.aA4(a9y.aA1), 11 === a9y.aA1 && (dZ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), dZ.style.cursor =
			"pointer", dZ.style.margin = "0", dZ.style.font = "inherit", dZ.style.minWidth = dZ.style.minHeight = "1em", bf.k7.aA5(a9y) && (dZ.style.textDecoration = "underline"), a9y.wd && (dZ.style.textDecorationLine = "underline", dZ.style
				.textDecorationStyle = "dotted"), bf.k7.aA2(a9y.rA) && (dZ.style.fontWeight = "bold"), dZ.onclick = function(a6) {
				bf.pF.pG(a6, a9y)
			}, h6.h7() || (dZ.onmouseover = function(a6) {
				bf.or.aA6(a6.target, a9y)
			}), a9o.push(dZ), dZ
	}

	function a9w(oO, hm) {
		var oA = document.createElement("span");
		return oA.textContent = oO, oA.style.color = hm.aAB, oA.style.margin = "0", oA.style.font = "inherit", oA
	}

	function aAI(a9y, aAH, c9) {
		c9 !== a9y.c9 || a9y.aA9 || (a9y.aA9 = a9y.username, a9y.username = aAH)
	}
	this.gt = function() {
		for (var c8 = 0; c8 < a9o.length; c8++) a9o[c8].onclick = a9o[c8].onmouseover = null;
		a9p = a9o = null
	}, this.transform = function(hm) {
		for (var dh = document.createElement("div"), a9q = a9r(hm), c8 = 0; c8 < a9q.length; c8++) dh.appendChild(a9q[c8]);
		0 === hm.a9s.id && (dh.vx143 = hm.a9s, a9p.push(dh)), dh.style.margin = "0.6em 0.6em", hm.oP && (dh.style.marginLeft = dh.style.marginRight = "inherit"), dh.style.font = "inherit";
		var a9t = 0 < hm.a9s.id;
		return hm.a9u && (dh.style.fontWeight = "bold"), a9t && (dh.style.paddingLeft = "0.7em"), a9t && (dh.style.fontStyle = "italic"), dh.style.fontSize = hm.fontSize.toFixed(2) + "em", dh
	}, this.uO = function(uM) {
		if (uM && (2 === uM.id && 1 === uM.uQ || 3 === uM.id && 2 === uM.uQ)) {
			var c9 = 3 === uM.id ? uM.target : uM.c9;
			if (!bf.bg.aAC(c9)) {
				for (var aAH = "Redacted " + hc.wb.sV(c9, 2), bp = bf.bg.bp, c8 = bp.length - 1; 0 <= c8; c8--) aAI(bp[c8], aAH, c9);
				for (c8 = a9n.length - 1; 0 <= c8; c8--) aAI(a9n[c8], aAH, c9)
			}
		}
	}, this.aAJ = function(c9) {
		for (var aAK = a9p, aAL = "@" + hc.wb.sV(c9, 5), c8 = aAK.length - 1; 0 <= c8; c8--) {
			var by = aAK[c8];
			if (by.vx143.c9 === c9 || 0 <= by.vx143.oO.indexOf(aAL)) {
				for (; by.firstChild;) br.removeChild(by, by.firstChild);
				for (var a9q = a9r(bf.k7.oK(by.vx143, bf.k7.oL(by.vx143))), dq = 0; dq < a9q.length; dq++) by.appendChild(a9q[dq]);
				aAK.splice(c8, 1)
			}
		}
	}, this.aAM = function(c9) {
		for (var aAK = a9p, c8 = aAK.length - 1; 0 <= c8; c8--) {
			var by = aAK[c8];
			if (by.vx143.c9 === c9) {
				for (; by.firstChild;) br.removeChild(by, by.firstChild);
				by.vx143.oO = "[Redacted Message]";
				for (var a9q = a9r(bf.k7.oK(by.vx143, bf.k7.oL(by.vx143))), dq = 0; dq < a9q.length; dq++) by.appendChild(a9q[dq]);
				aAK.splice(c8, 1)
			}
		}
	}
}

function aAN() {
	this.aAO = function() {
		for (var cI = bz.fj, a4Q = qM.result.a4Q, dU = a4Q.length, jb = (hQ.cB(17 + 16 * cI + 33 * dU), hQ.hS(1, 1), hQ.hS(4, 12), hQ.hS(10, dU), hQ.hS(1, +(2 === bz.a4U)), hQ.hS(1, bz.a7r % 2), ef.jb), c8 = 0; c8 < cI; c8++) hQ.hS(16, jb[c8]);
		for (var eg = ef.eg, c8 = 0; c8 < dU; c8++) {
			var es = a4Q[c8];
			hQ.hS(9, es), hQ.hS(24, eg[es])
		}
		y.z.send(y.z.hq, hQ.s)
	}
}

function aAP() {
	this.ky = function(dt) {
		return [dt >> 12 & 63, dt >> 6 & 63, 63 & dt]
	}, this.aAQ = function(dt) {
		for (var dT = this.ky(dt), c8 = 0; c8 < 3; c8++) dT[c8] = ~~(4.05 * dT[c8]);
		return dT
	}, this.zn = function(dt) {
		dt = this.aAQ(dt);
		return aB.color.aD(dt[0], dt[1], dt[2])
	}, this.aAR = function(dT) {
		for (var c8 = 0; c8 < 3; c8++) dT[c8] = ~~(dT[c8] / 4.04);
		return (dT[0] << 12) + (dT[1] << 6) + dT[2]
	}, this.aD = function(ey, z2, dr) {
		return "rgb(" + ey + "," + z2 + "," + dr + ")"
	}, this.aF = function(ey, z2, dr, dq) {
		return "rgba(" + ey + "," + z2 + "," + dr + "," + dq.toFixed(3) + ")"
	}, this.a7V = function(aA) {
		for (var dT = aA.split("(")[1].split(","), a28 = er.a28, c8 = 0; c8 < 3; c8++) a28[c8] = parseInt(dT[c8]);
		return 4 === dT.length ? a28[3] = 255 * parseFloat(dT[3].slice(0, -1)) : a28[3] = 255, a28
	}, this.wt = function(aAS, by) {
		for (var dT = aAS.slice(aAS.indexOf("(") + 1, aAS.indexOf(")")).split(","), a28 = er.a28, c8 = 0; c8 < 3; c8++) a28[c8] = io.du(parseInt(dT[c8].trim(), 10) + by, 0, 255);
		return 3 === dT.length ? this.aD(a28[0], a28[1], a28[2]) : (aAS = parseFloat(dT[3].trim()), this.aF(a28[0], a28[1], a28[2], aAS = 0 === aAS ? .3 : aAS))
	}, this.aAT = function(aAU, aAV) {
		for (var iE = 0, c8 = 0; c8 < 3; c8++) iE += Math.abs(aAV[c8] - aAU[c8]);
		if (!(240 <= iE))
			for (c8 = 0; c8 < 3; c8++) aAV[c8] = aAU[c8] + (aAU[c8] < 128 ? 80 : -80)
	}, this.aAW = function(dT) {
		for (var dZ = "#", c8 = 0; c8 < 3; c8++) {
			var ey = dT[c8].toString(16);
			dZ += 1 === ey.length ? "0" + ey : ey
		}
		return dZ
	}, this.aAX = function(dZ) {
		var ey, z2;
		return dZ.length < 7 ? dK.aC : (ey = parseInt(dZ.slice(1, 3), 16), z2 = parseInt(dZ.slice(3, 5), 16), dZ = parseInt(dZ.slice(5, 7), 16), this.aD(ey, z2, dZ))
	}
}

function a3y() {
	this.hr = 1756;
	this.rVersion = 24, this.x = 0, this.g = function() {
		this.a1 = 2;
		this.a4r = "2.16.15", this.ca = "8 Aug 2026 [" + this.a4r + "]";
		var aAc = window.location.hostname.toLowerCase();
		this.hs = !0, this.aAd = 0 <= aAc.indexOf("game.territorial.io"), this.ht = function() {
			try {
				return window.self !== window.top
			} catch (a6) {
				return !0
			}
		}(), this.kv = (new Date).getTime() % 1048576
	}, this.a4N = 0
}

function aAf() {
	this.aAg = function() {
		for (var cI = en.ep, wG = en.em, a4Q = [], c8 = 0; c8 < cI; c8++) {
			var es = wG[c8];
			aB.lk.qo(es) && a4Q.push(es)
		}
		return a4Q
	}, this.aAh = function() {
		if (0 === eb.ec[bz.a7s]) return this.aAi();
		go.ej(bz.a7s);
		for (var a4Q = [], cI = er.et[0], eq = er.eq, c8 = 0; c8 < cI; c8++) {
			var es = eq[c8];
			aB.lk.qo(es) && a4Q.push(es)
		}
		return a4Q
	}, this.aAi = function() {
		var es = eh[0];
		return aB.lk.qo(es) ? [es] : []
	}, this.aAj = function(a4Q) {
		for (var cI = a4Q.length, ee = 0, eg = ef.eg, c8 = 0; c8 < cI; c8++) ee += eg[a4Q[c8]];
		return ee
	}
}

function aAk() {
	this.gh = function(player, k9) {
		a2b.aAl(player, kA.kE(k9), kA.kG(k9)) && (cm.cn = !0), bz.wx && this.dI()
	}, this.dI = function() {
		bz.k2 = !1;
		for (var c8 = 0; c8 < bz.fj; c8++) 0 !== ef.fo[c8] && 0 === ef.eg[c8] && a2b.aAm(c8);
		0 !== ef.fo[bz.cr] ? (ch.qa[7] = ef.eg[bz.cr], ch.qa[8] = ef.g5[bz.cr], gp.aAn(), iS.aAo(), bz.co || kH.jz(ef.jP[bz.cr] - 5, ef.jQ[bz.cr] - 5, ef.jR[bz.cr] + 5, ef.jS[bz.cr] + 5), a2i.g()) : iZ.show(!1, !1, !1, !0), iU.a6P(18), iY.sY(),
			iY.sb(!0), a2q.z.aAp(), iX.u(), bz.lr = null, kg.aAq = !0, kg.aAr(), bz.wx && cZ.cb.setState(1)
	}
}

function aAs() {
	this.gX = cm.gX, this.h = 0, this.xx = 0, this.lI = 0, this.aAt = null, this.aAu = 7, this.aAv = 0, this.g = function() {
		this.lI = 0, this.aAt = [], this.h = 0, this.xx = 0
	}, this.aAw = function(s) {
		if (bz.k2) this.aAx(s);
		else if (this.aAt.push(s), 2 === bz.gb) {
			for (var c8 = 0; c8 < this.aAt.length; c8++) cs.aAy.dI(this.aAt[c8]);
			this.aAt = []
		}
	}, this.aAx = function(s) {
		2 !== bz.gb && (cs.aAy.dI(s), lo.dI(), iS.aAx(this.lI), this.lI === bz.aAz ? (bz.lr.dI(), this.lI = 0, this.h = 0, this.xx = 0, this.gX = cm.gX) : (this.lI++, iY.sY(), iY.sb(!0), kg.render()))
	}, this.dI = function() {
		eT.dI(), bz.k2 ? (cm.cn = iS.aAx(-1) || cm.cn, aB0()) : (0 !== this.h || cm.gX >= this.gX && (this.gX += cm.aB1 * Math.floor(1 + (cm.gX - this.gX) / cm.aB1), 2 === bz.gb ? aB2() : this.aB3(), this.h++, 27 < cm.gX - this.aAv)) && this
		.aB4(), aB5(), cm.cn && (cm.cn = !1, aB6()), this.aAv = cm.gX
	}, this.aB4 = function() {
		cm.cn = !0, aB7(), this.h = 0
	}, this.aB3 = function() {
		var aB8, c8;
		if (this.xx !== 7 * this.lI) aB9(), kg.render();
		else {
			aB8 = !1;
			loop: for (; this.aBA() && (aB8 = !0, aB9(), 2 !== bz.gb) && 0 < this.aAt.length;)
				for (c8 = this.aAu - 2; 0 <= c8; c8--)
					if (aB9(), 2 === bz.gb) break loop;
			aB8 ? kg.render() : (aB2(), kg.aAr())
		}
	}, this.aBA = function() {
		return 0 < this.aAt.length && (this.lI++, cs.aAy.dI(this.aAt[0]), this.aAt.shift(), !0)
	}
}

function a30() {
	this.aBB = "https://territorial.io/changelog", this.dB = "https://territorial.io/terms", this.dC = "https://territorial.io/privacy", this.aBC = "https://territorial.io/tutorial", this.aBD = "https://territorial.io/players", this.aBE =
		"https://territorial.io/clans", this.aBF = "https://territorial.io/clan-results", this.dA = "https://patreon.com/c/territorial", this.d8 = "https://play.google.com/store/apps/details?id=territorial.io", this.d9 =
		"https://apps.apple.com/app/id1581110913", this.aBG = "https://discord.gg/pthqvpTXmh", this.aBH = "https://www.instagram.com/davidtschacher/", this.aBI =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a8U() {
	function aBY(e2, cI, e3, aBM, aBS, vp, player) {
		if (!(e3 < 1 || aBS < e3))
			for (var c8 = 0; c8 <= cI; c8++) {
				var mx = kA.a0Z(e2, e3);
				if (g6.k7.aBh(mx) && !aB.pr.has(aBM, n0.vo(mx)) && n0.a2F(mx, player)) return mx >> 2;
				e2 += vp
			}
		return -1
	}

	function aBc(e3, cI, e2, aBM, aBR, vp, player) {
		if (!(e2 < 1 || aBR < e2)) {
			cI = Math.max(cI, 0);
			for (var c8 = 0; c8 <= cI; c8++) {
				var mx = kA.a0Z(e2, e3);
				if (g6.k7.aBh(mx) && !aB.pr.has(aBM, n0.vo(mx)) && n0.a2F(mx, player)) return mx >> 2;
				e3 += vp
			}
		}
		return -1
	}

	function aBg(a0U, a0V, aBK) {
		return -1 !== a0V && (-1 === a0U || kA.a0W(a0V, aBK) < kA.a0W(a0U, aBK)) ? a0V : a0U
	}
	this.aBJ = function(player, aBK) {
		if (g6.mH.mI(player))
			for (var aBL = kA.a0F(), aBM = [];;) {
				var aBN = function(aBK, aBL, aBM, player) {
					for (var rP = kA.kE(aBK), rS = kA.kG(aBK), aBR = c2.k0 - 2, aBS = c2.k1 - 2, aBT = -1, by = 0; by < aBL; by++) {
						var aBU = Math.max(rP - by, 1),
							aBV = Math.max(rS - by, 1),
							aBW = Math.min(rP + by, aBR),
							aBX = Math.min(rS + by, aBS),
							a0U = aBY(rP, aBW - rP, rS - by, aBM, aBS, 1, player),
							a0V = aBY(rP - 1, rP - aBU - 1, rS - by, aBM, aBS, -1, player),
							aBW = aBY(rP, aBW - rP, rS + by, aBM, aBS, 1, player),
							aBU = aBY(rP - 1, rP - aBU - 1, rS + by, aBM, aBS, -1, player),
							aBb = aBc(rS, aBX - rS - 1, rP - by, aBM, aBR, 1, player),
							aBd = aBc(rS - 1, rS - aBV - 2, rP - by, aBM, aBR, -1, player),
							aBX = aBc(rS, aBX - rS - 1, rP + by, aBM, aBR, 1, player),
							aBV = aBc(rS - 1, rS - aBV - 2, rP + by, aBM, aBR, -1, player);
						if (aBT = aBg(aBT, a0U, aBK), aBT = aBg(aBT, a0V, aBK), aBT = aBg(aBT, aBW, aBK), aBT = aBg(aBT, aBU, aBK), aBT = aBg(aBT, aBb, aBK), aBT = aBg(aBT, aBd, aBK), aBT = aBg(aBT, aBX, aBK), 0 <= (aBT = aBg(aBT, aBV,
							aBK)) && by * by >= kA.a0W(aBT, aBK)) return aBT
					}
					return -1
				}(aBK, aBL, aBM, player);
				if (-1 === aBN) break;
				var id = n0.vo(kA.rY(aBN));
				if (g6.k7.aBP(player, id)) return !! function(player, aBN, aBK) {
					for (var a0i = kA.a0k(aBN, aBK), c8 = 0; c8 < 4; c8++) {
						var k9 = kA.a0h(aBN, a0i);
						if (n0.a2G(kA.rY(k9), player)) return er.mG[6] = a0i, 1;
						a0i = (a0i + 1) % 4
					}
					return
				}(player, aBN, aBK) && (er.mG[7] = aBN, !0);
				aBM.push(id)
			}
		return !1
	}
}

function xa() {
	var aBi = 12e3;
	this.show = function(aBj) {
		return !aBj && !xy.xe() && (0 === cZ.id ? xy.xb.show() : !(cm.gX < aBi) && (aBj = 1 === cZ.id ? 72e4 : 108e4, aBi = cm.gX + aBj, 2 === w.a1) && cZ.cb.aBk(Math.floor(aBj)))
	}
}

function a3q() {
	this.dT = new Array(4), this.aBl = new Uint16Array(2), this.et = new Uint16Array(2), this.aBm = new Int32Array(2), this.mC = new Uint32Array(2), this.aBn = new Uint32Array(2), this.a28 = new Uint8Array(4), this.aBo = new Uint8Array(4), this.mg =
		new Uint32Array(4), this.aBp = new Uint32Array(5), this.m0 = new Uint32Array(8), this.mG = new Uint32Array(8), this.vq = new Uint16Array(16), this.eq = new Uint16Array(512), this.aBq = new Uint16Array(512), this.aBr = new Uint16Array(512),
		this.aBs = new Uint16Array(0), this.g = function() {
			var cI = c2.k0 * c2.k1;
			this.aBs.length !== cI && (this.aBs = new Uint16Array(cI))
		}, this.aBt = function(dT, dw) {
			return dT[0] = dw, dT
		}, this.aBu = function(dT, dw, dx) {
			return dT[0] = dw, dT[1] = dx, dT
		}, this.aBv = function(dT, dw, dx, dy) {
			return dT[0] = dw, dT[1] = dx, dT[2] = dy, dT
		}, this.aBw = function(dT, dw, dx, dy, aBx) {
			return dT[0] = dw, dT[1] = dx, dT[2] = dy, dT[3] = aBx, dT
		}
}

function aBy() {
	var aBz = [];

	function aC2(c9) {
		aBz.unshift(c9), d1.db.dc(161, aBz.join(";"))
	}

	function a9O(c9) {
		for (var aC4 = aBz, cI = aC4.length, c8 = 0; c8 < cI; c8++)
			if (aC4[c8] === c9) return aC4.splice(c8, 1), d1.db.dc(161, aC4.join(";")), 1
	}
	this.g = function() {
		var dZ = d1.d2.data[161].value;
		dZ.length && (aBz = dZ.split(";"))
	}, this.get = function() {
		return aBz
	}, __fx.followedAccounts.setSource(this.get), this.aC0 = function() {
		return {
			fb: __fx.followedAccounts.decorate(aBz),
			value: 0
		}
	}, this.wd = function(c9) {
		return aB.pr.has(aBz, c9)
	}, this.aC1 = function(c9) {
		return a9O(c9) ? 0 : (aC2(c9), 1)
	}, this.ew = function(c9) {
		a9O(c9) && aC2(c9)
	}, this.aC3 = function(h) {
		h < aBz.length && (aBz.splice(h, 1), d1.db.dc(161, aBz.join(";")))
	}
}

function aC5() {
	var fb = aC6(c2.c4);
	fb && aC7(fb[0], fb[1], fb[2], fb[3], fb[4])
}

function aC6(c4) {
	return 2 === c4 ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === c4 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === c4 ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === c4 ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === c4 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aC7(aC8, aC9, aCA, aCB, aCC) {
	for (var e2, e3, aCE, aCF, sh, aCH, a0O = aC8.length - 1, aCD = c2.k0 + c2.k1, cI = (aCD *= aCD, aCA.length), aCG = Array(cI), c8 = cI - 1; 0 <= c8; c8--) aCG[c8] = aCA[c8] * aCA[c8];
	var aCI = new Array(cI),
		aCJ = new Array(cI),
		aCK = new Array(cI),
		dt = a2g.a5d();
	if (void 0 === aCC)
		for (aCC = new Array(cI), c8 = cI - 1; 0 <= c8; c8--) aCC[c8] = 0;
	for (c8 = 1; c8 < cI; c8++) aCI[c8] = aCG[c8] - aCG[c8 - 1], aCJ[c8] = aCB[c8] - aCB[c8 - 1], aCK[c8] = aCC[c8] - aCC[c8 - 1];
	for (e2 = c2.k0 - 1; 0 <= e2; e2--)
		for (e3 = c2.k1 - 1; 0 <= e3; e3--) {
			for (aCE = aCD, c8 = a0O; 0 <= c8; c8--) aCE = (aCF = (e2 - aC8[c8]) * (e2 - aC8[c8]) + (e3 - aC9[c8]) * (e3 - aC9[c8])) < aCE ? aCF : aCE;
			for (sh = aCB[cI - 1], aCH = aCC[cI - 1], c8 = 1; c8 < cI; c8++)
				if (aCE < aCG[c8]) {
					sh = aCB[c8 - 1] + a29((aCE - aCG[c8 - 1]) * aCJ[c8], aCI[c8]), aCH = aCC[c8 - 1] + a29((aCE - aCG[c8 - 1]) * aCK[c8], aCI[c8]);
					break
				} aCL(c2.k0 * e3 + e2, sh, aCH, dt)
		}
}

function aCL(h, sh, aCH, dt) {
	sh < 500 ? dt[h] = io.dp(dt[h] * sh * 2, 1e3) : 500 < sh && (dt[h] += io.dp(2 * (1e4 - dt[h]) * (sh - 500), 1e3)), dt[h] += io.dp(aCH * (10 * sh - dt[h]), 1e3)
}

function a4C() {
	this.wa = 0, this.cH = null, this.bg = null, this.k7 = null, this.z = null, this.pF = null, this.or = null, this.message = null, this.pN = null, this.oQ = null, this.oj = null, this.lL = new bc, this.pK = 0, this.aCM = 0, this.g = function() {
		this.aCM = cm.gX, this.wa = j8.wb.a8E(d1.d2.data[105].value, 5), this.bg = new aCN, this.k7 = new aCO, this.z = new od, this.pF = new aCP, this.or = new aCQ, this.message = new aCR, this.pN = new aCS, this.oQ = new a9m, this.oj = new wT,
			this.z.g(), a2w.g(), this.pK = 1, cZ.cb.setState(1), cA.setState(0)
	}, this.gt = function() {
		this.oQ && this.oQ.gt(), this.cH = null, this.bg = null, this.k7 = null, this.z = null, this.pF = null, this.or = null, this.message = null, this.pN = null, this.oQ = null, this.oj = null, this.pK = 0, a2w.gt(), cZ.cb.setState(0)
	}
}

function a49() {
	function aCU(a6) {
		aCc(a6), br.cP(4, 5, new dD("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new cN("⬅️ " + L(14), function() {
				br.kl()
			}), new cN("🔄 Reload", function() {
				cZ.cb.a4w()
			}, dK.ai)]))
	}

	function aCa(a6) {
		aCc(a6), br.cP(4, 5, new dD(L(234), aCY(a6), !0))
	}

	function aCY(a6) {
		var dZ = " [" + a6 + "]";
		return 3249 === a6 || 1006 === a6 ? "No Internet / No Server Response / Server Restart" + dZ : 4527 === a6 ? "Player already in lobby" + dZ : 4577 === a6 ? "Your IP is banned." + dZ : 4530 === a6 ? "Lobby Timeout" + dZ : 4528 === a6 ?
			"Lobby Kick: Another login detected." + dZ : 4540 === a6 ? "You have been kicked." + dZ : 4495 === a6 ? "Account doesn't exist." : 4229 === a6 ? "Bad Internet / Unresponsive Client" + dZ : 4555 === a6 ? "This Account is blocked." + dZ :
			4580 === a6 ? "More Gold needed" + dZ : 4557 <= a6 && a6 <= 4560 || 4589 == a6 ? "Please try again later!" + dZ : "Unknown error" + dZ
	}

	function aCc(a6) {
		aCV(a6), br.z.a4v()
	}

	function aCV(a6) {
		4540 === a6 && y.z.pQ(a6);
		var qi = cA.cg();
		6 === qi ? y.z.pQ(a6) : bf.pK ? (br.cj(), bf.gt(), y.z.close(y.z.l0, 3256)) : 8 === qi && bz.aCe(!0)
	}
	this.a4s = [], this.aCT = function(cG, a6) {
		if (this.a4s.push(a6), 8 === br.bs && 0 === cG)
			if (4211 === a6) aCU(a6);
			else {
				if (bf.pK && (4495 === a6 || 4480 === a6) && y.z.l0 !== cG) return void br.kl();
				if (8 !== cA.cg() && aCV(), 4480 === a6) return d1.db.aCd(), void br.cP(4, 0, new dD(L(236), L(237), !0));
				var aCX = 0;
				br.hN() && 10 === br.hN().i && (aCX = br.hN().i), br.cP(4, aCX, new dD(L(234), aCY(a6), !0))
			}
		else {
			aCX = cA.cg();
			if (6 === aCX) {
				if (4211 === a6) return void aCU(a6);
				if (4215 !== a6 && 4516 !== a6 && 4527 !== a6 && 4533 !== a6 && 4528 !== a6 && !(4557 <= a6 && a6 <= 4560) && 4577 !== a6 && 4576 !== a6) return void iN.aCZ(cG)
			} else if (bf.pK) {
				if (cG !== y.z.l0) return
			} else {
				if (8 === aCX) return void(cG !== y.z.hq || bz.wx || 1 !== bz.gb || bz.co || iU.a6T(L(235, [a6])));
				if (!(4579 <= a6 && a6 <= 4589)) return
			}
			aCa(a6)
		}
	}, this.aCb = function(a6) {
		this.a4s.push(a6), 8 === cA.cg() ? bz.wx || 1 !== bz.gb || iU.a6T(L(235, [a6])) : aCa(a6)
	}, this.a4u = function() {
		this.a4s.push(3268), aCc(3268)
	}
}

function aCf() {
	var vu, xE, xF, fL;

	function pB() {
		xI(), 2 === bz.data.playerNamesType && 1 === aB.pr.a7F(bz.data.playerNamesData).length && (bz.data.playerNamesType = 0), 2 !== bz.data.playerNamesType && (bz.data.playerNamesData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		2 === bz.data.playerNamesType && aB.pr.aCg(xF.gY(), bz.data.playerNamesData, 20)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(238), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(239), L(240), L(106)],
			value: bz.data.playerNamesType
		}, function(h) {
			xI(), bz.data.playerNamesType = h, br.cP(23)
		})), fQ.fX(new zb), fQ.fX(new fe({
			value: bz.data.selectableName
		}, L(241), function(value) {
			bz.data.selectableName = value
		})), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ;
		2 === bz.data.playerNamesType && ((fQ = new fR).fS("Data"), xF = new xR(0, 1, 0, 1), bz.data.playerNamesData && bz.data.playerNamesData.length === bz.fi || (bz.data.playerNamesData = new Array(bz.fi), bz.data.playerNamesData.fill(
			"")), xF.xS(aB.oB.xT(bz.data.playerNamesData, 1, '"')), fQ.fX(xF), fL.push(fQ))
	}(fL), fL))
}

function a47() {
	this.a6G = function() {
		return cZ.cb.eR() ? 2 : 1
	}
}

function a3r() {
	this.z = new aCh, this.a8G = new aCi, this.g = function() {
		this.z.g()
	}, this.dI = function() {
		0 !== this.z.eI && this.z.eI--
	}
}

function a5q() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
			"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
		], this.tL = 13, this.aCj = this.emojis.length, this.zK = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.zK, this.aCk = 1024, this.zL = this.emojis.indexOf(
		"💀"), this.aCl = this.zL + 1, this.aCm = this.emojis.indexOf("🥇"), this.aCn = this.emojis.indexOf("😊"), this.tM = function(dt) {
			return dt < this.zK ? String.fromCharCode(55356, 56806 + io.dp(dt, 26), 55356, 56806 + dt % 26) : this.emojis[Math.min(dt - this.zK, this.aCj - 1)]
		}, this.aCo = function(dZ) {
			for (var cI = dZ.length - 2, dT = [], c8 = 0; c8 < cI; c8++) {
				var tX = dZ.charCodeAt(c8) - 56806,
					tY = dZ.charCodeAt(c8 + 2) - 56806;
				0 <= tX && tX < 26 && 0 <= tY && tY < 26 && (dT.push(26 * tX + tY), c8 += 3)
			}
			return dT
		}, this.se = function(dt) {
			return dt < this.zK
		}, this.tI = function(dt) {
			return dt >= 1024 - this.tL
		}, this.tF = function(dt) {
			return dt >= this.zK && dt < this.zK + this.aCl
		}
}

function xR(aCp, aCq, aCr, aCs) {
	var aCt = document.createElement("textarea"),
		aCu = (this.a6 = aCt, !0);

	function aCx() {
		aCt.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aCq && aB.dE.lg(aCt, 5)
		}, this.xS = function(fB) {
			aCt.value = fB
		}, this.gY = function() {
			return aCt.value
		}, this.aCv = function() {
			aCt.select()
		}, this.clear = function() {
			aCt.value = ""
		}, this.aCw = function() {
			aCu && navigator.clipboard ? (aCt.select(), navigator.clipboard.writeText(aCt.value).catch(function() {
				aCu = !1, aCx()
			})) : aCx()
		}, aCt.setAttribute("id", "textArea" + br.z.a5J++), aCt.setAttribute("autocomplete", "off"), aCp && aCt.setAttribute("placeholder", aCp), aCt.style.top = "0", aCt.style.left = "0", aCt.style.width = "100%", aCt.style.height = "100%", aCt
		.style.userSelect = "none", aCt.style.outline = "none", aCt.style.resize = "none", aCt.style.border = "none", aCt.style.color = dK.aL, aCt.style.backgroundColor = dK.aE, aCs ? (aCt.style.fontSize = "1em", aCt.rows = 6, aCt.style.padding =
			"0.25em") : (aCt.style.padding = "0.45em", aCt.style.fontSize = "1.2em"), aCr && aCt.addEventListener("input", function(a6) {
			aCr(a6)
		}), aCt.addEventListener("focus", function() {
			eT.i6++
		}), aCt.addEventListener("blur", function() {
			eT.i6--
		})
}

function a3P() {
	var aCy, canvas, xU, aCz;

	function aD4(h, name, aD5, dZ) {
		xU[h] = name, canvas[h] = new Image, canvas[h].onload = function() {
			! function(h, aD5) {
				var ir, is = null;
				7 === aD5 ? ir = aB.zy.iw : 8 === aD5 ? (ir = aB.zy.iz, is = .1) : 3 === aD5 ? (ir = aB.zy.ix, is = .06) : 5 === aD5 ? ir = aB.zy.j0 : 6 === aD5 ? ir = aB.zy.iu : 4 === aD5 && (ir = aB.zy.j1);
				canvas[h] = aB.zy.iq(canvas[h], ir, is)
			}(h, aD5), aD7()
		}, canvas[h].onerror = function(a6) {
			console.error("Error loading image at index", h, "Error:", a6), aD7()
		}, canvas[h].src = "data:image/png;base64," + dZ
	}

	function aD7() {
		aCy--, aD1()
	}

	function aD1() {
		0 === aCy && (aCy = -1, aD3(), cm.cn = !0, canvas[7] = aCz, canvas[8] = aCz, canvas[9] = aCz, canvas[10] = aCz, 5 === br.bs) && br.hN().zh.resize()
	}

	function aD3() {
		iX.aD9(), iM.aDA([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== cZ.id, 1 !== cZ.id, !0, !0, !0]), sd.iv = new a5r, sd.iv.g(), cw.i7()
	}
	this.g = function() {
		if (void 0 === canvas) {
			aCy = 23, canvas = new Array(aCy), xU = new Array(aCy), (aCz = document.createElement("canvas")).width = 1;
			for (var c8 = aCy - (aCz.height = 1); 0 <= c8; c8--) canvas[c8] = aCz;
			aD3(), aD4(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aD4(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aD4(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD4(3, "orders", 6,
					"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"
					), aD4(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aD4(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aD4(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aD4(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD4(8,
					"googleplay", 3,
					"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"
					), aD4(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aD4(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD4(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD4(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD4(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD4(14, "bestPlayer", 5,
					"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"
					), aD4(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aD4(16, "apple", 3,
					"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"
					), aD4(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aD4(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aD4(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aD4(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aD4(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aD4(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(h) {
		return canvas[h]
	}, this.lO = function(name) {
		for (var c8 = xU.length - 1; 0 <= c8; c8--)
			if (xU[c8] === name) return canvas[c8];
		return aCz
	}, this.iI = function() {
		return aCy <= 0
	}, this.zk = function() {
		aCy = 0, aD1()
	}
}

function aDB() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aDC() {
	function aDD() {
		if (2 === bz.gb) return 1;
		cw.a9G(), bz.gb = 2, bz.qG = bz.a71
	}

	function aDE() {
		qM.aDF.pO(), iZ.show(1 === bz.a4e, !1, 2 === bz.a4e), qM.result.pO(), qM.qN.dI(), qM.aDG.dI(), qM.aDG.aDH(), iU.a6z(!0), iU.ta(247), iU.ta(956), iU.ta(957), iQ.sb(!0), iS.sb(!0), cw.sb(), iV.aDI(), bz.co && cm.aDJ.aDK(), cm.cn = !0, kg.aDL(),
			cZ.cb.setState(0)
	}
	this.a9E = function() {
		aDD() || (bz.a4U = 2, aDE())
	}, this.a9F = function() {
		aDD() || (bz.a4U = 1, aDE())
	}
}

function fd(aDM, xW) {
	this.tt = [];
	var aDN = this.tt;

	function click() {
		for (var c8 = 0; c8 < aDN.length; c8++) aDN[c8].textContent = aDN[c8].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var h = parseInt(this.name);
		void 0 !== aDM.h && d1.db.dc(aDM.h, h), xW && xW(h)
	}
	for (var aDO, cI = aDM.fb.length, c8 = 0; c8 < cI; c8++)(aDO = document.createElement("p")).textContent = "⚪ " + aDM.fb[c8], aDO.style.margin = "0", aDO.name = "" + c8, aDO.style.cursor = "pointer", aDO.style.fontSize = "1em", aDO
		.addEventListener("click", click), aDN.push(aDO);
	aDN[aDM.value].textContent = aDN[aDM.value].textContent.replace("⚪", "🟢")
}

function aDP() {
	var aDQ = null,
		aDR = 0,
		aDS = 0;

	function aDU() {
		var dh;
		window.turnstile && (aDR = 1, null !== aDQ ? window.turnstile.reset(aDQ) : (dh = document.createElement("div"), document.body.appendChild(dh), aDQ = window.turnstile.render(dh, {
			sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
			action: "join_game",
			appearance: "interaction-only",
			callback: function(ha) {
				aDS = cm.gX, aDR = 0,
					function(ha) {
						y.kw.hZ(ha)
					}(ha)
			},
			"expired-callback": function() {
				aDR = 0
			}
		})))
	}
	this.g = function() {
		var aDT = document.createElement("script");
		aDT.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aDT.async = !0, aDT.onload = function() {
			aDU()
		}, document.head.appendChild(aDT)
	}, this.aDV = function() {
		!aDR && aDS + 29e4 < cm.gX && aDU()
	}
}

function aDX() {
	this.dc = function(h, value) {
		2 !== d1.d2.data[h].type && (value = Math.floor(value)), d1.d2.data[h].value !== value && (d1.d2.oZ(h, value), 0 === h ? (br.cj(), hv.g(), br.cP(2)) : 1 === h ? eT.iD(1) : 2 === h ? eT.iD(0) : 5 === h && (aB.dE.aDY(), eT.iD(0)))
	}, this.xh = function() {
		for (var data = d1.d2.data, c8 = 0; c8 < 100; c8++) data[c8] && d1.d2.oZ(c8, data[c8].oc);
		aB.dE.aDY(), eT.iD(1)
	}, this.aDZ = function() {
		for (var data = d1.d2.data, c8 = 0; c8 < data.length; c8++) data[c8] && d1.d2.dc(c8, data[c8].oc)
	}, this.aCd = function() {
		for (var dr = d1.d2, c8 = 128; c8 < 135; c8++) dr.oZ(c8, dr.data[c8].oc)
	}, this.yo = function(data) {
		d1.db.dc(109, data.y5), d1.db.dc(107, data.y6), d1.db.dc(108, data.y7), d1.db.dc(112, data.y8), d1.db.dc(111, data.y9), d1.db.dc(113, data.yA), d1.db.dc(135, data.yB), d1.db.dc(136, data.yC), d1.db.dc(137, data.yD), d1.db.dc(138, data
			.yE), d1.db.dc(139, data.yF), d1.db.dc(141, data.yG), d1.db.dc(142, data.yH), d1.db.dc(143, data.yI), d1.db.dc(144, data.yJ)
	}
}

function aDa() {
	var vu, xE, fL;

	function aDj() {
		for (var colors = new Array(11), c8 = 0; c8 < 11; c8++) {
			var dT = d1.d2.data[163 + c8].value.split(",");
			colors[c8] = new Uint8Array(3);
			for (var dq = 0; dq < 3; dq++) dq < dT.length && (colors[c8][dq] = Number(dT[dq]))
		}
		return colors
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(6), [new cN("⬅️ " + L(14), function() {
		br.kl()
	})]), xE = new fJ(vu.cf, ((fL = []).push(function() {
		var fQ = new fR;
		return fQ.fS(L(242)), fQ.kn(y.z.dG("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", fQ.kn("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), fQ
	}()), fL.push(function() {
		var fQ = new fR,
			fB = (fQ.fS(L(243)), d1.d2.data[174].value),
			tp = fQ.fT(fB.length + " / 180"),
			aDh = (tp.style.textAlign = "center", new xR(0, 1, function(a6) {
				var a6 = a6.target.value,
					el = a6.length;
				tp.textContent = el + " / 180", el <= 180 && d1.db.dc(174, a6)
			}));
		return aDh.a6.rows = 6, aDh.a6.style.fontSize = "1em", aDh.xS(fB), fQ.fX(aDh), fQ
	}()), fL.push(function() {
		var fQ = new fR;
		fQ.fS(L(103));
		for (var c8 = 0; c8 < 11; c8++) {
			var a0O = fQ.fX(new fW(d1.d2.data[163 + c8]));
			c8 && (a0O.a6.style.marginTop = "0.6em")
		}
		return fQ.fX(new fY([new cN(L(137), function() {
			for (var data = d1.d2.data, c8 = 163; c8 < 174; c8++) data[c8] && d1.d2.oZ(c8, data[c8].oc);
			br.kl(), br.xJ()[31] = null, br.cP(31)
		}).button])), fQ
	}()), fL.push(function() {
		var fQ = new fR;
		return fQ.fS("Targeting"), fQ.kn(L(138)), fQ.fX(new fW(d1.d2.data[175], 0, 0)), fQ
	}()), fL.push(function() {
		var fQ = new fR;
		return fQ.fS(L(244)), fQ.fX(new fY([new cN(L(245), function() {
			(new aDi).show(d1.d2.data[174].value, aDj(), -1)
		}).button])), fQ
	}()), fL.push(function() {
		var fQ = new fR,
			aDk = (fQ.fS(L(246)), fQ.kn(L(247)), new fW(d1.d2.data[176], 1, 0)),
			aDl = (fQ.fX(aDk), new cN(L(248), function(a6) {
				return aDm.button.textContent === L(249) && y.z.m(0) && (aB.dE.kq(a6), aDn(), y.kr.a5B(d1.d2.data[176].value, aDj(), d1.d2.data[175].value, d1.d2.data[174].value)), !0
			}, 1)),
			aDn = function() {
				aDm.button.textContent = L(250), aDl.dL(1), aDl.button.style.color = dK.aL
			},
			aDm = new cN(L(250), function(a6) {
				return a6.textContent === L(250) ? (a6.textContent = L(249), aDl.dL(0), aDl.button.style.color = dK.bL) : aDn(), !0
			});
		return fQ.fX(new fY([aDm.button, aDl.button])), fQ
	}()), fL))
}

function aDo() {
	this.xL = function() {
		var aDp = bz.data;
		aB.pr.aDq(aDp.teamPlayerCount, aDp.playerCount), aDp.numberTeams = aB.pr.aDr(aDp.teamPlayerCount, 0), aDp.teamPlayerCount[0] && aDp.teamPlayerCount[7] && (aDp.teamPlayerCount[7] = 0, this.xL())
	}, this.aDs = function() {
		var aDp = bz.data;
		aDp.mapType < 2 ? c2.cB(c2.aDt(aDp), aDp.mapSeed) : c2.aDu(aDp.canvas)
	}, this.aDv = function() {
		var aDp = bz.data;
		aDp.colorsData || (aDp.colorsData = new Uint32Array(1)), 0 === aDp.gameMode && (aDp.colorsData[0] = d1.z.kz()), aDp.selectableName && (aDp.playerNamesData || (aDp.playerNamesData = new Array(1)), aDp.playerNamesData[0] = d1.d2.data[122]
			.value), aDp.c7 = new Uint32Array(1), aDp.c7[0] = j8.wb.a8E(d1.d2.data[105].value, 5)
	}, this.zm = function() {
		bz.data = new c0
	}
}

function a8N() {
	this.aDw = function(player, aDx) {
		return -1 !== aDx && !!g6.k7.aDy(player, aDx) && this.mL(player, aDx, 0)
	}, this.mL = function(player, aDx, aDz) {
		player = function(player, aDx, aDz) {
			var aE2 = g6.k7.aE3(player, aDx);
			if (-1 === aE2) return -1;
			aE2 = g6.k7.aE5(aE2, aDx);
			if (-1 === aE2) return -1;
			var aE0 = g6.a8V.aE6(aE2, aDx);
			if (0 <= aE0) return aE0;
			if (g6.a8V.aE7()) return -1;
			if (0 <= (aE0 = g6.a8V.aE6(aDx, aE2))) return g6.a8V.aE8(g6.a8V.aE9(g6.a8V.get(aE0)));
			if (aE2 === aDx) return g6.a8V.aE8(new Uint32Array([aE2, aDx]));
			if (0 <= (aE0 = g6.a8O.mL(aE2, aDx))) return aE0;
			return aDz ? function(aEB, player) {
				var aBs = er.aBs,
					d2 = (aBs.fill(0), [aEB]),
					a0E = (aBs[aEB] = 1, kA.a0E),
					aBN = -1,
					cI = d2.length;
				for (; - 1 === aBN && cI;) {
					for (var dT = [], c8 = 0; c8 < cI; c8++)
						for (var k9 = d2[c8], vX = aBs[k9], by = 0; by < 8; by++) {
							var a4k, a4i, aEC = k9 + a0E[by],
								mx = 4 * aEC;
							n0.a0I(mx) ? (a4k = aBs[aEC], a4i = vX + 5 + ((1 & by) << 1), 0 === a4k ? (dT.push(aEC), aBs[aEC] = a4i) : aBs[aEC] = Math.min(a4i, a4k)) : -1 === aBN && by % 2 == 0 && n0.qc(player, mx) && (aBN = k9)
						}
					cI = (d2 = dT).length
				}
				return -1 !== aBN ? function(a0U, aEE) {
					var a0E = kA.a0E,
						aEF = -1,
						a0i = 0,
						qa = [];
					for (; aEE !== a0U;)(a0i = function(k9, a0i) {
						var aBs = er.aBs,
							a0E = kA.a0E,
							vX = aBs[k9];
						if (vX - aBs[k9 + a0E[a0i]] != 5 + ((1 & a0i) << 1))
							for (var dq = 0; dq < 8; dq++) {
								var by = dq + a0i + 6 & 7;
								if (vX - aBs[k9 + a0E[by]] == 5 + ((1 & by) << 1)) return by
							}
						return a0i
					}(aEE, a0i)) !== aEF && (qa.push(aEE), aEF = a0i), aEE += a0E[a0i];
					qa.push(a0U);
					var aE0 = g6.a8V.aE6(qa[0], a0U);
					if (0 <= aE0) return aE0;
					return g6.a8V.aE8(new Uint32Array(qa))
				}(aEB, aBN) : -1
			}(aDx, player) : -1
		}(player, aDx, aDz);
		return -1 !== player && (er.dT[0] = g6.a8V.get(player), !0)
	}
}

function aEH() {
	this.hU = function() {
		var sX = function() {
				for (var aEW = lo.lp.aEW, cI = aEW.length, max = 0, c8 = 0; c8 < cI; c8++) max = Math.max(max, aEW[c8]);
				return aEZ(Math.max(max, 1))
			}(),
			eJ = (hm = bz.data, (eJ = hb).g(), eJ.hS(12, w.rVersion), eJ.h += 43, eJ.hS(2, hm.mapType), eJ.hS(8, hm.mapProceduralIndex), eJ.hS(8, hm.mapRealisticIndex), eJ.hS(14, hm.mapSeed), eJ.aEP(hm.mapName, 5), 2 === hm.mapType && eJ.aEQ(hm
				.canvas), eJ.hS(1, hm.passableWater), eJ.hS(1, hm.passableMountains), eJ.hS(10, hm.playerCount), eJ.hS(10, hm.humanCount), eJ.hS(9, hm.selectedPlayer), eJ.hS(1, hm.gameMode), eJ.hS(2, hm.playerMode), eJ.hS(2, hm
				.battleRoyaleMode), eJ.hS(4, hm.numberTeams), eJ.hS(1, hm.isZombieMode), eJ.hS(1, hm.isContest), eJ.hS(1, hm.isReplay), eJ.a4L(hm.elo, 2, 14), eJ.hS(1, hm.colorsType), eJ.hS(1, hm.colorsPersonalized), eJ.a4L(hm.colorsData, 10,
				18), eJ.hS(1, hm.selectableColor), eJ.a4L(hm.teamPlayerCount, 4, 10), eJ.hS(1, hm.neutralBots), eJ.hS(2, hm.botDifficultyType), eJ.hS(4, hm.botDifficultyValue), eJ.a4L(hm.botDifficultyTeam, 4, 4), eJ.a4L(hm.botDifficultyData,
				10, 4), eJ.hS(2, hm.spawningType), eJ.hS(14, hm.spawningSeed), eJ.a4L(hm.spawningData, 11, 12), eJ.hS(1, hm.selectableSpawn), eJ.hS(2, hm.playerNamesType), eJ.aER(hm.playerNamesData, 10, 5), eJ.hS(1, hm.selectableName), eJ.hS(
				2, hm.aIncomeType), eJ.hS(8, hm.aIncomeValue), eJ.a4L(hm.aIncomeData, 10, 8), eJ.hS(2, hm.tIncomeType), eJ.hS(8, hm.tIncomeValue), eJ.a4L(hm.tIncomeData, 10, 8), eJ.hS(2, hm.iIncomeType), eJ.hS(8, hm.iIncomeValue), eJ.a4L(hm
				.iIncomeData, 10, 8), eJ.hS(2, hm.sResourcesType), eJ.hS(11, hm.sResourcesValue), eJ.a4L(hm.sResourcesData, 10, 11), eJ.a4L(hm.c7, 10, 30), ! function(sX) {
				var eJ = hb,
					aES = lo.lp.aES,
					dw = lo.lp.aET,
					dx = lo.lp.aEU,
					dy = lo.lp.aEV,
					cI = aES.length;
				eJ.hS(5, sX), eJ.hS(30, cI), eJ.hS(30, lo.lp.aEW.length);
				for (var c8 = 0; c8 < cI; c8++) {
					var aA = aES[c8];
					eJ.hS(4, aA), eJ.hS(9, dw[c8]), 0 === aA ? eJ.hS(22, dx[c8]) : 1 === aA ? (eJ.hS(10, dx[c8]), eJ.hS(10, dy[c8])) : 2 === aA ? (eJ.hS(10, dx[c8]), eJ.hS(9, dy[c8])) : 3 === aA ? (eJ.hS(10, dx[c8]), eJ.hS(27, dy[c8])) :
						4 === aA ? (eJ.hS(10, dx[c8]), eJ.hS(16, dy[c8])) : 5 === aA || 6 === aA ? eJ.hS(10, dx[c8]) : 7 === aA ? eJ.hS(1, dx[c8]) : 10 === aA && (eJ.hS(20, dx[c8]), eJ.hS(22, dy[c8]))
				}
			}(sX), ! function(sX) {
				for (var eJ = hb, aEX = lo.lp.aEX, aEW = lo.lp.aEW, cI = aEX.length, c8 = 0; c8 < cI; c8++) eJ.hS(1, aEX[c8]), eJ.hS(sX, aEW[c8])
			}(sX), hb.h),
			hm = io.dp(eJ - 1, 6) + 1,
			sX = (hQ.j5(6 * hm) !== hb.dT.length && hb.dT.push(0), ! function() {
				var eJ = hb;
				eJ.h = 24, eJ.hS(31, eJ.dT.length), eJ.h = 12, eJ.hS(12, function() {
					for (var dT = hb.dT, cI = dT.length, hp = w.rVersion, c8 = 3; c8 < cI; c8++) hp = hp + dT[c8] & 4095;
					return hp
				}())
			}(), ft.g(hb.dT), hc.wb.y2(hc.wb.y3(hm)));
		return ft.gt(), hb.g(), sX
	}
}

function a31() {
	this.dE = new aEa, this.pr = new aEb, this.lk = new qh, this.oB = new aEc, this.eL = new aEd, this.zy = new ip, this.canvas = new aEe, this.color = new aAP, this.aEf = new aEg, this.g = function() {
		this.dE.aDY()
	}
}

function aCQ() {
	var aEh = 0,
		aEi = 0,
		aEj = 0,
		aEk = null,
		aEl = null;

	function aEo(hm, aEp, aEr) {
		var dZ = hm.username;
		return (dZ += "   " + bf.k7.aEs(hm.aA1, hm.rA, hm.aEt)) + function(hm) {
			hm = hm.yA;
			if (hm < 1e3) return "   Gold: " + hm;
			if ((hm %= 1024) < 1e3) return "   Gold: " + hm + "k";
			return "   Gold: " + (hm - 999) + "M"
		}(hm) + ("   IP: " + hc.wb.sV(hm.aEv, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aEr ? aEi : aEn(hm, aEp)])
	}

	function aEn(hm, aEp) {
		return aEi = aEp || bf.bg.aAC(hm.c9) ? 1 : 0
	}
	this.aEm = 0, this.os = function() {
		!aEh || aEi === aEn(aEl) && aEj === aEl.yA || (aEj = aEl.yA, aEk.show(-1, -1, aEo(aEl, 0, 1), 1, 1, aEl.color))
	}, this.aA6 = function(a6, hm, aEp) {
		var aEq = a6.getBoundingClientRect();
		this.show(aEq.left, aEq.top, hm, 0, aEp), a6.addEventListener("mouseleave", function remove() {
			a6.removeEventListener("mouseleave", remove), bf.or && bf.or.u(1)
		}), this.aEm = aEp
	}, this.show = function(e2, e3, hm, aEw, aEp) {
		aEk = aEk || new aEx, aEj = (aEl = hm).yA, aEk.show(e2, e3, aEo(hm, aEp), aEw, 0, aEl.color), aEh = 1
	}, this.u = function(aEy) {
		this.aEm = 0, aEk && aEk.u(aEy) && (aEh = 0, aEl = null)
	}
}

function a3v() {
	var rR = 0,
		rU = 0;
	this.v1 = function(e2, e3) {
		rR = e2, rU = e3
	}, this.vE = function(code) {
		var rP, rS, k9;
		bz.co || cp.cv || (aB.lk.ll(0) || aB.lk.ll(1)) && aB.lk.lm(bz.cr) && (gp.ub(rR, rU) ? gp.v3 = !1 : iW.ub(rR, rU) || (rP = kA.rQ(rR), rS = kA.rT(rU), k9 = kA.rX(rP, rS), kA.rV(rP, rS) && (0 === code ? function(k9) {
			var aF2, mx, n6;
			bz.k2 ? -1 !== (aF2 = a2x.aF3(k9)) && cs.ct.gA(k9) : (mx = kA.rY(k9), n0.re(mx) ? (aF2 = mb.mc.aF4(mx)) && (n6 = kA.rY(aF2), n6 = n0.rd(n6) ? bz.fi : n0.rb(n6), cs.ct.gJ(gp.a77(), aF2, n6)) : (aF2 = a2x.aF5(k9)) < 0 ||
				(mx = kA.rY(aF2), n0.rd(mx) ? nI.aF6(bz.cr) ? cs.ct.gB(gp.a77(), bz.fi) : ly.a9M(bz.cr) && a2j.a9S(bz.fi, gp.a77()) : (n6 = n0.rb(mx), nI.r7(n6, bz.cr) && (nI.aF7(bz.cr, n6) ? cs.ct.gB(gp.a77(), n6) : ly.a9M(bz
					.cr) && a2j.a9S(n6, gp.a77())))))
		}(k9) : 1 === code ? function(k9) {
			g6.a8T.aBJ(bz.cr, k9) && cs.ct.gD(gp.a77(), er.mG[7])
		}(k9) : 2 === code && function(k9) {
			g6.mR.a76(bz.cr, k9) && cs.ct.gE(gp.a77())
		}(k9))))
	}, this.vF = function() {
		if (!bz.co && !cp.cv && aB.lk.ll(1)) {
			var es = bz.cr;
			if (aB.lk.lm(es)) {
				var cI = ly.a9M(es);
				if (cI < 1) ! function() {
					var es = bz.cr;
					if (nI.aF6(es)) cs.ct.gB(gp.a77(), bz.fi);
					else
						for (var mz = n0.mz, jV = ef.jV, cI = jV[es].length, mr = Math.floor(Math.random() * cI), c8 = 0; c8 < cI; c8++)
							for (var a0i = 3; 0 <= a0i; a0i--) {
								var sc = jV[es][(c8 + mr) % cI] + mz[a0i];
								if (n0.ra(sc)) {
									sc = n0.rb(sc);
									if (sc !== es && (!bz.eN || nI.r7(es, sc))) return cs.ct.gB(gp.a77(), sc)
								}
							}
				}();
				else {
					for (var aF9 = 0, me = ly.aFA(es, 0), c8 = 1; c8 < cI; c8++) {
						var a4b = ly.aFA(es, c8);
						a4b < me && (me = a4b, aF9 = c8)
					}
					cs.ct.gB(gp.a77(), ly.aFB(es, aF9))
				}
			}
		}
	}, this.d0 = function() {
		if (!bz.co && !cp.cv && aB.lk.lm(bz.cr) && aB.lk.ll(1)) return cw.v2 ? cw.mY(bz.cr) ? void cs.ct.gH(1) : void 0 : void(cw.cx(bz.cr) && cs.ct.d0())
	}
}

function aFD(data) {
	var cK, aFE, aFF, yr, aFG, aFH, aFI, colors, aFJ, aFK, aFL = 0,
		aFM = 0,
		aFN = !1,
		aFO = !1,
		aFP = [1, 5, 60, 240, 1440, 10080, 43200];

	function aFy(si, sj) {
		! function(si, sj) {
			return aFE < si && si < aFE + yr && aFF < sj && sj < aFF + aFG
		}(aFL = si, aFM = sj) ? (aFN && (cm.cn = !0), aFN = !1) : (aFN = !0, cm.cn = !0)
	}
	this.show = function() {
		aFO = d1.d2.data[127].value, cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize();
		var aA = eT.i5,
			lf = cK.la(),
			aFY = aA * lf.ld,
			aA = aA * lf.lb;
		aFH = aB.dE.aFZ(.06), aFI = aB.dE.aFZ(.04), aFE = aB.dE.aFZ(.06), aFF = aA + aFH, yr = eT.eJ - aFE - aFI, aFG = aFY + aA - aFF - aFI
	}, this.fC = function() {
		cK.fC(),
			function() {
				var c8, jL, el, e2, dq, dT = data.data,
					aFc = 1,
					aFd = .125,
					aFe = aFO ? 65536 : 0;
				for (c8 = 0; c8 < dT.length; c8++)
					for (jL = dT[c8].jL, el = jL.length, aFc = Math.max(el, aFc), dq = 0; dq < el; dq++) aFd = Math.max(jL[dq], aFd), aFe = Math.min(jL[dq], aFe);
				var kF = aFF + aFG,
					aFf = aFG / (aFd - aFe),
					aFg = 1 / (aFc - 1);
				for (fD.lineWidth = dk.yz, c8 = 0; c8 < dT.length; c8++) {
					for (jL = dT[c8].jL, el = jL.length, e2 = aFE, fD.beginPath(), fD.moveTo(e2 + yr, kF - aFf * (jL[el - 1] - aFe)), dq = el - 2; 0 <= dq; dq--) fD.lineTo(e2 + aFg * dq * yr, kF - aFf * (jL[dq] - aFe));
					fD.strokeStyle = colors[c8], fD.stroke()
				}(function(aFe, aFd, kF, aFf) {
					fD.font = aB.dE.f9(0, .25 * aFE), aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 2), fD.fillStyle = colors[0];
					for (var e2 = .92 * aFE, c8 = 0; c8 < 3; c8++) {
						var dt = aFe + c8 * (aFd - aFe) / 2;
						fD.fillText((dt / 1e3).toFixed(3), e2, kF - aFf * (dt - aFe))
					}
				})(aFe, aFd, kF, aFf),
				function(aFc) {
					var e3 = aFF + aFG + .15 * aFI;
					fD.font = aB.dE.f9(0, Math.min(.4 * aFI, .028 * eT.eJ)), aB.dE.textBaseline(fD, 0), aB.dE.textAlign(fD, 2), fD.fillStyle = colors[0], fD.fillText(aB.aEf.aFk(aFJ), aFE + yr, e3), aB.dE.textAlign(fD, 0), fD.fillText(aB.aEf.aFk(
						new Date(aFK.getTime() - 6e4 * (aFc - 1) * aFP[data.a5M])), aFE, e3)
				}(aFc),
				function(aFc, aFe, aFd) {
					if (aFN && !(aFc < 2)) {
						for (var aFu, h = (aFL - aFE) / yr * (aFc - 1), aFl = Math.floor(h), aFm = Math.floor(1 + h), aFn = h - aFl, aFo = 1e5, aFp = -1, aFq = -1, aFr = aFd - (aFd - aFe) * (aFM - aFF) / aFG, dT = data.data, c8 = 0; c8 < dT
							.length; c8++) {
							var aCJ, jL = dT[c8].jL;
							jL.length <= aFm || (jL = jL[aFl] + aFn * (jL[aFm] - jL[aFl]), (aCJ = Math.abs(aFr - jL)) < aFo && (aFo = aCJ, aFp = c8, aFq = jL))
						} - 1 !== aFp && (aFd = aFF + aFG - (aFq - aFe) / (aFd - aFe) * aFG, fD.lineWidth = .5 * dk.yz, fD.strokeStyle = colors[aFp], fD.beginPath(), fD.moveTo(aFE, aFd), fD.lineTo(aFL, aFd), fD.lineTo(aFL, aFF + aFG), fD
						.stroke(), fD.beginPath(), fD.arc(aFL, aFd, .1 * aFE, 0, 2 * Math.PI), fD.fillStyle = colors[aFp], fD.fill(), aFe = aFF + aFG + .15 * aFI, aB.dE.textAlign(fD, 1), aFu = aFc - 2 < h ? (aFu = aFK.getTime() - 6e4 * aFP[
								data.a5M], new Date(aFu + (h - (aFc - 2)) * (aFJ.getTime() - aFu))) : new Date(aFK.getTime() - 6e4 * (aFc - h - 1) * aFP[data.a5M]), aFc = aB.aEf.aFk(aFu), h = aB.dE.measureText(aFc), aFu = io.du(aFL, aFE +
								.5 * h, aFE + yr - .5 * h), fD.fillStyle = aB.color.aD(70, 50, 20), fD.fillRect(aFu - .52 * h, aFF + aFG, 1.04 * h, .55 * aFI), fD.fillStyle = colors[0], fD.fillText(aFc, aFu, aFe), fD.font = aB.dE.f9(0, .25 *
								aFE), aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 2), aFu = .92 * aFE, aFc = (aFq / 1e3).toFixed(3), h = aB.dE.measureText(aFc), aFe = aFu - 1.04 * h, fD.fillStyle = aB.color.aD(70, 50, 20), fD.fillRect(aFe,
								aFd - .1625 * aFE, aFE - aFe, .275 * aFE), fD.fillStyle = colors[aFp], fD.fillText(aFc, aFu, aFd))
					}
				}(aFc, aFe, aFd)
			}(), fD.lineWidth = dk.yz, fD.strokeStyle = dK.aL, fD.beginPath(), fD.moveTo(aFE, aFF), fD.lineTo(aFE, aFF + aFG), fD.lineTo(aFE + yr, aFF + aFG), fD.stroke();
		var c8, fontSize = .5 * aFH,
			dT = (fD.font = aB.dE.f9(0, fontSize), aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 0), data.data),
			cI = dT.length,
			e3 = aFF - .5 * aFH,
			dZ = "";
		for (c8 = 0; c8 < cI; c8++) dZ += dT[c8].name + "  ";
		dZ = dZ.trim();
		var aFv = aB.dE.measureText(dZ),
			e2 = .5 * (eT.eJ - aFv);
		for (aFv > eT.eJ && (e2 = 0, fD.font = aB.dE.f9(0, eT.eJ / aFv * fontSize)), c8 = 0; c8 < cI; c8++) fD.fillStyle = colors[c8], fD.fillText(dT[c8].name, e2, e3), e2 += aB.dE.measureText(dT[c8].name + "  ")
	}, this.ub = function(si, sj) {
		aFy(si, sj)
	}, this.sg = function(si, sj) {
		aFy(si, sj)
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	};
	var c8, ee, aFV, sc, by = data.data,
		cI = by.length,
		max = 1;
	for (c8 = 0; c8 < cI; c8++) max = Math.max(max, by[c8].jL.length);
	for (c8 = 0; c8 < cI; c8++)
		for (; by[c8].jL.length < max;) by[c8].jL.unshift(0);
	ee = new Date, aFV = 6e4 * ee.getTimezoneOffset(), sc = ee.getTime() - aFV, aFJ = new Date(sc), 6 === data.a5M ? function(ee, aFV) {
		var aFX = ee.getUTCFullYear(),
			ee = ee.getUTCMonth() + 1;
		aFK = ee < 12 ? new Date(Date.UTC(aFX, ee) - aFV) : new Date(Date.UTC(aFX + 1, 0) - aFV)
	}(ee, aFV) : (aFV = 6e4 * aFP[data.a5M], aFK = data.a5M <= 4 ? new Date(sc + aFV - ee.getTime() % aFV) : new Date(sc + aFV - (ee.getTime() + 2592e5) % aFV)), sc = aB.color, colors = [dK.aL, sc.aD(255, 0, 0), sc.aD(0, 200, 0), sc.aD(80, 80,
		255), sc.aD(255, 255, 0), sc.aD(255, 0, 255), sc.aD(0, 255, 255), sc.aD(255, 140, 0), sc.aD(128, 128, 128), sc.aD(0, 255, 140)], cK = new cd(L(251) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.a5M] + ", " + aB.aEf.aFU(aFJ), [
		new cN("⬅️ " + L(14), function() {
			br.cP(1)
		}), new cN(L(252), function() {
			br.cP(14)
		})
	], !1)
}

function pD(p6, p0, aFz, p7, nu, nv) {
	var a9g = document.createElement("div"),
		aG0 = document.createElement("div"),
		aG1 = document.createElement("div"),
		aG2 = document.createElement("div"),
		aG3 = document.createElement("div"),
		aG4 = document.createElement("div"),
		aG5 = document.createElement("div"),
		aG6 = document.createElement("div"),
		aG7 = document.createElement("span"),
		aG8 = document.createElement("div");
	this.pM = new nt(nu, nv), this.pV = new aG9(nv), this.pY = [p6, p0, aFz, p7], this.pi = function(ot) {
		ot = (ot / 10).toFixed(1) + "%";
		aG6.style.width = ot, aG7.innerHTML = ot
	}, this.pW = function() {
		this.pV.u(aG4), this.pM.show(aG4)
	}, this.pX = function() {
		this.pM.u(aG4), this.pV.show(aG4)
	}, this.pJ = function() {
		return aG0
	}, this.show = function() {
		document.body.appendChild(a9g)
	}, this.u = function() {
		br.removeChild(document.body, a9g)
	}, this.resize = function(aGC) {
		var aGD = 1 - .4 * cZ.cb.eR() * (eT.eJ > 1.6 * eT.gP),
			zp = aB.dE.dm(.05 * aGD),
			aGE = eT.gP > eT.eJ,
			aGF = aB.dE.dm(.06 * aGD + .03 * aGE),
			aGG = aB.dE.dm(.08 * aGD + .03 * aGE),
			aGH = aB.dE.dm(.04 + .02 * aGE),
			aGE = aB.dE.dm(.02 * aGD + .01 * aGE),
			aGJ = aB.dE.dm(.025);
		a9g.style.font = aB.dE.f9(0, aGJ), aG3.style.font = aB.dE.f9(0, .9 * aGJ), aG8.style.font = aB.dE.f9(0, .9 * aGJ), aGD < 1 && (aGJ = aB.dE.f9(0, aGD * aGJ), aG1.style.font = aGJ, aG3.style.font = aGJ, aG8.style.font = aGJ, aG5.style
				.font = aGJ, aG2.style.font = aGJ), aG0.style.height = aB.dE.dj(zp), aG0.style.font = aB.dE.f9(0, .72 * zp), aB.dE.lg(aG0, 2), aG1.style.top = aB.dE.dj(zp), aG1.style.height = aB.dE.dj(aGG), aB.dE.lg(aG1, 2), aG2.style.font = aB
			.dE.f9(0, aGD * aB.dE.dm(.02)), aG2.style.top = aB.dE.dj(zp + aGG), aG2.style.height = aB.dE.dj(aGH), aB.dE.lg(aG2, 2), aG3.style.top = aB.dE.dj(zp + aGG + aGH), aG3.style.height = aB.dE.dj(aGF), aB.dE.lg(aG3, 2), aG4.style.top = aB
			.dE.dj(zp + aGG + aGH + aGF), aG4.style.height = aB.dE.dj(eT.gP / eT.i5 - zp - aGG - 2 * aGF - aGH - aGE), aG5.style.top = aB.dE.dj(eT.gP / eT.i5 - aGF - aGE), aG5.style.height = aB.dE.dj(aGE), aB.dE.lg(aG5, 8), aG7.style.font = aB.dE
			.f9(0, .8 * aGE), aG8.style.top = aB.dE.dj(eT.gP / eT.i5 - aGF), aG8.style.height = aB.dE.dj(aGF), aB.dE.lg(aG8, 8), p6.resize(aG1), p0.resize(aG1), aFz.resize(aG1), p7.resize(aG1), aGC ? this.pM.resize(aG4) : this.pV.resize()
	};
	nu = this;
	a9g.style.position = "absolute", a9g.style.top = "0", a9g.style.left = "0", a9g.style.width = "100%", a9g.style.height = "100%", a9g.style.backgroundColor = dK.aK, h6.h7() || (a9g.style.backdropFilter = "blur(4px)", a9g.style
		.webkitBackdropFilter = "blur(4px)"), aG0.style.position = "absolute", aG0.style.top = "0", aG0.style.left = "0", aG0.style.width = "100%", aG0.style.display = "flex", aG0.style.alignItems = "center";
	for (var dT = [aG1, aG2, aG3, aG8], c8 = 0; c8 < dT.length; c8++) dT[c8].style.position = "absolute", dT[c8].style.left = "0", dT[c8].style.width = "100%", aB.dE.lV(dT[c8]);
	aG4.style.position = "absolute", aG4.style.left = "0", aG4.style.width = "100%", aG4.style.font = "inherit", aG5.style.position = "absolute", aG5.style.left = "0", aG5.style.width = "100%", aG6.style.position = "absolute", aG6.style.top = "0",
		aG6.style.left = "0", aG6.style.height = "100%", aG6.style.width = "50%", aG6.style.backgroundColor = dK.ah, aG7.innerHTML = "", aG7.style.position = "absolute", aG7.style.top = "50%", aG7.style.left = "50%", aG7.style.transform =
		"translate(-50%, -50%)", aG0.appendChild(function() {
			var ik = document.createElement("h1");
			return ik.textContent = L(253), ik.style.margin = "0 auto 0.15em auto", ik.style.fontFamily = "Arial Black, system-ui", ik.style.fontSize = "inherit", ik.style.fontWeight = "inherit", ik
		}()), aG1.appendChild(p6.dh), aG2.appendChild(p0.dh), aG3.appendChild(aFz.dh), aG5.appendChild(aG6), aG5.appendChild(aG7), aG8.appendChild(p7.dh), a9g.appendChild(aG0), a9g.appendChild(aG1), a9g.appendChild(aG2), a9g.appendChild(aG3), a9g
		.appendChild(aG4), a9g.appendChild(aG5), a9g.appendChild(aG8), nu.pV.show(aG4)
}

function a3m() {
	this.g = function() {
		this.dT = [], this.h = 0
	}, this.he = function() {
		return new Uint8Array(this.dT)
	}, this.hS = function(aGL, value) {
		for (var dT = this.dT, fs = this.h + aGL - 1, aGM = 1 + (fs >> 3); dT.length < aGM;) dT.push(0);
		for (var c8 = this.h; c8 <= fs; c8++) dT[c8 >> 3] |= (value >> fs - c8 & 1) << 7 - (7 & c8);
		this.h += aGL
	}, this.a4L = function(dT, a51, aGN) {
		var aGO = aB.pr.aGP(dT);
		this.hS(a51, aGO);
		for (var c8 = 0; c8 < aGO; c8++) this.hS(aGN, dT[c8])
	}, this.aER = function(dT, a51, aGQ) {
		var aGO = aB.pr.aGP(dT);
		this.hS(a51, aGO);
		for (var c8 = 0; c8 < aGO; c8++) this.aEP(dT[c8], aGQ)
	}, this.aEP = function(dZ, a51) {
		var cI = dZ.length;
		this.hS(a51, cI);
		for (var c8 = 0; c8 < cI; c8++) this.hS(16, dZ.charCodeAt(c8))
	}, this.aEQ = function(tN) {
		var aGR = (tN = tN.toDataURL()).split(",");
		if (aGR.length < 2) console.log("error 266");
		else {
			tN = aB.oB.aGS(tN = aGR[aGR.length - 1], "/", "_"), tN = aB.oB.aGS(tN, "\\+", "-");
			var tN = aB.oB.aGS(tN, "=", ""),
				a8C = j8.wb.a8A(tN),
				cI = a8C.length;
			this.hS(30, cI);
			for (var c8 = 0; c8 < cI; c8++) this.hS(6, a8C[c8])
		}
	}
}

function aGT() {
	this.a8 = function(cG, s) {
		ft.g(s), 0 === ft.size ? y.z.j6(cG, 3205) : ((0 === ft.fu(1) ? function(cG) {
			var aGX = ft.fu(6);
			0 === aGX ? function(cG) {
					if (0 === cG && 8 !== cA.cg()) {
						br.z.a5N();
						for (var aGj = ft.fu(12), aGk = ft.fu(6), dT = new Array(aGj), c8 = 0; c8 < aGj; c8++) dT[c8] = ft.fu(aGk);
						iO.aGl(dT)
					}
				}(cG) : 2 === aGX ? y.aGZ.uA(cG) : 3 === aGX || 4 === aGX ? bw.g() : 5 === aGX ? y.aGa.aGb() : 9 === aGX ? y.aGa.aGc(cG) : 10 === aGX ? y.aGd.y0() : 11 === aGX ? y.aGa.aGe(cG) : 12 === aGX ? y.aGd.y4() : 13 === aGX ? y
				.aGf.j4() : 14 === aGX ? y.aGf.jF() : 15 === aGX ? y.aGa.aGg() : 16 === aGX ? y.aGZ.uC(cG) : 17 === aGX ? y.aGZ.uK(cG) : 19 === aGX ? y.aGZ.uR(cG) : 20 === aGX ? y.aGa.aGh(cG) : 21 === aGX ? y.aGa.aGi(cG) : 22 ===
				aGX && y.aGZ.u9(cG)
		} : function(cG) {
			if (8 !== cA.cg() && !bw.lK()) return;
			if (cG !== y.z.hq) y.z.j6(cG, 3244);
			else if (0 === ft.fu(1)) cm.aDJ.aAw(ft.s);
			else {
				var c8, cG = ft.fu(2);
				if (0 === cG) {
					var mV, lC = ft.fu(9);
					0 !== ef.fo[lC] && 0 !== ef.fo[bz.cr] && (mV = ft.fu(10), iU.a6d(lC, bz.cr, mV), iY.mW(lC, 1, mV))
				} else if (1 === cG) ! function() {
					var lC = ft.fu(9);
					0 !== ef.fo[lC] && 0 !== ef.fo[bz.cr] && a2m.aGr(0, [lC], !0) && iU.a6r(lC, 1)
				}();
				else if (2 === cG) ! function() {
					var lC = ft.fu(9),
						target = ft.fu(9);
					0 !== ef.fo[lC] && 0 !== ef.fo[target] && 0 !== ef.fo[bz.cr] && a2m.aGr(1, [lC], !0) && (iY.mW(lC, 3, 96), iY.mW(target, 4, 96), iU.a6t(lC, target))
				}();
				else if (w.hs && !w.ht) {
					var cI = 540;
					for (hQ.cB(17287), hQ.hS(1, 0), hQ.hS(6, 10), cI = Math.min(cs.aAy.fw.length, 540), c8 = 0; c8 < cI; c8++) hQ.wP(32, cs.aAy.fw[c8]);
					y.z.send(y.z.hq, hQ.s)
				}
			}
		})(cG), cm.aGW())
	}
}

function a3F() {
	var eJ, e2, aGs, canvas, eL, v2, ls, vX, gQ, a8u, aGt = 11 / 12;

	function aGu() {
		var aGw = Math.floor(ls * (eJ - 2 * aGs)),
			aGx = 1 + Math.floor(.0625 * gp.gP),
			aGy = 1 + Math.floor(.3 * gp.gP),
			ii = Math.floor(.55 * gp.gP);
		eL.clearRect(0, 0, eJ, gp.gP), eL.fillStyle = dK.aH, eL.fillRect(0, 0, aGs, gp.gP), eL.fillRect(aGs + aGw, 0, eJ - aGs - aGw, gp.gP), eL.fillStyle = ls < 1 / 3 ? "rgba(" + Math.floor(3 * ls * 130) + ",130,0,0.85)" : ls < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (ls - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ls - 2 / 3) * 130) + ",0.85)", eL.fillRect(aGs, 0, aGw, gp.gP), eL.fillStyle = dK.aL, eL.fillRect(0, 0, eJ, 1), eL.fillRect(0, gp.gP - 1, eJ, 1), eL
			.fillRect(0, 0, 1, gp.gP), eL.fillRect(aGs, 0, 1, gp.gP), eL.fillRect(aGs + aGw, 0, 1, gp.gP), eL.fillRect(eJ - aGs, 0, 1, gp.gP), eL.fillRect(eJ - 1, 0, 1, gp.gP), eL.fillRect(Math.floor(.25 * gp.gP) + aGy, Math.floor((gp.gP - aGx) / 2),
				gp.gP - 2 * aGy, aGx), eL.fillRect(Math.floor(eJ - 1.25 * gp.gP) + aGy, Math.floor((gp.gP - aGx) / 2), gp.gP - 2 * aGy - aGy % 2, aGx), eL.fillRect(Math.floor(eJ - 1.25 * gp.gP) + Math.floor((gp.gP - aGx) / 2), aGy, aGx, gp.gP - 2 *
				aGy - aGy % 2), vX = aB.lk.mA(bz.cr, gp.a77()), eL.fillText(aB.oB.sV(vX) + " (" + aB.oB.a6y(100 * ls, +(ls < .1)) + ")", Math.floor(.5 * eJ), ii)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ls = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => gp.vD(arg1);

	function aH3(sh) {
		return !(1 < sh && 1 === ls || (1 < sh && sh * ls - ls < 1 / 1024 ? sh = (ls + 1 / 1024) / ls : sh < 1 && ls - sh * ls < 1 / 1024 && (sh = (ls - 1 / 1024) / ls), ls = io.du(ls * sh, 1 / 1024, 1), aGu(), 0))
	}

	function aH4(si) {
		return ls !== (ls = io.du((si - e2 - aGs) / (eJ - 2 * aGs), 1 / 1024, 1)) && (aGu(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aGu(), cm.cn = !0
	}, this.e3 = 0, this.v3 = !1, this.g = function() {
		v2 = !bz.k2 && !bz.co, a8u = !1, ls = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (d1.d2.data[182].value + 1) / 1024, vX = 0, this.v3 = !1, this.resize()
	}, this.resize = function() {
		cZ.cb.eR() && eT.eJ < .8 * eT.gP ? (this.gP = Math.floor(.066 * eT.eU), eJ = eT.eJ - 4 * dk.gap - this.gP) : (eJ = Math.floor((cZ.cb.eR() ? .65 : .389) * eT.eU), eJ += 12 - eJ % 12, this.gP = Math.floor(eJ / 12)), aGs = Math.floor(3 *
			this.gP / 2), gQ = aB.dE.f9(1, Math.floor(.5 * this.gP)), (canvas = document.createElement("canvas")).width = eJ, __fx.mobileKeybinds.setSize(eJ, this.gP, fD), canvas.height = this.gP, (eL = canvas.getContext("2d", {
			alpha: !0
		})).font = gQ, aB.dE.textBaseline(eL, 1), aB.dE.textAlign(eL, 1), this.a8e(), aGu()
	}, this.a8e = function() {
		e2 = cZ.cb.eR() && eT.eJ < .8 * eT.gP ? this.gP + 3 * dk.gap : Math.floor((eT.eJ - eJ) / 2), this.e3 = eT.gP - this.gP - a2s.a6G() * dk.gap
	}, this.sb = function() {
		a8u && (a8u = !1, aGu())
	}, this.v2 = function() {
		return !(!v2 || cp.cv && e2 < Math.floor(dk.gap + 5.5 * this.gP))
	}, this.a6F = function(aGz) {
		return !!this.v2() && e2 + eJ > eT.eJ - aGz - dk.gap
	}, this.aAn = function() {
		v2 = !bz.co
	}, this.a95 = function() {
		v2 = !1
	}, this.a77 = function() {
		return io.du(Math.floor(1024 * ls + .5) - 1, 0, 1023)
	}, this.vA = function(si, sj) {
		return this.v2() && e2 < si && si < e2 + eJ && sj > this.e3
	}, this.ub = function(si, sj) {
		if (!this.v2()) return !1;
		if (!(__fx.settings.keybindButtons && sj > this.e3 - Math.floor(dk.gap / 4) - this.gP && sj < this.e3 - Math.floor(dk.gap / 4) && __fx.mobileKeybinds.click(si - e2))) {
			if (!gp.vA(si, sj)) return !1;
			iT.kK = !1, ! function(a1D, si, sj) {
				if (function(si, sj) {
						return e2 < si && si < e2 + aGs && sj > gp.e3
					}(si, sj)) return aH3(aGt);
				if (function(si, sj) {
						return e2 + eJ - aGs < si && si < e2 + eJ && sj > gp.e3
					}(si, sj)) return aH3(1 / aGt);
				return a1D.v3 = !0, aH4(si)
			}(this, si, sj) || (cm.cn = !0)
		}
		return !0
	}, this.vD = function(h8) {
		0 !== bz.gb && this.v2() && aH3(h8) && (cm.cn = !0)
	}, this.ue = function(deltaY) {
		var h8;
		return !(0 === deltaY || !this.v2()) && aH3(h8 = 0 < deltaY ? (h8 = 400 / (400 + deltaY)) < aGt ? aGt : h8 : 1 / aGt < (h8 = (400 - deltaY) / 400) ? 1 / aGt : h8)
	}, this.sg = function(si) {
		return !!this.v3 && aH4(si)
	}, this.v6 = function() {
		this.v3 = !1
	}, this.dI = function() {
		this.v2() && vX !== aB.lk.mA(bz.cr, this.a77()) && (a8u = !0)
	}, this.fC = function() {
		this.v2() && (fD.drawImage(canvas, e2, this.e3), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(fD, e2, this.e3)
	}
}

function aH5() {
	var cK, cL, cM, cW;

	function aH6(c8) {
		br.cP(8, br.bs, new d4(21, {
			j7: c8,
			x4: 0,
			x5: 10
		}))
	}
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), cL.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cM = [new cN(L(254), function() {
		aH6(5)
	}, 0, 0, 1), new cN(L(255), function() {
		aH6(6)
	}, 0, 0, 1), new cN(L(256), function() {
		aH6(7)
	}, 0, 0, 1), new cN("Audit Log", function() {
		aH6(12)
	}, 0, 0, 1)], cW = [new cN("⬅️ " + L(14), function() {
		br.kl()
	})], cK = new cd(L(2), cW), cL = new ce(cM, cK.cf)
}

function a41() {
	this.f8 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aH7 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", dK.aL, "rgb(170,170,170)"
	], this.aH8 = [dK.aL, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", dK.aL, dK.aC], this.aH9 = [dK.aC, dK.aL, dK.aL, dK.aL, dK.aC, dK.aC, dK.aC, dK.aC, dK.aL];
	var zG = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.tR = ["rgba(" + zG[0] + ",", "rgba(" + zG[1] + ",", "rgba(" + zG[2] + ",", "rgba(" + zG[3] + ",", "rgba(" + zG[4] + ",", "rgba(" + zG[5] + ",", "rgba(" + zG[6] + ",", "rgba(" + zG[7] + ",", "rgba(" + zG[8] + ",", "rgba(" + zG[9] + ","], this
		.tS = ["rgb(" + zG[0] + ")", "rgb(" + zG[1] + ")", "rgb(" + zG[2] + ")", "rgb(" + zG[3] + ")", "rgb(" + zG[4] + ")", "rgb(" + zG[5] + ")", "rgb(" + zG[6] + ")", "rgb(" + zG[7] + ")", "rgb(" + zG[8] + ")", "rgb(" + zG[9] + ")"], this.xU =
		null, this.aHA = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.xX = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.ec = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eo = new Uint8Array(bz.fi), this.a2A = new Uint8Array(bz.fi), this.aHB = new Uint16Array(bz.fi), this.aHC = new Uint16Array(this.ec.length + 1), this.aHD = new Uint16Array(this.ec.length), this
		.i7 = function() {
			this.xU = [L(257), L(258), L(259), L(260), L(261), L(262), L(263), L(264), L(265)]
		}, this.g = function() {
			if (this.eo.fill(0), this.a2A.fill(0), this.aHE(), bz.eN) {
				if (9 === bz.qS) {
					for (var eo = eb.eo, c8 = bz.data.teamPlayerCount[7] - 1; 0 <= c8; c8--) eo[c8] = 1;
					var cI = bz.fi;
					for (c8 = bz.data.teamPlayerCount[7]; c8 < cI; c8++) eo[c8] = 2;
					eb.ec[1] = 7, eb.ec[2] = 8
				} else bz.wx ? function() {
					var xX = eb.xX,
						colorsData = bz.data.colorsData;
					if (!bz.data.selectableColor)
						for (var c8 = bz.fj - 1; 0 <= c8; c8--) colorsData[c8] = qT.u4(262144);
					var aHP = 0,
						n9 = 768,
						kx = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = bz.data.teamPlayerCount;
					for (c8 = 0; c8 < 9; c8++)
						if (teamPlayerCount[c8]) {
							for (var by = 0, dr = 0; dr < 3; dr++) by += Math.abs(xX[c8][dr] - kx[dr]);
							by < n9 && (aHP = c8, n9 = by)
						} var aHQ = new Uint16Array(9);
					for (c8 = 0; c8 < 9; c8++) aHQ[c8] = teamPlayerCount[c8];
					var ec = eb.ec,
						aHR = new Uint8Array(9),
						el = (ec[0] = 0, 1);
					for (c8 = 1; c8 < 9; c8++) aHQ[c8] && (aHR[c8] = el, ec[el++] = c8);
					var oG = bz.fj,
						eo = eb.eo;
					aHQ[aHP] ? (aHQ[aHP]--, eo[0] = aHR[aHP]) : oG = 0;
					var aA = 0;
					for (c8 = oG; c8 < bz.zI; c8++) {
						var sc = ec[aA];
						if (aHQ[sc]) aHQ[sc]--, eo[c8] = aHR[sc];
						else if (c8--, 9 <= ++aA) return console.log("error 325")
					}
				}() : this.dI();
				! function() {
					for (var cI = bz.fi, aHB = eb.aHB, aHC = eb.aHC, aHD = eb.aHD, eo = eb.eo, ec = eb.ec, aHb = ec.length, d2 = new Array(aHb), c8 = 0; c8 < aHb; c8++) d2[c8] = [];
					for (c8 = 0; c8 < cI; c8++) d2[ec[eo[c8]]].push(c8);
					for (c8 = 1; c8 <= aHb; c8++) aHC[c8] = aHC[c8 - 1] + d2[c8 - 1].length;
					for (c8 = 0; c8 < aHb; c8++)
						for (var el = d2[c8].length, dU = aHC[c8], sc = 0; sc < el; sc++) aHB[sc + dU] = d2[c8][sc];
					var fj = bz.fj;
					for (c8 = 0; c8 < aHb; c8++)
						for (el = d2[c8].length, dU = aHC[c8], sc = 0; sc < el; sc++)
							if (aHB[sc + dU] >= fj) {
								aHD[c8] = sc;
								break
							}
				}(), ! function() {
					for (var cI = bz.fi, eo = eb.eo, a2A = eb.a2A, ec = eb.ec, c8 = 0; c8 < cI; c8++) a2A[c8] = ec[eo[c8]];
					9 === bz.qS && a2A.fill(1, cI - qV.zC[5])
				}()
			}
		}, this.aHE = function() {
			for (var c8 = this.ec.length - 1; 0 <= c8; c8--) this.ec[c8] = c8
		}, this.dI = function() {
			var tX = new Uint8Array(bz.fj),
				tY = new Uint8Array(bz.fj),
				aHJ = new Uint16Array(8),
				aHK = new Uint16Array(this.ec.length);
			this.aHL(tX, tY, aHJ, 1), this.a1z(aHJ), this.aHM(aHK, tX, tY), this.aHN(tX, tY, aHK), this.aHO()
		}, this.aHL = function(tX, tY, aHQ, aHS) {
			for (var dr, a6, aHT, cI = this.ec.length - aHS, dT = new Uint16Array(cI), xX = this.xX, colorsData = bz.data.colorsData, c8 = bz.fj - 1; 0 <= c8; c8--) {
				for (dr = cI; aHS <= dr; dr--) dT[dr - 1] = Math.abs(4 * (colorsData[c8] >> 12) - xX[dr][0]) + Math.abs(4 * (colorsData[c8] >> 6 & 63) - xX[dr][1]) + Math.abs(4 * (63 & colorsData[c8]) - xX[dr][2]);
				for (aHT = 768, dr = cI - 1; 0 <= dr; dr--) dT[a6 = (dr + c8) % cI] < aHT && (aHT = dT[a6], tX[c8] = a6);
				for (aHQ[tX[c8]] += 4, aHT = 768, dr = cI - 1; 0 <= dr; dr--) dT[a6 = (dr + c8) % cI] < aHT && a6 !== tX[c8] && (aHT = dT[a6], tY[c8] = a6);
				aHQ[tY[c8]]++
			}
		}, this.a1z = function(aHQ) {
			for (var dr, aHU, cI = this.ec.length - 1, c8 = cI; 0 <= c8; c8--) this.ec[c8] = c8;
			for (c8 = cI - 1; 0 <= c8; c8--) aHQ[c8]++;
			for (c8 = 1; c8 <= cI; c8++) {
				for (aHU = 0, dr = 1; dr < cI; dr++) aHQ[dr] > aHQ[aHU] && (aHU = dr);
				aHQ[aHU] = 0, this.ec[c8] = aHU + 1
			}
		}, this.aHM = function(aHK, tX, tY) {
			var dr, jJ, aA, by, a6, h8, z2, aHV = this.ec.length - 1,
				a7U = new Uint16Array(aHV),
				aHW = [],
				aHX = 0,
				a4f = [],
				aHY = [];
			loop: for (var c8 = 0; c8 < bz.fj; c8++)
				if (null !== (jJ = aB.oB.a4g(ef.jN[c8]))) {
					for (dr = a4f.length - 1; 0 <= dr; dr--)
						if (jJ === a4f[dr]) {
							aHY[dr].push(c8), aHX = Math.max(aHX, aHY[dr].length);
							continue loop
						} a4f.push(jJ), aHW.push(!1), aHY.push([c8]), aHX = Math.max(aHX, 1)
				}
			for (; 2 < bz.eO && aHX > io.dp(bz.fj, bz.eO);) bz.eO--, bz.qS--;
			for (dr = a4f.length - 1; 0 <= dr; dr--) {
				for (by = -1, aA = a4f.length - 1; 0 <= aA; aA--) !aHW[aA] && (-1 === by || aHY[aA].length > aHY[by].length) && (by = aA);
				for (aA = aHV - 1; 0 <= aA; aA--) a7U[aA] = 1;
				for (aA = aHY[by].length - 1; 0 <= aA; aA--) a7U[tX[aHY[by][aA]]] += 3, a7U[tY[aHY[by][aA]]]++;
				for (c8 = aHV - 1; 0 <= c8; c8--) {
					for (a6 = by % aHV, aA = aHV - 1; 0 <= aA; aA--) a7U[aA] > a7U[a6] && (a6 = aA);
					for (h8 = -1, aA = bz.eO; 0 < aA; aA--)
						if (this.ec[aA] === a6 + 1) {
							h8 = aA;
							break
						} if (a7U[a6] = 0, -1 !== h8) {
						for (z2 = 0, aA = bz.eO; 0 < aA; aA--) aHK[h8] > aHK[aA] && z2++;
						if (z2 !== bz.eO - 1) {
							for (aA = aHY[by].length - 1; 0 <= aA; aA--) aHK[h8]++, this.eo[aHY[by][aA]] = h8;
							break
						}
					}
				}
				aHW[by] = !0
			}
		}, this.aHN = function(tX, tY, aHK) {
			for (var c8, a0O, cI = this.ec.length - 1, border = io.dp(bz.fj, bz.eO), aHZ = (0 < bz.fj % bz.eO && border++, new Uint8Array(1 + cI)), dr = cI; 1 <= dr; dr--) aHZ[this.ec[dr]] = dr;
			for (c8 = 0; c8 < bz.fj; c8++) a0O = aHZ[tX[c8] + 1], 0 === this.eo[c8] && a0O <= bz.eO && aHK[a0O] < border && (aHK[a0O]++, this.eo[c8] = a0O);
			for (c8 = 0; c8 < bz.fj; c8++) a0O = aHZ[tY[c8] + 1], 0 === this.eo[c8] && a0O <= bz.eO && aHK[a0O] < border && (aHK[a0O]++, this.eo[c8] = a0O);
			for (dr = bz.eO; 1 <= dr; dr--)
				for (c8 = bz.fj - 1; 0 <= c8 && !(aHK[dr] >= border); c8--) 0 === this.eo[c8] && (aHK[dr]++, this.eo[c8] = dr)
		}, this.aHO = function() {
			if (bz.eO < 8) bz.eO++, bz.qS++, bz.aHa = 1;
			else
				for (var c8 = bz.fj; c8 < bz.fi; c8++) this.eo[c8] = 1 + c8 % bz.eO
		}
}

function aHc() {
	var vu, xE, xF, fL;

	function pB() {
		xI(), 2 !== bz.data.iIncomeType && (bz.data.iIncomeData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		2 === bz.data.iIncomeType && aB.pr.xM(xF.gY(), bz.data.iIncomeData, 255)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(80), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(266), L(267), L(106)],
			value: bz.data.iIncomeType
		}, function(h) {
			xI(), 2 !== h || bz.data.iIncomeData || (bz.data.iIncomeData = new Uint8Array(bz.fi), bz.data.iIncomeData.fill(32)), bz.data.iIncomeType = h, br.cP(27)
		})), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ;
		1 === bz.data.iIncomeType && ((fQ = new fR).fS("Value"), fQ.fX(new fW({
			h: -1,
			value: bz.data.iIncomeValue
		}, 1, 0, function(a6) {
			var value = io.du(Math.floor(a6.target.value), 0, 255);
			a6.target.value = bz.data.iIncomeValue = value
		})), fL.push(fQ))
	}(fL), function(fL) {
		var fQ;
		2 === bz.data.iIncomeType && ((fQ = new fR).fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.iIncomeData, 4)), fQ.fX(xF), fL.push(fQ))
	}(fL), fL))
}

function a3X() {
	var dt, eJ, gP, max, aHd, jf, aHf, aHg, aHh, aHi, aHj, aHk, aHl, aHm, aHe = 1e4;

	function aHu(aHt, ji, cI) {
		var c8;
		for (aHf[0] = aHt, c8 = 1; c8 < cI; c8++) aHf[c8] = aHf[c8 - 1] + ji, ji = aHf[c8] >= aHe ? (aHf[c8] = aHe - 1, -ji) : aHf[c8] < 0 ? (aHf[c8] = 0, -ji) : (ji += 16384 <= qT.random() ? jf : -jf) < -aHd ? -aHd : aHd < ji ? aHd : ji
	}

	function aHw(e2, e3, aHx, cI) {
		(aHx ? function(e2, e3, cI) {
			var c8;
			for (c8 = 0; c8 < cI; c8++) dt[e3 * eJ + e2 + c8] = aHf[c8]
		} : function(e2, e3, cI) {
			var c8;
			for (c8 = 0; c8 < cI; c8++) dt[e3 * eJ + e2 + c8 * eJ] = aHf[c8]
		})(e2, e3, cI)
	}

	function aI0(value, cI) {
		var c8, tk, mx, iE = value - aHf[cI - 1];
		if (0 != iE) {
			for (tk = 1 + io.dp(Math.abs(iE), cI - 1), tk = iE < 0 ? -tk : tk, aHf[cI - 1] = value, mx = (mx = cI - 1 - io.dp(Math.abs(iE), Math.abs(tk))) < 1 ? 1 : cI - 2 < mx ? cI - 2 : mx, c8 = cI - 2; mx <= c8; c8--) aHf[c8] += iE - (cI - 1 -
				c8) * tk;
			(iE < 0 ? function(cI) {
				var c8;
				for (c8 = cI - 2; 1 <= c8; c8--) aHf[c8] < 0 && (aHf[c8] = -aHf[c8] - 1)
			} : function(cI) {
				var c8;
				for (c8 = cI - 2; 1 <= c8; c8--) aHf[c8] >= aHe && (aHf[c8] = 2 * aHe - aHf[c8] - 1)
			})(cI)
		}
	}

	function aI3(n2, n5, cI) {
		for (var c8 = 0; c8 < cI; c8++) n2[c8] = n5[c8]
	}

	function aI4(dT) {
		for (var c8 = 0; c8 < dT.length - 1; c8++) dT[c8] = dT[c8 + 1] - dT[c8];
		dT[dT.length - 1] = dT[dT.length - 3]
	}

	function aI5(a9R, gap, a0i) {
		aHg.push(a9R), aHh.push(gap), aHi.push(a0i)
	}
	this.cB = function(is) {
		! function(is) {
			var c8;
			for (eJ = is[0], gP = is[1], aHd = is[2], jf = is[3], dt = new Int16Array(eJ * gP), max = gP < eJ ? eJ : gP, aHf = new Int16Array(max), aHg = [], aHh = [], aHi = [], aHj = new Array(eJ), aHk = new Array(gP), c8 = eJ - 1; 0 <=
				c8; c8--) aHj[c8] = !1;
			for (c8 = gP - 1; 0 <= c8; c8--) aHk[c8] = !1;
			aHl = new Int16Array(eJ), aHm = new Int16Array(gP)
		}(is),
		function(cI) {
			var aHt = qT.random() % aHe,
				ji = qT.random() % (2 * aHd + 1) - aHd;
			aHu(aHt, ji, cI)
		}(max), aI3(aHm, aHf, gP), aHw(0, 0, !0, eJ);
		var e2, e3, is = dt[0],
			cI = max,
			ji = qT.random() % (2 * aHd + 1) - aHd;
		for (aHu(is, ji, cI), aI3(aHl, aHf, eJ), aHw(0, 0, !1, gP), aI4(aHl), aI4(aHm), aHu(dt[eJ - 1], aHl[eJ - 1], gP), aHw(eJ - 1, 0, !1, gP), aHu(dt[eJ * (gP - 1)], aHm[gP - 1], eJ), aI0(dt[eJ * gP - 1], eJ), aHw(0, gP - 1, !0, eJ), aHj[eJ -
				1] = aHj[0] = !0, aHk[gP - 1] = aHk[0] = !0, aI5(0, eJ, !0), aI5(0, gP, !1), ! function() {
				var x7, a9R;
				for (;;) {
					if (x7 = function() {
							var c8, x7 = aHg.length - 1;
							for (c8 = x7 - 1; 0 <= c8; c8--) aHh[c8] > aHh[x7] && (x7 = c8);
							return x7
						}(), aHh[x7] < 5) return;
					a9R = aHg[x7] + io.dp(aHh[x7], 2), (aHi[x7] ? function(e2) {
						var cI, aI9, c8, aIA = 0,
							aIB = 0;
						for (; aIB < gP - 1;) {
							for (c8 = aIA + 1; c8 < gP; c8++)
								if (aHk[c8]) {
									aIB = c8;
									break
								} cI = aIB - aIA + 1, aHu(dt[e2 + eJ * aIA], 0 === aIA ? aHl[e2] : aHf[aI9 - 1] - aHf[aI9 - 2], cI), aI0(dt[aIB * eJ + e2], cI), aHw(e2, aIA, !1, cI), aI9 = cI, aIA = aIB
						}
						aHj[e2] = !0
					} : function(e3) {
						var cI, aI9, c8, aIA = 0,
							aIB = 0;
						for (; aIB < eJ - 1;) {
							for (c8 = aIA + 1; c8 < eJ; c8++)
								if (aHj[c8]) {
									aIB = c8;
									break
								} cI = aIB - aIA + 1, aHu(dt[e3 * eJ + aIA], 0 === aIA ? aHm[e3] : aHf[aI9 - 1] - aHf[aI9 - 2], cI), aI0(dt[e3 * eJ + aIB], cI), aHw(aIA, e3, !0, cI), aI9 = cI, aIA = aIB
						}
						aHk[e3] = !0
					})(a9R), aI5(a9R, aHg[x7] + aHh[x7] - a9R, aHi[x7]), aHh[x7] = a9R - aHg[x7] + 1
				}
			}(), e2 = 0; e2 < eJ; e2++)
			if (!aHj[e2])
				for (e3 = 0; e3 < gP; e3++) aHk[e3] || ! function(e2, e3) {
					var value = dt[e3 * eJ + e2 - 1] + dt[(e3 - 1) * eJ + e2],
						wO = 2;
					aHj[e2 + 1] && (wO++, value += dt[e3 * eJ + e2 + 1]);
					aHk[e3 + 1] && (wO++, value += dt[(e3 + 1) * eJ + e2]);
					dt[e3 * eJ + e2] = io.dp(value, wO)
				}(e2, e3)
	}, this.a5d = function() {
		return dt
	}, this.aHr = function() {
		dt = null
	}
}

function a4F() {
	function aBY(e2, cI, e3, a9D, aBS, vp) {
		if (!(e3 < 1 || aBS < e3))
			for (var c8 = 0; c8 <= cI; c8++) {
				var mx = kA.a0Z(e2, e3);
				if (a9D(mx)) return mx >> 2;
				e2 += vp
			}
		return -1
	}

	function aBc(e3, cI, e2, a9D, aBR, vp) {
		if (!(e2 < 1 || aBR < e2)) {
			cI = Math.max(cI, 0);
			for (var c8 = 0; c8 <= cI; c8++) {
				var mx = kA.a0Z(e2, e3);
				if (a9D(mx)) return mx >> 2;
				e3 += vp
			}
		}
		return -1
	}

	function aBg(a0U, a0V, aBK) {
		return -1 !== a0V && (-1 === a0U || kA.a0W(a0V, aBK) < kA.a0W(a0U, aBK)) ? a0V : a0U
	}
	this.aF3 = function(aBK) {
		return this.pO(aBK, function(mx) {
			return n0.a2R(mx)
		})
	}, this.aF5 = function(aBK) {
		return this.pO(aBK, function(mx) {
			return n0.a2G(mx, bz.cr)
		})
	}, this.pO = function(aBK, a9D) {
		return function(aBK, aBL, a9D) {
			for (var rP = kA.kE(aBK), rS = kA.kG(aBK), aBR = c2.k0 - 2, aBS = c2.k1 - 2, aBT = -1, by = 0; by < aBL; by++) {
				var aBU = Math.max(rP - by, 1),
					aBV = Math.max(rS - by, 1),
					aBW = Math.min(rP + by, aBR),
					aBX = Math.min(rS + by, aBS),
					a0U = aBY(rP, aBW - rP, rS - by, a9D, aBS, 1),
					a0V = aBY(rP - 1, rP - aBU - 1, rS - by, a9D, aBS, -1),
					aBW = aBY(rP, aBW - rP, rS + by, a9D, aBS, 1),
					aBU = aBY(rP - 1, rP - aBU - 1, rS + by, a9D, aBS, -1),
					aBb = aBc(rS, aBX - rS - 1, rP - by, a9D, aBR, 1),
					aBd = aBc(rS - 1, rS - aBV - 2, rP - by, a9D, aBR, -1),
					aBX = aBc(rS, aBX - rS - 1, rP + by, a9D, aBR, 1),
					aBV = aBc(rS - 1, rS - aBV - 2, rP + by, a9D, aBR, -1);
				if (aBT = aBg(aBT, a0U, aBK), aBT = aBg(aBT, a0V, aBK), aBT = aBg(aBT, aBW, aBK), aBT = aBg(aBT, aBU, aBK), aBT = aBg(aBT, aBb, aBK), aBT = aBg(aBT, aBd, aBK), aBT = aBg(aBT, aBX, aBK), 0 <= (aBT = aBg(aBT, aBV, aBK)) && by *
					by >= kA.a0W(aBT, aBK)) return aBT
			}
			return -1
		}(aBK, kA.a0F(), a9D)
	}
}

function a3z() {
	this.aIE = new aIF, this.qE = new aIG, this.hR = new aIH, this.cF = new aII
}

function aB2() {
	iU.dI(), iY.dI(), iS.aIJ(), y.z.dI()
}

function aB9() {
	a2j.dI(), a2a.dI(), mB.dI(), mD.dI(), qz.dI(), mh.dI(), fk.dI(), g6.z.dI(), en.xs(), iQ.dI(), qV.dI(), cy.dI(), iY.dI(), iY.tW(), iS.dI(), a2q.dI(), iR.dI(), iW.dI(), a2o.rN(), iU.dI(), a2m.dI(), gp.dI(), cw.dI(), ch.dI(), go.dI(), y.z.dI(), y
		.aIK.dI(), br.dI(), xy.xb.dI(), lo.dI(), cm.dI()
}

function aB5() {
	kH.dI(), iZ.dI(), gc.dI(), a2i.dI(), iV.dI(), a2n.dI(), a2o.dI(), bw.lG()
}

function aB7() {
	iQ.sb(!1), iW.sb(), iS.sb(!1), iR.sb(), gp.sb(), cw.sb(), iY.sb(!1), go.ew()
}

function aB0() {
	iY.sb(!1) && (cm.cn = !0), y.z.dI()
}

function a3b() {
	var aIL, aIM, a0I, aIN;
	this.g = function() {
		var c8, e2, e3, kx, aIO, eJ, gP, eL, it, iv, dt, es, n9, dq, a8J;
		if (function() {
				if (a0I = !0, aIN = "rgb(" + c2.mp[0] + "," + c2.mp[1] + "," + c2.mp[2] + ")", c2.aIR(c2.c4)) return 1;
				return a0I = !1, 0
			}()) aIM = null;
		else {
			for (aIL = io.dp(96, 4), aIO = 1 === c2.c4 ? (kx = 0, 160) : (kx = 128, 32), aIN = "rgb(" + kx + "," + kx + "," + kx + ")", aIM = new Array(4), c8 = 3; 0 <= c8; c8--) {
				if (aIM[c8] = document.createElement("canvas"), eJ = c8 % 2 == 0 ? c2.k0 : aIL, gP = c8 % 2 == 0 ? aIL : c2.k1 + 2 * aIL, aIM[c8].width = eJ, aIM[c8].height = gP, iv = (it = (eL = aIM[c8].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, eJ, gP)).data, c8 % 2 == 0)
					for (e3 = aIL - 1; 0 <= e3; e3--)
						for (dt = aIO + Math.floor((e3 + 1) * (kx - aIO) / (aIL + 1)), e2 = eJ - 1; 0 <= e2; e2--) iv[es = 4 * ((0 === c8 ? aIL - e3 - 1 : e3) * eJ + e2)] = dt, iv[es + 1] = dt, iv[es + 2] = dt, iv[es + 3] = 255;
				else {
					for (e2 = aIL - 1; 0 <= e2; e2--)
						for (dt = aIO + Math.floor((e2 + 1) * (kx - aIO) / (aIL + 1)), e3 = gP - 1 - aIL; aIL <= e3; e3--) iv[es = 4 * (e3 * eJ + (3 === c8 ? aIL - e2 - 1 : e2))] = dt, iv[es + 1] = dt, iv[es + 2] = dt, iv[es + 3] = 255;
					for (dq = 1; 0 <= dq; dq--)
						for (e2 = aIL - 1; 0 <= e2; e2--)
							for (e3 = aIL - 1; 0 <= e3; e3--) n9 = (Math.pow(e2 * e2 + e3 * e3, .5) + 1) / (aIL + 1), dt = aIO + Math.floor((1 < n9 ? 1 : n9) * (kx - aIO)), iv[es = 4 * ((0 === dq ? aIL - e3 - 1 : e3 + dq * (gP - aIL)) * eJ + (
								1 === c8 ? e2 : aIL - e2 - 1))] = dt, iv[es + 1] = dt, iv[es + 2] = dt, iv[es + 3] = 255
				}
				eL.putImageData(it, 0, 0)
			}
			a8J = aIO, c2.a5Y.fillStyle = "rgb(" + a8J + "," + a8J + "," + a8J + ")", c2.a5Y.fillRect(0, 0, c2.k0, 1), c2.a5Y.fillRect(0, c2.k1 - 1, c2.k0, 1), c2.a5Y.fillRect(0, 0, 1, c2.k1), c2.a5Y.fillRect(c2.k0 - 1, 0, 1, c2.k1)
		}
	}, this.f1 = function() {
		var dq = a0I ? 0 : -aIL;
		aIS(dq, dq, c2.k0 - 2 * dq, c2.k1 - 2 * dq, kX.a03, kX.a04, kX.a05, kX.a06) || (fD.fillStyle = aIN, fD.fillRect(0, 0, eT.eJ, eT.gP))
	}, this.fC = function() {
		a0I || (aIT(0, -aIL, c2.k0, aIL, kX.a03, kX.a04, kX.a05, kX.a06) && fD.drawImage(aIM[0], kX.a01, kX.a02 - aIL), aIT(c2.k0, -aIL, aIL, c2.k1 + 2 * aIL, kX.a03, kX.a04, kX.a05, kX.a06) && fD.drawImage(aIM[1], kX.a01 + c2.k0, kX.a02 - aIL),
			aIT(0, c2.k1, c2.k0, aIL, kX.a03, kX.a04, kX.a05, kX.a06) && fD.drawImage(aIM[2], kX.a01, kX.a02 + c2.k1), aIT(-aIL, -aIL, aIL, c2.k1 + 2 * aIL, kX.a03, kX.a04, kX.a05, kX.a06) && fD.drawImage(aIM[3], kX.a01 - aIL, kX.a02 - aIL))
	}
}

function a83() {
	this.dI = function(player) {
		var aE0 = function(player) {
			for (var a8V = g6.a8V.aIV(), cI = a8V.length, dU = Math.min(cI, 32), sc = qT.u4(cI), c8 = 0; c8 < dU; c8++) {
				var aE0 = (c8 + sc) % cI,
					v = a8V[aE0],
					a0U = v[0],
					a0V = v[v.length - 1];
				if (g6.k7.aIW(player, a0U) && g6.k7.aDy(player, a0V)) return aE0;
				if (g6.k7.aIW(player, a0V) && g6.k7.aDy(player, a0U)) return 0 <= (aE0 = g6.a8V.aE6(a0V, a0U)) ? aE0 : g6.a8V.aE7() ? -1 : g6.a8V.aE8(g6.a8V.aE9(v))
			}
			return -1
		}(player);
		return -1 !== aE0 && (aE0 = g6.a8V.get(aE0), !g6.k7.aIU(player, aE0)) && (er.dT[0] = aE0, !0)
	}
}

function a8Z() {
	var aIX = 0,
		aIY = null;
	this.g = function() {
		null === aIY && (aIY = new Uint16Array(2 * g6.z.a0t)), aIX = 0
	}, this.gh = function(aIZ, a1g) {
		var aIa = aIY;
		aIa[aIX++] = aIZ, aIa[aIX++] = a1g
	}, this.aIb = function(player, aIc) {
		for (var aIa = aIY, cI = aIX, c8 = 0; c8 < cI; c8 += 2)
			if (aIa[c8] === aIc && g6.k7.aId(aIa[c8 + 1]) && player === g6.z.rk[er.mG[2]] >> 3) return !0;
		return !1
	}, this.a1h = function(aIe) {
		var a13 = g6.z.a0y[aIe];
		if (!(a13 < 64)) {
			for (var aIc = g6.z.rj[aIe], aIa = aIY, cI = aIX, c8 = cI - 2; 0 <= c8; c8 -= 2)
				if (aIa[c8] === aIc) {
					{
						aIj = void 0;
						var aIj = aIa[c8 + 1];
						g6.k7.aId(aIj) && g6.a1g.a7Z(er.mG[2])
					}
					aIa[c8] = aIa[cI - 2], aIa[c8 + 1] = aIa[cI - 1], cI -= 2
				} aIX = cI
		}
	}, this.aIg = function(aIh, aIi) {
		for (var aIj = g6.z.rj[aIh], aIc = -1, aIa = aIY, cI = aIX, c8 = 1; c8 < cI; c8 += 2)
			if (aIa[c8] === aIj) {
				aIc = aIa[c8 - 1];
				break
			} if (-1 === aIc) return !1;
		if (!g6.k7.aId(aIc)) return !1;
		var aIe = er.mG[2],
			v = g6.z.a10[aIe];
		if (aIi === v[v.length - 1]) g6.z.a10[aIh] = g6.a8V.aIk(g6.z.a10[aIh], g6.a8V.aE9(v));
		else {
			var aIl = g6.k7.aIm(v, aIi);
			if (-1 === aIl) return !1;
			var aIn = g6.z.a11[aIe];
			aIl === aIn ? (aIe = kA.kB(g6.z.kC[aIe]), g6.z.a10[aIh] = g6.a8V.aIp(g6.z.a10[aIh], v, aIl, aIi, kA.a0T(v[aIl], aIi) > kA.a0T(v[aIl], aIe))) : g6.z.a10[aIh] = g6.a8V.aIp(g6.z.a10[aIh], v, aIl, aIi, aIn < aIl)
		}
		return !0
	}, this.a7Z = function(aIr) {
		var v, dU = g6.z,
			a13 = dU.a0y[aIr];
		return a13 % 64 != 5 && (v = dU.a10[aIr], dU.a0w[aIr] = 65535 - dU.a0w[aIr], dU.a11[aIr] = v.length - dU.a11[aIr] - 2, dU.a10[aIr] = g6.a8V.aE9(v), dU.a0y[aIr] = a13 - a13 % 64 + 5, !0)
	}
}

function aCN() {
	function aIy(dT, x4, x5) {
		var aIz = dT[x4];
		dT[x4] = dT[x5], dT[x5] = aIz
	}
	this.bl = [
		[],
		[],
		[],
		[]
	], this.be = [0, 0, 0, 0], this.bp = [], this.uB = function(aIs, c9, username, aA1, rA, aEt, elo, color, yA, aEv) {
		username = this.aAD(c9, username, aA1, rA, aEt, elo, color, yA, aEv);
		this.bl[aIs].push(username), bf.wa === c9 && (bf.cH = username), bf.oj.wY(c9) && (username.wd = 1), bf.z.bq += 29 === br.bs && bf.z.bt[0] === aIs && 1 === bf.z.bt[2]
	}, this.aAD = function(c9, username, aA1, rA, aEt, elo, color, yA, aEv) {
		return {
			c9: c9,
			username: __fx.nameFilter.filter(username),
			aA1: aA1,
			rA: rA,
			aEt: aEt,
			elo: elo,
			color: color,
			yA: yA,
			aEv: aEv
		}
	}, this.uH = function(h, aIs, aA1, rA, aEt, elo, yA, color) {
		h = this.bl[aIs][h];
		h.aA1 = aA1, h.rA = rA, h.aEt = aEt, h.elo = elo, h.yA = yA, h.color = color, bf.z.bq += 29 === br.bs && bf.z.bt[0] === aIs && 1 === bf.z.bt[2]
	}, this.uI = function(h, aIs, aIt) {
		var h = this.bl[aIs][h],
			aIu = h.username,
			aAH = "Redacted " + hc.wb.sV(h.c9, 2);
		h.username = aIt ? "[" + aB.oB.a4g(aIu) + "] " + aAH : aAH, aIu.indexOf("Redacted") < 0 && (h.aA9 = aIu), bf.oQ.aAJ(h.c9), bf.z.bq += 29 === br.bs && bf.z.bt[0] === aIs && 1 === bf.z.bt[2]
	}, this.uF = function(h, aIv, aIw) {
		var player = this.bl[aIv][h];
		this.uG(h, aIv), this.bl[aIw].push(player), bf.z.bq += 29 === br.bs && bf.z.bt[0] === aIw && 1 === bf.z.bt[2]
	}, this.uG = function(h, aIv) {
		var bg = this.bl[aIv];
		this.bp.push(bg[h]), 1e3 < this.bp.length && this.bp.shift(), h >= this.be[aIv] ? bg[h] = bg[bg.length - 1] : (this.be[aIv]--, 2 === aIv ? (bg.splice(this.be[aIv] + 1, 0, bg[bg.length - 1]), bg.splice(h, 1)) : (bg[h] = bg[this.be[aIv]],
			bg[this.be[aIv]] = bg[bg.length - 1])), bg.pop(), bf.z.bq += 29 === br.bs && bf.z.bt[0] === aIv && 1 === bf.z.bt[2]
	}, this.uE = function(h, oE) {
		bf.z.bq += 29 === br.bs && bf.z.bt[0] === oE && 1 === bf.z.bt[2];
		var bg = this.bl[oE],
			hm = bg[h];
		if (2 === oE)
			if (h >= this.be[oE]) {
				bf.oj.join(hm);
				for (var aIx = this.be[oE], elo = hm.elo; aIx && elo > bg[aIx - 1].elo;) aIx--;
				bg[h] = bg[this.be[oE]], bg.splice(this.be[oE]++, 1), bg.splice(aIx, 0, hm)
			} else bg.splice(this.be[oE]--, 0, hm), bg.splice(h, 1);
		else h >= this.be[oE] ? (bf.oj.join(hm), aIy(bg, this.be[oE]++, h)) : aIy(bg, --this.be[oE], h)
	}, this.aAC = function(c9) {
		for (var bl = this.bl, cI = bl.length, c8 = 0; c8 < cI; c8++)
			for (var bg = bl[c8], dU = bg.length, dq = 0; dq < dU; dq++)
				if (c9 === bg[dq].c9) return bg[dq];
		return null
	}
}

function aIG() {
	this.aJ0 = function() {
		for (var es, cI = en.ep, wG = en.em, jb = ef.jb, a9C = this.qF(), c8 = 0; c8 < cI; c8++) es = wG[c8], aB.lk.qD(es) || (jb[es] = a9C);
		var jY = ef.jY,
			jZ = ef.jZ,
			ja = ef.ja,
			jc = ef.jc,
			cI = bz.fj;
		for (c8 = 0; c8 < cI; c8++)(0 === jc[c8] || ja[c8] < 1 || 2 * jY[c8] > 3 * (jZ[c8] + ja[c8])) && (jb[c8] = 0);
		var aJ1 = 0;
		for (c8 = 0; c8 < cI; c8++) aJ1 += 0 < jb[c8];
		return aJ1
	}, this.qF = function() {
		return Math.min(65535, cm.lJ())
	}
}

function c0() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.c7 = null
}

function aJ2() {
	this.g = function() {
		8 === bz.qS && iU.a6i()
	}, this.aJ3 = function(aJ4) {
		var elo = bz.data.elo,
			iE = (elo[aJ4] - elo[1 - aJ4]) / 10,
			iE = 8 / (1 + Math.pow(2, iE / 32)),
			iE = Math.floor(10 * iE + .5),
			aJ6 = elo[aJ4] + iE,
			a6o = this.a6k(aJ6),
			elo = this.a6k(elo[1 - aJ4] - iE),
			iE = (0 === aJ4 ? iU.a6n(a6o, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : iU.a6n(elo, a6o, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aJ6 * io.sqrt(aJ6) >> 8),
			elo = ((1 + bz.a63) * iE / 100).toFixed(2);
		aJ4 === bz.cr ? iU.qY(640, L(268, [elo]), 40, 0, dK.aL, dK.aI, -1, !1) : iU.qY(640, L(269, [ef.gj[aJ4], elo]), 40, 0, dK.aL, dK.aI, -1, !1)
	}, this.a6k = function(elo) {
		return 16e3 === (elo = io.du(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function a8P() {
	function aJ9(rP, sn, sp) {
		for (var oG = Math.min(sn, sp), fs = Math.max(sn, sp), e3 = oG + 1; e3 < fs; e3++)
			if (!n0.a0I(kA.a0Z(rP, e3))) return;
		return 1
	}

	function aJA(rS, sm, so) {
		for (var oG = Math.min(sm, so), fs = Math.max(sm, so), e2 = oG + 1; e2 < fs; e2++)
			if (!n0.a0I(kA.a0Z(e2, rS))) return;
		return 1
	}

	function aJB(sm, sn, so, sp, aE4, aDx) {
		for (var cI = Math.min(Math.abs(so - sm), Math.abs(sp - sn)), e4 = Math.sign(so - sm), e5 = Math.sign(sp - sn), c8 = 0; c8 < cI; c8++)
			if (!n0.a0I(kA.a0Z(sm += e4, sn += e5))) return null;
		return sm === so ? aJ9(sm, sn, sp) ? new Uint32Array([aE4, kA.rX(sm, sn), aDx]) : null : aJA(sn, sm, so) ? new Uint32Array([aE4, kA.rX(sm, sn), aDx]) : null
	}
	this.mL = function(aE4, aDx) {
		aE4 = function(aE4, aDx) {
			var sm = kA.kE(aE4),
				sn = kA.kG(aE4),
				so = kA.kE(aDx),
				sp = kA.kG(aDx);
			if (sm === so) {
				if (aJ9(sm, sn, sp)) return new Uint32Array([aE4, aDx])
			} else {
				if (sn !== sp) return aJB(sm, sn, so, sp, aE4, aDx) || aJB(so, sp, sm, sn, aE4, aDx);
				if (aJA(sn, sm, so)) return new Uint32Array([aE4, aDx])
			}
			return null
		}(aE4, aDx);
		return null === aE4 ? -1 : g6.a8V.aE8(aE4)
	}
}

function a7y() {
	var aJC, aJE = new Uint16Array(8);

	function aJH(size, player) {
		for (var c8 = ef.jU[player].length - 1; size <= c8; c8--) n0.a2Z(ef.jU[player][c8], player)
	}
	this.g = function() {
		aJC = 0
	}, this.m3 = function(player, lx) {
		return er.m0[1] = ef.jU[player].length, er.m0[0] === bz.fi ? fk.m2.aJF(player) : this.aJG(player, er.m0[0]), (0 !== er.m0[1] || 0 !== ef.jU[player].length) && !(!lx && er.m0[1] === ef.jU[player].length || (er.m0[0] === bz.fi ? ef.jZ[
			player]++ : ef.ja[player]++, 0))
	}, this.m6 = function(player) {
		aJH(er.m0[1], player), ly.gh(player, er.mC[0], er.m0[0]), mh.mi(player, !1)
	}, this.aJI = function(player, lt, cI, me) {
		var aJJ = io.dp(12 * ef.g5[player], 1024);
		me -= me >= io.dp(ef.g5[player], 2) ? aJJ : 0, aJH(cI, player), ly.gh(player, me, lt), ef.g5[player] -= me + aJJ, mh.mi(player, !1)
	}, this.aJG = function(player, lt) {
		for (var a0i, mz = n0.mz, c8 = ef.jV[player].length - 1; 0 <= c8; c8--)
			if (n0.a2O(ef.jV[player][c8]))
				for (a0i = 3; 0 <= a0i; a0i--)
					if (n0.ra(ef.jV[player][c8] + mz[a0i]) && n0.rb(ef.jV[player][c8] + mz[a0i]) === lt) {
						ef.jU[player].push(ef.jV[player][c8]);
						break
					}
	}, this.aJF = function(player) {
		for (var mz = n0.mz, c8 = ef.jV[player].length - 1; 0 <= c8; c8--)
			if (n0.a2O(ef.jV[player][c8]))
				for (var a0i = 3; 0 <= a0i; a0i--)
					if (n0.rd(ef.jV[player][c8] + mz[a0i])) {
						ef.jU[player].push(ef.jV[player][c8]);
						break
					}
	}, this.aJK = function(player, aJL) {
		var c8, dq, a0i, aFC, cI = ef.jV[player].length,
			iE = 256 <= cI ? 12 : 32 <= cI ? 6 : 1,
			oG = cI - 1 - qT.u4(iE),
			mz = n0.mz;
		aJC = 0;
		loop: for (c8 = oG; 0 <= c8; c8 -= iE)
			for (a0i = 3; 0 <= a0i; a0i--)
				if ((aFC = n0.rd(ef.jV[player][c8] + mz[a0i]) ? bz.fi : n0.rb(ef.jV[player][c8] + mz[a0i])) === bz.fi || n0.ra(ef.jV[player][c8] + mz[a0i]) && aFC !== player && (aJL || nI.r7(player, aFC))) {
					for (dq = aJC - 1; 0 <= dq; dq--)
						if (aJE[dq] === aFC) continue loop;
					if (aJE[aJC] = aFC, 8 <= ++aJC) return !0
				}
		return 0 < aJC
	}, this.aJM = function(player, aJL) {
		var c8, a0i, aFC, mz = n0.mz;
		for (aJC = 0, c8 = ef.jV[player].length - 1; 0 <= c8; c8--)
			for (a0i = 3; 0 <= a0i; a0i--)
				if ((aFC = n0.rd(ef.jV[player][c8] + mz[a0i]) ? bz.fi : n0.rb(ef.jV[player][c8] + mz[a0i])) === bz.fi || n0.ra(ef.jV[player][c8] + mz[a0i]) && aFC !== player && (aJL || nI.r7(player, aFC))) return aJE[aJC++] = aFC, !0;
		return !1
	}, this.aJN = function() {
		for (var dr, c8 = aJC - 1; 0 <= c8; c8--)
			if (aJE[c8] === bz.fi) {
				for (aJC--, dr = c8; dr < aJC; dr++) aJE[dr] = aJE[dr + 1];
				return !0
			} return !1
	}, this.aJO = function(player) {
		for (var dr, c8 = aJC - 1; 0 <= c8; c8--)
			if (ly.lz(player, aJE[c8]))
				for (aJC--, dr = c8; dr < aJC; dr++) aJE[dr] = aJE[dr + 1];
		return 0 === aJC
	}, this.aJP = function() {
		for (var c8 = aJC - 1; 0 <= c8; c8--)
			if (aB.lk.qD(aJE[c8])) return !0;
		return !1
	}, this.aJQ = function() {
		for (var c8 = aJC - 1; 0 <= c8; c8--) aB.lk.qD(aJE[c8]) || (aJE[c8] = aJE[--aJC]);
		return 0 < aJC
	}, this.aJR = function(player) {
		for (var dr, aJS = aJE[0], aJT = ef.g5[aJS] + ly.np(aJS, player), c8 = aJC - 1; 1 <= c8; c8--)(dr = ef.g5[aJE[c8]] + ly.np(aJE[c8], player)) < aJT && (aJS = aJE[c8], aJT = dr);
		return aJS
	}, this.aJU = function(player) {
		var gP, aJV = aJE[0];
		if (1 !== aJC)
			for (var aJW = io.dp(ef.jR[player] + ef.jP[player], 2), aJX = io.dp(ef.jS[player] + ef.jQ[player], 2), n9 = aJY(aJW - io.dp(ef.jR[aJV] + ef.jP[aJV], 2)) + aJY(aJX - io.dp(ef.jS[aJV] + ef.jQ[aJV], 2)), c8 = aJC - 1; 1 <= c8; c8--)(gP =
				aJY(aJW - io.dp(ef.jR[aJE[c8]] + ef.jP[aJE[c8]], 2)) + aJY(aJX - io.dp(ef.jS[aJE[c8]] + ef.jQ[aJE[c8]], 2))) < n9 && (n9 = gP, aJV = aJE[c8]);
		return aJV
	}, this.aJZ = function() {
		for (var aJa = aJE, aJb = aJa[0], g5 = ef.g5, aJc = g5[aJb], c8 = aJC - 1; 1 <= c8; c8--) {
			var es = aJa[c8],
				dr = g5[es];
			aJc < dr && (aJb = es, aJc = dr)
		}
		return aJb
	}, this.aJd = function() {
		return aJE[qT.u4(aJC)]
	}
}

function aJe() {
	this.aES = null, this.aET = null, this.aEU = null, this.aEV = null, this.aEX = null, this.aEW = null, this.aJf = "";
	var aJg = 0;
	this.g = function() {
		this.aES = [], this.aET = [], this.aEU = [], this.aEV = [], this.aEX = [0], this.aEW = [0], aJg = 0, this.aJf = ""
	}, this.lq = function(id, dw, dx, dy) {
		bz.co || 2 === bz.gb || (0 === this.aEX[aJg] && (this.aEW[aJg] ? (this.aEX.push(1), this.aEW.push(0), aJg++) : this.aEX[aJg] = 1), this.aES.push(id), this.aET.push(dw), this.aEU.push(void 0 === dx ? 0 : dx), this.aEV.push(void 0 === dy ?
			0 : dy), this.aEW[aJg]++)
	}, this.dI = function() {
		0 === this.aEX[aJg] ? this.aEW[aJg]++ : (this.aEX.push(0), this.aEW.push(0), aJg++)
	}
}

function aCS() {
	var aJh = 0,
		aJi = "",
		aJj = 0,
		aJk = 0,
		aJl = 0;

	function pE(pL) {
		y.pS.l1(3, pL)
	}

	function aJv(el) {
		aJh = 1, bf.message.uS({
			id: 6,
			value: el
		})
	}

	function aJp(oO) {
		var aK0 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return oO.match(aK0)
	}
	this.pO = function(oO) {
		var aJm, dT, aJr;
		if (aJh) return aJh = 0, "yes" === (aJm = oO.toLowerCase()) || "y" === aJm ? void pE(aJi) : void bf.message.uS({
			id: 5,
			uQ: 7
		});
		!(oO.indexOf("@") < 0) && (aJm = aJp(oO)) ? (aJi = oO, dT = function(aJo) {
			for (var cI = aJo.length, aJx = [0, 0, 0, 0], c8 = 0; c8 < cI; c8++)
				for (var eJ = aJo[c8], dq = 0; dq < 4; dq++) eJ === "@room" + (dq + 1) && (aJx[dq] = 1);
			if ((aJk = aB.pr.a7F(aJx)) % 4 == 0) return aB.pr.aJy(bf.bg.bl);
			for (dq = 0; dq < 4; dq++) aJx[dq] = aJx[dq] ? bf.bg.bl[dq] : [];
			return aB.pr.aJy(aJx)
		}(aJm), function(aJo, aJr, oO) {
			if (!aJj) return;
			for (var cI = aJr.length, c8 = 0; c8 < cI; c8++) 2 === aJr[c8].id && (oO = oO.replace(aJo[aJr[c8].h], "@" + aJr[c8].dt));
			return aJh = 1, pE((aJi = oO).slice(0, 126) + "|"), 1
		}(aJm, aJr = function(aJo) {
			for (var aJr = [], cI = (aJl = aJj = 0, aJo.length), c8 = 0; c8 < cI; c8++) {
				var eJ = aJo[c8],
					dU = eJ.length;
				aB.oB.startsWith(eJ, "@[") ? dU <= 9 && aB.oB.pU(eJ, "]") && aJr.push({
					id: 0,
					dt: eJ.substring(2, dU - 1).toUpperCase()
				}) : 6 === dU ? aB.oB.startsWith(eJ, "@room") || (aJl++, aJr.push({
					id: 1,
					dt: j8.wb.a8E(eJ.substring(1), 5)
				})) : 1 < dU && dU < 5 && 0 <= (dU = hv.data.a5E(eJ.substring(1))) && (aJr.push({
					id: 2,
					dt: dU,
					h: c8
				}), aJj = 1)
			}
			return aJr
		}(aJm), oO) || (0 === aJr.length ? aJk || function(aJo) {
			for (var cI = aJo.length, c8 = 0; c8 < cI; c8++) {
				var eJ = aJo[c8];
				if ("@all" === eJ || "@everyone" === eJ) return 1
			}
			return
		}(aJm) ? aJv(dT.length) : pE(oO) : aJm.length === aJl ? pE(oO) : (function(dT, aJr) {
			var dU = aJr.length;
			if (0 === dU) return;
			var cI = dT.length;
			loop: for (var c8 = cI - 1; 0 <= c8; c8--) {
				for (var dq = 0; dq < dU; dq++)
					if (0 === aJr[dq].id) {
						if (aJr[dq].dt === aB.oB.a4g(dT[c8].username)) continue loop
					} else if (1 === aJr[dq].id && aJr[dq].dt === dT[c8].c9) continue loop;
				dT[c8] = dT[--cI], dT.pop()
			}
		}(dT, aJr), aJv(dT.length)))) : pE(oO)
	}, this.uP = function(oO) {
		var aJo = aJp(oO);
		if (aJo)
			for (var a4z = new RegExp("^[0-9]+$"), cI = aJo.length, c8 = 0; c8 < cI; c8++) {
				var eJ = aJo[c8].substring(1),
					dU = eJ.length;
				1 <= dU && dU <= 3 && a4z.test(eJ) && (dU = parseInt(eJ, 10), !isNaN(dU)) && 0 <= dU && dU < hv.data.dT.length && (oO = oO.replace("@" + eJ, "@" + hv.data.dT[dU]))
			}
		return oO
	}
}

function a8H() {
	var aK1, aK2 = 8,
		aK3 = null;

	function aK8(iv, k9, h) {
		k9 *= 4;
		iv[k9] = 255, iv[1 + k9] = 255, iv[2 + k9] = h, iv[3 + k9] = 255
	}

	function aKA(hB, aIN) {
		var e2, e3, e4, k9, aKB, aKC, tH = aK2,
			it = aB.dE.getImageData(hB, tH, tH),
			iv = it.data,
			dU = (tH >> 1) - .5,
			aKE = aB.pr.aKF(aIN, .5);
		for (aB.pr.aKG(aIN, aKE, 300) || aB.pr.aKH(aIN, 100), e3 = 0; e3 < tH; e3++)
			for (e2 = 0; e2 < tH; e2++) aKC = (tH - 1.5) * (tH - 1.5) / 4, iv[k9 = 4 * (e3 * tH + e2)] = (aKB = (e4 = (e4 = e2 - dU) * e4 + (e4 = e3 - dU) * e4) <= (tH - 4.5) * (tH - 4.5) / 4 ? aKE : aIN)[0], iv[1 + k9] = aKB[1], iv[2 + k9] = aKB[2],
				iv[3 + k9] = aKC < e4 ? 0 : 255;
		hB.putImageData(it, 0, 0)
	}
	this.g = function() {
		var h, tH, tN, hB, it, iv;
		(aK1 = aK1 || new Array(bz.fi)).fill(null), h = 255, tH = aK2 + 4, tN = aB.dE.i9(tH, tH), hB = aB.dE.getContext(tN, !0), it = aB.dE.getImageData(hB, tH, tH), aK8(iv = it.data, tH + 1, h), aK8(iv, tH + 2, h), aK8(iv, 2 * tH + 1, h), aK8(
				iv, 2 * tH - 3, h), aK8(iv, 2 * tH - 2, h), aK8(iv, 3 * tH - 2, h), aK8(iv, tH * (tH - 3) + 1, h), aK8(iv, tH * (tH - 2) + 1, h), aK8(iv, tH * (tH - 2) + 2, h), aK8(iv, tH * (tH - 2) - 2, h), aK8(iv, tH * (tH - 1) - 3, h), aK8(iv,
				tH * (tH - 1) - 2, h), hB.putImageData(it, 0, 0), aK3 = tN,
			function() {
				if (bz.eN)
					for (var tN = new Array(eb.ec.length), cI = bz.fi, aK6 = aK1, a2A = eb.a2A, c8 = 0; c8 < cI; c8++) {
						var a9R = a2A[c8];
						tN[a9R] || (tN[a9R] = function(a9R) {
							var tN = aB.dE.i9(aK2, aK2),
								hB = aB.dE.getContext(tN, !0),
								dT = er.a28;
							return dT.set(eb.xX[a9R]), aKA(hB, dT), tN
						}(a9R)), aK6[c8] = tN[a9R]
					}
			}()
	}, this.fC = function() {
		var c8, player, aKI, e8, me, a0O, aKK, aKM, aKN, kC = g6.z.kC,
			rk = g6.z.rk,
			ri = g6.z.ri,
			a0z = g6.z.a0z,
			aKO = aK1,
			aKP = bz.cr,
			cI = g6.z.g8,
			aKQ = eT.eJ,
			aKR = eT.gP,
			a1F = c2.k0 << 4,
			n6 = jv,
			mx = n6 / aK2,
			kD = ju / n6,
			kF = jw / n6,
			e4 = (aKQ + ju) / n6 - kD,
			e5 = (aKR + jw) / n6 - kF,
			hB = fD;
		for (hB.imageSmoothingEnabled = n6 < 9, aB.dE.textAlign(hB, 1), aB.dE.textBaseline(hB, 1), c8 = 0; c8 < cI; c8++) player = rk[c8] >> 3, me = ri[c8], aKI = .9 + .1 * Math.log10(me), e8 = (a0O = kC[c8]) % a1F / 16 - aKI, a0O = aKR * (Math
			.floor(a0O / a1F) / 16 - aKI - kF) / e5, aKK = -2 * (aKN = n6 * aKI) * (1 + (aKM = +(player === aKP)) / 8), aKM = aKM * aKN / 4, (aKN = aKQ * (e8 - kD) / e4) < aKK || a0O < aKK || aKQ + aKM < aKN || aKR + aKM < a0O || (e8 = 2 *
			aKI * mx, aKK = aKI * n6, null === (aKM = aKO[player]) && (aKO[player] = aKM = function(player) {
				var tN = aB.dE.i9(aK2, aK2);
				return aKA(aB.dE.getContext(tN, !0), n0.a27(player)), tN
			}(player)), player === aKP && (hB.setTransform(e8, 0, 0, e8, aKN - 2 * e8, a0O - 2 * e8), hB.drawImage(aK3, 0, 0)), hB.setTransform(e8, 0, 0, e8, aKN, a0O), hB.drawImage(aKM, 0, 0), (aKI = Math.floor(function(me) {
				if (me < 1e3) return .42;
				if (me < 1e4) return .34;
				if (me < 1e6) return .26;
				if (me < 1e8) return .19;
				return .15
			}(me) * aKK)) < 6) || (hB.setTransform(1, 0, 0, 1, 0, 0), hB.fillStyle = a0z[c8] ? dK.au : dK.aL, hB.font = aB.dE.f9(1, aKI), hB.fillText(aB.oB.sV(me), aKN + aKK, a0O + aKK + .1 * aKI));
		hB.imageSmoothingEnabled = !1, hB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aKU() {
	this.jE = function(size) {
		for (var a52 = ft, dT = [], c8 = 0; c8 < size; c8++) dT.push(String.fromCharCode(a52.fu(16)));
		return dT.join("")
	}, this.aKV = function(dZ) {
		return 20 < (dZ = dZ.trim()).length ? dZ.substring(0, 20) : dZ
	}
}

function a3o() {
	function aKX(key) {
		var aKZ;
		return "undefined" == typeof URLSearchParams || (aKZ = window.location.search, "string" != typeof(aKZ = new URLSearchParams(aKZ).get(key))) || aKZ.length < 1 ? null : aKZ
	}
	this.bd = function() {
		if (0 !== cZ.id) return !1;
		if (! function() {
				var value = aKX("account");
				if (!value && !(value = aKX("a"))) return void a2p.clear();
				return a2p.clear(), br.cP(8, br.bs, new d4(1e3, {
					action: 0,
					c9: value,
					y5: 0
				})), 1
			}()) {
			var value = aKX("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			br.cP(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aKY = new URL(window.location.href);
		aKY.search = "";
		try {
			return history.replaceState(null, "", aKY.toString()), !0
		} catch (a6) {
			console.log("error 352: " + a6)
		}
		return !1
	}, this.aKb = function(key, value) {
		if (0 === cZ.id) try {
			var aKY = new URL(window.location.href),
				es = aKY.searchParams;
			es.set(key, value), aKY.search = es.toString(), history.replaceState(null, "", aKY.toString())
		} catch (a6) {
			console.log("error 358: " + a6)
		}
	}
}

function ce(pH, df) {
	var dh;
	this.resize = function() {
		for (var c8 = 0; c8 < pH.length; c8++) aB.dE.lg(pH[c8].button);
		dh.style.gap = dh.style.padding = aB.dE.dj(dk.dl)
	}, (dh = document.createElement("div")).style.display = "grid", dh.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", dh.style.overflowY = "auto", dh.style.gridAutoRows = "5.3em", dh.style.maxHeight = "100%";
	for (var c8 = 0; c8 < pH.length; c8++) pH[c8].a7P(1), dh.appendChild(pH[c8].button);
	df.appendChild(dh)
}

function a35() {
	var gM = new Uint8Array(bz.fi),
		aKc = new Uint16Array(bz.fi),
		aKd = new Uint16Array(bz.fi),
		aKe = new Uint8Array(bz.fi),
		aKf = (this.me = new Uint8Array(bz.fi), new Uint16Array(bz.fi)),
		aKg = new Uint16Array(bz.fi);

	function aKq(c8) {
		gM[c8] = 1 + io.dp(aKf[c8] * qT.random(), 10 * qT.value(100))
	}
	this.a6a = null, this.aKh = [97, 94, 70, 40, 20, 0, 100], this.aKi = [500, 450, 400, 300, 80, 50, 100], this.aKj = [0, 0, 5, 25, 50, 100, 0], this.aKk = [60, 74, 112, 200, 256, 512, 512], this.a0t = [1, 2, 3, 4, 6, 8, 1], this.vs = [500, 450,
		400, 300, 80, 50, 100
	], this.aKl = [100, 150, 250, 400, 600, 1e3, 100], this.i7 = function() {
		this.a6a = [L(270), L(271), L(121), L(272), L(273), L(274), "H Bot"]
	}, this.g = function() {
		gM.fill(0), aKc.fill(0), aKd.fill(0), aKe.fill(0), this.me.fill(0), aKf.fill(0), aKg.fill(0);
		var aKm = bz.fj;
		if (9 === bz.qS) this.aKn();
		else if (bz.wx)
			if (3 === bz.data.botDifficultyType)
				for (c8 = bz.fh - 1; 0 <= c8; c8--) {
					var sc = c8 + aKm;
					this.me[sc] = bz.data.botDifficultyData[sc]
				} else if (2 === bz.data.botDifficultyType)
					for (c8 = bz.fh - 1; 0 <= c8; c8--) this.me[sc = c8 + aKm] = bz.data.botDifficultyTeam[eb.ec[eb.eo[sc]]];
				else if (1 === bz.data.botDifficultyType) {
			var aKp = this.a6a.length;
			for (c8 = bz.fh - 1; 0 <= c8; c8--) this.me[c8 + aKm] = c8 % aKp
		} else
			for (aKp = bz.data.botDifficultyValue, c8 = bz.fh - 1; 0 <= c8; c8--) this.me[c8 + aKm] = aKp;
		else
			for (var aKo = 8 === bz.qS ? 1 : 0, c8 = bz.fh - 1; 0 <= c8; c8--) this.me[c8 + aKm] = aKo;
		for (c8 = 0; c8 < aKm; c8++) this.me[c8] = 6;
		var cI = bz.fi;
		for (c8 = 0; c8 < cI; c8++) this.me[c8] <= 2 ? (aKe[c8] = 5, aKf[c8] = aKg[c8] = 1040, 0 === this.me[c8] ? (aKc[c8] = 980, aKd[c8] = 980) : 1 === this.me[c8] ? (aKc[c8] = 980, aKd[c8] = 920, aKf[c8] = aKg[c8] = 1100) : (aKc[c8] = 825,
				aKd[c8] = 750)) : this.me[c8] <= 4 ? (aKe[c8] = 1 + qT.u4(20), 3 === this.me[c8] ? (aKc[c8] = aKd[c8] = 500, aKf[c8] = aKg[c8] = 1e3) : (aKg[c8] = 250 + qT.u4(1501), aKf[c8] = 500 + qT.u4(501), aKc[c8] = 300 + qT.u4(201), aKd[
				c8] = 100 + qT.u4(201))) : this.me[c8] <= 5 ? (aKf[c8] = 1e3, aKg[c8] = 1e3, aKe[c8] = 35 + qT.u4(16), aKc[c8] = 300 + qT.u4(201), aKd[c8] = 50 + qT.u4(101)) : (aKf[c8] = aKg[c8] = 800, aKe[c8] = 5, aKc[c8] = 10, aKd[c8] = 250),
			aKq(c8)
	}, this.aKn = function() {
		for (var mx = qV.zD, aKm = bz.fj, c8 = mx - 1; 0 <= c8; c8--) this.me[c8 + aKm] = 0;
		for (var dr = 0; dr < 6; dr++) {
			for (c8 = mx + qV.zC[dr] - 1; mx <= c8; c8--) this.me[c8 + aKm] = dr;
			mx += qV.zC[dr]
		}
	}, this.aKr = function(es, value) {
		gM[es] = Math.min(value, gM[es])
	}, this.dI = function(es) {
		0 == --gM[es] && ! function(es) {
			(function(es) {
				aKf[es] !== aKg[es] && (aKf[es] += aKf[es] < aKg[es] ? 3 : -3);
				aKc[es] !== aKd[es] && (aKc[es] += aKc[es] < aKd[es] ? aKe[es] : -aKe[es], aKc[es] = (Math.abs(aKc[es] - aKd[es]) <= aKe[es] ? aKd : aKc)[es]);
				gM[es] = io.dp(aKf[es], 10)
			})(es), fk.a7z.aKu(es, io.dp(aKc[es] * ef.g5[es], 1e3))
		}(es)
	}, this.aKv = function(es, el) {
		aKf[es] = aKg[es] = el
	}
}

function a42() {
	this.a0A = !1, this.kh = !1, this.aAq = !1, this.aKw = [0, 0, 0, 0], this.render = function() {
		var kD, kF, kT, kU;
		this.aAq = this.aAq || this.kh, (this.kh || this.a0A && this.aAq) && (kD = kX.a07[0], kF = kX.a07[1], kT = kX.a07[2], kU = kX.a07[3], kD = kD < this.aKw[0] ? this.aKw[0] : kD, kF = kF < this.aKw[1] ? this.aKw[1] : kF, kT = kT > this.aKw[
				2] ? this.aKw[2] : kT, kU = kU > this.aKw[3] ? this.aKw[3] : kU, this.kh = !1, this.a0A = !1, kD === this.aKw[0] && kF === this.aKw[1] && kT === this.aKw[2] && kU === this.aKw[3] ? this.aAr() : kD <= kT && kF <= kU && z6
			.putImageData(z7, 0, 0, kD, kF, kT - kD + 1, kU - kF + 1))
	}, this.aAr = function() {
		this.aAq && this.aKw[2] >= this.aKw[0] && this.aKw[3] >= this.aKw[1] && z6.putImageData(z7, 0, 0, this.aKw[0], this.aKw[1], this.aKw[2] - this.aKw[0] + 1, this.aKw[3] - this.aKw[1] + 1), this.aAq = !1
	}, this.aDL = function() {
		this.aKw[2] >= this.aKw[0] && this.aKw[3] >= this.aKw[1] && z6.putImageData(z7, 0, 0, this.aKw[0], this.aKw[1], this.aKw[2] - this.aKw[0] + 1, this.aKw[3] - this.aKw[1] + 1), this.aAq = !1
	}, this.g = function() {
		var e2, e3;
		this.a0A = !1, this.kh = !1, this.aAq = !1, this.aKw[0] = c2.k0, this.aKw[1] = c2.k1, this.aKw[2] = this.aKw[3] = 0;
		loop: for (e2 = 1; e2 < c2.k0 - 1; e2++)
			for (e3 = c2.k1 - 2; 1 < e3; e3--)
				if (1 === mn[n0.a2B(e2, e3) + 2]) {
					this.aKw[0] = e2;
					break loop
				} loop: for (e3 = 1; e3 < c2.k1 - 1; e3++)
			for (e2 = c2.k0 - 2; 1 < e2; e2--)
				if (1 === mn[n0.a2B(e2, e3) + 2]) {
					this.aKw[1] = e3;
					break loop
				} loop: for (e2 = c2.k0 - 2; 0 < e2; e2--)
			for (e3 = c2.k1 - 2; 1 < e3; e3--)
				if (1 === mn[n0.a2B(e2, e3) + 2]) {
					this.aKw[2] = e2;
					break loop
				} loop: for (e3 = c2.k1 - 2; 0 < e3; e3--)
			for (e2 = c2.k0 - 2; 1 < e2; e2--)
				if (1 === mn[n0.a2B(e2, e3) + 2]) {
					this.aKw[3] = e3;
					break loop
				}
	}
}

function aKx() {
	var cK, fG, fL;
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), fG.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(L(275), [new cN("⬅️ " + L(14), function() {
		br.cP(7, br.on(7).i)
	}), new cN(L(276), function() {
		d1.db.dc(105, j8.wb.a89(fG.aKz[0].tn[0].a6.value, 5)), d1.db.dc(106, j8.wb.a89(fG.aKz[1].tn[0].a6.value, 15)), br.cP(8, br.on(7).i, new d4(18))
	})]), fG = new fJ(cK.cf, ((fL = []).push(function() {
		var fQ = new fR;
		return fQ.fS(L(55)), fQ.fX(new fW({
			value: "",
			h: -1
		})), fQ
	}()), fL.push(function() {
		var fQ = new fR,
			aL3 = (fQ.fS(L(277)), new fW({
				value: "",
				h: -1
			}));
		return aL3.a6.type = "password", fQ.fX(aL3), fQ.fX(new fY([new cN(L(245), function(a6) {
			return a6.textContent === L(245) ? (a6.textContent = L(278), aL3.a6.type = "text") : (a6.textContent = L(245), aL3.a6.type = "password"), !0
		}).button])), fQ
	}()), fL.push(function() {
		var fQ = new fR;
		return fQ.fS(L(279)), fQ.fT(L(280)), fQ.fT(L(281)), fQ.fT(L(282)), fQ
	}()), fL))
}

function a3J() {
	var aL4, aL5, aL6, aL7, aL8, aL9, aLA, aLB, aLC, aLD, aLE, aLF, aLG, aLH, aLI, aLJ, aLK, aLL, aLM, aLN, aLO, aLP, position, aLQ, aLR, aLS, aLT, aLU, aLV = 1,
		sI = 1,
		aLW = "";
	var leaderboardHasChanged = true;
	this.playerPos = bz.cr;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => t1[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(t1[bz.cr]);
	}

	function aLY() {
		aLA.clearRect(0, 0, aL4, fE),
			aLA.fillStyle = aLU ? dK.bG : dK.bC,
			aLA.fillRect(0, 0, aL4, aLF),
			aLA.fillStyle = dK.aH,
			aLA.fillRect(0, aLF, aL4, fE - aLF);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			t1[bz.cr]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aLP = -1;
		if (__fx.leaderboardFilter.enabled && aLP >= __fx.leaderboardFilter.filteredLeaderboard.length) aLP = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aLb(ownClanIndex - position, dK.ak);
			})() :
			(playerPos >= position && aLb(playerPos - position, dK.ak),
				0 !== t1[bz.cr] && 0 === position && aLb(0, dK.bK))
		),
		-1 !== aLP && aLb(aLP, dK.aM),
			aLA.fillStyle = dK.aH,
			//console.log("drawing", aLP),
			aLA.clearRect(0, fE - __fx.leaderboardFilter.tabBarOffset, aL4, __fx.leaderboardFilter.tabBarOffset);
		aLA.fillRect(0, fE - __fx.leaderboardFilter.tabBarOffset, aL4, __fx.leaderboardFilter.tabBarOffset);
		aLA.fillStyle = dK.aL,
			aLA.fillRect(0, aLF, aL4, 1),
			aLA.fillRect(0, fE - __fx.leaderboardFilter.tabBarOffset, aL4, 1),
			__fx.leaderboardFilter.drawTabs(aLA, aL4, fE - __fx.leaderboardFilter.tabBarOffset, dK.ak),
			aLA.fillRect(0, 0, aL4, dk.yz),
			aLA.fillRect(0, 0, dk.yz, fE),
			aLA.fillRect(aL4 - dk.yz, 0, dk.yz, fE),
			aLA.fillRect(0, fE - dk.yz, aL4, dk.yz), aLA.font = aL5, aB.dE.textBaseline(aLA, 1), aB.dE.textAlign(aLA, 1), aLA.fillText(aLW, Math.floor((aL4 + aLF - 22) / 2), Math.floor(aLD + aL6 / 2));
		__fx.playerList.drawButton(aLA, 12, 12, aLF - 22);
		var dq, bv = playerPos < position + aL8 - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) bv = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aL8)
				position = (rivalsCount > aL8 ? rivalsCount : aL8) - aL8;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aL8; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ef.eg[repId], ef.gj[repId], ef.jO[repId]]);
					ef.eg[repId] = rivalsEntry.territory;
					ef.gj[repId] = "[" + rivalsEntry.clan + "]";
					ef.jO[repId] = 0;
				}
				for (aLA.font = aL7, aB.dE.textAlign(aLA, 0), dq = aL8 - bv; 0 <= dq; dq--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[dq + position];
					if (rivalsEntryLeft !== undefined)
						aLc(rivalsEntryLeft.representativeId), aLd(dq, dq + position, rivalsEntryLeft.representativeId);
				}
				for (aB.dE.textAlign(aLA, 2), dq = aL8 - bv; 0 <= dq; dq--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[dq + position];
					if (rivalsEntryRight !== undefined)
						aLc(rivalsEntryRight.representativeId), aLe(dq, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ef.eg[entry[0]] = entry[1];
					ef.gj[entry[0]] = entry[2];
					ef.jO[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aL8)
				position = (result.length > aL8 ? result.length : aL8) - aL8;
			//if (position >= result.length) position = result.length - 1;
			for (aLA.font = aL7, aB.dE.textAlign(aLA, 0), dq = aL8 - bv; 0 <= dq; dq--) {
				const pos = result[dq + position];
				if (pos !== undefined)
					aLc(eh[pos]), aLd(dq, pos, eh[pos]);
			}
			for (aB.dE.textAlign(aLA, 2), dq = aL8 - bv; 0 <= dq; dq--) {
				const pos = result[dq + position];
				if (pos !== undefined)
					aLc(eh[pos]), aLe(dq, eh[pos]);
			}
		} else {
			for (aLA.font = aL7, aB.dE.textAlign(aLA, 0), dq = aL8 - bv; 0 <= dq; dq--)
				aLc(eh[dq + position]), aLd(dq, dq + position, eh[dq + position]);
			for (aB.dE.textAlign(aLA, 2), dq = aL8 - bv; 0 <= dq; dq--)
				aLc(eh[dq + position]), aLe(dq, eh[dq + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == bv && (aLc(bz.cr), aB.dE.textAlign(aLA, 0), aLd(aL8 - 1, t1[bz.cr], bz.cr), aB.dE.textAlign(aLA, 2), aLe(aL8 - 1, bz.cr)), 0 === position && (bv = .7 * aLG / iH.get(4).height, aLA.setTransform(
			bv, 0, 0, bv, Math.floor(aLH + .58 * aLG + .5 * bv * iH.get(4).width), Math.floor(aLD + aL6 + .4 * aLG)), aLA.imageSmoothingEnabled = !0, aLA.drawImage(iH.get(4), -Math.floor(iH.get(4).width / 2), -Math.floor(iH.get(4).height /
			2)), aLA.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aLc(player) {
		bz.eN && (aLA.fillStyle = eb.aH7[eb.a2A[player]])
	}

	function aLb(c8, aLg) {
		aLA.fillStyle = aLg, c8 = aL8 - 1 < c8 ? aL8 - 1 : c8;
		aLg = Math.floor((c8 === aL8 - 1 ? 2 : 0 === c8 ? 1.15 : 1) * aLG), aLg = c8 === aL8 - 2 ? Math.floor(aLF + 9.15 * aLG) - Math.floor(aLF + 8.15 * aLG) : aLg;
		aLA.fillRect(0, Math.floor(aLF + (c8 + (0 === c8 ? 0 : .15)) * aLG), aL4, aLg)
	}

	function aLd(aLi, rA, c8) {
		aLA.fillText(aLL[rA], aLH, Math.floor(aLD + aL6 + (aLi + .5) * aLG)), 1 === ef.jO[c8] && (aLA.font = "italic " + aL7);
		rA = Math.floor(aLD + aL6 + (aLi + .5) * aLG);
		aLA.fillText(ef.gj[c8], aLI, rA), 0 !== ef.jO[c8] && (aLA.font = aL7), c8 < bz.fj && 2 !== ef.jO[c8] || aLA.fillRect(aLI, rA + .35 * aLV, aLK[c8], Math.max(1, .1 * aLV))
	}

	function aLe(aLi, c8) {
		aLA.fillText(ef.eg[c8], aLJ, Math.floor(aLD + aL6 + (aLi + .5) * aLG))
	}
	this.g = function() {
		var c8;
		for (br.z.a5K[0] = 0, aLT = aLS = aLQ = 0, aLU = aLR = !1, aLP = -1, aL8 = cZ.cb.eR() ? 6 : 10, sI = (position = 0) === (sI = d1.d2.data[11].value) ? 10 : 1 === sI ? 5 : 1, aLO = !1, aLM = new Uint16Array(aL8 + 1), aLN = new Uint32Array(
				aL8 + 1), aLC = bz.fi, eh = new Uint16Array(aLC), t1 = new Uint16Array(aLC), c8 = aLC - 1; 0 <= c8; c8--) eh[c8] = c8, t1[c8] = c8;
		this.resize(!0), aLK = new Uint16Array(bz.fi);
		var aLX = Math.floor(aL4 - aLI - aLH - aLB);
		for (aLL = new Array(bz.fi), aLA.font = aL7, c8 = bz.fi - 1; 0 <= c8; c8--) aLL[c8] = c8 + 1 + ".", ef.gj[c8] = aB.eL.a6Y(ef.jN[c8], aL7, aLX), aLK[c8] = Math.floor(aLA.measureText(ef.gj[c8]).width);
		aLY()
	}, this.resize = function(g) {
		if (fE = cZ.cb.eR() ? (aL4 = Math.floor(.335 * eT.eU), Math.floor(aL8 * aL4 / 8)) : (aL4 = Math.floor(.27 * eT.eU), Math.floor(aL8 * aL4 / 10)), aL4 = Math.floor(.97 * aL4), (aL9 = document.createElement("canvas")).width = aL4, aL9
			.height = fE, aLA = aL9.getContext("2d", {
				alpha: !0
			}), aLD = .025 * aL4, aL6 = .16 * aL4, aLE = 0 * aL4, aLF = Math.floor(.45 * aLD + aL6), aLG = (fE - aL6 - 2 * aLD - aLE) / aL8,
			aL9.height = fE += aLG, __fx.leaderboardFilter.tabBarOffset = Math.floor(aLG * 1.3), __fx.leaderboardFilter.verticalClickThreshold = fE - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aL4,
			aL5 = aB.dE.f9(1, Math.floor(.55 * aL6)), aLV = Math.floor((cZ.cb.eR() ? .67 : .72) * aLG), aL7 = aB.dE.f9(0, aLV), aLA.font = aL7, aLH = Math.floor(.04 * aL4), aLI = Math.floor((cZ.cb.eR() ? .195 : .18) * aL4), aLB = Math.floor(aLA
				.measureText("00920600").width), aLA.font = aL5, aLJ = aL4 - aLH, !g) {
			aLA.font = aL7;
			for (var c8 = bz.fi - 1; 0 <= c8; c8--) aLK[c8] = Math.floor(aLA.measureText(ef.gj[c8]).width);
			aLY()
		}
		aLW = aB.eL.a6Y(L(283), aL5, .96 * aL4)
	}, this.aLZ = function() {
		return aL4
	}, this.sb = function(hz, aLa) {
		(aLa || aLO && (hz || cm.lJ() % sI == 0)) && (aLO = !1, aLY())
	}, this.dI = function() {
		! function() {
			for (var dq = aLC - 1; 0 <= dq; dq--) 0 === ef.fo[eh[dq]] && ! function(dq) {
				var aLp = eh[dq];
				aLC--;
				for (var c8 = dq; c8 < aLC; c8++) eh[c8] = eh[c8 + 1], t1[eh[c8]] = c8;
				eh[aLC] = aLp, t1[eh[aLC]] = aLC
			}(dq)
		}();
		for (var aLn, fs = aLC - 1, dq = 0; dq < fs; dq++) ef.eg[eh[dq]] < ef.eg[eh[dq + 1]] && (aLn = eh[dq], eh[dq] = eh[dq + 1], eh[dq + 1] = aLn, t1[eh[dq]] = dq, t1[eh[dq + 1]] = dq + 1);
		! function() {
			for (var ee = aLO, bv = (aLO = !0, t1[bz.cr] >= aL8 - 1 ? aL8 - 2 : aL8 - 1), c8 = bv; 0 <= c8; c8--)
				if (aLM[c8] !== eh[c8] || aLN[c8] !== ef.eg[eh[c8]]) return;
			(bv != aL8 - 2 || aLM[aL8] === t1[bz.cr] && aLN[aL8] === ef.eg[bz.cr]) && (aLO = ee)
		}();
		for (var c8 = aL8 - 1; 0 <= c8; c8--) aLM[c8] = eh[c8], aLN[c8] = ef.eg[eh[c8]];
		aLM[aL8] = t1[bz.cr], aLN[aL8] = ef.eg[bz.cr];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.ub = function(e2, e3) {
		if (aLq(e2, e3)) {
			if (__fx.utils.isPointInRectangle(e2, e3, dk.gap + 12, dk.gap + 12, aLF - 22, aLF - 22)) __fx.playerList.display(ef.jN);
			else {
				if (e3 - dk.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(e2 - dk.gap);
				e2 = aLs(e3);
				0 <= e2 ? (aLQ = cm.gX, aLR = !0, aLS = aLT = e2, h6.vJ() && (e2 = aLt(-1, aLT, aL8), aLP !== (e2 = e2 === aL8 ? -1 : e2)) && (aLP = e2, aLY(), cm.cn = !0)) : (aLU && (aLU = !1, aLY(), cm.cn = !0), br.cP(10, 0, new aLu({
					aLv: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aLY(), cm.cn = !0
	};

	function aLs(e3) {
		return (e3 -= dk.gap + aLF) < 0 ? Math.floor(e3 / aLG) - 1 : e3 < (aL8 - 1) * aLG ? Math.floor(e3 / aLG) : e3 < fE - aLF ? aL8 - 1 : (e3 -= fE - aLF, aL8 + Math.floor(e3 / aLG))
	}

	function aLq(e2, e3) {
		return e2 >= dk.gap && e2 < dk.gap + aL4 && e3 >= dk.gap && e3 < dk.gap + fE
	}
	this.sg = function(e2, e3) {
		var ee, aLr;
		if (__fx.utils.isPointInRectangle(e2, e3, dk.gap + 12, dk.gap + 12, aLF - 22, aLF - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(e2, e3, dk.gap, dk.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), e2 - dk.gap)) return aLr = aLs(e3), e2 = aLq(e2, e3), e3 = !(!(aLr < 0 && e2) || h6.vJ()), aLR ? (ee = position, (position = aLt(0, position += aLS - aLr, bz.fi - aL8)) !== ee ? (aLU = e3,
			aLr = aLt(-1, aLS = aLr, aL8), aLP = aLr = aLr !== aL8 && e2 ? aLr : -1, aLY(), cm.cn = !0) : aLU !== e3 && (aLU = e3, aLY(), cm.cn = !0), !0) : (aLr = (aLr = aLt(-1, aLr, aL8)) === aL8 || !e2 || h6.vJ() ? -1 : aLr, (aLP !==
			aLr || aLU !== e3) && (aLP = aLr, aLU = e3, aLY(), cm.cn = !0))
	}, this.v5 = function(e2, e3) {
		if (!aLR) return !1;
		aLR = !1;
		var aLr = aLs(e3);
		var isEmptySpace = false;
		return h6.vJ() && -1 !== aLP && (aLP = -1, aLY(), cm.cn = !0), cm.gX - aLQ < 350 && aLT === aLr && -1 !== (aLr = (aLr = aLt(-1, aLr, aL8)) !== aL8 && aLq(e2, e3) ? aLr : -1) && (e2 = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aLr + position] === undefined, __fx.leaderboardFilter.rivalsData[aLr + position]?.representativeId ?? bz.cr) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), eh[__fx.leaderboardFilter.filteredLeaderboard[aLr + position] ?? (isEmptySpace = true, t1[bz.cr])]) : eh[aLr + position]),
			aLr === aL8 - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : t1[bz.cr]) >=
			position + aL8 - 1 && (e2 = bz.cr), !isEmptySpace && bz.eN && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(e2, ef.jN, bz.wx), 0 === ef.fo[e2] || isEmptySpace || bz.k2 && !bz.wx && !bz.co &&
			e2 !== bz.cr || kH.k3(e2, 800, !1, 0)), !0
	}, this.ue = function(e2, e3, deltaY) {
		var aLy;
		return !(aLR || bz.eS || (aLy = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aLq(e2, e3)) || (e2 = (e2 = aLt(-1, aLs(e3), aL8)) === aL8 || h6.vJ() ? -1 : e2, 0 < deltaY ? position < bz.fi - aL8 && (position += Math.min(bz.fi - aL8 -
			position, aLy), aLP = e2, aLY(), cm.cn = !0) : 0 < position && (position -= Math.min(position, aLy), aLP = e2, aLY(), cm.cn = !0), 0))
	}, this.fC = function() {
		fD.drawImage(aL9, dk.gap, dk.gap)
	}
}

function aLz() {
	this.aM0 = !1, this.dI = function() {
		cm.lJ() % 250 != 249 || bz.co || (y.kw.hn(+(this.aM0 && ef.fo[bz.cr]), en.ep + g6.z.g8), this.aM0 = !1)
	}
}

function aEb() {
	this.z9 = function(dT) {
		dT.fill(0)
	}, this.aM2 = function(dT) {
		for (var cI = dT.length, c8 = 0; c8 < cI; c8++) dT[c8] = []
	}, this.aKF = function(tX, sh) {
		for (var tY = er.aBo, c8 = 0; c8 < 3; c8++) tY[c8] = sh * tX[c8];
		return tY
	}, this.aKG = function(tX, tY, aM3) {
		for (var iE = 0, c8 = 0; c8 < 3; c8++) iE += Math.abs(tX[c8] - tY[c8]);
		return aM3 <= iE
	}, this.aKH = function(tX, aM4) {
		for (var c8 = 0; c8 < 3; c8++) tX[c8] = io.du(tX[c8] + aM4, 0, 255);
		return tX
	}, this.a7F = function(dT, x4, x5) {
		x5 = x5 || dT.length - 1;
		for (var eM = 0, c8 = x4 = x4 || 0; c8 <= x5; c8++) eM += dT[c8];
		return eM
	}, this.aM5 = function(dT, aM6) {
		for (var c8, x6, cI = dT.length, aM7 = [], dq = cI - 1; 0 <= dq; dq--) {
			for (c8 = x6 = 0; c8 < cI; c8++) aM6(dT[c8]) < aM6(dT[x6]) && (x6 = c8);
			cI--, aM7.push(dT[x6]), dT[x6] = dT[cI], dT.pop()
		}
		return aM7
	}, this.min = function(dT) {
		var c8, dt, cI = dT.length;
		if (0 === cI) return 0;
		for (dt = dT[0], c8 = 1; c8 < cI; c8++) dt = Math.min(dt, dT[c8]);
		return dt
	}, this.max = function(dT) {
		var cI = dT.length;
		if (0 === cI) return 0;
		for (var dt = dT[0], c8 = 1; c8 < cI; c8++) dt = Math.max(dt, dT[c8]);
		return dt
	}, this.aDr = function(dT, dt) {
		for (var cI = dT.length, el = 0, c8 = 0; c8 < cI; c8++) el += dT[c8] > dt;
		return el
	}, this.aM8 = function(n2, n5, min) {
		for (var cI = n5[0], c8 = cI - 1; 0 <= c8; c8--) n2[c8] < min && (n2[c8] = n2[--cI]);
		n5[0] = cI
	}, this.aM9 = function(dT, cI, value) {
		for (var c8 = 0; c8 < cI; c8++) dT[c8] -= value
	}, this.aMA = function(dT) {
		for (var cI = dT.length, c8 = 0; c8 < cI; c8++)
			if ("string" != typeof dT[c8]) return !1;
		return !0
	}, this.xM = function(dZ, dT, aMB) {
		dT.fill(0);
		for (var z2 = dZ.split(","), cI = Math.min(z2.length, dT.length), c8 = 0; c8 < cI; c8++) dT[c8] = Math.min(parseInt(z2[c8]), aMB)
	}, this.aCg = function(dZ, dT, o8) {
		dT.fill("");
		for (var z2 = dZ.split('"'), cI = Math.min(z2.length, 2 * dT.length), sc = 0, c8 = 1; c8 < cI; c8 += 2) dT[sc++] = z2[c8].slice(0, o8)
	}, this.aDq = function(dT, el) {
		if (0 === el) dT.fill(0);
		else {
			var eM = this.a7F(dT),
				cI = dT.length;
			if (0 === eM) dT.fill(io.dp(el, cI));
			else
				for (var c8 = 0; c8 < cI; c8++) dT[c8] = io.dp(el * dT[c8], eM);
			if (0 === (eM = this.a7F(dT))) dT[1] = el;
			else
				for (var sc = 0; eM++ < el;) dT[sc = (sc + 1) % cI] && dT[sc]++
		}
	}, this.aGP = function(dT) {
		if (!dT) return 0;
		var cI = dT.length;
		if (0 === cI) return 0;
		for (var dt = dT[cI - 1], c8 = cI - 2; 0 <= c8; c8--)
			if (dT[c8] !== dt) return c8 + 2;
		return 1
	}, this.ps = function(dT) {
		for (var eM = 0, c8 = 0; c8 < dT.length; c8++) eM += dT[c8].length;
		return eM
	}, this.aJy = function(aMC) {
		for (var dT = [], c8 = 0; c8 < aMC.length; c8++) dT = dT.concat(aMC[c8]);
		return dT
	}, this.has = function(dT, dt) {
		for (var cI = dT.length, c8 = 0; c8 < cI; c8++)
			if (dT[c8] === dt) return !0;
		return !1
	}
}

function aMD(data) {
	var cK, fG;

	function aME(fL, aMi) {
		if (!data.yl) {
			if (data.yZ) {
				if (aMi) return
			} else {
				if (!aMi) return;
				if (data.yA < 1e4) return
			}
			var aMl, fQ = new fR,
				aMj = 1e5 <= data.yA,
				aMk = fQ.fS(aMi ? (aMj ? "⚠️ " : "") + L(368) : L(56)),
				ko = (aMj && (aMk.style.color = "yellow"), aMi ? fQ.fT(L(369, [aB.oB.aMV(data.yA, .01, 0)])) : ((aMl = new fW({
					value: data.ya,
					h: -1
				})).a6.readOnly = !0, aMl.a6.type = "password", fQ.fX(aMl), fQ.fX(new fY([new cN(L(245), function(a6) {
					return a6.textContent === L(245) ? (a6.textContent = L(278), aMl.a6.type = "text") : (a6.textContent = L(245), aMl.a6.type = "password"), !0
				}).button, new cN(L(305), function(a6) {
					return aB.dE.aMY(aMl.a6), aB.dE.kq(a6), !0
				}).button]))), fQ.kn(L(aMi ? 56 : 370)).style.marginTop = "0.75em", new fW({
					value: "",
					h: -1
				}, 0, 0)),
				aMm = (ko.a6.type = "email", ko.a6.autocomplete = "email", ko.a6.name = "email", ko.a6.inputMode = "email", ko.a6.spellcheck = !1, fQ.fX(ko), fQ.fX(new fY([new cN(L(371), function(a6) {
					return y.kr.ks({
						action: 3,
						dZ: ko.a6.value.trim().substring(0, 63)
					}), aB.dE.kq(a6), !0
				}).button])), aMi && fQ.fT(L(372)), fQ.kn(L(373)).style.marginTop = "0.75em", new fW({
					value: "",
					h: -1
				}, 1));
			fQ.fX(aMm), fQ.fX(new fY([new cN(L(374), function() {
				y.kr.a5G({
					action: 4,
					c9: "",
					value: Math.floor(+aMm.a6.value)
				}), br.cP(8, br.hN().i, new d4(18))
			}).button])), fL.push(fQ)
		}
	}
	this.show = function() {
		data.yl && a2p.aKb("account", data.c9), cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), fG.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(data.username, [new cN("⬅️ " + L(14), function() {
		a2p.clear(), br.kl()
	}), new cN(data.yl ? "🔄 " + L(284) : L(285), function() {
		br.cP(8, data.yl ? br.hN().i : void 0, new d4(25, {
			action: 0,
			c9: data.c9,
			y5: data.y5
		}))
	}, 0, 0, 1)]), fG = new fJ(cK.cf, function() {
		var fL = [];
		aME(fL, 1), fL.push(function() {
				var fQ = new fR;
				fQ.fS(L(341)), data.yZ && (fQ.kn("✅ " + L(342)).style.marginBottom = "0.75em");
				var a4h = data.yW;
				a4h < 1 ? (fQ.kn(L(343)), 0 === data.yV ? fQ.fT(L(344)) : 1 === data.yV ? fQ.fT(L(345)) : 2 === data.yV ? fQ.fT(L(346)) : 3 === data.yV ? fQ.fT(L(347)) : 4 === data.yV ? fQ.fT(L(348)) : 5 === data.yV ? fQ.fT(L(349)) :
					6 === data.yV ? fQ.fT(L(350)) : fQ.fT(L(351))) : (fQ.kn(L(352)), a4h = a4h < 2 ? L(353) : a4h < 61 ? 2 === a4h ? L(354) : L(355, [a4h - 1]) : a4h < 84 ? 61 === a4h ? L(356) : L(357, [a4h - 60]) : a4h < 255 ? 84 ===
					a4h ? L(358) : L(359, [a4h - 83]) : L(360), fQ.fT(a4h));
				{
					var tp, aMX;
					fQ.fX(new zb), data.yl && (tp = fQ.fT(), fQ.fX(new fY([new cN(d1.wc.wd(data.c9) ? L(361) : L(362), function(a6) {
						return d1.wc.aC1(data.c9) ? (a6.textContent = L(361), aMX(1)) : (a6.textContent = L(362), aMX(0)), !0
					}).button])), aMX = function(dt) {
						tp.textContent = dt ? L(363) : ""
					}, d1.wc.wd(data.c9) && aMX(1), fQ.fX(new zb))
				}
				var d6, fV = new fW({
					value: data.username,
					h: -1
				});
				fV.a6.readOnly = !0, fQ.fX(fV), fQ.fX(new fY([new cN(L(305), function(a6) {
					return aB.dE.aMY(fV.a6), aB.dE.kq(a6), !0
				}).button])), data.yl || fQ.fT(L(364));
				(data.yb || data.yc || data.yd) && (fQ.fX(new zb), fQ.fT(L(365)), data.yb && (fQ.fT("• Account Timeout").style.color = "orange"), data.yc && ((d6 = fQ.fT("• Muted")).style.color = "orange", d6.style.marginTop = "0.5em"),
					data.yd) && ((d6 = fQ.fT("• Redacted")).style.color = "orange", d6.style.marginTop = "0.5em");
				data.yl && (fQ.fX(new zb), fQ.kn(y.z.dG("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", fQ.fX(new fY([new cN(L(366), function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 0
					}), aB.dE.kq(a6), !0
				}, dK.b1).button])), fQ.fX(new fY([new cN(L(367), function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 1
					}), aB.dE.kq(a6), !0
				}, dK.b1).button])), fQ.fX(new fY([new cN("Cheater", function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 2
					}), aB.dE.kq(a6), !0
				}, dK.b1).button])), fQ.fX(new fY([new cN("False Reporter", function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 3
					}), aB.dE.kq(a6), !0
				}, dK.b1).button])), a4h = "CRTOR" === (a4h = d1.d2.data[105].value) || "ADMIN" === a4h) && (fQ.fX(new fY([new cN("Block Account", function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 4
					}), aB.dE.kq(a6), !0
				}, dK.az).button])), fQ.fX(new fY([new cN("Ban IP", function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 5
					}), aB.dE.kq(a6), !0
				}, dK.az).button])), fQ.fX(new fY([new cN("Gold Seizure", function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 6
					}), aB.dE.kq(a6), !0
				}, dK.az).button])), fQ.fX(new fY([new cN("Remove Punishments", function(a6) {
					return y.kr.a5G({
						action: 3,
						c9: data.c9,
						value: 7
					}), aB.dE.kq(a6), !0
				}, dK.an).button])));
				return fQ
			}()),
			function(fL) {
				var fQ, tp, aMn, aDh, kp, fU, aDn;
				data.yl || ((fQ = new fR).fS(L(375)), (tp = fQ.fT(data.yQ.length + " / 160")).style.textAlign = "center", aMn = !0, (aDh = new xR(0, 1, function(a6) {
					a6 = a6.target.value.length;
					tp.textContent = a6 + " / 160", 160 < a6 ? aMn && (aMn = !1, fU.dL(1)) : aMn || (aMn = !0, fU.dL(0))
				})).a6.rows = 6, aDh.a6.style.fontSize = "1em", aDh.xS(data.yQ), fQ.fX(aDh), 0 !== data.yO ? (fU = new cN(L(376), function() {
					if (!aMn) return !0;
					br.cP(8, br.hN().i, new d4(29, {
						action: 1,
						dZ: aDh.gY().substring(0, 160)
					}))
				}, 0, 0, 1), fQ.fX(new fY([fU.button])), fQ.fX(new fY([new cN(1 === data.yO ? L(377) : L(378), function() {
					br.cP(8, br.hN().i, new d4(29, {
						action: 0,
						dZ: ""
					}))
				}, 0, 0, 1).button])), fQ.fT(1 === data.yO ? L(379, [data.yR - 1]) : L(380, [data.yR - 1])), fQ.fT(L(381, [data.yP]))) : (kp = new cN(L(382), function() {
					if (!aDh.a6.readOnly) return !0;
					br.cP(8, br.hN().i, new d4(29, {
						action: 1,
						dZ: aDh.gY().substring(0, 160)
					}))
				}, 1), fU = new cN(L(250), function(a6) {
					if (a6.textContent === L(250)) {
						if (!aMn) return !0;
						a6.textContent = L(249), aDh.a6.readOnly = !0, kp.dL(0), kp.button.style.color = dK.bL
					} else aDn();
					return !0
				}), fQ.fX(new fY([fU.button])), fQ.fT(L(381, [data.yP])), aDn = function() {
					fU.button.textContent = L(250), aDh.a6.readOnly = !1, kp.dL(1), kp.button.style.color = dK.aL
				}, fQ.fX(new fY([kp.button]))), fL.push(fQ))
			}(fL),
			function(fL) {
				var fQ;
				data.yl && 0 !== data.yO && ((fQ = new fR).fS(L(383)), fQ.tq(data.yQ), fQ.fX(new fY([new cN(L(384, 0, "Report"), function(a6) {
					return y.z.m(0) && (aB.dE.kq(a6), y.kr.a5F({
						action: 5,
						c9: data.c9
					})), !0
				}, 0, 0, 1).button])), fL.push(fQ))
			}(fL), fL.push(function() {
				var fQ = new fR,
					aMU = (fQ.fS(L(286)), fQ.kn(y.z.dG("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(287), L(288), L(289), L(290), L(291), L(292), L(293), L(294), L(295), L(296), L(297), L(298), L(299), L(300)]),
					ey = data.yS;
				return fQ.kn(L(301) + aB.oB.aMV(data.yA, .01, 2) + "<br>" + L(302) + (ey + 1) + " / " + data.y9 + "<br>" + L(303) + aMU[function(ey, yA) {
					if (ey < 10) return 0;
					if (ey < 30) return 1;
					if (ey < 60) return 2;
					if (3e4 <= (yA = io.dp(yA, 100))) return 3;
					if (12e3 <= yA) return 4;
					if (7e3 <= yA) return 5;
					if (3e3 <= yA) return 6;
					if (1e3 <= yA) return 7;
					if (500 <= yA) return 8;
					if (200 <= yA) return 9;
					if (70 <= yA) return 10;
					if (20 <= yA) return 11;
					if (3 <= yA) return 12;
					return 13
				}(ey, data.yA)]), fQ
			}()), data.yl && fL.push(function() {
				var fQ = new fR,
					fV = (fQ.fS(L(304)), fQ.kn(y.z.dG("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new fW({
						value: d1.d2.data[147].value,
						h: -1
					}, 1, void 0, function(a6) {
						d1.db.dc(147, aMX(a6.target.value))
					})),
					kp = (fQ.fX(fV), new cN(L(59), function(a6) {
						return fV.a6.readOnly && y.z.m(0) && (aB.dE.kq(a6), aDn(), y.kr.a5G({
							action: 0,
							c9: data.c9,
							value: parseInt(d1.d2.data[147].value, 10)
						})), !0
					}, 1)),
					fU = new cN(L(250), function(a6) {
						return a6.textContent === L(250) ? (a6.textContent = L(249), fV.a6.readOnly = !0, kp.dL(0), kp.button.style.color = dK.bL, d1.db.dc(147, fV.a6.value), aMX(d1.d2.data[147].value)) : aDn(), !0
					}),
					tp = (fQ.fX(new fY([fU.button])), fQ.fT()),
					aMX = function(dt) {
						tp.innerHTML = br.z.a5O(dt, d1.d2.data[105].value, data.c9)
					},
					aDn = function() {
						fU.button.textContent = L(250), fV.a6.readOnly = !1, kp.dL(1), kp.button.style.color = dK.aL
					};
				return aMX(d1.d2.data[147].value), fQ.fX(new fY([kp.button])), fQ
			}());
		fL.push(function() {
			var fQ = new fR,
				fV = (fQ.fS(L(55)), new fW({
					value: data.c9,
					h: -1
				})),
				aMZ = (fV.a6.readOnly = !0, fQ.fX(fV), fQ.fX(new fY([new cN(L(305), function(a6) {
					return aB.dE.aMY(fV.a6), aB.dE.kq(a6), !0
				}).button])), fQ.fX(new zb), new fW({
					value: data.c9,
					h: -1
				}));
			return fQ.fX(aMZ), fQ.fX(new fY([new cN(L(306), function(a6) {
				br.cP(8, br.hN().i, new d4(25, {
					action: 0,
					c9: aMZ.a6.value,
					y5: 0
				}))
			}).button])), fQ
		}()), data.yl || (fL.push(function() {
			var fQ = new fR,
				aL3 = (fQ.fS(L(277)), new fW(d1.d2.data[106]));
			return aL3.a6.readOnly = !0, aL3.a6.type = "password", fQ.fX(aL3), fQ.fX(new fY([new cN(L(245), function(a6) {
				return a6.textContent === L(245) ? (a6.textContent = L(278), aL3.a6.type = "text") : (a6.textContent = L(245), aL3.a6.type = "password"), !0
			}).button, new cN(L(305), function(a6) {
				return aB.dE.aMY(aL3.a6), aB.dE.kq(a6), !0
			}).button])), fQ.fX(new fY([new cN(L(307), function() {
				br.cP(8, br.hN().i, new d4(15))
			}).button])), fQ.fS(L(279), "0.8em"), fQ.fT(L(308)), fQ.fT(L(309)), fQ.fT(L(310)), fQ
		}()), fL.push(function() {
			var fQ = new fR;
			return fQ.fS(L(311)), fQ.fX(new fY([new cN(L(312), function() {
				br.cP(6, br.hN().i)
			}).button])), fQ.fX(new fY([new cN(L(313), function() {
				d1.db.dc(105, ""), br.cP(8, br.hN().i, new d4(18))
			}).button])), fQ.fX(new fY([new cN(L(314) + d1.d2.data[105].value, function() {
				br.cP(4, 0, new dD(L(315), L(316), !0, [new cN("⬅️ " + L(14), function() {
					br.cP(7, br.on(7).i)
				})]))
			}, dK.b1).button])), fQ
		}()), fL.push(function() {
			function aMb(h) {
				aMa[0].dL(0 === h ? dK.aX : dK.ai), aMa[1].dL(0 === h ? dK.aX : dK.b1), aMa[2].dL(h === ts.tt.length - 1 || h < 5 ? dK.aX : dK.b1)
			}
			var ts, aMa, fQ = new fR;
			fQ.fS(L(321)), fQ.fT(L(322)), d1.z.aMd();
			return aMa = [new cN(L(276), function() {
				var h = Math.min(d1.d2.data[117].value, ts.tt.length - 1);
				h < 1 || (h = d1.z.aMe(h), d1.db.dc(105, h.c9), d1.db.dc(106, h.password), br.cP(8, br.hN().i, new d4(18)))
			}, dK.aX, 1), new cN(L(319), function() {
				var h = Math.min(d1.d2.data[117].value, ts.tt.length - 1);
				if (!(h < 1)) {
					ts.tt[h].remove(), ts.tt.splice(h, 1);
					for (var c8 = h; c8 < ts.tt.length; c8++) ts.tt[c8].name = "" + c8;
					d1.z.aMf(h), h = d1.d2.data[117].value, ts.tt[h].textContent = ts.tt[h].textContent.replace("⚪", "🟢"), aMb(h)
				}
			}, dK.aX, 1), new cN(L(320), function() {
				var h = Math.min(d1.d2.data[117].value, ts.tt.length - 1);
				if (h !== ts.tt.length - 1) {
					for (var c8 = ts.tt.length - 1; h < c8; c8--) ts.tt[c8].remove(), ts.tt.splice(c8, 1), d1.z.aMf(c8);
					aMb(h)
				}
			}, dK.aX, 1)], ts = new fd(d1.d2.data[117], aMb), aMb(0), ts.tt[0].style.marginTop = "0.5em", fQ.fc(ts), fQ.fX(new fY([aMa[0].button])), fQ.fX(new fY([aMa[1].button])), fQ.fX(new fY([aMa[2].button])), fQ
		}()));
		return fL.push(function() {
				var fQ = new fR,
					aMU = (fQ.fS(L(326)), [L(327), L(328), L(329), L(330)]),
					ey = data.yT;
				return fQ.kn(L(331) + (data.yU / 100).toFixed(2) + "<br>" + L(302) + (ey + 1) + " / " + data.y9 + "<br>" + L(303) + aMU[ey < 10 ? 0 : ey < 50 ? 1 : ey < 200 ? 2 : 3]), fQ
			}()), fL.push(function() {
				var fQ = new fR;
				return fQ.fS(L(323)), fQ.kn(L(324) + aB.oB.aMV(data.y6, .1, 1) + "<br>" + L(302) + (data.y7 + 1) + " / " + data.y9 + "<br>" + L(325) + data.y8), fQ
			}()),
			function(fL) {
				var fQ = new fR,
					aMo = data.yD,
					aMp = (fQ.fS(L(385)), fQ.kn(L(386, [data.yB.length ? "[" + data.yB + "]" : "-"])), fQ.kn(L(387, [aB.oB.aMV(aMo, .01, 2)])), fQ.kn(L(388, [data.yF + 1 + " / " + data.y9])), data.yG),
					aMq = (fQ.kn(L(389, [aB.oB.aMV(aMp, .1, 1)])), data.yI);
				fQ.kn(L(390, [aMq])), fQ.kn(L(391, [aB.oB.aMV(aMp / Math.max(aMq, 1), .1, 2)])), aMo = data.yE, fQ.fS(L(392), "0.8em"), fQ.kn(L(386, [data.yC.length ? "[" + data.yC + "]" : "-"])), fQ.kn(L(387, [aB.oB.aMV(aMo, .01, 2)])),
					aMp = data.yH, fQ.kn(L(389, [aB.oB.aMV(aMp, .1, 1)])), aMq = data.yJ, fQ.kn(L(390, [aMq])), fQ.kn(L(391, [aB.oB.aMV(aMp / Math.max(aMq, 1), .1, 2)])), fQ.kn(y.z.dG("/wiki/clans"), "0.75em").style.marginTop = "0.8em", fL
					.push(fQ)
			}(fL),
			function(fL) {
				var fQ = new fR;
				fQ.fS(L(393)), fQ.kn(L(331) + (data.yM / 10).toFixed(1) + "<br>" + L(303) + (data.yN.length ? L(394, [data.yN]) : L(395))), data.yl && fQ.fX(new fY([new cN(L(396), function(a6) {
					return y.z.m(0) && (aB.dE.kq(a6), y.kr.a5F({
						action: 4,
						c9: data.c9
					})), !0
				}, 0, 0, 1).button]));
				fQ.kn(y.z.dG("/wiki/clans"), "0.75em").style.marginTop = "0.8em", fL.push(fQ)
			}(fL), fL.push(function() {
				var fQ = new fR;
				if (fQ.fS(L(338)), fQ.kn(L(339) + data.yK + "<br>" + L(302) + (data.yL + 1) + " / " + data.y9 + "<br>" + L(303) + a2v.a7k(data.yL)), data.yl) {
					var fV = new fW({
							value: d1.d2.data[157].value,
							h: -1
						}, 1, void 0, function(a6) {
							d1.db.dc(157, aMX(a6.target.value))
						}),
						fU = (fV.a6.style.marginTop = "0.6em", fQ.fX(fV), new cN(L(250), function(a6) {
							return a6.textContent === L(250) ? (a6.textContent = L(249), fV.a6.readOnly = !0, aMg[0].dL(0), aMg[1].dL(0), aMg[0].button.style.color = dK.bL, aMg[1].button.style.color = dK.bL, aMX(d1.d2.data[157]
								.value)) : aDn(), !0
						})),
						aMg = (fQ.fX(new fY([fU.button])), [new cN("−", function(a6) {
							return fV.a6.readOnly && y.z.m(0) && (aB.dE.kq(a6), aDn(), y.kr.a5G({
								action: 2,
								c9: data.c9,
								value: io.du(parseInt(d1.d2.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new cN("+", function(a6) {
							return fV.a6.readOnly && y.z.m(0) && (aB.dE.kq(a6), aDn(), y.kr.a5G({
								action: 1,
								c9: data.c9,
								value: io.du(parseInt(d1.d2.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						tp = fQ.fT(),
						aMX = function(dt) {
							return dt = aB.lk.rF(dt, 3, 32767), tp.textContent = L(340, [dt - 1, dt, d1.d2.data[105].value]), dt
						};
					fQ.fX(new fY([aMg[0].button, aMg[1].button]));
					for (var c8 = 0; c8 < 2; c8++) aMg[c8].button.style.fontSize = "1.6em";
					var aDn = function() {
						fU.button.textContent = L(250), fV.a6.readOnly = !1, aMg[0].dL(1), aMg[1].dL(1), aMg[0].button.style.color = dK.aL, aMg[1].button.style.color = dK.aL
					};
					aMX(d1.d2.data[157].value)
				}
				return fQ
			}()),
			function(fL) {
				var fQ, aMr;
				data.yl && !data.ye || (0 === cZ.id || data.yl || data.ye) && ((fQ = new fR).fS("Patreon"), !data.yl && data.yf ? fQ.fX(new fY([new cN(L(245), function() {
					y.kr.a5F({
						action: 7,
						c9: data.c9
					}), data.yf = 0, br.cP(7)
				}).button])) : data.ye ? (fQ.kn(L(397, [(data.yg / 100).toFixed(2)]) + "<br>" + L(398, [1 + data.yh + " / " + data.yi]) + "<br>" + L(399, [data.yj ? L(400) : L(401)])), data.yl || fQ.fX(new fY([new cN(L(402),
				function() {
					y.kr.a5F({
						action: 8,
						c9: data.c9
					}), data.ye = 0, d1.db.dc(160, 0), br.cP(7)
				}).button]))) : (fQ.kn(L(403), "0.75em").style.marginBottom = "0.3em", fQ.kn("  • " + L(404), "0.75em").style.whiteSpace = "pre", fQ.kn("  • " + L(405), "0.75em").style.whiteSpace = "pre", fQ.kn("  • " + L(406),
						"0.75em").style.whiteSpace = "pre", fQ.kn(L(407), "0.75em").style.marginTop = "1.0em", fQ.kn(L(408), "0.75em").style.marginTop = "1.0em", fQ.kn("<a href='" + d7.dA +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aMr = "https://www.patreon.com/oauth2/authorize?state=" + data.c9 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + y.z.aMs() + "/", fQ.kn(L(409), "0.75em").style.marginTop = "1.0em", fQ.kn("<a href='" + aMr +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.yl || (fQ.fX(new zb), fQ.fX(new fY([new cN(L(278), function() {
						y.kr.a5F({
							action: 6,
							c9: data.c9
						}), data.yf = 1, br.cP(7)
					}).button])), fQ.kn(L(410), "0.75em").style.marginTop = "0.75em")), fL.push(fQ))
			}(fL), fL.push(function() {
				var fQ = new fR,
					aMU = (fQ.fS(L(332)), [L(333), L(334), L(335), L(336), "Scout", L(337)]),
					ey = data.yX;
				return fQ.kn(L(331) + (data.yY / 100).toFixed(2) + "<br>" + L(302) + (ey + 1) + " / " + data.y9 + "<br>" + L(303) + aMU[ey < 3 ? 0 : ey < 20 ? 1 : ey < 100 ? 2 : ey < 500 ? 3 : ey < 2e3 ? 4 : 5]), fQ.kn(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", fQ
			}()),
			function(fL) {
				var fQ, ts, aMa, h, aMb;
				data.yl || d1.wc.get().length && ((fQ = new fR).fS(L(317)), h = 0, aMb = function() {
					var aMc = d1.wc.get().length;
					aMa[0].dL(h === aMc ? dK.aX : dK.ai), aMa[1].dL(h === aMc ? dK.aX : dK.b1), aMa[2].dL(h === aMc || aMc - 1 <= h || h < 5 ? dK.aX : dK.b1)
				}, aMa = [new cN(L(318), function() {
					br.cP(8, void 0, new d4(25, {
						action: 0,
						c9: d1.wc.get()[h],
						y5: 0
					}))
				}, dK.aX, 1), new cN(L(319), function() {
					d1.wc.aC3(h), ts.tt[h].remove(), ts.tt.splice(h, 1);
					for (var c8 = h; c8 < ts.tt.length; c8++) ts.tt[c8].name = "" + c8;
					d1.wc.get().length && (h = Math.max(h - 1, 0), ts.tt[h].textContent = ts.tt[h].textContent.replace("⚪", "🟢")), aMb()
				}, dK.aX, 1), new cN(L(320), function() {
					for (var sc = ts.tt.length - 1; h < sc; sc--) d1.wc.aC3(sc), ts.tt[sc].remove(), ts.tt.splice(sc, 1);
					aMb()
				}, dK.aX, 1)], aMb(), (ts = new fd(d1.wc.aC0(), function(c8) {
					h = c8, aMb()
				})).tt[0].style.marginTop = "0.5em", fQ.fc(ts), fQ.fX(new fY([aMa[0].button])), fQ.fX(new fY([aMa[1].button])), fQ.fX(new fY([aMa[2].button])), fL.push(fQ))
			}(fL), aME(fL, 0), fL
	}())
}

function a8W() {
	var aMt = [];
	this.g = function() {
		aMt = []
	}, this.aE7 = function() {
		return 65536 === aMt.length
	}, this.aE6 = function(aE4, aDx) {
		for (var a8V = aMt, cI = a8V.length, c8 = 0; c8 < cI; c8++) {
			var es = a8V[c8];
			if (es[0] === aE4 && es[es.length - 1] === aDx) return c8
		}
		return -1
	}, this.aE9 = function(v) {
		var aMu = new Uint32Array(v.length);
		return aMu.set(v), aMu.reverse()
	}, this.aIk = function(a1W, a1X) {
		var el = a1W.length - 1,
			aMv = new Uint32Array(el + a1X.length);
		return aMv.set(a1W, 0), aMv.set(a1X, el), aMv
	}, this.aIp = function(a1W, a1X, aLi, k9, aMw) {
		aMw && (aLi = (a1X = this.aE9(a1X)).length - aLi - 2);
		aMw = a1X.subarray(aLi + 1 + (k9 === a1X[aLi + 1])), k9 = new Uint32Array(a1W.length + aMw.length);
		return k9.set(a1W, 0), k9.set(aMw, a1W.length), k9
	}, this.aE8 = function(v) {
		return aMt.push(v), aMt.length - 1
	}, this.get = function(c8) {
		return aMt[c8]
	}, this.aIV = function() {
		return aMt
	}, this.aMy = function(aE4, aDx) {
		return null
	}
}

function aMz() {
	this.gD = function(player) {
		aB.lk.qI(player) && iU.qY(80, L(411), 637, 0, dK.bB, dK.aI, -1, !1)
	}, this.gE = function(player) {
		aB.lk.qI(player) && iU.qY(80, L(412), 637, 0, dK.bB, dK.aI, -1, !1)
	}
}

function a32() {
	this.fi = 512, this.qv = 15e8, this.aN0 = 1e9, this.r6 = 5e4, this.aN1 = 512, this.nc = 2, this.cr = 0, this.fj = 0, this.a71 = 0, this.fh = 0, this.qG = 0, this.zI = 512, this.aN2 = 512, this.qu = 150, this.wx = !0, this.co = 0, this.gb = 0,
		this.rE = 0, this.eS = !1, this.k2 = 0, this.aN3 = 0, this.eN = !1, this.eO = 0, this.aHa = 0, this.qS = 0, this.a63 = 0, this.lr = null, this.a6j = new aJ2, this.aAz = 30, this.a4U = 0, this.a4e = 0, this.a7r = 0, this.a7s = 0, this.data =
		new c0, this.xK = new aDo, this.cD = 0, this.aN4 = "", this.cC = function() {
			er.g(), qM.g(), vw.clear(), this.a71 = this.fj = this.data.humanCount, this.wx = 1 === this.a71, this.eS = !1, this.co = this.data.isReplay, this.qS = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.a63 = this.data.isContest, this.eN = this.qS < 7 || 9 === this.qS, this.qS = 10 === this.qS && this.wx ? 7 : this.qS, this.qS = 8 === this.qS && 2 !== this.fj ? 7 : this.qS, qV.g(),
				this.eO = this.data.numberTeams, this.data.teamPlayerCount ? this.aHa = +(0 < this.data.teamPlayerCount[0]) : (this.aHa = 0, this.eN && this.wx && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.eO + 1), bz.xK.xL())), this.aAz = this.fj <= 2 ? 30 : this.fj <= 50 ? 40 : 50, this.aN3 = this.k2 = this.data.selectableSpawn, this.lr = this.k2 ? new aAk : null, 1 === w.a1 ? this.zI = this.fj : this.zI = this.data
				.playerCount, this.aN2 = this.zI, this.fh = this.zI - this.fj, this.qG = 0, this.cr = this.data.selectedPlayer, this.a4U = 0, this.a4e = 0, this.a7r = 0, this.a7s = 0, qT.aN5(this.data.spawningSeed), mD.g(), ef.g(), mB.g(), a2f.ty(),
				cs.aAy.fw = [], cs.ct.aN6 = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), eb.g(), this.gb = 1, ch.g(), z8(), n0.i7(), ms.a5l(), kg.g(), n0.g(), a2h.g(),
				kA.g(), g6.g(), fk.g(), cy.aN7(), fq.g(), a2f.cB(), a2b.g(), a2c.g(), en.xr(), lo.g(), go.g(), a2q.g(), ck.g(), z6.putImageData(z7, 0, 0), iQ.g(), iT.g(), gp.g(), iV.g(), cw.g(), iR.g(), iS.g(), cp.g(), gc.g(), iU.g(), iW.g(), iX.g(),
				iZ.g(), mh.g(), a2a.g(), aN8(), ly.g(), iY.g(), qz.g(), a2m.g(), a2j.g(), a2n.g(), a2o.g(), this.a6j.g(), cm.aN7(), kH.jy(), 0 === ef.fo[bz.cr] && iZ.show(!1, !0), iY.sb(!0), a2i.g(), cm.cn = !0, this.co || this.wx && this.k2 || cZ.cb
				.setState(1), this.cD = 0
		}, this.aCe = function(aBj) {
			lo.lp.aJf.length ? this.aN4 = lo.lp.aJf : (this.aN4 = lo.aNA.hU(), __fx.replayHistory.save(this.aN4)), y.z.aNB(), vw.clear(), this.gb = 0, cm.aNC(), cZ.cb.setState(0), cA.setState(0), xy.xZ.show(aBj), 2 === this.cD ? br.z.cR(0) : 1 ===
				this.cD ? br.cP(19) : br.cP(5, 5)
		}, this.sl = function() {
			return this.co ? cp.cv || !iV.aND : this.wx && (cp.cv || this.k2)
		}, this.tT = function() {
			return 1 === this.gb && !this.k2
		}
}

function aNE() {
	var aNG, aNH;
	this.aNF = 3, this.a0 = null, this.hq = 0, this.l0 = 0;

	function aNR() {
		return 0 === iN.xl ? w.aAd ? 1 : 0 : iN.xl - 1
	}

	function aNT(cG, i, j) {
		aNH[cG].wg = !0, aNM(cG), aNG[cG] = new a, aNG[cG].g(cG, i, j)
	}

	function p(c8) {
		return aNH[c8].wg && aNG[c8].p()
	}

	function aNM(cG) {
		aNH[cG].gX = cm.gX, aNH[cG].aNJ = !1
	}
	this.g = function() {
		this.a0 = new Array(this.aNF), this.a0[0] = "territorial.io", this.a0[1] = "1.territorial.io", this.a0[2] = "2.territorial.io", aNG = new Array(this.aNF), aNH = new Array(this.aNF);
		for (var c8 = this.aNF - 1; 0 <= c8; c8--) aNH[c8] = {
			wg: !1,
			gX: 0,
			aNJ: !1
		};
		this.lB(0, 0, 0)
	}, this.aNK = function(c8) {
		return aNG[c8]
	}, this.dI = function() {
		for (var c8 = this.aNF - 1; 0 <= c8; c8--) this.m(c8) && cm.gX > aNH[c8].gX + 15e3 && (y.lC.aNL(c8, aNH[c8].aNJ), aNM(c8));
		!this.m(0) && cm.gX > aNH[0].gX + 8e3 && (aNH[0].gX = cm.gX, this.lB(0, 0, 0))
	}, this.aNN = function(id) {
		return this.lB(0, id, 0) && this.n(0)
	}, this.aNO = function(aNP) {
		return aNP ? iN.aNQ : aNR()
	}, this.aMs = function() {
		return aNR() ? "game.territorial.io" : "territorial.io"
	}, this.dG = function(aNS) {
		aNS = this.aMs() + aNS;
		return "<a href='https://" + aNS + "' target='_blank'>" + aNS + "</a>"
	}, this.lB = function(cG, i, aNP) {
		aNP = this.aNO(aNP);
		if (aNH[cG].wg) {
			if (aNG[cG].p()) return aNG[cG].q(i), aNG[cG].m();
			aNG[cG].u()
		}
		return aNT(cG, i, aNP), !1
	}, this.a2 = function(cG, i) {
		console.log("Connection to Server " + cG), y.kw.hP(cG)
	}, this.n = function(c8) {
		return this.m(c8) && aNG[c8].n()
	}, this.o = function(c8) {
		aNG[c8].o()
	}, this.m = function(c8) {
		return aNH[c8].wg && aNG[c8].m()
	}, this.send = function(cG, s) {
		0 !== cG && aNM(cG), aNG[cG].send(s)
	}, this.us = function(cG) {
		8 === cA.cg() && (aNH[cG].aNJ = !0, y.aIK.aM0 = !0)
	}, this.close = function(cG, t) {
		p(cG) && aNG[cG].close(t)
	}, this.j6 = function(cG, t) {
		a2t.aCb(t), p(cG) && aNG[cG].close(t)
	}, this.pQ = function(t) {
		for (var c8 = this.aNF - 1; 0 <= c8; c8--) this.close(c8, t)
	}, this.aNU = function(cG, t) {
		for (var c8 = this.aNF - 1; 0 <= c8; c8--) c8 !== cG && this.close(c8, t)
	}, this.aNB = function() {
		0 === this.hq && (bz.wx || bz.co) || this.close(this.hq, 3246)
	}, this.a4 = function(cG, a6) {
		aNG[cG].u(), a2t.aCT(cG, a6.code)
	}
}

function a48() {
	this.yz = 0, this.gap = 0, this.aNV = 0, this.dl = 0, this.g = function() {
		this.resize()
	}, this.resize = function() {
		this.yz = .0022 * aB.dE.aNW(.5) * eT.eU, this.aNV = this.yz / eT.i5, this.gap = Math.max(Math.floor((cZ.cb.eR() ? .0114 : .01296) * eT.eU), 2), this.dl = this.gap / eT.i5
	}
}

function aDi() {
	var aNX, vQ, rH;

	function aNd(c8) {
		return aB.color.aD(vQ[c8][0], vQ[c8][1], vQ[c8][2])
	}

	function aNi(dq, dr) {
		return aB.color.aAT(vQ[dq], vQ[dr]), aNd(dr)
	}

	function aNb() {
		aNX && (aNX.remove(), aNX = null)
	}
	this.show = function(fB, colors, id) {
		0 <= (rH = id) && y.z.m(0) && y.kw.hg(0, id), fB = (fB = (fB = (fB = (fB = (fB = (fB = (fB = (fB = (fB = (fB = (fB = fB.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			vQ = colors, (aNX = document.createElement("div")).style.position = "fixed", aNX.style.top = "0", aNX.style.left = "0", aNX.style.width = "100%", aNX.style.height = "100%", aNX.style.backgroundColor = aB.color.aF(vQ[0][0], vQ[0][1],
				vQ[0][2], .6), aNX.style.zIndex = "6", aNX.onclick = function(a6) {
				a6.target === aNX && aNb()
			},
			function(fB) {
				var tH, aNc = document.createElement("div");
				aNc.style.position = "absolute", aNc.style.display = "flex", aNc.style.flexDirection = "column", aNc.style.top = "50%", aNc.style.left = "50%", aNc.style.backgroundColor = aNd(2), tH = cZ.cb.eR() ? aB.dE.zu(eT.min) : aB.dE.dm(.4);
				tH = Math.max(tH, 200), aNc.style.width = aB.dE.dj(tH), aNc.style.height = aB.dE.dj(tH), aNc.style.transform = "translate(-50%, -50%)",
					function(aNc, tH) {
						var aNh = document.createElement("div");
						aNh.style.flex = "0 0 10%", aNh.style.overflow = "hidden", aNh.style.backgroundColor = aNd(1), aNh.style.color = aNi(1, 7), aNh.style.font = aB.dE.f9(1, .05 * tH), aNh.style.display = "flex", aNh.style.alignItems =
							"center", aNh.style.justifyContent = "center", aNh.innerHTML = L(413), aNc.appendChild(aNh)
					}(aNc, tH),
					function(aNc, fB, tH) {
						var aNj = document.createElement("div");
						aNj.style.flex = "0 0 70%", aNj.style.overflowY = "auto", aNj.style.overflowX = "hidden", aNj.style.whiteSpace = "pre-wrap", aNj.style.wordWrap = "break-word", aNj.style.padding = aB.dE.dj(.02 * tH), aNj.style
							.backgroundColor = aNd(2), aNj.style.color = aNi(2, 8), aNj.style.font = aB.dE.f9(0, .07 * tH), aNj.innerHTML = fB, aNj.innerHTML = "<style>a { color: inherit; }</style>" + aNj.innerHTML, aNc.appendChild(aNj)
					}(aNc, fB, tH),
					function(aNc, tH) {
						var aNk = document.createElement("div"),
							aNl = (aNk.style.display = "flex", aNk.style.flexDirection = "row", aNk.style.justifyContent = "space-between", aNk.style.alignItems = "stretch", aNk.style.backgroundColor = aNd(3), aNk.style.flex = "1", aNk.style
								.padding = aB.dE.dj(.01 * tH), aNk.style.gap = aB.dE.dj(.01 * tH), document.createElement("div")),
							aNm = (aNl.style.flex = "0 0 60%", aNl.style.height = "100%", new cN(L(66, 0, 0, 1), function() {
								aNb()
							}, aNd(4), !1)),
							aNm = (aNm.button.style.width = "100%", aNm.button.style.height = "100%", aNm.button.style.color = aNi(4, 9), aNm.button.style.font = aB.dE.f9(1, .05 * tH), aNl.appendChild(aNm.button), document.createElement("div")),
							aNo = (aNm.style.flex = "0 0 15%", aNm.style.height = "100%", aNm.style.backgroundColor = aNd(5), document.createElement("div")),
							aNp = (aNo.style.flex = "1", aNo.style.height = "100%", new cN(L(414), function(a6) {
								return aB.dE.kq(a6), rH < 0 || y.z.m(0) && (y.kw.hg(1, rH), rH = -1), !0
							}, aNd(6), !1));
						aNp.button.style.width = "100%", aNp.button.style.height = "100%", aNp.button.style.color = aNi(6, 10), aNp.button.style.font = aB.dE.f9(1, .035 * tH), aNo.appendChild(aNp.button), aNk.appendChild(aNl), aNk.appendChild(
							aNm), aNk.appendChild(aNo), aNc.appendChild(aNk)
					}(aNc, tH), aNX.appendChild(aNc)
			}(fB), document.body.appendChild(aNX)
	}
}

function a3k() {
	this.lp = new aJe, this.aNA = new aEH, this.zl = new aNr, this.g = function() {
		bz.co || this.lp.g()
	}, this.dI = function() {
		bz.co || (this.lp.dI(), 3 !== br.bs) || cm.lJ() % 15 != 5 && 2 !== bz.gb || br.hN().aNt()
	}, __fx.replay.restartReplay = () => this.aNu(), this.aNu = function() {
		var aNv = 0 !== bz.gb,
			aNw = bz.cD;
		aNv || cA.aNx(), bz.xK.aDs(), bz.data.canvas = null, y.z.close(y.z.hq, 3257), y.z.hq = 0, bz.data.isReplay = 1, bz.cC(), aNv && (bz.cD = aNw)
	}, this.aNy = function(dZ) {
		var c8 = dZ.indexOf("=");
		return 0 <= c8 ? dZ.substring(c8 + 1) : dZ
	}, this.aNz = function(dZ) {
		return dZ
	}, __fx.replayHistory.load = saved => {
		saved = lo.aNy(saved), lo.zl.j9(saved) && lo.aNu()
	}
}

function aO0() {
	var cK, cL, cM, cW;

	function aH6(c8) {
		br.cP(8, br.bs, new d4(21, {
			j7: c8,
			x4: 0,
			x5: 10
		}))
	}
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), cL.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cM = [new cN(L(415), function() {
		aH6(1)
	}, 0, 0, 1), new cN(L(416), function() {
		aH6(2)
	}, 0, 0, 1), new cN(L(417), function() {
		aH6(3)
	}, 0, 0, 1), new cN(L(418), function() {
		aH6(0)
	}, 0, 0, 1), new cN(L(61), function() {
		aH6(9)
	}, 0, 0, 1), new cN(L(419), function() {
		aH6(10)
	}, 0, 0, 1), new cN(L(420), function() {
		aH6(11)
	}, 0, 0, 1), new cN(L(421), function() {
		aH6(13)
	}, 0, 0, 1)], cW = [new cN("⬅️ " + L(14), function() {
		br.kl()
	})], cK = new cd(L(1), cW), cL = new ce(cM, cK.cf)
}

function fY(aO1) {
	var dh = document.createElement("div");
	this.a6 = dh, this.aO2 = aO1, this.resize = function() {
		for (var cI = aO1.length, c8 = 1; c8 < cI; c8++) aB.dE.lg(aO1[c8], 4)
	};
	var c8, cI = aO1.length;
	for (dh.style.width = "100%", dh.style.height = "2.7em", dh.style.marginTop = "0.6em", dh.style.border = "inherit", c8 = 0; c8 < cI; c8++) aO1[c8].style.verticalAlign = "top", aO1[c8].style.width = (100 / cI).toFixed(2) + "%", aO1[c8].style
		.height = "100%", aO1[c8].style.fontSize = "0.75em", dh.appendChild(aO1[c8])
}

function aO3() {
	this.g = function() {
		! function() {
			var data = d1.d2.data;
			0 === data[2].ca && (eT.gP > eT.eJ || 0 !== cZ.id) && (data[2].value = data[2].oc = 1);
			0 === data[100].ca && (data[100].value = data[100].oc = (0 === cZ.id ? "Player " : 1 === cZ.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var c8, data = d1.d2.data,
			cI = data.length;
		for (c8 = 0; c8 < cI; c8++) {
			var a5D = d1.dO.aO6(c8, !0);
			data[c8] && data[c8].ca === a5D && (null === (a5D = d1.dO.aO7(c8)) ? data[c8].value = data[c8].oc : 2 === data[c8].type ? data[c8].value = a5D : (a5D = Number(a5D), isNaN(a5D) ? data[c8].value = data[c8].oc : data[c8].value = a5D))
		}
	}
}

function a3N() {
	var aO9, aOA, aOB, aOC, aOD, aOE, aOF, aOG, aOH, aOI, aOJ, wv, aOK, aOL = 1,
		aOM = 0,
		aON = 0;

	function aOO(aOP) {
		aOP ? aOK = (aOK + 1) % y.z.aNF : (y.z.close(aOK, 3280), aOL ? aOL = 0 : (aON = 1 - aON, 0 === (aOM = (aOM + 1) % 2) && (aOK = (aOK + 1) % y.z.aNF, y.z.close(aOK, 3280)))), wv = cm.gX, iN.aNQ = aON, y.z.lB(aOK, 4, 1) && y.pS.ku(aOK)
	}

	function aOQ() {
		0 === aOK ? a2t.aCb(3249) : aOO()
	}

	function aOW(e3, aOV, ot) {
		var kD = Math.floor((eT.eJ - aOC) / 2) + aOF,
			kT = kD + Math.floor(ot * (aOC - 2 * aOF));
		fD.lineWidth = aOV, fD.beginPath(), fD.moveTo(kD, e3), fD.lineTo(kT, e3), fD.lineTo(Math.floor(kD - aOF + ot * aOC), e3 + aOB), fD.lineTo(kD - aOF, e3 + aOB), fD.closePath()
	}
	this.a5L = 1, this.xl = 0, this.aNQ = 0, this.g = function() {
		cA.setState(6), aO9 = 0, aOA = 1, aOG = "rgba(0,220,120,0.4)", aOH = "rgba(0,0,0,0.8)", this.resize(), cm.cn = !0, aOL = 1, aOM = 0, aOK = this.a5L - 1, aON = 0 === this.xl ? w.aAd ? 1 : 0 : this.xl - 1, aOO(1)
	}, this.resize = function() {
		aOC = Math.floor((cZ.cb.eR() ? .5 : .25) * eT.eU), aOD = aOC + 12, aOB = Math.floor(.125 * aOC), aOF = 3 * aOB, aOE = Math.floor(.225 * aOC), aOJ = Math.floor(.3 * aOB), aOI = aB.dE.f9(0, aOJ)
	}, this.aCZ = function(cG) {
		cG === aOK && aOQ()
	}, this.ub = function(e2, e3) {
		var kD = Math.floor((eT.eJ - aOD) / 2),
			kF = Math.floor(.5 * (eT.gP - dk.gap - aOB - aOE)) + aOB + dk.gap;
		return kD < e2 && e2 < kD + aOD && kF < e3 && e3 < kF + aOE && (this.vK(), iL.sg(e2, e3, !1), !0)
	}, this.vK = function() {
		y.z.pQ(3260), br.z.a4v()
	}, this.dI = function() {
		6 === cA.cg() && (cm.gX > wv + 12e3 && aOQ(), 100 < (aO9 += .07 * aOA * (aO9 < 16 ? 5 + aO9 : 84 < aO9 ? 105 - aO9 : 17)) ? (aO9 = 100, aOA = -1) : aO9 < 0 && (aO9 = 0, aOA = 1), aOG = "rgba(0," + Math.floor(190 - 1.9 * aO9) + "," + Math
			.floor(120 - 1.2 * aO9) + "," + (.4 + .004 * aO9) + ")", aOH = "rgba(0," + Math.floor(1.9 * aO9) + "," + Math.floor(1.2 * aO9) + "," + (.8 - .004 * aO9) + ")", cm.cn = !0)
	}, this.fC = function() {
		var e2 = Math.floor((eT.eJ - aOD) / 2),
			e3 = Math.floor(.5 * (eT.gP - dk.gap - aOB - aOE));
		! function(title, e3, aOV, ot) {
			fD.fillStyle = aOH, aOW(e3, aOV, 1), fD.fill(), fD.fillStyle = aOG, aOW(e3, aOV, ot), fD.fill(), fD.strokeStyle = dK.aL, aOW(e3, aOV, 1), fD.stroke(),
				function(aOY, e3) {
					aB.dE.textAlign(fD, 1), aB.dE.textBaseline(fD, 1), fD.font = aOI, fD.fillStyle = dK.aL, fD.fillText(aOY, Math.floor(.5 * eT.eJ), Math.floor(e3 + .58 * aOB))
				}(title, e3)
		}(L(422), e3, 3, aO9 / 100),
		function(e2, e3, eJ, gP, pL) {
			fD.fillStyle = dK.aG, fD.fillRect(e2, e3, eJ, gP), fD.lineWidth = 3, fD.strokeStyle = dK.aL, fD.strokeRect(e2, e3, eJ, gP);
			var cI = Math.floor(.3 * gP);
			aB.dE.textAlign(fD, 1), aB.dE.textBaseline(fD, 1), fD.font = aB.dE.f9(0, cI), fD.fillStyle = dK.aL, fD.fillText(pL, Math.floor(e2 + eJ / 2), Math.floor(e3 + gP / 2 + .1 * cI))
		}(e2, e3 + aOB + dk.gap, aOD, aOE, L(14))
	}
}

function a3S() {
	var aOZ, aOa, size, lt, me, aOb;

	function aOc(player) {
		return player < bz.fj ? aOZ * player : aOZ * bz.fj + aOa * (player - bz.fj)
	}
	this.g = function() {
		aOZ = bz.fj < 16 ? 12 : 8, aOa = 4;
		var cI = aOc(bz.fi);
		size = new Uint8Array(bz.fi), lt = new Uint16Array(cI), me = new Uint32Array(cI), aOb = new Uint8Array(cI)
	}, this.mU = function(gi, aOd) {
		var aOe = this.np(gi, aOd),
			aOd = (this.no(gi, aOd, 0), aB.lk.qr(gi, aOe));
		ch.nk(gi, aOe - aOd, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.qP = function(player, aOd) {
		var aOh, aOd = function(player, aOd) {
			var c8, dU = aOc(player);
			for (c8 = size[player] - 1; 0 <= c8; c8--)
				if (lt[dU + c8] === aOd) return c8;
			return size[player]
		}(player, aOd);
		aOd !== size[player] && (aOh = me[aOc(player) + aOd], this.aOi(player, aOd), this.gh(player, aOh, bz.fi))
	}, this.lz = function(player, aOd) {
		for (var dU = aOc(player), c8 = size[player] - 1; 0 <= c8; c8--)
			if (lt[dU + c8] === aOd) return !0;
		return !1
	}, this.m1 = function(player) {
		return player < bz.fj ? size[player] < aOZ : size[player] < aOa
	}, this.a9M = function(player) {
		return size[player]
	}, this.aFB = function(player, c8) {
		return lt[aOc(player) + c8]
	}, this.aFA = function(player, c8) {
		return me[aOc(player) + c8]
	}, this.np = function(player, aOd) {
		for (var dU = aOc(player), c8 = size[player] - 1; 0 <= c8; c8--)
			if (lt[dU + c8] === aOd) return me[dU + c8];
		return 0
	}, this.q8 = function(player) {
		for (var dU = aOc(player), dt = 0, c8 = size[player] - 1; 0 <= c8; c8--) dt += me[dU + c8];
		return dt
	}, this.no = function(player, aOd, aOh) {
		for (var dU = aOc(player), c8 = size[player] - 1; 0 <= c8; c8--) lt[dU + c8] === aOd && (me[dU + c8] = aOh)
	}, this.nR = function(player, c8, aOh) {
		me[aOc(player) + c8] = Math.max(aOh, 0)
	}, this.nV = function(player, c8) {
		aOb[aOc(player) + c8] = 0
	}, this.aOj = function(player, c8) {
		return aOb[aOc(player) + c8]
	}, this.gh = function(player, aOh, aOd) {
		fk.a7z.aOk[player] = fk.a7z.aOk[aOd] = 8, aB.lk.q7(aOd) && ch.qa[6 - aB.lk.qD(player)]++;
		for (var dU = aOc(player), c8 = size[player] - 1; 0 <= c8; c8--)
			if (lt[dU + c8] === aOd) return me[dU + c8] += aOh, void(me[dU + c8] = me[dU + c8] > bz.qv ? bz.qv : me[dU + c8]);
		lt[dU + size[player]] = aOd, me[dU + size[player]] = aOh, aOb[dU + size[player]] = 1, size[player]++, aOd === bz.cr ? iU.qZ(player, 5) : player < bz.fj && player === bz.cr && iY.tZ(aOd)
	}, this.aOi = function(player, h) {
		var dq, dU;
		if (0 !== size[player])
			for (dU = aOc(player), size[player]--, dq = h; dq < size[player]; dq++) lt[dU + dq] = lt[dU + dq + 1], me[dU + dq] = me[dU + dq + 1], aOb[dU + dq] = aOb[dU + dq + 1]
	}, this.q1 = function(player) {
		for (var dq, dU, qH = [], c8 = en.ep - 1; 0 <= c8; c8--)
			for (dU = aOc(en.em[c8]), dq = size[en.em[c8]] - 1; 0 <= dq; dq--)
				if (lt[dU + dq] === player) {
					qH.push(en.em[c8]);
					break
				} return qH
	}
}

function a3f() {
	this.uB = function(player) {
		a2a.fn(player), bz.qG++, ef.jO[player] = 2, ef.jb[player] = cE.qE.qF(), player === bz.cr && (iZ.show(!1, !1), iS.qL(), qM.qN.qO()), iY.tZ(player)
	}
}

function a3x() {
	this.id = 0, this.ca = 0, this.aOl = null, this.hA = null, this.aOm = null, this.aOn = null, this.cb = new aOo, this.g = function() {
		var self, ca;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (ca = Android.getVersion()) < 12 || (self.ca = ca, self.id = 1, self.hA = Android),
			function(self) {
				var ca;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aOm = mwIOSdataX, self.aOn = window.webkit.messageHandlers.iosCommandA, ca =
					self.aOm.version, self.ca = ca ? Number(ca) : 0)
			}(this),
			function(self) {
				var aOl;
				try {
					if (!(aOl = window.localStorage)) return;
					aOl.setItem("tls7", "1"), aOl.removeItem("tls7")
				} catch (error) {
					return
				}
				self.aOl = aOl
			}(this)
	}
}

function aOs() {
	var vu, xE, xF;

	function pB() {
		xI(), 3 !== bz.data.botDifficultyType || aB.pr.a7F(bz.data.botDifficultyData) || (bz.data.botDifficultyType = 0), 3 !== bz.data.botDifficultyType && (bz.data.botDifficultyData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		3 === bz.data.botDifficultyType && aB.pr.xM(xF.gY(), bz.data.botDifficultyData, fq.a6a.length - 1)
	}

	function aOt(fL, h) {
		var fQ = new fR,
			value = (fQ.fS(h < 0 ? L(178) : L(60) + " " + eb.xU[h % 9]), 0 <= h && (fQ.kn(L(68) + ": " + bz.data.teamPlayerCount[h]).style.marginBottom = "1em"), h < 0 ? bz.data.botDifficultyValue : bz.data.botDifficultyTeam[h]);
		fQ.fc(new fd({
			fb: fq.a6a,
			value: value
		}, function(sc) {
			h < 0 ? bz.data.botDifficultyValue = sc : bz.data.botDifficultyTeam[h] = sc
		})), fL.push(fQ)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(178), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, function() {
		var fL = [];
		if (function(fL) {
				var fQ = new fR,
					fb = (fQ.fS(L(104)), [L(267), L(423), L(424), L(106)]),
					value = bz.data.botDifficultyType;
				0 === bz.data.gameMode && (value = Math.min(value, 2), fb.splice(2, 1));
				fQ.fc(new fd({
					fb: fb,
					value: value
				}, function(h) {
					xI(), bz.data.botDifficultyType = h, 0 === bz.data.gameMode && 2 === h && (bz.data.botDifficultyType = 3), 3 !== bz.data.botDifficultyType || bz.data.botDifficultyData || (bz.data.botDifficultyData =
						new Uint8Array(bz.fi)), 2 !== bz.data.botDifficultyType || bz.data.botDifficultyTeam || (bz.data.botDifficultyTeam = new Uint8Array(9)), br.cP(25)
				})), fL.push(fQ)
			}(fL), 0 === bz.data.botDifficultyType) aOt(fL, -1);
		else if (2 === bz.data.botDifficultyType)
			for (var c8 = 0; c8 < bz.data.teamPlayerCount.length; c8++) bz.data.teamPlayerCount[c8] && aOt(fL, c8);
		else 3 === bz.data.botDifficultyType && ! function(fL) {
			var fQ = new fR;
			fQ.fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.botDifficultyData, 8)), fQ.fX(xF), fL.push(fQ)
		}(fL);
		return fL
	}())
}

function aOu() {
	var vu, xE, fL;

	function aOx() {
		var el;
		1 === bz.data.gameMode ? (bz.data.teamPlayerCount || (bz.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), bz.xK.xL()), el = aB.pr.aDr(bz.data.teamPlayerCount, 0), bz.data.numberTeams = el) : (2 === bz.data
			.botDifficultyType && (bz.data.botDifficultyType = 0), 1 === bz.data.spawningType && (bz.data.spawningType = 0))
	}

	function pB() {
		1 !== bz.data.gameMode && (bz.data.teamPlayerCount = null), aP0(), bz.data.canvas = null, br.cP(5, 5)
	}

	function aP0() {
		lo.lp.g(), d1.db.dc(156, lo.aNA.hU())
	}

	function aOv() {
		bz.data.isReplay = 0, aP0(), bz.xK.aDv(), cA.aNx(), bz.xK.aDs(), bz.data.canvas = 2 === bz.data.mapType ? c2.a5c : null, bz.cC(), bz.cD = 1
	}

	function aPD() {
		aOx();
		for (var dT = [aDd(), aP3(), aP4()], c8 = 3; c8 < 6; c8++) br.removeChild(xE.di, xE.aKz[c8].dh), xE.aKz[c8] = dT[c8 - 3], xE.di.appendChild(xE.aKz[c8].dh);
		xE.resize()
	}

	function aDd() {
		var aPE, fQ = new fR;
		return fQ.fS(L(103)), aPE = 0 === bz.data.gameMode ? [L(105), L(106)][bz.data.colorsType] : bz.data.numberTeams + " Team" + (1 === bz.data.numberTeams ? "" : "s"), fQ.kn(aPE), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(21)
		}).button])), fQ
	}

	function aP3() {
		var fQ = new fR,
			dT = (fQ.fS(L(178)), [L(267) + ": " + fq.a6a[bz.data.botDifficultyValue], L(423), L(424), L(106)]);
		return fQ.kn(dT[bz.data.botDifficultyType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(25)
		}).button])), fQ
	}

	function aP4() {
		var fQ = new fR,
			dT = (fQ.fS("Spawning"), [L(105), L(221), L(106)]);
		return fQ.kn(dT[bz.data.spawningType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(24)
		}).button])), fQ
	}
	this.show = function() {
		vu.show(), this.resize(), vu.cf.scrollTop = br.z.a5K[0]
	}, this.u = function() {
		br.z.a5K[0] = vu.cf.scrollTop, vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd("🔧 " + L(145), [new cN("⬅️ " + L(14), pB), new cN(L(425), aOv)]), aOx(), bz.data.canvas || (2 === bz.data.mapType ? bz.data.canvas = c2.a5c : 1 === bz.data.mapType ? bz.data.canvas = c2.aOz(c2.aDt(bz.data), 0).a5c : (bz.data
		.mapType = 0, bz.data.passableWater = bz.data.passableMountains = 1, bz.data.canvas = c2.aOz(c2.aDt(bz.data), bz.data.mapSeed).a5c)), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR,
			tN = (fQ.fS(L(426)), bz.data.canvas);
		tN.style.width = "100%", fQ.fX({
			a6: tN
		}), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(20)
		}).button])), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ = new fR;
		fQ.fS(L(68)), fQ.fX(new fW({
			h: -1,
			value: bz.data.playerCount
		}, 1, 0, function(a6) {
			var playerCount = io.du(Math.floor(a6.target.value), 1, 512);
			a6.target.value = bz.data.playerCount = playerCount, 1 === bz.data.gameMode && (a6 = aB.pr.aDr(bz.data.teamPlayerCount, 0), bz.xK.xL(), aB.pr.aDr(bz.data.teamPlayerCount, 0) !== a6) && aPD()
		})), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR;
		fQ.fS(L(428)), fQ.fc(new fd({
			fb: ["Battle Royale", "Teams"],
			value: bz.data.gameMode
		}, function(h) {
			bz.data.gameMode !== h && (1 === (bz.data.gameMode = h) && (bz.data.colorsData || (bz.data.colorsData = new Uint32Array(1)), bz.data.colorsData[0] = 258049), aPD())
		})), fL.push(fQ)
	}(fL), fL.push(aDd()), fL.push(aP3()), fL.push(aP4()), function(fL) {
		var fQ = new fR,
			dT = (fQ.fS(L(238)), [L(239), L(240), L(106)]);
		fQ.kn(dT[bz.data.playerNamesType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(23)
		}).button])), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR,
			dT = (fQ.fS(L(88)), [L(266), L(267) + ": " + bz.data.aIncomeValue, L(106)]);
		fQ.kn(dT[bz.data.aIncomeType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(22)
		}).button])), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR,
			dT = (fQ.fS(L(79)), [L(266), L(267) + ": " + bz.data.tIncomeValue, L(106)]);
		fQ.kn(dT[bz.data.tIncomeType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(26)
		}).button])), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR,
			dT = (fQ.fS(L(80)), [L(266), L(267) + ": " + bz.data.iIncomeValue, L(106)]);
		fQ.kn(dT[bz.data.iIncomeType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(27)
		}).button])), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR,
			dT = (fQ.fS(L(429)), [L(266), L(267) + ": " + bz.data.sResourcesValue, L(106)]);
		fQ.kn(dT[bz.data.sResourcesType]), fQ.fX(new fY([new cN(L(427), function() {
			br.cP(28)
		}).button])), fL.push(fQ)
	}(fL), function(fL) {
		var fQ = new fR;
		fQ.fS(L(430)), fQ.fX(new fY([new cN(L(431), function() {
			br.cj(), bz.xK.zm(), br.z.a5K[0] = 0, br.cP(19)
		}).button])), fQ.fX(new fY([new cN(L(432), function() {
			a2u.aPF()
		}).button])), fQ.fX(new fY([new cN(L(433), function() {
			return a2u.aPG(), !0
		}).button])), fL.push(fQ)
	}(fL), fL))
}

function a3I() {
	var gQ, eJ, e3, aPH, aPI, aPJ, canvas, eL, a8u, qt, aPK, aPL, aPM, aPN;
	this.e2 = 0, this.gP = 0, this.g = function() {
		aPJ = bz.aN1, aPL = "rgba(0,100,0,0.8)", aPM = "rgba(150,0,0,0.8)", a8u = aPK = !0, qt = ef.g5[bz.cr], this.resize()
	}, this.resize = function() {
		eJ = Math.floor((cZ.cb.eR() ? .305 : .24) * eT.eU), this.gP = Math.floor(.5 + .13 * eJ), eJ = Math.floor(6 * this.gP), gQ = aB.dE.f9(1, Math.floor(.8 * this.gP)), aPI = aB.dE.f9(1, Math.floor(.45 * this.gP)), aPN = Math.floor(.5 * this
			.gP), c2.a5Y.font = gQ, e3 = dk.gap, aPH = Math.floor(1 + .13 * this.gP), (canvas = document.createElement("canvas")).width = eJ, canvas.height = this.gP, eL = canvas.getContext("2d", {
			alpha: !0
		}), aB.dE.textBaseline(eL, 1), aB.dE.textAlign(eL, 1), this.aPO()
	}, this.aPP = function() {
		return cZ.cb.eR() && eT.eJ < 1.2 * eT.gP
	}, this.a8e = function() {
		this.aPP() ? this.e2 = eT.eJ - eJ - dk.gap : this.e2 = Math.floor(iQ.aLZ() + (eT.eJ - iQ.aLZ() - iS.eJ - eJ) / 2 - .5 * dk.gap)
	}, this.sb = function() {
		a8u && (a8u = !1, this.aPO())
	}, this.aPO = function() {
		eL.font = gQ, eL.clearRect(0, 0, eJ, this.gP), eL.fillStyle = aPK ? aPL : aPM, eL.fillRect(0, 0, eJ, this.gP), eL.fillStyle = dK.aN;
		var aA = this.aPQ(),
			aPS = (this.aPR(), eL.fillStyle = ef.g5[bz.cr] >= mD.a7C(bz.cr) ? dK.at : dK.aL, aB.oB.sV(qt)),
			aPS = (eL.fillText(aPS, Math.floor(eJ / 2), aPN), eL.measureText(aPS).width),
			aPT = (eL.font = aPI, eL.fillStyle = 9 === aA ? dK.bT : dK.aL, mD.aPU),
			aPV = "+" + aPT,
			ij = eL.measureText(aPV).width,
			aPW = Math.floor(this.gP / 12),
			aPS = .5 * (eJ + aPS) + aPW;
		(aPS + ij + aPH <= eJ || 1e3 <= aPT && (aPV = "+" + Math.floor(aPT / 1e3) + "K", aPS + (ij = eL.measureText(aPV).width) + aPH <= eJ)) && eL.fillText(aPV, Math.floor(aPS + .5 * ij), Math.floor(.3 * this.gP)), __fx.settings
			.displayTickNumber && eL.fillText(9 - aA, Math.floor(2 * aPH + aPW), Math.floor(.3 * this.gP)), eL.fillStyle = dK.aL, eL.fillRect(0, 0, eJ, 1), eL.fillRect(0, 0, 1, this.gP), eL.fillRect(0, this.gP - 1, eJ, 1), eL.fillRect(eJ - 1, 0,
				1, this.gP)
	}, this.aPQ = function() {
		var aA = cm.lJ() % 100,
			tB = (aA = 9 - io.dp(aA -= aA % 10, 10), Math.floor(aA * (this.gP - aPH) / 9));
		return eL.fillRect(0, tB, aPH, this.gP - tB), eL.fillRect(eJ - aPH, tB, aPH, this.gP - tB), aA
	}, this.aPR = function() {
		eL.fillRect(aPH, this.gP - aPH, Math.floor((eJ - 2 * aPH) * ef.g5[bz.cr] / aPJ), aPH)
	}, this.dI = function() {
		var es = bz.cr;
		aB.lk.lm(es) && (es = ef.g5[es] - ef.jd[es], qt !== es ? (aPJ = im(es, aPJ), aPK = qt < es && 10 <= es, qt = es, a8u = !0) : cm.lJ() % 10 == 9 && (a8u = !0))
	}, this.fC = function() {
		0 === ef.fo[bz.cr] || bz.k2 || 2 === ef.jO[bz.cr] || fD.drawImage(canvas, this.e2, e3)
	}
}

function aCP() {
	var aPX = null,
		aPY = null,
		aPZ = 0,
		aPa = 0,
		aPb = null;

	function aPd() {
		0 !== aPY.aA1 && (bf.pF.u(), br.cP(8, 29, new d4(25, {
			action: 0,
			c9: hc.wb.sV(aPY.c9, 5),
			y5: 0
		}, 29)))
	}

	function aPf() {
		return !bf.cH || bf.k7.aA5(aPY) ? 1 : 0
	}

	function aPe() {
		var e2 = aPX.e2,
			e3 = aPX.e3,
			aPo = (bf.pF.u(), aPf());
		aPX = new aPc([new cN(a2v.a7h[5][0], function() {
			aPi(5, 0)
		}, aPo), new cN(a2v.a7h[5][1], function() {
			aPi(5, 1)
		}, aPo), new cN(a2v.a7h[5][2], function() {
			aPi(5, 2)
		}, aPo), new cN(a2v.a7h[5][3], function() {
			aPi(5, 3)
		}, aPo)]), aPh(e2, e3), aPa = aPZ = 2
	}

	function aPg() {
		29 === br.bs && br.hN().pN(hc.wb.sV(aPY.c9, 5))
	}

	function aPi(id, value) {
		5 === id && y.kr.a5G({
			action: 3,
			c9: hc.wb.sV(aPY.c9, 5),
			value: value
		})
	}

	function aPh(e2, e3, aPr) {
		aPX.show(e2, e3, aPr), bf.or.show(aPX.e2, aPX.e3, aPY, 1)
	}
	this.pG = function(a6, hm) {
		aPZ = 1, aPY = hm, aPX = new aPc([new cN(L(434), aPd, 0 === hm.aA1 ? 1 : 0), new cN(L(435), aPe, aPf()), new cN(L(436), aPg, 0)]), aPh((aPb = {
			clientX: a6.clientX,
			clientY: a6.clientY
		}).clientX, aPb.clientY, 1)
	}, this.dM = function(code) {
		if (29 !== br.bs) return !1;
		if (!aPY) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.u();
			else if (aB.oB.startsWith(code, "Numpad") || aB.oB.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aPZ) this.pG(aPb, aPY);
				else {
					if (!aPX) return !1;
					1 === aPZ ? code <= 1 ? aPd() : 2 === code ? aPe() : (aPg(), this.u()) : (aPi(aPa, io.du(code - 1, 0, a2v.a7h[aPa].length - 1)), this.u())
				}
		}
		return !0
	}, this.u = function() {
		aPZ = 0, aPX && aPX.u(), aPX = null, bf.or.u()
	}
}

function a0p() {
	var aPs = new Uint8Array(64);
	this.g = function() {
		var c8;
		for (aPs[0] = 45, aPs[37] = 95, c8 = 0; c8 < 10; c8++) aPs[c8 + 1] = 48 + c8;
		for (c8 = 0; c8 < 26; c8++) aPs[c8 + 11] = 65 + c8, aPs[c8 + 38] = 97 + c8
	}, this.y3 = function(aEN) {
		for (var a52 = ft, a8C = new Uint8Array(aEN), c8 = 0; c8 < aEN; c8++) a8C[c8] = a52.fu(6);
		return a8C
	}, this.y2 = function(a8C) {
		for (var cI = a8C.length, aPt = aPs, dT = [], c8 = 0; c8 < cI; c8++) dT.push(String.fromCharCode(aPt[a8C[c8]]));
		return dT.join("")
	}, this.sV = function(value, aPu) {
		for (var aPt = aPs, dT = [], c8 = 0; c8 < aPu; c8++) dT.push(String.fromCharCode(aPt[value >> 6 * (aPu - 1 - c8) & 63]));
		return dT.join("")
	}
}

function a7w() {
	var aPv = new Uint16Array(bz.fi);

	function aQ2(player, aQ0) {
		for (var cI = er.et[0], vq = er.vq, aQ8 = -1, aHU = bz.fi, c8 = 0; c8 < cI; c8++) {
			var n9, es = vq[c8];
			nI.r7(player, es) && (n9 = kA.a0W(aQ0, kA.a0l(es)), -1 === aQ8 || n9 < aQ8) && (aQ8 = n9, aHU = es)
		}
		return aHU
	}

	function aQ4(aQ1, aQ0) {
		if (aQ1 === bz.fi) return 0;
		var jW = ef.jW[aQ1],
			dU = jW.length;
		if (0 === dU) return 0;
		for (var cI = Math.min(dU, 10), aHU = 0, aQ8 = kA.a0W(jW[aHU] >> 2, aQ0), c8 = 0; c8 < cI; c8++) {
			var sc = qT.u4(dU),
				n9 = kA.a0W(jW[sc] >> 2, aQ0);
			n9 < aQ8 && (aQ8 = n9, aHU = sc)
		}
		return jW[aHU] >> 2
	}

	function aQ5(player, aQ0, lt, aQ9) {
		var aQA;
		(aQ9 === bz.fi || (aQA = kA.a0l(lt), aQ9 = kA.a0l(aQ9), kA.a0W(aQ0, aQA) < kA.a0W(aQ0, aQ9))) && (aPv[player] = lt)
	}
	this.g = function() {
		aPv.fill(bz.fi)
	}, this.a85 = function() {
		if (cm.lJ() % 109 == 9 && !(en.ep < 20) && bz.eN && !(go.eW() < io.dp(8 * bz.rE, 10))) {
			var eZ = go.ea();
			if (eb.ec[eZ]) {
				go.eu(eZ);
				var cI = er.et[0];
				if (0 !== cI)
					for (var dT = er.eq, em = en.em, ep = en.ep, aPw = aPv, sc = qT.u4(cI), c8 = 0; c8 < ep; c8++) {
						var a1W = em[c8],
							a1X = dT[sc];
						aB.lk.qj(a1W, a1X) && 512 === aPw[a1W] && (aPw[a1W] = a1X, sc = (sc + 1) % cI)
					}
			}
		}
	}, this.dI = function(player) {
		var aQ0, aQ3, aQ1, aPx = function(player) {
			var lt = aPv[player];
			if (lt !== bz.fi) {
				if (aB.lk.qn(lt) && ef.jW[lt]) return lt;
				aPv[player] = bz.fi
			}
			return bz.fi
		}(player);
		return function(player) {
			for (var wE = en.em, dU = en.ep, cI = Math.min(dU, dU < 17 && 5 === qT.u4(20) ? 1 : 16), bv = qT.u4(dU), vq = er.vq, jW = ef.jW, el = 0, c8 = 0; c8 < cI; c8++) {
				var es = wE[(c8 + bv) % dU];
				es !== player && jW[es].length && (vq[el++] = es)
			}
			er.et[0] = el
		}(player), 0 !== er.et[0] && (0 < (aQ3 = aQ4(aQ1 = aQ2(player, aQ0 = kA.a0m(player)), aQ0)) && g6.mK.aDw(player, g6.k7.aE5(aQ3, aQ0)) ? (aQ5(player, aQ0, aQ1, aPx), !0) : 0 < (aQ1 = function(player, aQ0) {
			for (var cI = er.et[0], vq = er.vq, aPw = aPv, bv = 0, c8 = 0; c8 < cI; c8++) {
				var es = vq[c8],
					es = aPw[es];
				es !== bz.fi && aB.lk.qn(es) && player !== es && nI.r7(player, es) && (vq[bv++] = es)
			}
			return 0 !== (er.et[0] = bv) ? aQ4(aQ2(player, aQ0), aQ0) : 0
		}(player, aQ0)) && g6.mK.aDw(player, g6.k7.aE5(aQ1, aQ0)) ? (aQ5(player, aQ0, n0.rb(aQ1 << 2), aPx), !0) : !!(0 < (aQ3 = aQ4(aPx, aQ0)) && g6.mK.aDw(player, g6.k7.aE5(aQ3, aQ0))))
	}
}

function zi() {
	var a9o, aQE, lQ = document.createElement("div"),
		aQC = document.createElement("div"),
		aQD = document.createElement("div"),
		lS = document.createElement("div"),
		pH = [],
		a7f = [L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444)],
		aQF = [1, 2, 3, 0, 9, 10, 11, 13];

	function aQG(c8) {
		br.cP(8, 0, new d4(21, {
			j7: aQF[c8],
			x4: 0,
			x5: 10
		}))
	}
	this.show = function() {
			this.dc(br.z.a5I), document.body.appendChild(lQ)
		}, this.u = function() {
			br.removeChild(document.body, lQ)
		}, this.dc = function(a5I) {
			for (var aQI = [3, 0, 1, 2, 4, 5, 6, 7], c8 = 0; c8 < pH.length; c8++) {
				var eJ = a5I[c8];
				a9o[aQI[c8]][1].oA.textContent = eJ || ""
			}
		}, this.resize = function() {
			var c8, z2 = dk.gap,
				gP = aB.dE.aFZ(.085),
				eJ = Math.min(4 * gP, eT.eJ - 2 * z2),
				cI = pH.length;
			for (aB.dE.zt(lQ, z2, eT.gP - z2 - gP, eJ, gP), aB.dE.lg(lQ), aB.dE.lg(aQC, 6), c8 = 0; c8 < cI - 1; c8++) aB.dE.lg(pH[c8].button, 6);
			for (c8 = 0; c8 < cI; c8++) a9o[c8][0].resize(), a9o[c8][1].resize();
			for (pH[0].e2 = 0, pH[0].button.style.left = aB.dE.dj(pH[0].e2), pH[0].button.style.width = aB.dE.aQJ(1.7 * gP), c8 = 1; c8 < cI; c8++) pH[c8].e2 = pH[c8 - 1].e2 + pH[c8 - 1].button.offsetWidth, pH[c8].button.style.left = aB.dE.dj(pH[c8]
				.e2);
			if (!aQE) {
				if (!iH.iI()) return;
				(aQE = iH.get(14)).style.width = "24%", aQE.style.position = "absolute", aQC.appendChild(aQE)
			}
			aQE.style.left = aB.dE.dj(0), aQE.style.top = "7%", aQD.li && (aQD.scrollLeft = aQD.li)
		}, lQ.style.position = "absolute", aQC.style.width = "25%", aQC.style.height = "100%", aQC.style.backgroundColor = dK.aH, aQD.style.position = "absolute", aQD.style.width = "75%", aQD.style.height = "100%", aQD.style.backgroundColor = dK.aH,
		aQD.style.top = aQD.style.right = aB.dE.dj(0), aB.dE.lV(aQD), lS.style.height = lS.style.maxHeight = "100%", pH.push(new cN("", function() {
			aQG(0)
		}, dK.b6)), pH.push(new cN("", function() {
			aQG(1)
		}, dK.b7)), pH.push(new cN("", function() {
			aQG(2)
		}, dK.az)), pH.push(new cN("", function() {
			aQG(3)
		}, dK.aj)), pH.push(new cN("", function() {
			aQG(4)
		}, dK.bW)), pH.push(new cN("", function() {
			aQG(5)
		}, dK.bS)), pH.push(new cN("", function() {
			aQG(6)
		}, dK.bW)), pH.push(new cN("", function() {
			aQG(7)
		}, dK.aC)), a9o = new Array(pH.length);
	for (var c8 = 0; c8 < pH.length; c8++) pH[c8].button.style.position = "absolute", a9o[c8] = [new aQH(a7f[c8], pH[c8].button, .25, .45), new aQH("", pH[c8].button, .53, .84, 1)], pH[c8].button.style.height = pH[c8].button.style.maxHeight = "100%",
		pH[c8].button.top = aB.dE.dj(0), lS.appendChild(pH[c8].button);
	aQD.appendChild(lS), lQ.appendChild(aQC), lQ.appendChild(aQD)
}

function aQK() {
	this.aQL = function(j7, x4, x5) {
		hQ.cB(75), hQ.hS(1, 0), hQ.hS(6, 21), hQ.hS(6, j7), hQ.hS(1, +(x4 < 0)), hQ.hS(1, +(x5 < 0)), hQ.hS(30, Math.abs(x4)), hQ.hS(30, Math.abs(x5)), y.z.send(0, hQ.s)
	}, this.aQM = function(j7, x8, x9) {
		hQ.cB(18 + 16 * x8.length + 30), hQ.hS(1, 0), hQ.hS(6, 22), hQ.hS(6, j7), y.kw.hx(x8), hQ.hS(30, x9), y.z.send(0, hQ.s)
	}, this.aQN = function(j7, x8, x9) {
		hQ.cB(73), hQ.hS(1, 0), hQ.hS(6, 28), hQ.hS(6, j7), j8.wb.a5A(x8, 5), hQ.hS(30, x9), y.z.send(0, hQ.s)
	}, this.aQO = function(a5M, a4f) {
		for (var cI = a4f.length, jC = 0, c8 = 0; c8 < cI; c8++) jC += a4f[c8].length;
		for (hQ.cB(21 + 3 * cI + 16 * jC), hQ.hS(1, 0), hQ.hS(6, 23), hQ.hS(3, a5M), hQ.hS(4, cI), hQ.hS(7, jC), c8 = 0; c8 < cI; c8++) hQ.hS(3, a4f[c8].length), hc.hi.hj(a4f[c8]);
		y.z.send(0, hQ.s)
	}, this.aQP = function(a5M, x4, x5) {
		hQ.cB(52), hQ.hS(1, 0), hQ.hS(6, 24), hQ.hS(3, a5M), hQ.hS(1, +(x4 < 0)), hQ.hS(1, +(x5 < 0)), hQ.hS(20, Math.abs(x4)), hQ.hS(20, Math.abs(x5)), y.z.send(0, hQ.s)
	}
}

function a8F() {
	this.qC = function(player) {
		for (var a12 = g6.z.a12, x4 = player << 3, c8 = x4 + g6.z.g7[player] - 1; x4 <= c8; c8--) this.a1i(a12[c8])
	}, this.a1i = function(aQQ) {
		var z = g6.z,
			aQR = z.g8 - 1,
			aQS = z.rk[aQQ],
			aQT = z.a0x[aQQ],
			aQU = z.kC[aQQ];
		z.g8 = aQR, z.rk[aQQ] = z.rk[aQR], z.kC[aQQ] = z.kC[aQR], z.a0w[aQQ] = z.a0w[aQR], z.ri[aQQ] = z.ri[aQR], z.a0x[aQQ] = z.a0x[aQR], z.rj[aQQ] = z.rj[aQR], z.a0y[aQQ] = z.a0y[aQR], z.a0z[aQQ] = z.a0z[aQR], z.a10[aQQ] = z.a10[aQR], z.a11[
				aQQ] = z.a11[aQR], z.a12[z.rk[aQQ]] = aQQ,
			function(fA) {
				var player = fA >> 3,
					z = g6.z,
					cI = z.g7[player] - 1,
					aQX = (player << 3) + cI;
				z.g7[player] = cI, aQX !== fA && (z.a12[fA] = z.a12[aQX], z.rk[z.a12[fA]] = fA)
			}(aQS), g6.a0f.a0f[kA.a0e(z.kC[aQQ])][z.a0x[aQQ]] = aQQ, aQR = kA.a0e(aQU), aQS = aQT, aQR = g6.a0f.a0f[aQR], z = aQR.pop(), aQS !== aQR.length && (aQR[aQS] = z, g6.z.a0x[z] = aQS)
	}
}

function a38() {
	this.g = function() {
		if (0 === bz.data.sResourcesType) {
			for (var a16 = bz.fj, g5 = ef.g5, c8 = 0; c8 < a16; c8++) g5[c8] = 512;
			var a17 = bz.zI,
				aKk = fq.aKk,
				me = fq.me;
			for (c8 = a16; c8 < a17; c8++) g5[c8] = aKk[me[c8]]
		} else(1 === bz.data.sResourcesType ? function() {
			for (var cI = bz.zI, g5 = ef.g5, sResourcesValue = bz.data.sResourcesValue, c8 = 0; c8 < cI; c8++) g5[c8] = sResourcesValue
		} : function() {
			for (var cI = bz.zI, g5 = ef.g5, sResourcesData = bz.data.sResourcesData, c8 = 0; c8 < cI; c8++) g5[c8] = sResourcesData[c8]
		})();
		ch.qa[8] = ef.g5[bz.cr]
	}
}

function aQc() {
	this.g = function() {
		this.aJ1 = 0, this.a4Q = [], this.a4Z = 0, this.a4P = 0
	}, this.pO = function() {
		var a1D;
		bz.wx || (a1D = this, 2 === bz.a4U ? a1D.a4Q = qM.aQe.aAg() : bz.eN ? a1D.a4Q = qM.aQe.aAh() : a1D.a4Q = qM.aQe.aAi(), a1D.aJ1 = cE.qE.aJ0(), a1D.a4Z = Math.max(1, qM.aQe.aAj(a1D.a4Q)), cs.lk.aAO(), 8 === bz.qS ? qM.result.a4P = 0 : a1D
			.a4P = 100 * qM.result.aJ1 * (1 + bz.a63))
	}
}

function a3n() {
	this.size = 0, this.h = 0, this.s = null, this.g = function(s) {
		this.h = 0, this.s = s, this.size = s.length
	}, this.gt = function() {
		this.s = null
	}, this.fu = function(size) {
		for (var dt = 0, s = this.s, fs = this.h + size - 1, c8 = this.h; c8 <= fs; c8++) dt |= (s[c8 >> 3] >> 7 - (7 & c8) & 1) << fs - c8;
		return this.h += size, this.h > 8 * this.size && console.error("Unwrapper Overflow"), dt
	}, this.jA = function(size) {
		var dr = size >> 1;
		return (1 << dr) * this.fu(size - dr) + this.fu(dr)
	}, this.jD = function(wN) {
		return this.size === hQ.j5(wN)
	}, this.aQg = function(a51, aGN, aQh) {
		var el = this.fu(a51);
		if (!el) return null;
		for (var a51 = Math.max(el, aQh), dT = new(aGN <= 8 ? Uint8Array : aGN <= 16 ? Uint16Array : Uint32Array)(a51), c8 = 0; c8 < el; c8++) dT[c8] = this.fu(aGN);
		aQh = dT[el - 1];
		return aQh && dT.fill(aQh, el), dT
	}, this.aQi = function(a51, aGQ, aQh) {
		var el = this.fu(a51);
		if (!el) return null;
		for (var a51 = Math.max(el, aQh), dT = new Array(a51), c8 = 0; c8 < el; c8++) dT[c8] = this.aQj(aGQ);
		return dT.fill(dT[el - 1], el), dT
	}, this.aQj = function(a51) {
		return j8.hi.jE(this.fu(a51))
	}, this.aQk = function() {
		var dZ = hc.wb.y2(hc.wb.y3(this.fu(30))),
			dZ = aB.oB.aGS(dZ, "_", "/");
		dZ = aB.oB.aGS(dZ, "-", "+");
		for (var aQl = "";
			(dZ.length + aQl.length) % 4;) aQl += "=";
		dZ = "data:image/png;base64," + dZ + aQl;
		var h3 = new Image;
		h3.onload = function() {
			lo.zl.aQm(h3), h3.onload = null, h3 = null
		}, h3.src = dZ
	}
}

function aQn() {
	this.gf = null, this.aQo = null, this.aQp = null, this.g = function() {
		this.pn = [L(445), L(446), L(447), L(448), L(449), L(450), L(451), L(452), L(453), L(454), L(455), L(456), L(457), L(458), L(459), L(460), L(461), L(462), L(463), L(464), L(465), L(466), L(467), L(468), "Mare Nostrum"];
		var aQq = [120, 105, 92],
			cos = [12, 12, 60],
			aQr = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aQs = [140, 130, 120],
			aQt = [12, 12, 76],
			aQu = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aQv = [130, 117, 106],
			aQw = [12, 12, 68],
			aQx = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.gf = new Array(c2.a5U + 1), this.gf[0] = {
			eJ: 230,
			gP: 230,
			ji: 1e3,
			jf: 2e3,
			pt: 173
		}, this.gf[1] = {
			eJ: 800,
			gP: 800,
			ji: 100,
			jf: 50,
			pt: 43
		}, this.gf[2] = {
			eJ: 512,
			gP: 512,
			ji: 128,
			jf: 32,
			pt: 0
		}, this.gf[3] = {
			eJ: 960,
			gP: 960,
			ji: 60,
			jf: 8,
			pt: 0
		}, this.gf[4] = {
			eJ: 900,
			gP: 900,
			ji: 100,
			jf: 5,
			pt: 0
		}, this.gf[5] = {
			eJ: 1e3,
			gP: 1e3,
			ji: 100,
			jf: 40,
			pt: 0
		}, this.gf[6] = {
			eJ: 1e3,
			gP: 1e3,
			ji: 100,
			jf: 20,
			pt: 0
		}, this.gf[7] = {
			eJ: 1024,
			gP: 1024,
			ji: 128,
			jf: 32,
			pt: 0
		}, this.gf[8] = {
			eJ: 820,
			gP: 820,
			ji: 200,
			jf: 100,
			pt: 0
		}, this.gf[9] = {
			eJ: 1024,
			gP: 1024,
			ji: 128,
			jf: 32,
			pt: 0
		}, this.gf[10] = {
			aR1: aQs,
			aR2: aQt,
			aR3: aQu
		}, this.gf[11] = {
			aR1: aQv,
			aR2: aQw,
			aR3: aQx
		}, this.gf[12] = {
			aR1: aQv,
			aR2: aQw,
			aR3: aQx
		}, this.gf[13] = {
			aR1: aQq,
			aR2: cos,
			aR3: aQr
		}, this.gf[14] = {
			aR1: aQq,
			aR2: cos,
			aR3: aQr
		}, this.gf[15] = {
			aR1: aQs,
			aR2: aQt,
			aR3: aQu
		}, this.gf[16] = {
			aR1: aQs,
			aR2: aQt,
			aR3: aQu
		}, this.gf[17] = {
			aR1: aQq,
			aR2: cos,
			aR3: aQr
		}, this.gf[18] = {
			aR1: aQv,
			aR2: aQw,
			aR3: aQx
		}, this.gf[19] = {
			aR1: aQq,
			aR2: cos,
			aR3: aQr
		}, this.gf[20] = {
			eJ: 1024,
			gP: 1024,
			ji: 128,
			jf: 32,
			pt: 0
		}, this.gf[21] = {
			eJ: 940,
			gP: 940,
			ji: 80,
			jf: 8,
			pt: 0
		}, this.gf[22] = {
			aR1: aQv,
			aR2: aQw,
			aR3: aQx
		}, this.gf[23] = {
			aR1: aQs,
			aR2: aQt,
			aR3: aQu
		}, this.gf[24] = {
			aR1: [157, 136, 117],
			aR2: [16, 13, 68],
			aR3: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a6x: "[OG] Neutronian"
		};
		for (var c8 = 0; c8 < c2.a5U; c8++) this.gf[c8].name = this.pn[c8];
		this.gf[c2.a5U] = {
			name: ""
		}, this.aQo = new Uint8Array(12);
		for (c8 = 0; c8 < 10; c8++) this.aQo[c8] = c8;
		for (this.aQo[10] = 20, this.aQo[11] = 21, this.aQp = new Uint8Array(c2.aR4), c8 = 0; c8 < 10; c8++) this.aQp[c8] = 10 + c8;
		this.aQp[10] = 22, this.aQp[11] = 23, this.aQp[12] = 24
	}
}

function aR5() {
	this.aO6 = function(h, ca) {
		return Number(this.aO7(h, ca))
	}, this.aO7 = function(h, ca) {
		var dt = null;
		return 0 === cZ.id ? cZ.aOl && (dt = cZ.aOl.getItem((ca ? "v" : "d") + h)) : 1 === cZ.id ? dt = cZ.hA.loadString((ca ? 1e3 : 2e3) + h) : 2 === cZ.id && (dt = cZ.aOm[(ca ? "v" : "d") + h]), dt && 0 !== dt.length ? dt : null
	}, this.aR6 = function(cI, aR7) {
		var dT = [],
			aR8 = aR7 ? "e" : "l";
		if (0 === cZ.id) {
			if (cZ.aOl)
				for (c8 = 0; c8 < cI; c8++) dT.push(cZ.aOl.getItem(aR8 + c8))
		} else if (1 === cZ.id)
			for (var aR9 = aR7 ? 5e3 : 3e3, c8 = 0; c8 < cI; c8++) dT.push(cZ.hA.loadString(aR9 + c8));
		else if (2 === cZ.id)
			for (c8 = 0; c8 < cI; c8++) dT.push(cZ.aOm[aR8 + c8]);
		return dT
	}, this.save = function(h, value, ca) {
		var aB8 = (ca ? "v" : "d") + h;
		if (0 === cZ.id) {
			if (cZ.aOl && d1.d2.data[140].value) try {
				cZ.aOl.setItem(aB8, value)
			} catch (a6) {
				console.log(a6)
			}
		} else 1 === cZ.id ? cZ.hA.saveString((ca ? 1e3 : 2e3) + h, value) : 2 === cZ.id && (cZ.aOm[aB8] = value, cZ.aOn.postMessage(aB8 + " " + value))
	}, this.aRA = function(dT, aR7) {
		var cI = dT.length,
			aR8 = aR7 ? "e" : "l";
		if (0 === cZ.id) {
			if (cZ.aOl && d1.d2.data[140].value) try {
				for (c8 = 0; c8 < cI; c8++) cZ.aOl.setItem(aR8 + c8, dT[c8])
			} catch (a6) {
				console.log(a6)
			}
		} else if (1 === cZ.id)
			for (var aR9 = aR7 ? 5e3 : 3e3, c8 = 0; c8 < cI; c8++) cZ.hA.saveString(aR9 + c8, dT[c8]);
		else if (2 === cZ.id)
			for (c8 = 0; c8 < cI; c8++) cZ.aOm[aR8 + c8] = dT[c8], cZ.aOn.postMessage(aR8 + c8 + " " + dT[c8])
	}
}

function aRB() {
	this.aN6 = 1, this.gA = function(k9) {
		bz.wx ? cs.g9.gA(bz.cr, k9) : y.lC.aRC(k9)
	}, this.gB = function(ls, lt) {
		this.aN6 && (this.aN6 = 0, d1.db.dc(182, ls)), bz.wx ? cs.g9.gB(bz.cr, ls, lt) : y.lC.aRD(ls, lt)
	}, this.mE = function(ls, m7) {
		bz.wx ? cs.g9.gC(bz.cr, ls, m7) : y.lC.aRE(ls, m7)
	}, this.gD = function(ls, k9) {
		k9 = (k9 << 3) + er.mG[6];
		bz.wx ? cs.g9.gD(bz.cr, ls, k9) : g6.mH.mI(bz.cr) && y.lC.aRF(ls, k9)
	}, this.gE = function(ls) {
		849 === ls && (ls = 850);
		var k5 = er.mG[3];
		bz.wx ? cs.g9.gE(bz.cr, ls, k5) : g6.mR.aRG(bz.cr, k5) && y.lC.aRH(ls, k5)
	}, this.mQ = function(k5) {
		bz.wx ? cs.g9.mQ(bz.cr, k5) : y.lC.aRH(849, k5)
	}, this.gF = function(lt) {
		bz.wx ? cs.g9.gF(bz.cr, lt) : y.lC.aRI(lt)
	}, this.a6d = function(mV) {
		bz.wx ? cs.g9.gG(bz.cr, mV) : y.lC.aRJ(mV)
	}, this.gH = function(mX) {
		bz.wx ? cs.g9.gH(bz.cr, mX) : y.lC.aRK(mX)
	}, this.cu = function() {
		bz.wx ? cs.g9.cu(bz.cr) : y.lC.aRL()
	}, this.d0 = function() {
		bz.wx ? cs.g9.d0(bz.cr) : y.lC.aRI(513)
	}, this.gJ = function(ls, k9, lt) {
		bz.wx ? cs.g9.gJ(bz.cr, ls, k9, lt) : y.lC.aRM(ls, k9, lt)
	}
}

function a5r() {
	this.v2 = !1;
	this.tK = [], this.tJ = 100;
	var kD, kF, gap, tH, aRN, aRP, aRQ = 0,
		aRR = new Array(9),
		aRS = [],
		aRT = [],
		aRU = 0,
		aRV = 0,
		aRW = 0,
		aRX = 0;

	function aRc() {
		aRR.sort(function(dq, dr) {
			return dr.gM - dq.gM
		});
		for (var dZ = "" + aRR[0].mV, c8 = 1; c8 < 9; c8++) dZ += "," + aRR[c8].mV;
		for (c8 = 0; c8 < 9; c8++) dZ += "," + aRR[c8].gM;
		d1.d2.oZ(120, dZ)
	}
	this.g = function() {
		for (var aRY = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], c8 = 0; c8 < aRY.length; c8++) {
			var color = 6 === aRY[c8] ? dK.al : dK.aJ;
			this.tK.push(aB.canvas.a90(iH.get(3), aRY[c8], color))
		}
		for (c8 = 0; c8 < sd.oQ.tL; c8++) aRT.push(sd.oQ.aCk - sd.oQ.tL + c8);
		for (c8 = 0; c8 < sd.oQ.aCj; c8++) aRT.push(sd.oQ.zK + c8);
		var aBI = sd.oQ.aCo(d7.aBI);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = aBI.slice(), c8 = 0; c8 < aBI.length; c8++) aRT.push(aBI[c8]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					aRR[q] = {
						mV: isNaN(qcode) ? 1015 + q : qcode,
						gM: 0
					}
				} else {
					var c8, dT = d1.d2.data[120].value.split(",");
					if (18 !== dT.length)
						for (c8 = 0; c8 < 9; c8++) aRR[c8] = {
							mV: 1015 + c8,
							gM: 0
						};
					else
						for (c8 = 0; c8 < 9; c8++) {
							var dt = parseInt(dT[c8]),
								aA = (dt = 0 <= dt && dt < sd.oQ.aCk ? dt : 0, parseInt(dT[c8 + 9]));
							aA = 0 <= aA && aA < 1e3 ? aA : 0, aRR[c8] = {
								mV: dt,
								gM: aA
							}
						}
				}
		}()
	}, this.show = function(si, sj, a1U) {
		var c8;
		if (aRU = si, aRV = sj, aRQ = a1U || 0, this.v2 = !0, aRS = [], 0 === aRQ)
			for (c8 = 0; c8 < 9; c8++) aRS.push(aRR[c8].mV);
		else {
			var dr = 49 * aRQ,
				a1U = dr - 49;
			for (a1U >= aRT.length && (aRQ = 1, a1U = 0, dr = 49), c8 = a1U = (dr = Math.min(dr, aRT.length)) - 49; c8 < dr; c8++) aRS.push(aRT[c8])
		}
		aRS.push(1024);
		a1U = aRS.length, tH = Math.floor((cZ.cb.eR() ? .075 : .0468) * eT.eU), gap = Math.floor(tH / 3), (aRW = 10 * (aRN = tH + gap)) > eT.eJ && (aRW = eT.eJ, gap = (aRN = aRW / 10) - (tH = 3 * aRN / 4)), aRP = io.dp(a1U, 10) + !!(a1U % 10), (
			aRX = aRP * aRN) > eT.gP && (aRX = eT.gP, gap = (aRN = aRX / aRP) - (tH = 3 * aRN / 4)), a1U = .5 * gap;
		kD = Math.min(Math.max(si - .5 * aRW + a1U, a1U), eT.eJ - aRW + a1U), kF = Math.min(Math.max(sj - .5 * aRX + a1U, a1U), eT.gP - aRX + a1U)
	}, this.ub = function(si, sj, player) {
		if (!this.v2) return !1;
		if (this.aLq(si, sj)) {
			si = io.du(io.dp(si - kD + .5 * gap, aRN), 0, 9);
			if ((si += 10 * io.du(io.dp(sj - kF + .5 * gap, aRN), 0, 9)) >= aRS.length) return iX.u(), !0;
			sj = aRS[si];
			if (1024 === sj) return this.show(aRU, aRV, aRQ + 1), !0;
			! function(mV) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var c8 = 0; c8 < 9; c8++) aRR[c8].gM = Math.floor(.99 * aRR[c8].gM);
					for (c8 = 0; c8 < 9; c8++)
						if (mV === aRR[c8].mV) return aRR[c8].gM = Math.min(aRR[c8].gM + 30, 999), aRc();
					aRR.splice(5, 0, {
						mV: mV,
						gM: Math.max(aRR[4].gM, 30)
					}), aRR.pop(), aRc()
				}
			}(sj), player === bz.cr ? cs.ct.a6d(sj) : cs.lk.aRe(sj, player)
		}
		return iX.u(), !0
	}, this.aLq = function(si, sj) {
		return !(si < kD - .5 * gap || sj < kF - .5 * gap || kD + aRW - .5 * gap <= si || kF + aRX - .5 * gap <= sj)
	}, this.fC = function() {
		fD.fillStyle = dK.aI, fD.fillRect(kD - .5 * gap, kF - .5 * gap, aRW, aRX);
		for (var sc = .5 * dk.yz, cI = (fD.lineWidth = dk.yz, fD.strokeStyle = fD.fillStyle = dK.aL, fD.strokeRect(kD - .5 * gap + sc, kF - .5 * gap + sc, aRW - 2 * sc, aRX - 2 * sc), fD.imageSmoothingEnabled = !0, aRS.length), c8 = 0; c8 <
			cI; c8++) this.a6O(aRS[c8], fD, kD + c8 % 10 * aRN, kF + io.dp(c8, 10) * aRN, tH);
		fD.imageSmoothingEnabled = !1
	}, this.a6O = function(mV, hB, e2, e3, tH) {
		var mx;
		mV >= 1024 - sd.oQ.tL ? (mx = tH / this.tJ, hB.setTransform(mx, 0, 0, mx, e2, e3), hB.drawImage(this.tK[mV - 1024 + sd.oQ.tL], 0, 0), hB.setTransform(1, 0, 0, 1, 0, 0)) : (aB.dE.textAlign(hB, 1), aB.dE.textBaseline(hB, 1), hB.font = aB.dE
			.f9(0, .89 * tH), hB.fillText(sd.oQ.tM(mV), e2 + .5 * tH, e3 + (.35 - aB.dE.t5 + .56) * tH))
	}
}

function aRf() {
	var h = 0,
		gX = cm.gX;
	this.xx = 0, this.dI = function() {
		eT.dI(), bz.k2 ? aB0() : 0 === h ? cm.gX >= gX && (gX += cm.aB1 * Math.floor(1 + (cm.gX - gX) / cm.aB1), 2 === bz.gb || cp.cv ? aB2() : (aB9(), kg.render()), h++) : ((cp.cv ? aB0 : (cm.cn = !0, aB7))(), h = 0), aB5(), cm.cn && (cm.cn = !
			1, aB6())
	}
}

function aRg() {
	for (var aA = document.createElement("canvas"), aA = (aA.width = 24, aA.height = 24, aA.getContext("2d", {
			alpha: !1
		})), by = (aA.fillStyle = "rgb(0,0,0)", aA.fillRect(0, 0, 24, 24), aA.font = "22px system-ui", aA.textBaseline = "middle", aA.textAlign = "center", aA.fillStyle = "rgb(255,255,255)", aA.fillText("Q", 12, 12), aA.getImageData(0, 0, 24, 24)
			.data), cI = by.length, dU = 0, c8 = 0; c8 < cI; c8 += 4) dU += by[c8];
	return 16383 & dU
}

function aCh() {
	this.aRh = 28, this.eI = 0, this.aRi = null;
	var aRk = this.aRj = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aRo(tH, aRq) {
		var e2, e3, k9, e4, tN = aB.dE.i9(tH, tH),
			hB = aB.dE.getContext(tN, !0),
			it = aB.dE.getImageData(hB, tH, tH),
			iv = it.data,
			dU = (tH >> 1) - .5,
			aRr = .5 + dU;
		for (aRr *= aRr, e3 = 0; e3 < tH; e3++)
			for (e2 = 0; e2 < tH; e2++) e4 = (e4 = e2 - dU) * e4 + (e4 = e3 - dU) * e4, iv[k9 = 4 * (e3 * tH + e2)] = aRq[0], iv[1 + k9] = aRq[1], iv[2 + k9] = aRq[2], iv[3 + k9] = (aRr - e4) * aRq[3] / aRr;
		return hB.putImageData(it, 0, 0), tN
	}

	function aRx(c8, hB, tN, tH) {
		var highlight, e2, e3;
		0 !== ef.fo[c8] && 0 !== ef.eg[c8] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[c8]) && (tH *= 2), e2 = ef.jP[c8] + ef.jR[c8] + 1 - tH - 2 >> 1, e3 = ef.jQ[c8] + ef.jS[c8] + 1 - tH - 2 >> 1, highlight ? hB
			.drawImage(tN[bz.eN ? 9 === bz.qS && 5 === fq.me[c8] ? 3 : eb.eo[c8] : c8 < bz.fj ? 1 : 0], e2, e3, tH, tH) : hB.drawImage(tN[bz.eN ? 9 === bz.qS && 5 === fq.me[c8] ? 3 : eb.eo[c8] : c8 < bz.fj ? 1 : 0], e2, e3))
	}
	this.g = function() {
		var a1D;
		this.eI = 700,
			function(a1D) {
				var tH = a1D.aRh;
				if (a1D.aRj = [], aRk = [], bz.eN) {
					for (var c8 = 0; c8 <= bz.eO; c8++) a1D.aRj.push(aRo(tH, eb.aHA[eb.ec[c8]])), aRk.push(aRo(tH >> 1, eb.aHA[eb.ec[c8]]));
					9 === bz.qS && aRk.push(aRo(tH, eb.aHA[1]))
				} else a1D.aRj.push(aRo(tH, eb.aHA[7])), a1D.aRj.push(aRo(tH, eb.aHA[4])), aRk.push(aRo(tH >> 1, eb.aHA[7]))
			}(this),
			function(a1D, aRv) {
				var c8, aRi = a1D.aRi,
					hB = aB.dE.getContext(aRi, !0),
					cI = bz.fi,
					tH = a1D.aRh >> 1;
				hB.imageSmoothingEnabled = !1, hB.setTransform(1, 0, 0, 1, 0, 0), aRv && hB.clearRect(0, 0, aRi.width, aRi.height);
				if (9 === bz.qS) {
					tH <<= 1;
					a1D = qV.zC[5];
					for (c8 = cI - a1D; c8 < cI; c8++) aRx(c8, hB, aRk, tH);
					cI -= a1D, tH >>= 1
				}
				for (c8 = bz.fj; c8 < cI; c8++) aRx(c8, hB, aRk, tH)
			}(this, null !== (a1D = this).aRi && a1D.aRi.width === c2.k0 - 2 && a1D.aRi.height === c2.k1 - 2 || (a1D.aRi = aB.dE.i9(c2.k0 - 2, c2.k1 - 2), !1)), bz.k2 || this.aAp()
	}, this.aRp = aRo, this.aAp = function() {
		for (var cI = bz.fj, tH = this.aRh, aRj = this.aRj, hB = aB.dE.getContext(this.aRi, !0), c8 = 0; c8 < cI; c8++) aRx(c8, hB, aRj, tH)
	}
}

function aRy() {
	var cK, fG, fL;
	this.show = function() {
		cK.show(), this.resize()
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), fG.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(L(5), [new cN("⬅️ " + L(14), function() {
		br.kl()
	})]), fG = new fJ(cK.cf, ((fL = []).push(function() {
		function aDn() {
			aDm.button.textContent = L(250), aS1.a6.readOnly = !1, aS2.a6.readOnly = !1, kp.dL(1), kp.button.style.color = dK.aL
		}
		var fQ = new fR,
			aS0 = (fQ.kn(y.z.dG("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", fQ.fS(L(469)), new fW({
				value: d1.d2.data[105].value,
				h: -1
			})),
			aS1 = (aS0.a6.readOnly = !0, fQ.fX(aS0), fQ.fS(L(470), "0.8em"), new fW(d1.d2.data[148], 0, void 0, function(a6) {
				aMX(d1.d2.data[149].value, a6.target.value)
			})),
			aS2 = (fQ.fX(aS1), fQ.fS(L(471), "0.8em"), new fW(d1.d2.data[149], 1, void 0, function(a6) {
				aMX(a6.target.value, d1.d2.data[148].value)
			})),
			aDm = (fQ.fX(aS2), new cN(L(250), function(a6) {
				return a6.textContent === L(250) ? (a6.textContent = L(249), aS1.a6.readOnly = !0, aS2.a6.readOnly = !0, kp.dL(0), kp.button.style.color = dK.bL, d1.db.dc(149, aS2.a6.value), aMX(d1.d2.data[149].value, d1.d2
					.data[148].value)) : aDn(), !0
			})),
			kp = (fQ.fX(new fY([aDm.button])), new cN(L(59), function(a6) {
				return aS1.a6.readOnly && y.z.m(0) && (aB.dE.kq(a6), aDn(), y.kr.a5G({
					action: 0,
					c9: d1.d2.data[148].value,
					value: parseInt(d1.d2.data[149].value, 10)
				})), !0
			}, 1)),
			tp = fQ.fT(),
			aMX = (fQ.fT(L(472)).style.fontWeight = "bold", function(dt, dZ) {
				tp.innerHTML = br.z.a5O(dt, d1.d2.data[105].value, dZ)
			});
		return fQ.fX(new fY([kp.button])), aMX(d1.d2.data[149].value, d1.d2.data[148].value), fQ
	}()), fL))
}

function aEd() {
	this.a6Y = function(dZ, font, maxWidth) {
		if (font && (fD.font = font), fD.measureText(dZ).width <= maxWidth) return dZ;
		for (var c8 = dZ.length - 1; 1 <= c8; c8--)
			if (dZ = dZ.substring(0, c8), fD.measureText(dZ + "...").width <= maxWidth) return dZ + "...";
		return "..."
	}
}

function a4G() {
	this.nX = function() {
		for (var e2, e3, c8 = nW - 1; 0 <= c8; c8--) e2 = io.dp(nr[c8], 4) % c2.k0, e3 = io.dp(nr[c8], 4 * c2.k0), ef.jP[nS] = Math.min(e2, ef.jP[nS]), ef.jQ[nS] = Math.min(e3, ef.jQ[nS]), ef.jR[nS] = Math.max(e2, ef.jR[nS]), ef.jS[nS] = Math
			.max(e3, ef.jS[nS])
	}, this.aS4 = function() {
		var by, es, c8, cI = ef.jU[nS].length,
			mz = n0.mz;
		loop: for (c8 = cI - 1; 0 <= c8; c8--) {
			for (by = 3; 0 <= by; by--)
				if (es = ef.jU[nS][c8] + mz[by], n0.rd(es) || n0.ra(es) && n0.rb(es) !== nS) {
					n0.a2Z(ef.jU[nS][c8], nS);
					continue loop
				} ef.jU[nS][c8] = ef.jU[nS][cI - 1], ef.jU[nS].pop(), cI--
		}
	}, this.aS5 = function() {
		var player = nS,
			jV = ef.jV,
			jW = ef.jW,
			jX = ef.jX,
			cI = jV[player].length,
			mz = n0.mz;
		loop: for (var c8 = cI - 1; 0 <= c8; c8--) {
			for (var aS6 = !1, aS7 = !1, by = 3; 0 <= by; by--) {
				var es = jV[player][c8] + mz[by];
				if (n0.a2G(es, player)) continue loop;
				aS6 = aS6 || n0.a0I(es), aS7 = aS7 || n0.a2D(es)
			}
			aS6 ? jW[player].push(jV[player][c8]) : aS7 ? jX[player].push(jV[player][c8]) : n0.a2Y(jV[player][c8], player), jV[player][c8] = jV[player][cI - 1], jV[player].pop(), cI--
		}
	}, this.nJ = function() {
		ef.eg[nF] -= nW
	}, this.nK = function(border) {
		for (var cI = border.length, c8 = cI - 1; 0 <= c8; c8--) n0.qc(nF, border[c8]) || (border[c8] = border[cI - 1], border.pop(), cI--)
	}, this.nM = function(border) {
		for (var cI = border.length, c8 = cI - 1; 0 <= c8; c8--) !n0.qc(nF, border[c8]) && n0.a2R(border[c8]) && (border[c8] = border[cI - 1], border.pop(), cI--)
	}, this.nN = function(border) {
		for (var by, es, cI = border.length, mz = n0.mz, c8 = cI - 1; 0 <= c8; c8--)
			for (by = 3; 0 <= by; by--)
				if (es = border[c8] + mz[by], n0.a2G(es, nF)) {
					ef.jV[nF].push(border[c8]), border[c8] = border[cI - 1], border.pop(), cI--;
					break
				}
	}, this.nO = function() {
		for (var by, es, mz = n0.mz, c8 = nW - 1; 0 <= c8; c8--)
			for (by = 3; 0 <= by; by--) es = nr[c8] + mz[by], n0.a2M(nF, es) && n0.a2N(es) && (ef.jV[nF].push(es), n0.ns(es, nF))
	}, this.nP = function() {
		var e2, e3;
		loop: for (; ef.jQ[nF] < ef.jS[nF];) {
			for (e2 = ef.jR[nF]; e2 >= ef.jP[nF]; e2--)
				if (n0.qc(nF, 4 * (ef.jQ[nF] * c2.k0 + e2))) break loop;
			ef.jQ[nF]++
		}
		loop: for (; ef.jQ[nF] < ef.jS[nF];) {
			for (e2 = ef.jR[nF]; e2 >= ef.jP[nF]; e2--)
				if (n0.qc(nF, 4 * (ef.jS[nF] * c2.k0 + e2))) break loop;
			ef.jS[nF]--
		}
		loop: for (; ef.jP[nF] < ef.jR[nF];) {
			for (e3 = ef.jS[nF]; e3 >= ef.jQ[nF]; e3--)
				if (n0.qc(nF, 4 * (e3 * c2.k0 + ef.jP[nF]))) break loop;
			ef.jP[nF]++
		}
		loop: for (; ef.jP[nF] < ef.jR[nF];) {
			for (e3 = ef.jS[nF]; e3 >= ef.jQ[nF]; e3--)
				if (n0.qc(nF, 4 * (e3 * c2.k0 + ef.jR[nF]))) break loop;
			ef.jR[nF]--
		}
	}, this.r7 = function(player, lt) {
		return 0 === eb.eo[player] || eb.eo[player] !== eb.eo[lt]
	}, this.aF6 = function(player) {
		for (var c8, bv, cI = ef.jV[player].length, mz = n0.mz, by = 3; 0 <= by; by--)
			for (bv = mz[by], c8 = 0; c8 < cI; c8++)
				if (n0.rd(ef.jV[player][c8] + bv)) return !0;
		return !1
	}, this.a9P = function(player) {
		for (var c8, bv, cI = ef.jV[player].length, mz = n0.mz, by = 3; 0 <= by; by--)
			for (bv = mz[by], c8 = 0; c8 < cI; c8++)
				if (n0.a2O(ef.jV[player][c8]) && n0.rd(ef.jV[player][c8] + bv)) return !0;
		return !1
	}, this.aF7 = function(qp, qq) {
		for (var c8, ee, bv, es, a16 = ef.jV[qp].length, a17 = ef.jV[qq].length, mz = (a17 < a16 && (ee = qp, qp = qq, qq = ee, ee = a16, a16 = a17, 0), n0.mz), by = 3; 0 <= by; by--)
			for (bv = mz[by], c8 = 0; c8 < a16; c8++)
				if (es = ef.jV[qp][c8] + bv, n0.ra(es) && n0.rb(es) === qq) return !0;
		return !1
	}, this.a9Q = function(qp, qq) {
		for (var c8, bv, es, a16 = ef.jV[qp].length, mz = n0.mz, by = 3; 0 <= by; by--)
			for (bv = mz[by], c8 = 0; c8 < a16; c8++)
				if (n0.a2O(ef.jV[qp][c8]) && (es = ef.jV[qp][c8] + bv, n0.ra(es)) && n0.rb(es) === qq) return !0;
		return !1
	}
}

function aS8() {
	function aSI() {
		c2.aSJ.dI()
	}

	function aSP(es, aSO) {
		0 < aSO && (c2.mp[es] += aSO, c2.mp[es + 1] += aSO, c2.mp[es + 2] += aSO)
	}

	function a0I(es) {
		return c2.mp[es + 2] > c2.mp[es] && c2.mp[es + 2] > c2.mp[es + 1]
	}
	this.wh = -1, this.qi = 0, this.aS9 = 0, this.aSA = 8, this.aSB = 32, this.aSC = 8, this.aSD = 32, this.aSE = [0, 0], this.sQ = [0, 0, 0, 0], this.a0f = null, this.aSF = !0, this.aSG = !1, this.aSH = function() {
		-1 !== this.wh && clearTimeout(this.wh), this.wh = -1, this.a0f = null, a2g.aHr()
	}, this.g = function() {
		7 === cA.cg() || this.aSG || (this.aSF = !0, this.qi = 0, this.aS9 = 1, this.aSE = [c2.ge.gf[c2.c4].aR1[0], c2.ge.gf[c2.c4].aR2[0]], this.sQ = [c2.ge.gf[c2.c4].aR3[3], c2.ge.gf[c2.c4].aR3[4], c2.ge.gf[c2.c4].aR3[5], c2.ge.gf[c2.c4].aR3[
			6]], this.aSA = c2.ge.gf[c2.c4].aR3[7], this.aSB = c2.ge.gf[c2.c4].aR3[8], this.aSC = c2.ge.gf[c2.c4].aR3[9], this.aSD = c2.ge.gf[c2.c4].aR3[10], this.aSF ? this.wh = setTimeout(aSI, 16) : this.dI())
	}, this.dI = function() {
		if (8 === cA.cg() && kH.jx()) this.wh = setTimeout(aSI, 16);
		else {
			if (0 === this.qi) {
				var pt = qT.aSK();
				if (qT.aN5(c2.ge.gf[c2.c4].aR3[2]), a2g.cB([c2.k0, c2.k1, c2.ge.gf[c2.c4].aR3[0], c2.ge.gf[c2.c4].aR3[1]]), qT.aN5(pt), this.a0f = a2g.a5d(), this.qi++, this.aSF) return void(this.wh = setTimeout(aSI, 16))
			}
			for (var es, k9, pt = this.aSF ? 10 : 1e6, pt = c2.k1 - this.aS9 - 1 < pt ? c2.k1 - this.aS9 - 1 : pt, aBX = this.aS9 + pt, e3 = this.aS9; e3 < aBX; e3++)
				for (var e2 = 1; e2 < c2.k0 - 1; e2++) a0I(es = 4 * (k9 = e2 + e3 * c2.k0)) ? this.aSL(es, k9, 1) : (this.aSL(es, k9, 0), function(e2, e3, es) {
					return 1 < e2 && a0I(es - 4) || e2 < c2.k0 - 2 && a0I(es + 4) || 1 < e3 && a0I(es - 4 * c2.k0) || e3 < c2.k1 - 2 && a0I(es + 4 * c2.k0)
				}(e2, e3, es) && this.aSM(e2, e3));
			this.aS9 = aBX, this.aS9 >= c2.k1 - 1 ? (c2.a5Y.putImageData(c2.aSN, 0, 0, 1, 1, c2.k0 - 2, c2.k1 - 2), cm.cn = !0, this.aSH()) : this.aSF && (this.wh = setTimeout(aSI, 16))
		}
	}, this.aSL = function(es, k9, h) {
		aSP(es, Math.floor(this.aSE[h] + this.sQ[h] * this.a0f[k9] / 1e4) - c2.mp[es])
	}, this.aSQ = function(es, ey, aSR, h, sQ) {
		aSP(es, Math.floor(this.aSE[h] + (1 - ey / aSR) * sQ) - c2.mp[es])
	}, this.aSM = function(si, sj) {
		for (var es, ey, aSR, aBU = si - this.aSB, aBV = sj - this.aSB, aBW = si + this.aSB, aBX = sj + this.aSB, aBU = aBU < 1 ? 1 : aBU, aBW = aBW > c2.k0 - 2 ? c2.k0 - 2 : aBW, aBX = aBX > c2.k1 - 2 ? c2.k1 - 2 : aBX, e3 = aBV < 1 ? 1 :
			aBV; e3 <= aBX; e3++)
			for (var e2 = aBU; e2 <= aBW; e2++) a0I(es = 4 * (e2 + e3 * c2.k0)) ? (aSR = this.aSA + (this.aSB - this.aSA) * this.a0f[e2 + c2.k0 * e3] / 1e4, Math.abs(si - e2) > aSR || Math.abs(sj - e3) > aSR || aSR <= (ey = Math.sqrt((si - e2) *
				(si - e2) + (sj - e3) * (sj - e3))) || this.aSQ(es, ey, aSR, 1, this.sQ[3])) : (aSR = this.aSC + (this.aSD - this.aSC) * this.a0f[e2 + c2.k0 * e3] / 1e4, Math.abs(si - e2) > aSR || Math.abs(sj - e3) > aSR || aSR <= (ey = Math
				.sqrt((si - e2) * (si - e2) + (sj - e3) * (sj - e3))) || this.aSQ(es, ey, aSR, 0, this.sQ[2]))
	}
}

function aEx() {
	var aSU, zg, wq = document.createElement("div"),
		aSS = document.createElement("div"),
		aEh = 0,
		aST = 0;
	this.show = function(e2, e3, dZ, aEw, aSV, aA) {
			if (aEh) {
				if (!aEw) return;
				this.u()
			}
			e2 === e3 && -1 === e2 ? (e2 = aSU, e3 = zg) : (aSU = e2, zg = e3);
			var aSW = Math.floor(aB.dE.dm(.018)),
				aSV = (e2 = Math.max(aSW + 2, e2), aSV || (aST = aEw), aEh = 1, eT.eJ / eT.i5),
				aEw = (wq.style.whiteSpace = "pre", wq.textContent = dZ, aB.dE.lg(wq, 5), wq.style.font = aB.dE.f9(0, aB.dE.dm(.015)), wq.style.padding = "0.3em 0.6em", wq.style.left = e2 + "px", wq.style.top = "0px", document.body.appendChild(wq),
					e2 + wq.offsetWidth - aSV),
				dZ = (0 < aEw && (e2 -= aEw, e2 = Math.max(aSW + 1, e2), wq.style.left = e2 + "px", e2 < aSW + 2) && (wq.style.whiteSpace = "pre-wrap"), wq.offsetHeight);
			wq.style.top = e3 - dZ + aST * dk.aNV + "px", e2 -= aSW, aSS.style.backgroundColor = aB.color.aD(aA >> 12 << 2, (aA >> 6 & 63) << 2, (63 & aA) << 2), aSS.style.left = e2 + "px", aSS.style.top = wq.style.top, aSS.style.width = aSW + "px",
				aSS.style.height = dZ + "px", aB.dE.lg(aSS, 4), aB.dE.lg(aSS, 8), aB.dE.lg(aSS, 2), document.body.appendChild(aSS)
		}, this.u = function(aEy) {
			if (aEh) {
				if (aEy && aST) return 0;
				aEh = 0, br.removeChild(document.body, wq), br.removeChild(document.body, aSS)
			}
			return 1
		}, wq.style.position = "absolute", wq.style.backgroundColor = dK.aH, wq.style.color = dK.aL, wq.style.pointerEvents = "none", wq.style.zIndex = "5", wq.style.maxWidth = "100%", aSS.style.position = "absolute", aSS.style.color = dK.aL, aSS
		.style.pointerEvents = "none", aSS.style.zIndex = "5"
}

function aSZ() {
	this.dI = function() {
		var aSe;
		2 === bz.a4U ? (iU.qZ(0, 59), kH.kP(2700)) : bz.qS < 7 ? (aSe = eb.ec[bz.a7s], aSe = eb.xU[aSe], gc.gd(L(473, [aSe]), 2, 1, 12), iU.qY(0, L(474, [aSe]), 40, 0, dK.aL, dK.aI, -1, !1), kH.kP(2700)) : 8 === bz.qS ? (bz.a4e ? iU.qZ(bz.a7r,
			2) : iU.qZ(1 - bz.cr, 3), bz.a6j.aJ3(bz.a7r), kH.k3(bz.a7r, 2700, !1, 0)) : 9 === bz.qS ? (iU.a6h(), kH.kP(2700)) : (iU.a6U(bz.a7r), kH.k3(bz.a7r, 2700, !1, 0))
	}, this.aDH = function() {
		var dZ;
		bz.co || bz.wx || (dZ = y.z.aMs(), bz.qS < 7 ? dZ += "/log/team" : 8 === bz.qS ? dZ += "/log/1v1" : 9 === bz.qS ? dZ += "/log/zombies" : dZ += "/log/br", iU.qY(720, dZ, 736, 0, dK.aL, dK.aj, -1, !1))
	}
}

function a3A() {
	var pH, e2, e3, aSg, aSh, aSi, gX, aSj, aSk, aSl, aSm, gap, zoom, aSn, aSo;

	function aSz(si, sj, mx) {
		n0.a2R(mx) || -1 === (si = g6.k7.rg(si, sj)) ? iU.a6W(mx) : iU.a6b(si)
	}

	function aSv(aSj) {
		for (var c8 = aSn.length - 1; 0 <= c8; c8--)
			if (aSn[c8] === aSj) return 1
	}

	function aSt(a9R) {
		var c8, cI;
		if (-1 !== a9R)
			for (cI = pH.length, c8 = 0; c8 < cI; c8++)
				if (pH[c8].v2 && pH[c8].e2 + 1 === a9R % 4 && pH[c8].e3 + 1 === a9R >> 2) return c8;
		return -1
	}

	function aSr(si, sj) {
		var z2 = gap / 2;
		return si < e2 - aSg - 3 * z2 || e2 + 3 * aSg + 5 * z2 < si || sj < e3 - aSg - 3 * z2 || e3 + 2 * aSg + 3 * z2 < sj ? -1 : 4 * (sj < e3 - z2 ? 0 : sj < e3 + aSg + z2 ? 1 : 2) + (si < e2 - z2 ? 0 : si < e2 + aSg + z2 ? 1 : si < e2 + 2 * aSg +
			3 * z2 ? 2 : 3)
	}
	this.aD9 = function() {
		var c8, dr, aSq = [dK.al, dK.b0, dK.aJ, dK.bN, dK.bD];
		for (pH = new Array(10), c8 = 0; c8 < 10; c8++) pH[c8] = {
			id: c8,
			v2: !1,
			aHU: 0,
			canvas: [],
			e2: 0,
			e3: 0
		};
		for (pH[0].colors = [0, 1, 2, 3], pH[0].e2 = 0, pH[0].e3 = 0, pH[1].colors = [1, 4], pH[1].e2 = 1, pH[1].e3 = 0, pH[2].colors = [0, 1], pH[2].e2 = -1, pH[2].e3 = 0, pH[3].colors = [0], pH[3].e2 = 0, pH[3].e3 = 0, pH[4].colors = [0, 2],
			pH[4].e2 = 1, pH[4].e3 = 1, pH[5].colors = [3], pH[5].e2 = 0, pH[5].e3 = -1, pH[6].id = 20, pH[6].colors = [0], pH[6].e2 = 1, pH[6].e3 = -1, pH[7].id = 21, pH[7].colors = [0], pH[7].e2 = 0, pH[7].e3 = 1, pH[8].id = 16, pH[8]
			.colors = [0], pH[8].e2 = 0, pH[8].e3 = 0, pH[9].id = 10, pH[9].colors = [4], pH[9].e2 = 2, pH[9].e3 = 0, c8 = 0; c8 < 10; c8++)
			for (dr = 0; dr < pH[c8].colors.length; dr++) pH[c8].canvas.push(function(id, aQy) {
				if (id < 20) return aB.canvas.a90(iH.get(3), id, aQy);
				var aQy = iH.get(3).height,
					tN = aB.dE.i9(aQy, aQy),
					hB = aB.dE.getContext(tN);
				20 === id ? hB.drawImage(iH.get(18), 0, 0) : 21 === id && sd.iv.a6O(sd.oQ.zK + sd.oQ.aCn, hB, 0, 0, aQy);
				return tN
			}(pH[c8].id, aSq[pH[c8].colors[dr]]))
	}, this.tP = function() {
		return pH
	}, this.g = function() {
		aSn = [], e2 = e3 = gX = 0, aSh = aSi = -1e3, this.resize()
	}, this.resize = function() {
		aSg = Math.floor((cZ.cb.eR() ? .075 : .0468) * eT.eU), zoom = aSg / iH.get(3).height, gap = Math.floor(aSg / 3)
	}, this.uw = function(si, sj) {
		return !!this.v2() && (cm.cn = !0, !!sd.iv.ub(si, sj, aSk) || (si = function(si, sj) {
			aSi = aSh = -1e3;
			var aSs = aSt(aSr(si, sj));
			if (-1 === aSs) return 0;
			if (1 !== pH[aSs].colors[pH[aSs].aHU])
				if (5 === aSs) {
					if (! function() {
							var ee = performance.now();
							aSo + 4e3 < ee && (aSn = []);
							aSo = ee
						}(), aSv(aSj)) return 1;
					aSn.push(aSj), 16 < aSn.length && aSn.shift()
				} else if (6 === aSs) {
				for (var c8 = aSn.length - 1; 0 <= c8; c8--) 0 === ef.fo[aSn[c8]] && aSn.splice(c8, 1);
				0 < aSn.length && (a2m.aSw(1, aSn, !0) && cs.lk.aSx(aSn, aSj), aSn = [])
			} else if (2 === aSs) mB.a76(aSj) && cs.ct.mE(gp.a77(), aSj);
			else if (3 === aSs) bz.k2 && cs.ct.gA(aSl);
			else if (0 === aSs)
				if (0 === pH[0].aHU) {
					if (bz.aN3 && iS.a5p() < 350) return 1;
					cy.cz(4), cs.ct.gB(gp.a77(), aSj)
				} else a2j.a9S(aSj, gp.a77());
			else if (1 === aSs) cs.ct.gD(gp.a77(), aSl);
			else if (9 === aSs) cs.ct.gE(gp.a77());
			else {
				if (7 === aSs) return cy.cz(0), sd.iv.show(si, sj), 2;
				if (4 === aSs) a2m.aSw(0, [aSj], !0) && cs.lk.a6J(aSj);
				else {
					if (8 !== aSs) return 0;
					cs.ct.gJ(gp.a77(), aSm, aSj)
				}
			}
			return 1
		}(si, sj), this.u(), 2 === si && (sd.iv.v2 = !0), 0 < si))
	}, this.uy = function(si, sj) {
		this.v2() || (aSh = si, aSi = sj, gX = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = kA.rQ(mouseX),
			coordY = kA.rT(mouseY),
			point = kA.rY(kA.rX(coordX, coordY));
		kA.rV(coordX, coordY) && aSz(mouseX, mouseY, point)
	}, this.click = function(si, sj, v9) {
		var rP = kA.rQ(si),
			rS = kA.rT(sj),
			k9 = kA.rX(rP, rS),
			mx = kA.rY(k9),
			aSy = (cZ.cb.eR() ? .025 : .0144) * eT.eU,
			ee = performance.now();
		return !(Math.abs(si - aSh) > aSy || Math.abs(sj - aSi) > aSy || gX + 500 < ee || (gX = ee, h6.h7() && (h6.rR = si, h6.rU = sj, a2n.dI(1), a2o.dI(1)), !kA.rV(rP, rS))) && (v9 ? (aSz(si, sj, mx), !1) : cp.cv || this.v2() || !aB.lk.lm(bz
			.cr) || bz.co ? (this.u(), !1) : (bz.k2 ? 0 <= (aSl = a2x.aF3(k9)) && (pH[3].v2 = !0) : 2 === bz.gb ? n0.ra(mx) && (aSj = n0.rb(mx), aB.lk.qD(aSj) || (pH[0].v2 = !0, pH[0].aHU = 1, pH[7].v2 = !0)) : (g6.mR.a76(bz.cr, k9) && (
			pH[0].v2 = !0, pH[0].aHU = 1, pH[1].v2 = !0, pH[1].aHU = 0, pH[9].v2 = !0, pH[9].aHU = 0), g6.a8T.aBJ(bz.cr, k9) && (pH[0].v2 = !0, pH[0].aHU = 1, pH[1].v2 = !0, pH[1].aHU = 1, aSl = er.mG[7]), n0.re(mx) ? (aSm = mb.mc
			.aF4(mx)) && (aSy = kA.rY(aSm), pH[8].v2 = !0, aSj = n0.rd(aSy) ? bz.fi : n0.rb(aSy)) : (n0.qc(bz.cr, mx) && (aSk = bz.cr, pH[0].v2 = !0, pH[0].aHU = 1, pH[7].v2 = !0), -1 !== (ee = a2x.aF5(k9)) && (n0.rd(ee << 2) ? (
			aSj = bz.fi, nI.aF6(bz.cr) ? (pH[0].v2 = !0, pH[0].aHU = 0) : ly.a9M(bz.cr) && (pH[0].v2 = !0, pH[0].aHU = 3)) : (aSj = n0.rb(ee << 2), pH[0].aHU = 1, pH[5].v2 = function(aSj) {
			return !aB.lk.qD(aSj) && !aSv(aSj) && a2m.aSw(1, [aSj], !1)
		}(aSj), pH[7].v2 || aB.lk.qD(aSj) || (aSk = aSj, pH[7].v2 = !0), pH[4].v2 = !aB.lk.qD(aSj) && !iY.tb(aSj) && a2m.aSw(0, [aSj], !1), pH[6].v2 = function(aSj) {
			if (0 === aSn.length) return !1;
			if (performance.now() > aSo + 4e3) return !(aSn = []);
			return !aSv(aSj) && ! function(aSj) {
				var c8;
				if (bz.eN)
					for (c8 = aSn.length - 1; 0 <= c8; c8--)
						if (!nI.r7(aSj, aSn[c8])) return 1;
				return
			}(aSj)
		}(aSj), nI.r7(aSj, bz.cr) ? (nI.aF7(bz.cr, aSj) ? (pH[0].aHU = 0, pH[0].v2 = !0) : ly.a9M(bz.cr) && (pH[0].aHU = 3, pH[0].v2 = !0), pH[0].v2 = this.aT4()) : (pH[2].v2 = !0, mB.a76(aSj) ? pH[2].aHU = 0 : pH[2]
			.aHU = 1, pH[0].v2 = !0))))), this.aT0(si, sj)))
	}, this.aT0 = function(si, sj) {
		return e2 = si - Math.floor(aSg / 2), e3 = sj - Math.floor(aSg / 2), !!this.v2()
	}, this.sg = function(si, sj) {
		return !!this.v2() && (sd.iv.v2 ? !sd.iv.aLq(si, sj) && (sd.iv.v2 = !1, cm.cn = !0) : function(a1D, si, sj) {
			si = aSr(si, sj);
			if (0 <= aSt(si)) return !1;
			if ((1 === si || 6 === si) && 0 <= aSt(2)) return !1;
			if ((6 === si || 9 === si) && 0 <= aSt(10)) return !1;
			return a1D.u(), cm.cn = !0
		}(this, si, sj))
	}, this.u = function() {
		for (var c8 = pH.length - 1; 0 <= c8; c8--) pH[c8].v2 = !1, pH[c8].aHU = 0;
		sd.iv.v2 = !1
	}, this.v2 = function() {
		return this.aT4() || sd.iv.v2
	}, this.aT4 = function() {
		for (var cI = pH.length, c8 = 0; c8 < cI; c8++)
			if (pH[c8].v2) return !0;
		return !1
	}, this.fC = function() {
		if (this.v2())
			if (sd.iv.v2) sd.iv.fC();
			else {
				var c8, hB = fD,
					dr = pH,
					cI = dr.length,
					aT8 = (aSg + gap) / zoom;
				for (hB.imageSmoothingEnabled = !0, hB.setTransform(zoom, 0, 0, zoom, e2, e3), c8 = 0; c8 < cI; c8++) dr[c8].v2 && fD.drawImage(dr[c8].canvas[dr[c8].aHU], dr[c8].e2 * aT8, dr[c8].e3 * aT8);
				hB.imageSmoothingEnabled = !1, hB.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a7u() {
	this.dI = function(player) {
		return g6.mK.aDw(player, function(player) {
			var cI = fk.vm.vn;
			if (0 === cI) return -1;
			for (var dU = Math.min(cI, fk.performance.zZ ? cI : 10), d2 = fk.vm.d2, oG = io.dp(qT.random() * cI, qT.value(100)), a6 = oG + dU, si = qT.a0n(ef.jP[player], ef.jR[player]), sj = qT.a0n(ef.jQ[player], ef.jS[player]), aHU = -1,
					n9 = kA.a0X(0, 0, c2.k0, c2.k1), c8 = oG; c8 < a6; c8++) {
				var bv = c8 % cI,
					aTA = kA.a0K(si, sj, d2[bv]);
				aTA < n9 && (n9 = aTA, aHU = bv)
			}
			return -1 !== aHU ? function(k9, si, sj) {
				var rP = kA.kE(k9),
					rS = kA.kG(k9),
					e4 = si - rP,
					e5 = sj - rS;
				Math.abs(e4) >= Math.abs(e5) ? (e5 = 0, e4 = Math.sign(e4)) : (e4 = 0, e5 = Math.sign(e5));
				e4 === e5 && (e4 = 1);
				for (;;) {
					if (rP += e4, rS += e5, !kA.a0a(rP, rS)) break;
					if (k9 = kA.rX(rP, rS), n0.a0I(kA.rY(k9))) return k9
				}
				return -1
			}(d2[aHU], si, sj) : -1
		}(player))
	}
}

function a3g() {
	this.aTC = null, this.g = function() {
		10 !== bz.qS ? this.aTC = null : this.aTC = new Uint32Array(bz.fi)
	}, this.dI = function() {
		10 === bz.qS && this.k7()
	}, this.k7 = function() {
		for (var es, target, vO, aTC = this.aTC, wG = en.em, qt = ef.g5, c8 = en.ep - 1; 0 <= c8; c8--)(es = wG[c8]) >= bz.fj || (target = Math.max(io.dp(qt[es], 4), 2048), vO = Math.max(mD.vZ(es), 100), aTC[es] += io.dp(vO * target, 1e4), aTC[
			es] > target && (aTC[es] = target))
	}, this.r0 = function(player, me) {
		return me > this.aTC[player] ? (me = this.aTC[player], this.aTC[player] = 0) : this.aTC[player] -= me, me
	}
}

function a3h() {
	this.aTD = [], this.aTE = [], this.g = function() {
		this.aTD = [], this.aTE = []
	}, this.dI = function() {
		0 <= this.aTD.length && this.aTF(this.aTD), 0 <= this.aTE.length && this.aTF(this.aTE)
	}, this.aTF = function(dT) {
		for (var dr = -1, c8 = dT.length - 1; 0 <= c8; c8--)
			if (dT[c8].gX--, dT[c8].gX <= 0) {
				dr = c8;
				break
			} for (c8 = dr; 0 <= c8; c8--) dT.shift()
	}, this.aSw = function(id, wG, aTG) {
		return this.aTH(this.aTD, id, wG, aTG)
	}, this.aGr = function(id, wG, aTG) {
		return this.aTH(this.aTE, id, wG, aTG)
	}, this.aTH = function(dT, id, wG, aTG) {
		return ! function(dT, id, wG) {
			var c8, sc;
			for (c8 = wG.length - 1; 0 <= c8; c8--)
				for (sc = dT.length - 1; 0 <= sc; sc--)
					if (dT[sc].player === wG[c8] && id === dT[sc].id) return 1;
			return
		}(dT, id, wG) && (aTG && function(dT, id, wG) {
			var c8;
			for (c8 = wG.length - 1; 0 <= c8; c8--) dT.push({
				player: wG[c8],
				id: id,
				gX: 384
			})
		}(dT, id, wG), !0)
	}
}

function a3L() {
	var v2, aTK, eJ, gP, ii, aTL, aTM, gN, canvas, gV, aTN;

	function a09() {
		return Math.floor((eT.eJ - eJ) / 2) < gp.gP + 2 * dk.gap ? eT.gP - gP - 4 * dk.gap - gp.gP : eT.gP - gP - 2 * dk.gap
	}
	this.g = function() {
		aTN = v2 = !1, ii = .61, aTL = .07, aTM = .09, gV = gN = gP = 0
	}, this.resize = function() {
		var eL, kD, aA, aTR, aTS, t9;
		v2 && (eJ = il(eJ = cZ.cb.eR() ? Math.floor(.69 * eT.eU) : Math.floor(.5 * eT.eU), im(eT.eJ - 2 * dk.gap, 10)), eJ = il(eJ, Math.floor(3.57 * im(eT.gP - 2 * dk.gap, 3))), gP = Math.floor(.28 * eJ), (canvas = document.createElement(
			"canvas")).width = eJ, canvas.height = gP, eL = canvas.getContext("2d", {
			alpha: !0
		}), kD = Math.floor(1 + gP / 40), eL.clearRect(0, 0, eJ, gP), eL.fillStyle = dK.aI, eL.fillRect(kD, kD, eJ - 2 * kD, gP - 2 * kD), eL.lineJoin = "bevel", eL.lineWidth = 2 * kD, eL.strokeStyle = dK.aL, eL.strokeRect(kD, kD, eJ -
			2 * kD, gP - 2 * kD), eL.imageSmoothingEnabled = !1, aA = iH.get(aTK), aTR = aA.width, t9 = (1 === aTK ? .85 : 21 === aTK ? .666 : .9) * ii * gP / (aTS = aA.height), eL.setTransform(t9, 0, 0, t9, Math.floor((eJ - t9 * aTR) /
			2), Math.floor((gP - t9 * aTS) / 2)), eL.drawImage(aA, 0, 0), eL.setTransform(1, 0, 0, 1, Math.floor(eJ - aTM * gP - aTL * gP - kD), Math.floor(kD + aTL * gP)), function(eL, cI) {
			eL.lineWidth = Math.floor(1 + gP / 80), eL.strokeStyle = dK.aL, eL.beginPath(), eL.moveTo(0, 0), eL.lineTo(cI, cI), eL.moveTo(0, cI), eL.lineTo(cI, 0), eL.stroke()
		}(eL, Math.floor(aTM * gP)), eL.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(dt, aTP, a9A, aTQ) {
		v2 || aTQ && aTN || (aTK = a9A ? 21 : dt ? 1 : 2, v2 = aTN = !0, this.resize(), iX.u(), gp.a95(), gV = cm.gX, gN = aTP ? 1 : 0)
	}, this.dI = function() {
		!v2 || 1 <= gN || (gN = 1 < (gN += 5e-4 * (cm.gX - gV)) ? 1 : gN, gV = cm.gX, cm.cn = !0)
	}, this.ub = function(e2, e3) {
		return !(!v2 || gN <= 0 || (e2 -= Math.floor((eT.eJ - eJ) / 2), e3 -= a09(), e2 < 0) || e3 < 0 || eJ < e2 || gP < e3 || (eJ - gP / 3 < e2 && e3 < gP / 3 && (v2 = !1, cm.cn = !0), 0))
	}, this.fC = function() {
		!v2 || gN <= 0 || (fD.globalAlpha = gN, fD.drawImage(canvas, Math.floor((eT.eJ - eJ) / 2), a09()), fD.globalAlpha = 1)
	}
}

function a46() {
	this.aDJ = null, this.cn = !1, this.gX = 0, this.aB1 = 56;
	var aTU = 0;

	function aTV() {
		cm.gX = aTU = performance.now(), cm.aDJ.dI(), window.requestAnimationFrame(aTV)
	}
	this.g = function() {
		this.aNC(), window.requestAnimationFrame(aTV), this.gX = performance.now()
	}, this.aN7 = function() {
		bz.co ? (this.aDJ = new aTW, this.aDJ.g()) : bz.wx ? this.aDJ = new aRf : (this.aDJ = new aAs, this.aDJ.g())
	}, this.aNC = function() {
		this.aDJ = new xw, this.cn = !0
	}, this.dI = function() {
		this.aDJ.xx++
	}, this.lJ = function() {
		return this.aDJ.xx
	}, this.aGW = function() {
		var ee = performance.now();
		ee < aTU + 1e3 || (this.gX = ee, this.aDJ.dI())
	}
}

function aTX() {
	var by = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + by + .5) / 15))
}

function aTY(df, data, fb) {
	var cI = data.aTZ.length,
		aTa = document.createElement("div"),
		aTb = document.createElement("div"),
		lS = document.createElement("div"),
		aTc = new Array(cI),
		fL = new Array(cI),
		aTd = new Array(data.aTe.length),
		aTf = aB.color.aF(70, 70, 0, .35);

	function wt() {
		this.style.backgroundColor = aB.color.wt(aTf, 160)
	}

	function aTl() {
		this.style.backgroundColor = aTf
	}

	function sK() {
		var dq;
		for (df.style.font = aB.dE.f9(0, aB.dE.aTn(.026, .5, .03)), c8 = 1; c8 < aTd.length; c8++) aB.dE.lg(aTd[c8], 4);
		if (aB.dE.lg(aTa, 2), cI) {
			for (var a1W, eK = aTa.offsetWidth, ij = lS.offsetWidth, c8 = 0; c8 < aTd.length; c8++) a1W = .01 * data.aTk[c8] * ij, aTd[c8].style.width = (100 * a1W / eK).toFixed(2) + "%";
			var dU = data.aTZ[0].length;
			for (c8 = 0; c8 < cI; c8++)
				for (aB.dE.lg(aTc[c8], 2), dq = 1; dq < dU; dq++) aB.dE.lg(fL[c8][dq], 4);
			aTb.aTg && (aTb.scrollTop = aTb.aTg)
		}
	}
	this.resize = function() {
			sK(), sK()
		}, df.style.display = "flex", df.style.flexDirection = "column", aTb.style.overflowX = "hidden", aTb.style.overflowY = "auto", aTb.addEventListener("scroll", function() {
			this.aTg = this.scrollTop, fb && fb.aTh && (br.z.a5K[fb.aTh] = this.scrollTop)
		}),
		function() {
			var by, c8, aTZ = data.aTZ,
				dU = cI ? aTZ[0].length : 0;
			for (c8 = 0; c8 < cI; c8++) {
				aTc[c8] = document.createElement("div"), aTc[c8].style.backgroundColor = function(c8) {
					return c8 % 2 == 1 ? aB.color.aF(130, 130, 130, .35) : dK.aK
				}(c8), aTc[c8].style.width = "100%", aTc[c8].style.display = "flex", fL[c8] = new Array(dU);
				for (var dq = 0; dq < dU; dq++) fL[c8][dq] = by = document.createElement("div"), by.style.display = "flex", by.style.justifyContent = "center", by.style.wordBreak = "break-all", by.style.padding = "0.4em 0em", by.style.width = data
					.aTk[dq] + "%", by.innerHTML = aTZ[c8][dq].dt, 1 === aTZ[c8][dq].ee && (by.name = "" + c8, by.style.color = dK.bL, by.style.backgroundColor = aTf, by.addEventListener("mouseover", wt), by.addEventListener("mouseout", aTl),
						function(by, c9, y5) {
							2147483647 !== y5 && by.addEventListener("click", function() {
								hQ.cB(30), hQ.hS(30, c9), ft.g(hQ.s), this.style.backgroundColor = aTf, br.cP(8, br.bs, new d4(25, {
									action: 0,
									c9: hc.wb.y2(hc.wb.y3(5)),
									y5: y5
								}))
							})
						}(by, aTZ[c8][dq].c9, aTZ[c8][dq].y5)), aTc[c8].appendChild(by)
			}
			for (aTa.style.display = "flex", aTa.style.backgroundColor = aB.color.aF(0, 120, 0, .35), c8 = 0; c8 < aTd.length; c8++) aTd[c8] = by = document.createElement("div"), by.style.display = "flex", by.style.justifyContent = "center", by.style
				.wordBreak = "break-all", by.style.padding = "0.4em 0em", by.style.width = data.aTk[c8] + "%", by.innerHTML = data.aTe[c8], aTa.appendChild(by)
		}();
	for (var c8 = 0; c8 < cI; c8++) lS.appendChild(aTc[c8]);
	aTb.appendChild(lS), df.appendChild(aTa), df.appendChild(aTb), fb && fb.aTh && (aTb.aTg = br.z.a5K[fb.aTh])
}

function aEa() {
	var aTo = null;
	this.t5 = 0, this.aDY = function() {
		var dt = d1.d2.data[5].value;
		aTo = "px " + dt, "system-ui" !== dt && (aTo += ", system-ui"), this.t5 = aTp(32, 32, ["a", "b", "m"], 200, aTo)
	}, this.i9 = function(eJ, gP) {
		var aA = document.createElement("canvas");
		return aA.width = eJ, aA.height = gP, aA
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(eL, eJ, gP) {
		return eL.getImageData(0, 0, eJ, gP)
	}, this.f9 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aTo : 1 === type ? "bold " + size + aTo : 2 === type ? "lighter " + size + aTo : 3 === type ? "italic " + size + aTo : 4 === type ? "oblique " + size + aTo : 5 === type ? "small-caps " +
			size + aTo : "small-caps bold " + size + aTo
	}, this.textAlign = function(hB, id) {
		hB.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hB, id) {
		hB.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.lg = function(a6, code, color) {
		color = this.dj(dk.aNV) + " solid " + (color || dK.aL);
		5 === (code = code || 5) ? a6.style.border = color : 4 === code ? a6.style.borderLeft = color : 2 === code ? a6.style.borderBottom = color : 6 === code ? a6.style.borderRight = color : a6.style.borderTop = color
	}, this.zt = function(a6, e2, e3, eJ, gP) {
		a6 = a6.style;
		a6.left = this.aQJ(e2), a6.top = this.aQJ(e3), a6.width = this.aQJ(eJ), a6.height = this.aQJ(gP)
	}, this.aNW = function(dt) {
		return 1 + dt * cZ.cb.eR()
	}, this.dm = function(h8, bv) {
		return h8 * this.aNW(void 0 === bv ? .5 : bv) * eT.eU / eT.i5
	}, this.aFZ = function(h8, bv) {
		return h8 * this.aNW(void 0 === bv ? .5 : bv) * eT.eU
	}, this.aTn = function(h8, bv, aTq) {
		return this.aNW(bv) * Math.min(h8 * eT.eU, aTq * eT.eJ) / eT.i5
	}, this.dj = function(dt) {
		return dt.toFixed(1) + "px"
	}, this.aQJ = function(dt) {
		return this.zu(dt).toFixed(1) + "px"
	}, this.zu = function(dt) {
		return dt / eT.i5
	}, this.dF = function(d5) {
		for (var dZ = "<ul>", cI = d5.length, c8 = 0; c8 < cI; c8++) dZ += "<li>" + d5[c8][0] + ": <a href='" + d5[c8][1] + "' target='_blank'>" + d5[c8][0] + "</a></li>";
		return dZ += "</ul>"
	}, this.aTs = function(aMr) {
		return "<a href='" + aMr + "' target='_blank'>" + aMr + "</a>"
	}, this.aMY = function(a6) {
		navigator.clipboard && navigator.clipboard.writeText(a6.value)
	}, this.kq = function(a6) {
		var ee = a6.textContent;
		aB.oB.pU(ee, "✔") || (1 === ee.length ? a6.textContent = "✔" : a6.textContent = ee + " ✔", setTimeout(function() {
			a6.textContent = ee
		}, 500))
	}, this.measureText = function(dZ) {
		return fD.measureText(dZ).width
	}, this.lV = function(aTt) {
		aTt.style.overflowX = "auto", aTt.style.overflowY = "hidden", aTt.style.whiteSpace = "nowrap", aTt.addEventListener("wheel", function(a6) {
			Math.abs(a6.deltaY) < Math.abs(a6.deltaX) || (this.scrollLeft += a6.deltaY, this.li = this.scrollLeft, a6.preventDefault())
		}), aTt.addEventListener("scroll", function() {
			this.li = this.scrollLeft
		})
	}
}

function a4D() {
	var aTu = new Array(1),
		aTv = new Array(1),
		aTw = 20,
		aBi = 0,
		aTx = !1;

	function aTz() {
		aTw++, a2w.play()
	}
	this.g = function() {
		if (!window.document.documentMode) {
			for (var c8 = 0; 0 <= c8; c8--) ! function(c8, src) {
				aTv[c8] = 0, aTu[c8] = document.createElement("audio"), aTu[c8].src = src, aTu[c8].setAttribute("preload", "auto"), aTu[c8].setAttribute("controls", "none"), aTu[c8].style.display = "none", aTu[c8].onpause = function() {
					aTv[c8] = 1
				}, aTu[c8].oncanplaythrough = function() {
					aTv[c8] = 0 === aTv[c8] ? 1 : aTv[c8]
				}, document.body.appendChild(aTu[c8])
			}(c8,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aTx = !0
		}
	}, this.gt = function() {
		if (aTx) {
			aTx = !1;
			for (var c8 = 0; 0 <= c8; c8--) aTu[c8].onpause = null, aTu[c8].oncanplaythrough = null, br.removeChild(document.body, aTu[c8]), aTu[c8] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		a2w.play()
	}), this.play = function() {
		if (aTx) {
			var ee = performance.now();
			if (aBi + 66 < ee)
				for (var c8 = 0; 0 <= c8; c8--)
					if (1 === aTv[c8]) return aBi = ee, aTv[c8] = 2, void aTu[c8].play();
			0 < aTw && (aTw--, setTimeout(aTz, 66))
		}
	}
}

function aOo() {
	this.dH = function() {
		d1.db.xh(), d1.db.aDZ(), y.z.close(0, 3255), 0 === cZ.id ? cZ.aOl && cZ.aOl.clear() : 1 === cZ.id ? cZ.hA.saveString(199, "") : 2 === cZ.id && cZ.aOn.postMessage("clear")
	}, this.cV = function() {
		2 === cZ.id ? cZ.aOn.postMessage("showConsentForm") : 1 === cZ.id && cZ.hA.setState(7)
	}, this.cc = function() {
		this.setState(14)
	}, this.eR = function() {
		return 1 === d1.d2.oa(2)
	}, this.aU0 = function() {
		d1.d2.oZ(102, "")
	}, this.setState = function(qi) {
		1 === cZ.id && 5 <= cZ.ca && cZ.hA.setState(qi)
	}, this.a4w = function() {
		var aKY;
		1 === cZ.id && 7 <= cZ.ca ? cZ.hA.setState(5) : ((aKY = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aKY.toString())
	}, this.xd = function() {
		0 !== cZ.id && (1 === cZ.id ? cZ.hA.prepareAd("8646194357") : 2 === cZ.id && (0 === cZ.ca ? cZ.aOn.postMessage("prepare ad 2904813909") : cZ.aOn.postMessage("loadAds 2904813909")))
	}, this.aBk = function(ee) {
		return 0 !== cZ.id && (1 === cZ.id ? 12 <= cZ.ca && (cZ.hA.presentAd(ee), !0) : 2 === cZ.id && 0 !== cZ.ca && (cZ.aOn.postMessage("showAd"), !0))
	}, this.a4M = function() {
		2 === cZ.id && cZ.ca < 23 && br.cP(4, 1, new dD("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + d7.d9 + "' target='_blank'>" + d7
			.d9 + "</a>", !0, [new cN("⬅️ " + L(14), function() {
				br.cP(0)
			}, dK.b1)]))
	}
}

function a4B() {
	function aU1(a6) {
		var dT, a6 = a6.target.files;
		a6 && 0 < a6.length && (a6 = a6[0], "json" === (dT = a6.name.split("."))[dT.length - 1].toLowerCase()) && ((dT = new FileReader).onload = aU9, dT.readAsText(a6))
	}

	function aU9(a6) {
		var aUC;
		bz.gb || (a6 = JSON.parse(a6.target.result), aUC = bz.data = new c0, aUD(a6, aUC, "mapType", 0, 2), aUD(a6, aUC, "mapProceduralIndex", 0, 255), aUD(a6, aUC, "mapRealisticIndex", 0, 255), aUD(a6, aUC, "mapSeed", 0, 16383), function(aUB, aUC,
				bv, max) {
				aUB = aUB[bv];
				aUC[bv] = aUJ(aUB) ? aUB.slice(0, max) : aUC[bv]
			}(a6, aUC, "mapName", 20), function(aUB, aUC, bv) {
				var h3;
				2 === aUC.mapType && (!aUJ(aUB = aUB[bv]) || aUB.length <= 20 ? aUC.mapType = 0 : ((h3 = new Image).onload = function() {
					lo.zl.aQm(h3, 1), h3.onload = null, h3 = null
				}, h3.src = aUB))
			}(a6, aUC, "canvas"), aUD(a6, aUC, "passableWater", 0, 1), aUD(a6, aUC, "passableMountains", 0, 1), aUD(a6, aUC, "playerCount", 1, 512), aUD(a6, aUC, "humanCount", 1, 1), aUD(a6, aUC, "selectedPlayer", 0, 0), aUD(a6, aUC, "gameMode",
				0, 1), aUD(a6, aUC, "playerMode", 0, 0), aUD(a6, aUC, "battleRoyaleMode", 0, 0), aUD(a6, aUC, "numberTeams", 0, 8), aUD(a6, aUC, "isZombieMode", 0, 0), aUD(a6, aUC, "isContest", 0, 0), aUD(a6, aUC, "isReplay", 0, 0), aUG(a6, aUC,
				"elo", 16, 2, 16383), aUD(a6, aUC, "colorsType", 0, 1), aUD(a6, aUC, "colorsPersonalized", 0, 1), aUG(a6, aUC, "colorsData", 32, 512, 262143), aUD(a6, aUC, "selectableColor", 0, 1), aUG(a6, aUC, "teamPlayerCount", 16, 9, 512),
			aUD(a6, aUC, "neutralBots", 0, 1), aUD(a6, aUC, "botDifficultyType", 0, 3), aUD(a6, aUC, "botDifficultyValue", 0, 15), aUG(a6, aUC, "botDifficultyTeam", 8, 9, 15), aUG(a6, aUC, "botDifficultyData", 8, 512, 15), aUD(a6, aUC,
				"spawningType", 0, 2), aUD(a6, aUC, "spawningSeed", 0, 16383), aUG(a6, aUC, "spawningData", 16, 1024, 4095), aUD(a6, aUC, "selectableSpawn", 0, 1), aUD(a6, aUC, "playerNamesType", 0, 2),
			function(aUB, aUC, bv, size, max) {
				var n2 = aUB[bv];
				if (Array.isArray(n2)) {
					for (var n5 = new Array(size), cI = Math.min(n2.length, size), c8 = 0; c8 < cI; c8++) n5[c8] = aUJ(n2[c8]) ? n2[c8].slice(0, max) : "";
					n5.fill("", cI), aUC[bv] = n5
				}
			}(a6, aUC, "playerNamesData", 512, 20), aUD(a6, aUC, "selectableName", 0, 1), aUD(a6, aUC, "aIncomeType", 0, 2), aUD(a6, aUC, "aIncomeValue", 0, 255), aUG(a6, aUC, "aIncomeData", 8, 512, 255), aUD(a6, aUC, "tIncomeType", 0, 2), aUD(
				a6, aUC, "tIncomeValue", 0, 255), aUG(a6, aUC, "tIncomeData", 8, 512, 255), aUD(a6, aUC, "iIncomeType", 0, 2), aUD(a6, aUC, "iIncomeValue", 0, 255), aUG(a6, aUC, "iIncomeData", 8, 512, 255), aUD(a6, aUC, "sResourcesType", 0, 2),
			aUD(a6, aUC, "sResourcesValue", 0, 2047), aUG(a6, aUC, "sResourcesData", 16, 512, 2047), br.cj(), br.z.a5K[0] = 0, br.cP(19))
	}

	function aUD(aUB, aUC, bv, min, max) {
		aUB = aUB[bv];
		aUC[bv] = "number" == typeof aUB && min <= aUB && aUB <= max ? Math.floor(aUB) : aUC[bv]
	}

	function aUJ(dZ) {
		return "string" == typeof dZ
	}

	function aUG(aUB, aUC, bv, aUK, size, max) {
		var n2 = aUB[bv];
		if (Array.isArray(n2)) {
			for (var n5 = new(8 === aUK ? Uint8Array : 16 === aUK ? Uint16Array : Uint32Array)(size), cI = Math.min(n2.length, size), c8 = 0; c8 < cI; c8++) n5[c8] = io.du(n2[c8], 0, max);
			aUC[bv] = n5
		}
	}
	this.aPF = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aU1, input.click()
	}, this.aPG = function() {
		for (var aU4, aU7, vy = bz.data, keys = Object.keys(vy), aU2 = {}, c8 = 0; c8 < keys.length; c8++) {
			var key = keys[c8];
			vy[key] instanceof Uint8Array || vy[key] instanceof Uint16Array || vy[key] instanceof Uint32Array ? aU2[key] = Array.from(vy[key]) : aU2[key] = vy[key]
		}
		aU2.canvas = 2 === aU2.mapType && aU2.canvas ? aU2.canvas.toDataURL() : null, aU4 = aU2, aU4 = JSON.stringify(aU4, null, 2), aU4 = new Blob([aU4], {
			type: "application/json"
		}), (aU7 = document.createElement("a")).href = URL.createObjectURL(aU4), aU7.download = "tt_scenario.json", aU7.click()
	}
}

function a2z() {
	"function" != typeof Math.log2 && (Math.log2 = function(e2) {
		return Math.log(e2) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(e2) {
		return Math.log(e2) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(e2) {
		return 0 < e2 ? 1 : e2 < 0 ? -1 : 0
	})
}

function a3Y() {
	this.z = new aNE, this.aIK = new aLz, this.lC = new aUL, this.pS = new kt, this.kw = new hO, this.kr = new a54, this.aUM = new aAN, this.aUN = new aQK, this.a7 = new aGT, this.aGZ = new u8, this.aGa = new aUO, this.aGd = new xz, this.aGf =
		new j3, this.g = function() {
			this.z.g()
		}
}

function a3w() {
	this.z = new a5H, this.bs = 0;
	var aUP = new Array(32);

	function aUS() {
		for (var cI = aUP.length, c8 = 0; c8 < cI; c8++) aUP[c8] = null
	}
	this.g = function() {
		for (var aUQ, aUR = document.body.firstChild; aUR;) aUQ = aUR.nextSibling, !document.body.contains(aUR) || "DIV" !== aUR.tagName && "INPUT" !== aUR.tagName && "BUTTON" !== aUR.tagName || br.removeChild(document.body, aUR), aUR = aUQ
	}, this.cP = function(h, i, is) {
		void 0 === i && (i = this.bs), cm.cn = !0, 0 === h && (0 === cA.cg() ? h = 5 : cZ.cb.setState(13)), this.u(), this.bs === h && (i = aUP[h].i, aUP[h] = null), this.bs = h;
		var dU = aUP[h];
		if (!dU || 4 === h || 7 === h || 8 === h || 9 === h || 10 === h || 11 === h || 13 === h || 15 === h || 18 === h || 20 <= h && h <= 28 || 32 === h || 33 === h) {
			if (0 === h) return void aUS();
			1 === h ? dU = new cJ : 2 === h ? dU = new xf : 3 === h ? dU = new aUT : 4 === h || 9 === h || 10 === h || 11 === h || 13 === h || 33 === h ? dU = is : 5 === h ? dU = new zc : 6 === h ? dU = new aKx : 7 === h ? dU = new aMD(br.z.yn) :
				8 === h ? dU = is : 12 === h ? dU = new yp : 14 === h ? dU = new fF : 15 === h ? dU = new aMD(br.z.ym) : 16 === h ? dU = new aO0 : 17 === h ? dU = new aH5 : 18 === h ? dU = new aRy : 19 === h ? dU = new aOu : 20 === h ? dU =
				new aUU : 21 === h ? dU = new xD : 22 === h ? dU = new aUV : 23 === h ? dU = new aCf : 24 === h ? dU = new a7D : 25 === h ? dU = new aOs : 26 === h ? dU = new aUW : 27 === h ? dU = new aHc : 28 === h ? dU = new aUX : 29 === h ?
				dU = new oy : 30 === h ? dU = new vt : 31 === h ? dU = new aDa : 32 === h && (dU = new kk), dU.i = i, aUP[h] = dU
		}
		dU.show(is)
	}, this.kl = function() {
		this.v2() && this.fI(this.hN().i)
	}, this.fI = function(h) {
		this.v2() && (aUP[h] ? (this.u(), cm.cn = !0, this.bs = h, aUP[h].show()) : this.cP(h))
	}, this.u = function() {
		this.v2() && aUP[this.bs].u()
	}, this.cj = function() {
		this.v2() && (aUP[this.bs].u(), aUS(), this.bs = 0, cZ.cb.setState(13))
	}, this.fC = function() {
		var dU;
		this.v2() && (dU = aUP[this.bs]).fC && dU.fC()
	}, this.resize = function() {
		if (!this.v2()) return !1;
		aUP[this.bs].resize()
	}, this.ub = function(e2, e3) {
		var dU;
		this.v2() && (dU = aUP[this.bs]).ub && dU.ub(e2, e3)
	}, this.sg = function(e2, e3) {
		var dU;
		this.v2() && (dU = aUP[this.bs]).sg && dU.sg(e2, e3)
	}, this.v4 = function() {
		var dU;
		this.v2() && (dU = aUP[this.bs]).v4 && dU.v4()
	}, this.ue = function(si, sj, deltaY) {
		var dU;
		this.v2() && (dU = aUP[this.bs]).ue && dU.ue(si, sj, deltaY)
	}, this.dM = function(code) {
		var dU;
		return !!this.v2() && ((dU = aUP[this.bs]).dM && dU.dM(code), !0)
	}, this.dI = function() {
		var dU;
		this.v2() && (dU = aUP[this.bs]) && dU.dI && dU.dI()
	}, this.v2 = function() {
		return 0 < this.bs
	}, this.hN = function() {
		return aUP[this.bs]
	}, this.on = function(h) {
		return aUP[h]
	}, this.xJ = function() {
		return aUP
	}, this.removeChild = function(aNk, aTt) {
		try {
			aNk.removeChild(aTt)
		} catch (a6) {
			console.log("removeChild error " + a6)
		}
	}
}

function a3B() {
	var gP, canvas, gQ, aUY, aUZ, aUa = -1;

	function aUb() {
		var t9, eL = canvas.getContext("2d", {
			alpha: !0
		});
		eL.clearRect(0, 0, gP, gP), eL.fillStyle = dK.aH, eL.fillRect(0, 0, gP, gP), 9 === aUY && (eL.fillStyle = dK.aM, eL.fillRect(0, 0, gP, gP)), eL.fillStyle = dK.aL, eL.fillRect(0, 0, gP, 1), eL.fillRect(0, 0, 1, gP), eL.fillRect(0, gP - 1, gP,
			1), eL.fillRect(gP - 1, 0, 1, gP), t9 = .9 * gP / iH.get(0).width, eL.imageSmoothingEnabled = !0, eL.setTransform(t9, 0, 0, t9, Math.floor((gP - t9 * iH.get(0).width) / 2), Math.floor((gP - t9 * iH.get(0).height) / 2)), eL.drawImage(
			iH.get(0), 0, 0), eL.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aUe(si, sj) {
		if (!cp.cv) return si <= gP + dk.gap && sj >= gp.e3 ? 9 : -1;
		if (si <= 4 * gP + dk.gap) {
			if (sj >= gp.e3) return 0;
			if (sj >= gp.e3 - gP - aUZ * dk.gap) return 2
		} else if (si <= 7 * gP + dk.gap && sj >= gp.e3 - gP - aUZ * dk.gap) return 1;
		return -1
	}
	this.cv = !1, this.g = function() {
		aUY = -1, this.cv = !1, aUZ = cZ.cb.eR() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		gP = gp.gP, (canvas = document.createElement("canvas")).width = gP, canvas.height = gP, gQ = aB.dE.f9(1, (cZ.cb.eR() ? .5 : .45) * gP), aUb()
	}, this.aUc = function() {
		return !(1 !== bz.gb || bz.k2 || (bz.co ? !iV.aND : this.cv && bz.wx))
	}, this.cl = function() {
		this.cv = !this.cv, this.cv ? (iV.vH(!1), bz.co && iV.aND && iV.vI(!0), this.aUd(), 9 === aUY && (aUY = 0)) : (aUY = -1, aUb(), !bz.wx || 1 !== bz.gb || bz.k2 || bz.co || cZ.cb.setState(1)), cm.cn = !0
	}, this.aUd = function() {
		(bz.wx || bz.co) && 1 === bz.gb && (iQ.sb(!0), bz.k2 || setTimeout(function() {
			kg.aDL()
		}, 0), cZ.cb.setState(0))
	}, this.ub = function(si, sj) {
		return 0 <= (aUa = aUe(si, sj)) || !cp.cv || bz.wx || bz.co || ck.v2 || cp.cl(), aUa
	}, this.sg = function(si, sj) {
		si = aUe(si, sj);
		si !== aUY && (aUY = si, this.cv || aUb(), cm.cn = !0)
	}, this.uc = function(si, sj) {
		si = aUe(si, sj);
		return -1 !== si && aUa === si && (this.cv ? bz.eS ? (0 <= si && iV.vH(!1), !bz.co) : (0 === si ? bz.aCe() : 1 === si ? this.cl() : 2 === si && br.cP(1, 0), !0) : 9 === si && (this.cl(), !0))
	}, this.fC = function() {
		var eJ;
		this.cv ? (eJ = Math.floor(5.5 * gP), fD.setTransform(1, 0, 0, 1, dk.gap, gp.e3), fD.fillStyle = dK.aH, fD.fillRect(0, 0, eJ, gP), 0 === aUY ? (fD.fillStyle = dK.aM, fD.fillRect(0, 0, 4 * gP, gP)) : 1 === aUY && (fD.fillStyle = dK.aM, fD
				.fillRect(4 * gP, 0, Math.floor(1.5 * gP), gP)), fD.fillStyle = dK.aL, fD.fillRect(0, 0, eJ, 1), fD.fillRect(0, 0, 1, gP), fD.fillRect(4 * gP, 0, 1, gP), fD.fillRect(0, gP - 1, eJ, 1), fD.fillRect(eJ - 1, 0, 1, gP), fD.font =
			gQ, aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 1), fD.fillText(L(475), 2 * gP, .54 * gP), eJ = .4 * gP, cp.aFj(dk.gap + 4 * gP + (1.5 * gP - eJ) / 2, gp.e3 + .3 * gP, eJ), eJ = 1, fD.setTransform(1, 0, 0, 1, dk.gap, gp.e3 -
				eJ * aUZ * dk.gap - eJ * gP), fD.fillStyle = dK.aH, fD.fillRect(0, 0, 4 * gP, gP), aUY === eJ + 1 && (fD.fillStyle = dK.aM, fD.fillRect(0, 0, 4 * gP, gP)), fD.fillStyle = dK.aL, fD.fillRect(0, 0, 4 * gP, 1), fD.fillRect(0, 0,
				1, gP), fD.fillRect(4 * gP, 0, 1, gP), fD.fillRect(0, gP - 1, 4 * gP, 1), fD.fillText(L(0 === eJ ? 475 : 476), 2 * gP, .54 * gP), fD.setTransform(1, 0, 0, 1, 0, 0)) : fD.drawImage(canvas, dk.gap, gp.e3)
	}, this.cq = function(player) {
		return 0 !== ef.fo[player] && 2 !== bz.gb && !aB.lk.qD(player)
	}, this.aFj = function(e2, e3, cI) {
		fD.setTransform(1, 0, 0, 1, e2, e3), fD.lineWidth = dk.yz, fD.strokeStyle = dK.aL, fD.beginPath(), fD.moveTo(0, 0), fD.lineTo(cI, cI), fD.moveTo(0, cI), fD.lineTo(cI, 0), fD.stroke()
	}
}

function a43() {
	var aUj, aUk = new Uint8Array(5),
		aUl = new Uint8Array(5);
	this.aUm = new w3, this.g = function() {
		for (var dt = d1.d2.data[119].value, c8 = 0; c8 < aUk.length; c8++) aUk[c8] = (dt >> 2 * c8) % 4
	}, this.aN7 = function() {
		aUj = [L(477), "", L(478, [dW.dS[28]]), L(479, [dW.dS[26]]), L(480, [dW.dS[0]])], this.aUm.g()
	}, this.dI = function() {
		this.aUm.dI()
	}, this.cz = function(id) {
		1 < id && h6.h7() || ! function(h) {
			if (3 === aUk[h] || 1 === aUl[h]) return;
			if (aUl[h] = 1, !(Math.random() < .6)) {
				aUk[h]++;
				for (var dt = 0, c8 = 0; c8 < aUk.length; c8++) dt += aUk[c8] << 2 * c8;
				d1.db.dc(119, dt)
			}
			return 1
		}(id) || iU.a6K(aUj[id])
	}
}

function aIF() {
	function aUr(dT, dt, sc) {
		for (var c8 = 0; c8 < 256; c8++) dT[c8] = (dT[c8] + (dt >> (c8 + sc) % 30 & 1)) % 256
	}
	this.dI = function(aUo, aUp) {
		var dT = new Uint8Array(256);
		return function(dT, aUo, aUp) {
				var c8, aUt = 3 + (4 + aUo) % 32768,
					aUu = 12 + aUp % 32768,
					aUv = 17 + ((aUo & aUp) + (aUo | aUp) + aUo) % 32768;
				for (c8 = 0; c8 < 256; c8++) aUt = 1 + aUt * aUu % aUv, dT[c8] = aUt % 256
			}(dT, aUo, aUp), aUr(dT, aUo, 2), aUr(dT, aUp, 7),
			function(dT) {
				var c8, dt, h = 0;
				for (c8 = 0; c8 < 3e4; c8++) dt = dT[h], dT[h] = (dt + c8 + dT[(h + c8) % 256]) % 256, h = (dt + c8 + h + (dt & h)) % 256
			}(dT),
			function(dT) {
				var c8, ii = 1,
					ik = 1;
				for (c8 = 0; c8 < 256; c8 += 2) ii = (1 + ii) * (dT[c8] + 1) % 1073741824, ik = (1 + ik) * (dT[c8 + 1] + 1) % 1073741824;
				return [ii, ik]
			}(dT)
	}, this.aUw = function(aUx, aUy, aUz, result) {
		for (var el = 1 << aUx, c8 = 0; c8 < el; c8++)
			if (this.aV0(c8, aUy, aUz) === result) return c8;
		return 0
	}, this.aV0 = function(aV1, aUy, aUz) {
		for (var aV2 = aUy + aV1, aV3 = aUz + aV1, dt = aV2 + aV3 & 2147483647, dq = 1; dq <= 16; dq++) dt = (dt = (dt ^ dt >> dq) >>> 1 + (3 & aV2)) * (7 + (1023 & (aV2 | aV3))) & 1073741823, aV3 >>= 1 + (1 & (aV2 >>= 1 + (1 & (dt += 65535 &
			aV3))));
		return dt &= 1073741823
	}
}

function aV4() {
	this.dT = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.xo = function() {
		for (var aV5 = [], dT = this.dT, cI = dT.length, c8 = 0; c8 < cI; c8++) aV5.push(dT[c8]);
		var aCJ = d1.d2.data[12].oc;
		for (c8 = 0; c8 < cI; c8++)
			if (aV5[c8] === aCJ) {
				aV5.splice(c8, 1), cI--;
				break
			} aV5.sort(), cI++, aV5.unshift(aCJ);
		try {
			if ("undefined" == typeof Intl) return aV5;
			for (c8 = 0; c8 < cI; c8++) {
				var dZ = new Intl.DisplayNames([aV5[c8]], {
					type: "language"
				}).of(aV5[c8]);
				dZ !== aV5[c8] && (aV5[c8] = aV5[c8] + ": " + dZ)
			}
		} catch (a6) {
			console.log("error 3646: " + a6)
		}
		return aV5
	}, this.xp = function(s8) {
		for (var dZ = d1.d2.data[12].value, cI = s8.length, c8 = 0; c8 < cI; c8++)
			if (dZ === s8[c8].split(":")[0]) return c8;
		return 0
	}, this.a5E = function(aV7) {
		if (aV7 && !(aV7.length < 2)) {
			aV7 = aV7.split("-")[0].toLowerCase();
			for (var dT = this.dT, cI = dT.length, c8 = 0; c8 < cI; c8++)
				if (aV7 === dT[c8]) return c8
		}
		return -1
	}
}

function a84() {
	this.dI = function() {
		if (cm.lJ() % 51 == 45)
			for (var cI = g6.z.g8, a0y = g6.z.a0y, a10 = g6.z.a10, rj = g6.z.rj, rk = g6.z.rk, aKl = fq.aKl, me = fq.me, c8 = 0; c8 < cI; c8++) {
				var v, player, aIc, a13 = a0y[c8];
				a13 % 64 == 6 || (v = a10[c8], (player = g6.k7.aV8(v[v.length - 1])) < 0) || !aB.lk.qj(player, rk[c8] >> 3) || qT.u4(1e3) >= aKl[me[player]] || ! function(a7Y, v) {
					for (var cI = v.length - 1, aVB = g6.z.a11[a7Y], n9 = 0, c8 = aVB + 1; c8 < cI; c8++) n9 += kA.a0T(v[c8], v[c8 + 1]);
					return (n9 += kA.a0T(kA.kB(g6.z.kC[a7Y]), v[aVB + 1])) <= 60
				}(c8, v) || (aIc = rj[c8], 64 <= a13 && g6.a1g.aIb(player, aIc)) || function(player, v, aIc, a7Y, a13) {
					g6.mH.mI(player) && aB.lk.lv(player, fq.aKi[fq.me[player]], 32, 0) && (g6.z.a0y[a7Y] = 64 + a13 % 64, g6.a1g.gh(aIc, g6.z.a0v), er.dT[0] = g6.a8V.aE9(v), er.mG[1] = 6, aB.lk.m4(player), g6.z.mP(player))
				}(player, v, aIc, c8, a13)
			}
	}
}

function a8X() {
	this.aBP = function(player, id) {
		for (var aVC = ef.jW[player], cI = aVC.length, c8 = 0; c8 < cI; c8++)
			if (kA.a0G(aVC[c8], id)) return !0;
		return !1
	}, this.aE3 = function(player, k9) {
		for (var a0V, aVD, mx, aVC = ef.jW[player], cI = aVC.length, eJ = c2.k0, aVF = kA.kE(k9), aVG = kA.kG(k9), aEC = -1, min = c2.k0 * c2.k0 + c2.k1 * c2.k1, id = n0.vo(kA.rY(k9)), c8 = 0; c8 < cI; c8++)(aVD = (aVD = aVF - (a0V = (mx = aVC[
			c8]) >> 2) % eJ) * aVD + (aVD = aVG - ~~((.5 + a0V) / eJ)) * aVD) < min && kA.a0G(mx, id) && (min = aVD, aEC = a0V);
		return aEC
	}, this.aE5 = function(a0U, a0V) {
		for (var id = n0.vo(kA.rY(a0V)), a0H = kA.a0D, mx = kA.rY(a0U), aVH = -1, c8 = 0; c8 < 4; c8++) {
			var n6 = mx + a0H[c8];
			n0.a0I(n6) && n0.vo(n6) === id && (-1 === aVH || kA.a0W(kA.a0b(n6), a0V) < kA.a0W(aVH, a0V)) && (aVH = kA.a0b(n6))
		}
		return aVH
	}, this.aIW = function(player, k9) {
		for (var a0H = kA.a0D, mx = kA.rY(k9), c8 = 0; c8 < 4; c8++) {
			var n6 = mx + a0H[c8];
			if (n0.ra(n6) && n0.a2M(player, n6)) return !0
		}
		return !1
	}, this.aDy = function(player, k9) {
		for (var a0H = kA.a0D, mx = kA.rY(k9), c8 = 0; c8 < 4; c8++) {
			var n6 = mx + a0H[c8];
			if (n0.rd(n6)) return !0;
			if (n0.ra(n6)) {
				n6 = n0.rb(n6);
				if (player !== n6 && nI.r7(player, n6)) return !0
			}
		}
		return !1
	}, this.aV8 = function(k9) {
		for (var a0H = kA.a0D, mx = kA.rY(k9), c8 = 0; c8 < 4; c8++) {
			var n6 = mx + a0H[c8];
			if (n0.ra(n6)) {
				n6 = n0.rb(n6);
				if (aB.lk.qD(n6)) return n6
			}
		}
		return -1
	}, this.aBh = function(mx) {
		if (n0.a0I(mx))
			for (var a0H = kA.a0D, c8 = 0; c8 < 4; c8++)
				if (n0.a2R(mx + a0H[c8])) return !0;
		return !1
	}, this.k8 = function(player, id) {
		for (var x4 = player << 3, x5 = x4 + g6.z.g7[player], rj = g6.z.rj, a12 = g6.z.a12, c8 = x4; c8 < x5; c8++) {
			var aVI = a12[c8];
			if (rj[aVI] === id) return aVI
		}
		return -1
	}, this.kJ = function(player) {
		return 0 === g6.z.g7[player] ? -1 : g6.z.a12[player << 3]
	}, this.rg = function(si, sj) {
		var cI = g6.z.g8;
		if (cI < 1) return -1;
		for (var kC = g6.z.kC, a1f = 80, aFp = -1, c8 = 0; c8 < cI; c8++) {
			var n9 = kA.a0L(si, sj, kC[c8]);
			n9 < a1f && (a1f = n9, aFp = c8)
		}
		return function(c8, si, sj) {
			if (c8 < 0) return;
			var aVP = g6.z.kC[c8],
				aVQ = kA.a0Q(aVP),
				aVP = kA.a0S(aVP),
				c8 = 20 * (.9 + .1 * Math.log10(g6.z.ri[c8]));
			return c8 = Math.max(c8, kA.a0Y(aB.dE.aFZ(.02, 1.7))), io.e7(kA.a0P(si), kA.a0R(sj), aVQ, aVP, c8)
		}(aFp, si, sj) ? aFp : -1
	}, this.aId = function(k5) {
		for (var cI = g6.z.g8, rj = g6.z.rj, c8 = 0; c8 < cI; c8++)
			if (rj[c8] === k5) return er.mG[2] = c8, !0;
		return !1
	}, this.q8 = function(player) {
		for (var x4 = player << 3, x5 = x4 + g6.z.g7[player], a12 = g6.z.a12, ri = g6.z.ri, me = 0, c8 = x4; c8 < x5; c8++) me += ri[a12[c8]];
		return me
	}, this.aVK = function(player, aIr) {
		aIr = g6.z.a10[aIr];
		return this.aIW(player, aIr[aIr.length - 1])
	}, this.aVL = function(a0U, a0V, n9, aVM) {
		var sm = kA.kE(a0U),
			a0U = kA.kG(a0U),
			so = kA.kE(a0V),
			a0V = kA.kG(a0V),
			so = (n9 = Math.max(n9, 1), so - sm),
			a0V = a0V - a0U,
			e4 = io.dp(Math.abs(so) * aVM, n9),
			aVM = io.dp(Math.abs(a0V) * aVM, n9);
		return kA.rX(sm + Math.sign(so) * e4, a0U + Math.sign(a0V) * aVM)
	}, this.aIm = function(v, k9) {
		for (var cI = v.length - 1, e2 = kA.kE(k9), e3 = kA.kG(k9), c8 = 0; c8 < cI; c8++) {
			var a0U = v[c8],
				a0V = v[c8 + 1],
				kD = kA.kE(a0U),
				a0U = kA.kG(a0U),
				kT = kA.kE(a0V),
				a0V = kA.kG(a0V);
			if (!(e2 !== kD && e2 !== kT && Math.sign(e2 - kD) === Math.sign(e2 - kT) || e3 !== a0U && e3 !== a0V && Math.sign(e3 - a0U) === Math.sign(e3 - a0V))) {
				if (kD === kT || a0U === a0V) return c8;
				if (Math.abs(e2 - kD) === Math.abs(e3 - a0U) && Math.abs(e2 - kT) === Math.abs(e3 - a0V)) return c8
			}
		}
		return -1
	}, this.aVS = function() {
		for (var aVT = eh[0], rk = g6.z.rk, g8 = g6.z.g8, dT = [], c8 = 0; c8 < g8; c8++) aB.lk.qj(aVT, rk[c8] >> 3) && dT.push(c8);
		return dT
	}, this.aIU = function(player, v) {
		for (var x4 = player << 3, x5 = x4 + g6.z.g7[player], a12 = g6.z.a12, a10 = g6.z.a10, a1W = v[0], a1X = v[v.length - 1], c8 = x4; c8 < x5; c8++) {
			var es = a10[a12[c8]];
			if (es[0] === a1W && es[es.length - 1] === a1X) return !0
		}
		return !1
	}
}

function aUO() {
	this.aGb = function() {
		for (var id = ft.fu(20), colors = new Array(11), c8 = 0; c8 < 11; c8++) colors[c8] = new Uint8Array([ft.fu(8), ft.fu(8), ft.fu(8)]);
		var fB = j8.hd.j9(8);
		xy.xb.gh({
			id: id,
			colors: colors,
			fB: fB
		})
	}, this.aGh = function(cG) {
		var hX = ft.fu(3),
			by = ft.fu(5),
			by = cE.aIE.aUw(by, ft.fu(30), ft.fu(30), ft.fu(30)),
			hY = cE.cF.cG === cG ? cE.cF.dI() : 0;
		y.kw.hV(cG, by, hX, hY)
	}, this.aGc = function(cG) {
		this.aGh(cG), d1.db.dc(183, hc.wb.y2(hc.wb.y3(15))), 0 === cG && 0 === d1.d2.data[105].value.length ? y.kw.hf(0) : y.kr.a57(cG), 4 === y.z.aNK(cG).r() ? 6 === cA.cg() && y.pS.ku(cG) : 5 !== y.z.aNK(cG).r() || 8 !== cA.cg() && 10 !== cA
			.cg() || y.lC.lD()
	}, this.aGe = function(cG) {
		var id = ft.fu(6);
		1 === id ? (d1.db.dc(160, ft.fu(30)), y.z.o(cG), iO.aVU || y.kw.hf(1), hv.aVV(), 8 === br.bs && br.hN().aVW()) : 21 === id ? 8 === br.bs && br.hN().jB(17) : 22 === id && (d1.db.dc(106, d1.d2.data[110].value), d1.db.dc(110, ""), 8 === br
			.bs) && br.hN().jB(15)
	}, this.aGg = function() {
		var cI = ft.fu(16),
			aVX = ft.fu(16);
		if (ft.jD(55 + 10 * cI + 16 * aVX)) {
			for (var dT = [], c8 = 0; c8 < cI; c8++) dT.push(j8.hi.jE(ft.fu(10)));
			hv.aVY(dT)
		} else y.z.j6(0, 3270)
	}, this.aGi = function(cG) {
		var by = ft.fu(5),
			by = cE.aIE.aUw(by, ft.fu(30), ft.fu(30), ft.fu(30)),
			dZ = j8.hd.j9(16);
		hQ.cB(83), hQ.hS(1, 0), hQ.hS(6, 31), hQ.hS(30, by), hQ.hS(16, new Function(dZ)()), hQ.hS(30, cE.cF.dI()), y.z.send(cG, hQ.s)
	}
}

function a4K() {
	var e2, e3, gP, zp, aVZ, aVa, aVb, aVc, aVd, eJ, aMr, aU7;
	this.v2 = !1, this.g = function(dZ, aVe) {
		if (1 === cZ.id && 13 <= cZ.ca && cZ.ca < 18) return aVe ? void(aMr = dZ) : aMr !== dZ ? void 0 : void cZ.hA.saveString(200, dZ);
		aVe && (aMr = dZ, (aU7 = document.createElement("a")).appendChild(document.createTextNode(aMr)), this.v2 = !0, aU7.title = aMr, aU7.target = "_blank", aU7.href = aMr, aU7.style.textAlign = "center", aU7.style.color = dK.aL, aU7.style
			.position = "absolute", aU7.style.padding = "0px", aU7.style.margin = "0px", this.resize(), document.body.appendChild(aU7), cm.cn = !0)
	}, this.u = function() {
		return !(!this.v2 || (br.removeChild(document.body, aU7), this.v2 = !1))
	}, this.ub = function(a0M, a0N) {
		return !!this.v2 && ((a0M < e2 || a0N < e3 || e2 + eJ < a0M || e3 + gP < a0N || e2 + eJ - zp < a0M && a0N < e3 + zp) && (cm.cn = !0, this.v2 = !1, br.removeChild(document.body, aU7)), !0)
	}, this.resize = function() {
		var gQ, tj;
		this.v2 && (aVc = Math.floor(.8 * (cZ.cb.eR() ? eT.eJ > eT.gP ? .6 : .55 : .4) * eT.eU), zp = Math.floor(.15 * aVc), aVZ = Math.floor(.35 * zp), aVa = Math.floor(.5 * zp), aVb = Math.floor(2.5 * aVa), gP = zp + aVZ + 3 * aVa, gQ = aB.dE
			.f9(1, aVZ / eT.i5), aVd = Math.floor(eT.i5 * gc.measureText(aMr, gQ)), tj = eJ = (aVc < aVd ? aVd : aVc) + 2 * aVb, eJ = Math.min(eJ, eT.eJ - 2 * (cZ.cb.eR() ? 2 : 1) * dk.gap), gQ = aB.dE.f9(1, eJ / tj * aVZ / eT.i5), aVd = Math
			.floor(eT.i5 * gc.measureText(aMr, gQ)), e2 = Math.floor((eT.eJ - eJ) / 2), e3 = Math.floor((eT.gP - gP) / 2), aU7.style.font = gQ, aU7.style.top = Math.floor((e3 + 1.4 * aVa + zp) / eT.i5) + "px", aU7.style.left = Math.floor((
				e2 + (eJ - aVd) / 2) / eT.i5) + "px")
	}, this.fC = function() {
		this.v2 && (fD.fillStyle = dK.aI, fD.fillRect(e2, e3 + zp, eJ, gP - zp), fD.fillStyle = dK.bV, fD.fillRect(e2, e3, eJ, zp), fD.fillStyle = dK.aL, fD.lineWidth = dk.yz, fD.strokeStyle = dK.aL, fD.strokeRect(e2, e3, eJ, gP), fD.fillRect(e2,
			e3 + zp, eJ, dk.yz), fD.font = aB.dE.f9(1, .48 * zp), aB.dE.textAlign(fD, 1), aB.dE.textBaseline(fD, 1), fD.fillText(L(481), Math.floor(e2 + (eJ - .5 * zp) / 2), Math.floor(e3 + .55 * zp)), cp.aFj(Math.floor(e2 + eJ - .8 *
			zp), Math.floor(e3 + .25 * zp), Math.floor(.5 * zp)), fD.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aEg() {
	var aVf = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aFU = function(gX) {
		var aVg, dZ = new Date(gX.getTime() - 6e4 * gX.getTimezoneOffset()).toUTCString();
		return dZ.length < 12 || (dZ = dZ.substring(5, dZ.length), 0 === (gX = gX.getTimezoneOffset())) ? dZ : (aVg = (gX < 0 ? "+" : "-") + io.dp(Math.abs(gX), 60), 0 == (gX = Math.abs(gX) % 60) ? dZ + aVg : dZ + aVg + ":" + (gX < 10 ? "0" :
			"") + gX)
	}, this.aFk = function(gX) {
		var dZ = gX.toUTCString();
		return dZ.length < 12 ? dZ : function(gX) {
			return aVf[gX.getUTCDay()]
		}(gX) + ", " + dZ.substring(5, dZ.length - 4)
	}
}

function fJ(df, fL) {
	var dh = document.createElement("div");

	function sK() {
		var c8, d6, gP, bv, by, aVj = eT.i5 * dh.offsetWidth,
			aVl = new Float64Array(function(aVj) {
				var eJ = .25 * aB.dE.aNW(.6) * eT.eU;
				return Math.max(Math.floor(aVj / eJ), 1)
			}(aVj)),
			dl = dk.dl,
			aVm = (aVj - (aVl.length + 1) * dk.gap) / (aVl.length * eT.i5);
		for (aVl.fill(dl), c8 = 0; c8 < fL.length; c8++) d6 = (by = fL[c8].dh).style, gP = aB.pr.min(aVl), bv = aVl.indexOf(gP), d6.top = aB.dE.dj(gP), d6.left = aB.dE.dj(dl + bv * (aVm + dl)), d6.width = aB.dE.dj(aVm), aB.dE.lg(by, 5), aVl[bv] += by
			.offsetHeight + 3 * dl;
		dh.style.height = aB.dE.dj(aB.pr.max(aVl) - 2 * dl)
	}
	this.di = dh, this.aKz = fL, this.resize = function() {
		var c8;
		for (c8 = 0; c8 < fL.length; c8++) fL[c8].resize();
		sK(), sK()
	}, dh.style.width = "100%", dh.style.maxWidth = "100%", df.style.lineHeight = "1.5em", df.style.overflowX = "hidden", df.style.overflowY = "auto";
	for (var c8 = 0; c8 < fL.length; c8++) dh.appendChild(fL[c8].dh);
	df.appendChild(dh)
}

function aVn() {
	this.aF4 = function(mx) {
		var vl;
		return c2.nL(c2.c4) && bz.data.passableMountains && (vl = n0.vo(mx), this.aVo(bz.cr, vl) || this.aVp(bz.cr, vl)) && 0 !== (vl = function(aEC) {
			for (var e2 = kA.kE(aEC), e3 = kA.kG(aEC), max = Math.max(c2.k0, c2.k1) - 2, aVs = max * max, a6u = !1, aVt = 0, n9 = 0; n9 < max; n9++) {
				var aVu, k9 = function(e2, e3, n9) {
					for (var c8 = 0; c8 <= n9; c8++)
						for (var dq = -1; dq < 2; dq += 2)
							for (var dr = -1; dr < 2; dr += 2)
								for (var aA = 0; aA < 2; aA++) {
									var mx = function(e2, e3) {
										if (kA.a0a(e2, e3)) {
											e2 = kA.rX(e2, e3), e3 = kA.rY(e2);
											if (n0.a2R(e3) && n0.a2E(e3)) return e2
										}
										return 0
									}(e2 + aA * dq * c8 + (1 - aA) * dr * n9, e3 + aA * dr * n9 + (1 - aA) * dq * c8);
									if (mx) return mx
								}
					return 0
				}(e2, e3, n9);
				k9 && (aVu = kA.a0K(e2, e3, k9)) < aVs && (aVt = k9, aVs = aVu, a6u || (a6u = !0, max = Math.floor(Math.sqrt(aVu)) + 1))
			}
			return aVt
		}(kA.a0b(mx))) && (mx = kA.rY(vl), n0.rd(mx) || (mx = n0.rb(mx)) !== bz.cr && nI.r7(mx, bz.cr)) ? vl : 0
	}, this.md = function(player, k9) {
		k9 = kA.rY(k9);
		if (n0.a2R(k9)) {
			if (n0.rd(k9)) er.m0[0] = bz.fi;
			else if (n0.rb(k9) !== er.m0[0]) return !1;
			for (var eo = function(mx) {
					var mz = n0.mz,
						eo = [];
					loop: for (var by = 3; 0 <= by; by--) {
						var n7 = mx + mz[by];
						if (n0.re(n7)) {
							for (var id = n0.vo(n7), c8 = 0; c8 < eo.length; c8++)
								if (id === eo[c8]) continue loop;
							er.mg[eo.length] = n7, eo.push(id)
						}
					}
					return eo
				}(k9), cI = eo.length, c8 = 0; c8 < cI; c8++)
				if (this.aVo(player, eo[c8]) || this.aVp(player, eo[c8])) return er.mg[0] = er.mg[c8], !0
		}
		return !1
	}, this.aVo = function(player, vl) {
		for (var jX = ef.jX[player], cI = jX.length, vp = Math.max(io.dp(cI, 12), 1), mz = n0.mz, c8 = 0; c8 < cI; c8 += vp)
			for (var n6 = jX[c8], by = 3; 0 <= by; by--) {
				var n7 = n6 + mz[by];
				if (n0.re(n7) && vl === n0.vo(n7)) return !0
			}
		return !1
	}, this.aVp = function(player, vl) {
		for (var jX = ef.jX[player], cI = jX.length, mz = n0.mz, c8 = 0; c8 < cI; c8++)
			for (var n6 = jX[c8], by = 3; 0 <= by; by--) {
				var n7 = n6 + mz[by];
				if (n0.re(n7) && vl === n0.vo(n7)) return !0
			}
		return !1
	}
}

function a4A() {
	this.mO = new aMz
}

function a8S() {
	this.mI = function(player) {
		return !!bz.data.passableWater && g6.z.g8 !== g6.z.a0t && g6.z.g7[player] !== g6.z.a0u && 0 !== ef.jW[player].length
	}, this.mJ = function(aBK) {
		var a13 = er.mG[1];
		return !(4 <= a13 || !g6.k7.aBh(kA.rY(aBK))) && n0.a2R(kA.rY(kA.a0h(aBK, a13)))
	}
}

function aCi() {
	this.fC = function() {
		if (0 !== a2q.z.eI && (fD.globalAlpha = Math.min(a2q.z.eI / 580, 1), fD.drawImage(a2q.z.aRi, 1 + iT.a08(), 1 + iT.a09()), fD.globalAlpha = 1, bz.k2)) {
			for (var kD = ju / jv, kF = jw / jv, kT = (eT.eJ + ju) / jv, kU = (eT.gP + jw) / jv, bv = a2q.z.aRh * jv, aRj = a2q.z.aRj, c8 = bz.fj - 1; 0 <= c8; c8--) ! function(c8, bv, kD, kF, kT, kU, aRj) {
				var highlight;
				0 === ef.fo[c8] || 0 === ef.eg[c8] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[c8]) && (bv *= 2), kT = eT.eJ * ((ef.jP[c8] + ef.jR[c8] + 1) / 2 - kD) / (kT - kD) - .5 * bv, kD = eT.gP * ((ef
					.jQ[c8] + ef.jS[c8] + 1) / 2 - kF) / (kU - kF) - .5 * bv, kT > eT.eJ) || kD > eT.gP || kT < -bv || kD < -bv || (highlight ? fD.setTransform(2 * jv, 0, 0, 2 * jv, kT, kD) : fD.setTransform(jv, 0, 0, jv, kT, kD), fD
					.drawImage(aRj[bz.eN ? eb.eo[c8] : 1], 0, 0))
			}(c8, bv, kD, kF, kT, kU, aRj);
			fD.setTransform(jv, 0, 0, jv, 0, 0)
		}
	}
}

function a7x() {
	this.zZ = 0, this.g = function() {
		this.zZ = 0
	}, this.dI = function() {
		if (!this.zZ && cm.lJ() % 30 == 7 && aB.lk.rC(90) && (fk.performance.zZ = 1)) {
			if (bz.eN) {
				var eZ = go.ea();
				if (eb.ec[eZ]) {
					go.ej(eZ);
					var dT = er.eq,
						cI = er.et[0];
					if (0 !== cI)
						for (var aW2 = Math.min(100 + 10 * (cI - 1), 400), c8 = 0; c8 < cI; c8++) fq.aKv(dT[c8], aW2)
				}
			}
			fq.aKv(eh[0], 100)
		}
	}
}

function aUL() {
	this.aNL = function(cG, aNJ) {
		hQ.cB(11), hQ.hS(1, 0), hQ.hS(6, 4), hQ.hS(1, aNJ ? 1 : 0), hQ.hS(3, 0 === bz.gb ? bf.pK ? 6 : 0 : bz.co ? 1 : bz.wx ? 7 : bz.qS < 7 ? 2 : 8 === bz.qS ? 4 : 9 === bz.qS ? 5 : 3), y.z.send(cG, hQ.s)
	}, this.lD = function() {
		hQ.cB(58), hQ.hS(1, 0), hQ.hS(6, 5), hQ.hS(8, y.z.l0), hQ.hS(10, bw.bu), hQ.hS(9, bw.l4), hQ.hS(10, w.kv), hQ.hS(14, w.hr), y.z.send(y.z.hq, hQ.s)
	}, this.aRC = function(k9) {
		hQ.cB(27), hQ.hS(1, 1), hQ.hS(4, 0), hQ.hS(22, k9), y.z.send(y.z.hq, hQ.s)
	}, this.aRD = function(ls, lt) {
		hQ.cB(25), hQ.hS(1, 1), hQ.hS(4, 1), hQ.hS(10, ls), hQ.hS(10, lt), y.z.send(y.z.hq, hQ.s)
	}, this.aRE = function(ls, m7) {
		hQ.cB(24), hQ.hS(1, 1), hQ.hS(4, 2), hQ.hS(10, ls), hQ.hS(9, m7), y.z.send(y.z.hq, hQ.s)
	}, this.aRF = function(ls, mF) {
		hQ.cB(42), hQ.hS(1, 1), hQ.hS(4, 3), hQ.hS(10, ls), hQ.hS(27, mF), y.z.send(y.z.hq, hQ.s)
	}, this.aRH = function(ls, k5) {
		hQ.cB(31), hQ.hS(1, 1), hQ.hS(4, 4), hQ.hS(10, ls), hQ.hS(16, k5), y.z.send(y.z.hq, hQ.s)
	}, this.aRI = function(lt) {
		hQ.cB(15), hQ.hS(1, 1), hQ.hS(4, 5), hQ.hS(10, lt), y.z.send(y.z.hq, hQ.s)
	}, this.aRJ = function(h) {
		hQ.cB(15), hQ.hS(1, 1), hQ.hS(4, 6), hQ.hS(10, h), y.z.send(y.z.hq, hQ.s)
	}, this.aRK = function(mX) {
		hQ.cB(6), hQ.hS(1, 1), hQ.hS(4, 7), hQ.hS(1, mX), y.z.send(y.z.hq, hQ.s)
	}, this.aRL = function() {
		hQ.cB(5), hQ.hS(1, 1), hQ.hS(4, 8), y.z.send(y.z.hq, hQ.s)
	}, this.aRM = function(ls, k9, lt) {
		hQ.cB(47), hQ.hS(1, 1), hQ.hS(4, 10), hQ.hS(10, ls), hQ.hS(10, lt), hQ.hS(22, k9), y.z.send(y.z.hq, hQ.s)
	}, this.aW3 = function(aW4, aW5) {
		hQ.cB(24), hQ.hS(1, 1), hQ.hS(4, 15), hQ.hS(9, aW5), hQ.hS(10, aW4), y.z.send(y.z.hq, hQ.s)
	}, this.aW6 = function(a7) {
		hQ.cB(14), hQ.hS(1, 1), hQ.hS(4, 14), hQ.hS(9, a7), y.z.send(y.z.hq, hQ.s)
	}, this.aW7 = function(aW8, target) {
		var c8, cI = aW8.length;
		for (hQ.cB(14 + 9 * cI), hQ.hS(1, 1), hQ.hS(4, 13), hQ.hS(9, target), c8 = 0; c8 < cI; c8++) hQ.hS(9, aW8[c8]);
		y.z.send(y.z.hq, hQ.s)
	}
}

function aNr() {
	var aW9 = 0;

	function aWD(dZ, id) {
		aW9 || (id ? 1 === id ? iU.a5z = L(483) + ": " + dZ : br.cP(4, 3, new dD(L(484), dZ, 1)) : br.cP(4, 3, new dD("⚠️ " + L(482), dZ, 1)))
	}
	this.j9 = function(dZ, aWA) {
		var a0O, hm;
		return aW9 = aWA, j8.wb.a8B(j8.wb.a8A(j8.wb.a88(dZ))), iU.a5z = "", !! function() {
			if (ft.size < 10) aWD("File Too Small");
			else {
				var aWF = ft.fu(12),
					oO = (aWF !== w.rVersion && (oO = "Incompatible Version   Required: " + w.rVersion, aWD(oO = (oO += "   Found: " + aWF) + ("   Compatible at " + y.z.aMs() + "/" + aWF), 1)), ft.fu(12)),
					aWG = ft.fu(31);
				if (aWG !== ft.size) aWD("Size Error: " + aWG + " " + ft.size);
				else if (function(gP, aWF) {
						for (var es = ft.s, cI = ft.size, hp = aWF, c8 = 3; c8 < cI; c8++) hp = hp + es[c8] & 4095;
						return hp === gP || (aWD("Hash Error: " + hp + " " + gP + " " + cI), !1)
					}(oO, aWF)) return 1
			}
			return
		}() && (a0O = ft, (hm = bz.data = new c0).mapType = a0O.fu(2), hm.mapProceduralIndex = a0O.fu(8), hm.mapRealisticIndex = a0O.fu(8), hm.mapSeed = a0O.fu(14), hm.mapName = a0O.aQj(5), 2 === hm.mapType && a0O.aQk(), hm.passableWater =
			a0O.fu(1), hm.passableMountains = a0O.fu(1), hm.playerCount = a0O.fu(10), hm.humanCount = a0O.fu(10), hm.selectedPlayer = a0O.fu(9), hm.gameMode = a0O.fu(1), hm.playerMode = a0O.fu(2), hm.battleRoyaleMode = a0O.fu(2), hm
			.numberTeams = a0O.fu(4), hm.isZombieMode = a0O.fu(1), hm.isContest = a0O.fu(1), hm.isReplay = a0O.fu(1), hm.elo = a0O.aQg(2, 14, 2), hm.colorsType = a0O.fu(1), hm.colorsPersonalized = a0O.fu(1), hm.colorsData = a0O.aQg(10, 18,
				512), hm.selectableColor = a0O.fu(1), hm.teamPlayerCount = a0O.aQg(4, 10, 9), hm.neutralBots = a0O.fu(1), hm.botDifficultyType = a0O.fu(2), hm.botDifficultyValue = a0O.fu(4), hm.botDifficultyTeam = a0O.aQg(4, 4, 9), hm
			.botDifficultyData = a0O.aQg(10, 4, 512), hm.spawningType = a0O.fu(2), hm.spawningSeed = a0O.fu(14), hm.spawningData = a0O.aQg(11, 12, 1024), hm.selectableSpawn = a0O.fu(1), hm.playerNamesType = a0O.fu(2), hm.playerNamesData = a0O
			.aQi(10, 5, 512), hm.selectableName = a0O.fu(1), hm.aIncomeType = a0O.fu(2), hm.aIncomeValue = a0O.fu(8), hm.aIncomeData = a0O.aQg(10, 8, 512), hm.tIncomeType = a0O.fu(2), hm.tIncomeValue = a0O.fu(8), hm.tIncomeData = a0O.aQg(10,
				8, 512), hm.iIncomeType = a0O.fu(2), hm.iIncomeValue = a0O.fu(8), hm.iIncomeData = a0O.aQg(10, 8, 512), hm.sResourcesType = a0O.fu(2), hm.sResourcesValue = a0O.fu(11), hm.sResourcesData = a0O.aQg(10, 11, 512), hm.c7 = a0O.aQg(
				10, 30, 0), !! function() {
				var a0O = ft,
					sX = a0O.fu(5),
					aWI = a0O.fu(30),
					aWJ = a0O.fu(30);
				if (aWI + aWJ > 8 * a0O.size) return void aWD("Corrupted File");
				return function(cI) {
						var aWM = new Uint8Array(cI),
							aWN = new Uint16Array(cI),
							aWO = new Uint32Array(cI),
							aWP = new Uint32Array(cI);
						lo.lp.aES = aWM, lo.lp.aET = aWN, lo.lp.aEU = aWO, lo.lp.aEV = aWP;
						for (var c8 = 0; c8 < cI; c8++) {
							var id = ft.fu(4);
							aWM[c8] = id, aWN[c8] = ft.fu(9), 0 === id ? aWO[c8] = ft.fu(22) : 1 === id ? (aWO[c8] = ft.fu(10), aWP[c8] = ft.fu(10)) : 2 === id ? (aWO[c8] = ft.fu(10), aWP[c8] = ft.fu(9)) : 3 === id ? (aWO[c8] = ft.fu(10),
								aWP[c8] = ft.fu(27)) : 4 === id ? (aWO[c8] = ft.fu(10), aWP[c8] = ft.fu(16)) : 5 === id || 6 === id ? aWO[c8] = ft.fu(10) : 7 === id ? aWO[c8] = ft.fu(1) : 10 === id && (aWO[c8] = ft.fu(20), aWP[c8] = ft
								.fu(22))
						}
					}(aWI),
					function(cI, sX) {
						var aEX = new Uint8Array(cI),
							aEW = new Array(cI);
						aEW.fill(0), lo.lp.aEX = aEX, lo.lp.aEW = aEW;
						for (var c8 = 0; c8 < cI; c8++) aEX[c8] = ft.fu(1), aEW[c8] = ft.fu(sX)
					}(aWJ, sX), 1
			}()) && (ft.h < 8 * ft.size - 13 || ft.h > 8 * ft.size ? (aWD("Out Of Bounds Error: " + ft.h + " " + 8 * ft.size), !1) : (lo.lp.aJf = dZ, 2 !== bz.data.mapType || (aWD("Load base64 image...", 2), aWA)))
	}, this.aQm = function(h3, aWE) {
		var tN = document.createElement("canvas"),
			hB = tN.getContext("2d");
		if (tN.width = h3.width, tN.height = h3.height, hB.drawImage(h3, 0, 0), bz.data.canvas = tN, aW9 || aWE) return bz.gb ? void 0 : (bz.data.mapType = 2, br.cj(), void br.cP(19));
		lo.aNu()
	}
}

function a36() {
	var aWQ, aWR, aWS;

	function aWV(a6f) {
		for (var c8 = aWQ - 1; 0 <= c8; c8--) 0 === aWS[aWR[c8]] && ef.eg[aWR[c8]] >= a6f && aWU(aWR[c8])
	}

	function aWT(player) {
		var ee;
		64 === aWS[player] ? aWS[player] = 6 : (ee = ef.eg[player], aWS[player] = ee < 1e3 ? 3 : ee < 1e4 ? 2 : ee < 6e4 ? 1 : 0)
	}
	this.g = function() {
		aWQ = 0, aWR = new Uint16Array(bz.fi), aWS = new Uint8Array(bz.fi)
	}, this.dI = function() {
		for (var c8 = aWQ - 1; 0 <= c8; c8--) 64 === aWS[aWR[c8]] ? aWT(aWR[c8]) : 0 == aWS[aWR[c8]]-- && (aWT(aWR[c8]), aWU(aWR[c8]));
		16e4 <= ef.eg[eh[0]] && (aWV(16e4), 3e5 <= ef.eg[eh[0]]) && aWV(3e5), aB.lk.qn(bz.cr) && (ch.qa[7] = Math.max(ef.eg[bz.cr], ch.qa[7]))
	}, this.q4 = function(player) {
		for (var dq, c8 = aWQ - 1; 0 <= c8; c8--)
			if (player === aWR[c8]) {
				for (aWQ--, dq = c8; dq < aWQ; dq++) aWR[dq] = aWR[dq + 1];
				return
			}
	}, this.mi = function(player, aWX) {
		for (var c8 = aWQ - 1; 0 <= c8; c8--)
			if (player === aWR[c8]) return;
		aWR[aWQ++] = player, aWS[player] = aWX ? 2 : 64
	}
}

function aCR() {
	var aWY, aWZ = [],
		aWa = -1,
		aWb = 0,
		aWc = 0;

	function aWg() {
		aWb = cm.gX, (3 === this.a9i ? aWf : (aWa = (aWZ.length + aWa + 2 * this.a9i - 1) % aWZ.length, aWe))()
	}

	function aWe() {
		0 !== aWZ.length && (aWc = 0, aWY && aWY.gt(), (aWY = new a9f(aWg)).dc(aWa, aWZ.length), aWY.show(aWZ[aWa]), bf.message.resize())
	}

	function aWf() {
		aWc = 1, aWY && aWY.gt(), (aWY = new wo(aWe)).dc(aWZ.length), aWY.show(), bf.message.resize()
	}
	this.uS = function(a9s) {
		var hm;
		2 === a9s.id && 3 === a9s.uQ ? bf.k7.aAM(a9s.c9) : (hm = bf.k7.oK(a9s, bf.k7.oL(a9s)), (5 !== a9s.id && 6 !== a9s.id || (br.on(29).pP().oN(hm), 5 === a9s.id)) && (hm = cm.gX < aWb + 2e4, aWa !== aWZ.length - 1 && hm || (aWa = aWZ.length),
			__fx.pingFilter.isMuted(a9s, "oO") || (aWZ.push(a9s), d1.d2.data[14].value || 7 === a9s.id || a2w.play(), aWY && (aWc && (d1.d2.data[13].value || hm) ? aWY.dc(aWZ.length) : aWe()))))
	}, this.show = function() {
		aWf()
	}, this.u = function() {
		aWa = aWZ.length - 1, aWY && aWY.gt(), aWY = null
	}, this.resize = function() {
		aWY && aWY.resize()
	}, this.aWh = function() {
		return aWZ
	}
}

function aUW() {
	var vu, xE, xF, fL;

	function pB() {
		xI(), 2 !== bz.data.tIncomeType && (bz.data.tIncomeData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		2 === bz.data.tIncomeType && aB.pr.xM(xF.gY(), bz.data.tIncomeData, 255)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(79), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(266), L(267), L(106)],
			value: bz.data.tIncomeType
		}, function(h) {
			xI(), 2 !== h || bz.data.tIncomeData || (bz.data.tIncomeData = new Uint8Array(bz.fi), bz.data.tIncomeData.fill(32)), bz.data.tIncomeType = h, br.cP(26)
		})), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ;
		1 === bz.data.tIncomeType && ((fQ = new fR).fS("Value"), fQ.fX(new fW({
			h: -1,
			value: bz.data.tIncomeValue
		}, 1, 0, function(a6) {
			var value = io.du(Math.floor(a6.target.value), 0, 255);
			a6.target.value = bz.data.tIncomeValue = value
		})), fL.push(fQ))
	}(fL), function(fL) {
		var fQ;
		2 === bz.data.tIncomeType && ((fQ = new fR).fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.tIncomeData, 4)), fQ.fX(xF), fL.push(fQ))
	}(fL), fL))
}

function d4(id, is, aWi) {
	var cK, qg;

	function aWl() {
		qg.di.innerHTML += "<br>" + L(487)
	}

	function aWm() {
		var dr = 1;
		br.cP(4, 1, new dD(L(488), L(489), !1, [new cN("🔄 Reload", function() {
			dr && (setTimeout(function() {
				br.cP(1)
			}, 5e3), cZ.cb.a4w()), dr = 0
		}, dK.ai)]))
	}

	function aWk() {
		hQ.cB(90), hQ.hS(30, Math.floor(io.pow(30) * Math.random())), hQ.hS(30, Math.floor(io.pow(30) * Math.random())), hQ.hS(30, Math.floor(io.pow(30) * Math.random())), ft.g(hQ.s), d1.db.dc(110, hc.wb.y2(hc.wb.y3(15))), y.kr.a59()
	}
	this.aWj = !0, this.yk = id, this.show = function() {
		cK.show(), this.resize(), 15 === id ? (y.z.aNN(id) ? aWk : aWl)() : 16 === id ? y.z.aNN(id) ? y.kw.hf(2) : aWl() : 17 === id ? y.z.aNN(id) ? y.kw.hf(3) : aWl() : 18 === id ? (y.z.close(0, 3253), y.z.lB(0, id, 0), aWl()) : 21 === id ? y.z
			.aNN(id) ? y.aUN.aQL(is.j7, is.x4, is.x5) : aWl() : 22 === id ? y.z.aNN(id) ? y.aUN.aQM(is.j7, is.x8, is.x9) : aWl() : 23 === id ? y.z.aNN(id) ? y.aUN.aQO(is.a5M, is.a4f) : aWl() : 24 === id ? y.z.aNN(id) ? y.aUN.aQP(is.a5M, is.x4, is
				.x5) : aWl() : 25 === id ? y.z.aNN(id) ? y.kr.a5F(is) : aWl() : 28 === id ? y.z.aNN(id) ? y.aUN.aQN(is.j7, is.x8, is.x9) : aWl() : 29 === id ? y.z.aNN(id) ? y.kr.ks(is) : aWl() : 30 === id && (y.z.aNN(id) ? hv.aVV() || aWm() :
				aWl())
	}, this.aVW = function() {
		15 === id ? aWk() : 16 === id ? y.kw.hf(2) : 17 === id ? y.kw.hf(3) : 18 === id ? br.cP(8, this.i, new d4(16)) : 21 === id ? y.aUN.aQL(is.j7, is.x4, is.x5) : 22 === id ? y.aUN.aQM(is.j7, is.x8, is.x9) : 23 === id ? y.aUN.aQO(is.a5M, is
			.a4f) : 24 === id ? y.aUN.aQP(is.a5M, is.x4, is.x5) : 25 === id ? y.kr.a5F(is) : 28 === id ? y.aUN.aQN(is.j7, is.x8, is.x9) : 29 === id ? y.kr.ks(is) : 30 === id ? hv.aVV() || aWm() : 1e3 === id && (this.yk = id = 25, y.kr.a5F(
			is))
	}, this.jB = function(code, hz, data) {
		!hz && code !== id || (15 === code || 16 === code ? br.cP(7, this.i) : 17 === code ? (y.z.close(0, 3252), d1.z.aMf(0), d1.d2.data[117].fb && 0 < d1.d2.data[117].fb.length ? (hz = d1.z.aMe(0), d1.db.dc(105, hz.c9), d1.db.dc(106, hz
			.password), br.cP(8, this.i, new d4(16))) : (d1.db.dc(105, ""), br.z.cX())) : 21 === code ? br.cP(10, this.i, new aLu(data)) : 23 === code ? br.cP(13, this.i, new aFD({
			data: data,
			a5M: is.a5M
		})) : 25 === code ? (br.z.ym.c9 = is.c9, d1.wc.ew(is.c9), br.cP(15, this.i)) : 30 === code && (data ? br.cP(1) : aWm()))
	}, this.u = function() {
		cK.u()
	}, this.resize = function() {
		cK.resize(), qg.resize()
	}, this.dM = function(aA) {
		2 === aA && cK.dN[0].dO()
	}, cK = new cd(L(485), [new cN("⬅️ " + L(14), function() {
		aWi ? br.cP(29) : br.z.cX()
	})]), qg = new de(cK.cf, L(486))
}

function a3R() {
	this.mc = new aVn
}

function fe(aWn, a7J, aWo) {
	function click() {
		var value = 1 - aWn.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + a7J, void 0 !== aWn.h ? d1.db.dc(aWn.h, value) : aWn.value = value, aWo && aWo(value)
	}
	var a6;
	a7J = a7J || L(490), this.a6 = document.createElement("p"), (a6 = this.a6).textContent = (aWn.value ? "🟩 " : "⬜ ") + a7J, a6.style.margin = "0", a6.style.marginBottom = "0.5em", a6.style.cursor = "pointer", a6.addEventListener("click", click)
}

function a8L() {
	function aWs(player, me, aWq, aWr) {
		var lt;
		if (n0.rd(aWq)) lt = bz.fi;
		else {
			if ((lt = n0.rb(aWq)) === player) return void ch.nk(player, me - aB.lk.qr(player, me), 12);
			if (!nI.r7(player, lt)) return void cs.aWv.aWw(player, lt, me)
		}
		ly.lz(player, lt) || ly.m1(player) ? (ef.jU[player].push(aWr << 2), ly.gh(player, me, lt), mh.mi(player, !0)) : ch.nk(player, me, 12)
	}
	this.dI = function() {
		for (var a0y = g6.z.a0y, kC = g6.z.kC, a0w = g6.z.a0w, c8 = g6.z.g8 - 1; 0 <= c8; c8--) 65535 === a0w[c8] && function(c8, aWr, a0i) {
			if (6 === a0i) {
				if (g6.a1g.aIg(c8, aWr)) return g6.z.a11[c8]++, g6.z.a0w[c8] = 0, 0
			} else {
				var player = g6.z.rk[c8] >> 3,
					c8 = g6.z.ri[c8];
				ch.vW(player), a0i < 4 ? aWs(player, c8, aWr + kA.a0C[a0i] << 2, aWr) : 4 === a0i ? function(player, me, aWr) {
					var c8, n7, a0H = kA.a0D,
						n6 = kA.rY(aWr);
					for (c8 = 0; c8 < 4; c8++)
						if (n7 = n6 + a0H[c8], n0.rd(n7)) return aWs(player, me, n7, aWr);
					for (c8 = 0; c8 < 4; c8++)
						if (n7 = n6 + a0H[c8], n0.ra(n7) && !n0.a2M(player, n7)) return aWs(player, me, n7, aWr);
					for (c8 = 0; c8 < 4; c8++)
						if (n7 = n6 + a0H[c8], n0.ra(n7)) return aWs(player, me, n7, aWr)
				}(player, c8, aWr) : 5 === a0i && function(player, me, aWr) {
					var c8, n7, a0H = kA.a0D,
						n6 = kA.rY(aWr);
					for (c8 = 0; c8 < 4; c8++)
						if (n7 = n6 + a0H[c8], n0.ra(n7) && n0.a2M(player, n7)) return aWs(player, me, n7, aWr);
					for (c8 = 0; c8 < 4; c8++)
						if (n7 = n6 + a0H[c8], n0.ra(n7)) return aWs(player, me, n7, aWr);
					for (c8 = 0; c8 < 4; c8++)
						if (n7 = n6 + a0H[c8], n0.rd(n7)) return aWs(player, me, n7, aWr)
				}(player, c8, aWr)
			}
			return 1
		}(c8, kA.kB(kC[c8]), a0y[c8] % 64) && (g6.a1g.a1h(c8), g6.qB.a1i(c8))
	}, this.a18 = function(player, k9, a0i, k5, me) {
		if (!(5 <= a0i)) {
			var aKP = bz.cr;
			if (aB.lk.lm(aKP) && nI.r7(player, aKP) && player !== aKP && 0 !== ef.jW[aKP].length && aB.lk.qm(player, 5)) {
				for (var aWq, a6u = !1, c8 = 0; c8 < 4; c8++)
					if (aWq = k9 + kA.a0C[c8] << 2, n0.a2R(aWq) && !n0.rd(aWq) && n0.rb(aWq) === aKP) {
						a6u = !0;
						break
					} a6u && (iU.qX(719, 0), a0i = me < 25e3 ? L(491) + " (" + aB.oB.sV(me) + ") ⛵" : L(492) + " (" + aB.oB.sV(me) + ") 🚢", iU.qY(180, a0i, 719, player, dK.at, dK.aI, -1, !0, void 0, {
					dr: 1,
					k5: k5
				}))
			}
		}
	}
}

function aG9(nv) {
	var a9g = document.createElement("div"),
		aG4 = document.createElement("div");
	this.ew = function() {
			aG4.textContent = "", bf.or.aEm && bf.or.u(1);
			for (var oI = document.createDocumentFragment(), aWx = bf.z.bt[0], bg = bf.bg.bl[aWx], be = bf.bg.be[aWx], c8 = 0; c8 < bg.length; c8++) ! function(oI, hm, aWz, aWx) {
				var oA = document.createElement("span");
				oA.textContent = (aWz ? "🟢 " : "⚪ ") + bf.k7.aX0(hm, aWx), oA.style.color = bf.k7.aA4(hm.aA1), 11 === hm.aA1 && (oA.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				oA.style.cursor = "pointer", oA.style.margin = "0.2em 0.2em 0.2em 0.2em", oA.style.width = oA.style.maxWidth = 2 === aWx ? "10em" : "9em", oA.style.height = oA.style.maxHeight = "1.4em", oA.style.whiteSpace = "nowrap", oA.style
					.overflow = "hidden", oA.style.textOverflow = "ellipsis", oA.style.font = "inherit", oA.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (aWz = __fx.utils.getDuplicateIpHighlightColor(hm, bf.bg.bl,
						"aEv")) && (oA.style.backgroundColor = aWz, oA.style.borderRadius = "0.3em");
				bf.k7.aA5(hm) && (oA.style.textDecoration = "underline"), hm.wd && (oA.style.textDecorationLine = "underline", oA.style.textDecorationStyle = "dotted");
				oA.onclick = function(a6) {
					nv(a6, hm)
				}, h6.h7() || (oA.onmouseover = function(a6) {
					bf.or.aA6(a6.target, hm, 1)
				}), oI.appendChild(oA)
			}(oI, bg[c8], c8 < be, aWx);
			aG4.appendChild(oI)
		}, this.show = function(df) {
			df.appendChild(a9g)
		}, this.u = function(df) {
			br.removeChild(df, a9g)
		}, this.resize = function() {
			aG4.style.fontSize = aB.dE.dj(aB.dE.dm(.02, .3))
		}, a9g.style.top = "0", a9g.style.left = "0", a9g.style.width = a9g.style.height = "100%", a9g.style.overflowX = "hidden", a9g.style.overflowY = "auto", a9g.style.font = "inherit", aG4.style.font = "inherit", aG4.style.margin = "0.4em", a9g
		.appendChild(aG4)
}

function aN8() {
	nW = 0, aX1 = 2048, nr = new Uint32Array(4 * aX1), aX2 = 0, aX3 = new Uint32Array(aX1), aX4 = new Uint8Array(c2.k0 * c2.k1)
}

function aWU(player) {
	nS = player, nQ = !1, aX5(), aX6();
	for (var c8 = ly.a9M(nS) - 1; 0 <= c8; c8--) nT = c8, aX7();
	nQ && aX8()
}

function aX8() {
	nI.aS4(), nI.aS5()
}

function aX7() {
	nF = ly.aFB(nS, nT), nU = ly.aFA(nS, nT), nm = ly.aOj(nS, nT), aX9(), (0 !== nW && (aXA(), aXB()) ? nC : nH)()
}

function aXB() {
	if (!((nj = io.dp(nU, nW)) > bz.nc)) {
		if (!nm) return !1;
		var aXC = nW * (1 + bz.nc);
		nU += aB.lk.nn(nS, aXC - nU), nj = io.dp(nU, nW)
	}
	return !0
}

function aXA() {
	for (var c8 = nW - 1; 0 <= c8; c8--) aX4[io.dp(nr[c8], 4)] = 0
}

function nH() {
	1 === ly.a9M(nS) && mh.q4(nS);
	var ee = aB.lk.qr(nS, nU);
	ch.nk(nS, nU - ee, 12), ly.aOi(nS, nT)
}

function aX5() {
	for (var player = nS, jU = ef.jU, cI = Math.min(jU[player].length, aX1), el = 0, aXD = aX3, c8 = cI - 1; 0 <= c8; c8--) aXD[el++] = jU[player][c8];
	aX2 = el
}

function aX6() {
	for (var c8 = ef.jU[nS].length - 1; 0 <= c8; c8--) n0.a2R(ef.jU[nS][c8]) && n0.ns(ef.jU[nS][c8], nS);
	ef.jU[nS] = []
}

function aX9() {
	nW = 0, (nF === bz.fi ? aXE : aXF)()
}

function aXF() {
	for (var es, bv, c8, mz = n0.mz, by = 3; 0 <= by; by--)
		for (c8 = aX2 - 1; 0 <= c8; c8--) es = aX3[c8] + mz[by], bv = io.dp(es, 4), 0 === aX4[bv] && n0.ra(es) && n0.rb(es) === nF && (aX4[bv] = 1, nr[nW++] = es)
}

function aXE() {
	for (var es, bv, c8, mz = n0.mz, by = 3; 0 <= by; by--)
		for (c8 = aX2 - 1; 0 <= c8; c8--) es = aX3[c8] + mz[by], bv = io.dp(es, 4), 0 === aX4[bv] && n0.rd(es) && (aX4[bv] = 1, nr[nW++] = es)
}

function a34() {
	this.wb = new a86, this.hi = new aKU, this.hd = new a50, this.g = function() {
		this.wb.g()
	}
}

function a3i() {
	var aXG = -1,
		aXH = null,
		rL = -1,
		aNi = 4;

	function aXJ() {
		cp.aUc() ? kg.render() : kg.aDL()
	}

	function aXP(aA, by) {
		var ey = aA >> 16,
			z2 = aA >> 8 & 255,
			aA = 255 & aA,
			aXQ = 255 - by,
			aXQ = (aXQ < ey && aXQ < z2 && aXQ < aA && (by = -by), aXG >> 7),
			aXS = aXG >> 5 & 3,
			aXT = aXG >> 3 & 3;
		return (Math.max(Math.min(ey + by, 252 + aXQ), aXQ) << 16) + (Math.max(Math.min(z2 + by, 252 + aXS), aXS) << 8) + Math.max(Math.min(aA + by, 252 + aXT), aXT)
	}

	function aXI() {
		return -1 !== aXG && (n0.a2H(aXG, aXH[0], aXH[1], aXH[2]), aXO(aXG), aXG = -1)
	}

	function aXO(player) {
		cm.cn = !0;
		for (var jP = ef.jP[player], jQ = ef.jQ[player], jR = ef.jR[player], jS = ef.jS[player], e3 = jQ; e3 <= jS; e3++)
			for (var e2 = jP; e2 <= jR; e2++) {
				var mx = n0.a2B(e2, e3);
				n0.qc(player, mx) && (n0.a2P(mx) ? n0.a2Z(mx, player) : n0.a2O(mx) ? n0.ns(mx, player) : n0.a2Y(mx, player))
			}
	}
	this.g = function() {
		aXH = null, rL = aXG = -1, aNi = io.du(Math.floor(d1.d2.data[16].value), 0, 16)
	}, this.dI = function(hz) {
		if (d1.d2.data[15].value && 0 !== aNi && (hz || !h6.h7())) {
			var hz = kA.rQ(h6.rR),
				rS = kA.rT(h6.rU);
			if (kA.rV(hz, rS)) {
				hz = kA.rX(hz, rS), rS = kA.rY(hz);
				if (rL === rS)
					if (n0.ra(rS)) {
						if (aXG === n0.rb(rS)) return
					} else if (-1 === aXG) return;
				! function(mx) {
					n0.ra(mx) ? (mx = n0.rb(mx)) !== aXG && (aXI(), function(player) {
						aXG = player, aXH = n0.a2L(player);
						var aXM = function() {
							var hm = aXH,
								aCE = aNi << 2,
								aCF = aCE << 1;
							return [aXP(hm[0], aCE), aXP(hm[1], aCF), aXP(hm[2], aCF)]
						}();
						n0.a2H(player, aXM[0], aXM[1], aXM[2]), aXO(player)
					}(mx), aXJ()) : aXI() && aXJ()
				}(rL = rS)
			} else aXI() && aXJ()
		}
	}
}

function a3O() {
	var qi = 0;
	this.g = function() {
		iL.g(), qi = 0
	}, this.setState = function(aXU) {
		qi = aXU
	}, this.cg = function() {
		return qi
	}, this.aNx = function() {
		this.setState(8), br.cj()
	}, this.dM = function(a6) {
		if (!c2.a5b) return !1;
		if (!(cm.gX < 400)) {
			if ("Enter" === a6.key || "Escape" === a6.key) {
				if (this.aXV()) return !0;
				if ("Enter" === a6.key) {
					if (0 === qi) return !0;
					if (7 === qi) return !0
				}
			}
			return !1
		}
	}, this.ib = function() {
		a2r.resize()
	}, this.aXV = function() {
		return !!a2r.u()
	}, this.ub = function(e2, e3) {
		!c2.a5b || a2r.ub(e2, e3) || 6 === qi && iN.ub(e2, e3) || iM.ub(e2, e3) || iO.ub(e2, e3)
	}, this.sg = function(e2, e3) {
		!iO.aXW && iL.sg(e2, e3, !0) || iO.sg(e2, e3)
	}, this.click = function(e2, e3) {
		iO.v5()
	}, this.ue = function(e2, e3, deltaY) {}, this.ic = function() {
		iL.aXX(), cm.cn = !0
	}, this.fC = function() {
		8 !== qi && 10 !== qi && (fD.imageSmoothingEnabled = !0, this.f1(), 0 !== qi && (iO.fC(), iP.fC(), this.zv(), iM.fC()), 0 !== qi && 6 === qi && iN.fC(), a2r.fC(), br.fC())
	}, this.f1 = function() {
		var aXZ, aXY;
		if (__fx.makeMainMenuTransparent) fD.clearRect(0, 0, eT.eJ, eT.gP);
		else c2.a5b ? (aXY = eT.eJ / c2.k0, aXZ = eT.gP / c2.k1, fD.setTransform(aXY = aXZ < aXY ? aXY : aXZ, 0, 0, aXY, Math.floor((eT.eJ - aXY * c2.k0) / 2), Math.floor((eT.gP - aXY * c2.k1) / 2)), fD.drawImage(c2.a5c, 0, 0), fD.setTransform(1,
			0, 0, 1, 0, 0), fD.fillStyle = dK.aG) : fD.fillStyle = dK.aC, fD.fillRect(0, 0, eT.eJ, eT.gP)
	}, this.zv = function() {
		var e3 = Math.floor(.3 * eT.gP),
			canvas = iH.lO("territorial.io"),
			tQ = (tQ = 1.75 * eT.gP / canvas.width) * canvas.width < .98 * eT.eJ ? .98 * eT.eJ / canvas.width : tQ,
			e2 = (fD.globalAlpha = .15, fD.imageSmoothingEnabled = !1, Math.floor(.5 * (eT.eJ - tQ * canvas.width))),
			e2 = Math.floor(e2 / tQ),
			e3 = Math.floor(e3 - .5 * canvas.height * tQ),
			e3 = Math.floor(e3 / tQ);
		fD.setTransform(tQ, 0, 0, tQ, e2, e3), fD.drawImage(canvas, e2, e3), fD.setTransform(1, 0, 0, 1, 0, 0), fD.globalAlpha = 1, fD.imageSmoothingEnabled = !0
	}
}

function a45() {
	this.eJ = 0, this.gP = 0, this.eK = 0, this.ij = 0, this.aXa = 0, this.aXb = 0, this.ii = 0, this.ik = 0;
	var aXd = this.aXc = 0;
	this.aXe = 0, this.aXf = 0, this.aXg = 0, this.gT = 0, this.h = 0, this.aXh = null, this.v2 = !1, this.aXi = -1, this.aXj = !1, this.aXk = [0, 0], this.i7 = function() {
		this.aXh = [L(493), L(494, 0, "Balance"), L(495, 0, "Interest"), L(496)]
	}, this.g = function() {
		this.v2 = !1, this.aXi = -1, this.aXj = !1, this.resize()
	}, this.resize = function() {
		this.eJ = eT.eJ < 1.369 * eT.gP ? eT.eJ : 1.369 * eT.gP;
		var by = cZ.cb.eR() && eT.eJ < eT.gP ? 1 : cZ.cb.eR() ? .8 : eT.eJ < eT.gP ? .65 : .59;
		this.eJ = Math.floor(by * this.eJ), this.eJ -= cZ.cb.eR() && eT.eJ < eT.gP ? 2 * dk.gap + 2 : 0, this.gP = Math.floor(this.eJ / 1.369), this.gT = Math.floor(this.gP / 150), this.gT = Math.max(this.gT, 1.5), this.eK = Math.floor(1 + .02 *
			this.eJ), this.ij = Math.floor(1 + .04 * this.eJ), this.ii = this.ij, aXd = Math.floor(.75 * this.ii), this.ik = Math.floor(1 + .075 * this.eJ), this.aXe = Math.floor(1 + .1125 * this.eJ), this.aXf = Math.floor(this.eJ * (cZ.cb
			.eR() ? .03 : .029)), this.aXf = Math.max(this.aXf, 4), this.aXg = Math.floor(.035 * this.eJ), this.aXg = Math.max(this.aXg, 4), this.aXc = this.gP - 2 * this.ii - this.ik - this.aXe, this.v2 && this.aXl()
	}, this.ub = function(si, sj) {
		var tB, tA;
		return !!this.v2 && (tA = si, tB = sj, si -= io.dp(eT.eJ - this.eJ, 2), sj -= io.dp(eT.gP - this.gP, 2), si < 0 || sj < 0 || si >= this.eJ || sj >= this.gP || si >= this.eJ - this.aXe && sj < this.aXe ? -1 !== cp.ub(tA, tB) || iV.ub(tA,
			tB) || this.u() : sj < this.aXe || (sj < this.gP - this.ik ? (this.aXj = !0, this.aXi = (si - 2 * this.eK - this.aXa) / this.aXb, 3 !== this.h && (cm.cn = !0)) : (tA = (tA = Math.floor(si / (this.eJ / this.aXh.length))) < 0 ?
			0 : tA >= this.aXh.length ? this.aXh.length - 1 : tA) !== this.h && (this.h = tA, this.aXl(), cm.cn = !0)), !0)
	}, this.sg = function(si, sj) {
		return this.aXk[0] = si, this.aXk[1] = sj, !(!this.v2 || !this.aXj || (si -= io.dp(eT.eJ - this.eJ, 2), sj = this.aXi, this.aXi = (si - 2 * this.eK - this.aXa) / this.aXb, (0 <= this.aXi && this.aXi <= 1 || 0 <= sj && sj <= 1) && (cm
			.cn = !0), 0))
	}, this.v5 = function() {
		this.aXj && (this.aXj = !1)
	}, this.cl = function() {
		this.v2 ? this.u() : this.show()
	}, this.show = function() {
		ch.ci < 2 || (this.v2 = !0, this.aXl())
	}, this.u = function() {
		this.v2 = !1, this.aXi = -1, cm.cn = !0
	}, this.aXl = function() {
		this.h < 2 ? this.aXa = gc.measureText(aB.oB.sV(ch.max[this.h]), aB.dE.f9(0, this.aXf)) : 2 === this.h && (this.aXa = gc.measureText(aB.oB.a6y(6, 2), aB.dE.f9(0, this.aXf))), this.aXb = this.eJ - 2 * this.eK - this.aXa - this.ij
	}, this.ew = function() {
		this.v2 && this.aXl()
	}, this.fC = function() {
		this.v2 && this.aXm()
	}, this.aXm = function() {
		var e2 = io.dp(eT.eJ - this.eJ, 2),
			e3 = io.dp(eT.gP - this.gP, 2);
		fD.setTransform(1, 0, 0, 1, e2, e3), fD.fillStyle = dK.aI, fD.fillRect(0, this.aXe, this.eJ, this.gP - this.aXe), this.aXn(), this.zx(), fD.strokeRect(0, 0, this.eJ, this.gP), aB.dE.textAlign(fD, 2), fD.font = aB.dE.f9(0, this.aXf), 0 ===
			this.h ? this.aXo(ch.vN, e2, e3) : 1 === this.h ? this.aXo(ch.qt, e2, e3) : 2 === this.h ? this.aXp(e2, e3) : 3 === this.h && (this.aXq(e2, e3), this.aXr(e2, e3)), cp.aFj(Math.floor(e2 + this.eJ - .725 * this.aXe), Math.floor(e3 +
				.275 * this.aXe), Math.floor(.45 * this.aXe)), fD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aXn = function() {
		var c8, ee;
		for (fD.lineWidth = this.gT, aB.dE.textBaseline(fD, 1), aB.dE.textAlign(fD, 1), fD.strokeStyle = dK.aL, fD.font = aB.dE.f9(1, this.aXg), ee = this.eJ / this.aXh.length, fD.fillStyle = dK.ah, fD.fillRect(this.h * ee, this.gP - this.ik, ee,
				this.ik), fD.fillStyle = dK.aL, fD.fillRect(0, this.gP - this.ik - .5 * this.gT, this.eJ, this.gT), c8 = 1; c8 <= 3; c8++) fD.fillRect(c8 * ee, this.gP - this.ik, this.gT, this.ik);
		for (c8 = this.aXh.length - 1; 0 <= c8; c8--) fD.fillText(aB.eL.a6Y(this.aXh[c8], 0, .9 * ee), (c8 + .5) * ee, this.gP - .46 * this.ik)
	}, this.zx = function() {
		fD.fillStyle = dK.b8, fD.fillRect(0, 0, this.eJ, this.aXe), fD.fillStyle = dK.aL, fD.fillRect(0, this.aXe - .5 * this.gT, this.eJ, this.gT), fD.font = aB.dE.f9(1, .39 * this.aXe), fD.fillText(aB.eL.a6Y(L(497), 0, .8 * this.eJ), Math
			.floor(this.eJ / 2), Math.floor(.55 * this.aXe))
	}, this.aXo = function(dT, e2, e3) {
		var dU = ch.max[this.h],
			sh = (fD.setTransform(1, 0, 0, 1, e2 + 2 * this.eK + this.aXa, e3 + this.ii + this.aXe), fD.lineWidth = 2, this.aXc / Math.sqrt(dU));
		fD.beginPath(), fD.moveTo(this.aXb, this.aXc - sh * Math.sqrt(dT[ch.ci - 1]));
		for (var c8 = ch.ci - 2; 0 <= c8; c8--) fD.lineTo(c8 * this.aXb / (ch.ci - 1), this.aXc - sh * Math.sqrt(dT[c8]));
		fD.stroke();
		e2 = this.aFj(dT, sh, .5);
		e2 < .95 && fD.fillText(aB.oB.sV(dU), -this.eK, 0), .05 < Math.abs(e2 - .5) && fD.fillText(aB.oB.sV(Math.floor(dU / 4)), -this.eK, Math.floor(this.aXc / 2)), .05 < e2 && fD.fillText("0", -this.eK, this.aXc)
	}, this.aXp = function(e2, e3) {
		fD.setTransform(1, 0, 0, 1, e2 + 2 * this.eK + this.aXa, e3 + this.ii + this.aXe), fD.lineWidth = 2;
		var sh = this.aXc / Math.max(ch.max[this.h], 1);
		fD.beginPath(), fD.moveTo(this.aXb, this.aXc - sh * ch.vO[ch.ci - 1]);
		for (var c8 = ch.ci - 2; 0 <= c8; c8--) fD.lineTo(c8 * this.aXb / (ch.ci - 1), this.aXc - sh * ch.vO[c8]);
		fD.stroke();
		e2 = this.aFj(ch.vO, sh, 1), e3 = ch.max[this.h] / 100;
		e2 < .95 && fD.fillText(aB.oB.a6y(e3, 2), -this.eK, 0), .05 < Math.abs(e2 - .5) && fD.fillText(aB.oB.a6y(e3 / 2, 2), -this.eK, Math.floor(this.aXc / 2)), .05 < e2 && fD.fillText(aB.oB.a6y(0, 2), -this.eK, this.aXc)
	}, this.aXq = function(e2, e3) {
		fD.setTransform(1, 0, 0, 1, e2 + .34 * this.eJ, e3 + 2 * aXd + this.aXe), aB.dE.textAlign(fD, 2);
		for (var aLh = this.gP - 4 * aXd - this.ik - this.aXe, dT = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], c8 = 9; 0 <= c8; c8--) fD.fillText(aB.eL.a6Y(ch.vS[dT[c8]], 0, .31 * this.eJ), 0, c8 * aLh / 9);
		var dt = ch.qa;
		for (fD.setTransform(1, 0, 0, 1, e2 + .39 * this.eJ, e3 + 2 * aXd + this.aXe), aB.dE.textAlign(fD, 0), fD.fillText(aB.oB.a6y(100 * dt[0] / (1024 * Math.max(dt[1], 1)), 1), 0, 0), c8 = 8; 1 <= c8; c8--) fD.fillText(dt[dT[c8]].toString(),
			0, c8 * aLh / 9);
		fD.fillText(aB.oB.a6y(100 * (1 - ef.eg[bz.cr] / dt[7]), 0), 0, aLh)
	}, this.aXr = function(e2, e3) {
		fD.setTransform(1, 0, 0, 1, e2 + .79 * this.eJ, e3 + 2 * aXd + this.aXe), aB.dE.textAlign(fD, 2);
		var c8, aLh = this.gP - 4 * aXd - this.ik - this.aXe;
		for (fD.fillStyle = dK.ac, c8 = 2; 0 <= c8; c8--) fD.fillText(aB.eL.a6Y(ch.vS[c8 + 8], 0, .31 * this.eJ), 0, c8 * aLh / 9);
		fD.fillText(aB.eL.a6Y(ch.vS[18], 0, .31 * this.eJ), 0, 3 * aLh / 9), fD.fillStyle = dK.ab, fD.fillText(aB.eL.a6Y(ch.vS[11], 0, .31 * this.eJ), 0, 4 * aLh / 9), fD.fillStyle = dK.av, fD.fillText(aB.eL.a6Y(ch.vS[13], 0, .31 * this.eJ), 0,
				5 * aLh / 9), fD.fillText(aB.eL.a6Y(ch.vS[15], 0, .31 * this.eJ), 0, 6 * aLh / 9), fD.fillText(aB.eL.a6Y(ch.vS[16], 0, .31 * this.eJ), 0, 7 * aLh / 9), fD.fillText(aB.eL.a6Y(ch.vS[12], 0, .31 * this.eJ), 0, 8 * aLh / 9), fD
			.fillStyle = dK.au, fD.fillText(aB.eL.a6Y(ch.vS[17], 0, .31 * this.eJ), 0, aLh), fD.fillStyle = dK.ac;
		var dt = ch.qa,
			aJz = dt[8] + dt[9] + dt[10] + dt[18],
			aJz = aB.oB.sV(aJz),
			aFv = fD.measureText(aJz).width,
			e2 = (fD.setTransform(1, 0, 0, 1, e2 + .83 * this.eJ + aFv, e3 + 2 * aXd + this.aXe), fD.fillText(aB.oB.sV(dt[8]), 0, 0), fD.fillText(aB.oB.sV(dt[9]), 0, aLh / 9), fD.fillText(aB.oB.sV(dt[10]), 0, 2 * aLh / 9), fD.fillText(aB.oB.sV(
				dt[18]), 0, 3 * aLh / 9), fD.fillStyle = dK.ab, fD.fillText(aJz, 0, 4 * aLh / 9), fD.fillStyle = dK.av, fD.fillText(aB.oB.sV(dt[13]), 0, 5 * aLh / 9), fD.fillText(aB.oB.sV(dt[15]), 0, 6 * aLh / 9), fD.fillText(aB.oB.sV(dt[
				16]), 0, 7 * aLh / 9), fD.fillText(aB.oB.sV(dt[12]), 0, 8 * aLh / 9), dt[12] + dt[13] + dt[15] + dt[16]);
		fD.fillStyle = dK.au, fD.fillText(aB.oB.sV(e2), 0, aLh), fD.fillStyle = dK.aL
	}, this.aFj = function(dT, sh, aXt) {
		var c8, a6, dw;
		return this.aXi < 0 || 1 < this.aXi ? .25 : (c8 = this.aXi * (ch.ci - 1), dw = dT[a6 = Math.floor(c8)], dw += (c8 - a6) * (dT[a6 < ch.ci - 1 ? a6 + 1 : a6] - dw), fD.strokeStyle = dK.aO, .04 < this.aXi && this.aXu(0, this.aXc - sh * Math
				.pow(dw, aXt), c8 * this.aXb / (ch.ci - 1), this.aXc - sh * Math.pow(dw, aXt)), .04 < dw / ch.max[this.h] && this.aXu(c8 * this.aXb / (ch.ci - 1), this.aXc, c8 * this.aXb / (ch.ci - 1), this.aXc - sh * Math.pow(dw, aXt)), fD
			.fillStyle = dK.ax, fD.beginPath(), fD.arc(c8 * this.aXb / (ch.ci - 1), this.aXc - sh * Math.pow(dw, aXt), Math.max(2, .014 * this.gP), 0, 2 * Math.PI), fD.fill(), dT = this.aXi * cm.aB1, dT = 0 === ef.fo[bz.cr] ? Math.floor(dT *
				ch.vR) : Math.floor(dT * cm.lJ()), fD.fillStyle = dK.aL, fD.fillText(1 === aXt ? aB.oB.a6y(dw / 100, 2) : aB.oB.sV(Math.floor(dw)), -this.eK, this.aXc - sh * Math.pow(dw, aXt)), aB.dE.textAlign(fD, 1), fD.fillText(iS.w1(dT),
				c8 * this.aXb / (ch.ci - 1), this.aXc + this.aXf - (cZ.cb.eR() ? 2 : 0) - this.gT), aB.dE.textAlign(fD, 2), sh * Math.pow(dw, aXt) / this.aXc)
	}, this.aXu = function(kD, kF, kT, kU) {
		fD.beginPath(), fD.moveTo(kD, kF), fD.lineTo(kT, kU), fD.stroke()
	}
}

function aLu(data) {
	var cK, aXv;

	function aY4(cI) {
		return cI < 60 ? 1 === cI ? cI + " Second" : cI + " Seconds" : cI < 3600 ? 1 === (cI = Math.floor(cI / 60)) ? cI + " Minute" : cI + " Minutes" : cI < 172800 ? 1 === (cI = Math.floor(cI / 3600)) ? cI + " Hour" : cI + " Hours" : (cI = Math
			.floor(cI / 172800)) + " Days"
	}

	function aXx(iE) {
		var cI = data.data.length;
		if (cI) {
			for (var x4, max = min = parseInt(data.data[0][0]), c8 = 1; c8 < cI; c8++) var aJz = parseInt(data.data[c8][0]),
				min = Math.min(aJz, min),
				max = Math.max(aJz, max);
			x4 = iE < 0 ? min + iE : max + 1, br.cP(8, br.hN().i, new d4(21, {
				j7: data.j7,
				x4: x4,
				x5: x4 + Math.abs(iE)
			}))
		}
	}
	if (this.show = function() {
			cK.show(), this.resize()
		}, this.u = function() {
			cK.u()
		}, this.resize = function() {
			cK.resize(), aXv.resize()
		}, this.dM = function(aA) {
			2 === aA && cK.dN[0].dO()
		}, data.aLv) {
		cK = new cd(L(65), [new cN("⬅️ " + L(14), function() {
			br.kl()
		})]);
		var by = {
				aTZ: [],
				aTe: [L(507), L(508), L(509) + " ↗"],
				aTk: [12, 50, 38]
			},
			c7 = bz.data.c7;
		if (c7) {
			for (var cI = c7.length, aTZ = by.aTZ, gj = ef.gj, c8 = 0; c8 < cI; c8++) aTZ.push([{
				dt: c8 + 1 + ".",
				ee: 0
			}, {
				dt: gj[c8],
				ee: 0
			}, {
				dt: hc.wb.sV(c7[c8], 5),
				ee: 1,
				c9: c7[c8],
				y5: 0
			}]);
			aXv = new aTY(cK.cf, by, {
				aTh: 1
			})
		} else aXv = new aTY(cK.cf, by)
	} else {
		var by = data.data.length ? 0 : 1,
			qf = [new cN("⬅️ " + L(14), function() {
				br.kl()
			}), new cN(L(498), function() {
				aXx(-10)
			}, by, 0, 1), new cN(L(499), function() {
				aXx(10)
			}, by, 0, 1), new cN(L(252), function() {
				br.cP(11, 10, new x0({
					j7: data.j7
				}))
			})],
			aTe = [L(500), L(501), L(502), L(503), L(504), L(254), L(255), L(256), L(505), L(506), L(419), L(420), "Audit Log", L(421)];
		cK = new cd(aTe[data.j7], qf), ! function() {
			var c8, by = {
					aTZ: []
				},
				aTZ = by.aTZ,
				aXz = data.data,
				cI = aXz.length;
			cI && 0 === aXz[0][0] && 0 <= (h = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.j7]) && (br.z.a5I[h] = aXz[0][1]);
			var h8 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.j7],
				aY2 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.j7],
				h = [
					[L(510), L(511) + " ↗", L(512)],
					[L(510), L(513), L(514), L(515) + " ↗"],
					[L(510), L(511) + " ↗", L(514)],
					[L(510), L(511) + " ↗", L(514)],
					[L(507), L(516), L(517) + " ↗", L(518) + " ↗", L(519)],
					[L(507), L(516), L(520) + " ↗", L(470) + " ↗", L(521)],
					[L(507), L(516), L(522) + " ↗", L(523) + " ↗", L(471)],
					[L(507), L(516), L(520) + " ↗", L(470) + " ↗", L(524)],
					[L(507), L(516), L(517) + " ↗", L(518) + " ↗", L(519)],
					[L(510), L(511) + " ↗", L(514)],
					[L(510), L(511) + " ↗", L(525)],
					[L(510), L(511) + " ↗", L(514)],
					[L(507), L(516), L(517) + " ↗", L(518) + " ↗", L(526)],
					[L(510), L(511) + " ↗", L(514)]
				];
			if (by.aTe = h[data.j7], by.aTk = [
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
				][data.j7], 0 === data.j7 || 2 === data.j7 || 3 === data.j7 || 9 === data.j7 || 10 === data.j7 || 11 === data.j7 || 13 === data.j7)
				for (c8 = 0; c8 < cI; c8++) aTZ.push([{
					dt: aXz[c8][0] + 1 + ".",
					ee: 0
				}, {
					dt: aXz[c8][1],
					ee: 1,
					c9: aXz[c8][4],
					y5: aXz[c8][3]
				}, {
					dt: (h8 * aXz[c8][2]).toFixed(aY2),
					ee: 0
				}]);
			else if (12 === data.j7)
				for (c8 = 0; c8 < cI; c8++) {
					var aY3 = aXz[c8][3];
					aTZ.push([{
						dt: "" + aXz[c8][0],
						ee: 0
					}, {
						dt: aY4(aXz[c8][4]),
						ee: 0
					}, {
						dt: aXz[c8][5],
						ee: 1,
						c9: aXz[c8][1],
						y5: 0
					}, {
						dt: aXz[c8][6],
						ee: 1,
						c9: aXz[c8][2],
						y5: 0
					}, {
						dt: a2v.a7n(aY3, hc.wb.sV(aXz[c8][1], 5)),
						ee: 0
					}])
				} else if (1 === data.j7)
					for (c8 = 0; c8 < cI; c8++) aTZ.push([{
						dt: aXz[c8][0] + 1 + ".",
						ee: 0
					}, {
						dt: aXz[c8][1],
						ee: 0
					}, {
						dt: (h8 * aXz[c8][2]).toFixed(aY2),
						ee: 0
					}, {
						dt: aXz[c8][3],
						ee: 1,
						c9: aXz[c8][5],
						y5: aXz[c8][4]
					}]);
				else if (4 === data.j7 || 5 === data.j7 || 6 === data.j7 || 7 === data.j7 || 8 === data.j7)
				for (c8 = 0; c8 < cI; c8++) {
					var aY5 = aXz[c8][5];
					4 === data.j7 || 8 === data.j7 ? "100%" === (aY5 = (aY5 % 64 * 100 / (aY5 >> 6)).toFixed(0) + "%") && (4 === data.j7 ? aY5 += " (" + L(527) + ")" : aY5 += " (" + L(528) + ")") : 5 === data.j7 ? 32768 <= aY5 && (aY5 = -(aY5 -
						32768)) : aY5 = (h8 * aY5).toFixed(aY2), aTZ.push([{
						dt: "" + aXz[c8][0],
						ee: 0
					}, {
						dt: aY4(aXz[c8][6]),
						ee: 0
					}, {
						dt: aXz[c8][7],
						ee: 1,
						c9: aXz[c8][1],
						y5: aXz[c8][2]
					}, {
						dt: aXz[c8][8],
						ee: 1,
						c9: aXz[c8][3],
						y5: aXz[c8][4]
					}, {
						dt: "" + aY5,
						ee: 0
					}])
				}
			aXv = new aTY(cK.cf, by)
		}()
	}
}

function a8M() {
	this.dI = function(player) {
		return !!g6.mH.mI(player) && !(g6.z.g7[player] >= Math.max(3 * fk.performance.zZ, fq.a0t[fq.me[player]]) || !aB.lk.lv(player, fq.aKi[fq.me[player]], 32, 0)) && (iS.aY6() ? function(player) {
			var aY9 = g6.k7.aVS(),
				cI = aY9.length;
			if (0 === cI) return !1;
			aY9 = aY9[qT.u4(cI)], cI = g6.z.rj[aY9];
			if (g6.a1g.aIb(player, cI)) return !1;
			return !! function(player, a7Y) {
				var a7Y = kA.kB(g6.z.kC[a7Y]),
					rP = kA.kE(a7Y),
					a7Y = kA.kG(a7Y),
					kD = ef.jP[player],
					kF = ef.jQ[player],
					kT = ef.jR[player],
					player = ef.jS[player],
					kT = Math.max(rP - kT, kD - rP),
					kD = Math.max(a7Y - player, kF - a7Y);
				return kT < 100 && kD < 100
			}(player, aY9) && !!g6.mR.mS(player, cI, 1) && (aB.lk.m4(player), g6.z.mP(player), !0)
		}(player) : !!(fk.a82.dI(player) || fk.a7t.dI(player) || fk.a7v.dI(player)) && (function(player) {
			er.mG[1] = 4, aB.lk.m4(player), g6.z.mP(player)
		}(player), !0))
	}
}

function a29(dq, dr) {
	return 0 <= dq ? io.dp(dq, dr) : -io.dp(-dq, dr)
}

function aJY(dt) {
	return dt * dt
}

function im(dq, dr) {
	return dr < dq ? dq : dr
}

function il(dq, dr) {
	return dq < dr ? dq : dr
}

function aLt(dq, dt, dr) {
	return dt < dq ? dq : dr < dt ? dr : dt
}

function aYB(dt, cI) {
	for (var aA = io.dp(dt + 1, 2), c8 = 0; c8 < cI; c8++) aA = io.dp(aA + io.dp(dt, aA), 2);
	return aA
}

function aYC(dt, cI) {
	return dt < 1 ? 0 : aYB(dt, cI)
}

function aIT(kD, kF, eK, ii, kT, kU, ij, ik) {
	return !(kD + eK <= kT || kF + ii <= kU || kT + ij <= kD || kU + ik <= kF)
}

function aIS(kD, kF, eK, ii, kT, kU, ij, ik) {
	return kD <= kT && kF <= kU && kT + ij <= kD + eK && kU + ik <= kF + ii
}

function aEZ(dt) {
	return Math.floor(!!dt * (1 + Math.log2(dt + .5)))
}

function p8(aYD, a7L, aYE) {
	this.dh = document.createElement("div"), this.pH = aYD;
	var aYF = 0;
	this.resize = function(df, le) {
		var cI = aYD.length;
		if (!aYE)
			for (var c8 = 1; c8 < cI; c8++) aB.dE.lg(aYD[c8].button, 4);
		for (var lh = 0, c8 = 0; c8 < cI; c8++) lh += aYD[c8].button.offsetWidth;
		if (df && (aYF = df.offsetWidth), le && lh < aYF)
			for (c8 = 0; c8 < cI; c8++) aYD[c8].button.style.width = (100 * aYD[c8].button.offsetWidth / lh).toFixed(2) + "%";
		else
			for (c8 = 0; c8 < cI; c8++) aYD[c8].button.style.width = "auto";
		le || this.resize(df, 1)
	};
	var a1D = this;
	a1D.dh.style.height = a1D.dh.style.maxHeight = "100%";
	for (var c8 = 0; c8 < aYD.length; c8++) aYD[c8].dL(a7L), aYD[c8].button.style.height = "100%", aYD[c8].button.style.padding = "0.0em 0.9em", aYD[c8].button.style.whiteSpace = "pre", a1D.dh.appendChild(aYD[c8].button)
}

function aPc(aYD) {
	var a9g = document.createElement("div"),
		aYG = document.createElement("div"),
		aEh = (this.e2 = 0, this.e3 = 0);

	function aYI() {
		bf.pF.u()
	}
	this.pH = aYD, this.show = function(e2, e3, aPr) {
		if (aEh) return [0, 0];
		aEh = 1, this.e2 = e2, this.e3 = e3,
			function(self, aPr) {
				var eJ = aB.dE.dm(.16, .7),
					gP = aYD.length * eJ / 3,
					aYL = eT.eJ / eT.i5,
					aYM = eT.gP / eT.i5,
					h8 = Math.min(1, Math.min(aYL / eJ, aYM / gP));
				eJ *= h8, gP *= h8, aPr && (self.e2 += aB.dE.dm(.03, .5)), self.e2 = io.du(self.e2, 0, aYL - eJ), self.e3 = io.du(self.e3, 0, aYM - gP), aYG.style.left = self.e2 + "px", aYG.style.top = self.e3 + "px", aYG.style.width = eJ + "px",
					aYG.style.height = gP + "px", aYG.style.font = aB.dE.f9(0, .3 * gP / aYD.length), aB.dE.lg(aYG, 5);
				for (var c8 = 1; c8 < aYD.length; c8++) aB.dE.lg(aYD[c8].button, 8)
			}(this, aPr), document.body.appendChild(a9g)
	}, this.u = function() {
		aEh && (aEh = 0, a9g.removeEventListener("click", aYI), br.removeChild(document.body, a9g))
	};
	for (var c8 = 0; c8 < aYD.length; c8++) new o9("" + (1 + c8), aYD[c8].button, 0, 1);
	a9g.style.position = "fixed", a9g.style.top = "0", a9g.style.left = "0", a9g.style.width = "100%", a9g.style.height = "100%", a9g.style.zIndex = "5", aYG.style.position = "absolute",
		function() {
			for (var aYJ = (100 / aYD.length).toFixed(2) + "%", c8 = 0; c8 < aYD.length; c8++) aYD[c8].button.style.width = "100%", aYD[c8].button.style.height = aYD[c8].button.style.maxHeight = aYJ, aYD[c8].button.style.padding = "0.0em 0.9em", aYG
				.appendChild(aYD[c8].button)
		}(), a9g.appendChild(aYG), a9g.addEventListener("click", aYI)
}

function a3c() {
	var kD, kF, kT, kU, aYN = 0,
		aYO = 0;

	function aYQ() {
		return Math.pow(Math.pow(kT - kD, 2) + Math.pow(kU - kF, 2), .5)
	}

	function aYP(a6) {
		kD = eT.i5 * a6.touches[0].clientX, kF = eT.i5 * a6.touches[0].clientY, kT = eT.i5 * a6.touches[1].clientX, kU = eT.i5 * a6.touches[1].clientY
	}
	this.uf = function(a6) {
		return 1 < a6.touches.length ? (aYO = cm.gX, aYN = 3, aYP(a6), iX.u(), !0) : (aYN = 0, !1)
	}, this.ug = function(a6) {
		var aCE, a0M, a0N;
		return 0 !== bz.gb && 1 < a6.touches.length && (aYN = Math.max(aYN - 1, 0), kH.fs() && (aCE = aYQ(), aYP(a6), a6 = aYQ(), a0M = Math.floor((kD + kT) / 2), a0N = Math.floor((kF + kU) / 2), iT.a8k(a0M, a0N, Math.max(.125, a6) / Math.max(
			.125, aCE)), cm.cn = !0), !0)
	}, this.v8 = function() {
		var e2, e3;
		return !!(aYN && (aYN = 0, cm.gX < aYO + 500)) && (e2 = (kD + kT) / 2, e3 = (kF + kU) / 2, iX.uy(e2, e3), iX.click(e2, e3, !0) && (cm.cn = !0), !0)
	}
}

function a37() {
	var aSU, zg, a9V, a9W, aYR, aYS, aYT, aYU, aYV, aYW;

	function aYY() {
		var zI = bz.zI;
		for (aYV = zI; aYV < bz.fi; aYV++) aYX();
		for (aYV = bz.k2 ? bz.fj : 0; aYV < zI; aYV++) {
			if (!aYb()) {
				for (var dr = bz.aN2 = aYV; dr < zI; dr++) aYV = dr, aYX();
				return
			}
			aYc(aYS + aSU * aYR + io.dp(aYR, 2), aYT + zg * aYR + io.dp(aYR, 2))
		}
	}

	function aYu(player) {
		for (var jP = ef.jP, jQ = ef.jQ, jR = ef.jR, jS = ef.jS, e3 = jQ[player]; e3 <= jS[player]; e3++)
			for (var e2 = jP[player]; e2 <= jR[player]; e2++) {
				var mx = n0.a2B(e2, e3);
				n0.ra(mx) && (n0.a2O(mx) ? n0.ns(mx, player) : n0.a2Y(mx, player))
			}
	}

	function aYt(dT, x4, x5) {
		var ee = dT[x4];
		dT[x4] = dT[x5], dT[x5] = ee
	}

	function aYb() {
		return function() {
			var c8;
			for (c8 = 0; c8 < 8; c8++)
				if (aSU = io.dp(a9V * qT.random(), qT.value(100)), zg = io.dp(a9W * qT.random(), qT.value(100)), aYz()) return 1;
			return
		}() || function() {
			var e4, e5, dq, tB, dr, tA;
			for (e4 = io.dp(a9V * qT.random(), qT.value(100)), e5 = io.dp(a9W * qT.random(), qT.value(100)), dq = 40; 1 <= dq; dq--)
				for (tB = a9W - dq; 0 <= tB; tB -= 40)
					for (zg = (tB + e5) % a9W, dr = 40; 1 <= dr; dr--)
						for (tA = a9V - dr; 0 <= tA; tA -= 40)
							if (aSU = (tA + e4) % a9V, aYz()) return 1;
			return
		}()
	}

	function aYz() {
		for (var es, aZ1, gap = io.dp(aYR - aYU, 2), aBX = aYT + zg * aYR + gap, aBW = aYS + aSU * aYR + gap, aZ0 = aBX + aYU - 1; aBX <= aZ0; aZ0--)
			for (aZ1 = aBW + aYU - 1; aBW <= aZ1; aZ1--)
				if (es = n0.a2B(aZ1, aZ0), !n0.a2R(es) || n0.a2O(es)) return;
		return 1
	}

	function aYc(tA, tB) {
		aYX(), aZ2(tA - 2, tB - 2)
	}

	function aYX() {
		ef.fo[aYV] = 0, ef.eg[aYV] = ef.jT[aYV] = 0, ef.jU[aYV] = [], ef.jV[aYV] = [], ef.jW[aYV] = [], ef.jX[aYV] = [], ef.jP[aYV] = ef.jQ[aYV] = ef.jR[aYV] = ef.jS[aYV] = 0
	}

	function aZ2(tA, tB) {
		var es, c8, aZ3, aZ4;
		for (ef.fo[aYV] = 1, ef.jP[aYV] = tA + 10, ef.jQ[aYV] = tB + 10, ef.jS[aYV] = ef.jR[aYV] = 0, aZ3 = tA; aZ3 < tA + 4; aZ3++)
			for (aZ4 = tB; aZ4 < tB + 4; aZ4++)(tA < aZ3 && aZ3 < tA + 3 || tB < aZ4 && aZ4 < tB + 3) && (es = n0.a2B(aZ3, aZ4), n0.a2R(es)) && (ef.jP[aYV] = Math.min(aZ3, ef.jP[aYV]), ef.jR[aYV] = Math.max(aZ3, ef.jR[aYV]), ef.jQ[aYV] = Math.min(
				aZ4, ef.jQ[aYV]), ef.jS[aYV] = Math.max(aZ4, ef.jS[aYV]), aYW[ef.eg[aYV]] = es, ef.eg[aYV]++, n0.a2Y(es, aYV));
		for (ef.jT[aYV] = ef.eg[aYV], c8 = ef.eg[aYV] - 1; 0 <= c8; c8--) n0.a2F(aYW[c8], aYV) ? (n0.ns(aYW[c8], aYV), ef.jV[aYV].push(aYW[c8])) : n0.a2Q(aYW[c8]) ? (n0.ns(aYW[c8], aYV), ef.jW[aYV].push(aYW[c8])) : n0.a2C(aYW[c8]) && (n0.ns(aYW[c8],
			aYV), ef.jX[aYV].push(aYW[c8]))
	}
	this.g = function() {
		if (aYW = new Array(12), aYU = 6, aYR = 10, a9V = io.dp(c2.k0, aYR), a9W = io.dp(c2.k1, aYR), aYS = io.dp(c2.k0 - aYR * a9V, 2), aYT = io.dp(c2.k1 - aYR * a9W, 2), bz.k2)
			for (var c8 = 0; c8 < bz.fj; c8++) aYV = c8, aYX(), ef.fo[aYV] = 1;
		(0 === bz.data.spawningType ? aYY : 1 === bz.data.spawningType ? (aYY(), function() {
			var aHb = bz.eO;
			bz.aHa || aHb++;
			if (!(aHb < 3)) {
				for (var data = bz.data, oG = (bz.k2 ? bz.fj : 0) + data.teamPlayerCount[0], fs = bz.aN2, aYd = new Uint32Array(aHb), aYe = new Uint32Array(aHb), aYf = new Uint16Array(aHb), aYg = new Uint16Array(aHb), eo = eb.eo, jP = ef
						.jP, jQ = ef.jQ, jR = ef.jR, jS = ef.jS, aBq = er.aBq, aBr = er.aBr, c8 = oG; c8 < fs; c8++) aBq[c8] = jP[c8] + jR[c8] >> 1, aBr[c8] = jQ[c8] + jS[c8] >> 1;
				for (c8 = oG; c8 < fs; c8++) {
					var id = eo[c8];
					aYd[id] += aBq[c8], aYe[id] += aBr[c8]
				}
				var ec = eb.ec;
				for (c8 = 1; c8 < aHb; c8++) {
					var el = Math.max(data.teamPlayerCount[ec[c8]], 1);
					aYf[c8] = io.dp(aYd[c8], el), aYg[c8] = io.dp(aYe[c8], el)
				}
				var aHB = eb.aHB,
					aHC = eb.aHC,
					aHD = eb.aHD,
					eq = er.eq;
				for (c8 = 0; c8 < 512; c8++) eq[c8] = c8;
				for (var ey = 0; ey < 2 + (4 <= aHb); ey++)
					for (c8 = oG; c8 < fs; c8++) {
						for (var a1W = c8, aV2 = eq[a1W], aYh = 1, n9 = io.eD(aBq[aV2] - aYf[1], aBr[aV2] - aYg[1]), dq = 2; dq < aHb; dq++) {
							var aYi = io.eD(aBq[aV2] - aYf[dq], aBr[aV2] - aYg[dq]);
							aYi < n9 && (n9 = aYi, aYh = dq)
						}
						var aYj = eo[a1W];
						if (aYh !== aYj) {
							if (2 === ey && 4 <= aHb) {
								var aYk = Math.max((aYh + 1) % aHb, 1),
									aYl = io.eD(aBq[aV2] - aYf[aYk], aBr[aV2] - aYg[aYk]);
								for (dq = 1; dq < aHb; dq++) aYi = io.eD(aBq[aV2] - aYf[dq], aBr[aV2] - aYg[dq]), n9 < aYi && aYi < aYl && (aYl = aYi, aYk = dq);
								aYk !== aYj && io.eD(aYf[aYj] - aYf[aYk], aYg[aYj] - aYg[aYk]) < io.eD(aYf[aYj] - aYf[aYh], aYg[aYj] - aYg[aYh]) && (aYh = aYk)
							}
							var aYm = ec[aYh],
								aYn = aHC[aYm] + (bz.k2 ? 0 : aHD[aYm]),
								a1X = aHB[aYn],
								aV3 = eq[a1X],
								aYo = aHC[aYm + 1];
							n9 = io.eD(aBq[aV3] - aYf[aYj], aBr[aV3] - aYg[aYj]);
							for (var aA = aYn + 1; aA < aYo; aA++) {
								var aYp = aHB[aA],
									aYq = eq[aYp];
								(aYi = io.eD(aBq[aYq] - aYf[aYj], aBr[aYq] - aYg[aYj])) < n9 && (n9 = aYi, a1X = aYp)
							}
							a1X < oG || fs <= a1X || (aV3 = eq[a1X], aYd[aYj] += aBq[aV3] - aBq[aV2], aYe[aYj] += aBr[aV3] - aBr[aV2], aYd[aYh] += aBq[aV2] - aBq[aV3], aYe[aYh] += aBr[aV2] - aBr[aV3], el = data.teamPlayerCount[ec[aYj]],
								aYf[aYj] = io.dp(aYd[aYj], el), aYg[aYj] = io.dp(aYe[aYj], el), el = data.teamPlayerCount[aYm], aYf[aYh] = io.dp(aYd[aYh], el), aYg[aYh] = io.dp(aYe[aYh], el), eq[a1W] = aV3, eq[a1X] = aV2)
						}
					}! function() {
						for (var eq = er.eq, jP = ef.jP, jQ = ef.jQ, jR = ef.jR, jS = ef.jS, eg = ef.eg, jT = ef.jT, jV = ef.jV, jW = ef.jW, jX = ef.jX, c8 = 0; c8 < 512; c8++) {
							var aYs = eq[c8];
							if (aYs !== c8) {
								aYt(jP, c8, aYs), aYt(jQ, c8, aYs), aYt(jR, c8, aYs), aYt(jS, c8, aYs), aYt(eg, c8, aYs), aYt(jT, c8, aYs), aYt(jV, c8, aYs), aYt(jW, c8, aYs), aYt(jX, c8, aYs), aYu(c8), aYu(aYs), eq[c8] = c8;
								for (var gP = aYs, bv = eq[gP]; bv !== c8;) bv = eq[gP = bv];
								eq[gP] = aYs
							}
						}
					}()
			}
		}) : function() {
			var zI = bz.zI;
			for (aYV = zI; aYV < bz.fi; aYV++) aYX();
			for (aYV = bz.k2 ? bz.fj : 0; aYV < zI; aYV++)
				if (! function() {
						var spawningData = bz.data.spawningData,
							tA = spawningData[2 * aYV] + 1,
							spawningData = spawningData[2 * aYV + 1] + 1;
						if (3 < tA && tA < c2.k0 - 5 && 3 < spawningData && spawningData < c2.k1 - 5 && n0.a2R(n0.a2B(tA, spawningData)) && function(tA, tB) {
								var es, aZ1, aZ0;
								for (aZ0 = tB; tB - 6 < aZ0; aZ0--)
									for (aZ1 = tA; tA - 6 < aZ1; aZ1--)
										if (es = n0.a2B(aZ1, aZ0), n0.a2O(es)) return;
								return 1
							}(tA + 3, spawningData + 3)) return aYc(tA + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aYb()) {
						for (var dr = bz.aN2 = aYV; dr < zI; dr++) aYV = dr, aYX();
						return
					}
					var tA = aYS + aSU * aYR + io.dp(aYR, 2),
						tB = aYT + zg * aYR + io.dp(aYR, 2);
					aYc(tA, tB)
				}
		})(), ch.qa[7] = ef.eg[bz.cr]
	}, this.aAl = function(lt, aFg, aFf) {
		var c8, tA, tB, es, aSU, zg;
		for (aYV = lt, c8 = 0; c8 < 20; c8++)
			for (tA = aFg + c8; aFg - c8 <= tA; tA--)
				for (tB = aFf + c8; aFf - c8 <= tB; tB--)
					if ((tA === aFg + c8 || tA === aFg - c8 || tB === aFf + c8 || tB === aFf - c8) && 3 < tA && tA < c2.k0 - 5 && 3 < tB && tB < c2.k1 - 5 && n0.a2R(n0.a2B(tA, tB)) && function(tA, tB) {
							var es, aZ1, aZ0;
							for (aZ0 = tB; tB - 6 < aZ0; aZ0--)
								for (aZ1 = tA; tA - 6 < aZ1; aZ1--)
									if (es = n0.a2B(aZ1, aZ0), n0.a2O(es) && !n0.a2M(aYV, es)) return;
							return 1
						}(tA + 3, tB + 3)) {
						if (0 < ef.eg[aYV]) {
							for (zg = aSU = es = void 0, aSU = ef.jR[aYV]; aSU >= ef.jP[aYV]; aSU--)
								for (zg = ef.jS[aYV]; zg >= ef.jQ[aYV]; zg--) es = 4 * (zg * c2.k0 + aSU), n0.qc(aYV, es) && (n0.qd(es), ef.eg[aYV]--);
							aYX()
						}
						return aZ2(tA - 1, tB - 1), !0
					} return !1
	}, this.aAm = function(lt) {
		aYV = lt, aYb() ? aYc(aYS + aSU * aYR + io.dp(aYR, 2), aYT + zg * aYR + io.dp(aYR, 2)) : aYX()
	}
}

function aTp(tH, size, jC, aZ7, font) {
	var c8, tQ = .2,
		canvas = document.createElement("canvas"),
		hB = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = tH, canvas.height = tH, hB.font = size + font, hB.textAlign = "center", hB.textBaseline = "middle", hB.fillStyle = "red", c8 = 0; c8 < jC.length; c8++) hB.fillText(jC[c8], .5 * tH, .5 * tH);
	return -1 < (canvas = function(it) {
		var c8, ey, by = it.data;
		for (c8 = by.length - 4; 0 <= c8; c8 -= 4)
			if (ey = by[c8], aZ7 <= ey) return Math.floor(c8 / (4 * tH));
		return -1
	}(hB.getImageData(0, 0, tH, tH))) && (tQ = (canvas - .5 * tH + .1 * size) / size), Math.max(tQ, 0)
}

function aIH() {
	var aZA = aRg(),
		aZB = aTX(),
		aZC = aDB();
	this.fu = function() {
		return 123
	}, this.hU = function() {
		j8.wb.a5A(d1.d2.data[183].value, 15), hQ.hS(14, aZA), hQ.hS(7, aZB), hQ.hS(12, aZC)
	}
}

function aZD() {
	function aZF(dT) {
		if (0 === dT.length) d1.db.dc(116, "");
		else {
			for (var aZG = dT[0], c8 = 1; c8 < dT.length; c8++) aZG += ";" + dT[c8];
			d1.db.dc(116, aZG)
		}
	}
	this.y1 = function() {
		d1.d2.data[110].value.length && (d1.d2.data[106].value = d1.d2.data[110], d1.db.dc(110, ""), this.aMd())
	}, this.aMd = function() {
		var dT = d1.d2.data[116].value.split(";");
		for (dT.length % 2 == 1 && dT.pop(), dT.unshift(d1.d2.data[106].value), dT.unshift(d1.d2.data[105].value), c8 = 2; c8 < dT.length; c8 += 2)
			if (dT[c8] === dT[0]) {
				dT.splice(c8, 2);
				break
			} for (var aZE = [], c8 = 0; c8 < dT.length; c8 += 2) aZE.push(dT[c8]);
		aZF(dT), d1.d2.data[117].value = 0, d1.d2.data[117].fb = aZE
	}, this.aMf = function(h) {
		d1.d2.data[117].fb.splice(h, 1), d1.d2.data[117].value = Math.min(h, d1.d2.data[117].fb.length - 1);
		var dT = d1.d2.data[116].value.split(";");
		dT.splice(2 * h, 2), aZF(dT)
	}, this.aMe = function(h) {
		var dT = d1.d2.data[116].value.split(";");
		return {
			c9: dT[2 * h],
			password: dT[2 * h + 1]
		}
	}, this.kz = function() {
		var dt = io.du(d1.d2.data[121].value, -1, 262143);
		return dt = -1 === dt ? ~~(262144 * Math.random()) : dt
	}, this.aZH = function() {
		for (var dT = document.cookie.split(";"), c8 = 0; c8 < dT.length; c8++) {
			var aLi, dZ = dT[c8].trim();
			0 !== dZ.length && (aLi = 0 <= (aLi = dZ.indexOf("=")) ? dZ.substring(0, aLi) : dZ, document.cookie = aLi + "=;expires=0;path=/", document.cookie = aLi + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = aLi +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function aUU() {
	var vu, xE, aZI, fL;

	function pB() {
		gw.gt(), br.xJ()[19] = null, br.kl()
	}

	function aZP() {
		aZS(), aZQ()
	}

	function aZS() {
		aZI.dh.lastChild && br.removeChild(aZI.dh, aZI.dh.lastChild)
	}

	function aZQ() {
		var aZT = c2.aDt(bz.data);
		bz.data.canvas = c2.aOz(aZT, bz.data.mapSeed).a5c, aZR()
	}

	function aZR() {
		var tN = bz.data.canvas;
		tN.style.width = "100%", aZI.dh.appendChild(tN)
	}
	this.h2 = function(tN) {
		bz.data.canvas && aZS(), bz.data.canvas = tN, aZR()
	}, this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(426), [new cN("⬅️ " + L(14), pB)]), 2 === bz.data.mapType && gw.g(), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(529), L(530), L(531)],
			value: bz.data.mapType
		}, function(h) {
			2 === (bz.data.mapType = h) ? (gw.g(), bz.data.canvas = null) : (bz.data.passableWater = bz.data.passableMountains = 1, gw.gt()), br.cP(20)
		})), 2 <= bz.data.mapType && (fQ.fX(new zb), fQ.fX(new fe({
			value: bz.data.passableWater
		}, L(532), function(value) {
			bz.data.passableWater = value
		})), fQ.fX(new fe({
			value: bz.data.passableMountains
		}, L(533), function(value) {
			bz.data.passableMountains = value
		})));
		fL.push(fQ)
	}(fL = []), function(fL) {
		if (0 === bz.data.mapType) {
			for (var fQ = new fR, fb = (fQ.fS(L(426)), []), c8 = 0; c8 < c2.ge.aQo.length; c8++) fb.push(c2.ge.gf[c2.ge.aQo[c8]].name);
			fQ.fc(new fd({
				fb: fb,
				value: bz.data.mapProceduralIndex
			}, function(h) {
				bz.data.mapProceduralIndex = h, aZP()
			})), fL.push(fQ)
		}
	}(fL), function(fL) {
		if (1 === bz.data.mapType) {
			for (var fQ = new fR, fb = (fQ.fS(L(426)), []), c8 = 0; c8 < c2.ge.aQp.length; c8++) fb.push(c2.ge.gf[c2.ge.aQp[c8]].name);
			fQ.fc(new fd({
				fb: fb,
				value: bz.data.mapRealisticIndex
			}, function(h) {
				bz.data.mapRealisticIndex = h, aZP()
			})), fL.push(fQ)
		}
	}(fL), function(fL) {
		var fQ;
		2 === bz.data.mapType && ((fQ = new fR).fS(L(534)), fQ.fX(new fW(d1.d2.data[162], 1)), fQ.fS(L(535), "0.8em"), fQ.fX(new fY([new cN(L(536), function() {
			return gw.gu(), !0
		}).button])), fL.push(fQ))
	}(fL), function(fL) {
		var fQ, fV;
		2 === bz.data.mapType && ((fQ = new fR).fS(L(537)), fV = new fW({
			h: -1,
			value: bz.data.mapName
		}, 0, 0, function(a6) {
			bz.data.mapName = a6.target.value = a6.target.value.slice(0, 20)
		}), fQ.fX(fV), fL.push(fQ))
	}(fL), function(fL) {
		var fQ, fV, fU;
		0 === bz.data.mapType && ((fQ = new fR).fS("Seed"), fV = new fW({
			h: -1,
			value: bz.data.mapSeed
		}, 1, 0, function(a6) {
			a6 = Math.abs(Math.floor(a6.target.value)) % 16384;
			bz.data.mapSeed !== a6 && (bz.data.mapSeed = a6, aZP())
		}), fU = new cN(L(105), function(a6) {
			var pt = Math.floor(16384 * Math.random());
			if (bz.data.mapSeed !== pt) return fV.a6.value = bz.data.mapSeed = pt, aZP(), !0
		}), fQ.fX(fV), fQ.fX(new fY([fU.button])), fL.push(fQ))
	}(fL), function(fL) {
		(aZI = new fR).fS(L(244)), 2 !== bz.data.mapType ? aZQ() : bz.data.canvas && aZR();
		fL.push(aZI)
	}(fL), fL))
}

function aZU() {
	this.aZV = function(player, m7, me) {
		aB.lk.m9(player, me, m7) && (mD.mE(player, m7), !aB.lk.qD(m7)) && fk.a7z.aOk[m7] && fk.a7z.aOk[m7]--
	}, this.aWw = function(player, m7, me) {
		aB.lk.r2(me, m7) ? mB.gh(m7, er.mC[0]) && (vw.a5n(player, m7, er.mC[0], 1), aB.lk.qr(m7, er.mC[0]), ch.vU(player, m7), iY.sR(m7, er.mC[0])) : ch.nk(player, me, 12)
	}
}

function aCO() {
	var a7b = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aZW = [dK.aZ, dK.aZ, dK.aa, dK.b4, dK.b5, dK.aq, dK.bA, dK.aa, dK.bX, dK.bL, dK.bU, dK.aC],
		aZX = [
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
		aZY = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aZc(oF, c9, aZd) {
		for (var dr = oF.length - 1; 0 <= dr; dr--) {
			var hm = oF[dr];
			0 === hm.id && hm.c9 === c9 && (hm.oO = "[Redacted Message]", aZd) && (hm.aAA = 1)
		}
	}
	this.oL = function(a9s) {
		var aZZ, a4h;
		return a9s.id < 5 && (aZZ = "@" + hc.wb.sV(a9s.c9, 5)), 0 === a9s.id ? aZZ + ": " + a9s.oO : 1 === a9s.id ? (a4h = "@" + hc.wb.sV(a9s.target, 5), 0 === a9s.uQ ? 32768 <= a9s.value ? aZZ + " voted with " + (a9s.value - 32768 + 1) +
				" gold against " + a4h + " to weaken the latter's admin position. 📉" : aZZ + " voted with " + (a9s.value + 1) + " gold for " + a4h + " to strengthen the latter's admin position. 💪" : 1 === a9s.uQ ? aZZ + " sent " + Math.floor(
					a9s.value / 100) + " 🧈 gold to " + a4h + "." : aZZ + " voted with " + (a9s.value / 10).toFixed(1) + " points for " + a4h + " to acknowledge the latter as clan leader. ✅") : 2 === a9s.id ? 0 === a9s.uQ ? aZZ +
			" was 🔇 muted for 1 Hour." : 1 === a9s.uQ ? "The username of " + aZZ + " was ✂️ redacted. Duration: 1 Day" : aZZ + " 👢 was kicked." : 3 === a9s.id ? aZZ + a2v.a7l(a9s.uQ, a2v.a7h[a9s.uQ][a9s.value]) + "@" + hc.wb.sV(a9s.target, 5) +
			a2v.a7m(a9s.uQ, a2v.a7h[a9s.uQ][a9s.value]) : 4 === a9s.id ? aZZ + a2v.a7l(5, a2v.a7h[5][a9s.uQ]) + "@" + hc.wb.sV(a9s.target, 5) + a2v.a7m(5, a2v.a7h[5][a9s.uQ]) : 5 === a9s.id ? aZY[a9s.uQ] : 6 === a9s.id ?
			"You are about to mention " + a9s.value + " player" + (1 === a9s.value ? "" : "s") + ". This action will cost " + (Math.max(10 * a9s.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === a9s.id ? a9s.oO : void 0
	}, this.oK = function(a9s, pL) {
		return {
			a9s: a9s,
			oO: pL,
			a9u: 0,
			fontSize: 1,
			oP: 0,
			aAB: a9s.id ? dK.b3 : dK.aL
		}
	}, this.aX0 = function(player, oE) {
		return (2 === oE ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.aA4 = function(aA1) {
		return aZW[aA1]
	}, this.aA0 = function(aA1, rA) {
		return aA1 < 3 || 7 === aA1 ? aZX[aA1][0] : 4 === aA1 ? aZX[aA1][rA < 1 ? 0 : rA < 10 ? 1 : 2] : aZX[aA1][rA < 10 ? 0 : 1]
	}, this.aA2 = function(rA) {
		return 0 === rA
	}, this.aAC = function(oE, c9) {
		for (var bl = bf.bg.bl, bg = bl[oE], cI = bg.length, c8 = 0; c8 < cI; c8++)
			if (c9 === bg[c8].c9) return bg[c8];
		for (var dr = 0; dr < bl.length; dr++)
			if (oE !== dr)
				for (cI = (bg = bl[dr]).length, c8 = 0; c8 < cI; c8++)
					if (c9 === bg[c8].c9) return bg[c8];
		return null
	}, this.aA5 = function(hm) {
		return !!bf.cH && hm.c9 === bf.cH.c9
	}, this.pq = function(bg, aZa, aZb) {
		var a4f = [];
		loop: for (var c8 = aZa; c8 < aZb; c8++) {
			var jJ = aB.oB.a4g(bg[c8].username);
			if (jJ) {
				for (var dr = a4f.length - 1; 0 <= dr; dr--)
					if (jJ === a4f[dr].name) {
						a4f[dr].el++;
						continue loop
					} a4f.push({
					name: jJ,
					el: 1
				})
			}
		}
		if (a4f.sort(function(dq, dr) {
				return dr.el - dq.el
			}), 0 === a4f.length) return "";
		for (var dZ = a4f[0].name + ": " + a4f[0].el, c8 = 1; c8 < a4f.length; c8++) dZ += "   " + a4f[c8].name + ": " + a4f[c8].el;
		return dZ
	}, this.aEs = function(aA1, rA, aEt) {
		return 0 === a7b[aA1].length ? "Rank: " + (rA + 1) : a7b[aA1] + " Rank: " + (rA + 1) + (3 !== aA1 && aEt < 100 ? "   " + a7b[3] + " Rank: " + (aEt + 1) : "")
	}, this.aAM = function(c9) {
		for (var bi = bf.z.bi, c8 = 0; c8 < bi.length; c8++) aZc(bi[c8].oF, c9);
		aZc(bf.message.aWh(), c9, 1), bf.oQ.aAM(c9)
	}
}

function a3t() {
	this.a9D = new aDC, this.result = new aQc, this.aQe = new aAf, this.aDG = new aSZ, this.aDF = new a7p, this.qN = new a4O, this.g = function() {
		this.result.g()
	}
}

function a3l() {
	var canvas, eL, aEq, font, aFu = 0,
		aZe = !1,
		aZf = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aZg = 5;

	function aXm() {
		if (aZe) {
			var c8, cI = aZf.length,
				ii = Math.floor(.5 * aEq.gP),
				gP = cI * ii,
				e2 = Math.floor(Math.floor(aEq.e2) + .3 * aEq.eJ - .5),
				e3 = Math.floor(Math.floor(aEq.e3) - gP),
				eJ = Math.floor(.4 * aEq.eJ + 2.5);
			for (fD.fillStyle = dK.aH, fD.fillRect(e2, e3, eJ, gP), fD.fillStyle = dK.ak, fD.fillRect(e2, e3 + aZg * ii, eJ, ii), fD.fillStyle = dK.aL, fD.fillRect(e2, e3, 2, gP), fD.fillRect(e2, e3, eJ, 2), fD.fillRect(e2 + eJ - 2, e3, 2, gP), c8 =
				1; c8 < cI; c8++) fD.fillRect(e2, e3 + c8 * ii, eJ, 2);
			for (fD.fillStyle = dK.aL, aB.dE.textAlign(fD, 1), aB.dE.textBaseline(fD, 1), fD.font = aB.dE.f9(0, .6 * ii), e2 += .5 * eJ, c8 = 0; c8 < cI; c8++) fD.fillText(aZt(c8), e2, e3 + (c8 + .6) * ii)
		}
		fD.drawImage(canvas, Math.floor(aEq.e2), Math.floor(aEq.e3))
	}

	function ew(a1D) {
		var e2, kD, kF, ii;
		eL.clearRect(0, 0, Math.floor(aEq.eJ), Math.floor(aEq.gP)), eL.fillStyle = dK.aH, eL.fillRect(0, 0, Math.floor(aEq.eJ), Math.floor(aEq.gP)), bz.eS && (eL.fillStyle = dK.ak, eL.fillRect(0, 0, Math.floor(.3 * aEq.eJ), Math.floor(aEq.gP))), eL
			.fillStyle = dK.aL, eL.fillText("Hide UI", .15 * aEq.eJ, .5 * aEq.gP), eL.fillRect(Math.floor(.3 * aEq.eJ - .5), 0, 2, Math.floor(aEq.gP)), e2 = .5 * aEq.eJ, eL.fillText("Replay Speed", e2, .31 * aEq.gP), eL.fillText(aZt(aZg), e2, .69 *
				aEq.gP), eL.fillRect(Math.floor(.7 * aEq.eJ - .5), 0, 2, Math.floor(aEq.gP)), a1D.aND ? (e2 = Math.floor(.02 * aEq.eJ), a1D = Math.floor(.025 * aEq.eJ), kD = Math.floor(.85 * aEq.eJ - e2 - .5 * a1D), kF = Math.floor(.25 * aEq.gP),
				ii = Math.floor(aEq.gP) - 2 * kF, eL.fillRect(kD, kF, e2, ii), eL.fillRect(kD + e2 + a1D, kF, e2, ii)) : function() {
				var eJ = Math.floor(.46 * aEq.gP),
					gP = Math.floor(.23 * aEq.gP),
					e2 = Math.floor(.85 * aEq.eJ - .5 * eJ + eJ / 12),
					e3 = Math.floor(.5 * aEq.gP - gP);
				eL.beginPath(), eL.moveTo(e2, e3), eL.lineTo(e2 + eJ, e3 + gP), eL.lineTo(e2, e3 + (gP << 1)), eL.fill()
			}(), eL.fillRect(0, 0, Math.floor(aEq.eJ), 2), eL.fillRect(0, 0, 2, Math.floor(aEq.gP)), eL.fillRect(0, Math.floor(aEq.gP) - 2, Math.floor(aEq.eJ), 2), eL.fillRect(Math.floor(aEq.eJ - 2), 0, 2, Math.floor(aEq.gP))
	}

	function aZt(c8) {
		return 5 === c8 ? "Normal" : "" + aZf[c8]
	}
	this.aND = !1, this.g = function() {
		bz.co && (aZg = 5, this.aND = !1, aZe = !1, aEq = new yw([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aZh = function() {
		return aZf[aZg]
	}, this.a09 = function() {
		return aEq.e3
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.aND,
		fxGetSpeedIndex: () => aZg,
		fxSetSpeedIndex: index => {
			aZg = index, this.resize()
		},
		fxGetPanelTop: () => aEq && aEq.e3
	}, this.a6F = function(aGz) {
		return !!bz.co && aEq.e2 + aEq.eJ > eT.eJ - aGz - dk.gap
	}, this.resize = function() {
		bz.co && (aEq.resize(), aEq.e3 -= (a2s.a6G() - 1) * dk.gap, font = aB.dE.f9(0, .3 * aEq.gP), (canvas = document.createElement("canvas")).width = Math.floor(aEq.eJ), canvas.height = Math.floor(aEq.gP), (eL = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aB.dE.textAlign(eL, 1), aB.dE.textBaseline(eL, 1), ew(this))
	}, this.vH = function(aZi) {
		0 === bz.gb || br.v2() || aZi !== bz.eS && (bz.eS = aZi, go.resize(), cm.cn = !0, bz.co) && (aFu = cm.gX + 2e3, ew(this))
	}, this.ub = function(e2, e3) {
		if (!bz.co) return !1;
		if (e2 < aEq.e2 || e3 < aEq.e3 || e2 > aEq.e2 + aEq.eJ) return aZe && function(a1D, e2, e3) {
			var cI = aZf.length,
				ii = Math.floor(.5 * aEq.gP),
				gP = cI * ii,
				kD = Math.floor(Math.floor(aEq.e2) + .3 * aEq.eJ - .5),
				gP = Math.floor(Math.floor(aEq.e3) - gP),
				eJ = Math.floor(.4 * aEq.eJ + 2.5);
			return aZe = !1, cm.cn = !0, e2 < kD || kD + eJ < e2 || e3 < gP || (aZg = aLt(0, Math.floor((e3 - gP) / ii), cI - 1), ew(a1D)), !0
		}(this, e2, e3);
		if ((e2 -= aEq.e2) < .3 * aEq.eJ) aZe = !1, this.vH(!bz.eS);
		else {
			if (e2 < .7 * aEq.eJ) return aZe = !aZe, cm.cn = !0;
			this.vI(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.vI(!0), this.vI = function(aZk) {
		2 === bz.gb ? (this.vH(!1), br.cP(3)) : (aZe = !1, this.aND = !this.aND, this.aND ? (cp.cv && cp.cl(), cZ.cb.setState(1)) : aZk || cp.aUd(), cm.cn = !0, ew(this))
	}, this.aZl = function() {
		this.aND = !1, cp.aUd(), cm.cn = !0, ew(this)
	}, this.uv = function(e2, e3) {
		return !!bz.eS && (0 <= cp.ub(e2, e3) || (bz.co ? ((cm.gX > aFu || !this.ub(e2, e3)) && iT.ub(e2, e3), cm.cn = !0, aFu = cm.gX + 2e3) : iT.ub(e2, e3)), !0)
	}, this.dI = function() {
		bz.co && bz.eS && cm.gX > aFu - 1e3 && cm.gX < aFu && (cm.cn = !0)
	}, this.aDI = function() {
		bz.co && (this.aND = !1, cm.cn = !0, ew(this))
	}, this.fC = function() {
		if (bz.co) {
			if (bz.eS) {
				if (cm.gX > aFu) return;
				if (cm.gX > aFu - 1e3) return fD.globalAlpha = aLt(0, (1e3 - (cm.gX - (aFu - 1e3))) / 1e3, 1), aXm(), void(fD.globalAlpha = 1)
			}
			aXm()
		}
	}
}

function a8R() {
	var aZu;
	this.g = function() {
		if (!aZu) {
			aZu = new Array(eb.aHA.length);
			for (var c8 = 0; c8 < aZu.length; c8++) aZu[c8] = a2q.z.aRp(20, eb.aHA[c8])
		}
	}, this.fC = function() {
		var ka = jv;
		if (!(5 <= ka)) {
			var aKQ = eT.eJ,
				aKR = eT.gP,
				kD = ju / ka,
				kF = jw / ka,
				kT = (aKQ + ju) / ka,
				kU = (aKR + jw) / ka,
				bv = -20 * ka,
				aZw = .5 * bv,
				a1F = c2.k0 << 4,
				cI = g6.z.g8,
				kC = g6.z.kC,
				rk = g6.z.rk,
				a2A = eb.a2A,
				tN = aZu,
				hB = fD;
			3 < ka && (hB.globalAlpha = .5 * (5 - ka));
			for (var c8 = 0; c8 < cI; c8++) {
				var a0O = kC[c8],
					e2 = aKQ * (a0O % a1F / 16 - kD) / (kT - kD) + aZw,
					a0O = aKR * (Math.floor(a0O / a1F) / 16 - kF) / (kU - kF) + aZw;
				aKQ < e2 || aKR < a0O || e2 < bv || a0O < bv || (hB.setTransform(ka, 0, 0, ka, e2, a0O), e2 = tN[a2A[rk[c8] >> 3]], hB.drawImage(e2, 0, 0))
			}
			hB.globalAlpha = 1, hB.setTransform(ka, 0, 0, ka, 0, 0)
		}
	}
}

function a44() {
	this.iK = new aZz, this.g = function() {
		this.iK.resize()
	}
}

function aB6() {
	a2h.f1(), fD.setTransform(jv, 0, 0, jv, 0, 0), fD.imageSmoothingEnabled = jv < 3, fD.drawImage(c2.a5c, iT.a08(), iT.a09()), a2q.a8G.fC(), fD.drawImage(z5, iT.a08(), iT.a09()), a2h.fC(), g6.fC(), iY.fC(), (bz.eS ? (go.fC(), iV) : (iU.fC(), iQ
	.fC(), gp.fC(), iV.fC(), cw.fC(), iS.fC(), iT.fC(), gc.fC(), go.fC(), iR.fC(), iW.fC(), cp.fC(), iX.fC(), iZ.fC(), ck.fC(), a2i)).fC(), br.fC()
}

function a92(eL, eJ, gP) {
	eL.clearRect(0, 0, eJ, gP), eL.fillStyle = dK.aI, eL.fillRect(0, 0, eJ, gP)
}

function a93(eL, eJ, gP, a94) {
	eL.fillStyle = dK.aL, eL.fillRect(0, 0, eJ, a94), eL.fillRect(0, 0, a94, gP), eL.fillRect(eJ - a94, 0, a94, gP), eL.fillRect(0, gP - a94, eJ, a94)
}

function a8p(eL, e2, e3, tH, a94, es, aa0) {
	eL.fillStyle = dK.aL;
	var es = Math.floor(tH * es),
		ij = (es += (es - a94) % 2, Math.floor((es - a94) / 2)),
		tH = Math.floor((tH - es) / 2);
	eL.fillRect(e2 + tH, e3 + tH + ij, es, a94), aa0 && eL.fillRect(e2 + tH + ij, e3 + tH, a94, es)
}

function a39() {
	var aa2, aa3, aa4;
	aa2 = [32, 65, 191, 913, 931], aa3 = [64, 127, 688, 930, 1155], aa4 = new Array(aa2.length + 1);
	for (var c8 = 0; c8 < aa4.length; c8++) {
		aa4[c8] = 0;
		for (var dq = c8 - 1; 0 <= dq; dq--) aa4[c8] += aa3[dq] - aa2[dq]
	}

	function aaA(aA) {
		for (var c8 = aa2.length - 1; 0 <= c8; c8--)
			if (aA >= aa2[c8] && aA < aa3[c8]) return c8;
		return -1
	}
	this.aKV = function(dZ) {
		return 0 !== (dZ = dZ.trim()).indexOf("Bot ") && 0 !== dZ.indexOf("[Bot] ") && function(dZ, aa7, aa8) {
			var cI = (dZ = dZ.trim()).length;
			if (cI < aa7 || aa8 < cI) return !1;
			for (var aA, aa9 = 0, c8 = 0; c8 < cI; c8++)
				if (aA = dZ.charCodeAt(c8), aa9 += 65 <= aA && aA <= 90 || 1040 <= aA && aA <= 1071 ? 1 : 0, -1 === aaA(aA)) return !1;
			if (3 < aa9 && aa9 > Math.floor(cI / 2)) return !1;
			return !0
		}(dZ, 3, 20)
	}, this.hU = function(dZ) {
		for (var cI = (dZ = dZ.trim()).length, dT = [], c8 = 0; c8 < cI; c8++) {
			var aA, es = aaA(aA = dZ.charCodeAt(c8));
			dT.push(aa4[es] + aA - aa2[es])
		}
		return dT
	}, this.j9 = function(dT) {
		for (var aA, dr, dZ = "", cI = dT.length, c8 = 0; c8 < cI; c8++)
			for (dr = 1; dr < aa4.length; dr++)
				if (dT[c8] < aa4[dr]) {
					aA = aa2[dr - 1] + dT[c8] - aa4[dr - 1], dZ += String.fromCharCode(aA);
					break
				} return dZ
	}, this.aaB = function(dZ) {
		for (var dT = this.hU(dZ), result = "", c8 = 0; c8 < dT.length; c8++) result = (result += dT[c8] < 10 ? "00" : dT[c8] < 100 ? "0" : "") + dT[c8].toString(10);
		return result
	}, this.aaC = function(dZ) {
		for (var dT = new Array(Math.floor(dZ.length / 3)), c8 = 0; c8 < dZ.length; c8 += 3) dT[Math.floor(c8 / 3)] = parseInt(dZ.substring(c8, c8 + 3));
		return this.j9(dT)
	}, this.aaD = function(dZ) {
		for (var dt, dT = [dZ.length], c8 = 0; c8 < dZ.length; c8++) dT[c8] = dZ.charCodeAt(c8) - 48;
		var result = "";
		for (c8 = 0; c8 < dZ.length; c8++) c8 === dZ.length - 1 || 51 < 10 * dT[c8] + dT[c8 + 1] ? result += dT[c8].toString() : (dt = 10 * dT[c8] + dT[c8 + 1], result += String.fromCharCode(dt + (dt < 26 ? 65 : 71)), c8++);
		return result
	}, this.aaE = function(dZ) {
		for (var aA, result = "", c8 = 0; c8 < dZ.length; c8++) 48 <= (aA = dZ.charCodeAt(c8)) && aA < 58 ? result += String.fromCharCode(aA) : 65 <= aA && aA < 75 ? result += "0" + (aA - 65).toString() : 75 <= aA && aA < 91 ? result += (aA - 65)
			.toString() : 97 <= aA && aA < 123 && (result += (aA - 71).toString());
		return result
	}, this.aaF = function(dZ) {
		for (var cI = dZ.length, dT = [], c8 = 0; c8 < cI; c8++)(aA = dZ.charCodeAt(c8)) < 58 ? dT.push(dZ[c8]) : (aA -= aA < 91 ? 65 : 71, dT.push(String(io.dp(aA, 10))), dT.push(String(aA - 10 * io.dp(aA, 10))));
		var cI = dT.length - 2,
			aA = 0,
			a8C = [];
		for (c8 = 0; c8 < cI; c8 += 3) a8C[aA++] = parseInt(dT[c8] + dT[c8 + 1] + dT[c8 + 2]);
		return a8C
	}, this.aaG = function() {
		for (var ey, aaH = "", c8 = 0; c8 < 6; c8++) ey = 48 + qT.random() % 36, ey += 58 <= ey ? 39 : 0, aaH += String.fromCharCode(ey);
		return aaH
	}
}

function xc() {
	var aaI = null,
		aBi = 2e4,
		aaJ = 0;
	this.dI = function() {
		cm.gX < aBi || (aBi = cm.gX + 1e4, 0 !== cZ.id) || aaI || xy.xe() || (y.z.m(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || y.kw.hf(5) : aBi = cm.gX + 1e3)
	}, this.gh = function(aA) {
		aaI = aA
	}, this.show = function() {
		return !(!aaI || cm.gX < aaJ) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aaJ = cm.gX + 6e4, (new aDi).show(aaI.fB, aaI.colors, aaI.id), !(aaI = null)))
	}
}

function aaK() {
	var eJ, gP, aaL;

	function aaW(a1W, by, aaU, aaO, iv) {
		by = aaV(a1W, by + 1 + 2 * aaO & 3);
		! function(a1W, a1X) {
			return 1 < Math.abs(a1W % eJ - a1X % eJ) || 1 < Math.abs(aaY(a1W) - aaY(a1X))
		}(a1W, by) && 0 === iv[by << 2] && (iv[by << 2] = aaU)
	}

	function aaY(es) {
		return Math.floor((es + .5) / eJ) % gP
	}

	function aaV(es, by) {
		return es + aaL[by]
	}
	this.j9 = function(dZ) {
		var c8, sX, cI, aaM, a52 = ft;
		for (j8.wb.a8B(j8.wb.a8A(dZ)), c2.ge.gf[c2.c4].eJ = c2.k0 = eJ = a52.fu(12), c2.ge.gf[c2.c4].gP = c2.k1 = gP = a52.fu(12), aaL = [-eJ, -1, eJ, 1], c2.a5c = document.createElement("canvas"), c2.a5c.width = c2.k0, c2.a5c.height = c2.k1, c2
			.a5Y = c2.a5c.getContext("2d", {
				alpha: !1
			}), c2.aSN = c2.mp = null, c2.aSN = c2.a5Y.getImageData(0, 0, c2.k0, c2.k1), c2.mp = c2.aSN.data, aB.pr.z9(c2.mp), cI = a52.fu(12), sX = a52.fu(5), aaM = aEZ(eJ * gP - 1), c8 = 0; c8 < cI; c8++) ! function(dU, es, aaN, aaO) {
			var c8, by, a52 = ft,
				iv = c2.mp,
				a4X = es,
				aaR = es,
				aaS = 0,
				aaT = 1 + aaN,
				aaU = 2 - aaN;
			for (iv[es << 2] = aaT, c8 = 0; c8 < dU; c8++) by = a52.fu(2), es = aaV(es, by), iv[es << 2] === aaT ? aaS % 2 == 1 && aaW(aaR, aaS + 2 * aaO + 3, aaU, aaO, iv) : iv[es << 2] = aaT, aaW(es, by, aaU, aaO, iv), aaW(aaR, by, aaU,
				aaO, iv), aaR = es, aaS = by;
			aaV(es, 0) === a4X ? (aaW(es, 0, aaU, aaO, iv), aaW(a4X, 0, aaU, aaO, iv)) : aaV(es, 1) === a4X && (aaW(es, 0, aaU, aaO, iv), aaW(a4X, 2, aaU, aaO, iv));
			0 === dU && (aaW(a4X, 0, aaU, aaO, iv), aaW(a4X, 2, aaU, aaO, iv))
		}(a52.fu(sX), a52.fu(aaM), 1 === a52.fu(1), 1 === a52.fu(1));
		var e2, e3, sc, aaZ, aaa, aab, iv = c2.mp,
			aac = !0,
			aR1 = c2.ge.gf[c2.c4].aR1,
			aR2 = c2.ge.gf[c2.c4].aR2;
		for (e3 = 0; e3 < gP; e3++)
			for (aaZ = !0, aaa = aac, e2 = aab = 0; e2 < eJ; e2++) sc = 4 * e3 * eJ + 4 * e2, aab <= e2 && 0 < iv[sc] && (aaa = 2 === iv[sc], aaZ) && (aaZ = !1, aaa !== aac) ? (aac = aaa, aab = e2 + 1, e2 = -1) : (aaa ? (iv[sc] = aR2[0], iv[1 +
				sc] = aR2[1], iv[2 + sc] = aR2[2]) : (iv[sc] = aR1[0], iv[1 + sc] = aR1[1], iv[2 + sc] = aR1[2]), iv[3 + sc] = 255);
		c2.a5Y.putImageData(c2.aSN, 0, 0), c2.a5b = !0, c2.aSJ.g(), cm.cn = !0
	}
}

function aII() {
	this.cG = -1;
	var aad = 0,
		aae = 0,
		aaf = 0,
		vM = 0,
		aag = new Uint8Array(67108864);
	this.g = function(aUy, aUz, aah) {
		aad && aag.fill(0), aae = aUy, aaf = aUz, vM = (aad = 1) << aah
	}, this.dI = function() {
		for (var dw, aai = aag, aUy = aae, aUz = aaf, cI = vM, c8 = 255 & aUy; c8 < cI; c8++) dw = aai[67108863 & aUz] + (33554431 & aUy) + (33554431 & (c8 ^ aUz)), aai[67108863 & aUy] += dw, aUz = (aUy = aUy + dw + c8 & 1073741823) ^ aUz >> 1;
		return aae = aUy, aaf = aUz, vM = Math.max(vM - (vM >> 3), 4096), aUy ^ aUz
	}
}

function a0r() {
	this.hU = function(dZ, a51, aaj) {
		for (var aak = [], cI = dZ.length, max = 0, c8 = 0; c8 < cI; c8++) {
			var dt = dZ.charCodeAt(c8);
			aak.push(dt), max = Math.max(max, dt)
		}
		var a53 = max < 128 ? 7 : 16;
		for (aaj.hS(a51, cI), aaj.hS(1, +(16 == a53)), c8 = 0; c8 < cI; c8++) aaj.hS(a53, aak[c8])
	}
}

function aZz() {
	this.resize = function() {
		var c8, aMc = document.head.querySelector("style#ss");
		if (aMc)
			for (c8 = aMc.sheet.cssRules.length - 1; 0 <= c8; c8--) aMc.sheet.deleteRule(0);
		else(aMc = document.createElement("style")).id = "ss", document.head.appendChild(aMc);
		var aFu = "::-webkit-scrollbar",
			aAc = aB.dE.dj(dk.aNV),
			tH = aB.dE.dj(Math.max(aB.dE.dm(.012), 8));
		try {
			aMc.sheet.insertRule(aFu + "{width:" + tH + ";height:" + tH + ";}", aMc.sheet.cssRules.length), aMc.sheet.insertRule(aFu + "-thumb{background-color:white;}", aMc.sheet.cssRules.length), aMc.sheet.insertRule(aFu +
				"-track{background:" + dK.aH + ";}", aMc.sheet.cssRules.length), aMc.sheet.insertRule(aFu + "-track:horizontal{border-top:" + aAc + " solid white;}", aMc.sheet.cssRules.length), aMc.sheet.insertRule(aFu +
				"-track:vertical{border-left:" + aAc + " solid white;}", aMc.sheet.cssRules.length), aMc.sheet.insertRule(aFu + "-button{display:none;}", aMc.sheet.cssRules.length)
		} catch (a6) {
			for (console.log("error 3425: " + a6), c8 = aMc.sheet.cssRules.length - 1; 0 <= c8; c8--) aMc.sheet.deleteRule(0)
		}
	}
}

function a80() {
	function aas(player, lt, aam) {
		3 <= aam && 2142 < cm.lJ() && (lt === bz.fi || ef.g5[lt] < io.dp(ef.g5[player], 20)) && fq.aKr(player, 20)
	}

	function aat(player, me, lt, aam) {
		3 <= aam && aam < 6 && io.dp(ef.g5[player], 8) > ef.g5[lt] && (me = Math.max(io.dp(11 * ef.g5[lt], 5), io.dp(ef.g5[player], 10)));
		aam = ef.jU[player].length;
		fk.m2.aJG(player, lt), fk.m2.aJI(player, lt, aam, me)
	}

	function aar(player, me) {
		var lt = bz.fi,
			cI = ef.jU[player].length;
		fk.m2.aJF(player), ef.jU[player].length !== cI && fk.m2.aJI(player, lt, cI, me)
	}
	this.aOk = new Uint8Array(bz.fi), this.g = function() {
		this.aOk.fill(0)
	}, this.aKu = function(player, me) {
		var aal, aam, aan, aao;
		ly.m1(player) && (aal = mD.a7C(player), 3 <= (aam = fq.me[player]) && aam < 6 && (me = Math.max(ef.g5[player] - aal, me)), aan = ef.jW[player].length, aao = ef.jV[player].length, 30 * ef.eg[player] > bz.rE && t1[player] < 10 && 100 *
			aao <= aan && fq.aKr(player, 10), bz.eN ? function(player, me, aam, aal) {
				var lt;
				if (fk.m2.aJK(player, !1) || fk.m2.aJM(player, !1)) {
					if (!fk.m2.aJO(player))
						if (fk.m2.aJN()) aar(player, me), aas(player, bz.fi, aam);
						else {
							if (qT.qU(fq.aKj[aam])) lt = fk.m2.aJR(player);
							else {
								if (fk.m2.aJP() && qT.qU(fq.aKh[aam]) && fk.m2.aJQ(), 6 === aam) return aat(player, me, fk.m2.aJd(), aam);
								lt = fk.m2.aJU(player)
							}
							aat(player, me, lt, aam), aas(player, lt, aam)
						}
				} else g6.fg.dI(player) || fk.a81.dI(player) || ! function(player, me, aam, aal) {
					var aOk = fk.a7z.aOk;
					aOk[player] = 0;
					var aav = eb.eo[player];
					if (0 !== aav) {
						var rc = ef.g5[player],
							eg = ef.eg;
						if (player < bz.fj && (me = rc), !(rc < eg[player] || 5 === aam && rc < aal || 4 === aam && rc < io.dp(aal, 2))) {
							go.ej(aav);
							for (var cI = er.et[0], eq = er.eq, c8 = qT.u4(cI), dr = 0; dr < cI; dr++) {
								var aA = eq[(dr + c8) % cI];
								if (aOk[aA]) return cs.aWv.aZV(player, aA, me)
							}
							var g7 = g6.z.g7;
							for (dr = 0; dr < cI; dr++)
								if (aA = eq[(dr + c8) % cI], g7[aA] && aA !== player) return cs.aWv.aZV(player, aA, me)
						}
					}
				}(player, me, aam, aal)
			}(player, me, aam, aal) : (!aao || aan && (aan < aao && !qT.u4(10) || 100 * aao <= aan && qT.u4(3) || !qT.u4(8))) && g6.fg.dI(player) || function(player, me, aam) {
				fk.m2.aJK(player, !0) || fk.m2.aJM(player, !0) ? fk.m2.aJO(player) || (fk.m2.aJN() ? aar(player, me) : qT.qU(fq.aKj[aam]) ? aat(player, me, fk.m2.aJR(player), aam) : 5 === aam ? aat(player, me, fk.m2.aJZ(), aam) : (fk.m2
				.aJP() && qT.qU(fq.aKh[aam]) && fk.m2.aJQ(), aat(player, me, 6 === aam ? fk.m2.aJd() : fk.m2.aJU(player), aam))) : fk.a81.dI(player)
			}(player, me, aam))
	}
}

function aTW() {
	var aaw, aax, aay, lI, aaz, h = 0,
		gX = cm.gX;

	function ab2() {
		! function() {
			if (!bz.k2) return;
			if (bz.wx) return;
			if (2 !== bz.gb)
				if (aaz % 7 != 0) aaz++;
				else if (lI === bz.aAz) {
				if (!ab5()) return;
				iS.aAx(lI), bz.lr.dI()
			} else {
				if (!ab5()) return;
				aaz++, lI++, iY.sY(), iY.sb(!0)
			}
			return 1
		}() && ab5() && aB9()
	}

	function ab3() {
		h = 0, (bz.k2 ? (cm.cn = iS.aAx(lI - (aaz % 7 == 0 ? 0 : 1) + aaz % 7 / 7) || cm.cn, aB0) : cp.cv || !iV.aND ? aB0 : (cm.cn = !0, aB7))()
	}

	function ab5() {
		var c8, cI, ab6 = lo.lp.aES,
			dw = lo.lp.aET,
			dx = lo.lp.aEU,
			dy = lo.lp.aEV,
			ab7 = lo.lp.aEX,
			ab8 = lo.lp.aEW;
		if (!(aaw >= ab8.length)) {
			if (ab8 = ab8[aaw], ab7[aaw]) {
				for (cI = aax + ab8, c8 = aax; c8 < cI; c8++) cs.aAy.fv(ab6[c8], dw[c8], dx[c8], dy[c8]);
				aax += ab8, aaw++
			} else ++aay >= ab8 && (aaw++, aay = 0);
			return __fx.replay.tick++, 1
		}
		iU.a6T("Replay file smaller than expected."), iV.vI(!1), bz.gb = 2
	}
	this.xx = 0, this.g = function() {
		aaz = lI = aay = aax = aaw = 0, __fx.replay.registerHooks({
			advance: () => ab2(),
			finishTick: () => kg.render(),
			requestRedraw: () => {
				cm.cn = !0
			},
			isEnded: () => 2 === bz.gb,
			getTickInterval: () => cm.aB1
		})
	}, this.dI = function() {
		var a1c;
		eT.dI(), __fx.replay.frame() ? aB2() : iV.aZh() < 1.7 ? 0 === h ? cm.gX >= gX && (a1c = cm.aB1 / iV.aZh(), gX += a1c * Math.floor(1 + (cm.gX - gX) / a1c), 2 === bz.gb || cp.cv || !iV.aND ? aB2() : (ab2(), kg.render()), h++) : ab3() :
			function() {
				var a1c;
				if (cm.gX >= gX)
					if (2 === bz.gb || cp.cv || !iV.aND) aB2(), gX = cm.gX;
					else {
						for (a1c = cm.aB1 / iV.aZh(), 16 < (cm.gX - gX) / a1c && (gX = cm.gX - 16 * a1c); cm.gX >= gX && 2 !== bz.gb;) gX += a1c, ab2();
						kg.render()
					} ab3()
			}(), aB5(), cm.cn && (cm.cn = !1, aB6())
	}, this.aDK = function() {
		lo.lp.aEW.length - aaw <= 2 || iU.a6T("Replay file larger than expected.")
	}
}

function ab9() {
	this.L84 = ["🔑 My Account", "🏆 Leaderboards", "📜 Logs", "📈 Clan Charts", "▶️ Replay", "🧈 Gold Transfer", "📰 Propaganda", "⚔️ Join Lobby 2", "⚙️ Settings", "Account Recovery", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data",
		"Privacy Settings", "Back", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY",
		"MAP:", "Account Name", "Email", "Request Email", "Type your message here...", "Send", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Players", "Close {button}", "Ready", "Player Count", "Next Game", "{0} defeated {1}!",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks", "Ships landed", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "🛠️ List Options", "Clan Name Search",
		"Username Search", "Quantity", "Account Name Search", "Adjust", "Colors", "Options", "Random", "Customized", "My Color", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct",
		"Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Multiplayer", "Custom Scenario", "My Account", "Game Menu",
		"Your Kingdom's Name", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "This is a contest!", "Accept",
		"You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️",
		"The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}",
		"Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"Spawning", "Clustered", "Manual Spawn", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Contest",
		"Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "Links", "Propaganda Text", "Preview", "Show", "Launch Campaign",
		"Gold Investment", "Launch", "Cancel", "Confirm", "Clan Chart", "🛠️ Options", "Lobby", "Admin Election", "Blockchain", "Clan Leader Election", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Default",
		"Uniform", "You earned {10} gold!", "{0} earned {11} gold!", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "Login", "➡️ Login", "Password", "Hide", "Security Tip", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "LEADERBOARD", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank",
		"Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Copy", "Search", "Request New Password",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander",
		"Strategist", "Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User",
		"Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}",
		"Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:",
		"Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "Ship launched!", "Ship intercepted!", "Propaganda", "Report Abuse", "Clans", "Clan Members", "Admins",
		"1v1 Players", "Richest Players", "Patreon Members", "Zombie Players", "Loading", "Mixed", "Team dependent", "⚔️ Play", "Map", "Settings", "Game Mode", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "White Arena",
		"Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "Mountains 2", "World 2", "British Isles", "Source Account", "Target Account", "Amount", "Send gold only to trusted accounts!", "Team {0}", "Team {0} won the game!", "Quit Game", "More",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"You are leaving Territorial.io!", "Replay Error", "Warning", "Loading...", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Activated",
		"Incoming Boat!", "Incoming Ship!", "Territory", "Income", "Growth", "Numbers", "Statistics", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports",
		"Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type",
		"Elo Deducted", "Bio Removed", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Humans", "Bots", "Spectators", "Threshold", "Time",
		"🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "second played", "seconds played", "You are leaving Territorial.io."
	]
}

function a33() {
	this.data = new aV4;
	var abA = (new ab9).L84,
		abB = (this.wK = abA, !(this.xi = "en"));
	this.g = function() {
		var dZ, dT;
		abB = !1, ("en" === (dZ = d1.d2.data[12].value).split("-")[0].toLowerCase() ? (hv.wK = abA, hv.xi = dZ, 1) : d1.d2.data[12].value === d1.d2.data[145].value && 0 < d1.d2.data[146].value && (dZ = d1.d2.data[146].value, (dT = d1.dO.aR6(dZ, !
			1)).length === dZ) && !!aB.pr.aMA(dT) && function(dT) {
			for (var cI = dT.length, gP = 0; gP < cI; gP++) dT[gP] = dT[gP].replace("&#39;", "'");
			var abH = d1.dO.aR6(cI, !0);
			if (cI !== abH.length) return !1;
			if (!aB.pr.aMA(abH)) return !1;
			for (var dU = abA.length, abI = new Array(dU), aMn = dU === cI, el = Math.min(cI, dU), c8 = 0; c8 < dU; c8++)
				if (abI[c8] = abA[c8], c8 < cI && abH[c8] === abI[c8]) abI[c8] = dT[c8];
				else {
					aMn = !1;
					for (var dr = 0; dr < el; dr++)
						if (abH[dr] === abI[c8]) {
							abI[c8] = dT[dr];
							break
						}
				} return hv.wK = abI, hv.xi = d1.d2.data[12].value, aMn
		}(dT)) || (abB = !0)
	}, this.a4I = function() {
		eb.i7(), fq.i7(), ck.i7(), ch.i7(), iP.g(), a2v = new a7a
	}, this.wL = function() {
		return this.wK === abA || !abA.length
	}, this.aVV = function() {
		var abJ;
		return !!abB && (abB = !1, 0 !== abA.length) && (abJ = d1.d2.data[12].value, y.kw.hh(0, abJ.slice(0, 20)), !0)
	}, this.aVY = function(dT) {
		dT.length !== abA.length ? 8 === br.bs && br.hN().jB(30, 0, 1) : (this.wK = dT, this.xi = d1.d2.data[12].value, d1.db.dc(145, this.xi), d1.db.dc(146, dT.length), d1.dO.aRA(dT, !1), d1.dO.aRA(abA, !0), 8 === br.bs ? br.hN().jB(30) : 0 ===
			cA.cg() && 5 === br.bs && br.z.cX())
	}, this.hw = function() {
		var a5D, dT = navigator.languages;
		return dT && dT.length ? (a5D = Math.max(hv.data.a5E(dT[0]), 0), 1 === dT.length ? [a5D, a5D] : [a5D, Math.max(hv.data.a5E(dT[1]), 0)]) : [0, 0]
	}
}

function a3K() {
	var canvas, eL, e2, e3, abK, abL, gap, abM, fontSize, abN, aXh, abO, abP, abQ, abR, abS, abT, abU;

	function abY() {
		eL.clearRect(0, 0, iS.eJ, iS.gP), eL.fillStyle = dK.aI, eL.fillRect(0, 0, iS.eJ, iS.gP), eL.fillStyle = dK.af, mx = 0 < abS ? abS : abP[4] / 1e4, eL.fillRect(0, iS.gP - abK - 1, Math.floor(mx * iS.eJ), abK), eL.fillStyle = dK.aL, eL.fillRect(
			0, 0, iS.eJ, 1), eL.fillRect(0, 0, 1, iS.gP), eL.fillRect(iS.eJ - 1, 0, 1, iS.gP), eL.fillRect(0, iS.gP - 1, iS.eJ, 1), eL.fillRect(0, iS.gP - abK - 1, iS.eJ, 1);
		for (var mx, abZ, ee = 0, c8 = 0; c8 < abO.length; c8++) abQ[c8] ? (aB.dE.textAlign(eL, 0), abZ = Math.floor((abL - abK + 2 * abM) * (c8 - ee + 1) / (abO.length + 1) - .7 * abM), eL.fillText(abO[c8], gap, abZ), aB.dE.textAlign(eL, 2), 5 ===
			c8 && 0 !== ef.fo[bz.cr] && ef.g5[bz.cr] >= mD.a7C(bz.cr) ? (eL.fillStyle = dK.bI, eL.fillText(abW(c8), iS.eJ - gap, abZ), eL.fillStyle = dK.aL) : eL.fillText(abW(c8), iS.eJ - gap, abZ)) : ee++
	}

	function abW(c8) {
		return c8 < 3 ? abP[c8].toString() : 3 === c8 || 4 === c8 || 5 === c8 ? aB.oB.a6y(abP[c8] / 100, 2) : c8 < 7 ? aB.oB.sV(abP[c8]) : c8 === 7 ? iS.w1(abP[7]) : c8 === 8 ? __fx.utils.getMaxTroops(ef.eg, bz.cr) : __fx.utils.getDensity(bz.cr)
	}

	function abV() {
		ef.eg[bz.cr] !== abP[6] && (abP[6] = ef.eg[bz.cr], abN++)
	}
	this.g = function() {
		abS = abT = 0, (aXh = new Array(8))[0] = L(538), aXh[1] = bz.wx ? L(65) : L(539), aXh[2] = L(540), aXh[3] = L(541), aXh[4] = L(519), aXh[5] = L(495, 0, "Interest"), aXh[6] = L(494), aXh[7] = L(542),
			aXh.push("Max Troops", "Density"), // add aXh
			(abO = new Array(aXh.length)).fill(""), (abP = new Array(aXh.length))[0] = bz.wx ? 0 : bz.fj, abP[1] = bz.wx ? en.ep : bz.fh, abP[2] = bz.qG, abP[3] = 0, abP[4] = io.dp(1e4 * ef.eg[0], Math.max(bz.rE, 1)), abP[5] = 0 === bz.data
			.iIncomeType ? 700 : 1 === bz.data.iIncomeType ? io.dp(700 * bz.data.iIncomeValue, 64) : io.dp(700 * bz.data.iIncomeData[bz.cr], 64), abP[6] = 0, abV(), abP[7] = 0, abR = abW(6), (abQ = new Array(aXh.length)).fill(!0), abU = 0, abU =
			bz.wx ? (abQ[0] = !1, abQ[2] = !1, abQ[3] = !1, 3) : (abQ[3] = !1, 1), abN = 0, this.resize()
	}, this.resize = function() {
		this.eJ = Math.floor((cZ.cb.eR() ? .1646 : .126) * 1.25 * eT.eU), this.gP = Math.floor(1.18 * this.eJ), abK = Math.floor(.04 * this.eJ), gap = Math.floor(.035 * this.eJ), abM = .04 * this.eJ, abL = this.gP, this.gP -= Math.floor(abU * (
			this.gP - 2 * abK) / aXh.length), fontSize = Math.floor(.7 * (abL - abK) / aXh.length);
		var gQ = aB.dE.f9(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.eJ, canvas.height = this.gP,
			function(gQ, eJ) {
				for (var c8 = 0; c8 < abO.length; c8++) abO[c8] = aB.eL.a6Y(aXh[c8], gQ, eJ)
			}((eL = canvas.getContext("2d", {
				alpha: !0
			})).font = gQ, .575 * this.eJ), aB.dE.textBaseline(eL, 1), eL.lineWidth = 1, this.aAo(), this.a8e(), iR.a8e(), abY()
	}, this.a8e = function() {
		e2 = eT.eJ - this.eJ - dk.gap
	}, this.qL = function() {
		e3 = dk.gap
	}, this.aAo = function() {
		e3 = dk.gap + (iR.aPP() && 0 !== ef.fo[bz.cr] && !bz.k2 ? iR.gP + dk.gap : 0)
	}, this.sb = function(hz) {
		(hz || 100 <= abN) && (abN = 0, abY())
	}, this.a5p = function() {
		return abP[7]
	}, this.w1 = function(value) {
		var dU = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * dU) / 1e3);
		return value < 10 ? dU + ":0" + value : dU + ":" + value
	}, this.dI = function() {
		var vO, per;
		abQ[0] && bz.a71 - bz.qG !== abP[0] && (abP[0] = bz.a71 - bz.qG, abN++), en.ep - abP[0] !== abP[1] && (abP[1] = en.ep - abP[0], abN++), this.aIJ(), (vO = mD.vZ(bz.cr)) !== abP[5] && (abP[5] = vO, abN++), abV(), abP[7] += cm.aB1, vO = abW(
			7), abR !== vO && (abR = vO, abN += 100), vO = bz.eN ? go.eW() : ef.eg[eh[0]], per = io.dp(1e4 * vO, Math.max(bz.rE, 1)), abP[3] = vO, abP[4] !== per && (abN++, abP[4] = per), 8 === bz.qS && function() {
			for (var c8 = 0; c8 < 2; c8++)
				if (!aB.lk.lm(c8)) return qM.a9D.a9F(), 1;
			return
		}() || abP[3] < bz.rE || ! function() {
			for (var c8 = en.ep - 1; 0 <= c8; c8--)
				if (0 < ef.jU[en.em[c8]].length) return;
			return 1
		}() || g6.k7.aVS().length || bz.eN && go.eW(1) < bz.rE || qM.a9D.a9F()
	}, this.aIJ = function() {
		abQ[2] && bz.qG !== abP[2] && (abP[2] = bz.qG, abN += 2 === bz.gb ? 100 : 1)
	}, this.aY6 = function() {
		return abP[3] === bz.rE
	}, this.aAx = function(c8) {
		var z2, abi, ee;
		return 2 !== bz.gb && (c8 % 2 == 1 && (iQ.sb(1, 1), cm.cn = !0), c8 === bz.aAz ? (abS = 0, abY(), !1) : (-1 !== c8 || 0 !== abT) && (abi = abS, abS = bz.co ? c8 / bz.aAz : (ee = performance.now(), 0 <= c8 && (z2 = ee - 392 * c8, abT =
			0 === c8 || z2 < abT ? z2 : abT), 1 < (abS = (ee - abT) / (392 * bz.aAz)) ? 1 : abS), abY(), abS !== abi))
	}, this.fC = function() {
		fD.drawImage(canvas, e2, e3)
	}
}

function aUT() {
	var vu, aCt;

	function abj() {
		br.cj();
		var dZ = lo.aNy(aCt.gY());
		(bz.gb && 0 < dZ.length && dZ === lo.lp.aJf || lo.zl.j9(dZ)) && lo.aNu()
	}
	this.show = function(aKZ) {
		this.aNt(aKZ), vu.show(), this.resize()
	}, this.aNt = function(aKZ) {
		0 === bz.gb ? aKZ ? aCt.xS(aKZ) : bz.aN4.length && aCt.xS(bz.aN4) : (bz.co || (lo.lp.aJf = lo.aNA.hU()), aCt.xS(lo.aNz(lo.lp.aJf)))
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), aCt.resize()
	}, this.dM = function(aA) {
		2 === aA ? vu.dN[0].dO() : abj()
	}, vu = new cd(L(4), [new cN("⬅️ " + L(14), function() {
		br.fI(1)
	}), new cN(L(543), function() {
		aCt.aCv()
	}), new cN(L(544), function() {
		aCt.aCw()
	}), new cN(L(545), function() {
		aCt.clear()
	}), new cN(L(546), function() {
		abj()
	})]), aCt = new xR(L(547)), vu.cf.appendChild(aCt.a6)
}

function a3M() {
	var abk, abl, abm;

	function abr(c8) {
		var button = iL.pH[c8],
			e2 = button.e2,
			e3 = button.e3,
			eJ = button.eJ,
			gP = button.gP;
		fD.fillStyle = button.abp, fD.fillRect(e2, e3, eJ, gP), c8 === abk && (fD.fillStyle = abm, fD.fillRect(e2, e3, eJ, gP)), fD.lineWidth = dk.yz, fD.strokeStyle = abl, fD.strokeRect(e2, e3, eJ, gP),
			function(button) {
				var e2 = button.e2,
					e3 = button.e3,
					eJ = button.eJ,
					gP = button.gP;
				aB.dE.textAlign(fD, 1), aB.dE.textBaseline(fD, 1), fD.font = button.font, fD.fillStyle = abl, fD.fillText(button.pL, Math.floor(e2 + eJ / 2), Math.floor(e3 + gP / 2 + .1 * button.fontSize))
			}(button)
	}
	this.eJ = 0, this.gP = 0, this.e3 = 0, this.gap = 0, this.g = function() {
		abk = -1, abl = dK.aL, abm = "rgba(255,255,255,0.16)", this.pH = new Array(7), this.gP = Math.floor((cZ.cb.eR() ? .123 : .093) * eT.eU), this.eJ = Math.floor((cZ.cb.eR() ? 3.96 : 4.2) * this.gP), this.gap = Math.floor(.025 * this.eJ);
		var abn = Math.floor(.26 * this.gP),
			abo = aB.dE.f9(1, abn);
		this.pH[0] = {
			e2: 0,
			e3: 0,
			eJ: Math.floor(.6 * this.eJ - this.gap / 2),
			gP: this.gP,
			pL: "Multiplayer",
			font: abo,
			abp: "rgba(22,88,22,0.8)",
			fontSize: abn
		}, abn = Math.floor(.18 * this.gP), abo = aB.dE.f9(1, abn), this.pH[1] = {
			e2: 0,
			e3: 0,
			eJ: this.eJ - this.pH[0].eJ - this.gap,
			gP: this.gP,
			pL: "Single Player",
			font: abo,
			abp: "rgba(22,88,88,0.8)",
			fontSize: abn
		}, this.pH[2] = {
			e2: 0,
			e3: 0,
			eJ: this.eJ,
			gP: Math.floor(.3 * this.gP),
			pL: "",
			font: this.pH[1].font,
			abp: "rgba(100,0,0,0.8)",
			fontSize: this.pH[1].fontSize
		}, this.pH[3] = {
			e2: 0,
			e3: 0,
			eJ: this.eJ,
			gP: this.gP,
			pL: "Back",
			font: this.pH[0].font,
			abp: "rgba(0,0,0,0.8)",
			fontSize: this.pH[0].fontSize
		}, this.pH[4] = {
			e2: 0,
			e3: 0,
			eJ: this.eJ,
			gP: Math.floor(.3 * this.gP),
			pL: "The game was updated!",
			font: this.pH[1].font,
			abp: "rgba(100,0,0,0.8)",
			fontSize: this.pH[1].fontSize
		}, this.pH[5] = {
			e2: 0,
			e3: 0,
			eJ: this.pH[0].eJ,
			gP: Math.floor(.8 * this.gP),
			pL: "Reload",
			font: this.pH[0].font,
			abp: "rgba(0,100,0,0.8)",
			fontSize: this.pH[0].fontSize
		}, this.pH[6] = {
			e2: 0,
			e3: 0,
			eJ: this.pH[1].eJ,
			gP: this.pH[5].gP,
			pL: "Back",
			font: this.pH[0].font,
			abp: "rgba(0,0,0,0.8)",
			fontSize: this.pH[0].fontSize
		}, this.aXX()
	}, this.aXX = function() {
		this.e3 = Math.floor(.54 * eT.gP), this.pH[0].e2 = Math.floor(.5 * eT.eJ - .5 * this.eJ), this.pH[1].e2 = this.pH[0].e2 + this.pH[0].eJ + this.gap, this.pH[2].e2 = this.pH[3].e2 = this.pH[0].e2, this.pH[4].e2 = this.pH[5].e2 = this.pH[0]
			.e2, this.pH[6].e2 = this.pH[1].e2, this.pH[0].e3 = Math.floor(.54 * eT.gP), this.pH[1].e3 = this.pH[0].e3, this.pH[2].e3 = Math.floor((eT.gP - this.pH[2].gP - this.pH[3].gP - this.gap) / 2), this.pH[3].e3 = this.pH[2].e3 + this.pH[2]
			.gP + this.gap, this.pH[4].e3 = Math.floor((eT.gP - this.pH[4].gP - this.pH[5].gP - this.gap) / 2), this.pH[5].e3 = this.pH[6].e3 = this.pH[4].e3 + this.pH[4].gP + this.gap
	}, this.abq = function() {
		abr(0), abr(1)
	}, this.abt = function() {
		abr(2), abr(3)
	}, this.abu = function() {
		abr(4), abr(5), abr(6)
	}, this.sg = function(e2, e3, sb) {
		var c8 = -1;
		return 0 === cA.cg() ? c8 = this.vA(e2, e3, 0, 2) : 3 === cA.cg() ? c8 = this.vA(e2, e3, 3, 1) : 5 === cA.cg() && (c8 = this.vA(e2, e3, 5, 2)), abk !== c8 && (abk = c8, sb) && (cm.cn = !0), -1 !== c8 && (iO.reset(), !0)
	}, this.vA = function(e2, e3, aIA, size) {
		for (var c8 = aIA; c8 < aIA + size; c8++)
			if (e2 >= this.pH[c8].e2 && e3 >= this.pH[c8].e3 && e2 <= this.pH[c8].e2 + this.pH[c8].eJ && e3 <= this.pH[c8].e3 + this.pH[c8].gP) return c8;
		return -1
	}
}

function a8Y() {
	function aby(player, aIr) {
		aIr = kA.kB(g6.z.kC[aIr]), aIr = n0.vo(kA.rY(aIr));
		return !!g6.k7.aBP(player, aIr)
	}

	function abw(player) {
		return g6.mH.mI(player) && !g6.a8V.aE7()
	}
	this.a76 = function(player, k9) {
		return !!abw(player) && -1 !== (k9 = function(player, k9) {
			for (var cI = g6.z.g8, kC = g6.z.kC, rk = g6.z.rk, a1f = kA.a0F(), aFp = -1, c8 = 0; c8 < cI; c8++) {
				var n9 = kA.a0T(k9, kA.kB(kC[c8]));
				n9 < a1f && aB.lk.qj(player, rk[c8] >> 3) && (a1f = n9, aFp = c8)
			}
			return aFp
		}(player, k9)) && !!aby(player, k9) && (er.mG[3] = g6.z.rj[k9], !0)
	}, this.aRG = function(player, k5) {
		return !!abw(player) && !!g6.k7.aId(k5) && !!aby(player, er.mG[2])
	}, this.mS = function(player, k5, abz) {
		return !! function(player, k5, abz) {
			if (abw(player) && g6.k7.aId(k5)) {
				k5 = er.mG[2];
				if (aB.lk.qj(player, g6.z.rk[k5] >> 3)) {
					if (function(player, aIr) {
							return g6.k7.aVK(player, aIr) && (er.dT[0] = g6.a8V.aE9(g6.z.a10[aIr]), er.mG[1] = 6, !0)
						}(player, k5)) return 1;
					var aWr = kA.kB(g6.z.kC[k5]),
						aE2 = g6.k7.aE3(player, aWr);
					if (-1 !== aE2) {
						aE2 = kA.a0T(aE2, aWr);
						if (!(abz && 120 < aE2)) {
							abz = function(aIr, ac3, aWr) {
								var v = g6.z.a10[aIr],
									aIr = g6.z.a11[aIr],
									ac5 = kA.a0T(aWr, v[aIr + 1]);
								if (ac3 <= ac5) return g6.k7.aVL(aWr, v[aIr + 1], ac5, ac3);
								for (var n9 = ac3 - ac5, cI = v.length - 1, c8 = aIr + 1; c8 < cI; c8++) {
									var ac6 = kA.a0T(v[c8], v[c8 + 1]);
									if (n9 <= ac6) return g6.k7.aVL(v[c8], v[c8 + 1], ac6, n9);
									n9 -= ac6
								}
								return v[cI]
							}(k5, aE2, aWr);
							if (g6.mK.mL(player, abz, 1)) return er.mG[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, k5, abz) && (player = er.mG[2], g6.z.a0y[player] = 64 + g6.z.a0y[player] % 64, g6.a1g.gh(k5, g6.z.a0v), !0)
	}
}

function aEe() {
	this.a90 = function(ac7, h, aQy) {
		var tH = ac7.height,
			tN = aB.dE.i9(tH, tH),
			hB = aB.dE.getContext(tN);
		return function(eJ, hB, aQy) {
			hB.fillStyle = aQy, hB.beginPath(), hB.arc(eJ / 2, eJ / 2, .47 * eJ, 0, 2 * Math.PI), hB.fill()
		}(tH, hB, aQy), hB.drawImage(ac7, -h * tH, 0), tN
	}, this.a91 = function(ac9) {
		var hB, it, tH = ac9.height;
		return ac9.width === tH && (it = (hB = aB.dE.getContext(ac9, !0)).getImageData(0, 0, tH, tH), aB.zy.j2(it.data, tH, tH, .9), hB.putImageData(it, 0, 0)), ac9
	}
}

function aUV() {
	var vu, xE, xF, fL;

	function pB() {
		xI(), 2 !== bz.data.aIncomeType && (bz.data.aIncomeData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		2 === bz.data.aIncomeType ? (aB.pr.xM(xF.gY(), bz.data.aIncomeData, 255), aB.pr.max(bz.data.aIncomeData) || (bz.data.aIncomeType = 0)) : 1 !== bz.data.aIncomeType || bz.data.aIncomeValue || (bz.data.aIncomeType = 0)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(88), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(266), L(267), L(106)],
			value: bz.data.aIncomeType
		}, function(h) {
			xI(), 2 !== h || bz.data.aIncomeData || (bz.data.aIncomeData = new Uint8Array(bz.fi)), bz.data.aIncomeType = h, br.cP(22)
		})), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ;
		1 === bz.data.aIncomeType && ((fQ = new fR).fS("Value"), fQ.fX(new fW({
			h: -1,
			value: bz.data.aIncomeValue
		}, 1, 0, function(a6) {
			var value = io.du(Math.floor(a6.target.value), 0, 255);
			a6.target.value = bz.data.aIncomeValue = value
		})), fL.push(fQ))
	}(fL), function(fL) {
		var fQ;
		2 === bz.data.aIncomeType && ((fQ = new fR).fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.aIncomeData, 4)), fQ.fX(xF), fL.push(fQ))
	}(fL), fL))
}

function og() {
	this.ot = 0, this.c4 = 0, this.mapSeed = 0, this.bk = 0, this.pf = 0, this.pg = 0, this.ph = 0, this.c1 = 0, this.ov = 0, this.spawningSeed = 0, this.hq = 0, this.bu = 0, this.oF = [], this.oH = 1048575, this.ou = 0, this.uJ = [{
		c4: 0,
		mapSeed: 0,
		bk: 0,
		gX: 100,
		c1: 0
	}, {
		c4: 1,
		mapSeed: 0,
		bk: 1,
		gX: 200,
		c1: 0
	}, {
		c4: 2,
		mapSeed: 0,
		bk: 2,
		gX: 300,
		c1: 0
	}, {
		c4: 3,
		mapSeed: 0,
		bk: 3,
		gX: 400,
		c1: 0
	}, {
		c4: 0,
		mapSeed: 0,
		bk: 9,
		gX: 500,
		c1: 0
	}, {
		c4: 1,
		mapSeed: 0,
		bk: 10,
		gX: 600,
		c1: 0
	}, {
		c4: 2,
		mapSeed: 0,
		bk: 8,
		gX: 700,
		c1: 0
	}, {
		c4: 3,
		mapSeed: 0,
		bk: 3,
		gX: 800,
		c1: 0
	}]
}

function a3u() {
	function acD() {
		return {
			k0: c2.k0,
			k1: c2.k1,
			a5c: c2.a5c,
			a5Y: c2.a5Y,
			aSN: c2.aSN,
			mp: c2.mp,
			c4: c2.c4,
			mapSeed: c2.mapSeed,
			a5b: c2.a5b
		}
	}

	function acB(c8) {
		return 1 !== c8 && c2.c3(c8) && c8 !== c2.acF()
	}
	this.a5U = 25, this.aR4 = 13, this.h5 = 4096, this.k0 = 0, this.k1 = 0, this.a5c = null, this.a5Y = null, this.aSN = null, this.mp = null, this.c4 = 0, this.mapSeed = 0, this.a5b = !1, this.aSJ = new aS8, this.ge = new aQn, this.mt = new mk, this
		.g = function() {
			this.ge.g()
		}, this.cB = function(map, acA) {
			((map %= this.a5U) !== this.c4 || acB(this.c4) && acA !== this.mapSeed) && (this.a5b = !1, this.aSJ.aSH(), qT.aN5(map), this.c4 = map, this.mapSeed = acA, acB(map) && (c2.ge.gf[map].pt = acA), this.c3(this.c4) ? (map = c2.ge.gf[this.c4],
				this.k0 = map.eJ, this.k1 = map.gP, qT.aN5(map.pt), a2g.cB([this.k0, this.k1, map.ji, map.jf]), aC5(), ms.a5V(), a2g.aHr()) : acC())
		}, this.aOz = function(map, acA) {
			var dw = acD(),
				map = (this.cB(map, acA), this.aSJ.aSH(), acD());
			return acA = dw, c2.k0 = acA.k0, c2.k1 = acA.k1, c2.a5c = acA.a5c, c2.a5Y = acA.a5Y, c2.aSN = acA.aSN, c2.mp = acA.mp, c2.c4 = acA.c4, c2.mapSeed = acA.mapSeed, c2.a5b = acA.a5b, map
		}, this.aDu = function(canvas) {
			canvas && this.a5c !== canvas && (this.k0 = canvas.width, this.k1 = canvas.height, this.a5c = canvas, this.a5Y = this.a5c.getContext("2d", {
				alpha: !1
			}), this.it = this.a5Y.getImageData(0, 0, this.k0, this.k1), this.mp = this.it.data, this.c4 = this.acF(), this.mapSeed = 0, c2.ge.gf[this.c4].name = bz.data.mapName)
		}, this.nL = function(c8) {
			return 3 === c8 || 7 === c8 || 9 === c8 || 21 === c8 || c8 === this.acF()
		}, this.aIR = function(c8) {
			return 2 === c8 || 7 === c8 || 9 === c8 || 20 === c8
		}, this.a5Z = function(c8) {
			return 1 === c8
		}, this.acF = function() {
			return this.a5U
		}, this.c3 = function(c8) {
			return void 0 === this.ge.gf[c8].aR3
		}, this.aDt = function(hm) {
			return 0 === hm.mapType ? hm.mapProceduralIndex < 10 ? hm.mapProceduralIndex : 10 + hm.mapProceduralIndex : 1 === hm.mapType ? 10 <= hm.mapRealisticIndex ? 22 + hm.mapRealisticIndex - 10 : hm.mapRealisticIndex + 10 : void 0
		}, this.c5 = function(hm, acG) {
			0 === hm.mapType ? hm.mapProceduralIndex = acG < 10 ? acG : acG - 10 : 1 === hm.mapType && (hm.mapRealisticIndex = acG - (22 <= acG ? 12 : 10))
		}
}

function acH() {
	this.aRe = function(mV, player) {
		iU.a6d(bz.cr, player, mV), y.lC.aW3(mV, player)
	}, this.a6J = function(player) {
		iU.a6r(player, 0), y.lC.aW6(player)
	}, this.aSx = function(aSn, player) {
		iU.a6s(aSn, player), y.lC.aW7(aSn, player)
	}, this.aAO = function() {
		bz.wx || bz.co || y.aUM.aAO()
	}
}

function a3H() {
	var dT, aBU, aBS, aOV, gap, acI, acJ, acK, acL, acM, gQ, aCM, rR, aXt, aGw, wh, acN;

	function acP() {
		aOV = Math.floor(.2 * (cZ.cb.eR() ? .07 : .035) * eT.eU), aOV = im(cZ.cb.eR() ? 3 : 1, aOV);
		var acQ = eT.eJ / (dT.length + gap);
		aOV = aOV < acQ ? acQ : aOV, aGw = Math.floor((1 - gap) * aOV), aBU = 0, acR()
	}

	function acR() {
		aBU = (aBU = aBU < -20 ? -20 : aBU) > (dT.length - 15) * aOV ? (dT.length - 15) * aOV : aBU, acJ = Math.floor(aBU / aOV), acK = (acK = acJ + Math.floor(eT.eJ / aOV)) > dT.length - 1 ? dT.length - 1 : acK, acJ = (acJ = acK < acJ ? acK : acJ) <
			0 ? 0 : acJ;
		var dU = acK;
		acI = aBS / dT[dU];
		for (var c8 = acK - 1; acJ <= c8; c8--) dT[c8] > dT[dU] && (dU = c8, acI = aBS / Math.pow(dT[c8], aXt))
	}

	function acT(e2) {
		e2 = Math.floor((aBU + eT.eJ - e2 - gap * aOV) / aOV);
		return (e2 = e2 < -1 ? -1 : -1 === e2 ? 0 : e2 > dT.length - 1 ? -1 : e2) !== acL && (acL = e2, -1 === wh && 0 === acL && iO.aVU && (wh = setInterval(acU, 100)), 1)
	}

	function acV(c8) {
		var abK = Math.floor(acI * Math.pow(dT[c8], aXt));
		fD.fillRect(aBU + eT.eJ - (c8 + 1) * aOV, eT.gP - abK, aGw, abK)
	}

	function acU() {
		var es;
		0 !== (acL = 8 === cA.cg() ? -1 : acL) ? (acN = (new Date).getTime(), clearInterval(wh), wh = -1) : (es = dT[1] / 864e3, -1 !== acN && (es += ((new Date).getTime() - acN) * dT[1] / 864e5, acN = -1), 0 < es && (dT[0] += Math.floor(es), cm
			.cn = !0))
	}
	this.aVU = !1, this.g = function() {
		acN = wh = -1, acL = -(aXt = 1), this.aXW = !1, rR = 0, aCM = new Date, aBU = 0, gap = .3, dT = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aBS = Math.floor(.15 * eT.gP), acM = (acM = Math.floor((cZ.cb.eR() ? .018 : .0137) * eT.eU)) < 2 ? 2 : acM, gQ = aB.dE.f9(1, acM), acP()
	}, this.aGl = function(abI) {
		var c8;
		for (this.aVU = !0, c8 = 0; c8 < abI.length; c8++) dT.unshift(abI[c8]);
		acP(), cm.cn = !0
	}, this.aXX = function() {
		acR()
	}, this.sg = function(e2, e3) {
		e3 > eT.gP - .6 * aBS ? this.aXW ? e2 !== rR && (aBU += e2 - rR, rR = e2, acR(), acT(e2), this.aXW = -1 !== acL, cm.cn = !0) : acT(e2) && (cm.cn = !0) : this.reset()
	}, this.reset = function() {
		-1 !== acL && (this.aXW = !1, acL = -1, cm.cn = !0)
	}, this.ue = function(e2, deltaY) {
		-1 !== acL && (aBU += Math.floor(deltaY), acR(), acT(e2), cm.cn = !0)
	}, this.ub = function(e2, e3) {
		this.sg(e2, e3), -1 !== acL && (rR = e2, this.aXW = !0)
	}, this.v5 = function() {
		-1 !== acL && (this.aXW = !1)
	}, this.fC = function() {
		fD.fillStyle = dK.aO;
		for (var acX, month, ee, ij, aca, acb, kF, acc, acd, c8 = acK; acJ <= c8; c8--) acV(c8);
		this.aVU && 0 === acJ && (fD.fillStyle = dK.aw, acV(0)), -1 !== acL && (fD.fillStyle = dK.aN, acV(acL)), -1 !== acL && (fD.font = gQ, aB.dE.textBaseline(fD, 2), (ee = new Date).setTime(aCM.getTime() - 1e3 * acL * 60 * 60 * 24), month =
			"month", acX = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ee), acX = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ee)), acX = acX + ", " + ee.getUTCDate() + " " + month + " " + ee.getFullYear(), month = 1 === dT[acL] ? L(548) : L(549), month = aB.oB.sV(dT[acL]) + " " + month, ee = Math.floor(fD.measureText(acX).width), ij = Math
			.floor(fD.measureText(month).width), aca = Math.floor(.5 * (ee + acM)), acb = (acb = aBU + eT.eJ - (acL + 1) * aOV) < aca ? aca : acb > eT.eJ - aca ? eT.eJ - aca : acb, kF = eT.gP - Math.floor(acI * Math.pow(dT[acL], aXt)), acc =
			Math.floor(1.1 * acM), acd = kF > eT.gP - acc ? eT.gP - acc : kF, fD.fillStyle = dK.aI, fD.fillRect(eT.eJ - ij - acM, acd - acc, ij + acM, acc), fD.fillRect(acb - aca, eT.gP - acc, ee + acM, acc), fD.fillStyle = dK.aL, aB.dE
			.textAlign(fD, 2), fD.fillText(month, Math.floor(eT.eJ - .5 * acM), acd), aB.dE.textAlign(fD, 1), fD.fillText(acX, acb, eT.gP), fD.strokeStyle = dK.aP, fD.lineWidth = 1, fD.beginPath(), fD.moveTo(0, kF), fD.lineTo(eT.eJ, kF), fD
			.closePath(), fD.stroke())
	}
}

function a8K() {
	var tJ = 32,
		tK = new Array(2);

	function i9(aA) {
		var e2, e3, k9, e5, e4, tH = tJ,
			tN = aB.dE.i9(tH, tH),
			hB = aB.dE.getContext(tN, !0),
			it = aB.dE.getImageData(hB, tH, tH),
			iv = it.data,
			dU = (tH >> 1) - .5,
			aQ8 = Math.sqrt(dU * dU);
		for (iv.fill(255), e3 = 0; e3 < tH; e3++)
			for (e2 = 0; e2 < tH; e2++) e4 = e2 - dU, e5 = e3 - dU, k9 = 4 * (e3 * tH + e2), e4 = 714 * (aQ8 - Math.sqrt(e4 * e4 + e5 * e5)) / aQ8, iv[2 + k9] = aA, iv[3 + k9] = 255 < e4 ? 0 : e4;
		return hB.putImageData(it, 0, 0), tN
	}
	this.ace = -1, this.g = function() {
		this.ace = -1, tK[0] || (tK[0] = i9(255), tK[1] = i9(0))
	}, this.aRx = function(hB, mx, e2, e3, ey, c8) {
		aB.lk.lm(bz.cr) && (hB.setTransform(mx *= 4 / 3 * .625, 0, 0, mx, e2 - (ey *= 4 / 3), e3 - ey), hB.drawImage(tK[+(g6.z.rj[c8] === this.ace)], 0, 0))
	}
}

function a3j() {
	this.ct = new aRB, this.lk = new acH, this.g9 = new lj, this.aAy = new fr, this.aWv = new aZU
}

function o9(a9U, acf, acg, ach) {
	var self;
	this.oA = document.createElement("span"), (self = this).oA.textContent = a9U, self.oA.style.color = dK.aL, self.oA.style.position = "absolute", self.oA.style.font = "inherit", ach ? self.oA.style.bottom = "0.06em" : self.oA.style.top = "0.12em",
		acg ? self.oA.style.left = "0.2em" : self.oA.style.right = "0.2em", self.oA.style.fontSize = "0.6em", self.oA.style.pointerEvents = "none", self.oA.style.whiteSpace = "pre", acf.style.position = "relative", acf.style.overflow = "hidden", acf
		.appendChild(self.oA)
}

function a3Z() {
	var aci, dT;
	this.g = function() {
		for (var c8 = (dT = new Uint16Array(101)).length - 1; 0 <= c8; c8--) dT[c8] = io.dp(32768 * c8, 100);
		this.aN5(0)
	}, this.value = function(es) {
		return dT[es]
	}, this.aSK = function() {
		return io.dp(aci - 1, 2)
	}, this.aN5 = function(pt) {
		aci = 2 * pt % 32768 + 1
	}, this.random = function() {
		return aci = 167 * aci % 32768
	}, this.u4 = function(a6f) {
		return io.dp(a6f * this.random(), 32768)
	}, this.qU = function(es) {
		return 0 !== es && this.random() < this.value(es)
	}, this.a0n = function(dq, dr) {
		return dq + this.u4(dr - dq)
	}
}

function a8I() {
	this.acj = 32, this.e2 = 0, this.e3 = 0, this.a0g = 0, this.ack = 0, this.acl = 4, this.a0f = null, this.a1d = new Int16Array(9), this.g = function() {
		this.a0g = 1 + io.dp(c2.k0 - 1, this.acj), this.ack = 1 + io.dp(c2.k1 - 1, this.acj), this.a0f = new Array(this.a0g * this.ack), aB.pr.aM2(this.a0f);
		var e2, e3, a1d = this.a1d,
			eJ = this.a0g;
		for (e2 = -1; e2 <= 1; e2++)
			for (e3 = -1; e3 <= 1; e3++) a1d[3 * (1 + e3) + 1 + e2] = e3 * eJ + e2
	}, this.mP = function(acn, c8) {
		return this.a0f[c8].push(acn), this.a0f[c8].length - 1
	}, this.a1R = function(aco, a15, a1I) {
		var acp, acq, a15 = kA.a0e(a15),
			a1I = kA.a0e(a1I);
		return a15 === a1I ? aco : (acp = this.a0f[a15].pop(), this.a0f[a15].length === aco ? this.mP(acp, a1I) : (acq = this.a0f[a15][aco], this.a0f[a15][aco] = acp, g6.z.a0x[acp] = aco, this.mP(acq, a1I)))
	}
}

function aEc() {
	var acr = {
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
		acs = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.oC = function(fB) {
		return fB.replace(acs, function(match) {
			return acr[match] || match
		})
	}, this.sV = function(dt) {
		var c8, aY2, act, acu, acv;
		if (dt < 0) return "-" + this.sV(Math.abs(dt));
		if (dt < 1e3) return dt.toString();
		for (aY2 = Math.floor(Math.log(dt + .5) / Math.log(10)) + 1, act = Math.floor((aY2 - 1) / 3), acv = (acu = dt.toString()).substring(aY2 - 3, aY2), c8 = 1; c8 < act; c8++) acv = acu.substring(aY2 - 3 * (c8 + 1), aY2 - 3 * c8) + " " + acv;
		return acu.substring(0, aY2 - 3 * act) + " " + acv
	}, this.a6y = function(es, aY2) {
		return es.toFixed(aY2) + "%"
	}, this.acw = function(dt, acx) {
		return dt.toFixed(io.du(Math.floor((void 0 === acx ? 3 : acx) - Math.log10(Math.max(dt, 1))), 0, 8))
	}, this.aMV = function(dt, h8, aY2) {
		return (dt * h8).toFixed(aY2)
	}, this.a4g = function(username) {
		var n7, n6 = username.indexOf("[");
		return !(n6 < 0) && 1 < (n7 = username.indexOf("]")) - n6 && n7 - n6 <= 8 ? username.substring(n6 + 1, n7).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a4g;
	this.a6N = function(dZ) {
		for (var dq = Math.floor(.5 * dZ.length + .5), fs = Math.floor(.5 * (dq - 1)), c8 = 0; c8 < fs; c8++)
			for (var dr = -1; dr < 2; dr += 2) {
				var aA = dq + dr * c8;
				if (" " === dZ[aA]) return [this.a4d(dZ.substring(0, aA)), this.acy(dZ.substring(aA))]
			}
		return [dZ.substring(0, dq), dZ.substring(dq)]
	}, this.acy = function(dZ) {
		for (var cI = dZ.length, c8 = 0; c8 < cI; c8++)
			if (" " !== dZ[c8]) return dZ.substring(c8);
		return dZ
	}, this.a4d = function(dZ) {
		for (var c8 = dZ.length - 1; 0 <= c8; c8--)
			if (" " !== dZ[c8]) return dZ.substring(0, c8 + 1);
		return dZ
	}, this.acz = function(dZ, vX) {
		return dZ.split("(")[0] + "(🧈 " + vX.toFixed(2) + ")"
	}, this.startsWith = function(dZ, ad0) {
		return dZ.substring(0, ad0.length) === ad0
	}, this.pU = function(dZ, ad0) {
		var cI = dZ.length;
		return dZ.substring(cI - ad0.length, cI) === ad0
	}, this.xT = function(dT, ad1, ad2) {
		var dZ = "",
			cI = dT.length - 1;
		ad2 = ad2 || "";
		for (var c8 = 0; c8 < cI; c8++) dZ += ad2 + dT[c8] + ad2 + ",", (c8 + 1) % ad1 == 0 && (dZ += "\n");
		return dZ += ad2 + dT[cI] + ad2
	}, this.aGS = function(dZ, tX, tY) {
		return dZ.replace(new RegExp(tX, "g"), tY)
	}
}

function a3T() {
	var ad3;

	function ad4(player) {
		var ey, aal;
		return aB.lk.qD(player) && player < bz.fj ? 0 : (ey = ad3[io.dp((bz.fi - 1) * ef.eg[player], bz.rE)], cm.lJ() < 1920 && (ey = Math.max(io.dp(100 * (13440 - 6 * cm.lJ()), 1920), ey)), aal = mD.a7C(player), ef.g5[player] > aal && (ey -= io.dp(
			2 * ey * (ef.g5[player] - aal), aal)), Math.min(Math.max(ey, 0), 700))
	}

	function adF(h8) {
		for (var eg = ef.eg, em = en.em, c8 = en.ep - 1; 0 <= c8; c8--) {
			var es = em[c8];
			aB.lk.qr(es, io.dp(h8 * eg[es], 32))
		}
	}

	function adC() {
		var a4X = bz.cr;
		er.aBm[0] = ef.g5[a4X] - ef.jd[a4X]
	}

	function adE(h) {
		var a4X = bz.cr,
			a4X = ef.g5[a4X] - ef.jd[a4X] - er.aBm[0];
		mD.aPU += a4X, ch.qa[h] += a4X
	}
	this.aPU = 0, this.a4L = function() {
		for (var cI = bz.fi, c8 = (ad3 = new Uint16Array(cI), 0); c8 < cI; c8++) ad3[c8] = 100 + aYC(io.dp(25600 * c8, cI - 4), 9)
	}, this.g = function() {
		(this.aPU = 0) === bz.data.iIncomeType ? this.vZ = ad4 : 1 === bz.data.iIncomeType ? this.vZ = function(player) {
			return io.dp(bz.data.iIncomeValue * ad4(player), 64)
		} : this.vZ = function(player) {
			return io.dp(bz.data.iIncomeData[player] * ad4(player), 64)
		}
	}, this.dI = function() {
		if (cm.lJ() % 10 == 9 && (mD.aPU = 0, function() {
				adC();
				for (var em = en.em, g5 = ef.g5, c8 = en.ep - 1; 0 <= c8; c8--) {
					var es = em[c8],
						adD = io.dp(mD.vZ(es) * g5[es], 1e4);
					aB.lk.qr(es, Math.max(adD, 1))
				}
				adE(9)
			}(), function() {
				if (0 !== bz.data.aIncomeType) {
					if (adC(), 1 === bz.data.aIncomeType)
						for (var eg = ef.eg, em = en.em, h8 = bz.data.aIncomeValue, c8 = en.ep - 1; 0 <= c8; c8--) {
							var es = em[c8];
							aB.lk.qr(es, io.dp(h8 * eg[es], 128))
						} else 2 === bz.data.aIncomeType && function() {
							for (var eg = ef.eg, em = en.em, h8 = bz.data.aIncomeData, c8 = en.ep - 1; 0 <= c8; c8--) {
								var es = em[c8];
								aB.lk.qr(es, io.dp(h8[es] * eg[es], 128))
							}
						}();
					adE(18)
				}
			}(), cm.lJ() % 100 == 99)) {
			if (adC(), 0 === bz.data.tIncomeType) adF(32);
			else if (1 === bz.data.tIncomeType) adF(bz.data.tIncomeValue);
			else
				for (var eg = ef.eg, em = en.em, h8 = bz.data.tIncomeData, c8 = en.ep - 1; 0 <= c8; c8--) {
					var es = em[c8];
					aB.lk.qr(es, io.dp(h8[es] * eg[es], 32))
				}
			adE(8)
		}
	}, this.a7C = function(player) {
		return Math.min(100 * ef.eg[player], bz.aN0)
	}, this.mE = function(player, m7) {
		vw.a5n(player, m7, er.mC[0], 0), aB.lk.qr(m7, er.mC[0]), ch.vU(player, m7), iY.sO(player, er.mC[0] + er.mC[1]), iY.sR(m7, er.mC[0]), aB.lk.m4(player)
	}, this.ad6 = function() {
		for (var cI = en.ep, wG = en.em, dU = 0, qt = ef.g5, c8 = 0; c8 < cI; c8++) dU += qt[wG[c8]];
		return dU
	}, this.ad7 = function(ad8) {
		for (var es, cI = en.ep, wG = en.em, dU = 0, qt = ef.g5, eo = eb.eo, c8 = 0; c8 < cI; c8++) eo[es = wG[c8]] === ad8 && (dU += qt[es]);
		return dU
	}
}

function aQH(a9U, acf, adJ, adK, adL) {
	var self;
	this.oA = document.createElement("span"), this.resize = function() {
			this.oA.style.fontSize = ((adK - adJ) * acf.offsetHeight).toFixed(1) + "px"
		}, (self = this).oA.textContent = a9U, self.oA.style.color = dK.aL, self.oA.style.font = "inherit", self.oA.style.margin = "0.1em 0.6em", self.oA.style.pointerEvents = "none", adL && (self.oA.style.fontWeight = "bold"), self.oA.style
		.whiteSpace = "nowrap", self.oA.style.display = "block", acf.appendChild(self.oA)
}

function a3E() {
	var a5m, adM, aOI, a9W, aOB, adN = 0,
		adO = 0;

	function adQ(c8) {
		var adR = !0,
			tX = dK.aL,
			eJ = (1 === a5m[c8].id ? a5m[c8].eL.fillStyle = dK.bF : a5m[c8].lt === bz.fi ? a5m[c8].eL.fillStyle = dK.aW : (n0.a27(a5m[c8].lt), a5m[c8].eL.fillStyle = aB.color.aF(er.a28[0], er.a28[1], er.a28[2], .87), 400 < aB.pr.a7F(er.a28, 0, 2) &&
				(adR = !1, tX = dK.aC)), a5m[c8].canvas.width),
			eK = (a5m[c8].eL.clearRect(0, 0, eJ, a9W), a5m[c8].eL.fillRect(0, 0, eJ, a9W), a5m[c8].eL.fillStyle = tX, ! function(eL, eJ, a9W) {
				eL.fillRect(0, 0, eJ, 1), eL.fillRect(0, a9W - 1, eJ, 1), eL.fillRect(0, 0, 1, a9W), eL.fillRect(eJ - 1, 0, 1, a9W)
			}(a5m[c8].eL, eJ, a9W), adM + 2 * a9W < eJ && (a5m[c8].eL.fillRect(eJ - adM - a9W, 0, 1, a9W), a5m[c8].eL.fillText(ef.gj[a5m[c8].lt], Math.floor((eJ - adM) / 2), Math.floor(.57 * a9W))), 0 !== a5m[c8].id ? 0 : a9W);
		a5m[c8].eL.fillText(aB.oB.sV(a5m[c8].me), Math.floor(eJ - adM / 2 - eK), Math.floor(.57 * a9W)),
			function(c8, eJ, eK, adR) {
				a5m[c8].eL.fillStyle = adR ? dK.aN : dK.aJ;
				adR = Math.floor(adM * a5m[c8].me / a5m[c8].adW);
				a5m[c8].eL.fillRect(Math.floor(eJ - adM - eK), a9W - aOB, adR, aOB)
			}(c8, eJ, eK, adR), 0 === a5m[c8].id ? (adU(c8, eJ, adR, tX), function(c8, eJ, adR) {
				a5m[c8].eL.strokeStyle = adR ? dK.ad : dK.an, a5m[c8].eL.fillRect(a9W, 0, 1, a9W);
				adR = eJ - a9W;
				a5m[c8].eL.beginPath(), a5m[c8].eL.moveTo(Math.floor(.3 * a9W + adR), Math.floor(a9W / 2)), a5m[c8].eL.lineTo(Math.floor(a9W - .3 * a9W + 0 + adR), Math.floor(a9W / 2)), a5m[c8].eL.stroke(), a5m[c8].eL.beginPath(), a5m[c8].eL
					.moveTo(Math.floor(a9W / 2 + adR), Math.floor(.3 * a9W)), a5m[c8].eL.lineTo(Math.floor(a9W / 2 + adR), Math.floor(a9W - .3 * a9W + 0)), a5m[c8].eL.stroke()
			}(c8, eJ, adR)) : adU(c8, 2 * a9W, adR, tX)
	}

	function adU(c8, eJ, adR, tX) {
		a5m[c8].eL.strokeStyle = a5m[c8].adX ? dK.aU : adR ? dK.au : dK.av, a5m[c8].eL.fillStyle = tX, a5m[c8].eL.fillRect(eJ - a9W, 0, 1, a9W), a5m[c8].eL.lineWidth = Math.max(Math.floor(a9W / 12), 3), a5m[c8].eL.lineCap = "round";
		adR = .35;
		eJ = a9W + 1, a5m[c8].eL.beginPath(), a5m[c8].eL.moveTo(Math.floor(eJ - adR * a9W + 0), Math.floor(adR * a9W)), a5m[c8].eL.lineTo(Math.floor(eJ - a9W + adR * a9W), Math.floor(a9W - adR * a9W + 0)), a5m[c8].eL.stroke(), a5m[c8].eL.beginPath(),
			a5m[c8].eL.moveTo(Math.floor(eJ - a9W + adR * a9W), Math.floor(adR * a9W)), a5m[c8].eL.lineTo(Math.floor(eJ - adR * a9W + 0), Math.floor(a9W - adR * a9W + 0)), a5m[c8].eL.stroke()
	}

	function adi(dT, aPB) {
		for (var me, c8 = aPB - 1; 0 <= c8; c8--) me = ly.aFA(bz.cr, c8), dT[c8].me !== me && (dT[c8].me = me, dT[c8].adW = Math.max(me, dT[c8].adW), dT[c8].a8u = !0)
	}

	function adl(dT, aPC) {
		for (var x4 = bz.cr << 3, ri = g6.z.ri, a0y = g6.z.a0y, a12 = g6.z.a12, c8 = aPC - 1; 0 <= c8; c8--) {
			var aVI = a12[x4 + c8],
				me = ri[aVI];
			dT[c8].me !== me ? (dT[c8].me = me, dT[c8].adW = Math.max(me, dT[c8].adW), dT[c8].a8u = !0) : dT[c8].adX || a0y[aVI] % 64 != 5 || (dT[c8].adX = !0, dT[c8].a8u = !0)
		}
	}

	function adP(vy) {
		vy.canvas = document.createElement("canvas"), c2.a5Y.font = aOI;
		var eJ = adM;
		vy.lt < bz.fi && 0 === vy.id && (eJ += Math.floor(c2.a5Y.measureText(ef.gj[vy.lt] + "000").width)), eJ += a9W, 0 === vy.id && (eJ += a9W), vy.canvas.width = eJ, vy.canvas.height = a9W, vy.eL = vy.canvas.getContext("2d", {
			alpha: !0
		}), vy.eL.font = aOI, aB.dE.textBaseline(vy.eL, 1), aB.dE.textAlign(vy.eL, 1)
	}

	function add(c8) {
		return iR.aPP() ? eT.eJ - a5m[c8].canvas.width - dk.gap : iR.e2
	}

	function ade(c8) {
		return Math.floor(2 * dk.gap + (iR.aPP() ? iS.gP + dk.gap : 0) + iR.gP + c8 * (1.3 * a9W))
	}
	this.g = function() {
		adN = adO = 0, a5m = [], this.resize()
	}, this.resize = function() {
		aOI = iU.gQ, a9W = iU.fontSize + 5, a9W = Math.floor(1.25 * a9W), cZ.cb.eR() && (a9W = Math.floor(1.25 * a9W)), aOB = Math.floor(.15 * a9W), c2.a5Y.font = aOI, adM = Math.floor(c2.a5Y.measureText("02 000 000 0000").width);
		for (var c8 = a5m.length - 1; 0 <= c8; c8--) adP(a5m[c8]), adQ(c8)
	}, this.sb = function() {
		for (var c8 = a5m.length - 1; 0 <= c8; c8--) a5m[c8].a8u && (a5m[c8].a8u = !1, adQ(c8))
	}, this.ub = function(si, sj) {
		if (2 !== bz.gb && 0 !== ef.fo[bz.cr] && !bz.co && !aB.lk.qD(bz.cr))
			for (var adY, adZ, ada, adb = cZ.cb.eR() ? a9W : 0, adc = cZ.cb.eR() ? Math.floor(.15 * a9W) : 0, c8 = a5m.length - 1; 0 <= c8; c8--)
				if (adY = add(c8), adZ = ade(c8), ada = a5m[c8].canvas.width, adZ - adc <= sj && sj <= adZ + a9W + adc) {
					if (adY - adb <= si && si <= adY + a9W + adb) return a5m[c8].adX || (a5m[c8].a8u = !0, a5m[c8].adX = !0, 0 === a5m[c8].id ? cs.ct.gF(a5m[c8].lt) : cs.ct.mQ(a5m[c8].lt)), !0;
					if (0 === a5m[c8].id && adY + ada - a9W - adb <= si && si <= adY + ada + adb) return cy.cz(3), cs.ct.gB(gp.a77(), a5m[c8].lt), !0
				} return !1
	}, this.dI = function() {
		var n2, n5, dT, aPB;
		0 === ef.fo[bz.cr] || aB.lk.qD(bz.cr) && !bz.co || (n2 = a5m.slice(0, adN), n5 = a5m.slice(adN, adN + adO), dT = n2, aPB = ly.a9M(bz.cr), function(dT, aPB) {
			if (adN !== aPB) return 1;
			for (var c8 = aPB - 1; 0 <= c8; c8--)
				if (dT[c8].lt !== ly.aFB(bz.cr, c8)) return 1;
			return
		}(dT, aPB) ? adi(dT = function(dT, aPB) {
			var c8, lt, dr, me, a66 = [];
			loop: for (c8 = 0; c8 < aPB; c8++) {
				for (lt = ly.aFB(bz.cr, c8), dr = 0; dr < dT.length; dr++)
					if (dT[dr].lt === lt) {
						a66.push(dT.splice(dr, 1)[0]);
						continue loop
					} me = ly.aFA(bz.cr, c8), adP(me = {
					lt: lt,
					me: me,
					adW: me,
					id: 0,
					a8u: !0,
					adX: !1,
					canvas: null,
					eL: null
				}), a66.push(me)
			}
			return a66
		}(dT, aPB), aPB) : adi(dT, aPB), n2 = dT, n5 = function(dT) {
			var aPC = g6.z.g7[bz.cr];
			return function(dT, aPC) {
				if (adO !== aPC) return 1;
				for (var x4 = bz.cr << 3, rj = g6.z.rj, a12 = g6.z.a12, c8 = aPC - 1; 0 <= c8; c8--) {
					var aVI = a12[x4 + c8];
					if (dT[c8].lt !== rj[aVI]) return 1
				}
				return
			}(dT, aPC) ? adl(dT = function(dT, aPC) {
				var c8, lt, dr, a66 = [],
					x4 = bz.cr << 3,
					rj = g6.z.rj,
					ri = g6.z.ri,
					a12 = g6.z.a12;
				loop: for (c8 = 0; c8 < aPC; c8++) {
					var aVI = a12[x4 + c8];
					for (lt = rj[aVI], dr = 0; dr < dT.length; dr++)
						if (dT[dr].lt === lt) {
							a66.push(dT.splice(dr, 1)[0]);
							continue loop
						} aVI = ri[aVI], adP(aVI = {
						lt: lt,
						me: aVI,
						adW: aVI,
						id: 1,
						a8u: !0,
						adX: !1,
						canvas: null,
						eL: null
					}), a66.push(aVI)
				}
				return a66
			}(dT, aPC), aPC) : adl(dT, aPC), dT
		}(n5), adN = n2.length, adO = n5.length, a5m = n2.concat(n5))
	}, this.fC = function() {
		if (0 !== ef.fo[bz.cr] && (!aB.lk.qD(bz.cr) || bz.co))
			for (var c8 = a5m.length - 1; 0 <= c8; c8--) fD.drawImage(a5m[c8].canvas, add(c8), ade(c8))
	}
}

function aUX() {
	var vu, xE, xF, fL;

	function pB() {
		xI(), 2 !== bz.data.sResourcesType && (bz.data.sResourcesData = null), br.xJ()[19] = null, br.kl()
	}

	function xI() {
		2 === bz.data.sResourcesType && aB.pr.xM(xF.gY(), bz.data.sResourcesData, 2047)
	}
	this.show = function() {
		vu.show(), this.resize()
	}, this.u = function() {
		vu.u()
	}, this.resize = function() {
		vu.resize(), xE.resize()
	}, this.dM = function(aA) {
		2 === aA && vu.dN[0].dO()
	}, vu = new cd(L(429), [new cN("⬅️ " + L(14), pB)]), xE = new fJ(vu.cf, (function(fL) {
		var fQ = new fR;
		fQ.fS(L(104)), fQ.fc(new fd({
			fb: [L(266), L(267), L(106)],
			value: bz.data.sResourcesType
		}, function(h) {
			xI(), 2 !== h || bz.data.sResourcesData || (bz.data.sResourcesData = new Uint16Array(bz.fi)), bz.data.sResourcesType = h, br.cP(28)
		})), fL.push(fQ)
	}(fL = []), function(fL) {
		var fQ;
		1 === bz.data.sResourcesType && ((fQ = new fR).fS("Value"), fQ.fX(new fW({
			h: -1,
			value: bz.data.sResourcesValue
		}, 1, 0, function(a6) {
			var value = io.du(Math.floor(a6.target.value), 0, 2047);
			a6.target.value = bz.data.sResourcesValue = value
		})), fL.push(fQ))
	}(fL), function(fL) {
		var fQ;
		2 === bz.data.sResourcesType && ((fQ = new fR).fS("Data"), (xF = new xR(0, 1, 0, 1)).xS(aB.oB.xT(bz.data.sResourcesData, 2)), fQ.fX(xF), fL.push(fQ))
	}(fL), fL))
}

function a40() {
	this.dO = new aR5, this.d2 = new oV, this.db = new aDX, this.z = new aZD, this.wc = new aBy, this.g = function() {
		this.d2.g(), (new aO3).g(), this.wc.g(), this.z.aZH()
	}
}

function fW(aDM, type, adn, ado) {
	var a6;
	this.a6 = document.createElement("input"), (a6 = this.a6).type = type ? "number" : "text", a6.id = "input" + br.z.a5J++, a6.value = aDM.value, a6.style.width = "100%", a6.style.userSelect = "none", a6.style.outline = "none", a6.style.resize =
		"none", a6.style.border = "inherit", a6.style.font = "inherit", a6.style.color = dK.aL, a6.style.backgroundColor = dK.aE, a6.style.fontSize = "1em", a6.style.padding = "0.1em 0.2em", a6.addEventListener("focus", function() {
			eT.i6++
		}), a6.addEventListener("blur", function() {
			eT.i6--, -1 !== aDM.h && d1.db.dc(aDM.h, a6.value)
		}), a6.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== aDM.h && d1.db.dc(aDM.h, a6.value), adn ? adn() : a6.blur())
		}), ado && a6.addEventListener("input", function(hm) {
			ado(hm)
		})
}

function a4J() {
	var gap, aXh, e2 = [0, 0, 0, 0, 0],
		e3 = [0, 0, 0, 0, 0],
		h8 = [1, 1, 1, 1, 1],
		dt = [!0, !0, !0, !1, !1],
		aA = (this.dy = [!0, !0, !0, !1, !1], null);
	this.aDA = function(tN, adp) {
		aA = tN, dt = adp, aXh = [d7.d8, d7.d9, d7.aBG, d7.aBG, d7.aBH], this.g()
	}, this.g = function() {
		if (iH.iI()) {
			var c8, eK = Math.floor((cZ.cb.eR() ? .261 : .195) * eT.eU),
				ij = Math.floor(.9 * eK),
				ii = Math.floor(.17 * ij);
			if (gap = cZ.cb.eR() ? 2 * dk.gap : dk.gap, h8[0] = eK / aA[0].width, h8[1] = ij / aA[1].width, h8[2] = ii / aA[2].height, h8[3] = ii / aA[3].height, h8[4] = ii / aA[4].height, h8[2] *= 1.7, h8[3] *= 1.07, e2[0] = gap, e2[1] = gap,
				e2[2] = gap, e2[3] = gap, e2[4] = Math.floor(2 * gap + h8[3] * aA[3].width), e3[0] = gap, e3[1] = e3[0] + gap + h8[0] * aA[0].height, e3[2] = e3[1] + gap + h8[1] * aA[1].height, e3[3] = e3[2] + gap + h8[2] * aA[2].height, e3[4] =
				e3[3], !dt[0])
				for (c8 = 0; c8 < 5; c8++) e3[c8] -= h8[0] * aA[0].height + gap;
			if (!dt[1])
				for (c8 = 2; c8 < 5; c8++) e3[c8] -= h8[1] * aA[1].height + gap
		}
	}, this.v2 = function() {
		return !(7 === cA.cg() && cZ.cb.eR())
	}, this.ub = function(a0M, a0N) {
		if (aA && this.v2())
			for (var c8 = dt.length - 1; 0 <= c8; c8--)
				if (dt[c8] && this.dy[c8] && e2[c8] < a0M && e3[c8] < a0N && a0M < e2[c8] + h8[c8] * aA[c8].width && a0N < e3[c8] + h8[c8] * aA[c8].height) return br.cP(9, br.bs, new za(L(550), aB.dE.aTs(aXh[c8]))), !0;
		return !1
	}, this.fC = function() {
		if (aA && this.v2()) {
			var c8;
			for (fD.imageSmoothingEnabled = !0, c8 = 0; c8 < 5; c8++) dt[c8] && this.dy[c8] && (fD.setTransform(h8[c8], 0, 0, h8[c8], e2[c8], e3[c8]), fD.drawImage(aA[c8], 0, 0));
			fD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function yw(adq, adr, ads) {
	this.e2 = 0, this.e3 = 0, this.eJ = 0, this.gP = 0, this.resize = function() {
		this.gP = Math.min(aB.dE.aNW(ads || .5) * adq[1] * eT.eU, eT.gP - 2 * dk.gap), this.eJ = Math.min(this.gP * (adq[0] / adq[1]), eT.eJ - 2 * dk.gap), this.gP = adq[1] * this.eJ / adq[0], this.e2 = dk.gap + adr[0] * (eT.eJ - this.eJ - 2 * dk
			.gap), this.e3 = dk.gap + adr[1] * (eT.gP - this.gP - 2 * dk.gap)
	}, this.adt = function() {
		return this.e2 + .5 * this.eJ
	}
}

function a3U() {
	this.a9A = function() {
		var adw;
		return !(en.ep < 3 || ef.eg[eh[0]] >= bz.rE >> 1) && (bz.eN ? 9 !== bz.qS && (adw = mD.ad6(), !(2 * mD.ad7(go.ea()) >= adw)) : function() {
			if (8 === bz.qS) return !1;
			var adw = mD.ad6();
			if (2 * ef.g5[eh[0]] >= adw) return !1;
			return !0
		}())
	}
}

function acC() {
	var dZ;
	10 === c2.c4 ? dZ =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === c2.c4 ? dZ =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === c2.c4 ? dZ =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === c2.c4 ? dZ =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === c2.c4 ? dZ =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === c2.c4 ? dZ =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === c2.c4 ? dZ =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === c2.c4 ? dZ =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === c2.c4 ? dZ =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === c2.c4 ? dZ =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === c2.c4 ? dZ =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === c2.c4 ? dZ =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === c2.c4 && (dZ =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new aaK).j9(dZ)
}
self.aiCommand746 = function(dt) {
	0 === dt ? ki() : 1 !== dt || !cZ || 1 !== cZ.id || cZ.ca < 14 || h6.kj()
}, a4m(), setTimeout(ki, 1e4), window.onload = function() {
	ki()
};