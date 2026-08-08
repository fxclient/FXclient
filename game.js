var fv, fw, fx, fy, ky, kz, l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, lA, tr, fR, nk, nZ, nY, na, pC, o, ar, lR, qI, ut, aHa, aHb, aHc, o4, df, cp, pV, a3U, hF, kX, vQ, p1, a3T, kk, hx, qO, qp, pW, aB, kc, ee, lF, fY, cr, eF, aHd, aHe, nM, qj, cw, aHf,
	a3P, ch, iB, a4G, aAK, aHg, aA9, a3Y, a19, lm, c2, eC, a0p, f2, a3O, aGV, qn, iv, pN, d4, a3Z, a3V, fI, pH, a2, w, hM, h9, pF, zU, gP, fE, oV, a59, dE, yr, ac, eN, e3, ix, a3S, aHh, qQ, p, aAD, a0, pY, a3R, aHi, yX, qv, qu, wq, dj, h4, cQ, kp,
	dY, bN, fd, c3, lv, a5, a3o, a2U, aHj, ay, f5, a65, zp, aFx, aHk, jG, a9u, hL, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "1em",
		"span", "email", "Data", " / ", "territorial.io", "0.5em", "pre", "password", "input",
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
	var b, c, aG;

	function m() {
		var v;
		1 === o.data.gameMode ? (o.data.teamPlayerCount || (o.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), o.t.u()), v = w.x.y(o.data.teamPlayerCount, 0), o.data.numberTeams = v) : (2 === o.data.botDifficultyType && (o.data
			.botDifficultyType = 0), 1 === o.data.spawningType && (o.data.spawningType = 0))
	}

	function g() {
		1 !== o.data.gameMode && (o.data.teamPlayerCount = null), z(), o.data.canvas = null, a0.a1(5, 5)
	}

	function z() {
		a2.a3.a4(), a5.a6.a7(156, a2.a8.a9())
	}

	function h() {
		o.data.isReplay = 0, z(), o.t.aA(), aB.aC(), o.t.aD(), o.data.canvas = 2 === o.data.mapType ? p.q : null, o.aE(), o.aF = 1
	}

	function ag() {
		m();
		for (var ak = [aK(), aL(), aM()], al = 3; al < 6; al++) a0.removeChild(c.am, c.an[al].ao), c.an[al] = ak[al - 3], c.am.appendChild(c.an[al].ao);
		c.resize()
	}

	function aK() {
		var ap, aT = new aU;
		return aT.aV(L(7)), ap = 0 === o.data.gameMode ? [L(8), L(9)][o.data.colorsType] : o.data.numberTeams + " Team" + (1 === o.data.numberTeams ? "" : "s"), aT.aq(ap), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(21)
		}).button])), aT
	}

	function aL() {
		var aT = new aU,
			ak = (aT.aV(L(10)), [L(11) + ": " + ar.at[o.data.botDifficultyValue], L(12), L(13), L(9)]);
		return aT.aq(ak[o.data.botDifficultyType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(25)
		}).button])), aT
	}

	function aM() {
		var aT = new aU,
			ak = (aT.aV("Spawning"), [L(8), L(14), L(9)]);
		return aT.aq(ak[o.data.spawningType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(24)
		}).button])), aT
	}
	this.show = function() {
		b.show(), this.resize(), b.k.scrollTop = a0.aw.ax[0]
	}, this.b1 = function() {
		a0.aw.ax[0] = b.k.scrollTop, b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e("🔧 " + L(0), [new f("⬅️ " + L(1), g), new f(L(2), h)]), m(), o.data.canvas || (2 === o.data.mapType ? o.data.canvas = p.q : 1 === o.data.mapType ? o.data.canvas = p.r(p.s(o.data), 0).q : (o.data.mapType = 0, o.data
		.passableWater = o.data.passableMountains = 1, o.data.canvas = p.r(p.s(o.data), o.data.mapSeed).q)), c = new j(b.k, (function(aG) {
		var aT = new aU,
			aW = (aT.aV(L(3)), o.data.canvas);
		aW.style.width = "100%", aT.aX({
			aY: aW
		}), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(20)
		}).button])), aG.push(aT)
	}(aG = []), function(aG) {
		var aT = new aU;
		aT.aV(L(5)), aT.aX(new aa({
			ab: -1,
			value: o.data.playerCount
		}, 1, 0, function(aY) {
			var playerCount = ac.ad(Math.floor(aY.target.value), 1, 512);
			aY.target.value = o.data.playerCount = playerCount, 1 === o.data.gameMode && (aY = w.x.y(o.data.teamPlayerCount, 0), o.t.u(), w.x.y(o.data.teamPlayerCount, 0) !== aY) && ag()
		})), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU;
		aT.aV(L(6)), aT.ah(new ai({
			aj: ["Battle Royale", "Teams"],
			value: o.data.gameMode
		}, function(ab) {
			o.data.gameMode !== ab && (1 === (o.data.gameMode = ab) && (o.data.colorsData || (o.data.colorsData = new Uint32Array(1)), o.data.colorsData[0] = 258049), ag())
		})), aG.push(aT)
	}(aG), aG.push(aK()), aG.push(aL()), aG.push(aM()), function(aG) {
		var aT = new aU,
			ak = (aT.aV(L(15)), [L(16), L(17), L(9)]);
		aT.aq(ak[o.data.playerNamesType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(23)
		}).button])), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU,
			ak = (aT.aV(L(18)), [L(19), L(11) + ": " + o.data.aIncomeValue, L(9)]);
		aT.aq(ak[o.data.aIncomeType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(22)
		}).button])), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU,
			ak = (aT.aV(L(20)), [L(19), L(11) + ": " + o.data.tIncomeValue, L(9)]);
		aT.aq(ak[o.data.tIncomeType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(26)
		}).button])), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU,
			ak = (aT.aV(L(21)), [L(19), L(11) + ": " + o.data.iIncomeValue, L(9)]);
		aT.aq(ak[o.data.iIncomeType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(27)
		}).button])), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU,
			ak = (aT.aV(L(22)), [L(19), L(11) + ": " + o.data.sResourcesValue, L(9)]);
		aT.aq(ak[o.data.sResourcesType]), aT.aX(new aZ([new f(L(4), function() {
			a0.a1(28)
		}).button])), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU;
		aT.aV(L(23)), aT.aX(new aZ([new f(L(24), function() {
			a0.au(), o.t.av(), a0.aw.ax[0] = 0, a0.a1(19)
		}).button])), aT.aX(new aZ([new f(L(25), function() {
			ay.az()
		}).button])), aT.aX(new aZ([new f(L(26), function() {
			return ay.b0(), !0
		}).button])), aG.push(aT)
	}(aG), aG))
}

function b6() {
	var b, c, b7, b8;

	function g() {
		bA(), a0.bB()[19] = null, a0.bC()
	}

	function b9() {
		bA(), a0.a1(21)
	}

	function bA() {
		1 === o.data.gameMode ? o.t.u() : 0 === o.data.gameMode && 1 === o.data.colorsType && w.x.bD(b7.bE(), o.data.colorsData, 262143)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b8 = [new f("⬅️ " + L(1), g)], 1 === o.data.gameMode && b8.push(new f(L(27), b9, 1, 1)), b = new e(L(7), b8), c = new j(b.k, (b8 = [], 0 === o.data.gameMode ? (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(8), L(9)],
			value: o.data.colorsType
		}, function(ab) {
			bA(), o.data.colorsType = ab, 1 !== o.data.colorsType || o.data.colorsData && o.data.colorsData.length === o.bI || (o.data.colorsData = new Uint32Array(o.bI)), a0.a1(21)
		})), aG.push(aT)
	}(b8), 1 === o.data.colorsType && function(aG) {
		var aT = new aU;
		aT.aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.colorsData, 1)), aT.aX(b7), aG.push(aT)
	}(b8)) : (o.t.u(), b8.push(function() {
		var aT = new aU;
		aT.aV(L(5));
		for (var al = 0; al < bN.bO.length; al++) {
			var bP = (al + 1) % bN.bO.length,
				aY = aT.aq((0 == bP ? "" : "Team ") + bN.bO[bP]);
			al && (aY.style.marginTop = "0.5em"), aT.aX(new aa({
				ab: -1,
				value: o.data.teamPlayerCount[bP]
			}, 1, 0, function(aY) {
				b.b4[1].bQ(0);
				var playerCount = ac.ad(Math.floor(aY.target.value), 0, 512);
				aY.target.value = playerCount, o.data.teamPlayerCount[aY.target.bR] = playerCount
			})).aY.bR = bP
		}
		return aT
	}()), function(aG) {
		for (var aT = new aU, aj = (aT.aV(L(29)), []), al = 0; al < bN.bO.length; al++) {
			var bP = (al + 1) % bN.bO.length;
			aj.push(bN.bO[bP])
		}
		o.data.colorsData || (o.data.colorsData = new Uint32Array(1));
		aT.ah(new ai({
			aj: aj,
			value: (o.data.colorsData[0] % 16 + bN.bO.length - 1) % bN.bO.length
		}, function(ab) {
			var ab = (ab + 1) % bN.bO.length,
				bT = bN.bU[ab],
				bT = (bT[0] >> 2 << 12) + (bT[1] >> 2 << 6) + (bT[2] >> 2);
			o.data.colorsData[0] = bT - (15 & bT) + ab
		})), aG.push(aT)
	}(b8)), b8))
}

function bW() {
	this.bX = function(canvas, bY, bZ) {
		var ba = canvas.width,
			bb = canvas.height,
			b3 = w.bc.bd(ba, bb),
			be = w.bc.getContext(b3, !0),
			canvas = (be.drawImage(canvas, 0, 0), be.getImageData(0, 0, ba, bb));
		return bY(canvas.data, ba, bb, bZ), be.putImageData(canvas, 0, 0), b3
	}, this.bg = function(bh, ba, bb) {
		for (var bi = ba - 1; 0 <= bi; bi--)
			for (var bj = bb - 1; 0 <= bj; bj--) {
				var al = 4 * (bi + bj * ba);
				bh[3 + al] = bh[al], bh[al] = bh[1 + al] = bh[2 + al] = 255
			}
	}, this.bk = function(bh, ba, bb) {
		for (var bi = ba - 1; 0 <= bi; bi--)
			for (var bj = bb - 1; 0 <= bj; bj--) {
				var al = 4 * (bi + bj * ba);
				bh[1 + al] > bh[2 + al] + 10 && (bh[3 + al] = bh[al], bh[1 + al] = bh[2 + al])
			}
	}, this.bl = function(bh, ba, bb, bZ) {
		for (var gap = Math.floor(Math.min(ba, bb) * bZ), bi = 0; bi < ba; bi++)
			for (var al, bj = 0; bj < bb; bj++)(bi < gap || bj < gap || ba - gap <= bi || bb - gap <= bj) && (bh[3 + (al = 4 * (bi + bj * ba))] = 255 - 255 * (bh[1 + al] - bh[al]) / (255 - bh[al]))
	}, this.bm = function(bh, ba, bb, bZ) {
		for (var bi = ba - 1; 0 <= bi; bi--)
			for (var bj = bb - 1; 0 <= bj; bj--) {
				var al = 4 * (bi + bj * ba);
				bh[al] = bZ[0], bh[1 + al] = bZ[1], bh[2 + al] = bZ[2]
			}
	}, this.bn = function(bh, ba, bb, bZ) {
		for (var gap = Math.floor(ba * bZ), bi = 0; bi < ba; bi++)
			for (var al, bj = 0; bj < bb; bj++)(bi < gap || bj < gap || ba - gap <= bi || bb - gap <= bj) && (bh[al = 4 * (bi + bj * ba)] = bh[1 + al] = bh[2 + al] = 0)
	}, this.bo = function(bh, ba, bb) {
		for (var bj, al, bi = ba - 1; 0 <= bi; bi--)
			for (bj = bb - 1; 0 <= bj; bj--) 200 < bh[1 + (al = 4 * (bi + bj * ba))] && bh[1 + al] - 20 > bh[al] && bh[1 + al] - 20 > bh[2 + al] ? bh[al] + bh[2 + al] < 40 ? bh[3 + al] = 0 : (bh[3 + al] = bh[al], bh[al] = 255, bh[1 + al] = 255,
				bh[2 + al] = 255) : bh[al] < 50 && bh[1 + al] < 50 && bh[2 + al] < 50 && (bh[al] + bh[1 + al] + bh[2 + al] < 50 ? bh[3 + al] = 180 : bh[3 + al] = 180 + Math.floor(75 * (bh[al] + bh[1 + al] + bh[2 + al] - 50) / 100))
	}, this.bp = function(bh, ba, bb) {
		for (var bj, al, bi = ba - 1; 0 <= bi; bi--)
			for (bj = bb - 1; 0 <= bj; bj--) bh[1 + (al = 4 * (bi + bj * ba))] > bh[al] + 20 && bh[1 + al] > bh[2 + al] + 20 && bh[al] + bh[2] < 40 && (bh[3 + al] = 255 - bh[1 + al], bh[al] = bh[1 + al] = bh[2 + al] = bh[al])
	}, this.bq = function(bh, ba, bb, bZ) {
		for (var br = ba >> 1, bi = 0; bi < ba; bi++)
			for (var bj = 0; bj < bb; bj++) Math.sqrt((bi - br) * (bi - br) + (bj - br) * (bj - br)) > bZ * br && (bh[4 * (bi + bj * ba) + 3] = 0)
	}
}

function ai(bs, bS) {
	this.bt = [];
	var bu = this.bt;

	function click() {
		for (var al = 0; al < bu.length; al++) bu[al].textContent = bu[al].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var ab = parseInt(this.name);
		void 0 !== bs.ab && a5.a6.a7(bs.ab, ab), bS && bS(ab)
	}
	for (var bv, bw = bs.aj.length, al = 0; al < bw; al++)(bv = document.createElement("p")).textContent = "⚪ " + bs.aj[al], bv.style.margin = "0", bv.name = "" + al, bv.style.cursor = "pointer", bv.style.fontSize = "1em", bv.addEventListener(
		"click", click), bu.push(bv);
	bu[bs.value].textContent = bu[bs.value].textContent.replace("⚪", "🟢")
}

function bx() {
	this.a4 = function() {
		! function() {
			var data = a5.c0.data;
			0 === data[2].c1 && (c2.bb > c2.ba || 0 !== c3.id) && (data[2].value = data[2].c4 = 1);
			0 === data[100].c1 && (data[100].value = data[100].c4 = (0 === c3.id ? "Player " : 1 === c3.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var al, data = a5.c0.data,
			bw = data.length;
		for (al = 0; al < bw; al++) {
			var c5 = a5.b5.c6(al, !0);
			data[al] && data[al].c1 === c5 && (null === (c5 = a5.b5.c7(al)) ? data[al].value = data[al].c4 : 2 === data[al].type ? data[al].value = c5 : (c5 = Number(c5), isNaN(c5) ? data[al].value = data[al].c4 : data[al].value = c5))
		}
	}
}

function c9() {
	var cA, cB, size, cC, cD, cE;

	function cG(player) {
		return player < o.cF ? cA * player : cA * o.cF + cB * (player - o.cF)
	}
	this.a4 = function() {
		cA = o.cF < 16 ? 12 : 8, cB = 4;
		var bw = cG(o.bI);
		size = new Uint8Array(o.bI), cC = new Uint16Array(bw), cD = new Uint32Array(bw), cE = new Uint8Array(bw)
	}, this.cH = function(cI, cJ) {
		var cK = this.cL(cI, cJ),
			cJ = (this.cM(cI, cJ, 0), w.cO.cP(cI, cK));
		cQ.cR(cI, cK - cJ, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.cS = function(player, cJ) {
		var cU, cJ = function(player, cJ) {
			var al, cX = cG(player);
			for (al = size[player] - 1; 0 <= al; al--)
				if (cC[cX + al] === cJ) return al;
			return size[player]
		}(player, cJ);
		cJ !== size[player] && (cU = cD[cG(player) + cJ], this.cV(player, cJ), this.cW(player, cU, o.bI))
	}, this.cY = function(player, cJ) {
		for (var cX = cG(player), al = size[player] - 1; 0 <= al; al--)
			if (cC[cX + al] === cJ) return !0;
		return !1
	}, this.cZ = function(player) {
		return player < o.cF ? size[player] < cA : size[player] < cB
	}, this.ca = function(player) {
		return size[player]
	}, this.cb = function(player, al) {
		return cC[cG(player) + al]
	}, this.cc = function(player, al) {
		return cD[cG(player) + al]
	}, this.cL = function(player, cJ) {
		for (var cX = cG(player), al = size[player] - 1; 0 <= al; al--)
			if (cC[cX + al] === cJ) return cD[cX + al];
		return 0
	}, this.cd = function(player) {
		for (var cX = cG(player), bV = 0, al = size[player] - 1; 0 <= al; al--) bV += cD[cX + al];
		return bV
	}, this.cM = function(player, cJ, cU) {
		for (var cX = cG(player), al = size[player] - 1; 0 <= al; al--) cC[cX + al] === cJ && (cD[cX + al] = cU)
	}, this.ce = function(player, al, cU) {
		cD[cG(player) + al] = Math.max(cU, 0)
	}, this.cf = function(player, al) {
		cE[cG(player) + al] = 0
	}, this.cg = function(player, al) {
		return cE[cG(player) + al]
	}, this.cW = function(player, cU, cJ) {
		ch.ci.cj[player] = ch.ci.cj[cJ] = 8, w.cO.ck(cJ) && cQ.cl[6 - w.cO.cm(player)]++;
		for (var cX = cG(player), al = size[player] - 1; 0 <= al; al--)
			if (cC[cX + al] === cJ) return cD[cX + al] += cU, void(cD[cX + al] = cD[cX + al] > o.cn ? o.cn : cD[cX + al]);
		cC[cX + size[player]] = cJ, cD[cX + size[player]] = cU, cE[cX + size[player]] = 1, size[player]++, cJ === o.co ? cp.cq(player, 5) : player < o.cF && player === o.co && cr.cs(cJ)
	}, this.cV = function(player, ab) {
		var ct, cX;
		if (0 !== size[player])
			for (cX = cG(player), size[player]--, ct = ab; ct < size[player]; ct++) cC[cX + ct] = cC[cX + ct + 1], cD[cX + ct] = cD[cX + ct + 1], cE[cX + ct] = cE[cX + ct + 1]
	}, this.cu = function(player) {
		for (var ct, cX, cv = [], al = cw.cx - 1; 0 <= al; al--)
			for (cX = cG(cw.cy[al]), ct = size[cw.cy[al]] - 1; 0 <= ct; ct--)
				if (cC[cX + ct] === player) {
					cv.push(cw.cy[al]);
					break
				} return cv
	}
}

function cz() {
	var input;

	function d0(aY) {
		(aY = aY.target.files) && 0 < aY.length && d4.d5(aY[0])
	}

	function d9(aY) {
		var b3 = new Image;
		b3.onload = dA, b3.src = aY.target.result
	}

	function dA(aY) {
		var aY = aY.target,
			ba = aY.width,
			bb = aY.height,
			dC = a5.c0.data[162].value,
			max = Math.min(p.dD, dC),
			dC = (max = c3.id || dE.dF() ? Math.min(1400, dC) : max) / Math.max(ba, bb);
		if (dC < 1 && (ba = Math.floor(dC * ba + .125), bb = Math.floor(dC * bb + .125)), max < ba || max < bb || ba < 10 || bb < 10) dC = "Invalid Image Dimensions!", c3.dI ? c3.dI.showToast(dC) : alert(dC);
		else {
			for (var max = document.createElement("canvas"), dC = (max.width = ba, max.height = bb, max.getContext("2d")), dJ = document.createElement("canvas"), dK = (dJ.width = aY.width, dJ.height = aY.height, dJ.getContext("2d")), aY = (dK
					.drawImage(aY, 0, 0), dK.getImageData(0, 0, dJ.width, dJ.height)), dK = dC.createImageData(ba, bb), src = aY.data, dN = dK.data, dO = dJ.width / ba, dP = dJ.height / bb, bj = 0; bj < bb; bj++)
				for (var bi = 0; bi < ba; bi++) {
					var dQ = Math.floor(bi * dO),
						dQ = 4 * (Math.floor(bj * dP) * dJ.width + dQ),
						dT = 4 * (bj * ba + bi);
					dN[dT] = src[dQ], dN[1 + dT] = src[1 + dQ], dN[2 + dT] = src[2 + dQ], dN[3 + dT] = 255
				}
			dC.putImageData(dK, 0, 0), 20 === a0.dU && a0.dV().dA(max)
		}
	}
	this.a4 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = d0
	}, this.d1 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.d2 = function() {
		input.click()
	}, this.d5 = function(d6) {
		var ak = d6.name.split("."),
			ak = ak[ak.length - 1].toLowerCase();
		"gif" !== ak && "jpg" !== ak && "jpeg" !== ak && "png" !== ak || ((ak = new FileReader).onload = d9, ak.readAsDataURL(d6))
	}
}

function dW() {
	var ab = 0,
		dX = dY.dX;
	this.dZ = 0, this.da = function() {
		c2.da(), o.db ? dc() : 0 === ab ? dY.dX >= dX && (dX += dY.dd * Math.floor(1 + (dY.dX - dX) / dY.dd), 2 === o.de || df.dg ? dh() : (di(), dj.render()), ab++) : ((df.dg ? dc : (dY.dk = !0, dl))(), ab = 0), dm(), dY.dk && (dY.dk = !1, dn())
	}
}

function dp() {
	function dt(ak) {
		if (0 === ak.length) a5.a6.a7(116, "");
		else {
			for (var dx = ak[0], al = 1; al < ak.length; al++) dx += ";" + ak[al];
			a5.a6.a7(116, dx)
		}
	}
	this.dq = function() {
		a5.c0.data[110].value.length && (a5.c0.data[106].value = a5.c0.data[110], a5.a6.a7(110, ""), this.dr())
	}, this.dr = function() {
		var ak = a5.c0.data[116].value.split(";");
		for (ak.length % 2 == 1 && ak.pop(), ak.unshift(a5.c0.data[106].value), ak.unshift(a5.c0.data[105].value), al = 2; al < ak.length; al += 2)
			if (ak[al] === ak[0]) {
				ak.splice(al, 2);
				break
			} for (var ds = [], al = 0; al < ak.length; al += 2) ds.push(ak[al]);
		dt(ak), a5.c0.data[117].value = 0, a5.c0.data[117].aj = ds
	}, this.du = function(ab) {
		a5.c0.data[117].aj.splice(ab, 1), a5.c0.data[117].value = Math.min(ab, a5.c0.data[117].aj.length - 1);
		var ak = a5.c0.data[116].value.split(";");
		ak.splice(2 * ab, 2), dt(ak)
	}, this.dv = function(ab) {
		var ak = a5.c0.data[116].value.split(";");
		return {
			dw: ak[2 * ab],
			password: ak[2 * ab + 1]
		}
	}, this.dy = function() {
		var bV = ac.ad(a5.c0.data[121].value, -1, 262143);
		return bV = -1 === bV ? ~~(262144 * Math.random()) : bV
	}, this.dz = function() {
		for (var ak = document.cookie.split(";"), al = 0; al < ak.length; al++) {
			var e1, e0 = ak[al].trim();
			0 !== e0.length && (e1 = 0 <= (e1 = e0.indexOf("=")) ? e0.substring(0, e1) : e0, document.cookie = e1 + "=;expires=0;path=/", document.cookie = e1 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = e1 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function e2() {
	this.da = function(player) {
		return e3.e4.e5(player, function(player) {
			var bw = ch.e7.e8;
			if (0 === bw) return -1;
			for (var cX = Math.min(bw, ch.performance.e9 ? bw : 10), c0 = ch.e7.c0, eA = ac.eB(eC.random() * bw, eC.value(100)), aY = eA + cX, eD = eC.eE(eF.eG[player], eF.eH[player]), eI = eC.eE(eF.eJ[player], eF.eK[player]), eL = -1,
					eM = eN.eO(0, 0, p.eP, p.eQ), al = eA; al < aY; al++) {
				var eR = al % bw,
					eS = eN.eT(eD, eI, c0[eR]);
				eS < eM && (eM = eS, eL = eR)
			}
			return -1 !== eL ? function(eV, eD, eI) {
				var eW = eN.eX(eV),
					eY = eN.eZ(eV),
					ea = eD - eW,
					eb = eI - eY;
				Math.abs(ea) >= Math.abs(eb) ? (eb = 0, ea = Math.sign(ea)) : (ea = 0, eb = Math.sign(eb));
				ea === eb && (ea = 1);
				for (;;) {
					if (eW += ea, eY += eb, !eN.ec(eW, eY)) break;
					if (eV = eN.ed(eW, eY), ee.ef(eN.eg(eV))) return eV
				}
				return -1
			}(c0[eL], eD, eI) : -1
		}(player))
	}
}

function eh() {
	var ei = 0,
		ej = "",
		ek = 0,
		el = 0,
		em = 0;

	function eq(f1) {
		f2.f3.f4(3, f1)
	}

	function ez(v) {
		ei = 1, f5.message.f6({
			id: 6,
			value: v
		})
	}

	function et(eo) {
		var fL = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return eo.match(fL)
	}
	this.en = function(eo) {
		var ep, ak, ev;
		if (ei) return ei = 0, "yes" === (ep = eo.toLowerCase()) || "y" === ep ? void eq(ej) : void f5.message.f6({
			id: 5,
			f7: 7
		});
		!(eo.indexOf("@") < 0) && (ep = et(eo)) ? (ej = eo, ak = function(es) {
			for (var bw = es.length, f8 = [0, 0, 0, 0], al = 0; al < bw; al++)
				for (var ba = es[al], ct = 0; ct < 4; ct++) ba === "@room" + (ct + 1) && (f8[ct] = 1);
			if ((el = w.x.f9(f8)) % 4 == 0) return w.x.fA(f5.fB.fC);
			for (ct = 0; ct < 4; ct++) f8[ct] = f8[ct] ? f5.fB.fC[ct] : [];
			return w.x.fA(f8)
		}(ep), function(es, ev, eo) {
			if (!ek) return;
			for (var bw = ev.length, al = 0; al < bw; al++) 2 === ev[al].id && (eo = eo.replace(es[ev[al].ab], "@" + ev[al].bV));
			return ei = 1, eq((ej = eo).slice(0, 126) + "|"), 1
		}(ep, ev = function(es) {
			for (var ev = [], bw = (em = ek = 0, es.length), al = 0; al < bw; al++) {
				var ba = es[al],
					cX = ba.length;
				w.bL.startsWith(ba, "@[") ? cX <= 9 && w.bL.fD(ba, "]") && ev.push({
					id: 0,
					bV: ba.substring(2, cX - 1).toUpperCase()
				}) : 6 === cX ? w.bL.startsWith(ba, "@room") || (em++, ev.push({
					id: 1,
					bV: fE.fF.fG(ba.substring(1), 5)
				})) : 1 < cX && cX < 5 && 0 <= (cX = fI.data.fJ(ba.substring(1))) && (ev.push({
					id: 2,
					bV: cX,
					ab: al
				}), ek = 1)
			}
			return ev
		}(ep), eo) || (0 === ev.length ? el || function(es) {
			for (var bw = es.length, al = 0; al < bw; al++) {
				var ba = es[al];
				if ("@all" === ba || "@everyone" === ba) return 1
			}
			return
		}(ep) ? ez(ak.length) : eq(eo) : ep.length === em ? eq(eo) : (function(ak, ev) {
			var cX = ev.length;
			if (0 === cX) return;
			var bw = ak.length;
			loop: for (var al = bw - 1; 0 <= al; al--) {
				for (var ct = 0; ct < cX; ct++)
					if (0 === ev[ct].id) {
						if (ev[ct].bV === w.bL.fK(ak[al].username)) continue loop
					} else if (1 === ev[ct].id && ev[ct].bV === ak[al].dw) continue loop;
				ak[al] = ak[--bw], ak.pop()
			}
		}(ak, ev), ez(ak.length)))) : eq(eo)
	}, this.fM = function(eo) {
		var es = et(eo);
		if (es)
			for (var fN = new RegExp("^[0-9]+$"), bw = es.length, al = 0; al < bw; al++) {
				var ba = es[al].substring(1),
					cX = ba.length;
				1 <= cX && cX <= 3 && fN.test(ba) && (cX = parseInt(ba, 10), !isNaN(cX)) && 0 <= cX && cX < fI.data.ak.length && (eo = eo.replace("@" + ba, "@" + fI.data.ak[cX]))
			}
		return eo
	}
}

function fO() {
	this.fP = function() {
		var fX;
		return !(cw.cx < 3 || eF.fQ[fR[0]] >= o.fS >> 1) && (o.fT ? 9 !== o.fW && (fX = fY.fZ(), !(2 * fY.fc(fd.fe()) >= fX)) : function() {
			if (8 === o.fW) return !1;
			var fX = fY.fZ();
			if (2 * eF.fa[fR[0]] >= fX) return !1;
			return !0
		}())
	}
}

function ff() {
	this.da = function(player, fg) {
		player = e3.fi.fj(player, fg);
		return !(player < 0 || !e3.fk.fl(player) || (e3.fk.fm(player), 0))
	}
}

function fn() {
	var e0;
	10 === p.fo ? e0 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === p.fo ? e0 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === p.fo ? e0 =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === p.fo ? e0 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === p.fo ? e0 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === p.fo ? e0 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === p.fo ? e0 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === p.fo ? e0 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === p.fo ? e0 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === p.fo ? e0 =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === p.fo ? e0 =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === p.fo ? e0 =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === p.fo && (e0 =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new fp).fq(e0)
}

function L(value, fr, c4, fs) {
	var e0 = "number" == typeof value ? fI.ft[value] : value;
	if (c4 && fI.fu() && (e0 = c4), !fr) return fs ? e0.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : e0;
	for (var bw = fr.length, al = 0; al < bw; al++)
		for (var ct = 0; ct < 3; ct++) e0 = e0.replace("{" + (10 * ct + al) + "}", fr[al]);
	return e0
}

function fz() {
	(fv = void 0 === fv ? document.createElement("canvas") : fv).width = p.eP, fv.height = p.eQ, fx = fv.getContext("2d", {
		alpha: !0
	}), fy = fw = null, fy = fx.getImageData(0, 0, p.eP, p.eQ), fw = fy.data, w.x.g0(fw)
}

function g1() {
	function gc(ak, gd, ge) {
		var gf = ak[gd];
		ak[gd] = ak[ge], ak[ge] = gf
	}
	this.fC = [
		[],
		[],
		[],
		[]
	], this.g2 = [0, 0, 0, 0], this.g3 = [], this.g4 = function(g5, dw, username, g6, g7, g8, elo, color, g9, gA) {
		username = this.gC(dw, username, g6, g7, g8, elo, color, g9, gA);
		this.fC[g5].push(username), f5.gD === dw && (f5.gE = username), f5.gF.gG(dw) && (username.gH = 1), f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === g5 && 1 === f5.aw.gJ[2]
	}, this.gC = function(dw, username, g6, g7, g8, elo, color, g9, gA) {
		return {
			dw: dw,
			username: __fx.nameFilter.filter(username),
			g6: g6,
			g7: g7,
			g8: g8,
			elo: elo,
			color: color,
			g9: g9,
			gA: gA
		}
	}, this.gK = function(ab, g5, g6, g7, g8, elo, g9, color) {
		ab = this.fC[g5][ab];
		ab.g6 = g6, ab.g7 = g7, ab.g8 = g8, ab.elo = elo, ab.g9 = g9, ab.color = color, f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === g5 && 1 === f5.aw.gJ[2]
	}, this.gL = function(ab, g5, gM) {
		var ab = this.fC[g5][ab],
			gN = ab.username,
			gO = "Redacted " + gP.fF.gQ(ab.dw, 2);
		ab.username = gM ? "[" + w.bL.fK(gN) + "] " + gO : gO, gN.indexOf("Redacted") < 0 && (ab.gR = gN), f5.gS.gT(ab.dw), f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === g5 && 1 === f5.aw.gJ[2]
	}, this.gU = function(ab, gV, gW) {
		var player = this.fC[gV][ab];
		this.gX(ab, gV), this.fC[gW].push(player), f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === gW && 1 === f5.aw.gJ[2]
	}, this.gX = function(ab, gV) {
		var fB = this.fC[gV];
		this.g3.push(fB[ab]), 1e3 < this.g3.length && this.g3.shift(), ab >= this.g2[gV] ? fB[ab] = fB[fB.length - 1] : (this.g2[gV]--, 2 === gV ? (fB.splice(this.g2[gV] + 1, 0, fB[fB.length - 1]), fB.splice(ab, 1)) : (fB[ab] = fB[this.g2[gV]],
			fB[this.g2[gV]] = fB[fB.length - 1])), fB.pop(), f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === gV && 1 === f5.aw.gJ[2]
	}, this.gY = function(ab, gZ) {
		f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === gZ && 1 === f5.aw.gJ[2];
		var fB = this.fC[gZ],
			ga = fB[ab];
		if (2 === gZ)
			if (ab >= this.g2[gZ]) {
				f5.gF.join(ga);
				for (var gb = this.g2[gZ], elo = ga.elo; gb && elo > fB[gb - 1].elo;) gb--;
				fB[ab] = fB[this.g2[gZ]], fB.splice(this.g2[gZ]++, 1), fB.splice(gb, 0, ga)
			} else fB.splice(this.g2[gZ]--, 0, ga), fB.splice(ab, 1);
		else ab >= this.g2[gZ] ? (f5.gF.join(ga), gc(fB, this.g2[gZ]++, ab)) : gc(fB, --this.g2[gZ], ab)
	}, this.gg = function(dw) {
		for (var fC = this.fC, bw = fC.length, al = 0; al < bw; al++)
			for (var fB = fC[al], cX = fB.length, ct = 0; ct < cX; ct++)
				if (dw === fB[ct].dw) return fB[ct];
		return null
	}
}

function gh() {
	this.ba = 0, this.bb = 0, this.gi = 0, this.gj = 0, this.gk = 0, this.gl = 0, this.gm = 0, this.gn = 0;
	var gp = this.go = 0;
	this.gq = 0, this.gr = 0, this.gs = 0, this.gt = 0, this.ab = 0, this.gu = null, this.gv = !1, this.gw = -1, this.gx = !1, this.gy = [0, 0], this.gz = function() {
		this.gu = [L(30), L(31, 0, "Balance"), L(32, 0, "Interest"), L(33)]
	}, this.a4 = function() {
		this.gv = !1, this.gw = -1, this.gx = !1, this.resize()
	}, this.resize = function() {
		this.ba = c2.ba < 1.369 * c2.bb ? c2.ba : 1.369 * c2.bb;
		var h1 = c3.h2.h3() && c2.ba < c2.bb ? 1 : c3.h2.h3() ? .8 : c2.ba < c2.bb ? .65 : .59;
		this.ba = Math.floor(h1 * this.ba), this.ba -= c3.h2.h3() && c2.ba < c2.bb ? 2 * h4.gap + 2 : 0, this.bb = Math.floor(this.ba / 1.369), this.gt = Math.floor(this.bb / 150), this.gt = Math.max(this.gt, 1.5), this.gi = Math.floor(1 + .02 *
			this.ba), this.gj = Math.floor(1 + .04 * this.ba), this.gm = this.gj, gp = Math.floor(.75 * this.gm), this.gn = Math.floor(1 + .075 * this.ba), this.gq = Math.floor(1 + .1125 * this.ba), this.gr = Math.floor(this.ba * (c3.h2
		.h3() ? .03 : .029)), this.gr = Math.max(this.gr, 4), this.gs = Math.floor(.035 * this.ba), this.gs = Math.max(this.gs, 4), this.go = this.bb - 2 * this.gm - this.gn - this.gq, this.gv && this.h5()
	}, this.h6 = function(eD, eI) {
		var h8, h7;
		return !!this.gv && (h7 = eD, h8 = eI, eD -= ac.eB(c2.ba - this.ba, 2), eI -= ac.eB(c2.bb - this.bb, 2), eD < 0 || eI < 0 || eD >= this.ba || eI >= this.bb || eD >= this.ba - this.gq && eI < this.gq ? -1 !== df.h6(h7, h8) || h9.h6(h7,
			h8) || this.b1() : eI < this.gq || (eI < this.bb - this.gn ? (this.gx = !0, this.gw = (eD - 2 * this.gi - this.gk) / this.gl, 3 !== this.ab && (dY.dk = !0)) : (h7 = (h7 = Math.floor(eD / (this.ba / this.gu.length))) < 0 ? 0 :
				h7 >= this.gu.length ? this.gu.length - 1 : h7) !== this.ab && (this.ab = h7, this.h5(), dY.dk = !0)), !0)
	}, this.hA = function(eD, eI) {
		return this.gy[0] = eD, this.gy[1] = eI, !(!this.gv || !this.gx || (eD -= ac.eB(c2.ba - this.ba, 2), eI = this.gw, this.gw = (eD - 2 * this.gi - this.gk) / this.gl, (0 <= this.gw && this.gw <= 1 || 0 <= eI && eI <= 1) && (dY.dk = !0), 0))
	}, this.hC = function() {
		this.gx && (this.gx = !1)
	}, this.hD = function() {
		this.gv ? this.b1() : this.show()
	}, this.show = function() {
		cQ.hE < 2 || (this.gv = !0, this.h5())
	}, this.b1 = function() {
		this.gv = !1, this.gw = -1, dY.dk = !0
	}, this.h5 = function() {
		this.ab < 2 ? this.gk = hF.measureText(w.bL.gQ(cQ.max[this.ab]), w.bc.hG(0, this.gr)) : 2 === this.ab && (this.gk = hF.measureText(w.bL.hH(6, 2), w.bc.hG(0, this.gr))), this.gl = this.ba - 2 * this.gi - this.gk - this.gj
	}, this.hI = function() {
		this.gv && this.h5()
	}, this.hJ = function() {
		this.gv && this.hK()
	}, this.hK = function() {
		var bi = ac.eB(c2.ba - this.ba, 2),
			bj = ac.eB(c2.bb - this.bb, 2);
		hL.setTransform(1, 0, 0, 1, bi, bj), hL.fillStyle = hM.hN, hL.fillRect(0, this.gq, this.ba, this.bb - this.gq), this.hO(), this.hP(), hL.strokeRect(0, 0, this.ba, this.bb), w.bc.textAlign(hL, 2), hL.font = w.bc.hG(0, this.gr), 0 === this
			.ab ? this.hQ(cQ.hR, bi, bj) : 1 === this.ab ? this.hQ(cQ.hS, bi, bj) : 2 === this.ab ? this.hT(bi, bj) : 3 === this.ab && (this.hU(bi, bj), this.hV(bi, bj)), df.hW(Math.floor(bi + this.ba - .725 * this.gq), Math.floor(bj + .275 *
				this.gq), Math.floor(.45 * this.gq)), hL.setTransform(1, 0, 0, 1, 0, 0)
	}, this.hO = function() {
		var al, hB;
		for (hL.lineWidth = this.gt, w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 1), hL.strokeStyle = hM.hX, hL.font = w.bc.hG(1, this.gs), hB = this.ba / this.gu.length, hL.fillStyle = hM.hY, hL.fillRect(this.ab * hB, this.bb - this.gn, hB,
				this.gn), hL.fillStyle = hM.hX, hL.fillRect(0, this.bb - this.gn - .5 * this.gt, this.ba, this.gt), al = 1; al <= 3; al++) hL.fillRect(al * hB, this.bb - this.gn, this.gt, this.gn);
		for (al = this.gu.length - 1; 0 <= al; al--) hL.fillText(w.hZ.ha(this.gu[al], 0, .9 * hB), (al + .5) * hB, this.bb - .46 * this.gn)
	}, this.hP = function() {
		hL.fillStyle = hM.hb, hL.fillRect(0, 0, this.ba, this.gq), hL.fillStyle = hM.hX, hL.fillRect(0, this.gq - .5 * this.gt, this.ba, this.gt), hL.font = w.bc.hG(1, .39 * this.gq), hL.fillText(w.hZ.ha(L(34), 0, .8 * this.ba), Math.floor(this
			.ba / 2), Math.floor(.55 * this.gq))
	}, this.hQ = function(ak, bi, bj) {
		var cX = cQ.max[this.ab],
			hc = (hL.setTransform(1, 0, 0, 1, bi + 2 * this.gi + this.gk, bj + this.gm + this.gq), hL.lineWidth = 2, this.go / Math.sqrt(cX));
		hL.beginPath(), hL.moveTo(this.gl, this.go - hc * Math.sqrt(ak[cQ.hE - 1]));
		for (var al = cQ.hE - 2; 0 <= al; al--) hL.lineTo(al * this.gl / (cQ.hE - 1), this.go - hc * Math.sqrt(ak[al]));
		hL.stroke();
		bi = this.hW(ak, hc, .5);
		bi < .95 && hL.fillText(w.bL.gQ(cX), -this.gi, 0), .05 < Math.abs(bi - .5) && hL.fillText(w.bL.gQ(Math.floor(cX / 4)), -this.gi, Math.floor(this.go / 2)), .05 < bi && hL.fillText("0", -this.gi, this.go)
	}, this.hT = function(bi, bj) {
		hL.setTransform(1, 0, 0, 1, bi + 2 * this.gi + this.gk, bj + this.gm + this.gq), hL.lineWidth = 2;
		var hc = this.go / Math.max(cQ.max[this.ab], 1);
		hL.beginPath(), hL.moveTo(this.gl, this.go - hc * cQ.he[cQ.hE - 1]);
		for (var al = cQ.hE - 2; 0 <= al; al--) hL.lineTo(al * this.gl / (cQ.hE - 1), this.go - hc * cQ.he[al]);
		hL.stroke();
		bi = this.hW(cQ.he, hc, 1), bj = cQ.max[this.ab] / 100;
		bi < .95 && hL.fillText(w.bL.hH(bj, 2), -this.gi, 0), .05 < Math.abs(bi - .5) && hL.fillText(w.bL.hH(bj / 2, 2), -this.gi, Math.floor(this.go / 2)), .05 < bi && hL.fillText(w.bL.hH(0, 2), -this.gi, this.go)
	}, this.hU = function(bi, bj) {
		hL.setTransform(1, 0, 0, 1, bi + .34 * this.ba, bj + 2 * gp + this.gq), w.bc.textAlign(hL, 2);
		for (var hf = this.bb - 4 * gp - this.gn - this.gq, ak = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], al = 9; 0 <= al; al--) hL.fillText(w.hZ.ha(cQ.hg[ak[al]], 0, .31 * this.ba), 0, al * hf / 9);
		var bV = cQ.cl;
		for (hL.setTransform(1, 0, 0, 1, bi + .39 * this.ba, bj + 2 * gp + this.gq), w.bc.textAlign(hL, 0), hL.fillText(w.bL.hH(100 * bV[0] / (1024 * Math.max(bV[1], 1)), 1), 0, 0), al = 8; 1 <= al; al--) hL.fillText(bV[ak[al]].toString(), 0,
			al * hf / 9);
		hL.fillText(w.bL.hH(100 * (1 - eF.fQ[o.co] / bV[7]), 0), 0, hf)
	}, this.hV = function(bi, bj) {
		hL.setTransform(1, 0, 0, 1, bi + .79 * this.ba, bj + 2 * gp + this.gq), w.bc.textAlign(hL, 2);
		var al, hf = this.bb - 4 * gp - this.gn - this.gq;
		for (hL.fillStyle = hM.hh, al = 2; 0 <= al; al--) hL.fillText(w.hZ.ha(cQ.hg[al + 8], 0, .31 * this.ba), 0, al * hf / 9);
		hL.fillText(w.hZ.ha(cQ.hg[18], 0, .31 * this.ba), 0, 3 * hf / 9), hL.fillStyle = hM.hi, hL.fillText(w.hZ.ha(cQ.hg[11], 0, .31 * this.ba), 0, 4 * hf / 9), hL.fillStyle = hM.hj, hL.fillText(w.hZ.ha(cQ.hg[13], 0, .31 * this.ba), 0, 5 * hf /
				9), hL.fillText(w.hZ.ha(cQ.hg[15], 0, .31 * this.ba), 0, 6 * hf / 9), hL.fillText(w.hZ.ha(cQ.hg[16], 0, .31 * this.ba), 0, 7 * hf / 9), hL.fillText(w.hZ.ha(cQ.hg[12], 0, .31 * this.ba), 0, 8 * hf / 9), hL.fillStyle = hM.hk, hL
			.fillText(w.hZ.ha(cQ.hg[17], 0, .31 * this.ba), 0, hf), hL.fillStyle = hM.hh;
		var bV = cQ.cl,
			fH = bV[8] + bV[9] + bV[10] + bV[18],
			fH = w.bL.gQ(fH),
			hm = hL.measureText(fH).width,
			bi = (hL.setTransform(1, 0, 0, 1, bi + .83 * this.ba + hm, bj + 2 * gp + this.gq), hL.fillText(w.bL.gQ(bV[8]), 0, 0), hL.fillText(w.bL.gQ(bV[9]), 0, hf / 9), hL.fillText(w.bL.gQ(bV[10]), 0, 2 * hf / 9), hL.fillText(w.bL.gQ(bV[18]), 0,
					3 * hf / 9), hL.fillStyle = hM.hi, hL.fillText(fH, 0, 4 * hf / 9), hL.fillStyle = hM.hj, hL.fillText(w.bL.gQ(bV[13]), 0, 5 * hf / 9), hL.fillText(w.bL.gQ(bV[15]), 0, 6 * hf / 9), hL.fillText(w.bL.gQ(bV[16]), 0, 7 * hf / 9), hL
				.fillText(w.bL.gQ(bV[12]), 0, 8 * hf / 9), bV[12] + bV[13] + bV[15] + bV[16]);
		hL.fillStyle = hM.hk, hL.fillText(w.bL.gQ(bi), 0, hf), hL.fillStyle = hM.hX
	}, this.hW = function(ak, hc, ho) {
		var al, aY, hp;
		return this.gw < 0 || 1 < this.gw ? .25 : (al = this.gw * (cQ.hE - 1), hp = ak[aY = Math.floor(al)], hp += (al - aY) * (ak[aY < cQ.hE - 1 ? aY + 1 : aY] - hp), hL.strokeStyle = hM.hr, .04 < this.gw && this.hs(0, this.go - hc * Math.pow(
				hp, ho), al * this.gl / (cQ.hE - 1), this.go - hc * Math.pow(hp, ho)), .04 < hp / cQ.max[this.ab] && this.hs(al * this.gl / (cQ.hE - 1), this.go, al * this.gl / (cQ.hE - 1), this.go - hc * Math.pow(hp, ho)), hL.fillStyle = hM
			.ht, hL.beginPath(), hL.arc(al * this.gl / (cQ.hE - 1), this.go - hc * Math.pow(hp, ho), Math.max(2, .014 * this.bb), 0, 2 * Math.PI), hL.fill(), ak = this.gw * dY.dd, ak = 0 === eF.hu[o.co] ? Math.floor(ak * cQ.hv) : Math.floor(
				ak * dY.hw()), hL.fillStyle = hM.hX, hL.fillText(1 === ho ? w.bL.hH(hp / 100, 2) : w.bL.gQ(Math.floor(hp)), -this.gi, this.go - hc * Math.pow(hp, ho)), w.bc.textAlign(hL, 1), hL.fillText(hx.hy(ak), al * this.gl / (cQ.hE - 1),
				this.go + this.gr - (c3.h2.h3() ? 2 : 0) - this.gt), w.bc.textAlign(hL, 2), hc * Math.pow(hp, ho) / this.go)
	}, this.hs = function(hz, i0, i1, i2) {
		hL.beginPath(), hL.moveTo(hz, i0), hL.lineTo(i1, i2), hL.stroke()
	}
}

function i3() {
	this.i4 = function() {
		for (var i5, bi, hp, i6 = fw, i7 = p.i8, ba = p.eP, i9 = ba - 1, iA = p.eQ - 1, v = 0, bj = 1; bj < iA; bj++)
			for (hp = bj * ba, bi = 1; bi < i9; bi++) i7[i5 = hp + bi << 2] === i7[1 + i5] && i7[i5] === i7[2 + i5] && (v++, i6[2 + i5] = 4);
		iB.iC = v
	}, this.iD = function(iE, iF) {
		for (var i6 = fw, ba = p.eP, i9 = ba - 1, iA = p.eQ - 1, id = 0, bj = 1; bj < iA; bj++)
			for (var hp = bj * ba, bi = 1; bi < i9; bi++) {
				var hd = 2 + (hp + bi << 2);
				i6[hd] === iE && (! function(hd, id, iE, iF) {
					var bw = 1,
						i6 = fw,
						iH = ee.iI,
						iJ = [hd],
						iK = id >> 8 << 1,
						iL = 255 & id;
					i6[hd - 2] = iK, i6[hd - 1] = iL, i6[hd] = 5;
					for (; bw;) {
						for (var iM = [], al = 0; al < bw; al++)
							for (var iN = iJ[al], h1 = 0; h1 < 8; h1++) {
								var iO = iN + iH[h1];
								i6[iO] === iE && (i6[iO - 2] = iK, i6[iO - 1] = iL, i6[iO] = iF, iM.push(iO))
							}
						bw = (iJ = iM).length
					}
				}(hd, id, iE, iF), id = (id + 1) % 32768)
			}
	}, this.iP = function() {
		for (var i6 = fw, ba = p.eP, i9 = ba - 3, iA = p.eQ - 3, iR = 12 * ba, bj = 3; bj < iA; bj++)
			for (var hp = bj * ba, bi = 3; bi < i9; bi++) {
				var hd = 2 + (hp + bi << 2);
				2 !== i6[hd] || 2 === i6[hd - 12] && 2 === i6[12 + hd] && 2 === i6[hd - iR] && 2 === i6[hd + iR] || (i6[hd - 2] = 1 | i6[hd - 2])
			}
	}
}

function iS() {
	this.iT = function(iU) {
		return 0 === iU ? 1 === o.de && o.db : 1 === iU ? 1 === o.de && !o.db : 2 === o.de
	}, this.iV = function(player) {
		return 0 !== eF.hu[player] && 2 !== eF.iW[player]
	}, this.iX = function(player) {
		return player === o.co && 2 !== eF.iW[player]
	}, this.iY = function(player, cC) {
		return player !== cC && (0 === bN.iZ[player] || bN.iZ[player] !== bN.iZ[cC])
	}, this.ia = function() {
		return cw.cx < 2 ? 0 : o.fT ? 1 < fd.ib() : eF.fQ[fR[1]]
	}, this.ic = function() {
		var cx = cw.cx;
		if (0 !== cx) {
			if (!o.fT) return !this.cm(fR[0]);
			for (var iZ = bN.iZ, ie = fd.fe(), cy = cw.cy, al = cx - 1; 0 <= al; al--) {
				var i5 = cy[al];
				if (iZ[i5] === ie && !this.cm(i5)) return 1
			}
		}
		return 0
	}, this.ck = function(player) {
		return player === o.co
	}, this.ig = function(cC, dG) {
		return eF.fa[o.co] < dG * eF.fa[cC]
	}, this.cm = function(player) {
		return player >= o.cF || 2 === eF.iW[player]
	}, this.ih = function(player) {
		return 0 !== eF.hu[player]
	}, this.ii = function(player) {
		return player < o.cF
	}, this.ij = function(ik, il) {
		return ik !== il
	}, this.cP = function(player, bV) {
		var min;
		return bV = this.im(player, bV), eF.fa[player] += bV, eF.io[player] && (min = Math.min(eF.io[player], eF.fa[player]), eF.io[player] -= min, eF.fa[player] -= min), bV
	}, this.im = function(player, bV) {
		var hS = eF.fa[player];
		return bV = Math.min(bV, eF.fQ[player] * o.ip - hS), bV = Math.min(bV, o.cn - hS), Math.max(bV, 0)
	}, this.iq = function(player, ir, is, it) {
		var hS = eF.fa[player],
			ir = ac.eB(hS * (ir + 1), 1024),
			is = ac.eB(is * hS, 1024),
			ir = Math.min(ir, hS - is);
		return 10 === o.fW && (ir = iv.iw(player, ir)), ix.iy[0] = ir, ix.iy[1] = is, it <= ir
	}, this.iz = function(player, j0, j1) {
		var player = eF.fa[player],
			iu = ac.eB(64 * player, 1024);
		return j0 = Math.min(j0, player - iu), j0 = this.im(j1, j0), ix.iy[0] = j0, ix.iy[1] = iu, 1 <= j0
	}, this.j2 = function(player, j0, j1) {
		var player = eF.fa[player],
			iu = ac.eB(64 * player, 1024);
		return j0 = Math.min(j0, player - iu), this.im(j1, j0)
	}, this.j3 = function(j0, j1) {
		return j0 = this.im(j1, j0), ix.iy[0] = j0, ix.iy[1] = 0, 1 <= j0
	}, this.j4 = function(player, j5) {
		return ac.eB(eF.fa[player] * (j5 + 1), 1024)
	}, this.j6 = function(player, is) {
		is = ac.eB(is * eF.fa[player], 1024);
		ix.iy[1] = is, eF.fa[player] -= is
	}, this.j7 = function(player, j8) {
		var hq, jA, j9 = eF.fa[player];
		return j8 <= j9 ? eF.fa[player] -= j8 : (eF.fa[player] = 0, jA = eF.io[player] + (hq = 5 * ((j9 = j8 - j9) >> 2)), cQ.cR(player, hq - j9, 12), jA <= o.jB ? eF.io[player] = jA : (eF.io[player] = o.jB, cQ.cR(player, jA - o.jB, 18))), j8
	}, this.jC = function(player, ir) {
		var fa = eF.fa,
			hS = fa[player],
			ir = ac.eB(hS * (ir + 1), 1024),
			iu = Math.max(ac.eB(hS, 10), 1e3);
		return (ir = Math.min(ir, hS - iu)) < 0 ? (fa[player] = 0, iu = Math.min(1e3, hS + o.jB - eF.io[player]), ix.iy[1] = iu, eF.io[player] += iu - hS, 0) : (ix.iy[1] = iu, 10 === o.fW && (ir = iv.iw(player, ir)), fa[player] -= iu + ir, ir)
	}, this.jD = function(player) {
		eF.fa[player] -= ix.iy[0] + ix.iy[1]
	}, this.jE = function(player, cC) {
		return (cC = Math.min(cC, o.bI)) < o.bI && 0 === eF.hu[cC] && (cC = o.bI), (ix.jF[0] = cC) === o.bI || jG.jH(player, cC)
	}, this.jI = function(player, j1) {
		return 0 !== eF.hu[j1] && !jG.jH(player, j1)
	}, this.jJ = function(player, jK) {
		for (var i5, bw = cw.cx, g7 = 0, jL = fR, al = 0; al < bw; al++)
			if (i5 = jL[al], !this.cm(i5)) {
				if (player === i5) return !0;
				if (++g7 > jK) return !1
			} return !1
	}, this.jM = function(i5) {
		var jN = o.fT ? fd.jO() : eF.fQ[fR[0]];
		return jN >= ac.eB(i5 * o.fS, 100)
	}, this.jP = function(bV, min, max) {
		return Math.floor(ac.ad(isNaN(bV) ? 0 : Number(bV), min, max))
	}
}

function jQ() {
	var jR = null;
	this.jS = 0, this.jT = function() {
		var bV = a5.c0.data[5].value;
		jR = "px " + bV, "system-ui" !== bV && (jR += ", system-ui"), this.jS = jU(32, 32, ["a", "b", "m"], 200, jR)
	}, this.bd = function(ba, bb) {
		var b3 = document.createElement("canvas");
		return b3.width = ba, b3.height = bb, b3
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(hZ, ba, bb) {
		return hZ.getImageData(0, 0, ba, bb)
	}, this.hG = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + jR : 1 === type ? "bold " + size + jR : 2 === type ? "lighter " + size + jR : 3 === type ? "italic " + size + jR : 4 === type ? "oblique " + size + jR : 5 === type ? "small-caps " +
			size + jR : "small-caps bold " + size + jR
	}, this.textAlign = function(be, id) {
		be.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(be, id) {
		be.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.jV = function(aY, code, color) {
		color = this.jW(h4.jX) + " solid " + (color || hM.hX);
		5 === (code = code || 5) ? aY.style.border = color : 4 === code ? aY.style.borderLeft = color : 2 === code ? aY.style.borderBottom = color : 6 === code ? aY.style.borderRight = color : aY.style.borderTop = color
	}, this.jY = function(aY, bi, bj, ba, bb) {
		aY = aY.style;
		aY.left = this.ja(bi), aY.top = this.ja(bj), aY.width = this.ja(ba), aY.height = this.ja(bb)
	}, this.jb = function(bV) {
		return 1 + bV * c3.h2.h3()
	}, this.jc = function(dG, eR) {
		return dG * this.jb(void 0 === eR ? .5 : eR) * c2.jd / c2.je
	}, this.jf = function(dG, eR) {
		return dG * this.jb(void 0 === eR ? .5 : eR) * c2.jd
	}, this.jg = function(dG, eR, jh) {
		return this.jb(eR) * Math.min(dG * c2.jd, jh * c2.ba) / c2.je
	}, this.jW = function(bV) {
		return bV.toFixed(1) + "px"
	}, this.ja = function(bV) {
		return this.jj(bV).toFixed(1) + "px"
	}, this.jj = function(bV) {
		return bV / c2.je
	}, this.jk = function(jl) {
		for (var e0 = "<ul>", bw = jl.length, al = 0; al < bw; al++) e0 += "<li>" + jl[al][0] + ": <a href='" + jl[al][1] + "' target='_blank'>" + jl[al][0] + "</a></li>";
		return e0 += "</ul>"
	}, this.jm = function(jn) {
		return "<a href='" + jn + "' target='_blank'>" + jn + "</a>"
	}, this.jo = function(aY) {
		navigator.clipboard && navigator.clipboard.writeText(aY.value)
	}, this.jp = function(aY) {
		var hB = aY.textContent;
		w.bL.fD(hB, "✔") || (1 === hB.length ? aY.textContent = "✔" : aY.textContent = hB + " ✔", setTimeout(function() {
			aY.textContent = hB
		}, 500))
	}, this.measureText = function(e0) {
		return hL.measureText(e0).width
	}, this.jq = function(jr) {
		jr.style.overflowX = "auto", jr.style.overflowY = "hidden", jr.style.whiteSpace = "nowrap", jr.addEventListener("wheel", function(aY) {
			Math.abs(aY.deltaY) < Math.abs(aY.deltaX) || (this.scrollLeft += aY.deltaY, this.js = this.scrollLeft, aY.preventDefault())
		}), jr.addEventListener("scroll", function() {
			this.js = this.scrollLeft
		})
	}
}

function jt() {
	this.ju = [], this.jv = [], this.a4 = function() {
		this.ju = [], this.jv = []
	}, this.da = function() {
		0 <= this.ju.length && this.jw(this.ju), 0 <= this.jv.length && this.jw(this.jv)
	}, this.jw = function(ak) {
		for (var j9 = -1, al = ak.length - 1; 0 <= al; al--)
			if (ak[al].dX--, ak[al].dX <= 0) {
				j9 = al;
				break
			} for (al = j9; 0 <= al; al--) ak.shift()
	}, this.jx = function(id, jy, jz) {
		return this.k0(this.ju, id, jy, jz)
	}, this.k1 = function(id, jy, jz) {
		return this.k0(this.jv, id, jy, jz)
	}, this.k0 = function(ak, id, jy, jz) {
		return ! function(ak, id, jy) {
			var al, bP;
			for (al = jy.length - 1; 0 <= al; al--)
				for (bP = ak.length - 1; 0 <= bP; bP--)
					if (ak[bP].player === jy[al] && id === ak[bP].id) return 1;
			return
		}(ak, id, jy) && (jz && function(ak, id, jy) {
			var al;
			for (al = jy.length - 1; 0 <= al; al--) ak.push({
				player: jy[al],
				id: id,
				dX: 384
			})
		}(ak, id, jy), !0)
	}
}

function k4() {
	var k5, k6, k7;
	k5 = [32, 65, 191, 913, 931], k6 = [64, 127, 688, 930, 1155], k7 = new Array(k5.length + 1);
	for (var al = 0; al < k7.length; al++) {
		k7[al] = 0;
		for (var ct = al - 1; 0 <= ct; ct--) k7[al] += k6[ct] - k5[ct]
	}

	function kE(b3) {
		for (var al = k5.length - 1; 0 <= al; al--)
			if (b3 >= k5[al] && b3 < k6[al]) return al;
		return -1
	}
	this.k9 = function(e0) {
		return 0 !== (e0 = e0.trim()).indexOf("Bot ") && 0 !== e0.indexOf("[Bot] ") && function(e0, kB, kC) {
			var bw = (e0 = e0.trim()).length;
			if (bw < kB || kC < bw) return !1;
			for (var b3, kD = 0, al = 0; al < bw; al++)
				if (b3 = e0.charCodeAt(al), kD += 65 <= b3 && b3 <= 90 || 1040 <= b3 && b3 <= 1071 ? 1 : 0, -1 === kE(b3)) return !1;
			if (3 < kD && kD > Math.floor(bw / 2)) return !1;
			return !0
		}(e0, 3, 20)
	}, this.a9 = function(e0) {
		for (var bw = (e0 = e0.trim()).length, ak = [], al = 0; al < bw; al++) {
			var b3, i5 = kE(b3 = e0.charCodeAt(al));
			ak.push(k7[i5] + b3 - k5[i5])
		}
		return ak
	}, this.fq = function(ak) {
		for (var b3, j9, e0 = "", bw = ak.length, al = 0; al < bw; al++)
			for (j9 = 1; j9 < k7.length; j9++)
				if (ak[al] < k7[j9]) {
					b3 = k5[j9 - 1] + ak[al] - k7[j9 - 1], e0 += String.fromCharCode(b3);
					break
				} return e0
	}, this.kF = function(e0) {
		for (var ak = this.a9(e0), result = "", al = 0; al < ak.length; al++) result = (result += ak[al] < 10 ? "00" : ak[al] < 100 ? "0" : "") + ak[al].toString(10);
		return result
	}, this.kG = function(e0) {
		for (var ak = new Array(Math.floor(e0.length / 3)), al = 0; al < e0.length; al += 3) ak[Math.floor(al / 3)] = parseInt(e0.substring(al, al + 3));
		return this.fq(ak)
	}, this.kH = function(e0) {
		for (var bV, ak = [e0.length], al = 0; al < e0.length; al++) ak[al] = e0.charCodeAt(al) - 48;
		var result = "";
		for (al = 0; al < e0.length; al++) al === e0.length - 1 || 51 < 10 * ak[al] + ak[al + 1] ? result += ak[al].toString() : (bV = 10 * ak[al] + ak[al + 1], result += String.fromCharCode(bV + (bV < 26 ? 65 : 71)), al++);
		return result
	}, this.kI = function(e0) {
		for (var b3, result = "", al = 0; al < e0.length; al++) 48 <= (b3 = e0.charCodeAt(al)) && b3 < 58 ? result += String.fromCharCode(b3) : 65 <= b3 && b3 < 75 ? result += "0" + (b3 - 65).toString() : 75 <= b3 && b3 < 91 ? result += (b3 - 65)
			.toString() : 97 <= b3 && b3 < 123 && (result += (b3 - 71).toString());
		return result
	}, this.kJ = function(e0) {
		for (var bw = e0.length, ak = [], al = 0; al < bw; al++)(b3 = e0.charCodeAt(al)) < 58 ? ak.push(e0[al]) : (b3 -= b3 < 91 ? 65 : 71, ak.push(String(ac.eB(b3, 10))), ak.push(String(b3 - 10 * ac.eB(b3, 10))));
		var bw = ak.length - 2,
			b3 = 0,
			kK = [];
		for (al = 0; al < bw; al += 3) kK[b3++] = parseInt(ak[al] + ak[al + 1] + ak[al + 2]);
		return kK
	}, this.kL = function() {
		for (var br, kM = "", al = 0; al < 6; al++) br = 48 + eC.random() % 36, br += 58 <= br ? 39 : 0, kM += String.fromCharCode(br);
		return kM
	}
}

function kN() {
	var kO, kP;
	this.a4 = function() {
		kO = 1, kP = 0
	}, this.da = function() {
		0 < kO && (kP = 0 === kP ? dY.dX + 16 : kP, kO = (kO -= .001 * (dY.dX - kP)) < 0 ? 0 : kO, kP = dY.dX, dY.dk = !0)
	}, this.hJ = function() {
		0 < kO && (hL.fillStyle = "rgba(0,0,0," + kO + ")", hL.fillRect(0, 0, c2.ba, c2.bb))
	}
}

function kS() {
	var bb, canvas, kT, kU, kV, kW = -1;

	function kY() {
		var kZ, hZ = canvas.getContext("2d", {
			alpha: !0
		});
		hZ.clearRect(0, 0, bb, bb), hZ.fillStyle = hM.ka, hZ.fillRect(0, 0, bb, bb), 9 === kU && (hZ.fillStyle = hM.kb, hZ.fillRect(0, 0, bb, bb)), hZ.fillStyle = hM.hX, hZ.fillRect(0, 0, bb, 1), hZ.fillRect(0, 0, 1, bb), hZ.fillRect(0, bb - 1, bb,
			1), hZ.fillRect(bb - 1, 0, 1, bb), kZ = .9 * bb / kc.get(0).width, hZ.imageSmoothingEnabled = !0, hZ.setTransform(kZ, 0, 0, kZ, Math.floor((bb - kZ * kc.get(0).width) / 2), Math.floor((bb - kZ * kc.get(0).height) / 2)), hZ.drawImage(
			kc.get(0), 0, 0), hZ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function kn(eD, eI) {
		if (!df.dg) return eD <= bb + h4.gap && eI >= kX.bj ? 9 : -1;
		if (eD <= 4 * bb + h4.gap) {
			if (eI >= kX.bj) return 0;
			if (eI >= kX.bj - bb - kV * h4.gap) return 2
		} else if (eD <= 7 * bb + h4.gap && eI >= kX.bj - bb - kV * h4.gap) return 1;
		return -1
	}
	this.dg = !1, this.a4 = function() {
		kU = -1, this.dg = !1, kV = c3.h2.h3() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		bb = kX.bb, (canvas = document.createElement("canvas")).width = bb, canvas.height = bb, kT = w.bc.hG(1, (c3.h2.h3() ? .5 : .45) * bb), kY()
	}, this.kd = function() {
		return !(1 !== o.de || o.db || (o.ke ? !h9.kf : this.dg && o.kg))
	}, this.hD = function() {
		this.dg = !this.dg, this.dg ? (h9.kh(!1), o.ke && h9.kf && h9.ki(!0), this.kj(), 9 === kU && (kU = 0)) : (kU = -1, kY(), !o.kg || 1 !== o.de || o.db || o.ke || c3.h2.setState(1)), dY.dk = !0
	}, this.kj = function() {
		(o.kg || o.ke) && 1 === o.de && (kk.kl(!0), o.db || setTimeout(function() {
			dj.km()
		}, 0), c3.h2.setState(0))
	}, this.h6 = function(eD, eI) {
		return 0 <= (kW = kn(eD, eI)) || !df.dg || o.kg || o.ke || kp.gv || df.hD(), kW
	}, this.hA = function(eD, eI) {
		eD = kn(eD, eI);
		eD !== kU && (kU = eD, this.dg || kY(), dY.dk = !0)
	}, this.kq = function(eD, eI) {
		eD = kn(eD, eI);
		return -1 !== eD && kW === eD && (this.dg ? o.kr ? (0 <= eD && h9.kh(!1), !o.ke) : (0 === eD ? o.ks() : 1 === eD ? this.hD() : 2 === eD && a0.a1(1, 0), !0) : 9 === eD && (this.hD(), !0))
	}, this.hJ = function() {
		var ba;
		this.dg ? (ba = Math.floor(5.5 * bb), hL.setTransform(1, 0, 0, 1, h4.gap, kX.bj), hL.fillStyle = hM.ka, hL.fillRect(0, 0, ba, bb), 0 === kU ? (hL.fillStyle = hM.kb, hL.fillRect(0, 0, 4 * bb, bb)) : 1 === kU && (hL.fillStyle = hM.kb, hL
				.fillRect(4 * bb, 0, Math.floor(1.5 * bb), bb)), hL.fillStyle = hM.hX, hL.fillRect(0, 0, ba, 1), hL.fillRect(0, 0, 1, bb), hL.fillRect(4 * bb, 0, 1, bb), hL.fillRect(0, bb - 1, ba, 1), hL.fillRect(ba - 1, 0, 1, bb), hL.font =
			kT, w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 1), hL.fillText(L(35), 2 * bb, .54 * bb), ba = .4 * bb, df.hW(h4.gap + 4 * bb + (1.5 * bb - ba) / 2, kX.bj + .3 * bb, ba), ba = 1, hL.setTransform(1, 0, 0, 1, h4.gap, kX.bj - ba *
				kV * h4.gap - ba * bb), hL.fillStyle = hM.ka, hL.fillRect(0, 0, 4 * bb, bb), kU === ba + 1 && (hL.fillStyle = hM.kb, hL.fillRect(0, 0, 4 * bb, bb)), hL.fillStyle = hM.hX, hL.fillRect(0, 0, 4 * bb, 1), hL.fillRect(0, 0, 1, bb),
			hL.fillRect(4 * bb, 0, 1, bb), hL.fillRect(0, bb - 1, 4 * bb, 1), hL.fillText(L(0 === ba ? 35 : 36), 2 * bb, .54 * bb), hL.setTransform(1, 0, 0, 1, 0, 0)) : hL.drawImage(canvas, h4.gap, kX.bj)
	}, this.kv = function(player) {
		return 0 !== eF.hu[player] && 2 !== o.de && !w.cO.cm(player)
	}, this.hW = function(bi, bj, bw) {
		hL.setTransform(1, 0, 0, 1, bi, bj), hL.lineWidth = h4.kx, hL.strokeStyle = hM.hX, hL.beginPath(), hL.moveTo(0, 0), hL.lineTo(bw, bw), hL.moveTo(0, bw), hL.lineTo(bw, 0), hL.stroke()
	}
}

function lB() {
	l4 = 0, l5 = 2048, l6 = new Uint32Array(4 * l5), l7 = 0, l8 = new Uint32Array(l5), l9 = new Uint8Array(p.eP * p.eQ)
}

function lC(player) {
	kz = player, lA = !1, lD(), lE();
	for (var al = lF.ca(kz) - 1; 0 <= al; al--) ky = al, lG();
	lA && lH()
}

function lH() {
	jG.lI(), jG.lJ()
}

function lG() {
	l3 = lF.cb(kz, ky), l0 = lF.cc(kz, ky), l1 = lF.cg(kz, ky), lK(), (0 !== l4 && (lM(), lN()) ? lO : lL)()
}

function lN() {
	if (!((l2 = ac.eB(l0, l4)) > o.lP)) {
		if (!l1) return !1;
		var lQ = l4 * (1 + o.lP);
		l0 += w.cO.j7(kz, lQ - l0), l2 = ac.eB(l0, l4)
	}
	return !0
}

function lM() {
	for (var al = l4 - 1; 0 <= al; al--) l9[ac.eB(l6[al], 4)] = 0
}

function lL() {
	1 === lF.ca(kz) && lR.lS(kz);
	var hB = w.cO.cP(kz, l0);
	cQ.cR(kz, l0 - hB, 12), lF.cV(kz, ky)
}

function lD() {
	for (var player = kz, lT = eF.lT, bw = Math.min(lT[player].length, l5), v = 0, lU = l8, al = bw - 1; 0 <= al; al--) lU[v++] = lT[player][al];
	l7 = v
}

function lE() {
	for (var al = eF.lT[kz].length - 1; 0 <= al; al--) ee.lV(eF.lT[kz][al]) && ee.lW(eF.lT[kz][al], kz);
	eF.lT[kz] = []
}

function lK() {
	l4 = 0, (l3 === o.bI ? lX : lY)()
}

function lY() {
	for (var i5, eR, al, iH = ee.iH, h1 = 3; 0 <= h1; h1--)
		for (al = l7 - 1; 0 <= al; al--) i5 = l8[al] + iH[h1], eR = ac.eB(i5, 4), 0 === l9[eR] && ee.lZ(i5) && ee.la(i5) === l3 && (l9[eR] = 1, l6[l4++] = i5)
}

function lX() {
	for (var i5, eR, al, iH = ee.iH, h1 = 3; 0 <= h1; h1--)
		for (al = l7 - 1; 0 <= al; al--) i5 = l8[al] + iH[h1], eR = ac.eB(i5, 4), 0 === l9[eR] && ee.lb(i5) && (l9[eR] = 1, l6[l4++] = i5)
}

function lc() {
	this.ld = function(ab) {
		if ((g2 = f5.fB.g2[ab]) < 2) return !1;
		var le = f5.aw.lf[ab],
			lg = 9 === le.lh ? 333 : 512,
			g2 = Math.min(g2, lg);
		8 === le.lh && (g2 -= g2 % 2);
		lg = f5.fB.fC[ab].splice(0, g2), f5.fB.g2[ab] -= g2, g2 = function(li) {
			if (f5.gE)
				for (var bw = li.length, dw = f5.gE.dw, al = 0; al < bw; al++)
					if (li[al].dw === dw) return al;
			return -1
		}(lg);
		return -1 === g2 ? (f5.fB.g3 = f5.fB.g3.concat(lg), 1e3 < f5.fB.g3.length && f5.fB.g3.splice(0, f5.fB.g3.length - 1e3), f5.aw.gI += 29 === a0.dU && f5.aw.gJ[0] === ab && 1 === f5.aw.gJ[2], !1) : (8 === le.lh && (le.ll = (le.ll + (g2 >>
			1)) % 1024, ab = g2 - g2 % 2, g2 %= 2, lg = lg.slice(ab, 2 + ab)), lm.a4(le, lg, g2), !0)
	}, this.ln = function(le, li, lj) {
		var h1 = o.data = new lo,
			ls = (h1.spawningSeed = le.spawningSeed, le.lh < 7 ? (h1.gameMode = 1, h1.numberTeams = le.lh + 2) : 9 === le.lh ? (h1.gameMode = h1.isZombieMode = 1, h1.numberTeams = 2) : (h1.gameMode = 0, h1.battleRoyaleMode = 7 === le.lh ? 0 :
				10 === le.lh ? 1 : 2), h1.selectedPlayer = lj, h1.isContest = le.lp, h1.mapType = p.lq(le.fo) ? 0 : 1, p.lr(h1, le.fo), h1.mapSeed = le.mapSeed, h1.humanCount = li.length);
		h1.selectableSpawn = 1 === h1.gameMode || ls < 100, h1.colorsData = new Uint32Array(ls), h1.playerNamesData = new Array(ls), h1.lt = new Uint32Array(ls);
		for (var al = 0; al < ls; al++) h1.colorsData[al] = li[al].color, h1.playerNamesData[al] = li[al].username, h1.lt[al] = li[al].dw;
		if (2 === h1.battleRoyaleMode)
			for (h1.elo = new Uint16Array(ls), al = 0; al < ls; al++) h1.elo[al] = li[al].elo;
		aB.setState(8), p.lu(le.fo, h1.mapSeed), o.aE(), o.aF = 2, lv.lw.lx = -1
	}
}

function ly() {
	var lz = -1,
		m0 = null,
		m1 = -1,
		m2 = 4;

	function mA() {
		df.kd() ? dj.render() : dj.km()
	}

	function mK(b3, h1) {
		var br = b3 >> 16,
			mL = b3 >> 8 & 255,
			b3 = 255 & b3,
			mM = 255 - h1,
			mM = (mM < br && mM < mL && mM < b3 && (h1 = -h1), lz >> 7),
			mO = lz >> 5 & 3,
			mP = lz >> 3 & 3;
		return (Math.max(Math.min(br + h1, 252 + mM), mM) << 16) + (Math.max(Math.min(mL + h1, 252 + mO), mO) << 8) + Math.max(Math.min(b3 + h1, 252 + mP), mP)
	}

	function m9() {
		return -1 !== lz && (ee.mG(lz, m0[0], m0[1], m0[2]), mH(lz), lz = -1)
	}

	function mH(player) {
		dY.dk = !0;
		for (var eG = eF.eG[player], eJ = eF.eJ[player], eH = eF.eH[player], eK = eF.eK[player], bj = eJ; bj <= eK; bj++)
			for (var bi = eG; bi <= eH; bi++) {
				var hd = ee.mQ(bi, bj);
				ee.mR(player, hd) && (ee.mS(hd) ? ee.mT(hd, player) : ee.mU(hd) ? ee.lW(hd, player) : ee.mV(hd, player))
			}
	}
	this.a4 = function() {
		m0 = null, m1 = lz = -1, m2 = ac.ad(Math.floor(a5.c0.data[16].value), 0, 16)
	}, this.da = function(m3) {
		if (a5.c0.data[15].value && 0 !== m2 && (m3 || !dE.dF())) {
			var m3 = eN.m4(dE.m5),
				eY = eN.m6(dE.m7);
			if (eN.m8(m3, eY)) {
				m3 = eN.ed(m3, eY), eY = eN.eg(m3);
				if (m1 === eY)
					if (ee.lZ(eY)) {
						if (lz === ee.la(eY)) return
					} else if (-1 === lz) return;
				! function(hd) {
					ee.lZ(hd) ? (hd = ee.la(hd)) !== lz && (m9(), function(player) {
						lz = player, m0 = ee.mD(player);
						var mE = function() {
							var ga = m0,
								mI = m2 << 2,
								mJ = mI << 1;
							return [mK(ga[0], mI), mK(ga[1], mJ), mK(ga[2], mJ)]
						}();
						ee.mG(player, mE[0], mE[1], mE[2]), mH(player)
					}(hd), mA()) : m9() && mA()
				}(m1 = eY)
			} else m9() && mA()
		}
	}
}

function mW() {
	var mX, mY, mZ, ma, mb, mc, md, me, mf, mg, mh, mi, mj, mk, ml, mm, mn, mo, mq, mr, ms, mt, mu, n0, n1, mp = null,
		mw = 0,
		mx = !1,
		my = new Float32Array(4),
		mz = 0,
		n2 = 112,
		n3 = 0;

	function n4() {
		mf = Math.floor(+c2.jd), mg = Math.floor(.5 * mf), mp.width = c2.ba, mp.height = c2.bb, mq = mp.getContext("2d", {
			alpha: !0
		}), w.bc.textAlign(mq, 1), w.bc.textBaseline(mq, 1), mq.imageSmoothingEnabled = !0
	}

	function n5() {
		var al, nE;
		for (hL.font = w.bc.hG(1, 100 * mh), nE = 80 / Math.floor(hL.measureText(w.bL.gQ(o.cn)).width), hL.font = w.bc.hG(1, 100), al = o.bI - 1; 0 <= al; al--) me[al] = 100 / Math.floor(hL.measureText(eF.nF[al]).width), md[al] = Math.min(nE, me[al])
	}

	function nG(al) {
		return !n3 || (al = eF.fa[al]) < 1e6 ? 1 : al < 1e7 ? my[0] : my[Math.min(Math.floor(Math.log10(al)) - 6, 3)]
	}

	function nD(be) {
		mx = !1, mw = dY.dX, mo = !1, mn = 1, ml = mm = 0, be.clearRect(0, 0, c2.ba, c2.bb);
		for (var nb, nc, al, nd, fontSize, ne, hz = nY / nZ, i0 = na / nZ, i1 = (c2.ba + nY) / nZ, i2 = (c2.bb + na) / nZ, nf = 0 !== eF.hu[o.co] && !w.cO.cm(o.co), ct = cw.cx - 1; 0 <= ct; ct--) al = cw.cy[ct], (fontSize = Math.floor(mk * nZ * nG(
			al) * md[al] * mb[al])) < mj || mf <= fontSize || mZ[al] + mb[al] > hz && mZ[al] < i1 && ma[al] + mc[al] > i0 && ma[al] < i2 && (nb = Math.floor(c2.ba * (mZ[al] + mb[al] / 2 - hz) / (i1 - hz)), nc = Math.floor(c2.bb * (ma[al] + mc[
				al] / 2 - i0) / (i2 - i0) - .1 * fontSize), nd = ee.nA[al], be.font = w.bc.hG(1 === eF.iW[al] ? 4 : 1, fontSize), be.fillStyle = ng(fontSize, nd % 2), n3 ? nh(be, al, fontSize, nb, nc, nd) : ni(al, fontSize, nb, nc, be), mo = !0,
			0 < ms[al] ? function(nb, nc, fontSize, al, be) {
				0 === nk[al] ? nM.gS.nN(mr[al]) ? (function(nb, nc, fontSize, player, nw, be) {
					for (var h8 = nc, h0 = (be.globalAlpha = nr(fontSize), nG(player) * (n3 ? mz : me[player])), h7 = nb - .5 * fontSize / h0 - .9 * fontSize, j9 = 0; j9 < 2; j9++) be.fillText(nM.gS.o2(nw), h7, h8), h7 = nb + .5 *
						fontSize / h0 + .9 * fontSize;
					be.globalAlpha = 1
				}(nb, nc, fontSize, al, mr[al], be), nl(nb, nc, fontSize, 0, 0, be)) : nM.gS.nu(mr[al]) ? (nv(nb, nc, fontSize, mr[al], 0, be), nl(nb, nc, fontSize, 0, 1, be)) : (nv(nb, nc, fontSize, mr[al], 1, be), nl(nb, nc, fontSize, 1, 0,
					be)) : nv(nb, nc, fontSize, mr[al], 0, be)
			}(nb, nc, fontSize, al, be) : 0 === nk[al] && nl(nb, nc, fontSize, 0, 0, be), nf && (0 < ms[al + o.bI] || 0 < ms[al + 2 * o.bI] || 0 < ms[al + 3 * o.bI] || 0 < ms[al + 4 * o.bI]) && function(nb, nc, fontSize, al, be) {
				var b3, v = -1;
				for (b3 = 4; 1 <= b3; b3--) 0 < ms[al + b3 * o.bI] && v++;
				for (b3 = 1; b3 < 5; b3++) 0 < ms[al + b3 * o.bI] && (! function(nb, nc, fontSize, b3, al, np, hB, be) {
					var aW;
					if (1 === b3) {
						al = mr[al + o.bI];
						if (!nM.gS.ny(al)) return function(nb, nc, fontSize, nw, np, be) {
							be.globalAlpha = nr(fontSize);
							nb -= .534 * np * fontSize, np = nc + 1.59 * fontSize;
							be.font = w.bc.hG(0, .785 * fontSize), be.fillText(nM.gS.o2(nw), nb, np), be.globalAlpha = 1
						}(nb, nc, fontSize, al, np, be);
						aW = nM.bh.o0[al - 1024 + nM.gS.o1]
					} else aW = 2 === b3 ? o4.o5()[4].canvas[+(hB < 255)] : (3 === b3 ? o4.o5()[5] : o4.o5()[6]).canvas[0];
					al = nM.bh.nz, hB = .8 * fontSize / al, b3 = nb - .5 * hB * al - .534 * np * fontSize, nb = nc + 1.4 * hB * al;
					be.setTransform(hB, 0, 0, hB, b3, nb), be.globalAlpha = nr(fontSize), be.drawImage(aW, 0, 0), be.globalAlpha = 1, be.setTransform(1, 0, 0, 1, 0, 0)
				}(nb, nc, fontSize, b3, al, v, ms[al + b3 * o.bI], be), v -= 2)
			}(nb, nc, fontSize, al, be), (ne = mh * fontSize) < mj || (be.font = w.bc.hG(1, ne), nc += Math.floor(.78 * fontSize), n3 ? ni(al, ne, nb, nc, be) : nh(be, al, ne, nb, nc, nd)))
	}

	function ni(al, fontSize, bi, bj, be) {
		var ___id = al;
		var showName = al < o.cF || !__fx.settings.hideBotNames;
		if (showName) be.fillText(eF.nF[al], bi, bj), al < o.cF && 2 !== eF.iW[al] || (al = fontSize / me[al], be.fillRect(bi - .5 * al, bj + w.bc.jS * fontSize, al, Math.max(1, .1 * fontSize)));
		n3 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (be.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			be.fillText(__fx.utils.getDensity(___id), bi, showName ? bj + fontSize : bj)
		);
	}

	function nh(be, al, fontSize, nb, nc, nd) {
		var io = eF.io[al],
			no = w.bL.gQ(eF.fa[al] - io);

		function drawDensity() {
			!n3 && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (be.fillStyle = __fx.utils.textStyleBasedOnDensity(al)), be.fillText(__fx.utils.getDensity(al), nb, nc + fontSize))
		}
		io ? (io = be.fillStyle, be.fillStyle = ng(fontSize, 2 + nd % 2), be.fillText(no, nb, nc), be.fillStyle = io) : nd >> 1 & 1 ? (be.lineWidth = .05 * fontSize, be.strokeStyle = ng(fontSize, nd % 2), be.strokeText(no, nb, nc)) : (1 < nd && (be
			.lineWidth = .12 * fontSize, be.strokeStyle = ng(fontSize, nd), be.strokeText(no, nb, nc)), be.fillText(no, nb, nc)), drawDensity()
	}

	function nl(nb, nc, fontSize, np, nq, be) {
		var kZ = .95 * fontSize / mu,
			nb = nb - .5 * kZ * mt + .8 * np * fontSize,
			np = nc - 1.76 * kZ * mu - (.35 - w.bc.jS + .7) * nq * fontSize;
		be.setTransform(kZ, 0, 0, kZ, nb, np), be.globalAlpha = nr(fontSize), be.drawImage(kc.get(4), 0, 0), be.globalAlpha = 1, be.setTransform(1, 0, 0, 1, 0, 0)
	}

	function nv(nb, nc, fontSize, nw, np, be) {
		var nx, h7, kZ;
		be.globalAlpha = nr(fontSize), nM.gS.ny(nw) ? (nx = nM.bh.nz, be.setTransform(kZ = 1.1 * fontSize / nx, 0, 0, kZ, h7 = nb - .5 * kZ * nx - .8 * np * fontSize, kZ = nc - 1.55 * kZ * nx), be.drawImage(nM.bh.o0[nw - 1024 + nM.gS.o1], 0, 0), be
			.setTransform(1, 0, 0, 1, 0, 0)) : (h7 = nb - .8 * np * fontSize, kZ = nc - (.35 - w.bc.jS + 1) * fontSize, be.fillText(nM.gS.o2(nw), h7, kZ)), be.globalAlpha = 1
	}

	function ng(fontSize, nd) {
		return mg <= fontSize && fontSize < mf ? bN.o6[nd] + nr(fontSize).toFixed(3) + ")" : bN.o7[nd]
	}

	function nr(fontSize) {
		return mg <= fontSize && fontSize < mf ? 1 - (fontSize - mg) / (mf - mg) : 1
	}

	function oM(h0, ba) {
		return 1 + Math.floor(mi * h0 * ba)
	}

	function oJ(al) {
		for (var left = mZ[al], ct = mZ[al] - eF.eG[al] - 1; 0 <= ct; ct--)
			if (!oQ(al, --left, ma[al], mc[al])) {
				left++;
				break
			} var right = mZ[al];
		for (ct = eF.eH[al] - mZ[al] - mb[al]; 0 <= ct; ct--)
			if (!oQ(al, ++right + mb[al] - 1, ma[al], mc[al])) {
				right--;
				break
			} var bi = Math.floor((left + right) / 2),
			top = ma[al];
		for (ct = ma[al] - eF.eJ[al] - 1; 0 <= ct; ct--)
			if (!oR(al, bi, --top, mb[al])) {
				top++;
				break
			} var bottom = ma[al];
		for (ct = eF.eK[al] - ma[al] - mc[al]; 0 <= ct; ct--)
			if (!oR(al, bi, ++bottom + mc[al] - 1, mb[al])) {
				bottom--;
				break
			} var bj = Math.floor((top + bottom) / 2);
		oG(al, bi, bj, mb[al], mc[al]) && (mZ[al] = bi, ma[al] = bj)
	}

	function oG(player, bi, bj, ba, bb) {
		h1 = Math.floor(.2 * ba);
		for (var h1, b3 = bi + ba - 1; bi <= b3; b3--)
			if (!oQ(player, b3, bj, bb)) return;
		for (b3 = bj + bb - 1 - (h1 = (h1 = Math.floor(.25 * bb)) < 1 ? 1 : h1); bj + h1 <= b3; b3--)
			if (!oR(player, bi, b3, ba)) return;
		return 1
	}

	function oQ(player, bi, bj, bb) {
		return ee.mR(player, 4 * (bj * p.eP + bi)) && ee.mR(player, 4 * ((bj + bb - 1) * p.eP + bi))
	}

	function oR(player, bi, bj, ba) {
		return ee.mR(player, 4 * (bj * p.eP + bi)) && ee.mR(player, 4 * (bj * p.eP + bi + ba - 1))
	}
	this.a4 = function() {
		if (n3 = a5.c0.data[7].value || 8 === o.fW, mo = !1, mk = .88, mh = .5, mi = 1.8, mj = 12 - 3 * a5.c0.data[9].value, mY = mX = 0, mZ = new Uint16Array(o.bI), ma = new Uint16Array(o.bI), mb = new Uint16Array(o.bI), mc = new Uint16Array(o
				.bI), md = new Float32Array(o.bI), me = new Float32Array(o.bI), mr = new Uint16Array(2 * o.bI), ms = new Uint8Array(5 * o.bI), n0 = new Uint8Array(o.bI), n1 = new Uint8Array(o.bI), mp = mp || document.createElement("canvas"),
		n4(), mm = ml = 0, mn = 1, n3) {
			var al, nE;
			for (n5(), hL.font = w.bc.hG(1, 100), nE = 100 / Math.floor(hL.measureText("900 000").width), al = o.bI - 1; 0 <= al; al--) md[al] = Math.min(nE, 2 * me[al]);
			mz = nE, my[0] = 100 / (nE * Math.floor(hL.measureText("5 000 000").width)), my[1] = 100 / (nE * Math.floor(hL.measureText("50 000 000").width)), my[2] = 100 / (nE * Math.floor(hL.measureText("500 000 000").width)), my[3] = 100 / (
				nE * Math.floor(hL.measureText("1 000 000 000").width))
		} else n5();
		! function() {
			var al;
			for (al = o.bI - 1; 0 <= al; al--) eF.fQ[al] < 12 ? (mZ[al] = eF.eG[al] + 1, ma[al] = eF.eJ[al] + 1, mb[al] = 1, mc[al] = 1) : (mZ[al] = eF.eG[al], ma[al] = eF.eJ[al] + 1, mb[al] = 4, mc[al] = 2);
			if (o.db)
				for (al = 0; al < o.cF; al++) mb[al] = 0;
			mt = kc.get(4).width, mu = kc.get(4).height
		}()
	}, this.n8 = function(i5, n9) {
		n9 > 18 * eF.fQ[i5] ? (n1[i5] = 6, ee.nA[i5] = 2 + ee.nA[i5] % 2) : (n0[i5] = 4, (ee.nA[i5] < 2 || 3 < ee.nA[i5]) && (ee.nA[i5] = 6 + ee.nA[i5] % 2))
	}, this.nB = function(i5, n9) {
		n9 > 6 * eF.fQ[i5] ? (n1[i5] = 6, ee.nA[i5] = 4 + ee.nA[i5] % 2) : (n0[i5] = 4, (ee.nA[i5] < 4 || 5 < ee.nA[i5]) && (ee.nA[i5] = 8 + ee.nA[i5] % 2))
	}, this.resize = function() {
		n4(), nD(mq)
	}, this.nI = function() {
		for (var al = 0; al < o.cF; al++) eF.eH[al] - eF.eG[al] != 3 || eF.eK[al] - eF.eJ[al] != 3 ? (mZ[al] = eF.eG[al] + (eF.eH[al] !== eF.eG[al] ? 1 : 0), ma[al] = eF.eJ[al], mb[al] = 1, mc[al] = 1) : (mZ[al] = eF.eG[al], ma[al] = eF.eJ[al] +
			1, mb[al] = 4, mc[al] = 2)
	}, this.nJ = function(player, ab, nK) {
		! function(player, ab, nK) {
			player += ab * o.bI;
			0 === ab ? mr[player] === nK && 0 < ms[player] ? ms[player] = 0 : (mr[player] = nK, ms[player] = nM.gS.nN(nK) ? 255 : 64) : 1 === ab ? (ms[player] = 64, mr[player] = nK) : ms[player] = nK
		}(player, ab, nK), 2 === o.de && this.kl(!0)
	}, this.hJ = function() {
		mo && (1 !== mn ? (hL.imageSmoothingEnabled = !0, hL.setTransform(mn, 0, 0, mn, 0, 0), hL.drawImage(mp, -ml / mn, -mm / mn), hL.setTransform(1, 0, 0, 1, 0, 0), hL.imageSmoothingEnabled = !1) : hL.drawImage(mp, -ml, -mm))
	}, this.nO = function(ea, eb) {
		ml += ea, mm += eb
	}, this.hA = function(ea, eb) {
		cr.nO(ea, eb)
	}, this.zoom = function(hc, eD, eI) {
		mn *= hc, ml = (ml + eD) * hc - eD, mm = (mm + eI) * hc - eI
	}, this.nR = function(player) {
		var eG = eF.eG[player],
			eH = eF.eH[player],
			eJ = eF.eJ[player],
			eK = eF.eK[player],
			nS = eN.m4(0),
			nT = eN.m6(0),
			nU = eN.m4(c2.ba),
			nV = eN.m6(c2.bb);
		eG < nU && nS < eH && eJ < nV && nT < eK && (mb[player] = 0, mx = !0)
	}, this.kl = function(m3) {
		return !(!mx && !m3 && dY.dX < mw + (1 === mn && 0 === ml && 0 === mm && (o.nQ() || o.db || 2 === o.de) ? 1e3 : n2) || (nD(mq), 0))
	}, this.nW = function(al) {
		return nG(al) * md[al]
	}, this.nX = function(player) {
		return md[player]
	}, this.da = function() {
		dY.hw() % 10 == 9 && (mx = mx || o.o8() && !o.nQ()), !o.nQ() && 4 <= ++mY && function() {
			var al, ct, j9;
			for (mY = 0, j9 = 4; 1 <= j9; j9--)
				for (ct = cw.cx - 1; 0 <= ct; ct--) al = cw.cy[ct] + j9 * o.bI, 0 < ms[al] && ms[al] < 255 && ms[al]--;
			if (2 !== o.de)
				for (ct = cw.cx - 1; 0 <= ct; ct--) al = cw.cy[ct], 0 < ms[al] && ms[al] < 255 && ms[al]--
		}();
		var al, ct, bw = Math.floor(.1 * cw.cx);
		for (bw = (bw = bw < 8 ? 8 : bw) > cw.cx ? cw.cx : bw, al = mX + bw - 1; mX <= al; al--) ct = al % cw.cx, ! function(al) {
			var h0 = nG(al) * md[al];
			0 < mb[al] && oG(al, mZ[al], ma[al], mb[al], mc[al]) ? ! function(al) {
				for (var bi, bj, ba, bb, hd = !1, j9 = 0; j9 < 8; j9++) {
					if (ba = mb[al] + 2, bb = mc[al] + 2, ba > eF.eH[al] - eF.eG[al] + 1 || bb > eF.eK[al] - eF.eJ[al] + 1) return hd;
					if (bi = mZ[al] - 1, bj = ma[al] - 1, !oG(al, bi, bj, ba, bb)) return hd;
					mZ[al] = bi, ma[al] = bj, mb[al] = ba, mc[al] = bb, hd = !0
				}
				return hd
			}(al) && function(al, h0) {
				for (var bi, bj, ba, bb, hd = !1, oN = mb[al], dG = 1 + Math.floor(.02 * oN), j9 = 1; j9 < 5; j9++) {
					if ((ba = oN + j9 * dG) > eF.eH[al] - eF.eG[al] + 1) return hd;
					if ((bb = oM(h0, ba)) > eF.eK[al] - eF.eJ[al] + 1) return hd;
					bi = eF.eG[al] + Math.floor(Math.random() * (eF.eH[al] - eF.eG[al] + 2 - ba)), bj = eF.eJ[al] + Math.floor(Math.random() * (eF.eK[al] - eF.eJ[al] + 2 - bb)), oG(al, bi, bj, ba, bb) && (mZ[al] = bi, ma[al] = bj, mb[
						al] = ba, mc[al] = bb, hd = !0)
				}
				return hd
			}(al, h0) && oJ(al) : ! function(al, h0) {
				var bb, bi = mZ[al] + 1,
					bj = ma[al] + 1,
					ba = mb[al] - 2;
				for (;;) {
					if (ba < 1) {
						mb[al] = 0;
						break
					}
					if (bb = oM(h0, ba), oG(al, bi, bj, ba, bb)) return mZ[al] = bi, ma[al] = bj, mb[al] = ba, mc[al] = bb, 1;
					bi++, bj++, ba -= 2
				}
				return
			}(al, h0) ? function(al, h0) {
				var bi, bj, ba, bb, j9, oO, eA = eF.eH[al] - eF.eG[al] + 1,
					oP = Math.floor(.02 * eA);
				for (oO = -6 * (oP = oP < 1 ? 1 : oP), j9 = eA; oO <= j9; j9 -= oP)
					if (bb = oM(h0, ba = 0 < j9 ? j9 : 1), bi = eF.eG[al] + Math.floor(Math.random() * (eF.eH[al] - eF.eG[al] + 2 - ba)), bj = eF.eJ[al] + Math.floor(Math.random() * (eF.eK[al] - eF.eJ[al] + 2 - bb)), oG(al, bi, bj, ba,
							bb)) return mZ[al] = bi, ma[al] = bj, mb[al] = ba, mc[al] = bb
			}(al, h0) : oJ(al)
		}(cw.cy[ct]);
		mX = (mX += bw) % cw.cx
	}, this.oB = function() {
		var al, i5, oC, oD;
		if (dY.hw() % 4 == 1)
			for (al = cw.cx - 1; 0 <= al; al--) i5 = cw.cy[al], ee.nA[i5] < 2 || ((oC = Math.max(n0[i5] - 1, 0)) === (oD = Math.max(n1[i5] - 1, 0)) ? 0 === oC && (ee.nA[i5] %= 2) : 0 === oD && ee.nA[i5] < 6 && (ee.nA[i5] += 4), n0[i5] = oC, n1[
				i5] = oD)
	}, this.cs = function(player) {
		var al = player + 2 * o.bI,
			hB = ms[al];
		return 0 < hB && (cp.oE(50, player), ms[al] = 0, 255 === hB)
	}, this.oF = function(player) {
		return 255 === ms[player + 2 * o.bI]
	}
}

function oS() {
	this.oT = function(lx, oU) {
		oV.a4(oU), 0 === oV.size ? f2.aw.oW(lx, 3205) : ((0 === oV.oX(1) ? function(lx) {
			var ob = oV.oX(6);
			0 === ob ? function(lx) {
					if (0 === lx && 8 !== aB.ox()) {
						a0.aw.oy();
						for (var oz = oV.oX(12), p0 = oV.oX(6), ak = new Array(oz), al = 0; al < oz; al++) ak[al] = oV.oX(p0);
						p1.p2(ak)
					}
				}(lx) : 2 === ob ? f2.od.oe(lx) : 3 === ob || 4 === ob ? lm.a4() : 5 === ob ? f2.og.oh() : 9 === ob ? f2.og.oi(lx) : 10 === ob ? f2.oj.ok() : 11 === ob ? f2.og.ol(lx) : 12 === ob ? f2.oj.om() : 13 === ob ? f2.on.oo() :
				14 === ob ? f2.on.op() : 15 === ob ? f2.og.oq() : 16 === ob ? f2.od.or(lx) : 17 === ob ? f2.od.os(lx) : 19 === ob ? f2.od.ot(lx) : 20 === ob ? f2.og.ou(lx) : 21 === ob ? f2.og.ov(lx) : 22 === ob && f2.od.ow(lx)
		} : function(lx) {
			if (8 !== aB.ox() && !lm.p3()) return;
			if (lx !== f2.aw.p4) f2.aw.oW(lx, 3244);
			else if (0 === oV.oX(1)) dY.p5.p6(oV.oU);
			else {
				var al, lx = oV.oX(2);
				if (0 === lx) {
					var nw, pL = oV.oX(9);
					0 !== eF.hu[pL] && 0 !== eF.hu[o.co] && (nw = oV.oX(10), cp.pM(pL, o.co, nw), cr.nJ(pL, 1, nw))
				} else if (1 === lx) ! function() {
					var pL = oV.oX(9);
					0 !== eF.hu[pL] && 0 !== eF.hu[o.co] && pN.k1(0, [pL], !0) && cp.pO(pL, 1)
				}();
				else if (2 === lx) ! function() {
					var pL = oV.oX(9),
						target = oV.oX(9);
					0 !== eF.hu[pL] && 0 !== eF.hu[target] && 0 !== eF.hu[o.co] && pN.k1(1, [pL], !0) && (cr.nJ(pL, 3, 96), cr.nJ(target, 4, 96), cp.pP(pL, target))
				}();
				else if (pC.pD && !pC.pE) {
					var bw = 540;
					for (pF.lu(17287), pF.pG(1, 0), pF.pG(6, 10), bw = Math.min(pH.pI.pJ.length, 540), al = 0; al < bw; al++) pF.pK(32, pH.pI.pJ[al]);
					f2.aw.send(f2.aw.p4, pF.oU)
				}
			}
		})(lx), dY.oa())
	}
}

function pQ() {
	this.u = function() {
		var pR = o.data;
		w.x.pS(pR.teamPlayerCount, pR.playerCount), pR.numberTeams = w.x.y(pR.teamPlayerCount, 0), pR.teamPlayerCount[0] && pR.teamPlayerCount[7] && (pR.teamPlayerCount[7] = 0, this.u())
	}, this.aD = function() {
		var pR = o.data;
		pR.mapType < 2 ? p.lu(p.s(pR), pR.mapSeed) : p.pT(pR.canvas)
	}, this.aA = function() {
		var pR = o.data;
		pR.colorsData || (pR.colorsData = new Uint32Array(1)), 0 === pR.gameMode && (pR.colorsData[0] = a5.aw.dy()), pR.selectableName && (pR.playerNamesData || (pR.playerNamesData = new Array(1)), pR.playerNamesData[0] = a5.c0.data[122].value),
			pR.lt = new Uint32Array(1), pR.lt[0] = fE.fF.fG(a5.c0.data[105].value, 5)
	}, this.av = function() {
		o.data = new lo
	}
}

function pU() {
	this.dZ = 0, this.da = function() {
		pV.da(), pW.da(), c2.da(), f2.aw.da(), lm.pX(), pY.pZ.da(), dY.dk && (dY.dk = !1, aB.hJ())
	}
}

function pa() {
	var b, c, b7, aG;

	function g() {
		bA(), 2 !== o.data.sResourcesType && (o.data.sResourcesData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		2 === o.data.sResourcesType && w.x.bD(b7.bE(), o.data.sResourcesData, 2047)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(22), [new f("⬅️ " + L(1), g)]), c = new j(b.k, (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(19), L(11), L(9)],
			value: o.data.sResourcesType
		}, function(ab) {
			bA(), 2 !== ab || o.data.sResourcesData || (o.data.sResourcesData = new Uint16Array(o.bI)), o.data.sResourcesType = ab, a0.a1(28)
		})), aG.push(aT)
	}(aG = []), function(aG) {
		var aT;
		1 === o.data.sResourcesType && ((aT = new aU).aV("Value"), aT.aX(new aa({
			ab: -1,
			value: o.data.sResourcesValue
		}, 1, 0, function(aY) {
			var value = ac.ad(Math.floor(aY.target.value), 0, 2047);
			aY.target.value = o.data.sResourcesValue = value
		})), aG.push(aT))
	}(aG), function(aG) {
		var aT;
		2 === o.data.sResourcesType && ((aT = new aU).aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.sResourcesData, 2)), aT.aX(b7), aG.push(aT))
	}(aG), aG))
}

function pc() {
	this.aw = new pd, this.dU = 0;
	var pe = new Array(32);

	function pi() {
		for (var bw = pe.length, al = 0; al < bw; al++) pe[al] = null
	}
	this.a4 = function() {
		for (var pf, pg = document.body.firstChild; pg;) pf = pg.nextSibling, !document.body.contains(pg) || "DIV" !== pg.tagName && "INPUT" !== pg.tagName && "BUTTON" !== pg.tagName || a0.removeChild(document.body, pg), pg = pf
	}, this.a1 = function(ab, ph, bZ) {
		void 0 === ph && (ph = this.dU), dY.dk = !0, 0 === ab && (0 === aB.ox() ? ab = 5 : c3.h2.setState(13)), this.b1(), this.dU === ab && (ph = pe[ab].ph, pe[ab] = null), this.dU = ab;
		var cX = pe[ab];
		if (!cX || 4 === ab || 7 === ab || 8 === ab || 9 === ab || 10 === ab || 11 === ab || 13 === ab || 15 === ab || 18 === ab || 20 <= ab && ab <= 28 || 32 === ab || 33 === ab) {
			if (0 === ab) return void pi();
			1 === ab ? cX = new pj : 2 === ab ? cX = new pk : 3 === ab ? cX = new pl : 4 === ab || 9 === ab || 10 === ab || 11 === ab || 13 === ab || 33 === ab ? cX = bZ : 5 === ab ? cX = new pm : 6 === ab ? cX = new pn : 7 === ab ? cX = new po(
					a0.aw.pp) : 8 === ab ? cX = bZ : 12 === ab ? cX = new pq : 14 === ab ? cX = new pr : 15 === ab ? cX = new po(a0.aw.ps) : 16 === ab ? cX = new pt : 17 === ab ? cX = new pu : 18 === ab ? cX = new pv : 19 === ab ? cX = new a :
				20 === ab ? cX = new pw : 21 === ab ? cX = new b6 : 22 === ab ? cX = new px : 23 === ab ? cX = new py : 24 === ab ? cX = new pz : 25 === ab ? cX = new q0 : 26 === ab ? cX = new q1 : 27 === ab ? cX = new q2 : 28 === ab ? cX =
				new pa : 29 === ab ? cX = new q3 : 30 === ab ? cX = new q4 : 31 === ab ? cX = new q5 : 32 === ab && (cX = new q6), cX.ph = ph, pe[ab] = cX
		}
		cX.show(bZ)
	}, this.bC = function() {
		this.gv() && this.q7(this.dV().ph)
	}, this.q7 = function(ab) {
		this.gv() && (pe[ab] ? (this.b1(), dY.dk = !0, this.dU = ab, pe[ab].show()) : this.a1(ab))
	}, this.b1 = function() {
		this.gv() && pe[this.dU].b1()
	}, this.au = function() {
		this.gv() && (pe[this.dU].b1(), pi(), this.dU = 0, c3.h2.setState(13))
	}, this.hJ = function() {
		var cX;
		this.gv() && (cX = pe[this.dU]).hJ && cX.hJ()
	}, this.resize = function() {
		if (!this.gv()) return !1;
		pe[this.dU].resize()
	}, this.h6 = function(bi, bj) {
		var cX;
		this.gv() && (cX = pe[this.dU]).h6 && cX.h6(bi, bj)
	}, this.hA = function(bi, bj) {
		var cX;
		this.gv() && (cX = pe[this.dU]).hA && cX.hA(bi, bj)
	}, this.q8 = function() {
		var cX;
		this.gv() && (cX = pe[this.dU]).q8 && cX.q8()
	}, this.q9 = function(eD, eI, deltaY) {
		var cX;
		this.gv() && (cX = pe[this.dU]).q9 && cX.q9(eD, eI, deltaY)
	}, this.b2 = function(code) {
		var cX;
		return !!this.gv() && ((cX = pe[this.dU]).b2 && cX.b2(code), !0)
	}, this.da = function() {
		var cX;
		this.gv() && (cX = pe[this.dU]) && cX.da && cX.da()
	}, this.gv = function() {
		return 0 < this.dU
	}, this.dV = function() {
		return pe[this.dU]
	}, this.qA = function(ab) {
		return pe[ab]
	}, this.bB = function() {
		return pe
	}, this.removeChild = function(qB, jr) {
		try {
			qB.removeChild(jr)
		} catch (aY) {
			console.log("removeChild error " + aY)
		}
	}
}

function qC() {
	this.qD = function(player) {
		w.cO.iX(player) && cp.qE(80, L(37), 637, 0, hM.qF, hM.hN, -1, !1)
	}, this.qG = function(player) {
		w.cO.iX(player) && cp.qE(80, L(38), 637, 0, hM.qF, hM.hN, -1, !1)
	}
}

function qH() {
	this.g4 = function(player) {
		qI.qJ(player), o.qK++, eF.iW[player] = 2, eF.qL[player] = lv.qM.qN(), player === o.co && (qO.show(!1, !1), hx.qP(), qQ.qR.qS()), cr.cs(player)
	}
}

function qT() {
	var qU, ak;
	this.a4 = function() {
		for (var al = (ak = new Uint16Array(101)).length - 1; 0 <= al; al--) ak[al] = ac.eB(32768 * al, 100);
		this.qV(0)
	}, this.value = function(i5) {
		return ak[i5]
	}, this.qW = function() {
		return ac.eB(qU - 1, 2)
	}, this.qV = function(qX) {
		qU = 2 * qX % 32768 + 1
	}, this.random = function() {
		return qU = 167 * qU % 32768
	}, this.qY = function(qZ) {
		return ac.eB(qZ * this.random(), 32768)
	}, this.qa = function(i5) {
		return 0 !== i5 && this.random() < this.value(i5)
	}, this.eE = function(ct, j9) {
		return ct + this.qY(j9 - ct)
	}
}

function qb() {
	function qe() {
		8 === o.fW && 1 === o.de && qQ.qh.qi()
	}

	function qd(player) {
		o.db ? (qj.qk(player), cw.ql(), o.kg && o.qm.da()) : qn.g4(player)
	}
	this.qc = function(player) {
		cp.cq(player, player === o.co ? 21 : 22), qd(player), qe()
	}, this.qf = function(player) {
		1 === o.de && 0 !== eF.hu[player] && 2 !== eF.iW[player] && qd(player), o.qg--, o.qK--, cp.cq(player, 4), w.cO.iT(2) && hx.kl(!0), qe()
	}
}

function qo() {
	var iU = 0;
	this.a4 = function() {
		qp.a4(), iU = 0
	}, this.setState = function(qq) {
		iU = qq
	}, this.ox = function() {
		return iU
	}, this.aC = function() {
		this.setState(8), a0.au()
	}, this.b2 = function(aY) {
		if (!p.qr) return !1;
		if (!(dY.dX < 400)) {
			if ("Enter" === aY.key || "Escape" === aY.key) {
				if (this.qs()) return !0;
				if ("Enter" === aY.key) {
					if (0 === iU) return !0;
					if (7 === iU) return !0
				}
			}
			return !1
		}
	}, this.qt = function() {
		qu.resize()
	}, this.qs = function() {
		return !!qu.b1()
	}, this.h6 = function(bi, bj) {
		!p.qr || qu.h6(bi, bj) || 6 === iU && pW.h6(bi, bj) || qv.h6(bi, bj) || p1.h6(bi, bj)
	}, this.hA = function(bi, bj) {
		!p1.qw && qp.hA(bi, bj, !0) || p1.hA(bi, bj)
	}, this.click = function(bi, bj) {
		p1.hC()
	}, this.q9 = function(bi, bj, deltaY) {}, this.qx = function() {
		qp.qy(), dY.dk = !0
	}, this.hJ = function() {
		8 !== iU && 10 !== iU && (hL.imageSmoothingEnabled = !0, this.qz(), 0 !== iU && (p1.hJ(), pV.hJ(), this.r0(), qv.hJ()), 0 !== iU && 6 === iU && pW.hJ(), qu.hJ(), a0.hJ())
	}, this.qz = function() {
		var r3, r2;
		if (__fx.makeMainMenuTransparent) hL.clearRect(0, 0, c2.ba, c2.bb);
		else p.qr ? (r2 = c2.ba / p.eP, r3 = c2.bb / p.eQ, hL.setTransform(r2 = r3 < r2 ? r2 : r3, 0, 0, r2, Math.floor((c2.ba - r2 * p.eP) / 2), Math.floor((c2.bb - r2 * p.eQ) / 2)), hL.drawImage(p.q, 0, 0), hL.setTransform(1, 0, 0, 1, 0, 0), hL
			.fillStyle = hM.r4) : hL.fillStyle = hM.r1, hL.fillRect(0, 0, c2.ba, c2.bb)
	}, this.r0 = function() {
		var bj = Math.floor(.3 * c2.bb),
			canvas = kc.r5("territorial.io"),
			h0 = (h0 = 1.75 * c2.bb / canvas.width) * canvas.width < .98 * c2.ba ? .98 * c2.ba / canvas.width : h0,
			bi = (hL.globalAlpha = .15, hL.imageSmoothingEnabled = !1, Math.floor(.5 * (c2.ba - h0 * canvas.width))),
			bi = Math.floor(bi / h0),
			bj = Math.floor(bj - .5 * canvas.height * h0),
			bj = Math.floor(bj / h0);
		hL.setTransform(h0, 0, 0, h0, bi, bj), hL.drawImage(canvas, bi, bj), hL.setTransform(1, 0, 0, 1, 0, 0), hL.globalAlpha = 1, hL.imageSmoothingEnabled = !0
	}
}

function r7() {
	var r8 = new Uint16Array(o.bI);

	function rN(player, rK) {
		for (var bw = ix.rC[0], rV = ix.rV, rX = -1, eL = o.bI, al = 0; al < bw; al++) {
			var eM, i5 = rV[al];
			jG.jH(player, i5) && (eM = eN.rY(rK, eN.rZ(i5)), -1 === rX || eM < rX) && (rX = eM, eL = i5)
		}
		return eL
	}

	function rP(rM, rK) {
		if (rM === o.bI) return 0;
		var rW = eF.rW[rM],
			cX = rW.length;
		if (0 === cX) return 0;
		for (var bw = Math.min(cX, 10), eL = 0, rX = eN.rY(rW[eL] >> 2, rK), al = 0; al < bw; al++) {
			var bP = eC.qY(cX),
				eM = eN.rY(rW[bP] >> 2, rK);
			eM < rX && (rX = eM, eL = bP)
		}
		return rW[eL] >> 2
	}

	function rR(player, rK, cC, ra) {
		var rb;
		(ra === o.bI || (rb = eN.rZ(cC), ra = eN.rZ(ra), eN.rY(rK, rb) < eN.rY(rK, ra))) && (r8[player] = cC)
	}
	this.a4 = function() {
		r8.fill(o.bI)
	}, this.r9 = function() {
		if (dY.hw() % 109 == 9 && !(cw.cx < 20) && o.fT && !(fd.jO() < ac.eB(8 * o.fS, 10))) {
			var ie = fd.fe();
			if (bN.rA[ie]) {
				fd.rB(ie);
				var bw = ix.rC[0];
				if (0 !== bw)
					for (var ak = ix.rD, cy = cw.cy, cx = cw.cx, rE = r8, bP = eC.qY(bw), al = 0; al < cx; al++) {
						var rF = cy[al],
							rG = ak[bP];
						w.cO.iY(rF, rG) && 512 === rE[rF] && (rE[rF] = rG, bP = (bP + 1) % bw)
					}
			}
		}
	}, this.da = function(player) {
		var rK, rO, rM, rH = function(player) {
			var cC = r8[player];
			if (cC !== o.bI) {
				if (w.cO.ih(cC) && eF.rW[cC]) return cC;
				r8[player] = o.bI
			}
			return o.bI
		}(player);
		return function(player) {
			for (var rU = cw.cy, cX = cw.cx, bw = Math.min(cX, cX < 17 && 5 === eC.qY(20) ? 1 : 16), eR = eC.qY(cX), rV = ix.rV, rW = eF.rW, v = 0, al = 0; al < bw; al++) {
				var i5 = rU[(al + eR) % cX];
				i5 !== player && rW[i5].length && (rV[v++] = i5)
			}
			ix.rC[0] = v
		}(player), 0 !== ix.rC[0] && (0 < (rO = rP(rM = rN(player, rK = eN.rL(player)), rK)) && e3.e4.e5(player, e3.fi.rQ(rO, rK)) ? (rR(player, rK, rM, rH), !0) : 0 < (rM = function(player, rK) {
			for (var bw = ix.rC[0], rV = ix.rV, rE = r8, eR = 0, al = 0; al < bw; al++) {
				var i5 = rV[al],
					i5 = rE[i5];
				i5 !== o.bI && w.cO.ih(i5) && player !== i5 && jG.jH(player, i5) && (rV[eR++] = i5)
			}
			return 0 !== (ix.rC[0] = eR) ? rP(rN(player, rK), rK) : 0
		}(player, rK)) && e3.e4.e5(player, e3.fi.rQ(rM, rK)) ? (rR(player, rK, ee.la(rM << 2), rH), !0) : !!(0 < (rO = rP(rH, rK)) && e3.e4.e5(player, e3.fi.rQ(rO, rK))))
	}
}

function rd() {
	this.re = new rf, this.pZ = new rg, this.a4 = function() {
		c3.h2.rh()
	}, this.ri = function() {
		return a5.c0.data[160].value
	}
}

function pw() {
	var b, c, rj, aG;

	function g() {
		d4.d1(), a0.bB()[19] = null, a0.bC()
	}

	function rv() {
		s1(), rz()
	}

	function s1() {
		rj.ao.lastChild && a0.removeChild(rj.ao, rj.ao.lastChild)
	}

	function rz() {
		var s2 = p.s(o.data);
		o.data.canvas = p.r(s2, o.data.mapSeed).q, s0()
	}

	function s0() {
		var aW = o.data.canvas;
		aW.style.width = "100%", rj.ao.appendChild(aW)
	}
	this.dA = function(aW) {
		o.data.canvas && s1(), o.data.canvas = aW, s0()
	}, this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(3), [new f("⬅️ " + L(1), g)]), 2 === o.data.mapType && d4.a4(), c = new j(b.k, (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(39), L(40), L(41)],
			value: o.data.mapType
		}, function(ab) {
			2 === (o.data.mapType = ab) ? (d4.a4(), o.data.canvas = null) : (o.data.passableWater = o.data.passableMountains = 1, d4.d1()), a0.a1(20)
		})), 2 <= o.data.mapType && (aT.aX(new rq), aT.aX(new rr({
			value: o.data.passableWater
		}, L(42), function(value) {
			o.data.passableWater = value
		})), aT.aX(new rr({
			value: o.data.passableMountains
		}, L(43), function(value) {
			o.data.passableMountains = value
		})));
		aG.push(aT)
	}(aG = []), function(aG) {
		if (0 === o.data.mapType) {
			for (var aT = new aU, aj = (aT.aV(L(3)), []), al = 0; al < p.rs.rt.length; al++) aj.push(p.rs.ru[p.rs.rt[al]].name);
			aT.ah(new ai({
				aj: aj,
				value: o.data.mapProceduralIndex
			}, function(ab) {
				o.data.mapProceduralIndex = ab, rv()
			})), aG.push(aT)
		}
	}(aG), function(aG) {
		if (1 === o.data.mapType) {
			for (var aT = new aU, aj = (aT.aV(L(3)), []), al = 0; al < p.rs.rw.length; al++) aj.push(p.rs.ru[p.rs.rw[al]].name);
			aT.ah(new ai({
				aj: aj,
				value: o.data.mapRealisticIndex
			}, function(ab) {
				o.data.mapRealisticIndex = ab, rv()
			})), aG.push(aT)
		}
	}(aG), function(aG) {
		var aT;
		2 === o.data.mapType && ((aT = new aU).aV(L(44)), aT.aX(new aa(a5.c0.data[162], 1)), aT.aV(L(45), "0.8em"), aT.aX(new aZ([new f(L(46), function() {
			return d4.d2(), !0
		}).button])), aG.push(aT))
	}(aG), function(aG) {
		var aT, rx;
		2 === o.data.mapType && ((aT = new aU).aV(L(47)), rx = new aa({
			ab: -1,
			value: o.data.mapName
		}, 0, 0, function(aY) {
			o.data.mapName = aY.target.value = aY.target.value.slice(0, 20)
		}), aT.aX(rx), aG.push(aT))
	}(aG), function(aG) {
		var aT, rx, ry;
		0 === o.data.mapType && ((aT = new aU).aV("Seed"), rx = new aa({
			ab: -1,
			value: o.data.mapSeed
		}, 1, 0, function(aY) {
			aY = Math.abs(Math.floor(aY.target.value)) % 16384;
			o.data.mapSeed !== aY && (o.data.mapSeed = aY, rv())
		}), ry = new f(L(8), function(aY) {
			var qX = Math.floor(16384 * Math.random());
			if (o.data.mapSeed !== qX) return rx.aY.value = o.data.mapSeed = qX, rv(), !0
		}), aT.aX(rx), aT.aX(new aZ([ry.button])), aG.push(aT))
	}(aG), function(aG) {
		(rj = new aU).aV(L(48)), 2 !== o.data.mapType ? rz() : o.data.canvas && s0();
		aG.push(rj)
	}(aG), aG))
}

function s3() {
	function sQ(player, cD, sG, sK) {
		var cC;
		if (ee.lb(sG)) cC = o.bI;
		else {
			if ((cC = ee.la(sG)) === player) return void cQ.cR(player, cD - w.cO.cP(player, cD), 12);
			if (!jG.jH(player, cC)) return void pH.sW.sX(player, cC, cD)
		}
		lF.cY(player, cC) || lF.cZ(player) ? (eF.lT[player].push(sK << 2), lF.cW(player, cD, cC), lR.sY(player, !0)) : cQ.cR(player, cD, 12)
	}
	this.da = function() {
		for (var s4 = e3.aw.s4, s5 = e3.aw.s5, s6 = e3.aw.s6, al = e3.aw.s7 - 1; 0 <= al; al--) 65535 === s6[al] && function(al, sK, sD) {
			if (6 === sD) {
				if (e3.fk.sL(al, sK)) return e3.aw.sM[al]++, e3.aw.s6[al] = 0, 0
			} else {
				var player = e3.aw.sN[al] >> 3,
					al = e3.aw.sO[al];
				cQ.sP(player), sD < 4 ? sQ(player, al, sK + eN.sH[sD] << 2, sK) : 4 === sD ? function(player, cD, sK) {
					var al, iO, sT = eN.sU,
						iN = eN.eg(sK);
					for (al = 0; al < 4; al++)
						if (iO = iN + sT[al], ee.lb(iO)) return sQ(player, cD, iO, sK);
					for (al = 0; al < 4; al++)
						if (iO = iN + sT[al], ee.lZ(iO) && !ee.sV(player, iO)) return sQ(player, cD, iO, sK);
					for (al = 0; al < 4; al++)
						if (iO = iN + sT[al], ee.lZ(iO)) return sQ(player, cD, iO, sK)
				}(player, al, sK) : 5 === sD && function(player, cD, sK) {
					var al, iO, sT = eN.sU,
						iN = eN.eg(sK);
					for (al = 0; al < 4; al++)
						if (iO = iN + sT[al], ee.lZ(iO) && ee.sV(player, iO)) return sQ(player, cD, iO, sK);
					for (al = 0; al < 4; al++)
						if (iO = iN + sT[al], ee.lZ(iO)) return sQ(player, cD, iO, sK);
					for (al = 0; al < 4; al++)
						if (iO = iN + sT[al], ee.lb(iO)) return sQ(player, cD, iO, sK)
				}(player, al, sK)
			}
			return 1
		}(al, eN.s9(s5[al]), s4[al] % 64) && (e3.fk.fm(al), e3.sA.sB(al))
	}, this.sC = function(player, eV, sD, fg, cD) {
		if (!(5 <= sD)) {
			var sE = o.co;
			if (w.cO.iV(sE) && jG.jH(player, sE) && player !== sE && 0 !== eF.rW[sE].length && w.cO.ig(player, 5)) {
				for (var sG, sF = !1, al = 0; al < 4; al++)
					if (sG = eV + eN.sH[al] << 2, ee.lV(sG) && !ee.lb(sG) && ee.la(sG) === sE) {
						sF = !0;
						break
					} sF && (cp.sI(719, 0), sD = cD < 25e3 ? L(49) + " (" + w.bL.gQ(cD) + ") ⛵" : L(50) + " (" + w.bL.gQ(cD) + ") 🚢", cp.qE(180, sD, 719, player, hM.sJ, hM.hN, -1, !0, void 0, {
					j9: 1,
					fg: fg
				}))
			}
		}
	}
}

function sZ() {
	var sa = 0;

	function sj(e0, id) {
		sa || (id ? 1 === id ? cp.sf = L(52) + ": " + e0 : a0.a1(4, 3, new st(L(53), e0, 1)) : a0.a1(4, 3, new st("⚠️ " + L(51), e0, 1)))
	}
	this.fq = function(e0, sb) {
		var su, ga;
		return sa = sb, fE.fF.sc(fE.fF.sd(fE.fF.se(e0))), cp.sf = "", !! function() {
			if (oV.size < 10) sj("File Too Small");
			else {
				var so = oV.oX(12),
					eo = (so !== pC.rVersion && (eo = "Incompatible Version   Required: " + pC.rVersion, sj(eo = (eo += "   Found: " + so) + ("   Compatible at " + f2.aw.sp() + "/" + so), 1)), oV.oX(12)),
					sr = oV.oX(31);
				if (sr !== oV.size) sj("Size Error: " + sr + " " + oV.size);
				else if (function(bb, so) {
						for (var i5 = oV.oU, bw = oV.size, sq = so, al = 3; al < bw; al++) sq = sq + i5[al] & 4095;
						return sq === bb || (sj("Hash Error: " + sq + " " + bb + " " + bw), !1)
					}(eo, so)) return 1
			}
			return
		}() && (su = oV, (ga = o.data = new lo).mapType = su.oX(2), ga.mapProceduralIndex = su.oX(8), ga.mapRealisticIndex = su.oX(8), ga.mapSeed = su.oX(14), ga.mapName = su.sv(5), 2 === ga.mapType && su.sw(), ga.passableWater = su.oX(1), ga
			.passableMountains = su.oX(1), ga.playerCount = su.oX(10), ga.humanCount = su.oX(10), ga.selectedPlayer = su.oX(9), ga.gameMode = su.oX(1), ga.playerMode = su.oX(2), ga.battleRoyaleMode = su.oX(2), ga.numberTeams = su.oX(4), ga
			.isZombieMode = su.oX(1), ga.isContest = su.oX(1), ga.isReplay = su.oX(1), ga.elo = su.sx(2, 14, 2), ga.colorsType = su.oX(1), ga.colorsPersonalized = su.oX(1), ga.colorsData = su.sx(10, 18, 512), ga.selectableColor = su.oX(1), ga
			.teamPlayerCount = su.sx(4, 10, 9), ga.neutralBots = su.oX(1), ga.botDifficultyType = su.oX(2), ga.botDifficultyValue = su.oX(4), ga.botDifficultyTeam = su.sx(4, 4, 9), ga.botDifficultyData = su.sx(10, 4, 512), ga.spawningType =
			su.oX(2), ga.spawningSeed = su.oX(14), ga.spawningData = su.sx(11, 12, 1024), ga.selectableSpawn = su.oX(1), ga.playerNamesType = su.oX(2), ga.playerNamesData = su.sy(10, 5, 512), ga.selectableName = su.oX(1), ga.aIncomeType = su
			.oX(2), ga.aIncomeValue = su.oX(8), ga.aIncomeData = su.sx(10, 8, 512), ga.tIncomeType = su.oX(2), ga.tIncomeValue = su.oX(8), ga.tIncomeData = su.sx(10, 8, 512), ga.iIncomeType = su.oX(2), ga.iIncomeValue = su.oX(8), ga
			.iIncomeData = su.sx(10, 8, 512), ga.sResourcesType = su.oX(2), ga.sResourcesValue = su.oX(11), ga.sResourcesData = su.sx(10, 11, 512), ga.lt = su.sx(10, 30, 0), !! function() {
				var su = oV,
					nH = su.oX(5),
					sz = su.oX(30),
					t0 = su.oX(30);
				if (sz + t0 > 8 * su.size) return void sj("Corrupted File");
				return function(bw) {
						var t3 = new Uint8Array(bw),
							t4 = new Uint16Array(bw),
							t5 = new Uint32Array(bw),
							t6 = new Uint32Array(bw);
						a2.a3.t7 = t3, a2.a3.t8 = t4, a2.a3.t9 = t5, a2.a3.tA = t6;
						for (var al = 0; al < bw; al++) {
							var id = oV.oX(4);
							t3[al] = id, t4[al] = oV.oX(9), 0 === id ? t5[al] = oV.oX(22) : 1 === id ? (t5[al] = oV.oX(10), t6[al] = oV.oX(10)) : 2 === id ? (t5[al] = oV.oX(10), t6[al] = oV.oX(9)) : 3 === id ? (t5[al] = oV.oX(10), t6[al] = oV
								.oX(27)) : 4 === id ? (t5[al] = oV.oX(10), t6[al] = oV.oX(16)) : 5 === id || 6 === id ? t5[al] = oV.oX(10) : 7 === id ? t5[al] = oV.oX(1) : 10 === id && (t5[al] = oV.oX(20), t6[al] = oV.oX(22))
						}
					}(sz),
					function(bw, nH) {
						var tB = new Uint8Array(bw),
							tC = new Array(bw);
						tC.fill(0), a2.a3.tB = tB, a2.a3.tC = tC;
						for (var al = 0; al < bw; al++) tB[al] = oV.oX(1), tC[al] = oV.oX(nH)
					}(t0, nH), 1
			}()) && (oV.ab < 8 * oV.size - 13 || oV.ab > 8 * oV.size ? (sj("Out Of Bounds Error: " + oV.ab + " " + 8 * oV.size), !1) : (a2.a3.sk = e0, 2 !== o.data.mapType || (sj("Load base64 image...", 2), sb)))
	}, this.sl = function(dB, sm) {
		var aW = document.createElement("canvas"),
			be = aW.getContext("2d");
		if (aW.width = dB.width, aW.height = dB.height, be.drawImage(dB, 0, 0), o.data.canvas = aW, sa || sm) return o.de ? void 0 : (o.data.mapType = 2, a0.au(), void a0.a1(19));
		a2.sn()
	}
}

function tD() {
	var tE = [],
		tF = [],
		tG = [];

	function tI(ga) {
		for (var eo = ga.eo, tH = [];;) {
			var b3 = function tN(eo, position) {
				position = eo.indexOf("@", position);
				if (position < 0) return -1;
				var e0 = eo.substring(position + 1, position + 6);
				if (5 !== e0.length) return tN(eo, position + 1);
				if (w.bL.startsWith(e0, "room")) return tN(eo, position + 1);
				var tf = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!tf.test(e0)) return tN(eo, position + 1);
				tf = eo.substring(position + 6, position + 7);
				if (1 !== tf.length) return position;
				e0 = new RegExp("^[ :!.]+$");
				if (!e0.test(tf)) return tN(eo, position + 1);
				return position
			}(eo, 0);
			if (-1 === b3) {
				tH.push(tO(eo, ga));
				break
			}
			0 === b3 ? tH.push(tP(eo.substring(1, 6), ga, b3)) : (tH.push(tO(eo.substring(0, b3), ga)), tH.push(tP(eo.substring(b3 + 1, b3 + 6), ga, b3))), eo = eo.substring(b3 + 6)
		}
		return tH
	}

	function tP(e0, ga, b3) {
		var gB = function(e0) {
				var dw = fE.fF.fG(e0, 5),
					gB = f5.fB.gg(dw);
				if (gB) {
					for (tE.push(gB); 75 < tE.length;) tE.shift();
					return gB
				}
				for (var g3 = f5.fB.g3, al = g3.length - 1; 0 <= al; al--)
					if (gB = g3[al], dw === gB.dw) return tE.push(gB), gB;
				for (al = tE.length - 1; 0 <= al; al--)
					if (gB = tE[al], dw === gB.dw) return tE.push(gB), gB;
				return f5.fB.gC(dw, e0, 1, 999999, 999999, 0, 0, 0, 0)
			}(e0),
			e0 = (0 === b3 && 0 === ga.tJ.id && ga.tK && (ga.fontSize = f5.fi.tR(gB.g6, gB.g7), ga.tM = f5.fi.tS(gB.g7)), document.createElement("span"));
		return e0.textContent = function(gB, ga, b3) {
				if (gB.tb) return gB.tb--, b3 = 2 === ga.tJ.id || (3 === ga.tJ.id || 4 === ga.tJ.id) && 0 !== b3, gB.username + (b3 ? " (" + gB.gR + ")" : "");
				if (ga.tJ.td) return "Redacted " + gP.fF.gQ(gB.dw, 2);
				return gB.username
			}(gB, ga, b3), e0.style.display = "inline-block", e0.style.color = f5.fi.tV(gB.g6), 11 === gB.g6 && (e0.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), e0.style.cursor =
			"pointer", e0.style.margin = "0", e0.style.font = "inherit", e0.style.minWidth = e0.style.minHeight = "1em", f5.fi.tW(gB) && (e0.style.textDecoration = "underline"), gB.gH && (e0.style.textDecorationLine = "underline", e0.style
				.textDecorationStyle = "dotted"), f5.fi.tS(gB.g7) && (e0.style.fontWeight = "bold"), e0.onclick = function(aY) {
				f5.tX.tY(aY, gB)
			}, dE.dF() || (e0.onmouseover = function(aY) {
				f5.tZ.ta(aY.target, gB)
			}), tF.push(e0), e0
	}

	function tO(eo, ga) {
		var tT = document.createElement("span");
		return tT.textContent = eo, tT.style.color = ga.te, tT.style.margin = "0", tT.style.font = "inherit", tT
	}

	function tk(gB, gO, dw) {
		dw !== gB.dw || gB.gR || (gB.gR = gB.username, gB.username = gO)
	}
	this.d1 = function() {
		for (var al = 0; al < tF.length; al++) tF[al].onclick = tF[al].onmouseover = null;
		tG = tF = null
	}, this.transform = function(ga) {
		for (var ao = document.createElement("div"), tH = tI(ga), al = 0; al < tH.length; al++) ao.appendChild(tH[al]);
		0 === ga.tJ.id && (ao.vx143 = ga.tJ, tG.push(ao)), ao.style.margin = "0.6em 0.6em", ga.tK && (ao.style.marginLeft = ao.style.marginRight = "inherit"), ao.style.font = "inherit";
		var tL = 0 < ga.tJ.id;
		return ga.tM && (ao.style.fontWeight = "bold"), tL && (ao.style.paddingLeft = "0.7em"), tL && (ao.style.fontStyle = "italic"), ao.style.fontSize = ga.fontSize.toFixed(2) + "em", ao
	}, this.ti = function(tj) {
		if (tj && (2 === tj.id && 1 === tj.f7 || 3 === tj.id && 2 === tj.f7)) {
			var dw = 3 === tj.id ? tj.target : tj.dw;
			if (!f5.fB.gg(dw)) {
				for (var gO = "Redacted " + gP.fF.gQ(dw, 2), g3 = f5.fB.g3, al = g3.length - 1; 0 <= al; al--) tk(g3[al], gO, dw);
				for (al = tE.length - 1; 0 <= al; al--) tk(tE[al], gO, dw)
			}
		}
	}, this.gT = function(dw) {
		for (var tl = tG, tm = "@" + gP.fF.gQ(dw, 5), al = tl.length - 1; 0 <= al; al--) {
			var h1 = tl[al];
			if (h1.vx143.dw === dw || 0 <= h1.vx143.eo.indexOf(tm)) {
				for (; h1.firstChild;) a0.removeChild(h1, h1.firstChild);
				for (var tH = tI(f5.fi.tn(h1.vx143, f5.fi.tp(h1.vx143))), ct = 0; ct < tH.length; ct++) h1.appendChild(tH[ct]);
				tl.splice(al, 1)
			}
		}
	}, this.tq = function(dw) {
		for (var tl = tG, al = tl.length - 1; 0 <= al; al--) {
			var h1 = tl[al];
			if (h1.vx143.dw === dw) {
				for (; h1.firstChild;) a0.removeChild(h1, h1.firstChild);
				h1.vx143.eo = "[Redacted Message]";
				for (var tH = tI(f5.fi.tn(h1.vx143, f5.fi.tp(h1.vx143))), ct = 0; ct < tH.length; ct++) h1.appendChild(tH[ct]);
				tl.splice(al, 1)
			}
		}
	}
}

function ts() {
	var tt, tu, tv, tw, tx, ty, tz, u0, u1, u2, u3, u4, u5, u6, u7, u8, u9, uA, uB, uC, uD, uE, position, uF, uG, uH, uI, uJ, uK = 1,
		n2 = 1,
		uL = "";
	var leaderboardHasChanged = true;
	this.playerPos = o.co;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => nk[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(nk[o.co]);
	}

	function uO() {
		tz.clearRect(0, 0, tt, tr),
			tz.fillStyle = uJ ? hM.uR : hM.uS,
			tz.fillRect(0, 0, tt, u4),
			tz.fillStyle = hM.ka,
			tz.fillRect(0, u4, tt, tr - u4);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			nk[o.co]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) uE = -1;
		if (__fx.leaderboardFilter.enabled && uE >= __fx.leaderboardFilter.filteredLeaderboard.length) uE = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) uT(ownClanIndex - position, hM.uU);
			})() :
			(playerPos >= position && uT(playerPos - position, hM.uU),
				0 !== nk[o.co] && 0 === position && uT(0, hM.uV))
		),
		-1 !== uE && uT(uE, hM.kb),
			tz.fillStyle = hM.ka,
			//console.log("drawing", uE),
			tz.clearRect(0, tr - __fx.leaderboardFilter.tabBarOffset, tt, __fx.leaderboardFilter.tabBarOffset);
		tz.fillRect(0, tr - __fx.leaderboardFilter.tabBarOffset, tt, __fx.leaderboardFilter.tabBarOffset);
		tz.fillStyle = hM.hX,
			tz.fillRect(0, u4, tt, 1),
			tz.fillRect(0, tr - __fx.leaderboardFilter.tabBarOffset, tt, 1),
			__fx.leaderboardFilter.drawTabs(tz, tt, tr - __fx.leaderboardFilter.tabBarOffset, hM.uU),
			tz.fillRect(0, 0, tt, h4.kx),
			tz.fillRect(0, 0, h4.kx, tr),
			tz.fillRect(tt - h4.kx, 0, h4.kx, tr),
			tz.fillRect(0, tr - h4.kx, tt, h4.kx), tz.font = tu, w.bc.textBaseline(tz, 1), w.bc.textAlign(tz, 1), tz.fillText(uL, Math.floor((tt + u4 - 22) / 2), Math.floor(u2 + tv / 2));
		__fx.playerList.drawButton(tz, 12, 12, u4 - 22);
		var ct, eR = playerPos < position + tx - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) eR = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - tx)
				position = (rivalsCount > tx ? rivalsCount : tx) - tx;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < tx; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, eF.fQ[repId], eF.nF[repId], eF.iW[repId]]);
					eF.fQ[repId] = rivalsEntry.territory;
					eF.nF[repId] = "[" + rivalsEntry.clan + "]";
					eF.iW[repId] = 0;
				}
				for (tz.font = tw, w.bc.textAlign(tz, 0), ct = tx - eR; 0 <= ct; ct--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[ct + position];
					if (rivalsEntryLeft !== undefined)
						uW(rivalsEntryLeft.representativeId), uX(ct, ct + position, rivalsEntryLeft.representativeId);
				}
				for (w.bc.textAlign(tz, 2), ct = tx - eR; 0 <= ct; ct--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[ct + position];
					if (rivalsEntryRight !== undefined)
						uW(rivalsEntryRight.representativeId), uY(ct, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					eF.fQ[entry[0]] = entry[1];
					eF.nF[entry[0]] = entry[2];
					eF.iW[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - tx)
				position = (result.length > tx ? result.length : tx) - tx;
			//if (position >= result.length) position = result.length - 1;
			for (tz.font = tw, w.bc.textAlign(tz, 0), ct = tx - eR; 0 <= ct; ct--) {
				const pos = result[ct + position];
				if (pos !== undefined)
					uW(fR[pos]), uX(ct, pos, fR[pos]);
			}
			for (w.bc.textAlign(tz, 2), ct = tx - eR; 0 <= ct; ct--) {
				const pos = result[ct + position];
				if (pos !== undefined)
					uW(fR[pos]), uY(ct, fR[pos]);
			}
		} else {
			for (tz.font = tw, w.bc.textAlign(tz, 0), ct = tx - eR; 0 <= ct; ct--)
				uW(fR[ct + position]), uX(ct, ct + position, fR[ct + position]);
			for (w.bc.textAlign(tz, 2), ct = tx - eR; 0 <= ct; ct--)
				uW(fR[ct + position]), uY(ct, fR[ct + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == eR && (uW(o.co), w.bc.textAlign(tz, 0), uX(tx - 1, nk[o.co], o.co), w.bc.textAlign(tz, 2), uY(tx - 1, o.co)), 0 === position && (eR = .7 * u5 / kc.get(4).height, tz.setTransform(eR, 0, 0, eR,
			Math.floor(u6 + .58 * u5 + .5 * eR * kc.get(4).width), Math.floor(u2 + tv + .4 * u5)), tz.imageSmoothingEnabled = !0, tz.drawImage(kc.get(4), -Math.floor(kc.get(4).width / 2), -Math.floor(kc.get(4).height / 2)), tz.setTransform(1,
			0, 0, 1, 0, 0))
	}

	function uW(player) {
		o.fT && (tz.fillStyle = bN.ua[bN.ub[player]])
	}

	function uT(al, uc) {
		tz.fillStyle = uc, al = tx - 1 < al ? tx - 1 : al;
		uc = Math.floor((al === tx - 1 ? 2 : 0 === al ? 1.15 : 1) * u5), uc = al === tx - 2 ? Math.floor(u4 + 9.15 * u5) - Math.floor(u4 + 8.15 * u5) : uc;
		tz.fillRect(0, Math.floor(u4 + (al + (0 === al ? 0 : .15)) * u5), tt, uc)
	}

	function uX(e1, g7, al) {
		tz.fillText(uA[g7], u6, Math.floor(u2 + tv + (e1 + .5) * u5)), 1 === eF.iW[al] && (tz.font = "italic " + tw);
		g7 = Math.floor(u2 + tv + (e1 + .5) * u5);
		tz.fillText(eF.nF[al], u7, g7), 0 !== eF.iW[al] && (tz.font = tw), al < o.cF && 2 !== eF.iW[al] || tz.fillRect(u7, g7 + .35 * uK, u9[al], Math.max(1, .1 * uK))
	}

	function uY(e1, al) {
		tz.fillText(eF.fQ[al], u8, Math.floor(u2 + tv + (e1 + .5) * u5))
	}
	this.a4 = function() {
		var al;
		for (a0.aw.ax[0] = 0, uI = uH = uF = 0, uJ = uG = !1, uE = -1, tx = c3.h2.h3() ? 6 : 10, n2 = (position = 0) === (n2 = a5.c0.data[11].value) ? 10 : 1 === n2 ? 5 : 1, uD = !1, uB = new Uint16Array(tx + 1), uC = new Uint32Array(tx + 1),
			u1 = o.bI, fR = new Uint16Array(u1), nk = new Uint16Array(u1), al = u1 - 1; 0 <= al; al--) fR[al] = al, nk[al] = al;
		this.resize(!0), u9 = new Uint16Array(o.bI);
		var uM = Math.floor(tt - u7 - u6 - u0);
		for (uA = new Array(o.bI), tz.font = tw, al = o.bI - 1; 0 <= al; al--) uA[al] = al + 1 + ".", eF.nF[al] = w.hZ.ha(eF.uN[al], tw, uM), u9[al] = Math.floor(tz.measureText(eF.nF[al]).width);
		uO()
	}, this.resize = function(a4) {
		if (tr = c3.h2.h3() ? (tt = Math.floor(.335 * c2.jd), Math.floor(tx * tt / 8)) : (tt = Math.floor(.27 * c2.jd), Math.floor(tx * tt / 10)), tt = Math.floor(.97 * tt), (ty = document.createElement("canvas")).width = tt, ty.height = tr, tz =
			ty.getContext("2d", {
				alpha: !0
			}), u2 = .025 * tt, tv = .16 * tt, u3 = 0 * tt, u4 = Math.floor(.45 * u2 + tv), u5 = (tr - tv - 2 * u2 - u3) / tx,
			ty.height = tr += u5, __fx.leaderboardFilter.tabBarOffset = Math.floor(u5 * 1.3), __fx.leaderboardFilter.verticalClickThreshold = tr - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = tt,
			tu = w.bc.hG(1, Math.floor(.55 * tv)), uK = Math.floor((c3.h2.h3() ? .67 : .72) * u5), tw = w.bc.hG(0, uK), tz.font = tw, u6 = Math.floor(.04 * tt), u7 = Math.floor((c3.h2.h3() ? .195 : .18) * tt), u0 = Math.floor(tz.measureText(
				"00920600").width), tz.font = tu, u8 = tt - u6, !a4) {
			tz.font = tw;
			for (var al = o.bI - 1; 0 <= al; al--) u9[al] = Math.floor(tz.measureText(eF.nF[al]).width);
			uO()
		}
		uL = w.hZ.ha(L(54), tu, .96 * tt)
	}, this.uP = function() {
		return tt
	}, this.kl = function(m3, uQ) {
		(uQ || uD && (m3 || dY.hw() % n2 == 0)) && (uD = !1, uO())
	}, this.da = function() {
		! function() {
			for (var ct = u1 - 1; 0 <= ct; ct--) 0 === eF.hu[fR[ct]] && ! function(ct) {
				var uj = fR[ct];
				u1--;
				for (var al = ct; al < u1; al++) fR[al] = fR[al + 1], nk[fR[al]] = al;
				fR[u1] = uj, nk[fR[u1]] = u1
			}(ct)
		}();
		for (var uh, oO = u1 - 1, ct = 0; ct < oO; ct++) eF.fQ[fR[ct]] < eF.fQ[fR[ct + 1]] && (uh = fR[ct], fR[ct] = fR[ct + 1], fR[ct + 1] = uh, nk[fR[ct]] = ct, nk[fR[ct + 1]] = ct + 1);
		! function() {
			for (var hB = uD, eR = (uD = !0, nk[o.co] >= tx - 1 ? tx - 2 : tx - 1), al = eR; 0 <= al; al--)
				if (uB[al] !== fR[al] || uC[al] !== eF.fQ[fR[al]]) return;
			(eR != tx - 2 || uB[tx] === nk[o.co] && uC[tx] === eF.fQ[o.co]) && (uD = hB)
		}();
		for (var al = tx - 1; 0 <= al; al--) uB[al] = fR[al], uC[al] = eF.fQ[fR[al]];
		uB[tx] = nk[o.co], uC[tx] = eF.fQ[o.co];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.h6 = function(bi, bj) {
		if (uk(bi, bj)) {
			if (__fx.utils.isPointInRectangle(bi, bj, h4.gap + 12, h4.gap + 12, u4 - 22, u4 - 22)) __fx.playerList.display(eF.uN);
			else {
				if (bj - h4.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(bi - h4.gap);
				bi = um(bj);
				0 <= bi ? (uF = dY.dX, uG = !0, uH = uI = bi, dE.un() && (bi = uo(-1, uI, tx), uE !== (bi = bi === tx ? -1 : bi)) && (uE = bi, uO(), dY.dk = !0)) : (uJ && (uJ = !1, uO(), dY.dk = !0), a0.a1(10, 0, new up({
					uq: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		uO(), dY.dk = !0
	};

	function um(bj) {
		return (bj -= h4.gap + u4) < 0 ? Math.floor(bj / u5) - 1 : bj < (tx - 1) * u5 ? Math.floor(bj / u5) : bj < tr - u4 ? tx - 1 : (bj -= tr - u4, tx + Math.floor(bj / u5))
	}

	function uk(bi, bj) {
		return bi >= h4.gap && bi < h4.gap + tt && bj >= h4.gap && bj < h4.gap + tr
	}
	this.hA = function(bi, bj) {
		var hB, ul;
		if (__fx.utils.isPointInRectangle(bi, bj, h4.gap + 12, h4.gap + 12, u4 - 22, u4 - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(bi, bj, h4.gap, h4.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), bi - h4.gap)) return ul = um(bj), bi = uk(bi, bj), bj = !(!(ul < 0 && bi) || dE.un()), uG ? (hB = position, (position = uo(0, position += uH - ul, o.bI - tx)) !== hB ? (uJ = bj, ul = uo(-1,
			uH = ul, tx), uE = ul = ul !== tx && bi ? ul : -1, uO(), dY.dk = !0) : uJ !== bj && (uJ = bj, uO(), dY.dk = !0), !0) : (ul = (ul = uo(-1, ul, tx)) === tx || !bi || dE.un() ? -1 : ul, (uE !== ul || uJ !== bj) && (uE = ul, uJ =
			bj, uO(), dY.dk = !0))
	}, this.hC = function(bi, bj) {
		if (!uG) return !1;
		uG = !1;
		var ul = um(bj);
		var isEmptySpace = false;
		return dE.un() && -1 !== uE && (uE = -1, uO(), dY.dk = !0), dY.dX - uF < 350 && uI === ul && -1 !== (ul = (ul = uo(-1, ul, tx)) !== tx && uk(bi, bj) ? ul : -1) && (bi = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[ul + position] === undefined, __fx.leaderboardFilter.rivalsData[ul + position]?.representativeId ?? o.co) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), fR[__fx.leaderboardFilter.filteredLeaderboard[ul + position] ?? (isEmptySpace = true, nk[o.co])]) : fR[ul + position]),
			ul === tx - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : nk[o.co]) >=
			position + tx - 1 && (bi = o.co), !isEmptySpace && o.fT && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(bi, eF.uN, o.kg), 0 === eF.hu[bi] || isEmptySpace || o.db && !o.kg && !o.ke && bi !== o
			.co || ut.uu(bi, 800, !1, 0)), !0
	}, this.q9 = function(bi, bj, deltaY) {
		var uv;
		return !(uG || o.kr || (uv = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !uk(bi, bj)) || (bi = (bi = uo(-1, um(bj), tx)) === tx || dE.un() ? -1 : bi, 0 < deltaY ? position < o.bI - tx && (position += Math.min(o.bI - tx - position,
			uv), uE = bi, uO(), dY.dk = !0) : 0 < position && (position -= Math.min(position, uv), uE = bi, uO(), dY.dk = !0), 0))
	}, this.hJ = function() {
		hL.drawImage(ty, h4.gap, h4.gap)
	}
}

function lo() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.lt = null
}

function uw() {
	this.fF = new ux, this.uy = new uz, this.v0 = new v1, this.a4 = function() {
		this.fF.a4()
	}
}

function v2() {
	this.L84 = ["Custom Scenario", "Back", "⚔️ Play", "Map", "Settings", "Player Count", "Game Mode", "Colors", "Random", "Customized", "Bot Difficulty", "Uniform", "Mixed", "Team dependent", "Clustered", "Player Names", "Kingdom Names",
		"Simple Names", "Additional Income", "Default", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Adjust", "Options", "My Color", "Territory", "Income",
		"Growth", "Numbers", "Statistics", "Quit Game", "More", "Ship launched!", "Ship intercepted!", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File",
		"Map Name", "Preview", "Incoming Boat!", "Incoming Ship!", "Replay Error", "Warning", "Loading...", "LEADERBOARD", "You earned {10} gold!", "{0} earned {11} gold!", "Clan Chart", "🛠️ Options",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Refresh", "Public Profile",
		"🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ",
		"Gold Transfer", "Send", "Confirm", "Cancel", "Account Name", "Copy", "Search", "Password", "Show", "Hide", "Request New Password", "Security Tip",
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
		"Join Territorial.io on Patreon:", "Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "Activated", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale",
		"Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "White Arena", "Black Arena", "Island", "Mountains 1",
		"Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2",
		"British Isles", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct",
		"Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Team", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Type your message here...", "Team {0}", "Team {0} won the game!", "🛠️ Chart Options", "Search Terms",
		"Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Send gold only to trusted accounts!",
		"second played", "seconds played", "You are leaving Territorial.io.", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Account Recovery", "Request Email", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Humans",
		"Players", "Bots", "Spectators", "Threshold", "Percentage", "Time", "Contest", "1v1", "Zombie", "Chat", "Close {button}", "Ready", "Next Game", "Admin Election", "Blockchain", "Clan Leader Election", "📜 Logs", "Very Easy", "Easy",
		"Hard", "Very Hard", "Impossible", "📰 Propaganda", "Links", "Propaganda Text", "Launch Campaign", "Gold Investment", "Launch", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "Lobby", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black",
		"Propaganda", "Report Abuse", "Loading", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "🔑 My Account", "📈 Clan Charts", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings",
		"Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Votes",
		"Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "Spawning", "Manual Spawn", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer",
		"Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down",
		"Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "{0} defeated {1}!", "You are leaving Territorial.io!", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed",
		"Selectable Name", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.",
		"You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention"
	]
}

function v3() {
	this.a4 = function() {
		8 === o.fW && cp.v4()
	}, this.v5 = function(v6) {
		var elo = o.data.elo,
			v7 = (elo[v6] - elo[1 - v6]) / 10,
			v7 = 8 / (1 + Math.pow(2, v7 / 32)),
			v7 = Math.floor(10 * v7 + .5),
			v9 = elo[v6] + v7,
			vA = this.vB(v9),
			elo = this.vB(elo[1 - v6] - v7),
			v7 = (0 === v6 ? cp.vD(vA, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : cp.vD(elo, vA, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), v9 * ac.sqrt(v9) >> 8),
			elo = ((1 + o.vG) * v7 / 100).toFixed(2);
		v6 === o.co ? cp.qE(640, L(55, [elo]), 40, 0, hM.hX, hM.hN, -1, !1) : cp.qE(640, L(56, [eF.nF[v6], elo]), 40, 0, hM.hX, hM.hN, -1, !1)
	}, this.vB = function(elo) {
		return 16e3 === (elo = ac.ad(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function vH() {
	var hz, i0, i1, i2, vI = 0,
		vJ = 0;

	function vN() {
		return Math.pow(Math.pow(i1 - hz, 2) + Math.pow(i2 - i0, 2), .5)
	}

	function vL(aY) {
		hz = c2.je * aY.touches[0].clientX, i0 = c2.je * aY.touches[0].clientY, i1 = c2.je * aY.touches[1].clientX, i2 = c2.je * aY.touches[1].clientY
	}
	this.vK = function(aY) {
		return 1 < aY.touches.length ? (vJ = dY.dX, vI = 3, vL(aY), o4.b1(), !0) : (vI = 0, !1)
	}, this.vM = function(aY) {
		var mI, vO, vP;
		return 0 !== o.de && 1 < aY.touches.length && (vI = Math.max(vI - 1, 0), ut.oO() && (mI = vN(), vL(aY), aY = vN(), vO = Math.floor((hz + i1) / 2), vP = Math.floor((i0 + i2) / 2), vQ.vR(vO, vP, Math.max(.125, aY) / Math.max(.125, mI)), dY
			.dk = !0), !0)
	}, this.vS = function() {
		var bi, bj;
		return !!(vI && (vI = 0, dY.dX < vJ + 500)) && (bi = (hz + i1) / 2, bj = (i0 + i2) / 2, o4.vT(bi, bj), o4.click(bi, bj, !0) && (dY.dk = !0), !0)
	}
}

function vU() {
	function vl() {
		var id = oV.oX(3);
		return 0 === id ? {
			id: id,
			dw: oV.oX(30),
			eo: f5.vn.fM(fE.v0.fq(7))
		} : 1 === id ? {
			id: id,
			dw: oV.oX(30),
			f7: oV.oX(3),
			value: oV.oX(30),
			target: oV.oX(30)
		} : 2 === id ? {
			id: id,
			dw: oV.oX(30),
			f7: oV.oX(3)
		} : 3 === id ? {
			id: id,
			dw: oV.oX(30),
			f7: oV.oX(3),
			value: oV.oX(4),
			target: oV.oX(30)
		} : 4 === id ? {
			id: id,
			dw: oV.oX(30),
			f7: oV.oX(3),
			target: oV.oX(30)
		} : 5 === id ? {
			id: id,
			f7: oV.oX(6)
		} : 6 === id ? {
			id: id,
			value: oV.oX(17)
		} : null
	}
	this.ow = function(lx) {
		lv.lw.lx = lx, lv.lw.a4(oV.oX(30), oV.oX(30), oV.oX(5))
	}, this.oe = function(lx) {
		if (lx !== f2.aw.vV) f2.aw.close(lx, 3239);
		else if (6 !== aB.ox()) f2.aw.close(lx, 3271);
		else {
			f5.a4();
			for (var al = 0; al < 4; al++) {
				var le = f5.aw.lf[al],
					playerCount = (le.vW = oV.oX(10), le.fo = oV.oX(6), le.mapSeed = oV.oX(14), le.lh = oV.oX(4), le.vX = oV.oX(6), le.vY = oV.oX(14), le.vZ = oV.oX(4), le.lp = oV.oX(1), le.va = oV.oX(12), le.spawningSeed = oV.oX(14), oV.oX(16));
				f5.fB.g2[al] = oV.oX(16);
				for (var ct = 0; ct < playerCount; ct++) f5.fB.g4(al, oV.oX(30), fE.v0.fq(5), oV.oX(4), oV.oX(30), oV.oX(7), oV.oX(16), oV.oX(18), oV.oX(11), oV.oX(12))
			}
			a0.a1(29), f5.aw.vb(!0)
		}
	}, this.or = function(lx) {
		if (lx !== f2.aw.vV) f2.aw.close(lx, 3239);
		else if (f5.vc) {
			f5.aw.vd[0] = oV.oX(20), f5.aw.vd[1] = oV.oX(20);
			for (var ve = oV.oX(16), ct = 0; ct < ve; ct++) {
				var id = oV.oX(3);
				0 === id ? f5.fB.g4(oV.oX(2), oV.oX(30), fE.v0.fq(5), 0, 1234566, 127, 0, oV.oX(18), 0, oV.oX(12)) : 1 === id ? f5.fB.gY(oV.oX(16), oV.oX(2)) : 2 === id ? f5.fB.gU(oV.oX(16), oV.oX(2), oV.oX(2)) : 3 === id ? f5.fB.gX(oV.oX(16), oV
					.oX(2)) : 4 === id ? f5.fB.gK(oV.oX(16), oV.oX(2), oV.oX(4), oV.oX(30), oV.oX(7), oV.oX(16), oV.oX(11), oV.oX(18)) : 5 === id && f5.fB.gL(oV.oX(16), oV.oX(2), oV.oX(1))
			}
			for (var al = 0; al < 4; al++) {
				var le = f5.aw.lf[al];
				if (le.vW = oV.oX(10), le.vX = oV.oX(6), le.vY = oV.oX(14), le.vZ = oV.oX(4), 0 === le.vW) {
					if (le.p4 = oV.oX(10), le.ll = oV.oX(10), f5.vf.ld(al)) return;
					le.fo = oV.oX(6), le.mapSeed = oV.oX(14), le.lh = oV.oX(4), le.lp = oV.oX(1), le.va = oV.oX(12), le.spawningSeed = oV.oX(14), le.vg.push(le.vg[0]), le.vg.shift()
				}
			}
			f5.aw.vh()
		} else f2.aw.close(lx, 3251)
	}, this.os = function(lx) {
		if (lx !== f2.aw.vV) f2.aw.close(lx, 3272);
		else if (f5.vc) {
			for (var gZ = oV.oX(4), le = f5.aw.lf[gZ], vi = le.vi, vk = (le.vj = oV.oX(20), oV.oX(6)), al = 0; al < vk; al++) {
				var tj = vl();
				f5.gS.ti(tj), vi.push(tj)
			}
			f5.aw.vm(gZ)
		} else f2.aw.close(lx, 3273)
	}, this.ot = function(lx) {
		lx !== f2.aw.vV ? f2.aw.close(lx, 3276) : f5.vc ? f5.message.f6(vl()) : f2.aw.close(lx, 3277)
	}
}

function fp() {
	var ba, bb, vo;

	function w5(rF, h1, w3, vr, bh) {
		h1 = w4(rF, h1 + 1 + 2 * vr & 3);
		! function(rF, rG) {
			return 1 < Math.abs(rF % ba - rG % ba) || 1 < Math.abs(w8(rF) - w8(rG))
		}(rF, h1) && 0 === bh[h1 << 2] && (bh[h1 << 2] = w3)
	}

	function w8(i5) {
		return Math.floor((i5 + .5) / ba) % bb
	}

	function w4(i5, h1) {
		return i5 + vo[h1]
	}
	this.fq = function(e0) {
		var al, nH, bw, vp, vs = oV;
		for (fE.fF.sc(fE.fF.sd(e0)), p.rs.ru[p.fo].ba = p.eP = ba = vs.oX(12), p.rs.ru[p.fo].bb = p.eQ = bb = vs.oX(12), vo = [-ba, -1, ba, 1], p.q = document.createElement("canvas"), p.q.width = p.eP, p.q.height = p.eQ, p.vw = p.q.getContext(
				"2d", {
					alpha: !1
				}), p.vx = p.i8 = null, p.vx = p.vw.getImageData(0, 0, p.eP, p.eQ), p.i8 = p.vx.data, w.x.g0(p.i8), bw = vs.oX(12), nH = vs.oX(5), vp = vt(ba * bb - 1), al = 0; al < bw; al++) ! function(cX, i5, vq, vr) {
			var al, h1, vs = oV,
				bh = p.i8,
				vz = i5,
				w0 = i5,
				w1 = 0,
				w2 = 1 + vq,
				w3 = 2 - vq;
			for (bh[i5 << 2] = w2, al = 0; al < cX; al++) h1 = vs.oX(2), i5 = w4(i5, h1), bh[i5 << 2] === w2 ? w1 % 2 == 1 && w5(w0, w1 + 2 * vr + 3, w3, vr, bh) : bh[i5 << 2] = w2, w5(i5, h1, w3, vr, bh), w5(w0, h1, w3, vr, bh), w0 = i5,
				w1 = h1;
			w4(i5, 0) === vz ? (w5(i5, 0, w3, vr, bh), w5(vz, 0, w3, vr, bh)) : w4(i5, 1) === vz && (w5(i5, 0, w3, vr, bh), w5(vz, 2, w3, vr, bh));
			0 === cX && (w5(vz, 0, w3, vr, bh), w5(vz, 2, w3, vr, bh))
		}(vs.oX(nH), vs.oX(vp), 1 === vs.oX(1), 1 === vs.oX(1));
		var bi, bj, bP, w9, wA, wB, bh = p.i8,
			wC = !0,
			wD = p.rs.ru[p.fo].wD,
			wE = p.rs.ru[p.fo].wE;
		for (bj = 0; bj < bb; bj++)
			for (w9 = !0, wA = wC, bi = wB = 0; bi < ba; bi++) bP = 4 * bj * ba + 4 * bi, wB <= bi && 0 < bh[bP] && (wA = 2 === bh[bP], w9) && (w9 = !1, wA !== wC) ? (wC = wA, wB = bi + 1, bi = -1) : (wA ? (bh[bP] = wE[0], bh[1 + bP] = wE[1], bh[
				2 + bP] = wE[2]) : (bh[bP] = wD[0], bh[1 + bP] = wD[1], bh[2 + bP] = wD[2]), bh[3 + bP] = 255);
		p.vw.putImageData(p.vx, 0, 0), p.qr = !0, p.vy.a4(), dY.dk = !0
	}
}

function wF() {
	var wK, wL, wG = document.createElement("div"),
		wH = document.createElement("div"),
		wI = 0,
		wJ = 0;
	this.show = function(bi, bj, e0, wM, wN, b3) {
			if (wI) {
				if (!wM) return;
				this.b1()
			}
			bi === bj && -1 === bi ? (bi = wK, bj = wL) : (wK = bi, wL = bj);
			var wO = Math.floor(w.bc.jc(.018)),
				wN = (bi = Math.max(wO + 2, bi), wN || (wJ = wM), wI = 1, c2.ba / c2.je),
				wM = (wG.style.whiteSpace = "pre", wG.textContent = e0, w.bc.jV(wG, 5), wG.style.font = w.bc.hG(0, w.bc.jc(.015)), wG.style.padding = "0.3em 0.6em", wG.style.left = bi + "px", wG.style.top = "0px", document.body.appendChild(wG), bi +
					wG.offsetWidth - wN),
				e0 = (0 < wM && (bi -= wM, bi = Math.max(wO + 1, bi), wG.style.left = bi + "px", bi < wO + 2) && (wG.style.whiteSpace = "pre-wrap"), wG.offsetHeight);
			wG.style.top = bj - e0 + wJ * h4.jX + "px", bi -= wO, wH.style.backgroundColor = w.color.wR(b3 >> 12 << 2, (b3 >> 6 & 63) << 2, (63 & b3) << 2), wH.style.left = bi + "px", wH.style.top = wG.style.top, wH.style.width = wO + "px", wH.style
				.height = e0 + "px", w.bc.jV(wH, 4), w.bc.jV(wH, 8), w.bc.jV(wH, 2), document.body.appendChild(wH)
		}, this.b1 = function(wS) {
			if (wI) {
				if (wS && wJ) return 0;
				wI = 0, a0.removeChild(document.body, wG), a0.removeChild(document.body, wH)
			}
			return 1
		}, wG.style.position = "absolute", wG.style.backgroundColor = hM.ka, wG.style.color = hM.hX, wG.style.pointerEvents = "none", wG.style.zIndex = "5", wG.style.maxWidth = "100%", wH.style.position = "absolute", wH.style.color = hM.hX, wH.style
		.pointerEvents = "none", wH.style.zIndex = "5"
}

function wT() {
	var wU, wV, ba, bi, bj, wW, wX;
	this.a4 = function() {
		wU = new Array(2), wV = new Array(2), this.wY = !1, wX = wW = na = nY = 0, nZ = 1, this.resize()
	}, this.resize = function() {
		ba = (ba = Math.floor((c3.h2.h3() ? .072 : .0502) * c2.jd)) < 8 ? 8 : ba;
		for (var al = 1; 0 <= al; al--) wU[al] = document.createElement("canvas"), wU[al].width = ba, wU[al].height = ba, wV[al] = wU[al].getContext("2d", {
			alpha: !0
		});
		this.wZ(),
			function() {
				for (var ws = Math.floor(1 + ba / 20), al = 1; 0 <= al; al--) wV[al].clearRect(0, 0, ba, ba), wV[al].fillStyle = hM.wt, wV[al].beginPath(), wV[al].arc(ba / 2, ba / 2, ba / 2 - ws, 0, 2 * Math.PI), wV[al].fill(), wV[al].lineWidth =
					ws, wV[al].fillStyle = hM.hX, wV[al].strokeStyle = hM.hX, wV[al].beginPath(), wV[al].arc(ba / 2, ba / 2, ba / 2 - ws, 0, 2 * Math.PI), wV[al].stroke(), wu(wV[al], 0, 0, ba, ws, .3, 0 === al)
			}()
	}, this.wd = function() {
		return -nY / nZ
	}, this.we = function() {
		return -na / nZ
	}, this.wf = function(dO, vO) {
		nY = nZ * dO - vO
	}, this.wg = function(dP, vP) {
		na = nZ * dP - vP
	}, this.h6 = function(wc, r6) {
		return o.kr || ! function(wc, r6) {
			return Math.pow(wc - (bi + ba / 2), 2) + Math.pow(r6 - (bj + ba / 2), 2) < ba * ba / 4 || Math.pow(wc - (bi + ba / 2), 2) + Math.pow(r6 - (bj + 2 * ba), 2) < ba * ba / 4
		}(wc, r6) || a5.c0.data[8].value ? (ut.oO() && (this.wY = !0, wW = wc, wX = r6), !1) : r6 < bj + 1.25 * ba ? this.q9(Math.floor(c2.ba / 2), Math.floor(c2.bb / 2), -200) : this.q9(Math.floor(c2.ba / 2), Math.floor(c2.bb / 2), 200)
	}, this.hA = function(wc, r6) {
		var wh, wi, ea, eb;
		return !ut.oO() || (wh = nY, wi = na, nY += ea = wW - wc, na += eb = wX - r6, cr.hA(ea, eb), this.wj(), wW = wc, wX = r6, wh !== nY) || wi !== na
	}, this.q9 = function(eD, eI, deltaY) {
		var dG;
		if (ut.oO()) {
			if (0 < deltaY) dG = (dG = 500 / (500 + deltaY)) < .5 ? .5 : dG;
			else {
				if (!(deltaY < 0)) return !1;
				dG = 2 < (dG = (500 - deltaY) / 500) ? 2 : dG
			}
			this.vR(eD, eI, dG), dY.dk = !0
		}
		return !0
	}, this.vR = function(bi, bj, hd) {
		var hc;
		hd = hc = (hc = 1024 < (hc = hd) * nZ ? 1024 / nZ : hc) * nZ < .125 ? .125 / nZ : hc, cr.zoom(hd, bi, bj),
			function(hc, eD, eI) {
				nZ *= hc, nY = (nY + eD) * hc - eD, na = (na + eI) * hc - eI, vQ.wj()
			}(hd, bi, bj)
	}, this.wj = function() {
		var wm = c2.ba / 16,
			wn = 0,
			wo = c2.bb / 16,
			wp = 0;
		nY < wm - c2.ba && (wn = -c2.ba + wm - nY), nY > nZ * p.eP - wm && (wn = nZ * p.eP - wm - nY), na < wo - c2.bb && (wp = -c2.bb + wo - na), nZ * p.eQ - wo < na && (wp = nZ * p.eQ - wo - na), nY += wn, na += wp, wq.wr(), cr.nO(wn, wp)
	}, this.wZ = function() {
		bi = c2.ba - ba - h4.gap, bj = Math.floor(c2.bb / 2 - 1.25 * ba)
	}, this.hJ = function() {
		a5.c0.data[8].value || (hL.drawImage(wU[0], bi, bj), hL.drawImage(wU[1], bi, Math.floor(bj + 3 * ba / 2)))
	}
}

function wv() {
	this.dX = dY.dX, this.ab = 0, this.dZ = 0, this.ww = 0, this.wx = null, this.wy = 7, this.wz = 0, this.a4 = function() {
		this.ww = 0, this.wx = [], this.ab = 0, this.dZ = 0
	}, this.p6 = function(oU) {
		if (o.db) this.x0(oU);
		else if (this.wx.push(oU), 2 === o.de) {
			for (var al = 0; al < this.wx.length; al++) pH.pI.da(this.wx[al]);
			this.wx = []
		}
	}, this.x0 = function(oU) {
		2 !== o.de && (pH.pI.da(oU), a2.da(), hx.x0(this.ww), this.ww === o.x1 ? (o.qm.da(), this.ww = 0, this.ab = 0, this.dZ = 0, this.dX = dY.dX) : (this.ww++, cr.nI(), cr.kl(!0), dj.render()))
	}, this.da = function() {
		c2.da(), o.db ? (dY.dk = hx.x0(-1) || dY.dk, dc()) : (0 !== this.ab || dY.dX >= this.dX && (this.dX += dY.dd * Math.floor(1 + (dY.dX - this.dX) / dY.dd), 2 === o.de ? dh() : this.x2(), this.ab++, 27 < dY.dX - this.wz)) && this.x3(), dm(),
			dY.dk && (dY.dk = !1, dn()), this.wz = dY.dX
	}, this.x3 = function() {
		dY.dk = !0, dl(), this.ab = 0
	}, this.x2 = function() {
		var x4, al;
		if (this.dZ !== 7 * this.ww) di(), dj.render();
		else {
			x4 = !1;
			loop: for (; this.x5() && (x4 = !0, di(), 2 !== o.de) && 0 < this.wx.length;)
				for (al = this.wy - 2; 0 <= al; al--)
					if (di(), 2 === o.de) break loop;
			x4 ? dj.render() : (dh(), dj.x6())
		}
	}, this.x5 = function() {
		return 0 < this.wx.length && (this.ww++, pH.pI.da(this.wx[0]), this.wx.shift(), !0)
	}
}

function x7(data) {
	var x8, x9, xA, xB, xC, xD, xE, colors, xF, xG, xH = 0,
		xI = 0,
		xJ = !1,
		xK = !1,
		xL = [1, 5, 60, 240, 1440, 10080, 43200];

	function y0(eD, eI) {
		! function(eD, eI) {
			return x9 < eD && eD < x9 + xB && xA < eI && eI < xA + xC
		}(xH = eD, xI = eI) ? (xJ && (dY.dk = !0), xJ = !1) : (xJ = !0, dY.dk = !0)
	}
	this.show = function() {
		xK = a5.c0.data[127].value, x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize();
		var b3 = c2.je,
			xX = x8.xY(),
			xZ = b3 * xX.xa,
			b3 = b3 * xX.xb;
		xD = w.bc.jf(.06), xE = w.bc.jf(.04), x9 = w.bc.jf(.06), xA = b3 + xD, xB = c2.ba - x9 - xE, xC = xZ + b3 - xA - xE
	}, this.hJ = function() {
		x8.hJ(),
			function() {
				var al, xT, v, bi, ct, ak = data.data,
					xf = 1,
					xg = .125,
					xh = xK ? 65536 : 0;
				for (al = 0; al < ak.length; al++)
					for (xT = ak[al].xT, v = xT.length, xf = Math.max(v, xf), ct = 0; ct < v; ct++) xg = Math.max(xT[ct], xg), xh = Math.min(xT[ct], xh);
				var i0 = xA + xC,
					xi = xC / (xg - xh),
					xj = 1 / (xf - 1);
				for (hL.lineWidth = h4.kx, al = 0; al < ak.length; al++) {
					for (xT = ak[al].xT, v = xT.length, bi = x9, hL.beginPath(), hL.moveTo(bi + xB, i0 - xi * (xT[v - 1] - xh)), ct = v - 2; 0 <= ct; ct--) hL.lineTo(bi + xj * ct * xB, i0 - xi * (xT[ct] - xh));
					hL.strokeStyle = colors[al], hL.stroke()
				}(function(xh, xg, i0, xi) {
					hL.font = w.bc.hG(0, .25 * x9), w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 2), hL.fillStyle = colors[0];
					for (var bi = .92 * x9, al = 0; al < 3; al++) {
						var bV = xh + al * (xg - xh) / 2;
						hL.fillText((bV / 1e3).toFixed(3), bi, i0 - xi * (bV - xh))
					}
				})(xh, xg, i0, xi),
				function(xf) {
					var bj = xA + xC + .15 * xE;
					hL.font = w.bc.hG(0, Math.min(.4 * xE, .028 * c2.ba)), w.bc.textBaseline(hL, 0), w.bc.textAlign(hL, 2), hL.fillStyle = colors[0], hL.fillText(w.xR.xm(xF), x9 + xB, bj), w.bc.textAlign(hL, 0), hL.fillText(w.xR.xm(new Date(xG
						.getTime() - 6e4 * (xf - 1) * xL[data.xQ])), x9, bj)
				}(xf),
				function(xf, xh, xg) {
					if (xJ && !(xf < 2)) {
						for (var xx, ab = (xH - x9) / xB * (xf - 1), xn = Math.floor(ab), xo = Math.floor(1 + ab), xp = ab - xn, xq = 1e5, xr = -1, xs = -1, xt = xg - (xg - xh) * (xI - xA) / xC, ak = data.data, al = 0; al < ak.length; al++) {
							var xu, xT = ak[al].xT;
							xT.length <= xo || (xT = xT[xn] + xp * (xT[xo] - xT[xn]), (xu = Math.abs(xt - xT)) < xq && (xq = xu, xr = al, xs = xT))
						} - 1 !== xr && (xg = xA + xC - (xs - xh) / (xg - xh) * xC, hL.lineWidth = .5 * h4.kx, hL.strokeStyle = colors[xr], hL.beginPath(), hL.moveTo(x9, xg), hL.lineTo(xH, xg), hL.lineTo(xH, xA + xC), hL.stroke(), hL.beginPath(),
							hL.arc(xH, xg, .1 * x9, 0, 2 * Math.PI), hL.fillStyle = colors[xr], hL.fill(), xh = xA + xC + .15 * xE, w.bc.textAlign(hL, 1), xx = xf - 2 < ab ? (xx = xG.getTime() - 6e4 * xL[data.xQ], new Date(xx + (ab - (xf -
								2)) * (xF.getTime() - xx))) : new Date(xG.getTime() - 6e4 * (xf - ab - 1) * xL[data.xQ]), xf = w.xR.xm(xx), ab = w.bc.measureText(xf), xx = ac.ad(xH, x9 + .5 * ab, x9 + xB - .5 * ab), hL.fillStyle = w.color.wR(
								70, 50, 20), hL.fillRect(xx - .52 * ab, xA + xC, 1.04 * ab, .55 * xE), hL.fillStyle = colors[0], hL.fillText(xf, xx, xh), hL.font = w.bc.hG(0, .25 * x9), w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 2), xx =
							.92 * x9, xf = (xs / 1e3).toFixed(3), ab = w.bc.measureText(xf), xh = xx - 1.04 * ab, hL.fillStyle = w.color.wR(70, 50, 20), hL.fillRect(xh, xg - .1625 * x9, x9 - xh, .275 * x9), hL.fillStyle = colors[xr], hL
							.fillText(xf, xx, xg))
					}
				}(xf, xh, xg)
			}(), hL.lineWidth = h4.kx, hL.strokeStyle = hM.hX, hL.beginPath(), hL.moveTo(x9, xA), hL.lineTo(x9, xA + xC), hL.lineTo(x9 + xB, xA + xC), hL.stroke();
		var al, fontSize = .5 * xD,
			ak = (hL.font = w.bc.hG(0, fontSize), w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 0), data.data),
			bw = ak.length,
			bj = xA - .5 * xD,
			e0 = "";
		for (al = 0; al < bw; al++) e0 += ak[al].name + "  ";
		e0 = e0.trim();
		var hm = w.bc.measureText(e0),
			bi = .5 * (c2.ba - hm);
		for (c2.ba < hm && (bi = 0, hL.font = w.bc.hG(0, c2.ba / hm * fontSize)), al = 0; al < bw; al++) hL.fillStyle = colors[al], hL.fillText(ak[al].name, bi, bj), bi += w.bc.measureText(ak[al].name + "  ")
	}, this.h6 = function(eD, eI) {
		y0(eD, eI)
	}, this.hA = function(eD, eI) {
		y0(eD, eI)
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	};
	var al, hB, xU, bP, h1 = data.data,
		bw = h1.length,
		max = 1;
	for (al = 0; al < bw; al++) max = Math.max(max, h1[al].xT.length);
	for (al = 0; al < bw; al++)
		for (; h1[al].xT.length < max;) h1[al].xT.unshift(0);
	hB = new Date, xU = 6e4 * hB.getTimezoneOffset(), bP = hB.getTime() - xU, xF = new Date(bP), 6 === data.xQ ? function(hB, xU) {
		var xW = hB.getUTCFullYear(),
			hB = hB.getUTCMonth() + 1;
		xG = hB < 12 ? new Date(Date.UTC(xW, hB) - xU) : new Date(Date.UTC(xW + 1, 0) - xU)
	}(hB, xU) : (xU = 6e4 * xL[data.xQ], xG = data.xQ <= 4 ? new Date(bP + xU - hB.getTime() % xU) : new Date(bP + xU - (hB.getTime() + 2592e5) % xU)), bP = w.color, colors = [hM.hX, bP.wR(255, 0, 0), bP.wR(0, 200, 0), bP.wR(80, 80, 255), bP.wR(
		255, 255, 0), bP.wR(255, 0, 255), bP.wR(0, 255, 255), bP.wR(255, 140, 0), bP.wR(128, 128, 128), bP.wR(0, 255, 140)], x8 = new e(L(57) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.xQ] + ", " + w.xR.xS(xF), [new f("⬅️ " + L(1),
		function() {
			a0.a1(1)
		}), new f(L(58), function() {
		a0.a1(14)
	})], !1)
}

function y2() {
	this.y3 = new y4, this.qM = new y5, this.y6 = new y7, this.lw = new y8
}

function y4() {
	function yC(ak, bV, bP) {
		for (var al = 0; al < 256; al++) ak[al] = (ak[al] + (bV >> (al + bP) % 30 & 1)) % 256
	}
	this.da = function(y9, yA) {
		var ak = new Uint8Array(256);
		return function(ak, y9, yA) {
				var al, yF = 3 + (4 + y9) % 32768,
					yG = 12 + yA % 32768,
					yH = 17 + ((y9 & yA) + (y9 | yA) + y9) % 32768;
				for (al = 0; al < 256; al++) yF = 1 + yF * yG % yH, ak[al] = yF % 256
			}(ak, y9, yA), yC(ak, y9, 2), yC(ak, yA, 7),
			function(ak) {
				var al, bV, ab = 0;
				for (al = 0; al < 3e4; al++) bV = ak[ab], ak[ab] = (bV + al + ak[(ab + al) % 256]) % 256, ab = (bV + al + ab + (bV & ab)) % 256
			}(ak),
			function(ak) {
				var al, gm = 1,
					gn = 1;
				for (al = 0; al < 256; al += 2) gm = (1 + gm) * (ak[al] + 1) % 1073741824, gn = (1 + gn) * (ak[al + 1] + 1) % 1073741824;
				return [gm, gn]
			}(ak)
	}, this.yI = function(yJ, yK, yL, result) {
		for (var v = 1 << yJ, al = 0; al < v; al++)
			if (this.yM(al, yK, yL) === result) return al;
		return 0
	}, this.yM = function(yN, yK, yL) {
		for (var yO = yK + yN, yP = yL + yN, bV = yO + yP & 2147483647, ct = 1; ct <= 16; ct++) bV = (bV = (bV ^ bV >> ct) >>> 1 + (3 & yO)) * (7 + (1023 & (yO | yP))) & 1073741823, yP >>= 1 + (1 & (yO >>= 1 + (1 & (bV += 65535 & yP))));
		return bV &= 1073741823
	}
}

function yQ() {
	var yR, yS = new Uint8Array(5),
		yT = new Uint8Array(5);
	this.yU = new yV, this.a4 = function() {
		for (var bV = a5.c0.data[119].value, al = 0; al < yS.length; al++) yS[al] = (bV >> 2 * al) % 4
	}, this.yW = function() {
		yR = [L(59), "", L(60, [yX.yY[28]]), L(61, [yX.yY[26]]), L(62, [yX.yY[0]])], this.yU.a4()
	}, this.da = function() {
		this.yU.da()
	}, this.yZ = function(id) {
		1 < id && dE.dF() || ! function(ab) {
			if (3 === yS[ab] || 1 === yT[ab]) return;
			if (yT[ab] = 1, !(Math.random() < .6)) {
				yS[ab]++;
				for (var bV = 0, al = 0; al < yS.length; al++) bV += yS[al] << 2 * al;
				a5.a6.a7(119, bV)
			}
			return 1
		}(id) || cp.yb(yR[id])
	}
}

function yc() {
	this.yd = function() {
		a5.a6.ye(), a5.a6.yf(), f2.aw.close(0, 3255), 0 === c3.id ? c3.yg && c3.yg.clear() : 1 === c3.id ? c3.dI.saveString(199, "") : 2 === c3.id && c3.yh.postMessage("clear")
	}, this.yi = function() {
		2 === c3.id ? c3.yh.postMessage("showConsentForm") : 1 === c3.id && c3.dI.setState(7)
	}, this.yj = function() {
		this.setState(14)
	}, this.h3 = function() {
		return 1 === a5.c0.yk(2)
	}, this.yl = function() {
		a5.c0.ym(102, "")
	}, this.setState = function(iU) {
		1 === c3.id && 5 <= c3.c1 && c3.dI.setState(iU)
	}, this.yn = function() {
		var yo;
		1 === c3.id && 7 <= c3.c1 ? c3.dI.setState(5) : ((yo = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = yo.toString())
	}, this.rh = function() {
		0 !== c3.id && (1 === c3.id ? c3.dI.prepareAd("8646194357") : 2 === c3.id && (0 === c3.c1 ? c3.yh.postMessage("prepare ad 2904813909") : c3.yh.postMessage("loadAds 2904813909")))
	}, this.yp = function(hB) {
		return 0 !== c3.id && (1 === c3.id ? 12 <= c3.c1 && (c3.dI.presentAd(hB), !0) : 2 === c3.id && 0 !== c3.c1 && (c3.yh.postMessage("showAd"), !0))
	}, this.yq = function() {
		2 === c3.id && c3.c1 < 23 && a0.a1(4, 1, new st("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + yr.ys + "' target='_blank'>" + yr
			.ys + "</a>", !0, [new f("⬅️ " + L(1), function() {
				a0.a1(0)
			}, hM.yt)]))
	}
}

function yu() {
	var nz = 32,
		o0 = new Array(2);

	function bd(b3) {
		var bi, bj, eV, eb, ea, nx = nz,
			aW = w.bc.bd(nx, nx),
			be = w.bc.getContext(aW, !0),
			bf = w.bc.getImageData(be, nx, nx),
			bh = bf.data,
			cX = (nx >> 1) - .5,
			rX = Math.sqrt(cX * cX);
		for (bh.fill(255), bj = 0; bj < nx; bj++)
			for (bi = 0; bi < nx; bi++) ea = bi - cX, eb = bj - cX, eV = 4 * (bj * nx + bi), ea = 714 * (rX - Math.sqrt(ea * ea + eb * eb)) / rX, bh[2 + eV] = b3, bh[3 + eV] = 255 < ea ? 0 : ea;
		return be.putImageData(bf, 0, 0), aW
	}
	this.yv = -1, this.a4 = function() {
		this.yv = -1, o0[0] || (o0[0] = bd(255), o0[1] = bd(0))
	}, this.yw = function(be, hd, bi, bj, br, al) {
		w.cO.iV(o.co) && (be.setTransform(hd *= 4 / 3 * .625, 0, 0, hd, bi - (br *= 4 / 3), bj - br), be.drawImage(o0[+(e3.aw.yx[al] === this.yv)], 0, 0))
	}
}

function yy() {
	this.yz = 32, this.bi = 0, this.bj = 0, this.z0 = 0, this.z1 = 0, this.z2 = 4, this.z3 = null, this.z4 = new Int16Array(9), this.a4 = function() {
		this.z0 = 1 + ac.eB(p.eP - 1, this.yz), this.z1 = 1 + ac.eB(p.eQ - 1, this.yz), this.z3 = new Array(this.z0 * this.z1), w.x.z5(this.z3);
		var bi, bj, z4 = this.z4,
			ba = this.z0;
		for (bi = -1; bi <= 1; bi++)
			for (bj = -1; bj <= 1; bj++) z4[3 * (1 + bj) + 1 + bi] = bj * ba + bi
	}, this.z7 = function(z8, al) {
		return this.z3[al].push(z8), this.z3[al].length - 1
	}, this.z9 = function(zA, zB, zC) {
		var zD, zE, zB = eN.zF(zB),
			zC = eN.zF(zC);
		return zB === zC ? zA : (zD = this.z3[zB].pop(), this.z3[zB].length === zA ? this.z7(zD, zC) : (zE = this.z3[zB][zA], this.z3[zB][zA] = zD, e3.aw.zG[zD] = zA, this.z7(zE, zC)))
	}
}

function zH() {
	this.zI = function() {
		pF.lu(39), pF.pG(1, 0), pF.pG(6, 16), f2.zJ.zK(), f2.aw.send(0, pF.oU)
	}, this.zL = function(lx) {
		pF.lu(127), pF.pG(1, 0), pF.pG(6, 17), fE.fF.zO(a5.c0.data[105].value, 5), fE.fF.zO(a5.c0.data[106].value, 15), f2.aw.send(lx, pF.oU)
	}, this.zN = function() {
		pF.lu(97), pF.pG(1, 0), pF.pG(6, 18), fE.fF.zO(a5.c0.data[110].value, 15), f2.aw.send(0, pF.oU)
	}, this.zP = function(bZ) {
		var bw = bZ.e0.length;
		pF.lu(21 + 16 * bw), pF.pG(1, 0), pF.pG(6, 29), pF.pG(6, bZ.action), pF.pG(8, bw), gP.uy.zQ(bZ.e0), f2.aw.send(0, pF.oU)
	}, this.zR = function(g9, colors, zS, zT) {
		zU.a4(), zU.pG(1, 0), zU.pG(6, 16), zU.pG(20, Math.min(g9, 1e6));
		for (var al = 0; al < 11; al++)
			for (var ct = 0; ct < 3; ct++) zU.pG(8, colors[al][ct]);
		g9 = fI.data.fJ(zS.trim());
		zU.pG(8, -1 === g9 ? 255 : g9), gP.v0.a9(zT.trim().substring(0, 180), 8, zU), f2.aw.send(0, zU.zV())
	}, this.zW = function(data) {
		pF.lu(43), pF.pG(1, 0), pF.pG(6, 25), pF.pG(6, data.action), fE.fF.zO(data.dw, 5), f2.aw.send(0, pF.oU)
	}, this.zX = function(data) {
		pF.lu(75), pF.pG(1, 0), pF.pG(6, 27), pF.pG(6, data.action), fE.fF.zO(data.dw, 5), pF.pK(32, data.value), f2.aw.send(0, pF.oU)
	}
}

function zY(zZ, za, zb) {
	this.ao = document.createElement("div"), this.b8 = zZ;
	var zc = 0;
	this.resize = function(ze, zf) {
		var bw = zZ.length;
		if (!zb)
			for (var al = 1; al < bw; al++) w.bc.jV(zZ[al].button, 4);
		for (var zg = 0, al = 0; al < bw; al++) zg += zZ[al].button.offsetWidth;
		if (ze && (zc = ze.offsetWidth), zf && zg < zc)
			for (al = 0; al < bw; al++) zZ[al].button.style.width = (100 * zZ[al].button.offsetWidth / zg).toFixed(2) + "%";
		else
			for (al = 0; al < bw; al++) zZ[al].button.style.width = "auto";
		zf || this.resize(ze, 1)
	};
	var zd = this;
	zd.ao.style.height = zd.ao.style.maxHeight = "100%";
	for (var al = 0; al < zZ.length; al++) zZ[al].bQ(za), zZ[al].button.style.height = "100%", zZ[al].button.style.padding = "0.0em 0.9em", zZ[al].button.style.whiteSpace = "pre", zd.ao.appendChild(zZ[al].button)
}

function zh() {
	this.gD = 0, this.gE = null, this.fB = null, this.fi = null, this.aw = null, this.tX = null, this.tZ = null, this.message = null, this.vn = null, this.gS = null, this.gF = null, this.vf = new lc, this.vc = 0, this.zi = 0, this.a4 = function() {
		this.zi = dY.dX, this.gD = fE.fF.fG(a5.c0.data[105].value, 5), this.fB = new g1, this.fi = new zj, this.aw = new zk, this.tX = new zl, this.tZ = new zm, this.message = new zn, this.vn = new eh, this.gS = new tD, this.gF = new zo, this.aw
			.a4(), zp.a4(), this.vc = 1, c3.h2.setState(1), aB.setState(0)
	}, this.d1 = function() {
		this.gS && this.gS.d1(), this.gE = null, this.fB = null, this.fi = null, this.aw = null, this.tX = null, this.tZ = null, this.message = null, this.vn = null, this.gS = null, this.gF = null, this.vc = 0, zp.d1(), c3.h2.setState(0)
	}
}

function zq() {
	this.da = function(player) {
		return !!e3.zr.zs(player) && !(e3.aw.zt[player] >= Math.max(3 * ch.performance.e9, ar.zu[ar.cD[player]]) || !w.cO.iq(player, ar.zv[ar.cD[player]], 32, 0)) && (hx.zw() ? function(player) {
			var a02 = e3.fi.a03(),
				bw = a02.length;
			if (0 === bw) return !1;
			a02 = a02[eC.qY(bw)], bw = e3.aw.yx[a02];
			if (e3.fk.a04(player, bw)) return !1;
			return !! function(player, fh) {
				var fh = eN.s9(e3.aw.s5[fh]),
					eW = eN.eX(fh),
					fh = eN.eZ(fh),
					hz = eF.eG[player],
					i0 = eF.eJ[player],
					i1 = eF.eH[player],
					player = eF.eK[player],
					i1 = Math.max(eW - i1, hz - eW),
					hz = Math.max(fh - player, i0 - fh);
				return i1 < 100 && hz < 100
			}(player, a02) && !!e3.a06.a07(player, bw, 1) && (w.cO.jD(player), e3.aw.z7(player), !0)
		}(player) : !!(ch.zy.da(player) || ch.zz.da(player) || ch.a00.da(player)) && (function(player) {
			ix.a08[1] = 4, w.cO.jD(player), e3.aw.z7(player)
		}(player), !0))
	}
}

function a09(a0A) {
	var a0B = document.createElement("div"),
		a0C = document.createElement("div");
	this.hI = function() {
			a0C.textContent = "", f5.tZ.a0D && f5.tZ.b1(1);
			for (var a0E = document.createDocumentFragment(), a0F = f5.aw.gJ[0], fB = f5.fB.fC[a0F], g2 = f5.fB.g2[a0F], al = 0; al < fB.length; al++) ! function(a0E, ga, a0H, a0F) {
				var tT = document.createElement("span");
				tT.textContent = (a0H ? "🟢 " : "⚪ ") + f5.fi.a0I(ga, a0F), tT.style.color = f5.fi.tV(ga.g6), 11 === ga.g6 && (tT.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				tT.style.cursor = "pointer", tT.style.margin = "0.2em 0.2em 0.2em 0.2em", tT.style.width = tT.style.maxWidth = 2 === a0F ? "10em" : "9em", tT.style.height = tT.style.maxHeight = "1.4em", tT.style.whiteSpace = "nowrap", tT.style
					.overflow = "hidden", tT.style.textOverflow = "ellipsis", tT.style.font = "inherit", tT.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (a0H = __fx.utils.getDuplicateIpHighlightColor(ga, f5.fB.fC,
					"gA")) && (tT.style.backgroundColor = a0H, tT.style.borderRadius = "0.3em");
				f5.fi.tW(ga) && (tT.style.textDecoration = "underline"), ga.gH && (tT.style.textDecorationLine = "underline", tT.style.textDecorationStyle = "dotted");
				tT.onclick = function(aY) {
					a0A(aY, ga)
				}, dE.dF() || (tT.onmouseover = function(aY) {
					f5.tZ.ta(aY.target, ga, 1)
				}), a0E.appendChild(tT)
			}(a0E, fB[al], al < g2, a0F);
			a0C.appendChild(a0E)
		}, this.show = function(ze) {
			ze.appendChild(a0B)
		}, this.b1 = function(ze) {
			a0.removeChild(ze, a0B)
		}, this.resize = function() {
			a0C.style.fontSize = w.bc.jW(w.bc.jc(.02, .3))
		}, a0B.style.top = "0", a0B.style.left = "0", a0B.style.width = a0B.style.height = "100%", a0B.style.overflowX = "hidden", a0B.style.overflowY = "auto", a0B.style.font = "inherit", a0C.style.font = "inherit", a0C.style.margin = "0.4em", a0B
		.appendChild(a0C)
}

function pl() {
	var b, a0J;

	function a0M() {
		a0.au();
		var e0 = a2.a0R(a0J.bE());
		(o.de && 0 < e0.length && e0 === a2.a3.sk || a2.a0S.fq(e0)) && a2.sn()
	}
	this.show = function(a0N) {
		this.a0O(a0N), b.show(), this.resize()
	}, this.a0O = function(a0N) {
		0 === o.de ? a0N ? a0J.bK(a0N) : o.a0P.length && a0J.bK(o.a0P) : (o.ke || (a2.a3.sk = a2.a8.a9()), a0J.bK(a2.a0Q(a2.a3.sk)))
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), a0J.resize()
	}, this.b2 = function(b3) {
		2 === b3 ? b.b4[0].b5() : a0M()
	}, b = new e(L(63), [new f("⬅️ " + L(1), function() {
		a0.q7(1)
	}), new f(L(64), function() {
		a0J.a0K()
	}), new f(L(65), function() {
		a0J.a0L()
	}), new f(L(66), function() {
		a0J.clear()
	}), new f(L(67), function() {
		a0M()
	})]), a0J = new bJ(L(68)), b.k.appendChild(a0J.aY)
}

function a0T() {
	this.a0U = 28, this.a0V = 0, this.a0W = null;
	var a0Y = this.a0X = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function a0f(nx, a0i) {
		var bi, bj, eV, ea, aW = w.bc.bd(nx, nx),
			be = w.bc.getContext(aW, !0),
			bf = w.bc.getImageData(be, nx, nx),
			bh = bf.data,
			cX = (nx >> 1) - .5,
			a0j = .5 + cX;
		for (a0j *= a0j, bj = 0; bj < nx; bj++)
			for (bi = 0; bi < nx; bi++) ea = (ea = bi - cX) * ea + (ea = bj - cX) * ea, bh[eV = 4 * (bj * nx + bi)] = a0i[0], bh[1 + eV] = a0i[1], bh[2 + eV] = a0i[2], bh[3 + eV] = (a0j - ea) * a0i[3] / a0j;
		return be.putImageData(bf, 0, 0), aW
	}

	function yw(al, be, aW, nx) {
		var highlight, bi, bj;
		0 !== eF.hu[al] && 0 !== eF.fQ[al] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[al]) && (nx *= 2), bi = eF.eG[al] + eF.eH[al] + 1 - nx - 2 >> 1, bj = eF.eJ[al] + eF.eK[al] + 1 - nx - 2 >> 1, highlight ? be
			.drawImage(aW[o.fT ? 9 === o.fW && 5 === ar.cD[al] ? 3 : bN.iZ[al] : al < o.cF ? 1 : 0], bi, bj, nx, nx) : be.drawImage(aW[o.fT ? 9 === o.fW && 5 === ar.cD[al] ? 3 : bN.iZ[al] : al < o.cF ? 1 : 0], bi, bj))
	}
	this.a4 = function() {
		var zd;
		this.a0V = 700,
			function(zd) {
				var nx = zd.a0U;
				if (zd.a0X = [], a0Y = [], o.fT) {
					for (var al = 0; al <= o.a0e; al++) zd.a0X.push(a0f(nx, bN.a0g[bN.rA[al]])), a0Y.push(a0f(nx >> 1, bN.a0g[bN.rA[al]]));
					9 === o.fW && a0Y.push(a0f(nx, bN.a0g[1]))
				} else zd.a0X.push(a0f(nx, bN.a0g[7])), zd.a0X.push(a0f(nx, bN.a0g[4])), a0Y.push(a0f(nx >> 1, bN.a0g[7]))
			}(this),
			function(zd, a0n) {
				var al, a0W = zd.a0W,
					be = w.bc.getContext(a0W, !0),
					bw = o.bI,
					nx = zd.a0U >> 1;
				be.imageSmoothingEnabled = !1, be.setTransform(1, 0, 0, 1, 0, 0), a0n && be.clearRect(0, 0, a0W.width, a0W.height);
				if (9 === o.fW) {
					nx <<= 1;
					zd = a0p.a0q[5];
					for (al = bw - zd; al < bw; al++) yw(al, be, a0Y, nx);
					bw -= zd, nx >>= 1
				}
				for (al = o.cF; al < bw; al++) yw(al, be, a0Y, nx)
			}(this, null !== (zd = this).a0W && zd.a0W.width === p.eP - 2 && zd.a0W.height === p.eQ - 2 || (zd.a0W = w.bc.bd(p.eP - 2, p.eQ - 2), !1)), o.db || this.a0d()
	}, this.a0h = a0f, this.a0d = function() {
		for (var bw = o.cF, nx = this.a0U, a0X = this.a0X, be = w.bc.getContext(this.a0W, !0), al = 0; al < bw; al++) yw(al, be, a0X, nx)
	}
}

function a0r() {
	var a0s, canvas, bO, a0t;

	function a10(ab, name, a11, e0) {
		bO[ab] = name, canvas[ab] = new Image, canvas[ab].onload = function() {
			! function(ab, a11) {
				var bY, bZ = null;
				7 === a11 ? bY = w.a14.bk : 8 === a11 ? (bY = w.a14.bn, bZ = .1) : 3 === a11 ? (bY = w.a14.bl, bZ = .06) : 5 === a11 ? bY = w.a14.bo : 6 === a11 ? bY = w.a14.bg : 4 === a11 && (bY = w.a14.bp);
				canvas[ab] = w.a14.bX(canvas[ab], bY, bZ)
			}(ab, a11), a13()
		}, canvas[ab].onerror = function(aY) {
			console.error("Error loading image at index", ab, "Error:", aY), a13()
		}, canvas[ab].src = "data:image/png;base64," + e0
	}

	function a13() {
		a0s--, a0x()
	}

	function a0x() {
		0 === a0s && (a0s = -1, a0z(), dY.dk = !0, canvas[7] = a0t, canvas[8] = a0t, canvas[9] = a0t, canvas[10] = a0t, 5 === a0.dU) && a0.dV().a16.resize()
	}

	function a0z() {
		o4.a17(), qv.a0b([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== c3.id, 1 !== c3.id, !0, !0, !0]), nM.bh = new a18, nM.bh.a4(), a19.gz()
	}
	this.a4 = function() {
		if (void 0 === canvas) {
			a0s = 23, canvas = new Array(a0s), bO = new Array(a0s), (a0t = document.createElement("canvas")).width = 1;
			for (var al = a0s - (a0t.height = 1); 0 <= al; al--) canvas[al] = a0t;
			a0z(), a10(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a10(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a10(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a10(3, "orders", 6,
					"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"
					), a10(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a10(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a10(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a10(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a10(8,
					"googleplay", 3,
					"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"
					), a10(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), a10(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a10(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a10(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a10(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a10(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), a10(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a10(16, "apple", 3,
					"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"
					), a10(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a10(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a10(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a10(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a10(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a10(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(ab) {
		return canvas[ab]
	}, this.r5 = function(name) {
		for (var al = bO.length - 1; 0 <= al; al--)
			if (bO[al] === name) return canvas[al];
		return a0t
	}, this.a0v = function() {
		return a0s <= 0
	}, this.a0w = function() {
		a0s = 0, a0x()
	}
}

function a1A() {
	this.sA = new a1B, this.a1C = new a1D, this.aw = new a1E, this.z3 = new yy, this.a1F = new yu, this.a1G = new s3, this.a1H = new zq, this.e4 = new a1I, this.a1J = new a1K, this.a1L = new a1M, this.zr = new a1N, this.a1O = new a1P, this.a1Q =
		new a1R, this.fi = new a1S, this.a06 = new a1T, this.fk = new a1U, this.a1V = new ff, this.a4 = function() {
			this.a1Q.a4(), this.a1C.a4(), this.aw.a4(), this.z3.a4(), this.a1F.a4(), this.a1L.a4(), this.fk.a4()
		}, this.hJ = function() {
			this.a1L.hJ(), this.a1C.hJ()
		}
}

function a1W() {
	this.c6 = function(ab, c1) {
		return Number(this.c7(ab, c1))
	}, this.c7 = function(ab, c1) {
		var bV = null;
		return 0 === c3.id ? c3.yg && (bV = c3.yg.getItem((c1 ? "v" : "d") + ab)) : 1 === c3.id ? bV = c3.dI.loadString((c1 ? 1e3 : 2e3) + ab) : 2 === c3.id && (bV = c3.a1X[(c1 ? "v" : "d") + ab]), bV && 0 !== bV.length ? bV : null
	}, this.a1Y = function(bw, a1Z) {
		var ak = [],
			a1a = a1Z ? "e" : "l";
		if (0 === c3.id) {
			if (c3.yg)
				for (al = 0; al < bw; al++) ak.push(c3.yg.getItem(a1a + al))
		} else if (1 === c3.id)
			for (var a1b = a1Z ? 5e3 : 3e3, al = 0; al < bw; al++) ak.push(c3.dI.loadString(a1b + al));
		else if (2 === c3.id)
			for (al = 0; al < bw; al++) ak.push(c3.a1X[a1a + al]);
		return ak
	}, this.save = function(ab, value, c1) {
		var x4 = (c1 ? "v" : "d") + ab;
		if (0 === c3.id) {
			if (c3.yg && a5.c0.data[140].value) try {
				c3.yg.setItem(x4, value)
			} catch (aY) {
				console.log(aY)
			}
		} else 1 === c3.id ? c3.dI.saveString((c1 ? 1e3 : 2e3) + ab, value) : 2 === c3.id && (c3.a1X[x4] = value, c3.yh.postMessage(x4 + " " + value))
	}, this.a1c = function(ak, a1Z) {
		var bw = ak.length,
			a1a = a1Z ? "e" : "l";
		if (0 === c3.id) {
			if (c3.yg && a5.c0.data[140].value) try {
				for (al = 0; al < bw; al++) c3.yg.setItem(a1a + al, ak[al])
			} catch (aY) {
				console.log(aY)
			}
		} else if (1 === c3.id)
			for (var a1b = a1Z ? 5e3 : 3e3, al = 0; al < bw; al++) c3.dI.saveString(a1b + al, ak[al]);
		else if (2 === c3.id)
			for (al = 0; al < bw; al++) c3.a1X[a1a + al] = ak[al], c3.yh.postMessage(a1a + al + " " + ak[al])
	}
}

function a1d() {
	this.ll = 0;
	var a1f, a1g, a1h, a1i, a1j, a1k = this.a1e = 0;

	function a1o() {
		a1i = a1j = null, a1k = 0
	}
	this.a4 = function(le, li, lj) {
		a0.au(), f5.d1(), aB.setState(10), a1i = le, a1j = li, a1k = lj, this.ll = le.ll, this.a1e = lj, a1f = 0, a1g = dY.dX + 4500, f2.aw.p4 = le.p4, f2.aw.vV === le.p4 ? (console.log("direct pass"), a1h = 0) : (console.log("delayed pass"), f2
			.aw.close(f2.aw.vV, 3247), a1h = 2, f2.aw.a1l(le.p4, 5, 2) && f2.pL.a1m()), hL.imageSmoothingEnabled = !0, aB.qz();
		li = kc.r5("loading"), lj = (c3.h2.h3() ? .396 : .25) * c2.jd / li.width;
		hL.setTransform(lj, 0, 0, lj, Math.floor((c2.ba - lj * li.width) / 2), Math.floor((c2.bb - lj * li.height) / 2)), hL.imageSmoothingEnabled = !1, hL.drawImage(li, 0, 0), hL.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a1p = function() {
		0 < a1h && dY.dX > a1g && (a1h--, a1g += 4500, 0 === dY.ww) && 0 === dY.hw() && f2.aw.a1l(f2.aw.p4, 5, 2)
	}, this.p3 = function() {
		return 10 === aB.ox() && (f5.vf.ln(a1i, a1j, a1k), a1o(), !0)
	}, this.pX = function() {
		10 === aB.ox() && 2 <= ++a1f && (f5.vf.ln(a1i, a1j, a1k), a1o())
	}
}

function a18() {
	this.gv = !1;
	this.o0 = [], this.nz = 100;
	var hz, i0, gap, nx, a1s, a1u, a1v = 0,
		a1w = new Array(9),
		a1x = [],
		a1y = [],
		a1z = 0,
		a20 = 0,
		a21 = 0,
		a22 = 0;

	function a2G() {
		a1w.sort(function(ct, j9) {
			return j9.a2D - ct.a2D
		});
		for (var e0 = "" + a1w[0].nw, al = 1; al < 9; al++) e0 += "," + a1w[al].nw;
		for (al = 0; al < 9; al++) e0 += "," + a1w[al].a2D;
		a5.c0.ym(120, e0)
	}
	this.a4 = function() {
		for (var a23 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], al = 0; al < a23.length; al++) {
			var color = 6 === a23[al] ? hM.a24 : hM.a25;
			this.o0.push(w.canvas.a26(kc.get(3), a23[al], color))
		}
		for (al = 0; al < nM.gS.o1; al++) a1y.push(nM.gS.a27 - nM.gS.o1 + al);
		for (al = 0; al < nM.gS.a28; al++) a1y.push(nM.gS.a29 + al);
		var a2A = nM.gS.a2B(yr.a2A);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2A.slice(), al = 0; al < a2A.length; al++) a1y.push(a2A[al]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a1w[q] = {
						nw: isNaN(qcode) ? 1015 + q : qcode,
						a2D: 0
					}
				} else {
					var al, ak = a5.c0.data[120].value.split(",");
					if (18 !== ak.length)
						for (al = 0; al < 9; al++) a1w[al] = {
							nw: 1015 + al,
							a2D: 0
						};
					else
						for (al = 0; al < 9; al++) {
							var bV = parseInt(ak[al]),
								b3 = (bV = 0 <= bV && bV < nM.gS.a27 ? bV : 0, parseInt(ak[al + 9]));
							b3 = 0 <= b3 && b3 < 1e3 ? b3 : 0, a1w[al] = {
								nw: bV,
								a2D: b3
							}
						}
				}
		}()
	}, this.show = function(eD, eI, a2H) {
		var al;
		if (a1z = eD, a20 = eI, a1v = a2H || 0, this.gv = !0, a1x = [], 0 === a1v)
			for (al = 0; al < 9; al++) a1x.push(a1w[al].nw);
		else {
			var j9 = 49 * a1v,
				a2H = j9 - 49;
			for (a2H >= a1y.length && (a1v = 1, a2H = 0, j9 = 49), al = a2H = (j9 = Math.min(j9, a1y.length)) - 49; al < j9; al++) a1x.push(a1y[al])
		}
		a1x.push(1024);
		a2H = a1x.length, nx = Math.floor((c3.h2.h3() ? .075 : .0468) * c2.jd), gap = Math.floor(nx / 3), (a21 = 10 * (a1s = nx + gap)) > c2.ba && (a21 = c2.ba, gap = (a1s = a21 / 10) - (nx = 3 * a1s / 4)), a1u = ac.eB(a2H, 10) + !!(a2H % 10), (
			a22 = a1u * a1s) > c2.bb && (a22 = c2.bb, gap = (a1s = a22 / a1u) - (nx = 3 * a1s / 4)), a2H = .5 * gap;
		hz = Math.min(Math.max(eD - .5 * a21 + a2H, a2H), c2.ba - a21 + a2H), i0 = Math.min(Math.max(eI - .5 * a22 + a2H, a2H), c2.bb - a22 + a2H)
	}, this.h6 = function(eD, eI, player) {
		if (!this.gv) return !1;
		if (this.uk(eD, eI)) {
			eD = ac.ad(ac.eB(eD - hz + .5 * gap, a1s), 0, 9);
			if ((eD += 10 * ac.ad(ac.eB(eI - i0 + .5 * gap, a1s), 0, 9)) >= a1x.length) return o4.b1(), !0;
			eI = a1x[eD];
			if (1024 === eI) return this.show(a1z, a20, a1v + 1), !0;
			! function(nw) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var al = 0; al < 9; al++) a1w[al].a2D = Math.floor(.99 * a1w[al].a2D);
					for (al = 0; al < 9; al++)
						if (nw === a1w[al].nw) return a1w[al].a2D = Math.min(a1w[al].a2D + 30, 999), a2G();
					a1w.splice(5, 0, {
						nw: nw,
						a2D: Math.max(a1w[4].a2D, 30)
					}), a1w.pop(), a2G()
				}
			}(eI), player === o.co ? pH.a2J.pM(eI) : pH.cO.a2K(eI, player)
		}
		return o4.b1(), !0
	}, this.uk = function(eD, eI) {
		return !(eD < hz - .5 * gap || eI < i0 - .5 * gap || hz + a21 - .5 * gap <= eD || i0 + a22 - .5 * gap <= eI)
	}, this.hJ = function() {
		hL.fillStyle = hM.hN, hL.fillRect(hz - .5 * gap, i0 - .5 * gap, a21, a22);
		for (var bP = .5 * h4.kx, bw = (hL.lineWidth = h4.kx, hL.strokeStyle = hL.fillStyle = hM.hX, hL.strokeRect(hz - .5 * gap + bP, i0 - .5 * gap + bP, a21 - 2 * bP, a22 - 2 * bP), hL.imageSmoothingEnabled = !0, a1x.length), al = 0; al <
			bw; al++) this.a2L(a1x[al], hL, hz + al % 10 * a1s, i0 + ac.eB(al, 10) * a1s, nx);
		hL.imageSmoothingEnabled = !1
	}, this.a2L = function(nw, be, bi, bj, nx) {
		var hd;
		nw >= 1024 - nM.gS.o1 ? (hd = nx / this.nz, be.setTransform(hd, 0, 0, hd, bi, bj), be.drawImage(this.o0[nw - 1024 + nM.gS.o1], 0, 0), be.setTransform(1, 0, 0, 1, 0, 0)) : (w.bc.textAlign(be, 1), w.bc.textBaseline(be, 1), be.font = w.bc
			.hG(0, .89 * nx), be.fillText(nM.gS.o2(nw), bi + .5 * nx, bj + (.35 - w.bc.jS + .56) * nx))
	}
}

function a2M() {
	var a2N, a2O;

	function a2W() {
		(a2N = new WebSocket("wss://territorial.io/s52/")).onopen = a2Z, a2N.onclose = function() {
			a2a()
		}
	}

	function a2Z() {
		if (a2N && a2N.readyState === a2N.OPEN) {
			var ba = new a2b;
			ba.lu(1608), ba.pG(1, 0), ba.pG(6, 7), ba.pG(2, c3 ? c3.id : 3), ba.pG(1, pC.pD ? 1 : 0), ba.pG(1, pC.pE ? 1 : 0), ba.pG(1, pC ? pC.a2S : 0);
			for (var al = 0; al < a2O.length && al < 228; al++) ba.pG(7, a2O.charCodeAt(al) % 128);
			a2N.send(ba.oU), a2a()
		}
	}

	function a2a() {
		a2N && (a2N.onclose = null, a2N.onopen = null, a2N = null)
	}
	window.addEventListener("error", function a2P(aY) {
		a2O = "";
		try {
			var a2Q = function(aY) {
				if (!aY.error) return 0;
				var stack = aY.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, fN = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = fN.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(aY);
			return 0 === a2Q || aY.lineno < 2 ? void console.log("Error: External Code") : (window.removeEventListener("error", a2P), a2O = aY.lineno + " " + aY.colno + "|" + a2Q, __fx.reportError(aY, a2O), alert("Error:\n" + aY.filename +
				" " + aY.lineno + " " + aY.colno + " " + aY.message))
		} catch (aY) {
			a2O = "SE|" + a2O + "|" + aY, console.log(a2O), alert(a2O)
		}
		a2W()
	})
}

function a1S() {
	this.a2c = function(player, id) {
		for (var a2d = eF.rW[player], bw = a2d.length, al = 0; al < bw; al++)
			if (eN.a2e(a2d[al], id)) return !0;
		return !1
	}, this.a2f = function(player, eV) {
		for (var a2g, a2h, hd, a2d = eF.rW[player], bw = a2d.length, ba = p.eP, a2j = eN.eX(eV), a2k = eN.eZ(eV), a2l = -1, min = p.eP * p.eP + p.eQ * p.eQ, id = ee.a2m(eN.eg(eV)), al = 0; al < bw; al++)(a2h = (a2h = a2j - (a2g = (hd = a2d[
			al]) >> 2) % ba) * a2h + (a2h = a2k - ~~((.5 + a2g) / ba)) * a2h) < min && eN.a2e(hd, id) && (min = a2h, a2l = a2g);
		return a2l
	}, this.rQ = function(a2n, a2g) {
		for (var id = ee.a2m(eN.eg(a2g)), sT = eN.sU, hd = eN.eg(a2n), a2o = -1, al = 0; al < 4; al++) {
			var iN = hd + sT[al];
			ee.ef(iN) && ee.a2m(iN) === id && (-1 === a2o || eN.rY(eN.a2p(iN), a2g) < eN.rY(a2o, a2g)) && (a2o = eN.a2p(iN))
		}
		return a2o
	}, this.a2q = function(player, eV) {
		for (var sT = eN.sU, hd = eN.eg(eV), al = 0; al < 4; al++) {
			var iN = hd + sT[al];
			if (ee.lZ(iN) && ee.sV(player, iN)) return !0
		}
		return !1
	}, this.a2r = function(player, eV) {
		for (var sT = eN.sU, hd = eN.eg(eV), al = 0; al < 4; al++) {
			var iN = hd + sT[al];
			if (ee.lb(iN)) return !0;
			if (ee.lZ(iN)) {
				iN = ee.la(iN);
				if (player !== iN && jG.jH(player, iN)) return !0
			}
		}
		return !1
	}, this.a2s = function(eV) {
		for (var sT = eN.sU, hd = eN.eg(eV), al = 0; al < 4; al++) {
			var iN = hd + sT[al];
			if (ee.lZ(iN)) {
				iN = ee.la(iN);
				if (w.cO.cm(iN)) return iN
			}
		}
		return -1
	}, this.a2t = function(hd) {
		if (ee.ef(hd))
			for (var sT = eN.sU, al = 0; al < 4; al++)
				if (ee.lV(hd + sT[al])) return !0;
		return !1
	}, this.fj = function(player, id) {
		for (var gd = player << 3, ge = gd + e3.aw.zt[player], yx = e3.aw.yx, a2u = e3.aw.a2u, al = gd; al < ge; al++) {
			var a2v = a2u[al];
			if (yx[a2v] === id) return a2v
		}
		return -1
	}, this.a2w = function(player) {
		return 0 === e3.aw.zt[player] ? -1 : e3.aw.a2u[player << 3]
	}, this.a2x = function(eD, eI) {
		var bw = e3.aw.s7;
		if (bw < 1) return -1;
		for (var s5 = e3.aw.s5, a2y = 80, xr = -1, al = 0; al < bw; al++) {
			var eM = eN.a2z(eD, eI, s5[al]);
			eM < a2y && (a2y = eM, xr = al)
		}
		return function(al, eD, eI) {
			if (al < 0) return;
			var a3A = e3.aw.s5[al],
				a3B = eN.a3C(a3A),
				a3A = eN.a3E(a3A),
				al = 20 * (.9 + .1 * Math.log10(e3.aw.sO[al]));
			return al = Math.max(al, eN.a3G(w.bc.jf(.02, 1.7))), ac.a3H(eN.a3I(eD), eN.a3J(eI), a3B, a3A, al)
		}(xr, eD, eI) ? xr : -1
	}, this.a31 = function(fg) {
		for (var bw = e3.aw.s7, yx = e3.aw.yx, al = 0; al < bw; al++)
			if (yx[al] === fg) return ix.a08[2] = al, !0;
		return !1
	}, this.cd = function(player) {
		for (var gd = player << 3, ge = gd + e3.aw.zt[player], a2u = e3.aw.a2u, sO = e3.aw.sO, cD = 0, al = gd; al < ge; al++) cD += sO[a2u[al]];
		return cD
	}, this.a32 = function(player, a33) {
		a33 = e3.aw.a35[a33];
		return this.a2q(player, a33[a33.length - 1])
	}, this.a36 = function(a2n, a2g, eM, a37) {
		var nS = eN.eX(a2n),
			a2n = eN.eZ(a2n),
			nU = eN.eX(a2g),
			a2g = eN.eZ(a2g),
			nU = (eM = Math.max(eM, 1), nU - nS),
			a2g = a2g - a2n,
			ea = ac.eB(Math.abs(nU) * a37, eM),
			a37 = ac.eB(Math.abs(a2g) * a37, eM);
		return eN.ed(nS + Math.sign(nU) * ea, a2n + Math.sign(a2g) * a37)
	}, this.a3K = function(a34, eV) {
		for (var bw = a34.length - 1, bi = eN.eX(eV), bj = eN.eZ(eV), al = 0; al < bw; al++) {
			var a2n = a34[al],
				a2g = a34[al + 1],
				hz = eN.eX(a2n),
				a2n = eN.eZ(a2n),
				i1 = eN.eX(a2g),
				a2g = eN.eZ(a2g);
			if (!(bi !== hz && bi !== i1 && Math.sign(bi - hz) === Math.sign(bi - i1) || bj !== a2n && bj !== a2g && Math.sign(bj - a2n) === Math.sign(bj - a2g))) {
				if (hz === i1 || a2n === a2g) return al;
				if (Math.abs(bi - hz) === Math.abs(bj - a2n) && Math.abs(bi - i1) === Math.abs(bj - a2g)) return al
			}
		}
		return -1
	}, this.a03 = function() {
		for (var a3L = fR[0], sN = e3.aw.sN, s7 = e3.aw.s7, ak = [], al = 0; al < s7; al++) w.cO.iY(a3L, sN[al] >> 3) && ak.push(al);
		return ak
	}, this.a3M = function(player, a34) {
		for (var gd = player << 3, ge = gd + e3.aw.zt[player], a2u = e3.aw.a2u, a35 = e3.aw.a35, rF = a34[0], rG = a34[a34.length - 1], al = gd; al < ge; al++) {
			var i5 = a35[a2u[al]];
			if (i5[0] === rF && i5[i5.length - 1] === rG) return !0
		}
		return !1
	}
}

function dh() {
	cp.da(), cr.da(), hx.a3N(), f2.aw.da()
}

function di() {
	a3O.da(), qI.da(), a3P.da(), fY.da(), iv.da(), lR.da(), ch.da(), e3.aw.da(), cw.a3Q(), kk.da(), a0p.da(), a3R.da(), cr.da(), cr.oB(), hx.da(), a3S.da(), a3T.da(), a3U.da(), a3V.a3W(), cp.da(), pN.da(), kX.da(), a19.da(), cQ.da(), fd.da(), f2.aw
		.da(), f2.a3X.da(), a0.da(), pY.pZ.da(), a2.da(), dY.da()
}

function dm() {
	ut.da(), qO.da(), hF.da(), a3Y.da(), h9.da(), a3Z.da(), a3V.da(), lm.a1p()
}

function dl() {
	kk.kl(!1), a3U.kl(), hx.kl(!1), a3T.kl(), kX.kl(), a19.kl(), cr.kl(!1), fd.hI()
}

function dc() {
	cr.kl(!1) && (dY.dk = !0), f2.aw.da()
}

function st(title, a3a, a3b, a3c) {
	var x8, a3d;
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a3d.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, a3c = a3c || [new f("⬅️ " + L(1), function() {
		a0.bC()
	})], x8 = new e(title, a3c), a3d = new a3e(x8.k, a3a), a3b && w.bc.textAlign(x8.k.style, 1)
}

function a3f() {
	var canvas, hZ, a3g, font, xx = 0,
		a3h = !1,
		a3i = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a3j = 5;

	function hK() {
		if (a3h) {
			var al, bw = a3i.length,
				gm = Math.floor(.5 * a3g.bb),
				bb = bw * gm,
				bi = Math.floor(Math.floor(a3g.bi) + .3 * a3g.ba - .5),
				bj = Math.floor(Math.floor(a3g.bj) - bb),
				ba = Math.floor(.4 * a3g.ba + 2.5);
			for (hL.fillStyle = hM.ka, hL.fillRect(bi, bj, ba, bb), hL.fillStyle = hM.uU, hL.fillRect(bi, bj + a3j * gm, ba, gm), hL.fillStyle = hM.hX, hL.fillRect(bi, bj, 2, bb), hL.fillRect(bi, bj, ba, 2), hL.fillRect(bi + ba - 2, bj, 2, bb), al =
				1; al < bw; al++) hL.fillRect(bi, bj + al * gm, ba, 2);
			for (hL.fillStyle = hM.hX, w.bc.textAlign(hL, 1), w.bc.textBaseline(hL, 1), hL.font = w.bc.hG(0, .6 * gm), bi += .5 * ba, al = 0; al < bw; al++) hL.fillText(a43(al), bi, bj + (al + .6) * gm)
		}
		hL.drawImage(canvas, Math.floor(a3g.bi), Math.floor(a3g.bj))
	}

	function hI(zd) {
		var bi, hz, i0, gm;
		hZ.clearRect(0, 0, Math.floor(a3g.ba), Math.floor(a3g.bb)), hZ.fillStyle = hM.ka, hZ.fillRect(0, 0, Math.floor(a3g.ba), Math.floor(a3g.bb)), o.kr && (hZ.fillStyle = hM.uU, hZ.fillRect(0, 0, Math.floor(.3 * a3g.ba), Math.floor(a3g.bb))), hZ
			.fillStyle = hM.hX, hZ.fillText("Hide UI", .15 * a3g.ba, .5 * a3g.bb), hZ.fillRect(Math.floor(.3 * a3g.ba - .5), 0, 2, Math.floor(a3g.bb)), bi = .5 * a3g.ba, hZ.fillText("Replay Speed", bi, .31 * a3g.bb), hZ.fillText(a43(a3j), bi, .69 *
				a3g.bb), hZ.fillRect(Math.floor(.7 * a3g.ba - .5), 0, 2, Math.floor(a3g.bb)), zd.kf ? (bi = Math.floor(.02 * a3g.ba), zd = Math.floor(.025 * a3g.ba), hz = Math.floor(.85 * a3g.ba - bi - .5 * zd), i0 = Math.floor(.25 * a3g.bb), gm =
				Math.floor(a3g.bb) - 2 * i0, hZ.fillRect(hz, i0, bi, gm), hZ.fillRect(hz + bi + zd, i0, bi, gm)) : function() {
				var ba = Math.floor(.46 * a3g.bb),
					bb = Math.floor(.23 * a3g.bb),
					bi = Math.floor(.85 * a3g.ba - .5 * ba + ba / 12),
					bj = Math.floor(.5 * a3g.bb - bb);
				hZ.beginPath(), hZ.moveTo(bi, bj), hZ.lineTo(bi + ba, bj + bb), hZ.lineTo(bi, bj + (bb << 1)), hZ.fill()
			}(), hZ.fillRect(0, 0, Math.floor(a3g.ba), 2), hZ.fillRect(0, 0, 2, Math.floor(a3g.bb)), hZ.fillRect(0, Math.floor(a3g.bb) - 2, Math.floor(a3g.ba), 2), hZ.fillRect(Math.floor(a3g.ba - 2), 0, 2, Math.floor(a3g.bb))
	}

	function a43(al) {
		return 5 === al ? "Normal" : "" + a3i[al]
	}
	this.kf = !1, this.a4 = function() {
		o.ke && (a3j = 5, this.kf = !1, a3h = !1, a3g = new a3k([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a3l = function() {
		return a3i[a3j]
	}, this.we = function() {
		return a3g.bj
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.kf,
		fxGetSpeedIndex: () => a3j,
		fxSetSpeedIndex: index => {
			a3j = index, this.resize()
		},
		fxGetPanelTop: () => a3g && a3g.bj
	}, this.a3m = function(a3n) {
		return !!o.ke && a3g.bi + a3g.ba > c2.ba - a3n - h4.gap
	}, this.resize = function() {
		o.ke && (a3g.resize(), a3g.bj -= (a3o.a3p() - 1) * h4.gap, font = w.bc.hG(0, .3 * a3g.bb), (canvas = document.createElement("canvas")).width = Math.floor(a3g.ba), canvas.height = Math.floor(a3g.bb), (hZ = canvas.getContext("2d", {
			alpha: !0
		})).font = font, w.bc.textAlign(hZ, 1), w.bc.textBaseline(hZ, 1), hI(this))
	}, this.kh = function(a3q) {
		0 === o.de || a0.gv() || a3q !== o.kr && (o.kr = a3q, fd.resize(), dY.dk = !0, o.ke) && (xx = dY.dX + 2e3, hI(this))
	}, this.h6 = function(bi, bj) {
		if (!o.ke) return !1;
		if (bi < a3g.bi || bj < a3g.bj || bi > a3g.bi + a3g.ba) return a3h && function(zd, bi, bj) {
			var bw = a3i.length,
				gm = Math.floor(.5 * a3g.bb),
				bb = bw * gm,
				hz = Math.floor(Math.floor(a3g.bi) + .3 * a3g.ba - .5),
				bb = Math.floor(Math.floor(a3g.bj) - bb),
				ba = Math.floor(.4 * a3g.ba + 2.5);
			return a3h = !1, dY.dk = !0, bi < hz || hz + ba < bi || bj < bb || (a3j = uo(0, Math.floor((bj - bb) / gm), bw - 1), hI(zd)), !0
		}(this, bi, bj);
		if ((bi -= a3g.bi) < .3 * a3g.ba) a3h = !1, this.kh(!o.kr);
		else {
			if (bi < .7 * a3g.ba) return a3h = !a3h, dY.dk = !0;
			this.ki(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.ki(!0), this.ki = function(a3s) {
		2 === o.de ? (this.kh(!1), a0.a1(3)) : (a3h = !1, this.kf = !this.kf, this.kf ? (df.dg && df.hD(), c3.h2.setState(1)) : a3s || df.kj(), dY.dk = !0, hI(this))
	}, this.a3t = function() {
		this.kf = !1, df.kj(), dY.dk = !0, hI(this)
	}, this.a3u = function(bi, bj) {
		return !!o.kr && (0 <= df.h6(bi, bj) || (o.ke ? ((dY.dX > xx || !this.h6(bi, bj)) && vQ.h6(bi, bj), dY.dk = !0, xx = dY.dX + 2e3) : vQ.h6(bi, bj)), !0)
	}, this.da = function() {
		o.ke && o.kr && dY.dX > xx - 1e3 && dY.dX < xx && (dY.dk = !0)
	}, this.a3v = function() {
		o.ke && (this.kf = !1, dY.dk = !0, hI(this))
	}, this.hJ = function() {
		if (o.ke) {
			if (o.kr) {
				if (dY.dX > xx) return;
				if (xx - 1e3 < dY.dX) return hL.globalAlpha = uo(0, (1e3 - (dY.dX - (xx - 1e3))) / 1e3, 1), hK(), void(hL.globalAlpha = 1)
			}
			hK()
		}
	}
}

function a44() {
	"function" != typeof Math.log2 && (Math.log2 = function(bi) {
		return Math.log(bi) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(bi) {
		return Math.log(bi) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(bi) {
		return 0 < bi ? 1 : bi < 0 ? -1 : 0
	})
}

function a45() {
	var a46;

	function a4P(aW, h0, bi, bj, globalAlpha) {
		p.vw.save(), p.vw.globalAlpha = globalAlpha, p.vw.imageSmoothingEnabled = !1, p.vw.scale(h0, h0), p.vw.drawImage(aW, Math.floor(bi * (p.eP / h0 - aW.width)), Math.floor(bj * (p.eQ / h0 - aW.height))), p.vw.restore()
	}
	this.a47 = 0, this.a48 = 0, this.a49 = 0, this.iC = 0, this.a4 = function() {
		(a46 = new Array(p.a4A))[0] = {
			ba: [0, 5e3, 8e3, 1e4],
			br: [220, 250, 255, 220],
			mL: [190, 220, 0, 0],
			j9: [170, 200, 0, 0]
		}, a46[1] = {
			ba: [0, 4e3, 5e3, 6e3, 1e4],
			br: [25, 0, 100, 0, 25],
			mL: [25, 0, 0, 0, 25],
			j9: [25, 0, 0, 0, 25]
		}, a46[2] = {
			ba: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			br: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			mL: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			j9: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a46[3] = {
			ba: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			br: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			mL: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			j9: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, a46[4] = {
			ba: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			br: [10, 10, 20, 10, 10, 170, 212],
			mL: [20, 20, 60, 100, 100, 110, 170],
			j9: [70, 70, 160, 30, 30, 60, 120]
		}, a46[5] = {
			ba: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			br: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			mL: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			j9: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a46[6] = {
			ba: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			br: [10, 10, 60, 255, 255, 200, 200],
			mL: [10, 10, 60, 255, 255, 200, 200],
			j9: [80, 80, 255, 255, 255, 200, 200]
		}, a46[7] = {
			ba: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			br: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			mL: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			j9: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a46[8] = {
			ba: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			br: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			mL: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			j9: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a46[9] = {
			ba: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			br: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			mL: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			j9: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a46[20] = {
			ba: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			br: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			mL: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			j9: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, a46[21] = {
			ba: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			br: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			mL: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			j9: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a4B = function() {
		var a4O, al, ct, hp, bf = function() {
				var bf;
				return p.q = document.createElement("canvas"), p.q.width = p.eP, p.q.height = p.eQ, p.vw = p.q.getContext("2d", {
					alpha: !1
				}), bf = p.vw.getImageData(0, 0, p.eP, p.eQ), p.i8 = bf.data, bf
			}(),
			ba = a46[p.fo].ba,
			br = a46[p.fo].br,
			mL = a46[p.fo].mL,
			j9 = a46[p.fo].j9,
			bV = a4G.a4H(),
			bw = ba.length - 2,
			a4I = new Array(1 + bw),
			a4J = new Array(1 + bw),
			a4K = new Array(1 + bw),
			a4L = new Array(1 + bw);
		for (ct = bw; 0 <= ct; ct--) a4I[ct] = ba[ct + 1] - ba[ct], a4J[ct] = br[ct + 1] - br[ct], a4K[ct] = mL[ct + 1] - mL[ct], a4L[ct] = j9[ct + 1] - j9[ct];
		for (al = p.eP * p.eQ - 1; 0 <= al; al--)
			for (ct = bw; 0 <= ct; ct--)
				if (bV[al] >= ba[ct]) {
					hp = bV[al] - ba[ct], p.i8[4 * al] = br[ct] + a4M(a4J[ct] * hp, a4I[ct]), p.i8[4 * al + 1] = mL[ct] + a4M(a4K[ct] * hp, a4I[ct]), p.i8[4 * al + 2] = j9[ct] + a4M(a4L[ct] * hp, a4I[ct]), p.i8[4 * al + 3] = 255;
					break
				} p.vw.putImageData(bf, 0, 0), p.a4E(p.fo) && kc.a0v() && p.a4E(p.fo) && (bf = kc.r5("arena"), a4O = kc.r5("territorial.io"), a4P(bf, 5, .5, .5, .1), a4P(a4O, 2, .5, .45, .1)), p.qr = !0, dY.dk = !0
	}, this.a4Q = function() {
		for (var i5, bi, bj, i9, iA, hq, a48 = 0, ba = p.eP, bb = p.eQ, hp = ba * bb * 4, i6 = fw, i7 = p.i8, al = ba - 1; 0 <= al; al--) i6[(i5 = al << 2) + 2] = i6[hp - i5 - 2] = 3;
		for (hp = 4 * ba, al = bb - 1; 0 <= al; al--) i6[(i5 = al * hp) + 2] = i6[i5 + hp - 2] = 3;
		for (i9 = ba - 1, iA = bb - 1, bj = 1; bj < iA; bj++)
			for (hp = bj * ba, bi = 1; bi < i9; bi++) hq = 1 - (i7[(i5 = hp + bi << 2) + 2] > i7[i5 + 1] && i7[i5 + 2] > i7[i5]), i6[i5 + 2] = 6 - 5 * hq, a48 += hq;
		this.a47 = (ba - 2) * (bb - 2), this.iC = 0, p.a4R(p.fo) && (p.iC.i4(), p.iC.iD(4, 5)), this.a48 = o.fS = a48 - this.iC, this.a49 = this.a47 - this.a48 - this.iC, this.a49 && (p.iC.iD(6, 2), p.iC.iP())
	}
}

function a4S() {
	var a4T = [L(69), L(70), L(71), L(72), L(73), L(74), L(75)],
		a4U = [100, 60, 30, 15, 6, 1],
		a4V = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		a4W = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		a4Y = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a4Z = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.a4a = function(id, br, ab) {
		br = this.a4b(br);
		return +(a4V[br][id] > ab)
	}, this.a4b = function(br) {
		for (var al = 0; al < a4U.length; al++)
			if (a4U[al] <= br) return al;
		return a4U.length
	}, this.a4c = function(br) {
		return a4T[this.a4b(br)]
	}, this.a4d = function(id, a4e) {
		return a4W[id].replace(new RegExp("x", "g"), a4e)
	}, this.a4f = function(id, a4e) {
		return a4Y[id].replace(new RegExp("x", "g"), a4e)
	}, this.a4g = function(id, a4h) {
		return this.a4Z[5][id]
	}
}

function a4i() {
	function a4j(aY) {
		var ak, aY = aY.target.files;
		aY && 0 < aY.length && (aY = aY[0], "json" === (ak = aY.name.split("."))[ak.length - 1].toLowerCase()) && ((ak = new FileReader).onload = a4s, ak.readAsText(aY))
	}

	function a4s(aY) {
		var a4v;
		o.de || (aY = JSON.parse(aY.target.result), a4v = o.data = new lo, a4w(aY, a4v, "mapType", 0, 2), a4w(aY, a4v, "mapProceduralIndex", 0, 255), a4w(aY, a4v, "mapRealisticIndex", 0, 255), a4w(aY, a4v, "mapSeed", 0, 16383), function(a4u, a4v, eR,
				max) {
				a4u = a4u[eR];
				a4v[eR] = a52(a4u) ? a4u.slice(0, max) : a4v[eR]
			}(aY, a4v, "mapName", 20), function(a4u, a4v, eR) {
				var dB;
				2 === a4v.mapType && (!a52(a4u = a4u[eR]) || a4u.length <= 20 ? a4v.mapType = 0 : ((dB = new Image).onload = function() {
					a2.a0S.sl(dB, 1), dB.onload = null, dB = null
				}, dB.src = a4u))
			}(aY, a4v, "canvas"), a4w(aY, a4v, "passableWater", 0, 1), a4w(aY, a4v, "passableMountains", 0, 1), a4w(aY, a4v, "playerCount", 1, 512), a4w(aY, a4v, "humanCount", 1, 1), a4w(aY, a4v, "selectedPlayer", 0, 0), a4w(aY, a4v, "gameMode",
				0, 1), a4w(aY, a4v, "playerMode", 0, 0), a4w(aY, a4v, "battleRoyaleMode", 0, 0), a4w(aY, a4v, "numberTeams", 0, 8), a4w(aY, a4v, "isZombieMode", 0, 0), a4w(aY, a4v, "isContest", 0, 0), a4w(aY, a4v, "isReplay", 0, 0), a4z(aY, a4v,
				"elo", 16, 2, 16383), a4w(aY, a4v, "colorsType", 0, 1), a4w(aY, a4v, "colorsPersonalized", 0, 1), a4z(aY, a4v, "colorsData", 32, 512, 262143), a4w(aY, a4v, "selectableColor", 0, 1), a4z(aY, a4v, "teamPlayerCount", 16, 9, 512),
			a4w(aY, a4v, "neutralBots", 0, 1), a4w(aY, a4v, "botDifficultyType", 0, 3), a4w(aY, a4v, "botDifficultyValue", 0, 15), a4z(aY, a4v, "botDifficultyTeam", 8, 9, 15), a4z(aY, a4v, "botDifficultyData", 8, 512, 15), a4w(aY, a4v,
				"spawningType", 0, 2), a4w(aY, a4v, "spawningSeed", 0, 16383), a4z(aY, a4v, "spawningData", 16, 1024, 4095), a4w(aY, a4v, "selectableSpawn", 0, 1), a4w(aY, a4v, "playerNamesType", 0, 2),
			function(a4u, a4v, eR, size, max) {
				var iJ = a4u[eR];
				if (Array.isArray(iJ)) {
					for (var iM = new Array(size), bw = Math.min(iJ.length, size), al = 0; al < bw; al++) iM[al] = a52(iJ[al]) ? iJ[al].slice(0, max) : "";
					iM.fill("", bw), a4v[eR] = iM
				}
			}(aY, a4v, "playerNamesData", 512, 20), a4w(aY, a4v, "selectableName", 0, 1), a4w(aY, a4v, "aIncomeType", 0, 2), a4w(aY, a4v, "aIncomeValue", 0, 255), a4z(aY, a4v, "aIncomeData", 8, 512, 255), a4w(aY, a4v, "tIncomeType", 0, 2), a4w(
				aY, a4v, "tIncomeValue", 0, 255), a4z(aY, a4v, "tIncomeData", 8, 512, 255), a4w(aY, a4v, "iIncomeType", 0, 2), a4w(aY, a4v, "iIncomeValue", 0, 255), a4z(aY, a4v, "iIncomeData", 8, 512, 255), a4w(aY, a4v, "sResourcesType", 0, 2),
			a4w(aY, a4v, "sResourcesValue", 0, 2047), a4z(aY, a4v, "sResourcesData", 16, 512, 2047), a0.au(), a0.aw.ax[0] = 0, a0.a1(19))
	}

	function a4w(a4u, a4v, eR, min, max) {
		a4u = a4u[eR];
		a4v[eR] = "number" == typeof a4u && min <= a4u && a4u <= max ? Math.floor(a4u) : a4v[eR]
	}

	function a52(e0) {
		return "string" == typeof e0
	}

	function a4z(a4u, a4v, eR, a53, size, max) {
		var iJ = a4u[eR];
		if (Array.isArray(iJ)) {
			for (var iM = new(8 === a53 ? Uint8Array : 16 === a53 ? Uint16Array : Uint32Array)(size), bw = Math.min(iJ.length, size), al = 0; al < bw; al++) iM[al] = ac.ad(iJ[al], 0, max);
			a4v[eR] = iM
		}
	}
	this.az = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = a4j, input.click()
	}, this.b0 = function() {
		for (var a4n, a4q, a4k = o.data, keys = Object.keys(a4k), a4l = {}, al = 0; al < keys.length; al++) {
			var key = keys[al];
			a4k[key] instanceof Uint8Array || a4k[key] instanceof Uint16Array || a4k[key] instanceof Uint32Array ? a4l[key] = Array.from(a4k[key]) : a4l[key] = a4k[key]
		}
		a4l.canvas = 2 === a4l.mapType && a4l.canvas ? a4l.canvas.toDataURL() : null, a4n = a4l, a4n = JSON.stringify(a4n, null, 2), a4n = new Blob([a4n], {
			type: "application/json"
		}), (a4q = document.createElement("a")).href = URL.createObjectURL(a4n), a4q.download = "tt_scenario.json", a4q.click()
	}
}

function a54(b8, ze) {
	var ao;
	this.resize = function() {
		for (var al = 0; al < b8.length; al++) w.bc.jV(b8[al].button);
		ao.style.gap = ao.style.padding = w.bc.jW(h4.a57)
	}, (ao = document.createElement("div")).style.display = "grid", ao.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", ao.style.overflowY = "auto", ao.style.gridAutoRows = "5.3em", ao.style.maxHeight = "100%";
	for (var al = 0; al < b8.length; al++) b8[al].a56(1), ao.appendChild(b8[al].button);
	ze.appendChild(ao)
}

function po(data) {
	var x8, a58;

	function a5E(aG, a6G) {
		if (!data.a5A) {
			if (data.a67) {
				if (a6G) return
			} else {
				if (!a6G) return;
				if (data.g9 < 1e4) return
			}
			var a6J, aT = new aU,
				a6H = 1e5 <= data.g9,
				a6I = aT.aV(a6G ? (a6H ? "⚠️ " : "") + L(168) : L(169)),
				a6L = (a6H && (a6I.style.color = "yellow"), a6G ? aT.a5j(L(170, [w.bL.a5Z(data.g9, .01, 0)])) : ((a6J = new aa({
					value: data.a6K,
					ab: -1
				})).aY.readOnly = !0, a6J.aY.type = "password", aT.aX(a6J), aT.aX(new aZ([new f(L(104), function(aY) {
					return aY.textContent === L(104) ? (aY.textContent = L(105), a6J.aY.type = "text") : (aY.textContent = L(104), a6J.aY.type = "password"), !0
				}).button, new f(L(101), function(aY) {
					return w.bc.jo(a6J.aY), w.bc.jp(aY), !0
				}).button]))), aT.aq(L(a6G ? 169 : 171)).style.marginTop = "0.75em", new aa({
					value: "",
					ab: -1
				}, 0, 0)),
				a6M = (a6L.aY.type = "email", a6L.aY.autocomplete = "email", a6L.aY.name = "email", a6L.aY.inputMode = "email", a6L.aY.spellcheck = !1, aT.aX(a6L), aT.aX(new aZ([new f(L(172), function(aY) {
					return f2.a5g.zP({
						action: 3,
						e0: a6L.aY.value.trim().substring(0, 63)
					}), w.bc.jp(aY), !0
				}).button])), a6G && aT.a5j(L(173)), aT.aq(L(174)).style.marginTop = "0.75em", new aa({
					value: "",
					ab: -1
				}, 1));
			aT.aX(a6M), aT.aX(new aZ([new f(L(175), function() {
				f2.a5g.zX({
					action: 4,
					dw: "",
					value: Math.floor(+a6M.aY.value)
				}), a0.a1(8, a0.dV().ph, new a5B(18))
			}).button])), aG.push(aT)
		}
	}
	this.show = function() {
		data.a5A && a59.a6p("account", data.dw), x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a58.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(data.username, [new f("⬅️ " + L(1), function() {
		a59.clear(), a0.bC()
	}), new f(data.a5A ? "🔄 " + L(76) : L(77), function() {
		a0.a1(8, data.a5A ? a0.dV().ph : void 0, new a5B(25, {
			action: 0,
			dw: data.dw,
			a5C: data.a5C
		}))
	}, 0, 0, 1)]), a58 = new j(x8.k, function() {
		var aG = [];
		a5E(aG, 1), aG.push(function() {
				var aT = new aU;
				aT.aV(L(142)), data.a67 && (aT.aq("✅ " + L(143)).style.marginBottom = "0.75em");
				var a68 = data.a69;
				a68 < 1 ? (aT.aq(L(144)), 0 === data.a6A ? aT.a5j(L(145)) : 1 === data.a6A ? aT.a5j(L(146)) : 2 === data.a6A ? aT.a5j(L(147)) : 3 === data.a6A ? aT.a5j(L(148)) : 4 === data.a6A ? aT.a5j(L(149)) : 5 === data.a6A ? aT.a5j(L(
					150)) : 6 === data.a6A ? aT.a5j(L(151)) : aT.a5j(L(152))) : (aT.aq(L(153)), a68 = a68 < 2 ? L(154) : a68 < 61 ? 2 === a68 ? L(155) : L(156, [a68 - 1]) : a68 < 84 ? 61 === a68 ? L(157) : L(158, [a68 - 60]) : a68 <
					255 ? 84 === a68 ? L(159) : L(160, [a68 - 83]) : L(161), aT.a5j(a68));
				{
					var a5i, a5c;
					aT.aX(new rq), data.a5A && (a5i = aT.a5j(), aT.aX(new aZ([new f(a5.a5n.gH(data.dw) ? L(162) : L(163), function(aY) {
						return a5.a5n.a6C(data.dw) ? (aY.textContent = L(162), a5c(1)) : (aY.textContent = L(163), a5c(0)), !0
					}).button])), a5c = function(bV) {
						a5i.textContent = bV ? L(164) : ""
					}, a5.a5n.gH(data.dw) && a5c(1), aT.aX(new rq))
				}
				var rx = new aa({
					value: data.username,
					ab: -1
				});
				rx.aY.readOnly = !0, aT.aX(rx), aT.aX(new aZ([new f(L(101), function(aY) {
					return w.bc.jo(rx.aY), w.bc.jp(aY), !0
				}).button])), data.a5A ? (aT.aX(new rq), aT.aq(f2.aw.a5W("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aT.aX(new aZ([new f(L(166), function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 0
					}), w.bc.jp(aY), !0
				}, hM.yt).button])), aT.aX(new aZ([new f(L(167), function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 1
					}), w.bc.jp(aY), !0
				}, hM.yt).button])), aT.aX(new aZ([new f("Cheater", function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 2
					}), w.bc.jp(aY), !0
				}, hM.yt).button])), aT.aX(new aZ([new f("False Reporter", function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 3
					}), w.bc.jp(aY), !0
				}, hM.yt).button])), (a68 = "CRTOR" === (a68 = a5.c0.data[105].value) || "ADMIN" === a68) && (aT.aX(new aZ([new f("Block Account", function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 4
					}), w.bc.jp(aY), !0
				}, hM.a6E).button])), aT.aX(new aZ([new f("Ban IP", function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 5
					}), w.bc.jp(aY), !0
				}, hM.a6E).button])), aT.aX(new aZ([new f("Gold Seizure", function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 6
					}), w.bc.jp(aY), !0
				}, hM.a6E).button])), aT.aX(new aZ([new f("Remove Punishments", function(aY) {
					return f2.a5g.zX({
						action: 3,
						dw: data.dw,
						value: 7
					}), w.bc.jp(aY), !0
				}, hM.a6F).button])))) : aT.a5j(L(165));
				return aT
			}()),
			function(aG) {
				var aT, a5i, a6O, a6P, a5d, ry, a5f;
				data.a5A || ((aT = new aU).aV(L(176)), (a5i = aT.a5j(data.a6N.length + " / 160")).style.textAlign = "center", a6O = !0, (a6P = new bJ(0, 1, function(aY) {
					aY = aY.target.value.length;
					a5i.textContent = aY + " / 160", 160 < aY ? a6O && (a6O = !1, ry.bQ(1)) : a6O || (a6O = !0, ry.bQ(0))
				})).aY.rows = 6, a6P.aY.style.fontSize = "1em", a6P.bK(data.a6N), aT.aX(a6P), 0 !== data.a6Q ? (ry = new f(L(177), function() {
					if (!a6O) return !0;
					a0.a1(8, a0.dV().ph, new a5B(29, {
						action: 1,
						e0: a6P.bE().substring(0, 160)
					}))
				}, 0, 0, 1), aT.aX(new aZ([ry.button])), aT.aX(new aZ([new f(1 === data.a6Q ? L(178) : L(179), function() {
					a0.a1(8, a0.dV().ph, new a5B(29, {
						action: 0,
						e0: ""
					}))
				}, 0, 0, 1).button])), aT.a5j(1 === data.a6Q ? L(180, [data.a6R - 1]) : L(181, [data.a6R - 1])), aT.a5j(L(182, [data.a6S]))) : (a5d = new f(L(183), function() {
					if (!a6P.aY.readOnly) return !0;
					a0.a1(8, a0.dV().ph, new a5B(29, {
						action: 1,
						e0: a6P.bE().substring(0, 160)
					}))
				}, 1), ry = new f(L(98), function(aY) {
					if (aY.textContent === L(98)) {
						if (!a6O) return !0;
						aY.textContent = L(99), a6P.aY.readOnly = !0, a5d.bQ(0), a5d.button.style.color = hM.a5h
					} else a5f();
					return !0
				}), aT.aX(new aZ([ry.button])), aT.a5j(L(182, [data.a6S])), a5f = function() {
					ry.button.textContent = L(98), a6P.aY.readOnly = !1, a5d.bQ(1), a5d.button.style.color = hM.hX
				}, aT.aX(new aZ([a5d.button]))), aG.push(aT))
			}(aG),
			function(aG) {
				var aT;
				data.a5A && 0 !== data.a6Q && ((aT = new aU).aV(L(184)), aT.a6T(data.a6N), aT.aX(new aZ([new f(L(185, 0, "Report"), function(aY) {
					return f2.aw.a5e(0) && (w.bc.jp(aY), f2.a5g.zW({
						action: 5,
						dw: data.dw
					})), !0
				}, 0, 0, 1).button])), aG.push(aT))
			}(aG), aG.push(function() {
				var aT = new aU,
					a5X = (aT.aV(L(78)), aT.aq(f2.aw.a5W("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(79), L(80), L(81), L(82), L(83), L(84), L(85), L(86), L(87), L(88), L(89), L(90), L(91), L(92)]),
					br = data.a5Y;
				return aT.aq(L(93) + w.bL.a5Z(data.g9, .01, 2) + "<br>" + L(94) + (br + 1) + " / " + data.a5a + "<br>" + L(95) + a5X[function(br, g9) {
					if (br < 10) return 0;
					if (br < 30) return 1;
					if (br < 60) return 2;
					if (3e4 <= (g9 = ac.eB(g9, 100))) return 3;
					if (12e3 <= g9) return 4;
					if (7e3 <= g9) return 5;
					if (3e3 <= g9) return 6;
					if (1e3 <= g9) return 7;
					if (500 <= g9) return 8;
					if (200 <= g9) return 9;
					if (70 <= g9) return 10;
					if (20 <= g9) return 11;
					if (3 <= g9) return 12;
					return 13
				}(br, data.g9)]), aT
			}()), data.a5A && aG.push(function() {
				var aT = new aU,
					rx = (aT.aV(L(96)), aT.aq(f2.aw.a5W("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new aa({
						value: a5.c0.data[147].value,
						ab: -1
					}, 1, void 0, function(aY) {
						a5.a6.a7(147, a5c(aY.target.value))
					})),
					a5d = (aT.aX(rx), new f(L(97), function(aY) {
						return rx.aY.readOnly && f2.aw.a5e(0) && (w.bc.jp(aY), a5f(), f2.a5g.zX({
							action: 0,
							dw: data.dw,
							value: parseInt(a5.c0.data[147].value, 10)
						})), !0
					}, 1)),
					ry = new f(L(98), function(aY) {
						return aY.textContent === L(98) ? (aY.textContent = L(99), rx.aY.readOnly = !0, a5d.bQ(0), a5d.button.style.color = hM.a5h, a5.a6.a7(147, rx.aY.value), a5c(a5.c0.data[147].value)) : a5f(), !0
					}),
					a5i = (aT.aX(new aZ([ry.button])), aT.a5j()),
					a5c = function(bV) {
						a5i.innerHTML = a0.aw.a5k(bV, a5.c0.data[105].value, data.dw)
					},
					a5f = function() {
						ry.button.textContent = L(98), rx.aY.readOnly = !1, a5d.bQ(1), a5d.button.style.color = hM.hX
					};
				return a5c(a5.c0.data[147].value), aT.aX(new aZ([a5d.button])), aT
			}());
		aG.push(function() {
			var aT = new aU,
				rx = (aT.aV(L(100)), new aa({
					value: data.dw,
					ab: -1
				})),
				a5l = (rx.aY.readOnly = !0, aT.aX(rx), aT.aX(new aZ([new f(L(101), function(aY) {
					return w.bc.jo(rx.aY), w.bc.jp(aY), !0
				}).button])), aT.aX(new rq), new aa({
					value: data.dw,
					ab: -1
				}));
			return aT.aX(a5l), aT.aX(new aZ([new f(L(102), function(aY) {
				a0.a1(8, a0.dV().ph, new a5B(25, {
					action: 0,
					dw: a5l.aY.value,
					a5C: 0
				}))
			}).button])), aT
		}()), data.a5A || (aG.push(function() {
			var aT = new aU,
				a5m = (aT.aV(L(103)), new aa(a5.c0.data[106]));
			return a5m.aY.readOnly = !0, a5m.aY.type = "password", aT.aX(a5m), aT.aX(new aZ([new f(L(104), function(aY) {
				return aY.textContent === L(104) ? (aY.textContent = L(105), a5m.aY.type = "text") : (aY.textContent = L(104), a5m.aY.type = "password"), !0
			}).button, new f(L(101), function(aY) {
				return w.bc.jo(a5m.aY), w.bc.jp(aY), !0
			}).button])), aT.aX(new aZ([new f(L(106), function() {
				a0.a1(8, a0.dV().ph, new a5B(15))
			}).button])), aT.aV(L(107), "0.8em"), aT.a5j(L(108)), aT.a5j(L(109)), aT.a5j(L(110)), aT
		}()), aG.push(function() {
			var aT = new aU;
			return aT.aV(L(111)), aT.aX(new aZ([new f(L(112), function() {
				a0.a1(6, a0.dV().ph)
			}).button])), aT.aX(new aZ([new f(L(113), function() {
				a5.a6.a7(105, ""), a0.a1(8, a0.dV().ph, new a5B(18))
			}).button])), aT.aX(new aZ([new f(L(114) + a5.c0.data[105].value, function() {
				a0.a1(4, 0, new st(L(115), L(116), !0, [new f("⬅️ " + L(1), function() {
					a0.a1(7, a0.qA(7).ph)
				})]))
			}, hM.yt).button])), aT
		}()), aG.push(function() {
			function a5q(ab) {
				a5p[0].bQ(0 === ab ? hM.a5s : hM.a5t), a5p[1].bQ(0 === ab ? hM.a5s : hM.yt), a5p[2].bQ(ab === a5o.bt.length - 1 || ab < 5 ? hM.a5s : hM.yt)
			}
			var a5o, a5p, aT = new aU;
			aT.aV(L(121)), aT.a5j(L(122)), a5.aw.dr();
			return a5p = [new f(L(123), function() {
				var ab = Math.min(a5.c0.data[117].value, a5o.bt.length - 1);
				ab < 1 || (ab = a5.aw.dv(ab), a5.a6.a7(105, ab.dw), a5.a6.a7(106, ab.password), a0.a1(8, a0.dV().ph, new a5B(18)))
			}, hM.a5s, 1), new f(L(119), function() {
				var ab = Math.min(a5.c0.data[117].value, a5o.bt.length - 1);
				if (!(ab < 1)) {
					a5o.bt[ab].remove(), a5o.bt.splice(ab, 1);
					for (var al = ab; al < a5o.bt.length; al++) a5o.bt[al].name = "" + al;
					a5.aw.du(ab), ab = a5.c0.data[117].value, a5o.bt[ab].textContent = a5o.bt[ab].textContent.replace("⚪", "🟢"), a5q(ab)
				}
			}, hM.a5s, 1), new f(L(120), function() {
				var ab = Math.min(a5.c0.data[117].value, a5o.bt.length - 1);
				if (ab !== a5o.bt.length - 1) {
					for (var al = a5o.bt.length - 1; ab < al; al--) a5o.bt[al].remove(), a5o.bt.splice(al, 1), a5.aw.du(al);
					a5q(ab)
				}
			}, hM.a5s, 1)], a5o = new ai(a5.c0.data[117], a5q), a5q(0), a5o.bt[0].style.marginTop = "0.5em", aT.ah(a5o), aT.aX(new aZ([a5p[0].button])), aT.aX(new aZ([a5p[1].button])), aT.aX(new aZ([a5p[2].button])), aT
		}()));
		return aG.push(function() {
				var aT = new aU,
					a5X = (aT.aV(L(127)), [L(128), L(129), L(130), L(131)]),
					br = data.a5z;
				return aT.aq(L(132) + (data.a60 / 100).toFixed(2) + "<br>" + L(94) + (br + 1) + " / " + data.a5a + "<br>" + L(95) + a5X[br < 10 ? 0 : br < 50 ? 1 : br < 200 ? 2 : 3]), aT
			}()), aG.push(function() {
				var aT = new aU;
				return aT.aV(L(124)), aT.aq(L(125) + w.bL.a5Z(data.a5w, .1, 1) + "<br>" + L(94) + (data.a5x + 1) + " / " + data.a5a + "<br>" + L(126) + data.a5y), aT
			}()),
			function(aG) {
				var aT = new aU,
					a6U = data.a6V,
					a6Y = (aT.aV(L(186)), aT.aq(L(187, [data.a6W.length ? "[" + data.a6W + "]" : "-"])), aT.aq(L(188, [w.bL.a5Z(a6U, .01, 2)])), aT.aq(L(189, [data.a6X + 1 + " / " + data.a5a])), data.a6Z),
					a6a = (aT.aq(L(190, [w.bL.a5Z(a6Y, .1, 1)])), data.a6b);
				aT.aq(L(191, [a6a])), aT.aq(L(192, [w.bL.a5Z(a6Y / Math.max(a6a, 1), .1, 2)])), a6U = data.a6c, aT.aV(L(193), "0.8em"), aT.aq(L(187, [data.a6d.length ? "[" + data.a6d + "]" : "-"])), aT.aq(L(188, [w.bL.a5Z(a6U, .01, 2)])),
					a6Y = data.a6e, aT.aq(L(190, [w.bL.a5Z(a6Y, .1, 1)])), a6a = data.a6f, aT.aq(L(191, [a6a])), aT.aq(L(192, [w.bL.a5Z(a6Y / Math.max(a6a, 1), .1, 2)])), aT.aq(f2.aw.a5W("/wiki/clans"), "0.75em").style.marginTop = "0.8em", aG
					.push(aT)
			}(aG),
			function(aG) {
				var aT = new aU;
				aT.aV(L(194)), aT.aq(L(132) + (data.a6g / 10).toFixed(1) + "<br>" + L(95) + (data.a6h.length ? L(195, [data.a6h]) : L(196))), data.a5A && aT.aX(new aZ([new f(L(197), function(aY) {
					return f2.aw.a5e(0) && (w.bc.jp(aY), f2.a5g.zW({
						action: 4,
						dw: data.dw
					})), !0
				}, 0, 0, 1).button]));
				aT.aq(f2.aw.a5W("/wiki/clans"), "0.75em").style.marginTop = "0.8em", aG.push(aT)
			}(aG), aG.push(function() {
				var aT = new aU;
				if (aT.aV(L(139)), aT.aq(L(140) + data.a63 + "<br>" + L(94) + (data.a64 + 1) + " / " + data.a5a + "<br>" + L(95) + a65.a4c(data.a64)), data.a5A) {
					var rx = new aa({
							value: a5.c0.data[157].value,
							ab: -1
						}, 1, void 0, function(aY) {
							a5.a6.a7(157, a5c(aY.target.value))
						}),
						ry = (rx.aY.style.marginTop = "0.6em", aT.aX(rx), new f(L(98), function(aY) {
							return aY.textContent === L(98) ? (aY.textContent = L(99), rx.aY.readOnly = !0, a66[0].bQ(0), a66[1].bQ(0), a66[0].button.style.color = hM.a5h, a66[1].button.style.color = hM.a5h, a5c(a5.c0.data[157]
								.value)) : a5f(), !0
						})),
						a66 = (aT.aX(new aZ([ry.button])), [new f("−", function(aY) {
							return rx.aY.readOnly && f2.aw.a5e(0) && (w.bc.jp(aY), a5f(), f2.a5g.zX({
								action: 2,
								dw: data.dw,
								value: ac.ad(parseInt(a5.c0.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new f("+", function(aY) {
							return rx.aY.readOnly && f2.aw.a5e(0) && (w.bc.jp(aY), a5f(), f2.a5g.zX({
								action: 1,
								dw: data.dw,
								value: ac.ad(parseInt(a5.c0.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						a5i = aT.a5j(),
						a5c = function(bV) {
							return bV = w.cO.jP(bV, 3, 32767), a5i.textContent = L(141, [bV - 1, bV, a5.c0.data[105].value]), bV
						};
					aT.aX(new aZ([a66[0].button, a66[1].button]));
					for (var al = 0; al < 2; al++) a66[al].button.style.fontSize = "1.6em";
					var a5f = function() {
						ry.button.textContent = L(98), rx.aY.readOnly = !1, a66[0].bQ(1), a66[1].bQ(1), a66[0].button.style.color = hM.hX, a66[1].button.style.color = hM.hX
					};
					a5c(a5.c0.data[157].value)
				}
				return aT
			}()),
			function(aG) {
				var aT, jn;
				data.a5A && !data.a6i || (0 === c3.id || data.a5A || data.a6i) && ((aT = new aU).aV("Patreon"), !data.a5A && data.a6j ? aT.aX(new aZ([new f(L(104), function() {
					f2.a5g.zW({
						action: 7,
						dw: data.dw
					}), data.a6j = 0, a0.a1(7)
				}).button])) : data.a6i ? (aT.aq(L(198, [(data.a6k / 100).toFixed(2)]) + "<br>" + L(199, [1 + data.a6l + " / " + data.a6m]) + "<br>" + L(200, [data.a6n ? L(201) : L(202)])), data.a5A || aT.aX(new aZ([new f(L(203),
					function() {
						f2.a5g.zW({
							action: 8,
							dw: data.dw
						}), data.a6i = 0, a5.a6.a7(160, 0), a0.a1(7)
					}).button]))) : (aT.aq(L(204), "0.75em").style.marginBottom = "0.3em", aT.aq("  • " + L(205), "0.75em").style.whiteSpace = "pre", aT.aq("  • " + L(206), "0.75em").style.whiteSpace = "pre", aT.aq("  • " + L(207),
						"0.75em").style.whiteSpace = "pre", aT.aq(L(208), "0.75em").style.marginTop = "1.0em", aT.aq(L(209), "0.75em").style.marginTop = "1.0em", aT.aq("<a href='" + yr.a6o +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", jn = "https://www.patreon.com/oauth2/authorize?state=" + data.dw +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + f2.aw.sp() + "/", aT.aq(L(210), "0.75em").style.marginTop = "1.0em", aT.aq("<a href='" + jn +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.a5A || (aT.aX(new rq), aT.aX(new aZ([new f(L(105), function() {
						f2.a5g.zW({
							action: 6,
							dw: data.dw
						}), data.a6j = 1, a0.a1(7)
					}).button])), aT.aq(L(211), "0.75em").style.marginTop = "0.75em")), aG.push(aT))
			}(aG), aG.push(function() {
				var aT = new aU,
					a5X = (aT.aV(L(133)), [L(134), L(135), L(136), L(137), "Scout", L(138)]),
					br = data.a61;
				return aT.aq(L(132) + (data.a62 / 100).toFixed(2) + "<br>" + L(94) + (br + 1) + " / " + data.a5a + "<br>" + L(95) + a5X[br < 3 ? 0 : br < 20 ? 1 : br < 100 ? 2 : br < 500 ? 3 : br < 2e3 ? 4 : 5]), aT.aq(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", aT
			}()),
			function(aG) {
				var aT, a5o, a5p, ab, a5q;
				data.a5A || a5.a5n.get().length && ((aT = new aU).aV(L(117)), ab = 0, a5q = function() {
					var a5r = a5.a5n.get().length;
					a5p[0].bQ(ab === a5r ? hM.a5s : hM.a5t), a5p[1].bQ(ab === a5r ? hM.a5s : hM.yt), a5p[2].bQ(ab === a5r || a5r - 1 <= ab || ab < 5 ? hM.a5s : hM.yt)
				}, a5p = [new f(L(118), function() {
					a0.a1(8, void 0, new a5B(25, {
						action: 0,
						dw: a5.a5n.get()[ab],
						a5C: 0
					}))
				}, hM.a5s, 1), new f(L(119), function() {
					a5.a5n.a5u(ab), a5o.bt[ab].remove(), a5o.bt.splice(ab, 1);
					for (var al = ab; al < a5o.bt.length; al++) a5o.bt[al].name = "" + al;
					a5.a5n.get().length && (ab = Math.max(ab - 1, 0), a5o.bt[ab].textContent = a5o.bt[ab].textContent.replace("⚪", "🟢")), a5q()
				}, hM.a5s, 1), new f(L(120), function() {
					for (var bP = a5o.bt.length - 1; ab < bP; bP--) a5.a5n.a5u(bP), a5o.bt[bP].remove(), a5o.bt.splice(bP, 1);
					a5q()
				}, hM.a5s, 1)], a5q(), (a5o = new ai(a5.a5n.a5v(), function(al) {
					ab = al, a5q()
				})).bt[0].style.marginTop = "0.5em", aT.ah(a5o), aT.aX(new aZ([a5p[0].button])), aT.aX(new aZ([a5p[1].button])), aT.aX(new aZ([a5p[2].button])), aG.push(aT))
			}(aG), a5E(aG, 0), aG
	}())
}

function a6q() {
	var a6r = [];

	function a6t(dw) {
		a6r.unshift(dw), a5.a6.a7(161, a6r.join(";"))
	}

	function a6s(dw) {
		for (var a6u = a6r, bw = a6u.length, al = 0; al < bw; al++)
			if (a6u[al] === dw) return a6u.splice(al, 1), a5.a6.a7(161, a6u.join(";")), 1
	}
	this.a4 = function() {
		var e0 = a5.c0.data[161].value;
		e0.length && (a6r = e0.split(";"))
	}, this.get = function() {
		return a6r
	}, this.a5v = function() {
		return {
			aj: a6r,
			value: 0
		}
	}, this.gH = function(dw) {
		return w.x.has(a6r, dw)
	}, this.a6C = function(dw) {
		return a6s(dw) ? 0 : (a6t(dw), 1)
	}, this.hI = function(dw) {
		a6s(dw) && a6t(dw)
	}, this.a5u = function(ab) {
		ab < a6r.length && (a6r.splice(ab, 1), a5.a6.a7(161, a6r.join(";")))
	}
}

function uz() {
	this.a6v = function(size) {
		for (var vs = oV, ak = [], al = 0; al < size; al++) ak.push(String.fromCharCode(vs.oX(16)));
		return ak.join("")
	}, this.k9 = function(e0) {
		return 20 < (e0 = e0.trim()).length ? e0.substring(0, 20) : e0
	}
}

function a6w() {
	this.b5 = new a1W, this.c0 = new a6x, this.a6 = new a6y, this.aw = new dp, this.a5n = new a6q, this.a4 = function() {
		this.c0.a4(), (new bx).a4(), this.a5n.a4(), this.aw.dz()
	}
}

function a6z() {
	this.cy = null, this.cx = 0, this.a70 = function() {
		for (this.cx = 0, al = o.bI - 1; 0 <= al; al--) 0 !== eF.hu[al] && this.cx++;
		this.cy = new Uint16Array(this.cx);
		for (var bw = 0, al = 0; al < o.bI; al++) 0 !== eF.hu[al] && (this.cy[bw++] = al)
	}, this.a3Q = function() {
		for (var fQ = eF.fQ, a73 = eF.a73, a74 = eF.a74, cy = cw.cy, al = cw.cx - 1; 0 <= al; al--) {
			var i5 = cy[al],
				hB = fQ[i5],
				cX = a73[i5];
			hB <= ac.eB(cX, 4) ? qj.ld(i5) : cX <= hB ? 250 <= (a73[i5] = hB) && (a74[i5] = 1) : a73[i5] = cX - Math.max(1, ac.eB(cX - hB, 1e3))
		}
		this.ql()
	}, this.ql = function() {
		for (var hu = eF.hu, rU = this.cy, a72 = this.cx, al = a72 - 1; 0 <= al; al--) 0 === hu[rU[al]] && (rU[al] = rU[--a72]);
		this.cx = a72
	}
}

function a75() {
	var a76, a77, a78, a79, a7A, a7B = 0,
		a7C = 0;

	function a7E(al) {
		var a7G = !0,
			oC = hM.hX,
			ba = (1 === a76[al].id ? a76[al].hZ.fillStyle = hM.a7H : a76[al].cC === o.bI ? a76[al].hZ.fillStyle = hM.a7I : (ee.a7J(a76[al].cC), a76[al].hZ.fillStyle = w.color.a7K(ix.a7L[0], ix.a7L[1], ix.a7L[2], .87), 400 < w.x.f9(ix.a7L, 0, 2) && (
				a7G = !1, oC = hM.r1)), a76[al].canvas.width),
			gi = (a76[al].hZ.clearRect(0, 0, ba, a79), a76[al].hZ.fillRect(0, 0, ba, a79), a76[al].hZ.fillStyle = oC, ! function(hZ, ba, a79) {
				hZ.fillRect(0, 0, ba, 1), hZ.fillRect(0, a79 - 1, ba, 1), hZ.fillRect(0, 0, 1, a79), hZ.fillRect(ba - 1, 0, 1, a79)
			}(a76[al].hZ, ba, a79), a77 + 2 * a79 < ba && (a76[al].hZ.fillRect(ba - a77 - a79, 0, 1, a79), a76[al].hZ.fillText(eF.nF[a76[al].cC], Math.floor((ba - a77) / 2), Math.floor(.57 * a79))), 0 !== a76[al].id ? 0 : a79);
		a76[al].hZ.fillText(w.bL.gQ(a76[al].cD), Math.floor(ba - a77 / 2 - gi), Math.floor(.57 * a79)),
			function(al, ba, gi, a7G) {
				a76[al].hZ.fillStyle = a7G ? hM.a7Q : hM.a25;
				a7G = Math.floor(a77 * a76[al].cD / a76[al].a7S);
				a76[al].hZ.fillRect(Math.floor(ba - a77 - gi), a79 - a7A, a7G, a7A)
			}(al, ba, gi, a7G), 0 === a76[al].id ? (a7O(al, ba, a7G, oC), function(al, ba, a7G) {
				a76[al].hZ.strokeStyle = a7G ? hM.a7V : hM.a6F, a76[al].hZ.fillRect(a79, 0, 1, a79);
				a7G = ba - a79;
				a76[al].hZ.beginPath(), a76[al].hZ.moveTo(Math.floor(.3 * a79 + a7G), Math.floor(a79 / 2)), a76[al].hZ.lineTo(Math.floor(a79 - .3 * a79 + 0 + a7G), Math.floor(a79 / 2)), a76[al].hZ.stroke(), a76[al].hZ.beginPath(), a76[al].hZ
					.moveTo(Math.floor(a79 / 2 + a7G), Math.floor(.3 * a79)), a76[al].hZ.lineTo(Math.floor(a79 / 2 + a7G), Math.floor(a79 - .3 * a79 + 0)), a76[al].hZ.stroke()
			}(al, ba, a7G)) : a7O(al, 2 * a79, a7G, oC)
	}

	function a7O(al, ba, a7G, oC) {
		a76[al].hZ.strokeStyle = a76[al].a7T ? hM.a7U : a7G ? hM.hk : hM.hj, a76[al].hZ.fillStyle = oC, a76[al].hZ.fillRect(ba - a79, 0, 1, a79), a76[al].hZ.lineWidth = Math.max(Math.floor(a79 / 12), 3), a76[al].hZ.lineCap = "round";
		a7G = .35;
		ba = a79 + 1, a76[al].hZ.beginPath(), a76[al].hZ.moveTo(Math.floor(ba - a7G * a79 + 0), Math.floor(a7G * a79)), a76[al].hZ.lineTo(Math.floor(ba - a79 + a7G * a79), Math.floor(a79 - a7G * a79 + 0)), a76[al].hZ.stroke(), a76[al].hZ.beginPath(),
			a76[al].hZ.moveTo(Math.floor(ba - a79 + a7G * a79), Math.floor(a7G * a79)), a76[al].hZ.lineTo(Math.floor(ba - a7G * a79 + 0), Math.floor(a79 - a7G * a79 + 0)), a76[al].hZ.stroke()
	}

	function a7l(ak, ae) {
		for (var cD, al = ae - 1; 0 <= al; al--) cD = lF.cc(o.co, al), ak[al].cD !== cD && (ak[al].cD = cD, ak[al].a7S = Math.max(cD, ak[al].a7S), ak[al].a7F = !0)
	}

	function a7o(ak, af) {
		for (var gd = o.co << 3, sO = e3.aw.sO, s4 = e3.aw.s4, a2u = e3.aw.a2u, al = af - 1; 0 <= al; al--) {
			var a2v = a2u[gd + al],
				cD = sO[a2v];
			ak[al].cD !== cD ? (ak[al].cD = cD, ak[al].a7S = Math.max(cD, ak[al].a7S), ak[al].a7F = !0) : ak[al].a7T || s4[a2v] % 64 != 5 || (ak[al].a7T = !0, ak[al].a7F = !0)
		}
	}

	function a7D(a4k) {
		a4k.canvas = document.createElement("canvas"), p.vw.font = a78;
		var ba = a77;
		a4k.cC < o.bI && 0 === a4k.id && (ba += Math.floor(p.vw.measureText(eF.nF[a4k.cC] + "000").width)), ba += a79, 0 === a4k.id && (ba += a79), a4k.canvas.width = ba, a4k.canvas.height = a79, a4k.hZ = a4k.canvas.getContext("2d", {
			alpha: !0
		}), a4k.hZ.font = a78, w.bc.textBaseline(a4k.hZ, 1), w.bc.textAlign(a4k.hZ, 1)
	}

	function a7c(al) {
		return a3T.a7r() ? c2.ba - a76[al].canvas.width - h4.gap : a3T.bi
	}

	function a7d(al) {
		return Math.floor(2 * h4.gap + (a3T.a7r() ? hx.bb + h4.gap : 0) + a3T.bb + al * (1.3 * a79))
	}
	this.a4 = function() {
		a7B = a7C = 0, a76 = [], this.resize()
	}, this.resize = function() {
		a78 = cp.kT, a79 = cp.fontSize + 5, a79 = Math.floor(1.25 * a79), c3.h2.h3() && (a79 = Math.floor(1.25 * a79)), a7A = Math.floor(.15 * a79), p.vw.font = a78, a77 = Math.floor(p.vw.measureText("02 000 000 0000").width);
		for (var al = a76.length - 1; 0 <= al; al--) a7D(a76[al]), a7E(al)
	}, this.kl = function() {
		for (var al = a76.length - 1; 0 <= al; al--) a76[al].a7F && (a76[al].a7F = !1, a7E(al))
	}, this.h6 = function(eD, eI) {
		if (2 !== o.de && 0 !== eF.hu[o.co] && !o.ke && !w.cO.cm(o.co))
			for (var a7X, a7Y, a7Z, a7a = c3.h2.h3() ? a79 : 0, a7b = c3.h2.h3() ? Math.floor(.15 * a79) : 0, al = a76.length - 1; 0 <= al; al--)
				if (a7X = a7c(al), a7Y = a7d(al), a7Z = a76[al].canvas.width, a7Y - a7b <= eI && eI <= a7Y + a79 + a7b) {
					if (a7X - a7a <= eD && eD <= a7X + a79 + a7a) return a76[al].a7T || (a76[al].a7F = !0, a76[al].a7T = !0, 0 === a76[al].id ? pH.a2J.a7e(a76[al].cC) : pH.a2J.a7f(a76[al].cC)), !0;
					if (0 === a76[al].id && a7X + a7Z - a79 - a7a <= eD && eD <= a7X + a7Z + a7a) return a3R.yZ(3), pH.a2J.a7g(kX.a7h(), a76[al].cC), !0
				} return !1
	}, this.da = function() {
		var iJ, iM, ak, ae;
		0 === eF.hu[o.co] || w.cO.cm(o.co) && !o.ke || (iJ = a76.slice(0, a7B), iM = a76.slice(a7B, a7B + a7C), ak = iJ, ae = lF.ca(o.co), function(ak, ae) {
			if (a7B !== ae) return 1;
			for (var al = ae - 1; 0 <= al; al--)
				if (ak[al].cC !== lF.cb(o.co, al)) return 1;
			return
		}(ak, ae) ? a7l(ak = function(ak, ae) {
			var al, cC, j9, cD, a7q = [];
			loop: for (al = 0; al < ae; al++) {
				for (cC = lF.cb(o.co, al), j9 = 0; j9 < ak.length; j9++)
					if (ak[j9].cC === cC) {
						a7q.push(ak.splice(j9, 1)[0]);
						continue loop
					} cD = lF.cc(o.co, al), a7D(cD = {
					cC: cC,
					cD: cD,
					a7S: cD,
					id: 0,
					a7F: !0,
					a7T: !1,
					canvas: null,
					hZ: null
				}), a7q.push(cD)
			}
			return a7q
		}(ak, ae), ae) : a7l(ak, ae), iJ = ak, iM = function(ak) {
			var af = e3.aw.zt[o.co];
			return function(ak, af) {
				if (a7C !== af) return 1;
				for (var gd = o.co << 3, yx = e3.aw.yx, a2u = e3.aw.a2u, al = af - 1; 0 <= al; al--) {
					var a2v = a2u[gd + al];
					if (ak[al].cC !== yx[a2v]) return 1
				}
				return
			}(ak, af) ? a7o(ak = function(ak, af) {
				var al, cC, j9, a7q = [],
					gd = o.co << 3,
					yx = e3.aw.yx,
					sO = e3.aw.sO,
					a2u = e3.aw.a2u;
				loop: for (al = 0; al < af; al++) {
					var a2v = a2u[gd + al];
					for (cC = yx[a2v], j9 = 0; j9 < ak.length; j9++)
						if (ak[j9].cC === cC) {
							a7q.push(ak.splice(j9, 1)[0]);
							continue loop
						} a2v = sO[a2v], a7D(a2v = {
						cC: cC,
						cD: a2v,
						a7S: a2v,
						id: 1,
						a7F: !0,
						a7T: !1,
						canvas: null,
						hZ: null
					}), a7q.push(a2v)
				}
				return a7q
			}(ak, af), af) : a7o(ak, af), ak
		}(iM), a7B = iJ.length, a7C = iM.length, a76 = iJ.concat(iM))
	}, this.hJ = function() {
		if (0 !== eF.hu[o.co] && (!w.cO.cm(o.co) || o.ke))
			for (var al = a76.length - 1; 0 <= al; al--) hL.drawImage(a76[al].canvas, a7c(al), a7d(al))
	}
}

function a7s() {
	function a7w(player) {
		for (var a7t = eF.a7t[player], bw = a7t.length, a84 = Math.max(ac.eB(bw, 12), 1), iH = ee.iH, br = eC.qY(bw), al = 0; al < bw; al += a84)
			for (var iN = a7t[(al + br) % bw], h1 = 3; 0 <= h1; h1--) {
				var iO = iN + iH[h1];
				if (ee.a83(iO)) return {
					hd: iO,
					id: ee.a2m(iO),
					i5: player
				}
			}
		return null
	}

	function a81(player, a85) {
		var cD = w.cO.jC(player, ar.a86[ar.cD[player]]);
		eF.lT[player].push(a85.hd), lF.cW(player, cD, a85.i5), lR.sY(player, !0)
	}
	this.da = function(player) {
		return !!p.a4R(p.fo) && !!o.data.passableMountains && 0 !== eF.a7t[player].length && function(player) {
			var a7v = a7w(player);
			if (null === a7v) return !1;
			! function(player) {
				for (var cy = cw.cy, cx = cw.cx, bw = Math.min(cx, 12), eR = eC.qY(cx), rV = ix.rV, a7t = eF.a7t, v = 0, al = 0; al < bw; al++) {
					var i5 = cy[(al + eR) % cx];
					i5 !== player && a7t[i5].length && jG.jH(player, i5) && (rV[v++] = i5)
				}
				ix.rC[0] = v
			}(player);
			var a7y = function(a82) {
				for (var bw = ix.rC[0], rV = ix.rV, al = 0; al < bw; al++) {
					var a85 = a7w(rV[al]);
					if (null !== a85 && a85.id === a82) return a85
				}
				return null
			}(a7v.id);
			return null !== a7y ? (a81(player, a7y), !0) : function(player, a82) {
				var bw = ch.e7.e8;
				if (0 !== bw)
					for (var hd = ch.e7.c0[eC.qY(bw)] << 2, iH = ee.iH, h1 = eC.qY(4);;) {
						if (hd += iH[h1], ee.a83(hd)) {
							if (ee.a2m(hd) === a82) return a81(player, {
								hd: hd,
								i5: o.bI
							}), !0;
							break
						}
						if (!ee.lb(hd)) break
					}
				return !1
			}(player, a7v.id)
		}(player)
	}
}

function aa(bs, type, a87, a88) {
	var aY;
	this.aY = document.createElement("input"), (aY = this.aY).type = type ? "number" : "text", aY.id = "input" + a0.aw.a89++, aY.value = bs.value, aY.style.width = "100%", aY.style.userSelect = "none", aY.style.outline = "none", aY.style.resize =
		"none", aY.style.border = "inherit", aY.style.font = "inherit", aY.style.color = hM.hX, aY.style.backgroundColor = hM.wt, aY.style.fontSize = "1em", aY.style.padding = "0.1em 0.2em", aY.addEventListener("focus", function() {
			c2.a8A++
		}), aY.addEventListener("blur", function() {
			c2.a8A--, -1 !== bs.ab && a5.a6.a7(bs.ab, aY.value)
		}), aY.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== bs.ab && a5.a6.a7(bs.ab, aY.value), a87 ? a87() : aY.blur())
		}), a88 && aY.addEventListener("input", function(ga) {
			a88(ga)
		})
}

function a8B() {
	this.eB = function(ct, j9) {
		return Math.floor((ct + .5) / j9)
	}, this.a8C = function(ct, j9) {
		return Math.floor(ct * (j9 + .5))
	}, this.sqrt = function(bV) {
		return ~~Math.sqrt(bV + .5)
	}, this.pow = function(aY) {
		return Math.floor(Math.pow(2, aY) + .5)
	}, this.ad = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a8D = function(hp, hq, jA) {
		return Math.max(Math.min(hp, hq), jA)
	}, this.a8E = function(a8F, a8G, bi, bj) {
		bi -= a8F, a8F = bj - a8G, bj = 0;
		return 0 == bi ? bj = 0 <= a8F ? Math.PI : 0 : (bj = Math.atan(a8F / bi), bj += 0 < bi ? .5 * Math.PI : 1.5 * Math.PI), bj
	}, this.log2 = function(bV) {
		return Math.floor(!!bV * (1 + Math.log2(bV + .5)))
	}, this.log10 = function(bV) {
		return Math.floor(Math.log10(bV + .5))
	}, this.a3H = function(a8I, a8J, a8K, a8L, a8M) {
		return a8K - a8M < a8I && a8I < a8K + a8M && a8L - a8M < a8J && a8J < a8L + a8M
	}, this.a8N = function(wn, wp) {
		return wn * wn + wp * wp
	}
}

function a8O() {
	this.a8P = function(lx) {
		var a8f;
		pF.lu(55 + lv.y6.oX()), pF.pG(1, 0), pF.pG(6, 13), pF.pG(14, pC.a8e), pF.pG(4, c3.id), pF.pG(7, c3.c1), pF.pG(1, +pC.pD), pF.pG(1, +pC.pE), pF.pG(5, (new Date).getHours() % 24), a8f = fI.a8g(), pF.pG(8, a8f[0]), pF.pG(8, a8f[1]), lv.y6
			.a9(), f2.aw.send(lx, pF.oU)
	}, this.a8R = function(lx, a8S, a8T, a8U) {
		pF.lu(70), pF.pG(1, 0), pF.pG(6, 30), pF.pG(3, a8T), pF.pG(30, a8S), pF.pG(30, a8U), f2.aw.send(lx, pF.oU)
	}, this.a8V = function(a8W) {
		zU.a4(), zU.pG(1, 0), zU.pG(6, 6), gP.v0.a9(a8W, 16, zU), f2.aw.send(0, zU.zV())
	}, this.a8X = function(id) {
		pF.lu(13), pF.pG(1, 0), pF.pG(6, 15), pF.pG(6, id), f2.aw.send(0, pF.oU)
	}, this.a8Y = function(id, value) {
		pF.lu(43), pF.pG(1, 0), pF.pG(6, 3), pF.pG(6, id), pF.pG(30, value), f2.aw.send(0, pF.oU)
	}, this.a8Z = function(id, e0) {
		var bw = Math.min(e0.length, 63);
		pF.lu(19 + 16 * bw), pF.pG(1, 0), pF.pG(6, 26), pF.pG(6, id), pF.pG(6, bw), gP.uy.zQ(e0), f2.aw.send(0, pF.oU)
	}, this.a8a = function(a8b, ga) {
		pF.lu(7 + 26 * ga.length), pF.pG(1, 0), pF.pG(6, 9);
		for (var al = 0; al < ga.length; al++) pF.pG(16, ga[al][0]), pF.pG(10, ga[al][1]);
		f2.aw.send(a8b, pF.oU)
	}, this.a8c = function(a8d, sq) {
		pF.lu(20), pF.pG(1, 0), pF.pG(6, 19), pF.pG(1, a8d), pF.pG(12, sq), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.a8h = function(username) {
		pF.pG(5, username.length), gP.uy.zQ(username)
	}
}

function a8i() {
	this.a8j = function(lx) {
		var username = a5.c0.data[122].value.slice(0, 20),
			username = (pF.lu(24 + 16 * username.length + 18), pF.pG(1, 0), pF.pG(6, 1), pF.pG(10, pC.a8k), pF.pG(2, a5.c0.data[158].value), f2.zJ.a8h(username), w.color.a8l(a5.aw.dy()));
		pF.pG(6, username[0]), pF.pG(6, username[1]), pF.pG(6, username[2]), f2.aw.vV = lx, f2.aw.send(lx, pF.oU)
	}, this.f4 = function(a8m, bZ) {
		zU.a4(), zU.pG(1, 0), zU.pG(6, 2), zU.pG(3, a8m), 2 === a8m ? zU.pG(2, bZ) : 3 === a8m ? gP.v0.a9(bZ, 7, zU) : 5 === a8m && (zU.pG(3, bZ.id), zU.pG(3, bZ.value), zU.pG(30, bZ.dw)), f2.aw.send(f2.aw.vV, zU.zV())
	}
}

function q2() {
	var b, c, b7, aG;

	function g() {
		bA(), 2 !== o.data.iIncomeType && (o.data.iIncomeData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		2 === o.data.iIncomeType && w.x.bD(b7.bE(), o.data.iIncomeData, 255)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(21), [new f("⬅️ " + L(1), g)]), c = new j(b.k, (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(19), L(11), L(9)],
			value: o.data.iIncomeType
		}, function(ab) {
			bA(), 2 !== ab || o.data.iIncomeData || (o.data.iIncomeData = new Uint8Array(o.bI), o.data.iIncomeData.fill(32)), o.data.iIncomeType = ab, a0.a1(27)
		})), aG.push(aT)
	}(aG = []), function(aG) {
		var aT;
		1 === o.data.iIncomeType && ((aT = new aU).aV("Value"), aT.aX(new aa({
			ab: -1,
			value: o.data.iIncomeValue
		}, 1, 0, function(aY) {
			var value = ac.ad(Math.floor(aY.target.value), 0, 255);
			aY.target.value = o.data.iIncomeValue = value
		})), aG.push(aT))
	}(aG), function(aG) {
		var aT;
		2 === o.data.iIncomeType && ((aT = new aU).aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.iIncomeData, 4)), aT.aX(b7), aG.push(aT))
	}(aG), aG))
}

function a8n() {
	var a8o, a8p, a8q;

	function a8v(al) {
		var button = qp.b8[al],
			bi = button.bi,
			bj = button.bj,
			ba = button.ba,
			bb = button.bb;
		hL.fillStyle = button.a8t, hL.fillRect(bi, bj, ba, bb), al === a8o && (hL.fillStyle = a8q, hL.fillRect(bi, bj, ba, bb)), hL.lineWidth = h4.kx, hL.strokeStyle = a8p, hL.strokeRect(bi, bj, ba, bb),
			function(button) {
				var bi = button.bi,
					bj = button.bj,
					ba = button.ba,
					bb = button.bb;
				w.bc.textAlign(hL, 1), w.bc.textBaseline(hL, 1), hL.font = button.font, hL.fillStyle = a8p, hL.fillText(button.f1, Math.floor(bi + ba / 2), Math.floor(bj + bb / 2 + .1 * button.fontSize))
			}(button)
	}
	this.ba = 0, this.bb = 0, this.bj = 0, this.gap = 0, this.a4 = function() {
		a8o = -1, a8p = hM.hX, a8q = "rgba(255,255,255,0.16)", this.b8 = new Array(7), this.bb = Math.floor((c3.h2.h3() ? .123 : .093) * c2.jd), this.ba = Math.floor((c3.h2.h3() ? 3.96 : 4.2) * this.bb), this.gap = Math.floor(.025 * this.ba);
		var a8r = Math.floor(.26 * this.bb),
			a8s = w.bc.hG(1, a8r);
		this.b8[0] = {
			bi: 0,
			bj: 0,
			ba: Math.floor(.6 * this.ba - this.gap / 2),
			bb: this.bb,
			f1: "Multiplayer",
			font: a8s,
			a8t: "rgba(22,88,22,0.8)",
			fontSize: a8r
		}, a8r = Math.floor(.18 * this.bb), a8s = w.bc.hG(1, a8r), this.b8[1] = {
			bi: 0,
			bj: 0,
			ba: this.ba - this.b8[0].ba - this.gap,
			bb: this.bb,
			f1: "Single Player",
			font: a8s,
			a8t: "rgba(22,88,88,0.8)",
			fontSize: a8r
		}, this.b8[2] = {
			bi: 0,
			bj: 0,
			ba: this.ba,
			bb: Math.floor(.3 * this.bb),
			f1: "",
			font: this.b8[1].font,
			a8t: "rgba(100,0,0,0.8)",
			fontSize: this.b8[1].fontSize
		}, this.b8[3] = {
			bi: 0,
			bj: 0,
			ba: this.ba,
			bb: this.bb,
			f1: "Back",
			font: this.b8[0].font,
			a8t: "rgba(0,0,0,0.8)",
			fontSize: this.b8[0].fontSize
		}, this.b8[4] = {
			bi: 0,
			bj: 0,
			ba: this.ba,
			bb: Math.floor(.3 * this.bb),
			f1: "The game was updated!",
			font: this.b8[1].font,
			a8t: "rgba(100,0,0,0.8)",
			fontSize: this.b8[1].fontSize
		}, this.b8[5] = {
			bi: 0,
			bj: 0,
			ba: this.b8[0].ba,
			bb: Math.floor(.8 * this.bb),
			f1: "Reload",
			font: this.b8[0].font,
			a8t: "rgba(0,100,0,0.8)",
			fontSize: this.b8[0].fontSize
		}, this.b8[6] = {
			bi: 0,
			bj: 0,
			ba: this.b8[1].ba,
			bb: this.b8[5].bb,
			f1: "Back",
			font: this.b8[0].font,
			a8t: "rgba(0,0,0,0.8)",
			fontSize: this.b8[0].fontSize
		}, this.qy()
	}, this.qy = function() {
		this.bj = Math.floor(.54 * c2.bb), this.b8[0].bi = Math.floor(.5 * c2.ba - .5 * this.ba), this.b8[1].bi = this.b8[0].bi + this.b8[0].ba + this.gap, this.b8[2].bi = this.b8[3].bi = this.b8[0].bi, this.b8[4].bi = this.b8[5].bi = this.b8[0]
			.bi, this.b8[6].bi = this.b8[1].bi, this.b8[0].bj = Math.floor(.54 * c2.bb), this.b8[1].bj = this.b8[0].bj, this.b8[2].bj = Math.floor((c2.bb - this.b8[2].bb - this.b8[3].bb - this.gap) / 2), this.b8[3].bj = this.b8[2].bj + this.b8[2]
			.bb + this.gap, this.b8[4].bj = Math.floor((c2.bb - this.b8[4].bb - this.b8[5].bb - this.gap) / 2), this.b8[5].bj = this.b8[6].bj = this.b8[4].bj + this.b8[4].bb + this.gap
	}, this.a8u = function() {
		a8v(0), a8v(1)
	}, this.a8w = function() {
		a8v(2), a8v(3)
	}, this.a8x = function() {
		a8v(4), a8v(5), a8v(6)
	}, this.hA = function(bi, bj, kl) {
		var al = -1;
		return 0 === aB.ox() ? al = this.y1(bi, bj, 0, 2) : 3 === aB.ox() ? al = this.y1(bi, bj, 3, 1) : 5 === aB.ox() && (al = this.y1(bi, bj, 5, 2)), a8o !== al && (a8o = al, kl) && (dY.dk = !0), -1 !== al && (p1.reset(), !0)
	}, this.y1 = function(bi, bj, a8y, size) {
		for (var al = a8y; al < a8y + size; al++)
			if (bi >= this.b8[al].bi && bj >= this.b8[al].bj && bi <= this.b8[al].bi + this.b8[al].ba && bj <= this.b8[al].bj + this.b8[al].bb) return al;
		return -1
	}
}

function a90() {
	var a91 = [
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
		a92 = [
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
	this.a93 = null, this.a94 = null, this.a95 = null, this.a96 = null, this.a97 = null, this.a98 = null, this.a99 = null, this.a9A = null, this.a9B = null, this.a9C = null;

	function a9I(eA, oO) {
		for (var a93 = ee.a93, a94 = ee.a94, a95 = ee.a95, al = eA; al < oO; al++) a93[al] = ac.eB(64 * eC.random(), eC.value(100)) << 2, a94[al] = ac.eB(64 * eC.random(), eC.value(100)) << 2, a95[al] = ac.eB(64 * eC.random(), eC.value(100)) << 2
	}

	function a9H(eA, oO) {
		for (var colorsData = o.data.colorsData, a93 = ee.a93, a94 = ee.a94, a95 = ee.a95, al = eA; al < oO; al++) {
			var bV = colorsData[al];
			a93[al] = 4 * (bV >> 12), a94[al] = 4 * (bV >> 6 & 63), a95[al] = 4 * (63 & bV)
		}
	}

	function a9a(hd, a9c) {
		fw[hd] = 0, fw[hd + 1] = 0, fw[hd + 2] = a9c, fw[hd + 3] = 0, a9d(hd)
	}

	function a9d(hd) {
		var bi;
		dj.a9e || (bi = ee.wd(hd), hd = ee.we(hd), dj.a9e = bi >= wq.a9f[0] && bi <= wq.a9f[2] && hd >= wq.a9f[1] && hd <= wq.a9f[3])
	}
	this.iH = new Int32Array(4), this.iI = new Int32Array(8), this.gz = function() {
		var iH = this.iH,
			iH = (iH[0] = -4 * p.eP, iH[1] = 4, iH[2] = -iH[0], iH[3] = -iH[1], this.iI);
		iH[0] = -4 * p.eP - 4, iH[1] = -4 * p.eP, iH[2] = -4 * p.eP + 4, iH[3] = -4, iH[4] = 4, iH[5] = 4 * p.eP - 4, iH[6] = 4 * p.eP, iH[7] = 4 * p.eP + 4
	}, this.a4 = function() {
		if (this.a93 ? (this.a93.fill(0), this.a94.fill(0), this.a95.fill(0), this.a96.fill(0), this.a97.fill(0), this.a98.fill(0), this.a99.fill(0), this.a9A.fill(0), this.a9B.fill(0), this.a9C.fill(0), this.nA.fill(0)) : (this.a93 =
				new Uint8Array(o.bI), this.a94 = new Uint8Array(o.bI), this.a95 = new Uint8Array(o.bI), this.a96 = new Uint8Array(o.bI), this.a97 = new Uint8Array(o.bI), this.a98 = new Uint8Array(o.bI), this.a99 = new Uint8Array(o.bI), this.a9A =
				new Uint8Array(o.bI), this.a9B = new Uint8Array(o.bI), this.a9C = new Uint8Array(o.bI), this.nA = new Uint8Array(o.bI)), o.fT)
			for (var ub = bN.ub, a93 = ee.a93, a94 = ee.a94, a95 = ee.a95, al = o.bI - 1; 0 <= al; al--) {
				var b3 = ub[al],
					cX = ac.eB((a92[b3][3] + 1) * eC.random(), eC.value(100));
				a93[al] = a91[b3][0] + cX * a92[b3][0], a94[al] = a91[b3][1] + cX * a92[b3][1], a95[al] = a91[b3][2] + cX * a92[b3][2]
			} else 0 === o.data.colorsType ? o.data.selectableColor ? (a9H(0, o.cF), a9I(o.cF, o.bI)) : a9I(0, o.bI) : a9H(0, o.bI);
		! function() {
			var al, h1, a93 = ee.a93,
				a94 = ee.a94,
				a95 = ee.a95;
			for (al = o.bI - 1; 0 <= al; al--) h1 = ac.eB(a93[al] + a94[al] + a95[al], 3), a93[al] += a4M(h1 - a93[al], 2), a94[al] += a4M(h1 - a94[al], 2), a95[al] += a4M(h1 - a95[al], 2), a93[al] -= a93[al] % 4, a94[al] -= a94[al] % 4, a95[
				al] -= a95[al] % 4
		}(),
		function() {
			for (var bw = o.bI, a93 = ee.a93, a94 = ee.a94, a95 = ee.a95, a96 = ee.a96, al = 0; al < bw; al++) a93[al] += al >> 7, a94[al] += al >> 5 & 3, a95[al] += al >> 3 & 3, a96[al] = 7 & al
		}(), this.a9L(),
			function() {
				for (var bw = o.bI, a97 = ee.a97, a98 = ee.a98, a99 = ee.a99, a93 = ee.a93, a94 = ee.a94, a95 = ee.a95, al = 0; al < bw; al++) {
					var br = a93[al],
						mL = a94[al],
						j9 = a95[al];
					60 <= br + mL + j9 ? (a97[al] = Math.max(br - 40, 3 & br), a98[al] = Math.max(mL - 40, 3 & mL), a99[al] = Math.max(j9 - 40, 3 & j9)) : (a97[al] = br + 40, a98[al] = mL + 40, a99[al] = j9 + 40)
				}
			}(),
			function() {
				for (var bw = o.bI, a9A = ee.a9A, a9B = ee.a9B, a9C = ee.a9C, a93 = ee.a93, a94 = ee.a94, a95 = ee.a95, al = 0; al < bw; al++) {
					var br = a93[al],
						mL = a94[al],
						j9 = a95[al];
					688 <= br + mL + j9 ? (a9A[al] = br - 88, a9B[al] = mL - 88, a9C[al] = j9 - 88) : (a9A[al] = Math.min(br + 88, 252 + (3 & br)), a9B[al] = Math.min(mL + 88, 252 + (3 & mL)), a9C[al] = Math.min(j9 + 88, 252 + (3 & j9)))
				}
			}()
	}, this.a7J = function(player) {
		var ak = ix.a7L;
		return ak[0] = this.a93[player], ak[1] = this.a94[player], ak[2] = this.a95[player], ak
	}, this.a9L = function() {
		for (var al = o.bI - 1; 0 <= al; al--) this.nA[al] = this.a93[al] + this.a94[al] + this.a95[al] < 280 ? 0 : 1
	}, this.wd = function(hd) {
		return ac.eB(hd, 4) % p.eP
	}, this.we = function(hd) {
		return ac.eB(hd, 4 * p.eP)
	}, this.mQ = function(bi, bj) {
		return Math.floor(4 * (bj * p.eP + bi))
	}, this.a9O = function(hd) {
		var iH = this.iH;
		return this.a9P(hd + iH[0]) || this.a9P(hd + iH[1]) || this.a9P(hd + iH[2]) || this.a9P(hd + iH[3])
	}, this.a9Q = function(hd) {
		var iH = this.iH;
		return this.a83(hd + iH[0]) || this.a83(hd + iH[1]) || this.a83(hd + iH[2]) || this.a83(hd + iH[3])
	}, this.a9R = function(hd, player) {
		var iH = this.iH;
		return this.a9S(hd + iH[0], player) || this.a9S(hd + iH[1], player) || this.a9S(hd + iH[2], player) || this.a9S(hd + iH[3], player)
	}, this.mG = function(al, a9T, a9U, a9V) {
		this.a93[al] = a9T >> 16, this.a94[al] = a9T >> 8 & 255, this.a95[al] = 255 & a9T, this.a97[al] = a9U >> 16, this.a98[al] = a9U >> 8 & 255, this.a99[al] = 255 & a9U, this.a9A[al] = a9V >> 16, this.a9B[al] = a9V >> 8 & 255, this.a9C[al] =
			255 & a9V
	}, this.mD = function(al) {
		return [(this.a93[al] << 16) + (this.a94[al] << 8) + this.a95[al], (this.a97[al] << 16) + (this.a98[al] << 8) + this.a99[al], (this.a9A[al] << 16) + (this.a9B[al] << 8) + this.a9C[al]]
	}, this.lZ = function(hd) {
		return 208 <= fw[hd + 3]
	}, this.mR = function(player, hd) {
		return this.lZ(hd) && this.sV(player, hd)
	}, this.sV = function(player, hd) {
		return player === this.la(hd)
	}, this.a9W = function(hd) {
		return 208 <= fw[hd + 3] && fw[hd + 3] < 224
	}, this.mU = function(hd) {
		return 224 <= fw[hd + 3] && fw[hd + 3] < 248
	}, this.mS = function(hd) {
		return 248 <= fw[hd + 3]
	}, this.a9X = function(hd) {
		for (var iH = this.iH, al = 3; 0 <= al; al--)
			if (this.ef(hd + iH[al])) return !0;
		return !1
	}, this.lV = function(hd) {
		return this.lZ(hd) || this.lb(hd)
	}, this.ef = function(hd) {
		return 0 === fw[hd + 3] && 2 === fw[hd + 2]
	}, this.lb = function(hd) {
		return 0 === fw[hd + 3] && 1 === fw[hd + 2]
	}, this.w6 = function(hd) {
		return 0 === fw[hd + 3] && 3 === fw[hd + 2]
	}, this.a83 = function(hd) {
		return 0 === fw[hd + 3] && 5 === fw[hd + 2]
	}, this.a9P = function(hd) {
		return 0 === fw[hd + 3] && 3 <= fw[hd + 2]
	}, this.a2m = function(hd) {
		return (fw[hd] >> 1 << 8) + fw[hd + 1]
	}, this.a9Y = function(hd) {
		return 1 & fw[hd]
	}, this.a9S = function(hd, player) {
		return this.lb(hd) || this.lZ(hd) && player !== this.la(hd)
	}, this.la = function(hd) {
		return ((3 & fw[hd]) << 7) + ((3 & fw[hd + 1]) << 5) + ((3 & fw[hd + 2]) << 3) + (7 & fw[hd + 3])
	}, this.a9Z = function(hd) {
		a9a(hd, 1)
	}, this.a9b = function(hd) {
		a9a(hd, 2)
	}, this.mV = function(hd, player) {
		fw[hd] = this.a93[player], fw[hd + 1] = this.a94[player], fw[hd + 2] = this.a95[player], fw[hd + 3] = 208 + this.a96[player], a9d(hd)
	}, this.lW = function(hd, player) {
		fw[hd] = this.a97[player], fw[hd + 1] = this.a98[player], fw[hd + 2] = this.a99[player], fw[hd + 3] = 224 + this.a96[player], a9d(hd)
	}, this.mT = function(hd, player) {
		fw[hd] = this.a9A[player], fw[hd + 1] = this.a9B[player], fw[hd + 2] = this.a9C[player], fw[hd + 3] = 248 + this.a96[player], a9d(hd)
	}
}

function y7() {
	var a9g = a9h(),
		a9i = a9j(),
		a9k = a9l();
	this.oX = function() {
		return 123
	}, this.a9 = function() {
		fE.fF.zO(a5.c0.data[183].value, 15), pF.pG(14, a9g), pF.pG(7, a9i), pF.pG(12, a9k)
	}
}

function a9m() {
	var a9n, a9o, a9p = -15e3,
		a9q = !1;

	function h6(aY) {
		aA5() || (a9q = !0, aA6(aY, 1), f2.aw.aA7(f2.aw.p4), aA8(Math.floor(c2.je * aY.clientX), Math.floor(c2.je * aY.clientY)))
	}

	function vK(aY) {
		a9p = dY.dX, aA6(aY, 1), f2.aw.aA7(f2.aw.p4), 0 < aY.touches.length && (a9n = Math.floor(c2.je * aY.touches[0].clientX), a9o = Math.floor(c2.je * aY.touches[0].clientY), aA9.vK(aY) || aA8(a9n, a9o))
	}

	function aA8(bi, bj) {
		a0.h6(bi, bj), 0 === o.de ? aB.h6(bi, bj) : h9.a3u(bi, bj) || kp.h6(bi, bj) || qO.h6(bi, bj) || o4.aAA(bi, bj) || a3U.h6(bi, bj) || 0 <= df.h6(bi, bj) || a19.h6(bi, bj) || dE.aAB(bi, bj) || o4.vT(bi, bj)
	}

	function hA(aY) {
		aA5() || (a9q = !0, aA6(aY, 1), aAC(Math.floor(c2.je * aY.clientX), Math.floor(c2.je * aY.clientY)))
	}

	function vM(aY) {
		a9p = dY.dX, aA6(aY, 1), 0 < aY.touches.length && (a9n = Math.floor(c2.je * aY.touches[0].clientX), a9o = Math.floor(c2.je * aY.touches[0].clientY), aA9.vM(aY) || aAC(a9n, a9o))
	}

	function aAC(bi, bj) {
		dE.dF() || (dE.m5 = bi, dE.m7 = bj), a0.hA(bi, bj), 0 === o.de ? aB.hA(bi, bj) : (aAD.aAE(bi, bj), kp.hA(bi, bj) || (df.hA(bi, bj), o4.gv() ? o4.hA(bi, bj) : kX.aAF ? kX.hA(bi) && (dY.dk = !0) : (kk.hA(bi, bj), vQ.wY && vQ.hA(bi, bj) && (dY
			.dk = !0))))
	}

	function a9v(aY) {
		aA5() || (aA6(aY, 1), q8(), 0 === o.de ? (aB.click(-1024, -1024), p1.reset()) : (kk.hC(-1024, -1024), df.hA(-1024, -1024), kX.aAG(), vQ.wY = !1))
	}

	function kq(aY) {
		aA5() || (aA6(aY, 1), aAH(Math.floor(c2.je * aY.clientX), Math.floor(c2.je * aY.clientY), 2 === aY.button), dE.a9t && (dE.a9t = !1, aY.preventDefault()))
	}

	function click(aY) {
		aA5() || aA6(aY, 1)
	}

	function a9w(aY) {
		a9p = dY.dX, aA6(aY, 1), aY && aY.touches && 0 < aY.touches.length && 0 !== o.de ? vQ.wY = !1 : aA9.vS() || (aAH(a9n, a9o, !1), dE.a9t && (dE.a9t = !1, aY.preventDefault()))
	}

	function a9x(aY) {
		a9p = dY.dX, aA6(aY, 1), aAH(a9n, a9o, !1), dE.a9t && (dE.a9t = !1, aY.preventDefault())
	}

	function a9y(aY) {}

	function a9z(aY) {}

	function aA0(aY) {
		aA5() || aA6(aY, 0)
	}

	function aAH(bi, bj, aAI) {
		q8(), 0 === o.de ? aB.click(bi, bj) : (kk.hC(bi, bj), kp.hC(), kX.aAG(), vQ.wY = !1, o4.click(bi, bj, aAI) ? dY.dk = !0 : df.kq(bi, bj))
	}

	function q8() {
		a0.q8()
	}

	function q9(aY) {
		var bi, bj, deltaY;
		aA5() || (aA6(aY, 1), f2.aw.aA7(f2.aw.p4), bi = Math.floor(c2.je * aY.clientX), bj = Math.floor(c2.je * aY.clientY), deltaY = aY.deltaY, 1 === aY.deltaMode && (deltaY *= 16), a0.q9(bi, bj, deltaY), 0 === o.de ? aB.q9(bi, bj, deltaY) : kk.q9(
			bi, bj, deltaY) || (kX.y1(bi, bj) ? kX.q9(deltaY) && (dY.dk = !0) : vQ.q9(bi, bj, deltaY)))
	}

	function aA1(aY) {
		aA6(aY, 0)
	}

	function aA6(aY, id) {
		0 === id && a0.gv() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aB.ox() && aY.preventDefault()
	}

	function aA2(aY) {
		if (__fx.keybindHandler(aY.key)) return;
		aA5() || 0 < c2.a8A || (aY = aY.code) && aY.length && (yX.b3(aY, 18) ? aAK.aAL(3) : yX.b3(aY, 22) ? aAK.aAL(0) : yX.b3(aY, 20) ? aAK.aAL(1) : yX.b3(aY, 24) ? aAK.aAL(2) : yX.b3(aY, 10) ? kX.aAM(31 / 32) : yX.b3(aY, 8) ? kX.aAM(32 / 31) : yX
			.b3(aY, 6) ? kX.aAM(7 / 8) : yX.b3(aY, 4) ? kX.aAM(8 / 7) : yX.b3(aY, 14) ? 0 !== o.de && vQ.q9(Math.floor(c2.ba / 2), Math.floor(c2.bb / 2), -200) : yX.b3(aY, 16) ? 0 !== o.de && vQ.q9(Math.floor(c2.ba / 2), Math.floor(c2.bb / 2),
				200) : yX.b3(aY, 0) ? o.de && aAD.aAN(0) : yX.b3(aY, 2) ? o.de && aAD.aAN(1) : yX.b3(aY, 30) ? o.de && aAD.aAN(2) : yX.b3(aY, 26) ? o.de && aAD.aAO() : yX.b3(aY, 28) && o.de && aAD.aAP())
	}

	function aA3(aY) {
		if (!aA5() && !(0 < c2.a8A || dY.dX < 400)) {
			var code = aY.code;
			if (code && code.length && !("Enter" === code && a0.b2(1) || "Space" === code && a0.b2(0))) return f5.vc ? f5.tX.b2(code) ? void 0 : void("Escape" === code && dE.aAQ()) : void(8 !== aB.ox() && aB.b2(aY) ? dY.dk = !0 : "Escape" === code ?
				dE.aAQ() : yX.b3(code, 18) ? aAK.aAR(3) : yX.b3(code, 22) ? aAK.aAR(0) : yX.b3(code, 20) ? aAK.aAR(1) : yX.b3(code, 24) ? aAK.aAR(2) : yX.b3(code, 12) ? h9.kh(!o.kr) : "Space" === code && o.de && (df.dg && df.hD(), o.ke) && h9
				.ki(!1))
		}
	}

	function aA4() {
		"hidden" !== document.visibilityState && (dY.dk = !0)
	}

	function aA5() {
		return a9p + 15e3 > dY.dX
	}

	function resize() {
		c2.aAS()
	}
	this.a9r = 0, this.a9s = "", this.a9t = !1, this.m5 = 0, this.m7 = 0, this.a4 = function() {
		a9u.addEventListener("mousedown", h6, {
			passive: !1
		}), a9u.addEventListener("mousemove", hA, {
			passive: !1
		}), a9u.addEventListener("mouseup", kq, {
			passive: !1
		}), a9u.addEventListener("click", click, {
			passive: !1
		}), a9u.addEventListener("mouseleave", a9v, {
			passive: !1
		}), a9u.addEventListener("wheel", q9, {
			passive: !1
		}), a9u.addEventListener("touchstart", vK, {
			passive: !1
		}), a9u.addEventListener("touchmove", vM, {
			passive: !1
		}), a9u.addEventListener("touchend", a9w, {
			passive: !1
		}), a9u.addEventListener("touchcancel", a9x, {
			passive: !1
		}), a9u.addEventListener("dragover", a9y), a9u.addEventListener("drop", a9z), a9u.addEventListener("dblclick", aA0), document.addEventListener("contextmenu", aA1), document.addEventListener("keydown", aA2), document.addEventListener(
			"keyup", aA3), document.addEventListener("visibilitychange", aA4), window.addEventListener("resize", resize)
	}, this.aAB = function(bi, bj) {
		return !!h9.h6(bi, bj) || !!(kk.h6(bi, bj) || vQ.h6(bi, bj) || kX.h6(bi, bj) || cp.h6(bi, bj))
	}, this.un = aA5, this.dF = function() {
		return !a9q || 0 < a9p
	}, this.aAQ = function() {
		if (!a0.gv()) return 8 === aB.ox() ? o.kr ? void h9.kh(!1) : kp.gv ? void kp.hD() : void df.hD() : void(7 !== aB.ox() && 6 === aB.ox() && pW.aAT());
		a0.b2(2)
	}
}

function aAU() {
	this.aAV = function() {
		for (var bw = cw.cx, jy = cw.cy, aAW = [], al = 0; al < bw; al++) {
			var i5 = jy[al];
			w.cO.ii(i5) && aAW.push(i5)
		}
		return aAW
	}, this.aAX = function() {
		if (0 === bN.rA[o.aAY]) return this.aAZ();
		fd.aAa(o.aAY);
		for (var aAW = [], bw = ix.rC[0], rD = ix.rD, al = 0; al < bw; al++) {
			var i5 = rD[al];
			w.cO.ii(i5) && aAW.push(i5)
		}
		return aAW
	}, this.aAZ = function() {
		var i5 = fR[0];
		return w.cO.ii(i5) ? [i5] : []
	}, this.aAb = function(aAW) {
		for (var bw = aAW.length, hB = 0, fQ = eF.fQ, al = 0; al < bw; al++) hB += fQ[aAW[al]];
		return hB
	}
}

function aAc() {
	var aAd = 0,
		aAe = 0,
		aAf = 0,
		aAg = 0,
		m1 = -1;

	function aAj(hd) {
		if (m1 === hd) return !1;
		if (-1 === (m1 = hd)) aAd = 0, cp.aAk(aAd, 0);
		else {
			if (ee.lZ(hd)) return aAf = ee.la(hd), aAl = eF.fa[aAf] - eF.io[aAf], (4 !== aAd || aAl !== aAe) && (aAd = 4, aAe = aAl, cp.aAk(aAd, aAl), !0);
			if (ee.lb(hd)) return 3 !== aAd && (aAd = 3, cp.aAk(aAd, 0), !0);
			if (ee.a83(hd)) return 2 !== aAd && (aAd = 2, cp.aAk(aAd, 0), !0);
			var aAl = e3.fi.a2x(dE.m5, dE.m7);
			if (-1 === aAl) return 1 !== aAd && (aAd = 1, cp.aAk(aAd, 0), !0);
			hd = e3.aw.sO[aAl];
			if (aAf = e3.aw.yx[aAl], aAg = e3.aw.sN[aAl] >> 3, 5 === aAd && hd === aAe) return !1;
			aAd = 5, aAe = hd, cp.aAk(aAd, hd)
		}
		return !0
	}
	this.a4 = function() {
		aAg = aAf = aAe = aAd = 0, m1 = -1
	}, this.da = function(m3) {
		var eY;
		!m3 && dE.dF() || (m3 = eN.m4(dE.m5), eY = eN.m6(dE.m7), eN.m8(m3, eY) ? (m3 = eN.ed(m3, eY), aAj(eN.eg(m3))) : aAj(-1))
	}, this.a3W = function() {
		var aAo, aAl, aAm, aAn;
		if (0 !== aAd && 2 !== aAd)
			if (dE.dF()) {
				if (1 !== aAd && 3 !== aAd) {
					if (4 === aAd) return void(aAl = eF.fa[aAf] - eF.io[aAf], aAe === aAl || (aAe = aAl, cp.aAk(aAd, aAl)));
					(aAm = e3.fi.fj(aAg, aAf)) < 0 ? (aAd = 1, cp.aAk(aAd, 0)) : (aAn = e3.aw.sO[aAm]) !== aAe && (aAe = aAn, cp.aAk(aAd, aAn))
				}
			} else if (1 === aAd) - 1 !== (aAm = e3.fi.a2x(dE.m5, dE.m7)) && (aAd = 5, aAe = e3.aw.sO[aAm], cp.aAk(aAd, aAe));
		else if (3 === aAd) ee.lZ(m1) && (aAd = 4, aAo = ee.la(m1), aAe = eF.fa[aAo] - eF.io[aAo], cp.aAk(aAd, aAe));
		else if (4 === aAd) {
			if (ee.lZ(m1)) return void(aAo = ee.la(m1), aAl = eF.fa[aAo] - eF.io[aAo], aAe === aAl || (aAe = aAl, cp.aAk(aAd, aAl)));
			aAd = 3, cp.aAk(aAd, 0)
		} else - 1 === (aAm = e3.fi.a2x(dE.m5, dE.m7)) ? (aAd = 1, cp.aAk(aAd, 0)) : (aAn = e3.aw.sO[aAm]) !== aAe && (aAe = aAn, cp.aAk(aAd, aAn))
	}
}

function aAq(ze, data, aj) {
	var bw = data.aAr.length,
		aAs = document.createElement("div"),
		aAt = document.createElement("div"),
		aAu = document.createElement("div"),
		aAv = new Array(bw),
		aG = new Array(bw),
		aAw = new Array(data.aAx.length),
		aAy = w.color.a7K(70, 70, 0, .35);

	function aB4() {
		this.style.backgroundColor = w.color.aB4(aAy, 160)
	}

	function aB5() {
		this.style.backgroundColor = aAy
	}

	function n4() {
		var ct;
		for (ze.style.font = w.bc.hG(0, w.bc.jg(.026, .5, .03)), al = 1; al < aAw.length; al++) w.bc.jV(aAw[al], 4);
		if (w.bc.jV(aAs, 2), bw) {
			for (var rF, gi = aAs.offsetWidth, gj = aAu.offsetWidth, al = 0; al < aAw.length; al++) rF = .01 * data.aB3[al] * gj, aAw[al].style.width = (100 * rF / gi).toFixed(2) + "%";
			var cX = data.aAr[0].length;
			for (al = 0; al < bw; al++)
				for (w.bc.jV(aAv[al], 2), ct = 1; ct < cX; ct++) w.bc.jV(aG[al][ct], 4);
			aAt.aAz && (aAt.scrollTop = aAt.aAz)
		}
	}
	this.resize = function() {
			n4(), n4()
		}, ze.style.display = "flex", ze.style.flexDirection = "column", aAt.style.overflowX = "hidden", aAt.style.overflowY = "auto", aAt.addEventListener("scroll", function() {
			this.aAz = this.scrollTop, aj && aj.aB0 && (a0.aw.ax[aj.aB0] = this.scrollTop)
		}),
		function() {
			var h1, al, aAr = data.aAr,
				cX = bw ? aAr[0].length : 0;
			for (al = 0; al < bw; al++) {
				aAv[al] = document.createElement("div"), aAv[al].style.backgroundColor = function(al) {
					return al % 2 == 1 ? w.color.a7K(130, 130, 130, .35) : hM.aB9
				}(al), aAv[al].style.width = "100%", aAv[al].style.display = "flex", aG[al] = new Array(cX);
				for (var ct = 0; ct < cX; ct++) aG[al][ct] = h1 = document.createElement("div"), h1.style.display = "flex", h1.style.justifyContent = "center", h1.style.wordBreak = "break-all", h1.style.padding = "0.4em 0em", h1.style.width = data
					.aB3[ct] + "%", h1.innerHTML = aAr[al][ct].bV, 1 === aAr[al][ct].hB && (h1.name = "" + al, h1.style.color = hM.a5h, h1.style.backgroundColor = aAy, h1.addEventListener("mouseover", aB4), h1.addEventListener("mouseout", aB5),
						function(h1, dw, a5C) {
							2147483647 !== a5C && h1.addEventListener("click", function() {
								pF.lu(30), pF.pG(30, dw), oV.a4(pF.oU), this.style.backgroundColor = aAy, a0.a1(8, a0.dU, new a5B(25, {
									action: 0,
									dw: gP.fF.aB7(gP.fF.aB8(5)),
									a5C: a5C
								}))
							})
						}(h1, aAr[al][ct].dw, aAr[al][ct].a5C)), aAv[al].appendChild(h1)
			}
			for (aAs.style.display = "flex", aAs.style.backgroundColor = w.color.a7K(0, 120, 0, .35), al = 0; al < aAw.length; al++) aAw[al] = h1 = document.createElement("div"), h1.style.display = "flex", h1.style.justifyContent = "center", h1.style
				.wordBreak = "break-all", h1.style.padding = "0.4em 0em", h1.style.width = data.aB3[al] + "%", h1.innerHTML = data.aAx[al], aAs.appendChild(h1)
		}();
	for (var al = 0; al < bw; al++) aAu.appendChild(aAv[al]);
	aAt.appendChild(aAu), ze.appendChild(aAs), ze.appendChild(aAt), aj && aj.aB0 && (aAt.aAz = a0.aw.ax[aj.aB0])
}

function aBA() {
	function aBN() {
		p.vy.da()
	}

	function aBT(i5, aBS) {
		0 < aBS && (p.i8[i5] += aBS, p.i8[i5 + 1] += aBS, p.i8[i5 + 2] += aBS)
	}

	function ef(i5) {
		return p.i8[i5 + 2] > p.i8[i5] && p.i8[i5 + 2] > p.i8[i5 + 1]
	}
	this.aBB = -1, this.iU = 0, this.aBC = 0, this.aBD = 8, this.aBE = 32, this.aBF = 8, this.aBG = 32, this.aBH = [0, 0], this.nA = [0, 0, 0, 0], this.z3 = null, this.aBI = !0, this.aBJ = !1, this.aBK = function() {
		-1 !== this.aBB && clearTimeout(this.aBB), this.aBB = -1, this.z3 = null, a4G.aBL()
	}, this.a4 = function() {
		7 === aB.ox() || this.aBJ || (this.aBI = !0, this.iU = 0, this.aBC = 1, this.aBH = [p.rs.ru[p.fo].wD[0], p.rs.ru[p.fo].wE[0]], this.nA = [p.rs.ru[p.fo].aBM[3], p.rs.ru[p.fo].aBM[4], p.rs.ru[p.fo].aBM[5], p.rs.ru[p.fo].aBM[6]], this.aBD =
			p.rs.ru[p.fo].aBM[7], this.aBE = p.rs.ru[p.fo].aBM[8], this.aBF = p.rs.ru[p.fo].aBM[9], this.aBG = p.rs.ru[p.fo].aBM[10], this.aBI ? this.aBB = setTimeout(aBN, 16) : this.da())
	}, this.da = function() {
		if (8 === aB.ox() && ut.aBO()) this.aBB = setTimeout(aBN, 16);
		else {
			if (0 === this.iU) {
				var qX = eC.qW();
				if (eC.qV(p.rs.ru[p.fo].aBM[2]), a4G.lu([p.eP, p.eQ, p.rs.ru[p.fo].aBM[0], p.rs.ru[p.fo].aBM[1]]), eC.qV(qX), this.z3 = a4G.a4H(), this.iU++, this.aBI) return void(this.aBB = setTimeout(aBN, 16))
			}
			for (var i5, eV, qX = this.aBI ? 10 : 1e6, qX = p.eQ - this.aBC - 1 < qX ? p.eQ - this.aBC - 1 : qX, aBP = this.aBC + qX, bj = this.aBC; bj < aBP; bj++)
				for (var bi = 1; bi < p.eP - 1; bi++) ef(i5 = 4 * (eV = bi + bj * p.eP)) ? this.aBQ(i5, eV, 1) : (this.aBQ(i5, eV, 0), function(bi, bj, i5) {
					return 1 < bi && ef(i5 - 4) || bi < p.eP - 2 && ef(i5 + 4) || 1 < bj && ef(i5 - 4 * p.eP) || bj < p.eQ - 2 && ef(i5 + 4 * p.eP)
				}(bi, bj, i5) && this.aBR(bi, bj));
			this.aBC = aBP, this.aBC >= p.eQ - 1 ? (p.vw.putImageData(p.vx, 0, 0, 1, 1, p.eP - 2, p.eQ - 2), dY.dk = !0, this.aBK()) : this.aBI && (this.aBB = setTimeout(aBN, 16))
		}
	}, this.aBQ = function(i5, eV, ab) {
		aBT(i5, Math.floor(this.aBH[ab] + this.nA[ab] * this.z3[eV] / 1e4) - p.i8[i5])
	}, this.aBU = function(i5, br, aBV, ab, nA) {
		aBT(i5, Math.floor(this.aBH[ab] + (1 - br / aBV) * nA) - p.i8[i5])
	}, this.aBR = function(eD, eI) {
		for (var i5, br, aBV, aBW = eD - this.aBE, aBX = eI - this.aBE, aBY = eD + this.aBE, aBP = eI + this.aBE, aBW = aBW < 1 ? 1 : aBW, aBY = aBY > p.eP - 2 ? p.eP - 2 : aBY, aBP = p.eQ - 2 < aBP ? p.eQ - 2 : aBP, bj = aBX < 1 ? 1 : aBX; bj <=
			aBP; bj++)
			for (var bi = aBW; bi <= aBY; bi++) ef(i5 = 4 * (bi + bj * p.eP)) ? (aBV = this.aBD + (this.aBE - this.aBD) * this.z3[bi + p.eP * bj] / 1e4, Math.abs(eD - bi) > aBV || Math.abs(eI - bj) > aBV || aBV <= (br = Math.sqrt((eD - bi) * (
				eD - bi) + (eI - bj) * (eI - bj))) || this.aBU(i5, br, aBV, 1, this.nA[3])) : (aBV = this.aBF + (this.aBG - this.aBF) * this.z3[bi + p.eP * bj] / 1e4, Math.abs(eD - bi) > aBV || Math.abs(eI - bj) > aBV || aBV <= (br = Math
				.sqrt((eD - bi) * (eD - bi) + (eI - bj) * (eI - bj))) || this.aBU(i5, br, aBV, 0, this.nA[2]))
	}
}

function aBZ() {
	var aBa, aBb, aBc, aBd, aBe, aBf, aBg, aBh, aBi, aBj, aBk, kP, aBl, aBm = !1,
		aBn = !1;

	function aBo(aBp) {
		kP = dY.dX, aBc = aBd = aBb = 0, aBe = (aBl = 33) / aBp, aBa = 1 / (aBp / aBl / 4), aBf = (c2.ba / 2 + nY) / nZ, aBg = (c2.bb / 2 + na) / nZ, aBh = nZ
	}

	function aBt(al) {
		var hz; - 1 !== al && (al = eN.s9(e3.aw.s5[al]), hz = eN.eX(al) - 15, al = eN.eZ(al) - 15, ut.aBr(hz, al, 29 + hz, 29 + al))
	}

	function aC0(a4e) {
		Math.abs(Math.log(aBk / aBh)) < .125 && (aBk = a4e * aBh)
	}

	function aBz(hz, i0, i1, i2) {
		aBi = (hz + i1 + 1) / 2, aBj = (i0 + i2 + 1) / 2;
		i1 = c2.ba / (i1 - hz + 1), hz = c2.bb / (i2 - i0 + 1);
		aBk = .9 * (i1 < hz ? i1 : hz)
	}
	this.aBO = function() {
		return aBm
	}, this.aBq = function() {
		aBo(1), this.aBr(0, 0, p.eP - 1, p.eQ - 1), o.db || o.ke || this.uu(o.co, 3e3, !0, .3)
	}, this.aBs = function(player, fg) {
		aBt(e3.fi.fj(player, fg))
	}, this.uu = function(player, aBp, aBu, zoom) {
		o.kr || aBm && !aBu && aBn || (0 === eF.fQ[player] ? aBt(e3.fi.a2w(player)) : (vQ.wY = !1, aBn = aBu, aBo(aBp), function(player) {
			aBi = (eF.eG[player] + eF.eH[player] + 1) / 2, aBj = (eF.eJ[player] + eF.eK[player] + 1) / 2
		}(player), function(zoom, player) {
			var ea = eF.eH[player] - eF.eG[player] + 1,
				player = eF.eK[player] - eF.eJ[player] + 1,
				ct = c2.ba / ea,
				j9 = c2.bb / player,
				ct = (aBk = ct < j9 ? ct : j9, 0 !== zoom ? zoom : ea < 20 && player < 20 ? .5 : .9);
			aBk *= ct, aC0(7 / 8)
		}(zoom, player), aBm = !0, aAK.aBx()))
	}, this.aBy = function(aBp) {
		o.ke || o.kr || (vQ.wY = !1, aBn = !1, aBo(aBp), aBz(0, 0, p.eP - 1, p.eQ - 1), aC0(7 / 8), aBm = !0, aAK.aBx())
	}, this.aBr = function(hz, i0, i1, i2) {
		aBm = !1, aBz(hz, i0, i1, i2), nZ = aBk, vQ.wf(aBi, c2.ba / 2), vQ.wg(aBj, c2.bb / 2), wq.wr(), dY.dk = !0
	}, this.oO = function() {
		return !(aBm && aBn || (aBm = !1))
	}, this.da = function() {
		var aC3, aC4, h1, aC7;
		aBm && (aBb < .5 ? aBd < aBe && (aBd += aBe * aBa, aBc = aBb) : 1 - aBc < aBb && (aBd = (aBd -= aBe * aBa) < aBe * aBa ? aBe * aBa : aBd), kP = kP >= dY.dX ? dY.dX - 1 : kP, aBb = 1e3 < (h1 = dY.dX - kP) || 1 < (aBb += aBd * h1 / aBl) ?
			1 : aBb, kP = dY.dX, h1 = nZ, aC3 = nY, aC4 = na, h1 = (nZ = aBh * Math.pow(aBk / aBh, aBb)) / h1, aC7 = 1 - (aBh * Math.pow(aBk / aBh, 1 - aBb) - aBh) / (aBk - aBh), vQ.wf(aBf + aC7 * (aBi - aBf), c2.ba / 2), vQ.wg(aBg + aC7 * (
				aBj - aBg), c2.bb / 2), cr.zoom(h1, (aC3 * h1 - nY) / (1 - h1), (aC4 * h1 - na) / (1 - h1)), wq.wr(), 1 <= aBb && (aBm = !1, dj.a9e = !0), dY.dk = !0)
	}
}

function aC8() {
	this.aC9 = !1, this.da = function() {
		dY.hw() % 250 != 249 || o.ke || (f2.zJ.a8c(+(this.aC9 && eF.hu[o.co]), cw.cx + e3.aw.s7), this.aC9 = !1)
	}
}

function rr(aCA, aCB, aCC) {
	function click() {
		var value = 1 - aCA.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + aCB, void 0 !== aCA.ab ? a5.a6.a7(aCA.ab, value) : aCA.value = value, aCC && aCC(value)
	}
	var aY;
	aCB = aCB || L(212), this.aY = document.createElement("p"), (aY = this.aY).textContent = (aCA.value ? "🟩 " : "⬜ ") + aCB, aY.style.margin = "0", aY.style.marginBottom = "0.5em", aY.style.cursor = "pointer", aY.addEventListener("click", click)
}

function rg() {
	var aCD = null,
		aCE = 2e4,
		aCF = 0;
	this.da = function() {
		dY.dX < aCE || (aCE = dY.dX + 1e4, 0 !== c3.id) || aCD || pY.ri() || (f2.aw.a5e(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || f2.zJ.a8X(5) : aCE = dY.dX + 1e3)
	}, this.cW = function(b3) {
		aCD = b3
	}, this.show = function() {
		return !(!aCD || dY.dX < aCF) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aCF = dY.dX + 6e4, (new aCG).show(aCD.zT, aCD.colors, aCD.id), !(aCD = null)))
	}
}

function aCH() {
	this.a2K = function(nw, player) {
		cp.pM(o.co, player, nw), f2.pL.aCI(nw, player)
	}, this.aCJ = function(player) {
		cp.pO(player, 0), f2.pL.aCK(player)
	}, this.aCL = function(aCM, player) {
		cp.aCN(aCM, player), f2.pL.aCO(aCM, player)
	}, this.aCP = function() {
		o.kg || o.ke || f2.aCQ.aCP()
	}
}

function aCR() {
	var ba, bi, aCS, canvas, hZ, gv, ir, aCT, kT, a7F, aCU = 11 / 12;

	function aCV() {
		var a7R = Math.floor(ir * (ba - 2 * aCS)),
			aCX = 1 + Math.floor(.0625 * kX.bb),
			aCY = 1 + Math.floor(.3 * kX.bb),
			gm = Math.floor(.55 * kX.bb);
		hZ.clearRect(0, 0, ba, kX.bb), hZ.fillStyle = hM.ka, hZ.fillRect(0, 0, aCS, kX.bb), hZ.fillRect(aCS + a7R, 0, ba - aCS - a7R, kX.bb), hZ.fillStyle = ir < 1 / 3 ? "rgba(" + Math.floor(3 * ir * 130) + ",130,0,0.85)" : ir < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (ir - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ir - 2 / 3) * 130) + ",0.85)", hZ.fillRect(aCS, 0, a7R, kX.bb), hZ.fillStyle = hM.hX, hZ.fillRect(0, 0, ba, 1), hZ.fillRect(0, kX.bb - 1, ba, 1), hZ
			.fillRect(0, 0, 1, kX.bb), hZ.fillRect(aCS, 0, 1, kX.bb), hZ.fillRect(aCS + a7R, 0, 1, kX.bb), hZ.fillRect(ba - aCS, 0, 1, kX.bb), hZ.fillRect(ba - 1, 0, 1, kX.bb), hZ.fillRect(Math.floor(.25 * kX.bb) + aCY, Math.floor((kX.bb - aCX) / 2),
				kX.bb - 2 * aCY, aCX), hZ.fillRect(Math.floor(ba - 1.25 * kX.bb) + aCY, Math.floor((kX.bb - aCX) / 2), kX.bb - 2 * aCY - aCY % 2, aCX), hZ.fillRect(Math.floor(ba - 1.25 * kX.bb) + Math.floor((kX.bb - aCX) / 2), aCY, aCX, kX.bb - 2 *
				aCY - aCY % 2), aCT = w.cO.j4(o.co, kX.a7h()), hZ.fillText(w.bL.gQ(aCT) + " (" + w.bL.hH(100 * ir, +(ir < .1)) + ")", Math.floor(.5 * ba), gm)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ir = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => kX.aAM(arg1);

	function aCe(hc) {
		return !(1 < hc && 1 === ir || (1 < hc && hc * ir - ir < 1 / 1024 ? hc = (ir + 1 / 1024) / ir : hc < 1 && ir - hc * ir < 1 / 1024 && (hc = (ir - 1 / 1024) / ir), ir = ac.ad(ir * hc, 1 / 1024, 1), aCV(), 0))
	}

	function aCf(eD) {
		return ir !== (ir = ac.ad((eD - bi - aCS) / (ba - 2 * aCS), 1 / 1024, 1)) && (aCV(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aCV(), dY.dk = !0
	}, this.bj = 0, this.aAF = !1, this.a4 = function() {
		gv = !o.db && !o.ke, a7F = !1, ir = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (a5.c0.data[182].value + 1) / 1024, aCT = 0, this.aAF = !1, this.resize()
	}, this.resize = function() {
		c3.h2.h3() && c2.ba < .8 * c2.bb ? (this.bb = Math.floor(.066 * c2.jd), ba = c2.ba - 4 * h4.gap - this.bb) : (ba = Math.floor((c3.h2.h3() ? .65 : .389) * c2.jd), ba += 12 - ba % 12, this.bb = Math.floor(ba / 12)), aCS = Math.floor(3 *
			this.bb / 2), kT = w.bc.hG(1, Math.floor(.5 * this.bb)), (canvas = document.createElement("canvas")).width = ba, __fx.mobileKeybinds.setSize(ba, this.bb, hL), canvas.height = this.bb, (hZ = canvas.getContext("2d", {
			alpha: !0
		})).font = kT, w.bc.textBaseline(hZ, 1), w.bc.textAlign(hZ, 1), this.wZ(), aCV()
	}, this.wZ = function() {
		bi = c3.h2.h3() && c2.ba < .8 * c2.bb ? this.bb + 3 * h4.gap : Math.floor((c2.ba - ba) / 2), this.bj = c2.bb - this.bb - a3o.a3p() * h4.gap
	}, this.kl = function() {
		a7F && (a7F = !1, aCV())
	}, this.gv = function() {
		return !(!gv || df.dg && bi < Math.floor(h4.gap + 5.5 * this.bb))
	}, this.a3m = function(a3n) {
		return !!this.gv() && bi + ba > c2.ba - a3n - h4.gap
	}, this.aCZ = function() {
		gv = !o.ke
	}, this.aCa = function() {
		gv = !1
	}, this.a7h = function() {
		return ac.ad(Math.floor(1024 * ir + .5) - 1, 0, 1023)
	}, this.y1 = function(eD, eI) {
		return this.gv() && bi < eD && eD < bi + ba && eI > this.bj
	}, this.h6 = function(eD, eI) {
		if (!this.gv()) return !1;
		if (!(__fx.settings.keybindButtons && eI > this.bj - Math.floor(h4.gap / 4) - this.bb && eI < this.bj - Math.floor(h4.gap / 4) && __fx.mobileKeybinds.click(eD - bi))) {
			if (!kX.y1(eD, eI)) return !1;
			vQ.wY = !1, ! function(zd, eD, eI) {
				if (function(eD, eI) {
						return bi < eD && eD < bi + aCS && eI > kX.bj
					}(eD, eI)) return aCe(aCU);
				if (function(eD, eI) {
						return bi + ba - aCS < eD && eD < bi + ba && eI > kX.bj
					}(eD, eI)) return aCe(1 / aCU);
				return zd.aAF = !0, aCf(eD)
			}(this, eD, eI) || (dY.dk = !0)
		}
		return !0
	}, this.aAM = function(dG) {
		0 !== o.de && this.gv() && aCe(dG) && (dY.dk = !0)
	}, this.q9 = function(deltaY) {
		var dG;
		return !(0 === deltaY || !this.gv()) && aCe(dG = 0 < deltaY ? (dG = 400 / (400 + deltaY)) < aCU ? aCU : dG : 1 / aCU < (dG = (400 - deltaY) / 400) ? 1 / aCU : dG)
	}, this.hA = function(eD) {
		return !!this.aAF && aCf(eD)
	}, this.aAG = function() {
		this.aAF = !1
	}, this.da = function() {
		this.gv() && aCT !== w.cO.j4(o.co, this.a7h()) && (a7F = !0)
	}, this.hJ = function() {
		this.gv() && (hL.drawImage(canvas, bi, this.bj), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(hL, bi, this.bj)
	}
}

function aCg() {
	this.sH = new Int16Array(4), this.sU = new Int16Array(4), this.aCh = null, this.a4 = function() {
		var al;
		for (this.sH[0] = -p.eP, this.sH[1] = 1, this.sH[2] = p.eP, this.sH[3] = -1, this.aCh = new Int16Array([-p.eP, 1 - p.eP, 1, p.eP + 1, p.eP, p.eP - 1, -1, -p.eP - 1]), al = 0; al < 4; al++) this.sU[al] = 4 * this.sH[al]
	}, this.aCi = function() {
		return ac.ad(Math.floor(.15 * (1 + .25 * c3.h2.h3()) * c2.jd / nZ), 4, 128)
	}, this.a2e = function(hd, id) {
		for (var sT = this.sU, al = 0; al < 4; al++) {
			var iN = hd + sT[al];
			if (ee.ef(iN) && ee.a2m(iN) === id) return !0
		}
		return !1
	}, this.aCj = function(player, hd) {
		return !ee.lb(hd) && player === ee.la(hd)
	}, this.eT = function(eW, eY, eV) {
		return (eW -= this.eX(eV)) * eW + (eY -= this.eZ(eV)) * eY
	}, this.a2z = function(vO, vP, su) {
		vO = this.a3I(vO) - this.a3C(su), vP = this.a3J(vP) - this.a3E(su);
		return Math.sqrt(vO * vO + vP * vP)
	}, this.aCk = function(a2n, a2g) {
		var ea = this.eX(a2n) - this.eX(a2g),
			a2n = this.eZ(a2n) - this.eZ(a2g);
		return ~~Math.sqrt(ea * ea + a2n * a2n + .5)
	}, this.rY = function(a2n, a2g) {
		var ea = this.eX(a2n) - this.eX(a2g),
			a2n = this.eZ(a2n) - this.eZ(a2g);
		return ea * ea + a2n * a2n
	}, this.eO = function(nS, nT, nU, nV) {
		return (nS -= nU) * nS + (nT -= nV) * nT
	}, this.j4 = function(i5, ir) {
		return ac.eB(ir * eF.fa[i5], 1e3)
	}, this.a3I = function(vO) {
		return 16 * (vO + nY) / nZ
	}, this.a3J = function(vP) {
		return 16 * (vP + na) / nZ
	}, this.a3G = function(h1) {
		return 16 * h1 / nZ
	}, this.m4 = function(vO) {
		return Math.floor((vO + nY) / nZ)
	}, this.m6 = function(vP) {
		return Math.floor((vP + na) / nZ)
	}, this.m8 = function(eW, eY) {
		return 1 <= eW && 1 <= eY && eW < p.eP - 1 && eY < p.eQ - 1
	}, this.eX = function(eV) {
		return eV % p.eP
	}, this.eZ = function(eV) {
		return ac.eB(eV, p.eP)
	}, this.ed = function(eW, eY) {
		return eY * p.eP + eW
	}, this.aCl = function(eW, eY) {
		return 4 * this.ed(eW, eY)
	}, this.aCm = function(eV) {
		return this.ec(this.eX(eV), this.eZ(eV))
	}, this.ec = function(eW, eY) {
		return 0 < eW && eW < p.eP - 1 && 0 < eY && eY < p.eQ - 1
	}, this.eg = function(eV) {
		return eV << 2
	}, this.a2p = function(hd) {
		return hd >> 2
	}, this.aCn = function(eV) {
		return p.eP * this.eZ(eV) * 256 + (this.eX(eV) << 4)
	}, this.aCo = function(eV) {
		return this.aCn(eV) + 8 + (p.eP << 7)
	}, this.s9 = function(su) {
		return p.eP * (this.a3E(su) >> 4) + (this.a3C(su) >> 4)
	}, this.zF = function(su) {
		su = this.s9(su);
		return (this.eX(su) >> 5) + e3.z3.z0 * (this.eZ(su) >> 5)
	}, this.a3C = function(su) {
		return su % (p.eP << 4)
	}, this.a3E = function(su) {
		return ac.eB(su, p.eP << 4)
	}, this.aCp = function(eV, sD) {
		return eV + this.sH[sD]
	}, this.aCq = function(hd, sD) {
		return hd + this.sU[sD]
	}, this.aCr = function(a2n, a2g) {
		var ea = this.eX(a2g) - this.eX(a2n),
			a2g = this.eZ(a2g) - this.eZ(a2n);
		return Math.abs(ea) >= Math.abs(a2g) ? 1 + 2 * (ea < 0) : 2 * (0 < a2g)
	}, this.rZ = function(player) {
		return this.ed(eF.eG[player] + eF.eH[player] >> 1, eF.eJ[player] + eF.eK[player] >> 1)
	}, this.rL = function(player) {
		return this.ed(eC.eE(eF.eG[player], eF.eH[player]), eC.eE(eF.eJ[player], eF.eK[player]))
	}
}

function aCs() {
	this.ok = function() {
		a5.aw.dq(), a5.a6.a7(105, gP.fF.aB7(gP.fF.aB8(5))), a5.a6.a7(106, gP.fF.aB7(gP.fF.aB8(15))), a5.a6.a7(109, 0), a5.a6.a7(108, a5.c0.data[109].value), a5.a6.a7(111, a5.c0.data[109].value + 1), a5.a6.a7(107, 0), a5.a6.a7(110, "")
	}, this.om = function() {
		var data;
		oV.size < pF.aCt(29) ? f2.aw.oW(0, 3254) : ((data = {
			a5C: oV.oX(30),
			a5w: oV.oX(16),
			a5x: oV.oX(30),
			a5y: oV.oX(30),
			a5a: oV.oX(30),
			g9: oV.aCu(32),
			username: fE.v0.fq(5),
			a6W: fE.v0.fq(3),
			a6d: fE.v0.fq(3),
			a6V: oV.aCu(32),
			a6c: oV.aCu(32),
			a6X: oV.oX(30),
			a6Z: oV.aCu(32),
			a6e: oV.aCu(32),
			a6b: oV.aCu(32),
			a6f: oV.aCu(32),
			a63: oV.aCu(32),
			a64: oV.aCu(30),
			a6g: oV.aCu(32),
			a6h: fE.v0.fq(3),
			a6Q: oV.aCu(2),
			a6S: oV.aCu(10),
			a6N: fE.v0.fq(8),
			a6R: oV.aCu(5),
			a5Y: oV.oX(30),
			a5z: oV.oX(30),
			a60: oV.aCu(32),
			a6A: oV.oX(3),
			a69: oV.oX(8),
			a61: oV.oX(30),
			a62: oV.aCu(32),
			a67: oV.oX(1),
			a6K: fE.v0.fq(6),
			a6i: oV.oX(1),
			a6j: oV.oX(1)
		}).a6i && (data.a6k = oV.aCu(32), data.a6l = oV.oX(30), data.a6m = oV.oX(30), data.a6n = oV.oX(1)), 8 === a0.dU && (25 === a0.dV().aCv ? (data.a5A = !0, a0.aw.ps = data, a0.dV().aCw(25, !1)) : (data.a5A = !1, a5.a6.a7(160, +(data
			.a6i && data.a6n)), data.dw = a5.c0.data[105].value, a0.aw.pp = data, a5.a6.aCx(data), a0.dV().aCw(16, !0))))
	}
}

function px() {
	var b, c, b7, aG;

	function g() {
		bA(), 2 !== o.data.aIncomeType && (o.data.aIncomeData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		2 === o.data.aIncomeType ? (w.x.bD(b7.bE(), o.data.aIncomeData, 255), w.x.max(o.data.aIncomeData) || (o.data.aIncomeType = 0)) : 1 !== o.data.aIncomeType || o.data.aIncomeValue || (o.data.aIncomeType = 0)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(18), [new f("⬅️ " + L(1), g)]), c = new j(b.k, (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(19), L(11), L(9)],
			value: o.data.aIncomeType
		}, function(ab) {
			bA(), 2 !== ab || o.data.aIncomeData || (o.data.aIncomeData = new Uint8Array(o.bI)), o.data.aIncomeType = ab, a0.a1(22)
		})), aG.push(aT)
	}(aG = []), function(aG) {
		var aT;
		1 === o.data.aIncomeType && ((aT = new aU).aV("Value"), aT.aX(new aa({
			ab: -1,
			value: o.data.aIncomeValue
		}, 1, 0, function(aY) {
			var value = ac.ad(Math.floor(aY.target.value), 0, 255);
			aY.target.value = o.data.aIncomeValue = value
		})), aG.push(aT))
	}(aG), function(aG) {
		var aT;
		2 === o.data.aIncomeType && ((aT = new aU).aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.aIncomeData, 4)), aT.aX(b7), aG.push(aT))
	}(aG), aG))
}

function pt() {
	var x8, aCy, aCz, aD1;

	function aD0(al) {
		a0.a1(8, a0.dU, new a5B(21, {
			aD2: al,
			gd: 0,
			ge: 10
		}))
	}
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), aCy.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, aCz = [new f(L(213), function() {
		aD0(1)
	}, 0, 0, 1), new f(L(214), function() {
		aD0(2)
	}, 0, 0, 1), new f(L(215), function() {
		aD0(3)
	}, 0, 0, 1), new f(L(216), function() {
		aD0(0)
	}, 0, 0, 1), new f(L(217), function() {
		aD0(9)
	}, 0, 0, 1), new f(L(218), function() {
		aD0(10)
	}, 0, 0, 1), new f(L(219), function() {
		aD0(11)
	}, 0, 0, 1), new f(L(220), function() {
		aD0(13)
	}, 0, 0, 1)], aD1 = [new f("⬅️ " + L(1), function() {
		a0.bC()
	})], x8 = new e(L(221), aD1), aCy = new a54(aCz, x8.k)
}

function pd() {
	this.c0 = {}, this.aD3 = new Array(8), this.ps = null, this.pp = null, this.a89 = 0, this.ax = [0, 0], this.a2Y = function() {
		a0.a1(5, 5)
	}, this.aD4 = function(a8b) {
		a8b && (pW.aD5 = a8b), a0.au(), pW.a4()
	}, this.aD6 = function() {
		a0.a1(0 === aB.ox() ? 5 : 0)
	}, this.aD7 = function() {
		if (1 === a5.c0.data[130].value) a0.a1(8, a0.dV().ph, new a5B(24, {
			xQ: a5.c0.data[125].value,
			gd: a5.c0.data[128].value,
			ge: a5.c0.data[129].value
		}));
		else {
			for (var ak = (ak = a5.c0.data[126].value.split(",")).slice(0, 10), al = 0; al < ak.length; al++) ak[al] = ak[al].trim().slice(0, 7).toUpperCase();
			1 === ak.length && 0 === ak[0].length && (ak = []), a0.a1(8, a0.dV().ph, new a5B(23, {
				xQ: a5.c0.data[125].value,
				aD8: ak
			}))
		}
	}, this.aD9 = function(ph, target) {
		a0.a1(4, ph, new st("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + f2.aw.a5W(
				"/privacy"), !1, [new f("⬅️ " + L(1), function() {
				a0.a1(ph)
			}), new f("✅ Accept", function() {
				a5.a6.a7(140, 1), 0 === target ? a0.a1(2, ph) : a0.a1(8, ph, new a5B(target))
			})]))
	}, this.oy = function() {
		for (var al = 0; al < 8; al++) this.aD3[al] = fE.uy.a6v(oV.oX(5));
		this.aD3[1] = "[" + this.aD3[1] + "]", 5 === a0.dU && (a0.dV().a16.a7(this.aD3), a0.dV().resize())
	}, this.a5k = function(bV, pL, aDA) {
		bV = w.cO.jP(bV, 1, 1e6);
		var aDB = Math.max(1, 1 + Math.floor(.01 * (bV - 100))),
			pL = L(222, [pL]);
		return (pL += "<br>") + L(223, [aDA]) + "<br>" + L(224, [aDB < 20 ? bV + aDB + "–" + (bV + 20) : bV + aDB]) + "<br>" + L(225, [bV])
	}
}

function aDC() {
	this.a3p = function() {
		return c3.h2.h3() ? 2 : 1
	}
}

function a1U() {
	var aDD = 0,
		aDE = null;
	this.a4 = function() {
		null === aDE && (aDE = new Uint16Array(2 * e3.aw.zu)), aDD = 0
	}, this.cW = function(aDF, fk) {
		var aDG = aDE;
		aDG[aDD++] = aDF, aDG[aDD++] = fk
	}, this.a04 = function(player, aDH) {
		for (var aDG = aDE, bw = aDD, al = 0; al < bw; al += 2)
			if (aDG[al] === aDH && e3.fi.a31(aDG[al + 1]) && player === e3.aw.sN[ix.a08[2]] >> 3) return !0;
		return !1
	}, this.fm = function(aDI) {
		var a1G = e3.aw.s4[aDI];
		if (!(a1G < 64)) {
			for (var aDH = e3.aw.yx[aDI], aDG = aDE, bw = aDD, al = bw - 2; 0 <= al; al -= 2)
				if (aDG[al] === aDH) {
					{
						aDM = void 0;
						var aDM = aDG[al + 1];
						e3.fi.a31(aDM) && e3.fk.fl(ix.a08[2])
					}
					aDG[al] = aDG[bw - 2], aDG[al + 1] = aDG[bw - 1], bw -= 2
				} aDD = bw
		}
	}, this.sL = function(aDK, aDL) {
		for (var aDM = e3.aw.yx[aDK], aDH = -1, aDG = aDE, bw = aDD, al = 1; al < bw; al += 2)
			if (aDG[al] === aDM) {
				aDH = aDG[al - 1];
				break
			} if (-1 === aDH) return !1;
		if (!e3.fi.a31(aDH)) return !1;
		var aDI = ix.a08[2],
			a34 = e3.aw.a35[aDI];
		if (aDL === a34[a34.length - 1]) e3.aw.a35[aDK] = e3.a1Q.aDN(e3.aw.a35[aDK], e3.a1Q.aDO(a34));
		else {
			var aDP = e3.fi.a3K(a34, aDL);
			if (-1 === aDP) return !1;
			var aDQ = e3.aw.sM[aDI];
			aDP === aDQ ? (aDI = eN.s9(e3.aw.s5[aDI]), e3.aw.a35[aDK] = e3.a1Q.aDS(e3.aw.a35[aDK], a34, aDP, aDL, eN.aCk(a34[aDP], aDL) > eN.aCk(a34[aDP], aDI))) : e3.aw.a35[aDK] = e3.a1Q.aDS(e3.aw.a35[aDK], a34, aDP, aDL, aDQ < aDP)
		}
		return !0
	}, this.fl = function(a33) {
		var a34, cX = e3.aw,
			a1G = cX.s4[a33];
		return a1G % 64 != 5 && (a34 = cX.a35[a33], cX.s6[a33] = 65535 - cX.s6[a33], cX.sM[a33] = a34.length - cX.sM[a33] - 2, cX.a35[a33] = e3.a1Q.aDO(a34), cX.s4[a33] = a1G - a1G % 64 + 5, !0)
	}
}

function aDU() {
	this.ru = null, this.rt = null, this.rw = null, this.a4 = function() {
		this.aDV = [L(226), L(227), L(228), L(229), L(230), L(231), L(232), L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241), L(242), L(243), L(244), L(245), L(246), L(247), L(248), L(249), "Mare Nostrum"];
		var aDW = [120, 105, 92],
			cos = [12, 12, 60],
			aDX = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aDY = [140, 130, 120],
			aDZ = [12, 12, 76],
			aDa = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aDb = [130, 117, 106],
			aDc = [12, 12, 68],
			aDd = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.ru = new Array(p.a4A + 1), this.ru[0] = {
			ba: 230,
			bb: 230,
			aBd: 1e3,
			aBa: 2e3,
			qX: 173
		}, this.ru[1] = {
			ba: 800,
			bb: 800,
			aBd: 100,
			aBa: 50,
			qX: 43
		}, this.ru[2] = {
			ba: 512,
			bb: 512,
			aBd: 128,
			aBa: 32,
			qX: 0
		}, this.ru[3] = {
			ba: 960,
			bb: 960,
			aBd: 60,
			aBa: 8,
			qX: 0
		}, this.ru[4] = {
			ba: 900,
			bb: 900,
			aBd: 100,
			aBa: 5,
			qX: 0
		}, this.ru[5] = {
			ba: 1e3,
			bb: 1e3,
			aBd: 100,
			aBa: 40,
			qX: 0
		}, this.ru[6] = {
			ba: 1e3,
			bb: 1e3,
			aBd: 100,
			aBa: 20,
			qX: 0
		}, this.ru[7] = {
			ba: 1024,
			bb: 1024,
			aBd: 128,
			aBa: 32,
			qX: 0
		}, this.ru[8] = {
			ba: 820,
			bb: 820,
			aBd: 200,
			aBa: 100,
			qX: 0
		}, this.ru[9] = {
			ba: 1024,
			bb: 1024,
			aBd: 128,
			aBa: 32,
			qX: 0
		}, this.ru[10] = {
			wD: aDY,
			wE: aDZ,
			aBM: aDa
		}, this.ru[11] = {
			wD: aDb,
			wE: aDc,
			aBM: aDd
		}, this.ru[12] = {
			wD: aDb,
			wE: aDc,
			aBM: aDd
		}, this.ru[13] = {
			wD: aDW,
			wE: cos,
			aBM: aDX
		}, this.ru[14] = {
			wD: aDW,
			wE: cos,
			aBM: aDX
		}, this.ru[15] = {
			wD: aDY,
			wE: aDZ,
			aBM: aDa
		}, this.ru[16] = {
			wD: aDY,
			wE: aDZ,
			aBM: aDa
		}, this.ru[17] = {
			wD: aDW,
			wE: cos,
			aBM: aDX
		}, this.ru[18] = {
			wD: aDb,
			wE: aDc,
			aBM: aDd
		}, this.ru[19] = {
			wD: aDW,
			wE: cos,
			aBM: aDX
		}, this.ru[20] = {
			ba: 1024,
			bb: 1024,
			aBd: 128,
			aBa: 32,
			qX: 0
		}, this.ru[21] = {
			ba: 940,
			bb: 940,
			aBd: 80,
			aBa: 8,
			qX: 0
		}, this.ru[22] = {
			wD: aDb,
			wE: aDc,
			aBM: aDd
		}, this.ru[23] = {
			wD: aDY,
			wE: aDZ,
			aBM: aDa
		}, this.ru[24] = {
			wD: [157, 136, 117],
			wE: [16, 13, 68],
			aBM: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aDh: "[OG] Neutronian"
		};
		for (var al = 0; al < p.a4A; al++) this.ru[al].name = this.aDV[al];
		this.ru[p.a4A] = {
			name: ""
		}, this.rt = new Uint8Array(12);
		for (al = 0; al < 10; al++) this.rt[al] = al;
		for (this.rt[10] = 20, this.rt[11] = 21, this.rw = new Uint8Array(p.aDi), al = 0; al < 10; al++) this.rw[al] = 10 + al;
		this.rw[10] = 22, this.rw[11] = 23, this.rw[12] = 24
	}
}

function pq() {
	var x8, aDj, xB, aDk, aDl, aDm, colors = [0, 0, 0],
		aDn = -1;

	function aDq(al) {
		var aDr = aDj.bj + al * (h4.gap + aDm);
		hL.fillStyle = "rgb(" + (0 === al ? 150 : 2 === al ? 30 : 0) + "," + (1 === al ? 130 : 2 === al ? 30 : 0) + "," + (2 === al ? 220 : 0) + ")", hL.fillRect(aDk, aDr, colors[al] * aDl, aDm), hL.strokeStyle = hM.hX, hL.strokeRect(aDk, aDr, aDl,
			aDm), hL.fillStyle = hM.hX, hL.font = w.bc.hG(0, .32 * aDm), w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 0), hL.fillText(L(0 === al ? 252 : 1 === al ? 253 : 254) + aDo(al), aDk + h4.gap, aDr + .53 * aDm)
	}

	function aDo(al, aDs) {
		return aDs = aDs || 256, ac.ad(Math.floor(aDs * colors[al]), 0, aDs - 1)
	}

	function y1(eD, eI) {
		return !(eD < aDk || eI < aDj.bj || eD > aDj.bi + aDj.ba || eI > aDj.bj + aDj.bb)
	}
	this.show = function() {
		var bV = a5.c0.data[121].value;
		colors[0] = (bV >> 12) / 63, colors[1] = (bV >> 6 & 63) / 63, colors[2] = (63 & bV) / 63, x8.show(), this.resize()
	}, this.b1 = function() {
		a5.a6.a7(121, (aDo(0, 64) << 12) + (aDo(1, 64) << 6) + aDo(2, 64)), x8.b1()
	}, this.resize = function() {
		x8.resize(), aDj.resize();
		var b3 = c2.je,
			xX = x8.xY(),
			aDp = (aDj.bj = Math.max(aDj.bj, b3 * xX.xb + h4.gap), b3 * xX.xa - 2 * h4.gap);
		aDj.bb = Math.min(aDj.bb, aDp), aDj.ba = 2 * aDj.bb, aDj.bj = b3 * xX.xb + .5 * (b3 * xX.xa - aDj.bb), aDj.bi = .5 * (c2.ba - aDj.ba), xB = .25 * aDj.ba, aDk = aDj.bi + xB + h4.gap, aDl = aDj.ba - xB - h4.gap, aDm = (aDj.bb - 2 * h4
			.gap) / 3
	}, this.hJ = function() {
		var br, mL, j9;
		x8.hJ(), hL.lineWidth = h4.kx, br = aDo(0), mL = aDo(1), j9 = aDo(2), hL.fillStyle = "rgb(" + br + "," + mL + "," + j9 + ")", hL.fillRect(aDj.bi, aDj.bj, xB, aDj.bb), hL.strokeStyle = hM.hX, hL.strokeRect(aDj.bi, aDj.bj, xB, aDj.bb), hL
			.fillStyle = br + mL + j9 < 306 && mL < 150 ? hM.hX : hM.r1, w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 1), hL.font = w.bc.hG(0, .1 * aDj.bb), hL.rotate(-Math.PI / 2), hL.fillText(L(251), -aDj.bj - .5 * aDj.bb, aDj.bi + .5 * xB), hL
			.setTransform(1, 0, 0, 1, 0, 0), aDq(0), aDq(1), aDq(2)
	}, this.h6 = function(eD, eI) {
		y1(eD, eI) && (aDn = ac.ad(Math.floor((eI - aDj.bj) / (aDm + .75 * h4.gap)), 0, 2), colors[aDn] = ac.ad((eD - aDk) / aDl, 0, 1), dY.dk = !0)
	}, this.hA = function(eD) {
		-1 !== aDn && (colors[aDn] = ac.ad((eD - aDk) / aDl, 0, 1), dY.dk = !0)
	}, this.q9 = function(eD, eI, deltaY) {
		y1(eD, eI) && (eD = ac.ad(Math.floor((eI - aDj.bj) / (aDm + .75 * h4.gap)), 0, 2), colors[eD] = ac.ad(colors[eD] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), dY.dk = !0)
	}, this.q8 = function() {
		0 <= aDn && (aDn = -1, dY.dk = !0)
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(L(250), [new f("⬅️ " + L(1), function() {
		a0.aw.aD6()
	})], !1), aDj = new a3k([.5, .25], [.5, .5], 1)
}

function zj() {
	var a4T = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aDt = [hM.aDu, hM.aDu, hM.aDv, hM.aDw, hM.aDx, hM.aDy, hM.aDz, hM.aDv, hM.aE0, hM.a5h, hM.aE1, hM.r1],
		aE2 = [
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
		aE3 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aEB(vi, dw, aED) {
		for (var j9 = vi.length - 1; 0 <= j9; j9--) {
			var ga = vi[j9];
			0 === ga.id && ga.dw === dw && (ga.eo = "[Redacted Message]", aED) && (ga.td = 1)
		}
	}
	this.tp = function(tJ) {
		var aE4, a68;
		return tJ.id < 5 && (aE4 = "@" + gP.fF.gQ(tJ.dw, 5)), 0 === tJ.id ? aE4 + ": " + tJ.eo : 1 === tJ.id ? (a68 = "@" + gP.fF.gQ(tJ.target, 5), 0 === tJ.f7 ? 32768 <= tJ.value ? aE4 + " voted with " + (tJ.value - 32768 + 1) +
				" gold against " + a68 + " to weaken the latter's admin position. 📉" : aE4 + " voted with " + (tJ.value + 1) + " gold for " + a68 + " to strengthen the latter's admin position. 💪" : 1 === tJ.f7 ? aE4 + " sent " + Math.floor(tJ
					.value / 100) + " 🧈 gold to " + a68 + "." : aE4 + " voted with " + (tJ.value / 10).toFixed(1) + " points for " + a68 + " to acknowledge the latter as clan leader. ✅") : 2 === tJ.id ? 0 === tJ.f7 ? aE4 +
			" was 🔇 muted for 1 Hour." : 1 === tJ.f7 ? "The username of " + aE4 + " was ✂️ redacted. Duration: 1 Day" : aE4 + " 👢 was kicked." : 3 === tJ.id ? aE4 + a65.a4d(tJ.f7, a65.a4Z[tJ.f7][tJ.value]) + "@" + gP.fF.gQ(tJ.target, 5) + a65
			.a4f(tJ.f7, a65.a4Z[tJ.f7][tJ.value]) : 4 === tJ.id ? aE4 + a65.a4d(5, a65.a4Z[5][tJ.f7]) + "@" + gP.fF.gQ(tJ.target, 5) + a65.a4f(5, a65.a4Z[5][tJ.f7]) : 5 === tJ.id ? aE3[tJ.f7] : 6 === tJ.id ? "You are about to mention " + tJ
			.value + " player" + (1 === tJ.value ? "" : "s") + ". This action will cost " + (Math.max(10 * tJ.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === tJ.id ? tJ.eo : void 0
	}, this.tn = function(tJ, f1) {
		return {
			tJ: tJ,
			eo: f1,
			tM: 0,
			fontSize: 1,
			tK: 0,
			te: tJ.id ? hM.aE5 : hM.hX
		}
	}, this.a0I = function(player, gZ) {
		return (2 === gZ ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.tV = function(g6) {
		return aDt[g6]
	}, this.tR = function(g6, g7) {
		return g6 < 3 || 7 === g6 ? aE2[g6][0] : 4 === g6 ? aE2[g6][g7 < 1 ? 0 : g7 < 10 ? 1 : 2] : aE2[g6][g7 < 10 ? 0 : 1]
	}, this.tS = function(g7) {
		return 0 === g7
	}, this.gg = function(gZ, dw) {
		for (var fC = f5.fB.fC, fB = fC[gZ], bw = fB.length, al = 0; al < bw; al++)
			if (dw === fB[al].dw) return fB[al];
		for (var j9 = 0; j9 < fC.length; j9++)
			if (gZ !== j9)
				for (bw = (fB = fC[j9]).length, al = 0; al < bw; al++)
					if (dw === fB[al].dw) return fB[al];
		return null
	}, this.tW = function(ga) {
		return !!f5.gE && ga.dw === f5.gE.dw
	}, this.aE6 = function(fB, aE7, aE8) {
		var aD8 = [];
		loop: for (var al = aE7; al < aE8; al++) {
			var aE9 = w.bL.fK(fB[al].username);
			if (aE9) {
				for (var j9 = aD8.length - 1; 0 <= j9; j9--)
					if (aE9 === aD8[j9].name) {
						aD8[j9].v++;
						continue loop
					} aD8.push({
					name: aE9,
					v: 1
				})
			}
		}
		if (aD8.sort(function(ct, j9) {
				return j9.v - ct.v
			}), 0 === aD8.length) return "";
		for (var e0 = aD8[0].name + ": " + aD8[0].v, al = 1; al < aD8.length; al++) e0 += "   " + aD8[al].name + ": " + aD8[al].v;
		return e0
	}, this.aEA = function(g6, g7, g8) {
		return 0 === a4T[g6].length ? "Rank: " + (g7 + 1) : a4T[g6] + " Rank: " + (g7 + 1) + (3 !== g6 && g8 < 100 ? "   " + a4T[3] + " Rank: " + (g8 + 1) : "")
	}, this.tq = function(dw) {
		for (var lf = f5.aw.lf, al = 0; al < lf.length; al++) aEB(lf[al].vi, dw);
		aEB(f5.message.aEC(), dw, 1), f5.gS.tq(dw)
	}
}

function aEE() {
	this.hJ = function() {
		if (0 !== a3S.aw.a0V && (hL.globalAlpha = Math.min(a3S.aw.a0V / 580, 1), hL.drawImage(a3S.aw.a0W, 1 + vQ.wd(), 1 + vQ.we()), hL.globalAlpha = 1, o.db)) {
			for (var hz = nY / nZ, i0 = na / nZ, i1 = (c2.ba + nY) / nZ, i2 = (c2.bb + na) / nZ, eR = a3S.aw.a0U * nZ, a0X = a3S.aw.a0X, al = o.cF - 1; 0 <= al; al--) ! function(al, eR, hz, i0, i1, i2, a0X) {
				var highlight;
				0 === eF.hu[al] || 0 === eF.fQ[al] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[al]) && (eR *= 2), i1 = c2.ba * ((eF.eG[al] + eF.eH[al] + 1) / 2 - hz) / (i1 - hz) - .5 * eR, hz = c2.bb * ((eF
					.eJ[al] + eF.eK[al] + 1) / 2 - i0) / (i2 - i0) - .5 * eR, c2.ba < i1) || hz > c2.bb || i1 < -eR || hz < -eR || (highlight ? hL.setTransform(2 * nZ, 0, 0, 2 * nZ, i1, hz) : hL.setTransform(nZ, 0, 0, nZ, i1, hz), hL
					.drawImage(a0X[o.fT ? bN.iZ[al] : 1], 0, 0))
			}(al, eR, hz, i0, i1, i2, a0X);
			hL.setTransform(nZ, 0, 0, nZ, 0, 0)
		}
	}
}

function aEI() {
	this.ha = function(e0, font, maxWidth) {
		if (font && (hL.font = font), hL.measureText(e0).width <= maxWidth) return e0;
		for (var al = e0.length - 1; 1 <= al; al--)
			if (e0 = e0.substring(0, al), hL.measureText(e0 + "...").width <= maxWidth) return e0 + "...";
		return "..."
	}
}

function a6y() {
	this.a7 = function(ab, value) {
		2 !== a5.c0.data[ab].type && (value = Math.floor(value)), a5.c0.data[ab].value !== value && (a5.c0.ym(ab, value), 0 === ab ? (a0.au(), fI.a4(), a0.a1(2)) : 1 === ab ? c2.aEK(1) : 2 === ab ? c2.aEK(0) : 5 === ab && (w.bc.jT(), c2.aEK(0)))
	}, this.ye = function() {
		for (var data = a5.c0.data, al = 0; al < 100; al++) data[al] && a5.c0.ym(al, data[al].c4);
		w.bc.jT(), c2.aEK(1)
	}, this.yf = function() {
		for (var data = a5.c0.data, al = 0; al < data.length; al++) data[al] && a5.c0.a7(al, data[al].c4)
	}, this.aEL = function() {
		for (var j9 = a5.c0, al = 128; al < 135; al++) j9.ym(al, j9.data[al].c4)
	}, this.aCx = function(data) {
		a5.a6.a7(109, data.a5C), a5.a6.a7(107, data.a5w), a5.a6.a7(108, data.a5x), a5.a6.a7(112, data.a5y), a5.a6.a7(111, data.a5a), a5.a6.a7(113, data.g9), a5.a6.a7(135, data.a6W), a5.a6.a7(136, data.a6d), a5.a6.a7(137, data.a6V), a5.a6.a7(138,
			data.a6c), a5.a6.a7(139, data.a6X), a5.a6.a7(141, data.a6Z), a5.a6.a7(142, data.a6e), a5.a6.a7(143, data.a6b), a5.a6.a7(144, data.a6f)
	}
}

function aEM(aEN) {
	var wG = document.createElement("div");

	function aEP() {
		dE.dF() || (wG.style.backgroundColor = w.color.aB4(hM.ka, 50))
	}

	function aEO() {
		wG.style.backgroundColor = hM.ka
	}
	this.a7 = function(vk) {
			wG.textContent = vk
		}, this.show = function() {
			document.body.appendChild(wG)
		}, this.resize = function() {
			var bb = w.bc.jc(.03, .5);
			wG.style.width = 2 * bb + "px", wG.style.height = bb + "px", wG.style.font = w.bc.hG(1, .75 * bb), w.bc.jV(wG, 4), w.bc.jV(wG, 2)
		}, this.d1 = function() {
			wG.onclick = null, wG.onmouseover = null, wG.onmouseout = null, a0.removeChild(document.body, wG), wG = null
		}, wG.style.position = "absolute", aEO(), wG.style.color = hM.hX, wG.style.zIndex = "3", wG.style.right = "0", wG.style.top = "0", wG.style.display = "flex", wG.style.justifyContent = "center", wG.style.alignItems = "center", wG.style
		.userSelect = "none", wG.style.outline = "none", wG.onclick = aEN, wG.onmouseover = aEP, wG.onmouseout = aEO
}

function aEQ() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.o1 = 13, this.a28 = this.emojis.length, this.a29 = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a29, this.a27 = 1024, this.aER = this.emojis.indexOf(
		"💀"), this.aES = this.aER + 1, this.aET = this.emojis.indexOf("🥇"), this.aEU = this.emojis.indexOf("😊"), this.o2 = function(bV) {
		return bV < this.a29 ? String.fromCharCode(55356, 56806 + ac.eB(bV, 26), 55356, 56806 + bV % 26) : this.emojis[Math.min(bV - this.a29, this.a28 - 1)]
	}, this.a2B = function(e0) {
		for (var bw = e0.length - 2, ak = [], al = 0; al < bw; al++) {
			var oC = e0.charCodeAt(al) - 56806,
				oD = e0.charCodeAt(al + 2) - 56806;
			0 <= oC && oC < 26 && 0 <= oD && oD < 26 && (ak.push(26 * oC + oD), al += 3)
		}
		return ak
	}, this.nN = function(bV) {
		return bV < this.a29
	}, this.ny = function(bV) {
		return bV >= 1024 - this.o1
	}, this.nu = function(bV) {
		return bV >= this.a29 && bV < this.a29 + this.aES
	}
}

function pk() {
	var x8, a58, aG, aT;

	function aEV() {
		fI.aEW !== a5.c0.data[12].value ? (fI.a4(), a0.a1(8, 1, new a5B(30))) : a0.a1(1)
	}
	this.show = function() {
			x8.show(), this.resize()
		}, this.b1 = function() {
			x8.b1()
		}, this.resize = function() {
			x8.resize(), a58.resize()
		}, this.b2 = function(b3) {
			2 === b3 && x8.b4[0].b5()
		}, x8 = new e(L(255), [new f("⬅️ " + L(1), aEV), new f(L(256), function() {
			a0.au(), a5.a6.ye(), a0.a1(2)
		})]), aG = [], (aT = new aU).aV(L(257)), aT.a5j(L(258)), aG.push(aT),
		function(aG) {
			var aT = new aU,
				ak = (aT.aV(L(286)), fI.data.aEf());
			aT.ah(new ai({
				aj: ak,
				value: fI.data.aEg(ak)
			}, function(ab) {
				return a5.a6.a7(12, ak[ab].split(":")[0]), !0
			})), aG.push(aT)
		}(aG),
		function(aG) {
			var aT = new aU,
				aEa = (aT.aV(L(284)), []);
			aT.aX(new aZ([new f(L(285), function(aY) {
				yX.aEb();
				for (var al = 0; al < aEa.length; al++) aEa[al].aY.value = yX.yY[al];
				return w.bc.jp(aY), !0
			}).button]));
			for (var al = 0; al < yX.aEc.length; al++) {
				aT.a5j(yX.aEc[al]);
				for (var ct = 0; ct < 2; ct++) {
					var ab = 2 * al + ct,
						rx = new aa({
							value: yX.yY[ab],
							ab: -1
						});
					rx.aY.aEd = ab, aEa.push(rx), rx.aY.addEventListener("keydown", function(aY) {
						aY.preventDefault();
						var code = aY.code;
						aY.target.value = code, yX.aEe(aY.target.aEd, code)
					}), ct && (rx.aY.style.marginLeft = "4%"), rx.aY.style.width = "48%", aT.aX(rx)
				}
			}
			aG.push(aT)
		}(aG), (aT = new aU).aV(L(259)), a5.c0.data[1].aj = [L(260), L(261), L(262), L(263)], aT.ah(new ai(a5.c0.data[1])), aG.push(aT), (aT = new aU).aV(L(264)), a5.c0.data[9].aj = [L(261), L(265), L(266)], aT.ah(new ai(a5.c0.data[9])), aG.push(aT),
		(aT = new aU).aV(L(267)), a5.c0.data[11].aj = [L(268), L(269), L(270)], aT.ah(new ai(a5.c0.data[11])), aG.push(aT), (aT = new aU).aV(L(271)), aT.aX(new rr(a5.c0.data[2])), aG.push(aT), (aT = new aU).aV(L(272)), aT.aX(new rr(a5.c0.data[7])),
		aG.push(aT), (aT = new aU).aV(L(273)), aT.aX(new rr(a5.c0.data[8])), aG.push(aT), (aT = new aU).aV(L(274)), aT.aX(new aa(a5.c0.data[5])), aG.push(aT), (aT = new aU).aV(L(275)), aT.aX(new rr(a5.c0.data[13], L(276))), aT.aX(new rr(a5.c0.data[
			14], L(277))), aG.push(aT), (aT = new aU).aV(L(278)), aT.ah(new ai({
			aj: [L(279), L(280), L(281)],
			value: pW.aEZ
		}, function(al) {
			pW.aEZ = al
		})), aG.push(aT), (aT = new aU).aV(L(282)), aT.aX(new rr(a5.c0.data[15])), aT.a5j(L(283)), aT.aX(new aa(a5.c0.data[16], 1, 0, function(aY) {
			aY.target.value = ac.ad(Math.floor(aY.target.value), 0, 16)
		})), aG.push(aT), a58 = new j(x8.k, aG)
}

function aEh() {
	var aEi, aEj, ef, aEk;
	this.a4 = function() {
		var al, bi, bj, bT, aEl, ba, bb, hZ, bf, bh, bV, i5, eM, ct, a1F;
		if (function() {
				if (ef = !0, aEk = "rgb(" + p.i8[0] + "," + p.i8[1] + "," + p.i8[2] + ")", p.aEo(p.fo)) return 1;
				return ef = !1, 0
			}()) aEj = null;
		else {
			for (aEi = ac.eB(96, 4), aEl = 1 === p.fo ? (bT = 0, 160) : (bT = 128, 32), aEk = "rgb(" + bT + "," + bT + "," + bT + ")", aEj = new Array(4), al = 3; 0 <= al; al--) {
				if (aEj[al] = document.createElement("canvas"), ba = al % 2 == 0 ? p.eP : aEi, bb = al % 2 == 0 ? aEi : p.eQ + 2 * aEi, aEj[al].width = ba, aEj[al].height = bb, bh = (bf = (hZ = aEj[al].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, ba, bb)).data, al % 2 == 0)
					for (bj = aEi - 1; 0 <= bj; bj--)
						for (bV = aEl + Math.floor((bj + 1) * (bT - aEl) / (aEi + 1)), bi = ba - 1; 0 <= bi; bi--) bh[i5 = 4 * ((0 === al ? aEi - bj - 1 : bj) * ba + bi)] = bV, bh[i5 + 1] = bV, bh[i5 + 2] = bV, bh[i5 + 3] = 255;
				else {
					for (bi = aEi - 1; 0 <= bi; bi--)
						for (bV = aEl + Math.floor((bi + 1) * (bT - aEl) / (aEi + 1)), bj = bb - 1 - aEi; aEi <= bj; bj--) bh[i5 = 4 * (bj * ba + (3 === al ? aEi - bi - 1 : bi))] = bV, bh[i5 + 1] = bV, bh[i5 + 2] = bV, bh[i5 + 3] = 255;
					for (ct = 1; 0 <= ct; ct--)
						for (bi = aEi - 1; 0 <= bi; bi--)
							for (bj = aEi - 1; 0 <= bj; bj--) eM = (Math.pow(bi * bi + bj * bj, .5) + 1) / (aEi + 1), bV = aEl + Math.floor((1 < eM ? 1 : eM) * (bT - aEl)), bh[i5 = 4 * ((0 === ct ? aEi - bj - 1 : bj + ct * (bb - aEi)) * ba + (
								1 === al ? bi : aEi - bi - 1))] = bV, bh[i5 + 1] = bV, bh[i5 + 2] = bV, bh[i5 + 3] = 255
				}
				hZ.putImageData(bf, 0, 0)
			}
			a1F = aEl, p.vw.fillStyle = "rgb(" + a1F + "," + a1F + "," + a1F + ")", p.vw.fillRect(0, 0, p.eP, 1), p.vw.fillRect(0, p.eQ - 1, p.eP, 1), p.vw.fillRect(0, 0, 1, p.eQ), p.vw.fillRect(p.eP - 1, 0, 1, p.eQ)
		}
	}, this.qz = function() {
		var ct = ef ? 0 : -aEi;
		aEp(ct, ct, p.eP - 2 * ct, p.eQ - 2 * ct, wq.aEq, wq.aEr, wq.aEs, wq.aEt) || (hL.fillStyle = aEk, hL.fillRect(0, 0, c2.ba, c2.bb))
	}, this.hJ = function() {
		ef || (aEu(0, -aEi, p.eP, aEi, wq.aEq, wq.aEr, wq.aEs, wq.aEt) && hL.drawImage(aEj[0], wq.aEv, wq.aEw - aEi), aEu(p.eP, -aEi, aEi, p.eQ + 2 * aEi, wq.aEq, wq.aEr, wq.aEs, wq.aEt) && hL.drawImage(aEj[1], wq.aEv + p.eP, wq.aEw - aEi), aEu(
			0, p.eQ, p.eP, aEi, wq.aEq, wq.aEr, wq.aEs, wq.aEt) && hL.drawImage(aEj[2], wq.aEv, wq.aEw + p.eQ), aEu(-aEi, -aEi, aEi, p.eQ + 2 * aEi, wq.aEq, wq.aEr, wq.aEs, wq.aEt) && hL.drawImage(aEj[3], wq.aEv - aEi, wq.aEw - aEi))
	}
}

function a2b() {
	this.size = 0, this.ab = 0, this.oU = null, this.a4 = function(oU) {
		this.ab = 0, this.oU = oU, this.size = oU.length
	}, this.lu = function(aEx) {
		return this.a4(new Uint8Array(this.aCt(aEx))), this.oU
	}, this.d1 = function() {
		this.oU = null
	}, this.pG = function(size, aEy) {
		for (var oU = this.oU, oO = this.ab + size - 1, al = this.ab; al <= oO; al++) oU[al >> 3] |= (aEy >> oO - al & 1) << 7 - (7 & al);
		this.ab += size, this.ab > 8 * this.size && console.error("Wrapper Overflow")
	}, this.pK = function(size, aEy) {
		var j9 = size >> 1,
			h1 = 1 << j9;
		this.pG(size - j9, ac.eB(aEy, h1)), this.pG(j9, aEy % h1)
	}, this.aEz = function(size) {
		for (var oU = this.oU, oO = this.ab + size, al = this.ab; al < oO; al++) oU[al >> 3] &= 255 ^ 128 >>> (7 & al)
	}, this.aCt = function(aEx) {
		return aEx + 7 >> 3
	}, this.aF0 = function(ak, eA, oO, aF1) {
		for (var al = eA; al < oO; al++) this.pG(aF1, ak[al])
	}
}

function aF2() {
	this.aw = new aF3, this.a3X = new aC8, this.pL = new aF4, this.f3 = new a8i, this.zJ = new a8O, this.a5g = new zH, this.aCQ = new aF5, this.aF6 = new aF7, this.aDA = new oS, this.od = new vU, this.og = new aF8, this.oj = new aCs, this.on =
		new aF9, this.a4 = function() {
			this.aw.a4()
		}
}

function a1M() {
	var aFA;
	this.a4 = function() {
		if (!aFA) {
			aFA = new Array(bN.a0g.length);
			for (var al = 0; al < aFA.length; al++) aFA[al] = a3S.aw.a0h(20, bN.a0g[al])
		}
	}, this.hJ = function() {
		var aC2 = nZ;
		if (!(5 <= aC2)) {
			var aFC = c2.ba,
				aFD = c2.bb,
				hz = nY / aC2,
				i0 = na / aC2,
				i1 = (aFC + nY) / aC2,
				i2 = (aFD + na) / aC2,
				eR = -20 * aC2,
				aFE = .5 * eR,
				aFF = p.eP << 4,
				bw = e3.aw.s7,
				s5 = e3.aw.s5,
				sN = e3.aw.sN,
				ub = bN.ub,
				aW = aFA,
				be = hL;
			3 < aC2 && (be.globalAlpha = .5 * (5 - aC2));
			for (var al = 0; al < bw; al++) {
				var su = s5[al],
					bi = aFC * (su % aFF / 16 - hz) / (i1 - hz) + aFE,
					su = aFD * (Math.floor(su / aFF) / 16 - i0) / (i2 - i0) + aFE;
				aFC < bi || aFD < su || bi < eR || su < eR || (be.setTransform(aC2, 0, 0, aC2, bi, su), bi = aW[ub[sN[al] >> 3]], be.drawImage(bi, 0, 0))
			}
			be.globalAlpha = 1, be.setTransform(aC2, 0, 0, aC2, 0, 0)
		}
	}
}

function aFI() {
	var aFJ, aFK, aFL;
	this.a4 = function() {
		aFJ =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aFK =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aFL = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6B = ["K ", " Y", "E ", " Z", " z", " s", "S "], aFM = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], al = aFJ.length - 1; 0 <= al; al--)
			for (var ct = a6B.length - 1; 0 <= ct; ct--) aFJ[al] = aFJ[al].replace(a6B[ct], aFM[ct]);
		if (__fx.settings.realisticNames) aFJ = realisticNames;
	}, this.aFN = function() {
		var bw = o.cF,
			nF = eF.nF,
			uN = eF.uN,
			playerNamesData = o.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < bw)
			for (var al = 0; al < bw; al++) nF[al] = uN[al] = "Player " + eC.qY(1e3);
		else
			for (al = 0; al < bw; al++) nF[al] = uN[al] = __fx.nameFilter.filter(playerNamesData[al])
	}, this.lu = function() {
		if (9 === o.fW) {
			for (var br = eC.random(), aFT = aFL, aFU = aFK, cD = ar.cD, bw = aFT.length, cX = o.data.teamPlayerCount[7], nF = eF.nF, uN = eF.uN, al = cX - 1; al >= o.cF; al--) nF[al] = uN[al] = aFT[(al + br) % bw];
			for (bw = aFU.length - 1, al = cX; al < o.bI; al++) nF[al] = uN[al] = aFU[cD[al] ? bw : al % bw]
		} else(2 === o.data.playerNamesType ? function() {
			for (var bw = o.bI, nF = eF.nF, uN = eF.uN, playerNamesData = o.data.playerNamesData, al = o.cF; al < bw; al++) nF[al] = uN[al] = __fx.nameFilter.filter(playerNamesData[al])
		} : 1 === o.data.playerNamesType ? function() {
			for (var nF = eF.nF, uN = eF.uN, al = o.cF; al < o.bI; al++) nF[al] = uN[al] = "Bot " + eC.qY(1e3)
		} : function() {
			for (var aFV = aFJ, bw = aFV.length, br = eC.random(), nF = eF.nF, uN = eF.uN, al = o.cF; al < o.bI; al++) nF[al] = uN[al] = aFV[(al + br) % bw]
		})()
	}
}

function aFW() {
	var aFX, bb, aFY, aFZ, aFa, aFb, aFc, aFd, aFe;

	function we() {
		return kX.a3m(cp.aFq()) ? a19.gv ? __fx.settings.keybindButtons ? kX.bj - 2 * kX.bb - 3 * aFY : kX.bj - kX.bb - 2 * aFY : __fx.settings.keybindButtons ? kX.bj - kX.bb - 2 * aFY : kX.bj - aFY : h9.a3m(cp.aFt()) ? a19.gv ? h9.we() - kX.bb - 2 *
			aFY : h9.we() - aFY : a19.gv ? c2.bb - kX.bb - (a3o.a3p() + 1) * aFY : c2.bb - a3o.a3p() * h4.gap
	}

	function aFi(hB, e0, id, i5, aFk, aFl, rG, aFm, aFn, aFo, aFv) {
		var al, hZ, aW, ga, aFw = void 0 !== aFn,
			ba = Math.floor(hF.measureText(e0, cp.kT) + 1.5 * aFZ + (aFw ? bb : 1.5 * aFZ));
		if (dY.dk = !0, aFv || aFx.qE(e0, aFn), ba + 2 * aFY + kX.bb > c2.ba && !aFw && 50 !== id && 20 < e0.length) aFi(hB, (aFv = w.bL.aFy(e0))[0], id, i5, aFk, aFl, rG, aFm, aFn, aFo, !0), aFi(hB, aFv[1], id, i5, aFk, aFl, rG, aFm, aFn, aFo, !0);
		else if (aFv = ba + (50 === id ? aFa : 0), (aW = document.createElement("canvas")).width = ba, aW.height = bb, (hZ = aW.getContext("2d", {
				alpha: !0
			})).font = cp.kT, w.bc.textBaseline(hZ, 1), w.bc.textAlign(hZ, 0), hZ.clearRect(0, 0, ba, bb), hZ.fillStyle = aFl, hZ.fillRect(0, 0, ba, bb), hZ.fillStyle = aFk, hZ.fillText(e0, Math.floor(1.5 * aFZ), Math.floor(bb / 2)), aFw && (hZ
				.imageSmoothingEnabled = !0, nM.bh.a2L(aFn, hZ, ba - bb, 0, bb)), 0 === (ga = {
				dX: hB,
				e0: e0,
				id: id,
				player: i5,
				canvas: aW,
				aFk: aFk,
				aFl: aFl,
				ba: ba,
				aFr: aFv,
				rG: rG,
				aFm: aFm,
				aFn: aFn,
				aFo: aFo
			}).dX || 0 < aFX.length && 0 < aFX[0].dX) aFX.unshift(ga);
		else {
			for (al = 1; al < aFX.length; al++)
				if (0 < aFX[al].dX) return void aFX.splice(al, 0, ga);
			aFX.push(ga)
		}
	}

	function aFj(br, mL, j9) {
		return "rgb(" + br + "," + mL + "," + j9 + ")"
	}

	function aG0(id, v) {
		for (var bw = aFX.length, al = 0; al < bw; al++) aFX[al].id === id && v-- <= 0 && (aFX.splice(al, 1), al--, bw--)
	}

	function aG1(id, player) {
		for (var sF = !1, al = aFX.length - 1; 0 <= al; al--) aFX[al].id !== id || player !== o.bI && aFX[al].player !== player || (aFX.splice(al, 1), sF = !0);
		return sF
	}

	function aGS(e0) {
		aFi(340, e0, 6, 0, aFj(215, 245, 255), hM.hN, -1, !1)
	}
	this.sf = "", this.a4 = function() {
		var self;
		aFd = 0, aFc = c3.h2.h3() ? 7 : 12, aFb = {
			jy: [0, 0, 0],
			aFf: [0, 0, 0],
			aBp: [220, 180, 180],
			xX: [0, 0, 0],
			b3: [0, 0, 0]
		}, aFX = [], this.resize(), o.db && this.cq(0, 18), p.rs.ru[p.fo].name.length && aGS(L(328, [p.rs.ru[p.fo].name])), p.rs.ru[p.fo].aDh && aGS(L(329, [p.rs.ru[p.fo].aDh])), aGS(L(330, [p.eP - 2 + "x" + (p.eQ - 2)])), aGS(L(331, [w.bL
			.gQ(iB.a47)
		])), iB.a47 !== iB.a48 && aGS(L(332, [w.bL.gQ(iB.a48) + " (" + w.bL.hH(100 * iB.a48 / iB.a47, 1) + ")"])), 0 < iB.a49 && aGS(L(308, [w.bL.gQ(iB.a49) + " (" + w.bL.hH(100 * iB.a49 / iB.a47, 1) + ")"])), 0 < iB.iC && aGS(L(333, [w.bL
			.gQ(iB.iC) + " (" + w.bL.hH(100 * iB.iC / iB.a47, 1) + ")"
		])), 10 === o.fW && aFi(120, L(334), 6, 0, aFj(235, 255, 120), hM.hN, -1, !1), 0 !== (self = this).sf.length && (aFi(200, self.sf, 0, 0, hM.hX, hM.hN, -1, !1), self.sf = ""), o.vG && aFi(340, L(287), 6, 0, aFj(255, 200, 0), hM.hN, -1,
			!1)
	}, this.resize = function() {
		var a7q, al;
		if (bb = (bb = Math.floor((c3.h2.h3() ? .031 : .0249) * c2.jd)) < 10 ? 10 : bb, this.fontSize = Math.floor(2 * bb / 3), this.kT = w.bc.hG(1, this.fontSize), aFY = h4.gap, aFZ = Math.floor(bb / 5), 0 < aFX.length)
			for (a7q = aFX, aFX = [], al = a7q.length - 1; 0 <= al; al--) aFi(a7q[al].dX, a7q[al].e0, a7q[al].id, a7q[al].player, a7q[al].aFk, a7q[al].aFl, a7q[al].rG, a7q[al].aFm, a7q[al].aFn, a7q[al].aFo, !0);
		this.aFp()
	}, this.aFp = function() {
		aFe = document.createElement("canvas");
		var e0 = L(288),
			hZ = (aFa = hF.measureText(e0, this.kT) + 5 * aFZ, aFe.height = bb, aFe.width = aFa, aFe.getContext("2d", {
				alpha: !0
			}));
		hZ.font = this.kT, w.bc.textBaseline(hZ, 1), w.bc.textAlign(hZ, 1), hZ.clearRect(0, 0, aFa, bb), hZ.fillStyle = hM.a5t, hZ.fillRect(0, 0, aFa, bb), hZ.fillStyle = hM.hX, hZ.fillText(e0, Math.floor(aFa / 2), Math.floor(bb / 2))
	}, this.aFq = function() {
		var bw;
		return a19.gv ? a19.ba : 0 === (bw = aFX.length) ? 0 : 1 === bw ? aFX[0].aFr : aFs(aFX[0].aFr, aFX[1].aFr)
	}, this.aFt = function() {
		var bw = aFX.length;
		return a19.gv ? bw ? aFs(a19.ba, aFX[0].aFr) : a19.ba : 0 === bw ? 0 : 1 === bw ? aFX[0].aFr : 2 === bw ? aFs(aFX[0].aFr, aFX[1].aFr) : aFs(aFs(aFX[0].aFr, aFX[1].aFr), aFX[2].aFr)
	}, this.h6 = function(bi, bj) {
		for (var hz, r6, aFu = we(), al = aFX.length - 1; 0 <= al; al--)
			if ((r6 = aFu - (al + 1) * bb) <= bj && bj < r6 + bb) return 50 === aFX[al].id ? bi >= c2.ba - aFa - aFY - aFX[al].ba && (bi >= c2.ba - aFa - aFY ? pH.cO.aCJ(aFX[al].player) : ut.uu(aFX[al].player, 800, !1, 0), !0) : bi >= c2.ba -
				aFX[al].ba - aFY && (736 === aFX[al].id ? window.open("https://" + aFX[al].e0, "_blank") : aFX[al].aFm && (aFX[al].aFo && aFX[al].aFo.ct ? (r6 = aFX[al].aFo.eV, hz = eN.eX(r6) - 10, r6 = eN.eZ(r6) - 10, ut.aBr(hz, r6, 19 + hz,
					19 + r6)) : aFX[al].aFo && aFX[al].aFo.j9 ? ut.aBs(aFX[al].player, aFX[al].aFo.fg) : (ut.uu(aFX[al].player, 800, !1, 0), 0 <= aFX[al].rG && (hz = aFX[al].rG, aFX[al].rG = aFX[al].player, aFX[al].player = hz))), !0);
		return !1
	}, this.qE = function(hB, e0, id, i5, aFk, aFl, rG, aFm, aFn, aFo) {
		aFi(hB, e0, id, i5, aFk, aFl, rG, aFm, aFn, aFo)
	}, this.yb = function(eo) {
		aFi(300, eo, 252, 0, hM.hX, hM.hN, -1, !1)
	}, this.aFz = function(id) {
		for (var al = aFX.length - 1; 0 <= al; al--) aFX[al].id === id && (aFX[al].dX = 1)
	}, this.cq = function(player, id) {
		0 === id ? (hF.cW(player, 0), aG0(423, 2), aFi(160, L(289, [eF.nF[player]]), 423, player, "rgb(10,220,10)", hM.hN, -1, !1)) : 1 === id ? (aG1(50, o.bI), hF.cW(player, 1), aFi(360, L(290, [eF.nF[player]]), 0, player, hM.aG2, hM.hN, -1, !
			0), ut.uu(player, 2700, !1, 0)) : 2 === id ? (hF.cW(player, 2), aFi(0, L(291), 0, player, "rgb(10,255,255)", hM.hN, -1, !0), ut.uu(player, 2700, !1, 0)) : 3 === id ? (hF.cW(player, 2), aFi(0, L(292, [eF.nF[player]]), 0, player, hM
			.hX, hM.hN, -1, !0), ut.uu(player, 2700, !1, 0)) : 4 === id ? this.aG3(1, player, player) : 5 === id ? w.cO.cm(o.co) || (function(id, qZ) {
			var al, aGF = 0,
				bw = aFX.length;
			for (al = 0; al < bw; al++)
				if (aFX[al].id === id && qZ <= ++aGF) return aFX.splice(al, 1)
		}(1, 5), cr.cs(player) && aFi(180, L(293, [eF.nF[player]]), 1, player, aFj(255, 200, 180), hM.hN, -1, !0), w.cO.ig(player, 10) && (aG0(573, 0), aFi(180, L(294, [eF.nF[player]]), 573, player, hM.aG2, hM.hN, -1, !0))) : 18 === id ? aFi(
			255, L(295), 18, 0, hM.hX, hM.hN, -1, !1) : 21 === id ? aFi(220, L(296), id, 0, hM.hX, hM.hN, -1, !1) : 22 === id ? this.aG3(2, player, player) : 59 === id && aFi(0, L(297), id, 0, hM.aG5, hM.hN, 0, !1)
	}, this.aG6 = function(eo) {
		aFi(200, L(298, [eo]), 94, 0, hM.hX, hM.aG7, -1, !1)
	}, this.aG8 = function(aG9) {
		if (hF.co === aG9 && !hF.kg && !hF.ke)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aFi(0, "Your Win Count is now " + __fx.wins.count, 3, aG9, hM.hX, hM.hN, -1, !0);
		eF.fQ[aG9] && (hF.cW(aG9, 2), o.cF < 100 ? aFi(0, L(292, [eF.nF[aG9]]), 3, aG9, hM.hX, hM.hN, -1, !0) : aFi(0, L(299, [eF.nF[aG9]]), 3, aG9, hM.hX, hM.hN, -1, !0))
	}, this.aGA = function(hd) {
		var e0, aGB, hl = "(" + eN.eX(hd >> 2) + ", " + eN.eZ(hd >> 2) + ")",
			aFm = !1,
			player = 0;
		ee.lV(hd) ? ee.lb(hd) ? hl = L(300, [hl]) : (player = ee.la(hd), o.ke && !1 === __fx.hoveringTooltip.active && (o.co = player), e0 = L(301, [w.hZ.ha(eF.uN[player], w.bc.hG(0, 10), 150)]) + "   ", e0 = (e0 += L(302, [w.bL.gQ(eF.fa[
				player])]) + "   ") + L(303, [w.bL.gQ(eF.fQ[player])]) + "   ", o.fT && (aGB = bN.bO[bN.rA[bN.iZ[player]]], e0 += L(304) + ": " + aGB + "   "), w.cO.cm(player) && (e0 += L(10) + ": " + ar.at[ar.cD[player]] + "   "), hl = e0 =
			(e0 += L(305, [player]) + "   ") + L(306, [hl]), aFm = !0) : hl = ee.a83(hd) ? L(307, [hl]) + "   #" + ee.a2m(hd) : L(308, [hl]), aG0(55, 0), aFi(220, hl, 55, player, hM.hX, hM.hN, -1, aFm, void 0, void 0, !0)
	}, this.aGC = function(aGD) {
		var cX = e3.aw,
			player = cX.sN[aGD] >> 3,
			e0 = (dY.dk = !0, aG0(55, 0), L(309, [eF.nF[player]]) + "   ");
		aFi(220, e0 += L(302, [w.bL.gQ(cX.sO[aGD])]), 55, player, hM.hX, hM.hN, -1, !0)
	}, this.pM = function(pL, aDA, nw) {
		pL === o.co ? aFi(175, " " + L(310, [eF.nF[aDA]]) + ": ", 1001, aDA, aFj(200, 255, 210), hM.hN, -1, !0, nw) : this.aGE(pL, nw)
	}, this.aGE = function(pL, nw) {
		aG0(1e3, 0), aFi(175, eF.nF[pL] + ": ", 1e3, pL, hM.hX, "rgba(5,60,25,0.9)", -1, !0, nw)
	}, this.aGG = function() {
		var eo;
		o.aGH ? (eo = L(311), hF.aGI(L(312), 2, 1, 12), aFi(0, eo, 40, 0, "rgb(10,220,10)", hM.hN, -1, !1)) : (eo = L(313), hF.aGI(L(314), 2, 0, 16), aFi(0, eo, 41, 0, hM.hX, hM.hN, -1, !1))
	}, this.v4 = function() {
		var v = eF.nF,
			h1 = o.data;
		aFi(300, v[0] + " [" + o.aGJ.vB(h1.elo[0]) + "] vs " + v[1] + " [" + o.aGJ.vB(h1.elo[1]) + "]", 65, 0, hM.r1, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aGK = function(eo) {
		aFi(350, eo, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aGL = function(aGM) {
		aFi(0, L(aGM ? 315 : 316), 247, 0, hM.a5h, hM.hN, -1, !1)
	}, this.vD = function(vA, vC, aGN) {
		var h1 = o.data,
			v = eF.nF;
		aFi(0, v[0] + ": " + o.aGJ.vB(h1.elo[0]) + " -> " + vA, 66, 0, hM.hX, aGN[0], -1, !1), aFi(0, v[1] + ": " + o.aGJ.vB(h1.elo[1]) + " -> " + vC, 66, 1, hM.hX, aGN[1], -1, !1)
	}, this.pO = function(player, id) {
		0 === id ? aG1(50, player) ? (aFi(128, L(317, [eF.nF[player]]), 52, player, aFj(180, 255, 180), hM.hN, -1, !0), cr.nJ(player, 2, 255)) : aFi(384, L(318, [eF.nF[player]]), 51, player, aFj(210, 210, 255), hM.hN, -1, !0) : aG1(51, player) ?
			(aFi(128, L(319, [eF.nF[player]]), 52, player, hM.hX, "rgba(60,120,10,0.9)", -1, !0), cr.nJ(player, 2, 255)) : (aFi(384, L(320, [eF.nF[player]]), 50, player, hM.hX, "rgba(90,90,90,0.9)", -1, !0), cr.nJ(player, 2, 96))
	}, this.aCN = function(jy, target) {
		var color = aFj(210, 255, 210);
		1 < jy.length ? aFi(230, L(321, [jy.length, eF.nF[target]]), 66, target, color, hM.hN, -1, !0) : aFi(230, L(322, [eF.nF[jy[0]], eF.nF[target]]), 66, jy[0], color, hM.hN, target, !0)
	}, this.pP = function(player, target) {
		aFi(230, L(323, [eF.nF[player], eF.nF[target]]), 66, player, hM.hX, "rgba(75,65,5,0.9)", target, !0)
	}, this.sI = function(id, v) {
		aG0(id, v)
	}, this.oE = function(id, player) {
		aG1(id, void 0 === player ? o.bI : player)
	}, this.aGO = function(id) {
		for (var al = aFX.length - 1; 0 <= al; al--)
			if (aFX[al].id === id) return aFX[al];
		return null
	}, this.aGP = function(n9, aGQ, player) {
		2 !== eF.iW[o.co] && aFi(200, 1 === n9 ? L(324, [eF.nF[player]]) : L(325, [w.bL.gQ(n9), eF.nF[player]]), 30, player, "rgb(190,255,190)", hM.hN, -1, !0)
	}, this.aGR = function(n9, player) {
		2 !== eF.iW[o.co] && (aG0(31, 0), n9 = " (" + w.bL.gQ(n9) + ") 💸", aFi(150, n9 = w.cO.cm(player) ? L(326) + n9 : L(327, [eF.nF[player]]) + n9, 31, player, hM.r1, "rgba(205,205,205,0.9)", -1, !0))
	}, this.aGT = function(m3) {
		for (var b3 = dY.hw(), al = 2; 0 <= al; al--) 0 < aFb.xX[al] && (m3 || aFb.b3[al] < b3 - 220) && this.aGU(al)
	}, this.aGU = function(id) {
		var e0, bw = aFb.xX[id],
			player = aFb.jy[id];
		aFb.xX[id] = 0, 1 === bw ? (0 === id ? e0 = L(335, [eF.nF[player], eF.nF[aFb.aFf[0]]]) : 1 === id ? e0 = L(336, [eF.nF[player]]) : 2 === id ? e0 = L(337, [eF.nF[player]]) : 3 === id && (e0 = L(338, [eF.nF[player]])), aG0(7, 0), aFi(aFb
			.aBp[id], e0, 7, aFb.aFf[id], hM.hX, hM.hN, -1, !0)) : (e0 = L(0 === id ? 339 : 1 === id ? 340 : 341, [bw]), aG0(7, 0), aFi(aFb.aBp[id], e0, 7, player, hM.hX, hM.hN, -1, !1))
	}, this.aG3 = function(id, rF, rG) {
		var b3 = dY.hw(),
			bw = aFb.xX[id] + 1;
		aFb.xX[id]++, aFb.jy[id] = rF, aFb.aFf[id] = rG, 1 === bw && (aFb.b3[id] = b3), (1 === bw && (o.qg < 32 || 2 === o.de) || 1 < bw && (aFb.b3[id] < b3 - 140 || 2 === o.de)) && this.aGU(id)
	}, this.da = function() {
		aGV.da();
		for (var v7 = (v7 = aFX.length - aFc) <= 1 ? 1 : v7 * v7, al = aFX.length - 1; 0 <= al; al--) 0 < aFX[al].dX && (aFX[al].dX -= v7, aFX[al].dX <= 0) && (dY.dk = !0, aFX.splice(al, 1));
		! function() {
			var v, al;
			if (128 !== aFd && !(++aFd < 128))
				for (v = 5, al = cw.cx - 1; 0 <= al; al--) 1 === eF.iW[cw.cy[al]] && 0 < v-- && aFi(240, L(338, [eF.nF[cw.cy[al]]]), 1, cw.cy[al], hM.r1, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.aGT(!1)
	}, this.hJ = function() {
		for (var h8, bj = we(), al = aFX.length - 1; 0 <= al; al--) h8 = bj - (al + 1) * bb, 50 === aFX[al].id ? (hL.drawImage(aFX[al].canvas, c2.ba - aFX[al].ba - aFa - aFY, h8), hL.drawImage(aFe, c2.ba - aFa - aFY, h8)) : hL.drawImage(aFX[al]
			.canvas, c2.ba - aFX[al].ba - aFY, h8)
	}, this.aAk = function(id, cD) {
		var hl, aGX = hM.aGY;
		0 === id ? hl = L(342) : 1 === id ? (hl = L(343), aGX = hM.aGZ) : 2 === id ? hl = L(344) : 3 === id ? hl = L(345) : (hl = w.bL.gQ(cD), aGX = 5 === id ? hM.aGZ : hM.hN), aG0(74, 0), aFi(0, hl, 74, 0, hM.hX, aGX, -1, !1, void 0, void 0, !0)
	}
}

function q0() {
	var b, c, b7;

	function g() {
		bA(), 3 !== o.data.botDifficultyType || w.x.f9(o.data.botDifficultyData) || (o.data.botDifficultyType = 0), 3 !== o.data.botDifficultyType && (o.data.botDifficultyData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		3 === o.data.botDifficultyType && w.x.bD(b7.bE(), o.data.botDifficultyData, ar.at.length - 1)
	}

	function aGa(aG, ab) {
		var aT = new aU,
			value = (aT.aV(ab < 0 ? L(10) : L(304) + " " + bN.bO[ab % 9]), 0 <= ab && (aT.aq(L(5) + ": " + o.data.teamPlayerCount[ab]).style.marginBottom = "1em"), ab < 0 ? o.data.botDifficultyValue : o.data.botDifficultyTeam[ab]);
		aT.ah(new ai({
			aj: ar.at,
			value: value
		}, function(bP) {
			ab < 0 ? o.data.botDifficultyValue = bP : o.data.botDifficultyTeam[ab] = bP
		})), aG.push(aT)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(10), [new f("⬅️ " + L(1), g)]), c = new j(b.k, function() {
		var aG = [];
		if (function(aG) {
				var aT = new aU,
					aj = (aT.aV(L(28)), [L(11), L(12), L(13), L(9)]),
					value = o.data.botDifficultyType;
				0 === o.data.gameMode && (value = Math.min(value, 2), aj.splice(2, 1));
				aT.ah(new ai({
					aj: aj,
					value: value
				}, function(ab) {
					bA(), o.data.botDifficultyType = ab, 0 === o.data.gameMode && 2 === ab && (o.data.botDifficultyType = 3), 3 !== o.data.botDifficultyType || o.data.botDifficultyData || (o.data.botDifficultyData =
						new Uint8Array(o.bI)), 2 !== o.data.botDifficultyType || o.data.botDifficultyTeam || (o.data.botDifficultyTeam = new Uint8Array(9)), a0.a1(25)
				})), aG.push(aT)
			}(aG), 0 === o.data.botDifficultyType) aGa(aG, -1);
		else if (2 === o.data.botDifficultyType)
			for (var al = 0; al < o.data.teamPlayerCount.length; al++) o.data.teamPlayerCount[al] && aGa(aG, al);
		else 3 === o.data.botDifficultyType && ! function(aG) {
			var aT = new aU;
			aT.aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.botDifficultyData, 8)), aT.aX(b7), aG.push(aT)
		}(aG);
		return aG
	}())
}

function zo() {
	var aGb = [],
		aGc = [],
		aGd = 0;

	function aGe(ak, a6B, aFM, aGg) {
		var bw = ak.length;
		if (0 === bw) return "";
		var e0 = "@" + ak[0];
		if (1 === bw) return e0 + a6B + aGg;
		for (var al = 1; al < bw - 1; al++) e0 += ", @" + ak[al];
		return e0 + " and @" + ak[bw - 1] + aFM + aGg
	}
	this.a4 = function() {
		var e0 = aGe(aGc, " is", " are", " in the lobby.");
		e0.length && f5.message.f6({
			id: 7,
			eo: e0
		}), aGb = [], aGc = [], aGd = 0
	}, this.gG = function(aGf) {
		return f5.gD !== aGf && (aGf = gP.fF.gQ(aGf, 5), !!a5.a5n.gH(aGf)) && (aGc.push(aGf), !0)
	}, this.join = function(player) {
		f5.gD !== player.dw && (player = gP.fF.gQ(player.dw, 5), a5.a5n.gH(player)) && aGb.push(player)
	}, this.vh = function() {
		var a6B, aFM;
		++aGd < 3 || (aGd = 0, a6B = aGe(aGc, "", "", " entered the lobby!"), (a6B = (aFM = aGe(aGb, "", "", " joined a game!")).length ? a6B.length ? a6B + " " + aFM : aFM : a6B).length && f5.message.f6({
			id: 7,
			eo: a6B
		}), aGb = [], aGc = [])
	}
}

function aGh(aGi, a0A) {
	var aGp, self, aGj = document.createElement("div"),
		aGk = document.createElement("div"),
		aGl = document.createElement("div"),
		aGm = null,
		aGq = (this.rx = new aa({
			value: "",
			ab: -1
		}, 0, aGn, function(aY) {
			aY.target.value = w.bL.aGx(aY.target.value), aGm.tT.textContent = 127 - aY.target.value.length
		}), 0),
		aGr = 1,
		aGs = 0,
		aGt = 1048575;

	function aGn() {
		aGi(), aGm.tT.textContent = 127
	}

	function aGz(a0E, ga) {
		ga && (ga.tK = 1, a0E.appendChild(f5.gS.transform(ga)))
	}

	function aH0(m3) {
		aGr ? aGj.scrollTop = aGj.scrollHeight : m3 && (aGj.scrollTop = aGs)
	}
	this.reset = function(aGy) {
			aGt = 1048575, aGk.textContent = "", aGy || this.hI()
		}, this.hI = function() {
			var gZ = f5.aw.gJ[0],
				gZ = f5.aw.lf[gZ],
				vi = gZ.vi,
				bw = vi.length,
				eA = 1048575 === aGt ? 0 : bw - (gZ.vj - aGt + 1048575) % 1048575;
			if (aGt = gZ.vj, !(bw <= (eA = Math.max(eA, 0)))) {
				for (var a0E = document.createDocumentFragment(), al = eA; al < bw; al++) aGz(a0E, f5.fi.tn(vi[al], f5.fi.tp(vi[al])));
				aGk.appendChild(a0E), aH0()
			}
		}, this.aH1 = function(eo) {
			var a0E = document.createDocumentFragment();
			aGz(a0E, eo), aGk.appendChild(a0E), aH0()
		}, this.show = function(ze) {
			ze.appendChild(aGj), ze.appendChild(aGl), this.resize(ze)
		}, this.b1 = function(ze) {
			a0.removeChild(ze, aGj), a0.removeChild(ze, aGl)
		}, this.resize = function(ze) {
			aGq = ze ? ze.offsetHeight : aGq;
			var ze = w.bc.jc(.04, .75),
				xb = Math.max(ze, aGq - ze),
				aH3 = c2.ba / c2.je,
				aH4 = .7 * aH3,
				aH5 = w.bc.jW(aGq - ze - xb),
				xb = (aGl.style.height = w.bc.jW(ze), aGj.style.height = w.bc.jW(xb), c2.bb > c2.ba || c3.h2.h3() ? (aGl.style.top = aH5, aGj.style.top = w.bc.jW(aGq - xb), w.bc.jV(aGj, 8)) : (aGj.style.top = aH5, aGl.style.top = w.bc.jW(aGq - ze), w
					.bc.jV(aGj, 2)), this.rx.aY.style.width = w.bc.jW(aH4), this.rx.aY.style.fontSize = aGp.button.style.fontSize = w.bc.jW(.5 * ze), w.bc.jV(this.rx.aY, 6), aGp.button.style.left = w.bc.jW(aH4), aGp.button.style.width = w.bc.jW(
					aH3 - aH4), .385 * ze);
			c3.h2.h3() && (xb *= .8 - .12 * (c2.ba > c2.bb)), aGk.style.marginLeft = aGk.style.marginRight = w.bc.jW(.5 * xb), aGk.style.fontSize = w.bc.jW(xb), aH0(1)
		}, (self = this).rx.aY.aGu = 127, aGj.style.position = "absolute", aGj.style.left = "0", aGj.style.width = "100%", aGj.style.overflowX = "hidden", aGj.style.overflowY = "auto", aGj.style.font = "inherit", aGj.style.backgroundColor = hM.a25,
		aGj.addEventListener("scroll", function() {
			aGs = aGj.scrollTop, aGr = aGs < aGj.scrollHeight - aGj.clientHeight - 2 ? 0 : 1
		}), aGk.style.font = "inherit", aGl.style.position = "absolute", aGl.style.left = "0", aGl.style.width = "100%", self.rx.aY.setAttribute("placeholder", L(346)), self.rx.aY.style.position = "absolute", self.rx.aY.style.top = "0", self.rx.aY
		.style.left = "0", self.rx.aY.style.height = "100%", self.rx.aY.style.backgroundColor = hM.r4, self.rx.aY.style.textAlign = "center", (aGp = new f(L(97), aGn)).button.top = "0", aGp.button.style.position = "absolute", aGp.button.style
		.height = "100%", aGp.bQ(hM.aGv), aGm = new aGw("127", aGp.button, 1, 1), aGj.appendChild(aGk), aGl.appendChild(self.rx.aY), aGl.appendChild(aGp.button)
}

function aH7() {
	this.da = function() {
		var aHE;
		2 === o.aH8 ? (cp.cq(0, 59), ut.aBy(2700)) : o.fW < 7 ? (aHE = bN.rA[o.aAY], aHE = bN.bO[aHE], hF.aGI(L(347, [aHE]), 2, 1, 12), cp.qE(0, L(348, [aHE]), 40, 0, hM.hX, hM.hN, -1, !1), ut.aBy(2700)) : 8 === o.fW ? (o.aGH ? cp.cq(o.aHD, 2) :
			cp.cq(1 - o.co, 3), o.aGJ.v5(o.aHD), ut.uu(o.aHD, 2700, !1, 0)) : 9 === o.fW ? (cp.aGG(), ut.aBy(2700)) : (cp.aG8(o.aHD), ut.uu(o.aHD, 2700, !1, 0))
	}, this.aHG = function() {
		var e0;
		o.ke || o.kg || (e0 = f2.aw.sp(), o.fW < 7 ? e0 += "/log/team" : 8 === o.fW ? e0 += "/log/1v1" : 9 === o.fW ? e0 += "/log/zombies" : e0 += "/log/br", cp.qE(720, e0, 736, 0, hM.hX, hM.aHH, -1, !1))
	}
}

function aHI() {
	this.a4 = function() {
		if (0 === o.data.sResourcesType) {
			for (var aHM = o.cF, fa = eF.fa, al = 0; al < aHM; al++) fa[al] = 512;
			var aHN = o.aHO,
				aHP = ar.aHP,
				cD = ar.cD;
			for (al = aHM; al < aHN; al++) fa[al] = aHP[cD[al]]
		} else(1 === o.data.sResourcesType ? function() {
			for (var bw = o.aHO, fa = eF.fa, sResourcesValue = o.data.sResourcesValue, al = 0; al < bw; al++) fa[al] = sResourcesValue
		} : function() {
			for (var bw = o.aHO, fa = eF.fa, sResourcesData = o.data.sResourcesData, al = 0; al < bw; al++) fa[al] = sResourcesData[al]
		})();
		cQ.cl[8] = eF.fa[o.co]
	}
}

function aHQ() {
	var aHR;
	this.a0q = null, this.aHS = 0, this.a4 = function() {
		aHR = [], 9 === o.fW && this.aHT()
	}, this.aHT = function() {
		this.a0q = [0, 0, 0, 0, 0, 0];
		for (var aHU = [256, 227, 166, 148, 100, this.aHS = 0, 0, 0], aHV = [0, 8, 24, 30, 46, 70, 256, 333], aHW = [0, 0, 3, 9, 17, 25, 256, 179], bb = o.cF, al = 1; al < aHU.length; al++)
			if (bb <= aHV[al]) {
				this.aHS = aHU[al - 1] - ac.eB((bb - aHV[al - 1]) * (aHU[al - 1] - aHU[al]), aHV[al] - aHV[al - 1]), this.a0q[5] = aHW[al - 1] - ac.eB((bb - aHV[al - 1]) * (aHW[al - 1] - aHW[al]), aHV[al] - aHV[al - 1]), this.a0q[0] = o.bI - bb -
					this.aHS - this.a0q[5];
				break
			} o.aHX = o.bI - o.cF, o.data.numberTeams = (0 < o.cF) + (0 < o.aHX), o.data.playerCount = o.aHO = o.cF + o.aHX, o.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, o.cF + this.aHS, o.aHX - this.aHS]), o.t.u()
	}, this.aHY = function(player) {
		aHR.push({
			player: player,
			v: 14 + eC.qY(20)
		})
	}, this.da = function() {
		if (9 === o.fW)
			for (var al = aHR.length - 1; 0 <= al; al--) --aHR[al].v <= 0 && (cr.nJ(aHR[al].player, 0, nM.gS.a29 + nM.gS.aER), aHR.splice(al))
	}
}

function aAp(m3) {
	pC && !m3 || (a44(), ac = new a8B, yr = new aHm, w = new aHn, hM = new aHo, o = new aHp, fI = new aHq, gP = new aHr, fE = new uw, ar = new aHs, lR = new aHt, qI = new aHu, ut = new aBZ, aHa = new aHv, aHb = new aHI, aHc = new k4, o4 = new aHw,
		df = new kS, cp = new aFW, pV = new aHx, a3U = new a75, hF = new aHy, kX = new aCR, vQ = new wT, p1 = new aHz, a3T = new aI0, kk = new ts, hx = new aI1, qO = new aI2, qp = new a8n, pW = new aI3, aB = new qo, kc = new a0r, ee = new a90,
		qj = new aI4, cw = new a6z, a3P = new aI5, aHf = new aI6, lF = new c9, fY = new aI7, aHd = new fO, cr = new mW, eF = new aI8, aHe = new aFI, a0p = new aHQ, nM = new aI9, iB = new a45, a4G = new aIA, aAK = new aIB, f2 = new aF2, eC =
		new qT, ch = new aIC, aHg = new aEh, aA9 = new vH, a3Y = new kN, c2 = new aID, a19 = new aIE, lm = new a1d, a3O = new aIF, aGV = new aIG, qn = new qH, iv = new aIH, pN = new jt, d4 = new cz, a3Z = new ly, a3V = new aAc, pH = new aII, a2 =
		new aIJ, h9 = new a3f, pF = new a2b, zU = new aIK, oV = new aIL, a59 = new aIM, dE = new a9m, eN = new aCg, e3 = new a1A, ix = new aIN, a3S = new aIO, aHh = new qb, qQ = new aIP, p = new aIQ, aAD = new aIR, a0 = new pc, pY = new rd, c3 =
		new aIS, pC = new aIT, lv = new y2, a5 = new a6w, bN = new aIU, fd = new aIV, wq = new aIW, dj = new aIX, a3R = new yQ, aHi = new aIY, cQ = new aIZ, kp = new gh, dY = new aIa, a3o = new aDC, h4 = new aIb, a2U = new aIc, aHj = new aId,
		ay = new a4i, f5 = new zh, zp = new aIe, aFx = new aIf, aHk = new aIg, jG = new aIh, pC.a4(), c3.a4(), c2.gz(), a5.a4(), fI.a4(), fI.aIj(), (yX = new aIk).a4(), w.a4(), a3R.a4(), f2.a4(), gP.a4(), fE.a4(), p.a4(), a0.a4(), qv = new aIl,
		c2.a4(), dY.a4(), h4.a4(), aHi.a4(), qu = new aIm, eC.a4(), fY.aIn(), pY.a4(), iB.a4(), aB.a4(), p1.a4(), aHe.a4(), dE.a4(), kc.a4(), dY.dk = !0, setTimeout(function() {
			p.lu(2, 14071)
		}, 0), a0.a1(5, 5), a59.ld() || c3.h2.yq(), c2.aEK(), pC.a2S = 1)
}

function pr() {
	var x8, a58, aG, aIo = -1;
	this.show = function() {
		x8.show(), this.resize(), aIo = a5.c0.data[125].value
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a58.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(L(349), [new f("⬅️ " + L(1), function() {
		aIo !== a5.c0.data[125].value ? a0.aw.aD7() : a0.q7(13)
	})]), a58 = new j(x8.k, ((aG = []).push(function() {
		var aT = new aU,
			ry = (aT.aV(L(350)), aT.a5j(L(351)), new f(L(352), function() {
				a5.a6.a7(130, 0), a0.aw.aD7()
			}, 0, 0, 1)),
			rx = new aa(a5.c0.data[126], 0, function() {
				ry.button.click()
			});
		return aT.aX(rx), rx.aY.placeholder = "a,b,c", rx.aY.style.marginTop = "0.5em", aT.aX(new aZ([ry.button])), aT
	}()), aG.push(function() {
		var aT = new aU,
			ry = new f(L(352), function() {
				a5.a6.a7(130, 1), a0.aw.aD7()
			}, 0, 0, 1),
			aIt = new aa(a5.c0.data[129], 1, function() {
				aIt.aY.focus()
			}),
			aIu = new aa(a5.c0.data[128], 1, function() {
				ry.button.click()
			});
		return aT.aV(L(353)), aT.aX(aIu), aIu.aY.style.marginBottom = "0.5em", aT.aV(L(354)), aT.aX(aIt), aT.aX(new aZ([ry.button])), aT
	}()), aG.push(function() {
		var aT = new aU;
		return aT.aV(L(355)), a5.c0.data[125].aj = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aT.ah(new ai(a5.c0.data[125])), aT
	}()), aG.push(function() {
		var aT = new aU;
		return aT.aV(L(356)), aT.aX(new rr(a5.c0.data[127], L(357))), aT
	}()), aG))
}

function pv() {
	var x8, a58, aG;
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a58.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(L(358), [new f("⬅️ " + L(1), function() {
		a0.bC()
	})]), a58 = new j(x8.k, ((aG = []).push(function() {
		function a5f() {
			aIz.button.textContent = L(98), aIx.aY.readOnly = !1, aIy.aY.readOnly = !1, a5d.bQ(1), a5d.button.style.color = hM.hX
		}
		var aT = new aU,
			aIw = (aT.aq(f2.aw.a5W("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aT.aV(L(359)), new aa({
				value: a5.c0.data[105].value,
				ab: -1
			})),
			aIx = (aIw.aY.readOnly = !0, aT.aX(aIw), aT.aV(L(360), "0.8em"), new aa(a5.c0.data[148], 0, void 0, function(aY) {
				a5c(a5.c0.data[149].value, aY.target.value)
			})),
			aIy = (aT.aX(aIx), aT.aV(L(361), "0.8em"), new aa(a5.c0.data[149], 1, void 0, function(aY) {
				a5c(aY.target.value, a5.c0.data[148].value)
			})),
			aIz = (aT.aX(aIy), new f(L(98), function(aY) {
				return aY.textContent === L(98) ? (aY.textContent = L(99), aIx.aY.readOnly = !0, aIy.aY.readOnly = !0, a5d.bQ(0), a5d.button.style.color = hM.a5h, a5.a6.a7(149, aIy.aY.value), a5c(a5.c0.data[149].value, a5.c0
					.data[148].value)) : a5f(), !0
			})),
			a5d = (aT.aX(new aZ([aIz.button])), new f(L(97), function(aY) {
				return aIx.aY.readOnly && f2.aw.a5e(0) && (w.bc.jp(aY), a5f(), f2.a5g.zX({
					action: 0,
					dw: a5.c0.data[148].value,
					value: parseInt(a5.c0.data[149].value, 10)
				})), !0
			}, 1)),
			a5i = aT.a5j(),
			a5c = (aT.a5j(L(362)).style.fontWeight = "bold", function(bV, e0) {
				a5i.innerHTML = a0.aw.a5k(bV, a5.c0.data[105].value, e0)
			});
		return aT.aX(new aZ([a5d.button])), a5c(a5.c0.data[149].value, a5.c0.data[148].value), aT
	}()), aG))
}

function aJ0() {
	this.a26 = function(aJ1, ab, aDe) {
		var nx = aJ1.height,
			aW = w.bc.bd(nx, nx),
			be = w.bc.getContext(aW);
		return function(ba, be, aDe) {
			be.fillStyle = aDe, be.beginPath(), be.arc(ba / 2, ba / 2, .47 * ba, 0, 2 * Math.PI), be.fill()
		}(nx, be, aDe), be.drawImage(aJ1, -ab * nx, 0), aW
	}, this.aJ3 = function(aJ4) {
		var be, bf, nx = aJ4.height;
		return aJ4.width === nx && (bf = (be = w.bc.getContext(aJ4, !0)).getImageData(0, 0, nx, nx), w.a14.bq(bf.data, nx, nx, .9), be.putImageData(bf, 0, 0)), aJ4
	}
}

function aJ5() {
	var aJ6 = new Uint8Array(64);
	this.a4 = function() {
		var al;
		for (aJ6[0] = 45, aJ6[37] = 95, al = 0; al < 10; al++) aJ6[al + 1] = 48 + al;
		for (al = 0; al < 26; al++) aJ6[al + 11] = 65 + al, aJ6[al + 38] = 97 + al
	}, this.aB8 = function(aJ7) {
		for (var vs = oV, kK = new Uint8Array(aJ7), al = 0; al < aJ7; al++) kK[al] = vs.oX(6);
		return kK
	}, this.aB7 = function(kK) {
		for (var bw = kK.length, aJ8 = aJ6, ak = [], al = 0; al < bw; al++) ak.push(String.fromCharCode(aJ8[kK[al]]));
		return ak.join("")
	}, this.gQ = function(value, aJ9) {
		for (var aJ8 = aJ6, ak = [], al = 0; al < aJ9; al++) ak.push(String.fromCharCode(aJ8[value >> 6 * (aJ9 - 1 - al) & 63]));
		return ak.join("")
	}
}

function aZ(aJA) {
	var ao = document.createElement("div");
	this.aY = ao, this.aJB = aJA, this.resize = function() {
		for (var bw = aJA.length, al = 1; al < bw; al++) w.bc.jV(aJA[al], 4)
	};
	var al, bw = aJA.length;
	for (ao.style.width = "100%", ao.style.height = "2.7em", ao.style.marginTop = "0.6em", ao.style.border = "inherit", al = 0; al < bw; al++) aJA[al].style.verticalAlign = "top", aJA[al].style.width = (100 / bw).toFixed(2) + "%", aJA[al].style
		.height = "100%", aJA[al].style.fontSize = "0.75em", ao.appendChild(aJA[al])
}

function aIL() {
	this.size = 0, this.ab = 0, this.oU = null, this.a4 = function(oU) {
		this.ab = 0, this.oU = oU, this.size = oU.length
	}, this.d1 = function() {
		this.oU = null
	}, this.oX = function(size) {
		for (var bV = 0, oU = this.oU, oO = this.ab + size - 1, al = this.ab; al <= oO; al++) bV |= (oU[al >> 3] >> 7 - (7 & al) & 1) << oO - al;
		return this.ab += size, this.ab > 8 * this.size && console.error("Unwrapper Overflow"), bV
	}, this.aCu = function(size) {
		var j9 = size >> 1;
		return (1 << j9) * this.oX(size - j9) + this.oX(j9)
	}, this.aJC = function(aEx) {
		return this.size === pF.aCt(aEx)
	}, this.sx = function(aJD, aJE, aJF) {
		var v = this.oX(aJD);
		if (!v) return null;
		for (var aJD = Math.max(v, aJF), ak = new(aJE <= 8 ? Uint8Array : aJE <= 16 ? Uint16Array : Uint32Array)(aJD), al = 0; al < v; al++) ak[al] = this.oX(aJE);
		aJF = ak[v - 1];
		return aJF && ak.fill(aJF, v), ak
	}, this.sy = function(aJD, aJG, aJF) {
		var v = this.oX(aJD);
		if (!v) return null;
		for (var aJD = Math.max(v, aJF), ak = new Array(aJD), al = 0; al < v; al++) ak[al] = this.sv(aJG);
		return ak.fill(ak[v - 1], v), ak
	}, this.sv = function(aJD) {
		return fE.uy.a6v(this.oX(aJD))
	}, this.sw = function() {
		var e0 = gP.fF.aB7(gP.fF.aB8(this.oX(30))),
			e0 = w.bL.aJH(e0, "_", "/");
		e0 = w.bL.aJH(e0, "-", "+");
		for (var aJI = "";
			(e0.length + aJI.length) % 4;) aJI += "=";
		e0 = "data:image/png;base64," + e0 + aJI;
		var dB = new Image;
		dB.onload = function() {
			a2.a0S.sl(dB), dB.onload = null, dB = null
		}, dB.src = e0
	}
}

function aJJ() {
	this.da = function() {
		if (dY.hw() % 51 == 45)
			for (var bw = e3.aw.s7, s4 = e3.aw.s4, a35 = e3.aw.a35, yx = e3.aw.yx, sN = e3.aw.sN, aJK = ar.aJK, cD = ar.cD, al = 0; al < bw; al++) {
				var a34, player, aDH, a1G = s4[al];
				a1G % 64 == 6 || (a34 = a35[al], (player = e3.fi.a2s(a34[a34.length - 1])) < 0) || !w.cO.iY(player, sN[al] >> 3) || eC.qY(1e3) >= aJK[cD[player]] || ! function(fh, a34) {
					for (var bw = a34.length - 1, aJN = e3.aw.sM[fh], eM = 0, al = aJN + 1; al < bw; al++) eM += eN.aCk(a34[al], a34[al + 1]);
					return (eM += eN.aCk(eN.s9(e3.aw.s5[fh]), a34[aJN + 1])) <= 60
				}(al, a34) || (aDH = yx[al], 64 <= a1G && e3.fk.a04(player, aDH)) || function(player, a34, aDH, fh, a1G) {
					e3.zr.zs(player) && w.cO.iq(player, ar.zv[ar.cD[player]], 32, 0) && (e3.aw.s4[fh] = 64 + a1G % 64, e3.fk.cW(aDH, e3.aw.aJO), ix.ak[0] = e3.a1Q.aDO(a34), ix.a08[1] = 6, w.cO.jD(player), e3.aw.z7(player))
				}(player, a34, aDH, al, a1G)
			}
	}
}

function aHz() {
	var ak, aBW, aJP, aJQ, gap, aJR, aJS, aJT, aJU, aJV, kT, zi, m5, ho, a7R, aBB, aJW;

	function aJZ() {
		aJQ = Math.floor(.2 * (c3.h2.h3() ? .07 : .035) * c2.jd), aJQ = aFs(c3.h2.h3() ? 3 : 1, aJQ);
		var aJb = c2.ba / (ak.length + gap);
		aJQ = aJQ < aJb ? aJb : aJQ, a7R = Math.floor((1 - gap) * aJQ), aBW = 0, aJc()
	}

	function aJc() {
		aBW = (aBW = aBW < -20 ? -20 : aBW) > (ak.length - 15) * aJQ ? (ak.length - 15) * aJQ : aBW, aJS = Math.floor(aBW / aJQ), aJT = (aJT = aJS + Math.floor(c2.ba / aJQ)) > ak.length - 1 ? ak.length - 1 : aJT, aJS = (aJS = aJT < aJS ? aJT : aJS) <
			0 ? 0 : aJS;
		var cX = aJT;
		aJR = aJP / ak[cX];
		for (var al = aJT - 1; aJS <= al; al--) ak[al] > ak[cX] && (cX = al, aJR = aJP / Math.pow(ak[al], ho))
	}

	function aJe(bi) {
		bi = Math.floor((aBW + c2.ba - bi - gap * aJQ) / aJQ);
		return (bi = bi < -1 ? -1 : -1 === bi ? 0 : bi > ak.length - 1 ? -1 : bi) !== aJU && (aJU = bi, -1 === aBB && 0 === aJU && p1.aJX && (aBB = setInterval(aJf, 100)), 1)
	}

	function aJg(al) {
		var aJj = Math.floor(aJR * Math.pow(ak[al], ho));
		hL.fillRect(aBW + c2.ba - (al + 1) * aJQ, c2.bb - aJj, a7R, aJj)
	}

	function aJf() {
		var i5;
		0 !== (aJU = 8 === aB.ox() ? -1 : aJU) ? (aJW = (new Date).getTime(), clearInterval(aBB), aBB = -1) : (i5 = ak[1] / 864e3, -1 !== aJW && (i5 += ((new Date).getTime() - aJW) * ak[1] / 864e5, aJW = -1), 0 < i5 && (ak[0] += Math.floor(i5), dY
			.dk = !0))
	}
	this.aJX = !1, this.a4 = function() {
		aJW = aBB = -1, aJU = -(ho = 1), this.qw = !1, m5 = 0, zi = new Date, aBW = 0, gap = .3, ak = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aJP = Math.floor(.15 * c2.bb), aJV = (aJV = Math.floor((c3.h2.h3() ? .018 : .0137) * c2.jd)) < 2 ? 2 : aJV, kT = w.bc.hG(1, aJV), aJZ()
	}, this.p2 = function(aJa) {
		var al;
		for (this.aJX = !0, al = 0; al < aJa.length; al++) ak.unshift(aJa[al]);
		aJZ(), dY.dk = !0
	}, this.qy = function() {
		aJc()
	}, this.hA = function(bi, bj) {
		bj > c2.bb - .6 * aJP ? this.qw ? bi !== m5 && (aBW += bi - m5, m5 = bi, aJc(), aJe(bi), this.qw = -1 !== aJU, dY.dk = !0) : aJe(bi) && (dY.dk = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aJU && (this.qw = !1, aJU = -1, dY.dk = !0)
	}, this.q9 = function(bi, deltaY) {
		-1 !== aJU && (aBW += Math.floor(deltaY), aJc(), aJe(bi), dY.dk = !0)
	}, this.h6 = function(bi, bj) {
		this.hA(bi, bj), -1 !== aJU && (m5 = bi, this.qw = !0)
	}, this.hC = function() {
		-1 !== aJU && (this.qw = !1)
	}, this.hJ = function() {
		hL.fillStyle = hM.hr;
		for (var aJk, month, hB, gj, aJn, aJo, i0, aJp, aJq, al = aJT; aJS <= al; al--) aJg(al);
		this.aJX && 0 === aJS && (hL.fillStyle = hM.aJh, aJg(0)), -1 !== aJU && (hL.fillStyle = hM.a7Q, aJg(aJU)), -1 !== aJU && (hL.font = kT, w.bc.textBaseline(hL, 2), (hB = new Date).setTime(zi.getTime() - 1e3 * aJU * 60 * 60 * 24), month =
			"month", aJk = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(hB), aJk = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(hB)), aJk = aJk + ", " + hB.getUTCDate() + " " + month + " " + hB.getFullYear(), month = 1 === ak[aJU] ? L(363) : L(364), month = w.bL.gQ(ak[aJU]) + " " + month, hB = Math.floor(hL.measureText(aJk).width), gj = Math
			.floor(hL.measureText(month).width), aJn = Math.floor(.5 * (hB + aJV)), aJo = (aJo = aBW + c2.ba - (aJU + 1) * aJQ) < aJn ? aJn : aJo > c2.ba - aJn ? c2.ba - aJn : aJo, i0 = c2.bb - Math.floor(aJR * Math.pow(ak[aJU], ho)), aJp =
			Math.floor(1.1 * aJV), aJq = i0 > c2.bb - aJp ? c2.bb - aJp : i0, hL.fillStyle = hM.hN, hL.fillRect(c2.ba - gj - aJV, aJq - aJp, gj + aJV, aJp), hL.fillRect(aJo - aJn, c2.bb - aJp, hB + aJV, aJp), hL.fillStyle = hM.hX, w.bc
			.textAlign(hL, 2), hL.fillText(month, Math.floor(c2.ba - .5 * aJV), aJq), w.bc.textAlign(hL, 1), hL.fillText(aJk, aJo, c2.bb), hL.strokeStyle = hM.aJr, hL.lineWidth = 1, hL.beginPath(), hL.moveTo(0, i0), hL.lineTo(c2.ba, i0), hL
			.closePath(), hL.stroke())
	}
}

function aIg() {
	function aJy(bi, bw, bj, qh, aJP, a84) {
		if (!(bj < 1 || aJP < bj))
			for (var al = 0; al <= bw; al++) {
				var hd = eN.aCl(bi, bj);
				if (qh(hd)) return hd >> 2;
				bi += a84
			}
		return -1
	}

	function aK2(bj, bw, bi, qh, aJw, a84) {
		if (!(bi < 1 || aJw < bi)) {
			bw = Math.max(bw, 0);
			for (var al = 0; al <= bw; al++) {
				var hd = eN.aCl(bi, bj);
				if (qh(hd)) return hd >> 2;
				bj += a84
			}
		}
		return -1
	}

	function aK6(a2n, a2g, aJt) {
		return -1 !== a2g && (-1 === a2n || eN.rY(a2g, aJt) < eN.rY(a2n, aJt)) ? a2g : a2n
	}
	this.aJs = function(aJt) {
		return this.en(aJt, function(hd) {
			return ee.lV(hd)
		})
	}, this.aJu = function(aJt) {
		return this.en(aJt, function(hd) {
			return ee.a9S(hd, o.co)
		})
	}, this.en = function(aJt, qh) {
		return function(aJt, a3F, qh) {
			for (var eW = eN.eX(aJt), eY = eN.eZ(aJt), aJw = p.eP - 2, aJP = p.eQ - 2, aJx = -1, h1 = 0; h1 < a3F; h1++) {
				var aBW = Math.max(eW - h1, 1),
					aBX = Math.max(eY - h1, 1),
					aBY = Math.min(eW + h1, aJw),
					aBP = Math.min(eY + h1, aJP),
					a2n = aJy(eW, aBY - eW, eY - h1, qh, aJP, 1),
					a2g = aJy(eW - 1, eW - aBW - 1, eY - h1, qh, aJP, -1),
					aBY = aJy(eW, aBY - eW, eY + h1, qh, aJP, 1),
					aBW = aJy(eW - 1, eW - aBW - 1, eY + h1, qh, aJP, -1),
					aK1 = aK2(eY, aBP - eY - 1, eW - h1, qh, aJw, 1),
					aK3 = aK2(eY - 1, eY - aBX - 2, eW - h1, qh, aJw, -1),
					aBP = aK2(eY, aBP - eY - 1, eW + h1, qh, aJw, 1),
					aBX = aK2(eY - 1, eY - aBX - 2, eW + h1, qh, aJw, -1);
				if (aJx = aK6(aJx, a2n, aJt), aJx = aK6(aJx, a2g, aJt), aJx = aK6(aJx, aBY, aJt), aJx = aK6(aJx, aBW, aJt), aJx = aK6(aJx, aK1, aJt), aJx = aK6(aJx, aK3, aJt), aJx = aK6(aJx, aBP, aJt), 0 <= (aJx = aK6(aJx, aBX, aJt)) && h1 *
					h1 >= eN.rY(aJx, aJt)) return aJx
			}
			return -1
		}(aJt, eN.aCi(), qh)
	}
}

function rf() {
	var aCE = 12e3;
	this.show = function(aK7) {
		return !aK7 && !pY.ri() && (0 === c3.id ? pY.pZ.show() : !(dY.dX < aCE) && (aK7 = 1 === c3.id ? 72e4 : 108e4, aCE = dY.dX + aK7, 2 === pC.aK8) && c3.h2.yp(Math.floor(aK7)))
	}
}

function aIl() {
	var gap, gu, bi = [0, 0, 0, 0, 0],
		bj = [0, 0, 0, 0, 0],
		dG = [1, 1, 1, 1, 1],
		bV = [!0, !0, !0, !1, !1],
		b3 = (this.jA = [!0, !0, !0, !1, !1], null);
	this.a0b = function(aW, aK9) {
		b3 = aW, bV = aK9, gu = [yr.aKA, yr.ys, yr.aKB, yr.aKB, yr.aKC], this.a4()
	}, this.a4 = function() {
		if (kc.a0v()) {
			var al, gi = Math.floor((c3.h2.h3() ? .261 : .195) * c2.jd),
				gj = Math.floor(.9 * gi),
				gm = Math.floor(.17 * gj);
			if (gap = c3.h2.h3() ? 2 * h4.gap : h4.gap, dG[0] = gi / b3[0].width, dG[1] = gj / b3[1].width, dG[2] = gm / b3[2].height, dG[3] = gm / b3[3].height, dG[4] = gm / b3[4].height, dG[2] *= 1.7, dG[3] *= 1.07, bi[0] = gap, bi[1] = gap,
				bi[2] = gap, bi[3] = gap, bi[4] = Math.floor(2 * gap + dG[3] * b3[3].width), bj[0] = gap, bj[1] = bj[0] + gap + dG[0] * b3[0].height, bj[2] = bj[1] + gap + dG[1] * b3[1].height, bj[3] = bj[2] + gap + dG[2] * b3[2].height, bj[4] =
				bj[3], !bV[0])
				for (al = 0; al < 5; al++) bj[al] -= dG[0] * b3[0].height + gap;
			if (!bV[1])
				for (al = 2; al < 5; al++) bj[al] -= dG[1] * b3[1].height + gap
		}
	}, this.gv = function() {
		return !(7 === aB.ox() && c3.h2.h3())
	}, this.h6 = function(vO, vP) {
		if (b3 && this.gv())
			for (var al = bV.length - 1; 0 <= al; al--)
				if (bV[al] && this.jA[al] && bi[al] < vO && bj[al] < vP && vO < bi[al] + dG[al] * b3[al].width && vP < bj[al] + dG[al] * b3[al].height) return a0.a1(9, a0.dU, new aKD(L(365), w.bc.jm(gu[al]))), !0;
		return !1
	}, this.hJ = function() {
		if (b3 && this.gv()) {
			var al;
			for (hL.imageSmoothingEnabled = !0, al = 0; al < 5; al++) bV[al] && this.jA[al] && (hL.setTransform(dG[al], 0, 0, dG[al], bi[al], bj[al]), hL.drawImage(b3[al], 0, 0));
			hL.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a1K() {
	function aKJ(eW, nT, nV) {
		for (var eA = Math.min(nT, nV), oO = Math.max(nT, nV), bj = eA + 1; bj < oO; bj++)
			if (!ee.ef(eN.aCl(eW, bj))) return;
		return 1
	}

	function aKK(eY, nS, nU) {
		for (var eA = Math.min(nS, nU), oO = Math.max(nS, nU), bi = eA + 1; bi < oO; bi++)
			if (!ee.ef(eN.aCl(bi, eY))) return;
		return 1
	}

	function aKL(nS, nT, nU, nV, aKF, aKG) {
		for (var bw = Math.min(Math.abs(nU - nS), Math.abs(nV - nT)), ea = Math.sign(nU - nS), eb = Math.sign(nV - nT), al = 0; al < bw; al++)
			if (!ee.ef(eN.aCl(nS += ea, nT += eb))) return null;
		return nS === nU ? aKJ(nS, nT, nV) ? new Uint32Array([aKF, eN.ed(nS, nT), aKG]) : null : aKK(nT, nS, nU) ? new Uint32Array([aKF, eN.ed(nS, nT), aKG]) : null
	}
	this.aKE = function(aKF, aKG) {
		aKF = function(aKF, aKG) {
			var nS = eN.eX(aKF),
				nT = eN.eZ(aKF),
				nU = eN.eX(aKG),
				nV = eN.eZ(aKG);
			if (nS === nU) {
				if (aKJ(nS, nT, nV)) return new Uint32Array([aKF, aKG])
			} else {
				if (nT !== nV) return aKL(nS, nT, nU, nV, aKF, aKG) || aKL(nU, nV, nS, nT, aKF, aKG);
				if (aKK(nT, nS, nU)) return new Uint32Array([aKF, aKG])
			}
			return null
		}(aKF, aKG);
		return null === aKF ? -1 : e3.a1Q.aKI(aKF)
	}
}

function aKM() {
	this.da = function(oU) {
		var id, hp, oO;
		for (oV.a4(oU), oV.ab += 2, oO = 8 * oV.size; oV.ab + 8 <= oO;) id = oV.oX(4), hp = oV.oX(9), 0 === id ? this.aKN(id, hp, oV.oX(22)) : 1 === id ? this.aKN(id, hp, oV.oX(10), oV.oX(10)) : 2 === id ? this.aKN(id, hp, oV.oX(10), oV.oX(9)) :
			3 === id ? this.aKN(id, hp, oV.oX(10), oV.oX(27)) : 4 === id ? this.aKN(id, hp, oV.oX(10), oV.oX(16)) : 5 === id || 6 === id ? this.aKN(id, hp, oV.oX(10)) : 7 === id ? this.aKN(id, hp, oV.oX(1)) : 10 === id ? this.aKN(id, hp, oV.oX(
				20), oV.oX(22)) : this.aKN(id, hp)
	}, this.pJ = [], this.aKO = function() {
		for (var aKQ = 0, aKR = 0, aKS = 0, aKT = 0, aKU = 0, aKV = 0, al = 0; al < 512; al++) aKQ += eF.hu[al], aKR += eF.fQ[al], aKS += eF.fa[al], aKT += e3.aw.zt[al];
		aKU += e3.aw.s7, aKV += cw.cx, this.pJ.push(aKS % 1073741824 * 4 + (aKQ + aKR + aKT + aKU + aKV) % 4)
	}, this.aKN = function(id, hp, hq, jA) {
		0 === id ? pH.aKW.aKX(hp, hq) : 1 === id ? pH.aKW.a7g(hp, hq, jA) : 2 === id ? pH.aKW.j0(hp, hq, jA) : 3 === id ? pH.aKW.qD(hp, hq, jA) : 4 === id ? pH.aKW.qG(hp, hq, jA) : 5 === id ? pH.aKW.a7e(hp, hq) : 6 === id ? pH.aKW.aKY(hp, hq) :
			7 === id ? pH.aKW.aKZ(hp, hq) : 8 === id ? pH.aKW.qc(hp) : 9 === id ? pH.aKW.qf(hp) : 10 === id && pH.aKW.aKa(hp, hq >> 10, jA, hq % 1024)
	}
}

function aIG() {
	var aKb = 0,
		aKc = !0;

	function aKf(id) {
		id = [L(366), L(367), L(368), L(369)][id];
		cp.aGK(id)
	}
	this.da = function() {
		var hB, aKd;
		dY.dX < aKb || (aKb = dY.dX + 3e3, o.ke) || o.kg || w.cO.iV(o.co) || (hB = new Date, aKd = hB.getUTCSeconds(), aKc ? aKd < 43 && (aKc = !1) : aKd < 43 || (aKb += 52e3, aKc = !0, (aKd = (hB.getUTCMinutes() + 2) % 60) % 10 == 0 ? o.fW <
			7 && aKf(0) : aKd % 10 == 5 ? 7 !== o.fW && 10 !== o.fW || aKf(1) : aKd % 10 == 7 ? 8 === o.fW && aKf(2) : aKd % 10 == 2 && 9 === o.fW && aKf(3)))
	}
}

function q6() {
	var x8, a58, aG;
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a58.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e("🔒 " + L(370), [new f("⬅️ " + L(1), function() {
		a0.bC()
	})]), a58 = new j(x8.k, ((aG = []).push(function() {
		var aT = new aU,
			rx = (aT.aq(f2.aw.a5W("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", aT.aV(L(100)), new aa({
				value: "",
				ab: -1
			})),
			a6L = (aT.aX(rx), aT.aV(L(169), "0.8em"), new aa({
				value: "",
				ab: -1
			}, 0, 0)),
			a5d = (a6L.aY.type = "email", a6L.aY.autocomplete = "email", a6L.aY.name = "email", a6L.aY.inputMode = "email", a6L.aY.spellcheck = !1, aT.aX(a6L), new f(L(371), function(aY) {
				return w.bc.jp(aY), f2.a5g.zP({
					action: 4,
					e0: rx.aY.value.trim() + a6L.aY.value.trim().substring(0, 63)
				}), !0
			}));
		return aT.aX(new aZ([a5d.button])), aT
	}()), aG))
}

function e(title, aD1, aKh) {
	var aKi = document.createElement("div"),
		aKj = document.createElement("div"),
		aAu = document.createElement("div"),
		aKk = document.createElement("div"),
		aKl = document.createElement("div");
	this.k = aAu, this.b4 = aD1, this.show = function() {
			!1 !== aKh ? document.body.appendChild(aKi) : (document.body.appendChild(aKj), document.body.appendChild(aKk))
		}, this.b1 = function() {
			!1 !== aKh ? a0.removeChild(document.body, aKi) : (a0.removeChild(document.body, aKj), a0.removeChild(document.body, aKk))
		}, this.xY = function() {
			var xb = w.bc.jc(.1),
				aH2 = w.bc.jc(.08 + .04 * (c2.aKp < 1), .3);
			return {
				xb: xb,
				aH2: aH2,
				xa: c2.bb / c2.je - xb - aH2
			}
		}, this.resize = function(zf) {
			var bw = aD1.length,
				xX = this.xY(),
				xb = xX.xb,
				aH2 = xX.aH2;
			for (aKj.style.height = w.bc.jW(xb), w.bc.jV(aKj, 2), aKk.style.top = w.bc.jW(c2.bb / c2.je - aH2), aKk.style.height = w.bc.jW(aH2), w.bc.jV(aKk, 8), aAu.style.top = w.bc.jW(xb), aAu.style.height = aAu.style.maxHeight = w.bc.jW(xX.xa),
				aKj.style.font = w.bc.hG(0, w.bc.jc(.02, .15)), aKk.style.font = w.bc.hG(0, w.bc.jc(.02, .7)), aAu.style.font = w.bc.hG(0, w.bc.jc(.02, .35)), al = 1; al < bw; al++) w.bc.jV(aD1[al].button, 4);
			for (var zg = 0, al = 0; al < bw; al++) zg += aD1[al].button.offsetWidth;
			if (zf && zg < aKk.offsetWidth)
				for (al = 0; al < bw; al++) aD1[al].button.style.width = (100 * aD1[al].button.offsetWidth / zg).toFixed(2) + "%";
			else
				for (al = 0; al < bw; al++) aD1[al].button.style.width = "auto";
			aKk.js && (aKk.scrollLeft = aKk.js), zf || this.resize(!0)
		}, this.hJ = function() {
			var xX = this.xY(),
				b3 = c2.je;
			hL.fillStyle = hM.ka, hL.fillRect(0, b3 * xX.xb, c2.ba, b3 * xX.xa)
		}, aKi.style.position = "absolute", aKi.style.top = "0", aKi.style.left = "0", aKi.style.width = "100%", aKi.style.height = "100%", aKj.style.position = "absolute", aKj.style.top = "0", aKj.style.left = "0", aKj.style.width = "100%", aKj
		.style.display = "flex", aKj.style.backgroundColor = hM.ka, aKk.style.position = "absolute", aKk.style.left = "0", aKk.style.width = "100%", w.bc.jq(aKk), aKl.style.height = aKl.style.maxHeight = "100%", aAu.style.position = "absolute", aAu
		.style.width = "100%", aAu.style.backgroundColor = hM.ka,
		function() {
			for (var al = 0; al < aD1.length; al++) aD1[al].button.style.height = "100%", aD1[al].button.style.padding = "0.0em 0.9em"
		}();
	for (var al = 0; al < aD1.length; al++) aKl.appendChild(aD1[al].button);
	aKj.appendChild(function() {
		var aKo = document.createElement("h1");
		return aKo.textContent = title, aKo.style.margin = "auto", aKo.style.fontSize = 18 <= title.length && c2.bb > c2.ba ? "1.8em" : "2.3em", aKo.style.fontFamily = "Arial Black, system-ui", aKo
	}()), aKk.appendChild(aKl), !1 !== aKh && (aKi.appendChild(aAu), aKi.appendChild(aKj), aKi.appendChild(aKk))
}

function aKq() {
	var tF, aKt, aKi = document.createElement("div"),
		aKr = document.createElement("div"),
		aKs = document.createElement("div"),
		aAu = document.createElement("div"),
		b8 = [],
		a4X = [L(372), L(373), L(374), L(375), L(376), L(377), L(378), L(379)],
		aKu = [1, 2, 3, 0, 9, 10, 11, 13];

	function aKv(al) {
		a0.a1(8, 0, new a5B(21, {
			aD2: aKu[al],
			gd: 0,
			ge: 10
		}))
	}
	this.show = function() {
			this.a7(a0.aw.aD3), document.body.appendChild(aKi)
		}, this.b1 = function() {
			a0.removeChild(document.body, aKi)
		}, this.a7 = function(aD3) {
			for (var aL1 = [3, 0, 1, 2, 4, 5, 6, 7], al = 0; al < b8.length; al++) {
				var ba = aD3[al];
				tF[aL1[al]][1].tT.textContent = ba || ""
			}
		}, this.resize = function() {
			var al, mL = h4.gap,
				bb = w.bc.jf(.085),
				ba = Math.min(4 * bb, c2.ba - 2 * mL),
				bw = b8.length;
			for (w.bc.jY(aKi, mL, c2.bb - mL - bb, ba, bb), w.bc.jV(aKi), w.bc.jV(aKr, 6), al = 0; al < bw - 1; al++) w.bc.jV(b8[al].button, 6);
			for (al = 0; al < bw; al++) tF[al][0].resize(), tF[al][1].resize();
			for (b8[0].bi = 0, b8[0].button.style.left = w.bc.jW(b8[0].bi), b8[0].button.style.width = w.bc.ja(1.7 * bb), al = 1; al < bw; al++) b8[al].bi = b8[al - 1].bi + b8[al - 1].button.offsetWidth, b8[al].button.style.left = w.bc.jW(b8[al].bi);
			if (!aKt) {
				if (!kc.a0v()) return;
				(aKt = kc.get(14)).style.width = "24%", aKt.style.position = "absolute", aKr.appendChild(aKt)
			}
			aKt.style.left = w.bc.jW(0), aKt.style.top = "7%", aKs.js && (aKs.scrollLeft = aKs.js)
		}, aKi.style.position = "absolute", aKr.style.width = "25%", aKr.style.height = "100%", aKr.style.backgroundColor = hM.ka, aKs.style.position = "absolute", aKs.style.width = "75%", aKs.style.height = "100%", aKs.style.backgroundColor = hM.ka,
		aKs.style.top = aKs.style.right = w.bc.jW(0), w.bc.jq(aKs), aAu.style.height = aAu.style.maxHeight = "100%", b8.push(new f("", function() {
			aKv(0)
		}, hM.aKw)), b8.push(new f("", function() {
			aKv(1)
		}, hM.aKx)), b8.push(new f("", function() {
			aKv(2)
		}, hM.a6E)), b8.push(new f("", function() {
			aKv(3)
		}, hM.aHH)), b8.push(new f("", function() {
			aKv(4)
		}, hM.aKy)), b8.push(new f("", function() {
			aKv(5)
		}, hM.aKz)), b8.push(new f("", function() {
			aKv(6)
		}, hM.aKy)), b8.push(new f("", function() {
			aKv(7)
		}, hM.r1)), tF = new Array(b8.length);
	for (var al = 0; al < b8.length; al++) b8[al].button.style.position = "absolute", tF[al] = [new aL0(a4X[al], b8[al].button, .25, .45), new aL0("", b8[al].button, .53, .84, 1)], b8[al].button.style.height = b8[al].button.style.maxHeight = "100%",
		b8[al].button.top = w.bc.jW(0), aAu.appendChild(b8[al].button);
	aKs.appendChild(aAu), aKi.appendChild(aKr), aKi.appendChild(aKs)
}

function aIc() {
	function aL3(aY) {
		aLB(aY), a0.a1(4, 5, new st("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new f("⬅️ " + L(1), function() {
				a0.bC()
			}), new f("🔄 Reload", function() {
				c3.h2.yn()
			}, hM.a5t)]))
	}

	function aL9(aY) {
		aLB(aY), a0.a1(4, 5, new st(L(380), aL7(aY), !0))
	}

	function aL7(aY) {
		var e0 = " [" + aY + "]";
		return 3249 === aY || 1006 === aY ? "No Internet / No Server Response / Server Restart" + e0 : 4527 === aY ? "Player already in lobby" + e0 : 4577 === aY ? "Your IP is banned." + e0 : 4530 === aY ? "Lobby Timeout" + e0 : 4528 === aY ?
			"Lobby Kick: Another login detected." + e0 : 4540 === aY ? "You have been kicked." + e0 : 4495 === aY ? "Account doesn't exist." : 4229 === aY ? "Bad Internet / Unresponsive Client" + e0 : 4555 === aY ? "This Account is blocked." + e0 :
			4580 === aY ? "More Gold needed" + e0 : 4557 <= aY && aY <= 4560 || 4589 == aY ? "Please try again later!" + e0 : "Unknown error" + e0
	}

	function aLB(aY) {
		aL4(aY), a0.aw.a2Y()
	}

	function aL4(aY) {
		4540 === aY && f2.aw.aLC(aY);
		var iU = aB.ox();
		6 === iU ? f2.aw.aLC(aY) : f5.vc ? (a0.au(), f5.d1(), f2.aw.close(f2.aw.vV, 3256)) : 8 === iU && o.ks(!0)
	}
	this.a2V = [], this.aL2 = function(lx, aY) {
		if (this.a2V.push(aY), 8 === a0.dU && 0 === lx)
			if (4211 === aY) aL3(aY);
			else {
				if (f5.vc && (4495 === aY || 4480 === aY) && f2.aw.vV !== lx) return void a0.bC();
				if (8 !== aB.ox() && aL4(), 4480 === aY) return a5.a6.aEL(), void a0.a1(4, 0, new st(L(382), L(383), !0));
				var aL6 = 0;
				a0.dV() && 10 === a0.dV().ph && (aL6 = a0.dV().ph), a0.a1(4, aL6, new st(L(380), aL7(aY), !0))
			}
		else {
			aL6 = aB.ox();
			if (6 === aL6) {
				if (4211 === aY) return void aL3(aY);
				if (4215 !== aY && 4516 !== aY && 4527 !== aY && 4533 !== aY && 4528 !== aY && !(4557 <= aY && aY <= 4560) && 4577 !== aY && 4576 !== aY) return void pW.aL8(lx)
			} else if (f5.vc) {
				if (lx !== f2.aw.vV) return
			} else {
				if (8 === aL6) return void(lx !== f2.aw.p4 || o.kg || 1 !== o.de || o.ke || cp.aG6(L(381, [aY])));
				if (!(4579 <= aY && aY <= 4589)) return
			}
			aL9(aY)
		}
	}, this.aLA = function(aY) {
		this.a2V.push(aY), 8 === aB.ox() ? o.kg || 1 !== o.de || cp.aG6(L(381, [aY])) : aL9(aY)
	}, this.a2X = function() {
		this.a2V.push(3268), aLB(3268)
	}
}

function a1T() {
	function aLG(player, a33) {
		a33 = eN.s9(e3.aw.s5[a33]), a33 = ee.a2m(eN.eg(a33));
		return !!e3.fi.a2c(player, a33)
	}

	function aLE(player) {
		return e3.zr.zs(player) && !e3.a1Q.aLR()
	}
	this.aLD = function(player, eV) {
		return !!aLE(player) && -1 !== (eV = function(player, eV) {
			for (var bw = e3.aw.s7, s5 = e3.aw.s5, sN = e3.aw.sN, a2y = eN.aCi(), xr = -1, al = 0; al < bw; al++) {
				var eM = eN.aCk(eV, eN.s9(s5[al]));
				eM < a2y && w.cO.iY(player, sN[al] >> 3) && (a2y = eM, xr = al)
			}
			return xr
		}(player, eV)) && !!aLG(player, eV) && (ix.a08[3] = e3.aw.yx[eV], !0)
	}, this.aLH = function(player, fg) {
		return !!aLE(player) && !!e3.fi.a31(fg) && !!aLG(player, ix.a08[2])
	}, this.a07 = function(player, fg, aLI) {
		return !! function(player, fg, aLI) {
			if (aLE(player) && e3.fi.a31(fg)) {
				fg = ix.a08[2];
				if (w.cO.iY(player, e3.aw.sN[fg] >> 3)) {
					if (function(player, a33) {
							return e3.fi.a32(player, a33) && (ix.ak[0] = e3.a1Q.aDO(e3.aw.a35[a33]), ix.a08[1] = 6, !0)
						}(player, fg)) return 1;
					var sK = eN.s9(e3.aw.s5[fg]),
						aLM = e3.fi.a2f(player, sK);
					if (-1 !== aLM) {
						aLM = eN.aCk(aLM, sK);
						if (!(aLI && 120 < aLM)) {
							aLI = function(a33, aLN, sK) {
								var a34 = e3.aw.a35[a33],
									a33 = e3.aw.sM[a33],
									aLP = eN.aCk(sK, a34[a33 + 1]);
								if (aLN <= aLP) return e3.fi.a36(sK, a34[a33 + 1], aLP, aLN);
								for (var eM = aLN - aLP, bw = a34.length - 1, al = a33 + 1; al < bw; al++) {
									var aLQ = eN.aCk(a34[al], a34[al + 1]);
									if (eM <= aLQ) return e3.fi.a36(a34[al], a34[al + 1], aLQ, eM);
									eM -= aLQ
								}
								return a34[bw]
							}(fg, aLM, sK);
							if (e3.e4.aKE(player, aLI, 1)) return ix.a08[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, fg, aLI) && (player = ix.a08[2], e3.aw.s4[player] = 64 + e3.aw.s4[player] % 64, e3.fk.cW(fg, e3.aw.aJO), !0)
	}
}

function aLS() {
	this.a4 = function() {
		this.aLT = 0, this.aAW = [], this.aLU = 0, this.aLV = 0
	}, this.en = function() {
		var zd;
		o.kg || (zd = this, 2 === o.aH8 ? zd.aAW = qQ.aLX.aAV() : o.fT ? zd.aAW = qQ.aLX.aAX() : zd.aAW = qQ.aLX.aAZ(), zd.aLT = lv.qM.aLY(), zd.aLU = Math.max(1, qQ.aLX.aAb(zd.aAW)), pH.cO.aCP(), 8 === o.fW ? qQ.result.aLV = 0 : zd.aLV = 100 *
			qQ.result.aLT * (1 + o.vG))
	}
}

function aI9() {
	this.gS = new aEQ, this.bh = new a18
}

function aI1() {
	var canvas, hZ, bi, bj, aJj, aLa, gap, aLb, fontSize, aLc, gu, aLd, aLe, aLf, aLg, aLh, aLi, aLj;

	function aLo() {
		hZ.clearRect(0, 0, hx.ba, hx.bb), hZ.fillStyle = hM.hN, hZ.fillRect(0, 0, hx.ba, hx.bb), hZ.fillStyle = hM.aLp, hd = 0 < aLh ? aLh : aLe[4] / 1e4, hZ.fillRect(0, hx.bb - aJj - 1, Math.floor(hd * hx.ba), aJj), hZ.fillStyle = hM.hX, hZ
			.fillRect(0, 0, hx.ba, 1), hZ.fillRect(0, 0, 1, hx.bb), hZ.fillRect(hx.ba - 1, 0, 1, hx.bb), hZ.fillRect(0, hx.bb - 1, hx.ba, 1), hZ.fillRect(0, hx.bb - aJj - 1, hx.ba, 1);
		for (var hd, aLq, hB = 0, al = 0; al < aLd.length; al++) aLf[al] ? (w.bc.textAlign(hZ, 0), aLq = Math.floor((aLa - aJj + 2 * aLb) * (al - hB + 1) / (aLd.length + 1) - .7 * aLb), hZ.fillText(aLd[al], gap, aLq), w.bc.textAlign(hZ, 2), 5 ===
			al && 0 !== eF.hu[o.co] && eF.fa[o.co] >= fY.aLr(o.co) ? (hZ.fillStyle = hM.aLs, hZ.fillText(aLl(al), hx.ba - gap, aLq), hZ.fillStyle = hM.hX) : hZ.fillText(aLl(al), hx.ba - gap, aLq)) : hB++
	}

	function aLl(al) {
		return al < 3 ? aLe[al].toString() : 3 === al || 4 === al || 5 === al ? w.bL.hH(aLe[al] / 100, 2) : al < 7 ? w.bL.gQ(aLe[al]) : al === 7 ? hx.hy(aLe[7]) : al === 8 ? __fx.utils.getMaxTroops(eF.fQ, o.co) : __fx.utils.getDensity(o.co)
	}

	function aLk() {
		eF.fQ[o.co] !== aLe[6] && (aLe[6] = eF.fQ[o.co], aLc++)
	}
	this.a4 = function() {
		aLh = aLi = 0, (gu = new Array(8))[0] = L(384), gu[1] = o.kg ? L(385) : L(386), gu[2] = L(387), gu[3] = L(388), gu[4] = L(389), gu[5] = L(32, 0, "Interest"), gu[6] = L(31), gu[7] = L(390),
			gu.push("Max Troops", "Density"), // add gu
			(aLd = new Array(gu.length)).fill(""), (aLe = new Array(gu.length))[0] = o.kg ? 0 : o.cF, aLe[1] = o.kg ? cw.cx : o.aHX, aLe[2] = o.qK, aLe[3] = 0, aLe[4] = ac.eB(1e4 * eF.fQ[0], Math.max(o.fS, 1)), aLe[5] = 0 === o.data.iIncomeType ?
			700 : 1 === o.data.iIncomeType ? ac.eB(700 * o.data.iIncomeValue, 64) : ac.eB(700 * o.data.iIncomeData[o.co], 64), aLe[6] = 0, aLk(), aLe[7] = 0, aLg = aLl(6), (aLf = new Array(gu.length)).fill(!0), aLj = 0, aLj = o.kg ? (aLf[0] = !1,
				aLf[2] = !1, aLf[3] = !1, 3) : (aLf[3] = !1, 1), aLc = 0, this.resize()
	}, this.resize = function() {
		this.ba = Math.floor((c3.h2.h3() ? .1646 : .126) * 1.25 * c2.jd), this.bb = Math.floor(1.18 * this.ba), aJj = Math.floor(.04 * this.ba), gap = Math.floor(.035 * this.ba), aLb = .04 * this.ba, aLa = this.bb, this.bb -= Math.floor(aLj * (
			this.bb - 2 * aJj) / gu.length), fontSize = Math.floor(.7 * (aLa - aJj) / gu.length);
		var kT = w.bc.hG(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.ba, canvas.height = this.bb,
			function(kT, ba) {
				for (var al = 0; al < aLd.length; al++) aLd[al] = w.hZ.ha(gu[al], kT, ba)
			}((hZ = canvas.getContext("2d", {
				alpha: !0
			})).font = kT, .575 * this.ba), w.bc.textBaseline(hZ, 1), hZ.lineWidth = 1, this.aLn(), this.wZ(), a3T.wZ(), aLo()
	}, this.wZ = function() {
		bi = c2.ba - this.ba - h4.gap
	}, this.qP = function() {
		bj = h4.gap
	}, this.aLn = function() {
		bj = h4.gap + (a3T.a7r() && 0 !== eF.hu[o.co] && !o.db ? a3T.bb + h4.gap : 0)
	}, this.kl = function(m3) {
		(m3 || 100 <= aLc) && (aLc = 0, aLo())
	}, this.aLt = function() {
		return aLe[7]
	}, this.hy = function(value) {
		var cX = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * cX) / 1e3);
		return value < 10 ? cX + ":0" + value : cX + ":" + value
	}, this.da = function() {
		var he, per;
		aLf[0] && o.qg - o.qK !== aLe[0] && (aLe[0] = o.qg - o.qK, aLc++), cw.cx - aLe[0] !== aLe[1] && (aLe[1] = cw.cx - aLe[0], aLc++), this.a3N(), (he = fY.aM2(o.co)) !== aLe[5] && (aLe[5] = he, aLc++), aLk(), aLe[7] += dY.dd, he = aLl(7),
			aLg !== he && (aLg = he, aLc += 100), he = o.fT ? fd.jO() : eF.fQ[fR[0]], per = ac.eB(1e4 * he, Math.max(o.fS, 1)), aLe[3] = he, aLe[4] !== per && (aLc++, aLe[4] = per), 8 === o.fW && function() {
				for (var al = 0; al < 2; al++)
					if (!w.cO.iV(al)) return qQ.qh.qi(), 1;
				return
			}() || aLe[3] < o.fS || ! function() {
				for (var al = cw.cx - 1; 0 <= al; al--)
					if (0 < eF.lT[cw.cy[al]].length) return;
				return 1
			}() || e3.fi.a03().length || o.fT && fd.jO(1) < o.fS || qQ.qh.qi()
	}, this.a3N = function() {
		aLf[2] && o.qK !== aLe[2] && (aLe[2] = o.qK, aLc += 2 === o.de ? 100 : 1)
	}, this.zw = function() {
		return aLe[3] === o.fS
	}, this.x0 = function(al) {
		var mL, aM3, hB;
		return 2 !== o.de && (al % 2 == 1 && (kk.kl(1, 1), dY.dk = !0), al === o.x1 ? (aLh = 0, aLo(), !1) : (-1 !== al || 0 !== aLi) && (aM3 = aLh, aLh = o.ke ? al / o.x1 : (hB = performance.now(), 0 <= al && (mL = hB - 392 * al, aLi = 0 ===
			al || mL < aLi ? mL : aLi), 1 < (aLh = (hB - aLi) / (392 * o.x1)) ? 1 : aLh), aLo(), aLh !== aM3))
	}, this.hJ = function() {
		hL.drawImage(canvas, bi, bj)
	}
}

function aIH() {
	this.aM4 = null, this.a4 = function() {
		10 !== o.fW ? this.aM4 = null : this.aM4 = new Uint32Array(o.bI)
	}, this.da = function() {
		10 === o.fW && this.fi()
	}, this.fi = function() {
		for (var i5, target, he, aM4 = this.aM4, jy = cw.cy, hS = eF.fa, al = cw.cx - 1; 0 <= al; al--)(i5 = jy[al]) >= o.cF || (target = Math.max(ac.eB(hS[i5], 4), 2048), he = Math.max(fY.aM2(i5), 100), aM4[i5] += ac.eB(he * target, 1e4), aM4[
			i5] > target && (aM4[i5] = target))
	}, this.iw = function(player, cD) {
		return cD > this.aM4[player] ? (cD = this.aM4[player], this.aM4[player] = 0) : this.aM4[player] -= cD, cD
	}
}

function aId() {
	this.aM5 = new qC
}

function aF8() {
	this.oh = function() {
		for (var id = oV.oX(20), colors = new Array(11), al = 0; al < 11; al++) colors[al] = new Uint8Array([oV.oX(8), oV.oX(8), oV.oX(8)]);
		var zT = fE.v0.fq(8);
		pY.pZ.cW({
			id: id,
			colors: colors,
			zT: zT
		})
	}, this.ou = function(lx) {
		var a8T = oV.oX(3),
			h1 = oV.oX(5),
			h1 = lv.y3.yI(h1, oV.oX(30), oV.oX(30), oV.oX(30)),
			a8U = lv.lw.lx === lx ? lv.lw.da() : 0;
		f2.zJ.a8R(lx, h1, a8T, a8U)
	}, this.oi = function(lx) {
		this.ou(lx), a5.a6.a7(183, gP.fF.aB7(gP.fF.aB8(15))), 0 === lx && 0 === a5.c0.data[105].value.length ? f2.zJ.a8X(0) : f2.a5g.zL(lx), 4 === f2.aw.aM6(lx).aM7() ? 6 === aB.ox() && f2.f3.a8j(lx) : 5 !== f2.aw.aM6(lx).aM7() || 8 !== aB
		.ox() && 10 !== aB.ox() || f2.pL.a1m()
	}, this.ol = function(lx) {
		var id = oV.oX(6);
		1 === id ? (a5.a6.a7(160, oV.oX(30)), f2.aw.aM8(lx), p1.aJX || f2.zJ.a8X(1), fI.aM9(), 8 === a0.dU && a0.dV().aMA()) : 21 === id ? 8 === a0.dU && a0.dV().aCw(17) : 22 === id && (a5.a6.a7(106, a5.c0.data[110].value), a5.a6.a7(110, ""),
			8 === a0.dU) && a0.dV().aCw(15)
	}, this.oq = function() {
		var bw = oV.oX(16),
			aMB = oV.oX(16);
		if (oV.aJC(55 + 10 * bw + 16 * aMB)) {
			for (var ak = [], al = 0; al < bw; al++) ak.push(fE.uy.a6v(oV.oX(10)));
			fI.aMC(ak)
		} else f2.aw.oW(0, 3270)
	}, this.ov = function(lx) {
		var h1 = oV.oX(5),
			h1 = lv.y3.yI(h1, oV.oX(30), oV.oX(30), oV.oX(30)),
			e0 = fE.v0.fq(16);
		pF.lu(83), pF.pG(1, 0), pF.pG(6, 31), pF.pG(30, h1), pF.pG(16, new Function(e0)()), pF.pG(30, lv.lw.da()), f2.aw.send(lx, pF.oU)
	}
}

function aHx() {
	var aMG, aMH, aMD = "",
		aME = 0,
		a79 = 0,
		aMF = -1,
		a4X = ["Team", "Zombie", "BR", "1v1"];

	function aMI() {
		for (var hB = new Date, aKe = hB.getUTCMinutes(), hB = hB.getUTCSeconds(), aMJ = [], aMK = 0, al = 0; al < 6; al++) aMJ.push(aMK), aMJ.push(aMK + 2), aMJ.push(aMK + 5), aMJ.push(aMK + 7), aMK += 10;
		for (var bw = aMJ.length, al = 1; al < bw && !(aKe < aMJ[al]); al++);
		al %= bw;
		hB = (aMJ[0] = 60) * (aMJ[al] - aKe) - hB;
		return hB !== aMF && (aMD = a4X[al % 4] + " " + aMH + ": " + aMM(Math.floor(hB / 60)) + ":" + aMM(hB % 60), aMF = hB, aME = hF.measureText(aMD, aMG), aME += Math.floor(.4 * a79), 1)
	}

	function aMM(aEy) {
		return aEy < 10 ? "0" + aEy : String(aEy)
	}
	this.a4 = function() {
		aMH = L(391)
	}, this.resize = function() {
		aME = Math.floor((c3.h2.h3() ? .53 : .36) * c2.jd), a79 = Math.floor(.065 * aME), aMG = w.bc.hG(1, Math.floor(.9 * a79)), aMF += 1e3, aMI()
	}, this.da = function() {
		aMI() && (dY.dk = !0)
	}, this.hJ = function(bj) {
		hL.lineWidth = 1 + Math.floor(a79 / 15), hL.translate(c2.ba - a79, bj + aME), hL.rotate(-Math.PI / 2), hL.fillStyle = hM.hX, hL.fillRect(0, 0, aME, a79), hL.strokeStyle = hM.r1, hL.strokeRect(0, 0, aME, a79 + 10), hL.fillStyle = hM.r1, hL
			.font = aMG, w.bc.textBaseline(hL, 1), w.bc.textAlign(hL, 1), hL.fillText(aMD, Math.floor(aME / 2), Math.floor(.59 * a79)), hL.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aHr() {
	this.fF = new aJ5, this.uy = new aMN, this.v0 = new aMO, this.a4 = function() {
		this.fF.a4()
	}
}

function aIB() {
	var aBB, aMQ, aMR, aMS, aMP = !1;

	function aMT() {
		aMP = !0, aBB = -1, aMQ = new Array(4);
		for (var al = 3; 0 <= al; al--) aMQ[al] = !1;
		var a8N = Math.floor(1 + .02 * c2.min);
		aMR = new Array(4), (aMS = new Array(4))[1] = aMS[3] = aMR[0] = aMR[2] = 0, aMS[0] = aMR[3] = -a8N, aMR[1] = aMS[2] = a8N
	}

	function aMU() {
		if (-1 !== aBB)
			if (0 !== o.de && ut.oO()) {
				for (var aMV = !1, al = 3; 0 <= al; al--) aMQ[al] && (aMV = !0, nY += aMR[al], na += aMS[al], cr.hA(aMR[al], aMS[al]), vQ.wj());
				aMV ? dY.dk = !0 : aAK.aBx()
			} else aAK.aBx()
	}
	this.aAL = function(ab) {
		0 !== o.de && ut.oO() && (aMP || aMT(), aMQ[ab] = !0, -1 === aBB) && (aBB = setInterval(aMU, 20), aMU())
	}, this.aAR = function(ab) {
		if (0 !== o.de && (aMP || aMT(), aMQ[ab] = !1, -1 !== aBB)) {
			for (var aMV = !1, al = 3; 0 <= al; al--) aMV = aMV || aMQ[al];
			aMV || this.aBx()
		}
	}, this.aBx = function() {
		if (aMP && -1 !== aBB) {
			for (var al = 3; 0 <= al; al--) aMQ[al] = !1;
			clearInterval(aBB), aBB = -1
		}
	}
}

function aI7() {
	var aMX;

	function aMZ(player) {
		var br, aMb;
		return w.cO.cm(player) && player < o.cF ? 0 : (br = aMX[ac.eB((o.bI - 1) * eF.fQ[player], o.fS)], dY.hw() < 1920 && (br = Math.max(ac.eB(100 * (13440 - 6 * dY.hw()), 1920), br)), aMb = fY.aLr(player), eF.fa[player] > aMb && (br -= ac.eB(2 *
			br * (eF.fa[player] - aMb), aMb)), Math.min(Math.max(br, 0), 700))
	}

	function aMm(dG) {
		for (var fQ = eF.fQ, cy = cw.cy, al = cw.cx - 1; 0 <= al; al--) {
			var i5 = cy[al];
			w.cO.cP(i5, ac.eB(dG * fQ[i5], 32))
		}
	}

	function aMj() {
		var vz = o.co;
		ix.aMq[0] = eF.fa[vz] - eF.io[vz]
	}

	function aMl(ab) {
		var vz = o.co,
			vz = eF.fa[vz] - eF.io[vz] - ix.aMq[0];
		fY.aMW += vz, cQ.cl[ab] += vz
	}
	this.aMW = 0, this.aIn = function() {
		for (var bw = o.bI, al = (aMX = new Uint16Array(bw), 0); al < bw; al++) aMX[al] = 100 + aMY(ac.eB(25600 * al, bw - 4), 9)
	}, this.a4 = function() {
		(this.aMW = 0) === o.data.iIncomeType ? this.aM2 = aMZ : 1 === o.data.iIncomeType ? this.aM2 = function(player) {
			return ac.eB(o.data.iIncomeValue * aMZ(player), 64)
		} : this.aM2 = function(player) {
			return ac.eB(o.data.iIncomeData[player] * aMZ(player), 64)
		}
	}, this.da = function() {
		if (dY.hw() % 10 == 9 && (fY.aMW = 0, function() {
				aMj();
				for (var cy = cw.cy, fa = eF.fa, al = cw.cx - 1; 0 <= al; al--) {
					var i5 = cy[al],
						aMk = ac.eB(fY.aM2(i5) * fa[i5], 1e4);
					w.cO.cP(i5, Math.max(aMk, 1))
				}
				aMl(9)
			}(), function() {
				if (0 !== o.data.aIncomeType) {
					if (aMj(), 1 === o.data.aIncomeType)
						for (var fQ = eF.fQ, cy = cw.cy, dG = o.data.aIncomeValue, al = cw.cx - 1; 0 <= al; al--) {
							var i5 = cy[al];
							w.cO.cP(i5, ac.eB(dG * fQ[i5], 128))
						} else 2 === o.data.aIncomeType && function() {
							for (var fQ = eF.fQ, cy = cw.cy, dG = o.data.aIncomeData, al = cw.cx - 1; 0 <= al; al--) {
								var i5 = cy[al];
								w.cO.cP(i5, ac.eB(dG[i5] * fQ[i5], 128))
							}
						}();
					aMl(18)
				}
			}(), dY.hw() % 100 == 99)) {
			if (aMj(), 0 === o.data.tIncomeType) aMm(32);
			else if (1 === o.data.tIncomeType) aMm(o.data.tIncomeValue);
			else
				for (var fQ = eF.fQ, cy = cw.cy, dG = o.data.tIncomeData, al = cw.cx - 1; 0 <= al; al--) {
					var i5 = cy[al];
					w.cO.cP(i5, ac.eB(dG[i5] * fQ[i5], 32))
				}
			aMl(8)
		}
	}, this.aLr = function(player) {
		return Math.min(100 * eF.fQ[player], o.aMc)
	}, this.aMd = function(player, j1) {
		aFx.aMe(player, j1, ix.iy[0], 0), w.cO.cP(j1, ix.iy[0]), cQ.aGP(player, j1), cr.n8(player, ix.iy[0] + ix.iy[1]), cr.nB(j1, ix.iy[0]), w.cO.jD(player)
	}, this.fZ = function() {
		for (var bw = cw.cx, jy = cw.cy, cX = 0, hS = eF.fa, al = 0; al < bw; al++) cX += hS[jy[al]];
		return cX
	}, this.fc = function(aMf) {
		for (var i5, bw = cw.cx, jy = cw.cy, cX = 0, hS = eF.fa, iZ = bN.iZ, al = 0; al < bw; al++) iZ[i5 = jy[al]] === aMf && (cX += hS[i5]);
		return cX
	}
}

function aI2() {
	var gv, aMr, ba, bb, gm, aMs, aMt, kO, canvas, kP, aMu;

	function we() {
		return Math.floor((c2.ba - ba) / 2) < kX.bb + 2 * h4.gap ? c2.bb - bb - 4 * h4.gap - kX.bb : c2.bb - bb - 2 * h4.gap
	}
	this.a4 = function() {
		aMu = gv = !1, gm = .61, aMs = .07, aMt = .09, kP = kO = bb = 0
	}, this.resize = function() {
		var hZ, hz, b3, aMz, aN0, kZ;
		gv && (ba = aMv(ba = c3.h2.h3() ? Math.floor(.69 * c2.jd) : Math.floor(.5 * c2.jd), aFs(c2.ba - 2 * h4.gap, 10)), ba = aMv(ba, Math.floor(3.57 * aFs(c2.bb - 2 * h4.gap, 3))), bb = Math.floor(.28 * ba), (canvas = document.createElement(
			"canvas")).width = ba, canvas.height = bb, hZ = canvas.getContext("2d", {
			alpha: !0
		}), hz = Math.floor(1 + bb / 40), hZ.clearRect(0, 0, ba, bb), hZ.fillStyle = hM.hN, hZ.fillRect(hz, hz, ba - 2 * hz, bb - 2 * hz), hZ.lineJoin = "bevel", hZ.lineWidth = 2 * hz, hZ.strokeStyle = hM.hX, hZ.strokeRect(hz, hz, ba -
			2 * hz, bb - 2 * hz), hZ.imageSmoothingEnabled = !1, b3 = kc.get(aMr), aMz = b3.width, kZ = (1 === aMr ? .85 : 21 === aMr ? .666 : .9) * gm * bb / (aN0 = b3.height), hZ.setTransform(kZ, 0, 0, kZ, Math.floor((ba - kZ * aMz) /
			2), Math.floor((bb - kZ * aN0) / 2)), hZ.drawImage(b3, 0, 0), hZ.setTransform(1, 0, 0, 1, Math.floor(ba - aMt * bb - aMs * bb - hz), Math.floor(hz + aMs * bb)), function(hZ, bw) {
			hZ.lineWidth = Math.floor(1 + bb / 80), hZ.strokeStyle = hM.hX, hZ.beginPath(), hZ.moveTo(0, 0), hZ.lineTo(bw, bw), hZ.moveTo(0, bw), hZ.lineTo(bw, 0), hZ.stroke()
		}(hZ, Math.floor(aMt * bb)), hZ.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(bV, aMx, fP, aMy) {
		gv || aMy && aMu || (aMr = fP ? 21 : bV ? 1 : 2, gv = aMu = !0, this.resize(), o4.b1(), kX.aCa(), kP = dY.dX, kO = aMx ? 1 : 0)
	}, this.da = function() {
		!gv || 1 <= kO || (kO = 1 < (kO += 5e-4 * (dY.dX - kP)) ? 1 : kO, kP = dY.dX, dY.dk = !0)
	}, this.h6 = function(bi, bj) {
		return !(!gv || kO <= 0 || (bi -= Math.floor((c2.ba - ba) / 2), bj -= we(), bi < 0) || bj < 0 || ba < bi || bb < bj || (ba - bb / 3 < bi && bj < bb / 3 && (gv = !1, dY.dk = !0), 0))
	}, this.hJ = function() {
		!gv || kO <= 0 || (hL.globalAlpha = kO, hL.drawImage(canvas, Math.floor((c2.ba - ba) / 2), we()), hL.globalAlpha = 1)
	}
}

function q3() {
	var aN2, aN3, aN6, aN9, aNA, aN4 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aN5 = new Array(4),
		aN7 = new Array(2),
		aN8 = [L(304), L(217), L(392), L(393)];

	function eq() {
		var f1;
		!f5.vc || (f1 = aN2.aNI.rx.aY.value.trim().slice(0, 127)).length < 1 || (aN2.aNI.rx.aY.value = "", f5.vn.en(f1))
	}

	function aNE(aNK) {
		f5.aw.gJ[3] = 1 - f5.aw.gJ[3], aNG(3, 1, f5.aw.gJ[3]), aNK && f2.f3.f4(4), f5.aw.gJ[3] && a5.a6.a7(158, f5.aw.gJ[0])
	}

	function aNB(ct, j9) {
		f5.aw.gJ[ct] !== j9 && (0 === ct && f5.aw.gJ[3] && aNE(0), aNG(ct, f5.aw.gJ[ct], 0), aNG(ct, j9, 1), f5.aw.gJ[ct] = j9, 0 === ct ? (f2.f3.f4(2, j9), f5.aw.gJ[2] ? (aN2.aNM.hI(), aN2.aNI.reset(1)) : aN2.aNI.reset(0), a0.dV().aNN(), a0.dV()
			.aNO()) : 2 === ct && (0 === j9 ? (f2.f3.f4(0), aN2.aNI.hI(), aN2.aNP()) : (f2.f3.f4(1), aN2.aNM.hI(), aN2.aNQ())))
	}

	function aNG(ct, j9, color) {
		aN2.aNR[ct].b8[j9].bQ(color ? hM.uU : hM.aGv)
	}

	function aNU(fo) {
		return p.rs.aDV[fo]
	}

	function aNV(lh) {
		return lh < 7 ? "   " + (lh + 2) + " Teams" : 10 === lh ? "   No Full-Sending" : ""
	}

	function aNW(va, aNf) {
		return aNf ? va <= 90 && 60 < va ? "   Contest" : "" : va <= 60 ? "   Contest" : ""
	}
	this.aNJ = function() {
		return aN2.aNI
	}, this.vn = function(dw) {
		aNB(2, 0);
		var e0 = aN2.aNI.rx.aY.value,
			dw = "@" + dw + " ";
		e0.length && !w.bL.fD(e0, " ") && (dw = " " + dw), aN2.aNI.rx.aY.value = e0 += dw, aN2.aNI.rx.aY.focus()
	}, this.aNS = function() {
		aN2.aNM.hI()
	}, this.aNN = function() {
		var aNT = f5.aw.gJ[0],
			aNT = f5.aw.lf[aNT],
			j9 = (p.lu(aNT.fo, aNT.mapSeed), aN3.b8),
			a6B = aNU(aNT.fo, aNT.mapSeed) + aNV(aNT.lh) + aNW(aNT.va),
			aNT = L(397) + "   " + aNU(aNT.vX, aNT.vY) + aNV(aNT.vZ) + aNW(aNT.va, 1);
		j9[0].button.textContent === a6B && j9[1].button.textContent === aNT || (j9[0].button.textContent = a6B, j9[1].button.textContent = aNT, aN3.resize())
	}, this.aNO = function() {
		var aNT = f5.aw.gJ[0],
			le = f5.aw.lf[aNT];
		aN2.aNX(le.vW);
		for (var bV, aKe, al = 0; al < f5.fB.fC.length; al++) aN4[0][al].tT.textContent = f5.fB.fC[al].length, aN4[1][al].tT.textContent = (bV = f5.aw.lf[al].va, aKe = void 0, ((aKe = ac.eB(bV, 60)) < 10 ? "0" : "") + aKe + ":" + ((bV %= 60) <
			10 ? "0" : "") + bV);
		var le = f5.fB.fC[aNT],
			aNZ = le.length,
			aNa = f5.fB.g2[aNT];
		aN4[2][1].tT.textContent = "" + aNZ, aN4[3][1].tT.textContent = "" + aNa;
		for (al = 0; al < 4; al++) {
			var aNb = f5.aw.lf[al];
			aN5[al] ? 0 === aNb.vW && (aN5[al].tT.textContent = p.rs.aDV[aNb.fo]) : aN5[al] = new aGw(p.rs.aDV[aNb.fo], aN9.b8[al].button, 1, 1), w.bL.startsWith(aN8[al], "🏆 ") ? aNb.lp || (aN8[al] = aN8[al].substring(3), aN9.b8[al].button
				.textContent = aN8[al], aN9.b8[al].button.appendChild(aN4[1][al].tT), aN9.b8[al].button.appendChild(aN4[0][al].tT), aN9.b8[al].button.appendChild(aN5[al].tT)) : aNb.lp && (aN8[al] = "🏆 " + aN8[al], aN9.b8[al].button
				.textContent = aN8[al], aN9.b8[al].button.appendChild(aN4[1][al].tT), aN9.b8[al].button.appendChild(aN4[0][al].tT), aN9.b8[al].button.appendChild(aN5[al].tT))
		}
		var aNc = "",
			aNd = "";
		0 === aNT && (aNc = f5.fi.aE6(le, 0, aNZ), aNd = f5.fi.aE6(le, 0, aNa)), aN6[0].tT.textContent = aNc, aN6[1].tT.textContent = aNd, aN7[1].tT.textContent = "MP: " + f5.aw.vd[0] + "   SP: " + f5.aw.vd[1] + "   Lobby: " + w.x.aNe(f5.fB.fC)
	}, this.aNg = function() {
		aN2.aNI.hI()
	}, this.show = function() {
		f5.aw.gI++, aN2.show(), this.resize(), f5.message.show()
	}, this.b1 = function() {
		aN2.b1(), f5.tX.b1(), f5.tZ.b1(), f5.message.b1()
	}, this.resize = function() {
		aN2.resize(1 - f5.aw.gJ[2]), f5.message.resize()
	}, this.b2 = function(b3) {
		2 === b3 ? f5.aw.gJ[3] ? aNE(1) : aN2.aNR[3].b8[0].b5() : b3 < 2 && aNE(1)
	}, aN9 = new zY([new f(aN8[0], function() {
		return aNB(0, 0), 2
	}), new f(aN8[1], function() {
		return aNB(0, 1), 2
	}), new f(aN8[2], function() {
		return aNB(0, 2), 2
	}), new f(aN8[3], function() {
		return aNB(0, 3), 2
	})], hM.aGv), aN3 = new zY([new f("", 0, 2), new f("", 0, 2)], hM.aNC, 1);
	var aND = new zY([new f(L(394), function() {
		return aNB(2, 0), 2
	}), new f(L(385), function() {
		return aNB(2, 1), 2
	})], hM.aGv);
	aNA = new zY([new f(L(395, 0, 0, 1), function() {
		lv.lw.lx = -1, a0.au(), f5.d1(), f2.aw.aLC(3240), a0.a1(5, 5)
	}), new f(L(396), function() {
		return aNE(1), 2
	})], hM.aGv), aN2 = new aNF(aN9, aN3, aND, aNA, eq, f5.tX.tY);
	for (var al = 0; al < 4; al++) aN4[0][al] = new aGw("0", aN9.b8[al].button), aN4[1][al] = new aGw("0", aN9.b8[al].button, 1);
	aN4[2][1] = new aGw("0", aND.b8[1].button), aN4[3][1] = new aGw("0", aNA.b8[1].button), (aN6 = [new aGw("", aND.b8[1].button, 1, 1), new aGw("", aNA.b8[1].button, 1, 1)])[0].tT.style.bottom = "0em", aN6[1].tT.style.bottom = "0em", aNG(0, f5.aw
		.gJ[0], 1), aNG(2, f5.aw.gJ[2], 1), (aN7 = [new aGw(L(5), aN2.aNH(), 1, 0), new aGw("", aN2.aNH(), 1, 1)])[0].tT.style.fontSize = "0.4em", aN7[1].tT.style.fontSize = "0.4em"
}

function pu() {
	var x8, aCy, aCz, aD1;

	function aD0(al) {
		a0.a1(8, a0.dU, new a5B(21, {
			aD2: al,
			gd: 0,
			ge: 10
		}))
	}
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), aCy.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, aCz = [new f(L(398), function() {
		aD0(5)
	}, 0, 0, 1), new f(L(399), function() {
		aD0(6)
	}, 0, 0, 1), new f(L(400), function() {
		aD0(7)
	}, 0, 0, 1), new f("Audit Log", function() {
		aD0(12)
	}, 0, 0, 1)], aD1 = [new f("⬅️ " + L(1), function() {
		a0.bC()
	})], x8 = new e(L(401), aD1), aCy = new a54(aCz, x8.k)
}

function dn() {
	aHg.qz(), hL.setTransform(nZ, 0, 0, nZ, 0, 0), hL.imageSmoothingEnabled = nZ < 3, hL.drawImage(p.q, vQ.wd(), vQ.we()), a3S.a1C.hJ(), hL.drawImage(fv, vQ.wd(), vQ.we()), aHg.hJ(), e3.hJ(), cr.hJ(), (o.kr ? (fd.hJ(), h9) : (cp.hJ(), kk.hJ(), kX
	.hJ(), h9.hJ(), a19.hJ(), hx.hJ(), vQ.hJ(), hF.hJ(), fd.hJ(), a3T.hJ(), a3U.hJ(), df.hJ(), o4.hJ(), qO.hJ(), kp.hJ(), a3Y)).hJ(), a0.hJ()
}

function aNh(hZ, ba, bb) {
	hZ.clearRect(0, 0, ba, bb), hZ.fillStyle = hM.hN, hZ.fillRect(0, 0, ba, bb)
}

function aNi(hZ, ba, bb, aNj) {
	hZ.fillStyle = hM.hX, hZ.fillRect(0, 0, ba, aNj), hZ.fillRect(0, 0, aNj, bb), hZ.fillRect(ba - aNj, 0, aNj, bb), hZ.fillRect(0, bb - aNj, ba, aNj)
}

function wu(hZ, bi, bj, nx, aNj, i5, aNk) {
	hZ.fillStyle = hM.hX;
	var i5 = Math.floor(nx * i5),
		gj = (i5 += (i5 - aNj) % 2, Math.floor((i5 - aNj) / 2)),
		nx = Math.floor((nx - i5) / 2);
	hZ.fillRect(bi + nx, bj + nx + gj, i5, aNj), aNk && hZ.fillRect(bi + nx + gj, bj + nx, aNj, i5)
}

function a3k(aNm, aNn, aNo) {
	this.bi = 0, this.bj = 0, this.ba = 0, this.bb = 0, this.resize = function() {
		this.bb = Math.min(w.bc.jb(aNo || .5) * aNm[1] * c2.jd, c2.bb - 2 * h4.gap), this.ba = Math.min(this.bb * (aNm[0] / aNm[1]), c2.ba - 2 * h4.gap), this.bb = aNm[1] * this.ba / aNm[0], this.bi = h4.gap + aNn[0] * (c2.ba - this.ba - 2 * h4
			.gap), this.bj = h4.gap + aNn[1] * (c2.bb - this.bb - 2 * h4.gap)
	}, this.aNp = function() {
		return this.bi + .5 * this.ba
	}
}

function aNq() {
	this.aKX = function(player, eV) {
		w.cO.iT(0) && w.cO.iV(player) && eN.aCm(eV) && (a2.a3.aNr(0, player, eV), o.qm.cW(player, eV))
	}, this.a7g = function(player, ir, cC) {
		w.cO.iT(1) && w.cO.iV(player) && w.cO.ij(player, cC) && w.cO.iq(player, ir, 12, 0) && w.cO.jE(player, cC) && ((cC = lF.cY(player, ix.jF[0])) || lF.cZ(player)) && (eF.aNt[player]++, a2.a3.aNr(1, player, ir, ix.jF[0]), ch.aNu.aNv(player,
			cC)) && (w.cO.jD(player), cQ.aNw(player, ir), ch.aNu.aNx(player))
	}, this.j0 = function(player, ir, j1) {
		w.cO.iT(1) && w.cO.iV(player) && o.fT && w.cO.ij(player, j1) && w.cO.jI(player, j1) && w.cO.iz(player, w.cO.j4(player, ir), j1) && a3P.cW(j1, ix.iy[0]) && (a2.a3.aNr(2, player, ir, j1), fY.aMd(player, j1))
	}, this.qD = function(player, ir, aNy) {
		ix.a08[1] = 7 & aNy;
		var eV = aNy >> 3;
		w.cO.iT(1) && w.cO.iV(player) && eN.aCm(eV) && e3.zr.zs(player) && e3.zr.aNz(eV) && w.cO.iq(player, ir, 32, 0) && e3.e4.aKE(player, eV, 1) && (cQ.aO0(player), a2.a3.aNr(3, player, ir, aNy), w.cO.jD(player), aHj.aM5.qD(player), e3.aw.z7(
			player))
	}, this.qG = function(player, ir, fg) {
		849 === ir ? this.a7f(player, fg) : w.cO.iT(1) && w.cO.iV(player) && w.cO.iq(player, ir, 32, 0) && e3.a06.a07(player, fg) && (cQ.aO0(player), a2.a3.aNr(4, player, ir, fg), w.cO.jD(player), aHj.aM5.qG(player), e3.aw.z7(player))
	}, this.a7f = function(player, fg) {
		w.cO.iT(1) && w.cO.iV(player) && e3.a1V.da(player, fg) && a2.a3.aNr(4, player, 849, fg)
	}, this.a7e = function(player, cC) {
		513 === cC ? this.aAP(player) : w.cO.iT(1) && w.cO.iV(player) && (cC = Math.min(cC, o.bI), lF.cY(player, cC)) && (a2.a3.aNr(5, player, cC), lF.cH(player, cC))
	}, this.aKY = function(player, nw) {
		(w.cO.iT(1) || w.cO.iT(2)) && w.cO.iV(player) && (nw = ac.ad(nw, 0, 1023), a2.a3.aNr(6, player, nw), cr.nJ(player, 0, nw))
	}, this.aKZ = function(player, aO1) {
		a19.aO2(player) && (a2.a3.aNr(7, player, aO1), a19.aO3(player, aO1))
	}, this.qc = function(player) {
		(w.cO.iT(0) || w.cO.iT(1)) && w.cO.iV(player) && df.kv(player) && (a2.a3.aNr(8, player), aHh.qc(player))
	}, this.qf = function(player) {
		a2.a3.aNr(9, player), aHh.qf(player)
	}, this.aAP = function(player) {
		a19.aO4(player) && (a2.a3.aNr(5, player, 513), a19.aAP(player))
	}, this.aKa = function(player, ir, eV, cC) {
		w.cO.iT(1) && w.cO.iV(player) && w.cO.ij(player, cC) && w.cO.jE(player, cC) && eN.aCm(eV) && aHf.aO5.aO6(player, eV) && (lF.cY(player, ix.jF[0]) || lF.cZ(player)) && (a2.a3.aNr(10, player, (ir << 10) + ix.jF[0], eV), cC = w.cO.jC(player,
			ir), eF.lT[player].push(ix.aO7[0]), lF.cW(player, cC, ix.jF[0]), lR.sY(player, !0), cQ.aO8(player))
	}
}

function aIK() {
	this.a4 = function() {
		this.ak = [], this.ab = 0
	}, this.zV = function() {
		return new Uint8Array(this.ak)
	}, this.pG = function(aO9, value) {
		for (var ak = this.ak, oO = this.ab + aO9 - 1, aOA = 1 + (oO >> 3); ak.length < aOA;) ak.push(0);
		for (var al = this.ab; al <= oO; al++) ak[al >> 3] |= (value >> oO - al & 1) << 7 - (7 & al);
		this.ab += aO9
	}, this.aIn = function(ak, aJD, aJE) {
		var aOB = w.x.aOC(ak);
		this.pG(aJD, aOB);
		for (var al = 0; al < aOB; al++) this.pG(aJE, ak[al])
	}, this.aOD = function(ak, aJD, aJG) {
		var aOB = w.x.aOC(ak);
		this.pG(aJD, aOB);
		for (var al = 0; al < aOB; al++) this.aOE(ak[al], aJG)
	}, this.aOE = function(e0, aJD) {
		var bw = e0.length;
		this.pG(aJD, bw);
		for (var al = 0; al < bw; al++) this.pG(16, e0.charCodeAt(al))
	}, this.aOF = function(aW) {
		var aOG = (aW = aW.toDataURL()).split(",");
		if (aOG.length < 2) console.log("error 266");
		else {
			aW = w.bL.aJH(aW = aOG[aOG.length - 1], "/", "_"), aW = w.bL.aJH(aW, "\\+", "-");
			var aW = w.bL.aJH(aW, "=", ""),
				kK = fE.fF.sd(aW),
				bw = kK.length;
			this.pG(30, bw);
			for (var al = 0; al < bw; al++) this.pG(6, kK[al])
		}
	}
}

function aHs() {
	var a2D = new Uint8Array(o.bI),
		aOH = new Uint16Array(o.bI),
		aOI = new Uint16Array(o.bI),
		aOJ = new Uint8Array(o.bI),
		aOK = (this.cD = new Uint8Array(o.bI), new Uint16Array(o.bI)),
		aOL = new Uint16Array(o.bI);

	function aOS(al) {
		a2D[al] = 1 + ac.eB(aOK[al] * eC.random(), 10 * eC.value(100))
	}
	this.at = null, this.aOM = [97, 94, 70, 40, 20, 0, 100], this.zv = [500, 450, 400, 300, 80, 50, 100], this.aON = [0, 0, 5, 25, 50, 100, 0], this.aHP = [60, 74, 112, 200, 256, 512, 512], this.zu = [1, 2, 3, 4, 6, 8, 1], this.a86 = [500, 450, 400,
		300, 80, 50, 100
	], this.aJK = [100, 150, 250, 400, 600, 1e3, 100], this.gz = function() {
		this.at = [L(402), L(403), L(269), L(404), L(405), L(406), "H Bot"]
	}, this.a4 = function() {
		a2D.fill(0), aOH.fill(0), aOI.fill(0), aOJ.fill(0), this.cD.fill(0), aOK.fill(0), aOL.fill(0);
		var aOO = o.cF;
		if (9 === o.fW) this.aOP();
		else if (o.kg)
			if (3 === o.data.botDifficultyType)
				for (al = o.aHX - 1; 0 <= al; al--) {
					var bP = al + aOO;
					this.cD[bP] = o.data.botDifficultyData[bP]
				} else if (2 === o.data.botDifficultyType)
					for (al = o.aHX - 1; 0 <= al; al--) this.cD[bP = al + aOO] = o.data.botDifficultyTeam[bN.rA[bN.iZ[bP]]];
				else if (1 === o.data.botDifficultyType) {
			var aOR = this.at.length;
			for (al = o.aHX - 1; 0 <= al; al--) this.cD[al + aOO] = al % aOR
		} else
			for (aOR = o.data.botDifficultyValue, al = o.aHX - 1; 0 <= al; al--) this.cD[al + aOO] = aOR;
		else
			for (var aOQ = 8 === o.fW ? 1 : 0, al = o.aHX - 1; 0 <= al; al--) this.cD[al + aOO] = aOQ;
		for (al = 0; al < aOO; al++) this.cD[al] = 6;
		var bw = o.bI;
		for (al = 0; al < bw; al++) this.cD[al] <= 2 ? (aOJ[al] = 5, aOK[al] = aOL[al] = 1040, 0 === this.cD[al] ? (aOH[al] = 980, aOI[al] = 980) : 1 === this.cD[al] ? (aOH[al] = 980, aOI[al] = 920, aOK[al] = aOL[al] = 1100) : (aOH[al] = 825,
				aOI[al] = 750)) : this.cD[al] <= 4 ? (aOJ[al] = 1 + eC.qY(20), 3 === this.cD[al] ? (aOH[al] = aOI[al] = 500, aOK[al] = aOL[al] = 1e3) : (aOL[al] = 250 + eC.qY(1501), aOK[al] = 500 + eC.qY(501), aOH[al] = 300 + eC.qY(201), aOI[
				al] = 100 + eC.qY(201))) : this.cD[al] <= 5 ? (aOK[al] = 1e3, aOL[al] = 1e3, aOJ[al] = 35 + eC.qY(16), aOH[al] = 300 + eC.qY(201), aOI[al] = 50 + eC.qY(101)) : (aOK[al] = aOL[al] = 800, aOJ[al] = 5, aOH[al] = 10, aOI[al] = 250),
			aOS(al)
	}, this.aOP = function() {
		for (var hd = a0p.aHS, aOO = o.cF, al = hd - 1; 0 <= al; al--) this.cD[al + aOO] = 0;
		for (var j9 = 0; j9 < 6; j9++) {
			for (al = hd + a0p.a0q[j9] - 1; hd <= al; al--) this.cD[al + aOO] = j9;
			hd += a0p.a0q[j9]
		}
	}, this.aOT = function(i5, value) {
		a2D[i5] = Math.min(value, a2D[i5])
	}, this.da = function(i5) {
		0 == --a2D[i5] && ! function(i5) {
			(function(i5) {
				aOK[i5] !== aOL[i5] && (aOK[i5] += aOK[i5] < aOL[i5] ? 3 : -3);
				aOH[i5] !== aOI[i5] && (aOH[i5] += aOH[i5] < aOI[i5] ? aOJ[i5] : -aOJ[i5], aOH[i5] = (Math.abs(aOH[i5] - aOI[i5]) <= aOJ[i5] ? aOI : aOH)[i5]);
				a2D[i5] = ac.eB(aOK[i5], 10)
			})(i5), ch.ci.aOW(i5, ac.eB(aOH[i5] * eF.fa[i5], 1e3))
		}(i5)
	}, this.aOX = function(i5, v) {
		aOK[i5] = aOL[i5] = v
	}
}

function v1() {
	this.fq = function(aJD) {
		for (var vs = oV, size = vs.oX(aJD), aOY = 7 + 9 * vs.oX(1), ak = [], al = 0; al < size; al++) ak.push(String.fromCharCode(vs.oX(aOY)));
		return ak.join("")
	}
}

function aIF() {
	var aOZ = 0,
		aOb = new Uint16Array(64);

	function a6s(aOf) {
		aOZ -= 2;
		for (var al = aOf; al < aOZ; al += 2) aOb[al] = aOb[al + 2], aOb[al + 1] = aOb[al + 3]
	}
	this.a4 = function() {
		aOZ = 0
	}, this.da = function() {
		var al, cC, ir;
		if (0 !== aOZ)
			if (0 === eF.hu[o.co]) aOZ = 0;
			else if (0 === lF.ca(o.co)) aOZ = 0;
		else
			for (al = aOZ - 2; 0 <= al; al -= 2)(cC = aOb[al]) < o.bI && 0 === eF.hu[cC] ? a6s(al) : (ir = aOb[al + 1], (cC >= o.bI && jG.aOd(o.co) || cC < o.bI && jG.aOe(o.co, cC)) && (pH.a2J.a7g(ir, cC), a6s(al)))
	}, this.aOg = function(cC, ir) {
		! function(cC, ir) {
			for (var al = 0; al < aOZ; al += 2)
				if (aOb[al] === cC) return aOb[al + 1] = Math.min(aOb[al + 1] + ir, 1023), 1;
			return
		}(cC, ir) && 64 !== aOZ && (aOb[aOZ] = cC, aOb[aOZ + 1] = ir, aOZ += 2)
	}
}

function q5() {
	var b, c, aG;

	function aOn() {
		for (var colors = new Array(11), al = 0; al < 11; al++) {
			var ak = a5.c0.data[163 + al].value.split(",");
			colors[al] = new Uint8Array(3);
			for (var ct = 0; ct < 3; ct++) ct < ak.length && (colors[al][ct] = Number(ak[ct]))
		}
		return colors
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(407), [new f("⬅️ " + L(1), function() {
		a0.bC()
	})]), c = new j(b.k, ((aG = []).push(function() {
		var aT = new aU;
		return aT.aV(L(408)), aT.aq(f2.aw.a5W("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aT.aq("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aT
	}()), aG.push(function() {
		var aT = new aU,
			zT = (aT.aV(L(409)), a5.c0.data[174].value),
			a5i = aT.a5j(zT.length + " / 180"),
			a6P = (a5i.style.textAlign = "center", new bJ(0, 1, function(aY) {
				var aY = aY.target.value,
					v = aY.length;
				a5i.textContent = v + " / 180", v <= 180 && a5.a6.a7(174, aY)
			}));
		return a6P.aY.rows = 6, a6P.aY.style.fontSize = "1em", a6P.bK(zT), aT.aX(a6P), aT
	}()), aG.push(function() {
		var aT = new aU;
		aT.aV(L(7));
		for (var al = 0; al < 11; al++) {
			var su = aT.aX(new aa(a5.c0.data[163 + al]));
			al && (su.aY.style.marginTop = "0.6em")
		}
		return aT.aX(new aZ([new f(L(285), function() {
			for (var data = a5.c0.data, al = 163; al < 174; al++) data[al] && a5.c0.ym(al, data[al].c4);
			a0.bC(), a0.bB()[31] = null, a0.a1(31)
		}).button])), aT
	}()), aG.push(function() {
		var aT = new aU;
		return aT.aV("Targeting"), aT.aq(L(286)), aT.aX(new aa(a5.c0.data[175], 0, 0)), aT
	}()), aG.push(function() {
		var aT = new aU;
		return aT.aV(L(48)), aT.aX(new aZ([new f(L(104), function() {
			(new aCG).show(a5.c0.data[174].value, aOn(), -1)
		}).button])), aT
	}()), aG.push(function() {
		var aT = new aU,
			aOo = (aT.aV(L(410)), aT.aq(L(411)), new aa(a5.c0.data[176], 1, 0)),
			aOp = (aT.aX(aOo), new f(L(412), function(aY) {
				return aIz.button.textContent === L(99) && f2.aw.a5e(0) && (w.bc.jp(aY), a5f(), f2.a5g.zR(a5.c0.data[176].value, aOn(), a5.c0.data[175].value, a5.c0.data[174].value)), !0
			}, 1)),
			a5f = function() {
				aIz.button.textContent = L(98), aOp.bQ(1), aOp.button.style.color = hM.hX
			},
			aIz = new f(L(98), function(aY) {
				return aY.textContent === L(98) ? (aY.textContent = L(99), aOp.bQ(0), aOp.button.style.color = hM.a5h) : a5f(), !0
			});
		return aT.aX(new aZ([aIz.button, aOp.button])), aT
	}()), aG))
}

function aI8() {
	this.uN = new Array(o.bI), this.nF = new Array(o.bI), this.iW = new Uint8Array(o.bI), this.hu = new Uint8Array(o.bI), this.eG = new Uint16Array(o.bI), this.eJ = new Uint16Array(o.bI), this.eH = new Uint16Array(o.bI), this.eK = new Uint16Array(o
			.bI), this.fQ = new Uint32Array(o.bI), this.a73 = new Uint32Array(o.bI), this.fa = new Uint32Array(o.bI), this.lT = null, this.aOq = null, this.rW = null, this.a7t = null, this.aNt = new Uint16Array(o.bI), this.aOr = new Uint16Array(o
		.bI), this.aOs = new Uint16Array(o.bI), this.qL = new Uint16Array(o.bI), this.a74 = new Uint8Array(o.bI), this.io = new Uint16Array(o.bI), this.a4 = function() {
			this.uN.fill(""), this.nF.fill(""), this.iW.fill(0), this.hu.fill(0), this.eG.fill(0), this.eJ.fill(0), this.eH.fill(0), this.eK.fill(0), this.fQ.fill(0), this.a73.fill(0), this.fa.fill(0), this.lT = new Array(o.bI), this.aOq = new Array(
				o.bI), this.rW = new Array(o.bI), this.a7t = new Array(o.bI), this.aNt.fill(0), this.aOr.fill(0), this.aOs.fill(0), this.qL.fill(0), this.a74.fill(0), this.io.fill(0)
		}
}

function pn() {
	var x8, a58, aG;
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a58.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(L(413), [new f("⬅️ " + L(1), function() {
		a0.a1(7, a0.qA(7).ph)
	}), new f(L(123), function() {
		a5.a6.a7(105, fE.fF.aOu(a58.an[0].aOv[0].aY.value, 5)), a5.a6.a7(106, fE.fF.aOu(a58.an[1].aOv[0].aY.value, 15)), a0.a1(8, a0.qA(7).ph, new a5B(18))
	})]), a58 = new j(x8.k, ((aG = []).push(function() {
		var aT = new aU;
		return aT.aV(L(100)), aT.aX(new aa({
			value: "",
			ab: -1
		})), aT
	}()), aG.push(function() {
		var aT = new aU,
			a5m = (aT.aV(L(103)), new aa({
				value: "",
				ab: -1
			}));
		return a5m.aY.type = "password", aT.aX(a5m), aT.aX(new aZ([new f(L(104), function(aY) {
			return aY.textContent === L(104) ? (aY.textContent = L(105), a5m.aY.type = "text") : (aY.textContent = L(104), a5m.aY.type = "password"), !0
		}).button])), aT
	}()), aG.push(function() {
		var aT = new aU;
		return aT.aV(L(107)), aT.a5j(L(414)), aT.a5j(L(415)), aT.a5j(L(416)), aT
	}()), aG))
}

function y5() {
	this.aLY = function() {
		for (var i5, bw = cw.cx, jy = cw.cy, qL = eF.qL, aOx = this.qN(), al = 0; al < bw; al++) i5 = jy[al], w.cO.cm(i5) || (qL[i5] = aOx);
		var aNt = eF.aNt,
			aOr = eF.aOr,
			aOs = eF.aOs,
			a74 = eF.a74,
			bw = o.cF;
		for (al = 0; al < bw; al++)(0 === a74[al] || aOs[al] < 1 || 2 * aNt[al] > 3 * (aOr[al] + aOs[al])) && (qL[al] = 0);
		var aLT = 0;
		for (al = 0; al < bw; al++) aLT += 0 < qL[al];
		return aLT
	}, this.qN = function() {
		return Math.min(65535, dY.hw())
	}
}

function aNF(aN9, aN3, aOy, aNA, aGi, a0A) {
	var a0B = document.createElement("div"),
		aOz = document.createElement("div"),
		aP0 = document.createElement("div"),
		aP1 = document.createElement("div"),
		aP2 = document.createElement("div"),
		a0C = document.createElement("div"),
		aP3 = document.createElement("div"),
		aP4 = document.createElement("div"),
		aP5 = document.createElement("span"),
		aP6 = document.createElement("div");
	this.aNI = new aGh(aGi, a0A), this.aNM = new a09(a0A), this.aNR = [aN9, aN3, aOy, aNA], this.aNX = function(vW) {
		vW = (vW / 10).toFixed(1) + "%";
		aP4.style.width = vW, aP5.innerHTML = vW
	}, this.aNP = function() {
		this.aNM.b1(a0C), this.aNI.show(a0C)
	}, this.aNQ = function() {
		this.aNI.b1(a0C), this.aNM.show(a0C)
	}, this.aNH = function() {
		return aOz
	}, this.show = function() {
		document.body.appendChild(a0B)
	}, this.b1 = function() {
		a0.removeChild(document.body, a0B)
	}, this.resize = function(aP9) {
		var aPA = 1 - .4 * c3.h2.h3() * (c2.ba > 1.6 * c2.bb),
			aPB = w.bc.jc(.05 * aPA),
			aPC = c2.bb > c2.ba,
			aPD = w.bc.jc(.06 * aPA + .03 * aPC),
			aPE = w.bc.jc(.08 * aPA + .03 * aPC),
			aPF = w.bc.jc(.04 + .02 * aPC),
			aPC = w.bc.jc(.02 * aPA + .01 * aPC),
			aPH = w.bc.jc(.025);
		a0B.style.font = w.bc.hG(0, aPH), aP2.style.font = w.bc.hG(0, .9 * aPH), aP6.style.font = w.bc.hG(0, .9 * aPH), aPA < 1 && (aPH = w.bc.hG(0, aPA * aPH), aP0.style.font = aPH, aP2.style.font = aPH, aP6.style.font = aPH, aP3.style.font =
			aPH, aP1.style.font = aPH), aOz.style.height = w.bc.jW(aPB), aOz.style.font = w.bc.hG(0, .72 * aPB), w.bc.jV(aOz, 2), aP0.style.top = w.bc.jW(aPB), aP0.style.height = w.bc.jW(aPE), w.bc.jV(aP0, 2), aP1.style.font = w.bc.hG(0,
			aPA * w.bc.jc(.02)), aP1.style.top = w.bc.jW(aPB + aPE), aP1.style.height = w.bc.jW(aPF), w.bc.jV(aP1, 2), aP2.style.top = w.bc.jW(aPB + aPE + aPF), aP2.style.height = w.bc.jW(aPD), w.bc.jV(aP2, 2), a0C.style.top = w.bc.jW(aPB +
			aPE + aPF + aPD), a0C.style.height = w.bc.jW(c2.bb / c2.je - aPB - aPE - 2 * aPD - aPF - aPC), aP3.style.top = w.bc.jW(c2.bb / c2.je - aPD - aPC), aP3.style.height = w.bc.jW(aPC), w.bc.jV(aP3, 8), aP5.style.font = w.bc.hG(0, .8 *
			aPC), aP6.style.top = w.bc.jW(c2.bb / c2.je - aPD), aP6.style.height = w.bc.jW(aPD), w.bc.jV(aP6, 8), aN9.resize(aP0), aN3.resize(aP0), aOy.resize(aP0), aNA.resize(aP0), aP9 ? this.aNI.resize(a0C) : this.aNM.resize()
	};
	aGi = this;
	a0B.style.position = "absolute", a0B.style.top = "0", a0B.style.left = "0", a0B.style.width = "100%", a0B.style.height = "100%", a0B.style.backgroundColor = hM.aB9, dE.dF() || (a0B.style.backdropFilter = "blur(4px)", a0B.style
		.webkitBackdropFilter = "blur(4px)"), aOz.style.position = "absolute", aOz.style.top = "0", aOz.style.left = "0", aOz.style.width = "100%", aOz.style.display = "flex", aOz.style.alignItems = "center";
	for (var ak = [aP0, aP1, aP2, aP6], al = 0; al < ak.length; al++) ak[al].style.position = "absolute", ak[al].style.left = "0", ak[al].style.width = "100%", w.bc.jq(ak[al]);
	a0C.style.position = "absolute", a0C.style.left = "0", a0C.style.width = "100%", a0C.style.font = "inherit", aP3.style.position = "absolute", aP3.style.left = "0", aP3.style.width = "100%", aP4.style.position = "absolute", aP4.style.top = "0",
		aP4.style.left = "0", aP4.style.height = "100%", aP4.style.width = "50%", aP4.style.backgroundColor = hM.hY, aP5.innerHTML = "", aP5.style.position = "absolute", aP5.style.top = "50%", aP5.style.left = "50%", aP5.style.transform =
		"translate(-50%, -50%)", aOz.appendChild(function() {
			var gn = document.createElement("h1");
			return gn.textContent = L(417), gn.style.margin = "0 auto 0.15em auto", gn.style.fontFamily = "Arial Black, system-ui", gn.style.fontSize = "inherit", gn.style.fontWeight = "inherit", gn
		}()), aP0.appendChild(aN9.ao), aP1.appendChild(aN3.ao), aP2.appendChild(aOy.ao), aP3.appendChild(aP4), aP3.appendChild(aP5), aP6.appendChild(aNA.ao), a0B.appendChild(aOz), a0B.appendChild(aP0), a0B.appendChild(aP1), a0B.appendChild(aP2), a0B
		.appendChild(a0C), a0B.appendChild(aP3), a0B.appendChild(aP6), aGi.aNM.show(a0C)
}

function zm() {
	var wI = 0,
		aPJ = 0,
		aPK = 0,
		aPL = null,
		aPM = null;

	function aPP(ga, aPQ, aPR) {
		var e0 = ga.username;
		return (e0 += "   " + f5.fi.aEA(ga.g6, ga.g7, ga.g8)) + function(ga) {
			ga = ga.g9;
			if (ga < 1e3) return "   Gold: " + ga;
			if ((ga %= 1024) < 1e3) return "   Gold: " + ga + "k";
			return "   Gold: " + (ga - 999) + "M"
		}(ga) + ("   IP: " + gP.fF.gQ(ga.gA, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aPR ? aPJ : aPO(ga, aPQ)])
	}

	function aPO(ga, aPQ) {
		return aPJ = aPQ || f5.fB.gg(ga.dw) ? 1 : 0
	}
	this.a0D = 0, this.aPN = function() {
		!wI || aPJ === aPO(aPM) && aPK === aPM.g9 || (aPK = aPM.g9, aPL.show(-1, -1, aPP(aPM, 0, 1), 1, 1, aPM.color))
	}, this.ta = function(aY, ga, aPQ) {
		var a3g = aY.getBoundingClientRect();
		this.show(a3g.left, a3g.top, ga, 0, aPQ), aY.addEventListener("mouseleave", function remove() {
			aY.removeEventListener("mouseleave", remove), f5.tZ && f5.tZ.b1(1)
		}), this.a0D = aPQ
	}, this.show = function(bi, bj, ga, wM, aPQ) {
		aPL = aPL || new wF, aPK = (aPM = ga).g9, aPL.show(bi, bj, aPP(ga, aPQ), wM, 0, aPM.color), wI = 1
	}, this.b1 = function(wS) {
		this.a0D = 0, aPL && aPL.b1(wS) && (wI = 0, aPM = null)
	}
}

function jU(nx, size, aPT, aPU, font) {
	var al, h0 = .2,
		canvas = document.createElement("canvas"),
		be = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = nx, canvas.height = nx, be.font = size + font, be.textAlign = "center", be.textBaseline = "middle", be.fillStyle = "red", al = 0; al < aPT.length; al++) be.fillText(aPT[al], .5 * nx, .5 * nx);
	return -1 < (canvas = function(bf) {
		var al, br, h1 = bf.data;
		for (al = h1.length - 4; 0 <= al; al -= 4)
			if (br = h1[al], aPU <= br) return Math.floor(al / (4 * nx));
		return -1
	}(be.getImageData(0, 0, nx, nx))) && (h0 = (canvas - .5 * nx + .1 * size) / size), Math.max(h0, 0)
}

function aPX(aEN) {
	var a0B = document.createElement("div"),
		aGl = document.createElement("div"),
		aPY = [];

	function aEP() {
		dE.dF() || (this.style.backgroundColor = w.color.aB4(hM.ka, 50))
	}

	function aEO() {
		this.style.backgroundColor = hM.ka
	}
	this.a7 = function(aPa, vk) {
			aPY[2].textContent = aPa + 1 + " / " + vk
		}, this.show = function(ga) {
			ga = f5.fi.tn(ga, f5.fi.tp(ga)), aGl.appendChild(f5.gS.transform(ga)), document.body.appendChild(a0B)
		}, this.resize = function() {
			var bb = w.bc.jc(.03, .5);
			a0B.style.width = 10 * bb + "px", a0B.style.font = w.bc.hG(1, .75 * bb), w.bc.jV(a0B, 4), aGl.style.top = bb + "px", aGl.style.font = w.bc.hG(0, .55 * bb), w.bc.jV(aGl, 2), a0B.style.height = bb + aGl.offsetHeight + "px";
			for (var al = 0; al < 3; al++) w.bc.jV(aPY[al], 6), aPY[[0, 1, 3][al]].style.width = 2 * bb + "px";
			for (al = 0; al < 4; al++) aPY[al].style.height = bb + "px", w.bc.jV(aPY[al], 2);
			aPY[2].style.width = 4 * bb + "px", aPY[1].style.left = 2 * bb + "px", aPY[2].style.left = 4 * bb + "px", aPY[3].style.left = 8 * bb + "px"
		}, this.d1 = function() {
			for (var al = 0; al < 4; al++) aPY[al].onclick = null, aPY[al].onmouseover = null, aPY[al].onmouseout = null;
			a0.removeChild(document.body, a0B), a0B = aGl = aPY = null
		}, a0B.style.position = "absolute", a0B.style.color = hM.hX, a0B.style.zIndex = "3", a0B.style.right = "0", a0B.style.top = "0", aGl.style.position = "absolute", aGl.style.height = "auto", aGl.style.color = hM.hX, aGl.style.backgroundColor =
		hM.ka, aGl.style.left = "0", aGl.style.width = "100%", aGl.style.overflowWrap = "break-word", a0B.appendChild(aGl);
	for (var al = 0; al < 4; al++) aPY[al] = document.createElement("div"), aPY[al].style.position = "absolute", aPY[al].style.backgroundColor = hM.ka, aPY[al].style.color = hM.hX, aPY[al].style.top = "0", aPY[al].style.display = "flex", aPY[al]
		.style.justifyContent = "center", aPY[al].style.alignItems = "center", aPY[al].style.userSelect = "none", aPY[al].style.outline = "none", aPY[al].style.font = "inherit", 2 !== (aPY[al].aPZ = al) && (aPY[al].onclick = aEN, aPY[al]
			.onmouseover = aEP, aPY[al].onmouseout = aEO), a0B.appendChild(aPY[al]);
	aPY[0].textContent = "◀", aPY[1].textContent = "▶", aPY[3].textContent = "✖"
}

function a1R() {
	var aPb = [];
	this.a4 = function() {
		aPb = []
	}, this.aLR = function() {
		return 65536 === aPb.length
	}, this.aPc = function(aKF, aKG) {
		for (var a1Q = aPb, bw = a1Q.length, al = 0; al < bw; al++) {
			var i5 = a1Q[al];
			if (i5[0] === aKF && i5[i5.length - 1] === aKG) return al
		}
		return -1
	}, this.aDO = function(a34) {
		var aPd = new Uint32Array(a34.length);
		return aPd.set(a34), aPd.reverse()
	}, this.aDN = function(rF, rG) {
		var v = rF.length - 1,
			aPe = new Uint32Array(v + rG.length);
		return aPe.set(rF, 0), aPe.set(rG, v), aPe
	}, this.aDS = function(rF, rG, e1, eV, aPf) {
		aPf && (e1 = (rG = this.aDO(rG)).length - e1 - 2);
		aPf = rG.subarray(e1 + 1 + (eV === rG[e1 + 1])), eV = new Uint32Array(rF.length + aPf.length);
		return eV.set(rF, 0), eV.set(aPf, rF.length), eV
	}, this.aKI = function(a34) {
		return aPb.push(a34), aPb.length - 1
	}, this.get = function(al) {
		return aPb[al]
	}, this.aPh = function() {
		return aPb
	}, this.aPi = function(aKF, aKG) {
		return null
	}
}

function aPj() {
	this.e9 = 0, this.a4 = function() {
		this.e9 = 0
	}, this.da = function() {
		if (!this.e9 && dY.hw() % 30 == 7 && w.cO.jM(90) && (ch.performance.e9 = 1)) {
			if (o.fT) {
				var ie = fd.fe();
				if (bN.rA[ie]) {
					fd.aAa(ie);
					var ak = ix.rD,
						bw = ix.rC[0];
					if (0 !== bw)
						for (var aPo = Math.min(100 + 10 * (bw - 1), 400), al = 0; al < bw; al++) ar.aOX(ak[al], aPo)
				}
			}
			ar.aOX(fR[0], 100)
		}
	}
}

function aIU() {
	this.aPp = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.ua = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", hM.hX, "rgb(170,170,170)"
	], this.aPq = [hM.hX, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", hM.hX, hM.r1], this.aPr = [hM.r1, hM.hX, hM.hX, hM.hX, hM.r1, hM.r1, hM.r1, hM.r1, hM.hX];
	var aHV = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.o6 = ["rgba(" + aHV[0] + ",", "rgba(" + aHV[1] + ",", "rgba(" + aHV[2] + ",", "rgba(" + aHV[3] + ",", "rgba(" + aHV[4] + ",", "rgba(" + aHV[5] + ",", "rgba(" + aHV[6] + ",", "rgba(" + aHV[7] + ",", "rgba(" + aHV[8] + ",", "rgba(" + aHV[9] +
			","
		], this.o7 = ["rgb(" + aHV[0] + ")", "rgb(" + aHV[1] + ")", "rgb(" + aHV[2] + ")", "rgb(" + aHV[3] + ")", "rgb(" + aHV[4] + ")", "rgb(" + aHV[5] + ")", "rgb(" + aHV[6] + ")", "rgb(" + aHV[7] + ")", "rgb(" + aHV[8] + ")", "rgb(" + aHV[9] +
			")"], this.bO = null, this.a0g = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.bU = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.rA = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.iZ = new Uint8Array(o.bI), this.ub = new Uint8Array(o.bI), this.aPs = new Uint16Array(o.bI), this.aPt = new Uint16Array(this.rA.length + 1), this.aPu = new Uint16Array(this.rA.length), this.gz =
		function() {
			this.bO = [L(418), L(419), L(420), L(421), L(422), L(423), L(424), L(425), L(426)]
		}, this.a4 = function() {
			if (this.iZ.fill(0), this.ub.fill(0), this.aPv(), o.fT) {
				if (9 === o.fW) {
					for (var iZ = bN.iZ, al = o.data.teamPlayerCount[7] - 1; 0 <= al; al--) iZ[al] = 1;
					var bw = o.bI;
					for (al = o.data.teamPlayerCount[7]; al < bw; al++) iZ[al] = 2;
					bN.rA[1] = 7, bN.rA[2] = 8
				} else o.kg ? function() {
					var bU = bN.bU,
						colorsData = o.data.colorsData;
					if (!o.data.selectableColor)
						for (var al = o.cF - 1; 0 <= al; al--) colorsData[al] = eC.qY(262144);
					var aQ6 = 0,
						eM = 768,
						bT = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = o.data.teamPlayerCount;
					for (al = 0; al < 9; al++)
						if (teamPlayerCount[al]) {
							for (var h1 = 0, j9 = 0; j9 < 3; j9++) h1 += Math.abs(bU[al][j9] - bT[j9]);
							h1 < eM && (aQ6 = al, eM = h1)
						} var aQ7 = new Uint16Array(9);
					for (al = 0; al < 9; al++) aQ7[al] = teamPlayerCount[al];
					var rA = bN.rA,
						aQ8 = new Uint8Array(9),
						v = (rA[0] = 0, 1);
					for (al = 1; al < 9; al++) aQ7[al] && (aQ8[al] = v, rA[v++] = al);
					var eA = o.cF,
						iZ = bN.iZ;
					aQ7[aQ6] ? (aQ7[aQ6]--, iZ[0] = aQ8[aQ6]) : eA = 0;
					var b3 = 0;
					for (al = eA; al < o.aHO; al++) {
						var bP = rA[b3];
						if (aQ7[bP]) aQ7[bP]--, iZ[al] = aQ8[bP];
						else if (al--, 9 <= ++b3) return console.log("error 325")
					}
				}() : this.da();
				! function() {
					for (var bw = o.bI, aPs = bN.aPs, aPt = bN.aPt, aPu = bN.aPu, iZ = bN.iZ, rA = bN.rA, aQI = rA.length, c0 = new Array(aQI), al = 0; al < aQI; al++) c0[al] = [];
					for (al = 0; al < bw; al++) c0[rA[iZ[al]]].push(al);
					for (al = 1; al <= aQI; al++) aPt[al] = aPt[al - 1] + c0[al - 1].length;
					for (al = 0; al < aQI; al++)
						for (var v = c0[al].length, cX = aPt[al], bP = 0; bP < v; bP++) aPs[bP + cX] = c0[al][bP];
					var cF = o.cF;
					for (al = 0; al < aQI; al++)
						for (v = c0[al].length, cX = aPt[al], bP = 0; bP < v; bP++)
							if (aPs[bP + cX] >= cF) {
								aPu[al] = bP;
								break
							}
				}(), ! function() {
					for (var bw = o.bI, iZ = bN.iZ, ub = bN.ub, rA = bN.rA, al = 0; al < bw; al++) ub[al] = rA[iZ[al]];
					9 === o.fW && ub.fill(1, bw - a0p.a0q[5])
				}()
			}
		}, this.aPv = function() {
			for (var al = this.rA.length - 1; 0 <= al; al--) this.rA[al] = al
		}, this.da = function() {
			var oC = new Uint8Array(o.cF),
				oD = new Uint8Array(o.cF),
				aQ0 = new Uint16Array(8),
				aQ1 = new Uint16Array(this.rA.length);
			this.aQ2(oC, oD, aQ0, 1), this.a9G(aQ0), this.aQ3(aQ1, oC, oD), this.aQ4(oC, oD, aQ1), this.aQ5()
		}, this.aQ2 = function(oC, oD, aQ7, aQ9) {
			for (var j9, aY, aQA, bw = this.rA.length - aQ9, ak = new Uint16Array(bw), bU = this.bU, colorsData = o.data.colorsData, al = o.cF - 1; 0 <= al; al--) {
				for (j9 = bw; aQ9 <= j9; j9--) ak[j9 - 1] = Math.abs(4 * (colorsData[al] >> 12) - bU[j9][0]) + Math.abs(4 * (colorsData[al] >> 6 & 63) - bU[j9][1]) + Math.abs(4 * (63 & colorsData[al]) - bU[j9][2]);
				for (aQA = 768, j9 = bw - 1; 0 <= j9; j9--) ak[aY = (j9 + al) % bw] < aQA && (aQA = ak[aY], oC[al] = aY);
				for (aQ7[oC[al]] += 4, aQA = 768, j9 = bw - 1; 0 <= j9; j9--) ak[aY = (j9 + al) % bw] < aQA && aY !== oC[al] && (aQA = ak[aY], oD[al] = aY);
				aQ7[oD[al]]++
			}
		}, this.a9G = function(aQ7) {
			for (var j9, eL, bw = this.rA.length - 1, al = bw; 0 <= al; al--) this.rA[al] = al;
			for (al = bw - 1; 0 <= al; al--) aQ7[al]++;
			for (al = 1; al <= bw; al++) {
				for (eL = 0, j9 = 1; j9 < bw; j9++) aQ7[j9] > aQ7[eL] && (eL = j9);
				aQ7[eL] = 0, this.rA[al] = eL + 1
			}
		}, this.aQ3 = function(aQ1, oC, oD) {
			var j9, aE9, b3, h1, aY, dG, mL, aQB = this.rA.length - 1,
				aQC = new Uint16Array(aQB),
				aQD = [],
				aQE = 0,
				aD8 = [],
				aQF = [];
			loop: for (var al = 0; al < o.cF; al++)
				if (null !== (aE9 = w.bL.fK(eF.uN[al]))) {
					for (j9 = aD8.length - 1; 0 <= j9; j9--)
						if (aE9 === aD8[j9]) {
							aQF[j9].push(al), aQE = Math.max(aQE, aQF[j9].length);
							continue loop
						} aD8.push(aE9), aQD.push(!1), aQF.push([al]), aQE = Math.max(aQE, 1)
				}
			for (; 2 < o.a0e && aQE > ac.eB(o.cF, o.a0e);) o.a0e--, o.fW--;
			for (j9 = aD8.length - 1; 0 <= j9; j9--) {
				for (h1 = -1, b3 = aD8.length - 1; 0 <= b3; b3--) !aQD[b3] && (-1 === h1 || aQF[b3].length > aQF[h1].length) && (h1 = b3);
				for (b3 = aQB - 1; 0 <= b3; b3--) aQC[b3] = 1;
				for (b3 = aQF[h1].length - 1; 0 <= b3; b3--) aQC[oC[aQF[h1][b3]]] += 3, aQC[oD[aQF[h1][b3]]]++;
				for (al = aQB - 1; 0 <= al; al--) {
					for (aY = h1 % aQB, b3 = aQB - 1; 0 <= b3; b3--) aQC[b3] > aQC[aY] && (aY = b3);
					for (dG = -1, b3 = o.a0e; 0 < b3; b3--)
						if (this.rA[b3] === aY + 1) {
							dG = b3;
							break
						} if (aQC[aY] = 0, -1 !== dG) {
						for (mL = 0, b3 = o.a0e; 0 < b3; b3--) aQ1[dG] > aQ1[b3] && mL++;
						if (mL !== o.a0e - 1) {
							for (b3 = aQF[h1].length - 1; 0 <= b3; b3--) aQ1[dG]++, this.iZ[aQF[h1][b3]] = dG;
							break
						}
					}
				}
				aQD[h1] = !0
			}
		}, this.aQ4 = function(oC, oD, aQ1) {
			for (var al, su, bw = this.rA.length - 1, border = ac.eB(o.cF, o.a0e), aQG = (0 < o.cF % o.a0e && border++, new Uint8Array(1 + bw)), j9 = bw; 1 <= j9; j9--) aQG[this.rA[j9]] = j9;
			for (al = 0; al < o.cF; al++) su = aQG[oC[al] + 1], 0 === this.iZ[al] && su <= o.a0e && aQ1[su] < border && (aQ1[su]++, this.iZ[al] = su);
			for (al = 0; al < o.cF; al++) su = aQG[oD[al] + 1], 0 === this.iZ[al] && su <= o.a0e && aQ1[su] < border && (aQ1[su]++, this.iZ[al] = su);
			for (j9 = o.a0e; 1 <= j9; j9--)
				for (al = o.cF - 1; 0 <= al && !(aQ1[j9] >= border); al--) 0 === this.iZ[al] && (aQ1[j9]++, this.iZ[al] = j9)
		}, this.aQ5 = function() {
			if (o.a0e < 8) o.a0e++, o.fW++, o.aQH = 1;
			else
				for (var al = o.cF; al < o.bI; al++) this.iZ[al] = 1 + al % o.a0e
		}
}

function aIR() {
	var m5 = 0,
		m7 = 0;
	this.aAE = function(bi, bj) {
		m5 = bi, m7 = bj
	}, this.aAN = function(code) {
		var eW, eY, eV;
		o.ke || df.dg || (w.cO.iT(0) || w.cO.iT(1)) && w.cO.iV(o.co) && (kX.h6(m5, m7) ? kX.aAF = !1 : a3U.h6(m5, m7) || (eW = eN.m4(m5), eY = eN.m6(m7), eV = eN.ed(eW, eY), eN.m8(eW, eY) && (0 === code ? function(eV) {
			var aQM, hd, iN;
			o.db ? -1 !== (aQM = aHk.aJs(eV)) && pH.a2J.aKX(eV) : (hd = eN.eg(eV), ee.a83(hd) ? (aQM = aHf.aO5.aQN(hd)) && (iN = eN.eg(aQM), iN = ee.lb(iN) ? o.bI : ee.la(iN), pH.a2J.aKa(kX.a7h(), aQM, iN)) : (aQM = aHk.aJu(eV)) <
				0 || (hd = eN.eg(aQM), ee.lb(hd) ? jG.aQO(o.co) ? pH.a2J.a7g(kX.a7h(), o.bI) : lF.ca(o.co) && a3O.aOg(o.bI, kX.a7h()) : (iN = ee.la(hd), jG.jH(iN, o.co) && (jG.aQP(o.co, iN) ? pH.a2J.a7g(kX.a7h(), iN) : lF.ca(o
					.co) && a3O.aOg(iN, kX.a7h())))))
		}(eV) : 1 === code ? function(eV) {
			e3.a1O.aQQ(o.co, eV) && pH.a2J.qD(kX.a7h(), ix.a08[7])
		}(eV) : 2 === code && function(eV) {
			e3.a06.aLD(o.co, eV) && pH.a2J.qG(kX.a7h())
		}(eV))))
	}, this.aAO = function() {
		if (!o.ke && !df.dg && w.cO.iT(1)) {
			var i5 = o.co;
			if (w.cO.iV(i5)) {
				var bw = lF.ca(i5);
				if (bw < 1) ! function() {
					var i5 = o.co;
					if (jG.aQO(i5)) pH.a2J.a7g(kX.a7h(), o.bI);
					else
						for (var iH = ee.iH, aOq = eF.aOq, bw = aOq[i5].length, iA = Math.floor(Math.random() * bw), al = 0; al < bw; al++)
							for (var sD = 3; 0 <= sD; sD--) {
								var bP = aOq[i5][(al + iA) % bw] + iH[sD];
								if (ee.lZ(bP)) {
									bP = ee.la(bP);
									if (bP !== i5 && (!o.fT || jG.jH(i5, bP))) return pH.a2J.a7g(kX.a7h(), bP)
								}
							}
				}();
				else {
					for (var aQS = 0, cD = lF.cc(i5, 0), al = 1; al < bw; al++) {
						var aQT = lF.cc(i5, al);
						aQT < cD && (cD = aQT, aQS = al)
					}
					pH.a2J.a7g(kX.a7h(), lF.cb(i5, aQS))
				}
			}
		}
	}, this.aAP = function() {
		if (!o.ke && !df.dg && w.cO.iV(o.co) && w.cO.iT(1)) return a19.gv ? a19.aO2(o.co) ? void pH.a2J.aKZ(1) : void 0 : void(a19.aO4(o.co) && pH.a2J.aAP())
	}
}

function aQV() {
	this.t7 = null, this.t8 = null, this.t9 = null, this.tA = null, this.tB = null, this.tC = null, this.sk = "";
	var aQW = 0;
	this.a4 = function() {
		this.t7 = [], this.t8 = [], this.t9 = [], this.tA = [], this.tB = [0], this.tC = [0], aQW = 0, this.sk = ""
	}, this.aNr = function(id, hp, hq, jA) {
		o.ke || 2 === o.de || (0 === this.tB[aQW] && (this.tC[aQW] ? (this.tB.push(1), this.tC.push(0), aQW++) : this.tB[aQW] = 1), this.t7.push(id), this.t8.push(hp), this.t9.push(void 0 === hq ? 0 : hq), this.tA.push(void 0 === jA ? 0 : jA),
			this.tC[aQW]++)
	}, this.da = function() {
		0 === this.tB[aQW] ? this.tC[aQW]++ : (this.tB.push(0), this.tC.push(0), aQW++)
	}
}

function bJ(aQX, aQY, aQZ, aQa) {
	var a0J = document.createElement("textarea"),
		aQb = (this.aY = a0J, !0);

	function aQc() {
		a0J.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aQY && w.bc.jV(a0J, 5)
		}, this.bK = function(zT) {
			a0J.value = zT
		}, this.bE = function() {
			return a0J.value
		}, this.a0K = function() {
			a0J.select()
		}, this.clear = function() {
			a0J.value = ""
		}, this.a0L = function() {
			aQb && navigator.clipboard ? (a0J.select(), navigator.clipboard.writeText(a0J.value).catch(function() {
				aQb = !1, aQc()
			})) : aQc()
		}, a0J.setAttribute("id", "textArea" + a0.aw.a89++), a0J.setAttribute("autocomplete", "off"), aQX && a0J.setAttribute("placeholder", aQX), a0J.style.top = "0", a0J.style.left = "0", a0J.style.width = "100%", a0J.style.height = "100%", a0J
		.style.userSelect = "none", a0J.style.outline = "none", a0J.style.resize = "none", a0J.style.border = "none", a0J.style.color = hM.hX, a0J.style.backgroundColor = hM.wt, aQa ? (a0J.style.fontSize = "1em", a0J.rows = 6, a0J.style.padding =
			"0.25em") : (a0J.style.padding = "0.45em", a0J.style.fontSize = "1.2em"), aQZ && a0J.addEventListener("input", function(aY) {
			aQZ(aY)
		}), a0J.addEventListener("focus", function() {
			c2.a8A++
		}), a0J.addEventListener("blur", function() {
			c2.a8A--
		})
}

function rq() {
	var aY;
	this.aY = document.createElement("hr"), this.resize = function() {
		w.bc.jV(this.aY, 8, hM.a7U)
	}, (aY = this.aY).style.marginBottom = aY.style.marginTop = "0.65em", aY.style.marginLeft = aY.style.marginRight = "-4%", aY.style.border = "none"
}

function aIY() {
	this.aQd = new aQe, this.a4 = function() {
		this.aQd.resize()
	}
}

function aCG() {
	var aQf, aQg, aAd;

	function aQm(al) {
		return w.color.wR(aQg[al][0], aQg[al][1], aQg[al][2])
	}

	function m2(ct, j9) {
		return w.color.aQy(aQg[ct], aQg[j9]), aQm(j9)
	}

	function aQk() {
		aQf && (aQf.remove(), aQf = null)
	}
	this.show = function(zT, colors, id) {
		0 <= (aAd = id) && f2.aw.a5e(0) && f2.zJ.a8Y(0, id), zT = (zT = (zT = (zT = (zT = (zT = (zT = (zT = (zT = (zT = (zT = (zT = zT.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aQg = colors, (aQf = document.createElement("div")).style.position = "fixed", aQf.style.top = "0", aQf.style.left = "0", aQf.style.width = "100%", aQf.style.height = "100%", aQf.style.backgroundColor = w.color.a7K(aQg[0][0], aQg[0][
				1], aQg[0][2], .6), aQf.style.zIndex = "6", aQf.onclick = function(aY) {
				aY.target === aQf && aQk()
			},
			function(zT) {
				var nx, aQl = document.createElement("div");
				aQl.style.position = "absolute", aQl.style.display = "flex", aQl.style.flexDirection = "column", aQl.style.top = "50%", aQl.style.left = "50%", aQl.style.backgroundColor = aQm(2), nx = c3.h2.h3() ? w.bc.jj(c2.min) : w.bc.jc(.4);
				nx = Math.max(nx, 200), aQl.style.width = w.bc.jW(nx), aQl.style.height = w.bc.jW(nx), aQl.style.transform = "translate(-50%, -50%)",
					function(aQl, nx) {
						var aQq = document.createElement("div");
						aQq.style.flex = "0 0 10%", aQq.style.overflow = "hidden", aQq.style.backgroundColor = aQm(1), aQq.style.color = m2(1, 7), aQq.style.font = w.bc.hG(1, .05 * nx), aQq.style.display = "flex", aQq.style.alignItems = "center",
							aQq.style.justifyContent = "center", aQq.innerHTML = L(427), aQl.appendChild(aQq)
					}(aQl, nx),
					function(aQl, zT, nx) {
						var aQr = document.createElement("div");
						aQr.style.flex = "0 0 70%", aQr.style.overflowY = "auto", aQr.style.overflowX = "hidden", aQr.style.whiteSpace = "pre-wrap", aQr.style.wordWrap = "break-word", aQr.style.padding = w.bc.jW(.02 * nx), aQr.style
							.backgroundColor = aQm(2), aQr.style.color = m2(2, 8), aQr.style.font = w.bc.hG(0, .07 * nx), aQr.innerHTML = zT, aQr.innerHTML = "<style>a { color: inherit; }</style>" + aQr.innerHTML, aQl.appendChild(aQr)
					}(aQl, zT, nx),
					function(aQl, nx) {
						var qB = document.createElement("div"),
							aQs = (qB.style.display = "flex", qB.style.flexDirection = "row", qB.style.justifyContent = "space-between", qB.style.alignItems = "stretch", qB.style.backgroundColor = aQm(3), qB.style.flex = "1", qB.style.padding = w
								.bc.jW(.01 * nx), qB.style.gap = w.bc.jW(.01 * nx), document.createElement("div")),
							aQt = (aQs.style.flex = "0 0 60%", aQs.style.height = "100%", new f(L(395, 0, 0, 1), function() {
								aQk()
							}, aQm(4), !1)),
							aQt = (aQt.button.style.width = "100%", aQt.button.style.height = "100%", aQt.button.style.color = m2(4, 9), aQt.button.style.font = w.bc.hG(1, .05 * nx), aQs.appendChild(aQt.button), document.createElement("div")),
							aQv = (aQt.style.flex = "0 0 15%", aQt.style.height = "100%", aQt.style.backgroundColor = aQm(5), document.createElement("div")),
							aQw = (aQv.style.flex = "1", aQv.style.height = "100%", new f(L(428), function(aY) {
								return w.bc.jp(aY), aAd < 0 || f2.aw.a5e(0) && (f2.zJ.a8Y(1, aAd), aAd = -1), !0
							}, aQm(6), !1));
						aQw.button.style.width = "100%", aQw.button.style.height = "100%", aQw.button.style.color = m2(6, 10), aQw.button.style.font = w.bc.hG(1, .035 * nx), aQv.appendChild(aQw.button), qB.appendChild(aQs), qB.appendChild(aQt),
							qB.appendChild(aQv), aQl.appendChild(qB)
					}(aQl, nx), aQf.appendChild(aQl)
			}(zT), document.body.appendChild(aQf)
	}
}

function aF5() {
	this.aCP = function() {
		for (var bw = o.cF, aAW = qQ.result.aAW, cX = aAW.length, qL = (pF.lu(17 + 16 * bw + 33 * cX), pF.pG(1, 1), pF.pG(4, 12), pF.pG(10, cX), pF.pG(1, +(2 === o.aH8)), pF.pG(1, o.aHD % 2), eF.qL), al = 0; al < bw; al++) pF.pG(16, qL[al]);
		for (var fQ = eF.fQ, al = 0; al < cX; al++) {
			var i5 = aAW[al];
			pF.pG(9, i5), pF.pG(24, fQ[i5])
		}
		f2.aw.send(f2.aw.p4, pF.oU)
	}
}

function aQz() {
	var aR0 = null,
		aR1 = 0,
		aR2 = 0;

	function aR4() {
		var ao;
		window.turnstile && (aR1 = 1, null !== aR0 ? window.turnstile.reset(aR0) : (ao = document.createElement("div"), document.body.appendChild(ao), aR0 = window.turnstile.render(ao, {
			sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
			action: "join_game",
			appearance: "interaction-only",
			callback: function(a8W) {
				aR2 = dY.dX, aR1 = 0,
					function(a8W) {
						f2.zJ.a8V(a8W)
					}(a8W)
			},
			"expired-callback": function() {
				aR1 = 0
			}
		})))
	}
	this.a4 = function() {
		var aR3 = document.createElement("script");
		aR3.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aR3.async = !0, aR3.onload = function() {
			aR4()
		}, document.head.appendChild(aR3)
	}, this.aR5 = function() {
		!aR1 && aR2 + 29e4 < dY.dX && aR4()
	}
}

function aR7() {
	function aR9() {
		if (2 === o.de) return 1;
		a19.aRB(), o.de = 2, o.qK = o.qg
	}

	function aRA() {
		qQ.aRC.en(), qO.show(1 === o.aGH, !1, 2 === o.aGH), qQ.result.en(), qQ.qR.da(), qQ.aRD.da(), qQ.aRD.aHG(), cp.aGT(!0), cp.oE(247), cp.oE(956), cp.oE(957), kk.kl(!0), hx.kl(!0), a19.kl(), h9.a3v(), o.ke && dY.p5.aRE(), dY.dk = !0, dj.km(), c3
			.h2.setState(0)
	}
	this.aR8 = function() {
		aR9() || (o.aH8 = 2, aRA())
	}, this.qi = function() {
		aR9() || (o.aH8 = 1, aRA())
	}
}

function a1N() {
	this.zs = function(player) {
		return !!o.data.passableWater && e3.aw.s7 !== e3.aw.zu && e3.aw.zt[player] !== e3.aw.aRF && 0 !== eF.rW[player].length
	}, this.aNz = function(aJt) {
		var a1G = ix.a08[1];
		return !(4 <= a1G || !e3.fi.a2t(eN.eg(aJt))) && ee.lV(eN.eg(eN.aCp(aJt, a1G)))
	}
}

function aHt() {
	var aRG, aRH, aRI;

	function aRK(qZ) {
		for (var al = aRG - 1; 0 <= al; al--) 0 === aRI[aRH[al]] && eF.fQ[aRH[al]] >= qZ && lC(aRH[al])
	}

	function aRJ(player) {
		var hB;
		64 === aRI[player] ? aRI[player] = 6 : (hB = eF.fQ[player], aRI[player] = hB < 1e3 ? 3 : hB < 1e4 ? 2 : hB < 6e4 ? 1 : 0)
	}
	this.a4 = function() {
		aRG = 0, aRH = new Uint16Array(o.bI), aRI = new Uint8Array(o.bI)
	}, this.da = function() {
		for (var al = aRG - 1; 0 <= al; al--) 64 === aRI[aRH[al]] ? aRJ(aRH[al]) : 0 == aRI[aRH[al]]-- && (aRJ(aRH[al]), lC(aRH[al]));
		16e4 <= eF.fQ[fR[0]] && (aRK(16e4), 3e5 <= eF.fQ[fR[0]]) && aRK(3e5), w.cO.ih(o.co) && (cQ.cl[7] = Math.max(eF.fQ[o.co], cQ.cl[7]))
	}, this.lS = function(player) {
		for (var ct, al = aRG - 1; 0 <= al; al--)
			if (player === aRH[al]) {
				for (aRG--, ct = al; ct < aRG; ct++) aRH[ct] = aRH[ct + 1];
				return
			}
	}, this.sY = function(player, aRM) {
		for (var al = aRG - 1; 0 <= al; al--)
			if (player === aRH[al]) return;
		aRH[aRG++] = player, aRI[player] = aRM ? 2 : 64
	}
}

function aRN() {
	this.da = function(player) {
		var aRO = function(player) {
			for (var a1Q = e3.a1Q.aPh(), bw = a1Q.length, cX = Math.min(bw, 32), bP = eC.qY(bw), al = 0; al < cX; al++) {
				var aRO = (al + bP) % bw,
					a34 = a1Q[aRO],
					a2n = a34[0],
					a2g = a34[a34.length - 1];
				if (e3.fi.a2q(player, a2n) && e3.fi.a2r(player, a2g)) return aRO;
				if (e3.fi.a2q(player, a2g) && e3.fi.a2r(player, a2n)) return 0 <= (aRO = e3.a1Q.aPc(a2g, a2n)) ? aRO : e3.a1Q.aLR() ? -1 : e3.a1Q.aKI(e3.a1Q.aDO(a34))
			}
			return -1
		}(player);
		return -1 !== aRO && (aRO = e3.a1Q.get(aRO), !e3.fi.a3M(player, aRO)) && (ix.ak[0] = aRO, !0)
	}
}

function aI3() {
	var aRP, aRQ, a7A, aRR, aRS, aRT, aRU, aRV, aRW, a78, aRX, aKb, aRY, aRZ = 1,
		aRa = 0,
		aRb = 0;

	function aRe(aRf) {
		aRf ? aRY = (aRY + 1) % f2.aw.aRg : (f2.aw.close(aRY, 3280), aRZ ? aRZ = 0 : (aRb = 1 - aRb, 0 === (aRa = (aRa + 1) % 2) && (aRY = (aRY + 1) % f2.aw.aRg, f2.aw.close(aRY, 3280)))), aKb = dY.dX, pW.aRc = aRb, f2.aw.a1l(aRY, 4, 1) && f2.f3.a8j(
			aRY)
	}

	function aRh() {
		0 === aRY ? a2U.aLA(3249) : aRe()
	}

	function aRm(bj, aJQ, vW) {
		var hz = Math.floor((c2.ba - aRR) / 2) + aRU,
			i1 = hz + Math.floor(vW * (aRR - 2 * aRU));
		hL.lineWidth = aJQ, hL.beginPath(), hL.moveTo(hz, bj), hL.lineTo(i1, bj), hL.lineTo(Math.floor(hz - aRU + vW * aRR), bj + a7A), hL.lineTo(hz - aRU, bj + a7A), hL.closePath()
	}
	this.aD5 = 1, this.aEZ = 0, this.aRc = 0, this.a4 = function() {
		aB.setState(6), aRP = 0, aRQ = 1, aRV = "rgba(0,220,120,0.4)", aRW = "rgba(0,0,0,0.8)", this.resize(), dY.dk = !0, aRZ = 1, aRa = 0, aRY = this.aD5 - 1, aRb = 0 === this.aEZ ? pC.aRd ? 1 : 0 : this.aEZ - 1, aRe(1)
	}, this.resize = function() {
		aRR = Math.floor((c3.h2.h3() ? .5 : .25) * c2.jd), aRS = aRR + 12, a7A = Math.floor(.125 * aRR), aRU = 3 * a7A, aRT = Math.floor(.225 * aRR), aRX = Math.floor(.3 * a7A), a78 = w.bc.hG(0, aRX)
	}, this.aL8 = function(lx) {
		lx === aRY && aRh()
	}, this.h6 = function(bi, bj) {
		var hz = Math.floor((c2.ba - aRS) / 2),
			i0 = Math.floor(.5 * (c2.bb - h4.gap - a7A - aRT)) + a7A + h4.gap;
		return hz < bi && bi < hz + aRS && i0 < bj && bj < i0 + aRT && (this.aAT(), qp.hA(bi, bj, !1), !0)
	}, this.aAT = function() {
		f2.aw.aLC(3260), a0.aw.a2Y()
	}, this.da = function() {
		6 === aB.ox() && (dY.dX > aKb + 12e3 && aRh(), 100 < (aRP += .07 * aRQ * (aRP < 16 ? 5 + aRP : 84 < aRP ? 105 - aRP : 17)) ? (aRP = 100, aRQ = -1) : aRP < 0 && (aRP = 0, aRQ = 1), aRV = "rgba(0," + Math.floor(190 - 1.9 * aRP) + "," + Math
			.floor(120 - 1.2 * aRP) + "," + (.4 + .004 * aRP) + ")", aRW = "rgba(0," + Math.floor(1.9 * aRP) + "," + Math.floor(1.2 * aRP) + "," + (.8 - .004 * aRP) + ")", dY.dk = !0)
	}, this.hJ = function() {
		var bi = Math.floor((c2.ba - aRS) / 2),
			bj = Math.floor(.5 * (c2.bb - h4.gap - a7A - aRT));
		! function(title, bj, aJQ, vW) {
			hL.fillStyle = aRW, aRm(bj, aJQ, 1), hL.fill(), hL.fillStyle = aRV, aRm(bj, aJQ, vW), hL.fill(), hL.strokeStyle = hM.hX, aRm(bj, aJQ, 1), hL.stroke(),
				function(aRo, bj) {
					w.bc.textAlign(hL, 1), w.bc.textBaseline(hL, 1), hL.font = a78, hL.fillStyle = hM.hX, hL.fillText(aRo, Math.floor(.5 * c2.ba), Math.floor(bj + .58 * a7A))
				}(title, bj)
		}(L(429), bj, 3, aRP / 100),
		function(bi, bj, ba, bb, f1) {
			hL.fillStyle = hM.r4, hL.fillRect(bi, bj, ba, bb), hL.lineWidth = 3, hL.strokeStyle = hM.hX, hL.strokeRect(bi, bj, ba, bb);
			var bw = Math.floor(.3 * bb);
			w.bc.textAlign(hL, 1), w.bc.textBaseline(hL, 1), hL.font = w.bc.hG(0, bw), hL.fillStyle = hM.hX, hL.fillText(f1, Math.floor(bi + ba / 2), Math.floor(bj + bb / 2 + .1 * bw))
		}(bi, bj + a7A + h4.gap, aRS, aRT, L(1))
	}
}

function aF9() {
	this.oo = function() {
		var al;
		if (oV.size < pF.aCt(23)) f2.aw.oW(0, 3259);
		else {
			var aD2 = oV.oX(6),
				bw = oV.oX(10),
				data = [];
			if (9 === aD2 || 10 === aD2 || 11 === aD2 || 13 === aD2) {
				for (al = 0; al < bw; al++) data.push([oV.oX(30), fE.v0.fq(5), oV.aCu(32), 0, oV.oX(30)]);
				8 === a0.dU && a0.dV().aCw(21, !0, {
					aD2: aD2,
					data: data
				})
			} else if (12 === aD2) {
				for (al = 0; al < bw; al++) data.push([oV.oX(20), oV.oX(30), oV.oX(30), oV.aCu(32), oV.oX(30), fE.v0.fq(5), fE.v0.fq(5)]);
				8 === a0.dU && a0.dV().aCw(21, !0, {
					aD2: aD2,
					data: data
				})
			} else {
				var aPT = oV.oX(16);
				if (oV.aJC(39 + 16 * aPT + bw * (0 === aD2 ? 111 : 1 === aD2 ? 101 : 2 === aD2 || 3 === aD2 ? 127 : 212))) {
					if (0 === aD2)
						for (al = 0; al < bw; al++) data.push([oV.oX(30), fE.uy.a6v(oV.oX(5)), oV.oX(16), oV.oX(30), oV.oX(30)]);
					else if (1 === aD2)
						for (al = 0; al < bw; al++) data.push([oV.oX(16), fE.uy.a6v(oV.oX(3)), oV.oX(16), fE.uy.a6v(oV.oX(5)), oV.oX(31), oV.oX(30)]);
					else if (2 === aD2 || 3 === aD2)
						for (al = 0; al < bw; al++) data.push([oV.oX(30), fE.uy.a6v(oV.oX(5)), oV.aCu(32), oV.oX(30), oV.oX(30)]);
					else
						for (al = 0; al < bw; al++) data.push([oV.oX(20), oV.oX(30), oV.oX(30), oV.oX(30), oV.oX(30), oV.aCu(32), oV.oX(30), fE.uy.a6v(oV.oX(5)), fE.uy.a6v(oV.oX(5))]);
					8 === a0.dU && a0.dV().aCw(21, !0, {
						aD2: aD2,
						data: data
					})
				} else f2.aw.oW(0, 3260)
			}
		}
	}, this.op = function() {
		if (oV.size < pF.aCt(29)) f2.aw.oW(0, 3265);
		else {
			var aRp = oV.oX(4),
				aRq = oV.oX(7),
				aRr = oV.oX(11);
			if (oV.aJC(29 + 16 * aRq + 16 * aRr + 11 * aRp)) {
				for (var data = [], al = 0; al < aRp; al++) {
					for (var aE9 = fE.uy.a6v(oV.oX(3)), aRs = oV.oX(8), xT = [], ct = 0; ct < aRs; ct++) xT.push(oV.oX(16));
					data.push({
						name: "[" + aE9 + "]",
						xT: xT
					})
				}
				8 === a0.dU && a0.dV().aCw(23, !0, data)
			} else f2.aw.oW(0, 3266)
		}
	}
}

function aIS() {
	this.id = 0, this.c1 = 0, this.yg = null, this.dI = null, this.a1X = null, this.yh = null, this.h2 = new yc, this.a4 = function() {
		var self, c1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (c1 = Android.getVersion()) < 12 || (self.c1 = c1, self.id = 1, self.dI = Android),
			function(self) {
				var c1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.a1X = mwIOSdataX, self.yh = window.webkit.messageHandlers.iosCommandA, c1 = self
					.a1X.version, self.c1 = c1 ? Number(c1) : 0)
			}(this),
			function(self) {
				var yg;
				try {
					if (!(yg = window.localStorage)) return;
					yg.setItem("tls7", "1"), yg.removeItem("tls7")
				} catch (error) {
					return
				}
				self.yg = yg
			}(this)
	}
}

function aIb() {
	this.kx = 0, this.gap = 0, this.jX = 0, this.a57 = 0, this.a4 = function() {
		this.resize()
	}, this.resize = function() {
		this.kx = .0022 * w.bc.jb(.5) * c2.jd, this.jX = this.kx / c2.je, this.gap = Math.max(Math.floor((c3.h2.h3() ? .0114 : .01296) * c2.jd), 2), this.a57 = this.gap / c2.je
	}
}

function aIN() {
	this.ak = new Array(4), this.aRw = new Uint16Array(2), this.rC = new Uint16Array(2), this.aMq = new Int32Array(2), this.iy = new Uint32Array(2), this.aRx = new Uint32Array(2), this.a7L = new Uint8Array(4), this.aRy = new Uint8Array(4), this.aO7 =
		new Uint32Array(4), this.aRz = new Uint32Array(5), this.jF = new Uint32Array(8), this.a08 = new Uint32Array(8), this.rV = new Uint16Array(16), this.rD = new Uint16Array(512), this.aS0 = new Uint16Array(512), this.aS1 = new Uint16Array(512),
		this.aS2 = new Uint16Array(0), this.a4 = function() {
			var bw = p.eP * p.eQ;
			this.aS2.length !== bw && (this.aS2 = new Uint16Array(bw))
		}, this.aS3 = function(ak, hp) {
			return ak[0] = hp, ak
		}, this.aS4 = function(ak, hp, hq) {
			return ak[0] = hp, ak[1] = hq, ak
		}, this.aS5 = function(ak, hp, hq, jA) {
			return ak[0] = hp, ak[1] = hq, ak[2] = jA, ak
		}, this.aS6 = function(ak, hp, hq, jA, aS7) {
			return ak[0] = hp, ak[1] = hq, ak[2] = jA, ak[3] = aS7, ak
		}
}

function aIA() {
	var bV, ba, bb, max, aS8, aBa, aSA, aSB, aSC, aSD, aSE, aSF, aSG, aSH, aS9 = 1e4;

	function aSO(aSN, aBd, bw) {
		var al;
		for (aSA[0] = aSN, al = 1; al < bw; al++) aSA[al] = aSA[al - 1] + aBd, aBd = aSA[al] >= aS9 ? (aSA[al] = aS9 - 1, -aBd) : aSA[al] < 0 ? (aSA[al] = 0, -aBd) : (aBd += 16384 <= eC.random() ? aBa : -aBa) < -aS8 ? -aS8 : aS8 < aBd ? aS8 : aBd
	}

	function aSQ(bi, bj, aSR, bw) {
		(aSR ? function(bi, bj, bw) {
			var al;
			for (al = 0; al < bw; al++) bV[bj * ba + bi + al] = aSA[al]
		} : function(bi, bj, bw) {
			var al;
			for (al = 0; al < bw; al++) bV[bj * ba + bi + al * ba] = aSA[al]
		})(bi, bj, bw)
	}

	function aSU(value, bw) {
		var al, oP, hd, v7 = value - aSA[bw - 1];
		if (0 != v7) {
			for (oP = 1 + ac.eB(Math.abs(v7), bw - 1), oP = v7 < 0 ? -oP : oP, aSA[bw - 1] = value, hd = (hd = bw - 1 - ac.eB(Math.abs(v7), Math.abs(oP))) < 1 ? 1 : bw - 2 < hd ? bw - 2 : hd, al = bw - 2; hd <= al; al--) aSA[al] += v7 - (bw - 1 -
				al) * oP;
			(v7 < 0 ? function(bw) {
				var al;
				for (al = bw - 2; 1 <= al; al--) aSA[al] < 0 && (aSA[al] = -aSA[al] - 1)
			} : function(bw) {
				var al;
				for (al = bw - 2; 1 <= al; al--) aSA[al] >= aS9 && (aSA[al] = 2 * aS9 - aSA[al] - 1)
			})(bw)
		}
	}

	function aSX(iJ, iM, bw) {
		for (var al = 0; al < bw; al++) iJ[al] = iM[al]
	}

	function aSY(ak) {
		for (var al = 0; al < ak.length - 1; al++) ak[al] = ak[al + 1] - ak[al];
		ak[ak.length - 1] = ak[ak.length - 3]
	}

	function aSZ(aOf, gap, sD) {
		aSB.push(aOf), aSC.push(gap), aSD.push(sD)
	}
	this.lu = function(bZ) {
		! function(bZ) {
			var al;
			for (ba = bZ[0], bb = bZ[1], aS8 = bZ[2], aBa = bZ[3], bV = new Int16Array(ba * bb), max = bb < ba ? ba : bb, aSA = new Int16Array(max), aSB = [], aSC = [], aSD = [], aSE = new Array(ba), aSF = new Array(bb), al = ba - 1; 0 <=
				al; al--) aSE[al] = !1;
			for (al = bb - 1; 0 <= al; al--) aSF[al] = !1;
			aSG = new Int16Array(ba), aSH = new Int16Array(bb)
		}(bZ),
		function(bw) {
			var aSN = eC.random() % aS9,
				aBd = eC.random() % (2 * aS8 + 1) - aS8;
			aSO(aSN, aBd, bw)
		}(max), aSX(aSH, aSA, bb), aSQ(0, 0, !0, ba);
		var bi, bj, bZ = bV[0],
			bw = max,
			aBd = eC.random() % (2 * aS8 + 1) - aS8;
		for (aSO(bZ, aBd, bw), aSX(aSG, aSA, ba), aSQ(0, 0, !1, bb), aSY(aSG), aSY(aSH), aSO(bV[ba - 1], aSG[ba - 1], bb), aSQ(ba - 1, 0, !1, bb), aSO(bV[ba * (bb - 1)], aSH[bb - 1], ba), aSU(bV[ba * bb - 1], ba), aSQ(0, bb - 1, !0, ba), aSE[ba -
				1] = aSE[0] = !0, aSF[bb - 1] = aSF[0] = !0, aSZ(0, ba, !0), aSZ(0, bb, !1), ! function() {
				var aSb, aOf;
				for (;;) {
					if (aSb = function() {
							var al, aSb = aSB.length - 1;
							for (al = aSb - 1; 0 <= al; al--) aSC[al] > aSC[aSb] && (aSb = al);
							return aSb
						}(), aSC[aSb] < 5) return;
					aOf = aSB[aSb] + ac.eB(aSC[aSb], 2), (aSD[aSb] ? function(bi) {
						var bw, aSe, al, a8y = 0,
							aSf = 0;
						for (; aSf < bb - 1;) {
							for (al = a8y + 1; al < bb; al++)
								if (aSF[al]) {
									aSf = al;
									break
								} bw = aSf - a8y + 1, aSO(bV[bi + ba * a8y], 0 === a8y ? aSG[bi] : aSA[aSe - 1] - aSA[aSe - 2], bw), aSU(bV[aSf * ba + bi], bw), aSQ(bi, a8y, !1, bw), aSe = bw, a8y = aSf
						}
						aSE[bi] = !0
					} : function(bj) {
						var bw, aSe, al, a8y = 0,
							aSf = 0;
						for (; aSf < ba - 1;) {
							for (al = a8y + 1; al < ba; al++)
								if (aSE[al]) {
									aSf = al;
									break
								} bw = aSf - a8y + 1, aSO(bV[bj * ba + a8y], 0 === a8y ? aSH[bj] : aSA[aSe - 1] - aSA[aSe - 2], bw), aSU(bV[bj * ba + aSf], bw), aSQ(a8y, bj, !0, bw), aSe = bw, a8y = aSf
						}
						aSF[bj] = !0
					})(aOf), aSZ(aOf, aSB[aSb] + aSC[aSb] - aOf, aSD[aSb]), aSC[aSb] = aOf - aSB[aSb] + 1
				}
			}(), bi = 0; bi < ba; bi++)
			if (!aSE[bi])
				for (bj = 0; bj < bb; bj++) aSF[bj] || ! function(bi, bj) {
					var value = bV[bj * ba + bi - 1] + bV[(bj - 1) * ba + bi],
						aEy = 2;
					aSE[bi + 1] && (aEy++, value += bV[bj * ba + bi + 1]);
					aSF[bj + 1] && (aEy++, value += bV[(bj + 1) * ba + bi]);
					bV[bj * ba + bi] = ac.eB(value, aEy)
				}(bi, bj)
	}, this.a4H = function() {
		return bV
	}, this.aBL = function() {
		bV = null
	}
}

function aHv() {
	var wK, wL, aME, a79, aSh, aSi, aSj, aSk, aSl, aSm;

	function aSo() {
		var aHO = o.aHO;
		for (aSl = aHO; aSl < o.bI; aSl++) aSn();
		for (aSl = o.db ? o.cF : 0; aSl < aHO; aSl++) {
			if (!aSr()) {
				for (var j9 = o.aSt = aSl; j9 < aHO; j9++) aSl = j9, aSn();
				return
			}
			aSs(aSi + wK * aSh + ac.eB(aSh, 2), aSj + wL * aSh + ac.eB(aSh, 2))
		}
	}

	function aTA(player) {
		for (var eG = eF.eG, eJ = eF.eJ, eH = eF.eH, eK = eF.eK, bj = eJ[player]; bj <= eK[player]; bj++)
			for (var bi = eG[player]; bi <= eH[player]; bi++) {
				var hd = ee.mQ(bi, bj);
				ee.lZ(hd) && (ee.mU(hd) ? ee.lW(hd, player) : ee.mV(hd, player))
			}
	}

	function aT9(ak, gd, ge) {
		var hB = ak[gd];
		ak[gd] = ak[ge], ak[ge] = hB
	}

	function aSr() {
		return function() {
			var al;
			for (al = 0; al < 8; al++)
				if (wK = ac.eB(aME * eC.random(), eC.value(100)), wL = ac.eB(a79 * eC.random(), eC.value(100)), aTF()) return 1;
			return
		}() || function() {
			var ea, eb, ct, h8, j9, h7;
			for (ea = ac.eB(aME * eC.random(), eC.value(100)), eb = ac.eB(a79 * eC.random(), eC.value(100)), ct = 40; 1 <= ct; ct--)
				for (h8 = a79 - ct; 0 <= h8; h8 -= 40)
					for (wL = (h8 + eb) % a79, j9 = 40; 1 <= j9; j9--)
						for (h7 = aME - j9; 0 <= h7; h7 -= 40)
							if (wK = (h7 + ea) % aME, aTF()) return 1;
			return
		}()
	}

	function aTF() {
		for (var i5, aTH, gap = ac.eB(aSh - aSk, 2), aBP = aSj + wL * aSh + gap, aBY = aSi + wK * aSh + gap, aTG = aBP + aSk - 1; aBP <= aTG; aTG--)
			for (aTH = aBY + aSk - 1; aBY <= aTH; aTH--)
				if (i5 = ee.mQ(aTH, aTG), !ee.lV(i5) || ee.mU(i5)) return;
		return 1
	}

	function aSs(h7, h8) {
		aSn(), aTI(h7 - 2, h8 - 2)
	}

	function aSn() {
		eF.hu[aSl] = 0, eF.fQ[aSl] = eF.a73[aSl] = 0, eF.lT[aSl] = [], eF.aOq[aSl] = [], eF.rW[aSl] = [], eF.a7t[aSl] = [], eF.eG[aSl] = eF.eJ[aSl] = eF.eH[aSl] = eF.eK[aSl] = 0
	}

	function aTI(h7, h8) {
		var i5, al, aTJ, aTK;
		for (eF.hu[aSl] = 1, eF.eG[aSl] = h7 + 10, eF.eJ[aSl] = h8 + 10, eF.eK[aSl] = eF.eH[aSl] = 0, aTJ = h7; aTJ < h7 + 4; aTJ++)
			for (aTK = h8; aTK < h8 + 4; aTK++)(h7 < aTJ && aTJ < h7 + 3 || h8 < aTK && aTK < h8 + 3) && (i5 = ee.mQ(aTJ, aTK), ee.lV(i5)) && (eF.eG[aSl] = Math.min(aTJ, eF.eG[aSl]), eF.eH[aSl] = Math.max(aTJ, eF.eH[aSl]), eF.eJ[aSl] = Math.min(aTK,
				eF.eJ[aSl]), eF.eK[aSl] = Math.max(aTK, eF.eK[aSl]), aSm[eF.fQ[aSl]] = i5, eF.fQ[aSl]++, ee.mV(i5, aSl));
		for (eF.a73[aSl] = eF.fQ[aSl], al = eF.fQ[aSl] - 1; 0 <= al; al--) ee.a9R(aSm[al], aSl) ? (ee.lW(aSm[al], aSl), eF.aOq[aSl].push(aSm[al])) : ee.a9X(aSm[al]) ? (ee.lW(aSm[al], aSl), eF.rW[aSl].push(aSm[al])) : ee.a9O(aSm[al]) && (ee.lW(aSm[
			al], aSl), eF.a7t[aSl].push(aSm[al]))
	}
	this.a4 = function() {
		if (aSm = new Array(12), aSk = 6, aSh = 10, aME = ac.eB(p.eP, aSh), a79 = ac.eB(p.eQ, aSh), aSi = ac.eB(p.eP - aSh * aME, 2), aSj = ac.eB(p.eQ - aSh * a79, 2), o.db)
			for (var al = 0; al < o.cF; al++) aSl = al, aSn(), eF.hu[aSl] = 1;
		(0 === o.data.spawningType ? aSo : 1 === o.data.spawningType ? (aSo(), function() {
			var aQI = o.a0e;
			o.aQH || aQI++;
			if (!(aQI < 3)) {
				for (var data = o.data, eA = (o.db ? o.cF : 0) + data.teamPlayerCount[0], oO = o.aSt, aSu = new Uint32Array(aQI), aSv = new Uint32Array(aQI), aSw = new Uint16Array(aQI), aSx = new Uint16Array(aQI), iZ = bN.iZ, eG = eF.eG,
						eJ = eF.eJ, eH = eF.eH, eK = eF.eK, aS0 = ix.aS0, aS1 = ix.aS1, al = eA; al < oO; al++) aS0[al] = eG[al] + eH[al] >> 1, aS1[al] = eJ[al] + eK[al] >> 1;
				for (al = eA; al < oO; al++) {
					var id = iZ[al];
					aSu[id] += aS0[al], aSv[id] += aS1[al]
				}
				var rA = bN.rA;
				for (al = 1; al < aQI; al++) {
					var v = Math.max(data.teamPlayerCount[rA[al]], 1);
					aSw[al] = ac.eB(aSu[al], v), aSx[al] = ac.eB(aSv[al], v)
				}
				var aPs = bN.aPs,
					aPt = bN.aPt,
					aPu = bN.aPu,
					rD = ix.rD;
				for (al = 0; al < 512; al++) rD[al] = al;
				for (var br = 0; br < 2 + (4 <= aQI); br++)
					for (al = eA; al < oO; al++) {
						for (var rF = al, yO = rD[rF], aSy = 1, eM = ac.a8N(aS0[yO] - aSw[1], aS1[yO] - aSx[1]), ct = 2; ct < aQI; ct++) {
							var a7W = ac.a8N(aS0[yO] - aSw[ct], aS1[yO] - aSx[ct]);
							a7W < eM && (eM = a7W, aSy = ct)
						}
						var aSz = iZ[rF];
						if (aSy !== aSz) {
							if (2 === br && 4 <= aQI) {
								var aT0 = Math.max((aSy + 1) % aQI, 1),
									aT1 = ac.a8N(aS0[yO] - aSw[aT0], aS1[yO] - aSx[aT0]);
								for (ct = 1; ct < aQI; ct++) a7W = ac.a8N(aS0[yO] - aSw[ct], aS1[yO] - aSx[ct]), eM < a7W && a7W < aT1 && (aT1 = a7W, aT0 = ct);
								aT0 !== aSz && ac.a8N(aSw[aSz] - aSw[aT0], aSx[aSz] - aSx[aT0]) < ac.a8N(aSw[aSz] - aSw[aSy], aSx[aSz] - aSx[aSy]) && (aSy = aT0)
							}
							var aT2 = rA[aSy],
								aT3 = aPt[aT2] + (o.db ? 0 : aPu[aT2]),
								rG = aPs[aT3],
								yP = rD[rG],
								aT4 = aPt[aT2 + 1];
							eM = ac.a8N(aS0[yP] - aSw[aSz], aS1[yP] - aSx[aSz]);
							for (var b3 = aT3 + 1; b3 < aT4; b3++) {
								var aT5 = aPs[b3],
									aT6 = rD[aT5];
								(a7W = ac.a8N(aS0[aT6] - aSw[aSz], aS1[aT6] - aSx[aSz])) < eM && (eM = a7W, rG = aT5)
							}
							rG < eA || oO <= rG || (yP = rD[rG], aSu[aSz] += aS0[yP] - aS0[yO], aSv[aSz] += aS1[yP] - aS1[yO], aSu[aSy] += aS0[yO] - aS0[yP], aSv[aSy] += aS1[yO] - aS1[yP], v = data.teamPlayerCount[rA[aSz]], aSw[aSz] = ac
								.eB(aSu[aSz], v), aSx[aSz] = ac.eB(aSv[aSz], v), v = data.teamPlayerCount[aT2], aSw[aSy] = ac.eB(aSu[aSy], v), aSx[aSy] = ac.eB(aSv[aSy], v), rD[rF] = yP, rD[rG] = yO)
						}
					}! function() {
						for (var rD = ix.rD, eG = eF.eG, eJ = eF.eJ, eH = eF.eH, eK = eF.eK, fQ = eF.fQ, a73 = eF.a73, aOq = eF.aOq, rW = eF.rW, a7t = eF.a7t, al = 0; al < 512; al++) {
							var aT8 = rD[al];
							if (aT8 !== al) {
								aT9(eG, al, aT8), aT9(eJ, al, aT8), aT9(eH, al, aT8), aT9(eK, al, aT8), aT9(fQ, al, aT8), aT9(a73, al, aT8), aT9(aOq, al, aT8), aT9(rW, al, aT8), aT9(a7t, al, aT8), aTA(al), aTA(aT8), rD[al] = al;
								for (var bb = aT8, eR = rD[bb]; eR !== al;) eR = rD[bb = eR];
								rD[bb] = aT8
							}
						}
					}()
			}
		}) : function() {
			var aHO = o.aHO;
			for (aSl = aHO; aSl < o.bI; aSl++) aSn();
			for (aSl = o.db ? o.cF : 0; aSl < aHO; aSl++)
				if (! function() {
						var spawningData = o.data.spawningData,
							h7 = spawningData[2 * aSl] + 1,
							spawningData = spawningData[2 * aSl + 1] + 1;
						if (3 < h7 && h7 < p.eP - 5 && 3 < spawningData && spawningData < p.eQ - 5 && ee.lV(ee.mQ(h7, spawningData)) && function(h7, h8) {
								var i5, aTH, aTG;
								for (aTG = h8; h8 - 6 < aTG; aTG--)
									for (aTH = h7; h7 - 6 < aTH; aTH--)
										if (i5 = ee.mQ(aTH, aTG), ee.mU(i5)) return;
								return 1
							}(h7 + 3, spawningData + 3)) return aSs(h7 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aSr()) {
						for (var j9 = o.aSt = aSl; j9 < aHO; j9++) aSl = j9, aSn();
						return
					}
					var h7 = aSi + wK * aSh + ac.eB(aSh, 2),
						h8 = aSj + wL * aSh + ac.eB(aSh, 2);
					aSs(h7, h8)
				}
		})(), cQ.cl[7] = eF.fQ[o.co]
	}, this.aTL = function(cC, xj, xi) {
		var al, h7, h8, i5, wK, wL;
		for (aSl = cC, al = 0; al < 20; al++)
			for (h7 = xj + al; xj - al <= h7; h7--)
				for (h8 = xi + al; xi - al <= h8; h8--)
					if ((h7 === xj + al || h7 === xj - al || h8 === xi + al || h8 === xi - al) && 3 < h7 && h7 < p.eP - 5 && 3 < h8 && h8 < p.eQ - 5 && ee.lV(ee.mQ(h7, h8)) && function(h7, h8) {
							var i5, aTH, aTG;
							for (aTG = h8; h8 - 6 < aTG; aTG--)
								for (aTH = h7; h7 - 6 < aTH; aTH--)
									if (i5 = ee.mQ(aTH, aTG), ee.mU(i5) && !ee.sV(aSl, i5)) return;
							return 1
						}(h7 + 3, h8 + 3)) {
						if (0 < eF.fQ[aSl]) {
							for (wL = wK = i5 = void 0, wK = eF.eH[aSl]; wK >= eF.eG[aSl]; wK--)
								for (wL = eF.eK[aSl]; wL >= eF.eJ[aSl]; wL--) i5 = 4 * (wL * p.eP + wK), ee.mR(aSl, i5) && (ee.a9Z(i5), eF.fQ[aSl]--);
							aSn()
						}
						return aTI(h7 - 1, h8 - 1), !0
					} return !1
	}, this.aTO = function(cC) {
		aSl = cC, aSr() ? aSs(aSi + wK * aSh + ac.eB(aSh, 2), aSj + wL * aSh + ac.eB(aSh, 2)) : aSn()
	}
}

function aIf() {
	var a76 = [];
	this.aMe = function(player, j1, n9, aTP) {
		player === o.co || j1 === o.co || !aTP && w.cO.cm(player) || w.cO.cm(j1) || this.qE(eF.nF[player] + " supported " + eF.nF[j1] + " with " + w.bL.gQ(n9) + " ressource" + (1 === n9 ? "." : "s."))
	}, this.qE = function(e0, nw) {
		e0 = {
			dX: hx.aLt(),
			e0: e0,
			nw: nw
		};
		a76.push(e0), 30 === a0.dU && a0.dV().qE(e0)
	}, this.clear = function() {
		a76 = [];
		var mL = a0.qA(30);
		mL && mL.clear()
	}, this.aTQ = function() {
		return a76
	}
}

function aTR() {
	var aTS, aTT, aTU, ww, aTV, ab = 0,
		dX = dY.dX;

	function aTZ() {
		! function() {
			if (!o.db) return;
			if (o.kg) return;
			if (2 !== o.de)
				if (aTV % 7 != 0) aTV++;
				else if (ww === o.x1) {
				if (!aTc()) return;
				hx.x0(ww), o.qm.da()
			} else {
				if (!aTc()) return;
				aTV++, ww++, cr.nI(), cr.kl(!0)
			}
			return 1
		}() && aTc() && di()
	}

	function aTa() {
		ab = 0, (o.db ? (dY.dk = hx.x0(ww - (aTV % 7 == 0 ? 0 : 1) + aTV % 7 / 7) || dY.dk, dc) : df.dg || !h9.kf ? dc : (dY.dk = !0, dl))()
	}

	function aTc() {
		var al, bw, aTd = a2.a3.t7,
			hp = a2.a3.t8,
			hq = a2.a3.t9,
			jA = a2.a3.tA,
			aTe = a2.a3.tB,
			aTf = a2.a3.tC;
		if (!(aTS >= aTf.length)) {
			if (aTf = aTf[aTS], aTe[aTS]) {
				for (bw = aTT + aTf, al = aTT; al < bw; al++) pH.pI.aKN(aTd[al], hp[al], hq[al], jA[al]);
				aTT += aTf, aTS++
			} else ++aTU >= aTf && (aTS++, aTU = 0);
			return __fx.replay.tick++, 1
		}
		cp.aG6("Replay file smaller than expected."), h9.ki(!1), o.de = 2
	}
	this.dZ = 0, this.a4 = function() {
		aTV = ww = aTU = aTT = aTS = 0, __fx.replay.registerHooks({
			advance: () => aTZ(),
			finishTick: () => dj.render(),
			requestRedraw: () => {
				dY.dk = !0
			},
			isEnded: () => 2 === o.de,
			getTickInterval: () => dY.dd
		})
	}, this.da = function() {
		var aTY;
		c2.da(), __fx.replay.frame() ? dh() : h9.a3l() < 1.7 ? 0 === ab ? dY.dX >= dX && (aTY = dY.dd / h9.a3l(), dX += aTY * Math.floor(1 + (dY.dX - dX) / aTY), 2 === o.de || df.dg || !h9.kf ? dh() : (aTZ(), dj.render()), ab++) : aTa() :
			function() {
				var aTY;
				if (dY.dX >= dX)
					if (2 === o.de || df.dg || !h9.kf) dh(), dX = dY.dX;
					else {
						for (aTY = dY.dd / h9.a3l(), 16 < (dY.dX - dX) / aTY && (dX = dY.dX - 16 * aTY); dY.dX >= dX && 2 !== o.de;) dX += aTY, aTZ();
						dj.render()
					} aTa()
			}(), dm(), dY.dk && (dY.dk = !1, dn())
	}, this.aRE = function() {
		a2.a3.tC.length - aTS <= 2 || cp.aG6("Replay file larger than expected.")
	}
}

function a9j() {
	var h1 = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + h1 + .5) / 15))
}

function a1I() {
	this.e5 = function(player, aKG) {
		return -1 !== aKG && !!e3.fi.a2r(player, aKG) && this.aKE(player, aKG, 0)
	}, this.aKE = function(player, aKG, aTg) {
		player = function(player, aKG, aTg) {
			var aLM = e3.fi.a2f(player, aKG);
			if (-1 === aLM) return -1;
			aLM = e3.fi.rQ(aLM, aKG);
			if (-1 === aLM) return -1;
			var aRO = e3.a1Q.aPc(aLM, aKG);
			if (0 <= aRO) return aRO;
			if (e3.a1Q.aLR()) return -1;
			if (0 <= (aRO = e3.a1Q.aPc(aKG, aLM))) return e3.a1Q.aKI(e3.a1Q.aDO(e3.a1Q.get(aRO)));
			if (aLM === aKG) return e3.a1Q.aKI(new Uint32Array([aLM, aKG]));
			if (0 <= (aRO = e3.a1J.aKE(aLM, aKG))) return aRO;
			return aTg ? function(aTi, player) {
				var aS2 = ix.aS2,
					c0 = (aS2.fill(0), [aTi]),
					aCh = (aS2[aTi] = 1, eN.aCh),
					aTj = -1,
					bw = c0.length;
				for (; - 1 === aTj && bw;) {
					for (var ak = [], al = 0; al < bw; al++)
						for (var eV = c0[al], aCT = aS2[eV], h1 = 0; h1 < 8; h1++) {
							var aTk, aTl, a2l = eV + aCh[h1],
								hd = 4 * a2l;
							ee.ef(hd) ? (aTk = aS2[a2l], aTl = aCT + 5 + ((1 & h1) << 1), 0 === aTk ? (ak.push(a2l), aS2[a2l] = aTl) : aS2[a2l] = Math.min(aTl, aTk)) : -1 === aTj && h1 % 2 == 0 && ee.mR(player, hd) && (aTj = eV)
						}
					bw = (c0 = ak).length
				}
				return -1 !== aTj ? function(a2n, aTn) {
					var aCh = eN.aCh,
						aTo = -1,
						sD = 0,
						cl = [];
					for (; aTn !== a2n;)(sD = function(eV, sD) {
						var aS2 = ix.aS2,
							aCh = eN.aCh,
							aCT = aS2[eV];
						if (aCT - aS2[eV + aCh[sD]] != 5 + ((1 & sD) << 1))
							for (var ct = 0; ct < 8; ct++) {
								var h1 = ct + sD + 6 & 7;
								if (aCT - aS2[eV + aCh[h1]] == 5 + ((1 & h1) << 1)) return h1
							}
						return sD
					}(aTn, sD)) !== aTo && (cl.push(aTn), aTo = sD), aTn += aCh[sD];
					cl.push(a2n);
					var aRO = e3.a1Q.aPc(cl[0], a2n);
					if (0 <= aRO) return aRO;
					return e3.a1Q.aKI(new Uint32Array(cl))
				}(aTi, aTj) : -1
			}(aKG, player) : -1
		}(player, aKG, aTg);
		return -1 !== player && (ix.ak[0] = e3.a1Q.get(player), !0)
	}
}

function aIV() {
	var gap, aTq = !1,
		a0V = 0,
		ba = 0,
		gi = 0,
		canvas = null,
		hZ = null,
		aTr = null;

	function aTw() {
		for (var al = o.a0e; 0 <= al; al--) aTr[al] = 0;
		for (al = cw.cx - 1; 0 <= al; al--) aTr[bN.iZ[cw.cy[al]]] += eF.fQ[cw.cy[al]];
		aTq = !0
	}

	function aTu() {
		for (var aU2, aU0 = 0, bw = 0, b3 = Math.floor(ba / 2), br = Math.floor(gi / 2), aU1 = 1.5 * Math.PI, al = o.a0e; 0 <= al; al--) bw += aTr[al], 0 === aTr[al] && aU0++;
		if (aTq = !1, hZ.clearRect(0, 0, ba, ba), 0 < bw)
			if (aU0 === o.a0e) {
				for (al = o.a0e; 0 <= al; al--)
					if (0 < aTr[al]) {
						! function(al, b3, br) {
							hZ.fillStyle = bN.aPp[bN.rA[al]], hZ.beginPath(), hZ.arc(b3, b3, br, 0, 2 * Math.PI), hZ.fill()
						}(al, b3, br);
						break
					}!
				function(b3) {
					var fontSize = b3 / 3;
					hZ.font = w.bc.hG(1, fontSize), hZ.fillStyle = hM.hX, hZ.fillText("100%", b3, b3 + .1 * fontSize)
				}(b3)
			} else {
				for (al = 0; al <= o.a0e; al++) 0 < aTr[al] && (! function(al, b3, br, aU1, aU2) {
					hZ.fillStyle = bN.aPp[bN.rA[al]], hZ.beginPath(), hZ.arc(b3, b3, br, aU1, aU2), hZ.lineTo(b3, b3), hZ.fill()
				}(al, b3, br, aU1, aU2 = aU1 + 2 * Math.PI * aTr[al] / bw), function(b3, br, aU1, aU2) {
					var bV = (aU2 - aU1) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * br * Math.min(bV, .37);
					fontSize < 8 || (aU1 = (aU1 + aU2) / 2, aU2 = (__fx.settings.detailedTeamPercentage ? (100 * bV).toFixed(2) : Math.floor(100 * bV + .5)) + "%", br *= .525 - Math.max(.6 * (bV - .7), 0), hZ.font = w.bc.hG(1, fontSize), hZ
						.fillStyle = hM.hX, hZ.fillText(aU2, b3 + Math.cos(aU1) * br, b3 + Math.cos(aU1 + 1.5 * Math.PI) * br))
				}(b3, br, aU1, aU2), 0 !== al && aU7(b3, br, aU1), aU1 = aU2);
				aU7(b3, br, 1.5 * Math.PI)
			}!
		function(b3, br) {
			hZ.beginPath(), hZ.arc(b3, b3, br, 0, 2 * Math.PI), hZ.stroke()
		}(b3, br)
	}

	function aU7(b3, br, aU9) {
		hZ.beginPath(), hZ.moveTo(b3, b3), hZ.lineTo(b3 + Math.cos(aU9) * br, b3 + Math.cos(aU9 + 1.5 * Math.PI) * br), hZ.stroke()
	}
	this.a4 = function() {
		if (o.fT) {
			a0V = 0, aTr = new Uint32Array(o.a0e + 1);
			for (var al = o.a0e; 0 <= al; al--) aTr[al] = 0;
			for (al = cw.cx - 1; 0 <= al; al--) aTr[bN.iZ[cw.cy[al]]] += 1;
			this.resize()
		} else aTr = hZ = canvas = null
	}, this.aTt = function() {
		return ba
	}, this.resize = function() {
		o.fT && (ba = Math.floor(.95 * (c3.h2.h3() && !o.kr ? .18 * c2.min : .13 * c2.jd)), ba = (ba *= 1 + (.5 + .2 * c3.h2.h3()) * o.kr) + ba % 2, gap = Math.max(1, .015 * ba), gi = Math.floor(ba - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = ba, canvas.height = ba, (hZ = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, hZ.strokeStyle = hM.hX, w.bc.textAlign(hZ, 1), w.bc.textBaseline(hZ, 1), aTu())
	}, this.jO = function(aTv) {
		aTv && aTw();
		var hB, aTv = this.fe();
		return bN.rA[aTv] || (aTv = function() {
			for (var ie = -1, al = o.a0e; 1 <= al; al--)(-1 === ie || aTr[al] > aTr[ie]) && (ie = al);
			return ie
		}(), hB = eF.fQ[fR[0]], -1 !== aTv && aTr[aTv] > hB) ? aTr[aTv] : hB
	}, this.aTy = function() {
		return a0V = 31, this.da(), this.fe()
	}, this.fe = function() {
		for (var ie = 0, al = o.a0e; 0 < al; al--) aTr[al] > aTr[ie] && (ie = al);
		return ie
	}, this.aAa = function(aTz) {
		for (var v = 0, cy = cw.cy, iZ = bN.iZ, bw = cw.cx, rD = ix.rD, al = 0; al < bw; al++) {
			var i5 = cy[al];
			iZ[i5] === aTz && (rD[v++] = i5)
		}
		ix.rC[0] = v
	}, this.rB = function(aTz) {
		for (var v = 0, cy = cw.cy, iZ = bN.iZ, bw = cw.cx, rD = ix.rD, al = 0; al < bw; al++) {
			var i5 = cy[al];
			iZ[i5] !== aTz && (rD[v++] = i5)
		}
		ix.rC[0] = v
	}, this.ib = function() {
		for (var v = 0, al = o.a0e; 0 <= al; al--) v += 0 < aTr[al];
		return v
	}, this.da = function() {
		o.fT && 32 <= ++a0V && (a0V = 0, aTw())
	}, this.hI = function() {
		o.fT && aTq && aTu()
	}, this.hJ = function() {
		o.fT && (o.kr ? hL.drawImage(canvas, h4.gap, h4.gap) : hL.drawImage(canvas, h4.gap, tr + 2 * h4.gap))
	}
}

function aUA() {
	this.aQN = function(hd) {
		var a82;
		return p.a4R(p.fo) && o.data.passableMountains && (a82 = ee.a2m(hd), this.aUB(o.co, a82) || this.aUC(o.co, a82)) && 0 !== (a82 = function(a2l) {
			for (var bi = eN.eX(a2l), bj = eN.eZ(a2l), max = Math.max(p.eP, p.eQ) - 2, aUF = max * max, sF = !1, aUG = 0, eM = 0; eM < max; eM++) {
				var aUH, eV = function(bi, bj, eM) {
					for (var al = 0; al <= eM; al++)
						for (var ct = -1; ct < 2; ct += 2)
							for (var j9 = -1; j9 < 2; j9 += 2)
								for (var b3 = 0; b3 < 2; b3++) {
									var hd = function(bi, bj) {
										if (eN.ec(bi, bj)) {
											bi = eN.ed(bi, bj), bj = eN.eg(bi);
											if (ee.lV(bj) && ee.a9Q(bj)) return bi
										}
										return 0
									}(bi + b3 * ct * al + (1 - b3) * j9 * eM, bj + b3 * j9 * eM + (1 - b3) * ct * al);
									if (hd) return hd
								}
					return 0
				}(bi, bj, eM);
				eV && (aUH = eN.eT(bi, bj, eV)) < aUF && (aUG = eV, aUF = aUH, sF || (sF = !0, max = Math.floor(Math.sqrt(aUH)) + 1))
			}
			return aUG
		}(eN.a2p(hd))) && (hd = eN.eg(a82), ee.lb(hd) || (hd = ee.la(hd)) !== o.co && jG.jH(hd, o.co)) ? a82 : 0
	}, this.aO6 = function(player, eV) {
		eV = eN.eg(eV);
		if (ee.lV(eV)) {
			if (ee.lb(eV)) ix.jF[0] = o.bI;
			else if (ee.la(eV) !== ix.jF[0]) return !1;
			for (var iZ = function(hd) {
					var iH = ee.iH,
						iZ = [];
					loop: for (var h1 = 3; 0 <= h1; h1--) {
						var iO = hd + iH[h1];
						if (ee.a83(iO)) {
							for (var id = ee.a2m(iO), al = 0; al < iZ.length; al++)
								if (id === iZ[al]) continue loop;
							ix.aO7[iZ.length] = iO, iZ.push(id)
						}
					}
					return iZ
				}(eV), bw = iZ.length, al = 0; al < bw; al++)
				if (this.aUB(player, iZ[al]) || this.aUC(player, iZ[al])) return ix.aO7[0] = ix.aO7[al], !0
		}
		return !1
	}, this.aUB = function(player, a82) {
		for (var a7t = eF.a7t[player], bw = a7t.length, a84 = Math.max(ac.eB(bw, 12), 1), iH = ee.iH, al = 0; al < bw; al += a84)
			for (var iN = a7t[al], h1 = 3; 0 <= h1; h1--) {
				var iO = iN + iH[h1];
				if (ee.a83(iO) && a82 === ee.a2m(iO)) return !0
			}
		return !1
	}, this.aUC = function(player, a82) {
		for (var a7t = eF.a7t[player], bw = a7t.length, iH = ee.iH, al = 0; al < bw; al++)
			for (var iN = a7t[al], h1 = 3; 0 <= h1; h1--) {
				var iO = iN + iH[h1];
				if (ee.a83(iO) && a82 === ee.a2m(iO)) return !0
			}
		return !1
	}
}

function aMO() {
	this.a9 = function(e0, aJD, aUI) {
		for (var aUJ = [], bw = e0.length, max = 0, al = 0; al < bw; al++) {
			var bV = e0.charCodeAt(al);
			aUJ.push(bV), max = Math.max(max, bV)
		}
		var aOY = max < 128 ? 7 : 16;
		for (aUI.pG(aJD, bw), aUI.pG(1, +(16 == aOY)), al = 0; al < bw; al++) aUI.pG(aOY, aUJ[al])
	}
}

function aHy() {
	var aFX, a2D, kO, aUK, bb, kT, fontSize, aUL, aUM, gt, aUN, canvas, hZ, kP, aUO;

	function bE(al) {
		return L(0 === al ? 430 : 1 === al ? 431 : 2 === al ? 432 : 433)
	}

	function aUU() {
		o.fT ? tr + 4 * h4.gap + bb + fd.aTt() > kX.bj ? hL.drawImage(canvas, 2 * h4.gap + fd.aTt(), tr + 2 * h4.gap) : hL.drawImage(canvas, h4.gap, tr + 3 * h4.gap + fd.aTt()) : hL.drawImage(canvas, h4.gap, tr + 2 * h4.gap)
	}

	function aUP() {
		canvas.width = aFX[0].width + gt, canvas.height = bb + gt, (hZ = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aFX[0].width + gt, bb + gt), hZ.translate(Math.floor(gt / 2), Math.floor(gt / 2)), hZ.lineWidth = gt, hZ.fillStyle = 1 === aFX[0].aUT ? hM.aUV : hM.hN, aUW(), hZ.fill(), hZ.strokeStyle = 1 === aFX[0].aUT ? hM.r1 : hM
			.hX, aUW(), hZ.stroke(), w.bc.textAlign(hZ, 1), w.bc.textBaseline(hZ, 1), hZ.fillStyle = 1 === aFX[0].aUT ? hM.r1 : hM.hX, hZ.font = kT[0], hZ.fillText(bE(aFX[0].aUS), Math.floor(aFX[0].width / 2), Math.floor(.72 * aUL[0] * bb)), hZ
			.font = kT[1], hZ.fillText(aFX[0].e0, Math.floor(aFX[0].width / 2), Math.floor((aUL[0] + .48 * aUL[1]) * bb))
	}

	function aUW() {
		hZ.beginPath(), hZ.moveTo(aUN, 0), hZ.lineTo(aFX[0].width - aUN, 0), hZ.lineTo(aFX[0].width, aUN), hZ.lineTo(aFX[0].width, bb - aUN), hZ.lineTo(aFX[0].width - aUN, bb), hZ.lineTo(aUN, bb), hZ.lineTo(0, bb - aUN), hZ.lineTo(0, aUN), hZ
			.closePath()
	}
	this.a4 = function() {
		a2D = 4, kO = aUK = kP = 0, aFX = [], kT = new Array(2), fontSize = new Array(2), (aUL = new Array(2))[0] = .3, aUL[1] = .7, aUM = new Array(4), canvas = document.createElement("canvas"), aUO = dY.dX + 2e3, this.resize()
	}, this.resize = function() {
		var al, ba;
		for (bb = Math.floor((c3.h2.h3() ? .062 : .047) * c2.jd), fontSize[0] = Math.floor(.85 * aUL[0] * bb), fontSize[1] = Math.floor(.85 * aUL[1] * bb), kT[0] = w.bc.hG(1, fontSize[0]), kT[1] = w.bc.hG(1, fontSize[1]), al = aUM.length -
			1; 0 <= al; al--) aUM[al] = this.measureText(bE(al) + "000", kT[0]);
		if (gt = Math.floor(1 + .05 * bb), aUN = Math.floor(.2 * bb), 0 < aFX.length) {
			for (al = aFX.length - 1; 0 <= al; al--) ba = this.measureText(aFX[al].e0 + "00", kT[1]), aFX[al].width = ba < aUM[al] ? aUM[al] : ba;
			aUP()
		}
	}, this.da = function() {
		0 !== a2D && (4 === a2D ? dY.dX > aUO && (a2D = 0, 1 === o.de) && hF.aGI(p.rs.ru[p.fo].name, 3, 1, 9) : (1 === a2D ? (0 === kO && (aUP(), kO = 1e-4), 1 <= (kO += .002 * (dY.dX - kP)) && (aUK = 0, a2D = 2, kO = 1), dY.dk = !0) : 2 ===
			a2D ? ((aUK += (dY.dX - kP) / 1e3) > aFX[0].aBp || 1 < aUK && 1 < aFX.length) && (a2D = 3) : 3 === a2D && ((kO -= .002 * (dY.dX - kP)) <= 0 && (kO = 0, aFX.shift(), a2D = 0 < aFX.length ? 1 : 0), dY.dk = !0), kP = dY.dX))
	}, this.measureText = function(e0, kT) {
		return hL.font = kT, Math.floor(hL.measureText(e0).width)
	}, this.cW = function(cI, al) {
		this.aGI(eF.nF[cI], al, 1, 0 === al ? 3 : 7)
	}, this.aGI = function(e0, aUS, aUT, aBp) {
		var ba;
		e0.length && (ba = (ba = this.measureText(e0 + "00", kT[1])) < aUM[aUS] ? aUM[aUS] : ba, aFX.push({
			e0: e0,
			width: ba,
			aUS: aUS,
			aUT: aUT,
			aBp: aBp
		}), 0 === a2D) && (kO = 0, a2D = 1, kP = dY.dX)
	}, this.hJ = function() {
		0 !== a2D && 0 !== kO && (kO < 1 ? (hL.globalAlpha = kO, aUU(), hL.globalAlpha = 1) : aUU())
	}
}

function aI6() {
	this.aO5 = new aUA
}

function aHw() {
	var b8, bi, bj, aUX, aUY, aUZ, dX, aUa, aUb, aUc, aUd, gap, zoom, aCM, aUe;

	function aUr(eD, eI, hd) {
		ee.lV(hd) || -1 === (eD = e3.fi.a2x(eD, eI)) ? cp.aGA(hd) : cp.aGC(eD)
	}

	function aUo(aUa) {
		for (var al = aCM.length - 1; 0 <= al; al--)
			if (aCM[al] === aUa) return 1
	}

	function aUm(aOf) {
		var al, bw;
		if (-1 !== aOf)
			for (bw = b8.length, al = 0; al < bw; al++)
				if (b8[al].gv && b8[al].bi + 1 === aOf % 4 && b8[al].bj + 1 === aOf >> 2) return al;
		return -1
	}

	function aUk(eD, eI) {
		var mL = gap / 2;
		return eD < bi - aUX - 3 * mL || bi + 3 * aUX + 5 * mL < eD || eI < bj - aUX - 3 * mL || bj + 2 * aUX + 3 * mL < eI ? -1 : 4 * (eI < bj - mL ? 0 : eI < bj + aUX + mL ? 1 : 2) + (eD < bi - mL ? 0 : eD < bi + aUX + mL ? 1 : eD < bi + 2 * aUX +
			3 * mL ? 2 : 3)
	}
	this.a17 = function() {
		var al, j9, aUg = [hM.a24, hM.aUh, hM.a25, hM.aUi, hM.aUj];
		for (b8 = new Array(10), al = 0; al < 10; al++) b8[al] = {
			id: al,
			gv: !1,
			eL: 0,
			canvas: [],
			bi: 0,
			bj: 0
		};
		for (b8[0].colors = [0, 1, 2, 3], b8[0].bi = 0, b8[0].bj = 0, b8[1].colors = [1, 4], b8[1].bi = 1, b8[1].bj = 0, b8[2].colors = [0, 1], b8[2].bi = -1, b8[2].bj = 0, b8[3].colors = [0], b8[3].bi = 0, b8[3].bj = 0, b8[4].colors = [0, 2],
			b8[4].bi = 1, b8[4].bj = 1, b8[5].colors = [3], b8[5].bi = 0, b8[5].bj = -1, b8[6].id = 20, b8[6].colors = [0], b8[6].bi = 1, b8[6].bj = -1, b8[7].id = 21, b8[7].colors = [0], b8[7].bi = 0, b8[7].bj = 1, b8[8].id = 16, b8[8]
			.colors = [0], b8[8].bi = 0, b8[8].bj = 0, b8[9].id = 10, b8[9].colors = [4], b8[9].bi = 2, b8[9].bj = 0, al = 0; al < 10; al++)
			for (j9 = 0; j9 < b8[al].colors.length; j9++) b8[al].canvas.push(function(id, aDe) {
				if (id < 20) return w.canvas.a26(kc.get(3), id, aDe);
				var aDe = kc.get(3).height,
					aW = w.bc.bd(aDe, aDe),
					be = w.bc.getContext(aW);
				20 === id ? be.drawImage(kc.get(18), 0, 0) : 21 === id && nM.bh.a2L(nM.gS.a29 + nM.gS.aEU, be, 0, 0, aDe);
				return aW
			}(b8[al].id, aUg[b8[al].colors[j9]]))
	}, this.o5 = function() {
		return b8
	}, this.a4 = function() {
		aCM = [], bi = bj = dX = 0, aUY = aUZ = -1e3, this.resize()
	}, this.resize = function() {
		aUX = Math.floor((c3.h2.h3() ? .075 : .0468) * c2.jd), zoom = aUX / kc.get(3).height, gap = Math.floor(aUX / 3)
	}, this.aAA = function(eD, eI) {
		return !!this.gv() && (dY.dk = !0, !!nM.bh.h6(eD, eI, aUb) || (eD = function(eD, eI) {
			aUZ = aUY = -1e3;
			var aUl = aUm(aUk(eD, eI));
			if (-1 === aUl) return 0;
			if (1 !== b8[aUl].colors[b8[aUl].eL])
				if (5 === aUl) {
					if (! function() {
							var hB = performance.now();
							aUe + 4e3 < hB && (aCM = []);
							aUe = hB
						}(), aUo(aUa)) return 1;
					aCM.push(aUa), 16 < aCM.length && aCM.shift()
				} else if (6 === aUl) {
				for (var al = aCM.length - 1; 0 <= al; al--) 0 === eF.hu[aCM[al]] && aCM.splice(al, 1);
				0 < aCM.length && (pN.jx(1, aCM, !0) && pH.cO.aCL(aCM, aUa), aCM = [])
			} else if (2 === aUl) a3P.aLD(aUa) && pH.a2J.aMd(kX.a7h(), aUa);
			else if (3 === aUl) o.db && pH.a2J.aKX(aUc);
			else if (0 === aUl)
				if (0 === b8[0].eL) {
					if (o.aUp && hx.aLt() < 350) return 1;
					a3R.yZ(4), pH.a2J.a7g(kX.a7h(), aUa)
				} else a3O.aOg(aUa, kX.a7h());
			else if (1 === aUl) pH.a2J.qD(kX.a7h(), aUc);
			else if (9 === aUl) pH.a2J.qG(kX.a7h());
			else {
				if (7 === aUl) return a3R.yZ(0), nM.bh.show(eD, eI), 2;
				if (4 === aUl) pN.jx(0, [aUa], !0) && pH.cO.aCJ(aUa);
				else {
					if (8 !== aUl) return 0;
					pH.a2J.aKa(kX.a7h(), aUd, aUa)
				}
			}
			return 1
		}(eD, eI), this.b1(), 2 === eD && (nM.bh.gv = !0), 0 < eD))
	}, this.vT = function(eD, eI) {
		this.gv() || (aUY = eD, aUZ = eI, dX = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = eN.m4(mouseX),
			coordY = eN.m6(mouseY),
			point = eN.eg(eN.ed(coordX, coordY));
		eN.m8(coordX, coordY) && aUr(mouseX, mouseY, point)
	}, this.click = function(eD, eI, aAI) {
		var eW = eN.m4(eD),
			eY = eN.m6(eI),
			eV = eN.ed(eW, eY),
			hd = eN.eg(eV),
			aUq = (c3.h2.h3() ? .025 : .0144) * c2.jd,
			hB = performance.now();
		return !(Math.abs(eD - aUY) > aUq || Math.abs(eI - aUZ) > aUq || dX + 500 < hB || (dX = hB, dE.dF() && (dE.m5 = eD, dE.m7 = eI, a3Z.da(1), a3V.da(1)), !eN.m8(eW, eY))) && (aAI ? (aUr(eD, eI, hd), !1) : df.dg || this.gv() || !w.cO.iV(o
			.co) || o.ke ? (this.b1(), !1) : (o.db ? 0 <= (aUc = aHk.aJs(eV)) && (b8[3].gv = !0) : 2 === o.de ? ee.lZ(hd) && (aUa = ee.la(hd), w.cO.cm(aUa) || (b8[0].gv = !0, b8[0].eL = 1, b8[7].gv = !0)) : (e3.a06.aLD(o.co, eV) && (b8[0]
				.gv = !0, b8[0].eL = 1, b8[1].gv = !0, b8[1].eL = 0, b8[9].gv = !0, b8[9].eL = 0), e3.a1O.aQQ(o.co, eV) && (b8[0].gv = !0, b8[0].eL = 1, b8[1].gv = !0, b8[1].eL = 1, aUc = ix.a08[7]), ee.a83(hd) ? (aUd = aHf.aO5.aQN(
				hd)) && (aUq = eN.eg(aUd), b8[8].gv = !0, aUa = ee.lb(aUq) ? o.bI : ee.la(aUq)) : (ee.mR(o.co, hd) && (aUb = o.co, b8[0].gv = !0, b8[0].eL = 1, b8[7].gv = !0), -1 !== (hB = aHk.aJu(eV)) && (ee.lb(hB << 2) ? (aUa = o
				.bI, jG.aQO(o.co) ? (b8[0].gv = !0, b8[0].eL = 0) : lF.ca(o.co) && (b8[0].gv = !0, b8[0].eL = 3)) : (aUa = ee.la(hB << 2), b8[0].eL = 1, b8[5].gv = function(aUa) {
				return !w.cO.cm(aUa) && !aUo(aUa) && pN.jx(1, [aUa], !1)
			}(aUa), b8[7].gv || w.cO.cm(aUa) || (aUb = aUa, b8[7].gv = !0), b8[4].gv = !w.cO.cm(aUa) && !cr.oF(aUa) && pN.jx(0, [aUa], !1), b8[6].gv = function(aUa) {
				if (0 === aCM.length) return !1;
				if (performance.now() > aUe + 4e3) return !(aCM = []);
				return !aUo(aUa) && ! function(aUa) {
					var al;
					if (o.fT)
						for (al = aCM.length - 1; 0 <= al; al--)
							if (!jG.jH(aUa, aCM[al])) return 1;
					return
				}(aUa)
			}(aUa), jG.jH(aUa, o.co) ? (jG.aQP(o.co, aUa) ? (b8[0].eL = 0, b8[0].gv = !0) : lF.ca(o.co) && (b8[0].eL = 3, b8[0].gv = !0), b8[0].gv = this.aUw()) : (b8[2].gv = !0, a3P.aLD(aUa) ? b8[2].eL = 0 : b8[2].eL = 1,
				b8[0].gv = !0))))), this.aUs(eD, eI)))
	}, this.aUs = function(eD, eI) {
		return bi = eD - Math.floor(aUX / 2), bj = eI - Math.floor(aUX / 2), !!this.gv()
	}, this.hA = function(eD, eI) {
		return !!this.gv() && (nM.bh.gv ? !nM.bh.uk(eD, eI) && (nM.bh.gv = !1, dY.dk = !0) : function(zd, eD, eI) {
			eD = aUk(eD, eI);
			if (0 <= aUm(eD)) return !1;
			if ((1 === eD || 6 === eD) && 0 <= aUm(2)) return !1;
			if ((6 === eD || 9 === eD) && 0 <= aUm(10)) return !1;
			return zd.b1(), dY.dk = !0
		}(this, eD, eI))
	}, this.b1 = function() {
		for (var al = b8.length - 1; 0 <= al; al--) b8[al].gv = !1, b8[al].eL = 0;
		nM.bh.gv = !1
	}, this.gv = function() {
		return this.aUw() || nM.bh.gv
	}, this.aUw = function() {
		for (var bw = b8.length, al = 0; al < bw; al++)
			if (b8[al].gv) return !0;
		return !1
	}, this.hJ = function() {
		if (this.gv())
			if (nM.bh.gv) nM.bh.hJ();
			else {
				var al, be = hL,
					j9 = b8,
					bw = j9.length,
					aV0 = (aUX + gap) / zoom;
				for (be.imageSmoothingEnabled = !0, be.setTransform(zoom, 0, 0, zoom, bi, bj), al = 0; al < bw; al++) j9[al].gv && hL.drawImage(j9[al].canvas[j9[al].eL], j9[al].bi * aV0, j9[al].bj * aV0);
				be.imageSmoothingEnabled = !1, be.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function q1() {
	var b, c, b7, aG;

	function g() {
		bA(), 2 !== o.data.tIncomeType && (o.data.tIncomeData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		2 === o.data.tIncomeType && w.x.bD(b7.bE(), o.data.tIncomeData, 255)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(20), [new f("⬅️ " + L(1), g)]), c = new j(b.k, (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(19), L(11), L(9)],
			value: o.data.tIncomeType
		}, function(ab) {
			bA(), 2 !== ab || o.data.tIncomeData || (o.data.tIncomeData = new Uint8Array(o.bI), o.data.tIncomeData.fill(32)), o.data.tIncomeType = ab, a0.a1(26)
		})), aG.push(aT)
	}(aG = []), function(aG) {
		var aT;
		1 === o.data.tIncomeType && ((aT = new aU).aV("Value"), aT.aX(new aa({
			ab: -1,
			value: o.data.tIncomeValue
		}, 1, 0, function(aY) {
			var value = ac.ad(Math.floor(aY.target.value), 0, 255);
			aY.target.value = o.data.tIncomeValue = value
		})), aG.push(aT))
	}(aG), function(aG) {
		var aT;
		2 === o.data.tIncomeType && ((aT = new aU).aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.tIncomeData, 4)), aT.aX(b7), aG.push(aT))
	}(aG), aG))
}

function pj() {
	var x8, aCy, aCz, aD1;

	function aV1(id) {
		0 !== c3.id || a5.c0.data[140].value ? 0 === id ? a0.a1(8, 1, new a5B(16)) : a0.a1(2) : a0.aw.aD9(a0.dU, 0 === id ? 16 : 0)
	}
	this.show = function() {
		c3.h2.setState(12), x8.show(), this.resize(), this.da()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), aCy.resize()
	}, this.da = function() {
		8 === aB.ox() && (2 <= cQ.hE ? aCz[2].aV8 === hM.a5s && aCz[2].bQ(0) : aCz[2].aV8 !== hM.a5s && aCz[2].bQ(hM.a5s), !o.ke && df.kv(o.co) ? aCz[1].aV8 === hM.a5s && aCz[1].bQ(0) : aCz[1].aV8 !== hM.a5s && aCz[1].bQ(hM.a5s), !o.ke && a19
			.aO4(o.co) ? aCz[0].aV8 === hM.a5s && aCz[0].bQ(0) : aCz[0].aV8 !== hM.a5s && aCz[0].bQ(hM.a5s))
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, aCz = [new f(L(434), function() {
		aV1(0)
	}), new f(L(221), function() {
		a0.a1(16)
	}), new f(L(401), function() {
		a0.a1(17)
	}), new f(L(435), function() {
		a0.aw.aD7()
	}, 0, 0, 1), new f(L(63), function() {
		a0.a1(3, 1)
	}), new f(L(358), function() {
		a0.a1(18)
	}), new f(L(407), function() {
		a0.a1(31)
	}), new f(L(436), function() {
		a0.aw.aD4(2)
	}), new f(L(255), function() {
		aV1(1)
	}), new f("🔒 " + L(370), function() {
		a0.a1(32)
	}), new f(L(437), function() {
		var jl, jZ;
		(jl = []).push(["Wiki", (jZ = "https://territorial.io/") + "wiki/gold"]), jl.push(["Team Games", jZ + "log/team"]), jl.push(["Battle Royale Games", jZ + "log/br"]), jl.push(["1v1 Games", jZ + "log/1v1"]), jl.push(["Zombie Games",
			jZ + "log/zombies"
		]), jl.push(["Changelog", jZ + "changelog"]), 2 !== c3.id && jl.push(["Android App", yr.aKA]), 1 !== c3.id && jl.push(["iOS App", yr.ys]), 0 === c3.id && jl.push(["Patreon", yr.a6o]), jl.push(["Terms", yr.aV6]), jl.push([
			"Privacy", yr.aV7
		]), a0.a1(4, 1, new st(L(437), w.bc.jk(jl), !1, [new f("⬅️ " + L(1), function() {
			a0.a1(1)
		})]))
	}), new f(L(438), function() {
		a0.a1(4, 1, new st(L(438), pC.c1 + "<br>" + f2.aw.a5W("/changelog") + "<br><br><pC>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></pC>", !0, [new f("⬅️ " + L(1),
				function() {
					a0.a1(1)
				})]))
	}), new f(L(439), function() {
		a0.a1(4, 1, new st(L(439), L(447) + "<br>" + L(448), !1, [new f("⬅️ " + L(1), function() {
			a0.a1(1)
		}), new f(L(449), function() {
			c3.h2.yd(), a0.a1(1)
		})]))
	}), new f("👁️ " + L(440), function() {
		c3.h2.yi(), a0.a1(4, 1, new st(L(450), L(451) + " " + f2.aw.a5W("/privacy"), !1, [new f("⬅️ " + L(1), function() {
			a0.a1(1)
		})]))
	})], aD1 = [new f("⬅️ " + L(1), function() {
		a0.aw.aD6()
	})], 8 === aB.ox() && (aCz.unshift(new f(L(443), function() {
		a0.a1(30)
	})), aCz.unshift(new f(L(444), function() {
		2 <= cQ.hE && (a0.au(), kp.hD(), dY.dk = !0)
	}, 0, 1)), aCz.unshift(new f(L(445), function() {
		!o.ke && df.kv(o.co) && (pH.a2J.qc(), a0.au(), df.dg) && df.hD()
	}, 0, 1)), aCz.unshift(new f(L(446), function() {
		!o.ke && a19.aO4(o.co) && (a3R.yZ(2), pH.a2J.aAP(), a0.au(), df.dg) && df.hD()
	}, 0, 1))), 1 === c3.id && 5 <= c3.c1 && aCz.push(new f(L(441), function() {
		c3.h2.yj()
	})), x8 = new e(L(442), aD1), aCy = new a54(aCz, x8.k)
}

function ux() {
	var aV9 = new Uint8Array(78);
	this.a4 = function() {
		var al;
		for (aV9[50] = 37, al = 0; al < 10; al++) aV9[al + 3] = al + 1;
		for (al = 0; al < 26; al++) aV9[al + 20] = al + 11, aV9[al + 52] = al + 38
	}, this.se = function(e0) {
		return e0.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.aOu = function(e0, size) {
		if ((e0 = this.se(e0)).length > size) return e0.substring(0, size);
		for (; e0.length < size;) e0 = "-" + e0;
		return e0
	}, this.sd = function(e0) {
		for (var aTk = aV9, bw = e0.length, ak = new Uint8Array(bw), al = 0; al < bw; al++) ak[al] = aTk[e0.charCodeAt(al) - 45];
		return ak
	}, this.sc = function(kK) {
		pF.lu(6 * kK.length), this.aVA(kK), oV.a4(pF.oU)
	}, this.aVA = function(kK) {
		for (var bw = kK.length, ba = pF, al = 0; al < bw; al++) ba.pG(6, kK[al])
	}, this.zQ = function(e0) {
		this.aVA(this.sd(e0))
	}, this.zO = function(e0, size) {
		this.aVA(this.sd(this.aOu(e0, size)))
	}, this.fG = function(e0, size) {
		for (var ak = this.sd(this.aOu(e0, size)), bV = 0, dG = 1, al = ak.length - 1; 0 <= al; al--) bV += dG * ak[al], dG *= 64;
		return bV
	}
}

function aMN() {
	this.zQ = function(e0) {
		for (var bw = e0.length, ba = pF, al = 0; al < bw; al++) ba.pG(16, e0.charCodeAt(al))
	}
}

function aIh() {
	this.aVB = function() {
		for (var bi, bj, al = l4 - 1; 0 <= al; al--) bi = ac.eB(l6[al], 4) % p.eP, bj = ac.eB(l6[al], 4 * p.eP), eF.eG[kz] = Math.min(bi, eF.eG[kz]), eF.eJ[kz] = Math.min(bj, eF.eJ[kz]), eF.eH[kz] = Math.max(bi, eF.eH[kz]), eF.eK[kz] = Math.max(
			bj, eF.eK[kz])
	}, this.lI = function() {
		var h1, i5, al, bw = eF.lT[kz].length,
			iH = ee.iH;
		loop: for (al = bw - 1; 0 <= al; al--) {
			for (h1 = 3; 0 <= h1; h1--)
				if (i5 = eF.lT[kz][al] + iH[h1], ee.lb(i5) || ee.lZ(i5) && ee.la(i5) !== kz) {
					ee.mT(eF.lT[kz][al], kz);
					continue loop
				} eF.lT[kz][al] = eF.lT[kz][bw - 1], eF.lT[kz].pop(), bw--
		}
	}, this.lJ = function() {
		var player = kz,
			aOq = eF.aOq,
			rW = eF.rW,
			a7t = eF.a7t,
			bw = aOq[player].length,
			iH = ee.iH;
		loop: for (var al = bw - 1; 0 <= al; al--) {
			for (var aVC = !1, aVD = !1, h1 = 3; 0 <= h1; h1--) {
				var i5 = aOq[player][al] + iH[h1];
				if (ee.a9S(i5, player)) continue loop;
				aVC = aVC || ee.ef(i5), aVD = aVD || ee.a9P(i5)
			}
			aVC ? rW[player].push(aOq[player][al]) : aVD ? a7t[player].push(aOq[player][al]) : ee.mV(aOq[player][al], player), aOq[player][al] = aOq[player][bw - 1], aOq[player].pop(), bw--
		}
	}, this.aVE = function() {
		eF.fQ[l3] -= l4
	}, this.aVF = function(border) {
		for (var bw = border.length, al = bw - 1; 0 <= al; al--) ee.mR(l3, border[al]) || (border[al] = border[bw - 1], border.pop(), bw--)
	}, this.aVG = function(border) {
		for (var bw = border.length, al = bw - 1; 0 <= al; al--) !ee.mR(l3, border[al]) && ee.lV(border[al]) && (border[al] = border[bw - 1], border.pop(), bw--)
	}, this.aVH = function(border) {
		for (var h1, i5, bw = border.length, iH = ee.iH, al = bw - 1; 0 <= al; al--)
			for (h1 = 3; 0 <= h1; h1--)
				if (i5 = border[al] + iH[h1], ee.a9S(i5, l3)) {
					eF.aOq[l3].push(border[al]), border[al] = border[bw - 1], border.pop(), bw--;
					break
				}
	}, this.aVI = function() {
		for (var h1, i5, iH = ee.iH, al = l4 - 1; 0 <= al; al--)
			for (h1 = 3; 0 <= h1; h1--) i5 = l6[al] + iH[h1], ee.sV(l3, i5) && ee.a9W(i5) && (eF.aOq[l3].push(i5), ee.lW(i5, l3))
	}, this.aVJ = function() {
		var bi, bj;
		loop: for (; eF.eJ[l3] < eF.eK[l3];) {
			for (bi = eF.eH[l3]; bi >= eF.eG[l3]; bi--)
				if (ee.mR(l3, 4 * (eF.eJ[l3] * p.eP + bi))) break loop;
			eF.eJ[l3]++
		}
		loop: for (; eF.eJ[l3] < eF.eK[l3];) {
			for (bi = eF.eH[l3]; bi >= eF.eG[l3]; bi--)
				if (ee.mR(l3, 4 * (eF.eK[l3] * p.eP + bi))) break loop;
			eF.eK[l3]--
		}
		loop: for (; eF.eG[l3] < eF.eH[l3];) {
			for (bj = eF.eK[l3]; bj >= eF.eJ[l3]; bj--)
				if (ee.mR(l3, 4 * (bj * p.eP + eF.eG[l3]))) break loop;
			eF.eG[l3]++
		}
		loop: for (; eF.eG[l3] < eF.eH[l3];) {
			for (bj = eF.eK[l3]; bj >= eF.eJ[l3]; bj--)
				if (ee.mR(l3, 4 * (bj * p.eP + eF.eH[l3]))) break loop;
			eF.eH[l3]--
		}
	}, this.jH = function(player, cC) {
		return 0 === bN.iZ[player] || bN.iZ[player] !== bN.iZ[cC]
	}, this.aQO = function(player) {
		for (var al, eR, bw = eF.aOq[player].length, iH = ee.iH, h1 = 3; 0 <= h1; h1--)
			for (eR = iH[h1], al = 0; al < bw; al++)
				if (ee.lb(eF.aOq[player][al] + eR)) return !0;
		return !1
	}, this.aOd = function(player) {
		for (var al, eR, bw = eF.aOq[player].length, iH = ee.iH, h1 = 3; 0 <= h1; h1--)
			for (eR = iH[h1], al = 0; al < bw; al++)
				if (ee.mU(eF.aOq[player][al]) && ee.lb(eF.aOq[player][al] + eR)) return !0;
		return !1
	}, this.aQP = function(ik, il) {
		for (var al, hB, eR, i5, aHM = eF.aOq[ik].length, aHN = eF.aOq[il].length, iH = (aHN < aHM && (hB = ik, ik = il, il = hB, hB = aHM, aHM = aHN, 0), ee.iH), h1 = 3; 0 <= h1; h1--)
			for (eR = iH[h1], al = 0; al < aHM; al++)
				if (i5 = eF.aOq[ik][al] + eR, ee.lZ(i5) && ee.la(i5) === il) return !0;
		return !1
	}, this.aOe = function(ik, il) {
		for (var al, eR, i5, aHM = eF.aOq[ik].length, iH = ee.iH, h1 = 3; 0 <= h1; h1--)
			for (eR = iH[h1], al = 0; al < aHM; al++)
				if (ee.mU(eF.aOq[ik][al]) && (i5 = eF.aOq[ik][al] + eR, ee.lZ(i5)) && ee.la(i5) === il) return !0;
		return !1
	}
}

function aVK() {
	var aVL, aVM, a2N, aVN = ["wss://", "/s50/", "/s51/", "/s52/"],
		aVO = 0;

	function aVY() {
		f2.aw.aVY(aVL, aVM)
	}

	function aVZ(aY) {
		f2.aDA.oT(aVL, new Uint8Array(aY.data))
	}

	function aVb() {}

	function aVa(aY) {
		f2.aw.aVa(aVL, aY)
	}
	this.a4 = function(ab, ph, aVP) {
		aVL = ab, aVM = ph,
			function(aVP) {
				aVP = pC.aVW ? "ws://localhost:" + (7130 + aVL) + "/" : aVP ? aVN[0] + "game.territorial.io/x0" + aVL + "/" : aVN[0] + f2.aw.aVX[aVL] + aVN[1 + pC.aK8];
				(a2N = new WebSocket(aVP)).binaryType = "arraybuffer", a2N.onopen = aVY, a2N.onmessage = aVZ, a2N.onclose = aVa, a2N.onerror = aVb
			}(aVP)
	}, this.aVR = function() {
		return a2N.readyState === a2N.CONNECTING
	}, this.a5e = function() {
		return a2N.readyState === a2N.OPEN
	}, this.aVS = function() {
		return aVO
	}, this.aM8 = function() {
		aVO = 1
	}, this.aVT = function() {
		return this.aVR() || this.a5e()
	}, this.aVU = function(ph) {
		aVM = ph
	}, this.aM7 = function() {
		return aVM
	}, this.send = function(oU) {
		this.a5e() && a2N.send(oU)
	}, this.close = function(aVV) {
		this.aVT() && (this.b1(), a2N.close(aVV))
	}, this.b1 = function() {
		a2N.onopen = null, a2N.onmessage = null, a2N.onclose = null, a2N.onerror = null
	}
}

function aHn() {
	this.bc = new jQ, this.x = new aVc, this.cO = new iS, this.bL = new aVd, this.hZ = new aEI, this.a14 = new bW, this.canvas = new aJ0, this.color = new aVe, this.xR = new aVf, this.a4 = function() {
		this.bc.jT()
	}
}

function aVg() {
	this.a9 = function() {
		var nH = function() {
				for (var tC = a2.a3.tC, bw = tC.length, max = 0, al = 0; al < bw; al++) max = Math.max(max, tC[al]);
				return vt(Math.max(max, 1))
			}(),
			ba = (ga = o.data, (ba = zU).a4(), ba.pG(12, pC.rVersion), ba.ab += 43, ba.pG(2, ga.mapType), ba.pG(8, ga.mapProceduralIndex), ba.pG(8, ga.mapRealisticIndex), ba.pG(14, ga.mapSeed), ba.aOE(ga.mapName, 5), 2 === ga.mapType && ba.aOF(ga
				.canvas), ba.pG(1, ga.passableWater), ba.pG(1, ga.passableMountains), ba.pG(10, ga.playerCount), ba.pG(10, ga.humanCount), ba.pG(9, ga.selectedPlayer), ba.pG(1, ga.gameMode), ba.pG(2, ga.playerMode), ba.pG(2, ga
				.battleRoyaleMode), ba.pG(4, ga.numberTeams), ba.pG(1, ga.isZombieMode), ba.pG(1, ga.isContest), ba.pG(1, ga.isReplay), ba.aIn(ga.elo, 2, 14), ba.pG(1, ga.colorsType), ba.pG(1, ga.colorsPersonalized), ba.aIn(ga.colorsData, 10,
				18), ba.pG(1, ga.selectableColor), ba.aIn(ga.teamPlayerCount, 4, 10), ba.pG(1, ga.neutralBots), ba.pG(2, ga.botDifficultyType), ba.pG(4, ga.botDifficultyValue), ba.aIn(ga.botDifficultyTeam, 4, 4), ba.aIn(ga.botDifficultyData,
				10, 4), ba.pG(2, ga.spawningType), ba.pG(14, ga.spawningSeed), ba.aIn(ga.spawningData, 11, 12), ba.pG(1, ga.selectableSpawn), ba.pG(2, ga.playerNamesType), ba.aOD(ga.playerNamesData, 10, 5), ba.pG(1, ga.selectableName), ba.pG(
				2, ga.aIncomeType), ba.pG(8, ga.aIncomeValue), ba.aIn(ga.aIncomeData, 10, 8), ba.pG(2, ga.tIncomeType), ba.pG(8, ga.tIncomeValue), ba.aIn(ga.tIncomeData, 10, 8), ba.pG(2, ga.iIncomeType), ba.pG(8, ga.iIncomeValue), ba.aIn(ga
				.iIncomeData, 10, 8), ba.pG(2, ga.sResourcesType), ba.pG(11, ga.sResourcesValue), ba.aIn(ga.sResourcesData, 10, 11), ba.aIn(ga.lt, 10, 30), ! function(nH) {
				var ba = zU,
					t7 = a2.a3.t7,
					hp = a2.a3.t8,
					hq = a2.a3.t9,
					jA = a2.a3.tA,
					bw = t7.length;
				ba.pG(5, nH), ba.pG(30, bw), ba.pG(30, a2.a3.tC.length);
				for (var al = 0; al < bw; al++) {
					var b3 = t7[al];
					ba.pG(4, b3), ba.pG(9, hp[al]), 0 === b3 ? ba.pG(22, hq[al]) : 1 === b3 ? (ba.pG(10, hq[al]), ba.pG(10, jA[al])) : 2 === b3 ? (ba.pG(10, hq[al]), ba.pG(9, jA[al])) : 3 === b3 ? (ba.pG(10, hq[al]), ba.pG(27, jA[al])) :
						4 === b3 ? (ba.pG(10, hq[al]), ba.pG(16, jA[al])) : 5 === b3 || 6 === b3 ? ba.pG(10, hq[al]) : 7 === b3 ? ba.pG(1, hq[al]) : 10 === b3 && (ba.pG(20, hq[al]), ba.pG(22, jA[al]))
				}
			}(nH), ! function(nH) {
				for (var ba = zU, tB = a2.a3.tB, tC = a2.a3.tC, bw = tB.length, al = 0; al < bw; al++) ba.pG(1, tB[al]), ba.pG(nH, tC[al])
			}(nH), zU.ab),
			ga = ac.eB(ba - 1, 6) + 1,
			nH = (pF.aCt(6 * ga) !== zU.ak.length && zU.ak.push(0), ! function() {
				var ba = zU;
				ba.ab = 24, ba.pG(31, ba.ak.length), ba.ab = 12, ba.pG(12, function() {
					for (var ak = zU.ak, bw = ak.length, sq = pC.rVersion, al = 3; al < bw; al++) sq = sq + ak[al] & 4095;
					return sq
				}())
			}(), oV.a4(zU.ak), gP.fF.aB7(gP.fF.aB8(ga)));
		return oV.d1(), zU.a4(), nH
	}
}

function aVo() {
	this.cW = function(player, eV) {
		aHa.aTL(player, eN.eX(eV), eN.eZ(eV)) && (dY.dk = !0), o.kg && this.da()
	}, this.da = function() {
		o.db = !1;
		for (var al = 0; al < o.cF; al++) 0 !== eF.hu[al] && 0 === eF.fQ[al] && aHa.aTO(al);
		0 !== eF.hu[o.co] ? (cQ.cl[7] = eF.fQ[o.co], cQ.cl[8] = eF.fa[o.co], kX.aCZ(), hx.aLn(), o.ke || ut.aBr(eF.eG[o.co] - 5, eF.eJ[o.co] - 5, eF.eH[o.co] + 5, eF.eK[o.co] + 5), a3Y.a4()) : qO.show(!1, !1, !1, !0), cp.aFz(18), cr.nI(), cr.kl(!
			0), a3S.aw.a0d(), o4.b1(), o.qm = null, dj.aVp = !0, dj.x6(), o.kg && c3.h2.setState(1)
	}
}

function a5B(id, bZ, aVq) {
	var x8, a3d;

	function aVu() {
		a3d.am.innerHTML += "<br>" + L(454)
	}

	function aW2() {
		var j9 = 1;
		a0.a1(4, 1, new st(L(455), L(456), !1, [new f("🔄 Reload", function() {
			j9 && (setTimeout(function() {
				a0.a1(1)
			}, 5e3), c3.h2.yn()), j9 = 0
		}, hM.a5t)]))
	}

	function aVt() {
		pF.lu(90), pF.pG(30, Math.floor(ac.pow(30) * Math.random())), pF.pG(30, Math.floor(ac.pow(30) * Math.random())), pF.pG(30, Math.floor(ac.pow(30) * Math.random())), oV.a4(pF.oU), a5.a6.a7(110, gP.fF.aB7(gP.fF.aB8(15))), f2.a5g.zN()
	}
	this.aVr = !0, this.aCv = id, this.show = function() {
		x8.show(), this.resize(), 15 === id ? (f2.aw.aVs(id) ? aVt : aVu)() : 16 === id ? f2.aw.aVs(id) ? f2.zJ.a8X(2) : aVu() : 17 === id ? f2.aw.aVs(id) ? f2.zJ.a8X(3) : aVu() : 18 === id ? (f2.aw.close(0, 3253), f2.aw.a1l(0, id, 0), aVu()) :
			21 === id ? f2.aw.aVs(id) ? f2.aF6.aVv(bZ.aD2, bZ.gd, bZ.ge) : aVu() : 22 === id ? f2.aw.aVs(id) ? f2.aF6.aVw(bZ.aD2, bZ.aVx, bZ.aVy) : aVu() : 23 === id ? f2.aw.aVs(id) ? f2.aF6.aVz(bZ.xQ, bZ.aD8) : aVu() : 24 === id ? f2.aw.aVs(
			id) ? f2.aF6.aW0(bZ.xQ, bZ.gd, bZ.ge) : aVu() : 25 === id ? f2.aw.aVs(id) ? f2.a5g.zW(bZ) : aVu() : 28 === id ? f2.aw.aVs(id) ? f2.aF6.aW1(bZ.aD2, bZ.aVx, bZ.aVy) : aVu() : 29 === id ? f2.aw.aVs(id) ? f2.a5g.zP(bZ) : aVu() : 30 ===
			id && (f2.aw.aVs(id) ? fI.aM9() || aW2() : aVu())
	}, this.aMA = function() {
		15 === id ? aVt() : 16 === id ? f2.zJ.a8X(2) : 17 === id ? f2.zJ.a8X(3) : 18 === id ? a0.a1(8, this.ph, new a5B(16)) : 21 === id ? f2.aF6.aVv(bZ.aD2, bZ.gd, bZ.ge) : 22 === id ? f2.aF6.aVw(bZ.aD2, bZ.aVx, bZ.aVy) : 23 === id ? f2.aF6.aVz(
			bZ.xQ, bZ.aD8) : 24 === id ? f2.aF6.aW0(bZ.xQ, bZ.gd, bZ.ge) : 25 === id ? f2.a5g.zW(bZ) : 28 === id ? f2.aF6.aW1(bZ.aD2, bZ.aVx, bZ.aVy) : 29 === id ? f2.a5g.zP(bZ) : 30 === id ? fI.aM9() || aW2() : 1e3 === id && (this.aCv = id =
			25, f2.a5g.zW(bZ))
	}, this.aCw = function(code, m3, data) {
		!m3 && code !== id || (15 === code || 16 === code ? a0.a1(7, this.ph) : 17 === code ? (f2.aw.close(0, 3252), a5.aw.du(0), a5.c0.data[117].aj && 0 < a5.c0.data[117].aj.length ? (m3 = a5.aw.dv(0), a5.a6.a7(105, m3.dw), a5.a6.a7(106, m3
			.password), a0.a1(8, this.ph, new a5B(16))) : (a5.a6.a7(105, ""), a0.aw.aD6())) : 21 === code ? a0.a1(10, this.ph, new up(data)) : 23 === code ? a0.a1(13, this.ph, new x7({
			data: data,
			xQ: bZ.xQ
		})) : 25 === code ? (a0.aw.ps.dw = bZ.dw, a5.a5n.hI(bZ.dw), a0.a1(15, this.ph)) : 30 === code && (data ? a0.a1(1) : aW2()))
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a3d.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(L(452), [new f("⬅️ " + L(1), function() {
		aVq ? a0.a1(29) : a0.aw.aD6()
	})]), a3d = new a3e(x8.k, L(453))
}

function a3e(ze, a3a) {
	var ao = document.createElement("div");
	this.am = ao, this.resize = function() {
		ao.style.padding = w.bc.jW(h4.a57), ao.style.lineHeight = w.bc.jW(w.bc.jc(.035))
	}, ze.style.overflowX = "hidden", ze.style.overflowY = "auto", ao.innerHTML = a3a, ze.appendChild(ao)
}

function aF7() {
	this.aVv = function(aD2, gd, ge) {
		pF.lu(75), pF.pG(1, 0), pF.pG(6, 21), pF.pG(6, aD2), pF.pG(1, +(gd < 0)), pF.pG(1, +(ge < 0)), pF.pG(30, Math.abs(gd)), pF.pG(30, Math.abs(ge)), f2.aw.send(0, pF.oU)
	}, this.aVw = function(aD2, aVx, aVy) {
		pF.lu(18 + 16 * aVx.length + 30), pF.pG(1, 0), pF.pG(6, 22), pF.pG(6, aD2), f2.zJ.a8h(aVx), pF.pG(30, aVy), f2.aw.send(0, pF.oU)
	}, this.aW1 = function(aD2, aVx, aVy) {
		pF.lu(73), pF.pG(1, 0), pF.pG(6, 28), pF.pG(6, aD2), fE.fF.zO(aVx, 5), pF.pG(30, aVy), f2.aw.send(0, pF.oU)
	}, this.aVz = function(xQ, aD8) {
		for (var bw = aD8.length, aPT = 0, al = 0; al < bw; al++) aPT += aD8[al].length;
		for (pF.lu(21 + 3 * bw + 16 * aPT), pF.pG(1, 0), pF.pG(6, 23), pF.pG(3, xQ), pF.pG(4, bw), pF.pG(7, aPT), al = 0; al < bw; al++) pF.pG(3, aD8[al].length), gP.uy.zQ(aD8[al]);
		f2.aw.send(0, pF.oU)
	}, this.aW0 = function(xQ, gd, ge) {
		pF.lu(52), pF.pG(1, 0), pF.pG(6, 24), pF.pG(3, xQ), pF.pG(1, +(gd < 0)), pF.pG(1, +(ge < 0)), pF.pG(20, Math.abs(gd)), pF.pG(20, Math.abs(ge)), f2.aw.send(0, pF.oU)
	}
}

function aIa() {
	this.p5 = null, this.dk = !1, this.dX = 0, this.dd = 56;
	var aW3 = 0;

	function aW5() {
		dY.dX = aW3 = performance.now(), dY.p5.da(), window.requestAnimationFrame(aW5)
	}
	this.a4 = function() {
		this.aW4(), window.requestAnimationFrame(aW5), this.dX = performance.now()
	}, this.yW = function() {
		o.ke ? (this.p5 = new aTR, this.p5.a4()) : o.kg ? this.p5 = new dW : (this.p5 = new wv, this.p5.a4())
	}, this.aW4 = function() {
		this.p5 = new pU, this.dk = !0
	}, this.da = function() {
		this.p5.dZ++
	}, this.hw = function() {
		return this.p5.dZ
	}, this.oa = function() {
		var hB = performance.now();
		hB < aW3 + 1e3 || (this.dX = hB, this.p5.da())
	}
}

function aHu() {
	var size, a1H;
	this.a4 = function() {
		size = o.aHX, a1H = new Uint16Array(o.bI);
		for (var cF = o.cF, al = o.aHX - 1; 0 <= al; al--) a1H[al] = cF + al
	}, this.da = function() {
		ch.aW6.da();
		for (var al = size - 1; 0 <= al; al--)
			if (0 === eF.hu[a1H[al]]) {
				ct = void 0;
				var ct = al;
				size--, a1H[ct] = a1H[size]
			} else ar.da(a1H[al])
	}, this.qJ = function(i5) {
		a1H[size++] = i5
	}
}

function a9l() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aIW() {
	this.aEv = 0, this.aEw = 0, this.aEq = 0, this.aEr = 0, this.aEs = 0, this.aEt = 0, this.a9f = [0, 0, 0, 0], this.wr = function() {
		this.aEv = vQ.wd(), this.aEw = vQ.we(), this.aEq = -this.aEv, this.aEr = -this.aEw, this.aEs = c2.ba / nZ, this.aEt = c2.bb / nZ, this.a9f[0] = Math.floor(this.aEq), this.a9f[1] = Math.floor(this.aEr), this.a9f[2] = Math.floor(this.a9f[
			0] + this.aEs + 1), this.a9f[3] = Math.floor(this.a9f[1] + this.aEt + 1), dj.aW9 = !0
	}
}

function up(data) {
	var x8, aWA;

	function aWK(bw) {
		return bw < 60 ? 1 === bw ? bw + " Second" : bw + " Seconds" : bw < 3600 ? 1 === (bw = Math.floor(bw / 60)) ? bw + " Minute" : bw + " Minutes" : bw < 172800 ? 1 === (bw = Math.floor(bw / 3600)) ? bw + " Hour" : bw + " Hours" : (bw = Math
			.floor(bw / 172800)) + " Days"
	}

	function aWC(v7) {
		var bw = data.data.length;
		if (bw) {
			for (var gd, max = min = parseInt(data.data[0][0]), al = 1; al < bw; al++) var fH = parseInt(data.data[al][0]),
				min = Math.min(fH, min),
				max = Math.max(fH, max);
			gd = v7 < 0 ? min + v7 : max + 1, a0.a1(8, a0.dV().ph, new a5B(21, {
				aD2: data.aD2,
				gd: gd,
				ge: gd + Math.abs(v7)
			}))
		}
	}
	if (this.show = function() {
			x8.show(), this.resize()
		}, this.b1 = function() {
			x8.b1()
		}, this.resize = function() {
			x8.resize(), aWA.resize()
		}, this.b2 = function(b3) {
			2 === b3 && x8.b4[0].b5()
		}, data.uq) {
		x8 = new e(L(385), [new f("⬅️ " + L(1), function() {
			a0.bC()
		})]);
		var h1 = {
				aAr: [],
				aAx: [L(466), L(467), L(468) + " ↗"],
				aB3: [12, 50, 38]
			},
			lt = o.data.lt;
		if (lt) {
			for (var bw = lt.length, aAr = h1.aAr, nF = eF.nF, al = 0; al < bw; al++) aAr.push([{
				bV: al + 1 + ".",
				hB: 0
			}, {
				bV: nF[al],
				hB: 0
			}, {
				bV: gP.fF.gQ(lt[al], 5),
				hB: 1,
				dw: lt[al],
				a5C: 0
			}]);
			aWA = new aAq(x8.k, h1, {
				aB0: 1
			})
		} else aWA = new aAq(x8.k, h1)
	} else {
		var h1 = data.data.length ? 0 : 1,
			a3c = [new f("⬅️ " + L(1), function() {
				a0.bC()
			}), new f(L(457), function() {
				aWC(-10)
			}, h1, 0, 1), new f(L(458), function() {
				aWC(10)
			}, h1, 0, 1), new f(L(58), function() {
				a0.a1(11, 10, new aWD({
					aD2: data.aD2
				}))
			})],
			aAx = [L(459), L(460), L(461), L(462), L(463), L(398), L(399), L(400), L(464), L(465), L(218), L(219), "Audit Log", L(220)];
		x8 = new e(aAx[data.aD2], a3c), ! function() {
			var al, h1 = {
					aAr: []
				},
				aAr = h1.aAr,
				aWF = data.data,
				bw = aWF.length;
			bw && 0 === aWF[0][0] && 0 <= (ab = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.aD2]) && (a0.aw.aD3[ab] = aWF[0][1]);
			var dG = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.aD2],
				aWI = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.aD2],
				ab = [
					[L(469), L(470) + " ↗", L(471)],
					[L(469), L(472), L(473), L(474) + " ↗"],
					[L(469), L(470) + " ↗", L(473)],
					[L(469), L(470) + " ↗", L(473)],
					[L(466), L(475), L(476) + " ↗", L(477) + " ↗", L(389)],
					[L(466), L(475), L(478) + " ↗", L(360) + " ↗", L(479)],
					[L(466), L(475), L(480) + " ↗", L(481) + " ↗", L(361)],
					[L(466), L(475), L(478) + " ↗", L(360) + " ↗", L(482)],
					[L(466), L(475), L(476) + " ↗", L(477) + " ↗", L(389)],
					[L(469), L(470) + " ↗", L(473)],
					[L(469), L(470) + " ↗", L(483)],
					[L(469), L(470) + " ↗", L(473)],
					[L(466), L(475), L(476) + " ↗", L(477) + " ↗", L(484)],
					[L(469), L(470) + " ↗", L(473)]
				];
			if (h1.aAx = ab[data.aD2], h1.aB3 = [
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
				][data.aD2], 0 === data.aD2 || 2 === data.aD2 || 3 === data.aD2 || 9 === data.aD2 || 10 === data.aD2 || 11 === data.aD2 || 13 === data.aD2)
				for (al = 0; al < bw; al++) aAr.push([{
					bV: aWF[al][0] + 1 + ".",
					hB: 0
				}, {
					bV: aWF[al][1],
					hB: 1,
					dw: aWF[al][4],
					a5C: aWF[al][3]
				}, {
					bV: (dG * aWF[al][2]).toFixed(aWI),
					hB: 0
				}]);
			else if (12 === data.aD2)
				for (al = 0; al < bw; al++) {
					var aWJ = aWF[al][3];
					aAr.push([{
						bV: "" + aWF[al][0],
						hB: 0
					}, {
						bV: aWK(aWF[al][4]),
						hB: 0
					}, {
						bV: aWF[al][5],
						hB: 1,
						dw: aWF[al][1],
						a5C: 0
					}, {
						bV: aWF[al][6],
						hB: 1,
						dw: aWF[al][2],
						a5C: 0
					}, {
						bV: a65.a4g(aWJ, gP.fF.gQ(aWF[al][1], 5)),
						hB: 0
					}])
				} else if (1 === data.aD2)
					for (al = 0; al < bw; al++) aAr.push([{
						bV: aWF[al][0] + 1 + ".",
						hB: 0
					}, {
						bV: aWF[al][1],
						hB: 0
					}, {
						bV: (dG * aWF[al][2]).toFixed(aWI),
						hB: 0
					}, {
						bV: aWF[al][3],
						hB: 1,
						dw: aWF[al][5],
						a5C: aWF[al][4]
					}]);
				else if (4 === data.aD2 || 5 === data.aD2 || 6 === data.aD2 || 7 === data.aD2 || 8 === data.aD2)
				for (al = 0; al < bw; al++) {
					var aWL = aWF[al][5];
					4 === data.aD2 || 8 === data.aD2 ? "100%" === (aWL = (aWL % 64 * 100 / (aWL >> 6)).toFixed(0) + "%") && (4 === data.aD2 ? aWL += " (" + L(485) + ")" : aWL += " (" + L(486) + ")") : 5 === data.aD2 ? 32768 <= aWL && (aWL = -(
						aWL - 32768)) : aWL = (dG * aWL).toFixed(aWI), aAr.push([{
						bV: "" + aWF[al][0],
						hB: 0
					}, {
						bV: aWK(aWF[al][6]),
						hB: 0
					}, {
						bV: aWF[al][7],
						hB: 1,
						dw: aWF[al][1],
						a5C: aWF[al][2]
					}, {
						bV: aWF[al][8],
						hB: 1,
						dw: aWF[al][3],
						a5C: aWF[al][4]
					}, {
						bV: "" + aWL,
						hB: 0
					}])
				}
			aWA = new aAq(x8.k, h1)
		}()
	}
}

function aII() {
	this.a2J = new aWM, this.cO = new aCH, this.aKW = new aNq, this.pI = new aKM, this.sW = new aWN
}

function pz() {
	var b, c, b7, aG;

	function g() {
		bA(), 2 !== o.data.spawningType || w.x.f9(o.data.spawningData) || (o.data.spawningType = 0), 2 !== o.data.spawningType && (o.data.spawningData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		2 === o.data.spawningType && w.x.bD(b7.bE(), o.data.spawningData, p.dD - 1)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(487), [new f("⬅️ " + L(1), g)]), c = new j(b.k, (function(aG) {
		var aT = new aU,
			aj = (aT.aV(L(28)), [L(8), L(14), L(9)]),
			value = o.data.spawningType;
		0 === o.data.gameMode && (aj.splice(1, 1), 0 < value) && (value = 1);
		aT.ah(new ai({
			aj: aj,
			value: value
		}, function(ab) {
			bA(), o.data.spawningType = ab, 0 === o.data.gameMode && 1 === ab && (o.data.spawningType = 2), 2 !== o.data.spawningType || o.data.spawningData || (o.data.spawningData = new Uint16Array(2 * o.bI)), a0.a1(24)
		})), aG.push(aT)
	}(aG = []), function(aG) {
		var aT = new aU;
		aT.aV("My Spawn"), aT.aX(new rr({
			value: o.data.selectableSpawn
		}, L(488), function(value) {
			o.data.selectableSpawn = value
		})), aG.push(aT)
	}(aG), function(aG) {
		var aT = new aU,
			aWP = (aT.aV("Seed"), new aa({
				ab: -1,
				value: o.data.spawningSeed
			}, 1, 0, function(aY) {
				var value = Math.abs(Math.floor(aY.target.value)) % 16384;
				aY.target.value = o.data.spawningSeed = value
			}));
		aT.aX(aWP), aT.aX(new aZ([new f(L(8), function() {
			aWP.aY.value = o.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), aG.push(aT)
	}(aG), function(aG) {
		var aT;
		2 === o.data.spawningType && ((aT = new aU).aV("Data"), (b7 = new bJ(0, 1, 0, 1)).bK(w.bL.bM(o.data.spawningData, 2)), aT.aX(b7), aG.push(aT))
	}(aG), aG))
}

function y8() {
	this.lx = -1;
	var aWQ = 0,
		aWR = 0,
		aWS = 0,
		aOa = 0,
		aWT = new Uint8Array(67108864);
	this.a4 = function(yK, yL, aWU) {
		aWQ && aWT.fill(0), aWR = yK, aWS = yL, aOa = (aWQ = 1) << aWU
	}, this.da = function() {
		for (var hp, aWV = aWT, yK = aWR, yL = aWS, bw = aOa, al = 255 & yK; al < bw; al++) hp = aWV[67108863 & yL] + (33554431 & yK) + (33554431 & (al ^ yL)), aWV[67108863 & yK] += hp, yL = (yK = yK + hp + al & 1073741823) ^ yL >> 1;
		return aWR = yK, aWS = yL, aOa = Math.max(aOa - (aOa >> 3), 4096), yK ^ yL
	}
}

function aIQ() {
	function aWZ() {
		return {
			eP: p.eP,
			eQ: p.eQ,
			q: p.q,
			vw: p.vw,
			vx: p.vx,
			i8: p.i8,
			fo: p.fo,
			mapSeed: p.mapSeed,
			qr: p.qr
		}
	}

	function aWX(al) {
		return 1 !== al && p.lq(al) && al !== p.aWb()
	}
	this.a4A = 25, this.aDi = 13, this.dD = 4096, this.eP = 0, this.eQ = 0, this.q = null, this.vw = null, this.vx = null, this.i8 = null, this.fo = 0, this.mapSeed = 0, this.qr = !1, this.vy = new aBA, this.rs = new aDU, this.iC = new i3, this.a4 =
		function() {
			this.rs.a4()
		}, this.lu = function(map, aWW) {
			((map %= this.a4A) !== this.fo || aWX(this.fo) && aWW !== this.mapSeed) && (this.qr = !1, this.vy.aBK(), eC.qV(map), this.fo = map, this.mapSeed = aWW, aWX(map) && (p.rs.ru[map].qX = aWW), this.lq(this.fo) ? (map = p.rs.ru[this.fo], this
				.eP = map.ba, this.eQ = map.bb, eC.qV(map.qX), a4G.lu([this.eP, this.eQ, map.aBd, map.aBa]), aWY(), iB.a4B(), a4G.aBL()) : fn())
		}, this.r = function(map, aWW) {
			var hp = aWZ(),
				map = (this.lu(map, aWW), this.vy.aBK(), aWZ());
			return aWW = hp, p.eP = aWW.eP, p.eQ = aWW.eQ, p.q = aWW.q, p.vw = aWW.vw, p.vx = aWW.vx, p.i8 = aWW.i8, p.fo = aWW.fo, p.mapSeed = aWW.mapSeed, p.qr = aWW.qr, map
		}, this.pT = function(canvas) {
			canvas && this.q !== canvas && (this.eP = canvas.width, this.eQ = canvas.height, this.q = canvas, this.vw = this.q.getContext("2d", {
				alpha: !1
			}), this.bf = this.vw.getImageData(0, 0, this.eP, this.eQ), this.i8 = this.bf.data, this.fo = this.aWb(), this.mapSeed = 0, p.rs.ru[this.fo].name = o.data.mapName)
		}, this.a4R = function(al) {
			return 3 === al || 7 === al || 9 === al || 21 === al || al === this.aWb()
		}, this.aEo = function(al) {
			return 2 === al || 7 === al || 9 === al || 20 === al
		}, this.a4E = function(al) {
			return 1 === al
		}, this.aWb = function() {
			return this.a4A
		}, this.lq = function(al) {
			return void 0 === this.rs.ru[al].aBM
		}, this.s = function(ga) {
			return 0 === ga.mapType ? ga.mapProceduralIndex < 10 ? ga.mapProceduralIndex : 10 + ga.mapProceduralIndex : 1 === ga.mapType ? 10 <= ga.mapRealisticIndex ? 22 + ga.mapRealisticIndex - 10 : ga.mapRealisticIndex + 10 : void 0
		}, this.lr = function(ga, aWc) {
			0 === ga.mapType ? ga.mapProceduralIndex = aWc < 10 ? aWc : aWc - 10 : 1 === ga.mapType && (ga.mapRealisticIndex = aWc - (22 <= aWc ? 12 : 10))
		}
}

function aWD(bZ) {
	var x8, a58, aG;
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a58.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, x8 = new e(L(489), [new f("⬅️ " + L(1), function() {
		a0.q7(10)
	})]), a58 = new j(x8.k, ((aG = []).push(function() {
		var ry, aT = new aU,
			aIt = new aa(a5.c0.data[132], 1, function() {
				ry.button.click()
			}),
			aIu = new aa(a5.c0.data[131], 1, function() {
				aIt.aY.focus()
			});
		aT.aV(L(353)), aT.aX(aIu), aIu.aY.style.marginBottom = "0.8em", aT.aV(L(354)), aT.aX(aIt);
		return ry = new f(L(352), function() {
			gd = Math.floor(aIu.aY.value), ge = Math.floor(aIt.aY.value);
			var ge, gd = {
				aWg: Math.min(gd, ge),
				aSb: Math.max(gd, ge)
			};
			a0.a1(8, a0.qA(10).ph, new a5B(21, {
				aD2: bZ.aD2,
				gd: gd.aWg,
				ge: gd.aSb
			}))
		}, 0, 0, 1), aT.aX(new aZ([ry.button])), aT
	}()), aG.push(function() {
		var ry, aT = new aU,
			aIt = new aa(a5.c0.data[134], 1, function() {
				ry.button.click()
			}),
			aIu = new aa(a5.c0.data[133], 0, function() {
				aIt.aY.focus()
			});
		return aT.aV(1 === bZ.aD2 ? L(490) : L(491)), aT.aX(aIu), aIu.aY.style.marginBottom = "0.8em", aT.aV(L(492)), aT.aX(aIt), ry = new f(L(352), function() {
			var aVx = aIu.aY.value.slice(0, 20),
				aVy = Math.abs(Math.floor(aIt.aY.value));
			a0.a1(8, a0.qA(10).ph, new a5B(22, {
				aD2: bZ.aD2,
				aVx: aVx,
				aVy: aVy
			}))
		}, 0, 0, 1), aT.aX(new aZ([ry.button])), aT
	}()), aG.push(function() {
		var ry, aT = new aU,
			aIt = new aa(a5.c0.data[152], 1, function() {
				ry.button.click()
			}),
			aIu = new aa(a5.c0.data[151], 0, function() {
				aIt.aY.focus()
			});
		return aT.aV(L(493)), aT.aX(aIu), aIu.aY.style.marginBottom = "0.8em", aT.aV(L(492)), aT.aX(aIt), ry = new f(L(352), function() {
			var aVx = aIu.aY.value.slice(0, 5),
				aVy = Math.abs(Math.floor(aIt.aY.value));
			a0.a1(8, a0.qA(10).ph, new a5B(28, {
				aD2: bZ.aD2,
				aVx: aVx,
				aVy: aVy
			}))
		}, 0, 0, 1), aT.aX(new aZ([ry.button])), aT
	}()), aG))
}

function zn() {
	var aWh, aWi = [],
		aWj = -1,
		aWk = 0,
		aWl = 0;

	function aWp() {
		aWk = dY.dX, (3 === this.aPZ ? aWo : (aWj = (aWi.length + aWj + 2 * this.aPZ - 1) % aWi.length, aWn))()
	}

	function aWn() {
		0 !== aWi.length && (aWl = 0, aWh && aWh.d1(), (aWh = new aPX(aWp)).a7(aWj, aWi.length), aWh.show(aWi[aWj]), f5.message.resize())
	}

	function aWo() {
		aWl = 1, aWh && aWh.d1(), (aWh = new aEM(aWn)).a7(aWi.length), aWh.show(), f5.message.resize()
	}
	this.f6 = function(tJ) {
		var ga;
		2 === tJ.id && 3 === tJ.f7 ? f5.fi.tq(tJ.dw) : (ga = f5.fi.tn(tJ, f5.fi.tp(tJ)), (5 !== tJ.id && 6 !== tJ.id || (a0.qA(29).aNJ().aH1(ga), 5 === tJ.id)) && (ga = dY.dX < aWk + 2e4, aWj !== aWi.length - 1 && ga || (aWj = aWi.length), __fx
			.pingFilter.isMuted(tJ, "eo") || (aWi.push(tJ), a5.c0.data[14].value || 7 === tJ.id || zp.play(), aWh && (aWl && (a5.c0.data[13].value || ga) ? aWh.a7(aWi.length) : aWn()))))
	}, this.show = function() {
		aWo()
	}, this.b1 = function() {
		aWj = aWi.length - 1, aWh && aWh.d1(), aWh = null
	}, this.resize = function() {
		aWh && aWh.resize()
	}, this.aEC = function() {
		return aWi
	}
}

function f(aCB, aWq, za, aWr, aWs) {
	var self, aWt = document.createElement("button");

	function aEP() {
		var aQC;
		dE.dF() || (aQC = w.color.aWy(za), !1 !== aWr && 0 < aQC[0] && aQC[0] < 255 && aQC[0] === aQC[1] && aQC[0] === aQC[2]) || (128 < aQC[0] && 128 < aQC[1] && 128 < aQC[2] ? aWt.style.backgroundColor = w.color.aB4(za, -50) : aWt.style
			.backgroundColor = w.color.aB4(za, aQC[3] && aQC[3] < 120 ? 150 : 50))
	}

	function aWu() {
		if (aWr) {
			var aQC = w.color.aWy(za);
			if (aQC[0] === aQC[1] && aQC[0] === aQC[2]) return
		}
		aWq && ((aQC = aWq(this)) ? 2 === aQC && aEP() : aWz(this))
	}

	function aWv() {
		this.style.backgroundColor = za
	}

	function aEO() {
		aWz(this)
	}

	function aWz(h1) {
		h1.style.backgroundColor = za, h1.blur()
	}
	this.button = aWt, this.b5 = aWq, this.aV8 = za, this.a56 = function(aWw) {
			aWw = 1.1 - Math.min(.01 * aCB.length, .6) + .2 * aWw;
			aWt.style.fontSize = aWw.toFixed(1) + "em"
		}, this.bQ = function(b3) {
			b3 ? 1 === b3 ? b3 = hM.a5s : 2 === b3 && (aWr = 1, b3 = hM.a5s) : (aWr = 0, b3 = hM.ka), this.aV8 = za = b3, aWt.style.backgroundColor = b3
		}, self = this, aWt.innerHTML = aCB, aWt.style.color = aWs ? hM.a5h : hM.hX, aWt.style.userSelect = "none", aWt.style.outline = "none", aWt.style.overflowWrap = "break-word", self.bQ(za), aWt.style.border = "none", aWt.style.font = "inherit",
		self.a56(0), aWt.style.padding = "0em 0.3em", aWt.onclick = aWu, aWt.addEventListener("mouseover", aEP), aWt.addEventListener("mouseout", aEO), aWt.addEventListener("focus", aEP), aWt.addEventListener("blur", aWv)
}

function aX0() {
	var aX1 = 0,
		aX2 = 0,
		aX3 = 300,
		aX4 = 300,
		aX5 = 0;
	this.e8 = 0, this.c0 = new Uint32Array(512), this.a4 = function() {
		aX2 = aX1 = 0, this.e8 = 0, aX5 = 0
	}, this.da = function() {
		if (function() {
				var bw = ch.e7.e8;
				if (0 === bw) return 1;
				var c0 = ch.e7.c0;
				if (dY.hw() % 35 == 6) {
					for (var al = bw - 1; 0 <= al; al--) ee.lb(c0[al] << 2) || (bw--, c0[al] = c0[bw]);
					ch.e7.e8 = bw
				}
				return bw < c0.length
			}())
			if (aX3 <= aX1) {
				var aX9 = ch.e7.e8;
				if (aX9) {
					if (dY.hw() % 350 != 1) return;
					if (aX5 !== aX9) return void(aX5 = aX9);
					if (!w.cO.cm(fR[0])) return
				} else if (dY.hw() % 12 != 8) return;
				w.cO.ia() || ch.e7.a4()
			} else {
				var al, ba = p.eP,
					aXA = ba - 2,
					aX9 = aXA * (p.eQ - 2),
					aXB = aX3,
					c0 = ch.e7.c0,
					cX = ch.e7.e8,
					aXC = c0.length,
					eR = Math.min(aX2 + aXB * ((1 + 19 * ch.performance.e9) * aX4), aX9);
				for (al = aX2; al < eR; al += aXB) {
					var hd = 4 * (al % aXA + (ac.eB(al, aXA) + 1) * ba + 1);
					if (ee.lb(hd) && (c0[cX] = hd >> 2, ++cX === aXC)) {
						al += aXB;
						break
					}
				}(aX2 = al) >= aX9 && (aX2 = ++aX1), ch.e7.e8 = cX
			}
	}
}

function aQe() {
	this.resize = function() {
		var al, a5r = document.head.querySelector("style#ss");
		if (a5r)
			for (al = a5r.sheet.cssRules.length - 1; 0 <= al; al--) a5r.sheet.deleteRule(0);
		else(a5r = document.createElement("style")).id = "ss", document.head.appendChild(a5r);
		var xx = "::-webkit-scrollbar",
			aXD = w.bc.jW(h4.jX),
			nx = w.bc.jW(Math.max(w.bc.jc(.012), 8));
		try {
			a5r.sheet.insertRule(xx + "{width:" + nx + ";height:" + nx + ";}", a5r.sheet.cssRules.length), a5r.sheet.insertRule(xx + "-thumb{background-color:white;}", a5r.sheet.cssRules.length), a5r.sheet.insertRule(xx + "-track{background:" +
				hM.ka + ";}", a5r.sheet.cssRules.length), a5r.sheet.insertRule(xx + "-track:horizontal{border-top:" + aXD + " solid white;}", a5r.sheet.cssRules.length), a5r.sheet.insertRule(xx + "-track:vertical{border-left:" + aXD +
				" solid white;}", a5r.sheet.cssRules.length), a5r.sheet.insertRule(xx + "-button{display:none;}", a5r.sheet.cssRules.length)
		} catch (aY) {
			for (console.log("error 3425: " + aY), al = a5r.sheet.cssRules.length - 1; 0 <= al; al--) a5r.sheet.deleteRule(0)
		}
	}
}

function aXE() {
	var aXF, aXH = new Uint16Array(8);

	function aXK(size, player) {
		for (var al = eF.lT[player].length - 1; size <= al; al--) ee.mT(eF.lT[player][al], player)
	}
	this.a4 = function() {
		aXF = 0
	}, this.aNv = function(player, aNs) {
		return ix.jF[1] = eF.lT[player].length, ix.jF[0] === o.bI ? ch.aNu.aXI(player) : this.aXJ(player, ix.jF[0]), (0 !== ix.jF[1] || 0 !== eF.lT[player].length) && !(!aNs && ix.jF[1] === eF.lT[player].length || (ix.jF[0] === o.bI ? eF.aOr[
			player]++ : eF.aOs[player]++, 0))
	}, this.aNx = function(player) {
		aXK(ix.jF[1], player), lF.cW(player, ix.iy[0], ix.jF[0]), lR.sY(player, !1)
	}, this.aXL = function(player, cC, bw, cD) {
		var aXM = ac.eB(12 * eF.fa[player], 1024);
		cD -= cD >= ac.eB(eF.fa[player], 2) ? aXM : 0, aXK(bw, player), lF.cW(player, cD, cC), eF.fa[player] -= cD + aXM, lR.sY(player, !1)
	}, this.aXJ = function(player, cC) {
		for (var sD, iH = ee.iH, al = eF.aOq[player].length - 1; 0 <= al; al--)
			if (ee.mU(eF.aOq[player][al]))
				for (sD = 3; 0 <= sD; sD--)
					if (ee.lZ(eF.aOq[player][al] + iH[sD]) && ee.la(eF.aOq[player][al] + iH[sD]) === cC) {
						eF.lT[player].push(eF.aOq[player][al]);
						break
					}
	}, this.aXI = function(player) {
		for (var iH = ee.iH, al = eF.aOq[player].length - 1; 0 <= al; al--)
			if (ee.mU(eF.aOq[player][al]))
				for (var sD = 3; 0 <= sD; sD--)
					if (ee.lb(eF.aOq[player][al] + iH[sD])) {
						eF.lT[player].push(eF.aOq[player][al]);
						break
					}
	}, this.aXN = function(player, aXO) {
		var al, ct, sD, aQU, bw = eF.aOq[player].length,
			v7 = 256 <= bw ? 12 : 32 <= bw ? 6 : 1,
			eA = bw - 1 - eC.qY(v7),
			iH = ee.iH;
		aXF = 0;
		loop: for (al = eA; 0 <= al; al -= v7)
			for (sD = 3; 0 <= sD; sD--)
				if ((aQU = ee.lb(eF.aOq[player][al] + iH[sD]) ? o.bI : ee.la(eF.aOq[player][al] + iH[sD])) === o.bI || ee.lZ(eF.aOq[player][al] + iH[sD]) && aQU !== player && (aXO || jG.jH(player, aQU))) {
					for (ct = aXF - 1; 0 <= ct; ct--)
						if (aXH[ct] === aQU) continue loop;
					if (aXH[aXF] = aQU, 8 <= ++aXF) return !0
				}
		return 0 < aXF
	}, this.aXP = function(player, aXO) {
		var al, sD, aQU, iH = ee.iH;
		for (aXF = 0, al = eF.aOq[player].length - 1; 0 <= al; al--)
			for (sD = 3; 0 <= sD; sD--)
				if ((aQU = ee.lb(eF.aOq[player][al] + iH[sD]) ? o.bI : ee.la(eF.aOq[player][al] + iH[sD])) === o.bI || ee.lZ(eF.aOq[player][al] + iH[sD]) && aQU !== player && (aXO || jG.jH(player, aQU))) return aXH[aXF++] = aQU, !0;
		return !1
	}, this.aXQ = function() {
		for (var j9, al = aXF - 1; 0 <= al; al--)
			if (aXH[al] === o.bI) {
				for (aXF--, j9 = al; j9 < aXF; j9++) aXH[j9] = aXH[j9 + 1];
				return !0
			} return !1
	}, this.aXR = function(player) {
		for (var j9, al = aXF - 1; 0 <= al; al--)
			if (lF.cY(player, aXH[al]))
				for (aXF--, j9 = al; j9 < aXF; j9++) aXH[j9] = aXH[j9 + 1];
		return 0 === aXF
	}, this.aXS = function() {
		for (var al = aXF - 1; 0 <= al; al--)
			if (w.cO.cm(aXH[al])) return !0;
		return !1
	}, this.aXT = function() {
		for (var al = aXF - 1; 0 <= al; al--) w.cO.cm(aXH[al]) || (aXH[al] = aXH[--aXF]);
		return 0 < aXF
	}, this.aXU = function(player) {
		for (var j9, aXV = aXH[0], aXW = eF.fa[aXV] + lF.cL(aXV, player), al = aXF - 1; 1 <= al; al--)(j9 = eF.fa[aXH[al]] + lF.cL(aXH[al], player)) < aXW && (aXV = aXH[al], aXW = j9);
		return aXV
	}, this.aXX = function(player) {
		var bb, aXY = aXH[0];
		if (1 !== aXF)
			for (var aXZ = ac.eB(eF.eH[player] + eF.eG[player], 2), aXa = ac.eB(eF.eK[player] + eF.eJ[player], 2), eM = aXb(aXZ - ac.eB(eF.eH[aXY] + eF.eG[aXY], 2)) + aXb(aXa - ac.eB(eF.eK[aXY] + eF.eJ[aXY], 2)), al = aXF - 1; 1 <= al; al--)(bb =
				aXb(aXZ - ac.eB(eF.eH[aXH[al]] + eF.eG[aXH[al]], 2)) + aXb(aXa - ac.eB(eF.eK[aXH[al]] + eF.eJ[aXH[al]], 2))) < eM && (eM = bb, aXY = aXH[al]);
		return aXY
	}, this.aXc = function() {
		for (var aXd = aXH, aXe = aXd[0], fa = eF.fa, aXf = fa[aXe], al = aXF - 1; 1 <= al; al--) {
			var i5 = aXd[al],
				j9 = fa[i5];
			aXf < j9 && (aXe = i5, aXf = j9)
		}
		return aXe
	}, this.aXg = function() {
		return aXH[eC.qY(aXF)]
	}
}

function aXh() {
	this.en = function() {
		if (2 === o.aH8) o.aGH = 2;
		else {
			if (8 === o.fW) w.cO.cm(0) || 0 === eF.hu[0] ? o.aHD = 1 : w.cO.cm(1) || 0 === eF.hu[1] ? o.aHD = 0 : o.aHD = +(eF.fQ[1] > eF.fQ[0]);
			else {
				if (o.fT) {
					var ie = fd.aTy();
					if (o.aAY = ie, bN.rA[ie]) return void(o.aGH = +(bN.iZ[o.co] === ie))
				}
				o.aHD = fR[0]
			}
			o.aGH = +(o.aHD === o.co)
		}
	}
}

function aVc() {
	this.g0 = function(ak) {
		ak.fill(0)
	}, this.z5 = function(ak) {
		for (var bw = ak.length, al = 0; al < bw; al++) ak[al] = []
	}, this.aXj = function(oC, hc) {
		for (var oD = ix.aRy, al = 0; al < 3; al++) oD[al] = hc * oC[al];
		return oD
	}, this.aXk = function(oC, oD, aXl) {
		for (var v7 = 0, al = 0; al < 3; al++) v7 += Math.abs(oC[al] - oD[al]);
		return aXl <= v7
	}, this.aXm = function(oC, aXn) {
		for (var al = 0; al < 3; al++) oC[al] = ac.ad(oC[al] + aXn, 0, 255);
		return oC
	}, this.f9 = function(ak, gd, ge) {
		ge = ge || ak.length - 1;
		for (var aTr = 0, al = gd = gd || 0; al <= ge; al++) aTr += ak[al];
		return aTr
	}, this.aXo = function(ak, aXp) {
		for (var al, aWg, bw = ak.length, aXq = [], ct = bw - 1; 0 <= ct; ct--) {
			for (al = aWg = 0; al < bw; al++) aXp(ak[al]) < aXp(ak[aWg]) && (aWg = al);
			bw--, aXq.push(ak[aWg]), ak[aWg] = ak[bw], ak.pop()
		}
		return aXq
	}, this.min = function(ak) {
		var al, bV, bw = ak.length;
		if (0 === bw) return 0;
		for (bV = ak[0], al = 1; al < bw; al++) bV = Math.min(bV, ak[al]);
		return bV
	}, this.max = function(ak) {
		var bw = ak.length;
		if (0 === bw) return 0;
		for (var bV = ak[0], al = 1; al < bw; al++) bV = Math.max(bV, ak[al]);
		return bV
	}, this.y = function(ak, bV) {
		for (var bw = ak.length, v = 0, al = 0; al < bw; al++) v += ak[al] > bV;
		return v
	}, this.aXr = function(iJ, iM, min) {
		for (var bw = iM[0], al = bw - 1; 0 <= al; al--) iJ[al] < min && (iJ[al] = iJ[--bw]);
		iM[0] = bw
	}, this.aXs = function(ak, bw, value) {
		for (var al = 0; al < bw; al++) ak[al] -= value
	}, this.aXt = function(ak) {
		for (var bw = ak.length, al = 0; al < bw; al++)
			if ("string" != typeof ak[al]) return !1;
		return !0
	}, this.bD = function(e0, ak, aXu) {
		ak.fill(0);
		for (var mL = e0.split(","), bw = Math.min(mL.length, ak.length), al = 0; al < bw; al++) ak[al] = Math.min(parseInt(mL[al]), aXu)
	}, this.aXv = function(e0, ak, aGu) {
		ak.fill("");
		for (var mL = e0.split('"'), bw = Math.min(mL.length, 2 * ak.length), bP = 0, al = 1; al < bw; al += 2) ak[bP++] = mL[al].slice(0, aGu)
	}, this.pS = function(ak, v) {
		if (0 === v) ak.fill(0);
		else {
			var aTr = this.f9(ak),
				bw = ak.length;
			if (0 === aTr) ak.fill(ac.eB(v, bw));
			else
				for (var al = 0; al < bw; al++) ak[al] = ac.eB(v * ak[al], aTr);
			if (0 === (aTr = this.f9(ak))) ak[1] = v;
			else
				for (var bP = 0; aTr++ < v;) ak[bP = (bP + 1) % bw] && ak[bP]++
		}
	}, this.aOC = function(ak) {
		if (!ak) return 0;
		var bw = ak.length;
		if (0 === bw) return 0;
		for (var bV = ak[bw - 1], al = bw - 2; 0 <= al; al--)
			if (ak[al] !== bV) return al + 2;
		return 1
	}, this.aNe = function(ak) {
		for (var aTr = 0, al = 0; al < ak.length; al++) aTr += ak[al].length;
		return aTr
	}, this.fA = function(aXw) {
		for (var ak = [], al = 0; al < aXw.length; al++) ak = ak.concat(aXw[al]);
		return ak
	}, this.has = function(ak, bV) {
		for (var bw = ak.length, al = 0; al < bw; al++)
			if (ak[al] === bV) return !0;
		return !1
	}
}

function aIP() {
	this.qh = new aR7, this.result = new aLS, this.aLX = new aAU, this.aRD = new aH7, this.aRC = new aXh, this.qR = new aXx, this.a4 = function() {
		this.result.a4()
	}
}

function aWN() {
	this.aXy = function(player, j1, cD) {
		w.cO.iz(player, cD, j1) && (fY.aMd(player, j1), !w.cO.cm(j1)) && ch.ci.cj[j1] && ch.ci.cj[j1]--
	}, this.sX = function(player, j1, cD) {
		w.cO.j3(cD, j1) ? a3P.cW(j1, ix.iy[0]) && (aFx.aMe(player, j1, ix.iy[0], 1), w.cO.cP(j1, ix.iy[0]), cQ.aGP(player, j1), cr.nB(j1, ix.iy[0])) : cQ.cR(player, cD, 12)
	}
}

function aVf() {
	var aXz = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.xS = function(dX) {
		var aY0, e0 = new Date(dX.getTime() - 6e4 * dX.getTimezoneOffset()).toUTCString();
		return e0.length < 12 || (e0 = e0.substring(5, e0.length), 0 === (dX = dX.getTimezoneOffset())) ? e0 : (aY0 = (dX < 0 ? "+" : "-") + ac.eB(Math.abs(dX), 60), 0 == (dX = Math.abs(dX) % 60) ? e0 + aY0 : e0 + aY0 + ":" + (dX < 10 ? "0" :
			"") + dX)
	}, this.xm = function(dX) {
		var e0 = dX.toUTCString();
		return e0.length < 12 ? e0 : function(dX) {
			return aXz[dX.getUTCDay()]
		}(dX) + ", " + e0.substring(5, e0.length - 4)
	}
}

function aIE() {
	var bb, canvas, hZ, aY2, aY3, aY4, aY5, a7F, aY6, aY7, aY8, aY9, aGM = !1,
		aW = (this.gv = !1, this.ba = 0, new Array(2)),
		aYA = 0;

	function hI() {
		var ba = a19.ba,
			cX = (a7F = !1, aNh(hZ, ba, bb), Math.floor(ba / 2));
		1 === aY2 ? (hZ.fillStyle = hM.aLp, hZ.fillRect(cX, 0, cX, bb)) : -1 === aY2 && (hZ.fillStyle = hM.aJh, hZ.fillRect(0, 0, cX, bb)), aNi(hZ, ba, bb, 2);
		var cX = (cX = Math.floor(.25 * bb)) < 2 ? 2 : cX,
			a47 = (hZ.fillStyle = hM.aYC, Math.floor((bb - 4) * aY3[1] / aY4[1]));
		0 < a47 && hZ.fillRect(2, bb - 2 - a47, cX, a47), 0 < (a47 = Math.floor((bb - 4) * aY3[0] / aY4[0])) && hZ.fillRect(ba - 2 - cX, bb - 2 - a47, cX, a47);
		cX = (cX = Math.floor(bb / 8)) < 2 ? 2 : cX, wu(hZ, Math.floor(.4 * bb), 0, bb, cX, .5, !1), wu(hZ, Math.floor(ba - 1.4 * bb), 0, bb, cX, .5, !0), a47 = 1.1 * bb / aW[0].width;
		hZ.imageSmoothingEnabled = !0, hZ.setTransform(a47, 0, 0, a47, (ba - a47 * aW[0].width) / 2, -.05 * bb), hZ.drawImage(aW[+aGM], 0, 0), hZ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aYG() {
		aY9 = -1, aGM = aHd.fP(), cp.aFz(257), cp.aGL(aGM), a19.gv = !0, a7F = !0, aY6 = 360;
		for (var bV, hB = 0, al = cw.cx - 1; 0 <= al; al--) w.cO.cm(cw.cy[al]) || (hB += eF.fQ[cw.cy[al]]);
		aGM ? aY4[0] = Math.max(ac.eB(3 * hB, 4), 1) : o.fT ? (bV = 9 === o.fW ? 8 === bN.rA[fd.fe()] ? 80 : (bV = ac.eB(100 * fd.jO(), o.fS), ac.eB(ac.ad(1550 - 11 * bV, 400, 1e3), 10)) : (bV = ac.eB(100 * fd.jO(), o.fS), ac.eB(ac.ad(1600 - 12 * bV,
			400, 1e3), 10)), bV = ac.eB(bV * hB, 100), aY4[0] = Math.max(bV, 1)) : 8 === o.fW ? aY4[0] = Math.max(ac.eB(3 * hB, 4), 1) : aY4[0] = Math.max(ac.eB(3 * hB, 5), 1), aY4[1] = Math.max(hB - aY4[0], 1)
	}

	function aCa() {
		aY8 = dY.hw(), a7F = !0, aY6 = aY2 = 0, aY5 = [], a19.gv = !1, cp.oE(247), aY3[0] = aY3[1] = 0, cp.aFz(673)
	}

	function we() {
		return kX.a3m(cp.aFq()) ? __fx.settings.keybindButtons ? kX.bj - 2 * (bb + h4.gap) : kX.bj - bb - h4.gap : h9.a3m(cp.aFt()) ? h9.we() - bb - h4.gap : c2.bb - bb - a3o.a3p() * h4.gap
	}
	this.gz = function() {
		for (var al = 0; al < 2; al++) aW[al] = w.canvas.a26(kc.get(3), 8 - al, hM.aYB), aW[al] = w.canvas.aJ3(aW[al])
	}, this.a4 = function() {
		aY8 = -1e4, aY7 = aYA = 0, aY9 = -1, this.gv = !1, a7F = aGM = !1, aY3 = [aY2 = aY6 = 0, 0], aY4 = [1, 1], aY5 = [], this.resize()
	}, this.resize = function() {
		bb = kX.bb, this.ba = 4 * bb, (canvas = document.createElement("canvas")).width = this.ba, canvas.height = bb, hZ = canvas.getContext("2d", {
			alpha: !0
		}), hI()
	}, this.kl = function() {
		a7F && hI()
	}, this.h6 = function(bi, bj) {
		return !!this.gv && !(bi < c2.ba - this.ba - h4.gap || bj < we() || (o.ke || this.aO2(o.co) && (df.dg && df.hD(), pH.a2J.aKZ(bi > c2.ba - h4.gap - this.ba / 2 ? 1 : 0)), 0))
	}, this.da = function() {
		0 < aY7 ? 0 === --aY7 && aCa() : this.gv ? 180 == --aY6 && 3 * aY3[0] < aY4[0] ? aCa() : aY3[0] >= aY4[0] ? aGM ? qQ.qh.aR8() : qQ.qh.qi() : aY3[1] >= aY4[1] ? aY7 = 4 : aY6 <= 0 && aCa() : ! function() {
			var aOx = dY.hw();
			if (aOx % 40 == 14) {
				if (aYA) return !(aOx < aYA) && !(aOx < aY8 + 535) && (aYA = aOx + 1071, w.cO.ic()) ? (aYG(), 1) : 0;
				(1 === cw.cx || (o.fT ? fd.jO() : eF.fQ[fR[0]]) >= ac.eB(96 * o.fS, 100)) && (aYA = aOx + 535)
			}
			return
		}() && 0 <= aY9 && (cp.qE(250, L(494, [eF.nF[aY9]]), 673, aY9, hM.hX, hM.hN, -1, !0), aYG())
	}, this.aRB = function() {
		this.gv && aY3[0] < aY4[0] && aCa()
	}, this.aO3 = function(player, aYI) {
		var aYJ = L(aYI ? 495 : 496, [eF.nF[player]]),
			aYJ = (cp.qE(450, aYJ, 257, player, aYI ? hM.a7V : hM.sJ, hM.hN, -1, !0), aY5.push(player), a7F = !0, o.kg ? Math.max(aY4[0], aY4[1]) : eF.fQ[player]),
			aYJ = Math.max(aYJ, 1);
		aYI ? aY3[0] += aYJ : aY3[1] += aYJ, player === o.co && (aY2 = aYI ? 1 : -1)
	}, this.hJ = function() {
		var bj;
		this.gv && (bj = we(), hL.drawImage(canvas, c2.ba - this.ba - h4.gap, bj))
	}, this.aO4 = function(player) {
		if (0 !== aY6) return !1;
		if (!w.cO.iT(1)) return !1;
		if (!w.cO.iV(player)) return !1;
		if (10 <= nk[player] && !w.cO.jJ(player, 9)) return !1;
		if (!o.kg) {
			player = dY.hw();
			if (player < aY8 + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.aO2 = function(i5) {
		if (!w.cO.iT(1)) return !1;
		if (!w.cO.iV(i5)) return !1;
		if (!this.gv) return !1;
		for (var al = aY5.length - 1; 0 <= al; al--)
			if (aY5[al] === i5) return !1;
		return !0
	}, this.aAP = function(player) {
		aY9 = player
	}
}

function yV() {
	var aYL;
	this.a4 = function() {
		aYL = !1
	}, this.da = function() {
		var i5;
		if (function() {
				if (!aYL) {
					if (dY.hw() % 30 != 9) return;
					if (!w.cO.jM(90)) return;
					aYL = !0
				}
				return 1
			}() && (! function() {
				var ga = cp.aGO(956);
				if (ga) {
					if (w.cO.ih(ga.player)) return 1;
					cp.sI(956, 0)
				}
				return
			}() && (-1 === (i5 = (o.fT ? function() {
				var id = fd.fe(),
					bw = cw.cx;
				if (bN.rA[id])
					for (var jy = cw.cy, iZ = bN.iZ, al = 0; al < bw; al++) {
						var i5 = jy[al];
						if (iZ[i5] !== id) return i5
					} else if (1 < bw) return fR[bw - 1];
				return -1
			} : function() {
				for (var a72 = cw.cx, rU = cw.cy, aYT = nk, al = 0; al < a72; al++) {
					var i5 = rU[al];
					if (0 !== aYT[i5]) return i5
				}
				return -1
			})()) ? ! function() {
				var ga = cp.aGO(957);
				if (ga && ga.aFo) {
					if (ee.lb(ga.aFo.eV << 2)) return 1;
					cp.sI(957, 0)
				}
				return
			}() : (cp.qE(0, L(497, [eF.nF[i5]]), 956, i5, hM.hX, hM.hN, -1, !0), 0)))) {
			var bw = ch.e7.e8;
			if (0 !== bw)
				for (var c0 = ch.e7.c0, al = 0; al < bw; al++) {
					var eV = c0[al];
					if (ee.lb(eV << 2)) return void cp.qE(0, L(498, [eN.eX(eV), eN.eZ(eV)]), 957, 0, hM.hX, hM.hN, -1, !0, void 0, {
						ct: 1,
						eV: eV
					})
				}
		}
	}
}

function aIO() {
	this.aw = new a0T, this.a1C = new aEE, this.a4 = function() {
		this.aw.a4()
	}, this.da = function() {
		0 !== this.aw.a0V && this.aw.a0V--
	}
}

function aYU() {
	this.vW = 0, this.fo = 0, this.mapSeed = 0, this.lh = 0, this.vX = 0, this.vY = 0, this.vZ = 0, this.lp = 0, this.va = 0, this.spawningSeed = 0, this.p4 = 0, this.ll = 0, this.vi = [], this.vj = 1048575, this.aYV = 0, this.vg = [{
		fo: 0,
		mapSeed: 0,
		lh: 0,
		dX: 100,
		lp: 0
	}, {
		fo: 1,
		mapSeed: 0,
		lh: 1,
		dX: 200,
		lp: 0
	}, {
		fo: 2,
		mapSeed: 0,
		lh: 2,
		dX: 300,
		lp: 0
	}, {
		fo: 3,
		mapSeed: 0,
		lh: 3,
		dX: 400,
		lp: 0
	}, {
		fo: 0,
		mapSeed: 0,
		lh: 9,
		dX: 500,
		lp: 0
	}, {
		fo: 1,
		mapSeed: 0,
		lh: 10,
		dX: 600,
		lp: 0
	}, {
		fo: 2,
		mapSeed: 0,
		lh: 8,
		dX: 700,
		lp: 0
	}, {
		fo: 3,
		mapSeed: 0,
		lh: 3,
		dX: 800,
		lp: 0
	}]
}

function zk() {
	function aYW() {
		a0.qA(29) && (f5.aw.gI && 1 === f5.aw.gJ[2] && a0.qA(29).aNS(), f5.aw.gI = 0, a0.qA(29).aNO(), a0.qA(29).aNN(), f5.tZ.aPN())
	}
	this.lf = new Array(4), this.gJ = [0, 0, 1, 0], this.gI = 0, this.vd = [0, 0], this.a4 = function() {
		for (var al = 0; al < this.lf.length; al++) this.lf[al] = new aYU;
		this.gJ[0] = a5.c0.data[158].value, __fx.lobbyReminders.setRooms(this.lf), __fx.lobbyReminders.setPopupHandler(function(text) {
			f5.message.f6({
				id: 7,
				eo: text
			})
		})
	}, this.vb = function() {
		aYW(), f5.gF.a4(), __fx.lobbyReminders.check()
	}, this.vh = function() {
		f5.gF.vh();
		for (var al = 0; al < f5.aw.lf.length; al++) {
			var le = f5.aw.lf[al];
			0 === le.vW ? le.aYV = 0 : (le.va = Math.max(le.va - le.aYV % 2, 0), le.aYV++)
		}
		aYW(), __fx.lobbyReminders.check()
	}, this.vm = function(gZ) {
		this.gJ[0] !== gZ || this.gJ[2] || a0.qA(29).aNg()
	}
}

function aI5() {
	var aYZ = new Uint16Array(o.bI),
		aYa = 0;

	function aYe(aDA, aYc) {
		var b3 = dY.hw();
		return 3213 <= b3 ? 4 + ac.eB(100 * aYc, fY.aLr(aDA)) : (aDA = 1 + ac.eB(o.fS, 300), b3 < 357 ? 2 + ac.eB(100 * aYc, aDA) : b3 < 714 ? 2 + ac.eB(100 * aYc, 4 * aDA) : b3 < 1071 ? 2 + ac.eB(100 * aYc, 10 * aDA) : b3 < 2142 ? 2 + ac.eB(100 *
			aYc, 30 * aDA) : 2 + ac.eB(100 * aYc, 100 * aDA))
	}

	function aYd(aDA) {
		return o.kg || 4284 <= dY.hw() || w.cO.cm(aDA)
	}
	this.a4 = function() {
		aYZ.fill(0), aYa = 15
	}, this.aLD = function(j1) {
		var player = o.co;
		return !!w.cO.jI(player, j1) && !(!w.cO.iz(player, w.cO.j4(player, kX.a7h()), j1) || (player = j1, j1 = ix.iy[0], !aYd(player) && aYZ[player] + aYe(player, j1) > aYa))
	}, this.cW = function(aDA, aYc) {
		if (!aYd(aDA)) {
			aYc = aYe(aDA, aYc);
			if (aYZ[aDA] + aYc > aYa) return !1;
			aYZ[aDA] += aYc
		}
		return !0
	}, this.da = function() {
		dY.hw() % 100 == 99 && (dY.hw() < 1071 ? aYa += 4 : dY.hw() < 2142 ? aYa += 6 : dY.hw() < 3213 ? aYa += 8 : aYa += 10)
	}
}

function a9h() {
	for (var b3 = document.createElement("canvas"), b3 = (b3.width = 24, b3.height = 24, b3.getContext("2d", {
			alpha: !1
		})), h1 = (b3.fillStyle = "rgb(0,0,0)", b3.fillRect(0, 0, 24, 24), b3.font = "22px system-ui", b3.textBaseline = "middle", b3.textAlign = "center", b3.fillStyle = "rgb(255,255,255)", b3.fillText("Q", 12, 12), b3.getImageData(0, 0, 24, 24)
			.data), bw = h1.length, cX = 0, al = 0; al < bw; al += 4) cX += h1[al];
	return 16383 & cX
}

function a1E() {
	this.zu = 512, this.aRF = 8, this.s7 = 0, this.aJO = 0, this.sN = new Uint16Array(this.zu), this.s5 = new Uint32Array(this.zu), this.s6 = new Uint16Array(this.zu), this.sO = new Uint32Array(this.zu), this.zG = new Uint16Array(this.zu), this.yx =
		new Uint16Array(this.zu), this.s4 = new Uint8Array(this.zu), this.aYf = new Uint8Array(this.zu), this.a35 = new Array(this.zu), this.sM = new Uint16Array(this.zu), this.zt = new Uint8Array(o.bI), this.a2u = new Uint16Array(this.aRF * o.bI),
		this.a4 = function() {
			this.s7 = 0, this.aJO = 0, this.zt.fill(0), this.a35.fill(null)
		}, this.z7 = function(player) {
			var cD = ix.iy[0],
				a1G = ix.a08[1],
				a34 = ix.ak[0],
				aYg = this.aJO,
				bw = this.s7,
				zB = eN.aCo(a34[0]),
				aHM = this.zt[player],
				aHN = (player << 3) + aHM;
			this.sN[bw] = aHN, this.s5[bw] = zB, this.s6[bw] = 0, cD < 60 && (w.cO.j7(player, 60 - cD), cD = 60), this.sO[bw] = cD, this.zG[bw] = e3.z3.z7(bw, eN.zF(zB)), this.yx[bw] = aYg, this.s4[bw] = a1G, this.aYf[bw] = 0, this.a35[bw] = a34,
				this.sM[bw] = 0, this.aJO = (aYg + 1) % 65536, this.zt[player] = aHM + 1, this.a2u[aHN] = bw, this.s7++, e3.a1G.sC(player, a34[a34.length - 1], a1G, aYg, cD)
		}, this.da = function() {
			e3.a1G.da();
			for (var i5 = o.co, hB = e3.fi.cd(i5), zd = (! function(zd) {
					for (var aYl, s5 = zd.s5, sO = zd.sO, aYf = zd.aYf, s6 = zd.s6, zG = zd.zG, a35 = zd.a35, sM = zd.sM, zd = zd.s7, aFF = p.eP << 4, al = zd - 1; 0 <= al; al--) {
						var aYm = s5[al],
							a34 = a35[al],
							aYn = sM[al],
							zB = eN.aCo(a34[aYn]),
							zC = eN.aCo(a34[aYn + 1]),
							aYo = zB % aFF,
							zB = ~~((zB + .5) / aFF),
							aYq = zC % aFF,
							aYr = ~~((zC + .5) / aFF),
							aYs = aYq - aYo,
							aYt = aYr - zB,
							h1 = Math.max(~~Math.sqrt(aYs * aYs + aYt * aYt + .5), 1),
							aAn = sO[al],
							aAn = (aAn = aYf[al] ? 4e4 : 25e4 + Math.min(20 * aAn, 3e5) + Math.min(aAn >> 3, 5e4), s6[al] + Math.max(~~((aAn + .5) / h1), 1));
						65535 <= aAn ? aYn + 2 < a34.length ? (sM[al] = aYn + 1, s5[al] = aYl = function(al, aYu, aYo, aYp, aYn, h1, a34, aFF) {
							aYu = Math.min(aYu - 65535, 65535);
							var a34 = eN.aCo(a34[aYn + 2]),
								aYn = a34 % aFF - aYo,
								a34 = ~~((a34 + .5) / aFF) - aYp,
								aYw = Math.max(~~Math.sqrt(aYn * aYn + a34 * a34 + .5), 1);
							return aYu = Math.min(Math.floor((h1 * aYu + .5) / aYw), 65534), e3.aw.s6[al] = aYu, aYo + ac.eB(aYu * aYn, 65535) + aFF * (aYp + ac.eB(aYu * a34, 65535))
						}(al, aAn, aYq, aYr, aYn, h1, a34, aFF)) : (s5[al] = aYl = zC, s6[al] = 65535) : (s6[al] = aAn, s5[al] = aYl = aYo + ac.eB(aAn * aYs, 65535) + aFF * (zB + ac.eB(aAn * aYt, 65535))), zG[al] = e3.z3.z9(zG[al], aYm,
							aYl)
					}
				}(this), ! function(zd) {
					if (dY.hw() % 2 == 1) {
						var al, bP, cX, j9, b3, aYx, a2H, aYy, rF, hz, i0, zB, aYz, wn, aZ1, rG, bw = zd.s7,
							s5 = zd.s5,
							sN = zd.sN,
							sO = zd.sO,
							aYf = zd.aYf,
							z3 = e3.z3.z3,
							aTY = z3.length,
							z4 = e3.z3.z4,
							aFF = p.eP << 4,
							aZ3 = o.fT,
							aTz = bN.iZ,
							eR = (bw - 1) * (ac.eB(dY.hw(), 2) % 2);
						for (al = 0; al < bw; al++)
							for (bP = Math.abs(al - eR), zB = s5[bP], cX = eN.zF(zB), rF = sN[bP] >> 3, hz = zB % aFF, i0 = ~~((zB + .5) / aFF), aZ1 = sO[bP], j9 = 0; j9 < 9; j9++)
								if (!((aYx = cX + z4[j9]) < 0 || aTY <= aYx))
									for (aYy = z3[aYx], a2H = aYy.length, b3 = 0; b3 < a2H; b3++) aYz = aYy[b3], rG = sN[aYz] >> 3, rF == rG || aZ3 && aTz[rF] === aTz[rG] && aTz[rF] || (rG = s5[aYz], (wn = hz - rG % aFF) * wn + (wn = i0 - ~~(
										(rG + .5) / aFF)) * wn < 14400 && (rG = sO[aYz], wn = rG <= aZ1 ? Math.max(1, ac.eB(rG + ac.eB(aZ1 - rG, 10), 10)) : Math.max(1, ac.eB(aZ1, 10)), sO[aYz] = Math.max(rG - wn, 0), aYf[aYz] = 4))
					}
				}(this), ! function(zd) {
					if (dY.hw() % 5 == 3)
						for (var sO = zd.sO, bw = zd.s7, al = 0; al < bw; al++) {
							var cD = sO[al];
							sO[al] = Math.max(cD - Math.max(1, cD >> 7), 0)
						}
				}(this), this), sO = zd.sO, aYf = zd.aYf, al = zd.s7 - 1; 0 <= al; al--) aYf[al] = aYf[al] >> 1, 0 === sO[al] && (e3.fk.fm(al), e3.sA.sB(al));
			cQ.cR(i5, hB - e3.fi.cd(i5), 15)
		}
}

function j(ze, aG) {
	var ao = document.createElement("div");

	function n4() {
		var al, jZ, bb, eR, h1, aZ5 = c2.je * ao.offsetWidth,
			aZ7 = new Float64Array(function(aZ5) {
				var ba = .25 * w.bc.jb(.6) * c2.jd;
				return Math.max(Math.floor(aZ5 / ba), 1)
			}(aZ5)),
			a57 = h4.a57,
			aZ8 = (aZ5 - (aZ7.length + 1) * h4.gap) / (aZ7.length * c2.je);
		for (aZ7.fill(a57), al = 0; al < aG.length; al++) jZ = (h1 = aG[al].ao).style, bb = w.x.min(aZ7), eR = aZ7.indexOf(bb), jZ.top = w.bc.jW(bb), jZ.left = w.bc.jW(a57 + eR * (aZ8 + a57)), jZ.width = w.bc.jW(aZ8), w.bc.jV(h1, 5), aZ7[eR] += h1
			.offsetHeight + 3 * a57;
		ao.style.height = w.bc.jW(w.x.max(aZ7) - 2 * a57)
	}
	this.am = ao, this.an = aG, this.resize = function() {
		var al;
		for (al = 0; al < aG.length; al++) aG[al].resize();
		n4(), n4()
	}, ao.style.width = "100%", ao.style.maxWidth = "100%", ze.style.lineHeight = "1.5em", ze.style.overflowX = "hidden", ze.style.overflowY = "auto";
	for (var al = 0; al < aG.length; al++) ao.appendChild(aG[al].ao);
	ze.appendChild(ao)
}

function aID() {
	var b3, m3 = !1,
		aZ9 = !1,
		aZA = -1e4,
		aZB = -1,
		aZC = 0;

	function resize(aZG) {
		b3 = 0, kc.a0v() && (aZE(aZG) || m3) && (m3 = !1, h4.resize(), aHi.aQd.resize(), qp.a4(), qv.a4(), pW.resize(), p1.resize(), pV.resize(), a0.resize(), 1 <= o.de ? (kk.resize(!1), a3T.resize(), hx.resize(), vQ.resize(), kX.resize(), cp
		.resize(), df.resize(), h9.resize(), a19.resize(), a3U.resize(), hF.resize(), o4.resize(), kp.resize(), cr.resize(), qO.resize(), fd.resize(), vQ.wj()) : (aB.qt(), aB.qx()), dY.dk = !0)
	}

	function aZD(bV) {
		return bV && 128 < bV ? Math.floor(bV) : 128
	}

	function aZE(aZG) {
		var ba, bb, aZI, gi, gm;
		if (!(0 < c2.a8A)) return gi = aZD(document.documentElement.clientWidth), gm = aZD(window.visualViewport && 2 !== c3.id ? window.visualViewport.height : document.documentElement.clientHeight), ba = gi, bb = gm, aZI = 0 !== c3.id || ba < bb ?
			700 : 1200, aZI = Math.min(aZI / ((ba + bb) / 2), 1), aZI = 0 === a5.c0.data[1].value ? 2 * aZI / 3 : Math.min(aZI + (a5.c0.data[1].value - 1) * (1 - aZI) / 2, 1), c2.je = (window.devicePixelRatio || 1) * aZI, __fx.hoveringTooltip
			.canvasPixelScale = c2.je, aZG && !aZ9 ? (aZ9 = !0, a0.removeChild(document.body, a9u)) : aZ9 && (aZ9 = !1, document.body.appendChild(a9u)), ba = Math.floor(.5 + gi * c2.je), bb = Math.floor(.5 + gm * c2.je), ba !== c2.ba || bb !== c2
			.bb ? (c2.ba = ba, c2.bb = bb, c2.min = aMv(ba, bb), c2.max = aFs(ba, bb), c2.jd = ac.eB(ba + bb, 2), c2.aKp = ba / bb, a9u.width = ba, a9u.height = bb, a9u.style.width = gi + "px", a9u.style.height = gm + "px", aZB = dY.dX + 1e3,
			1) : void 0
	}
	this.ba = 0, this.bb = 0, this.min = 0, this.max = 0, this.jd = 0, this.aKp = 1, this.je = 1, this.a8A = 0, this.gz = function() {
		this.ba = aZD(document.documentElement.clientWidth) + 2, this.bb = aZD(document.documentElement.clientHeight) + 2
	}, this.a4 = function() {
		b3 = 1, a9u = document.getElementById("canvasA"), 2 === c3.id && (a9u.style.webkitUserSelect = "none"), (hL = a9u.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aZE(0)
	}, this.da = function() {
		50 <= ++b3 && resize(0), -1 === aZB || dY.dX < aZB || (aZB = -1, 2e3 * ++aZC >= dY.dX + 8e3 ? console.log("error 3748") : c3.h2.setState(15))
	}, this.aEK = function(v7) {
		m3 = !0, resize(v7)
	}, this.aAS = function() {
		aZA + 1e3 > dY.dX || (aZA = dY.dX, resize(0))
	}
}

function aIk() {
	this.aEc = [L(499), L(500), L(501), L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(510), L(511), L(512), L(513), L(514)];
	var aZK = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.yY = new Array(aZK.length), this.a4 = function() {
		var ak = a5.c0.data[155].value.split(";"),
			cX = ak.length;
		if (function() {
				for (var bw = aZK.length, al = 0; al < bw; al++) yX.yY[al] = aZK[al]
			}(), !(cX > aZK.length))
			for (var al = 0; al < cX; al++) ak[al].length && (this.yY[al] = ak[al])
	}, this.aEe = function(ab, code) {
		for (var yY = this.yY, aZM = aZK, e0 = (yY[ab] = code, ""), bw = yY.length, aZN = [], al = 0; al < bw; al++) aZN.push(yY[al] === aZM[al] ? "" : yY[al]);
		bw--;
		for (al = 0; al < bw; al++) e0 += aZN[al] + ";";
		a5.a6.a7(155, e0 += aZN[bw])
	}, this.aEb = function() {
		a5.a6.a7(155, ""), this.a4()
	}, this.b3 = function(code, ab) {
		return code === this.yY[ab] || code === this.yY[ab + 1]
	}
}

function aI4() {
	function aZR(player) {
		var hB;
		w.cO.ck(player) && (hB = eF.fa[player] - eF.io[player] + lF.cd(player), cQ.cR(player, Math.abs(hB), hB < 0 ? 18 : 12)), eF.fa[player] = 0, eF.io[player] = 0
	}

	function aZW() {
		qO.show(!1, !1, !1, !0), hx.qP(), qQ.qR.qS()
	}

	function aZP(player, cv) {
		for (var al = cv.length - 1; 0 <= al; al--) lF.cS(cv[al], player)
	}

	function aZQ(player) {
		var eG = eF.eG,
			eH = eF.eH,
			eJ = eF.eJ,
			eK = eF.eK,
			eP = p.eP;
		if (eF.fQ[player]) {
			eF.fQ[player] = 0;
			for (var hz = eG[player], i0 = eJ[player], bi = eH[player]; hz <= bi; bi--)
				for (var bj = eK[player]; i0 <= bj; bj--) {
					var i5 = 4 * (bj * eP + bi);
					ee.mR(player, i5) && ee.a9Z(i5)
				}
		}
		eH[player] = eK[player] = 0, eG[player] = eJ[player] = Math.max(eP, p.eQ)
	}
	this.ld = function(i5) {
		var player, hB = eF.fQ[i5] + eF.a73[i5];
		e3.aw.zt[i5] ? hB && (aZP(player = i5, lF.cu(player)), cr.nR(player), aZQ(player), lR.lS(player), lF.clear(player), aZR(player), function(player) {
			eF.a73[player] = 0, eF.lT[player] = [], eF.aOq[player] = [], eF.rW[player] = [], eF.a7t[player] = []
		}(player)) : !hB && eF.lT[i5].length || this.qk(i5)
	}, this.qk = function(player) {
		! function(player) {
			w.cO.cm(player) || (eF.qL[player] = lv.qM.qN(), o.qK++);
			var cv = lF.cu(player);
			0 === cv.length ? w.cO.iX(player) && aZW() : (aZP(player, cv), function(player, cv) {
				var aZZ = cv[function(cv) {
					var al, ab = 0;
					for (al = cv.length - 1; 1 <= al; al--) eF.fQ[cv[al]] > eF.fQ[cv[ab]] && (ab = al);
					return ab
				}(cv)];
				9 === o.fW && (1 === bN.iZ[player] ? eC.qa(8) && a0p.aHY(aZZ) : ar.cD[player] && (cp.sI(765, 0), cp.qE(280, L(515, [eF.nF[aZZ], eF.nF[player]]), 765, aZZ, hM.r1, hM.aZa, -1, !0)));
				if (w.cO.iX(player)) aZW(), cp.cq(aZZ, 1);
				else {
					for (var al = cv.length - 1; 0 <= al; al--)
						if (w.cO.ck(cv[al]) && (cQ.cl[4 - w.cO.cm(player)]++, w.cO.iX(cv[al]))) return cp.cq(player, 0);
					w.cO.cm(player) || cp.aG3(0, player, aZZ)
				}
			}(player, cv))
		}(player), cr.nR(player), aZQ(player), aZR(player),
			function(player) {
				eF.hu[player] = 0, eF.lT[player] = null, eF.aOq[player] = null, eF.rW[player] = null, eF.a7t[player] = null
			}(player), lR.lS(player), lF.clear(player), e3.sA.aZV(player)
	}
}

function lO() {
	aZb() ? (aZc(), l3 !== o.bI && aZd()) : lL()
}

function aZd() {
	jG.aVE(), jG.aVF(eF.aOq[l3]), jG.aVF(eF.rW[l3]), p.a4R(p.fo) && jG.aVF(eF.a7t[l3]), jG.aVG(eF.lT[l3]), jG.aVH(eF.rW[l3]), jG.aVH(eF.a7t[l3]), jG.aVI(), jG.aVJ()
}

function aZc() {
	lA = !0, lF.ce(kz, ky, l0), lF.cf(kz, ky), eF.fQ[kz] += l4, jG.aVB(), aZe()
}

function aZb() {
	return (l3 === o.bI ? aZf : aZg)()
}

function aZg() {
	var aZh = l4 * o.lP,
		aZi = aZj(),
		aZk = aZl(),
		aZi = aZh + 2 * aZi + aZk,
		aZn = l2 * l4;
	return aZi < aZn ? (l0 -= aZi, cQ.cR(kz, aZi, 13), aZo(aZi - aZh, aZk), !0) : l1 && 0 === aZk ? (l0 -= aZn, aZn += w.cO.j7(kz, aZi - aZn + 1), cQ.cR(kz, aZn, 13), aZo(aZn - aZh, 0), !0) : (l0 -= aZn, cQ.cR(kz, aZn, 13), aZo(aZn - aZh, aZk), !1)
}

function aZo(aZn, aZk) {
	if (0 < aZk) {
		if (aZn <= aZk) return cQ.cR(l3, aZn, 13), void lF.cM(l3, kz, aZk - aZn);
		lF.cM(l3, kz, 0), aZn -= aZk
	}
	aZn = ac.eB(aZn, 2), aZn = Math.min(eF.fa[l3], aZn), cQ.cR(l3, aZn, 13), eF.fa[l3] -= aZn
}

function aZl() {
	return lF.cL(l3, kz)
}

function aZj() {
	return ac.eB(l4 * eF.fa[l3], 1 + ac.eB(10 * eF.fQ[l3], 16))
}

function aZf() {
	var aZp = l4 * o.lP;
	return l0 -= aZp, cQ.cR(kz, aZp, 13), !0
}

function aZe() {
	for (var al = l4 - 1; 0 <= al; al--) eF.lT[kz].push(l6[al]), eF.aOq[kz].push(l6[al]), ee.lW(l6[al], kz)
}

function aIJ() {
	this.a3 = new aQV, this.a8 = new aVg, this.a0S = new sZ, this.a4 = function() {
		o.ke || this.a3.a4()
	}, this.da = function() {
		o.ke || (this.a3.da(), 3 !== a0.dU) || dY.hw() % 15 != 5 && 2 !== o.de || a0.dV().a0O()
	}, __fx.replay.restartReplay = () => this.sn(), this.sn = function() {
		var aZr = 0 !== o.de,
			aZs = o.aF;
		aZr || aB.aC(), o.t.aD(), o.data.canvas = null, f2.aw.close(f2.aw.p4, 3257), f2.aw.p4 = 0, o.data.isReplay = 1, o.aE(), aZr && (o.aF = aZs)
	}, this.a0R = function(e0) {
		var al = e0.indexOf("=");
		return 0 <= al ? e0.substring(al + 1) : e0
	}, this.a0Q = function(e0) {
		return e0
	}, __fx.replayHistory.load = saved => {
		saved = a2.a0R(saved), a2.a0S.fq(saved) && a2.sn()
	}
}

function a4M(ct, j9) {
	return 0 <= ct ? ac.eB(ct, j9) : -ac.eB(-ct, j9)
}

function aXb(bV) {
	return bV * bV
}

function aFs(ct, j9) {
	return j9 < ct ? ct : j9
}

function aMv(ct, j9) {
	return ct < j9 ? ct : j9
}

function uo(ct, bV, j9) {
	return bV < ct ? ct : j9 < bV ? j9 : bV
}

function aZt(bV, bw) {
	for (var b3 = ac.eB(bV + 1, 2), al = 0; al < bw; al++) b3 = ac.eB(b3 + ac.eB(bV, b3), 2);
	return b3
}

function aMY(bV, bw) {
	return bV < 1 ? 0 : aZt(bV, bw)
}

function aEu(hz, i0, gi, gm, i1, i2, gj, gn) {
	return !(hz + gi <= i1 || i0 + gm <= i2 || i1 + gj <= hz || i2 + gn <= i0)
}

function aEp(hz, i0, gi, gm, i1, i2, gj, gn) {
	return hz <= i1 && i0 <= i2 && i1 + gj <= hz + gi && i2 + gn <= i0 + gm
}

function vt(bV) {
	return Math.floor(!!bV * (1 + Math.log2(bV + .5)))
}

function aIm() {
	var bi, bj, bb, aPB, aZu, aZv, aZw, aZx, aZy, ba, jn, a4q;
	this.gv = !1, this.a4 = function(e0, aZz) {
		if (1 === c3.id && 13 <= c3.c1 && c3.c1 < 18) return aZz ? void(jn = e0) : jn !== e0 ? void 0 : void c3.dI.saveString(200, e0);
		aZz && (jn = e0, (a4q = document.createElement("a")).appendChild(document.createTextNode(jn)), this.gv = !0, a4q.title = jn, a4q.target = "_blank", a4q.href = jn, a4q.style.textAlign = "center", a4q.style.color = hM.hX, a4q.style
			.position = "absolute", a4q.style.padding = "0px", a4q.style.margin = "0px", this.resize(), document.body.appendChild(a4q), dY.dk = !0)
	}, this.b1 = function() {
		return !(!this.gv || (a0.removeChild(document.body, a4q), this.gv = !1))
	}, this.h6 = function(vO, vP) {
		return !!this.gv && ((vO < bi || vP < bj || bi + ba < vO || bj + bb < vP || bi + ba - aPB < vO && vP < bj + aPB) && (dY.dk = !0, this.gv = !1, a0.removeChild(document.body, a4q)), !0)
	}, this.resize = function() {
		var kT, oN;
		this.gv && (aZx = Math.floor(.8 * (c3.h2.h3() ? c2.ba > c2.bb ? .6 : .55 : .4) * c2.jd), aPB = Math.floor(.15 * aZx), aZu = Math.floor(.35 * aPB), aZv = Math.floor(.5 * aPB), aZw = Math.floor(2.5 * aZv), bb = aPB + aZu + 3 * aZv, kT = w
			.bc.hG(1, aZu / c2.je), aZy = Math.floor(c2.je * hF.measureText(jn, kT)), oN = ba = (aZx < aZy ? aZy : aZx) + 2 * aZw, ba = Math.min(ba, c2.ba - 2 * (c3.h2.h3() ? 2 : 1) * h4.gap), kT = w.bc.hG(1, ba / oN * aZu / c2.je), aZy =
			Math.floor(c2.je * hF.measureText(jn, kT)), bi = Math.floor((c2.ba - ba) / 2), bj = Math.floor((c2.bb - bb) / 2), a4q.style.font = kT, a4q.style.top = Math.floor((bj + 1.4 * aZv + aPB) / c2.je) + "px", a4q.style.left = Math.floor(
				(bi + (ba - aZy) / 2) / c2.je) + "px")
	}, this.hJ = function() {
		this.gv && (hL.fillStyle = hM.hN, hL.fillRect(bi, bj + aPB, ba, bb - aPB), hL.fillStyle = hM.aa0, hL.fillRect(bi, bj, ba, aPB), hL.fillStyle = hM.hX, hL.lineWidth = h4.kx, hL.strokeStyle = hM.hX, hL.strokeRect(bi, bj, ba, bb), hL
			.fillRect(bi, bj + aPB, ba, h4.kx), hL.font = w.bc.hG(1, .48 * aPB), w.bc.textAlign(hL, 1), w.bc.textBaseline(hL, 1), hL.fillText(L(516), Math.floor(bi + (ba - .5 * aPB) / 2), Math.floor(bj + .55 * aPB)), df.hW(Math.floor(bi +
				ba - .8 * aPB), Math.floor(bj + .25 * aPB), Math.floor(.5 * aPB)), hL.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aVe() {
	this.a8l = function(bV) {
		return [bV >> 12 & 63, bV >> 6 & 63, 63 & bV]
	}, this.aa1 = function(bV) {
		for (var ak = this.a8l(bV), al = 0; al < 3; al++) ak[al] = ~~(4.05 * ak[al]);
		return ak
	}, this.aa2 = function(bV) {
		bV = this.aa1(bV);
		return w.color.wR(bV[0], bV[1], bV[2])
	}, this.aa3 = function(ak) {
		for (var al = 0; al < 3; al++) ak[al] = ~~(ak[al] / 4.04);
		return (ak[0] << 12) + (ak[1] << 6) + ak[2]
	}, this.wR = function(br, mL, j9) {
		return "rgb(" + br + "," + mL + "," + j9 + ")"
	}, this.a7K = function(br, mL, j9, ct) {
		return "rgba(" + br + "," + mL + "," + j9 + "," + ct.toFixed(3) + ")"
	}, this.aWy = function(b3) {
		for (var ak = b3.split("(")[1].split(","), a7L = ix.a7L, al = 0; al < 3; al++) a7L[al] = parseInt(ak[al]);
		return 4 === ak.length ? a7L[3] = 255 * parseFloat(ak[3].slice(0, -1)) : a7L[3] = 255, a7L
	}, this.aB4 = function(aa4, h1) {
		for (var ak = aa4.slice(aa4.indexOf("(") + 1, aa4.indexOf(")")).split(","), a7L = ix.a7L, al = 0; al < 3; al++) a7L[al] = ac.ad(parseInt(ak[al].trim(), 10) + h1, 0, 255);
		return 3 === ak.length ? this.wR(a7L[0], a7L[1], a7L[2]) : (aa4 = parseFloat(ak[3].trim()), this.a7K(a7L[0], a7L[1], a7L[2], aa4 = 0 === aa4 ? .3 : aa4))
	}, this.aQy = function(aa5, aa6) {
		for (var v7 = 0, al = 0; al < 3; al++) v7 += Math.abs(aa6[al] - aa5[al]);
		if (!(240 <= v7))
			for (al = 0; al < 3; al++) aa6[al] = aa5[al] + (aa5[al] < 128 ? 80 : -80)
	}, this.aa7 = function(ak) {
		for (var e0 = "#", al = 0; al < 3; al++) {
			var br = ak[al].toString(16);
			e0 += 1 === br.length ? "0" + br : br
		}
		return e0
	}, this.aa8 = function(e0) {
		var br, mL;
		return e0.length < 7 ? hM.r1 : (br = parseInt(e0.slice(1, 3), 16), mL = parseInt(e0.slice(3, 5), 16), e0 = parseInt(e0.slice(5, 7), 16), this.wR(br, mL, e0))
	}
}

function aIZ() {
	var aOa = 501,
		aa9 = (this.hR = new Uint32Array(aOa), this.hS = new Uint32Array(aOa), this.he = new Uint16Array(aOa), this.hE = 0, 1),
		aQg = 0;

	function aaA(self) {
		self.max.fill(0)
	}

	function aaC(self, al) {
		self.max[0] = Math.max(self.hR[al], self.max[0]), self.max[1] = Math.max(self.hS[al], self.max[1]), self.max[2] = Math.max(self.he[al], self.max[2])
	}
	this.max = [0, 0, 0], this.hv = 0, this.cl = new Array(21), this.hg = null, this.gz = function() {
		this.hg = [L(517), L(518), L(519), L(520), L(521), L(522), L(523), L(524), L(20), L(21), L(525), L(526), L(527), L(528), "", L(529), L(530), L(531), L(18), L(532), L(533)]
	}, this.a4 = function() {
		this.hE = 0, aa9 = 1, this.hv = 0, aQg = 0, aaA(this), this.cl.fill(0)
	}, this.aNw = function(player, ir) {
		w.cO.ck(player) && (this.cl[0] += ir + 1, this.cl[1]++, this.cl[12] += ix.iy[1])
	}, this.aGP = function(player, j1) {
		__fx.donationsTracker.logDonation(player, j1, ix.iy[0], hx.aLt());
		player === o.co && (cp.aGP(ix.iy[0], ix.iy[1], j1), this.cl[12] += ix.iy[1], this.cl[16] += ix.iy[0]), j1 === o.co && (cp.aGR(ix.iy[0], player), this.cl[10] += ix.iy[0])
	}, this.aO0 = function(player) {
		w.cO.ck(player) && (this.cl[2]++, this.cl[12] += ix.iy[1])
	}, this.aO8 = function(player) {
		w.cO.ck(player) && (this.cl[19]++, this.cl[12] += ix.iy[1])
	}, this.sP = function(player) {
		w.cO.ck(player) && this.cl[20]++
	}, this.cR = function(player, aCT, ab) {
		w.cO.ck(player) && (this.cl[ab] += aCT)
	}, this.da = function() {
		var self;
		this.hv || 0 < aQg-- || ((self = this).hR[self.hE] = eF.fQ[o.co], self.hS[self.hE] = eF.fa[o.co], self.he[self.hE] = fY.aM2(o.co), aaC(self, self.hE), self.hE++, self.hE === aOa && function(self) {
			aaA(self), aaC(self, 0), self.hE = 1 + ac.eB(aOa, 2);
			for (var al = 1; al < self.hE; al++) self.hR[al] = self.hR[2 * al], self.hS[al] = self.hS[2 * al], self.he[al] = self.he[2 * al], aaC(self, al);
			aa9 *= 2
		}(self), aQg = aa9 - 1, kp.hI(), 0 === eF.hu[o.co] && (self.hv = dY.hw()))
	}
}

function aHo() {
	var b3 = w.color;
	this.r1 = b3.wR(0, 0, 0), this.wt = b3.a7K(0, 0, 0, .7), this.r4 = b3.a7K(0, 0, 0, .5), this.ka = b3.a7K(0, 0, 0, .85), this.hN = b3.a7K(0, 0, 0, .75), this.a25 = b3.a7K(0, 0, 0, .6), this.aB9 = b3.a7K(0, 0, 0, .35), this.hX = b3.wR(255, 255,
			255), this.kb = b3.a7K(255, 255, 255, .3), this.a7Q = b3.a7K(255, 255, 255, .6), this.hr = b3.a7K(255, 255, 255, .4), this.aJr = b3.a7K(255, 255, 255, .25), this.aUV = b3.a7K(255, 255, 255, .85), this.aYC = b3.a7K(255, 255, 255, .75),
		this.aaE = b3.a7K(255, 255, 255, .15), this.aaF = b3.a7K(255, 255, 255, .11), this.a7U = b3.wR(128, 128, 128), this.aGY = b3.a7K(64, 64, 64, .75), this.a7I = b3.a7K(88, 88, 88, .83), this.a5s = b3.a7K(60, 60, 60, .85), this.aaG = b3.a7K(80,
			60, 60, .85), this.aDu = b3.wR(170, 170, 170), this.aDv = b3.wR(200, 235, 245), this.hi = b3.wR(30, 255, 30), this.hh = b3.wR(0, 200, 0), this.a7V = b3.wR(128, 255, 128), this.aaH = b3.a7K(10, 65, 10, .75), this.aLp = b3.a7K(0, 255, 0,
			.6), this.aaI = b3.a7K(0, 255, 0, .5), this.hY = b3.a7K(0, 200, 0, .5), this.a5t = b3.a7K(0, 100, 0, .75), this.aHH = b3.a7K(0, 60, 0, .8), this.uU = b3.a7K(0, 255, 0, .3), this.a24 = b3.a7K(0, 180, 0, .6), this.aaJ = b3.a7K(0, 120, 0,
			.85), this.a6F = b3.wR(0, 120, 0), this.aaK = b3.a7K(0, 70, 0, .85), this.aaL = b3.wR(190, 230, 190), this.aDy = b3.wR(0, 255, 0), this.aaM = b3.wR(255, 120, 120), this.sJ = b3.wR(255, 160, 160), this.hk = b3.wR(255, 70, 70), this.hj = b3
		.wR(230, 0, 0), this.aJh = b3.a7K(220, 0, 0, .6), this.ht = b3.a7K(255, 100, 100, .8), this.aG7 = b3.a7K(100, 0, 0, .85), this.a6E = b3.a7K(60, 0, 0, .85), this.aUh = b3.a7K(200, 0, 0, .6), this.yt = b3.a7K(120, 0, 0, .85), this.aG2 = b3.wR(
			255, 70, 10), this.aE5 = b3.wR(230, 190, 190), this.aDw = b3.wR(255, 0, 0), this.aDx = b3.wR(255, 0, 255), this.aKw = b3.a7K(60, 0, 60, .85), this.aKx = b3.a7K(0, 60, 60, .85), this.hb = b3.a7K(10, 60, 60, .9), this.aaN = b3.a7K(0, 96,
			96, .75), this.aDz = b3.wR(0, 255, 255), this.qF = b3.wR(160, 160, 255), this.uS = b3.a7K(0, 40, 90, .75), this.aUj = b3.a7K(0, 0, 255, .6), this.aaO = b3.wR(200, 200, 255), this.a7H = b3.a7K(50, 50, 255, .83), this.uR = b3.a7K(20, 90,
			150, .75), this.aGZ = b3.a7K(10, 10, 120, .75), this.aLs = b3.wR(255, 120, 100), this.aaP = b3.a7K(255, 255, 0, .5), this.uV = b3.a7K(255, 255, 150, .2), this.a5h = b3.wR(255, 255, 0), this.aG5 = b3.wR(255, 255, 200), this.aUi = b3.a7K(
			200, 200, 0, .6), this.aaQ = b3.a7K(140, 120, 0, .75), this.aaR = b3.a7K(180, 160, 40, .75), this.aaS = b3.a7K(70, 50, 20, .85), this.aaT = b3.a7K(30, 30, 0, .85), this.aKz = b3.a7K(60, 60, 0, .85), this.aaU = b3.wR(255, 255, 100), this
		.aE1 = b3.wR(255, 255, 140), this.aa0 = b3.a7K(255, 140, 0, .75), this.aKy = b3.a7K(70, 40, 0, .85), this.aE0 = b3.wR(255, 150, 0), this.aZa = b3.a7K(255, 200, 80, .85), this.aYB = b3.a7K(0, 0, 0, 0), this.aGv = b3.a7K(255, 255, 255, 0), this
		.aNC = b3.a7K(254, 254, 254, 0)
}

function aaV() {
	function aac(player, cC, aaW) {
		3 <= aaW && 2142 < dY.hw() && (cC === o.bI || eF.fa[cC] < ac.eB(eF.fa[player], 20)) && ar.aOT(player, 20)
	}

	function aad(player, cD, cC, aaW) {
		3 <= aaW && aaW < 6 && ac.eB(eF.fa[player], 8) > eF.fa[cC] && (cD = Math.max(ac.eB(11 * eF.fa[cC], 5), ac.eB(eF.fa[player], 10)));
		aaW = eF.lT[player].length;
		ch.aNu.aXJ(player, cC), ch.aNu.aXL(player, cC, aaW, cD)
	}

	function aab(player, cD) {
		var cC = o.bI,
			bw = eF.lT[player].length;
		ch.aNu.aXI(player), eF.lT[player].length !== bw && ch.aNu.aXL(player, cC, bw, cD)
	}
	this.cj = new Uint8Array(o.bI), this.a4 = function() {
		this.cj.fill(0)
	}, this.aOW = function(player, cD) {
		var aMb, aaW, aaX, aaY;
		lF.cZ(player) && (aMb = fY.aLr(player), 3 <= (aaW = ar.cD[player]) && aaW < 6 && (cD = Math.max(eF.fa[player] - aMb, cD)), aaX = eF.rW[player].length, aaY = eF.aOq[player].length, 30 * eF.fQ[player] > o.fS && nk[player] < 10 && 100 *
			aaY <= aaX && ar.aOT(player, 10), o.fT ? function(player, cD, aaW, aMb) {
				var cC;
				if (ch.aNu.aXN(player, !1) || ch.aNu.aXP(player, !1)) {
					if (!ch.aNu.aXR(player))
						if (ch.aNu.aXQ()) aab(player, cD), aac(player, o.bI, aaW);
						else {
							if (eC.qa(ar.aON[aaW])) cC = ch.aNu.aXU(player);
							else {
								if (ch.aNu.aXS() && eC.qa(ar.aOM[aaW]) && ch.aNu.aXT(), 6 === aaW) return aad(player, cD, ch.aNu.aXg(), aaW);
								cC = ch.aNu.aXX(player)
							}
							aad(player, cD, cC, aaW), aac(player, cC, aaW)
						}
				} else e3.a1H.da(player) || ch.aae.da(player) || ! function(player, cD, aaW, aMb) {
					var cj = ch.ci.cj;
					cj[player] = 0;
					var aag = bN.iZ[player];
					if (0 !== aag) {
						var aAl = eF.fa[player],
							fQ = eF.fQ;
						if (player < o.cF && (cD = aAl), !(aAl < fQ[player] || 5 === aaW && aAl < aMb || 4 === aaW && aAl < ac.eB(aMb, 2))) {
							fd.aAa(aag);
							for (var bw = ix.rC[0], rD = ix.rD, al = eC.qY(bw), j9 = 0; j9 < bw; j9++) {
								var b3 = rD[(j9 + al) % bw];
								if (cj[b3]) return pH.sW.aXy(player, b3, cD)
							}
							var zt = e3.aw.zt;
							for (j9 = 0; j9 < bw; j9++)
								if (b3 = rD[(j9 + al) % bw], zt[b3] && b3 !== player) return pH.sW.aXy(player, b3, cD)
						}
					}
				}(player, cD, aaW, aMb)
			}(player, cD, aaW, aMb) : (!aaY || aaX && (aaX < aaY && !eC.qY(10) || 100 * aaY <= aaX && eC.qY(3) || !eC.qY(8))) && e3.a1H.da(player) || function(player, cD, aaW) {
				ch.aNu.aXN(player, !0) || ch.aNu.aXP(player, !0) ? ch.aNu.aXR(player) || (ch.aNu.aXQ() ? aab(player, cD) : eC.qa(ar.aON[aaW]) ? aad(player, cD, ch.aNu.aXU(player), aaW) : 5 === aaW ? aad(player, cD, ch.aNu.aXc(), aaW) : (ch
					.aNu.aXS() && eC.qa(ar.aOM[aaW]) && ch.aNu.aXT(), aad(player, cD, 6 === aaW ? ch.aNu.aXg() : ch.aNu.aXX(player), aaW))) : ch.aae.da(player)
			}(player, cD, aaW))
	}
}

function py() {
	var b, c, b7, aG;

	function g() {
		bA(), 2 === o.data.playerNamesType && 1 === w.x.f9(o.data.playerNamesData).length && (o.data.playerNamesType = 0), 2 !== o.data.playerNamesType && (o.data.playerNamesData = null), a0.bB()[19] = null, a0.bC()
	}

	function bA() {
		2 === o.data.playerNamesType && w.x.aXv(b7.bE(), o.data.playerNamesData, 20)
	}
	this.show = function() {
		b.show(), this.resize()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), c.resize()
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, b = new e(L(15), [new f("⬅️ " + L(1), g)]), c = new j(b.k, (function(aG) {
		var aT = new aU;
		aT.aV(L(28)), aT.ah(new ai({
			aj: [L(16), L(17), L(9)],
			value: o.data.playerNamesType
		}, function(ab) {
			bA(), o.data.playerNamesType = ab, a0.a1(23)
		})), aT.aX(new rq), aT.aX(new rr({
			value: o.data.selectableName
		}, L(534), function(value) {
			o.data.selectableName = value
		})), aG.push(aT)
	}(aG = []), function(aG) {
		var aT;
		2 === o.data.playerNamesType && ((aT = new aU).aV("Data"), b7 = new bJ(0, 1, 0, 1), o.data.playerNamesData && o.data.playerNamesData.length === o.bI || (o.data.playerNamesData = new Array(o.bI), o.data.playerNamesData.fill("")),
			b7.bK(w.bL.bM(o.data.playerNamesData, 1, '"')), aT.aX(b7), aG.push(aT))
	}(aG), aG))
}

function aIC() {
	this.e7 = new aX0, this.zz = new e2, this.a00 = new r7, this.performance = new aPj, this.aNu = new aXE, this.ci = new aaV, this.aae = new a7s, this.zy = new aRN, this.aW6 = new aJJ, this.a4 = function() {
		this.e7.a4(), this.a00.a4(), this.performance.a4(), this.aNu.a4(), this.ci.a4()
	}, this.da = function() {
		this.performance.da(), this.e7.da(), this.a00.r9()
	}
}

function pm() {
	var aah, aai, aDj, rx, aaj, wL = 0;
	this.a16 = new aKq, aDj = new a3k([.45, .27], [.5, .5], 2 / 3), aai = [new f("⚔️<br>" + L(535), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aak(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : hM.aaK), new f("🗡️<br>" + L(0), function() {
			aak(1)
		}, hM.aKx), new f("🔑<br>" + L(536), function() {
			aak(2)
		}, hM.aaS), new f("☰<br>" + L(537), function() {
			aak(3)
		}, hM.aaG), new f("", function() {
			a0.a1(12)
		}, hM.ka, !1),
		new f("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new f("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rx = new aa(a5.c0.data[122]);
	for (var al = 0; al < aai.length; al++) aai[al].button.style.position = "absolute";

	function aak(ab) {
		c3.h2.setState(10), kc.a0v() || kc.a0w(), 0 === ab ? a0.aw.aD4(1) : 1 === ab ? (a2.a0S.fq(a5.c0.data[156].value, 1) || o.t.av(), a0.a1(19)) : 2 === ab ? 0 !== c3.id || a5.c0.data[140].value ? a0.a1(8, a0.dU, new a5B(16)) : a0.aw.aD9(a0.dU,
			16) : 3 === ab && a0.a1(1)
	}
	rx.aY.style.position = "absolute", rx.aY.style.textAlign = "center", rx.aY.placeholder = L(538), this.show = function() {
		aB.setState(0), c3.h2.setState(12), this.a16.show(), aai[4].bQ(w.color.aa2(a5.c0.data[121].value)), this.resize(), document.body.appendChild(rx.aY);
		for (var al = 0; al < aai.length; al++) document.body.appendChild(aai[al].button);
		1 !== c3.id || c3.c1 < 5 || (aaj && dY.dX > aaj + 144e5 ? c3.dI.setState(14) : aaj = dY.dX)
	}, this.b1 = function() {
		this.a16.b1(), a0.removeChild(document.body, rx.aY);
		for (var al = 0; al < aai.length; al++) a0.removeChild(document.body, aai[al].button)
	}, this.resize = function() {
		this.a16.resize(), this.a16.resize(), aDj.resize();
		var gap = .5 * h4.gap,
			aPB = 10 / 99 * .84 * aDj.ba,
			aan = .16 * aDj.bb,
			wm = .19 * aDj.ba,
			bi = aDj.bi + wm,
			aPB = aDj.bj + aPB + 3 * gap,
			ba = .5 * (aDj.ba - gap) - wm,
			wm = aDj.ba - 2 * wm - aan - gap,
			wm = (w.bc.jY(rx.aY, bi, aPB, wm, aan), w.bc.jY(aai[4].button, bi + wm + gap, aPB, aan, aan), wL = aPB, .5 * (aDj.bj + aDj.bb - (aPB += aan + gap) - gap));
		w.bc.jY(aai[0].button, bi, aPB, ba, wm), w.bc.jY(aai[1].button, bi + ba + gap, aPB, ba, wm), w.bc.jY(aai[2].button, bi, aPB + wm + gap, ba, wm), w.bc.jY(aai[3].button, bi + ba + gap, aPB + wm + gap, ba, wm);
		w.bc.jY(aai[5].button, bi, aPB + wm * 2 + gap * 2, ba * 2 + gap, wm / 3);
		w.bc.jY(aai[6].button, bi, aPB + wm * 2.33 + gap * 3, ba * 2 + gap, wm / 3);
		for (var al = 0; al < aai.length; al++) aai[al].button.style.font = w.bc.hG(0, w.bc.jj(.065 * aDj.bb)), w.bc.jV(aai[al].button, 5);
		rx.aY.style.font = w.bc.hG(0, w.bc.jj(.08 * aDj.bb)), w.bc.jV(rx.aY, 5)
	}, this.hJ = function() {
		if (aB.r0(), p1.hJ(), bw = Math.floor((c3.h2.h3() ? .018 : .0137) * c2.jd), hL.font = w.bc.hG(0, Math.max(5, bw)), w.bc.textBaseline(hL, 0), w.bc.textAlign(hL, 2), hL.fillStyle = hM.hX, hL.fillText(pC.c1, c2.ba, 0), text = "Win count: " +
			__fx.wins.count, textLength = hL.measureText(text).width, bw = Math.max(5, bw), hL.textAlign = "left", hL.textBaseline = "middle", hL.fillText(text, hL.canvas.width - textLength - bw / 2, 2 * bw), pV.hJ(wL), qv.hJ(), kc.a0v()) {
			hL.imageSmoothingEnabled = !1;
			var text = kc.r5("territorial.io"),
				textLength = .84 * aDj.ba / text.width;
			hL.setTransform(textLength, 0, 0, textLength, aDj.bi + .08 * aDj.ba, aDj.bj), aah = aah || w.a14.bX(text, w.a14.bm, [0, 0, 0]);
			for (var bi = -1; bi <= 1; bi += 2)
				for (var bj = -1; bj <= 1; bj += 2) hL.drawImage(aah, bi, bj);
			hL.drawImage(text, 0, 0), hL.imageSmoothingEnabled = !0;
			var bw = kc.r5("logo"),
				aap = .6666 * textLength * text.height / bw.height,
				i1 = .5 * c2.ba,
				i2 = aDj.bj + .5 * textLength * text.height - .5 * aap * bw.height;
			hL.setTransform(aap, 0, 0, aap, i1 - .6 * textLength * text.width, i2), hL.drawImage(bw, 0, 0), hL.setTransform(aap, 0, 0, aap, i1 + .6 * textLength * text.width - aap * bw.width, i2), hL.drawImage(bw, 0, 0), hL.setTransform(1, 0, 0,
				1, 0, 0), hL.imageSmoothingEnabled = !0
		}
	}
}

function aaq(zZ) {
	var a0B = document.createElement("div"),
		aar = document.createElement("div"),
		wI = (this.bi = 0, this.bj = 0);

	function aat() {
		f5.tX.b1()
	}
	this.b8 = zZ, this.show = function(bi, bj, aav) {
		if (wI) return [0, 0];
		wI = 1, this.bi = bi, this.bj = bj,
			function(self, aav) {
				var ba = w.bc.jc(.16, .7),
					bb = zZ.length * ba / 3,
					aax = c2.ba / c2.je,
					aay = c2.bb / c2.je,
					dG = Math.min(1, Math.min(aax / ba, aay / bb));
				ba *= dG, bb *= dG, aav && (self.bi += w.bc.jc(.03, .5)), self.bi = ac.ad(self.bi, 0, aax - ba), self.bj = ac.ad(self.bj, 0, aay - bb), aar.style.left = self.bi + "px", aar.style.top = self.bj + "px", aar.style.width = ba + "px",
					aar.style.height = bb + "px", aar.style.font = w.bc.hG(0, .3 * bb / zZ.length), w.bc.jV(aar, 5);
				for (var al = 1; al < zZ.length; al++) w.bc.jV(zZ[al].button, 8)
			}(this, aav), document.body.appendChild(a0B)
	}, this.b1 = function() {
		wI && (wI = 0, a0B.removeEventListener("click", aat), a0.removeChild(document.body, a0B))
	};
	for (var al = 0; al < zZ.length; al++) new aGw("" + (1 + al), zZ[al].button, 0, 1);
	a0B.style.position = "fixed", a0B.style.top = "0", a0B.style.left = "0", a0B.style.width = "100%", a0B.style.height = "100%", a0B.style.zIndex = "5", aar.style.position = "absolute",
		function() {
			for (var aau = (100 / zZ.length).toFixed(2) + "%", al = 0; al < zZ.length; al++) zZ[al].button.style.width = "100%", zZ[al].button.style.height = zZ[al].button.style.maxHeight = aau, zZ[al].button.style.padding = "0.0em 0.9em", aar
				.appendChild(zZ[al].button)
		}(), a0B.appendChild(aar), a0B.addEventListener("click", aat)
}

function aHp() {
	this.bI = 512, this.cn = 15e8, this.aMc = 1e9, this.jB = 5e4, this.aaz = 512, this.lP = 2, this.co = 0, this.cF = 0, this.qg = 0, this.aHX = 0, this.qK = 0, this.aHO = 512, this.aSt = 512, this.ip = 150, this.kg = !0, this.ke = 0, this.de = 0,
		this.fS = 0, this.kr = !1, this.db = 0, this.aUp = 0, this.fT = !1, this.a0e = 0, this.aQH = 0, this.fW = 0, this.vG = 0, this.qm = null, this.aGJ = new v3, this.x1 = 30, this.aH8 = 0, this.aGH = 0, this.aHD = 0, this.aAY = 0, this.data =
		new lo, this.t = new pQ, this.aF = 0, this.a0P = "", this.aE = function() {
			ix.a4(), qQ.a4(), aFx.clear(), this.qg = this.cF = this.data.humanCount, this.kg = 1 === this.qg, this.kr = !1, this.ke = this.data.isReplay, this.fW = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.vG = this.data.isContest, this.fT = this.fW < 7 || 9 === this.fW, this.fW = 10 === this.fW && this.kg ? 7 : this.fW, this.fW = 8 === this.fW && 2 !== this.cF ? 7 : this.fW, a0p.a4(),
				this.a0e = this.data.numberTeams, this.data.teamPlayerCount ? this.aQH = +(0 < this.data.teamPlayerCount[0]) : (this.aQH = 0, this.fT && this.kg && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.a0e + 1), o.t.u())), this.x1 = this.cF <= 2 ? 30 : this.cF <= 50 ? 40 : 50, this.aUp = this.db = this.data.selectableSpawn, this.qm = this.db ? new aVo : null, 1 === pC.aK8 ? this.aHO = this.cF : this.aHO = this.data
				.playerCount, this.aSt = this.aHO, this.aHX = this.aHO - this.cF, this.qK = 0, this.co = this.data.selectedPlayer, this.aH8 = 0, this.aGH = 0, this.aHD = 0, this.aAY = 0, eC.qV(this.data.spawningSeed), fY.a4(), eF.a4(), a3P.a4(), aHe
				.aFN(), pH.pI.pJ = [], pH.a2J.ab0 = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bN.a4(), this.de = 1, cQ.a4(), fz(), ee.gz(), iB.a4Q(), dj.a4(), ee
				.a4(), aHg.a4(), eN.a4(), e3.a4(), ch.a4(), a3R.yW(), ar.a4(), aHe.lu(), aHa.a4(), aHb.a4(), cw.a70(), a2.a4(), fd.a4(), a3S.a4(), kp.a4(), fx.putImageData(fy, 0, 0), kk.a4(), vQ.a4(), kX.a4(), h9.a4(), a19.a4(), a3T.a4(), hx.a4(), df
				.a4(), hF.a4(), cp.a4(), a3U.a4(), o4.a4(), qO.a4(), lR.a4(), qI.a4(), lB(), lF.a4(), cr.a4(), iv.a4(), pN.a4(), a3O.a4(), a3Z.a4(), a3V.a4(), this.aGJ.a4(), dY.yW(), ut.aBq(), 0 === eF.hu[o.co] && qO.show(!1, !0), cr.kl(!0), a3Y
			.a4(), dY.dk = !0, this.ke || this.kg && this.db || c3.h2.setState(1), this.aF = 0
		}, this.ks = function(aK7) {
			a2.a3.sk.length ? this.a0P = a2.a3.sk : (this.a0P = a2.a8.a9(), __fx.replayHistory.save(this.a0P)), f2.aw.ab2(), aFx.clear(), this.de = 0, dY.aW4(), c3.h2.setState(0), aB.setState(0), pY.re.show(aK7), 2 === this.aF ? a0.aw.aD4(0) : 1 ===
				this.aF ? a0.a1(19) : a0.a1(5, 5)
		}, this.nQ = function() {
			return this.ke ? df.dg || !h9.kf : this.kg && (df.dg || this.db)
		}, this.o8 = function() {
			return 1 === this.de && !this.db
		}
}

function a6x() {
	function ab3(al, type, c4, c1) {
		a5.c0.data.push({
			ab: al,
			type: type || 0,
			value: c4 || 0,
			c4: c4 || 0,
			c1: c1 || 0
		})
	}

	function ab4(al, type, c4, c1) {
		a5.c0.data.push({
			ab: al,
			type: type,
			value: c4 || "",
			c4: c4 || "",
			c1: c1 || 0
		})
	}

	function ab5(oO) {
		for (var al = a5.c0.data.length; al < oO; al++) a5.c0.data.push(null)
	}
	this.data = [], this.a4 = function() {
		ab3(0, 1, 0, 5), ab3(1, 1, 1), ab3(2, 0), ab4(3, 2), ab3(4, 1), ab4(5, 2, "system-ui", 2), ab3(6, 0), ab3(7, 0, 0), ab3(8, 0), ab3(9, 1, 1), ab3(10, 1), ab3(11, 1, 1), ab4(12, 2, navigator.language), ab3(13), ab3(14), ab3(15, 0, 1), ab3(
				16, 0, 4), ab5(100), ab4(100, 2), ab4(101, 2), ab4(102, 2), ab4(103, 2), ab4(104, 2), ab4(105, 2), ab4(106, 2), ab3(107), ab3(108), ab3(109), ab4(110, 2), ab3(111), ab3(112), ab3(113), ab4(114, 2), ab3(115), ab4(116, 2), ab3(117,
				1), ab4(118, 2, "", 2), ab3(119, 1, 0, 1), ab4(120, 2), ab3(121, 1, ~~(262144 * Math.random())), ab4(122, 2, "Player " + Math.floor(1e3 * Math.random())), ab3(123), ab4(124), ab3(125, 1), ab4(126, 2), ab3(127, 0, 1), ab3(128),
			ab3(129), ab3(130), ab3(131), ab3(132), ab4(133, 2), ab3(134, 0, 5), ab4(135, 2), ab4(136, 2), ab3(137), ab3(138), ab3(139), ab3(140), ab3(141), ab3(142), ab3(143), ab3(144), ab4(145, 2), ab3(146), ab3(147), ab4(148, 2), ab3(149),
			ab3(150, 0, 1), ab4(151, 2), ab3(152, 0, 5), ab3(153, 1), ab3(154, 1), ab4(155, 2), ab4(156, 2), ab3(157), ab3(158), ab3(159), ab3(160), ab4(161, 2), ab3(162, 0, 1024), ab4(163, 2, "0,0,0"), ab4(164, 2, "100,100,100"), ab4(165, 2,
				"30,30,30"), ab4(166, 2, "70,70,70"), ab4(167, 2, "100,100,100"), ab4(168, 2, "85,85,85"), ab4(169, 2, "100,100,100");
		for (var al = 0; al < 4; al++) ab4(170 + al, 2, "255,255,255");
		ab4(174, 2), ab4(175, 2), ab3(176, 0, 200), ab5(180), ab3(180, 0), ab3(181, 0), ab3(182, 0, 1023), ab4(183, 2)
	}, this.a7 = function(ab, value) {
		this.data[ab].value = value
	}, this.ym = function(ab, value) {
		this.a7(ab, value);
		var value = String(value),
			bw = value.length;
		5e4 < bw ? console.log("storage value too large: index " + ab + " size " + bw) : (a5.b5.save(ab, value), a5.b5.save(ab, String(this.data[ab].c1), !0))
	}, this.yk = function(ab) {
		return Number(this.data[ab].value)
	}, this.ab6 = function(ab) {
		return String(this.data[ab].value)
	}
}

function aWM() {
	this.ab0 = 1, this.aKX = function(eV) {
		o.kg ? pH.aKW.aKX(o.co, eV) : f2.pL.ab7(eV)
	}, this.a7g = function(ir, cC) {
		this.ab0 && (this.ab0 = 0, a5.a6.a7(182, ir)), o.kg ? pH.aKW.a7g(o.co, ir, cC) : f2.pL.ab8(ir, cC)
	}, this.aMd = function(ir, j1) {
		o.kg ? pH.aKW.j0(o.co, ir, j1) : f2.pL.ab9(ir, j1)
	}, this.qD = function(ir, eV) {
		eV = (eV << 3) + ix.a08[6];
		o.kg ? pH.aKW.qD(o.co, ir, eV) : e3.zr.zs(o.co) && f2.pL.abA(ir, eV)
	}, this.qG = function(ir) {
		849 === ir && (ir = 850);
		var fg = ix.a08[3];
		o.kg ? pH.aKW.qG(o.co, ir, fg) : e3.a06.aLH(o.co, fg) && f2.pL.abB(ir, fg)
	}, this.a7f = function(fg) {
		o.kg ? pH.aKW.a7f(o.co, fg) : f2.pL.abB(849, fg)
	}, this.a7e = function(cC) {
		o.kg ? pH.aKW.a7e(o.co, cC) : f2.pL.abC(cC)
	}, this.pM = function(nw) {
		o.kg ? pH.aKW.aKY(o.co, nw) : f2.pL.abD(nw)
	}, this.aKZ = function(aO1) {
		o.kg ? pH.aKW.aKZ(o.co, aO1) : f2.pL.abE(aO1)
	}, this.qc = function() {
		o.kg ? pH.aKW.qc(o.co) : f2.pL.abF()
	}, this.aAP = function() {
		o.kg ? pH.aKW.aAP(o.co) : f2.pL.abC(513)
	}, this.aKa = function(ir, eV, cC) {
		o.kg ? pH.aKW.aKa(o.co, ir, eV, cC) : f2.pL.abG(ir, eV, cC)
	}
}

function aXx() {
	function abM() {
		var mL;
		return 8 === o.fW ? 0 : (mL = Math.floor(eF.qL[o.co] / 50), (mL = Math.min(mL, 200)) / 100)
	}

	function abH() {
		var mL = abM();
		0 !== mL && cp.qE(440, L(539, [mL.toFixed(2)]), 40, 0, hM.a7V, hM.hN, -1, !1)
	}
	this.da = function() {
		var a60;
		0 === qQ.result.aLV || 0 === qQ.result.aAW.length || 8 === o.fW ? w.cO.iV(o.co) && abH() : (function(a60) {
			7 !== o.fW && 10 !== o.fW && 9 !== o.fW || 0 !== o.aGH && a60 && cp.qE(600, L(543, [a60.toFixed(2)]), 40, 0, hM.hX, hM.hN, -1, !1)
		}(a60 = function() {
			cp.qE(520, L(540), 40, 0, hM.hX, hM.hN, -1, !1);
			for (var aAW = qQ.result.aAW, bw = aAW.length, fQ = eF.fQ, ak = [], al = 0; al < bw; al++) {
				var i5 = aAW[al];
				ak.push({
					i5: i5,
					hB: fQ[i5]
				})
			}
			ak.sort((ct, j9) => j9.hB - ct.hB);
			var bO = eF.nF,
				hB = qQ.result.aLU,
				mL = qQ.result.aLV,
				e0 = "",
				a60 = 0;
			for (al = 0; al < bw; al++) {
				var aQT = ak[al].hB * mL / (100 * hB),
					abO = bO[ak[al].i5] + ": " + aQT.toFixed(2) + "   ";
				ak[al].i5 === o.co && (a60 = aQT), 2 < al && 4 !== bw ? 3 === al && (e0 += "(" + L(541, [bw - 3]) + ")") : e0 += abO
			}
			cp.qE(560, w.bL.abP(e0), 40, 0, hM.a7V, hM.hN, -1, !1), a60 ? cp.qE(580, L(542, [a60.toFixed(2) + " + " + abM().toFixed(2)]), 40, 0, hM.a7V, hM.hN, -1, !1) : w.cO.iV(o.co) && abH();
			return a60
		}()), 2 === o.aH8 || 7 <= o.fW || function(a60) {
			var aAW = qQ.result.aAW,
				bw = aAW.length,
				uN = eF.uN,
				fQ = eF.fQ,
				aD8 = [];
			loop: for (var al = 0; al < bw; al++) {
				var i5 = aAW[al],
					aE9 = w.bL.fK(uN[i5]);
				if (null !== aE9) {
					for (var a68 = fQ[i5], j9 = aD8.length - 1; 0 <= j9; j9--)
						if (aE9 === aD8[j9].name) {
							aD8[j9].hB += a68, aD8[j9].ak.push({
								i5: i5,
								hB: a68
							});
							continue loop
						} aD8.push({
						name: aE9,
						hB: a68,
						ak: [{
							i5: i5,
							hB: a68
						}]
					})
				}
			}
			if (0 !== aD8.length) {
				aD8.sort((ct, j9) => j9.hB - ct.hB);
				var ak = aD8[0].ak,
					aTl = (ak.sort((ct, j9) => j9.hB - ct.hB), "[" + aD8[0].name + "]"),
					abQ = 512 * qQ.result.aLV / 26214400,
					cX = (cp.qE(0, L(544, [aTl, abQ.toFixed(4)]), 40, 0, hM.hX, hM.hN, -1, !1), ak.length),
					aTk = aD8[0].hB,
					abR = 1e4 * abQ;
				for (al = 0; al < cX; al++)
					if (ak[al].i5 === o.co) {
						cp.qE(600, L(545, [(abR * ak[al].hB / (10 * aTk)).toFixed(2)]), 40, 0, hM.hX, hM.hN, -1, !1), cp.qE(640, L(546, [(.2 * a60).toFixed(2), aTl]), 40, 0, hM.hX, hM.hN, -1, !1);
						break
					}
			}
		}(a60))
	}, this.qS = function() {
		var abL, vz;
		o.kg || (abL = eF, vz = o.co, 0 === abL.a74[vz]) || abL.aOs[vz] < 1 || 2 * abL.aNt[vz] > 3 * (abL.aOr[vz] + abL.aOs[vz]) || abH()
	}
}

function q4() {
	var b, aGr = !0;

	function aGz(a0E, a4k) {
		var ao = document.createElement("div"),
			abT = document.createElement("span"),
			abU = document.createElement("span");
		abT.textContent = hx.hy(a4k.dX) + ":", abT.style.color = hM.aDv, abT.style.paddingRight = "0.4em", abT.style.display = "table-cell", abT.style.width = "6ch", abT.style.textAlign = "end", ao.appendChild(abT), abU.textContent = a4k.e0, ao
			.appendChild(abU), ao.style.display = "table", a4k.nw && function(ao, nw) {
				{
					var dB;
					nw >= 1024 - nM.gS.o1 ? ((dB = document.createElement("img")).src = nM.bh.o0[nw - 1024 + nM.gS.o1].toDataURL(), dB.style.width = "1.5em", dB.style.height = "1.5em", dB.style.verticalAlign = "middle", ao.appendChild(dB)) : ((dB =
						document.createElement("span")).textContent = nM.gS.o2(nw), dB.style.display = "inline-block", dB.style.fontSize = "1.5em", dB.style.lineHeight = "1em", dB.style.verticalAlign = "middle", ao.appendChild(dB))
				}
			}(ao, a4k.nw), a0E.appendChild(ao)
	}

	function aH0() {
		aGr && (b.k.scrollTop = b.k.scrollHeight)
	}
	this.clear = function() {
		b.k.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aFX = aFx.aTQ(), bw = aFX.length, a0E = document.createDocumentFragment(), al = 0; al < bw; al++) aGz(a0E, aFX[al]);
		b.k.appendChild(a0E), aH0(), b.show(), this.resize(), aGr = !0, aH0()
	}, this.b1 = function() {
		b.b1()
	}, this.resize = function() {
		b.resize(), b.k.style.padding = "0.4em " + w.bc.jW(h4.a57)
	}, this.b2 = function(b3) {
		2 === b3 && b.b4[0].b5()
	}, this.qE = function(a4k) {
		var a0E = document.createDocumentFragment();
		aGz(a0E, a4k), b.k.appendChild(a0E), aH0()
	}, (b = new e(L(443), [new f("⬅️ " + L(1), function() {
		a0.q7(1)
	})])).k.style.overflowY = "auto", b.k.addEventListener("scroll", function() {
		aGr = b.k.scrollTop >= b.k.scrollHeight - b.k.clientHeight - 2
	})
}

function aHq() {
	this.data = new abW;
	var abX = (new v2).L84,
		abY = (this.ft = abX, !(this.aEW = "en"));
	this.a4 = function() {
		var e0, ak;
		abY = !1, ("en" === (e0 = a5.c0.data[12].value).split("-")[0].toLowerCase() ? (fI.ft = abX, fI.aEW = e0, 1) : a5.c0.data[12].value === a5.c0.data[145].value && 0 < a5.c0.data[146].value && (e0 = a5.c0.data[146].value, (ak = a5.b5.a1Y(e0,
			!1)).length === e0) && !!w.x.aXt(ak) && function(ak) {
			for (var bw = ak.length, bb = 0; bb < bw; bb++) ak[bb] = ak[bb].replace("&#39;", "'");
			var abe = a5.b5.a1Y(bw, !0);
			if (bw !== abe.length) return !1;
			if (!w.x.aXt(abe)) return !1;
			for (var cX = abX.length, aJa = new Array(cX), a6O = cX === bw, v = Math.min(bw, cX), al = 0; al < cX; al++)
				if (aJa[al] = abX[al], al < bw && abe[al] === aJa[al]) aJa[al] = ak[al];
				else {
					a6O = !1;
					for (var j9 = 0; j9 < v; j9++)
						if (abe[j9] === aJa[al]) {
							aJa[al] = ak[j9];
							break
						}
				} return fI.ft = aJa, fI.aEW = a5.c0.data[12].value, a6O
		}(ak)) || (abY = !0)
	}, this.aIj = function() {
		bN.gz(), ar.gz(), kp.gz(), cQ.gz(), pV.a4(), a65 = new a4S
	}, this.fu = function() {
		return this.ft === abX || !abX.length
	}, this.aM9 = function() {
		var abf;
		return !!abY && (abY = !1, 0 !== abX.length) && (abf = a5.c0.data[12].value, f2.zJ.a8Z(0, abf.slice(0, 20)), !0)
	}, this.aMC = function(ak) {
		ak.length !== abX.length ? 8 === a0.dU && a0.dV().aCw(30, 0, 1) : (this.ft = ak, this.aEW = a5.c0.data[12].value, a5.a6.a7(145, this.aEW), a5.a6.a7(146, ak.length), a5.b5.a1c(ak, !1), a5.b5.a1c(abX, !0), 8 === a0.dU ? a0.dV().aCw(30) :
			0 === aB.ox() && 5 === a0.dU && a0.aw.aD6())
	}, this.a8g = function() {
		var c5, ak = navigator.languages;
		return ak && ak.length ? (c5 = Math.max(fI.data.fJ(ak[0]), 0), 1 === ak.length ? [c5, c5] : [c5, Math.max(fI.data.fJ(ak[1]), 0)]) : [0, 0]
	}
}

function aVd() {
	var abg = {
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
		abh = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.aGx = function(zT) {
		return zT.replace(abh, function(match) {
			return abg[match] || match
		})
	}, this.gQ = function(bV) {
		var al, aWI, abi, abj, abk;
		if (bV < 0) return "-" + this.gQ(Math.abs(bV));
		if (bV < 1e3) return bV.toString();
		for (aWI = Math.floor(Math.log(bV + .5) / Math.log(10)) + 1, abi = Math.floor((aWI - 1) / 3), abk = (abj = bV.toString()).substring(aWI - 3, aWI), al = 1; al < abi; al++) abk = abj.substring(aWI - 3 * (al + 1), aWI - 3 * al) + " " + abk;
		return abj.substring(0, aWI - 3 * abi) + " " + abk
	}, this.hH = function(i5, aWI) {
		return i5.toFixed(aWI) + "%"
	}, this.abl = function(bV, abm) {
		return bV.toFixed(ac.ad(Math.floor((void 0 === abm ? 3 : abm) - Math.log10(Math.max(bV, 1))), 0, 8))
	}, this.a5Z = function(bV, dG, aWI) {
		return (bV * dG).toFixed(aWI)
	}, this.fK = function(username) {
		var iO, iN = username.indexOf("[");
		return !(iN < 0) && 1 < (iO = username.indexOf("]")) - iN && iO - iN <= 8 ? username.substring(iN + 1, iO).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.fK;
	this.aFy = function(e0) {
		for (var ct = Math.floor(.5 * e0.length + .5), oO = Math.floor(.5 * (ct - 1)), al = 0; al < oO; al++)
			for (var j9 = -1; j9 < 2; j9 += 2) {
				var b3 = ct + j9 * al;
				if (" " === e0[b3]) return [this.abP(e0.substring(0, b3)), this.abn(e0.substring(b3))]
			}
		return [e0.substring(0, ct), e0.substring(ct)]
	}, this.abn = function(e0) {
		for (var bw = e0.length, al = 0; al < bw; al++)
			if (" " !== e0[al]) return e0.substring(al);
		return e0
	}, this.abP = function(e0) {
		for (var al = e0.length - 1; 0 <= al; al--)
			if (" " !== e0[al]) return e0.substring(0, al + 1);
		return e0
	}, this.abo = function(e0, aCT) {
		return e0.split("(")[0] + "(🧈 " + aCT.toFixed(2) + ")"
	}, this.startsWith = function(e0, abp) {
		return e0.substring(0, abp.length) === abp
	}, this.fD = function(e0, abp) {
		var bw = e0.length;
		return e0.substring(bw - abp.length, bw) === abp
	}, this.bM = function(ak, abq, abr) {
		var e0 = "",
			bw = ak.length - 1;
		abr = abr || "";
		for (var al = 0; al < bw; al++) e0 += abr + ak[al] + abr + ",", (al + 1) % abq == 0 && (e0 += "\n");
		return e0 += abr + ak[bw] + abr
	}, this.aJH = function(e0, oC, oD) {
		return e0.replace(new RegExp(oC, "g"), oD)
	}
}

function aKD(title, a3a, a3c) {
	var x8, a3d;
	this.show = function() {
		x8.show(), this.resize()
	}, this.b1 = function() {
		x8.b1()
	}, this.resize = function() {
		x8.resize(), a3d.resize()
	}, this.b2 = function(b3) {
		2 === b3 && x8.b4[0].b5()
	}, a3c = a3c || [new f("⬅️ " + L(1), function() {
		a0.bC()
	}, hM.yt)], x8 = new e(title, a3c), a3d = new a3e(x8.k, a3a), w.bc.textAlign(x8.k.style, 1)
}

function a1P() {
	function aJy(bi, bw, bj, abt, aJP, a84, player) {
		if (!(bj < 1 || aJP < bj))
			for (var al = 0; al <= bw; al++) {
				var hd = eN.aCl(bi, bj);
				if (e3.fi.a2t(hd) && !w.x.has(abt, ee.a2m(hd)) && ee.a9R(hd, player)) return hd >> 2;
				bi += a84
			}
		return -1
	}

	function aK2(bj, bw, bi, abt, aJw, a84, player) {
		if (!(bi < 1 || aJw < bi)) {
			bw = Math.max(bw, 0);
			for (var al = 0; al <= bw; al++) {
				var hd = eN.aCl(bi, bj);
				if (e3.fi.a2t(hd) && !w.x.has(abt, ee.a2m(hd)) && ee.a9R(hd, player)) return hd >> 2;
				bj += a84
			}
		}
		return -1
	}

	function aK6(a2n, a2g, aJt) {
		return -1 !== a2g && (-1 === a2n || eN.rY(a2g, aJt) < eN.rY(a2n, aJt)) ? a2g : a2n
	}
	this.aQQ = function(player, aJt) {
		if (e3.zr.zs(player))
			for (var a3F = eN.aCi(), abt = [];;) {
				var aTj = function(aJt, a3F, abt, player) {
					for (var eW = eN.eX(aJt), eY = eN.eZ(aJt), aJw = p.eP - 2, aJP = p.eQ - 2, aJx = -1, h1 = 0; h1 < a3F; h1++) {
						var aBW = Math.max(eW - h1, 1),
							aBX = Math.max(eY - h1, 1),
							aBY = Math.min(eW + h1, aJw),
							aBP = Math.min(eY + h1, aJP),
							a2n = aJy(eW, aBY - eW, eY - h1, abt, aJP, 1, player),
							a2g = aJy(eW - 1, eW - aBW - 1, eY - h1, abt, aJP, -1, player),
							aBY = aJy(eW, aBY - eW, eY + h1, abt, aJP, 1, player),
							aBW = aJy(eW - 1, eW - aBW - 1, eY + h1, abt, aJP, -1, player),
							aK1 = aK2(eY, aBP - eY - 1, eW - h1, abt, aJw, 1, player),
							aK3 = aK2(eY - 1, eY - aBX - 2, eW - h1, abt, aJw, -1, player),
							aBP = aK2(eY, aBP - eY - 1, eW + h1, abt, aJw, 1, player),
							aBX = aK2(eY - 1, eY - aBX - 2, eW + h1, abt, aJw, -1, player);
						if (aJx = aK6(aJx, a2n, aJt), aJx = aK6(aJx, a2g, aJt), aJx = aK6(aJx, aBY, aJt), aJx = aK6(aJx, aBW, aJt), aJx = aK6(aJx, aK1, aJt), aJx = aK6(aJx, aK3, aJt), aJx = aK6(aJx, aBP, aJt), 0 <= (aJx = aK6(aJx, aBX,
							aJt)) && h1 * h1 >= eN.rY(aJx, aJt)) return aJx
					}
					return -1
				}(aJt, a3F, abt, player);
				if (-1 === aTj) break;
				var id = ee.a2m(eN.eg(aTj));
				if (e3.fi.a2c(player, id)) return !! function(player, aTj, aJt) {
					for (var sD = eN.aCr(aTj, aJt), al = 0; al < 4; al++) {
						var eV = eN.aCp(aTj, sD);
						if (ee.a9S(eN.eg(eV), player)) return ix.a08[6] = sD, 1;
						sD = (sD + 1) % 4
					}
					return
				}(player, aTj, aJt) && (ix.a08[7] = aTj, !0);
				abt.push(id)
			}
		return !1
	}
}

function abW() {
	this.ak = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aEf = function() {
		for (var abw = [], ak = this.ak, bw = ak.length, al = 0; al < bw; al++) abw.push(ak[al]);
		var xu = a5.c0.data[12].c4;
		for (al = 0; al < bw; al++)
			if (abw[al] === xu) {
				abw.splice(al, 1), bw--;
				break
			} abw.sort(), bw++, abw.unshift(xu);
		try {
			if ("undefined" == typeof Intl) return abw;
			for (al = 0; al < bw; al++) {
				var e0 = new Intl.DisplayNames([abw[al]], {
					type: "language"
				}).of(abw[al]);
				e0 !== abw[al] && (abw[al] = abw[al] + ": " + e0)
			}
		} catch (aY) {
			console.log("error 3646: " + aY)
		}
		return abw
	}, this.aEg = function(ms) {
		for (var e0 = a5.c0.data[12].value, bw = ms.length, al = 0; al < bw; al++)
			if (e0 === ms[al].split(":")[0]) return al;
		return 0
	}, this.fJ = function(aby) {
		if (aby && !(aby.length < 2)) {
			aby = aby.split("-")[0].toLowerCase();
			for (var ak = this.ak, bw = ak.length, al = 0; al < bw; al++)
				if (aby === ak[al]) return al
		}
		return -1
	}
}

function aIM() {
	function ac0(key) {
		var a0N;
		return "undefined" == typeof URLSearchParams || (a0N = window.location.search, "string" != typeof(a0N = new URLSearchParams(a0N).get(key))) || a0N.length < 1 ? null : a0N
	}
	this.ld = function() {
		if (0 !== c3.id) return !1;
		if (! function() {
				var value = ac0("account");
				if (!value && !(value = ac0("a"))) return void a59.clear();
				return a59.clear(), a0.a1(8, a0.dU, new a5B(1e3, {
					action: 0,
					dw: value,
					a5C: 0
				})), 1
			}()) {
			var value = ac0("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			a0.a1(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var yo = new URL(window.location.href);
		yo.search = "";
		try {
			return history.replaceState(null, "", yo.toString()), !0
		} catch (aY) {
			console.log("error 352: " + aY)
		}
		return !1
	}, this.a6p = function(key, value) {
		if (0 === c3.id) try {
			var yo = new URL(window.location.href),
				i5 = yo.searchParams;
			i5.set(key, value), yo.search = i5.toString(), history.replaceState(null, "", yo.toString())
		} catch (aY) {
			console.log("error 358: " + aY)
		}
	}
}

function aGw(aMD, ac2, ac3, ac4) {
	var self;
	this.tT = document.createElement("span"), (self = this).tT.textContent = aMD, self.tT.style.color = hM.hX, self.tT.style.position = "absolute", self.tT.style.font = "inherit", ac4 ? self.tT.style.bottom = "0.06em" : self.tT.style.top = "0.12em",
		ac3 ? self.tT.style.left = "0.2em" : self.tT.style.right = "0.2em", self.tT.style.fontSize = "0.6em", self.tT.style.pointerEvents = "none", self.tT.style.whiteSpace = "pre", ac2.style.position = "relative", ac2.style.overflow = "hidden", ac2
		.appendChild(self.tT)
}

function aI0() {
	var kT, ba, bj, ac5, ac6, ac7, canvas, hZ, a7F, hS, ac8, ac9, acA, acB;
	this.bi = 0, this.bb = 0, this.a4 = function() {
		ac7 = o.aaz, ac9 = "rgba(0,100,0,0.8)", acA = "rgba(150,0,0,0.8)", a7F = ac8 = !0, hS = eF.fa[o.co], this.resize()
	}, this.resize = function() {
		ba = Math.floor((c3.h2.h3() ? .305 : .24) * c2.jd), this.bb = Math.floor(.5 + .13 * ba), ba = Math.floor(6 * this.bb), kT = w.bc.hG(1, Math.floor(.8 * this.bb)), ac6 = w.bc.hG(1, Math.floor(.45 * this.bb)), acB = Math.floor(.5 * this.bb),
			p.vw.font = kT, bj = h4.gap, ac5 = Math.floor(1 + .13 * this.bb), (canvas = document.createElement("canvas")).width = ba, canvas.height = this.bb, hZ = canvas.getContext("2d", {
				alpha: !0
			}), w.bc.textBaseline(hZ, 1), w.bc.textAlign(hZ, 1), this.acC()
	}, this.a7r = function() {
		return c3.h2.h3() && c2.ba < 1.2 * c2.bb
	}, this.wZ = function() {
		this.a7r() ? this.bi = c2.ba - ba - h4.gap : this.bi = Math.floor(kk.uP() + (c2.ba - kk.uP() - hx.ba - ba) / 2 - .5 * h4.gap)
	}, this.kl = function() {
		a7F && (a7F = !1, this.acC())
	}, this.acC = function() {
		hZ.font = kT, hZ.clearRect(0, 0, ba, this.bb), hZ.fillStyle = ac8 ? ac9 : acA, hZ.fillRect(0, 0, ba, this.bb), hZ.fillStyle = hM.a7Q;
		var b3 = this.acD(),
			acF = (this.acE(), hZ.fillStyle = eF.fa[o.co] >= fY.aLr(o.co) ? hM.sJ : hM.hX, w.bL.gQ(hS)),
			acF = (hZ.fillText(acF, Math.floor(ba / 2), acB), hZ.measureText(acF).width),
			acG = (hZ.font = ac6, hZ.fillStyle = 9 === b3 ? hM.aaU : hM.hX, fY.aMW),
			acH = "+" + acG,
			gj = hZ.measureText(acH).width,
			acI = Math.floor(this.bb / 12),
			acF = .5 * (ba + acF) + acI;
		(acF + gj + ac5 <= ba || 1e3 <= acG && (acH = "+" + Math.floor(acG / 1e3) + "K", acF + (gj = hZ.measureText(acH).width) + ac5 <= ba)) && hZ.fillText(acH, Math.floor(acF + .5 * gj), Math.floor(.3 * this.bb)), __fx.settings
			.displayTickNumber && hZ.fillText(9 - b3, Math.floor(2 * ac5 + acI), Math.floor(.3 * this.bb)), hZ.fillStyle = hM.hX, hZ.fillRect(0, 0, ba, 1), hZ.fillRect(0, 0, 1, this.bb), hZ.fillRect(0, this.bb - 1, ba, 1), hZ.fillRect(ba - 1, 0,
				1, this.bb)
	}, this.acD = function() {
		var b3 = dY.hw() % 100,
			h8 = (b3 = 9 - ac.eB(b3 -= b3 % 10, 10), Math.floor(b3 * (this.bb - ac5) / 9));
		return hZ.fillRect(0, h8, ac5, this.bb - h8), hZ.fillRect(ba - ac5, h8, ac5, this.bb - h8), b3
	}, this.acE = function() {
		hZ.fillRect(ac5, this.bb - ac5, Math.floor((ba - 2 * ac5) * eF.fa[o.co] / ac7), ac5)
	}, this.da = function() {
		var i5 = o.co;
		w.cO.iV(i5) && (i5 = eF.fa[i5] - eF.io[i5], hS !== i5 ? (ac7 = aFs(i5, ac7), ac8 = hS < i5 && 10 <= i5, hS = i5, a7F = !0) : dY.hw() % 10 == 9 && (a7F = !0))
	}, this.hJ = function() {
		0 === eF.hu[o.co] || o.db || 2 === eF.iW[o.co] || hL.drawImage(canvas, this.bi, bj)
	}
}

function aF4() {
	this.acJ = function(lx, acK) {
		pF.lu(11), pF.pG(1, 0), pF.pG(6, 4), pF.pG(1, acK ? 1 : 0), pF.pG(3, 0 === o.de ? f5.vc ? 6 : 0 : o.ke ? 1 : o.kg ? 7 : o.fW < 7 ? 2 : 8 === o.fW ? 4 : 9 === o.fW ? 5 : 3), f2.aw.send(lx, pF.oU)
	}, this.a1m = function() {
		pF.lu(58), pF.pG(1, 0), pF.pG(6, 5), pF.pG(8, f2.aw.vV), pF.pG(10, lm.ll), pF.pG(9, lm.a1e), pF.pG(10, pC.a8k), pF.pG(14, pC.a8e), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.ab7 = function(eV) {
		pF.lu(27), pF.pG(1, 1), pF.pG(4, 0), pF.pG(22, eV), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.ab8 = function(ir, cC) {
		pF.lu(25), pF.pG(1, 1), pF.pG(4, 1), pF.pG(10, ir), pF.pG(10, cC), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.ab9 = function(ir, j1) {
		pF.lu(24), pF.pG(1, 1), pF.pG(4, 2), pF.pG(10, ir), pF.pG(9, j1), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abA = function(ir, aNy) {
		pF.lu(42), pF.pG(1, 1), pF.pG(4, 3), pF.pG(10, ir), pF.pG(27, aNy), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abB = function(ir, fg) {
		pF.lu(31), pF.pG(1, 1), pF.pG(4, 4), pF.pG(10, ir), pF.pG(16, fg), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abC = function(cC) {
		pF.lu(15), pF.pG(1, 1), pF.pG(4, 5), pF.pG(10, cC), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abD = function(ab) {
		pF.lu(15), pF.pG(1, 1), pF.pG(4, 6), pF.pG(10, ab), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abE = function(aO1) {
		pF.lu(6), pF.pG(1, 1), pF.pG(4, 7), pF.pG(1, aO1), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abF = function() {
		pF.lu(5), pF.pG(1, 1), pF.pG(4, 8), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.abG = function(ir, eV, cC) {
		pF.lu(47), pF.pG(1, 1), pF.pG(4, 10), pF.pG(10, ir), pF.pG(10, cC), pF.pG(22, eV), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.aCI = function(acL, acM) {
		pF.lu(24), pF.pG(1, 1), pF.pG(4, 15), pF.pG(9, acM), pF.pG(10, acL), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.aCK = function(aDA) {
		pF.lu(14), pF.pG(1, 1), pF.pG(4, 14), pF.pG(9, aDA), f2.aw.send(f2.aw.p4, pF.oU)
	}, this.aCO = function(acN, target) {
		var al, bw = acN.length;
		for (pF.lu(14 + 9 * bw), pF.pG(1, 1), pF.pG(4, 13), pF.pG(9, target), al = 0; al < bw; al++) pF.pG(9, acN[al]);
		f2.aw.send(f2.aw.p4, pF.oU)
	}
}

function aWY() {
	var aj = acO(p.fo);
	aj && acP(aj[0], aj[1], aj[2], aj[3], aj[4])
}

function acO(fo) {
	return 2 === fo ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fo ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fo ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fo ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fo ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function acP(acQ, acR, acS, acT, acU) {
	for (var bi, bj, mI, mJ, hc, acX, su = acQ.length - 1, acV = p.eP + p.eQ, bw = (acV *= acV, acS.length), acW = Array(bw), al = bw - 1; 0 <= al; al--) acW[al] = acS[al] * acS[al];
	var acY = new Array(bw),
		xu = new Array(bw),
		acZ = new Array(bw),
		bV = a4G.a4H();
	if (void 0 === acU)
		for (acU = new Array(bw), al = bw - 1; 0 <= al; al--) acU[al] = 0;
	for (al = 1; al < bw; al++) acY[al] = acW[al] - acW[al - 1], xu[al] = acT[al] - acT[al - 1], acZ[al] = acU[al] - acU[al - 1];
	for (bi = p.eP - 1; 0 <= bi; bi--)
		for (bj = p.eQ - 1; 0 <= bj; bj--) {
			for (mI = acV, al = su; 0 <= al; al--) mI = (mJ = (bi - acQ[al]) * (bi - acQ[al]) + (bj - acR[al]) * (bj - acR[al])) < mI ? mJ : mI;
			for (hc = acT[bw - 1], acX = acU[bw - 1], al = 1; al < bw; al++)
				if (mI < acW[al]) {
					hc = acT[al - 1] + a4M((mI - acW[al - 1]) * xu[al], acY[al]), acX = acU[al - 1] + a4M((mI - acW[al - 1]) * acZ[al], acY[al]);
					break
				} aca(p.eP * bj + bi, hc, acX, bV)
		}
}

function aca(ab, hc, acX, bV) {
	hc < 500 ? bV[ab] = ac.eB(bV[ab] * hc * 2, 1e3) : 500 < hc && (bV[ab] += ac.eB(2 * (1e4 - bV[ab]) * (hc - 500), 1e3)), bV[ab] += ac.eB(acX * (10 * hc - bV[ab]), 1e3)
}

function a1B() {
	this.aZV = function(player) {
		for (var a2u = e3.aw.a2u, gd = player << 3, al = gd + e3.aw.zt[player] - 1; gd <= al; al--) this.sB(a2u[al])
	}, this.sB = function(acb) {
		var aw = e3.aw,
			acc = aw.s7 - 1,
			acd = aw.sN[acb],
			ace = aw.zG[acb],
			acf = aw.s5[acb];
		aw.s7 = acc, aw.sN[acb] = aw.sN[acc], aw.s5[acb] = aw.s5[acc], aw.s6[acb] = aw.s6[acc], aw.sO[acb] = aw.sO[acc], aw.zG[acb] = aw.zG[acc], aw.yx[acb] = aw.yx[acc], aw.s4[acb] = aw.s4[acc], aw.aYf[acb] = aw.aYf[acc], aw.a35[acb] = aw.a35[
				acc], aw.sM[acb] = aw.sM[acc], aw.a2u[aw.sN[acb]] = acb,
			function(aU9) {
				var player = aU9 >> 3,
					aw = e3.aw,
					bw = aw.zt[player] - 1,
					aci = (player << 3) + bw;
				aw.zt[player] = bw, aci !== aU9 && (aw.a2u[aU9] = aw.a2u[aci], aw.sN[aw.a2u[aU9]] = aU9)
			}(acd), e3.z3.z3[eN.zF(aw.s5[acb])][aw.zG[acb]] = acb, acc = eN.zF(acf), acd = ace, acc = e3.z3.z3[acc], aw = acc.pop(), acd !== acc.length && (acc[acd] = aw, e3.aw.zG[aw] = acd)
	}
}

function a1D() {
	var ack, acl = 8,
		acm = null;

	function acr(bh, eV, ab) {
		eV *= 4;
		bh[eV] = 255, bh[1 + eV] = 255, bh[2 + eV] = ab, bh[3 + eV] = 255
	}

	function act(be, aEk) {
		var bi, bj, ea, eV, acu, acv, nx = acl,
			bf = w.bc.getImageData(be, nx, nx),
			bh = bf.data,
			cX = (nx >> 1) - .5,
			acx = w.x.aXj(aEk, .5);
		for (w.x.aXk(aEk, acx, 300) || w.x.aXm(aEk, 100), bj = 0; bj < nx; bj++)
			for (bi = 0; bi < nx; bi++) acv = (nx - 1.5) * (nx - 1.5) / 4, bh[eV = 4 * (bj * nx + bi)] = (acu = (ea = (ea = bi - cX) * ea + (ea = bj - cX) * ea) <= (nx - 4.5) * (nx - 4.5) / 4 ? acx : aEk)[0], bh[1 + eV] = acu[1], bh[2 + eV] = acu[2],
				bh[3 + eV] = acv < ea ? 0 : 255;
		be.putImageData(bf, 0, 0)
	}
	this.a4 = function() {
		var ab, nx, aW, be, bf, bh;
		(ack = ack || new Array(o.bI)).fill(null), ab = 255, nx = acl + 4, aW = w.bc.bd(nx, nx), be = w.bc.getContext(aW, !0), bf = w.bc.getImageData(be, nx, nx), acr(bh = bf.data, nx + 1, ab), acr(bh, nx + 2, ab), acr(bh, 2 * nx + 1, ab), acr(
				bh, 2 * nx - 3, ab), acr(bh, 2 * nx - 2, ab), acr(bh, 3 * nx - 2, ab), acr(bh, nx * (nx - 3) + 1, ab), acr(bh, nx * (nx - 2) + 1, ab), acr(bh, nx * (nx - 2) + 2, ab), acr(bh, nx * (nx - 2) - 2, ab), acr(bh, nx * (nx - 1) - 3, ab),
			acr(bh, nx * (nx - 1) - 2, ab), be.putImageData(bf, 0, 0), acm = aW,
			function() {
				if (o.fT)
					for (var aW = new Array(bN.rA.length), bw = o.bI, acp = ack, ub = bN.ub, al = 0; al < bw; al++) {
						var aOf = ub[al];
						aW[aOf] || (aW[aOf] = function(aOf) {
							var aW = w.bc.bd(acl, acl),
								be = w.bc.getContext(aW, !0),
								ak = ix.a7L;
							return ak.set(bN.bU[aOf]), act(be, ak), aW
						}(aOf)), acp[al] = aW[aOf]
					}
			}()
	}, this.hJ = function() {
		var al, player, acy, a8I, cD, su, ad0, ad2, ad3, s5 = e3.aw.s5,
			sN = e3.aw.sN,
			sO = e3.aw.sO,
			aYf = e3.aw.aYf,
			ad4 = ack,
			sE = o.co,
			bw = e3.aw.s7,
			aFC = c2.ba,
			aFD = c2.bb,
			aFF = p.eP << 4,
			iN = nZ,
			hd = iN / acl,
			hz = nY / iN,
			i0 = na / iN,
			ea = (aFC + nY) / iN - hz,
			eb = (aFD + na) / iN - i0,
			be = hL;
		for (be.imageSmoothingEnabled = iN < 9, w.bc.textAlign(be, 1), w.bc.textBaseline(be, 1), al = 0; al < bw; al++) player = sN[al] >> 3, cD = sO[al], acy = .9 + .1 * Math.log10(cD), a8I = (su = s5[al]) % aFF / 16 - acy, su = aFD * (Math
			.floor(su / aFF) / 16 - acy - i0) / eb, ad0 = -2 * (ad3 = iN * acy) * (1 + (ad2 = +(player === sE)) / 8), ad2 = ad2 * ad3 / 4, (ad3 = aFC * (a8I - hz) / ea) < ad0 || su < ad0 || aFC + ad2 < ad3 || aFD + ad2 < su || (a8I = 2 *
			acy * hd, ad0 = acy * iN, null === (ad2 = ad4[player]) && (ad4[player] = ad2 = function(player) {
				var aW = w.bc.bd(acl, acl);
				return act(w.bc.getContext(aW, !0), ee.a7J(player)), aW
			}(player)), player === sE && (be.setTransform(a8I, 0, 0, a8I, ad3 - 2 * a8I, su - 2 * a8I), be.drawImage(acm, 0, 0)), be.setTransform(a8I, 0, 0, a8I, ad3, su), be.drawImage(ad2, 0, 0), (acy = Math.floor(function(cD) {
				if (cD < 1e3) return .42;
				if (cD < 1e4) return .34;
				if (cD < 1e6) return .26;
				if (cD < 1e8) return .19;
				return .15
			}(cD) * ad0)) < 6) || (be.setTransform(1, 0, 0, 1, 0, 0), be.fillStyle = aYf[al] ? hM.hk : hM.hX, be.font = w.bc.hG(1, acy), be.fillText(w.bL.gQ(cD), ad3 + ad0, su + ad0 + .1 * acy));
		be.imageSmoothingEnabled = !1, be.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aU() {
	var ao;
	this.aOv = [], this.ao = document.createElement("div"), this.aV = function(e0, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = e0, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.ao.appendChild(
			title), title
	}, this.a5j = function(e0, marginBottom) {
		var a5i = document.createElement("p");
		return a5i.textContent = e0, a5i.style.fontSize = "0.75em", a5i.style.lineHeight = "1.2em", a5i.style.marginBottom = marginBottom || "0", this.ao.appendChild(a5i), a5i
	}, this.a6T = function(e0) {
		var ad7 = document.createElement("p");
		return ad7.textContent = e0, ad7.style.fontSize = "1em", ad7.style.marginBottom = "0", ad7.style.whiteSpace = "pre-wrap", ad7.style.overflowWrap = "break-word", this.ao.appendChild(ad7), ad7
	}, this.aq = function(a3a, fontSize) {
		var ao = document.createElement("div");
		return ao.innerHTML = a3a, ao.style.fontSize = fontSize || "1em", ao.style.lineHeight = "1.2em", this.ao.appendChild(ao), ao
	}, this.ah = function(a5o) {
		for (var bt = a5o.bt, bw = bt.length, al = 0; al < bw; al++) this.ao.appendChild(bt[al])
	}, this.aX = function(ga) {
		return this.aOv.push(ga), this.ao.appendChild(ga.aY), ga
	}, this.resize = function() {
		for (var bw = this.aOv.length, al = 0; al < bw; al++) this.aOv[al].resize && this.aOv[al].resize()
	}, (ao = this.ao).style.position = "absolute", ao.style.height = "auto", ao.style.padding = "0.5em"
}

function aIX() {
	this.aW9 = !1, this.a9e = !1, this.aVp = !1, this.ad8 = [0, 0, 0, 0], this.render = function() {
		var hz, i0, i1, i2;
		this.aVp = this.aVp || this.a9e, (this.a9e || this.aW9 && this.aVp) && (hz = wq.a9f[0], i0 = wq.a9f[1], i1 = wq.a9f[2], i2 = wq.a9f[3], hz = hz < this.ad8[0] ? this.ad8[0] : hz, i0 = i0 < this.ad8[1] ? this.ad8[1] : i0, i1 = i1 > this
			.ad8[2] ? this.ad8[2] : i1, i2 = i2 > this.ad8[3] ? this.ad8[3] : i2, this.a9e = !1, this.aW9 = !1, hz === this.ad8[0] && i0 === this.ad8[1] && i1 === this.ad8[2] && i2 === this.ad8[3] ? this.x6() : hz <= i1 && i0 <= i2 && fx
			.putImageData(fy, 0, 0, hz, i0, i1 - hz + 1, i2 - i0 + 1))
	}, this.x6 = function() {
		this.aVp && this.ad8[2] >= this.ad8[0] && this.ad8[3] >= this.ad8[1] && fx.putImageData(fy, 0, 0, this.ad8[0], this.ad8[1], this.ad8[2] - this.ad8[0] + 1, this.ad8[3] - this.ad8[1] + 1), this.aVp = !1
	}, this.km = function() {
		this.ad8[2] >= this.ad8[0] && this.ad8[3] >= this.ad8[1] && fx.putImageData(fy, 0, 0, this.ad8[0], this.ad8[1], this.ad8[2] - this.ad8[0] + 1, this.ad8[3] - this.ad8[1] + 1), this.aVp = !1
	}, this.a4 = function() {
		var bi, bj;
		this.aW9 = !1, this.a9e = !1, this.aVp = !1, this.ad8[0] = p.eP, this.ad8[1] = p.eQ, this.ad8[2] = this.ad8[3] = 0;
		loop: for (bi = 1; bi < p.eP - 1; bi++)
			for (bj = p.eQ - 2; 1 < bj; bj--)
				if (1 === fw[ee.mQ(bi, bj) + 2]) {
					this.ad8[0] = bi;
					break loop
				} loop: for (bj = 1; bj < p.eQ - 1; bj++)
			for (bi = p.eP - 2; 1 < bi; bi--)
				if (1 === fw[ee.mQ(bi, bj) + 2]) {
					this.ad8[1] = bj;
					break loop
				} loop: for (bi = p.eP - 2; 0 < bi; bi--)
			for (bj = p.eQ - 2; 1 < bj; bj--)
				if (1 === fw[ee.mQ(bi, bj) + 2]) {
					this.ad8[2] = bi;
					break loop
				} loop: for (bj = p.eQ - 2; 0 < bj; bj--)
			for (bi = p.eP - 2; 1 < bi; bi--)
				if (1 === fw[ee.mQ(bi, bj) + 2]) {
					this.ad8[3] = bj;
					break loop
				}
	}
}

function aIT() {
	this.a8e = 1756;
	this.rVersion = 23, this.aVW = 0, this.a4 = function() {
		this.aK8 = 2;
		this.a2T = "2.16.15", this.c1 = "8 Aug 2026 [" + this.a2T + "]";
		var aXD = window.location.hostname.toLowerCase();
		this.pD = !0, this.aRd = 0 <= aXD.indexOf("game.territorial.io"), this.pE = function() {
			try {
				return window.self !== window.top
			} catch (aY) {
				return !0
			}
		}(), this.a8k = (new Date).getTime() % 1048576
	}, this.a2S = 0
}

function aHm() {
	this.adE = "https://territorial.io/changelog", this.aV6 = "https://territorial.io/terms", this.aV7 = "https://territorial.io/privacy", this.adF = "https://territorial.io/tutorial", this.adG = "https://territorial.io/players", this.adH =
		"https://territorial.io/clans", this.adI = "https://territorial.io/clan-results", this.a6o = "https://patreon.com/c/territorial", this.aKA = "https://play.google.com/store/apps/details?id=territorial.io", this.ys =
		"https://apps.apple.com/app/id1581110913", this.aKB = "https://discord.gg/pthqvpTXmh", this.aKC = "https://www.instagram.com/davidtschacher/", this.a2A =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aIe() {
	var adJ = new Array(1),
		adK = new Array(1),
		adL = 20,
		aCE = 0,
		adM = !1;

	function adO() {
		adL++, zp.play()
	}
	this.a4 = function() {
		if (!window.document.documentMode) {
			for (var al = 0; 0 <= al; al--) ! function(al, src) {
				adK[al] = 0, adJ[al] = document.createElement("audio"), adJ[al].src = src, adJ[al].setAttribute("preload", "auto"), adJ[al].setAttribute("controls", "none"), adJ[al].style.display = "none", adJ[al].onpause = function() {
					adK[al] = 1
				}, adJ[al].oncanplaythrough = function() {
					adK[al] = 0 === adK[al] ? 1 : adK[al]
				}, document.body.appendChild(adJ[al])
			}(al,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			adM = !0
		}
	}, this.d1 = function() {
		if (adM) {
			adM = !1;
			for (var al = 0; 0 <= al; al--) adJ[al].onpause = null, adJ[al].oncanplaythrough = null, a0.removeChild(document.body, adJ[al]), adJ[al] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		zp.play()
	}), this.play = function() {
		if (adM) {
			var hB = performance.now();
			if (aCE + 66 < hB)
				for (var al = 0; 0 <= al; al--)
					if (1 === adK[al]) return aCE = hB, adK[al] = 2, void adJ[al].play();
			0 < adL && (adL--, setTimeout(adO, 66))
		}
	}
}

function zl() {
	var adP = null,
		adQ = null,
		adR = 0,
		adS = 0,
		adT = null;

	function adU() {
		0 !== adQ.g6 && (f5.tX.b1(), a0.a1(8, 29, new a5B(25, {
			action: 0,
			dw: gP.fF.gQ(adQ.dw, 5),
			a5C: 0
		}, 29)))
	}

	function adW() {
		return !f5.gE || f5.fi.tW(adQ) ? 1 : 0
	}

	function adV() {
		var bi = adP.bi,
			bj = adP.bj,
			adf = (f5.tX.b1(), adW());
		adP = new aaq([new f(a65.a4Z[5][0], function() {
			adZ(5, 0)
		}, adf), new f(a65.a4Z[5][1], function() {
			adZ(5, 1)
		}, adf), new f(a65.a4Z[5][2], function() {
			adZ(5, 2)
		}, adf), new f(a65.a4Z[5][3], function() {
			adZ(5, 3)
		}, adf)]), adY(bi, bj), adS = adR = 2
	}

	function adX() {
		29 === a0.dU && a0.dV().vn(gP.fF.gQ(adQ.dw, 5))
	}

	function adZ(id, value) {
		5 === id && f2.a5g.zX({
			action: 3,
			dw: gP.fF.gQ(adQ.dw, 5),
			value: value
		})
	}

	function adY(bi, bj, aav) {
		adP.show(bi, bj, aav), f5.tZ.show(adP.bi, adP.bj, adQ, 1)
	}
	this.tY = function(aY, ga) {
		adR = 1, adQ = ga, adP = new aaq([new f(L(547), adU, 0 === ga.g6 ? 1 : 0), new f(L(548), adV, adW()), new f(L(549), adX, 0)]), adY((adT = {
			clientX: aY.clientX,
			clientY: aY.clientY
		}).clientX, adT.clientY, 1)
	}, this.b2 = function(code) {
		if (29 !== a0.dU) return !1;
		if (!adQ) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.b1();
			else if (w.bL.startsWith(code, "Numpad") || w.bL.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === adR) this.tY(adT, adQ);
				else {
					if (!adP) return !1;
					1 === adR ? code <= 1 ? adU() : 2 === code ? adV() : (adX(), this.b1()) : (adZ(adS, ac.ad(code - 1, 0, a65.a4Z[adS].length - 1)), this.b1())
				}
		}
		return !0
	}, this.b1 = function() {
		adR = 0, adP && adP.b1(), adP = null, f5.tZ.b1()
	}
}

function aF3() {
	var adi, adj;
	this.aRg = 3, this.aVX = null, this.p4 = 0, this.vV = 0;

	function ado() {
		return 0 === pW.aEZ ? pC.aRd ? 1 : 0 : pW.aEZ - 1
	}

	function adq(lx, ph, aVP) {
		adj[lx].aMP = !0, adl(lx), adi[lx] = new aVK, adi[lx].a4(lx, ph, aVP)
	}

	function aVT(al) {
		return adj[al].aMP && adi[al].aVT()
	}

	function adl(lx) {
		adj[lx].dX = dY.dX, adj[lx].acK = !1
	}
	this.a4 = function() {
		this.aVX = new Array(this.aRg), this.aVX[0] = "territorial.io", this.aVX[1] = "1.territorial.io", this.aVX[2] = "2.territorial.io", adi = new Array(this.aRg), adj = new Array(this.aRg);
		for (var al = this.aRg - 1; 0 <= al; al--) adj[al] = {
			aMP: !1,
			dX: 0,
			acK: !1
		};
		this.a1l(0, 0, 0)
	}, this.aM6 = function(al) {
		return adi[al]
	}, this.da = function() {
		for (var al = this.aRg - 1; 0 <= al; al--) this.a5e(al) && dY.dX > adj[al].dX + 15e3 && (f2.pL.acJ(al, adj[al].acK), adl(al));
		!this.a5e(0) && dY.dX > adj[0].dX + 8e3 && (adj[0].dX = dY.dX, this.a1l(0, 0, 0))
	}, this.aVs = function(id) {
		return this.a1l(0, id, 0) && this.aVS(0)
	}, this.adm = function(adn) {
		return adn ? pW.aRc : ado()
	}, this.sp = function() {
		return ado() ? "game.territorial.io" : "territorial.io"
	}, this.a5W = function(adp) {
		adp = this.sp() + adp;
		return "<a href='https://" + adp + "' target='_blank'>" + adp + "</a>"
	}, this.a1l = function(lx, ph, adn) {
		adn = this.adm(adn);
		if (adj[lx].aMP) {
			if (adi[lx].aVT()) return adi[lx].aVU(ph), adi[lx].a5e();
			adi[lx].b1()
		}
		return adq(lx, ph, adn), !1
	}, this.aVY = function(lx, ph) {
		console.log("Connection to Server " + lx), f2.zJ.a8P(lx)
	}, this.aVS = function(al) {
		return this.a5e(al) && adi[al].aVS()
	}, this.aM8 = function(al) {
		adi[al].aM8()
	}, this.a5e = function(al) {
		return adj[al].aMP && adi[al].a5e()
	}, this.send = function(lx, oU) {
		0 !== lx && adl(lx), adi[lx].send(oU)
	}, this.aA7 = function(lx) {
		8 === aB.ox() && (adj[lx].acK = !0, f2.a3X.aC9 = !0)
	}, this.close = function(lx, aVV) {
		aVT(lx) && adi[lx].close(aVV)
	}, this.oW = function(lx, aVV) {
		a2U.aLA(aVV), aVT(lx) && adi[lx].close(aVV)
	}, this.aLC = function(aVV) {
		for (var al = this.aRg - 1; 0 <= al; al--) this.close(al, aVV)
	}, this.adr = function(lx, aVV) {
		for (var al = this.aRg - 1; 0 <= al; al--) al !== lx && this.close(al, aVV)
	}, this.ab2 = function() {
		0 === this.p4 && (o.kg || o.ke) || this.close(this.p4, 3246)
	}, this.aVa = function(lx, aY) {
		adi[lx].b1(), a2U.aL2(lx, aY.code)
	}
}

function aL0(aMD, ac2, ads, adt, adu) {
	var self;
	this.tT = document.createElement("span"), this.resize = function() {
			this.tT.style.fontSize = ((adt - ads) * ac2.offsetHeight).toFixed(1) + "px"
		}, (self = this).tT.textContent = aMD, self.tT.style.color = hM.hX, self.tT.style.font = "inherit", self.tT.style.margin = "0.1em 0.6em", self.tT.style.pointerEvents = "none", adu && (self.tT.style.fontWeight = "bold"), self.tT.style
		.whiteSpace = "nowrap", self.tT.style.display = "block", ac2.appendChild(self.tT)
}
a2M(), self.aiCommand746 = function(bV) {
	0 === bV ? aAp() : 1 !== bV || !c3 || 1 !== c3.id || c3.c1 < 14 || dE.aAQ()
}, setTimeout(aAp, 1e4), window.onload = function() {
	aAp()
};