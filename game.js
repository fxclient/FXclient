var c1, aR, cM, cj, ck, ct, cO, cP, np, ch, cd, cf, nq, cg, ce, cY, cX, kK, cb, cW, cc, ci, nr, ns, r, aF, cC, cm, bL, cn, aZ, nt, c5, mh, gd, bF, nu, cK, cE, ln, nv, cH, nw, cs, ca, k3, aL, c3, by, u, cq, nx, gg, co, cp, ny, kw, c7, cR, aW, fk, cZ,
	dW, dR, dc, kV, da, nz, o0, g7, dU, cI, cJ, bw, cS, o1, bx, gu, o2, n, d4, cL, o3, o4, o5, o6, o7, cG, dI, cA, cT, s, aj, ag, aI, n7, gG, o8, o9, oA, oB, p, oC, oD, d3, oE, hK, aAR, am, xD, nN, sR, sS, io, im, ip, j6, j3, iU, ir, aGt, jB, aGu,
	aGv, aGw, ik, nS, z7, cU, cV, qq, aC, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io",
		"input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>",
		"undefined", "pre", "</a>", "scroll", "qix3", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "top", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel",
		"underline", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	this.b = 0;
	var d, e, f, g, h, i = this.c = 0;

	function a2() {
		g = h = null, i = 0
	}
	this.j = function(k, l, m) {
		n.o(), p.q(), r.setState(10), g = k, h = l, i = m, this.b = k.b, this.c = m, d = 0, e = s.t + 4500, u.v.w = k.w, u.v.x === k.w ? (console.log("direct pass"), f = 0) : (console.log("delayed pass"), u.v.close(u.v.x, 3247), f = 2, u.v.y(k.w,
			5) && u.z.a0()), aC.imageSmoothingEnabled = !0, r.aD();
		l = aF.aG("loading"), m = (aI.aJ.aK() ? .396 : .25) * aL.aM / l.width;
		aC.setTransform(m, 0, 0, m, Math.floor((aL.aN - m * l.width) / 2), Math.floor((aL.aO - m * l.height) / 2)), aC.imageSmoothingEnabled = !1, aC.drawImage(l, 0, 0), aC.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a3 = function() {
		0 < f && s.t > e && (f--, e += 4500, 0 === s.a5) && 0 === s.a6() && u.v.y(u.v.w, 5)
	}, this.a7 = function() {
		return 10 === r.a8() && (p.a9.aA(g, h, i), a2(), !0)
	}, this.aB = function() {
		10 === r.a8() && 2 <= ++d && (p.a9.aA(g, h, i), a2())
	}
}

function aP() {
	this.aQ = function() {
		if (2 === aR.aS) aR.aT = 2;
		else {
			if (8 === aR.aV) aW.aX.aY(0) || 0 === aZ.aa[0] ? aR.ab = 1 : aW.aX.aY(1) || 0 === aZ.aa[1] ? aR.ab = 0 : aR.ab = +(aZ.ac[1] > aZ.ac[0]);
			else {
				if (aR.ae) {
					var af = ag.ah();
					if (aR.ai = af, aj.ak[af]) return void(aR.aT = +(aj.al[aR.ad] === af))
				}
				aR.ab = am[0]
			}
			aR.aT = +(aR.ab === aR.ad)
		}
	}
}

function an() {
	this.ao = null, this.ap = !1, this.t = 0, this.aq = 56;
	var ar = 0;

	function au() {
		s.t = ar = performance.now(), s.ao.b2(), window.requestAnimationFrame(au)
	}
	this.j = function() {
		this.at(), window.requestAnimationFrame(au), this.t = performance.now()
	}, this.av = function() {
		aR.aw ? (this.ao = new ax, this.ao.j()) : aR.ay ? this.ao = new az : (this.ao = new b0, this.ao.j())
	}, this.at = function() {
		this.ao = new b1, this.ap = !0
	}, this.b2 = function() {
		this.ao.b3++
	}, this.a6 = function() {
		return this.ao.b3
	}, this.b4 = function() {
		var b5 = performance.now();
		b5 < ar + 1e3 || (this.t = b5, this.ao.b2())
	}
}

function b6() {
	this.b7 = 0, this.gap = 0, this.b8 = 0, this.b9 = 0, this.j = function() {
		this.resize()
	}, this.resize = function() {
		this.b7 = .0022 * aW.bA.bB(.5) * aL.aM, this.b8 = this.b7 / aL.bC, this.gap = Math.max(Math.floor((aI.aJ.aK() ? .0114 : .01296) * aL.aM), 2), this.b9 = this.gap / aL.bC
	}
}

function bD() {
	this.bE = function() {
		var bK;
		return !(bF.bG < 3 || aZ.ac[am[0]] >= aR.bH >> 1) && (aR.ae ? (bK = bL.bM(), !(2 * bL.bP(ag.bQ()) >= bK)) : function() {
			var bK = bL.bM();
			if (2 * aZ.bN[am[0]] >= bK) return !1;
			return !0
		}())
	}
}

function bR() {
	this.bS = 512, this.bT = 15e8, this.bU = 1e9, this.bV = 5e4, this.bW = 512, this.bX = 2, this.ad = 0, this.bY = 0, this.bZ = 0, this.ba = 0, this.bb = 0, this.bc = 512, this.bd = 512, this.be = 150, this.ay = !0, this.aw = 0, this.bf = 0, this
		.bH = 0, this.bg = !1, this.bh = 0, this.bi = 0, this.ae = !1, this.bj = 0, this.bk = 0, this.aV = 0, this.bl = 0, this.bm = null, this.bn = new bo, this.bp = 30, this.aS = 0, this.aT = 0, this.ab = 0, this.ai = 0, this.data = new bq, this
		.br = new bs, this.bt = 0, this.bu = "", this.bv = function() {
			bw.j(), bx.j(), this.bZ = this.bY = this.data.humanCount, this.ay = 1 === this.bZ, this.bg = !1, this.aw = this.data.isReplay, this.aV = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this
				.data.numberTeams - 2, this.bl = this.data.isContest, this.ae = this.aV < 7 || 9 === this.aV, this.aV = 10 === this.aV && this.ay ? 7 : this.aV, this.aV = 8 === this.aV && 2 !== this.bY ? 7 : this.aV, by.j(), this.bj = this.data
				.numberTeams, this.data.teamPlayerCount ? this.bk = +(0 < this.data.teamPlayerCount[0]) : (this.bk = 0, this.ae && this.ay && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.bj + 1), aR.br
					.bz())), this.bp = this.bY <= 2 ? 30 : this.bY <= 50 ? 40 : 50, this.bi = this.bh = this.data.selectableSpawn, this.bm = this.bh ? new c0 : null, 1 === c1.c2 ? this.bc = this.bY : this.bc = this.data.playerCount, this.bd = this
				.bc, this.ba = this.bc - this.bY, this.bb = 0, this.ad = this.data.selectedPlayer, this.aS = 0, this.aT = 0, this.ab = 0, this.ai = 0, c3.c4(this.data.spawningSeed), bL.j(), aZ.j(), c5.c6(), c7.c8.c9 = [], aj.j(), this.bf = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), cA.j(), cB(), cC.cD(), cE.cF(), cG.j(), cC.j(), cH.j(), cI.j(), cJ.j(), cK.j(), cL.av(), cM.j(), c5.cN(), cO
				.j(), cP.j(), bF.cQ(), cR.j(), ag.j(), cS.j(), cT.j(), cU.putImageData(cV, 0, 0), cW.j(), cX.j(), cY.j(), cZ.j(), ca.j(), cb.j(), cc.j(), cd.j(), ce.j(), cf.j(), cg.j(), ch.j(), ci.j(), cj.j(), ck.j(), cl(), cm.j(), cn.j(), co.j(), cp
				.j(), cq.j(), this.bn.j(), s.av(), ct.cu(), 0 === aZ.aa[aR.ad] && ci.show(!1, !0), cn.cv(!0), cs.j(), s.ap = !0, this.aw || this.ay && this.bh || aI.aJ.setState(1), this.bt = 0
		}, this.cw = function(cx) {
			cR.cy.cz.length ? this.bu = cR.cy.cz : this.bu = cR.d0.d1(), u.v.d2(), d3.clear(), this.bf = 0, s.at(), aI.aJ.setState(0), r.setState(0), cx || d4.d5.show(), 2 === this.bt ? n.v.d6() : 1 === this.bt ? n.d7(19) : n.d7(5, 5)
		}, this.d8 = function() {
			return this.aw ? cd.d9 || !cZ.dA : this.ay && (cd.d9 || this.bh)
		}, this.dB = function() {
			return 1 === this.bf && !this.bh
		}
}

function dC(dD, dE) {
	var dF = document.createElement("div");
	this.dG = dF, this.resize = function() {
		dF.style.padding = aW.bA.dH(dI.b9), dF.style.lineHeight = aW.bA.dH(aW.bA.dJ(.035))
	}, dD.style.overflowX = "hidden", dD.style.overflowY = "auto", dF.innerHTML = dE, dD.appendChild(dF)
}

function dK() {
	this.d1 = function() {
		var dL = function() {
				for (var dv = cR.cy.dv, du = dv.length, max = 0, dw = 0; dw < du; dw++) max = Math.max(max, dv[dw]);
				return e1(Math.max(max, 1))
			}(),
			aN = (dg = aR.data, (aN = dR).j(), aN.dh(12, c1.rVersion), aN.dS += 43, aN.dh(2, dg.mapType), aN.dh(8, dg.mapProceduralIndex), aN.dh(8, dg.mapRealisticIndex), aN.dh(14, dg.mapSeed), aN.di(dg.mapName, 5), 2 === dg.mapType && aN.dj(dg
				.canvas), aN.dh(1, dg.passableWater), aN.dh(1, dg.passableMountains), aN.dh(10, dg.playerCount), aN.dh(10, dg.humanCount), aN.dh(9, dg.selectedPlayer), aN.dh(1, dg.gameMode), aN.dh(2, dg.playerMode), aN.dh(2, dg
				.battleRoyaleMode), aN.dh(4, dg.numberTeams), aN.dh(1, dg.isZombieMode), aN.dh(1, dg.isContest), aN.dh(1, dg.isReplay), aN.dk(dg.elo, 2, 14), aN.dh(1, dg.colorsType), aN.dh(1, dg.colorsPersonalized), aN.dk(dg.colorsData, 10,
				18), aN.dh(1, dg.selectableColor), aN.dk(dg.teamPlayerCount, 4, 10), aN.dh(1, dg.neutralBots), aN.dh(2, dg.botDifficultyType), aN.dh(4, dg.botDifficultyValue), aN.dk(dg.botDifficultyTeam, 4, 4), aN.dk(dg.botDifficultyData, 10,
				4), aN.dh(2, dg.spawningType), aN.dh(14, dg.spawningSeed), aN.dk(dg.spawningData, 11, 12), aN.dh(1, dg.selectableSpawn), aN.dh(2, dg.playerNamesType), aN.dl(dg.playerNamesData, 10, 5), aN.dh(1, dg.selectableName), aN.dh(2, dg
				.aIncomeType), aN.dh(8, dg.aIncomeValue), aN.dk(dg.aIncomeData, 10, 8), aN.dh(2, dg.tIncomeType), aN.dh(8, dg.tIncomeValue), aN.dk(dg.tIncomeData, 10, 8), aN.dh(2, dg.iIncomeType), aN.dh(8, dg.iIncomeValue), aN.dk(dg
				.iIncomeData, 10, 8), aN.dh(2, dg.sResourcesType), aN.dh(11, dg.sResourcesValue), aN.dk(dg.sResourcesData, 10, 11), ! function(dL) {
				var aN = dR,
					dm = cR.cy.dm,
					dn = cR.cy.dp,
					dq = cR.cy.dr,
					ds = cR.cy.dt,
					du = dm.length;
				aN.dh(5, dL), aN.dh(30, du), aN.dh(30, cR.cy.dv.length);
				for (var dw = 0; dw < du; dw++) {
					var dx = dm[dw];
					aN.dh(4, dx), aN.dh(9, dn[dw]), 0 === dx ? aN.dh(22, dq[dw]) : 1 === dx ? (aN.dh(10, dq[dw]), aN.dh(10, ds[dw])) : 2 === dx ? (aN.dh(10, dq[dw]), aN.dh(9, ds[dw])) : 3 === dx ? (aN.dh(10, dq[dw]), aN.dh(27, ds[dw])) :
						4 === dx ? (aN.dh(10, dq[dw]), aN.dh(16, ds[dw])) : 5 === dx || 6 === dx ? aN.dh(10, dq[dw]) : 7 === dx ? aN.dh(1, dq[dw]) : 10 === dx && (aN.dh(20, dq[dw]), aN.dh(22, ds[dw]))
				}
			}(dL), ! function(dL) {
				for (var aN = dR, dy = cR.cy.dy, dv = cR.cy.dv, du = dy.length, dw = 0; dw < du; dw++) aN.dh(1, dy[dw]), aN.dh(dL, dv[dw])
			}(dL), dR.dS),
			dg = dU.dV(aN - 1, 6) + 1,
			dL = (dW.dX(6 * dg) !== dR.dY.length && dR.dY.push(0), ! function() {
				var aN = dR;
				aN.dS = 24, aN.dh(31, aN.dY.length), aN.dS = 12, aN.dh(12, function() {
					for (var dY = dR.dY, du = dY.length, e0 = c1.rVersion, dw = 3; dw < du; dw++) e0 = e0 + dY[dw] & 4095;
					return e0
				}())
			}(), da.j(dR.dY), dc.dd.de(dc.dd.df(dg)));
		return da.q(), dR.j(), dL
	}
}

function e2() {
	var dx = aW.color;
	this.e3 = dx.e4(0, 0, 0), this.e5 = dx.e6(0, 0, 0, .7), this.e7 = dx.e6(0, 0, 0, .5), this.e8 = dx.e6(0, 0, 0, .85), this.e9 = dx.e6(0, 0, 0, .75), this.eA = dx.e6(0, 0, 0, .6), this.eB = dx.e6(0, 0, 0, .35), this.eC = dx.e4(255, 255, 255), this
		.eD = dx.e6(255, 255, 255, .3), this.eE = dx.e6(255, 255, 255, .6), this.eF = dx.e6(255, 255, 255, .4), this.eG = dx.e6(255, 255, 255, .25), this.eH = dx.e6(255, 255, 255, .85), this.eI = dx.e6(255, 255, 255, .75), this.eJ = dx.e6(255, 255,
			255, .15), this.eK = dx.e6(255, 255, 255, .11), this.eL = dx.e4(128, 128, 128), this.eM = dx.e6(64, 64, 64, .75), this.eN = dx.e6(88, 88, 88, .83), this.eO = dx.e6(60, 60, 60, .85), this.eP = dx.e6(80, 60, 60, .85), this.eQ = dx.e4(170,
			170, 170), this.eR = dx.e4(200, 235, 245), this.eS = dx.e4(30, 255, 30), this.eT = dx.e4(0, 200, 0), this.eU = dx.e4(128, 255, 128), this.eV = dx.e6(10, 65, 10, .75), this.eW = dx.e6(0, 255, 0, .6), this.eX = dx.e6(0, 255, 0, .5), this
		.eY = dx.e6(0, 200, 0, .5), this.eZ = dx.e6(0, 100, 0, .75), this.ea = dx.e6(0, 60, 0, .8), this.eb = dx.e6(0, 255, 0, .3), this.ec = dx.e6(0, 180, 0, .6), this.ed = dx.e6(0, 120, 0, .85), this.ee = dx.e4(0, 120, 0), this.ef = dx.e6(0, 70, 0,
			.85), this.eg = dx.e4(190, 230, 190), this.eh = dx.e4(0, 255, 0), this.ei = dx.e4(255, 120, 120), this.ej = dx.e4(255, 160, 160), this.ek = dx.e4(255, 70, 70), this.el = dx.e4(230, 0, 0), this.em = dx.e6(220, 0, 0, .6), this.en = dx.e6(
			255, 100, 100, .8), this.eo = dx.e6(100, 0, 0, .85), this.ep = dx.e6(60, 0, 0, .85), this.eq = dx.e6(200, 0, 0, .6), this.er = dx.e6(120, 0, 0, .85), this.es = dx.e4(255, 70, 10), this.et = dx.e4(230, 190, 190), this.eu = dx.e4(255, 0,
		0), this.ev = dx.e4(255, 0, 255), this.ew = dx.e6(60, 0, 60, .85), this.ex = dx.e6(0, 60, 60, .85), this.ey = dx.e6(10, 60, 60, .9), this.ez = dx.e6(0, 96, 96, .75), this.f0 = dx.e4(0, 255, 255), this.f1 = dx.e4(160, 160, 255), this.f2 = dx
		.e6(0, 40, 90, .75), this.f3 = dx.e6(0, 0, 255, .6), this.f4 = dx.e4(200, 200, 255), this.f5 = dx.e6(50, 50, 255, .83), this.f6 = dx.e4(255, 120, 100), this.f7 = dx.e6(255, 255, 0, .5), this.f8 = dx.e6(255, 255, 150, .2), this.f9 = dx.e4(255,
			255, 0), this.fA = dx.e4(255, 255, 200), this.fB = dx.e6(200, 200, 0, .6), this.fC = dx.e6(140, 120, 0, .75), this.fD = dx.e6(180, 160, 40, .75), this.fE = dx.e6(70, 50, 20, .85), this.fF = dx.e6(30, 30, 0, .85), this.fG = dx.e6(60, 60,
			0, .85), this.fH = dx.e6(255, 140, 0, .75), this.fI = dx.e6(70, 40, 0, .85), this.fJ = dx.e4(220, 120, 0), this.fK = dx.e6(255, 200, 80, .85), this.fL = dx.e4(255, 150, 120), this.fM = dx.e6(0, 0, 0, 0), this.fN = dx.e6(255, 255, 255, 0),
		this.fO = dx.e6(254, 254, 254, 0)
}

function fP() {
	this.L84 = ["You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.",
		"You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Spawning", "Back", "Options", "Random", "Clustered", "Customized", "Selectable Spawn",
		"Additional Income", "Default", "Uniform", "Team {0}", "Team {0} has won the game!", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay string here!", "Map", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name", "🛠️ Chart Options", "Search Terms",
		"Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "{0} has defeated {1}!", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible",
		"Bot Difficulty", "Mixed", "Team dependent", "Team", "Player Count", "Quit Game", "More", "Admin Election", "Blockchain", "Clan Leader Election", "Audit Log", "📜 Logs", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Top 100 players receive a daily gold payout.", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver",
		"Starter", "Account Balance: ", "Rank: ", "Status: ", "Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Account Name", "Copy",
		"Password", "Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
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
		"If you hide Patreon, no one can share their membership with you.", "Clan Chart", "🛠️ Options", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports",
		"Battle Royale Players", "Richest Players", "Patreon Members", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold",
		"Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "LEADERBOARD", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator",
		"Lead Moderator", "Head Admin", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Activated", "Type your message here...", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby",
		"Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed",
		"Is Muted", "Shortcut Keys", "Reset", "Language", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "Humans", "Players", "Bots", "Spectators", "Threshold", "Growth", "Income", "Time", "White Arena",
		"Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "Custom Scenario", "⚔️ Play", "Settings", "Game Mode", "Colors", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "second played",
		"seconds played", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "Ship launched!", "Ship intercepted!", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "🏆 Leaderboards",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "An enemy ship belonging to {0} is heading towards your shore.", "Next Contest: ",
		"🔑 My Account", "📈 Clan Charts", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Login", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Adjust",
		"Selectable Color", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Replay Error", "Warning", "Loading...", "🔑 Show Account", "🚨 Moderation Actions",
		"🚩 Report User", "💬 Mention", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss",
		"Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!", "Loading", "Territory", "Numbers", "Statistics", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.",
		"{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}",
		"Player: {0}", "Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.",
		"You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered."
	]
}

function fQ() {
	function fg() {
		var fh;
		return 8 === aR.aV ? 0 : (fh = Math.floor(aZ.fi[aR.ad] / 50), (fh = Math.min(fh, 400)) / 100)
	}

	function fU() {
		var fh = fg();
		0 !== fh && cf.fj(440, L(0, [fh.toFixed(2)]), 40, 0, fk.eU, fk.e9, -1, !1)
	}
	this.b2 = function() {
		var fV;
		0 === bx.result.fR || 0 === bx.result.fS.length || 8 === aR.aV ? aW.aX.fT(aR.ad) && fU() : (function(fV) {
			7 !== aR.aV && 10 !== aR.aV || 0 !== aR.aT && cf.fj(600, L(4, [fV.toFixed(2)]), 40, 0, fk.eC, fk.e9, -1, !1)
		}(fV = function() {
			cf.fj(520, L(1), 40, 0, fk.eC, fk.e9, -1, !1);
			for (var fS = bx.result.fS, du = fS.length, ac = aZ.ac, dY = [], dw = 0; dw < du; dw++) {
				var fl = fS[dw];
				dY.push({
					fl: fl,
					b5: ac[fl]
				})
			}
			dY.sort((fm, fn) => fn.b5 - fm.b5);
			var fo = aZ.fp,
				b5 = bx.result.fq,
				fh = bx.result.fR,
				fr = "",
				fV = 0;
			for (dw = 0; dw < du; dw++) {
				var ft = dY[dw].b5 * fh / (100 * b5),
					fu = fo[dY[dw].fl] + ": " + ft.toFixed(2) + "   ";
				dY[dw].fl === aR.ad && (fV = ft), 2 < dw && 4 !== du ? 3 === dw && (fr += "(" + L(2, [du - 3]) + ")") : fr += fu
			}
			cf.fj(560, aW.fv.fw(fr), 40, 0, fk.eU, fk.e9, -1, !1), fV ? cf.fj(580, L(3, [fV.toFixed(2) + " + " + fg().toFixed(2)]), 40, 0, fk.eU, fk.e9, -1, !1) : aW.aX.fT(aR.ad) && fU();
			return fV
		}()), 2 === aR.aS || 7 <= aR.aV || function(fV) {
			var fS = bx.result.fS,
				du = fS.length,
				fx = aZ.fx,
				ac = aZ.ac,
				fy = [];
			loop: for (var dw = 0; dw < du; dw++) {
				var fl = fS[dw],
					fz = aW.fv.g0(fx[fl]);
				if (null !== fz) {
					for (var g1 = ac[fl], fn = fy.length - 1; 0 <= fn; fn--)
						if (fz === fy[fn].name) {
							fy[fn].b5 += g1, fy[fn].dY.push({
								fl: fl,
								b5: g1
							});
							continue loop
						} fy.push({
						name: fz,
						b5: g1,
						dY: [{
							fl: fl,
							b5: g1
						}]
					})
				}
			}
			if (0 !== fy.length) {
				fy.sort((fm, fn) => fn.b5 - fm.b5);
				var dY = fy[0].dY,
					g2 = (dY.sort((fm, fn) => fn.b5 - fm.b5), "[" + fy[0].name + "]"),
					g3 = 512 * bx.result.fR / 26214400,
					g4 = (cf.fj(0, L(5, [g2, g3.toFixed(4)]), 40, 0, fk.eC, fk.e9, -1, !1), dY.length),
					g5 = fy[0].b5,
					g6 = 1e4 * g3;
				for (dw = 0; dw < g4; dw++)
					if (dY[dw].fl === aR.ad) {
						cf.fj(600, L(6, [(g6 * dY[dw].b5 / (10 * g5)).toFixed(2)]), 40, 0, fk.eC, fk.e9, -1, !1), cf.fj(640, L(7, [(.2 * fV).toFixed(2), g2]), 40, 0, fk.eC, fk.e9, -1, !1);
						break
					} aR.aw || cf.fj(720, L(8) + g7.g8, 736, 0, fk.eC, fk.ea, -1, !1)
			}
		}(fV))
	}, this.fZ = function() {
		var fa, fb;
		aR.ay || (fa = aZ, fb = aR.ad, 0 === fa.fc[fb]) || fa.fd[fb] < 1 || 2 * fa.fe[fb] > 3 * (fa.ff[fb] + fa.fd[fb]) || fU()
	}
}

function g9(gA, gB) {
	this.gC = [];
	var gD = this.gC;

	function click() {
		for (var dw = 0; dw < gD.length; dw++) gD[dw].textContent = gD[dw].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dS = parseInt(this.name);
		void 0 !== gA.dS && gG.gH.gI(gA.dS, dS), gB && gB(dS)
	}
	for (var gE, du = gA.gF.length, dw = 0; dw < du; dw++)(gE = document.createElement("p")).textContent = "⚪ " + gA.gF[dw], gE.style.margin = "0", gE.name = "" + dw, gE.style.cursor = "pointer", gE.style.fontSize = "1em", gE.addEventListener(
		"click", click), gD.push(gE);
	gD[gA.value].textContent = gD[gA.value].textContent.replace("⚪", "🟢")
}

function gJ() {
	this.id = 0, this.gK = 0, this.gL = null, this.gM = null, this.gN = null, this.gO = null, this.aJ = new gP, this.j = function() {
		var self, gK;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (gK = Android.getVersion()) < 12 || (self.gK = gK, self.id = 1, self.gM = Android),
			function(self) {
				var gK;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.gN = mwIOSdataX, self.gO = window.webkit.messageHandlers.iosCommandA, gK = self
					.gN.version, self.gK = gK ? Number(gK) : 0)
			}(this),
			function(self) {
				var gL;
				try {
					if (!(gL = window.localStorage)) return;
					gL.setItem("tls7", "1"), gL.removeItem("tls7")
				} catch (error) {
					return
				}
				self.gL = gL
			}(this)
	}
}

function gT() {
	function gX() {
		8 === aR.aV && 1 === aR.bf && bx.gb.gc()
	}

	function gW(player) {
		aR.bh ? (gd.ge(player), bF.gf(), aR.ay && aR.bm.b2()) : gg.gh(player)
	}
	this.gU = function(player) {
		cf.gV(player, player === aR.ad ? 21 : 22), gW(player), gX()
	}, this.gY = function(player) {
		1 === aR.bf && 0 !== aZ.aa[player] && 2 !== aZ.gZ[player] && gW(player), aR.bZ--, aR.bb--, cf.gV(player, 4), aW.aX.ga(2) && cc.cv(!0), gX()
	}
}

function gi() {
	this.gj = function(player, id) {
		for (var gk = aZ.gl[player], du = gk.length, dw = 0; dw < du; dw++)
			if (cI.gm(gk[dw], id)) return !0;
		return !1
	}, this.gn = function(player, go) {
		for (var gq, gr, gt, gk = aZ.gl[player], du = gk.length, aN = gu.gv, gw = cI.gx(go), gy = cI.gz(go), h0 = -1, min = gu.gv * gu.gv + gu.h1 * gu.h1, id = cC.h2(cI.h3(go)), dw = 0; dw < du; dw++)(gr = (gr = gw - (gq = (gt = gk[dw]) >> 2) %
			aN) * gr + (gr = gy - ~~((.5 + gq) / aN)) * gr) < min && cI.gm(gt, id) && (min = gr, h0 = gq);
		return h0
	}, this.h4 = function(h5, gq) {
		for (var id = cC.h2(cI.h3(gq)), h6 = cI.h7, gt = cI.h3(h5), h8 = -1, dw = 0; dw < 4; dw++) {
			var h9 = gt + h6[dw];
			cC.hA(h9) && cC.h2(h9) === id && (-1 === h8 || cI.hB(cI.hC(h9), gq) < cI.hB(h8, gq)) && (h8 = cI.hC(h9))
		}
		return h8
	}, this.hD = function(player, go) {
		for (var h6 = cI.h7, gt = cI.h3(go), dw = 0; dw < 4; dw++) {
			var h9 = gt + h6[dw];
			if (cC.hE(h9) && cC.hF(player, h9)) return !0
		}
		return !1
	}, this.hG = function(player, go) {
		for (var h6 = cI.h7, gt = cI.h3(go), dw = 0; dw < 4; dw++) {
			var h9 = gt + h6[dw];
			if (cC.hH(h9)) return !0;
			if (cC.hE(h9)) {
				h9 = cC.hJ(h9);
				if (player !== h9 && hK.hL(player, h9)) return !0
			}
		}
		return !1
	}, this.hM = function(go) {
		for (var h6 = cI.h7, gt = cI.h3(go), dw = 0; dw < 4; dw++) {
			var h9 = gt + h6[dw];
			if (cC.hE(h9)) {
				h9 = cC.hJ(h9);
				if (aW.aX.aY(h9)) return h9
			}
		}
		return -1
	}, this.hN = function(gt) {
		if (cC.hA(gt))
			for (var h6 = cI.h7, dw = 0; dw < 4; dw++)
				if (cC.hO(gt + h6[dw])) return !0;
		return !1
	}, this.hP = function(player, id) {
		for (var hR = player << 3, hS = hR + cJ.v.hQ[player], hT = cJ.v.hT, hU = cJ.v.hU, dw = hR; dw < hS; dw++) {
			var hV = hU[dw];
			if (hT[hV] === id) return hV
		}
		return -1
	}, this.hW = function(player) {
		return 0 === cJ.v.hQ[player] ? -1 : cJ.v.hU[player << 3]
	}, this.hX = function(hY, hZ) {
		var du = cJ.v.ha;
		if (du < 1) return -1;
		for (var hb = cJ.v.hb, hc = 80, hd = -1, dw = 0; dw < du; dw++) {
			var he = cI.hf(hY, hZ, hb[dw]);
			he < hc && (hc = he, hd = dw)
		}
		return function(dw, hY, hZ) {
			if (dw < 0) return;
			var i2 = cJ.v.hb[dw],
				i3 = cI.i4(i2),
				i2 = cI.i6(i2),
				dw = 20 * (.9 + .1 * Math.log10(cJ.v.hl[dw]));
			return dw = Math.max(dw, cI.i8(aW.bA.i9(.02, 1.7))), dU.iA(cI.iB(hY), cI.iC(hZ), i3, i2, dw)
		}(hd, hY, hZ) ? hd : -1
	}, this.hh = function(hi) {
		for (var du = cJ.v.ha, hT = cJ.v.hT, dw = 0; dw < du; dw++)
			if (hT[dw] === hi) return bw.hj[2] = dw, !0;
		return !1
	}, this.hk = function(player) {
		for (var hR = player << 3, hS = hR + cJ.v.hQ[player], hU = cJ.v.hU, hl = cJ.v.hl, hm = 0, dw = hR; dw < hS; dw++) hm += hl[hU[dw]];
		return hm
	}, this.hn = function(player, ho) {
		ho = cJ.v.hq[ho];
		return this.hD(player, ho[ho.length - 1])
	}, this.hr = function(h5, gq, he, hs) {
		var ht = cI.gx(h5),
			h5 = cI.gz(h5),
			hv = cI.gx(gq),
			gq = cI.gz(gq),
			hv = (he = Math.max(he, 1), hv - ht),
			gq = gq - h5,
			hz = dU.dV(Math.abs(hv) * hs, he),
			hs = dU.dV(Math.abs(gq) * hs, he);
		return cI.i1(ht + Math.sign(hv) * hz, h5 + Math.sign(gq) * hs)
	}, this.iD = function(hp, go) {
		for (var du = hp.length - 1, iE = cI.gx(go), iF = cI.gz(go), dw = 0; dw < du; dw++) {
			var h5 = hp[dw],
				gq = hp[dw + 1],
				iG = cI.gx(h5),
				h5 = cI.gz(h5),
				iI = cI.gx(gq),
				gq = cI.gz(gq);
			if (!(iE !== iG && iE !== iI && Math.sign(iE - iG) === Math.sign(iE - iI) || iF !== h5 && iF !== gq && Math.sign(iF - h5) === Math.sign(iF - gq))) {
				if (iG === iI || h5 === gq) return dw;
				if (Math.abs(iE - iG) === Math.abs(iF - h5) && Math.abs(iE - iI) === Math.abs(iF - gq)) return dw
			}
		}
		return -1
	}, this.iK = function() {
		for (var iL = am[0], iM = cJ.v.iM, ha = cJ.v.ha, dY = [], dw = 0; dw < ha; dw++) aW.aX.iN(iL, iM[dw] >> 3) && dY.push(dw);
		return dY
	}, this.iO = function(player, hp) {
		for (var hR = player << 3, hS = hR + cJ.v.hQ[player], hU = cJ.v.hU, hq = cJ.v.hq, iP = hp[0], iQ = hp[hp.length - 1], dw = hR; dw < hS; dw++) {
			var fl = hq[hU[dw]];
			if (fl[0] === iP && fl[fl.length - 1] === iQ) return !0
		}
		return !1
	}
}

function iR() {
	iS() ? (iT(), iU !== aR.bS && iV()) : iW()
}

function iV() {
	hK.iX(), hK.iY(aZ.iZ[iU]), hK.iY(aZ.gl[iU]), gu.ia(gu.ib) && hK.iY(aZ.ic[iU]), hK.ie(aZ.ig[iU]), hK.ih(aZ.gl[iU]), hK.ih(aZ.ic[iU]), hK.ii(), hK.ij()
}

function iT() {
	ik = !0, cm.il(im, io, ip), cm.iq(im, io), aZ.ac[im] += ir, hK.is(), it()
}

function iS() {
	return (iU === aR.bS ? iu : iv)()
}

function iv() {
	var iw = ir * aR.bX,
		ix = iy(),
		iz = j0(),
		ix = iw + 2 * ix + iz,
		j2 = j3 * ir;
	return ix < j2 ? (ip -= ix, cA.j4(im, ix, 13), j5(ix - iw, iz), !0) : j6 && 0 === iz ? (ip -= j2, j2 += aW.aX.j7(im, ix - j2 + 1), cA.j4(im, j2, 13), j5(j2 - iw, 0), !0) : (ip -= j2, cA.j4(im, j2, 13), j5(j2 - iw, iz), !1)
}

function j5(j2, iz) {
	if (0 < iz) {
		if (j2 <= iz) return cA.j4(iU, j2, 13), void cm.j8(iU, im, iz - j2);
		cm.j8(iU, im, 0), j2 -= iz
	}
	j2 = dU.dV(j2, 2), j2 = Math.min(aZ.bN[iU], j2), cA.j4(iU, j2, 13), aZ.bN[iU] -= j2
}

function j0() {
	return cm.j9(iU, im)
}

function iy() {
	return dU.dV(ir * aZ.bN[iU], 1 + dU.dV(10 * aZ.ac[iU], 16))
}

function iu() {
	var jA = ir * aR.bX;
	return ip -= jA, cA.j4(im, jA, 13), !0
}

function it() {
	for (var dw = ir - 1; 0 <= dw; dw--) aZ.ig[im].push(jB[dw]), aZ.iZ[im].push(jB[dw]), cC.jC(jB[dw], im)
}

function jD() {
	var jE, jF, jG, jX;

	function jK() {
		jO(), 2 !== aR.data.spawningType || aW.jS.jW(aR.data.spawningData) || (aR.data.spawningType = 0), 2 !== aR.data.spawningType && (aR.data.spawningData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		2 === aR.data.spawningType && aW.jS.jT(jG.jU(), aR.data.spawningData, gu.jV - 1)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(9), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc,
			gF = (jb.jd(L(11)), [L(12), L(13), L(14)]),
			value = aR.data.spawningType;
		0 === aR.data.gameMode && (gF.splice(1, 1), 0 < value) && (value = 1);
		jb.je(new g9({
			gF: gF,
			value: value
		}, function(dS) {
			jO(), aR.data.spawningType = dS, 0 === aR.data.gameMode && 1 === dS && (aR.data.spawningType = 2), 2 !== aR.data.spawningType || aR.data.spawningData || (aR.data.spawningData = new Uint16Array(2 * aR.bS)), n.d7(24)
		})), jb.jf(new jg), jb.jf(new jh({
			value: aR.data.selectableSpawn
		}, L(15), function(value) {
			aR.data.selectableSpawn = value
		})), jX.push(jb)
	}(jX = []), function(jX) {
		var jb = new jc;
		jb.jd("Seed"), jb.jf(new ji({
			dS: -1,
			value: aR.data.spawningSeed
		}, 1, 0, function(jj) {
			var value = Math.abs(Math.floor(jj.target.value)) % 16384;
			jj.target.value = aR.data.spawningSeed = value
		})), jX.push(jb)
	}(jX), function(jX) {
		var jb;
		2 === aR.data.spawningType && ((jb = new jc).jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.spawningData, 2)), jb.jf(jG), jX.push(jb))
	}(jX), jX))
}

function jr() {
	function kT(kZ) {
		var kR = aR.data,
			kZ = (kR.selectedPlayer = da.jw(kZ), kR.spawningSeed = da.jw(14), da.jw(4)),
			kZ = (kZ < 7 ? (kR.gameMode = 1, kR.numberTeams = kZ + 2) : 9 === kZ ? (kR.gameMode = kR.isZombieMode = 1, kR.numberTeams = 2) : (kR.gameMode = 0, kR.battleRoyaleMode = 7 === kZ ? 0 : 10 === kZ ? 1 : 2), kR.isContest = da.jw(1), da.jw(
			6));
		return kR.mapType = gu.kb(kZ) ? 0 : 1, gu.kc(kR, kZ), kR.mapSeed = da.jw(14), kZ
	}
	this.js = function(jt, ju) {
		da.j(ju), 0 === da.size ? u.v.jv(jt, 3205) : __fx.customLobby.isCustomMessage(ju) || ((0 === da.jw(1) ? function(jt) {
			var jz = da.jw(6);
			0 === jz ? function(jt) {
					if (0 === jt && 8 !== r.a8()) {
						n.v.kH();
						for (var kI = da.jw(12), kJ = da.jw(6), dY = new Array(kI), dw = 0; dw < kI; dw++) dY[dw] = da.jw(kJ);
						kK.kL(dY)
					}
				}(jt) : 2 === jz ? u.k1.k2(jt) : 3 === jz || 4 === jz ? k3.j() : 9 === jz ? u.k4.k5(jt) : 10 === jz ? u.k6.k7() : 11 === jz ? u.k4.k8(jt) : 12 === jz ? u.k6.k9() : 13 === jz ? u.kA.kB() : 14 === jz ? u.kA.kC() : 15 ===
				jz ? u.k4.kD() : 16 === jz ? u.k1.kE(jt) : 17 === jz ? u.k1.kF(jt) : 19 === jz && u.k1.kG(jt)
		} : function(jt) {
			if (8 !== r.a8() && !k3.a7()) return;
			if (jt !== u.v.w) u.v.jv(jt, 3244);
			else if (0 === da.jw(1)) s.ao.ke(da.ju);
			else {
				var dw, jt = da.jw(2);
				if (0 === jt) {
					var kn, z = da.jw(9);
					0 !== aZ.aa[z] && 0 !== aZ.aa[aR.ad] && (kn = da.jw(10), cf.ko(z, aR.ad, kn), cn.kp(z, 1, kn))
				} else if (1 === jt) ! function() {
					var z = da.jw(9);
					0 !== aZ.aa[z] && 0 !== aZ.aa[aR.ad] && cp.kq(0, [z], !0) && cf.kr(z, 1)
				}();
				else if (2 === jt) ! function() {
					var z = da.jw(9),
						target = da.jw(9);
					0 !== aZ.aa[z] && 0 !== aZ.aa[target] && 0 !== aZ.aa[aR.ad] && cp.kq(1, [z], !0) && (cn.kp(z, 3, 96), cn.kp(target, 4, 96), cf.ks(z, target))
				}();
				else if (c1.kk && !c1.kl) {
					var du = 540;
					for (dW.cN(17287), dW.dh(1, 0), dW.dh(6, 10), du = Math.min(c7.c8.c9.length, 540), dw = 0; dw < du; dw++) dW.km(32, c7.c8.c9[dw]);
					u.v.send(u.v.w, dW.ju)
				}
			}
		})(jt), s.b4())
	}, this.kM = function(ju) {
		if (da.j(ju), da.dS = 1, 3 === da.jw(6)) {
			da.dS += 20;
			var kR = aR.data = new bq,
				ju = kT(9),
				kU = kR.humanCount = da.jw(9) + 1;
			kR.selectableSpawn = 1 === kR.gameMode || kU < 100, kR.colorsData = new Uint32Array(kU), kR.playerNamesData = new Array(kU);
			for (var dw = 0; dw < kU; dw++) da.dS++, kR.colorsData[dw] = da.jw(18), kR.playerNamesData[dw] = kV.kW.kX(da.jw(5));
			r.kY(), gu.cN(ju, kR.mapSeed), aR.bv()
		} else ! function() {
			da.dS += 20;
			var kR = aR.data = new bq,
				kS = kT(1);
			kR.humanCount = 2;
			kR.selectableSpawn = 1, kR.elo = new Uint16Array(2), kR.colorsData = new Uint32Array(2), kR.playerNamesData = new Array(2);
			for (var dw = 0; dw < 2; dw++) da.dS++, kR.colorsData[dw] = da.jw(18), kR.elo[dw] = da.jw(14), kR.playerNamesData[dw] = kV.kW.kX(da.jw(5));
			r.kY(), gu.cN(kS, kR.mapSeed), aR.bv()
		}()
	}, this.kP = function() {
		da.dS = 1;
		var jz = da.jw(6),
			kQ = da.jw(10);
		return u.v.x === kQ ? (u.v.w = kQ, !1) : (u.v.close(u.v.x, 3247), u.v.w = kQ, k3.b = da.jw(10), k3.c = da.jw(3 === jz ? 9 : 1), u.v.y(kQ, 5) && u.z.a0(), !0)
	}
}

function kt() {
	this.gI = function(dS, value) {
		gG.ku.data[dS].value !== value && (gG.ku.kv(dS, value), 0 === dS ? (n.o(), kw.j(), n.d7(2)) : 1 === dS ? aL.kx(1) : 2 === dS ? aL.kx(0) : 5 === dS && (aW.bA.ky(), aL.kx(0)))
	}, this.kz = function() {
		for (var data = gG.ku.data, dw = 0; dw < 100; dw++) data[dw] && gG.ku.kv(dw, data[dw].l0);
		aW.bA.ky(), aL.kx(1), kw.j()
	}, this.l1 = function() {
		for (var data = gG.ku.data, dw = 0; dw < data.length; dw++) data[dw] && gG.ku.gI(dw, data[dw].l0)
	}, this.l2 = function() {
		for (var fn = gG.ku, dw = 128; dw < 135; dw++) fn.kv(dw, fn.data[dw].l0)
	}, this.l3 = function(data) {
		gG.gH.gI(109, data.l4), gG.gH.gI(107, data.l5), gG.gH.gI(108, data.l6), gG.gH.gI(112, data.l7), gG.gH.gI(111, data.l8), gG.gH.gI(113, data.l9), gG.gH.gI(135, data.lA), gG.gH.gI(136, data.lB), gG.gH.gI(137, data.lC), gG.gH.gI(138, data
			.lD), gG.gH.gI(139, data.lE), gG.gH.gI(141, data.lF), gG.gH.gI(142, data.lG), gG.gH.gI(143, data.lH), gG.gH.gI(144, data.lI)
	}
}

function lJ() {
	this.lK = 1102, this.lL = 2095, this.rVersion = 11, this.lM = 0, this.j = function() {
		this.c2 = 2;
		var b5 = dU.dV(this.lL, 10) % 100;
		this.gK = "19 Jul 2025 [" + dU.dV(this.lL, 1e3) + "." + (b5 < 10 ? "0" : "") + b5 + "." + this.lL % 10 + "]", this.kk = true, this.kl = function() {
			try {
				return window.self !== window.top
			} catch (jj) {
				return !0
			}
		}(), this.lO = (new Date).getTime() % 1048576
	}, this.lP = 0
}

function lQ() {
	this.resize = function() {
		var dw, lR = document.head.querySelector("style#ss");
		if (lR)
			for (dw = lR.sheet.cssRules.length - 1; 0 <= dw; dw--) lR.sheet.deleteRule(0);
		else(lR = document.createElement("style")).id = "ss", document.head.appendChild(lR);
		var lS = "::-webkit-scrollbar",
			lT = aW.bA.dH(dI.b8),
			lU = aW.bA.dH(Math.max(aW.bA.dJ(.012), 8));
		try {
			lR.sheet.insertRule(lS + "{width:" + lU + ";height:" + lU + ";}", lR.sheet.cssRules.length), lR.sheet.insertRule(lS + "-thumb{background-color:white;}", lR.sheet.cssRules.length), lR.sheet.insertRule(lS + "-track{background:" + fk
				.e8 + ";}", lR.sheet.cssRules.length), lR.sheet.insertRule(lS + "-track:horizontal{border-top:" + lT + " solid white;}", lR.sheet.cssRules.length), lR.sheet.insertRule(lS + "-track:vertical{border-left:" + lT +
				" solid white;}", lR.sheet.cssRules.length), lR.sheet.insertRule(lS + "-button{display:none;}", lR.sheet.cssRules.length)
		} catch (jj) {
			for (console.log("error 3425: " + jj), dw = lR.sheet.cssRules.length - 1; 0 <= dw; dw--) lR.sheet.deleteRule(0)
		}
	}
}

function lV() {
	var gF = lW(gu.ib);
	gF && lX(gF[0], gF[1], gF[2], gF[3], gF[4])
}

function lW(ib) {
	return 2 === ib ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === ib ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === ib ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === ib ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === ib ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function lX(lY, lZ, la, lb, lc) {
	for (var iE, iF, lf, lg, li, lj, ld = lY.length - 1, le = gu.gv + gu.h1, du = (le *= le, la.length), lh = Array(du), dw = du - 1; 0 <= dw; dw--) lh[dw] = la[dw] * la[dw];
	var lk = new Array(du),
		ll = new Array(du),
		lm = new Array(du),
		gp = ln.lo();
	if (void 0 === lc)
		for (lc = new Array(du), dw = du - 1; 0 <= dw; dw--) lc[dw] = 0;
	for (dw = 1; dw < du; dw++) lk[dw] = lh[dw] - lh[dw - 1], ll[dw] = lb[dw] - lb[dw - 1], lm[dw] = lc[dw] - lc[dw - 1];
	for (iE = gu.gv - 1; 0 <= iE; iE--)
		for (iF = gu.h1 - 1; 0 <= iF; iF--) {
			for (lf = le, dw = ld; 0 <= dw; dw--) lf = (lg = (iE - lY[dw]) * (iE - lY[dw]) + (iF - lZ[dw]) * (iF - lZ[dw])) < lf ? lg : lf;
			for (li = lb[du - 1], lj = lc[du - 1], dw = 1; dw < du; dw++)
				if (lf < lh[dw]) {
					li = lb[dw - 1] + lp((lf - lh[dw - 1]) * ll[dw], lk[dw]), lj = lc[dw - 1] + lp((lf - lh[dw - 1]) * lm[dw], lk[dw]);
					break
				} lq(gu.gv * iF + iE, li, lj, gp)
		}
}

function lq(dS, li, lj, gp) {
	li < 500 ? gp[dS] = dU.dV(gp[dS] * li * 2, 1e3) : 500 < li && (gp[dS] += dU.dV(2 * (1e4 - gp[dS]) * (li - 500), 1e3)), gp[dS] += dU.dV(lj * (10 * li - gp[dS]), 1e3)
}

function lr() {
	var jE, jF, jG, jX;

	function jK() {
		jO(), 2 !== aR.data.aIncomeType && (aR.data.aIncomeData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		2 === aR.data.aIncomeType ? (aW.jS.jT(jG.jU(), aR.data.aIncomeData, 255), aW.jS.max(aR.data.aIncomeData) || (aR.data.aIncomeType = 0)) : 1 !== aR.data.aIncomeType || aR.data.aIncomeValue || (aR.data.aIncomeType = 0)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(16), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), jb.je(new g9({
			gF: [L(17), L(18), L(14)],
			value: aR.data.aIncomeType
		}, function(dS) {
			jO(), 2 !== dS || aR.data.aIncomeData || (aR.data.aIncomeData = new Uint8Array(aR.bS)), aR.data.aIncomeType = dS, n.d7(22)
		})), jX.push(jb)
	}(jX = []), function(jX) {
		var jb;
		1 === aR.data.aIncomeType && ((jb = new jc).jd("Value"), jb.jf(new ji({
			dS: -1,
			value: aR.data.aIncomeValue
		}, 1, 0, function(jj) {
			var value = dU.ls(Math.floor(jj.target.value), 0, 255);
			jj.target.value = aR.data.aIncomeValue = value
		})), jX.push(jb))
	}(jX), function(jX) {
		var jb;
		2 === aR.data.aIncomeType && ((jb = new jc).jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.aIncomeData, 4)), jb.jf(jG), jX.push(jb))
	}(jX), jX))
}

function lt() {
	function m0(m3, hu, hw) {
		for (var m4 = Math.min(hu, hw), m5 = Math.max(hu, hw), iF = m4 + 1; iF < m5; iF++)
			if (!cC.hA(cI.m6(m3, iF))) return;
		return 1
	}

	function m1(m7, ht, hv) {
		for (var m4 = Math.min(ht, hv), m5 = Math.max(ht, hv), iE = m4 + 1; iE < m5; iE++)
			if (!cC.hA(cI.m6(iE, m7))) return;
		return 1
	}

	function m2(ht, hu, hv, hw, lv, lw) {
		for (var du = Math.min(Math.abs(hv - ht), Math.abs(hw - hu)), hz = Math.sign(hv - ht), i0 = Math.sign(hw - hu), dw = 0; dw < du; dw++)
			if (!cC.hA(cI.m6(ht += hz, hu += i0))) return null;
		return ht === hv ? m0(ht, hu, hw) ? new Uint32Array([lv, cI.i1(ht, hu), lw]) : null : m1(hu, ht, hv) ? new Uint32Array([lv, cI.i1(ht, hu), lw]) : null
	}
	this.lu = function(lv, lw) {
		lv = function(lv, lw) {
			var ht = cI.gx(lv),
				hu = cI.gz(lv),
				hv = cI.gx(lw),
				hw = cI.gz(lw);
			if (ht === hv) {
				if (m0(ht, hu, hw)) return new Uint32Array([lv, lw])
			} else {
				if (hu !== hw) return m2(ht, hu, hv, hw, lv, lw) || m2(hv, hw, ht, hu, lv, lw);
				if (m1(hu, ht, hv)) return new Uint32Array([lv, lw])
			}
			return null
		}(lv, lw);
		return null === lv ? -1 : cJ.ly.lz(lv)
	}
}

function m8() {
	var iE, iF, aO, m9, mA, mB, mC, mD, mE, aN, mF, mG;
	this.mH = !1, this.j = function(fr, mI) {
		if (1 === aI.id && 13 <= aI.gK && aI.gK < 18) return mI ? void(mF = fr) : mF !== fr ? void 0 : void aI.gM.saveString(200, fr);
		mI && (mF = fr, (mG = document.createElement("a")).appendChild(document.createTextNode(mF)), this.mH = !0, mG.title = mF, mG.target = "_blank", mG.href = mF, mG.style.textAlign = "center", mG.style.color = fk.eC, mG.style.position =
			"absolute", mG.style.padding = "0px", mG.style.margin = "0px", this.resize(), document.body.appendChild(mG), s.ap = !0)
	}, this.jn = function() {
		return !(!this.mH || (document.body.removeChild(mG), this.mH = !1))
	}, this.mJ = function(mK, mL) {
		return !!this.mH && ((mK < iE || mL < iF || iE + aN < mK || iF + aO < mL || iE + aN - m9 < mK && mL < iF + m9) && (s.ap = !0, this.mH = !1, document.body.removeChild(mG)), !0)
	}, this.resize = function() {
		var mM, mO;
		this.mH && (mD = Math.floor(.8 * (aI.aJ.aK() ? aL.aN > aL.aO ? .6 : .55 : .4) * aL.aM), m9 = Math.floor(.15 * mD), mA = Math.floor(.35 * m9), mB = Math.floor(.5 * m9), mC = Math.floor(2.5 * mB), aO = m9 + mA + 3 * mB, mM = aW.bA.mN(1,
			mA / aL.bC), mE = Math.floor(aL.bC * ce.measureText(mF, mM)), mO = aN = (mD < mE ? mE : mD) + 2 * mC, aN = Math.min(aN, aL.aN - 2 * (aI.aJ.aK() ? 2 : 1) * dI.gap), mM = aW.bA.mN(1, aN / mO * mA / aL.bC), mE = Math.floor(aL
			.bC * ce.measureText(mF, mM)), iE = Math.floor((aL.aN - aN) / 2), iF = Math.floor((aL.aO - aO) / 2), mG.style.font = mM, mG.style.top = Math.floor((iF + 1.4 * mB + m9) / aL.bC) + "px", mG.style.left = Math.floor((iE + (aN -
			mE) / 2) / aL.bC) + "px")
	}, this.mP = function() {
		this.mH && (aC.fillStyle = fk.e9, aC.fillRect(iE, iF + m9, aN, aO - m9), aC.fillStyle = fk.fH, aC.fillRect(iE, iF, aN, m9), aC.fillStyle = fk.eC, aC.lineWidth = dI.b7, aC.strokeStyle = fk.eC, aC.strokeRect(iE, iF, aN, aO), aC.fillRect(iE,
			iF + m9, aN, dI.b7), aC.font = aW.bA.mN(1, .48 * m9), aW.bA.textAlign(aC, 1), aW.bA.textBaseline(aC, 1), aC.fillText("You are leaving Territorial.io!", Math.floor(iE + (aN - .5 * m9) / 2), Math.floor(iF + .55 * m9)), cd.mQ(
			Math.floor(iE + aN - .8 * m9), Math.floor(iF + .25 * m9), Math.floor(.5 * m9)), aC.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function mR() {
	this.mH = !1;
	this.mV = [], this.mW = 100;
	var iG, iH, gap, lU, mS, mU, mX = 0,
		mY = new Array(9),
		mZ = [],
		ma = [],
		mb = 0,
		mc = 0,
		md = 0,
		me = 0;

	function mt() {
		mY.sort(function(fm, fn) {
			return fn.mq - fm.mq
		});
		for (var fr = "" + mY[0].kn, dw = 1; dw < 9; dw++) fr += "," + mY[dw].kn;
		for (dw = 0; dw < 9; dw++) fr += "," + mY[dw].mq;
		gG.ku.kv(120, fr)
	}
	this.j = function() {
		for (var mf = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], dw = 0; dw < mf.length; dw++) {
			var color = 6 === mf[dw] ? fk.ec : fk.eA;
			this.mV.push(aW.canvas.mg(aF.get(3), mf[dw], color))
		}
		for (dw = 0; dw < mh.mi.mj; dw++) ma.push(mh.mi.mk - mh.mi.mj + dw);
		for (dw = 0; dw < mh.mi.ml; dw++) ma.push(mh.mi.mm + dw);
		var mn = mh.mi.mo(g7.mn);
		for (dw = 0; dw < mn.length; dw++) ma.push(mn[dw]);
		! function() {
			var dw, dY = gG.ku.data[120].value.split(",");
			if (18 !== dY.length)
				for (dw = 0; dw < 9; dw++) mY[dw] = {
					kn: 1015 + dw,
					mq: 0
				};
			else
				for (dw = 0; dw < 9; dw++) {
					var gp = parseInt(dY[dw]),
						dx = (gp = 0 <= gp && gp < mh.mi.mk ? gp : 0, parseInt(dY[dw + 9]));
					dx = 0 <= dx && dx < 1e3 ? dx : 0, mY[dw] = {
						kn: gp,
						mq: dx
					}
				}
		}()
	}, this.show = function(hY, hZ, mu) {
		var dw;
		if (mb = hY, mc = hZ, mX = mu || 0, this.mH = !0, mZ = [], 0 === mX)
			for (dw = 0; dw < 9; dw++) mZ.push(mY[dw].kn);
		else {
			var fn = 49 * mX,
				mu = fn - 49;
			for (mu >= ma.length && (mX = 1, mu = 0, fn = 49), dw = mu = (fn = Math.min(fn, ma.length)) - 49; dw < fn; dw++) mZ.push(ma[dw])
		}
		mZ.push(1024);
		mu = mZ.length, lU = Math.floor((aI.aJ.aK() ? .075 : .0468) * aL.aM), gap = Math.floor(lU / 3), (md = 10 * (mS = lU + gap)) > aL.aN && (md = aL.aN, gap = (mS = md / 10) - (lU = 3 * mS / 4)), mU = dU.dV(mu, 10) + !!(mu % 10), (me = mU *
			mS) > aL.aO && (me = aL.aO, gap = (mS = me / mU) - (lU = 3 * mS / 4)), mu = .5 * gap;
		iG = Math.min(Math.max(hY - .5 * md + mu, mu), aL.aN - md + mu), iH = Math.min(Math.max(hZ - .5 * me + mu, mu), aL.aO - me + mu)
	}, this.mJ = function(hY, hZ, player) {
		if (!this.mH) return !1;
		if (this.mx(hY, hZ)) {
			hY = dU.ls(dU.dV(hY - iG + .5 * gap, mS), 0, 9);
			if ((hY += 10 * dU.ls(dU.dV(hZ - iH + .5 * gap, mS), 0, 9)) >= mZ.length) return ch.jn(), !0;
			hZ = mZ[hY];
			if (1024 === hZ) return this.show(mb, mc, mX + 1), !0;
			! function(kn) {
				for (var dw = 0; dw < 9; dw++) mY[dw].mq = Math.floor(.99 * mY[dw].mq);
				for (dw = 0; dw < 9; dw++)
					if (kn === mY[dw].kn) return mY[dw].mq = Math.min(mY[dw].mq + 30, 999), mt();
				mY.splice(5, 0, {
					kn: kn,
					mq: Math.max(mY[4].mq, 30)
				}), mY.pop(), mt()
			}(hZ), player === aR.ad ? c7.my.ko(hZ) : c7.aX.mz(hZ, player)
		}
		return ch.jn(), !0
	}, this.mx = function(hY, hZ) {
		return !(hY < iG - .5 * gap || hZ < iH - .5 * gap || iG + md - .5 * gap <= hY || iH + me - .5 * gap <= hZ)
	}, this.mP = function() {
		aC.fillStyle = fk.e9, aC.fillRect(iG - .5 * gap, iH - .5 * gap, md, me);
		for (var n0 = .5 * dI.b7, du = (aC.lineWidth = dI.b7, aC.strokeStyle = aC.fillStyle = fk.eC, aC.strokeRect(iG - .5 * gap + n0, iH - .5 * gap + n0, md - 2 * n0, me - 2 * n0), aC.imageSmoothingEnabled = !0, mZ.length), dw = 0; dw <
			du; dw++) this.n1(mZ[dw], aC, iG + dw % 10 * mS, iH + dU.dV(dw, 10) * mS, lU);
		aC.imageSmoothingEnabled = !1
	}, this.n1 = function(kn, n2, iE, iF, lU) {
		var gt;
		kn >= 1024 - mh.mi.mj ? (gt = lU / this.mW, n2.setTransform(gt, 0, 0, gt, iE, iF), n2.drawImage(this.mV[kn - 1024 + mh.mi.mj], 0, 0), n2.setTransform(1, 0, 0, 1, 0, 0)) : (aW.bA.textAlign(n2, 1), aW.bA.textBaseline(n2, 1), n2.font = aW.bA
			.mN(0, .89 * lU), n2.fillText(mh.mi.n3(kn), iE + .5 * lU, iF + (.35 - aW.bA.n4 + .56) * lU))
	}
}

function n5() {
	this.n6 = function(jt) {
		var username = gG.ku.data[122].value.slice(0, 20),
			username = (dW.cN(24 + 16 * username.length + 18 + 18 + n7.n8.jw()), dW.dh(1, 0), dW.dh(6, 1), dW.dh(10, c1.lO), dW.dh(2, gG.ku.data[158].value), u.n9.nA(username), aW.color.nC(gG.v.nD())),
			username = (dW.dh(6, username[0]), dW.dh(6, username[1]), dW.dh(6, username[2]), kw.nF());
		dW.dh(9, username[0]), dW.dh(9, username[1]), n7.n8.d1(), u.v.x = jt, u.v.send(jt, dW.ju)
	}, this.nG = function(nH, nI) {
		dR.j(), dR.dh(1, 0), dR.dh(6, 2), dR.dh(3, nH), 2 === nH ? dR.dh(2, nI) : 3 === nH ? dc.nJ.d1(nI, 7, dR) : 5 === nH && (dR.dh(3, nI.id), dR.dh(3, nI.value), dR.dh(30, nI.nK)), u.v.send(u.v.x, dR.nL())
	}
}

function nM() {
	cH.aD(), aC.setTransform(nN, 0, 0, nN, 0, 0), aC.imageSmoothingEnabled = nN < 3, aC.drawImage(gu.nO, cX.nP(), cX.nQ()), cS.nR.mP(), aC.drawImage(nS, cX.nP(), cX.nQ()), cH.mP(), cJ.mP(), cn.mP(), (aR.bg ? (ag.mP(), cZ) : (cf.mP(), cW.mP(), cY
	.mP(), cZ.mP(), ca.mP(), cc.mP(), cX.mP(), ce.mP(), ag.mP(), cb.mP(), cg.mP(), cd.mP(), ch.mP(), ci.mP(), cT.mP(), cs)).mP(), n.mP()
}

function nT(nU, aN, aO) {
	nU.clearRect(0, 0, aN, aO), nU.fillStyle = fk.e9, nU.fillRect(0, 0, aN, aO)
}

function nV(nU, aN, aO, nW) {
	nU.fillStyle = fk.eC, nU.fillRect(0, 0, aN, nW), nU.fillRect(0, 0, nW, aO), nU.fillRect(aN - nW, 0, nW, aO), nU.fillRect(0, aO - nW, aN, nW)
}

function nX(nU, iE, iF, lU, nW, fl, nY) {
	nU.fillStyle = fk.eC;
	var fl = Math.floor(lU * fl),
		na = (fl += (fl - nW) % 2, Math.floor((fl - nW) / 2)),
		lU = Math.floor((lU - fl) / 2);
	nU.fillRect(iE + lU, iF + lU + na, fl, nW), nY && nU.fillRect(iE + lU + na, iF + lU, nW, fl)
}

function nc() {
	this.b2 = function() {
		var nk;
		2 === aR.aS ? (cf.gV(0, 59), ct.nd(2700)) : aR.aV < 7 ? (nk = aj.ak[aR.ai], nk = aj.fo[nk], ce.nm(L(19, [nk]), 2, 1, 12), cf.fj(0, L(20, [nk]), 40, 0, fk.eC, fk.e9, -1, !1), ct.nd(2700)) : 8 === aR.aV ? (aR.aT ? cf.gV(aR.ab, 2) : cf.gV(
			1 - aR.ad, 3), aR.bn.ni(aR.ab), ct.nj(aR.ab, 2700, !1, 0)) : 9 === aR.aV ? (cf.nn(), ct.nd(2700)) : (cf.no(aR.ab), ct.nj(aR.ab, 2700, !1, 0))
	}
}

function oF(oG) {
	c1 && !oG || (oI(), dU = new oJ, g7 = new oK, aW = new oL, fk = new e2, aR = new bR, kw = new oM, dc = new oN, kV = new oO, cM = new oP, cj = new oQ, ck = new oR, ct = new oS, cO = new oT, cP = new oU, np = new oV, ch = new oW, cd = new oX, cf =
		new oY, nq = new oZ, cg = new oa, ce = new ob, cY = new oc, cX = new od, kK = new oe, cb = new og, cW = new oh, cc = new oi, ci = new oj, nr = new ok, ns = new ol, r = new om, aF = new on, cC = new oo, gd = new op, bF = new oq, nu =
		new or, cm = new os, bL = new ot, nt = new bD, cn = new ou, aZ = new ov, c5 = new ow, by = new ox, mh = new oy, cE = new oz, ln = new p0, nv = new p1, u = new p2, c3 = new p3, cK = new p4, cH = new p5, nw = new p6, cs = new p7, aL =
		new p8, ca = new p9, k3 = new a, cq = new pA, nx = new pB, gg = new pC, co = new pD, cp = new pE, ny = new pF, c7 = new pG, cR = new pH, cZ = new pI, dW = new pJ, dR = new pK, da = new pL, nz = new pM, o0 = new pN, cI = new pO, cJ =
		new pP, bw = new pQ, cS = new pR, o1 = new gT, bx = new pS, gu = new pT, o2 = new pU, n = new pV, d4 = new pW, aI = new gJ, c1 = new lJ, n7 = new pX, gG = new pY, aj = new pZ, ag = new pa, o7 = new pb, cG = new pc, cL = new pd, o3 =
		new pe, cA = new pf, cT = new pg, s = new an, o8 = new ph, dI = new b6, o9 = new pi, oA = new pj, oB = new pk, p = new pl, oD = new pm, d3 = new pn, oE = new po, hK = new pp, c1.j(), aI.j(), aL.cD(), gG.j(), kw.j(), kw.pr(), (o4 = new ps)
		.j(), aW.j(), cL.j(), u.j(), dc.j(), kV.j(), gu.j(), n.j(), o5 = new pt, aL.j(), aI.aJ.pu(), s.j(), dI.j(), o3.j(), o6 = new m8, c3.j(), bL.dk(), d4.j(), cE.j(), r.j(), kK.j(), c5.j(), o0.j(), aF.j(), n7.j(), s.ap = !0, setTimeout(
			function() {
				gu.cN(2, 14071)
			}, 0), n.d7(5, 5), nz.pv() || aI.aJ.pw(), aL.kx(), c1.lP = 1)
}

function px() {
	this.ga = function(py) {
		return 0 === py ? 1 === aR.bf && aR.bh : 1 === py ? 1 === aR.bf && !aR.bh : 2 === aR.bf
	}, this.fT = function(player) {
		return 0 !== aZ.aa[player] && 2 !== aZ.gZ[player]
	}, this.pz = function(player) {
		return player === aR.ad && 2 !== aZ.gZ[player]
	}, this.iN = function(player, hI) {
		return player !== hI && (0 === aj.al[player] || aj.al[player] !== aj.al[hI])
	}, this.q0 = function() {
		return bF.bG < 2 ? 0 : aR.ae ? 1 < ag.q1() : aZ.ac[am[1]]
	}, this.q2 = function() {
		var bG = bF.bG;
		if (0 !== bG) {
			if (!aR.ae) return !this.aY(am[0]);
			for (var al = aj.al, af = ag.bQ(), q3 = bF.q3, dw = bG - 1; 0 <= dw; dw--) {
				var fl = q3[dw];
				if (al[fl] === af && !this.aY(fl)) return 1
			}
		}
		return 0
	}, this.q4 = function(player) {
		return player === aR.ad
	}, this.aY = function(player) {
		return player >= aR.bY || 2 === aZ.gZ[player]
	}, this.q5 = function(player) {
		return 0 !== aZ.aa[player]
	}, this.q6 = function(player) {
		return player < aR.bY
	}, this.q7 = function(q8, q9) {
		return q8 !== q9
	}, this.qA = function(player, gp) {
		var min;
		return gp = this.qB(player, gp), aZ.bN[player] += gp, aZ.qC[player] && (min = Math.min(aZ.qC[player], aZ.bN[player]), aZ.qC[player] -= min, aZ.bN[player] -= min), gp
	}, this.qB = function(player, gp) {
		var qD = aZ.bN[player];
		return gp = Math.min(gp, aZ.ac[player] * aR.be - qD), gp = Math.min(gp, aR.bT - qD), Math.max(gp, 0)
	}, this.qE = function(player, qF, qG, qH) {
		var qD = aZ.bN[player],
			qF = dU.dV(qD * (qF + 1), 1024),
			qG = dU.dV(qG * qD, 1024),
			qF = Math.min(qF, qD - qG);
		return 10 === aR.aV && (qF = co.qJ(player, qF)), bw.qK[0] = qF, bw.qK[1] = qG, qH <= qF
	}, this.qL = function(player, qM, qN) {
		var player = aZ.bN[player],
			qI = dU.dV(64 * player, 1024),
			player = (qM = Math.min(qM, player - qI), this.qP(qM));
		return qI += player, qM = this.qB(qN, qM -= player), bw.qK[0] = qM, bw.qK[1] = qI, 1 <= qM
	}, this.qQ = function(qM, qN) {
		var qO = this.qP(qM);
		return qM = this.qB(qN, qM -= qO), bw.qK[0] = qM, bw.qK[1] = qO, 1 <= qM
	}, this.qR = function(player, qS) {
		return dU.dV(aZ.bN[player] * (qS + 1), 1024)
	}, this.qP = function(qT) {
		return dU.dV(Math.max(2142 - s.a6(), 0) * qT, 2142)
	}, this.qU = function(player, qG) {
		qG = dU.dV(qG * aZ.bN[player], 1024);
		bw.qK[1] = qG, aZ.bN[player] -= qG
	}, this.j7 = function(player, qV) {
		var dq, ds, fn = aZ.bN[player];
		return qV <= fn ? aZ.bN[player] -= qV : (aZ.bN[player] = 0, ds = aZ.qC[player] + (dq = 5 * ((fn = qV - fn) >> 2)), cA.j4(player, dq - fn, 12), ds <= aR.bV ? aZ.qC[player] = ds : (aZ.qC[player] = aR.bV, cA.j4(player, ds - aR.bV, 18))), qV
	}, this.qW = function(player, qF) {
		var bN = aZ.bN,
			qD = bN[player],
			qF = dU.dV(qD * (qF + 1), 1024),
			qI = Math.max(dU.dV(qD, 10), 1e3);
		return (qF = Math.min(qF, qD - qI)) < 0 ? (bN[player] = 0, qI = Math.min(1e3, qD + aR.bV - aZ.qC[player]), bw.qK[1] = qI, aZ.qC[player] += qI - qD, 0) : (bw.qK[1] = qI, 10 === aR.aV && (qF = co.qJ(player, qF)), bN[player] -= qI + qF, qF)
	}, this.qX = function(player) {
		aZ.bN[player] -= bw.qK[0] + bw.qK[1]
	}, this.qY = function(player, hI) {
		return (hI = Math.min(hI, aR.bS)) < aR.bS && 0 === aZ.aa[hI] && (hI = aR.bS), (bw.qZ[0] = hI) === aR.bS || hK.hL(player, hI)
	}, this.qa = function(player, qN) {
		return 0 !== aZ.aa[qN] && !hK.hL(player, qN)
	}, this.qb = function(player, qc) {
		for (var fl, du = bF.bG, qd = 0, qe = am, dw = 0; dw < du; dw++)
			if (fl = qe[dw], !this.aY(fl)) {
				if (player === fl) return !0;
				if (++qd > qc) return !1
			} return !1
	}, this.qf = function(fl) {
		var qg = aR.ae ? ag.qh() : aZ.ac[am[0]];
		return qg >= dU.dV(fl * aR.bH, 100)
	}, this.qi = function(gp, min, max) {
		return Math.floor(dU.ls(isNaN(gp) ? 0 : Number(gp), min, max))
	}
}

function pN() {
	var qj, qk, ql = -15e3,
		qm = !1;

	function mJ(jj) {
		n7.n8.r7[0] = 1, r8() || (qm = !0, r9(jj, 1), u.v.rA(u.v.w), rB(Math.floor(aL.bC * jj.clientX), Math.floor(aL.bC * jj.clientY)))
	}

	function qv(jj) {
		n7.n8.r7[6] = 1, ql = s.t, r9(jj, 1), u.v.rA(u.v.w), 0 < jj.touches.length && (qj = Math.floor(aL.bC * jj.touches[0].clientX), qk = Math.floor(aL.bC * jj.touches[0].clientY), nw.qv(jj) || rB(qj, qk))
	}

	function rB(iE, iF) {
		n.mJ(iE, iF), 0 === aR.bf ? r.mJ(iE, iF) : cZ.rC(iE, iF) || cT.mJ(iE, iF) || ci.mJ(iE, iF) || ch.rD(iE, iF) || cg.mJ(iE, iF) || 0 <= cd.mJ(iE, iF) || ca.mJ(iE, iF) || o0.rE(iE, iF) || ch.rF(iE, iF)
	}

	function qr(jj) {
		n7.n8.r7[1] = 1, r8() || (qm = !0, r9(jj, 1), rG(Math.floor(aL.bC * jj.clientX), Math.floor(aL.bC * jj.clientY)))
	}

	function qw(jj) {
		n7.n8.r7[7] = 1, ql = s.t, r9(jj, 1), 0 < jj.touches.length && (qj = Math.floor(aL.bC * jj.touches[0].clientX), qk = Math.floor(aL.bC * jj.touches[0].clientY), nw.qw(jj) || rG(qj, qk))
	}

	function rG(iE, iF) {
		n.qr(iE, iF), 0 === aR.bf ? r.qr(iE, iF) : (o2.rH(iE, iF), cT.qr(iE, iF) || (cd.qr(iE, iF), ch.mH() ? ch.qr(iE, iF) : cY.rI ? cY.qr(iE) && (s.ap = !0) : (cW.qr(iE, iF), cX.rJ && cX.qr(iE, iF) && (s.ap = !0))))
	}

	function qt(jj) {
		n7.n8.r7[4] = 1, r8() || (r9(jj, 1), rK(), 0 === aR.bf ? (r.click(-1024, -1024), kK.rL()) : (cW.rM(-1024, -1024), cd.qr(-1024, -1024), cY.rN(), cX.rJ = !1))
	}

	function qs(jj) {
		n7.n8.r7[2] = 1, r8() || (r9(jj, 1), rO(Math.floor(aL.bC * jj.clientX), Math.floor(aL.bC * jj.clientY), 2 === jj.button), o0.qp && (o0.qp = !1, jj.preventDefault()))
	}

	function click(jj) {
		n7.n8.r7[3] = 1, r8() || r9(jj, 1)
	}

	function qx(jj) {
		n7.n8.r7[8] = 1, ql = s.t, r9(jj, 1), jj && jj.touches && 0 < jj.touches.length && 0 !== aR.bf ? cX.rJ = !1 : nw.rP() || (rO(qj, qk, !1), o0.qp && (o0.qp = !1, jj.preventDefault()))
	}

	function qy(jj) {
		n7.n8.r7[9] = 1, ql = s.t, r9(jj, 1), rO(qj, qk, !1), o0.qp && (o0.qp = !1, jj.preventDefault())
	}

	function qz(jj) {}

	function r0(jj) {}

	function r1(jj) {
		r8() || r9(jj, 0)
	}

	function rO(iE, iF, rQ) {
		rK(), 0 === aR.bf ? r.click(iE, iF) : (cW.rM(iE, iF), cT.rM(), cY.rN(), cX.rJ = !1, ch.click(iE, iF, rQ) ? s.ap = !0 : cd.qs(iE, iF))
	}

	function rK() {
		n.rK()
	}

	function qu(jj) {
		var iE, iF, deltaY;
		n7.n8.r7[5] = 1, r8() || (r9(jj, 1), u.v.rA(u.v.w), iE = Math.floor(aL.bC * jj.clientX), iF = Math.floor(aL.bC * jj.clientY), deltaY = jj.deltaY, 1 === jj.deltaMode && (deltaY *= 16), n.qu(iE, iF, deltaY), 0 === aR.bf ? r.qu(iE, iF, deltaY) :
			cW.qu(iE, iF, deltaY) || (cY.rR(iE, iF) ? cY.qu(deltaY) && (s.ap = !0) : cX.qu(iE, iF, deltaY)))
	}

	function r2(jj) {
		r9(jj, 0)
	}

	function r9(jj, id) {
		0 === id && n.mH() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== r.a8() && jj.preventDefault()
	}

	function r3(jj) {
		if (__fx.keybindHandler(jj.key)) return;
		n7.n8.r7[10] = 1, r8() || 0 < aL.rU || (jj = jj.code) && jj.length && (o4.dx(jj, 18) ? nv.rV(3) : o4.dx(jj, 22) ? nv.rV(0) : o4.dx(jj, 20) ? nv.rV(1) : o4.dx(jj, 24) ? nv.rV(2) : o4.dx(jj, 10) ? cY.rW(31 / 32) : o4.dx(jj, 8) ? cY.rW(32 /
			31) : o4.dx(jj, 6) ? cY.rW(7 / 8) : o4.dx(jj, 4) ? cY.rW(8 / 7) : o4.dx(jj, 14) ? 0 !== aR.bf && cX.qu(Math.floor(aL.aN / 2), Math.floor(aL.aO / 2), -200) : o4.dx(jj, 16) ? 0 !== aR.bf && cX.qu(Math.floor(aL.aN / 2), Math.floor(aL
				.aO / 2), 200) : o4.dx(jj, 0) ? aR.bf && o2.rX(0) : o4.dx(jj, 2) ? aR.bf && o2.rX(1) : o4.dx(jj, 30) ? aR.bf && o2.rX(2) : o4.dx(jj, 26) ? aR.bf && o2.rY() : o4.dx(jj, 28) && aR.bf && o2.rZ())
	}

	function r4(jj) {
		if (n7.n8.r7[11] = 1, !r8() && !(0 < aL.rU || s.t < 400)) {
			var code = jj.code;
			if (code && code.length && !("Enter" === code && n.jo(1) || "Space" === code && n.jo(0))) return p.ra ? p.rb.jo(code) ? void 0 : void("Escape" === code && o0.rc()) : void(8 !== r.a8() && r.jo(jj) ? s.ap = !0 : "Escape" === code ? o0
			.rc() : o4.dx(code, 18) ? nv.rd(3) : o4.dx(code, 22) ? nv.rd(0) : o4.dx(code, 20) ? nv.rd(1) : o4.dx(code, 24) ? nv.rd(2) : o4.dx(code, 12) ? cZ.re(!aR.bg) : "Space" === code && aR.bf && (cd.d9 && cd.rf(), aR.aw) && cZ.rg(!1))
		}
	}

	function r5() {
		n7.n8.r7[12] = 1, "hidden" !== document.visibilityState && (s.ap = !0)
	}

	function r8() {
		return ql + 15e3 > s.t
	}

	function resize() {
		n7.n8.r7[13] = 1, aL.rj()
	}

	function r6() {
		aI.gL && aI.gL.setItem("qix3", "0")
	}
	this.qn = 0, this.qo = "", this.qp = !1, this.j = function() {
		qq.addEventListener("mousedown", mJ, {
			passive: !1
		}), qq.addEventListener("mousemove", qr, {
			passive: !1
		}), qq.addEventListener("mouseup", qs, {
			passive: !1
		}), qq.addEventListener("click", click, {
			passive: !1
		}), qq.addEventListener("mouseleave", qt, {
			passive: !1
		}), qq.addEventListener("wheel", qu, {
			passive: !1
		}), qq.addEventListener("touchstart", qv, {
			passive: !1
		}), qq.addEventListener("touchmove", qw, {
			passive: !1
		}), qq.addEventListener("touchend", qx, {
			passive: !1
		}), qq.addEventListener("touchcancel", qy, {
			passive: !1
		}), qq.addEventListener("dragover", qz), qq.addEventListener("drop", r0), qq.addEventListener("dblclick", r1), document.addEventListener("contextmenu", r2), document.addEventListener("keydown", r3), document.addEventListener("keyup",
			r4), document.addEventListener("visibilitychange", r5), window.addEventListener("resize", resize), window.addEventListener("beforeunload", r6)
	}, this.rE = function(iE, iF) {
		return !!cZ.mJ(iE, iF) || !!(cW.mJ(iE, iF) || cX.mJ(iE, iF) || cY.mJ(iE, iF) || cf.mJ(iE, iF))
	}, this.rh = r8, this.ri = function() {
		return !qm || 0 < ql
	}, this.rc = function() {
		if (!n.mH()) return 8 === r.a8() ? aR.bg ? void cZ.re(!1) : cT.mH ? void cT.rf() : void cd.rf() : void(7 !== r.a8() && 6 === r.a8() && ns.rk());
		n.jo(2)
	}
}

function rl() {
	var rm, rn, ro, rp, rq, rr, colors = [0, 0, 0],
		rs = -1;

	function s2(dw) {
		var s3 = rn.iF + dw * (dI.gap + rr);
		aC.fillStyle = "rgb(" + (0 === dw ? 150 : 2 === dw ? 30 : 0) + "," + (1 === dw ? 130 : 2 === dw ? 30 : 0) + "," + (2 === dw ? 220 : 0) + ")", aC.fillRect(rp, s3, colors[dw] * rq, rr), aC.strokeStyle = fk.eC, aC.strokeRect(rp, s3, rq, rr), aC
			.fillStyle = fk.eC, aC.font = aW.bA.mN(0, .32 * rr), aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 0), aC.fillText(L(0 === dw ? 23 : 1 === dw ? 24 : 25) + rv(dw), rp + dI.gap, s3 + .53 * rr)
	}

	function rv(dw, s4) {
		return s4 = s4 || 256, dU.ls(Math.floor(s4 * colors[dw]), 0, s4 - 1)
	}

	function rR(hY, hZ) {
		return !(hY < rp || hZ < rn.iF || hY > rn.iE + rn.aN || hZ > rn.iF + rn.aO)
	}
	this.show = function() {
		var gp = gG.ku.data[121].value;
		colors[0] = (gp >> 12) / 63, colors[1] = (gp >> 6 & 63) / 63, colors[2] = (63 & gp) / 63, rm.show(), this.resize()
	}, this.jn = function() {
		gG.gH.gI(121, (rv(0, 64) << 12) + (rv(1, 64) << 6) + rv(2, 64)), rm.jn()
	}, this.resize = function() {
		rm.resize(), rn.resize();
		var dx = aL.bC,
			rw = rm.rx(),
			rz = (rn.iF = Math.max(rn.iF, dx * rw.ry + dI.gap), dx * rw.s0 - 2 * dI.gap);
		rn.aO = Math.min(rn.aO, rz), rn.aN = 2 * rn.aO, rn.iF = dx * rw.ry + .5 * (dx * rw.s0 - rn.aO), rn.iE = .5 * (aL.aN - rn.aN), ro = .25 * rn.aN, rp = rn.iE + ro + dI.gap, rq = rn.aN - ro - dI.gap, rr = (rn.aO - 2 * dI.gap) / 3
	}, this.mP = function() {
		var rT, fh, fn;
		rm.mP(), aC.lineWidth = dI.b7, rT = rv(0), fh = rv(1), fn = rv(2), aC.fillStyle = "rgb(" + rT + "," + fh + "," + fn + ")", aC.fillRect(rn.iE, rn.iF, ro, rn.aO), aC.strokeStyle = fk.eC, aC.strokeRect(rn.iE, rn.iF, ro, rn.aO), aC
			.fillStyle = rT + fh + fn < 306 && fh < 150 ? fk.eC : fk.e3, aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 1), aC.font = aW.bA.mN(0, .1 * rn.aO), aC.rotate(-Math.PI / 2), aC.fillText(L(22), -rn.iF - .5 * rn.aO, rn.iE + .5 * ro), aC
			.setTransform(1, 0, 0, 1, 0, 0), s2(0), s2(1), s2(2)
	}, this.mJ = function(hY, hZ) {
		rR(hY, hZ) && (rs = dU.ls(Math.floor((hZ - rn.iF) / (rr + .75 * dI.gap)), 0, 2), colors[rs] = dU.ls((hY - rp) / rq, 0, 1), s.ap = !0)
	}, this.qr = function(hY) {
		-1 !== rs && (colors[rs] = dU.ls((hY - rp) / rq, 0, 1), s.ap = !0)
	}, this.qu = function(hY, hZ, deltaY) {
		rR(hY, hZ) && (hY = dU.ls(Math.floor((hZ - rn.iF) / (rr + .75 * dI.gap)), 0, 2), colors[hY] = dU.ls(colors[hY] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), s.ap = !0)
	}, this.rK = function() {
		0 <= rs && (rs = -1, s.ap = !0)
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(L(21), [new jJ("⬅️ " + L(10), function() {
		n.v.rt()
	})], !1), rn = new ru([.5, .25], [.5, .5], 1)
}

function p2() {
	this.v = new s5, this.s6 = new s7, this.z = new s8, this.s9 = new n5, this.n9 = new sA, this.sB = new sC, this.sD = new sE, this.sF = new sG, this.sH = new jr, this.k1 = new sI, this.k4 = new sJ, this.k6 = new sK, this.kA = new sL, this.j =
		function() {
			this.v.j()
		}
}

function sM() {
	this.mP = function() {
		if (0 !== cS.v.sN && (aC.globalAlpha = Math.min(cS.v.sN / 580, 1), aC.drawImage(cS.v.sQ, 1 + cX.nP(), 1 + cX.nQ()), aC.globalAlpha = 1, aR.bh)) {
			for (var iG = sR / nN, iH = sS / nN, iI = (aL.aN + sR) / nN, iJ = (aL.aO + sS) / nN, sT = cS.v.sU * nN, sV = cS.v.sV, dw = aR.bY - 1; 0 <= dw; dw--) ! function(dw, sT, iG, iH, iI, iJ, sV) {
				var highlight;
				0 === aZ.aa[dw] || 0 === aZ.ac[dw] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[dw]) && (sT *= 2), iI = aL.aN * ((aZ.sX[dw] + aZ.sY[dw] + 1) / 2 - iG) / (iI - iG) - .5 * sT, iG = aL.aO * ((aZ
					.sZ[dw] + aZ.sa[dw] + 1) / 2 - iH) / (iJ - iH) - .5 * sT, iI > aL.aN) || iG > aL.aO || iI < -sT || iG < -sT || (highlight ? aC.setTransform(2 * nN, 0, 0, 2 * nN, iI, iG) : aC.setTransform(nN, 0, 0, nN, iI, iG), aC
					.drawImage(sV[aR.ae ? aj.al[dw] : 1], 0, 0))
			}(dw, sT, iG, iH, iI, iJ, sV);
			aC.setTransform(nN, 0, 0, nN, 0, 0)
		}
	}
}

function sb() {
	var sc = [],
		sd = [],
		se = [];

	function sg(dg) {
		for (var sl = dg.sl, sf = [];;) {
			var dx = function sm(sl, position) {
				position = sl.indexOf("@", position);
				if (position < 0) return -1;
				var fr = sl.substring(position + 1, position + 6);
				if (5 !== fr.length) return sm(sl, position + 1);
				if (aW.fv.startsWith(fr, "room")) return sm(sl, position + 1);
				var tD = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!tD.test(fr)) return sm(sl, position + 1);
				tD = sl.substring(position + 6, position + 7);
				if (1 !== tD.length) return position;
				fr = new RegExp("^[ :!.]+$");
				if (!fr.test(tD)) return sm(sl, position + 1);
				return position
			}(sl, 0);
			if (-1 === dx) {
				sf.push(sn(sl, dg));
				break
			}
			0 === dx ? sf.push(so(sl.substring(1, 6), dg, dx)) : (sf.push(sn(sl.substring(0, dx), dg)), sf.push(so(sl.substring(dx + 1, dx + 6), dg, dx))), sl = sl.substring(dx + 6)
		}
		return sf
	}

	function so(fr, dg, dx) {
		var sp = function(fr) {
				var nK = kV.dd.t8(fr),
					sp = p.t9.tA(nK);
				if (sp) {
					for (sc.push(sp); 75 < sc.length;) sc.shift();
					return sp
				}
				for (var tB = p.t9.tB, dw = tB.length - 1; 0 <= dw; dw--)
					if (sp = tB[dw], nK === sp.nK) return sc.push(sp), sp;
				for (dw = sc.length - 1; 0 <= dw; dw--)
					if (sp = sc[dw], nK === sp.nK) return sc.push(sp), sp;
				return p.t9.tC(nK, fr, 1, 999999, 999999, 0, 0, 0, 0)
			}(fr),
			fr = (0 === dx && 0 === dg.sh.id && dg.si && (dg.fontSize = p.sr.ss(sp.st, sp.qd), dg.sk = p.sr.su(sp.qd)), document.createElement("span"));
		return fr.textContent = function(sp, dg, dx) {
			if (sp.t2) return sp.t2--, dx = 2 === dg.sh.id || (3 === dg.sh.id || 4 === dg.sh.id) && 0 !== dx, sp.username + (dx ? " (" + sp.t4 + ")" : "");
			if (dg.sh.t5) return "Redacted " + dc.dd.t6(sp.nK, 2);
			return sp.username
		}(sp, dg, dx), fr.style.display = "inline-block", fr.style.color = p.sr.sx(sp.st), fr.style.cursor = "pointer", fr.style.margin = "0", fr.style.font = "inherit", fr.style.minWidth = fr.style.minHeight = "1em", p.sr.sy(sp) && (fr.style
			.textDecoration = "underline"), p.sr.su(sp.qd) && (fr.style.fontWeight = "bold"), fr.onclick = function(jj) {
			p.rb.sz(jj, sp)
		}, o0.ri() || (fr.onmouseover = function(jj) {
			p.t0.t1(jj, sp)
		}), sd.push(fr), fr
	}

	function sn(sl, dg) {
		var sv = document.createElement("span");
		return sv.textContent = sl, sv.style.color = dg.t7, sv.style.margin = "0", sv.style.font = "inherit", sv
	}

	function tK(sp, tJ, nK) {
		nK !== sp.nK || sp.t4 || (sp.t4 = sp.username, sp.t2 = 3, sp.username = tJ)
	}
	this.q = function() {
		for (var dw = 0; dw < sd.length; dw++) sd[dw].onclick = sd[dw].onmouseover = null;
		se = sd = null
	}, this.transform = function(dg) {
		for (var dF = document.createElement("div"), sf = sg(dg), dw = 0; dw < sf.length; dw++) dF.appendChild(sf[dw]);
		0 === dg.sh.id && (dF.vx143 = dg.sh, se.push(dF)), dF.style.margin = "0.6em 0.6em", dg.si && (dF.style.marginLeft = dF.style.marginRight = "inherit"), dF.style.font = "inherit";
		var sj = 0 < dg.sh.id;
		return dg.sk && (dF.style.fontWeight = "bold"), sj && (dF.style.paddingLeft = "0.7em"), sj && (dF.style.fontStyle = "italic"), dF.style.fontSize = dg.fontSize.toFixed(2) + "em", dF
	}, this.tG = function(tH) {
		if (tH && (2 === tH.id && 1 === tH.tI || 3 === tH.id && 2 === tH.tI)) {
			var nK = 3 === tH.id ? tH.target : tH.nK;
			if (!p.t9.tA(nK)) {
				for (var tJ = "Redacted " + dc.dd.t6(nK, 2), tB = p.t9.tB, dw = tB.length - 1; 0 <= dw; dw--) tK(tB[dw], tJ, nK);
				for (dw = sc.length - 1; 0 <= dw; dw--) tK(sc[dw], tJ, nK)
			}
		}
	}, this.tL = function(nK) {
		for (var tM = se, dw = tM.length - 1; 0 <= dw; dw--) {
			var kR = tM[dw];
			if (kR.vx143.nK === nK) {
				for (; kR.firstChild;) kR.removeChild(kR.firstChild);
				kR.vx143.sl = "[Redacted Message]";
				for (var sf = sg(p.sr.tN(kR.vx143, p.sr.tO(kR.vx143))), fm = 0; fm < sf.length; fm++) kR.appendChild(sf[fm]);
				tM.splice(dw, 1)
			}
		}
	}
}

function tP() {
	function ti() {
		gu.tj.b2()
	}

	function tv(fl, tt) {
		0 < tt && (gu.tu[fl] += tt, gu.tu[fl + 1] += tt, gu.tu[fl + 2] += tt)
	}

	function hA(fl) {
		return gu.tu[fl + 2] > gu.tu[fl] && gu.tu[fl + 2] > gu.tu[fl + 1]
	}
	this.tQ = -1, this.py = 0, this.tR = 0, this.tS = 8, this.tT = 32, this.tU = 8, this.tV = 32, this.tW = [0, 0], this.tX = [0, 0, 0, 0], this.tY = null, this.tZ = !0, this.ta = !1, this.tb = function() {
		-1 !== this.tQ && clearTimeout(this.tQ), this.tQ = -1, this.tY = null, ln.tc()
	}, this.j = function() {
		7 === r.a8() || this.ta || (this.tZ = !0, this.py = 0, this.tR = 1, this.tW = [gu.td.te[gu.ib].tf[0], gu.td.te[gu.ib].tg[0]], this.tX = [gu.td.te[gu.ib].th[3], gu.td.te[gu.ib].th[4], gu.td.te[gu.ib].th[5], gu.td.te[gu.ib].th[6]], this
			.tS = gu.td.te[gu.ib].th[7], this.tT = gu.td.te[gu.ib].th[8], this.tU = gu.td.te[gu.ib].th[9], this.tV = gu.td.te[gu.ib].th[10], this.tZ ? this.tQ = setTimeout(ti, 16) : this.b2())
	}, this.b2 = function() {
		if (8 === r.a8() && ct.tk()) this.tQ = setTimeout(ti, 16);
		else {
			if (0 === this.py) {
				var tl = c3.tm();
				if (c3.c4(gu.td.te[gu.ib].th[2]), ln.cN([gu.gv, gu.h1, gu.td.te[gu.ib].th[0], gu.td.te[gu.ib].th[1]]), c3.c4(tl), this.tY = ln.lo(), this.py++, this.tZ) return void(this.tQ = setTimeout(ti, 16))
			}
			for (var fl, go, tl = this.tZ ? 10 : 1e6, tl = gu.h1 - this.tR - 1 < tl ? gu.h1 - this.tR - 1 : tl, tn = this.tR + tl, iF = this.tR; iF < tn; iF++)
				for (var iE = 1; iE < gu.gv - 1; iE++) hA(fl = 4 * (go = iE + iF * gu.gv)) ? this.to(fl, go, 1) : (this.to(fl, go, 0), function(iE, iF, fl) {
					return 1 < iE && hA(fl - 4) || iE < gu.gv - 2 && hA(fl + 4) || 1 < iF && hA(fl - 4 * gu.gv) || iF < gu.h1 - 2 && hA(fl + 4 * gu.gv)
				}(iE, iF, fl) && this.tq(iE, iF));
			this.tR = tn, this.tR >= gu.h1 - 1 ? (gu.tr.putImageData(gu.ts, 0, 0, 1, 1, gu.gv - 2, gu.h1 - 2), s.ap = !0, this.tb()) : this.tZ && (this.tQ = setTimeout(ti, 16))
		}
	}, this.to = function(fl, go, dS) {
		tv(fl, Math.floor(this.tW[dS] + this.tX[dS] * this.tY[go] / 1e4) - gu.tu[fl])
	}, this.tw = function(fl, rT, tx, dS, tX) {
		tv(fl, Math.floor(this.tW[dS] + (1 - rT / tx) * tX) - gu.tu[fl])
	}, this.tq = function(hY, hZ) {
		for (var fl, rT, tx, ty = hY - this.tT, tz = hZ - this.tT, u0 = hY + this.tT, tn = hZ + this.tT, ty = ty < 1 ? 1 : ty, u0 = u0 > gu.gv - 2 ? gu.gv - 2 : u0, tn = tn > gu.h1 - 2 ? gu.h1 - 2 : tn, iF = tz < 1 ? 1 : tz; iF <= tn; iF++)
			for (var iE = ty; iE <= u0; iE++) hA(fl = 4 * (iE + iF * gu.gv)) ? (tx = this.tS + (this.tT - this.tS) * this.tY[iE + gu.gv * iF] / 1e4, Math.abs(hY - iE) > tx || Math.abs(hZ - iF) > tx || tx <= (rT = Math.sqrt((hY - iE) * (hY - iE) +
				(hZ - iF) * (hZ - iF))) || this.tw(fl, rT, tx, 1, this.tX[3])) : (tx = this.tU + (this.tV - this.tU) * this.tY[iE + gu.gv * iF] / 1e4, Math.abs(hY - iE) > tx || Math.abs(hZ - iF) > tx || tx <= (rT = Math.sqrt((hY - iE) * (hY -
				iE) + (hZ - iF) * (hZ - iF))) || this.tw(fl, rT, tx, 0, this.tX[2]))
	}
}

function u1() {
	var jE, u2;

	function u6() {
		n.o();
		var fr = cR.uA(u2.jU());
		(aR.bf && 0 < fr.length && fr === cR.cy.cz || cR.uC.uD(fr)) && cR.uB()
	}
	this.show = function(u7) {
		this.u8(u7), jE.show(), this.resize()
	}, this.u8 = function(u7) {
		0 === aR.bf ? u7 ? u2.jl(u7) : aR.bu.length && u2.jl(aR.bu) : (aR.aw || (cR.cy.cz = cR.d0.d1()), u2.jl(cR.u9(cR.cy.cz)))
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), u2.resize()
	}, this.jo = function(dx) {
		2 === dx ? jE.jp[0].jq() : u6()
	}, jE = new jI(L(26), [new jJ("⬅️ " + L(10), function() {
		n.u3(1)
	}), new jJ(L(27), function() {
		u2.u4()
	}), new jJ(L(28), function() {
		u2.u5()
	}), new jJ(L(29), function() {
		u2.clear()
	}), new jJ(L(30), function() {
		u6()
	})]), u2 = new jk(L(31)), jE.jM.appendChild(u2.jj)
}

function uE(title, dE, uF, uG) {
	var rm, uH;
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), uH.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, uG = uG || [new jJ("⬅️ " + L(10), function() {
		n.jR()
	})], rm = new jI(title, uG), uH = new dC(rm.jM, dE), uF && aW.bA.textAlign(rm.jM.style, 1)
}

function pn() {
	var uI = [];
	this.fj = function(fr, kn) {
		fr = {
			t: cc.uK(),
			fr: fr,
			kn: kn
		};
		uI.push(fr), 30 === n.uL && n.uM().fj(fr)
	}, this.clear = function() {
		uI = [], n.uN(30) && n.uN(30).clear()
	}, this.uO = function() {
		return uI
	}
}

function uP() {
	var jE, jF, uQ, jX;

	function jK() {
		ny.q(), n.jQ()[19] = null, n.jR()
	}

	function uY() {
		ug(), uc()
	}

	function ug() {
		uQ.dF.lastChild && uQ.dF.removeChild(uQ.dF.lastChild)
	}

	function uc() {
		var uh = gu.ui(aR.data);
		aR.data.canvas = gu.uj(uh, aR.data.mapSeed).nO, ud()
	}

	function ud() {
		var uk = aR.data.canvas;
		uk.style.width = "100%", uQ.dF.appendChild(uk)
	}
	this.ul = function(uk) {
		aR.data.canvas && ug(), aR.data.canvas = uk, ud()
	}, this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(32), [new jJ("⬅️ " + L(10), jK)]), 2 === aR.data.mapType && ny.j(), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), jb.je(new g9({
			gF: [L(33), L(34), L(35)],
			value: aR.data.mapType
		}, function(dS) {
			2 === (aR.data.mapType = dS) ? (ny.j(), aR.data.canvas = null) : (aR.data.passableWater = aR.data.passableMountains = 1, ny.q()), n.d7(20)
		})), 2 <= aR.data.mapType && (jb.jf(new jg), jb.jf(new jh({
			value: aR.data.passableWater
		}, L(36), function(value) {
			aR.data.passableWater = value
		})), jb.jf(new jh({
			value: aR.data.passableMountains
		}, L(37), function(value) {
			aR.data.passableMountains = value
		})));
		jX.push(jb)
	}(jX = []), function(jX) {
		if (0 === aR.data.mapType) {
			for (var jb = new jc, gF = (jb.jd(L(32)), []), dw = 0; dw < gu.td.uX.length; dw++) gF.push(gu.td.te[gu.td.uX[dw]].name);
			jb.je(new g9({
				gF: gF,
				value: aR.data.mapProceduralIndex
			}, function(dS) {
				aR.data.mapProceduralIndex = dS, uY()
			})), jX.push(jb)
		}
	}(jX), function(jX) {
		if (1 === aR.data.mapType) {
			for (var jb = new jc, gF = (jb.jd(L(32)), []), dw = 0; dw < gu.td.uZ.length; dw++) gF.push(gu.td.te[gu.td.uZ[dw]].name);
			jb.je(new g9({
				gF: gF,
				value: aR.data.mapRealisticIndex
			}, function(dS) {
				aR.data.mapRealisticIndex = dS, uY()
			})), jX.push(jb)
		}
	}(jX), function(jX) {
		var jb;
		2 === aR.data.mapType && ((jb = new jc).jd(L(32)), jb.jf(new ua([new jJ(L(38), function() {
			return ny.ub(), !0
		}).button])), jX.push(jb))
	}(jX), function(jX) {
		(uQ = new jc).jd(L(39)), 2 !== aR.data.mapType ? uc() : aR.data.canvas && ud();
		jX.push(uQ)
	}(jX), function(jX) {
		var jb, ue, uf;
		0 === aR.data.mapType && ((jb = new jc).jd("Seed"), ue = new ji({
			dS: -1,
			value: aR.data.mapSeed
		}, 1, 0, function(jj) {
			jj = Math.abs(Math.floor(jj.target.value)) % 16384;
			aR.data.mapSeed !== jj && (aR.data.mapSeed = jj, uY())
		}), uf = new jJ(L(12), function(jj) {
			var tl = Math.floor(16384 * Math.random());
			if (aR.data.mapSeed !== tl) return ue.jj.value = aR.data.mapSeed = tl, uY(), !0
		}), jb.jf(ue), jb.jf(new ua([uf.button])), jX.push(jb))
	}(jX), function(jX) {
		var jb, ue;
		2 === aR.data.mapType && ((jb = new jc).jd(L(40)), ue = new ji({
			dS: -1,
			value: aR.data.mapName
		}, 0, 0, function(jj) {
			aR.data.mapName = jj.target.value = jj.target.value.slice(0, 20)
		}), jb.jf(ue), jX.push(jb))
	}(jX), jX))
}

function pO() {
	this.um = new Int16Array(4), this.h7 = new Int16Array(4), this.un = null, this.j = function() {
		var dw;
		for (this.um[0] = -gu.gv, this.um[1] = 1, this.um[2] = gu.gv, this.um[3] = -1, this.un = new Int16Array([-gu.gv, 1 - gu.gv, 1, gu.gv + 1, gu.gv, gu.gv - 1, -1, -gu.gv - 1]), dw = 0; dw < 4; dw++) this.h7[dw] = 4 * this.um[dw]
	}, this.uo = function() {
		return dU.ls(Math.floor(.15 * (1 + .25 * aI.aJ.aK()) * aL.aM / nN), 4, 128)
	}, this.gm = function(gt, id) {
		for (var h6 = this.h7, dw = 0; dw < 4; dw++) {
			var h9 = gt + h6[dw];
			if (cC.hA(h9) && cC.h2(h9) === id) return !0
		}
		return !1
	}, this.up = function(player, gt) {
		return !cC.hH(gt) && player === cC.hJ(gt)
	}, this.uq = function(m3, m7, go) {
		return (m3 -= this.gx(go)) * m3 + (m7 -= this.gz(go)) * m7
	}, this.hf = function(mK, mL, ld) {
		mK = this.iB(mK) - this.i4(ld), mL = this.iC(mL) - this.i6(ld);
		return Math.sqrt(mK * mK + mL * mL)
	}, this.ur = function(h5, gq) {
		var hz = this.gx(h5) - this.gx(gq),
			h5 = this.gz(h5) - this.gz(gq);
		return ~~Math.sqrt(hz * hz + h5 * h5 + .5)
	}, this.hB = function(h5, gq) {
		var hz = this.gx(h5) - this.gx(gq),
			h5 = this.gz(h5) - this.gz(gq);
		return hz * hz + h5 * h5
	}, this.us = function(ht, hu, hv, hw) {
		return (ht -= hv) * ht + (hu -= hw) * hu
	}, this.qR = function(fl, qF) {
		return dU.dV(qF * aZ.bN[fl], 1e3)
	}, this.iB = function(mK) {
		return 16 * (mK + sR) / nN
	}, this.iC = function(mL) {
		return 16 * (mL + sS) / nN
	}, this.i8 = function(kR) {
		return 16 * kR / nN
	}, this.ut = function(mK) {
		return Math.floor((mK + sR) / nN)
	}, this.uu = function(mL) {
		return Math.floor((mL + sS) / nN)
	}, this.uv = function(m3, m7) {
		return 1 <= m3 && 1 <= m7 && m3 < gu.gv - 1 && m7 < gu.h1 - 1
	}, this.gx = function(go) {
		return go % gu.gv
	}, this.gz = function(go) {
		return dU.dV(go, gu.gv)
	}, this.i1 = function(m3, m7) {
		return m7 * gu.gv + m3
	}, this.m6 = function(m3, m7) {
		return 4 * this.i1(m3, m7)
	}, this.uw = function(go) {
		return this.ux(this.gx(go), this.gz(go))
	}, this.ux = function(m3, m7) {
		return 0 < m3 && m3 < gu.gv - 1 && 0 < m7 && m7 < gu.h1 - 1
	}, this.h3 = function(go) {
		return go << 2
	}, this.hC = function(gt) {
		return gt >> 2
	}, this.uy = function(go) {
		return gu.gv * this.gz(go) * 256 + (this.gx(go) << 4)
	}, this.uz = function(go) {
		return this.uy(go) + 8 + (gu.gv << 7)
	}, this.v0 = function(ld) {
		return gu.gv * (this.i6(ld) >> 4) + (this.i4(ld) >> 4)
	}, this.v1 = function(ld) {
		ld = this.v0(ld);
		return (this.gx(ld) >> 5) + cJ.tY.v2 * (this.gz(ld) >> 5)
	}, this.i4 = function(ld) {
		return ld % (gu.gv << 4)
	}, this.i6 = function(ld) {
		return dU.dV(ld, gu.gv << 4)
	}, this.v3 = function(go, v4) {
		return go + this.um[v4]
	}, this.v5 = function(gt, v4) {
		return gt + this.h7[v4]
	}, this.v6 = function(h5, gq) {
		var hz = this.gx(gq) - this.gx(h5),
			gq = this.gz(gq) - this.gz(h5);
		return Math.abs(hz) >= Math.abs(gq) ? 1 + 2 * (hz < 0) : 2 * (0 < gq)
	}, this.v7 = function(player) {
		return this.i1(aZ.sX[player] + aZ.sY[player] >> 1, aZ.sZ[player] + aZ.sa[player] >> 1)
	}, this.v8 = function(player) {
		return this.i1(c3.v9(aZ.sX[player], aZ.sY[player]), c3.v9(aZ.sZ[player], aZ.sa[player]))
	}
}

function vA() {
	this.vB = 0, this.j = function() {
		this.vB = 0
	}, this.b2 = function() {
		if (!this.vB && s.a6() % 30 == 7 && aW.aX.qf(80) && (cK.performance.vB = 1)) {
			if (aR.ae) {
				var af = ag.bQ();
				if (aj.ak[af]) {
					ag.vG(af);
					var dY = bw.vH,
						du = bw.vI[0];
					if (0 !== du)
						for (var vJ = Math.min(100 + 10 * (du - 1), 400), dw = 0; dw < du; dw++) cM.vK(dY[dw], vJ)
				}
			}
			cM.vK(am[0], 100)
		}
	}
}

function vL() {
	var rm, vM, jX;
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), vM.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(L(41), [new jJ("⬅️ " + L(10), function() {
		n.u3(13)
	})]), vM = new jL(rm.jM, ((jX = []).push(function() {
		var jb = new jc,
			uf = (jb.jd(L(42)), jb.vS(L(43)), new jJ(L(44), function() {
				gG.gH.gI(130, 0), n.v.vT()
			}, 0, 0, 1)),
			ue = new ji(gG.ku.data[126], 0, function() {
				uf.button.click()
			});
		return jb.jf(ue), ue.jj.placeholder = "a,b,c", ue.jj.style.marginTop = "0.5em", jb.jf(new ua([uf.button])), jb
	}()), jX.push(function() {
		var jb = new jc,
			uf = new jJ(L(44), function() {
				gG.gH.gI(130, 1), n.v.vT()
			}, 0, 0, 1),
			vU = new ji(gG.ku.data[129], 1, function() {
				vU.jj.focus()
			}),
			vV = new ji(gG.ku.data[128], 1, function() {
				uf.button.click()
			});
		return jb.jd(L(45)), jb.jf(vV), vV.jj.style.marginBottom = "0.5em", jb.jd(L(46)), jb.jf(vU), jb.jf(new ua([uf.button])), jb
	}()), jX.push(function() {
		var jb = new jc;
		return jb.jd(L(47)), gG.ku.data[125].gF = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], jb.je(new g9(gG.ku.data[125])), jb
	}()), jX.push(function() {
		var jb = new jc;
		return jb.jd(L(48)), jb.jf(new jh(gG.ku.data[127], L(49))), jb
	}()), jX))
}

function vW() {
	var vX = 0,
		vY = "",
		vZ = 0,
		va = 0,
		vb = 0;

	function vd(vo) {
		u.s9.nG(3, vo)
	}

	function vm(mv) {
		vX = 1, p.message.vp({
			id: 6,
			value: mv
		})
	}

	function vg(sl) {
		var vw = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return sl.match(vw)
	}
	this.aQ = function(sl) {
		var vc, dY, vi;
		if (vX) return vX = 0, "yes" === (vc = sl.toLowerCase()) || "y" === vc ? void vd(vY) : void p.message.vp({
			id: 5,
			tI: 7
		});
		!(sl.indexOf("@") < 0) && (vc = vg(sl)) ? (vY = sl, dY = function(vf) {
			for (var du = vf.length, vq = [0, 0, 0, 0], dw = 0; dw < du; dw++)
				for (var aN = vf[dw], fm = 0; fm < 4; fm++) aN === "@room" + (fm + 1) && (vq[fm] = 1);
			if ((va = aW.jS.jW(vq)) % 4 == 0) return aW.jS.vr(p.t9.vs);
			for (fm = 0; fm < 4; fm++) vq[fm] = vq[fm] ? p.t9.vs[fm] : [];
			return aW.jS.vr(vq)
		}(vc), function(vf, vi, sl) {
			if (!vZ) return;
			for (var du = vi.length, dw = 0; dw < du; dw++) 2 === vi[dw].id && (sl = sl.replace(vf[vi[dw].dS], "@" + vi[dw].gp));
			return vX = 1, vd((vY = sl).slice(0, 126) + "|"), 1
		}(vc, vi = function(vf) {
			for (var vi = [], du = (vb = vZ = 0, vf.length), dw = 0; dw < du; dw++) {
				var aN = vf[dw],
					g4 = aN.length;
				aW.fv.startsWith(aN, "@[") ? g4 <= 9 && aW.fv.vt(aN, "]") && vi.push({
					id: 0,
					gp: aN.substring(2, g4 - 1).toUpperCase()
				}) : 6 === g4 ? aW.fv.startsWith(aN, "@room") || (vb++, vi.push({
					id: 1,
					gp: kV.dd.t8(aN.substring(1))
				})) : 1 < g4 && g4 < 5 && 0 <= (g4 = kw.data.vv(aN.substring(1))) && (vi.push({
					id: 2,
					gp: g4,
					dS: dw
				}), vZ = 1)
			}
			return vi
		}(vc), sl) || (0 === vi.length ? va || function(vf) {
			for (var du = vf.length, dw = 0; dw < du; dw++) {
				var aN = vf[dw];
				if ("@all" === aN || "@everyone" === aN) return 1
			}
			return
		}(vc) ? vm(dY.length) : vd(sl) : vc.length === vb ? vd(sl) : (function(dY, vi) {
			var g4 = vi.length;
			if (0 === g4) return;
			var du = dY.length;
			loop: for (var dw = du - 1; 0 <= dw; dw--) {
				for (var fm = 0; fm < g4; fm++)
					if (0 === vi[fm].id) {
						if (vi[fm].gp === aW.fv.g0(dY[dw].username)) continue loop
					} else if (1 === vi[fm].id && vi[fm].gp === dY[dw].nK) continue loop;
				dY[dw] = dY[--du], dY.pop()
			}
		}(dY, vi), vm(dY.length)))) : vd(sl)
	}, this.vx = function(sl) {
		var vf = vg(sl);
		if (vf)
			for (var vy = new RegExp("^[0-9]+$"), du = vf.length, dw = 0; dw < du; dw++) {
				var aN = vf[dw].substring(1),
					g4 = aN.length;
				1 <= g4 && g4 <= 3 && vy.test(aN) && (g4 = parseInt(aN, 10), !isNaN(g4)) && 0 <= g4 && g4 < kw.data.dY.length && (sl = sl.replace("@" + aN, "@" + kw.data.dY[g4]))
			}
		return sl
	}
}

function vz() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.mj = 13, this.ml = this.emojis.length, this.mm = 676, this.mk = 1024, this.w0 = this.emojis.indexOf("💀"), this.w1 = this.w0 + 1, this.w2 = this.emojis.indexOf("🥇"), this.w3 = this.emojis.indexOf("😊"), this.n3 = function(gp) {
		return gp < this.mm ? String.fromCharCode(55356, 56806 + dU.dV(gp, 26), 55356, 56806 + gp % 26) : this.emojis[Math.min(gp - this.mm, this.ml - 1)]
	}, this.mo = function(fr) {
		for (var du = fr.length - 2, dY = [], dw = 0; dw < du; dw++) {
			var w4 = fr.charCodeAt(dw) - 56806,
				w5 = fr.charCodeAt(dw + 2) - 56806;
			0 <= w4 && w4 < 26 && 0 <= w5 && w5 < 26 && (dY.push(26 * w4 + w5), dw += 3)
		}
		return dY
	}, this.w6 = function(gp) {
		return gp < this.mm
	}, this.w7 = function(gp) {
		return gp >= 1024 - this.mj
	}, this.w8 = function(gp) {
		return gp >= this.mm && gp < this.mm + this.w1
	}
}

function oR() {
	var size, w9;
	this.j = function() {
		size = aR.ba, w9 = new Uint16Array(aR.bS);
		for (var bY = aR.bY, dw = aR.ba - 1; 0 <= dw; dw--) w9[dw] = bY + dw
	}, this.b2 = function() {
		cK.wA.b2();
		for (var dw = size - 1; 0 <= dw; dw--)
			if (0 === aZ.aa[w9[dw]]) {
				fm = void 0;
				var fm = dw;
				size--, w9[fm] = w9[size]
			} else cM.b2(w9[dw])
	}, this.wC = function(fl) {
		w9[size++] = fl
	}
}

function ou() {
	var wE, wF, wG, wH, wI, wJ, wK, wL, wM, wN, wO, wP, wQ, wR, wS, wT, wU, wV, wX, wY, wZ, wa, wb, wi, wj, wW = null,
		wd = 0,
		we = !1,
		wf = new Float32Array(4),
		wg = 0,
		wh = !0,
		wk = 400,
		wl = 0;

	function wm() {
		wM = Math.floor(+aL.aM), wN = Math.floor(.5 * wM)
	}

	function wn() {
		var dw, wv;
		for (aC.font = aW.bA.mN(1, 100 * wO), wv = 80 / Math.floor(aC.measureText(aW.fv.t6(aR.bT)).width), aC.font = aW.bA.mN(1, 100), dw = aR.bS - 1; 0 <= dw; dw--) wL[dw] = 100 / Math.floor(aC.measureText(aZ.fp[dw]).width), wK[dw] = Math.min(wv,
			wL[dw])
	}

	function ww(dw) {
		return !wl || (dw = aZ.bN[dw]) < 1e6 ? 1 : dw < 1e7 ? wf[0] : wf[Math.min(Math.floor(Math.log10(dw)) - 6, 3)]
	}

	function wu(n2) {
		wV = !1, wU = 1, wS = wT = 0, wh && (aW.bA.textAlign(n2, 1), aW.bA.textBaseline(n2, 1));
		for (var x4, x5, dw, x6, fontSize, x7, iG = sR / nN, iH = sS / nN, iI = (aL.aN + sR) / nN, iJ = (aL.aO + sS) / nN, x8 = 0 !== aZ.aa[aR.ad] && !aW.aX.aY(aR.ad), fm = bF.bG - 1; 0 <= fm; fm--) dw = bF.q3[fm], (fontSize = Math.floor(wR * nN *
			ww(dw) * wK[dw] * wI[dw])) < wQ || wM <= fontSize || wG[dw] + wI[dw] > iG && wG[dw] < iI && wH[dw] + wJ[dw] > iH && wH[dw] < iJ && (x4 = Math.floor(aL.aN * (wG[dw] + wI[dw] / 2 - iG) / (iI - iG)), x5 = Math.floor(aL.aO * (wH[dw] + wJ[
				dw] / 2 - iH) / (iJ - iH) - .1 * fontSize), x6 = cC.tX[dw], n2.font = aW.bA.mN(1 === aZ.gZ[dw] ? 4 : 1, fontSize), n2.fillStyle = x9(fontSize, x6 % 2), wl ? xA(n2, dw, fontSize, x4, x5, x6) : xB(dw, fontSize, x4, x5, n2), wV = !0,
			0 < wZ[dw] ? function(x4, x5, fontSize, dw, n2) {
				0 === xD[dw] ? mh.mi.w6(wY[dw]) ? (function(x4, x5, fontSize, player, kn, n2) {
					for (var xM = x5, xU = (n2.globalAlpha = xN(fontSize), ww(player) * (wl ? wg : wL[player])), xL = x4 - .5 * fontSize / xU - .9 * fontSize, fn = 0; fn < 2; fn++) n2.fillText(mh.mi.n3(kn), xL, xM), xL = x4 + .5 *
						fontSize / xU + .9 * fontSize;
					n2.globalAlpha = 1
				}(x4, x5, fontSize, dw, wY[dw], n2), xE(x4, x5, fontSize, 0, 0, n2)) : mh.mi.w8(wY[dw]) ? (xQ(x4, x5, fontSize, wY[dw], 0, n2), xE(x4, x5, fontSize, 0, 1, n2)) : (xQ(x4, x5, fontSize, wY[dw], 1, n2), xE(x4, x5, fontSize, 1, 0,
					n2)) : xQ(x4, x5, fontSize, wY[dw], 0, n2)
			}(x4, x5, fontSize, dw, n2) : 0 === xD[dw] && xE(x4, x5, fontSize, 0, 0, n2), x8 && (0 < wZ[dw + aR.bS] || 0 < wZ[dw + 2 * aR.bS] || 0 < wZ[dw + 3 * aR.bS] || 0 < wZ[dw + 4 * aR.bS]) && function(x4, x5, fontSize, dw, n2) {
				var dx, mv = -1;
				for (dx = 4; 1 <= dx; dx--) 0 < wZ[dw + dx * aR.bS] && mv++;
				for (dx = 1; dx < 5; dx++) 0 < wZ[dw + dx * aR.bS] && (! function(x4, x5, fontSize, dx, dw, xI, b5, n2) {
					var uk;
					if (1 === dx) {
						dw = wY[dw + aR.bS];
						if (!mh.mi.w7(dw)) return function(x4, x5, fontSize, kn, xI, n2) {
							n2.globalAlpha = xN(fontSize);
							x4 -= .534 * xI * fontSize, xI = x5 + 1.59 * fontSize;
							n2.font = aW.bA.mN(0, .785 * fontSize), n2.fillText(mh.mi.n3(kn), x4, xI), n2.globalAlpha = 1
						}(x4, x5, fontSize, dw, xI, n2);
						uk = mh.xR.mV[dw - 1024 + mh.mi.mj]
					} else uk = 2 === dx ? ch.xT()[4].canvas[+(b5 < 255)] : (3 === dx ? ch.xT()[5] : ch.xT()[6]).canvas[0];
					dw = mh.xR.mW, b5 = .8 * fontSize / dw, dx = x4 - .5 * b5 * dw - .534 * xI * fontSize, x4 = x5 + 1.4 * b5 * dw;
					n2.setTransform(b5, 0, 0, b5, dx, x4), n2.globalAlpha = xN(fontSize), n2.drawImage(uk, 0, 0), n2.globalAlpha = 1, n2.setTransform(1, 0, 0, 1, 0, 0)
				}(x4, x5, fontSize, dx, dw, mv, wZ[dw + dx * aR.bS], n2), mv -= 2)
			}(x4, x5, fontSize, dw, n2), (x7 = wO * fontSize) < wQ || (n2.font = aW.bA.mN(1, x7), x5 += Math.floor(.78 * fontSize), wl ? xB(dw, x7, x4, x5, n2) : xA(n2, dw, x7, x4, x5, x6)))
	}

	function xB(dw, fontSize, iE, iF, n2) {
		var ___id = dw;
		var showName = dw < aR.bY || !__fx.settings.hideBotNames;
		if (showName) n2.fillText(aZ.fp[dw], iE, iF), dw < aR.bY && 2 !== aZ.gZ[dw] || (dw = fontSize / wL[dw], n2.fillRect(iE - .5 * dw, iF + aW.bA.n4 * fontSize, dw, Math.max(1, .1 * fontSize)));
		wl && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (n2.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			n2.fillText(__fx.utils.getDensity(___id), iE, showName ? iF + fontSize : iF)
		);
	}

	function xA(n2, dw, fontSize, x4, x5, x6) {
		var ___id = dw;
		dw = aW.fv.t6(aZ.bN[dw]);
		x6 >> 1 & 1 ? (n2.lineWidth = .05 * fontSize, n2.strokeStyle = x9(fontSize, x6 % 2), n2.strokeText(dw, x4, x5)) : (1 < x6 && (n2.lineWidth = .12 * fontSize, n2.strokeStyle = x9(fontSize, x6), n2.strokeText(dw, x4, x5)), n2.fillText(dw, x4,
			x5));
		wl || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (n2.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), n2.fillText(__fx.utils.getDensity(___id), x4, x5 + fontSize))
	}

	function xE(x4, x5, fontSize, xI, xJ, n2) {
		var xK = .95 * fontSize / wb,
			x4 = x4 - .5 * xK * wa + .8 * xI * fontSize,
			xI = x5 - 1.76 * xK * wb - (.35 - aW.bA.n4 + .7) * xJ * fontSize;
		n2.setTransform(xK, 0, 0, xK, x4, xI), n2.globalAlpha = xN(fontSize), n2.drawImage(aF.get(4), 0, 0), n2.globalAlpha = 1, n2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function xQ(x4, x5, fontSize, kn, xI, n2) {
		var lU, xL, xK;
		n2.globalAlpha = xN(fontSize), mh.mi.w7(kn) ? (lU = mh.xR.mW, n2.setTransform(xK = 1.1 * fontSize / lU, 0, 0, xK, xL = x4 - .5 * xK * lU - .8 * xI * fontSize, xK = x5 - 1.55 * xK * lU), n2.drawImage(mh.xR.mV[kn - 1024 + mh.mi.mj], 0, 0), n2
			.setTransform(1, 0, 0, 1, 0, 0)) : (xL = x4 - .8 * xI * fontSize, xK = x5 - (.35 - aW.bA.n4 + 1) * fontSize, n2.fillText(mh.mi.n3(kn), xL, xK)), n2.globalAlpha = 1
	}

	function x9(fontSize, x6) {
		return wN <= fontSize && fontSize < wM ? aj.xV[x6] + xN(fontSize).toFixed(3) + ")" : aj.xW[x6]
	}

	function xN(fontSize) {
		return wN <= fontSize && fontSize < wM ? 1 - (fontSize - wN) / (wM - wN) : 1
	}

	function xj(xU, aN) {
		return 1 + Math.floor(wP * xU * aN)
	}

	function xg(dw) {
		for (var left = wG[dw], fm = wG[dw] - aZ.sX[dw] - 1; 0 <= fm; fm--)
			if (!xl(dw, --left, wH[dw], wJ[dw])) {
				left++;
				break
			} var right = wG[dw];
		for (fm = aZ.sY[dw] - wG[dw] - wI[dw]; 0 <= fm; fm--)
			if (!xl(dw, ++right + wI[dw] - 1, wH[dw], wJ[dw])) {
				right--;
				break
			} var iE = Math.floor((left + right) / 2),
			top = wH[dw];
		for (fm = wH[dw] - aZ.sZ[dw] - 1; 0 <= fm; fm--)
			if (!xm(dw, iE, --top, wI[dw])) {
				top++;
				break
			} var bottom = wH[dw];
		for (fm = aZ.sa[dw] - wH[dw] - wJ[dw]; 0 <= fm; fm--)
			if (!xm(dw, iE, ++bottom + wJ[dw] - 1, wI[dw])) {
				bottom--;
				break
			} var iF = Math.floor((top + bottom) / 2);
		xd(dw, iE, iF, wI[dw], wJ[dw]) && (wG[dw] = iE, wH[dw] = iF)
	}

	function xd(player, iE, iF, aN, aO) {
		kR = Math.floor(.2 * aN);
		for (var kR, dx = iE + aN - 1; iE <= dx; dx--)
			if (!xl(player, dx, iF, aO)) return;
		for (dx = iF + aO - 1 - (kR = (kR = Math.floor(.25 * aO)) < 1 ? 1 : kR); iF + kR <= dx; dx--)
			if (!xm(player, iE, dx, aN)) return;
		return 1
	}

	function xl(player, iE, iF, aO) {
		return cC.xn(player, 4 * (iF * gu.gv + iE)) && cC.xn(player, 4 * ((iF + aO - 1) * gu.gv + iE))
	}

	function xm(player, iE, iF, aN) {
		return cC.xn(player, 4 * (iF * gu.gv + iE)) && cC.xn(player, 4 * (iF * gu.gv + iE + aN - 1))
	}
	this.j = function() {
		if (wl = gG.ku.data[7].value || 8 === aR.aV, wk = 0 === (wk = gG.ku.data[11].value) ? 280 : 1 === wk ? 187 : 112, wV = !1, wR = .88, wO = .5, wP = 1.8, wQ = 12 - 3 * gG.ku.data[9].value, wF = wE = 0, wG = new Uint16Array(aR.bS), wH =
			new Uint16Array(aR.bS), wI = new Uint16Array(aR.bS), wJ = new Uint16Array(aR.bS), wK = new Float32Array(aR.bS), wL = new Float32Array(aR.bS), wY = new Uint16Array(2 * aR.bS), wZ = new Uint8Array(5 * aR.bS), wi = new Uint8Array(aR.bS),
			wj = new Uint8Array(aR.bS), wh || (wW = wW || document.createElement("canvas")), wm(), wT = wS = 0, wU = 1, wl) {
			var dw, wv;
			for (wn(), aC.font = aW.bA.mN(1, 100), wv = 100 / Math.floor(aC.measureText("900 000").width), dw = aR.bS - 1; 0 <= dw; dw--) wK[dw] = Math.min(wv, 2 * wL[dw]);
			wg = wv, wf[0] = 100 / (wv * Math.floor(aC.measureText("5 000 000").width)), wf[1] = 100 / (wv * Math.floor(aC.measureText("50 000 000").width)), wf[2] = 100 / (wv * Math.floor(aC.measureText("500 000 000").width)), wf[3] = 100 / (
				wv * Math.floor(aC.measureText("1 000 000 000").width))
		} else wn();
		! function() {
			var dw;
			for (dw = aR.bS - 1; 0 <= dw; dw--) aZ.ac[dw] < 12 ? (wG[dw] = aZ.sX[dw] + 1, wH[dw] = aZ.sZ[dw] + 1, wI[dw] = 1, wJ[dw] = 1) : (wG[dw] = aZ.sX[dw], wH[dw] = aZ.sZ[dw] + 1, wI[dw] = 4, wJ[dw] = 2);
			if (aR.bh)
				for (dw = 0; dw < aR.bY; dw++) wI[dw] = 0;
			wa = aF.get(4).width, wb = aF.get(4).height
		}()
	}, this.wq = function(fl, wr) {
		wr > 18 * aZ.ac[fl] ? (wj[fl] = 6, cC.tX[fl] = 2 + cC.tX[fl] % 2) : (wi[fl] = 4, (cC.tX[fl] < 2 || 3 < cC.tX[fl]) && (cC.tX[fl] = 6 + cC.tX[fl] % 2))
	}, this.ws = function(fl, wr) {
		wr > 6 * aZ.ac[fl] ? (wj[fl] = 6, cC.tX[fl] = 4 + cC.tX[fl] % 2) : (wi[fl] = 4, (cC.tX[fl] < 4 || 5 < cC.tX[fl]) && (cC.tX[fl] = 8 + cC.tX[fl] % 2))
	}, this.resize = function() {
		wm(), wh || wu(wX)
	}, this.wx = function() {
		for (var dw = 0; dw < aR.bY; dw++) aZ.sY[dw] - aZ.sX[dw] != 3 || aZ.sa[dw] - aZ.sZ[dw] != 3 ? (wG[dw] = aZ.sX[dw] + (aZ.sY[dw] !== aZ.sX[dw] ? 1 : 0), wH[dw] = aZ.sZ[dw], wI[dw] = 1, wJ[dw] = 1) : (wG[dw] = aZ.sX[dw], wH[dw] = aZ.sZ[dw] +
			1, wI[dw] = 4, wJ[dw] = 2)
	}, this.kp = function(player, dS, wy) {
		! function(player, dS, wy) {
			player += dS * aR.bS;
			0 === dS ? wY[player] === wy && 0 < wZ[player] ? wZ[player] = 0 : (wY[player] = wy, wZ[player] = mh.mi.w6(wy) ? 255 : 64) : 1 === dS ? (wZ[player] = 64, wY[player] = wy) : wZ[player] = wy
		}(player, dS, wy), 2 === aR.bf && this.cv(!0)
	}, this.mP = function() {
		wh ? wu(aC) : wV && (1 !== wU ? (aC.imageSmoothingEnabled = !0, aC.setTransform(wU, 0, 0, wU, 0, 0), aC.drawImage(wW, -wS / wU, -wT / wU), aC.setTransform(1, 0, 0, 1, 0, 0), aC.imageSmoothingEnabled = !1) : aC.drawImage(wW, -wS, -wT))
	}, this.x0 = function(hz, i0) {
		wS += hz, wT += i0
	}, this.qr = function(hz, i0) {
		cn.x0(hz, i0)
	}, this.zoom = function(li, hY, hZ) {
		wU *= li, wS = (wS + hY) * li - hY, wT = (wT + hZ) * li - hZ
	}, this.cv = function(oG) {
		return !wh && !(!we && !oG && s.t < wd + (1 === wU && 0 === wS && 0 === wT && (aR.d8() || aR.bh || 2 === aR.bf) ? 1e3 : wk) || (we = !1, wd = s.t, wu(wX), 0))
	}, this.x2 = function(dw) {
		return ww(dw) * wK[dw]
	}, this.x3 = function(player) {
		return wK[player]
	}, this.b2 = function() {
		s.a6() % 10 == 9 && (we = aR.dB() && !aR.d8()), !aR.d8() && 4 <= ++wF && function() {
			var dw, fm, fn;
			for (wF = 0, fn = 4; 1 <= fn; fn--)
				for (fm = bF.bG - 1; 0 <= fm; fm--) dw = bF.q3[fm] + fn * aR.bS, 0 < wZ[dw] && wZ[dw] < 255 && wZ[dw]--;
			if (2 !== aR.bf)
				for (fm = bF.bG - 1; 0 <= fm; fm--) dw = bF.q3[fm], 0 < wZ[dw] && wZ[dw] < 255 && wZ[dw]--
		}();
		var dw, fm, du = Math.floor(.1 * bF.bG);
		for (du = (du = du < 8 ? 8 : du) > bF.bG ? bF.bG : du, dw = wE + du - 1; wE <= dw; dw--) fm = dw % bF.bG, ! function(dw) {
			var xU = ww(dw) * wK[dw];
			0 < wI[dw] && xd(dw, wG[dw], wH[dw], wI[dw], wJ[dw]) ? ! function(dw) {
				for (var iE, iF, aN, aO, gt = !1, fn = 0; fn < 8; fn++) {
					if (aN = wI[dw] + 2, aO = wJ[dw] + 2, aN > aZ.sY[dw] - aZ.sX[dw] + 1 || aO > aZ.sa[dw] - aZ.sZ[dw] + 1) return gt;
					if (iE = wG[dw] - 1, iF = wH[dw] - 1, !xd(dw, iE, iF, aN, aO)) return gt;
					wG[dw] = iE, wH[dw] = iF, wI[dw] = aN, wJ[dw] = aO, gt = !0
				}
				return gt
			}(dw) && function(dw, xU) {
				for (var iE, iF, aN, aO, gt = !1, mO = wI[dw], aH = 1 + Math.floor(.02 * mO), fn = 1; fn < 5; fn++) {
					if ((aN = mO + fn * aH) > aZ.sY[dw] - aZ.sX[dw] + 1) return gt;
					if ((aO = xj(xU, aN)) > aZ.sa[dw] - aZ.sZ[dw] + 1) return gt;
					iE = aZ.sX[dw] + Math.floor(Math.random() * (aZ.sY[dw] - aZ.sX[dw] + 2 - aN)), iF = aZ.sZ[dw] + Math.floor(Math.random() * (aZ.sa[dw] - aZ.sZ[dw] + 2 - aO)), xd(dw, iE, iF, aN, aO) && (wG[dw] = iE, wH[dw] = iF, wI[
						dw] = aN, wJ[dw] = aO, gt = !0)
				}
				return gt
			}(dw, xU) && xg(dw) : ! function(dw, xU) {
				var aO, iE = wG[dw] + 1,
					iF = wH[dw] + 1,
					aN = wI[dw] - 2;
				for (;;) {
					if (aN < 1) {
						wI[dw] = 0;
						break
					}
					if (aO = xj(xU, aN), xd(dw, iE, iF, aN, aO)) return wG[dw] = iE, wH[dw] = iF, wI[dw] = aN, wJ[dw] = aO, 1;
					iE++, iF++, aN -= 2
				}
				return
			}(dw, xU) ? function(dw, xU) {
				var iE, iF, aN, aO, fn, m5, m4 = aZ.sY[dw] - aZ.sX[dw] + 1,
					xk = Math.floor(.02 * m4);
				for (m5 = -6 * (xk = xk < 1 ? 1 : xk), fn = m4; m5 <= fn; fn -= xk)
					if (aO = xj(xU, aN = 0 < fn ? fn : 1), iE = aZ.sX[dw] + Math.floor(Math.random() * (aZ.sY[dw] - aZ.sX[dw] + 2 - aN)), iF = aZ.sZ[dw] + Math.floor(Math.random() * (aZ.sa[dw] - aZ.sZ[dw] + 2 - aO)), xd(dw, iE, iF, aN,
							aO)) return wG[dw] = iE, wH[dw] = iF, wI[dw] = aN, wJ[dw] = aO
			}(dw, xU) : xg(dw)
		}(bF.q3[fm]);
		wE = (wE += du) % bF.bG
	}, this.xZ = function() {
		var dw, fl, w4, w5;
		if (s.a6() % 4 == 1)
			for (dw = bF.bG - 1; 0 <= dw; dw--) fl = bF.q3[dw], cC.tX[fl] < 2 || ((w4 = Math.max(wi[fl] - 1, 0)) === (w5 = Math.max(wj[fl] - 1, 0)) ? 0 === w4 && (cC.tX[fl] %= 2) : 0 === w5 && cC.tX[fl] < 6 && (cC.tX[fl] += 4), wi[fl] = w4, wj[
				fl] = w5)
	}, this.xa = function(player) {
		var dw = player + 2 * aR.bS,
			b5 = wZ[dw];
		return 0 < b5 && (cf.xb(50, player), wZ[dw] = 0, 255 === b5)
	}, this.xc = function(player) {
		return 255 === wZ[player + 2 * aR.bS]
	}
}

function xo() {
	function xs(dY) {
		if (0 === dY.length) gG.gH.gI(116, "");
		else {
			for (var xv = dY[0], dw = 1; dw < dY.length; dw++) xv += ";" + dY[dw];
			gG.gH.gI(116, xv)
		}
	}
	this.xp = function() {
		gG.ku.data[110].value.length && (gG.ku.data[106].value = gG.ku.data[110], gG.gH.gI(110, ""), this.xq())
	}, this.xq = function() {
		var dY = gG.ku.data[116].value.split(";");
		for (dY.length % 2 == 1 && dY.pop(), dY.unshift(gG.ku.data[106].value), dY.unshift(gG.ku.data[105].value), dw = 2; dw < dY.length; dw += 2)
			if (dY[dw] === dY[0]) {
				dY.splice(dw, 2);
				break
			} for (var xr = [], dw = 0; dw < dY.length; dw += 2) xr.push(dY[dw]);
		xs(dY), gG.ku.data[117].value = 0, gG.ku.data[117].gF = xr
	}, this.xt = function(dS) {
		gG.ku.data[117].gF.splice(dS, 1), gG.ku.data[117].value = Math.min(dS, gG.ku.data[117].gF.length - 1);
		var dY = gG.ku.data[116].value.split(";");
		dY.splice(2 * dS, 2), xs(dY)
	}, this.xu = function(dS) {
		var dY = gG.ku.data[116].value.split(";");
		return {
			nK: dY[2 * dS],
			password: dY[2 * dS + 1]
		}
	}, this.nD = function() {
		var gp = dU.ls(gG.ku.data[121].value, -1, 262143);
		return gp = -1 === gp ? ~~(262144 * Math.random()) : gp
	}
}

function p4() {
	this.xw = new xx, this.xy = new xz, this.y0 = new y1, this.performance = new vA, this.y2 = new y3, this.y4 = new y5, this.y6 = new y7, this.y8 = new y9, this.wA = new yA, this.j = function() {
		this.xw.j(), this.y0.j(), this.performance.j(), this.y2.j(), this.y4.j()
	}, this.b2 = function() {
		this.performance.b2(), this.xw.b2(), this.y0.yB()
	}
}

function p8() {
	var dx, oG = !1,
		yC = !1,
		yD = -1e4,
		yE = -1,
		yF = 0;

	function resize(yM) {
		dx = 0, aF.yN() && (yJ(yM) || oG) && (oG = !1, dI.resize(), o3.yO.resize(), nr.j(), o5.j(), ns.resize(), kK.resize(), nq.resize(), n.resize(), 1 <= aR.bf ? (cW.resize(!1), cb.resize(), cc.resize(), cX.resize(), cY.resize(), cf.resize(), cd
			.resize(), cZ.resize(), ca.resize(), cg.resize(), ce.resize(), ch.resize(), cT.resize(), cn.resize(), ci.resize(), ag.resize(), cX.yP()) : (r.yQ(), r.yR()), s.ap = !0)
	}

	function yH(gp) {
		return gp && 128 < gp ? Math.floor(gp) : 128
	}

	function yJ(yM) {
		var aN, aO, yT, nZ, yV;
		if (!(0 < aL.rU)) return nZ = yH(document.documentElement.clientWidth), yV = yH(window.visualViewport && 2 !== aI.id ? window.visualViewport.height : document.documentElement.clientHeight), aN = nZ, aO = yV, yT = 0 !== aI.id || aN < aO ?
			700 : 1200, yT = Math.min(yT / ((aN + aO) / 2), 1), yT = 0 === gG.ku.data[1].value ? 2 * yT / 3 : Math.min(yT + (gG.ku.data[1].value - 1) * (1 - yT) / 2, 1), aL.bC = (window.devicePixelRatio || 1) * yT, __fx.hoveringTooltip
			.canvasPixelScale = aL.bC, yM && !yC ? (yC = !0, document.body.removeChild(qq)) : yC && (yC = !1, document.body.appendChild(qq)), aN = Math.floor(.5 + nZ * aL.bC), aO = Math.floor(.5 + yV * aL.bC), aN !== aL.aN || aO !== aL.aO ? (aL
				.aN = aN, aL.aO = aO, aL.min = yX(aN, aO), aL.max = yY(aN, aO), aL.aM = dU.dV(aN + aO, 2), aL.yG = aN / aO, qq.width = aN, qq.height = aO, qq.style.width = nZ + "px", qq.style.height = yV + "px", yE = s.t + 1e3, 1) : void 0
	}
	this.aN = 0, this.aO = 0, this.min = 0, this.max = 0, this.aM = 0, this.yG = 1, this.bC = 1, this.rU = 0, this.cD = function() {
		this.aN = yH(document.documentElement.clientWidth) + 2, this.aO = yH(document.documentElement.clientHeight) + 2
	}, this.j = function() {
		dx = 1, qq = document.getElementById("canvasA"), (aC = qq.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, yJ(0)
	}, this.b2 = function() {
		50 <= ++dx && resize(0), -1 === yE || s.t < yE || (yE = -1, 2e3 * ++yF >= s.t + 8e3 ? console.log("error 3748") : aI.aJ.setState(15))
	}, this.kx = function(yL) {
		oG = !0, resize(yL)
	}, this.rj = function() {
		yD + 1e3 > s.t || (yD = s.t, resize(0))
	}
}

function oo() {
	var yb, yc, yd, ye, yf, yg, yh, yi, yj, yk, yZ = [
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
		ya = [
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

	function yr(m4, m5) {
		for (var dw = m4; dw < m5; dw++) yb[dw] = 4 * dU.dV(64 * c3.random(), c3.value(100)), yc[dw] = 4 * dU.dV(64 * c3.random(), c3.value(100)), yd[dw] = 4 * dU.dV(64 * c3.random(), c3.value(100))
	}

	function yq(m4, m5) {
		for (var colorsData = aR.data.colorsData, dw = m4; dw < m5; dw++) {
			var gp = colorsData[dw];
			yb[dw] = 4 * (gp >> 12), yc[dw] = 4 * (gp >> 6 & 63), yd[dw] = 4 * (63 & gp)
		}
	}

	function zD(gt, zF) {
		z7[gt] = 0, z7[gt + 1] = 0, z7[gt + 2] = zF, z7[gt + 3] = 0, zG(gt)
	}

	function zG(gt) {
		var iE;
		cG.zJ || (iE = cC.nP(gt), gt = cC.nQ(gt), cG.zJ = iE >= o7.zK[0] && iE <= o7.zK[2] && gt >= o7.zK[1] && gt <= o7.zK[3])
	}
	this.yo = new Int32Array(4), this.cD = function() {
		var yo = this.yo;
		yo[0] = -4 * gu.gv, yo[1] = 4, yo[2] = -yo[0], yo[3] = -yo[1]
	}, this.j = function() {
		if (yb = new Uint8Array(aR.bS), yc = new Uint8Array(aR.bS), yd = new Uint8Array(aR.bS), ye = new Uint8Array(aR.bS), yf = new Uint8Array(aR.bS), yg = new Uint8Array(aR.bS), yh = new Uint8Array(aR.bS), yi = new Uint8Array(aR.bS), yj =
			new Uint8Array(aR.bS), yk = new Uint8Array(aR.bS), this.tX = new Uint8Array(aR.bS), aR.ae)
			for (var yz = aj.yz, dw = aR.bS - 1; 0 <= dw; dw--) {
				var dx = yz[dw],
					g4 = dU.dV((ya[dx][3] + 1) * c3.random(), c3.value(100));
				yb[dw] = yZ[dx][0] + g4 * ya[dx][0], yc[dw] = yZ[dx][1] + g4 * ya[dx][1], yd[dw] = yZ[dx][2] + g4 * ya[dx][2]
			} else 0 === aR.data.colorsType ? aR.data.selectableColor ? (yq(0, aR.bY), yr(aR.bY, aR.bS)) : yr(0, aR.bS) : yq(0, aR.bS);
		! function() {
			var dw, kR;
			for (dw = aR.bS - 1; 0 <= dw; dw--) kR = dU.dV(yb[dw] + yc[dw] + yd[dw], 3), yb[dw] += lp(kR - yb[dw], 2), yc[dw] += lp(kR - yc[dw], 2), yd[dw] += lp(kR - yd[dw], 2), yb[dw] -= yb[dw] % 4, yc[dw] -= yc[dw] % 4, yd[dw] -= yd[dw] % 4
		}(),
		function() {
			for (var dw = aR.bS - 1; 0 <= dw; dw--) yb[dw] += dU.dV(dw, 128), yc[dw] += dU.dV(dw % 128, 32), yd[dw] += dU.dV(dw % 32, 8), ye[dw] = dw % 8
		}(), this.yu(),
			function() {
				for (var dw = aR.bS - 1; 0 <= dw; dw--) yf[dw] = yb[dw] < 32 ? yb[dw] + 32 : yb[dw] - 32, yg[dw] = yc[dw] < 32 ? yc[dw] + 32 : yc[dw] - 32, yh[dw] = yd[dw] < 32 ? yd[dw] + 32 : yd[dw] - 32
			}(),
			function() {
				for (var dw = aR.bS - 1; 0 <= dw; dw--) yi[dw] = 235 < yb[dw] ? yb[dw] - 20 : yb[dw] + 20, yj[dw] = 235 < yc[dw] ? yc[dw] - 20 : yc[dw] + 20, yk[dw] = 235 < yd[dw] ? yd[dw] - 20 : yd[dw] + 20
			}()
	}, this.yx = function(player) {
		var dY = bw.yy;
		return dY[0] = yb[player], dY[1] = yc[player], dY[2] = yd[player], dY
	}, this.yu = function() {
		for (var dw = aR.bS - 1; 0 <= dw; dw--) this.tX[dw] = yb[dw] + yc[dw] + yd[dw] < 280 ? 0 : 1
	}, this.nP = function(gt) {
		return dU.dV(gt, 4) % gu.gv
	}, this.nQ = function(gt) {
		return dU.dV(gt, 4 * gu.gv)
	}, this.z0 = function(iE, iF) {
		return Math.floor(4 * (iF * gu.gv + iE))
	}, this.z1 = function(gt) {
		var yo = this.yo;
		return this.z2(gt + yo[0]) || this.z2(gt + yo[1]) || this.z2(gt + yo[2]) || this.z2(gt + yo[3])
	}, this.z3 = function(gt) {
		var yo = this.yo;
		return this.z4(gt + yo[0]) || this.z4(gt + yo[1]) || this.z4(gt + yo[2]) || this.z4(gt + yo[3])
	}, this.z5 = function(gt, player) {
		var yo = this.yo;
		return this.z6(gt + yo[0], player) || this.z6(gt + yo[1], player) || this.z6(gt + yo[2], player) || this.z6(gt + yo[3], player)
	}, this.hE = function(gt) {
		return 208 <= z7[gt + 3]
	}, this.xn = function(player, gt) {
		return this.hE(gt) && this.hF(player, gt)
	}, this.hF = function(player, gt) {
		return player === this.hJ(gt)
	}, this.z8 = function(gt) {
		return 208 <= z7[gt + 3] && z7[gt + 3] < 224
	}, this.z9 = function(gt) {
		return 224 <= z7[gt + 3] && z7[gt + 3] < 248
	}, this.tp = function(gt) {
		for (var yo = this.yo, dw = 3; 0 <= dw; dw--)
			if (this.hA(gt + yo[dw])) return !0;
		return !1
	}, this.hO = function(gt) {
		return this.hE(gt) || this.hH(gt)
	}, this.hA = function(gt) {
		return 0 === z7[gt + 3] && 2 === z7[gt + 2]
	}, this.hH = function(gt) {
		return 0 === z7[gt + 3] && 1 === z7[gt + 2]
	}, this.zA = function(gt) {
		return 0 === z7[gt + 3] && 3 === z7[gt + 2]
	}, this.z4 = function(gt) {
		return 0 === z7[gt + 3] && 5 === z7[gt + 2]
	}, this.z2 = function(gt) {
		return 0 === z7[gt + 3] && 3 <= z7[gt + 2]
	}, this.h2 = function(gt) {
		return (z7[gt] >> 1 << 8) + z7[gt + 1]
	}, this.zB = function(gt) {
		return 1 & z7[gt]
	}, this.z6 = function(gt, player) {
		return this.hH(gt) || this.hE(gt) && player !== this.hJ(gt)
	}, this.hJ = function(gt) {
		return z7[gt] % 4 * 128 + z7[gt + 1] % 4 * 32 + z7[gt + 2] % 4 * 8 + z7[gt + 3] % 8
	}, this.zC = function(gt) {
		zD(gt, 1)
	}, this.zE = function(gt) {
		zD(gt, 2)
	}, this.zH = function(gt, player) {
		z7[gt] = yb[player], z7[gt + 1] = yc[player], z7[gt + 2] = yd[player], z7[gt + 3] = 208 + ye[player], zG(gt)
	}, this.jC = function(gt, player) {
		z7[gt] = yf[player], z7[gt + 1] = yg[player], z7[gt + 2] = yh[player], z7[gt + 3] = 224 + ye[player], zG(gt)
	}, this.zI = function(gt, player) {
		z7[gt] = yi[player], z7[gt + 1] = yj[player], z7[gt + 2] = yk[player], z7[gt + 3] = 248 + ye[player], zG(gt)
	}
}

function op() {
	function zQ(player) {
		var b5;
		aW.aX.q4(player) && (b5 = aZ.bN[player] - aZ.qC[player] + cm.hk(player), cA.j4(player, Math.abs(b5), b5 < 0 ? 18 : 12)), aZ.bN[player] = 0, aZ.qC[player] = 0
	}

	function za() {
		ci.show(!1, !1, !1, !0), cc.zc(), bx.zd.fZ()
	}

	function zM(player, zZ) {
		for (var dw = zZ.length - 1; 0 <= dw; dw--) cm.ze(zZ[dw], player)
	}

	function zO(player) {
		for (var sX = aZ.sX, sY = aZ.sY, sZ = aZ.sZ, sa = aZ.sa, iG = sX[player], iH = sZ[player], gv = gu.gv, ac = aZ.ac, iE = sY[player]; iG <= iE; iE--)
			for (var iF = sa[player]; iH <= iF; iF--) {
				var fl = 4 * (iF * gv + iE);
				cC.xn(player, fl) && (cC.zC(fl), ac[player]--)
			}
		sY[player] = sa[player] = 0, sX[player] = sZ[player] = Math.max(gv, gu.h1)
	}
	this.pv = function(fl) {
		var player, b5 = aZ.ac[fl];
		cJ.v.hQ[fl] ? b5 && (zM(player = fl, cm.zN(player)), zO(player), cj.zP(player), cm.clear(player), zQ(player), function(player) {
			aZ.zS[player] = 0, aZ.ig[player] = [], aZ.iZ[player] = [], aZ.gl[player] = [], aZ.ic[player] = []
		}(player)) : !b5 && aZ.ig[fl].length || this.ge(fl)
	}, this.ge = function(player) {
		! function(player) {
			aW.aX.aY(player) || (aZ.fi[player] = n7.zX.zY(), aR.bb++);
			var zZ = cm.zN(player);
			0 === zZ.length ? aW.aX.pz(player) && za() : (zM(player, zZ), function(player, zZ) {
				var zg = zZ[function(zZ) {
					var dw, dS = 0;
					for (dw = zZ.length - 1; 1 <= dw; dw--) aZ.ac[zZ[dw]] > aZ.ac[zZ[dS]] && (dS = dw);
					return dS
				}(zZ)];
				9 === aR.aV && (1 === aj.al[player] ? c3.zh(8) && by.zi(zg) : cM.hm[player] && (cf.zj(765, 0), cf.fj(280, L(50, [aZ.fp[zg], aZ.fp[player]]), 765, zg, fk.e3, fk.fK, -1, !0)));
				if (aW.aX.pz(player)) za(), cf.gV(zg, 1);
				else {
					for (var dw = zZ.length - 1; 0 <= dw; dw--)
						if (aW.aX.q4(zZ[dw]) && (cA.zk[4 - aW.aX.aY(player)]++, aW.aX.pz(zZ[dw]))) return cf.gV(player, 0);
					aW.aX.aY(player) || cf.zl(0, player, zg)
				}
			}(player, zZ))
		}(player), zO(player), zQ(player),
			function(player) {
				aZ.aa[player] = 0, aZ.ig[player] = null, aZ.iZ[player] = null, aZ.gl[player] = null, aZ.ic[player] = null
			}(player), cj.zP(player), cm.clear(player), cJ.zV.zW(player)
	}
}

function oP() {
	var mq = new Uint8Array(aR.bS),
		zm = new Uint16Array(aR.bS),
		zn = new Uint16Array(aR.bS),
		zo = new Uint8Array(aR.bS),
		zp = (this.hm = new Uint8Array(aR.bS), new Uint16Array(aR.bS)),
		zq = new Uint16Array(aR.bS);

	function a03(dw) {
		mq[dw] = 1 + dU.dV(zp[dw] * c3.random(), 10 * c3.value(100))
	}
	this.zr = null, this.zs = [97, 94, 70, 40, 20, 0, 100], this.zt = [500, 450, 400, 300, 80, 50, 100], this.zu = [0, 0, 5, 25, 50, 100, 0], this.zv = [60, 74, 112, 200, 256, 512, 512], this.zw = [1, 2, 3, 4, 6, 8, 1], this.zx = [500, 450, 400, 300,
		80, 50, 100
	], this.zy = [100, 150, 250, 400, 600, 1e3, 100], this.cD = function() {
		this.zr = [L(51), L(52), L(53), L(54), L(55), L(56), "H Bot"]
	}, this.j = function() {
		mq.fill(0), zm.fill(0), zn.fill(0), zo.fill(0), this.hm.fill(0), zp.fill(0), zq.fill(0);
		var zz = aR.bY;
		if (9 === aR.aV) this.a00();
		else if (aR.ay)
			if (3 === aR.data.botDifficultyType)
				for (dw = aR.ba - 1; 0 <= dw; dw--) {
					var n0 = dw + zz;
					this.hm[n0] = aR.data.botDifficultyData[n0]
				} else if (2 === aR.data.botDifficultyType)
					for (dw = aR.ba - 1; 0 <= dw; dw--) this.hm[n0 = dw + zz] = aR.data.botDifficultyTeam[aj.ak[aj.al[n0]]];
				else if (1 === aR.data.botDifficultyType) {
			var a02 = this.zr.length;
			for (dw = aR.ba - 1; 0 <= dw; dw--) this.hm[dw + zz] = dw % a02
		} else
			for (a02 = aR.data.botDifficultyValue, dw = aR.ba - 1; 0 <= dw; dw--) this.hm[dw + zz] = a02;
		else
			for (var a01 = 8 === aR.aV ? 1 : 0, dw = aR.ba - 1; 0 <= dw; dw--) this.hm[dw + zz] = a01;
		for (dw = 0; dw < zz; dw++) this.hm[dw] = 6;
		var du = aR.bS;
		for (dw = 0; dw < du; dw++) this.hm[dw] <= 2 ? (zo[dw] = 5, zp[dw] = zq[dw] = 1040, 0 === this.hm[dw] ? (zm[dw] = 980, zn[dw] = 980) : 1 === this.hm[dw] ? (zm[dw] = 980, zn[dw] = 920, zp[dw] = zq[dw] = 1100) : (zm[dw] = 825, zn[dw] =
			750)) : this.hm[dw] <= 4 ? (zo[dw] = 1 + c3.a04(20), 3 === this.hm[dw] ? (zm[dw] = zn[dw] = 500, zp[dw] = zq[dw] = 1e3) : (zq[dw] = 250 + c3.a04(1501), zp[dw] = 500 + c3.a04(501), zm[dw] = 300 + c3.a04(201), zn[dw] = 100 + c3.a04(
			201))) : this.hm[dw] <= 5 ? (zp[dw] = 1e3, zq[dw] = 1e3, zo[dw] = 35 + c3.a04(16), zm[dw] = 300 + c3.a04(201), zn[dw] = 50 + c3.a04(101)) : (zp[dw] = zq[dw] = 800, zo[dw] = 5, zm[dw] = 10, zn[dw] = 250), a03(dw)
	}, this.a00 = function() {
		for (var gt = by.a05, zz = aR.bY, dw = gt - 1; 0 <= dw; dw--) this.hm[dw + zz] = 0;
		for (var fn = 0; fn < 6; fn++) {
			for (dw = gt + by.a06[fn] - 1; gt <= dw; dw--) this.hm[dw + zz] = fn;
			gt += by.a06[fn]
		}
	}, this.a07 = function(fl, value) {
		mq[fl] = Math.min(value, mq[fl])
	}, this.b2 = function(fl) {
		0 == --mq[fl] && ! function(fl) {
			(function(fl) {
				zp[fl] !== zq[fl] && (zp[fl] += zp[fl] < zq[fl] ? 3 : -3);
				zm[fl] !== zn[fl] && (zm[fl] += zm[fl] < zn[fl] ? zo[fl] : -zo[fl], zm[fl] = (Math.abs(zm[fl] - zn[fl]) <= zo[fl] ? zn : zm)[fl]);
				mq[fl] = dU.dV(zp[fl], 10)
			})(fl), cK.y4.a0A(fl, dU.dV(zm[fl] * aZ.bN[fl], 1e3))
		}(fl)
	}, this.vK = function(fl, mv) {
		zp[fl] = zq[fl] = mv
	}
}

function ax() {
	var a0B, a0C, a0D, a5, a0E, dS = 0,
		t = s.t;

	function a0L() {
		! function() {
			if (!aR.bh) return;
			if (aR.ay) return;
			if (2 !== aR.bf)
				if (a0E % 7 != 0) a0E++;
				else if (a5 === aR.bp) {
				if (!a0P()) return;
				cc.a0R(a5), aR.bm.b2()
			} else {
				if (!a0P()) return;
				a0E++, a5++, cn.wx(), cn.cv(!0)
			}
			return 1
		}() && a0P() && a0Q()
	}

	function a0N() {
		dS = 0, (aR.bh ? (s.ap = cc.a0R(a5 - (a0E % 7 == 0 ? 0 : 1) + a0E % 7 / 7) || s.ap, a0S) : cd.d9 || !cZ.dA ? a0S : (s.ap = !0, a0T))()
	}

	function a0P() {
		var dw, du, a0U = cR.cy.dm,
			dn = cR.cy.dp,
			dq = cR.cy.dr,
			ds = cR.cy.dt,
			a0V = cR.cy.dy,
			a0W = cR.cy.dv;
		if (!(a0B >= a0W.length)) {
			if (a0W = a0W[a0B], a0V[a0B]) {
				for (du = a0C + a0W, dw = a0C; dw < du; dw++) c7.c8.a0Y(a0U[dw], dn[dw], dq[dw], ds[dw]);
				a0C += a0W, a0B++
			} else ++a0D >= a0W && (a0B++, a0D = 0);
			return 1
		}
		cf.a0X("Replay file smaller than expected."), cZ.rg(!1), aR.bf = 2
	}
	this.b3 = 0, this.j = function() {
		a0E = a5 = a0D = a0C = a0B = 0
	}, this.b2 = function() {
		var a0J;
		aL.b2(), cZ.a0F() < 1.7 ? 0 === dS ? s.t >= t && (a0J = s.aq / cZ.a0F(), t += a0J * Math.floor(1 + (s.t - t) / a0J), 2 === aR.bf || cd.d9 || !cZ.dA ? a0K() : (a0L(), cG.a0M()), dS++) : a0N() : function() {
			var a0J;
			if (s.t >= t)
				if (2 === aR.bf || cd.d9 || !cZ.dA) a0K(), t = s.t;
				else {
					for (a0J = s.aq / cZ.a0F(), 16 < (s.t - t) / a0J && (t = s.t - 16 * a0J); s.t >= t && 2 !== aR.bf;) t += a0J, a0L();
					cG.a0M()
				} a0N()
		}(), a0I(), s.ap && (s.ap = !1, nM())
	}, this.a0Z = function() {
		cR.cy.dv.length - a0B <= 2 || cf.a0X("Replay file larger than expected.")
	}
}

function oW() {
	var a0a, iE, iF, a0b, a0c, a0d, t, a0e, a0f, a0g, a0h, gap, zoom, a0i, a0j;

	function a18(hY, hZ, gt) {
		cC.hO(gt) || -1 === (hY = cJ.sr.hX(hY, hZ)) ? cf.a1Q(gt) : cf.a1R(hY)
	}

	function a0u(a0e) {
		for (var dw = a0i.length - 1; 0 <= dw; dw--)
			if (a0i[dw] === a0e) return 1
	}

	function a0s(a0p) {
		var dw, du;
		if (-1 !== a0p)
			for (du = a0a.length, dw = 0; dw < du; dw++)
				if (a0a[dw].mH && a0a[dw].iE + 1 === a0p % 4 && a0a[dw].iF + 1 === a0p >> 2) return dw;
		return -1
	}

	function a0q(hY, hZ) {
		var fh = gap / 2;
		return hY < iE - a0b - 3 * fh || iE + 3 * a0b + 5 * fh < hY || hZ < iF - a0b - 3 * fh || iF + 2 * a0b + 3 * fh < hZ ? -1 : 4 * (hZ < iF - fh ? 0 : hZ < iF + a0b + fh ? 1 : 2) + (hY < iE - fh ? 0 : hY < iE + a0b + fh ? 1 : hY < iE + 2 * a0b +
			3 * fh ? 2 : 3)
	}
	this.a0k = function() {
		var dw, fn, a0m = [fk.ec, fk.eq, fk.eA, fk.fB, fk.f3];
		for (a0a = new Array(10), dw = 0; dw < 10; dw++) a0a[dw] = {
			id: dw,
			mH: !1,
			a0n: 0,
			canvas: [],
			iE: 0,
			iF: 0
		};
		for (a0a[0].colors = [0, 1, 2, 3], a0a[0].iE = 0, a0a[0].iF = 0, a0a[1].colors = [1, 4], a0a[1].iE = 1, a0a[1].iF = 0, a0a[2].colors = [0, 2], a0a[2].iE = -1, a0a[2].iF = 0, a0a[3].colors = [0], a0a[3].iE = 0, a0a[3].iF = 0, a0a[4]
			.colors = [0, 2], a0a[4].iE = 1, a0a[4].iF = 1, a0a[5].colors = [3], a0a[5].iE = 0, a0a[5].iF = -1, a0a[6].id = 20, a0a[6].colors = [0], a0a[6].iE = 1, a0a[6].iF = -1, a0a[7].id = 21, a0a[7].colors = [0], a0a[7].iE = 0, a0a[7].iF = 1,
			a0a[8].id = 16, a0a[8].colors = [0], a0a[8].iE = 0, a0a[8].iF = 0, a0a[9].id = 10, a0a[9].colors = [4], a0a[9].iE = 2, a0a[9].iF = 0, dw = 0; dw < 10; dw++)
			for (fn = 0; fn < a0a[dw].colors.length; fn++) a0a[dw].canvas.push(function(id, a0o) {
				if (id < 20) return aW.canvas.mg(aF.get(3), id, a0o);
				var a0o = aF.get(3).height,
					uk = aW.bA.yI(a0o, a0o),
					n2 = aW.bA.getContext(uk);
				20 === id ? n2.drawImage(aF.get(18), 0, 0) : 21 === id && mh.xR.n1(mh.mi.mm + mh.mi.w3, n2, 0, 0, a0o);
				return uk
			}(a0a[dw].id, a0m[a0a[dw].colors[fn]]))
	}, this.xT = function() {
		return a0a
	}, this.j = function() {
		a0i = [], iE = iF = t = 0, a0c = a0d = -1e3, this.resize()
	}, this.resize = function() {
		a0b = Math.floor((aI.aJ.aK() ? .075 : .0468) * aL.aM), zoom = a0b / aF.get(3).height, gap = Math.floor(a0b / 3)
	}, this.rD = function(hY, hZ) {
		return !!this.mH() && (s.ap = !0, !!mh.xR.mJ(hY, hZ, a0f) || (hY = function(hY, hZ) {
			a0d = a0c = -1e3;
			var a0r = a0s(a0q(hY, hZ));
			if (-1 === a0r) return 0;
			if (1 !== a0a[a0r].colors[a0a[a0r].a0n])
				if (5 === a0r) {
					if (! function() {
							var b5 = performance.now();
							a0j + 4e3 < b5 && (a0i = []);
							a0j = b5
						}(), a0u(a0e)) return 1;
					a0i.push(a0e), 16 < a0i.length && a0i.shift()
				} else if (6 === a0r) {
				for (var dw = a0i.length - 1; 0 <= dw; dw--) 0 === aZ.aa[a0i[dw]] && a0i.splice(dw, 1);
				0 < a0i.length && (cp.a0v(1, a0i, !0) && c7.aX.a0w(a0i, a0e), a0i = [])
			} else if (2 === a0r) c7.my.a0x(cY.a0y(), a0e);
			else if (3 === a0r) aR.bh && c7.my.a0z(a0g);
			else if (0 === a0r)
				if (0 === a0a[0].a0n) {
					if (aR.bi && cc.uK() < 350) return 1;
					cL.a10(4), c7.my.a11(cY.a0y(), a0e)
				} else cq.a12(a0e, cY.a0y());
			else if (1 === a0r) c7.my.a13(cY.a0y(), a0g);
			else if (9 === a0r) c7.my.a14(cY.a0y());
			else {
				if (7 === a0r) return cL.a10(0), mh.xR.show(hY, hZ), 2;
				if (4 === a0r) cp.a0v(0, [a0e], !0) && c7.aX.a15(a0e);
				else {
					if (8 !== a0r) return 0;
					c7.my.a16(cY.a0y(), a0h, a0e)
				}
			}
			return 1
		}(hY, hZ), this.jn(), 2 === hY && (mh.xR.mH = !0), 0 < hY))
	}, this.rF = function(hY, hZ) {
		this.mH() || (a0c = hY, a0d = hZ, t = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = cI.ut(mouseX),
			coordY = cI.uu(mouseY),
			coord = cI.i1(coordX, coordY),
			coord = cI.h3(coord);
		cI.uv(coordX, coordY) && a18(mouseX, mouseY, coord)
	}, this.click = function(hY, hZ, rQ) {
		var m3 = cI.ut(hY),
			m7 = cI.uu(hZ),
			go = cI.i1(m3, m7),
			gt = cI.h3(go);
		return !(!cI.uv(m3, m7) || (m3 = (aI.aJ.aK() ? .025 : .0144) * aL.aM, m7 = performance.now(), Math.abs(hY - a0c) > m3) || Math.abs(hZ - a0d) > m3 || t + 500 < m7) && (t = m7, rQ ? (a18(hY, hZ, gt), !1) : cd.d9 || this.mH() || !aW.aX.fT(aR
			.ad) || aR.aw ? (this.jn(), !1) : (aR.bh ? 0 <= (a0g = oE.a19(go)) && (a0a[3].mH = !0) : 2 === aR.bf ? cC.hE(gt) && (a0e = cC.hJ(gt), aW.aX.aY(a0e) || (a0a[0].mH = !0, a0a[0].a0n = 1, a0a[7].mH = !0)) : (cJ.a1B.a1C(aR.ad,
			go) && (a0a[0].mH = !0, a0a[0].a0n = 1, a0a[1].mH = !0, a0a[1].a0n = 0, a0a[9].mH = !0, a0a[9].a0n = 0), cJ.a1D.a1E(aR.ad, go) && (a0a[0].mH = !0, a0a[0].a0n = 1, a0a[1].mH = !0, a0a[1].a0n = 1, a0g = bw.hj[7]), cC.z4(
			gt) ? (a0h = nu.a1F.a1G(gt)) && (m3 = cI.h3(a0h), a0a[8].mH = !0, a0e = cC.hH(m3) ? aR.bS : cC.hJ(m3)) : (cC.xn(aR.ad, gt) && (a0f = aR.ad, a0a[0].mH = !0, a0a[0].a0n = 1, a0a[7].mH = !0), -1 !== (m7 = oE.a1I(go)) && (cC
				.hH(m7 << 2) ? (a0e = aR.bS, hK.a1J(aR.ad) ? (a0a[0].mH = !0, a0a[0].a0n = 0) : cm.a1K(aR.ad) && (a0a[0].mH = !0, a0a[0].a0n = 3)) : (a0e = cC.hJ(m7 << 2), a0a[0].a0n = 1, a0a[5].mH = function(a0e) {
					return !aW.aX.aY(a0e) && !a0u(a0e) && cp.a0v(1, [a0e], !1)
				}(a0e), a0a[7].mH || aW.aX.aY(a0e) || (a0f = a0e, a0a[7].mH = !0), a0a[4].mH = !aW.aX.aY(a0e) && !cn.xc(a0e) && cp.a0v(0, [a0e], !1), a0a[6].mH = function(a0e) {
					if (0 === a0i.length) return !1;
					if (performance.now() > a0j + 4e3) return !(a0i = []);
					return !a0u(a0e) && ! function(a0e) {
						var dw;
						if (aR.ae)
							for (dw = a0i.length - 1; 0 <= dw; dw--)
								if (!hK.hL(a0e, a0i[dw])) return 1;
						return
					}(a0e)
				}(a0e), hK.hL(a0e, aR.ad) ? (hK.a1N(aR.ad, a0e) ? (a0a[0].a0n = 0, a0a[0].mH = !0) : cm.a1K(aR.ad) && (a0a[0].a0n = 3, a0a[0].mH = !0), a0a[0].mH = this.a1O()) : (a0a[2].mH = !0, a0a[0].mH = !0))))), this.a1A(hY, hZ)))
	}, this.a1A = function(hY, hZ) {
		return iE = hY - Math.floor(a0b / 2), iF = hZ - Math.floor(a0b / 2), !!this.mH()
	}, this.qr = function(hY, hZ) {
		return !!this.mH() && (mh.xR.mH ? !mh.xR.mx(hY, hZ) && (mh.xR.mH = !1, s.ap = !0) : function(a1U, hY, hZ) {
			hY = a0q(hY, hZ);
			if (0 <= a0s(hY)) return !1;
			if ((1 === hY || 6 === hY) && 0 <= a0s(2)) return !1;
			if ((6 === hY || 9 === hY) && 0 <= a0s(10)) return !1;
			return a1U.jn(), s.ap = !0
		}(this, hY, hZ))
	}, this.jn = function() {
		for (var dw = a0a.length - 1; 0 <= dw; dw--) a0a[dw].mH = !1, a0a[dw].a0n = 0;
		mh.xR.mH = !1
	}, this.mH = function() {
		return this.a1O() || mh.xR.mH
	}, this.a1O = function() {
		for (var du = a0a.length, dw = 0; dw < du; dw++)
			if (a0a[dw].mH) return !0;
		return !1
	}, this.mP = function() {
		if (this.mH())
			if (mh.xR.mH) mh.xR.mP();
			else {
				var dw, n2 = aC,
					fn = a0a,
					du = fn.length,
					a1W = (a0b + gap) / zoom;
				for (n2.imageSmoothingEnabled = !0, n2.setTransform(zoom, 0, 0, zoom, iE, iF), dw = 0; dw < du; dw++) fn[dw].mH && aC.drawImage(fn[dw].canvas[fn[dw].a0n], fn[dw].iE * a1W, fn[dw].iF * a1W);
				n2.imageSmoothingEnabled = !1, n2.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a1X() {
	this.a0z = function(player, go) {
		aW.aX.ga(0) && aW.aX.fT(player) && cI.uw(go) && (cR.cy.a1Y(0, player, go), aR.bm.a1Z(player, go))
	}, this.a11 = function(player, qF, hI) {
		aW.aX.ga(1) && aW.aX.fT(player) && aW.aX.q7(player, hI) && aW.aX.qE(player, qF, 12, 0) && aW.aX.qY(player, hI) && ((hI = cm.a1b(player, bw.qZ[0])) || cm.a1c(player)) && (aZ.fe[player]++, cR.cy.a1Y(1, player, qF, bw.qZ[0]), cK.y2.a1d(
			player, hI)) && (aW.aX.qX(player), cA.a1e(player, qF), cK.y2.a1f(player))
	}, this.qM = function(player, qF, qN) {
		aW.aX.ga(1) && aW.aX.fT(player) && aR.ae && aW.aX.q7(player, qN) && aW.aX.qa(player, qN) && aW.aX.qL(player, aW.aX.qR(player, qF), qN) && (cR.cy.a1Y(2, player, qF, qN), bL.a0x(player, qN))
	}, this.a13 = function(player, qF, a1g) {
		bw.hj[1] = 7 & a1g;
		var go = a1g >> 3;
		aW.aX.ga(1) && aW.aX.fT(player) && cI.uw(go) && cJ.a1h.a1i(player) && cJ.a1h.a1j(go) && aW.aX.qE(player, qF, 32, 0) && cJ.a1k.lu(player, go, 1) && (cA.a1l(player), cR.cy.a1Y(3, player, qF, a1g), aW.aX.qX(player), oA.a1m.a13(player), cJ.v
			.a1n(player))
	}, this.a14 = function(player, qF, hi) {
		849 === qF ? this.a1o(player, hi) : aW.aX.ga(1) && aW.aX.fT(player) && aW.aX.qE(player, qF, 32, 0) && cJ.a1B.a1p(player, hi) && (cA.a1l(player), cR.cy.a1Y(4, player, qF, hi), aW.aX.qX(player), oA.a1m.a14(player), cJ.v.a1n(player))
	}, this.a1o = function(player, hi) {
		aW.aX.ga(1) && aW.aX.fT(player) && cJ.a1q.b2(player, hi) && cR.cy.a1Y(4, player, 849, hi)
	}, this.a1r = function(player, hI) {
		513 === hI ? this.rZ(player) : aW.aX.ga(1) && aW.aX.fT(player) && (hI = Math.min(hI, aR.bS), cm.a1b(player, hI)) && (cR.cy.a1Y(5, player, hI), cm.a1s(player, hI))
	}, this.a1t = function(player, kn) {
		(aW.aX.ga(1) || aW.aX.ga(2)) && aW.aX.fT(player) && (kn = dU.ls(kn, 0, 1023), cR.cy.a1Y(6, player, kn), cn.kp(player, 0, kn))
	}, this.a1u = function(player, a1v) {
		ca.a1w(player) && (cR.cy.a1Y(7, player, a1v), ca.a1x(player, a1v))
	}, this.gU = function(player) {
		(aW.aX.ga(0) || aW.aX.ga(1)) && aW.aX.fT(player) && cd.a1y(player) && (cR.cy.a1Y(8, player), o1.gU(player))
	}, this.gY = function(player) {
		cR.cy.a1Y(9, player), o1.gY(player)
	}, this.rZ = function(player) {
		ca.a1z(player) && (cR.cy.a1Y(5, player, 513), ca.rZ(player))
	}, this.a16 = function(player, qF, go, hI) {
		aW.aX.ga(1) && aW.aX.fT(player) && aW.aX.q7(player, hI) && aW.aX.qY(player, hI) && cI.uw(go) && nu.a1F.a20(player, go) && (cm.a1b(player, bw.qZ[0]) || cm.a1c(player)) && (cR.cy.a1Y(10, player, (qF << 10) + bw.qZ[0], go), hI = aW.aX.qW(
			player, qF), aZ.ig[player].push(bw.a21[0]), cm.a1Z(player, hI, bw.qZ[0]), cj.a22(player, !0), cA.a23(player))
	}
}

function sK() {
	this.k7 = function() {
		gG.v.xp(), gG.gH.gI(105, dc.dd.de(dc.dd.df(5))), gG.gH.gI(106, dc.dd.de(dc.dd.df(8))), gG.gH.gI(109, da.jw(30)), gG.gH.gI(108, gG.ku.data[109].value), gG.gH.gI(111, gG.ku.data[109].value + 1), gG.gH.gI(107, 0), gG.gH.gI(110, "")
	}, this.k9 = function() {
		var data;
		da.size < dW.dX(29) ? u.v.jv(0, 3254) : ((data = {
			l4: da.jw(30),
			l5: da.jw(16),
			l6: da.jw(30),
			l7: da.jw(30),
			l8: da.jw(30),
			l9: da.a24(32),
			username: kV.nJ.uD(5),
			lA: kV.nJ.uD(3),
			lB: kV.nJ.uD(3),
			lC: da.a24(32),
			lD: da.a24(32),
			lE: da.jw(30),
			lF: da.a24(32),
			lG: da.a24(32),
			lH: da.a24(32),
			lI: da.a24(32),
			a25: da.a24(32),
			a26: da.a24(30),
			a27: da.a24(32),
			a28: kV.nJ.uD(3),
			a29: da.a24(2),
			a2A: da.a24(10),
			a2B: kV.nJ.uD(8),
			a2C: da.a24(5),
			a2D: da.jw(30),
			a2E: da.jw(30),
			fV: da.a24(32),
			a2F: da.jw(1),
			a2G: da.jw(1)
		}).a2F && (data.a2H = da.a24(32), data.a2I = da.jw(30), data.a2J = da.jw(30), data.a2K = da.jw(1)), 8 === n.uL && (25 === n.uM().a2L ? (data.a2M = !0, n.v.a2N = data, n.uM().a2O(25, !1)) : (data.a2M = !1, gG.gH.gI(160, +(data
			.a2F && data.a2K)), data.nK = gG.ku.data[105].value, n.v.a2P = data, gG.gH.l3(data), n.uM().a2O(16, !0))))
	}
}

function a2Q() {
	function a2U(dY, gp, n0) {
		for (var dw = 0; dw < 256; dw++) dY[dw] = (dY[dw] + (gp >> (dw + n0) % 30 & 1)) % 256
	}
	this.b2 = function(a2R, a2S) {
		var dY = new Uint8Array(256);
		return function(dY, a2R, a2S) {
				var dw, a2X = 3 + (4 + a2R) % 32768,
					a2Y = 12 + a2S % 32768,
					a2Z = 17 + ((a2R & a2S) + (a2R | a2S) + a2R) % 32768;
				for (dw = 0; dw < 256; dw++) a2X = 1 + a2X * a2Y % a2Z, dY[dw] = a2X % 256
			}(dY, a2R, a2S), a2U(dY, a2R, 2), a2U(dY, a2S, 7),
			function(dY) {
				var dw, gp, dS = 0;
				for (dw = 0; dw < 3e4; dw++) gp = dY[dS], dY[dS] = (gp + dw + dY[(dS + dw) % 256]) % 256, dS = (gp + dw + dS + (gp & dS)) % 256
			}(dY),
			function(dY) {
				var dw, yV = 1,
					yW = 1;
				for (dw = 0; dw < 256; dw += 2) yV = (1 + yV) * (dY[dw] + 1) % 1073741824, yW = (1 + yW) * (dY[dw + 1] + 1) % 1073741824;
				return [yV, yW]
			}(dY)
	}
}

function ox() {
	var a2a;
	this.a06 = null, this.a05 = 0, this.j = function() {
		a2a = [], 9 === aR.aV && this.a2b()
	}, this.a2b = function() {
		this.a06 = [0, 0, 0, 0, 0, 0], this.a05 = 0, aR.bY <= 8 ? (this.a05 = 256 - dU.dV(325 * aR.bY, 100), this.a06[0] = aR.bS - aR.bY - this.a05) : aR.bY <= 12 ? (this.a05 = 230 - 6 * (aR.bY - 8), this.a06[0] = aR.bS - aR.bY - this.a05) : aR
			.bY <= 23 ? (this.a05 = 256 - dU.dV(256 * aR.bY, 60), this.a06[5] = dU.dV(aR.bY - 7, 6), this.a06[0] = aR.bS - aR.bY - this.a05 - this.a06[5]) : aR.bY <= 46 ? (this.a05 = 256 - dU.dV(256 * aR.bY, 60), this.a06[5] = 3 + dU.dV(37 * (aR
				.bY - 23), 100), this.a06[0] = aR.bS - aR.bY - this.a05 - this.a06[5]) : aR.bY <= 56 ? (this.a05 = 60 - 6 * (aR.bY - 46), this.a06[5] = 11 + dU.dV(46 * (aR.bY - 46), 100), this.a06[0] = aR.bS - aR.bY - this.a05 - this.a06[5]) : (
				this.a06[5] = Math.min(16 + dU.dV(61 * (aR.bY - 56), 100), 179), this.a06[0] = 512 - aR.bY - this.a06[5]), aR.ba = aR.bS - aR.bY, aR.data.numberTeams = (0 < aR.bY) + (0 < aR.ba), aR.data.playerCount = aR.bc = aR.bY + aR.ba, aR
			.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aR.bY + this.a05, aR.ba - this.a05]), aR.br.bz()
	}, this.zi = function(player) {
		a2a.push({
			player: player,
			mv: 14 + c3.a04(20)
		})
	}, this.b2 = function() {
		if (9 === aR.aV)
			for (var dw = a2a.length - 1; 0 <= dw; dw--) --a2a[dw].mv <= 0 && (cn.kp(a2a[dw].player, 0, mh.mi.mm + mh.mi.w0), a2a.splice(dw))
	}
}

function pe() {
	this.yO = new lQ, this.j = function() {
		this.yO.resize()
	}
}

function a2d() {
	var jE, jF, jG;

	function jK() {
		jO(), 3 !== aR.data.botDifficultyType || aW.jS.jW(aR.data.botDifficultyData) || (aR.data.botDifficultyType = 0), 3 !== aR.data.botDifficultyType && (aR.data.botDifficultyData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		3 === aR.data.botDifficultyType && aW.jS.jT(jG.jU(), aR.data.botDifficultyData, cM.zr.length - 1)
	}

	function a2e(jX, dS) {
		var jb = new jc,
			value = (jb.jd(dS < 0 ? L(57) : L(60) + " " + aj.fo[dS % 9]), 0 <= dS && (jb.a2f(L(61) + ": " + aR.data.teamPlayerCount[dS]).style.marginBottom = "1em"), dS < 0 ? aR.data.botDifficultyValue : aR.data.botDifficultyTeam[dS]);
		jb.je(new g9({
			gF: cM.zr,
			value: value
		}, function(n0) {
			dS < 0 ? aR.data.botDifficultyValue = n0 : aR.data.botDifficultyTeam[dS] = n0
		})), jX.push(jb)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(57), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, function() {
		var jX = [];
		if (function(jX) {
				var jb = new jc,
					gF = (jb.jd(L(11)), [L(18), L(58), L(59), L(14)]),
					value = aR.data.botDifficultyType;
				0 === aR.data.gameMode && (value = Math.min(value, 2), gF.splice(2, 1));
				jb.je(new g9({
					gF: gF,
					value: value
				}, function(dS) {
					jO(), aR.data.botDifficultyType = dS, 0 === aR.data.gameMode && 2 === dS && (aR.data.botDifficultyType = 3), 3 !== aR.data.botDifficultyType || aR.data.botDifficultyData || (aR.data.botDifficultyData =
						new Uint8Array(aR.bS)), 2 !== aR.data.botDifficultyType || aR.data.botDifficultyTeam || (aR.data.botDifficultyTeam = new Uint8Array(9)), n.d7(25)
				})), jX.push(jb)
			}(jX), 0 === aR.data.botDifficultyType) a2e(jX, -1);
		else if (2 === aR.data.botDifficultyType)
			for (var dw = 0; dw < aR.data.teamPlayerCount.length; dw++) aR.data.teamPlayerCount[dw] && a2e(jX, dw);
		else 3 === aR.data.botDifficultyType && ! function(jX) {
			var jb = new jc;
			jb.jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.botDifficultyData, 8)), jb.jf(jG), jX.push(jb)
		}(jX);
		return jX
	}())
}

function a2g() {
	var jt, a2h, a2i, a2j = ["wss://", "/s50/", "/s51/", "/s52/"],
		a2k = 0;

	function a2w() {
		u.v.a2w(jt, a2h)
	}

	function a2x(jj) {
		u.sH.js(jt, new Uint8Array(jj.data))
	}

	function a2z() {}

	function a2y(jj) {
		u.v.a2y(jt, jj)
	}
	this.j = function(dS, a2l) {
		jt = dS, a2h = a2l, dS = c1.lM ? "ws://localhost:" + (7130 + jt) + "/" : a2j[0] + u.v.a2v[jt] + a2j[1 + c1.c2], (a2i = new WebSocket(__fx.customLobby.isActive() && 1 === jt ? __fx.customLobby.getSocketURL() : dS)).binaryType =
			"arraybuffer", a2i.onopen = a2w, a2i.onmessage = a2x, a2i.onclose = a2y, a2i.onerror = a2z
	}, this.a2n = function() {
		return a2i.readyState === a2i.CONNECTING
	}, this.a2o = function() {
		return a2i.readyState === a2i.OPEN
	}, this.a2p = function() {
		return a2k
	}, this.a2q = function() {
		a2k = 1
	}, this.a2r = function() {
		return this.a2n() || this.a2o()
	}, this.a2s = function(a2l) {
		a2h = a2l
	}, this.a2t = function() {
		return a2h
	}, this.send = function(ju) {
		this.a2o() && a2i.send(ju)
	}, this.close = function(a2u) {
		this.a2r() && (a2i.close(a2u), this.jn())
	}, this.jn = function() {
		a2i.onopen = null, a2i.onmessage = null, a2i.onclose = null, a2i.onerror = null
	}
}

function a30() {
	this.sU = 28, this.sN = 0, this.sQ = null;
	var a31 = this.sV = null;

	function a36(lU, a39) {
		var iE, iF, go, hz, uk = aW.bA.yI(lU, lU),
			n2 = aW.bA.getContext(uk, !0),
			a3A = aW.bA.getImageData(n2, lU, lU),
			xR = a3A.data,
			g4 = (lU >> 1) - .5,
			a3B = .5 + g4;
		for (a3B *= a3B, iF = 0; iF < lU; iF++)
			for (iE = 0; iE < lU; iE++) hz = (hz = iE - g4) * hz + (hz = iF - g4) * hz, xR[go = 4 * (iF * lU + iE)] = a39[0], xR[1 + go] = a39[1], xR[2 + go] = a39[2], xR[3 + go] = (a3B - hz) * a39[3] / a3B;
		return n2.putImageData(a3A, 0, 0), uk
	}

	function a3E(dw, n2, uk, lU) {
		var highlight, iE, iF;
		0 !== aZ.aa[dw] && 0 !== aZ.ac[dw] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[dw]) && (lU *= 2), iE = aZ.sX[dw] + aZ.sY[dw] + 1 - lU - 2 >> 1, iF = aZ.sZ[dw] + aZ.sa[dw] + 1 - lU - 2 >> 1, highlight ? n2
			.drawImage(uk[aR.ae ? 9 === aR.aV && 5 === cM.hm[dw] ? 3 : aj.al[dw] : dw < aR.bY ? 1 : 0], iE, iF, lU, lU) : n2.drawImage(uk[aR.ae ? 9 === aR.aV && 5 === cM.hm[dw] ? 3 : aj.al[dw] : dw < aR.bY ? 1 : 0], iE, iF))
	}
	this.j = function() {
		var a1U;
		this.sN = 700,
			function(a1U) {
				var lU = a1U.sU;
				if (a1U.sV = [], a31 = [], aR.ae) {
					for (var dw = 0; dw <= aR.bj; dw++) a1U.sV.push(a36(lU, aj.a37[aj.ak[dw]])), a31.push(a36(lU >> 1, aj.a37[aj.ak[dw]]));
					9 === aR.aV && a31.push(a36(lU, aj.a37[1]))
				} else a1U.sV.push(a36(lU, aj.a37[7])), a1U.sV.push(a36(lU, aj.a37[4])), a31.push(a36(lU >> 1, aj.a37[7]))
			}(this),
			function(a1U, a3C) {
				var dw, sQ = a1U.sQ,
					n2 = aW.bA.getContext(sQ, !0),
					du = aR.bS,
					lU = a1U.sU >> 1;
				n2.imageSmoothingEnabled = !1, n2.setTransform(1, 0, 0, 1, 0, 0), a3C && n2.clearRect(0, 0, sQ.width, sQ.height);
				if (9 === aR.aV) {
					lU <<= 1;
					a1U = by.a06[5];
					for (dw = du - a1U; dw < du; dw++) a3E(dw, n2, a31, lU);
					du -= a1U, lU >>= 1
				}
				for (dw = aR.bY; dw < du; dw++) a3E(dw, n2, a31, lU)
			}(this, null !== (a1U = this).sQ && a1U.sQ.width === gu.gv - 2 && a1U.sQ.height === gu.h1 - 2 || (a1U.sQ = aW.bA.yI(gu.gv - 2, gu.h1 - 2), !1)), aR.bh || this.a35()
	}, this.a38 = a36, this.a35 = function() {
		for (var du = aR.bY, lU = this.sU, sV = this.sV, n2 = aW.bA.getContext(this.sQ, !0), dw = 0; dw < du; dw++) a3E(dw, n2, sV, lU)
	}
}

function a3F() {
	var a3G = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		a3H = [fk.eQ, fk.eQ, fk.eR, fk.eu, fk.ev, fk.eh, fk.f0, fk.eR, fk.fJ, fk.f9, fk.fL],
		a3I = [
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
		a3J = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function a3X(a3Y, nK, a3a) {
		for (var fn = a3Y.length - 1; 0 <= fn; fn--) {
			var dg = a3Y[fn];
			0 === dg.id && dg.nK === nK && (dg.sl = "[Redacted Message]", a3a) && (dg.t5 = 1)
		}
	}
	this.tO = function(sh) {
		var a3K, g1;
		return sh.id < 5 && (a3K = "@" + dc.dd.t6(sh.nK, 5)), 0 === sh.id ? a3K + ": " + sh.sl : 1 === sh.id ? (g1 = "@" + dc.dd.t6(sh.target, 5), 0 === sh.tI ? 32768 <= sh.value ? a3K + " voted with " + (sh.value - 32768 + 1) +
				" gold against " + g1 + " to weaken the latter's admin position. 📉" : a3K + " voted with " + (sh.value + 1) + " gold for " + g1 + " to strengthen the latter's admin position. 💪" : 1 === sh.tI ? a3K + " sent " + Math.floor(sh
					.value / 100) + " 🧈 gold to " + g1 + "." : a3K + " voted with " + (sh.value / 10).toFixed(1) + " points for " + g1 + " to acknowledge the latter as clan leader. ✅") : 2 === sh.id ? 0 === sh.tI ? a3K +
			" was 🔇 muted for 1 Hour." : 1 === sh.tI ? "The username of " + a3K + " was ✂️ redacted. Duration: 1 Day" : a3K + " 👢 was kicked." : 3 === sh.id ? a3K + oC.a3L(sh.tI, oC.a3M[sh.tI][sh.value]) + "@" + dc.dd.t6(sh.target, 5) + oC.a3N(
				sh.tI, oC.a3M[sh.tI][sh.value]) : 4 === sh.id ? a3K + oC.a3L(5, oC.a3M[5][sh.tI]) + "@" + dc.dd.t6(sh.target, 5) + oC.a3N(5, oC.a3M[5][sh.tI]) : 5 === sh.id ? a3J[sh.tI] : 6 === sh.id ? "You are about to mention " + sh.value +
			" player" + (1 === sh.value ? "" : "s") + ". This action will cost " + (Math.max(10 * sh.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.tN = function(sh, vo) {
		return {
			sh: sh,
			sl: vo,
			sk: 0,
			fontSize: 1,
			si: 0,
			t7: sh.id ? fk.et : fk.eC
		}
	}, this.a3O = function(player, a3P) {
		return (2 === a3P ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.sx = function(st) {
		return a3H[st]
	}, this.ss = function(st, qd) {
		return st < 3 || 7 === st ? a3I[st][0] : 4 === st ? a3I[st][qd < 1 ? 0 : qd < 10 ? 1 : 2] : a3I[st][qd < 10 ? 0 : 1]
	}, this.su = function(qd) {
		return 0 === qd
	}, this.tA = function(a3P, nK) {
		for (var vs = p.t9.vs, t9 = vs[a3P], du = t9.length, dw = 0; dw < du; dw++)
			if (nK === t9[dw].nK) return t9[dw];
		for (var fn = 0; fn < vs.length; fn++)
			if (a3P !== fn)
				for (du = (t9 = vs[fn]).length, dw = 0; dw < du; dw++)
					if (nK === t9[dw].nK) return t9[dw];
		return null
	}, this.sy = function(dg) {
		return !!p.a3Q && dg.nK === p.a3Q.nK
	}, this.a3R = function(t9, a3S, a3T) {
		var fy = [];
		loop: for (var dw = a3S; dw < a3T; dw++) {
			var fz = aW.fv.g0(t9[dw].username);
			if (fz) {
				for (var fn = fy.length - 1; 0 <= fn; fn--)
					if (fz === fy[fn].name) {
						fy[fn].mv++;
						continue loop
					} fy.push({
					name: fz,
					mv: 1
				})
			}
		}
		if (fy.sort(function(fm, fn) {
				return fn.mv - fm.mv
			}), 0 === fy.length) return "";
		for (var fr = fy[0].name + ": " + fy[0].mv, dw = 1; dw < fy.length; dw++) fr += "   " + fy[dw].name + ": " + fy[dw].mv;
		return fr
	}, this.a3U = function(st, qd, a3V) {
		return 0 === a3G[st].length ? "Rank: " + (qd + 1) : a3G[st] + " Rank: " + (qd + 1) + (3 !== st && a3V < 100 ? "   " + a3G[3] + " Rank: " + (a3V + 1) : "")
	}, this.tL = function(nK) {
		for (var a3W = p.v.a3W, dw = 0; dw < a3W.length; dw++) a3X(a3W[dw].a3Y, nK);
		a3X(p.message.a3Z(), nK, 1), p.mi.tL(nK)
	}
}

function pC() {
	this.gh = function(player) {
		ck.wC(player), aR.bb++, aZ.gZ[player] = 2, aZ.fi[player] = n7.zX.zY(), player === aR.ad && (ci.show(!1, !1), cc.zc(), bx.zd.fZ()), cn.xa(player)
	}
}

function a3b() {
	function a3d() {
		if (2 === aR.bf) return 1;
		ca.a3f(), aR.bf = 2, aR.bb = aR.bZ
	}

	function a3e() {
		bx.a3g.aQ(), ci.show(1 === aR.aT, !1, 2 === aR.aT), bx.result.aQ(), bx.zd.b2(), bx.a3h.b2(), cf.a3i(!0), cf.xb(247), cf.xb(956), cf.xb(957), cW.cv(!0), cc.cv(!0), ca.cv(), cZ.a3j(), aR.aw && s.ao.a0Z(), s.ap = !0, cG.a3k(), aI.aJ.setState(0)
	}
	this.a3c = function() {
		a3d() || (aR.aS = 2, a3e())
	}, this.gc = function() {
		a3d() || (aR.aS = 1, a3e())
	}
}

function oX() {
	var aO, canvas, mM, a3l, a3m, a3n = -1;

	function a3o() {
		var xK, nU = canvas.getContext("2d", {
			alpha: !0
		});
		nU.clearRect(0, 0, aO, aO), nU.fillStyle = fk.e8, nU.fillRect(0, 0, aO, aO), 0 === a3l && (nU.fillStyle = fk.eD, nU.fillRect(0, 0, aO, aO)), nU.fillStyle = fk.eC, nU.fillRect(0, 0, aO, 1), nU.fillRect(0, 0, 1, aO), nU.fillRect(0, aO - 1, aO,
			1), nU.fillRect(aO - 1, 0, 1, aO), xK = .9 * aO / aF.get(0).width, nU.imageSmoothingEnabled = !0, nU.setTransform(xK, 0, 0, xK, Math.floor((aO - xK * aF.get(0).width) / 2), Math.floor((aO - xK * aF.get(0).height) / 2)), nU.drawImage(
			aF.get(0), 0, 0), nU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3q(hY, hZ) {
		if (!cd.d9) return hY <= aO + dI.gap && hZ >= cY.iF ? 9 : -1;
		if (hY <= 4 * aO + dI.gap) {
			if (hZ >= cY.iF) return 0;
			if (hZ >= cY.iF - aO - a3m * dI.gap) return 2
		} else if (hY <= 7 * aO + dI.gap && hZ >= cY.iF - aO - a3m * dI.gap) return 1;
		return -1
	}
	this.d9 = !1, this.j = function() {
		a3l = -1, this.d9 = !1, a3m = aI.aJ.aK() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		aO = cY.aO, (canvas = document.createElement("canvas")).width = aO, canvas.height = aO, mM = aW.bA.mN(1, (aI.aJ.aK() ? .5 : .45) * aO), a3o()
	}, this.rf = function() {
		this.d9 = !this.d9, this.d9 ? (cZ.re(!1), aR.aw && cZ.dA && cZ.rg(!0), this.a3p()) : (a3l = -1, a3o(), !aR.ay || 1 !== aR.bf || aR.bh || aR.aw || aI.aJ.setState(1)), s.ap = !0
	}, this.a3p = function() {
		(aR.ay || aR.aw) && 1 === aR.bf && (cW.cv(!0), aR.bh || setTimeout(function() {
			cG.a3k()
		}, 0), aI.aJ.setState(0))
	}, this.mJ = function(hY, hZ) {
		return 0 <= (a3n = a3q(hY, hZ)) || !cd.d9 || aR.ay || aR.aw || cT.mH || cd.rf(), a3n
	}, this.qr = function(hY, hZ) {
		hY = a3q(hY, hZ);
		hY !== a3l && (a3l = hY, this.d9 || a3o(), s.ap = !0)
	}, this.qs = function(hY, hZ) {
		hY = a3q(hY, hZ);
		return -1 !== hY && a3n === hY && (this.d9 ? aR.bg ? (0 <= hY && cZ.re(!1), !aR.aw) : (0 === hY ? aR.cw() : 1 === hY ? this.rf() : 2 === hY && n.d7(1, 0), !0) : 9 === hY && (this.rf(), !0))
	}, this.mP = function() {
		var aN;
		this.d9 ? (aN = Math.floor(5.5 * aO), aC.setTransform(1, 0, 0, 1, dI.gap, cY.iF), aC.fillStyle = fk.e8, aC.fillRect(0, 0, aN, aO), 0 === a3l ? (aC.fillStyle = fk.eD, aC.fillRect(0, 0, 4 * aO, aO)) : 1 === a3l && (aC.fillStyle = fk.eD, aC
				.fillRect(4 * aO, 0, Math.floor(1.5 * aO), aO)), aC.fillStyle = fk.eC, aC.fillRect(0, 0, aN, 1), aC.fillRect(0, 0, 1, aO), aC.fillRect(4 * aO, 0, 1, aO), aC.fillRect(0, aO - 1, aN, 1), aC.fillRect(aN - 1, 0, 1, aO), aC.font =
			mM, aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 1), aC.fillText(L(62), 2 * aO, .54 * aO), aN = .4 * aO, cd.mQ(dI.gap + 4 * aO + (1.5 * aO - aN) / 2, cY.iF + .3 * aO, aN), aN = 1, aC.setTransform(1, 0, 0, 1, dI.gap, cY.iF - aN *
				a3m * dI.gap - aN * aO), aC.fillStyle = fk.e8, aC.fillRect(0, 0, 4 * aO, aO), a3l === aN + 1 && (aC.fillStyle = fk.eD, aC.fillRect(0, 0, 4 * aO, aO)), aC.fillStyle = fk.eC, aC.fillRect(0, 0, 4 * aO, 1), aC.fillRect(0, 0, 1,
				aO), aC.fillRect(4 * aO, 0, 1, aO), aC.fillRect(0, aO - 1, 4 * aO, 1), aC.fillText(L(0 === aN ? 62 : 63), 2 * aO, .54 * aO), aC.setTransform(1, 0, 0, 1, 0, 0)) : aC.drawImage(canvas, dI.gap, cY.iF)
	}, this.a1y = function(player) {
		return 0 !== aZ.aa[player] && 2 !== aR.bf && !aW.aX.aY(player)
	}, this.mQ = function(iE, iF, du) {
		aC.setTransform(1, 0, 0, 1, iE, iF), aC.lineWidth = dI.b7, aC.strokeStyle = fk.eC, aC.beginPath(), aC.moveTo(0, 0), aC.lineTo(du, du), aC.moveTo(0, du), aC.lineTo(du, 0), aC.stroke()
	}
}

function a3v() {
	this.pv = function(dS) {
		if ((a3w = p.t9.a3w[dS]) < 2) return !1;
		var k = p.v.a3W[dS],
			a3x = 9 === k.ka ? 333 : 512,
			a3w = Math.min(a3w, a3x);
		8 === k.ka && (a3w -= a3w % 2);
		a3x = p.t9.vs[dS].splice(0, a3w), p.t9.a3w[dS] -= a3w, a3w = function(l) {
			if (p.a3Q) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var du = l.length, nK = p.a3Q.nK, dw = 0; dw < du; dw++)
					if (l[dw].nK === nK) return dw
			}
			return -1
		}(a3x);
		return -1 === a3w ? (p.t9.tB = p.t9.tB.concat(a3x), 1e3 < p.t9.tB.length && p.t9.tB.splice(0, p.t9.tB.length - 1e3), p.v.a3z += 29 === n.uL && p.v.a40[0] === dS && 1 === p.v.a40[2], !1) : (8 === k.ka && (k.b = (k.b + (a3w >> 1)) % 1024,
			dS = a3w - a3w % 2, a3w %= 2, a3x = a3x.slice(dS, 2 + dS)), k3.j(k, a3x, a3w), !0)
	}, this.aA = function(k, l, m) {
		var kR = aR.data = new bq,
			kU = (kR.spawningSeed = k.spawningSeed, k.ka < 7 ? (kR.gameMode = 1, kR.numberTeams = k.ka + 2) : 9 === k.ka ? (kR.gameMode = kR.isZombieMode = 1, kR.numberTeams = 2) : (kR.gameMode = 0, kR.battleRoyaleMode = 7 === k.ka ? 0 : 10 === k
				.ka ? 1 : 2), kR.selectedPlayer = m, kR.isContest = k.a41, kR.mapType = gu.kb(k.ib) ? 0 : 1, gu.kc(kR, k.ib), kR.mapSeed = k.mapSeed, kR.humanCount = l.length);
		kR.selectableSpawn = 1 === kR.gameMode || kU < 100, kR.colorsData = new Uint32Array(kU), kR.playerNamesData = new Array(kU);
		for (var dw = 0; dw < kU; dw++) kR.colorsData[dw] = l[dw].color, kR.playerNamesData[dw] = l[dw].username;
		if (2 === kR.battleRoyaleMode)
			for (kR.elo = new Uint16Array(kU), dw = 0; dw < kU; dw++) kR.elo[dw] = l[dw].elo;
		r.setState(8), gu.cN(k.ib, kR.mapSeed), aR.bv(), aR.bt = 2
	}
}

function a42() {
	var rm, a43, a44, a46;

	function a45(dw) {
		n.d7(8, n.uL, new a48(21, {
			a49: dw,
			hR: 0,
			hS: 10
		}))
	}
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), a43.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, a44 = [new jJ(L(64), function() {
		a45(5)
	}, 0, 0, 1), new jJ(L(65), function() {
		a45(6)
	}, 0, 0, 1), new jJ(L(66), function() {
		a45(7)
	}, 0, 0, 1), new jJ(L(67), function() {
		a45(12)
	}, 0, 0, 1)], a46 = [new jJ("⬅️ " + L(10), function() {
		n.jR()
	})], rm = new jI(L(68), a46), a43 = new a47(a44, rm.jM)
}

function pl() {
	this.a4A = 0, this.a3Q = null, this.t9 = null, this.sr = null, this.v = null, this.rb = null, this.t0 = null, this.message = null, this.a4B = null, this.mi = null, this.a9 = new a3v, this.ra = 0, this.a4C = 0, this.j = function() {
		this.a4C = s.t, this.a4A = kV.dd.t8(gG.ku.data[105].value), this.t9 = new a4D, this.sr = new a3F, this.v = new a4E, this.rb = new a4F, this.t0 = new a4G, this.message = new a4H, this.a4B = new vW, this.mi = new sb, this.v.j(), oD.j(),
			this.ra = 1, aI.aJ.setState(1), r.setState(0)
	}, this.q = function() {
		this.mi && this.mi.q(), this.a3Q = null, this.t9 = null, this.sr = null, this.v = null, this.rb = null, this.t0 = null, this.message = null, this.a4B = null, this.mi = null, this.ra = 0, oD.q(), aI.aJ.setState(0), n7.n8.a4I()
	}
}

function p3() {
	var a4J, dY;
	this.j = function() {
		for (var dw = (dY = new Uint16Array(101)).length - 1; 0 <= dw; dw--) dY[dw] = dU.dV(32768 * dw, 100);
		this.c4(0)
	}, this.value = function(fl) {
		return dY[fl]
	}, this.tm = function() {
		return dU.dV(a4J - 1, 2)
	}, this.c4 = function(tl) {
		a4J = 2 * tl % 32768 + 1
	}, this.random = function() {
		return a4J = 167 * a4J % 32768
	}, this.a04 = function(a4K) {
		return dU.dV(a4K * this.random(), 32768)
	}, this.zh = function(fl) {
		return 0 !== fl && this.random() < this.value(fl)
	}, this.v9 = function(fm, fn) {
		return fm + this.a04(fn - fm)
	}
}

function oL() {
	this.bA = new a4L, this.jS = new a4M, this.aX = new px, this.fv = new a4N, this.nU = new a4O, this.a4P = new a4Q, this.canvas = new a4R, this.color = new a4S, this.a4T = new a4U, this.j = function() {
		this.bA.ky()
	}
}

function a4V(lU, size, a4W, a4X, font) {
	var dw, xU = .2,
		canvas = document.createElement("canvas"),
		n2 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = lU, canvas.height = lU, n2.font = size + font, n2.textAlign = "center", n2.textBaseline = "middle", n2.fillStyle = "red", dw = 0; dw < a4W.length; dw++) n2.fillText(a4W[dw], .5 * lU, .5 * lU);
	return -1 < (canvas = function(a3A) {
		var dw, rT, kR = a3A.data;
		for (dw = kR.length - 4; 0 <= dw; dw -= 4)
			if (rT = kR[dw], a4X <= rT) return Math.floor(dw / (4 * lU));
		return -1
	}(n2.getImageData(0, 0, lU, lU))) && (xU = (canvas - .5 * lU + .1 * size) / size), Math.max(xU, 0)
}

function y5() {
	function a4n(player, hI, a4d) {
		3 <= a4d && 2142 < s.a6() && (hI === aR.bS || aZ.bN[hI] < dU.dV(aZ.bN[player], 20)) && cM.a07(player, 20)
	}

	function a4p(player, hm, hI, a4d) {
		3 <= a4d && a4d < 6 && dU.dV(aZ.bN[player], 8) > aZ.bN[hI] && (hm = Math.max(dU.dV(11 * aZ.bN[hI], 5), dU.dV(aZ.bN[player], 10)));
		a4d = aZ.ig[player].length;
		cK.y2.a50(player, hI), cK.y2.a51(player, hI, a4d, hm)
	}

	function a4m(player, hm) {
		var hI = aR.bS,
			du = aZ.ig[player].length;
		cK.y2.a52(player), aZ.ig[player].length !== du && cK.y2.a51(player, hI, du, hm)
	}
	this.a4a = new Uint8Array(aR.bS), this.j = function() {
		this.a4a.fill(0)
	}, this.a0A = function(player, hm) {
		var a4b, a4d, a4e, a4f;
		cm.a1c(player) && (a4b = bL.a4c(player), 3 <= (a4d = cM.hm[player]) && a4d < 6 && (hm = Math.max(aZ.bN[player] - a4b, hm)), a4e = aZ.gl[player].length, a4f = aZ.iZ[player].length, 30 * aZ.ac[player] > aR.bH && xD[player] < 10 && 100 *
			a4f <= a4e && cM.a07(player, 10), aR.ae ? function(player, hm, a4d, a4b) {
				var hI;
				if (cK.y4.a4a[player] = 1, cK.y2.a4i(player, !1) || cK.y2.a4j(player, !1)) {
					if (!cK.y2.a4k(player))
						if (cK.y2.a4l()) a4m(player, hm), a4n(player, aR.bS, a4d);
						else {
							if (c3.zh(cM.zu[a4d])) hI = cK.y2.a4o(player);
							else {
								if (cK.y2.a4q() && c3.zh(cM.zs[a4d]) && cK.y2.a4r(), 6 === a4d) return a4p(player, hm, cK.y2.a4s(), a4d);
								hI = cK.y2.a4t(player)
							}
							a4p(player, hm, hI, a4d), a4n(player, hI, a4d)
						}
				} else cJ.w9.b2(player) || cK.y6.b2(player) || (cK.y4.a4a[player] = 0, function(player, hm, a4d, a4b) {
					var dw, fn, dx, al = aj.al,
						a4v = al[player];
					if (0 !== a4v) {
						var a4w = aZ.bN[player],
							ac = aZ.ac;
						if (player < aR.bY && (hm = a4w), !(a4w < ac[player] || 5 === a4d && a4w < a4b || 4 === a4d && a4w < dU.dV(a4b, 2))) {
							var du = bF.bG,
								q3 = bF.q3,
								a4a = (dw = c3.a04(du), cK.y4.a4a);
							for (fn = 0; fn < du; fn++)
								if (dx = q3[(fn + dw) % du], 1 === a4a[dx] && al[dx] === a4v) return c7.a4x.a4y(player, dx, hm)
						}
					}
				}(player, hm, a4d, a4b))
			}(player, hm, a4d, a4b) : (!a4f || a4e && (a4e < a4f && !c3.a04(10) || 100 * a4f <= a4e && c3.a04(3) || !c3.a04(8))) && cJ.w9.b2(player) || function(player, hm, a4d) {
				cK.y2.a4i(player, !0) || cK.y2.a4j(player, !0) ? cK.y2.a4k(player) || (cK.y2.a4l() ? a4m(player, hm) : c3.zh(cM.zu[a4d]) ? a4p(player, hm, cK.y2.a4o(player), a4d) : 5 === a4d ? a4p(player, hm, cK.y2.a4z(), a4d) : (cK.y2
				.a4q() && c3.zh(cM.zs[a4d]) && cK.y2.a4r(), a4p(player, hm, 6 === a4d ? cK.y2.a4s() : cK.y2.a4t(player), a4d))) : cK.y6.b2(player)
			}(player, hm, a4d))
	}
}

function oQ() {
	var a53, a54, a55;

	function a58(a4K) {
		for (var dw = a53 - 1; 0 <= dw; dw--) 0 === a55[a54[dw]] && aZ.ac[a54[dw]] >= a4K && a57(a54[dw])
	}

	function a56(player) {
		var b5;
		64 === a55[player] ? a55[player] = 6 : (b5 = aZ.ac[player], a55[player] = b5 < 1e3 ? 3 : b5 < 1e4 ? 2 : b5 < 6e4 ? 1 : 0)
	}
	this.j = function() {
		a53 = 0, a54 = new Uint16Array(aR.bS), a55 = new Uint8Array(aR.bS)
	}, this.b2 = function() {
		for (var dw = a53 - 1; 0 <= dw; dw--) 64 === a55[a54[dw]] ? a56(a54[dw]) : 0 == a55[a54[dw]]-- && (a56(a54[dw]), a57(a54[dw]));
		16e4 <= aZ.ac[am[0]] && (a58(16e4), 3e5 <= aZ.ac[am[0]]) && a58(3e5), aW.aX.q5(aR.ad) && (cA.zk[7] = Math.max(aZ.ac[aR.ad], cA.zk[7]))
	}, this.zP = function(player) {
		for (var fm, dw = a53 - 1; 0 <= dw; dw--)
			if (player === a54[dw]) {
				for (a53--, fm = dw; fm < a53; fm++) a54[fm] = a54[fm + 1];
				return
			}
	}, this.a22 = function(player, a5A) {
		for (var dw = a53 - 1; 0 <= dw; dw--)
			if (player === a54[dw]) return;
		a54[a53++] = player, a55[player] = a5A ? 2 : 64
	}
}

function a4L() {
	var a5B = null;
	this.n4 = 0, this.ky = function() {
		var gp = gG.ku.data[5].value;
		a5B = "px " + gp, "Trebuchet MS" !== gp && (a5B += ", Trebuchet MS"), this.n4 = a4V(32, 32, ["a", "b", "m"], 200, a5B)
	}, this.yI = function(aN, aO) {
		var dx = document.createElement("canvas");
		return dx.width = aN, dx.height = aO, dx
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(nU, aN, aO) {
		return nU.getImageData(0, 0, aN, aO)
	}, this.mN = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a5B : 1 === type ? "bold " + size + a5B : 2 === type ? "lighter " + size + a5B : 3 === type ? "italic " + size + a5B : 4 === type ? "oblique " + size + a5B : 5 === type ? "small-caps " +
			size + a5B : "small-caps bold " + size + a5B
	}, this.textAlign = function(n2, id) {
		n2.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(n2, id) {
		n2.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.a5C = function(jj, code, color) {
		color = this.dH(dI.b8) + " solid " + (color || fk.eC);
		5 === (code = code || 5) ? jj.style.border = color : 4 === code ? jj.style.borderLeft = color : 2 === code ? jj.style.borderBottom = color : 6 === code ? jj.style.borderRight = color : jj.style.borderTop = color
	}, this.a5D = function(jj, iE, iF, aN, aO) {
		jj = jj.style;
		jj.left = this.a5E(iE), jj.top = this.a5E(iF), jj.width = this.a5E(aN), jj.height = this.a5E(aO)
	}, this.bB = function(gp) {
		return 1 + gp * aI.aJ.aK()
	}, this.dJ = function(aH, sT) {
		return aH * this.bB(void 0 === sT ? .5 : sT) * aL.aM / aL.bC
	}, this.i9 = function(aH, sT) {
		return aH * this.bB(void 0 === sT ? .5 : sT) * aL.aM
	}, this.a5F = function(aH, sT, a5G) {
		return this.bB(sT) * Math.min(aH * aL.aM, a5G * aL.aN) / aL.bC
	}, this.dH = function(gp) {
		return gp.toFixed(1) + "px"
	}, this.a5E = function(gp) {
		return this.a5I(gp).toFixed(1) + "px"
	}, this.a5I = function(gp) {
		return gp / aL.bC
	}, this.a5J = function(a5K, a5L) {
		for (var fr = "<ul>", du = a5K.length, dw = 0; dw < du; dw++) fr += "<li>" + a5K[dw] + ": <a href='" + a5L[dw] + "' target='_blank'>" + a5L[dw] + "</a></li>";
		return fr += "</ul>"
	}, this.a5M = function(mF) {
		return "<a href='" + mF + "' target='_blank'>" + mF + "</a>"
	}, this.a5N = function(jj) {
		navigator.clipboard && navigator.clipboard.writeText(jj.value)
	}, this.a5O = function(jj) {
		var b5 = jj.textContent;
		aW.fv.vt(b5, "✔") || (1 === b5.length ? jj.textContent = "✔" : jj.textContent = b5 + " ✔", setTimeout(function() {
			jj.textContent = b5
		}, 500))
	}, this.measureText = function(fr) {
		return aC.measureText(fr).width
	}, this.a5P = function(a5Q) {
		a5Q.style.overflowX = "auto", a5Q.style.overflowY = "hidden", a5Q.style.whiteSpace = "nowrap", a5Q.addEventListener("wheel", function(jj) {
			Math.abs(jj.deltaY) < Math.abs(jj.deltaX) || (this.scrollLeft += jj.deltaY, this.a5R = this.scrollLeft, jj.preventDefault())
		}), a5Q.addEventListener("scroll", function() {
			this.a5R = this.scrollLeft
		})
	}
}

function a48(id, nI, a5S) {
	var rm, uH;

	function a5W() {
		uH.dG.innerHTML += "<br>" + L(71)
	}

	function a5V() {
		dW.cN(48), dW.dh(24, Math.floor(dU.pow(24) * Math.random())), dW.dh(24, Math.floor(dU.pow(24) * Math.random())), da.j(dW.ju), gG.gH.gI(110, dc.dd.de(dc.dd.df(8))), u.sB.a5l()
	}
	this.a5T = !0, this.a2L = id, this.show = function() {
		rm.show(), this.resize(), 15 === id ? (u.v.a5U(id) ? a5V : a5W)() : 16 === id ? u.v.a5U(id) ? u.n9.a5X(2) : a5W() : 17 === id ? u.v.a5U(id) ? u.n9.a5X(3) : a5W() : 18 === id ? (u.v.close(0, 3253), u.v.y(0, id), a5W()) : 21 === id ? u.v
			.a5U(id) ? u.sF.a5Y(nI.a49, nI.hR, nI.hS) : a5W() : 22 === id ? u.v.a5U(id) ? u.sF.a5Z(nI.a49, nI.a5a, nI.a5b) : a5W() : 23 === id ? u.v.a5U(id) ? u.sF.a5c(nI.a5d, nI.fy) : a5W() : 24 === id ? u.v.a5U(id) ? u.sF.a5e(nI.a5d, nI.hR, nI
				.hS) : a5W() : 25 === id ? u.v.a5U(id) ? u.sB.a5f(nI) : a5W() : 28 === id ? u.v.a5U(id) ? u.sF.a5g(nI.a49, nI.a5a, nI.a5b) : a5W() : 29 === id && (u.v.a5U(id) ? u.sB.a5h(nI) : a5W())
	}, this.a5i = function() {
		15 === id ? a5V() : 16 === id ? u.n9.a5X(2) : 17 === id ? u.n9.a5X(3) : 18 === id ? n.d7(8, this.a2h, new a48(16)) : 21 === id ? u.sF.a5Y(nI.a49, nI.hR, nI.hS) : 22 === id ? u.sF.a5Z(nI.a49, nI.a5a, nI.a5b) : 23 === id ? u.sF.a5c(nI.a5d,
			nI.fy) : 24 === id ? u.sF.a5e(nI.a5d, nI.hR, nI.hS) : 25 === id ? u.sB.a5f(nI) : 28 === id ? u.sF.a5g(nI.a49, nI.a5a, nI.a5b) : 29 === id ? u.sB.a5h(nI) : 1e3 === id && (this.a2L = id = 25, u.sB.a5f(nI))
	}, this.a2O = function(code, oG, data) {
		!oG && code !== id || (15 === code || 16 === code ? n.d7(7, this.a2h) : 17 === code ? (u.v.close(0, 3252), gG.v.xt(0), gG.ku.data[117].gF && 0 < gG.ku.data[117].gF.length ? (oG = gG.v.xu(0), gG.gH.gI(105, oG.nK), gG.gH.gI(106, oG
			.password), n.d7(8, this.a2h, new a48(16))) : (gG.gH.gI(105, ""), n.v.rt())) : 21 === code ? n.d7(10, this.a2h, new a5j(data)) : 23 === code ? n.d7(13, this.a2h, new a5k({
			data: data,
			a5d: nI.a5d
		})) : 25 === code && (n.v.a2N.nK = nI.nK, n.d7(15, this.a2h)))
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), uH.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(L(69), [new jJ("⬅️ " + L(10), function() {
		a5S ? n.d7(29) : n.v.rt()
	})]), uH = new dC(rm.jM, L(70))
}

function oj() {
	var mH, a5m, aN, aO, yV, a5n, a5o, a5p, canvas, a5q, a5r;

	function nQ() {
		return Math.floor((aL.aN - aN) / 2) < cY.aO + 2 * dI.gap ? aL.aO - aO - 4 * dI.gap - cY.aO : aL.aO - aO - 2 * dI.gap
	}
	this.j = function() {
		a5r = mH = !1, yV = .61, a5n = .07, a5o = .09, a5q = a5p = aO = 0
	}, this.resize = function() {
		var nU, iG, dx, a5w, a5x, xK;
		mH && (aN = yX(aN = aI.aJ.aK() ? Math.floor(.69 * aL.aM) : Math.floor(.5 * aL.aM), yY(aL.aN - 2 * dI.gap, 10)), aN = yX(aN, Math.floor(3.57 * yY(aL.aO - 2 * dI.gap, 3))), aO = Math.floor(.28 * aN), (canvas = document.createElement(
			"canvas")).width = aN, canvas.height = aO, nU = canvas.getContext("2d", {
			alpha: !0
		}), iG = Math.floor(1 + aO / 40), nU.clearRect(0, 0, aN, aO), nU.fillStyle = fk.e9, nU.fillRect(iG, iG, aN - 2 * iG, aO - 2 * iG), nU.lineJoin = "bevel", nU.lineWidth = 2 * iG, nU.strokeStyle = fk.eC, nU.strokeRect(iG, iG, aN -
			2 * iG, aO - 2 * iG), nU.imageSmoothingEnabled = !1, dx = aF.get(a5m), a5w = dx.width, xK = (1 === a5m ? .85 : 21 === a5m ? .666 : .9) * yV * aO / (a5x = dx.height), nU.setTransform(xK, 0, 0, xK, Math.floor((aN - xK * a5w) /
			2), Math.floor((aO - xK * a5x) / 2)), nU.drawImage(dx, 0, 0), nU.setTransform(1, 0, 0, 1, Math.floor(aN - a5o * aO - a5n * aO - iG), Math.floor(iG + a5n * aO)), function(nU, du) {
			nU.lineWidth = Math.floor(1 + aO / 80), nU.strokeStyle = fk.eC, nU.beginPath(), nU.moveTo(0, 0), nU.lineTo(du, du), nU.moveTo(0, du), nU.lineTo(du, 0), nU.stroke()
		}(nU, Math.floor(a5o * aO)), nU.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gp, a5t, bE, a5u) {
		mH || a5u && a5r || (a5m = bE ? 21 : gp ? 1 : 2, mH = a5r = !0, this.resize(), ch.jn(), cY.a5v(), a5q = s.t, a5p = a5t ? 1 : 0)
	}, this.b2 = function() {
		!mH || 1 <= a5p || (a5p = 1 < (a5p += 5e-4 * (s.t - a5q)) ? 1 : a5p, a5q = s.t, s.ap = !0)
	}, this.mJ = function(iE, iF) {
		return !(!mH || a5p <= 0 || (iE -= Math.floor((aL.aN - aN) / 2), iF -= nQ(), iE < 0) || iF < 0 || aN < iE || aO < iF || (aN - aO / 3 < iE && iF < aO / 3 && (mH = !1, s.ap = !0), 0))
	}, this.mP = function() {
		!mH || a5p <= 0 || (aC.globalAlpha = a5p, aC.drawImage(canvas, Math.floor((aL.aN - aN) / 2), nQ()), aC.globalAlpha = 1)
	}
}

function bs() {
	this.bz = function() {
		var a5z = aR.data;
		aW.jS.a60(a5z.teamPlayerCount, a5z.playerCount), a5z.numberTeams = aW.jS.a61(a5z.teamPlayerCount, 0), a5z.teamPlayerCount[0] && a5z.teamPlayerCount[7] && (a5z.teamPlayerCount[7] = 0, this.bz())
	}, this.a62 = function() {
		var a5z = aR.data;
		a5z.mapType < 2 ? gu.cN(gu.ui(a5z), a5z.mapSeed) : gu.a63(a5z.canvas)
	}, this.a64 = function() {
		var a5z = aR.data;
		a5z.colorsData || (a5z.colorsData = new Uint32Array(1)), a5z.selectableColor && (a5z.colorsData[0] = gG.v.nD()), a5z.selectableName && (a5z.playerNamesData || (a5z.playerNamesData = new Array(1)), a5z.playerNamesData[0] = gG.ku.data[122]
			.value)
	}, this.a65 = function() {
		aR.data = new bq, aR.data.aIncomeType = 2, aR.data.aIncomeData = new Uint8Array(aR.bS), aR.data.aIncomeData[0] = 64
	}
}

function a66(a67, a68, a69) {
	this.dF = document.createElement("div"), this.a0a = a67;
	var a6A = 0;
	this.resize = function(dD, a6C) {
		var du = a67.length;
		if (!a69)
			for (var dw = 1; dw < du; dw++) aW.bA.a5C(a67[dw].button, 4);
		for (var a6D = 0, dw = 0; dw < du; dw++) a6D += a67[dw].button.offsetWidth;
		if (dD && (a6A = dD.offsetWidth), a6C && a6D < a6A)
			for (dw = 0; dw < du; dw++) a67[dw].button.style.width = (100 * a67[dw].button.offsetWidth / a6D).toFixed(2) + "%";
		else
			for (dw = 0; dw < du; dw++) a67[dw].button.style.width = "auto";
		a6C || this.resize(dD, 1)
	};
	var a1U = this;
	a1U.dF.style.height = a1U.dF.style.maxHeight = "100%";
	for (var dw = 0; dw < a67.length; dw++) a67[dw].a6B(a68), a67[dw].button.style.height = "100%", a67[dw].button.style.padding = "0.0em 0.9em", a1U.dF.appendChild(a67[dw].button)
}

function og() {
	var mM, aN, iF, a6E, a6F, canvas, nU, a6G, qD, a6H, a6I, a6J, a6K;
	this.iE = 0, this.aO = 0, this.j = function() {
		a6F = aR.bW, a6I = "rgba(0,100,0,0.8)", a6J = "rgba(150,0,0,0.8)", a6G = a6H = !0, qD = aZ.bN[aR.ad], this.resize()
	}, this.resize = function() {
		aN = Math.floor((aI.aJ.aK() ? .305 : .24) * aL.aM), this.aO = Math.floor(.5 + .13 * aN), aN = Math.floor(6 * this.aO), mM = aW.bA.mN(1, Math.floor(.8 * this.aO)), a6K = Math.floor(.5 * this.aO), gu.tr.font = mM, iF = dI.gap, a6E = Math
			.floor(1 + .13 * this.aO), (canvas = document.createElement("canvas")).width = aN, canvas.height = this.aO, (nU = canvas.getContext("2d", {
				alpha: !0
			})).font = mM, aW.bA.textBaseline(nU, 1), aW.bA.textAlign(nU, 1), this.a6L()
	}, this.a6M = function() {
		return aI.aJ.aK() && aL.aN < 1.2 * aL.aO
	}, this.a6N = function() {
		this.a6M() ? this.iE = aL.aN - aN - dI.gap : this.iE = Math.floor(cW.a6O() + (aL.aN - cW.a6O() - cc.aN - aN) / 2 - .5 * dI.gap)
	}, this.cv = function() {
		a6G && (a6G = !1, this.a6L())
	}, this.a6L = function() {
		nU.clearRect(0, 0, aN, this.aO), nU.fillStyle = a6H ? a6I : a6J, nU.fillRect(0, 0, aN, this.aO), nU.fillStyle = fk.eE, this.a6P(), this.a6Q(), nU.fillStyle = aZ.bN[aR.ad] >= bL.a4c(aR.ad) ? fk.ej : fk.eC, nU.fillText(aW.fv.t6(qD), Math
			.floor(aN / 2), a6K), nU.fillStyle = fk.eC, nU.fillRect(0, 0, aN, 1), nU.fillRect(0, 0, 1, this.aO), nU.fillRect(0, this.aO - 1, aN, 1), nU.fillRect(aN - 1, 0, 1, this.aO)
	}, this.a6P = function() {
		var dx = s.a6() % 100,
			dx = (dx = 9 - dU.dV(dx -= dx % 10, 10), Math.floor(dx * (this.aO - a6E) / 9));
		nU.fillRect(0, dx, a6E, this.aO - dx), nU.fillRect(aN - a6E, dx, a6E, this.aO - dx)
	}, this.a6Q = function() {
		nU.fillRect(a6E, this.aO - a6E, Math.floor((aN - 2 * a6E) * aZ.bN[aR.ad] / a6F), a6E)
	}, this.b2 = function() {
		var fl = aR.ad;
		aW.aX.fT(fl) && (fl = aZ.bN[fl] - aZ.qC[fl], qD !== fl ? (a6F = yY(fl, a6F), a6H = qD < fl && 10 <= fl, qD = fl, a6G = !0) : s.a6() % 10 == 9 && (a6G = !0))
	}, this.mP = function() {
		0 === aZ.aa[aR.ad] || aR.bh || 2 === aZ.gZ[aR.ad] || aC.drawImage(canvas, this.iE, iF)
	}
}

function s8() {
	this.a6R = function(jt, a6S) {
		dW.cN(8), dW.dh(1, 0), dW.dh(6, 4), dW.dh(1, a6S ? 1 : 0), u.v.send(jt, dW.ju)
	}, this.a0 = function() {
		dW.cN(58), dW.dh(1, 0), dW.dh(6, 5), dW.dh(8, u.v.x), dW.dh(10, k3.b), dW.dh(9, k3.c), dW.dh(10, c1.lO), dW.dh(14, c1.lK), u.v.send(u.v.w, dW.ju)
	}, this.a6T = function(go) {
		dW.cN(27), dW.dh(1, 1), dW.dh(4, 0), dW.dh(22, go), u.v.send(u.v.w, dW.ju)
	}, this.a6U = function(qF, hI) {
		dW.cN(25), dW.dh(1, 1), dW.dh(4, 1), dW.dh(10, qF), dW.dh(10, hI), u.v.send(u.v.w, dW.ju)
	}, this.a6V = function(qF, qN) {
		dW.cN(24), dW.dh(1, 1), dW.dh(4, 2), dW.dh(10, qF), dW.dh(9, qN), u.v.send(u.v.w, dW.ju)
	}, this.a6W = function(qF, a1g) {
		dW.cN(42), dW.dh(1, 1), dW.dh(4, 3), dW.dh(10, qF), dW.dh(27, a1g), u.v.send(u.v.w, dW.ju)
	}, this.a6X = function(qF, hi) {
		dW.cN(31), dW.dh(1, 1), dW.dh(4, 4), dW.dh(10, qF), dW.dh(16, hi), u.v.send(u.v.w, dW.ju)
	}, this.a6Y = function(hI) {
		dW.cN(15), dW.dh(1, 1), dW.dh(4, 5), dW.dh(10, hI), u.v.send(u.v.w, dW.ju)
	}, this.a6Z = function(dS) {
		dW.cN(15), dW.dh(1, 1), dW.dh(4, 6), dW.dh(10, dS), u.v.send(u.v.w, dW.ju)
	}, this.a6a = function(a1v) {
		dW.cN(6), dW.dh(1, 1), dW.dh(4, 7), dW.dh(1, a1v), u.v.send(u.v.w, dW.ju)
	}, this.a6b = function() {
		dW.cN(5), dW.dh(1, 1), dW.dh(4, 8), u.v.send(u.v.w, dW.ju)
	}, this.a6c = function(qF, go, hI) {
		dW.cN(47), dW.dh(1, 1), dW.dh(4, 10), dW.dh(10, qF), dW.dh(10, hI), dW.dh(22, go), u.v.send(u.v.w, dW.ju)
	}, this.a6d = function(a6e, a6f) {
		dW.cN(24), dW.dh(1, 1), dW.dh(4, 15), dW.dh(9, a6f), dW.dh(10, a6e), u.v.send(u.v.w, dW.ju)
	}, this.a6g = function(sH) {
		dW.cN(14), dW.dh(1, 1), dW.dh(4, 14), dW.dh(9, sH), u.v.send(u.v.w, dW.ju)
	}, this.a6h = function(a6i, target) {
		var dw, du = a6i.length;
		for (dW.cN(14 + 9 * du), dW.dh(1, 1), dW.dh(4, 13), dW.dh(9, target), dw = 0; dw < du; dw++) dW.dh(9, a6i[dw]);
		u.v.send(u.v.w, dW.ju)
	}
}

function oz() {
	var a6j;

	function a71(uk, xU, iE, iF, globalAlpha) {
		gu.tr.save(), gu.tr.globalAlpha = globalAlpha, gu.tr.imageSmoothingEnabled = !1, gu.tr.scale(xU, xU), gu.tr.drawImage(uk, Math.floor(iE * (gu.gv / xU - uk.width)), Math.floor(iF * (gu.h1 / xU - uk.height))), gu.tr.restore()
	}
	this.a6k = 0, this.a6l = 0, this.a6m = 0, this.a6n = 0, this.j = function() {
		(a6j = new Array(gu.a6o))[0] = {
			aN: [0, 5e3, 8e3, 1e4],
			rT: [220, 250, 255, 220],
			fh: [190, 220, 0, 0],
			fn: [170, 200, 0, 0]
		}, a6j[1] = {
			aN: [0, 4e3, 5e3, 6e3, 1e4],
			rT: [25, 0, 100, 0, 25],
			fh: [25, 0, 0, 0, 25],
			fn: [25, 0, 0, 0, 25]
		}, a6j[2] = {
			aN: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			rT: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			fh: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fn: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a6j[3] = {
			aN: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			rT: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			fh: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fn: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, a6j[4] = {
			aN: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			rT: [10, 10, 20, 10, 10, 170, 212],
			fh: [20, 20, 60, 100, 100, 110, 170],
			fn: [70, 70, 160, 30, 30, 60, 120]
		}, a6j[5] = {
			aN: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			rT: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			fh: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fn: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a6j[6] = {
			aN: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			rT: [10, 10, 60, 255, 255, 200, 200],
			fh: [10, 10, 60, 255, 255, 200, 200],
			fn: [80, 80, 255, 255, 255, 200, 200]
		}, a6j[7] = {
			aN: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			rT: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			fh: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fn: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a6j[8] = {
			aN: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			rT: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			fh: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fn: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a6j[9] = {
			aN: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			rT: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			fh: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fn: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a6j[20] = {
			aN: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			rT: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			fh: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fn: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, a6j[21] = {
			aN: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			rT: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			fh: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fn: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a6p = function() {
		var a70, dw, fm, dn, a3A = function() {
				var a3A;
				return gu.nO = document.createElement("canvas"), gu.nO.width = gu.gv, gu.nO.height = gu.h1, gu.tr = gu.nO.getContext("2d", {
					alpha: !1
				}), a3A = gu.tr.getImageData(0, 0, gu.gv, gu.h1), gu.tu = a3A.data, a3A
			}(),
			aN = a6j[gu.ib].aN,
			rT = a6j[gu.ib].rT,
			fh = a6j[gu.ib].fh,
			fn = a6j[gu.ib].fn,
			gp = ln.lo(),
			du = aN.length - 2,
			a6v = new Array(1 + du),
			a6w = new Array(1 + du),
			a6x = new Array(1 + du),
			a6y = new Array(1 + du);
		for (fm = du; 0 <= fm; fm--) a6v[fm] = aN[fm + 1] - aN[fm], a6w[fm] = rT[fm + 1] - rT[fm], a6x[fm] = fh[fm + 1] - fh[fm], a6y[fm] = fn[fm + 1] - fn[fm];
		for (dw = gu.gv * gu.h1 - 1; 0 <= dw; dw--)
			for (fm = du; 0 <= fm; fm--)
				if (gp[dw] >= aN[fm]) {
					dn = gp[dw] - aN[fm], gu.tu[4 * dw] = rT[fm] + lp(a6w[fm] * dn, a6v[fm]), gu.tu[4 * dw + 1] = fh[fm] + lp(a6x[fm] * dn, a6v[fm]), gu.tu[4 * dw + 2] = fn[fm] + lp(a6y[fm] * dn, a6v[fm]), gu.tu[4 * dw + 3] = 255;
					break
				} gu.tr.putImageData(a3A, 0, 0), gu.a6s(gu.ib) && aF.yN() && gu.a6s(gu.ib) && (a3A = aF.aG("arena"), a70 = aF.aG("territorial.io"), a71(a3A, 5, .5, .5, .1), a71(a70, 2, .5, .45, .1)), gu.a6u = !0, s.ap = !0
	}, this.cF = function() {
		for (var fl, iE, iF, a72, a73, dq, a6l = 0, aN = gu.gv, aO = gu.h1, dn = aN * aO * 4, a74 = z7, a75 = gu.tu, dw = aN - 1; 0 <= dw; dw--) a74[(fl = dw << 2) + 2] = a74[dn - fl - 2] = 3;
		for (dn = 4 * aN, dw = aO - 1; 0 <= dw; dw--) a74[(fl = dw * dn) + 2] = a74[fl + dn - 2] = 3;
		for (a72 = aN - 1, a73 = aO - 1, iF = 1; iF < a73; iF++)
			for (dn = iF * aN, iE = 1; iE < a72; iE++) dq = 1 - (a75[(fl = dn + iE << 2) + 2] > a75[fl + 1] && a75[fl + 2] > a75[fl]), a74[fl + 2] = 6 - 5 * dq, a6l += dq;
		this.a6k = (aN - 2) * (aO - 2), this.a6n = 0, gu.ia(gu.ib) && (gu.a6n.a76(), gu.a6n.a77(4, 5)), this.a6l = aR.bH = a6l - this.a6n, this.a6m = this.a6k - this.a6l - this.a6n, this.a6m && (gu.a6n.a77(6, 2), gu.a6n.a78())
	}
}

function bo() {
	this.j = function() {
		8 === aR.aV && cf.a79()
	}, this.ni = function(a7A) {
		var elo = aR.data.elo,
			yL = (elo[a7A] - elo[1 - a7A]) / 10,
			yL = 8 / (1 + Math.pow(2, yL / 32)),
			yL = Math.floor(10 * yL + .5),
			a7C = elo[a7A] + yL,
			a7C = this.a7E(a7C),
			elo = this.a7E(elo[1 - a7A] - yL);
		0 === a7A ? cf.a7G(a7C, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : cf.a7G(elo, a7C, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aZ.fi[a7A] < 100 || cf.fj(220, L(72), 40, 0, fk.eC, fk.e9, -1, !1)
	}, this.a7E = function(elo) {
		return 16e3 === (elo = dU.ls(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function az() {
	var dS = 0,
		t = s.t;
	this.b3 = 0, this.b2 = function() {
		aL.b2(), aR.bh ? a0S() : 0 === dS ? s.t >= t && (t += s.aq * Math.floor(1 + (s.t - t) / s.aq), 2 === aR.bf || cd.d9 ? a0K() : (a0Q(), cG.a0M()), dS++) : ((cd.d9 ? a0S : (s.ap = !0, a0T))(), dS = 0), a0I(), s.ap && (s.ap = !1, nM())
	}
}

function a7H() {
	var rm, vM, jX;
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), vM.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(L(73), [new jJ("⬅️ " + L(10), function() {
		n.jR()
	})]), vM = new jL(rm.jM, ((jX = []).push(function() {
		function a7N() {
			a7O.button.textContent = L(77), a7K.jj.readOnly = !1, a7M.jj.readOnly = !1, a7P.a6B(1), a7P.button.style.color = fk.eC
		}
		var jb = new jc,
			a7J = (jb.jd(L(74)), new ji({
				value: gG.ku.data[105].value,
				dS: -1
			})),
			a7K = (a7J.jj.readOnly = !0, jb.jf(a7J), jb.jd(L(75), "0.8em"), new ji(gG.ku.data[148])),
			a7K = new ji(gG.ku.data[148], 0, void 0, function(jj) {
				a7L(gG.ku.data[149].value, jj.target.value)
			}),
			a7M = (jb.jf(a7K), jb.jd(L(76), "0.8em"), new ji(gG.ku.data[149], 1, void 0, function(jj) {
				a7L(jj.target.value, gG.ku.data[148].value)
			})),
			a7O = (jb.jf(a7M), new jJ(L(77), function(jj) {
				return jj.textContent === L(77) ? (jj.textContent = L(78), a7K.jj.readOnly = !0, a7M.jj.readOnly = !0, a7P.a6B(0), a7P.button.style.color = fk.f9, gG.gH.gI(149, a7M.jj.value), a7L(gG.ku.data[149].value, gG.ku
					.data[148].value)) : a7N(), !0
			})),
			a7P = (jb.jf(new ua([a7O.button])), new jJ(L(79), function(jj) {
				return a7K.jj.readOnly && u.v.a2o(0) && (aW.bA.a5O(jj), a7N(), u.sB.a7Q({
					a7R: 0,
					nK: gG.ku.data[148].value,
					value: parseInt(gG.ku.data[149].value, 10)
				})), !0
			}, 1)),
			a7S = jb.vS(),
			a7L = (jb.vS(L(80)).style.fontWeight = "bold", function(gp, fr) {
				gp = aW.aX.qi(gp, 2, 1e6);
				var a7T = Math.max(1, 1 + Math.floor(.01 * (gp - 100)));
				a7S.textContent = L(81, [gp, gG.ku.data[105].value, a7T, fr, gp - a7T])
			});
		return jb.jf(new ua([a7P.button])), a7L(gG.ku.data[149].value, gG.ku.data[148].value), jb
	}()), jX))
}

function oM() {
	this.data = new a7U;
	var a7V = (new fP).L84,
		a7X = (this.a7W = a7V, !1);
	this.j = function() {
		var du, dY;
		a7X = !1, "en" !== gG.ku.data[12].value.split("-")[0].toLowerCase() ? gG.ku.data[12].value === gG.ku.data[145].value && 0 < gG.ku.data[146].value && (du = gG.ku.data[146].value, (dY = gG.jq.a7e(du, !1)).length === du) && !!aW.jS.a7f(
			dY) && function(dY) {
				for (var du = dY.length, aO = 0; aO < du; aO++) dY[aO] = dY[aO].replace("&#39;", "'");
				var a7h = gG.jq.a7e(du, !0);
				if (du !== a7h.length) return !1;
				if (!aW.jS.a7f(a7h)) return !1;
				for (var g4 = a7V.length, a7i = new Array(g4), a7j = g4 === du, mv = Math.min(du, g4), dw = 0; dw < g4; dw++)
					if (a7i[dw] = a7V[dw], dw < du && a7h[dw] === a7i[dw]) a7i[dw] = dY[dw];
					else {
						a7j = !1;
						for (var fn = 0; fn < mv; fn++)
							if (a7h[fn] === a7i[dw]) {
								a7i[dw] = dY[fn];
								break
							}
					} return kw.a7W = a7i, a7j
			}(dY) || (a7X = !0) : kw.a7W = a7V
	}, this.pr = function() {
		aj.cD(), cM.cD(), cT.cD(), cA.cD(), nq.j(), oC = new a7c
	}, this.a7d = function() {
		return this.a7W === a7V || !a7V.length
	}, this.a7k = function() {
		var a7l;
		a7X && (a7X = !1, 0 !== a7V.length) && (a7l = gG.ku.data[12].value, u.n9.a7m(0, a7l.slice(0, 20)))
	}, this.a7n = function(dY) {
		dY.length === a7V.length && (this.a7W = dY, gG.gH.gI(145, gG.ku.data[12].value), gG.gH.gI(146, dY.length), gG.jq.a7o(dY, !1), gG.jq.a7o(a7V, !0), 0 === r.a8()) && 5 === n.uL && n.v.rt()
	}, this.nF = function() {
		var a7p, dY = navigator.languages;
		return dY && dY.length ? (a7p = Math.max(kw.data.vv(dY[0]), 0), 1 === dY.length ? [a7p, a7p] : [a7p, Math.max(kw.data.vv(dY[1]), 0)]) : [0, 0]
	}
}

function a7q(data) {
	var rm, vM;
	this.show = function() {
		data.a2M && nz.a8K("account", data.nK), rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), vM.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(data.username, [new jJ("⬅️ " + L(10), function() {
		nz.clear(), n.jR()
	}), new jJ(data.a2M ? "🔄 " + L(82) : L(83), function() {
		n.d7(8, n.uM().a2h, new a48(25, {
			a7R: 0,
			nK: data.nK,
			l4: data.l4
		}))
	}, 0, 0, 1)]), vM = new jL(rm.jM, function() {
		var jX = [];
		jX.push(function() {
				var jb = new jc,
					ue = (jb.jd(L(129)), new ji({
						value: data.username,
						dS: -1
					}));
				ue.jj.readOnly = !0, jb.jf(ue), jb.jf(new ua([new jJ(L(98), function(jj) {
					return aW.bA.a5N(ue.jj), aW.bA.a5O(jj), !0
				}).button])), data.a2M || jb.vS(L(130));
				return jb
			}()),
			function(jX) {
				var jb, a7S, a7j, a8E, uf;
				data.a2M || ((jb = new jc).jd(L(131)), (a7S = jb.vS(data.a2B.length + " / 160")).style.textAlign = "center", a7j = !0, (a8E = new jk(0, 1, function(jj) {
					jj = jj.target.value.length;
					a7S.textContent = jj + " / 160", 160 < jj ? a7j && (a7j = !1, uf.a6B(1), uf.button.style.color = fk.eC) : a7j || (a7j = !0, uf.a6B(0), uf.button.style.color = fk.f9)
				})).jj.rows = 6, a8E.jj.style.fontSize = "1em", a8E.jl(data.a2B), jb.jf(a8E), uf = new jJ(L(132), function() {
					if (!a7j) return !0;
					n.d7(8, n.uM().a2h, new a48(29, {
						a7R: 1,
						fr: a8E.jU().substring(0, 160)
					}))
				}, 0, 0, 1), jb.jf(new ua([uf.button])), 0 !== data.a29 && (jb.jf(new ua([new jJ(L(1 === data.a29 ? 134 : 135), function() {
					n.d7(8, n.uM().a2h, new a48(29, {
						a7R: 0,
						fr: ""
					}))
				}, 0, 0, 1).button])), jb.vS(1 === data.a29 ? L(136, [data.a2C - 1]) : L(137, [data.a2C - 1]))), jb.vS(L(133, [data.a2A])), jX.push(jb))
			}(jX),
			function(jX) {
				var jb;
				data.a2M && 0 !== data.a29 && ((jb = new jc).jd(L(138)), jb.a8F(data.a2B), jb.jf(new ua([new jJ(L(139, 0, "Report"), function(jj) {
					return u.v.a2o(0) && (aW.bA.a5O(jj), u.sB.a5f({
						a7R: 5,
						nK: data.nK
					})), !0
				}, 0, 0, 1).button])), jX.push(jb))
			}(jX), jX.push(function() {
				var jb = new jc,
					a86 = (jb.jd(L(84)), [L(85), L(86), L(87), L(88), L(89)]),
					rT = data.a2D;
				jb.a2f(L(90) + aW.fv.a87(data.l9, .01, 2) + "<br>" + L(91) + (rT + 1) + " / " + data.l8 + "<br>" + L(92) + a86[rT < 10 ? 0 : rT < 50 ? 1 : rT < 200 ? 2 : rT < 1e3 ? 3 : 4]), data.a2M || (jb.vS(L(93)), jb.vS(L(94)), jb.vS(
					L(95)));
				return jb
			}()), data.a2M && jX.push(function() {
				var jb = new jc,
					ue = (jb.jd(L(96)), new ji({
						value: gG.ku.data[147].value,
						dS: -1
					}, 1, void 0, function(jj) {
						gG.gH.gI(147, a7L(jj.target.value))
					})),
					a7P = (jb.jf(ue), new jJ(L(79), function(jj) {
						return ue.jj.readOnly && u.v.a2o(0) && (aW.bA.a5O(jj), a7N(), u.sB.a7Q({
							a7R: 0,
							nK: data.nK,
							value: parseInt(gG.ku.data[147].value, 10)
						})), !0
					}, 1)),
					uf = new jJ(L(77), function(jj) {
						return jj.textContent === L(77) ? (jj.textContent = L(78), ue.jj.readOnly = !0, a7P.a6B(0), a7P.button.style.color = fk.f9, gG.gH.gI(147, ue.jj.value), a7L(gG.ku.data[147].value)) : a7N(), !0
					}),
					a7S = (jb.jf(new ua([uf.button])), jb.vS()),
					a7L = function(gp) {
						gp = aW.aX.qi(gp, 2, 1e6);
						var a7T = Math.max(1, 1 + Math.floor(.01 * (gp - 100)));
						a7S.textContent = L(81, [gp, gG.ku.data[105].value, a7T, data.nK, gp - a7T])
					},
					a7N = function() {
						uf.button.textContent = L(77), ue.jj.readOnly = !1, a7P.a6B(1), a7P.button.style.color = fk.eC
					};
				return a7L(gG.ku.data[147].value), jb.jf(new ua([a7P.button])), jb
			}());
		jX.push(function() {
			var jb = new jc,
				ue = (jb.jd(L(97)), new ji({
					value: data.nK,
					dS: -1
				}));
			return ue.jj.readOnly = !0, jb.jf(ue), jb.jf(new ua([new jJ(L(98), function(jj) {
				return aW.bA.a5N(ue.jj), aW.bA.a5O(jj), !0
			}).button])), jb
		}()), data.a2M || (jX.push(function() {
			var jb = new jc,
				a88 = (jb.jd(L(99)), new ji(gG.ku.data[106]));
			return a88.jj.readOnly = !0, a88.jj.type = "password", jb.jf(a88), jb.jf(new ua([new jJ(L(100), function(jj) {
				return jj.textContent === L(100) ? (jj.textContent = L(101), a88.jj.type = "text") : (jj.textContent = L(100), a88.jj.type = "password"), !0
			}).button, new jJ(L(98), function(jj) {
				return aW.bA.a5N(a88.jj), aW.bA.a5O(jj), !0
			}).button])), jb.jf(new ua([new jJ(L(102), function() {
				n.d7(8, n.uM().a2h, new a48(15))
			}).button])), jb.jd(L(103), "0.8em"), jb.vS(L(104)), jb.vS(L(105)), jb.vS(L(106)), jb
		}()), jX.push(function() {
			var jb = new jc;
			return jb.jd(L(107)), jb.jf(new ua([new jJ(L(108), function() {
				n.d7(6, n.uM().a2h)
			}).button])), jb.jf(new ua([new jJ(L(109), function() {
				gG.gH.gI(105, ""), n.d7(8, n.uM().a2h, new a48(18))
			}).button])), jb.jf(new ua([new jJ(L(110) + gG.ku.data[105].value, function() {
				n.d7(4, 0, new uE(L(111), L(112), !0, [new jJ("⬅️ " + L(10), function() {
					n.d7(7, n.uN(7).a2h)
				})]))
			}, fk.er).button])), jb
		}()), jX.push(function() {
			function a8B(dS) {
				for (var dw = 0; dw < 2; dw++) a8A[dw].a6B(0 === dS ? fk.eO : 0 === dw ? fk.er : fk.eZ)
			}
			var a89, a8A, jb = new jc;
			jb.jd(L(113)), jb.vS(L(114)), gG.v.xq();
			return a8A = [new jJ(L(115), function() {
				var dS = Math.min(gG.ku.data[117].value, a89.gC.length - 1);
				if (!(dS < 1)) {
					a89.gC[dS].remove(), a89.gC.splice(dS, 1);
					for (var dw = dS; dw < a89.gC.length; dw++) a89.gC[dw].name = "" + dw;
					gG.v.xt(dS), dS = gG.ku.data[117].value, a89.gC[dS].textContent = a89.gC[dS].textContent.replace("⚪", "🟢"), a8B(dS)
				}
			}, fk.eO), new jJ(L(116), function() {
				var dS = Math.min(gG.ku.data[117].value, a89.gC.length - 1);
				dS < 1 || (dS = gG.v.xu(dS), gG.gH.gI(105, dS.nK), gG.gH.gI(106, dS.password), n.d7(8, n.uM().a2h, new a48(18)))
			}, fk.eO)], (a89 = new g9(gG.ku.data[117], a8B)).gC[0].style.marginTop = "0.5em", jb.je(a89), jb.jf(new ua([a8A[1].button])), jb.jf(new ua([a8A[0].button])), jb
		}()));
		return jX.push(function() {
				var jb = new jc,
					a86 = (jb.jd(L(120)), [L(121), L(122), L(123), L(124)]),
					rT = data.a2E;
				return jb.a2f(L(125) + (data.fV / 100).toFixed(2) + "<br>" + L(91) + (rT + 1) + " / " + data.l8 + "<br>" + L(92) + a86[rT < 10 ? 0 : rT < 50 ? 1 : rT < 200 ? 2 : 3]), jb
			}()), jX.push(function() {
				var jb = new jc;
				return jb.jd(L(117)), jb.a2f(L(118) + aW.fv.a87(data.l5, .1, 1) + "<br>" + L(91) + (data.l6 + 1) + " / " + data.l8 + "<br>" + L(119) + data.l7), jb
			}()),
			function(jX) {
				var jb = new jc,
					a8G = data.lC,
					a8H = (jb.jd(L(140)), jb.a2f(L(141, [data.lA.length ? "[" + data.lA + "]" : "-"])), jb.a2f(L(142, [aW.fv.a87(a8G, .01, 2)])), jb.a2f(L(143, [data.lE + 1 + " / " + data.l8])), data.lF),
					a8I = (jb.a2f(L(144, [aW.fv.a87(a8H, .1, 1)])), data.lH);
				jb.a2f(L(145, [a8I])), jb.a2f(L(146, [aW.fv.a87(a8H / Math.max(a8I, 1), .1, 2)])), a8G = data.lD, jb.jd(L(147), "0.8em"), jb.a2f(L(141, [data.lB.length ? "[" + data.lB + "]" : "-"])), jb.a2f(L(142, [aW.fv.a87(a8G, .01, 2)])),
					a8H = data.lG, jb.a2f(L(144, [aW.fv.a87(a8H, .1, 1)])), a8I = data.lI, jb.a2f(L(145, [a8I])), jb.a2f(L(146, [aW.fv.a87(a8H / Math.max(a8I, 1), .1, 2)])), data.a2M || (jb.vS(L(148)), jb.vS(L(149)));
				jX.push(jb)
			}(jX),
			function(jX) {
				var jb = new jc;
				jb.jd(L(150)), jb.a2f(L(125) + (data.a27 / 10).toFixed(1) + "<br>" + L(92) + (data.a28.length ? L(151, [data.a28]) : L(152))), data.a2M ? (jb.jf(new ua([new jJ(L(153), function(jj) {
					return u.v.a2o(0) && (aW.bA.a5O(jj), u.sB.a5f({
						a7R: 4,
						nK: data.nK
					})), !0
				}, 0, 0, 1).button])), jb.vS(L(154)), jb.vS(L(155))) : jb.vS(L(156));
				jX.push(jb)
			}(jX), jX.push(function() {
				var jb = new jc;
				if (jb.jd(L(126)), jb.a2f(L(127) + data.a25 + "<br>" + L(91) + (data.a26 + 1) + " / " + data.l8 + "<br>" + L(92) + oC.a8C(data.a26)), data.a2M) {
					var ue = new ji({
							value: gG.ku.data[157].value,
							dS: -1
						}, 1, void 0, function(jj) {
							gG.gH.gI(157, a7L(jj.target.value))
						}),
						uf = (ue.jj.style.marginTop = "0.6em", jb.jf(ue), new jJ(L(77), function(jj) {
							return jj.textContent === L(77) ? (jj.textContent = L(78), ue.jj.readOnly = !0, a8D[0].a6B(0), a8D[1].a6B(0), a8D[0].button.style.color = fk.f9, a8D[1].button.style.color = fk.f9, a7L(gG.ku.data[157]
								.value)) : a7N(), !0
						})),
						a8D = (jb.jf(new ua([uf.button])), [new jJ("−", function(jj) {
							return ue.jj.readOnly && u.v.a2o(0) && (aW.bA.a5O(jj), a7N(), u.sB.a7Q({
								a7R: 2,
								nK: data.nK,
								value: dU.ls(parseInt(gG.ku.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new jJ("+", function(jj) {
							return ue.jj.readOnly && u.v.a2o(0) && (aW.bA.a5O(jj), a7N(), u.sB.a7Q({
								a7R: 1,
								nK: data.nK,
								value: dU.ls(parseInt(gG.ku.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						a7S = jb.vS(),
						a7L = function(gp) {
							return gp = aW.aX.qi(gp, 3, 32767), a7S.textContent = L(128, [gp - 1, gp, gG.ku.data[105].value]), gp
						};
					jb.jf(new ua([a8D[0].button, a8D[1].button]));
					for (var dw = 0; dw < 2; dw++) a8D[dw].button.style.fontSize = "1.6em";
					var a7N = function() {
						uf.button.textContent = L(77), ue.jj.readOnly = !1, a8D[0].a6B(1), a8D[1].a6B(1), a8D[0].button.style.color = fk.eC, a8D[1].button.style.color = fk.eC
					};
					a7L(gG.ku.data[157].value)
				}
				return jb
			}()),
			function(jX) {
				var jb, mF;
				data.a2M && !data.a2F || (0 === aI.id || data.a2M || data.a2F) && ((jb = new jc).jd("Patreon"), !data.a2M && data.a2G ? jb.jf(new ua([new jJ(L(100), function() {
					u.sB.a5f({
						a7R: 7,
						nK: data.nK
					}), data.a2G = 0, n.d7(7)
				}).button])) : data.a2F ? (jb.a2f(L(157, [(data.a2H / 100).toFixed(2)]) + "<br>" + L(158, [1 + data.a2I + " / " + data.a2J]) + "<br>" + L(159, [data.a2K ? L(160) : L(161)])), data.a2M || jb.jf(new ua([new jJ(L(162),
					function() {
						u.sB.a5f({
							a7R: 8,
							nK: data.nK
						}), data.a2F = 0, gG.gH.gI(160, 0), n.d7(7)
					}).button]))) : (jb.a2f(L(163), "0.75em").style.marginBottom = "0.3em", jb.a2f("  • " + L(164), "0.75em").style.whiteSpace = "pre", jb.a2f("  • " + L(165), "0.75em").style.whiteSpace = "pre", jb.a2f("  • " + L(
						166), "0.75em").style.whiteSpace = "pre", jb.a2f(L(167), "0.75em").style.marginTop = "1.0em", jb.a2f(L(168), "0.75em").style.marginTop = "1.0em", jb.a2f("<a href='" + g7.a8J +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", mF = "https://www.patreon.com/oauth2/authorize?state=" + data.nK +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", jb.a2f(L(169), "0.75em").style.marginTop = "1.0em", jb.a2f("<a href='" + mF +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.a2M || (jb.jf(new jg), jb.jf(new ua([new jJ(L(101), function() {
						u.sB.a5f({
							a7R: 6,
							nK: data.nK
						}), data.a2G = 1, n.d7(7)
					}).button])), jb.a2f(L(170), "0.75em").style.marginTop = "0.75em")), jX.push(jb))
			}(jX), jX
	}())
}

function a5k(data) {
	var rm, a8L, a8M, ro, a8N, a8O, a8P, colors, a8Q, a8R, a8S = 0,
		a8T = 0,
		a8U = !1,
		a8V = !1,
		a8W = [1, 5, 60, 240, 1440, 10080, 43200];

	function a92(hY, hZ) {
		! function(hY, hZ) {
			return a8L < hY && hY < a8L + ro && a8M < hZ && hZ < a8M + a8N
		}(a8S = hY, a8T = hZ) ? (a8U && (s.ap = !0), a8U = !1) : (a8U = !0, s.ap = !0)
	}
	this.show = function() {
		a8V = gG.ku.data[127].value, rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize();
		var dx = aL.bC,
			rw = rm.rx(),
			a8g = dx * rw.s0,
			dx = dx * rw.ry;
		a8O = aW.bA.i9(.06), a8P = aW.bA.i9(.04), a8L = aW.bA.i9(.06), a8M = dx + a8O, ro = aL.aN - a8L - a8P, a8N = a8g + dx - a8M - a8P
	}, this.mP = function() {
		rm.mP(),
			function() {
				var dw, a8c, mv, iE, fm, dY = data.data,
					a8j = 1,
					a8k = .125,
					a8l = a8V ? 65536 : 0;
				for (dw = 0; dw < dY.length; dw++)
					for (a8c = dY[dw].a8c, mv = a8c.length, a8j = Math.max(mv, a8j), fm = 0; fm < mv; fm++) a8k = Math.max(a8c[fm], a8k), a8l = Math.min(a8c[fm], a8l);
				var iH = a8M + a8N,
					a8m = a8N / (a8k - a8l),
					a8n = 1 / (a8j - 1);
				for (aC.lineWidth = dI.b7, dw = 0; dw < dY.length; dw++) {
					for (a8c = dY[dw].a8c, mv = a8c.length, iE = a8L, aC.beginPath(), aC.moveTo(iE + ro, iH - a8m * (a8c[mv - 1] - a8l)), fm = mv - 2; 0 <= fm; fm--) aC.lineTo(iE + a8n * fm * ro, iH - a8m * (a8c[fm] - a8l));
					aC.strokeStyle = colors[dw], aC.stroke()
				}(function(a8l, a8k, iH, a8m) {
					aC.font = aW.bA.mN(0, .25 * a8L), aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 2), aC.fillStyle = colors[0];
					for (var iE = .92 * a8L, dw = 0; dw < 3; dw++) {
						var gp = a8l + dw * (a8k - a8l) / 2;
						aC.fillText((gp / 1e3).toFixed(3), iE, iH - a8m * (gp - a8l))
					}
				})(a8l, a8k, iH, a8m),
				function(a8j) {
					var iF = a8M + a8N + .15 * a8P;
					aC.font = aW.bA.mN(0, Math.min(.4 * a8P, .028 * aL.aN)), aW.bA.textBaseline(aC, 0), aW.bA.textAlign(aC, 2), aC.fillStyle = colors[0], aC.fillText(aW.a4T.a8q(a8Q), a8L + ro, iF), aW.bA.textAlign(aC, 0), aC.fillText(aW.a4T.a8q(
						new Date(a8R.getTime() - 6e4 * (a8j - 1) * a8W[data.a5d])), a8L, iF)
				}(a8j),
				function(a8j, a8l, a8k) {
					if (a8U && !(a8j < 2)) {
						for (var lS, dS = (a8S - a8L) / ro * (a8j - 1), a8r = Math.floor(dS), a8s = Math.floor(1 + dS), a8t = dS - a8r, a8u = 1e5, hd = -1, a8v = -1, a8w = a8k - (a8k - a8l) * (a8T - a8M) / a8N, dY = data.data, dw = 0; dw < dY
							.length; dw++) {
							var ll, a8c = dY[dw].a8c;
							a8c.length <= a8s || (a8c = a8c[a8r] + a8t * (a8c[a8s] - a8c[a8r]), (ll = Math.abs(a8w - a8c)) < a8u && (a8u = ll, hd = dw, a8v = a8c))
						} - 1 !== hd && (a8k = a8M + a8N - (a8v - a8l) / (a8k - a8l) * a8N, aC.lineWidth = .5 * dI.b7, aC.strokeStyle = colors[hd], aC.beginPath(), aC.moveTo(a8L, a8k), aC.lineTo(a8S, a8k), aC.lineTo(a8S, a8M + a8N), aC.stroke(),
							aC.beginPath(), aC.arc(a8S, a8k, .1 * a8L, 0, 2 * Math.PI), aC.fillStyle = colors[hd], aC.fill(), a8l = a8M + a8N + .15 * a8P, aW.bA.textAlign(aC, 1), lS = a8j - 2 < dS ? (lS = a8R.getTime() - 6e4 * a8W[data.a5d],
								new Date(lS + (dS - (a8j - 2)) * (a8Q.getTime() - lS))) : new Date(a8R.getTime() - 6e4 * (a8j - dS - 1) * a8W[data.a5d]), a8j = aW.a4T.a8q(lS), dS = aW.bA.measureText(a8j), lS = dU.ls(a8S, a8L + .5 * dS, a8L +
								ro - .5 * dS), aC.fillStyle = aW.color.e4(70, 50, 20), aC.fillRect(lS - .52 * dS, a8M + a8N, 1.04 * dS, .55 * a8P), aC.fillStyle = colors[0], aC.fillText(a8j, lS, a8l), aC.font = aW.bA.mN(0, .25 * a8L), aW.bA
							.textBaseline(aC, 1), aW.bA.textAlign(aC, 2), lS = .92 * a8L, a8j = (a8v / 1e3).toFixed(3), dS = aW.bA.measureText(a8j), a8l = lS - 1.04 * dS, aC.fillStyle = aW.color.e4(70, 50, 20), aC.fillRect(a8l, a8k - .1625 *
								a8L, a8L - a8l, .275 * a8L), aC.fillStyle = colors[hd], aC.fillText(a8j, lS, a8k))
					}
				}(a8j, a8l, a8k)
			}(), aC.lineWidth = dI.b7, aC.strokeStyle = fk.eC, aC.beginPath(), aC.moveTo(a8L, a8M), aC.lineTo(a8L, a8M + a8N), aC.lineTo(a8L + ro, a8M + a8N), aC.stroke();
		var dw, fontSize = .5 * a8O,
			dY = (aC.font = aW.bA.mN(0, fontSize), aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 0), data.data),
			du = dY.length,
			iF = a8M - .5 * a8O,
			fr = "";
		for (dw = 0; dw < du; dw++) fr += dY[dw].name + "  ";
		fr = fr.trim();
		var a8z = aW.bA.measureText(fr),
			iE = .5 * (aL.aN - a8z);
		for (a8z > aL.aN && (iE = 0, aC.font = aW.bA.mN(0, aL.aN / a8z * fontSize)), dw = 0; dw < du; dw++) aC.fillStyle = colors[dw], aC.fillText(dY[dw].name, iE, iF), iE += aW.bA.measureText(dY[dw].name + "  ")
	}, this.mJ = function(hY, hZ) {
		a92(hY, hZ)
	}, this.qr = function(hY, hZ) {
		a92(hY, hZ)
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	};
	var dw, b5, a8d, n0, kR = data.data,
		du = kR.length,
		max = 1;
	for (dw = 0; dw < du; dw++) max = Math.max(max, kR[dw].a8c.length);
	for (dw = 0; dw < du; dw++)
		for (; kR[dw].a8c.length < max;) kR[dw].a8c.unshift(0);
	b5 = new Date, a8d = 6e4 * b5.getTimezoneOffset(), n0 = b5.getTime() - a8d, a8Q = new Date(n0), 6 === data.a5d ? function(b5, a8d) {
		var a8f = b5.getUTCFullYear(),
			b5 = b5.getUTCMonth() + 1;
		a8R = b5 < 12 ? new Date(Date.UTC(a8f, b5) - a8d) : new Date(Date.UTC(a8f + 1, 0) - a8d)
	}(b5, a8d) : (a8d = 6e4 * a8W[data.a5d], a8R = data.a5d <= 4 ? new Date(n0 + a8d - b5.getTime() % a8d) : new Date(n0 + a8d - (b5.getTime() + 2592e5) % a8d)), n0 = aW.color, colors = [fk.eC, n0.e4(255, 0, 0), n0.e4(0, 200, 0), n0.e4(80, 80,
		255), n0.e4(255, 255, 0), n0.e4(255, 0, 255), n0.e4(0, 255, 255), n0.e4(255, 140, 0), n0.e4(128, 128, 128), n0.e4(0, 255, 140)], rm = new jI(L(171) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.a5d] + ", " + aW.a4T.a8b(a8Q), [
		new jJ("⬅️ " + L(10), function() {
			n.d7(1)
		}), new jJ(L(172), function() {
			n.d7(14)
		})
	], !1)
}

function a4G() {
	var a93 = 0,
		a94 = 0,
		a95 = 0,
		a96 = null,
		a97 = null;

	function a9A(dg, a9B, a9D) {
		var fr = dg.username;
		return (fr += "   " + p.sr.a3U(dg.st, dg.qd, dg.a3V)) + function(dg) {
			dg = dg.l9;
			if (dg < 1e3) return "   Gold: " + dg;
			if ((dg %= 1024) < 1e3) return "   Gold: " + dg + "k";
			return "   Gold: " + (dg - 999) + "M"
		}(dg) + ("   IP: " + dc.dd.t6(dg.a9F, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][a9D ? a94 : a99(dg, a9B)])
	}

	function a99(dg, a9B) {
		return a94 = a9B || p.t9.tA(dg.nK) ? 1 : 0
	}
	this.a98 = function() {
		!a93 || a94 === a99(a97) && a95 === a97.l9 || (a95 = a97.l9, a96.show(-1, -1, a9A(a97, 0, 1), 1, 1))
	}, this.t1 = function(jj, dg, a9B) {
		var a9C = jj.target.getBoundingClientRect();
		this.show(a9C.left, a9C.top, dg, 0, a9B), jj.target.addEventListener("mouseleave", function remove() {
			jj.target.removeEventListener("mouseleave", remove), p.t0 && p.t0.jn(1)
		})
	}, this.show = function(iE, iF, dg, a9G, a9B) {
		a96 = a96 || new a9H, a95 = (a97 = dg).l9, a96.show(iE, iF, a9A(dg, a9B), a9G), a93 = 1
	}, this.jn = function(a9I) {
		a96 && a96.jn(a9I) && (a93 = 0, a97 = null)
	}
}

function pH() {
	this.cy = new a9J, this.d0 = new dK, this.uC = new a9K, this.j = function() {
		aR.aw || this.cy.j()
	}, this.b2 = function() {
		aR.aw || (this.cy.b2(), 3 !== n.uL) || s.a6() % 15 != 5 && 2 !== aR.bf || n.uM().u8()
	}, this.uB = function() {
		0 === aR.bf && r.kY(), aR.br.a62(), aR.data.canvas = null, u.v.close(u.v.w, 3257), u.v.w = 0, aR.data.isReplay = 1, aR.bv()
	}, this.uA = function(fr) {
		var dw = fr.indexOf("=");
		return 0 <= dw ? fr.substring(dw + 1) : fr
	}, this.u9 = function(fr) {
		return "https://territorial.io/?replay=" + fr
	}
}

function a9M() {
	this.mz = function(kn, player) {
		cf.ko(aR.ad, player, kn), u.z.a6d(kn, player)
	}, this.a15 = function(player) {
		cf.kr(player, 0), u.z.a6g(player)
	}, this.a0w = function(a0i, player) {
		cf.a9N(a0i, player), u.z.a6h(a0i, player)
	}, this.a9O = function() {
		aR.ay || aR.aw || u.sD.a9O()
	}
}

function a5j(data) {
	var rm, a9P, dx, a5K;

	function a9Q(yL) {
		var du = data.data.length;
		if (du) {
			for (var hR, max = min = parseInt(data.data[0][0]), dw = 1; dw < du; dw++) var vu = parseInt(data.data[dw][0]),
				min = Math.min(vu, min),
				max = Math.max(vu, max);
			hR = yL < 0 ? min + yL : max + 1, n.d7(8, n.uM().a2h, new a48(21, {
				a49: data.a49,
				hR: hR,
				hS: hR + Math.abs(yL)
			}))
		}
	}
	this.show = function() {
			rm.show(), this.resize()
		}, this.jn = function() {
			rm.jn()
		}, this.resize = function() {
			rm.resize(), a9P.resize()
		}, this.jo = function(dx) {
			2 === dx && rm.jp[0].jq()
		}, dx = data.data.length ? 0 : 1, dx = [new jJ("⬅️ " + L(10), function() {
			n.jR()
		}), new jJ(L(173), function() {
			a9Q(-10)
		}, dx, 0, 1), new jJ(L(174), function() {
			a9Q(10)
		}, dx, 0, 1), new jJ(L(172), function() {
			n.d7(11, 10, new a9R({
				a49: data.a49
			}))
		})], a5K = [L(175), L(176), L(177), L(178), L(179), L(64), L(65), L(66), L(180), L(181), L(182), L(183), L(67)], rm = new jI(a5K[data.a49], dx),
		function() {
			var dw, kR = {
					a9T: []
				},
				a9T = kR.a9T,
				a9U = data.data,
				du = a9U.length;
			du && 0 === a9U[0][0] && 0 <= (dS = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.a49]) && (n.v.a9V[dS] = a9U[0][1]);
			var aH = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.a49],
				a9Y = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.a49],
				dS = [
					[L(184), L(185) + " ↗", L(186)],
					[L(184), L(187), L(188), L(189) + " ↗"],
					[L(184), L(185) + " ↗", L(188)],
					[L(184), L(185) + " ↗", L(188)],
					[L(190), L(191), L(192) + " ↗", L(193) + " ↗", L(194)],
					[L(190), L(191), L(195) + " ↗", L(75) + " ↗", L(196)],
					[L(190), L(191), L(197) + " ↗", L(198) + " ↗", L(76)],
					[L(190), L(191), L(195) + " ↗", L(75) + " ↗", L(199)],
					[L(190), L(191), L(192) + " ↗", L(193) + " ↗", L(194)],
					[L(184), L(185) + " ↗", L(188)],
					[L(184), L(185) + " ↗", L(200)],
					[L(184), L(185) + " ↗", L(188)],
					[L(190), L(191), L(201) + " ↗", L(202) + " ↗", L(203)]
				];
			if (kR.a5K = dS[data.a49], kR.a9Z = [
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
				][data.a49], 0 === data.a49 || 2 === data.a49 || 3 === data.a49 || 9 === data.a49 || 10 === data.a49 || 11 === data.a49)
				for (dw = 0; dw < du; dw++) a9T.push([{
					gp: a9U[dw][0] + 1 + ".",
					b5: 0
				}, {
					gp: a9U[dw][1],
					b5: 1,
					nK: a9U[dw][4],
					l4: a9U[dw][3]
				}, {
					gp: (aH * a9U[dw][2]).toFixed(a9Y),
					b5: 0
				}]);
			else if (12 === data.a49)
				for (dw = 0; dw < du; dw++) {
					var a9a = a9U[dw][3];
					a9T.push([{
						gp: "" + a9U[dw][0],
						b5: 0
					}, {
						gp: "" + a9U[dw][4],
						b5: 0
					}, {
						gp: a9U[dw][5],
						b5: 1,
						nK: a9U[dw][1],
						l4: 0
					}, {
						gp: a9U[dw][6],
						b5: 1,
						nK: a9U[dw][2],
						l4: 0
					}, {
						gp: oC.a9b(a9a % 16, a9a >> 4),
						b5: 0
					}])
				} else if (1 === data.a49)
					for (dw = 0; dw < du; dw++) a9T.push([{
						gp: a9U[dw][0] + 1 + ".",
						b5: 0
					}, {
						gp: a9U[dw][1],
						b5: 0
					}, {
						gp: (aH * a9U[dw][2]).toFixed(a9Y),
						b5: 0
					}, {
						gp: a9U[dw][3],
						b5: 1,
						nK: a9U[dw][5],
						l4: a9U[dw][4]
					}]);
				else if (4 === data.a49 || 5 === data.a49 || 6 === data.a49 || 7 === data.a49 || 8 === data.a49)
				for (dw = 0; dw < du; dw++) {
					var a9c = a9U[dw][5];
					4 === data.a49 || 8 === data.a49 ? "100%" === (a9c = (a9c % 64 * 100 / (a9c >> 6)).toFixed(0) + "%") && (4 === data.a49 ? a9c += " (" + L(204) + ")" : a9c += " (" + L(205) + ")") : 5 === data.a49 ? 32768 <= a9c && (a9c = -(a9c -
						32768)) : a9c = (aH * a9c).toFixed(a9Y), a9T.push([{
						gp: "" + a9U[dw][0],
						b5: 0
					}, {
						gp: "" + a9U[dw][6],
						b5: 0
					}, {
						gp: a9U[dw][7],
						b5: 1,
						nK: a9U[dw][1],
						l4: a9U[dw][2]
					}, {
						gp: a9U[dw][8],
						b5: 1,
						nK: a9U[dw][3],
						l4: a9U[dw][4]
					}, {
						gp: "" + a9c,
						b5: 0
					}])
				}
			a9P = new a9d(rm.jM, kR)
		}()
}

function p0() {
	var gp, aN, aO, max, a9e, a9f, a9h, a9i, a9j, a9k, a9l, a9m, a9n, a9o, a9g = 1e4;

	function a9w(a9u, a9v, du) {
		var dw;
		for (a9h[0] = a9u, dw = 1; dw < du; dw++) a9h[dw] = a9h[dw - 1] + a9v, a9v = a9h[dw] >= a9g ? (a9h[dw] = a9g - 1, -a9v) : a9h[dw] < 0 ? (a9h[dw] = 0, -a9v) : (a9v += 16384 <= c3.random() ? a9f : -a9f) < -a9e ? -a9e : a9e < a9v ? a9e : a9v
	}

	function a9y(iE, iF, a9z, du) {
		(a9z ? function(iE, iF, du) {
			var dw;
			for (dw = 0; dw < du; dw++) gp[iF * aN + iE + dw] = a9h[dw]
		} : function(iE, iF, du) {
			var dw;
			for (dw = 0; dw < du; dw++) gp[iF * aN + iE + dw * aN] = a9h[dw]
		})(iE, iF, du)
	}

	function aA2(value, du) {
		var dw, xk, gt, yL = value - a9h[du - 1];
		if (0 != yL) {
			for (xk = 1 + dU.dV(Math.abs(yL), du - 1), xk = yL < 0 ? -xk : xk, a9h[du - 1] = value, gt = (gt = du - 1 - dU.dV(Math.abs(yL), Math.abs(xk))) < 1 ? 1 : du - 2 < gt ? du - 2 : gt, dw = du - 2; gt <= dw; dw--) a9h[dw] += yL - (du - 1 -
				dw) * xk;
			(yL < 0 ? function(du) {
				var dw;
				for (dw = du - 2; 1 <= dw; dw--) a9h[dw] < 0 && (a9h[dw] = -a9h[dw] - 1)
			} : function(du) {
				var dw;
				for (dw = du - 2; 1 <= dw; dw--) a9h[dw] >= a9g && (a9h[dw] = 2 * a9g - a9h[dw] - 1)
			})(du)
		}
	}

	function aA5(aA6, aA7, du) {
		for (var dw = 0; dw < du; dw++) aA6[dw] = aA7[dw]
	}

	function aA8(dY) {
		for (var dw = 0; dw < dY.length - 1; dw++) dY[dw] = dY[dw + 1] - dY[dw];
		dY[dY.length - 1] = dY[dY.length - 3]
	}

	function aA9(a0p, gap, v4) {
		a9i.push(a0p), a9j.push(gap), a9k.push(v4)
	}
	this.cN = function(nI) {
		! function(nI) {
			var dw;
			for (aN = nI[0], aO = nI[1], a9e = nI[2], a9f = nI[3], gp = new Int16Array(aN * aO), max = aO < aN ? aN : aO, a9h = new Int16Array(max), a9i = [], a9j = [], a9k = [], a9l = new Array(aN), a9m = new Array(aO), dw = aN - 1; 0 <=
				dw; dw--) a9l[dw] = !1;
			for (dw = aO - 1; 0 <= dw; dw--) a9m[dw] = !1;
			a9n = new Int16Array(aN), a9o = new Int16Array(aO)
		}(nI),
		function(du) {
			var a9u = c3.random() % a9g,
				a9v = c3.random() % (2 * a9e + 1) - a9e;
			a9w(a9u, a9v, du)
		}(max), aA5(a9o, a9h, aO), a9y(0, 0, !0, aN);
		var iE, iF, nI = gp[0],
			du = max,
			a9v = c3.random() % (2 * a9e + 1) - a9e;
		for (a9w(nI, a9v, du), aA5(a9n, a9h, aN), a9y(0, 0, !1, aO), aA8(a9n), aA8(a9o), a9w(gp[aN - 1], a9n[aN - 1], aO), a9y(aN - 1, 0, !1, aO), a9w(gp[aN * (aO - 1)], a9o[aO - 1], aN), aA2(gp[aN * aO - 1], aN), a9y(0, aO - 1, !0, aN), a9l[aN -
				1] = a9l[0] = !0, a9m[aO - 1] = a9m[0] = !0, aA9(0, aN, !0), aA9(0, aO, !1), ! function() {
				var aAB, a0p;
				for (;;) {
					if (aAB = function() {
							var dw, aAB = a9i.length - 1;
							for (dw = aAB - 1; 0 <= dw; dw--) a9j[dw] > a9j[aAB] && (aAB = dw);
							return aAB
						}(), a9j[aAB] < 5) return;
					a0p = a9i[aAB] + dU.dV(a9j[aAB], 2), (a9k[aAB] ? function(iE) {
						var du, aAE, dw, aAF = 0,
							aAG = 0;
						for (; aAG < aO - 1;) {
							for (dw = aAF + 1; dw < aO; dw++)
								if (a9m[dw]) {
									aAG = dw;
									break
								} du = aAG - aAF + 1, a9w(gp[iE + aN * aAF], 0 === aAF ? a9n[iE] : a9h[aAE - 1] - a9h[aAE - 2], du), aA2(gp[aAG * aN + iE], du), a9y(iE, aAF, !1, du), aAE = du, aAF = aAG
						}
						a9l[iE] = !0
					} : function(iF) {
						var du, aAE, dw, aAF = 0,
							aAG = 0;
						for (; aAG < aN - 1;) {
							for (dw = aAF + 1; dw < aN; dw++)
								if (a9l[dw]) {
									aAG = dw;
									break
								} du = aAG - aAF + 1, a9w(gp[iF * aN + aAF], 0 === aAF ? a9o[iF] : a9h[aAE - 1] - a9h[aAE - 2], du), aA2(gp[iF * aN + aAG], du), a9y(aAF, iF, !0, du), aAE = du, aAF = aAG
						}
						a9m[iF] = !0
					})(a0p), aA9(a0p, a9i[aAB] + a9j[aAB] - a0p, a9k[aAB]), a9j[aAB] = a0p - a9i[aAB] + 1
				}
			}(), iE = 0; iE < aN; iE++)
			if (!a9l[iE])
				for (iF = 0; iF < aO; iF++) a9m[iF] || ! function(iE, iF) {
					var value = gp[iF * aN + iE - 1] + gp[(iF - 1) * aN + iE],
						aAI = 2;
					a9l[iE + 1] && (aAI++, value += gp[iF * aN + iE + 1]);
					a9m[iF + 1] && (aAI++, value += gp[(iF + 1) * aN + iE]);
					gp[iF * aN + iE] = dU.dV(value, aAI)
				}(iE, iF)
	}, this.lo = function() {
		return gp
	}, this.tc = function() {
		gp = null
	}
}

function aAJ() {
	this.aAK = 0, this.ib = 0, this.mapSeed = 0, this.ka = 0, this.aAL = 0, this.aAM = 0, this.a41 = 0, this.aAN = 0, this.spawningSeed = 0, this.w = 0, this.b = 0, this.a3Y = [], this.aAO = 1048575, this.aAP = 0, this.aAQ = [{
		ib: 0,
		mapSeed: 0,
		ka: 0,
		t: 100,
		a41: 0
	}, {
		ib: 1,
		mapSeed: 0,
		ka: 1,
		t: 200,
		a41: 0
	}, {
		ib: 2,
		mapSeed: 0,
		ka: 2,
		t: 300,
		a41: 0
	}, {
		ib: 3,
		mapSeed: 0,
		ka: 3,
		t: 400,
		a41: 0
	}, {
		ib: 0,
		mapSeed: 0,
		ka: 9,
		t: 500,
		a41: 0
	}, {
		ib: 1,
		mapSeed: 0,
		ka: 10,
		t: 600,
		a41: 0
	}, {
		ib: 2,
		mapSeed: 0,
		ka: 8,
		t: 700,
		a41: 0
	}, {
		ib: 3,
		mapSeed: 0,
		ka: 3,
		t: 800,
		a41: 0
	}]
}

function ov() {
	this.fx = new Array(aR.bS), this.fp = new Array(aR.bS), this.gZ = new Uint8Array(aR.bS), this.aa = new Uint8Array(aR.bS), this.sX = new Uint16Array(aR.bS), this.sZ = new Uint16Array(aR.bS), this.sY = new Uint16Array(aR.bS), this.sa =
		new Uint16Array(aR.bS), this.ac = new Uint32Array(aR.bS), this.zS = new Uint32Array(aR.bS), this.bN = new Uint32Array(aR.bS), this.ig = null, this.iZ = null, this.gl = null, this.ic = null, this.fe = new Uint16Array(aR.bS), this.ff =
		new Uint16Array(aR.bS), this.fd = new Uint16Array(aR.bS), this.fi = new Uint16Array(aR.bS), this.fc = new Uint8Array(aR.bS), this.qC = new Uint16Array(aR.bS), this.j = function() {
			this.fx.fill(""), this.fp.fill(""), this.gZ.fill(0), this.aa.fill(0), this.sX.fill(0), this.sZ.fill(0), this.sY.fill(0), this.sa.fill(0), this.ac.fill(0), this.zS.fill(0), this.bN.fill(0), this.ig = new Array(aR.bS), this.iZ = new Array(
				aR.bS), this.gl = new Array(aR.bS), this.ic = new Array(aR.bS), this.fe.fill(0), this.ff.fill(0), this.fd.fill(0), this.fi.fill(0), this.fc.fill(0), this.qC.fill(0)
		}
}

function oh() {
	var aAS, aAT, aAU, aAV, aAW, aAX, aAY, aAZ, aAa, aAb, aAc, aAd, aAe, aAf, aAg, aAh, aAi, aAj, aAk, aAl, aAm, aAn, position, aAo, aAp, aAq, aAr, aAs = 1,
		wk = 1,
		aAt = "";
	var leaderboardHasChanged = true;
	this.playerPos = aR.ad;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => xD[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(xD[aR.ad]);
	}

	function aAw() {
		aAY.clearRect(0, 0, aAS, aAR),
			aAY.fillStyle = fk.f2,
			aAY.fillRect(0, 0, aAS, aAd),
			aAY.fillStyle = fk.e8,
			aAY.fillRect(0, aAd, aAS, aAR - aAd);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			xD[aR.ad]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aAn = -1;
		if (__fx.leaderboardFilter.enabled && aAn >= __fx.leaderboardFilter.filteredLeaderboard.length) aAn = -1;
		playerPos >= position && aAy(playerPos - position, fk.eb),
			0 !== xD[aR.ad] && 0 === position && aAy(0, fk.f8),
			-1 !== aAn && aAy(aAn, fk.eD),
			aAY.fillStyle = fk.e8,
			//console.log("drawing", aAn),
			aAY.clearRect(0, aAR - __fx.leaderboardFilter.tabBarOffset, aAS, __fx.leaderboardFilter.tabBarOffset);
		aAY.fillRect(0, aAR - __fx.leaderboardFilter.tabBarOffset, aAS, __fx.leaderboardFilter.tabBarOffset);
		aAY.fillStyle = fk.eC,
			aAY.fillRect(0, aAd, aAS, 1),
			aAY.fillRect(0, aAR - __fx.leaderboardFilter.tabBarOffset, aAS, 1),
			__fx.leaderboardFilter.drawTabs(aAY, aAS, aAR - __fx.leaderboardFilter.tabBarOffset, fk.eb),
			aAY.fillRect(0, 0, aAS, dI.b7),
			aAY.fillRect(0, 0, dI.b7, aAR),
			aAY.fillRect(aAS - dI.b7, 0, dI.b7, aAR),
			aAY.fillRect(0, aAR - dI.b7, aAS, dI.b7), aAY.font = aAT, aW.bA.textBaseline(aAY, 1), aW.bA.textAlign(aAY, 1), aAY.fillText(aAt, Math.floor((aAS + aAd - 22) / 2), Math.floor(aAb + aAU / 2));
		__fx.playerList.drawButton(aAY, 12, 12, aAd - 22);
		var fm, sT = playerPos < position + aAW - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aAW)
				position = (result.length > aAW ? result.length : aAW) - aAW;
			//if (position >= result.length) position = result.length - 1;
			for (aAY.font = aAV, aW.bA.textAlign(aAY, 0), fm = aAW - sT; 0 <= fm; fm--) {
				const pos = result[fm + position];
				if (pos !== undefined)
					aAz(am[pos]), aB0(fm, pos, am[pos]);
			}
			for (aW.bA.textAlign(aAY, 2), fm = aAW - sT; 0 <= fm; fm--) {
				const pos = result[fm + position];
				if (pos !== undefined)
					aAz(am[pos]), aB1(fm, am[pos]);
			}
		} else {
			for (aAY.font = aAV, aW.bA.textAlign(aAY, 0), fm = aAW - sT; 0 <= fm; fm--)
				aAz(am[fm + position]), aB0(fm, fm + position, am[fm + position]);
			for (aW.bA.textAlign(aAY, 2), fm = aAW - sT; 0 <= fm; fm--)
				aAz(am[fm + position]), aB1(fm, am[fm + position]);
		}
		2 == sT && (aAz(aR.ad), aW.bA.textAlign(aAY, 0), aB0(aAW - 1, xD[aR.ad], aR.ad), aW.bA.textAlign(aAY, 2), aB1(aAW - 1, aR.ad)), 0 === position && (sT = .7 * aAe / aF.get(4).height, aAY.setTransform(sT, 0, 0, sT, Math.floor(aAf + .58 * aAe +
			.5 * sT * aF.get(4).width), Math.floor(aAb + aAU + .4 * aAe)), aAY.imageSmoothingEnabled = !0, aAY.drawImage(aF.get(4), -Math.floor(aF.get(4).width / 2), -Math.floor(aF.get(4).height / 2)), aAY.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAz(player) {
		aR.ae && (aAY.fillStyle = aj.aB3[aj.yz[player]])
	}

	function aAy(dw, aB4) {
		aAY.fillStyle = aB4, dw = aAW - 1 < dw ? aAW - 1 : dw;
		aB4 = Math.floor((dw === aAW - 1 ? 2 : 0 === dw ? 1.15 : 1) * aAe), aB4 = dw === aAW - 2 ? Math.floor(aAd + 9.15 * aAe) - Math.floor(aAd + 8.15 * aAe) : aB4;
		aAY.fillRect(0, Math.floor(aAd + (dw + (0 === dw ? 0 : .15)) * aAe), aAS, aB4)
	}

	function aB0(aB6, qd, dw) {
		aAY.fillText(aAj[qd], aAf, Math.floor(aAb + aAU + (aB6 + .5) * aAe)), 1 === aZ.gZ[dw] && (aAY.font = "italic " + aAV);
		qd = Math.floor(aAb + aAU + (aB6 + .5) * aAe);
		aAY.fillText(aZ.fp[dw], aAg, qd), 0 !== aZ.gZ[dw] && (aAY.font = aAV), dw < aR.bY && 2 !== aZ.gZ[dw] || aAY.fillRect(aAg, qd + .35 * aAs, aAi[dw], Math.max(1, .1 * aAs))
	}

	function aB1(aB6, dw) {
		aAY.fillText(aZ.ac[dw], aAh, Math.floor(aAb + aAU + (aB6 + .5) * aAe))
	}

	function aBF(iF) {
		return (iF -= dI.gap + aAd) < 0 ? Math.floor(iF / aAe) - 1 : iF < (aAW - 1) * aAe ? Math.floor(iF / aAe) : iF < aAR - aAd ? aAW - 1 : (iF -= aAR - aAd, aAW + Math.floor(iF / aAe))
	}

	function mx(iE, iF) {
		return iE >= dI.gap && iE < dI.gap + aAS && iF >= dI.gap && iF < dI.gap + aAR
	}
	this.j = function() {
			var dw;
			for (aAp = !1, aAr = aAq = aAo = 0, aAn = -1, aAW = aI.aJ.aK() ? 6 : 10, wk = (position = 0) === (wk = gG.ku.data[11].value) ? 10 : 1 === wk ? 5 : 1, aAm = !1, aAk = new Uint16Array(aAW + 1), aAl = new Uint32Array(aAW + 1), aAa = aR.bS,
				am = new Uint16Array(aAa), xD = new Uint16Array(aAa), dw = aAa - 1; 0 <= dw; dw--) am[dw] = dw, xD[dw] = dw;
			this.resize(!0), aAi = new Uint16Array(aR.bS);
			var aAu = Math.floor(aAS - aAg - aAf - aAZ);
			for (aAj = new Array(aR.bS), aAY.font = aAV, dw = aR.bS - 1; 0 <= dw; dw--) aAj[dw] = dw + 1 + ".", aZ.fp[dw] = aW.nU.aAv(aZ.fx[dw], aAV, aAu), aAi[dw] = Math.floor(aAY.measureText(aZ.fp[dw]).width);
			aAw()
		}, this.resize = function(j) {
			if (aAR = aI.aJ.aK() ? (aAS = Math.floor(.335 * aL.aM), Math.floor(aAW * aAS / 8)) : (aAS = Math.floor(.27 * aL.aM), Math.floor(aAW * aAS / 10)), aAS = Math.floor(.97 * aAS), (aAX = document.createElement("canvas")).width = aAS, aAX
				.height = aAR, aAY = aAX.getContext("2d", {
					alpha: !0
				}), aAb = .025 * aAS, aAU = .16 * aAS, aAc = 0 * aAS, aAd = Math.floor(.45 * aAb + aAU), aAe = (aAR - aAU - 2 * aAb - aAc) / aAW,
				aAX.height = aAR += aAe, __fx.leaderboardFilter.tabBarOffset = Math.floor(aAe * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aAR - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aAS,
				aAT = aW.bA.mN(1, Math.floor(.55 * aAU)), aAs = Math.floor((aI.aJ.aK() ? .67 : .72) * aAe), aAV = aW.bA.mN(0, aAs), aAY.font = aAV, aAf = Math.floor(.04 * aAS), aAg = Math.floor((aI.aJ.aK() ? .195 : .18) * aAS), aAZ = Math.floor(aAY
					.measureText("00920600").width), aAY.font = aAT, aAh = aAS - aAf, !j) {
				aAY.font = aAV;
				for (var dw = aR.bS - 1; 0 <= dw; dw--) aAi[dw] = Math.floor(aAY.measureText(aZ.fp[dw]).width);
				aAw()
			}
			aAt = aW.nU.aAv(L(206), aAT, .96 * aAS)
		}, this.a6O = function() {
			return aAS
		}, this.cv = function(oG, aAx) {
			(aAx || aAm && (oG || s.a6() % wk == 0)) && (aAm = !1, aAw())
		}, this.b2 = function() {
			! function() {
				for (var fm = aAa - 1; 0 <= fm; fm--) 0 === aZ.aa[am[fm]] && ! function(fm) {
					var aBD = am[fm];
					aAa--;
					for (var dw = fm; dw < aAa; dw++) am[dw] = am[dw + 1], xD[am[dw]] = dw;
					am[aAa] = aBD, xD[am[aAa]] = aAa
				}(fm)
			}();
			for (var aBB, m5 = aAa - 1, fm = 0; fm < m5; fm++) aZ.ac[am[fm]] < aZ.ac[am[fm + 1]] && (aBB = am[fm], am[fm] = am[fm + 1], am[fm + 1] = aBB, xD[am[fm]] = fm, xD[am[fm + 1]] = fm + 1);
			! function() {
				for (var b5 = aAm, sT = (aAm = !0, xD[aR.ad] >= aAW - 1 ? aAW - 2 : aAW - 1), dw = sT; 0 <= dw; dw--)
					if (aAk[dw] !== am[dw] || aAl[dw] !== aZ.ac[am[dw]]) return;
				(sT != aAW - 2 || aAk[aAW] === xD[aR.ad] && aAl[aAW] === aZ.ac[aR.ad]) && (aAm = b5)
			}();
			for (var dw = aAW - 1; 0 <= dw; dw--) aAk[dw] = am[dw], aAl[dw] = aZ.ac[am[dw]];
			aAk[aAW] = xD[aR.ad], aAl[aAW] = aZ.ac[aR.ad];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.mJ = function(iE, iF) {
			return !!mx(iE, iF) && ((__fx.utils.isPointInRectangle(iE, iF, dI.gap + 12, dI.gap + 12, aAd - 22, aAd - 22) && __fx.playerList.display(aZ.fx), true) &&
				!(iF - dI.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(iE - dI.gap)) && (aAo = s.t, aAp = !0, aAq = aAr = aBF(iF), o0.rh() && (iE = aBG(-1, aAr, aAW), aAn !== (iE = iE === aAW ? -
					1 : iE)) && (aAn = iE, aAw(), s.ap = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAw(), s.ap = !0;
		},
		this.qr = function(iE, iF) {
			if (__fx.utils.isPointInRectangle(iE, iF, dI.gap + 12, dI.gap + 12, aAd - 22, aAd - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAw(), s.ap = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAw(), s.ap = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(iE, iF, dI.gap, dI.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), iE - dI.gap
				)) return;
			var b5, aBE = aBF(iF);
			return aAp ? (b5 = position, (position = aBG(0, position += aAq - aBE, aR.bS - aAW)) !== b5 && (aBE = (aBE = aBG(-1, aAq = aBE, aAW)) !== aAW && mx(iE, iF) ? aBE : -1, aAn = aBE, aAw(), s.ap = !0), !0) : (aBE = (aBE = aBG(-1, aBE,
				aAW)) === aAW || !mx(iE, iF) || o0.rh() ? -1 : aBE, aAn !== aBE && (aAn = aBE, aAw(), s.ap = !0))
		}, this.rM = function(iE, iF) {
			if (!aAp) return !1;
			aAp = !1;
			var aBE = aBF(iF);
			var isEmptySpace = false;
			return o0.rh() && -1 !== aAn && (aAn = -1, aAw(), s.ap = !0), s.t - aAo < 350 && aAr === aBE && -1 !== (aBE = (aBE = aBG(-1, aBE, aAW)) !== aAW && mx(iE, iF) ? aBE : -1) && (iE = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(), am[
					__fx.leaderboardFilter.filteredLeaderboard[aBE + position] ?? (isEmptySpace = true, xD[aR.ad])]) : am[aBE + position]), aBE === aAW - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : xD[aR.ad]) >=
				position + aAW - 1 && (iE = aR.ad), !isEmptySpace && aR.ae && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(iE, aZ.fx, aR.ay), 0 !== aZ.aa[iE] && !isEmptySpace) && ct.nj(iE, 800, !1, 0), !0
		}, this.qu = function(iE, iF, deltaY) {
			var aBH;
			return !(aAp || aR.bg || (aBH = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !mx(iE, iF)) || (iE = (iE = aBG(-1, aBF(iF), aAW)) === aAW || o0.rh() ? -1 : iE, 0 < deltaY ? position < aR.bS - aAW && (position += Math.min(aR.bS - aAW -
				position, aBH), aAn = iE, aAw(), s.ap = !0) : 0 < position && (position -= Math.min(position, aBH), aAn = iE, aAw(), s.ap = !0), 0))
		}, this.mP = function() {
			aC.drawImage(aAX, dI.gap, dI.gap)
		}
}

function pU() {
	var aBI = 0,
		aBJ = 0;
	this.rH = function(iE, iF) {
		aBI = iE, aBJ = iF
	}, this.rX = function(code) {
		var m3, m7, go;
		aR.aw || cd.d9 || (aW.aX.ga(0) || aW.aX.ga(1)) && aW.aX.fT(aR.ad) && (cY.mJ(aBI, aBJ) ? cY.rI = !1 : cg.mJ(aBI, aBJ) || (m3 = cI.ut(aBI), m7 = cI.uu(aBJ), go = cI.i1(m3, m7), cI.uv(m3, m7) && (0 === code ? function(go) {
			var aBN, gt, h9;
			aR.bh ? -1 !== (aBN = oE.a19(go)) && c7.my.a0z(go) : (gt = cI.h3(go), cC.z4(gt) ? (aBN = nu.a1F.a1G(gt)) && (h9 = cI.h3(aBN), h9 = cC.hH(h9) ? aR.bS : cC.hJ(h9), c7.my.a16(cY.a0y(), aBN, h9)) : (aBN = oE.a1I(go)) <
				0 || (gt = cI.h3(aBN), cC.hH(gt) ? hK.a1J(aR.ad) ? c7.my.a11(cY.a0y(), aR.bS) : cm.a1K(aR.ad) && cq.a12(aR.bS, cY.a0y()) : (h9 = cC.hJ(gt), hK.hL(h9, aR.ad) && (hK.a1N(aR.ad, h9) ? c7.my.a11(cY.a0y(), h9) : cm
					.a1K(aR.ad) && cq.a12(h9, cY.a0y())))))
		}(go) : 1 === code ? function(go) {
			cJ.a1D.a1E(aR.ad, go) && c7.my.a13(cY.a0y(), bw.hj[7])
		}(go) : 2 === code && function(go) {
			cJ.a1B.a1C(aR.ad, go) && c7.my.a14(cY.a0y())
		}(go))))
	}, this.rY = function() {
		if (!aR.aw && !cd.d9 && aW.aX.ga(1)) {
			var fl = aR.ad;
			if (aW.aX.fT(fl)) {
				var du = cm.a1K(fl);
				if (du < 1) ! function() {
					var fl = aR.ad;
					if (hK.a1J(fl)) c7.my.a11(cY.a0y(), aR.bS);
					else
						for (var yo = cC.yo, iZ = aZ.iZ, du = iZ[fl].length, a73 = Math.floor(Math.random() * du), dw = 0; dw < du; dw++)
							for (var v4 = 3; 0 <= v4; v4--) {
								var n0 = iZ[fl][(dw + a73) % du] + yo[v4];
								if (cC.hE(n0)) {
									n0 = cC.hJ(n0);
									if (n0 !== fl && (!aR.ae || hK.hL(fl, n0))) return c7.my.a11(cY.a0y(), n0)
								}
							}
				}();
				else {
					for (var aBP = 0, hm = cm.aBQ(fl, 0), dw = 1; dw < du; dw++) {
						var ft = cm.aBQ(fl, dw);
						ft < hm && (hm = ft, aBP = dw)
					}
					c7.my.a11(cY.a0y(), cm.aBR(fl, aBP))
				}
			}
		}
	}, this.rZ = function() {
		if (!aR.aw && !cd.d9 && aW.aX.fT(aR.ad) && aW.aX.ga(1)) return ca.mH ? ca.a1w(aR.ad) ? void c7.my.a1u(1) : void 0 : void(ca.a1z(aR.ad) && c7.my.rZ())
	}
}

function oN() {
	this.dd = new aBT, this.kW = new aBU, this.nJ = new aBV, this.j = function() {
		this.dd.j()
	}
}

function a4E() {
	function aBY(aBb) {
		p.v.a3z && 1 === p.v.a40[2] && n.uN(29).aBc(), p.v.a3z = 0, n.uN(29).aBd(), 0 !== p.v.a3W[p.v.a40[0]].aAK && !aBb || n.uN(29).aBe(), p.t0.a98()
	}
	this.a3W = new Array(4), this.a40 = [0, 0, 1, 0], this.a3z = 0, this.aBW = [0, 0], this.j = function() {
		for (var dw = 0; dw < this.a3W.length; dw++) this.a3W[dw] = new aAJ;
		this.a40[0] = gG.ku.data[158].value
	}, this.aBX = function() {
		aBY(!0)
	}, this.aBZ = function() {
		for (var dw = 0; dw < p.v.a3W.length; dw++) {
			var k = p.v.a3W[dw];
			0 === k.aAK ? k.aAP = 0 : (k.aAN = Math.max(k.aAN - k.aAP % 2, 0), k.aAP++)
		}
		aBY(!1)
	}, this.aBf = function(a3P) {
		this.a40[0] !== a3P || this.a40[2] || n.uN(29).aBg()
	}
}

function y3() {
	var aBh, aBj = new Uint16Array(8);

	function aBk(size, player) {
		for (var dw = aZ.ig[player].length - 1; size <= dw; dw--) cC.zI(aZ.ig[player][dw], player)
	}
	this.j = function() {
		aBh = 0
	}, this.a1d = function(player, a1a) {
		return bw.qZ[1] = aZ.ig[player].length, bw.qZ[0] === aR.bS ? cK.y2.a52(player) : this.a50(player, bw.qZ[0]), (0 !== bw.qZ[1] || 0 !== aZ.ig[player].length) && !(!a1a && bw.qZ[1] === aZ.ig[player].length || (bw.qZ[0] === aR.bS ? aZ.ff[
			player]++ : aZ.fd[player]++, 0))
	}, this.a1f = function(player) {
		aR.ae && (cK.y4.a4a[player] = 1), aBk(bw.qZ[1], player), cm.a1Z(player, bw.qK[0], bw.qZ[0]), cj.a22(player, !1)
	}, this.a51 = function(player, hI, du, hm) {
		var aBl = dU.dV(12 * aZ.bN[player], 1024);
		hm -= hm >= dU.dV(aZ.bN[player], 2) ? aBl : 0, aBk(du, player), cm.a1Z(player, hm, hI), aZ.bN[player] -= hm + aBl, cj.a22(player, !1)
	}, this.a50 = function(player, hI) {
		for (var v4, yo = cC.yo, dw = aZ.iZ[player].length - 1; 0 <= dw; dw--)
			if (cC.z9(aZ.iZ[player][dw]))
				for (v4 = 3; 0 <= v4; v4--)
					if (cC.hE(aZ.iZ[player][dw] + yo[v4]) && cC.hJ(aZ.iZ[player][dw] + yo[v4]) === hI) {
						aZ.ig[player].push(aZ.iZ[player][dw]);
						break
					}
	}, this.a52 = function(player) {
		for (var yo = cC.yo, dw = aZ.iZ[player].length - 1; 0 <= dw; dw--)
			if (cC.z9(aZ.iZ[player][dw]))
				for (var v4 = 3; 0 <= v4; v4--)
					if (cC.hH(aZ.iZ[player][dw] + yo[v4])) {
						aZ.ig[player].push(aZ.iZ[player][dw]);
						break
					}
	}, this.a4i = function(player, aBm) {
		var dw, fm, v4, aBS, du = aZ.iZ[player].length,
			yL = 256 <= du ? 12 : 32 <= du ? 6 : 1,
			m4 = du - 1 - c3.a04(yL),
			yo = cC.yo;
		aBh = 0;
		loop: for (dw = m4; 0 <= dw; dw -= yL)
			for (v4 = 3; 0 <= v4; v4--)
				if ((aBS = cC.hH(aZ.iZ[player][dw] + yo[v4]) ? aR.bS : cC.hJ(aZ.iZ[player][dw] + yo[v4])) === aR.bS || cC.hE(aZ.iZ[player][dw] + yo[v4]) && aBS !== player && (aBm || hK.hL(player, aBS))) {
					for (fm = aBh - 1; 0 <= fm; fm--)
						if (aBj[fm] === aBS) continue loop;
					if (aBj[aBh] = aBS, 8 <= ++aBh) return !0
				}
		return 0 < aBh
	}, this.a4j = function(player, aBm) {
		var dw, v4, aBS, yo = cC.yo;
		for (aBh = 0, dw = aZ.iZ[player].length - 1; 0 <= dw; dw--)
			for (v4 = 3; 0 <= v4; v4--)
				if ((aBS = cC.hH(aZ.iZ[player][dw] + yo[v4]) ? aR.bS : cC.hJ(aZ.iZ[player][dw] + yo[v4])) === aR.bS || cC.hE(aZ.iZ[player][dw] + yo[v4]) && aBS !== player && (aBm || hK.hL(player, aBS))) return aBj[aBh++] = aBS, !0;
		return !1
	}, this.a4l = function() {
		for (var fn, dw = aBh - 1; 0 <= dw; dw--)
			if (aBj[dw] === aR.bS) {
				for (aBh--, fn = dw; fn < aBh; fn++) aBj[fn] = aBj[fn + 1];
				return !0
			} return !1
	}, this.a4k = function(player) {
		for (var fn, dw = aBh - 1; 0 <= dw; dw--)
			if (cm.a1b(player, aBj[dw]))
				for (aBh--, fn = dw; fn < aBh; fn++) aBj[fn] = aBj[fn + 1];
		return 0 === aBh
	}, this.a4q = function() {
		for (var dw = aBh - 1; 0 <= dw; dw--)
			if (aW.aX.aY(aBj[dw])) return !0;
		return !1
	}, this.a4r = function() {
		for (var dw = aBh - 1; 0 <= dw; dw--) aW.aX.aY(aBj[dw]) || (aBj[dw] = aBj[--aBh]);
		return 0 < aBh
	}, this.a4o = function(player) {
		for (var fn, aBn = aBj[0], aBo = aZ.bN[aBn] + cm.j9(aBn, player), dw = aBh - 1; 1 <= dw; dw--)(fn = aZ.bN[aBj[dw]] + cm.j9(aBj[dw], player)) < aBo && (aBn = aBj[dw], aBo = fn);
		return aBn
	}, this.a4t = function(player) {
		var aO, aBp = aBj[0];
		if (1 !== aBh)
			for (var aBq = dU.dV(aZ.sY[player] + aZ.sX[player], 2), aBr = dU.dV(aZ.sa[player] + aZ.sZ[player], 2), he = aBs(aBq - dU.dV(aZ.sY[aBp] + aZ.sX[aBp], 2)) + aBs(aBr - dU.dV(aZ.sa[aBp] + aZ.sZ[aBp], 2)), dw = aBh - 1; 1 <= dw; dw--)(aO =
				aBs(aBq - dU.dV(aZ.sY[aBj[dw]] + aZ.sX[aBj[dw]], 2)) + aBs(aBr - dU.dV(aZ.sa[aBj[dw]] + aZ.sZ[aBj[dw]], 2))) < he && (he = aO, aBp = aBj[dw]);
		return aBp
	}, this.a4z = function() {
		for (var aBt = aBj, aBu = aBt[0], bN = aZ.bN, aBv = bN[aBu], dw = aBh - 1; 1 <= dw; dw--) {
			var fl = aBt[dw],
				fn = bN[fl];
			aBv < fn && (aBu = fl, aBv = fn)
		}
		return aBu
	}, this.a4s = function() {
		return aBj[c3.a04(aBh)]
	}
}

function pD() {
	this.aBw = null, this.j = function() {
		10 !== aR.aV ? this.aBw = null : this.aBw = new Uint32Array(aR.bS)
	}, this.b2 = function() {
		10 === aR.aV && this.sr()
	}, this.sr = function() {
		for (var fl, target, aBx, aBw = this.aBw, aBy = bF.q3, qD = aZ.bN, dw = bF.bG - 1; 0 <= dw; dw--)(fl = aBy[dw]) >= aR.bY || (target = Math.max(dU.dV(qD[fl], 4), 2048), aBx = Math.max(bL.aBz(fl), 100), aBw[fl] += dU.dV(aBx * target, 1e4),
			aBw[fl] > target && (aBw[fl] = target))
	}, this.qJ = function(player, hm) {
		return hm > this.aBw[player] ? (hm = this.aBw[player], this.aBw[player] = 0) : this.aBw[player] -= hm, hm
	}
}

function pY() {
	this.jq = new aC0, this.ku = new aC1, this.gH = new kt, this.v = new xo, this.j = function() {
		this.ku.j(), (new aC2).j()
	}
}

function od() {
	var aC3, aC4, aN, iE, iF, aC5, aC6;
	this.j = function() {
		aC3 = new Array(2), aC4 = new Array(2), this.rJ = !1, aC6 = aC5 = sS = sR = 0, nN = 1, this.resize()
	}, this.resize = function() {
		aN = (aN = Math.floor((aI.aJ.aK() ? .072 : .0502) * aL.aM)) < 8 ? 8 : aN;
		for (var dw = 1; 0 <= dw; dw--) aC3[dw] = document.createElement("canvas"), aC3[dw].width = aN, aC3[dw].height = aN, aC4[dw] = aC3[dw].getContext("2d", {
			alpha: !0
		});
		this.a6N(),
			function() {
				for (var aCP = Math.floor(1 + aN / 20), dw = 1; 0 <= dw; dw--) aC4[dw].clearRect(0, 0, aN, aN), aC4[dw].fillStyle = fk.e5, aC4[dw].beginPath(), aC4[dw].arc(aN / 2, aN / 2, aN / 2 - aCP, 0, 2 * Math.PI), aC4[dw].fill(), aC4[dw]
					.lineWidth = aCP, aC4[dw].fillStyle = fk.eC, aC4[dw].strokeStyle = fk.eC, aC4[dw].beginPath(), aC4[dw].arc(aN / 2, aN / 2, aN / 2 - aCP, 0, 2 * Math.PI), aC4[dw].stroke(), nX(aC4[dw], 0, 0, aN, aCP, .3, 0 === dw)
			}()
	}, this.nP = function() {
		return -sR / nN
	}, this.nQ = function() {
		return -sS / nN
	}, this.aCB = function(aCC, mK) {
		sR = nN * aCC - mK
	}, this.aCD = function(aCE, mL) {
		sS = nN * aCE - mL
	}, this.mJ = function(aC9, aCA) {
		return aR.bg || ! function(aC9, aCA) {
			return Math.pow(aC9 - (iE + aN / 2), 2) + Math.pow(aCA - (iF + aN / 2), 2) < aN * aN / 4 || Math.pow(aC9 - (iE + aN / 2), 2) + Math.pow(aCA - (iF + 2 * aN), 2) < aN * aN / 4
		}(aC9, aCA) || gG.ku.data[8].value ? (ct.m5() && (this.rJ = !0, aC5 = aC9, aC6 = aCA), !1) : aCA < iF + 1.25 * aN ? this.qu(Math.floor(aL.aN / 2), Math.floor(aL.aO / 2), -200) : this.qu(Math.floor(aL.aN / 2), Math.floor(aL.aO / 2),
			200)
	}, this.qr = function(aC9, aCA) {
		var aCF, aCG, hz, i0;
		return !ct.m5() || (aCF = sR, aCG = sS, sR += hz = aC5 - aC9, sS += i0 = aC6 - aCA, cn.qr(hz, i0), this.yP(), aC5 = aC9, aC6 = aCA, aCF !== sR) || aCG !== sS
	}, this.qu = function(hY, hZ, deltaY) {
		var aH;
		if (ct.m5()) {
			if (0 < deltaY) aH = (aH = 500 / (500 + deltaY)) < .5 ? .5 : aH;
			else {
				if (!(deltaY < 0)) return !1;
				aH = 2 < (aH = (500 - deltaY) / 500) ? 2 : aH
			}
			this.aCH(hY, hZ, aH), s.ap = !0
		}
		return !0
	}, this.aCH = function(iE, iF, gt) {
		var li;
		gt = li = (li = 1024 < (li = gt) * nN ? 1024 / nN : li) * nN < .125 ? .125 / nN : li, cn.zoom(gt, iE, iF),
			function(li, hY, hZ) {
				nN *= li, sR = (sR + hY) * li - hY, sS = (sS + hZ) * li - hZ, cX.yP()
			}(gt, iE, iF)
	}, this.yP = function() {
		var aCK = aL.aN / 16,
			aCL = 0,
			aCM = aL.aO / 16,
			aCN = 0;
		sR < -aL.aN + aCK && (aCL = -aL.aN + aCK - sR), sR > nN * gu.gv - aCK && (aCL = nN * gu.gv - aCK - sR), sS < -aL.aO + aCM && (aCN = -aL.aO + aCM - sS), sS > nN * gu.h1 - aCM && (aCN = nN * gu.h1 - aCM - sS), sR += aCL, sS += aCN, o7
		.aCO(), cn.x0(aCL, aCN)
	}, this.a6N = function() {
		iE = aL.aN - aN - dI.gap, iF = Math.floor(aL.aO / 2 - 1.25 * aN)
	}, this.mP = function() {
		gG.ku.data[8].value || (aC.drawImage(aC3[0], iE, iF), aC.drawImage(aC3[1], iE, Math.floor(iF + 3 * aN / 2)))
	}
}

function aCQ() {
	var jE, jF, jG, jX;

	function jK() {
		jO(), 2 === aR.data.playerNamesType && 1 === aW.jS.jW(aR.data.playerNamesData).length && (aR.data.playerNamesType = 0), 2 !== aR.data.playerNamesType && (aR.data.playerNamesData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		2 === aR.data.playerNamesType && aW.jS.aCR(jG.jU(), aR.data.playerNamesData, 20)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(207), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), jb.je(new g9({
			gF: [L(208), L(209), L(14)],
			value: aR.data.playerNamesType
		}, function(dS) {
			jO(), aR.data.playerNamesType = dS, n.d7(23)
		})), jb.jf(new jg), jb.jf(new jh({
			value: aR.data.selectableName
		}, L(210), function(value) {
			aR.data.selectableName = value
		})), jX.push(jb)
	}(jX = []), function(jX) {
		var jb;
		2 === aR.data.playerNamesType && ((jb = new jc).jd("Data"), jG = new jk(0, 1, 0, 1), aR.data.playerNamesData && aR.data.playerNamesData.length === aR.bS || (aR.data.playerNamesData = new Array(aR.bS), aR.data.playerNamesData.fill(
			"")), jG.jl(aW.fv.jm(aR.data.playerNamesData, 1, '"')), jb.jf(jG), jX.push(jb))
	}(jX), jX))
}

function a7c() {
	var a3G = [L(211), L(212), L(213), L(214), L(215), L(216), L(217)],
		aCS = [100, 60, 30, 15, 6, 1],
		aCT = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		aCU = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		aCV = ["👢", "🔇", "✂️", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		aCW = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a3M = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.aCX = function(id, rT, dS) {
		rT = this.aCY(rT);
		return +(aCT[rT][id] > dS)
	}, this.aCY = function(rT) {
		for (var dw = 0; dw < aCS.length; dw++)
			if (aCS[dw] <= rT) return dw;
		return aCS.length
	}, this.a8C = function(rT) {
		return a3G[this.aCY(rT)]
	}, this.a3L = function(id, aCZ) {
		return aCU[id].replace(new RegExp("x", "g"), aCZ)
	}, this.a3N = function(id, aCZ) {
		return aCW[id].replace(new RegExp("x", "g"), aCZ)
	}, this.a9b = function(id, aCa) {
		return aCV[id] + (this.a3M[id][aCa].length ? " (" + this.a3M[id][aCa] + ")" : "")
	}
}

function pZ() {
	this.aCb = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aB3 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", fk.eC, "rgb(170,170,170)"
	], this.aCc = [fk.eC, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", fk.eC, fk.e3], this.aCd = [fk.e3, fk.eC, fk.eC, fk.eC, fk.e3, fk.e3, fk.e3, fk.e3, fk.eC];
	var aCe = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.xV = ["rgba(" + aCe[0] + ",", "rgba(" + aCe[1] + ",", "rgba(" + aCe[2] + ",", "rgba(" + aCe[3] + ",", "rgba(" + aCe[4] + ",", "rgba(" + aCe[5] + ",", "rgba(" + aCe[6] + ",", "rgba(" + aCe[7] + ",", "rgba(" + aCe[8] + ",", "rgba(" + aCe[9] +
			","
		], this.xW = ["rgb(" + aCe[0] + ")", "rgb(" + aCe[1] + ")", "rgb(" + aCe[2] + ")", "rgb(" + aCe[3] + ")", "rgb(" + aCe[4] + ")", "rgb(" + aCe[5] + ")", "rgb(" + aCe[6] + ")", "rgb(" + aCe[7] + ")", "rgb(" + aCe[8] + ")", "rgb(" + aCe[9] +
			")"], this.fo = null, this.a37 = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aCf = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.ak = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.al = new Uint8Array(aR.bS), this.yz = new Uint8Array(aR.bS), this.aCg = new Uint16Array(aR.bS), this.aCh = new Uint16Array(this.ak.length + 1), this.aCi = new Uint16Array(this.ak.length), this
		.cD = function() {
			this.fo = [L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226)]
		}, this.j = function() {
			if (this.al.fill(0), this.yz.fill(0), this.aCj(), aR.ae) {
				if (9 === aR.aV) {
					for (var al = aj.al, dw = aR.data.teamPlayerCount[7] - 1; 0 <= dw; dw--) al[dw] = 1;
					var du = aR.bS;
					for (dw = aR.data.teamPlayerCount[7]; dw < du; dw++) al[dw] = 2;
					aj.ak[1] = 7, aj.ak[2] = 8
				} else aR.ay ? function() {
					var aCf = aj.aCf,
						colorsData = aR.data.colorsData;
					if (!aR.data.selectableColor)
						for (var dw = aR.bY - 1; 0 <= dw; dw--) colorsData[dw] = c3.a04(262144);
					var aCu = 0,
						he = 768,
						nB = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aR.data.teamPlayerCount;
					for (dw = 0; dw < 9; dw++)
						if (teamPlayerCount[dw]) {
							for (var kR = 0, fn = 0; fn < 3; fn++) kR += Math.abs(aCf[dw][fn] - nB[fn]);
							kR < he && (aCu = dw, he = kR)
						} var aCv = new Uint16Array(9);
					for (dw = 0; dw < 9; dw++) aCv[dw] = teamPlayerCount[dw];
					var ak = aj.ak,
						aCw = new Uint8Array(9),
						mv = (ak[0] = 0, 1);
					for (dw = 1; dw < 9; dw++) aCv[dw] && (aCw[dw] = mv, ak[mv++] = dw);
					var m4 = aR.bY,
						al = aj.al;
					aCv[aCu] ? (aCv[aCu]--, al[0] = aCw[aCu]) : m4 = 0;
					var dx = 0;
					for (dw = m4; dw < aR.bc; dw++) {
						var n0 = ak[dx];
						if (aCv[n0]) aCv[n0]--, al[dw] = aCw[n0];
						else if (dw--, 9 <= ++dx) return console.log("error 325")
					}
				}() : this.b2();
				! function() {
					for (var du = aR.bS, aCg = aj.aCg, aCh = aj.aCh, aCi = aj.aCi, al = aj.al, ak = aj.ak, aD5 = ak.length, ku = new Array(aD5), dw = 0; dw < aD5; dw++) ku[dw] = [];
					for (dw = 0; dw < du; dw++) ku[ak[al[dw]]].push(dw);
					for (dw = 1; dw <= aD5; dw++) aCh[dw] = aCh[dw - 1] + ku[dw - 1].length;
					for (dw = 0; dw < aD5; dw++)
						for (var mv = ku[dw].length, g4 = aCh[dw], n0 = 0; n0 < mv; n0++) aCg[n0 + g4] = ku[dw][n0];
					var bY = aR.bY;
					for (dw = 0; dw < aD5; dw++)
						for (mv = ku[dw].length, g4 = aCh[dw], n0 = 0; n0 < mv; n0++)
							if (aCg[n0 + g4] >= bY) {
								aCi[dw] = n0;
								break
							}
				}(), ! function() {
					for (var du = aR.bS, al = aj.al, yz = aj.yz, ak = aj.ak, dw = 0; dw < du; dw++) yz[dw] = ak[al[dw]];
					9 === aR.aV && yz.fill(1, du - by.a06[5])
				}()
			}
		}, this.aCj = function() {
			for (var dw = this.ak.length - 1; 0 <= dw; dw--) this.ak[dw] = dw
		}, this.b2 = function() {
			var w4 = new Uint8Array(aR.bY),
				w5 = new Uint8Array(aR.bY),
				aCo = new Uint16Array(8),
				aCp = new Uint16Array(this.ak.length);
			this.aCq(w4, w5, aCo, 1), this.yp(aCo), this.aCr(aCp, w4, w5), this.aCs(w4, w5, aCp), this.aCt()
		}, this.aCq = function(w4, w5, aCv, aCx) {
			for (var fn, jj, aCy, du = this.ak.length - aCx, dY = new Uint16Array(du), aCf = this.aCf, colorsData = aR.data.colorsData, dw = aR.bY - 1; 0 <= dw; dw--) {
				for (fn = du; aCx <= fn; fn--) dY[fn - 1] = Math.abs(4 * (colorsData[dw] >> 12) - aCf[fn][0]) + Math.abs(4 * (colorsData[dw] >> 6 & 63) - aCf[fn][1]) + Math.abs(4 * (63 & colorsData[dw]) - aCf[fn][2]);
				for (aCy = 768, fn = du - 1; 0 <= fn; fn--) dY[jj = (fn + dw) % du] < aCy && (aCy = dY[jj], w4[dw] = jj);
				for (aCv[w4[dw]] += 4, aCy = 768, fn = du - 1; 0 <= fn; fn--) dY[jj = (fn + dw) % du] < aCy && jj !== w4[dw] && (aCy = dY[jj], w5[dw] = jj);
				aCv[w5[dw]]++
			}
		}, this.yp = function(aCv) {
			for (var fn, a0n, du = this.ak.length - 1, dw = du; 0 <= dw; dw--) this.ak[dw] = dw;
			for (dw = du - 1; 0 <= dw; dw--) aCv[dw]++;
			for (dw = 1; dw <= du; dw++) {
				for (a0n = 0, fn = 1; fn < du; fn++) aCv[fn] > aCv[a0n] && (a0n = fn);
				aCv[a0n] = 0, this.ak[dw] = a0n + 1
			}
		}, this.aCr = function(aCp, w4, w5) {
			var fn, fz, dx, kR, jj, aH, fh, aCz = this.ak.length - 1,
				aD0 = new Uint16Array(aCz),
				aD1 = [],
				aD2 = 0,
				fy = [],
				aD3 = [];
			loop: for (var dw = 0; dw < aR.bY; dw++)
				if (null !== (fz = aW.fv.g0(aZ.fx[dw]))) {
					for (fn = fy.length - 1; 0 <= fn; fn--)
						if (fz === fy[fn]) {
							aD3[fn].push(dw), aD2 = Math.max(aD2, aD3[fn].length);
							continue loop
						} fy.push(fz), aD1.push(!1), aD3.push([dw]), aD2 = Math.max(aD2, 1)
				}
			for (; 2 < aR.bj && aD2 > dU.dV(aR.bY, aR.bj);) aR.bj--, aR.aV--;
			for (fn = fy.length - 1; 0 <= fn; fn--) {
				for (kR = -1, dx = fy.length - 1; 0 <= dx; dx--) !aD1[dx] && (-1 === kR || aD3[dx].length > aD3[kR].length) && (kR = dx);
				for (dx = aCz - 1; 0 <= dx; dx--) aD0[dx] = 1;
				for (dx = aD3[kR].length - 1; 0 <= dx; dx--) aD0[w4[aD3[kR][dx]]] += 3, aD0[w5[aD3[kR][dx]]]++;
				for (dw = aCz - 1; 0 <= dw; dw--) {
					for (jj = kR % aCz, dx = aCz - 1; 0 <= dx; dx--) aD0[dx] > aD0[jj] && (jj = dx);
					for (aH = -1, dx = aR.bj; 0 < dx; dx--)
						if (this.ak[dx] === jj + 1) {
							aH = dx;
							break
						} if (aD0[jj] = 0, -1 !== aH) {
						for (fh = 0, dx = aR.bj; 0 < dx; dx--) aCp[aH] > aCp[dx] && fh++;
						if (fh !== aR.bj - 1) {
							for (dx = aD3[kR].length - 1; 0 <= dx; dx--) aCp[aH]++, this.al[aD3[kR][dx]] = aH;
							break
						}
					}
				}
				aD1[kR] = !0
			}
		}, this.aCs = function(w4, w5, aCp) {
			for (var dw, ld, du = this.ak.length - 1, border = dU.dV(aR.bY, aR.bj), aD4 = (0 < aR.bY % aR.bj && border++, new Uint8Array(1 + du)), fn = du; 1 <= fn; fn--) aD4[this.ak[fn]] = fn;
			for (dw = 0; dw < aR.bY; dw++) ld = aD4[w4[dw] + 1], 0 === this.al[dw] && ld <= aR.bj && aCp[ld] < border && (aCp[ld]++, this.al[dw] = ld);
			for (dw = 0; dw < aR.bY; dw++) ld = aD4[w5[dw] + 1], 0 === this.al[dw] && ld <= aR.bj && aCp[ld] < border && (aCp[ld]++, this.al[dw] = ld);
			for (fn = aR.bj; 1 <= fn; fn--)
				for (dw = aR.bY - 1; 0 <= dw && !(aCp[fn] >= border); dw--) 0 === this.al[dw] && (aCp[fn]++, this.al[dw] = fn)
		}, this.aCt = function() {
			for (var dw = aR.bY; dw < aR.bS; dw++) this.al[dw] = 1 + dw % aR.bj
		}
}

function pP() {
	this.zV = new aD6, this.nR = new aD7, this.v = new aD8, this.tY = new aD9, this.aDA = new aDB, this.aDC = new aDD, this.w9 = new aDE, this.a1k = new aDF, this.aDG = new lt, this.aDH = new aDI, this.a1h = new aDJ, this.a1D = new aDK, this.ly =
		new aDL, this.sr = new gi, this.a1B = new aDM, this.aDN = new aDO, this.a1q = new aDP, this.j = function() {
			this.ly.j(), this.nR.j(), this.v.j(), this.tY.j(), this.aDA.j(), this.aDH.j(), this.aDN.j()
		}, this.mP = function() {
			this.aDH.mP(), this.nR.mP()
		}
}

function jh(aDQ, aDR, aDS) {
	function click() {
		var value = 1 - aDQ.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + aDR, void 0 !== aDQ.dS ? gG.gH.gI(aDQ.dS, value) : aDQ.value = value, aDS && aDS(value)
	}
	var jj;
	aDR = aDR || L(227), this.jj = document.createElement("p"), (jj = this.jj).textContent = (aDQ.value ? "🟩 " : "⬜ ") + aDR, jj.style.margin = "0", jj.style.marginBottom = "0.5em", jj.style.cursor = "pointer", jj.addEventListener("click", click)
}

function aDT(aDU, aDV) {
	var aDc, self, aDW = document.createElement("div"),
		aDX = document.createElement("div"),
		aDY = document.createElement("div"),
		aDZ = null,
		aDd = (this.ue = new ji({
			value: "",
			dS: -1
		}, 0, aDa, function(jj) {
			jj.target.value = aW.fv.aDj(jj.target.value), aDZ.sv.textContent = 127 - jj.target.value.length
		}), 0),
		aDe = 1,
		aDf = 0,
		aDg = 1048575;

	function aDa() {
		aDU(), aDZ.sv.textContent = 127
	}

	function aDn(aDm, dg) {
		dg && (dg.si = 1, aDm.appendChild(p.mi.transform(dg)))
	}

	function aDo(oG) {
		aDe ? aDW.scrollTop = aDW.scrollHeight : oG && (aDW.scrollTop = aDf)
	}
	this.rL = function(aDk) {
			aDg = 1048575, aDX.textContent = "", aDk || this.aDl()
		}, this.aDl = function() {
			var a3P = p.v.a40[0],
				a3P = p.v.a3W[a3P],
				a3Y = a3P.a3Y,
				du = a3Y.length,
				m4 = 1048575 === aDg ? 0 : du - (a3P.aAO - aDg + 1048575) % 1048575;
			if (aDg = a3P.aAO, !(du <= (m4 = Math.max(m4, 0)))) {
				for (var aDm = document.createDocumentFragment(), dw = m4; dw < du; dw++) aDn(aDm, p.sr.tN(a3Y[dw], p.sr.tO(a3Y[dw])));
				aDX.appendChild(aDm), aDo()
			}
		}, this.aDp = function(sl) {
			var aDm = document.createDocumentFragment();
			aDn(aDm, sl), aDX.appendChild(aDm), aDo()
		}, this.show = function(dD) {
			dD.appendChild(aDW), dD.appendChild(aDY), this.resize(dD)
		}, this.jn = function(dD) {
			dD.removeChild(aDW), dD.removeChild(aDY)
		}, this.resize = function(dD) {
			aDd = dD ? dD.offsetHeight : aDd;
			var dD = aW.bA.dJ(.04, .75),
				ry = Math.max(dD, aDd - dD),
				aDr = aL.aN / aL.bC,
				aDs = .7 * aDr,
				ry = (aDY.style.top = aW.bA.dH(aDd - dD), aDY.style.height = aW.bA.dH(dD), aDW.style.top = aW.bA.dH(aDd - dD - ry), aDW.style.height = aW.bA.dH(ry), aW.bA.a5C(aDW, 2), this.ue.jj.style.width = aW.bA.dH(aDs), this.ue.jj.style
					.fontSize = aDc.button.style.fontSize = aW.bA.dH(.5 * dD), aW.bA.a5C(this.ue.jj, 6), aDc.button.style.left = aW.bA.dH(aDs), aDc.button.style.width = aW.bA.dH(aDr - aDs), .385 * dD);
			aI.aJ.aK() && (ry *= .8 - .12 * (aL.aN > aL.aO)), aDX.style.marginLeft = aDX.style.marginRight = aW.bA.dH(.5 * ry), aDX.style.fontSize = aW.bA.dH(ry), aDo(1)
		}, (self = this).ue.jj.aDh = 127, aDW.style.position = "absolute", aDW.style.top = "0", aDW.style.left = "0", aDW.style.width = "100%", aDW.style.overflowX = "hidden", aDW.style.overflowY = "auto", aDW.style.font = "inherit", aDW.style
		.backgroundColor = fk.eA, aDW.addEventListener("scroll", function() {
			aDf = aDW.scrollTop, aDe = aDf < aDW.scrollHeight - aDW.clientHeight - 2 ? 0 : 1
		}), aDX.style.font = "inherit", aDY.style.position = "absolute", aDY.style.left = "0", aDY.style.width = "100%", self.ue.jj.setAttribute("placeholder", L(228)), self.ue.jj.style.position = "absolute", self.ue.jj.style.top = "0", self.ue.jj
		.style.left = "0", self.ue.jj.style.height = "100%", self.ue.jj.style.backgroundColor = fk.e7, self.ue.jj.style.textAlign = "center", (aDc = new jJ(L(79), aDa)).button.top = "0", aDc.button.style.position = "absolute", aDc.button.style
		.height = "100%", aDc.a6B(fk.fN), aDZ = new aDi("127", aDc.button, 1, 1), aDW.appendChild(aDX), aDY.appendChild(self.ue.jj), aDY.appendChild(aDc.button)
}

function sG() {
	this.a5Y = function(a49, hR, hS) {
		dW.cN(75), dW.dh(1, 0), dW.dh(6, 21), dW.dh(6, a49), dW.dh(1, +(hR < 0)), dW.dh(1, +(hS < 0)), dW.dh(30, Math.abs(hR)), dW.dh(30, Math.abs(hS)), u.v.send(0, dW.ju)
	}, this.a5Z = function(a49, a5a, a5b) {
		dW.cN(18 + 16 * a5a.length + 30), dW.dh(1, 0), dW.dh(6, 22), dW.dh(6, a49), u.n9.nA(a5a), dW.dh(30, a5b), u.v.send(0, dW.ju)
	}, this.a5g = function(a49, a5a, a5b) {
		dW.cN(73), dW.dh(1, 0), dW.dh(6, 28), dW.dh(6, a49), kV.dd.aDu(a5a, 5), dW.dh(30, a5b), u.v.send(0, dW.ju)
	}, this.a5c = function(a5d, fy) {
		for (var du = fy.length, a4W = 0, dw = 0; dw < du; dw++) a4W += fy[dw].length;
		for (dW.cN(21 + 3 * du + 16 * a4W), dW.dh(1, 0), dW.dh(6, 23), dW.dh(3, a5d), dW.dh(4, du), dW.dh(7, a4W), dw = 0; dw < du; dw++) dW.dh(3, fy[dw].length), dc.kW.aDv(fy[dw]);
		u.v.send(0, dW.ju)
	}, this.a5e = function(a5d, hR, hS) {
		dW.cN(52), dW.dh(1, 0), dW.dh(6, 24), dW.dh(3, a5d), dW.dh(1, +(hR < 0)), dW.dh(1, +(hS < 0)), dW.dh(20, Math.abs(hR)), dW.dh(20, Math.abs(hS)), u.v.send(0, dW.ju)
	}
}

function oO() {
	this.dd = new aDw, this.kW = new aDx, this.nJ = new aDy, this.j = function() {
		this.dd.j()
	}
}

function a9H() {
	var aE1, aE2, aDz = document.createElement("div"),
		a93 = 0,
		aE0 = 0;
	this.show = function(iE, iF, fr, a9G, aE3) {
		if (a93) {
			if (!a9G) return;
			this.jn()
		}
		iE === iF && -1 === iE ? (iE = aE1, iF = aE2) : (aE1 = iE, aE2 = iF), aE3 || (aE0 = a9G), a93 = 1;
		aE3 = aL.aN / aL.bC, aDz.style.whiteSpace = "pre", aDz.textContent = fr, aW.bA.a5C(aDz, 5), aDz.style.font = aW.bA.mN(0, aW.bA.dJ(.015)), aDz.style.padding = "0.3em 0.6em", aDz.style.left = iE + "px", aDz.style.top = "0px", document.body
			.appendChild(aDz), a9G = iE + aDz.offsetWidth - aE3;
		0 < a9G && (aDz.style.left = (fr = iE - a9G) + "px", fr < 5) && (aDz.style.whiteSpace = "pre-wrap"), aDz.style.top = iF - aDz.offsetHeight + aE0 * dI.b8 + "px"
	}, this.jn = function(a9I) {
		if (a93) {
			if (a9I && aE0) return 0;
			a93 = 0, document.body.removeChild(aDz)
		}
		return 1
	}, aDz.style.position = "absolute", aDz.style.backgroundColor = fk.e8, aDz.style.color = fk.eC, aDz.style.pointerEvents = "none", aDz.style.zIndex = "5", aDz.style.maxWidth = "100%"
}

function y9() {
	this.b2 = function(player) {
		var aE6 = function(player) {
			for (var ly = cJ.ly.aE8(), du = ly.length, g4 = Math.min(du, 32), n0 = c3.a04(du), dw = 0; dw < g4; dw++) {
				var aE6 = (dw + n0) % du,
					hp = ly[aE6],
					h5 = hp[0],
					gq = hp[hp.length - 1];
				if (cJ.sr.hD(player, h5) && cJ.sr.hG(player, gq)) return aE6;
				if (cJ.sr.hD(player, gq) && cJ.sr.hG(player, h5)) return 0 <= (aE6 = cJ.ly.aE9(gq, h5)) ? aE6 : cJ.ly.aEA() ? -1 : cJ.ly.lz(cJ.ly.aEB(hp))
			}
			return -1
		}(player);
		return -1 !== aE6 && (aE6 = cJ.ly.get(aE6), !cJ.sr.iO(player, aE6)) && (bw.dY[0] = aE6, !0)
	}
}

function aDO() {
	var aEC = 0,
		aED = null;
	this.j = function() {
		null === aED && (aED = new Uint16Array(2 * cJ.v.zw)), aEC = 0
	}, this.a1Z = function(aEE, aDN) {
		var aEF = aED;
		aEF[aEC++] = aEE, aEF[aEC++] = aDN
	}, this.aEG = function(player, aEH) {
		for (var aEF = aED, du = aEC, dw = 0; dw < du; dw += 2)
			if (aEF[dw] === aEH && cJ.sr.hh(aEF[dw + 1]) && player === cJ.v.iM[bw.hj[2]] >> 3) return !0;
		return !1
	}, this.aEI = function(aEJ) {
		var aDC = cJ.v.aEK[aEJ];
		if (!(aDC < 64)) {
			var aEH = cJ.v.hT[aEJ],
				aEF = aED,
				du = aEC;
			for (let dw = du - 2; 0 <= dw; dw -= 2)
				if (aEF[dw] === aEH) {
					{
						aEP = void 0;
						var aEP = aEF[dw + 1];
						cJ.sr.hh(aEP) && cJ.aDN.aEX(bw.hj[2])
					}
					aEF[dw] = aEF[du - 2], aEF[dw + 1] = aEF[du - 1], du -= 2
				} aEC = du
		}
	}, this.aEM = function(aEN, aEO) {
		for (var aEP = cJ.v.hT[aEN], aEH = -1, aEF = aED, du = aEC, dw = 1; dw < du; dw += 2)
			if (aEF[dw] === aEP) {
				aEH = aEF[dw - 1];
				break
			} if (-1 === aEH) return !1;
		if (!cJ.sr.hh(aEH)) return !1;
		var aEJ = bw.hj[2],
			hp = cJ.v.hq[aEJ];
		if (aEO === hp[hp.length - 1]) cJ.v.hq[aEN] = cJ.ly.aEQ(cJ.v.hq[aEN], cJ.ly.aEB(hp));
		else {
			var aER = cJ.sr.iD(hp, aEO);
			if (-1 === aER) return !1;
			var aES = cJ.v.aET[aEJ];
			aER === aES ? (aEJ = cI.v0(cJ.v.hb[aEJ]), cJ.v.hq[aEN] = cJ.ly.aEV(cJ.v.hq[aEN], hp, aER, aEO, cI.ur(hp[aER], aEO) > cI.ur(hp[aER], aEJ))) : cJ.v.hq[aEN] = cJ.ly.aEV(cJ.v.hq[aEN], hp, aER, aEO, aES < aER)
		}
		return !0
	}, this.aEX = function(ho) {
		var hp, g4 = cJ.v,
			aDC = g4.aEK[ho];
		return aDC % 64 != 5 && (hp = g4.hq[ho], g4.aEY[ho] = 65535 - g4.aEY[ho], g4.aET[ho] = hp.length - g4.aET[ho] - 2, g4.hq[ho] = cJ.ly.aEB(hp), g4.aEK[ho] = aDC - aDC % 64 + 5, !0)
	}
}

function aEZ() {
	this.ku = {}, this.a9V = new Array(7), this.a2N = null, this.a2P = null, this.aEa = 0, this.aEb = [0, 0], this.aEc = function() {
		n.d7(5, 5)
	}, this.d6 = function() {
		n.o(), ns.j()
	}, __fx.customLobby.setJoinFunction(() => {
		n.o(), ns.j()
	}), this.rt = function() {
		n.d7(0 === r.a8() ? 5 : 0)
	}, this.vT = function() {
		if (1 === gG.ku.data[130].value) n.d7(8, n.uM().a2h, new a48(24, {
			a5d: gG.ku.data[125].value,
			hR: gG.ku.data[128].value,
			hS: gG.ku.data[129].value
		}));
		else {
			for (var dY = (dY = gG.ku.data[126].value.split(",")).slice(0, 10), dw = 0; dw < dY.length; dw++) dY[dw] = dY[dw].trim().slice(0, 7).toUpperCase();
			1 === dY.length && 0 === dY[0].length && (dY = []), n.d7(8, n.uM().a2h, new a48(23, {
				a5d: gG.ku.data[125].value,
				fy: dY
			}))
		}
	}, this.aEd = function(a2h, target) {
		n.d7(4, a2h, new uE("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + g7.aEe +
			"' target='_blank'>" + g7.aEe + "</a>", !1, [new jJ("⬅️ " + L(10), function() {
				n.d7(a2h)
			}), new jJ("✅ Accept", function() {
				gG.gH.gI(140, 1), 0 === target ? n.d7(2, a2h) : n.d7(8, a2h, new a48(target))
			})]))
	}, this.kH = function() {
		for (var dw = 0; dw < 7; dw++) this.a9V[dw] = kV.kW.kX(da.jw(5));
		this.a9V[1] = "[" + this.a9V[1] + "]", 5 === n.uL && (n.uM().aEf.gI(this.a9V), n.uM().resize())
	}
}

function pA() {
	var aEg = 0,
		aEi = new Uint16Array(64);

	function aEk(a0p) {
		aEg -= 2;
		for (var dw = a0p; dw < aEg; dw += 2) aEi[dw] = aEi[dw + 2], aEi[dw + 1] = aEi[dw + 3]
	}
	this.j = function() {
		aEg = 0
	}, this.b2 = function() {
		var dw, hI, qF;
		if (0 !== aEg)
			if (0 === aZ.aa[aR.ad]) aEg = 0;
			else if (0 === cm.a1K(aR.ad)) aEg = 0;
		else
			for (dw = aEg - 2; 0 <= dw; dw -= 2)(hI = aEi[dw]) < aR.bS && 0 === aZ.aa[hI] ? aEk(dw) : (qF = aEi[dw + 1], (hI >= aR.bS && hK.aEl(aR.ad) || hI < aR.bS && hK.aEm(aR.ad, hI)) && (c7.my.a11(qF, hI), aEk(dw)))
	}, this.a12 = function(hI, qF) {
		! function(hI, qF) {
			for (var dw = 0; dw < aEg; dw += 2)
				if (aEi[dw] === hI) return aEi[dw + 1] = Math.min(aEi[dw + 1] + qF, 1023), 1;
			return
		}(hI, qF) && 64 !== aEg && (aEi[aEg] = hI, aEi[aEg + 1] = qF, aEg += 2)
	}
}

function aEo() {
	var rm, vM, jX, a7l, jb;

	function aEp() {
		var t;
		a7l !== gG.ku.data[12].value ? (kw.j(), kw.a7k(), t = s.t, n.d7(4, 1, new uE(L(231), L(232), !1, [new jJ("⬅️ " + L(10), function() {
			n.d7(1)
		}), new jJ("🔄 Reload", function() {
			s.t < t + 1500 || aI.aJ.aEq()
		}, fk.eZ)]))) : n.d7(1)
	}
	this.show = function() {
			a7l = gG.ku.data[12].value, rm.show(), this.resize()
		}, this.jn = function() {
			rm.jn()
		}, this.resize = function() {
			rm.resize(), vM.resize()
		}, this.jo = function(dx) {
			2 === dx && rm.jp[0].jq()
		}, rm = new jI(L(229), [new jJ("⬅️ " + L(10), aEp), new jJ(L(230), function() {
			n.o(), gG.gH.kz(), n.d7(2)
		})]), jX = [], (jb = new jc).jd(L(233)), jb.vS(L(234)), jX.push(jb),
		function(jX) {
			var jb = new jc,
				dY = (jb.jd(L(256)), kw.data.aF0());
			jb.je(new g9({
				gF: dY,
				value: kw.data.aF1(dY)
			}, function(dS) {
				return gG.gH.gI(12, dY[dS].split(":")[0]), !0
			})), jX.push(jb)
		}(jX),
		function(jX) {
			var jb = new jc,
				aEu = (jb.jd(L(254)), []);
			jb.jf(new ua([new jJ(L(255), function(jj) {
				o4.aEv();
				for (var dw = 0; dw < aEu.length; dw++) aEu[dw].jj.value = o4.aEw[dw];
				return aW.bA.a5O(jj), !0
			}).button]));
			for (var dw = 0; dw < o4.aEx.length; dw++) {
				jb.vS(o4.aEx[dw]);
				for (var fm = 0; fm < 2; fm++) {
					var dS = 2 * dw + fm,
						ue = new ji({
							value: o4.aEw[dS],
							dS: -1
						});
					ue.jj.aEy = dS, aEu.push(ue), ue.jj.addEventListener("keydown", function(jj) {
						jj.preventDefault();
						var code = jj.code;
						jj.target.value = code, o4.aEz(jj.target.aEy, code)
					}), fm && (ue.jj.style.marginLeft = "4%"), ue.jj.style.width = "48%", jb.jf(ue)
				}
			}
			jX.push(jb)
		}(jX), (jb = new jc).jd(L(235)), jb.je(new g9({
			gF: ["1", "2"],
			value: ns.aEt - 1
		}, function(dw) {
			ns.aEt = dw + 1
		})), jX.push(jb), (jb = new jc).jd(L(236)), gG.ku.data[1].gF = [L(237), L(238), L(239), L(240)], jb.je(new g9(gG.ku.data[1])), jX.push(jb), (jb = new jc).jd(L(241)), gG.ku.data[9].gF = [L(238), L(242), L(243)], jb.je(new g9(gG.ku.data[9])),
		jX.push(jb), (jb = new jc).jd(L(244)), gG.ku.data[11].gF = [L(245), L(53), L(246)], jb.je(new g9(gG.ku.data[11])), jX.push(jb), (jb = new jc).jd(L(247)), jb.jf(new jh(gG.ku.data[2])), jX.push(jb), (jb = new jc).jd(L(248)), jb.jf(new jh(gG.ku
			.data[7])), jX.push(jb), (jb = new jc).jd(L(249)), jb.jf(new jh(gG.ku.data[8])), jX.push(jb), (jb = new jc).jd(L(250)), jb.jf(new ji(gG.ku.data[5])), jX.push(jb), (jb = new jc).jd(L(251)), jb.jf(new jh(gG.ku.data[13], L(252))), jb.jf(
			new jh(gG.ku.data[14], L(253))), jX.push(jb), vM = new jL(rm.jM, jX)
}

function aF2() {
	this.a1G = function(gt) {
		var aF3;
		return gu.ia(gu.ib) && aR.data.passableMountains && (aF3 = cC.h2(gt), this.aF4(aR.ad, aF3) || this.aF5(aR.ad, aF3)) && 0 !== (aF3 = function(h0) {
			for (var iE = cI.gx(h0), iF = cI.gz(h0), max = Math.max(gu.gv, gu.h1) - 2, aF9 = max * max, aFA = !1, aFB = 0, he = 0; he < max; he++) {
				var aFC, go = function(iE, iF, he) {
					for (var dw = 0; dw <= he; dw++)
						for (var fm = -1; fm < 2; fm += 2)
							for (var fn = -1; fn < 2; fn += 2)
								for (var dx = 0; dx < 2; dx++) {
									var gt = function(iE, iF) {
										if (cI.ux(iE, iF)) {
											iE = cI.i1(iE, iF), iF = cI.h3(iE);
											if (cC.hO(iF) && cC.z3(iF)) return iE
										}
										return 0
									}(iE + dx * fm * dw + (1 - dx) * fn * he, iF + dx * fn * he + (1 - dx) * fm * dw);
									if (gt) return gt
								}
					return 0
				}(iE, iF, he);
				go && (aFC = cI.uq(iE, iF, go)) < aF9 && (aFB = go, aF9 = aFC, aFA || (aFA = !0, max = Math.floor(Math.sqrt(aFC)) + 1))
			}
			return aFB
		}(cI.hC(gt))) && (gt = cI.h3(aF3), cC.hH(gt) || (gt = cC.hJ(gt)) !== aR.ad && hK.hL(gt, aR.ad)) ? aF3 : 0
	}, this.a20 = function(player, go) {
		go = cI.h3(go);
		if (cC.hO(go)) {
			if (cC.hH(go)) bw.qZ[0] = aR.bS;
			else if (cC.hJ(go) !== bw.qZ[0]) return !1;
			for (var al = function(gt) {
					var yo = cC.yo,
						al = [];
					loop: for (var kR = 3; 0 <= kR; kR--) {
						var aF8 = gt + yo[kR];
						if (cC.z4(aF8)) {
							for (var id = cC.h2(aF8), dw = 0; dw < al.length; dw++)
								if (id === al[dw]) continue loop;
							bw.a21[al.length] = aF8, al.push(id)
						}
					}
					return al
				}(go), du = al.length, dw = 0; dw < du; dw++)
				if (this.aF4(player, al[dw]) || this.aF5(player, al[dw])) return bw.a21[0] = bw.a21[dw], !0
		}
		return !1
	}, this.aF4 = function(player, aF3) {
		for (var ic = aZ.ic[player], du = ic.length, aFE = Math.max(dU.dV(du, 12), 1), yo = cC.yo, dw = 0; dw < du; dw += aFE)
			for (var h9 = ic[dw], kR = 3; 0 <= kR; kR--) {
				var aF8 = h9 + yo[kR];
				if (cC.z4(aF8) && aF3 === cC.h2(aF8)) return !0
			}
		return !1
	}, this.aF5 = function(player, aF3) {
		for (var ic = aZ.ic[player], du = ic.length, yo = cC.yo, dw = 0; dw < du; dw++)
			for (var h9 = ic[dw], kR = 3; 0 <= kR; kR--) {
				var aF8 = h9 + yo[kR];
				if (cC.z4(aF8) && aF3 === cC.h2(aF8)) return !0
			}
		return !1
	}
}

function ob() {
	var aFF, mq, a5p, aFG, aO, mM, fontSize, aFH, aFI, aFJ, aFK, canvas, nU, a5q, aFL;

	function jU(dw) {
		return L(0 === dw ? 257 : 1 === dw ? 258 : 2 === dw ? 259 : 260)
	}

	function aFS() {
		aC.drawImage(canvas, dI.gap + (aR.ae ? dI.gap + ag.aFT() : 0), aAR + 2 * dI.gap)
	}

	function aFM() {
		canvas.width = aFF[0].width + aFJ, canvas.height = aO + aFJ, (nU = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aFF[0].width + aFJ, aO + aFJ), nU.translate(Math.floor(aFJ / 2), Math.floor(aFJ / 2)), nU.lineWidth = aFJ, nU.fillStyle = 1 === aFF[0].aFR ? fk.eH : fk.e9, aFU(), nU.fill(), nU.strokeStyle = 1 === aFF[0].aFR ? fk.e3 :
			fk.eC, aFU(), nU.stroke(), aW.bA.textAlign(nU, 1), aW.bA.textBaseline(nU, 1), nU.fillStyle = 1 === aFF[0].aFR ? fk.e3 : fk.eC, nU.font = mM[0], nU.fillText(jU(aFF[0].aFQ), Math.floor(aFF[0].width / 2), Math.floor(.72 * aFH[0] * aO)), nU
			.font = mM[1], nU.fillText(aFF[0].fr, Math.floor(aFF[0].width / 2), Math.floor((aFH[0] + .48 * aFH[1]) * aO))
	}

	function aFU() {
		nU.beginPath(), nU.moveTo(aFK, 0), nU.lineTo(aFF[0].width - aFK, 0), nU.lineTo(aFF[0].width, aFK), nU.lineTo(aFF[0].width, aO - aFK), nU.lineTo(aFF[0].width - aFK, aO), nU.lineTo(aFK, aO), nU.lineTo(0, aO - aFK), nU.lineTo(0, aFK), nU
			.closePath()
	}
	this.j = function() {
		mq = 4, a5p = aFG = a5q = 0, aFF = [], mM = new Array(2), fontSize = new Array(2), (aFH = new Array(2))[0] = .3, aFH[1] = .7, aFI = new Array(4), canvas = document.createElement("canvas"), aFL = s.t + 2e3, this.resize()
	}, this.resize = function() {
		var dw, aN;
		for (aO = Math.floor((aI.aJ.aK() ? .0725 : .058) * aL.aM), fontSize[0] = Math.floor(.85 * aFH[0] * aO), fontSize[1] = Math.floor(.85 * aFH[1] * aO), mM[0] = aW.bA.mN(1, fontSize[0]), mM[1] = aW.bA.mN(1, fontSize[1]), dw = aFI.length -
			1; 0 <= dw; dw--) aFI[dw] = this.measureText(jU(dw) + "000", mM[0]);
		if (aFJ = Math.floor(1 + .05 * aO), aFK = Math.floor(.2 * aO), 0 < aFF.length) {
			for (dw = aFF.length - 1; 0 <= dw; dw--) aN = this.measureText(aFF[dw].fr + "00", mM[1]), aFF[dw].width = aN < aFI[dw] ? aFI[dw] : aN;
			aFM()
		}
	}, this.b2 = function() {
		0 !== mq && (4 === mq ? s.t > aFL && (mq = 0, 1 === aR.bf) && ce.nm(gu.td.te[gu.ib].name, 3, 1, 9) : (1 === mq ? (0 === a5p && (aFM(), a5p = 1e-4), 1 <= (a5p += .002 * (s.t - a5q)) && (aFG = 0, mq = 2, a5p = 1), s.ap = !0) : 2 === mq ? ((
			aFG += (s.t - a5q) / 1e3) > aFF[0].aCa || 1 < aFG && 1 < aFF.length) && (mq = 3) : 3 === mq && ((a5p -= .002 * (s.t - a5q)) <= 0 && (a5p = 0, aFF.shift(), mq = 0 < aFF.length ? 1 : 0), s.ap = !0), a5q = s.t))
	}, this.measureText = function(fr, mM) {
		return aC.font = mM, Math.floor(aC.measureText(fr).width)
	}, this.a1Z = function(aFP, dw) {
		this.nm(aZ.fp[aFP], dw, 1, 0 === dw ? 3 : 7)
	}, this.nm = function(fr, aFQ, aFR, aCa) {
		var aN;
		fr.length && (aN = (aN = this.measureText(fr + "00", mM[1])) < aFI[aFQ] ? aFI[aFQ] : aN, aFF.push({
			fr: fr,
			width: aN,
			aFQ: aFQ,
			aFR: aFR,
			aCa: aCa
		}), 0 === mq) && (a5p = 0, mq = 1, a5q = s.t)
	}, this.mP = function() {
		0 !== mq && 0 !== a5p && (a5p < 1 ? (aC.globalAlpha = a5p, aFS(), aC.globalAlpha = 1) : aFS())
	}
}

function yA() {
	this.b2 = function() {
		if (s.a6() % 51 == 45)
			for (var du = cJ.v.ha, aEK = cJ.v.aEK, hq = cJ.v.hq, hT = cJ.v.hT, iM = cJ.v.iM, zy = cM.zy, hm = cM.hm, dw = 0; dw < du; dw++) {
				var hp, player, aEH, aDC = aEK[dw];
				aDC % 64 == 6 || (hp = hq[dw], (player = cJ.sr.hM(hp[hp.length - 1])) < 0) || !aW.aX.iN(player, iM[dw] >> 3) || c3.a04(1e3) >= zy[hm[player]] || ! function(aFX, hp) {
					for (var du = hp.length - 1, aFY = cJ.v.aET[aFX], he = 0, dw = aFY + 1; dw < du; dw++) he += cI.ur(hp[dw], hp[dw + 1]);
					return (he += cI.ur(cI.v0(cJ.v.hb[aFX]), hp[aFY + 1])) <= 60
				}(dw, hp) || (aEH = hT[dw], 64 <= aDC && cJ.aDN.aEG(player, aEH)) || function(player, hp, aEH, aFX, aDC) {
					cJ.a1h.a1i(player) && aW.aX.qE(player, cM.zt[cM.hm[player]], 32, 0) && (cJ.v.aEK[aFX] = 64 + aDC % 64, cJ.aDN.a1Z(aEH, cJ.v.aFZ), bw.dY[0] = cJ.ly.aEB(hp), bw.hj[1] = 6, aW.aX.qX(player), cJ.v.a1n(player))
				}(player, hp, aEH, dw, aDC)
			}
	}
}

function ji(gA, type, aFa, aFb) {
	var jj;
	this.jj = document.createElement("input"), (jj = this.jj).type = type ? "number" : "text", jj.id = "input" + n.v.aEa++, jj.value = gA.value, jj.style.width = "100%", jj.style.userSelect = "none", jj.style.outline = "none", jj.style.resize =
		"none", jj.style.border = "inherit", jj.style.font = "inherit", jj.style.color = fk.eC, jj.style.backgroundColor = fk.e5, jj.style.fontSize = "1em", jj.style.padding = "0.1em 0.2em", jj.addEventListener("focus", function() {
			aL.rU++
		}), jj.addEventListener("blur", function() {
			aL.rU--, -1 !== gA.dS && gG.gH.gI(gA.dS, jj.value)
		}), jj.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== gA.dS && gG.gH.gI(gA.dS, jj.value), aFa ? aFa() : jj.blur())
		}), aFb && jj.addEventListener("input", function(dg) {
			aFb(dg)
		})
}

function aFc() {
	var aFd, aFe;

	function aFi() {
		(aFd = new WebSocket("wss://territorial.io/s52/")).onopen = aFk, aFd.onclose = function() {
			aFl()
		}
	}

	function aFk() {
		if (aFd && aFd.readyState === aFd.OPEN) {
			var aN = new pJ;
			aN.cN(1608), aN.dh(1, 0), aN.dh(6, 7), aN.dh(2, aI ? aI.id : 3), aN.dh(1, c1.kk ? 1 : 0), aN.dh(1, c1.kl ? 1 : 0), aN.dh(1, c1 ? c1.lP : 0);
			for (var dw = 0; dw < aFe.length && dw < 228; dw++) aN.dh(7, aFe.charCodeAt(dw) % 128);
			aFd.send(aN.ju), aFl()
		}
	}

	function aFl() {
		aFd && (aFd.onclose = null, aFd.onopen = null, aFd = null)
	}
	window.addEventListener("error", function aFf(jj) {
		aFe = "";
		try {
			return window.removeEventListener("error", aFf), aFe = jj.lineno + " " + jj.colno + "|" + function(jj) {
				if (!jj.error) return "NoStack";
				var stack = jj.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, vy = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = vy.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(jj), __fx.reportError(jj, aFe), alert("Error:\n" + jj.filename + " " + jj.lineno + " " + jj.colno + " " + jj.message)
		} catch (jj) {
			aFe = "SE|" + aFe + "|" + jj, console.log(aFe), alert(aFe)
		}
		aFi()
	})
}

function b0() {
	this.t = s.t, this.dS = 0, this.b3 = 0, this.a5 = 0, this.aFm = null, this.aFn = 7, this.aFo = 0, this.j = function() {
		this.a5 = 0, this.aFm = [], this.dS = 0, this.b3 = 0
	}, this.ke = function(ju) {
		if (aR.bh) this.a0R(ju);
		else if (this.aFm.push(ju), 2 === aR.bf) {
			for (var dw = 0; dw < this.aFm.length; dw++) c7.c8.b2(this.aFm[dw]);
			this.aFm = []
		}
	}, this.a0R = function(ju) {
		2 !== aR.bf && (c7.c8.b2(ju), cR.b2(), cc.a0R(this.a5), this.a5 === aR.bp ? (aR.bm.b2(), this.a5 = 0, this.dS = 0, this.b3 = 0, this.t = s.t) : (this.a5++, cn.wx(), cn.cv(!0), cG.a0M()))
	}, this.b2 = function() {
		aL.b2(), aR.bh ? (s.ap = cc.a0R(-1) || s.ap, a0S()) : (0 !== this.dS || s.t >= this.t && (this.t += s.aq * Math.floor(1 + (s.t - this.t) / s.aq), 2 === aR.bf ? a0K() : this.aFp(), this.dS++, 27 < s.t - this.aFo)) && this.aFq(), a0I(), s
			.ap && (s.ap = !1, nM()), this.aFo = s.t
	}, this.aFq = function() {
		s.ap = !0, a0T(), this.dS = 0
	}, this.aFp = function() {
		var aFr, dw;
		if (this.b3 !== 7 * this.a5) a0Q(), cG.a0M();
		else {
			aFr = !1;
			loop: for (; this.aFs() && (aFr = !0, a0Q(), 2 !== aR.bf) && 0 < this.aFm.length;)
				for (dw = this.aFn - 2; 0 <= dw; dw--)
					if (a0Q(), 2 === aR.bf) break loop;
			aFr ? cG.a0M() : (a0K(), cG.aFt())
		}
	}, this.aFs = function() {
		return 0 < this.aFm.length && (this.a5++, c7.c8.b2(this.aFm[0]), this.aFm.shift(), !0)
	}
}

function aDB() {
	var mW = 32,
		mV = new Array(2);

	function yI(dx) {
		var iE, iF, go, i0, hz, lU = mW,
			uk = aW.bA.yI(lU, lU),
			n2 = aW.bA.getContext(uk, !0),
			a3A = aW.bA.getImageData(n2, lU, lU),
			xR = a3A.data,
			g4 = (lU >> 1) - .5,
			aFv = Math.sqrt(g4 * g4);
		for (xR.fill(255), iF = 0; iF < lU; iF++)
			for (iE = 0; iE < lU; iE++) hz = iE - g4, i0 = iF - g4, go = 4 * (iF * lU + iE), hz = 714 * (aFv - Math.sqrt(hz * hz + i0 * i0)) / aFv, xR[2 + go] = dx, xR[3 + go] = 255 < hz ? 0 : hz;
		return n2.putImageData(a3A, 0, 0), uk
	}
	this.aFu = -1, this.j = function() {
		this.aFu = -1, mV[0] || (mV[0] = yI(255), mV[1] = yI(0))
	}, this.a3E = function(n2, gt, iE, iF, rT, dw) {
		aW.aX.fT(aR.ad) && (n2.setTransform(gt *= 4 / 3 * .625, 0, 0, gt, iE - (rT *= 4 / 3), iF - rT), n2.drawImage(mV[+(cJ.v.hT[dw] === this.aFu)], 0, 0))
	}
}

function oI() {
	"function" != typeof Math.log2 && (Math.log2 = function(iE) {
		return Math.log(iE) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(iE) {
		return Math.log(iE) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(iE) {
		return 0 < iE ? 1 : iE < 0 ? -1 : 0
	})
}

function oi() {
	var canvas, nU, iE, iF, aFw, aFx, gap, aFy, fontSize, aFz, aG0, aG1, aG2, aG3, aG4, aG5, aG6, aG7;

	function aGC() {
		nU.clearRect(0, 0, cc.aN, cc.aO), nU.fillStyle = fk.e9, nU.fillRect(0, 0, cc.aN, cc.aO), nU.fillStyle = fk.eW, gt = 0 < aG5 ? aG5 : Math.sqrt(aG2[4] / 1e4), nU.fillRect(0, cc.aO - aFw - 1, Math.floor(gt * cc.aN), aFw), nU.fillStyle = fk.eC,
			nU.fillRect(0, 0, cc.aN, 1), nU.fillRect(0, 0, 1, cc.aO), nU.fillRect(cc.aN - 1, 0, 1, cc.aO), nU.fillRect(0, cc.aO - 1, cc.aN, 1), nU.fillRect(0, cc.aO - aFw - 1, cc.aN, 1);
		for (var gt, aGD, b5 = 0, dw = 0; dw < aG1.length; dw++) aG3[dw] ? (aW.bA.textAlign(nU, 0), aGD = Math.floor((aFx - aFw + 2 * aFy) * (dw - b5 + 1) / (aG1.length + 1) - .7 * aFy), nU.fillText(aG1[dw], gap, aGD), aW.bA.textAlign(nU, 2), 5 ===
			dw && 0 !== aZ.aa[aR.ad] && aZ.bN[aR.ad] >= bL.a4c(aR.ad) ? (nU.fillStyle = fk.f6, nU.fillText(aG9(dw), cc.aN - gap, aGD), nU.fillStyle = fk.eC) : nU.fillText(aG9(dw), cc.aN - gap, aGD)) : b5++
	}

	function aG9(dw) {
		return dw < 3 ? aG2[dw].toString() : 3 === dw || 4 === dw || 5 === dw ? aW.fv.aGE(aG2[dw] / 100, 2) : dw < 7 ? aW.fv.t6(aG2[dw]) : dw === 7 ? cc.aGF(aG2[7]) : dw === 8 ? __fx.utils.getMaxTroops(aZ.ac, aR.ad) : __fx.utils.getDensity(aR.ad)
	}

	function aG8() {
		aZ.ac[aR.ad] !== aG2[6] && (aG2[6] = aZ.ac[aR.ad], aFz++)
	}
	this.j = function() {
		aG5 = aG6 = 0, (aG0 = new Array(8))[0] = L(261), aG0[1] = aR.ay ? L(262) : L(263), aG0[2] = L(264), aG0[3] = L(265), aG0[4] = L(194), aG0[5] = L(266, 0, "Interest"), aG0[6] = L(267), aG0[7] = L(268),
			aG0.push("Max Troops", "Density"), // add aG0
			(aG1 = new Array(aG0.length)).fill(""), (aG2 = new Array(aG0.length))[0] = aR.ay ? 0 : aR.bY, aG2[1] = aR.ay ? bF.bG : aR.ba, aG2[2] = aR.bb, aG2[3] = 0, aG2[4] = dU.dV(1e4 * aZ.ac[0], Math.max(aR.bH, 1)), aG2[5] = 0 === aR.data
			.iIncomeType ? 700 : 1 === aR.data.iIncomeType ? dU.dV(700 * aR.data.iIncomeValue, 64) : dU.dV(700 * aR.data.iIncomeData[aR.ad], 64), aG2[6] = 0, aG8(), aG2[7] = 0, aG4 = aG9(6), aG3 = new Array(aG0.length);
		for (var dw = aG0.length - 1; 0 <= dw; dw--) aG3[dw] = !0;
		aG7 = 0, aG7 = aR.ay ? (aG3[0] = !1, aG3[2] = !1, aG3[3] = !1, 3) : (aG3[3] = !1, 1), aFz = 0, this.resize()
	}, this.resize = function() {
		this.aN = Math.floor((aI.aJ.aK() ? .1646 : .126) * 1.25 * aL.aM), this.aO = Math.floor(1.18 * this.aN), aFw = Math.floor(.04 * this.aN), gap = Math.floor(.035 * this.aN), aFy = .04 * this.aN, aFx = this.aO, this.aO -= Math.floor(aG7 * (
			this.aO - 2 * aFw) / aG0.length), fontSize = Math.floor(.7 * (aFx - aFw) / aG0.length);
		var mM = aW.bA.mN(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.aN, canvas.height = this.aO,
			function(mM, aN) {
				for (var dw = 0; dw < aG1.length; dw++) aG1[dw] = aW.nU.aAv(aG0[dw], mM, aN)
			}((nU = canvas.getContext("2d", {
				alpha: !0
			})).font = mM, .575 * this.aN), aW.bA.textBaseline(nU, 1), nU.lineWidth = 1, this.aGB(), this.a6N(), cb.a6N(), aGC()
	}, this.a6N = function() {
		iE = aL.aN - this.aN - dI.gap
	}, this.zc = function() {
		iF = dI.gap
	}, this.aGB = function() {
		iF = dI.gap + (cb.a6M() && 0 !== aZ.aa[aR.ad] && !aR.bh ? cb.aO + dI.gap : 0)
	}, this.cv = function(oG) {
		(oG || 100 <= aFz) && (aFz = 0, aGC())
	}, this.uK = function() {
		return aG2[7]
	}, this.aGF = function(value) {
		var g4 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * g4) / 1e3);
		return value < 10 ? g4 + ":0" + value : g4 + ":" + value
	}, this.b2 = function() {
		var aBx, per;
		aG3[0] && aR.bZ - aR.bb !== aG2[0] && (aG2[0] = aR.bZ - aR.bb, aFz++), bF.bG - aG2[0] !== aG2[1] && (aG2[1] = bF.bG - aG2[0], aFz++), this.aGI(), (aBx = bL.aBz(aR.ad)) !== aG2[5] && (aG2[5] = aBx, aFz++), aG8(), aG2[7] += s.aq, aBx = aG9(
			7), aG4 !== aBx && (aG4 = aBx, aFz += 100), aBx = aR.ae ? ag.qh() : aZ.ac[am[0]], per = dU.dV(1e4 * aBx, Math.max(aR.bH, 1)), aG2[3] = aBx, aG2[4] !== per && (aFz++, aG2[4] = per), 8 === aR.aV && function() {
			for (var dw = 0; dw < 2; dw++)
				if (!aW.aX.fT(dw)) return bx.gb.gc(), 1;
			return
		}() || aG2[3] < aR.bH || ! function() {
			for (var dw = bF.bG - 1; 0 <= dw; dw--)
				if (0 < aZ.ig[bF.q3[dw]].length) return;
			return 1
		}() || cJ.sr.iK().length || bx.gb.gc()
	}, this.aGI = function() {
		aG3[2] && aR.bb !== aG2[2] && (aG2[2] = aR.bb, aFz++)
	}, this.aGN = function() {
		return aG2[3] === aR.bH
	}, this.a0R = function(dw) {
		var fh, aGQ, b5;
		return 2 !== aR.bf && (dw % 2 == 1 && (cW.cv(1, 1), s.ap = !0), dw === aR.bp ? (aG5 = 0, aGC(), !1) : (-1 !== dw || 0 !== aG6) && (aGQ = aG5, aG5 = aR.aw ? dw / aR.bp : (b5 = performance.now(), 0 <= dw && (fh = b5 - 392 * dw, aG6 = 0 ===
			dw || fh < aG6 ? fh : aG6), 1 < (aG5 = (b5 - aG6) / (392 * aR.bp)) ? 1 : aG5), aGC(), aG5 !== aGQ))
	}, this.mP = function() {
		aC.drawImage(canvas, iE, iF)
	}
}

function om() {
	var py = 0;
	this.j = function() {
		nr.j(), py = 0
	}, this.setState = function(aGR) {
		py = aGR
	}, this.a8 = function() {
		return py
	}, this.kY = function() {
		this.setState(8), n.o()
	}, this.jo = function(jj) {
		if (!gu.a6u) return !1;
		if (!(s.t < 400)) {
			if ("Enter" === jj.key || "Escape" === jj.key) {
				if (this.aGS()) return !0;
				if ("Enter" === jj.key) {
					if (0 === py) return !0;
					if (7 === py) return !0
				}
			}
			return !1
		}
	}, this.yQ = function() {
		o6.resize()
	}, this.aGS = function() {
		return !!o6.jn()
	}, this.mJ = function(iE, iF) {
		!gu.a6u || o6.mJ(iE, iF) || 6 === py && ns.mJ(iE, iF) || o5.mJ(iE, iF) || kK.mJ(iE, iF)
	}, this.qr = function(iE, iF) {
		!kK.aGT && nr.qr(iE, iF, !0) || kK.qr(iE, iF)
	}, this.click = function(iE, iF) {
		kK.rM()
	}, this.qu = function(iE, iF, deltaY) {}, this.yR = function() {
		nr.aGU(), s.ap = !0
	}, this.mP = function() {
		8 !== py && 10 !== py && (aC.imageSmoothingEnabled = !0, this.aD(), 0 !== py && (kK.mP(), nq.mP(), this.aGV(), o5.mP()), 0 !== py && 6 === py && ns.mP(), o6.mP(), n.mP())
	}, this.aD = function() {
		var aGX, aGW;
		if (__fx.makeMainMenuTransparent) aC.clearRect(0, 0, aL.aN, aL.aO);
		else gu.a6u ? (aGW = aL.aN / gu.gv, aGX = aL.aO / gu.h1, aC.setTransform(aGW = aGX < aGW ? aGW : aGX, 0, 0, aGW, Math.floor((aL.aN - aGW * gu.gv) / 2), Math.floor((aL.aO - aGW * gu.h1) / 2)), aC.drawImage(gu.nO, 0, 0), aC.setTransform(1,
			0, 0, 1, 0, 0), aC.fillStyle = fk.e7) : aC.fillStyle = fk.e3, aC.fillRect(0, 0, aL.aN, aL.aO)
	}, this.aGV = function() {
		var iF = Math.floor(.3 * aL.aO),
			canvas = aF.aG("territorial.io"),
			xU = (xU = 1.75 * aL.aO / canvas.width) * canvas.width < .98 * aL.aN ? .98 * aL.aN / canvas.width : xU,
			iE = (aC.globalAlpha = .15, aC.imageSmoothingEnabled = !1, Math.floor(.5 * (aL.aN - xU * canvas.width))),
			iE = Math.floor(iE / xU),
			iF = Math.floor(iF - .5 * canvas.height * xU),
			iF = Math.floor(iF / xU);
		aC.setTransform(xU, 0, 0, xU, iE, iF), aC.drawImage(canvas, iE, iF), aC.setTransform(1, 0, 0, 1, 0, 0), aC.globalAlpha = 1, aC.imageSmoothingEnabled = !0
	}
}

function a4S() {
	this.nC = function(gp) {
		return [gp >> 12 & 63, gp >> 6 & 63, 63 & gp]
	}, this.aGY = function(gp) {
		for (var dY = this.nC(gp), dw = 0; dw < 3; dw++) dY[dw] = ~~(4.05 * dY[dw]);
		return dY
	}, this.aGZ = function(gp) {
		gp = this.aGY(gp);
		return aW.color.e4(gp[0], gp[1], gp[2])
	}, this.aGa = function(dY) {
		for (var dw = 0; dw < 3; dw++) dY[dw] = ~~(dY[dw] / 4.04);
		return (dY[0] << 12) + (dY[1] << 6) + dY[2]
	}, this.e4 = function(rT, fh, fn) {
		return "rgb(" + rT + "," + fh + "," + fn + ")"
	}, this.e6 = function(rT, fh, fn, fm) {
		return "rgba(" + rT + "," + fh + "," + fn + "," + fm.toFixed(3) + ")"
	}, this.aGb = function(dx) {
		for (var dY = dx.split("(")[1].split(","), yy = bw.yy, dw = 0; dw < 3; dw++) yy[dw] = parseInt(dY[dw]);
		return 4 === dY.length ? yy[3] = 255 * parseFloat(dY[3].slice(0, -1)) : yy[3] = 255, yy
	}, this.aGc = function(aGd, kR) {
		for (var dY = aGd.slice(aGd.indexOf("(") + 1, aGd.indexOf(")")).split(","), yy = bw.yy, dw = 0; dw < 3; dw++) yy[dw] = dU.ls(parseInt(dY[dw].trim(), 10) + kR, 0, 255);
		return 3 === dY.length ? this.e4(yy[0], yy[1], yy[2]) : (aGd = parseFloat(dY[3].trim()), this.e6(yy[0], yy[1], yy[2], aGd = 0 === aGd ? .3 : aGd))
	}, this.aGe = function(dY) {
		for (var fr = "#", dw = 0; dw < 3; dw++) {
			var rT = dY[dw].toString(16);
			fr += 1 === rT.length ? "0" + rT : rT
		}
		return fr
	}, this.aGf = function(fr) {
		var rT, fh;
		return fr.length < 7 ? fk.e3 : (rT = parseInt(fr.slice(1, 3), 16), fh = parseInt(fr.slice(3, 5), 16), fr = parseInt(fr.slice(5, 7), 16), this.e4(rT, fh, fr))
	}
}

function b1() {
	this.b3 = 0, this.b2 = function() {
		nq.b2(), ns.b2(), aL.b2(), u.v.b2(), k3.aB(), s.ap && (s.ap = !1, r.mP())
	}
}

function pG() {
	this.my = new aGg, this.aX = new a9M, this.aGh = new a1X, this.c8 = new aGi, this.a4x = new aGj
}

function aGk() {
	this.te = null, this.uX = null, this.uZ = null, this.j = function() {
		var aGl = [120, 105, 92],
			cos = [12, 12, 60],
			aGm = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aGn = [140, 130, 120],
			aGo = [12, 12, 76],
			aGp = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aGq = [130, 117, 106],
			aGr = [12, 12, 68],
			aGs = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.te = new Array(gu.a6o + 1), this.te[0] = {
			name: L(269),
			aN: 230,
			aO: 230,
			a9v: 1e3,
			a9f: 2e3,
			tl: 173
		}, this.te[1] = {
			name: L(270),
			aN: 800,
			aO: 800,
			a9v: 100,
			a9f: 50,
			tl: 43
		}, this.te[2] = {
			name: L(271),
			aN: 512,
			aO: 512,
			a9v: 128,
			a9f: 32,
			tl: 0
		}, this.te[3] = {
			name: L(272) + " 1",
			aN: 960,
			aO: 960,
			a9v: 60,
			a9f: 8,
			tl: 0
		}, this.te[4] = {
			name: L(273),
			aN: 900,
			aO: 900,
			a9v: 100,
			a9f: 5,
			tl: 0
		}, this.te[5] = {
			name: L(274),
			aN: 1e3,
			aO: 1e3,
			a9v: 100,
			a9f: 40,
			tl: 0
		}, this.te[6] = {
			name: L(275),
			aN: 1e3,
			aO: 1e3,
			a9v: 100,
			a9f: 20,
			tl: 0
		}, this.te[7] = {
			name: L(276),
			aN: 1024,
			aO: 1024,
			a9v: 128,
			a9f: 32,
			tl: 0
		}, this.te[8] = {
			name: L(277),
			aN: 820,
			aO: 820,
			a9v: 200,
			a9f: 100,
			tl: 0
		}, this.te[9] = {
			name: L(278),
			aN: 1024,
			aO: 1024,
			a9v: 128,
			a9f: 32,
			tl: 0
		}, this.te[10] = {
			name: L(279),
			tf: aGn,
			tg: aGo,
			th: aGp
		}, this.te[11] = {
			name: L(280),
			tf: aGq,
			tg: aGr,
			th: aGs
		}, this.te[12] = {
			name: L(281),
			tf: aGq,
			tg: aGr,
			th: aGs
		}, this.te[13] = {
			name: L(282),
			tf: aGl,
			tg: cos,
			th: aGm
		}, this.te[14] = {
			name: L(283),
			tf: aGl,
			tg: cos,
			th: aGm
		}, this.te[15] = {
			name: L(284),
			tf: aGn,
			tg: aGo,
			th: aGp
		}, this.te[16] = {
			name: L(285),
			tf: aGn,
			tg: aGo,
			th: aGp
		}, this.te[17] = {
			name: L(286),
			tf: aGl,
			tg: cos,
			th: aGm
		}, this.te[18] = {
			name: L(287),
			tf: aGq,
			tg: aGr,
			th: aGs
		}, this.te[19] = {
			name: L(288),
			tf: aGl,
			tg: cos,
			th: aGm
		}, this.te[20] = {
			name: L(289),
			aN: 1024,
			aO: 1024,
			a9v: 128,
			a9f: 32,
			tl: 0
		}, this.te[21] = {
			name: L(272) + " 2",
			aN: 940,
			aO: 940,
			a9v: 80,
			a9f: 8,
			tl: 0
		}, this.te[gu.a6o] = {
			name: ""
		}, this.uX = new Uint8Array(12);
		for (var dw = 0; dw < 10; dw++) this.uX[dw] = dw;
		for (this.uX[10] = 20, this.uX[11] = 21, this.uZ = new Uint8Array(10), dw = 0; dw < 10; dw++) this.uZ[dw] = 10 + dw
	}
}

function cl() {
	ir = 0, aGt = 2048, jB = new Uint32Array(4 * aGt), aGu = 0, aGv = new Uint32Array(aGt), aGw = new Uint8Array(gu.gv * gu.h1)
}

function a57(player) {
	im = player, ik = !1, aGx(), aGy();
	for (var dw = cm.a1K(im) - 1; 0 <= dw; dw--) io = dw, aGz();
	ik && aH0()
}

function aH0() {
	hK.aH1(), hK.aH2()
}

function aGz() {
	iU = cm.aBR(im, io), ip = cm.aBQ(im, io), j6 = cm.aH3(im, io), aH4(), (0 !== ir && (aH5(), aH6()) ? iR : iW)()
}

function aH6() {
	if (!((j3 = dU.dV(ip, ir)) > aR.bX)) {
		if (!j6) return !1;
		var aH7 = ir * (1 + aR.bX);
		ip += aW.aX.j7(im, aH7 - ip), j3 = dU.dV(ip, ir)
	}
	return !0
}

function aH5() {
	for (var dw = ir - 1; 0 <= dw; dw--) aGw[dU.dV(jB[dw], 4)] = 0
}

function iW() {
	1 === cm.a1K(im) && cj.zP(im);
	var b5 = aW.aX.qA(im, ip);
	cA.j4(im, ip - b5, 12), cm.aH8(im, io)
}

function aGx() {
	for (var player = im, ig = aZ.ig, du = Math.min(ig[player].length, aGt), mv = 0, aH9 = aGv, dw = du - 1; 0 <= dw; dw--) aH9[mv++] = ig[player][dw];
	aGu = mv
}

function aGy() {
	for (var dw = aZ.ig[im].length - 1; 0 <= dw; dw--) cC.hO(aZ.ig[im][dw]) && cC.jC(aZ.ig[im][dw], im);
	aZ.ig[im] = []
}

function aH4() {
	ir = 0, (iU === aR.bS ? aHA : aHB)()
}

function aHB() {
	for (var fl, sT, dw, yo = cC.yo, kR = 3; 0 <= kR; kR--)
		for (dw = aGu - 1; 0 <= dw; dw--) fl = aGv[dw] + yo[kR], sT = dU.dV(fl, 4), 0 === aGw[sT] && cC.hE(fl) && cC.hJ(fl) === iU && (aGw[sT] = 1, jB[ir++] = fl)
}

function aHA() {
	for (var fl, sT, dw, yo = cC.yo, kR = 3; 0 <= kR; kR--)
		for (dw = aGu - 1; 0 <= dw; dw--) fl = aGv[dw] + yo[kR], sT = dU.dV(fl, 4), 0 === aGw[sT] && cC.hH(fl) && (aGw[sT] = 1, jB[ir++] = fl)
}

function jI(title, a46, aHC) {
	var aHD = document.createElement("div"),
		aHE = document.createElement("div"),
		aHF = document.createElement("div"),
		aHG = document.createElement("div"),
		aHH = document.createElement("div");
	this.jM = aHF, this.jp = a46, this.show = function() {
			!1 !== aHC ? document.body.appendChild(aHD) : (document.body.appendChild(aHE), document.body.appendChild(aHG))
		}, this.jn = function() {
			!1 !== aHC ? document.body.removeChild(aHD) : (document.body.removeChild(aHE), document.body.removeChild(aHG))
		}, this.rx = function() {
			var ry = aW.bA.dJ(.1),
				aDq = aW.bA.dJ(.08 + .04 * (aL.yG < 1));
			return {
				ry: ry,
				aDq: aDq,
				s0: aL.aO / aL.bC - ry - aDq
			}
		}, this.resize = function(a6C) {
			var du = a46.length,
				rw = this.rx(),
				ry = rw.ry,
				aDq = rw.aDq;
			for (aHE.style.height = aW.bA.dH(ry), aW.bA.a5C(aHE, 2), aHG.style.top = aW.bA.dH(aL.aO / aL.bC - aDq), aHG.style.height = aW.bA.dH(aDq), aW.bA.a5C(aHG, 8), aHF.style.top = aW.bA.dH(ry), aHF.style.height = aHF.style.maxHeight = aW.bA.dH(
					rw.s0), aHE.style.font = aW.bA.mN(0, aW.bA.dJ(.02, .3)), aHG.style.font = aW.bA.mN(0, aW.bA.dJ(.02, .7)), aHF.style.font = aW.bA.mN(0, aW.bA.dJ(.02, .7)), dw = 1; dw < du; dw++) aW.bA.a5C(a46[dw].button, 4);
			for (var a6D = 0, dw = 0; dw < du; dw++) a6D += a46[dw].button.offsetWidth;
			if (a6C && a6D < aHG.offsetWidth)
				for (dw = 0; dw < du; dw++) a46[dw].button.style.width = (100 * a46[dw].button.offsetWidth / a6D).toFixed(2) + "%";
			else
				for (dw = 0; dw < du; dw++) a46[dw].button.style.width = "auto";
			aHG.a5R && (aHG.scrollLeft = aHG.a5R), a6C || this.resize(!0)
		}, this.mP = function() {
			var rw = this.rx(),
				dx = aL.bC;
			aC.fillStyle = fk.e8, aC.fillRect(0, dx * rw.ry, aL.aN, dx * rw.s0)
		}, aHD.style.position = "absolute", aHD.style.top = "0", aHD.style.left = "0", aHD.style.width = "100%", aHD.style.height = "100%", aHE.style.position = "absolute", aHE.style.top = "0", aHE.style.left = "0", aHE.style.width = "100%", aHE
		.style.display = "flex", aHE.style.backgroundColor = fk.e8, aHG.style.position = "absolute", aHG.style.left = "0", aHG.style.width = "100%", aW.bA.a5P(aHG), aHH.style.height = aHH.style.maxHeight = "100%", aHF.style.position = "absolute", aHF
		.style.width = "100%", aHF.style.backgroundColor = fk.e8,
		function() {
			for (var dw = 0; dw < a46.length; dw++) a46[dw].button.style.height = "100%", a46[dw].button.style.padding = "0.0em 0.9em"
		}();
	for (var dw = 0; dw < a46.length; dw++) aHH.appendChild(a46[dw].button);
	aHE.appendChild(function() {
		var aHL = document.createElement("h1");
		return aHL.textContent = title, aHL.style.margin = "auto", aHL.style.fontSize = 20 < title.length && aL.aO > aL.aN ? "1.8em" : "2.3em", aHL.style.webkitTextStroke = "0.02em brown", aHL.style.fontFamily = "Arial Black, Trebuchet MS",
			aHL
	}()), aHG.appendChild(aHH), !1 !== aHC && (aHD.appendChild(aHF), aHD.appendChild(aHE), aHD.appendChild(aHG))
}

function sE() {
	this.a9O = function() {
		for (var du = aR.bY, fS = bx.result.fS, g4 = fS.length, fi = (dW.cN(17 + 16 * du + 33 * g4), dW.dh(1, 1), dW.dh(4, 12), dW.dh(10, g4), dW.dh(1, +(2 === aR.aS)), dW.dh(1, aR.ab % 2), aZ.fi), dw = 0; dw < du; dw++) dW.dh(16, fi[dw]);
		for (var ac = aZ.ac, dw = 0; dw < g4; dw++) {
			var fl = fS[dw];
			dW.dh(9, fl), dW.dh(24, ac[fl])
		}
		u.v.send(u.v.w, dW.ju)
	}
}

function aDJ() {
	this.a1i = function(player) {
		return !!aR.data.passableWater && cJ.v.ha !== cJ.v.zw && cJ.v.hQ[player] !== cJ.v.aHM && 0 !== aZ.gl[player].length
	}, this.a1j = function(aHN) {
		var aDC = bw.hj[1];
		return !(4 <= aDC || !cJ.sr.hN(cI.h3(aHN))) && cC.hO(cI.h3(cI.v3(aHN, aDC)))
	}
}

function aDw() {
	var aHO = new Uint8Array(78);
	this.j = function() {
		var dw;
		for (aHO[50] = 37, dw = 0; dw < 10; dw++) aHO[dw + 3] = dw + 1;
		for (dw = 0; dw < 26; dw++) aHO[dw + 20] = dw + 11, aHO[dw + 52] = dw + 38
	}, this.aHP = function(fr) {
		return fr.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.aHQ = function(fr, size) {
		if ((fr = this.aHP(fr)).length > size) return fr.substring(0, size);
		for (; fr.length < size;) fr = "-" + fr;
		return fr
	}, this.aHR = function(fr) {
		for (var g5 = aHO, du = fr.length, dY = new Uint8Array(du), dw = 0; dw < du; dw++) dY[dw] = g5[fr.charCodeAt(dw) - 45];
		return dY
	}, this.aHS = function(aHT) {
		dW.cN(6 * aHT.length), this.aHU(aHT), da.j(dW.ju)
	}, this.aHU = function(aHT) {
		for (var du = aHT.length, aN = dW, dw = 0; dw < du; dw++) aN.dh(6, aHT[dw])
	}, this.aDv = function(fr) {
		this.aHU(this.aHR(fr))
	}, this.aDu = function(fr, size) {
		this.aHU(this.aHR(this.aHQ(fr, size)))
	}, this.t8 = function(fr, size) {
		for (var dY = this.aHR(this.aHQ(fr, size)), gp = 0, aH = 1, dw = dY.length - 1; 0 <= dw; dw--) gp += aH * dY[dw], aH *= 64;
		return gp
	}
}

function aHV() {
	var aHW = 2e4;
	this.show = function() {
		if (s.t < aHW) return !1;
		aHW = s.t + 135e4, 2 === c1.c2 && aI.aJ.aHX(Math.floor(135e4))
	}
}

function pW() {
	this.d5 = new aHV, this.j = function() {
		aI.aJ.aHY()
	}, this.aHZ = function() {
		return gG.ku.data[160].value
	}
}

function a7U() {
	this.dY = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aF0 = function() {
		for (var aHa = [], dY = this.dY, du = dY.length, dw = 0; dw < du; dw++) aHa.push(dY[dw]);
		var ll = gG.ku.data[12].l0;
		for (dw = 0; dw < du; dw++)
			if (aHa[dw] === ll) {
				aHa.splice(dw, 1), du--;
				break
			} aHa.sort(), du++, aHa.unshift(ll);
		try {
			if ("undefined" == typeof Intl) return aHa;
			for (dw = 0; dw < du; dw++) {
				var fr = new Intl.DisplayNames([aHa[dw]], {
					type: "language"
				}).of(aHa[dw]);
				fr !== aHa[dw] && (aHa[dw] = aHa[dw] + ": " + fr)
			}
		} catch (jj) {
			console.log("error 3646: " + jj)
		}
		return aHa
	}, this.aF1 = function(wZ) {
		for (var fr = gG.ku.data[12].value, du = wZ.length, dw = 0; dw < du; dw++)
			if (fr === wZ[dw].split(":")[0]) return dw;
		return 0
	}, this.vv = function(aHc) {
		if (!aHc || aHc.length < 2) return 0;
		aHc = aHc.split("-")[0].toLowerCase();
		for (var dY = this.dY, du = dY.length, dw = 0; dw < du; dw++)
			if (aHc === dY[dw]) return dw;
		return -1
	}
}

function pp() {
	this.is = function() {
		for (var iE, iF, dw = ir - 1; 0 <= dw; dw--) iE = dU.dV(jB[dw], 4) % gu.gv, iF = dU.dV(jB[dw], 4 * gu.gv), aZ.sX[im] = Math.min(iE, aZ.sX[im]), aZ.sZ[im] = Math.min(iF, aZ.sZ[im]), aZ.sY[im] = Math.max(iE, aZ.sY[im]), aZ.sa[im] = Math
			.max(iF, aZ.sa[im])
	}, this.aH1 = function() {
		var kR, fl, dw, du = aZ.ig[im].length,
			yo = cC.yo;
		loop: for (dw = du - 1; 0 <= dw; dw--) {
			for (kR = 3; 0 <= kR; kR--)
				if (fl = aZ.ig[im][dw] + yo[kR], cC.hH(fl) || cC.hE(fl) && cC.hJ(fl) !== im) {
					cC.zI(aZ.ig[im][dw], im);
					continue loop
				} aZ.ig[im][dw] = aZ.ig[im][du - 1], aZ.ig[im].pop(), du--
		}
	}, this.aH2 = function() {
		var player = im,
			iZ = aZ.iZ,
			gl = aZ.gl,
			ic = aZ.ic,
			du = iZ[player].length,
			yo = cC.yo;
		loop: for (var dw = du - 1; 0 <= dw; dw--) {
			for (var aHd = !1, aHe = !1, kR = 3; 0 <= kR; kR--) {
				var fl = iZ[player][dw] + yo[kR];
				if (cC.z6(fl, player)) continue loop;
				aHd = aHd || cC.hA(fl), aHe = aHe || cC.z2(fl)
			}
			aHd ? gl[player].push(iZ[player][dw]) : aHe ? ic[player].push(iZ[player][dw]) : cC.zH(iZ[player][dw], player), iZ[player][dw] = iZ[player][du - 1], iZ[player].pop(), du--
		}
	}, this.iX = function() {
		aZ.ac[iU] -= ir
	}, this.iY = function(border) {
		for (var du = border.length, dw = du - 1; 0 <= dw; dw--) cC.xn(iU, border[dw]) || (border[dw] = border[du - 1], border.pop(), du--)
	}, this.ie = function(border) {
		for (var du = border.length, dw = du - 1; 0 <= dw; dw--) !cC.xn(iU, border[dw]) && cC.hO(border[dw]) && (border[dw] = border[du - 1], border.pop(), du--)
	}, this.ih = function(border) {
		for (var kR, fl, du = border.length, yo = cC.yo, dw = du - 1; 0 <= dw; dw--)
			for (kR = 3; 0 <= kR; kR--)
				if (fl = border[dw] + yo[kR], cC.z6(fl, iU)) {
					aZ.iZ[iU].push(border[dw]), border[dw] = border[du - 1], border.pop(), du--;
					break
				}
	}, this.ii = function() {
		for (var kR, fl, yo = cC.yo, dw = ir - 1; 0 <= dw; dw--)
			for (kR = 3; 0 <= kR; kR--) fl = jB[dw] + yo[kR], cC.hF(iU, fl) && cC.z8(fl) && (aZ.iZ[iU].push(fl), cC.jC(fl, iU))
	}, this.ij = function() {
		var iE, iF;
		loop: for (; aZ.sZ[iU] < aZ.sa[iU];) {
			for (iE = aZ.sY[iU]; iE >= aZ.sX[iU]; iE--)
				if (cC.xn(iU, 4 * (aZ.sZ[iU] * gu.gv + iE))) break loop;
			aZ.sZ[iU]++
		}
		loop: for (; aZ.sZ[iU] < aZ.sa[iU];) {
			for (iE = aZ.sY[iU]; iE >= aZ.sX[iU]; iE--)
				if (cC.xn(iU, 4 * (aZ.sa[iU] * gu.gv + iE))) break loop;
			aZ.sa[iU]--
		}
		loop: for (; aZ.sX[iU] < aZ.sY[iU];) {
			for (iF = aZ.sa[iU]; iF >= aZ.sZ[iU]; iF--)
				if (cC.xn(iU, 4 * (iF * gu.gv + aZ.sX[iU]))) break loop;
			aZ.sX[iU]++
		}
		loop: for (; aZ.sX[iU] < aZ.sY[iU];) {
			for (iF = aZ.sa[iU]; iF >= aZ.sZ[iU]; iF--)
				if (cC.xn(iU, 4 * (iF * gu.gv + aZ.sY[iU]))) break loop;
			aZ.sY[iU]--
		}
	}, this.hL = function(player, hI) {
		return 0 === aj.al[player] || aj.al[player] !== aj.al[hI]
	}, this.a1J = function(player) {
		for (var dw, sT, du = aZ.iZ[player].length, yo = cC.yo, kR = 3; 0 <= kR; kR--)
			for (sT = yo[kR], dw = 0; dw < du; dw++)
				if (cC.hH(aZ.iZ[player][dw] + sT)) return !0;
		return !1
	}, this.aEl = function(player) {
		for (var dw, sT, du = aZ.iZ[player].length, yo = cC.yo, kR = 3; 0 <= kR; kR--)
			for (sT = yo[kR], dw = 0; dw < du; dw++)
				if (cC.z9(aZ.iZ[player][dw]) && cC.hH(aZ.iZ[player][dw] + sT)) return !0;
		return !1
	}, this.a1N = function(q8, q9) {
		for (var dw, b5, sT, fl, aHf = aZ.iZ[q8].length, aHg = aZ.iZ[q9].length, yo = (aHg < aHf && (b5 = q8, q8 = q9, q9 = b5, b5 = aHf, aHf = aHg, 0), cC.yo), kR = 3; 0 <= kR; kR--)
			for (sT = yo[kR], dw = 0; dw < aHf; dw++)
				if (fl = aZ.iZ[q8][dw] + sT, cC.hE(fl) && cC.hJ(fl) === q9) return !0;
		return !1
	}, this.aEm = function(q8, q9) {
		for (var dw, sT, fl, aHf = aZ.iZ[q8].length, yo = cC.yo, kR = 3; 0 <= kR; kR--)
			for (sT = yo[kR], dw = 0; dw < aHf; dw++)
				if (cC.z9(aZ.iZ[q8][dw]) && (fl = aZ.iZ[q8][dw] + sT, cC.hE(fl)) && cC.hJ(fl) === q9) return !0;
		return !1
	}
}

function aD7() {
	var aHh, aHi = 8,
		aHj = null;

	function aHo(xR, go, dS) {
		go *= 4;
		xR[go] = 255, xR[1 + go] = 255, xR[2 + go] = dS, xR[3 + go] = 255
	}

	function aHq(n2, aHr) {
		var iE, iF, hz, go, aHs, aHt, lU = aHi,
			a3A = aW.bA.getImageData(n2, lU, lU),
			xR = a3A.data,
			g4 = (lU >> 1) - .5,
			aHv = aW.jS.aHw(aHr, .5);
		for (aW.jS.aHx(aHr, aHv, 300) || aW.jS.aHy(aHr, 100), iF = 0; iF < lU; iF++)
			for (iE = 0; iE < lU; iE++) aHt = (lU - 1.5) * (lU - 1.5) / 4, xR[go = 4 * (iF * lU + iE)] = (aHs = (hz = (hz = iE - g4) * hz + (hz = iF - g4) * hz) <= (lU - 4.5) * (lU - 4.5) / 4 ? aHv : aHr)[0], xR[1 + go] = aHs[1], xR[2 + go] = aHs[2],
				xR[3 + go] = aHt < hz ? 0 : 255;
		n2.putImageData(a3A, 0, 0)
	}
	this.j = function() {
		var dS, lU, uk, n2, a3A, xR;
		(aHh = aHh || new Array(aR.bS)).fill(null), dS = 255, lU = aHi + 4, uk = aW.bA.yI(lU, lU), n2 = aW.bA.getContext(uk, !0), a3A = aW.bA.getImageData(n2, lU, lU), aHo(xR = a3A.data, lU + 1, dS), aHo(xR, lU + 2, dS), aHo(xR, 2 * lU + 1, dS),
			aHo(xR, 2 * lU - 3, dS), aHo(xR, 2 * lU - 2, dS), aHo(xR, 3 * lU - 2, dS), aHo(xR, lU * (lU - 3) + 1, dS), aHo(xR, lU * (lU - 2) + 1, dS), aHo(xR, lU * (lU - 2) + 2, dS), aHo(xR, lU * (lU - 2) - 2, dS), aHo(xR, lU * (lU - 1) - 3, dS),
			aHo(xR, lU * (lU - 1) - 2, dS), n2.putImageData(a3A, 0, 0), aHj = uk,
			function() {
				if (aR.ae)
					for (var uk = new Array(aj.ak.length), du = aR.bS, aHm = aHh, yz = aj.yz, dw = 0; dw < du; dw++) {
						var a0p = yz[dw];
						uk[a0p] || (uk[a0p] = function(a0p) {
							var uk = aW.bA.yI(aHi, aHi),
								n2 = aW.bA.getContext(uk, !0),
								dY = bw.yy;
							return dY.set(aj.aCf[a0p]), aHq(n2, dY), uk
						}(a0p)), aHm[dw] = uk[a0p]
					}
			}()
	}, this.mP = function() {
		var dw, player, aHz, aI0, hm, ld, aI3, aI5, aI6, hb = cJ.v.hb,
			iM = cJ.v.iM,
			hl = cJ.v.hl,
			aI7 = cJ.v.aI7,
			aI8 = aHh,
			aI9 = aR.ad,
			du = cJ.v.ha,
			aIA = aL.aN,
			aIB = aL.aO,
			aIC = gu.gv << 4,
			h9 = nN,
			gt = h9 / aHi,
			iG = sR / h9,
			iH = sS / h9,
			hz = (aIA + sR) / h9 - iG,
			i0 = (aIB + sS) / h9 - iH,
			n2 = aC;
		for (n2.imageSmoothingEnabled = h9 < 9, aW.bA.textAlign(n2, 1), aW.bA.textBaseline(n2, 1), dw = 0; dw < du; dw++) player = iM[dw] >> 3, hm = hl[dw], aHz = .9 + .1 * Math.log10(hm), aI0 = (ld = hb[dw]) % aIC / 16 - aHz, ld = aIB * (Math
			.floor(ld / aIC) / 16 - aHz - iH) / i0, aI3 = -2 * (aI6 = h9 * aHz) * (1 + (aI5 = +(player === aI9)) / 8), aI5 = aI5 * aI6 / 4, (aI6 = aIA * (aI0 - iG) / hz) < aI3 || ld < aI3 || aIA + aI5 < aI6 || aIB + aI5 < ld || (aI0 = 2 *
			aHz * gt, aI3 = aHz * h9, null === (aI5 = aI8[player]) && (aI8[player] = aI5 = function(player) {
				var uk = aW.bA.yI(aHi, aHi);
				return aHq(aW.bA.getContext(uk, !0), cC.yx(player)), uk
			}(player)), player === aI9 && (n2.setTransform(aI0, 0, 0, aI0, aI6 - 2 * aI0, ld - 2 * aI0), n2.drawImage(aHj, 0, 0)), n2.setTransform(aI0, 0, 0, aI0, aI6, ld), n2.drawImage(aI5, 0, 0), (aHz = Math.floor(function(hm) {
				if (hm < 1e3) return .42;
				if (hm < 1e4) return .34;
				if (hm < 1e6) return .26;
				if (hm < 1e8) return .19;
				return .15
			}(hm) * aI3)) < 6) || (n2.setTransform(1, 0, 0, 1, 0, 0), n2.fillStyle = aI7[dw] ? fk.ek : fk.eC, n2.font = aW.bA.mN(1, aHz), n2.fillText(aW.fv.t6(hm), aI6 + aI3, ld + aI3 + .1 * aHz));
		n2.imageSmoothingEnabled = !1, n2.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function pc() {
	this.aIF = !1, this.zJ = !1, this.aIG = !1, this.aIH = [0, 0, 0, 0], this.a0M = function() {
		var iG, iH, iI, iJ;
		this.aIG = this.aIG || this.zJ, (this.zJ || this.aIF && this.aIG) && (iG = o7.zK[0], iH = o7.zK[1], iI = o7.zK[2], iJ = o7.zK[3], iG = iG < this.aIH[0] ? this.aIH[0] : iG, iH = iH < this.aIH[1] ? this.aIH[1] : iH, iI = iI > this.aIH[2] ?
			this.aIH[2] : iI, iJ = iJ > this.aIH[3] ? this.aIH[3] : iJ, this.zJ = !1, this.aIF = !1, iG === this.aIH[0] && iH === this.aIH[1] && iI === this.aIH[2] && iJ === this.aIH[3] ? this.aFt() : iG <= iI && iH <= iJ && cU.putImageData(
				cV, 0, 0, iG, iH, iI - iG + 1, iJ - iH + 1))
	}, this.aFt = function() {
		this.aIG && this.aIH[2] >= this.aIH[0] && this.aIH[3] >= this.aIH[1] && cU.putImageData(cV, 0, 0, this.aIH[0], this.aIH[1], this.aIH[2] - this.aIH[0] + 1, this.aIH[3] - this.aIH[1] + 1), this.aIG = !1
	}, this.a3k = function() {
		this.aIH[2] >= this.aIH[0] && this.aIH[3] >= this.aIH[1] && cU.putImageData(cV, 0, 0, this.aIH[0], this.aIH[1], this.aIH[2] - this.aIH[0] + 1, this.aIH[3] - this.aIH[1] + 1), this.aIG = !1
	}, this.j = function() {
		var iE, iF;
		this.aIF = !1, this.zJ = !1, this.aIG = !1, this.aIH[0] = gu.gv, this.aIH[1] = gu.h1, this.aIH[2] = this.aIH[3] = 0;
		loop: for (iE = 1; iE < gu.gv - 1; iE++)
			for (iF = gu.h1 - 2; 1 < iF; iF--)
				if (1 === z7[cC.z0(iE, iF) + 2]) {
					this.aIH[0] = iE;
					break loop
				} loop: for (iF = 1; iF < gu.h1 - 1; iF++)
			for (iE = gu.gv - 2; 1 < iE; iE--)
				if (1 === z7[cC.z0(iE, iF) + 2]) {
					this.aIH[1] = iF;
					break loop
				} loop: for (iE = gu.gv - 2; 0 < iE; iE--)
			for (iF = gu.h1 - 2; 1 < iF; iF--)
				if (1 === z7[cC.z0(iE, iF) + 2]) {
					this.aIH[2] = iE;
					break loop
				} loop: for (iF = gu.h1 - 2; 0 < iF; iF--)
			for (iE = gu.gv - 2; 1 < iE; iE--)
				if (1 === z7[cC.z0(iE, iF) + 2]) {
					this.aIH[3] = iF;
					break loop
				}
	}
}

function os() {
	var aII, aIJ, size, hI, hm, aIK;

	function aIL(player) {
		return player < aR.bY ? aII * player : aII * aR.bY + aIJ * (player - aR.bY)
	}
	this.j = function() {
		aII = aR.bY < 16 ? 12 : 8, aIJ = 4;
		var du = aIL(aR.bS);
		size = new Uint8Array(aR.bS), hI = new Uint16Array(du), hm = new Uint32Array(du), aIK = new Uint8Array(du)
	}, this.a1s = function(aFP, aIM) {
		var aIN = this.j9(aFP, aIM),
			aIM = (this.j8(aFP, aIM, 0), aW.aX.qA(aFP, aIN));
		cA.j4(aFP, aIN - aIM, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.ze = function(player, aIM) {
		var aIQ, aIM = function(player, aIM) {
			var dw, g4 = aIL(player);
			for (dw = size[player] - 1; 0 <= dw; dw--)
				if (hI[g4 + dw] === aIM) return dw;
			return size[player]
		}(player, aIM);
		aIM !== size[player] && (aIQ = hm[aIL(player) + aIM], this.aH8(player, aIM), this.a1Z(player, aIQ, aR.bS))
	}, this.a1b = function(player, aIM) {
		for (var g4 = aIL(player), dw = size[player] - 1; 0 <= dw; dw--)
			if (hI[g4 + dw] === aIM) return !0;
		return !1
	}, this.a1c = function(player) {
		return player < aR.bY ? size[player] < aII : size[player] < aIJ
	}, this.a1K = function(player) {
		return size[player]
	}, this.aBR = function(player, dw) {
		return hI[aIL(player) + dw]
	}, this.aBQ = function(player, dw) {
		return hm[aIL(player) + dw]
	}, this.j9 = function(player, aIM) {
		for (var g4 = aIL(player), dw = size[player] - 1; 0 <= dw; dw--)
			if (hI[g4 + dw] === aIM) return hm[g4 + dw];
		return 0
	}, this.hk = function(player) {
		for (var g4 = aIL(player), gp = 0, dw = size[player] - 1; 0 <= dw; dw--) gp += hm[g4 + dw];
		return gp
	}, this.j8 = function(player, aIM, aIQ) {
		for (var g4 = aIL(player), dw = size[player] - 1; 0 <= dw; dw--) hI[g4 + dw] === aIM && (hm[g4 + dw] = aIQ)
	}, this.il = function(player, dw, aIQ) {
		hm[aIL(player) + dw] = Math.max(aIQ, 0)
	}, this.iq = function(player, dw) {
		aIK[aIL(player) + dw] = 0
	}, this.aH3 = function(player, dw) {
		return aIK[aIL(player) + dw]
	}, this.a1Z = function(player, aIQ, aIM) {
		aW.aX.q4(aIM) && cA.zk[6 - aW.aX.aY(player)]++;
		for (var g4 = aIL(player), dw = size[player] - 1; 0 <= dw; dw--)
			if (hI[g4 + dw] === aIM) return hm[g4 + dw] += aIQ, void(hm[g4 + dw] = hm[g4 + dw] > aR.bT ? aR.bT : hm[g4 + dw]);
		hI[g4 + size[player]] = aIM, hm[g4 + size[player]] = aIQ, aIK[g4 + size[player]] = 1, size[player]++, player < aR.bY && (aIM === aR.ad ? cf.gV(player, 5) : player === aR.ad && cn.xa(aIM))
	}, this.aH8 = function(player, dS) {
		var fm, g4;
		if (0 !== size[player])
			for (g4 = aIL(player), size[player]--, fm = dS; fm < size[player]; fm++) hI[g4 + fm] = hI[g4 + fm + 1], hm[g4 + fm] = hm[g4 + fm + 1], aIK[g4 + fm] = aIK[g4 + fm + 1]
	}, this.zN = function(player) {
		for (var fm, g4, zZ = [], dw = bF.bG - 1; 0 <= dw; dw--)
			for (g4 = aIL(bF.q3[dw]), fm = size[bF.q3[dw]] - 1; 0 <= fm; fm--)
				if (hI[g4 + fm] === player) {
					zZ.push(bF.q3[dw]);
					break
				} return zZ
	}
}

function aIR() {
	var jE, jF, jX;

	function aIU() {
		var mv;
		1 === aR.data.gameMode ? (aR.data.teamPlayerCount || (aR.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aR.br.bz()), mv = aW.jS.a61(aR.data.teamPlayerCount, 0), aR.data.numberTeams = mv) : (2 === aR.data
			.botDifficultyType && (aR.data.botDifficultyType = 0), 1 === aR.data.spawningType && (aR.data.spawningType = 0))
	}

	function jK() {
		1 !== aR.data.gameMode && (aR.data.teamPlayerCount = null), aIW(), aR.data.canvas = null, n.d7(5, 5)
	}

	function aIW() {
		cR.cy.j(), gG.gH.gI(156, cR.d0.d1())
	}

	function aIS() {
		aR.data.isReplay = 0, aIW(), aR.br.a64(), r.kY(), aR.br.a62(), aR.data.canvas = 2 === aR.data.mapType ? gu.nO : null, aR.bv(), aR.bt = 1
	}

	function aIl() {
		aIU();
		for (var dY = [aIa(), aIb(), aIc()], dw = 3; dw < 6; dw++) jF.dG.removeChild(jF.aIm[dw].dF), jF.aIm[dw] = dY[dw - 3], jF.dG.appendChild(jF.aIm[dw].dF);
		jF.resize()
	}

	function aIa() {
		var aIn, jb = new jc;
		return jb.jd(L(294)), aIn = 0 === aR.data.gameMode ? [L(12), L(14)][aR.data.colorsType] : aR.data.numberTeams + " Team" + (1 === aR.data.numberTeams ? "" : "s"), jb.a2f(aIn), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(21)
		}).button])), jb
	}

	function aIb() {
		var jb = new jc,
			dY = (jb.jd(L(57)), [L(18) + ": " + cM.zr[aR.data.botDifficultyValue], L(58), L(59), L(14)]);
		return jb.a2f(dY[aR.data.botDifficultyType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(25)
		}).button])), jb
	}

	function aIc() {
		var jb = new jc,
			dY = (jb.jd("Spawning"), [L(12), L(13), L(14)]);
		return jb.a2f(dY[aR.data.spawningType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(24)
		}).button])), jb
	}
	this.show = function() {
		jE.show(), this.resize(), jE.jM.scrollTop = n.v.aEb[0]
	}, this.jn = function() {
		n.v.aEb[0] = jE.jM.scrollTop, jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI("🔧 " + L(290), [new jJ("⬅️ " + L(10), jK), new jJ(L(291), aIS)]), aIU(), aR.data.canvas || (2 === aR.data.mapType ? aR.data.canvas = gu.nO : 1 === aR.data.mapType ? aR.data.canvas = gu.uj(gu.ui(aR.data), 0).nO : (aR.data
		.mapType = 0, aR.data.passableWater = aR.data.passableMountains = 1, aR.data.canvas = gu.uj(gu.ui(aR.data), aR.data.mapSeed).nO)), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc,
			uk = (jb.jd(L(32)), aR.data.canvas);
		uk.style.width = "100%", jb.jf({
			jj: uk
		}), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(20)
		}).button])), jX.push(jb)
	}(jX = []), function(jX) {
		var jb = new jc;
		jb.jd(L(61)), jb.jf(new ji({
			dS: -1,
			value: aR.data.playerCount
		}, 1, 0, function(jj) {
			var playerCount = dU.ls(Math.floor(jj.target.value), 1, 512);
			jj.target.value = aR.data.playerCount = playerCount, 1 === aR.data.gameMode && (jj = aW.jS.a61(aR.data.teamPlayerCount, 0), aR.br.bz(), aW.jS.a61(aR.data.teamPlayerCount, 0) !== jj) && aIl()
		})), jX.push(jb)
	}(jX), function(jX) {
		var jb = new jc;
		jb.jd(L(293)), jb.je(new g9({
			gF: ["Battle Royale", "Teams"],
			value: aR.data.gameMode
		}, function(dS) {
			aR.data.gameMode !== dS && (aR.data.gameMode = dS, aIl())
		})), jX.push(jb)
	}(jX), jX.push(aIa()), jX.push(aIb()), jX.push(aIc()), function(jX) {
		var jb = new jc,
			dY = (jb.jd(L(207)), [L(208), L(209), L(14)]);
		jb.a2f(dY[aR.data.playerNamesType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(23)
		}).button])), jX.push(jb)
	}(jX), function(jX) {
		var jb = new jc,
			dY = (jb.jd(L(16)), [L(17), L(18) + ": " + aR.data.aIncomeValue, L(14)]);
		jb.a2f(dY[aR.data.aIncomeType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(22)
		}).button])), jX.push(jb)
	}(jX), function(jX) {
		var jb = new jc,
			dY = (jb.jd(L(295)), [L(17), L(18) + ": " + aR.data.tIncomeValue, L(14)]);
		jb.a2f(dY[aR.data.tIncomeType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(26)
		}).button])), jX.push(jb)
	}(jX), function(jX) {
		var jb = new jc,
			dY = (jb.jd(L(296)), [L(17), L(18) + ": " + aR.data.iIncomeValue, L(14)]);
		jb.a2f(dY[aR.data.iIncomeType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(27)
		}).button])), jX.push(jb)
	}(jX), function(jX) {
		var jb = new jc,
			dY = (jb.jd(L(297)), [L(17), L(18) + ": " + aR.data.sResourcesValue, L(14)]);
		jb.a2f(dY[aR.data.sResourcesType]), jb.jf(new ua([new jJ(L(292), function() {
			n.d7(28)
		}).button])), jX.push(jb)
	}(jX), function(jX) {
		var jb = new jc;
		jb.jd(L(298)), jb.jf(new ua([new jJ(L(299), function() {
			n.o(), aR.br.a65(), n.v.aEb[0] = 0, n.d7(19)
		}).button])), jb.jf(new ua([new jJ(L(300), function() {
			oB.aIo()
		}).button])), jb.jf(new ua([new jJ(L(301), function() {
			return oB.aIp(), !0
		}).button])), jX.push(jb)
	}(jX), jX))
}

function pj() {
	this.a1m = new aIq
}

function jk(aIr, aIs, aIt, aIu) {
	var u2 = document.createElement("textarea"),
		aIv = (this.jj = u2, !0);

	function aIx() {
		u2.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aIs && aW.bA.a5C(u2, 5)
		}, this.jl = function(aIw) {
			u2.value = aIw
		}, this.jU = function() {
			return u2.value
		}, this.u4 = function() {
			u2.select()
		}, this.clear = function() {
			u2.value = ""
		}, this.u5 = function() {
			aIv && navigator.clipboard ? (u2.select(), navigator.clipboard.writeText(u2.value).catch(function() {
				aIv = !1, aIx()
			})) : aIx()
		}, u2.setAttribute("id", "textArea" + n.v.aEa++), u2.setAttribute("autocomplete", "off"), aIr && u2.setAttribute("placeholder", aIr), u2.style.top = "0", u2.style.left = "0", u2.style.width = "100%", u2.style.height = "100%", u2.style
		.userSelect = "none", u2.style.outline = "none", u2.style.resize = "none", u2.style.border = "none", u2.style.color = fk.eC, u2.style.backgroundColor = fk.e5, aIu ? (u2.style.fontSize = "1em", u2.rows = 6, u2.style.padding = "0.25em") : (u2
			.style.padding = "0.45em", u2.style.fontSize = "1.2em"), aIt && u2.addEventListener("input", function(jj) {
			aIt(jj)
		}), u2.addEventListener("focus", function() {
			aL.rU++
		}), u2.addEventListener("blur", function() {
			aL.rU--
		})
}

function oe() {
	var dY, ty, aIy, aIz, gap, aJ0, aJ1, aJ2, aJ3, aJ4, mM, a4C, aBI, aJ5, aJ6, tQ, aJ7;

	function aJA() {
		aIz = Math.floor(.2 * (aI.aJ.aK() ? .07 : .035) * aL.aM), aIz = yY(aI.aJ.aK() ? 3 : 1, aIz);
		var aJB = aL.aN / (dY.length + gap);
		aIz = aIz < aJB ? aJB : aIz, aJ6 = Math.floor((1 - gap) * aIz), ty = 0, aJC()
	}

	function aJC() {
		ty = (ty = ty < -20 ? -20 : ty) > (dY.length - 15) * aIz ? (dY.length - 15) * aIz : ty, aJ1 = Math.floor(ty / aIz), aJ2 = (aJ2 = aJ1 + Math.floor(aL.aN / aIz)) > dY.length - 1 ? dY.length - 1 : aJ2, aJ1 = (aJ1 = aJ2 < aJ1 ? aJ2 : aJ1) < 0 ?
			0 : aJ1;
		var g4 = aJ2;
		aJ0 = aIy / dY[g4];
		for (var dw = aJ2 - 1; aJ1 <= dw; dw--) dY[dw] > dY[g4] && (g4 = dw, aJ0 = aIy / Math.pow(dY[dw], aJ5))
	}

	function aJE(iE) {
		iE = Math.floor((ty + aL.aN - iE - gap * aIz) / aIz);
		return (iE = iE < -1 ? -1 : -1 === iE ? 0 : iE > dY.length - 1 ? -1 : iE) !== aJ3 && (aJ3 = iE, -1 === tQ && 0 === aJ3 && kK.aJ8 && (tQ = setInterval(aJF, 100)), 1)
	}

	function aJG(dw) {
		var aFw = Math.floor(aJ0 * Math.pow(dY[dw], aJ5));
		aC.fillRect(ty + aL.aN - (dw + 1) * aIz, aL.aO - aFw, aJ6, aFw)
	}

	function aJF() {
		var fl;
		0 !== (aJ3 = 8 === r.a8() ? -1 : aJ3) ? (aJ7 = (new Date).getTime(), clearInterval(tQ), tQ = -1) : (fl = dY[1] / 864e3, -1 !== aJ7 && (fl += ((new Date).getTime() - aJ7) * dY[1] / 864e5, aJ7 = -1), 0 < fl && (dY[0] += Math.floor(fl), s.ap = !
			0))
	}
	this.aJ8 = !1, this.j = function() {
		aJ7 = tQ = -1, aJ3 = -(aJ5 = 1), this.aGT = !1, aBI = 0, a4C = new Date, ty = 0, gap = .3, dY = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aIy = Math.floor(.15 * aL.aO), aJ4 = (aJ4 = Math.floor((aI.aJ.aK() ? .018 : .0137) * aL.aM)) < 2 ? 2 : aJ4, mM = aW.bA.mN(1, aJ4), aJA()
	}, this.kL = function(a7i) {
		var dw;
		for (this.aJ8 = !0, dw = 0; dw < a7i.length; dw++) dY.unshift(a7i[dw]);
		aJA(), s.ap = !0
	}, this.aGU = function() {
		aJC()
	}, this.qr = function(iE, iF) {
		iF > aL.aO - .6 * aIy ? this.aGT ? iE !== aBI && (ty += iE - aBI, aBI = iE, aJC(), aJE(iE), this.aGT = -1 !== aJ3, s.ap = !0) : aJE(iE) && (s.ap = !0) : this.rL()
	}, this.rL = function() {
		-1 !== aJ3 && (this.aGT = !1, aJ3 = -1, s.ap = !0)
	}, this.qu = function(iE, deltaY) {
		-1 !== aJ3 && (ty += Math.floor(deltaY), aJC(), aJE(iE), s.ap = !0)
	}, this.mJ = function(iE, iF) {
		this.qr(iE, iF), -1 !== aJ3 && (aBI = iE, this.aGT = !0)
	}, this.rM = function() {
		-1 !== aJ3 && (this.aGT = !1)
	}, this.mP = function() {
		aC.fillStyle = fk.eF;
		for (var aJI, month, b5, na, aJL, aJM, iH, aJN, aJO, dw = aJ2; aJ1 <= dw; dw--) aJG(dw);
		this.aJ8 && 0 === aJ1 && (aC.fillStyle = fk.em, aJG(0)), -1 !== aJ3 && (aC.fillStyle = fk.eE, aJG(aJ3)), -1 !== aJ3 && (aC.font = mM, aW.bA.textBaseline(aC, 2), (b5 = new Date).setTime(a4C.getTime() - 1e3 * aJ3 * 60 * 60 * 24), month =
			"month", aJI = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(b5), aJI = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(b5)), aJI = aJI + ", " + b5.getUTCDate() + " " + month + " " + b5.getFullYear(), month = 1 === dY[aJ3] ? L(302) : L(303), month = aW.fv.t6(dY[aJ3]) + " " + month, b5 = Math.floor(aC.measureText(aJI).width), na = Math
			.floor(aC.measureText(month).width), aJL = Math.floor(.5 * (b5 + aJ4)), aJM = (aJM = ty + aL.aN - (aJ3 + 1) * aIz) < aJL ? aJL : aJM > aL.aN - aJL ? aL.aN - aJL : aJM, iH = aL.aO - Math.floor(aJ0 * Math.pow(dY[aJ3], aJ5)), aJN =
			Math.floor(1.1 * aJ4), aJO = iH > aL.aO - aJN ? aL.aO - aJN : iH, aC.fillStyle = fk.e9, aC.fillRect(aL.aN - na - aJ4, aJO - aJN, na + aJ4, aJN), aC.fillRect(aJM - aJL, aL.aO - aJN, b5 + aJ4, aJN), aC.fillStyle = fk.eC, aW.bA
			.textAlign(aC, 2), aC.fillText(month, Math.floor(aL.aN - .5 * aJ4), aJO), aW.bA.textAlign(aC, 1), aC.fillText(aJI, aJM, aL.aO), aC.strokeStyle = fk.eG, aC.lineWidth = 1, aC.beginPath(), aC.moveTo(0, iH), aC.lineTo(aL.aN, iH), aC
			.closePath(), aC.stroke())
	}
}

function aBU() {
	this.aDv = function(fr) {
		for (var du = fr.length, aN = dW, dw = 0; dw < du; dw++) aN.dh(16, fr.charCodeAt(dw))
	}
}

function ow() {
	var aJP, aJQ, aJR;
	this.j = function() {
		aJP =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJQ =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aJR = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aJS = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJT = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], dw = aJP.length - 1; 0 <= dw; dw--)
			for (var fm = aJS.length - 1; 0 <= fm; fm--) aJP[dw] = aJP[dw].replace(aJS[fm], aJT[fm]);
		if (__fx.settings.realisticNames) aJP = realisticNames;
	}, this.c6 = function() {
		var du = aR.bY,
			fp = aZ.fp,
			fx = aZ.fx,
			playerNamesData = aR.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < du)
			for (var dw = 0; dw < du; dw++) fp[dw] = fx[dw] = "Player " + c3.a04(1e3);
		else
			for (dw = 0; dw < du; dw++) fp[dw] = fx[dw] = playerNamesData[dw]
	}, this.cN = function() {
		if (9 === aR.aV) {
			for (var rT = c3.random(), aJZ = aJR, aJa = aJQ, hm = cM.hm, du = aJZ.length, g4 = aR.data.teamPlayerCount[7], fp = aZ.fp, fx = aZ.fx, dw = g4 - 1; dw >= aR.bY; dw--) fp[dw] = fx[dw] = aJZ[(dw + rT) % du];
			for (du = aJa.length - 1, dw = g4; dw < aR.bS; dw++) fp[dw] = fx[dw] = aJa[hm[dw] ? du : dw % du]
		} else(2 === aR.data.playerNamesType ? function() {
			for (var du = aR.bS, fp = aZ.fp, fx = aZ.fx, playerNamesData = aR.data.playerNamesData, dw = aR.bY; dw < du; dw++) fp[dw] = fx[dw] = playerNamesData[dw]
		} : 1 === aR.data.playerNamesType ? function() {
			for (var fp = aZ.fp, fx = aZ.fx, dw = aR.bY; dw < aR.bS; dw++) fp[dw] = fx[dw] = "Bot " + c3.a04(1e3)
		} : function() {
			for (var aJb = aJP, du = aJb.length, rT = c3.random(), fp = aZ.fp, fx = aZ.fx, dw = aR.bY; dw < aR.bS; dw++) fp[dw] = fx[dw] = aJb[(dw + rT) % du]
		})()
	}
}

function a4M() {
	this.aJc = function(dY) {
		dY.fill(0)
	}, this.aJd = function(dY) {
		for (var du = dY.length, dw = 0; dw < du; dw++) dY[dw] = []
	}, this.aHw = function(w4, li) {
		for (var w5 = bw.aJe, dw = 0; dw < 3; dw++) w5[dw] = li * w4[dw];
		return w5
	}, this.aHx = function(w4, w5, aJf) {
		for (var yL = 0, dw = 0; dw < 3; dw++) yL += Math.abs(w4[dw] - w5[dw]);
		return aJf <= yL
	}, this.aHy = function(w4, aJg) {
		for (var dw = 0; dw < 3; dw++) w4[dw] = dU.ls(w4[dw] + aJg, 0, 255);
		return w4
	}, this.jW = function(dY, hR, hS) {
		hS = hS || dY.length - 1;
		for (var aJh = 0, dw = hR = hR || 0; dw <= hS; dw++) aJh += dY[dw];
		return aJh
	}, this.aJi = function(dY, aJj) {
		for (var dw, aJk, du = dY.length, aJl = [], fm = du - 1; 0 <= fm; fm--) {
			for (dw = aJk = 0; dw < du; dw++) aJj(dY[dw]) < aJj(dY[aJk]) && (aJk = dw);
			du--, aJl.push(dY[aJk]), dY[aJk] = dY[du], dY.pop()
		}
		return aJl
	}, this.min = function(dY) {
		var dw, gp, du = dY.length;
		if (0 === du) return 0;
		for (gp = dY[0], dw = 1; dw < du; dw++) gp = Math.min(gp, dY[dw]);
		return gp
	}, this.max = function(dY) {
		var du = dY.length;
		if (0 === du) return 0;
		for (var gp = dY[0], dw = 1; dw < du; dw++) gp = Math.max(gp, dY[dw]);
		return gp
	}, this.a61 = function(dY, gp) {
		for (var du = dY.length, mv = 0, dw = 0; dw < du; dw++) mv += dY[dw] > gp;
		return mv
	}, this.aJm = function(aA6, aA7, min) {
		for (var du = aA7[0], dw = du - 1; 0 <= dw; dw--) aA6[dw] < min && (aA6[dw] = aA6[--du]);
		aA7[0] = du
	}, this.aJn = function(dY, du, value) {
		for (var dw = 0; dw < du; dw++) dY[dw] -= value
	}, this.a7f = function(dY) {
		for (var du = dY.length, dw = 0; dw < du; dw++)
			if ("string" != typeof dY[dw]) return !1;
		return !0
	}, this.jT = function(fr, dY, aJo) {
		dY.fill(0);
		for (var fh = fr.split(","), du = Math.min(fh.length, dY.length), dw = 0; dw < du; dw++) dY[dw] = Math.min(parseInt(fh[dw]), aJo)
	}, this.aCR = function(fr, dY, aDh) {
		dY.fill("");
		for (var fh = fr.split('"'), du = Math.min(fh.length, 2 * dY.length), n0 = 0, dw = 1; dw < du; dw += 2) dY[n0++] = fh[dw].slice(0, aDh)
	}, this.a60 = function(dY, mv) {
		if (0 === mv) dY.fill(0);
		else {
			var aJh = this.jW(dY),
				du = dY.length;
			if (0 === aJh) dY.fill(dU.dV(mv, du));
			else
				for (var dw = 0; dw < du; dw++) dY[dw] = dU.dV(mv * dY[dw], aJh);
			if (0 === (aJh = this.jW(dY))) dY[1] = mv;
			else
				for (var n0 = 0; aJh++ < mv;) dY[n0 = (n0 + 1) % du] && dY[n0]++
		}
	}, this.aJp = function(dY) {
		if (!dY) return 0;
		var du = dY.length;
		if (0 === du) return 0;
		for (var gp = dY[du - 1], dw = du - 2; 0 <= dw; dw--)
			if (dY[dw] !== gp) return dw + 2;
		return 1
	}, this.aJq = function(dY) {
		for (var aJh = 0, dw = 0; dw < dY.length; dw++) aJh += dY[dw].length;
		return aJh
	}, this.vr = function(aJr) {
		for (var dY = [], dw = 0; dw < aJr.length; dw++) dY = dY.concat(aJr[dw]);
		return dY
	}, this.has = function(dY, gp) {
		for (var du = dY.length, dw = 0; dw < du; dw++)
			if (dY[dw] === gp) return !0;
		return !1
	}
}

function p1() {
	var tQ, aJt, aJu, aJv, aJs = !1;

	function aJw() {
		aJs = !0, tQ = -1, aJt = new Array(4);
		for (var dw = 3; 0 <= dw; dw--) aJt[dw] = !1;
		var aJx = Math.floor(1 + .02 * aL.min);
		aJu = new Array(4), (aJv = new Array(4))[1] = aJv[3] = aJu[0] = aJu[2] = 0, aJv[0] = aJu[3] = -aJx, aJu[1] = aJv[2] = aJx
	}

	function aJy() {
		if (-1 !== tQ)
			if (0 !== aR.bf && ct.m5()) {
				for (var aJz = !1, dw = 3; 0 <= dw; dw--) aJt[dw] && (aJz = !0, sR += aJu[dw], sS += aJv[dw], cn.qr(aJu[dw], aJv[dw]), cX.yP());
				aJz ? s.ap = !0 : nv.aK0()
			} else nv.aK0()
	}
	this.rV = function(dS) {
		0 !== aR.bf && ct.m5() && (aJs || aJw(), aJt[dS] = !0, -1 === tQ) && (tQ = setInterval(aJy, 20), aJy())
	}, this.rd = function(dS) {
		if (0 !== aR.bf && (aJs || aJw(), aJt[dS] = !1, -1 !== tQ)) {
			for (var aJz = !1, dw = 3; 0 <= dw; dw--) aJz = aJz || aJt[dw];
			aJz || this.aK0()
		}
	}, this.aK0 = function() {
		if (aJs && -1 !== tQ) {
			for (var dw = 3; 0 <= dw; dw--) aJt[dw] = !1;
			clearInterval(tQ), tQ = -1
		}
	}
}

function pS() {
	this.gb = new a3b, this.result = new aK1, this.aK2 = new aK3, this.a3h = new nc, this.a3g = new aP, this.zd = new fQ, this.j = function() {
		this.result.j()
	}
}

function pk() {
	function aK4(jj) {
		var dY, jj = jj.target.files;
		jj && 0 < jj.length && (jj = jj[0], "json" === (dY = jj.name.split("."))[dY.length - 1].toLowerCase()) && ((dY = new FileReader).onload = aKE, dY.readAsText(jj))
	}

	function aKE(jj) {
		var aKH;
		aR.bf || (jj = JSON.parse(jj.target.result), aKH = aR.data = new bq, aKI(jj, aKH, "mapType", 0, 2), aKI(jj, aKH, "mapProceduralIndex", 0, 255), aKI(jj, aKH, "mapRealisticIndex", 0, 255), aKI(jj, aKH, "mapSeed", 0, 16383), function(aKG, aKH,
				sT, max) {
				aKG = aKG[sT];
				aKH[sT] = aKO(aKG) ? aKG.slice(0, max) : aKH[sT]
			}(jj, aKH, "mapName", 20), function(aKG, aKH, sT) {
				var aKP;
				2 === aKH.mapType && (!aKO(aKG = aKG[sT]) || aKG.length <= 20 ? aKH.mapType = 0 : ((aKP = new Image).onload = function() {
					cR.uC.aKQ(aKP, 1), aKP.onload = null, aKP = null
				}, aKP.src = aKG))
			}(jj, aKH, "canvas"), aKI(jj, aKH, "passableWater", 0, 1), aKI(jj, aKH, "passableMountains", 0, 1), aKI(jj, aKH, "playerCount", 1, 512), aKI(jj, aKH, "humanCount", 1, 1), aKI(jj, aKH, "selectedPlayer", 0, 0), aKI(jj, aKH, "gameMode",
				0, 1), aKI(jj, aKH, "playerMode", 0, 0), aKI(jj, aKH, "battleRoyaleMode", 0, 0), aKI(jj, aKH, "numberTeams", 0, 8), aKI(jj, aKH, "isZombieMode", 0, 0), aKI(jj, aKH, "isContest", 0, 0), aKI(jj, aKH, "isReplay", 0, 0), aKL(jj, aKH,
				"elo", 16, 2, 16383), aKI(jj, aKH, "colorsType", 0, 1), aKI(jj, aKH, "colorsPersonalized", 0, 1), aKL(jj, aKH, "colorsData", 32, 512, 262143), aKI(jj, aKH, "selectableColor", 0, 1), aKL(jj, aKH, "teamPlayerCount", 16, 9, 512),
			aKI(jj, aKH, "neutralBots", 0, 1), aKI(jj, aKH, "botDifficultyType", 0, 3), aKI(jj, aKH, "botDifficultyValue", 0, 15), aKL(jj, aKH, "botDifficultyTeam", 8, 9, 15), aKL(jj, aKH, "botDifficultyData", 8, 512, 15), aKI(jj, aKH,
				"spawningType", 0, 2), aKI(jj, aKH, "spawningSeed", 0, 16383), aKL(jj, aKH, "spawningData", 16, 1024, 4095), aKI(jj, aKH, "selectableSpawn", 0, 1), aKI(jj, aKH, "playerNamesType", 0, 2),
			function(aKG, aKH, sT, size, max) {
				var aA6 = aKG[sT];
				if (Array.isArray(aA6)) {
					for (var aA7 = new Array(size), du = Math.min(aA6.length, size), dw = 0; dw < du; dw++) aA7[dw] = aKO(aA6[dw]) ? aA6[dw].slice(0, max) : "";
					aKH[sT] = aA7
				}
			}(jj, aKH, "playerNamesData", 512, 20), aKI(jj, aKH, "selectableName", 0, 1), aKI(jj, aKH, "aIncomeType", 0, 2), aKI(jj, aKH, "aIncomeValue", 0, 255), aKL(jj, aKH, "aIncomeData", 8, 512, 255), aKI(jj, aKH, "tIncomeType", 0, 2), aKI(
				jj, aKH, "tIncomeValue", 0, 255), aKL(jj, aKH, "tIncomeData", 8, 512, 255), aKI(jj, aKH, "iIncomeType", 0, 2), aKI(jj, aKH, "iIncomeValue", 0, 255), aKL(jj, aKH, "iIncomeData", 8, 512, 255), aKI(jj, aKH, "sResourcesType", 0, 2),
			aKI(jj, aKH, "sResourcesValue", 0, 2047), aKL(jj, aKH, "sResourcesData", 16, 512, 2047), n.o(), n.v.aEb[0] = 0, n.d7(19))
	}

	function aKI(aKG, aKH, sT, min, max) {
		aKG = aKG[sT];
		aKH[sT] = "number" == typeof aKG && min <= aKG && aKG <= max ? Math.floor(aKG) : aKH[sT]
	}

	function aKO(fr) {
		return "string" == typeof fr
	}

	function aKL(aKG, aKH, sT, aKR, size, max) {
		var aA6 = aKG[sT];
		if (Array.isArray(aA6)) {
			for (var aA7 = new(8 === aKR ? Uint8Array : 16 === aKR ? Uint16Array : Uint32Array)(size), du = Math.min(aA6.length, size), dw = 0; dw < du; dw++) aA7[dw] = dU.ls(aA6[dw], 0, max);
			aKH[sT] = aA7
		}
	}
	this.aIo = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aK4, input.click()
	}, this.aIp = function() {
		for (var aK7, mG, uJ = aR.data, keys = Object.keys(uJ), aK5 = {}, dw = 0; dw < keys.length; dw++) {
			var key = keys[dw];
			uJ[key] instanceof Uint8Array || uJ[key] instanceof Uint16Array || uJ[key] instanceof Uint32Array ? aK5[key] = Array.from(uJ[key]) : aK5[key] = uJ[key]
		}
		aK5.canvas = 2 === aK5.mapType && aK5.canvas ? aK5.canvas.toDataURL() : null, aK7 = aK5, aK7 = JSON.stringify(aK7, null, 2), aK7 = new Blob([aK7], {
			type: "application/json"
		}), (mG = document.createElement("a")).href = URL.createObjectURL(aK7), mG.download = "tt_scenario.json", mG.click()
	}
}

function p5() {
	var aKS, aKT, hA, aHr;
	this.j = function() {
		var dw, iE, iF, nB, aKU, aN, aO, nU, a3A, xR, gp, fl, he, fm, aDA;
		if (function() {
				if (hA = !0, aHr = "rgb(" + gu.tu[0] + "," + gu.tu[1] + "," + gu.tu[2] + ")", gu.aKX(gu.ib)) return 1;
				return hA = !1, 0
			}()) aKT = null;
		else {
			for (aKS = dU.dV(96, 4), aKU = 1 === gu.ib ? (nB = 0, 160) : (nB = 128, 32), aHr = "rgb(" + nB + "," + nB + "," + nB + ")", aKT = new Array(4), dw = 3; 0 <= dw; dw--) {
				if (aKT[dw] = document.createElement("canvas"), aN = dw % 2 == 0 ? gu.gv : aKS, aO = dw % 2 == 0 ? aKS : gu.h1 + 2 * aKS, aKT[dw].width = aN, aKT[dw].height = aO, xR = (a3A = (nU = aKT[dw].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aN, aO)).data, dw % 2 == 0)
					for (iF = aKS - 1; 0 <= iF; iF--)
						for (gp = aKU + Math.floor((iF + 1) * (nB - aKU) / (aKS + 1)), iE = aN - 1; 0 <= iE; iE--) xR[fl = 4 * ((0 === dw ? aKS - iF - 1 : iF) * aN + iE)] = gp, xR[fl + 1] = gp, xR[fl + 2] = gp, xR[fl + 3] = 255;
				else {
					for (iE = aKS - 1; 0 <= iE; iE--)
						for (gp = aKU + Math.floor((iE + 1) * (nB - aKU) / (aKS + 1)), iF = aO - 1 - aKS; aKS <= iF; iF--) xR[fl = 4 * (iF * aN + (3 === dw ? aKS - iE - 1 : iE))] = gp, xR[fl + 1] = gp, xR[fl + 2] = gp, xR[fl + 3] = 255;
					for (fm = 1; 0 <= fm; fm--)
						for (iE = aKS - 1; 0 <= iE; iE--)
							for (iF = aKS - 1; 0 <= iF; iF--) he = (Math.pow(iE * iE + iF * iF, .5) + 1) / (aKS + 1), gp = aKU + Math.floor((1 < he ? 1 : he) * (nB - aKU)), xR[fl = 4 * ((0 === fm ? aKS - iF - 1 : iF + fm * (aO - aKS)) * aN + (
								1 === dw ? iE : aKS - iE - 1))] = gp, xR[fl + 1] = gp, xR[fl + 2] = gp, xR[fl + 3] = 255
				}
				nU.putImageData(a3A, 0, 0)
			}
			aDA = aKU, gu.tr.fillStyle = "rgb(" + aDA + "," + aDA + "," + aDA + ")", gu.tr.fillRect(0, 0, gu.gv, 1), gu.tr.fillRect(0, gu.h1 - 1, gu.gv, 1), gu.tr.fillRect(0, 0, 1, gu.h1), gu.tr.fillRect(gu.gv - 1, 0, 1, gu.h1)
		}
	}, this.aD = function() {
		var fm = hA ? 0 : -aKS;
		aKY(fm, fm, gu.gv - 2 * fm, gu.h1 - 2 * fm, o7.aKZ, o7.aKa, o7.aKb, o7.aKc) || (aC.fillStyle = aHr, aC.fillRect(0, 0, aL.aN, aL.aO))
	}, this.mP = function() {
		hA || (aKd(0, -aKS, gu.gv, aKS, o7.aKZ, o7.aKa, o7.aKb, o7.aKc) && aC.drawImage(aKT[0], o7.aKe, o7.aKf - aKS), aKd(gu.gv, -aKS, aKS, gu.h1 + 2 * aKS, o7.aKZ, o7.aKa, o7.aKb, o7.aKc) && aC.drawImage(aKT[1], o7.aKe + gu.gv, o7.aKf - aKS),
			aKd(0, gu.h1, gu.gv, aKS, o7.aKZ, o7.aKa, o7.aKb, o7.aKc) && aC.drawImage(aKT[2], o7.aKe, o7.aKf + gu.h1), aKd(-aKS, -aKS, aKS, gu.h1 + 2 * aKS, o7.aKZ, o7.aKa, o7.aKb, o7.aKc) && aC.drawImage(aKT[3], o7.aKe - aKS, o7.aKf - aKS))
	}
}

function p9() {
	var aO, canvas, nU, aKg, aKh, aKi, aKj, a6G, aKk, aKl, aKm, aKo, aKn = !1,
		uk = (this.mH = !1, this.aN = 0, new Array(2)),
		aKp = 0;

	function aDl() {
		var aN = ca.aN,
			g4 = (a6G = !1, nT(nU, aN, aO), Math.floor(aN / 2));
		1 === aKg ? (nU.fillStyle = fk.eW, nU.fillRect(g4, 0, g4, aO)) : -1 === aKg && (nU.fillStyle = fk.em, nU.fillRect(0, 0, g4, aO)), nV(nU, aN, aO, 2);
		var g4 = (g4 = Math.floor(.25 * aO)) < 2 ? 2 : g4,
			a6k = (nU.fillStyle = fk.eI, Math.floor((aO - 4) * aKh[1] / aKi[1]));
		0 < a6k && nU.fillRect(2, aO - 2 - a6k, g4, a6k), 0 < (a6k = Math.floor((aO - 4) * aKh[0] / aKi[0])) && nU.fillRect(aN - 2 - g4, aO - 2 - a6k, g4, a6k);
		g4 = (g4 = Math.floor(aO / 8)) < 2 ? 2 : g4, nX(nU, Math.floor(.4 * aO), 0, aO, g4, .5, !1), nX(nU, Math.floor(aN - 1.4 * aO), 0, aO, g4, .5, !0), a6k = 1.1 * aO / uk[0].width;
		nU.imageSmoothingEnabled = !0, nU.setTransform(a6k, 0, 0, a6k, (aN - a6k * uk[0].width) / 2, -.05 * aO), nU.drawImage(uk[+aKn], 0, 0), nU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aKu() {
		aKo = -1, aKn = nt.bE(), cf.aKv(257), cf.aKw(aKn), ca.mH = !0, a6G = !0, aKk = 360;
		for (var gp, b5 = 0, dw = bF.bG - 1; 0 <= dw; dw--) aW.aX.aY(bF.q3[dw]) || (b5 += aZ.ac[bF.q3[dw]]);
		aKn ? aKi[0] = Math.max(dU.dV(3 * b5, 4), 1) : aR.ae ? 9 === aR.aV && 8 === aj.ak[ag.bQ()] ? aKi[0] = Math.max(b5, 1) : (gp = dU.dV(100 * ag.qh(), aR.bH), gp = dU.ls(200 - 2 * gp, 40, 100), gp = dU.dV(gp * b5, 100), aKi[0] = Math.max(gp,
			1)) : aKi[0] = Math.max(dU.dV(3 * b5, 5), 1), aKi[1] = Math.max(b5 - aKi[0], 1)
	}

	function a5v() {
		aKm = s.a6(), a6G = !0, aKk = aKg = 0, aKj = [], ca.mH = !1, cf.xb(247), aKh[0] = aKh[1] = 0, cf.aKv(673)
	}

	function nQ() {
		return cY.aL1(cf.aL2()) ? __fx.settings.keybindButtons ? cY.iF - 2 * (aO + dI.gap) : cY.iF - aO - dI.gap : cZ.aL1(cf.aL3()) ? cZ.nQ() - aO - dI.gap : aL.aO - aO - o8.aL4() * dI.gap
	}
	this.cD = function() {
		for (var dw = 0; dw < 2; dw++) uk[dw] = aW.canvas.mg(aF.get(3), 8 - dw, fk.fM), uk[dw] = aW.canvas.aKq(uk[dw])
	}, this.j = function() {
		aKm = -1e4, aKl = aKp = 0, aKo = -1, this.mH = !1, a6G = aKn = !1, aKh = [aKg = aKk = 0, 0], aKi = [1, 1], aKj = [], this.resize()
	}, this.resize = function() {
		aO = cY.aO, this.aN = 4 * aO, (canvas = document.createElement("canvas")).width = this.aN, canvas.height = aO, nU = canvas.getContext("2d", {
			alpha: !0
		}), aDl()
	}, this.cv = function() {
		a6G && aDl()
	}, this.mJ = function(iE, iF) {
		return !!this.mH && !(iE < aL.aN - this.aN - dI.gap || iF < nQ() || (aR.aw || this.a1w(aR.ad) && (cd.d9 && cd.rf(), c7.my.a1u(iE > aL.aN - dI.gap - this.aN / 2 ? 1 : 0)), 0))
	}, this.b2 = function() {
		0 < aKl ? 0 === --aKl && a5v() : this.mH ? 180 == --aKk && 3 * aKh[0] < aKi[0] ? a5v() : aKh[0] >= aKi[0] ? aKn ? bx.gb.a3c() : bx.gb.gc() : aKh[1] >= aKi[1] ? aKl = 4 : aKk <= 0 && a5v() : ! function() {
			var aKy = s.a6();
			if (aKy % 40 == 14) {
				if (aKp) return !(aKy < aKp) && !(aKy < aKm + 535) && (aKp = aKy + 1071, aW.aX.q2()) ? (aKu(), 1) : 0;
				(1 === bF.bG || (aR.ae ? ag.qh() : aZ.ac[am[0]]) >= dU.dV(96 * aR.bH, 100)) && (aKp = aKy + 535)
			}
			return
		}() && 0 <= aKo && (cf.fj(250, L(304, [aZ.fp[aKo]]), 673, aKo, fk.eC, fk.e9, -1, !0), aKu())
	}, this.a3f = function() {
		this.mH && aKh[0] < aKi[0] && a5v()
	}, this.a1x = function(player, aKz) {
		var aL0 = L(aKz ? 305 : 306, [aZ.fp[player]]),
			aL0 = (cf.fj(450, aL0, 257, player, aKz ? fk.eU : fk.ej, fk.e9, -1, !0), aKj.push(player), a6G = !0, aR.ay ? Math.max(aKi[0], aKi[1]) : aZ.ac[player]),
			aL0 = Math.max(aL0, 1);
		aKz ? aKh[0] += aL0 : aKh[1] += aL0, player === aR.ad && (aKg = aKz ? 1 : -1)
	}, this.mP = function() {
		var iF;
		this.mH && (iF = nQ(), aC.drawImage(canvas, aL.aN - this.aN - dI.gap, iF))
	}, this.a1z = function(player) {
		return !(!aR.ay && s.a6() < aKm + 140 || 0 !== aKk || !aW.aX.ga(1) || !aW.aX.fT(player) || 10 <= xD[player] && !aW.aX.qb(player, 9))
	}, this.a1w = function(fl) {
		if (!aW.aX.ga(1)) return !1;
		if (!aW.aX.fT(fl)) return !1;
		if (!this.mH) return !1;
		for (var dw = aKj.length - 1; 0 <= dw; dw--)
			if (aKj[dw] === fl) return !1;
		return !0
	}, this.rZ = function(player) {
		aKo = player
	}
}

function p7() {
	var a5p, a5q;
	this.j = function() {
		a5p = 1, a5q = 0
	}, this.b2 = function() {
		0 < a5p && (a5q = 0 === a5q ? s.t + 16 : a5q, a5p = (a5p -= .001 * (s.t - a5q)) < 0 ? 0 : a5p, a5q = s.t, s.ap = !0)
	}, this.mP = function() {
		0 < a5p && (aC.fillStyle = "rgba(0,0,0," + a5p + ")", aC.fillRect(0, 0, aL.aN, aL.aO))
	}
}

function aL7() {
	var jE, jF, jG, jX;

	function jK() {
		jO(), 2 !== aR.data.iIncomeType && (aR.data.iIncomeData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		2 === aR.data.iIncomeType && aW.jS.jT(jG.jU(), aR.data.iIncomeData, 255)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(296), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), jb.je(new g9({
			gF: [L(17), L(18), L(14)],
			value: aR.data.iIncomeType
		}, function(dS) {
			jO(), 2 !== dS || aR.data.iIncomeData || (aR.data.iIncomeData = new Uint8Array(aR.bS), aR.data.iIncomeData.fill(32)), aR.data.iIncomeType = dS, n.d7(27)
		})), jX.push(jb)
	}(jX = []), function(jX) {
		var jb;
		1 === aR.data.iIncomeType && ((jb = new jc).jd("Value"), jb.jf(new ji({
			dS: -1,
			value: aR.data.iIncomeValue
		}, 1, 0, function(jj) {
			var value = dU.ls(Math.floor(jj.target.value), 0, 255);
			jj.target.value = aR.data.iIncomeValue = value
		})), jX.push(jb))
	}(jX), function(jX) {
		var jb;
		2 === aR.data.iIncomeType && ((jb = new jc).jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.iIncomeData, 4)), jb.jf(jG), jX.push(jb))
	}(jX), jX))
}

function aIq() {
	this.a13 = function(player) {
		aW.aX.pz(player) && cf.fj(80, L(307), 637, 0, fk.f1, fk.e9, -1, !1)
	}, this.a14 = function(player) {
		aW.aX.pz(player) && cf.fj(80, L(308), 637, 0, fk.f1, fk.e9, -1, !1)
	}
}

function aGi() {
	this.b2 = function(ju) {
		var id, dn, m5;
		for (da.j(ju), da.dS += 2, m5 = 8 * da.size; da.dS + 8 <= m5;) id = da.jw(4), dn = da.jw(9), 0 === id ? this.a0Y(id, dn, da.jw(22)) : 1 === id ? this.a0Y(id, dn, da.jw(10), da.jw(10)) : 2 === id ? this.a0Y(id, dn, da.jw(10), da.jw(9)) :
			3 === id ? this.a0Y(id, dn, da.jw(10), da.jw(27)) : 4 === id ? this.a0Y(id, dn, da.jw(10), da.jw(16)) : 5 === id || 6 === id ? this.a0Y(id, dn, da.jw(10)) : 7 === id ? this.a0Y(id, dn, da.jw(1)) : 10 === id ? this.a0Y(id, dn, da.jw(
				20), da.jw(22)) : this.a0Y(id, dn)
	}, this.c9 = [], this.aL8 = function() {
		for (var aLA = 0, aLB = 0, aLC = 0, aLD = 0, aLE = 0, aLF = 0, dw = 0; dw < 512; dw++) aLA += aZ.aa[dw], aLB += aZ.ac[dw], aLC += aZ.bN[dw], aLD += cJ.v.hQ[dw];
		aLE += cJ.v.ha, aLF += bF.bG, this.c9.push(aLC % 1073741824 * 4 + (aLA + aLB + aLD + aLE + aLF) % 4)
	}, this.a0Y = function(id, dn, dq, ds) {
		0 === id ? c7.aGh.a0z(dn, dq) : 1 === id ? c7.aGh.a11(dn, dq, ds) : 2 === id ? c7.aGh.qM(dn, dq, ds) : 3 === id ? c7.aGh.a13(dn, dq, ds) : 4 === id ? c7.aGh.a14(dn, dq, ds) : 5 === id ? c7.aGh.a1r(dn, dq) : 6 === id ? c7.aGh.a1t(dn, dq) :
			7 === id ? c7.aGh.a1u(dn, dq) : 8 === id ? c7.aGh.gU(dn) : 9 === id ? c7.aGh.gY(dn) : 10 === id && c7.aGh.a16(dn, dq >> 10, ds, dq % 1024)
	}
}

function aLG() {
	var rm, a43, a44, a46;

	function a45(dw) {
		n.d7(8, n.uL, new a48(21, {
			a49: dw,
			hR: 0,
			hS: 10
		}))
	}
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), a43.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, a44 = [new jJ(L(309), function() {
		a45(1)
	}, 0, 0, 1), new jJ(L(310), function() {
		a45(2)
	}, 0, 0, 1), new jJ(L(311), function() {
		a45(3)
	}, 0, 0, 1), new jJ(L(312), function() {
		a45(0)
	}, 0, 0, 1), new jJ(L(313), function() {
		a45(9)
	}, 0, 0, 1), new jJ(L(182), function() {
		a45(10)
	}, 0, 0, 1), new jJ(L(183), function() {
		a45(11)
	}, 0, 0, 1)], a46 = [new jJ("⬅️ " + L(10), function() {
		n.jR()
	})], rm = new jI(L(314), a46), a43 = new a47(a44, rm.jM)
}

function oa() {
	var uI, aLH, aLI, aLJ, aLK, aLL = 0,
		aLM = 0;

	function aLO(dw) {
		var aLP = !0,
			w4 = fk.eC,
			aN = (1 === uI[dw].id ? uI[dw].nU.fillStyle = fk.f5 : uI[dw].hI === aR.bS ? uI[dw].nU.fillStyle = fk.eN : (cC.yx(uI[dw].hI), uI[dw].nU.fillStyle = aW.color.e6(bw.yy[0], bw.yy[1], bw.yy[2], .87), 400 < aW.jS.jW(bw.yy, 0, 2) && (aLP = !1,
				w4 = fk.e3)), uI[dw].canvas.width),
			nZ = (uI[dw].nU.clearRect(0, 0, aN, aLJ), uI[dw].nU.fillRect(0, 0, aN, aLJ), uI[dw].nU.fillStyle = w4, ! function(nU, aN, aLJ) {
				nU.fillRect(0, 0, aN, 1), nU.fillRect(0, aLJ - 1, aN, 1), nU.fillRect(0, 0, 1, aLJ), nU.fillRect(aN - 1, 0, 1, aLJ)
			}(uI[dw].nU, aN, aLJ), aLH + 2 * aLJ < aN && (uI[dw].nU.fillRect(aN - aLH - aLJ, 0, 1, aLJ), uI[dw].nU.fillText(aZ.fp[uI[dw].hI], Math.floor((aN - aLH) / 2), Math.floor(.57 * aLJ))), 0 !== uI[dw].id ? 0 : aLJ);
		uI[dw].nU.fillText(aW.fv.t6(uI[dw].hm), Math.floor(aN - aLH / 2 - nZ), Math.floor(.57 * aLJ)),
			function(dw, aN, nZ, aLP) {
				uI[dw].nU.fillStyle = aLP ? fk.eE : fk.eA;
				aLP = Math.floor(aLH * uI[dw].hm / uI[dw].aLU);
				uI[dw].nU.fillRect(Math.floor(aN - aLH - nZ), aLJ - aLK, aLP, aLK)
			}(dw, aN, nZ, aLP), 0 === uI[dw].id ? (aLS(dw, aN, aLP, w4), function(dw, aN, aLP) {
				uI[dw].nU.strokeStyle = aLP ? fk.eU : fk.ee, uI[dw].nU.fillRect(aLJ, 0, 1, aLJ);
				aLP = aN - aLJ;
				uI[dw].nU.beginPath(), uI[dw].nU.moveTo(Math.floor(.3 * aLJ + aLP), Math.floor(aLJ / 2)), uI[dw].nU.lineTo(Math.floor(aLJ - .3 * aLJ + 0 + aLP), Math.floor(aLJ / 2)), uI[dw].nU.stroke(), uI[dw].nU.beginPath(), uI[dw].nU.moveTo(
					Math.floor(aLJ / 2 + aLP), Math.floor(.3 * aLJ)), uI[dw].nU.lineTo(Math.floor(aLJ / 2 + aLP), Math.floor(aLJ - .3 * aLJ + 0)), uI[dw].nU.stroke()
			}(dw, aN, aLP)) : aLS(dw, 2 * aLJ, aLP, w4)
	}

	function aLS(dw, aN, aLP, w4) {
		uI[dw].nU.strokeStyle = uI[dw].aLV ? fk.eL : aLP ? fk.ek : fk.el, uI[dw].nU.fillStyle = w4, uI[dw].nU.fillRect(aN - aLJ, 0, 1, aLJ), uI[dw].nU.lineWidth = Math.max(Math.floor(aLJ / 12), 3), uI[dw].nU.lineCap = "round";
		aLP = .35;
		aN = aLJ + 1, uI[dw].nU.beginPath(), uI[dw].nU.moveTo(Math.floor(aN - aLP * aLJ + 0), Math.floor(aLP * aLJ)), uI[dw].nU.lineTo(Math.floor(aN - aLJ + aLP * aLJ), Math.floor(aLJ - aLP * aLJ + 0)), uI[dw].nU.stroke(), uI[dw].nU.beginPath(), uI[
			dw].nU.moveTo(Math.floor(aN - aLJ + aLP * aLJ), Math.floor(aLP * aLJ)), uI[dw].nU.lineTo(Math.floor(aN - aLP * aLJ + 0), Math.floor(aLJ - aLP * aLJ + 0)), uI[dw].nU.stroke()
	}

	function aLh(dY, aIj) {
		for (var hm, dw = aIj - 1; 0 <= dw; dw--) hm = cm.aBQ(aR.ad, dw), dY[dw].hm !== hm && (dY[dw].hm = hm, dY[dw].aLU = Math.max(hm, dY[dw].aLU), dY[dw].a6G = !0)
	}

	function aLk(dY, aIk) {
		for (var hR = aR.ad << 3, hl = cJ.v.hl, aEK = cJ.v.aEK, hU = cJ.v.hU, dw = aIk - 1; 0 <= dw; dw--) {
			var hV = hU[hR + dw],
				hm = hl[hV];
			dY[dw].hm !== hm ? (dY[dw].hm = hm, dY[dw].aLU = Math.max(hm, dY[dw].aLU), dY[dw].a6G = !0) : dY[dw].aLV || aEK[hV] % 64 != 5 || (dY[dw].aLV = !0, dY[dw].a6G = !0)
		}
	}

	function aLN(uJ) {
		uJ.canvas = document.createElement("canvas"), gu.tr.font = aLI;
		var aN = aLH;
		uJ.hI < aR.bS && 0 === uJ.id && (aN += Math.floor(gu.tr.measureText(aZ.fp[uJ.hI] + "000").width)), aN += aLJ, 0 === uJ.id && (aN += aLJ), uJ.canvas.width = aN, uJ.canvas.height = aLJ, uJ.nU = uJ.canvas.getContext("2d", {
			alpha: !0
		}), uJ.nU.font = aLI, aW.bA.textBaseline(uJ.nU, 1), aW.bA.textAlign(uJ.nU, 1)
	}

	function aLc(dw) {
		return cb.a6M() ? aL.aN - uI[dw].canvas.width - dI.gap : cb.iE
	}

	function aLd(dw) {
		return Math.floor(2 * dI.gap + (cb.a6M() ? cc.aO + dI.gap : 0) + cb.aO + dw * (1.3 * aLJ))
	}
	this.j = function() {
		aLL = aLM = 0, uI = [], this.resize()
	}, this.resize = function() {
		aLI = cf.mM, aLJ = cf.fontSize + 5, aLJ = Math.floor(1.25 * aLJ), aI.aJ.aK() && (aLJ = Math.floor(1.25 * aLJ)), aLK = Math.floor(.15 * aLJ), gu.tr.font = aLI, aLH = Math.floor(gu.tr.measureText("02 000 000 0000").width);
		for (var dw = uI.length - 1; 0 <= dw; dw--) aLN(uI[dw]), aLO(dw)
	}, this.cv = function() {
		for (var dw = uI.length - 1; 0 <= dw; dw--) uI[dw].a6G && (uI[dw].a6G = !1, aLO(dw))
	}, this.mJ = function(hY, hZ) {
		if (2 !== aR.bf && 0 !== aZ.aa[aR.ad] && !aR.aw && !aW.aX.aY(aR.ad))
			for (var aLX, aLY, aLZ, aLa = aI.aJ.aK() ? aLJ : 0, aLb = aI.aJ.aK() ? Math.floor(.15 * aLJ) : 0, dw = uI.length - 1; 0 <= dw; dw--)
				if (aLX = aLc(dw), aLY = aLd(dw), aLZ = uI[dw].canvas.width, aLY - aLb <= hZ && hZ <= aLY + aLJ + aLb) {
					if (aLX - aLa <= hY && hY <= aLX + aLJ + aLa) return uI[dw].aLV || (uI[dw].a6G = !0, uI[dw].aLV = !0, 0 === uI[dw].id ? c7.my.a1r(uI[dw].hI) : c7.my.a1o(uI[dw].hI)), !0;
					if (0 === uI[dw].id && aLX + aLZ - aLJ - aLa <= hY && hY <= aLX + aLZ + aLa) return cL.a10(3), c7.my.a11(cY.a0y(), uI[dw].hI), !0
				} return !1
	}, this.b2 = function() {
		var aA6, aA7, dY, aIj;
		0 === aZ.aa[aR.ad] || aW.aX.aY(aR.ad) && !aR.aw || (aA6 = uI.slice(0, aLL), aA7 = uI.slice(aLL, aLL + aLM), dY = aA6, aIj = cm.a1K(aR.ad), function(dY, aIj) {
			if (aLL !== aIj) return 1;
			for (var dw = aIj - 1; 0 <= dw; dw--)
				if (dY[dw].hI !== cm.aBR(aR.ad, dw)) return 1;
			return
		}(dY, aIj) ? aLh(dY = function(dY, aIj) {
			var dw, hI, fn, hm, aLm = [];
			loop: for (dw = 0; dw < aIj; dw++) {
				for (hI = cm.aBR(aR.ad, dw), fn = 0; fn < dY.length; fn++)
					if (dY[fn].hI === hI) {
						aLm.push(dY.splice(fn, 1)[0]);
						continue loop
					} hm = cm.aBQ(aR.ad, dw), aLN(hm = {
					hI: hI,
					hm: hm,
					aLU: hm,
					id: 0,
					a6G: !0,
					aLV: !1,
					canvas: null,
					nU: null
				}), aLm.push(hm)
			}
			return aLm
		}(dY, aIj), aIj) : aLh(dY, aIj), aA6 = dY, aA7 = function(dY) {
			var aIk = cJ.v.hQ[aR.ad];
			return function(dY, aIk) {
				if (aLM !== aIk) return 1;
				for (var hR = aR.ad << 3, hT = cJ.v.hT, hU = cJ.v.hU, dw = aIk - 1; 0 <= dw; dw--) {
					var hV = hU[hR + dw];
					if (dY[dw].hI !== hT[hV]) return 1
				}
				return
			}(dY, aIk) ? aLk(dY = function(dY, aIk) {
				var dw, hI, fn, aLm = [],
					hR = aR.ad << 3,
					hT = cJ.v.hT,
					hl = cJ.v.hl,
					hU = cJ.v.hU;
				loop: for (dw = 0; dw < aIk; dw++) {
					var hV = hU[hR + dw];
					for (hI = hT[hV], fn = 0; fn < dY.length; fn++)
						if (dY[fn].hI === hI) {
							aLm.push(dY.splice(fn, 1)[0]);
							continue loop
						} hV = hl[hV], aLN(hV = {
						hI: hI,
						hm: hV,
						aLU: hV,
						id: 1,
						a6G: !0,
						aLV: !1,
						canvas: null,
						nU: null
					}), aLm.push(hV)
				}
				return aLm
			}(dY, aIk), aIk) : aLk(dY, aIk), dY
		}(aA7), aLL = aA6.length, aLM = aA7.length, uI = aA6.concat(aA7))
	}, this.mP = function() {
		if (0 !== aZ.aa[aR.ad] && (!aW.aX.aY(aR.ad) || aR.aw))
			for (var dw = uI.length - 1; 0 <= dw; dw--) aC.drawImage(uI[dw].canvas, aLc(dw), aLd(dw))
	}
}

function ps() {
	this.aEx = [L(315), L(316), L(317), L(318), L(319), L(320), L(321), L(322), L(323), L(324), L(325), L(326), L(327), L(328), L(329), L(330)];
	var aLn = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aEw = new Array(aLn.length), this.j = function() {
		var dY = gG.ku.data[155].value.split(";"),
			g4 = dY.length;
		if (function() {
				for (var du = aLn.length, dw = 0; dw < du; dw++) o4.aEw[dw] = aLn[dw]
			}(), !(g4 > aLn.length))
			for (var dw = 0; dw < g4; dw++) dY[dw].length && (this.aEw[dw] = dY[dw])
	}, this.aEz = function(dS, code) {
		for (var aEw = this.aEw, aLp = aLn, fr = (aEw[dS] = code, ""), du = aEw.length, aLq = [], dw = 0; dw < du; dw++) aLq.push(aEw[dw] === aLp[dw] ? "" : aEw[dw]);
		du--;
		for (dw = 0; dw < du; dw++) fr += aLq[dw] + ";";
		gG.gH.gI(155, fr += aLq[du])
	}, this.aEv = function() {
		gG.gH.gI(155, ""), this.j()
	}, this.dx = function(code, dS) {
		return code === this.aEw[dS] || code === this.aEw[dS + 1]
	}
}

function ot() {
	var aLr;

	function aLt(player) {
		var rT, a4b;
		return aW.aX.aY(player) && player < aR.bY ? 0 : (rT = aLr[dU.dV((aR.bS - 1) * aZ.ac[player], aR.bH)], s.a6() < 1920 && (rT = Math.max(dU.dV(100 * (13440 - 6 * s.a6()), 1920), rT)), a4b = bL.a4c(player), aZ.bN[player] > a4b && (rT -= dU.dV(2 *
			rT * (aZ.bN[player] - a4b), a4b)), Math.min(Math.max(rT, 0), 700))
	}

	function aM3(aH) {
		for (var ac = aZ.ac, q3 = bF.q3, dw = bF.bG - 1; 0 <= dw; dw--) {
			var fl = q3[dw];
			aW.aX.qA(fl, dU.dV(aH * ac[fl], 32))
		}
	}

	function aM0() {
		var fb = aR.ad;
		bw.aM7[0] = aZ.bN[fb] - aZ.qC[fb]
	}

	function aM2(dS) {
		var fb = aR.ad;
		cA.zk[dS] += aZ.bN[fb] - aZ.qC[fb] - bw.aM7[0]
	}
	this.dk = function() {
		for (var du = aR.bS, dw = (aLr = new Uint16Array(du), 0); dw < du; dw++) aLr[dw] = 100 + aLs(dU.dV(25600 * dw, du - 4), 9)
	}, this.j = function() {
		0 === aR.data.iIncomeType ? this.aBz = aLt : 1 === aR.data.iIncomeType ? this.aBz = function(player) {
			return dU.dV(aR.data.iIncomeValue * aLt(player), 64)
		} : this.aBz = function(player) {
			return dU.dV(aR.data.iIncomeData[player] * aLt(player), 64)
		}
	}, this.b2 = function() {
		if (s.a6() % 10 == 9 && (function() {
				aM0();
				for (var q3 = bF.q3, bN = aZ.bN, dw = bF.bG - 1; 0 <= dw; dw--) {
					var fl = q3[dw],
						aM1 = dU.dV(bL.aBz(fl) * bN[fl], 1e4);
					aW.aX.qA(fl, Math.max(aM1, 1))
				}
				aM2(9)
			}(), function() {
				if (0 !== aR.data.aIncomeType) {
					if (aM0(), 1 === aR.data.aIncomeType)
						for (var ac = aZ.ac, q3 = bF.q3, aH = aR.data.aIncomeValue, dw = bF.bG - 1; 0 <= dw; dw--) {
							var fl = q3[dw];
							aW.aX.qA(fl, dU.dV(aH * ac[fl], 128))
						} else 2 === aR.data.aIncomeType && function() {
							for (var ac = aZ.ac, q3 = bF.q3, aH = aR.data.aIncomeData, dw = bF.bG - 1; 0 <= dw; dw--) {
								var fl = q3[dw];
								aW.aX.qA(fl, dU.dV(aH[fl] * ac[fl], 128))
							}
						}();
					aM2(18)
				}
			}(), s.a6() % 100 == 99)) {
			if (aM0(), 0 === aR.data.tIncomeType) aM3(32);
			else if (1 === aR.data.tIncomeType) aM3(aR.data.tIncomeValue);
			else
				for (var ac = aZ.ac, q3 = bF.q3, aH = aR.data.tIncomeData, dw = bF.bG - 1; 0 <= dw; dw--) {
					var fl = q3[dw];
					aW.aX.qA(fl, dU.dV(aH[fl] * ac[fl], 32))
				}
			aM2(8)
		}
	}, this.a4c = function(player) {
		return Math.min(100 * aZ.ac[player], aR.bU)
	}, this.a0x = function(player, qN) {
		player !== aR.ad && qN !== aR.ad && d3.fj(aZ.fp[player] + " has supported " + aZ.fp[qN] + " with " + bw.qK[0] + " ressource" + (1 === bw.qK[0] ? "." : "s.")), aW.aX.qA(qN, bw.qK[0]), cA.aLv(player, qN), cn.wq(player, bw.qK[0] + bw.qK[1]),
			cn.ws(qN, bw.qK[0]), aW.aX.qX(player)
	}, this.bM = function() {
		for (var du = bF.bG, aBy = bF.q3, g4 = 0, qD = aZ.bN, dw = 0; dw < du; dw++) g4 += qD[aBy[dw]];
		return g4
	}, this.bP = function(aLw) {
		for (var fl, du = bF.bG, aBy = bF.q3, g4 = 0, qD = aZ.bN, al = aj.al, dw = 0; dw < du; dw++) al[fl = aBy[dw]] === aLw && (g4 += qD[fl]);
		return g4
	}
}

function ph() {
	this.aL4 = function() {
		return aI.aJ.aK() ? 2 : 1
	}
}

function pK() {
	this.j = function() {
		this.dY = [], this.dS = 0
	}, this.nL = function() {
		return new Uint8Array(this.dY)
	}, this.dh = function(aM8, value) {
		for (var dY = this.dY, m5 = this.dS + aM8 - 1, aM9 = 1 + (m5 >> 3); dY.length < aM9;) dY.push(0);
		for (var dw = this.dS; dw <= m5; dw++) dY[dw >> 3] |= (value >> m5 - dw & 1) << 7 - (7 & dw);
		this.dS += aM8
	}, this.dk = function(dY, aMA, aMB) {
		var aMC = aW.jS.aJp(dY);
		this.dh(aMA, aMC);
		for (var dw = 0; dw < aMC; dw++) this.dh(aMB, dY[dw])
	}, this.dl = function(dY, aMA, aMD) {
		var aMC = aW.jS.aJp(dY);
		this.dh(aMA, aMC);
		for (var dw = 0; dw < aMC; dw++) this.di(dY[dw], aMD)
	}, this.di = function(fr, aMA) {
		var du = fr.length;
		this.dh(aMA, du);
		for (var dw = 0; dw < du; dw++) this.dh(16, fr.charCodeAt(dw))
	}, this.dj = function(uk) {
		var aME = (uk = uk.toDataURL()).split(",");
		if (aME.length < 2) console.log("error 266");
		else {
			uk = aW.fv.aMF(uk = aME[aME.length - 1], "/", "_"), uk = aW.fv.aMF(uk, "\\+", "-");
			var uk = aW.fv.aMF(uk, "=", ""),
				aHT = kV.dd.aHR(uk),
				du = aHT.length;
			this.dh(30, du);
			for (var dw = 0; dw < du; dw++) this.dh(6, aHT[dw])
		}
	}
}

function aDD() {
	function aMM(player, hm, aMJ, aMK) {
		var hI;
		if (cC.hH(aMJ)) hI = aR.bS;
		else {
			if ((hI = cC.hJ(aMJ)) === player) return void cA.j4(player, hm - aW.aX.qA(player, hm), 12);
			if (!hK.hL(player, hI)) return void c7.a4x.aMP(player, hI, hm)
		}
		cm.a1b(player, hI) || cm.a1c(player) ? (aZ.ig[player].push(aMK << 2), cm.a1Z(player, hm, hI), cj.a22(player, !0)) : cA.j4(player, hm, 12)
	}
	this.b2 = function() {
		for (var aEK = cJ.v.aEK, hb = cJ.v.hb, aEY = cJ.v.aEY, dw = cJ.v.ha - 1; 0 <= dw; dw--) 65535 === aEY[dw] && function(dw, aMK, v4) {
			if (6 === v4) {
				if (cJ.aDN.aEM(dw, aMK)) return cJ.v.aET[dw]++, cJ.v.aEY[dw] = 0, 0
			} else {
				var player = cJ.v.iM[dw] >> 3,
					dw = cJ.v.hl[dw];
				cA.aML(player), v4 < 4 ? aMM(player, dw, aMK + cI.um[v4] << 2, aMK) : 4 === v4 ? function(player, hm, aMK) {
					var dw, aF8, h6 = cI.h7,
						h9 = cI.h3(aMK);
					for (dw = 0; dw < 4; dw++)
						if (aF8 = h9 + h6[dw], cC.hH(aF8)) return aMM(player, hm, aF8, aMK);
					for (dw = 0; dw < 4; dw++)
						if (aF8 = h9 + h6[dw], cC.hE(aF8) && !cC.hF(player, aF8)) return aMM(player, hm, aF8, aMK);
					for (dw = 0; dw < 4; dw++)
						if (aF8 = h9 + h6[dw], cC.hE(aF8)) return aMM(player, hm, aF8, aMK)
				}(player, dw, aMK) : 5 === v4 && function(player, hm, aMK) {
					var dw, aF8, h6 = cI.h7,
						h9 = cI.h3(aMK);
					for (dw = 0; dw < 4; dw++)
						if (aF8 = h9 + h6[dw], cC.hE(aF8) && cC.hF(player, aF8)) return aMM(player, hm, aF8, aMK);
					for (dw = 0; dw < 4; dw++)
						if (aF8 = h9 + h6[dw], cC.hE(aF8)) return aMM(player, hm, aF8, aMK);
					for (dw = 0; dw < 4; dw++)
						if (aF8 = h9 + h6[dw], cC.hH(aF8)) return aMM(player, hm, aF8, aMK)
				}(player, dw, aMK)
			}
			return 1
		}(dw, cI.v0(hb[dw]), aEK[dw] % 64) && (cJ.aDN.aEI(dw), cJ.zV.aMH(dw))
	}, this.aMI = function(player, go, v4, hi) {
		if (!(4 <= v4)) {
			var aI9 = aR.ad;
			if (aW.aX.fT(aI9) && hK.hL(player, aI9) && player !== aI9 && 0 !== aZ.gl[aI9].length) {
				var aMJ = go + cI.um[v4] << 2;
				if (cC.hH(aMJ) || hK.hL(player, cC.hJ(aMJ))) {
					for (var aFA = !1, dw = 0; dw < 4; dw++)
						if (aMJ = go + cI.um[dw] << 2, cC.hO(aMJ) && !cC.hH(aMJ) && cC.hJ(aMJ) === aI9) {
							aFA = !0;
							break
						} aFA && (cf.zj(719, 0), cf.fj(180, L(331, [aZ.fp[player]]), 719, player, fk.ej, fk.e9, -1, !0, void 0, {
						fn: 1,
						hi: hi
					}))
				}
			}
		}
	}
}

function sJ() {
	this.k5 = function(jt) {
		var kg, db;
		da.aMQ(70) ? (kg = da.jw(3), db = n7.aMR.b2(da.jw(30), da.jw(30)), u.n9.aMS(jt, db, kg), 0 < kg || (0 === jt && 0 === gG.ku.data[105].value.length ? u.n9.a5X(0) : u.sB.aMT(jt), 4 === u.v.aMU(jt).a2t() ? 6 === r.a8() && u.s9.n6(jt) : 5 !==
			u.v.aMU(jt).a2t() || 8 !== r.a8() && 10 !== r.a8() || u.z.a0())) : u.v.jv(jt, 3269)
	}, this.k8 = function(jt) {
		var id = da.jw(6);
		1 === id ? (gG.gH.gI(160, da.jw(30)), u.v.a2q(jt), kK.aJ8 || u.n9.a5X(1), kw.a7k(), 8 === n.uL && n.uM().a5i()) : 21 === id ? 8 === n.uL && n.uM().a2O(17) : 22 === id && (gG.gH.gI(106, gG.ku.data[110].value), gG.gH.gI(110, ""), 8 === n
			.uL) && n.uM().a2O(15)
	}, this.kD = function() {
		var du = da.jw(16),
			aMV = da.jw(16);
		if (da.aMQ(55 + 10 * du + 16 * aMV)) {
			for (var dY = [], dw = 0; dw < du; dw++) dY.push(kV.kW.kX(da.jw(10)));
			kw.a7n(dY)
		} else u.v.jv(0, 3270)
	}
}

function oZ() {
	var vo, sN, aFo, aN, aO, font, fr;

	function aMa(aAI) {
		return aAI < 10 ? "0" + aAI : String(aAI)
	}
	this.j = function() {
		fr = L(332)
	}, this.resize = function() {
		aN = Math.floor((aI.aJ.aK() ? .53 : .36) * aL.aM), aO = Math.floor(.065 * aN), font = aW.bA.mN(1, Math.floor(.9 * aO)), aFo--, this.setTime()
	}, this.b2 = function() {
		this.setTime() && (s.ap = !0)
	}, this.setTime = function() {
		for (var b5 = new Date, aMW = b5.getUTCMinutes(), aMX = b5.getUTCSeconds(), aMY = [0, 10, 20, 25, 30, 35, 40, 45, 50], aMZ = (sN = 3600 - 60 * aMW - aMX, sN %= 300, 300), dw = 0; dw < aMY.length; dw++)
			if ((60 * aMW + aMX + sN) % 3600 == 60 * aMY[dw]) {
				aMZ = 0;
				break
			} return sN += aMZ, vo = fr + aMa(Math.floor(sN / 60)) + ":" + aMa(sN % 60), aFo !== (aFo = 60 * aMW + aMX) && (aN = ce.measureText(vo, font), aN += Math.floor(.4 * aO), !0)
	}, this.mP = function() {
		aC.lineWidth = 1 + Math.floor(aO / 15), aC.translate(aL.aN - aO, Math.floor(.5 * (aL.aO + aN))), aC.rotate(-Math.PI / 2), aC.fillStyle = fk.eC, aC.fillRect(0, 0, aN, aO), aC.strokeStyle = fk.e3, aC.strokeRect(0, 0, aN, aO + 10), aC
			.fillStyle = fk.e3, aC.font = font, aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 1), aC.fillText(vo, Math.floor(aN / 2), Math.floor(.59 * aO)), aC.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aDI() {
	var aMb;
	this.j = function() {
		if (aR.ae) {
			var a73 = 1 - aR.bk;
			aMb = new Array(aj.ak.length);
			for (var dw = aR.bj - 1; 0 <= dw; dw--) {
				var a0p = aj.ak[dw + a73];
				aMb[a0p] = cS.v.a38(20, aj.a37[a0p])
			}
			9 === aR.aV && (aMb[1] = cS.v.a38(20, aj.a37[1]))
		} else aMb = [cS.v.a38(20, aj.a37[7])]
	}, this.mP = function() {
		var aMe = nN;
		if (!(5 <= aMe)) {
			var aIA = aL.aN,
				aIB = aL.aO,
				iG = sR / aMe,
				iH = sS / aMe,
				iI = (aIA + sR) / aMe,
				iJ = (aIB + sS) / aMe,
				sT = -20 * aMe,
				aMf = .5 * sT,
				aIC = gu.gv << 4,
				du = cJ.v.ha,
				hb = cJ.v.hb,
				iM = cJ.v.iM,
				yz = aj.yz,
				uk = aMb,
				n2 = aC;
			3 < aMe && (n2.globalAlpha = .5 * (5 - aMe));
			for (var dw = 0; dw < du; dw++) {
				var ld = hb[dw],
					iE = aIA * (ld % aIC / 16 - iG) / (iI - iG) + aMf,
					ld = aIB * (Math.floor(ld / aIC) / 16 - iH) / (iJ - iH) + aMf;
				aIA < iE || aIB < ld || iE < sT || ld < sT || (n2.setTransform(aMe, 0, 0, aMe, iE, ld), n2.drawImage(uk[yz[iM[dw] >> 3]], 0, 0))
			}
			n2.globalAlpha = 1, n2.setTransform(aMe, 0, 0, aMe, 0, 0)
		}
	}
}

function aC2() {
	this.j = function() {
		! function() {
			var data = gG.ku.data;
			0 === data[2].gK && (aL.aO > aL.aN || 0 !== aI.id) && (data[2].value = data[2].l0 = 1);
			0 === data[100].gK && (data[100].value = data[100].l0 = (0 === aI.id ? "Player " : 1 === aI.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var dw, gp, data = gG.ku.data,
			du = data.length;
		for (dw = 0; dw < du; dw++) data[dw] && data[dw].gK === gG.jq.aMk(dw, !0) && (gp = gG.jq.aMl(dw), data[dw].value = null === gp ? data[dw].l0 : 2 === data[dw].type ? gp : Number(gp))
	}
}

function p6() {
	var iG, iH, iI, iJ, aMm = 0,
		aMn = 0;

	function aMp() {
		return Math.pow(Math.pow(iI - iG, 2) + Math.pow(iJ - iH, 2), .5)
	}

	function aMo(jj) {
		iG = aL.bC * jj.touches[0].clientX, iH = aL.bC * jj.touches[0].clientY, iI = aL.bC * jj.touches[1].clientX, iJ = aL.bC * jj.touches[1].clientY
	}
	this.qv = function(jj) {
		return 1 < jj.touches.length ? (aMn = s.t, aMm = 3, aMo(jj), ch.jn(), !0) : (aMm = 0, !1)
	}, this.qw = function(jj) {
		var lf, mK, mL;
		return 0 !== aR.bf && 1 < jj.touches.length && (aMm = Math.max(aMm - 1, 0), ct.m5() && (lf = aMp(), aMo(jj), jj = aMp(), mK = Math.floor((iG + iI) / 2), mL = Math.floor((iH + iJ) / 2), cX.aCH(mK, mL, Math.max(.125, jj) / Math.max(.125,
			lf)), s.ap = !0), !0)
	}, this.rP = function() {
		var iE, iF;
		return !!(aMm && (aMm = 0, s.t < aMn + 500)) && (iE = (iG + iI) / 2, iF = (iH + iJ) / 2, ch.rF(iE, iF), ch.click(iE, iF, !0) && (s.ap = !0), !0)
	}
}

function aDL() {
	var aMq = [];
	this.j = function() {
		aMq = []
	}, this.aEA = function() {
		return 65536 === aMq.length
	}, this.aE9 = function(lv, lw) {
		for (var ly = aMq, du = ly.length, dw = 0; dw < du; dw++) {
			var fl = ly[dw];
			if (fl[0] === lv && fl[fl.length - 1] === lw) return dw
		}
		return -1
	}, this.aEB = function(hp) {
		var aMr = new Uint32Array(hp.length);
		return aMr.set(hp), aMr.reverse()
	}, this.aEQ = function(iP, iQ) {
		var mv = iP.length - 1,
			aMs = new Uint32Array(mv + iQ.length);
		return aMs.set(iP, 0), aMs.set(iQ, mv), aMs
	}, this.aEV = function(iP, iQ, aB6, go, aMt) {
		aMt && (aB6 = (iQ = this.aEB(iQ)).length - aB6 - 2);
		aMt = iQ.subarray(aB6 + 1 + (go === iQ[aB6 + 1])), go = new Uint32Array(iP.length + aMt.length);
		return go.set(iP, 0), go.set(aMt, iP.length), go
	}, this.lz = function(hp) {
		return aMq.push(hp), aMq.length - 1
	}, this.get = function(dw) {
		return aMq[dw]
	}, this.aE8 = function() {
		return aMq
	}, this.aMv = function(lv, lw) {
		return null
	}
}

function oq() {
	this.q3 = null, this.bG = 0, this.cQ = function() {
		for (this.bG = 0, dw = aR.bS - 1; 0 <= dw; dw--) 0 !== aZ.aa[dw] && this.bG++;
		this.q3 = new Uint16Array(this.bG);
		for (var du = 0, dw = 0; dw < aR.bS; dw++) 0 !== aZ.aa[dw] && (this.q3[du++] = dw)
	}, this.aMw = function() {
		for (var ac = aZ.ac, zS = aZ.zS, fc = aZ.fc, q3 = bF.q3, dw = bF.bG - 1; 0 <= dw; dw--) {
			var b5, fl = q3[dw];
			ac[fl] <= dU.dV(zS[fl], 4) ? gd.pv(fl) : ac[fl] >= zS[fl] ? (b5 = ac[fl], 250 <= (zS[fl] = b5) && (fc[fl] = 1)) : zS[fl] -= Math.max(1, dU.dV(zS[fl] - ac[fl], 1e3))
		}
		this.gf()
	}, this.gf = function() {
		for (var aa = aZ.aa, aMy = this.q3, aMz = this.bG, dw = aMz - 1; 0 <= dw; dw--) 0 === aa[aMy[dw]] && (aMy[dw] = aMy[--aMz]);
		this.bG = aMz
	}
}

function aN0() {
	var rm, a43, a44, a46;

	function aN1(id) {
		0 !== aI.id || gG.ku.data[140].value ? 0 === id ? n.d7(8, 1, new a48(16)) : n.d7(2) : n.v.aEd(n.uL, 0 === id ? 16 : 0)
	}
	this.show = function() {
		aI.aJ.setState(12), rm.show(), this.resize(), this.b2()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), a43.resize()
	}, this.b2 = function() {
		8 === r.a8() && (2 <= cA.aN8 ? a44[2].aNI === fk.eO && a44[2].a6B(0) : a44[2].aNI !== fk.eO && a44[2].a6B(fk.eO), !aR.aw && cd.a1y(aR.ad) ? a44[1].aNI === fk.eO && a44[1].a6B(0) : a44[1].aNI !== fk.eO && a44[1].a6B(fk.eO), !aR.aw && ca
			.a1z(aR.ad) ? a44[0].aNI === fk.eO && a44[0].a6B(0) : a44[0].aNI !== fk.eO && a44[0].a6B(fk.eO))
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, a44 = [new jJ(L(333), function() {
		aN1(0)
	}), new jJ(L(314), function() {
		n.d7(16)
	}), new jJ(L(68), function() {
		n.d7(17)
	}), new jJ(L(334), function() {
		n.v.vT()
	}, 0, 0, 1), new jJ(L(26), function() {
		n.d7(3, 1)
	}), new jJ(L(73), function() {
		n.d7(18)
	}), new jJ(L(229), function() {
		aN1(1)
	}), new jJ(L(335), function() {
		var a5K = ["Patreon", L(345), L(346), "YouTube Tutorial", "Discord", L(347), L(309), L(348), L(312), L(349), "Terms", "Privacy"],
			a5L = [g7.a8J, g7.aN9, g7.aNA, "https://www.youtube.com/watch?v=6QBmA9N1668", g7.aNB, g7.aNC, g7.aND, g7.g8, g7.aNE, g7.aNF, g7.aNG, g7.aEe];
		1 === aI.id ? (a5K.splice(2, 1), a5K.splice(0, 1), a5L.splice(2, 1), a5L.splice(0, 1)) : 2 === aI.id && (a5K.splice(1, 1), a5K.splice(0, 1), a5L.splice(1, 1), a5L.splice(0, 1)), n.d7(4, 1, new uE(L(335), aW.bA.a5J(a5K, a5L), !1, [
			new jJ("⬅️ " + L(10), function() {
				n.d7(1)
			})
		]))
	}), new jJ(L(336), function() {
		n.d7(4, 1, new uE(L(336), c1.gK + "<br><a href='" + g7.aNC + "' target='_blank'>" + g7.aNC + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new jJ("⬅️ " + L(10), function() {
				n.d7(1)
			})]))
	}), new jJ(L(337), function() {
		n.d7(4, 1, new uE(L(337), L(350) + "<br>" + L(351), !1, [new jJ("⬅️ " + L(10), function() {
			n.d7(1)
		}), new jJ(L(352), function() {
			aI.aJ.aNH(), n.d7(1)
		})]))
	}), new jJ(L(338), function() {
		aI.aJ.aN5(), n.d7(4, 1, new uE(L(353), L(354) + " <a href='" + g7.aEe + "' target='_blank'>" + g7.aEe + "</a>", !1, [new jJ("⬅️ " + L(10), function() {
			n.d7(1)
		})]))
	})], a46 = [new jJ("⬅️ " + L(10), function() {
		n.v.rt()
	})], 8 === r.a8() && (a44.unshift(new jJ(L(341), function() {
		n.d7(30)
	})), a44.unshift(new jJ(L(342), function() {
		2 <= cA.aN8 && (n.o(), cT.rf(), s.ap = !0)
	}, 0, 1)), a44.unshift(new jJ(L(343), function() {
		!aR.aw && cd.a1y(aR.ad) && (c7.my.gU(), n.o(), cd.d9) && cd.rf()
	}, 0, 1)), a44.unshift(new jJ(L(344), function() {
		!aR.aw && ca.a1z(aR.ad) && (cL.a10(2), c7.my.rZ(), n.o(), cd.d9) && cd.rf()
	}, 0, 1))), 1 === aI.id && 5 <= aI.gK && a44.push(new jJ(L(339), function() {
		aI.aJ.aN7()
	})), rm = new jI(L(340), a46), a43 = new a47(a44, rm.jM)
}

function aNJ() {
	var aNK, aNL, rn, ue, aNM;
	this.aEf = new aNN, rn = new ru([.45, .27], [.5, .5], 2 / 3), aNL = [new jJ("⚔️<br>" + L(355), function() {
			aNO(0)
		}, fk.ef), new jJ("🗡️<br>" + L(290), function() {
			aNO(1)
		}, fk.ex), new jJ("🔑<br>" + L(356), function() {
			aNO(2)
		}, fk.fE), new jJ("☰<br>" + L(357), function() {
			aNO(3)
		}, fk.eP), new jJ("", function() {
			n.d7(12)
		}, fk.e8, !1),
		new jJ("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new jJ("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], ue = new ji(gG.ku.data[122]);
	for (var dw = 0; dw < aNL.length; dw++) aNL[dw].button.style.position = "absolute";

	function aNO(dS) {
		aI.aJ.setState(10), aF.yN() || aF.aNP(), 0 === dS ? n.v.d6() : 1 === dS ? (cR.uC.uD(gG.ku.data[156].value, 1) || aR.br.a65(), n.d7(19)) : 2 === dS ? 0 !== aI.id || gG.ku.data[140].value ? n.d7(8, n.uL, new a48(16)) : n.v.aEd(n.uL, 16) : 3 ===
			dS && n.d7(1)
	}
	ue.jj.style.position = "absolute", ue.jj.style.textAlign = "center", ue.jj.placeholder = L(358), this.show = function() {
		r.setState(0), aI.aJ.setState(12), this.aEf.show(), aNL[4].a6B(aW.color.aGZ(gG.ku.data[121].value)), this.resize(), document.body.appendChild(ue.jj);
		for (var dw = 0; dw < aNL.length; dw++) document.body.appendChild(aNL[dw].button);
		1 !== aI.id || aI.gK < 5 || (aNM && s.t > aNM + 144e5 ? aI.gM.setState(14) : aNM = s.t)
	}, this.jn = function() {
		this.aEf.jn(), document.body.removeChild(ue.jj);
		for (var dw = 0; dw < aNL.length; dw++) document.body.removeChild(aNL[dw].button)
	}, this.resize = function() {
		this.aEf.resize(), this.aEf.resize(), rn.resize();
		var gap = .5 * dI.gap,
			m9 = 10 / 99 * .84 * rn.aN,
			aNS = .16 * rn.aO,
			aCK = .19 * rn.aN,
			iE = rn.iE + aCK,
			m9 = rn.iF + m9 + 3 * gap,
			aN = .5 * (rn.aN - gap) - aCK,
			aCK = rn.aN - 2 * aCK - aNS - gap,
			aCK = (aW.bA.a5D(ue.jj, iE, m9, aCK, aNS), aW.bA.a5D(aNL[4].button, iE + aCK + gap, m9, aNS, aNS), .5 * (rn.iF + rn.aO - (m9 += aNS + gap) - gap));
		aW.bA.a5D(aNL[0].button, iE, m9, aN, aCK), aW.bA.a5D(aNL[1].button, iE + aN + gap, m9, aN, aCK), aW.bA.a5D(aNL[2].button, iE, m9 + aCK + gap, aN, aCK), aW.bA.a5D(aNL[3].button, iE + aN + gap, m9 + aCK + gap, aN, aCK);
		aW.bA.a5D(aNL[5].button, iE, m9 + aCK * 2 + gap * 2, aN * 2 + gap, aCK / 3);
		aW.bA.a5D(aNL[6].button, iE, m9 + aCK * 2.33 + gap * 3, aN * 2 + gap, aCK / 3);
		for (var dw = 0; dw < aNL.length; dw++) aNL[dw].button.style.font = aW.bA.mN(0, aW.bA.a5I(.065 * rn.aO)), aW.bA.a5C(aNL[dw].button, 5);
		ue.jj.style.font = aW.bA.mN(0, aW.bA.a5I(.08 * rn.aO)), aW.bA.a5C(ue.jj, 5)
	}, this.mP = function() {
		if (r.aGV(), kK.mP(), nq.mP(), o5.mP(), aF.yN()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(rn.aN * 0.03);
				aC.font = aW.bA.mN(1, size);
				aC.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = aC.measureText(text).width;
				aC.textAlign = "left";
				aC.textBaseline = "middle";
				aC.fillText(text, aC.canvas.width - textLength - size / 2, size);
			};
			aC.imageSmoothingEnabled = !1;
			var dx = aF.aG("territorial.io"),
				aH = .84 * rn.aN / dx.width;
			aC.setTransform(aH, 0, 0, aH, rn.iE + .08 * rn.aN, rn.iF), aNK = aNK || aW.a4P.aNU(dx, aW.a4P.aNV, [0, 0, 0]);
			for (var iE = -1; iE <= 1; iE += 2)
				for (var iF = -1; iF <= 1; iF += 2) aC.drawImage(aNK, iE, iF);
			aC.drawImage(dx, 0, 0), aC.imageSmoothingEnabled = !0;
			var w5 = aF.aG("logo"),
				aNW = .6666 * aH * dx.height / w5.height,
				iI = .5 * aL.aN,
				iJ = rn.iF + .5 * aH * dx.height - .5 * aNW * w5.height;
			aC.setTransform(aNW, 0, 0, aNW, iI - .6 * aH * dx.width, iJ), aC.drawImage(w5, 0, 0), aC.setTransform(aNW, 0, 0, aNW, iI + .6 * aH * dx.width - aNW * w5.width, iJ), aC.drawImage(w5, 0, 0), aC.setTransform(1, 0, 0, 1, 0, 0), aC
				.imageSmoothingEnabled = !0
		}
	}
}

function pt() {
	var gap, aG0, iE = [0, 0, 0, 0, 0],
		iF = [0, 0, 0, 0, 0],
		aH = [1, 1, 1, 1, 1],
		gp = [!0, !0, !0, !1, !1],
		dx = (this.ds = [!0, !0, !0, !1, !1], null);
	this.a33 = function(uk, aNX) {
		dx = uk, gp = aNX, aG0 = [g7.aN9, g7.aNA, g7.aNB, g7.aNB, g7.aNY], this.j()
	}, this.j = function() {
		if (aF.yN()) {
			var dw, nZ = Math.floor((aI.aJ.aK() ? .261 : .195) * aL.aM),
				na = Math.floor(.9 * nZ),
				yV = Math.floor(.17 * na);
			if (gap = aI.aJ.aK() ? 2 * dI.gap : dI.gap, aH[0] = nZ / dx[0].width, aH[1] = na / dx[1].width, aH[2] = yV / dx[2].height, aH[3] = yV / dx[3].height, aH[4] = yV / dx[4].height, aH[2] *= 1.7, aH[3] *= 1.07, iE[0] = gap, iE[1] = gap,
				iE[2] = gap, iE[3] = gap, iE[4] = Math.floor(2 * gap + aH[3] * dx[3].width), iF[0] = gap, iF[1] = iF[0] + gap + aH[0] * dx[0].height, iF[2] = iF[1] + gap + aH[1] * dx[1].height, iF[3] = iF[2] + gap + aH[2] * dx[2].height, iF[4] =
				iF[3], !gp[0])
				for (dw = 0; dw < 5; dw++) iF[dw] -= aH[0] * dx[0].height + gap;
			if (!gp[1])
				for (dw = 2; dw < 5; dw++) iF[dw] -= aH[1] * dx[1].height + gap
		}
	}, this.mH = function() {
		return !(7 === r.a8() && aI.aJ.aK())
	}, this.mJ = function(mK, mL) {
		if (dx && this.mH())
			for (var dw = gp.length - 1; 0 <= dw; dw--)
				if (gp[dw] && this.ds[dw] && iE[dw] < mK && iF[dw] < mL && mK < iE[dw] + aH[dw] * dx[dw].width && mL < iF[dw] + aH[dw] * dx[dw].height) return n.d7(9, n.uL, new aNZ("You are leaving Territorial.io.", aW.bA.a5M(aG0[dw]))), !0;
		return !1
	}, this.mP = function() {
		if (dx && this.mH()) {
			var dw;
			for (aC.imageSmoothingEnabled = !0, dw = 0; dw < 5; dw++) gp[dw] && this.ds[dw] && (aC.setTransform(aH[dw], 0, 0, aH[dw], iE[dw], iF[dw]), aC.drawImage(dx[dw], 0, 0));
			aC.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function oy() {
	this.mi = new vz, this.xR = new mR
}

function aK3() {
	this.aNa = function() {
		for (var du = bF.bG, aBy = bF.q3, fS = [], dw = 0; dw < du; dw++) {
			var fl = aBy[dw];
			aW.aX.q6(fl) && fS.push(fl)
		}
		return fS
	}, this.aNb = function() {
		if (0 === aj.ak[aR.ai]) return this.aNc();
		ag.vG(aR.ai);
		for (var fS = [], du = bw.vI[0], vH = bw.vH, dw = 0; dw < du; dw++) {
			var fl = vH[dw];
			aW.aX.q6(fl) && fS.push(fl)
		}
		return fS
	}, this.aNc = function() {
		var fl = am[0];
		return aW.aX.q6(fl) ? [fl] : []
	}, this.aNd = function(fS) {
		for (var du = fS.length, b5 = 0, ac = aZ.ac, dw = 0; dw < du; dw++) b5 += ac[fS[dw]];
		return b5
	}
}

function a4N() {
	var aNe = {
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
		aNf = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.aDj = function(aIw) {
		return aIw.replace(aNf, function(match) {
			return aNe[match] || match
		})
	}, this.t6 = function(gp) {
		var dw, a9Y, aNg, aNh, aNi;
		if (gp < 0) return "-" + this.t6(Math.abs(gp));
		if (gp < 1e3) return gp.toString();
		for (a9Y = Math.floor(Math.log(gp + .5) / Math.log(10)) + 1, aNg = Math.floor((a9Y - 1) / 3), aNi = (aNh = gp.toString()).substring(a9Y - 3, a9Y), dw = 1; dw < aNg; dw++) aNi = aNh.substring(a9Y - 3 * (dw + 1), a9Y - 3 * dw) + " " + aNi;
		return aNh.substring(0, a9Y - 3 * aNg) + " " + aNi
	}, this.aGE = function(fl, a9Y) {
		return fl.toFixed(a9Y) + "%"
	}, this.aNj = function(gp, aNk) {
		return gp.toFixed(dU.ls(Math.floor((void 0 === aNk ? 3 : aNk) - Math.log10(Math.max(gp, 1))), 0, 8))
	}, this.a87 = function(gp, aH, a9Y) {
		return (gp * aH).toFixed(a9Y)
	}, this.g0 = function(username) {
		var aF8, h9 = username.indexOf("[");
		return !(h9 < 0) && 1 < (aF8 = username.indexOf("]")) - h9 && aF8 - h9 <= 8 ? username.substring(h9 + 1, aF8).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.g0;
	this.aNl = function(fr) {
		for (var fm = Math.floor(.5 * fr.length + .5), m5 = Math.floor(.5 * (fm - 1)), dw = 0; dw < m5; dw++)
			for (var fn = -1; fn < 2; fn += 2) {
				var dx = fm + fn * dw;
				if (" " === fr[dx]) return [this.fw(fr.substring(0, dx)), this.aNm(fr.substring(dx))]
			}
		return [fr.substring(0, fm), fr.substring(fm)]
	}, this.aNm = function(fr) {
		for (var du = fr.length, dw = 0; dw < du; dw++)
			if (" " !== fr[dw]) return fr.substring(dw);
		return fr
	}, this.fw = function(fr) {
		for (var dw = fr.length - 1; 0 <= dw; dw--)
			if (" " !== fr[dw]) return fr.substring(0, dw + 1);
		return fr
	}, this.aNn = function(fr, aNo) {
		return fr.split("(")[0] + "(🧈 " + aNo.toFixed(2) + ")"
	}, this.startsWith = function(fr, aNp) {
		return fr.substring(0, aNp.length) === aNp
	}, this.vt = function(fr, aNp) {
		var du = fr.length;
		return fr.substring(du - aNp.length, du) === aNp
	}, this.jm = function(dY, aNq, aNr) {
		var fr = "",
			du = dY.length - 1;
		aNr = aNr || "";
		for (var dw = 0; dw < du; dw++) fr += aNr + dY[dw] + aNr + ",", (dw + 1) % aNq == 0 && (fr += "\n");
		return fr += aNr + dY[du] + aNr
	}, this.aMF = function(fr, w4, w5) {
		return fr.replace(new RegExp(w4, "g"), w5)
	}
}

function a4U() {
	var aNs = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a8b = function(t) {
		var aNt, fr = new Date(t.getTime() - 6e4 * t.getTimezoneOffset()).toUTCString();
		return fr.length < 12 || (fr = fr.substring(5, fr.length), 0 === (t = t.getTimezoneOffset())) ? fr : (aNt = (t < 0 ? "+" : "-") + dU.dV(Math.abs(t), 60), 0 == (t = Math.abs(t) % 60) ? fr + aNt : fr + aNt + ":" + (t < 10 ? "0" : "") + t)
	}, this.a8q = function(t) {
		var fr = t.toUTCString();
		return fr.length < 12 ? fr : function(t) {
			return aNs[t.getUTCDay()]
		}(t) + ", " + fr.substring(5, fr.length - 4)
	}
}

function sI() {
	function aO2() {
		var id = da.jw(3);
		return 0 === id ? {
			id: id,
			nK: da.jw(30),
			sl: p.a4B.vx(kV.nJ.uD(7))
		} : 1 === id ? {
			id: id,
			nK: da.jw(30),
			tI: da.jw(3),
			value: da.jw(30),
			target: da.jw(30)
		} : 2 === id ? {
			id: id,
			nK: da.jw(30),
			tI: da.jw(3)
		} : 3 === id ? {
			id: id,
			nK: da.jw(30),
			tI: da.jw(3),
			value: da.jw(4),
			target: da.jw(30)
		} : 4 === id ? {
			id: id,
			nK: da.jw(30),
			tI: da.jw(3),
			target: da.jw(30)
		} : 5 === id ? {
			id: id,
			tI: da.jw(6)
		} : 6 === id ? {
			id: id,
			value: da.jw(17)
		} : null
	}
	this.k2 = function(jt) {
		if (jt !== u.v.x) u.v.close(jt, 3239);
		else if (6 !== r.a8()) u.v.close(jt, 3271);
		else {
			p.j();
			for (var dw = 0; dw < 4; dw++) {
				var k = p.v.a3W[dw],
					playerCount = (k.aAK = da.jw(10), k.ib = da.jw(6), k.mapSeed = da.jw(14), k.ka = da.jw(4), k.aAL = da.jw(6), k.aAM = da.jw(4), k.a41 = da.jw(1), k.aAN = da.jw(12), k.spawningSeed = da.jw(14), da.jw(16));
				p.t9.a3w[dw] = da.jw(16);
				for (var fm = 0; fm < playerCount; fm++) p.t9.gh(dw, da.jw(30), kV.nJ.uD(5), da.jw(4), da.jw(30), da.jw(7), da.jw(16), da.jw(18), da.jw(11), da.jw(12))
			}
			n.d7(29), p.v.aBX(!0)
		}
	}, this.kE = function(jt) {
		if (jt !== u.v.x) u.v.close(jt, 3239);
		else if (p.ra) {
			p.v.aBW[0] = da.jw(20), p.v.aBW[1] = da.jw(20);
			for (var aNv = da.jw(16), fm = 0; fm < aNv; fm++) {
				var id = da.jw(3);
				0 === id ? p.t9.gh(da.jw(2), da.jw(30), kV.nJ.uD(5), 0, 1234566, 127, 0, da.jw(18), 0, da.jw(12)) : 1 === id ? p.t9.aNw(da.jw(16), da.jw(2)) : 2 === id ? p.t9.aNx(da.jw(16), da.jw(2), da.jw(2)) : 3 === id ? p.t9.aNy(da.jw(16), da
					.jw(2)) : 4 === id ? p.t9.aNz(da.jw(16), da.jw(2), da.jw(4), da.jw(30), da.jw(7), da.jw(16), da.jw(11)) : 5 === id && p.t9.aO0(da.jw(16), da.jw(2), da.jw(1))
			}
			for (var dw = 0; dw < 4; dw++) {
				var k = p.v.a3W[dw];
				if (k.aAK = da.jw(10), 0 === k.aAK) {
					if (k.w = da.jw(10), k.b = da.jw(10), p.a9.pv(dw)) return;
					k.ib = da.jw(6), k.mapSeed = da.jw(14), k.ka = da.jw(4), k.aAL = da.jw(6), k.aAM = da.jw(4), k.a41 = da.jw(1), k.aAN = da.jw(12), k.spawningSeed = da.jw(14), k.aAQ.push(k.aAQ[0]), k.aAQ.shift()
				}
			}
			p.v.aBZ()
		} else u.v.close(jt, 3251)
	}, this.kF = function(jt) {
		if (jt !== u.v.x) u.v.close(jt, 3272);
		else if (p.ra) {
			for (var a3P = da.jw(4), k = p.v.a3W[a3P], a3Y = k.a3Y, aO1 = (k.aAO = da.jw(20), da.jw(6)), dw = 0; dw < aO1; dw++) {
				var tH = aO2();
				p.mi.tG(tH), a3Y.push(tH)
			}
			p.v.aBf(a3P)
		} else u.v.close(jt, 3273)
	}, this.kG = function(jt) {
		jt !== u.v.x ? u.v.close(jt, 3276) : p.ra ? p.message.vp(aO2()) : u.v.close(jt, 3277)
	}
}

function a47(a0a, dD) {
	var dF;
	this.resize = function() {
		for (var dw = 0; dw < a0a.length; dw++) aW.bA.a5C(a0a[dw].button);
		dF.style.gap = dF.style.padding = aW.bA.dH(dI.b9)
	}, (dF = document.createElement("div")).style.display = "grid", dF.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", dF.style.overflowY = "auto", dF.style.gridAutoRows = "5.3em", dF.style.maxHeight = "100%";
	for (var dw = 0; dw < a0a.length; dw++) a0a[dw].aO3(1), dF.appendChild(a0a[dw].button);
	dD.appendChild(dF)
}

function aO4() {
	var rm, vM, jX;
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), vM.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(L(359), [new jJ("⬅️ " + L(10), function() {
		n.d7(7, n.uN(7).a2h)
	}), new jJ(L(116), function() {
		gG.gH.gI(105, kV.dd.aHQ(vM.aIm[0].aO6[0].jj.value, 5)), gG.gH.gI(106, kV.dd.aHQ(vM.aIm[1].aO6[0].jj.value, 8)), n.d7(8, n.uN(7).a2h, new a48(18))
	})]), vM = new jL(rm.jM, ((jX = []).push(function() {
		var jb = new jc;
		return jb.jd(L(97)), jb.jf(new ji({
			value: "",
			dS: -1
		})), jb
	}()), jX.push(function() {
		var jb = new jc,
			a88 = (jb.jd(L(99)), new ji({
				value: "",
				dS: -1
			}));
		return a88.jj.type = "password", jb.jf(a88), jb.jf(new ua([new jJ(L(100), function(jj) {
			return jj.textContent === L(100) ? (jj.textContent = L(101), a88.jj.type = "text") : (jj.textContent = L(100), a88.jj.type = "password"), !0
		}).button])), jb
	}()), jX))
}

function oT() {
	var aE1, aE2, aO7, aLJ, aO8, aO9, aOA, aOB, aOC, aOD;

	function aOF() {
		var bc = aR.bc;
		for (aOC = bc; aOC < aR.bS; aOC++) aOE();
		for (aOC = aR.bh ? aR.bY : 0; aOC < bc; aOC++) {
			if (!aOI()) {
				for (var fn = aR.bd = aOC; fn < bc; fn++) aOC = fn, aOE();
				return
			}
			aOJ(aO9 + aE1 * aO8 + dU.dV(aO8, 2), aOA + aE2 * aO8 + dU.dV(aO8, 2))
		}
	}

	function aOe(player) {
		for (var sX = aZ.sX, sZ = aZ.sZ, sY = aZ.sY, sa = aZ.sa, iF = sZ[player]; iF <= sa[player]; iF++)
			for (var iE = sX[player]; iE <= sY[player]; iE++) {
				var gt = cC.z0(iE, iF);
				cC.hE(gt) && (cC.z9(gt) ? cC.jC(gt, player) : cC.zH(gt, player))
			}
	}

	function aOd(dY, hR, hS) {
		var b5 = dY[hR];
		dY[hR] = dY[hS], dY[hS] = b5
	}

	function aOI() {
		return function() {
			var dw;
			for (dw = 0; dw < 8; dw++)
				if (aE1 = dU.dV(aO7 * c3.random(), c3.value(100)), aE2 = dU.dV(aLJ * c3.random(), c3.value(100)), aOj()) return 1;
			return
		}() || function() {
			var hz, i0, fm, xM, fn, xL;
			for (hz = dU.dV(aO7 * c3.random(), c3.value(100)), i0 = dU.dV(aLJ * c3.random(), c3.value(100)), fm = 40; 1 <= fm; fm--)
				for (xM = aLJ - fm; 0 <= xM; xM -= 40)
					for (aE2 = (xM + i0) % aLJ, fn = 40; 1 <= fn; fn--)
						for (xL = aO7 - fn; 0 <= xL; xL -= 40)
							if (aE1 = (xL + hz) % aO7, aOj()) return 1;
			return
		}()
	}

	function aOj() {
		for (var fl, aOl, gap = dU.dV(aO8 - aOB, 2), tn = aOA + aE2 * aO8 + gap, u0 = aO9 + aE1 * aO8 + gap, aOk = tn + aOB - 1; tn <= aOk; aOk--)
			for (aOl = u0 + aOB - 1; u0 <= aOl; aOl--)
				if (fl = cC.z0(aOl, aOk), !cC.hO(fl) || cC.z9(fl)) return;
		return 1
	}

	function aOJ(xL, xM) {
		aOE(), aOm(xL - 2, xM - 2)
	}

	function aOE() {
		aZ.aa[aOC] = 0, aZ.ac[aOC] = aZ.zS[aOC] = 0, aZ.ig[aOC] = [], aZ.iZ[aOC] = [], aZ.gl[aOC] = [], aZ.ic[aOC] = [], aZ.sX[aOC] = aZ.sZ[aOC] = aZ.sY[aOC] = aZ.sa[aOC] = 0
	}

	function aOm(xL, xM) {
		var fl, dw, aOn, aOo;
		for (aZ.aa[aOC] = 1, aZ.sX[aOC] = xL + 10, aZ.sZ[aOC] = xM + 10, aZ.sa[aOC] = aZ.sY[aOC] = 0, aOn = xL; aOn < xL + 4; aOn++)
			for (aOo = xM; aOo < xM + 4; aOo++)(xL < aOn && aOn < xL + 3 || xM < aOo && aOo < xM + 3) && (fl = cC.z0(aOn, aOo), cC.hO(fl)) && (aZ.sX[aOC] = Math.min(aOn, aZ.sX[aOC]), aZ.sY[aOC] = Math.max(aOn, aZ.sY[aOC]), aZ.sZ[aOC] = Math.min(aOo,
				aZ.sZ[aOC]), aZ.sa[aOC] = Math.max(aOo, aZ.sa[aOC]), aOD[aZ.ac[aOC]] = fl, aZ.ac[aOC]++, cC.zH(fl, aOC));
		for (aZ.zS[aOC] = aZ.ac[aOC], dw = aZ.ac[aOC] - 1; 0 <= dw; dw--) cC.z5(aOD[dw], aOC) ? (cC.jC(aOD[dw], aOC), aZ.iZ[aOC].push(aOD[dw])) : cC.tp(aOD[dw]) ? (cC.jC(aOD[dw], aOC), aZ.gl[aOC].push(aOD[dw])) : cC.z1(aOD[dw]) && (cC.jC(aOD[dw],
			aOC), aZ.ic[aOC].push(aOD[dw]))
	}
	this.j = function() {
		if (aOD = new Array(12), aOB = 6, aO8 = 10, aO7 = dU.dV(gu.gv, aO8), aLJ = dU.dV(gu.h1, aO8), aO9 = dU.dV(gu.gv - aO8 * aO7, 2), aOA = dU.dV(gu.h1 - aO8 * aLJ, 2), aR.bh)
			for (var dw = 0; dw < aR.bY; dw++) aOC = dw, aOE(), aZ.aa[aOC] = 1;
		(0 === aR.data.spawningType ? aOF : 1 === aR.data.spawningType ? (aOF(), function() {
			var aD5 = aR.bj;
			aR.bk || aD5++;
			if (!(aD5 < 3)) {
				for (var data = aR.data, m4 = (aR.bh ? aR.bY : 0) + data.teamPlayerCount[0], m5 = aR.bd, aOK = new Uint32Array(aD5), aOL = new Uint32Array(aD5), aOM = new Uint16Array(aD5), aON = new Uint16Array(aD5), al = aj.al, sX = aZ
						.sX, sZ = aZ.sZ, sY = aZ.sY, sa = aZ.sa, aOO = bw.aOO, aOP = bw.aOP, dw = m4; dw < m5; dw++) aOO[dw] = sX[dw] + sY[dw] >> 1, aOP[dw] = sZ[dw] + sa[dw] >> 1;
				for (dw = m4; dw < m5; dw++) {
					var id = al[dw];
					aOK[id] += aOO[dw], aOL[id] += aOP[dw]
				}
				var ak = aj.ak;
				for (dw = 1; dw < aD5; dw++) {
					var mv = Math.max(data.teamPlayerCount[ak[dw]], 1);
					aOM[dw] = dU.dV(aOK[dw], mv), aON[dw] = dU.dV(aOL[dw], mv)
				}
				var aCg = aj.aCg,
					aCh = aj.aCh,
					aCi = aj.aCi,
					vH = bw.vH;
				for (dw = 0; dw < 512; dw++) vH[dw] = dw;
				for (var rT = 0; rT < 2 + (4 <= aD5); rT++)
					for (dw = m4; dw < m5; dw++) {
						for (var iP = dw, aOQ = vH[iP], aOR = 1, he = dU.aJx(aOO[aOQ] - aOM[1], aOP[aOQ] - aON[1]), fm = 2; fm < aD5; fm++) {
							var aLW = dU.aJx(aOO[aOQ] - aOM[fm], aOP[aOQ] - aON[fm]);
							aLW < he && (he = aLW, aOR = fm)
						}
						var aOS = al[iP];
						if (aOR !== aOS) {
							if (2 === rT && 4 <= aD5) {
								var aOT = Math.max((aOR + 1) % aD5, 1),
									aOU = dU.aJx(aOO[aOQ] - aOM[aOT], aOP[aOQ] - aON[aOT]);
								for (fm = 1; fm < aD5; fm++) aLW = dU.aJx(aOO[aOQ] - aOM[fm], aOP[aOQ] - aON[fm]), he < aLW && aLW < aOU && (aOU = aLW, aOT = fm);
								aOT !== aOS && dU.aJx(aOM[aOS] - aOM[aOT], aON[aOS] - aON[aOT]) < dU.aJx(aOM[aOS] - aOM[aOR], aON[aOS] - aON[aOR]) && (aOR = aOT)
							}
							var aOV = ak[aOR],
								aOW = aCh[aOV] + (aR.bh ? 0 : aCi[aOV]),
								iQ = aCg[aOW],
								aOX = vH[iQ],
								aOY = aCh[aOV + 1];
							he = dU.aJx(aOO[aOX] - aOM[aOS], aOP[aOX] - aON[aOS]);
							for (var dx = aOW + 1; dx < aOY; dx++) {
								var aOZ = aCg[dx],
									aOa = vH[aOZ];
								(aLW = dU.aJx(aOO[aOa] - aOM[aOS], aOP[aOa] - aON[aOS])) < he && (he = aLW, iQ = aOZ)
							}
							iQ < m4 || m5 <= iQ || (aOX = vH[iQ], aOK[aOS] += aOO[aOX] - aOO[aOQ], aOL[aOS] += aOP[aOX] - aOP[aOQ], aOK[aOR] += aOO[aOQ] - aOO[aOX], aOL[aOR] += aOP[aOQ] - aOP[aOX], mv = data.teamPlayerCount[ak[aOS]], aOM[
								aOS] = dU.dV(aOK[aOS], mv), aON[aOS] = dU.dV(aOL[aOS], mv), mv = data.teamPlayerCount[aOV], aOM[aOR] = dU.dV(aOK[aOR], mv), aON[aOR] = dU.dV(aOL[aOR], mv), vH[iP] = aOX, vH[iQ] = aOQ)
						}
					}! function() {
						for (var vH = bw.vH, sX = aZ.sX, sZ = aZ.sZ, sY = aZ.sY, sa = aZ.sa, ac = aZ.ac, zS = aZ.zS, iZ = aZ.iZ, gl = aZ.gl, ic = aZ.ic, dw = 0; dw < 512; dw++) {
							var aOc = vH[dw];
							if (aOc !== dw) {
								aOd(sX, dw, aOc), aOd(sZ, dw, aOc), aOd(sY, dw, aOc), aOd(sa, dw, aOc), aOd(ac, dw, aOc), aOd(zS, dw, aOc), aOd(iZ, dw, aOc), aOd(gl, dw, aOc), aOd(ic, dw, aOc), aOe(dw), aOe(aOc), vH[dw] = dw;
								for (var aO = aOc, sT = vH[aO]; sT !== dw;) sT = vH[aO = sT];
								vH[aO] = aOc
							}
						}
					}()
			}
		}) : function() {
			var bc = aR.bc;
			for (aOC = bc; aOC < aR.bS; aOC++) aOE();
			for (aOC = aR.bh ? aR.bY : 0; aOC < bc; aOC++)
				if (! function() {
						var spawningData = aR.data.spawningData,
							xL = spawningData[2 * aOC] + 1,
							spawningData = spawningData[2 * aOC + 1] + 1;
						if (3 < xL && xL < gu.gv - 5 && 3 < spawningData && spawningData < gu.h1 - 5 && cC.hO(cC.z0(xL, spawningData)) && function(xL, xM) {
								var fl, aOl, aOk;
								for (aOk = xM; xM - 6 < aOk; aOk--)
									for (aOl = xL; xL - 6 < aOl; aOl--)
										if (fl = cC.z0(aOl, aOk), cC.z9(fl)) return;
								return 1
							}(xL + 3, spawningData + 3)) return aOJ(xL + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aOI()) {
						for (var fn = aR.bd = aOC; fn < bc; fn++) aOC = fn, aOE();
						return
					}
					var xL = aO9 + aE1 * aO8 + dU.dV(aO8, 2),
						xM = aOA + aE2 * aO8 + dU.dV(aO8, 2);
					aOJ(xL, xM)
				}
		})(), cA.zk[7] = aZ.ac[aR.ad]
	}, this.aOp = function(hI, a8n, a8m) {
		var dw, xL, xM, fl, aE1, aE2;
		for (aOC = hI, dw = 0; dw < 20; dw++)
			for (xL = a8n + dw; a8n - dw <= xL; xL--)
				for (xM = a8m + dw; a8m - dw <= xM; xM--)
					if ((xL === a8n + dw || xL === a8n - dw || xM === a8m + dw || xM === a8m - dw) && 3 < xL && xL < gu.gv - 5 && 3 < xM && xM < gu.h1 - 5 && cC.hO(cC.z0(xL, xM)) && function(xL, xM) {
							var fl, aOl, aOk;
							for (aOk = xM; xM - 6 < aOk; aOk--)
								for (aOl = xL; xL - 6 < aOl; aOl--)
									if (fl = cC.z0(aOl, aOk), cC.z9(fl) && !cC.hF(aOC, fl)) return;
							return 1
						}(xL + 3, xM + 3)) {
						if (0 < aZ.ac[aOC]) {
							for (aE2 = aE1 = fl = void 0, aE1 = aZ.sY[aOC]; aE1 >= aZ.sX[aOC]; aE1--)
								for (aE2 = aZ.sa[aOC]; aE2 >= aZ.sZ[aOC]; aE2--) fl = 4 * (aE2 * gu.gv + aE1), cC.xn(aOC, fl) && (cC.zC(fl), aZ.ac[aOC]--);
							aOE()
						}
						return aOm(xL - 1, xM - 1), !0
					} return !1
	}, this.aOs = function(hI) {
		aOC = hI, aOI() ? aOJ(aO9 + aE1 * aO8 + dU.dV(aO8, 2), aOA + aE2 * aO8 + dU.dV(aO8, 2)) : aOE()
	}
}

function aK1() {
	this.j = function() {
		this.aOt = 0, this.fS = [], this.fq = 0, this.fR = 0
	}, this.aQ = function() {
		var a1U;
		aR.ay || (a1U = this, 2 === aR.aS ? a1U.fS = bx.aK2.aNa() : aR.ae ? a1U.fS = bx.aK2.aNb() : a1U.fS = bx.aK2.aNc(), a1U.aOt = n7.zX.aOv(), a1U.fq = Math.max(1, bx.aK2.aNd(a1U.fS)), c7.aX.a9O(), 8 === aR.aV ? bx.result.fR = 0 : a1U.fR =
			100 * bx.result.aOt * (1 + aR.bl))
	}
}

function oJ() {
	this.dV = function(fm, fn) {
		return Math.floor((fm + .5) / fn)
	}, this.aOx = function(fm, fn) {
		return Math.floor(fm * (fn + .5))
	}, this.sqrt = function(gp) {
		return ~~Math.sqrt(gp + .5)
	}, this.pow = function(jj) {
		return Math.floor(Math.pow(2, jj) + .5)
	}, this.ls = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aOy = function(dn, dq, ds) {
		return Math.max(Math.min(dn, dq), ds)
	}, this.aOz = function(aP0, aP1, iE, iF) {
		iE -= aP0, aP0 = iF - aP1, iF = 0;
		return 0 == iE ? iF = 0 <= aP0 ? Math.PI : 0 : (iF = Math.atan(aP0 / iE), iF += 0 < iE ? .5 * Math.PI : 1.5 * Math.PI), iF
	}, this.log2 = function(gp) {
		return Math.floor(!!gp * (1 + Math.log2(gp + .5)))
	}, this.log10 = function(gp) {
		return Math.floor(Math.log10(gp + .5))
	}, this.iA = function(aI0, aI1, aP3, aP4, aP5) {
		return aP3 - aP5 < aI0 && aI0 < aP3 + aP5 && aP4 - aP5 < aI1 && aI1 < aP4 + aP5
	}, this.aJx = function(aCL, aCN) {
		return aCL * aCL + aCN * aCN
	}
}

function aP6(a67) {
	var aP7 = document.createElement("div"),
		aP8 = document.createElement("div"),
		a93 = (this.iE = 0, this.iF = 0);

	function aPA() {
		p.rb.jn()
	}
	this.a0a = a67, this.show = function(iE, iF, aPC) {
		if (a93) return [0, 0];
		a93 = 1, this.iE = iE, this.iF = iF,
			function(self, aPC) {
				var aN = aW.bA.dJ(.16, .7),
					aO = a67.length * aN / 3,
					aPE = aL.aN / aL.bC,
					aPF = aL.aO / aL.bC,
					aH = Math.min(1, Math.min(aPE / aN, aPF / aO));
				aN *= aH, aO *= aH, aPC && (self.iE += aW.bA.dJ(.03, .5)), self.iE = dU.ls(self.iE, 0, aPE - aN), self.iF = dU.ls(self.iF, 0, aPF - aO), aP8.style.left = self.iE + "px", aP8.style.top = self.iF + "px", aP8.style.width = aN + "px",
					aP8.style.height = aO + "px", aP8.style.font = aW.bA.mN(0, .34 * aO / a67.length), aW.bA.a5C(aP8, 5);
				for (var dw = 1; dw < a67.length; dw++) aW.bA.a5C(a67[dw].button, 8)
			}(this, aPC), document.body.appendChild(aP7)
	}, this.jn = function() {
		a93 && (a93 = 0, aP7.removeEventListener("click", aPA), document.body.removeChild(aP7))
	};
	for (var dw = 0; dw < a67.length; dw++) new aDi("" + (1 + dw), a67[dw].button, 0, 1);
	aP7.style.position = "fixed", aP7.style.top = "0", aP7.style.left = "0", aP7.style.width = "100%", aP7.style.height = "100%", aP7.style.zIndex = "5", aP8.style.position = "absolute",
		function() {
			for (var aPB = (100 / a67.length).toFixed(2) + "%", dw = 0; dw < a67.length; dw++) a67[dw].button.style.width = "100%", a67[dw].button.style.height = a67[dw].button.style.maxHeight = aPB, a67[dw].button.style.padding = "0.0em 0.9em", aP8
				.appendChild(a67[dw].button)
		}(), aP7.appendChild(aP8), aP7.addEventListener("click", aPA)
}

function aGg() {
	this.a0z = function(go) {
		aR.ay ? c7.aGh.a0z(aR.ad, go) : u.z.a6T(go)
	}, this.a11 = function(qF, hI) {
		aR.ay ? c7.aGh.a11(aR.ad, qF, hI) : u.z.a6U(qF, hI)
	}, this.a0x = function(qF, qN) {
		aR.ay ? c7.aGh.qM(aR.ad, qF, qN) : u.z.a6V(qF, qN)
	}, this.a13 = function(qF, go) {
		go = (go << 3) + bw.hj[6];
		aR.ay ? c7.aGh.a13(aR.ad, qF, go) : cJ.a1h.a1i(aR.ad) && u.z.a6W(qF, go)
	}, this.a14 = function(qF) {
		849 === qF && (qF = 850);
		var hi = bw.hj[3];
		aR.ay ? c7.aGh.a14(aR.ad, qF, hi) : cJ.a1B.aPG(aR.ad, hi) && u.z.a6X(qF, hi)
	}, this.a1o = function(hi) {
		aR.ay ? c7.aGh.a1o(aR.ad, hi) : u.z.a6X(849, hi)
	}, this.a1r = function(hI) {
		aR.ay ? c7.aGh.a1r(aR.ad, hI) : u.z.a6Y(hI)
	}, this.ko = function(kn) {
		aR.ay ? c7.aGh.a1t(aR.ad, kn) : u.z.a6Z(kn)
	}, this.a1u = function(a1v) {
		aR.ay ? c7.aGh.a1u(aR.ad, a1v) : u.z.a6a(a1v)
	}, this.gU = function() {
		aR.ay ? c7.aGh.gU(aR.ad) : u.z.a6b()
	}, this.rZ = function() {
		aR.ay ? c7.aGh.rZ(aR.ad) : u.z.a6Y(513)
	}, this.a16 = function(qF, go, hI) {
		aR.ay ? c7.aGh.a16(aR.ad, qF, go, hI) : u.z.a6c(qF, go, hI)
	}
}

function s5() {
	var aPI, aPJ;
	this.aPH = 5, this.a2v = null;

	function a2r(dw) {
		return aPJ[dw].aJs && aPI[dw].a2r()
	}

	function aPN(jt) {
		aPJ[jt].t = s.t, aPJ[jt].a6S = !1
	}
	this.w = 0, this.x = 0, this.j = function() {
		this.a2v = new Array(this.aPH);
		this.a2v[0] = "territorial.io";
		var tl = c3.tm(0);
		c3.c4(0);
		for (var dw = 1; dw < this.aPH; dw++) this.a2v[dw] = np.aPL() + ".territorial.io";
		for (c3.c4(tl), aPI = new Array(this.aPH), aPJ = new Array(this.aPH), dw = this.aPH - 1; 0 <= dw; dw--) aPJ[dw] = {
			aJs: !1,
			t: 0,
			a6S: !1
		};
		this.y(0, 0)
	}, this.aMU = function(dw) {
		return aPI[dw]
	}, this.b2 = function() {
		for (var dw = this.aPH - 1; 0 <= dw; dw--) this.a2o(dw) && s.t > aPJ[dw].t + 15e3 && u.z.a6R(dw, aPJ[dw].a6S);
		!this.a2o(0) && s.t > aPJ[0].t + 8e3 && (aPJ[0].t = s.t, this.y(0, 0))
	}, this.a5U = function(id) {
		return this.y(0, id) && this.a2p(0)
	}, this.y = function(jt, a2h) {
		if (aPJ[jt].aJs) {
			if (aPI[jt].a2r()) return aPI[jt].a2s(a2h), aPI[jt].a2o();
			aPI[jt].jn()
		}
		return this.aPM(jt, a2h), !1
	}, this.aPM = function(jt, a2h) {
		aPJ[jt].aJs = !0, aPN(jt), aPI[jt] = new a2g, aPI[jt].j(jt, a2h)
	}, this.a2s = function(jt, a2h) {
		a2r(jt) && aPI[jt].a2s(a2h)
	}, this.a2w = function(jt, a2h) {
		u.n9.aPO(jt)
	}, this.a2p = function(dw) {
		return this.a2o(dw) && aPI[dw].a2p()
	}, this.a2q = function(dw) {
		aPI[dw].a2q()
	}, this.a2o = function(dw) {
		return aPJ[dw].aJs && aPI[dw].a2o()
	}, this.send = function(jt, ju) {
		aPN(jt), aPI[jt].send(ju)
	}, __fx.customLobby.setSendFunction(this.send), this.rA = function(jt) {
		8 === r.a8() && (aPJ[jt].a6S = !0, u.s6.aPP = !0)
	}, this.close = function(jt, a2u) {
		a2r(jt) && aPI[jt].close(a2u)
	}, this.jv = function(jt, a2u) {
		o9.aPQ(a2u), a2r(jt) && aPI[jt].close(a2u)
	}, this.aPR = function(a2u) {
		for (var dw = this.aPH - 1; 0 <= dw; dw--) this.close(dw, a2u)
	}, this.aPS = function(jt, a2u) {
		for (var dw = this.aPH - 1; 0 <= dw; dw--) dw !== jt && this.close(dw, a2u)
	}, this.d2 = function() {
		this.close(this.w, 3246)
	}, this.a2y = function(jt, jj) {
		aPI[jt].jn(), o9.aPT(jt, jj.code)
	}
}

function aDx() {
	this.kX = function(size) {
		for (var aPU = da, dY = [], dw = 0; dw < size; dw++) dY.push(String.fromCharCode(aPU.jw(16)));
		return dY.join("")
	}, this.aPV = function(fr) {
		return 20 < (fr = fr.trim()).length ? fr.substring(0, 20) : fr
	}
}

function a4D() {
	function aPc(dY, hR, hS) {
		var aPd = dY[hR];
		dY[hR] = dY[hS], dY[hS] = aPd
	}
	this.vs = [
		[],
		[],
		[],
		[]
	], this.a3w = [0, 0, 0, 0], this.tB = [], this.gh = function(aPW, nK, username, st, qd, a3V, elo, color, l9, a9F) {
		this.vs[aPW].push(this.tC(nK, username, st, qd, a3V, elo, color, l9, a9F)), p.a4A === nK && (p.a3Q = this.vs[aPW][this.vs[aPW].length - 1]), p.v.a3z += 29 === n.uL && p.v.a40[0] === aPW && 1 === p.v.a40[2]
	}, this.tC = function(nK, username, st, qd, a3V, elo, color, l9, a9F) {
		return {
			nK: nK,
			username: username,
			st: st,
			qd: qd,
			a3V: a3V,
			elo: elo,
			color: color,
			l9: l9,
			a9F: a9F
		}
	}, this.aNz = function(dS, aPW, st, qd, a3V, elo, l9) {
		dS = this.vs[aPW][dS];
		dS.st = st, dS.qd = qd, dS.a3V = a3V, dS.elo = elo, dS.l9 = l9, p.v.a3z += 29 === n.uL && p.v.a40[0] === aPW && 1 === p.v.a40[2]
	}, this.aO0 = function(dS, aPW, aPX) {
		var dS = this.vs[aPW][dS],
			aPY = dS.username,
			tJ = "Redacted " + dc.dd.t6(dS.nK, 2);
		dS.username = aPX ? "[" + aW.fv.g0(aPY) + "] " + tJ : tJ, aPY.indexOf("Redacted") < 0 && (dS.t4 = aPY, dS.t2 = 3), p.v.a3z += 29 === n.uL && p.v.a40[0] === aPW && 1 === p.v.a40[2]
	}, this.aNx = function(dS, aPZ, aPa) {
		var player = this.vs[aPZ][dS];
		this.aNy(dS, aPZ), this.vs[aPa].push(player), p.v.a3z += 29 === n.uL && p.v.a40[0] === aPa && 1 === p.v.a40[2]
	}, this.aNy = function(dS, aPZ) {
		var t9 = this.vs[aPZ];
		this.tB.push(t9[dS]), 1e3 < this.tB.length && this.tB.shift(), dS >= this.a3w[aPZ] ? t9[dS] = t9[t9.length - 1] : (this.a3w[aPZ]--, 2 === aPZ ? (t9.splice(this.a3w[aPZ] + 1, 0, t9[t9.length - 1]), t9.splice(dS, 1)) : (t9[dS] = t9[this
			.a3w[aPZ]], t9[this.a3w[aPZ]] = t9[t9.length - 1])), t9.pop(), p.v.a3z += 29 === n.uL && p.v.a40[0] === aPZ && 1 === p.v.a40[2]
	}, this.aNw = function(dS, a3P) {
		p.v.a3z += 29 === n.uL && p.v.a40[0] === a3P && 1 === p.v.a40[2];
		var t9 = this.vs[a3P],
			dg = t9[dS];
		if (2 === a3P)
			if (dS >= this.a3w[a3P]) {
				for (var aPb = this.a3w[a3P], elo = dg.elo; aPb && elo > t9[aPb - 1].elo;) aPb--;
				t9[dS] = t9[this.a3w[a3P]], t9.splice(this.a3w[a3P]++, 1), t9.splice(aPb, 0, dg)
			} else t9.splice(this.a3w[a3P]--, 0, dg), t9.splice(dS, 1);
		else dS >= this.a3w[a3P] ? aPc(t9, this.a3w[a3P]++, dS) : aPc(t9, --this.a3w[a3P], dS)
	}, this.tA = function(nK) {
		for (var vs = this.vs, du = vs.length, dw = 0; dw < du; dw++)
			for (var t9 = vs[dw], g4 = t9.length, fm = 0; fm < g4; fm++)
				if (nK === t9[fm].nK) return t9[fm];
		return null
	}
}

function y1() {
	var aPe = new Uint16Array(aR.bS);

	function aPm(player, aPk) {
		for (var du = bw.vI[0], aPt = bw.aPt, aFv = -1, a0n = aR.bS, dw = 0; dw < du; dw++) {
			var he, fl = aPt[dw];
			hK.hL(player, fl) && (he = cI.hB(aPk, cI.v7(fl)), -1 === aFv || he < aFv) && (aFv = he, a0n = fl)
		}
		return a0n
	}

	function aPo(aPl, aPk) {
		if (aPl === aR.bS) return 0;
		var gl = aZ.gl[aPl],
			g4 = gl.length;
		if (0 === g4) return 0;
		for (var du = Math.min(g4, 10), a0n = 0, aFv = cI.hB(gl[a0n] >> 2, aPk), dw = 0; dw < du; dw++) {
			var n0 = c3.a04(g4),
				he = cI.hB(gl[n0] >> 2, aPk);
			he < aFv && (aFv = he, a0n = n0)
		}
		return gl[a0n] >> 2
	}

	function aPq(player, aPk, hI, aPu) {
		var aPv;
		(aPu === aR.bS || (aPv = cI.v7(hI), aPu = cI.v7(aPu), cI.hB(aPk, aPv) < cI.hB(aPk, aPu))) && (aPe[player] = hI)
	}
	this.j = function() {
		aPe.fill(aR.bS)
	}, this.yB = function() {
		if (s.a6() % 109 == 9 && !(bF.bG < 20) && aR.ae && !(ag.qh() < dU.dV(8 * aR.bH, 10))) {
			var af = ag.bQ();
			if (aj.ak[af]) {
				ag.aPf(af);
				var du = bw.vI[0];
				if (0 !== du)
					for (var dY = bw.vH, q3 = bF.q3, bG = bF.bG, aPg = aPe, n0 = c3.a04(du), dw = 0; dw < bG; dw++) {
						var iP = q3[dw],
							iQ = dY[n0];
						aW.aX.iN(iP, iQ) && 512 === aPg[iP] && (aPg[iP] = iQ, n0 = (n0 + 1) % du)
					}
			}
		}
	}, this.b2 = function(player) {
		var aPk, aPn, aPl, aPh = function(player) {
			var hI = aPe[player];
			if (hI !== aR.bS) {
				if (aW.aX.q5(hI) && aZ.gl[hI]) return hI;
				aPe[player] = aR.bS
			}
			return aR.bS
		}(player);
		return function(player) {
			for (var aMy = bF.q3, g4 = bF.bG, du = Math.min(g4, g4 < 17 && 5 === c3.a04(20) ? 1 : 16), sT = c3.a04(g4), aPt = bw.aPt, gl = aZ.gl, mv = 0, dw = 0; dw < du; dw++) {
				var fl = aMy[(dw + sT) % g4];
				fl !== player && gl[fl].length && (aPt[mv++] = fl)
			}
			bw.vI[0] = mv
		}(player), 0 !== bw.vI[0] && (0 < (aPn = aPo(aPl = aPm(player, aPk = cI.v8(player)), aPk)) && cJ.a1k.aPp(player, cJ.sr.h4(aPn, aPk)) ? (aPq(player, aPk, aPl, aPh), !0) : 0 < (aPl = function(player, aPk) {
			for (var du = bw.vI[0], aPt = bw.aPt, aPg = aPe, sT = 0, dw = 0; dw < du; dw++) {
				var fl = aPt[dw],
					fl = aPg[fl];
				fl !== aR.bS && aW.aX.q5(fl) && player !== fl && hK.hL(player, fl) && (aPt[sT++] = fl)
			}
			return 0 !== (bw.vI[0] = sT) ? aPo(aPm(player, aPk), aPk) : 0
		}(player, aPk)) && cJ.a1k.aPp(player, cJ.sr.h4(aPl, aPk)) ? (aPq(player, aPk, cC.hJ(aPl << 2), aPh), !0) : !!(0 < (aPn = aPo(aPh, aPk)) && cJ.a1k.aPp(player, cJ.sr.h4(aPn, aPk))))
	}
}

function pV() {
	this.v = new aEZ, this.uL = 0;
	var aPx = new Array(31);

	function aQ0() {
		for (var du = aPx.length, dw = 0; dw < du; dw++) aPx[dw] = null
	}
	this.j = function() {
		for (var aPy, aPz = document.body.firstChild; aPz;) {
			if (aPy = aPz.nextSibling, document.body.contains(aPz) && ("DIV" === aPz.tagName || "INPUT" === aPz.tagName || "BUTTON" === aPz.tagName)) try {
				document.body.removeChild(aPz)
			} catch (jj) {
				console.log("error 2623: " + jj)
			}
			aPz = aPy
		}
	}, this.d7 = function(dS, a2h, nI) {
		void 0 === a2h && (a2h = this.uL), s.ap = !0, 0 === dS && (0 === r.a8() ? dS = 5 : aI.aJ.setState(13)), this.jn(), this.uL === dS && (a2h = aPx[dS].a2h, aPx[dS] = null), this.uL = dS;
		var g4 = aPx[dS];
		if (!g4 || 4 === dS || 7 === dS || 8 === dS || 9 === dS || 10 === dS || 11 === dS || 13 === dS || 15 === dS || 18 === dS || 20 <= dS && dS <= 28 || 32 === dS || 33 === dS) {
			if (0 === dS) return void aQ0();
			1 === dS ? g4 = new aN0 : 2 === dS ? g4 = new aEo : 3 === dS ? g4 = new u1 : 4 === dS || 9 === dS || 10 === dS || 11 === dS || 13 === dS || 33 === dS ? g4 = nI : 5 === dS ? g4 = new aNJ : 6 === dS ? g4 = new aO4 : 7 === dS ? g4 =
				new a7q(n.v.a2P) : 8 === dS ? g4 = nI : 12 === dS ? g4 = new rl : 14 === dS ? g4 = new vL : 15 === dS ? g4 = new a7q(n.v.a2N) : 16 === dS ? g4 = new aLG : 17 === dS ? g4 = new a42 : 18 === dS ? g4 = new a7H : 19 === dS ? g4 =
				new aIR : 20 === dS ? g4 = new uP : 21 === dS ? g4 = new aQ1 : 22 === dS ? g4 = new lr : 23 === dS ? g4 = new aCQ : 24 === dS ? g4 = new jD : 25 === dS ? g4 = new a2d : 26 === dS ? g4 = new aQ2 : 27 === dS ? g4 = new aL7 : 28 ===
				dS ? g4 = new aQ3 : 29 === dS ? g4 = new aQ4 : 30 === dS && (g4 = new aQ5), g4.a2h = a2h, aPx[dS] = g4
		}
		g4.show(nI)
	}, this.jR = function() {
		this.mH() && this.u3(this.uM().a2h)
	}, this.u3 = function(dS) {
		this.mH() && (aPx[dS] ? (this.jn(), s.ap = !0, this.uL = dS, aPx[dS].show()) : this.d7(dS))
	}, this.jn = function() {
		this.mH() && aPx[this.uL].jn()
	}, this.o = function() {
		this.mH() && (aPx[this.uL].jn(), aQ0(), this.uL = 0, aI.aJ.setState(13))
	}, this.mP = function() {
		var g4;
		this.mH() && (g4 = aPx[this.uL]).mP && g4.mP()
	}, this.resize = function() {
		if (!this.mH()) return !1;
		aPx[this.uL].resize()
	}, this.mJ = function(iE, iF) {
		var g4;
		this.mH() && (g4 = aPx[this.uL]).mJ && g4.mJ(iE, iF)
	}, this.qr = function(iE, iF) {
		var g4;
		this.mH() && (g4 = aPx[this.uL]).qr && g4.qr(iE, iF)
	}, this.rK = function() {
		var g4;
		this.mH() && (g4 = aPx[this.uL]).rK && g4.rK()
	}, this.qu = function(hY, hZ, deltaY) {
		var g4;
		this.mH() && (g4 = aPx[this.uL]).qu && g4.qu(hY, hZ, deltaY)
	}, this.jo = function(code) {
		var g4;
		return !!this.mH() && ((g4 = aPx[this.uL]).jo && g4.jo(code), !0)
	}, this.b2 = function() {
		var g4;
		this.mH() && (g4 = aPx[this.uL]) && g4.b2 && g4.b2()
	}, this.mH = function() {
		return 0 < this.uL
	}, this.uM = function() {
		return aPx[this.uL]
	}, this.uN = function(dS) {
		return aPx[dS]
	}, this.jQ = function() {
		return aPx
	}
}

function oK() {
	this.aQ6 = "https://", this.aQ7 = this.aQ6 + "territorial.io/", this.aNC = this.aQ7 + "changelog", this.aNG = this.aQ7 + "terms", this.aQ8 = this.aQ7 + "cookie_policy", this.aEe = this.aQ7 + "privacy", this.aNF = this.aQ7 + "tutorial", this.aNE =
		this.aQ7 + "players", this.aND = this.aQ7 + "clans", this.g8 = this.aQ7 + "clan-results", this.a8J = "https://patreon.com/c/territorial", this.aN9 = this.aQ6 + "play.google.com/store/apps/details?id=territorial.io", this.aNA = this.aQ6 +
		"apps.apple.com/app/id1581110913", this.aQ9 = this.aQ6 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aNB = this.aQ6 + "discord.gg/pthqvpTXmh", this.aNY = this.aQ6 + "www.instagram.com/davidtschacher/", this.mn =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function pm() {
	var aQA = new Array(1),
		aQB = new Array(1),
		aQC = 20,
		aHW = 0,
		aQD = !1;

	function aQF() {
		aQC++, oD.play()
	}
	this.j = function() {
		if (!window.document.documentMode) {
			for (var dw = 0; 0 <= dw; dw--) ! function(dw, src) {
				aQB[dw] = 0, aQA[dw] = document.createElement("audio"), aQA[dw].src = src, aQA[dw].setAttribute("preload", "auto"), aQA[dw].setAttribute("controls", "none"), aQA[dw].style.display = "none", aQA[dw].onpause = function() {
					aQB[dw] = 1
				}, aQA[dw].oncanplaythrough = function() {
					aQB[dw] = 0 === aQB[dw] ? 1 : aQB[dw]
				}, document.body.appendChild(aQA[dw])
			}(dw,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aQD = !0
		}
	}, this.q = function() {
		if (aQD) {
			aQD = !1;
			for (var dw = 0; 0 <= dw; dw--) aQA[dw].onpause = null, aQA[dw].oncanplaythrough = null, document.body.removeChild(aQA[dw]), aQA[dw] = null
		}
	}, this.play = function() {
		if (aQD) {
			var b5 = performance.now();
			if (aHW + 66 < b5)
				for (var dw = 0; 0 <= dw; dw--)
					if (1 === aQB[dw]) return aHW = b5, aQB[dw] = 2, void aQA[dw].play();
			0 < aQC && (aQC--, setTimeout(aQF, 66))
		}
	}
}

function xx() {
	var aQG = 0,
		aQH = 0,
		aQI = 300,
		aQJ = 300,
		aQK = 0;
	this.aQL = 0, this.ku = new Uint32Array(512), this.j = function() {
		aQH = aQG = 0, this.aQL = 0, aQK = 0
	}, this.b2 = function() {
		if (function() {
				var du = cK.xw.aQL;
				if (0 === du) return 1;
				var ku = cK.xw.ku;
				if (s.a6() % 35 == 6) {
					for (var dw = du - 1; 0 <= dw; dw--) cC.hH(ku[dw] << 2) || (du--, ku[dw] = ku[du]);
					cK.xw.aQL = du
				}
				return du < ku.length
			}())
			if (aQI <= aQG) {
				var aQP = cK.xw.aQL;
				if (aQP) {
					if (s.a6() % 350 != 1) return;
					if (aQK !== aQP) return void(aQK = aQP);
					if (!aW.aX.aY(am[0])) return
				} else if (s.a6() % 12 != 8) return;
				aW.aX.q0() || cK.xw.j()
			} else {
				var dw, aN = gu.gv,
					aQQ = aN - 2,
					aQP = aQQ * (gu.h1 - 2),
					aQR = aQI,
					ku = cK.xw.ku,
					g4 = cK.xw.aQL,
					aQS = ku.length,
					sT = Math.min(aQH + aQR * ((1 + 19 * cK.performance.vB) * aQJ), aQP);
				for (dw = aQH; dw < sT; dw += aQR) {
					var gt = 4 * (dw % aQQ + (dU.dV(dw, aQQ) + 1) * aN + 1);
					if (cC.hH(gt) && (ku[g4] = gt >> 2, ++g4 === aQS)) {
						dw += aQR;
						break
					}
				}(aQH = dw) >= aQP && (aQH = ++aQG), cK.xw.aQL = g4
			}
	}
}

function sC() {
	this.aQT = function() {
		dW.cN(39), dW.dh(1, 0), dW.dh(6, 16), u.n9.aQU(), u.v.send(0, dW.ju)
	}, this.aMT = function(jt) {
		dW.cN(115), dW.dh(1, 0), dW.dh(6, 17), kV.dd.aDu(gG.ku.data[105].value, 5), kV.dd.aDu(gG.ku.data[106].value, 8), dW.dh(30, gG.ku.data[109].value), u.v.send(jt, dW.ju)
	}, this.a5l = function() {
		dW.cN(55), dW.dh(1, 0), dW.dh(6, 18), kV.dd.aDv(gG.ku.data[110].value), u.v.send(0, dW.ju)
	}, this.a5h = function(nI) {
		var du = nI.fr.length;
		dW.cN(21 + 16 * du), dW.dh(1, 0), dW.dh(6, 29), dW.dh(6, nI.a7R), dW.dh(8, du), dc.kW.aDv(nI.fr), u.v.send(0, dW.ju)
	}, this.a5f = function(data) {
		dW.cN(43), dW.dh(1, 0), dW.dh(6, 25), dW.dh(6, data.a7R), kV.dd.aDu(data.nK, 5), u.v.send(0, dW.ju)
	}, this.a7Q = function(data) {
		dW.cN(75), dW.dh(1, 0), dW.dh(6, 27), dW.dh(6, data.a7R), kV.dd.aDu(data.nK, 5), dW.km(32, data.value), u.v.send(0, dW.ju)
	}
}

function pM() {
	function aQX(key) {
		var u7;
		return "undefined" == typeof URLSearchParams || (u7 = window.location.search, "string" != typeof(u7 = new URLSearchParams(u7).get(key))) || u7.length < 1 ? null : u7
	}
	this.pv = function() {
		if (0 !== aI.id) return !1;
		if (! function() {
				var value = aQX("account");
				if (!value && !(value = aQX("a"))) return void nz.clear();
				return nz.clear(), n.d7(8, n.uL, new a48(1e3, {
					a7R: 0,
					nK: value,
					l4: 0
				})), 1
			}()) {
			var value = aQX("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.d7(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aQY = new URL(window.location.href);
		aQY.search = "";
		try {
			return history.replaceState(null, "", aQY.toString()), !0
		} catch (jj) {
			console.log("error 352: " + jj)
		}
		return !1
	}, this.a8K = function(key, value) {
		if (0 === aI.id) try {
			var aQY = new URL(window.location.href),
				fl = aQY.searchParams;
			fl.set(key, value), aQY.search = fl.toString(), history.replaceState(null, "", aQY.toString())
		} catch (jj) {
			console.log("error 358: " + jj)
		}
	}
}

function c0() {
	this.a1Z = function(player, go) {
		cO.aOp(player, cI.gx(go), cI.gz(go)) && (s.ap = !0), aR.ay && this.b2()
	}, this.b2 = function() {
		aR.bh = !1;
		for (var dw = 0; dw < aR.bY; dw++) 0 !== aZ.aa[dw] && 0 === aZ.ac[dw] && cO.aOs(dw);
		0 !== aZ.aa[aR.ad] ? (cA.zk[7] = aZ.ac[aR.ad], cA.zk[8] = aZ.bN[aR.ad], cY.aQa(), cc.aGB(), aR.aw || ct.aQb(aZ.sX[aR.ad] - 5, aZ.sZ[aR.ad] - 5, aZ.sY[aR.ad] + 5, aZ.sa[aR.ad] + 5), cs.j()) : ci.show(!1, !1, !1, !0), cf.aKv(18), cn.wx(),
			cn.cv(!0), cS.v.a35(), ch.jn(), aR.bm = null, cG.aIG = !0, cG.aFt(), aR.ay && aI.aJ.setState(1)
	}
}

function or() {
	this.a1F = new aF2
}

function aDi(aQc, aQd, aQe, aQf) {
	var self;
	this.sv = document.createElement("span"), (self = this).sv.textContent = aQc, self.sv.style.color = fk.eC, self.sv.style.position = "absolute", self.sv.style.font = "inherit", aQf ? self.sv.style.bottom = "0.06em" : self.sv.style.top = "0.12em",
		aQe ? self.sv.style.left = "0.2em" : self.sv.style.right = "0.2em", self.sv.style.fontSize = "0.6em", self.sv.style.pointerEvents = "none", self.sv.style.whiteSpace = "pre", aQd.style.position = "relative", aQd.style.overflow = "hidden", aQd
		.appendChild(self.sv)
}

function pF() {
	var input;

	function aQg(jj) {
		(jj = jj.target.files) && 0 < jj.length && ny.aQi(jj[0])
	}

	function aQj(jj) {
		var dx = new Image;
		dx.onload = ul, dx.src = jj.target.result
	}

	function ul(jj) {
		var jj = jj.target,
			canvas = document.createElement("canvas");
		canvas.width = jj.width, canvas.height = jj.height;
		canvas.getContext("2d").drawImage(jj, 0, 0);
		var jj = canvas.width,
			aO = canvas.height;
		jj > gu.jV || aO > gu.jV || jj < 10 || aO < 10 ? (jj = "Image dimensions must be between 10 and " + gu.jV + ".", aI.gM ? aI.gM.showToast(jj) : alert(jj)) : 20 === n.uL && n.uM().ul(canvas)
	}
	this.j = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aQg
	}, this.q = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.ub = function() {
		input.click()
	}, this.aQi = function(aKB) {
		var dY = aKB.name.split("."),
			dY = dY[dY.length - 1].toLowerCase();
		"gif" !== dY && "jpg" !== dY && "jpeg" !== dY && "png" !== dY || ((dY = new FileReader).onload = aQj, dY.readAsDataURL(aKB))
	}
}

function aNN() {
	var sd, aQn, aHD = document.createElement("div"),
		aQl = document.createElement("div"),
		aQm = document.createElement("div"),
		aHF = document.createElement("div"),
		a0a = [],
		aCV = [L(360), L(361), L(362), L(363), L(364), L(365), L(366)],
		aQo = [1, 2, 3, 0, 9, 10, 11];

	function aQp(dw) {
		n.d7(8, 0, new a48(21, {
			a49: aQo[dw],
			hR: 0,
			hS: 10
		}))
	}
	this.show = function() {
			this.gI(n.v.a9V), document.body.appendChild(aHD)
		}, this.jn = function() {
			document.body.removeChild(aHD)
		}, this.gI = function(a9V) {
			for (var aQr = [3, 0, 1, 2, 4, 5, 6], dw = 0; dw < a0a.length; dw++) {
				var aN = a9V[dw];
				sd[aQr[dw]][1].sv.textContent = aN || ""
			}
		}, this.resize = function() {
			var dw, fh = dI.gap,
				aO = aW.bA.i9(.085),
				aN = Math.min(4 * aO, aL.aN - 2 * fh),
				du = a0a.length;
			for (aW.bA.a5D(aHD, fh, aL.aO - fh - aO, aN, aO), aW.bA.a5C(aHD), aW.bA.a5C(aQl, 6), dw = 0; dw < du - 1; dw++) aW.bA.a5C(a0a[dw].button, 6);
			for (dw = 0; dw < du; dw++) sd[dw][0].resize(), sd[dw][1].resize();
			for (a0a[0].iE = 0, a0a[0].button.style.left = aW.bA.dH(a0a[0].iE), a0a[0].button.style.width = aW.bA.a5E(1.7 * aO), dw = 1; dw < du; dw++) a0a[dw].iE = a0a[dw - 1].iE + a0a[dw - 1].button.offsetWidth, a0a[dw].button.style.left = aW.bA
				.dH(a0a[dw].iE);
			if (!aQn) {
				if (!aF.yN()) return;
				(aQn = aF.get(14)).style.width = "24%", aQn.style.position = "absolute", aQl.appendChild(aQn)
			}
			aQn.style.left = aW.bA.dH(0), aQn.style.top = "7%", aQm.a5R && (aQm.scrollLeft = aQm.a5R)
		}, aHD.style.position = "absolute", aQl.style.width = "25%", aQl.style.height = "100%", aQl.style.backgroundColor = fk.e8, aQm.style.position = "absolute", aQm.style.width = "75%", aQm.style.height = "100%", aQm.style.backgroundColor = fk.e8,
		aQm.style.top = aQm.style.right = aW.bA.dH(0), aW.bA.a5P(aQm), aHF.style.height = aHF.style.maxHeight = "100%", a0a.push(new jJ("", function() {
			aQp(0)
		}, fk.ew)), a0a.push(new jJ("", function() {
			aQp(1)
		}, fk.ex)), a0a.push(new jJ("", function() {
			aQp(2)
		}, fk.ep)), a0a.push(new jJ("", function() {
			aQp(3)
		}, fk.ea)), a0a.push(new jJ("", function() {
			aQp(4)
		}, fk.fI)), a0a.push(new jJ("", function() {
			aQp(5)
		}, fk.fG)), a0a.push(new jJ("", function() {
			aQp(6)
		}, fk.fI)), sd = new Array(a0a.length);
	for (var dw = 0; dw < a0a.length; dw++) a0a[dw].button.style.position = "absolute", sd[dw] = [new aQq(aCV[dw], a0a[dw].button, .25, .45), new aQq("", a0a[dw].button, .53, .84, 1)], a0a[dw].button.style.height = a0a[dw].button.style.maxHeight =
		"100%", a0a[dw].button.top = aW.bA.dH(0), aHF.appendChild(a0a[dw].button);
	aQm.appendChild(aHF), aHD.appendChild(aQl), aHD.appendChild(aQm)
}

function aDE() {
	this.b2 = function(player) {
		return !!cJ.a1h.a1i(player) && !(cJ.v.hQ[player] >= Math.max(3 * cK.performance.vB, cM.zw[cM.hm[player]]) || !aW.aX.qE(player, cM.zt[cM.hm[player]], 32, 0)) && (cc.aGN() ? function(player) {
			var aQu = cJ.sr.iK(),
				du = aQu.length;
			if (0 === du) return !1;
			aQu = aQu[c3.a04(du)], du = cJ.v.hT[aQu];
			if (cJ.aDN.aEG(player, du)) return !1;
			return !! function(player, aFX) {
				var aFX = cI.v0(cJ.v.hb[aFX]),
					m3 = cI.gx(aFX),
					aFX = cI.gz(aFX),
					iG = aZ.sX[player],
					iH = aZ.sZ[player],
					iI = aZ.sY[player],
					player = aZ.sa[player],
					iI = Math.max(m3 - iI, iG - m3),
					iG = Math.max(aFX - player, iH - aFX);
				return iI < 100 && iG < 100
			}(player, aQu) && !!cJ.a1B.a1p(player, du, 1) && (aW.aX.qX(player), cJ.v.a1n(player), !0)
		}(player) : !!(cK.y8.b2(player) || cK.xy.b2(player) || cK.y0.b2(player)) && (function(player) {
			bw.hj[1] = 4, aW.aX.qX(player), cJ.v.a1n(player)
		}(player), !0))
	}
}

function aDy() {
	this.uD = function(aMA) {
		for (var aPU = da, size = aPU.jw(aMA), aQw = 7 + 9 * aPU.jw(1), dY = [], dw = 0; dw < size; dw++) dY.push(String.fromCharCode(aPU.jw(aQw)));
		return dY.join("")
	}
}

function a0K() {
	cf.b2(), cn.b2(), cc.aGI(), u.v.b2()
}

function a0Q() {
	cq.b2(), ck.b2(), bL.b2(), co.b2(), cj.b2(), cK.b2(), cJ.v.b2(), bF.aMw(), cW.b2(), by.b2(), cL.b2(), cn.b2(), cn.xZ(), cc.b2(), cS.b2(), cb.b2(), cg.b2(), cf.b2(), cp.b2(), cY.b2(), ca.b2(), cA.b2(), ag.b2(), u.v.b2(), u.s6.b2(), n.b2(), cR
	.b2(), s.b2()
}

function a0I() {
	ct.b2(), ci.b2(), ce.b2(), cs.b2(), cZ.b2(), k3.a3()
}

function a0T() {
	cW.cv(!1), cg.cv(), cc.cv(!1), cb.cv(), cY.cv(), ca.cv(), cn.cv(!1), ag.aDl()
}

function a0S() {
	cn.cv(!1) && (s.ap = !0), u.v.b2()
}

function xz() {
	this.b2 = function(player) {
		return cJ.a1k.aPp(player, function(player) {
			var du = cK.xw.aQL;
			if (0 === du) return -1;
			for (var g4 = Math.min(du, cK.performance.vB ? du : 10), ku = cK.xw.ku, m4 = dU.dV(c3.random() * du, c3.value(100)), jj = m4 + g4, hY = c3.v9(aZ.sX[player], aZ.sY[player]), hZ = c3.v9(aZ.sZ[player], aZ.sa[player]), a0n = -1,
					he = cI.us(0, 0, gu.gv, gu.h1), dw = m4; dw < jj; dw++) {
				var sT = dw % du,
					aQy = cI.uq(hY, hZ, ku[sT]);
				aQy < he && (he = aQy, a0n = sT)
			}
			return -1 !== a0n ? function(go, hY, hZ) {
				var m3 = cI.gx(go),
					m7 = cI.gz(go),
					hz = hY - m3,
					i0 = hZ - m7;
				Math.abs(hz) >= Math.abs(i0) ? (i0 = 0, hz = Math.sign(hz)) : (hz = 0, i0 = Math.sign(i0));
				hz === i0 && (hz = 1);
				for (;;) {
					if (m3 += hz, m7 += i0, !cI.ux(m3, m7)) break;
					if (go = cI.i1(m3, m7), cC.hA(cI.h3(go))) return go
				}
				return -1
			}(ku[a0n], hY, hZ) : -1
		}(player))
	}
}

function oS() {
	var a9f, aR0, aR1, a9v, aR2, aR3, aR4, aR5, aR6, aR7, aR8, a5q, aR9, aRA = !1,
		aRB = !1;

	function aRC(aCa) {
		a5q = s.t, aR1 = a9v = aR0 = 0, aR2 = (aR9 = 33) / aCa, a9f = 1 / (aCa / aR9 / 4), aR3 = (aL.aN / 2 + sR) / nN, aR4 = (aL.aO / 2 + sS) / nN, aR5 = nN
	}

	function aRE(dw) {
		var iG; - 1 !== dw && (dw = cI.v0(cJ.v.hb[dw]), iG = cI.gx(dw) - 10, dw = cI.gz(dw) - 10, ct.aQb(iG, dw, 19 + iG, 19 + dw))
	}

	function aRJ(aCZ) {
		Math.abs(Math.log(aR8 / aR5)) < .125 && (aR8 = aCZ * aR5)
	}

	function aRI(iG, iH, iI, iJ) {
		aR6 = (iG + iI + 1) / 2, aR7 = (iH + iJ + 1) / 2;
		iI = aL.aN / (iI - iG + 1), iG = aL.aO / (iJ - iH + 1);
		aR8 = .9 * (iI < iG ? iI : iG)
	}
	this.tk = function() {
		return aRA
	}, this.cu = function() {
		aRC(1), this.aQb(0, 0, gu.gv - 1, gu.h1 - 1), aR.bh || aR.aw || this.nj(aR.ad, 3e3, !0, .3)
	}, this.aRD = function(player, hi) {
		aRE(cJ.sr.hP(player, hi))
	}, this.nj = function(player, aCa, aRF, zoom) {
		aR.bg || aRA && !aRF && aRB || (0 === aZ.ac[player] ? aRE(cJ.sr.hW(player)) : (cX.rJ = !1, aRB = aRF, aRC(aCa), function(player) {
			aR6 = (aZ.sX[player] + aZ.sY[player] + 1) / 2, aR7 = (aZ.sZ[player] + aZ.sa[player] + 1) / 2
		}(player), function(zoom, player) {
			var hz = aZ.sY[player] - aZ.sX[player] + 1,
				player = aZ.sa[player] - aZ.sZ[player] + 1,
				fm = aL.aN / hz,
				fn = aL.aO / player,
				fm = (aR8 = fm < fn ? fm : fn, 0 !== zoom ? zoom : hz < 20 && player < 20 ? .5 : .9);
			aR8 *= fm, aRJ(7 / 8)
		}(zoom, player), aRA = !0, nv.aK0()))
	}, this.nd = function(aCa) {
		aR.aw || aR.bg || (cX.rJ = !1, aRB = !1, aRC(aCa), aRI(0, 0, gu.gv - 1, gu.h1 - 1), aRJ(7 / 8), aRA = !0, nv.aK0())
	}, this.aQb = function(iG, iH, iI, iJ) {
		aRI(iG, iH, iI, iJ), nN = aR8, cX.aCB(aR6, aL.aN / 2), cX.aCD(aR7, aL.aO / 2), o7.aCO(), s.ap = !0
	}, this.m5 = function() {
		return !(aRA && aRB || (aRA = !1))
	}, this.b2 = function() {
		var aRL, aRM, kR, aRP;
		aRA && (aR0 < .5 ? a9v < aR2 && (a9v += aR2 * a9f, aR1 = aR0) : 1 - aR1 < aR0 && (a9v = (a9v -= aR2 * a9f) < aR2 * a9f ? aR2 * a9f : a9v), a5q = a5q >= s.t ? s.t - 1 : a5q, kR = s.t - a5q, aR0 = 1e3 < kR || 1 < (aR0 += a9v * kR / aR9) ?
			1 : aR0, a5q = s.t, kR = nN, aRL = sR, aRM = sS, kR = (nN = aR5 * Math.pow(aR8 / aR5, aR0)) / kR, aRP = 1 - (aR5 * Math.pow(aR8 / aR5, 1 - aR0) - aR5) / (aR8 - aR5), cX.aCB(aR3 + aRP * (aR6 - aR3), aL.aN / 2), cX.aCD(aR4 + aRP * (
				aR7 - aR4), aL.aO / 2), cn.zoom(kR, (aRL * kR - sR) / (1 - kR), (aRM * kR - sS) / (1 - kR)), o7.aCO(), 1 <= aR0 && (aRA = !1, cG.zJ = !0), s.ap = !0)
	}
}

function pQ() {
	this.dY = new Array(4), this.aRQ = new Uint16Array(2), this.vI = new Uint16Array(2), this.aM7 = new Int32Array(2), this.qK = new Uint32Array(2), this.aRR = new Uint32Array(2), this.yy = new Uint8Array(4), this.aJe = new Uint8Array(4), this.a21 =
		new Uint32Array(4), this.aRS = new Uint32Array(5), this.qZ = new Uint32Array(8), this.hj = new Uint32Array(8), this.aPt = new Uint16Array(16), this.vH = new Uint16Array(512), this.aOO = new Uint16Array(512), this.aOP = new Uint16Array(512),
		this.aRT = new Uint16Array(0), this.j = function() {
			var du = gu.gv * gu.h1;
			this.aRT.length !== du && (this.aRT = new Uint16Array(du))
		}, this.aRU = function(dY, dn) {
			return dY[0] = dn, dY
		}, this.aRV = function(dY, dn, dq) {
			return dY[0] = dn, dY[1] = dq, dY
		}, this.aRW = function(dY, dn, dq, ds) {
			return dY[0] = dn, dY[1] = dq, dY[2] = ds, dY
		}, this.aRX = function(dY, dn, dq, ds, aRY) {
			return dY[0] = dn, dY[1] = dq, dY[2] = ds, dY[3] = aRY, dY
		}
}

function pE() {
	this.aRZ = [], this.aRa = [], this.j = function() {
		this.aRZ = [], this.aRa = []
	}, this.b2 = function() {
		0 <= this.aRZ.length && this.aRb(this.aRZ), 0 <= this.aRa.length && this.aRb(this.aRa)
	}, this.aRb = function(dY) {
		for (var fn = -1, dw = dY.length - 1; 0 <= dw; dw--)
			if (dY[dw].t--, dY[dw].t <= 0) {
				fn = dw;
				break
			} for (dw = fn; 0 <= dw; dw--) dY.shift()
	}, this.a0v = function(id, aBy, aRc) {
		return this.aFD(this.aRZ, id, aBy, aRc)
	}, this.kq = function(id, aBy, aRc) {
		return this.aFD(this.aRa, id, aBy, aRc)
	}, this.aFD = function(dY, id, aBy, aRc) {
		return ! function(dY, id, aBy) {
			var dw, n0;
			for (dw = aBy.length - 1; 0 <= dw; dw--)
				for (n0 = dY.length - 1; 0 <= n0; n0--)
					if (dY[n0].player === aBy[dw] && id === dY[n0].id) return 1;
			return
		}(dY, id, aBy) && (aRc && function(dY, id, aBy) {
			var dw;
			for (dw = aBy.length - 1; 0 <= dw; dw--) dY.push({
				player: aBy[dw],
				id: id,
				t: 384
			})
		}(dY, id, aBy), !0)
	}
}

function oU() {
	this.j = function() {
		if (0 === aR.data.sResourcesType) {
			for (var aHf = aR.bY, bN = aZ.bN, dw = 0; dw < aHf; dw++) bN[dw] = 512;
			var aHg = aR.bc,
				zv = cM.zv,
				hm = cM.hm;
			for (dw = aHf; dw < aHg; dw++) bN[dw] = zv[hm[dw]]
		} else(1 === aR.data.sResourcesType ? function() {
			for (var du = aR.bc, bN = aZ.bN, sResourcesValue = aR.data.sResourcesValue, dw = 0; dw < du; dw++) bN[dw] = sResourcesValue
		} : function() {
			for (var du = aR.bc, bN = aZ.bN, sResourcesData = aR.data.sResourcesData, dw = 0; dw < du; dw++) bN[dw] = sResourcesData[dw]
		})();
		cA.zk[8] = aZ.bN[aR.ad]
	}
}

function aRi() {
	this.r7 = new Uint32Array(14);
	var aRj = -1;

	function aRm() {
		var uk = aW.bA.yI(2, 2),
			n2 = aW.bA.getContext(uk, !1);
		return n2.fillStyle = "rgb(128,128,128)", n2.fillRect(0, 0, 2, 2), aRn(uk.toDataURL())
	}

	function aRn(fr) {
		for (var du = fr.length, e0 = du, dw = 0; dw < du; dw++) e0 += fr.charCodeAt(dw);
		return e0
	}
	this.j = function() {}, this.a4I = function() {
		aI.gL && aI.gL.setItem("qix3", "0")
	}, this.jw = function() {
		return 69
	}, this.d1 = function() {
		var uk, n2;
		dW.dh(4, aW.jS.jW(this.r7)), dW.dh(1, this.r7[1] || this.r7[7]), dW.dh(1, navigator.webdriver ? 1 : 0), dW.dh(20, (0 <= aRj || (uk = aW.bA.yI(172, 24), (n2 = aW.bA.getContext(uk, !0)).fillStyle = "rgba(0,0,250,0.573)", n2.fillRect(1, 10,
			100, 11), n2.textBaseline = "top", n2.font = "15.7px Arial", n2.fillStyle = "rgba(2,0,0,0.764)", n2.fillText("Ab🎯c DeFg4iJ1l Mnqzy", 2, 2), aRj = aRn(uk.toDataURL())), aRj % 1048576)), dW.dh(1, 1 - Math.abs(Math.sign(aRm() -
		aRm()))), dW.dh(20, c1.lO), aI.gL ? (n2 = aI.gL.getItem("qix3"), aI.gL.setItem("qix3", "1"), n2 ? "0" === n2 ? dW.dh(2, 2) : dW.dh(2, 3) : dW.dh(2, 1)) : dW.dh(2, 0), dW.dh(20, 0)
	}
}

function aRp() {
	var aRq;
	this.j = function() {
		aRq = !1
	}, this.b2 = function() {
		var fl;
		if (function() {
				if (!aRq) {
					if (s.a6() % 30 != 9) return;
					if (!aW.aX.qf(90)) return;
					aRq = !0
				}
				return 1
			}() && (! function() {
				var dg = cf.aRw(956);
				if (dg) {
					if (aW.aX.q5(dg.player)) return 1;
					cf.zj(956, 0)
				}
				return
			}() && (-1 === (fl = (aR.ae ? function() {
				var id = ag.bQ(),
					du = bF.bG;
				if (aj.ak[id])
					for (var aBy = bF.q3, al = aj.al, dw = 0; dw < du; dw++) {
						var fl = aBy[dw];
						if (al[fl] !== id) return fl
					} else if (1 < du) return am[du - 1];
				return -1
			} : function() {
				for (var aMz = bF.bG, aMy = bF.q3, aRz = xD, dw = 0; dw < aMz; dw++) {
					var fl = aMy[dw];
					if (0 !== aRz[fl]) return fl
				}
				return -1
			})()) ? ! function() {
				var dg = cf.aRw(957);
				if (dg && dg.aS0) {
					if (cC.hH(dg.aS0.go << 2)) return 1;
					cf.zj(957, 0)
				}
				return
			}() : (cf.fj(0, L(367, [aZ.fp[fl]]), 956, fl, fk.eC, fk.e9, -1, !0), 0)))) {
			var du = cK.xw.aQL;
			if (0 !== du)
				for (var ku = cK.xw.ku, dw = 0; dw < du; dw++) {
					var go = ku[dw];
					if (cC.hH(go << 2)) return void cf.fj(0, L(368, [cI.gx(go), cI.gz(go)]), 957, 0, fk.eC, fk.e9, -1, !0, void 0, {
						fm: 1,
						go: go
					})
				}
		}
	}
}

function aQ2() {
	var jE, jF, jG, jX;

	function jK() {
		jO(), 2 !== aR.data.tIncomeType && (aR.data.tIncomeData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		2 === aR.data.tIncomeType && aW.jS.jT(jG.jU(), aR.data.tIncomeData, 255)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(295), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), jb.je(new g9({
			gF: [L(17), L(18), L(14)],
			value: aR.data.tIncomeType
		}, function(dS) {
			jO(), 2 !== dS || aR.data.tIncomeData || (aR.data.tIncomeData = new Uint8Array(aR.bS), aR.data.tIncomeData.fill(32)), aR.data.tIncomeType = dS, n.d7(26)
		})), jX.push(jb)
	}(jX = []), function(jX) {
		var jb;
		1 === aR.data.tIncomeType && ((jb = new jc).jd("Value"), jb.jf(new ji({
			dS: -1,
			value: aR.data.tIncomeValue
		}, 1, 0, function(jj) {
			var value = dU.ls(Math.floor(jj.target.value), 0, 255);
			jj.target.value = aR.data.tIncomeValue = value
		})), jX.push(jb))
	}(jX), function(jX) {
		var jb;
		2 === aR.data.tIncomeType && ((jb = new jc).jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.tIncomeData, 4)), jb.jf(jG), jX.push(jb))
	}(jX), jX))
}

function aQ1() {
	var jE, jF, jG, a0a;

	function jK() {
		jO(), 1 !== aR.data.colorsType && (aR.data.colorsData = null), n.jQ()[19] = null, n.jR()
	}

	function aS1() {
		jO(), n.d7(21)
	}

	function jO() {
		1 === aR.data.gameMode ? aR.br.bz() : 0 === aR.data.gameMode && 1 === aR.data.colorsType && aW.jS.jT(jG.jU(), aR.data.colorsData, 262143)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, a0a = [new jJ("⬅️ " + L(10), jK)], 1 === aR.data.gameMode && a0a.push(new jJ(L(369), aS1, 1, 1)), jE = new jI(L(294), a0a), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), 0 === aR.data.gameMode && (jb.je(new g9({
			gF: [L(12), L(14)],
			value: aR.data.colorsType
		}, function(dS) {
			jO(), aR.data.colorsType = dS, 1 !== aR.data.colorsType || aR.data.colorsData && aR.data.colorsData.length === aR.bS || (aR.data.colorsData = new Uint32Array(aR.bS)), n.d7(21)
		})), jb.jf(new jg));
		jb.jf(new jh({
			value: aR.data.selectableColor
		}, L(370), function(value) {
			aR.data.selectableColor = value
		})), jX.push(jb)
	}(a0a = []), 0 === aR.data.gameMode ? 1 === aR.data.colorsType && function(jX) {
		var jb = new jc;
		jb.jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.colorsData, 1)), jb.jf(jG), jX.push(jb)
	}(a0a) : (aR.br.bz(), a0a.push(function() {
		var jb = new jc;
		jb.jd(L(61));
		for (var dw = 0; dw < aj.fo.length; dw++) {
			var n0 = (dw + 1) % aj.fo.length,
				jj = jb.a2f((0 == n0 ? "" : "Team ") + aj.fo[n0]);
			dw && (jj.style.marginTop = "0.5em"), jb.jf(new ji({
				dS: -1,
				value: aR.data.teamPlayerCount[n0]
			}, 1, 0, function(jj) {
				jE.jp[1].a6B(0);
				var playerCount = dU.ls(Math.floor(jj.target.value), 0, 512);
				jj.target.value = playerCount, aR.data.teamPlayerCount[jj.target.aS2] = playerCount
			})).jj.aS2 = n0
		}
		return jb
	}())), a0a))
}

function aD9() {
	this.aS3 = 32, this.iE = 0, this.iF = 0, this.v2 = 0, this.aS4 = 0, this.aS5 = 4, this.tY = null, this.aS6 = new Int16Array(9), this.j = function() {
		this.v2 = 1 + dU.dV(gu.gv - 1, this.aS3), this.aS4 = 1 + dU.dV(gu.h1 - 1, this.aS3), this.tY = new Array(this.v2 * this.aS4), aW.jS.aJd(this.tY);
		var iE, iF, aS6 = this.aS6,
			aN = this.v2;
		for (iE = -1; iE <= 1; iE++)
			for (iF = -1; iF <= 1; iF++) aS6[3 * (1 + iF) + 1 + iE] = iF * aN + iE
	}, this.a1n = function(aS8, dw) {
		return this.tY[dw].push(aS8), this.tY[dw].length - 1
	}, this.aS9 = function(aSA, aSB, aSC) {
		var aSD, aSE, aSB = cI.v1(aSB),
			aSC = cI.v1(aSC);
		return aSB === aSC ? aSA : (aSD = this.tY[aSB].pop(), this.tY[aSB].length === aSA ? this.a1n(aSD, aSC) : (aSE = this.tY[aSB][aSA], this.tY[aSB][aSA] = aSD, cJ.v.aSF[aSD] = aSA, this.a1n(aSE, aSC)))
	}
}

function pR() {
	this.v = new a30, this.nR = new sM, this.j = function() {
		this.v.j()
	}, this.b2 = function() {
		0 !== this.v.sN && this.v.sN--
	}
}

function a4R() {
	this.mg = function(aSG, dS, a0o) {
		var lU = aSG.height,
			uk = aW.bA.yI(lU, lU),
			n2 = aW.bA.getContext(uk);
		return function(aN, n2, a0o) {
			n2.fillStyle = a0o, n2.beginPath(), n2.arc(aN / 2, aN / 2, .47 * aN, 0, 2 * Math.PI), n2.fill()
		}(lU, n2, a0o), n2.drawImage(aSG, -dS * lU, 0), uk
	}, this.aKq = function(aSI) {
		var n2, a3A, lU = aSI.height;
		return aSI.width === lU && (a3A = (n2 = aW.bA.getContext(aSI, !0)).getImageData(0, 0, lU, lU), aW.a4P.aSJ(a3A.data, lU, lU, .9), n2.putImageData(a3A, 0, 0)), aSI
	}
}

function aQ4() {
	var aSK, aSL, aSO, aSR, aSS, aSM = [new Array(4), [], new Array(2), new Array(2)],
		aSN = new Array(4),
		aSP = new Array(2),
		aSQ = [L(60), L(313), L(371), L(372)];

	function vd() {
		var vo = aSK.aSZ.ue.jj.value.trim().slice(0, 127);
		vo.length < 1 || (aSK.aSZ.ue.jj.value = "", p.a4B.aQ(vo))
	}

	function aSV(aSb) {
		p.v.a40[3] = 1 - p.v.a40[3], aSX(3, 1, p.v.a40[3]), aSb && u.s9.nG(4), p.v.a40[3] && gG.gH.gI(158, p.v.a40[0])
	}

	function aST(fm, fn) {
		p.v.a40[fm] !== fn && (0 === fm && p.v.a40[3] && aSV(0), aSX(fm, p.v.a40[fm], 0), aSX(fm, fn, 1), p.v.a40[fm] = fn, 0 === fm ? (u.s9.nG(2, fn), p.v.a40[2] ? (aSK.aSd.aDl(), aSK.aSZ.rL(1)) : aSK.aSZ.rL(0), n.uM().aBe(), n.uM().aBd()) : 2 ===
			fm && (0 === fn ? (u.s9.nG(0), aSK.aSZ.aDl(), aSK.aSe()) : (u.s9.nG(1), aSK.aSd.aDl(), aSK.aSf())))
	}

	function aSX(fm, fn, color) {
		aSK.aSg[fm].a0a[fn].a6B(color ? fk.eb : fk.fN)
	}

	function aSi(ka) {
		return ka < 7 ? ka + 2 + " " + L(379) : 7 === ka || 10 === ka ? L(313) + " (Full-Sending: " + L(7 === ka ? 380 : 381) + ")" : 8 === ka ? "1v1" : L(382)
	}

	function aSj(gp) {
		var aMW = dU.dV(gp, 60),
			gp = gp % 60;
		return (aMW < 10 ? "0" : "") + aMW + ":" + (gp < 10 ? "0" : "") + gp
	}
	this.aSa = function() {
		return aSK.aSZ
	}, this.a4B = function(nK) {
		aST(2, 0);
		var fr = aSK.aSZ.ue.jj.value,
			nK = "@" + nK + " ";
		fr.length && !aW.fv.vt(fr, " ") && (nK = " " + nK), aSK.aSZ.ue.jj.value = fr += nK, aSK.aSZ.ue.jj.focus()
	}, this.aBc = function() {
		aSK.aSd.aDl()
	}, this.aBe = function() {
		var aSh = p.v.a40[0],
			aSh = p.v.a3W[aSh];
		gu.cN(aSh.ib, aSh.mapSeed), aSL.a0a[0].button.textContent = L(32) + ": " + gu.td.te[aSh.ib].name, aSL.a0a[1].button.textContent = L(293, 0, "Mode") + ": " + aSi(aSh.ka), aSL.a0a[2].button.textContent = L(376) + ": " + gu.td.te[aSh.aAL]
			.name, aSL.a0a[3].button.textContent = L(377, 0, "Next Mode") + ": " + aSi(aSh.aAM), aSL.a0a[4].button.textContent = L(378) + ": " + aSj(aSh.aAN), aSL.resize()
	}, this.aBd = function() {
		var aSh = p.v.a40[0],
			k = p.v.a3W[aSh];
		aSK.aSk(k.aAK);
		for (var dw = 0; dw < p.t9.vs.length; dw++) aSM[0][dw].sv.textContent = "" + p.t9.vs[dw].length;
		var t9 = p.t9.vs[aSh],
			aSl = t9.length,
			aSm = p.t9.a3w[aSh];
		aSM[2][1].sv.textContent = "" + aSl, aSM[3][1].sv.textContent = "" + aSm, aSL.a0a[4].button.textContent = L(378) + ": " + aSj(k.aAN);
		for (dw = 0; dw < 4; dw++) {
			var aSn = p.v.a3W[dw];
			aSN[dw] ? 0 === aSn.aAK && (aSN[dw].sv.textContent = gu.td.te[aSn.ib].name) : aSN[dw] = new aDi(gu.td.te[aSn.ib].name, aSR.a0a[dw].button, 1, 1), aW.fv.startsWith(aSQ[dw], "🏆 ") ? aSn.a41 || (aSQ[dw] = aSQ[dw].substring(3), aSR.a0a[
				dw].button.textContent = aSQ[dw], aSR.a0a[dw].button.appendChild(aSM[0][dw].sv), aSR.a0a[dw].button.appendChild(aSN[dw].sv)) : aSn.a41 && (aSQ[dw] = "🏆 " + aSQ[dw], aSR.a0a[dw].button.textContent = aSQ[dw], aSR.a0a[dw].button
				.appendChild(aSM[0][dw].sv), aSR.a0a[dw].button.appendChild(aSN[dw].sv))
		}
		var k = "",
			aSp = "";
		0 === aSh && (k = p.sr.a3R(t9, 0, aSl), aSp = p.sr.a3R(t9, 0, aSm)), aSO[0].sv.textContent = k, aSO[1].sv.textContent = aSp, aSP[1].sv.textContent = "MP: " + p.v.aBW[0] + "   SP: " + p.v.aBW[1] + "   Lobby: " + aW.jS.aJq(p.t9.vs)
	}, this.aBg = function() {
		aSK.aSZ.aDl()
	}, this.show = function() {
		aSK.show(), this.resize(), p.message.show()
	}, this.jn = function() {
		aSK.jn(), p.rb.jn(), p.t0.jn(), p.message.jn()
	}, this.resize = function() {
		aSK.resize(1 - p.v.a40[2]), p.message.resize()
	}, this.jo = function(dx) {
		2 === dx ? p.v.a40[3] ? aSV(1) : aSK.aSg[3].a0a[0].jq() : dx < 2 && aSV(1)
	}, aSR = new a66([new jJ(aSQ[0], function() {
		return aST(0, 0), 2
	}), new jJ(aSQ[1], function() {
		return aST(0, 1), 2
	}), new jJ(aSQ[2], function() {
		return aST(0, 2), 2
	}), new jJ(aSQ[3], function() {
		return aST(0, 3), 2
	})], fk.fN), aSL = new a66([new jJ("", 0, 2), new jJ("", 0, 2), new jJ("", 0, 2), new jJ("", 0, 2), new jJ("", 0, 2)], fk.fO, 1);
	var aSU = new a66([new jJ(L(373), function() {
		return aST(2, 0), 2
	}), new jJ(L(262), function() {
		return aST(2, 1), 2
	})], fk.fN);
	aSS = new a66([new jJ(L(374), (__fx.customLobby.setLeaveFunction(() => {
			n.o(), p.q(), u.v.aPR(3240), __fx.customLobby.setActive(false), n.d7(5, 5)
		}),
		function() {
			n.o(), p.q(), u.v.aPR(3240), __fx.customLobby.setActive(false), n.d7(5, 5)
		})), new jJ(L(375), function() {
		return aSV(1), 2
	})], fk.fN), aSK = new aSW(aSR, aSL, aSU, aSS, vd, p.rb.sz);
	for (var dw = 0; dw < 4; dw++) aSM[0][dw] = new aDi("0", aSR.a0a[dw].button);
	aSM[2][1] = new aDi("0", aSU.a0a[1].button), aSM[3][1] = new aDi("0", aSS.a0a[1].button), aSO = [new aDi("", aSU.a0a[1].button, 1, 1), new aDi("", aSS.a0a[1].button, 1, 1)], aSX(0, p.v.a40[0], 1), aSX(2, p.v.a40[2], 1), (aSP = [new aDi(L(61), aSK
		.aSY(), 1, 0), new aDi("", aSK.aSY(), 1, 1)])[0].sv.style.fontSize = "0.4em", aSP[1].sv.style.fontSize = "0.4em"
}

function aBT() {
	var aSq = new Uint8Array(64);
	this.j = function() {
		var dw;
		for (aSq[0] = 45, aSq[37] = 95, dw = 0; dw < 10; dw++) aSq[dw + 1] = 48 + dw;
		for (dw = 0; dw < 26; dw++) aSq[dw + 11] = 65 + dw, aSq[dw + 38] = 97 + dw
	}, this.df = function(dT) {
		for (var aPU = da, aHT = new Uint8Array(dT), dw = 0; dw < dT; dw++) aHT[dw] = aPU.jw(6);
		return aHT
	}, this.de = function(aHT) {
		for (var du = aHT.length, aRo = aSq, dY = [], dw = 0; dw < du; dw++) dY.push(String.fromCharCode(aRo[aHT[dw]]));
		return dY.join("")
	}, this.t6 = function(value, aSr) {
		for (var aRo = aSq, dY = [], dw = 0; dw < aSr; dw++) dY.push(String.fromCharCode(aRo[value >> 6 * (aSr - 1 - dw) & 63]));
		return dY.join("")
	}
}

function gP() {
	this.aNH = function() {
		gG.gH.kz(), gG.gH.l1(), u.v.close(0, 3255), 0 === aI.id ? aI.gL && aI.gL.clear() : 1 === aI.id ? aI.gM.saveString(199, "") : 2 === aI.id && aI.gO.postMessage("clear")
	}, this.aN5 = function() {
		2 === aI.id ? aI.gO.postMessage("showConsentForm") : 1 === aI.id && aI.gM.setState(7)
	}, this.aN7 = function() {
		this.setState(14)
	}, this.aK = function() {
		return 1 === gG.ku.aSs(2)
	}, this.aSt = function() {
		gG.ku.kv(102, "")
	}, this.setState = function(py) {
		1 === aI.id && 5 <= aI.gK && aI.gM.setState(py)
	}, this.aEq = function() {
		var aQY;
		1 === aI.id && 7 <= aI.gK ? aI.gM.setState(5) : ((aQY = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aQY.toString())
	}, this.pu = function() {
		1 !== aI.id || aI.gK < 17 || aI.gM.saveString(23, document.documentElement.outerHTML)
	}, this.aHY = function() {
		0 !== aI.id && (1 === aI.id ? aI.gM.prepareAd("1688441405") : 2 === aI.id && (0 === aI.gK ? aI.gO.postMessage("prepare ad 1770251391") : aI.gO.postMessage("loadAds 1770251391")))
	}, this.aHX = function(b5) {
		return 0 !== aI.id && 1 !== aI.id && 2 === aI.id && (0 === aI.gK ? aI.gO.postMessage("show ad " + b5) : aI.gO.postMessage("showAd"), !0)
	}, this.pw = function() {
		2 === aI.id && aI.gK < 23 && n.d7(4, 1, new uE("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + g7.aNA + "' target='_blank'>" +
			g7.aNA + "</a>", !0, [new jJ("⬅️ " + L(10), function() {
				n.d7(0)
			}, fk.er)]))
	}
}

function pL() {
	this.size = 0, this.dS = 0, this.ju = null, this.j = function(ju) {
		this.dS = 0, this.ju = ju, this.size = ju.length
	}, this.q = function() {
		this.ju = null
	}, this.jw = function(size) {
		for (var gp = 0, ju = this.ju, m5 = this.dS + size - 1, dw = this.dS; dw <= m5; dw++) gp |= (ju[dw >> 3] >> 7 - (7 & dw) & 1) << m5 - dw;
		return this.dS += size, this.dS > 8 * this.size && console.error("Unwrapper Overflow"), gp
	}, this.a24 = function(size) {
		var fn = size >> 1;
		return (1 << fn) * this.jw(size - fn) + this.jw(fn)
	}, this.aMQ = function(aSu) {
		return this.size === dW.dX(aSu)
	}, this.aSv = function(aMA, aMB, aSw) {
		var mv = this.jw(aMA);
		if (!mv) return null;
		for (var aMA = Math.max(mv, aSw), dY = new(aMB <= 8 ? Uint8Array : aMB <= 16 ? Uint16Array : Uint32Array)(aMA), dw = 0; dw < mv; dw++) dY[dw] = this.jw(aMB);
		aSw = dY[mv - 1];
		return aSw && dY.fill(aSw, mv), dY
	}, this.aSx = function(aMA, aMD, aSw) {
		var mv = this.jw(aMA);
		if (!mv) return null;
		for (var aMA = Math.max(mv, aSw), dY = new Array(aMA), dw = 0; dw < mv; dw++) dY[dw] = this.aSy(aMD);
		return dY.fill(dY[mv - 1], mv), dY
	}, this.aSy = function(aMA) {
		return kV.kW.kX(this.jw(aMA))
	}, this.aSz = function() {
		var fr = dc.dd.de(dc.dd.df(this.jw(30))),
			fr = aW.fv.aMF(fr, "_", "/");
		fr = aW.fv.aMF(fr, "-", "+");
		for (var aT0 = "";
			(fr.length + aT0.length) % 4;) aT0 += "=";
		fr = "data:image/png;base64," + fr + aT0;
		var aKP = new Image;
		aKP.onload = function() {
			cR.uC.aKQ(aKP), aKP.onload = null, aKP = null
		}, aKP.src = fr
	}
}

function a9K() {
	var aT1 = 0;

	function aT6(fr, id) {
		aT1 || (id ? 1 === id ? cf.aT3 = L(384) + ": " + fr : n.d7(4, 3, new uE(L(385), fr, 1)) : n.d7(4, 3, new uE("⚠️ " + L(383), fr, 1)))
	}
	this.uD = function(fr, aT2) {
		var dg;
		return aT1 = aT2, kV.dd.aHS(kV.dd.aHR(kV.dd.aHP(fr))), cf.aT3 = "", !(! function() {
			if (da.size < 10) aT6("File Too Small");
			else {
				var aT8 = da.jw(12),
					e0 = (aT8 !== c1.rVersion && aT6("Incompatible Version   Required: " + c1.rVersion + ("   Found: " + aT8) + ("   Compatible at territorial.io/" + aT8), 1), da.jw(12)),
					aT9 = da.jw(31);
				if (aT9 !== da.size) aT6("Size Error: " + aT9 + " " + da.size);
				else if (function(aO, aT8) {
						for (var fl = da.ju, du = da.size, e0 = aT8, dw = 3; dw < du; dw++) e0 = e0 + fl[dw] & 4095;
						return e0 === aO || (aT6("Hash Error: " + e0 + " " + aO + " " + du), !1)
					}(e0, aT8)) return 1
			}
			return
		}() || (aT2 = da, (dg = aR.data = new bq).mapType = aT2.jw(2), dg.mapProceduralIndex = aT2.jw(8), dg.mapRealisticIndex = aT2.jw(8), dg.mapSeed = aT2.jw(14), dg.mapName = aT2.aSy(5), 2 === dg.mapType && aT2.aSz(), dg
			.passableWater = aT2.jw(1), dg.passableMountains = aT2.jw(1), dg.playerCount = aT2.jw(10), dg.humanCount = aT2.jw(10), dg.selectedPlayer = aT2.jw(9), dg.gameMode = aT2.jw(1), dg.playerMode = aT2.jw(2), dg.battleRoyaleMode =
			aT2.jw(2), dg.numberTeams = aT2.jw(4), dg.isZombieMode = aT2.jw(1), dg.isContest = aT2.jw(1), dg.isReplay = aT2.jw(1), dg.elo = aT2.aSv(2, 14, 2), dg.colorsType = aT2.jw(1), dg.colorsPersonalized = aT2.jw(1), dg.colorsData =
			aT2.aSv(10, 18, 512), dg.selectableColor = aT2.jw(1), dg.teamPlayerCount = aT2.aSv(4, 10, 9), dg.neutralBots = aT2.jw(1), dg.botDifficultyType = aT2.jw(2), dg.botDifficultyValue = aT2.jw(4), dg.botDifficultyTeam = aT2.aSv(4,
				4, 9), dg.botDifficultyData = aT2.aSv(10, 4, 512), dg.spawningType = aT2.jw(2), dg.spawningSeed = aT2.jw(14), dg.spawningData = aT2.aSv(11, 12, 1024), dg.selectableSpawn = aT2.jw(1), dg.playerNamesType = aT2.jw(2), dg
			.playerNamesData = aT2.aSx(10, 5, 512), dg.selectableName = aT2.jw(1), dg.aIncomeType = aT2.jw(2), dg.aIncomeValue = aT2.jw(8), dg.aIncomeData = aT2.aSv(10, 8, 512), dg.tIncomeType = aT2.jw(2), dg.tIncomeValue = aT2.jw(8), dg
			.tIncomeData = aT2.aSv(10, 8, 512), dg.iIncomeType = aT2.jw(2), dg.iIncomeValue = aT2.jw(8), dg.iIncomeData = aT2.aSv(10, 8, 512), dg.sResourcesType = aT2.jw(2), dg.sResourcesValue = aT2.jw(11), dg.sResourcesData = aT2.aSv(10,
				11, 512), ! function() {
				var ld = da,
					dL = ld.jw(5),
					aTB = ld.jw(30),
					aTC = ld.jw(30);
				if (aTB + aTC > 8 * ld.size) return void aT6("Corrupted File");
				return function(du) {
						var aTF = new Uint8Array(du),
							aTG = new Uint16Array(du),
							aTH = new Uint32Array(du),
							aTI = new Uint32Array(du);
						cR.cy.dm = aTF, cR.cy.dp = aTG, cR.cy.dr = aTH, cR.cy.dt = aTI;
						for (var dw = 0; dw < du; dw++) {
							var id = da.jw(4);
							aTF[dw] = id, aTG[dw] = da.jw(9), 0 === id ? aTH[dw] = da.jw(22) : 1 === id ? (aTH[dw] = da.jw(10), aTI[dw] = da.jw(10)) : 2 === id ? (aTH[dw] = da.jw(10), aTI[dw] = da.jw(9)) : 3 === id ? (aTH[dw] = da.jw(10),
								aTI[dw] = da.jw(27)) : 4 === id ? (aTH[dw] = da.jw(10), aTI[dw] = da.jw(16)) : 5 === id || 6 === id ? aTH[dw] = da.jw(10) : 7 === id ? aTH[dw] = da.jw(1) : 10 === id && (aTH[dw] = da.jw(20), aTI[dw] =
								da.jw(22))
						}
					}(aTB),
					function(du, dL) {
						var dy = new Uint8Array(du),
							dv = new Array(du);
						dv.fill(0), cR.cy.dy = dy, cR.cy.dv = dv;
						for (var dw = 0; dw < du; dw++) dy[dw] = da.jw(1), dv[dw] = da.jw(dL)
					}(aTC, dL), 1
			}()) || (da.dS < 8 * da.size - 13 || da.dS > 8 * da.size ? (aT6("Out Of Bounds Error: " + da.dS + " " + 8 * da.size), 1) : (cR.cy.cz = fr, 2 === aR.data.mapType && (aT6("Load base64 image...", 2), 1))))
	}, this.aKQ = function(aKP, aT7) {
		var uk = document.createElement("canvas"),
			n2 = uk.getContext("2d");
		if (uk.width = aKP.width, uk.height = aKP.height, n2.drawImage(aKP, 0, 0), aR.data.canvas = uk, aT1 || aT7) return aR.bf ? void 0 : (aR.data.mapType = 2, n.o(), void n.d7(19));
		cR.uB()
	}
}

function oc() {
	var aN, iE, aTJ, canvas, nU, mH, qF, aNo, mM, a6G, aTK = 11 / 12;

	function aTL() {
		var aJ6 = Math.floor(qF * (aN - 2 * aTJ)),
			aTN = 1 + Math.floor(.0625 * cY.aO),
			aTO = 1 + Math.floor(.3 * cY.aO),
			yV = Math.floor(.55 * cY.aO);
		nU.clearRect(0, 0, aN, cY.aO), nU.fillStyle = fk.e8, nU.fillRect(0, 0, aTJ, cY.aO), nU.fillRect(aTJ + aJ6, 0, aN - aTJ - aJ6, cY.aO), nU.fillStyle = qF < 1 / 3 ? "rgba(" + Math.floor(3 * qF * 130) + ",130,0,0.85)" : qF < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (qF - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (qF - 2 / 3) * 130) + ",0.85)", nU.fillRect(aTJ, 0, aJ6, cY.aO), nU.fillStyle = fk.eC, nU.fillRect(0, 0, aN, 1), nU.fillRect(0, cY.aO - 1, aN, 1), nU
			.fillRect(0, 0, 1, cY.aO), nU.fillRect(aTJ, 0, 1, cY.aO), nU.fillRect(aTJ + aJ6, 0, 1, cY.aO), nU.fillRect(aN - aTJ, 0, 1, cY.aO), nU.fillRect(aN - 1, 0, 1, cY.aO), nU.fillRect(Math.floor(.25 * cY.aO) + aTO, Math.floor((cY.aO - aTN) / 2),
				cY.aO - 2 * aTO, aTN), nU.fillRect(Math.floor(aN - 1.25 * cY.aO) + aTO, Math.floor((cY.aO - aTN) / 2), cY.aO - 2 * aTO - aTO % 2, aTN), nU.fillRect(Math.floor(aN - 1.25 * cY.aO) + Math.floor((cY.aO - aTN) / 2), aTO, aTN, cY.aO - 2 *
				aTO - aTO % 2), aNo = aW.aX.qR(aR.ad, cY.a0y()), nU.fillText(aW.fv.t6(aNo) + " (" + aW.fv.aGE(100 * qF, +(qF < .1)) + ")", Math.floor(.5 * aN), yV)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		qF = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => cY.rW(arg1);

	function aTT(li) {
		return !(1 < li && 1 === qF || (1 < li && li * qF - qF < 1 / 1024 ? li = (qF + 1 / 1024) / qF : li < 1 && qF - li * qF < 1 / 1024 && (li = (qF - 1 / 1024) / qF), qF = dU.ls(qF * li, 1 / 1024, 1), aTL(), 0))
	}

	function aTU(hY) {
		return qF !== (qF = dU.ls((hY - iE - aTJ) / (aN - 2 * aTJ), 1 / 1024, 1)) && (aTL(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aTL(), s.ap = !0
	}, this.iF = 0, this.rI = !1, this.j = function() {
		mH = !aR.bh && !aR.aw, a6G = !1, qF = .5, aNo = 0, this.rI = !1, this.resize()
	}, this.resize = function() {
		aI.aJ.aK() && aL.aN < .8 * aL.aO ? (this.aO = Math.floor(.066 * aL.aM), aN = aL.aN - 4 * dI.gap - this.aO) : (aN = Math.floor((aI.aJ.aK() ? .65 : .389) * aL.aM), aN += 12 - aN % 12, this.aO = Math.floor(aN / 12)), aTJ = Math.floor(3 *
			this.aO / 2), mM = aW.bA.mN(1, Math.floor(.5 * this.aO)), (canvas = document.createElement("canvas")).width = aN, __fx.mobileKeybinds.setSize(aN, this.aO, aC), canvas.height = this.aO, (nU = canvas.getContext("2d", {
			alpha: !0
		})).font = mM, aW.bA.textBaseline(nU, 1), aW.bA.textAlign(nU, 1), this.a6N(), aTL()
	}, this.a6N = function() {
		iE = aI.aJ.aK() && aL.aN < .8 * aL.aO ? this.aO + 3 * dI.gap : Math.floor((aL.aN - aN) / 2), this.iF = aL.aO - this.aO - o8.aL4() * dI.gap
	}, this.cv = function() {
		a6G && (a6G = !1, aTL())
	}, this.mH = function() {
		return !(!mH || cd.d9 && iE < Math.floor(dI.gap + 5.5 * this.aO))
	}, this.aL1 = function(aTP) {
		return !!this.mH() && iE + aN > aL.aN - aTP - dI.gap
	}, this.aQa = function() {
		mH = !aR.aw
	}, this.a5v = function() {
		mH = !1
	}, this.a0y = function() {
		return dU.ls(Math.floor(1024 * qF + .5) - 1, 0, 1023)
	}, this.rR = function(hY, hZ) {
		return this.mH() && iE < hY && hY < iE + aN && hZ > this.iF
	}, this.mJ = function(hY, hZ) {
		if (!this.mH()) return !1;
		if (!(__fx.settings.keybindButtons && hZ > this.iF - Math.floor(dI.gap / 4) - this.aO && hZ < this.iF - Math.floor(dI.gap / 4) && __fx.mobileKeybinds.click(hY - iE))) {
			if (!cY.rR(hY, hZ)) return !1;
			cX.rJ = !1, ! function(a1U, hY, hZ) {
				if (function(hY, hZ) {
						return iE < hY && hY < iE + aTJ && hZ > cY.iF
					}(hY, hZ)) return aTT(aTK);
				if (function(hY, hZ) {
						return iE + aN - aTJ < hY && hY < iE + aN && hZ > cY.iF
					}(hY, hZ)) return aTT(1 / aTK);
				return a1U.rI = !0, aTU(hY)
			}(this, hY, hZ) || (s.ap = !0)
		}
		return !0
	}, this.rW = function(aH) {
		0 !== aR.bf && this.mH() && aTT(aH) && (s.ap = !0)
	}, this.qu = function(deltaY) {
		var aH;
		return !(0 === deltaY || !this.mH()) && aTT(aH = 0 < deltaY ? (aH = 400 / (400 + deltaY)) < aTK ? aTK : aH : 1 / aTK < (aH = (400 - deltaY) / 400) ? 1 / aTK : aH)
	}, this.qr = function(hY) {
		return !!this.rI && aTU(hY)
	}, this.rN = function() {
		this.rI = !1
	}, this.b2 = function() {
		this.mH() && aNo !== aW.aX.qR(aR.ad, this.a0y()) && (a6G = !0)
	}, this.mP = function() {
		this.mH() && (aC.drawImage(canvas, iE, this.iF), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(aC, iE, this.iF)
	}
}

function oV() {
	var aTV, aTW, aTX;
	aTV = [32, 65, 191, 913, 931], aTW = [64, 127, 688, 930, 1155], aTX = new Array(aTV.length + 1);
	for (var dw = 0; dw < aTX.length; dw++) {
		aTX[dw] = 0;
		for (var fm = dw - 1; 0 <= fm; fm--) aTX[dw] += aTW[fm] - aTV[fm]
	}

	function aTd(dx) {
		for (var dw = aTV.length - 1; 0 <= dw; dw--)
			if (dx >= aTV[dw] && dx < aTW[dw]) return dw;
		return -1
	}
	this.aPV = function(fr) {
		return 0 !== (fr = fr.trim()).indexOf("Bot ") && 0 !== fr.indexOf("[Bot] ") && function(fr, aTa, aTb) {
			var du = (fr = fr.trim()).length;
			if (du < aTa || aTb < du) return !1;
			for (var dx, aTc = 0, dw = 0; dw < du; dw++)
				if (dx = fr.charCodeAt(dw), aTc += 65 <= dx && dx <= 90 || 1040 <= dx && dx <= 1071 ? 1 : 0, -1 === aTd(dx)) return !1;
			if (3 < aTc && aTc > Math.floor(du / 2)) return !1;
			return !0
		}(fr, 3, 20)
	}, this.d1 = function(fr) {
		for (var du = (fr = fr.trim()).length, dY = [], dw = 0; dw < du; dw++) {
			var dx, fl = aTd(dx = fr.charCodeAt(dw));
			dY.push(aTX[fl] + dx - aTV[fl])
		}
		return dY
	}, this.uD = function(dY) {
		for (var dx, fn, fr = "", du = dY.length, dw = 0; dw < du; dw++)
			for (fn = 1; fn < aTX.length; fn++)
				if (dY[dw] < aTX[fn]) {
					dx = aTV[fn - 1] + dY[dw] - aTX[fn - 1], fr += String.fromCharCode(dx);
					break
				} return fr
	}, this.aTe = function(fr) {
		for (var dY = this.d1(fr), result = "", dw = 0; dw < dY.length; dw++) result = (result += dY[dw] < 10 ? "00" : dY[dw] < 100 ? "0" : "") + dY[dw].toString(10);
		return result
	}, this.aTf = function(fr) {
		for (var dY = new Array(Math.floor(fr.length / 3)), dw = 0; dw < fr.length; dw += 3) dY[Math.floor(dw / 3)] = parseInt(fr.substring(dw, dw + 3));
		return this.uD(dY)
	}, this.aTg = function(fr) {
		for (var gp, dY = [fr.length], dw = 0; dw < fr.length; dw++) dY[dw] = fr.charCodeAt(dw) - 48;
		var result = "";
		for (dw = 0; dw < fr.length; dw++) dw === fr.length - 1 || 51 < 10 * dY[dw] + dY[dw + 1] ? result += dY[dw].toString() : (gp = 10 * dY[dw] + dY[dw + 1], result += String.fromCharCode(gp + (gp < 26 ? 65 : 71)), dw++);
		return result
	}, this.aTh = function(fr) {
		for (var dx, result = "", dw = 0; dw < fr.length; dw++) 48 <= (dx = fr.charCodeAt(dw)) && dx < 58 ? result += String.fromCharCode(dx) : 65 <= dx && dx < 75 ? result += "0" + (dx - 65).toString() : 75 <= dx && dx < 91 ? result += (dx - 65)
			.toString() : 97 <= dx && dx < 123 && (result += (dx - 71).toString());
		return result
	}, this.aTi = function(fr) {
		for (var du = fr.length, dY = [], dw = 0; dw < du; dw++)(dx = fr.charCodeAt(dw)) < 58 ? dY.push(fr[dw]) : (dx -= dx < 91 ? 65 : 71, dY.push(String(dU.dV(dx, 10))), dY.push(String(dx - 10 * dU.dV(dx, 10))));
		var du = dY.length - 2,
			dx = 0,
			aHT = [];
		for (dw = 0; dw < du; dw += 3) aHT[dx++] = parseInt(dY[dw] + dY[dw + 1] + dY[dw + 2]);
		return aHT
	}, this.aPL = function() {
		for (var rT, aTj = "", dw = 0; dw < 6; dw++) rT = 48 + c3.random() % 36, rT += 58 <= rT ? 39 : 0, aTj += String.fromCharCode(rT);
		return aTj
	}
}

function a4F() {
	var aTk = null,
		aTl = null,
		aTm = 0,
		aTn = 0,
		aTo = null;

	function aTp() {
		0 !== aTl.st && (p.rb.jn(), n.d7(8, 29, new a48(25, {
			a7R: 0,
			nK: dc.dd.t6(aTl.nK, 5),
			l4: 0
		}, 29)))
	}

	function aTq() {
		var iE = aTk.iE,
			iF = aTk.iF;
		p.rb.jn(), aTk = new aP6([new jJ("Kick User", function() {
			aTw(0, 0)
		}, aTz(0, 0)), new jJ("Block Chat", aTx, aTz(1, 0)), new jJ("Censor Username", aTy, aTz(2, 0))]), aTv(iE, iF), aTm = 2, aTn = 1
	}

	function aTz(id, dS) {
		var rT, a3V;
		return !p.a3Q || p.sr.sy(aTl) || (rT = aTl.qd) <= (a3V = p.a3Q.a3V) || 1 - oC.aCX(id, a3V, dS) ? 1 : 4 === aTl.st ? 50 <= rT ? +(rT <= a3V) : 20 <= rT ? +(rT / 2 <= a3V) : +(rT / 3 <= a3V) : 0
	}

	function aTt() {
		return !p.a3Q || p.sr.sy(aTl) ? 1 : 0
	}

	function aTs() {
		var iE = aTk.iE,
			iF = aTk.iF,
			aU0 = (p.rb.jn(), aTt());
		aTk = new aP6([new jJ(oC.a3M[5][0], function() {
			aTw(5, 0)
		}, aU0), new jJ(oC.a3M[5][1], function() {
			aTw(5, 1)
		}, aU0), new jJ(oC.a3M[5][2], function() {
			aTw(5, 2)
		}, aU0), new jJ(aTl.a3V < 100 ? "Stealth Report" : oC.a3M[5][3], function() {
			aTw(5, 3)
		}, aU0)]), aTv(iE, iF), aTn = aTm = 2
	}

	function aTu() {
		29 === n.uL && n.uM().a4B(dc.dd.t6(aTl.nK, 5))
	}

	function aTw(id, value) {
		u.s9.nG(5, {
			id: id,
			value: value,
			nK: aTl.nK
		})
	}

	function aTx() {
		var iE = aTk.iE,
			iF = aTk.iF;
		p.rb.jn(), aTk = new aP6([new jJ(oC.a3M[1][0], function() {
			aTw(1, 0)
		}, aTz(1, 0)), new jJ(oC.a3M[1][1], function() {
			aTw(1, 1)
		}, aTz(1, 1)), new jJ(oC.a3M[1][2], function() {
			aTw(1, 2)
		}, aTz(1, 2)), new jJ(oC.a3M[1][3], function() {
			aTw(1, 3)
		}, aTz(1, 3)), new jJ(oC.a3M[1][4], function() {
			aTw(1, 4)
		}, aTz(1, 4))]), aTv(iE, iF), aTm = 3, aTn = 1
	}

	function aTy() {
		var iE = aTk.iE,
			iF = aTk.iF;
		p.rb.jn(), aTk = new aP6([new jJ(oC.a3M[2][0], function() {
			aTw(2, 0)
		}, aTz(2, 0)), new jJ(oC.a3M[2][1], function() {
			aTw(2, 1)
		}, aTz(2, 1)), new jJ(oC.a3M[2][2], function() {
			aTw(2, 2)
		}, aTz(2, 2))]), aTv(iE, iF), aTm = 3, aTn = 2
	}

	function aTv(iE, iF, aPC) {
		aTk.show(iE, iF, aPC), p.t0.show(aTk.iE, aTk.iF, aTl, 1)
	}
	this.sz = function(jj, dg) {
		aTm = 1, aTl = dg, aTk = new aP6([new jJ(L(386), aTp, 0 === aTl.st ? 1 : 0), new jJ(L(387), aTq, function() {
			if (!p.a3Q) return 1;
			if (p.sr.sy(aTl)) return 1;
			if (100 <= p.a3Q.a3V) return 1;
			if (p.a3Q.a3V >= aTl.qd) return 1;
			return 0
		}()), new jJ(L(388, 0, "🚩 Report"), aTs, aTt()), new jJ(L(389), aTu, 0)]), aTv((aTo = {
			clientX: jj.clientX,
			clientY: jj.clientY
		}).clientX, aTo.clientY, 1)
	}, this.jo = function(code) {
		if (29 !== n.uL) return !1;
		if (!aTl) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.jn();
			else if (aW.fv.startsWith(code, "Numpad") || aW.fv.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aTm) this.sz(aTo, aTl);
				else {
					if (!aTk) return !1;
					1 === aTm ? code <= 1 ? aTp() : 2 === code ? aTq() : 3 === code ? aTs() : (aTu(), this.jn()) : 2 === aTm ? 1 === aTn ? code <= 1 ? (aTw(0, 0), this.jn()) : (2 === code ? aTx : aTy)() : (aTw(5, dU.ls(code - 1, 0, 3)), this
					.jn()) : (aTw(aTn, dU.ls(code - 1, 0, oC.a3M[aTn].length - 1)), this.jn())
				}
		}
		return !0
	}, this.jn = function() {
		aTm = 0, aTk && aTk.jn(), aTk = null, p.t0.jn()
	}
}

function y7() {
	function aU5(player) {
		for (var ic = aZ.ic[player], du = ic.length, aFE = Math.max(dU.dV(du, 12), 1), yo = cC.yo, rT = c3.a04(du), dw = 0; dw < du; dw += aFE)
			for (var h9 = ic[(dw + rT) % du], kR = 3; 0 <= kR; kR--) {
				var aF8 = h9 + yo[kR];
				if (cC.z4(aF8)) return {
					gt: aF8,
					id: cC.h2(aF8),
					fl: player
				}
			}
		return null
	}

	function aUA(player, aUB) {
		var hm = aW.aX.qW(player, cM.zx[cM.hm[player]]);
		aZ.ig[player].push(aUB.gt), cm.a1Z(player, hm, aUB.fl), cj.a22(player, !0)
	}
	this.b2 = function(player) {
		return !!gu.ia(gu.ib) && !!aR.data.passableMountains && 0 !== aZ.ic[player].length && function(player) {
			var aU4 = aU5(player);
			if (null === aU4) return !1;
			! function(player) {
				for (var q3 = bF.q3, bG = bF.bG, du = Math.min(bG, 12), sT = c3.a04(bG), aPt = bw.aPt, ic = aZ.ic, mv = 0, dw = 0; dw < du; dw++) {
					var fl = q3[(dw + sT) % bG];
					fl !== player && ic[fl].length && hK.hL(player, fl) && (aPt[mv++] = fl)
				}
				bw.vI[0] = mv
			}(player);
			var aU7 = function(aF3) {
				for (var du = bw.vI[0], aPt = bw.aPt, dw = 0; dw < du; dw++) {
					var aUB = aU5(aPt[dw]);
					if (null !== aUB && aUB.id === aF3) return aUB
				}
				return null
			}(aU4.id);
			return null !== aU7 ? (aUA(player, aU7), !0) : function(player, aF3) {
				var du = cK.xw.aQL;
				if (0 !== du)
					for (var gt = cK.xw.ku[c3.a04(du)] << 2, yo = cC.yo, kR = c3.a04(4);;) {
						if (gt += yo[kR], cC.z4(gt)) {
							if (cC.h2(gt) === aF3) return aUA(player, {
								gt: gt,
								fl: aR.bS
							}), !0;
							break
						}
						if (!cC.hH(gt)) break
					}
				return !1
			}(player, aU4.id)
		}(player)
	}
}

function a4H() {
	var aUC, aUD = [],
		aUE = -1,
		aUF = 0,
		aUG = 0;

	function aUJ() {
		aUF = s.t, (3 === this.aUK ? (aUG = 1, aUI) : (aUE = (aUD.length + aUE + 2 * this.aUK - 1) % aUD.length, aUH))()
	}

	function aUH() {
		0 !== aUD.length && (aUG = 0, aUC && aUC.q(), (aUC = new aUL(aUJ)).gI(aUE, aUD.length), aUC.show(aUD[aUE]), p.message.resize())
	}

	function aUI() {
		aUC && aUC.q(), (aUC = new aUM(aUH)).gI(aUD.length), aUC.show(), p.message.resize()
	}
	this.vp = function(sh) {
		var dg;
		2 === sh.id && 3 === sh.tI ? p.sr.tL(sh.nK) : (dg = p.sr.tN(sh, p.sr.tO(sh)), (5 !== sh.id && 6 !== sh.id || (n.uN(29).aSa().aDp(dg), 5 === sh.id)) && (dg = s.t < aUF + 2e4, aUE !== aUD.length - 1 && dg || (aUE = aUD.length), aUD.push(
			sh), gG.ku.data[14].value || oD.play(), aUC) && (gG.ku.data[13].value || aUG && dg ? aUC.gI(aUD.length) : aUH()))
	}, this.show = function() {
		aUI()
	}, this.jn = function() {
		aUE = aUD.length - 1, aUC && aUC.q(), aUC = null
	}, this.resize = function() {
		aUC && aUC.resize()
	}, this.a3Z = function() {
		return aUD
	}
}

function aUN() {
	var fr;
	10 === gu.ib ? fr =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === gu.ib ? fr =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === gu.ib ? fr =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === gu.ib ? fr =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === gu.ib ? fr =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === gu.ib ? fr =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === gu.ib ? fr =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === gu.ib ? fr =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === gu.ib ? fr =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === gu.ib && (fr =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new aUO).uD(fr)
}

function s7() {
	this.aPP = !1, this.b2 = function() {
		s.a6() % 250 != 249 || aR.aw || (u.n9.aUP(+(this.aPP && aZ.aa[aR.ad]), bF.bG + cJ.v.ha), this.aPP = !1)
	}
}

function aD8() {
	this.zw = 512, this.aHM = 8, this.ha = 0, this.aFZ = 0, this.iM = new Uint16Array(this.zw), this.hb = new Uint32Array(this.zw), this.aEY = new Uint16Array(this.zw), this.hl = new Uint32Array(this.zw), this.aSF = new Uint16Array(this.zw), this
		.hT = new Uint16Array(this.zw), this.aEK = new Uint8Array(this.zw), this.aI7 = new Uint8Array(this.zw), this.hq = new Array(this.zw), this.aET = new Uint16Array(this.zw), this.hQ = new Uint8Array(aR.bS), this.hU = new Uint16Array(this.aHM *
			aR.bS), this.j = function() {
			this.ha = 0, this.aFZ = 0, this.hQ.fill(0), this.hq.fill(null)
		}, this.a1n = function(player) {
			var hm = bw.qK[0],
				aDC = bw.hj[1],
				hp = bw.dY[0],
				aUQ = this.aFZ,
				du = this.ha,
				aSB = cI.uz(hp[0]),
				aHf = this.hQ[player],
				aHg = (player << 3) + aHf;
			this.iM[du] = aHg, this.hb[du] = aSB, this.aEY[du] = 0, hm < 60 ? (aW.aX.j7(player, 60 - hm), this.hl[du] = 60) : this.hl[du] = hm, this.aSF[du] = cJ.tY.a1n(du, cI.v1(aSB)), this.hT[du] = aUQ, this.aEK[du] = aDC, this.aI7[du] = 0, this
				.hq[du] = hp, this.aET[du] = 0, this.aFZ = (aUQ + 1) % 65536, this.hQ[player] = aHf + 1, this.hU[aHg] = du, this.ha++, cJ.aDC.aMI(player, hp[hp.length - 1], aDC, aUQ)
		}, this.b2 = function() {
			cJ.aDC.b2();
			for (var fl = aR.ad, b5 = cJ.sr.hk(fl), a1U = (! function(a1U) {
					for (var aUV, hb = a1U.hb, hl = a1U.hl, aI7 = a1U.aI7, aEY = a1U.aEY, aSF = a1U.aSF, hq = a1U.hq, aET = a1U.aET, a1U = a1U.ha, aIC = gu.gv << 4, dw = a1U - 1; 0 <= dw; dw--) {
						var aUW = hb[dw],
							hp = hq[dw],
							aUX = aET[dw],
							aSB = cI.uz(hp[aUX]),
							aSC = cI.uz(hp[aUX + 1]),
							aUY = aSB % aIC,
							aSB = ~~((aSB + .5) / aIC),
							aUa = aSC % aIC,
							aUb = ~~((aSC + .5) / aIC),
							aUc = aUa - aUY,
							aUd = aUb - aSB,
							kR = Math.max(~~Math.sqrt(aUc * aUc + aUd * aUd + .5), 1),
							aUe = hl[dw],
							aUe = (aUe = aI7[dw] ? 4e4 : 25e4 + Math.min(20 * aUe, 3e5) + Math.min(aUe >> 3, 5e4), aEY[dw] + Math.max(~~((aUe + .5) / kR), 1));
						65535 <= aUe ? aUX + 2 < hp.length ? (aET[dw] = aUX + 1, hb[dw] = aUV = function(dw, aUf, aUY, aUZ, aUX, kR, hp, aIC) {
							aUf = Math.min(aUf - 65535, 65535);
							var hp = cI.uz(hp[aUX + 2]),
								aUX = hp % aIC - aUY,
								hp = ~~((hp + .5) / aIC) - aUZ,
								aUh = Math.max(~~Math.sqrt(aUX * aUX + hp * hp + .5), 1);
							return aUf = Math.min(Math.floor((kR * aUf + .5) / aUh), 65534), cJ.v.aEY[dw] = aUf, aUY + dU.dV(aUf * aUX, 65535) + aIC * (aUZ + dU.dV(aUf * hp, 65535))
						}(dw, aUe, aUa, aUb, aUX, kR, hp, aIC)) : (hb[dw] = aUV = aSC, aEY[dw] = 65535) : (aEY[dw] = aUe, hb[dw] = aUV = aUY + dU.dV(aUe * aUc, 65535) + aIC * (aSB + dU.dV(aUe * aUd, 65535))), aSF[dw] = cJ.tY.aS9(aSF[dw],
							aUW, aUV)
					}
				}(this), ! function(a1U) {
					if (s.a6() % 2 == 1) {
						var dw, n0, g4, fn, dx, aUi, mu, aUj, iP, iG, iH, aSB, aUk, aCL, aUm, iQ, du = a1U.ha,
							hb = a1U.hb,
							iM = a1U.iM,
							hl = a1U.hl,
							aI7 = a1U.aI7,
							tY = cJ.tY.tY,
							a0J = tY.length,
							aS6 = cJ.tY.aS6,
							aIC = gu.gv << 4,
							aUo = aR.ae,
							aUp = aj.al,
							sT = (du - 1) * (dU.dV(s.a6(), 2) % 2);
						for (dw = 0; dw < du; dw++)
							for (n0 = Math.abs(dw - sT), aSB = hb[n0], g4 = cI.v1(aSB), iP = iM[n0] >> 3, iG = aSB % aIC, iH = ~~((aSB + .5) / aIC), aUm = hl[n0], fn = 0; fn < 9; fn++)
								if (!((aUi = g4 + aS6[fn]) < 0 || a0J <= aUi))
									for (aUj = tY[aUi], mu = aUj.length, dx = 0; dx < mu; dx++) aUk = aUj[dx], iQ = iM[aUk] >> 3, iP == iQ || aUo && aUp[iP] === aUp[iQ] && aUp[iP] || (iQ = hb[aUk], (aCL = iG - iQ % aIC) * aCL + (aCL = iH - ~~
										((iQ + .5) / aIC)) * aCL < 14400 && (iQ = hl[aUk], aCL = iQ <= aUm ? Math.max(1, dU.dV(iQ + dU.dV(aUm - iQ, 10), 10)) : Math.max(1, dU.dV(aUm, 10)), hl[aUk] = Math.max(iQ - aCL, 0), aI7[aUk] =
										4))
					}
				}(this), ! function(a1U) {
					if (s.a6() % 5 == 3)
						for (var hl = a1U.hl, du = a1U.ha, dw = 0; dw < du; dw++) {
							var hm = hl[dw];
							hl[dw] = Math.max(hm - Math.max(1, hm >> 7), 0)
						}
				}(this), this), hl = a1U.hl, aI7 = a1U.aI7, dw = a1U.ha - 1; 0 <= dw; dw--) aI7[dw] = aI7[dw] >> 1, 0 === hl[dw] && (cJ.aDN.aEI(dw), cJ.zV.aMH(dw));
			cA.j4(fl, b5 - cJ.sr.hk(fl), 15)
		}
}

function pa() {
	var aUq = !1,
		sN = 0,
		aN = 0,
		nZ = 0,
		gap = 0,
		canvas = null,
		nU = null,
		aJh = null;

	function aUs() {
		for (var aUx, aUv = 0, du = 0, dx = Math.floor(aN / 2), rT = Math.floor(nZ / 2), aUw = 1.5 * Math.PI, dw = aR.bj; 0 <= dw; dw--) du += aJh[dw], 0 === aJh[dw] && aUv++;
		if (aUq = !1, nU.clearRect(0, 0, aN, aN), nU.fillStyle = fk.e9, nU.fillRect(0, 0, aN, aN), nU.fillStyle = fk.eC, nU.fillRect(0, 0, aN, gap), nU.fillRect(0, 0, gap, aN), nU.fillRect(aN - gap, 0, gap, aN), nU.fillRect(0, aN - gap, aN, gap), 0 <
			du)
			if (aUv === aR.bj) {
				for (dw = aR.bj; 0 <= dw; dw--)
					if (0 < aJh[dw]) {
						! function(dw, dx, rT) {
							nU.fillStyle = aj.aCb[aj.ak[dw]], nU.beginPath(), nU.arc(dx, dx, rT, 0, 2 * Math.PI), nU.fill()
						}(dw, dx, rT);
						break
					}!
				function(dx) {
					var fontSize = dx / 3;
					nU.font = aW.bA.mN(1, fontSize), nU.fillStyle = fk.eC, nU.fillText("100%", dx, dx + .1 * fontSize)
				}(dx)
			} else {
				for (dw = 0; dw <= aR.bj; dw++) 0 < aJh[dw] && (! function(dw, dx, rT, aUw, aUx) {
					nU.fillStyle = aj.aCb[aj.ak[dw]], nU.beginPath(), nU.arc(dx, dx, rT, aUw, aUx), nU.lineTo(dx, dx), nU.fill()
				}(dw, dx, rT, aUw, aUx = aUw + 2 * Math.PI * aJh[dw] / du), function(dx, rT, aUw, aUx) {
					var gp = (aUx - aUw) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * rT * Math.min(gp, .37);
					fontSize < 8 || (aUw = (aUw + aUx) / 2, aUx = (__fx.settings.detailedTeamPercentage ? (100 * gp).toFixed(2) : Math.floor(100 * gp + .5)) + "%", rT *= .525 - Math.max(.6 * (gp - .7), 0), nU.font = aW.bA.mN(1, fontSize), nU
						.fillStyle = fk.eC, nU.fillText(aUx, dx + Math.cos(aUw) * rT, dx + Math.cos(aUw + 1.5 * Math.PI) * rT))
				}(dx, rT, aUw, aUx), 0 !== dw && aV2(dx, rT, aUw), aUw = aUx);
				aV2(dx, rT, 1.5 * Math.PI)
			}!
		function(dx, rT) {
			nU.beginPath(), nU.arc(dx, dx, rT, 0, 2 * Math.PI), nU.stroke()
		}(dx, rT)
	}

	function aV2(dx, rT, aV4) {
		nU.beginPath(), nU.moveTo(dx, dx), nU.lineTo(dx + Math.cos(aV4) * rT, dx + Math.cos(aV4 + 1.5 * Math.PI) * rT), nU.stroke()
	}
	this.j = function() {
		if (aR.ae) {
			sN = 0, aJh = new Uint32Array(aR.bj + 1);
			for (var dw = aR.bj; 0 <= dw; dw--) aJh[dw] = 0;
			for (dw = bF.bG - 1; 0 <= dw; dw--) aJh[aj.al[bF.q3[dw]]] += 1;
			this.resize()
		} else aJh = nU = canvas = null
	}, this.aFT = function() {
		return aN
	}, this.resize = function() {
		aR.ae && (aN = Math.floor(aI.aJ.aK() && !aR.bg ? .18 * aL.min : .13 * aL.aM), aN = (aN *= 1 + (.5 + .2 * aI.aJ.aK()) * aR.bg) + aN % 2, nZ = Math.floor(7 * aN / 8), (canvas = canvas || document.createElement("canvas")).width = aN, canvas
			.height = aN, nU = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * aN), nU.lineWidth = gap, nU.strokeStyle = fk.eC, aW.bA.textAlign(nU, 1), aW.bA.textBaseline(nU, 1), aUs())
	}, this.qh = function() {
		var b5, af = this.bQ();
		return aj.ak[af] || (af = function() {
			for (var af = -1, dw = aR.bj; 1 <= dw; dw--)(-1 === af || aJh[dw] > aJh[af]) && (af = dw);
			return af
		}(), b5 = aZ.ac[am[0]], -1 !== af && aJh[af] > b5) ? aJh[af] : b5
	}, this.ah = function() {
		return sN = 31, this.b2(), this.bQ()
	}, this.bQ = function() {
		for (var af = 0, dw = aR.bj; 0 < dw; dw--) aJh[dw] > aJh[af] && (af = dw);
		return af
	}, this.vG = function(aUp) {
		for (var mv = 0, q3 = bF.q3, al = aj.al, du = bF.bG, vH = bw.vH, dw = 0; dw < du; dw++) {
			var fl = q3[dw];
			al[fl] === aUp && (vH[mv++] = fl)
		}
		bw.vI[0] = mv
	}, this.aPf = function(aUp) {
		for (var mv = 0, q3 = bF.q3, al = aj.al, du = bF.bG, vH = bw.vH, dw = 0; dw < du; dw++) {
			var fl = q3[dw];
			al[fl] !== aUp && (vH[mv++] = fl)
		}
		bw.vI[0] = mv
	}, this.q1 = function() {
		for (var mv = 0, dw = aR.bj; 0 <= dw; dw--) mv += 0 < aJh[dw];
		return mv
	}, this.b2 = function() {
		if (aR.ae && 32 <= ++sN) {
			sN = 0;
			for (var dw = aR.bj; 0 <= dw; dw--) aJh[dw] = 0;
			for (dw = bF.bG - 1; 0 <= dw; dw--) aJh[aj.al[bF.q3[dw]]] += aZ.ac[bF.q3[dw]];
			aUq = !0
		}
	}, this.aDl = function() {
		aR.ae && aUq && aUs()
	}, this.mP = function() {
		aR.ae && (aR.bg ? aC.drawImage(canvas, dI.gap, dI.gap) : aC.drawImage(canvas, dI.gap, aAR + 2 * dI.gap))
	}
}

function ok() {
	var aV5, aV6, aV7;

	function aVC(dw) {
		var button = nr.a0a[dw],
			iE = button.iE,
			iF = button.iF,
			aN = button.aN,
			aO = button.aO;
		aC.fillStyle = button.aVA, aC.fillRect(iE, iF, aN, aO), dw === aV5 && (aC.fillStyle = aV7, aC.fillRect(iE, iF, aN, aO)), aC.lineWidth = dI.b7, aC.strokeStyle = aV6, aC.strokeRect(iE, iF, aN, aO),
			function(button) {
				var iE = button.iE,
					iF = button.iF,
					aN = button.aN,
					aO = button.aO;
				aW.bA.textAlign(aC, 1), aW.bA.textBaseline(aC, 1), aC.font = button.font, aC.fillStyle = aV6, aC.fillText(button.vo, Math.floor(iE + aN / 2), Math.floor(iF + aO / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aN = 0, this.aO = 0, this.iF = 0, this.gap = 0, this.j = function() {
		aV5 = -1, aV6 = fk.eC, aV7 = "rgba(255,255,255,0.16)", this.a0a = new Array(7), this.aO = Math.floor((aI.aJ.aK() ? .123 : .093) * aL.aM), this.aN = Math.floor((aI.aJ.aK() ? 3.96 : 4.2) * this.aO), this.gap = Math.floor(.025 * this.aN);
		var aV8 = Math.floor(.26 * this.aO),
			aV9 = aW.bA.mN(1, aV8);
		this.a0a[0] = {
			iE: 0,
			iF: 0,
			aN: Math.floor(.6 * this.aN - this.gap / 2),
			aO: this.aO,
			vo: "Multiplayer",
			font: aV9,
			aVA: "rgba(22,88,22,0.8)",
			fontSize: aV8
		}, aV8 = Math.floor(.18 * this.aO), aV9 = aW.bA.mN(1, aV8), this.a0a[1] = {
			iE: 0,
			iF: 0,
			aN: this.aN - this.a0a[0].aN - this.gap,
			aO: this.aO,
			vo: "Single Player",
			font: aV9,
			aVA: "rgba(22,88,88,0.8)",
			fontSize: aV8
		}, this.a0a[2] = {
			iE: 0,
			iF: 0,
			aN: this.aN,
			aO: Math.floor(.3 * this.aO),
			vo: "",
			font: this.a0a[1].font,
			aVA: "rgba(100,0,0,0.8)",
			fontSize: this.a0a[1].fontSize
		}, this.a0a[3] = {
			iE: 0,
			iF: 0,
			aN: this.aN,
			aO: this.aO,
			vo: "Back",
			font: this.a0a[0].font,
			aVA: "rgba(0,0,0,0.8)",
			fontSize: this.a0a[0].fontSize
		}, this.a0a[4] = {
			iE: 0,
			iF: 0,
			aN: this.aN,
			aO: Math.floor(.3 * this.aO),
			vo: "The game was updated!",
			font: this.a0a[1].font,
			aVA: "rgba(100,0,0,0.8)",
			fontSize: this.a0a[1].fontSize
		}, this.a0a[5] = {
			iE: 0,
			iF: 0,
			aN: this.a0a[0].aN,
			aO: Math.floor(.8 * this.aO),
			vo: "Reload",
			font: this.a0a[0].font,
			aVA: "rgba(0,100,0,0.8)",
			fontSize: this.a0a[0].fontSize
		}, this.a0a[6] = {
			iE: 0,
			iF: 0,
			aN: this.a0a[1].aN,
			aO: this.a0a[5].aO,
			vo: "Back",
			font: this.a0a[0].font,
			aVA: "rgba(0,0,0,0.8)",
			fontSize: this.a0a[0].fontSize
		}, this.aGU()
	}, this.aGU = function() {
		this.iF = Math.floor(.54 * aL.aO), this.a0a[0].iE = Math.floor(.5 * aL.aN - .5 * this.aN), this.a0a[1].iE = this.a0a[0].iE + this.a0a[0].aN + this.gap, this.a0a[2].iE = this.a0a[3].iE = this.a0a[0].iE, this.a0a[4].iE = this.a0a[5].iE =
			this.a0a[0].iE, this.a0a[6].iE = this.a0a[1].iE, this.a0a[0].iF = Math.floor(.54 * aL.aO), this.a0a[1].iF = this.a0a[0].iF, this.a0a[2].iF = Math.floor((aL.aO - this.a0a[2].aO - this.a0a[3].aO - this.gap) / 2), this.a0a[3].iF = this
			.a0a[2].iF + this.a0a[2].aO + this.gap, this.a0a[4].iF = Math.floor((aL.aO - this.a0a[4].aO - this.a0a[5].aO - this.gap) / 2), this.a0a[5].iF = this.a0a[6].iF = this.a0a[4].iF + this.a0a[4].aO + this.gap
	}, this.aVB = function() {
		aVC(0), aVC(1)
	}, this.aVD = function() {
		aVC(2), aVC(3)
	}, this.aVE = function() {
		aVC(4), aVC(5), aVC(6)
	}, this.qr = function(iE, iF, cv) {
		var dw = -1;
		return 0 === r.a8() ? dw = this.rR(iE, iF, 0, 2) : 3 === r.a8() ? dw = this.rR(iE, iF, 3, 1) : 5 === r.a8() && (dw = this.rR(iE, iF, 5, 2)), aV5 !== dw && (aV5 = dw, cv) && (s.ap = !0), -1 !== dw && (kK.rL(), !0)
	}, this.rR = function(iE, iF, aAF, size) {
		for (var dw = aAF; dw < aAF + size; dw++)
			if (iE >= this.a0a[dw].iE && iF >= this.a0a[dw].iF && iE <= this.a0a[dw].iE + this.a0a[dw].aN && iF <= this.a0a[dw].iF + this.a0a[dw].aO) return dw;
		return -1
	}
}

function L(value, aVG, l0) {
	var fr = "number" == typeof value ? kw.a7W[value] : value;
	if (l0 && kw.a7d() && (fr = l0), aVG)
		for (var du = aVG.length, dw = 0; dw < du; dw++)
			for (var fm = 0; fm < 3; fm++) fr = fr.replace("{" + (10 * fm + dw) + "}", aVG[dw]);
	return fr
}

function aUM(aVH) {
	var aDz = document.createElement("div");

	function aVJ() {
		o0.ri() || (aDz.style.backgroundColor = aW.color.aGc(fk.e8, 50))
	}

	function aVI() {
		aDz.style.backgroundColor = fk.e8
	}
	this.gI = function(aO1) {
			aDz.textContent = aO1
		}, this.show = function() {
			document.body.appendChild(aDz)
		}, this.resize = function() {
			var aO = aW.bA.dJ(.03, .5);
			aDz.style.width = 2 * aO + "px", aDz.style.height = aO + "px", aDz.style.font = aW.bA.mN(1, .75 * aO), aW.bA.a5C(aDz, 4), aW.bA.a5C(aDz, 2)
		}, this.q = function() {
			aDz.onclick = null, aDz.onmouseover = null, aDz.onmouseout = null, document.body.removeChild(aDz), aDz = null
		}, aDz.style.position = "absolute", aVI(), aDz.style.color = fk.eC, aDz.style.zIndex = "3", aDz.style.right = "0", aDz.style.top = "0", aDz.style.display = "flex", aDz.style.justifyContent = "center", aDz.style.alignItems = "center", aDz
		.style.userSelect = "none", aDz.style.outline = "none", aDz.onclick = aVH, aDz.onmouseover = aVJ, aDz.onmouseout = aVI
}

function aBV() {
	this.d1 = function(fr, aMA, aVK) {
		for (var aVL = [], du = fr.length, max = 0, dw = 0; dw < du; dw++) {
			var gp = fr.charCodeAt(dw);
			aVL.push(gp), max = Math.max(max, gp)
		}
		var aQw = max < 128 ? 7 : 16;
		for (aVK.dh(aMA, du), aVK.dh(1, +(16 == aQw)), dw = 0; dw < du; dw++) aVK.dh(aQw, aVL[dw])
	}
}

function jc() {
	var dF;
	this.aO6 = [], this.dF = document.createElement("div"), this.jd = function(fr, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = fr, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.dF.appendChild(
			title), title
	}, this.vS = function(fr, marginBottom) {
		var a7S = document.createElement("p");
		return a7S.textContent = fr, a7S.style.fontSize = "0.75em", a7S.style.lineHeight = "1.2em", a7S.style.marginBottom = marginBottom || "0", this.dF.appendChild(a7S), a7S
	}, this.a8F = function(fr) {
		var aVM = document.createElement("p");
		return aVM.textContent = fr, aVM.style.fontSize = "1em", aVM.style.marginBottom = "0", aVM.style.whiteSpace = "pre-wrap", aVM.style.overflowWrap = "break-word", this.dF.appendChild(aVM), aVM
	}, this.a2f = function(dE, fontSize) {
		var dF = document.createElement("div");
		return dF.innerHTML = dE, dF.style.fontSize = fontSize || "1em", dF.style.lineHeight = "1.2em", this.dF.appendChild(dF), dF
	}, this.je = function(a89) {
		for (var gC = a89.gC, du = gC.length, dw = 0; dw < du; dw++) this.dF.appendChild(gC[dw])
	}, this.jf = function(dg) {
		return this.aO6.push(dg), this.dF.appendChild(dg.jj), dg
	}, this.resize = function() {
		for (var du = this.aO6.length, dw = 0; dw < du; dw++) this.aO6[dw].resize && this.aO6[dw].resize()
	}, (dF = this.dF).style.position = "absolute", dF.style.height = "auto", dF.style.padding = "0.5em"
}

function pJ() {
	this.size = 0, this.dS = 0, this.ju = null, this.j = function(ju) {
		this.dS = 0, this.ju = ju, this.size = ju.length
	}, this.cN = function(aSu) {
		return this.j(new Uint8Array(this.dX(aSu))), this.ju
	}, this.q = function() {
		this.ju = null
	}, this.dh = function(size, aAI) {
		for (var ju = this.ju, m5 = this.dS + size - 1, dw = this.dS; dw <= m5; dw++) ju[dw >> 3] |= (aAI >> m5 - dw & 1) << 7 - (7 & dw);
		this.dS += size, this.dS > 8 * this.size && console.error("Wrapper Overflow")
	}, this.km = function(size, aAI) {
		var fn = size >> 1,
			kR = 1 << fn;
		this.dh(size - fn, dU.dV(aAI, kR)), this.dh(fn, aAI % kR)
	}, this.aVN = function(size) {
		for (var ju = this.ju, m5 = this.dS + size, dw = this.dS; dw < m5; dw++) ju[dw >> 3] &= 255 ^ 128 >>> (7 & dw)
	}, this.dX = function(aSu) {
		return aSu + 7 >> 3
	}, this.aVO = function(dY, m4, m5, aVP) {
		for (var dw = m4; dw < m5; dw++) this.dh(aVP, dY[dw])
	}
}

function pd() {
	var aVQ, aVR = new Uint8Array(5),
		aVS = new Uint8Array(5);
	this.aVT = new aRp, this.j = function() {
		for (var gp = gG.ku.data[119].value, dw = 0; dw < aVR.length; dw++) aVR[dw] = (gp >> 2 * dw) % 4
	}, this.av = function() {
		aVQ = [L(390), "", L(391, [o4.aEw[28]]), L(392, [o4.aEw[26]]), L(393, [o4.aEw[0]])], this.aVT.j()
	}, this.b2 = function() {
		this.aVT.b2()
	}, this.a10 = function(id) {
		1 < id && o0.ri() || ! function(dS) {
			if (3 === aVR[dS] || 1 === aVS[dS]) return;
			if (aVS[dS] = 1, !(Math.random() < .6)) {
				aVR[dS]++;
				for (var gp = 0, dw = 0; dw < aVR.length; dw++) gp += aVR[dw] << 2 * dw;
				gG.gH.gI(119, gp)
			}
			return 1
		}(id) || cf.aVV(aVQ[id])
	}
}

function a9J() {
	this.dm = null, this.dp = null, this.dr = null, this.dt = null, this.dy = null, this.dv = null, this.cz = "";
	var aVW = 0;
	this.j = function() {
		this.dm = [], this.dp = [], this.dr = [], this.dt = [], this.dy = [0], this.dv = [0], aVW = 0, this.cz = ""
	}, this.a1Y = function(id, dn, dq, ds) {
		aR.aw || 2 === aR.bf || (0 === this.dy[aVW] && (this.dv[aVW] ? (this.dy.push(1), this.dv.push(0), aVW++) : this.dy[aVW] = 1), this.dm.push(id), this.dp.push(dn), this.dr.push(void 0 === dq ? 0 : dq), this.dt.push(void 0 === ds ? 0 : ds),
			this.dv[aVW]++)
	}, this.b2 = function() {
		0 === this.dy[aVW] ? this.dv[aVW]++ : (this.dy.push(0), this.dv.push(0), aVW++)
	}
}

function aNZ(title, dE, uG) {
	var rm, uH;
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), uH.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, uG = uG || [new jJ("⬅️ " + L(10), function() {
		n.jR()
	}, fk.er)], rm = new jI(title, uG), uH = new dC(rm.jM, dE), aW.bA.textAlign(rm.jM.style, 1)
}

function ua(aVX) {
	var dF = document.createElement("div");
	this.jj = dF, this.aVY = aVX, this.resize = function() {
		for (var du = aVX.length, dw = 1; dw < du; dw++) aW.bA.a5C(aVX[dw], 4)
	};
	var dw, du = aVX.length;
	for (dF.style.width = "100%", dF.style.height = "2.7em", dF.style.marginTop = "0.6em", dF.style.border = "inherit", dw = 0; dw < du; dw++) aVX[dw].style.verticalAlign = "top", aVX[dw].style.width = (100 / du).toFixed(2) + "%", aVX[dw].style
		.height = "100%", aVX[dw].style.fontSize = "0.75em", dF.appendChild(aVX[dw])
}

function aC0() {
	this.aMk = function(dS, gK) {
		return Number(this.aMl(dS, gK))
	}, this.aMl = function(dS, gK) {
		var gp = null;
		return 0 === aI.id ? aI.gL && (gp = aI.gL.getItem((gK ? "v" : "d") + dS)) : 1 === aI.id ? gp = aI.gM.loadString((gK ? 1e3 : 2e3) + dS) : 2 === aI.id && (gp = aI.gN[(gK ? "v" : "d") + dS]), gp && 0 !== gp.length ? gp : null
	}, this.a7e = function(du, aVZ) {
		var dY = [],
			aVa = aVZ ? "e" : "l";
		if (0 === aI.id) {
			if (aI.gL)
				for (dw = 0; dw < du; dw++) dY.push(aI.gL.getItem(aVa + dw))
		} else if (1 === aI.id)
			for (var aVb = aVZ ? 5e3 : 3e3, dw = 0; dw < du; dw++) dY.push(aI.gM.loadString(aVb + dw));
		else if (2 === aI.id)
			for (dw = 0; dw < du; dw++) dY.push(aI.gN[aVa + dw]);
		return dY
	}, this.save = function(dS, value, gK) {
		var aFr = (gK ? "v" : "d") + dS;
		if (0 === aI.id) {
			if (aI.gL && gG.ku.data[140].value) try {
				aI.gL.setItem(aFr, value)
			} catch (jj) {
				console.log(jj)
			}
		} else 1 === aI.id ? aI.gM.saveString((gK ? 1e3 : 2e3) + dS, value) : 2 === aI.id && (aI.gN[aFr] = value, aI.gO.postMessage(aFr + " " + value))
	}, this.a7o = function(dY, aVZ) {
		var du = dY.length,
			aVa = aVZ ? "e" : "l";
		if (0 === aI.id) {
			if (aI.gL && gG.ku.data[140].value) try {
				for (dw = 0; dw < du; dw++) aI.gL.setItem(aVa + dw, dY[dw])
			} catch (jj) {
				console.log(jj)
			}
		} else if (1 === aI.id)
			for (var aVb = aVZ ? 5e3 : 3e3, dw = 0; dw < du; dw++) aI.gM.saveString(aVb + dw, dY[dw]);
		else if (2 === aI.id)
			for (dw = 0; dw < du; dw++) aI.gN[aVa + dw] = dY[dw], aI.gO.postMessage(aVa + dw + " " + dY[dw])
	}
}

function cB() {
	(nS = void 0 === nS ? document.createElement("canvas") : nS).width = gu.gv, nS.height = gu.h1, cU = nS.getContext("2d", {
		alpha: !0
	}), cV = z7 = null, cV = cU.getImageData(0, 0, gu.gv, gu.h1), z7 = cV.data, aW.jS.aJc(z7)
}

function pf() {
	var aEh = 501,
		aVd = (this.aVc = new Uint32Array(aEh), this.qD = new Uint32Array(aEh), this.aBx = new Uint16Array(aEh), this.aN8 = 0, 1),
		aVe = 0;

	function aVh(self) {
		self.max.fill(0)
	}

	function aVk(self, dw) {
		self.max[0] = Math.max(self.aVc[dw], self.max[0]), self.max[1] = Math.max(self.qD[dw], self.max[1]), self.max[2] = Math.max(self.aBx[dw], self.max[2])
	}
	this.max = [0, 0, 0], this.aVf = 0, this.zk = new Array(21), this.aVg = null, this.cD = function() {
		this.aVg = [L(394), L(395), L(396), L(397), L(398), L(399), L(400), L(401), L(295), L(296), L(402), L(403), L(404), L(405), "", L(406), L(407), L(408), L(16), L(409), L(410)]
	}, this.j = function() {
		this.aN8 = 0, aVd = 1, this.aVf = 0, aVe = 0, aVh(this), this.zk.fill(0)
	}, this.a1e = function(player, qF) {
		aW.aX.q4(player) && (this.zk[0] += qF + 1, this.zk[1]++, this.zk[12] += bw.qK[1])
	}, this.aLv = function(player, qN) {
		__fx.donationsTracker.logDonation(player, qN, bw.qK[0]);
		player === aR.ad && (cf.aLv(bw.qK[0], bw.qK[1], qN), this.zk[12] += bw.qK[1], this.zk[16] += bw.qK[0]), qN === aR.ad && (cf.aVi(bw.qK[0], player), this.zk[10] += bw.qK[0])
	}, this.a1l = function(player) {
		aW.aX.q4(player) && (this.zk[2]++, this.zk[12] += bw.qK[1])
	}, this.a23 = function(player) {
		aW.aX.q4(player) && (this.zk[19]++, this.zk[12] += bw.qK[1])
	}, this.aML = function(player) {
		aW.aX.q4(player) && this.zk[20]++
	}, this.j4 = function(player, aNo, dS) {
		aW.aX.q4(player) && (this.zk[dS] += aNo)
	}, this.b2 = function() {
		var self;
		this.aVf || 0 < aVe-- || ((self = this).aVc[self.aN8] = aZ.ac[aR.ad], self.qD[self.aN8] = aZ.bN[aR.ad], self.aBx[self.aN8] = bL.aBz(aR.ad), aVk(self, self.aN8), self.aN8++, self.aN8 === aEh && function(self) {
			aVh(self), aVk(self, 0), self.aN8 = 1 + dU.dV(aEh, 2);
			for (var dw = 1; dw < self.aN8; dw++) self.aVc[dw] = self.aVc[2 * dw], self.qD[dw] = self.qD[2 * dw], self.aBx[dw] = self.aBx[2 * dw], aVk(self, dw);
			aVd *= 2
		}(self), aVe = aVd - 1, cT.aDl(), 0 === aZ.aa[aR.ad] && (self.aVf = s.a6()))
	}
}

function a4O() {
	this.aAv = function(fr, font, maxWidth) {
		if (font && (aC.font = font), aC.measureText(fr).width <= maxWidth) return fr;
		for (var dw = fr.length - 1; 1 <= dw; dw--)
			if (fr = fr.substring(0, dw), aC.measureText(fr + "...").width <= maxWidth) return fr + "...";
		return "..."
	}
}

function aUL(aVH) {
	var aP7 = document.createElement("div"),
		aDY = document.createElement("div"),
		aVn = [];

	function aVJ() {
		o0.ri() || (this.style.backgroundColor = aW.color.aGc(fk.e8, 50))
	}

	function aVI() {
		this.style.backgroundColor = fk.e8
	}
	this.gI = function(aVo, aO1) {
			aVn[2].textContent = aVo + 1 + " / " + aO1
		}, this.show = function(dg) {
			aDY.appendChild(p.mi.transform(p.sr.tN(dg, p.sr.tO(dg)))), document.body.appendChild(aP7)
		}, this.resize = function() {
			var aO = aW.bA.dJ(.03, .5);
			aP7.style.width = 10 * aO + "px", aP7.style.font = aW.bA.mN(1, .75 * aO), aW.bA.a5C(aP7, 4), aDY.style.top = aO + "px", aDY.style.font = aW.bA.mN(0, .55 * aO), aW.bA.a5C(aDY, 2), aP7.style.height = aO + aDY.offsetHeight + "px";
			for (var dw = 0; dw < 3; dw++) aW.bA.a5C(aVn[dw], 6), aVn[[0, 1, 3][dw]].style.width = 2 * aO + "px";
			for (dw = 0; dw < 4; dw++) aVn[dw].style.height = aO + "px", aW.bA.a5C(aVn[dw], 2);
			aVn[2].style.width = 4 * aO + "px", aVn[1].style.left = 2 * aO + "px", aVn[2].style.left = 4 * aO + "px", aVn[3].style.left = 8 * aO + "px"
		}, this.q = function() {
			for (var dw = 0; dw < 4; dw++) aVn[dw].onclick = null, aVn[dw].onmouseover = null, aVn[dw].onmouseout = null;
			document.body.removeChild(aP7), aP7 = aDY = aVn = null
		}, aP7.style.position = "absolute", aP7.style.color = fk.eC, aP7.style.zIndex = "3", aP7.style.right = "0", aP7.style.top = "0", aDY.style.position = "absolute", aDY.style.height = "auto", aDY.style.color = fk.eC, aDY.style.backgroundColor =
		fk.e8, aDY.style.left = "0", aDY.style.width = "100%", aDY.style.overflowWrap = "break-word", aP7.appendChild(aDY);
	for (var dw = 0; dw < 4; dw++) aVn[dw] = document.createElement("div"), aVn[dw].style.position = "absolute", aVn[dw].style.backgroundColor = fk.e8, aVn[dw].style.color = fk.eC, aVn[dw].style.top = "0", aVn[dw].style.display = "flex", aVn[dw]
		.style.justifyContent = "center", aVn[dw].style.alignItems = "center", aVn[dw].style.userSelect = "none", aVn[dw].style.outline = "none", aVn[dw].style.font = "inherit", 2 !== (aVn[dw].aUK = dw) && (aVn[dw].onclick = aVH, aVn[dw]
			.onmouseover = aVJ, aVn[dw].onmouseout = aVI), aP7.appendChild(aVn[dw]);
	aVn[0].textContent = "◀", aVn[1].textContent = "▶", aVn[3].textContent = "✖"
}

function jL(dD, jX) {
	var dF = document.createElement("div");

	function wm() {
		var dw, kd, aO, sT, kR, aVq = aL.bC * dF.offsetWidth,
			aVs = new Float64Array(function(aVq) {
				var aN = .25 * aW.bA.bB(.6) * aL.aM;
				return Math.max(Math.floor(aVq / aN), 1)
			}(aVq)),
			b9 = dI.b9,
			aVt = (aVq - (aVs.length + 1) * dI.gap) / (aVs.length * aL.bC);
		for (aVs.fill(b9), dw = 0; dw < jX.length; dw++) kd = (kR = jX[dw].dF).style, aO = aW.jS.min(aVs), sT = aVs.indexOf(aO), kd.top = aW.bA.dH(aO), kd.left = aW.bA.dH(b9 + sT * (aVt + b9)), kd.width = aW.bA.dH(aVt), aW.bA.a5C(kR, 5), aVs[sT] +=
			kR.offsetHeight + 3 * b9;
		dF.style.height = aW.bA.dH(aW.jS.max(aVs) - 2 * b9)
	}
	this.dG = dF, this.aIm = jX, this.resize = function() {
		var dw;
		for (dw = 0; dw < jX.length; dw++) jX[dw].resize();
		wm(), wm()
	}, dF.style.width = "100%", dF.style.maxWidth = "100%", dD.style.lineHeight = "1.5em", dD.style.overflowX = "hidden", dD.style.overflowY = "auto";
	for (var dw = 0; dw < jX.length; dw++) dF.appendChild(jX[dw].dF);
	dD.appendChild(dF)
}

function pi() {
	function aVu(jj) {
		aE7(jj), n.d7(4, 5, new uE("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new jJ("⬅️ " + L(10), function() {
				n.jR()
			}), new jJ("🔄 Reload", function() {
				aI.aJ.aEq()
			}, fk.eZ)]))
	}

	function aVz(jj) {
		aE7(jj), n.d7(4, 5, new uE(L(411), aVx(jj), !0))
	}

	function aVx(jj) {
		var fr = " [" + jj + "]";
		return 3249 === jj || 1006 === jj ? "No Internet / No Server Response" + fr : 4527 === jj ? "Player already in lobby" + fr : 4530 === jj ? "Lobby Timeout" + fr : 4528 === jj ? "Lobby Kick: Another login detected." + fr : 4540 === jj ?
			"You have been kicked." + fr : 4495 === jj ? "Account doesn't exist." : 4229 === jj ? "Bad Internet / Unresponsive Client" + fr : "Unknown error" + fr
	}

	function aE7(jj) {
		aVv(jj), n.v.aEc()
	}

	function aVv(jj) {
		var py = r.a8();
		6 === py ? u.v.aPR(jj) : p.ra ? (n.o(), p.q(), u.v.close(u.v.x, 3256)) : 8 === py && aR.cw(!0)
	}
	this.aFh = [], this.aPT = function(jt, jj) {
		if (this.aFh.push(jj), 8 === n.uL && 0 === jt)
			if (4211 === jj) aVu(jj);
			else {
				if (p.ra && (4495 === jj || 4480 === jj) && u.v.x !== jt) return void n.jR();
				if (8 !== r.a8() && aVv(), 4480 === jj) return gG.gH.l2(), void n.d7(4, 0, new uE(L(413), L(414), !0));
				n.d7(4, 0, new uE(L(411), aVx(jj), !0))
			}
		else {
			var py = r.a8();
			if (6 === py) {
				if (4211 === jj) return void aVu(jj);
				if (4215 !== jj && 4516 !== jj && 4527 !== jj && 4533 !== jj && 4528 !== jj) return void ns.aVy(jt)
			} else {
				if (!p.ra) return 8 === py ? void(jt !== u.v.w || aR.ay || 1 !== aR.bf || aR.aw || cf.a0X(L(412, [jj]))) : void 0;
				if (jt !== u.v.x) return
			}
			aVz(jj)
		}
	}, this.aPQ = function(jj) {
		this.aFh.push(jj), 8 === r.a8() ? aR.ay || 1 !== aR.bf || cf.a0X(L(412, [jj])) : aVz(jj)
	}, this.aFj = function() {
		this.aFh.push(3268), aE7(3268)
	}
}

function pb() {
	this.aKe = 0, this.aKf = 0, this.aKZ = 0, this.aKa = 0, this.aKb = 0, this.aKc = 0, this.zK = [0, 0, 0, 0], this.aCO = function() {
		this.aKe = cX.nP(), this.aKf = cX.nQ(), this.aKZ = -this.aKe, this.aKa = -this.aKf, this.aKb = aL.aN / nN, this.aKc = aL.aO / nN, this.zK[0] = Math.floor(this.aKZ), this.zK[1] = Math.floor(this.aKa), this.zK[2] = Math.floor(this.zK[0] +
			this.aKb + 1), this.zK[3] = Math.floor(this.zK[1] + this.aKc + 1), cG.aIF = !0
	}
}

function sL() {
	this.kB = function() {
		var dw;
		if (da.size < dW.dX(23)) u.v.jv(0, 3259);
		else {
			var a49 = da.jw(6),
				du = da.jw(10),
				data = [];
			if (9 === a49 || 10 === a49 || 11 === a49) {
				for (dw = 0; dw < du; dw++) data.push([da.jw(30), kV.nJ.uD(5), da.a24(32), 0, da.jw(30)]);
				8 === n.uL && n.uM().a2O(21, !0, {
					a49: a49,
					data: data
				})
			} else if (12 === a49) {
				for (dw = 0; dw < du; dw++) data.push([da.jw(20), da.jw(30), da.jw(30), da.a24(32), da.jw(30), kV.nJ.uD(5), kV.nJ.uD(5)]);
				8 === n.uL && n.uM().a2O(21, !0, {
					a49: a49,
					data: data
				})
			} else {
				var a4W = da.jw(16);
				if (da.aMQ(39 + 16 * a4W + du * (0 === a49 ? 111 : 1 === a49 ? 101 : 2 === a49 || 3 === a49 ? 127 : 212))) {
					if (0 === a49)
						for (dw = 0; dw < du; dw++) data.push([da.jw(30), kV.kW.kX(da.jw(5)), da.jw(16), da.jw(30), da.jw(30)]);
					else if (1 === a49)
						for (dw = 0; dw < du; dw++) data.push([da.jw(16), kV.kW.kX(da.jw(3)), da.jw(16), kV.kW.kX(da.jw(5)), da.jw(31), da.jw(30)]);
					else if (2 === a49 || 3 === a49)
						for (dw = 0; dw < du; dw++) data.push([da.jw(30), kV.kW.kX(da.jw(5)), da.a24(32), da.jw(30), da.jw(30)]);
					else
						for (dw = 0; dw < du; dw++) data.push([da.jw(20), da.jw(30), da.jw(30), da.jw(30), da.jw(30), da.a24(32), da.jw(30), kV.kW.kX(da.jw(5)), kV.kW.kX(da.jw(5))]);
					8 === n.uL && n.uM().a2O(21, !0, {
						a49: a49,
						data: data
					})
				} else u.v.jv(0, 3260)
			}
		}
	}, this.kC = function() {
		if (da.size < dW.dX(29)) u.v.jv(0, 3265);
		else {
			var aW0 = da.jw(4),
				aW1 = da.jw(7),
				aW2 = da.jw(11);
			if (da.aMQ(29 + 16 * aW1 + 16 * aW2 + 11 * aW0)) {
				for (var data = [], dw = 0; dw < aW0; dw++) {
					for (var fz = kV.kW.kX(da.jw(3)), aW3 = da.jw(8), a8c = [], fm = 0; fm < aW3; fm++) a8c.push(da.jw(16));
					data.push({
						name: "[" + fz + "]",
						a8c: a8c
					})
				}
				8 === n.uL && n.uM().a2O(23, !0, data)
			} else u.v.jv(0, 3266)
		}
	}
}

function aDP() {
	this.b2 = function(player, hi) {
		player = cJ.sr.hP(player, hi);
		return !(player < 0 || !cJ.aDN.aEX(player) || (cJ.aDN.aEI(player), 0))
	}
}

function ru(aW4, aW5, aW6) {
	this.iE = 0, this.iF = 0, this.aN = 0, this.aO = 0, this.resize = function() {
		this.aO = Math.min(aW.bA.bB(aW6 || .5) * aW4[1] * aL.aM, aL.aO - 2 * dI.gap), this.aN = Math.min(this.aO * (aW4[0] / aW4[1]), aL.aN - 2 * dI.gap), this.aO = aW4[1] * this.aN / aW4[0], this.iE = dI.gap + aW5[0] * (aL.aN - this.aN - 2 * dI
			.gap), this.iF = dI.gap + aW5[1] * (aL.aO - this.aO - 2 * dI.gap)
	}, this.aW7 = function() {
		return this.iE + .5 * this.aN
	}
}

function pI() {
	var canvas, nU, a9C, font, lS = 0,
		aW8 = !1,
		aW9 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aWA = 5;

	function aWF() {
		if (aW8) {
			var dw, du = aW9.length,
				yV = Math.floor(.5 * a9C.aO),
				aO = du * yV,
				iE = Math.floor(Math.floor(a9C.iE) + .3 * a9C.aN - .5),
				iF = Math.floor(Math.floor(a9C.iF) - aO),
				aN = Math.floor(.4 * a9C.aN + 2.5);
			for (aC.fillStyle = fk.e8, aC.fillRect(iE, iF, aN, aO), aC.fillStyle = fk.eb, aC.fillRect(iE, iF + aWA * yV, aN, yV), aC.fillStyle = fk.eC, aC.fillRect(iE, iF, 2, aO), aC.fillRect(iE, iF, aN, 2), aC.fillRect(iE + aN - 2, iF, 2, aO), dw =
				1; dw < du; dw++) aC.fillRect(iE, iF + dw * yV, aN, 2);
			for (aC.fillStyle = fk.eC, aW.bA.textAlign(aC, 1), aW.bA.textBaseline(aC, 1), aC.font = aW.bA.mN(0, .6 * yV), iE += .5 * aN, dw = 0; dw < du; dw++) aC.fillText(aWN(dw), iE, iF + (dw + .6) * yV)
		}
		aC.drawImage(canvas, Math.floor(a9C.iE), Math.floor(a9C.iF))
	}

	function aDl(a1U) {
		var iE, iG, iH, yV;
		nU.clearRect(0, 0, Math.floor(a9C.aN), Math.floor(a9C.aO)), nU.fillStyle = fk.e8, nU.fillRect(0, 0, Math.floor(a9C.aN), Math.floor(a9C.aO)), aR.bg && (nU.fillStyle = fk.eb, nU.fillRect(0, 0, Math.floor(.3 * a9C.aN), Math.floor(a9C.aO))), nU
			.fillStyle = fk.eC, nU.fillText("Hide UI", .15 * a9C.aN, .5 * a9C.aO), nU.fillRect(Math.floor(.3 * a9C.aN - .5), 0, 2, Math.floor(a9C.aO)), iE = .5 * a9C.aN, nU.fillText("Replay Speed", iE, .31 * a9C.aO), nU.fillText(aWN(aWA), iE, .69 *
				a9C.aO), nU.fillRect(Math.floor(.7 * a9C.aN - .5), 0, 2, Math.floor(a9C.aO)), a1U.dA ? (iE = Math.floor(.02 * a9C.aN), a1U = Math.floor(.025 * a9C.aN), iG = Math.floor(.85 * a9C.aN - iE - .5 * a1U), iH = Math.floor(.25 * a9C.aO), yV =
				Math.floor(a9C.aO) - 2 * iH, nU.fillRect(iG, iH, iE, yV), nU.fillRect(iG + iE + a1U, iH, iE, yV)) : function() {
				var aN = Math.floor(.46 * a9C.aO),
					aO = Math.floor(.23 * a9C.aO),
					iE = Math.floor(.85 * a9C.aN - .5 * aN + aN / 12),
					iF = Math.floor(.5 * a9C.aO - aO);
				nU.beginPath(), nU.moveTo(iE, iF), nU.lineTo(iE + aN, iF + aO), nU.lineTo(iE, iF + (aO << 1)), nU.fill()
			}(), nU.fillRect(0, 0, Math.floor(a9C.aN), 2), nU.fillRect(0, 0, 2, Math.floor(a9C.aO)), nU.fillRect(0, Math.floor(a9C.aO) - 2, Math.floor(a9C.aN), 2), nU.fillRect(Math.floor(a9C.aN - 2), 0, 2, Math.floor(a9C.aO))
	}

	function aWN(dw) {
		return 5 === dw ? "Normal" : "" + aW9[dw]
	}
	this.dA = !1, this.j = function() {
		aR.aw && (aWA = 5, this.dA = !1, aW8 = !1, a9C = new ru([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a0F = function() {
		return aW9[aWA]
	}, this.nQ = function() {
		return a9C.iF
	}, this.aL1 = function(aTP) {
		return !!aR.aw && a9C.iE + a9C.aN > aL.aN - aTP - dI.gap
	}, this.resize = function() {
		aR.aw && (a9C.resize(), a9C.iF -= (o8.aL4() - 1) * dI.gap, font = aW.bA.mN(0, .3 * a9C.aO), (canvas = document.createElement("canvas")).width = Math.floor(a9C.aN), canvas.height = Math.floor(a9C.aO), (nU = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aW.bA.textAlign(nU, 1), aW.bA.textBaseline(nU, 1), aDl(this))
	}, this.re = function(aWB) {
		0 === aR.bf || n.mH() || aWB !== aR.bg && (aR.bg = aWB, ag.resize(), s.ap = !0, aR.aw) && (lS = s.t + 2e3, aDl(this))
	}, this.mJ = function(iE, iF) {
		if (!aR.aw) return !1;
		if (iE < a9C.iE || iF < a9C.iF || iE > a9C.iE + a9C.aN) return aW8 && function(a1U, iE, iF) {
			var du = aW9.length,
				yV = Math.floor(.5 * a9C.aO),
				aO = du * yV,
				iG = Math.floor(Math.floor(a9C.iE) + .3 * a9C.aN - .5),
				aO = Math.floor(Math.floor(a9C.iF) - aO),
				aN = Math.floor(.4 * a9C.aN + 2.5);
			return aW8 = !1, s.ap = !0, iE < iG || iG + aN < iE || iF < aO || (aWA = aBG(0, Math.floor((iF - aO) / yV), du - 1), aDl(a1U)), !0
		}(this, iE, iF);
		if ((iE -= a9C.iE) < .3 * a9C.aN) aW8 = !1, this.re(!aR.bg);
		else {
			if (iE < .7 * a9C.aN) return aW8 = !aW8, s.ap = !0;
			this.rg(!1)
		}
		return !0
	}, this.rg = function(aWD) {
		2 === aR.bf ? (this.re(!1), n.d7(3)) : (aW8 = !1, this.dA = !this.dA, this.dA ? (cd.d9 && cd.rf(), aI.aJ.setState(1)) : aWD || cd.a3p(), s.ap = !0, aDl(this))
	}, this.aWE = function() {
		this.dA = !1, cd.a3p(), s.ap = !0, aDl(this)
	}, this.rC = function(iE, iF) {
		return !!aR.bg && (0 <= cd.mJ(iE, iF) || (aR.aw ? ((s.t > lS || !this.mJ(iE, iF)) && cX.mJ(iE, iF), s.ap = !0, lS = s.t + 2e3) : cX.mJ(iE, iF)), !0)
	}, this.b2 = function() {
		aR.aw && aR.bg && s.t > lS - 1e3 && s.t < lS && (s.ap = !0)
	}, this.a3j = function() {
		aR.aw && (this.dA = !1, s.ap = !0, aDl(this))
	}, this.mP = function() {
		if (aR.aw) {
			if (aR.bg) {
				if (s.t > lS) return;
				if (s.t > lS - 1e3) return aC.globalAlpha = aBG(0, (1e3 - (s.t - (lS - 1e3))) / 1e3, 1), aWF(), void(aC.globalAlpha = 1)
			}
			aWF()
		}
	}
}

function a9R(nI) {
	var rm, vM, jX;
	this.show = function() {
		rm.show(), this.resize()
	}, this.jn = function() {
		rm.jn()
	}, this.resize = function() {
		rm.resize(), vM.resize()
	}, this.jo = function(dx) {
		2 === dx && rm.jp[0].jq()
	}, rm = new jI(L(415), [new jJ("⬅️ " + L(10), function() {
		n.u3(10)
	})]), vM = new jL(rm.jM, ((jX = []).push(function() {
		var uf, jb = new jc,
			vU = new ji(gG.ku.data[132], 1, function() {
				uf.button.click()
			}),
			vV = new ji(gG.ku.data[131], 1, function() {
				vU.jj.focus()
			});
		jb.jd(L(45)), jb.jf(vV), vV.jj.style.marginBottom = "0.8em", jb.jd(L(46)), jb.jf(vU);
		return uf = new jJ(L(44), function() {
			hR = Math.floor(vV.jj.value), hS = Math.floor(vU.jj.value);
			var hS, hR = {
				aJk: Math.min(hR, hS),
				aAB: Math.max(hR, hS)
			};
			n.d7(8, n.uN(10).a2h, new a48(21, {
				a49: nI.a49,
				hR: hR.aJk,
				hS: hR.aAB
			}))
		}, 0, 0, 1), jb.jf(new ua([uf.button])), jb
	}()), jX.push(function() {
		var uf, jb = new jc,
			vU = new ji(gG.ku.data[134], 1, function() {
				uf.button.click()
			}),
			vV = new ji(gG.ku.data[133], 0, function() {
				vU.jj.focus()
			});
		return jb.jd(1 === nI.a49 ? L(416) : L(417)), jb.jf(vV), vV.jj.style.marginBottom = "0.8em", jb.jd(L(418)), jb.jf(vU), uf = new jJ(L(44), function() {
			var a5a = vV.jj.value.slice(0, 20),
				a5b = Math.abs(Math.floor(vU.jj.value));
			n.d7(8, n.uN(10).a2h, new a48(22, {
				a49: nI.a49,
				a5a: a5a,
				a5b: a5b
			}))
		}, 0, 0, 1), jb.jf(new ua([uf.button])), jb
	}()), jX.push(function() {
		var uf, jb = new jc,
			vU = new ji(gG.ku.data[152], 1, function() {
				uf.button.click()
			}),
			vV = new ji(gG.ku.data[151], 0, function() {
				vU.jj.focus()
			});
		return jb.jd(L(419)), jb.jf(vV), vV.jj.style.marginBottom = "0.8em", jb.jd(L(418)), jb.jf(vU), uf = new jJ(L(44), function() {
			var a5a = vV.jj.value.slice(0, 5),
				a5b = Math.abs(Math.floor(vU.jj.value));
			n.d7(8, n.uN(10).a2h, new a48(28, {
				a49: nI.a49,
				a5a: a5a,
				a5b: a5b
			}))
		}, 0, 0, 1), jb.jf(new ua([uf.button])), jb
	}()), jX))
}

function aWR(aDV) {
	var aP7 = document.createElement("div"),
		aWS = document.createElement("div");
	this.aDl = function() {
			aWS.textContent = "", p.t0.jn(1);
			for (var aDm = document.createDocumentFragment(), aWT = p.v.a40[0], t9 = p.t9.vs[aWT], a3w = p.t9.a3w[aWT], dw = 0; dw < t9.length; dw++) ! function(aDm, dg, aWV, aWT) {
				var sv = document.createElement("span");
				sv.textContent = (aWV ? "🟢 " : "⚪ ") + p.sr.a3O(dg, aWT), sv.style.color = p.sr.sx(dg.st), sv.style.cursor = "pointer", sv.style.margin = "0.2em 0.2em 0.2em 0.2em", sv.style.width = sv.style.maxWidth = 2 === aWT ? "10em" : "9em",
					sv.style.height = sv.style.maxHeight = "1.4em", sv.style.whiteSpace = "nowrap", sv.style.overflow = "hidden", sv.style.textOverflow = "ellipsis", sv.style.font = "inherit", sv.style.display = "inline-block", p.sr.sy(dg) && (sv
						.style.textDecoration = "underline"), sv.onclick = function(jj) {
						aDV(jj, dg)
					}, o0.ri() || (sv.onmouseover = function(jj) {
						p.t0.t1(jj, dg, 1)
					}), aDm.appendChild(sv)
			}(aDm, t9[dw], dw < a3w, aWT);
			aWS.appendChild(aDm)
		}, this.show = function(dD) {
			dD.appendChild(aP7)
		}, this.jn = function(dD) {
			dD.removeChild(aP7)
		}, this.resize = function() {
			aWS.style.fontSize = aW.bA.dH(aW.bA.dJ(.02, .3))
		}, aP7.style.top = "0", aP7.style.left = "0", aP7.style.width = aP7.style.height = "100%", aP7.style.overflowX = "hidden", aP7.style.overflowY = "auto", aP7.style.font = "inherit", aWS.style.font = "inherit", aWS.style.margin = "0.4em", aP7
		.appendChild(aWS)
}

function aQq(aQc, aQd, aWW, aWX, aWY) {
	var self;
	this.sv = document.createElement("span"), this.resize = function() {
			this.sv.style.fontSize = ((aWX - aWW) * aQd.offsetHeight).toFixed(1) + "px"
		}, (self = this).sv.textContent = aQc, self.sv.style.color = fk.eC, self.sv.style.font = "inherit", self.sv.style.margin = "0.1em 0.6em", self.sv.style.pointerEvents = "none", aWY && (self.sv.style.fontWeight = "bold"), self.sv.style
		.whiteSpace = "nowrap", self.sv.style.display = "block", aQd.appendChild(self.sv)
}

function a9d(dD, data) {
	var du = data.a9T.length,
		aWZ = document.createElement("div"),
		aWa = document.createElement("div"),
		aHF = document.createElement("div"),
		aWb = new Array(du),
		jX = new Array(du),
		aWc = new Array(data.a5K.length),
		aWd = aW.color.e6(70, 70, 0, .35);

	function aGc() {
		this.style.backgroundColor = aW.color.aGc(aWd, 160)
	}

	function aWh() {
		this.style.backgroundColor = aWd
	}

	function wm() {
		var fm;
		for (dD.style.font = aW.bA.mN(0, aW.bA.a5F(.026, .5, .03)), dw = 1; dw < aWc.length; dw++) aW.bA.a5C(aWc[dw], 4);
		if (aW.bA.a5C(aWZ, 2), du) {
			for (var iP, nZ = aWZ.offsetWidth, na = aHF.offsetWidth, dw = 0; dw < aWc.length; dw++) iP = .01 * data.a9Z[dw] * na, aWc[dw].style.width = (100 * iP / nZ).toFixed(2) + "%";
			var g4 = data.a9T[0].length;
			for (dw = 0; dw < du; dw++)
				for (aW.bA.a5C(aWb[dw], 2), fm = 1; fm < g4; fm++) aW.bA.a5C(jX[dw][fm], 4);
			aWa.aWe && (aWa.scrollTop = aWa.aWe)
		}
	}
	this.resize = function() {
			wm(), wm()
		}, dD.style.display = "flex", dD.style.flexDirection = "column", aWa.style.overflowX = "hidden", aWa.style.overflowY = "auto", aWa.addEventListener("scroll", function() {
			this.aWe = this.scrollTop
		}),
		function() {
			var kR, dw, a9T = data.a9T,
				g4 = du ? a9T[0].length : 0;
			for (dw = 0; dw < du; dw++) {
				aWb[dw] = document.createElement("div"), aWb[dw].style.backgroundColor = function(dw) {
					return dw % 2 == 1 ? aW.color.e6(130, 130, 130, .35) : fk.eB
				}(dw), aWb[dw].style.width = "100%", aWb[dw].style.display = "flex", jX[dw] = new Array(g4);
				for (var fm = 0; fm < g4; fm++) jX[dw][fm] = kR = document.createElement("div"), kR.style.display = "flex", kR.style.justifyContent = "center", kR.style.wordBreak = "break-all", kR.style.padding = "0.4em 0em", kR.style.width = data
					.a9Z[fm] + "%", kR.innerHTML = a9T[dw][fm].gp, 1 === a9T[dw][fm].b5 && (kR.name = "" + dw, kR.style.color = fk.f9, kR.style.backgroundColor = aWd, kR.addEventListener("mouseover", aGc), kR.addEventListener("mouseout", aWh),
						function(kR, nK, l4) {
							2147483647 !== l4 && kR.addEventListener("click", function() {
								dW.cN(30), dW.dh(30, nK), da.j(dW.ju), this.style.backgroundColor = aWd, n.d7(8, n.uL, new a48(25, {
									a7R: 0,
									nK: dc.dd.de(dc.dd.df(5)),
									l4: l4
								}))
							})
						}(kR, a9T[dw][fm].nK, a9T[dw][fm].l4)), aWb[dw].appendChild(kR)
			}
			for (aWZ.style.display = "flex", aWZ.style.backgroundColor = aW.color.e6(0, 120, 0, .35), dw = 0; dw < aWc.length; dw++) aWc[dw] = kR = document.createElement("div"), kR.style.display = "flex", kR.style.justifyContent = "center", kR.style
				.wordBreak = "break-all", kR.style.padding = "0.4em 0em", kR.style.width = data.a9Z[dw] + "%", kR.innerHTML = data.a5K[dw], aWZ.appendChild(kR)
		}();
	for (var dw = 0; dw < du; dw++) aHF.appendChild(aWb[dw]);
	aWa.appendChild(aHF), dD.appendChild(aWZ), dD.appendChild(aWa)
}

function lp(fm, fn) {
	return 0 <= fm ? dU.dV(fm, fn) : -dU.dV(-fm, fn)
}

function aBs(gp) {
	return gp * gp
}

function yY(fm, fn) {
	return fn < fm ? fm : fn
}

function yX(fm, fn) {
	return fm < fn ? fm : fn
}

function aBG(fm, gp, fn) {
	return gp < fm ? fm : fn < gp ? fn : gp
}

function aWj(gp, du) {
	for (var dx = dU.dV(gp + 1, 2), dw = 0; dw < du; dw++) dx = dU.dV(dx + dU.dV(gp, dx), 2);
	return dx
}

function aLs(gp, du) {
	return gp < 1 ? 0 : aWj(gp, du)
}

function aKd(iG, iH, nZ, yV, iI, iJ, na, yW) {
	return !(iG + nZ <= iI || iH + yV <= iJ || iI + na <= iG || iJ + yW <= iH)
}

function aKY(iG, iH, nZ, yV, iI, iJ, na, yW) {
	return iG <= iI && iH <= iJ && iI + na <= iG + nZ && iJ + yW <= iH + yV
}

function e1(gp) {
	return Math.floor(!!gp * (1 + Math.log2(gp + .5)))
}

function po() {
	function aWn(iE, du, iF, gb, aIy, aFE) {
		if (!(iF < 1 || aIy < iF))
			for (var dw = 0; dw <= du; dw++) {
				var gt = cI.m6(iE, iF);
				if (gb(gt)) return gt >> 2;
				iE += aFE
			}
		return -1
	}

	function aWr(iF, du, iE, gb, aWl, aFE) {
		if (!(iE < 1 || aWl < iE)) {
			du = Math.max(du, 0);
			for (var dw = 0; dw <= du; dw++) {
				var gt = cI.m6(iE, iF);
				if (gb(gt)) return gt >> 2;
				iF += aFE
			}
		}
		return -1
	}

	function aWv(h5, gq, aHN) {
		return -1 !== gq && (-1 === h5 || cI.hB(gq, aHN) < cI.hB(h5, aHN)) ? gq : h5
	}
	this.a19 = function(aHN) {
		return this.aQ(aHN, function(gt) {
			return cC.hO(gt)
		})
	}, this.a1I = function(aHN) {
		return this.aQ(aHN, function(gt) {
			return cC.z6(gt, aR.ad)
		})
	}, this.aQ = function(aHN, gb) {
		return function(aHN, i7, gb) {
			for (var m3 = cI.gx(aHN), m7 = cI.gz(aHN), aWl = gu.gv - 2, aIy = gu.h1 - 2, aWm = -1, kR = 0; kR < i7; kR++) {
				var ty = Math.max(m3 - kR, 1),
					tz = Math.max(m7 - kR, 1),
					u0 = Math.min(m3 + kR, aWl),
					tn = Math.min(m7 + kR, aIy),
					h5 = aWn(m3, u0 - m3, m7 - kR, gb, aIy, 1),
					gq = aWn(m3 - 1, m3 - ty - 1, m7 - kR, gb, aIy, -1),
					u0 = aWn(m3, u0 - m3, m7 + kR, gb, aIy, 1),
					ty = aWn(m3 - 1, m3 - ty - 1, m7 + kR, gb, aIy, -1),
					aWq = aWr(m7, tn - m7 - 1, m3 - kR, gb, aWl, 1),
					aWs = aWr(m7 - 1, m7 - tz - 2, m3 - kR, gb, aWl, -1),
					tn = aWr(m7, tn - m7 - 1, m3 + kR, gb, aWl, 1),
					tz = aWr(m7 - 1, m7 - tz - 2, m3 + kR, gb, aWl, -1);
				if (aWm = aWv(aWm, h5, aHN), aWm = aWv(aWm, gq, aHN), aWm = aWv(aWm, u0, aHN), aWm = aWv(aWm, ty, aHN), aWm = aWv(aWm, aWq, aHN), aWm = aWv(aWm, aWs, aHN), aWm = aWv(aWm, tn, aHN), 0 <= (aWm = aWv(aWm, tz, aHN)) && kR * kR >=
					cI.hB(aWm, aHN)) return aWm
			}
			return -1
		}(aHN, cI.uo(), gb)
	}
}

function aDK() {
	function aWn(iE, du, iF, aWw, aIy, aFE, player) {
		if (!(iF < 1 || aIy < iF))
			for (var dw = 0; dw <= du; dw++) {
				var gt = cI.m6(iE, iF);
				if (cJ.sr.hN(gt) && !aW.jS.has(aWw, cC.h2(gt)) && cC.z5(gt, player)) return gt >> 2;
				iE += aFE
			}
		return -1
	}

	function aWr(iF, du, iE, aWw, aWl, aFE, player) {
		if (!(iE < 1 || aWl < iE)) {
			du = Math.max(du, 0);
			for (var dw = 0; dw <= du; dw++) {
				var gt = cI.m6(iE, iF);
				if (cJ.sr.hN(gt) && !aW.jS.has(aWw, cC.h2(gt)) && cC.z5(gt, player)) return gt >> 2;
				iF += aFE
			}
		}
		return -1
	}

	function aWv(h5, gq, aHN) {
		return -1 !== gq && (-1 === h5 || cI.hB(gq, aHN) < cI.hB(h5, aHN)) ? gq : h5
	}
	this.a1E = function(player, aHN) {
		if (cJ.a1h.a1i(player))
			for (var i7 = cI.uo(), aWw = [];;) {
				var aWx = function(aHN, i7, aWw, player) {
					for (var m3 = cI.gx(aHN), m7 = cI.gz(aHN), aWl = gu.gv - 2, aIy = gu.h1 - 2, aWm = -1, kR = 0; kR < i7; kR++) {
						var ty = Math.max(m3 - kR, 1),
							tz = Math.max(m7 - kR, 1),
							u0 = Math.min(m3 + kR, aWl),
							tn = Math.min(m7 + kR, aIy),
							h5 = aWn(m3, u0 - m3, m7 - kR, aWw, aIy, 1, player),
							gq = aWn(m3 - 1, m3 - ty - 1, m7 - kR, aWw, aIy, -1, player),
							u0 = aWn(m3, u0 - m3, m7 + kR, aWw, aIy, 1, player),
							ty = aWn(m3 - 1, m3 - ty - 1, m7 + kR, aWw, aIy, -1, player),
							aWq = aWr(m7, tn - m7 - 1, m3 - kR, aWw, aWl, 1, player),
							aWs = aWr(m7 - 1, m7 - tz - 2, m3 - kR, aWw, aWl, -1, player),
							tn = aWr(m7, tn - m7 - 1, m3 + kR, aWw, aWl, 1, player),
							tz = aWr(m7 - 1, m7 - tz - 2, m3 + kR, aWw, aWl, -1, player);
						if (aWm = aWv(aWm, h5, aHN), aWm = aWv(aWm, gq, aHN), aWm = aWv(aWm, u0, aHN), aWm = aWv(aWm, ty, aHN), aWm = aWv(aWm, aWq, aHN), aWm = aWv(aWm, aWs, aHN), aWm = aWv(aWm, tn, aHN), 0 <= (aWm = aWv(aWm, tz, aHN)) &&
							kR * kR >= cI.hB(aWm, aHN)) return aWm
					}
					return -1
				}(aHN, i7, aWw, player);
				if (-1 === aWx) break;
				var id = cC.h2(cI.h3(aWx));
				if (cJ.sr.gj(player, id)) return !! function(player, aWx, aHN) {
					for (var v4 = cI.v6(aWx, aHN), dw = 0; dw < 4; dw++) {
						var go = cI.v3(aWx, v4);
						if (cC.z6(cI.h3(go), player)) return bw.hj[6] = v4, 1;
						v4 = (v4 + 1) % 4
					}
					return
				}(player, aWx, aHN) && (bw.hj[7] = aWx, !0);
				aWw.push(id)
			}
		return !1
	}
}

function a4Q() {
	this.aNU = function(canvas, aX0, nI) {
		var aN = canvas.width,
			aO = canvas.height,
			dx = aW.bA.yI(aN, aO),
			n2 = aW.bA.getContext(dx, !0),
			canvas = (n2.drawImage(canvas, 0, 0), n2.getImageData(0, 0, aN, aO));
		return aX0(canvas.data, aN, aO, nI), n2.putImageData(canvas, 0, 0), dx
	}, this.aX1 = function(xR, aN, aO) {
		for (var iE = aN - 1; 0 <= iE; iE--)
			for (var iF = aO - 1; 0 <= iF; iF--) {
				var dw = 4 * (iE + iF * aN);
				xR[3 + dw] = xR[dw], xR[dw] = xR[1 + dw] = xR[2 + dw] = 255
			}
	}, this.aX2 = function(xR, aN, aO) {
		for (var iE = aN - 1; 0 <= iE; iE--)
			for (var iF = aO - 1; 0 <= iF; iF--) {
				var dw = 4 * (iE + iF * aN);
				xR[1 + dw] > xR[2 + dw] + 10 && (xR[3 + dw] = xR[dw], xR[1 + dw] = xR[2 + dw])
			}
	}, this.aX3 = function(xR, aN, aO, nI) {
		for (var gap = Math.floor(Math.min(aN, aO) * nI), iE = 0; iE < aN; iE++)
			for (var dw, iF = 0; iF < aO; iF++)(iE < gap || iF < gap || aN - gap <= iE || aO - gap <= iF) && (xR[3 + (dw = 4 * (iE + iF * aN))] = 255 - 255 * (xR[1 + dw] - xR[dw]) / (255 - xR[dw]))
	}, this.aNV = function(xR, aN, aO, nI) {
		for (var iE = aN - 1; 0 <= iE; iE--)
			for (var iF = aO - 1; 0 <= iF; iF--) {
				var dw = 4 * (iE + iF * aN);
				xR[dw] = nI[0], xR[1 + dw] = nI[1], xR[2 + dw] = nI[2]
			}
	}, this.aX4 = function(xR, aN, aO, nI) {
		for (var gap = Math.floor(aN * nI), iE = 0; iE < aN; iE++)
			for (var dw, iF = 0; iF < aO; iF++)(iE < gap || iF < gap || aN - gap <= iE || aO - gap <= iF) && (xR[dw = 4 * (iE + iF * aN)] = xR[1 + dw] = xR[2 + dw] = 0)
	}, this.aX5 = function(xR, aN, aO) {
		for (var iF, dw, iE = aN - 1; 0 <= iE; iE--)
			for (iF = aO - 1; 0 <= iF; iF--) 200 < xR[1 + (dw = 4 * (iE + iF * aN))] && xR[1 + dw] - 20 > xR[dw] && xR[1 + dw] - 20 > xR[2 + dw] ? xR[dw] + xR[2 + dw] < 40 ? xR[3 + dw] = 0 : (xR[3 + dw] = xR[dw], xR[dw] = 255, xR[1 + dw] = 255,
				xR[2 + dw] = 255) : xR[dw] < 50 && xR[1 + dw] < 50 && xR[2 + dw] < 50 && (xR[dw] + xR[1 + dw] + xR[2 + dw] < 50 ? xR[3 + dw] = 180 : xR[3 + dw] = 180 + Math.floor(75 * (xR[dw] + xR[1 + dw] + xR[2 + dw] - 50) / 100))
	}, this.aX6 = function(xR, aN, aO) {
		for (var iF, dw, iE = aN - 1; 0 <= iE; iE--)
			for (iF = aO - 1; 0 <= iF; iF--) xR[1 + (dw = 4 * (iE + iF * aN))] > xR[dw] + 20 && xR[1 + dw] > xR[2 + dw] + 20 && xR[dw] + xR[2] < 40 && (xR[3 + dw] = 255 - xR[1 + dw], xR[dw] = xR[1 + dw] = xR[2 + dw] = xR[dw])
	}, this.aSJ = function(xR, aN, aO, nI) {
		for (var rT = aN >> 1, iE = 0; iE < aN; iE++)
			for (var iF = 0; iF < aO; iF++) Math.sqrt((iE - rT) * (iE - rT) + (iF - rT) * (iF - rT)) > nI * rT && (xR[4 * (iE + iF * aN) + 3] = 0)
	}
}

function aX7() {
	this.aOv = function() {
		for (var fl, du = bF.bG, aBy = bF.q3, fi = aZ.fi, aKy = this.zY(), dw = 0; dw < du; dw++) fl = aBy[dw], aW.aX.aY(fl) || (fi[fl] = aKy);
		var fe = aZ.fe,
			ff = aZ.ff,
			fd = aZ.fd,
			fc = aZ.fc,
			du = aR.bY;
		for (dw = 0; dw < du; dw++)(0 === fc[dw] || fd[dw] < 1 || 2 * fe[dw] > 3 * (ff[dw] + fd[dw])) && (fi[dw] = 0);
		var aOt = 0;
		for (dw = 0; dw < du; dw++) aOt += 0 < fi[dw];
		return aOt
	}, this.zY = function() {
		return Math.min(65535, s.a6())
	}
}

function aQ3() {
	var jE, jF, jG, jX;

	function jK() {
		jO(), 2 !== aR.data.sResourcesType && (aR.data.sResourcesData = null), n.jQ()[19] = null, n.jR()
	}

	function jO() {
		2 === aR.data.sResourcesType && aW.jS.jT(jG.jU(), aR.data.sResourcesData, 2047)
	}
	this.show = function() {
		jE.show(), this.resize()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jF.resize()
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, jE = new jI(L(297), [new jJ("⬅️ " + L(10), jK)]), jF = new jL(jE.jM, (function(jX) {
		var jb = new jc;
		jb.jd(L(11)), jb.je(new g9({
			gF: [L(17), L(18), L(14)],
			value: aR.data.sResourcesType
		}, function(dS) {
			jO(), 2 !== dS || aR.data.sResourcesData || (aR.data.sResourcesData = new Uint16Array(aR.bS)), aR.data.sResourcesType = dS, n.d7(28)
		})), jX.push(jb)
	}(jX = []), function(jX) {
		var jb;
		1 === aR.data.sResourcesType && ((jb = new jc).jd("Value"), jb.jf(new ji({
			dS: -1,
			value: aR.data.sResourcesValue
		}, 1, 0, function(jj) {
			var value = dU.ls(Math.floor(jj.target.value), 0, 2047);
			jj.target.value = aR.data.sResourcesValue = value
		})), jX.push(jb))
	}(jX), function(jX) {
		var jb;
		2 === aR.data.sResourcesType && ((jb = new jc).jd("Data"), (jG = new jk(0, 1, 0, 1)).jl(aW.fv.jm(aR.data.sResourcesData, 2)), jb.jf(jG), jX.push(jb))
	}(jX), jX))
}

function sA() {
	this.aPO = function(jt) {
		dW.cN(39), dW.dh(1, 0), dW.dh(6, 13), dW.dh(14, c1.lK), dW.dh(4, aI.id), dW.dh(7, aI.gK), dW.dh(1, +c1.kk), dW.dh(1, +c1.kl), dW.dh(5, (new Date).getHours() % 24), u.v.send(jt, dW.ju)
	}, this.aMS = function(jt, db, kg) {
		dW.cN(70), dW.dh(1, 0), dW.dh(6, 14), dW.dh(3, kg), dW.dh(30, db[0]), dW.dh(30, db[1]), u.v.send(jt, dW.ju)
	}, this.a5X = function(id) {
		dW.cN(13), dW.dh(1, 0), dW.dh(6, 15), dW.dh(6, id), u.v.send(0, dW.ju)
	}, this.a7m = function(id, fr) {
		var du = Math.min(fr.length, 63);
		dW.cN(19 + 16 * du), dW.dh(1, 0), dW.dh(6, 26), dW.dh(6, id), dW.dh(6, du), dc.kW.aDv(fr), u.v.send(0, dW.ju)
	}, this.aX9 = function(kQ, dg) {
		dW.cN(7 + 26 * dg.length), dW.dh(1, 0), dW.dh(6, 9);
		for (var dw = 0; dw < dg.length; dw++) dW.dh(16, dg[dw][0]), dW.dh(10, dg[dw][1]);
		u.v.send(kQ, dW.ju)
	}, this.aUP = function(aXA, e0) {
		dW.cN(20), dW.dh(1, 0), dW.dh(6, 19), dW.dh(1, aXA), dW.dh(12, e0), u.v.send(u.v.w, dW.ju)
	}, this.nA = function(username) {
		dW.dh(5, username.length), dc.kW.aDv(username)
	}
}

function pB() {
	var aXB = 0,
		aXC = !0;

	function aXD(id) {
		id = [L(420), L(421), L(422), L(423)][id];
		cf.aXE(id)
	}
	this.b2 = function() {
		var b5, aMX;
		s.t < aXB || (aXB = s.t + 5e3, aR.aw) || aR.ay || aW.aX.fT(aR.ad) || (b5 = new Date, aMX = b5.getUTCSeconds(), aXC ? aMX < 50 && (aXC = !1) : aMX < 50 || (aXC = !0, (aMX = (b5.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == aMX || 20 ==
			aMX || 40 == aMX ? aR.aV < 7 && aXD(0) : 10 == aMX || 30 == aMX || 50 == aMX ? 7 !== aR.aV && 10 !== aR.aV || aXD(1) : 5 == aMX || 25 == aMX || 45 == aMX ? 8 === aR.aV && aXD(2) : 35 == aMX && 9 === aR.aV && aXD(3))))
	}
}

function aDM() {
	function aXH(player, ho) {
		ho = cI.v0(cJ.v.hb[ho]), ho = cC.h2(cI.h3(ho));
		return !!cJ.sr.gj(player, ho)
	}

	function aXF(player) {
		return cJ.a1h.a1i(player) && !cJ.ly.aEA()
	}
	this.a1C = function(player, go) {
		return !!aXF(player) && -1 !== (go = function(player, go) {
			for (var du = cJ.v.ha, hb = cJ.v.hb, iM = cJ.v.iM, hc = cI.uo(), hd = -1, dw = 0; dw < du; dw++) {
				var he = cI.ur(go, cI.v0(hb[dw]));
				he < hc && aW.aX.iN(player, iM[dw] >> 3) && (hc = he, hd = dw)
			}
			return hd
		}(player, go)) && !!aXH(player, go) && (bw.hj[3] = cJ.v.hT[go], !0)
	}, this.aPG = function(player, hi) {
		return !!aXF(player) && !!cJ.sr.hh(hi) && !!aXH(player, bw.hj[2])
	}, this.a1p = function(player, hi, aXI) {
		return !! function(player, hi, aXI) {
			if (aXF(player) && cJ.sr.hh(hi)) {
				hi = bw.hj[2];
				if (aW.aX.iN(player, cJ.v.iM[hi] >> 3)) {
					if (function(player, ho) {
							return cJ.sr.hn(player, ho) && (bw.dY[0] = cJ.ly.aEB(cJ.v.hq[ho]), bw.hj[1] = 6, !0)
						}(player, hi)) return 1;
					var aMK = cI.v0(cJ.v.hb[hi]),
						aXM = cJ.sr.gn(player, aMK);
					if (-1 !== aXM) {
						aXM = cI.ur(aXM, aMK);
						if (!(aXI && 120 < aXM)) {
							aXI = function(ho, aXN, aMK) {
								var hp = cJ.v.hq[ho],
									ho = cJ.v.aET[ho],
									aXP = cI.ur(aMK, hp[ho + 1]);
								if (aXN <= aXP) return cJ.sr.hr(aMK, hp[ho + 1], aXP, aXN);
								for (var he = aXN - aXP, du = hp.length - 1, dw = ho + 1; dw < du; dw++) {
									var aXQ = cI.ur(hp[dw], hp[dw + 1]);
									if (he <= aXQ) return cJ.sr.hr(hp[dw], hp[dw + 1], aXQ, he);
									he -= aXQ
								}
								return hp[du]
							}(hi, aXM, aMK);
							if (cJ.a1k.lu(player, aXI, 1)) return bw.hj[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, hi, aXI) && (player = bw.hj[2], cJ.v.aEK[player] = 64 + cJ.v.aEK[player] % 64, cJ.aDN.a1Z(hi, cJ.v.aFZ), !0)
	}
}

function ol() {
	var aXR, aXS, aLK, aXT, aXU, aXV, aXW, aXX, aXY, aLI, aXZ, aXB, aXa, aXb = 1;

	function aXc(aXd) {
		!aXd && 1 === aXa && aXb ? (aXb = 0, u.v.close(aXa, 3280)) : aXa = (aXa + 1) % u.v.aPH, aXB = s.t, u.v.y(aXa, 4) && u.s9.n6(aXa)
	}

	function aXe() {
		if (0 !== aXa) return 1 === aXa && __fx.customLobby.isActive() ? (o9.aPQ(3249), __fx.customLobby.setActive(!1)) : void aXc();
		o9.aPQ(3249)
	}

	function aXj(iF, aIz, aAK) {
		var iG = Math.floor((aL.aN - aXT) / 2) + aXW,
			iI = iG + Math.floor(aAK * (aXT - 2 * aXW));
		aC.lineWidth = aIz, aC.beginPath(), aC.moveTo(iG, iF), aC.lineTo(iI, iF), aC.lineTo(Math.floor(iG - aXW + aAK * aXT), iF + aLK), aC.lineTo(iG - aXW, iF + aLK), aC.closePath()
	}
	this.aEt = 1, this.j = function() {
		r.setState(6), aXR = 0, aXS = 1, aXX = "rgba(0,220,120,0.4)", aXY = "rgba(0,0,0,0.8)", this.resize(), s.ap = !0, aXb = 1, aXa = this.aEt - 1, aXc(1)
	}, this.resize = function() {
		aXT = Math.floor((aI.aJ.aK() ? .5 : .25) * aL.aM), aXU = aXT + 12, aLK = Math.floor(.125 * aXT), aXW = 3 * aLK, aXV = Math.floor(.225 * aXT), aXZ = Math.floor(.3 * aLK), aLI = aW.bA.mN(0, aXZ)
	}, this.aVy = function(jt) {
		jt === aXa && aXe()
	}, this.mJ = function(iE, iF) {
		var iG = Math.floor((aL.aN - aXU) / 2),
			iH = Math.floor(.5 * (aL.aO - dI.gap - aLK - aXV)) + aLK + dI.gap;
		return iG < iE && iE < iG + aXU && iH < iF && iF < iH + aXV && (this.rk(), nr.qr(iE, iF, !1), !0)
	}, this.rk = function() {
		u.v.aPR(3260), __fx.customLobby.setActive(false), n.v.aEc()
	}, this.b2 = function() {
		6 === r.a8() && (s.t > aXB + 12e3 && aXe(), 100 < (aXR += .07 * aXS * (aXR < 16 ? 5 + aXR : 84 < aXR ? 105 - aXR : 17)) ? (aXR = 100, aXS = -1) : aXR < 0 && (aXR = 0, aXS = 1), aXX = "rgba(0," + Math.floor(190 - 1.9 * aXR) + "," + Math
			.floor(120 - 1.2 * aXR) + "," + (.4 + .004 * aXR) + ")", aXY = "rgba(0," + Math.floor(1.9 * aXR) + "," + Math.floor(1.2 * aXR) + "," + (.8 - .004 * aXR) + ")", s.ap = !0)
	}, this.mP = function() {
		var iE = Math.floor((aL.aN - aXU) / 2),
			iF = Math.floor(.5 * (aL.aO - dI.gap - aLK - aXV));
		! function(title, iF, aIz, aAK) {
			aC.fillStyle = aXY, aXj(iF, aIz, 1), aC.fill(), aC.fillStyle = aXX, aXj(iF, aIz, aAK), aC.fill(), aC.strokeStyle = fk.eC, aXj(iF, aIz, 1), aC.stroke(),
				function(aXl, iF) {
					aW.bA.textAlign(aC, 1), aW.bA.textBaseline(aC, 1), aC.font = aLI, aC.fillStyle = fk.eC, aC.fillText(aXl, Math.floor(.5 * aL.aN), Math.floor(iF + .58 * aLK))
				}(title, iF)
		}(L(424), iF, 3, aXR / 100),
		function(iE, iF, aN, aO, vo) {
			aC.fillStyle = fk.e7, aC.fillRect(iE, iF, aN, aO), aC.lineWidth = 3, aC.strokeStyle = fk.eC, aC.strokeRect(iE, iF, aN, aO);
			var du = Math.floor(.3 * aO);
			aW.bA.textAlign(aC, 1), aW.bA.textBaseline(aC, 1), aC.font = aW.bA.mN(0, du), aC.fillStyle = fk.eC, aC.fillText(vo, Math.floor(iE + aN / 2), Math.floor(iF + aO / 2 + .1 * du))
		}(iE, iF + aLK + dI.gap, aXU, aXV, L(10))
	}
}

function pg() {
	this.aN = 0, this.aO = 0, this.nZ = 0, this.na = 0, this.aXm = 0, this.aXn = 0, this.yV = 0, this.yW = 0;
	var aXp = this.aXo = 0;
	this.aXq = 0, this.aXr = 0, this.aXs = 0, this.aFJ = 0, this.dS = 0, this.aG0 = null, this.mH = !1, this.aXt = -1, this.aXu = !1, this.aXv = [0, 0], this.cD = function() {
		this.aG0 = [L(425), L(267, 0, "Balance"), L(266, 0, "Interest"), L(426)]
	}, this.j = function() {
		this.mH = !1, this.aXt = -1, this.aXu = !1, this.resize()
	}, this.resize = function() {
		this.aN = aL.aN < 1.369 * aL.aO ? aL.aN : 1.369 * aL.aO;
		var kR = aI.aJ.aK() && aL.aN < aL.aO ? 1 : aI.aJ.aK() ? .8 : aL.aN < aL.aO ? .65 : .59;
		this.aN = Math.floor(kR * this.aN), this.aN -= aI.aJ.aK() && aL.aN < aL.aO ? 2 * dI.gap + 2 : 0, this.aO = Math.floor(this.aN / 1.369), this.aFJ = Math.floor(this.aO / 150), this.aFJ = Math.max(this.aFJ, 1.5), this.nZ = Math.floor(1 +
			.02 * this.aN), this.na = Math.floor(1 + .04 * this.aN), this.yV = this.na, aXp = Math.floor(.75 * this.yV), this.yW = Math.floor(1 + .075 * this.aN), this.aXq = Math.floor(1 + .1125 * this.aN), this.aXr = Math.floor(this.aN * (aI
			.aJ.aK() ? .03 : .029)), this.aXr = Math.max(this.aXr, 4), this.aXs = Math.floor(.035 * this.aN), this.aXs = Math.max(this.aXs, 4), this.aXo = this.aO - 2 * this.yV - this.yW - this.aXq, this.mH && this.aXw()
	}, this.mJ = function(hY, hZ) {
		var xM, xL;
		return !!this.mH && (xL = hY, xM = hZ, hY -= dU.dV(aL.aN - this.aN, 2), hZ -= dU.dV(aL.aO - this.aO, 2), hY < 0 || hZ < 0 || hY >= this.aN || hZ >= this.aO || hY >= this.aN - this.aXq && hZ < this.aXq ? -1 !== cd.mJ(xL, xM) || cZ.mJ(xL,
			xM) || this.jn() : hZ < this.aXq || (hZ < this.aO - this.yW ? (this.aXu = !0, this.aXt = (hY - 2 * this.nZ - this.aXm) / this.aXn, 3 !== this.dS && (s.ap = !0)) : (xL = (xL = Math.floor(hY / (this.aN / this.aG0.length))) < 0 ?
			0 : xL >= this.aG0.length ? this.aG0.length - 1 : xL) !== this.dS && (this.dS = xL, this.aXw(), s.ap = !0)), !0)
	}, this.qr = function(hY, hZ) {
		return this.aXv[0] = hY, this.aXv[1] = hZ, !(!this.mH || !this.aXu || (hY -= dU.dV(aL.aN - this.aN, 2), hZ = this.aXt, this.aXt = (hY - 2 * this.nZ - this.aXm) / this.aXn, (0 <= this.aXt && this.aXt <= 1 || 0 <= hZ && hZ <= 1) && (s
			.ap = !0), 0))
	}, this.rM = function() {
		this.aXu && (this.aXu = !1)
	}, this.rf = function() {
		this.mH ? this.jn() : this.show()
	}, this.show = function() {
		cA.aN8 < 2 || (this.mH = !0, this.aXw())
	}, this.jn = function() {
		this.mH = !1, this.aXt = -1, s.ap = !0
	}, this.aXw = function() {
		this.dS < 2 ? this.aXm = ce.measureText(aW.fv.t6(cA.max[this.dS]), aW.bA.mN(0, this.aXr)) : 2 === this.dS && (this.aXm = ce.measureText(aW.fv.aGE(6, 2), aW.bA.mN(0, this.aXr))), this.aXn = this.aN - 2 * this.nZ - this.aXm - this.na
	}, this.aDl = function() {
		this.mH && this.aXw()
	}, this.mP = function() {
		this.mH && this.aWF()
	}, this.aWF = function() {
		var iE = dU.dV(aL.aN - this.aN, 2),
			iF = dU.dV(aL.aO - this.aO, 2);
		aC.setTransform(1, 0, 0, 1, iE, iF), aC.fillStyle = fk.e9, aC.fillRect(0, this.aXq, this.aN, this.aO - this.aXq), this.aXx(), this.aNT(), aC.strokeRect(0, 0, this.aN, this.aO), aW.bA.textAlign(aC, 2), aC.font = aW.bA.mN(0, this.aXr),
			0 === this.dS ? this.aXy(cA.aVc, iE, iF) : 1 === this.dS ? this.aXy(cA.qD, iE, iF) : 2 === this.dS ? this.aXz(iE, iF) : 3 === this.dS && (this.aY0(iE, iF), this.aY1(iE, iF)), cd.mQ(Math.floor(iE + this.aN - .725 * this.aXq), Math
				.floor(iF + .275 * this.aXq), Math.floor(.45 * this.aXq)), aC.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aXx = function() {
		var dw, b5;
		for (aC.lineWidth = this.aFJ, aW.bA.textBaseline(aC, 1), aW.bA.textAlign(aC, 1), aC.strokeStyle = fk.eC, aC.font = aW.bA.mN(1, this.aXs), b5 = this.aN / this.aG0.length, aC.fillStyle = fk.eY, aC.fillRect(this.dS * b5, this.aO - this.yW,
				b5, this.yW), aC.fillStyle = fk.eC, aC.fillRect(0, this.aO - this.yW - .5 * this.aFJ, this.aN, this.aFJ), dw = 1; dw <= 3; dw++) aC.fillRect(dw * b5, this.aO - this.yW, this.aFJ, this.yW);
		for (dw = this.aG0.length - 1; 0 <= dw; dw--) aC.fillText(aW.nU.aAv(this.aG0[dw], 0, .9 * b5), (dw + .5) * b5, this.aO - .46 * this.yW)
	}, this.aNT = function() {
		aC.fillStyle = fk.ey, aC.fillRect(0, 0, this.aN, this.aXq), aC.fillStyle = fk.eC, aC.fillRect(0, this.aXq - .5 * this.aFJ, this.aN, this.aFJ), aC.font = aW.bA.mN(1, .39 * this.aXq), aC.fillText(aW.nU.aAv(L(427), 0, .8 * this.aN), Math
			.floor(this.aN / 2), Math.floor(.55 * this.aXq))
	}, this.aXy = function(dY, iE, iF) {
		var g4 = cA.max[this.dS],
			li = (aC.setTransform(1, 0, 0, 1, iE + 2 * this.nZ + this.aXm, iF + this.yV + this.aXq), aC.lineWidth = 2, this.aXo / Math.sqrt(g4));
		aC.beginPath(), aC.moveTo(this.aXn, this.aXo - li * Math.sqrt(dY[cA.aN8 - 1]));
		for (var dw = cA.aN8 - 2; 0 <= dw; dw--) aC.lineTo(dw * this.aXn / (cA.aN8 - 1), this.aXo - li * Math.sqrt(dY[dw]));
		aC.stroke();
		iE = this.mQ(dY, li, .5);
		iE < .95 && aC.fillText(aW.fv.t6(g4), -this.nZ, 0), .05 < Math.abs(iE - .5) && aC.fillText(aW.fv.t6(Math.floor(g4 / 4)), -this.nZ, Math.floor(this.aXo / 2)), .05 < iE && aC.fillText("0", -this.nZ, this.aXo)
	}, this.aXz = function(iE, iF) {
		aC.setTransform(1, 0, 0, 1, iE + 2 * this.nZ + this.aXm, iF + this.yV + this.aXq), aC.lineWidth = 2;
		var li = this.aXo / Math.max(cA.max[this.dS], 1);
		aC.beginPath(), aC.moveTo(this.aXn, this.aXo - li * cA.aBx[cA.aN8 - 1]);
		for (var dw = cA.aN8 - 2; 0 <= dw; dw--) aC.lineTo(dw * this.aXn / (cA.aN8 - 1), this.aXo - li * cA.aBx[dw]);
		aC.stroke();
		iE = this.mQ(cA.aBx, li, 1), iF = cA.max[this.dS] / 100;
		iE < .95 && aC.fillText(aW.fv.aGE(iF, 2), -this.nZ, 0), .05 < Math.abs(iE - .5) && aC.fillText(aW.fv.aGE(iF / 2, 2), -this.nZ, Math.floor(this.aXo / 2)), .05 < iE && aC.fillText(aW.fv.aGE(0, 2), -this.nZ, this.aXo)
	}, this.aY0 = function(iE, iF) {
		aC.setTransform(1, 0, 0, 1, iE + .34 * this.aN, iF + 2 * aXp + this.aXq), aW.bA.textAlign(aC, 2);
		for (var aB5 = this.aO - 4 * aXp - this.yW - this.aXq, dY = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], dw = 9; 0 <= dw; dw--) aC.fillText(aW.nU.aAv(cA.aVg[dY[dw]], 0, .31 * this.aN), 0, dw * aB5 / 9);
		var gp = cA.zk;
		for (aC.setTransform(1, 0, 0, 1, iE + .39 * this.aN, iF + 2 * aXp + this.aXq), aW.bA.textAlign(aC, 0), aC.fillText(aW.fv.aGE(100 * gp[0] / (1024 * Math.max(gp[1], 1)), 1), 0, 0), dw = 8; 1 <= dw; dw--) aC.fillText(gp[dY[dw]].toString(),
			0, dw * aB5 / 9);
		aC.fillText(aW.fv.aGE(100 * (1 - aZ.ac[aR.ad] / gp[7]), 0), 0, aB5)
	}, this.aY1 = function(iE, iF) {
		aC.setTransform(1, 0, 0, 1, iE + .79 * this.aN, iF + 2 * aXp + this.aXq), aW.bA.textAlign(aC, 2);
		var dw, aB5 = this.aO - 4 * aXp - this.yW - this.aXq;
		for (aC.fillStyle = fk.eT, dw = 2; 0 <= dw; dw--) aC.fillText(aW.nU.aAv(cA.aVg[dw + 8], 0, .31 * this.aN), 0, dw * aB5 / 9);
		aC.fillText(aW.nU.aAv(cA.aVg[18], 0, .31 * this.aN), 0, 3 * aB5 / 9), aC.fillStyle = fk.eS, aC.fillText(aW.nU.aAv(cA.aVg[11], 0, .31 * this.aN), 0, 4 * aB5 / 9), aC.fillStyle = fk.el, aC.fillText(aW.nU.aAv(cA.aVg[13], 0, .31 * this.aN),
				0, 5 * aB5 / 9), aC.fillText(aW.nU.aAv(cA.aVg[15], 0, .31 * this.aN), 0, 6 * aB5 / 9), aC.fillText(aW.nU.aAv(cA.aVg[16], 0, .31 * this.aN), 0, 7 * aB5 / 9), aC.fillText(aW.nU.aAv(cA.aVg[12], 0, .31 * this.aN), 0, 8 * aB5 / 9), aC
			.fillStyle = fk.ek, aC.fillText(aW.nU.aAv(cA.aVg[17], 0, .31 * this.aN), 0, aB5), aC.fillStyle = fk.eT;
		var gp = cA.zk,
			vu = gp[8] + gp[9] + gp[10] + gp[18],
			vu = aW.fv.t6(vu),
			a8z = aC.measureText(vu).width,
			iE = (aC.setTransform(1, 0, 0, 1, iE + .83 * this.aN + a8z, iF + 2 * aXp + this.aXq), aC.fillText(aW.fv.t6(gp[8]), 0, 0), aC.fillText(aW.fv.t6(gp[9]), 0, aB5 / 9), aC.fillText(aW.fv.t6(gp[10]), 0, 2 * aB5 / 9), aC.fillText(aW.fv.t6(
				gp[18]), 0, 3 * aB5 / 9), aC.fillStyle = fk.eS, aC.fillText(vu, 0, 4 * aB5 / 9), aC.fillStyle = fk.el, aC.fillText(aW.fv.t6(gp[13]), 0, 5 * aB5 / 9), aC.fillText(aW.fv.t6(gp[15]), 0, 6 * aB5 / 9), aC.fillText(aW.fv.t6(gp[16]),
				0, 7 * aB5 / 9), aC.fillText(aW.fv.t6(gp[12]), 0, 8 * aB5 / 9), gp[12] + gp[13] + gp[15] + gp[16]);
		aC.fillStyle = fk.ek, aC.fillText(aW.fv.t6(iE), 0, aB5), aC.fillStyle = fk.eC
	}, this.mQ = function(dY, li, aJ5) {
		var dw, jj, dn;
		return this.aXt < 0 || 1 < this.aXt ? .25 : (dw = this.aXt * (cA.aN8 - 1), dn = dY[jj = Math.floor(dw)], dn += (dw - jj) * (dY[jj < cA.aN8 - 1 ? jj + 1 : jj] - dn), aC.strokeStyle = fk.eF, .04 < this.aXt && this.aY4(0, this.aXo - li *
				Math.pow(dn, aJ5), dw * this.aXn / (cA.aN8 - 1), this.aXo - li * Math.pow(dn, aJ5)), .04 < dn / cA.max[this.dS] && this.aY4(dw * this.aXn / (cA.aN8 - 1), this.aXo, dw * this.aXn / (cA.aN8 - 1), this.aXo - li * Math.pow(dn,
				aJ5)), aC.fillStyle = fk.en, aC.beginPath(), aC.arc(dw * this.aXn / (cA.aN8 - 1), this.aXo - li * Math.pow(dn, aJ5), Math.max(2, .014 * this.aO), 0, 2 * Math.PI), aC.fill(), dY = this.aXt * s.aq, dY = 0 === aZ.aa[aR.ad] ? Math
			.floor(dY * cA.aVf) : Math.floor(dY * s.a6()), aC.fillStyle = fk.eC, aC.fillText(1 === aJ5 ? aW.fv.aGE(dn / 100, 2) : aW.fv.t6(Math.floor(dn)), -this.nZ, this.aXo - li * Math.pow(dn, aJ5)), aW.bA.textAlign(aC, 1), aC.fillText(cc
				.aGF(dY), dw * this.aXn / (cA.aN8 - 1), this.aXo + this.aXr - (aI.aJ.aK() ? 2 : 0) - this.aFJ), aW.bA.textAlign(aC, 2), li * Math.pow(dn, aJ5) / this.aXo)
	}, this.aY4 = function(iG, iH, iI, iJ) {
		aC.beginPath(), aC.moveTo(iG, iH), aC.lineTo(iI, iJ), aC.stroke()
	}
}

function aSW(aSR, aSL, aY5, aSS, aDU, aDV) {
	var aP7 = document.createElement("div"),
		aY6 = document.createElement("div"),
		aY7 = document.createElement("div"),
		aY8 = document.createElement("div"),
		aY9 = document.createElement("div"),
		aWS = document.createElement("div"),
		aYA = document.createElement("div"),
		aYB = document.createElement("div"),
		aYC = document.createElement("span"),
		aYD = document.createElement("div");
	this.aSZ = new aDT(aDU, aDV), this.aSd = new aWR(aDV), this.aSg = [aSR, aSL, aY5, aSS], this.aSk = function(aAK) {
		aAK = (aAK / 10).toFixed(1) + "%";
		aYB.style.width = aAK, aYC.innerHTML = aAK
	}, this.aSe = function() {
		this.aSd.jn(aWS), this.aSZ.show(aWS)
	}, this.aSf = function() {
		this.aSZ.jn(aWS), this.aSd.show(aWS)
	}, this.aSY = function() {
		return aY6
	}, this.show = function() {
		document.body.appendChild(aP7)
	}, this.jn = function() {
		document.body.removeChild(aP7)
	}, this.resize = function(aYG) {
		var aYH = 1 - .4 * aI.aJ.aK() * (aL.aN > 1.6 * aL.aO),
			m9 = aW.bA.dJ(.05 * aYH),
			aYI = aL.aO > aL.aN,
			aYJ = aW.bA.dJ(.07 * aYH + .03 * aYI),
			aYK = aW.bA.dJ(.04 + .02 * aYI),
			aYI = aW.bA.dJ(.02 * aYH + .01 * aYI),
			aYM = aW.bA.dJ(.025);
		aP7.style.font = aW.bA.mN(0, aYM), aYH < 1 && (aYM = aW.bA.mN(0, aYH * aYM), aY7.style.font = aYM, aY9.style.font = aYM, aYD.style.font = aYM, aYA.style.font = aYM, aY8.style.font = aYM), aY6.style.height = aW.bA.dH(m9), aY6.style.font =
			aW.bA.mN(0, .72 * m9), aW.bA.a5C(aY6, 2), aY7.style.top = aW.bA.dH(m9), aY7.style.height = aW.bA.dH(aYJ), aW.bA.a5C(aY7, 2), aY8.style.font = aW.bA.mN(0, aYH * aW.bA.dJ(.02)), aY8.style.top = aW.bA.dH(m9 + aYJ), aY8.style.height = aW
			.bA.dH(aYK), aW.bA.a5C(aY8, 2), aY9.style.top = aW.bA.dH(m9 + aYJ + aYK), aY9.style.height = aW.bA.dH(aYJ), aW.bA.a5C(aY9, 2), aWS.style.top = aW.bA.dH(m9 + aYJ + aYK + aYJ), aWS.style.height = aW.bA.dH(aL.aO / aL.bC - m9 - 3 * aYJ -
				aYK - aYI), aYA.style.top = aW.bA.dH(aL.aO / aL.bC - aYJ - aYI), aYA.style.height = aW.bA.dH(aYI), aW.bA.a5C(aYA, 8), aYC.style.font = aW.bA.mN(0, .8 * aYI), aYD.style.top = aW.bA.dH(aL.aO / aL.bC - aYJ), aYD.style.height = aW.bA
			.dH(aYJ), aW.bA.a5C(aYD, 8), aSR.resize(aY7), aSL.resize(aY7), aY5.resize(aY7), aSS.resize(aY7), aYG ? this.aSZ.resize(aWS) : this.aSd.resize()
	};
	aDU = this;
	aP7.style.position = "absolute", aP7.style.top = "0", aP7.style.left = "0", aP7.style.width = "100%", aP7.style.height = "100%", aP7.style.backgroundColor = fk.eB, o0.ri() || (aP7.style.backdropFilter = "blur(4px)", aP7.style
		.webkitBackdropFilter = "blur(4px)"), aY6.style.position = "absolute", aY6.style.top = "0", aY6.style.left = "0", aY6.style.width = "100%", aY6.style.display = "flex", aY6.style.alignItems = "center";
	for (var dY = [aY7, aY8, aY9, aYD], dw = 0; dw < dY.length; dw++) dY[dw].style.position = "absolute", dY[dw].style.left = "0", dY[dw].style.width = "100%", aW.bA.a5P(dY[dw]);
	aWS.style.position = "absolute", aWS.style.left = "0", aWS.style.width = "100%", aWS.style.font = "inherit", aYA.style.position = "absolute", aYA.style.left = "0", aYA.style.width = "100%", aYB.style.position = "absolute", aYB.style.top = "0",
		aYB.style.left = "0", aYB.style.height = "100%", aYB.style.width = "50%", aYB.style.backgroundColor = fk.eY, aYC.innerHTML = "", aYC.style.position = "absolute", aYC.style.top = "50%", aYC.style.left = "50%", aYC.style.transform =
		"translate(-50%, -50%)", aY6.appendChild(function() {
			var yW = document.createElement("h1");
			return yW.textContent = L(235), yW.style.margin = "0 auto 0.15em auto", yW.style.webkitTextStroke = "0.02em brown", yW.style.fontFamily = "Arial Black, Trebuchet MS", yW.style.fontSize = "inherit", yW.style.fontWeight = "inherit", yW
		}()), aY7.appendChild(aSR.dF), aY8.appendChild(aSL.dF), aY9.appendChild(aY5.dF), aYA.appendChild(aYB), aYA.appendChild(aYC), aYD.appendChild(aSS.dF), aP7.appendChild(aY6), aP7.appendChild(aY7), aP7.appendChild(aY8), aP7.appendChild(aY9), aP7
		.appendChild(aWS), aP7.appendChild(aYA), aP7.appendChild(aYD), aDU.aSd.show(aWS)
}

function pX() {
	this.aMR = new a2Q, this.zX = new aX7, this.n8 = new aRi, this.j = function() {
		this.n8.j()
	}
}

function aUO() {
	var aN, aO, aYO;

	function aYZ(iP, kR, aYX, aYR, xR) {
		kR = aYY(iP, kR + 1 + 2 * aYR & 3);
		! function(iP, iQ) {
			return 1 < Math.abs(iP % aN - iQ % aN) || 1 < Math.abs(aYb(iP) - aYb(iQ))
		}(iP, kR) && 0 === xR[kR << 2] && (xR[kR << 2] = aYX)
	}

	function aYb(fl) {
		return Math.floor((fl + .5) / aN) % aO
	}

	function aYY(fl, kR) {
		return fl + aYO[kR]
	}
	this.uD = function(fr) {
		var dw, dL, du, aYP, aPU = da;
		for (kV.dd.aHS(kV.dd.aHR(fr)), gu.td.te[gu.ib].aN = gu.gv = aN = aPU.jw(12), gu.td.te[gu.ib].aO = gu.h1 = aO = aPU.jw(12), aYO = [-aN, -1, aN, 1], gu.nO = document.createElement("canvas"), gu.nO.width = gu.gv, gu.nO.height = gu.h1, gu
			.tr = gu.nO.getContext("2d", {
				alpha: !1
			}), gu.ts = gu.tu = null, gu.ts = gu.tr.getImageData(0, 0, gu.gv, gu.h1), gu.tu = gu.ts.data, aW.jS.aJc(gu.tu), du = aPU.jw(12), dL = aPU.jw(5), aYP = e1(aN * aO - 1), dw = 0; dw < du; dw++) ! function(g4, fl, aYQ, aYR) {
			var dw, kR, aPU = da,
				xR = gu.tu,
				fb = fl,
				aYU = fl,
				aYV = 0,
				aYW = 1 + aYQ,
				aYX = 2 - aYQ;
			for (xR[fl << 2] = aYW, dw = 0; dw < g4; dw++) kR = aPU.jw(2), fl = aYY(fl, kR), xR[fl << 2] === aYW ? aYV % 2 == 1 && aYZ(aYU, aYV + 2 * aYR + 3, aYX, aYR, xR) : xR[fl << 2] = aYW, aYZ(fl, kR, aYX, aYR, xR), aYZ(aYU, kR, aYX,
				aYR, xR), aYU = fl, aYV = kR;
			aYY(fl, 0) === fb ? (aYZ(fl, 0, aYX, aYR, xR), aYZ(fb, 0, aYX, aYR, xR)) : aYY(fl, 1) === fb && (aYZ(fl, 0, aYX, aYR, xR), aYZ(fb, 2, aYX, aYR, xR));
			0 === g4 && (aYZ(fb, 0, aYX, aYR, xR), aYZ(fb, 2, aYX, aYR, xR))
		}(aPU.jw(dL), aPU.jw(aYP), 1 === aPU.jw(1), 1 === aPU.jw(1));
		var iE, iF, n0, aYc, aYd, aYe, xR = gu.tu,
			aYf = !0,
			tf = gu.td.te[gu.ib].tf,
			tg = gu.td.te[gu.ib].tg;
		for (iF = 0; iF < aO; iF++)
			for (aYc = !0, aYd = aYf, iE = aYe = 0; iE < aN; iE++) n0 = 4 * iF * aN + 4 * iE, aYe <= iE && 0 < xR[n0] && (aYd = 2 === xR[n0], aYc) && (aYc = !1, aYd !== aYf) ? (aYf = aYd, aYe = iE + 1, iE = -1) : (aYd ? (xR[n0] = tg[0], xR[1 +
				n0] = tg[1], xR[2 + n0] = tg[2]) : (xR[n0] = tf[0], xR[1 + n0] = tf[1], xR[2 + n0] = tf[2]), xR[3 + n0] = 255);
		gu.tr.putImageData(gu.ts, 0, 0), gu.a6u = !0, gu.tj.j(), s.ap = !0
	}
}

function jg() {
	var jj;
	this.jj = document.createElement("hr"), this.resize = function() {
		aW.bA.a5C(this.jj, 8, fk.eL)
	}, (jj = this.jj).style.marginBottom = jj.style.marginTop = "0.65em", jj.style.marginLeft = jj.style.marginRight = "-4%", jj.style.border = "none"
}

function on() {
	var aYg, canvas, fo, aYh;

	function aYm(dS, name, aYn, fr) {
		fo[dS] = name, canvas[dS] = new Image, canvas[dS].onload = function() {
			! function(dS, aYn) {
				var aX0, nI = null;
				7 === aYn ? aX0 = aW.a4P.aX2 : 8 === aYn ? (aX0 = aW.a4P.aX4, nI = .1) : 3 === aYn ? (aX0 = aW.a4P.aX3, nI = .06) : 5 === aYn ? aX0 = aW.a4P.aX5 : 6 === aYn ? aX0 = aW.a4P.aX1 : 4 === aYn && (aX0 = aW.a4P.aX6);
				canvas[dS] = aW.a4P.aNU(canvas[dS], aX0, nI)
			}(dS, aYn), aYp()
		}, canvas[dS].onerror = function(jj) {
			console.error("Error loading image at index", dS, "Error:", jj), aYp()
		}, canvas[dS].src = "data:image/png;base64," + fr
	}

	function aYp() {
		aYg--, aYj()
	}

	function aYj() {
		0 === aYg && (aYg = -1, aYl(), s.ap = !0, canvas[7] = aYh, canvas[8] = aYh, canvas[9] = aYh, canvas[10] = aYh, 5 === n.uL) && n.uM().aEf.resize()
	}

	function aYl() {
		ch.a0k(), o5.a33([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== aI.id, 1 !== aI.id, !0, !0, !0]), mh.xR = new mR, mh.xR.j(), ca.cD()
	}
	this.j = function() {
		if (void 0 === canvas) {
			aYg = 23, canvas = new Array(aYg), fo = new Array(aYg), (aYh = document.createElement("canvas")).width = 1;
			for (var dw = aYg - (aYh.height = 1); 0 <= dw; dw--) canvas[dw] = aYh;
			aYl(), aYm(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aYm(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aYm(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aYm(3, "orders", 6,
					"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"
					), aYm(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), aYm(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aYm(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aYm(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aYm(8,
					"googleplay", 3,
					"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"
					), aYm(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aYm(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aYm(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aYm(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aYm(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aYm(14, "bestPlayer", 5,
					"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"
					), aYm(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aYm(16, "apple", 3,
					"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"
					), aYm(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aYm(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aYm(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aYm(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aYm(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aYm(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dS) {
		return canvas[dS]
	}, this.aG = function(name) {
		for (var dw = fo.length - 1; 0 <= dw; dw--)
			if (fo[dw] === name) return canvas[dw];
		return aYh
	}, this.yN = function() {
		return aYg <= 0
	}, this.aNP = function() {
		aYg = 0, aYj()
	}
}

function aC1() {
	function aYr(dw, type, l0, gK) {
		gG.ku.data.push({
			dS: dw,
			type: type || 0,
			value: l0 || 0,
			l0: l0 || 0,
			gK: gK || 0
		})
	}

	function aYs(dw, type, l0, gK) {
		gG.ku.data.push({
			dS: dw,
			type: type,
			value: l0 || "",
			l0: l0 || "",
			gK: gK || 0
		})
	}

	function aYt(m5) {
		for (var dw = gG.ku.data.length; dw < m5; dw++) gG.ku.data.push(null)
	}
	this.data = [], this.j = function() {
		aYr(0, 1, 0, 5), aYr(1, 1, 1), aYr(2, 0), aYs(3, 2), aYr(4, 1), aYs(5, 2, "Trebuchet MS", 1), aYr(6, 0), aYr(7, 0, 0), aYr(8, 0), aYr(9, 1, 1), aYr(10, 1), aYr(11, 1, 1), aYs(12, 2, navigator.language), aYr(13), aYr(14), aYt(100), aYs(
				100, 2), aYs(101, 2), aYs(102, 2), aYs(103, 2), aYs(104, 2), aYs(105, 2), aYs(106, 2), aYr(107), aYr(108), aYr(109), aYs(110, 2), aYr(111), aYr(112), aYr(113), aYs(114, 2), aYr(115), aYs(116, 2), aYr(117, 1), aYs(118, 2, "", 2),
			aYr(119, 1, 0, 1), aYs(120, 2), aYr(121, 1, ~~(262144 * Math.random())), aYs(122, 2, "Player " + Math.floor(1e3 * Math.random())), aYr(123), aYs(124), aYr(125, 1), aYs(126, 2), aYr(127, 0, 1), aYr(128), aYr(129), aYr(130), aYr(131),
			aYr(132), aYs(133, 2), aYr(134, 0, 5), aYs(135, 2), aYs(136, 2), aYr(137), aYr(138), aYr(139), aYr(140), aYr(141), aYr(142), aYr(143), aYr(144), aYs(145, 2), aYr(146), aYr(147), aYs(148, 2), aYr(149), aYr(150, 0, 1), aYs(151, 2), aYr(
				152, 0, 5), aYr(153, 1), aYr(154, 1), aYs(155, 2), aYs(156, 2), aYr(157), aYr(158), aYr(159), aYr(160), aYt(180), aYr(180, 0), aYr(181, 0)
	}, this.gI = function(dS, value) {
		this.data[dS].value = value
	}, this.kv = function(dS, value) {
		this.gI(dS, value), gG.jq.save(dS, String(value)), gG.jq.save(dS, String(this.data[dS].gK), !0)
	}, this.aYu = function() {
		for (var dw = 0; dw < this.data.length; dw++) this.data[dw] && (gG.jq.save(dw, String(this.data[dw].value)), gG.jq.save(dw, String(this.data[dw].gK), !0))
	}, this.aSs = function(dS) {
		return Number(this.data[dS].value)
	}, this.aYv = function(dS) {
		return String(this.data[dS].value)
	}
}

function oY() {
	var aFF, aO, aYw, aYx, aYy, aYz, aZ0, aZ1, aZ2;

	function nQ() {
		return cY.aL1(cf.aL2()) ? ca.mH ? __fx.settings.keybindButtons ? cY.iF - 2 * cY.aO - 3 * aYw : cY.iF - cY.aO - 2 * aYw : __fx.settings.keybindButtons ? cY.iF - cY.aO - 2 * aYw : cY.iF - aYw : cZ.aL1(cf.aL3()) ? ca.mH ? cZ.nQ() - cY.aO - 2 *
			aYw : cZ.nQ() - aYw : ca.mH ? aL.aO - cY.aO - (o8.aL4() + 1) * aYw : aL.aO - o8.aL4() * dI.gap
	}

	function aZ6(b5, fr, id, fl, aZ8, aZ9, iQ, aZA, aZB, aS0, aZG) {
		var dw, nU, uk, dg, aZH = void 0 !== aZB,
			aN = Math.floor(ce.measureText(fr, cf.mM) + 1.5 * aYx + (aZH ? aO : 1.5 * aYx));
		if (s.ap = !0, aZG || d3.fj(fr, aZB), aN + 2 * aYw + cY.aO > aL.aN && !aZH && 50 !== id && 20 < fr.length) aZ6(b5, (aZG = aW.fv.aNl(fr))[0], id, fl, aZ8, aZ9, iQ, aZA, aZB, aS0, !0), aZ6(b5, aZG[1], id, fl, aZ8, aZ9, iQ, aZA, aZB, aS0, !0);
		else if (aZG = aN + (50 === id ? aYy : 0), (uk = document.createElement("canvas")).width = aN, uk.height = aO, (nU = uk.getContext("2d", {
				alpha: !0
			})).font = cf.mM, aW.bA.textBaseline(nU, 1), aW.bA.textAlign(nU, 0), nU.clearRect(0, 0, aN, aO), nU.fillStyle = aZ9, nU.fillRect(0, 0, aN, aO), nU.fillStyle = aZ8, nU.fillText(fr, Math.floor(1.5 * aYx), Math.floor(aO / 2)), aZH && (nU
				.imageSmoothingEnabled = !0, mh.xR.n1(aZB, nU, aN - aO, 0, aO)), 0 === (dg = {
				t: b5,
				fr: fr,
				id: id,
				player: fl,
				canvas: uk,
				aZ8: aZ8,
				aZ9: aZ9,
				aN: aN,
				aZD: aZG,
				iQ: iQ,
				aZA: aZA,
				aZB: aZB,
				aS0: aS0
			}).t || 0 < aFF.length && 0 < aFF[0].t) aFF.unshift(dg);
		else {
			for (dw = 1; dw < aFF.length; dw++)
				if (0 < aFF[dw].t) return void aFF.splice(dw, 0, dg);
			aFF.push(dg)
		}
	}

	function aZ7(rT, fh, fn) {
		return "rgb(" + rT + "," + fh + "," + fn + ")"
	}

	function aZI(id, mv) {
		for (var du = aFF.length, dw = 0; dw < du; dw++) aFF[dw].id === id && mv-- <= 0 && (aFF.splice(dw, 1), dw--, du--)
	}

	function aZJ(id, player) {
		for (var aFA = !1, dw = aFF.length - 1; 0 <= dw; dw--) aFF[dw].id !== id || player !== aR.bS && aFF[dw].player !== player || (aFF.splice(dw, 1), aFA = !0);
		return aFA
	}

	function aZS(fr) {
		aZ6(340, fr, 6, 0, aZ7(215, 245, 255), fk.e9, -1, !1)
	}
	this.aT3 = "", this.j = function() {
		var self;
		aZ1 = 0, aZ0 = aI.aJ.aK() ? 7 : 12, aYz = {
			aBy: [0, 0, 0],
			aZ3: [0, 0, 0],
			aCa: [220, 180, 180],
			rw: [0, 0, 0],
			dx: [0, 0, 0]
		}, aFF = [], this.resize(), aR.bh && this.gV(0, 18), gu.td.te[gu.ib].name.length && aZS(L(472, [gu.td.te[gu.ib].name])), aZS(L(473, [gu.gv - 2 + "x" + (gu.h1 - 2)])), aZS(L(474, [aW.fv.t6(cE.a6k)])), cE.a6k !== cE.a6l && aZS(L(475, [
			aW.fv.t6(cE.a6l) + " (" + aW.fv.aGE(100 * cE.a6l / cE.a6k, 1) + ")"
		])), 0 < cE.a6m && aZS(L(448, [aW.fv.t6(cE.a6m) + " (" + aW.fv.aGE(100 * cE.a6m / cE.a6k, 1) + ")"])), 0 < cE.a6n && aZS(L(476, [aW.fv.t6(cE.a6n) + " (" + aW.fv.aGE(100 * cE.a6n / cE.a6k, 1) + ")"])), 10 === aR.aV && aZ6(120, L(477),
			6, 0, aZ7(235, 255, 120), fk.e9, -1, !1), 0 !== (self = this).aT3.length && (aZ6(200, self.aT3, 0, 0, fk.eC, fk.e9, -1, !1), self.aT3 = ""), aR.bl && aZ6(340, L(428), 6, 0, aZ7(255, 200, 0), fk.e9, -1, !1)
	}, this.resize = function() {
		var aLm, dw;
		if (aO = (aO = Math.floor((aI.aJ.aK() ? .031 : .0249) * aL.aM)) < 10 ? 10 : aO, this.fontSize = Math.floor(2 * aO / 3), this.mM = aW.bA.mN(1, this.fontSize), aYw = dI.gap, aYx = Math.floor(aO / 5), 0 < aFF.length)
			for (aLm = aFF, aFF = [], dw = aLm.length - 1; 0 <= dw; dw--) aZ6(aLm[dw].t, aLm[dw].fr, aLm[dw].id, aLm[dw].player, aLm[dw].aZ8, aLm[dw].aZ9, aLm[dw].iQ, aLm[dw].aZA, aLm[dw].aZB, aLm[dw].aS0, !0);
		this.aZC()
	}, this.aZC = function() {
		aZ2 = document.createElement("canvas");
		var fr = L(429),
			nU = (aYy = ce.measureText(fr, this.mM) + 5 * aYx, aZ2.height = aO, aZ2.width = aYy, aZ2.getContext("2d", {
				alpha: !0
			}));
		nU.font = this.mM, aW.bA.textBaseline(nU, 1), aW.bA.textAlign(nU, 1), nU.clearRect(0, 0, aYy, aO), nU.fillStyle = fk.eZ, nU.fillRect(0, 0, aYy, aO), nU.fillStyle = fk.eC, nU.fillText(fr, Math.floor(aYy / 2), Math.floor(aO / 2))
	}, this.aL2 = function() {
		var du;
		return ca.mH ? ca.aN : 0 === (du = aFF.length) ? 0 : 1 === du ? aFF[0].aZD : yY(aFF[0].aZD, aFF[1].aZD)
	}, this.aL3 = function() {
		var du = aFF.length;
		return ca.mH ? du ? yY(ca.aN, aFF[0].aZD) : ca.aN : 0 === du ? 0 : 1 === du ? aFF[0].aZD : 2 === du ? yY(aFF[0].aZD, aFF[1].aZD) : yY(yY(aFF[0].aZD, aFF[1].aZD), aFF[2].aZD)
	}, this.mJ = function(iE, iF) {
		for (var iG, aCA, aZE = nQ(), dw = aFF.length - 1; 0 <= dw; dw--)
			if ((aCA = aZE - (dw + 1) * aO) <= iF && iF < aCA + aO) return 50 === aFF[dw].id ? iE >= aL.aN - aYy - aYw - aFF[dw].aN && (iE >= aL.aN - aYy - aYw ? c7.aX.a15(aFF[dw].player) : ct.nj(aFF[dw].player, 800, !1, 0), !0) : iE >= aL.aN -
				aFF[dw].aN - aYw && (736 === aFF[dw].id ? (aCA = aFF[dw].fr.split(" "), window.open(aCA[aCA.length - 1], "_blank")) : aFF[dw].aZA && (aFF[dw].aS0 && aFF[dw].aS0.fm ? (aCA = aFF[dw].aS0.go, iG = cI.gx(aCA) - 10, aCA = cI.gz(
					aCA) - 10, ct.aQb(iG, aCA, 19 + iG, 19 + aCA)) : aFF[dw].aS0 && aFF[dw].aS0.fn ? ct.aRD(aFF[dw].player, aFF[dw].aS0.hi) : (ct.nj(aFF[dw].player, 800, !1, 0), 0 <= aFF[dw].iQ && (iG = aFF[dw].iQ, aFF[dw].iQ = aFF[
					dw].player, aFF[dw].player = iG))), !0);
		return !1
	}, this.fj = function(b5, fr, id, fl, aZ8, aZ9, iQ, aZA, aZB, aS0) {
		aZ6(b5, fr, id, fl, aZ8, aZ9, iQ, aZA, aZB, aS0)
	}, this.aVV = function(sl) {
		aZ6(300, sl, 252, 0, fk.eC, fk.e9, -1, !1)
	}, this.aKv = function(id) {
		for (var dw = aFF.length - 1; 0 <= dw; dw--) aFF[dw].id === id && (aFF[dw].t = 1)
	}, this.gV = function(player, id) {
		0 === id ? (ce.a1Z(player, 0), aZI(423, 0), aZ6(160, L(430, [aZ.fp[player]]), 423, player, "rgb(10,220,10)", fk.e9, -1, !1)) : 1 === id ? (aZJ(50, aR.bS), ce.a1Z(player, 1), aZ6(360, L(431, [aZ.fp[player]]), 0, player, fk.es, fk.e9, -1, !
			0), ct.nj(player, 2700, !1, 0)) : 2 === id ? (ce.a1Z(player, 2), aZ6(0, L(432), 0, player, "rgb(10,255,255)", fk.e9, -1, !0), ct.nj(player, 2700, !1, 0)) : 3 === id ? (ce.a1Z(player, 2), aZ6(0, L(433, [aZ.fp[player]]), 0, player,
			fk.eC, fk.e9, -1, !0), ct.nj(player, 2700, !1, 0)) : 4 === id ? this.zl(1, player, player) : 5 === id ? 2 === aZ.gZ[player] || aW.aX.aY(aR.ad) || (function(id, a4K) {
			var dw, aZP = 0,
				du = aFF.length;
			for (dw = 0; dw < du; dw++)
				if (aFF[dw].id === id && a4K <= ++aZP) return aFF.splice(dw, 1)
		}(1, 5), cn.xa(player) ? aZ6(180, L(434, [aZ.fp[player]]), 1, player, aZ7(255, 200, 180), fk.e9, -1, !0) : (aZI(573, 0), aZ6(180, L(435, [aZ.fp[player]]), 573, player, fk.es, fk.e9, -1, !0))) : 18 === id ? aZ6(255, L(436), 18, 0, fk
			.eC, fk.e9, -1, !1) : 21 === id ? aZ6(220, L(437), id, 0, fk.eC, fk.e9, -1, !1) : 22 === id ? this.zl(2, player, player) : 59 === id && aZ6(0, L(438), id, 0, fk.fA, fk.e9, 0, !1)
	}, this.a0X = function(sl) {
		aZ6(200, L(439, [sl]), 94, 0, fk.eC, fk.eo, -1, !1)
	}, this.no = function(aZL) {
		if (aR.fk === aZL && !aR.ay)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aZ6(0, "Your Win Count is now " + __fx.wins.count, 3, aZL, fk.eC, fk.e9, -1, !0);
		aZ.ac[aZL] && (ce.a1Z(aZL, 2), aR.bY < 100 ? aZ6(0, L(433, [aZ.fp[aZL]]), 3, aZL, fk.eC, fk.e9, -1, !0) : aZ6(0, L(440, [aZ.fp[aZL]]), 3, aZL, fk.eC, fk.e9, -1, !0))
	}, this.a1Q = function(gt) {
		var aZM, fr, aY2 = "(" + cI.gx(gt >> 2) + ", " + cI.gz(gt >> 2) + ")",
			aZA = !1,
			player = 0;
		cC.hO(gt) ? cC.hH(gt) ? aY2 = L(441, [aY2]) : (player = cC.hJ(gt), fr = L(442, [aW.nU.aAv(aZ.fx[player], aW.bA.mN(0, 10), 150)]) + "   ", fr = (fr += L(443, [aW.fv.t6(aZ.bN[player])]) + "   ") + L(444, [aW.fv.t6(aZ.ac[player])]) + "   ",
				aR.ae && (aZM = aj.fo[aj.ak[aj.al[player]]], fr += L(60) + ": " + aZM + "   "), aW.aX.aY(player) && (fr += L(57) + ": " + cM.zr[cM.hm[player]] + "   "), aY2 = fr = (fr += L(445, [player]) + "   ") + L(446, [aY2]), aZA = !0) :
			aY2 = cC.z4(gt) ? L(447, [aY2]) + "   #" + cC.h2(gt) : L(448, [aY2]), s.ap = !0, aZI(55, 0), aZ6(220, aY2, 55, player, fk.eC, fk.e9, -1, aZA, void 0, void 0, !0)
	}, this.a1R = function(aZN) {
		var g4 = cJ.v,
			player = g4.iM[aZN] >> 3,
			fr = (s.ap = !0, aZI(55, 0), L(449, [aZ.fp[player]]) + "   ");
		aZ6(220, fr += L(443, [aW.fv.t6(g4.hl[aZN])]), 55, player, fk.eC, fk.e9, -1, !0)
	}, this.ko = function(z, sH, kn) {
		z === aR.ad ? aZ6(175, " " + L(450, [aZ.fp[sH]]) + ": ", 1001, sH, aZ7(200, 255, 210), fk.e9, -1, !0, kn) : this.aZO(z, kn)
	}, this.aZO = function(z, kn) {
		aZI(1e3, 0), aZ6(175, aZ.fp[z] + ": ", 1e3, z, fk.eC, "rgba(5,60,25,0.9)", -1, !0, kn)
	}, this.nn = function() {
		var sl;
		aR.aT ? (sl = L(451), ce.nm(L(452), 2, 1, 12), aZ6(0, sl, 40, 0, "rgb(10,220,10)", fk.e9, -1, !1)) : (sl = L(453), ce.nm(L(454), 2, 0, 16), aZ6(0, sl, 41, 0, fk.eC, fk.e9, -1, !1))
	}, this.a79 = function() {
		var mv = aZ.fp,
			kR = aR.data;
		aZ6(300, mv[0] + " [" + aR.bn.a7E(kR.elo[0]) + "] vs " + mv[1] + " [" + aR.bn.a7E(kR.elo[1]) + "]", 65, 0, fk.e3, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aXE = function(sl) {
		aZ6(350, sl, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aKw = function(aKn) {
		aZ6(0, L(aKn ? 455 : 456), 247, 0, fk.f9, fk.e9, -1, !1)
	}, this.a7G = function(a7D, a7F, aZQ) {
		var kR = aR.data,
			mv = aZ.fp;
		aZ6(0, mv[0] + ": " + aR.bn.a7E(kR.elo[0]) + " -> " + a7D, 66, 0, fk.eC, aZQ[0], -1, !1), aZ6(0, mv[1] + ": " + aR.bn.a7E(kR.elo[1]) + " -> " + a7F, 66, 1, fk.eC, aZQ[1], -1, !1)
	}, this.kr = function(player, id) {
		0 === id ? aZJ(50, player) ? (aZ6(128, L(457, [aZ.fp[player]]), 52, player, aZ7(180, 255, 180), fk.e9, -1, !0), cn.kp(player, 2, 255)) : aZ6(384, L(458, [aZ.fp[player]]), 51, player, aZ7(210, 210, 255), fk.e9, -1, !0) : aZJ(51, player) ?
			(aZ6(128, L(459, [aZ.fp[player]]), 52, player, fk.eC, "rgba(60,120,10,0.9)", -1, !0), cn.kp(player, 2, 255)) : (aZ6(384, L(460, [aZ.fp[player]]), 50, player, fk.eC, "rgba(90,90,90,0.9)", -1, !0), cn.kp(player, 2, 96))
	}, this.a9N = function(aBy, target) {
		var color = aZ7(210, 255, 210);
		1 < aBy.length ? aZ6(230, L(461, [aBy.length, aZ.fp[target]]), 66, target, color, fk.e9, -1, !0) : aZ6(230, L(462, [aZ.fp[aBy[0]], aZ.fp[target]]), 66, aBy[0], color, fk.e9, target, !0)
	}, this.ks = function(player, target) {
		aZ6(230, L(463, [aZ.fp[player], aZ.fp[target]]), 66, player, fk.eC, "rgba(75,65,5,0.9)", target, !0)
	}, this.zj = function(id, mv) {
		aZI(id, mv)
	}, this.xb = function(id, player) {
		aZJ(id, void 0 === player ? aR.bS : player)
	}, this.aRw = function(id) {
		for (var dw = aFF.length - 1; 0 <= dw; dw--)
			if (aFF[dw].id === id) return aFF[dw];
		return null
	}, this.aLv = function(wr, aZR, player) {
		2 !== aZ.gZ[aR.ad] && (aZ6(200, wr = 1 === wr ? L(464, [aZ.fp[player]]) : L(465, [aW.fv.t6(wr), aZ.fp[player]]), 30, player, "rgb(190,255,190)", fk.e9, -1, !0), aZR) && (wr = 1 === aZR ? L(466) : L(467, [aW.fv.t6(aZR)]), d3.fj(wr))
	}, this.aVi = function(wr, player) {
		2 !== aZ.gZ[aR.ad] && (aZI(31, 0), 2 === aZ.gZ[player] || player >= aR.bY ? aZ6(150, 1 === wr ? L(468, [aZ.fp[player]]) : L(469, [aZ.fp[player], aW.fv.t6(wr)]), 31, player, fk.e3, "rgba(205,205,205,0.9)", -1, !0) : aZ6(150, 1 === wr ? L(
			470, [aZ.fp[player]]) : L(471, [aZ.fp[player], aW.fv.t6(wr)]), 31, player, fk.e3, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a3i = function(oG) {
		for (var dx = s.a6(), dw = 2; 0 <= dw; dw--) 0 < aYz.rw[dw] && (oG || aYz.dx[dw] < dx - 220) && this.aZT(dw)
	}, this.aZT = function(id) {
		var fr, du = aYz.rw[id],
			player = aYz.aBy[id];
		aYz.rw[id] = 0, 1 === du ? (0 === id ? fr = L(478, [aZ.fp[player], aZ.fp[aYz.aZ3[0]]]) : 1 === id ? fr = L(479, [aZ.fp[player]]) : 2 === id ? fr = L(480, [aZ.fp[player]]) : 3 === id && (fr = L(481, [aZ.fp[player]])), aZI(7, 0), aZ6(aYz
			.aCa[id], fr, 7, aYz.aZ3[id], fk.eC, fk.e9, -1, !0)) : (fr = L(0 === id ? 482 : 1 === id ? 483 : 484, [du]), aZI(7, 0), aZ6(aYz.aCa[id], fr, 7, player, fk.eC, fk.e9, -1, !1))
	}, this.zl = function(id, iP, iQ) {
		var dx = s.a6(),
			du = aYz.rw[id] + 1;
		aYz.rw[id]++, aYz.aBy[id] = iP, aYz.aZ3[id] = iQ, 1 === du && (aYz.dx[id] = dx), (1 === du && (aR.bZ < 32 || 2 === aR.bf) || 1 < du && (aYz.dx[id] < dx - 140 || 2 === aR.bf)) && this.aZT(id)
	}, this.b2 = function() {
		nx.b2();
		for (var yL = (yL = aFF.length - aZ0) <= 1 ? 1 : yL * yL, dw = aFF.length - 1; 0 <= dw; dw--) 0 < aFF[dw].t && (aFF[dw].t -= yL, aFF[dw].t <= 0) && (s.ap = !0, aFF.splice(dw, 1));
		! function() {
			var mv, dw;
			if (128 !== aZ1 && !(++aZ1 < 128))
				for (mv = 5, dw = bF.bG - 1; 0 <= dw; dw--) 1 === aZ.gZ[bF.q3[dw]] && 0 < mv-- && aZ6(240, L(481, [aZ.fp[bF.q3[dw]]]), 1, bF.q3[dw], fk.e3, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a3i(!1)
	}, this.mP = function() {
		for (var xM, iF = nQ(), dw = aFF.length - 1; 0 <= dw; dw--) xM = iF - (dw + 1) * aO, 50 === aFF[dw].id ? (aC.drawImage(aFF[dw].canvas, aL.aN - aFF[dw].aN - aYy - aYw, xM), aC.drawImage(aZ2, aL.aN - aYy - aYw, xM)) : aC.drawImage(aFF[dw]
			.canvas, aL.aN - aFF[dw].aN - aYw, xM)
	}
}

function bq() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function aDF() {
	this.aPp = function(player, lw) {
		return -1 !== lw && !!cJ.sr.hG(player, lw) && this.lu(player, lw, 0)
	}, this.lu = function(player, lw, aZV) {
		player = function(player, lw, aZV) {
			var aXM = cJ.sr.gn(player, lw);
			if (-1 === aXM) return -1;
			aXM = cJ.sr.h4(aXM, lw);
			if (-1 === aXM) return -1;
			var aE6 = cJ.ly.aE9(aXM, lw);
			if (0 <= aE6) return aE6;
			if (cJ.ly.aEA()) return -1;
			if (0 <= (aE6 = cJ.ly.aE9(lw, aXM))) return cJ.ly.lz(cJ.ly.aEB(cJ.ly.get(aE6)));
			if (aXM === lw) return cJ.ly.lz(new Uint32Array([aXM, lw]));
			if (0 <= (aE6 = cJ.aDG.lu(aXM, lw))) return aE6;
			return aZV ? function(aZX, player) {
				var aRT = bw.aRT,
					ku = (aRT.fill(0), [aZX]),
					un = (aRT[aZX] = 1, cI.un),
					aWx = -1,
					du = ku.length;
				for (; - 1 === aWx && du;) {
					for (var dY = [], dw = 0; dw < du; dw++)
						for (var go = ku[dw], aNo = aRT[go], kR = 0; kR < 8; kR++) {
							var g5, g2, h0 = go + un[kR],
								gt = 4 * h0;
							cC.hA(gt) ? (g5 = aRT[h0], g2 = aNo + 5 + ((1 & kR) << 1), 0 === g5 ? (dY.push(h0), aRT[h0] = g2) : aRT[h0] = Math.min(g2, g5)) : -1 === aWx && kR % 2 == 0 && cC.xn(player, gt) && (aWx = go)
						}
					du = (ku = dY).length
				}
				return -1 !== aWx ? function(h5, aZZ) {
					var un = cI.un,
						aZa = -1,
						v4 = 0,
						zk = [];
					for (; aZZ !== h5;)(v4 = function(go, v4) {
						var aRT = bw.aRT,
							un = cI.un,
							aNo = aRT[go];
						if (aNo - aRT[go + un[v4]] != 5 + ((1 & v4) << 1))
							for (var fm = 0; fm < 8; fm++) {
								var kR = fm + v4 + 6 & 7;
								if (aNo - aRT[go + un[kR]] == 5 + ((1 & kR) << 1)) return kR
							}
						return v4
					}(aZZ, v4)) !== aZa && (zk.push(aZZ), aZa = v4), aZZ += un[v4];
					zk.push(h5);
					var aE6 = cJ.ly.aE9(zk[0], h5);
					if (0 <= aE6) return aE6;
					return cJ.ly.lz(new Uint32Array(zk))
				}(aZX, aWx) : -1
			}(lw, player) : -1
		}(player, lw, aZV);
		return -1 !== player && (bw.dY[0] = cJ.ly.get(player), !0)
	}
}

function pT() {
	function aZf() {
		return {
			gv: gu.gv,
			h1: gu.h1,
			nO: gu.nO,
			tr: gu.tr,
			ts: gu.ts,
			tu: gu.tu,
			ib: gu.ib,
			mapSeed: gu.mapSeed,
			a6u: gu.a6u
		}
	}

	function aZe(dw) {
		return 1 !== dw && gu.kb(dw) && dw !== gu.aZh()
	}
	this.a6o = 22, this.jV = 4096, this.gv = 0, this.h1 = 0, this.nO = null, this.tr = null, this.ts = null, this.tu = null, this.ib = 0, this.mapSeed = 0, this.a6u = !1, this.tj = new tP, this.td = new aGk, this.a6n = new aZc, this.j = function() {
		this.td.j()
	}, this.cN = function(map, aZd) {
		((map %= this.a6o) !== this.ib || aZe(this.ib) && aZd !== this.mapSeed) && (this.a6u = !1, this.tj.tb(), c3.c4(map), this.ib = map, this.mapSeed = aZd, aZe(map) && (gu.td.te[map].tl = aZd), this.kb(this.ib) ? (map = gu.td.te[this.ib],
			this.gv = map.aN, this.h1 = map.aO, c3.c4(map.tl), ln.cN([this.gv, this.h1, map.a9v, map.a9f]), lV(), cE.a6p(), ln.tc()) : aUN())
	}, this.uj = function(map, aZd) {
		var dn = aZf(),
			map = (this.cN(map, aZd), this.tj.tb(), aZf());
		return aZd = dn, gu.gv = aZd.gv, gu.h1 = aZd.h1, gu.nO = aZd.nO, gu.tr = aZd.tr, gu.ts = aZd.ts, gu.tu = aZd.tu, gu.ib = aZd.ib, gu.mapSeed = aZd.mapSeed, gu.a6u = aZd.a6u, map
	}, this.a63 = function(canvas) {
		canvas && this.nO !== canvas && (this.gv = canvas.width, this.h1 = canvas.height, this.nO = canvas, this.tr = this.nO.getContext("2d", {
			alpha: !1
		}), this.a3A = this.tr.getImageData(0, 0, this.gv, this.h1), this.tu = this.a3A.data, this.ib = this.aZh(), this.mapSeed = 0, gu.td.te[this.ib].name = aR.data.mapName)
	}, this.ia = function(dw) {
		return 3 === dw || 7 === dw || 9 === dw || 21 === dw || dw === this.aZh()
	}, this.aKX = function(dw) {
		return 2 === dw || 7 === dw || 9 === dw || 20 === dw
	}, this.a6s = function(dw) {
		return 1 === dw
	}, this.aZh = function() {
		return this.a6o
	}, this.kb = function(dw) {
		return void 0 === this.td.te[dw].th
	}, this.ui = function(dg) {
		return 0 === dg.mapType ? dg.mapProceduralIndex < 10 ? dg.mapProceduralIndex : 10 + dg.mapProceduralIndex : 1 === dg.mapType ? dg.mapRealisticIndex + 10 : void 0
	}, this.kc = function(dg, aZi) {
		0 === dg.mapType ? dg.mapProceduralIndex = aZi < 10 ? aZi : aZi - 10 : 1 === dg.mapType && (dg.mapRealisticIndex = aZi - 10)
	}
}

function aQ5() {
	var jE, aDe = !0;

	function aDn(aDm, uJ) {
		var dF = document.createElement("div"),
			aZk = document.createElement("span"),
			aZl = document.createElement("span");
		aZk.textContent = cc.aGF(uJ.t) + ":", aZk.style.color = fk.eR, aZk.style.paddingRight = "0.4em", aZk.style.display = "table-cell", aZk.style.width = "6ch", aZk.style.textAlign = "end", dF.appendChild(aZk), aZl.textContent = uJ.fr, dF
			.appendChild(aZl), dF.style.display = "table", uJ.kn && function(dF, kn) {
				{
					var aKP;
					kn >= 1024 - mh.mi.mj ? ((aKP = document.createElement("img")).src = mh.xR.mV[kn - 1024 + mh.mi.mj].toDataURL(), aKP.style.width = "1.5em", aKP.style.height = "1.5em", aKP.style.verticalAlign = "middle", dF.appendChild(aKP)) : ((
						aKP = document.createElement("span")).textContent = mh.mi.n3(kn), aKP.style.display = "inline-block", aKP.style.fontSize = "1.5em", aKP.style.lineHeight = "1em", aKP.style.verticalAlign = "middle", dF.appendChild(aKP))
				}
			}(dF, uJ.kn), aDm.appendChild(dF)
	}

	function aDo() {
		aDe && (jE.jM.scrollTop = jE.jM.scrollHeight)
	}
	this.clear = function() {
		jE.jM.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aFF = d3.uO(), du = aFF.length, aDm = document.createDocumentFragment(), dw = 0; dw < du; dw++) aDn(aDm, aFF[dw]);
		jE.jM.appendChild(aDm), aDo(), jE.show(), this.resize(), aDe = !0, aDo()
	}, this.jn = function() {
		jE.jn()
	}, this.resize = function() {
		jE.resize(), jE.jM.style.padding = "0.4em " + aW.bA.dH(dI.b9)
	}, this.jo = function(dx) {
		2 === dx && jE.jp[0].jq()
	}, this.fj = function(uJ) {
		var aDm = document.createDocumentFragment();
		aDn(aDm, uJ), jE.jM.appendChild(aDm), aDo()
	}, (jE = new jI(L(341), [new jJ("⬅️ " + L(10), function() {
		n.u3(1)
	})])).jM.style.overflowY = "auto", jE.jM.addEventListener("scroll", function() {
		aDe = jE.jM.scrollTop >= jE.jM.scrollHeight - jE.jM.clientHeight - 2
	})
}

function jJ(aDR, aZn, a68, aZo, aZp) {
	var self, aZq = document.createElement("button");

	function aVJ() {
		var aD0;
		o0.ri() || (aD0 = aW.color.aGb(a68), !1 !== aZo && 0 < aD0[0] && aD0[0] < 255 && aD0[0] === aD0[1] && aD0[0] === aD0[2]) || (aZq.style.backgroundColor = aW.color.aGc(a68, aD0[3] && aD0[3] < 120 ? 150 : 50))
	}

	function aZr() {
		if (aZo) {
			var aD0 = aW.color.aGb(a68);
			if (aD0[0] === aD0[1] && aD0[0] === aD0[2]) return
		}
		aZn && ((aD0 = aZn(this)) ? 2 === aD0 && aVJ() : aZv(this))
	}

	function aZs() {
		this.style.backgroundColor = a68
	}

	function aVI() {
		aZv(this)
	}

	function aZv(kR) {
		kR.style.backgroundColor = a68, kR.blur()
	}
	this.button = aZq, this.jq = aZn, this.aNI = a68, this.aO3 = function(aZt) {
			aZt = 1.1 - Math.min(.01 * aDR.length, .6) + .2 * aZt;
			aZq.style.fontSize = aZt.toFixed(1) + "em"
		}, this.a6B = function(dx) {
			dx ? 1 === dx ? dx = fk.eO : 2 === dx && (aZo = 1, dx = fk.eO) : (aZo = 0, dx = fk.e8), this.aNI = a68 = dx, aZq.style.backgroundColor = dx
		}, self = this, aZq.innerHTML = aDR, aZq.style.color = aZp ? fk.f9 : fk.eC, aZq.style.userSelect = "none", aZq.style.outline = "none", aZq.style.overflowWrap = "break-word", self.a6B(a68), aZq.style.border = "none", aZq.style.font =
		"inherit", self.aO3(0), aZq.style.padding = "0em 0.3em", aZq.onclick = aZr, aZq.addEventListener("mouseover", aVJ), aZq.addEventListener("mouseout", aVI), aZq.addEventListener("focus", aVJ), aZq.addEventListener("blur", aZs)
}

function aZc() {
	this.a76 = function() {
		for (var fl, iE, dn, a74 = z7, a75 = gu.tu, aN = gu.gv, a72 = aN - 1, a73 = gu.h1 - 1, mv = 0, iF = 1; iF < a73; iF++)
			for (dn = iF * aN, iE = 1; iE < a72; iE++) a75[fl = dn + iE << 2] === a75[1 + fl] && a75[fl] === a75[2 + fl] && (mv++, a74[2 + fl] = 4);
		cE.a6n = mv
	}, this.a77 = function(aZw, aZx) {
		for (var a74 = z7, aN = gu.gv, a72 = aN - 1, a73 = gu.h1 - 1, id = 0, iF = 1; iF < a73; iF++)
			for (var dn = iF * aN, iE = 1; iE < a72; iE++) {
				var gt = 2 + (dn + iE << 2);
				a74[gt] === aZw && (! function(gt, id, aZw, aZx) {
					var du = 1,
						a74 = z7,
						yo = cC.yo,
						aA6 = [gt],
						aZz = id >> 8 << 1,
						aa0 = 255 & id;
					a74[gt - 2] = aZz, a74[gt - 1] = aa0, a74[gt] = 5;
					for (; du;) {
						for (var aA7 = [], dw = 0; dw < du; dw++)
							for (var h9 = aA6[dw], kR = 3; 0 <= kR; kR--) {
								var aF8 = h9 + yo[kR];
								a74[aF8] === aZw && (a74[aF8 - 2] = aZz, a74[aF8 - 1] = aa0, a74[aF8] = aZx, aA7.push(aF8))
							}
						du = (aA6 = aA7).length
					}
				}(gt, id, aZw, aZx), id = (id + 1) % 32768)
			}
	}, this.a78 = function() {
		for (var a74 = z7, aN = gu.gv, a72 = aN - 3, a73 = gu.h1 - 3, aa2 = 12 * aN, iF = 3; iF < a73; iF++)
			for (var dn = iF * aN, iE = 3; iE < a72; iE++) {
				var gt = 2 + (dn + iE << 2);
				2 !== a74[gt] || 2 === a74[gt - 12] && 2 === a74[12 + gt] && 2 === a74[gt - aa2] && 2 === a74[gt + aa2] || (a74[gt - 2] = 1 | a74[gt - 2])
			}
	}
}

function aGj() {
	this.a4y = function(player, qN, hm) {
		aW.aX.qL(player, hm, qN) && (bL.a0x(player, qN), qN < aR.bY) && c3.random() < c3.value(10) && (cK.y4.a4a[qN] = 0)
	}, this.aMP = function(player, qN, hm) {
		aW.aX.qQ(hm, qN) ? (aW.aX.qA(qN, bw.qK[0]), cA.aLv(player, qN), cn.ws(qN, bw.qK[0])) : cA.j4(player, hm, 12)
	}
}

function aD6() {
	this.zW = function(player) {
		for (var hU = cJ.v.hU, hR = player << 3, dw = hR + cJ.v.hQ[player] - 1; hR <= dw; dw--) this.aMH(hU[dw])
	}, this.aMH = function(aa3) {
		var v = cJ.v,
			aa4 = v.ha - 1,
			aa5 = v.iM[aa3],
			aa6 = v.aSF[aa3],
			aa7 = v.hb[aa3];
		v.ha = aa4, v.iM[aa3] = v.iM[aa4], v.hb[aa3] = v.hb[aa4], v.aEY[aa3] = v.aEY[aa4], v.hl[aa3] = v.hl[aa4], v.aSF[aa3] = v.aSF[aa4], v.hT[aa3] = v.hT[aa4], v.aEK[aa3] = v.aEK[aa4], v.aI7[aa3] = v.aI7[aa4], v.hq[aa3] = v.hq[aa4], v.aET[
			aa3] = v.aET[aa4], v.hU[v.iM[aa3]] = aa3,
			function(aV4) {
				var player = aV4 >> 3,
					v = cJ.v,
					du = v.hQ[player] - 1,
					aaA = (player << 3) + du;
				v.hQ[player] = du, aaA !== aV4 && (v.hU[aV4] = v.hU[aaA], v.iM[v.hU[aV4]] = aV4)
			}(aa5), cJ.tY.tY[cI.v1(v.hb[aa3])][v.aSF[aa3]] = aa3, aa4 = cI.v1(aa7), aa5 = aa6, aa4 = cJ.tY.tY[aa4], v = aa4.pop(), aa5 !== aa4.length && (aa4[aa5] = v, cJ.v.aSF[v] = aa5)
	}
}
aFc(), self.aiCommand746 = function(gp) {
	0 === gp ? oF() : 1 !== gp || !aI || 1 !== aI.id || aI.gK < 14 || o0.rc()
}, setTimeout(oF, 1e4), window.onload = function() {
	oF()
};