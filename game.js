var fM, fN, fO, fP, jo, c, gw, wZ, wP, wg, a2B, a2C, xf, e2, dx, e, dq, e0, e1, dw, dv, dp, dt, ds, du, e5, dl, dn, cj, dg, aA, o4, gB, e4, z, uA, a2D, a2E, a2F, bc, vk, wY, jN, a2G, a2H, a2I, a2J, a2K, wh, dz, cY, eE, hL, sA, bW, vq, a2L, a2M, tB,
	wd, a2N, cC, mf, jd, bA, aG, dy, cp, d9, aV, c9, eO, a2O, vD, mp, p, a8, t, a4, wc, a2P, gX, cd, a2Q, cT, eR, mi, dj, zG, dm, a2R, a2S, mB, di, gq, e3, bT, jG, e6, dY, eW, cy, uQ, xp, a2T, a2U, ax, ac, rH, a2V, vh, tQ, aGE, gS, jE, aSB, aOj, aSC,
	aSD, aSE, aOp, aOh, aSF, aOi, aSG, aSH, aSI, aSJ, kI, kn, ko, dX, dZ, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span",
		"Data", "0.5em", " / ", "territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==",
		"click", "' target='_blank'>", "undefined", "pre", "break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string",
		"rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ",
		"   Gold: ", "🔄 Reload", "wheel", "translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover",
		"mouseout", "long", "logo", "loading", "keydown", "italic ", "https://", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]",
		"Seed", "Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room",
		"<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "255,255,255", "1v1", "1 Minute",
		"1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
	];

function a() {
	this.b = function() {
		8 === c.d && e.f()
	}, this.g = function(h) {
		var elo = c.data.elo,
			i = (elo[h] - elo[1 - h]) / 10,
			i = 8 / (1 + Math.pow(2, i / 32)),
			i = Math.floor(10 * i + .5),
			k = elo[h] + i,
			k = this.m(k),
			elo = this.m(elo[1 - h] - i);
		0 === h ? e.o(k, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : e.o(elo, k, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.m = function(elo) {
		return 16e3 === (elo = p.q(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function r() {
	this.s = function(player) {
		return !!c.data.passableWater && t.u.v !== t.u.w && t.u.x[player] !== t.u.y && 0 !== z.a0[player].length
	}, this.a1 = function(a2) {
		var a3 = a4.a5[1];
		return !(4 <= a3 || !t.a6.a7(a8.a9(a2))) && aA.aB(a8.a9(a8.aC(a2, a3)))
	}
}

function aD() {
	var aE = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aF = [aG.aH, aG.aH, aG.aI, aG.aJ, aG.aK, aG.aL, aG.aM, aG.aI, aG.aN, aG.aO, aG.aP],
		aQ = [
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
		aR = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function bK(bL, aY, bO) {
		for (var b1 = bL.length - 1; 0 <= b1; b1--) {
			var b3 = bL[b1];
			0 === b3.id && b3.aY === aY && (b3.aZ = "[Redacted Message]", bO) && (b3.bP = 1)
		}
	}
	this.aS = function(aT) {
		var aU, aa;
		return aT.id < 5 && (aU = "@" + aV.aW.aX(aT.aY, 5)), 0 === aT.id ? aU + ": " + aT.aZ : 1 === aT.id ? (aa = "@" + aV.aW.aX(aT.target, 5), 0 === aT.ab ? 32768 <= aT.value ? aU + " voted with " + (aT.value - 32768 + 1) + " gold against " +
				aa + " to weaken the latter's admin position. 📉" : aU + " voted with " + (aT.value + 1) + " gold for " + aa + " to strengthen the latter's admin position. 💪" : 1 === aT.ab ? aU + " sent " + Math.floor(aT.value / 100) +
				" 🧈 gold to " + aa + "." : aU + " voted with " + (aT.value / 10).toFixed(1) + " points for " + aa + " to acknowledge the latter as clan leader. ✅") : 2 === aT.id ? 0 === aT.ab ? aU + " was 🔇 muted for 1 Hour." : 1 === aT.ab ?
			"The username of " + aU + " was ✂️ redacted. Duration: 1 Day" : aU + " 👢 was kicked." : 3 === aT.id ? aU + ac.ad(aT.ab, ac.ae[aT.ab][aT.value]) + "@" + aV.aW.aX(aT.target, 5) + ac.af(aT.ab, ac.ae[aT.ab][aT.value]) : 4 === aT.id ?
			aU + ac.ad(5, ac.ae[5][aT.ab]) + "@" + aV.aW.aX(aT.target, 5) + ac.af(5, ac.ae[5][aT.ab]) : 5 === aT.id ? aR[aT.ab] : 6 === aT.id ? "You are about to mention " + aT.value + " player" + (1 === aT.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * aT.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aT.id ? aT.aZ : void 0
	}, this.ag = function(aT, ah) {
		return {
			aT: aT,
			aZ: ah,
			ai: 0,
			fontSize: 1,
			aj: 0,
			ak: aT.id ? aG.al : aG.am
		}
	}, this.an = function(player, ao) {
		return (2 === ao ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.ap = function(aq) {
		return aF[aq]
	}, this.ar = function(aq, at) {
		return aq < 3 || 7 === aq ? aQ[aq][0] : 4 === aq ? aQ[aq][at < 1 ? 0 : at < 10 ? 1 : 2] : aQ[aq][at < 10 ? 0 : 1]
	}, this.au = function(at) {
		return 0 === at
	}, this.av = function(ao, aY) {
		for (var aw = ax.ay.aw, ay = aw[ao], az = ay.length, b0 = 0; b0 < az; b0++)
			if (aY === ay[b0].aY) return ay[b0];
		for (var b1 = 0; b1 < aw.length; b1++)
			if (ao !== b1)
				for (az = (ay = aw[b1]).length, b0 = 0; b0 < az; b0++)
					if (aY === ay[b0].aY) return ay[b0];
		return null
	}, this.b2 = function(b3) {
		return !!ax.b4 && b3.aY === ax.b4.aY
	}, this.b5 = function(ay, b6, b7) {
		var b8 = [];
		loop: for (var b0 = b6; b0 < b7; b0++) {
			var b9 = bA.bB.bC(ay[b0].username);
			if (b9) {
				for (var b1 = b8.length - 1; 0 <= b1; b1--)
					if (b9 === b8[b1].name) {
						b8[b1].bD++;
						continue loop
					} b8.push({
					name: b9,
					bD: 1
				})
			}
		}
		if (b8.sort(function(bE, b1) {
				return b1.bD - bE.bD
			}), 0 === b8.length) return "";
		for (var bF = b8[0].name + ": " + b8[0].bD, b0 = 1; b0 < b8.length; b0++) bF += "   " + b8[b0].name + ": " + b8[b0].bD;
		return bF
	}, this.bG = function(aq, at, bH) {
		return 0 === aE[aq].length ? "Rank: " + (at + 1) : aE[aq] + " Rank: " + (at + 1) + (3 !== aq && bH < 100 ? "   " + aE[3] + " Rank: " + (bH + 1) : "")
	}, this.bI = function(aY) {
		for (var bJ = ax.u.bJ, b0 = 0; b0 < bJ.length; b0++) bK(bJ[b0].bL, aY);
		bK(ax.message.bM(), aY, 1), ax.bN.bI(aY)
	}
}

function bQ() {
	this.bR = !1, this.bS = function() {
		bT.bU() % 250 != 249 || c.bV || (bW.bX.bY(+(this.bR && z.bZ[c.ba]), bc.bd + t.u.v), this.bR = !1)
	}
}

function be() {
	var bf = 0,
		bg = "",
		bh = 0,
		bi = 0,
		bj = 0;

	function bm(ah) {
		bW.by.bz(3, ah)
	}

	function bw(bD) {
		bf = 1, ax.message.c0({
			id: 6,
			value: bD
		})
	}

	function bp(aZ) {
		var cF = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return aZ.match(cF)
	}
	this.bk = function(aZ) {
		var bl, bq, bs;
		if (bf) return bf = 0, "yes" === (bl = aZ.toLowerCase()) || "y" === bl ? void bm(bg) : void ax.message.c0({
			id: 5,
			ab: 7
		});
		!(aZ.indexOf("@") < 0) && (bl = bp(aZ)) ? (bg = aZ, bq = function(bo) {
			for (var az = bo.length, c2 = [0, 0, 0, 0], b0 = 0; b0 < az; b0++)
				for (var c1 = bo[b0], bE = 0; bE < 4; bE++) c1 === "@room" + (bE + 1) && (c2[bE] = 1);
			if ((bi = bA.c3.c4(c2)) % 4 == 0) return bA.c3.c5(ax.ay.aw);
			for (bE = 0; bE < 4; bE++) c2[bE] = c2[bE] ? ax.ay.aw[bE] : [];
			return bA.c3.c5(c2)
		}(bl), function(bo, bs, aZ) {
			if (!bh) return;
			for (var az = bs.length, b0 = 0; b0 < az; b0++) 2 === bs[b0].id && (aZ = aZ.replace(bo[bs[b0].cE], "@" + bs[b0].c8));
			return bf = 1, bm((bg = aZ).slice(0, 126) + "|"), 1
		}(bl, bs = function(bo) {
			for (var bs = [], az = (bj = bh = 0, bo.length), b0 = 0; b0 < az; b0++) {
				var c1 = bo[b0],
					c6 = c1.length;
				bA.bB.startsWith(c1, "@[") ? c6 <= 9 && bA.bB.c7(c1, "]") && bs.push({
					id: 0,
					c8: c1.substring(2, c6 - 1).toUpperCase()
				}) : 6 === c6 ? bA.bB.startsWith(c1, "@room") || (bj++, bs.push({
					id: 1,
					c8: c9.aW.cA(c1.substring(1), 5)
				})) : 1 < c6 && c6 < 5 && 0 <= (c6 = cC.data.cD(c1.substring(1))) && (bs.push({
					id: 2,
					c8: c6,
					cE: b0
				}), bh = 1)
			}
			return bs
		}(bl), aZ) || (0 === bs.length ? bi || function(bo) {
			for (var az = bo.length, b0 = 0; b0 < az; b0++) {
				var c1 = bo[b0];
				if ("@all" === c1 || "@everyone" === c1) return 1
			}
			return
		}(bl) ? bw(bq.length) : bm(aZ) : bl.length === bj ? bm(aZ) : (function(bq, bs) {
			var c6 = bs.length;
			if (0 === c6) return;
			var az = bq.length;
			loop: for (var b0 = az - 1; 0 <= b0; b0--) {
				for (var bE = 0; bE < c6; bE++)
					if (0 === bs[bE].id) {
						if (bs[bE].c8 === bA.bB.bC(bq[b0].username)) continue loop
					} else if (1 === bs[bE].id && bs[bE].c8 === bq[b0].aY) continue loop;
				bq[b0] = bq[--az], bq.pop()
			}
		}(bq, bs), bw(bq.length)))) : bm(aZ)
	}, this.cG = function(aZ) {
		var bo = bp(aZ);
		if (bo)
			for (var cH = new RegExp("^[0-9]+$"), az = bo.length, b0 = 0; b0 < az; b0++) {
				var c1 = bo[b0].substring(1),
					c6 = c1.length;
				1 <= c6 && c6 <= 3 && cH.test(c1) && (c6 = parseInt(c1, 10), !isNaN(c6)) && 0 <= c6 && c6 < cC.data.bq.length && (aZ = aZ.replace("@" + c1, "@" + cC.data.bq[c6]))
			}
		return aZ
	}
}

function cI() {
	this.cJ = function(cE) {
		if ((cK = ax.ay.cK[cE]) < 2) return !1;
		var cL = ax.u.bJ[cE],
			cM = 9 === cL.cN ? 333 : 512,
			cK = Math.min(cK, cM);
		8 === cL.cN && (cK -= cK % 2);
		cM = ax.ay.aw[cE].splice(0, cK), ax.ay.cK[cE] -= cK, cK = function(cO) {
			if (ax.b4)
				for (var az = cO.length, aY = ax.b4.aY, b0 = 0; b0 < az; b0++)
					if (cO[b0].aY === aY) return b0;
			return -1
		}(cM);
		return -1 === cK ? (ax.ay.cR = ax.ay.cR.concat(cM), 1e3 < ax.ay.cR.length && ax.ay.cR.splice(0, ax.ay.cR.length - 1e3), ax.u.cS += 29 === cT.cU && ax.u.cV[0] === cE && 1 === ax.u.cV[2], !1) : (8 === cL.cN && (cL.cW = (cL.cW + (cK >> 1)) %
			1024, cE = cK - cK % 2, cK %= 2, cM = cM.slice(cE, 2 + cE)), cY.b(cL, cM, cK), !0)
	}, this.cZ = function(cL, cO, cP) {
		var ca = c.data = new cb,
			ch = (ca.spawningSeed = cL.spawningSeed, cL.cN < 7 ? (ca.gameMode = 1, ca.numberTeams = cL.cN + 2) : 9 === cL.cN ? (ca.gameMode = ca.isZombieMode = 1, ca.numberTeams = 2) : (ca.gameMode = 0, ca.battleRoyaleMode = 7 === cL.cN ? 0 :
				10 === cL.cN ? 1 : 2), ca.selectedPlayer = cP, ca.isContest = cL.cc, ca.mapType = cd.ce(cL.cf) ? 0 : 1, cd.cg(ca, cL.cf), ca.mapSeed = cL.mapSeed, ca.humanCount = cO.length);
		ca.selectableSpawn = 1 === ca.gameMode || ch < 100, ca.colorsData = new Uint32Array(ch), ca.playerNamesData = new Array(ch), ca.ci = new Uint32Array(ch);
		for (var b0 = 0; b0 < ch; b0++) ca.colorsData[b0] = cO[b0].color, ca.playerNamesData[b0] = cO[b0].username, ca.ci[b0] = cO[b0].aY;
		if (2 === ca.battleRoyaleMode)
			for (ca.elo = new Uint16Array(ch), b0 = 0; b0 < ch; b0++) ca.elo[b0] = cO[b0].elo;
		cj.setState(8), cd.ck(cL.cf, ca.mapSeed), c.cl(), c.cm = 2
	}
}

function cn() {
	this.co = function() {
		cp.ck(39), cp.cq(1, 0), cp.cq(6, 16), bW.bX.cr(), bW.u.send(0, cp.cs)
	}, this.ct = function(cu) {
		cp.ck(127), cp.cq(1, 0), cp.cq(6, 17), c9.aW.cx(cy.cz.data[105].value, 5), c9.aW.cx(cy.cz.data[106].value, 15), bW.u.send(cu, cp.cs)
	}, this.cw = function() {
		cp.ck(97), cp.cq(1, 0), cp.cq(6, 18), c9.aW.cx(cy.cz.data[110].value, 15), bW.u.send(0, cp.cs)
	}, this.d0 = function(d1) {
		var az = d1.bF.length;
		cp.ck(21 + 16 * az), cp.cq(1, 0), cp.cq(6, 29), cp.cq(6, d1.d2), cp.cq(8, az), aV.d3.d4(d1.bF), bW.u.send(0, cp.cs)
	}, this.d5 = function(d6, colors, d7, d8) {
		d9.b(), d9.cq(1, 0), d9.cq(6, 16), d9.cq(20, Math.min(d6, 1e6));
		for (var b0 = 0; b0 < 11; b0++)
			for (var bE = 0; bE < 3; bE++) d9.cq(8, colors[b0][bE]);
		d6 = cC.data.cD(d7.trim());
		d9.cq(8, -1 === d6 ? 255 : d6), aV.dB.dC(d8.trim().substring(0, 180), 8, d9), bW.u.send(0, d9.dD())
	}, this.dE = function(data) {
		cp.ck(43), cp.cq(1, 0), cp.cq(6, 25), cp.cq(6, data.d2), c9.aW.cx(data.aY, 5), bW.u.send(0, cp.cs)
	}, this.dF = function(data) {
		cp.ck(75), cp.cq(1, 0), cp.cq(6, 27), cp.cq(6, data.d2), c9.aW.cx(data.aY, 5), cp.dG(32, data.value), bW.u.send(0, cp.cs)
	}
}

function dH() {
	var dI, dJ = !1,
		dK = !1,
		dL = -1e4,
		dM = -1,
		dN = 0;

	function resize(df) {
		dI = 0, dg.dh() && (dW(df) || dJ) && (dJ = !1, di.resize(), dj.dk.resize(), dl.b(), dm.b(), dn.resize(), dp.resize(), dq.resize(), cT.resize(), 1 <= c.dr ? (ds.resize(!1), dt.resize(), du.resize(), dv.resize(), dw.resize(), e.resize(), dx
			.resize(), dy.resize(), dz.resize(), e0.resize(), e1.resize(), e2.resize(), e3.resize(), e4.resize(), e5.resize(), e6.resize(), dv.e7()) : (cj.e8(), cj.e9()), bT.eA = !0)
	}

	function dU(c8) {
		return c8 && 128 < c8 ? Math.floor(c8) : 128
	}

	function dW(df) {
		var c1, dO, eC, eF, eG;
		if (!(0 < eE.dS)) return eF = dU(document.documentElement.clientWidth), eG = dU(window.visualViewport && 2 !== dY.id ? window.visualViewport.height : document.documentElement.clientHeight), c1 = eF, dO = eG, eC = 0 !== dY.id || c1 < dO ?
			700 : 1200, eC = Math.min(eC / ((c1 + dO) / 2), 1), eC = 0 === cy.cz.data[1].value ? 2 * eC / 3 : Math.min(eC + (cy.cz.data[1].value - 1) * (1 - eC) / 2, 1), eE.dR = (window.devicePixelRatio || 1) * eC, __fx.hoveringTooltip
			.canvasPixelScale = eE.dR, df && !dK ? (dK = !0, cT.removeChild(document.body, dX)) : dK && (dK = !1, document.body.appendChild(dX)), c1 = Math.floor(.5 + eF * eE.dR), dO = Math.floor(.5 + eG * eE.dR), c1 !== eE.c1 || dO !== eE.dO ? (
				eE.c1 = c1, eE.dO = dO, eE.min = eJ(c1, dO), eE.max = eK(c1, dO), eE.dP = p.eL(c1 + dO, 2), eE.dQ = c1 / dO, dX.width = c1, dX.height = dO, dX.style.width = eF + "px", dX.style.height = eG + "px", dM = bT.db + 1e3, 1) : void 0
	}
	this.c1 = 0, this.dO = 0, this.min = 0, this.max = 0, this.dP = 0, this.dQ = 1, this.dR = 1, this.dS = 0, this.dT = function() {
		this.c1 = dU(document.documentElement.clientWidth) + 2, this.dO = dU(document.documentElement.clientHeight) + 2
	}, this.b = function() {
		dI = 1, dX = document.getElementById("canvasA"), 2 === dY.id && (dX.style.webkitUserSelect = "none"), (dZ = dX.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, dW(0)
	}, this.bS = function() {
		50 <= ++dI && resize(0), -1 === dM || bT.db < dM || (dN++, dM = -1, bT.db + 8e3 <= 2e3 * dN ? console.log("error 3748") : dY.dc.setState(15))
	}, this.dd = function(i) {
		dJ = !0, resize(i)
	}, this.de = function() {
		dL + 1e3 > bT.db || (dL = bT.db, resize(0))
	}
}

function eM() {
	this.eN = function() {
		for (var id = eO.eP(20), colors = new Array(11), b0 = 0; b0 < 11; b0++) colors[b0] = new Uint8Array([eO.eP(8), eO.eP(8), eO.eP(8)]);
		var d8 = c9.dB.eQ(8);
		eR.eS.eT({
			id: id,
			colors: colors,
			d8: d8
		})
	}, this.eU = function(cu) {
		var ca = eO.eP(5),
			ca = eW.eX.eY(ca, eO.eP(30), eO.eP(30), eO.eP(30));
		bW.bX.eZ(cu, ca)
	}, this.ea = function(cu) {
		var ed, eV, ee;
		eO.eb(165) ? (ed = eO.eP(3), eV = eW.eX.bS(eO.eP(30), eO.eP(30)), ee = eW.eX.eY(eO.eP(5), eO.eP(30), eO.eP(30), eO.eP(30)), bW.bX.ef(cu, eV, ee, ed), 0 < ed || (0 === cu && 0 === cy.cz.data[105].value.length ? bW.bX.eg(0) : bW.eh.ct(cu),
			4 === bW.u.ei(cu).ej() ? 6 === cj.ek() && bW.by.el(cu) : 5 !== bW.u.ei(cu).ej() || 8 !== cj.ek() && 10 !== cj.ek() || bW.em.en())) : bW.u.ec(cu, 3269)
	}, this.eo = function(cu) {
		var id = eO.eP(6);
		1 === id ? (cy.ep.eq(160, eO.eP(30)), bW.u.er(cu), dp.es || bW.bX.eg(1), cC.et(), 8 === cT.cU && cT.eu().ev()) : 21 === id ? 8 === cT.cU && cT.eu().ew(17) : 22 === id && (cy.ep.eq(106, cy.cz.data[110].value), cy.ep.eq(110, ""), 8 === cT
			.cU) && cT.eu().ew(15)
	}, this.ex = function() {
		var az = eO.eP(16),
			ey = eO.eP(16);
		if (eO.eb(55 + 10 * az + 16 * ey)) {
			for (var bq = [], b0 = 0; b0 < az; b0++) bq.push(c9.d3.ez(eO.eP(10)));
			cC.f0(bq)
		} else bW.u.ec(0, 3270)
	}
}

function f1() {
	this.f2 = null, this.f3 = null, this.f4 = null, this.b = function() {
		var f5 = [120, 105, 92],
			cos = [12, 12, 60],
			f6 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			f7 = [140, 130, 120],
			f8 = [12, 12, 76],
			f9 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			fA = [130, 117, 106],
			fB = [12, 12, 68],
			fC = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.f2 = new Array(cd.fD + 1), this.f2[0] = {
			name: L(0),
			c1: 230,
			dO: 230,
			fE: 1e3,
			fF: 2e3,
			fG: 173
		}, this.f2[1] = {
			name: L(1),
			c1: 800,
			dO: 800,
			fE: 100,
			fF: 50,
			fG: 43
		}, this.f2[2] = {
			name: L(2),
			c1: 512,
			dO: 512,
			fE: 128,
			fF: 32,
			fG: 0
		}, this.f2[3] = {
			name: L(3) + " 1",
			c1: 960,
			dO: 960,
			fE: 60,
			fF: 8,
			fG: 0
		}, this.f2[4] = {
			name: L(4),
			c1: 900,
			dO: 900,
			fE: 100,
			fF: 5,
			fG: 0
		}, this.f2[5] = {
			name: L(5),
			c1: 1e3,
			dO: 1e3,
			fE: 100,
			fF: 40,
			fG: 0
		}, this.f2[6] = {
			name: L(6),
			c1: 1e3,
			dO: 1e3,
			fE: 100,
			fF: 20,
			fG: 0
		}, this.f2[7] = {
			name: L(7),
			c1: 1024,
			dO: 1024,
			fE: 128,
			fF: 32,
			fG: 0
		}, this.f2[8] = {
			name: L(8),
			c1: 820,
			dO: 820,
			fE: 200,
			fF: 100,
			fG: 0
		}, this.f2[9] = {
			name: L(9),
			c1: 1024,
			dO: 1024,
			fE: 128,
			fF: 32,
			fG: 0
		}, this.f2[10] = {
			name: L(10),
			fH: f7,
			fI: f8,
			fJ: f9
		}, this.f2[11] = {
			name: L(11),
			fH: fA,
			fI: fB,
			fJ: fC
		}, this.f2[12] = {
			name: L(12),
			fH: fA,
			fI: fB,
			fJ: fC
		}, this.f2[13] = {
			name: L(13),
			fH: f5,
			fI: cos,
			fJ: f6
		}, this.f2[14] = {
			name: L(14),
			fH: f5,
			fI: cos,
			fJ: f6
		}, this.f2[15] = {
			name: L(15),
			fH: f7,
			fI: f8,
			fJ: f9
		}, this.f2[16] = {
			name: L(16),
			fH: f7,
			fI: f8,
			fJ: f9
		}, this.f2[17] = {
			name: L(17),
			fH: f5,
			fI: cos,
			fJ: f6
		}, this.f2[18] = {
			name: L(18),
			fH: fA,
			fI: fB,
			fJ: fC
		}, this.f2[19] = {
			name: L(19),
			fH: f5,
			fI: cos,
			fJ: f6
		}, this.f2[20] = {
			name: L(20),
			c1: 1024,
			dO: 1024,
			fE: 128,
			fF: 32,
			fG: 0
		}, this.f2[21] = {
			name: L(3) + " 2",
			c1: 940,
			dO: 940,
			fE: 80,
			fF: 8,
			fG: 0
		}, this.f2[22] = {
			name: L(21),
			fH: fA,
			fI: fB,
			fJ: fC
		}, this.f2[23] = {
			name: L(22),
			fH: f7,
			fI: f8,
			fJ: f9
		}, this.f2[cd.fD] = {
			name: ""
		}, this.f3 = new Uint8Array(12);
		for (var b0 = 0; b0 < 10; b0++) this.f3[b0] = b0;
		for (this.f3[10] = 20, this.f3[11] = 21, this.f4 = new Uint8Array(cd.fK), b0 = 0; b0 < 10; b0++) this.f4[b0] = 10 + b0;
		this.f4[10] = 22, this.f4[11] = 23
	}
}

function fL() {
	this.d4 = function(bF) {
		for (var az = bF.length, c1 = cp, b0 = 0; b0 < az; b0++) c1.cq(16, bF.charCodeAt(b0))
	}
}

function fQ() {
	(fM = void 0 === fM ? document.createElement("canvas") : fM).width = cd.fR, fM.height = cd.fS, fO = fM.getContext("2d", {
		alpha: !0
	}), fP = fN = null, fP = fO.getImageData(0, 0, cd.fR, cd.fS), fN = fP.data, bA.c3.fT(fN)
}

function fU() {
	var canvas, fV, fW, fX, fY, fZ, gap, fa, fontSize, fb, fc, fd, fe, ff, fg, fh, fi, fj;

	function fz() {
		fV.clearRect(0, 0, du.c1, du.dO), fV.fillStyle = aG.g6, fV.fillRect(0, 0, du.c1, du.dO), fV.fillStyle = aG.g7, g5 = 0 < fh ? fh : fe[4] / 1e4, fV.fillRect(0, du.dO - fY - 1, Math.floor(g5 * du.c1), fY), fV.fillStyle = aG.am, fV.fillRect(0, 0,
			du.c1, 1), fV.fillRect(0, 0, 1, du.dO), fV.fillRect(du.c1 - 1, 0, 1, du.dO), fV.fillRect(0, du.dO - 1, du.c1, 1), fV.fillRect(0, du.dO - fY - 1, du.c1, 1);
		for (var g5, g9, g8 = 0, b0 = 0; b0 < fd.length; b0++) ff[b0] ? (bA.fu.textAlign(fV, 0), g9 = Math.floor((fZ - fY + 2 * fa) * (b0 - g8 + 1) / (fd.length + 1) - .7 * fa), fV.fillText(fd[b0], gap, g9), bA.fu.textAlign(fV, 2), 5 === b0 && 0 !==
			z.bZ[c.ba] && z.gA[c.ba] >= gB.gC(c.ba) ? (fV.fillStyle = aG.gD, fV.fillText(fr(b0), du.c1 - gap, g9), fV.fillStyle = aG.am) : fV.fillText(fr(b0), du.c1 - gap, g9)) : g8++
	}

	function fr(b0) {
		return b0 < 3 ? fe[b0].toString() : 3 === b0 || 4 === b0 || 5 === b0 ? bA.bB.gE(fe[b0] / 100, 2) : b0 < 7 ? bA.bB.aX(fe[b0]) : b0 === 7 ? du.gF(fe[7]) : b0 === 8 ? __fx.utils.getMaxTroops(z.fo, c.ba) : __fx.utils.getDensity(c.ba)
	}

	function fq() {
		z.fo[c.ba] !== fe[6] && (fe[6] = z.fo[c.ba], fb++)
	}
	this.b = function() {
		fh = fi = 0, (fc = new Array(8))[0] = L(23), fc[1] = c.fk ? L(24) : L(25), fc[2] = L(26), fc[3] = L(27), fc[4] = L(28), fc[5] = L(29, 0, "Interest"), fc[6] = L(30), fc[7] = L(31),
			fc.push("Max Troops", "Density"), // add fc
			(fd = new Array(fc.length)).fill(""), (fe = new Array(fc.length))[0] = c.fk ? 0 : c.fl, fe[1] = c.fk ? bc.bd : c.fm, fe[2] = c.fn, fe[3] = 0, fe[4] = p.eL(1e4 * z.fo[0], Math.max(c.fp, 1)), fe[5] = 0 === c.data.iIncomeType ? 700 :
			1 === c.data.iIncomeType ? p.eL(700 * c.data.iIncomeValue, 64) : p.eL(700 * c.data.iIncomeData[c.ba], 64), fe[6] = 0, fq(), fe[7] = 0, fg = fr(6), (ff = new Array(fc.length)).fill(!0), fj = 0, fj = c.fk ? (ff[0] = !1, ff[2] = !1, ff[
				3] = !1, 3) : (ff[3] = !1, 1), fb = 0, this.resize()
	}, this.resize = function() {
		this.c1 = Math.floor((dY.dc.fs() ? .1646 : .126) * 1.25 * eE.dP), this.dO = Math.floor(1.18 * this.c1), fY = Math.floor(.04 * this.c1), gap = Math.floor(.035 * this.c1), fa = .04 * this.c1, fZ = this.dO, this.dO -= Math.floor(fj * (this
			.dO - 2 * fY) / fc.length), fontSize = Math.floor(.7 * (fZ - fY) / fc.length);
		var ft = bA.fu.fv(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.c1, canvas.height = this.dO,
			function(ft, c1) {
				for (var b0 = 0; b0 < fd.length; b0++) fd[b0] = bA.fV.g0(fc[b0], ft, c1)
			}((fV = canvas.getContext("2d", {
				alpha: !0
			})).font = ft, .575 * this.c1), bA.fu.textBaseline(fV, 1), fV.lineWidth = 1, this.fx(), this.fy(), dt.fy(), fz()
	}, this.fy = function() {
		fW = eE.c1 - this.c1 - di.gap
	}, this.g1 = function() {
		fX = di.gap
	}, this.fx = function() {
		fX = di.gap + (dt.g2() && 0 !== z.bZ[c.ba] && !c.g3 ? dt.dO + di.gap : 0)
	}, this.g4 = function(dJ) {
		(dJ || 100 <= fb) && (fb = 0, fz())
	}, this.gG = function() {
		return fe[7]
	}, this.gF = function(value) {
		var c6 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * c6) / 1e3);
		return value < 10 ? c6 + ":0" + value : c6 + ":" + value
	}, this.bS = function() {
		var ge, per;
		ff[0] && c.gO - c.fn !== fe[0] && (fe[0] = c.gO - c.fn, fb++), bc.bd - fe[0] !== fe[1] && (fe[1] = bc.bd - fe[0], fb++), this.gJ(), (ge = gB.gf(c.ba)) !== fe[5] && (fe[5] = ge, fb++), fq(), fe[7] += bT.gg, ge = fr(7), fg !== ge && (fg =
			ge, fb += 100), ge = c.gQ ? e6.gR() : z.fo[gS[0]], per = p.eL(1e4 * ge, Math.max(c.fp, 1)), fe[3] = ge, fe[4] !== per && (fb++, fe[4] = per), 8 === c.d && function() {
			for (var b0 = 0; b0 < 2; b0++)
				if (!bA.gc.gd(b0)) return gX.gY.gZ(), 1;
			return
		}() || fe[3] < c.fp || ! function() {
			for (var b0 = bc.bd - 1; 0 <= b0; b0--)
				if (0 < z.ga[bc.gb[b0]].length) return;
			return 1
		}() || t.a6.gW().length || c.gQ && e6.gR(1) < c.fp || gX.gY.gZ()
	}, this.gJ = function() {
		ff[2] && c.fn !== fe[2] && (fe[2] = c.fn, fb += 2 === c.dr ? 100 : 1)
	}, this.gT = function() {
		return fe[3] === c.fp
	}, this.gh = function(b0) {
		var gi, gj, g8;
		return 2 !== c.dr && (b0 % 2 == 1 && (ds.g4(1, 1), bT.eA = !0), b0 === c.gk ? (fh = 0, fz(), !1) : (-1 !== b0 || 0 !== fi) && (gj = fh, fh = c.bV ? b0 / c.gk : (g8 = performance.now(), 0 <= b0 && (gi = g8 - 392 * b0, fi = 0 === b0 || gi <
			fi ? gi : fi), 1 < (fh = (g8 - fi) / (392 * c.gk)) ? 1 : fh), fz(), fh !== gj))
	}, this.gl = function() {
		dZ.drawImage(canvas, fW, fX)
	}
}

function gm() {
	this.b = function() {
		if (0 === c.data.sResourcesType) {
			for (var gs = c.fl, gA = z.gA, b0 = 0; b0 < gs; b0++) gA[b0] = 512;
			var gt = c.gu,
				gv = gw.gv,
				gx = gw.gx;
			for (b0 = gs; b0 < gt; b0++) gA[b0] = gv[gx[b0]]
		} else(1 === c.data.sResourcesType ? function() {
			for (var az = c.gu, gA = z.gA, sResourcesValue = c.data.sResourcesValue, b0 = 0; b0 < az; b0++) gA[b0] = sResourcesValue
		} : function() {
			for (var az = c.gu, gA = z.gA, sResourcesData = c.data.sResourcesData, b0 = 0; b0 < az; b0++) gA[b0] = sResourcesData[b0]
		})();
		gq.gr[8] = z.gA[c.ba]
	}
}

function gy() {
	this.eQ = function(gz) {
		for (var h0 = eO, size = h0.eP(gz), h1 = 7 + 9 * h0.eP(1), bq = [], b0 = 0; b0 < size; b0++) bq.push(String.fromCharCode(h0.eP(h1)));
		return bq.join("")
	}
}

function h2() {
	var c8, c1, dO, max, h3, fF, h5, h6, h7, h8, h9, hA, hB, hC, h4 = 1e4;

	function hM(hK, fE, az) {
		var b0;
		for (h5[0] = hK, b0 = 1; b0 < az; b0++) h5[b0] = h5[b0 - 1] + fE, fE = h5[b0] >= h4 ? (h5[b0] = h4 - 1, -fE) : h5[b0] < 0 ? (h5[b0] = 0, -fE) : (fE += 16384 <= hL.random() ? fF : -fF) < -h3 ? -h3 : h3 < fE ? h3 : fE
	}

	function hO(fW, fX, hP, az) {
		(hP ? function(fW, fX, az) {
			var b0;
			for (b0 = 0; b0 < az; b0++) c8[fX * c1 + fW + b0] = h5[b0]
		} : function(fW, fX, az) {
			var b0;
			for (b0 = 0; b0 < az; b0++) c8[fX * c1 + fW + b0 * c1] = h5[b0]
		})(fW, fX, az)
	}

	function hS(value, az) {
		var b0, hT, g5, i = value - h5[az - 1];
		if (0 != i) {
			for (hT = 1 + p.eL(Math.abs(i), az - 1), hT = i < 0 ? -hT : hT, h5[az - 1] = value, g5 = (g5 = az - 1 - p.eL(Math.abs(i), Math.abs(hT))) < 1 ? 1 : az - 2 < g5 ? az - 2 : g5, b0 = az - 2; g5 <= b0; b0--) h5[b0] += i - (az - 1 - b0) * hT;
			(i < 0 ? function(az) {
				var b0;
				for (b0 = az - 2; 1 <= b0; b0--) h5[b0] < 0 && (h5[b0] = -h5[b0] - 1)
			} : function(az) {
				var b0;
				for (b0 = az - 2; 1 <= b0; b0--) h5[b0] >= h4 && (h5[b0] = 2 * h4 - h5[b0] - 1)
			})(az)
		}
	}

	function hW(hX, hY, az) {
		for (var b0 = 0; b0 < az; b0++) hX[b0] = hY[b0]
	}

	function hZ(bq) {
		for (var b0 = 0; b0 < bq.length - 1; b0++) bq[b0] = bq[b0 + 1] - bq[b0];
		bq[bq.length - 1] = bq[bq.length - 3]
	}

	function ha(hb, gap, hc) {
		h6.push(hb), h7.push(gap), h8.push(hc)
	}
	this.ck = function(d1) {
		! function(d1) {
			var b0;
			for (c1 = d1[0], dO = d1[1], h3 = d1[2], fF = d1[3], c8 = new Int16Array(c1 * dO), max = dO < c1 ? c1 : dO, h5 = new Int16Array(max), h6 = [], h7 = [], h8 = [], h9 = new Array(c1), hA = new Array(dO), b0 = c1 - 1; 0 <= b0; b0--) h9[
				b0] = !1;
			for (b0 = dO - 1; 0 <= b0; b0--) hA[b0] = !1;
			hB = new Int16Array(c1), hC = new Int16Array(dO)
		}(d1),
		function(az) {
			var hK = hL.random() % h4,
				fE = hL.random() % (2 * h3 + 1) - h3;
			hM(hK, fE, az)
		}(max), hW(hC, h5, dO), hO(0, 0, !0, c1);
		var fW, fX, d1 = c8[0],
			az = max,
			fE = hL.random() % (2 * h3 + 1) - h3;
		for (hM(d1, fE, az), hW(hB, h5, c1), hO(0, 0, !1, dO), hZ(hB), hZ(hC), hM(c8[c1 - 1], hB[c1 - 1], dO), hO(c1 - 1, 0, !1, dO), hM(c8[c1 * (dO - 1)], hC[dO - 1], c1), hS(c8[c1 * dO - 1], c1), hO(0, dO - 1, !0, c1), h9[c1 - 1] = h9[0] = !0,
			hA[dO - 1] = hA[0] = !0, ha(0, c1, !0), ha(0, dO, !1), ! function() {
				var he, hb;
				for (;;) {
					if (he = function() {
							var b0, he = h6.length - 1;
							for (b0 = he - 1; 0 <= b0; b0--) h7[b0] > h7[he] && (he = b0);
							return he
						}(), h7[he] < 5) return;
					hb = h6[he] + p.eL(h7[he], 2), (h8[he] ? function(fW) {
						var az, hh, b0, hi = 0,
							hj = 0;
						for (; hj < dO - 1;) {
							for (b0 = hi + 1; b0 < dO; b0++)
								if (hA[b0]) {
									hj = b0;
									break
								} az = hj - hi + 1, hM(c8[fW + c1 * hi], 0 === hi ? hB[fW] : h5[hh - 1] - h5[hh - 2], az), hS(c8[hj * c1 + fW], az), hO(fW, hi, !1, az), hh = az, hi = hj
						}
						h9[fW] = !0
					} : function(fX) {
						var az, hh, b0, hi = 0,
							hj = 0;
						for (; hj < c1 - 1;) {
							for (b0 = hi + 1; b0 < c1; b0++)
								if (h9[b0]) {
									hj = b0;
									break
								} az = hj - hi + 1, hM(c8[fX * c1 + hi], 0 === hi ? hC[fX] : h5[hh - 1] - h5[hh - 2], az), hS(c8[fX * c1 + hj], az), hO(hi, fX, !0, az), hh = az, hi = hj
						}
						hA[fX] = !0
					})(hb), ha(hb, h6[he] + h7[he] - hb, h8[he]), h7[he] = hb - h6[he] + 1
				}
			}(), fW = 0; fW < c1; fW++)
			if (!h9[fW])
				for (fX = 0; fX < dO; fX++) hA[fX] || ! function(fW, fX) {
					var value = c8[fX * c1 + fW - 1] + c8[(fX - 1) * c1 + fW],
						hl = 2;
					h9[fW + 1] && (hl++, value += c8[fX * c1 + fW + 1]);
					hA[fX + 1] && (hl++, value += c8[(fX + 1) * c1 + fW]);
					c8[fX * c1 + fW] = p.eL(value, hl)
				}(fW, fX)
	}, this.hH = function() {
		return c8
	}, this.hI = function() {
		c8 = null
	}
}

function hm() {
	var hn, ho, hp, i2;

	function ht() {
		hx(), 2 !== c.data.tIncomeType && (c.data.tIncomeData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		2 === c.data.tIncomeType && bA.c3.i0(hp.i1(), c.data.tIncomeData, 255)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(32), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), i6.i9(new iA({
			iB: [L(35), L(36), L(37)],
			value: c.data.tIncomeType
		}, function(cE) {
			hx(), 2 !== cE || c.data.tIncomeData || (c.data.tIncomeData = new Uint8Array(c.iC), c.data.tIncomeData.fill(32)), c.data.tIncomeType = cE, cT.iD(26)
		})), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6;
		1 === c.data.tIncomeType && ((i6 = new i7).i8("Value"), i6.iE(new iF({
			cE: -1,
			value: c.data.tIncomeValue
		}, 1, 0, function(iG) {
			var value = p.q(Math.floor(iG.target.value), 0, 255);
			iG.target.value = c.data.tIncomeValue = value
		})), i2.push(i6))
	}(i2), function(i2) {
		var i6;
		2 === c.data.tIncomeType && ((i6 = new i7).i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.tIncomeData, 4)), i6.iE(hp), i2.push(i6))
	}(i2), i2))
}

function iO() {
	var iP, iQ, iR, iS, iT, iU, colors = [0, 0, 0],
		iV = -1;

	function ii(b0) {
		var il = iQ.fX + b0 * (di.gap + iU);
		dZ.fillStyle = "rgb(" + (0 === b0 ? 150 : 2 === b0 ? 30 : 0) + "," + (1 === b0 ? 130 : 2 === b0 ? 30 : 0) + "," + (2 === b0 ? 220 : 0) + ")", dZ.fillRect(iS, il, colors[b0] * iT, iU), dZ.strokeStyle = aG.am, dZ.strokeRect(iS, il, iT, iU), dZ
			.fillStyle = aG.am, dZ.font = bA.fu.fv(0, .32 * iU), bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 0), dZ.fillText(L(0 === b0 ? 40 : 1 === b0 ? 41 : 42) + iY(b0), iS + di.gap, il + .53 * iU)
	}

	function iY(b0, im) {
		return im = im || 256, p.q(Math.floor(im * colors[b0]), 0, im - 1)
	}

	function ir(ip, iq) {
		return !(ip < iS || iq < iQ.fX || ip > iQ.fW + iQ.c1 || iq > iQ.fX + iQ.dO)
	}
	this.show = function() {
		var c8 = cy.cz.data[121].value;
		colors[0] = (c8 >> 12) / 63, colors[1] = (c8 >> 6 & 63) / 63, colors[2] = (63 & c8) / 63, iP.show(), this.resize()
	}, this.iK = function() {
		cy.ep.eq(121, (iY(0, 64) << 12) + (iY(1, 64) << 6) + iY(2, 64)), iP.iK()
	}, this.resize = function() {
		iP.resize(), iQ.resize();
		var dI = eE.dR,
			iZ = iP.ia(),
			ic = (iQ.fX = Math.max(iQ.fX, dI * iZ.ib + di.gap), dI * iZ.ie - 2 * di.gap);
		iQ.dO = Math.min(iQ.dO, ic), iQ.c1 = 2 * iQ.dO, iQ.fX = dI * iZ.ib + .5 * (dI * iZ.ie - iQ.dO), iQ.fW = .5 * (eE.c1 - iQ.c1), iR = .25 * iQ.c1, iS = iQ.fW + iR + di.gap, iT = iQ.c1 - iR - di.gap, iU = (iQ.dO - 2 * di.gap) / 3
	}, this.gl = function() {
		var ij, gi, b1;
		iP.gl(), dZ.lineWidth = di.ig, ij = iY(0), gi = iY(1), b1 = iY(2), dZ.fillStyle = "rgb(" + ij + "," + gi + "," + b1 + ")", dZ.fillRect(iQ.fW, iQ.fX, iR, iQ.dO), dZ.strokeStyle = aG.am, dZ.strokeRect(iQ.fW, iQ.fX, iR, iQ.dO), dZ
			.fillStyle = ij + gi + b1 < 306 && gi < 150 ? aG.am : aG.ik, bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 1), dZ.font = bA.fu.fv(0, .1 * iQ.dO), dZ.rotate(-Math.PI / 2), dZ.fillText(L(39), -iQ.fX - .5 * iQ.dO, iQ.fW + .5 * iR), dZ
			.setTransform(1, 0, 0, 1, 0, 0), ii(0), ii(1), ii(2)
	}, this.io = function(ip, iq) {
		ir(ip, iq) && (iV = p.q(Math.floor((iq - iQ.fX) / (iU + .75 * di.gap)), 0, 2), colors[iV] = p.q((ip - iS) / iT, 0, 1), bT.eA = !0)
	}, this.is = function(ip) {
		-1 !== iV && (colors[iV] = p.q((ip - iS) / iT, 0, 1), bT.eA = !0)
	}, this.it = function(ip, iq, deltaY) {
		ir(ip, iq) && (ip = p.q(Math.floor((iq - iQ.fX) / (iU + .75 * di.gap)), 0, 2), colors[ip] = p.q(colors[ip] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bT.eA = !0)
	}, this.iu = function() {
		0 <= iV && (iV = -1, bT.eA = !0)
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(L(38), [new hs("⬅️ " + L(33), function() {
		cT.u.iW()
	})], !1), iQ = new iX([.5, .25], [.5, .5], 1)
}

function iv() {
	var iw;
	this.b = function() {
		iw = !1
	}, this.bS = function() {
		var j6;
		if (function() {
				if (!iw) {
					if (bT.bU() % 30 != 9) return;
					if (!bA.gc.j2(90)) return;
					iw = !0
				}
				return 1
			}() && (! function() {
				var b3 = e.j3(956);
				if (b3) {
					if (bA.gc.j4(b3.player)) return 1;
					e.j5(956, 0)
				}
				return
			}() && (-1 === (j6 = (c.gQ ? function() {
				var id = e6.jF(),
					az = bc.bd;
				if (jG.jH[id])
					for (var jI = bc.gb, jJ = jG.jJ, b0 = 0; b0 < az; b0++) {
						var j6 = jI[b0];
						if (jJ[j6] !== id) return j6
					} else if (1 < az) return gS[az - 1];
				return -1
			} : function() {
				for (var jB = bc.bd, jC = bc.gb, jD = jE, b0 = 0; b0 < jB; b0++) {
					var j6 = jC[b0];
					if (0 !== jD[j6]) return j6
				}
				return -1
			})()) ? ! function() {
				var b3 = e.j3(957);
				if (b3 && b3.jK) {
					if (aA.jL(b3.jK.jM << 2)) return 1;
					e.j5(957, 0)
				}
				return
			}() : (e.j9(0, L(43, [z.jA[j6]]), 956, j6, aG.am, aG.g6, -1, !0), 0)))) {
			var az = jN.jO.jP;
			if (0 !== az)
				for (var cz = jN.jO.cz, b0 = 0; b0 < az; b0++) {
					var jM = cz[b0];
					if (aA.jL(jM << 2)) return void e.j9(0, L(44, [a8.jQ(jM), a8.jR(jM)]), 957, 0, aG.am, aG.g6, -1, !0, void 0, {
						bE: 1,
						jM: jM
					})
				}
		}
	}
}

function jS() {
	var jT = 0;

	function jc(bF, id) {
		jT || (id ? 1 === id ? e.jY = L(46) + ": " + bF : cT.iD(4, 3, new js(L(47), bF, 1)) : cT.iD(4, 3, new js("⚠️ " + L(45), bF, 1)))
	}
	this.eQ = function(bF, jU) {
		var jt, b3;
		return jT = jU, c9.aW.jV(c9.aW.jW(c9.aW.jX(bF))), e.jY = "", !! function() {
			if (eO.size < 10) jc("File Too Small");
			else {
				var jn = eO.eP(12),
					jp = (jn !== jo.rVersion && jc("Incompatible Version   Required: " + jo.rVersion + ("   Found: " + jn) + ("   Compatible at territorial.io/" + jn), 1), eO.eP(12)),
					jq = eO.eP(31);
				if (jq !== eO.size) jc("Size Error: " + jq + " " + eO.size);
				else if (function(dO, jn) {
						for (var j6 = eO.cs, az = eO.size, jp = jn, b0 = 3; b0 < az; b0++) jp = jp + j6[b0] & 4095;
						return jp === dO || (jc("Hash Error: " + jp + " " + dO + " " + az), !1)
					}(jp, jn)) return 1
			}
			return
		}() && (jt = eO, (b3 = c.data = new cb).mapType = jt.eP(2), b3.mapProceduralIndex = jt.eP(8), b3.mapRealisticIndex = jt.eP(8), b3.mapSeed = jt.eP(14), b3.mapName = jt.ju(5), 2 === b3.mapType && jt.jv(), b3.passableWater = jt.eP(1), b3
			.passableMountains = jt.eP(1), b3.playerCount = jt.eP(10), b3.humanCount = jt.eP(10), b3.selectedPlayer = jt.eP(9), b3.gameMode = jt.eP(1), b3.playerMode = jt.eP(2), b3.battleRoyaleMode = jt.eP(2), b3.numberTeams = jt.eP(4), b3
			.isZombieMode = jt.eP(1), b3.isContest = jt.eP(1), b3.isReplay = jt.eP(1), b3.elo = jt.jw(2, 14, 2), b3.colorsType = jt.eP(1), b3.colorsPersonalized = jt.eP(1), b3.colorsData = jt.jw(10, 18, 512), b3.selectableColor = jt.eP(1), b3
			.teamPlayerCount = jt.jw(4, 10, 9), b3.neutralBots = jt.eP(1), b3.botDifficultyType = jt.eP(2), b3.botDifficultyValue = jt.eP(4), b3.botDifficultyTeam = jt.jw(4, 4, 9), b3.botDifficultyData = jt.jw(10, 4, 512), b3.spawningType =
			jt.eP(2), b3.spawningSeed = jt.eP(14), b3.spawningData = jt.jw(11, 12, 1024), b3.selectableSpawn = jt.eP(1), b3.playerNamesType = jt.eP(2), b3.playerNamesData = jt.jx(10, 5, 512), b3.selectableName = jt.eP(1), b3.aIncomeType = jt
			.eP(2), b3.aIncomeValue = jt.eP(8), b3.aIncomeData = jt.jw(10, 8, 512), b3.tIncomeType = jt.eP(2), b3.tIncomeValue = jt.eP(8), b3.tIncomeData = jt.jw(10, 8, 512), b3.iIncomeType = jt.eP(2), b3.iIncomeValue = jt.eP(8), b3
			.iIncomeData = jt.jw(10, 8, 512), b3.sResourcesType = jt.eP(2), b3.sResourcesValue = jt.eP(11), b3.sResourcesData = jt.jw(10, 11, 512), b3.ci = jt.jw(10, 30, 0), !! function() {
				var jt = eO,
					jy = jt.eP(5),
					jz = jt.eP(30),
					k0 = jt.eP(30);
				if (jz + k0 > 8 * jt.size) return void jc("Corrupted File");
				return function(az) {
						var k3 = new Uint8Array(az),
							k4 = new Uint16Array(az),
							k5 = new Uint32Array(az),
							k6 = new Uint32Array(az);
						jd.je.k7 = k3, jd.je.k8 = k4, jd.je.k9 = k5, jd.je.kA = k6;
						for (var b0 = 0; b0 < az; b0++) {
							var id = eO.eP(4);
							k3[b0] = id, k4[b0] = eO.eP(9), 0 === id ? k5[b0] = eO.eP(22) : 1 === id ? (k5[b0] = eO.eP(10), k6[b0] = eO.eP(10)) : 2 === id ? (k5[b0] = eO.eP(10), k6[b0] = eO.eP(9)) : 3 === id ? (k5[b0] = eO.eP(10), k6[b0] = eO
								.eP(27)) : 4 === id ? (k5[b0] = eO.eP(10), k6[b0] = eO.eP(16)) : 5 === id || 6 === id ? k5[b0] = eO.eP(10) : 7 === id ? k5[b0] = eO.eP(1) : 10 === id && (k5[b0] = eO.eP(20), k6[b0] = eO.eP(22))
						}
					}(jz),
					function(az, jy) {
						var kB = new Uint8Array(az),
							kC = new Array(az);
						kC.fill(0), jd.je.kB = kB, jd.je.kC = kC;
						for (var b0 = 0; b0 < az; b0++) kB[b0] = eO.eP(1), kC[b0] = eO.eP(jy)
					}(k0, jy), 1
			}()) && (eO.cE < 8 * eO.size - 13 || eO.cE > 8 * eO.size ? (jc("Out Of Bounds Error: " + eO.cE + " " + 8 * eO.size), !1) : (jd.je.jf = bF, 2 !== c.data.mapType || (jc("Load base64 image...", 2), jU)))
	}, this.jg = function(jh, ji) {
		var jj = document.createElement("canvas"),
			jk = jj.getContext("2d");
		if (jj.width = jh.width, jj.height = jh.height, jk.drawImage(jh, 0, 0), c.data.canvas = jj, jT || ji) return c.dr ? void 0 : (c.data.mapType = 2, cT.jl(), void cT.iD(19));
		jd.jm()
	}
}

function kD() {
	this.kE = new Int16Array(4), this.kF = new Int16Array(4), this.kG = null, this.b = function() {
		var b0;
		for (this.kE[0] = -cd.fR, this.kE[1] = 1, this.kE[2] = cd.fR, this.kE[3] = -1, this.kG = new Int16Array([-cd.fR, 1 - cd.fR, 1, cd.fR + 1, cd.fR, cd.fR - 1, -1, -cd.fR - 1]), b0 = 0; b0 < 4; b0++) this.kF[b0] = 4 * this.kE[b0]
	}, this.kH = function() {
		return p.q(Math.floor(.15 * (1 + .25 * dY.dc.fs()) * eE.dP / kI), 4, 128)
	}, this.kJ = function(g5, id) {
		for (var kK = this.kF, b0 = 0; b0 < 4; b0++) {
			var kL = g5 + kK[b0];
			if (aA.kM(kL) && aA.kN(kL) === id) return !0
		}
		return !1
	}, this.kO = function(player, g5) {
		return !aA.jL(g5) && player === aA.kP(g5)
	}, this.kQ = function(kR, kS, jM) {
		return (kR -= this.jQ(jM)) * kR + (kS -= this.jR(jM)) * kS
	}, this.kT = function(kU, kV, jt) {
		kU = this.kX(kU) - this.kY(jt), kV = this.ka(kV) - this.kb(jt);
		return Math.sqrt(kU * kU + kV * kV)
	}, this.kc = function(kd, ke) {
		var kW = this.jQ(kd) - this.jQ(ke),
			kd = this.jR(kd) - this.jR(ke);
		return ~~Math.sqrt(kW * kW + kd * kd + .5)
	}, this.kf = function(kd, ke) {
		var kW = this.jQ(kd) - this.jQ(ke),
			kd = this.jR(kd) - this.jR(ke);
		return kW * kW + kd * kd
	}, this.kg = function(kh, ki, kj, kk) {
		return (kh -= kj) * kh + (ki -= kk) * ki
	}, this.kl = function(j6, km) {
		return p.eL(km * z.gA[j6], 1e3)
	}, this.kX = function(kU) {
		return 16 * (kU + kn) / kI
	}, this.ka = function(kV) {
		return 16 * (kV + ko) / kI
	}, this.kp = function(ca) {
		return 16 * ca / kI
	}, this.kq = function(kU) {
		return Math.floor((kU + kn) / kI)
	}, this.kr = function(kV) {
		return Math.floor((kV + ko) / kI)
	}, this.ks = function(kR, kS) {
		return 1 <= kR && 1 <= kS && kR < cd.fR - 1 && kS < cd.fS - 1
	}, this.jQ = function(jM) {
		return jM % cd.fR
	}, this.jR = function(jM) {
		return p.eL(jM, cd.fR)
	}, this.kt = function(kR, kS) {
		return kS * cd.fR + kR
	}, this.ku = function(kR, kS) {
		return 4 * this.kt(kR, kS)
	}, this.kv = function(jM) {
		return this.kw(this.jQ(jM), this.jR(jM))
	}, this.kw = function(kR, kS) {
		return 0 < kR && kR < cd.fR - 1 && 0 < kS && kS < cd.fS - 1
	}, this.a9 = function(jM) {
		return jM << 2
	}, this.kx = function(g5) {
		return g5 >> 2
	}, this.ky = function(jM) {
		return cd.fR * this.jR(jM) * 256 + (this.jQ(jM) << 4)
	}, this.kz = function(jM) {
		return this.ky(jM) + 8 + (cd.fR << 7)
	}, this.l0 = function(jt) {
		return cd.fR * (this.kb(jt) >> 4) + (this.kY(jt) >> 4)
	}, this.l1 = function(jt) {
		jt = this.l0(jt);
		return (this.jQ(jt) >> 5) + t.l2.l3 * (this.jR(jt) >> 5)
	}, this.kY = function(jt) {
		return jt % (cd.fR << 4)
	}, this.kb = function(jt) {
		return p.eL(jt, cd.fR << 4)
	}, this.aC = function(jM, hc) {
		return jM + this.kE[hc]
	}, this.l4 = function(g5, hc) {
		return g5 + this.kF[hc]
	}, this.l5 = function(kd, ke) {
		var kW = this.jQ(ke) - this.jQ(kd),
			ke = this.jR(ke) - this.jR(kd);
		return Math.abs(kW) >= Math.abs(ke) ? 1 + 2 * (kW < 0) : 2 * (0 < ke)
	}, this.l6 = function(player) {
		return this.kt(z.l7[player] + z.l8[player] >> 1, z.l9[player] + z.lA[player] >> 1)
	}, this.lB = function(player) {
		return this.kt(hL.lC(z.l7[player], z.l8[player]), hL.lC(z.l9[player], z.lA[player]))
	}
}

function lD() {
	this.bq = new Array(4), this.lE = new Uint16Array(2), this.lF = new Uint16Array(2), this.lG = new Int32Array(2), this.lH = new Uint32Array(2), this.lI = new Uint32Array(2), this.lJ = new Uint8Array(4), this.lK = new Uint8Array(4), this.lL =
		new Uint32Array(4), this.lM = new Uint32Array(5), this.lN = new Uint32Array(8), this.a5 = new Uint32Array(8), this.lO = new Uint16Array(16), this.lP = new Uint16Array(512), this.lQ = new Uint16Array(512), this.lR = new Uint16Array(512), this
		.lS = new Uint16Array(0), this.b = function() {
			var az = cd.fR * cd.fS;
			this.lS.length !== az && (this.lS = new Uint16Array(az))
		}, this.lT = function(bq, lU) {
			return bq[0] = lU, bq
		}, this.lV = function(bq, lU, lW) {
			return bq[0] = lU, bq[1] = lW, bq
		}, this.lX = function(bq, lU, lW, lY) {
			return bq[0] = lU, bq[1] = lW, bq[2] = lY, bq
		}, this.lZ = function(bq, lU, lW, lY, la) {
			return bq[0] = lU, bq[1] = lW, bq[2] = lY, bq[3] = la, bq
		}
}

function iH(lb, lc, ld, le) {
	var lf = document.createElement("textarea"),
		lg = (this.iG = lf, !0);

	function lm() {
		lf.select(), document.execCommand("copy")
	}
	this.resize = function() {
			lc && bA.fu.lj(lf, 5)
		}, this.iI = function(d8) {
			lf.value = d8
		}, this.i1 = function() {
			return lf.value
		}, this.lk = function() {
			lf.select()
		}, this.clear = function() {
			lf.value = ""
		}, this.ll = function() {
			lg && navigator.clipboard ? (lf.select(), navigator.clipboard.writeText(lf.value).catch(function() {
				lg = !1, lm()
			})) : lm()
		}, lf.setAttribute("id", "textArea" + cT.u.lh++), lf.setAttribute("autocomplete", "off"), lb && lf.setAttribute("placeholder", lb), lf.style.top = "0", lf.style.left = "0", lf.style.width = "100%", lf.style.height = "100%", lf.style
		.userSelect = "none", lf.style.outline = "none", lf.style.resize = "none", lf.style.border = "none", lf.style.color = aG.am, lf.style.backgroundColor = aG.li, le ? (lf.style.fontSize = "1em", lf.rows = 6, lf.style.padding = "0.25em") : (lf
			.style.padding = "0.45em", lf.style.fontSize = "1.2em"), ld && lf.addEventListener("input", function(iG) {
			ld(iG)
		}), lf.addEventListener("focus", function() {
			eE.dS++
		}), lf.addEventListener("blur", function() {
			eE.dS--
		})
}

function ln() {
	this.lo = new lp, this.gc = new lq, this.lr = new ls, this.lt = new lu, this.lv = new lw
}

function lx() {
	var dO, canvas, ft, ly, lz, m0 = -1;

	function m2() {
		var m3, fV = canvas.getContext("2d", {
			alpha: !0
		});
		fV.clearRect(0, 0, dO, dO), fV.fillStyle = aG.m4, fV.fillRect(0, 0, dO, dO), 0 === ly && (fV.fillStyle = aG.m5, fV.fillRect(0, 0, dO, dO)), fV.fillStyle = aG.am, fV.fillRect(0, 0, dO, 1), fV.fillRect(0, 0, 1, dO), fV.fillRect(0, dO - 1, dO,
			1), fV.fillRect(dO - 1, 0, 1, dO), m3 = .9 * dO / dg.get(0).width, fV.imageSmoothingEnabled = !0, fV.setTransform(m3, 0, 0, m3, Math.floor((dO - m3 * dg.get(0).width) / 2), Math.floor((dO - m3 * dg.get(0).height) / 2)), fV.drawImage(
			dg.get(0), 0, 0), fV.setTransform(1, 0, 0, 1, 0, 0)
	}

	function mD(ip, iq) {
		if (!dx.m1) return ip <= dO + di.gap && iq >= dw.fX ? 9 : -1;
		if (ip <= 4 * dO + di.gap) {
			if (iq >= dw.fX) return 0;
			if (iq >= dw.fX - dO - lz * di.gap) return 2
		} else if (ip <= 7 * dO + di.gap && iq >= dw.fX - dO - lz * di.gap) return 1;
		return -1
	}
	this.m1 = !1, this.b = function() {
		ly = -1, this.m1 = !1, lz = dY.dc.fs() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		dO = dw.dO, (canvas = document.createElement("canvas")).width = dO, canvas.height = dO, ft = bA.fu.fv(1, (dY.dc.fs() ? .5 : .45) * dO), m2()
	}, this.m6 = function() {
		this.m1 = !this.m1, this.m1 ? (dy.m7(!1), c.bV && dy.m8 && dy.m9(!0), this.mA()) : (ly = -1, m2(), !c.fk || 1 !== c.dr || c.g3 || c.bV || dY.dc.setState(1)), bT.eA = !0
	}, this.mA = function() {
		(c.fk || c.bV) && 1 === c.dr && (ds.g4(!0), c.g3 || setTimeout(function() {
			mB.mC()
		}, 0), dY.dc.setState(0))
	}, this.io = function(ip, iq) {
		return 0 <= (m0 = mD(ip, iq)) || !dx.m1 || c.fk || c.bV || e3.mF || dx.m6(), m0
	}, this.is = function(ip, iq) {
		ip = mD(ip, iq);
		ip !== ly && (ly = ip, this.m1 || m2(), bT.eA = !0)
	}, this.mH = function(ip, iq) {
		ip = mD(ip, iq);
		return -1 !== ip && m0 === ip && (this.m1 ? c.mI ? (0 <= ip && dy.m7(!1), !c.bV) : (0 === ip ? c.mJ() : 1 === ip ? this.m6() : 2 === ip && cT.iD(1, 0), !0) : 9 === ip && (this.m6(), !0))
	}, this.gl = function() {
		var c1;
		this.m1 ? (c1 = Math.floor(5.5 * dO), dZ.setTransform(1, 0, 0, 1, di.gap, dw.fX), dZ.fillStyle = aG.m4, dZ.fillRect(0, 0, c1, dO), 0 === ly ? (dZ.fillStyle = aG.m5, dZ.fillRect(0, 0, 4 * dO, dO)) : 1 === ly && (dZ.fillStyle = aG.m5, dZ
				.fillRect(4 * dO, 0, Math.floor(1.5 * dO), dO)), dZ.fillStyle = aG.am, dZ.fillRect(0, 0, c1, 1), dZ.fillRect(0, 0, 1, dO), dZ.fillRect(4 * dO, 0, 1, dO), dZ.fillRect(0, dO - 1, c1, 1), dZ.fillRect(c1 - 1, 0, 1, dO), dZ.font =
			ft, bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 1), dZ.fillText(L(48), 2 * dO, .54 * dO), c1 = .4 * dO, dx.mO(di.gap + 4 * dO + (1.5 * dO - c1) / 2, dw.fX + .3 * dO, c1), c1 = 1, dZ.setTransform(1, 0, 0, 1, di.gap, dw.fX - c1 *
				lz * di.gap - c1 * dO), dZ.fillStyle = aG.m4, dZ.fillRect(0, 0, 4 * dO, dO), ly === c1 + 1 && (dZ.fillStyle = aG.m5, dZ.fillRect(0, 0, 4 * dO, dO)), dZ.fillStyle = aG.am, dZ.fillRect(0, 0, 4 * dO, 1), dZ.fillRect(0, 0, 1, dO),
			dZ.fillRect(4 * dO, 0, 1, dO), dZ.fillRect(0, dO - 1, 4 * dO, 1), dZ.fillText(L(0 === c1 ? 48 : 49), 2 * dO, .54 * dO), dZ.setTransform(1, 0, 0, 1, 0, 0)) : dZ.drawImage(canvas, di.gap, dw.fX)
	}, this.mM = function(player) {
		return 0 !== z.bZ[player] && 2 !== c.dr && !bA.gc.mN(player)
	}, this.mO = function(fW, fX, az) {
		dZ.setTransform(1, 0, 0, 1, fW, fX), dZ.lineWidth = di.ig, dZ.strokeStyle = aG.am, dZ.beginPath(), dZ.moveTo(0, 0), dZ.lineTo(az, az), dZ.moveTo(0, az), dZ.lineTo(az, 0), dZ.stroke()
	}
}

function mQ() {
	var iP, mR, mS, mZ;

	function mT(id) {
		0 !== dY.id || cy.cz.data[140].value ? 0 === id ? cT.iD(8, 1, new mm(16)) : cT.iD(2) : cT.u.ml(cT.cU, 0 === id ? 16 : 0)
	}
	this.show = function() {
		dY.dc.setState(12), iP.show(), this.resize(), this.bS()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), mR.resize()
	}, this.bS = function() {
		8 === cj.ek() && (2 <= gq.me ? mS[2].n3 === aG.n4 && mS[2].n5(0) : mS[2].n3 !== aG.n4 && mS[2].n5(aG.n4), !c.bV && dx.mM(c.ba) ? mS[1].n3 === aG.n4 && mS[1].n5(0) : mS[1].n3 !== aG.n4 && mS[1].n5(aG.n4), !c.bV && dz.mh(c.ba) ? mS[0]
			.n3 === aG.n4 && mS[0].n5(0) : mS[0].n3 !== aG.n4 && mS[0].n5(aG.n4))
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, mS = [new hs(L(50), function() {
		mT(0)
	}), new hs(L(51), function() {
		cT.iD(16)
	}), new hs(L(52), function() {
		cT.iD(17)
	}), new hs(L(53), function() {
		cT.u.mU()
	}, 0, 0, 1), new hs(L(54), function() {
		cT.iD(3, 1)
	}), new hs(L(55), function() {
		cT.iD(18)
	}), new hs(L(56), function() {
		cT.iD(31)
	}), new hs(L(57), function() {
		mT(1)
	}), new hs(L(58), function() {
		var mn = ["Patreon", L(68), L(69), "YouTube Tutorial", "Discord", L(70), L(71), L(72), L(73), L(74), "Terms", "Privacy"],
			mo = [mp.mq, mp.mr, mp.ms, "https://www.youtube.com/watch?v=6QBmA9N1668", mp.mt, mp.mu, mp.mv, mp.mw, mp.mx, mp.my, mp.mz, mp.n0];
		1 === dY.id ? (mn.splice(2, 1), mn.splice(0, 1), mo.splice(2, 1), mo.splice(0, 1)) : 2 === dY.id && (mn.splice(1, 1), mn.splice(0, 1), mo.splice(1, 1), mo.splice(0, 1)), cT.iD(4, 1, new js(L(58), bA.fu.n1(mn, mo), !1, [new hs(
			"⬅️ " + L(33),
			function() {
				cT.iD(1)
			})]))
	}), new hs(L(59), function() {
		cT.iD(4, 1, new js(L(59), jo.mb + "<br><a href='" + mp.mu + "' target='_blank'>" + mp.mu + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new hs("⬅️ " + L(33), function() {
				cT.iD(1)
			})]))
	}), new hs(L(60), function() {
		cT.iD(4, 1, new js(L(60), L(75) + "<br>" + L(76), !1, [new hs("⬅️ " + L(33), function() {
			cT.iD(1)
		}), new hs(L(77), function() {
			dY.dc.n2(), cT.iD(1)
		})]))
	}), new hs(L(61), function() {
		dY.dc.mY(), cT.iD(4, 1, new js(L(78), L(79) + " <a href='" + mp.n0 + "' target='_blank'>" + mp.n0 + "</a>", !1, [new hs("⬅️ " + L(33), function() {
			cT.iD(1)
		})]))
	})], mZ = [new hs("⬅️ " + L(33), function() {
		cT.u.iW()
	})], 8 === cj.ek() && (mS.unshift(new hs(L(64), function() {
		cT.iD(30)
	})), mS.unshift(new hs(L(65), function() {
		2 <= gq.me && (cT.jl(), e3.m6(), bT.eA = !0)
	}, 0, 1)), mS.unshift(new hs(L(66), function() {
		!c.bV && dx.mM(c.ba) && (mf.lo.mg(), cT.jl(), dx.m1) && dx.m6()
	}, 0, 1)), mS.unshift(new hs(L(67), function() {
		!c.bV && dz.mh(c.ba) && (mi.mj(2), mf.lo.mk(), cT.jl(), dx.m1) && dx.m6()
	}, 0, 1))), 1 === dY.id && 5 <= dY.mb && mS.push(new hs(L(62), function() {
		dY.dc.mc()
	})), iP = new hr(L(63), mZ), mR = new md(mS, iP.hv)
}

function n6() {
	this.n7 = function() {
		var n8 = c.data;
		bA.c3.n9(n8.teamPlayerCount, n8.playerCount), n8.numberTeams = bA.c3.nA(n8.teamPlayerCount, 0), n8.teamPlayerCount[0] && n8.teamPlayerCount[7] && (n8.teamPlayerCount[7] = 0, this.n7())
	}, this.nB = function() {
		var n8 = c.data;
		n8.mapType < 2 ? cd.ck(cd.nC(n8), n8.mapSeed) : cd.nD(n8.canvas)
	}, this.nE = function() {
		var n8 = c.data;
		n8.colorsData || (n8.colorsData = new Uint32Array(1)), n8.selectableColor && (n8.colorsData[0] = cy.u.nF()), n8.selectableName && (n8.playerNamesData || (n8.playerNamesData = new Array(1)), n8.playerNamesData[0] = cy.cz.data[122].value),
			n8.ci = new Uint32Array(1), n8.ci[0] = c9.aW.cA(cy.cz.data[105].value, 5)
	}, this.nG = function() {
		c.data = new cb, c.data.aIncomeType = 2, c.data.aIncomeData = new Uint8Array(c.iC), c.data.aIncomeData[0] = 64
	}
}

function nH() {
	var nI, nJ, nK, nL, nM, nN = 0,
		nO = 0;

	function nR(b0) {
		var nT = !0,
			nU = aG.am,
			c1 = (1 === nI[b0].id ? nI[b0].fV.fillStyle = aG.nV : nI[b0].nW === c.iC ? nI[b0].fV.fillStyle = aG.nX : (aA.nY(nI[b0].nW), nI[b0].fV.fillStyle = bA.color.nZ(a4.lJ[0], a4.lJ[1], a4.lJ[2], .87), 400 < bA.c3.c4(a4.lJ, 0, 2) && (nT = !1,
				nU = aG.ik)), nI[b0].canvas.width),
			eF = (nI[b0].fV.clearRect(0, 0, c1, nL), nI[b0].fV.fillRect(0, 0, c1, nL), nI[b0].fV.fillStyle = nU, ! function(fV, c1, nL) {
				fV.fillRect(0, 0, c1, 1), fV.fillRect(0, nL - 1, c1, 1), fV.fillRect(0, 0, 1, nL), fV.fillRect(c1 - 1, 0, 1, nL)
			}(nI[b0].fV, c1, nL), nJ + 2 * nL < c1 && (nI[b0].fV.fillRect(c1 - nJ - nL, 0, 1, nL), nI[b0].fV.fillText(z.jA[nI[b0].nW], Math.floor((c1 - nJ) / 2), Math.floor(.57 * nL))), 0 !== nI[b0].id ? 0 : nL);
		nI[b0].fV.fillText(bA.bB.aX(nI[b0].gx), Math.floor(c1 - nJ / 2 - eF), Math.floor(.57 * nL)),
			function(b0, c1, eF, nT) {
				nI[b0].fV.fillStyle = nT ? aG.ne : aG.nf;
				nT = Math.floor(nJ * nI[b0].gx / nI[b0].nh);
				nI[b0].fV.fillRect(Math.floor(c1 - nJ - eF), nL - nM, nT, nM)
			}(b0, c1, eF, nT), 0 === nI[b0].id ? (nc(b0, c1, nT, nU), function(b0, c1, nT) {
				nI[b0].fV.strokeStyle = nT ? aG.nn : aG.no, nI[b0].fV.fillRect(nL, 0, 1, nL);
				nT = c1 - nL;
				nI[b0].fV.beginPath(), nI[b0].fV.moveTo(Math.floor(.3 * nL + nT), Math.floor(nL / 2)), nI[b0].fV.lineTo(Math.floor(nL - .3 * nL + 0 + nT), Math.floor(nL / 2)), nI[b0].fV.stroke(), nI[b0].fV.beginPath(), nI[b0].fV.moveTo(Math
					.floor(nL / 2 + nT), Math.floor(.3 * nL)), nI[b0].fV.lineTo(Math.floor(nL / 2 + nT), Math.floor(nL - .3 * nL + 0)), nI[b0].fV.stroke()
			}(b0, c1, nT)) : nc(b0, 2 * nL, nT, nU)
	}

	function nc(b0, c1, nT, nU) {
		nI[b0].fV.strokeStyle = nI[b0].ni ? aG.nj : nT ? aG.nk : aG.nl, nI[b0].fV.fillStyle = nU, nI[b0].fV.fillRect(c1 - nL, 0, 1, nL), nI[b0].fV.lineWidth = Math.max(Math.floor(nL / 12), 3), nI[b0].fV.lineCap = "round";
		nT = .35;
		c1 = nL + 1, nI[b0].fV.beginPath(), nI[b0].fV.moveTo(Math.floor(c1 - nT * nL + 0), Math.floor(nT * nL)), nI[b0].fV.lineTo(Math.floor(c1 - nL + nT * nL), Math.floor(nL - nT * nL + 0)), nI[b0].fV.stroke(), nI[b0].fV.beginPath(), nI[b0].fV
			.moveTo(Math.floor(c1 - nL + nT * nL), Math.floor(nT * nL)), nI[b0].fV.lineTo(Math.floor(c1 - nT * nL + 0), Math.floor(nL - nT * nL + 0)), nI[b0].fV.stroke()
	}

	function o7(bq, o3) {
		for (var gx, b0 = o3 - 1; 0 <= b0; b0--) gx = o4.oI(c.ba, b0), bq[b0].gx !== gx && (bq[b0].gx = gx, bq[b0].nh = Math.max(gx, bq[b0].nh), bq[b0].nS = !0)
	}

	function oB(bq, o9) {
		for (var oE = c.ba << 3, oJ = t.u.oJ, oK = t.u.oK, oG = t.u.oG, b0 = o9 - 1; 0 <= b0; b0--) {
			var oH = oG[oE + b0],
				gx = oJ[oH];
			bq[b0].gx !== gx ? (bq[b0].gx = gx, bq[b0].nh = Math.max(gx, bq[b0].nh), bq[b0].nS = !0) : bq[b0].ni || oK[oH] % 64 != 5 || (bq[b0].ni = !0, bq[b0].nS = !0)
		}
	}

	function nQ(oL) {
		oL.canvas = document.createElement("canvas"), cd.nP.font = nK;
		var c1 = nJ;
		oL.nW < c.iC && 0 === oL.id && (c1 += Math.floor(cd.nP.measureText(z.jA[oL.nW] + "000").width)), c1 += nL, 0 === oL.id && (c1 += nL), oL.canvas.width = c1, oL.canvas.height = nL, oL.fV = oL.canvas.getContext("2d", {
			alpha: !0
		}), oL.fV.font = nK, bA.fu.textBaseline(oL.fV, 1), bA.fu.textAlign(oL.fV, 1)
	}

	function nv(b0) {
		return dt.g2() ? eE.c1 - nI[b0].canvas.width - di.gap : dt.fW
	}

	function nw(b0) {
		return Math.floor(2 * di.gap + (dt.g2() ? du.dO + di.gap : 0) + dt.dO + b0 * (1.3 * nL))
	}
	this.b = function() {
		nN = nO = 0, nI = [], this.resize()
	}, this.resize = function() {
		nK = e.ft, nL = e.fontSize + 5, nL = Math.floor(1.25 * nL), dY.dc.fs() && (nL = Math.floor(1.25 * nL)), nM = Math.floor(.15 * nL), cd.nP.font = nK, nJ = Math.floor(cd.nP.measureText("02 000 000 0000").width);
		for (var b0 = nI.length - 1; 0 <= b0; b0--) nQ(nI[b0]), nR(b0)
	}, this.g4 = function() {
		for (var b0 = nI.length - 1; 0 <= b0; b0--) nI[b0].nS && (nI[b0].nS = !1, nR(b0))
	}, this.io = function(ip, iq) {
		if (2 !== c.dr && 0 !== z.bZ[c.ba] && !c.bV && !bA.gc.mN(c.ba))
			for (var nq, nr, ns, nt = dY.dc.fs() ? nL : 0, nu = dY.dc.fs() ? Math.floor(.15 * nL) : 0, b0 = nI.length - 1; 0 <= b0; b0--)
				if (nq = nv(b0), nr = nw(b0), ns = nI[b0].canvas.width, nr - nu <= iq && iq <= nr + nL + nu) {
					if (nq - nt <= ip && ip <= nq + nL + nt) return nI[b0].ni || (nI[b0].nS = !0, nI[b0].ni = !0, 0 === nI[b0].id ? mf.lo.nx(nI[b0].nW) : mf.lo.ny(nI[b0].nW)), !0;
					if (0 === nI[b0].id && nq + ns - nL - nt <= ip && ip <= nq + ns + nt) return mi.mj(3), mf.lo.nz(dw.o0(), nI[b0].nW), !0
				} return !1
	}, this.bS = function() {
		var hX, hY, bq, o3;
		0 === z.bZ[c.ba] || bA.gc.mN(c.ba) && !c.bV || (hX = nI.slice(0, nN), hY = nI.slice(nN, nN + nO), bq = hX, o3 = o4.o5(c.ba), function(bq, o3) {
			if (nN !== o3) return 1;
			for (var b0 = o3 - 1; 0 <= b0; b0--)
				if (bq[b0].nW !== o4.oD(c.ba, b0)) return 1;
			return
		}(bq, o3) ? o7(bq = function(bq, o3) {
			var b0, nW, b1, gx, oM = [];
			loop: for (b0 = 0; b0 < o3; b0++) {
				for (nW = o4.oD(c.ba, b0), b1 = 0; b1 < bq.length; b1++)
					if (bq[b1].nW === nW) {
						oM.push(bq.splice(b1, 1)[0]);
						continue loop
					} gx = o4.oI(c.ba, b0), nQ(gx = {
					nW: nW,
					gx: gx,
					nh: gx,
					id: 0,
					nS: !0,
					ni: !1,
					canvas: null,
					fV: null
				}), oM.push(gx)
			}
			return oM
		}(bq, o3), o3) : o7(bq, o3), hX = bq, hY = function(bq) {
			var o9 = t.u.x[c.ba];
			return function(bq, o9) {
				if (nO !== o9) return 1;
				for (var oE = c.ba << 3, oF = t.u.oF, oG = t.u.oG, b0 = o9 - 1; 0 <= b0; b0--) {
					var oH = oG[oE + b0];
					if (bq[b0].nW !== oF[oH]) return 1
				}
				return
			}(bq, o9) ? oB(bq = function(bq, o9) {
				var b0, nW, b1, oM = [],
					oE = c.ba << 3,
					oF = t.u.oF,
					oJ = t.u.oJ,
					oG = t.u.oG;
				loop: for (b0 = 0; b0 < o9; b0++) {
					var oH = oG[oE + b0];
					for (nW = oF[oH], b1 = 0; b1 < bq.length; b1++)
						if (bq[b1].nW === nW) {
							oM.push(bq.splice(b1, 1)[0]);
							continue loop
						} oH = oJ[oH], nQ(oH = {
						nW: nW,
						gx: oH,
						nh: oH,
						id: 1,
						nS: !0,
						ni: !1,
						canvas: null,
						fV: null
					}), oM.push(oH)
				}
				return oM
			}(bq, o9), o9) : oB(bq, o9), bq
		}(hY), nN = hX.length, nO = hY.length, nI = hX.concat(hY))
	}, this.gl = function() {
		if (0 !== z.bZ[c.ba] && (!bA.gc.mN(c.ba) || c.bV))
			for (var b0 = nI.length - 1; 0 <= b0; b0--) dZ.drawImage(nI[b0].canvas, nv(b0), nw(b0))
	}
}

function oN() {
	var oO = 12e3;
	this.show = function(oP) {
		return !oP && !eR.oQ() && (0 === dY.id ? eR.eS.show() : 2 === dY.id && !(bT.db < oO) && (oO = bT.db + 3e5, 2 === jo.oR) && dY.dc.oS(Math.floor(3e5)))
	}
}

function oT() {
	var hn, ho, hp, i2;

	function ht() {
		hx(), 2 !== c.data.sResourcesType && (c.data.sResourcesData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		2 === c.data.sResourcesType && bA.c3.i0(hp.i1(), c.data.sResourcesData, 2047)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(80), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), i6.i9(new iA({
			iB: [L(35), L(36), L(37)],
			value: c.data.sResourcesType
		}, function(cE) {
			hx(), 2 !== cE || c.data.sResourcesData || (c.data.sResourcesData = new Uint16Array(c.iC)), c.data.sResourcesType = cE, cT.iD(28)
		})), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6;
		1 === c.data.sResourcesType && ((i6 = new i7).i8("Value"), i6.iE(new iF({
			cE: -1,
			value: c.data.sResourcesValue
		}, 1, 0, function(iG) {
			var value = p.q(Math.floor(iG.target.value), 0, 2047);
			iG.target.value = c.data.sResourcesValue = value
		})), i2.push(i6))
	}(i2), function(i2) {
		var i6;
		2 === c.data.sResourcesType && ((i6 = new i7).i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.sResourcesData, 2)), i6.iE(hp), i2.push(i6))
	}(i2), i2))
}

function oU(oV, oW, oX, oY) {
	var self;
	this.oZ = document.createElement("span"), (self = this).oZ.textContent = oV, self.oZ.style.color = aG.am, self.oZ.style.position = "absolute", self.oZ.style.font = "inherit", oY ? self.oZ.style.bottom = "0.06em" : self.oZ.style.top = "0.12em",
		oX ? self.oZ.style.left = "0.2em" : self.oZ.style.right = "0.2em", self.oZ.style.fontSize = "0.6em", self.oZ.style.pointerEvents = "none", self.oZ.style.whiteSpace = "pre", oW.style.position = "relative", oW.style.overflow = "hidden", oW
		.appendChild(self.oZ)
}

function oa() {
	var ob, oc, od;

	function ol(b0) {
		var button = dl.oe[b0],
			fW = button.fW,
			fX = button.fX,
			c1 = button.c1,
			dO = button.dO;
		dZ.fillStyle = button.oi, dZ.fillRect(fW, fX, c1, dO), b0 === ob && (dZ.fillStyle = od, dZ.fillRect(fW, fX, c1, dO)), dZ.lineWidth = di.ig, dZ.strokeStyle = oc, dZ.strokeRect(fW, fX, c1, dO),
			function(button) {
				var fW = button.fW,
					fX = button.fX,
					c1 = button.c1,
					dO = button.dO;
				bA.fu.textAlign(dZ, 1), bA.fu.textBaseline(dZ, 1), dZ.font = button.font, dZ.fillStyle = oc, dZ.fillText(button.ah, Math.floor(fW + c1 / 2), Math.floor(fX + dO / 2 + .1 * button.fontSize))
			}(button)
	}
	this.c1 = 0, this.dO = 0, this.fX = 0, this.gap = 0, this.b = function() {
		ob = -1, oc = aG.am, od = "rgba(255,255,255,0.16)", this.oe = new Array(7), this.dO = Math.floor((dY.dc.fs() ? .123 : .093) * eE.dP), this.c1 = Math.floor((dY.dc.fs() ? 3.96 : 4.2) * this.dO), this.gap = Math.floor(.025 * this.c1);
		var og = Math.floor(.26 * this.dO),
			oh = bA.fu.fv(1, og);
		this.oe[0] = {
			fW: 0,
			fX: 0,
			c1: Math.floor(.6 * this.c1 - this.gap / 2),
			dO: this.dO,
			ah: "Multiplayer",
			font: oh,
			oi: "rgba(22,88,22,0.8)",
			fontSize: og
		}, og = Math.floor(.18 * this.dO), oh = bA.fu.fv(1, og), this.oe[1] = {
			fW: 0,
			fX: 0,
			c1: this.c1 - this.oe[0].c1 - this.gap,
			dO: this.dO,
			ah: "Single Player",
			font: oh,
			oi: "rgba(22,88,88,0.8)",
			fontSize: og
		}, this.oe[2] = {
			fW: 0,
			fX: 0,
			c1: this.c1,
			dO: Math.floor(.3 * this.dO),
			ah: "",
			font: this.oe[1].font,
			oi: "rgba(100,0,0,0.8)",
			fontSize: this.oe[1].fontSize
		}, this.oe[3] = {
			fW: 0,
			fX: 0,
			c1: this.c1,
			dO: this.dO,
			ah: "Back",
			font: this.oe[0].font,
			oi: "rgba(0,0,0,0.8)",
			fontSize: this.oe[0].fontSize
		}, this.oe[4] = {
			fW: 0,
			fX: 0,
			c1: this.c1,
			dO: Math.floor(.3 * this.dO),
			ah: "The game was updated!",
			font: this.oe[1].font,
			oi: "rgba(100,0,0,0.8)",
			fontSize: this.oe[1].fontSize
		}, this.oe[5] = {
			fW: 0,
			fX: 0,
			c1: this.oe[0].c1,
			dO: Math.floor(.8 * this.dO),
			ah: "Reload",
			font: this.oe[0].font,
			oi: "rgba(0,100,0,0.8)",
			fontSize: this.oe[0].fontSize
		}, this.oe[6] = {
			fW: 0,
			fX: 0,
			c1: this.oe[1].c1,
			dO: this.oe[5].dO,
			ah: "Back",
			font: this.oe[0].font,
			oi: "rgba(0,0,0,0.8)",
			fontSize: this.oe[0].fontSize
		}, this.oj()
	}, this.oj = function() {
		this.fX = Math.floor(.54 * eE.dO), this.oe[0].fW = Math.floor(.5 * eE.c1 - .5 * this.c1), this.oe[1].fW = this.oe[0].fW + this.oe[0].c1 + this.gap, this.oe[2].fW = this.oe[3].fW = this.oe[0].fW, this.oe[4].fW = this.oe[5].fW = this.oe[0]
			.fW, this.oe[6].fW = this.oe[1].fW, this.oe[0].fX = Math.floor(.54 * eE.dO), this.oe[1].fX = this.oe[0].fX, this.oe[2].fX = Math.floor((eE.dO - this.oe[2].dO - this.oe[3].dO - this.gap) / 2), this.oe[3].fX = this.oe[2].fX + this.oe[2]
			.dO + this.gap, this.oe[4].fX = Math.floor((eE.dO - this.oe[4].dO - this.oe[5].dO - this.gap) / 2), this.oe[5].fX = this.oe[6].fX = this.oe[4].fX + this.oe[4].dO + this.gap
	}, this.ok = function() {
		ol(0), ol(1)
	}, this.om = function() {
		ol(2), ol(3)
	}, this.on = function() {
		ol(4), ol(5), ol(6)
	}, this.is = function(fW, fX, g4) {
		var b0 = -1;
		return 0 === cj.ek() ? b0 = this.ir(fW, fX, 0, 2) : 3 === cj.ek() ? b0 = this.ir(fW, fX, 3, 1) : 5 === cj.ek() && (b0 = this.ir(fW, fX, 5, 2)), ob !== b0 && (ob = b0, g4) && (bT.eA = !0), -1 !== b0 && (dp.oo(), !0)
	}, this.ir = function(fW, fX, hi, size) {
		for (var b0 = hi; b0 < hi + size; b0++)
			if (fW >= this.oe[b0].fW && fX >= this.oe[b0].fX && fW <= this.oe[b0].fW + this.oe[b0].c1 && fX <= this.oe[b0].fX + this.oe[b0].dO) return b0;
		return -1
	}
}

function oq() {
	this.b = function() {
		this.bq = [], this.cE = 0
	}, this.dD = function() {
		return new Uint8Array(this.bq)
	}, this.cq = function(or, value) {
		for (var bq = this.bq, os = this.cE + or - 1, ot = 1 + (os >> 3); bq.length < ot;) bq.push(0);
		for (var b0 = this.cE; b0 <= os; b0++) bq[b0 >> 3] |= (value >> os - b0 & 1) << 7 - (7 & b0);
		this.cE += or
	}, this.ou = function(bq, gz, ov) {
		var ow = bA.c3.ox(bq);
		this.cq(gz, ow);
		for (var b0 = 0; b0 < ow; b0++) this.cq(ov, bq[b0])
	}, this.oy = function(bq, gz, oz) {
		var ow = bA.c3.ox(bq);
		this.cq(gz, ow);
		for (var b0 = 0; b0 < ow; b0++) this.p0(bq[b0], oz)
	}, this.p0 = function(bF, gz) {
		var az = bF.length;
		this.cq(gz, az);
		for (var b0 = 0; b0 < az; b0++) this.cq(16, bF.charCodeAt(b0))
	}, this.p1 = function(jj) {
		var p2 = (jj = jj.toDataURL()).split(",");
		if (p2.length < 2) console.log("error 266");
		else {
			jj = bA.bB.p3(jj = p2[p2.length - 1], "/", "_"), jj = bA.bB.p3(jj, "\\+", "-");
			var jj = bA.bB.p3(jj, "=", ""),
				p4 = c9.aW.jW(jj),
				az = p4.length;
			this.cq(30, az);
			for (var b0 = 0; b0 < az; b0++) this.cq(6, p4[b0])
		}
	}
}

function p5() {
	var cu, p6, p7, p8 = ["wss://", "/s50/", "/s51/", "/s52/"],
		p9 = 0;

	function pL() {
		bW.u.pL(cu, p6)
	}

	function pM(iG) {
		bW.pP.pQ(cu, new Uint8Array(iG.data))
	}

	function pO() {}

	function pN(iG) {
		bW.u.pN(cu, iG)
	}
	this.b = function(cE, pA) {
		cu = cE, p6 = pA, cE = jo.pJ ? "ws://localhost:" + (7130 + cu) + "/" : p8[0] + bW.u.pK[cu] + p8[1 + jo.oR], (p7 = new WebSocket(cE)).binaryType = "arraybuffer", p7.onopen = pL, p7.onmessage = pM, p7.onclose = pN, p7.onerror = pO
	}, this.pC = function() {
		return p7.readyState === p7.CONNECTING
	}, this.pD = function() {
		return p7.readyState === p7.OPEN
	}, this.pE = function() {
		return p9
	}, this.er = function() {
		p9 = 1
	}, this.pF = function() {
		return this.pC() || this.pD()
	}, this.pG = function(pA) {
		p6 = pA
	}, this.ej = function() {
		return p6
	}, this.send = function(cs) {
		this.pD() && p7.send(cs)
	}, this.close = function(pH) {
		this.pF() && (p7.close(pH), this.iK())
	}, this.iK = function() {
		p7.onopen = null, p7.onmessage = null, p7.onclose = null, p7.onerror = null
	}
}

function pR() {
	var pW, pX, pS = document.createElement("div"),
		pT = document.createElement("div"),
		pU = document.createElement("div"),
		pV = document.createElement("div"),
		oe = [],
		pY = [L(81), L(82), L(83), L(84), L(85), L(86), L(87)],
		pZ = [1, 2, 3, 0, 9, 10, 11];

	function pc(b0) {
		cT.iD(8, 0, new mm(21, {
			pk: pZ[b0],
			oE: 0,
			pl: 10
		}))
	}
	this.show = function() {
			this.eq(cT.u.pm), document.body.appendChild(pS)
		}, this.iK = function() {
			cT.removeChild(document.body, pS)
		}, this.eq = function(pm) {
			for (var pn = [3, 0, 1, 2, 4, 5, 6], b0 = 0; b0 < oe.length; b0++) {
				var c1 = pm[b0];
				pW[pn[b0]][1].oZ.textContent = c1 || ""
			}
		}, this.resize = function() {
			var b0, gi = di.gap,
				dO = bA.fu.po(.085),
				c1 = Math.min(4 * dO, eE.c1 - 2 * gi),
				az = oe.length;
			for (bA.fu.pp(pS, gi, eE.dO - gi - dO, c1, dO), bA.fu.lj(pS), bA.fu.lj(pT, 6), b0 = 0; b0 < az - 1; b0++) bA.fu.lj(oe[b0].button, 6);
			for (b0 = 0; b0 < az; b0++) pW[b0][0].resize(), pW[b0][1].resize();
			for (oe[0].fW = 0, oe[0].button.style.left = bA.fu.pa(oe[0].fW), oe[0].button.style.width = bA.fu.pq(1.7 * dO), b0 = 1; b0 < az; b0++) oe[b0].fW = oe[b0 - 1].fW + oe[b0 - 1].button.offsetWidth, oe[b0].button.style.left = bA.fu.pa(oe[b0]
				.fW);
			if (!pX) {
				if (!dg.dh()) return;
				(pX = dg.get(14)).style.width = "24%", pX.style.position = "absolute", pT.appendChild(pX)
			}
			pX.style.left = bA.fu.pa(0), pX.style.top = "7%", pU.pr && (pU.scrollLeft = pU.pr)
		}, pS.style.position = "absolute", pT.style.width = "25%", pT.style.height = "100%", pT.style.backgroundColor = aG.m4, pU.style.position = "absolute", pU.style.width = "75%", pU.style.height = "100%", pU.style.backgroundColor = aG.m4, pU
		.style.top = pU.style.right = bA.fu.pa(0), bA.fu.pb(pU), pV.style.height = pV.style.maxHeight = "100%", oe.push(new hs("", function() {
			pc(0)
		}, aG.pd)), oe.push(new hs("", function() {
			pc(1)
		}, aG.pe)), oe.push(new hs("", function() {
			pc(2)
		}, aG.pf)), oe.push(new hs("", function() {
			pc(3)
		}, aG.pg)), oe.push(new hs("", function() {
			pc(4)
		}, aG.ph)), oe.push(new hs("", function() {
			pc(5)
		}, aG.pi)), oe.push(new hs("", function() {
			pc(6)
		}, aG.ph)), pW = new Array(oe.length);
	for (var b0 = 0; b0 < oe.length; b0++) oe[b0].button.style.position = "absolute", pW[b0] = [new pj(pY[b0], oe[b0].button, .25, .45), new pj("", oe[b0].button, .53, .84, 1)], oe[b0].button.style.height = oe[b0].button.style.maxHeight = "100%", oe[
		b0].button.top = bA.fu.pa(0), pV.appendChild(oe[b0].button);
	pU.appendChild(pV), pS.appendChild(pT), pS.appendChild(pU)
}

function ps() {
	this.pt = null, this.eA = !1, this.db = 0, this.gg = 56;
	var pu = 0;

	function pw() {
		bT.db = pu = performance.now(), bT.pt.bS(), window.requestAnimationFrame(pw)
	}
	this.b = function() {
		this.pv(), window.requestAnimationFrame(pw), this.db = performance.now()
	}, this.px = function() {
		c.bV ? (this.pt = new py, this.pt.b()) : c.fk ? this.pt = new pz : (this.pt = new q0, this.pt.b())
	}, this.pv = function() {
		this.pt = new q1, this.eA = !0
	}, this.bS = function() {
		this.pt.q2++
	}, this.bU = function() {
		return this.pt.q2
	}, this.q3 = function() {
		var g8 = performance.now();
		g8 < pu + 1e3 || (this.db = g8, this.pt.bS())
	}
}

function q4() {
	this.k7 = null, this.k8 = null, this.k9 = null, this.kA = null, this.kB = null, this.kC = null, this.jf = "";
	var q5 = 0;
	this.b = function() {
		this.k7 = [], this.k8 = [], this.k9 = [], this.kA = [], this.kB = [0], this.kC = [0], q5 = 0, this.jf = ""
	}, this.q6 = function(id, lU, lW, lY) {
		c.bV || 2 === c.dr || (0 === this.kB[q5] && (this.kC[q5] ? (this.kB.push(1), this.kC.push(0), q5++) : this.kB[q5] = 1), this.k7.push(id), this.k8.push(lU), this.k9.push(void 0 === lW ? 0 : lW), this.kA.push(void 0 === lY ? 0 : lY), this
			.kC[q5]++)
	}, this.bS = function() {
		0 === this.kB[q5] ? this.kC[q5]++ : (this.kB.push(0), this.kC.push(0), q5++)
	}
}

function q7() {
	this.dk = new q8, this.b = function() {
		this.dk.resize()
	}
}

function L(value, q9, qA, qB) {
	var bF = "number" == typeof value ? cC.qC[value] : value;
	if (qA && cC.qD() && (bF = qA), !q9) return qB ? bF.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : bF;
	for (var az = q9.length, b0 = 0; b0 < az; b0++)
		for (var bE = 0; bE < 3; bE++) bF = bF.replace("{" + (10 * bE + b0) + "}", q9[b0]);
	return bF
}

function qE() {
	var qF = null,
		oO = 2e4,
		qG = 0;
	this.bS = function() {
		bT.db < oO || (oO = bT.db + 1e4, 0 !== dY.id) || qF || eR.oQ() || (bW.u.pD(0) ? bW.bX.eg(5) : oO = bT.db + 1e3)
	}, this.eT = function(dI) {
		qF = dI
	}, this.show = function() {
		return !(!qF || bT.db < qG) && (__fx.settings.hidePropagandaPopup ? void 0 : (qG = bT.db + 6e4, (new qH).show(qF.d8, qF.colors, qF.id), !(qF = null)))
	}
}

function qI() {
	this.qJ = function(qK, cE, qL) {
		var qM = qK.height,
			jj = bA.fu.dV(qM, qM),
			jk = bA.fu.getContext(jj);
		return function(c1, jk, qL) {
			jk.fillStyle = qL, jk.beginPath(), jk.arc(c1 / 2, c1 / 2, .47 * c1, 0, 2 * Math.PI), jk.fill()
		}(qM, jk, qL), jk.drawImage(qK, -cE * qM, 0), jj
	}, this.qO = function(qP) {
		var jk, qQ, qM = qP.height;
		return qP.width === qM && (qQ = (jk = bA.fu.getContext(qP, !0)).getImageData(0, 0, qM, qM), bA.qR.qS(qQ.data, qM, qM, .9), jk.putImageData(qQ, 0, 0)), qP
	}
}

function qT() {
	function qg(fW, az, fX, gY, qa, qp) {
		if (!(fX < 1 || qa < fX))
			for (var b0 = 0; b0 <= az; b0++) {
				var g5 = a8.ku(fW, fX);
				if (gY(g5)) return g5 >> 2;
				fW += qp
			}
		return -1
	}

	function qk(fX, az, fW, gY, qZ, qp) {
		if (!(fW < 1 || qZ < fW)) {
			az = Math.max(az, 0);
			for (var b0 = 0; b0 <= az; b0++) {
				var g5 = a8.ku(fW, fX);
				if (gY(g5)) return g5 >> 2;
				fX += qp
			}
		}
		return -1
	}

	function qo(kd, ke, a2) {
		return -1 !== ke && (-1 === kd || a8.kf(ke, a2) < a8.kf(kd, a2)) ? ke : kd
	}
	this.qU = function(a2) {
		return this.bk(a2, function(g5) {
			return aA.aB(g5)
		})
	}, this.qV = function(a2) {
		return this.bk(a2, function(g5) {
			return aA.qW(g5, c.ba)
		})
	}, this.bk = function(a2, gY) {
		return function(a2, qX, gY) {
			for (var kR = a8.jQ(a2), kS = a8.jR(a2), qZ = cd.fR - 2, qa = cd.fS - 2, qb = -1, ca = 0; ca < qX; ca++) {
				var qc = Math.max(kR - ca, 1),
					qd = Math.max(kS - ca, 1),
					qe = Math.min(kR + ca, qZ),
					qf = Math.min(kS + ca, qa),
					kd = qg(kR, qe - kR, kS - ca, gY, qa, 1),
					ke = qg(kR - 1, kR - qc - 1, kS - ca, gY, qa, -1),
					qe = qg(kR, qe - kR, kS + ca, gY, qa, 1),
					qc = qg(kR - 1, kR - qc - 1, kS + ca, gY, qa, -1),
					qj = qk(kS, qf - kS - 1, kR - ca, gY, qZ, 1),
					ql = qk(kS - 1, kS - qd - 2, kR - ca, gY, qZ, -1),
					qf = qk(kS, qf - kS - 1, kR + ca, gY, qZ, 1),
					qd = qk(kS - 1, kS - qd - 2, kR + ca, gY, qZ, -1);
				if (qb = qo(qb, kd, a2), qb = qo(qb, ke, a2), qb = qo(qb, qe, a2), qb = qo(qb, qc, a2), qb = qo(qb, qj, a2), qb = qo(qb, ql, a2), qb = qo(qb, qf, a2), 0 <= (qb = qo(qb, qd, a2)) && ca * ca >= a8.kf(qb, a2)) return qb
			}
			return -1
		}(a2, a8.kH(), gY)
	}
}

function qq() {
	var qr, qs, qt;
	qr = [32, 65, 191, 913, 931], qs = [64, 127, 688, 930, 1155], qt = new Array(qr.length + 1);
	for (var b0 = 0; b0 < qt.length; b0++) {
		qt[b0] = 0;
		for (var bE = b0 - 1; 0 <= bE; bE--) qt[b0] += qs[bE] - qr[bE]
	}

	function r0(dI) {
		for (var b0 = qr.length - 1; 0 <= b0; b0--)
			if (dI >= qr[b0] && dI < qs[b0]) return b0;
		return -1
	}
	this.qv = function(bF) {
		return 0 !== (bF = bF.trim()).indexOf("Bot ") && 0 !== bF.indexOf("[Bot] ") && function(bF, qx, qy) {
			var az = (bF = bF.trim()).length;
			if (az < qx || qy < az) return !1;
			for (var dI, qz = 0, b0 = 0; b0 < az; b0++)
				if (dI = bF.charCodeAt(b0), qz += 65 <= dI && dI <= 90 || 1040 <= dI && dI <= 1071 ? 1 : 0, -1 === r0(dI)) return !1;
			if (3 < qz && qz > Math.floor(az / 2)) return !1;
			return !0
		}(bF, 3, 20)
	}, this.dC = function(bF) {
		for (var az = (bF = bF.trim()).length, bq = [], b0 = 0; b0 < az; b0++) {
			var dI, j6 = r0(dI = bF.charCodeAt(b0));
			bq.push(qt[j6] + dI - qr[j6])
		}
		return bq
	}, this.eQ = function(bq) {
		for (var dI, b1, bF = "", az = bq.length, b0 = 0; b0 < az; b0++)
			for (b1 = 1; b1 < qt.length; b1++)
				if (bq[b0] < qt[b1]) {
					dI = qr[b1 - 1] + bq[b0] - qt[b1 - 1], bF += String.fromCharCode(dI);
					break
				} return bF
	}, this.r1 = function(bF) {
		for (var bq = this.dC(bF), result = "", b0 = 0; b0 < bq.length; b0++) result = (result += bq[b0] < 10 ? "00" : bq[b0] < 100 ? "0" : "") + bq[b0].toString(10);
		return result
	}, this.r2 = function(bF) {
		for (var bq = new Array(Math.floor(bF.length / 3)), b0 = 0; b0 < bF.length; b0 += 3) bq[Math.floor(b0 / 3)] = parseInt(bF.substring(b0, b0 + 3));
		return this.eQ(bq)
	}, this.r3 = function(bF) {
		for (var c8, bq = [bF.length], b0 = 0; b0 < bF.length; b0++) bq[b0] = bF.charCodeAt(b0) - 48;
		var result = "";
		for (b0 = 0; b0 < bF.length; b0++) b0 === bF.length - 1 || 51 < 10 * bq[b0] + bq[b0 + 1] ? result += bq[b0].toString() : (c8 = 10 * bq[b0] + bq[b0 + 1], result += String.fromCharCode(c8 + (c8 < 26 ? 65 : 71)), b0++);
		return result
	}, this.r4 = function(bF) {
		for (var dI, result = "", b0 = 0; b0 < bF.length; b0++) 48 <= (dI = bF.charCodeAt(b0)) && dI < 58 ? result += String.fromCharCode(dI) : 65 <= dI && dI < 75 ? result += "0" + (dI - 65).toString() : 75 <= dI && dI < 91 ? result += (dI - 65)
			.toString() : 97 <= dI && dI < 123 && (result += (dI - 71).toString());
		return result
	}, this.r5 = function(bF) {
		for (var az = bF.length, bq = [], b0 = 0; b0 < az; b0++)(dI = bF.charCodeAt(b0)) < 58 ? bq.push(bF[b0]) : (dI -= dI < 91 ? 65 : 71, bq.push(String(p.eL(dI, 10))), bq.push(String(dI - 10 * p.eL(dI, 10))));
		var az = bq.length - 2,
			dI = 0,
			p4 = [];
		for (b0 = 0; b0 < az; b0 += 3) p4[dI++] = parseInt(bq[b0] + bq[b0 + 1] + bq[b0 + 2]);
		return p4
	}, this.r6 = function() {
		for (var ij, r7 = "", b0 = 0; b0 < 6; b0++) ij = 48 + hL.random() % 36, ij += 58 <= ij ? 39 : 0, r7 += String.fromCharCode(ij);
		return r7
	}
}

function r8() {
	var rA = new Array(1),
		rB = new Array(1),
		rC = 20,
		oO = 0,
		rD = !1;

	function rG() {
		rC++, rH.play()
	}
	this.b = function() {
		if (!window.document.documentMode) {
			for (var b0 = 0; 0 <= b0; b0--) ! function(b0, src) {
				rB[b0] = 0, rA[b0] = document.createElement("audio"), rA[b0].src = src, rA[b0].setAttribute("preload", "auto"), rA[b0].setAttribute("controls", "none"), rA[b0].style.display = "none", rA[b0].onpause = function() {
					rB[b0] = 1
				}, rA[b0].oncanplaythrough = function() {
					rB[b0] = 0 === rB[b0] ? 1 : rB[b0]
				}, document.body.appendChild(rA[b0])
			}(b0,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			rD = !0
		}
	}, this.rF = function() {
		if (rD) {
			rD = !1;
			for (var b0 = 0; 0 <= b0; b0--) rA[b0].onpause = null, rA[b0].oncanplaythrough = null, cT.removeChild(document.body, rA[b0]), rA[b0] = null
		}
	}, this.play = function() {
		if (rD) {
			var g8 = performance.now();
			if (oO + 66 < g8)
				for (var b0 = 0; 0 <= b0; b0--)
					if (1 === rB[b0]) return oO = g8, rB[b0] = 2, void rA[b0].play();
			0 < rC && (rC--, setTimeout(rG, 66))
		}
	}
}

function i7() {
	var rJ;
	this.rI = [], this.rJ = document.createElement("div"), this.i8 = function(bF, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = bF, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.rJ.appendChild(
			title), title
	}, this.rK = function(bF, marginBottom) {
		var rL = document.createElement("p");
		return rL.textContent = bF, rL.style.fontSize = "0.75em", rL.style.lineHeight = "1.2em", rL.style.marginBottom = marginBottom || "0", this.rJ.appendChild(rL), rL
	}, this.rM = function(bF) {
		var rN = document.createElement("p");
		return rN.textContent = bF, rN.style.fontSize = "1em", rN.style.marginBottom = "0", rN.style.whiteSpace = "pre-wrap", rN.style.overflowWrap = "break-word", this.rJ.appendChild(rN), rN
	}, this.rO = function(rP, fontSize) {
		var rJ = document.createElement("div");
		return rJ.innerHTML = rP, rJ.style.fontSize = fontSize || "1em", rJ.style.lineHeight = "1.2em", this.rJ.appendChild(rJ), rJ
	}, this.i9 = function(rQ) {
		for (var rR = rQ.rR, az = rR.length, b0 = 0; b0 < az; b0++) this.rJ.appendChild(rR[b0])
	}, this.iE = function(b3) {
		return this.rI.push(b3), this.rJ.appendChild(b3.iG), b3
	}, this.resize = function() {
		for (var az = this.rI.length, b0 = 0; b0 < az; b0++) this.rI[b0].resize && this.rI[b0].resize()
	}, (rJ = this.rJ).style.position = "absolute", rJ.style.height = "auto", rJ.style.padding = "0.5em"
}

function rS() {
	var gap, fc, fW = [0, 0, 0, 0, 0],
		fX = [0, 0, 0, 0, 0],
		nm = [1, 1, 1, 1, 1],
		c8 = [!0, !0, !0, !1, !1],
		dI = (this.lY = [!0, !0, !0, !1, !1], null);
	this.rT = function(jj, rU) {
		dI = jj, c8 = rU, fc = [mp.mr, mp.ms, mp.mt, mp.mt, mp.rV], this.b()
	}, this.b = function() {
		if (dg.dh()) {
			var b0, eF = Math.floor((dY.dc.fs() ? .261 : .195) * eE.dP),
				eH = Math.floor(.9 * eF),
				eG = Math.floor(.17 * eH);
			if (gap = dY.dc.fs() ? 2 * di.gap : di.gap, nm[0] = eF / dI[0].width, nm[1] = eH / dI[1].width, nm[2] = eG / dI[2].height, nm[3] = eG / dI[3].height, nm[4] = eG / dI[4].height, nm[2] *= 1.7, nm[3] *= 1.07, fW[0] = gap, fW[1] = gap,
				fW[2] = gap, fW[3] = gap, fW[4] = Math.floor(2 * gap + nm[3] * dI[3].width), fX[0] = gap, fX[1] = fX[0] + gap + nm[0] * dI[0].height, fX[2] = fX[1] + gap + nm[1] * dI[1].height, fX[3] = fX[2] + gap + nm[2] * dI[2].height, fX[4] =
				fX[3], !c8[0])
				for (b0 = 0; b0 < 5; b0++) fX[b0] -= nm[0] * dI[0].height + gap;
			if (!c8[1])
				for (b0 = 2; b0 < 5; b0++) fX[b0] -= nm[1] * dI[1].height + gap
		}
	}, this.mF = function() {
		return !(7 === cj.ek() && dY.dc.fs())
	}, this.io = function(kU, kV) {
		if (dI && this.mF())
			for (var b0 = c8.length - 1; 0 <= b0; b0--)
				if (c8[b0] && this.lY[b0] && fW[b0] < kU && fX[b0] < kV && kU < fW[b0] + nm[b0] * dI[b0].width && kV < fX[b0] + nm[b0] * dI[b0].height) return cT.iD(9, cT.cU, new rW(L(88), bA.fu.rX(fc[b0]))), !0;
		return !1
	}, this.gl = function() {
		if (dI && this.mF()) {
			var b0;
			for (dZ.imageSmoothingEnabled = !0, b0 = 0; b0 < 5; b0++) c8[b0] && this.lY[b0] && (dZ.setTransform(nm[b0], 0, 0, nm[b0], fW[b0], fX[b0]), dZ.drawImage(dI[b0], 0, 0));
			dZ.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function rY() {
	var bF;
	10 === cd.cf ? bF =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === cd.cf ? bF =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === cd.cf ? bF =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === cd.cf ? bF =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === cd.cf ? bF =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === cd.cf ? bF =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === cd.cf ? bF =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === cd.cf ? bF =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === cd.cf ? bF =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === cd.cf ? bF =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === cd.cf ? bF =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === cd.cf && (bF =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new rZ).eQ(bF)
}

function ra() {
	this.eL = function(bE, b1) {
		return Math.floor((bE + .5) / b1)
	}, this.rb = function(bE, b1) {
		return Math.floor(bE * (b1 + .5))
	}, this.sqrt = function(c8) {
		return ~~Math.sqrt(c8 + .5)
	}, this.pow = function(iG) {
		return Math.floor(Math.pow(2, iG) + .5)
	}, this.q = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.rc = function(lU, lW, lY) {
		return Math.max(Math.min(lU, lW), lY)
	}, this.rd = function(re, rf, fW, fX) {
		fW -= re, re = fX - rf, fX = 0;
		return 0 == fW ? fX = 0 <= re ? Math.PI : 0 : (fX = Math.atan(re / fW), fX += 0 < fW ? .5 * Math.PI : 1.5 * Math.PI), fX
	}, this.log2 = function(c8) {
		return Math.floor(!!c8 * (1 + Math.log2(c8 + .5)))
	}, this.log10 = function(c8) {
		return Math.floor(Math.log10(c8 + .5))
	}, this.rh = function(ri, rj, rk, rl, rm) {
		return rk - rm < ri && ri < rk + rm && rl - rm < rj && rj < rl + rm
	}, this.rn = function(ro, rp) {
		return ro * ro + rp * rp
	}
}

function rq() {
	var rr = new Uint8Array(c.iC),
		rs = new Uint16Array(c.iC),
		rt = new Uint16Array(c.iC),
		ru = new Uint8Array(c.iC),
		rv = (this.gx = new Uint8Array(c.iC), new Uint16Array(c.iC)),
		rw = new Uint16Array(c.iC);

	function s8(b0) {
		rr[b0] = 1 + p.eL(rv[b0] * hL.random(), 10 * hL.value(100))
	}
	this.rx = null, this.ry = [97, 94, 70, 40, 20, 0, 100], this.rz = [500, 450, 400, 300, 80, 50, 100], this.s0 = [0, 0, 5, 25, 50, 100, 0], this.gv = [60, 74, 112, 200, 256, 512, 512], this.w = [1, 2, 3, 4, 6, 8, 1], this.s1 = [500, 450, 400, 300,
		80, 50, 100
	], this.s2 = [100, 150, 250, 400, 600, 1e3, 100], this.dT = function() {
		this.rx = [L(89), L(90), L(91), L(92), L(93), L(94), "H Bot"]
	}, this.b = function() {
		rr.fill(0), rs.fill(0), rt.fill(0), ru.fill(0), this.gx.fill(0), rv.fill(0), rw.fill(0);
		var s3 = c.fl;
		if (9 === c.d) this.s4();
		else if (c.fk)
			if (3 === c.data.botDifficultyType)
				for (b0 = c.fm - 1; 0 <= b0; b0--) {
					var s6 = b0 + s3;
					this.gx[s6] = c.data.botDifficultyData[s6]
				} else if (2 === c.data.botDifficultyType)
					for (b0 = c.fm - 1; 0 <= b0; b0--) this.gx[s6 = b0 + s3] = c.data.botDifficultyTeam[jG.jH[jG.jJ[s6]]];
				else if (1 === c.data.botDifficultyType) {
			var s7 = this.rx.length;
			for (b0 = c.fm - 1; 0 <= b0; b0--) this.gx[b0 + s3] = b0 % s7
		} else
			for (s7 = c.data.botDifficultyValue, b0 = c.fm - 1; 0 <= b0; b0--) this.gx[b0 + s3] = s7;
		else
			for (var s5 = 8 === c.d ? 1 : 0, b0 = c.fm - 1; 0 <= b0; b0--) this.gx[b0 + s3] = s5;
		for (b0 = 0; b0 < s3; b0++) this.gx[b0] = 6;
		var az = c.iC;
		for (b0 = 0; b0 < az; b0++) this.gx[b0] <= 2 ? (ru[b0] = 5, rv[b0] = rw[b0] = 1040, 0 === this.gx[b0] ? (rs[b0] = 980, rt[b0] = 980) : 1 === this.gx[b0] ? (rs[b0] = 980, rt[b0] = 920, rv[b0] = rw[b0] = 1100) : (rs[b0] = 825, rt[b0] =
			750)) : this.gx[b0] <= 4 ? (ru[b0] = 1 + hL.s9(20), 3 === this.gx[b0] ? (rs[b0] = rt[b0] = 500, rv[b0] = rw[b0] = 1e3) : (rw[b0] = 250 + hL.s9(1501), rv[b0] = 500 + hL.s9(501), rs[b0] = 300 + hL.s9(201), rt[b0] = 100 + hL.s9(
			201))) : this.gx[b0] <= 5 ? (rv[b0] = 1e3, rw[b0] = 1e3, ru[b0] = 35 + hL.s9(16), rs[b0] = 300 + hL.s9(201), rt[b0] = 50 + hL.s9(101)) : (rv[b0] = rw[b0] = 800, ru[b0] = 5, rs[b0] = 10, rt[b0] = 250), s8(b0)
	}, this.s4 = function() {
		for (var g5 = sA.sB, s3 = c.fl, b0 = g5 - 1; 0 <= b0; b0--) this.gx[b0 + s3] = 0;
		for (var b1 = 0; b1 < 6; b1++) {
			for (b0 = g5 + sA.sC[b1] - 1; g5 <= b0; b0--) this.gx[b0 + s3] = b1;
			g5 += sA.sC[b1]
		}
	}, this.sD = function(j6, value) {
		rr[j6] = Math.min(value, rr[j6])
	}, this.bS = function(j6) {
		0 == --rr[j6] && ! function(j6) {
			(function(j6) {
				rv[j6] !== rw[j6] && (rv[j6] += rv[j6] < rw[j6] ? 3 : -3);
				rs[j6] !== rt[j6] && (rs[j6] += rs[j6] < rt[j6] ? ru[j6] : -ru[j6], rs[j6] = (Math.abs(rs[j6] - rt[j6]) <= ru[j6] ? rt : rs)[j6]);
				rr[j6] = p.eL(rv[j6], 10)
			})(j6), jN.sG.sH(j6, p.eL(rs[j6] * z.gA[j6], 1e3))
		}(j6)
	}, this.sI = function(j6, bD) {
		rv[j6] = rw[j6] = bD
	}
}

function sJ() {
	var sK, sL, size, nW, gx, sM;

	function sN(player) {
		return player < c.fl ? sK * player : sK * c.fl + sL * (player - c.fl)
	}
	this.b = function() {
		sK = c.fl < 16 ? 12 : 8, sL = 4;
		var az = sN(c.iC);
		size = new Uint8Array(c.iC), nW = new Uint16Array(az), gx = new Uint32Array(az), sM = new Uint8Array(az)
	}, this.sO = function(sP, sQ) {
		var sR = this.sS(sP, sQ),
			sQ = (this.sT(sP, sQ, 0), bA.gc.sV(sP, sR));
		gq.sW(sP, sR - sQ, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.sX = function(player, sQ) {
		var sZ, sQ = function(player, sQ) {
			var b0, c6 = sN(player);
			for (b0 = size[player] - 1; 0 <= b0; b0--)
				if (nW[c6 + b0] === sQ) return b0;
			return size[player]
		}(player, sQ);
		sQ !== size[player] && (sZ = gx[sN(player) + sQ], this.sa(player, sQ), this.eT(player, sZ, c.iC))
	}, this.sb = function(player, sQ) {
		for (var c6 = sN(player), b0 = size[player] - 1; 0 <= b0; b0--)
			if (nW[c6 + b0] === sQ) return !0;
		return !1
	}, this.sc = function(player) {
		return player < c.fl ? size[player] < sK : size[player] < sL
	}, this.o5 = function(player) {
		return size[player]
	}, this.oD = function(player, b0) {
		return nW[sN(player) + b0]
	}, this.oI = function(player, b0) {
		return gx[sN(player) + b0]
	}, this.sS = function(player, sQ) {
		for (var c6 = sN(player), b0 = size[player] - 1; 0 <= b0; b0--)
			if (nW[c6 + b0] === sQ) return gx[c6 + b0];
		return 0
	}, this.sd = function(player) {
		for (var c6 = sN(player), c8 = 0, b0 = size[player] - 1; 0 <= b0; b0--) c8 += gx[c6 + b0];
		return c8
	}, this.sT = function(player, sQ, sZ) {
		for (var c6 = sN(player), b0 = size[player] - 1; 0 <= b0; b0--) nW[c6 + b0] === sQ && (gx[c6 + b0] = sZ)
	}, this.se = function(player, b0, sZ) {
		gx[sN(player) + b0] = Math.max(sZ, 0)
	}, this.sf = function(player, b0) {
		sM[sN(player) + b0] = 0
	}, this.sg = function(player, b0) {
		return sM[sN(player) + b0]
	}, this.eT = function(player, sZ, sQ) {
		jN.sG.sh[player] = jN.sG.sh[sQ] = 8, bA.gc.si(sQ) && gq.gr[6 - bA.gc.mN(player)]++;
		for (var c6 = sN(player), b0 = size[player] - 1; 0 <= b0; b0--)
			if (nW[c6 + b0] === sQ) return gx[c6 + b0] += sZ, void(gx[c6 + b0] = gx[c6 + b0] > c.sj ? c.sj : gx[c6 + b0]);
		nW[c6 + size[player]] = sQ, gx[c6 + size[player]] = sZ, sM[c6 + size[player]] = 1, size[player]++, sQ === c.ba ? e.sk(player, 5) : player < c.fl && player === c.ba && e4.sl(sQ)
	}, this.sa = function(player, cE) {
		var bE, c6;
		if (0 !== size[player])
			for (c6 = sN(player), size[player]--, bE = cE; bE < size[player]; bE++) nW[c6 + bE] = nW[c6 + bE + 1], gx[c6 + bE] = gx[c6 + bE + 1], sM[c6 + bE] = sM[c6 + bE + 1]
	}, this.sm = function(player) {
		for (var bE, c6, sn = [], b0 = bc.bd - 1; 0 <= b0; b0--)
			for (c6 = sN(bc.gb[b0]), bE = size[bc.gb[b0]] - 1; 0 <= bE; bE--)
				if (nW[c6 + bE] === player) {
					sn.push(bc.gb[b0]);
					break
				} return sn
	}
}

function so() {
	this.sp = function(sq) {
		return 0 === sq ? 1 === c.dr && c.g3 : 1 === sq ? 1 === c.dr && !c.g3 : 2 === c.dr
	}, this.gd = function(player) {
		return 0 !== z.bZ[player] && 2 !== z.sr[player]
	}, this.ss = function(player) {
		return player === c.ba && 2 !== z.sr[player]
	}, this.st = function(player, nW) {
		return player !== nW && (0 === jG.jJ[player] || jG.jJ[player] !== jG.jJ[nW])
	}, this.su = function() {
		return bc.bd < 2 ? 0 : c.gQ ? 1 < e6.sv() : z.fo[gS[1]]
	}, this.sw = function() {
		var bd = bc.bd;
		if (0 !== bd) {
			if (!c.gQ) return !this.mN(gS[0]);
			for (var jJ = jG.jJ, sx = e6.jF(), gb = bc.gb, b0 = bd - 1; 0 <= b0; b0--) {
				var j6 = gb[b0];
				if (jJ[j6] === sx && !this.mN(j6)) return 1
			}
		}
		return 0
	}, this.si = function(player) {
		return player === c.ba
	}, this.sy = function(nW, nm) {
		return z.gA[c.ba] < nm * z.gA[nW]
	}, this.mN = function(player) {
		return player >= c.fl || 2 === z.sr[player]
	}, this.j4 = function(player) {
		return 0 !== z.bZ[player]
	}, this.sz = function(player) {
		return player < c.fl
	}, this.t0 = function(t1, t2) {
		return t1 !== t2
	}, this.sV = function(player, c8) {
		var min;
		return c8 = this.t3(player, c8), z.gA[player] += c8, z.t4[player] && (min = Math.min(z.t4[player], z.gA[player]), z.t4[player] -= min, z.gA[player] -= min), c8
	}, this.t3 = function(player, c8) {
		var t5 = z.gA[player];
		return c8 = Math.min(c8, z.fo[player] * c.t6 - t5), c8 = Math.min(c8, c.sj - t5), Math.max(c8, 0)
	}, this.t7 = function(player, km, t8, t9) {
		var t5 = z.gA[player],
			km = p.eL(t5 * (km + 1), 1024),
			t8 = p.eL(t8 * t5, 1024),
			km = Math.min(km, t5 - t8);
		return 10 === c.d && (km = tB.tC(player, km)), a4.lH[0] = km, a4.lH[1] = t8, t9 <= km
	}, this.tD = function(player, tE, tF) {
		var player = z.gA[player],
			tA = p.eL(64 * player, 1024);
		return tE = Math.min(tE, player - tA), tE = this.t3(tF, tE), a4.lH[0] = tE, a4.lH[1] = tA, 1 <= tE
	}, this.tG = function(player, tE, tF) {
		var player = z.gA[player],
			tA = p.eL(64 * player, 1024);
		return tE = Math.min(tE, player - tA), this.t3(tF, tE)
	}, this.tH = function(tE, tF) {
		return tE = this.t3(tF, tE), a4.lH[0] = tE, a4.lH[1] = 0, 1 <= tE
	}, this.kl = function(player, tI) {
		return p.eL(z.gA[player] * (tI + 1), 1024)
	}, this.tJ = function(player, t8) {
		t8 = p.eL(t8 * z.gA[player], 1024);
		a4.lH[1] = t8, z.gA[player] -= t8
	}, this.tK = function(player, tL) {
		var lW, lY, b1 = z.gA[player];
		return tL <= b1 ? z.gA[player] -= tL : (z.gA[player] = 0, lY = z.t4[player] + (lW = 5 * ((b1 = tL - b1) >> 2)), gq.sW(player, lW - b1, 12), lY <= c.tM ? z.t4[player] = lY : (z.t4[player] = c.tM, gq.sW(player, lY - c.tM, 18))), tL
	}, this.tN = function(player, km) {
		var gA = z.gA,
			t5 = gA[player],
			km = p.eL(t5 * (km + 1), 1024),
			tA = Math.max(p.eL(t5, 10), 1e3);
		return (km = Math.min(km, t5 - tA)) < 0 ? (gA[player] = 0, tA = Math.min(1e3, t5 + c.tM - z.t4[player]), a4.lH[1] = tA, z.t4[player] += tA - t5, 0) : (a4.lH[1] = tA, 10 === c.d && (km = tB.tC(player, km)), gA[player] -= tA + km, km)
	}, this.tO = function(player) {
		z.gA[player] -= a4.lH[0] + a4.lH[1]
	}, this.tP = function(player, nW) {
		return (nW = Math.min(nW, c.iC)) < c.iC && 0 === z.bZ[nW] && (nW = c.iC), (a4.lN[0] = nW) === c.iC || tQ.tR(player, nW)
	}, this.tS = function(player, tF) {
		return 0 !== z.bZ[tF] && !tQ.tR(player, tF)
	}, this.tT = function(player, tU) {
		for (var j6, az = bc.bd, at = 0, tV = gS, b0 = 0; b0 < az; b0++)
			if (j6 = tV[b0], !this.mN(j6)) {
				if (player === j6) return !0;
				if (++at > tU) return !1
			} return !1
	}, this.j2 = function(j6) {
		var gP = c.gQ ? e6.gR() : z.fo[gS[0]];
		return gP >= p.eL(j6 * c.fp, 100)
	}, this.tW = function(c8, min, max) {
		return Math.floor(p.q(isNaN(c8) ? 0 : Number(c8), min, max))
	}
}

function tX() {
	this.iN = new tY, this.cz = new tZ, this.ep = new ta, this.u = new tb, this.tc = new td, this.b = function() {
		this.cz.b(), (new te).b(), this.tc.b(), this.u.tf()
	}
}

function tg() {
	var dO, canvas, fV, th, ti, tj, tk, nS, tl, tm, tn, tq, tp = !1,
		jj = (this.mF = !1, this.c1 = 0, new Array(2)),
		tr = 0;

	function tt() {
		var c1 = dz.c1,
			c6 = (nS = !1, tu(fV, c1, dO), Math.floor(c1 / 2));
		1 === th ? (fV.fillStyle = aG.g7, fV.fillRect(c6, 0, c6, dO)) : -1 === th && (fV.fillStyle = aG.tv, fV.fillRect(0, 0, c6, dO)), tw(fV, c1, dO, 2);
		var c6 = (c6 = Math.floor(.25 * dO)) < 2 ? 2 : c6,
			ty = (fV.fillStyle = aG.tx, Math.floor((dO - 4) * ti[1] / tj[1]));
		0 < ty && fV.fillRect(2, dO - 2 - ty, c6, ty), 0 < (ty = Math.floor((dO - 4) * ti[0] / tj[0])) && fV.fillRect(c1 - 2 - c6, dO - 2 - ty, c6, ty);
		c6 = (c6 = Math.floor(dO / 8)) < 2 ? 2 : c6, u0(fV, Math.floor(.4 * dO), 0, dO, c6, .5, !1), u0(fV, Math.floor(c1 - 1.4 * dO), 0, dO, c6, .5, !0), ty = 1.1 * dO / jj[0].width;
		fV.imageSmoothingEnabled = !0, fV.setTransform(ty, 0, 0, ty, (c1 - ty * jj[0].width) / 2, -.05 * dO), fV.drawImage(jj[+tp], 0, 0), fV.setTransform(1, 0, 0, 1, 0, 0)
	}

	function u9() {
		tq = -1, tp = uA.uB(), e.uC(257), e.uD(tp), dz.mF = !0, nS = !0, tl = 360;
		for (var c8, g8 = 0, b0 = bc.bd - 1; 0 <= b0; b0--) bA.gc.mN(bc.gb[b0]) || (g8 += z.fo[bc.gb[b0]]);
		tp ? tj[0] = Math.max(p.eL(3 * g8, 4), 1) : c.gQ ? (c8 = p.eL(100 * e6.gR(), c.fp), c8 = 9 === c.d ? p.q(250 - 2 * c8, 50, 100) : p.q(200 - 2 * c8, 40, 100), c8 = p.eL(c8 * g8, 100), tj[0] = Math.max(c8, 1)) : 8 === c.d ? tj[0] = Math.max(p
			.eL(3 * g8, 4), 1) : tj[0] = Math.max(p.eL(3 * g8, 5), 1), tj[1] = Math.max(g8 - tj[0], 1)
	}

	function u5() {
		tn = bT.bU(), nS = !0, tl = th = 0, tk = [], dz.mF = !1, e.uH(247), ti[0] = ti[1] = 0, e.uC(673)
	}

	function u2() {
		return dw.uN(e.uO()) ? __fx.settings.keybindButtons ? dw.fX - 2 * (dO + di.gap) : dw.fX - dO - di.gap : dy.uN(e.uP()) ? dy.u2() - dO - di.gap : eE.dO - dO - uQ.uR() * di.gap
	}
	this.dT = function() {
		for (var b0 = 0; b0 < 2; b0++) jj[b0] = bA.canvas.qJ(dg.get(3), 8 - b0, aG.ts), jj[b0] = bA.canvas.qO(jj[b0])
	}, this.b = function() {
		tn = -1e4, tm = tr = 0, tq = -1, this.mF = !1, nS = tp = !1, ti = [th = tl = 0, 0], tj = [1, 1], tk = [], this.resize()
	}, this.resize = function() {
		dO = dw.dO, this.c1 = 4 * dO, (canvas = document.createElement("canvas")).width = this.c1, canvas.height = dO, fV = canvas.getContext("2d", {
			alpha: !0
		}), tt()
	}, this.g4 = function() {
		nS && tt()
	}, this.io = function(fW, fX) {
		return !!this.mF && !(fW < eE.c1 - this.c1 - di.gap || fX < u2() || (c.bV || this.u3(c.ba) && (dx.m1 && dx.m6(), mf.lo.u4(fW > eE.c1 - di.gap - this.c1 / 2 ? 1 : 0)), 0))
	}, this.bS = function() {
		0 < tm ? 0 === --tm && u5() : this.mF ? 180 == --tl && 3 * ti[0] < tj[0] ? u5() : ti[0] >= tj[0] ? tp ? gX.gY.uG() : gX.gY.gZ() : ti[1] >= tj[1] ? tm = 4 : tl <= 0 && u5() : ! function() {
			var uF = bT.bU();
			if (uF % 40 == 14) {
				if (tr) return !(uF < tr) && !(uF < tn + 535) && (tr = uF + 1071, bA.gc.sw()) ? (u9(), 1) : 0;
				(1 === bc.bd || (c.gQ ? e6.gR() : z.fo[gS[0]]) >= p.eL(96 * c.fp, 100)) && (tr = uF + 535)
			}
			return
		}() && 0 <= tq && (e.j9(250, L(95, [z.jA[tq]]), 673, tq, aG.am, aG.g6, -1, !0), u9())
	}, this.uI = function() {
		this.mF && ti[0] < tj[0] && u5()
	}, this.uJ = function(player, uK) {
		var uL = L(uK ? 96 : 97, [z.jA[player]]),
			uL = (e.j9(450, uL, 257, player, uK ? aG.nn : aG.uM, aG.g6, -1, !0), tk.push(player), nS = !0, c.fk ? Math.max(tj[0], tj[1]) : z.fo[player]),
			uL = Math.max(uL, 1);
		uK ? ti[0] += uL : ti[1] += uL, player === c.ba && (th = uK ? 1 : -1)
	}, this.gl = function() {
		var fX;
		this.mF && (fX = u2(), dZ.drawImage(canvas, eE.c1 - this.c1 - di.gap, fX))
	}, this.mh = function(player) {
		if (0 !== tl) return !1;
		if (!bA.gc.sp(1)) return !1;
		if (!bA.gc.gd(player)) return !1;
		if (10 <= jE[player] && !bA.gc.tT(player, 9)) return !1;
		if (!c.fk) {
			player = bT.bU();
			if (player < tn + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.u3 = function(j6) {
		if (!bA.gc.sp(1)) return !1;
		if (!bA.gc.gd(j6)) return !1;
		if (!this.mF) return !1;
		for (var b0 = tk.length - 1; 0 <= b0; b0--)
			if (tk[b0] === j6) return !1;
		return !0
	}, this.mk = function(player) {
		tq = player
	}
}

function uT() {
	this.uU = new uV
}

function uW() {
	this.bS = function() {
		if (bT.bU() % 51 == 45)
			for (var az = t.u.v, oK = t.u.oK, uY = t.u.uY, oF = t.u.oF, uZ = t.u.uZ, s2 = gw.s2, gx = gw.gx, b0 = 0; b0 < az; b0++) {
				var pI, player, uc, a3 = oK[b0];
				a3 % 64 == 6 || (pI = uY[b0], (player = t.a6.ua(pI[pI.length - 1])) < 0) || !bA.gc.st(player, uZ[b0] >> 3) || hL.s9(1e3) >= s2[gx[player]] || ! function(ug, pI) {
					for (var az = pI.length - 1, uh = t.u.ui[ug], uj = 0, b0 = uh + 1; b0 < az; b0++) uj += a8.kc(pI[b0], pI[b0 + 1]);
					return (uj += a8.kc(a8.l0(t.u.uk[ug]), pI[uh + 1])) <= 60
				}(b0, pI) || (uc = oF[b0], 64 <= a3 && t.ud.ue(player, uc)) || function(player, pI, uc, ug, a3) {
					t.ul.s(player) && bA.gc.t7(player, gw.rz[gw.gx[player]], 32, 0) && (t.u.oK[ug] = 64 + a3 % 64, t.ud.eT(uc, t.u.um), a4.bq[0] = t.un.uo(pI), a4.a5[1] = 6, bA.gc.tO(player), t.u.up(player))
				}(player, pI, uc, b0, a3)
			}
	}
}

function uq(ur, us, ut, uu, uv, uw) {
	var ux = document.createElement("div"),
		uy = document.createElement("div"),
		uz = document.createElement("div"),
		v0 = document.createElement("div"),
		v1 = document.createElement("div"),
		v2 = document.createElement("div"),
		v3 = document.createElement("div"),
		v4 = document.createElement("div"),
		v5 = document.createElement("span"),
		v6 = document.createElement("div");
	this.v7 = new v8(uv, uw), this.v9 = new vA(uw), this.vB = [ur, us, ut, uu], this.vI = function(vJ) {
		vJ = (vJ / 10).toFixed(1) + "%";
		v4.style.width = vJ, v5.innerHTML = vJ
	}, this.vK = function() {
		this.v9.iK(v2), this.v7.show(v2)
	}, this.vL = function() {
		this.v7.iK(v2), this.v9.show(v2)
	}, this.vM = function() {
		return uy
	}, this.show = function() {
		document.body.appendChild(ux)
	}, this.iK = function() {
		cT.removeChild(document.body, ux)
	}, this.resize = function(vN) {
		var vO = 1 - .4 * dY.dc.fs() * (eE.c1 > 1.6 * eE.dO),
			vP = bA.fu.vQ(.05 * vO),
			vR = eE.dO > eE.c1,
			vS = bA.fu.vQ(.07 * vO + .03 * vR),
			vT = bA.fu.vQ(.04 + .02 * vR),
			vR = bA.fu.vQ(.02 * vO + .01 * vR),
			vV = bA.fu.vQ(.025);
		ux.style.font = bA.fu.fv(0, vV), vO < 1 && (vV = bA.fu.fv(0, vO * vV), uz.style.font = vV, v1.style.font = vV, v6.style.font = vV, v3.style.font = vV, v0.style.font = vV), uy.style.height = bA.fu.pa(vP), uy.style.font = bA.fu.fv(0, .72 *
				vP), bA.fu.lj(uy, 2), uz.style.top = bA.fu.pa(vP), uz.style.height = bA.fu.pa(vS), bA.fu.lj(uz, 2), v0.style.font = bA.fu.fv(0, vO * bA.fu.vQ(.02)), v0.style.top = bA.fu.pa(vP + vS), v0.style.height = bA.fu.pa(vT), bA.fu.lj(v0,
			2), v1.style.top = bA.fu.pa(vP + vS + vT), v1.style.height = bA.fu.pa(vS), bA.fu.lj(v1, 2), v2.style.top = bA.fu.pa(vP + vS + vT + vS), v2.style.height = bA.fu.pa(eE.dO / eE.dR - vP - 3 * vS - vT - vR), v3.style.top = bA.fu.pa(eE.dO /
				eE.dR - vS - vR), v3.style.height = bA.fu.pa(vR), bA.fu.lj(v3, 8), v5.style.font = bA.fu.fv(0, .8 * vR), v6.style.top = bA.fu.pa(eE.dO / eE.dR - vS), v6.style.height = bA.fu.pa(vS), bA.fu.lj(v6, 8), ur.resize(uz), us.resize(uz),
			ut.resize(uz), uu.resize(uz), vN ? this.v7.resize(v2) : this.v9.resize()
	};
	uv = this;
	ux.style.position = "absolute", ux.style.top = "0", ux.style.left = "0", ux.style.width = "100%", ux.style.height = "100%", ux.style.backgroundColor = aG.vC, vD.vE() || (ux.style.backdropFilter = "blur(4px)", ux.style.webkitBackdropFilter =
		"blur(4px)"), uy.style.position = "absolute", uy.style.top = "0", uy.style.left = "0", uy.style.width = "100%", uy.style.display = "flex", uy.style.alignItems = "center";
	for (var bq = [uz, v0, v1, v6], b0 = 0; b0 < bq.length; b0++) bq[b0].style.position = "absolute", bq[b0].style.left = "0", bq[b0].style.width = "100%", bA.fu.pb(bq[b0]);
	v2.style.position = "absolute", v2.style.left = "0", v2.style.width = "100%", v2.style.font = "inherit", v3.style.position = "absolute", v3.style.left = "0", v3.style.width = "100%", v4.style.position = "absolute", v4.style.top = "0", v4.style
		.left = "0", v4.style.height = "100%", v4.style.width = "50%", v4.style.backgroundColor = aG.vF, v5.innerHTML = "", v5.style.position = "absolute", v5.style.top = "50%", v5.style.left = "50%", v5.style.transform = "translate(-50%, -50%)", uy
		.appendChild(function() {
			var eI = document.createElement("h1");
			return eI.textContent = L(98), eI.style.margin = "0 auto 0.15em auto", eI.style.fontFamily = "Arial Black, Trebuchet MS", eI.style.fontSize = "inherit", eI.style.fontWeight = "inherit", eI
		}()), uz.appendChild(ur.rJ), v0.appendChild(us.rJ), v1.appendChild(ut.rJ), v3.appendChild(v4), v3.appendChild(v5), v6.appendChild(uu.rJ), ux.appendChild(uy), ux.appendChild(uz), ux.appendChild(v0), ux.appendChild(v1), ux.appendChild(v2), ux
		.appendChild(v3), ux.appendChild(v6), uv.v9.show(v2)
}

function vX() {
	var vY = 0,
		vZ = 0;
	this.va = function(fW, fX) {
		vY = fW, vZ = fX
	}, this.vb = function(code) {
		var kR, kS, jM;
		c.bV || dx.m1 || (bA.gc.sp(0) || bA.gc.sp(1)) && bA.gc.gd(c.ba) && (dw.io(vY, vZ) ? dw.vc = !1 : e0.io(vY, vZ) || (kR = a8.kq(vY), kS = a8.kr(vZ), jM = a8.kt(kR, kS), a8.ks(kR, kS) && (0 === code ? function(jM) {
			var vg, g5, kL;
			c.g3 ? -1 !== (vg = vh.qU(jM)) && mf.lo.vi(jM) : (g5 = a8.a9(jM), aA.vj(g5) ? (vg = vk.vl.vm(g5)) && (kL = a8.a9(vg), kL = aA.jL(kL) ? c.iC : aA.kP(kL), mf.lo.vo(dw.o0(), vg, kL)) : (vg = vh.qV(jM)) < 0 || (g5 = a8.a9(
				vg), aA.jL(g5) ? tQ.vp(c.ba) ? mf.lo.nz(dw.o0(), c.iC) : o4.o5(c.ba) && vq.vr(c.iC, dw.o0()) : (kL = aA.kP(g5), tQ.tR(kL, c.ba) && (tQ.vs(c.ba, kL) ? mf.lo.nz(dw.o0(), kL) : o4.o5(c.ba) && vq.vr(kL, dw
				.o0())))))
		}(jM) : 1 === code ? function(jM) {
			t.vt.vu(c.ba, jM) && mf.lo.vv(dw.o0(), a4.a5[7])
		}(jM) : 2 === code && function(jM) {
			t.vw.vx(c.ba, jM) && mf.lo.vy(dw.o0())
		}(jM))))
	}, this.vz = function() {
		if (!c.bV && !dx.m1 && bA.gc.sp(1)) {
			var j6 = c.ba;
			if (bA.gc.gd(j6)) {
				var az = o4.o5(j6);
				if (az < 1) ! function() {
					var j6 = c.ba;
					if (tQ.vp(j6)) mf.lo.nz(dw.o0(), c.iC);
					else
						for (var w3 = aA.w3, w4 = z.w4, az = w4[j6].length, w5 = Math.floor(Math.random() * az), b0 = 0; b0 < az; b0++)
							for (var hc = 3; 0 <= hc; hc--) {
								var s6 = w4[j6][(b0 + w5) % az] + w3[hc];
								if (aA.w6(s6)) {
									s6 = aA.kP(s6);
									if (s6 !== j6 && (!c.gQ || tQ.tR(j6, s6))) return mf.lo.nz(dw.o0(), s6)
								}
							}
				}();
				else {
					for (var w1 = 0, gx = o4.oI(j6, 0), b0 = 1; b0 < az; b0++) {
						var w2 = o4.oI(j6, b0);
						w2 < gx && (gx = w2, w1 = b0)
					}
					mf.lo.nz(dw.o0(), o4.oD(j6, w1))
				}
			}
		}
	}, this.mk = function() {
		if (!c.bV && !dx.m1 && bA.gc.gd(c.ba) && bA.gc.sp(1)) return dz.mF ? dz.u3(c.ba) ? void mf.lo.u4(1) : void 0 : void(dz.mh(c.ba) && mf.lo.mk())
	}
}

function w8() {
	this.w9 = 32, this.fW = 0, this.fX = 0, this.l3 = 0, this.wA = 0, this.wB = 4, this.l2 = null, this.wC = new Int16Array(9), this.b = function() {
		this.l3 = 1 + p.eL(cd.fR - 1, this.w9), this.wA = 1 + p.eL(cd.fS - 1, this.w9), this.l2 = new Array(this.l3 * this.wA), bA.c3.wD(this.l2);
		var fW, fX, wC = this.wC,
			c1 = this.l3;
		for (fW = -1; fW <= 1; fW++)
			for (fX = -1; fX <= 1; fX++) wC[3 * (1 + fX) + 1 + fW] = fX * c1 + fW
	}, this.up = function(wF, b0) {
		return this.l2[b0].push(wF), this.l2[b0].length - 1
	}, this.wG = function(wH, wI, wJ) {
		var wK, wL, wI = a8.l1(wI),
			wJ = a8.l1(wJ);
		return wI === wJ ? wH : (wK = this.l2[wI].pop(), this.l2[wI].length === wH ? this.up(wK, wJ) : (wL = this.l2[wI][wH], this.l2[wI][wH] = wK, t.u.wM[wK] = wH, this.up(wL, wJ)))
	}
}

function wN() {
	this.wO = function(player) {
		wP.wQ(player), c.fn++, z.sr[player] = 2, z.wR[player] = eW.wS.wT(), player === c.ba && (e5.show(!1, !1), du.g1(), gX.wU.wV()), e4.sl(player)
	}
}

function wW() {
	e.bS(), e4.bS(), du.gJ(), bW.u.bS()
}

function wX() {
	vq.bS(), wP.bS(), wY.bS(), gB.bS(), tB.bS(), wZ.bS(), jN.bS(), t.u.bS(), bc.wa(), ds.bS(), sA.bS(), mi.bS(), e4.bS(), e4.wb(), du.bS(), wc.bS(), dt.bS(), e0.bS(), e.bS(), wd.bS(), dw.bS(), dz.bS(), gq.bS(), e6.bS(), bW.u.bS(), bW.we.bS(), cT
	.bS(), eR.eS.bS(), jd.bS(), bT.bS()
}

function wf() {
	wg.bS(), e5.bS(), e1.bS(), wh.bS(), dy.bS(), cY.wi()
}

function wj() {
	ds.g4(!1), e0.g4(), du.g4(!1), dt.g4(), dw.g4(), dz.g4(), e4.g4(!1), e6.tt()
}

function wk() {
	e4.g4(!1) && (bT.eA = !0), bW.u.bS()
}

function wl() {
	var wm = 0,
		wn = 0,
		wo = 0,
		wp = null,
		wq = null;

	function wt(b3, wv, wy) {
		var bF = b3.username;
		return (bF += "   " + ax.a6.bG(b3.aq, b3.at, b3.bH)) + function(b3) {
			b3 = b3.d6;
			if (b3 < 1e3) return "   Gold: " + b3;
			if ((b3 %= 1024) < 1e3) return "   Gold: " + b3 + "k";
			return "   Gold: " + (b3 - 999) + "M"
		}(b3) + ("   IP: " + aV.aW.aX(b3.x0, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][wy ? wn : ws(b3, wv)])
	}

	function ws(b3, wv) {
		return wn = wv || ax.ay.av(b3.aY) ? 1 : 0
	}
	this.wr = function() {
		!wm || wn === ws(wq) && wo === wq.d6 || (wo = wq.d6, wp.show(-1, -1, wt(wq, 0, 1), 1, 1))
	}, this.wu = function(iG, b3, wv) {
		var ww = iG.target.getBoundingClientRect();
		this.show(ww.left, ww.top, b3, 0, wv), iG.target.addEventListener("mouseleave", function remove() {
			iG.target.removeEventListener("mouseleave", remove), ax.wx && ax.wx.iK(1)
		})
	}, this.show = function(fW, fX, b3, x1, wv) {
		wp = wp || new x2, wo = (wq = b3).d6, wp.show(fW, fX, wt(b3, wv), x1), wm = 1
	}, this.iK = function(x3) {
		wp && wp.iK(x3) && (wm = 0, wq = null)
	}
}

function js(title, rP, x4, x5) {
	var iP, x6;
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), x6.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, x5 = x5 || [new hs("⬅️ " + L(33), function() {
		cT.hz()
	})], iP = new hr(title, x5), x6 = new x7(iP.hv, rP), x4 && bA.fu.textAlign(iP.hv.style, 1)
}

function x8() {
	function xT(bq, oE, pl) {
		var xU = bq[oE];
		bq[oE] = bq[pl], bq[pl] = xU
	}
	this.aw = [
		[],
		[],
		[],
		[]
	], this.cK = [0, 0, 0, 0], this.cR = [], this.wO = function(x9, aY, username, aq, at, bH, elo, color, d6, x0) {
		username = this.xB(aY, username, aq, at, bH, elo, color, d6, x0);
		this.aw[x9].push(username), ax.xC === aY && (ax.b4 = username), ax.xD.xE(aY) && (username.xF = 1), ax.u.cS += 29 === cT.cU && ax.u.cV[0] === x9 && 1 === ax.u.cV[2]
	}, this.xB = function(aY, username, aq, at, bH, elo, color, d6, x0) {
		return {
			aY: aY,
			username: username,
			aq: aq,
			at: at,
			bH: bH,
			elo: elo,
			color: color,
			d6: d6,
			x0: x0
		}
	}, this.xG = function(cE, x9, aq, at, bH, elo, d6, color) {
		cE = this.aw[x9][cE];
		cE.aq = aq, cE.at = at, cE.bH = bH, cE.elo = elo, cE.d6 = d6, cE.color = color, ax.u.cS += 29 === cT.cU && ax.u.cV[0] === x9 && 1 === ax.u.cV[2]
	}, this.xH = function(cE, x9, xI) {
		var cE = this.aw[x9][cE],
			xJ = cE.username,
			xK = "Redacted " + aV.aW.aX(cE.aY, 2);
		cE.username = xI ? "[" + bA.bB.bC(xJ) + "] " + xK : xK, xJ.indexOf("Redacted") < 0 && (cE.xL = xJ), ax.bN.xM(cE.aY), ax.u.cS += 29 === cT.cU && ax.u.cV[0] === x9 && 1 === ax.u.cV[2]
	}, this.xN = function(cE, xO, xP) {
		var player = this.aw[xO][cE];
		this.xQ(cE, xO), this.aw[xP].push(player), ax.u.cS += 29 === cT.cU && ax.u.cV[0] === xP && 1 === ax.u.cV[2]
	}, this.xQ = function(cE, xO) {
		var ay = this.aw[xO];
		this.cR.push(ay[cE]), 1e3 < this.cR.length && this.cR.shift(), cE >= this.cK[xO] ? ay[cE] = ay[ay.length - 1] : (this.cK[xO]--, 2 === xO ? (ay.splice(this.cK[xO] + 1, 0, ay[ay.length - 1]), ay.splice(cE, 1)) : (ay[cE] = ay[this.cK[xO]],
			ay[this.cK[xO]] = ay[ay.length - 1])), ay.pop(), ax.u.cS += 29 === cT.cU && ax.u.cV[0] === xO && 1 === ax.u.cV[2]
	}, this.xR = function(cE, ao) {
		ax.u.cS += 29 === cT.cU && ax.u.cV[0] === ao && 1 === ax.u.cV[2];
		var ay = this.aw[ao],
			b3 = ay[cE];
		if (2 === ao)
			if (cE >= this.cK[ao]) {
				ax.xD.join(b3);
				for (var xS = this.cK[ao], elo = b3.elo; xS && elo > ay[xS - 1].elo;) xS--;
				ay[cE] = ay[this.cK[ao]], ay.splice(this.cK[ao]++, 1), ay.splice(xS, 0, b3)
			} else ay.splice(this.cK[ao]--, 0, b3), ay.splice(cE, 1);
		else cE >= this.cK[ao] ? (ax.xD.join(b3), xT(ay, this.cK[ao]++, cE)) : xT(ay, --this.cK[ao], cE)
	}, this.av = function(aY) {
		for (var aw = this.aw, az = aw.length, b0 = 0; b0 < az; b0++)
			for (var ay = aw[b0], c6 = ay.length, bE = 0; bE < c6; bE++)
				if (aY === ay[bE].aY) return ay[bE];
		return null
	}
}

function xV() {
	var xX, xY;
	this.xW = 5, this.pK = null;

	function pF(b0) {
		return xY[b0].xg && xX[b0].pF()
	}

	function xk(cu) {
		xY[cu].db = bT.db, xY[cu].xh = !1
	}
	this.xa = 0, this.xb = 0, this.b = function() {
		this.pK = new Array(this.xW);
		this.pK[0] = "territorial.io";
		var fG = hL.xd(0);
		hL.xe(0);
		for (var b0 = 1; b0 < this.xW; b0++) this.pK[b0] = xf.r6() + ".territorial.io";
		for (hL.xe(fG), xX = new Array(this.xW), xY = new Array(this.xW), b0 = this.xW - 1; 0 <= b0; b0--) xY[b0] = {
			xg: !1,
			db: 0,
			xh: !1
		};
		this.xi(0, 0)
	}, this.ei = function(b0) {
		return xX[b0]
	}, this.bS = function() {
		for (var b0 = this.xW - 1; 0 <= b0; b0--) this.pD(b0) && bT.db > xY[b0].db + 15e3 && (bW.em.xj(b0, xY[b0].xh), xk(b0));
		!this.pD(0) && bT.db > xY[0].db + 8e3 && (xY[0].db = bT.db, this.xi(0, 0))
	}, this.xl = function(id) {
		return this.xi(0, id) && this.pE(0)
	}, this.xi = function(cu, p6) {
		if (xY[cu].xg) {
			if (xX[cu].pF()) return xX[cu].pG(p6), xX[cu].pD();
			xX[cu].iK()
		}
		return this.xm(cu, p6), !1
	}, this.xm = function(cu, p6) {
		xY[cu].xg = !0, xk(cu), xX[cu] = new p5, xX[cu].b(cu, p6)
	}, this.pG = function(cu, p6) {
		pF(cu) && xX[cu].pG(p6)
	}, this.pL = function(cu, p6) {
		bW.bX.xn(cu)
	}, this.pE = function(b0) {
		return this.pD(b0) && xX[b0].pE()
	}, this.er = function(b0) {
		xX[b0].er()
	}, this.pD = function(b0) {
		return xY[b0].xg && xX[b0].pD()
	}, this.send = function(cu, cs) {
		0 !== cu && xk(cu), xX[cu].send(cs)
	}, this.xo = function(cu) {
		8 === cj.ek() && (xY[cu].xh = !0, bW.we.bR = !0)
	}, this.close = function(cu, pH) {
		pF(cu) && xX[cu].close(pH)
	}, this.ec = function(cu, pH) {
		xp.xq(pH), pF(cu) && xX[cu].close(pH)
	}, this.xr = function(pH) {
		for (var b0 = this.xW - 1; 0 <= b0; b0--) this.close(b0, pH)
	}, this.xs = function(cu, pH) {
		for (var b0 = this.xW - 1; 0 <= b0; b0--) b0 !== cu && this.close(b0, pH)
	}, this.xt = function() {
		0 === this.xa && (c.fk || c.bV) || this.close(this.xa, 3246)
	}, this.pN = function(cu, iG) {
		xX[cu].iK(), xp.xu(cu, iG.code)
	}
}

function xv() {
	this.bq = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.xw = function() {
		for (var xx = [], bq = this.bq, az = bq.length, b0 = 0; b0 < az; b0++) xx.push(bq[b0]);
		var xy = cy.cz.data[12].qA;
		for (b0 = 0; b0 < az; b0++)
			if (xx[b0] === xy) {
				xx.splice(b0, 1), az--;
				break
			} xx.sort(), az++, xx.unshift(xy);
		try {
			if ("undefined" == typeof Intl) return xx;
			for (b0 = 0; b0 < az; b0++) {
				var bF = new Intl.DisplayNames([xx[b0]], {
					type: "language"
				}).of(xx[b0]);
				bF !== xx[b0] && (xx[b0] = xx[b0] + ": " + bF)
			}
		} catch (iG) {
			console.log("error 3646: " + iG)
		}
		return xx
	}, this.y0 = function(y1) {
		for (var bF = cy.cz.data[12].value, az = y1.length, b0 = 0; b0 < az; b0++)
			if (bF === y1[b0].split(":")[0]) return b0;
		return 0
	}, this.cD = function(y2) {
		if (y2 && !(y2.length < 2)) {
			y2 = y2.split("-")[0].toLowerCase();
			for (var bq = this.bq, az = bq.length, b0 = 0; b0 < az; b0++)
				if (y2 === bq[b0]) return b0
		}
		return -1
	}
}

function y3() {
	var canvas, fV, ww, font, y4 = 0,
		y5 = !1,
		y6 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		y7 = 5;

	function yH() {
		if (y5) {
			var b0, az = y6.length,
				eG = Math.floor(.5 * ww.dO),
				dO = az * eG,
				fW = Math.floor(Math.floor(ww.fW) + .3 * ww.c1 - .5),
				fX = Math.floor(Math.floor(ww.fX) - dO),
				c1 = Math.floor(.4 * ww.c1 + 2.5);
			for (dZ.fillStyle = aG.m4, dZ.fillRect(fW, fX, c1, dO), dZ.fillStyle = aG.yQ, dZ.fillRect(fW, fX + y7 * eG, c1, eG), dZ.fillStyle = aG.am, dZ.fillRect(fW, fX, 2, dO), dZ.fillRect(fW, fX, c1, 2), dZ.fillRect(fW + c1 - 2, fX, 2, dO), b0 =
				1; b0 < az; b0++) dZ.fillRect(fW, fX + b0 * eG, c1, 2);
			for (dZ.fillStyle = aG.am, bA.fu.textAlign(dZ, 1), bA.fu.textBaseline(dZ, 1), dZ.font = bA.fu.fv(0, .6 * eG), fW += .5 * c1, b0 = 0; b0 < az; b0++) dZ.fillText(yR(b0), fW, fX + (b0 + .6) * eG)
		}
		dZ.drawImage(canvas, Math.floor(ww.fW), Math.floor(ww.fX))
	}

	function tt(yJ) {
		var fW, yS, u1, eG;
		fV.clearRect(0, 0, Math.floor(ww.c1), Math.floor(ww.dO)), fV.fillStyle = aG.m4, fV.fillRect(0, 0, Math.floor(ww.c1), Math.floor(ww.dO)), c.mI && (fV.fillStyle = aG.yQ, fV.fillRect(0, 0, Math.floor(.3 * ww.c1), Math.floor(ww.dO))), fV
			.fillStyle = aG.am, fV.fillText("Hide UI", .15 * ww.c1, .5 * ww.dO), fV.fillRect(Math.floor(.3 * ww.c1 - .5), 0, 2, Math.floor(ww.dO)), fW = .5 * ww.c1, fV.fillText("Replay Speed", fW, .31 * ww.dO), fV.fillText(yR(y7), fW, .69 * ww.dO),
			fV.fillRect(Math.floor(.7 * ww.c1 - .5), 0, 2, Math.floor(ww.dO)), yJ.m8 ? (fW = Math.floor(.02 * ww.c1), yJ = Math.floor(.025 * ww.c1), yS = Math.floor(.85 * ww.c1 - fW - .5 * yJ), u1 = Math.floor(.25 * ww.dO), eG = Math.floor(ww.dO) -
				2 * u1, fV.fillRect(yS, u1, fW, eG), fV.fillRect(yS + fW + yJ, u1, fW, eG)) : function() {
				var c1 = Math.floor(.46 * ww.dO),
					dO = Math.floor(.23 * ww.dO),
					fW = Math.floor(.85 * ww.c1 - .5 * c1 + c1 / 12),
					fX = Math.floor(.5 * ww.dO - dO);
				fV.beginPath(), fV.moveTo(fW, fX), fV.lineTo(fW + c1, fX + dO), fV.lineTo(fW, fX + (dO << 1)), fV.fill()
			}(), fV.fillRect(0, 0, Math.floor(ww.c1), 2), fV.fillRect(0, 0, 2, Math.floor(ww.dO)), fV.fillRect(0, Math.floor(ww.dO) - 2, Math.floor(ww.c1), 2), fV.fillRect(Math.floor(ww.c1 - 2), 0, 2, Math.floor(ww.dO))
	}

	function yR(b0) {
		return 5 === b0 ? "Normal" : "" + y6[b0]
	}
	this.m8 = !1, this.b = function() {
		c.bV && (y7 = 5, this.m8 = !1, y5 = !1, ww = new iX([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.y8 = function() {
		return y6[y7]
	}, this.u2 = function() {
		return ww.fX
	}, this.uN = function(y9) {
		return !!c.bV && ww.fW + ww.c1 > eE.c1 - y9 - di.gap
	}, this.resize = function() {
		c.bV && (ww.resize(), ww.fX -= (uQ.uR() - 1) * di.gap, font = bA.fu.fv(0, .3 * ww.dO), (canvas = document.createElement("canvas")).width = Math.floor(ww.c1), canvas.height = Math.floor(ww.dO), (fV = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.fu.textAlign(fV, 1), bA.fu.textBaseline(fV, 1), tt(this))
	}, this.m7 = function(yA) {
		0 === c.dr || cT.mF() || yA !== c.mI && (c.mI = yA, e6.resize(), bT.eA = !0, c.bV) && (y4 = bT.db + 2e3, tt(this))
	}, this.io = function(fW, fX) {
		if (!c.bV) return !1;
		if (fW < ww.fW || fX < ww.fX || fW > ww.fW + ww.c1) return y5 && function(yJ, fW, fX) {
			var az = y6.length,
				eG = Math.floor(.5 * ww.dO),
				dO = az * eG,
				yS = Math.floor(Math.floor(ww.fW) + .3 * ww.c1 - .5),
				dO = Math.floor(Math.floor(ww.fX) - dO),
				c1 = Math.floor(.4 * ww.c1 + 2.5);
			return y5 = !1, bT.eA = !0, fW < yS || yS + c1 < fW || fX < dO || (y7 = yG(0, Math.floor((fX - dO) / eG), az - 1), tt(yJ)), !0
		}(this, fW, fX);
		if ((fW -= ww.fW) < .3 * ww.c1) y5 = !1, this.m7(!c.mI);
		else {
			if (fW < .7 * ww.c1) return y5 = !y5, bT.eA = !0;
			this.m9(!1)
		}
		return !0
	}, this.m9 = function(yC) {
		2 === c.dr ? (this.m7(!1), cT.iD(3)) : (y5 = !1, this.m8 = !this.m8, this.m8 ? (dx.m1 && dx.m6(), dY.dc.setState(1)) : yC || dx.mA(), bT.eA = !0, tt(this))
	}, this.yD = function() {
		this.m8 = !1, dx.mA(), bT.eA = !0, tt(this)
	}, this.yE = function(fW, fX) {
		return !!c.mI && (0 <= dx.io(fW, fX) || (c.bV ? ((bT.db > y4 || !this.io(fW, fX)) && dv.io(fW, fX), bT.eA = !0, y4 = bT.db + 2e3) : dv.io(fW, fX)), !0)
	}, this.bS = function() {
		c.bV && c.mI && bT.db > y4 - 1e3 && bT.db < y4 && (bT.eA = !0)
	}, this.yF = function() {
		c.bV && (this.m8 = !1, bT.eA = !0, tt(this))
	}, this.gl = function() {
		if (c.bV) {
			if (c.mI) {
				if (bT.db > y4) return;
				if (y4 - 1e3 < bT.db) return dZ.globalAlpha = yG(0, (1e3 - (bT.db - (y4 - 1e3))) / 1e3, 1), yH(), void(dZ.globalAlpha = 1)
			}
			yH()
		}
	}
}

function yV() {
	this.yW = function(player) {
		for (var oG = t.u.oG, oE = player << 3, b0 = oE + t.u.x[player] - 1; oE <= b0; b0--) this.yX(oG[b0])
	}, this.yX = function(yY) {
		var u = t.u,
			yZ = u.v - 1,
			ya = u.uZ[yY],
			yb = u.wM[yY],
			yc = u.uk[yY];
		u.v = yZ, u.uZ[yY] = u.uZ[yZ], u.uk[yY] = u.uk[yZ], u.yd[yY] = u.yd[yZ], u.oJ[yY] = u.oJ[yZ], u.wM[yY] = u.wM[yZ], u.oF[yY] = u.oF[yZ], u.oK[yY] = u.oK[yZ], u.ye[yY] = u.ye[yZ], u.uY[yY] = u.uY[yZ], u.ui[yY] = u.ui[yZ], u.oG[u.uZ[yY]] =
			yY,
			function(yh) {
				var player = yh >> 3,
					u = t.u,
					az = u.x[player] - 1,
					yi = (player << 3) + az;
				u.x[player] = az, yi !== yh && (u.oG[yh] = u.oG[yi], u.uZ[u.oG[yh]] = yh)
			}(ya), t.l2.l2[a8.l1(u.uk[yY])][u.wM[yY]] = yY, yZ = a8.l1(yc), ya = yb, yZ = t.l2.l2[yZ], u = yZ.pop(), ya !== yZ.length && (yZ[ya] = u, t.u.wM[u] = ya)
	}
}

function qH() {
	var yk, yl, ym;

	function yt(b0) {
		return bA.color.z9(yl[b0][0], yl[b0][1], yl[b0][2])
	}

	function yz(bE, b1) {
		return bA.color.zA(yl[bE], yl[b1]), yt(b1)
	}

	function yr() {
		yk && (yk.remove(), yk = null)
	}
	this.show = function(d8, colors, id) {
		0 <= (ym = id) && bW.u.pD(0) && bW.bX.yn(0, id), d8 = (d8 = (d8 = (d8 = (d8 = (d8 = (d8 = (d8 = (d8 = (d8 = (d8 = (d8 = d8.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yl = colors, (yk = document.createElement("div")).style.position = "fixed", yk.style.top = "0", yk.style.left = "0", yk.style.width = "100%", yk.style.height = "100%", yk.style.backgroundColor = bA.color.nZ(yl[0][0], yl[0][1], yl[0][
				2], .6), yk.style.zIndex = "6", yk.onclick = function(iG) {
				iG.target === yk && yr()
			},
			function(d8) {
				var qM, ys = document.createElement("div");
				ys.style.position = "absolute", ys.style.display = "flex", ys.style.flexDirection = "column", ys.style.top = "50%", ys.style.left = "50%", ys.style.backgroundColor = yt(2), qM = dY.dc.fs() ? bA.fu.yu(eE.min) : bA.fu.vQ(.4);
				qM = Math.max(qM, 200), ys.style.width = bA.fu.pa(qM), ys.style.height = bA.fu.pa(qM), ys.style.transform = "translate(-50%, -50%)",
					function(ys, qM) {
						var yy = document.createElement("div");
						yy.style.flex = "0 0 10%", yy.style.overflow = "hidden", yy.style.backgroundColor = yt(1), yy.style.color = yz(1, 7), yy.style.font = bA.fu.fv(1, .05 * qM), yy.style.display = "flex", yy.style.alignItems = "center", yy
							.style.justifyContent = "center", yy.innerHTML = L(99), ys.appendChild(yy)
					}(ys, qM),
					function(ys, d8, qM) {
						var z0 = document.createElement("div");
						z0.style.flex = "0 0 70%", z0.style.overflowY = "auto", z0.style.overflowX = "hidden", z0.style.whiteSpace = "pre-wrap", z0.style.wordWrap = "break-word", z0.style.padding = bA.fu.pa(.02 * qM), z0.style.backgroundColor =
							yt(2), z0.style.color = yz(2, 8), z0.style.font = bA.fu.fv(0, .07 * qM), z0.innerHTML = d8, z0.innerHTML = "<style>a { color: inherit; }</style>" + z0.innerHTML, ys.appendChild(z0)
					}(ys, d8, qM),
					function(ys, qM) {
						var z1 = document.createElement("div"),
							z2 = (z1.style.display = "flex", z1.style.flexDirection = "row", z1.style.justifyContent = "space-between", z1.style.alignItems = "stretch", z1.style.backgroundColor = yt(3), z1.style.flex = "1", z1.style.padding = bA
								.fu.pa(.01 * qM), z1.style.gap = bA.fu.pa(.01 * qM), document.createElement("div")),
							z3 = (z2.style.flex = "0 0 60%", z2.style.height = "100%", new hs(L(100, 0, 0, 1), function() {
								yr()
							}, yt(4), !1)),
							z3 = (z3.button.style.width = "100%", z3.button.style.height = "100%", z3.button.style.color = yz(4, 9), z3.button.style.font = bA.fu.fv(1, .05 * qM), z2.appendChild(z3.button), document.createElement("div")),
							z5 = (z3.style.flex = "0 0 15%", z3.style.height = "100%", z3.style.backgroundColor = yt(5), document.createElement("div")),
							z6 = (z5.style.flex = "1", z5.style.height = "100%", new hs(L(101), function(iG) {
								return bA.fu.z7(iG), ym < 0 || bW.u.pD(0) && (bW.bX.yn(1, ym), ym = -1), !0
							}, yt(6), !1));
						z6.button.style.width = "100%", z6.button.style.height = "100%", z6.button.style.color = yz(6, 10), z6.button.style.font = bA.fu.fv(1, .035 * qM), z5.appendChild(z6.button), z1.appendChild(z2), z1.appendChild(z3), z1
							.appendChild(z5), ys.appendChild(z1)
					}(ys, qM), yk.appendChild(ys)
			}(d8), document.body.appendChild(yk)
	}
}

function zB() {
	this.zC = [L(102), L(103), L(104), L(105), L(106), L(107), L(108), L(109), L(110), L(111), L(112), L(113), L(114), L(115), L(116), L(117)];
	var zD = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.zE = new Array(zD.length), this.b = function() {
		var bq = cy.cz.data[155].value.split(";"),
			c6 = bq.length;
		if (function() {
				for (var az = zD.length, b0 = 0; b0 < az; b0++) zG.zE[b0] = zD[b0]
			}(), !(c6 > zD.length))
			for (var b0 = 0; b0 < c6; b0++) bq[b0].length && (this.zE[b0] = bq[b0])
	}, this.zH = function(cE, code) {
		for (var zE = this.zE, zI = zD, bF = (zE[cE] = code, ""), az = zE.length, zJ = [], b0 = 0; b0 < az; b0++) zJ.push(zE[b0] === zI[b0] ? "" : zE[b0]);
		az--;
		for (b0 = 0; b0 < az; b0++) bF += zJ[b0] + ";";
		cy.ep.eq(155, bF += zJ[az])
	}, this.zK = function() {
		cy.ep.eq(155, ""), this.b()
	}, this.dI = function(code, cE) {
		return code === this.zE[cE] || code === this.zE[cE + 1]
	}
}

function zL() {
	function qg(fW, az, fX, zM, qa, qp, player) {
		if (!(fX < 1 || qa < fX))
			for (var b0 = 0; b0 <= az; b0++) {
				var g5 = a8.ku(fW, fX);
				if (t.a6.a7(g5) && !bA.c3.has(zM, aA.kN(g5)) && aA.zR(g5, player)) return g5 >> 2;
				fW += qp
			}
		return -1
	}

	function qk(fX, az, fW, zM, qZ, qp, player) {
		if (!(fW < 1 || qZ < fW)) {
			az = Math.max(az, 0);
			for (var b0 = 0; b0 <= az; b0++) {
				var g5 = a8.ku(fW, fX);
				if (t.a6.a7(g5) && !bA.c3.has(zM, aA.kN(g5)) && aA.zR(g5, player)) return g5 >> 2;
				fX += qp
			}
		}
		return -1
	}

	function qo(kd, ke, a2) {
		return -1 !== ke && (-1 === kd || a8.kf(ke, a2) < a8.kf(kd, a2)) ? ke : kd
	}
	this.vu = function(player, a2) {
		if (t.ul.s(player))
			for (var qX = a8.kH(), zM = [];;) {
				var zN = function(a2, qX, zM, player) {
					for (var kR = a8.jQ(a2), kS = a8.jR(a2), qZ = cd.fR - 2, qa = cd.fS - 2, qb = -1, ca = 0; ca < qX; ca++) {
						var qc = Math.max(kR - ca, 1),
							qd = Math.max(kS - ca, 1),
							qe = Math.min(kR + ca, qZ),
							qf = Math.min(kS + ca, qa),
							kd = qg(kR, qe - kR, kS - ca, zM, qa, 1, player),
							ke = qg(kR - 1, kR - qc - 1, kS - ca, zM, qa, -1, player),
							qe = qg(kR, qe - kR, kS + ca, zM, qa, 1, player),
							qc = qg(kR - 1, kR - qc - 1, kS + ca, zM, qa, -1, player),
							qj = qk(kS, qf - kS - 1, kR - ca, zM, qZ, 1, player),
							ql = qk(kS - 1, kS - qd - 2, kR - ca, zM, qZ, -1, player),
							qf = qk(kS, qf - kS - 1, kR + ca, zM, qZ, 1, player),
							qd = qk(kS - 1, kS - qd - 2, kR + ca, zM, qZ, -1, player);
						if (qb = qo(qb, kd, a2), qb = qo(qb, ke, a2), qb = qo(qb, qe, a2), qb = qo(qb, qc, a2), qb = qo(qb, qj, a2), qb = qo(qb, ql, a2), qb = qo(qb, qf, a2), 0 <= (qb = qo(qb, qd, a2)) && ca * ca >= a8.kf(qb, a2)) return qb
					}
					return -1
				}(a2, qX, zM, player);
				if (-1 === zN) break;
				var id = aA.kN(a8.a9(zN));
				if (t.a6.zP(player, id)) return !! function(player, zN, a2) {
					for (var hc = a8.l5(zN, a2), b0 = 0; b0 < 4; b0++) {
						var jM = a8.aC(zN, hc);
						if (aA.qW(a8.a9(jM), player)) return a4.a5[6] = hc, 1;
						hc = (hc + 1) % 4
					}
					return
				}(player, zN, a2) && (a4.a5[7] = zN, !0);
				zM.push(id)
			}
		return !1
	}
}

function zS() {
	function zj() {
		var id = eO.eP(3);
		return 0 === id ? {
			id: id,
			aY: eO.eP(30),
			aZ: ax.zm.cG(c9.dB.eQ(7))
		} : 1 === id ? {
			id: id,
			aY: eO.eP(30),
			ab: eO.eP(3),
			value: eO.eP(30),
			target: eO.eP(30)
		} : 2 === id ? {
			id: id,
			aY: eO.eP(30),
			ab: eO.eP(3)
		} : 3 === id ? {
			id: id,
			aY: eO.eP(30),
			ab: eO.eP(3),
			value: eO.eP(4),
			target: eO.eP(30)
		} : 4 === id ? {
			id: id,
			aY: eO.eP(30),
			ab: eO.eP(3),
			target: eO.eP(30)
		} : 5 === id ? {
			id: id,
			ab: eO.eP(6)
		} : 6 === id ? {
			id: id,
			value: eO.eP(17)
		} : null
	}
	this.zT = function(cu) {
		if (cu !== bW.u.xb) bW.u.close(cu, 3239);
		else if (6 !== cj.ek()) bW.u.close(cu, 3271);
		else {
			ax.b();
			for (var b0 = 0; b0 < 4; b0++) {
				var cL = ax.u.bJ[b0],
					playerCount = (cL.vJ = eO.eP(10), cL.cf = eO.eP(6), cL.mapSeed = eO.eP(14), cL.cN = eO.eP(4), cL.zU = eO.eP(6), cL.zV = eO.eP(4), cL.cc = eO.eP(1), cL.zW = eO.eP(12), cL.spawningSeed = eO.eP(14), eO.eP(16));
				ax.ay.cK[b0] = eO.eP(16);
				for (var bE = 0; bE < playerCount; bE++) ax.ay.wO(b0, eO.eP(30), c9.dB.eQ(5), eO.eP(4), eO.eP(30), eO.eP(7), eO.eP(16), eO.eP(18), eO.eP(11), eO.eP(12))
			}
			cT.iD(29), ax.u.zX(!0)
		}
	}, this.zY = function(cu) {
		if (cu !== bW.u.xb) bW.u.close(cu, 3239);
		else if (ax.zZ) {
			ax.u.za[0] = eO.eP(20), ax.u.za[1] = eO.eP(20);
			for (var zb = eO.eP(16), bE = 0; bE < zb; bE++) {
				var id = eO.eP(3);
				0 === id ? ax.ay.wO(eO.eP(2), eO.eP(30), c9.dB.eQ(5), 0, 1234566, 127, 0, eO.eP(18), 0, eO.eP(12)) : 1 === id ? ax.ay.xR(eO.eP(16), eO.eP(2)) : 2 === id ? ax.ay.xN(eO.eP(16), eO.eP(2), eO.eP(2)) : 3 === id ? ax.ay.xQ(eO.eP(16), eO
					.eP(2)) : 4 === id ? ax.ay.xG(eO.eP(16), eO.eP(2), eO.eP(4), eO.eP(30), eO.eP(7), eO.eP(16), eO.eP(11), eO.eP(18)) : 5 === id && ax.ay.xH(eO.eP(16), eO.eP(2), eO.eP(1))
			}
			for (var b0 = 0; b0 < 4; b0++) {
				var cL = ax.u.bJ[b0];
				if (cL.vJ = eO.eP(10), 0 === cL.vJ) {
					if (cL.xa = eO.eP(10), cL.cW = eO.eP(10), ax.zc.cJ(b0)) return;
					cL.cf = eO.eP(6), cL.mapSeed = eO.eP(14), cL.cN = eO.eP(4), cL.zU = eO.eP(6), cL.zV = eO.eP(4), cL.cc = eO.eP(1), cL.zW = eO.eP(12), cL.spawningSeed = eO.eP(14), cL.zd.push(cL.zd[0]), cL.zd.shift()
				}
			}
			ax.u.ze()
		} else bW.u.close(cu, 3251)
	}, this.zf = function(cu) {
		if (cu !== bW.u.xb) bW.u.close(cu, 3272);
		else if (ax.zZ) {
			for (var ao = eO.eP(4), cL = ax.u.bJ[ao], bL = cL.bL, zh = (cL.zg = eO.eP(20), eO.eP(6)), b0 = 0; b0 < zh; b0++) {
				var zi = zj();
				ax.bN.zk(zi), bL.push(zi)
			}
			ax.u.zl(ao)
		} else bW.u.close(cu, 3273)
	}, this.zn = function(cu) {
		cu !== bW.u.xb ? bW.u.close(cu, 3276) : ax.zZ ? ax.message.c0(zj()) : bW.u.close(cu, 3277)
	}
}

function zo() {
	this.zP = function(player, id) {
		for (var zp = z.a0[player], az = zp.length, b0 = 0; b0 < az; b0++)
			if (a8.kJ(zp[b0], id)) return !0;
		return !1
	}, this.zq = function(player, jM) {
		for (var ke, zr, g5, zp = z.a0[player], az = zp.length, c1 = cd.fR, zt = a8.jQ(jM), zu = a8.jR(jM), zv = -1, min = cd.fR * cd.fR + cd.fS * cd.fS, id = aA.kN(a8.a9(jM)), b0 = 0; b0 < az; b0++)(zr = (zr = zt - (ke = (g5 = zp[b0]) >> 2) %
			c1) * zr + (zr = zu - ~~((.5 + ke) / c1)) * zr) < min && a8.kJ(g5, id) && (min = zr, zv = ke);
		return zv
	}, this.zw = function(kd, ke) {
		for (var id = aA.kN(a8.a9(ke)), kK = a8.kF, g5 = a8.a9(kd), zx = -1, b0 = 0; b0 < 4; b0++) {
			var kL = g5 + kK[b0];
			aA.kM(kL) && aA.kN(kL) === id && (-1 === zx || a8.kf(a8.kx(kL), ke) < a8.kf(zx, ke)) && (zx = a8.kx(kL))
		}
		return zx
	}, this.zy = function(player, jM) {
		for (var kK = a8.kF, g5 = a8.a9(jM), b0 = 0; b0 < 4; b0++) {
			var kL = g5 + kK[b0];
			if (aA.w6(kL) && aA.zz(player, kL)) return !0
		}
		return !1
	}, this.a00 = function(player, jM) {
		for (var kK = a8.kF, g5 = a8.a9(jM), b0 = 0; b0 < 4; b0++) {
			var kL = g5 + kK[b0];
			if (aA.jL(kL)) return !0;
			if (aA.w6(kL)) {
				kL = aA.kP(kL);
				if (player !== kL && tQ.tR(player, kL)) return !0
			}
		}
		return !1
	}, this.ua = function(jM) {
		for (var kK = a8.kF, g5 = a8.a9(jM), b0 = 0; b0 < 4; b0++) {
			var kL = g5 + kK[b0];
			if (aA.w6(kL)) {
				kL = aA.kP(kL);
				if (bA.gc.mN(kL)) return kL
			}
		}
		return -1
	}, this.a7 = function(g5) {
		if (aA.kM(g5))
			for (var kK = a8.kF, b0 = 0; b0 < 4; b0++)
				if (aA.aB(g5 + kK[b0])) return !0;
		return !1
	}, this.a01 = function(player, id) {
		for (var oE = player << 3, pl = oE + t.u.x[player], oF = t.u.oF, oG = t.u.oG, b0 = oE; b0 < pl; b0++) {
			var oH = oG[b0];
			if (oF[oH] === id) return oH
		}
		return -1
	}, this.a02 = function(player) {
		return 0 === t.u.x[player] ? -1 : t.u.oG[player << 3]
	}, this.a03 = function(ip, iq) {
		var az = t.u.v;
		if (az < 1) return -1;
		for (var uk = t.u.uk, a04 = 80, a05 = -1, b0 = 0; b0 < az; b0++) {
			var uj = a8.kT(ip, iq, uk[b0]);
			uj < a04 && (a04 = uj, a05 = b0)
		}
		return function(b0, ip, iq) {
			if (b0 < 0) return;
			var a0F = t.u.uk[b0],
				a0G = a8.kY(a0F),
				a0F = a8.kb(a0F),
				b0 = 20 * (.9 + .1 * Math.log10(t.u.oJ[b0]));
			return b0 = Math.max(b0, a8.kp(bA.fu.po(.02, 1.7))), p.rh(a8.kX(ip), a8.ka(iq), a0G, a0F, b0)
		}(a05, ip, iq) ? a05 : -1
	}, this.a07 = function(a08) {
		for (var az = t.u.v, oF = t.u.oF, b0 = 0; b0 < az; b0++)
			if (oF[b0] === a08) return a4.a5[2] = b0, !0;
		return !1
	}, this.sd = function(player) {
		for (var oE = player << 3, pl = oE + t.u.x[player], oG = t.u.oG, oJ = t.u.oJ, gx = 0, b0 = oE; b0 < pl; b0++) gx += oJ[oG[b0]];
		return gx
	}, this.a09 = function(player, a0A) {
		a0A = t.u.uY[a0A];
		return this.zy(player, a0A[a0A.length - 1])
	}, this.a0B = function(kd, ke, uj, a0C) {
		var kh = a8.jQ(kd),
			kd = a8.jR(kd),
			kj = a8.jQ(ke),
			ke = a8.jR(ke),
			kj = (uj = Math.max(uj, 1), kj - kh),
			ke = ke - kd,
			kW = p.eL(Math.abs(kj) * a0C, uj),
			a0C = p.eL(Math.abs(ke) * a0C, uj);
		return a8.kt(kh + Math.sign(kj) * kW, kd + Math.sign(ke) * a0C)
	}, this.a0I = function(pI, jM) {
		for (var az = pI.length - 1, fW = a8.jQ(jM), fX = a8.jR(jM), b0 = 0; b0 < az; b0++) {
			var kd = pI[b0],
				ke = pI[b0 + 1],
				yS = a8.jQ(kd),
				kd = a8.jR(kd),
				a0J = a8.jQ(ke),
				ke = a8.jR(ke);
			if (!(fW !== yS && fW !== a0J && Math.sign(fW - yS) === Math.sign(fW - a0J) || fX !== kd && fX !== ke && Math.sign(fX - kd) === Math.sign(fX - ke))) {
				if (yS === a0J || kd === ke) return b0;
				if (Math.abs(fW - yS) === Math.abs(fX - kd) && Math.abs(fW - a0J) === Math.abs(fX - ke)) return b0
			}
		}
		return -1
	}, this.gW = function() {
		for (var a0L = gS[0], uZ = t.u.uZ, v = t.u.v, bq = [], b0 = 0; b0 < v; b0++) bA.gc.st(a0L, uZ[b0] >> 3) && bq.push(b0);
		return bq
	}, this.a0M = function(player, pI) {
		for (var oE = player << 3, pl = oE + t.u.x[player], oG = t.u.oG, uY = t.u.uY, vn = pI[0], a0N = pI[pI.length - 1], b0 = oE; b0 < pl; b0++) {
			var j6 = uY[oG[b0]];
			if (j6[0] === vn && j6[j6.length - 1] === a0N) return !0
		}
		return !1
	}
}

function a0O(a0P) {
	var ux = document.createElement("div"),
		a0Q = document.createElement("div"),
		a0R = [];

	function a0T() {
		vD.vE() || (this.style.backgroundColor = bA.color.a0W(aG.m4, 50))
	}

	function a0U() {
		this.style.backgroundColor = aG.m4
	}
	this.eq = function(a0V, zh) {
			a0R[2].textContent = a0V + 1 + " / " + zh
		}, this.show = function(b3) {
			a0Q.appendChild(ax.bN.transform(ax.a6.ag(b3, ax.a6.aS(b3)))), document.body.appendChild(ux)
		}, this.resize = function() {
			var dO = bA.fu.vQ(.03, .5);
			ux.style.width = 10 * dO + "px", ux.style.font = bA.fu.fv(1, .75 * dO), bA.fu.lj(ux, 4), a0Q.style.top = dO + "px", a0Q.style.font = bA.fu.fv(0, .55 * dO), bA.fu.lj(a0Q, 2), ux.style.height = dO + a0Q.offsetHeight + "px";
			for (var b0 = 0; b0 < 3; b0++) bA.fu.lj(a0R[b0], 6), a0R[[0, 1, 3][b0]].style.width = 2 * dO + "px";
			for (b0 = 0; b0 < 4; b0++) a0R[b0].style.height = dO + "px", bA.fu.lj(a0R[b0], 2);
			a0R[2].style.width = 4 * dO + "px", a0R[1].style.left = 2 * dO + "px", a0R[2].style.left = 4 * dO + "px", a0R[3].style.left = 8 * dO + "px"
		}, this.rF = function() {
			for (var b0 = 0; b0 < 4; b0++) a0R[b0].onclick = null, a0R[b0].onmouseover = null, a0R[b0].onmouseout = null;
			cT.removeChild(document.body, ux), ux = a0Q = a0R = null
		}, ux.style.position = "absolute", ux.style.color = aG.am, ux.style.zIndex = "3", ux.style.right = "0", ux.style.top = "0", a0Q.style.position = "absolute", a0Q.style.height = "auto", a0Q.style.color = aG.am, a0Q.style.backgroundColor = aG
		.m4, a0Q.style.left = "0", a0Q.style.width = "100%", a0Q.style.overflowWrap = "break-word", ux.appendChild(a0Q);
	for (var b0 = 0; b0 < 4; b0++) a0R[b0] = document.createElement("div"), a0R[b0].style.position = "absolute", a0R[b0].style.backgroundColor = aG.m4, a0R[b0].style.color = aG.am, a0R[b0].style.top = "0", a0R[b0].style.display = "flex", a0R[b0]
		.style.justifyContent = "center", a0R[b0].style.alignItems = "center", a0R[b0].style.userSelect = "none", a0R[b0].style.outline = "none", a0R[b0].style.font = "inherit", 2 !== (a0R[b0].a0S = b0) && (a0R[b0].onclick = a0P, a0R[b0]
			.onmouseover = a0T, a0R[b0].onmouseout = a0U), ux.appendChild(a0R[b0]);
	a0R[0].textContent = "◀", a0R[1].textContent = "▶", a0R[3].textContent = "✖"
}

function a0X() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a0Y = 13, this.a0Z = this.emojis.length, this.a0a = 676, this.a0b = 1024, this.a0c = this.emojis.indexOf("💀"), this.a0d = this.a0c + 1, this.a0e = this.emojis.indexOf("🥇"), this.a0f = this.emojis.indexOf("😊"), this.a0g = function(
		c8) {
		return c8 < this.a0a ? String.fromCharCode(55356, 56806 + p.eL(c8, 26), 55356, 56806 + c8 % 26) : this.emojis[Math.min(c8 - this.a0a, this.a0Z - 1)]
	}, this.a0h = function(bF) {
		for (var az = bF.length - 2, bq = [], b0 = 0; b0 < az; b0++) {
			var nU = bF.charCodeAt(b0) - 56806,
				a0i = bF.charCodeAt(b0 + 2) - 56806;
			0 <= nU && nU < 26 && 0 <= a0i && a0i < 26 && (bq.push(26 * nU + a0i), b0 += 3)
		}
		return bq
	}, this.a0j = function(c8) {
		return c8 < this.a0a
	}, this.a0k = function(c8) {
		return c8 >= 1024 - this.a0Y
	}, this.a0l = function(c8) {
		return c8 >= this.a0a && c8 < this.a0a + this.a0d
	}
}

function a0m() {
	function a11() {
		var gi;
		return 8 === c.d ? 0 : (gi = Math.floor(z.wR[c.ba] / 50), (gi = Math.min(gi, 200)) / 100)
	}

	function a0p() {
		var gi = a11();
		0 !== gi && e.j9(440, L(118, [gi.toFixed(2)]), 40, 0, aG.nn, aG.g6, -1, !1)
	}
	this.bS = function() {
		var a0q;
		0 === gX.result.a0n || 0 === gX.result.a0o.length || 8 === c.d ? bA.gc.gd(c.ba) && a0p() : (function(a0q) {
			7 !== c.d && 10 !== c.d || 0 !== c.a17 && a0q && e.j9(600, L(122, [a0q.toFixed(2)]), 40, 0, aG.am, aG.g6, -1, !1)
		}(a0q = function() {
			e.j9(520, L(119), 40, 0, aG.am, aG.g6, -1, !1);
			for (var a0o = gX.result.a0o, az = a0o.length, fo = z.fo, bq = [], b0 = 0; b0 < az; b0++) {
				var j6 = a0o[b0];
				bq.push({
					j6: j6,
					g8: fo[j6]
				})
			}
			bq.sort((bE, b1) => b1.g8 - bE.g8);
			var a12 = z.jA,
				g8 = gX.result.a13,
				gi = gX.result.a0n,
				bF = "",
				a0q = 0;
			for (b0 = 0; b0 < az; b0++) {
				var w2 = bq[b0].g8 * gi / (100 * g8),
					a15 = a12[bq[b0].j6] + ": " + w2.toFixed(2) + "   ";
				bq[b0].j6 === c.ba && (a0q = w2), 2 < b0 && 4 !== az ? 3 === b0 && (bF += "(" + L(120, [az - 3]) + ")") : bF += a15
			}
			e.j9(560, bA.bB.a16(bF), 40, 0, aG.nn, aG.g6, -1, !1), a0q ? e.j9(580, L(121, [a0q.toFixed(2) + " + " + a11().toFixed(2)]), 40, 0, aG.nn, aG.g6, -1, !1) : bA.gc.gd(c.ba) && a0p();
			return a0q
		}()), 2 === c.a0t || 7 <= c.d || function(a0q) {
			var a0o = gX.result.a0o,
				az = a0o.length,
				a18 = z.a18,
				fo = z.fo,
				b8 = [];
			loop: for (var b0 = 0; b0 < az; b0++) {
				var j6 = a0o[b0],
					b9 = bA.bB.bC(a18[j6]);
				if (null !== b9) {
					for (var aa = fo[j6], b1 = b8.length - 1; 0 <= b1; b1--)
						if (b9 === b8[b1].name) {
							b8[b1].g8 += aa, b8[b1].bq.push({
								j6: j6,
								g8: aa
							});
							continue loop
						} b8.push({
						name: b9,
						g8: aa,
						bq: [{
							j6: j6,
							g8: aa
						}]
					})
				}
			}
			if (0 !== b8.length) {
				b8.sort((bE, b1) => b1.g8 - bE.g8);
				var bq = b8[0].bq,
					a19 = (bq.sort((bE, b1) => b1.g8 - bE.g8), "[" + b8[0].name + "]"),
					a1A = 512 * gX.result.a0n / 26214400,
					c6 = (e.j9(0, L(123, [a19, a1A.toFixed(4)]), 40, 0, aG.am, aG.g6, -1, !1), bq.length),
					a1B = b8[0].g8,
					a1C = 1e4 * a1A;
				for (b0 = 0; b0 < c6; b0++)
					if (bq[b0].j6 === c.ba) {
						e.j9(600, L(124, [(a1C * bq[b0].g8 / (10 * a1B)).toFixed(2)]), 40, 0, aG.am, aG.g6, -1, !1), e.j9(640, L(125, [(.2 * a0q).toFixed(2), a19]), 40, 0, aG.am, aG.g6, -1, !1);
						break
					}
			}
		}(a0q))
	}, this.wV = function() {
		var a0v, a0w;
		c.fk || (a0v = z, a0w = c.ba, 0 === a0v.a0x[a0w]) || a0v.a0y[a0w] < 1 || 2 * a0v.a0z[a0w] > 3 * (a0v.a10[a0w] + a0v.a0y[a0w]) || a0p()
	}
}

function rW(title, rP, x5) {
	var iP, x6;
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), x6.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, x5 = x5 || [new hs("⬅️ " + L(33), function() {
		cT.hz()
	}, aG.a1D)], iP = new hr(title, x5), x6 = new x7(iP.hv, rP), bA.fu.textAlign(iP.hv.style, 1)
}

function a1E() {
	var r9 = 0,
		a1F = null;
	this.b = function() {
		null === a1F && (a1F = new Uint16Array(2 * t.u.w)), r9 = 0
	}, this.eT = function(a1G, ud) {
		var a1H = a1F;
		a1H[r9++] = a1G, a1H[r9++] = ud
	}, this.ue = function(player, uc) {
		for (var a1H = a1F, az = r9, b0 = 0; b0 < az; b0 += 2)
			if (a1H[b0] === uc && t.a6.a07(a1H[b0 + 1]) && player === t.u.uZ[a4.a5[2]] >> 3) return !0;
		return !1
	}, this.a1I = function(a1J) {
		var a3 = t.u.oK[a1J];
		if (!(a3 < 64)) {
			for (var uc = t.u.oF[a1J], a1H = a1F, az = r9, b0 = az - 2; 0 <= b0; b0 -= 2)
				if (a1H[b0] === uc) {
					{
						a1O = void 0;
						var a1O = a1H[b0 + 1];
						t.a6.a07(a1O) && t.ud.a1V(a4.a5[2])
					}
					a1H[b0] = a1H[az - 2], a1H[b0 + 1] = a1H[az - 1], az -= 2
				} r9 = az
		}
	}, this.a1L = function(a1M, a1N) {
		for (var a1O = t.u.oF[a1M], uc = -1, a1H = a1F, az = r9, b0 = 1; b0 < az; b0 += 2)
			if (a1H[b0] === a1O) {
				uc = a1H[b0 - 1];
				break
			} if (-1 === uc) return !1;
		if (!t.a6.a07(uc)) return !1;
		var a1J = a4.a5[2],
			pI = t.u.uY[a1J];
		if (a1N === pI[pI.length - 1]) t.u.uY[a1M] = t.un.a1P(t.u.uY[a1M], t.un.uo(pI));
		else {
			var a1Q = t.a6.a0I(pI, a1N);
			if (-1 === a1Q) return !1;
			var a1R = t.u.ui[a1J];
			a1Q === a1R ? (a1J = a8.l0(t.u.uk[a1J]), t.u.uY[a1M] = t.un.a1T(t.u.uY[a1M], pI, a1Q, a1N, a8.kc(pI[a1Q], a1N) > a8.kc(pI[a1Q], a1J))) : t.u.uY[a1M] = t.un.a1T(t.u.uY[a1M], pI, a1Q, a1N, a1R < a1Q)
		}
		return !0
	}, this.a1V = function(a0A) {
		var pI, c6 = t.u,
			a3 = c6.oK[a0A];
		return a3 % 64 != 5 && (pI = c6.uY[a0A], c6.yd[a0A] = 65535 - c6.yd[a0A], c6.ui[a0A] = pI.length - c6.ui[a0A] - 2, c6.uY[a0A] = t.un.uo(pI), c6.oK[a0A] = a3 - a3 % 64 + 5, !0)
	}
}

function a1W() {
	function a1X() {
		if (2 === c.dr) return 1;
		dz.uI(), c.dr = 2, c.fn = c.gO
	}

	function a1Y() {
		gX.a1Z.bk(), e5.show(1 === c.a17, !1, 2 === c.a17), gX.result.bk(), gX.wU.bS(), gX.a1a.bS(), gX.a1a.a1b(), e.a1c(!0), e.uH(247), e.uH(956), e.uH(957), ds.g4(!0), du.g4(!0), dz.g4(), dy.yF(), c.bV && bT.pt.a1d(), bT.eA = !0, mB.mC(), dY.dc
			.setState(0)
	}
	this.uG = function() {
		a1X() || (c.a0t = 2, a1Y())
	}, this.gZ = function() {
		a1X() || (c.a0t = 1, a1Y())
	}
}

function a1e() {
	var a1f = new Uint16Array(c.iC);

	function a1o(player, a1m) {
		for (var az = a4.lF[0], lO = a4.lO, a1w = -1, mG = c.iC, b0 = 0; b0 < az; b0++) {
			var uj, j6 = lO[b0];
			tQ.tR(player, j6) && (uj = a8.kf(a1m, a8.l6(j6)), -1 === a1w || uj < a1w) && (a1w = uj, mG = j6)
		}
		return mG
	}

	function a1q(a1n, a1m) {
		if (a1n === c.iC) return 0;
		var a0 = z.a0[a1n],
			c6 = a0.length;
		if (0 === c6) return 0;
		for (var az = Math.min(c6, 10), mG = 0, a1w = a8.kf(a0[mG] >> 2, a1m), b0 = 0; b0 < az; b0++) {
			var s6 = hL.s9(c6),
				uj = a8.kf(a0[s6] >> 2, a1m);
			uj < a1w && (a1w = uj, mG = s6)
		}
		return a0[mG] >> 2
	}

	function a1t(player, a1m, nW, a1x) {
		var a1y;
		(a1x === c.iC || (a1y = a8.l6(nW), a1x = a8.l6(a1x), a8.kf(a1m, a1y) < a8.kf(a1m, a1x))) && (a1f[player] = nW)
	}
	this.b = function() {
		a1f.fill(c.iC)
	}, this.a1g = function() {
		if (bT.bU() % 109 == 9 && !(bc.bd < 20) && c.gQ && !(e6.gR() < p.eL(8 * c.fp, 10))) {
			var sx = e6.jF();
			if (jG.jH[sx]) {
				e6.a1h(sx);
				var az = a4.lF[0];
				if (0 !== az)
					for (var bq = a4.lP, gb = bc.gb, bd = bc.bd, a1i = a1f, s6 = hL.s9(az), b0 = 0; b0 < bd; b0++) {
						var vn = gb[b0],
							a0N = bq[s6];
						bA.gc.st(vn, a0N) && 512 === a1i[vn] && (a1i[vn] = a0N, s6 = (s6 + 1) % az)
					}
			}
		}
	}, this.bS = function(player) {
		var a1m, a1p, a1n, a1j = function(player) {
			var nW = a1f[player];
			if (nW !== c.iC) {
				if (bA.gc.j4(nW) && z.a0[nW]) return nW;
				a1f[player] = c.iC
			}
			return c.iC
		}(player);
		return function(player) {
			for (var jC = bc.gb, c6 = bc.bd, az = Math.min(c6, c6 < 17 && 5 === hL.s9(20) ? 1 : 16), cX = hL.s9(c6), lO = a4.lO, a0 = z.a0, bD = 0, b0 = 0; b0 < az; b0++) {
				var j6 = jC[(b0 + cX) % c6];
				j6 !== player && a0[j6].length && (lO[bD++] = j6)
			}
			a4.lF[0] = bD
		}(player), 0 !== a4.lF[0] && (0 < (a1p = a1q(a1n = a1o(player, a1m = a8.lB(player)), a1m)) && t.a1r.a1s(player, t.a6.zw(a1p, a1m)) ? (a1t(player, a1m, a1n, a1j), !0) : 0 < (a1n = function(player, a1m) {
			for (var az = a4.lF[0], lO = a4.lO, a1i = a1f, cX = 0, b0 = 0; b0 < az; b0++) {
				var j6 = lO[b0],
					j6 = a1i[j6];
				j6 !== c.iC && bA.gc.j4(j6) && player !== j6 && tQ.tR(player, j6) && (lO[cX++] = j6)
			}
			return 0 !== (a4.lF[0] = cX) ? a1q(a1o(player, a1m), a1m) : 0
		}(player, a1m)) && t.a1r.a1s(player, t.a6.zw(a1n, a1m)) ? (a1t(player, a1m, aA.kP(a1n << 2), a1j), !0) : !!(0 < (a1p = a1q(a1j, a1m)) && t.a1r.a1s(player, t.a6.zw(a1p, a1m))))
	}
}

function a20() {
	var aE = [L(126), L(127), L(128), L(129), L(130), L(131), L(132)],
		a21 = [100, 60, 30, 15, 6, 1],
		a22 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		a23 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		a24 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.ae = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.a25 = function(id, ij, cE) {
		ij = this.a26(ij);
		return +(a22[ij][id] > cE)
	}, this.a26 = function(ij) {
		for (var b0 = 0; b0 < a21.length; b0++)
			if (a21[b0] <= ij) return b0;
		return a21.length
	}, this.a27 = function(ij) {
		return aE[this.a26(ij)]
	}, this.ad = function(id, a28) {
		return a23[id].replace(new RegExp("x", "g"), a28)
	}, this.af = function(id, a28) {
		return a24[id].replace(new RegExp("x", "g"), a28)
	}, this.a29 = function(id, a2A) {
		return this.ae[5][id]
	}
}

function yT(dJ) {
	jo && !dJ || (a2X(), p = new ra, mp = new a2Y, bA = new a2Z, aG = new a2a, c = new a2b, cC = new a2c, aV = new a2d, c9 = new a2e, gw = new rq, wZ = new a2f, wP = new a2g, wg = new a2h, a2B = new a2i, a2C = new gm, xf = new qq, e2 = new a2j, dx =
		new lx, e = new a2k, dq = new a2l, e0 = new nH, e1 = new a2m, dw = new a2n, dv = new a2o, dp = new a2p, dt = new a2q, ds = new a2r, du = new fU, e5 = new a2s, dl = new oa, dn = new a2t, cj = new a2u, dg = new a2v, aA = new a2w, a2F =
		new a2x, bc = new a2y, wY = new a2z, vk = new a30, o4 = new sJ, gB = new a31, uA = new a32, e4 = new a33, z = new a34, a2D = new a35, sA = new a36, a2E = new a37, a2G = new a38, a2H = new h2, a2I = new a39, bW = new a3A, hL = new a3B,
		jN = new a3C, a2J = new a3D, a2K = new a3E, wh = new a3F, eE = new dH, dz = new tg, cY = new a3G, vq = new a3H, a2L = new a3I, a2M = new wN, tB = new a3J, wd = new a3K, a2N = new a3L, mf = new ln, jd = new a3M, dy = new y3, cp = new a3N,
		d9 = new oq, eO = new a3O, a2O = new a3P, vD = new a3Q, a8 = new kD, t = new a3R, a4 = new lD, wc = new a3S, a2P = new a3T, gX = new a3U, cd = new a3V, a2Q = new vX, cT = new a3W, eR = new a3X, dY = new a3Y, jo = new a3Z, eW = new a3a,
		cy = new tX, jG = new a3b, e6 = new a3c, a2S = new a3d, mB = new a3e, mi = new a3f, dj = new q7, gq = new a3g, e3 = new a3h, bT = new ps, uQ = new a3i, di = new a3j, xp = new a3k, a2T = new uT, a2U = new a3l, ax = new a3m, rH = new r8,
		a2V = new a3n, vh = new qT, tQ = new a3o, jo.b(), dY.b(), eE.dT(), cy.b(), cC.b(), cC.a3q(), (zG = new zB).b(), bA.b(), mi.b(), bW.b(), aV.b(), c9.b(), cd.b(), cT.b(), dm = new rS, eE.b(), dY.dc.a3r(), bT.b(), di.b(), dj.b(), a2R =
		new a3s, hL.b(), gB.ou(), eR.b(), a2G.b(), cj.b(), dp.b(), a2D.b(), vD.b(), dg.b(), bT.eA = !0, setTimeout(function() {
			cd.ck(2, 14071)
		}, 0), cT.iD(5, 5), a2O.cJ() || dY.dc.a3t(), eE.dd(), jo.a3u = 1)
}

function a2d() {
	this.aW = new a3v, this.d3 = new fL, this.dB = new a3w, this.b = function() {
		this.aW.b()
	}
}

function a3x() {
	this.a1s = function(player, a3y) {
		return -1 !== a3y && !!t.a6.a00(player, a3y) && this.a3z(player, a3y, 0)
	}, this.a3z = function(player, a3y, a40) {
		player = function(player, a3y, a40) {
			var a43 = t.a6.zq(player, a3y);
			if (-1 === a43) return -1;
			a43 = t.a6.zw(a43, a3y);
			if (-1 === a43) return -1;
			var a41 = t.un.a45(a43, a3y);
			if (0 <= a41) return a41;
			if (t.un.a46()) return -1;
			if (0 <= (a41 = t.un.a45(a3y, a43))) return t.un.a47(t.un.uo(t.un.get(a41)));
			if (a43 === a3y) return t.un.a47(new Uint32Array([a43, a3y]));
			if (0 <= (a41 = t.a48.a3z(a43, a3y))) return a41;
			return a40 ? function(a4A, player) {
				var lS = a4.lS,
					cz = (lS.fill(0), [a4A]),
					kG = (lS[a4A] = 1, a8.kG),
					zN = -1,
					az = cz.length;
				for (; - 1 === zN && az;) {
					for (var bq = [], b0 = 0; b0 < az; b0++)
						for (var jM = cz[b0], a4B = lS[jM], ca = 0; ca < 8; ca++) {
							var a1B, a19, zv = jM + kG[ca],
								g5 = 4 * zv;
							aA.kM(g5) ? (a1B = lS[zv], a19 = a4B + 5 + ((1 & ca) << 1), 0 === a1B ? (bq.push(zv), lS[zv] = a19) : lS[zv] = Math.min(a19, a1B)) : -1 === zN && ca % 2 == 0 && aA.a4C(player, g5) && (zN = jM)
						}
					az = (cz = bq).length
				}
				return -1 !== zN ? function(kd, a4E) {
					var kG = a8.kG,
						a4F = -1,
						hc = 0,
						gr = [];
					for (; a4E !== kd;)(hc = function(jM, hc) {
						var lS = a4.lS,
							kG = a8.kG,
							a4B = lS[jM];
						if (a4B - lS[jM + kG[hc]] != 5 + ((1 & hc) << 1))
							for (var bE = 0; bE < 8; bE++) {
								var ca = bE + hc + 6 & 7;
								if (a4B - lS[jM + kG[ca]] == 5 + ((1 & ca) << 1)) return ca
							}
						return hc
					}(a4E, hc)) !== a4F && (gr.push(a4E), a4F = hc), a4E += kG[hc];
					gr.push(kd);
					var a41 = t.un.a45(gr[0], kd);
					if (0 <= a41) return a41;
					return t.un.a47(new Uint32Array(gr))
				}(a4A, zN) : -1
			}(a3y, player) : -1
		}(player, a3y, a40);
		return -1 !== player && (a4.bq[0] = t.un.get(player), !0)
	}
}

function a3G() {
	this.cW = 0;
	var a4I, a4J, a4K, a4L, a4M, a4N = this.a4H = 0;

	function a4P() {
		a4L = a4M = null, a4N = 0
	}
	this.b = function(cL, cO, cP) {
		cT.jl(), ax.rF(), cj.setState(10), a4L = cL, a4M = cO, a4N = cP, this.cW = cL.cW, this.a4H = cP, a4I = 0, a4J = bT.db + 4500, bW.u.xa = cL.xa, bW.u.xb === cL.xa ? (console.log("direct pass"), a4K = 0) : (console.log("delayed pass"), bW.u
			.close(bW.u.xb, 3247), a4K = 2, bW.u.xi(cL.xa, 5) && bW.em.en()), dZ.imageSmoothingEnabled = !0, cj.a4T();
		cO = dg.a4V("loading"), cP = (dY.dc.fs() ? .396 : .25) * eE.dP / cO.width;
		dZ.setTransform(cP, 0, 0, cP, Math.floor((eE.c1 - cP * cO.width) / 2), Math.floor((eE.dO - cP * cO.height) / 2)), dZ.imageSmoothingEnabled = !1, dZ.drawImage(cO, 0, 0), dZ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.wi = function() {
		0 < a4K && bT.db > a4J && (a4K--, a4J += 4500, 0 === bT.a4Q) && 0 === bT.bU() && bW.u.xi(bW.u.xa, 5)
	}, this.a4R = function() {
		return 10 === cj.ek() && (ax.zc.cZ(a4L, a4M, a4N), a4P(), !0)
	}, this.a4S = function() {
		10 === cj.ek() && 2 <= ++a4I && (ax.zc.cZ(a4L, a4M, a4N), a4P())
	}
}

function a4W() {
	this.vJ = 0, this.cf = 0, this.mapSeed = 0, this.cN = 0, this.zU = 0, this.zV = 0, this.cc = 0, this.zW = 0, this.spawningSeed = 0, this.xa = 0, this.cW = 0, this.bL = [], this.zg = 1048575, this.a4X = 0, this.zd = [{
		cf: 0,
		mapSeed: 0,
		cN: 0,
		db: 100,
		cc: 0
	}, {
		cf: 1,
		mapSeed: 0,
		cN: 1,
		db: 200,
		cc: 0
	}, {
		cf: 2,
		mapSeed: 0,
		cN: 2,
		db: 300,
		cc: 0
	}, {
		cf: 3,
		mapSeed: 0,
		cN: 3,
		db: 400,
		cc: 0
	}, {
		cf: 0,
		mapSeed: 0,
		cN: 9,
		db: 500,
		cc: 0
	}, {
		cf: 1,
		mapSeed: 0,
		cN: 10,
		db: 600,
		cc: 0
	}, {
		cf: 2,
		mapSeed: 0,
		cN: 8,
		db: 700,
		cc: 0
	}, {
		cf: 3,
		mapSeed: 0,
		cN: 3,
		db: 800,
		cc: 0
	}]
}

function a4Y() {
	this.dC = function() {
		var jy = function() {
				for (var kC = jd.je.kC, az = kC.length, max = 0, b0 = 0; b0 < az; b0++) max = Math.max(max, kC[b0]);
				return a4k(Math.max(max, 1))
			}(),
			c1 = (b3 = c.data, (c1 = d9).b(), c1.cq(12, jo.rVersion), c1.cE += 43, c1.cq(2, b3.mapType), c1.cq(8, b3.mapProceduralIndex), c1.cq(8, b3.mapRealisticIndex), c1.cq(14, b3.mapSeed), c1.p0(b3.mapName, 5), 2 === b3.mapType && c1.p1(b3
				.canvas), c1.cq(1, b3.passableWater), c1.cq(1, b3.passableMountains), c1.cq(10, b3.playerCount), c1.cq(10, b3.humanCount), c1.cq(9, b3.selectedPlayer), c1.cq(1, b3.gameMode), c1.cq(2, b3.playerMode), c1.cq(2, b3
				.battleRoyaleMode), c1.cq(4, b3.numberTeams), c1.cq(1, b3.isZombieMode), c1.cq(1, b3.isContest), c1.cq(1, b3.isReplay), c1.ou(b3.elo, 2, 14), c1.cq(1, b3.colorsType), c1.cq(1, b3.colorsPersonalized), c1.ou(b3.colorsData, 10,
				18), c1.cq(1, b3.selectableColor), c1.ou(b3.teamPlayerCount, 4, 10), c1.cq(1, b3.neutralBots), c1.cq(2, b3.botDifficultyType), c1.cq(4, b3.botDifficultyValue), c1.ou(b3.botDifficultyTeam, 4, 4), c1.ou(b3.botDifficultyData, 10,
				4), c1.cq(2, b3.spawningType), c1.cq(14, b3.spawningSeed), c1.ou(b3.spawningData, 11, 12), c1.cq(1, b3.selectableSpawn), c1.cq(2, b3.playerNamesType), c1.oy(b3.playerNamesData, 10, 5), c1.cq(1, b3.selectableName), c1.cq(2, b3
				.aIncomeType), c1.cq(8, b3.aIncomeValue), c1.ou(b3.aIncomeData, 10, 8), c1.cq(2, b3.tIncomeType), c1.cq(8, b3.tIncomeValue), c1.ou(b3.tIncomeData, 10, 8), c1.cq(2, b3.iIncomeType), c1.cq(8, b3.iIncomeValue), c1.ou(b3
				.iIncomeData, 10, 8), c1.cq(2, b3.sResourcesType), c1.cq(11, b3.sResourcesValue), c1.ou(b3.sResourcesData, 10, 11), c1.ou(b3.ci, 10, 30), ! function(jy) {
				var c1 = d9,
					k7 = jd.je.k7,
					lU = jd.je.k8,
					lW = jd.je.k9,
					lY = jd.je.kA,
					az = k7.length;
				c1.cq(5, jy), c1.cq(30, az), c1.cq(30, jd.je.kC.length);
				for (var b0 = 0; b0 < az; b0++) {
					var dI = k7[b0];
					c1.cq(4, dI), c1.cq(9, lU[b0]), 0 === dI ? c1.cq(22, lW[b0]) : 1 === dI ? (c1.cq(10, lW[b0]), c1.cq(10, lY[b0])) : 2 === dI ? (c1.cq(10, lW[b0]), c1.cq(9, lY[b0])) : 3 === dI ? (c1.cq(10, lW[b0]), c1.cq(27, lY[b0])) :
						4 === dI ? (c1.cq(10, lW[b0]), c1.cq(16, lY[b0])) : 5 === dI || 6 === dI ? c1.cq(10, lW[b0]) : 7 === dI ? c1.cq(1, lW[b0]) : 10 === dI && (c1.cq(20, lW[b0]), c1.cq(22, lY[b0]))
				}
			}(jy), ! function(jy) {
				for (var c1 = d9, kB = jd.je.kB, kC = jd.je.kC, az = kB.length, b0 = 0; b0 < az; b0++) c1.cq(1, kB[b0]), c1.cq(jy, kC[b0])
			}(jy), d9.cE),
			b3 = p.eL(c1 - 1, 6) + 1,
			jy = (cp.a4f(6 * b3) !== d9.bq.length && d9.bq.push(0), ! function() {
				var c1 = d9;
				c1.cE = 24, c1.cq(31, c1.bq.length), c1.cE = 12, c1.cq(12, function() {
					for (var bq = d9.bq, az = bq.length, jp = jo.rVersion, b0 = 3; b0 < az; b0++) jp = jp + bq[b0] & 4095;
					return jp
				}())
			}(), eO.b(d9.bq), aV.aW.a4h(aV.aW.a4i(b3)));
		return eO.rF(), d9.b(), jy
	}
}

function a4l() {
	this.a4m = 0, this.b = function() {
		this.a4m = 0
	}, this.bS = function() {
		if (!this.a4m && bT.bU() % 30 == 7 && bA.gc.j2(90) && (jN.performance.a4m = 1)) {
			if (c.gQ) {
				var sx = e6.jF();
				if (jG.jH[sx]) {
					e6.a4r(sx);
					var bq = a4.lP,
						az = a4.lF[0];
					if (0 !== az)
						for (var a4s = Math.min(100 + 10 * (az - 1), 400), b0 = 0; b0 < az; b0++) gw.sI(bq[b0], a4s)
				}
			}
			gw.sI(gS[0], 100)
		}
	}
}

function tb() {
	function a4w(bq) {
		if (0 === bq.length) cy.ep.eq(116, "");
		else {
			for (var a4z = bq[0], b0 = 1; b0 < bq.length; b0++) a4z += ";" + bq[b0];
			cy.ep.eq(116, a4z)
		}
	}
	this.a4t = function() {
		cy.cz.data[110].value.length && (cy.cz.data[106].value = cy.cz.data[110], cy.ep.eq(110, ""), this.a4u())
	}, this.a4u = function() {
		var bq = cy.cz.data[116].value.split(";");
		for (bq.length % 2 == 1 && bq.pop(), bq.unshift(cy.cz.data[106].value), bq.unshift(cy.cz.data[105].value), b0 = 2; b0 < bq.length; b0 += 2)
			if (bq[b0] === bq[0]) {
				bq.splice(b0, 2);
				break
			} for (var a4v = [], b0 = 0; b0 < bq.length; b0 += 2) a4v.push(bq[b0]);
		a4w(bq), cy.cz.data[117].value = 0, cy.cz.data[117].iB = a4v
	}, this.a4x = function(cE) {
		cy.cz.data[117].iB.splice(cE, 1), cy.cz.data[117].value = Math.min(cE, cy.cz.data[117].iB.length - 1);
		var bq = cy.cz.data[116].value.split(";");
		bq.splice(2 * cE, 2), a4w(bq)
	}, this.a4y = function(cE) {
		var bq = cy.cz.data[116].value.split(";");
		return {
			aY: bq[2 * cE],
			password: bq[2 * cE + 1]
		}
	}, this.nF = function() {
		var c8 = p.q(cy.cz.data[121].value, -1, 262143);
		return c8 = -1 === c8 ? ~~(262144 * Math.random()) : c8
	}, this.tf = function() {
		for (var bq = document.cookie.split(";"), b0 = 0; b0 < bq.length; b0++) {
			var bF = bq[b0].trim(),
				a50 = bF.indexOf("="),
				a50 = 0 <= a50 ? bF.substring(0, a50) : bF;
			document.cookie = a50 + "=;expires=0;path=/", document.cookie = a50 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a50 + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function a51() {
	this.cz = {}, this.pm = new Array(7), this.a52 = null, this.a53 = null, this.lh = 0, this.a54 = [0, 0], this.a55 = function() {
		cT.iD(5, 5)
	}, this.a56 = function() {
		cT.jl(), dn.b()
	}, this.iW = function() {
		cT.iD(0 === cj.ek() ? 5 : 0)
	}, this.mU = function() {
		if (1 === cy.cz.data[130].value) cT.iD(8, cT.eu().p6, new mm(24, {
			a57: cy.cz.data[125].value,
			oE: cy.cz.data[128].value,
			pl: cy.cz.data[129].value
		}));
		else {
			for (var bq = (bq = cy.cz.data[126].value.split(",")).slice(0, 10), b0 = 0; b0 < bq.length; b0++) bq[b0] = bq[b0].trim().slice(0, 7).toUpperCase();
			1 === bq.length && 0 === bq[0].length && (bq = []), cT.iD(8, cT.eu().p6, new mm(23, {
				a57: cy.cz.data[125].value,
				b8: bq
			}))
		}
	}, this.ml = function(p6, target) {
		cT.iD(4, p6, new js("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + mp.n0 +
			"' target='_blank'>" + mp.n0 + "</a>", !1, [new hs("⬅️ " + L(33), function() {
				cT.iD(p6)
			}), new hs("✅ Accept", function() {
				cy.ep.eq(140, 1), 0 === target ? cT.iD(2, p6) : cT.iD(8, p6, new mm(target))
			})]))
	}, this.a58 = function() {
		for (var b0 = 0; b0 < 7; b0++) this.pm[b0] = c9.d3.ez(eO.eP(5));
		this.pm[1] = "[" + this.pm[1] + "]", 5 === cT.cU && (cT.eu().a59.eq(this.pm), cT.eu().resize())
	}, this.a5A = function(c8, em, pP) {
		c8 = bA.gc.tW(c8, 1, 1e6);
		var a5B = Math.max(1, 1 + Math.floor(.01 * (c8 - 100))),
			em = L(133, [em]);
		return (em += "<br>") + L(134, [pP]) + "<br>" + L(135, [a5B < 20 ? c8 + a5B + "–" + (c8 + 20) : c8 + a5B]) + "<br>" + L(136, [c8])
	}
}

function md(oe, a5C) {
	var rJ;
	this.resize = function() {
		for (var b0 = 0; b0 < oe.length; b0++) bA.fu.lj(oe[b0].button);
		rJ.style.gap = rJ.style.padding = bA.fu.pa(di.a5F)
	}, (rJ = document.createElement("div")).style.display = "grid", rJ.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", rJ.style.overflowY = "auto", rJ.style.gridAutoRows = "5.3em", rJ.style.maxHeight = "100%";
	for (var b0 = 0; b0 < oe.length; b0++) oe[b0].a5E(1), rJ.appendChild(oe[b0].button);
	a5C.appendChild(rJ)
}

function a5G(bE, b1) {
	return 0 <= bE ? p.eL(bE, b1) : -p.eL(-bE, b1)
}

function a5H(c8) {
	return c8 * c8
}

function eK(bE, b1) {
	return b1 < bE ? bE : b1
}

function eJ(bE, b1) {
	return bE < b1 ? bE : b1
}

function yG(bE, c8, b1) {
	return c8 < bE ? bE : b1 < c8 ? b1 : c8
}

function a5I(c8, az) {
	for (var dI = p.eL(c8 + 1, 2), b0 = 0; b0 < az; b0++) dI = p.eL(dI + p.eL(c8, dI), 2);
	return dI
}

function a5J(c8, az) {
	return c8 < 1 ? 0 : a5I(c8, az)
}

function a5K(yS, u1, eF, eG, a0J, a0K, eH, eI) {
	return !(yS + eF <= a0J || u1 + eG <= a0K || a0J + eH <= yS || a0K + eI <= u1)
}

function a5L(yS, u1, eF, eG, a0J, a0K, eH, eI) {
	return yS <= a0J && u1 <= a0K && a0J + eH <= yS + eF && a0K + eI <= u1 + eG
}

function a4k(c8) {
	return Math.floor(!!c8 * (1 + Math.log2(c8 + .5)))
}

function a5M(a5N) {
	var rJ = document.createElement("div");
	this.iG = rJ, this.a5O = a5N, this.resize = function() {
		for (var az = a5N.length, b0 = 1; b0 < az; b0++) bA.fu.lj(a5N[b0], 4)
	};
	var b0, az = a5N.length;
	for (rJ.style.width = "100%", rJ.style.height = "2.7em", rJ.style.marginTop = "0.6em", rJ.style.border = "inherit", b0 = 0; b0 < az; b0++) a5N[b0].style.verticalAlign = "top", a5N[b0].style.width = (100 / az).toFixed(2) + "%", a5N[b0].style
		.height = "100%", a5N[b0].style.fontSize = "0.75em", rJ.appendChild(a5N[b0])
}

function a5P() {
	var a5Q, a5R = 8,
		a5S = null;

	function a5Z(a5Y, jM, cE) {
		jM *= 4;
		a5Y[jM] = 255, a5Y[1 + jM] = 255, a5Y[2 + jM] = cE, a5Y[3 + jM] = 255
	}

	function a5b(jk, a5d) {
		var fW, fX, kW, jM, a5e, a5f, qM = a5R,
			qQ = bA.fu.getImageData(jk, qM, qM),
			a5Y = qQ.data,
			c6 = (qM >> 1) - .5,
			a5h = bA.c3.a5i(a5d, .5);
		for (bA.c3.a5j(a5d, a5h, 300) || bA.c3.a5k(a5d, 100), fX = 0; fX < qM; fX++)
			for (fW = 0; fW < qM; fW++) a5f = (qM - 1.5) * (qM - 1.5) / 4, a5Y[jM = 4 * (fX * qM + fW)] = (a5e = (kW = (kW = fW - c6) * kW + (kW = fX - c6) * kW) <= (qM - 4.5) * (qM - 4.5) / 4 ? a5h : a5d)[0], a5Y[1 + jM] = a5e[1], a5Y[2 + jM] = a5e[
				2], a5Y[3 + jM] = a5f < kW ? 0 : 255;
		jk.putImageData(qQ, 0, 0)
	}
	this.b = function() {
		var cE, qM, jj, jk, qQ, a5Y;
		(a5Q = a5Q || new Array(c.iC)).fill(null), cE = 255, qM = a5R + 4, jj = bA.fu.dV(qM, qM), jk = bA.fu.getContext(jj, !0), qQ = bA.fu.getImageData(jk, qM, qM), a5Z(a5Y = qQ.data, qM + 1, cE), a5Z(a5Y, qM + 2, cE), a5Z(a5Y, 2 * qM + 1, cE),
			a5Z(a5Y, 2 * qM - 3, cE), a5Z(a5Y, 2 * qM - 2, cE), a5Z(a5Y, 3 * qM - 2, cE), a5Z(a5Y, qM * (qM - 3) + 1, cE), a5Z(a5Y, qM * (qM - 2) + 1, cE), a5Z(a5Y, qM * (qM - 2) + 2, cE), a5Z(a5Y, qM * (qM - 2) - 2, cE), a5Z(a5Y, qM * (qM - 1) -
				3, cE), a5Z(a5Y, qM * (qM - 1) - 2, cE), jk.putImageData(qQ, 0, 0), a5S = jj,
			function() {
				if (c.gQ)
					for (var jj = new Array(jG.jH.length), az = c.iC, a5V = a5Q, a5W = jG.a5W, b0 = 0; b0 < az; b0++) {
						var hb = a5W[b0];
						jj[hb] || (jj[hb] = function(hb) {
							var jj = bA.fu.dV(a5R, a5R),
								jk = bA.fu.getContext(jj, !0),
								bq = a4.lJ;
							return bq.set(jG.a5c[hb]), a5b(jk, bq), jj
						}(hb)), a5V[b0] = jj[hb]
					}
			}()
	}, this.gl = function() {
		var b0, player, a5l, ri, gx, jt, a5o, a5q, a5r, uk = t.u.uk,
			uZ = t.u.uZ,
			oJ = t.u.oJ,
			ye = t.u.ye,
			a5s = a5Q,
			a5t = c.ba,
			az = t.u.v,
			a5u = eE.c1,
			a5v = eE.dO,
			a5w = cd.fR << 4,
			kL = kI,
			g5 = kL / a5R,
			yS = kn / kL,
			u1 = ko / kL,
			kW = (a5u + kn) / kL - yS,
			kZ = (a5v + ko) / kL - u1,
			jk = dZ;
		for (jk.imageSmoothingEnabled = kL < 9, bA.fu.textAlign(jk, 1), bA.fu.textBaseline(jk, 1), b0 = 0; b0 < az; b0++) player = uZ[b0] >> 3, gx = oJ[b0], a5l = .9 + .1 * Math.log10(gx), ri = (jt = uk[b0]) % a5w / 16 - a5l, jt = a5v * (Math
			.floor(jt / a5w) / 16 - a5l - u1) / kZ, a5o = -2 * (a5r = kL * a5l) * (1 + (a5q = +(player === a5t)) / 8), a5q = a5q * a5r / 4, (a5r = a5u * (ri - yS) / kW) < a5o || jt < a5o || a5u + a5q < a5r || a5v + a5q < jt || (ri = 2 * a5l *
			g5, a5o = a5l * kL, null === (a5q = a5s[player]) && (a5s[player] = a5q = function(player) {
				var jj = bA.fu.dV(a5R, a5R);
				return a5b(bA.fu.getContext(jj, !0), aA.nY(player)), jj
			}(player)), player === a5t && (jk.setTransform(ri, 0, 0, ri, a5r - 2 * ri, jt - 2 * ri), jk.drawImage(a5S, 0, 0)), jk.setTransform(ri, 0, 0, ri, a5r, jt), jk.drawImage(a5q, 0, 0), (a5l = Math.floor(function(gx) {
				if (gx < 1e3) return .42;
				if (gx < 1e4) return .34;
				if (gx < 1e6) return .26;
				if (gx < 1e8) return .19;
				return .15
			}(gx) * a5o)) < 6) || (jk.setTransform(1, 0, 0, 1, 0, 0), jk.fillStyle = ye[b0] ? aG.nk : aG.am, jk.font = bA.fu.fv(1, a5l), jk.fillText(bA.bB.aX(gx), a5r + a5o, jt + a5o + .1 * a5l));
		jk.imageSmoothingEnabled = !1, jk.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a33() {
	var a5z, a60, a61, a62, a63, a64, a65, a66, a67, a68, a69, a6A, a6B, a6C, a6D, a6E, a6F, a6G, a6I, a6J, y1, a6K, a6L, a6S, a6T, a6H = null,
		a6N = 0,
		a6O = !1,
		a6P = new Float32Array(4),
		a6Q = 0,
		a6R = !0,
		a6U = 400,
		a6V = 0;

	function a6W() {
		a67 = Math.floor(+eE.dP), a68 = Math.floor(.5 * a67)
	}

	function a6X() {
		var b0, a6g;
		for (dZ.font = bA.fu.fv(1, 100 * a69), a6g = 80 / Math.floor(dZ.measureText(bA.bB.aX(c.sj)).width), dZ.font = bA.fu.fv(1, 100), b0 = c.iC - 1; 0 <= b0; b0--) a66[b0] = 100 / Math.floor(dZ.measureText(z.jA[b0]).width), a65[b0] = Math.min(a6g,
			a66[b0])
	}

	function a6h(b0) {
		return !a6V || (b0 = z.gA[b0]) < 1e6 ? 1 : b0 < 1e7 ? a6P[0] : a6P[Math.min(Math.floor(Math.log10(b0)) - 6, 3)]
	}

	function a6f(jk) {
		a6G = !1, a6F = 1, a6D = a6E = 0, a6R && (bA.fu.textAlign(jk, 1), bA.fu.textBaseline(jk, 1));
		for (var a6s, a6t, b0, a6u, fontSize, a6v, yS = kn / kI, u1 = ko / kI, a0J = (eE.c1 + kn) / kI, a0K = (eE.dO + ko) / kI, a6w = 0 !== z.bZ[c.ba] && !bA.gc.mN(c.ba), bE = bc.bd - 1; 0 <= bE; bE--) b0 = bc.gb[bE], (fontSize = Math.floor(a6C *
			kI * a6h(b0) * a65[b0] * a63[b0])) < a6B || a67 <= fontSize || a61[b0] + a63[b0] > yS && a61[b0] < a0J && a62[b0] + a64[b0] > u1 && a62[b0] < a0K && (a6s = Math.floor(eE.c1 * (a61[b0] + a63[b0] / 2 - yS) / (a0J - yS)), a6t = Math
			.floor(eE.dO * (a62[b0] + a64[b0] / 2 - u1) / (a0K - u1) - .1 * fontSize), a6u = aA.a6c[b0], jk.font = bA.fu.fv(1 === z.sr[b0] ? 4 : 1, fontSize), jk.fillStyle = a6x(fontSize, a6u % 2), a6V ? a6y(jk, b0, fontSize, a6s, a6t, a6u) :
			a6z(b0, fontSize, a6s, a6t, jk), a6G = !0, 0 < y1[b0] ? function(a6s, a6t, fontSize, b0, jk) {
				0 === jE[b0] ? a2E.bN.a0j(a6J[b0]) ? (function(a6s, a6t, fontSize, player, a7E, jk) {
					for (var a79 = a6t, a7J = (jk.globalAlpha = a7A(fontSize), a6h(player) * (a6V ? a6Q : a66[player])), a78 = a6s - .5 * fontSize / a7J - .9 * fontSize, b1 = 0; b1 < 2; b1++) jk.fillText(a2E.bN.a0g(a7E), a78, a79), a78 =
						a6s + .5 * fontSize / a7J + .9 * fontSize;
					jk.globalAlpha = 1
				}(a6s, a6t, fontSize, b0, a6J[b0], jk), a71(a6s, a6t, fontSize, 0, 0, jk)) : a2E.bN.a0l(a6J[b0]) ? (a7D(a6s, a6t, fontSize, a6J[b0], 0, jk), a71(a6s, a6t, fontSize, 0, 1, jk)) : (a7D(a6s, a6t, fontSize, a6J[b0], 1, jk), a71(
					a6s, a6t, fontSize, 1, 0, jk)) : a7D(a6s, a6t, fontSize, a6J[b0], 0, jk)
			}(a6s, a6t, fontSize, b0, jk) : 0 === jE[b0] && a71(a6s, a6t, fontSize, 0, 0, jk), a6w && (0 < y1[b0 + c.iC] || 0 < y1[b0 + 2 * c.iC] || 0 < y1[b0 + 3 * c.iC] || 0 < y1[b0 + 4 * c.iC]) && function(a6s, a6t, fontSize, b0, jk) {
				var dI, bD = -1;
				for (dI = 4; 1 <= dI; dI--) 0 < y1[b0 + dI * c.iC] && bD++;
				for (dI = 1; dI < 5; dI++) 0 < y1[b0 + dI * c.iC] && (! function(a6s, a6t, fontSize, dI, b0, a76, g8, jk) {
					var jj;
					if (1 === dI) {
						b0 = a6J[b0 + c.iC];
						if (!a2E.bN.a0k(b0)) return function(a6s, a6t, fontSize, a7E, a76, jk) {
							jk.globalAlpha = a7A(fontSize);
							a6s -= .534 * a76 * fontSize, a76 = a6t + 1.59 * fontSize;
							jk.font = bA.fu.fv(0, .785 * fontSize), jk.fillText(a2E.bN.a0g(a7E), a6s, a76), jk.globalAlpha = 1
						}(a6s, a6t, fontSize, b0, a76, jk);
						jj = a2E.a5Y.a7G[b0 - 1024 + a2E.bN.a0Y]
					} else jj = 2 === dI ? e2.a7I()[4].canvas[+(g8 < 255)] : (3 === dI ? e2.a7I()[5] : e2.a7I()[6]).canvas[0];
					b0 = a2E.a5Y.a7F, g8 = .8 * fontSize / b0, dI = a6s - .5 * g8 * b0 - .534 * a76 * fontSize, a6s = a6t + 1.4 * g8 * b0;
					jk.setTransform(g8, 0, 0, g8, dI, a6s), jk.globalAlpha = a7A(fontSize), jk.drawImage(jj, 0, 0), jk.globalAlpha = 1, jk.setTransform(1, 0, 0, 1, 0, 0)
				}(a6s, a6t, fontSize, dI, b0, bD, y1[b0 + dI * c.iC], jk), bD -= 2)
			}(a6s, a6t, fontSize, b0, jk), (a6v = a69 * fontSize) < a6B || (jk.font = bA.fu.fv(1, a6v), a6t += Math.floor(.78 * fontSize), a6V ? a6z(b0, a6v, a6s, a6t, jk) : a6y(jk, b0, a6v, a6s, a6t, a6u)))
	}

	function a6z(b0, fontSize, fW, fX, jk) {
		var ___id = b0;
		var showName = b0 < c.fl || !__fx.settings.hideBotNames;
		if (showName) jk.fillText(z.jA[b0], fW, fX), b0 < c.fl && 2 !== z.sr[b0] || (b0 = fontSize / a66[b0], jk.fillRect(fW - .5 * b0, fX + bA.fu.a74 * fontSize, b0, Math.max(1, .1 * fontSize)));
		a6V && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (jk.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			jk.fillText(__fx.utils.getDensity(___id), fW, showName ? fX + fontSize : fX)
		);
	}

	function a6y(jk, b0, fontSize, a6s, a6t, a6u) {
		var ___id = b0;
		b0 = bA.bB.aX(z.gA[b0]);
		a6u >> 1 & 1 ? (jk.lineWidth = .05 * fontSize, jk.strokeStyle = a6x(fontSize, a6u % 2), jk.strokeText(b0, a6s, a6t)) : (1 < a6u && (jk.lineWidth = .12 * fontSize, jk.strokeStyle = a6x(fontSize, a6u), jk.strokeText(b0, a6s, a6t)), jk.fillText(
			b0, a6s, a6t));
		a6V || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (jk.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), jk.fillText(__fx.utils.getDensity(___id), a6s, a6t + fontSize))
	}

	function a71(a6s, a6t, fontSize, a76, a77, jk) {
		var m3 = .95 * fontSize / a6L,
			a6s = a6s - .5 * m3 * a6K + .8 * a76 * fontSize,
			a76 = a6t - 1.76 * m3 * a6L - (.35 - bA.fu.a74 + .7) * a77 * fontSize;
		jk.setTransform(m3, 0, 0, m3, a6s, a76), jk.globalAlpha = a7A(fontSize), jk.drawImage(dg.get(4), 0, 0), jk.globalAlpha = 1, jk.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7D(a6s, a6t, fontSize, a7E, a76, jk) {
		var qM, a78, m3;
		jk.globalAlpha = a7A(fontSize), a2E.bN.a0k(a7E) ? (qM = a2E.a5Y.a7F, jk.setTransform(m3 = 1.1 * fontSize / qM, 0, 0, m3, a78 = a6s - .5 * m3 * qM - .8 * a76 * fontSize, m3 = a6t - 1.55 * m3 * qM), jk.drawImage(a2E.a5Y.a7G[a7E - 1024 + a2E.bN
			.a0Y], 0, 0), jk.setTransform(1, 0, 0, 1, 0, 0)) : (a78 = a6s - .8 * a76 * fontSize, m3 = a6t - (.35 - bA.fu.a74 + 1) * fontSize, jk.fillText(a2E.bN.a0g(a7E), a78, m3)), jk.globalAlpha = 1
	}

	function a6x(fontSize, a6u) {
		return a68 <= fontSize && fontSize < a67 ? jG.a7K[a6u] + a7A(fontSize).toFixed(3) + ")" : jG.a7L[a6u]
	}

	function a7A(fontSize) {
		return a68 <= fontSize && fontSize < a67 ? 1 - (fontSize - a68) / (a67 - a68) : 1
	}

	function a7W(a7J, c1) {
		return 1 + Math.floor(a6A * a7J * c1)
	}

	function a7T(b0) {
		for (var left = a61[b0], bE = a61[b0] - z.l7[b0] - 1; 0 <= bE; bE--)
			if (!a7Z(b0, --left, a62[b0], a64[b0])) {
				left++;
				break
			} var right = a61[b0];
		for (bE = z.l8[b0] - a61[b0] - a63[b0]; 0 <= bE; bE--)
			if (!a7Z(b0, ++right + a63[b0] - 1, a62[b0], a64[b0])) {
				right--;
				break
			} var fW = Math.floor((left + right) / 2),
			top = a62[b0];
		for (bE = a62[b0] - z.l9[b0] - 1; 0 <= bE; bE--)
			if (!a7a(b0, fW, --top, a63[b0])) {
				top++;
				break
			} var bottom = a62[b0];
		for (bE = z.lA[b0] - a62[b0] - a64[b0]; 0 <= bE; bE--)
			if (!a7a(b0, fW, ++bottom + a64[b0] - 1, a63[b0])) {
				bottom--;
				break
			} var fX = Math.floor((top + bottom) / 2);
		a7Q(b0, fW, fX, a63[b0], a64[b0]) && (a61[b0] = fW, a62[b0] = fX)
	}

	function a7Q(player, fW, fX, c1, dO) {
		ca = Math.floor(.2 * c1);
		for (var ca, dI = fW + c1 - 1; fW <= dI; dI--)
			if (!a7Z(player, dI, fX, dO)) return;
		for (dI = fX + dO - 1 - (ca = (ca = Math.floor(.25 * dO)) < 1 ? 1 : ca); fX + ca <= dI; dI--)
			if (!a7a(player, fW, dI, c1)) return;
		return 1
	}

	function a7Z(player, fW, fX, dO) {
		return aA.a4C(player, 4 * (fX * cd.fR + fW)) && aA.a4C(player, 4 * ((fX + dO - 1) * cd.fR + fW))
	}

	function a7a(player, fW, fX, c1) {
		return aA.a4C(player, 4 * (fX * cd.fR + fW)) && aA.a4C(player, 4 * (fX * cd.fR + fW + c1 - 1))
	}
	this.b = function() {
		if (a6V = cy.cz.data[7].value || 8 === c.d, a6U = 0 === (a6U = cy.cz.data[11].value) ? 280 : 1 === a6U ? 187 : 112, a6G = !1, a6C = .88, a69 = .5, a6A = 1.8, a6B = 12 - 3 * cy.cz.data[9].value, a60 = a5z = 0, a61 = new Uint16Array(c.iC),
			a62 = new Uint16Array(c.iC), a63 = new Uint16Array(c.iC), a64 = new Uint16Array(c.iC), a65 = new Float32Array(c.iC), a66 = new Float32Array(c.iC), a6J = new Uint16Array(2 * c.iC), y1 = new Uint8Array(5 * c.iC), a6S = new Uint8Array(c
				.iC), a6T = new Uint8Array(c.iC), a6R || (a6H = a6H || document.createElement("canvas")), a6W(), a6E = a6D = 0, a6F = 1, a6V) {
			var b0, a6g;
			for (a6X(), dZ.font = bA.fu.fv(1, 100), a6g = 100 / Math.floor(dZ.measureText("900 000").width), b0 = c.iC - 1; 0 <= b0; b0--) a65[b0] = Math.min(a6g, 2 * a66[b0]);
			a6Q = a6g, a6P[0] = 100 / (a6g * Math.floor(dZ.measureText("5 000 000").width)), a6P[1] = 100 / (a6g * Math.floor(dZ.measureText("50 000 000").width)), a6P[2] = 100 / (a6g * Math.floor(dZ.measureText("500 000 000").width)), a6P[3] =
				100 / (a6g * Math.floor(dZ.measureText("1 000 000 000").width))
		} else a6X();
		! function() {
			var b0;
			for (b0 = c.iC - 1; 0 <= b0; b0--) z.fo[b0] < 12 ? (a61[b0] = z.l7[b0] + 1, a62[b0] = z.l9[b0] + 1, a63[b0] = 1, a64[b0] = 1) : (a61[b0] = z.l7[b0], a62[b0] = z.l9[b0] + 1, a63[b0] = 4, a64[b0] = 2);
			if (c.g3)
				for (b0 = 0; b0 < c.fl; b0++) a63[b0] = 0;
			a6K = dg.get(4).width, a6L = dg.get(4).height
		}()
	}, this.a6a = function(j6, a6b) {
		a6b > 18 * z.fo[j6] ? (a6T[j6] = 6, aA.a6c[j6] = 2 + aA.a6c[j6] % 2) : (a6S[j6] = 4, (aA.a6c[j6] < 2 || 3 < aA.a6c[j6]) && (aA.a6c[j6] = 6 + aA.a6c[j6] % 2))
	}, this.a6d = function(j6, a6b) {
		a6b > 6 * z.fo[j6] ? (a6T[j6] = 6, aA.a6c[j6] = 4 + aA.a6c[j6] % 2) : (a6S[j6] = 4, (aA.a6c[j6] < 4 || 5 < aA.a6c[j6]) && (aA.a6c[j6] = 8 + aA.a6c[j6] % 2))
	}, this.resize = function() {
		a6W(), a6R || a6f(a6I)
	}, this.a6i = function() {
		for (var b0 = 0; b0 < c.fl; b0++) z.l8[b0] - z.l7[b0] != 3 || z.lA[b0] - z.l9[b0] != 3 ? (a61[b0] = z.l7[b0] + (z.l8[b0] !== z.l7[b0] ? 1 : 0), a62[b0] = z.l9[b0], a63[b0] = 1, a64[b0] = 1) : (a61[b0] = z.l7[b0], a62[b0] = z.l9[b0] + 1,
			a63[b0] = 4, a64[b0] = 2)
	}, this.a6j = function(player, cE, a6k) {
		! function(player, cE, a6k) {
			player += cE * c.iC;
			0 === cE ? a6J[player] === a6k && 0 < y1[player] ? y1[player] = 0 : (a6J[player] = a6k, y1[player] = a2E.bN.a0j(a6k) ? 255 : 64) : 1 === cE ? (y1[player] = 64, a6J[player] = a6k) : y1[player] = a6k
		}(player, cE, a6k), 2 === c.dr && this.g4(!0)
	}, this.gl = function() {
		a6R ? a6f(dZ) : a6G && (1 !== a6F ? (dZ.imageSmoothingEnabled = !0, dZ.setTransform(a6F, 0, 0, a6F, 0, 0), dZ.drawImage(a6H, -a6D / a6F, -a6E / a6F), dZ.setTransform(1, 0, 0, 1, 0, 0), dZ.imageSmoothingEnabled = !1) : dZ.drawImage(a6H, -
			a6D, -a6E))
	}, this.a6m = function(kW, kZ) {
		a6D += kW, a6E += kZ
	}, this.is = function(kW, kZ) {
		e4.a6m(kW, kZ)
	}, this.zoom = function(a6n, ip, iq) {
		a6F *= a6n, a6D = (a6D + ip) * a6n - ip, a6E = (a6E + iq) * a6n - iq
	}, this.g4 = function(dJ) {
		return !a6R && !(!a6O && !dJ && bT.db < a6N + (1 === a6F && 0 === a6D && 0 === a6E && (c.a6p() || c.g3 || 2 === c.dr) ? 1e3 : a6U) || (a6O = !1, a6N = bT.db, a6f(a6I), 0))
	}, this.a6q = function(b0) {
		return a6h(b0) * a65[b0]
	}, this.a6r = function(player) {
		return a65[player]
	}, this.bS = function() {
		bT.bU() % 10 == 9 && (a6O = c.a7M() && !c.a6p()), !c.a6p() && 4 <= ++a60 && function() {
			var b0, bE, b1;
			for (a60 = 0, b1 = 4; 1 <= b1; b1--)
				for (bE = bc.bd - 1; 0 <= bE; bE--) b0 = bc.gb[bE] + b1 * c.iC, 0 < y1[b0] && y1[b0] < 255 && y1[b0]--;
			if (2 !== c.dr)
				for (bE = bc.bd - 1; 0 <= bE; bE--) b0 = bc.gb[bE], 0 < y1[b0] && y1[b0] < 255 && y1[b0]--
		}();
		var b0, bE, az = Math.floor(.1 * bc.bd);
		for (az = (az = az < 8 ? 8 : az) > bc.bd ? bc.bd : az, b0 = a5z + az - 1; a5z <= b0; b0--) bE = b0 % bc.bd, ! function(b0) {
			var a7J = a6h(b0) * a65[b0];
			0 < a63[b0] && a7Q(b0, a61[b0], a62[b0], a63[b0], a64[b0]) ? ! function(b0) {
				for (var fW, fX, c1, dO, g5 = !1, b1 = 0; b1 < 8; b1++) {
					if (c1 = a63[b0] + 2, dO = a64[b0] + 2, c1 > z.l8[b0] - z.l7[b0] + 1 || dO > z.lA[b0] - z.l9[b0] + 1) return g5;
					if (fW = a61[b0] - 1, fX = a62[b0] - 1, !a7Q(b0, fW, fX, c1, dO)) return g5;
					a61[b0] = fW, a62[b0] = fX, a63[b0] = c1, a64[b0] = dO, g5 = !0
				}
				return g5
			}(b0) && function(b0, a7J) {
				for (var fW, fX, c1, dO, g5 = !1, a7X = a63[b0], nm = 1 + Math.floor(.02 * a7X), b1 = 1; b1 < 5; b1++) {
					if ((c1 = a7X + b1 * nm) > z.l8[b0] - z.l7[b0] + 1) return g5;
					if ((dO = a7W(a7J, c1)) > z.lA[b0] - z.l9[b0] + 1) return g5;
					fW = z.l7[b0] + Math.floor(Math.random() * (z.l8[b0] - z.l7[b0] + 2 - c1)), fX = z.l9[b0] + Math.floor(Math.random() * (z.lA[b0] - z.l9[b0] + 2 - dO)), a7Q(b0, fW, fX, c1, dO) && (a61[b0] = fW, a62[b0] = fX, a63[b0] =
						c1, a64[b0] = dO, g5 = !0)
				}
				return g5
			}(b0, a7J) && a7T(b0) : ! function(b0, a7J) {
				var dO, fW = a61[b0] + 1,
					fX = a62[b0] + 1,
					c1 = a63[b0] - 2;
				for (;;) {
					if (c1 < 1) {
						a63[b0] = 0;
						break
					}
					if (dO = a7W(a7J, c1), a7Q(b0, fW, fX, c1, dO)) return a61[b0] = fW, a62[b0] = fX, a63[b0] = c1, a64[b0] = dO, 1;
					fW++, fX++, c1 -= 2
				}
				return
			}(b0, a7J) ? function(b0, a7J) {
				var fW, fX, c1, dO, b1, os, a7Y = z.l8[b0] - z.l7[b0] + 1,
					hT = Math.floor(.02 * a7Y);
				for (os = -6 * (hT = hT < 1 ? 1 : hT), b1 = a7Y; os <= b1; b1 -= hT)
					if (dO = a7W(a7J, c1 = 0 < b1 ? b1 : 1), fW = z.l7[b0] + Math.floor(Math.random() * (z.l8[b0] - z.l7[b0] + 2 - c1)), fX = z.l9[b0] + Math.floor(Math.random() * (z.lA[b0] - z.l9[b0] + 2 - dO)), a7Q(b0, fW, fX, c1, dO))
						return a61[b0] = fW, a62[b0] = fX, a63[b0] = c1, a64[b0] = dO
			}(b0, a7J) : a7T(b0)
		}(bc.gb[bE]);
		a5z = (a5z += az) % bc.bd
	}, this.wb = function() {
		var b0, j6, nU, a0i;
		if (bT.bU() % 4 == 1)
			for (b0 = bc.bd - 1; 0 <= b0; b0--) j6 = bc.gb[b0], aA.a6c[j6] < 2 || ((nU = Math.max(a6S[j6] - 1, 0)) === (a0i = Math.max(a6T[j6] - 1, 0)) ? 0 === nU && (aA.a6c[j6] %= 2) : 0 === a0i && aA.a6c[j6] < 6 && (aA.a6c[j6] += 4), a6S[j6] =
				nU, a6T[j6] = a0i)
	}, this.sl = function(player) {
		var b0 = player + 2 * c.iC,
			g8 = y1[b0];
		return 0 < g8 && (e.uH(50, player), y1[b0] = 0, 255 === g8)
	}, this.a7P = function(player) {
		return 255 === y1[player + 2 * c.iC]
	}
}

function a2u() {
	var sq = 0;
	this.b = function() {
		dl.b(), sq = 0
	}, this.setState = function(a7b) {
		sq = a7b
	}, this.ek = function() {
		return sq
	}, this.a7c = function() {
		this.setState(8), cT.jl()
	}, this.iL = function(iG) {
		if (!cd.a7d) return !1;
		if (!(bT.db < 400)) {
			if ("Enter" === iG.key || "Escape" === iG.key) {
				if (this.a7e()) return !0;
				if ("Enter" === iG.key) {
					if (0 === sq) return !0;
					if (7 === sq) return !0
				}
			}
			return !1
		}
	}, this.e8 = function() {
		a2R.resize()
	}, this.a7e = function() {
		return !!a2R.iK()
	}, this.io = function(fW, fX) {
		!cd.a7d || a2R.io(fW, fX) || 6 === sq && dn.io(fW, fX) || dm.io(fW, fX) || dp.io(fW, fX)
	}, this.is = function(fW, fX) {
		!dp.a7f && dl.is(fW, fX, !0) || dp.is(fW, fX)
	}, this.click = function(fW, fX) {
		dp.a7g()
	}, this.it = function(fW, fX, deltaY) {}, this.e9 = function() {
		dl.oj(), bT.eA = !0
	}, this.gl = function() {
		8 !== sq && 10 !== sq && (dZ.imageSmoothingEnabled = !0, this.a4T(), 0 !== sq && (dp.gl(), dq.gl(), this.a7h(), dm.gl()), 0 !== sq && 6 === sq && dn.gl(), a2R.gl(), cT.gl())
	}, this.a4T = function() {
		var a7j, a7i;
		if (__fx.makeMainMenuTransparent) dZ.clearRect(0, 0, eE.c1, eE.dO);
		else cd.a7d ? (a7i = eE.c1 / cd.fR, a7j = eE.dO / cd.fS, dZ.setTransform(a7i = a7j < a7i ? a7i : a7j, 0, 0, a7i, Math.floor((eE.c1 - a7i * cd.fR) / 2), Math.floor((eE.dO - a7i * cd.fS) / 2)), dZ.drawImage(cd.a7k, 0, 0), dZ.setTransform(1,
			0, 0, 1, 0, 0), dZ.fillStyle = aG.a7l) : dZ.fillStyle = aG.ik, dZ.fillRect(0, 0, eE.c1, eE.dO)
	}, this.a7h = function() {
		var fX = Math.floor(.3 * eE.dO),
			canvas = dg.a4V("territorial.io"),
			a7J = (a7J = 1.75 * eE.dO / canvas.width) * canvas.width < .98 * eE.c1 ? .98 * eE.c1 / canvas.width : a7J,
			fW = (dZ.globalAlpha = .15, dZ.imageSmoothingEnabled = !1, Math.floor(.5 * (eE.c1 - a7J * canvas.width))),
			fW = Math.floor(fW / a7J),
			fX = Math.floor(fX - .5 * canvas.height * a7J),
			fX = Math.floor(fX / a7J);
		dZ.setTransform(a7J, 0, 0, a7J, fW, fX), dZ.drawImage(canvas, fW, fX), dZ.setTransform(1, 0, 0, 1, 0, 0), dZ.globalAlpha = 1, dZ.imageSmoothingEnabled = !0
	}
}

function a7n() {
	this.a7o = 28, this.a7p = 0, this.a7q = null;
	var a7s = this.a7r = null;

	function a7x(qM, a80) {
		var fW, fX, jM, kW, jj = bA.fu.dV(qM, qM),
			jk = bA.fu.getContext(jj, !0),
			qQ = bA.fu.getImageData(jk, qM, qM),
			a5Y = qQ.data,
			c6 = (qM >> 1) - .5,
			a81 = .5 + c6;
		for (a81 *= a81, fX = 0; fX < qM; fX++)
			for (fW = 0; fW < qM; fW++) kW = (kW = fW - c6) * kW + (kW = fX - c6) * kW, a5Y[jM = 4 * (fX * qM + fW)] = a80[0], a5Y[1 + jM] = a80[1], a5Y[2 + jM] = a80[2], a5Y[3 + jM] = (a81 - kW) * a80[3] / a81;
		return jk.putImageData(qQ, 0, 0), jj
	}

	function a84(b0, jk, jj, qM) {
		var highlight, fW, fX;
		0 !== z.bZ[b0] && 0 !== z.fo[b0] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[b0]) && (qM *= 2), fW = z.l7[b0] + z.l8[b0] + 1 - qM - 2 >> 1, fX = z.l9[b0] + z.lA[b0] + 1 - qM - 2 >> 1, highlight ? jk
			.drawImage(jj[c.gQ ? 9 === c.d && 5 === gw.gx[b0] ? 3 : jG.jJ[b0] : b0 < c.fl ? 1 : 0], fW, fX, qM, qM) : jk.drawImage(jj[c.gQ ? 9 === c.d && 5 === gw.gx[b0] ? 3 : jG.jJ[b0] : b0 < c.fl ? 1 : 0], fW, fX))
	}
	this.b = function() {
		var yJ;
		this.a7p = 700,
			function(yJ) {
				var qM = yJ.a7o;
				if (yJ.a7r = [], a7s = [], c.gQ) {
					for (var b0 = 0; b0 <= c.a7w; b0++) yJ.a7r.push(a7x(qM, jG.a7y[jG.jH[b0]])), a7s.push(a7x(qM >> 1, jG.a7y[jG.jH[b0]]));
					9 === c.d && a7s.push(a7x(qM, jG.a7y[1]))
				} else yJ.a7r.push(a7x(qM, jG.a7y[7])), yJ.a7r.push(a7x(qM, jG.a7y[4])), a7s.push(a7x(qM >> 1, jG.a7y[7]))
			}(this),
			function(yJ, a82) {
				var b0, a7q = yJ.a7q,
					jk = bA.fu.getContext(a7q, !0),
					az = c.iC,
					qM = yJ.a7o >> 1;
				jk.imageSmoothingEnabled = !1, jk.setTransform(1, 0, 0, 1, 0, 0), a82 && jk.clearRect(0, 0, a7q.width, a7q.height);
				if (9 === c.d) {
					qM <<= 1;
					yJ = sA.sC[5];
					for (b0 = az - yJ; b0 < az; b0++) a84(b0, jk, a7s, qM);
					az -= yJ, qM >>= 1
				}
				for (b0 = c.fl; b0 < az; b0++) a84(b0, jk, a7s, qM)
			}(this, null !== (yJ = this).a7q && yJ.a7q.width === cd.fR - 2 && yJ.a7q.height === cd.fS - 2 || (yJ.a7q = bA.fu.dV(cd.fR - 2, cd.fS - 2), !1)), c.g3 || this.a7v()
	}, this.a7z = a7x, this.a7v = function() {
		for (var az = c.fl, qM = this.a7o, a7r = this.a7r, jk = bA.fu.getContext(this.a7q, !0), b0 = 0; b0 < az; b0++) a84(b0, jk, a7r, qM)
	}
}

function a38() {
	var a85;

	function a8L(jj, a7J, fW, fX, globalAlpha) {
		cd.nP.save(), cd.nP.globalAlpha = globalAlpha, cd.nP.imageSmoothingEnabled = !1, cd.nP.scale(a7J, a7J), cd.nP.drawImage(jj, Math.floor(fW * (cd.fR / a7J - jj.width)), Math.floor(fX * (cd.fS / a7J - jj.height))), cd.nP.restore()
	}
	this.ty = 0, this.a86 = 0, this.a87 = 0, this.a88 = 0, this.b = function() {
		(a85 = new Array(cd.fD))[0] = {
			c1: [0, 5e3, 8e3, 1e4],
			ij: [220, 250, 255, 220],
			gi: [190, 220, 0, 0],
			b1: [170, 200, 0, 0]
		}, a85[1] = {
			c1: [0, 4e3, 5e3, 6e3, 1e4],
			ij: [25, 0, 100, 0, 25],
			gi: [25, 0, 0, 0, 25],
			b1: [25, 0, 0, 0, 25]
		}, a85[2] = {
			c1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			ij: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			gi: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			b1: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a85[3] = {
			c1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			ij: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			gi: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			b1: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, a85[4] = {
			c1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			ij: [10, 10, 20, 10, 10, 170, 212],
			gi: [20, 20, 60, 100, 100, 110, 170],
			b1: [70, 70, 160, 30, 30, 60, 120]
		}, a85[5] = {
			c1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			ij: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			gi: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			b1: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a85[6] = {
			c1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			ij: [10, 10, 60, 255, 255, 200, 200],
			gi: [10, 10, 60, 255, 255, 200, 200],
			b1: [80, 80, 255, 255, 255, 200, 200]
		}, a85[7] = {
			c1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			ij: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			gi: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			b1: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a85[8] = {
			c1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			ij: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			gi: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			b1: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a85[9] = {
			c1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			ij: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			gi: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			b1: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a85[20] = {
			c1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			ij: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			gi: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			b1: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, a85[21] = {
			c1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			ij: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			gi: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			b1: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a89 = function() {
		var a8K, b0, bE, lU, qQ = function() {
				var qQ;
				return cd.a7k = document.createElement("canvas"), cd.a7k.width = cd.fR, cd.a7k.height = cd.fS, cd.nP = cd.a7k.getContext("2d", {
					alpha: !1
				}), qQ = cd.nP.getImageData(0, 0, cd.fR, cd.fS), cd.a8E = qQ.data, qQ
			}(),
			c1 = a85[cd.cf].c1,
			ij = a85[cd.cf].ij,
			gi = a85[cd.cf].gi,
			b1 = a85[cd.cf].b1,
			c8 = a2H.hH(),
			az = c1.length - 2,
			a8F = new Array(1 + az),
			a8G = new Array(1 + az),
			a8H = new Array(1 + az),
			a8I = new Array(1 + az);
		for (bE = az; 0 <= bE; bE--) a8F[bE] = c1[bE + 1] - c1[bE], a8G[bE] = ij[bE + 1] - ij[bE], a8H[bE] = gi[bE + 1] - gi[bE], a8I[bE] = b1[bE + 1] - b1[bE];
		for (b0 = cd.fR * cd.fS - 1; 0 <= b0; b0--)
			for (bE = az; 0 <= bE; bE--)
				if (c8[b0] >= c1[bE]) {
					lU = c8[b0] - c1[bE], cd.a8E[4 * b0] = ij[bE] + a5G(a8G[bE] * lU, a8F[bE]), cd.a8E[4 * b0 + 1] = gi[bE] + a5G(a8H[bE] * lU, a8F[bE]), cd.a8E[4 * b0 + 2] = b1[bE] + a5G(a8I[bE] * lU, a8F[bE]), cd.a8E[4 * b0 + 3] = 255;
					break
				} cd.nP.putImageData(qQ, 0, 0), cd.a8C(cd.cf) && dg.dh() && cd.a8C(cd.cf) && (qQ = dg.a4V("arena"), a8K = dg.a4V("territorial.io"), a8L(qQ, 5, .5, .5, .1), a8L(a8K, 2, .5, .45, .1)), cd.a7d = !0, bT.eA = !0
	}, this.a8M = function() {
		for (var j6, fW, fX, a8N, w5, lW, a86 = 0, c1 = cd.fR, dO = cd.fS, lU = c1 * dO * 4, a8O = fN, a8P = cd.a8E, b0 = c1 - 1; 0 <= b0; b0--) a8O[(j6 = b0 << 2) + 2] = a8O[lU - j6 - 2] = 3;
		for (lU = 4 * c1, b0 = dO - 1; 0 <= b0; b0--) a8O[(j6 = b0 * lU) + 2] = a8O[j6 + lU - 2] = 3;
		for (a8N = c1 - 1, w5 = dO - 1, fX = 1; fX < w5; fX++)
			for (lU = fX * c1, fW = 1; fW < a8N; fW++) lW = 1 - (a8P[(j6 = lU + fW << 2) + 2] > a8P[j6 + 1] && a8P[j6 + 2] > a8P[j6]), a8O[j6 + 2] = 6 - 5 * lW, a86 += lW;
		this.ty = (c1 - 2) * (dO - 2), this.a88 = 0, cd.a8Q(cd.cf) && (cd.a88.a8R(), cd.a88.a8S(4, 5)), this.a86 = c.fp = a86 - this.a88, this.a87 = this.ty - this.a86 - this.a88, this.a87 && (cd.a88.a8S(6, 2), cd.a88.a8T())
	}
}

function a2X() {
	"function" != typeof Math.log2 && (Math.log2 = function(fW) {
		return Math.log(fW) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fW) {
		return Math.log(fW) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fW) {
		return 0 < fW ? 1 : fW < 0 ? -1 : 0
	})
}

function a2w() {
	var a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8U = [
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
		a8V = [
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

	function a8l(a7Y, os) {
		for (var b0 = a7Y; b0 < os; b0++) a8W[b0] = 4 * p.eL(64 * hL.random(), hL.value(100)), a8X[b0] = 4 * p.eL(64 * hL.random(), hL.value(100)), a8Y[b0] = 4 * p.eL(64 * hL.random(), hL.value(100))
	}

	function a8k(a7Y, os) {
		for (var colorsData = c.data.colorsData, b0 = a7Y; b0 < os; b0++) {
			var c8 = colorsData[b0];
			a8W[b0] = 4 * (c8 >> 12), a8X[b0] = 4 * (c8 >> 6 & 63), a8Y[b0] = 4 * (63 & c8)
		}
	}

	function a92(g5, a94) {
		fN[g5] = 0, fN[g5 + 1] = 0, fN[g5 + 2] = a94, fN[g5 + 3] = 0, a95(g5)
	}

	function a95(g5) {
		var fW;
		mB.a99 || (fW = aA.a8r(g5), g5 = aA.u2(g5), mB.a99 = fW >= a2S.a9A[0] && fW <= a2S.a9A[2] && g5 >= a2S.a9A[1] && g5 <= a2S.a9A[3])
	}
	this.w3 = new Int32Array(4), this.dT = function() {
		var w3 = this.w3;
		w3[0] = -4 * cd.fR, w3[1] = 4, w3[2] = -w3[0], w3[3] = -w3[1]
	}, this.b = function() {
		if (a8W = new Uint8Array(c.iC), a8X = new Uint8Array(c.iC), a8Y = new Uint8Array(c.iC), a8Z = new Uint8Array(c.iC), a8a = new Uint8Array(c.iC), a8b = new Uint8Array(c.iC), a8c = new Uint8Array(c.iC), a8d = new Uint8Array(c.iC), a8e =
			new Uint8Array(c.iC), a8f = new Uint8Array(c.iC), this.a6c = new Uint8Array(c.iC), c.gQ)
			for (var a5W = jG.a5W, b0 = c.iC - 1; 0 <= b0; b0--) {
				var dI = a5W[b0],
					c6 = p.eL((a8V[dI][3] + 1) * hL.random(), hL.value(100));
				a8W[b0] = a8U[dI][0] + c6 * a8V[dI][0], a8X[b0] = a8U[dI][1] + c6 * a8V[dI][1], a8Y[b0] = a8U[dI][2] + c6 * a8V[dI][2]
			} else 0 === c.data.colorsType ? c.data.selectableColor ? (a8k(0, c.fl), a8l(c.fl, c.iC)) : a8l(0, c.iC) : a8k(0, c.iC);
		! function() {
			var b0, ca;
			for (b0 = c.iC - 1; 0 <= b0; b0--) ca = p.eL(a8W[b0] + a8X[b0] + a8Y[b0], 3), a8W[b0] += a5G(ca - a8W[b0], 2), a8X[b0] += a5G(ca - a8X[b0], 2), a8Y[b0] += a5G(ca - a8Y[b0], 2), a8W[b0] -= a8W[b0] % 4, a8X[b0] -= a8X[b0] % 4, a8Y[
				b0] -= a8Y[b0] % 4
		}(),
		function() {
			for (var b0 = c.iC - 1; 0 <= b0; b0--) a8W[b0] += p.eL(b0, 128), a8X[b0] += p.eL(b0 % 128, 32), a8Y[b0] += p.eL(b0 % 32, 8), a8Z[b0] = b0 % 8
		}(), this.a8o(),
			function() {
				for (var b0 = c.iC - 1; 0 <= b0; b0--) a8a[b0] = a8W[b0] < 32 ? a8W[b0] + 32 : a8W[b0] - 32, a8b[b0] = a8X[b0] < 32 ? a8X[b0] + 32 : a8X[b0] - 32, a8c[b0] = a8Y[b0] < 32 ? a8Y[b0] + 32 : a8Y[b0] - 32
			}(),
			function() {
				for (var b0 = c.iC - 1; 0 <= b0; b0--) a8d[b0] = 235 < a8W[b0] ? a8W[b0] - 20 : a8W[b0] + 20, a8e[b0] = 235 < a8X[b0] ? a8X[b0] - 20 : a8X[b0] + 20, a8f[b0] = 235 < a8Y[b0] ? a8Y[b0] - 20 : a8Y[b0] + 20
			}()
	}, this.nY = function(player) {
		var bq = a4.lJ;
		return bq[0] = a8W[player], bq[1] = a8X[player], bq[2] = a8Y[player], bq
	}, this.a8o = function() {
		for (var b0 = c.iC - 1; 0 <= b0; b0--) this.a6c[b0] = a8W[b0] + a8X[b0] + a8Y[b0] < 280 ? 0 : 1
	}, this.a8r = function(g5) {
		return p.eL(g5, 4) % cd.fR
	}, this.u2 = function(g5) {
		return p.eL(g5, 4 * cd.fR)
	}, this.a8s = function(fW, fX) {
		return Math.floor(4 * (fX * cd.fR + fW))
	}, this.a8t = function(g5) {
		var w3 = this.w3;
		return this.a8u(g5 + w3[0]) || this.a8u(g5 + w3[1]) || this.a8u(g5 + w3[2]) || this.a8u(g5 + w3[3])
	}, this.a8v = function(g5) {
		var w3 = this.w3;
		return this.vj(g5 + w3[0]) || this.vj(g5 + w3[1]) || this.vj(g5 + w3[2]) || this.vj(g5 + w3[3])
	}, this.zR = function(g5, player) {
		var w3 = this.w3;
		return this.qW(g5 + w3[0], player) || this.qW(g5 + w3[1], player) || this.qW(g5 + w3[2], player) || this.qW(g5 + w3[3], player)
	}, this.w6 = function(g5) {
		return 208 <= fN[g5 + 3]
	}, this.a4C = function(player, g5) {
		return this.w6(g5) && this.zz(player, g5)
	}, this.zz = function(player, g5) {
		return player === this.kP(g5)
	}, this.a8w = function(g5) {
		return 208 <= fN[g5 + 3] && fN[g5 + 3] < 224
	}, this.a8x = function(g5) {
		return 224 <= fN[g5 + 3] && fN[g5 + 3] < 248
	}, this.a8y = function(g5) {
		for (var w3 = this.w3, b0 = 3; 0 <= b0; b0--)
			if (this.kM(g5 + w3[b0])) return !0;
		return !1
	}, this.aB = function(g5) {
		return this.w6(g5) || this.jL(g5)
	}, this.kM = function(g5) {
		return 0 === fN[g5 + 3] && 2 === fN[g5 + 2]
	}, this.jL = function(g5) {
		return 0 === fN[g5 + 3] && 1 === fN[g5 + 2]
	}, this.a8z = function(g5) {
		return 0 === fN[g5 + 3] && 3 === fN[g5 + 2]
	}, this.vj = function(g5) {
		return 0 === fN[g5 + 3] && 5 === fN[g5 + 2]
	}, this.a8u = function(g5) {
		return 0 === fN[g5 + 3] && 3 <= fN[g5 + 2]
	}, this.kN = function(g5) {
		return (fN[g5] >> 1 << 8) + fN[g5 + 1]
	}, this.a90 = function(g5) {
		return 1 & fN[g5]
	}, this.qW = function(g5, player) {
		return this.jL(g5) || this.w6(g5) && player !== this.kP(g5)
	}, this.kP = function(g5) {
		return fN[g5] % 4 * 128 + fN[g5 + 1] % 4 * 32 + fN[g5 + 2] % 4 * 8 + fN[g5 + 3] % 8
	}, this.a91 = function(g5) {
		a92(g5, 1)
	}, this.a93 = function(g5) {
		a92(g5, 2)
	}, this.a96 = function(g5, player) {
		fN[g5] = a8W[player], fN[g5 + 1] = a8X[player], fN[g5 + 2] = a8Y[player], fN[g5 + 3] = 208 + a8Z[player], a95(g5)
	}, this.a97 = function(g5, player) {
		fN[g5] = a8a[player], fN[g5 + 1] = a8b[player], fN[g5 + 2] = a8c[player], fN[g5 + 3] = 224 + a8Z[player], a95(g5)
	}, this.a98 = function(g5, player) {
		fN[g5] = a8d[player], fN[g5 + 1] = a8e[player], fN[g5 + 2] = a8f[player], fN[g5 + 3] = 248 + a8Z[player], a95(g5)
	}
}

function a3Q() {
	var a9B, a9C, a9D = -15e3,
		a9E = !1;

	function io(iG) {
		a9U() || (a9E = !0, a9V(iG, 1), bW.u.xo(bW.u.xa), a9W(Math.floor(eE.dR * iG.clientX), Math.floor(eE.dR * iG.clientY)))
	}

	function a9J(iG) {
		a9D = bT.db, a9V(iG, 1), bW.u.xo(bW.u.xa), 0 < iG.touches.length && (a9B = Math.floor(eE.dR * iG.touches[0].clientX), a9C = Math.floor(eE.dR * iG.touches[0].clientY), a2K.a9J(iG) || a9W(a9B, a9C))
	}

	function a9W(fW, fX) {
		cT.io(fW, fX), 0 === c.dr ? cj.io(fW, fX) : dy.yE(fW, fX) || e3.io(fW, fX) || e5.io(fW, fX) || e2.a9X(fW, fX) || e0.io(fW, fX) || 0 <= dx.io(fW, fX) || dz.io(fW, fX) || vD.a9Y(fW, fX) || e2.a9Z(fW, fX)
	}

	function is(iG) {
		a9U() || (a9E = !0, a9V(iG, 1), a9a(Math.floor(eE.dR * iG.clientX), Math.floor(eE.dR * iG.clientY)))
	}

	function a9K(iG) {
		a9D = bT.db, a9V(iG, 1), 0 < iG.touches.length && (a9B = Math.floor(eE.dR * iG.touches[0].clientX), a9C = Math.floor(eE.dR * iG.touches[0].clientY), a2K.a9K(iG) || a9a(a9B, a9C))
	}

	function a9a(fW, fX) {
		cT.is(fW, fX), 0 === c.dr ? cj.is(fW, fX) : (a2Q.va(fW, fX), e3.is(fW, fX) || (dx.is(fW, fX), e2.mF() ? e2.is(fW, fX) : dw.vc ? dw.is(fW) && (bT.eA = !0) : (ds.is(fW, fX), dv.a9b && dv.is(fW, fX) && (bT.eA = !0))))
	}

	function a9I(iG) {
		a9U() || (a9V(iG, 1), iu(), 0 === c.dr ? (cj.click(-1024, -1024), dp.oo()) : (ds.a7g(-1024, -1024), dx.is(-1024, -1024), dw.a9c(), dv.a9b = !1))
	}

	function mH(iG) {
		a9U() || (a9V(iG, 1), a9d(Math.floor(eE.dR * iG.clientX), Math.floor(eE.dR * iG.clientY), 2 === iG.button), vD.a9H && (vD.a9H = !1, iG.preventDefault()))
	}

	function click(iG) {
		a9U() || a9V(iG, 1)
	}

	function a9L(iG) {
		a9D = bT.db, a9V(iG, 1), iG && iG.touches && 0 < iG.touches.length && 0 !== c.dr ? dv.a9b = !1 : a2K.a9e() || (a9d(a9B, a9C, !1), vD.a9H && (vD.a9H = !1, iG.preventDefault()))
	}

	function a9M(iG) {
		a9D = bT.db, a9V(iG, 1), a9d(a9B, a9C, !1), vD.a9H && (vD.a9H = !1, iG.preventDefault())
	}

	function a9N(iG) {}

	function a9O(iG) {}

	function a9P(iG) {
		a9U() || a9V(iG, 0)
	}

	function a9d(fW, fX, a9f) {
		iu(), 0 === c.dr ? cj.click(fW, fX) : (ds.a7g(fW, fX), e3.a7g(), dw.a9c(), dv.a9b = !1, e2.click(fW, fX, a9f) ? bT.eA = !0 : dx.mH(fW, fX))
	}

	function iu() {
		cT.iu()
	}

	function it(iG) {
		var fW, fX, deltaY;
		a9U() || (a9V(iG, 1), bW.u.xo(bW.u.xa), fW = Math.floor(eE.dR * iG.clientX), fX = Math.floor(eE.dR * iG.clientY), deltaY = iG.deltaY, 1 === iG.deltaMode && (deltaY *= 16), cT.it(fW, fX, deltaY), 0 === c.dr ? cj.it(fW, fX, deltaY) : ds.it(fW,
			fX, deltaY) || (dw.ir(fW, fX) ? dw.it(deltaY) && (bT.eA = !0) : dv.it(fW, fX, deltaY)))
	}

	function a9Q(iG) {
		a9V(iG, 0)
	}

	function a9V(iG, id) {
		0 === id && cT.mF() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cj.ek() && iG.preventDefault()
	}

	function a9R(iG) {
		if (__fx.keybindHandler(iG.key)) return;
		a9U() || 0 < eE.dS || (iG = iG.code) && iG.length && (zG.dI(iG, 18) ? a2I.a9h(3) : zG.dI(iG, 22) ? a2I.a9h(0) : zG.dI(iG, 20) ? a2I.a9h(1) : zG.dI(iG, 24) ? a2I.a9h(2) : zG.dI(iG, 10) ? dw.a9i(31 / 32) : zG.dI(iG, 8) ? dw.a9i(32 / 31) : zG
			.dI(iG, 6) ? dw.a9i(7 / 8) : zG.dI(iG, 4) ? dw.a9i(8 / 7) : zG.dI(iG, 14) ? 0 !== c.dr && dv.it(Math.floor(eE.c1 / 2), Math.floor(eE.dO / 2), -200) : zG.dI(iG, 16) ? 0 !== c.dr && dv.it(Math.floor(eE.c1 / 2), Math.floor(eE.dO / 2),
				200) : zG.dI(iG, 0) ? c.dr && a2Q.vb(0) : zG.dI(iG, 2) ? c.dr && a2Q.vb(1) : zG.dI(iG, 30) ? c.dr && a2Q.vb(2) : zG.dI(iG, 26) ? c.dr && a2Q.vz() : zG.dI(iG, 28) && c.dr && a2Q.mk())
	}

	function a9S(iG) {
		if (!a9U() && !(0 < eE.dS || bT.db < 400)) {
			var code = iG.code;
			if (code && code.length && !("Enter" === code && cT.iL(1) || "Space" === code && cT.iL(0))) return ax.zZ ? ax.a9j.iL(code) ? void 0 : void("Escape" === code && vD.yU()) : void(8 !== cj.ek() && cj.iL(iG) ? bT.eA = !0 : "Escape" === code ?
				vD.yU() : zG.dI(code, 18) ? a2I.a9k(3) : zG.dI(code, 22) ? a2I.a9k(0) : zG.dI(code, 20) ? a2I.a9k(1) : zG.dI(code, 24) ? a2I.a9k(2) : zG.dI(code, 12) ? dy.m7(!c.mI) : "Space" === code && c.dr && (dx.m1 && dx.m6(), c.bV) && dy
				.m9(!1))
		}
	}

	function a9T() {
		"hidden" !== document.visibilityState && (bT.eA = !0)
	}

	function a9U() {
		return a9D + 15e3 > bT.db
	}

	function resize() {
		eE.de()
	}
	this.a9F = 0, this.a9G = "", this.a9H = !1, this.b = function() {
		dX.addEventListener("mousedown", io, {
			passive: !1
		}), dX.addEventListener("mousemove", is, {
			passive: !1
		}), dX.addEventListener("mouseup", mH, {
			passive: !1
		}), dX.addEventListener("click", click, {
			passive: !1
		}), dX.addEventListener("mouseleave", a9I, {
			passive: !1
		}), dX.addEventListener("wheel", it, {
			passive: !1
		}), dX.addEventListener("touchstart", a9J, {
			passive: !1
		}), dX.addEventListener("touchmove", a9K, {
			passive: !1
		}), dX.addEventListener("touchend", a9L, {
			passive: !1
		}), dX.addEventListener("touchcancel", a9M, {
			passive: !1
		}), dX.addEventListener("dragover", a9N), dX.addEventListener("drop", a9O), dX.addEventListener("dblclick", a9P), document.addEventListener("contextmenu", a9Q), document.addEventListener("keydown", a9R), document.addEventListener(
			"keyup", a9S), document.addEventListener("visibilitychange", a9T), window.addEventListener("resize", resize)
	}, this.a9Y = function(fW, fX) {
		return !!dy.io(fW, fX) || !!(ds.io(fW, fX) || dv.io(fW, fX) || dw.io(fW, fX) || e.io(fW, fX))
	}, this.a9l = a9U, this.vE = function() {
		return !a9E || 0 < a9D
	}, this.yU = function() {
		if (!cT.mF()) return 8 === cj.ek() ? c.mI ? void dy.m7(!1) : e3.mF ? void e3.m6() : void dx.m6() : void(7 !== cj.ek() && 6 === cj.ek() && dn.a9m());
		cT.iL(2)
	}
}

function a2k() {
	var a9n, dO, a9o, a9p, a9q, a9r, a9s, a9t, a9u;

	function u2() {
		return dw.uN(e.uO()) ? dz.mF ? __fx.settings.keybindButtons ? dw.fX - 2 * dw.dO - 3 * a9o : dw.fX - dw.dO - 2 * a9o : __fx.settings.keybindButtons ? dw.fX - dw.dO - 2 * a9o : dw.fX - a9o : dy.uN(e.uP()) ? dz.mF ? dy.u2() - dw.dO - 2 * a9o :
			dy.u2() - a9o : dz.mF ? eE.dO - dw.dO - (uQ.uR() + 1) * a9o : eE.dO - uQ.uR() * di.gap
	}

	function a9z(g8, bF, id, j6, aA1, aA2, a0N, aA3, aA4, jK, aAE) {
		var b0, fV, jj, b3, aAF = void 0 !== aA4,
			c1 = Math.floor(e1.measureText(bF, e.ft) + 1.5 * a9p + (aAF ? dO : 1.5 * a9p));
		if (bT.eA = !0, aAE || a2V.j9(bF, aA4), c1 + 2 * a9o + dw.dO > eE.c1 && !aAF && 50 !== id && 20 < bF.length) a9z(g8, (aAE = bA.bB.aAG(bF))[0], id, j6, aA1, aA2, a0N, aA3, aA4, jK, !0), a9z(g8, aAE[1], id, j6, aA1, aA2, a0N, aA3, aA4, jK, !0);
		else if (aAE = c1 + (50 === id ? a9q : 0), (jj = document.createElement("canvas")).width = c1, jj.height = dO, (fV = jj.getContext("2d", {
				alpha: !0
			})).font = e.ft, bA.fu.textBaseline(fV, 1), bA.fu.textAlign(fV, 0), fV.clearRect(0, 0, c1, dO), fV.fillStyle = aA2, fV.fillRect(0, 0, c1, dO), fV.fillStyle = aA1, fV.fillText(bF, Math.floor(1.5 * a9p), Math.floor(dO / 2)), aAF && (fV
				.imageSmoothingEnabled = !0, a2E.a5Y.aAH(aA4, fV, c1 - dO, 0, dO)), 0 === (b3 = {
				db: g8,
				bF: bF,
				id: id,
				player: j6,
				canvas: jj,
				aA1: aA1,
				aA2: aA2,
				c1: c1,
				aA7: aAE,
				a0N: a0N,
				aA3: aA3,
				aA4: aA4,
				jK: jK
			}).db || 0 < a9n.length && 0 < a9n[0].db) a9n.unshift(b3);
		else {
			for (b0 = 1; b0 < a9n.length; b0++)
				if (0 < a9n[b0].db) return void a9n.splice(b0, 0, b3);
			a9n.push(b3)
		}
	}

	function aA0(ij, gi, b1) {
		return "rgb(" + ij + "," + gi + "," + b1 + ")"
	}

	function aAI(id, bD) {
		for (var az = a9n.length, b0 = 0; b0 < az; b0++) a9n[b0].id === id && bD-- <= 0 && (a9n.splice(b0, 1), b0--, az--)
	}

	function aAJ(id, player) {
		for (var aAj = !1, b0 = a9n.length - 1; 0 <= b0; b0--) a9n[b0].id !== id || player !== c.iC && a9n[b0].player !== player || (a9n.splice(b0, 1), aAj = !0);
		return aAj
	}

	function aAo(bF) {
		a9z(340, bF, 6, 0, aA0(215, 245, 255), aG.g6, -1, !1)
	}
	this.jY = "", this.b = function() {
		var self;
		a9t = 0, a9s = dY.dc.fs() ? 7 : 12, a9r = {
			jI: [0, 0, 0],
			a9v: [0, 0, 0],
			a2A: [220, 180, 180],
			iZ: [0, 0, 0],
			dI: [0, 0, 0]
		}, a9n = [], this.resize(), c.g3 && this.sk(0, 18), cd.aAn.f2[cd.cf].name.length && aAo(L(179, [cd.aAn.f2[cd.cf].name])), aAo(L(180, [cd.fR - 2 + "x" + (cd.fS - 2)])), aAo(L(181, [bA.bB.aX(a2G.ty)])), a2G.ty !== a2G.a86 && aAo(L(182,
			[bA.bB.aX(a2G.a86) + " (" + bA.bB.gE(100 * a2G.a86 / a2G.ty, 1) + ")"])), 0 < a2G.a87 && aAo(L(159, [bA.bB.aX(a2G.a87) + " (" + bA.bB.gE(100 * a2G.a87 / a2G.ty, 1) + ")"])), 0 < a2G.a88 && aAo(L(183, [bA.bB.aX(a2G.a88) + " (" + bA
			.bB.gE(100 * a2G.a88 / a2G.ty, 1) + ")"
		])), 10 === c.d && a9z(120, L(184), 6, 0, aA0(235, 255, 120), aG.g6, -1, !1), 0 !== (self = this).jY.length && (a9z(200, self.jY, 0, 0, aG.am, aG.g6, -1, !1), self.jY = ""), c.a9y && a9z(340, L(137), 6, 0, aA0(255, 200, 0), aG.g6, -1,
			!1)
	}, this.resize = function() {
		var oM, b0;
		if (dO = (dO = Math.floor((dY.dc.fs() ? .031 : .0249) * eE.dP)) < 10 ? 10 : dO, this.fontSize = Math.floor(2 * dO / 3), this.ft = bA.fu.fv(1, this.fontSize), a9o = di.gap, a9p = Math.floor(dO / 5), 0 < a9n.length)
			for (oM = a9n, a9n = [], b0 = oM.length - 1; 0 <= b0; b0--) a9z(oM[b0].db, oM[b0].bF, oM[b0].id, oM[b0].player, oM[b0].aA1, oM[b0].aA2, oM[b0].a0N, oM[b0].aA3, oM[b0].aA4, oM[b0].jK, !0);
		this.aA5()
	}, this.aA5 = function() {
		a9u = document.createElement("canvas");
		var bF = L(138),
			fV = (a9q = e1.measureText(bF, this.ft) + 5 * a9p, a9u.height = dO, a9u.width = a9q, a9u.getContext("2d", {
				alpha: !0
			}));
		fV.font = this.ft, bA.fu.textBaseline(fV, 1), bA.fu.textAlign(fV, 1), fV.clearRect(0, 0, a9q, dO), fV.fillStyle = aG.aA6, fV.fillRect(0, 0, a9q, dO), fV.fillStyle = aG.am, fV.fillText(bF, Math.floor(a9q / 2), Math.floor(dO / 2))
	}, this.uO = function() {
		var az;
		return dz.mF ? dz.c1 : 0 === (az = a9n.length) ? 0 : 1 === az ? a9n[0].aA7 : eK(a9n[0].aA7, a9n[1].aA7)
	}, this.uP = function() {
		var az = a9n.length;
		return dz.mF ? az ? eK(dz.c1, a9n[0].aA7) : dz.c1 : 0 === az ? 0 : 1 === az ? a9n[0].aA7 : 2 === az ? eK(a9n[0].aA7, a9n[1].aA7) : eK(eK(a9n[0].aA7, a9n[1].aA7), a9n[2].aA7)
	}, this.io = function(fW, fX) {
		for (var yS, a7m, aA8 = u2(), b0 = a9n.length - 1; 0 <= b0; b0--)
			if ((a7m = aA8 - (b0 + 1) * dO) <= fX && fX < a7m + dO) return 50 === a9n[b0].id ? fW >= eE.c1 - a9q - a9o - a9n[b0].c1 && (fW >= eE.c1 - a9q - a9o ? mf.gc.aA9(a9n[b0].player) : wg.aAA(a9n[b0].player, 800, !1, 0), !0) : fW >= eE.c1 -
				a9n[b0].c1 - a9o && (736 === a9n[b0].id ? window.open("https://" + a9n[b0].bF, "_blank") : a9n[b0].aA3 && (a9n[b0].jK && a9n[b0].jK.bE ? (a7m = a9n[b0].jK.jM, yS = a8.jQ(a7m) - 10, a7m = a8.jR(a7m) - 10, wg.aAB(yS, a7m, 19 +
					yS, 19 + a7m)) : a9n[b0].jK && a9n[b0].jK.b1 ? wg.aAC(a9n[b0].player, a9n[b0].jK.a08) : (wg.aAA(a9n[b0].player, 800, !1, 0), 0 <= a9n[b0].a0N && (yS = a9n[b0].a0N, a9n[b0].a0N = a9n[b0].player, a9n[b0].player =
					yS))), !0);
		return !1
	}, this.j9 = function(g8, bF, id, j6, aA1, aA2, a0N, aA3, aA4, jK) {
		a9z(g8, bF, id, j6, aA1, aA2, a0N, aA3, aA4, jK)
	}, this.aAD = function(aZ) {
		a9z(300, aZ, 252, 0, aG.am, aG.g6, -1, !1)
	}, this.uC = function(id) {
		for (var b0 = a9n.length - 1; 0 <= b0; b0--) a9n[b0].id === id && (a9n[b0].db = 1)
	}, this.sk = function(player, id) {
		0 === id ? (e1.eT(player, 0), aAI(423, 2), a9z(160, L(139, [z.jA[player]]), 423, player, "rgb(10,220,10)", aG.g6, -1, !1)) : 1 === id ? (aAJ(50, c.iC), e1.eT(player, 1), a9z(360, L(140, [z.jA[player]]), 0, player, aG.aAK, aG.g6, -1, !0),
			wg.aAA(player, 2700, !1, 0)) : 2 === id ? (e1.eT(player, 2), a9z(0, L(141), 0, player, "rgb(10,255,255)", aG.g6, -1, !0), wg.aAA(player, 2700, !1, 0)) : 3 === id ? (e1.eT(player, 2), a9z(0, L(142, [z.jA[player]]), 0, player, aG
			.am, aG.g6, -1, !0), wg.aAA(player, 2700, !1, 0)) : 4 === id ? this.aAL(1, player, player) : 5 === id ? bA.gc.mN(c.ba) || (function(id, aAZ) {
			var b0, aAa = 0,
				az = a9n.length;
			for (b0 = 0; b0 < az; b0++)
				if (a9n[b0].id === id && aAZ <= ++aAa) return a9n.splice(b0, 1)
		}(1, 5), e4.sl(player) && a9z(180, L(143, [z.jA[player]]), 1, player, aA0(255, 200, 180), aG.g6, -1, !0), bA.gc.sy(player, 10) && (aAI(573, 0), a9z(180, L(144, [z.jA[player]]), 573, player, aG.aAK, aG.g6, -1, !0))) : 18 === id ? a9z(
			255, L(145), 18, 0, aG.am, aG.g6, -1, !1) : 21 === id ? a9z(220, L(146), id, 0, aG.am, aG.g6, -1, !1) : 22 === id ? this.aAL(2, player, player) : 59 === id && a9z(0, L(147), id, 0, aG.aAN, aG.g6, 0, !1)
	}, this.aAO = function(aZ) {
		a9z(200, L(148, [aZ]), 94, 0, aG.am, aG.aAP, -1, !1)
	}, this.aAQ = function(aAR) {
		if (c.ba === aAR && !c.fk && !c.bV)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a9z(0, "Your Win Count is now " + __fx.wins.count, 3, aAR, aG.am, aG.g6, -1, !0);
		z.fo[aAR] && (e1.eT(aAR, 2), c.fl < 100 ? a9z(0, L(142, [z.jA[aAR]]), 3, aAR, aG.am, aG.g6, -1, !0) : a9z(0, L(149, [z.jA[aAR]]), 3, aAR, aG.am, aG.g6, -1, !0))
	}, this.aAS = function(g5) {
		var bF, aAU, aAT = "(" + a8.jQ(g5 >> 2) + ", " + a8.jR(g5 >> 2) + ")",
			aA3 = !1,
			player = 0;
		aA.aB(g5) ? aA.jL(g5) ? aAT = L(150, [aAT]) : (player = aA.kP(g5), c.bV && !1 === __fx.hoveringTooltip.active && (c.ba = player), bF = L(151, [bA.fV.g0(z.a18[player], bA.fu.fv(0, 10), 150)]) + "   ", bF = (bF += L(152, [bA.bB.aX(z.gA[
				player])]) + "   ") + L(153, [bA.bB.aX(z.fo[player])]) + "   ", c.gQ && (aAU = jG.a12[jG.jH[jG.jJ[player]]], bF += L(154) + ": " + aAU + "   "), bA.gc.mN(player) && (bF += L(155) + ": " + gw.rx[gw.gx[player]] + "   "), aAT =
			bF = (bF += L(156, [player]) + "   ") + L(157, [aAT]), aA3 = !0) : aAT = aA.vj(g5) ? L(158, [aAT]) + "   #" + aA.kN(g5) : L(159, [aAT]), bT.eA = !0, aAI(55, 0), a9z(220, aAT, 55, player, aG.am, aG.g6, -1, aA3, void 0, void 0, !0)
	}, this.aAV = function(aAW) {
		var c6 = t.u,
			player = c6.uZ[aAW] >> 3,
			bF = (bT.eA = !0, aAI(55, 0), L(160, [z.jA[player]]) + "   ");
		a9z(220, bF += L(152, [bA.bB.aX(c6.oJ[aAW])]), 55, player, aG.am, aG.g6, -1, !0)
	}, this.aAX = function(em, pP, a7E) {
		em === c.ba ? a9z(175, " " + L(161, [z.jA[pP]]) + ": ", 1001, pP, aA0(200, 255, 210), aG.g6, -1, !0, a7E) : this.aAY(em, a7E)
	}, this.aAY = function(em, a7E) {
		aAI(1e3, 0), a9z(175, z.jA[em] + ": ", 1e3, em, aG.am, "rgba(5,60,25,0.9)", -1, !0, a7E)
	}, this.aAb = function() {
		var aZ;
		c.a17 ? (aZ = L(162), e1.aAc(L(163), 2, 1, 12), a9z(0, aZ, 40, 0, "rgb(10,220,10)", aG.g6, -1, !1)) : (aZ = L(164), e1.aAc(L(165), 2, 0, 16), a9z(0, aZ, 41, 0, aG.am, aG.g6, -1, !1))
	}, this.f = function() {
		var bD = z.jA,
			ca = c.data;
		a9z(300, bD[0] + " [" + c.aAd.m(ca.elo[0]) + "] vs " + bD[1] + " [" + c.aAd.m(ca.elo[1]) + "]", 65, 0, aG.ik, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAe = function(aZ) {
		a9z(350, aZ, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.uD = function(tp) {
		a9z(0, L(tp ? 166 : 167), 247, 0, aG.aO, aG.g6, -1, !1)
	}, this.o = function(l, n, aAf) {
		var ca = c.data,
			bD = z.jA;
		a9z(0, bD[0] + ": " + c.aAd.m(ca.elo[0]) + " -> " + l, 66, 0, aG.am, aAf[0], -1, !1), a9z(0, bD[1] + ": " + c.aAd.m(ca.elo[1]) + " -> " + n, 66, 1, aG.am, aAf[1], -1, !1)
	}, this.aAg = function(player, id) {
		0 === id ? aAJ(50, player) ? (a9z(128, L(168, [z.jA[player]]), 52, player, aA0(180, 255, 180), aG.g6, -1, !0), e4.a6j(player, 2, 255)) : a9z(384, L(169, [z.jA[player]]), 51, player, aA0(210, 210, 255), aG.g6, -1, !0) : aAJ(51, player) ? (
			a9z(128, L(170, [z.jA[player]]), 52, player, aG.am, "rgba(60,120,10,0.9)", -1, !0), e4.a6j(player, 2, 255)) : (a9z(384, L(171, [z.jA[player]]), 50, player, aG.am, "rgba(90,90,90,0.9)", -1, !0), e4.a6j(player, 2, 96))
	}, this.aAh = function(jI, target) {
		var color = aA0(210, 255, 210);
		1 < jI.length ? a9z(230, L(172, [jI.length, z.jA[target]]), 66, target, color, aG.g6, -1, !0) : a9z(230, L(173, [z.jA[jI[0]], z.jA[target]]), 66, jI[0], color, aG.g6, target, !0)
	}, this.aAi = function(player, target) {
		a9z(230, L(174, [z.jA[player], z.jA[target]]), 66, player, aG.am, "rgba(75,65,5,0.9)", target, !0)
	}, this.j5 = function(id, bD) {
		aAI(id, bD)
	}, this.uH = function(id, player) {
		aAJ(id, void 0 === player ? c.iC : player)
	}, this.j3 = function(id) {
		for (var b0 = a9n.length - 1; 0 <= b0; b0--)
			if (a9n[b0].id === id) return a9n[b0];
		return null
	}, this.aAk = function(a6b, aAl, player) {
		2 !== z.sr[c.ba] && a9z(200, 1 === a6b ? L(175, [z.jA[player]]) : L(176, [bA.bB.aX(a6b), z.jA[player]]), 30, player, "rgb(190,255,190)", aG.g6, -1, !0)
	}, this.aAm = function(a6b, player) {
		2 !== z.sr[c.ba] && (aAI(31, 0), a6b = " (" + bA.bB.aX(a6b) + ") 💸", a9z(150, a6b = bA.gc.mN(player) ? L(177) + a6b : L(178, [z.jA[player]]) + a6b, 31, player, aG.ik, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a1c = function(dJ) {
		for (var dI = bT.bU(), b0 = 2; 0 <= b0; b0--) 0 < a9r.iZ[b0] && (dJ || a9r.dI[b0] < dI - 220) && this.aAp(b0)
	}, this.aAp = function(id) {
		var bF, az = a9r.iZ[id],
			player = a9r.jI[id];
		a9r.iZ[id] = 0, 1 === az ? (0 === id ? bF = L(185, [z.jA[player], z.jA[a9r.a9v[0]]]) : 1 === id ? bF = L(186, [z.jA[player]]) : 2 === id ? bF = L(187, [z.jA[player]]) : 3 === id && (bF = L(188, [z.jA[player]])), aAI(7, 0), a9z(a9r.a2A[
			id], bF, 7, a9r.a9v[id], aG.am, aG.g6, -1, !0)) : (bF = L(0 === id ? 189 : 1 === id ? 190 : 191, [az]), aAI(7, 0), a9z(a9r.a2A[id], bF, 7, player, aG.am, aG.g6, -1, !1))
	}, this.aAL = function(id, vn, a0N) {
		var dI = bT.bU(),
			az = a9r.iZ[id] + 1;
		a9r.iZ[id]++, a9r.jI[id] = vn, a9r.a9v[id] = a0N, 1 === az && (a9r.dI[id] = dI), (1 === az && (c.gO < 32 || 2 === c.dr) || 1 < az && (a9r.dI[id] < dI - 140 || 2 === c.dr)) && this.aAp(id)
	}, this.bS = function() {
		a2L.bS();
		for (var i = (i = a9n.length - a9s) <= 1 ? 1 : i * i, b0 = a9n.length - 1; 0 <= b0; b0--) 0 < a9n[b0].db && (a9n[b0].db -= i, a9n[b0].db <= 0) && (bT.eA = !0, a9n.splice(b0, 1));
		! function() {
			var bD, b0;
			if (128 !== a9t && !(++a9t < 128))
				for (bD = 5, b0 = bc.bd - 1; 0 <= b0; b0--) 1 === z.sr[bc.gb[b0]] && 0 < bD-- && a9z(240, L(188, [z.jA[bc.gb[b0]]]), 1, bc.gb[b0], aG.ik, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a1c(!1)
	}, this.gl = function() {
		for (var a79, fX = u2(), b0 = a9n.length - 1; 0 <= b0; b0--) a79 = fX - (b0 + 1) * dO, 50 === a9n[b0].id ? (dZ.drawImage(a9n[b0].canvas, eE.c1 - a9n[b0].c1 - a9q - a9o, a79), dZ.drawImage(a9u, eE.c1 - a9q - a9o, a79)) : dZ.drawImage(a9n[
			b0].canvas, eE.c1 - a9n[b0].c1 - a9o, a79)
	}
}

function a35() {
	var aAr, aAs, aAt;
	this.b = function() {
		aAr =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aAs =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aAt = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var xc = ["K ", " Y", "E ", " Z", " z", " s", "S "], aAu = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], b0 = aAr.length - 1; 0 <= b0; b0--)
			for (var bE = xc.length - 1; 0 <= bE; bE--) aAr[b0] = aAr[b0].replace(xc[bE], aAu[bE]);
		if (__fx.settings.realisticNames) aAr = realisticNames;
	}, this.aAv = function() {
		var az = c.fl,
			jA = z.jA,
			a18 = z.a18,
			playerNamesData = c.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < az)
			for (var b0 = 0; b0 < az; b0++) jA[b0] = a18[b0] = "Player " + hL.s9(1e3);
		else
			for (b0 = 0; b0 < az; b0++) jA[b0] = a18[b0] = playerNamesData[b0]
	}, this.ck = function() {
		if (9 === c.d) {
			for (var ij = hL.random(), aB1 = aAt, aB2 = aAs, gx = gw.gx, az = aB1.length, c6 = c.data.teamPlayerCount[7], jA = z.jA, a18 = z.a18, b0 = c6 - 1; b0 >= c.fl; b0--) jA[b0] = a18[b0] = aB1[(b0 + ij) % az];
			for (az = aB2.length - 1, b0 = c6; b0 < c.iC; b0++) jA[b0] = a18[b0] = aB2[gx[b0] ? az : b0 % az]
		} else(2 === c.data.playerNamesType ? function() {
			for (var az = c.iC, jA = z.jA, a18 = z.a18, playerNamesData = c.data.playerNamesData, b0 = c.fl; b0 < az; b0++) jA[b0] = a18[b0] = playerNamesData[b0]
		} : 1 === c.data.playerNamesType ? function() {
			for (var jA = z.jA, a18 = z.a18, b0 = c.fl; b0 < c.iC; b0++) jA[b0] = a18[b0] = "Bot " + hL.s9(1e3)
		} : function() {
			for (var aB3 = aAr, az = aB3.length, ij = hL.random(), jA = z.jA, a18 = z.a18, b0 = c.fl; b0 < c.iC; b0++) jA[b0] = a18[b0] = aB3[(b0 + ij) % az]
		})()
	}
}

function a3h() {
	this.c1 = 0, this.dO = 0, this.eF = 0, this.eH = 0, this.aB4 = 0, this.aB5 = 0, this.eG = 0, this.eI = 0;
	var aB7 = this.aB6 = 0;
	this.aB8 = 0, this.aB9 = 0, this.aBA = 0, this.aBB = 0, this.cE = 0, this.fc = null, this.mF = !1, this.aBC = -1, this.aBD = !1, this.aBE = [0, 0], this.dT = function() {
		this.fc = [L(192), L(30, 0, "Balance"), L(29, 0, "Interest"), L(193)]
	}, this.b = function() {
		this.mF = !1, this.aBC = -1, this.aBD = !1, this.resize()
	}, this.resize = function() {
		this.c1 = eE.c1 < 1.369 * eE.dO ? eE.c1 : 1.369 * eE.dO;
		var ca = dY.dc.fs() && eE.c1 < eE.dO ? 1 : dY.dc.fs() ? .8 : eE.c1 < eE.dO ? .65 : .59;
		this.c1 = Math.floor(ca * this.c1), this.c1 -= dY.dc.fs() && eE.c1 < eE.dO ? 2 * di.gap + 2 : 0, this.dO = Math.floor(this.c1 / 1.369), this.aBB = Math.floor(this.dO / 150), this.aBB = Math.max(this.aBB, 1.5), this.eF = Math.floor(1 +
			.02 * this.c1), this.eH = Math.floor(1 + .04 * this.c1), this.eG = this.eH, aB7 = Math.floor(.75 * this.eG), this.eI = Math.floor(1 + .075 * this.c1), this.aB8 = Math.floor(1 + .1125 * this.c1), this.aB9 = Math.floor(this.c1 * (dY
			.dc.fs() ? .03 : .029)), this.aB9 = Math.max(this.aB9, 4), this.aBA = Math.floor(.035 * this.c1), this.aBA = Math.max(this.aBA, 4), this.aB6 = this.dO - 2 * this.eG - this.eI - this.aB8, this.mF && this.aBF()
	}, this.io = function(ip, iq) {
		var a79, a78;
		return !!this.mF && (a78 = ip, a79 = iq, ip -= p.eL(eE.c1 - this.c1, 2), iq -= p.eL(eE.dO - this.dO, 2), ip < 0 || iq < 0 || ip >= this.c1 || iq >= this.dO || ip >= this.c1 - this.aB8 && iq < this.aB8 ? -1 !== dx.io(a78, a79) || dy.io(
			a78, a79) || this.iK() : iq < this.aB8 || (iq < this.dO - this.eI ? (this.aBD = !0, this.aBC = (ip - 2 * this.eF - this.aB4) / this.aB5, 3 !== this.cE && (bT.eA = !0)) : (a78 = (a78 = Math.floor(ip / (this.c1 / this.fc
			.length))) < 0 ? 0 : a78 >= this.fc.length ? this.fc.length - 1 : a78) !== this.cE && (this.cE = a78, this.aBF(), bT.eA = !0)), !0)
	}, this.is = function(ip, iq) {
		return this.aBE[0] = ip, this.aBE[1] = iq, !(!this.mF || !this.aBD || (ip -= p.eL(eE.c1 - this.c1, 2), iq = this.aBC, this.aBC = (ip - 2 * this.eF - this.aB4) / this.aB5, (0 <= this.aBC && this.aBC <= 1 || 0 <= iq && iq <= 1) && (bT
			.eA = !0), 0))
	}, this.a7g = function() {
		this.aBD && (this.aBD = !1)
	}, this.m6 = function() {
		this.mF ? this.iK() : this.show()
	}, this.show = function() {
		gq.me < 2 || (this.mF = !0, this.aBF())
	}, this.iK = function() {
		this.mF = !1, this.aBC = -1, bT.eA = !0
	}, this.aBF = function() {
		this.cE < 2 ? this.aB4 = e1.measureText(bA.bB.aX(gq.max[this.cE]), bA.fu.fv(0, this.aB9)) : 2 === this.cE && (this.aB4 = e1.measureText(bA.bB.gE(6, 2), bA.fu.fv(0, this.aB9))), this.aB5 = this.c1 - 2 * this.eF - this.aB4 - this.eH
	}, this.tt = function() {
		this.mF && this.aBF()
	}, this.gl = function() {
		this.mF && this.yH()
	}, this.yH = function() {
		var fW = p.eL(eE.c1 - this.c1, 2),
			fX = p.eL(eE.dO - this.dO, 2);
		dZ.setTransform(1, 0, 0, 1, fW, fX), dZ.fillStyle = aG.g6, dZ.fillRect(0, this.aB8, this.c1, this.dO - this.aB8), this.aBG(), this.aBH(), dZ.strokeRect(0, 0, this.c1, this.dO), bA.fu.textAlign(dZ, 2), dZ.font = bA.fu.fv(0, this.aB9),
			0 === this.cE ? this.aBI(gq.aBJ, fW, fX) : 1 === this.cE ? this.aBI(gq.t5, fW, fX) : 2 === this.cE ? this.aBK(fW, fX) : 3 === this.cE && (this.aBL(fW, fX), this.aBM(fW, fX)), dx.mO(Math.floor(fW + this.c1 - .725 * this.aB8), Math
				.floor(fX + .275 * this.aB8), Math.floor(.45 * this.aB8)), dZ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aBG = function() {
		var b0, g8;
		for (dZ.lineWidth = this.aBB, bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 1), dZ.strokeStyle = aG.am, dZ.font = bA.fu.fv(1, this.aBA), g8 = this.c1 / this.fc.length, dZ.fillStyle = aG.vF, dZ.fillRect(this.cE * g8, this.dO - this.eI,
				g8, this.eI), dZ.fillStyle = aG.am, dZ.fillRect(0, this.dO - this.eI - .5 * this.aBB, this.c1, this.aBB), b0 = 1; b0 <= 3; b0++) dZ.fillRect(b0 * g8, this.dO - this.eI, this.aBB, this.eI);
		for (b0 = this.fc.length - 1; 0 <= b0; b0--) dZ.fillText(bA.fV.g0(this.fc[b0], 0, .9 * g8), (b0 + .5) * g8, this.dO - .46 * this.eI)
	}, this.aBH = function() {
		dZ.fillStyle = aG.aBN, dZ.fillRect(0, 0, this.c1, this.aB8), dZ.fillStyle = aG.am, dZ.fillRect(0, this.aB8 - .5 * this.aBB, this.c1, this.aBB), dZ.font = bA.fu.fv(1, .39 * this.aB8), dZ.fillText(bA.fV.g0(L(194), 0, .8 * this.c1), Math
			.floor(this.c1 / 2), Math.floor(.55 * this.aB8))
	}, this.aBI = function(bq, fW, fX) {
		var c6 = gq.max[this.cE],
			a6n = (dZ.setTransform(1, 0, 0, 1, fW + 2 * this.eF + this.aB4, fX + this.eG + this.aB8), dZ.lineWidth = 2, this.aB6 / Math.sqrt(c6));
		dZ.beginPath(), dZ.moveTo(this.aB5, this.aB6 - a6n * Math.sqrt(bq[gq.me - 1]));
		for (var b0 = gq.me - 2; 0 <= b0; b0--) dZ.lineTo(b0 * this.aB5 / (gq.me - 1), this.aB6 - a6n * Math.sqrt(bq[b0]));
		dZ.stroke();
		fW = this.mO(bq, a6n, .5);
		fW < .95 && dZ.fillText(bA.bB.aX(c6), -this.eF, 0), .05 < Math.abs(fW - .5) && dZ.fillText(bA.bB.aX(Math.floor(c6 / 4)), -this.eF, Math.floor(this.aB6 / 2)), .05 < fW && dZ.fillText("0", -this.eF, this.aB6)
	}, this.aBK = function(fW, fX) {
		dZ.setTransform(1, 0, 0, 1, fW + 2 * this.eF + this.aB4, fX + this.eG + this.aB8), dZ.lineWidth = 2;
		var a6n = this.aB6 / Math.max(gq.max[this.cE], 1);
		dZ.beginPath(), dZ.moveTo(this.aB5, this.aB6 - a6n * gq.ge[gq.me - 1]);
		for (var b0 = gq.me - 2; 0 <= b0; b0--) dZ.lineTo(b0 * this.aB5 / (gq.me - 1), this.aB6 - a6n * gq.ge[b0]);
		dZ.stroke();
		fW = this.mO(gq.ge, a6n, 1), fX = gq.max[this.cE] / 100;
		fW < .95 && dZ.fillText(bA.bB.gE(fX, 2), -this.eF, 0), .05 < Math.abs(fW - .5) && dZ.fillText(bA.bB.gE(fX / 2, 2), -this.eF, Math.floor(this.aB6 / 2)), .05 < fW && dZ.fillText(bA.bB.gE(0, 2), -this.eF, this.aB6)
	}, this.aBL = function(fW, fX) {
		dZ.setTransform(1, 0, 0, 1, fW + .34 * this.c1, fX + 2 * aB7 + this.aB8), bA.fu.textAlign(dZ, 2);
		for (var aBO = this.dO - 4 * aB7 - this.eI - this.aB8, bq = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], b0 = 9; 0 <= b0; b0--) dZ.fillText(bA.fV.g0(gq.aBP[bq[b0]], 0, .31 * this.c1), 0, b0 * aBO / 9);
		var c8 = gq.gr;
		for (dZ.setTransform(1, 0, 0, 1, fW + .39 * this.c1, fX + 2 * aB7 + this.aB8), bA.fu.textAlign(dZ, 0), dZ.fillText(bA.bB.gE(100 * c8[0] / (1024 * Math.max(c8[1], 1)), 1), 0, 0), b0 = 8; 1 <= b0; b0--) dZ.fillText(c8[bq[b0]].toString(), 0,
			b0 * aBO / 9);
		dZ.fillText(bA.bB.gE(100 * (1 - z.fo[c.ba] / c8[7]), 0), 0, aBO)
	}, this.aBM = function(fW, fX) {
		dZ.setTransform(1, 0, 0, 1, fW + .79 * this.c1, fX + 2 * aB7 + this.aB8), bA.fu.textAlign(dZ, 2);
		var b0, aBO = this.dO - 4 * aB7 - this.eI - this.aB8;
		for (dZ.fillStyle = aG.aBQ, b0 = 2; 0 <= b0; b0--) dZ.fillText(bA.fV.g0(gq.aBP[b0 + 8], 0, .31 * this.c1), 0, b0 * aBO / 9);
		dZ.fillText(bA.fV.g0(gq.aBP[18], 0, .31 * this.c1), 0, 3 * aBO / 9), dZ.fillStyle = aG.aBR, dZ.fillText(bA.fV.g0(gq.aBP[11], 0, .31 * this.c1), 0, 4 * aBO / 9), dZ.fillStyle = aG.nl, dZ.fillText(bA.fV.g0(gq.aBP[13], 0, .31 * this.c1), 0,
				5 * aBO / 9), dZ.fillText(bA.fV.g0(gq.aBP[15], 0, .31 * this.c1), 0, 6 * aBO / 9), dZ.fillText(bA.fV.g0(gq.aBP[16], 0, .31 * this.c1), 0, 7 * aBO / 9), dZ.fillText(bA.fV.g0(gq.aBP[12], 0, .31 * this.c1), 0, 8 * aBO / 9), dZ
			.fillStyle = aG.nk, dZ.fillText(bA.fV.g0(gq.aBP[17], 0, .31 * this.c1), 0, aBO), dZ.fillStyle = aG.aBQ;
		var c8 = gq.gr,
			cB = c8[8] + c8[9] + c8[10] + c8[18],
			cB = bA.bB.aX(cB),
			aBS = dZ.measureText(cB).width,
			fW = (dZ.setTransform(1, 0, 0, 1, fW + .83 * this.c1 + aBS, fX + 2 * aB7 + this.aB8), dZ.fillText(bA.bB.aX(c8[8]), 0, 0), dZ.fillText(bA.bB.aX(c8[9]), 0, aBO / 9), dZ.fillText(bA.bB.aX(c8[10]), 0, 2 * aBO / 9), dZ.fillText(bA.bB.aX(
				c8[18]), 0, 3 * aBO / 9), dZ.fillStyle = aG.aBR, dZ.fillText(cB, 0, 4 * aBO / 9), dZ.fillStyle = aG.nl, dZ.fillText(bA.bB.aX(c8[13]), 0, 5 * aBO / 9), dZ.fillText(bA.bB.aX(c8[15]), 0, 6 * aBO / 9), dZ.fillText(bA.bB.aX(c8[
				16]), 0, 7 * aBO / 9), dZ.fillText(bA.bB.aX(c8[12]), 0, 8 * aBO / 9), c8[12] + c8[13] + c8[15] + c8[16]);
		dZ.fillStyle = aG.nk, dZ.fillText(bA.bB.aX(fW), 0, aBO), dZ.fillStyle = aG.am
	}, this.mO = function(bq, a6n, aBU) {
		var b0, iG, lU;
		return this.aBC < 0 || 1 < this.aBC ? .25 : (b0 = this.aBC * (gq.me - 1), lU = bq[iG = Math.floor(b0)], lU += (b0 - iG) * (bq[iG < gq.me - 1 ? iG + 1 : iG] - lU), dZ.strokeStyle = aG.aBV, .04 < this.aBC && this.aBW(0, this.aB6 - a6n *
				Math.pow(lU, aBU), b0 * this.aB5 / (gq.me - 1), this.aB6 - a6n * Math.pow(lU, aBU)), .04 < lU / gq.max[this.cE] && this.aBW(b0 * this.aB5 / (gq.me - 1), this.aB6, b0 * this.aB5 / (gq.me - 1), this.aB6 - a6n * Math.pow(lU,
				aBU)), dZ.fillStyle = aG.aBX, dZ.beginPath(), dZ.arc(b0 * this.aB5 / (gq.me - 1), this.aB6 - a6n * Math.pow(lU, aBU), Math.max(2, .014 * this.dO), 0, 2 * Math.PI), dZ.fill(), bq = this.aBC * bT.gg, bq = 0 === z.bZ[c.ba] ? Math
			.floor(bq * gq.aBY) : Math.floor(bq * bT.bU()), dZ.fillStyle = aG.am, dZ.fillText(1 === aBU ? bA.bB.gE(lU / 100, 2) : bA.bB.aX(Math.floor(lU)), -this.eF, this.aB6 - a6n * Math.pow(lU, aBU)), bA.fu.textAlign(dZ, 1), dZ.fillText(du
				.gF(bq), b0 * this.aB5 / (gq.me - 1), this.aB6 + this.aB9 - (dY.dc.fs() ? 2 : 0) - this.aBB), bA.fu.textAlign(dZ, 2), a6n * Math.pow(lU, aBU) / this.aB6)
	}, this.aBW = function(yS, u1, a0J, a0K) {
		dZ.beginPath(), dZ.moveTo(yS, u1), dZ.lineTo(a0J, a0K), dZ.stroke()
	}
}

function a30() {
	this.vl = new aBZ
}

function a3D() {
	var aBa, aBb, kM, a5d;
	this.b = function() {
		var b0, fW, fX, aBc, aBd, c1, dO, fV, qQ, a5Y, c8, j6, uj, bE, aBh;
		if (function() {
				if (kM = !0, a5d = "rgb(" + cd.a8E[0] + "," + cd.a8E[1] + "," + cd.a8E[2] + ")", cd.aBg(cd.cf)) return 1;
				return kM = !1, 0
			}()) aBb = null;
		else {
			for (aBa = p.eL(96, 4), aBd = 1 === cd.cf ? (aBc = 0, 160) : (aBc = 128, 32), a5d = "rgb(" + aBc + "," + aBc + "," + aBc + ")", aBb = new Array(4), b0 = 3; 0 <= b0; b0--) {
				if (aBb[b0] = document.createElement("canvas"), c1 = b0 % 2 == 0 ? cd.fR : aBa, dO = b0 % 2 == 0 ? aBa : cd.fS + 2 * aBa, aBb[b0].width = c1, aBb[b0].height = dO, a5Y = (qQ = (fV = aBb[b0].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, c1, dO)).data, b0 % 2 == 0)
					for (fX = aBa - 1; 0 <= fX; fX--)
						for (c8 = aBd + Math.floor((fX + 1) * (aBc - aBd) / (aBa + 1)), fW = c1 - 1; 0 <= fW; fW--) a5Y[j6 = 4 * ((0 === b0 ? aBa - fX - 1 : fX) * c1 + fW)] = c8, a5Y[j6 + 1] = c8, a5Y[j6 + 2] = c8, a5Y[j6 + 3] = 255;
				else {
					for (fW = aBa - 1; 0 <= fW; fW--)
						for (c8 = aBd + Math.floor((fW + 1) * (aBc - aBd) / (aBa + 1)), fX = dO - 1 - aBa; aBa <= fX; fX--) a5Y[j6 = 4 * (fX * c1 + (3 === b0 ? aBa - fW - 1 : fW))] = c8, a5Y[j6 + 1] = c8, a5Y[j6 + 2] = c8, a5Y[j6 + 3] = 255;
					for (bE = 1; 0 <= bE; bE--)
						for (fW = aBa - 1; 0 <= fW; fW--)
							for (fX = aBa - 1; 0 <= fX; fX--) uj = (Math.pow(fW * fW + fX * fX, .5) + 1) / (aBa + 1), c8 = aBd + Math.floor((1 < uj ? 1 : uj) * (aBc - aBd)), a5Y[j6 = 4 * ((0 === bE ? aBa - fX - 1 : fX + bE * (dO - aBa)) * c1 + (
								1 === b0 ? fW : aBa - fW - 1))] = c8, a5Y[j6 + 1] = c8, a5Y[j6 + 2] = c8, a5Y[j6 + 3] = 255
				}
				fV.putImageData(qQ, 0, 0)
			}
			aBh = aBd, cd.nP.fillStyle = "rgb(" + aBh + "," + aBh + "," + aBh + ")", cd.nP.fillRect(0, 0, cd.fR, 1), cd.nP.fillRect(0, cd.fS - 1, cd.fR, 1), cd.nP.fillRect(0, 0, 1, cd.fS), cd.nP.fillRect(cd.fR - 1, 0, 1, cd.fS)
		}
	}, this.a4T = function() {
		var bE = kM ? 0 : -aBa;
		a5L(bE, bE, cd.fR - 2 * bE, cd.fS - 2 * bE, a2S.aBi, a2S.aBj, a2S.aBk, a2S.aBl) || (dZ.fillStyle = a5d, dZ.fillRect(0, 0, eE.c1, eE.dO))
	}, this.gl = function() {
		kM || (a5K(0, -aBa, cd.fR, aBa, a2S.aBi, a2S.aBj, a2S.aBk, a2S.aBl) && dZ.drawImage(aBb[0], a2S.aBm, a2S.aBn - aBa), a5K(cd.fR, -aBa, aBa, cd.fS + 2 * aBa, a2S.aBi, a2S.aBj, a2S.aBk, a2S.aBl) && dZ.drawImage(aBb[1], a2S.aBm + cd.fR, a2S
			.aBn - aBa), a5K(0, cd.fS, cd.fR, aBa, a2S.aBi, a2S.aBj, a2S.aBk, a2S.aBl) && dZ.drawImage(aBb[2], a2S.aBm, a2S.aBn + cd.fS), a5K(-aBa, -aBa, aBa, cd.fS + 2 * aBa, a2S.aBi, a2S.aBj, a2S.aBk, a2S.aBl) && dZ.drawImage(aBb[3],
			a2S.aBm - aBa, a2S.aBn - aBa))
	}
}

function a3n() {
	var nI = [];
	this.aBo = function(player, tF, a6b, aBp) {
		player === c.ba || tF === c.ba || !aBp && bA.gc.mN(player) || bA.gc.mN(tF) || this.j9(z.jA[player] + " supported " + z.jA[tF] + " with " + bA.bB.aX(a6b) + " ressource" + (1 === a6b ? "." : "s."))
	}, this.j9 = function(bF, a7E) {
		bF = {
			db: du.gG(),
			bF: bF,
			a7E: a7E
		};
		nI.push(bF), 30 === cT.cU && cT.eu().j9(bF)
	}, this.clear = function() {
		nI = [];
		var gi = cT.aBq(30);
		gi && gi.clear()
	}, this.aBr = function() {
		return nI
	}
}

function aBs(data) {
	var iP, aBt;
	this.show = function() {
		data.aBu && a2O.aD6("account", data.aY), iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), aBt.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(data.username, [new hs("⬅️ " + L(33), function() {
		a2O.clear(), cT.hz()
	}), new hs(data.aBu ? "🔄 " + L(195) : L(196), function() {
		cT.iD(8, data.aBu ? cT.eu().p6 : void 0, new mm(25, {
			d2: 0,
			aY: data.aY,
			aBv: data.aBv
		}))
	}, 0, 0, 1)]), aBt = new hu(iP.hv, function() {
		var i2 = [];
		i2.push(function() {
				var i6 = new i7,
					aa = (i6.i8(L(254)), data.aCb);
				aa < 1 ? (i6.rO(L(255)), 0 === data.aCc ? i6.rK(L(256)) : 1 === data.aCc ? i6.rK(L(257)) : 2 === data.aCc ? i6.rK(L(258)) : 3 === data.aCc ? i6.rK(L(259)) : 4 === data.aCc ? i6.rK(L(260)) : 5 === data.aCc ? i6.rK(L(261)) :
					6 === data.aCc ? i6.rK(L(262)) : i6.rK(L(263))) : (i6.rO(L(264)), aa = aa < 2 ? L(265) : aa < 61 ? 2 === aa ? L(266) : L(267, [aa - 1]) : aa < 84 ? 61 === aa ? L(268) : L(269, [aa - 60]) : aa < 255 ? 84 === aa ? L(
					270) : L(271, [aa - 83]) : L(272), i6.rK(aa));
				{
					var rL, aCJ;
					i6.iE(new aCd), data.aBu && (rL = i6.rK(), i6.iE(new a5M([new hs(cy.tc.xF(data.aY) ? L(273) : L(274), function(iG) {
						return cy.tc.aCe(data.aY) ? (iG.textContent = L(273), aCJ(1)) : (iG.textContent = L(274), aCJ(0)), !0
					}).button])), aCJ = function(c8) {
						rL.textContent = c8 ? L(275) : ""
					}, cy.tc.xF(data.aY) && aCJ(1), i6.iE(new aCd))
				}
				var aCI = new iF({
					value: data.username,
					cE: -1
				});
				aCI.iG.readOnly = !0, i6.iE(aCI), i6.iE(new a5M([new hs(L(220), function(iG) {
					return bA.fu.aCN(aCI.iG), bA.fu.z7(iG), !0
				}).button])), data.aBu ? (i6.iE(new aCd), i6.rO("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", i6.iE(new a5M([new hs(L(277),
					function(iG) {
						return bW.eh.dF({
							d2: 3,
							aY: data.aY,
							value: 0
						}), bA.fu.z7(iG), !0
					}, aG.a1D).button])), i6.iE(new a5M([new hs(L(278), function(iG) {
					return bW.eh.dF({
						d2: 3,
						aY: data.aY,
						value: 1
					}), bA.fu.z7(iG), !0
				}, aG.a1D).button])), i6.iE(new a5M([new hs("Cheater", function(iG) {
					return bW.eh.dF({
						d2: 3,
						aY: data.aY,
						value: 2
					}), bA.fu.z7(iG), !0
				}, aG.a1D).button])), i6.iE(new a5M([new hs("False Reporter", function(iG) {
					return bW.eh.dF({
						d2: 3,
						aY: data.aY,
						value: 3
					}), bA.fu.z7(iG), !0
				}, aG.a1D).button]))) : i6.rK(L(276));
				return i6
			}()),
			function(i2) {
				var i6, rL, aCg, aCh, aCK, aCM, aCL;
				data.aBu || ((i6 = new i7).i8(L(279)), (rL = i6.rK(data.aCf.length + " / 160")).style.textAlign = "center", aCg = !0, (aCh = new iH(0, 1, function(iG) {
					iG = iG.target.value.length;
					rL.textContent = iG + " / 160", 160 < iG ? aCg && (aCg = !1, aCM.n5(1)) : aCg || (aCg = !0, aCM.n5(0))
				})).iG.rows = 6, aCh.iG.style.fontSize = "1em", aCh.iI(data.aCf), i6.iE(aCh), 0 !== data.aCi ? (aCM = new hs(L(280), function() {
					if (!aCg) return !0;
					cT.iD(8, cT.eu().p6, new mm(29, {
						d2: 1,
						bF: aCh.i1().substring(0, 160)
					}))
				}, 0, 0, 1), i6.iE(new a5M([aCM.button])), i6.iE(new a5M([new hs(1 === data.aCi ? L(281) : L(282), function() {
					cT.iD(8, cT.eu().p6, new mm(29, {
						d2: 0,
						bF: ""
					}))
				}, 0, 0, 1).button])), i6.rK(1 === data.aCi ? L(283, [data.aCj - 1]) : L(284, [data.aCj - 1])), i6.rK(L(285, [data.aCk]))) : (aCK = new hs(L(286), function() {
					if (!aCh.iG.readOnly) return !0;
					cT.iD(8, cT.eu().p6, new mm(29, {
						d2: 1,
						bF: aCh.i1().substring(0, 160)
					}))
				}, 1), aCM = new hs(L(217), function(iG) {
					if (iG.textContent === L(217)) {
						if (!aCg) return !0;
						iG.textContent = L(218), aCh.iG.readOnly = !0, aCK.n5(0), aCK.button.style.color = aG.aO
					} else aCL();
					return !0
				}), i6.iE(new a5M([aCM.button])), i6.rK(L(285, [data.aCk])), aCL = function() {
					aCM.button.textContent = L(217), aCh.iG.readOnly = !1, aCK.n5(1), aCK.button.style.color = aG.am
				}, i6.iE(new a5M([aCK.button]))), i2.push(i6))
			}(i2),
			function(i2) {
				var i6;
				data.aBu && 0 !== data.aCi && ((i6 = new i7).i8(L(287)), i6.rM(data.aCf), i6.iE(new a5M([new hs(L(288, 0, "Report"), function(iG) {
					return bW.u.pD(0) && (bA.fu.z7(iG), bW.eh.dE({
						d2: 5,
						aY: data.aY
					})), !0
				}, 0, 0, 1).button])), i2.push(i6))
			}(i2), i2.push(function() {
				var i6 = new i7,
					aCD = (i6.i8(L(197)), i6.rO("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(198), L(199), L(200), L(201), L(202), L(203), L(204), L(
						205), L(206), L(207), L(208), L(209), L(210), L(211)]),
					ij = data.aCE;
				return i6.rO(L(212) + bA.bB.aCF(data.d6, .01, 2) + "<br>" + L(213) + (ij + 1) + " / " + data.aCG + "<br>" + L(214) + aCD[function(ij, d6) {
					if (ij < 10) return 0;
					if (ij < 30) return 1;
					if (ij < 60) return 2;
					if (3e4 <= (d6 = p.eL(d6, 100))) return 3;
					if (12e3 <= d6) return 4;
					if (7e3 <= d6) return 5;
					if (3e3 <= d6) return 6;
					if (1e3 <= d6) return 7;
					if (500 <= d6) return 8;
					if (200 <= d6) return 9;
					if (70 <= d6) return 10;
					if (20 <= d6) return 11;
					if (3 <= d6) return 12;
					return 13
				}(ij, data.d6)]), i6
			}()), data.aBu && i2.push(function() {
				var i6 = new i7,
					aCI = (i6.i8(L(215)), i6.rO("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new iF({
						value: cy.cz.data[147].value,
						cE: -1
					}, 1, void 0, function(iG) {
						cy.ep.eq(147, aCJ(iG.target.value))
					})),
					aCK = (i6.iE(aCI), new hs(L(216), function(iG) {
						return aCI.iG.readOnly && bW.u.pD(0) && (bA.fu.z7(iG), aCL(), bW.eh.dF({
							d2: 0,
							aY: data.aY,
							value: parseInt(cy.cz.data[147].value, 10)
						})), !0
					}, 1)),
					aCM = new hs(L(217), function(iG) {
						return iG.textContent === L(217) ? (iG.textContent = L(218), aCI.iG.readOnly = !0, aCK.n5(0), aCK.button.style.color = aG.aO, cy.ep.eq(147, aCI.iG.value), aCJ(cy.cz.data[147].value)) : aCL(), !0
					}),
					rL = (i6.iE(new a5M([aCM.button])), i6.rK()),
					aCJ = function(c8) {
						rL.innerHTML = cT.u.a5A(c8, cy.cz.data[105].value, data.aY)
					},
					aCL = function() {
						aCM.button.textContent = L(217), aCI.iG.readOnly = !1, aCK.n5(1), aCK.button.style.color = aG.am
					};
				return aCJ(cy.cz.data[147].value), i6.iE(new a5M([aCK.button])), i6
			}());
		i2.push(function() {
			var i6 = new i7,
				aCI = (i6.i8(L(219)), new iF({
					value: data.aY,
					cE: -1
				}));
			return aCI.iG.readOnly = !0, i6.iE(aCI), i6.iE(new a5M([new hs(L(220), function(iG) {
				return bA.fu.aCN(aCI.iG), bA.fu.z7(iG), !0
			}).button])), i6
		}()), data.aBu || (i2.push(function() {
			var i6 = new i7,
				aCO = (i6.i8(L(221)), new iF(cy.cz.data[106]));
			return aCO.iG.readOnly = !0, aCO.iG.type = "password", i6.iE(aCO), i6.iE(new a5M([new hs(L(222), function(iG) {
				return iG.textContent === L(222) ? (iG.textContent = L(223), aCO.iG.type = "text") : (iG.textContent = L(222), aCO.iG.type = "password"), !0
			}).button, new hs(L(220), function(iG) {
				return bA.fu.aCN(aCO.iG), bA.fu.z7(iG), !0
			}).button])), i6.iE(new a5M([new hs(L(224), function() {
				cT.iD(8, cT.eu().p6, new mm(15))
			}).button])), i6.i8(L(225), "0.8em"), i6.rK(L(226)), i6.rK(L(227)), i6.rK(L(228)), i6
		}()), i2.push(function() {
			var i6 = new i7;
			return i6.i8(L(229)), i6.iE(new a5M([new hs(L(230), function() {
				cT.iD(6, cT.eu().p6)
			}).button])), i6.iE(new a5M([new hs(L(231), function() {
				cy.ep.eq(105, ""), cT.iD(8, cT.eu().p6, new mm(18))
			}).button])), i6.iE(new a5M([new hs(L(232) + cy.cz.data[105].value, function() {
				cT.iD(4, 0, new js(L(233), L(234), !0, [new hs("⬅️ " + L(33), function() {
					cT.iD(7, cT.aBq(7).p6)
				})]))
			}, aG.a1D).button])), i6
		}()), i2.push(function() {
			function aCQ(cE) {
				aCP[0].n5(0 === cE ? aG.n4 : aG.aA6), aCP[1].n5(0 === cE ? aG.n4 : aG.a1D), aCP[2].n5(cE === rQ.rR.length - 1 || cE < 5 ? aG.n4 : aG.a1D)
			}
			var rQ, aCP, i6 = new i7;
			i6.i8(L(239)), i6.rK(L(240)), cy.u.a4u();
			return aCP = [new hs(L(241), function() {
				var cE = Math.min(cy.cz.data[117].value, rQ.rR.length - 1);
				cE < 1 || (cE = cy.u.a4y(cE), cy.ep.eq(105, cE.aY), cy.ep.eq(106, cE.password), cT.iD(8, cT.eu().p6, new mm(18)))
			}, aG.n4, 1), new hs(L(237), function() {
				var cE = Math.min(cy.cz.data[117].value, rQ.rR.length - 1);
				if (!(cE < 1)) {
					rQ.rR[cE].remove(), rQ.rR.splice(cE, 1);
					for (var b0 = cE; b0 < rQ.rR.length; b0++) rQ.rR[b0].name = "" + b0;
					cy.u.a4x(cE), cE = cy.cz.data[117].value, rQ.rR[cE].textContent = rQ.rR[cE].textContent.replace("⚪", "🟢"), aCQ(cE)
				}
			}, aG.n4, 1), new hs(L(238), function() {
				var cE = Math.min(cy.cz.data[117].value, rQ.rR.length - 1);
				if (cE !== rQ.rR.length - 1) {
					for (var b0 = rQ.rR.length - 1; cE < b0; b0--) rQ.rR[b0].remove(), rQ.rR.splice(b0, 1), cy.u.a4x(b0);
					aCQ(cE)
				}
			}, aG.n4, 1)], rQ = new iA(cy.cz.data[117], aCQ), aCQ(0), rQ.rR[0].style.marginTop = "0.5em", i6.i9(rQ), i6.iE(new a5M([aCP[0].button])), i6.iE(new a5M([aCP[1].button])), i6.iE(new a5M([aCP[2].button])), i6
		}()));
		return i2.push(function() {
				var i6 = new i7,
					aCD = (i6.i8(L(245)), [L(246), L(247), L(248), L(249)]),
					ij = data.aCX;
				return i6.rO(L(250) + (data.a0q / 100).toFixed(2) + "<br>" + L(213) + (ij + 1) + " / " + data.aCG + "<br>" + L(214) + aCD[ij < 10 ? 0 : ij < 50 ? 1 : ij < 200 ? 2 : 3]), i6
			}()), i2.push(function() {
				var i6 = new i7;
				return i6.i8(L(242)), i6.rO(L(243) + bA.bB.aCF(data.aCU, .1, 1) + "<br>" + L(213) + (data.aCV + 1) + " / " + data.aCG + "<br>" + L(244) + data.aCW), i6
			}()),
			function(i2) {
				var i6 = new i7,
					aCl = data.aCm,
					aCp = (i6.i8(L(289)), i6.rO(L(290, [data.aCn.length ? "[" + data.aCn + "]" : "-"])), i6.rO(L(291, [bA.bB.aCF(aCl, .01, 2)])), i6.rO(L(292, [data.aCo + 1 + " / " + data.aCG])), data.aCq),
					aCr = (i6.rO(L(293, [bA.bB.aCF(aCp, .1, 1)])), data.aCs);
				i6.rO(L(294, [aCr])), i6.rO(L(295, [bA.bB.aCF(aCp / Math.max(aCr, 1), .1, 2)])), aCl = data.aCt, i6.i8(L(296), "0.8em"), i6.rO(L(290, [data.aCu.length ? "[" + data.aCu + "]" : "-"])), i6.rO(L(291, [bA.bB.aCF(aCl, .01, 2)])),
					aCp = data.aCv, i6.rO(L(293, [bA.bB.aCF(aCp, .1, 1)])), aCr = data.aCw, i6.rO(L(294, [aCr])), i6.rO(L(295, [bA.bB.aCF(aCp / Math.max(aCr, 1), .1, 2)])), i6.rO(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", i2.push(i6)
			}(i2),
			function(i2) {
				var i6 = new i7;
				i6.i8(L(297)), i6.rO(L(250) + (data.aCx / 10).toFixed(1) + "<br>" + L(214) + (data.aCy.length ? L(298, [data.aCy]) : L(299))), data.aBu && i6.iE(new a5M([new hs(L(300), function(iG) {
					return bW.u.pD(0) && (bA.fu.z7(iG), bW.eh.dE({
						d2: 4,
						aY: data.aY
					})), !0
				}, 0, 0, 1).button]));
				i6.rO("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", i2.push(i6)
			}(i2), i2.push(function() {
				var i6 = new i7;
				if (i6.i8(L(251)), i6.rO(L(252) + data.aCY + "<br>" + L(213) + (data.aCZ + 1) + " / " + data.aCG + "<br>" + L(214) + ac.a27(data.aCZ)), data.aBu) {
					var aCI = new iF({
							value: cy.cz.data[157].value,
							cE: -1
						}, 1, void 0, function(iG) {
							cy.ep.eq(157, aCJ(iG.target.value))
						}),
						aCM = (aCI.iG.style.marginTop = "0.6em", i6.iE(aCI), new hs(L(217), function(iG) {
							return iG.textContent === L(217) ? (iG.textContent = L(218), aCI.iG.readOnly = !0, aCa[0].n5(0), aCa[1].n5(0), aCa[0].button.style.color = aG.aO, aCa[1].button.style.color = aG.aO, aCJ(cy.cz.data[157]
								.value)) : aCL(), !0
						})),
						aCa = (i6.iE(new a5M([aCM.button])), [new hs("−", function(iG) {
							return aCI.iG.readOnly && bW.u.pD(0) && (bA.fu.z7(iG), aCL(), bW.eh.dF({
								d2: 2,
								aY: data.aY,
								value: p.q(parseInt(cy.cz.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new hs("+", function(iG) {
							return aCI.iG.readOnly && bW.u.pD(0) && (bA.fu.z7(iG), aCL(), bW.eh.dF({
								d2: 1,
								aY: data.aY,
								value: p.q(parseInt(cy.cz.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						rL = i6.rK(),
						aCJ = function(c8) {
							return c8 = bA.gc.tW(c8, 3, 32767), rL.textContent = L(253, [c8 - 1, c8, cy.cz.data[105].value]), c8
						};
					i6.iE(new a5M([aCa[0].button, aCa[1].button]));
					for (var b0 = 0; b0 < 2; b0++) aCa[b0].button.style.fontSize = "1.6em";
					var aCL = function() {
						aCM.button.textContent = L(217), aCI.iG.readOnly = !1, aCa[0].n5(1), aCa[1].n5(1), aCa[0].button.style.color = aG.am, aCa[1].button.style.color = aG.am
					};
					aCJ(cy.cz.data[157].value)
				}
				return i6
			}()),
			function(i2) {
				var i6, aD5;
				data.aBu && !data.aCz || (0 === dY.id || data.aBu || data.aCz) && ((i6 = new i7).i8("Patreon"), !data.aBu && data.aD0 ? i6.iE(new a5M([new hs(L(222), function() {
					bW.eh.dE({
						d2: 7,
						aY: data.aY
					}), data.aD0 = 0, cT.iD(7)
				}).button])) : data.aCz ? (i6.rO(L(301, [(data.aD1 / 100).toFixed(2)]) + "<br>" + L(302, [1 + data.aD2 + " / " + data.aD3]) + "<br>" + L(303, [data.aD4 ? L(304) : L(305)])), data.aBu || i6.iE(new a5M([new hs(L(306),
					function() {
						bW.eh.dE({
							d2: 8,
							aY: data.aY
						}), data.aCz = 0, cy.ep.eq(160, 0), cT.iD(7)
					}).button]))) : (i6.rO(L(307), "0.75em").style.marginBottom = "0.3em", i6.rO("  • " + L(308), "0.75em").style.whiteSpace = "pre", i6.rO("  • " + L(309), "0.75em").style.whiteSpace = "pre", i6.rO("  • " + L(310),
						"0.75em").style.whiteSpace = "pre", i6.rO(L(311), "0.75em").style.marginTop = "1.0em", i6.rO(L(312), "0.75em").style.marginTop = "1.0em", i6.rO("<a href='" + mp.mq +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aD5 = "https://www.patreon.com/oauth2/authorize?state=" + data.aY +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", i6.rO(L(313), "0.75em").style.marginTop = "1.0em", i6.rO("<a href='" + aD5 +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aBu || (i6.iE(new aCd), i6.iE(new a5M([new hs(L(223), function() {
						bW.eh.dE({
							d2: 6,
							aY: data.aY
						}), data.aD0 = 1, cT.iD(7)
					}).button])), i6.rO(L(314), "0.75em").style.marginTop = "0.75em")), i2.push(i6))
			}(i2),
			function(i2) {
				var i6, rQ, aCP, cE, aCQ;
				data.aBu || cy.tc.get().length && ((i6 = new i7).i8(L(235)), cE = 0, aCQ = function() {
					var aCR = cy.tc.get().length;
					aCP[0].n5(cE === aCR ? aG.n4 : aG.aA6), aCP[1].n5(cE === aCR ? aG.n4 : aG.a1D), aCP[2].n5(cE === aCR || aCR - 1 <= cE || cE < 5 ? aG.n4 : aG.a1D)
				}, aCP = [new hs(L(236), function() {
					cT.iD(8, void 0, new mm(25, {
						d2: 0,
						aY: cy.tc.get()[cE],
						aBv: 0
					}))
				}, aG.n4, 1), new hs(L(237), function() {
					cy.tc.aCS(cE), rQ.rR[cE].remove(), rQ.rR.splice(cE, 1);
					for (var b0 = cE; b0 < rQ.rR.length; b0++) rQ.rR[b0].name = "" + b0;
					cy.tc.get().length && (cE = Math.max(cE - 1, 0), rQ.rR[cE].textContent = rQ.rR[cE].textContent.replace("⚪", "🟢")), aCQ()
				}, aG.n4, 1), new hs(L(238), function() {
					for (var s6 = rQ.rR.length - 1; cE < s6; s6--) cy.tc.aCS(s6), rQ.rR[s6].remove(), rQ.rR.splice(s6, 1);
					aCQ()
				}, aG.n4, 1)], aCQ(), (rQ = new iA(cy.tc.aCT(), function(b0) {
					cE = b0, aCQ()
				})).rR[0].style.marginTop = "0.5em", i6.i9(rQ), i6.iE(new a5M([aCP[0].button])), i6.iE(new a5M([aCP[1].button])), i6.iE(new a5M([aCP[2].button])), i2.push(i6))
			}(i2), i2
	}())
}

function a3S() {
	this.u = new a7n, this.aD7 = new aD8, this.b = function() {
		this.u.b()
	}, this.bS = function() {
		0 !== this.u.a7p && this.u.a7p--
	}
}

function aD9() {
	var hn, ho, hp, i2;

	function ht() {
		hx(), 2 !== c.data.spawningType || bA.c3.c4(c.data.spawningData) || (c.data.spawningType = 0), 2 !== c.data.spawningType && (c.data.spawningData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		2 === c.data.spawningType && bA.c3.i0(hp.i1(), c.data.spawningData, cd.aDA - 1)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(315), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7,
			iB = (i6.i8(L(34)), [L(316), L(317), L(37)]),
			value = c.data.spawningType;
		0 === c.data.gameMode && (iB.splice(1, 1), 0 < value) && (value = 1);
		i6.i9(new iA({
			iB: iB,
			value: value
		}, function(cE) {
			hx(), c.data.spawningType = cE, 0 === c.data.gameMode && 1 === cE && (c.data.spawningType = 2), 2 !== c.data.spawningType || c.data.spawningData || (c.data.spawningData = new Uint16Array(2 * c.iC)), cT.iD(24)
		})), i6.iE(new aCd), i6.iE(new aDB({
			value: c.data.selectableSpawn
		}, L(318), function(value) {
			c.data.selectableSpawn = value
		})), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6 = new i7;
		i6.i8("Seed"), i6.iE(new iF({
			cE: -1,
			value: c.data.spawningSeed
		}, 1, 0, function(iG) {
			var value = Math.abs(Math.floor(iG.target.value)) % 16384;
			iG.target.value = c.data.spawningSeed = value
		})), i2.push(i6)
	}(i2), function(i2) {
		var i6;
		2 === c.data.spawningType && ((i6 = new i7).i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.spawningData, 2)), i6.iE(hp), i2.push(i6))
	}(i2), i2))
}

function aDC() {
	this.xj = function(cu, xh) {
		cp.ck(11), cp.cq(1, 0), cp.cq(6, 4), cp.cq(1, xh ? 1 : 0), cp.cq(3, 0 === c.dr ? ax.zZ ? 6 : 0 : c.bV ? 1 : c.fk ? 7 : c.d < 7 ? 2 : 8 === c.d ? 4 : 9 === c.d ? 5 : 3), bW.u.send(cu, cp.cs)
	}, this.en = function() {
		cp.ck(58), cp.cq(1, 0), cp.cq(6, 5), cp.cq(8, bW.u.xb), cp.cq(10, cY.cW), cp.cq(9, cY.a4H), cp.cq(10, jo.aDD), cp.cq(14, jo.aDE), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDF = function(jM) {
		cp.ck(27), cp.cq(1, 1), cp.cq(4, 0), cp.cq(22, jM), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDG = function(km, nW) {
		cp.ck(25), cp.cq(1, 1), cp.cq(4, 1), cp.cq(10, km), cp.cq(10, nW), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDH = function(km, tF) {
		cp.ck(24), cp.cq(1, 1), cp.cq(4, 2), cp.cq(10, km), cp.cq(9, tF), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDI = function(km, aDJ) {
		cp.ck(42), cp.cq(1, 1), cp.cq(4, 3), cp.cq(10, km), cp.cq(27, aDJ), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDK = function(km, a08) {
		cp.ck(31), cp.cq(1, 1), cp.cq(4, 4), cp.cq(10, km), cp.cq(16, a08), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDL = function(nW) {
		cp.ck(15), cp.cq(1, 1), cp.cq(4, 5), cp.cq(10, nW), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDM = function(cE) {
		cp.ck(15), cp.cq(1, 1), cp.cq(4, 6), cp.cq(10, cE), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDN = function(aDO) {
		cp.ck(6), cp.cq(1, 1), cp.cq(4, 7), cp.cq(1, aDO), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDP = function() {
		cp.ck(5), cp.cq(1, 1), cp.cq(4, 8), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDQ = function(km, jM, nW) {
		cp.ck(47), cp.cq(1, 1), cp.cq(4, 10), cp.cq(10, km), cp.cq(10, nW), cp.cq(22, jM), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDR = function(aDS, aDT) {
		cp.ck(24), cp.cq(1, 1), cp.cq(4, 15), cp.cq(9, aDT), cp.cq(10, aDS), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDU = function(pP) {
		cp.ck(14), cp.cq(1, 1), cp.cq(4, 14), cp.cq(9, pP), bW.u.send(bW.u.xa, cp.cs)
	}, this.aDV = function(aDW, target) {
		var b0, az = aDW.length;
		for (cp.ck(14 + 9 * az), cp.cq(1, 1), cp.cq(4, 13), cp.cq(9, target), b0 = 0; b0 < az; b0++) cp.cq(9, aDW[b0]);
		bW.u.send(bW.u.xa, cp.cs)
	}
}

function a2n() {
	var c1, fW, aDX, canvas, fV, mF, km, a4B, ft, nS, aDY = 11 / 12;

	function aDZ() {
		var ng = Math.floor(km * (c1 - 2 * aDX)),
			aDb = 1 + Math.floor(.0625 * dw.dO),
			aDc = 1 + Math.floor(.3 * dw.dO),
			eG = Math.floor(.55 * dw.dO);
		fV.clearRect(0, 0, c1, dw.dO), fV.fillStyle = aG.m4, fV.fillRect(0, 0, aDX, dw.dO), fV.fillRect(aDX + ng, 0, c1 - aDX - ng, dw.dO), fV.fillStyle = km < 1 / 3 ? "rgba(" + Math.floor(3 * km * 130) + ",130,0,0.85)" : km < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (km - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (km - 2 / 3) * 130) + ",0.85)", fV.fillRect(aDX, 0, ng, dw.dO), fV.fillStyle = aG.am, fV.fillRect(0, 0, c1, 1), fV.fillRect(0, dw.dO - 1, c1, 1),
			fV.fillRect(0, 0, 1, dw.dO), fV.fillRect(aDX, 0, 1, dw.dO), fV.fillRect(aDX + ng, 0, 1, dw.dO), fV.fillRect(c1 - aDX, 0, 1, dw.dO), fV.fillRect(c1 - 1, 0, 1, dw.dO), fV.fillRect(Math.floor(.25 * dw.dO) + aDc, Math.floor((dw.dO - aDb) /
				2), dw.dO - 2 * aDc, aDb), fV.fillRect(Math.floor(c1 - 1.25 * dw.dO) + aDc, Math.floor((dw.dO - aDb) / 2), dw.dO - 2 * aDc - aDc % 2, aDb), fV.fillRect(Math.floor(c1 - 1.25 * dw.dO) + Math.floor((dw.dO - aDb) / 2), aDc, aDb, dw.dO -
				2 * aDc - aDc % 2), a4B = bA.gc.kl(c.ba, dw.o0()), fV.fillText(bA.bB.aX(a4B) + " (" + bA.bB.gE(100 * km, +(km < .1)) + ")", Math.floor(.5 * c1), eG)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		km = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => dw.a9i(arg1);

	function aDh(a6n) {
		return !(1 < a6n && 1 === km || (1 < a6n && a6n * km - km < 1 / 1024 ? a6n = (km + 1 / 1024) / km : a6n < 1 && km - a6n * km < 1 / 1024 && (a6n = (km - 1 / 1024) / km), km = p.q(km * a6n, 1 / 1024, 1), aDZ(), 0))
	}

	function aDi(ip) {
		return km !== (km = p.q((ip - fW - aDX) / (c1 - 2 * aDX), 1 / 1024, 1)) && (aDZ(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aDZ(), bT.eA = !0
	}, this.fX = 0, this.vc = !1, this.b = function() {
		mF = !c.g3 && !c.bV, nS = !1, km = .5, a4B = 0, this.vc = !1, this.resize()
	}, this.resize = function() {
		dY.dc.fs() && eE.c1 < .8 * eE.dO ? (this.dO = Math.floor(.066 * eE.dP), c1 = eE.c1 - 4 * di.gap - this.dO) : (c1 = Math.floor((dY.dc.fs() ? .65 : .389) * eE.dP), c1 += 12 - c1 % 12, this.dO = Math.floor(c1 / 12)), aDX = Math.floor(3 *
			this.dO / 2), ft = bA.fu.fv(1, Math.floor(.5 * this.dO)), (canvas = document.createElement("canvas")).width = c1, __fx.mobileKeybinds.setSize(c1, this.dO, dZ), canvas.height = this.dO, (fV = canvas.getContext("2d", {
			alpha: !0
		})).font = ft, bA.fu.textBaseline(fV, 1), bA.fu.textAlign(fV, 1), this.fy(), aDZ()
	}, this.fy = function() {
		fW = dY.dc.fs() && eE.c1 < .8 * eE.dO ? this.dO + 3 * di.gap : Math.floor((eE.c1 - c1) / 2), this.fX = eE.dO - this.dO - uQ.uR() * di.gap
	}, this.g4 = function() {
		nS && (nS = !1, aDZ())
	}, this.mF = function() {
		return !(!mF || dx.m1 && fW < Math.floor(di.gap + 5.5 * this.dO))
	}, this.uN = function(y9) {
		return !!this.mF() && fW + c1 > eE.c1 - y9 - di.gap
	}, this.aDd = function() {
		mF = !c.bV
	}, this.u5 = function() {
		mF = !1
	}, this.o0 = function() {
		return p.q(Math.floor(1024 * km + .5) - 1, 0, 1023)
	}, this.ir = function(ip, iq) {
		return this.mF() && fW < ip && ip < fW + c1 && iq > this.fX
	}, this.io = function(ip, iq) {
		if (!this.mF()) return !1;
		if (!(__fx.settings.keybindButtons && iq > this.fX - Math.floor(di.gap / 4) - this.dO && iq < this.fX - Math.floor(di.gap / 4) && __fx.mobileKeybinds.click(ip - fW))) {
			if (!dw.ir(ip, iq)) return !1;
			dv.a9b = !1, ! function(yJ, ip, iq) {
				if (function(ip, iq) {
						return fW < ip && ip < fW + aDX && iq > dw.fX
					}(ip, iq)) return aDh(aDY);
				if (function(ip, iq) {
						return fW + c1 - aDX < ip && ip < fW + c1 && iq > dw.fX
					}(ip, iq)) return aDh(1 / aDY);
				return yJ.vc = !0, aDi(ip)
			}(this, ip, iq) || (bT.eA = !0)
		}
		return !0
	}, this.a9i = function(nm) {
		0 !== c.dr && this.mF() && aDh(nm) && (bT.eA = !0)
	}, this.it = function(deltaY) {
		var nm;
		return !(0 === deltaY || !this.mF()) && aDh(nm = 0 < deltaY ? (nm = 400 / (400 + deltaY)) < aDY ? aDY : nm : 1 / aDY < (nm = (400 - deltaY) / 400) ? 1 / aDY : nm)
	}, this.is = function(ip) {
		return !!this.vc && aDi(ip)
	}, this.a9c = function() {
		this.vc = !1
	}, this.bS = function() {
		this.mF() && a4B !== bA.gc.kl(c.ba, this.o0()) && (nS = !0)
	}, this.gl = function() {
		this.mF() && (dZ.drawImage(canvas, fW, this.fX), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(dZ, fW, this.fX)
	}
}

function a2a() {
	var dI = bA.color;
	this.ik = dI.z9(0, 0, 0), this.li = dI.nZ(0, 0, 0, .7), this.a7l = dI.nZ(0, 0, 0, .5), this.m4 = dI.nZ(0, 0, 0, .85), this.g6 = dI.nZ(0, 0, 0, .75), this.nf = dI.nZ(0, 0, 0, .6), this.vC = dI.nZ(0, 0, 0, .35), this.am = dI.z9(255, 255, 255), this
		.m5 = dI.nZ(255, 255, 255, .3), this.ne = dI.nZ(255, 255, 255, .6), this.aBV = dI.nZ(255, 255, 255, .4), this.aDj = dI.nZ(255, 255, 255, .25), this.aDk = dI.nZ(255, 255, 255, .85), this.tx = dI.nZ(255, 255, 255, .75), this.aDl = dI.nZ(255,
			255, 255, .15), this.aDm = dI.nZ(255, 255, 255, .11), this.nj = dI.z9(128, 128, 128), this.aDn = dI.nZ(64, 64, 64, .75), this.nX = dI.nZ(88, 88, 88, .83), this.n4 = dI.nZ(60, 60, 60, .85), this.aDo = dI.nZ(80, 60, 60, .85), this.aH = dI
		.z9(170, 170, 170), this.aI = dI.z9(200, 235, 245), this.aBR = dI.z9(30, 255, 30), this.aBQ = dI.z9(0, 200, 0), this.nn = dI.z9(128, 255, 128), this.aDp = dI.nZ(10, 65, 10, .75), this.g7 = dI.nZ(0, 255, 0, .6), this.aDq = dI.nZ(0, 255, 0,
		.5), this.vF = dI.nZ(0, 200, 0, .5), this.aA6 = dI.nZ(0, 100, 0, .75), this.pg = dI.nZ(0, 60, 0, .8), this.yQ = dI.nZ(0, 255, 0, .3), this.aDr = dI.nZ(0, 180, 0, .6), this.aDs = dI.nZ(0, 120, 0, .85), this.no = dI.z9(0, 120, 0), this.aDt = dI
		.nZ(0, 70, 0, .85), this.aDu = dI.z9(190, 230, 190), this.aL = dI.z9(0, 255, 0), this.aDv = dI.z9(255, 120, 120), this.uM = dI.z9(255, 160, 160), this.nk = dI.z9(255, 70, 70), this.nl = dI.z9(230, 0, 0), this.tv = dI.nZ(220, 0, 0, .6), this
		.aBX = dI.nZ(255, 100, 100, .8), this.aAP = dI.nZ(100, 0, 0, .85), this.pf = dI.nZ(60, 0, 0, .85), this.aDw = dI.nZ(200, 0, 0, .6), this.a1D = dI.nZ(120, 0, 0, .85), this.aAK = dI.z9(255, 70, 10), this.al = dI.z9(230, 190, 190), this.aJ = dI
		.z9(255, 0, 0), this.aK = dI.z9(255, 0, 255), this.pd = dI.nZ(60, 0, 60, .85), this.pe = dI.nZ(0, 60, 60, .85), this.aBN = dI.nZ(10, 60, 60, .9), this.aDx = dI.nZ(0, 96, 96, .75), this.aM = dI.z9(0, 255, 255), this.aDy = dI.z9(160, 160, 255),
		this.aDz = dI.nZ(0, 40, 90, .75), this.aE0 = dI.nZ(0, 0, 255, .6), this.aE1 = dI.z9(200, 200, 255), this.nV = dI.nZ(50, 50, 255, .83), this.aE2 = dI.nZ(20, 90, 150, .75), this.gD = dI.z9(255, 120, 100), this.aE3 = dI.nZ(255, 255, 0, .5), this
		.aE4 = dI.nZ(255, 255, 150, .2), this.aO = dI.z9(255, 255, 0), this.aAN = dI.z9(255, 255, 200), this.aE5 = dI.nZ(200, 200, 0, .6), this.aE6 = dI.nZ(140, 120, 0, .75), this.aE7 = dI.nZ(180, 160, 40, .75), this.aE8 = dI.nZ(70, 50, 20, .85),
		this.aE9 = dI.nZ(30, 30, 0, .85), this.pi = dI.nZ(60, 60, 0, .85), this.aEA = dI.z9(255, 255, 100), this.aP = dI.z9(255, 255, 140), this.aEB = dI.nZ(255, 140, 0, .75), this.ph = dI.nZ(70, 40, 0, .85), this.aN = dI.z9(255, 150, 0), this.aEC =
		dI.nZ(255, 200, 80, .85), this.ts = dI.nZ(0, 0, 0, 0), this.aED = dI.nZ(255, 255, 255, 0), this.aEE = dI.nZ(254, 254, 254, 0)
}

function tY() {
	this.aEF = function(cE, mb) {
		return Number(this.aEG(cE, mb))
	}, this.aEG = function(cE, mb) {
		var c8 = null;
		return 0 === dY.id ? dY.aEH && (c8 = dY.aEH.getItem((mb ? "v" : "d") + cE)) : 1 === dY.id ? c8 = dY.aEI.loadString((mb ? 1e3 : 2e3) + cE) : 2 === dY.id && (c8 = dY.aEJ[(mb ? "v" : "d") + cE]), c8 && 0 !== c8.length ? c8 : null
	}, this.aEK = function(az, aEL) {
		var bq = [],
			aEM = aEL ? "e" : "l";
		if (0 === dY.id) {
			if (dY.aEH)
				for (b0 = 0; b0 < az; b0++) bq.push(dY.aEH.getItem(aEM + b0))
		} else if (1 === dY.id)
			for (var aEN = aEL ? 5e3 : 3e3, b0 = 0; b0 < az; b0++) bq.push(dY.aEI.loadString(aEN + b0));
		else if (2 === dY.id)
			for (b0 = 0; b0 < az; b0++) bq.push(dY.aEJ[aEM + b0]);
		return bq
	}, this.save = function(cE, value, mb) {
		var aEO = (mb ? "v" : "d") + cE;
		if (0 === dY.id) {
			if (dY.aEH && cy.cz.data[140].value) try {
				dY.aEH.setItem(aEO, value)
			} catch (iG) {
				console.log(iG)
			}
		} else 1 === dY.id ? dY.aEI.saveString((mb ? 1e3 : 2e3) + cE, value) : 2 === dY.id && (dY.aEJ[aEO] = value, dY.aEP.postMessage(aEO + " " + value))
	}, this.aEQ = function(bq, aEL) {
		var az = bq.length,
			aEM = aEL ? "e" : "l";
		if (0 === dY.id) {
			if (dY.aEH && cy.cz.data[140].value) try {
				for (b0 = 0; b0 < az; b0++) dY.aEH.setItem(aEM + b0, bq[b0])
			} catch (iG) {
				console.log(iG)
			}
		} else if (1 === dY.id)
			for (var aEN = aEL ? 5e3 : 3e3, b0 = 0; b0 < az; b0++) dY.aEI.saveString(aEN + b0, bq[b0]);
		else if (2 === dY.id)
			for (b0 = 0; b0 < az; b0++) dY.aEJ[aEM + b0] = bq[b0], dY.aEP.postMessage(aEM + b0 + " " + bq[b0])
	}
}

function aER() {
	this.bk = function() {
		if (2 === c.a0t) c.a17 = 2;
		else {
			if (8 === c.d) bA.gc.mN(0) || 0 === z.bZ[0] ? c.aET = 1 : bA.gc.mN(1) || 0 === z.bZ[1] ? c.aET = 0 : c.aET = +(z.fo[1] > z.fo[0]);
			else {
				if (c.gQ) {
					var sx = e6.aEU();
					if (c.aEV = sx, jG.jH[sx]) return void(c.a17 = +(jG.jJ[c.ba] === sx))
				}
				c.aET = gS[0]
			}
			c.a17 = +(c.aET === c.ba)
		}
	}
}

function aEW() {
	this.el = function(cu) {
		var username = cy.cz.data[122].value.slice(0, 20),
			username = (cp.ck(24 + 16 * username.length + 18 + eW.aEX.eP()), cp.cq(1, 0), cp.cq(6, 1), cp.cq(10, jo.aDD), cp.cq(2, cy.cz.data[158].value), bW.bX.aEY(username), bA.color.aEZ(cy.u.nF()));
		cp.cq(6, username[0]), cp.cq(6, username[1]), cp.cq(6, username[2]), eW.aEX.dC(), bW.u.xb = cu, bW.u.send(cu, cp.cs)
	}, this.bz = function(aEa, d1) {
		d9.b(), d9.cq(1, 0), d9.cq(6, 2), d9.cq(3, aEa), 2 === aEa ? d9.cq(2, d1) : 3 === aEa ? aV.dB.dC(d1, 7, d9) : 5 === aEa && (d9.cq(3, d1.id), d9.cq(3, d1.value), d9.cq(30, d1.aY)), bW.u.send(bW.u.xb, d9.dD())
	}
}

function a2y() {
	this.gb = null, this.bd = 0, this.aEb = function() {
		for (this.bd = 0, b0 = c.iC - 1; 0 <= b0; b0--) 0 !== z.bZ[b0] && this.bd++;
		this.gb = new Uint16Array(this.bd);
		for (var az = 0, b0 = 0; b0 < c.iC; b0++) 0 !== z.bZ[b0] && (this.gb[az++] = b0)
	}, this.wa = function() {
		for (var fo = z.fo, aEe = z.aEe, a0x = z.a0x, gb = bc.gb, b0 = bc.bd - 1; 0 <= b0; b0--) {
			var j6 = gb[b0],
				g8 = fo[j6],
				c6 = aEe[j6];
			g8 <= p.eL(c6, 4) ? a2F.cJ(j6) : c6 <= g8 ? 250 <= (aEe[j6] = g8) && (a0x[j6] = 1) : aEe[j6] = c6 - Math.max(1, p.eL(c6 - g8, 1e3))
		}
		this.aEd()
	}, this.aEd = function() {
		for (var bZ = z.bZ, jC = this.gb, jB = this.bd, b0 = jB - 1; 0 <= b0; b0--) 0 === bZ[jC[b0]] && (jC[b0] = jC[--jB]);
		this.bd = jB
	}
}

function a3e() {
	this.aEf = !1, this.a99 = !1, this.aEg = !1, this.aEh = [0, 0, 0, 0], this.aEi = function() {
		var yS, u1, a0J, a0K;
		this.aEg = this.aEg || this.a99, (this.a99 || this.aEf && this.aEg) && (yS = a2S.a9A[0], u1 = a2S.a9A[1], a0J = a2S.a9A[2], a0K = a2S.a9A[3], yS = yS < this.aEh[0] ? this.aEh[0] : yS, u1 = u1 < this.aEh[1] ? this.aEh[1] : u1, a0J = a0J >
			this.aEh[2] ? this.aEh[2] : a0J, a0K = a0K > this.aEh[3] ? this.aEh[3] : a0K, this.a99 = !1, this.aEf = !1, yS === this.aEh[0] && u1 === this.aEh[1] && a0J === this.aEh[2] && a0K === this.aEh[3] ? this.aEj() : yS <= a0J && u1 <=
			a0K && fO.putImageData(fP, 0, 0, yS, u1, a0J - yS + 1, a0K - u1 + 1))
	}, this.aEj = function() {
		this.aEg && this.aEh[2] >= this.aEh[0] && this.aEh[3] >= this.aEh[1] && fO.putImageData(fP, 0, 0, this.aEh[0], this.aEh[1], this.aEh[2] - this.aEh[0] + 1, this.aEh[3] - this.aEh[1] + 1), this.aEg = !1
	}, this.mC = function() {
		this.aEh[2] >= this.aEh[0] && this.aEh[3] >= this.aEh[1] && fO.putImageData(fP, 0, 0, this.aEh[0], this.aEh[1], this.aEh[2] - this.aEh[0] + 1, this.aEh[3] - this.aEh[1] + 1), this.aEg = !1
	}, this.b = function() {
		var fW, fX;
		this.aEf = !1, this.a99 = !1, this.aEg = !1, this.aEh[0] = cd.fR, this.aEh[1] = cd.fS, this.aEh[2] = this.aEh[3] = 0;
		loop: for (fW = 1; fW < cd.fR - 1; fW++)
			for (fX = cd.fS - 2; 1 < fX; fX--)
				if (1 === fN[aA.a8s(fW, fX) + 2]) {
					this.aEh[0] = fW;
					break loop
				} loop: for (fX = 1; fX < cd.fS - 1; fX++)
			for (fW = cd.fR - 2; 1 < fW; fW--)
				if (1 === fN[aA.a8s(fW, fX) + 2]) {
					this.aEh[1] = fX;
					break loop
				} loop: for (fW = cd.fR - 2; 0 < fW; fW--)
			for (fX = cd.fS - 2; 1 < fX; fX--)
				if (1 === fN[aA.a8s(fW, fX) + 2]) {
					this.aEh[2] = fW;
					break loop
				} loop: for (fX = cd.fS - 2; 0 < fX; fX--)
			for (fW = cd.fR - 2; 1 < fW; fW--)
				if (1 === fN[aA.a8s(fW, fX) + 2]) {
					this.aEh[3] = fX;
					break loop
				}
	}
}

function a2e() {
	this.aW = new aEk, this.d3 = new aEl, this.dB = new gy, this.b = function() {
		this.aW.b()
	}
}

function a2l() {
	var ah, a7p, aEm, c1, dO, font, bF;

	function aEr(hl) {
		return hl < 10 ? "0" + hl : String(hl)
	}
	this.b = function() {
		bF = L(319)
	}, this.resize = function() {
		c1 = Math.floor((dY.dc.fs() ? .53 : .36) * eE.dP), dO = Math.floor(.065 * c1), font = bA.fu.fv(1, Math.floor(.9 * dO)), aEm--, this.setTime()
	}, this.bS = function() {
		this.setTime() && (bT.eA = !0)
	}, this.setTime = function() {
		for (var g8 = new Date, aEn = g8.getUTCMinutes(), aEo = g8.getUTCSeconds(), aEp = [0, 10, 20, 25, 30, 35, 40, 45, 50], aEq = (a7p = 3600 - 60 * aEn - aEo, a7p %= 300, 300), b0 = 0; b0 < aEp.length; b0++)
			if ((60 * aEn + aEo + a7p) % 3600 == 60 * aEp[b0]) {
				aEq = 0;
				break
			} return a7p += aEq, ah = bF + aEr(Math.floor(a7p / 60)) + ":" + aEr(a7p % 60), aEm !== (aEm = 60 * aEn + aEo) && (c1 = e1.measureText(ah, font), c1 += Math.floor(.4 * dO), !0)
	}, this.gl = function() {
		dZ.lineWidth = 1 + Math.floor(dO / 15), dZ.translate(eE.c1 - dO, Math.floor(.5 * (eE.dO + c1))), dZ.rotate(-Math.PI / 2), dZ.fillStyle = aG.am, dZ.fillRect(0, 0, c1, dO), dZ.strokeStyle = aG.ik, dZ.strokeRect(0, 0, c1, dO + 10), dZ
			.fillStyle = aG.ik, dZ.font = font, bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 1), dZ.fillText(ah, Math.floor(c1 / 2), Math.floor(.59 * dO)), dZ.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a3l() {
	function aEt(iG) {
		var bq, iG = iG.target.files;
		iG && 0 < iG.length && (iG = iG[0], "json" === (bq = iG.name.split("."))[bq.length - 1].toLowerCase()) && ((bq = new FileReader).onload = aF5, bq.readAsText(iG))
	}

	function aF5(iG) {
		var aF8;
		c.dr || (iG = JSON.parse(iG.target.result), aF8 = c.data = new cb, aF9(iG, aF8, "mapType", 0, 2), aF9(iG, aF8, "mapProceduralIndex", 0, 255), aF9(iG, aF8, "mapRealisticIndex", 0, 255), aF9(iG, aF8, "mapSeed", 0, 16383), function(aF7, aF8, cX,
				max) {
				aF7 = aF7[cX];
				aF8[cX] = aFF(aF7) ? aF7.slice(0, max) : aF8[cX]
			}(iG, aF8, "mapName", 20), function(aF7, aF8, cX) {
				var jh;
				2 === aF8.mapType && (!aFF(aF7 = aF7[cX]) || aF7.length <= 20 ? aF8.mapType = 0 : ((jh = new Image).onload = function() {
					jd.aFG.jg(jh, 1), jh.onload = null, jh = null
				}, jh.src = aF7))
			}(iG, aF8, "canvas"), aF9(iG, aF8, "passableWater", 0, 1), aF9(iG, aF8, "passableMountains", 0, 1), aF9(iG, aF8, "playerCount", 1, 512), aF9(iG, aF8, "humanCount", 1, 1), aF9(iG, aF8, "selectedPlayer", 0, 0), aF9(iG, aF8, "gameMode",
				0, 1), aF9(iG, aF8, "playerMode", 0, 0), aF9(iG, aF8, "battleRoyaleMode", 0, 0), aF9(iG, aF8, "numberTeams", 0, 8), aF9(iG, aF8, "isZombieMode", 0, 0), aF9(iG, aF8, "isContest", 0, 0), aF9(iG, aF8, "isReplay", 0, 0), aFC(iG, aF8,
				"elo", 16, 2, 16383), aF9(iG, aF8, "colorsType", 0, 1), aF9(iG, aF8, "colorsPersonalized", 0, 1), aFC(iG, aF8, "colorsData", 32, 512, 262143), aF9(iG, aF8, "selectableColor", 0, 1), aFC(iG, aF8, "teamPlayerCount", 16, 9, 512),
			aF9(iG, aF8, "neutralBots", 0, 1), aF9(iG, aF8, "botDifficultyType", 0, 3), aF9(iG, aF8, "botDifficultyValue", 0, 15), aFC(iG, aF8, "botDifficultyTeam", 8, 9, 15), aFC(iG, aF8, "botDifficultyData", 8, 512, 15), aF9(iG, aF8,
				"spawningType", 0, 2), aF9(iG, aF8, "spawningSeed", 0, 16383), aFC(iG, aF8, "spawningData", 16, 1024, 4095), aF9(iG, aF8, "selectableSpawn", 0, 1), aF9(iG, aF8, "playerNamesType", 0, 2),
			function(aF7, aF8, cX, size, max) {
				var hX = aF7[cX];
				if (Array.isArray(hX)) {
					for (var hY = new Array(size), az = Math.min(hX.length, size), b0 = 0; b0 < az; b0++) hY[b0] = aFF(hX[b0]) ? hX[b0].slice(0, max) : "";
					hY.fill("", az), aF8[cX] = hY
				}
			}(iG, aF8, "playerNamesData", 512, 20), aF9(iG, aF8, "selectableName", 0, 1), aF9(iG, aF8, "aIncomeType", 0, 2), aF9(iG, aF8, "aIncomeValue", 0, 255), aFC(iG, aF8, "aIncomeData", 8, 512, 255), aF9(iG, aF8, "tIncomeType", 0, 2), aF9(
				iG, aF8, "tIncomeValue", 0, 255), aFC(iG, aF8, "tIncomeData", 8, 512, 255), aF9(iG, aF8, "iIncomeType", 0, 2), aF9(iG, aF8, "iIncomeValue", 0, 255), aFC(iG, aF8, "iIncomeData", 8, 512, 255), aF9(iG, aF8, "sResourcesType", 0, 2),
			aF9(iG, aF8, "sResourcesValue", 0, 2047), aFC(iG, aF8, "sResourcesData", 16, 512, 2047), cT.jl(), cT.u.a54[0] = 0, cT.iD(19))
	}

	function aF9(aF7, aF8, cX, min, max) {
		aF7 = aF7[cX];
		aF8[cX] = "number" == typeof aF7 && min <= aF7 && aF7 <= max ? Math.floor(aF7) : aF8[cX]
	}

	function aFF(bF) {
		return "string" == typeof bF
	}

	function aFC(aF7, aF8, cX, aFH, size, max) {
		var hX = aF7[cX];
		if (Array.isArray(hX)) {
			for (var hY = new(8 === aFH ? Uint8Array : 16 === aFH ? Uint16Array : Uint32Array)(size), az = Math.min(hX.length, size), b0 = 0; b0 < az; b0++) hY[b0] = p.q(hX[b0], 0, max);
			aF8[cX] = hY
		}
	}
	this.aEs = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aEt, input.click()
	}, this.aEu = function() {
		for (var aEx, aF0, oL = c.data, keys = Object.keys(oL), aEv = {}, b0 = 0; b0 < keys.length; b0++) {
			var key = keys[b0];
			oL[key] instanceof Uint8Array || oL[key] instanceof Uint16Array || oL[key] instanceof Uint32Array ? aEv[key] = Array.from(oL[key]) : aEv[key] = oL[key]
		}
		aEv.canvas = 2 === aEv.mapType && aEv.canvas ? aEv.canvas.toDataURL() : null, aEx = aEv, aEx = JSON.stringify(aEx, null, 2), aEx = new Blob([aEx], {
			type: "application/json"
		}), (aF0 = document.createElement("a")).href = URL.createObjectURL(aEx), aF0.download = "tt_scenario.json", aF0.click()
	}
}

function aFI(data) {
	var iP, aFJ, aFK, iR, aFL, aFM, aFN, colors, aFO, aFP, aFQ = 0,
		aFR = 0,
		aFS = !1,
		aFT = !1,
		aFU = [1, 5, 60, 240, 1440, 10080, 43200];

	function aG0(ip, iq) {
		! function(ip, iq) {
			return aFJ < ip && ip < aFJ + iR && aFK < iq && iq < aFK + aFL
		}(aFQ = ip, aFR = iq) ? (aFS && (bT.eA = !0), aFS = !1) : (aFS = !0, bT.eA = !0)
	}
	this.show = function() {
		aFT = cy.cz.data[127].value, iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize();
		var dI = eE.dR,
			iZ = iP.ia(),
			aFf = dI * iZ.ie,
			dI = dI * iZ.ib;
		aFM = bA.fu.po(.06), aFN = bA.fu.po(.04), aFJ = bA.fu.po(.06), aFK = dI + aFM, iR = eE.c1 - aFJ - aFN, aFL = aFf + dI - aFK - aFN
	}, this.gl = function() {
		iP.gl(),
			function() {
				var b0, aFb, bD, fW, bE, bq = data.data,
					aFi = 1,
					aFj = .125,
					aFk = aFT ? 65536 : 0;
				for (b0 = 0; b0 < bq.length; b0++)
					for (aFb = bq[b0].aFb, bD = aFb.length, aFi = Math.max(bD, aFi), bE = 0; bE < bD; bE++) aFj = Math.max(aFb[bE], aFj), aFk = Math.min(aFb[bE], aFk);
				var u1 = aFK + aFL,
					aFl = aFL / (aFj - aFk),
					aFm = 1 / (aFi - 1);
				for (dZ.lineWidth = di.ig, b0 = 0; b0 < bq.length; b0++) {
					for (aFb = bq[b0].aFb, bD = aFb.length, fW = aFJ, dZ.beginPath(), dZ.moveTo(fW + iR, u1 - aFl * (aFb[bD - 1] - aFk)), bE = bD - 2; 0 <= bE; bE--) dZ.lineTo(fW + aFm * bE * iR, u1 - aFl * (aFb[bE] - aFk));
					dZ.strokeStyle = colors[b0], dZ.stroke()
				}(function(aFk, aFj, u1, aFl) {
					dZ.font = bA.fu.fv(0, .25 * aFJ), bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 2), dZ.fillStyle = colors[0];
					for (var fW = .92 * aFJ, b0 = 0; b0 < 3; b0++) {
						var c8 = aFk + b0 * (aFj - aFk) / 2;
						dZ.fillText((c8 / 1e3).toFixed(3), fW, u1 - aFl * (c8 - aFk))
					}
				})(aFk, aFj, u1, aFl),
				function(aFi) {
					var fX = aFK + aFL + .15 * aFN;
					dZ.font = bA.fu.fv(0, Math.min(.4 * aFN, .028 * eE.c1)), bA.fu.textBaseline(dZ, 0), bA.fu.textAlign(dZ, 2), dZ.fillStyle = colors[0], dZ.fillText(bA.aFZ.aFp(aFO), aFJ + iR, fX), bA.fu.textAlign(dZ, 0), dZ.fillText(bA.aFZ.aFp(
						new Date(aFP.getTime() - 6e4 * (aFi - 1) * aFU[data.a57])), aFJ, fX)
				}(aFi),
				function(aFi, aFk, aFj) {
					if (aFS && !(aFi < 2)) {
						for (var y4, cE = (aFQ - aFJ) / iR * (aFi - 1), aFq = Math.floor(cE), aFr = Math.floor(1 + cE), aFs = cE - aFq, aFt = 1e5, a05 = -1, aFu = -1, aFv = aFj - (aFj - aFk) * (aFR - aFK) / aFL, bq = data.data, b0 = 0; b0 < bq
							.length; b0++) {
							var xy, aFb = bq[b0].aFb;
							aFb.length <= aFr || (aFb = aFb[aFq] + aFs * (aFb[aFr] - aFb[aFq]), (xy = Math.abs(aFv - aFb)) < aFt && (aFt = xy, a05 = b0, aFu = aFb))
						} - 1 !== a05 && (aFj = aFK + aFL - (aFu - aFk) / (aFj - aFk) * aFL, dZ.lineWidth = .5 * di.ig, dZ.strokeStyle = colors[a05], dZ.beginPath(), dZ.moveTo(aFJ, aFj), dZ.lineTo(aFQ, aFj), dZ.lineTo(aFQ, aFK + aFL), dZ
						.stroke(), dZ.beginPath(), dZ.arc(aFQ, aFj, .1 * aFJ, 0, 2 * Math.PI), dZ.fillStyle = colors[a05], dZ.fill(), aFk = aFK + aFL + .15 * aFN, bA.fu.textAlign(dZ, 1), y4 = aFi - 2 < cE ? (y4 = aFP.getTime() - 6e4 * aFU[
								data.a57], new Date(y4 + (cE - (aFi - 2)) * (aFO.getTime() - y4))) : new Date(aFP.getTime() - 6e4 * (aFi - cE - 1) * aFU[data.a57]), aFi = bA.aFZ.aFp(y4), cE = bA.fu.measureText(aFi), y4 = p.q(aFQ, aFJ + .5 *
								cE, aFJ + iR - .5 * cE), dZ.fillStyle = bA.color.z9(70, 50, 20), dZ.fillRect(y4 - .52 * cE, aFK + aFL, 1.04 * cE, .55 * aFN), dZ.fillStyle = colors[0], dZ.fillText(aFi, y4, aFk), dZ.font = bA.fu.fv(0, .25 *
								aFJ), bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 2), y4 = .92 * aFJ, aFi = (aFu / 1e3).toFixed(3), cE = bA.fu.measureText(aFi), aFk = y4 - 1.04 * cE, dZ.fillStyle = bA.color.z9(70, 50, 20), dZ.fillRect(aFk,
								aFj - .1625 * aFJ, aFJ - aFk, .275 * aFJ), dZ.fillStyle = colors[a05], dZ.fillText(aFi, y4, aFj))
					}
				}(aFi, aFk, aFj)
			}(), dZ.lineWidth = di.ig, dZ.strokeStyle = aG.am, dZ.beginPath(), dZ.moveTo(aFJ, aFK), dZ.lineTo(aFJ, aFK + aFL), dZ.lineTo(aFJ + iR, aFK + aFL), dZ.stroke();
		var b0, fontSize = .5 * aFM,
			bq = (dZ.font = bA.fu.fv(0, fontSize), bA.fu.textBaseline(dZ, 1), bA.fu.textAlign(dZ, 0), data.data),
			az = bq.length,
			fX = aFK - .5 * aFM,
			bF = "";
		for (b0 = 0; b0 < az; b0++) bF += bq[b0].name + "  ";
		bF = bF.trim();
		var aBS = bA.fu.measureText(bF),
			fW = .5 * (eE.c1 - aBS);
		for (aBS > eE.c1 && (fW = 0, dZ.font = bA.fu.fv(0, eE.c1 / aBS * fontSize)), b0 = 0; b0 < az; b0++) dZ.fillStyle = colors[b0], dZ.fillText(bq[b0].name, fW, fX), fW += bA.fu.measureText(bq[b0].name + "  ")
	}, this.io = function(ip, iq) {
		aG0(ip, iq)
	}, this.is = function(ip, iq) {
		aG0(ip, iq)
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	};
	var b0, g8, aFc, s6, ca = data.data,
		az = ca.length,
		max = 1;
	for (b0 = 0; b0 < az; b0++) max = Math.max(max, ca[b0].aFb.length);
	for (b0 = 0; b0 < az; b0++)
		for (; ca[b0].aFb.length < max;) ca[b0].aFb.unshift(0);
	g8 = new Date, aFc = 6e4 * g8.getTimezoneOffset(), s6 = g8.getTime() - aFc, aFO = new Date(s6), 6 === data.a57 ? function(g8, aFc) {
		var aFe = g8.getUTCFullYear(),
			g8 = g8.getUTCMonth() + 1;
		aFP = g8 < 12 ? new Date(Date.UTC(aFe, g8) - aFc) : new Date(Date.UTC(aFe + 1, 0) - aFc)
	}(g8, aFc) : (aFc = 6e4 * aFU[data.a57], aFP = data.a57 <= 4 ? new Date(s6 + aFc - g8.getTime() % aFc) : new Date(s6 + aFc - (g8.getTime() + 2592e5) % aFc)), s6 = bA.color, colors = [aG.am, s6.z9(255, 0, 0), s6.z9(0, 200, 0), s6.z9(80, 80,
		255), s6.z9(255, 255, 0), s6.z9(255, 0, 255), s6.z9(0, 255, 255), s6.z9(255, 140, 0), s6.z9(128, 128, 128), s6.z9(0, 255, 140)], iP = new hr(L(320) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.a57] + ", " + bA.aFZ.aFa(aFO), [
		new hs("⬅️ " + L(33), function() {
			cT.iD(1)
		}), new hs(L(321), function() {
			cT.iD(14)
		})
	], !1)
}

function a2m() {
	var a9n, rr, aG1, aG2, dO, ft, fontSize, aG3, aG4, aBB, aG5, canvas, fV, aG6, aG7;

	function i1(b0) {
		return L(0 === b0 ? 322 : 1 === b0 ? 323 : 2 === b0 ? 324 : 325)
	}

	function aGD() {
		c.gQ ? aGE + 4 * di.gap + dO + e6.aGF() > dw.fX ? dZ.drawImage(canvas, 2 * di.gap + e6.aGF(), aGE + 2 * di.gap) : dZ.drawImage(canvas, di.gap, aGE + 3 * di.gap + e6.aGF()) : dZ.drawImage(canvas, di.gap, aGE + 2 * di.gap)
	}

	function aG8() {
		canvas.width = a9n[0].width + aBB, canvas.height = dO + aBB, (fV = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a9n[0].width + aBB, dO + aBB), fV.translate(Math.floor(aBB / 2), Math.floor(aBB / 2)), fV.lineWidth = aBB, fV.fillStyle = 1 === a9n[0].aGC ? aG.aDk : aG.g6, aGG(), fV.fill(), fV.strokeStyle = 1 === a9n[0].aGC ? aG.ik :
			aG.am, aGG(), fV.stroke(), bA.fu.textAlign(fV, 1), bA.fu.textBaseline(fV, 1), fV.fillStyle = 1 === a9n[0].aGC ? aG.ik : aG.am, fV.font = ft[0], fV.fillText(i1(a9n[0].aGB), Math.floor(a9n[0].width / 2), Math.floor(.72 * aG3[0] * dO)), fV
			.font = ft[1], fV.fillText(a9n[0].bF, Math.floor(a9n[0].width / 2), Math.floor((aG3[0] + .48 * aG3[1]) * dO))
	}

	function aGG() {
		fV.beginPath(), fV.moveTo(aG5, 0), fV.lineTo(a9n[0].width - aG5, 0), fV.lineTo(a9n[0].width, aG5), fV.lineTo(a9n[0].width, dO - aG5), fV.lineTo(a9n[0].width - aG5, dO), fV.lineTo(aG5, dO), fV.lineTo(0, dO - aG5), fV.lineTo(0, aG5), fV
			.closePath()
	}
	this.b = function() {
		rr = 4, aG1 = aG2 = aG6 = 0, a9n = [], ft = new Array(2), fontSize = new Array(2), (aG3 = new Array(2))[0] = .3, aG3[1] = .7, aG4 = new Array(4), canvas = document.createElement("canvas"), aG7 = bT.db + 2e3, this.resize()
	}, this.resize = function() {
		var b0, c1;
		for (dO = Math.floor((dY.dc.fs() ? .062 : .047) * eE.dP), fontSize[0] = Math.floor(.85 * aG3[0] * dO), fontSize[1] = Math.floor(.85 * aG3[1] * dO), ft[0] = bA.fu.fv(1, fontSize[0]), ft[1] = bA.fu.fv(1, fontSize[1]), b0 = aG4.length -
			1; 0 <= b0; b0--) aG4[b0] = this.measureText(i1(b0) + "000", ft[0]);
		if (aBB = Math.floor(1 + .05 * dO), aG5 = Math.floor(.2 * dO), 0 < a9n.length) {
			for (b0 = a9n.length - 1; 0 <= b0; b0--) c1 = this.measureText(a9n[b0].bF + "00", ft[1]), a9n[b0].width = c1 < aG4[b0] ? aG4[b0] : c1;
			aG8()
		}
	}, this.bS = function() {
		0 !== rr && (4 === rr ? bT.db > aG7 && (rr = 0, 1 === c.dr) && e1.aAc(cd.aAn.f2[cd.cf].name, 3, 1, 9) : (1 === rr ? (0 === aG1 && (aG8(), aG1 = 1e-4), 1 <= (aG1 += .002 * (bT.db - aG6)) && (aG2 = 0, rr = 2, aG1 = 1), bT.eA = !0) : 2 ===
			rr ? ((aG2 += (bT.db - aG6) / 1e3) > a9n[0].a2A || 1 < aG2 && 1 < a9n.length) && (rr = 3) : 3 === rr && ((aG1 -= .002 * (bT.db - aG6)) <= 0 && (aG1 = 0, a9n.shift(), rr = 0 < a9n.length ? 1 : 0), bT.eA = !0), aG6 = bT.db))
	}, this.measureText = function(bF, ft) {
		return dZ.font = ft, Math.floor(dZ.measureText(bF).width)
	}, this.eT = function(sP, b0) {
		this.aAc(z.jA[sP], b0, 1, 0 === b0 ? 3 : 7)
	}, this.aAc = function(bF, aGB, aGC, a2A) {
		var c1;
		bF.length && (c1 = (c1 = this.measureText(bF + "00", ft[1])) < aG4[aGB] ? aG4[aGB] : c1, a9n.push({
			bF: bF,
			width: c1,
			aGB: aGB,
			aGC: aGC,
			a2A: a2A
		}), 0 === rr) && (aG1 = 0, rr = 1, aG6 = bT.db)
	}, this.gl = function() {
		0 !== rr && 0 !== aG1 && (aG1 < 1 ? (dZ.globalAlpha = aG1, aGD(), dZ.globalAlpha = 1) : aGD())
	}
}

function q8() {
	this.resize = function() {
		var b0, aCR = document.head.querySelector("style#ss");
		if (aCR)
			for (b0 = aCR.sheet.cssRules.length - 1; 0 <= b0; b0--) aCR.sheet.deleteRule(0);
		else(aCR = document.createElement("style")).id = "ss", document.head.appendChild(aCR);
		var y4 = "::-webkit-scrollbar",
			aGH = bA.fu.pa(di.aGI),
			qM = bA.fu.pa(Math.max(bA.fu.vQ(.012), 8));
		try {
			aCR.sheet.insertRule(y4 + "{width:" + qM + ";height:" + qM + ";}", aCR.sheet.cssRules.length), aCR.sheet.insertRule(y4 + "-thumb{background-color:white;}", aCR.sheet.cssRules.length), aCR.sheet.insertRule(y4 + "-track{background:" +
				aG.m4 + ";}", aCR.sheet.cssRules.length), aCR.sheet.insertRule(y4 + "-track:horizontal{border-top:" + aGH + " solid white;}", aCR.sheet.cssRules.length), aCR.sheet.insertRule(y4 + "-track:vertical{border-left:" + aGH +
				" solid white;}", aCR.sheet.cssRules.length), aCR.sheet.insertRule(y4 + "-button{display:none;}", aCR.sheet.cssRules.length)
		} catch (iG) {
			for (console.log("error 3425: " + iG), b0 = aCR.sheet.cssRules.length - 1; 0 <= b0; b0--) aCR.sheet.deleteRule(0)
		}
	}
}

function a2g() {
	var size, aGJ;
	this.b = function() {
		size = c.fm, aGJ = new Uint16Array(c.iC);
		for (var fl = c.fl, b0 = c.fm - 1; 0 <= b0; b0--) aGJ[b0] = fl + b0
	}, this.bS = function() {
		jN.aGK.bS();
		for (var b0 = size - 1; 0 <= b0; b0--)
			if (0 === z.bZ[aGJ[b0]]) {
				bE = void 0;
				var bE = b0;
				size--, aGJ[bE] = aGJ[size]
			} else gw.bS(aGJ[b0])
	}, this.wQ = function(j6) {
		aGJ[size++] = j6
	}
}

function a36() {
	var aGN;
	this.sC = null, this.sB = 0, this.b = function() {
		aGN = [], 9 === c.d && this.aGO()
	}, this.aGO = function() {
		this.sC = [0, 0, 0, 0, 0, 0];
		for (var aGP = [256, 227, 170, 148, 100, this.sB = 0, 0, 0], aGQ = [0, 8, 24, 30, 46, 70, 256, 333], aGR = [0, 0, 3, 7, 14, 22, 256, 179], dO = c.fl, b0 = 1; b0 < aGP.length; b0++)
			if (dO <= aGQ[b0]) {
				this.sB = aGP[b0 - 1] - p.eL((dO - aGQ[b0 - 1]) * (aGP[b0 - 1] - aGP[b0]), aGQ[b0] - aGQ[b0 - 1]), this.sC[5] = aGR[b0 - 1] - p.eL((dO - aGQ[b0 - 1]) * (aGR[b0 - 1] - aGR[b0]), aGQ[b0] - aGQ[b0 - 1]), this.sC[0] = c.iC - dO - this
					.sB - this.sC[5];
				break
			} c.fm = c.iC - c.fl, c.data.numberTeams = (0 < c.fl) + (0 < c.fm), c.data.playerCount = c.gu = c.fl + c.fm, c.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, c.fl + this.sB, c.fm - this.sB]), c.aGS.n7()
	}, this.aGT = function(player) {
		aGN.push({
			player: player,
			bD: 14 + hL.s9(20)
		})
	}, this.bS = function() {
		if (9 === c.d)
			for (var b0 = aGN.length - 1; 0 <= b0; b0--) --aGN[b0].bD <= 0 && (e4.a6j(aGN[b0].player, 0, a2E.bN.a0a + a2E.bN.a0c), aGN.splice(b0))
	}
}

function iA(aGV, aGW) {
	this.rR = [];
	var aGX = this.rR;

	function click() {
		for (var b0 = 0; b0 < aGX.length; b0++) aGX[b0].textContent = aGX[b0].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var cE = parseInt(this.name);
		void 0 !== aGV.cE && cy.ep.eq(aGV.cE, cE), aGW && aGW(cE)
	}
	for (var aGY, az = aGV.iB.length, b0 = 0; b0 < az; b0++)(aGY = document.createElement("p")).textContent = "⚪ " + aGV.iB[b0], aGY.style.margin = "0", aGY.name = "" + b0, aGY.style.cursor = "pointer", aGY.style.fontSize = "1em", aGY
		.addEventListener("click", click), aGX.push(aGY);
	aGX[aGV.value].textContent = aGX[aGV.value].textContent.replace("⚪", "🟢")
}

function aGZ(data) {
	var iP, aGa;

	function aGd(i) {
		var az = data.data.length;
		if (az) {
			for (var oE, max = min = parseInt(data.data[0][0]), b0 = 1; b0 < az; b0++) var cB = parseInt(data.data[b0][0]),
				min = Math.min(cB, min),
				max = Math.max(cB, max);
			oE = i < 0 ? min + i : max + 1, cT.iD(8, cT.eu().p6, new mm(21, {
				pk: data.pk,
				oE: oE,
				pl: oE + Math.abs(i)
			}))
		}
	}
	if (this.show = function() {
			iP.show(), this.resize()
		}, this.iK = function() {
			iP.iK()
		}, this.resize = function() {
			iP.resize(), aGa.resize()
		}, this.iL = function(dI) {
			2 === dI && iP.iM[0].iN()
		}, data.aGb) {
		iP = new hr(L(24), [new hs("⬅️ " + L(33), function() {
			cT.hz()
		})]);
		var ca = {
				aGg: [],
				mn: [L(340), L(341), L(342) + " ↗"],
				aGh: [12, 50, 38]
			},
			ci = c.data.ci;
		if (ci)
			for (var az = ci.length, aGg = ca.aGg, jA = z.jA, b0 = 0; b0 < az; b0++) aGg.push([{
				c8: b0 + 1 + ".",
				g8: 0
			}, {
				c8: jA[b0],
				g8: 0
			}, {
				c8: aV.aW.aX(ci[b0], 5),
				g8: 1,
				aY: ci[b0],
				aBv: 0
			}]);
		aGa = new aGi(iP.hv, ca)
	} else {
		var ca = data.data.length ? 0 : 1,
			x5 = [new hs("⬅️ " + L(33), function() {
				cT.hz()
			}), new hs(L(326), function() {
				aGd(-10)
			}, ca, 0, 1), new hs(L(327), function() {
				aGd(10)
			}, ca, 0, 1), new hs(L(321), function() {
				cT.iD(11, 10, new aGe({
					pk: data.pk
				}))
			})],
			mn = [L(328), L(329), L(330), L(331), L(332), L(333), L(334), L(335), L(336), L(337), L(338), L(339), "Audit Log"];
		iP = new hr(mn[data.pk], x5), ! function() {
			var b0, ca = {
					aGg: []
				},
				aGg = ca.aGg,
				aGj = data.data,
				az = aGj.length;
			az && 0 === aGj[0][0] && 0 <= (cE = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.pk]) && (cT.u.pm[cE] = aGj[0][1]);
			var nm = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.pk],
				aGm = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.pk],
				cE = [
					[L(343), L(344) + " ↗", L(345)],
					[L(343), L(346), L(347), L(348) + " ↗"],
					[L(343), L(344) + " ↗", L(347)],
					[L(343), L(344) + " ↗", L(347)],
					[L(340), L(349), L(350) + " ↗", L(351) + " ↗", L(28)],
					[L(340), L(349), L(352) + " ↗", L(353) + " ↗", L(354)],
					[L(340), L(349), L(355) + " ↗", L(356) + " ↗", L(357)],
					[L(340), L(349), L(352) + " ↗", L(353) + " ↗", L(358)],
					[L(340), L(349), L(350) + " ↗", L(351) + " ↗", L(28)],
					[L(343), L(344) + " ↗", L(347)],
					[L(343), L(344) + " ↗", L(359)],
					[L(343), L(344) + " ↗", L(347)],
					[L(340), L(349), L(350) + " ↗", L(351) + " ↗", L(360)]
				];
			if (ca.mn = cE[data.pk], ca.aGh = [
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
				][data.pk], 0 === data.pk || 2 === data.pk || 3 === data.pk || 9 === data.pk || 10 === data.pk || 11 === data.pk)
				for (b0 = 0; b0 < az; b0++) aGg.push([{
					c8: aGj[b0][0] + 1 + ".",
					g8: 0
				}, {
					c8: aGj[b0][1],
					g8: 1,
					aY: aGj[b0][4],
					aBv: aGj[b0][3]
				}, {
					c8: (nm * aGj[b0][2]).toFixed(aGm),
					g8: 0
				}]);
			else if (12 === data.pk)
				for (b0 = 0; b0 < az; b0++) {
					var aGn = aGj[b0][3];
					aGg.push([{
						c8: "" + aGj[b0][0],
						g8: 0
					}, {
						c8: "" + aGj[b0][4],
						g8: 0
					}, {
						c8: aGj[b0][5],
						g8: 1,
						aY: aGj[b0][1],
						aBv: 0
					}, {
						c8: aGj[b0][6],
						g8: 1,
						aY: aGj[b0][2],
						aBv: 0
					}, {
						c8: ac.a29(aGn),
						g8: 0
					}])
				} else if (1 === data.pk)
					for (b0 = 0; b0 < az; b0++) aGg.push([{
						c8: aGj[b0][0] + 1 + ".",
						g8: 0
					}, {
						c8: aGj[b0][1],
						g8: 0
					}, {
						c8: (nm * aGj[b0][2]).toFixed(aGm),
						g8: 0
					}, {
						c8: aGj[b0][3],
						g8: 1,
						aY: aGj[b0][5],
						aBv: aGj[b0][4]
					}]);
				else if (4 === data.pk || 5 === data.pk || 6 === data.pk || 7 === data.pk || 8 === data.pk)
				for (b0 = 0; b0 < az; b0++) {
					var aGo = aGj[b0][5];
					4 === data.pk || 8 === data.pk ? "100%" === (aGo = (aGo % 64 * 100 / (aGo >> 6)).toFixed(0) + "%") && (4 === data.pk ? aGo += " (" + L(361) + ")" : aGo += " (" + L(362) + ")") : 5 === data.pk ? 32768 <= aGo && (aGo = -(aGo -
						32768)) : aGo = (nm * aGo).toFixed(aGm), aGg.push([{
						c8: "" + aGj[b0][0],
						g8: 0
					}, {
						c8: "" + aGj[b0][6],
						g8: 0
					}, {
						c8: aGj[b0][7],
						g8: 1,
						aY: aGj[b0][1],
						aBv: aGj[b0][2]
					}, {
						c8: aGj[b0][8],
						g8: 1,
						aY: aGj[b0][3],
						aBv: aGj[b0][4]
					}, {
						c8: "" + aGo,
						g8: 0
					}])
				}
			aGa = new aGi(iP.hv, ca)
		}()
	}
}

function a3s() {
	var fW, fX, dO, vP, aGp, aGq, aGr, aGs, aGt, c1, aD5, aF0;
	this.mF = !1, this.b = function(bF, aGu) {
		if (1 === dY.id && 13 <= dY.mb && dY.mb < 18) return aGu ? void(aD5 = bF) : aD5 !== bF ? void 0 : void dY.aEI.saveString(200, bF);
		aGu && (aD5 = bF, (aF0 = document.createElement("a")).appendChild(document.createTextNode(aD5)), this.mF = !0, aF0.title = aD5, aF0.target = "_blank", aF0.href = aD5, aF0.style.textAlign = "center", aF0.style.color = aG.am, aF0.style
			.position = "absolute", aF0.style.padding = "0px", aF0.style.margin = "0px", this.resize(), document.body.appendChild(aF0), bT.eA = !0)
	}, this.iK = function() {
		return !(!this.mF || (cT.removeChild(document.body, aF0), this.mF = !1))
	}, this.io = function(kU, kV) {
		return !!this.mF && ((kU < fW || kV < fX || fW + c1 < kU || fX + dO < kV || fW + c1 - vP < kU && kV < fX + vP) && (bT.eA = !0, this.mF = !1, cT.removeChild(document.body, aF0)), !0)
	}, this.resize = function() {
		var ft, a7X;
		this.mF && (aGs = Math.floor(.8 * (dY.dc.fs() ? eE.c1 > eE.dO ? .6 : .55 : .4) * eE.dP), vP = Math.floor(.15 * aGs), aGp = Math.floor(.35 * vP), aGq = Math.floor(.5 * vP), aGr = Math.floor(2.5 * aGq), dO = vP + aGp + 3 * aGq, ft = bA.fu
			.fv(1, aGp / eE.dR), aGt = Math.floor(eE.dR * e1.measureText(aD5, ft)), a7X = c1 = (aGs < aGt ? aGt : aGs) + 2 * aGr, c1 = Math.min(c1, eE.c1 - 2 * (dY.dc.fs() ? 2 : 1) * di.gap), ft = bA.fu.fv(1, c1 / a7X * aGp / eE.dR), aGt =
			Math.floor(eE.dR * e1.measureText(aD5, ft)), fW = Math.floor((eE.c1 - c1) / 2), fX = Math.floor((eE.dO - dO) / 2), aF0.style.font = ft, aF0.style.top = Math.floor((fX + 1.4 * aGq + vP) / eE.dR) + "px", aF0.style.left = Math.floor(
				(fW + (c1 - aGt) / 2) / eE.dR) + "px")
	}, this.gl = function() {
		this.mF && (dZ.fillStyle = aG.g6, dZ.fillRect(fW, fX + vP, c1, dO - vP), dZ.fillStyle = aG.aEB, dZ.fillRect(fW, fX, c1, vP), dZ.fillStyle = aG.am, dZ.lineWidth = di.ig, dZ.strokeStyle = aG.am, dZ.strokeRect(fW, fX, c1, dO), dZ.fillRect(
			fW, fX + vP, c1, di.ig), dZ.font = bA.fu.fv(1, .48 * vP), bA.fu.textAlign(dZ, 1), bA.fu.textBaseline(dZ, 1), dZ.fillText(L(363), Math.floor(fW + (c1 - .5 * vP) / 2), Math.floor(fX + .55 * vP)), dx.mO(Math.floor(fW + c1 - .8 *
			vP), Math.floor(fX + .25 * vP), Math.floor(.5 * vP)), dZ.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aGv(aGw, aGx, aGy) {
	this.rJ = document.createElement("div"), this.oe = aGw;
	var aGz = 0;
	this.resize = function(a5C, aH0) {
		var az = aGw.length;
		if (!aGy)
			for (var b0 = 1; b0 < az; b0++) bA.fu.lj(aGw[b0].button, 4);
		for (var aH1 = 0, b0 = 0; b0 < az; b0++) aH1 += aGw[b0].button.offsetWidth;
		if (a5C && (aGz = a5C.offsetWidth), aH0 && aH1 < aGz)
			for (b0 = 0; b0 < az; b0++) aGw[b0].button.style.width = (100 * aGw[b0].button.offsetWidth / aH1).toFixed(2) + "%";
		else
			for (b0 = 0; b0 < az; b0++) aGw[b0].button.style.width = "auto";
		aH0 || this.resize(a5C, 1)
	};
	var yJ = this;
	yJ.rJ.style.height = yJ.rJ.style.maxHeight = "100%";
	for (var b0 = 0; b0 < aGw.length; b0++) aGw[b0].n5(aGx), aGw[b0].button.style.height = "100%", aGw[b0].button.style.padding = "0.0em 0.9em", yJ.rJ.appendChild(aGw[b0].button)
}

function aDB(aH2, aH3, aH4) {
	function click() {
		var value = 1 - aH2.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + aH3, void 0 !== aH2.cE ? cy.ep.eq(aH2.cE, value) : aH2.value = value, aH4 && aH4(value)
	}
	var iG;
	aH3 = aH3 || L(364), this.iG = document.createElement("p"), (iG = this.iG).textContent = (aH2.value ? "🟩 " : "⬜ ") + aH3, iG.style.margin = "0", iG.style.marginBottom = "0.5em", iG.style.cursor = "pointer", iG.addEventListener("click", click)
}

function aH5() {
	var aH6 = [],
		aH7 = [],
		aH8 = 0;

	function aH9(bq, xc, aAu, aHB) {
		var az = bq.length;
		if (0 === az) return "";
		var bF = "@" + bq[0];
		if (1 === az) return bF + xc + aHB;
		for (var b0 = 1; b0 < az - 1; b0++) bF += ", @" + bq[b0];
		return bF + " and @" + bq[az - 1] + aAu + aHB
	}
	this.b = function() {
		var bF = aH9(aH7, " is", " are", " in the lobby!");
		bF.length && ax.message.c0({
			id: 7,
			aZ: bF
		}), aH6 = [], aH7 = [], aH8 = 0
	}, this.xE = function(aHA) {
		return ax.xC !== aHA && (aHA = aV.aW.aX(aHA, 5), !!cy.tc.xF(aHA)) && (aH7.push(aHA), !0)
	}, this.join = function(player) {
		ax.xC !== player.aY && (player = aV.aW.aX(player.aY, 5), cy.tc.xF(player)) && aH6.push(player)
	}, this.ze = function() {
		var xc, aAu;
		++aH8 < 3 || (aH8 = 0, xc = aH9(aH7, "", "", " entered the lobby!"), (xc = (aAu = aH9(aH6, "", "", " joined a game!")).length ? xc.length ? xc + " " + aAu : aAu : xc).length && ax.message.c0({
			id: 7,
			aZ: xc
		}), aH6 = [], aH7 = [])
	}
}

function aEk() {
	var aHC = new Uint8Array(78);
	this.b = function() {
		var b0;
		for (aHC[50] = 37, b0 = 0; b0 < 10; b0++) aHC[b0 + 3] = b0 + 1;
		for (b0 = 0; b0 < 26; b0++) aHC[b0 + 20] = b0 + 11, aHC[b0 + 52] = b0 + 38
	}, this.jX = function(bF) {
		return bF.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.aHD = function(bF, size) {
		if ((bF = this.jX(bF)).length > size) return bF.substring(0, size);
		for (; bF.length < size;) bF = "-" + bF;
		return bF
	}, this.jW = function(bF) {
		for (var a1B = aHC, az = bF.length, bq = new Uint8Array(az), b0 = 0; b0 < az; b0++) bq[b0] = a1B[bF.charCodeAt(b0) - 45];
		return bq
	}, this.jV = function(p4) {
		cp.ck(6 * p4.length), this.aHE(p4), eO.b(cp.cs)
	}, this.aHE = function(p4) {
		for (var az = p4.length, c1 = cp, b0 = 0; b0 < az; b0++) c1.cq(6, p4[b0])
	}, this.d4 = function(bF) {
		this.aHE(this.jW(bF))
	}, this.cx = function(bF, size) {
		this.aHE(this.jW(this.aHD(bF, size)))
	}, this.cA = function(bF, size) {
		for (var bq = this.jW(this.aHD(bF, size)), c8 = 0, nm = 1, b0 = bq.length - 1; 0 <= b0; b0--) c8 += nm * bq[b0], nm *= 64;
		return c8
	}
}

function aHF() {
	this.aHG = function() {
		for (var j6, az = bc.bd, jI = bc.gb, wR = z.wR, uF = this.wT(), b0 = 0; b0 < az; b0++) j6 = jI[b0], bA.gc.mN(j6) || (wR[j6] = uF);
		var a0z = z.a0z,
			a10 = z.a10,
			a0y = z.a0y,
			a0x = z.a0x,
			az = c.fl;
		for (b0 = 0; b0 < az; b0++)(0 === a0x[b0] || a0y[b0] < 1 || 2 * a0z[b0] > 3 * (a10[b0] + a0y[b0])) && (wR[b0] = 0);
		var aHH = 0;
		for (b0 = 0; b0 < az; b0++) aHH += 0 < wR[b0];
		return aHH
	}, this.wT = function() {
		return Math.min(65535, bT.bU())
	}
}

function aHI() {
	function aHJ(aHL) {
		ax.u.cS && 1 === ax.u.cV[2] && cT.aBq(29).aHM(), ax.u.cS = 0, cT.aBq(29).aHN(), 0 !== ax.u.bJ[ax.u.cV[0]].vJ && !aHL || cT.aBq(29).aHO(), ax.wx.wr()
	}
	this.bJ = new Array(4), this.cV = [0, 0, 1, 0], this.cS = 0, this.za = [0, 0], this.b = function() {
		for (var b0 = 0; b0 < this.bJ.length; b0++) this.bJ[b0] = new a4W;
		this.cV[0] = cy.cz.data[158].value
	}, this.zX = function() {
		aHJ(!0), ax.xD.b()
	}, this.ze = function() {
		ax.xD.ze();
		for (var b0 = 0; b0 < ax.u.bJ.length; b0++) {
			var cL = ax.u.bJ[b0];
			0 === cL.vJ ? cL.a4X = 0 : (cL.zW = Math.max(cL.zW - cL.a4X % 2, 0), cL.a4X++)
		}
		aHJ(!1)
	}, this.zl = function(ao) {
		this.cV[0] !== ao || this.cV[2] || cT.aBq(29).aHP()
	}
}

function a2q() {
	var ft, c1, fX, aHQ, aHR, aHS, canvas, fV, nS, t5, aHT, aHU, aHV, aHW;
	this.fW = 0, this.dO = 0, this.b = function() {
		aHS = c.aHX, aHU = "rgba(0,100,0,0.8)", aHV = "rgba(150,0,0,0.8)", nS = aHT = !0, t5 = z.gA[c.ba], this.resize()
	}, this.resize = function() {
		c1 = Math.floor((dY.dc.fs() ? .305 : .24) * eE.dP), this.dO = Math.floor(.5 + .13 * c1), c1 = Math.floor(6 * this.dO), ft = bA.fu.fv(1, Math.floor(.8 * this.dO)), aHR = bA.fu.fv(1, Math.floor(.45 * this.dO)), aHW = Math.floor(.5 * this
			.dO), cd.nP.font = ft, fX = di.gap, aHQ = Math.floor(1 + .13 * this.dO), (canvas = document.createElement("canvas")).width = c1, canvas.height = this.dO, fV = canvas.getContext("2d", {
			alpha: !0
		}), bA.fu.textBaseline(fV, 1), bA.fu.textAlign(fV, 1), this.aHY()
	}, this.g2 = function() {
		return dY.dc.fs() && eE.c1 < 1.2 * eE.dO
	}, this.fy = function() {
		this.g2() ? this.fW = eE.c1 - c1 - di.gap : this.fW = Math.floor(ds.aHZ() + (eE.c1 - ds.aHZ() - du.c1 - c1) / 2 - .5 * di.gap)
	}, this.g4 = function() {
		nS && (nS = !1, this.aHY())
	}, this.aHY = function() {
		fV.font = ft, fV.clearRect(0, 0, c1, this.dO), fV.fillStyle = aHT ? aHU : aHV, fV.fillRect(0, 0, c1, this.dO), fV.fillStyle = aG.ne;
		var dI = this.aHa(),
			aHc = (this.aHb(), fV.fillStyle = z.gA[c.ba] >= gB.gC(c.ba) ? aG.uM : aG.am, bA.bB.aX(t5)),
			aHc = (fV.fillText(aHc, Math.floor(c1 / 2), aHW), fV.measureText(aHc).width),
			dI = (fV.font = aHR, fV.fillStyle = 9 === dI ? aG.aEA : aG.am, gB.aHe),
			aHf = "+" + dI,
			eH = fV.measureText(aHf).width,
			aHg = Math.floor(this.dO / 12),
			aHc = .5 * (c1 + aHc) + aHg;
		(aHc + eH + aHQ <= c1 || 1e3 <= dI && (aHf = "+" + Math.floor(dI / 1e3) + "K", aHc + (eH = fV.measureText(aHf).width) + aHQ <= c1)) && fV.fillText(aHf, Math.floor(aHc + .5 * eH), Math.floor(.3 * this.dO)), fV.fillStyle = aG.am, fV
			.fillRect(0, 0, c1, 1), fV.fillRect(0, 0, 1, this.dO), fV.fillRect(0, this.dO - 1, c1, 1), fV.fillRect(c1 - 1, 0, 1, this.dO)
	}, this.aHa = function() {
		var dI = bT.bU() % 100,
			a79 = (dI = 9 - p.eL(dI -= dI % 10, 10), Math.floor(dI * (this.dO - aHQ) / 9));
		return fV.fillRect(0, a79, aHQ, this.dO - a79), fV.fillRect(c1 - aHQ, a79, aHQ, this.dO - a79), dI
	}, this.aHb = function() {
		fV.fillRect(aHQ, this.dO - aHQ, Math.floor((c1 - 2 * aHQ) * z.gA[c.ba] / aHS), aHQ)
	}, this.bS = function() {
		var j6 = c.ba;
		bA.gc.gd(j6) && (j6 = z.gA[j6] - z.t4[j6], t5 !== j6 ? (aHS = eK(j6, aHS), aHT = t5 < j6 && 10 <= j6, t5 = j6, nS = !0) : bT.bU() % 10 == 9 && (nS = !0))
	}, this.gl = function() {
		0 === z.bZ[c.ba] || c.g3 || 2 === z.sr[c.ba] || dZ.drawImage(canvas, this.fW, fX)
	}
}

function aHh() {
	var aHi = {
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
		aHj = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.aHk = function(d8) {
		return d8.replace(aHj, function(match) {
			return aHi[match] || match
		})
	}, this.aX = function(c8) {
		var b0, aGm, aHl, aHm, aHn;
		if (c8 < 0) return "-" + this.aX(Math.abs(c8));
		if (c8 < 1e3) return c8.toString();
		for (aGm = Math.floor(Math.log(c8 + .5) / Math.log(10)) + 1, aHl = Math.floor((aGm - 1) / 3), aHn = (aHm = c8.toString()).substring(aGm - 3, aGm), b0 = 1; b0 < aHl; b0++) aHn = aHm.substring(aGm - 3 * (b0 + 1), aGm - 3 * b0) + " " + aHn;
		return aHm.substring(0, aGm - 3 * aHl) + " " + aHn
	}, this.gE = function(j6, aGm) {
		return j6.toFixed(aGm) + "%"
	}, this.aHo = function(c8, aHp) {
		return c8.toFixed(p.q(Math.floor((void 0 === aHp ? 3 : aHp) - Math.log10(Math.max(c8, 1))), 0, 8))
	}, this.aCF = function(c8, nm, aGm) {
		return (c8 * nm).toFixed(aGm)
	}, this.bC = function(username) {
		var a5m, kL = username.indexOf("[");
		return !(kL < 0) && 1 < (a5m = username.indexOf("]")) - kL && a5m - kL <= 8 ? username.substring(kL + 1, a5m).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.bC;
	this.aAG = function(bF) {
		for (var bE = Math.floor(.5 * bF.length + .5), os = Math.floor(.5 * (bE - 1)), b0 = 0; b0 < os; b0++)
			for (var b1 = -1; b1 < 2; b1 += 2) {
				var dI = bE + b1 * b0;
				if (" " === bF[dI]) return [this.a16(bF.substring(0, dI)), this.aHq(bF.substring(dI))]
			}
		return [bF.substring(0, bE), bF.substring(bE)]
	}, this.aHq = function(bF) {
		for (var az = bF.length, b0 = 0; b0 < az; b0++)
			if (" " !== bF[b0]) return bF.substring(b0);
		return bF
	}, this.a16 = function(bF) {
		for (var b0 = bF.length - 1; 0 <= b0; b0--)
			if (" " !== bF[b0]) return bF.substring(0, b0 + 1);
		return bF
	}, this.aHr = function(bF, a4B) {
		return bF.split("(")[0] + "(🧈 " + a4B.toFixed(2) + ")"
	}, this.startsWith = function(bF, aHs) {
		return bF.substring(0, aHs.length) === aHs
	}, this.c7 = function(bF, aHs) {
		var az = bF.length;
		return bF.substring(az - aHs.length, az) === aHs
	}, this.iJ = function(bq, aHt, aHu) {
		var bF = "",
			az = bq.length - 1;
		aHu = aHu || "";
		for (var b0 = 0; b0 < az; b0++) bF += aHu + bq[b0] + aHu + ",", (b0 + 1) % aHt == 0 && (bF += "\n");
		return bF += aHu + bq[az] + aHu
	}, this.p3 = function(bF, nU, a0i) {
		return bF.replace(new RegExp(nU, "g"), a0i)
	}
}

function pz() {
	var cE = 0,
		db = bT.db;
	this.q2 = 0, this.bS = function() {
		eE.bS(), c.g3 ? wk() : 0 === cE ? bT.db >= db && (db += bT.gg * Math.floor(1 + (bT.db - db) / bT.gg), 2 === c.dr || dx.m1 ? wW() : (wX(), mB.aEi()), cE++) : ((dx.m1 ? wk : (bT.eA = !0, wj))(), cE = 0), wf(), bT.eA && (bT.eA = !1, aHv())
	}
}

function aHw() {
	this.eP = function() {
		return 69
	}, this.dC = function() {
		var c1 = window.screen.width,
			dO = window.screen.height;
		cp.cq(26, (c1 * dO + dO) % 67108864), cp.cq(22, 0), cp.cq(21, 0)
	}
}

function a3T() {
	function aHy() {
		8 === c.d && 1 === c.dr && gX.gY.gZ()
	}

	function aHx(player) {
		c.g3 ? (a2F.aI0(player), bc.aEd(), c.fk && c.aI1.bS()) : a2M.wO(player)
	}
	this.mg = function(player) {
		e.sk(player, player === c.ba ? 21 : 22), aHx(player), aHy()
	}, this.aHz = function(player) {
		1 === c.dr && 0 !== z.bZ[player] && 2 !== z.sr[player] && aHx(player), c.gO--, c.fn--, e.sk(player, 4), bA.gc.sp(2) && du.g4(!0), aHy()
	}
}

function a3v() {
	var aI2 = new Uint8Array(64);
	this.b = function() {
		var b0;
		for (aI2[0] = 45, aI2[37] = 95, b0 = 0; b0 < 10; b0++) aI2[b0 + 1] = 48 + b0;
		for (b0 = 0; b0 < 26; b0++) aI2[b0 + 11] = 65 + b0, aI2[b0 + 38] = 97 + b0
	}, this.a4i = function(a4e) {
		for (var h0 = eO, p4 = new Uint8Array(a4e), b0 = 0; b0 < a4e; b0++) p4[b0] = h0.eP(6);
		return p4
	}, this.a4h = function(p4) {
		for (var az = p4.length, aI3 = aI2, bq = [], b0 = 0; b0 < az; b0++) bq.push(String.fromCharCode(aI3[p4[b0]]));
		return bq.join("")
	}, this.aX = function(value, aI4) {
		for (var aI3 = aI2, bq = [], b0 = 0; b0 < aI4; b0++) bq.push(String.fromCharCode(aI3[value >> 6 * (aI4 - 1 - b0) & 63]));
		return bq.join("")
	}
}

function aI5() {
	this.aI6 = function() {
		for (var az = bc.bd, jI = bc.gb, a0o = [], b0 = 0; b0 < az; b0++) {
			var j6 = jI[b0];
			bA.gc.sz(j6) && a0o.push(j6)
		}
		return a0o
	}, this.aI7 = function() {
		if (0 === jG.jH[c.aEV]) return this.aI8();
		e6.a4r(c.aEV);
		for (var a0o = [], az = a4.lF[0], lP = a4.lP, b0 = 0; b0 < az; b0++) {
			var j6 = lP[b0];
			bA.gc.sz(j6) && a0o.push(j6)
		}
		return a0o
	}, this.aI8 = function() {
		var j6 = gS[0];
		return bA.gc.sz(j6) ? [j6] : []
	}, this.aI9 = function(a0o) {
		for (var az = a0o.length, g8 = 0, fo = z.fo, b0 = 0; b0 < az; b0++) g8 += fo[a0o[b0]];
		return g8
	}
}

function aIA(a0P) {
	var aIB = document.createElement("div");

	function a0T() {
		vD.vE() || (aIB.style.backgroundColor = bA.color.a0W(aG.m4, 50))
	}

	function a0U() {
		aIB.style.backgroundColor = aG.m4
	}
	this.eq = function(zh) {
			aIB.textContent = zh
		}, this.show = function() {
			document.body.appendChild(aIB)
		}, this.resize = function() {
			var dO = bA.fu.vQ(.03, .5);
			aIB.style.width = 2 * dO + "px", aIB.style.height = dO + "px", aIB.style.font = bA.fu.fv(1, .75 * dO), bA.fu.lj(aIB, 4), bA.fu.lj(aIB, 2)
		}, this.rF = function() {
			aIB.onclick = null, aIB.onmouseover = null, aIB.onmouseout = null, cT.removeChild(document.body, aIB), aIB = null
		}, aIB.style.position = "absolute", a0U(), aIB.style.color = aG.am, aIB.style.zIndex = "3", aIB.style.right = "0", aIB.style.top = "0", aIB.style.display = "flex", aIB.style.justifyContent = "center", aIB.style.alignItems = "center", aIB
		.style.userSelect = "none", aIB.style.outline = "none", aIB.onclick = a0P, aIB.onmouseover = a0T, aIB.onmouseout = a0U
}

function a2v() {
	var aIC, canvas, a12, aID;

	function aIJ(cE, name, aIK, bF) {
		a12[cE] = name, canvas[cE] = new Image, canvas[cE].onload = function() {
			! function(cE, aIK) {
				var aIN, d1 = null;
				7 === aIK ? aIN = bA.qR.aIO : 8 === aIK ? (aIN = bA.qR.aIP, d1 = .1) : 3 === aIK ? (aIN = bA.qR.aIQ, d1 = .06) : 5 === aIK ? aIN = bA.qR.aIR : 6 === aIK ? aIN = bA.qR.aIS : 4 === aIK && (aIN = bA.qR.aIT);
				canvas[cE] = bA.qR.aIU(canvas[cE], aIN, d1)
			}(cE, aIK), aIM()
		}, canvas[cE].onerror = function(iG) {
			console.error("Error loading image at index", cE, "Error:", iG), aIM()
		}, canvas[cE].src = "data:image/png;base64," + bF
	}

	function aIM() {
		aIC--, aIG()
	}

	function aIG() {
		0 === aIC && (aIC = -1, aII(), bT.eA = !0, canvas[7] = aID, canvas[8] = aID, canvas[9] = aID, canvas[10] = aID, 5 === cT.cU) && cT.eu().a59.resize()
	}

	function aII() {
		e2.aIW(), dm.rT([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== dY.id, 1 !== dY.id, !0, !0, !0]), a2E.a5Y = new aIX, a2E.a5Y.b(), dz.dT()
	}
	this.b = function() {
		if (void 0 === canvas) {
			aIC = 23, canvas = new Array(aIC), a12 = new Array(aIC), (aID = document.createElement("canvas")).width = 1;
			for (var b0 = aIC - (aID.height = 1); 0 <= b0; b0--) canvas[b0] = aID;
			aII(), aIJ(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aIJ(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aIJ(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIJ(3, "orders", 6,
					"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"
					), aIJ(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aIJ(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aIJ(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aIJ(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIJ(8,
					"googleplay", 3,
					"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"
					), aIJ(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aIJ(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIJ(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIJ(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIJ(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIJ(14, "bestPlayer", 5,
					"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"
					), aIJ(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aIJ(16, "apple", 3,
					"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"
					), aIJ(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aIJ(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aIJ(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aIJ(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aIJ(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aIJ(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(cE) {
		return canvas[cE]
	}, this.a4V = function(name) {
		for (var b0 = a12.length - 1; 0 <= b0; b0--)
			if (a12[b0] === name) return canvas[b0];
		return aID
	}, this.dh = function() {
		return aIC <= 0
	}, this.aIF = function() {
		aIC = 0, aIG()
	}
}

function aIY() {
	var a7F = 32,
		a7G = new Array(2);

	function dV(dI) {
		var fW, fX, jM, kZ, kW, qM = a7F,
			jj = bA.fu.dV(qM, qM),
			jk = bA.fu.getContext(jj, !0),
			qQ = bA.fu.getImageData(jk, qM, qM),
			a5Y = qQ.data,
			c6 = (qM >> 1) - .5,
			a1w = Math.sqrt(c6 * c6);
		for (a5Y.fill(255), fX = 0; fX < qM; fX++)
			for (fW = 0; fW < qM; fW++) kW = fW - c6, kZ = fX - c6, jM = 4 * (fX * qM + fW), kW = 714 * (a1w - Math.sqrt(kW * kW + kZ * kZ)) / a1w, a5Y[2 + jM] = dI, a5Y[3 + jM] = 255 < kW ? 0 : kW;
		return jk.putImageData(qQ, 0, 0), jj
	}
	this.aIZ = -1, this.b = function() {
		this.aIZ = -1, a7G[0] || (a7G[0] = dV(255), a7G[1] = dV(0))
	}, this.a84 = function(jk, g5, fW, fX, ij, b0) {
		bA.gc.gd(c.ba) && (jk.setTransform(g5 *= 4 / 3 * .625, 0, 0, g5, fW - (ij *= 4 / 3), fX - ij), jk.drawImage(a7G[+(t.u.oF[b0] === this.aIZ)], 0, 0))
	}
}

function aIa() {
	var iP, aBt, i2;
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), aBt.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(L(55), [new hs("⬅️ " + L(33), function() {
		cT.hz()
	})]), aBt = new hu(iP.hv, ((i2 = []).push(function() {
		function aCL() {
			aIf.button.textContent = L(217), aId.iG.readOnly = !1, aIe.iG.readOnly = !1, aCK.n5(1), aCK.button.style.color = aG.am
		}
		var i6 = new i7,
			aIc = (i6.rO("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", i6.i8(L(365)), new iF({
				value: cy.cz.data[105].value,
				cE: -1
			})),
			aId = (aIc.iG.readOnly = !0, i6.iE(aIc), i6.i8(L(353), "0.8em"), new iF(cy.cz.data[148], 0, void 0, function(iG) {
				aCJ(cy.cz.data[149].value, iG.target.value)
			})),
			aIe = (i6.iE(aId), i6.i8(L(357), "0.8em"), new iF(cy.cz.data[149], 1, void 0, function(iG) {
				aCJ(iG.target.value, cy.cz.data[148].value)
			})),
			aIf = (i6.iE(aIe), new hs(L(217), function(iG) {
				return iG.textContent === L(217) ? (iG.textContent = L(218), aId.iG.readOnly = !0, aIe.iG.readOnly = !0, aCK.n5(0), aCK.button.style.color = aG.aO, cy.ep.eq(149, aIe.iG.value), aCJ(cy.cz.data[149].value, cy.cz
					.data[148].value)) : aCL(), !0
			})),
			aCK = (i6.iE(new a5M([aIf.button])), new hs(L(216), function(iG) {
				return aId.iG.readOnly && bW.u.pD(0) && (bA.fu.z7(iG), aCL(), bW.eh.dF({
					d2: 0,
					aY: cy.cz.data[148].value,
					value: parseInt(cy.cz.data[149].value, 10)
				})), !0
			}, 1)),
			rL = i6.rK(),
			aCJ = (i6.rK(L(366)).style.fontWeight = "bold", function(c8, bF) {
				rL.innerHTML = cT.u.a5A(c8, cy.cz.data[105].value, bF)
			});
		return i6.iE(new a5M([aCK.button])), aCJ(cy.cz.data[149].value, cy.cz.data[148].value), i6
	}()), i2))
}

function a3d() {
	this.aBm = 0, this.aBn = 0, this.aBi = 0, this.aBj = 0, this.aBk = 0, this.aBl = 0, this.a9A = [0, 0, 0, 0], this.aIg = function() {
		this.aBm = dv.a8r(), this.aBn = dv.u2(), this.aBi = -this.aBm, this.aBj = -this.aBn, this.aBk = eE.c1 / kI, this.aBl = eE.dO / kI, this.a9A[0] = Math.floor(this.aBi), this.a9A[1] = Math.floor(this.aBj), this.a9A[2] = Math.floor(this.a9A[
			0] + this.aBk + 1), this.a9A[3] = Math.floor(this.a9A[1] + this.aBl + 1), mB.aEf = !0
	}
}

function aIh() {
	this.g0 = function(bF, font, maxWidth) {
		if (font && (dZ.font = font), dZ.measureText(bF).width <= maxWidth) return bF;
		for (var b0 = bF.length - 1; 1 <= b0; b0--)
			if (bF = bF.substring(0, b0), dZ.measureText(bF + "...").width <= maxWidth) return bF + "...";
		return "..."
	}
}

function aIj() {
	this.bS = function() {
		var aIp;
		2 === c.a0t ? (e.sk(0, 59), wg.aIk(2700)) : c.d < 7 ? (aIp = jG.jH[c.aEV], aIp = jG.a12[aIp], e1.aAc(L(367, [aIp]), 2, 1, 12), e.j9(0, L(368, [aIp]), 40, 0, aG.am, aG.g6, -1, !1), wg.aIk(2700)) : 8 === c.d ? (c.a17 ? e.sk(c.aET, 2) : e
			.sk(1 - c.ba, 3), c.aAd.g(c.aET), wg.aAA(c.aET, 2700, !1, 0)) : 9 === c.d ? (e.aAb(), wg.aIk(2700)) : (e.aAQ(c.aET), wg.aAA(c.aET, 2700, !1, 0))
	}, this.a1b = function() {
		var bF;
		c.bV || (bF = c.d < 7 ? "territorial.io/log/team" : 8 === c.d ? "territorial.io/log/1v1" : 9 === c.d ? "territorial.io/log/zombies" : "territorial.io/log/br", e.j9(720, bF, 736, 0, aG.am, aG.pg, -1, !1))
	}
}

function aIr() {
	var iP, aBt, i2;
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), aBt.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(L(369), [new hs("⬅️ " + L(33), function() {
		cT.aIs(13)
	})]), aBt = new hu(iP.hv, ((i2 = []).push(function() {
		var i6 = new i7,
			aCM = (i6.i8(L(370)), i6.rK(L(371)), new hs(L(372), function() {
				cy.ep.eq(130, 0), cT.u.mU()
			}, 0, 0, 1)),
			aCI = new iF(cy.cz.data[126], 0, function() {
				aCM.button.click()
			});
		return i6.iE(aCI), aCI.iG.placeholder = "a,b,c", aCI.iG.style.marginTop = "0.5em", i6.iE(new a5M([aCM.button])), i6
	}()), i2.push(function() {
		var i6 = new i7,
			aCM = new hs(L(372), function() {
				cy.ep.eq(130, 1), cT.u.mU()
			}, 0, 0, 1),
			aIx = new iF(cy.cz.data[129], 1, function() {
				aIx.iG.focus()
			}),
			aIy = new iF(cy.cz.data[128], 1, function() {
				aCM.button.click()
			});
		return i6.i8(L(373)), i6.iE(aIy), aIy.iG.style.marginBottom = "0.5em", i6.i8(L(374)), i6.iE(aIx), i6.iE(new a5M([aCM.button])), i6
	}()), i2.push(function() {
		var i6 = new i7;
		return i6.i8(L(375)), cy.cz.data[125].iB = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], i6.i9(new iA(cy.cz.data[125])), i6
	}()), i2.push(function() {
		var i6 = new i7;
		return i6.i8(L(376)), i6.iE(new aDB(cy.cz.data[127], L(377))), i6
	}()), i2))
}

function aIz() {
	var aJ0, aJ1, iQ, aCI, aJ2;
	this.a59 = new pR, iQ = new iX([.45, .27], [.5, .5], 2 / 3), aJ1 = [new hs("⚔️<br>" + L(378), function() {
			aJ3(0)
		}, aG.aDt), new hs("🗡️<br>" + L(379), function() {
			aJ3(1)
		}, aG.pe), new hs("🔑<br>" + L(380), function() {
			aJ3(2)
		}, aG.aE8), new hs("☰<br>" + L(381), function() {
			aJ3(3)
		}, aG.aDo), new hs("", function() {
			cT.iD(12)
		}, aG.m4, !1),
		new hs("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new hs("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aCI = new iF(cy.cz.data[122]);
	for (var b0 = 0; b0 < aJ1.length; b0++) aJ1[b0].button.style.position = "absolute";

	function aJ3(cE) {
		dY.dc.setState(10), dg.dh() || dg.aIF(), 0 === cE ? cT.u.a56() : 1 === cE ? (jd.aFG.eQ(cy.cz.data[156].value, 1) || c.aGS.nG(), cT.iD(19)) : 2 === cE ? 0 !== dY.id || cy.cz.data[140].value ? cT.iD(8, cT.cU, new mm(16)) : cT.u.ml(cT.cU, 16) :
			3 === cE && cT.iD(1)
	}
	aCI.iG.style.position = "absolute", aCI.iG.style.textAlign = "center", aCI.iG.placeholder = L(382), this.show = function() {
		cj.setState(0), dY.dc.setState(12), this.a59.show(), aJ1[4].n5(bA.color.aJ4(cy.cz.data[121].value)), this.resize(), document.body.appendChild(aCI.iG);
		for (var b0 = 0; b0 < aJ1.length; b0++) document.body.appendChild(aJ1[b0].button);
		1 !== dY.id || dY.mb < 5 || (aJ2 && bT.db > aJ2 + 144e5 ? dY.aEI.setState(14) : aJ2 = bT.db)
	}, this.iK = function() {
		this.a59.iK(), cT.removeChild(document.body, aCI.iG);
		for (var b0 = 0; b0 < aJ1.length; b0++) cT.removeChild(document.body, aJ1[b0].button)
	}, this.resize = function() {
		this.a59.resize(), this.a59.resize(), iQ.resize();
		var gap = .5 * di.gap,
			vP = 10 / 99 * .84 * iQ.c1,
			aJ7 = .16 * iQ.dO,
			aJ8 = .19 * iQ.c1,
			fW = iQ.fW + aJ8,
			vP = iQ.fX + vP + 3 * gap,
			c1 = .5 * (iQ.c1 - gap) - aJ8,
			aJ8 = iQ.c1 - 2 * aJ8 - aJ7 - gap,
			aJ8 = (bA.fu.pp(aCI.iG, fW, vP, aJ8, aJ7), bA.fu.pp(aJ1[4].button, fW + aJ8 + gap, vP, aJ7, aJ7), .5 * (iQ.fX + iQ.dO - (vP += aJ7 + gap) - gap));
		bA.fu.pp(aJ1[0].button, fW, vP, c1, aJ8), bA.fu.pp(aJ1[1].button, fW + c1 + gap, vP, c1, aJ8), bA.fu.pp(aJ1[2].button, fW, vP + aJ8 + gap, c1, aJ8), bA.fu.pp(aJ1[3].button, fW + c1 + gap, vP + aJ8 + gap, c1, aJ8);
		bA.fu.pp(aJ1[5].button, fW, vP + aJ8 * 2 + gap * 2, c1 * 2 + gap, aJ8 / 3);
		bA.fu.pp(aJ1[6].button, fW, vP + aJ8 * 2.33 + gap * 3, c1 * 2 + gap, aJ8 / 3);
		for (var b0 = 0; b0 < aJ1.length; b0++) aJ1[b0].button.style.font = bA.fu.fv(0, bA.fu.yu(.065 * iQ.dO)), bA.fu.lj(aJ1[b0].button, 5);
		aCI.iG.style.font = bA.fu.fv(0, bA.fu.yu(.08 * iQ.dO)), bA.fu.lj(aCI.iG, 5)
	}, this.gl = function() {
		if (cj.a7h(), dp.gl(), az = Math.floor((dY.dc.fs() ? .018 : .0137) * eE.dP), dZ.font = bA.fu.fv(0, Math.max(5, az)), bA.fu.textBaseline(dZ, 0), bA.fu.textAlign(dZ, 2), dZ.fillStyle = aG.am, dZ.fillText(jo.mb, eE.c1, 0), text =
			"Win count: " + __fx.wins.count, textLength = dZ.measureText(text).width, az = Math.max(5, az), dZ.textAlign = "left", dZ.textBaseline = "middle", dZ.fillText(text, dZ.canvas.width - textLength - az / 2, 2 * az), dq.gl(), dm.gl(), dg
			.dh()) {
			dZ.imageSmoothingEnabled = !1;
			var text = dg.a4V("territorial.io"),
				textLength = .84 * iQ.c1 / text.width;
			dZ.setTransform(textLength, 0, 0, textLength, iQ.fW + .08 * iQ.c1, iQ.fX), aJ0 = aJ0 || bA.qR.aIU(text, bA.qR.aJB, [0, 0, 0]);
			for (var fW = -1; fW <= 1; fW += 2)
				for (var fX = -1; fX <= 1; fX += 2) dZ.drawImage(aJ0, fW, fX);
			dZ.drawImage(text, 0, 0), dZ.imageSmoothingEnabled = !0;
			var az = dg.a4V("logo"),
				aJC = .6666 * textLength * text.height / az.height,
				a0J = .5 * eE.c1,
				a0K = iQ.fX + .5 * textLength * text.height - .5 * aJC * az.height;
			dZ.setTransform(aJC, 0, 0, aJC, a0J - .6 * textLength * text.width, a0K), dZ.drawImage(az, 0, 0), dZ.setTransform(aJC, 0, 0, aJC, a0J + .6 * textLength * text.width - aJC * az.width, a0K), dZ.drawImage(az, 0, 0), dZ.setTransform(1, 0,
				0, 1, 0, 0), dZ.imageSmoothingEnabled = !0
		}
	}
}

function a3O() {
	this.size = 0, this.cE = 0, this.cs = null, this.b = function(cs) {
		this.cE = 0, this.cs = cs, this.size = cs.length
	}, this.rF = function() {
		this.cs = null
	}, this.eP = function(size) {
		for (var c8 = 0, cs = this.cs, os = this.cE + size - 1, b0 = this.cE; b0 <= os; b0++) c8 |= (cs[b0 >> 3] >> 7 - (7 & b0) & 1) << os - b0;
		return this.cE += size, this.cE > 8 * this.size && console.error("Unwrapper Overflow"), c8
	}, this.aJD = function(size) {
		var b1 = size >> 1;
		return (1 << b1) * this.eP(size - b1) + this.eP(b1)
	}, this.eb = function(aJE) {
		return this.size === cp.a4f(aJE)
	}, this.jw = function(gz, ov, aJF) {
		var bD = this.eP(gz);
		if (!bD) return null;
		for (var gz = Math.max(bD, aJF), bq = new(ov <= 8 ? Uint8Array : ov <= 16 ? Uint16Array : Uint32Array)(gz), b0 = 0; b0 < bD; b0++) bq[b0] = this.eP(ov);
		aJF = bq[bD - 1];
		return aJF && bq.fill(aJF, bD), bq
	}, this.jx = function(gz, oz, aJF) {
		var bD = this.eP(gz);
		if (!bD) return null;
		for (var gz = Math.max(bD, aJF), bq = new Array(gz), b0 = 0; b0 < bD; b0++) bq[b0] = this.ju(oz);
		return bq.fill(bq[bD - 1], bD), bq
	}, this.ju = function(gz) {
		return c9.d3.ez(this.eP(gz))
	}, this.jv = function() {
		var bF = aV.aW.a4h(aV.aW.a4i(this.eP(30))),
			bF = bA.bB.p3(bF, "_", "/");
		bF = bA.bB.p3(bF, "-", "+");
		for (var aJG = "";
			(bF.length + aJG.length) % 4;) aJG += "=";
		bF = "data:image/png;base64," + bF + aJG;
		var jh = new Image;
		jh.onload = function() {
			jd.aFG.jg(jh), jh.onload = null, jh = null
		}, jh.src = bF
	}
}

function aJH() {
	this.bS = function(player) {
		return !!t.ul.s(player) && !(t.u.x[player] >= Math.max(3 * jN.performance.a4m, gw.w[gw.gx[player]]) || !bA.gc.t7(player, gw.rz[gw.gx[player]], 32, 0)) && (du.gT() ? function(player) {
			var aJN = t.a6.gW(),
				az = aJN.length;
			if (0 === az) return !1;
			aJN = aJN[hL.s9(az)], az = t.u.oF[aJN];
			if (t.ud.ue(player, az)) return !1;
			return !! function(player, ug) {
				var ug = a8.l0(t.u.uk[ug]),
					kR = a8.jQ(ug),
					ug = a8.jR(ug),
					yS = z.l7[player],
					u1 = z.l9[player],
					a0J = z.l8[player],
					player = z.lA[player],
					a0J = Math.max(kR - a0J, yS - kR),
					yS = Math.max(ug - player, u1 - ug);
				return a0J < 100 && yS < 100
			}(player, aJN) && !!t.vw.aJP(player, az, 1) && (bA.gc.tO(player), t.u.up(player), !0)
		}(player) : !!(jN.aJJ.bS(player) || jN.aJK.bS(player) || jN.aJL.bS(player)) && (function(player) {
			a4.a5[1] = 4, bA.gc.tO(player), t.u.up(player)
		}(player), !0))
	}
}

function aJR() {
	var aJS, aJT;

	function aJY() {
		(aJS = new WebSocket("wss://territorial.io/s52/")).onopen = aJb, aJS.onclose = function() {
			aJc()
		}
	}

	function aJb() {
		if (aJS && aJS.readyState === aJS.OPEN) {
			var c1 = new a3N;
			c1.ck(1608), c1.cq(1, 0), c1.cq(6, 7), c1.cq(2, dY ? dY.id : 3), c1.cq(1, jo.aJd ? 1 : 0), c1.cq(1, jo.aJe ? 1 : 0), c1.cq(1, jo ? jo.a3u : 0);
			for (var b0 = 0; b0 < aJT.length && b0 < 228; b0++) c1.cq(7, aJT.charCodeAt(b0) % 128);
			aJS.send(c1.cs), aJc()
		}
	}

	function aJc() {
		aJS && (aJS.onclose = null, aJS.onopen = null, aJS = null)
	}
	window.addEventListener("error", function aJU(iG) {
		aJT = "";
		try {
			return window.removeEventListener("error", aJU), aJT = iG.lineno + " " + iG.colno + "|" + function(iG) {
				if (!iG.error) return "NoStack";
				var stack = iG.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, cH = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = cH.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(iG), __fx.reportError(iG, aJT), alert("Error:\n" + iG.filename + " " + iG.lineno + " " + iG.colno + " " + iG.message)
		} catch (iG) {
			aJT = "SE|" + aJT + "|" + iG, console.log(aJT), alert(aJT)
		}
		aJY()
	})
}

function a2x() {
	function aJj(player) {
		var g8;
		bA.gc.si(player) && (g8 = z.gA[player] - z.t4[player] + o4.sd(player), gq.sW(player, Math.abs(g8), g8 < 0 ? 18 : 12)), z.gA[player] = 0, z.t4[player] = 0
	}

	function aJp() {
		e5.show(!1, !1, !1, !0), du.g1(), gX.wU.wV()
	}

	function aJg(player, sn) {
		for (var b0 = sn.length - 1; 0 <= b0; b0--) o4.sX(sn[b0], player)
	}

	function aJh(player) {
		var l7 = z.l7,
			l8 = z.l8,
			l9 = z.l9,
			lA = z.lA,
			fR = cd.fR;
		if (z.fo[player]) {
			z.fo[player] = 0;
			for (var yS = l7[player], u1 = l9[player], fW = l8[player]; yS <= fW; fW--)
				for (var fX = lA[player]; u1 <= fX; fX--) {
					var j6 = 4 * (fX * fR + fW);
					aA.a4C(player, j6) && aA.a91(j6)
				}
		}
		l8[player] = lA[player] = 0, l7[player] = l9[player] = Math.max(fR, cd.fS)
	}
	this.cJ = function(j6) {
		var player, g8 = z.fo[j6] + z.aEe[j6];
		t.u.x[j6] ? g8 && (aJg(player = j6, o4.sm(player)), aJh(player), wZ.aJi(player), o4.clear(player), aJj(player), function(player) {
			z.aEe[player] = 0, z.ga[player] = [], z.w4[player] = [], z.a0[player] = [], z.aJl[player] = []
		}(player)) : !g8 && z.ga[j6].length || this.aI0(j6)
	}, this.aI0 = function(player) {
		! function(player) {
			bA.gc.mN(player) || (z.wR[player] = eW.wS.wT(), c.fn++);
			var sn = o4.sm(player);
			0 === sn.length ? bA.gc.ss(player) && aJp() : (aJg(player, sn), function(player, sn) {
				var aJs = sn[function(sn) {
					var b0, cE = 0;
					for (b0 = sn.length - 1; 1 <= b0; b0--) z.fo[sn[b0]] > z.fo[sn[cE]] && (cE = b0);
					return cE
				}(sn)];
				9 === c.d && (1 === jG.jJ[player] ? hL.aJt(8) && sA.aGT(aJs) : gw.gx[player] && (e.j5(765, 0), e.j9(280, L(383, [z.jA[aJs], z.jA[player]]), 765, aJs, aG.ik, aG.aEC, -1, !0)));
				if (bA.gc.ss(player)) aJp(), e.sk(aJs, 1);
				else {
					for (var b0 = sn.length - 1; 0 <= b0; b0--)
						if (bA.gc.si(sn[b0]) && (gq.gr[4 - bA.gc.mN(player)]++, bA.gc.ss(sn[b0]))) return e.sk(player, 0);
					bA.gc.mN(player) || e.aAL(0, player, aJs)
				}
			}(player, sn))
		}(player), aJh(player), aJj(player),
			function(player) {
				z.bZ[player] = 0, z.ga[player] = null, z.w4[player] = null, z.a0[player] = null, z.aJl[player] = null
			}(player), wZ.aJi(player), o4.clear(player), t.aJo.yW(player)
	}
}

function aGi(a5C, data) {
	var az = data.aGg.length,
		aJu = document.createElement("div"),
		aJv = document.createElement("div"),
		pV = document.createElement("div"),
		aJw = new Array(az),
		i2 = new Array(az),
		aJx = new Array(data.mn.length),
		aJy = bA.color.nZ(70, 70, 0, .35);

	function a0W() {
		this.style.backgroundColor = bA.color.a0W(aJy, 160)
	}

	function aK2() {
		this.style.backgroundColor = aJy
	}

	function a6W() {
		var bE;
		for (a5C.style.font = bA.fu.fv(0, bA.fu.aK4(.026, .5, .03)), b0 = 1; b0 < aJx.length; b0++) bA.fu.lj(aJx[b0], 4);
		if (bA.fu.lj(aJu, 2), az) {
			for (var vn, eF = aJu.offsetWidth, eH = pV.offsetWidth, b0 = 0; b0 < aJx.length; b0++) vn = .01 * data.aGh[b0] * eH, aJx[b0].style.width = (100 * vn / eF).toFixed(2) + "%";
			var c6 = data.aGg[0].length;
			for (b0 = 0; b0 < az; b0++)
				for (bA.fu.lj(aJw[b0], 2), bE = 1; bE < c6; bE++) bA.fu.lj(i2[b0][bE], 4);
			aJv.aJz && (aJv.scrollTop = aJv.aJz)
		}
	}
	this.resize = function() {
			a6W(), a6W()
		}, a5C.style.display = "flex", a5C.style.flexDirection = "column", aJv.style.overflowX = "hidden", aJv.style.overflowY = "auto", aJv.addEventListener("scroll", function() {
			this.aJz = this.scrollTop
		}),
		function() {
			var ca, b0, aGg = data.aGg,
				c6 = az ? aGg[0].length : 0;
			for (b0 = 0; b0 < az; b0++) {
				aJw[b0] = document.createElement("div"), aJw[b0].style.backgroundColor = function(b0) {
					return b0 % 2 == 1 ? bA.color.nZ(130, 130, 130, .35) : aG.vC
				}(b0), aJw[b0].style.width = "100%", aJw[b0].style.display = "flex", i2[b0] = new Array(c6);
				for (var bE = 0; bE < c6; bE++) i2[b0][bE] = ca = document.createElement("div"), ca.style.display = "flex", ca.style.justifyContent = "center", ca.style.wordBreak = "break-all", ca.style.padding = "0.4em 0em", ca.style.width = data
					.aGh[bE] + "%", ca.innerHTML = aGg[b0][bE].c8, 1 === aGg[b0][bE].g8 && (ca.name = "" + b0, ca.style.color = aG.aO, ca.style.backgroundColor = aJy, ca.addEventListener("mouseover", a0W), ca.addEventListener("mouseout", aK2),
						function(ca, aY, aBv) {
							2147483647 !== aBv && ca.addEventListener("click", function() {
								cp.ck(30), cp.cq(30, aY), eO.b(cp.cs), this.style.backgroundColor = aJy, cT.iD(8, cT.cU, new mm(25, {
									d2: 0,
									aY: aV.aW.a4h(aV.aW.a4i(5)),
									aBv: aBv
								}))
							})
						}(ca, aGg[b0][bE].aY, aGg[b0][bE].aBv)), aJw[b0].appendChild(ca)
			}
			for (aJu.style.display = "flex", aJu.style.backgroundColor = bA.color.nZ(0, 120, 0, .35), b0 = 0; b0 < aJx.length; b0++) aJx[b0] = ca = document.createElement("div"), ca.style.display = "flex", ca.style.justifyContent = "center", ca.style
				.wordBreak = "break-all", ca.style.padding = "0.4em 0em", ca.style.width = data.aGh[b0] + "%", ca.innerHTML = data.mn[b0], aJu.appendChild(ca)
		}();
	for (var b0 = 0; b0 < az; b0++) pV.appendChild(aJw[b0]);
	aJv.appendChild(pV), a5C.appendChild(aJu), a5C.appendChild(aJv)
}

function td() {
	var aK5 = [];

	function aK7(aY) {
		aK5.unshift(aY), cy.ep.eq(161, aK5.join(";"))
	}

	function aK6(aY) {
		for (var aK8 = aK5, az = aK8.length, b0 = 0; b0 < az; b0++)
			if (aK8[b0] === aY) return aK8.splice(b0, 1), cy.ep.eq(161, aK8.join(";")), 1
	}
	this.b = function() {
		var bF = cy.cz.data[161].value;
		bF.length && (aK5 = bF.split(";"))
	}, this.get = function() {
		return aK5
	}, this.aCT = function() {
		return {
			iB: aK5,
			value: 0
		}
	}, this.xF = function(aY) {
		return bA.c3.has(aK5, aY)
	}, this.aCe = function(aY) {
		return aK6(aY) ? 0 : (aK7(aY), 1)
	}, this.tt = function(aY) {
		aK6(aY) && aK7(aY)
	}, this.aCS = function(cE) {
		cE < aK5.length && (aK5.splice(cE, 1), cy.ep.eq(161, aK5.join(";")))
	}
}

function aK9() {
	this.bS = function(player, a08) {
		player = t.a6.a01(player, a08);
		return !(player < 0 || !t.ud.a1V(player) || (t.ud.a1I(player), 0))
	}
}

function a3c() {
	var gap, aKA = !1,
		a7p = 0,
		c1 = 0,
		eF = 0,
		canvas = null,
		fV = null,
		aKB = null;

	function aKF() {
		for (var b0 = c.a7w; 0 <= b0; b0--) aKB[b0] = 0;
		for (b0 = bc.bd - 1; 0 <= b0; b0--) aKB[jG.jJ[bc.gb[b0]]] += z.fo[bc.gb[b0]];
		aKA = !0
	}

	function aKD() {
		for (var aKK, aKI = 0, az = 0, dI = Math.floor(c1 / 2), ij = Math.floor(eF / 2), aKJ = 1.5 * Math.PI, b0 = c.a7w; 0 <= b0; b0--) az += aKB[b0], 0 === aKB[b0] && aKI++;
		if (aKA = !1, fV.clearRect(0, 0, c1, c1), 0 < az)
			if (aKI === c.a7w) {
				for (b0 = c.a7w; 0 <= b0; b0--)
					if (0 < aKB[b0]) {
						! function(b0, dI, ij) {
							fV.fillStyle = jG.aKR[jG.jH[b0]], fV.beginPath(), fV.arc(dI, dI, ij, 0, 2 * Math.PI), fV.fill()
						}(b0, dI, ij);
						break
					}!
				function(dI) {
					var fontSize = dI / 3;
					fV.font = bA.fu.fv(1, fontSize), fV.fillStyle = aG.am, fV.fillText("100%", dI, dI + .1 * fontSize)
				}(dI)
			} else {
				for (b0 = 0; b0 <= c.a7w; b0++) 0 < aKB[b0] && (! function(b0, dI, ij, aKJ, aKK) {
					fV.fillStyle = jG.aKR[jG.jH[b0]], fV.beginPath(), fV.arc(dI, dI, ij, aKJ, aKK), fV.lineTo(dI, dI), fV.fill()
				}(b0, dI, ij, aKJ, aKK = aKJ + 2 * Math.PI * aKB[b0] / az), function(dI, ij, aKJ, aKK) {
					var c8 = (aKK - aKJ) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * ij * Math.min(c8, .37);
					fontSize < 8 || (aKJ = (aKJ + aKK) / 2, aKK = (__fx.settings.detailedTeamPercentage ? (100 * c8).toFixed(2) : Math.floor(100 * c8 + .5)) + "%", ij *= .525 - Math.max(.6 * (c8 - .7), 0), fV.font = bA.fu.fv(1, fontSize), fV
						.fillStyle = aG.am, fV.fillText(aKK, dI + Math.cos(aKJ) * ij, dI + Math.cos(aKJ + 1.5 * Math.PI) * ij))
				}(dI, ij, aKJ, aKK), 0 !== b0 && aKP(dI, ij, aKJ), aKJ = aKK);
				aKP(dI, ij, 1.5 * Math.PI)
			}!
		function(dI, ij) {
			fV.beginPath(), fV.arc(dI, dI, ij, 0, 2 * Math.PI), fV.stroke()
		}(dI, ij)
	}

	function aKP(dI, ij, yh) {
		fV.beginPath(), fV.moveTo(dI, dI), fV.lineTo(dI + Math.cos(yh) * ij, dI + Math.cos(yh + 1.5 * Math.PI) * ij), fV.stroke()
	}
	this.b = function() {
		if (c.gQ) {
			a7p = 0, aKB = new Uint32Array(c.a7w + 1);
			for (var b0 = c.a7w; 0 <= b0; b0--) aKB[b0] = 0;
			for (b0 = bc.bd - 1; 0 <= b0; b0--) aKB[jG.jJ[bc.gb[b0]]] += 1;
			this.resize()
		} else aKB = fV = canvas = null
	}, this.aGF = function() {
		return c1
	}, this.resize = function() {
		c.gQ && (c1 = Math.floor(.95 * (dY.dc.fs() && !c.mI ? .18 * eE.min : .13 * eE.dP)), c1 = (c1 *= 1 + (.5 + .2 * dY.dc.fs()) * c.mI) + c1 % 2, gap = Math.max(1, .015 * c1), eF = Math.floor(c1 - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = c1, canvas.height = c1, (fV = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, fV.strokeStyle = aG.am, bA.fu.textAlign(fV, 1), bA.fu.textBaseline(fV, 1), aKD())
	}, this.gR = function(aKE) {
		aKE && aKF();
		var g8, aKE = this.jF();
		return jG.jH[aKE] || (aKE = function() {
			for (var sx = -1, b0 = c.a7w; 1 <= b0; b0--)(-1 === sx || aKB[b0] > aKB[sx]) && (sx = b0);
			return sx
		}(), g8 = z.fo[gS[0]], -1 !== aKE && aKB[aKE] > g8) ? aKB[aKE] : g8
	}, this.aEU = function() {
		return a7p = 31, this.bS(), this.jF()
	}, this.jF = function() {
		for (var sx = 0, b0 = c.a7w; 0 < b0; b0--) aKB[b0] > aKB[sx] && (sx = b0);
		return sx
	}, this.a4r = function(aKH) {
		for (var bD = 0, gb = bc.gb, jJ = jG.jJ, az = bc.bd, lP = a4.lP, b0 = 0; b0 < az; b0++) {
			var j6 = gb[b0];
			jJ[j6] === aKH && (lP[bD++] = j6)
		}
		a4.lF[0] = bD
	}, this.a1h = function(aKH) {
		for (var bD = 0, gb = bc.gb, jJ = jG.jJ, az = bc.bd, lP = a4.lP, b0 = 0; b0 < az; b0++) {
			var j6 = gb[b0];
			jJ[j6] !== aKH && (lP[bD++] = j6)
		}
		a4.lF[0] = bD
	}, this.sv = function() {
		for (var bD = 0, b0 = c.a7w; 0 <= b0; b0--) bD += 0 < aKB[b0];
		return bD
	}, this.bS = function() {
		c.gQ && 32 <= ++a7p && (a7p = 0, aKF())
	}, this.tt = function() {
		c.gQ && aKA && aKD()
	}, this.gl = function() {
		c.gQ && (c.mI ? dZ.drawImage(canvas, di.gap, di.gap) : dZ.drawImage(canvas, di.gap, aGE + 2 * di.gap))
	}
}

function a2r() {
	var aKS, aKT, aKU, aKV, aKW, aKX, aKY, aKZ, aKa, aKb, aKc, aKd, aKe, aKf, aKg, aKh, aKi, aKj, aKk, aKl, aKm, aKn, position, aKo, aKp, aKq, aKr, aKs, aKt = 1,
		a6U = 1,
		aKu = "";
	var leaderboardHasChanged = true;
	this.playerPos = c.ba;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jE[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jE[c.ba]);
	}

	function aKw() {
		aKY.clearRect(0, 0, aKS, aGE),
			aKY.fillStyle = aKs ? aG.aE2 : aG.aDz,
			aKY.fillRect(0, 0, aKS, aKd),
			aKY.fillStyle = aG.m4,
			aKY.fillRect(0, aKd, aKS, aGE - aKd);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jE[c.ba]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aKn = -1;
		if (__fx.leaderboardFilter.enabled && aKn >= __fx.leaderboardFilter.filteredLeaderboard.length) aKn = -1;
		playerPos >= position && aKy(playerPos - position, aG.yQ),
			0 !== jE[c.ba] && 0 === position && aKy(0, aG.aE4),
			-1 !== aKn && aKy(aKn, aG.m5),
			aKY.fillStyle = aG.m4,
			//console.log("drawing", aKn),
			aKY.clearRect(0, aGE - __fx.leaderboardFilter.tabBarOffset, aKS, __fx.leaderboardFilter.tabBarOffset);
		aKY.fillRect(0, aGE - __fx.leaderboardFilter.tabBarOffset, aKS, __fx.leaderboardFilter.tabBarOffset);
		aKY.fillStyle = aG.am,
			aKY.fillRect(0, aKd, aKS, 1),
			aKY.fillRect(0, aGE - __fx.leaderboardFilter.tabBarOffset, aKS, 1),
			__fx.leaderboardFilter.drawTabs(aKY, aKS, aGE - __fx.leaderboardFilter.tabBarOffset, aG.yQ),
			aKY.fillRect(0, 0, aKS, di.ig),
			aKY.fillRect(0, 0, di.ig, aGE),
			aKY.fillRect(aKS - di.ig, 0, di.ig, aGE),
			aKY.fillRect(0, aGE - di.ig, aKS, di.ig), aKY.font = aKT, bA.fu.textBaseline(aKY, 1), bA.fu.textAlign(aKY, 1), aKY.fillText(aKu, Math.floor((aKS + aKd - 22) / 2), Math.floor(aKb + aKU / 2));
		__fx.playerList.drawButton(aKY, 12, 12, aKd - 22);
		var bE, cX = playerPos < position + aKW - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aKW)
				position = (result.length > aKW ? result.length : aKW) - aKW;
			//if (position >= result.length) position = result.length - 1;
			for (aKY.font = aKV, bA.fu.textAlign(aKY, 0), bE = aKW - cX; 0 <= bE; bE--) {
				const pos = result[bE + position];
				if (pos !== undefined)
					aKz(gS[pos]), aL0(bE, pos, gS[pos]);
			}
			for (bA.fu.textAlign(aKY, 2), bE = aKW - cX; 0 <= bE; bE--) {
				const pos = result[bE + position];
				if (pos !== undefined)
					aKz(gS[pos]), aL1(bE, gS[pos]);
			}
		} else {
			for (aKY.font = aKV, bA.fu.textAlign(aKY, 0), bE = aKW - cX; 0 <= bE; bE--)
				aKz(gS[bE + position]), aL0(bE, bE + position, gS[bE + position]);
			for (bA.fu.textAlign(aKY, 2), bE = aKW - cX; 0 <= bE; bE--)
				aKz(gS[bE + position]), aL1(bE, gS[bE + position]);
		}
		2 == cX && (aKz(c.ba), bA.fu.textAlign(aKY, 0), aL0(aKW - 1, jE[c.ba], c.ba), bA.fu.textAlign(aKY, 2), aL1(aKW - 1, c.ba)), 0 === position && (cX = .7 * aKe / dg.get(4).height, aKY.setTransform(cX, 0, 0, cX, Math.floor(aKf + .58 * aKe + .5 *
			cX * dg.get(4).width), Math.floor(aKb + aKU + .4 * aKe)), aKY.imageSmoothingEnabled = !0, aKY.drawImage(dg.get(4), -Math.floor(dg.get(4).width / 2), -Math.floor(dg.get(4).height / 2)), aKY.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aKz(player) {
		c.gQ && (aKY.fillStyle = jG.aL3[jG.a5W[player]])
	}

	function aKy(b0, aL4) {
		aKY.fillStyle = aL4, b0 = aKW - 1 < b0 ? aKW - 1 : b0;
		aL4 = Math.floor((b0 === aKW - 1 ? 2 : 0 === b0 ? 1.15 : 1) * aKe), aL4 = b0 === aKW - 2 ? Math.floor(aKd + 9.15 * aKe) - Math.floor(aKd + 8.15 * aKe) : aL4;
		aKY.fillRect(0, Math.floor(aKd + (b0 + (0 === b0 ? 0 : .15)) * aKe), aKS, aL4)
	}

	function aL0(a50, at, b0) {
		aKY.fillText(aKj[at], aKf, Math.floor(aKb + aKU + (a50 + .5) * aKe)), 1 === z.sr[b0] && (aKY.font = "italic " + aKV);
		at = Math.floor(aKb + aKU + (a50 + .5) * aKe);
		aKY.fillText(z.jA[b0], aKg, at), 0 !== z.sr[b0] && (aKY.font = aKV), b0 < c.fl && 2 !== z.sr[b0] || aKY.fillRect(aKg, at + .35 * aKt, aKi[b0], Math.max(1, .1 * aKt))
	}

	function aL1(a50, b0) {
		aKY.fillText(z.fo[b0], aKh, Math.floor(aKb + aKU + (a50 + .5) * aKe))
	}
	this.b = function() {
		var b0;
		for (aKr = aKq = aKo = 0, aKs = aKp = !1, aKn = -1, aKW = dY.dc.fs() ? 6 : 10, a6U = (position = 0) === (a6U = cy.cz.data[11].value) ? 10 : 1 === a6U ? 5 : 1, aKm = !1, aKk = new Uint16Array(aKW + 1), aKl = new Uint32Array(aKW + 1), aKa =
			c.iC, gS = new Uint16Array(aKa), jE = new Uint16Array(aKa), b0 = aKa - 1; 0 <= b0; b0--) gS[b0] = b0, jE[b0] = b0;
		this.resize(!0), aKi = new Uint16Array(c.iC);
		var aKv = Math.floor(aKS - aKg - aKf - aKZ);
		for (aKj = new Array(c.iC), aKY.font = aKV, b0 = c.iC - 1; 0 <= b0; b0--) aKj[b0] = b0 + 1 + ".", z.jA[b0] = bA.fV.g0(z.a18[b0], aKV, aKv), aKi[b0] = Math.floor(aKY.measureText(z.jA[b0]).width);
		aKw()
	}, this.resize = function(b) {
		if (aGE = dY.dc.fs() ? (aKS = Math.floor(.335 * eE.dP), Math.floor(aKW * aKS / 8)) : (aKS = Math.floor(.27 * eE.dP), Math.floor(aKW * aKS / 10)), aKS = Math.floor(.97 * aKS), (aKX = document.createElement("canvas")).width = aKS, aKX
			.height = aGE, aKY = aKX.getContext("2d", {
				alpha: !0
			}), aKb = .025 * aKS, aKU = .16 * aKS, aKc = 0 * aKS, aKd = Math.floor(.45 * aKb + aKU), aKe = (aGE - aKU - 2 * aKb - aKc) / aKW,
			aKX.height = aGE += aKe, __fx.leaderboardFilter.tabBarOffset = Math.floor(aKe * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aGE - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aKS,
			aKT = bA.fu.fv(1, Math.floor(.55 * aKU)), aKt = Math.floor((dY.dc.fs() ? .67 : .72) * aKe), aKV = bA.fu.fv(0, aKt), aKY.font = aKV, aKf = Math.floor(.04 * aKS), aKg = Math.floor((dY.dc.fs() ? .195 : .18) * aKS), aKZ = Math.floor(aKY
				.measureText("00920600").width), aKY.font = aKT, aKh = aKS - aKf, !b) {
			aKY.font = aKV;
			for (var b0 = c.iC - 1; 0 <= b0; b0--) aKi[b0] = Math.floor(aKY.measureText(z.jA[b0]).width);
			aKw()
		}
		aKu = bA.fV.g0(L(384), aKT, .96 * aKS)
	}, this.aHZ = function() {
		return aKS
	}, this.g4 = function(dJ, aKx) {
		(aKx || aKm && (dJ || bT.bU() % a6U == 0)) && (aKm = !1, aKw())
	}, this.bS = function() {
		! function() {
			for (var bE = aKa - 1; 0 <= bE; bE--) 0 === z.bZ[gS[bE]] && ! function(bE) {
				var aLB = gS[bE];
				aKa--;
				for (var b0 = bE; b0 < aKa; b0++) gS[b0] = gS[b0 + 1], jE[gS[b0]] = b0;
				gS[aKa] = aLB, jE[gS[aKa]] = aKa
			}(bE)
		}();
		for (var aL9, os = aKa - 1, bE = 0; bE < os; bE++) z.fo[gS[bE]] < z.fo[gS[bE + 1]] && (aL9 = gS[bE], gS[bE] = gS[bE + 1], gS[bE + 1] = aL9, jE[gS[bE]] = bE, jE[gS[bE + 1]] = bE + 1);
		! function() {
			for (var g8 = aKm, cX = (aKm = !0, jE[c.ba] >= aKW - 1 ? aKW - 2 : aKW - 1), b0 = cX; 0 <= b0; b0--)
				if (aKk[b0] !== gS[b0] || aKl[b0] !== z.fo[gS[b0]]) return;
			(cX != aKW - 2 || aKk[aKW] === jE[c.ba] && aKl[aKW] === z.fo[c.ba]) && (aKm = g8)
		}();
		for (var b0 = aKW - 1; 0 <= b0; b0--) aKk[b0] = gS[b0], aKl[b0] = z.fo[gS[b0]];
		aKk[aKW] = jE[c.ba], aKl[aKW] = z.fo[c.ba];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.io = function(fW, fX) {
		if (aLC(fW, fX)) {
			if (__fx.utils.isPointInRectangle(fW, fX, di.gap + 12, di.gap + 12, aKd - 22, aKd - 22)) __fx.playerList.display(z.a18);
			else {
				if (fX - di.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fW - di.gap);
				fW = aLE(fX);
				0 <= fW ? (aKo = bT.db, aKp = !0, aKq = aKr = fW, vD.a9l() && (fW = yG(-1, aKr, aKW), aKn !== (fW = fW === aKW ? -1 : fW)) && (aKn = fW, aKw(), bT.eA = !0)) : (aKs && (aKs = !1, aKw(), bT.eA = !0), cT.iD(10, 0, new aGZ({
					aGb: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aKw(), bT.eA = !0
	};

	function aLE(fX) {
		return (fX -= di.gap + aKd) < 0 ? Math.floor(fX / aKe) - 1 : fX < (aKW - 1) * aKe ? Math.floor(fX / aKe) : fX < aGE - aKd ? aKW - 1 : (fX -= aGE - aKd, aKW + Math.floor(fX / aKe))
	}

	function aLC(fW, fX) {
		return fW >= di.gap && fW < di.gap + aKS && fX >= di.gap && fX < di.gap + aGE
	}
	this.is = function(fW, fX) {
		var g8, aLD;
		if (__fx.utils.isPointInRectangle(fW, fX, di.gap + 12, di.gap + 12, aKd - 22, aKd - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fW, fX, di.gap, di.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fW - di.gap)) return aLD = aLE(fX), fW = aLC(fW, fX), fX = !(!(aLD < 0 && fW) || vD.a9l()), aKp ? (g8 = position, (position = yG(0, position += aKq - aLD, c.iC - aKW)) !== g8 ? (aKs = fX,
			aLD = yG(-1, aKq = aLD, aKW), aKn = aLD = aLD !== aKW && fW ? aLD : -1, aKw(), bT.eA = !0) : aKs !== fX && (aKs = fX, aKw(), bT.eA = !0), !0) : (aLD = (aLD = yG(-1, aLD, aKW)) === aKW || !fW || vD.a9l() ? -1 : aLD, (aKn !==
			aLD || aKs !== fX) && (aKn = aLD, aKs = fX, aKw(), bT.eA = !0))
	}, this.a7g = function(fW, fX) {
		if (!aKp) return !1;
		aKp = !1;
		var aLD = aLE(fX);
		var isEmptySpace = false;
		return vD.a9l() && -1 !== aKn && (aKn = -1, aKw(), bT.eA = !0), bT.db - aKo < 350 && aKr === aLD && -1 !== (aLD = (aLD = yG(-1, aLD, aKW)) !== aKW && aLC(fW, fX) ? aLD : -1) && (fW = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				gS[__fx.leaderboardFilter.filteredLeaderboard[aLD + position] ?? (isEmptySpace = true, jE[c.ba])]) : gS[aLD + position]), aLD === aKW - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jE[c.ba]) >=
			position + aKW - 1 && (fW = c.ba), !isEmptySpace && c.gQ && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fW, z.a18, c.fk), 0 !== z.bZ[fW] && !isEmptySpace) && wg.aAA(fW, 800, !1, 0), !0
	}, this.it = function(fW, fX, deltaY) {
		var aLH;
		return !(aKp || c.mI || (aLH = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aLC(fW, fX)) || (fW = (fW = yG(-1, aLE(fX), aKW)) === aKW || vD.a9l() ? -1 : fW, 0 < deltaY ? position < c.iC - aKW && (position += Math.min(c.iC - aKW -
			position, aLH), aKn = fW, aKw(), bT.eA = !0) : 0 < position && (position -= Math.min(position, aLH), aKn = fW, aKw(), bT.eA = !0), 0))
	}, this.gl = function() {
		dZ.drawImage(aKX, di.gap, di.gap)
	}
}

function a3I() {
	var aLI = 0,
		aLJ = !0;

	function aLK(id) {
		id = [L(385), L(386), L(387), L(388)][id];
		e.aAe(id)
	}
	this.bS = function() {
		var g8, aEo;
		bT.db < aLI || (aLI = bT.db + 5e3, c.bV) || c.fk || bA.gc.gd(c.ba) || (g8 = new Date, aEo = g8.getUTCSeconds(), aLJ ? aEo < 50 && (aLJ = !1) : aEo < 50 || (aLJ = !0, (aEo = (g8.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == aEo || 20 ==
			aEo || 40 == aEo ? c.d < 7 && aLK(0) : 10 == aEo || 30 == aEo || 50 == aEo ? 7 !== c.d && 10 !== c.d || aLK(1) : 5 == aEo || 25 == aEo || 45 == aEo ? 8 === c.d && aLK(2) : 35 == aEo && 9 === c.d && aLK(3))))
	}
}

function aLL() {
	this.aLM = function() {
		for (var az = c.fl, a0o = gX.result.a0o, c6 = a0o.length, wR = (cp.ck(17 + 16 * az + 33 * c6), cp.cq(1, 1), cp.cq(4, 12), cp.cq(10, c6), cp.cq(1, +(2 === c.a0t)), cp.cq(1, c.aET % 2), z.wR), b0 = 0; b0 < az; b0++) cp.cq(16, wR[b0]);
		for (var fo = z.fo, b0 = 0; b0 < c6; b0++) {
			var j6 = a0o[b0];
			cp.cq(9, j6), cp.cq(24, fo[j6])
		}
		bW.u.send(bW.u.xa, cp.cs)
	}
}

function aLN() {
	this.eT = function(player, jM) {
		a2B.aLO(player, a8.jQ(jM), a8.jR(jM)) && (bT.eA = !0), c.fk && this.bS()
	}, this.bS = function() {
		c.g3 = !1;
		for (var b0 = 0; b0 < c.fl; b0++) 0 !== z.bZ[b0] && 0 === z.fo[b0] && a2B.aLP(b0);
		0 !== z.bZ[c.ba] ? (gq.gr[7] = z.fo[c.ba], gq.gr[8] = z.gA[c.ba], dw.aDd(), du.fx(), c.bV || wg.aAB(z.l7[c.ba] - 5, z.l9[c.ba] - 5, z.l8[c.ba] + 5, z.lA[c.ba] + 5), wh.b()) : e5.show(!1, !1, !1, !0), e.uC(18), e4.a6i(), e4.g4(!0), wc.u
			.a7v(), e2.iK(), c.aI1 = null, mB.aEg = !0, mB.aEj(), c.fk && dY.dc.setState(1)
	}
}

function a3U() {
	this.gY = new a1W, this.result = new aLQ, this.aLR = new aI5, this.a1a = new aIj, this.a1Z = new aER, this.wU = new a0m, this.b = function() {
		this.result.b()
	}
}

function tZ() {
	function aLS(b0, type, qA, mb) {
		cy.cz.data.push({
			cE: b0,
			type: type || 0,
			value: qA || 0,
			qA: qA || 0,
			mb: mb || 0
		})
	}

	function aLT(b0, type, qA, mb) {
		cy.cz.data.push({
			cE: b0,
			type: type,
			value: qA || "",
			qA: qA || "",
			mb: mb || 0
		})
	}

	function aLU(os) {
		for (var b0 = cy.cz.data.length; b0 < os; b0++) cy.cz.data.push(null)
	}
	this.data = [], this.b = function() {
		aLS(0, 1, 0, 5), aLS(1, 1, 1), aLS(2, 0), aLT(3, 2), aLS(4, 1), aLT(5, 2, "Trebuchet MS", 1), aLS(6, 0), aLS(7, 0, 0), aLS(8, 0), aLS(9, 1, 1), aLS(10, 1), aLS(11, 1, 1), aLT(12, 2, navigator.language), aLS(13), aLS(14), aLU(100), aLT(
				100, 2), aLT(101, 2), aLT(102, 2), aLT(103, 2), aLT(104, 2), aLT(105, 2), aLT(106, 2), aLS(107), aLS(108), aLS(109), aLT(110, 2), aLS(111), aLS(112), aLS(113), aLT(114, 2), aLS(115), aLT(116, 2), aLS(117, 1), aLT(118, 2, "", 2),
			aLS(119, 1, 0, 1), aLT(120, 2), aLS(121, 1, ~~(262144 * Math.random())), aLT(122, 2, "Player " + Math.floor(1e3 * Math.random())), aLS(123), aLT(124), aLS(125, 1), aLT(126, 2), aLS(127, 0, 1), aLS(128), aLS(129), aLS(130), aLS(131),
			aLS(132), aLT(133, 2), aLS(134, 0, 5), aLT(135, 2), aLT(136, 2), aLS(137), aLS(138), aLS(139), aLS(140), aLS(141), aLS(142), aLS(143), aLS(144), aLT(145, 2), aLS(146), aLS(147), aLT(148, 2), aLS(149), aLS(150, 0, 1), aLT(151, 2), aLS(
				152, 0, 5), aLS(153, 1), aLS(154, 1), aLT(155, 2), aLT(156, 2), aLS(157), aLS(158), aLS(159), aLS(160), aLT(161, 2), aLS(162, 0, 1024), aLT(163, 2, "0,0,0"), aLT(164, 2, "100,100,100"), aLT(165, 2, "30,30,30"), aLT(166, 2,
				"70,70,70"), aLT(167, 2, "100,100,100"), aLT(168, 2, "85,85,85"), aLT(169, 2, "100,100,100");
		for (var b0 = 0; b0 < 4; b0++) aLT(170 + b0, 2, "255,255,255");
		aLT(174, 2), aLT(175, 2), aLS(176, 0, 200), aLU(180), aLS(180, 0), aLS(181, 0)
	}, this.eq = function(cE, value) {
		this.data[cE].value = value
	}, this.aLV = function(cE, value) {
		this.eq(cE, value);
		var value = String(value),
			az = value.length;
		5e4 < az ? console.log("storage value too large: index " + cE + " size " + az) : (cy.iN.save(cE, value), cy.iN.save(cE, String(this.data[cE].mb), !0))
	}, this.aLW = function(cE) {
		return Number(this.data[cE].value)
	}, this.aLX = function(cE) {
		return String(this.data[cE].value)
	}
}

function aLY() {
	this.aEZ = function(c8) {
		return [c8 >> 12 & 63, c8 >> 6 & 63, 63 & c8]
	}, this.aLZ = function(c8) {
		for (var bq = this.aEZ(c8), b0 = 0; b0 < 3; b0++) bq[b0] = ~~(4.05 * bq[b0]);
		return bq
	}, this.aJ4 = function(c8) {
		c8 = this.aLZ(c8);
		return bA.color.z9(c8[0], c8[1], c8[2])
	}, this.aLa = function(bq) {
		for (var b0 = 0; b0 < 3; b0++) bq[b0] = ~~(bq[b0] / 4.04);
		return (bq[0] << 12) + (bq[1] << 6) + bq[2]
	}, this.z9 = function(ij, gi, b1) {
		return "rgb(" + ij + "," + gi + "," + b1 + ")"
	}, this.nZ = function(ij, gi, b1, bE) {
		return "rgba(" + ij + "," + gi + "," + b1 + "," + bE.toFixed(3) + ")"
	}, this.aLb = function(dI) {
		for (var bq = dI.split("(")[1].split(","), lJ = a4.lJ, b0 = 0; b0 < 3; b0++) lJ[b0] = parseInt(bq[b0]);
		return 4 === bq.length ? lJ[3] = 255 * parseFloat(bq[3].slice(0, -1)) : lJ[3] = 255, lJ
	}, this.a0W = function(aLc, ca) {
		for (var bq = aLc.slice(aLc.indexOf("(") + 1, aLc.indexOf(")")).split(","), lJ = a4.lJ, b0 = 0; b0 < 3; b0++) lJ[b0] = p.q(parseInt(bq[b0].trim(), 10) + ca, 0, 255);
		return 3 === bq.length ? this.z9(lJ[0], lJ[1], lJ[2]) : (aLc = parseFloat(bq[3].trim()), this.nZ(lJ[0], lJ[1], lJ[2], aLc = 0 === aLc ? .3 : aLc))
	}, this.zA = function(aLd, aLe) {
		for (var i = 0, b0 = 0; b0 < 3; b0++) i += Math.abs(aLe[b0] - aLd[b0]);
		if (!(240 <= i))
			for (b0 = 0; b0 < 3; b0++) aLe[b0] = aLd[b0] + (aLd[b0] < 128 ? 80 : -80)
	}, this.aLf = function(bq) {
		for (var bF = "#", b0 = 0; b0 < 3; b0++) {
			var ij = bq[b0].toString(16);
			bF += 1 === ij.length ? "0" + ij : ij
		}
		return bF
	}, this.aLg = function(bF) {
		var ij, gi;
		return bF.length < 7 ? aG.ik : (ij = parseInt(bF.slice(1, 3), 16), gi = parseInt(bF.slice(3, 5), 16), bF = parseInt(bF.slice(5, 7), 16), this.z9(ij, gi, bF))
	}
}

function aGe(d1) {
	var iP, aBt, i2;
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), aBt.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(L(389), [new hs("⬅️ " + L(33), function() {
		cT.aIs(10)
	})]), aBt = new hu(iP.hv, ((i2 = []).push(function() {
		var aCM, i6 = new i7,
			aIx = new iF(cy.cz.data[132], 1, function() {
				aCM.button.click()
			}),
			aIy = new iF(cy.cz.data[131], 1, function() {
				aIx.iG.focus()
			});
		i6.i8(L(373)), i6.iE(aIy), aIy.iG.style.marginBottom = "0.8em", i6.i8(L(374)), i6.iE(aIx);
		return aCM = new hs(L(372), function() {
			oE = Math.floor(aIy.iG.value), pl = Math.floor(aIx.iG.value);
			var pl, oE = {
				aLk: Math.min(oE, pl),
				he: Math.max(oE, pl)
			};
			cT.iD(8, cT.aBq(10).p6, new mm(21, {
				pk: d1.pk,
				oE: oE.aLk,
				pl: oE.he
			}))
		}, 0, 0, 1), i6.iE(new a5M([aCM.button])), i6
	}()), i2.push(function() {
		var aCM, i6 = new i7,
			aIx = new iF(cy.cz.data[134], 1, function() {
				aCM.button.click()
			}),
			aIy = new iF(cy.cz.data[133], 0, function() {
				aIx.iG.focus()
			});
		return i6.i8(1 === d1.pk ? L(390) : L(391)), i6.iE(aIy), aIy.iG.style.marginBottom = "0.8em", i6.i8(L(392)), i6.iE(aIx), aCM = new hs(L(372), function() {
			var aLl = aIy.iG.value.slice(0, 20),
				aLm = Math.abs(Math.floor(aIx.iG.value));
			cT.iD(8, cT.aBq(10).p6, new mm(22, {
				pk: d1.pk,
				aLl: aLl,
				aLm: aLm
			}))
		}, 0, 0, 1), i6.iE(new a5M([aCM.button])), i6
	}()), i2.push(function() {
		var aCM, i6 = new i7,
			aIx = new iF(cy.cz.data[152], 1, function() {
				aCM.button.click()
			}),
			aIy = new iF(cy.cz.data[151], 0, function() {
				aIx.iG.focus()
			});
		return i6.i8(L(393)), i6.iE(aIy), aIy.iG.style.marginBottom = "0.8em", i6.i8(L(392)), i6.iE(aIx), aCM = new hs(L(372), function() {
			var aLl = aIy.iG.value.slice(0, 5),
				aLm = Math.abs(Math.floor(aIx.iG.value));
			cT.iD(8, cT.aBq(10).p6, new mm(28, {
				pk: d1.pk,
				aLl: aLl,
				aLm: aLm
			}))
		}, 0, 0, 1), i6.iE(new a5M([aCM.button])), i6
	}()), i2))
}

function vA(uw) {
	var ux = document.createElement("div"),
		v2 = document.createElement("div");
	this.tt = function() {
			v2.textContent = "", ax.wx.iK(1);
			for (var aLn = document.createDocumentFragment(), aLo = ax.u.cV[0], ay = ax.ay.aw[aLo], cK = ax.ay.cK[aLo], b0 = 0; b0 < ay.length; b0++) ! function(aLn, b3, aLq, aLo) {
				var oZ = document.createElement("span");
				oZ.textContent = (aLq ? "🟢 " : "⚪ ") + ax.a6.an(b3, aLo), oZ.style.color = ax.a6.ap(b3.aq), oZ.style.cursor = "pointer", oZ.style.margin = "0.2em 0.2em 0.2em 0.2em", oZ.style.width = oZ.style.maxWidth = 2 === aLo ? "10em" :
					"9em", oZ.style.height = oZ.style.maxHeight = "1.4em", oZ.style.whiteSpace = "nowrap", oZ.style.overflow = "hidden", oZ.style.textOverflow = "ellipsis", oZ.style.font = "inherit", oZ.style.display = "inline-block", ax.a6.b2(
						b3) && (oZ.style.textDecoration = "underline"), b3.xF && (oZ.style.textDecorationLine = "underline", oZ.style.textDecorationStyle = "dotted");
				oZ.onclick = function(iG) {
					uw(iG, b3)
				}, vD.vE() || (oZ.onmouseover = function(iG) {
					ax.wx.wu(iG, b3, 1)
				}), aLn.appendChild(oZ)
			}(aLn, ay[b0], b0 < cK, aLo);
			v2.appendChild(aLn)
		}, this.show = function(a5C) {
			a5C.appendChild(ux)
		}, this.iK = function(a5C) {
			cT.removeChild(a5C, ux)
		}, this.resize = function() {
			v2.style.fontSize = bA.fu.pa(bA.fu.vQ(.02, .3))
		}, ux.style.top = "0", ux.style.left = "0", ux.style.width = ux.style.height = "100%", ux.style.overflowX = "hidden", ux.style.overflowY = "auto", ux.style.font = "inherit", v2.style.font = "inherit", v2.style.margin = "0.4em", ux
		.appendChild(v2)
}

function a2b() {
	this.iC = 512, this.sj = 15e8, this.aLr = 1e9, this.tM = 5e4, this.aHX = 512, this.aLs = 2, this.ba = 0, this.fl = 0, this.gO = 0, this.fm = 0, this.fn = 0, this.gu = 512, this.aLt = 512, this.t6 = 150, this.fk = !0, this.bV = 0, this.dr = 0,
		this.fp = 0, this.mI = !1, this.g3 = 0, this.aLu = 0, this.gQ = !1, this.a7w = 0, this.aLv = 0, this.d = 0, this.a9y = 0, this.aI1 = null, this.aAd = new a, this.gk = 30, this.a0t = 0, this.a17 = 0, this.aET = 0, this.aEV = 0, this.data =
		new cb, this.aGS = new n6, this.cm = 0, this.aLw = "", this.cl = function() {
			a4.b(), gX.b(), a2V.clear(), this.gO = this.fl = this.data.humanCount, this.fk = 1 === this.gO, this.mI = !1, this.bV = this.data.isReplay, this.d = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.a9y = this.data.isContest, this.gQ = this.d < 7 || 9 === this.d, this.d = 10 === this.d && this.fk ? 7 : this.d, this.d = 8 === this.d && 2 !== this.fl ? 7 : this.d, sA.b(), this
				.a7w = this.data.numberTeams, this.data.teamPlayerCount ? this.aLv = +(0 < this.data.teamPlayerCount[0]) : (this.aLv = 0, this.gQ && this.fk && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this
					.a7w + 1), c.aGS.n7())), this.gk = this.fl <= 2 ? 30 : this.fl <= 50 ? 40 : 50, this.aLu = this.g3 = this.data.selectableSpawn, this.aI1 = this.g3 ? new aLN : null, 1 === jo.oR ? this.gu = this.fl : this.gu = this.data
				.playerCount, this.aLt = this.gu, this.fm = this.gu - this.fl, this.fn = 0, this.ba = this.data.selectedPlayer, this.a0t = 0, this.a17 = 0, this.aET = 0, this.aEV = 0, hL.xe(this.data.spawningSeed), gB.b(), z.b(), wY.b(), a2D.aAv(),
				mf.lt.aLx = [], jG.b(), this.dr = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), gq.b(), fQ(), aA.dT(), a2G.a8M(), mB.b(), aA.b(), a2J.b(), a8.b(), t.b(), jN.b(), mi.px(), gw.b(), a2D.ck(),
				a2B.b(), a2C.b(), bc.aEb(), jd.b(), e6.b(), wc.b(), e3.b(), fO.putImageData(fP, 0, 0), ds.b(), dv.b(), dw.b(), dy.b(), dz.b(), dt.b(), du.b(), dx.b(), e1.b(), e.b(), e0.b(), e2.b(), e5.b(), wZ.b(), wP.b(), aLy(), o4.b(), e4.b(), tB
				.b(), wd.b(), vq.b(), this.aAd.b(), bT.px(), wg.aM0(), 0 === z.bZ[c.ba] && e5.show(!1, !0), e4.g4(!0), wh.b(), bT.eA = !0, this.bV || this.fk && this.g3 || dY.dc.setState(1), this.cm = 0
		}, this.mJ = function(oP) {
			jd.je.jf.length ? this.aLw = jd.je.jf : this.aLw = jd.aM1.dC(), bW.u.xt(), a2V.clear(), this.dr = 0, bT.pv(), dY.dc.setState(0), cj.setState(0), eR.aM2.show(oP), 2 === this.cm ? cT.u.a56() : 1 === this.cm ? cT.iD(19) : cT.iD(5, 5)
		}, this.a6p = function() {
			return this.bV ? dx.m1 || !dy.m8 : this.fk && (dx.m1 || this.g3)
		}, this.a7M = function() {
			return 1 === this.dr && !this.g3
		}
}

function aM3() {
	function aM4(kR, ki, kk) {
		for (var a7Y = Math.min(ki, kk), os = Math.max(ki, kk), fX = a7Y + 1; fX < os; fX++)
			if (!aA.kM(a8.ku(kR, fX))) return;
		return 1
	}

	function aM5(kS, kh, kj) {
		for (var a7Y = Math.min(kh, kj), os = Math.max(kh, kj), fW = a7Y + 1; fW < os; fW++)
			if (!aA.kM(a8.ku(fW, kS))) return;
		return 1
	}

	function aM6(kh, ki, kj, kk, a44, a3y) {
		for (var az = Math.min(Math.abs(kj - kh), Math.abs(kk - ki)), kW = Math.sign(kj - kh), kZ = Math.sign(kk - ki), b0 = 0; b0 < az; b0++)
			if (!aA.kM(a8.ku(kh += kW, ki += kZ))) return null;
		return kh === kj ? aM4(kh, ki, kk) ? new Uint32Array([a44, a8.kt(kh, ki), a3y]) : null : aM5(ki, kh, kj) ? new Uint32Array([a44, a8.kt(kh, ki), a3y]) : null
	}
	this.a3z = function(a44, a3y) {
		a44 = function(a44, a3y) {
			var kh = a8.jQ(a44),
				ki = a8.jR(a44),
				kj = a8.jQ(a3y),
				kk = a8.jR(a3y);
			if (kh === kj) {
				if (aM4(kh, ki, kk)) return new Uint32Array([a44, a3y])
			} else {
				if (ki !== kk) return aM6(kh, ki, kj, kk, a44, a3y) || aM6(kj, kk, kh, ki, a44, a3y);
				if (aM5(ki, kh, kj)) return new Uint32Array([a44, a3y])
			}
			return null
		}(a44, a3y);
		return null === a44 ? -1 : t.un.a47(a44)
	}
}

function lw() {
	this.aM7 = function(player, tF, gx) {
		bA.gc.tD(player, gx, tF) && (gB.aM8(player, tF), !bA.gc.mN(tF)) && jN.sG.sh[tF] && jN.sG.sh[tF]--
	}, this.aM9 = function(player, tF, gx) {
		bA.gc.tH(gx, tF) ? wY.eT(tF, a4.lH[0]) && (a2V.aBo(player, tF, a4.lH[0], 1), bA.gc.sV(tF, a4.lH[0]), gq.aAk(player, tF), e4.a6d(tF, a4.lH[0])) : gq.sW(player, gx, 12)
	}
}

function a3C() {
	this.jO = new aMA, this.aJK = new aMB, this.aJL = new a1e, this.performance = new a4l, this.aMC = new aMD, this.sG = new aME, this.aMF = new aMG, this.aJJ = new aMH, this.aGK = new uW, this.b = function() {
		this.jO.b(), this.aJL.b(), this.performance.b(), this.aMC.b(), this.sG.b()
	}, this.bS = function() {
		this.performance.bS(), this.jO.bS(), this.aJL.a1g()
	}
}

function te() {
	this.b = function() {
		! function() {
			var data = cy.cz.data;
			0 === data[2].mb && (eE.dO > eE.c1 || 0 !== dY.id) && (data[2].value = data[2].qA = 1);
			0 === data[100].mb && (data[100].value = data[100].qA = (0 === dY.id ? "Player " : 1 === dY.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var b0, c8, data = cy.cz.data,
			az = data.length;
		for (b0 = 0; b0 < az; b0++) data[b0] && data[b0].mb === cy.iN.aEF(b0, !0) && (c8 = cy.iN.aEG(b0), data[b0].value = null === c8 ? data[b0].qA : 2 === data[b0].type ? c8 : Number(c8))
	}
}

function ls() {
	this.vi = function(player, jM) {
		bA.gc.sp(0) && bA.gc.gd(player) && a8.kv(jM) && (jd.je.q6(0, player, jM), c.aI1.eT(player, jM))
	}, this.nz = function(player, km, nW) {
		bA.gc.sp(1) && bA.gc.gd(player) && bA.gc.t0(player, nW) && bA.gc.t7(player, km, 12, 0) && bA.gc.tP(player, nW) && ((nW = o4.sb(player, a4.lN[0])) || o4.sc(player)) && (z.a0z[player]++, jd.je.q6(1, player, km, a4.lN[0]), jN.aMC.aML(player,
			nW)) && (bA.gc.tO(player), gq.aMM(player, km), jN.aMC.aMN(player))
	}, this.tE = function(player, km, tF) {
		bA.gc.sp(1) && bA.gc.gd(player) && c.gQ && bA.gc.t0(player, tF) && bA.gc.tS(player, tF) && bA.gc.tD(player, bA.gc.kl(player, km), tF) && wY.eT(tF, a4.lH[0]) && (jd.je.q6(2, player, km, tF), gB.aM8(player, tF))
	}, this.vv = function(player, km, aDJ) {
		a4.a5[1] = 7 & aDJ;
		var jM = aDJ >> 3;
		bA.gc.sp(1) && bA.gc.gd(player) && a8.kv(jM) && t.ul.s(player) && t.ul.a1(jM) && bA.gc.t7(player, km, 32, 0) && t.a1r.a3z(player, jM, 1) && (gq.aMO(player), jd.je.q6(3, player, km, aDJ), bA.gc.tO(player), a2T.uU.vv(player), t.u.up(
			player))
	}, this.vy = function(player, km, a08) {
		849 === km ? this.ny(player, a08) : bA.gc.sp(1) && bA.gc.gd(player) && bA.gc.t7(player, km, 32, 0) && t.vw.aJP(player, a08) && (gq.aMO(player), jd.je.q6(4, player, km, a08), bA.gc.tO(player), a2T.uU.vy(player), t.u.up(player))
	}, this.ny = function(player, a08) {
		bA.gc.sp(1) && bA.gc.gd(player) && t.aMP.bS(player, a08) && jd.je.q6(4, player, 849, a08)
	}, this.nx = function(player, nW) {
		513 === nW ? this.mk(player) : bA.gc.sp(1) && bA.gc.gd(player) && (nW = Math.min(nW, c.iC), o4.sb(player, nW)) && (jd.je.q6(5, player, nW), o4.sO(player, nW))
	}, this.aMQ = function(player, a7E) {
		(bA.gc.sp(1) || bA.gc.sp(2)) && bA.gc.gd(player) && (a7E = p.q(a7E, 0, 1023), jd.je.q6(6, player, a7E), e4.a6j(player, 0, a7E))
	}, this.u4 = function(player, aDO) {
		dz.u3(player) && (jd.je.q6(7, player, aDO), dz.uJ(player, aDO))
	}, this.mg = function(player) {
		(bA.gc.sp(0) || bA.gc.sp(1)) && bA.gc.gd(player) && dx.mM(player) && (jd.je.q6(8, player), a2P.mg(player))
	}, this.aHz = function(player) {
		jd.je.q6(9, player), a2P.aHz(player)
	}, this.mk = function(player) {
		dz.mh(player) && (jd.je.q6(5, player, 513), dz.mk(player))
	}, this.vo = function(player, km, jM, nW) {
		bA.gc.sp(1) && bA.gc.gd(player) && bA.gc.t0(player, nW) && bA.gc.tP(player, nW) && a8.kv(jM) && vk.vl.aMR(player, jM) && (o4.sb(player, a4.lN[0]) || o4.sc(player)) && (jd.je.q6(10, player, (km << 10) + a4.lN[0], jM), nW = bA.gc.tN(player,
			km), z.ga[player].push(a4.lL[0]), o4.eT(player, nW, a4.lN[0]), wZ.aMS(player, !0), gq.aMT(player))
	}
}

function aMA() {
	var aMU = 0,
		aMV = 0,
		aMW = 300,
		aMX = 300,
		aMY = 0;
	this.jP = 0, this.cz = new Uint32Array(512), this.b = function() {
		aMV = aMU = 0, this.jP = 0, aMY = 0
	}, this.bS = function() {
		if (function() {
				var az = jN.jO.jP;
				if (0 === az) return 1;
				var cz = jN.jO.cz;
				if (bT.bU() % 35 == 6) {
					for (var b0 = az - 1; 0 <= b0; b0--) aA.jL(cz[b0] << 2) || (az--, cz[b0] = cz[az]);
					jN.jO.jP = az
				}
				return az < cz.length
			}())
			if (aMW <= aMU) {
				var aMc = jN.jO.jP;
				if (aMc) {
					if (bT.bU() % 350 != 1) return;
					if (aMY !== aMc) return void(aMY = aMc);
					if (!bA.gc.mN(gS[0])) return
				} else if (bT.bU() % 12 != 8) return;
				bA.gc.su() || jN.jO.b()
			} else {
				var b0, c1 = cd.fR,
					aMd = c1 - 2,
					aMc = aMd * (cd.fS - 2),
					aMe = aMW,
					cz = jN.jO.cz,
					c6 = jN.jO.jP,
					aMf = cz.length,
					cX = Math.min(aMV + aMe * ((1 + 19 * jN.performance.a4m) * aMX), aMc);
				for (b0 = aMV; b0 < cX; b0 += aMe) {
					var g5 = 4 * (b0 % aMd + (p.eL(b0, aMd) + 1) * c1 + 1);
					if (aA.jL(g5) && (cz[c6] = g5 >> 2, ++c6 === aMf)) {
						b0 += aMe;
						break
					}
				}(aMV = b0) >= aMc && (aMV = ++aMU), jN.jO.jP = c6
			}
	}
}

function a2f() {
	var aMg, aMh, aMi;

	function aMl(aAZ) {
		for (var b0 = aMg - 1; 0 <= b0; b0--) 0 === aMi[aMh[b0]] && z.fo[aMh[b0]] >= aAZ && aMk(aMh[b0])
	}

	function aMj(player) {
		var g8;
		64 === aMi[player] ? aMi[player] = 6 : (g8 = z.fo[player], aMi[player] = g8 < 1e3 ? 3 : g8 < 1e4 ? 2 : g8 < 6e4 ? 1 : 0)
	}
	this.b = function() {
		aMg = 0, aMh = new Uint16Array(c.iC), aMi = new Uint8Array(c.iC)
	}, this.bS = function() {
		for (var b0 = aMg - 1; 0 <= b0; b0--) 64 === aMi[aMh[b0]] ? aMj(aMh[b0]) : 0 == aMi[aMh[b0]]-- && (aMj(aMh[b0]), aMk(aMh[b0]));
		16e4 <= z.fo[gS[0]] && (aMl(16e4), 3e5 <= z.fo[gS[0]]) && aMl(3e5), bA.gc.j4(c.ba) && (gq.gr[7] = Math.max(z.fo[c.ba], gq.gr[7]))
	}, this.aJi = function(player) {
		for (var bE, b0 = aMg - 1; 0 <= b0; b0--)
			if (player === aMh[b0]) {
				for (aMg--, bE = b0; bE < aMg; bE++) aMh[bE] = aMh[bE + 1];
				return
			}
	}, this.aMS = function(player, aMn) {
		for (var b0 = aMg - 1; 0 <= b0; b0--)
			if (player === aMh[b0]) return;
		aMh[aMg++] = player, aMi[player] = aMn ? 2 : 64
	}
}

function a3E() {
	var yS, u1, a0J, a0K, aMo = 0,
		aMp = 0;

	function aMs() {
		return Math.pow(Math.pow(a0J - yS, 2) + Math.pow(a0K - u1, 2), .5)
	}

	function aMq(iG) {
		yS = eE.dR * iG.touches[0].clientX, u1 = eE.dR * iG.touches[0].clientY, a0J = eE.dR * iG.touches[1].clientX, a0K = eE.dR * iG.touches[1].clientY
	}
	this.a9J = function(iG) {
		return 1 < iG.touches.length ? (aMp = bT.db, aMo = 3, aMq(iG), e2.iK(), !0) : (aMo = 0, !1)
	}, this.a9K = function(iG) {
		var aMr, kU, kV;
		return 0 !== c.dr && 1 < iG.touches.length && (aMo = Math.max(aMo - 1, 0), wg.os() && (aMr = aMs(), aMq(iG), iG = aMs(), kU = Math.floor((yS + a0J) / 2), kV = Math.floor((u1 + a0K) / 2), dv.aMu(kU, kV, Math.max(.125, iG) / Math.max(.125,
			aMr)), bT.eA = !0), !0)
	}, this.a9e = function() {
		var fW, fX;
		return !!(aMo && (aMo = 0, bT.db < aMp + 500)) && (fW = (yS + a0J) / 2, fX = (u1 + a0K) / 2, e2.a9Z(fW, fX), e2.click(fW, fX, !0) && (bT.eA = !0), !0)
	}
}

function aMv() {
	var aMw, aMx = [],
		aMy = -1,
		aMz = 0,
		aN0 = 0;

	function aN6() {
		aMz = bT.db, (3 === this.a0S ? aN5 : (aMy = (aMx.length + aMy + 2 * this.a0S - 1) % aMx.length, aN4))()
	}

	function aN4() {
		0 !== aMx.length && (aN0 = 0, aMw && aMw.rF(), (aMw = new a0O(aN6)).eq(aMy, aMx.length), aMw.show(aMx[aMy]), ax.message.resize())
	}

	function aN5() {
		aN0 = 1, aMw && aMw.rF(), (aMw = new aIA(aN4)).eq(aMx.length), aMw.show(), ax.message.resize()
	}
	this.c0 = function(aT) {
		var b3;
		2 === aT.id && 3 === aT.ab ? ax.a6.bI(aT.aY) : (b3 = ax.a6.ag(aT, ax.a6.aS(aT)), (5 !== aT.id && 6 !== aT.id || (cT.aBq(29).aN1().aN2(b3), 5 === aT.id)) && (b3 = bT.db < aMz + 2e4, aMy !== aMx.length - 1 && b3 || (aMy = aMx.length), aMx
			.push(aT), cy.cz.data[14].value || 7 === aT.id || rH.play(), aMw) && (aN0 && (cy.cz.data[13].value || b3) ? aMw.eq(aMx.length) : aN4()))
	}, this.show = function() {
		aN5()
	}, this.iK = function() {
		aMy = aMx.length - 1, aMw && aMw.rF(), aMw = null
	}, this.resize = function() {
		aMw && aMw.resize()
	}, this.bM = function() {
		return aMx
	}
}

function a3H() {
	var aN7 = 0,
		aN9 = new Uint16Array(64);

	function aK6(hb) {
		aN7 -= 2;
		for (var b0 = hb; b0 < aN7; b0 += 2) aN9[b0] = aN9[b0 + 2], aN9[b0 + 1] = aN9[b0 + 3]
	}
	this.b = function() {
		aN7 = 0
	}, this.bS = function() {
		var b0, nW, km;
		if (0 !== aN7)
			if (0 === z.bZ[c.ba]) aN7 = 0;
			else if (0 === o4.o5(c.ba)) aN7 = 0;
		else
			for (b0 = aN7 - 2; 0 <= b0; b0 -= 2)(nW = aN9[b0]) < c.iC && 0 === z.bZ[nW] ? aK6(b0) : (km = aN9[b0 + 1], (nW >= c.iC && tQ.aNB(c.ba) || nW < c.iC && tQ.aNC(c.ba, nW)) && (mf.lo.nz(km, nW), aK6(b0)))
	}, this.vr = function(nW, km) {
		! function(nW, km) {
			for (var b0 = 0; b0 < aN7; b0 += 2)
				if (aN9[b0] === nW) return aN9[b0 + 1] = Math.min(aN9[b0 + 1] + km, 1023), 1;
			return
		}(nW, km) && 64 !== aN7 && (aN9[aN7] = nW, aN9[aN7 + 1] = km, aN7 += 2)
	}
}

function a3j() {
	this.ig = 0, this.gap = 0, this.aGI = 0, this.a5F = 0, this.b = function() {
		this.resize()
	}, this.resize = function() {
		this.ig = .0022 * bA.fu.aNE(.5) * eE.dP, this.aGI = this.ig / eE.dR, this.gap = Math.max(Math.floor((dY.dc.fs() ? .0114 : .01296) * eE.dP), 2), this.a5F = this.gap / eE.dR
	}
}

function py() {
	var aNF, aNG, aNH, a4Q, aNI, cE = 0,
		db = bT.db;

	function aNM() {
		! function() {
			if (!c.g3) return;
			if (c.fk) return;
			if (2 !== c.dr)
				if (aNI % 7 != 0) aNI++;
				else if (a4Q === c.gk) {
				if (!aNP()) return;
				du.gh(a4Q), c.aI1.bS()
			} else {
				if (!aNP()) return;
				aNI++, a4Q++, e4.a6i(), e4.g4(!0)
			}
			return 1
		}() && aNP() && wX()
	}

	function aNN() {
		cE = 0, (c.g3 ? (bT.eA = du.gh(a4Q - (aNI % 7 == 0 ? 0 : 1) + aNI % 7 / 7) || bT.eA, wk) : dx.m1 || !dy.m8 ? wk : (bT.eA = !0, wj))()
	}

	function aNP() {
		var b0, az, aNQ = jd.je.k7,
			lU = jd.je.k8,
			lW = jd.je.k9,
			lY = jd.je.kA,
			aNR = jd.je.kB,
			aNS = jd.je.kC;
		if (!(aNF >= aNS.length)) {
			if (aNS = aNS[aNF], aNR[aNF]) {
				for (az = aNG + aNS, b0 = aNG; b0 < az; b0++) mf.lt.aNT(aNQ[b0], lU[b0], lW[b0], lY[b0]);
				aNG += aNS, aNF++
			} else ++aNH >= aNS && (aNF++, aNH = 0);
			return 1
		}
		e.aAO("Replay file smaller than expected."), dy.m9(!1), c.dr = 2
	}
	this.q2 = 0, this.b = function() {
		aNI = a4Q = aNH = aNG = aNF = 0
	}, this.bS = function() {
		var aNL;
		eE.bS(), dy.y8() < 1.7 ? 0 === cE ? bT.db >= db && (aNL = bT.gg / dy.y8(), db += aNL * Math.floor(1 + (bT.db - db) / aNL), 2 === c.dr || dx.m1 || !dy.m8 ? wW() : (aNM(), mB.aEi()), cE++) : aNN() : function() {
			var aNL;
			if (bT.db >= db)
				if (2 === c.dr || dx.m1 || !dy.m8) wW(), db = bT.db;
				else {
					for (aNL = bT.gg / dy.y8(), 16 < (bT.db - db) / aNL && (db = bT.db - 16 * aNL); bT.db >= db && 2 !== c.dr;) db += aNL, aNM();
					mB.aEi()
				} aNN()
		}(), wf(), bT.eA && (bT.eA = !1, aHv())
	}, this.a1d = function() {
		jd.je.kC.length - aNF <= 2 || e.aAO("Replay file larger than expected.")
	}
}

function a3i() {
	this.uR = function() {
		return dY.dc.fs() ? 2 : 1
	}
}

function aNU() {
	var hn, ho, i2;

	function aNb() {
		for (var colors = new Array(11), b0 = 0; b0 < 11; b0++) {
			var bq = cy.cz.data[163 + b0].value.split(",");
			colors[b0] = new Uint8Array(3);
			for (var bE = 0; bE < 3; bE++) bE < bq.length && (colors[b0][bE] = Number(bq[bE]))
		}
		return colors
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(56), [new hs("⬅️ " + L(33), function() {
		cT.hz()
	})]), ho = new hu(hn.hv, ((i2 = []).push(function() {
		var i6 = new i7;
		return i6.i8(L(394)), i6.rO("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", i6.rO(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), i6
	}()), i2.push(function() {
		var i6 = new i7,
			d8 = (i6.i8(L(395)), cy.cz.data[174].value),
			rL = i6.rK(d8.length + " / 180"),
			aCh = (rL.style.textAlign = "center", new iH(0, 1, function(iG) {
				var iG = iG.target.value,
					bD = iG.length;
				rL.textContent = bD + " / 180", bD <= 180 && cy.ep.eq(174, iG)
			}));
		return aCh.iG.rows = 6, aCh.iG.style.fontSize = "1em", aCh.iI(d8), i6.iE(aCh), i6
	}()), i2.push(function() {
		var i6 = new i7;
		i6.i8(L(396));
		for (var b0 = 0; b0 < 11; b0++) {
			var jt = i6.iE(new iF(cy.cz.data[163 + b0]));
			b0 && (jt.iG.style.marginTop = "0.6em")
		}
		return i6.iE(new a5M([new hs(L(397), function() {
			for (var data = cy.cz.data, b0 = 163; b0 < 174; b0++) data[b0] && cy.cz.aLV(b0, data[b0].qA);
			cT.hz(), cT.hy()[31] = null, cT.iD(31)
		}).button])), i6
	}()), i2.push(function() {
		var i6 = new i7;
		return i6.i8("Targeting"), i6.rO(L(398)), i6.iE(new iF(cy.cz.data[175], 0, 0)), i6
	}()), i2.push(function() {
		var i6 = new i7;
		return i6.i8(L(399)), i6.iE(new a5M([new hs(L(222), function() {
			(new qH).show(cy.cz.data[174].value, aNb(), -1)
		}).button])), i6
	}()), i2.push(function() {
		var i6 = new i7,
			aNc = (i6.i8(L(400)), i6.rO(L(401)), new iF(cy.cz.data[176], 1, 0)),
			aNd = (i6.iE(aNc), new hs(L(402), function(iG) {
				return aIf.button.textContent === L(218) && bW.u.pD(0) && (bA.fu.z7(iG), aCL(), bW.eh.d5(cy.cz.data[176].value, aNb(), cy.cz.data[175].value, cy.cz.data[174].value)), !0
			}, 1)),
			aCL = function() {
				aIf.button.textContent = L(217), aNd.n5(1), aNd.button.style.color = aG.am
			},
			aIf = new hs(L(217), function(iG) {
				return iG.textContent === L(217) ? (iG.textContent = L(218), aNd.n5(0), aNd.button.style.color = aG.aO) : aCL(), !0
			});
		return i6.iE(new a5M([aIf.button, aNd.button])), i6
	}()), i2))
}

function q1() {
	this.q2 = 0, this.bS = function() {
		dq.bS(), dn.bS(), eE.bS(), bW.u.bS(), cY.a4S(), eR.eS.bS(), bT.eA && (bT.eA = !1, cj.gl())
	}
}

function a2Y() {
	this.aNe = "https://", this.aNf = this.aNe + "territorial.io/", this.mu = this.aNf + "changelog", this.mz = this.aNf + "terms", this.aNg = this.aNf + "cookie_policy", this.n0 = this.aNf + "privacy", this.my = this.aNf + "tutorial", this.mx = this
		.aNf + "players", this.mv = this.aNf + "clans", this.mw = this.aNf + "clan-results", this.mq = "https://patreon.com/c/territorial", this.mr = this.aNe + "play.google.com/store/apps/details?id=territorial.io", this.ms = this.aNe +
		"apps.apple.com/app/id1581110913", this.aNh = this.aNe + "www.youtube.com/watch?v=toZTQ8aRdFc", this.mt = this.aNe + "discord.gg/pthqvpTXmh", this.rV = this.aNe + "www.instagram.com/davidtschacher/", this.aNi =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a3M() {
	this.je = new q4, this.aM1 = new a4Y, this.aFG = new jS, this.b = function() {
		c.bV || this.je.b()
	}, this.bS = function() {
		c.bV || (this.je.bS(), 3 !== cT.cU) || bT.bU() % 15 != 5 && 2 !== c.dr || cT.eu().aNk()
	}, this.jm = function() {
		0 === c.dr && cj.a7c(), c.aGS.nB(), c.data.canvas = null, bW.u.close(bW.u.xa, 3257), bW.u.xa = 0, c.data.isReplay = 1, c.cl()
	}, this.aNl = function(bF) {
		var b0 = bF.indexOf("=");
		return 0 <= b0 ? bF.substring(b0 + 1) : bF
	}, this.aNm = function(bF) {
		return bF
	}
}

function aNn() {
	var aNo = null,
		aNp = null,
		aNq = 0,
		aNr = 0,
		aNs = null;

	function aNv() {
		0 !== aNp.aq && (ax.a9j.iK(), cT.iD(8, 29, new mm(25, {
			d2: 0,
			aY: aV.aW.aX(aNp.aY, 5),
			aBv: 0
		}, 29)))
	}

	function aNx() {
		return !ax.b4 || ax.a6.b2(aNp) ? 1 : 0
	}

	function aNw() {
		var fW = aNo.fW,
			fX = aNo.fX,
			aO6 = (ax.a9j.iK(), aNx());
		aNo = new aNu([new hs(ac.ae[5][0], function() {
			aO0(5, 0)
		}, aO6), new hs(ac.ae[5][1], function() {
			aO0(5, 1)
		}, aO6), new hs(ac.ae[5][2], function() {
			aO0(5, 2)
		}, aO6), new hs(ac.ae[5][3], function() {
			aO0(5, 3)
		}, aO6)]), aNz(fW, fX), aNr = aNq = 2
	}

	function aNy() {
		29 === cT.cU && cT.eu().zm(aV.aW.aX(aNp.aY, 5))
	}

	function aO0(id, value) {
		5 === id && bW.eh.dF({
			d2: 3,
			aY: aV.aW.aX(aNp.aY, 5),
			value: value
		})
	}

	function aNz(fW, fX, aO9) {
		aNo.show(fW, fX, aO9), ax.wx.show(aNo.fW, aNo.fX, aNp, 1)
	}
	this.aNt = function(iG, b3) {
		aNq = 1, aNp = b3, aNo = new aNu([new hs(L(403), aNv, 0 === b3.aq ? 1 : 0), new hs(L(404), aNw, aNx()), new hs(L(405), aNy, 0)]), aNz((aNs = {
			clientX: iG.clientX,
			clientY: iG.clientY
		}).clientX, aNs.clientY, 1)
	}, this.iL = function(code) {
		if (29 !== cT.cU) return !1;
		if (!aNp) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.iK();
			else if (bA.bB.startsWith(code, "Numpad") || bA.bB.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aNq) this.aNt(aNs, aNp);
				else {
					if (!aNo) return !1;
					1 === aNq ? code <= 1 ? aNv() : 2 === code ? aNw() : (aNy(), this.iK()) : (aO0(aNr, p.q(code - 1, 0, ac.ae[aNr].length - 1)), this.iK())
				}
		}
		return !0
	}, this.iK = function() {
		aNq = 0, aNo && aNo.iK(), aNo = null, ax.wx.iK()
	}
}

function aHv() {
	a2J.a4T(), dZ.setTransform(kI, 0, 0, kI, 0, 0), dZ.imageSmoothingEnabled = kI < 3, dZ.drawImage(cd.a7k, dv.a8r(), dv.u2()), wc.aD7.gl(), dZ.drawImage(fM, dv.a8r(), dv.u2()), a2J.gl(), t.gl(), e4.gl(), (c.mI ? (e6.gl(), dy) : (e.gl(), ds.gl(), dw
		.gl(), dy.gl(), dz.gl(), du.gl(), dv.gl(), e1.gl(), e6.gl(), dt.gl(), e0.gl(), dx.gl(), e2.gl(), e5.gl(), e3.gl(), wh)).gl(), cT.gl()
}

function tu(fV, c1, dO) {
	fV.clearRect(0, 0, c1, dO), fV.fillStyle = aG.g6, fV.fillRect(0, 0, c1, dO)
}

function tw(fV, c1, dO, tz) {
	fV.fillStyle = aG.am, fV.fillRect(0, 0, c1, tz), fV.fillRect(0, 0, tz, dO), fV.fillRect(c1 - tz, 0, tz, dO), fV.fillRect(0, dO - tz, c1, tz)
}

function u0(fV, fW, fX, qM, tz, j6, aOA) {
	fV.fillStyle = aG.am;
	var j6 = Math.floor(qM * j6),
		eH = (j6 += (j6 - tz) % 2, Math.floor((j6 - tz) / 2)),
		qM = Math.floor((qM - j6) / 2);
	fV.fillRect(fW + qM, fX + qM + eH, j6, tz), aOA && fV.fillRect(fW + qM + eH, fX + qM, tz, j6)
}

function a3N() {
	this.size = 0, this.cE = 0, this.cs = null, this.b = function(cs) {
		this.cE = 0, this.cs = cs, this.size = cs.length
	}, this.ck = function(aJE) {
		return this.b(new Uint8Array(this.a4f(aJE))), this.cs
	}, this.rF = function() {
		this.cs = null
	}, this.cq = function(size, hl) {
		for (var cs = this.cs, os = this.cE + size - 1, b0 = this.cE; b0 <= os; b0++) cs[b0 >> 3] |= (hl >> os - b0 & 1) << 7 - (7 & b0);
		this.cE += size, this.cE > 8 * this.size && console.error("Wrapper Overflow")
	}, this.dG = function(size, hl) {
		var b1 = size >> 1,
			ca = 1 << b1;
		this.cq(size - b1, p.eL(hl, ca)), this.cq(b1, hl % ca)
	}, this.aOC = function(size) {
		for (var cs = this.cs, os = this.cE + size, b0 = this.cE; b0 < os; b0++) cs[b0 >> 3] &= 255 ^ 128 >>> (7 & b0)
	}, this.a4f = function(aJE) {
		return aJE + 7 >> 3
	}, this.aOD = function(bq, a7Y, os, aOE) {
		for (var b0 = a7Y; b0 < os; b0++) this.cq(aOE, bq[b0])
	}
}

function aIX() {
	this.mF = !1;
	this.a7G = [], this.a7F = 100;
	var yS, u1, gap, qM, aOF, aOH, aOI = 0,
		aOJ = new Array(9),
		aOK = [],
		aOL = [],
		aOM = 0,
		aON = 0,
		aOO = 0,
		aOP = 0;

	function aOU() {
		aOJ.sort(function(bE, b1) {
			return b1.rr - bE.rr
		});
		for (var bF = "" + aOJ[0].a7E, b0 = 1; b0 < 9; b0++) bF += "," + aOJ[b0].a7E;
		for (b0 = 0; b0 < 9; b0++) bF += "," + aOJ[b0].rr;
		cy.cz.aLV(120, bF)
	}
	this.b = function() {
		for (var aOQ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], b0 = 0; b0 < aOQ.length; b0++) {
			var color = 6 === aOQ[b0] ? aG.aDr : aG.nf;
			this.a7G.push(bA.canvas.qJ(dg.get(3), aOQ[b0], color))
		}
		for (b0 = 0; b0 < a2E.bN.a0Y; b0++) aOL.push(a2E.bN.a0b - a2E.bN.a0Y + b0);
		for (b0 = 0; b0 < a2E.bN.a0Z; b0++) aOL.push(a2E.bN.a0a + b0);
		var aNi = a2E.bN.a0h(mp.aNi);
		for (b0 = 0; b0 < aNi.length; b0++) aOL.push(aNi[b0]);
		! function() {
			var b0, bq = cy.cz.data[120].value.split(",");
			if (18 !== bq.length)
				for (b0 = 0; b0 < 9; b0++) aOJ[b0] = {
					a7E: 1015 + b0,
					rr: 0
				};
			else
				for (b0 = 0; b0 < 9; b0++) {
					var c8 = parseInt(bq[b0]),
						dI = (c8 = 0 <= c8 && c8 < a2E.bN.a0b ? c8 : 0, parseInt(bq[b0 + 9]));
					dI = 0 <= dI && dI < 1e3 ? dI : 0, aOJ[b0] = {
						a7E: c8,
						rr: dI
					}
				}
		}()
	}, this.show = function(ip, iq, aOV) {
		var b0;
		if (aOM = ip, aON = iq, aOI = aOV || 0, this.mF = !0, aOK = [], 0 === aOI)
			for (b0 = 0; b0 < 9; b0++) aOK.push(aOJ[b0].a7E);
		else {
			var b1 = 49 * aOI,
				aOV = b1 - 49;
			for (aOV >= aOL.length && (aOI = 1, aOV = 0, b1 = 49), b0 = aOV = (b1 = Math.min(b1, aOL.length)) - 49; b0 < b1; b0++) aOK.push(aOL[b0])
		}
		aOK.push(1024);
		aOV = aOK.length, qM = Math.floor((dY.dc.fs() ? .075 : .0468) * eE.dP), gap = Math.floor(qM / 3), (aOO = 10 * (aOF = qM + gap)) > eE.c1 && (aOO = eE.c1, gap = (aOF = aOO / 10) - (qM = 3 * aOF / 4)), aOH = p.eL(aOV, 10) + !!(aOV % 10), (
			aOP = aOH * aOF) > eE.dO && (aOP = eE.dO, gap = (aOF = aOP / aOH) - (qM = 3 * aOF / 4)), aOV = .5 * gap;
		yS = Math.min(Math.max(ip - .5 * aOO + aOV, aOV), eE.c1 - aOO + aOV), u1 = Math.min(Math.max(iq - .5 * aOP + aOV, aOV), eE.dO - aOP + aOV)
	}, this.io = function(ip, iq, player) {
		if (!this.mF) return !1;
		if (this.aLC(ip, iq)) {
			ip = p.q(p.eL(ip - yS + .5 * gap, aOF), 0, 9);
			if ((ip += 10 * p.q(p.eL(iq - u1 + .5 * gap, aOF), 0, 9)) >= aOK.length) return e2.iK(), !0;
			iq = aOK[ip];
			if (1024 === iq) return this.show(aOM, aON, aOI + 1), !0;
			! function(a7E) {
				for (var b0 = 0; b0 < 9; b0++) aOJ[b0].rr = Math.floor(.99 * aOJ[b0].rr);
				for (b0 = 0; b0 < 9; b0++)
					if (a7E === aOJ[b0].a7E) return aOJ[b0].rr = Math.min(aOJ[b0].rr + 30, 999), aOU();
				aOJ.splice(5, 0, {
					a7E: a7E,
					rr: Math.max(aOJ[4].rr, 30)
				}), aOJ.pop(), aOU()
			}(iq), player === c.ba ? mf.lo.aAX(iq) : mf.gc.aOX(iq, player)
		}
		return e2.iK(), !0
	}, this.aLC = function(ip, iq) {
		return !(ip < yS - .5 * gap || iq < u1 - .5 * gap || yS + aOO - .5 * gap <= ip || u1 + aOP - .5 * gap <= iq)
	}, this.gl = function() {
		dZ.fillStyle = aG.g6, dZ.fillRect(yS - .5 * gap, u1 - .5 * gap, aOO, aOP);
		for (var s6 = .5 * di.ig, az = (dZ.lineWidth = di.ig, dZ.strokeStyle = dZ.fillStyle = aG.am, dZ.strokeRect(yS - .5 * gap + s6, u1 - .5 * gap + s6, aOO - 2 * s6, aOP - 2 * s6), dZ.imageSmoothingEnabled = !0, aOK.length), b0 = 0; b0 <
			az; b0++) this.aAH(aOK[b0], dZ, yS + b0 % 10 * aOF, u1 + p.eL(b0, 10) * aOF, qM);
		dZ.imageSmoothingEnabled = !1
	}, this.aAH = function(a7E, jk, fW, fX, qM) {
		var g5;
		a7E >= 1024 - a2E.bN.a0Y ? (g5 = qM / this.a7F, jk.setTransform(g5, 0, 0, g5, fW, fX), jk.drawImage(this.a7G[a7E - 1024 + a2E.bN.a0Y], 0, 0), jk.setTransform(1, 0, 0, 1, 0, 0)) : (bA.fu.textAlign(jk, 1), bA.fu.textBaseline(jk, 1), jk
			.font = bA.fu.fv(0, .89 * qM), jk.fillText(a2E.bN.a0g(a7E), fW + .5 * qM, fX + (.35 - bA.fu.a74 + .56) * qM))
	}
}

function aOY() {
	var hn, aOZ = !0;

	function aOc(aLn, oL) {
		var rJ = document.createElement("div"),
			aOd = document.createElement("span"),
			aOe = document.createElement("span");
		aOd.textContent = du.gF(oL.db) + ":", aOd.style.color = aG.aI, aOd.style.paddingRight = "0.4em", aOd.style.display = "table-cell", aOd.style.width = "6ch", aOd.style.textAlign = "end", rJ.appendChild(aOd), aOe.textContent = oL.bF, rJ
			.appendChild(aOe), rJ.style.display = "table", oL.a7E && function(rJ, a7E) {
				{
					var jh;
					a7E >= 1024 - a2E.bN.a0Y ? ((jh = document.createElement("img")).src = a2E.a5Y.a7G[a7E - 1024 + a2E.bN.a0Y].toDataURL(), jh.style.width = "1.5em", jh.style.height = "1.5em", jh.style.verticalAlign = "middle", rJ.appendChild(jh)) :
						((jh = document.createElement("span")).textContent = a2E.bN.a0g(a7E), jh.style.display = "inline-block", jh.style.fontSize = "1.5em", jh.style.lineHeight = "1em", jh.style.verticalAlign = "middle", rJ.appendChild(jh))
				}
			}(rJ, oL.a7E), aLn.appendChild(rJ)
	}

	function aOb() {
		aOZ && (hn.hv.scrollTop = hn.hv.scrollHeight)
	}
	this.clear = function() {
		hn.hv.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a9n = a2V.aBr(), az = a9n.length, aLn = document.createDocumentFragment(), b0 = 0; b0 < az; b0++) aOc(aLn, a9n[b0]);
		hn.hv.appendChild(aLn), aOb(), hn.show(), this.resize(), aOZ = !0, aOb()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), hn.hv.style.padding = "0.4em " + bA.fu.pa(di.a5F)
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, this.j9 = function(oL) {
		var aLn = document.createDocumentFragment();
		aOc(aLn, oL), hn.hv.appendChild(aLn), aOb()
	}, (hn = new hr(L(64), [new hs("⬅️ " + L(33), function() {
		cT.aIs(1)
	})])).hv.style.overflowY = "auto", hn.hv.addEventListener("scroll", function() {
		aOZ = hn.hv.scrollTop >= hn.hv.scrollHeight - hn.hv.clientHeight - 2
	})
}

function aCd() {
	var iG;
	this.iG = document.createElement("hr"), this.resize = function() {
		bA.fu.lj(this.iG, 8, aG.nj)
	}, (iG = this.iG).style.marginBottom = iG.style.marginTop = "0.65em", iG.style.marginLeft = iG.style.marginRight = "-4%", iG.style.border = "none"
}

function a3o() {
	this.aOg = function() {
		for (var fW, fX, b0 = aOh - 1; 0 <= b0; b0--) fW = p.eL(aOi[b0], 4) % cd.fR, fX = p.eL(aOi[b0], 4 * cd.fR), z.l7[aOj] = Math.min(fW, z.l7[aOj]), z.l9[aOj] = Math.min(fX, z.l9[aOj]), z.l8[aOj] = Math.max(fW, z.l8[aOj]), z.lA[aOj] = Math
			.max(fX, z.lA[aOj])
	}, this.aOk = function() {
		var ca, j6, b0, az = z.ga[aOj].length,
			w3 = aA.w3;
		loop: for (b0 = az - 1; 0 <= b0; b0--) {
			for (ca = 3; 0 <= ca; ca--)
				if (j6 = z.ga[aOj][b0] + w3[ca], aA.jL(j6) || aA.w6(j6) && aA.kP(j6) !== aOj) {
					aA.a98(z.ga[aOj][b0], aOj);
					continue loop
				} z.ga[aOj][b0] = z.ga[aOj][az - 1], z.ga[aOj].pop(), az--
		}
	}, this.aOl = function() {
		var player = aOj,
			w4 = z.w4,
			a0 = z.a0,
			aJl = z.aJl,
			az = w4[player].length,
			w3 = aA.w3;
		loop: for (var b0 = az - 1; 0 <= b0; b0--) {
			for (var aOm = !1, aOn = !1, ca = 3; 0 <= ca; ca--) {
				var j6 = w4[player][b0] + w3[ca];
				if (aA.qW(j6, player)) continue loop;
				aOm = aOm || aA.kM(j6), aOn = aOn || aA.a8u(j6)
			}
			aOm ? a0[player].push(w4[player][b0]) : aOn ? aJl[player].push(w4[player][b0]) : aA.a96(w4[player][b0], player), w4[player][b0] = w4[player][az - 1], w4[player].pop(), az--
		}
	}, this.aOo = function() {
		z.fo[aOp] -= aOh
	}, this.aOq = function(border) {
		for (var az = border.length, b0 = az - 1; 0 <= b0; b0--) aA.a4C(aOp, border[b0]) || (border[b0] = border[az - 1], border.pop(), az--)
	}, this.aOr = function(border) {
		for (var az = border.length, b0 = az - 1; 0 <= b0; b0--) !aA.a4C(aOp, border[b0]) && aA.aB(border[b0]) && (border[b0] = border[az - 1], border.pop(), az--)
	}, this.aOs = function(border) {
		for (var ca, j6, az = border.length, w3 = aA.w3, b0 = az - 1; 0 <= b0; b0--)
			for (ca = 3; 0 <= ca; ca--)
				if (j6 = border[b0] + w3[ca], aA.qW(j6, aOp)) {
					z.w4[aOp].push(border[b0]), border[b0] = border[az - 1], border.pop(), az--;
					break
				}
	}, this.aOt = function() {
		for (var ca, j6, w3 = aA.w3, b0 = aOh - 1; 0 <= b0; b0--)
			for (ca = 3; 0 <= ca; ca--) j6 = aOi[b0] + w3[ca], aA.zz(aOp, j6) && aA.a8w(j6) && (z.w4[aOp].push(j6), aA.a97(j6, aOp))
	}, this.aOu = function() {
		var fW, fX;
		loop: for (; z.l9[aOp] < z.lA[aOp];) {
			for (fW = z.l8[aOp]; fW >= z.l7[aOp]; fW--)
				if (aA.a4C(aOp, 4 * (z.l9[aOp] * cd.fR + fW))) break loop;
			z.l9[aOp]++
		}
		loop: for (; z.l9[aOp] < z.lA[aOp];) {
			for (fW = z.l8[aOp]; fW >= z.l7[aOp]; fW--)
				if (aA.a4C(aOp, 4 * (z.lA[aOp] * cd.fR + fW))) break loop;
			z.lA[aOp]--
		}
		loop: for (; z.l7[aOp] < z.l8[aOp];) {
			for (fX = z.lA[aOp]; fX >= z.l9[aOp]; fX--)
				if (aA.a4C(aOp, 4 * (fX * cd.fR + z.l7[aOp]))) break loop;
			z.l7[aOp]++
		}
		loop: for (; z.l7[aOp] < z.l8[aOp];) {
			for (fX = z.lA[aOp]; fX >= z.l9[aOp]; fX--)
				if (aA.a4C(aOp, 4 * (fX * cd.fR + z.l8[aOp]))) break loop;
			z.l8[aOp]--
		}
	}, this.tR = function(player, nW) {
		return 0 === jG.jJ[player] || jG.jJ[player] !== jG.jJ[nW]
	}, this.vp = function(player) {
		for (var b0, cX, az = z.w4[player].length, w3 = aA.w3, ca = 3; 0 <= ca; ca--)
			for (cX = w3[ca], b0 = 0; b0 < az; b0++)
				if (aA.jL(z.w4[player][b0] + cX)) return !0;
		return !1
	}, this.aNB = function(player) {
		for (var b0, cX, az = z.w4[player].length, w3 = aA.w3, ca = 3; 0 <= ca; ca--)
			for (cX = w3[ca], b0 = 0; b0 < az; b0++)
				if (aA.a8x(z.w4[player][b0]) && aA.jL(z.w4[player][b0] + cX)) return !0;
		return !1
	}, this.vs = function(t1, t2) {
		for (var b0, g8, cX, j6, gs = z.w4[t1].length, gt = z.w4[t2].length, w3 = (gt < gs && (g8 = t1, t1 = t2, t2 = g8, g8 = gs, gs = gt, 0), aA.w3), ca = 3; 0 <= ca; ca--)
			for (cX = w3[ca], b0 = 0; b0 < gs; b0++)
				if (j6 = z.w4[t1][b0] + cX, aA.w6(j6) && aA.kP(j6) === t2) return !0;
		return !1
	}, this.aNC = function(t1, t2) {
		for (var b0, cX, j6, gs = z.w4[t1].length, w3 = aA.w3, ca = 3; 0 <= ca; ca--)
			for (cX = w3[ca], b0 = 0; b0 < gs; b0++)
				if (aA.a8x(z.w4[t1][b0]) && (j6 = z.w4[t1][b0] + cX, aA.w6(j6)) && aA.kP(j6) === t2) return !0;
		return !1
	}
}

function aOv() {
	var aOw = [];
	this.b = function() {
		aOw = []
	}, this.a46 = function() {
		return 65536 === aOw.length
	}, this.a45 = function(a44, a3y) {
		for (var un = aOw, az = un.length, b0 = 0; b0 < az; b0++) {
			var j6 = un[b0];
			if (j6[0] === a44 && j6[j6.length - 1] === a3y) return b0
		}
		return -1
	}, this.uo = function(pI) {
		var aOx = new Uint32Array(pI.length);
		return aOx.set(pI), aOx.reverse()
	}, this.a1P = function(vn, a0N) {
		var bD = vn.length - 1,
			aOy = new Uint32Array(bD + a0N.length);
		return aOy.set(vn, 0), aOy.set(a0N, bD), aOy
	}, this.a1T = function(vn, a0N, a50, jM, aOz) {
		aOz && (a50 = (a0N = this.uo(a0N)).length - a50 - 2);
		aOz = a0N.subarray(a50 + 1 + (jM === a0N[a50 + 1])), jM = new Uint32Array(vn.length + aOz.length);
		return jM.set(vn, 0), jM.set(aOz, vn.length), jM
	}, this.a47 = function(pI) {
		return aOw.push(pI), aOw.length - 1
	}, this.get = function(b0) {
		return aOw[b0]
	}, this.aP1 = function() {
		return aOw
	}, this.aP2 = function(a44, a3y) {
		return null
	}
}

function a2j() {
	var oe, fW, fX, aP3, aP4, aP5, db, aP6, aP7, aP8, aP9, gap, zoom, aPA, aPB;

	function aPM(ip, iq, g5) {
		aA.aB(g5) || -1 === (ip = t.a6.a03(ip, iq)) ? e.aAS(g5) : e.aAV(ip)
	}

	function aPI(aP6) {
		for (var b0 = aPA.length - 1; 0 <= b0; b0--)
			if (aPA[b0] === aP6) return 1
	}

	function aPG(hb) {
		var b0, az;
		if (-1 !== hb)
			for (az = oe.length, b0 = 0; b0 < az; b0++)
				if (oe[b0].mF && oe[b0].fW + 1 === hb % 4 && oe[b0].fX + 1 === hb >> 2) return b0;
		return -1
	}

	function aPE(ip, iq) {
		var gi = gap / 2;
		return ip < fW - aP3 - 3 * gi || fW + 3 * aP3 + 5 * gi < ip || iq < fX - aP3 - 3 * gi || fX + 2 * aP3 + 3 * gi < iq ? -1 : 4 * (iq < fX - gi ? 0 : iq < fX + aP3 + gi ? 1 : 2) + (ip < fW - gi ? 0 : ip < fW + aP3 + gi ? 1 : ip < fW + 2 * aP3 +
			3 * gi ? 2 : 3)
	}
	this.aIW = function() {
		var b0, b1, aPD = [aG.aDr, aG.aDw, aG.nf, aG.aE5, aG.aE0];
		for (oe = new Array(10), b0 = 0; b0 < 10; b0++) oe[b0] = {
			id: b0,
			mF: !1,
			mG: 0,
			canvas: [],
			fW: 0,
			fX: 0
		};
		for (oe[0].colors = [0, 1, 2, 3], oe[0].fW = 0, oe[0].fX = 0, oe[1].colors = [1, 4], oe[1].fW = 1, oe[1].fX = 0, oe[2].colors = [0, 1], oe[2].fW = -1, oe[2].fX = 0, oe[3].colors = [0], oe[3].fW = 0, oe[3].fX = 0, oe[4].colors = [0, 2],
			oe[4].fW = 1, oe[4].fX = 1, oe[5].colors = [3], oe[5].fW = 0, oe[5].fX = -1, oe[6].id = 20, oe[6].colors = [0], oe[6].fW = 1, oe[6].fX = -1, oe[7].id = 21, oe[7].colors = [0], oe[7].fW = 0, oe[7].fX = 1, oe[8].id = 16, oe[8]
			.colors = [0], oe[8].fW = 0, oe[8].fX = 0, oe[9].id = 10, oe[9].colors = [4], oe[9].fW = 2, oe[9].fX = 0, b0 = 0; b0 < 10; b0++)
			for (b1 = 0; b1 < oe[b0].colors.length; b1++) oe[b0].canvas.push(function(id, qL) {
				if (id < 20) return bA.canvas.qJ(dg.get(3), id, qL);
				var qL = dg.get(3).height,
					jj = bA.fu.dV(qL, qL),
					jk = bA.fu.getContext(jj);
				20 === id ? jk.drawImage(dg.get(18), 0, 0) : 21 === id && a2E.a5Y.aAH(a2E.bN.a0a + a2E.bN.a0f, jk, 0, 0, qL);
				return jj
			}(oe[b0].id, aPD[oe[b0].colors[b1]]))
	}, this.a7I = function() {
		return oe
	}, this.b = function() {
		aPA = [], fW = fX = db = 0, aP4 = aP5 = -1e3, this.resize()
	}, this.resize = function() {
		aP3 = Math.floor((dY.dc.fs() ? .075 : .0468) * eE.dP), zoom = aP3 / dg.get(3).height, gap = Math.floor(aP3 / 3)
	}, this.a9X = function(ip, iq) {
		return !!this.mF() && (bT.eA = !0, !!a2E.a5Y.io(ip, iq, aP7) || (ip = function(ip, iq) {
			aP5 = aP4 = -1e3;
			var aPF = aPG(aPE(ip, iq));
			if (-1 === aPF) return 0;
			if (1 !== oe[aPF].colors[oe[aPF].mG])
				if (5 === aPF) {
					if (! function() {
							var g8 = performance.now();
							aPB + 4e3 < g8 && (aPA = []);
							aPB = g8
						}(), aPI(aP6)) return 1;
					aPA.push(aP6), 16 < aPA.length && aPA.shift()
				} else if (6 === aPF) {
				for (var b0 = aPA.length - 1; 0 <= b0; b0--) 0 === z.bZ[aPA[b0]] && aPA.splice(b0, 1);
				0 < aPA.length && (wd.aPJ(1, aPA, !0) && mf.gc.aPK(aPA, aP6), aPA = [])
			} else if (2 === aPF) wY.vx(aP6) && mf.lo.aM8(dw.o0(), aP6);
			else if (3 === aPF) c.g3 && mf.lo.vi(aP8);
			else if (0 === aPF)
				if (0 === oe[0].mG) {
					if (c.aLu && du.gG() < 350) return 1;
					mi.mj(4), mf.lo.nz(dw.o0(), aP6)
				} else vq.vr(aP6, dw.o0());
			else if (1 === aPF) mf.lo.vv(dw.o0(), aP8);
			else if (9 === aPF) mf.lo.vy(dw.o0());
			else {
				if (7 === aPF) return mi.mj(0), a2E.a5Y.show(ip, iq), 2;
				if (4 === aPF) wd.aPJ(0, [aP6], !0) && mf.gc.aA9(aP6);
				else {
					if (8 !== aPF) return 0;
					mf.lo.vo(dw.o0(), aP9, aP6)
				}
			}
			return 1
		}(ip, iq), this.iK(), 2 === ip && (a2E.a5Y.mF = !0), 0 < ip))
	}, this.a9Z = function(ip, iq) {
		this.mF() || (aP4 = ip, aP5 = iq, db = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = a8.kq(mouseX),
			coordY = a8.kr(mouseY),
			coord = a8.kt(coordX, coordY),
			coord = a8.a9(coord);
		a8.ks(coordX, coordY) && aPM(mouseX, mouseY, coord)
	}, this.click = function(ip, iq, a9f) {
		var kR = a8.kq(ip),
			kS = a8.kr(iq),
			jM = a8.kt(kR, kS),
			g5 = a8.a9(jM);
		return !(!a8.ks(kR, kS) || (kR = (dY.dc.fs() ? .025 : .0144) * eE.dP, kS = performance.now(), Math.abs(ip - aP4) > kR) || Math.abs(iq - aP5) > kR || db + 500 < kS) && (db = kS, a9f ? (aPM(ip, iq, g5), !1) : dx.m1 || this.mF() || !bA.gc
			.gd(c.ba) || c.bV ? (this.iK(), !1) : (c.g3 ? 0 <= (aP8 = vh.qU(jM)) && (oe[3].mF = !0) : 2 === c.dr ? aA.w6(g5) && (aP6 = aA.kP(g5), bA.gc.mN(aP6) || (oe[0].mF = !0, oe[0].mG = 1, oe[7].mF = !0)) : (t.vw.vx(c.ba, jM) && (oe[0]
				.mF = !0, oe[0].mG = 1, oe[1].mF = !0, oe[1].mG = 0, oe[9].mF = !0, oe[9].mG = 0), t.vt.vu(c.ba, jM) && (oe[0].mF = !0, oe[0].mG = 1, oe[1].mF = !0, oe[1].mG = 1, aP8 = a4.a5[7]), aA.vj(g5) ? (aP9 = vk.vl.vm(g5)) && (
				kR = a8.a9(aP9), oe[8].mF = !0, aP6 = aA.jL(kR) ? c.iC : aA.kP(kR)) : (aA.a4C(c.ba, g5) && (aP7 = c.ba, oe[0].mF = !0, oe[0].mG = 1, oe[7].mF = !0), -1 !== (kS = vh.qV(jM)) && (aA.jL(kS << 2) ? (aP6 = c.iC, tQ.vp(c
				.ba) ? (oe[0].mF = !0, oe[0].mG = 0) : o4.o5(c.ba) && (oe[0].mF = !0, oe[0].mG = 3)) : (aP6 = aA.kP(kS << 2), oe[0].mG = 1, oe[5].mF = function(aP6) {
				return !bA.gc.mN(aP6) && !aPI(aP6) && wd.aPJ(1, [aP6], !1)
			}(aP6), oe[7].mF || bA.gc.mN(aP6) || (aP7 = aP6, oe[7].mF = !0), oe[4].mF = !bA.gc.mN(aP6) && !e4.a7P(aP6) && wd.aPJ(0, [aP6], !1), oe[6].mF = function(aP6) {
				if (0 === aPA.length) return !1;
				if (performance.now() > aPB + 4e3) return !(aPA = []);
				return !aPI(aP6) && ! function(aP6) {
					var b0;
					if (c.gQ)
						for (b0 = aPA.length - 1; 0 <= b0; b0--)
							if (!tQ.tR(aP6, aPA[b0])) return 1;
					return
				}(aP6)
			}(aP6), tQ.tR(aP6, c.ba) ? (tQ.vs(c.ba, aP6) ? (oe[0].mG = 0, oe[0].mF = !0) : o4.o5(c.ba) && (oe[0].mG = 3, oe[0].mF = !0), oe[0].mF = this.aPR()) : (oe[2].mF = !0, wY.vx(aP6) ? oe[2].mG = 0 : oe[2].mG = 1,
				oe[0].mF = !0))))), this.aPN(ip, iq)))
	}, this.aPN = function(ip, iq) {
		return fW = ip - Math.floor(aP3 / 2), fX = iq - Math.floor(aP3 / 2), !!this.mF()
	}, this.is = function(ip, iq) {
		return !!this.mF() && (a2E.a5Y.mF ? !a2E.a5Y.aLC(ip, iq) && (a2E.a5Y.mF = !1, bT.eA = !0) : function(yJ, ip, iq) {
			ip = aPE(ip, iq);
			if (0 <= aPG(ip)) return !1;
			if ((1 === ip || 6 === ip) && 0 <= aPG(2)) return !1;
			if ((6 === ip || 9 === ip) && 0 <= aPG(10)) return !1;
			return yJ.iK(), bT.eA = !0
		}(this, ip, iq))
	}, this.iK = function() {
		for (var b0 = oe.length - 1; 0 <= b0; b0--) oe[b0].mF = !1, oe[b0].mG = 0;
		a2E.a5Y.mF = !1
	}, this.mF = function() {
		return this.aPR() || a2E.a5Y.mF
	}, this.aPR = function() {
		for (var az = oe.length, b0 = 0; b0 < az; b0++)
			if (oe[b0].mF) return !0;
		return !1
	}, this.gl = function() {
		if (this.mF())
			if (a2E.a5Y.mF) a2E.a5Y.gl();
			else {
				var b0, jk = dZ,
					b1 = oe,
					az = b1.length,
					aPW = (aP3 + gap) / zoom;
				for (jk.imageSmoothingEnabled = !0, jk.setTransform(zoom, 0, 0, zoom, fW, fX), b0 = 0; b0 < az; b0++) b1[b0].mF && dZ.drawImage(b1[b0].canvas[b1[b0].mG], b1[b0].fW * aPW, b1[b0].fX * aPW);
				jk.imageSmoothingEnabled = !1, jk.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aNu(aGw) {
	var ux = document.createElement("div"),
		aPX = document.createElement("div"),
		wm = (this.fW = 0, this.fX = 0);

	function aPZ() {
		ax.a9j.iK()
	}
	this.oe = aGw, this.show = function(fW, fX, aO9) {
		if (wm) return [0, 0];
		wm = 1, this.fW = fW, this.fX = fX,
			function(self, aO9) {
				var c1 = bA.fu.vQ(.16, .7),
					dO = aGw.length * c1 / 3,
					aPc = eE.c1 / eE.dR,
					aPd = eE.dO / eE.dR,
					nm = Math.min(1, Math.min(aPc / c1, aPd / dO));
				c1 *= nm, dO *= nm, aO9 && (self.fW += bA.fu.vQ(.03, .5)), self.fW = p.q(self.fW, 0, aPc - c1), self.fX = p.q(self.fX, 0, aPd - dO), aPX.style.left = self.fW + "px", aPX.style.top = self.fX + "px", aPX.style.width = c1 + "px", aPX
					.style.height = dO + "px", aPX.style.font = bA.fu.fv(0, .3 * dO / aGw.length), bA.fu.lj(aPX, 5);
				for (var b0 = 1; b0 < aGw.length; b0++) bA.fu.lj(aGw[b0].button, 8)
			}(this, aO9), document.body.appendChild(ux)
	}, this.iK = function() {
		wm && (wm = 0, ux.removeEventListener("click", aPZ), cT.removeChild(document.body, ux))
	};
	for (var b0 = 0; b0 < aGw.length; b0++) new oU("" + (1 + b0), aGw[b0].button, 0, 1);
	ux.style.position = "fixed", ux.style.top = "0", ux.style.left = "0", ux.style.width = "100%", ux.style.height = "100%", ux.style.zIndex = "5", aPX.style.position = "absolute",
		function() {
			for (var aPa = (100 / aGw.length).toFixed(2) + "%", b0 = 0; b0 < aGw.length; b0++) aGw[b0].button.style.width = "100%", aGw[b0].button.style.height = aGw[b0].button.style.maxHeight = aPa, aGw[b0].button.style.padding = "0.0em 0.9em", aPX
				.appendChild(aGw[b0].button)
		}(), ux.appendChild(aPX), ux.addEventListener("click", aPZ)
}

function aPe() {
	var hn, ho, hp, i2;

	function ht() {
		hx(), 2 === c.data.playerNamesType && 1 === bA.c3.c4(c.data.playerNamesData).length && (c.data.playerNamesType = 0), 2 !== c.data.playerNamesType && (c.data.playerNamesData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		2 === c.data.playerNamesType && bA.c3.aPf(hp.i1(), c.data.playerNamesData, 20)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(406), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), i6.i9(new iA({
			iB: [L(407), L(408), L(37)],
			value: c.data.playerNamesType
		}, function(cE) {
			hx(), c.data.playerNamesType = cE, cT.iD(23)
		})), i6.iE(new aCd), i6.iE(new aDB({
			value: c.data.selectableName
		}, L(409), function(value) {
			c.data.selectableName = value
		})), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6;
		2 === c.data.playerNamesType && ((i6 = new i7).i8("Data"), hp = new iH(0, 1, 0, 1), c.data.playerNamesData && c.data.playerNamesData.length === c.iC || (c.data.playerNamesData = new Array(c.iC), c.data.playerNamesData.fill("")),
			hp.iI(bA.bB.iJ(c.data.playerNamesData, 1, '"')), i6.iE(hp), i2.push(i6))
	}(i2), i2))
}

function aD8() {
	this.gl = function() {
		if (0 !== wc.u.a7p && (dZ.globalAlpha = Math.min(wc.u.a7p / 580, 1), dZ.drawImage(wc.u.a7q, 1 + dv.a8r(), 1 + dv.u2()), dZ.globalAlpha = 1, c.g3)) {
			for (var yS = kn / kI, u1 = ko / kI, a0J = (eE.c1 + kn) / kI, a0K = (eE.dO + ko) / kI, cX = wc.u.a7o * kI, a7r = wc.u.a7r, b0 = c.fl - 1; 0 <= b0; b0--) ! function(b0, cX, yS, u1, a0J, a0K, a7r) {
				var highlight;
				0 === z.bZ[b0] || 0 === z.fo[b0] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[b0]) && (cX *= 2), a0J = eE.c1 * ((z.l7[b0] + z.l8[b0] + 1) / 2 - yS) / (a0J - yS) - .5 * cX, yS = eE.dO * ((z
					.l9[b0] + z.lA[b0] + 1) / 2 - u1) / (a0K - u1) - .5 * cX, a0J > eE.c1) || yS > eE.dO || a0J < -cX || yS < -cX || (highlight ? dZ.setTransform(2 * kI, 0, 0, 2 * kI, a0J, yS) : dZ.setTransform(kI, 0, 0, kI, a0J, yS), dZ
					.drawImage(a7r[c.gQ ? jG.jJ[b0] : 1], 0, 0))
			}(b0, cX, yS, u1, a0J, a0K, a7r);
			dZ.setTransform(kI, 0, 0, kI, 0, 0)
		}
	}
}

function aPj() {
	function aPu() {
		cd.aPv.bS()
	}

	function aQ1(j6, aQ0) {
		0 < aQ0 && (cd.a8E[j6] += aQ0, cd.a8E[j6 + 1] += aQ0, cd.a8E[j6 + 2] += aQ0)
	}

	function kM(j6) {
		return cd.a8E[j6 + 2] > cd.a8E[j6] && cd.a8E[j6 + 2] > cd.a8E[j6 + 1]
	}
	this.aPk = -1, this.sq = 0, this.aPl = 0, this.aPm = 8, this.aPn = 32, this.aPo = 8, this.aPp = 32, this.aPq = [0, 0], this.a6c = [0, 0, 0, 0], this.l2 = null, this.aPr = !0, this.aPs = !1, this.aPt = function() {
		-1 !== this.aPk && clearTimeout(this.aPk), this.aPk = -1, this.l2 = null, a2H.hI()
	}, this.b = function() {
		7 === cj.ek() || this.aPs || (this.aPr = !0, this.sq = 0, this.aPl = 1, this.aPq = [cd.aAn.f2[cd.cf].fH[0], cd.aAn.f2[cd.cf].fI[0]], this.a6c = [cd.aAn.f2[cd.cf].fJ[3], cd.aAn.f2[cd.cf].fJ[4], cd.aAn.f2[cd.cf].fJ[5], cd.aAn.f2[cd.cf].fJ[
			6]], this.aPm = cd.aAn.f2[cd.cf].fJ[7], this.aPn = cd.aAn.f2[cd.cf].fJ[8], this.aPo = cd.aAn.f2[cd.cf].fJ[9], this.aPp = cd.aAn.f2[cd.cf].fJ[10], this.aPr ? this.aPk = setTimeout(aPu, 16) : this.bS())
	}, this.bS = function() {
		if (8 === cj.ek() && wg.aPw()) this.aPk = setTimeout(aPu, 16);
		else {
			if (0 === this.sq) {
				var fG = hL.xd();
				if (hL.xe(cd.aAn.f2[cd.cf].fJ[2]), a2H.ck([cd.fR, cd.fS, cd.aAn.f2[cd.cf].fJ[0], cd.aAn.f2[cd.cf].fJ[1]]), hL.xe(fG), this.l2 = a2H.hH(), this.sq++, this.aPr) return void(this.aPk = setTimeout(aPu, 16))
			}
			for (var j6, jM, fG = this.aPr ? 10 : 1e6, fG = cd.fS - this.aPl - 1 < fG ? cd.fS - this.aPl - 1 : fG, qf = this.aPl + fG, fX = this.aPl; fX < qf; fX++)
				for (var fW = 1; fW < cd.fR - 1; fW++) kM(j6 = 4 * (jM = fW + fX * cd.fR)) ? this.aPx(j6, jM, 1) : (this.aPx(j6, jM, 0), function(fW, fX, j6) {
					return 1 < fW && kM(j6 - 4) || fW < cd.fR - 2 && kM(j6 + 4) || 1 < fX && kM(j6 - 4 * cd.fR) || fX < cd.fS - 2 && kM(j6 + 4 * cd.fR)
				}(fW, fX, j6) && this.aPy(fW, fX));
			this.aPl = qf, this.aPl >= cd.fS - 1 ? (cd.nP.putImageData(cd.aPz, 0, 0, 1, 1, cd.fR - 2, cd.fS - 2), bT.eA = !0, this.aPt()) : this.aPr && (this.aPk = setTimeout(aPu, 16))
		}
	}, this.aPx = function(j6, jM, cE) {
		aQ1(j6, Math.floor(this.aPq[cE] + this.a6c[cE] * this.l2[jM] / 1e4) - cd.a8E[j6])
	}, this.aQ2 = function(j6, ij, aQ3, cE, a6c) {
		aQ1(j6, Math.floor(this.aPq[cE] + (1 - ij / aQ3) * a6c) - cd.a8E[j6])
	}, this.aPy = function(ip, iq) {
		for (var j6, ij, aQ3, qc = ip - this.aPn, qd = iq - this.aPn, qe = ip + this.aPn, qf = iq + this.aPn, qc = qc < 1 ? 1 : qc, qe = qe > cd.fR - 2 ? cd.fR - 2 : qe, qf = qf > cd.fS - 2 ? cd.fS - 2 : qf, fX = qd < 1 ? 1 : qd; fX <= qf; fX++)
			for (var fW = qc; fW <= qe; fW++) kM(j6 = 4 * (fW + fX * cd.fR)) ? (aQ3 = this.aPm + (this.aPn - this.aPm) * this.l2[fW + cd.fR * fX] / 1e4, Math.abs(ip - fW) > aQ3 || Math.abs(iq - fX) > aQ3 || aQ3 <= (ij = Math.sqrt((ip - fW) * (
				ip - fW) + (iq - fX) * (iq - fX))) || this.aQ2(j6, ij, aQ3, 1, this.a6c[3])) : (aQ3 = this.aPo + (this.aPp - this.aPo) * this.l2[fW + cd.fR * fX] / 1e4, Math.abs(ip - fW) > aQ3 || Math.abs(iq - fX) > aQ3 || aQ3 <= (ij = Math
				.sqrt((ip - fW) * (ip - fW) + (iq - fX) * (iq - fX))) || this.aQ2(j6, ij, aQ3, 0, this.a6c[2]))
	}
}

function aME() {
	function aQF(player, nW, aQ5) {
		3 <= aQ5 && 2142 < bT.bU() && (nW === c.iC || z.gA[nW] < p.eL(z.gA[player], 20)) && gw.sD(player, 20)
	}

	function aQH(player, gx, nW, aQ5) {
		3 <= aQ5 && aQ5 < 6 && p.eL(z.gA[player], 8) > z.gA[nW] && (gx = Math.max(p.eL(11 * z.gA[nW], 5), p.eL(z.gA[player], 10)));
		aQ5 = z.ga[player].length;
		jN.aMC.aQQ(player, nW), jN.aMC.aQR(player, nW, aQ5, gx)
	}

	function aQE(player, gx) {
		var nW = c.iC,
			az = z.ga[player].length;
		jN.aMC.aQS(player), z.ga[player].length !== az && jN.aMC.aQR(player, nW, az, gx)
	}
	this.sh = new Uint8Array(c.iC), this.b = function() {
		this.sh.fill(0)
	}, this.sH = function(player, gx) {
		var aQ4, aQ5, aQ6, aQ7;
		o4.sc(player) && (aQ4 = gB.gC(player), 3 <= (aQ5 = gw.gx[player]) && aQ5 < 6 && (gx = Math.max(z.gA[player] - aQ4, gx)), aQ6 = z.a0[player].length, aQ7 = z.w4[player].length, 30 * z.fo[player] > c.fp && jE[player] < 10 && 100 * aQ7 <=
			aQ6 && gw.sD(player, 10), c.gQ ? function(player, gx, aQ5, aQ4) {
				var nW;
				if (jN.aMC.aQA(player, !1) || jN.aMC.aQB(player, !1)) {
					if (!jN.aMC.aQC(player))
						if (jN.aMC.aQD()) aQE(player, gx), aQF(player, c.iC, aQ5);
						else {
							if (hL.aJt(gw.s0[aQ5])) nW = jN.aMC.aQG(player);
							else {
								if (jN.aMC.aQI() && hL.aJt(gw.ry[aQ5]) && jN.aMC.aQJ(), 6 === aQ5) return aQH(player, gx, jN.aMC.aQK(), aQ5);
								nW = jN.aMC.aQL(player)
							}
							aQH(player, gx, nW, aQ5), aQF(player, nW, aQ5)
						}
				} else t.aGJ.bS(player) || jN.aMF.bS(player) || ! function(player, gx, aQ5, aQ4) {
					var sh = jN.sG.sh;
					sh[player] = 0;
					var aQN = jG.jJ[player];
					if (0 !== aQN) {
						var aQO = z.gA[player],
							fo = z.fo;
						if (player < c.fl && (gx = aQO), !(aQO < fo[player] || 5 === aQ5 && aQO < aQ4 || 4 === aQ5 && aQO < p.eL(aQ4, 2))) {
							e6.a4r(aQN);
							for (var az = a4.lF[0], lP = a4.lP, b0 = hL.s9(az), b1 = 0; b1 < az; b1++) {
								var dI = lP[(b1 + b0) % az];
								if (sh[dI]) return mf.lv.aM7(player, dI, gx)
							}
							var x = t.u.x;
							for (b1 = 0; b1 < az; b1++)
								if (dI = lP[(b1 + b0) % az], x[dI] && dI !== player) return mf.lv.aM7(player, dI, gx)
						}
					}
				}(player, gx, aQ5, aQ4)
			}(player, gx, aQ5, aQ4) : (!aQ7 || aQ6 && (aQ6 < aQ7 && !hL.s9(10) || 100 * aQ7 <= aQ6 && hL.s9(3) || !hL.s9(8))) && t.aGJ.bS(player) || function(player, gx, aQ5) {
				jN.aMC.aQA(player, !0) || jN.aMC.aQB(player, !0) ? jN.aMC.aQC(player) || (jN.aMC.aQD() ? aQE(player, gx) : hL.aJt(gw.s0[aQ5]) ? aQH(player, gx, jN.aMC.aQG(player), aQ5) : 5 === aQ5 ? aQH(player, gx, jN.aMC.aQP(), aQ5) : (jN
					.aMC.aQI() && hL.aJt(gw.ry[aQ5]) && jN.aMC.aQJ(), aQH(player, gx, 6 === aQ5 ? jN.aMC.aQK() : jN.aMC.aQL(player), aQ5))) : jN.aMF.bS(player)
			}(player, gx, aQ5))
	}
}

function pj(oV, oW, aQT, aQU, aQV) {
	var self;
	this.oZ = document.createElement("span"), this.resize = function() {
			this.oZ.style.fontSize = ((aQU - aQT) * oW.offsetHeight).toFixed(1) + "px"
		}, (self = this).oZ.textContent = oV, self.oZ.style.color = aG.am, self.oZ.style.font = "inherit", self.oZ.style.margin = "0.1em 0.6em", self.oZ.style.pointerEvents = "none", aQV && (self.oZ.style.fontWeight = "bold"), self.oZ.style
		.whiteSpace = "nowrap", self.oZ.style.display = "block", oW.appendChild(self.oZ)
}

function a3Z() {
	this.aDE = 1117, this.aJW = 2148, this.rVersion = 17, this.pJ = 0, this.b = function() {
		this.oR = 2;
		var g8 = p.eL(this.aJW, 10) % 100;
		this.mb = "11 Dec 2025 [" + p.eL(this.aJW, 1e3) + "." + (g8 < 10 ? "0" : "") + g8 + "." + this.aJW % 10 + "]", this.aJd = true, this.aJe = function() {
			try {
				return window.self !== window.top
			} catch (iG) {
				return !0
			}
		}(), this.aDD = (new Date).getTime() % 1048576
	}, this.a3u = 0
}

function a34() {
	this.a18 = new Array(c.iC), this.jA = new Array(c.iC), this.sr = new Uint8Array(c.iC), this.bZ = new Uint8Array(c.iC), this.l7 = new Uint16Array(c.iC), this.l9 = new Uint16Array(c.iC), this.l8 = new Uint16Array(c.iC), this.lA = new Uint16Array(c
			.iC), this.fo = new Uint32Array(c.iC), this.aEe = new Uint32Array(c.iC), this.gA = new Uint32Array(c.iC), this.ga = null, this.w4 = null, this.a0 = null, this.aJl = null, this.a0z = new Uint16Array(c.iC), this.a10 = new Uint16Array(c.iC),
		this.a0y = new Uint16Array(c.iC), this.wR = new Uint16Array(c.iC), this.a0x = new Uint8Array(c.iC), this.t4 = new Uint16Array(c.iC), this.b = function() {
			this.a18.fill(""), this.jA.fill(""), this.sr.fill(0), this.bZ.fill(0), this.l7.fill(0), this.l9.fill(0), this.l8.fill(0), this.lA.fill(0), this.fo.fill(0), this.aEe.fill(0), this.gA.fill(0), this.ga = new Array(c.iC), this.w4 = new Array(
				c.iC), this.a0 = new Array(c.iC), this.aJl = new Array(c.iC), this.a0z.fill(0), this.a10.fill(0), this.a0y.fill(0), this.wR.fill(0), this.a0x.fill(0), this.t4.fill(0)
		}
}

function a2h() {
	var fF, aQY, aQZ, fE, aQa, aQb, aQc, aQd, aQe, aQf, aQg, aG6, aQh, aQi = !1,
		aQj = !1;

	function aQk(a2A) {
		aG6 = bT.db, aQZ = fE = aQY = 0, aQa = (aQh = 33) / a2A, fF = 1 / (a2A / aQh / 4), aQb = (eE.c1 / 2 + kn) / kI, aQc = (eE.dO / 2 + ko) / kI, aQd = kI
	}

	function aQl(b0) {
		var yS; - 1 !== b0 && (b0 = a8.l0(t.u.uk[b0]), yS = a8.jQ(b0) - 15, b0 = a8.jR(b0) - 15, wg.aAB(yS, b0, 29 + yS, 29 + b0))
	}

	function aQr(a28) {
		Math.abs(Math.log(aQg / aQd)) < .125 && (aQg = a28 * aQd)
	}

	function aQq(yS, u1, a0J, a0K) {
		aQe = (yS + a0J + 1) / 2, aQf = (u1 + a0K + 1) / 2;
		a0J = eE.c1 / (a0J - yS + 1), yS = eE.dO / (a0K - u1 + 1);
		aQg = .9 * (a0J < yS ? a0J : yS)
	}
	this.aPw = function() {
		return aQi
	}, this.aM0 = function() {
		aQk(1), this.aAB(0, 0, cd.fR - 1, cd.fS - 1), c.g3 || c.bV || this.aAA(c.ba, 3e3, !0, .3)
	}, this.aAC = function(player, a08) {
		aQl(t.a6.a01(player, a08))
	}, this.aAA = function(player, a2A, aQm, zoom) {
		c.mI || aQi && !aQm && aQj || (0 === z.fo[player] ? aQl(t.a6.a02(player)) : (dv.a9b = !1, aQj = aQm, aQk(a2A), function(player) {
			aQe = (z.l7[player] + z.l8[player] + 1) / 2, aQf = (z.l9[player] + z.lA[player] + 1) / 2
		}(player), function(zoom, player) {
			var kW = z.l8[player] - z.l7[player] + 1,
				player = z.lA[player] - z.l9[player] + 1,
				bE = eE.c1 / kW,
				b1 = eE.dO / player,
				bE = (aQg = bE < b1 ? bE : b1, 0 !== zoom ? zoom : kW < 20 && player < 20 ? .5 : .9);
			aQg *= bE, aQr(7 / 8)
		}(zoom, player), aQi = !0, a2I.aQp()))
	}, this.aIk = function(a2A) {
		c.bV || c.mI || (dv.a9b = !1, aQj = !1, aQk(a2A), aQq(0, 0, cd.fR - 1, cd.fS - 1), aQr(7 / 8), aQi = !0, a2I.aQp())
	}, this.aAB = function(yS, u1, a0J, a0K) {
		aQi = !1, aQq(yS, u1, a0J, a0K), kI = aQg, dv.aQs(aQe, eE.c1 / 2), dv.aQt(aQf, eE.dO / 2), a2S.aIg(), bT.eA = !0
	}, this.os = function() {
		return !(aQi && aQj || (aQi = !1))
	}, this.bS = function() {
		var aQw, aQx, ca, aR0;
		aQi && (aQY < .5 ? fE < aQa && (fE += aQa * fF, aQZ = aQY) : 1 - aQZ < aQY && (fE = (fE -= aQa * fF) < aQa * fF ? aQa * fF : fE), aG6 = aG6 >= bT.db ? bT.db - 1 : aG6, ca = bT.db - aG6, aQY = 1e3 < ca || 1 < (aQY += fE * ca / aQh) ? 1 :
			aQY, aG6 = bT.db, ca = kI, aQw = kn, aQx = ko, ca = (kI = aQd * Math.pow(aQg / aQd, aQY)) / ca, aR0 = 1 - (aQd * Math.pow(aQg / aQd, 1 - aQY) - aQd) / (aQg - aQd), dv.aQs(aQb + aR0 * (aQe - aQb), eE.c1 / 2), dv.aQt(aQc + aR0 * (
				aQf - aQc), eE.dO / 2), e4.zoom(ca, (aQw * ca - kn) / (1 - ca), (aQx * ca - ko) / (1 - ca)), a2S.aIg(), 1 <= aQY && (aQi = !1, mB.a99 = !0), bT.eA = !0)
	}
}

function aR1(qM, size, aR2, aR3, font) {
	var b0, a7J = .2,
		canvas = document.createElement("canvas"),
		jk = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = qM, canvas.height = qM, jk.font = size + font, jk.textAlign = "center", jk.textBaseline = "middle", jk.fillStyle = "red", b0 = 0; b0 < aR2.length; b0++) jk.fillText(aR2[b0], .5 * qM, .5 * qM);
	return -1 < (canvas = function(qQ) {
		var b0, ij, ca = qQ.data;
		for (b0 = ca.length - 4; 0 <= b0; b0 -= 4)
			if (ij = ca[b0], aR3 <= ij) return Math.floor(b0 / (4 * qM));
		return -1
	}(jk.getImageData(0, 0, qM, qM))) && (a7J = (canvas - .5 * qM + .1 * size) / size), Math.max(a7J, 0)
}

function a3L() {
	var input;

	function aR6(iG) {
		(iG = iG.target.files) && 0 < iG.length && a2N.aR9(iG[0])
	}

	function aRA(iG) {
		var dI = new Image;
		dI.onload = aRB, dI.src = iG.target.result
	}

	function aRB(iG) {
		var iG = iG.target,
			c1 = iG.width,
			dO = iG.height,
			aRC = cy.cz.data[162].value,
			max = Math.min(cd.aDA, aRC),
			aRC = (max = dY.id || vD.vE() ? Math.min(1400, aRC) : max) / Math.max(c1, dO);
		if (aRC < 1 && (c1 = Math.floor(aRC * c1 + .125), dO = Math.floor(aRC * dO + .125)), max < c1 || max < dO || c1 < 10 || dO < 10) aRC = "Invalid Image Dimensions!", dY.aEI ? dY.aEI.showToast(aRC) : alert(aRC);
		else {
			for (var max = document.createElement("canvas"), aRC = (max.width = c1, max.height = dO, max.getContext("2d")), aRE = document.createElement("canvas"), aRF = (aRE.width = iG.width, aRE.height = iG.height, aRE.getContext("2d")), iG = (aRF
					.drawImage(iG, 0, 0), aRF.getImageData(0, 0, aRE.width, aRE.height)), aRF = aRC.createImageData(c1, dO), src = iG.data, aRI = aRF.data, aRJ = aRE.width / c1, aRK = aRE.height / dO, fX = 0; fX < dO; fX++)
				for (var fW = 0; fW < c1; fW++) {
					var aRL = Math.floor(fW * aRJ),
						aRL = 4 * (Math.floor(fX * aRK) * aRE.width + aRL),
						aRO = 4 * (fX * c1 + fW);
					aRI[aRO] = src[aRL], aRI[1 + aRO] = src[1 + aRL], aRI[2 + aRO] = src[2 + aRL], aRI[3 + aRO] = 255
				}
			aRC.putImageData(aRF, 0, 0), 20 === cT.cU && cT.eu().aRB(max)
		}
	}
	this.b = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aR6
	}, this.rF = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aR7 = function() {
		input.click()
	}, this.aR9 = function(aF2) {
		var bq = aF2.name.split("."),
			bq = bq[bq.length - 1].toLowerCase();
		"gif" !== bq && "jpg" !== bq && "jpeg" !== bq && "png" !== bq || ((bq = new FileReader).onload = aRA, bq.readAsDataURL(aF2))
	}
}

function aRP() {
	function aRT(bq, c8, s6) {
		for (var b0 = 0; b0 < 256; b0++) bq[b0] = (bq[b0] + (c8 >> (b0 + s6) % 30 & 1)) % 256
	}
	this.bS = function(aRQ, aRR) {
		var bq = new Uint8Array(256);
		return function(bq, aRQ, aRR) {
				var b0, aRV = 3 + (4 + aRQ) % 32768,
					aRW = 12 + aRR % 32768,
					aRX = 17 + ((aRQ & aRR) + (aRQ | aRR) + aRQ) % 32768;
				for (b0 = 0; b0 < 256; b0++) aRV = 1 + aRV * aRW % aRX, bq[b0] = aRV % 256
			}(bq, aRQ, aRR), aRT(bq, aRQ, 2), aRT(bq, aRR, 7),
			function(bq) {
				var b0, c8, cE = 0;
				for (b0 = 0; b0 < 3e4; b0++) c8 = bq[cE], bq[cE] = (c8 + b0 + bq[(cE + b0) % 256]) % 256, cE = (c8 + b0 + cE + (c8 & cE)) % 256
			}(bq),
			function(bq) {
				var b0, eG = 1,
					eI = 1;
				for (b0 = 0; b0 < 256; b0 += 2) eG = (1 + eG) * (bq[b0] + 1) % 1073741824, eI = (1 + eI) * (bq[b0 + 1] + 1) % 1073741824;
				return [eG, eI]
			}(bq)
	}, this.eY = function(aRY, aRZ, aRa, result) {
		for (var bD = 1 << aRY, b0 = 0; b0 < bD; b0++)
			if (this.aRb(b0, aRZ, aRa) === result) return b0;
		return 0
	}, this.aRb = function(aRc, aRZ, aRa) {
		for (var aRd = aRZ + aRc, aRe = aRa + aRc, c8 = aRd + aRe & 2147483647, bE = 1; bE <= 16; bE++) c8 = (c8 = (c8 ^ c8 >> bE) >>> 1 + (3 & aRd)) * (7 + (1023 & (aRd | aRe))) & 1073741823, aRe >>= 1 + (1 & (aRd >>= 1 + (1 & (c8 += 65535 &
			aRe))));
		return c8 &= 1073741823
	}
}

function a3m() {
	this.xC = 0, this.b4 = null, this.ay = null, this.a6 = null, this.u = null, this.a9j = null, this.wx = null, this.message = null, this.zm = null, this.bN = null, this.xD = null, this.zc = new cI, this.zZ = 0, this.aRf = 0, this.b = function() {
		this.aRf = bT.db, this.xC = c9.aW.cA(cy.cz.data[105].value, 5), this.ay = new x8, this.a6 = new aD, this.u = new aHI, this.a9j = new aNn, this.wx = new wl, this.message = new aMv, this.zm = new be, this.bN = new aRg, this.xD = new aH5,
			this.u.b(), rH.b(), this.zZ = 1, dY.dc.setState(1), cj.setState(0)
	}, this.rF = function() {
		this.bN && this.bN.rF(), this.b4 = null, this.ay = null, this.a6 = null, this.u = null, this.a9j = null, this.wx = null, this.message = null, this.zm = null, this.bN = null, this.xD = null, this.zZ = 0, rH.rF(), dY.dc.setState(0)
	}
}

function a3W() {
	this.u = new a51, this.cU = 0;
	var aRh = new Array(32);

	function aRk() {
		for (var az = aRh.length, b0 = 0; b0 < az; b0++) aRh[b0] = null
	}
	this.b = function() {
		for (var aRi, aRj = document.body.firstChild; aRj;) aRi = aRj.nextSibling, !document.body.contains(aRj) || "DIV" !== aRj.tagName && "INPUT" !== aRj.tagName && "BUTTON" !== aRj.tagName || cT.removeChild(document.body, aRj), aRj = aRi
	}, this.iD = function(cE, p6, d1) {
		void 0 === p6 && (p6 = this.cU), bT.eA = !0, 0 === cE && (0 === cj.ek() ? cE = 5 : dY.dc.setState(13)), this.iK(), this.cU === cE && (p6 = aRh[cE].p6, aRh[cE] = null), this.cU = cE;
		var c6 = aRh[cE];
		if (!c6 || 4 === cE || 7 === cE || 8 === cE || 9 === cE || 10 === cE || 11 === cE || 13 === cE || 15 === cE || 18 === cE || 20 <= cE && cE <= 28 || 32 === cE || 33 === cE) {
			if (0 === cE) return void aRk();
			1 === cE ? c6 = new mQ : 2 === cE ? c6 = new aRl : 3 === cE ? c6 = new aRm : 4 === cE || 9 === cE || 10 === cE || 11 === cE || 13 === cE || 33 === cE ? c6 = d1 : 5 === cE ? c6 = new aIz : 6 === cE ? c6 = new aRn : 7 === cE ? c6 =
				new aBs(cT.u.a53) : 8 === cE ? c6 = d1 : 12 === cE ? c6 = new iO : 14 === cE ? c6 = new aIr : 15 === cE ? c6 = new aBs(cT.u.a52) : 16 === cE ? c6 = new aRo : 17 === cE ? c6 = new aRp : 18 === cE ? c6 = new aIa : 19 === cE ? c6 =
				new aRq : 20 === cE ? c6 = new aRr : 21 === cE ? c6 = new aRs : 22 === cE ? c6 = new aRt : 23 === cE ? c6 = new aPe : 24 === cE ? c6 = new aD9 : 25 === cE ? c6 = new aRu : 26 === cE ? c6 = new hm : 27 === cE ? c6 = new aRv :
				28 === cE ? c6 = new oT : 29 === cE ? c6 = new aRw : 30 === cE ? c6 = new aOY : 31 === cE && (c6 = new aNU), c6.p6 = p6, aRh[cE] = c6
		}
		c6.show(d1)
	}, this.hz = function() {
		this.mF() && this.aIs(this.eu().p6)
	}, this.aIs = function(cE) {
		this.mF() && (aRh[cE] ? (this.iK(), bT.eA = !0, this.cU = cE, aRh[cE].show()) : this.iD(cE))
	}, this.iK = function() {
		this.mF() && aRh[this.cU].iK()
	}, this.jl = function() {
		this.mF() && (aRh[this.cU].iK(), aRk(), this.cU = 0, dY.dc.setState(13))
	}, this.gl = function() {
		var c6;
		this.mF() && (c6 = aRh[this.cU]).gl && c6.gl()
	}, this.resize = function() {
		if (!this.mF()) return !1;
		aRh[this.cU].resize()
	}, this.io = function(fW, fX) {
		var c6;
		this.mF() && (c6 = aRh[this.cU]).io && c6.io(fW, fX)
	}, this.is = function(fW, fX) {
		var c6;
		this.mF() && (c6 = aRh[this.cU]).is && c6.is(fW, fX)
	}, this.iu = function() {
		var c6;
		this.mF() && (c6 = aRh[this.cU]).iu && c6.iu()
	}, this.it = function(ip, iq, deltaY) {
		var c6;
		this.mF() && (c6 = aRh[this.cU]).it && c6.it(ip, iq, deltaY)
	}, this.iL = function(code) {
		var c6;
		return !!this.mF() && ((c6 = aRh[this.cU]).iL && c6.iL(code), !0)
	}, this.bS = function() {
		var c6;
		this.mF() && (c6 = aRh[this.cU]) && c6.bS && c6.bS()
	}, this.mF = function() {
		return 0 < this.cU
	}, this.eu = function() {
		return aRh[this.cU]
	}, this.aBq = function(cE) {
		return aRh[cE]
	}, this.hy = function() {
		return aRh
	}, this.removeChild = function(z1, aRx) {
		try {
			z1.removeChild(aRx)
		} catch (iG) {
			console.log("removeChild error " + iG)
		}
	}
}

function aRy() {
	var aRz = null;
	this.a74 = 0, this.aS0 = function() {
		var c8 = cy.cz.data[5].value;
		aRz = "px " + c8, "Trebuchet MS" !== c8 && (aRz += ", Trebuchet MS"), this.a74 = aR1(32, 32, ["a", "b", "m"], 200, aRz)
	}, this.dV = function(c1, dO) {
		var dI = document.createElement("canvas");
		return dI.width = c1, dI.height = dO, dI
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(fV, c1, dO) {
		return fV.getImageData(0, 0, c1, dO)
	}, this.fv = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aRz : 1 === type ? "bold " + size + aRz : 2 === type ? "lighter " + size + aRz : 3 === type ? "italic " + size + aRz : 4 === type ? "oblique " + size + aRz : 5 === type ? "small-caps " +
			size + aRz : "small-caps bold " + size + aRz
	}, this.textAlign = function(jk, id) {
		jk.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(jk, id) {
		jk.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.lj = function(iG, code, color) {
		color = this.pa(di.aGI) + " solid " + (color || aG.am);
		5 === (code = code || 5) ? iG.style.border = color : 4 === code ? iG.style.borderLeft = color : 2 === code ? iG.style.borderBottom = color : 6 === code ? iG.style.borderRight = color : iG.style.borderTop = color
	}, this.pp = function(iG, fW, fX, c1, dO) {
		iG = iG.style;
		iG.left = this.pq(fW), iG.top = this.pq(fX), iG.width = this.pq(c1), iG.height = this.pq(dO)
	}, this.aNE = function(c8) {
		return 1 + c8 * dY.dc.fs()
	}, this.vQ = function(nm, cX) {
		return nm * this.aNE(void 0 === cX ? .5 : cX) * eE.dP / eE.dR
	}, this.po = function(nm, cX) {
		return nm * this.aNE(void 0 === cX ? .5 : cX) * eE.dP
	}, this.aK4 = function(nm, cX, aS2) {
		return this.aNE(cX) * Math.min(nm * eE.dP, aS2 * eE.c1) / eE.dR
	}, this.pa = function(c8) {
		return c8.toFixed(1) + "px"
	}, this.pq = function(c8) {
		return this.yu(c8).toFixed(1) + "px"
	}, this.yu = function(c8) {
		return c8 / eE.dR
	}, this.n1 = function(mn, mo) {
		for (var bF = "<ul>", az = mn.length, b0 = 0; b0 < az; b0++) bF += "<li>" + mn[b0] + ": <a href='" + mo[b0] + "' target='_blank'>" + mo[b0] + "</a></li>";
		return bF += "</ul>"
	}, this.rX = function(aD5) {
		return "<a href='" + aD5 + "' target='_blank'>" + aD5 + "</a>"
	}, this.aCN = function(iG) {
		navigator.clipboard && navigator.clipboard.writeText(iG.value)
	}, this.z7 = function(iG) {
		var g8 = iG.textContent;
		bA.bB.c7(g8, "✔") || (1 === g8.length ? iG.textContent = "✔" : iG.textContent = g8 + " ✔", setTimeout(function() {
			iG.textContent = g8
		}, 500))
	}, this.measureText = function(bF) {
		return dZ.measureText(bF).width
	}, this.pb = function(aRx) {
		aRx.style.overflowX = "auto", aRx.style.overflowY = "hidden", aRx.style.whiteSpace = "nowrap", aRx.addEventListener("wheel", function(iG) {
			Math.abs(iG.deltaY) < Math.abs(iG.deltaX) || (this.scrollLeft += iG.deltaY, this.pr = this.scrollLeft, iG.preventDefault())
		}), aRx.addEventListener("scroll", function() {
			this.pr = this.scrollLeft
		})
	}
}

function aS4() {
	this.aS5 = function() {
		var b0;
		if (eO.size < cp.a4f(23)) bW.u.ec(0, 3259);
		else {
			var pk = eO.eP(6),
				az = eO.eP(10),
				data = [];
			if (9 === pk || 10 === pk || 11 === pk) {
				for (b0 = 0; b0 < az; b0++) data.push([eO.eP(30), c9.dB.eQ(5), eO.aJD(32), 0, eO.eP(30)]);
				8 === cT.cU && cT.eu().ew(21, !0, {
					pk: pk,
					data: data
				})
			} else if (12 === pk) {
				for (b0 = 0; b0 < az; b0++) data.push([eO.eP(20), eO.eP(30), eO.eP(30), eO.aJD(32), eO.eP(30), c9.dB.eQ(5), c9.dB.eQ(5)]);
				8 === cT.cU && cT.eu().ew(21, !0, {
					pk: pk,
					data: data
				})
			} else {
				var aR2 = eO.eP(16);
				if (eO.eb(39 + 16 * aR2 + az * (0 === pk ? 111 : 1 === pk ? 101 : 2 === pk || 3 === pk ? 127 : 212))) {
					if (0 === pk)
						for (b0 = 0; b0 < az; b0++) data.push([eO.eP(30), c9.d3.ez(eO.eP(5)), eO.eP(16), eO.eP(30), eO.eP(30)]);
					else if (1 === pk)
						for (b0 = 0; b0 < az; b0++) data.push([eO.eP(16), c9.d3.ez(eO.eP(3)), eO.eP(16), c9.d3.ez(eO.eP(5)), eO.eP(31), eO.eP(30)]);
					else if (2 === pk || 3 === pk)
						for (b0 = 0; b0 < az; b0++) data.push([eO.eP(30), c9.d3.ez(eO.eP(5)), eO.aJD(32), eO.eP(30), eO.eP(30)]);
					else
						for (b0 = 0; b0 < az; b0++) data.push([eO.eP(20), eO.eP(30), eO.eP(30), eO.eP(30), eO.eP(30), eO.aJD(32), eO.eP(30), c9.d3.ez(eO.eP(5)), c9.d3.ez(eO.eP(5))]);
					8 === cT.cU && cT.eu().ew(21, !0, {
						pk: pk,
						data: data
					})
				} else bW.u.ec(0, 3260)
			}
		}
	}, this.aS6 = function() {
		if (eO.size < cp.a4f(29)) bW.u.ec(0, 3265);
		else {
			var aS7 = eO.eP(4),
				aS8 = eO.eP(7),
				aS9 = eO.eP(11);
			if (eO.eb(29 + 16 * aS8 + 16 * aS9 + 11 * aS7)) {
				for (var data = [], b0 = 0; b0 < aS7; b0++) {
					for (var b9 = c9.d3.ez(eO.eP(3)), aSA = eO.eP(8), aFb = [], bE = 0; bE < aSA; bE++) aFb.push(eO.eP(16));
					data.push({
						name: "[" + b9 + "]",
						aFb: aFb
					})
				}
				8 === cT.cU && cT.eu().ew(23, !0, data)
			} else bW.u.ec(0, 3266)
		}
	}
}

function aLy() {
	aOh = 0, aSF = 2048, aOi = new Uint32Array(4 * aSF), aSG = 0, aSH = new Uint32Array(aSF), aSI = new Uint8Array(cd.fR * cd.fS)
}

function aMk(player) {
	aOj = player, aSJ = !1, aSK(), aSL();
	for (var b0 = o4.o5(aOj) - 1; 0 <= b0; b0--) aSB = b0, aSM();
	aSJ && aSN()
}

function aSN() {
	tQ.aOk(), tQ.aOl()
}

function aSM() {
	aOp = o4.oD(aOj, aSB), aSC = o4.oI(aOj, aSB), aSD = o4.sg(aOj, aSB), aSO(), (0 !== aOh && (aSQ(), aSR()) ? aSS : aSP)()
}

function aSR() {
	if (!((aSE = p.eL(aSC, aOh)) > c.aLs)) {
		if (!aSD) return !1;
		var aST = aOh * (1 + c.aLs);
		aSC += bA.gc.tK(aOj, aST - aSC), aSE = p.eL(aSC, aOh)
	}
	return !0
}

function aSQ() {
	for (var b0 = aOh - 1; 0 <= b0; b0--) aSI[p.eL(aOi[b0], 4)] = 0
}

function aSP() {
	1 === o4.o5(aOj) && wZ.aJi(aOj);
	var g8 = bA.gc.sV(aOj, aSC);
	gq.sW(aOj, aSC - g8, 12), o4.sa(aOj, aSB)
}

function aSK() {
	for (var player = aOj, ga = z.ga, az = Math.min(ga[player].length, aSF), bD = 0, aSU = aSH, b0 = az - 1; 0 <= b0; b0--) aSU[bD++] = ga[player][b0];
	aSG = bD
}

function aSL() {
	for (var b0 = z.ga[aOj].length - 1; 0 <= b0; b0--) aA.aB(z.ga[aOj][b0]) && aA.a97(z.ga[aOj][b0], aOj);
	z.ga[aOj] = []
}

function aSO() {
	aOh = 0, (aOp === c.iC ? aSV : aSW)()
}

function aSW() {
	for (var j6, cX, b0, w3 = aA.w3, ca = 3; 0 <= ca; ca--)
		for (b0 = aSG - 1; 0 <= b0; b0--) j6 = aSH[b0] + w3[ca], cX = p.eL(j6, 4), 0 === aSI[cX] && aA.w6(j6) && aA.kP(j6) === aOp && (aSI[cX] = 1, aOi[aOh++] = j6)
}

function aSV() {
	for (var j6, cX, b0, w3 = aA.w3, ca = 3; 0 <= ca; ca--)
		for (b0 = aSG - 1; 0 <= b0; b0--) j6 = aSH[b0] + w3[ca], cX = p.eL(j6, 4), 0 === aSI[cX] && aA.jL(j6) && (aSI[cX] = 1, aOi[aOh++] = j6)
}

function a2z() {
	var aSX = new Uint16Array(c.iC),
		aSY = 0;

	function aSc(pP, aSa) {
		var dI = bT.bU();
		return 3213 <= dI ? 4 + p.eL(100 * aSa, gB.gC(pP)) : (pP = 1 + p.eL(c.fp, 300), dI < 357 ? 2 + p.eL(100 * aSa, pP) : dI < 714 ? 2 + p.eL(100 * aSa, 4 * pP) : dI < 1071 ? 2 + p.eL(100 * aSa, 10 * pP) : dI < 2142 ? 2 + p.eL(100 * aSa, 30 *
			pP) : 2 + p.eL(100 * aSa, 100 * pP))
	}

	function aSb(pP) {
		return c.fk || 7 <= c.d || 4284 <= bT.bU() || bA.gc.mN(pP)
	}
	this.b = function() {
		aSX.fill(0), aSY = 15
	}, this.vx = function(tF) {
		var player = c.ba;
		return !!bA.gc.tS(player, tF) && !(!bA.gc.tD(player, bA.gc.kl(player, dw.o0()), tF) || (player = tF, tF = a4.lH[0], !aSb(player) && aSX[player] + aSc(player, tF) > aSY))
	}, this.eT = function(pP, aSa) {
		if (!aSb(pP)) {
			aSa = aSc(pP, aSa);
			if (aSX[pP] + aSa > aSY) return !1;
			aSX[pP] += aSa
		}
		return !0
	}, this.bS = function() {
		bT.bU() % 100 == 99 && (bT.bU() < 1071 ? aSY += 4 : bT.bU() < 2142 ? aSY += 6 : bT.bU() < 3213 ? aSY += 8 : aSY += 10)
	}
}

function a3f() {
	var aSd, aSe = new Uint8Array(5),
		aSf = new Uint8Array(5);
	this.aSg = new iv, this.b = function() {
		for (var c8 = cy.cz.data[119].value, b0 = 0; b0 < aSe.length; b0++) aSe[b0] = (c8 >> 2 * b0) % 4
	}, this.px = function() {
		aSd = [L(410), "", L(411, [zG.zE[28]]), L(412, [zG.zE[26]]), L(413, [zG.zE[0]])], this.aSg.b()
	}, this.bS = function() {
		this.aSg.bS()
	}, this.mj = function(id) {
		1 < id && vD.vE() || ! function(cE) {
			if (3 === aSe[cE] || 1 === aSf[cE]) return;
			if (aSf[cE] = 1, !(Math.random() < .6)) {
				aSe[cE]++;
				for (var c8 = 0, b0 = 0; b0 < aSe.length; b0++) c8 += aSe[b0] << 2 * b0;
				cy.ep.eq(119, c8)
			}
			return 1
		}(id) || e.aAD(aSd[id])
	}
}

function aSS() {
	aSi() ? (aSj(), aOp !== c.iC && aSk()) : aSP()
}

function aSk() {
	tQ.aOo(), tQ.aOq(z.w4[aOp]), tQ.aOq(z.a0[aOp]), cd.a8Q(cd.cf) && tQ.aOq(z.aJl[aOp]), tQ.aOr(z.ga[aOp]), tQ.aOs(z.a0[aOp]), tQ.aOs(z.aJl[aOp]), tQ.aOt(), tQ.aOu()
}

function aSj() {
	aSJ = !0, o4.se(aOj, aSB, aSC), o4.sf(aOj, aSB), z.fo[aOj] += aOh, tQ.aOg(), aSl()
}

function aSi() {
	return (aOp === c.iC ? aSm : aSn)()
}

function aSn() {
	var aSo = aOh * c.aLs,
		aSp = aSq(),
		aSr = aSs(),
		aSp = aSo + 2 * aSp + aSr,
		aSu = aSE * aOh;
	return aSp < aSu ? (aSC -= aSp, gq.sW(aOj, aSp, 13), aSv(aSp - aSo, aSr), !0) : aSD && 0 === aSr ? (aSC -= aSu, aSu += bA.gc.tK(aOj, aSp - aSu + 1), gq.sW(aOj, aSu, 13), aSv(aSu - aSo, 0), !0) : (aSC -= aSu, gq.sW(aOj, aSu, 13), aSv(aSu - aSo,
		aSr), !1)
}

function aSv(aSu, aSr) {
	if (0 < aSr) {
		if (aSu <= aSr) return gq.sW(aOp, aSu, 13), void o4.sT(aOp, aOj, aSr - aSu);
		o4.sT(aOp, aOj, 0), aSu -= aSr
	}
	aSu = p.eL(aSu, 2), aSu = Math.min(z.gA[aOp], aSu), gq.sW(aOp, aSu, 13), z.gA[aOp] -= aSu
}

function aSs() {
	return o4.sS(aOp, aOj)
}

function aSq() {
	return p.eL(aOh * z.gA[aOp], 1 + p.eL(10 * z.fo[aOp], 16))
}

function aSm() {
	var aSw = aOh * c.aLs;
	return aSC -= aSw, gq.sW(aOj, aSw, 13), !0
}

function aSl() {
	for (var b0 = aOh - 1; 0 <= b0; b0--) z.ga[aOj].push(aOi[b0]), z.w4[aOj].push(aOi[b0]), aA.a97(aOi[b0], aOj)
}

function a2i() {
	var aSx, aSy, aSz, nL, aT0, aT1, aT2, aT3, aT4, aT5;

	function aT7() {
		var gu = c.gu;
		for (aT4 = gu; aT4 < c.iC; aT4++) aT6();
		for (aT4 = c.g3 ? c.fl : 0; aT4 < gu; aT4++) {
			if (!aTA()) {
				for (var b1 = c.aLt = aT4; b1 < gu; b1++) aT4 = b1, aT6();
				return
			}
			aTB(aT1 + aSx * aT0 + p.eL(aT0, 2), aT2 + aSy * aT0 + p.eL(aT0, 2))
		}
	}

	function aTW(player) {
		for (var l7 = z.l7, l9 = z.l9, l8 = z.l8, lA = z.lA, fX = l9[player]; fX <= lA[player]; fX++)
			for (var fW = l7[player]; fW <= l8[player]; fW++) {
				var g5 = aA.a8s(fW, fX);
				aA.w6(g5) && (aA.a8x(g5) ? aA.a97(g5, player) : aA.a96(g5, player))
			}
	}

	function aTV(bq, oE, pl) {
		var g8 = bq[oE];
		bq[oE] = bq[pl], bq[pl] = g8
	}

	function aTA() {
		return function() {
			var b0;
			for (b0 = 0; b0 < 8; b0++)
				if (aSx = p.eL(aSz * hL.random(), hL.value(100)), aSy = p.eL(nL * hL.random(), hL.value(100)), aTb()) return 1;
			return
		}() || function() {
			var kW, kZ, bE, a79, b1, a78;
			for (kW = p.eL(aSz * hL.random(), hL.value(100)), kZ = p.eL(nL * hL.random(), hL.value(100)), bE = 40; 1 <= bE; bE--)
				for (a79 = nL - bE; 0 <= a79; a79 -= 40)
					for (aSy = (a79 + kZ) % nL, b1 = 40; 1 <= b1; b1--)
						for (a78 = aSz - b1; 0 <= a78; a78 -= 40)
							if (aSx = (a78 + kW) % aSz, aTb()) return 1;
			return
		}()
	}

	function aTb() {
		for (var j6, aTd, gap = p.eL(aT0 - aT3, 2), qf = aT2 + aSy * aT0 + gap, qe = aT1 + aSx * aT0 + gap, aTc = qf + aT3 - 1; qf <= aTc; aTc--)
			for (aTd = qe + aT3 - 1; qe <= aTd; aTd--)
				if (j6 = aA.a8s(aTd, aTc), !aA.aB(j6) || aA.a8x(j6)) return;
		return 1
	}

	function aTB(a78, a79) {
		aT6(), aTe(a78 - 2, a79 - 2)
	}

	function aT6() {
		z.bZ[aT4] = 0, z.fo[aT4] = z.aEe[aT4] = 0, z.ga[aT4] = [], z.w4[aT4] = [], z.a0[aT4] = [], z.aJl[aT4] = [], z.l7[aT4] = z.l9[aT4] = z.l8[aT4] = z.lA[aT4] = 0
	}

	function aTe(a78, a79) {
		var j6, b0, aTf, aTg;
		for (z.bZ[aT4] = 1, z.l7[aT4] = a78 + 10, z.l9[aT4] = a79 + 10, z.lA[aT4] = z.l8[aT4] = 0, aTf = a78; aTf < a78 + 4; aTf++)
			for (aTg = a79; aTg < a79 + 4; aTg++)(a78 < aTf && aTf < a78 + 3 || a79 < aTg && aTg < a79 + 3) && (j6 = aA.a8s(aTf, aTg), aA.aB(j6)) && (z.l7[aT4] = Math.min(aTf, z.l7[aT4]), z.l8[aT4] = Math.max(aTf, z.l8[aT4]), z.l9[aT4] = Math.min(
				aTg, z.l9[aT4]), z.lA[aT4] = Math.max(aTg, z.lA[aT4]), aT5[z.fo[aT4]] = j6, z.fo[aT4]++, aA.a96(j6, aT4));
		for (z.aEe[aT4] = z.fo[aT4], b0 = z.fo[aT4] - 1; 0 <= b0; b0--) aA.zR(aT5[b0], aT4) ? (aA.a97(aT5[b0], aT4), z.w4[aT4].push(aT5[b0])) : aA.a8y(aT5[b0]) ? (aA.a97(aT5[b0], aT4), z.a0[aT4].push(aT5[b0])) : aA.a8t(aT5[b0]) && (aA.a97(aT5[b0],
			aT4), z.aJl[aT4].push(aT5[b0]))
	}
	this.b = function() {
		if (aT5 = new Array(12), aT3 = 6, aT0 = 10, aSz = p.eL(cd.fR, aT0), nL = p.eL(cd.fS, aT0), aT1 = p.eL(cd.fR - aT0 * aSz, 2), aT2 = p.eL(cd.fS - aT0 * nL, 2), c.g3)
			for (var b0 = 0; b0 < c.fl; b0++) aT4 = b0, aT6(), z.bZ[aT4] = 1;
		(0 === c.data.spawningType ? aT7 : 1 === c.data.spawningType ? (aT7(), function() {
			var aTC = c.a7w;
			c.aLv || aTC++;
			if (!(aTC < 3)) {
				for (var data = c.data, a7Y = (c.g3 ? c.fl : 0) + data.teamPlayerCount[0], os = c.aLt, aTD = new Uint32Array(aTC), aTE = new Uint32Array(aTC), aTF = new Uint16Array(aTC), aTG = new Uint16Array(aTC), jJ = jG.jJ, l7 = z.l7,
						l9 = z.l9, l8 = z.l8, lA = z.lA, lQ = a4.lQ, lR = a4.lR, b0 = a7Y; b0 < os; b0++) lQ[b0] = l7[b0] + l8[b0] >> 1, lR[b0] = l9[b0] + lA[b0] >> 1;
				for (b0 = a7Y; b0 < os; b0++) {
					var id = jJ[b0];
					aTD[id] += lQ[b0], aTE[id] += lR[b0]
				}
				var jH = jG.jH;
				for (b0 = 1; b0 < aTC; b0++) {
					var bD = Math.max(data.teamPlayerCount[jH[b0]], 1);
					aTF[b0] = p.eL(aTD[b0], bD), aTG[b0] = p.eL(aTE[b0], bD)
				}
				var aTH = jG.aTH,
					aTI = jG.aTI,
					aTJ = jG.aTJ,
					lP = a4.lP;
				for (b0 = 0; b0 < 512; b0++) lP[b0] = b0;
				for (var ij = 0; ij < 2 + (4 <= aTC); ij++)
					for (b0 = a7Y; b0 < os; b0++) {
						for (var vn = b0, aRd = lP[vn], aTK = 1, uj = p.rn(lQ[aRd] - aTF[1], lR[aRd] - aTG[1]), bE = 2; bE < aTC; bE++) {
							var np = p.rn(lQ[aRd] - aTF[bE], lR[aRd] - aTG[bE]);
							np < uj && (uj = np, aTK = bE)
						}
						var aTL = jJ[vn];
						if (aTK !== aTL) {
							if (2 === ij && 4 <= aTC) {
								var aTM = Math.max((aTK + 1) % aTC, 1),
									aTN = p.rn(lQ[aRd] - aTF[aTM], lR[aRd] - aTG[aTM]);
								for (bE = 1; bE < aTC; bE++) np = p.rn(lQ[aRd] - aTF[bE], lR[aRd] - aTG[bE]), uj < np && np < aTN && (aTN = np, aTM = bE);
								aTM !== aTL && p.rn(aTF[aTL] - aTF[aTM], aTG[aTL] - aTG[aTM]) < p.rn(aTF[aTL] - aTF[aTK], aTG[aTL] - aTG[aTK]) && (aTK = aTM)
							}
							var aTO = jH[aTK],
								aTP = aTI[aTO] + (c.g3 ? 0 : aTJ[aTO]),
								a0N = aTH[aTP],
								aRe = lP[a0N],
								aTQ = aTI[aTO + 1];
							uj = p.rn(lQ[aRe] - aTF[aTL], lR[aRe] - aTG[aTL]);
							for (var dI = aTP + 1; dI < aTQ; dI++) {
								var aTR = aTH[dI],
									aTS = lP[aTR];
								(np = p.rn(lQ[aTS] - aTF[aTL], lR[aTS] - aTG[aTL])) < uj && (uj = np, a0N = aTR)
							}
							a0N < a7Y || os <= a0N || (aRe = lP[a0N], aTD[aTL] += lQ[aRe] - lQ[aRd], aTE[aTL] += lR[aRe] - lR[aRd], aTD[aTK] += lQ[aRd] - lQ[aRe], aTE[aTK] += lR[aRd] - lR[aRe], bD = data.teamPlayerCount[jH[aTL]], aTF[
								aTL] = p.eL(aTD[aTL], bD), aTG[aTL] = p.eL(aTE[aTL], bD), bD = data.teamPlayerCount[aTO], aTF[aTK] = p.eL(aTD[aTK], bD), aTG[aTK] = p.eL(aTE[aTK], bD), lP[vn] = aRe, lP[a0N] = aRd)
						}
					}! function() {
						for (var lP = a4.lP, l7 = z.l7, l9 = z.l9, l8 = z.l8, lA = z.lA, fo = z.fo, aEe = z.aEe, w4 = z.w4, a0 = z.a0, aJl = z.aJl, b0 = 0; b0 < 512; b0++) {
							var aTU = lP[b0];
							if (aTU !== b0) {
								aTV(l7, b0, aTU), aTV(l9, b0, aTU), aTV(l8, b0, aTU), aTV(lA, b0, aTU), aTV(fo, b0, aTU), aTV(aEe, b0, aTU), aTV(w4, b0, aTU), aTV(a0, b0, aTU), aTV(aJl, b0, aTU), aTW(b0), aTW(aTU), lP[b0] = b0;
								for (var dO = aTU, cX = lP[dO]; cX !== b0;) cX = lP[dO = cX];
								lP[dO] = aTU
							}
						}
					}()
			}
		}) : function() {
			var gu = c.gu;
			for (aT4 = gu; aT4 < c.iC; aT4++) aT6();
			for (aT4 = c.g3 ? c.fl : 0; aT4 < gu; aT4++)
				if (! function() {
						var spawningData = c.data.spawningData,
							a78 = spawningData[2 * aT4] + 1,
							spawningData = spawningData[2 * aT4 + 1] + 1;
						if (3 < a78 && a78 < cd.fR - 5 && 3 < spawningData && spawningData < cd.fS - 5 && aA.aB(aA.a8s(a78, spawningData)) && function(a78, a79) {
								var j6, aTd, aTc;
								for (aTc = a79; a79 - 6 < aTc; aTc--)
									for (aTd = a78; a78 - 6 < aTd; aTd--)
										if (j6 = aA.a8s(aTd, aTc), aA.a8x(j6)) return;
								return 1
							}(a78 + 3, spawningData + 3)) return aTB(a78 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aTA()) {
						for (var b1 = c.aLt = aT4; b1 < gu; b1++) aT4 = b1, aT6();
						return
					}
					var a78 = aT1 + aSx * aT0 + p.eL(aT0, 2),
						a79 = aT2 + aSy * aT0 + p.eL(aT0, 2);
					aTB(a78, a79)
				}
		})(), gq.gr[7] = z.fo[c.ba]
	}, this.aLO = function(nW, aFm, aFl) {
		var b0, a78, a79, j6, aSx, aSy;
		for (aT4 = nW, b0 = 0; b0 < 20; b0++)
			for (a78 = aFm + b0; aFm - b0 <= a78; a78--)
				for (a79 = aFl + b0; aFl - b0 <= a79; a79--)
					if ((a78 === aFm + b0 || a78 === aFm - b0 || a79 === aFl + b0 || a79 === aFl - b0) && 3 < a78 && a78 < cd.fR - 5 && 3 < a79 && a79 < cd.fS - 5 && aA.aB(aA.a8s(a78, a79)) && function(a78, a79) {
							var j6, aTd, aTc;
							for (aTc = a79; a79 - 6 < aTc; aTc--)
								for (aTd = a78; a78 - 6 < aTd; aTd--)
									if (j6 = aA.a8s(aTd, aTc), aA.a8x(j6) && !aA.zz(aT4, j6)) return;
							return 1
						}(a78 + 3, a79 + 3)) {
						if (0 < z.fo[aT4]) {
							for (aSy = aSx = j6 = void 0, aSx = z.l8[aT4]; aSx >= z.l7[aT4]; aSx--)
								for (aSy = z.lA[aT4]; aSy >= z.l9[aT4]; aSy--) j6 = 4 * (aSy * cd.fR + aSx), aA.a4C(aT4, j6) && (aA.a91(j6), z.fo[aT4]--);
							aT6()
						}
						return aTe(a78 - 1, a79 - 1), !0
					} return !1
	}, this.aLP = function(nW) {
		aT4 = nW, aTA() ? aTB(aT1 + aSx * aT0 + p.eL(aT0, 2), aT2 + aSy * aT0 + p.eL(aT0, 2)) : aT6()
	}
}

function aMD() {
	var aTj, aTl = new Uint16Array(8);

	function aTm(size, player) {
		for (var b0 = z.ga[player].length - 1; size <= b0; b0--) aA.a98(z.ga[player][b0], player)
	}
	this.b = function() {
		aTj = 0
	}, this.aML = function(player, aMK) {
		return a4.lN[1] = z.ga[player].length, a4.lN[0] === c.iC ? jN.aMC.aQS(player) : this.aQQ(player, a4.lN[0]), (0 !== a4.lN[1] || 0 !== z.ga[player].length) && !(!aMK && a4.lN[1] === z.ga[player].length || (a4.lN[0] === c.iC ? z.a10[
			player]++ : z.a0y[player]++, 0))
	}, this.aMN = function(player) {
		aTm(a4.lN[1], player), o4.eT(player, a4.lH[0], a4.lN[0]), wZ.aMS(player, !1)
	}, this.aQR = function(player, nW, az, gx) {
		var aTn = p.eL(12 * z.gA[player], 1024);
		gx -= gx >= p.eL(z.gA[player], 2) ? aTn : 0, aTm(az, player), o4.eT(player, gx, nW), z.gA[player] -= gx + aTn, wZ.aMS(player, !1)
	}, this.aQQ = function(player, nW) {
		for (var hc, w3 = aA.w3, b0 = z.w4[player].length - 1; 0 <= b0; b0--)
			if (aA.a8x(z.w4[player][b0]))
				for (hc = 3; 0 <= hc; hc--)
					if (aA.w6(z.w4[player][b0] + w3[hc]) && aA.kP(z.w4[player][b0] + w3[hc]) === nW) {
						z.ga[player].push(z.w4[player][b0]);
						break
					}
	}, this.aQS = function(player) {
		for (var w3 = aA.w3, b0 = z.w4[player].length - 1; 0 <= b0; b0--)
			if (aA.a8x(z.w4[player][b0]))
				for (var hc = 3; 0 <= hc; hc--)
					if (aA.jL(z.w4[player][b0] + w3[hc])) {
						z.ga[player].push(z.w4[player][b0]);
						break
					}
	}, this.aQA = function(player, aTo) {
		var b0, bE, hc, w7, az = z.w4[player].length,
			i = 256 <= az ? 12 : 32 <= az ? 6 : 1,
			a7Y = az - 1 - hL.s9(i),
			w3 = aA.w3;
		aTj = 0;
		loop: for (b0 = a7Y; 0 <= b0; b0 -= i)
			for (hc = 3; 0 <= hc; hc--)
				if ((w7 = aA.jL(z.w4[player][b0] + w3[hc]) ? c.iC : aA.kP(z.w4[player][b0] + w3[hc])) === c.iC || aA.w6(z.w4[player][b0] + w3[hc]) && w7 !== player && (aTo || tQ.tR(player, w7))) {
					for (bE = aTj - 1; 0 <= bE; bE--)
						if (aTl[bE] === w7) continue loop;
					if (aTl[aTj] = w7, 8 <= ++aTj) return !0
				}
		return 0 < aTj
	}, this.aQB = function(player, aTo) {
		var b0, hc, w7, w3 = aA.w3;
		for (aTj = 0, b0 = z.w4[player].length - 1; 0 <= b0; b0--)
			for (hc = 3; 0 <= hc; hc--)
				if ((w7 = aA.jL(z.w4[player][b0] + w3[hc]) ? c.iC : aA.kP(z.w4[player][b0] + w3[hc])) === c.iC || aA.w6(z.w4[player][b0] + w3[hc]) && w7 !== player && (aTo || tQ.tR(player, w7))) return aTl[aTj++] = w7, !0;
		return !1
	}, this.aQD = function() {
		for (var b1, b0 = aTj - 1; 0 <= b0; b0--)
			if (aTl[b0] === c.iC) {
				for (aTj--, b1 = b0; b1 < aTj; b1++) aTl[b1] = aTl[b1 + 1];
				return !0
			} return !1
	}, this.aQC = function(player) {
		for (var b1, b0 = aTj - 1; 0 <= b0; b0--)
			if (o4.sb(player, aTl[b0]))
				for (aTj--, b1 = b0; b1 < aTj; b1++) aTl[b1] = aTl[b1 + 1];
		return 0 === aTj
	}, this.aQI = function() {
		for (var b0 = aTj - 1; 0 <= b0; b0--)
			if (bA.gc.mN(aTl[b0])) return !0;
		return !1
	}, this.aQJ = function() {
		for (var b0 = aTj - 1; 0 <= b0; b0--) bA.gc.mN(aTl[b0]) || (aTl[b0] = aTl[--aTj]);
		return 0 < aTj
	}, this.aQG = function(player) {
		for (var b1, aTp = aTl[0], aTq = z.gA[aTp] + o4.sS(aTp, player), b0 = aTj - 1; 1 <= b0; b0--)(b1 = z.gA[aTl[b0]] + o4.sS(aTl[b0], player)) < aTq && (aTp = aTl[b0], aTq = b1);
		return aTp
	}, this.aQL = function(player) {
		var dO, aTr = aTl[0];
		if (1 !== aTj)
			for (var aTs = p.eL(z.l8[player] + z.l7[player], 2), aTt = p.eL(z.lA[player] + z.l9[player], 2), uj = a5H(aTs - p.eL(z.l8[aTr] + z.l7[aTr], 2)) + a5H(aTt - p.eL(z.lA[aTr] + z.l9[aTr], 2)), b0 = aTj - 1; 1 <= b0; b0--)(dO = a5H(aTs - p
				.eL(z.l8[aTl[b0]] + z.l7[aTl[b0]], 2)) + a5H(aTt - p.eL(z.lA[aTl[b0]] + z.l9[aTl[b0]], 2))) < uj && (uj = dO, aTr = aTl[b0]);
		return aTr
	}, this.aQP = function() {
		for (var aTu = aTl, aTv = aTu[0], gA = z.gA, aTw = gA[aTv], b0 = aTj - 1; 1 <= b0; b0--) {
			var j6 = aTu[b0],
				b1 = gA[j6];
			aTw < b1 && (aTv = j6, aTw = b1)
		}
		return aTv
	}, this.aQK = function() {
		return aTl[hL.s9(aTj)]
	}
}

function aTx() {
	this.n2 = function() {
		cy.ep.aTy(), cy.ep.aTz(), bW.u.close(0, 3255), 0 === dY.id ? dY.aEH && dY.aEH.clear() : 1 === dY.id ? dY.aEI.saveString(199, "") : 2 === dY.id && dY.aEP.postMessage("clear")
	}, this.mY = function() {
		2 === dY.id ? dY.aEP.postMessage("showConsentForm") : 1 === dY.id && dY.aEI.setState(7)
	}, this.mc = function() {
		this.setState(14)
	}, this.fs = function() {
		return 1 === cy.cz.aLW(2)
	}, this.aU0 = function() {
		cy.cz.aLV(102, "")
	}, this.setState = function(sq) {
		1 === dY.id && 5 <= dY.mb && dY.aEI.setState(sq)
	}, this.aJa = function() {
		var aU1;
		1 === dY.id && 7 <= dY.mb ? dY.aEI.setState(5) : ((aU1 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aU1.toString())
	}, this.a3r = function() {
		1 !== dY.id || dY.mb < 17 || dY.aEI.saveString(23, document.documentElement.outerHTML)
	}, this.aU2 = function() {
		0 !== dY.id && (1 === dY.id ? dY.aEI.prepareAd("1688441405") : 2 === dY.id && (0 === dY.mb ? dY.aEP.postMessage("prepare ad 2904813909") : dY.aEP.postMessage("loadAds 2904813909")))
	}, this.oS = function(g8) {
		return 0 !== dY.id && 1 !== dY.id && 2 === dY.id && 0 !== dY.mb && (dY.aEP.postMessage("showAd"), !0)
	}, this.a3t = function() {
		2 === dY.id && dY.mb < 23 && cT.iD(4, 1, new js("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + mp.ms + "' target='_blank'>" + mp
			.ms + "</a>", !0, [new hs("⬅️ " + L(33), function() {
				cT.iD(0)
			}, aG.a1D)]))
	}
}

function aU3() {
	function aU6(player, a0A) {
		a0A = a8.l0(t.u.uk[a0A]), a0A = aA.kN(a8.a9(a0A));
		return !!t.a6.zP(player, a0A)
	}

	function aU4(player) {
		return t.ul.s(player) && !t.un.a46()
	}
	this.vx = function(player, jM) {
		return !!aU4(player) && -1 !== (jM = function(player, jM) {
			for (var az = t.u.v, uk = t.u.uk, uZ = t.u.uZ, a04 = a8.kH(), a05 = -1, b0 = 0; b0 < az; b0++) {
				var uj = a8.kc(jM, a8.l0(uk[b0]));
				uj < a04 && bA.gc.st(player, uZ[b0] >> 3) && (a04 = uj, a05 = b0)
			}
			return a05
		}(player, jM)) && !!aU6(player, jM) && (a4.a5[3] = t.u.oF[jM], !0)
	}, this.aU7 = function(player, a08) {
		return !!aU4(player) && !!t.a6.a07(a08) && !!aU6(player, a4.a5[2])
	}, this.aJP = function(player, a08, aU8) {
		return !! function(player, a08, aU8) {
			if (aU4(player) && t.a6.a07(a08)) {
				a08 = a4.a5[2];
				if (bA.gc.st(player, t.u.uZ[a08] >> 3)) {
					if (function(player, a0A) {
							return t.a6.a09(player, a0A) && (a4.bq[0] = t.un.uo(t.u.uY[a0A]), a4.a5[1] = 6, !0)
						}(player, a08)) return 1;
					var aJQ = a8.l0(t.u.uk[a08]),
						a43 = t.a6.zq(player, aJQ);
					if (-1 !== a43) {
						a43 = a8.kc(a43, aJQ);
						if (!(aU8 && 120 < a43)) {
							aU8 = function(a0A, aUC, aJQ) {
								var pI = t.u.uY[a0A],
									a0A = t.u.ui[a0A],
									aUE = a8.kc(aJQ, pI[a0A + 1]);
								if (aUC <= aUE) return t.a6.a0B(aJQ, pI[a0A + 1], aUE, aUC);
								for (var uj = aUC - aUE, az = pI.length - 1, b0 = a0A + 1; b0 < az; b0++) {
									var aUF = a8.kc(pI[b0], pI[b0 + 1]);
									if (uj <= aUF) return t.a6.a0B(pI[b0], pI[b0 + 1], aUF, uj);
									uj -= aUF
								}
								return pI[az]
							}(a08, a43, aJQ);
							if (t.a1r.a3z(player, aU8, 1)) return a4.a5[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, a08, aU8) && (player = a4.a5[2], t.u.oK[player] = 64 + t.u.oK[player] % 64, t.ud.eT(a08, t.u.um), !0)
	}
}

function aUG() {
	var aUH = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aFa = function(db) {
		var aUI, bF = new Date(db.getTime() - 6e4 * db.getTimezoneOffset()).toUTCString();
		return bF.length < 12 || (bF = bF.substring(5, bF.length), 0 === (db = db.getTimezoneOffset())) ? bF : (aUI = (db < 0 ? "+" : "-") + p.eL(Math.abs(db), 60), 0 == (db = Math.abs(db) % 60) ? bF + aUI : bF + aUI + ":" + (db < 10 ? "0" :
			"") + db)
	}, this.aFp = function(db) {
		var bF = db.toUTCString();
		return bF.length < 12 ? bF : function(db) {
			return aUH[db.getUTCDay()]
		}(db) + ", " + bF.substring(5, bF.length - 4)
	}
}

function a3J() {
	this.aUK = null, this.b = function() {
		10 !== c.d ? this.aUK = null : this.aUK = new Uint32Array(c.iC)
	}, this.bS = function() {
		10 === c.d && this.a6()
	}, this.a6 = function() {
		for (var j6, target, ge, aUK = this.aUK, jI = bc.gb, t5 = z.gA, b0 = bc.bd - 1; 0 <= b0; b0--)(j6 = jI[b0]) >= c.fl || (target = Math.max(p.eL(t5[j6], 4), 2048), ge = Math.max(gB.gf(j6), 100), aUK[j6] += p.eL(ge * target, 1e4), aUK[j6] >
			target && (aUK[j6] = target))
	}, this.tC = function(player, gx) {
		return gx > this.aUK[player] ? (gx = this.aUK[player], this.aUK[player] = 0) : this.aUK[player] -= gx, gx
	}
}

function a3P() {
	function aUM(key) {
		var aUN;
		return "undefined" == typeof URLSearchParams || (aUN = window.location.search, "string" != typeof(aUN = new URLSearchParams(aUN).get(key))) || aUN.length < 1 ? null : aUN
	}
	this.cJ = function() {
		if (0 !== dY.id) return !1;
		if (! function() {
				var value = aUM("account");
				if (!value && !(value = aUM("a"))) return void a2O.clear();
				return a2O.clear(), cT.iD(8, cT.cU, new mm(1e3, {
					d2: 0,
					aY: value,
					aBv: 0
				})), 1
			}()) {
			var value = aUM("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			cT.iD(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aU1 = new URL(window.location.href);
		aU1.search = "";
		try {
			return history.replaceState(null, "", aU1.toString()), !0
		} catch (iG) {
			console.log("error 352: " + iG)
		}
		return !1
	}, this.aD6 = function(key, value) {
		if (0 === dY.id) try {
			var aU1 = new URL(window.location.href),
				j6 = aU1.searchParams;
			j6.set(key, value), aU1.search = j6.toString(), history.replaceState(null, "", aU1.toString())
		} catch (iG) {
			console.log("error 358: " + iG)
		}
	}
}

function aMG() {
	function aUR(player) {
		for (var aJl = z.aJl[player], az = aJl.length, qp = Math.max(p.eL(az, 12), 1), w3 = aA.w3, ij = hL.s9(az), b0 = 0; b0 < az; b0 += qp)
			for (var kL = aJl[(b0 + ij) % az], ca = 3; 0 <= ca; ca--) {
				var a5m = kL + w3[ca];
				if (aA.vj(a5m)) return {
					g5: a5m,
					id: aA.kN(a5m),
					j6: player
				}
			}
		return null
	}

	function aUW(player, aUY) {
		var gx = bA.gc.tN(player, gw.s1[gw.gx[player]]);
		z.ga[player].push(aUY.g5), o4.eT(player, gx, aUY.j6), wZ.aMS(player, !0)
	}
	this.bS = function(player) {
		return !!cd.a8Q(cd.cf) && !!c.data.passableMountains && 0 !== z.aJl[player].length && function(player) {
			var aUQ = aUR(player);
			if (null === aUQ) return !1;
			! function(player) {
				for (var gb = bc.gb, bd = bc.bd, az = Math.min(bd, 12), cX = hL.s9(bd), lO = a4.lO, aJl = z.aJl, bD = 0, b0 = 0; b0 < az; b0++) {
					var j6 = gb[(b0 + cX) % bd];
					j6 !== player && aJl[j6].length && tQ.tR(player, j6) && (lO[bD++] = j6)
				}
				a4.lF[0] = bD
			}(player);
			var aUT = function(aUX) {
				for (var az = a4.lF[0], lO = a4.lO, b0 = 0; b0 < az; b0++) {
					var aUY = aUR(lO[b0]);
					if (null !== aUY && aUY.id === aUX) return aUY
				}
				return null
			}(aUQ.id);
			return null !== aUT ? (aUW(player, aUT), !0) : function(player, aUX) {
				var az = jN.jO.jP;
				if (0 !== az)
					for (var g5 = jN.jO.cz[hL.s9(az)] << 2, w3 = aA.w3, ca = hL.s9(4);;) {
						if (g5 += w3[ca], aA.vj(g5)) {
							if (aA.kN(g5) === aUX) return aUW(player, {
								g5: g5,
								j6: c.iC
							}), !0;
							break
						}
						if (!aA.jL(g5)) break
					}
				return !1
			}(player, aUQ.id)
		}(player)
	}
}

function aRs() {
	var hn, ho, hp, oe;

	function ht() {
		hx(), 1 !== c.data.colorsType && (c.data.colorsData = null), cT.hy()[19] = null, cT.hz()
	}

	function aUZ() {
		hx(), cT.iD(21)
	}

	function hx() {
		1 === c.data.gameMode ? c.aGS.n7() : 0 === c.data.gameMode && 1 === c.data.colorsType && bA.c3.i0(hp.i1(), c.data.colorsData, 262143)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, oe = [new hs("⬅️ " + L(33), ht)], 1 === c.data.gameMode && oe.push(new hs(L(414), aUZ, 1, 1)), hn = new hr(L(396), oe), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), 0 === c.data.gameMode && (i6.i9(new iA({
			iB: [L(316), L(37)],
			value: c.data.colorsType
		}, function(cE) {
			hx(), c.data.colorsType = cE, 1 !== c.data.colorsType || c.data.colorsData && c.data.colorsData.length === c.iC || (c.data.colorsData = new Uint32Array(c.iC)), cT.iD(21)
		})), i6.iE(new aCd));
		i6.iE(new aDB({
			value: c.data.selectableColor
		}, L(415), function(value) {
			c.data.selectableColor = value
		})), i2.push(i6)
	}(oe = []), 0 === c.data.gameMode ? 1 === c.data.colorsType && function(i2) {
		var i6 = new i7;
		i6.i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.colorsData, 1)), i6.iE(hp), i2.push(i6)
	}(oe) : (c.aGS.n7(), oe.push(function() {
		var i6 = new i7;
		i6.i8(L(416));
		for (var b0 = 0; b0 < jG.a12.length; b0++) {
			var s6 = (b0 + 1) % jG.a12.length,
				iG = i6.rO((0 == s6 ? "" : "Team ") + jG.a12[s6]);
			b0 && (iG.style.marginTop = "0.5em"), i6.iE(new iF({
				cE: -1,
				value: c.data.teamPlayerCount[s6]
			}, 1, 0, function(iG) {
				hn.iM[1].n5(0);
				var playerCount = p.q(Math.floor(iG.target.value), 0, 512);
				iG.target.value = playerCount, c.data.teamPlayerCount[iG.target.aUb] = playerCount
			})).iG.aUb = s6
		}
		return i6
	}())), oe))
}

function aUc() {
	this.aUd = function(pk, oE, pl) {
		cp.ck(75), cp.cq(1, 0), cp.cq(6, 21), cp.cq(6, pk), cp.cq(1, +(oE < 0)), cp.cq(1, +(pl < 0)), cp.cq(30, Math.abs(oE)), cp.cq(30, Math.abs(pl)), bW.u.send(0, cp.cs)
	}, this.aUe = function(pk, aLl, aLm) {
		cp.ck(18 + 16 * aLl.length + 30), cp.cq(1, 0), cp.cq(6, 22), cp.cq(6, pk), bW.bX.aEY(aLl), cp.cq(30, aLm), bW.u.send(0, cp.cs)
	}, this.aUf = function(pk, aLl, aLm) {
		cp.ck(73), cp.cq(1, 0), cp.cq(6, 28), cp.cq(6, pk), c9.aW.cx(aLl, 5), cp.cq(30, aLm), bW.u.send(0, cp.cs)
	}, this.aUg = function(a57, b8) {
		for (var az = b8.length, aR2 = 0, b0 = 0; b0 < az; b0++) aR2 += b8[b0].length;
		for (cp.ck(21 + 3 * az + 16 * aR2), cp.cq(1, 0), cp.cq(6, 23), cp.cq(3, a57), cp.cq(4, az), cp.cq(7, aR2), b0 = 0; b0 < az; b0++) cp.cq(3, b8[b0].length), aV.d3.d4(b8[b0]);
		bW.u.send(0, cp.cs)
	}, this.aUh = function(a57, oE, pl) {
		cp.ck(52), cp.cq(1, 0), cp.cq(6, 24), cp.cq(3, a57), cp.cq(1, +(oE < 0)), cp.cq(1, +(pl < 0)), cp.cq(20, Math.abs(oE)), cp.cq(20, Math.abs(pl)), bW.u.send(0, cp.cs)
	}
}

function x2() {
	var aSx, aSy, aIB = document.createElement("div"),
		wm = 0,
		aUi = 0;
	this.show = function(fW, fX, bF, x1, aUj) {
		if (wm) {
			if (!x1) return;
			this.iK()
		}
		fW === fX && -1 === fW ? (fW = aSx, fX = aSy) : (aSx = fW, aSy = fX), aUj || (aUi = x1), wm = 1;
		aUj = eE.c1 / eE.dR, aIB.style.whiteSpace = "pre", aIB.textContent = bF, bA.fu.lj(aIB, 5), aIB.style.font = bA.fu.fv(0, bA.fu.vQ(.015)), aIB.style.padding = "0.3em 0.6em", aIB.style.left = fW + "px", aIB.style.top = "0px", document.body
			.appendChild(aIB), x1 = fW + aIB.offsetWidth - aUj;
		0 < x1 && (aIB.style.left = (bF = fW - x1) + "px", bF < 5) && (aIB.style.whiteSpace = "pre-wrap"), aIB.style.top = fX - aIB.offsetHeight + aUi * di.aGI + "px"
	}, this.iK = function(x3) {
		if (wm) {
			if (x3 && aUi) return 0;
			wm = 0, cT.removeChild(document.body, aIB)
		}
		return 1
	}, aIB.style.position = "absolute", aIB.style.backgroundColor = aG.m4, aIB.style.color = aG.am, aIB.style.pointerEvents = "none", aIB.style.zIndex = "5", aIB.style.maxWidth = "100%"
}

function aRv() {
	var hn, ho, hp, i2;

	function ht() {
		hx(), 2 !== c.data.iIncomeType && (c.data.iIncomeData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		2 === c.data.iIncomeType && bA.c3.i0(hp.i1(), c.data.iIncomeData, 255)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(417), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), i6.i9(new iA({
			iB: [L(35), L(36), L(37)],
			value: c.data.iIncomeType
		}, function(cE) {
			hx(), 2 !== cE || c.data.iIncomeData || (c.data.iIncomeData = new Uint8Array(c.iC), c.data.iIncomeData.fill(32)), c.data.iIncomeType = cE, cT.iD(27)
		})), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6;
		1 === c.data.iIncomeType && ((i6 = new i7).i8("Value"), i6.iE(new iF({
			cE: -1,
			value: c.data.iIncomeValue
		}, 1, 0, function(iG) {
			var value = p.q(Math.floor(iG.target.value), 0, 255);
			iG.target.value = c.data.iIncomeValue = value
		})), i2.push(i6))
	}(i2), function(i2) {
		var i6;
		2 === c.data.iIncomeType && ((i6 = new i7).i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.iIncomeData, 4)), i6.iE(hp), i2.push(i6))
	}(i2), i2))
}

function hr(title, mZ, aUm) {
	var pS = document.createElement("div"),
		aUn = document.createElement("div"),
		pV = document.createElement("div"),
		aUo = document.createElement("div"),
		aUp = document.createElement("div");
	this.hv = pV, this.iM = mZ, this.show = function() {
			!1 !== aUm ? document.body.appendChild(pS) : (document.body.appendChild(aUn), document.body.appendChild(aUo))
		}, this.iK = function() {
			!1 !== aUm ? cT.removeChild(document.body, pS) : (cT.removeChild(document.body, aUn), cT.removeChild(document.body, aUo))
		}, this.ia = function() {
			var ib = bA.fu.vQ(.1),
				aUt = bA.fu.vQ(.08 + .04 * (eE.dQ < 1), .3);
			return {
				ib: ib,
				aUt: aUt,
				ie: eE.dO / eE.dR - ib - aUt
			}
		}, this.resize = function(aH0) {
			var az = mZ.length,
				iZ = this.ia(),
				ib = iZ.ib,
				aUt = iZ.aUt;
			for (aUn.style.height = bA.fu.pa(ib), bA.fu.lj(aUn, 2), aUo.style.top = bA.fu.pa(eE.dO / eE.dR - aUt), aUo.style.height = bA.fu.pa(aUt), bA.fu.lj(aUo, 8), pV.style.top = bA.fu.pa(ib), pV.style.height = pV.style.maxHeight = bA.fu.pa(iZ
				.ie), aUn.style.font = bA.fu.fv(0, bA.fu.vQ(.02, .15)), aUo.style.font = bA.fu.fv(0, bA.fu.vQ(.02, .7)), pV.style.font = bA.fu.fv(0, bA.fu.vQ(.02, .35)), b0 = 1; b0 < az; b0++) bA.fu.lj(mZ[b0].button, 4);
			for (var aH1 = 0, b0 = 0; b0 < az; b0++) aH1 += mZ[b0].button.offsetWidth;
			if (aH0 && aH1 < aUo.offsetWidth)
				for (b0 = 0; b0 < az; b0++) mZ[b0].button.style.width = (100 * mZ[b0].button.offsetWidth / aH1).toFixed(2) + "%";
			else
				for (b0 = 0; b0 < az; b0++) mZ[b0].button.style.width = "auto";
			aUo.pr && (aUo.scrollLeft = aUo.pr), aH0 || this.resize(!0)
		}, this.gl = function() {
			var iZ = this.ia(),
				dI = eE.dR;
			dZ.fillStyle = aG.m4, dZ.fillRect(0, dI * iZ.ib, eE.c1, dI * iZ.ie)
		}, pS.style.position = "absolute", pS.style.top = "0", pS.style.left = "0", pS.style.width = "100%", pS.style.height = "100%", aUn.style.position = "absolute", aUn.style.top = "0", aUn.style.left = "0", aUn.style.width = "100%", aUn.style
		.display = "flex", aUn.style.backgroundColor = aG.m4, aUo.style.position = "absolute", aUo.style.left = "0", aUo.style.width = "100%", bA.fu.pb(aUo), aUp.style.height = aUp.style.maxHeight = "100%", pV.style.position = "absolute", pV.style
		.width = "100%", pV.style.backgroundColor = aG.m4,
		function() {
			for (var b0 = 0; b0 < mZ.length; b0++) mZ[b0].button.style.height = "100%", mZ[b0].button.style.padding = "0.0em 0.9em"
		}();
	for (var b0 = 0; b0 < mZ.length; b0++) aUp.appendChild(mZ[b0].button);
	aUn.appendChild(function() {
		var aUs = document.createElement("h1");
		return aUs.textContent = title, aUs.style.margin = "auto", aUs.style.fontSize = 18 <= title.length && eE.dO > eE.c1 ? "1.8em" : "2.3em", aUs.style.fontFamily = "Arial Black, Trebuchet MS", aUs
	}()), aUo.appendChild(aUp), !1 !== aUm && (pS.appendChild(pV), pS.appendChild(aUn), pS.appendChild(aUo))
}

function v8(uv, uw) {
	var aUz, self, aUu = document.createElement("div"),
		aUv = document.createElement("div"),
		a0Q = document.createElement("div"),
		aUw = null,
		aV0 = (this.aCI = new iF({
			value: "",
			cE: -1
		}, 0, aUx, function(iG) {
			iG.target.value = bA.bB.aHk(iG.target.value), aUw.oZ.textContent = 127 - iG.target.value.length
		}), 0),
		aOZ = 1,
		aV1 = 0,
		aV2 = 1048575;

	function aUx() {
		uv(), aUw.oZ.textContent = 127
	}

	function aOc(aLn, b3) {
		b3 && (b3.aj = 1, aLn.appendChild(ax.bN.transform(b3)))
	}

	function aOb(dJ) {
		aOZ ? aUu.scrollTop = aUu.scrollHeight : dJ && (aUu.scrollTop = aV1)
	}
	this.oo = function(aV4) {
			aV2 = 1048575, aUv.textContent = "", aV4 || this.tt()
		}, this.tt = function() {
			var ao = ax.u.cV[0],
				ao = ax.u.bJ[ao],
				bL = ao.bL,
				az = bL.length,
				a7Y = 1048575 === aV2 ? 0 : az - (ao.zg - aV2 + 1048575) % 1048575;
			if (aV2 = ao.zg, !(az <= (a7Y = Math.max(a7Y, 0)))) {
				for (var aLn = document.createDocumentFragment(), b0 = a7Y; b0 < az; b0++) aOc(aLn, ax.a6.ag(bL[b0], ax.a6.aS(bL[b0])));
				aUv.appendChild(aLn), aOb()
			}
		}, this.aN2 = function(aZ) {
			var aLn = document.createDocumentFragment();
			aOc(aLn, aZ), aUv.appendChild(aLn), aOb()
		}, this.show = function(a5C) {
			a5C.appendChild(aUu), a5C.appendChild(a0Q), this.resize(a5C)
		}, this.iK = function(a5C) {
			cT.removeChild(a5C, aUu), cT.removeChild(a5C, a0Q)
		}, this.resize = function(a5C) {
			aV0 = a5C ? a5C.offsetHeight : aV0;
			var a5C = bA.fu.vQ(.04, .75),
				ib = Math.max(a5C, aV0 - a5C),
				aV5 = eE.c1 / eE.dR,
				aJ9 = .7 * aV5,
				aV6 = bA.fu.pa(aV0 - a5C - ib),
				ib = (a0Q.style.height = bA.fu.pa(a5C), aUu.style.height = bA.fu.pa(ib), eE.dO > eE.c1 || dY.dc.fs() ? (a0Q.style.top = aV6, aUu.style.top = bA.fu.pa(aV0 - ib), bA.fu.lj(aUu, 8)) : (aUu.style.top = aV6, a0Q.style.top = bA.fu.pa(aV0 -
						a5C), bA.fu.lj(aUu, 2)), this.aCI.iG.style.width = bA.fu.pa(aJ9), this.aCI.iG.style.fontSize = aUz.button.style.fontSize = bA.fu.pa(.5 * a5C), bA.fu.lj(this.aCI.iG, 6), aUz.button.style.left = bA.fu.pa(aJ9), aUz.button.style
					.width = bA.fu.pa(aV5 - aJ9), .385 * a5C);
			dY.dc.fs() && (ib *= .8 - .12 * (eE.c1 > eE.dO)), aUv.style.marginLeft = aUv.style.marginRight = bA.fu.pa(.5 * ib), aUv.style.fontSize = bA.fu.pa(ib), aOb(1)
		}, (self = this).aCI.iG.aV3 = 127, aUu.style.position = "absolute", aUu.style.left = "0", aUu.style.width = "100%", aUu.style.overflowX = "hidden", aUu.style.overflowY = "auto", aUu.style.font = "inherit", aUu.style.backgroundColor = aG.nf,
		aUu.addEventListener("scroll", function() {
			aV1 = aUu.scrollTop, aOZ = aV1 < aUu.scrollHeight - aUu.clientHeight - 2 ? 0 : 1
		}), aUv.style.font = "inherit", a0Q.style.position = "absolute", a0Q.style.left = "0", a0Q.style.width = "100%", self.aCI.iG.setAttribute("placeholder", L(418)), self.aCI.iG.style.position = "absolute", self.aCI.iG.style.top = "0", self.aCI
		.iG.style.left = "0", self.aCI.iG.style.height = "100%", self.aCI.iG.style.backgroundColor = aG.a7l, self.aCI.iG.style.textAlign = "center", (aUz = new hs(L(216), aUx)).button.top = "0", aUz.button.style.position = "absolute", aUz.button
		.style.height = "100%", aUz.n5(aG.aED), aUw = new oU("127", aUz.button, 1, 1), aUu.appendChild(aUv), a0Q.appendChild(self.aCI.iG), a0Q.appendChild(aUz.button)
}

function lu() {
	this.bS = function(cs) {
		var id, lU, os;
		for (eO.b(cs), eO.cE += 2, os = 8 * eO.size; eO.cE + 8 <= os;) id = eO.eP(4), lU = eO.eP(9), 0 === id ? this.aNT(id, lU, eO.eP(22)) : 1 === id ? this.aNT(id, lU, eO.eP(10), eO.eP(10)) : 2 === id ? this.aNT(id, lU, eO.eP(10), eO.eP(9)) :
			3 === id ? this.aNT(id, lU, eO.eP(10), eO.eP(27)) : 4 === id ? this.aNT(id, lU, eO.eP(10), eO.eP(16)) : 5 === id || 6 === id ? this.aNT(id, lU, eO.eP(10)) : 7 === id ? this.aNT(id, lU, eO.eP(1)) : 10 === id ? this.aNT(id, lU, eO.eP(
				20), eO.eP(22)) : this.aNT(id, lU)
	}, this.aLx = [], this.aV8 = function() {
		for (var aVA = 0, aVB = 0, aVC = 0, aVD = 0, aVE = 0, aVF = 0, b0 = 0; b0 < 512; b0++) aVA += z.bZ[b0], aVB += z.fo[b0], aVC += z.gA[b0], aVD += t.u.x[b0];
		aVE += t.u.v, aVF += bc.bd, this.aLx.push(aVC % 1073741824 * 4 + (aVA + aVB + aVD + aVE + aVF) % 4)
	}, this.aNT = function(id, lU, lW, lY) {
		0 === id ? mf.lr.vi(lU, lW) : 1 === id ? mf.lr.nz(lU, lW, lY) : 2 === id ? mf.lr.tE(lU, lW, lY) : 3 === id ? mf.lr.vv(lU, lW, lY) : 4 === id ? mf.lr.vy(lU, lW, lY) : 5 === id ? mf.lr.nx(lU, lW) : 6 === id ? mf.lr.aMQ(lU, lW) : 7 === id ?
			mf.lr.u4(lU, lW) : 8 === id ? mf.lr.mg(lU) : 9 === id ? mf.lr.aHz(lU) : 10 === id && mf.lr.vo(lU, lW >> 10, lY, lW % 1024)
	}
}

function rZ() {
	var c1, dO, aVG;

	function aVR(vn, ca, aVP, aVJ, a5Y) {
		ca = aVQ(vn, ca + 1 + 2 * aVJ & 3);
		! function(vn, a0N) {
			return 1 < Math.abs(vn % c1 - a0N % c1) || 1 < Math.abs(aVT(vn) - aVT(a0N))
		}(vn, ca) && 0 === a5Y[ca << 2] && (a5Y[ca << 2] = aVP)
	}

	function aVT(j6) {
		return Math.floor((j6 + .5) / c1) % dO
	}

	function aVQ(j6, ca) {
		return j6 + aVG[ca]
	}
	this.eQ = function(bF) {
		var b0, jy, az, aVH, h0 = eO;
		for (c9.aW.jV(c9.aW.jW(bF)), cd.aAn.f2[cd.cf].c1 = cd.fR = c1 = h0.eP(12), cd.aAn.f2[cd.cf].dO = cd.fS = dO = h0.eP(12), aVG = [-c1, -1, c1, 1], cd.a7k = document.createElement("canvas"), cd.a7k.width = cd.fR, cd.a7k.height = cd.fS, cd
			.nP = cd.a7k.getContext("2d", {
				alpha: !1
			}), cd.aPz = cd.a8E = null, cd.aPz = cd.nP.getImageData(0, 0, cd.fR, cd.fS), cd.a8E = cd.aPz.data, bA.c3.fT(cd.a8E), az = h0.eP(12), jy = h0.eP(5), aVH = a4k(c1 * dO - 1), b0 = 0; b0 < az; b0++) ! function(c6, j6, aVI, aVJ) {
			var b0, ca, h0 = eO,
				a5Y = cd.a8E,
				a0w = j6,
				aVM = j6,
				aVN = 0,
				aVO = 1 + aVI,
				aVP = 2 - aVI;
			for (a5Y[j6 << 2] = aVO, b0 = 0; b0 < c6; b0++) ca = h0.eP(2), j6 = aVQ(j6, ca), a5Y[j6 << 2] === aVO ? aVN % 2 == 1 && aVR(aVM, aVN + 2 * aVJ + 3, aVP, aVJ, a5Y) : a5Y[j6 << 2] = aVO, aVR(j6, ca, aVP, aVJ, a5Y), aVR(aVM, ca, aVP,
				aVJ, a5Y), aVM = j6, aVN = ca;
			aVQ(j6, 0) === a0w ? (aVR(j6, 0, aVP, aVJ, a5Y), aVR(a0w, 0, aVP, aVJ, a5Y)) : aVQ(j6, 1) === a0w && (aVR(j6, 0, aVP, aVJ, a5Y), aVR(a0w, 2, aVP, aVJ, a5Y));
			0 === c6 && (aVR(a0w, 0, aVP, aVJ, a5Y), aVR(a0w, 2, aVP, aVJ, a5Y))
		}(h0.eP(jy), h0.eP(aVH), 1 === h0.eP(1), 1 === h0.eP(1));
		var fW, fX, s6, aVU, aVV, aVW, a5Y = cd.a8E,
			aVX = !0,
			fH = cd.aAn.f2[cd.cf].fH,
			fI = cd.aAn.f2[cd.cf].fI;
		for (fX = 0; fX < dO; fX++)
			for (aVU = !0, aVV = aVX, fW = aVW = 0; fW < c1; fW++) s6 = 4 * fX * c1 + 4 * fW, aVW <= fW && 0 < a5Y[s6] && (aVV = 2 === a5Y[s6], aVU) && (aVU = !1, aVV !== aVX) ? (aVX = aVV, aVW = fW + 1, fW = -1) : (aVV ? (a5Y[s6] = fI[0], a5Y[
				1 + s6] = fI[1], a5Y[2 + s6] = fI[2]) : (a5Y[s6] = fH[0], a5Y[1 + s6] = fH[1], a5Y[2 + s6] = fH[2]), a5Y[3 + s6] = 255);
		cd.nP.putImageData(cd.aPz, 0, 0), cd.a7d = !0, cd.aPv.b(), bT.eA = !0
	}
}

function aRo() {
	var iP, mR, mS, mZ;

	function aVY(b0) {
		cT.iD(8, cT.cU, new mm(21, {
			pk: b0,
			oE: 0,
			pl: 10
		}))
	}
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), mR.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, mS = [new hs(L(71), function() {
		aVY(1)
	}, 0, 0, 1), new hs(L(419), function() {
		aVY(2)
	}, 0, 0, 1), new hs(L(420), function() {
		aVY(3)
	}, 0, 0, 1), new hs(L(73), function() {
		aVY(0)
	}, 0, 0, 1), new hs(L(421), function() {
		aVY(9)
	}, 0, 0, 1), new hs(L(338), function() {
		aVY(10)
	}, 0, 0, 1), new hs(L(339), function() {
		aVY(11)
	}, 0, 0, 1)], mZ = [new hs("⬅️ " + L(33), function() {
		cT.hz()
	})], iP = new hr(L(51), mZ), mR = new md(mS, iP.hv)
}

function mm(id, d1, aVZ) {
	var iP, x6;

	function aVd() {
		x6.aVg.innerHTML += "<br>" + L(424)
	}

	function aVf() {
		var b1 = 1;
		cT.iD(4, 1, new js(L(425), L(426), !1, [new hs("🔄 Reload", function() {
			b1 && (setTimeout(function() {
				cT.iD(1)
			}, 5e3), dY.dc.aJa()), b1 = 0
		}, aG.aA6)]))
	}

	function aVc() {
		cp.ck(90), cp.cq(30, Math.floor(p.pow(30) * Math.random())), cp.cq(30, Math.floor(p.pow(30) * Math.random())), cp.cq(30, Math.floor(p.pow(30) * Math.random())), eO.b(cp.cs), cy.ep.eq(110, aV.aW.a4h(aV.aW.a4i(15))), bW.eh.cw()
	}
	this.aVa = !0, this.aVb = id, this.show = function() {
		iP.show(), this.resize(), 15 === id ? (bW.u.xl(id) ? aVc : aVd)() : 16 === id ? bW.u.xl(id) ? bW.bX.eg(2) : aVd() : 17 === id ? bW.u.xl(id) ? bW.bX.eg(3) : aVd() : 18 === id ? (bW.u.close(0, 3253), bW.u.xi(0, id), aVd()) : 21 === id ? bW
			.u.xl(id) ? bW.aVe.aUd(d1.pk, d1.oE, d1.pl) : aVd() : 22 === id ? bW.u.xl(id) ? bW.aVe.aUe(d1.pk, d1.aLl, d1.aLm) : aVd() : 23 === id ? bW.u.xl(id) ? bW.aVe.aUg(d1.a57, d1.b8) : aVd() : 24 === id ? bW.u.xl(id) ? bW.aVe.aUh(d1.a57, d1
				.oE, d1.pl) : aVd() : 25 === id ? bW.u.xl(id) ? bW.eh.dE(d1) : aVd() : 28 === id ? bW.u.xl(id) ? bW.aVe.aUf(d1.pk, d1.aLl, d1.aLm) : aVd() : 29 === id ? bW.u.xl(id) ? bW.eh.d0(d1) : aVd() : 30 === id && (bW.u.xl(id) ? cC.et() ||
				aVf() : aVd())
	}, this.ev = function() {
		15 === id ? aVc() : 16 === id ? bW.bX.eg(2) : 17 === id ? bW.bX.eg(3) : 18 === id ? cT.iD(8, this.p6, new mm(16)) : 21 === id ? bW.aVe.aUd(d1.pk, d1.oE, d1.pl) : 22 === id ? bW.aVe.aUe(d1.pk, d1.aLl, d1.aLm) : 23 === id ? bW.aVe.aUg(d1
			.a57, d1.b8) : 24 === id ? bW.aVe.aUh(d1.a57, d1.oE, d1.pl) : 25 === id ? bW.eh.dE(d1) : 28 === id ? bW.aVe.aUf(d1.pk, d1.aLl, d1.aLm) : 29 === id ? bW.eh.d0(d1) : 30 === id ? cC.et() || aVf() : 1e3 === id && (this.aVb = id = 25,
			bW.eh.dE(d1))
	}, this.ew = function(code, dJ, data) {
		!dJ && code !== id || (15 === code || 16 === code ? cT.iD(7, this.p6) : 17 === code ? (bW.u.close(0, 3252), cy.u.a4x(0), cy.cz.data[117].iB && 0 < cy.cz.data[117].iB.length ? (dJ = cy.u.a4y(0), cy.ep.eq(105, dJ.aY), cy.ep.eq(106, dJ
			.password), cT.iD(8, this.p6, new mm(16))) : (cy.ep.eq(105, ""), cT.u.iW())) : 21 === code ? cT.iD(10, this.p6, new aGZ(data)) : 23 === code ? cT.iD(13, this.p6, new aFI({
			data: data,
			a57: d1.a57
		})) : 25 === code ? (cT.u.a52.aY = d1.aY, cy.tc.tt(d1.aY), cT.iD(15, this.p6)) : 30 === code && (data ? cT.iD(1) : aVf()))
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), x6.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(L(422), [new hs("⬅️ " + L(33), function() {
		aVZ ? cT.iD(29) : cT.u.iW()
	})]), x6 = new x7(iP.hv, L(423))
}

function aVh() {
	var iB = aVi(cd.cf);
	iB && aVj(iB[0], iB[1], iB[2], iB[3], iB[4])
}

function aVi(cf) {
	return 2 === cf ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === cf ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === cf ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === cf ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === cf ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aVj(aVk, aVl, aVm, aVn, aVo) {
	for (var fW, fX, aMr, aMt, a6n, aVr, jt = aVk.length - 1, aVp = cd.fR + cd.fS, az = (aVp *= aVp, aVm.length), aVq = Array(az), b0 = az - 1; 0 <= b0; b0--) aVq[b0] = aVm[b0] * aVm[b0];
	var aVs = new Array(az),
		xy = new Array(az),
		aVt = new Array(az),
		c8 = a2H.hH();
	if (void 0 === aVo)
		for (aVo = new Array(az), b0 = az - 1; 0 <= b0; b0--) aVo[b0] = 0;
	for (b0 = 1; b0 < az; b0++) aVs[b0] = aVq[b0] - aVq[b0 - 1], xy[b0] = aVn[b0] - aVn[b0 - 1], aVt[b0] = aVo[b0] - aVo[b0 - 1];
	for (fW = cd.fR - 1; 0 <= fW; fW--)
		for (fX = cd.fS - 1; 0 <= fX; fX--) {
			for (aMr = aVp, b0 = jt; 0 <= b0; b0--) aMr = (aMt = (fW - aVk[b0]) * (fW - aVk[b0]) + (fX - aVl[b0]) * (fX - aVl[b0])) < aMr ? aMt : aMr;
			for (a6n = aVn[az - 1], aVr = aVo[az - 1], b0 = 1; b0 < az; b0++)
				if (aMr < aVq[b0]) {
					a6n = aVn[b0 - 1] + a5G((aMr - aVq[b0 - 1]) * xy[b0], aVs[b0]), aVr = aVo[b0 - 1] + a5G((aMr - aVq[b0 - 1]) * aVt[b0], aVs[b0]);
					break
				} aVu(cd.fR * fX + fW, a6n, aVr, c8)
		}
}

function aVu(cE, a6n, aVr, c8) {
	a6n < 500 ? c8[cE] = p.eL(c8[cE] * a6n * 2, 1e3) : 500 < a6n && (c8[cE] += p.eL(2 * (1e4 - c8[cE]) * (a6n - 500), 1e3)), c8[cE] += p.eL(aVr * (10 * a6n - c8[cE]), 1e3)
}

function aVv() {
	this.L84 = ["White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia",
		"Australia", "Island Kingdom", "World 2", "British Isles", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Territorial Income", "Back", "Options", "Default", "Uniform", "Customized",
		"Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Replay Error", "Warning", "Loading...",
		"Quit Game", "More", "🔑 My Account", "🏆 Leaderboards", "📜 Logs", "📈 Clan Charts", "▶️ Replay", "🧈 Gold Transfer", "📰 Propaganda", "⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings",
		"Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clans", "Clan Results", "1v1 Players", "Tutorial",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Starting Resources", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "You are leaving Territorial.io.", "Very Easy",
		"Easy", "Normal", "Hard", "Very Hard", "Impossible", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more",
		"You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "No Admin", "Helper",
		"Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "This is a contest!", "Accept",
		"You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️",
		"The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}",
		"Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.",
		"{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Territory", "Numbers", "Statistics", "Refresh", "Public Profile", "🧈 Gold",
		"Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer",
		"Send", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account",
		"Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Spawning", "Random", "Clustered", "Selectable Spawn", "Next Contest: ", "Clan Chart", "🛠️ Options", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY",
		"MAP:", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players",
		"Richest Players", "Patreon Members", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount",
		"Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "You are leaving Territorial.io!", "Activated", "Source Account", "Send gold only to trusted accounts!", "Team {0}", "Team {0} won the game!", "🛠️ Chart Options", "Search Terms",
		"Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "{0} defeated {1}!",
		"LEADERBOARD", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Links",
		"Propaganda Text", "Colors", "Reset", "Language", "Preview", "Launch Campaign", "Gold Investment", "Launch", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Adjust",
		"Selectable Color", "Player Count", "Interest Income", "Type your message here...", "Clan Members", "Admins", "Battle Royale", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "second played", "seconds played", "Loading", "Login", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "⚔️ Play", "Map",
		"Settings", "Game Mode", "Mixed", "Team dependent", "Additional Income", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Procedural Map", "Realistic Map", "Custom Map",
		"Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Incoming Boat!", "Incoming Ship!", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs",
		"Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "1v1", "Zombie", "Chat", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies",
		"🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!"
	]
}

function a3F() {
	var aG1, aG6;
	this.b = function() {
		aG1 = 1, aG6 = 0
	}, this.bS = function() {
		0 < aG1 && (aG6 = 0 === aG6 ? bT.db + 16 : aG6, aG1 = (aG1 -= .001 * (bT.db - aG6)) < 0 ? 0 : aG1, aG6 = bT.db, bT.eA = !0)
	}, this.gl = function() {
		0 < aG1 && (dZ.fillStyle = "rgba(0,0,0," + aG1 + ")", dZ.fillRect(0, 0, eE.c1, eE.dO))
	}
}

function a2p() {
	var bq, qc, qa, aVy, gap, aVz, aW0, aW1, aW2, aW3, ft, aRf, vY, aBU, ng, aPk, aW4;

	function aW6() {
		aVy = Math.floor(.2 * (dY.dc.fs() ? .07 : .035) * eE.dP), aVy = eK(dY.dc.fs() ? 3 : 1, aVy);
		var aW9 = eE.c1 / (bq.length + gap);
		aVy = aVy < aW9 ? aW9 : aVy, ng = Math.floor((1 - gap) * aVy), qc = 0, aWA()
	}

	function aWA() {
		qc = (qc = qc < -20 ? -20 : qc) > (bq.length - 15) * aVy ? (bq.length - 15) * aVy : qc, aW0 = Math.floor(qc / aVy), aW1 = (aW1 = aW0 + Math.floor(eE.c1 / aVy)) > bq.length - 1 ? bq.length - 1 : aW1, aW0 = (aW0 = aW1 < aW0 ? aW1 : aW0) < 0 ?
			0 : aW0;
		var c6 = aW1;
		aVz = qa / bq[c6];
		for (var b0 = aW1 - 1; aW0 <= b0; b0--) bq[b0] > bq[c6] && (c6 = b0, aVz = qa / Math.pow(bq[b0], aBU))
	}

	function aWC(fW) {
		fW = Math.floor((qc + eE.c1 - fW - gap * aVy) / aVy);
		return (fW = fW < -1 ? -1 : -1 === fW ? 0 : fW > bq.length - 1 ? -1 : fW) !== aW2 && (aW2 = fW, -1 === aPk && 0 === aW2 && dp.es && (aPk = setInterval(aWD, 100)), 1)
	}

	function aWE(b0) {
		var fY = Math.floor(aVz * Math.pow(bq[b0], aBU));
		dZ.fillRect(qc + eE.c1 - (b0 + 1) * aVy, eE.dO - fY, ng, fY)
	}

	function aWD() {
		var j6;
		0 !== (aW2 = 8 === cj.ek() ? -1 : aW2) ? (aW4 = (new Date).getTime(), clearInterval(aPk), aPk = -1) : (j6 = bq[1] / 864e3, -1 !== aW4 && (j6 += ((new Date).getTime() - aW4) * bq[1] / 864e5, aW4 = -1), 0 < j6 && (bq[0] += Math.floor(j6), bT
			.eA = !0))
	}
	this.es = !1, this.b = function() {
		aW4 = aPk = -1, aW2 = -(aBU = 1), this.a7f = !1, vY = 0, aRf = new Date, qc = 0, gap = .3, bq = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		qa = Math.floor(.15 * eE.dO), aW3 = (aW3 = Math.floor((dY.dc.fs() ? .018 : .0137) * eE.dP)) < 2 ? 2 : aW3, ft = bA.fu.fv(1, aW3), aW6()
	}, this.aW7 = function(aW8) {
		var b0;
		for (this.es = !0, b0 = 0; b0 < aW8.length; b0++) bq.unshift(aW8[b0]);
		aW6(), bT.eA = !0
	}, this.oj = function() {
		aWA()
	}, this.is = function(fW, fX) {
		fX > eE.dO - .6 * qa ? this.a7f ? fW !== vY && (qc += fW - vY, vY = fW, aWA(), aWC(fW), this.a7f = -1 !== aW2, bT.eA = !0) : aWC(fW) && (bT.eA = !0) : this.oo()
	}, this.oo = function() {
		-1 !== aW2 && (this.a7f = !1, aW2 = -1, bT.eA = !0)
	}, this.it = function(fW, deltaY) {
		-1 !== aW2 && (qc += Math.floor(deltaY), aWA(), aWC(fW), bT.eA = !0)
	}, this.io = function(fW, fX) {
		this.is(fW, fX), -1 !== aW2 && (vY = fW, this.a7f = !0)
	}, this.a7g = function() {
		-1 !== aW2 && (this.a7f = !1)
	}, this.gl = function() {
		dZ.fillStyle = aG.aBV;
		for (var aWG, month, g8, eH, aWJ, aWK, u1, aWL, aWM, b0 = aW1; aW0 <= b0; b0--) aWE(b0);
		this.es && 0 === aW0 && (dZ.fillStyle = aG.tv, aWE(0)), -1 !== aW2 && (dZ.fillStyle = aG.ne, aWE(aW2)), -1 !== aW2 && (dZ.font = ft, bA.fu.textBaseline(dZ, 2), (g8 = new Date).setTime(aRf.getTime() - 1e3 * aW2 * 60 * 60 * 24), month =
			"month", aWG = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(g8), aWG = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(g8)), aWG = aWG + ", " + g8.getUTCDate() + " " + month + " " + g8.getFullYear(), month = 1 === bq[aW2] ? L(427) : L(428), month = bA.bB.aX(bq[aW2]) + " " + month, g8 = Math.floor(dZ.measureText(aWG).width), eH = Math
			.floor(dZ.measureText(month).width), aWJ = Math.floor(.5 * (g8 + aW3)), aWK = (aWK = qc + eE.c1 - (aW2 + 1) * aVy) < aWJ ? aWJ : aWK > eE.c1 - aWJ ? eE.c1 - aWJ : aWK, u1 = eE.dO - Math.floor(aVz * Math.pow(bq[aW2], aBU)), aWL =
			Math.floor(1.1 * aW3), aWM = u1 > eE.dO - aWL ? eE.dO - aWL : u1, dZ.fillStyle = aG.g6, dZ.fillRect(eE.c1 - eH - aW3, aWM - aWL, eH + aW3, aWL), dZ.fillRect(aWK - aWJ, eE.dO - aWL, g8 + aW3, aWL), dZ.fillStyle = aG.am, bA.fu
			.textAlign(dZ, 2), dZ.fillText(month, Math.floor(eE.c1 - .5 * aW3), aWM), bA.fu.textAlign(dZ, 1), dZ.fillText(aWG, aWK, eE.dO), dZ.strokeStyle = aG.aDj, dZ.lineWidth = 1, dZ.beginPath(), dZ.moveTo(0, u1), dZ.lineTo(eE.c1, u1), dZ
			.closePath(), dZ.stroke())
	}
}

function aMH() {
	this.bS = function(player) {
		var a41 = function(player) {
			for (var un = t.un.aP1(), az = un.length, c6 = Math.min(az, 32), s6 = hL.s9(az), b0 = 0; b0 < c6; b0++) {
				var a41 = (b0 + s6) % az,
					pI = un[a41],
					kd = pI[0],
					ke = pI[pI.length - 1];
				if (t.a6.zy(player, kd) && t.a6.a00(player, ke)) return a41;
				if (t.a6.zy(player, ke) && t.a6.a00(player, kd)) return 0 <= (a41 = t.un.a45(ke, kd)) ? a41 : t.un.a46() ? -1 : t.un.a47(t.un.uo(pI))
			}
			return -1
		}(player);
		return -1 !== a41 && (a41 = t.un.get(a41), !t.a6.a0M(player, a41)) && (a4.bq[0] = a41, !0)
	}
}

function a2t() {
	var aWO, aWP, nM, aWQ, aWR, aWS, aWT, aWU, aWV, nK, aWW, aLI, aWX, aWY = 1;

	function aWa(aWb) {
		!aWb && 1 === aWX && aWY ? (aWY = 0, bW.u.close(aWX, 3280)) : aWX = (aWX + 1) % bW.u.xW, aLI = bT.db, bW.u.xi(aWX, 4) && bW.by.el(aWX)
	}

	function aWd() {
		0 === aWX ? xp.xq(3249) : aWa()
	}

	function aWi(fX, aVy, vJ) {
		var yS = Math.floor((eE.c1 - aWQ) / 2) + aWT,
			a0J = yS + Math.floor(vJ * (aWQ - 2 * aWT));
		dZ.lineWidth = aVy, dZ.beginPath(), dZ.moveTo(yS, fX), dZ.lineTo(a0J, fX), dZ.lineTo(Math.floor(yS - aWT + vJ * aWQ), fX + nM), dZ.lineTo(yS - aWT, fX + nM), dZ.closePath()
	}
	this.aWZ = 1, this.b = function() {
		cj.setState(6), aWO = 0, aWP = 1, aWU = "rgba(0,220,120,0.4)", aWV = "rgba(0,0,0,0.8)", this.resize(), bT.eA = !0, aWY = 1, aWX = this.aWZ - 1, aWa(1)
	}, this.resize = function() {
		aWQ = Math.floor((dY.dc.fs() ? .5 : .25) * eE.dP), aWR = aWQ + 12, nM = Math.floor(.125 * aWQ), aWT = 3 * nM, aWS = Math.floor(.225 * aWQ), aWW = Math.floor(.3 * nM), nK = bA.fu.fv(0, aWW)
	}, this.aWc = function(cu) {
		cu === aWX && aWd()
	}, this.io = function(fW, fX) {
		var yS = Math.floor((eE.c1 - aWR) / 2),
			u1 = Math.floor(.5 * (eE.dO - di.gap - nM - aWS)) + nM + di.gap;
		return yS < fW && fW < yS + aWR && u1 < fX && fX < u1 + aWS && (this.a9m(), dl.is(fW, fX, !1), !0)
	}, this.a9m = function() {
		bW.u.xr(3260), cT.u.a55()
	}, this.bS = function() {
		6 === cj.ek() && (bT.db > aLI + 12e3 && aWd(), 100 < (aWO += .07 * aWP * (aWO < 16 ? 5 + aWO : 84 < aWO ? 105 - aWO : 17)) ? (aWO = 100, aWP = -1) : aWO < 0 && (aWO = 0, aWP = 1), aWU = "rgba(0," + Math.floor(190 - 1.9 * aWO) + "," + Math
			.floor(120 - 1.2 * aWO) + "," + (.4 + .004 * aWO) + ")", aWV = "rgba(0," + Math.floor(1.9 * aWO) + "," + Math.floor(1.2 * aWO) + "," + (.8 - .004 * aWO) + ")", bT.eA = !0)
	}, this.gl = function() {
		var fW = Math.floor((eE.c1 - aWR) / 2),
			fX = Math.floor(.5 * (eE.dO - di.gap - nM - aWS));
		! function(title, fX, aVy, vJ) {
			dZ.fillStyle = aWV, aWi(fX, aVy, 1), dZ.fill(), dZ.fillStyle = aWU, aWi(fX, aVy, vJ), dZ.fill(), dZ.strokeStyle = aG.am, aWi(fX, aVy, 1), dZ.stroke(),
				function(aWk, fX) {
					bA.fu.textAlign(dZ, 1), bA.fu.textBaseline(dZ, 1), dZ.font = nK, dZ.fillStyle = aG.am, dZ.fillText(aWk, Math.floor(.5 * eE.c1), Math.floor(fX + .58 * nM))
				}(title, fX)
		}(L(429), fX, 3, aWO / 100),
		function(fW, fX, c1, dO, ah) {
			dZ.fillStyle = aG.a7l, dZ.fillRect(fW, fX, c1, dO), dZ.lineWidth = 3, dZ.strokeStyle = aG.am, dZ.strokeRect(fW, fX, c1, dO);
			var az = Math.floor(.3 * dO);
			bA.fu.textAlign(dZ, 1), bA.fu.textBaseline(dZ, 1), dZ.font = bA.fu.fv(0, az), dZ.fillStyle = aG.am, dZ.fillText(ah, Math.floor(fW + c1 / 2), Math.floor(fX + dO / 2 + .1 * az))
		}(fW, fX + nM + di.gap, aWR, aWS, L(33))
	}
}

function a2o() {
	var aWl, aWm, c1, fW, fX, aWn, aWo;
	this.b = function() {
		aWl = new Array(2), aWm = new Array(2), this.a9b = !1, aWo = aWn = ko = kn = 0, kI = 1, this.resize()
	}, this.resize = function() {
		c1 = (c1 = Math.floor((dY.dc.fs() ? .072 : .0502) * eE.dP)) < 8 ? 8 : c1;
		for (var b0 = 1; 0 <= b0; b0--) aWl[b0] = document.createElement("canvas"), aWl[b0].width = c1, aWl[b0].height = c1, aWm[b0] = aWl[b0].getContext("2d", {
			alpha: !0
		});
		this.fy(),
			function() {
				for (var aWx = Math.floor(1 + c1 / 20), b0 = 1; 0 <= b0; b0--) aWm[b0].clearRect(0, 0, c1, c1), aWm[b0].fillStyle = aG.li, aWm[b0].beginPath(), aWm[b0].arc(c1 / 2, c1 / 2, c1 / 2 - aWx, 0, 2 * Math.PI), aWm[b0].fill(), aWm[b0]
					.lineWidth = aWx, aWm[b0].fillStyle = aG.am, aWm[b0].strokeStyle = aG.am, aWm[b0].beginPath(), aWm[b0].arc(c1 / 2, c1 / 2, c1 / 2 - aWx, 0, 2 * Math.PI), aWm[b0].stroke(), u0(aWm[b0], 0, 0, c1, aWx, .3, 0 === b0)
			}()
	}, this.a8r = function() {
		return -kn / kI
	}, this.u2 = function() {
		return -ko / kI
	}, this.aQs = function(aRJ, kU) {
		kn = kI * aRJ - kU
	}, this.aQt = function(aRK, kV) {
		ko = kI * aRK - kV
	}, this.io = function(aWr, a7m) {
		return c.mI || ! function(aWr, a7m) {
			return Math.pow(aWr - (fW + c1 / 2), 2) + Math.pow(a7m - (fX + c1 / 2), 2) < c1 * c1 / 4 || Math.pow(aWr - (fW + c1 / 2), 2) + Math.pow(a7m - (fX + 2 * c1), 2) < c1 * c1 / 4
		}(aWr, a7m) || cy.cz.data[8].value ? (wg.os() && (this.a9b = !0, aWn = aWr, aWo = a7m), !1) : a7m < fX + 1.25 * c1 ? this.it(Math.floor(eE.c1 / 2), Math.floor(eE.dO / 2), -200) : this.it(Math.floor(eE.c1 / 2), Math.floor(eE.dO / 2),
			200)
	}, this.is = function(aWr, a7m) {
		var aWs, aWt, kW, kZ;
		return !wg.os() || (aWs = kn, aWt = ko, kn += kW = aWn - aWr, ko += kZ = aWo - a7m, e4.is(kW, kZ), this.e7(), aWn = aWr, aWo = a7m, aWs !== kn) || aWt !== ko
	}, this.it = function(ip, iq, deltaY) {
		var nm;
		if (wg.os()) {
			if (0 < deltaY) nm = (nm = 500 / (500 + deltaY)) < .5 ? .5 : nm;
			else {
				if (!(deltaY < 0)) return !1;
				nm = 2 < (nm = (500 - deltaY) / 500) ? 2 : nm
			}
			this.aMu(ip, iq, nm), bT.eA = !0
		}
		return !0
	}, this.aMu = function(fW, fX, g5) {
		var a6n;
		g5 = a6n = (a6n = 1024 < (a6n = g5) * kI ? 1024 / kI : a6n) * kI < .125 ? .125 / kI : a6n, e4.zoom(g5, fW, fX),
			function(a6n, ip, iq) {
				kI *= a6n, kn = (kn + ip) * a6n - ip, ko = (ko + iq) * a6n - iq, dv.e7()
			}(g5, fW, fX)
	}, this.e7 = function() {
		var aJ8 = eE.c1 / 16,
			ro = 0,
			aWw = eE.dO / 16,
			rp = 0;
		kn < -eE.c1 + aJ8 && (ro = -eE.c1 + aJ8 - kn), kn > kI * cd.fR - aJ8 && (ro = kI * cd.fR - aJ8 - kn), ko < -eE.dO + aWw && (rp = -eE.dO + aWw - ko), ko > kI * cd.fS - aWw && (rp = kI * cd.fS - aWw - ko), kn += ro, ko += rp, a2S.aIg(), e4
			.a6m(ro, rp)
	}, this.fy = function() {
		fW = eE.c1 - c1 - di.gap, fX = Math.floor(eE.dO / 2 - 1.25 * c1)
	}, this.gl = function() {
		cy.cz.data[8].value || (dZ.drawImage(aWl[0], fW, fX), dZ.drawImage(aWl[1], fW, Math.floor(fX + 3 * c1 / 2)))
	}
}

function a3R() {
	this.aJo = new yV, this.aD7 = new a5P, this.u = new aWy, this.l2 = new w8, this.aBh = new aIY, this.a3 = new aWz, this.aGJ = new aJH, this.a1r = new a3x, this.a48 = new aM3, this.aX0 = new aX1, this.ul = new r, this.vt = new zL, this.un =
		new aOv, this.a6 = new zo, this.vw = new aU3, this.ud = new a1E, this.aMP = new aK9, this.b = function() {
			this.un.b(), this.aD7.b(), this.u.b(), this.l2.b(), this.aBh.b(), this.aX0.b(), this.ud.b()
		}, this.gl = function() {
			this.aX0.gl(), this.aD7.gl()
		}
}

function aRn() {
	var iP, aBt, i2;
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), aBt.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, iP = new hr(L(430), [new hs("⬅️ " + L(33), function() {
		cT.iD(7, cT.aBq(7).p6)
	}), new hs(L(241), function() {
		cy.ep.eq(105, c9.aW.aHD(aBt.aX3[0].rI[0].iG.value, 5)), cy.ep.eq(106, c9.aW.aHD(aBt.aX3[1].rI[0].iG.value, 15)), cT.iD(8, cT.aBq(7).p6, new mm(18))
	})]), aBt = new hu(iP.hv, ((i2 = []).push(function() {
		var i6 = new i7;
		return i6.i8(L(219)), i6.iE(new iF({
			value: "",
			cE: -1
		})), i6
	}()), i2.push(function() {
		var i6 = new i7,
			aCO = (i6.i8(L(221)), new iF({
				value: "",
				cE: -1
			}));
		return aCO.iG.type = "password", i6.iE(aCO), i6.iE(new a5M([new hs(L(222), function(iG) {
			return iG.textContent === L(222) ? (iG.textContent = L(223), aCO.iG.type = "text") : (iG.textContent = L(222), aCO.iG.type = "password"), !0
		}).button])), i6
	}()), i2.push(function() {
		var i6 = new i7;
		return i6.i8(L(225)), i6.rK(L(431)), i6.rK(L(432)), i6.rK(L(433)), i6
	}()), i2))
}

function aX5() {
	this.xn = function(cu) {
		var aXB;
		cp.ck(55), cp.cq(1, 0), cp.cq(6, 13), cp.cq(14, jo.aDE), cp.cq(4, dY.id), cp.cq(7, dY.mb), cp.cq(1, +jo.aJd), cp.cq(1, +jo.aJe), cp.cq(5, (new Date).getHours() % 24), aXB = cC.aXC(), cp.cq(8, aXB[0]), cp.cq(8, aXB[1]), bW.u.send(cu, cp
			.cs)
	}, this.ef = function(cu, eV, ee, ed) {
		cp.ck(100), cp.cq(1, 0), cp.cq(6, 14), cp.cq(3, ed), cp.cq(30, eV[0]), cp.cq(30, eV[1]), cp.cq(30, ee), bW.u.send(cu, cp.cs)
	}, this.eZ = function(cu, eV) {
		cp.ck(37), cp.cq(1, 0), cp.cq(6, 30), cp.cq(30, eV), bW.u.send(cu, cp.cs)
	}, this.eg = function(id) {
		cp.ck(13), cp.cq(1, 0), cp.cq(6, 15), cp.cq(6, id), bW.u.send(0, cp.cs)
	}, this.yn = function(id, value) {
		cp.ck(43), cp.cq(1, 0), cp.cq(6, 3), cp.cq(6, id), cp.cq(30, value), bW.u.send(0, cp.cs)
	}, this.aX7 = function(id, bF) {
		var az = Math.min(bF.length, 63);
		cp.ck(19 + 16 * az), cp.cq(1, 0), cp.cq(6, 26), cp.cq(6, id), cp.cq(6, az), aV.d3.d4(bF), bW.u.send(0, cp.cs)
	}, this.aX8 = function(aX9, b3) {
		cp.ck(7 + 26 * b3.length), cp.cq(1, 0), cp.cq(6, 9);
		for (var b0 = 0; b0 < b3.length; b0++) cp.cq(16, b3[b0][0]), cp.cq(10, b3[b0][1]);
		bW.u.send(aX9, cp.cs)
	}, this.bY = function(aXA, jp) {
		cp.ck(20), cp.cq(1, 0), cp.cq(6, 19), cp.cq(1, aXA), cp.cq(12, jp), bW.u.send(bW.u.xa, cp.cs)
	}, this.aEY = function(username) {
		cp.cq(5, username.length), aV.d3.d4(username)
	}
}

function q0() {
	this.db = bT.db, this.cE = 0, this.q2 = 0, this.a4Q = 0, this.aXD = null, this.aXE = 7, this.aEm = 0, this.b = function() {
		this.a4Q = 0, this.aXD = [], this.cE = 0, this.q2 = 0
	}, this.aXF = function(cs) {
		if (c.g3) this.gh(cs);
		else if (this.aXD.push(cs), 2 === c.dr) {
			for (var b0 = 0; b0 < this.aXD.length; b0++) mf.lt.bS(this.aXD[b0]);
			this.aXD = []
		}
	}, this.gh = function(cs) {
		2 !== c.dr && (mf.lt.bS(cs), jd.bS(), du.gh(this.a4Q), this.a4Q === c.gk ? (c.aI1.bS(), this.a4Q = 0, this.cE = 0, this.q2 = 0, this.db = bT.db) : (this.a4Q++, e4.a6i(), e4.g4(!0), mB.aEi()))
	}, this.bS = function() {
		eE.bS(), c.g3 ? (bT.eA = du.gh(-1) || bT.eA, wk()) : (0 !== this.cE || bT.db >= this.db && (this.db += bT.gg * Math.floor(1 + (bT.db - this.db) / bT.gg), 2 === c.dr ? wW() : this.aXG(), this.cE++, 27 < bT.db - this.aEm)) && this.aXH(),
			wf(), bT.eA && (bT.eA = !1, aHv()), this.aEm = bT.db
	}, this.aXH = function() {
		bT.eA = !0, wj(), this.cE = 0
	}, this.aXG = function() {
		var aEO, b0;
		if (this.q2 !== 7 * this.a4Q) wX(), mB.aEi();
		else {
			aEO = !1;
			loop: for (; this.aXI() && (aEO = !0, wX(), 2 !== c.dr) && 0 < this.aXD.length;)
				for (b0 = this.aXE - 2; 0 <= b0; b0--)
					if (wX(), 2 === c.dr) break loop;
			aEO ? mB.aEi() : (wW(), mB.aEj())
		}
	}, this.aXI = function() {
		return 0 < this.aXD.length && (this.a4Q++, mf.lt.bS(this.aXD[0]), this.aXD.shift(), !0)
	}
}

function iX(aXJ, aXK, aXL) {
	this.fW = 0, this.fX = 0, this.c1 = 0, this.dO = 0, this.resize = function() {
		this.dO = Math.min(bA.fu.aNE(aXL || .5) * aXJ[1] * eE.dP, eE.dO - 2 * di.gap), this.c1 = Math.min(this.dO * (aXJ[0] / aXJ[1]), eE.c1 - 2 * di.gap), this.dO = aXJ[1] * this.c1 / aXJ[0], this.fW = di.gap + aXK[0] * (eE.c1 - this.c1 - 2 * di
			.gap), this.fX = di.gap + aXK[1] * (eE.dO - this.dO - 2 * di.gap)
	}, this.aXM = function() {
		return this.fW + .5 * this.c1
	}
}

function hu(a5C, i2) {
	var rJ = document.createElement("div");

	function a6W() {
		var b0, aS1, dO, cX, ca, aXO = eE.dR * rJ.offsetWidth,
			aXQ = new Float64Array(function(aXO) {
				var c1 = .25 * bA.fu.aNE(.6) * eE.dP;
				return Math.max(Math.floor(aXO / c1), 1)
			}(aXO)),
			a5F = di.a5F,
			aXR = (aXO - (aXQ.length + 1) * di.gap) / (aXQ.length * eE.dR);
		for (aXQ.fill(a5F), b0 = 0; b0 < i2.length; b0++) aS1 = (ca = i2[b0].rJ).style, dO = bA.c3.min(aXQ), cX = aXQ.indexOf(dO), aS1.top = bA.fu.pa(dO), aS1.left = bA.fu.pa(a5F + cX * (aXR + a5F)), aS1.width = bA.fu.pa(aXR), bA.fu.lj(ca, 5), aXQ[
			cX] += ca.offsetHeight + 3 * a5F;
		rJ.style.height = bA.fu.pa(bA.c3.max(aXQ) - 2 * a5F)
	}
	this.aVg = rJ, this.aX3 = i2, this.resize = function() {
		var b0;
		for (b0 = 0; b0 < i2.length; b0++) i2[b0].resize();
		a6W(), a6W()
	}, rJ.style.width = "100%", rJ.style.maxWidth = "100%", a5C.style.lineHeight = "1.5em", a5C.style.overflowX = "hidden", a5C.style.overflowY = "auto";
	for (var b0 = 0; b0 < i2.length; b0++) rJ.appendChild(i2[b0].rJ);
	a5C.appendChild(rJ)
}

function a3k() {
	function aXS(iG) {
		aWN(iG), cT.iD(4, 5, new js("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new hs("⬅️ " + L(33), function() {
				cT.hz()
			}), new hs("🔄 Reload", function() {
				dY.dc.aJa()
			}, aG.aA6)]))
	}

	function aXW(iG) {
		aWN(iG), cT.iD(4, 5, new js(L(434), aXV(iG), !0))
	}

	function aXV(iG) {
		var bF = " [" + iG + "]";
		return 3249 === iG || 1006 === iG ? "No Internet / No Server Response" + bF : 4527 === iG ? "Player already in lobby" + bF : 4530 === iG ? "Lobby Timeout" + bF : 4528 === iG ? "Lobby Kick: Another login detected." + bF : 4540 === iG ?
			"You have been kicked." + bF : 4495 === iG ? "Account doesn't exist." : 4229 === iG ? "Bad Internet / Unresponsive Client" + bF : 4555 === iG ? "Invalid Account Error. Please Try Again." + bF : 4557 <= iG && iG <= 4560 ?
			"Please try again later!" + bF : "Unknown error" + bF
	}

	function aWN(iG) {
		aXT(iG), cT.u.a55()
	}

	function aXT(iG) {
		var sq = cj.ek();
		6 === sq ? bW.u.xr(iG) : ax.zZ ? (cT.jl(), ax.rF(), bW.u.close(bW.u.xb, 3256)) : 8 === sq && c.mJ(!0)
	}
	this.aJX = [], this.xu = function(cu, iG) {
		if (this.aJX.push(iG), 8 === cT.cU && 0 === cu)
			if (4211 === iG) aXS(iG);
			else {
				if (ax.zZ && (4495 === iG || 4480 === iG) && bW.u.xb !== cu) return void cT.hz();
				if (8 !== cj.ek() && aXT(), 4480 === iG) return cy.ep.aXX(), void cT.iD(4, 0, new js(L(436), L(437), !0));
				cT.iD(4, 0, new js(L(434), aXV(iG), !0))
			}
		else {
			var sq = cj.ek();
			if (6 === sq) {
				if (4211 === iG) return void aXS(iG);
				if (4215 !== iG && 4516 !== iG && 4527 !== iG && 4533 !== iG && 4528 !== iG && !(4557 <= iG && iG <= 4560)) return void dn.aWc(cu)
			} else {
				if (!ax.zZ) return 8 === sq ? void(cu !== bW.u.xa || c.fk || 1 !== c.dr || c.bV || e.aAO(L(435, [iG]))) : void 0;
				if (cu !== bW.u.xb) return
			}
			aXW(iG)
		}
	}, this.xq = function(iG) {
		this.aJX.push(iG), 8 === cj.ek() ? c.fk || 1 !== c.dr || e.aAO(L(435, [iG])) : aXW(iG)
	}, this.aJZ = function() {
		this.aJX.push(3268), aWN(3268)
	}
}

function a3w() {
	this.dC = function(bF, gz, aXY) {
		for (var aXZ = [], az = bF.length, max = 0, b0 = 0; b0 < az; b0++) {
			var c8 = bF.charCodeAt(b0);
			aXZ.push(c8), max = Math.max(max, c8)
		}
		var h1 = max < 128 ? 7 : 16;
		for (aXY.cq(gz, az), aXY.cq(1, +(16 == h1)), b0 = 0; b0 < az; b0++) aXY.cq(h1, aXZ[b0])
	}
}

function aRq() {
	var hn, ho, i2;

	function aXc() {
		var bD;
		1 === c.data.gameMode ? (c.data.teamPlayerCount || (c.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), c.aGS.n7()), bD = bA.c3.nA(c.data.teamPlayerCount, 0), c.data.numberTeams = bD) : (2 === c.data.botDifficultyType && (c
			.data.botDifficultyType = 0), 1 === c.data.spawningType && (c.data.spawningType = 0))
	}

	function ht() {
		1 !== c.data.gameMode && (c.data.teamPlayerCount = null), aXf(), c.data.canvas = null, cT.iD(5, 5)
	}

	function aXf() {
		jd.je.b(), cy.ep.eq(156, jd.aM1.dC())
	}

	function aXa() {
		c.data.isReplay = 0, aXf(), c.aGS.nE(), cj.a7c(), c.aGS.nB(), c.data.canvas = 2 === c.data.mapType ? cd.a7k : null, c.cl(), c.cm = 1
	}

	function aXq() {
		aXc();
		for (var bq = [aNX(), aXi(), aXj()], b0 = 3; b0 < 6; b0++) cT.removeChild(ho.aVg, ho.aX3[b0].rJ), ho.aX3[b0] = bq[b0 - 3], ho.aVg.appendChild(ho.aX3[b0].rJ);
		ho.resize()
	}

	function aNX() {
		var aXr, i6 = new i7;
		return i6.i8(L(396)), aXr = 0 === c.data.gameMode ? [L(316), L(37)][c.data.colorsType] : c.data.numberTeams + " Team" + (1 === c.data.numberTeams ? "" : "s"), i6.rO(aXr), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(21)
		}).button])), i6
	}

	function aXi() {
		var i6 = new i7,
			bq = (i6.i8(L(155)), [L(36) + ": " + gw.rx[c.data.botDifficultyValue], L(442), L(443), L(37)]);
		return i6.rO(bq[c.data.botDifficultyType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(25)
		}).button])), i6
	}

	function aXj() {
		var i6 = new i7,
			bq = (i6.i8("Spawning"), [L(316), L(317), L(37)]);
		return i6.rO(bq[c.data.spawningType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(24)
		}).button])), i6
	}
	this.show = function() {
		hn.show(), this.resize(), hn.hv.scrollTop = cT.u.a54[0]
	}, this.iK = function() {
		cT.u.a54[0] = hn.hv.scrollTop, hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr("🔧 " + L(379), [new hs("⬅️ " + L(33), ht), new hs(L(438), aXa)]), aXc(), c.data.canvas || (2 === c.data.mapType ? c.data.canvas = cd.a7k : 1 === c.data.mapType ? c.data.canvas = cd.aXe(cd.nC(c.data), 0).a7k : (c.data.mapType =
		0, c.data.passableWater = c.data.passableMountains = 1, c.data.canvas = cd.aXe(cd.nC(c.data), c.data.mapSeed).a7k)), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7,
			jj = (i6.i8(L(439)), c.data.canvas);
		jj.style.width = "100%", i6.iE({
			iG: jj
		}), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(20)
		}).button])), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6 = new i7;
		i6.i8(L(416)), i6.iE(new iF({
			cE: -1,
			value: c.data.playerCount
		}, 1, 0, function(iG) {
			var playerCount = p.q(Math.floor(iG.target.value), 1, 512);
			iG.target.value = c.data.playerCount = playerCount, 1 === c.data.gameMode && (iG = bA.c3.nA(c.data.teamPlayerCount, 0), c.aGS.n7(), bA.c3.nA(c.data.teamPlayerCount, 0) !== iG) && aXq()
		})), i2.push(i6)
	}(i2), function(i2) {
		var i6 = new i7;
		i6.i8(L(441)), i6.i9(new iA({
			iB: ["Battle Royale", "Teams"],
			value: c.data.gameMode
		}, function(cE) {
			c.data.gameMode !== cE && (c.data.gameMode = cE, aXq())
		})), i2.push(i6)
	}(i2), i2.push(aNX()), i2.push(aXi()), i2.push(aXj()), function(i2) {
		var i6 = new i7,
			bq = (i6.i8(L(406)), [L(407), L(408), L(37)]);
		i6.rO(bq[c.data.playerNamesType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(23)
		}).button])), i2.push(i6)
	}(i2), function(i2) {
		var i6 = new i7,
			bq = (i6.i8(L(444)), [L(35), L(36) + ": " + c.data.aIncomeValue, L(37)]);
		i6.rO(bq[c.data.aIncomeType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(22)
		}).button])), i2.push(i6)
	}(i2), function(i2) {
		var i6 = new i7,
			bq = (i6.i8(L(32)), [L(35), L(36) + ": " + c.data.tIncomeValue, L(37)]);
		i6.rO(bq[c.data.tIncomeType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(26)
		}).button])), i2.push(i6)
	}(i2), function(i2) {
		var i6 = new i7,
			bq = (i6.i8(L(417)), [L(35), L(36) + ": " + c.data.iIncomeValue, L(37)]);
		i6.rO(bq[c.data.iIncomeType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(27)
		}).button])), i2.push(i6)
	}(i2), function(i2) {
		var i6 = new i7,
			bq = (i6.i8(L(80)), [L(35), L(36) + ": " + c.data.sResourcesValue, L(37)]);
		i6.rO(bq[c.data.sResourcesType]), i6.iE(new a5M([new hs(L(440), function() {
			cT.iD(28)
		}).button])), i2.push(i6)
	}(i2), function(i2) {
		var i6 = new i7;
		i6.i8(L(445)), i6.iE(new a5M([new hs(L(446), function() {
			cT.jl(), c.aGS.nG(), cT.u.a54[0] = 0, cT.iD(19)
		}).button])), i6.iE(new a5M([new hs(L(447), function() {
			a2U.aEs()
		}).button])), i6.iE(new a5M([new hs(L(448), function() {
			return a2U.aEu(), !0
		}).button])), i2.push(i6)
	}(i2), i2))
}

function a3Y() {
	this.id = 0, this.mb = 0, this.aEH = null, this.aEI = null, this.aEJ = null, this.aEP = null, this.dc = new aTx, this.b = function() {
		var self, mb;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (mb = Android.getVersion()) < 12 || (self.mb = mb, self.id = 1, self.aEI = Android),
			function(self) {
				var mb;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aEJ = mwIOSdataX, self.aEP = window.webkit.messageHandlers.iosCommandA, mb =
					self.aEJ.version, self.mb = mb ? Number(mb) : 0)
			}(this),
			function(self) {
				var aEH;
				try {
					if (!(aEH = window.localStorage)) return;
					aEH.setItem("tls7", "1"), aEH.removeItem("tls7")
				} catch (error) {
					return
				}
				self.aEH = aEH
			}(this)
	}
}

function a2Z() {
	this.fu = new aRy, this.c3 = new aXv, this.gc = new so, this.bB = new aHh, this.fV = new aIh, this.qR = new aXw, this.canvas = new qI, this.color = new aLY, this.aFZ = new aUG, this.b = function() {
		this.fu.aS0()
	}
}

function aRg() {
	var aXx = [],
		pW = [],
		aXy = [];

	function aY0(b3) {
		for (var aZ = b3.aZ, aXz = [];;) {
			var dI = function aY2(aZ, position) {
				position = aZ.indexOf("@", position);
				if (position < 0) return -1;
				var bF = aZ.substring(position + 1, position + 6);
				if (5 !== bF.length) return aY2(aZ, position + 1);
				if (bA.bB.startsWith(bF, "room")) return aY2(aZ, position + 1);
				var aY9 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aY9.test(bF)) return aY2(aZ, position + 1);
				aY9 = aZ.substring(position + 6, position + 7);
				if (1 !== aY9.length) return position;
				bF = new RegExp("^[ :!.]+$");
				if (!bF.test(aY9)) return aY2(aZ, position + 1);
				return position
			}(aZ, 0);
			if (-1 === dI) {
				aXz.push(aY3(aZ, b3));
				break
			}
			0 === dI ? aXz.push(aY4(aZ.substring(1, 6), b3, dI)) : (aXz.push(aY3(aZ.substring(0, dI), b3)), aXz.push(aY4(aZ.substring(dI + 1, dI + 6), b3, dI))), aZ = aZ.substring(dI + 6)
		}
		return aXz
	}

	function aY4(bF, b3, dI) {
		var xA = function(bF) {
				var aY = c9.aW.cA(bF, 5),
					xA = ax.ay.av(aY);
				if (xA) {
					for (aXx.push(xA); 75 < aXx.length;) aXx.shift();
					return xA
				}
				for (var cR = ax.ay.cR, b0 = cR.length - 1; 0 <= b0; b0--)
					if (xA = cR[b0], aY === xA.aY) return aXx.push(xA), xA;
				for (b0 = aXx.length - 1; 0 <= b0; b0--)
					if (xA = aXx[b0], aY === xA.aY) return aXx.push(xA), xA;
				return ax.ay.xB(aY, bF, 1, 999999, 999999, 0, 0, 0, 0)
			}(bF),
			bF = (0 === dI && 0 === b3.aT.id && b3.aj && (b3.fontSize = ax.a6.ar(xA.aq, xA.at), b3.ai = ax.a6.au(xA.at)), document.createElement("span"));
		return bF.textContent = function(xA, b3, dI) {
			if (xA.aY7) return xA.aY7--, dI = 2 === b3.aT.id || (3 === b3.aT.id || 4 === b3.aT.id) && 0 !== dI, xA.username + (dI ? " (" + xA.xL + ")" : "");
			if (b3.aT.bP) return "Redacted " + aV.aW.aX(xA.aY, 2);
			return xA.username
		}(xA, b3, dI), bF.style.display = "inline-block", bF.style.color = ax.a6.ap(xA.aq), bF.style.cursor = "pointer", bF.style.margin = "0", bF.style.font = "inherit", bF.style.minWidth = bF.style.minHeight = "1em", ax.a6.b2(xA) && (bF.style
			.textDecoration = "underline"), xA.xF && (bF.style.textDecorationLine = "underline", bF.style.textDecorationStyle = "dotted"), ax.a6.au(xA.at) && (bF.style.fontWeight = "bold"), bF.onclick = function(iG) {
			ax.a9j.aNt(iG, xA)
		}, vD.vE() || (bF.onmouseover = function(iG) {
			ax.wx.wu(iG, xA)
		}), pW.push(bF), bF
	}

	function aY3(aZ, b3) {
		var oZ = document.createElement("span");
		return oZ.textContent = aZ, oZ.style.color = b3.ak, oZ.style.margin = "0", oZ.style.font = "inherit", oZ
	}

	function aYC(xA, xK, aY) {
		aY !== xA.aY || xA.xL || (xA.xL = xA.username, xA.username = xK)
	}
	this.rF = function() {
		for (var b0 = 0; b0 < pW.length; b0++) pW[b0].onclick = pW[b0].onmouseover = null;
		aXy = pW = null
	}, this.transform = function(b3) {
		for (var rJ = document.createElement("div"), aXz = aY0(b3), b0 = 0; b0 < aXz.length; b0++) rJ.appendChild(aXz[b0]);
		0 === b3.aT.id && (rJ.vx143 = b3.aT, aXy.push(rJ)), rJ.style.margin = "0.6em 0.6em", b3.aj && (rJ.style.marginLeft = rJ.style.marginRight = "inherit"), rJ.style.font = "inherit";
		var aY1 = 0 < b3.aT.id;
		return b3.ai && (rJ.style.fontWeight = "bold"), aY1 && (rJ.style.paddingLeft = "0.7em"), aY1 && (rJ.style.fontStyle = "italic"), rJ.style.fontSize = b3.fontSize.toFixed(2) + "em", rJ
	}, this.zk = function(zi) {
		if (zi && (2 === zi.id && 1 === zi.ab || 3 === zi.id && 2 === zi.ab)) {
			var aY = 3 === zi.id ? zi.target : zi.aY;
			if (!ax.ay.av(aY)) {
				for (var xK = "Redacted " + aV.aW.aX(aY, 2), cR = ax.ay.cR, b0 = cR.length - 1; 0 <= b0; b0--) aYC(cR[b0], xK, aY);
				for (b0 = aXx.length - 1; 0 <= b0; b0--) aYC(aXx[b0], xK, aY)
			}
		}
	}, this.xM = function(aY) {
		for (var aYD = aXy, b0 = aYD.length - 1; 0 <= b0; b0--) {
			var ca = aYD[b0];
			if (ca.vx143.aY === aY) {
				for (; ca.firstChild;) cT.removeChild(ca, ca.firstChild);
				for (var aXz = aY0(ax.a6.ag(ca.vx143, ax.a6.aS(ca.vx143))), bE = 0; bE < aXz.length; bE++) ca.appendChild(aXz[bE]);
				aYD.splice(b0, 1)
			}
		}
	}, this.bI = function(aY) {
		for (var aYD = aXy, b0 = aYD.length - 1; 0 <= b0; b0--) {
			var ca = aYD[b0];
			if (ca.vx143.aY === aY) {
				for (; ca.firstChild;) cT.removeChild(ca, ca.firstChild);
				ca.vx143.aZ = "[Redacted Message]";
				for (var aXz = aY0(ax.a6.ag(ca.vx143, ax.a6.aS(ca.vx143))), bE = 0; bE < aXz.length; bE++) ca.appendChild(aXz[bE]);
				aYD.splice(b0, 1)
			}
		}
	}
}

function a3a() {
	this.eX = new aRP, this.wS = new aHF, this.aEX = new aHw
}

function x7(a5C, rP) {
	var rJ = document.createElement("div");
	this.aVg = rJ, this.resize = function() {
		rJ.style.padding = bA.fu.pa(di.a5F), rJ.style.lineHeight = bA.fu.pa(bA.fu.vQ(.035))
	}, a5C.style.overflowX = "hidden", a5C.style.overflowY = "auto", rJ.innerHTML = rP, a5C.appendChild(rJ)
}

function aRu() {
	var hn, ho, hp;

	function ht() {
		hx(), 3 !== c.data.botDifficultyType || bA.c3.c4(c.data.botDifficultyData) || (c.data.botDifficultyType = 0), 3 !== c.data.botDifficultyType && (c.data.botDifficultyData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		3 === c.data.botDifficultyType && bA.c3.i0(hp.i1(), c.data.botDifficultyData, gw.rx.length - 1)
	}

	function aYE(i2, cE) {
		var i6 = new i7,
			value = (i6.i8(cE < 0 ? L(155) : L(154) + " " + jG.a12[cE % 9]), 0 <= cE && (i6.rO(L(416) + ": " + c.data.teamPlayerCount[cE]).style.marginBottom = "1em"), cE < 0 ? c.data.botDifficultyValue : c.data.botDifficultyTeam[cE]);
		i6.i9(new iA({
			iB: gw.rx,
			value: value
		}, function(s6) {
			cE < 0 ? c.data.botDifficultyValue = s6 : c.data.botDifficultyTeam[cE] = s6
		})), i2.push(i6)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(155), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, function() {
		var i2 = [];
		if (function(i2) {
				var i6 = new i7,
					iB = (i6.i8(L(34)), [L(36), L(442), L(443), L(37)]),
					value = c.data.botDifficultyType;
				0 === c.data.gameMode && (value = Math.min(value, 2), iB.splice(2, 1));
				i6.i9(new iA({
					iB: iB,
					value: value
				}, function(cE) {
					hx(), c.data.botDifficultyType = cE, 0 === c.data.gameMode && 2 === cE && (c.data.botDifficultyType = 3), 3 !== c.data.botDifficultyType || c.data.botDifficultyData || (c.data.botDifficultyData =
						new Uint8Array(c.iC)), 2 !== c.data.botDifficultyType || c.data.botDifficultyTeam || (c.data.botDifficultyTeam = new Uint8Array(9)), cT.iD(25)
				})), i2.push(i6)
			}(i2), 0 === c.data.botDifficultyType) aYE(i2, -1);
		else if (2 === c.data.botDifficultyType)
			for (var b0 = 0; b0 < c.data.teamPlayerCount.length; b0++) c.data.teamPlayerCount[b0] && aYE(i2, b0);
		else 3 === c.data.botDifficultyType && ! function(i2) {
			var i6 = new i7;
			i6.i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.botDifficultyData, 8)), i6.iE(hp), i2.push(i6)
		}(i2);
		return i2
	}())
}

function a2s() {
	var mF, aYF, c1, dO, eG, aYG, aYH, aG1, canvas, aG6, aYI;

	function u2() {
		return Math.floor((eE.c1 - c1) / 2) < dw.dO + 2 * di.gap ? eE.dO - dO - 4 * di.gap - dw.dO : eE.dO - dO - 2 * di.gap
	}
	this.b = function() {
		aYI = mF = !1, eG = .61, aYG = .07, aYH = .09, aG6 = aG1 = dO = 0
	}, this.resize = function() {
		var fV, yS, dI, aYM, aYN, m3;
		mF && (c1 = eJ(c1 = dY.dc.fs() ? Math.floor(.69 * eE.dP) : Math.floor(.5 * eE.dP), eK(eE.c1 - 2 * di.gap, 10)), c1 = eJ(c1, Math.floor(3.57 * eK(eE.dO - 2 * di.gap, 3))), dO = Math.floor(.28 * c1), (canvas = document.createElement(
			"canvas")).width = c1, canvas.height = dO, fV = canvas.getContext("2d", {
			alpha: !0
		}), yS = Math.floor(1 + dO / 40), fV.clearRect(0, 0, c1, dO), fV.fillStyle = aG.g6, fV.fillRect(yS, yS, c1 - 2 * yS, dO - 2 * yS), fV.lineJoin = "bevel", fV.lineWidth = 2 * yS, fV.strokeStyle = aG.am, fV.strokeRect(yS, yS, c1 -
			2 * yS, dO - 2 * yS), fV.imageSmoothingEnabled = !1, dI = dg.get(aYF), aYM = dI.width, m3 = (1 === aYF ? .85 : 21 === aYF ? .666 : .9) * eG * dO / (aYN = dI.height), fV.setTransform(m3, 0, 0, m3, Math.floor((c1 - m3 * aYM) /
			2), Math.floor((dO - m3 * aYN) / 2)), fV.drawImage(dI, 0, 0), fV.setTransform(1, 0, 0, 1, Math.floor(c1 - aYH * dO - aYG * dO - yS), Math.floor(yS + aYG * dO)), function(fV, az) {
			fV.lineWidth = Math.floor(1 + dO / 80), fV.strokeStyle = aG.am, fV.beginPath(), fV.moveTo(0, 0), fV.lineTo(az, az), fV.moveTo(0, az), fV.lineTo(az, 0), fV.stroke()
		}(fV, Math.floor(aYH * dO)), fV.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(c8, aYK, uB, aYL) {
		mF || aYL && aYI || (aYF = uB ? 21 : c8 ? 1 : 2, mF = aYI = !0, this.resize(), e2.iK(), dw.u5(), aG6 = bT.db, aG1 = aYK ? 1 : 0)
	}, this.bS = function() {
		!mF || 1 <= aG1 || (aG1 = 1 < (aG1 += 5e-4 * (bT.db - aG6)) ? 1 : aG1, aG6 = bT.db, bT.eA = !0)
	}, this.io = function(fW, fX) {
		return !(!mF || aG1 <= 0 || (fW -= Math.floor((eE.c1 - c1) / 2), fX -= u2(), fW < 0) || fX < 0 || c1 < fW || dO < fX || (c1 - dO / 3 < fW && fX < dO / 3 && (mF = !1, bT.eA = !0), 0))
	}, this.gl = function() {
		!mF || aG1 <= 0 || (dZ.globalAlpha = aG1, dZ.drawImage(canvas, Math.floor((eE.c1 - c1) / 2), u2()), dZ.globalAlpha = 1)
	}
}

function aEl() {
	this.ez = function(size) {
		for (var h0 = eO, bq = [], b0 = 0; b0 < size; b0++) bq.push(String.fromCharCode(h0.eP(16)));
		return bq.join("")
	}, this.qv = function(bF) {
		return 20 < (bF = bF.trim()).length ? bF.substring(0, 20) : bF
	}
}

function aRl() {
	var iP, aBt, i2, i6;

	function aYP() {
		cC.aYQ !== cy.cz.data[12].value ? (cC.b(), cT.iD(8, 1, new mm(30))) : cT.iD(1)
	}
	this.show = function() {
			iP.show(), this.resize()
		}, this.iK = function() {
			iP.iK()
		}, this.resize = function() {
			iP.resize(), aBt.resize()
		}, this.iL = function(dI) {
			2 === dI && iP.iM[0].iN()
		}, iP = new hr(L(57), [new hs("⬅️ " + L(33), aYP), new hs(L(449), function() {
			cT.jl(), cy.ep.aTy(), cT.iD(2)
		})]), i2 = [], (i6 = new i7).i8(L(450)), i6.rK(L(451)), i2.push(i6),
		function(i2) {
			var i6 = new i7,
				bq = (i6.i8(L(398)), cC.data.xw());
			i6.i9(new iA({
				iB: bq,
				value: cC.data.y0(bq)
			}, function(cE) {
				return cy.ep.eq(12, bq[cE].split(":")[0]), !0
			})), i2.push(i6)
		}(i2),
		function(i2) {
			var i6 = new i7,
				aYT = (i6.i8(L(470)), []);
			i6.iE(new a5M([new hs(L(397), function(iG) {
				zG.zK();
				for (var b0 = 0; b0 < aYT.length; b0++) aYT[b0].iG.value = zG.zE[b0];
				return bA.fu.z7(iG), !0
			}).button]));
			for (var b0 = 0; b0 < zG.zC.length; b0++) {
				i6.rK(zG.zC[b0]);
				for (var bE = 0; bE < 2; bE++) {
					var cE = 2 * b0 + bE,
						aCI = new iF({
							value: zG.zE[cE],
							cE: -1
						});
					aCI.iG.aYU = cE, aYT.push(aCI), aCI.iG.addEventListener("keydown", function(iG) {
						iG.preventDefault();
						var code = iG.code;
						iG.target.value = code, zG.zH(iG.target.aYU, code)
					}), bE && (aCI.iG.style.marginLeft = "4%"), aCI.iG.style.width = "48%", i6.iE(aCI)
				}
			}
			i2.push(i6)
		}(i2), (i6 = new i7).i8(L(98)), i6.i9(new iA({
			iB: ["1", "2"],
			value: dn.aWZ - 1
		}, function(b0) {
			dn.aWZ = b0 + 1
		})), i2.push(i6), (i6 = new i7).i8(L(452)), cy.cz.data[1].iB = [L(453), L(454), L(455), L(456)], i6.i9(new iA(cy.cz.data[1])), i2.push(i6), (i6 = new i7).i8(L(457)), cy.cz.data[9].iB = [L(454), L(458), L(459)], i6.i9(new iA(cy.cz.data[9])),
		i2.push(i6), (i6 = new i7).i8(L(460)), cy.cz.data[11].iB = [L(461), L(91), L(462)], i6.i9(new iA(cy.cz.data[11])), i2.push(i6), (i6 = new i7).i8(L(463)), i6.iE(new aDB(cy.cz.data[2])), i2.push(i6), (i6 = new i7).i8(L(464)), i6.iE(new aDB(cy
			.cz.data[7])), i2.push(i6), (i6 = new i7).i8(L(465)), i6.iE(new aDB(cy.cz.data[8])), i2.push(i6), (i6 = new i7).i8(L(466)), i6.iE(new iF(cy.cz.data[5])), i2.push(i6), (i6 = new i7).i8(L(467)), i6.iE(new aDB(cy.cz.data[13], L(468))), i6
		.iE(new aDB(cy.cz.data[14], L(469))), i2.push(i6), aBt = new hu(iP.hv, i2)
}

function aYV() {
	this.aYW = function() {
		cy.u.a4t(), cy.ep.eq(105, aV.aW.a4h(aV.aW.a4i(5))), cy.ep.eq(106, aV.aW.a4h(aV.aW.a4i(15))), cy.ep.eq(109, 0), cy.ep.eq(108, cy.cz.data[109].value), cy.ep.eq(111, cy.cz.data[109].value + 1), cy.ep.eq(107, 0), cy.ep.eq(110, "")
	}, this.aYX = function() {
		var data;
		eO.size < cp.a4f(29) ? bW.u.ec(0, 3254) : ((data = {
			aBv: eO.eP(30),
			aCU: eO.eP(16),
			aCV: eO.eP(30),
			aCW: eO.eP(30),
			aCG: eO.eP(30),
			d6: eO.aJD(32),
			username: c9.dB.eQ(5),
			aCn: c9.dB.eQ(3),
			aCu: c9.dB.eQ(3),
			aCm: eO.aJD(32),
			aCt: eO.aJD(32),
			aCo: eO.eP(30),
			aCq: eO.aJD(32),
			aCv: eO.aJD(32),
			aCs: eO.aJD(32),
			aCw: eO.aJD(32),
			aCY: eO.aJD(32),
			aCZ: eO.aJD(30),
			aCx: eO.aJD(32),
			aCy: c9.dB.eQ(3),
			aCi: eO.aJD(2),
			aCk: eO.aJD(10),
			aCf: c9.dB.eQ(8),
			aCj: eO.aJD(5),
			aCE: eO.eP(30),
			aCX: eO.eP(30),
			a0q: eO.aJD(32),
			aCc: eO.eP(3),
			aCb: eO.eP(8),
			aCz: eO.eP(1),
			aD0: eO.eP(1)
		}).aCz && (data.aD1 = eO.aJD(32), data.aD2 = eO.eP(30), data.aD3 = eO.eP(30), data.aD4 = eO.eP(1)), 8 === cT.cU && (25 === cT.eu().aVb ? (data.aBu = !0, cT.u.a52 = data, cT.eu().ew(25, !1)) : (data.aBu = !1, cy.ep.eq(160, +(data
			.aCz && data.aD4)), data.aY = cy.cz.data[105].value, cT.u.a53 = data, cy.ep.aYY(data), cT.eu().ew(16, !0))))
	}
}

function aRr() {
	var hn, ho, aYZ, i2;

	function ht() {
		a2N.rF(), cT.hy()[19] = null, cT.hz()
	}

	function aYg() {
		aYj(), aYh()
	}

	function aYj() {
		aYZ.rJ.lastChild && cT.removeChild(aYZ.rJ, aYZ.rJ.lastChild)
	}

	function aYh() {
		var aYk = cd.nC(c.data);
		c.data.canvas = cd.aXe(aYk, c.data.mapSeed).a7k, aYi()
	}

	function aYi() {
		var jj = c.data.canvas;
		jj.style.width = "100%", aYZ.rJ.appendChild(jj)
	}
	this.aRB = function(jj) {
		c.data.canvas && aYj(), c.data.canvas = jj, aYi()
	}, this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(439), [new hs("⬅️ " + L(33), ht)]), 2 === c.data.mapType && a2N.b(), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), i6.i9(new iA({
			iB: [L(471), L(472), L(473)],
			value: c.data.mapType
		}, function(cE) {
			2 === (c.data.mapType = cE) ? (a2N.b(), c.data.canvas = null) : (c.data.passableWater = c.data.passableMountains = 1, a2N.rF()), cT.iD(20)
		})), 2 <= c.data.mapType && (i6.iE(new aCd), i6.iE(new aDB({
			value: c.data.passableWater
		}, L(474), function(value) {
			c.data.passableWater = value
		})), i6.iE(new aDB({
			value: c.data.passableMountains
		}, L(475), function(value) {
			c.data.passableMountains = value
		})));
		i2.push(i6)
	}(i2 = []), function(i2) {
		if (0 === c.data.mapType) {
			for (var i6 = new i7, iB = (i6.i8(L(439)), []), b0 = 0; b0 < cd.aAn.f3.length; b0++) iB.push(cd.aAn.f2[cd.aAn.f3[b0]].name);
			i6.i9(new iA({
				iB: iB,
				value: c.data.mapProceduralIndex
			}, function(cE) {
				c.data.mapProceduralIndex = cE, aYg()
			})), i2.push(i6)
		}
	}(i2), function(i2) {
		if (1 === c.data.mapType) {
			for (var i6 = new i7, iB = (i6.i8(L(439)), []), b0 = 0; b0 < cd.aAn.f4.length; b0++) iB.push(cd.aAn.f2[cd.aAn.f4[b0]].name);
			i6.i9(new iA({
				iB: iB,
				value: c.data.mapRealisticIndex
			}, function(cE) {
				c.data.mapRealisticIndex = cE, aYg()
			})), i2.push(i6)
		}
	}(i2), function(i2) {
		var i6;
		2 === c.data.mapType && ((i6 = new i7).i8(L(476)), i6.iE(new iF(cy.cz.data[162], 1)), i6.i8(L(477), "0.8em"), i6.iE(new a5M([new hs(L(478), function() {
			return a2N.aR7(), !0
		}).button])), i2.push(i6))
	}(i2), function(i2) {
		var i6, aCI;
		2 === c.data.mapType && ((i6 = new i7).i8(L(479)), aCI = new iF({
			cE: -1,
			value: c.data.mapName
		}, 0, 0, function(iG) {
			c.data.mapName = iG.target.value = iG.target.value.slice(0, 20)
		}), i6.iE(aCI), i2.push(i6))
	}(i2), function(i2) {
		var i6, aCI, aCM;
		0 === c.data.mapType && ((i6 = new i7).i8("Seed"), aCI = new iF({
			cE: -1,
			value: c.data.mapSeed
		}, 1, 0, function(iG) {
			iG = Math.abs(Math.floor(iG.target.value)) % 16384;
			c.data.mapSeed !== iG && (c.data.mapSeed = iG, aYg())
		}), aCM = new hs(L(316), function(iG) {
			var fG = Math.floor(16384 * Math.random());
			if (c.data.mapSeed !== fG) return aCI.iG.value = c.data.mapSeed = fG, aYg(), !0
		}), i6.iE(aCI), i6.iE(new a5M([aCM.button])), i2.push(i6))
	}(i2), function(i2) {
		(aYZ = new i7).i8(L(399)), 2 !== c.data.mapType ? aYh() : c.data.canvas && aYi();
		i2.push(aYZ)
	}(i2), i2))
}

function aYl() {
	this.a8R = function() {
		for (var j6, fW, lU, a8O = fN, a8P = cd.a8E, c1 = cd.fR, a8N = c1 - 1, w5 = cd.fS - 1, bD = 0, fX = 1; fX < w5; fX++)
			for (lU = fX * c1, fW = 1; fW < a8N; fW++) a8P[j6 = lU + fW << 2] === a8P[1 + j6] && a8P[j6] === a8P[2 + j6] && (bD++, a8O[2 + j6] = 4);
		a2G.a88 = bD
	}, this.a8S = function(aYm, aYn) {
		for (var a8O = fN, c1 = cd.fR, a8N = c1 - 1, w5 = cd.fS - 1, id = 0, fX = 1; fX < w5; fX++)
			for (var lU = fX * c1, fW = 1; fW < a8N; fW++) {
				var g5 = 2 + (lU + fW << 2);
				a8O[g5] === aYm && (! function(g5, id, aYm, aYn) {
					var az = 1,
						a8O = fN,
						w3 = aA.w3,
						hX = [g5],
						aYp = id >> 8 << 1,
						aYq = 255 & id;
					a8O[g5 - 2] = aYp, a8O[g5 - 1] = aYq, a8O[g5] = 5;
					for (; az;) {
						for (var hY = [], b0 = 0; b0 < az; b0++)
							for (var kL = hX[b0], ca = 3; 0 <= ca; ca--) {
								var a5m = kL + w3[ca];
								a8O[a5m] === aYm && (a8O[a5m - 2] = aYp, a8O[a5m - 1] = aYq, a8O[a5m] = aYn, hY.push(a5m))
							}
						az = (hX = hY).length
					}
				}(g5, id, aYm, aYn), id = (id + 1) % 32768)
			}
	}, this.a8T = function() {
		for (var a8O = fN, c1 = cd.fR, a8N = c1 - 3, w5 = cd.fS - 3, aYs = 12 * c1, fX = 3; fX < w5; fX++)
			for (var lU = fX * c1, fW = 3; fW < a8N; fW++) {
				var g5 = 2 + (lU + fW << 2);
				2 !== a8O[g5] || 2 === a8O[g5 - 12] && 2 === a8O[12 + g5] && 2 === a8O[g5 - aYs] && 2 === a8O[g5 + aYs] || (a8O[g5 - 2] = 1 | a8O[g5 - 2])
			}
	}
}

function a37() {
	this.bN = new a0X, this.a5Y = new aIX
}

function aWz() {
	function aYx(player, gx, aYv, aJQ) {
		var nW;
		if (aA.jL(aYv)) nW = c.iC;
		else {
			if ((nW = aA.kP(aYv)) === player) return void gq.sW(player, gx - bA.gc.sV(player, gx), 12);
			if (!tQ.tR(player, nW)) return void mf.lv.aM9(player, nW, gx)
		}
		o4.sb(player, nW) || o4.sc(player) ? (z.ga[player].push(aJQ << 2), o4.eT(player, gx, nW), wZ.aMS(player, !0)) : gq.sW(player, gx, 12)
	}
	this.bS = function() {
		for (var oK = t.u.oK, uk = t.u.uk, yd = t.u.yd, b0 = t.u.v - 1; 0 <= b0; b0--) 65535 === yd[b0] && function(b0, aJQ, hc) {
			if (6 === hc) {
				if (t.ud.a1L(b0, aJQ)) return t.u.ui[b0]++, t.u.yd[b0] = 0, 0
			} else {
				var player = t.u.uZ[b0] >> 3,
					b0 = t.u.oJ[b0];
				gq.aYw(player), hc < 4 ? aYx(player, b0, aJQ + a8.kE[hc] << 2, aJQ) : 4 === hc ? function(player, gx, aJQ) {
					var b0, a5m, kK = a8.kF,
						kL = a8.a9(aJQ);
					for (b0 = 0; b0 < 4; b0++)
						if (a5m = kL + kK[b0], aA.jL(a5m)) return aYx(player, gx, a5m, aJQ);
					for (b0 = 0; b0 < 4; b0++)
						if (a5m = kL + kK[b0], aA.w6(a5m) && !aA.zz(player, a5m)) return aYx(player, gx, a5m, aJQ);
					for (b0 = 0; b0 < 4; b0++)
						if (a5m = kL + kK[b0], aA.w6(a5m)) return aYx(player, gx, a5m, aJQ)
				}(player, b0, aJQ) : 5 === hc && function(player, gx, aJQ) {
					var b0, a5m, kK = a8.kF,
						kL = a8.a9(aJQ);
					for (b0 = 0; b0 < 4; b0++)
						if (a5m = kL + kK[b0], aA.w6(a5m) && aA.zz(player, a5m)) return aYx(player, gx, a5m, aJQ);
					for (b0 = 0; b0 < 4; b0++)
						if (a5m = kL + kK[b0], aA.w6(a5m)) return aYx(player, gx, a5m, aJQ);
					for (b0 = 0; b0 < 4; b0++)
						if (a5m = kL + kK[b0], aA.jL(a5m)) return aYx(player, gx, a5m, aJQ)
				}(player, b0, aJQ)
			}
			return 1
		}(b0, a8.l0(uk[b0]), oK[b0] % 64) && (t.ud.a1I(b0), t.aJo.yX(b0))
	}, this.aYu = function(player, jM, hc, a08, gx) {
		if (!(5 <= hc)) {
			var a5t = c.ba;
			if (bA.gc.gd(a5t) && tQ.tR(player, a5t) && player !== a5t && 0 !== z.a0[a5t].length && bA.gc.sy(player, 5)) {
				for (var aYv, aAj = !1, b0 = 0; b0 < 4; b0++)
					if (aYv = jM + a8.kE[b0] << 2, aA.aB(aYv) && !aA.jL(aYv) && aA.kP(aYv) === a5t) {
						aAj = !0;
						break
					} aAj && (e.j5(719, 0), hc = gx < 25e3 ? L(480) + " (" + bA.bB.aX(gx) + ") ⛵" : L(481) + " (" + bA.bB.aX(gx) + ") 🚢", e.j9(180, hc, 719, player, aG.uM, aG.g6, -1, !0, void 0, {
					b1: 1,
					a08: a08
				}))
			}
		}
	}
}

function aWy() {
	this.w = 512, this.y = 8, this.v = 0, this.um = 0, this.uZ = new Uint16Array(this.w), this.uk = new Uint32Array(this.w), this.yd = new Uint16Array(this.w), this.oJ = new Uint32Array(this.w), this.wM = new Uint16Array(this.w), this.oF =
		new Uint16Array(this.w), this.oK = new Uint8Array(this.w), this.ye = new Uint8Array(this.w), this.uY = new Array(this.w), this.ui = new Uint16Array(this.w), this.x = new Uint8Array(c.iC), this.oG = new Uint16Array(this.y * c.iC), this.b =
		function() {
			this.v = 0, this.um = 0, this.x.fill(0), this.uY.fill(null)
		}, this.up = function(player) {
			var gx = a4.lH[0],
				a3 = a4.a5[1],
				pI = a4.bq[0],
				aZ0 = this.um,
				az = this.v,
				wI = a8.kz(pI[0]),
				gs = this.x[player],
				gt = (player << 3) + gs;
			this.uZ[az] = gt, this.uk[az] = wI, this.yd[az] = 0, gx < 60 && (bA.gc.tK(player, 60 - gx), gx = 60), this.oJ[az] = gx, this.wM[az] = t.l2.up(az, a8.l1(wI)), this.oF[az] = aZ0, this.oK[az] = a3, this.ye[az] = 0, this.uY[az] = pI, this.ui[
				az] = 0, this.um = (aZ0 + 1) % 65536, this.x[player] = gs + 1, this.oG[gt] = az, this.v++, t.a3.aYu(player, pI[pI.length - 1], a3, aZ0, gx)
		}, this.bS = function() {
			t.a3.bS();
			for (var j6 = c.ba, g8 = t.a6.sd(j6), yJ = (! function(yJ) {
					for (var aZ5, uk = yJ.uk, oJ = yJ.oJ, ye = yJ.ye, yd = yJ.yd, wM = yJ.wM, uY = yJ.uY, ui = yJ.ui, yJ = yJ.v, a5w = cd.fR << 4, b0 = yJ - 1; 0 <= b0; b0--) {
						var aZ6 = uk[b0],
							pI = uY[b0],
							aZ7 = ui[b0],
							wI = a8.kz(pI[aZ7]),
							wJ = a8.kz(pI[aZ7 + 1]),
							aZ8 = wI % a5w,
							wI = ~~((wI + .5) / a5w),
							aZA = wJ % a5w,
							aZB = ~~((wJ + .5) / a5w),
							aZC = aZA - aZ8,
							aZD = aZB - wI,
							ca = Math.max(~~Math.sqrt(aZC * aZC + aZD * aZD + .5), 1),
							aZE = oJ[b0],
							aZE = (aZE = ye[b0] ? 4e4 : 25e4 + Math.min(20 * aZE, 3e5) + Math.min(aZE >> 3, 5e4), yd[b0] + Math.max(~~((aZE + .5) / ca), 1));
						65535 <= aZE ? aZ7 + 2 < pI.length ? (ui[b0] = aZ7 + 1, uk[b0] = aZ5 = function(b0, aZF, aZ8, aZ9, aZ7, ca, pI, a5w) {
							aZF = Math.min(aZF - 65535, 65535);
							var pI = a8.kz(pI[aZ7 + 2]),
								aZ7 = pI % a5w - aZ8,
								pI = ~~((pI + .5) / a5w) - aZ9,
								aZH = Math.max(~~Math.sqrt(aZ7 * aZ7 + pI * pI + .5), 1);
							return aZF = Math.min(Math.floor((ca * aZF + .5) / aZH), 65534), t.u.yd[b0] = aZF, aZ8 + p.eL(aZF * aZ7, 65535) + a5w * (aZ9 + p.eL(aZF * pI, 65535))
						}(b0, aZE, aZA, aZB, aZ7, ca, pI, a5w)) : (uk[b0] = aZ5 = wJ, yd[b0] = 65535) : (yd[b0] = aZE, uk[b0] = aZ5 = aZ8 + p.eL(aZE * aZC, 65535) + a5w * (wI + p.eL(aZE * aZD, 65535))), wM[b0] = t.l2.wG(wM[b0], aZ6, aZ5)
					}
				}(this), ! function(yJ) {
					if (bT.bU() % 2 == 1) {
						var b0, s6, c6, b1, dI, aZI, aOV, aZJ, vn, yS, u1, wI, aZK, ro, aZM, a0N, az = yJ.v,
							uk = yJ.uk,
							uZ = yJ.uZ,
							oJ = yJ.oJ,
							ye = yJ.ye,
							l2 = t.l2.l2,
							aNL = l2.length,
							wC = t.l2.wC,
							a5w = cd.fR << 4,
							aZO = c.gQ,
							aKH = jG.jJ,
							cX = (az - 1) * (p.eL(bT.bU(), 2) % 2);
						for (b0 = 0; b0 < az; b0++)
							for (s6 = Math.abs(b0 - cX), wI = uk[s6], c6 = a8.l1(wI), vn = uZ[s6] >> 3, yS = wI % a5w, u1 = ~~((wI + .5) / a5w), aZM = oJ[s6], b1 = 0; b1 < 9; b1++)
								if (!((aZI = c6 + wC[b1]) < 0 || aNL <= aZI))
									for (aZJ = l2[aZI], aOV = aZJ.length, dI = 0; dI < aOV; dI++) aZK = aZJ[dI], a0N = uZ[aZK] >> 3, vn == a0N || aZO && aKH[vn] === aKH[a0N] && aKH[vn] || (a0N = uk[aZK], (ro = yS - a0N % a5w) * ro + (ro =
										u1 - ~~((a0N + .5) / a5w)) * ro < 14400 && (a0N = oJ[aZK], ro = a0N <= aZM ? Math.max(1, p.eL(a0N + p.eL(aZM - a0N, 10), 10)) : Math.max(1, p.eL(aZM, 10)), oJ[aZK] = Math.max(a0N - ro, 0), ye[
										aZK] = 4))
					}
				}(this), ! function(yJ) {
					if (bT.bU() % 5 == 3)
						for (var oJ = yJ.oJ, az = yJ.v, b0 = 0; b0 < az; b0++) {
							var gx = oJ[b0];
							oJ[b0] = Math.max(gx - Math.max(1, gx >> 7), 0)
						}
				}(this), this), oJ = yJ.oJ, ye = yJ.ye, b0 = yJ.v - 1; 0 <= b0; b0--) ye[b0] = ye[b0] >> 1, 0 === oJ[b0] && (t.ud.a1I(b0), t.aJo.yX(b0));
			gq.sW(j6, g8 - t.a6.sd(j6), 15)
		}
}

function hs(aH3, aZP, aGx, aZQ, aZR) {
	var self, aZS = document.createElement("button");

	function a0T() {
		var aZX;
		vD.vE() || (aZX = bA.color.aLb(aGx), !1 !== aZQ && 0 < aZX[0] && aZX[0] < 255 && aZX[0] === aZX[1] && aZX[0] === aZX[2]) || (128 < aZX[0] && 128 < aZX[1] && 128 < aZX[2] ? aZS.style.backgroundColor = bA.color.a0W(aGx, -50) : aZS.style
			.backgroundColor = bA.color.a0W(aGx, aZX[3] && aZX[3] < 120 ? 150 : 50))
	}

	function aZT() {
		if (aZQ) {
			var aZX = bA.color.aLb(aGx);
			if (aZX[0] === aZX[1] && aZX[0] === aZX[2]) return
		}
		aZP && ((aZX = aZP(this)) ? 2 === aZX && a0T() : aZY(this))
	}

	function aZU() {
		this.style.backgroundColor = aGx
	}

	function a0U() {
		aZY(this)
	}

	function aZY(ca) {
		ca.style.backgroundColor = aGx, ca.blur()
	}
	this.button = aZS, this.iN = aZP, this.n3 = aGx, this.a5E = function(aZV) {
			aZV = 1.1 - Math.min(.01 * aH3.length, .6) + .2 * aZV;
			aZS.style.fontSize = aZV.toFixed(1) + "em"
		}, this.n5 = function(dI) {
			dI ? 1 === dI ? dI = aG.n4 : 2 === dI && (aZQ = 1, dI = aG.n4) : (aZQ = 0, dI = aG.m4), this.n3 = aGx = dI, aZS.style.backgroundColor = dI
		}, self = this, aZS.innerHTML = aH3, aZS.style.color = aZR ? aG.aO : aG.am, aZS.style.userSelect = "none", aZS.style.outline = "none", aZS.style.overflowWrap = "break-word", self.n5(aGx), aZS.style.border = "none", aZS.style.font = "inherit",
		self.a5E(0), aZS.style.padding = "0em 0.3em", aZS.onclick = aZT, aZS.addEventListener("mouseover", a0T), aZS.addEventListener("mouseout", a0U), aZS.addEventListener("focus", a0T), aZS.addEventListener("blur", aZU)
}

function a3b() {
	this.aKR = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aL3 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aG.am, "rgb(170,170,170)"
	], this.aZZ = [aG.am, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aG.am, aG.ik], this.aZa = [aG.ik, aG.am, aG.am, aG.am, aG.ik, aG.ik, aG.ik, aG.ik, aG.am];
	var aGQ = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.a7K = ["rgba(" + aGQ[0] + ",", "rgba(" + aGQ[1] + ",", "rgba(" + aGQ[2] + ",", "rgba(" + aGQ[3] + ",", "rgba(" + aGQ[4] + ",", "rgba(" + aGQ[5] + ",", "rgba(" + aGQ[6] + ",", "rgba(" + aGQ[7] + ",", "rgba(" + aGQ[8] + ",", "rgba(" + aGQ[9] +
			","
		], this.a7L = ["rgb(" + aGQ[0] + ")", "rgb(" + aGQ[1] + ")", "rgb(" + aGQ[2] + ")", "rgb(" + aGQ[3] + ")", "rgb(" + aGQ[4] + ")", "rgb(" + aGQ[5] + ")", "rgb(" + aGQ[6] + ")", "rgb(" + aGQ[7] + ")", "rgb(" + aGQ[8] + ")", "rgb(" + aGQ[9] +
			")"
		], this.a12 = null, this.a7y = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.a5c = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.jH = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.jJ = new Uint8Array(c.iC), this.a5W = new Uint8Array(c.iC), this.aTH = new Uint16Array(c.iC), this.aTI = new Uint16Array(this.jH.length + 1), this.aTJ = new Uint16Array(this.jH.length), this.dT =
		function() {
			this.a12 = [L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490)]
		}, this.b = function() {
			if (this.jJ.fill(0), this.a5W.fill(0), this.aZb(), c.gQ) {
				if (9 === c.d) {
					for (var jJ = jG.jJ, b0 = c.data.teamPlayerCount[7] - 1; 0 <= b0; b0--) jJ[b0] = 1;
					var az = c.iC;
					for (b0 = c.data.teamPlayerCount[7]; b0 < az; b0++) jJ[b0] = 2;
					jG.jH[1] = 7, jG.jH[2] = 8
				} else c.fk ? function() {
					var a5c = jG.a5c,
						colorsData = c.data.colorsData;
					if (!c.data.selectableColor)
						for (var b0 = c.fl - 1; 0 <= b0; b0--) colorsData[b0] = hL.s9(262144);
					var aZm = 0,
						uj = 768,
						aBc = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = c.data.teamPlayerCount;
					for (b0 = 0; b0 < 9; b0++)
						if (teamPlayerCount[b0]) {
							for (var ca = 0, b1 = 0; b1 < 3; b1++) ca += Math.abs(a5c[b0][b1] - aBc[b1]);
							ca < uj && (aZm = b0, uj = ca)
						} var aZn = new Uint16Array(9);
					for (b0 = 0; b0 < 9; b0++) aZn[b0] = teamPlayerCount[b0];
					var jH = jG.jH,
						aZo = new Uint8Array(9),
						bD = (jH[0] = 0, 1);
					for (b0 = 1; b0 < 9; b0++) aZn[b0] && (aZo[b0] = bD, jH[bD++] = b0);
					var a7Y = c.fl,
						jJ = jG.jJ;
					aZn[aZm] ? (aZn[aZm]--, jJ[0] = aZo[aZm]) : a7Y = 0;
					var dI = 0;
					for (b0 = a7Y; b0 < c.gu; b0++) {
						var s6 = jH[dI];
						if (aZn[s6]) aZn[s6]--, jJ[b0] = aZo[s6];
						else if (b0--, 9 <= ++dI) return console.log("error 325")
					}
				}() : this.bS();
				! function() {
					for (var az = c.iC, aTH = jG.aTH, aTI = jG.aTI, aTJ = jG.aTJ, jJ = jG.jJ, jH = jG.jH, aTC = jH.length, cz = new Array(aTC), b0 = 0; b0 < aTC; b0++) cz[b0] = [];
					for (b0 = 0; b0 < az; b0++) cz[jH[jJ[b0]]].push(b0);
					for (b0 = 1; b0 <= aTC; b0++) aTI[b0] = aTI[b0 - 1] + cz[b0 - 1].length;
					for (b0 = 0; b0 < aTC; b0++)
						for (var bD = cz[b0].length, c6 = aTI[b0], s6 = 0; s6 < bD; s6++) aTH[s6 + c6] = cz[b0][s6];
					var fl = c.fl;
					for (b0 = 0; b0 < aTC; b0++)
						for (bD = cz[b0].length, c6 = aTI[b0], s6 = 0; s6 < bD; s6++)
							if (aTH[s6 + c6] >= fl) {
								aTJ[b0] = s6;
								break
							}
				}(), ! function() {
					for (var az = c.iC, jJ = jG.jJ, a5W = jG.a5W, jH = jG.jH, b0 = 0; b0 < az; b0++) a5W[b0] = jH[jJ[b0]];
					9 === c.d && a5W.fill(1, az - sA.sC[5])
				}()
			}
		}, this.aZb = function() {
			for (var b0 = this.jH.length - 1; 0 <= b0; b0--) this.jH[b0] = b0
		}, this.bS = function() {
			var nU = new Uint8Array(c.fl),
				a0i = new Uint8Array(c.fl),
				aZg = new Uint16Array(8),
				aZh = new Uint16Array(this.jH.length);
			this.aZi(nU, a0i, aZg, 1), this.a8j(aZg), this.aZj(aZh, nU, a0i), this.aZk(nU, a0i, aZh), this.aZl()
		}, this.aZi = function(nU, a0i, aZn, aZp) {
			for (var b1, iG, aZq, az = this.jH.length - aZp, bq = new Uint16Array(az), a5c = this.a5c, colorsData = c.data.colorsData, b0 = c.fl - 1; 0 <= b0; b0--) {
				for (b1 = az; aZp <= b1; b1--) bq[b1 - 1] = Math.abs(4 * (colorsData[b0] >> 12) - a5c[b1][0]) + Math.abs(4 * (colorsData[b0] >> 6 & 63) - a5c[b1][1]) + Math.abs(4 * (63 & colorsData[b0]) - a5c[b1][2]);
				for (aZq = 768, b1 = az - 1; 0 <= b1; b1--) bq[iG = (b1 + b0) % az] < aZq && (aZq = bq[iG], nU[b0] = iG);
				for (aZn[nU[b0]] += 4, aZq = 768, b1 = az - 1; 0 <= b1; b1--) bq[iG = (b1 + b0) % az] < aZq && iG !== nU[b0] && (aZq = bq[iG], a0i[b0] = iG);
				aZn[a0i[b0]]++
			}
		}, this.a8j = function(aZn) {
			for (var b1, mG, az = this.jH.length - 1, b0 = az; 0 <= b0; b0--) this.jH[b0] = b0;
			for (b0 = az - 1; 0 <= b0; b0--) aZn[b0]++;
			for (b0 = 1; b0 <= az; b0++) {
				for (mG = 0, b1 = 1; b1 < az; b1++) aZn[b1] > aZn[mG] && (mG = b1);
				aZn[mG] = 0, this.jH[b0] = mG + 1
			}
		}, this.aZj = function(aZh, nU, a0i) {
			var b1, b9, dI, ca, iG, nm, gi, aZr = this.jH.length - 1,
				aZX = new Uint16Array(aZr),
				aZs = [],
				aZt = 0,
				b8 = [],
				aZu = [];
			loop: for (var b0 = 0; b0 < c.fl; b0++)
				if (null !== (b9 = bA.bB.bC(z.a18[b0]))) {
					for (b1 = b8.length - 1; 0 <= b1; b1--)
						if (b9 === b8[b1]) {
							aZu[b1].push(b0), aZt = Math.max(aZt, aZu[b1].length);
							continue loop
						} b8.push(b9), aZs.push(!1), aZu.push([b0]), aZt = Math.max(aZt, 1)
				}
			for (; 2 < c.a7w && aZt > p.eL(c.fl, c.a7w);) c.a7w--, c.d--;
			for (b1 = b8.length - 1; 0 <= b1; b1--) {
				for (ca = -1, dI = b8.length - 1; 0 <= dI; dI--) !aZs[dI] && (-1 === ca || aZu[dI].length > aZu[ca].length) && (ca = dI);
				for (dI = aZr - 1; 0 <= dI; dI--) aZX[dI] = 1;
				for (dI = aZu[ca].length - 1; 0 <= dI; dI--) aZX[nU[aZu[ca][dI]]] += 3, aZX[a0i[aZu[ca][dI]]]++;
				for (b0 = aZr - 1; 0 <= b0; b0--) {
					for (iG = ca % aZr, dI = aZr - 1; 0 <= dI; dI--) aZX[dI] > aZX[iG] && (iG = dI);
					for (nm = -1, dI = c.a7w; 0 < dI; dI--)
						if (this.jH[dI] === iG + 1) {
							nm = dI;
							break
						} if (aZX[iG] = 0, -1 !== nm) {
						for (gi = 0, dI = c.a7w; 0 < dI; dI--) aZh[nm] > aZh[dI] && gi++;
						if (gi !== c.a7w - 1) {
							for (dI = aZu[ca].length - 1; 0 <= dI; dI--) aZh[nm]++, this.jJ[aZu[ca][dI]] = nm;
							break
						}
					}
				}
				aZs[ca] = !0
			}
		}, this.aZk = function(nU, a0i, aZh) {
			for (var b0, jt, az = this.jH.length - 1, border = p.eL(c.fl, c.a7w), aZv = (0 < c.fl % c.a7w && border++, new Uint8Array(1 + az)), b1 = az; 1 <= b1; b1--) aZv[this.jH[b1]] = b1;
			for (b0 = 0; b0 < c.fl; b0++) jt = aZv[nU[b0] + 1], 0 === this.jJ[b0] && jt <= c.a7w && aZh[jt] < border && (aZh[jt]++, this.jJ[b0] = jt);
			for (b0 = 0; b0 < c.fl; b0++) jt = aZv[a0i[b0] + 1], 0 === this.jJ[b0] && jt <= c.a7w && aZh[jt] < border && (aZh[jt]++, this.jJ[b0] = jt);
			for (b1 = c.a7w; 1 <= b1; b1--)
				for (b0 = c.fl - 1; 0 <= b0 && !(aZh[b1] >= border); b0--) 0 === this.jJ[b0] && (aZh[b1]++, this.jJ[b0] = b1)
		}, this.aZl = function() {
			for (var b0 = c.fl; b0 < c.iC; b0++) this.jJ[b0] = 1 + b0 % c.a7w
		}
}

function aRp() {
	var iP, mR, mS, mZ;

	function aVY(b0) {
		cT.iD(8, cT.cU, new mm(21, {
			pk: b0,
			oE: 0,
			pl: 10
		}))
	}
	this.show = function() {
		iP.show(), this.resize()
	}, this.iK = function() {
		iP.iK()
	}, this.resize = function() {
		iP.resize(), mR.resize()
	}, this.iL = function(dI) {
		2 === dI && iP.iM[0].iN()
	}, mS = [new hs(L(333), function() {
		aVY(5)
	}, 0, 0, 1), new hs(L(334), function() {
		aVY(6)
	}, 0, 0, 1), new hs(L(335), function() {
		aVY(7)
	}, 0, 0, 1), new hs("Audit Log", function() {
		aVY(12)
	}, 0, 0, 1)], mZ = [new hs("⬅️ " + L(33), function() {
		cT.hz()
	})], iP = new hr(L(52), mZ), mR = new md(mS, iP.hv)
}

function a32() {
	this.uB = function() {
		var aZy;
		return !(bc.bd < 3 || z.fo[gS[0]] >= c.fp >> 1) && (c.gQ ? 9 !== c.d && (aZy = gB.aZz(), !(2 * gB.aa1(e6.jF()) >= aZy)) : function() {
			if (8 === c.d) return !1;
			var aZy = gB.aZz();
			if (2 * z.gA[gS[0]] >= aZy) return !1;
			return !0
		}())
	}
}

function aLQ() {
	this.b = function() {
		this.aHH = 0, this.a0o = [], this.a13 = 0, this.a0n = 0
	}, this.bk = function() {
		var yJ;
		c.fk || (yJ = this, 2 === c.a0t ? yJ.a0o = gX.aLR.aI6() : c.gQ ? yJ.a0o = gX.aLR.aI7() : yJ.a0o = gX.aLR.aI8(), yJ.aHH = eW.wS.aHG(), yJ.a13 = Math.max(1, gX.aLR.aI9(yJ.a0o)), mf.gc.aLM(), 8 === c.d ? gX.result.a0n = 0 : yJ.a0n = 100 * gX
			.result.aHH * (1 + c.a9y))
	}
}

function iF(aGV, type, aa4, aa5) {
	var iG;
	this.iG = document.createElement("input"), (iG = this.iG).type = type ? "number" : "text", iG.id = "input" + cT.u.lh++, iG.value = aGV.value, iG.style.width = "100%", iG.style.userSelect = "none", iG.style.outline = "none", iG.style.resize =
		"none", iG.style.border = "inherit", iG.style.font = "inherit", iG.style.color = aG.am, iG.style.backgroundColor = aG.li, iG.style.fontSize = "1em", iG.style.padding = "0.1em 0.2em", iG.addEventListener("focus", function() {
			eE.dS++
		}), iG.addEventListener("blur", function() {
			eE.dS--, -1 !== aGV.cE && cy.ep.eq(aGV.cE, iG.value)
		}), iG.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== aGV.cE && cy.ep.eq(aGV.cE, iG.value), aa4 ? aa4() : iG.blur())
		}), aa5 && iG.addEventListener("input", function(b3) {
			aa5(b3)
		})
}

function aX1() {
	var aa6;
	this.b = function() {
		if (c.gQ) {
			var w5 = 1 - c.aLv;
			aa6 = new Array(jG.jH.length);
			for (var b0 = c.a7w - 1; 0 <= b0; b0--) {
				var hb = jG.jH[b0 + w5];
				aa6[hb] = wc.u.a7z(20, jG.a7y[hb])
			}
			9 === c.d && (aa6[1] = wc.u.a7z(20, jG.a7y[1]))
		} else aa6 = [wc.u.a7z(20, jG.a7y[7])]
	}, this.gl = function() {
		var aQv = kI;
		if (!(5 <= aQv)) {
			var a5u = eE.c1,
				a5v = eE.dO,
				yS = kn / aQv,
				u1 = ko / aQv,
				a0J = (a5u + kn) / aQv,
				a0K = (a5v + ko) / aQv,
				cX = -20 * aQv,
				aa9 = .5 * cX,
				a5w = cd.fR << 4,
				az = t.u.v,
				uk = t.u.uk,
				uZ = t.u.uZ,
				a5W = jG.a5W,
				jj = aa6,
				jk = dZ;
			3 < aQv && (jk.globalAlpha = .5 * (5 - aQv));
			for (var b0 = 0; b0 < az; b0++) {
				var jt = uk[b0],
					fW = a5u * (jt % a5w / 16 - yS) / (a0J - yS) + aa9,
					jt = a5v * (Math.floor(jt / a5w) / 16 - u1) / (a0K - u1) + aa9;
				a5u < fW || a5v < jt || fW < cX || jt < cX || (jk.setTransform(aQv, 0, 0, aQv, fW, jt), jk.drawImage(jj[a5W[uZ[b0] >> 3]], 0, 0))
			}
			jk.globalAlpha = 1, jk.setTransform(aQv, 0, 0, aQv, 0, 0)
		}
	}
}

function a39() {
	var aPk, aaC, aaD, aaE, xg = !1;

	function aaF() {
		xg = !0, aPk = -1, aaC = new Array(4);
		for (var b0 = 3; 0 <= b0; b0--) aaC[b0] = !1;
		var rn = Math.floor(1 + .02 * eE.min);
		aaD = new Array(4), (aaE = new Array(4))[1] = aaE[3] = aaD[0] = aaD[2] = 0, aaE[0] = aaD[3] = -rn, aaD[1] = aaE[2] = rn
	}

	function aaG() {
		if (-1 !== aPk)
			if (0 !== c.dr && wg.os()) {
				for (var aaH = !1, b0 = 3; 0 <= b0; b0--) aaC[b0] && (aaH = !0, kn += aaD[b0], ko += aaE[b0], e4.is(aaD[b0], aaE[b0]), dv.e7());
				aaH ? bT.eA = !0 : a2I.aQp()
			} else a2I.aQp()
	}
	this.a9h = function(cE) {
		0 !== c.dr && wg.os() && (xg || aaF(), aaC[cE] = !0, -1 === aPk) && (aPk = setInterval(aaG, 20), aaG())
	}, this.a9k = function(cE) {
		if (0 !== c.dr && (xg || aaF(), aaC[cE] = !1, -1 !== aPk)) {
			for (var aaH = !1, b0 = 3; 0 <= b0; b0--) aaH = aaH || aaC[b0];
			aaH || this.aQp()
		}
	}, this.aQp = function() {
		if (xg && -1 !== aPk) {
			for (var b0 = 3; 0 <= b0; b0--) aaC[b0] = !1;
			clearInterval(aPk), aPk = -1
		}
	}
}

function a3V() {
	function aaK() {
		return {
			fR: cd.fR,
			fS: cd.fS,
			a7k: cd.a7k,
			nP: cd.nP,
			aPz: cd.aPz,
			a8E: cd.a8E,
			cf: cd.cf,
			mapSeed: cd.mapSeed,
			a7d: cd.a7d
		}
	}

	function aaJ(b0) {
		return 1 !== b0 && cd.ce(b0) && b0 !== cd.aaM()
	}
	this.fD = 24, this.fK = 12, this.aDA = 4096, this.fR = 0, this.fS = 0, this.a7k = null, this.nP = null, this.aPz = null, this.a8E = null, this.cf = 0, this.mapSeed = 0, this.a7d = !1, this.aPv = new aPj, this.aAn = new f1, this.a88 = new aYl,
		this.b = function() {
			this.aAn.b()
		}, this.ck = function(map, aaI) {
			((map %= this.fD) !== this.cf || aaJ(this.cf) && aaI !== this.mapSeed) && (this.a7d = !1, this.aPv.aPt(), hL.xe(map), this.cf = map, this.mapSeed = aaI, aaJ(map) && (cd.aAn.f2[map].fG = aaI), this.ce(this.cf) ? (map = cd.aAn.f2[this.cf],
				this.fR = map.c1, this.fS = map.dO, hL.xe(map.fG), a2H.ck([this.fR, this.fS, map.fE, map.fF]), aVh(), a2G.a89(), a2H.hI()) : rY())
		}, this.aXe = function(map, aaI) {
			var lU = aaK(),
				map = (this.ck(map, aaI), this.aPv.aPt(), aaK());
			return aaI = lU, cd.fR = aaI.fR, cd.fS = aaI.fS, cd.a7k = aaI.a7k, cd.nP = aaI.nP, cd.aPz = aaI.aPz, cd.a8E = aaI.a8E, cd.cf = aaI.cf, cd.mapSeed = aaI.mapSeed, cd.a7d = aaI.a7d, map
		}, this.nD = function(canvas) {
			canvas && this.a7k !== canvas && (this.fR = canvas.width, this.fS = canvas.height, this.a7k = canvas, this.nP = this.a7k.getContext("2d", {
				alpha: !1
			}), this.qQ = this.nP.getImageData(0, 0, this.fR, this.fS), this.a8E = this.qQ.data, this.cf = this.aaM(), this.mapSeed = 0, cd.aAn.f2[this.cf].name = c.data.mapName)
		}, this.a8Q = function(b0) {
			return 3 === b0 || 7 === b0 || 9 === b0 || 21 === b0 || b0 === this.aaM()
		}, this.aBg = function(b0) {
			return 2 === b0 || 7 === b0 || 9 === b0 || 20 === b0
		}, this.a8C = function(b0) {
			return 1 === b0
		}, this.aaM = function() {
			return this.fD
		}, this.ce = function(b0) {
			return void 0 === this.aAn.f2[b0].fJ
		}, this.nC = function(b3) {
			return 0 === b3.mapType ? b3.mapProceduralIndex < 10 ? b3.mapProceduralIndex : 10 + b3.mapProceduralIndex : 1 === b3.mapType ? 10 <= b3.mapRealisticIndex ? 22 + b3.mapRealisticIndex - 10 : b3.mapRealisticIndex + 10 : void 0
		}, this.cg = function(b3, aaN) {
			0 === b3.mapType ? b3.mapProceduralIndex = aaN < 10 ? aaN : aaN - 10 : 1 === b3.mapType && (b3.mapRealisticIndex = aaN - (22 <= aaN ? 12 : 10))
		}
}

function a31() {
	var aaO;

	function aaP(player) {
		var ij, aQ4;
		return bA.gc.mN(player) && player < c.fl ? 0 : (ij = aaO[p.eL((c.iC - 1) * z.fo[player], c.fp)], bT.bU() < 1920 && (ij = Math.max(p.eL(100 * (13440 - 6 * bT.bU()), 1920), ij)), aQ4 = gB.gC(player), z.gA[player] > aQ4 && (ij -= p.eL(2 * ij * (
			z.gA[player] - aQ4), aQ4)), Math.min(Math.max(ij, 0), 700))
	}

	function aaY(nm) {
		for (var fo = z.fo, gb = bc.gb, b0 = bc.bd - 1; 0 <= b0; b0--) {
			var j6 = gb[b0];
			bA.gc.sV(j6, p.eL(nm * fo[j6], 32))
		}
	}

	function aaV() {
		var a0w = c.ba;
		a4.lG[0] = z.gA[a0w] - z.t4[a0w]
	}

	function aaX(cE) {
		var a0w = c.ba,
			a0w = z.gA[a0w] - z.t4[a0w] - a4.lG[0];
		gB.aHe += a0w, gq.gr[cE] += a0w
	}
	this.aHe = 0, this.ou = function() {
		for (var az = c.iC, b0 = (aaO = new Uint16Array(az), 0); b0 < az; b0++) aaO[b0] = 100 + a5J(p.eL(25600 * b0, az - 4), 9)
	}, this.b = function() {
		(this.aHe = 0) === c.data.iIncomeType ? this.gf = aaP : 1 === c.data.iIncomeType ? this.gf = function(player) {
			return p.eL(c.data.iIncomeValue * aaP(player), 64)
		} : this.gf = function(player) {
			return p.eL(c.data.iIncomeData[player] * aaP(player), 64)
		}
	}, this.bS = function() {
		if (bT.bU() % 10 == 9 && (gB.aHe = 0, function() {
				aaV();
				for (var gb = bc.gb, gA = z.gA, b0 = bc.bd - 1; 0 <= b0; b0--) {
					var j6 = gb[b0],
						aaW = p.eL(gB.gf(j6) * gA[j6], 1e4);
					bA.gc.sV(j6, Math.max(aaW, 1))
				}
				aaX(9)
			}(), function() {
				if (0 !== c.data.aIncomeType) {
					if (aaV(), 1 === c.data.aIncomeType)
						for (var fo = z.fo, gb = bc.gb, nm = c.data.aIncomeValue, b0 = bc.bd - 1; 0 <= b0; b0--) {
							var j6 = gb[b0];
							bA.gc.sV(j6, p.eL(nm * fo[j6], 128))
						} else 2 === c.data.aIncomeType && function() {
							for (var fo = z.fo, gb = bc.gb, nm = c.data.aIncomeData, b0 = bc.bd - 1; 0 <= b0; b0--) {
								var j6 = gb[b0];
								bA.gc.sV(j6, p.eL(nm[j6] * fo[j6], 128))
							}
						}();
					aaX(18)
				}
			}(), bT.bU() % 100 == 99)) {
			if (aaV(), 0 === c.data.tIncomeType) aaY(32);
			else if (1 === c.data.tIncomeType) aaY(c.data.tIncomeValue);
			else
				for (var fo = z.fo, gb = bc.gb, nm = c.data.tIncomeData, b0 = bc.bd - 1; 0 <= b0; b0--) {
					var j6 = gb[b0];
					bA.gc.sV(j6, p.eL(nm[j6] * fo[j6], 32))
				}
			aaX(8)
		}
	}, this.gC = function(player) {
		return Math.min(100 * z.fo[player], c.aLr)
	}, this.aM8 = function(player, tF) {
		a2V.aBo(player, tF, a4.lH[0], 0), bA.gc.sV(tF, a4.lH[0]), gq.aAk(player, tF), e4.a6a(player, a4.lH[0] + a4.lH[1]), e4.a6d(tF, a4.lH[0]), bA.gc.tO(player)
	}, this.aZz = function() {
		for (var az = bc.bd, jI = bc.gb, c6 = 0, t5 = z.gA, b0 = 0; b0 < az; b0++) c6 += t5[jI[b0]];
		return c6
	}, this.aa1 = function(aaR) {
		for (var j6, az = bc.bd, jI = bc.gb, c6 = 0, t5 = z.gA, jJ = jG.jJ, b0 = 0; b0 < az; b0++) jJ[j6 = jI[b0]] === aaR && (c6 += t5[j6]);
		return c6
	}
}

function uV() {
	this.vv = function(player) {
		bA.gc.ss(player) && e.j9(80, L(491), 637, 0, aG.aDy, aG.g6, -1, !1)
	}, this.vy = function(player) {
		bA.gc.ss(player) && e.j9(80, L(492), 637, 0, aG.aDy, aG.g6, -1, !1)
	}
}

function aBZ() {
	this.vm = function(g5) {
		var aUX;
		return cd.a8Q(cd.cf) && c.data.passableMountains && (aUX = aA.kN(g5), this.aac(c.ba, aUX) || this.aad(c.ba, aUX)) && 0 !== (aUX = function(zv) {
			for (var fW = a8.jQ(zv), fX = a8.jR(zv), max = Math.max(cd.fR, cd.fS) - 2, aag = max * max, aAj = !1, aah = 0, uj = 0; uj < max; uj++) {
				var aai, jM = function(fW, fX, uj) {
					for (var b0 = 0; b0 <= uj; b0++)
						for (var bE = -1; bE < 2; bE += 2)
							for (var b1 = -1; b1 < 2; b1 += 2)
								for (var dI = 0; dI < 2; dI++) {
									var g5 = function(fW, fX) {
										if (a8.kw(fW, fX)) {
											fW = a8.kt(fW, fX), fX = a8.a9(fW);
											if (aA.aB(fX) && aA.a8v(fX)) return fW
										}
										return 0
									}(fW + dI * bE * b0 + (1 - dI) * b1 * uj, fX + dI * b1 * uj + (1 - dI) * bE * b0);
									if (g5) return g5
								}
					return 0
				}(fW, fX, uj);
				jM && (aai = a8.kQ(fW, fX, jM)) < aag && (aah = jM, aag = aai, aAj || (aAj = !0, max = Math.floor(Math.sqrt(aai)) + 1))
			}
			return aah
		}(a8.kx(g5))) && (g5 = a8.a9(aUX), aA.jL(g5) || (g5 = aA.kP(g5)) !== c.ba && tQ.tR(g5, c.ba)) ? aUX : 0
	}, this.aMR = function(player, jM) {
		jM = a8.a9(jM);
		if (aA.aB(jM)) {
			if (aA.jL(jM)) a4.lN[0] = c.iC;
			else if (aA.kP(jM) !== a4.lN[0]) return !1;
			for (var jJ = function(g5) {
					var w3 = aA.w3,
						jJ = [];
					loop: for (var ca = 3; 0 <= ca; ca--) {
						var a5m = g5 + w3[ca];
						if (aA.vj(a5m)) {
							for (var id = aA.kN(a5m), b0 = 0; b0 < jJ.length; b0++)
								if (id === jJ[b0]) continue loop;
							a4.lL[jJ.length] = a5m, jJ.push(id)
						}
					}
					return jJ
				}(jM), az = jJ.length, b0 = 0; b0 < az; b0++)
				if (this.aac(player, jJ[b0]) || this.aad(player, jJ[b0])) return a4.lL[0] = a4.lL[b0], !0
		}
		return !1
	}, this.aac = function(player, aUX) {
		for (var aJl = z.aJl[player], az = aJl.length, qp = Math.max(p.eL(az, 12), 1), w3 = aA.w3, b0 = 0; b0 < az; b0 += qp)
			for (var kL = aJl[b0], ca = 3; 0 <= ca; ca--) {
				var a5m = kL + w3[ca];
				if (aA.vj(a5m) && aUX === aA.kN(a5m)) return !0
			}
		return !1
	}, this.aad = function(player, aUX) {
		for (var aJl = z.aJl[player], az = aJl.length, w3 = aA.w3, b0 = 0; b0 < az; b0++)
			for (var kL = aJl[b0], ca = 3; 0 <= ca; ca--) {
				var a5m = kL + w3[ca];
				if (aA.vj(a5m) && aUX === aA.kN(a5m)) return !0
			}
		return !1
	}
}

function a3K() {
	this.aak = [], this.aal = [], this.b = function() {
		this.aak = [], this.aal = []
	}, this.bS = function() {
		0 <= this.aak.length && this.aam(this.aak), 0 <= this.aal.length && this.aam(this.aal)
	}, this.aam = function(bq) {
		for (var b1 = -1, b0 = bq.length - 1; 0 <= b0; b0--)
			if (bq[b0].db--, bq[b0].db <= 0) {
				b1 = b0;
				break
			} for (b0 = b1; 0 <= b0; b0--) bq.shift()
	}, this.aPJ = function(id, jI, aan) {
		return this.aaj(this.aak, id, jI, aan)
	}, this.aao = function(id, jI, aan) {
		return this.aaj(this.aal, id, jI, aan)
	}, this.aaj = function(bq, id, jI, aan) {
		return ! function(bq, id, jI) {
			var b0, s6;
			for (b0 = jI.length - 1; 0 <= b0; b0--)
				for (s6 = bq.length - 1; 0 <= s6; s6--)
					if (bq[s6].player === jI[b0] && id === bq[s6].id) return 1;
			return
		}(bq, id, jI) && (aan && function(bq, id, jI) {
			var b0;
			for (b0 = jI.length - 1; 0 <= b0; b0--) bq.push({
				player: jI[b0],
				id: id,
				db: 384
			})
		}(bq, id, jI), !0)
	}
}

function aXw() {
	this.aIU = function(canvas, aIN, d1) {
		var c1 = canvas.width,
			dO = canvas.height,
			dI = bA.fu.dV(c1, dO),
			jk = bA.fu.getContext(dI, !0),
			canvas = (jk.drawImage(canvas, 0, 0), jk.getImageData(0, 0, c1, dO));
		return aIN(canvas.data, c1, dO, d1), jk.putImageData(canvas, 0, 0), dI
	}, this.aIS = function(a5Y, c1, dO) {
		for (var fW = c1 - 1; 0 <= fW; fW--)
			for (var fX = dO - 1; 0 <= fX; fX--) {
				var b0 = 4 * (fW + fX * c1);
				a5Y[3 + b0] = a5Y[b0], a5Y[b0] = a5Y[1 + b0] = a5Y[2 + b0] = 255
			}
	}, this.aIO = function(a5Y, c1, dO) {
		for (var fW = c1 - 1; 0 <= fW; fW--)
			for (var fX = dO - 1; 0 <= fX; fX--) {
				var b0 = 4 * (fW + fX * c1);
				a5Y[1 + b0] > a5Y[2 + b0] + 10 && (a5Y[3 + b0] = a5Y[b0], a5Y[1 + b0] = a5Y[2 + b0])
			}
	}, this.aIQ = function(a5Y, c1, dO, d1) {
		for (var gap = Math.floor(Math.min(c1, dO) * d1), fW = 0; fW < c1; fW++)
			for (var b0, fX = 0; fX < dO; fX++)(fW < gap || fX < gap || c1 - gap <= fW || dO - gap <= fX) && (a5Y[3 + (b0 = 4 * (fW + fX * c1))] = 255 - 255 * (a5Y[1 + b0] - a5Y[b0]) / (255 - a5Y[b0]))
	}, this.aJB = function(a5Y, c1, dO, d1) {
		for (var fW = c1 - 1; 0 <= fW; fW--)
			for (var fX = dO - 1; 0 <= fX; fX--) {
				var b0 = 4 * (fW + fX * c1);
				a5Y[b0] = d1[0], a5Y[1 + b0] = d1[1], a5Y[2 + b0] = d1[2]
			}
	}, this.aIP = function(a5Y, c1, dO, d1) {
		for (var gap = Math.floor(c1 * d1), fW = 0; fW < c1; fW++)
			for (var b0, fX = 0; fX < dO; fX++)(fW < gap || fX < gap || c1 - gap <= fW || dO - gap <= fX) && (a5Y[b0 = 4 * (fW + fX * c1)] = a5Y[1 + b0] = a5Y[2 + b0] = 0)
	}, this.aIR = function(a5Y, c1, dO) {
		for (var fX, b0, fW = c1 - 1; 0 <= fW; fW--)
			for (fX = dO - 1; 0 <= fX; fX--) 200 < a5Y[1 + (b0 = 4 * (fW + fX * c1))] && a5Y[1 + b0] - 20 > a5Y[b0] && a5Y[1 + b0] - 20 > a5Y[2 + b0] ? a5Y[b0] + a5Y[2 + b0] < 40 ? a5Y[3 + b0] = 0 : (a5Y[3 + b0] = a5Y[b0], a5Y[b0] = 255, a5Y[1 +
				b0] = 255, a5Y[2 + b0] = 255) : a5Y[b0] < 50 && a5Y[1 + b0] < 50 && a5Y[2 + b0] < 50 && (a5Y[b0] + a5Y[1 + b0] + a5Y[2 + b0] < 50 ? a5Y[3 + b0] = 180 : a5Y[3 + b0] = 180 + Math.floor(75 * (a5Y[b0] + a5Y[1 + b0] + a5Y[2 + b0] -
				50) / 100))
	}, this.aIT = function(a5Y, c1, dO) {
		for (var fX, b0, fW = c1 - 1; 0 <= fW; fW--)
			for (fX = dO - 1; 0 <= fX; fX--) a5Y[1 + (b0 = 4 * (fW + fX * c1))] > a5Y[b0] + 20 && a5Y[1 + b0] > a5Y[2 + b0] + 20 && a5Y[b0] + a5Y[2] < 40 && (a5Y[3 + b0] = 255 - a5Y[1 + b0], a5Y[b0] = a5Y[1 + b0] = a5Y[2 + b0] = a5Y[b0])
	}, this.qS = function(a5Y, c1, dO, d1) {
		for (var ij = c1 >> 1, fW = 0; fW < c1; fW++)
			for (var fX = 0; fX < dO; fX++) Math.sqrt((fW - ij) * (fW - ij) + (fX - ij) * (fX - ij)) > d1 * ij && (a5Y[4 * (fW + fX * c1) + 3] = 0)
	}
}

function a3g() {
	var aN8 = 501,
		aar = (this.aBJ = new Uint32Array(aN8), this.t5 = new Uint32Array(aN8), this.ge = new Uint16Array(aN8), this.me = 0, 1),
		yl = 0;

	function aas(self) {
		self.max.fill(0)
	}

	function aau(self, b0) {
		self.max[0] = Math.max(self.aBJ[b0], self.max[0]), self.max[1] = Math.max(self.t5[b0], self.max[1]), self.max[2] = Math.max(self.ge[b0], self.max[2])
	}
	this.max = [0, 0, 0], this.aBY = 0, this.gr = new Array(21), this.aBP = null, this.dT = function() {
		this.aBP = [L(493), L(494), L(495), L(496), L(497), L(498), L(499), L(500), L(32), L(417), L(501), L(502), L(503), L(504), "", L(505), L(506), L(507), L(444), L(508), L(509)]
	}, this.b = function() {
		this.me = 0, aar = 1, this.aBY = 0, yl = 0, aas(this), this.gr.fill(0)
	}, this.aMM = function(player, km) {
		bA.gc.si(player) && (this.gr[0] += km + 1, this.gr[1]++, this.gr[12] += a4.lH[1])
	}, this.aAk = function(player, tF) {
		__fx.donationsTracker.logDonation(player, tF, a4.lH[0]);
		player === c.ba && (e.aAk(a4.lH[0], a4.lH[1], tF), this.gr[12] += a4.lH[1], this.gr[16] += a4.lH[0]), tF === c.ba && (e.aAm(a4.lH[0], player), this.gr[10] += a4.lH[0])
	}, this.aMO = function(player) {
		bA.gc.si(player) && (this.gr[2]++, this.gr[12] += a4.lH[1])
	}, this.aMT = function(player) {
		bA.gc.si(player) && (this.gr[19]++, this.gr[12] += a4.lH[1])
	}, this.aYw = function(player) {
		bA.gc.si(player) && this.gr[20]++
	}, this.sW = function(player, a4B, cE) {
		bA.gc.si(player) && (this.gr[cE] += a4B)
	}, this.bS = function() {
		var self;
		this.aBY || 0 < yl-- || ((self = this).aBJ[self.me] = z.fo[c.ba], self.t5[self.me] = z.gA[c.ba], self.ge[self.me] = gB.gf(c.ba), aau(self, self.me), self.me++, self.me === aN8 && function(self) {
			aas(self), aau(self, 0), self.me = 1 + p.eL(aN8, 2);
			for (var b0 = 1; b0 < self.me; b0++) self.aBJ[b0] = self.aBJ[2 * b0], self.t5[b0] = self.t5[2 * b0], self.ge[b0] = self.ge[2 * b0], aau(self, b0);
			aar *= 2
		}(self), yl = aar - 1, e3.tt(), 0 === z.bZ[c.ba] && (self.aBY = bT.bU()))
	}
}

function aRw() {
	var aaw, us, aaz, ur, uu, aax = [new Array(4), [], new Array(2), new Array(2)],
		aay = new Array(4),
		ab0 = new Array(2),
		ab1 = [L(154), L(421), L(510), L(511)];

	function bm() {
		var ah;
		!ax.zZ || (ah = aaw.v7.aCI.iG.value.trim().slice(0, 127)).length < 1 || (aaw.v7.aCI.iG.value = "", ax.zm.bk(ah))
	}

	function ab4(ab6) {
		ax.u.cV[3] = 1 - ax.u.cV[3], ab5(3, 1, ax.u.cV[3]), ab6 && bW.by.bz(4), ax.u.cV[3] && cy.ep.eq(158, ax.u.cV[0])
	}

	function ab2(bE, b1) {
		ax.u.cV[bE] !== b1 && (0 === bE && ax.u.cV[3] && ab4(0), ab5(bE, ax.u.cV[bE], 0), ab5(bE, b1, 1), ax.u.cV[bE] = b1, 0 === bE ? (bW.by.bz(2, b1), ax.u.cV[2] ? (aaw.v9.tt(), aaw.v7.oo(1)) : aaw.v7.oo(0), cT.eu().aHO(), cT.eu().aHN()) : 2 ===
			bE && (0 === b1 ? (bW.by.bz(0), aaw.v7.tt(), aaw.vK()) : (bW.by.bz(1), aaw.v9.tt(), aaw.vL())))
	}

	function ab5(bE, b1, color) {
		aaw.vB[bE].oe[b1].n5(color ? aG.yQ : aG.aED)
	}

	function ab9(cN) {
		return cN < 7 ? cN + 2 + " " + L(517) : 7 === cN || 10 === cN ? L(421) + " (Full-Sending: " + L(7 === cN ? 518 : 519) + ")" : 8 === cN ? "1v1" : L(520)
	}

	function abA(c8) {
		var aEn = p.eL(c8, 60),
			c8 = c8 % 60;
		return (aEn < 10 ? "0" : "") + aEn + ":" + (c8 < 10 ? "0" : "") + c8
	}
	this.aN1 = function() {
		return aaw.v7
	}, this.zm = function(aY) {
		ab2(2, 0);
		var bF = aaw.v7.aCI.iG.value,
			aY = "@" + aY + " ";
		bF.length && !bA.bB.c7(bF, " ") && (aY = " " + aY), aaw.v7.aCI.iG.value = bF += aY, aaw.v7.aCI.iG.focus()
	}, this.aHM = function() {
		aaw.v9.tt()
	}, this.aHO = function() {
		var ab8 = ax.u.cV[0],
			ab8 = ax.u.bJ[ab8];
		cd.ck(ab8.cf, ab8.mapSeed), us.oe[0].button.textContent = L(439) + ": " + cd.aAn.f2[ab8.cf].name, us.oe[1].button.textContent = L(441, 0, "Mode") + ": " + ab9(ab8.cN), us.oe[2].button.textContent = L(514) + ": " + cd.aAn.f2[ab8.zU].name,
			us.oe[3].button.textContent = L(515, 0, "Next Mode") + ": " + ab9(ab8.zV), us.oe[4].button.textContent = L(516) + ": " + abA(ab8.zW), us.resize()
	}, this.aHN = function() {
		var ab8 = ax.u.cV[0],
			cL = ax.u.bJ[ab8];
		aaw.vI(cL.vJ);
		for (var b0 = 0; b0 < ax.ay.aw.length; b0++) aax[0][b0].oZ.textContent = "" + ax.ay.aw[b0].length;
		var ay = ax.ay.aw[ab8],
			abB = ay.length,
			abC = ax.ay.cK[ab8];
		aax[2][1].oZ.textContent = "" + abB, aax[3][1].oZ.textContent = "" + abC, us.oe[4].button.textContent = L(516) + ": " + abA(cL.zW);
		for (b0 = 0; b0 < 4; b0++) {
			var abD = ax.u.bJ[b0];
			aay[b0] ? 0 === abD.vJ && (aay[b0].oZ.textContent = cd.aAn.f2[abD.cf].name) : aay[b0] = new oU(cd.aAn.f2[abD.cf].name, ur.oe[b0].button, 1, 1), bA.bB.startsWith(ab1[b0], "🏆 ") ? abD.cc || (ab1[b0] = ab1[b0].substring(3), ur.oe[b0]
				.button.textContent = ab1[b0], ur.oe[b0].button.appendChild(aax[0][b0].oZ), ur.oe[b0].button.appendChild(aay[b0].oZ)) : abD.cc && (ab1[b0] = "🏆 " + ab1[b0], ur.oe[b0].button.textContent = ab1[b0], ur.oe[b0].button
				.appendChild(aax[0][b0].oZ), ur.oe[b0].button.appendChild(aay[b0].oZ))
		}
		var cL = "",
			abF = "";
		0 === ab8 && (cL = ax.a6.b5(ay, 0, abB), abF = ax.a6.b5(ay, 0, abC)), aaz[0].oZ.textContent = cL, aaz[1].oZ.textContent = abF, ab0[1].oZ.textContent = "MP: " + ax.u.za[0] + "   SP: " + ax.u.za[1] + "   Lobby: " + bA.c3.abG(ax.ay.aw)
	}, this.aHP = function() {
		aaw.v7.tt()
	}, this.show = function() {
		aaw.show(), this.resize(), ax.message.show()
	}, this.iK = function() {
		aaw.iK(), ax.a9j.iK(), ax.wx.iK(), ax.message.iK()
	}, this.resize = function() {
		aaw.resize(1 - ax.u.cV[2]), ax.message.resize()
	}, this.iL = function(dI) {
		2 === dI ? ax.u.cV[3] ? ab4(1) : aaw.vB[3].oe[0].iN() : dI < 2 && ab4(1)
	}, ur = new aGv([new hs(ab1[0], function() {
		return ab2(0, 0), 2
	}), new hs(ab1[1], function() {
		return ab2(0, 1), 2
	}), new hs(ab1[2], function() {
		return ab2(0, 2), 2
	}), new hs(ab1[3], function() {
		return ab2(0, 3), 2
	})], aG.aED), us = new aGv([new hs("", 0, 2), new hs("", 0, 2), new hs("", 0, 2), new hs("", 0, 2), new hs("", 0, 2)], aG.aEE, 1);
	var ab3 = new aGv([new hs(L(512), function() {
		return ab2(2, 0), 2
	}), new hs(L(24), function() {
		return ab2(2, 1), 2
	})], aG.aED);
	uu = new aGv([new hs(L(100, 0, 0, 1), function() {
		cT.jl(), ax.rF(), bW.u.xr(3240), cT.iD(5, 5)
	}), new hs(L(513), function() {
		return ab4(1), 2
	})], aG.aED), aaw = new uq(ur, us, ab3, uu, bm, ax.a9j.aNt);
	for (var b0 = 0; b0 < 4; b0++) aax[0][b0] = new oU("0", ur.oe[b0].button);
	aax[2][1] = new oU("0", ab3.oe[1].button), aax[3][1] = new oU("0", uu.oe[1].button), aaz = [new oU("", ab3.oe[1].button, 1, 1), new oU("", uu.oe[1].button, 1, 1)], ab5(0, ax.u.cV[0], 1), ab5(2, ax.u.cV[2], 1), (ab0 = [new oU(L(416), aaw.vM(), 1,
		0), new oU("", aaw.vM(), 1, 1)])[0].oZ.style.fontSize = "0.4em", ab0[1].oZ.style.fontSize = "0.4em"
}

function aRt() {
	var hn, ho, hp, i2;

	function ht() {
		hx(), 2 !== c.data.aIncomeType && (c.data.aIncomeData = null), cT.hy()[19] = null, cT.hz()
	}

	function hx() {
		2 === c.data.aIncomeType ? (bA.c3.i0(hp.i1(), c.data.aIncomeData, 255), bA.c3.max(c.data.aIncomeData) || (c.data.aIncomeType = 0)) : 1 !== c.data.aIncomeType || c.data.aIncomeValue || (c.data.aIncomeType = 0)
	}
	this.show = function() {
		hn.show(), this.resize()
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), ho.resize()
	}, this.iL = function(dI) {
		2 === dI && hn.iM[0].iN()
	}, hn = new hr(L(444), [new hs("⬅️ " + L(33), ht)]), ho = new hu(hn.hv, (function(i2) {
		var i6 = new i7;
		i6.i8(L(34)), i6.i9(new iA({
			iB: [L(35), L(36), L(37)],
			value: c.data.aIncomeType
		}, function(cE) {
			hx(), 2 !== cE || c.data.aIncomeData || (c.data.aIncomeData = new Uint8Array(c.iC)), c.data.aIncomeType = cE, cT.iD(22)
		})), i2.push(i6)
	}(i2 = []), function(i2) {
		var i6;
		1 === c.data.aIncomeType && ((i6 = new i7).i8("Value"), i6.iE(new iF({
			cE: -1,
			value: c.data.aIncomeValue
		}, 1, 0, function(iG) {
			var value = p.q(Math.floor(iG.target.value), 0, 255);
			iG.target.value = c.data.aIncomeValue = value
		})), i2.push(i6))
	}(i2), function(i2) {
		var i6;
		2 === c.data.aIncomeType && ((i6 = new i7).i8("Data"), (hp = new iH(0, 1, 0, 1)).iI(bA.bB.iJ(c.data.aIncomeData, 4)), i6.iE(hp), i2.push(i6))
	}(i2), i2))
}

function ta() {
	this.eq = function(cE, value) {
		2 !== cy.cz.data[cE].type && (value = Math.floor(value)), cy.cz.data[cE].value !== value && (cy.cz.aLV(cE, value), 0 === cE ? (cT.jl(), cC.b(), cT.iD(2)) : 1 === cE ? eE.dd(1) : 2 === cE ? eE.dd(0) : 5 === cE && (bA.fu.aS0(), eE.dd(0)))
	}, this.aTy = function() {
		for (var data = cy.cz.data, b0 = 0; b0 < 100; b0++) data[b0] && cy.cz.aLV(b0, data[b0].qA);
		bA.fu.aS0(), eE.dd(1)
	}, this.aTz = function() {
		for (var data = cy.cz.data, b0 = 0; b0 < data.length; b0++) data[b0] && cy.cz.eq(b0, data[b0].qA)
	}, this.aXX = function() {
		for (var b1 = cy.cz, b0 = 128; b0 < 135; b0++) b1.aLV(b0, b1.data[b0].qA)
	}, this.aYY = function(data) {
		cy.ep.eq(109, data.aBv), cy.ep.eq(107, data.aCU), cy.ep.eq(108, data.aCV), cy.ep.eq(112, data.aCW), cy.ep.eq(111, data.aCG), cy.ep.eq(113, data.d6), cy.ep.eq(135, data.aCn), cy.ep.eq(136, data.aCu), cy.ep.eq(137, data.aCm), cy.ep.eq(138,
			data.aCt), cy.ep.eq(139, data.aCo), cy.ep.eq(141, data.aCq), cy.ep.eq(142, data.aCv), cy.ep.eq(143, data.aCs), cy.ep.eq(144, data.aCw)
	}
}

function lp() {
	this.vi = function(jM) {
		c.fk ? mf.lr.vi(c.ba, jM) : bW.em.aDF(jM)
	}, this.nz = function(km, nW) {
		c.fk ? mf.lr.nz(c.ba, km, nW) : bW.em.aDG(km, nW)
	}, this.aM8 = function(km, tF) {
		c.fk ? mf.lr.tE(c.ba, km, tF) : bW.em.aDH(km, tF)
	}, this.vv = function(km, jM) {
		jM = (jM << 3) + a4.a5[6];
		c.fk ? mf.lr.vv(c.ba, km, jM) : t.ul.s(c.ba) && bW.em.aDI(km, jM)
	}, this.vy = function(km) {
		849 === km && (km = 850);
		var a08 = a4.a5[3];
		c.fk ? mf.lr.vy(c.ba, km, a08) : t.vw.aU7(c.ba, a08) && bW.em.aDK(km, a08)
	}, this.ny = function(a08) {
		c.fk ? mf.lr.ny(c.ba, a08) : bW.em.aDK(849, a08)
	}, this.nx = function(nW) {
		c.fk ? mf.lr.nx(c.ba, nW) : bW.em.aDL(nW)
	}, this.aAX = function(a7E) {
		c.fk ? mf.lr.aMQ(c.ba, a7E) : bW.em.aDM(a7E)
	}, this.u4 = function(aDO) {
		c.fk ? mf.lr.u4(c.ba, aDO) : bW.em.aDN(aDO)
	}, this.mg = function() {
		c.fk ? mf.lr.mg(c.ba) : bW.em.aDP()
	}, this.mk = function() {
		c.fk ? mf.lr.mk(c.ba) : bW.em.aDL(513)
	}, this.vo = function(km, jM, nW) {
		c.fk ? mf.lr.vo(c.ba, km, jM, nW) : bW.em.aDQ(km, jM, nW)
	}
}

function a3B() {
	var abH, bq;
	this.b = function() {
		for (var b0 = (bq = new Uint16Array(101)).length - 1; 0 <= b0; b0--) bq[b0] = p.eL(32768 * b0, 100);
		this.xe(0)
	}, this.value = function(j6) {
		return bq[j6]
	}, this.xd = function() {
		return p.eL(abH - 1, 2)
	}, this.xe = function(fG) {
		abH = 2 * fG % 32768 + 1
	}, this.random = function() {
		return abH = 167 * abH % 32768
	}, this.s9 = function(aAZ) {
		return p.eL(aAZ * this.random(), 32768)
	}, this.aJt = function(j6) {
		return 0 !== j6 && this.random() < this.value(j6)
	}, this.lC = function(bE, b1) {
		return bE + this.s9(b1 - bE)
	}
}

function aMB() {
	this.bS = function(player) {
		return t.a1r.a1s(player, function(player) {
			var az = jN.jO.jP;
			if (0 === az) return -1;
			for (var c6 = Math.min(az, jN.performance.a4m ? az : 10), cz = jN.jO.cz, a7Y = p.eL(hL.random() * az, hL.value(100)), iG = a7Y + c6, ip = hL.lC(z.l7[player], z.l8[player]), iq = hL.lC(z.l9[player], z.lA[player]), mG = -1, uj =
					a8.kg(0, 0, cd.fR, cd.fS), b0 = a7Y; b0 < iG; b0++) {
				var cX = b0 % az,
					abJ = a8.kQ(ip, iq, cz[cX]);
				abJ < uj && (uj = abJ, mG = cX)
			}
			return -1 !== mG ? function(jM, ip, iq) {
				var kR = a8.jQ(jM),
					kS = a8.jR(jM),
					kW = ip - kR,
					kZ = iq - kS;
				Math.abs(kW) >= Math.abs(kZ) ? (kZ = 0, kW = Math.sign(kW)) : (kW = 0, kZ = Math.sign(kZ));
				kW === kZ && (kW = 1);
				for (;;) {
					if (kR += kW, kS += kZ, !a8.kw(kR, kS)) break;
					if (jM = a8.kt(kR, kS), aA.kM(a8.a9(jM))) return jM
				}
				return -1
			}(cz[mG], ip, iq) : -1
		}(player))
	}
}

function a3A() {
	this.u = new xV, this.we = new bQ, this.em = new aDC, this.by = new aEW, this.bX = new aX5, this.eh = new cn, this.abL = new aLL, this.aVe = new aUc, this.pP = new abM, this.abN = new zS, this.abO = new eM, this.abP = new aYV, this.abQ = new aS4,
		this.b = function() {
			this.u.b()
		}
}

function abM() {
	this.pQ = function(cu, cs) {
		eO.b(cs), 0 === eO.size ? bW.u.ec(cu, 3205) : ((0 === eO.eP(1) ? function(cu) {
			var abT = eO.eP(6);
			0 === abT ? function(cu) {
					if (0 === cu && 8 !== cj.ek()) {
						cT.u.a58();
						for (var abV = eO.eP(12), abW = eO.eP(6), bq = new Array(abV), b0 = 0; b0 < abV; b0++) bq[b0] = eO.eP(abW);
						dp.aW7(bq)
					}
				}(cu) : 2 === abT ? bW.abN.zT(cu) : 3 === abT || 4 === abT ? cY.b() : 5 === abT ? bW.abO.eN() : 9 === abT ? bW.abO.ea(cu) : 10 === abT ? bW.abP.aYW() : 11 === abT ? bW.abO.eo(cu) : 12 === abT ? bW.abP.aYX() : 13 ===
				abT ? bW.abQ.aS5() : 14 === abT ? bW.abQ.aS6() : 15 === abT ? bW.abO.ex() : 16 === abT ? bW.abN.zY(cu) : 17 === abT ? bW.abN.zf(cu) : 19 === abT ? bW.abN.zn(cu) : 20 === abT && bW.abO.eU(cu)
		} : function(cu) {
			if (8 !== cj.ek() && !cY.a4R()) return;
			if (cu !== bW.u.xa) bW.u.ec(cu, 3244);
			else if (0 === eO.eP(1)) bT.pt.aXF(eO.cs);
			else {
				var b0, cu = eO.eP(2);
				if (0 === cu) {
					var a7E, em = eO.eP(9);
					0 !== z.bZ[em] && 0 !== z.bZ[c.ba] && (a7E = eO.eP(10), e.aAX(em, c.ba, a7E), e4.a6j(em, 1, a7E))
				} else if (1 === cu) ! function() {
					var em = eO.eP(9);
					0 !== z.bZ[em] && 0 !== z.bZ[c.ba] && wd.aao(0, [em], !0) && e.aAg(em, 1)
				}();
				else if (2 === cu) ! function() {
					var em = eO.eP(9),
						target = eO.eP(9);
					0 !== z.bZ[em] && 0 !== z.bZ[target] && 0 !== z.bZ[c.ba] && wd.aao(1, [em], !0) && (e4.a6j(em, 3, 96), e4.a6j(target, 4, 96), e.aAi(em, target))
				}();
				else if (jo.aJd && !jo.aJe) {
					var az = 540;
					for (cp.ck(17287), cp.cq(1, 0), cp.cq(6, 10), az = Math.min(mf.lt.aLx.length, 540), b0 = 0; b0 < az; b0++) cp.dG(32, mf.lt.aLx[b0]);
					bW.u.send(bW.u.xa, cp.cs)
				}
			}
		})(cu), bT.q3())
	}, this.abX = function() {
		eO.cE = 1;
		var abT = eO.eP(6),
			aX9 = eO.eP(10);
		return bW.u.xb === aX9 ? (bW.u.xa = aX9, !1) : (bW.u.close(bW.u.xb, 3247), bW.u.xa = aX9, cY.cW = eO.eP(10), cY.a4H = eO.eP(3 === abT ? 9 : 1), bW.u.xi(aX9, 5) && bW.em.en(), !0)
	}
}

function cb() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.ci = null
}

function aRm() {
	var hn, lf;

	function abc() {
		cT.jl();
		var bF = jd.aNl(lf.i1());
		(c.dr && 0 < bF.length && bF === jd.je.jf || jd.aFG.eQ(bF)) && jd.jm()
	}
	this.show = function(aUN) {
		this.aNk(aUN), hn.show(), this.resize()
	}, this.aNk = function(aUN) {
		0 === c.dr ? aUN ? lf.iI(aUN) : c.aLw.length && lf.iI(c.aLw) : (c.bV || (jd.je.jf = jd.aM1.dC()), lf.iI(jd.aNm(jd.je.jf)))
	}, this.iK = function() {
		hn.iK()
	}, this.resize = function() {
		hn.resize(), lf.resize()
	}, this.iL = function(dI) {
		2 === dI ? hn.iM[0].iN() : abc()
	}, hn = new hr(L(54), [new hs("⬅️ " + L(33), function() {
		cT.aIs(1)
	}), new hs(L(521), function() {
		lf.lk()
	}), new hs(L(522), function() {
		lf.ll()
	}), new hs(L(523), function() {
		lf.clear()
	}), new hs(L(524), function() {
		abc()
	})]), lf = new iH(L(525)), hn.hv.appendChild(lf.iG)
}

function a3X() {
	this.aM2 = new oN, this.eS = new qE, this.b = function() {
		dY.dc.aU2()
	}, this.oQ = function() {
		return cy.cz.data[160].value
	}
}

function lq() {
	this.aOX = function(a7E, player) {
		e.aAX(c.ba, player, a7E), bW.em.aDR(a7E, player)
	}, this.aA9 = function(player) {
		e.aAg(player, 0), bW.em.aDU(player)
	}, this.aPK = function(aPA, player) {
		e.aAh(aPA, player), bW.em.aDV(aPA, player)
	}, this.aLM = function() {
		c.fk || c.bV || bW.abL.aLM()
	}
}

function aXv() {
	this.fT = function(bq) {
		bq.fill(0)
	}, this.wD = function(bq) {
		for (var az = bq.length, b0 = 0; b0 < az; b0++) bq[b0] = []
	}, this.a5i = function(nU, a6n) {
		for (var a0i = a4.lK, b0 = 0; b0 < 3; b0++) a0i[b0] = a6n * nU[b0];
		return a0i
	}, this.a5j = function(nU, a0i, abd) {
		for (var i = 0, b0 = 0; b0 < 3; b0++) i += Math.abs(nU[b0] - a0i[b0]);
		return abd <= i
	}, this.a5k = function(nU, abe) {
		for (var b0 = 0; b0 < 3; b0++) nU[b0] = p.q(nU[b0] + abe, 0, 255);
		return nU
	}, this.c4 = function(bq, oE, pl) {
		pl = pl || bq.length - 1;
		for (var aKB = 0, b0 = oE = oE || 0; b0 <= pl; b0++) aKB += bq[b0];
		return aKB
	}, this.abf = function(bq, abg) {
		for (var b0, aLk, az = bq.length, abh = [], bE = az - 1; 0 <= bE; bE--) {
			for (b0 = aLk = 0; b0 < az; b0++) abg(bq[b0]) < abg(bq[aLk]) && (aLk = b0);
			az--, abh.push(bq[aLk]), bq[aLk] = bq[az], bq.pop()
		}
		return abh
	}, this.min = function(bq) {
		var b0, c8, az = bq.length;
		if (0 === az) return 0;
		for (c8 = bq[0], b0 = 1; b0 < az; b0++) c8 = Math.min(c8, bq[b0]);
		return c8
	}, this.max = function(bq) {
		var az = bq.length;
		if (0 === az) return 0;
		for (var c8 = bq[0], b0 = 1; b0 < az; b0++) c8 = Math.max(c8, bq[b0]);
		return c8
	}, this.nA = function(bq, c8) {
		for (var az = bq.length, bD = 0, b0 = 0; b0 < az; b0++) bD += bq[b0] > c8;
		return bD
	}, this.abi = function(hX, hY, min) {
		for (var az = hY[0], b0 = az - 1; 0 <= b0; b0--) hX[b0] < min && (hX[b0] = hX[--az]);
		hY[0] = az
	}, this.abj = function(bq, az, value) {
		for (var b0 = 0; b0 < az; b0++) bq[b0] -= value
	}, this.abk = function(bq) {
		for (var az = bq.length, b0 = 0; b0 < az; b0++)
			if ("string" != typeof bq[b0]) return !1;
		return !0
	}, this.i0 = function(bF, bq, abl) {
		bq.fill(0);
		for (var gi = bF.split(","), az = Math.min(gi.length, bq.length), b0 = 0; b0 < az; b0++) bq[b0] = Math.min(parseInt(gi[b0]), abl)
	}, this.aPf = function(bF, bq, aV3) {
		bq.fill("");
		for (var gi = bF.split('"'), az = Math.min(gi.length, 2 * bq.length), s6 = 0, b0 = 1; b0 < az; b0 += 2) bq[s6++] = gi[b0].slice(0, aV3)
	}, this.n9 = function(bq, bD) {
		if (0 === bD) bq.fill(0);
		else {
			var aKB = this.c4(bq),
				az = bq.length;
			if (0 === aKB) bq.fill(p.eL(bD, az));
			else
				for (var b0 = 0; b0 < az; b0++) bq[b0] = p.eL(bD * bq[b0], aKB);
			if (0 === (aKB = this.c4(bq))) bq[1] = bD;
			else
				for (var s6 = 0; aKB++ < bD;) bq[s6 = (s6 + 1) % az] && bq[s6]++
		}
	}, this.ox = function(bq) {
		if (!bq) return 0;
		var az = bq.length;
		if (0 === az) return 0;
		for (var c8 = bq[az - 1], b0 = az - 2; 0 <= b0; b0--)
			if (bq[b0] !== c8) return b0 + 2;
		return 1
	}, this.abG = function(bq) {
		for (var aKB = 0, b0 = 0; b0 < bq.length; b0++) aKB += bq[b0].length;
		return aKB
	}, this.c5 = function(abm) {
		for (var bq = [], b0 = 0; b0 < abm.length; b0++) bq = bq.concat(abm[b0]);
		return bq
	}, this.has = function(bq, c8) {
		for (var az = bq.length, b0 = 0; b0 < az; b0++)
			if (bq[b0] === c8) return !0;
		return !1
	}
}

function a2c() {
	this.data = new xv;
	var abn = (new aVv).L84,
		abo = (this.qC = abn, !(this.aYQ = "en"));
	this.b = function() {
		var bF, bq;
		abo = !1, ("en" === (bF = cy.cz.data[12].value).split("-")[0].toLowerCase() ? (cC.qC = abn, cC.aYQ = bF, 1) : cy.cz.data[12].value === cy.cz.data[145].value && 0 < cy.cz.data[146].value && (bF = cy.cz.data[146].value, (bq = cy.iN.aEK(bF,
			!1)).length === bF) && !!bA.c3.abk(bq) && function(bq) {
			for (var az = bq.length, dO = 0; dO < az; dO++) bq[dO] = bq[dO].replace("&#39;", "'");
			var abv = cy.iN.aEK(az, !0);
			if (az !== abv.length) return !1;
			if (!bA.c3.abk(abv)) return !1;
			for (var c6 = abn.length, aW8 = new Array(c6), aCg = c6 === az, bD = Math.min(az, c6), b0 = 0; b0 < c6; b0++)
				if (aW8[b0] = abn[b0], b0 < az && abv[b0] === aW8[b0]) aW8[b0] = bq[b0];
				else {
					aCg = !1;
					for (var b1 = 0; b1 < bD; b1++)
						if (abv[b1] === aW8[b0]) {
							aW8[b0] = bq[b1];
							break
						}
				} return cC.qC = aW8, cC.aYQ = cy.cz.data[12].value, aCg
		}(bq)) || (abo = !0)
	}, this.a3q = function() {
		jG.dT(), gw.dT(), e3.dT(), gq.dT(), dq.b(), ac = new a20
	}, this.qD = function() {
		return this.qC === abn || !abn.length
	}, this.et = function() {
		var abw;
		return !!abo && (abo = !1, 0 !== abn.length) && (abw = cy.cz.data[12].value, bW.bX.aX7(0, abw.slice(0, 20)), !0)
	}, this.f0 = function(bq) {
		bq.length !== abn.length ? 8 === cT.cU && cT.eu().ew(30, 0, 1) : (this.qC = bq, this.aYQ = cy.cz.data[12].value, cy.ep.eq(145, this.aYQ), cy.ep.eq(146, bq.length), cy.iN.aEQ(bq, !1), cy.iN.aEQ(abn, !0), 8 === cT.cU ? cT.eu().ew(30) :
			0 === cj.ek() && 5 === cT.cU && cT.u.iW())
	}, this.aXC = function() {
		var dA, bq = navigator.languages;
		return bq && bq.length ? (dA = Math.max(cC.data.cD(bq[0]), 0), 1 === bq.length ? [dA, dA] : [dA, Math.max(cC.data.cD(bq[1]), 0)]) : [0, 0]
	}
}
self.aiCommand746 = function(c8) {
	0 === c8 ? yT() : 1 !== c8 || !dY || 1 !== dY.id || dY.mb < 14 || vD.yU()
}, aJR(), setTimeout(yT, 1e4), window.onload = function() {
	yT()
};