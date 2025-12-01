var o, p, q, r, s, t, u, v, w, x, y, z, a0, dT, aP, dr, aV, eF, eO, ds, dt, a3L, eD, e9, eB, a3M, eC, eA, e4, e3, qz, e7, e2, e8, eE, a3N, a3O, cL, ml, ag, a8, dX, eG, ad, a3P, dZ, mr, a3Q, du, a0p, dY, dn, dh, a2p, a3R, dk, a3S, eM, e6, cD, bI, dV,
	dQ, az, eJ, ul, a3T, eH, eI, a3U, qN, db, dw, aS, fg, e5, pJ, qL, gE, pS, qb, a1y, l3, a3V, aN, dl, dm, dN, dy, a3W, dO, a2, a3X, c9, ea, dp, a3Y, bn, a3Z, a3a, zS, dj, hn, aZ, dz, eK, de, dx, bD, qh, l, th, a3b, a3c, a3d, bx, rP, yb, dP, a0l,
	aC, fX, n5, n6, a6u, em, lp, fd, vL, e0, e1, a9z, fW, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span", "Data", "0.5em",
		" / ", "territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click",
		"' target='_blank'>", "undefined", "pre", "break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string", "rgba(0,0,0,0.8)",
		"pre-wrap", "number", "nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ",
		"🔄 Reload", "wheel", "translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout",
		"long", "logo", "loading", "keydown", "italic ", "https://", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed",
		"Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room",
		"<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "255,255,255", "1v1", "1 Minute",
		"1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
	];

function a(b, c) {
	this.d = [];
	var e = this.d;

	function click() {
		for (var j = 0; j < e.length; j++) e[j].textContent = e[j].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var k = parseInt(this.name);
		void 0 !== b.k && l.m.n(b.k, k), c && c(k)
	}
	for (var g, h = b.i.length, j = 0; j < h; j++)(g = document.createElement("p")).textContent = "⚪ " + b.i[j], g.style.margin = "0", g.name = "" + j, g.style.cursor = "pointer", g.style.fontSize = "1em", g.addEventListener("click", click), e.push(
		g);
	e[b.value].textContent = e[b.value].textContent.replace("⚪", "🟢")
}

function a1() {
	u = 0, v = 2048, w = new Uint32Array(4 * v), x = 0, y = new Uint32Array(v), z = new Uint8Array(a2.a3 * a2.a4)
}

function a5(player) {
	p = player, a0 = !1, a6(), a7();
	for (var j = a8.a9(p) - 1; 0 <= j; j--) o = j, aA();
	a0 && aB()
}

function aB() {
	aC.aD(), aC.aE()
}

function aA() {
	t = a8.aF(p, o), q = a8.aG(p, o), r = a8.aH(p, o), aI(), (0 !== u && (aK(), aL()) ? aM : aJ)()
}

function aL() {
	if (!((s = aN.aO(q, u)) > aP.aQ)) {
		if (!r) return !1;
		var aR = u * (1 + aP.aQ);
		q += aS.aT.aU(p, aR - q), s = aN.aO(q, u)
	}
	return !0
}

function aK() {
	for (var j = u - 1; 0 <= j; j--) z[aN.aO(w[j], 4)] = 0
}

function aJ() {
	1 === a8.a9(p) && aV.aW(p);
	var aX = aS.aT.aY(p, q);
	aZ.aa(p, q - aX, 12), a8.ab(p, o)
}

function a6() {
	for (var player = p, ac = ad.ac, h = Math.min(ac[player].length, v), ae = 0, af = y, j = h - 1; 0 <= j; j--) af[ae++] = ac[player][j];
	x = ae
}

function a7() {
	for (var j = ad.ac[p].length - 1; 0 <= j; j--) ag.ah(ad.ac[p][j]) && ag.ai(ad.ac[p][j], p);
	ad.ac[p] = []
}

function aI() {
	u = 0, (t === aP.aj ? ak : al)()
}

function al() {
	for (var am, an, j, ap = ag.ap, ao = 3; 0 <= ao; ao--)
		for (j = x - 1; 0 <= j; j--) am = y[j] + ap[ao], an = aN.aO(am, 4), 0 === z[an] && ag.aq(am) && ag.ar(am) === t && (z[an] = 1, w[u++] = am)
}

function ak() {
	for (var am, an, j, ap = ag.ap, ao = 3; 0 <= ao; ao--)
		for (j = x - 1; 0 <= j; j--) am = y[j] + ap[ao], an = aN.aO(am, 4), 0 === z[an] && ag.at(am) && (z[an] = 1, w[u++] = am)
}

function au() {
	var av, aw, ax;

	function bB(j) {
		return aS.color.bb(aw[j][0], aw[j][1], aw[j][2])
	}

	function bP(bc, bd) {
		return aS.color.be(aw[bc], aw[bd]), bB(bd)
	}

	function b9() {
		av && (av.remove(), av = null)
	}
	this.show = function(ay, colors, id) {
		0 <= (ax = id) && az.b0.b1(0) && az.b2.b3(0, id), ay = (ay = (ay = (ay = (ay = (ay = (ay = (ay = (ay = (ay = (ay = (ay = ay.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aw = colors, (av = document.createElement("div")).style.position = "fixed", av.style.top = "0", av.style.left = "0", av.style.width = "100%", av.style.height = "100%", av.style.backgroundColor = aS.color.b7(aw[0][0], aw[0][1], aw[0][
				2], .6), av.style.zIndex = "6", av.onclick = function(b8) {
				b8.target === av && b9()
			},
			function(ay) {
				var bC, bA = document.createElement("div");
				bA.style.position = "absolute", bA.style.display = "flex", bA.style.flexDirection = "column", bA.style.top = "50%", bA.style.left = "50%", bA.style.backgroundColor = bB(2), bC = bD.bE.bF() ? aS.bG.bH(bI.min) : aS.bG.bJ(.4);
				bC = Math.max(bC, 200), bA.style.width = aS.bG.bK(bC), bA.style.height = aS.bG.bK(bC), bA.style.transform = "translate(-50%, -50%)",
					function(bA, bC) {
						var bO = document.createElement("div");
						bO.style.flex = "0 0 10%", bO.style.overflow = "hidden", bO.style.backgroundColor = bB(1), bO.style.color = bP(1, 7), bO.style.font = aS.bG.bQ(1, .05 * bC), bO.style.display = "flex", bO.style.alignItems = "center", bO
							.style.justifyContent = "center", bO.innerHTML = L(0), bA.appendChild(bO)
					}(bA, bC),
					function(bA, ay, bC) {
						var bR = document.createElement("div");
						bR.style.flex = "0 0 70%", bR.style.overflowY = "auto", bR.style.overflowX = "hidden", bR.style.whiteSpace = "pre-wrap", bR.style.wordWrap = "break-word", bR.style.padding = aS.bG.bK(.02 * bC), bR.style.backgroundColor =
							bB(2), bR.style.color = bP(2, 8), bR.style.font = aS.bG.bQ(0, .07 * bC), bR.innerHTML = ay, bR.innerHTML = "<style>a { color: inherit; }</style>" + bR.innerHTML, bA.appendChild(bR)
					}(bA, ay, bC),
					function(bA, bC) {
						var bS = document.createElement("div"),
							bT = (bS.style.display = "flex", bS.style.flexDirection = "row", bS.style.justifyContent = "space-between", bS.style.alignItems = "stretch", bS.style.backgroundColor = bB(3), bS.style.flex = "1", bS.style.padding = aS
								.bG.bK(.01 * bC), bS.style.gap = aS.bG.bK(.01 * bC), document.createElement("div")),
							bU = (bT.style.flex = "0 0 60%", bT.style.height = "100%", new bV(L(1, 0, 0, 1), function() {
								b9()
							}, bB(4), !1)),
							bU = (bU.button.style.width = "100%", bU.button.style.height = "100%", bU.button.style.color = bP(4, 9), bU.button.style.font = aS.bG.bQ(1, .05 * bC), bT.appendChild(bU.button), document.createElement("div")),
							bX = (bU.style.flex = "0 0 15%", bU.style.height = "100%", bU.style.backgroundColor = bB(5), document.createElement("div")),
							bY = (bX.style.flex = "1", bX.style.height = "100%", new bV(L(2), function(b8) {
								return aS.bG.bZ(b8), ax < 0 || az.b0.b1(0) && (az.b2.b3(1, ax), ax = -1), !0
							}, bB(6), !1));
						bY.button.style.width = "100%", bY.button.style.height = "100%", bY.button.style.color = bP(6, 10), bY.button.style.font = aS.bG.bQ(1, .035 * bC), bX.appendChild(bY.button), bS.appendChild(bT), bS.appendChild(bU), bS
							.appendChild(bX), bA.appendChild(bS)
					}(bA, bC), av.appendChild(bA)
			}(ay), document.body.appendChild(av)
	}
}

function bf() {
	this.bg = [L(3), L(4), L(5), L(6), L(7), L(8), L(9), L(10), L(11), L(12), L(13), L(14), L(15), L(16), L(17), L(18)];
	var bh = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.bi = new Array(bh.length), this.f = function() {
		var bk = l.bj.data[155].value.split(";"),
			bl = bk.length;
		if (function() {
				for (var h = bh.length, j = 0; j < h; j++) bn.bi[j] = bh[j]
			}(), !(bl > bh.length))
			for (var j = 0; j < bl; j++) bk[j].length && (this.bi[j] = bk[j])
	}, this.bo = function(k, code) {
		for (var bi = this.bi, bp = bh, bq = (bi[k] = code, ""), h = bi.length, br = [], j = 0; j < h; j++) br.push(bi[j] === bp[j] ? "" : bi[j]);
		h--;
		for (j = 0; j < h; j++) bq += br[j] + ";";
		l.m.n(155, bq += br[h])
	}, this.bs = function() {
		l.m.n(155, ""), this.f()
	}, this.bt = function(code, k) {
		return code === this.bi[k] || code === this.bi[k + 1]
	}
}

function bu() {
	this.bv = function(k) {
		if ((bw = bx.by.bw[k]) < 2) return !1;
		var bz = bx.b0.c0[k],
			c1 = 9 === bz.c2 ? 333 : 512,
			bw = Math.min(bw, c1);
		8 === bz.c2 && (bw -= bw % 2);
		c1 = bx.by.c3[k].splice(0, bw), bx.by.bw[k] -= bw, bw = function(c4) {
			if (bx.cP)
				for (var h = c4.length, cQ = bx.cP.cQ, j = 0; j < h; j++)
					if (c4[j].cQ === cQ) return j;
			return -1
		}(c1);
		return -1 === bw ? (bx.by.c7 = bx.by.c7.concat(c1), 1e3 < bx.by.c7.length && bx.by.c7.splice(0, bx.by.c7.length - 1e3), bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === k && 1 === bx.b0.cB[2], !1) : (8 === bz.c2 && (bz.cC = (bz.cC + (bw >>
			1)) % 1024, k = bw - bw % 2, bw %= 2, c1 = c1.slice(k, 2 + k)), cD.f(bz, c1, bw), !0)
	}, this.cE = function(bz, c4, c5) {
		var ao = aP.data = new cF,
			cK = (ao.spawningSeed = bz.spawningSeed, bz.c2 < 7 ? (ao.gameMode = 1, ao.numberTeams = bz.c2 + 2) : 9 === bz.c2 ? (ao.gameMode = ao.isZombieMode = 1, ao.numberTeams = 2) : (ao.gameMode = 0, ao.battleRoyaleMode = 7 === bz.c2 ? 0 :
				10 === bz.c2 ? 1 : 2), ao.selectedPlayer = c5, ao.isContest = bz.cG, ao.mapType = a2.cH(bz.cI) ? 0 : 1, a2.cJ(ao, bz.cI), ao.mapSeed = bz.mapSeed, ao.humanCount = c4.length);
		ao.selectableSpawn = 1 === ao.gameMode || cK < 100, ao.colorsData = new Uint32Array(cK), ao.playerNamesData = new Array(cK);
		for (var j = 0; j < cK; j++) ao.colorsData[j] = c4[j].color, ao.playerNamesData[j] = c4[j].username;
		if (2 === ao.battleRoyaleMode)
			for (ao.elo = new Uint16Array(cK), j = 0; j < cK; j++) ao.elo[j] = c4[j].elo;
		cL.setState(8), a2.cM(bz.cI, ao.mapSeed), aP.cN(), aP.cO = 2
	}
}

function cR() {
	this.cS = null, this.cT = null, this.cU = null, this.f = function() {
		var cV = [120, 105, 92],
			cos = [12, 12, 60],
			cW = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			cX = [140, 130, 120],
			cY = [12, 12, 76],
			cZ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			ca = [130, 117, 106],
			cb = [12, 12, 68],
			cc = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.cS = new Array(a2.cd + 1), this.cS[0] = {
			name: L(19),
			ce: 230,
			cf: 230,
			cg: 1e3,
			ch: 2e3,
			ci: 173
		}, this.cS[1] = {
			name: L(20),
			ce: 800,
			cf: 800,
			cg: 100,
			ch: 50,
			ci: 43
		}, this.cS[2] = {
			name: L(21),
			ce: 512,
			cf: 512,
			cg: 128,
			ch: 32,
			ci: 0
		}, this.cS[3] = {
			name: L(22) + " 1",
			ce: 960,
			cf: 960,
			cg: 60,
			ch: 8,
			ci: 0
		}, this.cS[4] = {
			name: L(23),
			ce: 900,
			cf: 900,
			cg: 100,
			ch: 5,
			ci: 0
		}, this.cS[5] = {
			name: L(24),
			ce: 1e3,
			cf: 1e3,
			cg: 100,
			ch: 40,
			ci: 0
		}, this.cS[6] = {
			name: L(25),
			ce: 1e3,
			cf: 1e3,
			cg: 100,
			ch: 20,
			ci: 0
		}, this.cS[7] = {
			name: L(26),
			ce: 1024,
			cf: 1024,
			cg: 128,
			ch: 32,
			ci: 0
		}, this.cS[8] = {
			name: L(27),
			ce: 820,
			cf: 820,
			cg: 200,
			ch: 100,
			ci: 0
		}, this.cS[9] = {
			name: L(28),
			ce: 1024,
			cf: 1024,
			cg: 128,
			ch: 32,
			ci: 0
		}, this.cS[10] = {
			name: L(29),
			cj: cX,
			ck: cY,
			cl: cZ
		}, this.cS[11] = {
			name: L(30),
			cj: ca,
			ck: cb,
			cl: cc
		}, this.cS[12] = {
			name: L(31),
			cj: ca,
			ck: cb,
			cl: cc
		}, this.cS[13] = {
			name: L(32),
			cj: cV,
			ck: cos,
			cl: cW
		}, this.cS[14] = {
			name: L(33),
			cj: cV,
			ck: cos,
			cl: cW
		}, this.cS[15] = {
			name: L(34),
			cj: cX,
			ck: cY,
			cl: cZ
		}, this.cS[16] = {
			name: L(35),
			cj: cX,
			ck: cY,
			cl: cZ
		}, this.cS[17] = {
			name: L(36),
			cj: cV,
			ck: cos,
			cl: cW
		}, this.cS[18] = {
			name: L(37),
			cj: ca,
			ck: cb,
			cl: cc
		}, this.cS[19] = {
			name: L(38),
			cj: cV,
			ck: cos,
			cl: cW
		}, this.cS[20] = {
			name: L(39),
			ce: 1024,
			cf: 1024,
			cg: 128,
			ch: 32,
			ci: 0
		}, this.cS[21] = {
			name: L(22) + " 2",
			ce: 940,
			cf: 940,
			cg: 80,
			ch: 8,
			ci: 0
		}, this.cS[22] = {
			name: L(40),
			cj: ca,
			ck: cb,
			cl: cc
		}, this.cS[23] = {
			name: L(41),
			cj: cX,
			ck: cY,
			cl: cZ
		}, this.cS[a2.cd] = {
			name: ""
		}, this.cT = new Uint8Array(12);
		for (var j = 0; j < 10; j++) this.cT[j] = j;
		for (this.cT[10] = 20, this.cT[11] = 21, this.cU = new Uint8Array(a2.cm), j = 0; j < 10; j++) this.cU[j] = 10 + j;
		this.cU[10] = 22, this.cU[11] = 23
	}
}

function cn() {
	this.aj = 512, this.co = 15e8, this.cp = 1e9, this.cq = 5e4, this.cr = 512, this.aQ = 2, this.cs = 0, this.ct = 0, this.cu = 0, this.cv = 0, this.cw = 0, this.cx = 512, this.cy = 512, this.cz = 150, this.d0 = !0, this.d1 = 0, this.d2 = 0, this
		.d3 = 0, this.d4 = !1, this.d5 = 0, this.d6 = 0, this.d7 = !1, this.d8 = 0, this.d9 = 0, this.dA = 0, this.dB = 0, this.dC = null, this.dD = new dE, this.dF = 30, this.dG = 0, this.dH = 0, this.dI = 0, this.dJ = 0, this.data = new cF, this
		.dK = new dL, this.cO = 0, this.dM = "", this.cN = function() {
			dN.f(), dO.f(), dP.clear(), this.cu = this.ct = this.data.humanCount, this.d0 = 1 === this.cu, this.d4 = !1, this.d1 = this.data.isReplay, this.dA = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.dB = this.data.isContest, this.d7 = this.dA < 7 || 9 === this.dA, this.dA = 10 === this.dA && this.d0 ? 7 : this.dA, this.dA = 8 === this.dA && 2 !== this.ct ? 7 : this.dA, dQ.f(),
				this.d8 = this.data.numberTeams, this.data.teamPlayerCount ? this.d9 = +(0 < this.data.teamPlayerCount[0]) : (this.d9 = 0, this.d7 && this.d0 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.d8 + 1), aP.dK.dR())), this.dF = this.ct <= 2 ? 30 : this.ct <= 50 ? 40 : 50, this.d6 = this.d5 = this.data.selectableSpawn, this.dC = this.d5 ? new dS : null, 1 === dT.dU ? this.cx = this.ct : this.cx = this.data
				.playerCount, this.cy = this.cx, this.cv = this.cx - this.ct, this.cw = 0, this.cs = this.data.selectedPlayer, this.dG = 0, this.dH = 0, this.dI = 0, this.dJ = 0, dV.dW(this.data.spawningSeed), dX.f(), ad.f(), dY.f(), dZ.da(), db.dc
				.dd = [], de.f(), this.d2 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), aZ.f(), df(), ag.dg(), dh.di(), dj.f(), ag.f(), dk.f(), dl.f(), dm.f(), dn.f(), dp.dq(), dr.f(), dZ.cM(), ds
				.f(), dt.f(), du.dv(), dw.f(), dx.f(), dy.f(), dz.f(), e0.putImageData(e1, 0, 0), e2.f(), e3.f(), e4.f(), e5.f(), e6.f(), e7.f(), e8.f(), e9.f(), eA.f(), eB.f(), eC.f(), eD.f(), eE.f(), aV.f(), eF.f(), a1(), a8.f(), eG.f(), eH.f(), eI
				.f(), eJ.f(), this.dD.f(), eK.dq(), eO.eP(), 0 === ad.eQ[aP.cs] && eE.show(!1, !0), eG.eR(!0), eM.f(), eK.eN = !0, this.d1 || this.d0 && this.d5 || bD.bE.setState(1), this.cO = 0
		}, this.eS = function(eT) {
			dw.eU.eV.length ? this.dM = dw.eU.eV : this.dM = dw.eW.eX(), az.b0.eY(), dP.clear(), this.d2 = 0, eK.eZ(), bD.bE.setState(0), cL.setState(0), ea.eb.show(eT), 2 === this.cO ? c9.b0.ec() : 1 === this.cO ? c9.ed(19) : c9.ed(5, 5)
		}, this.ee = function() {
			return this.d1 ? e9.ef || !e5.eg : this.d0 && (e9.ef || this.d5)
		}, this.eh = function() {
			return 1 === this.d2 && !this.d5
		}
}

function ei() {
	this.ej = function() {
		var ep;
		return !(du.ek < 3 || ad.el[em[0]] >= aP.d3 >> 1) && (aP.d7 ? 9 !== aP.dA && (ep = dX.eq(), !(2 * dX.et(dx.eu()) >= ep)) : function() {
			if (8 === aP.dA) return !1;
			var ep = dX.eq();
			if (2 * ad.er[em[0]] >= ep) return !1;
			return !0
		}())
	}
}

function ev() {
	var ew, ex, ey, fB;

	function f1() {
		f5(), 2 !== aP.data.tIncomeType && (aP.data.tIncomeData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		2 === aP.data.tIncomeType && aS.f8.f9(ey.fA(), aP.data.tIncomeData, 255)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(42), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), fF.fI(new a({
			i: [L(45), L(46), L(47)],
			value: aP.data.tIncomeType
		}, function(k) {
			f5(), 2 !== k || aP.data.tIncomeData || (aP.data.tIncomeData = new Uint8Array(aP.aj), aP.data.tIncomeData.fill(32)), aP.data.tIncomeType = k, c9.ed(26)
		})), fB.push(fF)
	}(fB = []), function(fB) {
		var fF;
		1 === aP.data.tIncomeType && ((fF = new fG).fH("Value"), fF.fJ(new fK({
			k: -1,
			value: aP.data.tIncomeValue
		}, 1, 0, function(b8) {
			var value = aN.fL(Math.floor(b8.target.value), 0, 255);
			b8.target.value = aP.data.tIncomeValue = value
		})), fB.push(fF))
	}(fB), function(fB) {
		var fF;
		2 === aP.data.tIncomeType && ((fF = new fG).fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.tIncomeData, 4)), fF.fJ(ey), fB.push(fF))
	}(fB), fB))
}

function fU() {
	dk.fV(), fW.setTransform(fX, 0, 0, fX, 0, 0), fW.imageSmoothingEnabled = fX < 3, fW.drawImage(a2.fY, e3.fZ(), e3.fa()), dy.fb.fc(), fW.drawImage(fd, e3.fZ(), e3.fa()), dk.fc(), dm.fc(), eG.fc(), (aP.d4 ? (dx.fc(), e5) : (eB.fc(), e2.fc(), e4
	.fc(), e5.fc(), e6.fc(), e8.fc(), e3.fc(), eA.fc(), dx.fc(), e7.fc(), eC.fc(), e9.fc(), eD.fc(), eE.fc(), dz.fc(), eM)).fc(), c9.fc()
}

function fe(ff, ce, cf) {
	ff.clearRect(0, 0, ce, cf), ff.fillStyle = fg.fh, ff.fillRect(0, 0, ce, cf)
}

function fi(ff, ce, cf, fj) {
	ff.fillStyle = fg.fk, ff.fillRect(0, 0, ce, fj), ff.fillRect(0, 0, fj, cf), ff.fillRect(ce - fj, 0, fj, cf), ff.fillRect(0, cf - fj, ce, fj)
}

function fl(ff, fm, fn, bC, fj, am, fo) {
	ff.fillStyle = fg.fk;
	var am = Math.floor(bC * am),
		fq = (am += (am - fj) % 2, Math.floor((am - fj) / 2)),
		bC = Math.floor((bC - am) / 2);
	ff.fillRect(fm + bC, fn + bC + fq, am, fj), fo && ff.fillRect(fm + bC + fq, fn + bC, fj, am)
}

function fs() {
	var ft = 0,
		fu = 0,
		fv = 0,
		fw = null,
		fx = null;

	function g1(g3, g4, g7) {
		var bq = g3.username;
		return (bq += "   " + bx.g8.g9(g3.gA, g3.gB, g3.gC)) + function(g3) {
			g3 = g3.g0;
			if (g3 < 1e3) return "   Gold: " + g3;
			if ((g3 %= 1024) < 1e3) return "   Gold: " + g3 + "k";
			return "   Gold: " + (g3 - 999) + "M"
		}(g3) + ("   IP: " + gE.gF.gG(g3.gH, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][g7 ? fu : fz(g3, g4)])
	}

	function fz(g3, g4) {
		return fu = g4 || bx.by.gI(g3.cQ) ? 1 : 0
	}
	this.fy = function() {
		!ft || fu === fz(fx) && fv === fx.g0 || (fv = fx.g0, fw.show(-1, -1, g1(fx, 0, 1), 1, 1))
	}, this.g2 = function(b8, g3, g4) {
		var g5 = b8.target.getBoundingClientRect();
		this.show(g5.left, g5.top, g3, 0, g4), b8.target.addEventListener("mouseleave", function remove() {
			b8.target.removeEventListener("mouseleave", remove), bx.g6 && bx.g6.fQ(1)
		})
	}, this.show = function(fm, fn, g3, gK, g4) {
		fw = fw || new gL, fv = (fx = g3).g0, fw.show(fm, fn, g1(g3, g4), gK), ft = 1
	}, this.fQ = function(gM) {
		fw && fw.fQ(gM) && (ft = 0, fx = null)
	}
}

function gN() {
	this.bk = new Array(4), this.gO = new Uint16Array(2), this.gP = new Uint16Array(2), this.gQ = new Int32Array(2), this.gR = new Uint32Array(2), this.gS = new Uint32Array(2), this.gT = new Uint8Array(4), this.gU = new Uint8Array(4), this.gV =
		new Uint32Array(4), this.gW = new Uint32Array(5), this.gX = new Uint32Array(8), this.gY = new Uint32Array(8), this.gZ = new Uint16Array(16), this.ga = new Uint16Array(512), this.gb = new Uint16Array(512), this.gc = new Uint16Array(512), this
		.gd = new Uint16Array(0), this.f = function() {
			var h = a2.a3 * a2.a4;
			this.gd.length !== h && (this.gd = new Uint16Array(h))
		}, this.ge = function(bk, gf) {
			return bk[0] = gf, bk
		}, this.gg = function(bk, gf, gh) {
			return bk[0] = gf, bk[1] = gh, bk
		}, this.gi = function(bk, gf, gh, gj) {
			return bk[0] = gf, bk[1] = gh, bk[2] = gj, bk
		}, this.gk = function(bk, gf, gh, gj, gl) {
			return bk[0] = gf, bk[1] = gh, bk[2] = gj, bk[3] = gl, bk
		}
}

function gm() {
	this.gn = function(go) {
		return 0 === go ? 1 === aP.d2 && aP.d5 : 1 === go ? 1 === aP.d2 && !aP.d5 : 2 === aP.d2
	}, this.gp = function(player) {
		return 0 !== ad.eQ[player] && 2 !== ad.gq[player]
	}, this.gr = function(player) {
		return player === aP.cs && 2 !== ad.gq[player]
	}, this.gs = function(player, gt) {
		return player !== gt && (0 === de.gu[player] || de.gu[player] !== de.gu[gt])
	}, this.gv = function() {
		return du.ek < 2 ? 0 : aP.d7 ? 1 < dx.gw() : ad.el[em[1]]
	}, this.gx = function() {
		var ek = du.ek;
		if (0 !== ek) {
			if (!aP.d7) return !this.gy(em[0]);
			for (var gu = de.gu, gz = dx.eu(), h0 = du.h0, j = ek - 1; 0 <= j; j--) {
				var am = h0[j];
				if (gu[am] === gz && !this.gy(am)) return 1
			}
		}
		return 0
	}, this.h1 = function(player) {
		return player === aP.cs
	}, this.h2 = function(gt, h3) {
		return ad.er[aP.cs] < h3 * ad.er[gt]
	}, this.gy = function(player) {
		return player >= aP.ct || 2 === ad.gq[player]
	}, this.h4 = function(player) {
		return 0 !== ad.eQ[player]
	}, this.h5 = function(player) {
		return player < aP.ct
	}, this.h6 = function(h7, h8) {
		return h7 !== h8
	}, this.aY = function(player, h9) {
		var min;
		return h9 = this.hA(player, h9), ad.er[player] += h9, ad.hB[player] && (min = Math.min(ad.hB[player], ad.er[player]), ad.hB[player] -= min, ad.er[player] -= min), h9
	}, this.hA = function(player, h9) {
		var hC = ad.er[player];
		return h9 = Math.min(h9, ad.el[player] * aP.cz - hC), h9 = Math.min(h9, aP.co - hC), Math.max(h9, 0)
	}, this.hD = function(player, hE, hF, hG) {
		var hC = ad.er[player],
			hE = aN.aO(hC * (hE + 1), 1024),
			hF = aN.aO(hF * hC, 1024),
			hE = Math.min(hE, hC - hF);
		return 10 === aP.dA && (hE = eH.hJ(player, hE)), dN.gR[0] = hE, dN.gR[1] = hF, hG <= hE
	}, this.hK = function(player, hL, hM) {
		var player = ad.er[player],
			hI = aN.aO(64 * player, 1024);
		return hL = Math.min(hL, player - hI), hL = this.hA(hM, hL), dN.gR[0] = hL, dN.gR[1] = hI, 1 <= hL
	}, this.hN = function(player, hL, hM) {
		var player = ad.er[player],
			hI = aN.aO(64 * player, 1024);
		return hL = Math.min(hL, player - hI), this.hA(hM, hL)
	}, this.hO = function(hL, hM) {
		return hL = this.hA(hM, hL), dN.gR[0] = hL, dN.gR[1] = 0, 1 <= hL
	}, this.hP = function(player, hQ) {
		return aN.aO(ad.er[player] * (hQ + 1), 1024)
	}, this.hR = function(player, hF) {
		hF = aN.aO(hF * ad.er[player], 1024);
		dN.gR[1] = hF, ad.er[player] -= hF
	}, this.aU = function(player, hS) {
		var gh, gj, bd = ad.er[player];
		return hS <= bd ? ad.er[player] -= hS : (ad.er[player] = 0, gj = ad.hB[player] + (gh = 5 * ((bd = hS - bd) >> 2)), aZ.aa(player, gh - bd, 12), gj <= aP.cq ? ad.hB[player] = gj : (ad.hB[player] = aP.cq, aZ.aa(player, gj - aP.cq, 18))), hS
	}, this.hT = function(player, hE) {
		var er = ad.er,
			hC = er[player],
			hE = aN.aO(hC * (hE + 1), 1024),
			hI = Math.max(aN.aO(hC, 10), 1e3);
		return (hE = Math.min(hE, hC - hI)) < 0 ? (er[player] = 0, hI = Math.min(1e3, hC + aP.cq - ad.hB[player]), dN.gR[1] = hI, ad.hB[player] += hI - hC, 0) : (dN.gR[1] = hI, 10 === aP.dA && (hE = eH.hJ(player, hE)), er[player] -= hI + hE, hE)
	}, this.hU = function(player) {
		ad.er[player] -= dN.gR[0] + dN.gR[1]
	}, this.hV = function(player, gt) {
		return (gt = Math.min(gt, aP.aj)) < aP.aj && 0 === ad.eQ[gt] && (gt = aP.aj), (dN.gX[0] = gt) === aP.aj || aC.hW(player, gt)
	}, this.hX = function(player, hM) {
		return 0 !== ad.eQ[hM] && !aC.hW(player, hM)
	}, this.hY = function(player, hZ) {
		for (var am, h = du.ek, gB = 0, ha = em, j = 0; j < h; j++)
			if (am = ha[j], !this.gy(am)) {
				if (player === am) return !0;
				if (++gB > hZ) return !1
			} return !1
	}, this.hb = function(am) {
		var hc = aP.d7 ? dx.hd() : ad.el[em[0]];
		return hc >= aN.aO(am * aP.d3, 100)
	}, this.he = function(h9, min, max) {
		return Math.floor(aN.fL(isNaN(h9) ? 0 : Number(h9), min, max))
	}
}

function hf() {
	var hg = null;
	this.hh = 0, this.hi = function() {
		var h9 = l.bj.data[5].value;
		hg = "px " + h9, "Trebuchet MS" !== h9 && (hg += ", Trebuchet MS"), this.hh = hj(32, 32, ["a", "b", "m"], 200, hg)
	}, this.hk = function(ce, cf) {
		var bt = document.createElement("canvas");
		return bt.width = ce, bt.height = cf, bt
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ff, ce, cf) {
		return ff.getImageData(0, 0, ce, cf)
	}, this.bQ = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + hg : 1 === type ? "bold " + size + hg : 2 === type ? "lighter " + size + hg : 3 === type ? "italic " + size + hg : 4 === type ? "oblique " + size + hg : 5 === type ? "small-caps " +
			size + hg : "small-caps bold " + size + hg
	}, this.textAlign = function(hl, id) {
		hl.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hl, id) {
		hl.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.hm = function(b8, code, color) {
		color = this.bK(hn.ho) + " solid " + (color || fg.fk);
		5 === (code = code || 5) ? b8.style.border = color : 4 === code ? b8.style.borderLeft = color : 2 === code ? b8.style.borderBottom = color : 6 === code ? b8.style.borderRight = color : b8.style.borderTop = color
	}, this.hp = function(b8, fm, fn, ce, cf) {
		b8 = b8.style;
		b8.left = this.hr(fm), b8.top = this.hr(fn), b8.width = this.hr(ce), b8.height = this.hr(cf)
	}, this.hs = function(h9) {
		return 1 + h9 * bD.bE.bF()
	}, this.bJ = function(h3, an) {
		return h3 * this.hs(void 0 === an ? .5 : an) * bI.ht / bI.hu
	}, this.hv = function(h3, an) {
		return h3 * this.hs(void 0 === an ? .5 : an) * bI.ht
	}, this.hw = function(h3, an, hx) {
		return this.hs(an) * Math.min(h3 * bI.ht, hx * bI.ce) / bI.hu
	}, this.bK = function(h9) {
		return h9.toFixed(1) + "px"
	}, this.hr = function(h9) {
		return this.bH(h9).toFixed(1) + "px"
	}, this.bH = function(h9) {
		return h9 / bI.hu
	}, this.hz = function(i0, i1) {
		for (var bq = "<ul>", h = i0.length, j = 0; j < h; j++) bq += "<li>" + i0[j] + ": <a href='" + i1[j] + "' target='_blank'>" + i1[j] + "</a></li>";
		return bq += "</ul>"
	}, this.i2 = function(i3) {
		return "<a href='" + i3 + "' target='_blank'>" + i3 + "</a>"
	}, this.i4 = function(b8) {
		navigator.clipboard && navigator.clipboard.writeText(b8.value)
	}, this.bZ = function(b8) {
		var aX = b8.textContent;
		aS.fO.i5(aX, "✔") || (1 === aX.length ? b8.textContent = "✔" : b8.textContent = aX + " ✔", setTimeout(function() {
			b8.textContent = aX
		}, 500))
	}, this.measureText = function(bq) {
		return fW.measureText(bq).width
	}, this.i6 = function(i7) {
		i7.style.overflowX = "auto", i7.style.overflowY = "hidden", i7.style.whiteSpace = "nowrap", i7.addEventListener("wheel", function(b8) {
			Math.abs(b8.deltaY) < Math.abs(b8.deltaX) || (this.scrollLeft += b8.deltaY, this.i8 = this.scrollLeft, b8.preventDefault())
		}), i7.addEventListener("scroll", function() {
			this.i8 = this.scrollLeft
		})
	}
}

function i9(iA) {
	var iB = document.createElement("div");
	this.b8 = iB, this.iC = iA, this.resize = function() {
		for (var h = iA.length, j = 1; j < h; j++) aS.bG.hm(iA[j], 4)
	};
	var j, h = iA.length;
	for (iB.style.width = "100%", iB.style.height = "2.7em", iB.style.marginTop = "0.6em", iB.style.border = "inherit", j = 0; j < h; j++) iA[j].style.verticalAlign = "top", iA[j].style.width = (100 / h).toFixed(2) + "%", iA[j].style.height = "100%",
		iA[j].style.fontSize = "0.75em", iB.appendChild(iA[j])
}

function iD() {
	var iE, iF, iG, iH, iI, k = 0,
		iJ = eK.iJ;

	function iT() {
		! function() {
			if (!aP.d5) return;
			if (aP.d0) return;
			if (2 !== aP.d2)
				if (iI % 7 != 0) iI++;
				else if (iH === aP.dF) {
				if (!iX()) return;
				e8.iZ(iH), aP.dC.iL()
			} else {
				if (!iX()) return;
				iI++, iH++, eG.ia(), eG.eR(!0)
			}
			return 1
		}() && iX() && iY()
	}

	function iV() {
		k = 0, (aP.d5 ? (eK.eN = e8.iZ(iH - (iI % 7 == 0 ? 0 : 1) + iI % 7 / 7) || eK.eN, ib) : e9.ef || !e5.eg ? ib : (eK.eN = !0, ic))()
	}

	function iX() {
		var j, h, ie = dw.eU.ig,
			gf = dw.eU.ih,
			gh = dw.eU.ii,
			gj = dw.eU.ij,
			ik = dw.eU.il,
			im = dw.eU.io;
		if (!(iE >= im.length)) {
			if (im = im[iE], ik[iE]) {
				for (h = iF + im, j = iF; j < h; j++) db.dc.ir(ie[j], gf[j], gh[j], gj[j]);
				iF += im, iE++
			} else ++iG >= im && (iE++, iG = 0);
			return 1
		}
		eB.ip("Replay file smaller than expected."), e5.iq(!1), aP.d2 = 2
	}
	this.iK = 0, this.f = function() {
		iI = iH = iG = iF = iE = 0
	}, this.iL = function() {
		var iQ;
		bI.iL(), e5.iM() < 1.7 ? 0 === k ? eK.iJ >= iJ && (iQ = eK.iR / e5.iM(), iJ += iQ * Math.floor(1 + (eK.iJ - iJ) / iQ), 2 === aP.d2 || e9.ef || !e5.eg ? iS() : (iT(), dj.iU()), k++) : iV() : function() {
			var iQ;
			if (eK.iJ >= iJ)
				if (2 === aP.d2 || e9.ef || !e5.eg) iS(), iJ = eK.iJ;
				else {
					for (iQ = eK.iR / e5.iM(), 16 < (eK.iJ - iJ) / iQ && (iJ = eK.iJ - 16 * iQ); eK.iJ >= iJ && 2 !== aP.d2;) iJ += iQ, iT();
					dj.iU()
				} iV()
		}(), iP(), eK.eN && (eK.eN = !1, fU())
	}, this.is = function() {
		dw.eU.io.length - iE <= 2 || eB.ip("Replay file larger than expected.")
	}
}

function it() {
	var k = 0,
		iJ = eK.iJ;
	this.iK = 0, this.iL = function() {
		bI.iL(), aP.d5 ? ib() : 0 === k ? eK.iJ >= iJ && (iJ += eK.iR * Math.floor(1 + (eK.iJ - iJ) / eK.iR), 2 === aP.d2 || e9.ef ? iS() : (iY(), dj.iU()), k++) : ((e9.ef ? ib : (eK.eN = !0, ic))(), k = 0), iP(), eK.eN && (eK.eN = !1, fU())
	}
}

function iu() {
	this.iv = new iw
}

function cF() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function ix() {
	this.iy = [], this.iz = [], this.f = function() {
		this.iy = [], this.iz = []
	}, this.iL = function() {
		0 <= this.iy.length && this.j0(this.iy), 0 <= this.iz.length && this.j0(this.iz)
	}, this.j0 = function(bk) {
		for (var bd = -1, j = bk.length - 1; 0 <= j; j--)
			if (bk[j].iJ--, bk[j].iJ <= 0) {
				bd = j;
				break
			} for (j = bd; 0 <= j; j--) bk.shift()
	}, this.j1 = function(id, j2, j3) {
		return this.j4(this.iy, id, j2, j3)
	}, this.j5 = function(id, j2, j3) {
		return this.j4(this.iz, id, j2, j3)
	}, this.j4 = function(bk, id, j2, j3) {
		return ! function(bk, id, j2) {
			var j, j8;
			for (j = j2.length - 1; 0 <= j; j--)
				for (j8 = bk.length - 1; 0 <= j8; j8--)
					if (bk[j8].player === j2[j] && id === bk[j8].id) return 1;
			return
		}(bk, id, j2) && (j3 && function(bk, id, j2) {
			var j;
			for (j = j2.length - 1; 0 <= j; j--) bk.push({
				player: j2[j],
				id: id,
				iJ: 384
			})
		}(bk, id, j2), !0)
	}
}

function j9() {
	var ew, ex, fB;

	function jN() {
		for (var colors = new Array(11), j = 0; j < 11; j++) {
			var bk = l.bj.data[163 + j].value.split(",");
			colors[j] = new Uint8Array(3);
			for (var bc = 0; bc < 3; bc++) bc < bk.length && (colors[j][bc] = Number(bk[bc]))
		}
		return colors
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(48), [new bV("⬅️ " + L(43), function() {
		c9.f7()
	})]), ex = new f2(ew.f3, ((fB = []).push(function() {
		var fF = new fG;
		return fF.fH(L(49)), fF.jG("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", fF.jG(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), fF
	}()), fB.push(function() {
		var fF = new fG,
			ay = (fF.fH(L(50)), l.bj.data[174].value),
			jH = fF.jI(ay.length + " / 180"),
			jJ = (jH.style.textAlign = "center", new fM(0, 1, function(b8) {
				var b8 = b8.target.value,
					ae = b8.length;
				jH.textContent = ae + " / 180", ae <= 180 && l.m.n(174, b8)
			}));
		return jJ.b8.rows = 6, jJ.b8.style.fontSize = "1em", jJ.fN(ay), fF.fJ(jJ), fF
	}()), fB.push(function() {
		var fF = new fG;
		fF.fH(L(51));
		for (var j = 0; j < 11; j++) {
			var jK = fF.fJ(new fK(l.bj.data[163 + j]));
			j && (jK.b8.style.marginTop = "0.6em")
		}
		return fF.fJ(new i9([new bV(L(52), function() {
			for (var data = l.bj.data, j = 163; j < 174; j++) data[j] && l.bj.jL(j, data[j].jM);
			c9.f7(), c9.f6()[31] = null, c9.ed(31)
		}).button])), fF
	}()), fB.push(function() {
		var fF = new fG;
		return fF.fH("Targeting"), fF.jG(L(53)), fF.fJ(new fK(l.bj.data[175], 0, 0)), fF
	}()), fB.push(function() {
		var fF = new fG;
		return fF.fH(L(54)), fF.fJ(new i9([new bV(L(55), function() {
			(new au).show(l.bj.data[174].value, jN(), -1)
		}).button])), fF
	}()), fB.push(function() {
		var fF = new fG,
			jO = (fF.fH(L(56)), fF.jG(L(57)), new fK(l.bj.data[176], 1, 0)),
			jP = (fF.fJ(jO), new bV(L(58), function(b8) {
				return jQ.button.textContent === L(59) && az.b0.b1(0) && (aS.bG.bZ(b8), jR(), az.jS.jT(l.bj.data[176].value, jN(), l.bj.data[175].value, l.bj.data[174].value)), !0
			}, 1)),
			jR = function() {
				jQ.button.textContent = L(60), jP.jU(1), jP.button.style.color = fg.fk
			},
			jQ = new bV(L(60), function(b8) {
				return b8.textContent === L(60) ? (b8.textContent = L(59), jP.jU(0), jP.button.style.color = fg.jV) : jR(), !0
			});
		return fF.fJ(new i9([jQ.button, jP.button])), fF
	}()), fB))
}

function jW() {
	var jX = [],
		jY = [],
		jZ = 0;

	function ja(bk, jj, jk, jl) {
		var h = bk.length;
		if (0 === h) return "";
		var bq = "@" + bk[0];
		if (1 === h) return bq + jj + jl;
		for (var j = 1; j < h - 1; j++) bq += ", @" + bk[j];
		return bq + " and @" + bk[h - 1] + jk + jl
	}
	this.f = function() {
		var bq = ja(jY, " is", " are", " in the lobby!");
		bq.length && bx.message.jb({
			id: 7,
			jc: bq
		}), jX = [], jY = [], jZ = 0
	}, this.jd = function(je) {
		return bx.jf !== je && (je = gE.gF.gG(je, 5), !!l.jg.jh(je)) && (jY.push(je), !0)
	}, this.join = function(player) {
		bx.jf !== player.cQ && (player = gE.gF.gG(player.cQ, 5), l.jg.jh(player)) && jX.push(player)
	}, this.ji = function() {
		var jj, jk;
		++jZ < 3 || (jZ = 0, jj = ja(jY, "", "", " entered the lobby!"), (jj = (jk = ja(jX, "", "", " joined a game!")).length ? jj.length ? jj + " " + jk : jk : jj).length && bx.message.jb({
			id: 7,
			jc: jj
		}), jX = [], jY = [])
	}
}

function jm() {
	this.id = 0, this.jn = 0, this.jo = null, this.jp = null, this.jq = null, this.jr = null, this.bE = new js, this.f = function() {
		var self, jn;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (jn = Android.getVersion()) < 12 || (self.jn = jn, self.id = 1, self.jp = Android),
			function(self) {
				var jn;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.jq = mwIOSdataX, self.jr = window.webkit.messageHandlers.iosCommandA, jn = self
					.jq.version, self.jn = jn ? Number(jn) : 0)
			}(this),
			function(self) {
				var jo;
				try {
					if (!(jo = window.localStorage)) return;
					jo.setItem("tls7", "1"), jo.removeItem("tls7")
				} catch (error) {
					return
				}
				self.jo = jo
			}(this)
	}
}

function jw() {
	var jx, jy, jz, k0, k1 = 0,
		k2 = 0;

	function k8() {
		return Math.pow(Math.pow(jz - jx, 2) + Math.pow(k0 - jy, 2), .5)
	}

	function k4(b8) {
		jx = bI.hu * b8.touches[0].clientX, jy = bI.hu * b8.touches[0].clientY, jz = bI.hu * b8.touches[1].clientX, k0 = bI.hu * b8.touches[1].clientY
	}
	this.k3 = function(b8) {
		return 1 < b8.touches.length ? (k2 = eK.iJ, k1 = 3, k4(b8), eD.fQ(), !0) : (k1 = 0, !1)
	}, this.k5 = function(b8) {
		var k7, kA, kB;
		return 0 !== aP.d2 && 1 < b8.touches.length && (k1 = Math.max(k1 - 1, 0), eO.k6() && (k7 = k8(), k4(b8), b8 = k8(), kA = Math.floor((jx + jz) / 2), kB = Math.floor((jy + k0) / 2), e3.kC(kA, kB, Math.max(.125, b8) / Math.max(.125, k7)), eK
			.eN = !0), !0)
	}, this.kD = function() {
		var fm, fn;
		return !!(k1 && (k1 = 0, eK.iJ < k2 + 500)) && (fm = (jx + jz) / 2, fn = (jy + k0) / 2, eD.kE(fm, fn), eD.click(fm, fn, !0) && (eK.eN = !0), !0)
	}
}

function kF(bc, bd) {
	return 0 <= bc ? aN.aO(bc, bd) : -aN.aO(-bc, bd)
}

function kG(h9) {
	return h9 * h9
}

function kH(bc, bd) {
	return bd < bc ? bc : bd
}

function kI(bc, bd) {
	return bc < bd ? bc : bd
}

function kJ(bc, h9, bd) {
	return h9 < bc ? bc : bd < h9 ? bd : h9
}

function kK(h9, h) {
	for (var bt = aN.aO(h9 + 1, 2), j = 0; j < h; j++) bt = aN.aO(bt + aN.aO(h9, bt), 2);
	return bt
}

function kL(h9, h) {
	return h9 < 1 ? 0 : kK(h9, h)
}

function kM(jx, jy, fp, kN, jz, k0, fq, kO) {
	return !(jx + fp <= jz || jy + kN <= k0 || jz + fq <= jx || k0 + kO <= jy)
}

function kP(jx, jy, fp, kN, jz, k0, fq, kO) {
	return jx <= jz && jy <= k0 && jz + fq <= jx + fp && k0 + kO <= jy + kN
}

function kQ(h9) {
	return Math.floor(!!h9 * (1 + Math.log2(h9 + .5)))
}

function kR() {
	var ew, ex, ey, kS;

	function f1() {
		f5(), 1 !== aP.data.colorsType && (aP.data.colorsData = null), c9.f6()[19] = null, c9.f7()
	}

	function kT() {
		f5(), c9.ed(21)
	}

	function f5() {
		1 === aP.data.gameMode ? aP.dK.dR() : 0 === aP.data.gameMode && 1 === aP.data.colorsType && aS.f8.f9(ey.fA(), aP.data.colorsData, 262143)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, kS = [new bV("⬅️ " + L(43), f1)], 1 === aP.data.gameMode && kS.push(new bV(L(61), kT, 1, 1)), ew = new f0(L(51), kS), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), 0 === aP.data.gameMode && (fF.fI(new a({
			i: [L(62), L(47)],
			value: aP.data.colorsType
		}, function(k) {
			f5(), aP.data.colorsType = k, 1 !== aP.data.colorsType || aP.data.colorsData && aP.data.colorsData.length === aP.aj || (aP.data.colorsData = new Uint32Array(aP.aj)), c9.ed(21)
		})), fF.fJ(new kV));
		fF.fJ(new kW({
			value: aP.data.selectableColor
		}, L(63), function(value) {
			aP.data.selectableColor = value
		})), fB.push(fF)
	}(kS = []), 0 === aP.data.gameMode ? 1 === aP.data.colorsType && function(fB) {
		var fF = new fG;
		fF.fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.colorsData, 1)), fF.fJ(ey), fB.push(fF)
	}(kS) : (aP.dK.dR(), kS.push(function() {
		var fF = new fG;
		fF.fH(L(64));
		for (var j = 0; j < de.kX.length; j++) {
			var j8 = (j + 1) % de.kX.length,
				b8 = fF.jG((0 == j8 ? "" : "Team ") + de.kX[j8]);
			j && (b8.style.marginTop = "0.5em"), fF.fJ(new fK({
				k: -1,
				value: aP.data.teamPlayerCount[j8]
			}, 1, 0, function(b8) {
				ew.fS[1].jU(0);
				var playerCount = aN.fL(Math.floor(b8.target.value), 0, 512);
				b8.target.value = playerCount, aP.data.teamPlayerCount[b8.target.kY] = playerCount
			})).b8.kY = j8
		}
		return fF
	}())), kS))
}

function kZ() {
	var ka = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.kb = function(iJ) {
		var kd, bq = new Date(iJ.getTime() - 6e4 * iJ.getTimezoneOffset()).toUTCString();
		return bq.length < 12 || (bq = bq.substring(5, bq.length), 0 === (iJ = iJ.getTimezoneOffset())) ? bq : (kd = (iJ < 0 ? "+" : "-") + aN.aO(Math.abs(iJ), 60), 0 == (iJ = Math.abs(iJ) % 60) ? bq + kd : bq + kd + ":" + (iJ < 10 ? "0" : "") +
			iJ)
	}, this.ke = function(iJ) {
		var bq = iJ.toUTCString();
		return bq.length < 12 ? bq : function(iJ) {
			return ka[iJ.getUTCDay()]
		}(iJ) + ", " + bq.substring(5, bq.length - 4)
	}
}

function kg(kh, ki, kj, kk, kl, km) {
	var kn = document.createElement("div"),
		ko = document.createElement("div"),
		kp = document.createElement("div"),
		kq = document.createElement("div"),
		kr = document.createElement("div"),
		ks = document.createElement("div"),
		kt = document.createElement("div"),
		ku = document.createElement("div"),
		kv = document.createElement("span"),
		kw = document.createElement("div");
	this.kx = new ky(kl, km), this.kz = new l0(km), this.l1 = [kh, ki, kj, kk], this.l8 = function(l9) {
		l9 = (l9 / 10).toFixed(1) + "%";
		ku.style.width = l9, kv.innerHTML = l9
	}, this.lA = function() {
		this.kz.fQ(ks), this.kx.show(ks)
	}, this.lB = function() {
		this.kx.fQ(ks), this.kz.show(ks)
	}, this.lC = function() {
		return ko
	}, this.show = function() {
		document.body.appendChild(kn)
	}, this.fQ = function() {
		c9.removeChild(document.body, kn)
	}, this.resize = function(lD) {
		var lE = 1 - .4 * bD.bE.bF() * (bI.ce > 1.6 * bI.cf),
			lF = aS.bG.bJ(.05 * lE),
			lG = bI.cf > bI.ce,
			lH = aS.bG.bJ(.07 * lE + .03 * lG),
			lI = aS.bG.bJ(.04 + .02 * lG),
			lG = aS.bG.bJ(.02 * lE + .01 * lG),
			lK = aS.bG.bJ(.025);
		kn.style.font = aS.bG.bQ(0, lK), lE < 1 && (lK = aS.bG.bQ(0, lE * lK), kp.style.font = lK, kr.style.font = lK, kw.style.font = lK, kt.style.font = lK, kq.style.font = lK), ko.style.height = aS.bG.bK(lF), ko.style.font = aS.bG.bQ(0, .72 *
				lF), aS.bG.hm(ko, 2), kp.style.top = aS.bG.bK(lF), kp.style.height = aS.bG.bK(lH), aS.bG.hm(kp, 2), kq.style.font = aS.bG.bQ(0, lE * aS.bG.bJ(.02)), kq.style.top = aS.bG.bK(lF + lH), kq.style.height = aS.bG.bK(lI), aS.bG.hm(kq,
			2), kr.style.top = aS.bG.bK(lF + lH + lI), kr.style.height = aS.bG.bK(lH), aS.bG.hm(kr, 2), ks.style.top = aS.bG.bK(lF + lH + lI + lH), ks.style.height = aS.bG.bK(bI.cf / bI.hu - lF - 3 * lH - lI - lG), kt.style.top = aS.bG.bK(bI.cf /
				bI.hu - lH - lG), kt.style.height = aS.bG.bK(lG), aS.bG.hm(kt, 8), kv.style.font = aS.bG.bQ(0, .8 * lG), kw.style.top = aS.bG.bK(bI.cf / bI.hu - lH), kw.style.height = aS.bG.bK(lH), aS.bG.hm(kw, 8), kh.resize(kp), ki.resize(kp),
			kj.resize(kp), kk.resize(kp), lD ? this.kx.resize(ks) : this.kz.resize()
	};
	kl = this;
	kn.style.position = "absolute", kn.style.top = "0", kn.style.left = "0", kn.style.width = "100%", kn.style.height = "100%", kn.style.backgroundColor = fg.l2, l3.l4() || (kn.style.backdropFilter = "blur(4px)", kn.style.webkitBackdropFilter =
		"blur(4px)"), ko.style.position = "absolute", ko.style.top = "0", ko.style.left = "0", ko.style.width = "100%", ko.style.display = "flex", ko.style.alignItems = "center";
	for (var bk = [kp, kq, kr, kw], j = 0; j < bk.length; j++) bk[j].style.position = "absolute", bk[j].style.left = "0", bk[j].style.width = "100%", aS.bG.i6(bk[j]);
	ks.style.position = "absolute", ks.style.left = "0", ks.style.width = "100%", ks.style.font = "inherit", kt.style.position = "absolute", kt.style.left = "0", kt.style.width = "100%", ku.style.position = "absolute", ku.style.top = "0", ku.style
		.left = "0", ku.style.height = "100%", ku.style.width = "50%", ku.style.backgroundColor = fg.l5, kv.innerHTML = "", kv.style.position = "absolute", kv.style.top = "50%", kv.style.left = "50%", kv.style.transform = "translate(-50%, -50%)", ko
		.appendChild(function() {
			var kO = document.createElement("h1");
			return kO.textContent = L(65), kO.style.margin = "0 auto 0.15em auto", kO.style.fontFamily = "Arial Black, Trebuchet MS", kO.style.fontSize = "inherit", kO.style.fontWeight = "inherit", kO
		}()), kp.appendChild(kh.iB), kq.appendChild(ki.iB), kr.appendChild(kj.iB), kt.appendChild(ku), kt.appendChild(kv), kw.appendChild(kk.iB), kn.appendChild(ko), kn.appendChild(kp), kn.appendChild(kq), kn.appendChild(kr), kn.appendChild(ks), kn
		.appendChild(kt), kn.appendChild(kw), kl.kz.show(ks)
}

function lM() {
	var lN, lO, lP, ce, cf, font, bq;

	function lV(lW) {
		return lW < 10 ? "0" + lW : String(lW)
	}
	this.f = function() {
		bq = L(66)
	}, this.resize = function() {
		ce = Math.floor((bD.bE.bF() ? .53 : .36) * bI.ht), cf = Math.floor(.065 * ce), font = aS.bG.bQ(1, Math.floor(.9 * cf)), lP--, this.setTime()
	}, this.iL = function() {
		this.setTime() && (eK.eN = !0)
	}, this.setTime = function() {
		for (var aX = new Date, lR = aX.getUTCMinutes(), lS = aX.getUTCSeconds(), lT = [0, 10, 20, 25, 30, 35, 40, 45, 50], lU = (lO = 3600 - 60 * lR - lS, lO %= 300, 300), j = 0; j < lT.length; j++)
			if ((60 * lR + lS + lO) % 3600 == 60 * lT[j]) {
				lU = 0;
				break
			} return lO += lU, lN = bq + lV(Math.floor(lO / 60)) + ":" + lV(lO % 60), lP !== (lP = 60 * lR + lS) && (ce = eA.measureText(lN, font), ce += Math.floor(.4 * cf), !0)
	}, this.fc = function() {
		fW.lineWidth = 1 + Math.floor(cf / 15), fW.translate(bI.ce - cf, Math.floor(.5 * (bI.cf + ce))), fW.rotate(-Math.PI / 2), fW.fillStyle = fg.fk, fW.fillRect(0, 0, ce, cf), fW.strokeStyle = fg.lX, fW.strokeRect(0, 0, ce, cf + 10), fW
			.fillStyle = fg.lX, fW.font = font, aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 1), fW.fillText(lN, Math.floor(ce / 2), Math.floor(.59 * cf)), fW.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function lY() {
	var lZ;
	this.f = function() {
		lZ = !1
	}, this.iL = function() {
		var am;
		if (function() {
				if (!lZ) {
					if (eK.lf() % 30 != 9) return;
					if (!aS.aT.hb(90)) return;
					lZ = !0
				}
				return 1
			}() && (! function() {
				var g3 = eB.lg(956);
				if (g3) {
					if (aS.aT.h4(g3.player)) return 1;
					eB.lh(956, 0)
				}
				return
			}() && (-1 === (am = (aP.d7 ? function() {
				var id = dx.eu(),
					h = du.ek;
				if (de.lq[id])
					for (var j2 = du.h0, gu = de.gu, j = 0; j < h; j++) {
						var am = j2[j];
						if (gu[am] !== id) return am
					} else if (1 < h) return em[h - 1];
				return -1
			} : function() {
				for (var lm = du.ek, ln = du.h0, lo = lp, j = 0; j < lm; j++) {
					var am = ln[j];
					if (0 !== lo[am]) return am
				}
				return -1
			})()) ? ! function() {
				var g3 = eB.lg(957);
				if (g3 && g3.lr) {
					if (ag.at(g3.lr.ls << 2)) return 1;
					eB.lh(957, 0)
				}
				return
			}() : (eB.lk(0, L(67, [ad.ll[am]]), 956, am, fg.fk, fg.fh, -1, !0), 0)))) {
			var h = dn.lt.lu;
			if (0 !== h)
				for (var bj = dn.lt.bj, j = 0; j < h; j++) {
					var ls = bj[j];
					if (ag.at(ls << 2)) return void eB.lk(0, L(68, [dl.lv(ls), dl.lw(ls)]), 957, 0, fg.fk, fg.fh, -1, !0, void 0, {
						bc: 1,
						ls: ls
					})
				}
		}
	}
}

function lx() {
	var ly, lz, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, mA, mB, mC, mD, mE, mF, mH, mI, mJ, mK, mL, mS, mT, mG = null,
		mN = 0,
		mO = !1,
		mP = new Float32Array(4),
		mQ = 0,
		mR = !0,
		mU = 400,
		mV = 0;

	function mW() {
		m6 = Math.floor(+bI.ht), m7 = Math.floor(.5 * m6)
	}

	function mX() {
		var j, mg;
		for (fW.font = aS.bG.bQ(1, 100 * m8), mg = 80 / Math.floor(fW.measureText(aS.fO.gG(aP.co)).width), fW.font = aS.bG.bQ(1, 100), j = aP.aj - 1; 0 <= j; j--) m5[j] = 100 / Math.floor(fW.measureText(ad.ll[j]).width), m4[j] = Math.min(mg, m5[j])
	}

	function mh(j) {
		return !mV || (j = ad.er[j]) < 1e6 ? 1 : j < 1e7 ? mP[0] : mP[Math.min(Math.floor(Math.log10(j)) - 6, 3)]
	}

	function mf(hl) {
		mF = !1, mE = 1, mC = mD = 0, mR && (aS.bG.textAlign(hl, 1), aS.bG.textBaseline(hl, 1));
		for (var n7, n8, j, n9, fontSize, nA, jx = n5 / fX, jy = n6 / fX, jz = (bI.ce + n5) / fX, k0 = (bI.cf + n6) / fX, nB = 0 !== ad.eQ[aP.cs] && !aS.aT.gy(aP.cs), bc = du.ek - 1; 0 <= bc; bc--) j = du.h0[bc], (fontSize = Math.floor(mB * fX * mh(
			j) * m4[j] * m2[j])) < mA || m6 <= fontSize || m0[j] + m2[j] > jx && m0[j] < jz && m1[j] + m3[j] > jy && m1[j] < k0 && (n7 = Math.floor(bI.ce * (m0[j] + m2[j] / 2 - jx) / (jz - jx)), n8 = Math.floor(bI.cf * (m1[j] + m3[j] / 2 - jy) /
				(k0 - jy) - .1 * fontSize), n9 = ag.mc[j], hl.font = aS.bG.bQ(1 === ad.gq[j] ? 4 : 1, fontSize), hl.fillStyle = nC(fontSize, n9 % 2), mV ? nD(hl, j, fontSize, n7, n8, n9) : nE(j, fontSize, n7, n8, hl), mF = !0, 0 < mJ[j] ?
			function(n7, n8, fontSize, j, hl) {
				0 === lp[j] ? mr.ms.mt(mI[j]) ? (function(n7, n8, fontSize, player, nU, hl) {
						for (var nO = n8, ne = (hl.globalAlpha = nP(fontSize), mh(player) * (mV ? mQ : m5[player])), nN = n7 - .5 * fontSize / ne - .9 * fontSize, bd = 0; bd < 2; bd++) hl.fillText(mr.ms.na(nU), nN, nO), nN = n7 + .5 *
							fontSize / ne + .9 * fontSize;
						hl.globalAlpha = 1
					}(n7, n8, fontSize, j, mI[j], hl), nG(n7, n8, fontSize, 0, 0, hl)) : mr.ms.nS(mI[j]) ? (nT(n7, n8, fontSize, mI[j], 0, hl), nG(n7, n8, fontSize, 0, 1, hl)) : (nT(n7, n8, fontSize, mI[j], 1, hl), nG(n7, n8, fontSize, 1, 0,
					hl)) : nT(n7, n8, fontSize, mI[j], 0, hl)
			}(n7, n8, fontSize, j, hl) : 0 === lp[j] && nG(n7, n8, fontSize, 0, 0, hl), nB && (0 < mJ[j + aP.aj] || 0 < mJ[j + 2 * aP.aj] || 0 < mJ[j + 3 * aP.aj] || 0 < mJ[j + 4 * aP.aj]) && function(n7, n8, fontSize, j, hl) {
				var bt, ae = -1;
				for (bt = 4; 1 <= bt; bt--) 0 < mJ[j + bt * aP.aj] && ae++;
				for (bt = 1; bt < 5; bt++) 0 < mJ[j + bt * aP.aj] && (! function(n7, n8, fontSize, bt, j, nK, aX, hl) {
					var nb;
					if (1 === bt) {
						j = mI[j + aP.aj];
						if (!mr.ms.nV(j)) return function(n7, n8, fontSize, nU, nK, hl) {
							hl.globalAlpha = nP(fontSize);
							n7 -= .534 * nK * fontSize, nK = n8 + 1.59 * fontSize;
							hl.font = aS.bG.bQ(0, .785 * fontSize), hl.fillText(mr.ms.na(nU), n7, nK), hl.globalAlpha = 1
						}(n7, n8, fontSize, j, nK, hl);
						nb = mr.nW.nY[j - 1024 + mr.ms.nZ]
					} else nb = 2 === bt ? eD.nd()[4].canvas[+(aX < 255)] : (3 === bt ? eD.nd()[5] : eD.nd()[6]).canvas[0];
					j = mr.nW.nX, aX = .8 * fontSize / j, bt = n7 - .5 * aX * j - .534 * nK * fontSize, n7 = n8 + 1.4 * aX * j;
					hl.setTransform(aX, 0, 0, aX, bt, n7), hl.globalAlpha = nP(fontSize), hl.drawImage(nb, 0, 0), hl.globalAlpha = 1, hl.setTransform(1, 0, 0, 1, 0, 0)
				}(n7, n8, fontSize, bt, j, ae, mJ[j + bt * aP.aj], hl), ae -= 2)
			}(n7, n8, fontSize, j, hl), (nA = m8 * fontSize) < mA || (hl.font = aS.bG.bQ(1, nA), n8 += Math.floor(.78 * fontSize), mV ? nE(j, nA, n7, n8, hl) : nD(hl, j, nA, n7, n8, n9)))
	}

	function nE(j, fontSize, fm, fn, hl) {
		var ___id = j;
		var showName = j < aP.ct || !__fx.settings.hideBotNames;
		if (showName) hl.fillText(ad.ll[j], fm, fn), j < aP.ct && 2 !== ad.gq[j] || (j = fontSize / m5[j], hl.fillRect(fm - .5 * j, fn + aS.bG.hh * fontSize, j, Math.max(1, .1 * fontSize)));
		mV && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hl.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hl.fillText(__fx.utils.getDensity(___id), fm, showName ? fn + fontSize : fn)
		);
	}

	function nD(hl, j, fontSize, n7, n8, n9) {
		var ___id = j;
		j = aS.fO.gG(ad.er[j]);
		n9 >> 1 & 1 ? (hl.lineWidth = .05 * fontSize, hl.strokeStyle = nC(fontSize, n9 % 2), hl.strokeText(j, n7, n8)) : (1 < n9 && (hl.lineWidth = .12 * fontSize, hl.strokeStyle = nC(fontSize, n9), hl.strokeText(j, n7, n8)), hl.fillText(j, n7, n8));
		mV || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hl.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hl.fillText(__fx.utils.getDensity(___id), n7, n8 + fontSize))
	}

	function nG(n7, n8, fontSize, nK, nL, hl) {
		var nM = .95 * fontSize / mL,
			n7 = n7 - .5 * nM * mK + .8 * nK * fontSize,
			nK = n8 - 1.76 * nM * mL - (.35 - aS.bG.hh + .7) * nL * fontSize;
		hl.setTransform(nM, 0, 0, nM, n7, nK), hl.globalAlpha = nP(fontSize), hl.drawImage(ml.get(4), 0, 0), hl.globalAlpha = 1, hl.setTransform(1, 0, 0, 1, 0, 0)
	}

	function nT(n7, n8, fontSize, nU, nK, hl) {
		var bC, nN, nM;
		hl.globalAlpha = nP(fontSize), mr.ms.nV(nU) ? (bC = mr.nW.nX, hl.setTransform(nM = 1.1 * fontSize / bC, 0, 0, nM, nN = n7 - .5 * nM * bC - .8 * nK * fontSize, nM = n8 - 1.55 * nM * bC), hl.drawImage(mr.nW.nY[nU - 1024 + mr.ms.nZ], 0, 0), hl
			.setTransform(1, 0, 0, 1, 0, 0)) : (nN = n7 - .8 * nK * fontSize, nM = n8 - (.35 - aS.bG.hh + 1) * fontSize, hl.fillText(mr.ms.na(nU), nN, nM)), hl.globalAlpha = 1
	}

	function nC(fontSize, n9) {
		return m7 <= fontSize && fontSize < m6 ? de.nf[n9] + nP(fontSize).toFixed(3) + ")" : de.ng[n9]
	}

	function nP(fontSize) {
		return m7 <= fontSize && fontSize < m6 ? 1 - (fontSize - m7) / (m6 - m7) : 1
	}

	function nv(ne, ce) {
		return 1 + Math.floor(m9 * ne * ce)
	}

	function ns(j) {
		for (var left = m0[j], bc = m0[j] - ad.mj[j] - 1; 0 <= bc; bc--)
			if (!o0(j, --left, m1[j], m3[j])) {
				left++;
				break
			} var right = m0[j];
		for (bc = ad.mm[j] - m0[j] - m2[j]; 0 <= bc; bc--)
			if (!o0(j, ++right + m2[j] - 1, m1[j], m3[j])) {
				right--;
				break
			} var fm = Math.floor((left + right) / 2),
			top = m1[j];
		for (bc = m1[j] - ad.mk[j] - 1; 0 <= bc; bc--)
			if (!o1(j, fm, --top, m2[j])) {
				top++;
				break
			} var bottom = m1[j];
		for (bc = ad.mn[j] - m1[j] - m3[j]; 0 <= bc; bc--)
			if (!o1(j, fm, ++bottom + m3[j] - 1, m2[j])) {
				bottom--;
				break
			} var fn = Math.floor((top + bottom) / 2);
		np(j, fm, fn, m2[j], m3[j]) && (m0[j] = fm, m1[j] = fn)
	}

	function np(player, fm, fn, ce, cf) {
		ao = Math.floor(.2 * ce);
		for (var ao, bt = fm + ce - 1; fm <= bt; bt--)
			if (!o0(player, bt, fn, cf)) return;
		for (bt = fn + cf - 1 - (ao = (ao = Math.floor(.25 * cf)) < 1 ? 1 : ao); fn + ao <= bt; bt--)
			if (!o1(player, fm, bt, ce)) return;
		return 1
	}

	function o0(player, fm, fn, cf) {
		return ag.o2(player, 4 * (fn * a2.a3 + fm)) && ag.o2(player, 4 * ((fn + cf - 1) * a2.a3 + fm))
	}

	function o1(player, fm, fn, ce) {
		return ag.o2(player, 4 * (fn * a2.a3 + fm)) && ag.o2(player, 4 * (fn * a2.a3 + fm + ce - 1))
	}
	this.f = function() {
		if (mV = l.bj.data[7].value || 8 === aP.dA, mU = 0 === (mU = l.bj.data[11].value) ? 280 : 1 === mU ? 187 : 112, mF = !1, mB = .88, m8 = .5, m9 = 1.8, mA = 12 - 3 * l.bj.data[9].value, lz = ly = 0, m0 = new Uint16Array(aP.aj), m1 =
			new Uint16Array(aP.aj), m2 = new Uint16Array(aP.aj), m3 = new Uint16Array(aP.aj), m4 = new Float32Array(aP.aj), m5 = new Float32Array(aP.aj), mI = new Uint16Array(2 * aP.aj), mJ = new Uint8Array(5 * aP.aj), mS = new Uint8Array(aP.aj),
			mT = new Uint8Array(aP.aj), mR || (mG = mG || document.createElement("canvas")), mW(), mD = mC = 0, mE = 1, mV) {
			var j, mg;
			for (mX(), fW.font = aS.bG.bQ(1, 100), mg = 100 / Math.floor(fW.measureText("900 000").width), j = aP.aj - 1; 0 <= j; j--) m4[j] = Math.min(mg, 2 * m5[j]);
			mQ = mg, mP[0] = 100 / (mg * Math.floor(fW.measureText("5 000 000").width)), mP[1] = 100 / (mg * Math.floor(fW.measureText("50 000 000").width)), mP[2] = 100 / (mg * Math.floor(fW.measureText("500 000 000").width)), mP[3] = 100 / (
				mg * Math.floor(fW.measureText("1 000 000 000").width))
		} else mX();
		! function() {
			var j;
			for (j = aP.aj - 1; 0 <= j; j--) ad.el[j] < 12 ? (m0[j] = ad.mj[j] + 1, m1[j] = ad.mk[j] + 1, m2[j] = 1, m3[j] = 1) : (m0[j] = ad.mj[j], m1[j] = ad.mk[j] + 1, m2[j] = 4, m3[j] = 2);
			if (aP.d5)
				for (j = 0; j < aP.ct; j++) m2[j] = 0;
			mK = ml.get(4).width, mL = ml.get(4).height
		}()
	}, this.ma = function(am, mb) {
		mb > 18 * ad.el[am] ? (mT[am] = 6, ag.mc[am] = 2 + ag.mc[am] % 2) : (mS[am] = 4, (ag.mc[am] < 2 || 3 < ag.mc[am]) && (ag.mc[am] = 6 + ag.mc[am] % 2))
	}, this.md = function(am, mb) {
		mb > 6 * ad.el[am] ? (mT[am] = 6, ag.mc[am] = 4 + ag.mc[am] % 2) : (mS[am] = 4, (ag.mc[am] < 4 || 5 < ag.mc[am]) && (ag.mc[am] = 8 + ag.mc[am] % 2))
	}, this.resize = function() {
		mW(), mR || mf(mH)
	}, this.ia = function() {
		for (var j = 0; j < aP.ct; j++) ad.mm[j] - ad.mj[j] != 3 || ad.mn[j] - ad.mk[j] != 3 ? (m0[j] = ad.mj[j] + (ad.mm[j] !== ad.mj[j] ? 1 : 0), m1[j] = ad.mk[j], m2[j] = 1, m3[j] = 1) : (m0[j] = ad.mj[j], m1[j] = ad.mk[j] + 1, m2[j] = 4, m3[
			j] = 2)
	}, this.mo = function(player, k, mp) {
		! function(player, k, mp) {
			player += k * aP.aj;
			0 === k ? mI[player] === mp && 0 < mJ[player] ? mJ[player] = 0 : (mI[player] = mp, mJ[player] = mr.ms.mt(mp) ? 255 : 64) : 1 === k ? (mJ[player] = 64, mI[player] = mp) : mJ[player] = mp
		}(player, k, mp), 2 === aP.d2 && this.eR(!0)
	}, this.fc = function() {
		mR ? mf(fW) : mF && (1 !== mE ? (fW.imageSmoothingEnabled = !0, fW.setTransform(mE, 0, 0, mE, 0, 0), fW.drawImage(mG, -mC / mE, -mD / mE), fW.setTransform(1, 0, 0, 1, 0, 0), fW.imageSmoothingEnabled = !1) : fW.drawImage(mG, -mC, -mD))
	}, this.mu = function(mv, mw) {
		mC += mv, mD += mw
	}, this.mx = function(mv, mw) {
		eG.mu(mv, mw)
	}, this.zoom = function(my, mz, n0) {
		mE *= my, mC = (mC + mz) * my - mz, mD = (mD + n0) * my - n0
	}, this.eR = function(n2) {
		return !mR && !(!mO && !n2 && eK.iJ < mN + (1 === mE && 0 === mC && 0 === mD && (aP.ee() || aP.d5 || 2 === aP.d2) ? 1e3 : mU) || (mO = !1, mN = eK.iJ, mf(mH), 0))
	}, this.n3 = function(j) {
		return mh(j) * m4[j]
	}, this.n4 = function(player) {
		return m4[player]
	}, this.iL = function() {
		eK.lf() % 10 == 9 && (mO = aP.eh() && !aP.ee()), !aP.ee() && 4 <= ++lz && function() {
			var j, bc, bd;
			for (lz = 0, bd = 4; 1 <= bd; bd--)
				for (bc = du.ek - 1; 0 <= bc; bc--) j = du.h0[bc] + bd * aP.aj, 0 < mJ[j] && mJ[j] < 255 && mJ[j]--;
			if (2 !== aP.d2)
				for (bc = du.ek - 1; 0 <= bc; bc--) j = du.h0[bc], 0 < mJ[j] && mJ[j] < 255 && mJ[j]--
		}();
		var j, bc, h = Math.floor(.1 * du.ek);
		for (h = (h = h < 8 ? 8 : h) > du.ek ? du.ek : h, j = ly + h - 1; ly <= j; j--) bc = j % du.ek, ! function(j) {
			var ne = mh(j) * m4[j];
			0 < m2[j] && np(j, m0[j], m1[j], m2[j], m3[j]) ? ! function(j) {
				for (var fm, fn, ce, cf, nw = !1, bd = 0; bd < 8; bd++) {
					if (ce = m2[j] + 2, cf = m3[j] + 2, ce > ad.mm[j] - ad.mj[j] + 1 || cf > ad.mn[j] - ad.mk[j] + 1) return nw;
					if (fm = m0[j] - 1, fn = m1[j] - 1, !np(j, fm, fn, ce, cf)) return nw;
					m0[j] = fm, m1[j] = fn, m2[j] = ce, m3[j] = cf, nw = !0
				}
				return nw
			}(j) && function(j, ne) {
				for (var fm, fn, ce, cf, nw = !1, nx = m2[j], h3 = 1 + Math.floor(.02 * nx), bd = 1; bd < 5; bd++) {
					if ((ce = nx + bd * h3) > ad.mm[j] - ad.mj[j] + 1) return nw;
					if ((cf = nv(ne, ce)) > ad.mn[j] - ad.mk[j] + 1) return nw;
					fm = ad.mj[j] + Math.floor(Math.random() * (ad.mm[j] - ad.mj[j] + 2 - ce)), fn = ad.mk[j] + Math.floor(Math.random() * (ad.mn[j] - ad.mk[j] + 2 - cf)), np(j, fm, fn, ce, cf) && (m0[j] = fm, m1[j] = fn, m2[j] = ce, m3[
						j] = cf, nw = !0)
				}
				return nw
			}(j, ne) && ns(j) : ! function(j, ne) {
				var cf, fm = m0[j] + 1,
					fn = m1[j] + 1,
					ce = m2[j] - 2;
				for (;;) {
					if (ce < 1) {
						m2[j] = 0;
						break
					}
					if (cf = nv(ne, ce), np(j, fm, fn, ce, cf)) return m0[j] = fm, m1[j] = fn, m2[j] = ce, m3[j] = cf, 1;
					fm++, fn++, ce -= 2
				}
				return
			}(j, ne) ? function(j, ne) {
				var fm, fn, ce, cf, bd, k6, ny = ad.mm[j] - ad.mj[j] + 1,
					nz = Math.floor(.02 * ny);
				for (k6 = -6 * (nz = nz < 1 ? 1 : nz), bd = ny; k6 <= bd; bd -= nz)
					if (cf = nv(ne, ce = 0 < bd ? bd : 1), fm = ad.mj[j] + Math.floor(Math.random() * (ad.mm[j] - ad.mj[j] + 2 - ce)), fn = ad.mk[j] + Math.floor(Math.random() * (ad.mn[j] - ad.mk[j] + 2 - cf)), np(j, fm, fn, ce, cf))
						return m0[j] = fm, m1[j] = fn, m2[j] = ce, m3[j] = cf
			}(j, ne) : ns(j)
		}(du.h0[bc]);
		ly = (ly += h) % du.ek
	}, this.nj = function() {
		var j, am, nk, nl;
		if (eK.lf() % 4 == 1)
			for (j = du.ek - 1; 0 <= j; j--) am = du.h0[j], ag.mc[am] < 2 || ((nk = Math.max(mS[am] - 1, 0)) === (nl = Math.max(mT[am] - 1, 0)) ? 0 === nk && (ag.mc[am] %= 2) : 0 === nl && ag.mc[am] < 6 && (ag.mc[am] += 4), mS[am] = nk, mT[am] =
				nl)
	}, this.nm = function(player) {
		var j = player + 2 * aP.aj,
			aX = mJ[j];
		return 0 < aX && (eB.nn(50, player), mJ[j] = 0, 255 === aX)
	}, this.no = function(player) {
		return 255 === mJ[player + 2 * aP.aj]
	}
}

function o3() {
	this.o4 = 512, this.o5 = 8, this.o6 = 0, this.o7 = 0, this.o8 = new Uint16Array(this.o4), this.o9 = new Uint32Array(this.o4), this.oA = new Uint16Array(this.o4), this.oB = new Uint32Array(this.o4), this.oC = new Uint16Array(this.o4), this.oD =
		new Uint16Array(this.o4), this.oE = new Uint8Array(this.o4), this.oF = new Uint8Array(this.o4), this.oG = new Array(this.o4), this.oH = new Uint16Array(this.o4), this.oI = new Uint8Array(aP.aj), this.oJ = new Uint16Array(this.o5 * aP.aj),
		this.f = function() {
			this.o6 = 0, this.o7 = 0, this.oI.fill(0), this.oG.fill(null)
		}, this.oK = function(player) {
			var hH = dN.gR[0],
				oL = dN.gY[1],
				oM = dN.bk[0],
				oN = this.o7,
				h = this.o6,
				oO = dl.oP(oM[0]),
				oQ = this.oI[player],
				oR = (player << 3) + oQ;
			this.o8[h] = oR, this.o9[h] = oO, this.oA[h] = 0, hH < 60 && (aS.aT.aU(player, 60 - hH), hH = 60), this.oB[h] = hH, this.oC[h] = dm.oS.oK(h, dl.oT(oO)), this.oD[h] = oN, this.oE[h] = oL, this.oF[h] = 0, this.oG[h] = oM, this.oH[h] = 0,
				this.o7 = (oN + 1) % 65536, this.oI[player] = oQ + 1, this.oJ[oR] = h, this.o6++, dm.oL.oU(player, oM[oM.length - 1], oL, oN, hH)
		}, this.iL = function() {
			dm.oL.iL();
			for (var am = aP.cs, aX = dm.g8.oV(am), oa = (! function(oa) {
					for (var ob, o9 = oa.o9, oB = oa.oB, oF = oa.oF, oA = oa.oA, oC = oa.oC, oG = oa.oG, oH = oa.oH, oa = oa.o6, oc = a2.a3 << 4, j = oa - 1; 0 <= j; j--) {
						var od = o9[j],
							oM = oG[j],
							oe = oH[j],
							oO = dl.oP(oM[oe]),
							og = dl.oP(oM[oe + 1]),
							oh = oO % oc,
							oO = ~~((oO + .5) / oc),
							oj = og % oc,
							ok = ~~((og + .5) / oc),
							ol = oj - oh,
							om = ok - oO,
							ao = Math.max(~~Math.sqrt(ol * ol + om * om + .5), 1),
							on = oB[j],
							on = (on = oF[j] ? 4e4 : 25e4 + Math.min(20 * on, 3e5) + Math.min(on >> 3, 5e4), oA[j] + Math.max(~~((on + .5) / ao), 1));
						65535 <= on ? oe + 2 < oM.length ? (oH[j] = oe + 1, o9[j] = ob = function(j, oo, oh, oi, oe, ao, oM, oc) {
							oo = Math.min(oo - 65535, 65535);
							var oM = dl.oP(oM[oe + 2]),
								oe = oM % oc - oh,
								oM = ~~((oM + .5) / oc) - oi,
								or = Math.max(~~Math.sqrt(oe * oe + oM * oM + .5), 1);
							return oo = Math.min(Math.floor((ao * oo + .5) / or), 65534), dm.b0.oA[j] = oo, oh + aN.aO(oo * oe, 65535) + oc * (oi + aN.aO(oo * oM, 65535))
						}(j, on, oj, ok, oe, ao, oM, oc)) : (o9[j] = ob = og, oA[j] = 65535) : (oA[j] = on, o9[j] = ob = oh + aN.aO(on * ol, 65535) + oc * (oO + aN.aO(on * om, 65535))), oC[j] = dm.oS.oq(oC[j], od, ob)
					}
				}(this), ! function(oa) {
					if (eK.lf() % 2 == 1) {
						var j, j8, bl, bd, bt, os, ot, ou, ov, jx, jy, oO, oz, ox, p2, ow, h = oa.o6,
							o9 = oa.o9,
							o8 = oa.o8,
							oB = oa.oB,
							oF = oa.oF,
							oS = dm.oS.oS,
							iQ = oS.length,
							p4 = dm.oS.p4,
							oc = a2.a3 << 4,
							p5 = aP.d7,
							p6 = de.gu,
							an = (h - 1) * (aN.aO(eK.lf(), 2) % 2);
						for (j = 0; j < h; j++)
							for (j8 = Math.abs(j - an), oO = o9[j8], bl = dl.oT(oO), ov = o8[j8] >> 3, jx = oO % oc, jy = ~~((oO + .5) / oc), p2 = oB[j8], bd = 0; bd < 9; bd++)
								if (!((os = bl + p4[bd]) < 0 || iQ <= os))
									for (ou = oS[os], ot = ou.length, bt = 0; bt < ot; bt++) oz = ou[bt], ow = o8[oz] >> 3, ov == ow || p5 && p6[ov] === p6[ow] && p6[ov] || (ow = o9[oz], (ox = jx - ow % oc) * ox + (ox = jy - ~~((ow + .5) /
										oc)) * ox < 14400 && (ow = oB[oz], ox = ow <= p2 ? Math.max(1, aN.aO(ow + aN.aO(p2 - ow, 10), 10)) : Math.max(1, aN.aO(p2, 10)), oB[oz] = Math.max(ow - ox, 0), oF[oz] = 4))
					}
				}(this), ! function(oa) {
					if (eK.lf() % 5 == 3)
						for (var oB = oa.oB, h = oa.o6, j = 0; j < h; j++) {
							var hH = oB[j];
							oB[j] = Math.max(hH - Math.max(1, hH >> 7), 0)
						}
				}(this), this), oB = oa.oB, oF = oa.oF, j = oa.o6 - 1; 0 <= j; j--) oF[j] = oF[j] >> 1, 0 === oB[j] && (dm.p8.p9(j), dm.pA.pB(j));
			aZ.aa(am, aX - dm.g8.oV(am), 15)
		}
}

function pC() {
	this.size = 0, this.k = 0, this.pD = null, this.f = function(pD) {
		this.k = 0, this.pD = pD, this.size = pD.length
	}, this.pE = function() {
		this.pD = null
	}, this.pF = function(size) {
		for (var h9 = 0, pD = this.pD, k6 = this.k + size - 1, j = this.k; j <= k6; j++) h9 |= (pD[j >> 3] >> 7 - (7 & j) & 1) << k6 - j;
		return this.k += size, this.k > 8 * this.size && console.error("Unwrapper Overflow"), h9
	}, this.pG = function(size) {
		var bd = size >> 1;
		return (1 << bd) * this.pF(size - bd) + this.pF(bd)
	}, this.pH = function(pI) {
		return this.size === pJ.pK(pI)
	}, this.pL = function(pM, pN, pO) {
		var ae = this.pF(pM);
		if (!ae) return null;
		for (var pM = Math.max(ae, pO), bk = new(pN <= 8 ? Uint8Array : pN <= 16 ? Uint16Array : Uint32Array)(pM), j = 0; j < ae; j++) bk[j] = this.pF(pN);
		pO = bk[ae - 1];
		return pO && bk.fill(pO, ae), bk
	}, this.pP = function(pM, pQ, pO) {
		var ae = this.pF(pM);
		if (!ae) return null;
		for (var pM = Math.max(ae, pO), bk = new Array(pM), j = 0; j < ae; j++) bk[j] = this.pR(pQ);
		return bk.fill(bk[ae - 1], ae), bk
	}, this.pR = function(pM) {
		return pS.pT.pU(this.pF(pM))
	}, this.pV = function() {
		var bq = gE.gF.pW(gE.gF.pX(this.pF(30))),
			bq = aS.fO.pY(bq, "_", "/");
		bq = aS.fO.pY(bq, "-", "+");
		for (var pZ = "";
			(bq.length + pZ.length) % 4;) pZ += "=";
		bq = "data:image/png;base64," + bq + pZ;
		var pa = new Image;
		pa.onload = function() {
			dw.pb.pc(pa), pa.onload = null, pa = null
		}, pa.src = bq
	}
}

function pd() {
	function ph(bk, h9, j8) {
		for (var j = 0; j < 256; j++) bk[j] = (bk[j] + (h9 >> (j + j8) % 30 & 1)) % 256
	}
	this.iL = function(pe, pf) {
		var bk = new Uint8Array(256);
		return function(bk, pe, pf) {
				var j, pk = 3 + (4 + pe) % 32768,
					pl = 12 + pf % 32768,
					pm = 17 + ((pe & pf) + (pe | pf) + pe) % 32768;
				for (j = 0; j < 256; j++) pk = 1 + pk * pl % pm, bk[j] = pk % 256
			}(bk, pe, pf), ph(bk, pe, 2), ph(bk, pf, 7),
			function(bk) {
				var j, h9, k = 0;
				for (j = 0; j < 3e4; j++) h9 = bk[k], bk[k] = (h9 + j + bk[(k + j) % 256]) % 256, k = (h9 + j + k + (h9 & k)) % 256
			}(bk),
			function(bk) {
				var j, kN = 1,
					kO = 1;
				for (j = 0; j < 256; j += 2) kN = (1 + kN) * (bk[j] + 1) % 1073741824, kO = (1 + kO) * (bk[j + 1] + 1) % 1073741824;
				return [kN, kO]
			}(bk)
	}, this.pn = function(po, pp, pq, result) {
		for (var ae = 1 << po, j = 0; j < ae; j++)
			if (this.pr(j, pp, pq) === result) return j;
		return 0
	}, this.pr = function(ps, pp, pq) {
		for (var pt = pp + ps, pu = pq + ps, h9 = pt + pu & 2147483647, bc = 1; bc <= 16; bc++) h9 = (h9 = (h9 ^ h9 >> bc) >>> 1 + (3 & pt)) * (7 + (1023 & (pt | pu))) & 1073741823, pu >>= 1 + (1 & (pt >>= 1 + (1 & (h9 += 65535 & pu))));
		return h9 &= 1073741823
	}
}

function pv() {
	this.pw = null, this.f = function() {
		10 !== aP.dA ? this.pw = null : this.pw = new Uint32Array(aP.aj)
	}, this.iL = function() {
		10 === aP.dA && this.g8()
	}, this.g8 = function() {
		for (var am, target, px, pw = this.pw, j2 = du.h0, hC = ad.er, j = du.ek - 1; 0 <= j; j--)(am = j2[j]) >= aP.ct || (target = Math.max(aN.aO(hC[am], 4), 2048), px = Math.max(dX.py(am), 100), pw[am] += aN.aO(px * target, 1e4), pw[am] >
			target && (pw[am] = target))
	}, this.hJ = function(player, hH) {
		return hH > this.pw[player] ? (hH = this.pw[player], this.pw[player] = 0) : this.pw[player] -= hH, hH
	}
}

function pz() {
	this.gF = new q0, this.pT = new q1, this.q2 = new q3, this.f = function() {
		this.gF.f()
	}
}

function q4() {
	this.q5 = new q6
}

function q7() {
	this.q8 = function() {
		pJ.cM(39), pJ.q9(1, 0), pJ.q9(6, 16), az.b2.qA(), az.b0.send(0, pJ.pD)
	}, this.qB = function(qC) {
		pJ.cM(127), pJ.q9(1, 0), pJ.q9(6, 17), pS.gF.qF(l.bj.data[105].value, 5), pS.gF.qF(l.bj.data[106].value, 15), az.b0.send(qC, pJ.pD)
	}, this.qE = function() {
		pJ.cM(97), pJ.q9(1, 0), pJ.q9(6, 18), pS.gF.qF(l.bj.data[110].value, 15), az.b0.send(0, pJ.pD)
	}, this.qG = function(qH) {
		var h = qH.bq.length;
		pJ.cM(21 + 16 * h), pJ.q9(1, 0), pJ.q9(6, 29), pJ.q9(6, qH.qI), pJ.q9(8, h), gE.pT.qJ(qH.bq), az.b0.send(0, pJ.pD)
	}, this.jT = function(g0, colors, qK, ay) {
		qL.f(), qL.q9(1, 0), qL.q9(6, 16), qL.q9(20, Math.min(g0, 1e6));
		for (var j = 0; j < 11; j++)
			for (var bc = 0; bc < 3; bc++) qL.q9(8, colors[j][bc]);
		g0 = qN.data.qO(qK.trim());
		qL.q9(8, -1 === g0 ? 255 : g0), gE.q2.eX(ay.trim().substring(0, 180), 8, qL), az.b0.send(0, qL.qP())
	}, this.qQ = function(data) {
		pJ.cM(43), pJ.q9(1, 0), pJ.q9(6, 25), pJ.q9(6, data.qI), pS.gF.qF(data.cQ, 5), az.b0.send(0, pJ.pD)
	}, this.qR = function(data) {
		pJ.cM(75), pJ.q9(1, 0), pJ.q9(6, 27), pJ.q9(6, data.qI), pS.gF.qF(data.cQ, 5), pJ.qS(32, data.value), az.b0.send(0, pJ.pD)
	}
}

function qT() {
	"function" != typeof Math.log2 && (Math.log2 = function(fm) {
		return Math.log(fm) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fm) {
		return Math.log(fm) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fm) {
		return 0 < fm ? 1 : fm < 0 ? -1 : 0
	})
}

function qU() {
	this.qV = function() {
		for (var h = aP.ct, qW = dO.result.qW, bl = qW.length, qX = (pJ.cM(17 + 16 * h + 33 * bl), pJ.q9(1, 1), pJ.q9(4, 12), pJ.q9(10, bl), pJ.q9(1, +(2 === aP.dG)), pJ.q9(1, aP.dI % 2), ad.qX), j = 0; j < h; j++) pJ.q9(16, qX[j]);
		for (var el = ad.el, j = 0; j < bl; j++) {
			var am = qW[j];
			pJ.q9(9, am), pJ.q9(24, el[am])
		}
		az.b0.send(az.b0.qY, pJ.pD)
	}
}

function qZ() {
	this.qa = function() {
		for (var id = qb.pF(20), colors = new Array(11), j = 0; j < 11; j++) colors[j] = new Uint8Array([qb.pF(8), qb.pF(8), qb.pF(8)]);
		var ay = pS.q2.qc(8);
		ea.qd.qe({
			id: id,
			colors: colors,
			ay: ay
		})
	}, this.qf = function(qC) {
		var ao = qb.pF(5),
			ao = qh.qi.pn(ao, qb.pF(30), qb.pF(30), qb.pF(30));
		az.b2.qj(qC, ao)
	}, this.qk = function(qC) {
		var qm, qg, qn;
		qb.pH(165) ? (qm = qb.pF(3), qg = qh.qi.iL(qb.pF(30), qb.pF(30)), qn = qh.qi.pn(qb.pF(5), qb.pF(30), qb.pF(30), qb.pF(30)), az.b2.qo(qC, qg, qn, qm), 0 < qm || (0 === qC && 0 === l.bj.data[105].value.length ? az.b2.qp(0) : az.jS.qB(qC),
			4 === az.b0.qq(qC).qr() ? 6 === cL.qs() && az.qt.qu(qC) : 5 !== az.b0.qq(qC).qr() || 8 !== cL.qs() && 10 !== cL.qs() || az.qv.qw())) : az.b0.ql(qC, 3269)
	}, this.qx = function(qC) {
		var id = qb.pF(6);
		1 === id ? (l.m.n(160, qb.pF(30)), az.b0.qy(qC), qz.r0 || az.b2.qp(1), qN.r1(), 8 === c9.cA && c9.r2().r3()) : 21 === id ? 8 === c9.cA && c9.r2().r4(17) : 22 === id && (l.m.n(106, l.bj.data[110].value), l.m.n(110, ""), 8 === c9.cA) && c9
			.r2().r4(15)
	}, this.r5 = function() {
		var h = qb.pF(16),
			r6 = qb.pF(16);
		if (qb.pH(55 + 10 * h + 16 * r6)) {
			for (var bk = [], j = 0; j < h; j++) bk.push(pS.pT.pU(qb.pF(10)));
			qN.r7(bk)
		} else az.b0.ql(0, 3270)
	}
}

function r8(data) {
	var r9, rA, bt, i0;

	function rC(rT) {
		var h = data.data.length;
		if (h) {
			for (var rV, max = min = parseInt(data.data[0][0]), j = 1; j < h; j++) var rU = parseInt(data.data[j][0]),
				min = Math.min(rU, min),
				max = Math.max(rU, max);
			rV = rT < 0 ? min + rT : max + 1, c9.ed(8, c9.r2().rW, new rX(21, {
				rE: data.rE,
				rV: rV,
				rY: rV + Math.abs(rT)
			}))
		}
	}
	this.show = function() {
			r9.show(), this.resize()
		}, this.fQ = function() {
			r9.fQ()
		}, this.resize = function() {
			r9.resize(), rA.resize()
		}, this.fR = function(bt) {
			2 === bt && r9.fS[0].fT()
		}, bt = data.data.length ? 0 : 1, bt = [new bV("⬅️ " + L(43), function() {
			c9.f7()
		}), new bV(L(69), function() {
			rC(-10)
		}, bt, 0, 1), new bV(L(70), function() {
			rC(10)
		}, bt, 0, 1), new bV(L(71), function() {
			c9.ed(11, 10, new rD({
				rE: data.rE
			}))
		})], i0 = [L(72), L(73), L(74), L(75), L(76), L(77), L(78), L(79), L(80), L(81), L(82), L(83), "Audit Log"], r9 = new f0(i0[data.rE], bt),
		function() {
			var j, ao = {
					rG: []
				},
				rG = ao.rG,
				rH = data.data,
				h = rH.length;
			h && 0 === rH[0][0] && 0 <= (k = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.rE]) && (c9.b0.rI[k] = rH[0][1]);
			var h3 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.rE],
				rL = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.rE],
				k = [
					[L(84), L(85) + " ↗", L(86)],
					[L(84), L(87), L(88), L(89) + " ↗"],
					[L(84), L(85) + " ↗", L(88)],
					[L(84), L(85) + " ↗", L(88)],
					[L(90), L(91), L(92) + " ↗", L(93) + " ↗", L(94)],
					[L(90), L(91), L(95) + " ↗", L(96) + " ↗", L(97)],
					[L(90), L(91), L(98) + " ↗", L(99) + " ↗", L(100)],
					[L(90), L(91), L(95) + " ↗", L(96) + " ↗", L(101)],
					[L(90), L(91), L(92) + " ↗", L(93) + " ↗", L(94)],
					[L(84), L(85) + " ↗", L(88)],
					[L(84), L(85) + " ↗", L(102)],
					[L(84), L(85) + " ↗", L(88)],
					[L(90), L(91), L(92) + " ↗", L(93) + " ↗", L(103)]
				];
			if (ao.i0 = k[data.rE], ao.rM = [
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
				][data.rE], 0 === data.rE || 2 === data.rE || 3 === data.rE || 9 === data.rE || 10 === data.rE || 11 === data.rE)
				for (j = 0; j < h; j++) rG.push([{
					h9: rH[j][0] + 1 + ".",
					aX: 0
				}, {
					h9: rH[j][1],
					aX: 1,
					cQ: rH[j][4],
					rN: rH[j][3]
				}, {
					h9: (h3 * rH[j][2]).toFixed(rL),
					aX: 0
				}]);
			else if (12 === data.rE)
				for (j = 0; j < h; j++) {
					var rO = rH[j][3];
					rG.push([{
						h9: "" + rH[j][0],
						aX: 0
					}, {
						h9: "" + rH[j][4],
						aX: 0
					}, {
						h9: rH[j][5],
						aX: 1,
						cQ: rH[j][1],
						rN: 0
					}, {
						h9: rH[j][6],
						aX: 1,
						cQ: rH[j][2],
						rN: 0
					}, {
						h9: rP.rQ(rO),
						aX: 0
					}])
				} else if (1 === data.rE)
					for (j = 0; j < h; j++) rG.push([{
						h9: rH[j][0] + 1 + ".",
						aX: 0
					}, {
						h9: rH[j][1],
						aX: 0
					}, {
						h9: (h3 * rH[j][2]).toFixed(rL),
						aX: 0
					}, {
						h9: rH[j][3],
						aX: 1,
						cQ: rH[j][5],
						rN: rH[j][4]
					}]);
				else if (4 === data.rE || 5 === data.rE || 6 === data.rE || 7 === data.rE || 8 === data.rE)
				for (j = 0; j < h; j++) {
					var rR = rH[j][5];
					4 === data.rE || 8 === data.rE ? "100%" === (rR = (rR % 64 * 100 / (rR >> 6)).toFixed(0) + "%") && (4 === data.rE ? rR += " (" + L(104) + ")" : rR += " (" + L(105) + ")") : 5 === data.rE ? 32768 <= rR && (rR = -(rR - 32768)) :
						rR = (h3 * rR).toFixed(rL), rG.push([{
							h9: "" + rH[j][0],
							aX: 0
						}, {
							h9: "" + rH[j][6],
							aX: 0
						}, {
							h9: rH[j][7],
							aX: 1,
							cQ: rH[j][1],
							rN: rH[j][2]
						}, {
							h9: rH[j][8],
							aX: 1,
							cQ: rH[j][3],
							rN: rH[j][4]
						}, {
							h9: "" + rR,
							aX: 0
						}])
				}
			rA = new rS(r9.f3, ao)
		}()
}

function rZ() {
	function re(player) {
		for (var rb = ad.rb[player], h = rb.length, ro = Math.max(aN.aO(h, 12), 1), ap = ag.ap, rp = dV.rl(h), j = 0; j < h; j += ro)
			for (var rq = rb[(j + rp) % h], ao = 3; 0 <= ao; ao--) {
				var rr = rq + ap[ao];
				if (ag.rm(rr)) return {
					nw: rr,
					id: ag.rn(rr),
					am: player
				}
			}
		return null
	}

	function rj(player, rs) {
		var hH = aS.aT.hT(player, dr.rt[dr.hH[player]]);
		ad.ac[player].push(rs.nw), a8.qe(player, hH, rs.am), aV.ru(player, !0)
	}
	this.iL = function(player) {
		return !!a2.ra(a2.cI) && !!aP.data.passableMountains && 0 !== ad.rb[player].length && function(player) {
			var rd = re(player);
			if (null === rd) return !1;
			! function(player) {
				for (var h0 = du.h0, ek = du.ek, h = Math.min(ek, 12), an = dV.rl(ek), gZ = dN.gZ, rb = ad.rb, ae = 0, j = 0; j < h; j++) {
					var am = h0[(j + an) % ek];
					am !== player && rb[am].length && aC.hW(player, am) && (gZ[ae++] = am)
				}
				dN.gP[0] = ae
			}(player);
			var rg = function(rk) {
				for (var h = dN.gP[0], gZ = dN.gZ, j = 0; j < h; j++) {
					var rs = re(gZ[j]);
					if (null !== rs && rs.id === rk) return rs
				}
				return null
			}(rd.id);
			return null !== rg ? (rj(player, rg), !0) : function(player, rk) {
				var h = dn.lt.lu;
				if (0 !== h)
					for (var nw = dn.lt.bj[dV.rl(h)] << 2, ap = ag.ap, ao = dV.rl(4);;) {
						if (nw += ap[ao], ag.rm(nw)) {
							if (ag.rn(nw) === rk) return rj(player, {
								nw: nw,
								am: aP.aj
							}), !0;
							break
						}
						if (!ag.at(nw)) break
					}
				return !1
			}(player, rd.id)
		}(player)
	}
}

function rv() {
	this.rw = 0, this.rx = 0, this.ry = 0, this.rz = 0, this.s0 = 0, this.s1 = 0, this.s2 = [0, 0, 0, 0], this.s3 = function() {
		this.rw = e3.fZ(), this.rx = e3.fa(), this.ry = -this.rw, this.rz = -this.rx, this.s0 = bI.ce / fX, this.s1 = bI.cf / fX, this.s2[0] = Math.floor(this.ry), this.s2[1] = Math.floor(this.rz), this.s2[2] = Math.floor(this.s2[0] + this.s0 +
			1), this.s2[3] = Math.floor(this.s2[1] + this.s1 + 1), dj.s4 = !0
	}
}

function s5() {
	var s6;
	this.f = function() {
		if (aP.d7) {
			var sB = 1 - aP.d9;
			s6 = new Array(de.lq.length);
			for (var j = aP.d8 - 1; 0 <= j; j--) {
				var sC = de.lq[j + sB];
				s6[sC] = dy.b0.s8(20, de.s9[sC])
			}
			9 === aP.dA && (s6[1] = dy.b0.s8(20, de.s9[1]))
		} else s6 = [dy.b0.s8(20, de.s9[7])]
	}, this.fc = function() {
		var sD = fX;
		if (!(5 <= sD)) {
			var sE = bI.ce,
				sF = bI.cf,
				jx = n5 / sD,
				jy = n6 / sD,
				jz = (sE + n5) / sD,
				k0 = (sF + n6) / sD,
				an = -20 * sD,
				sG = .5 * an,
				oc = a2.a3 << 4,
				h = dm.b0.o6,
				o9 = dm.b0.o9,
				o8 = dm.b0.o8,
				sH = de.sH,
				nb = s6,
				hl = fW;
			3 < sD && (hl.globalAlpha = .5 * (5 - sD));
			for (var j = 0; j < h; j++) {
				var jK = o9[j],
					fm = sE * (jK % oc / 16 - jx) / (jz - jx) + sG,
					jK = sF * (Math.floor(jK / oc) / 16 - jy) / (k0 - jy) + sG;
				sE < fm || sF < jK || fm < an || jK < an || (hl.setTransform(sD, 0, 0, sD, fm, jK), hl.drawImage(nb[sH[o8[j] >> 3]], 0, 0))
			}
			hl.globalAlpha = 1, hl.setTransform(sD, 0, 0, sD, 0, 0)
		}
	}
}

function sK() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.nZ = 13, this.sL = this.emojis.length, this.sM = 676, this.sN = 1024, this.sO = this.emojis.indexOf("💀"), this.sP = this.sO + 1, this.sQ = this.emojis.indexOf("🥇"), this.sR = this.emojis.indexOf("😊"), this.na = function(h9) {
		return h9 < this.sM ? String.fromCharCode(55356, 56806 + aN.aO(h9, 26), 55356, 56806 + h9 % 26) : this.emojis[Math.min(h9 - this.sM, this.sL - 1)]
	}, this.sS = function(bq) {
		for (var h = bq.length - 2, bk = [], j = 0; j < h; j++) {
			var nk = bq.charCodeAt(j) - 56806,
				nl = bq.charCodeAt(j + 2) - 56806;
			0 <= nk && nk < 26 && 0 <= nl && nl < 26 && (bk.push(26 * nk + nl), j += 3)
		}
		return bk
	}, this.mt = function(h9) {
		return h9 < this.sM
	}, this.nV = function(h9) {
		return h9 >= 1024 - this.nZ
	}, this.nS = function(h9) {
		return h9 >= this.sM && h9 < this.sM + this.sP
	}
}

function sT() {
	var sU = new Uint16Array(aP.aj);

	function se(player, sb) {
		for (var h = dN.gP[0], gZ = dN.gZ, so = -1, sp = aP.aj, j = 0; j < h; j++) {
			var p0, am = gZ[j];
			aC.hW(player, am) && (p0 = dl.sq(sb, dl.sr(am)), -1 === so || p0 < so) && (so = p0, sp = am)
		}
		return sp
	}

	function sg(sd, sb) {
		if (sd === aP.aj) return 0;
		var sn = ad.sn[sd],
			bl = sn.length;
		if (0 === bl) return 0;
		for (var h = Math.min(bl, 10), sp = 0, so = dl.sq(sn[sp] >> 2, sb), j = 0; j < h; j++) {
			var j8 = dV.rl(bl),
				p0 = dl.sq(sn[j8] >> 2, sb);
			p0 < so && (so = p0, sp = j8)
		}
		return sn[sp] >> 2
	}

	function sk(player, sb, gt, ss) {
		var st;
		(ss === aP.aj || (st = dl.sr(gt), ss = dl.sr(ss), dl.sq(sb, st) < dl.sq(sb, ss))) && (sU[player] = gt)
	}
	this.f = function() {
		sU.fill(aP.aj)
	}, this.sV = function() {
		if (eK.lf() % 109 == 9 && !(du.ek < 20) && aP.d7 && !(dx.hd() < aN.aO(8 * aP.d3, 10))) {
			var gz = dx.eu();
			if (de.lq[gz]) {
				dx.sW(gz);
				var h = dN.gP[0];
				if (0 !== h)
					for (var bk = dN.ga, h0 = du.h0, ek = du.ek, sX = sU, j8 = dV.rl(h), j = 0; j < ek; j++) {
						var ov = h0[j],
							ow = bk[j8];
						aS.aT.gs(ov, ow) && 512 === sX[ov] && (sX[ov] = ow, j8 = (j8 + 1) % h)
					}
			}
		}
	}, this.iL = function(player) {
		var sb, sf, sd, sY = function(player) {
			var gt = sU[player];
			if (gt !== aP.aj) {
				if (aS.aT.h4(gt) && ad.sn[gt]) return gt;
				sU[player] = aP.aj
			}
			return aP.aj
		}(player);
		return function(player) {
			for (var ln = du.h0, bl = du.ek, h = Math.min(bl, bl < 17 && 5 === dV.rl(20) ? 1 : 16), an = dV.rl(bl), gZ = dN.gZ, sn = ad.sn, ae = 0, j = 0; j < h; j++) {
				var am = ln[(j + an) % bl];
				am !== player && sn[am].length && (gZ[ae++] = am)
			}
			dN.gP[0] = ae
		}(player), 0 !== dN.gP[0] && (0 < (sf = sg(sd = se(player, sb = dl.sc(player)), sb)) && dm.sh.si(player, dm.g8.sj(sf, sb)) ? (sk(player, sb, sd, sY), !0) : 0 < (sd = function(player, sb) {
			for (var h = dN.gP[0], gZ = dN.gZ, sX = sU, an = 0, j = 0; j < h; j++) {
				var am = gZ[j],
					am = sX[am];
				am !== aP.aj && aS.aT.h4(am) && player !== am && aC.hW(player, am) && (gZ[an++] = am)
			}
			return 0 !== (dN.gP[0] = an) ? sg(se(player, sb), sb) : 0
		}(player, sb)) && dm.sh.si(player, dm.g8.sj(sd, sb)) ? (sk(player, sb, ag.ar(sd << 2), sY), !0) : !!(0 < (sf = sg(sY, sb)) && dm.sh.si(player, dm.g8.sj(sf, sb))))
	}
}

function sv() {
	this.iL = function() {
		if (eK.lf() % 51 == 45)
			for (var h = dm.b0.o6, oE = dm.b0.oE, oG = dm.b0.oG, oD = dm.b0.oD, o8 = dm.b0.o8, sx = dr.sx, hH = dr.hH, j = 0; j < h; j++) {
				var oM, player, t0, oL = oE[j];
				oL % 64 == 6 || (oM = oG[j], (player = dm.g8.sy(oM[oM.length - 1])) < 0) || !aS.aT.gs(player, o8[j] >> 3) || dV.rl(1e3) >= sx[hH[player]] || ! function(t3, oM) {
					for (var h = oM.length - 1, t4 = dm.b0.oH[t3], p0 = 0, j = t4 + 1; j < h; j++) p0 += dl.t5(oM[j], oM[j + 1]);
					return (p0 += dl.t5(dl.t6(dm.b0.o9[t3]), oM[t4 + 1])) <= 60
				}(j, oM) || (t0 = oD[j], 64 <= oL && dm.p8.t1(player, t0)) || function(player, oM, t0, t3, oL) {
					dm.t7.t8(player) && aS.aT.hD(player, dr.t9[dr.hH[player]], 32, 0) && (dm.b0.oE[t3] = 64 + oL % 64, dm.p8.qe(t0, dm.b0.o7), dN.bk[0] = dm.tA.tB(oM), dN.gY[1] = 6, aS.aT.hU(player), dm.b0.oK(player))
				}(player, oM, t0, j, oL)
			}
	}
}

function tC() {
	var tD, cf, tE, tF, tG, tH, tI, tJ, tK;

	function fa() {
		return e4.tg(eB.tc()) ? e6.td ? __fx.settings.keybindButtons ? e4.fn - 2 * e4.cf - 3 * tE : e4.fn - e4.cf - 2 * tE : __fx.settings.keybindButtons ? e4.fn - e4.cf - 2 * tE : e4.fn - tE : e5.tg(eB.tf()) ? e6.td ? e5.fa() - e4.cf - 2 * tE : e5
			.fa() - tE : e6.td ? bI.cf - e4.cf - (th.ti() + 1) * tE : bI.cf - th.ti() * hn.gap
	}

	function tS(aX, bq, id, am, tW, tX, ow, tY, tZ, lr, tt) {
		var j, ff, nb, g3, tu = void 0 !== tZ,
			ce = Math.floor(eA.measureText(bq, eB.tV) + 1.5 * tF + (tu ? cf : 1.5 * tF));
		if (eK.eN = !0, tt || dP.lk(bq, tZ), ce + 2 * tE + e4.cf > bI.ce && !tu && 50 !== id && 20 < bq.length) tS(aX, (tt = aS.fO.tv(bq))[0], id, am, tW, tX, ow, tY, tZ, lr, !0), tS(aX, tt[1], id, am, tW, tX, ow, tY, tZ, lr, !0);
		else if (tt = ce + (50 === id ? tG : 0), (nb = document.createElement("canvas")).width = ce, nb.height = cf, (ff = nb.getContext("2d", {
				alpha: !0
			})).font = eB.tV, aS.bG.textBaseline(ff, 1), aS.bG.textAlign(ff, 0), ff.clearRect(0, 0, ce, cf), ff.fillStyle = tX, ff.fillRect(0, 0, ce, cf), ff.fillStyle = tW, ff.fillText(bq, Math.floor(1.5 * tF), Math.floor(cf / 2)), tu && (ff
				.imageSmoothingEnabled = !0, mr.nW.tw(tZ, ff, ce - cf, 0, cf)), 0 === (g3 = {
				iJ: aX,
				bq: bq,
				id: id,
				player: am,
				canvas: nb,
				tW: tW,
				tX: tX,
				ce: ce,
				te: tt,
				ow: ow,
				tY: tY,
				tZ: tZ,
				lr: lr
			}).iJ || 0 < tD.length && 0 < tD[0].iJ) tD.unshift(g3);
		else {
			for (j = 1; j < tD.length; j++)
				if (0 < tD[j].iJ) return void tD.splice(j, 0, g3);
			tD.push(g3)
		}
	}

	function tT(rp, gJ, bd) {
		return "rgb(" + rp + "," + gJ + "," + bd + ")"
	}

	function ty(id, ae) {
		for (var h = tD.length, j = 0; j < h; j++) tD[j].id === id && ae-- <= 0 && (tD.splice(j, 1), j--, h--)
	}

	function tz(id, player) {
		for (var uY = !1, j = tD.length - 1; 0 <= j; j--) tD[j].id !== id || player !== aP.aj && tD[j].player !== player || (tD.splice(j, 1), uY = !0);
		return uY
	}

	function ud(bq) {
		tS(340, bq, 6, 0, tT(215, 245, 255), fg.fh, -1, !1)
	}
	this.tL = "", this.f = function() {
		var self;
		tJ = 0, tI = bD.bE.bF() ? 7 : 12, tH = {
			j2: [0, 0, 0],
			tM: [0, 0, 0],
			tN: [220, 180, 180],
			tO: [0, 0, 0],
			bt: [0, 0, 0]
		}, tD = [], this.resize(), aP.d5 && this.tP(0, 18), a2.uc.cS[a2.cI].name.length && ud(L(148, [a2.uc.cS[a2.cI].name])), ud(L(149, [a2.a3 - 2 + "x" + (a2.a4 - 2)])), ud(L(150, [aS.fO.gG(dh.ue)])), dh.ue !== dh.uf && ud(L(151, [aS.fO.gG(
			dh.uf) + " (" + aS.fO.ug(100 * dh.uf / dh.ue, 1) + ")"])), 0 < dh.uh && ud(L(128, [aS.fO.gG(dh.uh) + " (" + aS.fO.ug(100 * dh.uh / dh.ue, 1) + ")"])), 0 < dh.ui && ud(L(152, [aS.fO.gG(dh.ui) + " (" + aS.fO.ug(100 * dh.ui / dh.ue,
			1) + ")"])), 10 === aP.dA && tS(120, L(153), 6, 0, tT(235, 255, 120), fg.fh, -1, !1), 0 !== (self = this).tL.length && (tS(200, self.tL, 0, 0, fg.fk, fg.fh, -1, !1), self.tL = ""), aP.dB && tS(340, L(106), 6, 0, tT(255, 200, 0),
			fg.fh, -1, !1)
	}, this.resize = function() {
		var tU, j;
		if (cf = (cf = Math.floor((bD.bE.bF() ? .031 : .0249) * bI.ht)) < 10 ? 10 : cf, this.fontSize = Math.floor(2 * cf / 3), this.tV = aS.bG.bQ(1, this.fontSize), tE = hn.gap, tF = Math.floor(cf / 5), 0 < tD.length)
			for (tU = tD, tD = [], j = tU.length - 1; 0 <= j; j--) tS(tU[j].iJ, tU[j].bq, tU[j].id, tU[j].player, tU[j].tW, tU[j].tX, tU[j].ow, tU[j].tY, tU[j].tZ, tU[j].lr, !0);
		this.ta()
	}, this.ta = function() {
		tK = document.createElement("canvas");
		var bq = L(107),
			ff = (tG = eA.measureText(bq, this.tV) + 5 * tF, tK.height = cf, tK.width = tG, tK.getContext("2d", {
				alpha: !0
			}));
		ff.font = this.tV, aS.bG.textBaseline(ff, 1), aS.bG.textAlign(ff, 1), ff.clearRect(0, 0, tG, cf), ff.fillStyle = fg.tb, ff.fillRect(0, 0, tG, cf), ff.fillStyle = fg.fk, ff.fillText(bq, Math.floor(tG / 2), Math.floor(cf / 2))
	}, this.tc = function() {
		var h;
		return e6.td ? e6.ce : 0 === (h = tD.length) ? 0 : 1 === h ? tD[0].te : kH(tD[0].te, tD[1].te)
	}, this.tf = function() {
		var h = tD.length;
		return e6.td ? h ? kH(e6.ce, tD[0].te) : e6.ce : 0 === h ? 0 : 1 === h ? tD[0].te : 2 === h ? kH(tD[0].te, tD[1].te) : kH(kH(tD[0].te, tD[1].te), tD[2].te)
	}, this.tj = function(fm, fn) {
		for (var jx, tk, tl = fa(), j = tD.length - 1; 0 <= j; j--)
			if ((tk = tl - (j + 1) * cf) <= fn && fn < tk + cf) return 50 === tD[j].id ? fm >= bI.ce - tG - tE - tD[j].ce && (fm >= bI.ce - tG - tE ? db.aT.tm(tD[j].player) : eO.tn(tD[j].player, 800, !1, 0), !0) : fm >= bI.ce - tD[j].ce - tE && (
				736 === tD[j].id ? (tk = tD[j].bq.split(" "), window.open("https://" + tk[tk.length - 1], "_blank")) : tD[j].tY && (tD[j].lr && tD[j].lr.bc ? (tk = tD[j].lr.ls, jx = dl.lv(tk) - 10, tk = dl.lw(tk) - 10, eO.tp(jx, tk, 19 +
					jx, 19 + tk)) : tD[j].lr && tD[j].lr.bd ? eO.tq(tD[j].player, tD[j].lr.tr) : (eO.tn(tD[j].player, 800, !1, 0), 0 <= tD[j].ow && (jx = tD[j].ow, tD[j].ow = tD[j].player, tD[j].player = jx))), !0);
		return !1
	}, this.lk = function(aX, bq, id, am, tW, tX, ow, tY, tZ, lr) {
		tS(aX, bq, id, am, tW, tX, ow, tY, tZ, lr)
	}, this.ts = function(jc) {
		tS(300, jc, 252, 0, fg.fk, fg.fh, -1, !1)
	}, this.tx = function(id) {
		for (var j = tD.length - 1; 0 <= j; j--) tD[j].id === id && (tD[j].iJ = 1)
	}, this.tP = function(player, id) {
		0 === id ? (eA.qe(player, 0), ty(423, 2), tS(160, L(108, [ad.ll[player]]), 423, player, "rgb(10,220,10)", fg.fh, -1, !1)) : 1 === id ? (tz(50, aP.aj), eA.qe(player, 1), tS(360, L(109, [ad.ll[player]]), 0, player, fg.u0, fg.fh, -1, !0), eO
			.tn(player, 2700, !1, 0)) : 2 === id ? (eA.qe(player, 2), tS(0, L(110), 0, player, "rgb(10,255,255)", fg.fh, -1, !0), eO.tn(player, 2700, !1, 0)) : 3 === id ? (eA.qe(player, 2), tS(0, L(111, [ad.ll[player]]), 0, player, fg.fk, fg
			.fh, -1, !0), eO.tn(player, 2700, !1, 0)) : 4 === id ? this.u1(1, player, player) : 5 === id ? aS.aT.gy(aP.cs) || (function(id, uI) {
			var j, uJ = 0,
				h = tD.length;
			for (j = 0; j < h; j++)
				if (tD[j].id === id && uI <= ++uJ) return tD.splice(j, 1)
		}(1, 5), eG.nm(player) && tS(180, L(112, [ad.ll[player]]), 1, player, tT(255, 200, 180), fg.fh, -1, !0), aS.aT.h2(player, 10) && (ty(573, 0), tS(180, L(113, [ad.ll[player]]), 573, player, fg.u0, fg.fh, -1, !0))) : 18 === id ? tS(255,
			L(114), 18, 0, fg.fk, fg.fh, -1, !1) : 21 === id ? tS(220, L(115), id, 0, fg.fk, fg.fh, -1, !1) : 22 === id ? this.u1(2, player, player) : 59 === id && tS(0, L(116), id, 0, fg.u3, fg.fh, 0, !1)
	}, this.ip = function(jc) {
		tS(200, L(117, [jc]), 94, 0, fg.fk, fg.u4, -1, !1)
	}, this.u5 = function(u6) {
		if (aP.cs === u6 && !aP.d0 && !aP.d1)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			tS(0, "Your Win Count is now " + __fx.wins.count, 3, u6, fg.fk, fg.fh, -1, !0);
		ad.el[u6] && (eA.qe(u6, 2), aP.ct < 100 ? tS(0, L(111, [ad.ll[u6]]), 3, u6, fg.fk, fg.fh, -1, !0) : tS(0, L(118, [ad.ll[u6]]), 3, u6, fg.fk, fg.fh, -1, !0))
	}, this.u7 = function(nw) {
		var bq, uB, u8 = "(" + dl.lv(nw >> 2) + ", " + dl.lw(nw >> 2) + ")",
			tY = !1,
			player = 0;
		ag.ah(nw) ? ag.at(nw) ? u8 = L(119, [u8]) : (player = ag.ar(nw), aP.d1 && !1 === __fx.hoveringTooltip.active && (aP.cs = player), bq = L(120, [aS.ff.u9(ad.uA[player], aS.bG.bQ(0, 10), 150)]) + "   ", bq = (bq += L(121, [aS.fO.gG(ad.er[
				player])]) + "   ") + L(122, [aS.fO.gG(ad.el[player])]) + "   ", aP.d7 && (uB = de.kX[de.lq[de.gu[player]]], bq += L(123) + ": " + uB + "   "), aS.aT.gy(player) && (bq += L(124) + ": " + dr.uC[dr.hH[player]] + "   "), u8 =
			bq = (bq += L(125, [player]) + "   ") + L(126, [u8]), tY = !0) : u8 = ag.rm(nw) ? L(127, [u8]) + "   #" + ag.rn(nw) : L(128, [u8]), eK.eN = !0, ty(55, 0), tS(220, u8, 55, player, fg.fk, fg.fh, -1, tY, void 0, void 0, !0)
	}, this.uD = function(uE) {
		var bl = dm.b0,
			player = bl.o8[uE] >> 3,
			bq = (eK.eN = !0, ty(55, 0), L(129, [ad.ll[player]]) + "   ");
		tS(220, bq += L(121, [aS.fO.gG(bl.oB[uE])]), 55, player, fg.fk, fg.fh, -1, !0)
	}, this.uF = function(qv, uG, nU) {
		qv === aP.cs ? tS(175, " " + L(130, [ad.ll[uG]]) + ": ", 1001, uG, tT(200, 255, 210), fg.fh, -1, !0, nU) : this.uH(qv, nU)
	}, this.uH = function(qv, nU) {
		ty(1e3, 0), tS(175, ad.ll[qv] + ": ", 1e3, qv, fg.fk, "rgba(5,60,25,0.9)", -1, !0, nU)
	}, this.uK = function() {
		var jc;
		aP.dH ? (jc = L(131), eA.uL(L(132), 2, 1, 12), tS(0, jc, 40, 0, "rgb(10,220,10)", fg.fh, -1, !1)) : (jc = L(133), eA.uL(L(134), 2, 0, 16), tS(0, jc, 41, 0, fg.fk, fg.fh, -1, !1))
	}, this.uM = function() {
		var ae = ad.ll,
			ao = aP.data;
		tS(300, ae[0] + " [" + aP.dD.uN(ao.elo[0]) + "] vs " + ae[1] + " [" + aP.dD.uN(ao.elo[1]) + "]", 65, 0, fg.lX, "rgba(100,255,255,0.75)", -1, !1)
	}, this.uO = function(jc) {
		tS(350, jc, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.uP = function(uQ) {
		tS(0, L(uQ ? 135 : 136), 247, 0, fg.jV, fg.fh, -1, !1)
	}, this.uR = function(uS, uT, uU) {
		var ao = aP.data,
			ae = ad.ll;
		tS(0, ae[0] + ": " + aP.dD.uN(ao.elo[0]) + " -> " + uS, 66, 0, fg.fk, uU[0], -1, !1), tS(0, ae[1] + ": " + aP.dD.uN(ao.elo[1]) + " -> " + uT, 66, 1, fg.fk, uU[1], -1, !1)
	}, this.uV = function(player, id) {
		0 === id ? tz(50, player) ? (tS(128, L(137, [ad.ll[player]]), 52, player, tT(180, 255, 180), fg.fh, -1, !0), eG.mo(player, 2, 255)) : tS(384, L(138, [ad.ll[player]]), 51, player, tT(210, 210, 255), fg.fh, -1, !0) : tz(51, player) ? (tS(
			128, L(139, [ad.ll[player]]), 52, player, fg.fk, "rgba(60,120,10,0.9)", -1, !0), eG.mo(player, 2, 255)) : (tS(384, L(140, [ad.ll[player]]), 50, player, fg.fk, "rgba(90,90,90,0.9)", -1, !0), eG.mo(player, 2, 96))
	}, this.uW = function(j2, target) {
		var color = tT(210, 255, 210);
		1 < j2.length ? tS(230, L(141, [j2.length, ad.ll[target]]), 66, target, color, fg.fh, -1, !0) : tS(230, L(142, [ad.ll[j2[0]], ad.ll[target]]), 66, j2[0], color, fg.fh, target, !0)
	}, this.uX = function(player, target) {
		tS(230, L(143, [ad.ll[player], ad.ll[target]]), 66, player, fg.fk, "rgba(75,65,5,0.9)", target, !0)
	}, this.lh = function(id, ae) {
		ty(id, ae)
	}, this.nn = function(id, player) {
		tz(id, void 0 === player ? aP.aj : player)
	}, this.lg = function(id) {
		for (var j = tD.length - 1; 0 <= j; j--)
			if (tD[j].id === id) return tD[j];
		return null
	}, this.uZ = function(mb, ua, player) {
		2 !== ad.gq[aP.cs] && tS(200, 1 === mb ? L(144, [ad.ll[player]]) : L(145, [aS.fO.gG(mb), ad.ll[player]]), 30, player, "rgb(190,255,190)", fg.fh, -1, !0)
	}, this.ub = function(mb, player) {
		2 !== ad.gq[aP.cs] && (ty(31, 0), mb = " (" + aS.fO.gG(mb) + ") 💸", tS(150, mb = aS.aT.gy(player) ? L(146) + mb : L(147, [ad.ll[player]]) + mb, 31, player, fg.lX, "rgba(205,205,205,0.9)", -1, !0))
	}, this.uj = function(n2) {
		for (var bt = eK.lf(), j = 2; 0 <= j; j--) 0 < tH.tO[j] && (n2 || tH.bt[j] < bt - 220) && this.uk(j)
	}, this.uk = function(id) {
		var bq, h = tH.tO[id],
			player = tH.j2[id];
		tH.tO[id] = 0, 1 === h ? (0 === id ? bq = L(154, [ad.ll[player], ad.ll[tH.tM[0]]]) : 1 === id ? bq = L(155, [ad.ll[player]]) : 2 === id ? bq = L(156, [ad.ll[player]]) : 3 === id && (bq = L(157, [ad.ll[player]])), ty(7, 0), tS(tH.tN[id],
			bq, 7, tH.tM[id], fg.fk, fg.fh, -1, !0)) : (bq = L(0 === id ? 158 : 1 === id ? 159 : 160, [h]), ty(7, 0), tS(tH.tN[id], bq, 7, player, fg.fk, fg.fh, -1, !1))
	}, this.u1 = function(id, ov, ow) {
		var bt = eK.lf(),
			h = tH.tO[id] + 1;
		tH.tO[id]++, tH.j2[id] = ov, tH.tM[id] = ow, 1 === h && (tH.bt[id] = bt), (1 === h && (aP.cu < 32 || 2 === aP.d2) || 1 < h && (tH.bt[id] < bt - 140 || 2 === aP.d2)) && this.uk(id)
	}, this.iL = function() {
		ul.iL();
		for (var rT = (rT = tD.length - tI) <= 1 ? 1 : rT * rT, j = tD.length - 1; 0 <= j; j--) 0 < tD[j].iJ && (tD[j].iJ -= rT, tD[j].iJ <= 0) && (eK.eN = !0, tD.splice(j, 1));
		! function() {
			var ae, j;
			if (128 !== tJ && !(++tJ < 128))
				for (ae = 5, j = du.ek - 1; 0 <= j; j--) 1 === ad.gq[du.h0[j]] && 0 < ae-- && tS(240, L(157, [ad.ll[du.h0[j]]]), 1, du.h0[j], fg.lX, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.uj(!1)
	}, this.fc = function() {
		for (var nO, fn = fa(), j = tD.length - 1; 0 <= j; j--) nO = fn - (j + 1) * cf, 50 === tD[j].id ? (fW.drawImage(tD[j].canvas, bI.ce - tD[j].ce - tG - tE, nO), fW.drawImage(tK, bI.ce - tG - tE, nO)) : fW.drawImage(tD[j].canvas, bI.ce - tD[
			j].ce - tE, nO)
	}
}

function un() {
	var uo, up, uq;
	uo = [32, 65, 191, 913, 931], up = [64, 127, 688, 930, 1155], uq = new Array(uo.length + 1);
	for (var j = 0; j < uq.length; j++) {
		uq[j] = 0;
		for (var bc = j - 1; 0 <= bc; bc--) uq[j] += up[bc] - uo[bc]
	}

	function ux(bt) {
		for (var j = uo.length - 1; 0 <= j; j--)
			if (bt >= uo[j] && bt < up[j]) return j;
		return -1
	}
	this.us = function(bq) {
		return 0 !== (bq = bq.trim()).indexOf("Bot ") && 0 !== bq.indexOf("[Bot] ") && function(bq, uu, uv) {
			var h = (bq = bq.trim()).length;
			if (h < uu || uv < h) return !1;
			for (var bt, uw = 0, j = 0; j < h; j++)
				if (bt = bq.charCodeAt(j), uw += 65 <= bt && bt <= 90 || 1040 <= bt && bt <= 1071 ? 1 : 0, -1 === ux(bt)) return !1;
			if (3 < uw && uw > Math.floor(h / 2)) return !1;
			return !0
		}(bq, 3, 20)
	}, this.eX = function(bq) {
		for (var h = (bq = bq.trim()).length, bk = [], j = 0; j < h; j++) {
			var bt, am = ux(bt = bq.charCodeAt(j));
			bk.push(uq[am] + bt - uo[am])
		}
		return bk
	}, this.qc = function(bk) {
		for (var bt, bd, bq = "", h = bk.length, j = 0; j < h; j++)
			for (bd = 1; bd < uq.length; bd++)
				if (bk[j] < uq[bd]) {
					bt = uo[bd - 1] + bk[j] - uq[bd - 1], bq += String.fromCharCode(bt);
					break
				} return bq
	}, this.uy = function(bq) {
		for (var bk = this.eX(bq), result = "", j = 0; j < bk.length; j++) result = (result += bk[j] < 10 ? "00" : bk[j] < 100 ? "0" : "") + bk[j].toString(10);
		return result
	}, this.uz = function(bq) {
		for (var bk = new Array(Math.floor(bq.length / 3)), j = 0; j < bq.length; j += 3) bk[Math.floor(j / 3)] = parseInt(bq.substring(j, j + 3));
		return this.qc(bk)
	}, this.v0 = function(bq) {
		for (var h9, bk = [bq.length], j = 0; j < bq.length; j++) bk[j] = bq.charCodeAt(j) - 48;
		var result = "";
		for (j = 0; j < bq.length; j++) j === bq.length - 1 || 51 < 10 * bk[j] + bk[j + 1] ? result += bk[j].toString() : (h9 = 10 * bk[j] + bk[j + 1], result += String.fromCharCode(h9 + (h9 < 26 ? 65 : 71)), j++);
		return result
	}, this.v1 = function(bq) {
		for (var bt, result = "", j = 0; j < bq.length; j++) 48 <= (bt = bq.charCodeAt(j)) && bt < 58 ? result += String.fromCharCode(bt) : 65 <= bt && bt < 75 ? result += "0" + (bt - 65).toString() : 75 <= bt && bt < 91 ? result += (bt - 65)
			.toString() : 97 <= bt && bt < 123 && (result += (bt - 71).toString());
		return result
	}, this.v2 = function(bq) {
		for (var h = bq.length, bk = [], j = 0; j < h; j++)(bt = bq.charCodeAt(j)) < 58 ? bk.push(bq[j]) : (bt -= bt < 91 ? 65 : 71, bk.push(String(aN.aO(bt, 10))), bk.push(String(bt - 10 * aN.aO(bt, 10))));
		var h = bk.length - 2,
			bt = 0,
			v3 = [];
		for (j = 0; j < h; j += 3) v3[bt++] = parseInt(bk[j] + bk[j + 1] + bk[j + 2]);
		return v3
	}, this.v4 = function() {
		for (var rp, v5 = "", j = 0; j < 6; j++) rp = 48 + dV.random() % 36, rp += 58 <= rp ? 39 : 0, v5 += String.fromCharCode(rp);
		return v5
	}
}

function dE() {
	this.f = function() {
		8 === aP.dA && eB.uM()
	}, this.v6 = function(v7) {
		var elo = aP.data.elo,
			rT = (elo[v7] - elo[1 - v7]) / 10,
			rT = 8 / (1 + Math.pow(2, rT / 32)),
			rT = Math.floor(10 * rT + .5),
			v9 = elo[v7] + rT,
			uS = this.uN(v9),
			elo = this.uN(elo[1 - v7] - rT),
			rT = (0 === v7 ? eB.uR(uS, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : eB.uR(elo, uS, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aP.dB) * v9 / 500).toFixed(2));
		v7 === aP.cs ? eB.lk(640, L(161, [rT]), 40, 0, fg.fk, fg.fh, -1, !1) : eB.lk(640, L(162, [ad.ll[v7], rT]), 40, 0, fg.fk, fg.fh, -1, !1)
	}, this.uN = function(elo) {
		return 16e3 === (elo = aN.fL(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function vB() {
	this.uA = new Array(aP.aj), this.ll = new Array(aP.aj), this.gq = new Uint8Array(aP.aj), this.eQ = new Uint8Array(aP.aj), this.mj = new Uint16Array(aP.aj), this.mk = new Uint16Array(aP.aj), this.mm = new Uint16Array(aP.aj), this.mn =
		new Uint16Array(aP.aj), this.el = new Uint32Array(aP.aj), this.vC = new Uint32Array(aP.aj), this.er = new Uint32Array(aP.aj), this.ac = null, this.vD = null, this.sn = null, this.rb = null, this.vE = new Uint16Array(aP.aj), this.vF =
		new Uint16Array(aP.aj), this.vG = new Uint16Array(aP.aj), this.qX = new Uint16Array(aP.aj), this.vH = new Uint8Array(aP.aj), this.hB = new Uint16Array(aP.aj), this.f = function() {
			this.uA.fill(""), this.ll.fill(""), this.gq.fill(0), this.eQ.fill(0), this.mj.fill(0), this.mk.fill(0), this.mm.fill(0), this.mn.fill(0), this.el.fill(0), this.vC.fill(0), this.er.fill(0), this.ac = new Array(aP.aj), this.vD = new Array(
				aP.aj), this.sn = new Array(aP.aj), this.rb = new Array(aP.aj), this.vE.fill(0), this.vF.fill(0), this.vG.fill(0), this.qX.fill(0), this.vH.fill(0), this.hB.fill(0)
		}
}

function vI() {
	this.vJ = function() {
		for (var am, fm, gf, vK = vL, vM = a2.vN, ce = a2.a3, vO = ce - 1, sB = a2.a4 - 1, ae = 0, fn = 1; fn < sB; fn++)
			for (gf = fn * ce, fm = 1; fm < vO; fm++) vM[am = gf + fm << 2] === vM[1 + am] && vM[am] === vM[2 + am] && (ae++, vK[2 + am] = 4);
		dh.ui = ae
	}, this.vP = function(vQ, vR) {
		for (var vK = vL, ce = a2.a3, vO = ce - 1, sB = a2.a4 - 1, id = 0, fn = 1; fn < sB; fn++)
			for (var gf = fn * ce, fm = 1; fm < vO; fm++) {
				var nw = 2 + (gf + fm << 2);
				vK[nw] === vQ && (! function(nw, id, vQ, vR) {
					var h = 1,
						vK = vL,
						ap = ag.ap,
						vT = [nw],
						vU = id >> 8 << 1,
						vV = 255 & id;
					vK[nw - 2] = vU, vK[nw - 1] = vV, vK[nw] = 5;
					for (; h;) {
						for (var vW = [], j = 0; j < h; j++)
							for (var rq = vT[j], ao = 3; 0 <= ao; ao--) {
								var rr = rq + ap[ao];
								vK[rr] === vQ && (vK[rr - 2] = vU, vK[rr - 1] = vV, vK[rr] = vR, vW.push(rr))
							}
						h = (vT = vW).length
					}
				}(nw, id, vQ, vR), id = (id + 1) % 32768)
			}
	}, this.vX = function() {
		for (var vK = vL, ce = a2.a3, vO = ce - 3, sB = a2.a4 - 3, vZ = 12 * ce, fn = 3; fn < sB; fn++)
			for (var gf = fn * ce, fm = 3; fm < vO; fm++) {
				var nw = 2 + (gf + fm << 2);
				2 !== vK[nw] || 2 === vK[nw - 12] && 2 === vK[12 + nw] && 2 === vK[nw - vZ] && 2 === vK[nw + vZ] || (vK[nw - 2] = 1 | vK[nw - 2])
			}
	}
}

function va() {
	var vb = 0,
		vc = !0;

	function vd(id) {
		id = [L(163), L(164), L(165), L(166)][id];
		eB.uO(id)
	}
	this.iL = function() {
		var aX, lS;
		eK.iJ < vb || (vb = eK.iJ + 5e3, aP.d1) || aP.d0 || aS.aT.gp(aP.cs) || (aX = new Date, lS = aX.getUTCSeconds(), vc ? lS < 50 && (vc = !1) : lS < 50 || (vc = !0, (lS = (aX.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == lS || 20 == lS ||
			40 == lS ? aP.dA < 7 && vd(0) : 10 == lS || 30 == lS || 50 == lS ? 7 !== aP.dA && 10 !== aP.dA || vd(1) : 5 == lS || 25 == lS || 45 == lS ? 8 === aP.dA && vd(2) : 35 == lS && 9 === aP.dA && vd(3))))
	}
}

function ve() {
	this.ce = 0, this.cf = 0, this.fp = 0, this.fq = 0, this.vf = 0, this.vg = 0, this.kN = 0, this.kO = 0;
	var vi = this.vh = 0;
	this.vj = 0, this.vk = 0, this.vl = 0, this.vm = 0, this.k = 0, this.vn = null, this.td = !1, this.vo = -1, this.vp = !1, this.vq = [0, 0], this.dg = function() {
		this.vn = [L(167), L(168, 0, "Balance"), L(169, 0, "Interest"), L(170)]
	}, this.f = function() {
		this.td = !1, this.vo = -1, this.vp = !1, this.resize()
	}, this.resize = function() {
		this.ce = bI.ce < 1.369 * bI.cf ? bI.ce : 1.369 * bI.cf;
		var ao = bD.bE.bF() && bI.ce < bI.cf ? 1 : bD.bE.bF() ? .8 : bI.ce < bI.cf ? .65 : .59;
		this.ce = Math.floor(ao * this.ce), this.ce -= bD.bE.bF() && bI.ce < bI.cf ? 2 * hn.gap + 2 : 0, this.cf = Math.floor(this.ce / 1.369), this.vm = Math.floor(this.cf / 150), this.vm = Math.max(this.vm, 1.5), this.fp = Math.floor(1 + .02 *
			this.ce), this.fq = Math.floor(1 + .04 * this.ce), this.kN = this.fq, vi = Math.floor(.75 * this.kN), this.kO = Math.floor(1 + .075 * this.ce), this.vj = Math.floor(1 + .1125 * this.ce), this.vk = Math.floor(this.ce * (bD.bE
		.bF() ? .03 : .029)), this.vk = Math.max(this.vk, 4), this.vl = Math.floor(.035 * this.ce), this.vl = Math.max(this.vl, 4), this.vh = this.cf - 2 * this.kN - this.kO - this.vj, this.td && this.vr()
	}, this.tj = function(mz, n0) {
		var nO, nN;
		return !!this.td && (nN = mz, nO = n0, mz -= aN.aO(bI.ce - this.ce, 2), n0 -= aN.aO(bI.cf - this.cf, 2), mz < 0 || n0 < 0 || mz >= this.ce || n0 >= this.cf || mz >= this.ce - this.vj && n0 < this.vj ? -1 !== e9.tj(nN, nO) || e5.tj(nN,
			nO) || this.fQ() : n0 < this.vj || (n0 < this.cf - this.kO ? (this.vp = !0, this.vo = (mz - 2 * this.fp - this.vf) / this.vg, 3 !== this.k && (eK.eN = !0)) : (nN = (nN = Math.floor(mz / (this.ce / this.vn.length))) < 0 ? 0 : nN >=
				this.vn.length ? this.vn.length - 1 : nN) !== this.k && (this.k = nN, this.vr(), eK.eN = !0)), !0)
	}, this.mx = function(mz, n0) {
		return this.vq[0] = mz, this.vq[1] = n0, !(!this.td || !this.vp || (mz -= aN.aO(bI.ce - this.ce, 2), n0 = this.vo, this.vo = (mz - 2 * this.fp - this.vf) / this.vg, (0 <= this.vo && this.vo <= 1 || 0 <= n0 && n0 <= 1) && (eK.eN = !0), 0))
	}, this.vs = function() {
		this.vp && (this.vp = !1)
	}, this.vt = function() {
		this.td ? this.fQ() : this.show()
	}, this.show = function() {
		aZ.vu < 2 || (this.td = !0, this.vr())
	}, this.fQ = function() {
		this.td = !1, this.vo = -1, eK.eN = !0
	}, this.vr = function() {
		this.k < 2 ? this.vf = eA.measureText(aS.fO.gG(aZ.max[this.k]), aS.bG.bQ(0, this.vk)) : 2 === this.k && (this.vf = eA.measureText(aS.fO.ug(6, 2), aS.bG.bQ(0, this.vk))), this.vg = this.ce - 2 * this.fp - this.vf - this.fq
	}, this.vv = function() {
		this.td && this.vr()
	}, this.fc = function() {
		this.td && this.vw()
	}, this.vw = function() {
		var fm = aN.aO(bI.ce - this.ce, 2),
			fn = aN.aO(bI.cf - this.cf, 2);
		fW.setTransform(1, 0, 0, 1, fm, fn), fW.fillStyle = fg.fh, fW.fillRect(0, this.vj, this.ce, this.cf - this.vj), this.vx(), this.vy(), fW.strokeRect(0, 0, this.ce, this.cf), aS.bG.textAlign(fW, 2), fW.font = aS.bG.bQ(0, this.vk), 0 ===
			this.k ? this.vz(aZ.w0, fm, fn) : 1 === this.k ? this.vz(aZ.hC, fm, fn) : 2 === this.k ? this.w1(fm, fn) : 3 === this.k && (this.w2(fm, fn), this.w3(fm, fn)), e9.w4(Math.floor(fm + this.ce - .725 * this.vj), Math.floor(fn + .275 *
				this.vj), Math.floor(.45 * this.vj)), fW.setTransform(1, 0, 0, 1, 0, 0)
	}, this.vx = function() {
		var j, aX;
		for (fW.lineWidth = this.vm, aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 1), fW.strokeStyle = fg.fk, fW.font = aS.bG.bQ(1, this.vl), aX = this.ce / this.vn.length, fW.fillStyle = fg.l5, fW.fillRect(this.k * aX, this.cf - this.kO, aX,
				this.kO), fW.fillStyle = fg.fk, fW.fillRect(0, this.cf - this.kO - .5 * this.vm, this.ce, this.vm), j = 1; j <= 3; j++) fW.fillRect(j * aX, this.cf - this.kO, this.vm, this.kO);
		for (j = this.vn.length - 1; 0 <= j; j--) fW.fillText(aS.ff.u9(this.vn[j], 0, .9 * aX), (j + .5) * aX, this.cf - .46 * this.kO)
	}, this.vy = function() {
		fW.fillStyle = fg.w5, fW.fillRect(0, 0, this.ce, this.vj), fW.fillStyle = fg.fk, fW.fillRect(0, this.vj - .5 * this.vm, this.ce, this.vm), fW.font = aS.bG.bQ(1, .39 * this.vj), fW.fillText(aS.ff.u9(L(171), 0, .8 * this.ce), Math.floor(
			this.ce / 2), Math.floor(.55 * this.vj))
	}, this.vz = function(bk, fm, fn) {
		var bl = aZ.max[this.k],
			my = (fW.setTransform(1, 0, 0, 1, fm + 2 * this.fp + this.vf, fn + this.kN + this.vj), fW.lineWidth = 2, this.vh / Math.sqrt(bl));
		fW.beginPath(), fW.moveTo(this.vg, this.vh - my * Math.sqrt(bk[aZ.vu - 1]));
		for (var j = aZ.vu - 2; 0 <= j; j--) fW.lineTo(j * this.vg / (aZ.vu - 1), this.vh - my * Math.sqrt(bk[j]));
		fW.stroke();
		fm = this.w4(bk, my, .5);
		fm < .95 && fW.fillText(aS.fO.gG(bl), -this.fp, 0), .05 < Math.abs(fm - .5) && fW.fillText(aS.fO.gG(Math.floor(bl / 4)), -this.fp, Math.floor(this.vh / 2)), .05 < fm && fW.fillText("0", -this.fp, this.vh)
	}, this.w1 = function(fm, fn) {
		fW.setTransform(1, 0, 0, 1, fm + 2 * this.fp + this.vf, fn + this.kN + this.vj), fW.lineWidth = 2;
		var my = this.vh / Math.max(aZ.max[this.k], 1);
		fW.beginPath(), fW.moveTo(this.vg, this.vh - my * aZ.px[aZ.vu - 1]);
		for (var j = aZ.vu - 2; 0 <= j; j--) fW.lineTo(j * this.vg / (aZ.vu - 1), this.vh - my * aZ.px[j]);
		fW.stroke();
		fm = this.w4(aZ.px, my, 1), fn = aZ.max[this.k] / 100;
		fm < .95 && fW.fillText(aS.fO.ug(fn, 2), -this.fp, 0), .05 < Math.abs(fm - .5) && fW.fillText(aS.fO.ug(fn / 2, 2), -this.fp, Math.floor(this.vh / 2)), .05 < fm && fW.fillText(aS.fO.ug(0, 2), -this.fp, this.vh)
	}, this.w2 = function(fm, fn) {
		fW.setTransform(1, 0, 0, 1, fm + .34 * this.ce, fn + 2 * vi + this.vj), aS.bG.textAlign(fW, 2);
		for (var w6 = this.cf - 4 * vi - this.kO - this.vj, bk = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], j = 9; 0 <= j; j--) fW.fillText(aS.ff.u9(aZ.w7[bk[j]], 0, .31 * this.ce), 0, j * w6 / 9);
		var h9 = aZ.w8;
		for (fW.setTransform(1, 0, 0, 1, fm + .39 * this.ce, fn + 2 * vi + this.vj), aS.bG.textAlign(fW, 0), fW.fillText(aS.fO.ug(100 * h9[0] / (1024 * Math.max(h9[1], 1)), 1), 0, 0), j = 8; 1 <= j; j--) fW.fillText(h9[bk[j]].toString(), 0, j *
			w6 / 9);
		fW.fillText(aS.fO.ug(100 * (1 - ad.el[aP.cs] / h9[7]), 0), 0, w6)
	}, this.w3 = function(fm, fn) {
		fW.setTransform(1, 0, 0, 1, fm + .79 * this.ce, fn + 2 * vi + this.vj), aS.bG.textAlign(fW, 2);
		var j, w6 = this.cf - 4 * vi - this.kO - this.vj;
		for (fW.fillStyle = fg.w9, j = 2; 0 <= j; j--) fW.fillText(aS.ff.u9(aZ.w7[j + 8], 0, .31 * this.ce), 0, j * w6 / 9);
		fW.fillText(aS.ff.u9(aZ.w7[18], 0, .31 * this.ce), 0, 3 * w6 / 9), fW.fillStyle = fg.wA, fW.fillText(aS.ff.u9(aZ.w7[11], 0, .31 * this.ce), 0, 4 * w6 / 9), fW.fillStyle = fg.wB, fW.fillText(aS.ff.u9(aZ.w7[13], 0, .31 * this.ce), 0, 5 *
				w6 / 9), fW.fillText(aS.ff.u9(aZ.w7[15], 0, .31 * this.ce), 0, 6 * w6 / 9), fW.fillText(aS.ff.u9(aZ.w7[16], 0, .31 * this.ce), 0, 7 * w6 / 9), fW.fillText(aS.ff.u9(aZ.w7[12], 0, .31 * this.ce), 0, 8 * w6 / 9), fW.fillStyle = fg
			.wC, fW.fillText(aS.ff.u9(aZ.w7[17], 0, .31 * this.ce), 0, w6), fW.fillStyle = fg.w9;
		var h9 = aZ.w8,
			rU = h9[8] + h9[9] + h9[10] + h9[18],
			rU = aS.fO.gG(rU),
			wD = fW.measureText(rU).width,
			fm = (fW.setTransform(1, 0, 0, 1, fm + .83 * this.ce + wD, fn + 2 * vi + this.vj), fW.fillText(aS.fO.gG(h9[8]), 0, 0), fW.fillText(aS.fO.gG(h9[9]), 0, w6 / 9), fW.fillText(aS.fO.gG(h9[10]), 0, 2 * w6 / 9), fW.fillText(aS.fO.gG(h9[
				18]), 0, 3 * w6 / 9), fW.fillStyle = fg.wA, fW.fillText(rU, 0, 4 * w6 / 9), fW.fillStyle = fg.wB, fW.fillText(aS.fO.gG(h9[13]), 0, 5 * w6 / 9), fW.fillText(aS.fO.gG(h9[15]), 0, 6 * w6 / 9), fW.fillText(aS.fO.gG(h9[16]), 0, 7 *
				w6 / 9), fW.fillText(aS.fO.gG(h9[12]), 0, 8 * w6 / 9), h9[12] + h9[13] + h9[15] + h9[16]);
		fW.fillStyle = fg.wC, fW.fillText(aS.fO.gG(fm), 0, w6), fW.fillStyle = fg.fk
	}, this.w4 = function(bk, my, wF) {
		var j, b8, gf;
		return this.vo < 0 || 1 < this.vo ? .25 : (j = this.vo * (aZ.vu - 1), gf = bk[b8 = Math.floor(j)], gf += (j - b8) * (bk[b8 < aZ.vu - 1 ? b8 + 1 : b8] - gf), fW.strokeStyle = fg.wG, .04 < this.vo && this.wH(0, this.vh - my * Math.pow(gf,
				wF), j * this.vg / (aZ.vu - 1), this.vh - my * Math.pow(gf, wF)), .04 < gf / aZ.max[this.k] && this.wH(j * this.vg / (aZ.vu - 1), this.vh, j * this.vg / (aZ.vu - 1), this.vh - my * Math.pow(gf, wF)), fW.fillStyle = fg.wI, fW
			.beginPath(), fW.arc(j * this.vg / (aZ.vu - 1), this.vh - my * Math.pow(gf, wF), Math.max(2, .014 * this.cf), 0, 2 * Math.PI), fW.fill(), bk = this.vo * eK.iR, bk = 0 === ad.eQ[aP.cs] ? Math.floor(bk * aZ.wJ) : Math.floor(bk * eK
				.lf()), fW.fillStyle = fg.fk, fW.fillText(1 === wF ? aS.fO.ug(gf / 100, 2) : aS.fO.gG(Math.floor(gf)), -this.fp, this.vh - my * Math.pow(gf, wF)), aS.bG.textAlign(fW, 1), fW.fillText(e8.wK(bk), j * this.vg / (aZ.vu - 1), this
				.vh + this.vk - (bD.bE.bF() ? 2 : 0) - this.vm), aS.bG.textAlign(fW, 2), my * Math.pow(gf, wF) / this.vh)
	}, this.wH = function(jx, jy, jz, k0) {
		fW.beginPath(), fW.moveTo(jx, jy), fW.lineTo(jz, k0), fW.stroke()
	}
}

function wL() {
	this.pU = function(size) {
		for (var wM = qb, bk = [], j = 0; j < size; j++) bk.push(String.fromCharCode(wM.pF(16)));
		return bk.join("")
	}, this.us = function(bq) {
		return 20 < (bq = bq.trim()).length ? bq.substring(0, 20) : bq
	}
}

function wN() {
	this.n = function(k, value) {
		2 !== l.bj.data[k].type && (value = Math.floor(value)), l.bj.data[k].value !== value && (l.bj.jL(k, value), 0 === k ? (c9.wO(), qN.f(), c9.ed(2)) : 1 === k ? bI.wP(1) : 2 === k ? bI.wP(0) : 5 === k && (aS.bG.hi(), bI.wP(0)))
	}, this.wQ = function() {
		for (var data = l.bj.data, j = 0; j < 100; j++) data[j] && l.bj.jL(j, data[j].jM);
		aS.bG.hi(), bI.wP(1)
	}, this.wR = function() {
		for (var data = l.bj.data, j = 0; j < data.length; j++) data[j] && l.bj.n(j, data[j].jM)
	}, this.wS = function() {
		for (var bd = l.bj, j = 128; j < 135; j++) bd.jL(j, bd.data[j].jM)
	}, this.wT = function(data) {
		l.m.n(109, data.rN), l.m.n(107, data.wU), l.m.n(108, data.wV), l.m.n(112, data.wW), l.m.n(111, data.wX), l.m.n(113, data.g0), l.m.n(135, data.wY), l.m.n(136, data.wZ), l.m.n(137, data.wa), l.m.n(138, data.wb), l.m.n(139, data.wc), l.m.n(
			141, data.wd), l.m.n(142, data.we), l.m.n(143, data.wf), l.m.n(144, data.wg)
	}
}

function wh() {
	function wr(player, hH, wl, wo) {
		var gt;
		if (ag.at(wl)) gt = aP.aj;
		else {
			if ((gt = ag.ar(wl)) === player) return void aZ.aa(player, hH - aS.aT.aY(player, hH), 12);
			if (!aC.hW(player, gt)) return void db.wy.wz(player, gt, hH)
		}
		a8.x0(player, gt) || a8.x1(player) ? (ad.ac[player].push(wo << 2), a8.qe(player, hH, gt), aV.ru(player, !0)) : aZ.aa(player, hH, 12)
	}
	this.iL = function() {
		for (var oE = dm.b0.oE, o9 = dm.b0.o9, oA = dm.b0.oA, j = dm.b0.o6 - 1; 0 <= j; j--) 65535 === oA[j] && function(j, wo, wj) {
			if (6 === wj) {
				if (dm.p8.wp(j, wo)) return dm.b0.oH[j]++, dm.b0.oA[j] = 0, 0
			} else {
				var player = dm.b0.o8[j] >> 3,
					j = dm.b0.oB[j];
				aZ.wq(player), wj < 4 ? wr(player, j, wo + dl.wm[wj] << 2, wo) : 4 === wj ? function(player, hH, wo) {
					var j, rr, wu = dl.wv,
						rq = dl.ww(wo);
					for (j = 0; j < 4; j++)
						if (rr = rq + wu[j], ag.at(rr)) return wr(player, hH, rr, wo);
					for (j = 0; j < 4; j++)
						if (rr = rq + wu[j], ag.aq(rr) && !ag.wx(player, rr)) return wr(player, hH, rr, wo);
					for (j = 0; j < 4; j++)
						if (rr = rq + wu[j], ag.aq(rr)) return wr(player, hH, rr, wo)
				}(player, j, wo) : 5 === wj && function(player, hH, wo) {
					var j, rr, wu = dl.wv,
						rq = dl.ww(wo);
					for (j = 0; j < 4; j++)
						if (rr = rq + wu[j], ag.aq(rr) && ag.wx(player, rr)) return wr(player, hH, rr, wo);
					for (j = 0; j < 4; j++)
						if (rr = rq + wu[j], ag.aq(rr)) return wr(player, hH, rr, wo);
					for (j = 0; j < 4; j++)
						if (rr = rq + wu[j], ag.at(rr)) return wr(player, hH, rr, wo)
				}(player, j, wo)
			}
			return 1
		}(j, dl.t6(o9[j]), oE[j] % 64) && (dm.p8.p9(j), dm.pA.pB(j))
	}, this.oU = function(player, ls, wj, tr, hH) {
		if (!(5 <= wj)) {
			var wk = aP.cs;
			if (aS.aT.gp(wk) && aC.hW(player, wk) && player !== wk && 0 !== ad.sn[wk].length && aS.aT.h2(player, 5)) {
				for (var wl, uY = !1, j = 0; j < 4; j++)
					if (wl = ls + dl.wm[j] << 2, ag.ah(wl) && !ag.at(wl) && ag.ar(wl) === wk) {
						uY = !0;
						break
					} uY && (eB.lh(719, 0), wj = hH < 25e3 ? L(172) + " (" + aS.fO.gG(hH) + ") ⛵" : L(173) + " (" + aS.fO.gG(hH) + ") 🚢", eB.lk(180, wj, 719, player, fg.wn, fg.fh, -1, !0, void 0, {
					bd: 1,
					tr: tr
				}))
			}
		}
	}
}

function x2() {
	this.eU = new x3, this.eW = new x4, this.pb = new x5, this.f = function() {
		aP.d1 || this.eU.f()
	}, this.iL = function() {
		aP.d1 || (this.eU.iL(), 3 !== c9.cA) || eK.lf() % 15 != 5 && 2 !== aP.d2 || c9.r2().x7()
	}, this.x8 = function() {
		0 === aP.d2 && cL.x9(), aP.dK.xA(), aP.data.canvas = null, az.b0.close(az.b0.qY, 3257), az.b0.qY = 0, aP.data.isReplay = 1, aP.cN()
	}, this.xB = function(bq) {
		var j = bq.indexOf("=");
		return 0 <= j ? bq.substring(j + 1) : bq
	}, this.xC = function(bq) {
		return "https://territorial.io/?replay=" + bq
	}
}

function xD() {
	this.size = 0, this.k = 0, this.pD = null, this.f = function(pD) {
		this.k = 0, this.pD = pD, this.size = pD.length
	}, this.cM = function(pI) {
		return this.f(new Uint8Array(this.pK(pI))), this.pD
	}, this.pE = function() {
		this.pD = null
	}, this.q9 = function(size, lW) {
		for (var pD = this.pD, k6 = this.k + size - 1, j = this.k; j <= k6; j++) pD[j >> 3] |= (lW >> k6 - j & 1) << 7 - (7 & j);
		this.k += size, this.k > 8 * this.size && console.error("Wrapper Overflow")
	}, this.qS = function(size, lW) {
		var bd = size >> 1,
			ao = 1 << bd;
		this.q9(size - bd, aN.aO(lW, ao)), this.q9(bd, lW % ao)
	}, this.xE = function(size) {
		for (var pD = this.pD, k6 = this.k + size, j = this.k; j < k6; j++) pD[j >> 3] &= 255 ^ 128 >>> (7 & j)
	}, this.pK = function(pI) {
		return pI + 7 >> 3
	}, this.xF = function(bk, ny, k6, xG) {
		for (var j = ny; j < k6; j++) this.q9(xG, bk[j])
	}
}

function xH() {
	var xI = 501,
		xJ = (this.w0 = new Uint32Array(xI), this.hC = new Uint32Array(xI), this.px = new Uint16Array(xI), this.vu = 0, 1),
		aw = 0;

	function xK(self) {
		self.max.fill(0)
	}

	function xQ(self, j) {
		self.max[0] = Math.max(self.w0[j], self.max[0]), self.max[1] = Math.max(self.hC[j], self.max[1]), self.max[2] = Math.max(self.px[j], self.max[2])
	}
	this.max = [0, 0, 0], this.wJ = 0, this.w8 = new Array(21), this.w7 = null, this.dg = function() {
		this.w7 = [L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(42), L(182), L(183), L(184), L(185), L(186), "", L(187), L(188), L(189), L(190), L(191), L(192)]
	}, this.f = function() {
		this.vu = 0, xJ = 1, this.wJ = 0, aw = 0, xK(this), this.w8.fill(0)
	}, this.xL = function(player, hE) {
		aS.aT.h1(player) && (this.w8[0] += hE + 1, this.w8[1]++, this.w8[12] += dN.gR[1])
	}, this.uZ = function(player, hM) {
		__fx.donationsTracker.logDonation(player, hM, dN.gR[0]);
		player === aP.cs && (eB.uZ(dN.gR[0], dN.gR[1], hM), this.w8[12] += dN.gR[1], this.w8[16] += dN.gR[0]), hM === aP.cs && (eB.ub(dN.gR[0], player), this.w8[10] += dN.gR[0])
	}, this.xM = function(player) {
		aS.aT.h1(player) && (this.w8[2]++, this.w8[12] += dN.gR[1])
	}, this.xN = function(player) {
		aS.aT.h1(player) && (this.w8[19]++, this.w8[12] += dN.gR[1])
	}, this.wq = function(player) {
		aS.aT.h1(player) && this.w8[20]++
	}, this.aa = function(player, xO, k) {
		aS.aT.h1(player) && (this.w8[k] += xO)
	}, this.iL = function() {
		var self;
		this.wJ || 0 < aw-- || ((self = this).w0[self.vu] = ad.el[aP.cs], self.hC[self.vu] = ad.er[aP.cs], self.px[self.vu] = dX.py(aP.cs), xQ(self, self.vu), self.vu++, self.vu === xI && function(self) {
			xK(self), xQ(self, 0), self.vu = 1 + aN.aO(xI, 2);
			for (var j = 1; j < self.vu; j++) self.w0[j] = self.w0[2 * j], self.hC[j] = self.hC[2 * j], self.px[j] = self.px[2 * j], xQ(self, j);
			xJ *= 2
		}(self), aw = xJ - 1, dz.vv(), 0 === ad.eQ[aP.cs] && (self.wJ = eK.lf()))
	}
}

function xS() {
	this.xT = "https://", this.xU = this.xT + "territorial.io/", this.xV = this.xU + "changelog", this.xW = this.xU + "terms", this.xX = this.xU + "cookie_policy", this.xY = this.xU + "privacy", this.xZ = this.xU + "tutorial", this.xa = this.xU +
		"players", this.xb = this.xU + "clans", this.xc = this.xU + "clan-results", this.xd = "https://patreon.com/c/territorial", this.xe = this.xT + "play.google.com/store/apps/details?id=territorial.io", this.xf = this.xT +
		"apps.apple.com/app/id1581110913", this.xg = this.xT + "www.youtube.com/watch?v=toZTQ8aRdFc", this.xh = this.xT + "discord.gg/pthqvpTXmh", this.xi = this.xT + "www.instagram.com/davidtschacher/", this.xj =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function xk() {
	function xp(player, xn) {
		xn = dl.t6(dm.b0.o9[xn]), xn = ag.rn(dl.ww(xn));
		return !!dm.g8.xw(player, xn)
	}

	function xm(player) {
		return dm.t7.t8(player) && !dm.tA.yA()
	}
	this.xl = function(player, ls) {
		return !!xm(player) && -1 !== (ls = function(player, ls) {
			for (var h = dm.b0.o6, o9 = dm.b0.o9, o8 = dm.b0.o8, p7 = dl.y8(), y9 = -1, j = 0; j < h; j++) {
				var p0 = dl.t5(ls, dl.t6(o9[j]));
				p0 < p7 && aS.aT.gs(player, o8[j] >> 3) && (p7 = p0, y9 = j)
			}
			return y9
		}(player, ls)) && !!xp(player, ls) && (dN.gY[3] = dm.b0.oD[ls], !0)
	}, this.xq = function(player, tr) {
		return !!xm(player) && !!dm.g8.xr(tr) && !!xp(player, dN.gY[2])
	}, this.xs = function(player, tr, xt) {
		return !! function(player, tr, xt) {
			if (xm(player) && dm.g8.xr(tr)) {
				tr = dN.gY[2];
				if (aS.aT.gs(player, dm.b0.o8[tr] >> 3)) {
					if (function(player, xn) {
							return dm.g8.y7(player, xn) && (dN.bk[0] = dm.tA.tB(dm.b0.oG[xn]), dN.gY[1] = 6, !0)
						}(player, tr)) return 1;
					var wo = dl.t6(dm.b0.o9[tr]),
						xy = dm.g8.xz(player, wo);
					if (-1 !== xy) {
						xy = dl.t5(xy, wo);
						if (!(xt && 120 < xy)) {
							xt = function(xn, y0, wo) {
								var oM = dm.b0.oG[xn],
									xn = dm.b0.oH[xn],
									y4 = dl.t5(wo, oM[xn + 1]);
								if (y0 <= y4) return dm.g8.y5(wo, oM[xn + 1], y4, y0);
								for (var p0 = y0 - y4, h = oM.length - 1, j = xn + 1; j < h; j++) {
									var y6 = dl.t5(oM[j], oM[j + 1]);
									if (p0 <= y6) return dm.g8.y5(oM[j], oM[j + 1], y6, p0);
									p0 -= y6
								}
								return oM[h]
							}(tr, xy, wo);
							if (dm.sh.y3(player, xt, 1)) return dN.gY[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, tr, xt) && (player = dN.gY[2], dm.b0.oE[player] = 64 + dm.b0.oE[player] % 64, dm.p8.qe(tr, dm.b0.o7), !0)
	}
}

function yB() {
	this.f = function() {
		this.bk = [], this.k = 0
	}, this.qP = function() {
		return new Uint8Array(this.bk)
	}, this.q9 = function(yC, value) {
		for (var bk = this.bk, k6 = this.k + yC - 1, yD = 1 + (k6 >> 3); bk.length < yD;) bk.push(0);
		for (var j = this.k; j <= k6; j++) bk[j >> 3] |= (value >> k6 - j & 1) << 7 - (7 & j);
		this.k += yC
	}, this.yE = function(bk, pM, pN) {
		var yF = aS.f8.yG(bk);
		this.q9(pM, yF);
		for (var j = 0; j < yF; j++) this.q9(pN, bk[j])
	}, this.yH = function(bk, pM, pQ) {
		var yF = aS.f8.yG(bk);
		this.q9(pM, yF);
		for (var j = 0; j < yF; j++) this.yI(bk[j], pQ)
	}, this.yI = function(bq, pM) {
		var h = bq.length;
		this.q9(pM, h);
		for (var j = 0; j < h; j++) this.q9(16, bq.charCodeAt(j))
	}, this.yJ = function(nb) {
		var yK = (nb = nb.toDataURL()).split(",");
		if (yK.length < 2) console.log("error 266");
		else {
			nb = aS.fO.pY(nb = yK[yK.length - 1], "/", "_"), nb = aS.fO.pY(nb, "\\+", "-");
			var nb = aS.fO.pY(nb, "=", ""),
				v3 = pS.gF.yL(nb),
				h = v3.length;
			this.q9(30, h);
			for (var j = 0; j < h; j++) this.q9(6, v3[j])
		}
	}
}

function q1() {
	this.qJ = function(bq) {
		for (var h = bq.length, ce = pJ, j = 0; j < h; j++) ce.q9(16, bq.charCodeAt(j))
	}
}

function yM() {
	var yN, yO = [],
		yP = -1,
		yQ = 0,
		yR = 0;

	function ye() {
		yQ = eK.iJ, (3 === this.yf ? yd : (yP = (yO.length + yP + 2 * this.yf - 1) % yO.length, yc))()
	}

	function yc() {
		0 !== yO.length && (yR = 0, yN && yN.pE(), (yN = new yg(ye)).n(yP, yO.length), yN.show(yO[yP]), bx.message.resize())
	}

	function yd() {
		yR = 1, yN && yN.pE(), (yN = new yh(yc)).n(yO.length), yN.show(), bx.message.resize()
	}
	this.jb = function(yS) {
		var g3;
		2 === yS.id && 3 === yS.yT ? bx.g8.yU(yS.cQ) : (g3 = bx.g8.yV(yS, bx.g8.yW(yS)), (5 !== yS.id && 6 !== yS.id || (c9.yX(29).yY().yZ(g3), 5 === yS.id)) && (g3 = eK.iJ < yQ + 2e4, yP !== yO.length - 1 && g3 || (yP = yO.length), yO.push(yS),
			l.bj.data[14].value || 7 === yS.id || yb.play(), yN) && (yR && (l.bj.data[13].value || g3) ? yN.n(yO.length) : yc()))
	}, this.show = function() {
		yd()
	}, this.fQ = function() {
		yP = yO.length - 1, yN && yN.pE(), yN = null
	}, this.resize = function() {
		yN && yN.resize()
	}, this.yi = function() {
		return yO
	}
}

function yj() {
	var ym, yn, yo, yp, yq, yr, ys, yt, yu, yv, yk = [
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
		yl = [
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

	function z1(ny, k6) {
		for (var j = ny; j < k6; j++) ym[j] = 4 * aN.aO(64 * dV.random(), dV.value(100)), yn[j] = 4 * aN.aO(64 * dV.random(), dV.value(100)), yo[j] = 4 * aN.aO(64 * dV.random(), dV.value(100))
	}

	function z0(ny, k6) {
		for (var colorsData = aP.data.colorsData, j = ny; j < k6; j++) {
			var h9 = colorsData[j];
			ym[j] = 4 * (h9 >> 12), yn[j] = 4 * (h9 >> 6 & 63), yo[j] = 4 * (63 & h9)
		}
	}

	function zL(nw, zN) {
		vL[nw] = 0, vL[nw + 1] = 0, vL[nw + 2] = zN, vL[nw + 3] = 0, zO(nw)
	}

	function zO(nw) {
		var fm;
		dj.zR || (fm = ag.fZ(nw), nw = ag.fa(nw), dj.zR = fm >= zS.s2[0] && fm <= zS.s2[2] && nw >= zS.s2[1] && nw <= zS.s2[3])
	}
	this.ap = new Int32Array(4), this.dg = function() {
		var ap = this.ap;
		ap[0] = -4 * a2.a3, ap[1] = 4, ap[2] = -ap[0], ap[3] = -ap[1]
	}, this.f = function() {
		if (ym = new Uint8Array(aP.aj), yn = new Uint8Array(aP.aj), yo = new Uint8Array(aP.aj), yp = new Uint8Array(aP.aj), yq = new Uint8Array(aP.aj), yr = new Uint8Array(aP.aj), ys = new Uint8Array(aP.aj), yt = new Uint8Array(aP.aj), yu =
			new Uint8Array(aP.aj), yv = new Uint8Array(aP.aj), this.mc = new Uint8Array(aP.aj), aP.d7)
			for (var sH = de.sH, j = aP.aj - 1; 0 <= j; j--) {
				var bt = sH[j],
					bl = aN.aO((yl[bt][3] + 1) * dV.random(), dV.value(100));
				ym[j] = yk[bt][0] + bl * yl[bt][0], yn[j] = yk[bt][1] + bl * yl[bt][1], yo[j] = yk[bt][2] + bl * yl[bt][2]
			} else 0 === aP.data.colorsType ? aP.data.selectableColor ? (z0(0, aP.ct), z1(aP.ct, aP.aj)) : z1(0, aP.aj) : z0(0, aP.aj);
		! function() {
			var j, ao;
			for (j = aP.aj - 1; 0 <= j; j--) ao = aN.aO(ym[j] + yn[j] + yo[j], 3), ym[j] += kF(ao - ym[j], 2), yn[j] += kF(ao - yn[j], 2), yo[j] += kF(ao - yo[j], 2), ym[j] -= ym[j] % 4, yn[j] -= yn[j] % 4, yo[j] -= yo[j] % 4
		}(),
		function() {
			for (var j = aP.aj - 1; 0 <= j; j--) ym[j] += aN.aO(j, 128), yn[j] += aN.aO(j % 128, 32), yo[j] += aN.aO(j % 32, 8), yp[j] = j % 8
		}(), this.z4(),
			function() {
				for (var j = aP.aj - 1; 0 <= j; j--) yq[j] = ym[j] < 32 ? ym[j] + 32 : ym[j] - 32, yr[j] = yn[j] < 32 ? yn[j] + 32 : yn[j] - 32, ys[j] = yo[j] < 32 ? yo[j] + 32 : yo[j] - 32
			}(),
			function() {
				for (var j = aP.aj - 1; 0 <= j; j--) yt[j] = 235 < ym[j] ? ym[j] - 20 : ym[j] + 20, yu[j] = 235 < yn[j] ? yn[j] - 20 : yn[j] + 20, yv[j] = 235 < yo[j] ? yo[j] - 20 : yo[j] + 20
			}()
	}, this.z7 = function(player) {
		var bk = dN.gT;
		return bk[0] = ym[player], bk[1] = yn[player], bk[2] = yo[player], bk
	}, this.z4 = function() {
		for (var j = aP.aj - 1; 0 <= j; j--) this.mc[j] = ym[j] + yn[j] + yo[j] < 280 ? 0 : 1
	}, this.fZ = function(nw) {
		return aN.aO(nw, 4) % a2.a3
	}, this.fa = function(nw) {
		return aN.aO(nw, 4 * a2.a3)
	}, this.z8 = function(fm, fn) {
		return Math.floor(4 * (fn * a2.a3 + fm))
	}, this.z9 = function(nw) {
		var ap = this.ap;
		return this.zA(nw + ap[0]) || this.zA(nw + ap[1]) || this.zA(nw + ap[2]) || this.zA(nw + ap[3])
	}, this.zB = function(nw) {
		var ap = this.ap;
		return this.rm(nw + ap[0]) || this.rm(nw + ap[1]) || this.rm(nw + ap[2]) || this.rm(nw + ap[3])
	}, this.zC = function(nw, player) {
		var ap = this.ap;
		return this.zD(nw + ap[0], player) || this.zD(nw + ap[1], player) || this.zD(nw + ap[2], player) || this.zD(nw + ap[3], player)
	}, this.aq = function(nw) {
		return 208 <= vL[nw + 3]
	}, this.o2 = function(player, nw) {
		return this.aq(nw) && this.wx(player, nw)
	}, this.wx = function(player, nw) {
		return player === this.ar(nw)
	}, this.zE = function(nw) {
		return 208 <= vL[nw + 3] && vL[nw + 3] < 224
	}, this.zF = function(nw) {
		return 224 <= vL[nw + 3] && vL[nw + 3] < 248
	}, this.zG = function(nw) {
		for (var ap = this.ap, j = 3; 0 <= j; j--)
			if (this.zH(nw + ap[j])) return !0;
		return !1
	}, this.ah = function(nw) {
		return this.aq(nw) || this.at(nw)
	}, this.zH = function(nw) {
		return 0 === vL[nw + 3] && 2 === vL[nw + 2]
	}, this.at = function(nw) {
		return 0 === vL[nw + 3] && 1 === vL[nw + 2]
	}, this.zI = function(nw) {
		return 0 === vL[nw + 3] && 3 === vL[nw + 2]
	}, this.rm = function(nw) {
		return 0 === vL[nw + 3] && 5 === vL[nw + 2]
	}, this.zA = function(nw) {
		return 0 === vL[nw + 3] && 3 <= vL[nw + 2]
	}, this.rn = function(nw) {
		return (vL[nw] >> 1 << 8) + vL[nw + 1]
	}, this.zJ = function(nw) {
		return 1 & vL[nw]
	}, this.zD = function(nw, player) {
		return this.at(nw) || this.aq(nw) && player !== this.ar(nw)
	}, this.ar = function(nw) {
		return vL[nw] % 4 * 128 + vL[nw + 1] % 4 * 32 + vL[nw + 2] % 4 * 8 + vL[nw + 3] % 8
	}, this.zK = function(nw) {
		zL(nw, 1)
	}, this.zM = function(nw) {
		zL(nw, 2)
	}, this.zP = function(nw, player) {
		vL[nw] = ym[player], vL[nw + 1] = yn[player], vL[nw + 2] = yo[player], vL[nw + 3] = 208 + yp[player], zO(nw)
	}, this.ai = function(nw, player) {
		vL[nw] = yq[player], vL[nw + 1] = yr[player], vL[nw + 2] = ys[player], vL[nw + 3] = 224 + yp[player], zO(nw)
	}, this.zQ = function(nw, player) {
		vL[nw] = yt[player], vL[nw + 1] = yu[player], vL[nw + 2] = yv[player], vL[nw + 3] = 248 + yp[player], zO(nw)
	}
}

function dS() {
	this.qe = function(player, ls) {
		ds.zT(player, dl.lv(ls), dl.lw(ls)) && (eK.eN = !0), aP.d0 && this.iL()
	}, this.iL = function() {
		aP.d5 = !1;
		for (var j = 0; j < aP.ct; j++) 0 !== ad.eQ[j] && 0 === ad.el[j] && ds.zU(j);
		0 !== ad.eQ[aP.cs] ? (aZ.w8[7] = ad.el[aP.cs], aZ.w8[8] = ad.er[aP.cs], e4.zV(), e8.zW(), aP.d1 || eO.tp(ad.mj[aP.cs] - 5, ad.mk[aP.cs] - 5, ad.mm[aP.cs] + 5, ad.mn[aP.cs] + 5), eM.f()) : eE.show(!1, !1, !1, !0), eB.tx(18), eG.ia(), eG
			.eR(!0), dy.b0.zX(), eD.fQ(), aP.dC = null, dj.zY = !0, dj.zZ(), aP.d0 && bD.bE.setState(1)
	}
}

function za() {
	this.fT = new zb, this.bj = new zc, this.m = new wN, this.b0 = new zd, this.jg = new ze, this.f = function() {
		this.bj.f(), (new zf).f(), this.jg.f(), this.b0.zg()
	}
}

function zh() {
	this.wm = new Int16Array(4), this.wv = new Int16Array(4), this.zi = null, this.f = function() {
		var j;
		for (this.wm[0] = -a2.a3, this.wm[1] = 1, this.wm[2] = a2.a3, this.wm[3] = -1, this.zi = new Int16Array([-a2.a3, 1 - a2.a3, 1, a2.a3 + 1, a2.a3, a2.a3 - 1, -1, -a2.a3 - 1]), j = 0; j < 4; j++) this.wv[j] = 4 * this.wm[j]
	}, this.y8 = function() {
		return aN.fL(Math.floor(.15 * (1 + .25 * bD.bE.bF()) * bI.ht / fX), 4, 128)
	}, this.zj = function(nw, id) {
		for (var wu = this.wv, j = 0; j < 4; j++) {
			var rq = nw + wu[j];
			if (ag.zH(rq) && ag.rn(rq) === id) return !0
		}
		return !1
	}, this.zk = function(player, nw) {
		return !ag.at(nw) && player === ag.ar(nw)
	}, this.zl = function(zm, zn, ls) {
		return (zm -= this.lv(ls)) * zm + (zn -= this.lw(ls)) * zn
	}, this.zo = function(kA, kB, jK) {
		kA = this.zp(kA) - this.zq(jK), kB = this.zr(kB) - this.zs(jK);
		return Math.sqrt(kA * kA + kB * kB)
	}, this.t5 = function(zt, zu) {
		var mv = this.lv(zt) - this.lv(zu),
			zt = this.lw(zt) - this.lw(zu);
		return ~~Math.sqrt(mv * mv + zt * zt + .5)
	}, this.sq = function(zt, zu) {
		var mv = this.lv(zt) - this.lv(zu),
			zt = this.lw(zt) - this.lw(zu);
		return mv * mv + zt * zt
	}, this.zv = function(zw, zx, zy, zz) {
		return (zw -= zy) * zw + (zx -= zz) * zx
	}, this.hP = function(am, hE) {
		return aN.aO(hE * ad.er[am], 1e3)
	}, this.zp = function(kA) {
		return 16 * (kA + n5) / fX
	}, this.zr = function(kB) {
		return 16 * (kB + n6) / fX
	}, this.a00 = function(ao) {
		return 16 * ao / fX
	}, this.a01 = function(kA) {
		return Math.floor((kA + n5) / fX)
	}, this.a02 = function(kB) {
		return Math.floor((kB + n6) / fX)
	}, this.a03 = function(zm, zn) {
		return 1 <= zm && 1 <= zn && zm < a2.a3 - 1 && zn < a2.a4 - 1
	}, this.lv = function(ls) {
		return ls % a2.a3
	}, this.lw = function(ls) {
		return aN.aO(ls, a2.a3)
	}, this.a04 = function(zm, zn) {
		return zn * a2.a3 + zm
	}, this.a05 = function(zm, zn) {
		return 4 * this.a04(zm, zn)
	}, this.a06 = function(ls) {
		return this.a07(this.lv(ls), this.lw(ls))
	}, this.a07 = function(zm, zn) {
		return 0 < zm && zm < a2.a3 - 1 && 0 < zn && zn < a2.a4 - 1
	}, this.ww = function(ls) {
		return ls << 2
	}, this.a08 = function(nw) {
		return nw >> 2
	}, this.a09 = function(ls) {
		return a2.a3 * this.lw(ls) * 256 + (this.lv(ls) << 4)
	}, this.oP = function(ls) {
		return this.a09(ls) + 8 + (a2.a3 << 7)
	}, this.t6 = function(jK) {
		return a2.a3 * (this.zs(jK) >> 4) + (this.zq(jK) >> 4)
	}, this.oT = function(jK) {
		jK = this.t6(jK);
		return (this.lv(jK) >> 5) + dm.oS.a0A * (this.lw(jK) >> 5)
	}, this.zq = function(jK) {
		return jK % (a2.a3 << 4)
	}, this.zs = function(jK) {
		return aN.aO(jK, a2.a3 << 4)
	}, this.a0B = function(ls, wj) {
		return ls + this.wm[wj]
	}, this.a0C = function(nw, wj) {
		return nw + this.wv[wj]
	}, this.a0D = function(zt, zu) {
		var mv = this.lv(zu) - this.lv(zt),
			zu = this.lw(zu) - this.lw(zt);
		return Math.abs(mv) >= Math.abs(zu) ? 1 + 2 * (mv < 0) : 2 * (0 < zu)
	}, this.sr = function(player) {
		return this.a04(ad.mj[player] + ad.mm[player] >> 1, ad.mk[player] + ad.mn[player] >> 1)
	}, this.sc = function(player) {
		return this.a04(dV.a0E(ad.mj[player], ad.mm[player]), dV.a0E(ad.mk[player], ad.mn[player]))
	}
}

function a0F() {
	var r9, a0G, fB;
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a0G.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(L(193), [new bV("⬅️ " + L(43), function() {
		c9.a0H(13)
	})]), a0G = new f2(r9.f3, ((fB = []).push(function() {
		var fF = new fG,
			a0N = (fF.fH(L(194)), fF.jI(L(195)), new bV(L(196), function() {
				l.m.n(130, 0), c9.b0.a0O()
			}, 0, 0, 1)),
			a0P = new fK(l.bj.data[126], 0, function() {
				a0N.button.click()
			});
		return fF.fJ(a0P), a0P.b8.placeholder = "a,b,c", a0P.b8.style.marginTop = "0.5em", fF.fJ(new i9([a0N.button])), fF
	}()), fB.push(function() {
		var fF = new fG,
			a0N = new bV(L(196), function() {
				l.m.n(130, 1), c9.b0.a0O()
			}, 0, 0, 1),
			a0Q = new fK(l.bj.data[129], 1, function() {
				a0Q.b8.focus()
			}),
			a0R = new fK(l.bj.data[128], 1, function() {
				a0N.button.click()
			});
		return fF.fH(L(197)), fF.fJ(a0R), a0R.b8.style.marginBottom = "0.5em", fF.fH(L(198)), fF.fJ(a0Q), fF.fJ(new i9([a0N.button])), fF
	}()), fB.push(function() {
		var fF = new fG;
		return fF.fH(L(199)), l.bj.data[125].i = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], fF.fI(new a(l.bj.data[125])), fF
	}()), fB.push(function() {
		var fF = new fG;
		return fF.fH(L(200)), fF.fJ(new kW(l.bj.data[127], L(201))), fF
	}()), fB))
}

function a0S() {
	this.a0T = 0, this.f = function() {
		this.a0T = 0
	}, this.iL = function() {
		if (!this.a0T && eK.lf() % 30 == 7 && aS.aT.hb(80) && (dn.performance.a0T = 1)) {
			if (aP.d7) {
				var gz = dx.eu();
				if (de.lq[gz]) {
					dx.a0Y(gz);
					var bk = dN.ga,
						h = dN.gP[0];
					if (0 !== h)
						for (var a0Z = Math.min(100 + 10 * (h - 1), 400), j = 0; j < h; j++) dr.a0a(bk[j], a0Z)
				}
			}
			dr.a0a(em[0], 100)
		}
	}
}

function a0b() {
	var a0c = 0,
		a0d = 0;
	this.a0e = function(fm, fn) {
		a0c = fm, a0d = fn
	}, this.a0f = function(code) {
		var zm, zn, ls;
		aP.d1 || e9.ef || (aS.aT.gn(0) || aS.aT.gn(1)) && aS.aT.gp(aP.cs) && (e4.tj(a0c, a0d) ? e4.a0g = !1 : eC.tj(a0c, a0d) || (zm = dl.a01(a0c), zn = dl.a02(a0d), ls = dl.a04(zm, zn), dl.a03(zm, zn) && (0 === code ? function(ls) {
			var a0k, nw, rq;
			aP.d5 ? -1 !== (a0k = a0l.a0m(ls)) && db.a0n.a0o(ls) : (nw = dl.ww(ls), ag.rm(nw) ? (a0k = a0p.iv.a0q(nw)) && (rq = dl.ww(a0k), rq = ag.at(rq) ? aP.aj : ag.ar(rq), db.a0n.a0r(e4.a0s(), a0k, rq)) : (a0k = a0l.a0t(ls)) <
				0 || (nw = dl.ww(a0k), ag.at(nw) ? aC.a0u(aP.cs) ? db.a0n.a0v(e4.a0s(), aP.aj) : a8.a9(aP.cs) && eJ.a0w(aP.aj, e4.a0s()) : (rq = ag.ar(nw), aC.hW(rq, aP.cs) && (aC.a0x(aP.cs, rq) ? db.a0n.a0v(e4.a0s(), rq) : a8
					.a9(aP.cs) && eJ.a0w(rq, e4.a0s())))))
		}(ls) : 1 === code ? function(ls) {
			dm.a0y.a0z(aP.cs, ls) && db.a0n.a10(e4.a0s(), dN.gY[7])
		}(ls) : 2 === code && function(ls) {
			dm.a11.xl(aP.cs, ls) && db.a0n.a12(e4.a0s())
		}(ls))))
	}, this.a13 = function() {
		if (!aP.d1 && !e9.ef && aS.aT.gn(1)) {
			var am = aP.cs;
			if (aS.aT.gp(am)) {
				var h = a8.a9(am);
				if (h < 1) ! function() {
					var am = aP.cs;
					if (aC.a0u(am)) db.a0n.a0v(e4.a0s(), aP.aj);
					else
						for (var ap = ag.ap, vD = ad.vD, h = vD[am].length, sB = Math.floor(Math.random() * h), j = 0; j < h; j++)
							for (var wj = 3; 0 <= wj; wj--) {
								var j8 = vD[am][(j + sB) % h] + ap[wj];
								if (ag.aq(j8)) {
									j8 = ag.ar(j8);
									if (j8 !== am && (!aP.d7 || aC.hW(am, j8))) return db.a0n.a0v(e4.a0s(), j8)
								}
							}
				}();
				else {
					for (var a15 = 0, hH = a8.aG(am, 0), j = 1; j < h; j++) {
						var a16 = a8.aG(am, j);
						a16 < hH && (hH = a16, a15 = j)
					}
					db.a0n.a0v(e4.a0s(), a8.aF(am, a15))
				}
			}
		}
	}, this.a17 = function() {
		if (!aP.d1 && !e9.ef && aS.aT.gp(aP.cs) && aS.aT.gn(1)) return e6.td ? e6.a18(aP.cs) ? void db.a0n.a19(1) : void 0 : void(e6.a1A(aP.cs) && db.a0n.a17())
	}
}

function a1C() {
	this.fc = function() {
		if (0 !== dy.b0.lO && (fW.globalAlpha = Math.min(dy.b0.lO / 580, 1), fW.drawImage(dy.b0.a1F, 1 + e3.fZ(), 1 + e3.fa()), fW.globalAlpha = 1, aP.d5)) {
			for (var jx = n5 / fX, jy = n6 / fX, jz = (bI.ce + n5) / fX, k0 = (bI.cf + n6) / fX, an = dy.b0.a1G * fX, a1H = dy.b0.a1H, j = aP.ct - 1; 0 <= j; j--) ! function(j, an, jx, jy, jz, k0, a1H) {
				var highlight;
				0 === ad.eQ[j] || 0 === ad.el[j] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[j]) && (an *= 2), jz = bI.ce * ((ad.mj[j] + ad.mm[j] + 1) / 2 - jx) / (jz - jx) - .5 * an, jx = bI.cf * ((ad.mk[
					j] + ad.mn[j] + 1) / 2 - jy) / (k0 - jy) - .5 * an, bI.ce < jz) || jx > bI.cf || jz < -an || jx < -an || (highlight ? fW.setTransform(2 * fX, 0, 0, 2 * fX, jz, jx) : fW.setTransform(fX, 0, 0, fX, jz, jx), fW.drawImage(
					a1H[aP.d7 ? de.gu[j] : 1], 0, 0))
			}(j, an, jx, jy, jz, k0, a1H);
			fW.setTransform(fX, 0, 0, fX, 0, 0)
		}
	}
}

function a1J() {
	this.a1K = function() {
		for (var h = du.ek, j2 = du.h0, qW = [], j = 0; j < h; j++) {
			var am = j2[j];
			aS.aT.h5(am) && qW.push(am)
		}
		return qW
	}, this.a1L = function() {
		if (0 === de.lq[aP.dJ]) return this.a1M();
		dx.a0Y(aP.dJ);
		for (var qW = [], h = dN.gP[0], ga = dN.ga, j = 0; j < h; j++) {
			var am = ga[j];
			aS.aT.h5(am) && qW.push(am)
		}
		return qW
	}, this.a1M = function() {
		var am = em[0];
		return aS.aT.h5(am) ? [am] : []
	}, this.a1N = function(qW) {
		for (var h = qW.length, aX = 0, el = ad.el, j = 0; j < h; j++) aX += el[qW[j]];
		return aX
	}
}

function a1O() {
	this.L84 = ["Propaganda", "Close {button}", "Report Abuse", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "White Arena",
		"Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "World 2", "British Isles", "Territorial Income", "Back", "Options", "Default", "Uniform", "Customized", "📰 Propaganda", "Links", "Propaganda Text", "Colors", "Reset", "Language", "Preview", "Show", "Launch Campaign",
		"Gold Investment", "Launch", "Cancel", "Confirm", "Adjust", "Random", "Selectable Color", "Player Count", "Lobby", "Next Contest: ", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain",
		"Clan Leader Election", "Bio Reports", "Battle Royale Players", "Richest Players", "Patreon Members", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Percentage", "Voter",
		"Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.",
		"Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}",
		"{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.",
		"Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.",
		"{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "You earned {10} gold!", "{0} earned {11} gold!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!",
		"Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Territory", "Income", "Growth", "Numbers", "Statistics", "Incoming Boat!", "Incoming Ship!", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered",
		"Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Interest Income", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses",
		"Additional Income", "Mountain Attacks", "Ships landed", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression",
		"Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Login", "➡️ Login", "Account Name", "Password", "Hide", "Security Tip",
		"The only official webpage is https://territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "You are leaving Territorial.io.", "Ship launched!",
		"Ship intercepted!", "Quit Game", "More", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY",
		"MAP:", "Starting Resources", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "🏆 Leaderboards", "🔑 My Account", "📜 Logs", "📈 Clan Charts", "▶️ Replay", "🧈 Gold Transfer", "⚙️ Settings", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Mixed", "Team dependent", "Clustered", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Loading", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "{0} defeated {1}!", "Replay Error", "Warning", "Loading...", "LEADERBOARD", "Clan Chart", "⏳ Connecting...",
		"Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Type your message here...", "Send",
		"Source Account", "Send gold only to trusted accounts!", "Team {0}", "Team {0} won the game!", "Activated", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Source Account: {0}",
		"Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Spawning", "Selectable Spawn", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "You are leaving Territorial.io!", "Very Easy", "Easy",
		"Normal", "Hard", "Very Hard", "Impossible", "1v1", "Zombie", "Chat", "Players", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank",
		"Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Copy", "Request New Password",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander",
		"Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account",
		"Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "second played", "seconds played", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File",
		"Select File", "Map Name", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Humans", "Bots",
		"Spectators", "Threshold", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.",
		"You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Check game results here: territorial.io/log/team-games",
		"🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys"
	]
}

function a1P() {
	var a1Q, a1R = 8,
		a1S = null;

	function a1Y(nW, ls, k) {
		ls *= 4;
		nW[ls] = 255, nW[1 + ls] = 255, nW[2 + ls] = k, nW[3 + ls] = 255
	}

	function a1a(hl, a1c) {
		var fm, fn, mv, ls, a1d, a1e, bC = a1R,
			a1X = aS.bG.getImageData(hl, bC, bC),
			nW = a1X.data,
			bl = (bC >> 1) - .5,
			a1g = aS.f8.a1h(a1c, .5);
		for (aS.f8.a1i(a1c, a1g, 300) || aS.f8.a1j(a1c, 100), fn = 0; fn < bC; fn++)
			for (fm = 0; fm < bC; fm++) a1e = (bC - 1.5) * (bC - 1.5) / 4, nW[ls = 4 * (fn * bC + fm)] = (a1d = (mv = (mv = fm - bl) * mv + (mv = fn - bl) * mv) <= (bC - 4.5) * (bC - 4.5) / 4 ? a1g : a1c)[0], nW[1 + ls] = a1d[1], nW[2 + ls] = a1d[2],
				nW[3 + ls] = a1e < mv ? 0 : 255;
		hl.putImageData(a1X, 0, 0)
	}
	this.f = function() {
		var k, bC, nb, hl, a1X, nW;
		(a1Q = a1Q || new Array(aP.aj)).fill(null), k = 255, bC = a1R + 4, nb = aS.bG.hk(bC, bC), hl = aS.bG.getContext(nb, !0), a1X = aS.bG.getImageData(hl, bC, bC), a1Y(nW = a1X.data, bC + 1, k), a1Y(nW, bC + 2, k), a1Y(nW, 2 * bC + 1, k), a1Y(
				nW, 2 * bC - 3, k), a1Y(nW, 2 * bC - 2, k), a1Y(nW, 3 * bC - 2, k), a1Y(nW, bC * (bC - 3) + 1, k), a1Y(nW, bC * (bC - 2) + 1, k), a1Y(nW, bC * (bC - 2) + 2, k), a1Y(nW, bC * (bC - 2) - 2, k), a1Y(nW, bC * (bC - 1) - 3, k), a1Y(nW,
				bC * (bC - 1) - 2, k), hl.putImageData(a1X, 0, 0), a1S = nb,
			function() {
				if (aP.d7)
					for (var nb = new Array(de.lq.length), h = aP.aj, a1V = a1Q, sH = de.sH, j = 0; j < h; j++) {
						var sC = sH[j];
						nb[sC] || (nb[sC] = function(sC) {
							var nb = aS.bG.hk(a1R, a1R),
								hl = aS.bG.getContext(nb, !0),
								bk = dN.gT;
							return bk.set(de.a1b[sC]), a1a(hl, bk), nb
						}(sC)), a1V[j] = nb[sC]
					}
			}()
	}, this.fc = function() {
		var j, player, a1k, a1l, hH, jK, a1o, a1q, a1r, o9 = dm.b0.o9,
			o8 = dm.b0.o8,
			oB = dm.b0.oB,
			oF = dm.b0.oF,
			a1s = a1Q,
			wk = aP.cs,
			h = dm.b0.o6,
			sE = bI.ce,
			sF = bI.cf,
			oc = a2.a3 << 4,
			rq = fX,
			nw = rq / a1R,
			jx = n5 / rq,
			jy = n6 / rq,
			mv = (sE + n5) / rq - jx,
			mw = (sF + n6) / rq - jy,
			hl = fW;
		for (hl.imageSmoothingEnabled = rq < 9, aS.bG.textAlign(hl, 1), aS.bG.textBaseline(hl, 1), j = 0; j < h; j++) player = o8[j] >> 3, hH = oB[j], a1k = .9 + .1 * Math.log10(hH), a1l = (jK = o9[j]) % oc / 16 - a1k, jK = sF * (Math.floor(jK /
			oc) / 16 - a1k - jy) / mw, a1o = -2 * (a1r = rq * a1k) * (1 + (a1q = +(player === wk)) / 8), a1q = a1q * a1r / 4, (a1r = sE * (a1l - jx) / mv) < a1o || jK < a1o || sE + a1q < a1r || sF + a1q < jK || (a1l = 2 * a1k * nw, a1o =
			a1k * rq, null === (a1q = a1s[player]) && (a1s[player] = a1q = function(player) {
				var nb = aS.bG.hk(a1R, a1R);
				return a1a(aS.bG.getContext(nb, !0), ag.z7(player)), nb
			}(player)), player === wk && (hl.setTransform(a1l, 0, 0, a1l, a1r - 2 * a1l, jK - 2 * a1l), hl.drawImage(a1S, 0, 0)), hl.setTransform(a1l, 0, 0, a1l, a1r, jK), hl.drawImage(a1q, 0, 0), (a1k = Math.floor(function(hH) {
				if (hH < 1e3) return .42;
				if (hH < 1e4) return .34;
				if (hH < 1e6) return .26;
				if (hH < 1e8) return .19;
				return .15
			}(hH) * a1o)) < 6) || (hl.setTransform(1, 0, 0, 1, 0, 0), hl.fillStyle = oF[j] ? fg.wC : fg.fk, hl.font = aS.bG.bQ(1, a1k), hl.fillText(aS.fO.gG(hH), a1r + a1o, jK + a1o + .1 * a1k));
		hl.imageSmoothingEnabled = !1, hl.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a1v() {
	function a1x(key) {
		var a20;
		return "undefined" == typeof URLSearchParams || (a20 = window.location.search, "string" != typeof(a20 = new URLSearchParams(a20).get(key))) || a20.length < 1 ? null : a20
	}
	this.bv = function() {
		if (0 !== bD.id) return !1;
		if (! function() {
				var value = a1x("account");
				if (!value && !(value = a1x("a"))) return void a1y.clear();
				return a1y.clear(), c9.ed(8, c9.cA, new rX(1e3, {
					qI: 0,
					cQ: value,
					rN: 0
				})), 1
			}()) {
			var value = a1x("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			c9.ed(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1z = new URL(window.location.href);
		a1z.search = "";
		try {
			return history.replaceState(null, "", a1z.toString()), !0
		} catch (b8) {
			console.log("error 352: " + b8)
		}
		return !1
	}, this.a22 = function(key, value) {
		if (0 === bD.id) try {
			var a1z = new URL(window.location.href),
				am = a1z.searchParams;
			am.set(key, value), a1z.search = am.toString(), history.replaceState(null, "", a1z.toString())
		} catch (b8) {
			console.log("error 358: " + b8)
		}
	}
}

function a23() {
	this.a0n = new a24, this.aT = new a25, this.a26 = new a27, this.dc = new a28, this.wy = new a29
}

function a2A(a2B, a2C, a2D, a2E, a2F) {
	var self;
	this.a2G = document.createElement("span"), this.resize = function() {
			this.a2G.style.fontSize = ((a2E - a2D) * a2C.offsetHeight).toFixed(1) + "px"
		}, (self = this).a2G.textContent = a2B, self.a2G.style.color = fg.fk, self.a2G.style.font = "inherit", self.a2G.style.margin = "0.1em 0.6em", self.a2G.style.pointerEvents = "none", a2F && (self.a2G.style.fontWeight = "bold"), self.a2G.style
		.whiteSpace = "nowrap", self.a2G.style.display = "block", a2C.appendChild(self.a2G)
}

function a2H() {
	function a2U(fm, h, fn, a2J, a2O, ro, player) {
		if (!(fn < 1 || a2O < fn))
			for (var j = 0; j <= h; j++) {
				var nw = dl.a05(fm, fn);
				if (dm.g8.a2d(nw) && !aS.f8.has(a2J, ag.rn(nw)) && ag.zC(nw, player)) return nw >> 2;
				fm += ro
			}
		return -1
	}

	function a2Y(fn, h, fm, a2J, a2N, ro, player) {
		if (!(fm < 1 || a2N < fm)) {
			h = Math.max(h, 0);
			for (var j = 0; j <= h; j++) {
				var nw = dl.a05(fm, fn);
				if (dm.g8.a2d(nw) && !aS.f8.has(a2J, ag.rn(nw)) && ag.zC(nw, player)) return nw >> 2;
				fn += ro
			}
		}
		return -1
	}

	function a2c(zt, zu, y1) {
		return -1 !== zu && (-1 === zt || dl.sq(zu, y1) < dl.sq(zt, y1)) ? zu : zt
	}
	this.a0z = function(player, y1) {
		if (dm.t7.t8(player))
			for (var a2I = dl.y8(), a2J = [];;) {
				var a2K = function(y1, a2I, a2J, player) {
					for (var zm = dl.lv(y1), zn = dl.lw(y1), a2N = a2.a3 - 2, a2O = a2.a4 - 2, a2P = -1, ao = 0; ao < a2I; ao++) {
						var a2Q = Math.max(zm - ao, 1),
							a2R = Math.max(zn - ao, 1),
							a2S = Math.min(zm + ao, a2N),
							a2T = Math.min(zn + ao, a2O),
							zt = a2U(zm, a2S - zm, zn - ao, a2J, a2O, 1, player),
							zu = a2U(zm - 1, zm - a2Q - 1, zn - ao, a2J, a2O, -1, player),
							a2S = a2U(zm, a2S - zm, zn + ao, a2J, a2O, 1, player),
							a2Q = a2U(zm - 1, zm - a2Q - 1, zn + ao, a2J, a2O, -1, player),
							a2X = a2Y(zn, a2T - zn - 1, zm - ao, a2J, a2N, 1, player),
							a2Z = a2Y(zn - 1, zn - a2R - 2, zm - ao, a2J, a2N, -1, player),
							a2T = a2Y(zn, a2T - zn - 1, zm + ao, a2J, a2N, 1, player),
							a2R = a2Y(zn - 1, zn - a2R - 2, zm + ao, a2J, a2N, -1, player);
						if (a2P = a2c(a2P, zt, y1), a2P = a2c(a2P, zu, y1), a2P = a2c(a2P, a2S, y1), a2P = a2c(a2P, a2Q, y1), a2P = a2c(a2P, a2X, y1), a2P = a2c(a2P, a2Z, y1), a2P = a2c(a2P, a2T, y1), 0 <= (a2P = a2c(a2P, a2R, y1)) && ao *
							ao >= dl.sq(a2P, y1)) return a2P
					}
					return -1
				}(y1, a2I, a2J, player);
				if (-1 === a2K) break;
				var id = ag.rn(dl.ww(a2K));
				if (dm.g8.xw(player, id)) return !! function(player, a2K, y1) {
					for (var wj = dl.a0D(a2K, y1), j = 0; j < 4; j++) {
						var ls = dl.a0B(a2K, wj);
						if (ag.zD(dl.ww(ls), player)) return dN.gY[6] = wj, 1;
						wj = (wj + 1) % 4
					}
					return
				}(player, a2K, y1) && (dN.gY[7] = a2K, !0);
				a2J.push(id)
			}
		return !1
	}
}

function a2e() {
	function a2u() {
		return {
			a3: a2.a3,
			a4: a2.a4,
			fY: a2.fY,
			a2g: a2.a2g,
			a2h: a2.a2h,
			vN: a2.vN,
			cI: a2.cI,
			mapSeed: a2.mapSeed,
			a2i: a2.a2i
		}
	}

	function a2m(j) {
		return 1 !== j && a2.cH(j) && j !== a2.a2x()
	}
	this.cd = 24, this.cm = 12, this.a2f = 4096, this.a3 = 0, this.a4 = 0, this.fY = null, this.a2g = null, this.a2h = null, this.vN = null, this.cI = 0, this.mapSeed = 0, this.a2i = !1, this.a2j = new a2k, this.uc = new cR, this.ui = new vI, this
		.f = function() {
			this.uc.f()
		}, this.cM = function(map, a2l) {
			((map %= this.cd) !== this.cI || a2m(this.cI) && a2l !== this.mapSeed) && (this.a2i = !1, this.a2j.a2n(), dV.dW(map), this.cI = map, this.mapSeed = a2l, a2m(map) && (a2.uc.cS[map].ci = a2l), this.cH(this.cI) ? (map = a2.uc.cS[this.cI],
				this.a3 = map.ce, this.a4 = map.cf, dV.dW(map.ci), a2p.cM([this.a3, this.a4, map.cg, map.ch]), a2q(), dh.a2r(), a2p.a2s()) : a2o())
		}, this.a2t = function(map, a2l) {
			var gf = a2u(),
				map = (this.cM(map, a2l), this.a2j.a2n(), a2u());
			return a2l = gf, a2.a3 = a2l.a3, a2.a4 = a2l.a4, a2.fY = a2l.fY, a2.a2g = a2l.a2g, a2.a2h = a2l.a2h, a2.vN = a2l.vN, a2.cI = a2l.cI, a2.mapSeed = a2l.mapSeed, a2.a2i = a2l.a2i, map
		}, this.a2w = function(canvas) {
			canvas && this.fY !== canvas && (this.a3 = canvas.width, this.a4 = canvas.height, this.fY = canvas, this.a2g = this.fY.getContext("2d", {
				alpha: !1
			}), this.a1X = this.a2g.getImageData(0, 0, this.a3, this.a4), this.vN = this.a1X.data, this.cI = this.a2x(), this.mapSeed = 0, a2.uc.cS[this.cI].name = aP.data.mapName)
		}, this.ra = function(j) {
			return 3 === j || 7 === j || 9 === j || 21 === j || j === this.a2x()
		}, this.a2y = function(j) {
			return 2 === j || 7 === j || 9 === j || 20 === j
		}, this.a2z = function(j) {
			return 1 === j
		}, this.a2x = function() {
			return this.cd
		}, this.cH = function(j) {
			return void 0 === this.uc.cS[j].cl
		}, this.a30 = function(g3) {
			return 0 === g3.mapType ? g3.mapProceduralIndex < 10 ? g3.mapProceduralIndex : 10 + g3.mapProceduralIndex : 1 === g3.mapType ? 10 <= g3.mapRealisticIndex ? 22 + g3.mapRealisticIndex - 10 : g3.mapRealisticIndex + 10 : void 0
		}, this.cJ = function(g3, a31) {
			0 === g3.mapType ? g3.mapProceduralIndex = a31 < 10 ? a31 : a31 - 10 : 1 === g3.mapType && (g3.mapRealisticIndex = a31 - (22 <= a31 ? 12 : 10))
		}
}

function a32() {
	var ew, ex, ey, fB;

	function f1() {
		f5(), 2 === aP.data.playerNamesType && 1 === aS.f8.a34(aP.data.playerNamesData).length && (aP.data.playerNamesType = 0), 2 !== aP.data.playerNamesType && (aP.data.playerNamesData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		2 === aP.data.playerNamesType && aS.f8.a35(ey.fA(), aP.data.playerNamesData, 20)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(202), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), fF.fI(new a({
			i: [L(203), L(204), L(47)],
			value: aP.data.playerNamesType
		}, function(k) {
			f5(), aP.data.playerNamesType = k, c9.ed(23)
		})), fF.fJ(new kV), fF.fJ(new kW({
			value: aP.data.selectableName
		}, L(205), function(value) {
			aP.data.selectableName = value
		})), fB.push(fF)
	}(fB = []), function(fB) {
		var fF;
		2 === aP.data.playerNamesType && ((fF = new fG).fH("Data"), ey = new fM(0, 1, 0, 1), aP.data.playerNamesData && aP.data.playerNamesData.length === aP.aj || (aP.data.playerNamesData = new Array(aP.aj), aP.data.playerNamesData.fill(
			"")), ey.fN(aS.fO.fP(aP.data.playerNamesData, 1, '"')), fF.fJ(ey), fB.push(fF))
	}(fB), fB))
}

function a36() {
	function a2U(fm, h, fn, a38, a2O, ro) {
		if (!(fn < 1 || a2O < fn))
			for (var j = 0; j <= h; j++) {
				var nw = dl.a05(fm, fn);
				if (a38(nw)) return nw >> 2;
				fm += ro
			}
		return -1
	}

	function a2Y(fn, h, fm, a38, a2N, ro) {
		if (!(fm < 1 || a2N < fm)) {
			h = Math.max(h, 0);
			for (var j = 0; j <= h; j++) {
				var nw = dl.a05(fm, fn);
				if (a38(nw)) return nw >> 2;
				fn += ro
			}
		}
		return -1
	}

	function a2c(zt, zu, y1) {
		return -1 !== zu && (-1 === zt || dl.sq(zu, y1) < dl.sq(zt, y1)) ? zu : zt
	}
	this.a0m = function(y1) {
		return this.a37(y1, function(nw) {
			return ag.ah(nw)
		})
	}, this.a0t = function(y1) {
		return this.a37(y1, function(nw) {
			return ag.zD(nw, aP.cs)
		})
	}, this.a37 = function(y1, a38) {
		return function(y1, a2I, a38) {
			for (var zm = dl.lv(y1), zn = dl.lw(y1), a2N = a2.a3 - 2, a2O = a2.a4 - 2, a2P = -1, ao = 0; ao < a2I; ao++) {
				var a2Q = Math.max(zm - ao, 1),
					a2R = Math.max(zn - ao, 1),
					a2S = Math.min(zm + ao, a2N),
					a2T = Math.min(zn + ao, a2O),
					zt = a2U(zm, a2S - zm, zn - ao, a38, a2O, 1),
					zu = a2U(zm - 1, zm - a2Q - 1, zn - ao, a38, a2O, -1),
					a2S = a2U(zm, a2S - zm, zn + ao, a38, a2O, 1),
					a2Q = a2U(zm - 1, zm - a2Q - 1, zn + ao, a38, a2O, -1),
					a2X = a2Y(zn, a2T - zn - 1, zm - ao, a38, a2N, 1),
					a2Z = a2Y(zn - 1, zn - a2R - 2, zm - ao, a38, a2N, -1),
					a2T = a2Y(zn, a2T - zn - 1, zm + ao, a38, a2N, 1),
					a2R = a2Y(zn - 1, zn - a2R - 2, zm + ao, a38, a2N, -1);
				if (a2P = a2c(a2P, zt, y1), a2P = a2c(a2P, zu, y1), a2P = a2c(a2P, a2S, y1), a2P = a2c(a2P, a2Q, y1), a2P = a2c(a2P, a2X, y1), a2P = a2c(a2P, a2Z, y1), a2P = a2c(a2P, a2T, y1), 0 <= (a2P = a2c(a2P, a2R, y1)) && ao * ao >= dl
					.sq(a2P, y1)) return a2P
			}
			return -1
		}(y1, dl.y8(), a38)
	}
}

function a3A() {
	this.iL = function(player) {
		return dm.sh.si(player, function(player) {
			var h = dn.lt.lu;
			if (0 === h) return -1;
			for (var bl = Math.min(h, dn.performance.a0T ? h : 10), bj = dn.lt.bj, ny = aN.aO(dV.random() * h, dV.value(100)), b8 = ny + bl, mz = dV.a0E(ad.mj[player], ad.mm[player]), n0 = dV.a0E(ad.mk[player], ad.mn[player]), sp = -1,
					p0 = dl.zv(0, 0, a2.a3, a2.a4), j = ny; j < b8; j++) {
				var an = j % h,
					a3C = dl.zl(mz, n0, bj[an]);
				a3C < p0 && (p0 = a3C, sp = an)
			}
			return -1 !== sp ? function(ls, mz, n0) {
				var zm = dl.lv(ls),
					zn = dl.lw(ls),
					mv = mz - zm,
					mw = n0 - zn;
				Math.abs(mv) >= Math.abs(mw) ? (mw = 0, mv = Math.sign(mv)) : (mv = 0, mw = Math.sign(mw));
				mv === mw && (mv = 1);
				for (;;) {
					if (zm += mv, zn += mw, !dl.a07(zm, zn)) break;
					if (ls = dl.a04(zm, zn), ag.zH(dl.ww(ls))) return ls
				}
				return -1
			}(bj[sp], mz, n0) : -1
		}(player))
	}
}

function yh(a3E) {
	var a3F = document.createElement("div");

	function a3H() {
		l3.l4() || (a3F.style.backgroundColor = aS.color.a3I(fg.a3J, 50))
	}

	function a3G() {
		a3F.style.backgroundColor = fg.a3J
	}
	this.n = function(a3K) {
			a3F.textContent = a3K
		}, this.show = function() {
			document.body.appendChild(a3F)
		}, this.resize = function() {
			var cf = aS.bG.bJ(.03, .5);
			a3F.style.width = 2 * cf + "px", a3F.style.height = cf + "px", a3F.style.font = aS.bG.bQ(1, .75 * cf), aS.bG.hm(a3F, 4), aS.bG.hm(a3F, 2)
		}, this.pE = function() {
			a3F.onclick = null, a3F.onmouseover = null, a3F.onmouseout = null, c9.removeChild(document.body, a3F), a3F = null
		}, a3F.style.position = "absolute", a3G(), a3F.style.color = fg.fk, a3F.style.zIndex = "3", a3F.style.right = "0", a3F.style.top = "0", a3F.style.display = "flex", a3F.style.justifyContent = "center", a3F.style.alignItems = "center", a3F
		.style.userSelect = "none", a3F.style.outline = "none", a3F.onclick = a3E, a3F.onmouseover = a3H, a3F.onmouseout = a3G
}

function a3e(n2) {
	dT && !n2 || (qT(), aN = new a3g, a3V = new xS, aS = new a3h, fg = new a3i, aP = new cn, qN = new a3j, gE = new pz, pS = new a3k, dr = new a3l, aV = new a3m, eF = new a3n, eO = new a3o, ds = new a3p, dt = new a3q, a3L = new un, eD = new a3r, e9 =
		new a3s, eB = new tC, a3M = new lM, eC = new a3t, eA = new a3u, e4 = new a3v, e3 = new a3w, qz = new a3x, e7 = new a3y, e2 = new a3z, e8 = new a40, eE = new a41, a3N = new a42, a3O = new a43, cL = new a44, ml = new a45, ag = new yj, a3Q =
		new a46, du = new a47, dY = new a48, a0p = new iu, a8 = new a49, dX = new a4A, a3P = new ei, eG = new lx, ad = new vB, dZ = new a4B, dQ = new a4C, mr = new a4D, dh = new a4E, a2p = new a4F, a3R = new a4G, az = new a4H, dV = new a4I, dn =
		new a4J, dk = new a4K, a3S = new jw, eM = new a4L, bI = new a4M, e6 = new a4N, cD = new a4O, eJ = new a4P, ul = new va, a3T = new a4Q, eH = new pv, eI = new ix, a3U = new a4R, db = new a23, dw = new x2, e5 = new a4S, pJ = new xD, qL =
		new yB, qb = new pC, a1y = new a1v, l3 = new a4T, dl = new zh, dm = new a4U, dN = new gN, dy = new a4V, a3W = new a4W, dO = new a4X, a2 = new a2e, a3X = new a0b, c9 = new a4Y, ea = new a4Z, bD = new jm, dT = new a4a, qh = new a4b, l =
		new za, de = new a4c, dx = new a4d, zS = new rv, dj = new a4e, dp = new a4f, a3Y = new a4g, aZ = new xH, dz = new ve, eK = new a4h, th = new a4i, hn = new a4j, a3b = new a4k, a3c = new q4, a3d = new a4l, bx = new a4m, yb = new a4n, dP =
		new a4o, a0l = new a36, aC = new a4p, dT.f(), bD.f(), bI.dg(), l.f(), qN.f(), qN.a4r(), (bn = new bf).f(), aS.f(), dp.f(), az.f(), gE.f(), pS.f(), a2.f(), c9.f(), a3Z = new a4s, bI.f(), bD.bE.a4t(), eK.f(), hn.f(), a3Y.f(), a3a = new a4u,
		dV.f(), dX.yE(), ea.f(), dh.f(), cL.f(), qz.f(), dZ.f(), l3.f(), ml.f(), eK.eN = !0, setTimeout(function() {
			a2.cM(2, 14071)
		}, 0), c9.ed(5, 5), a1y.bv() || bD.bE.a4v(), bI.wP(), dT.a4w = 1)
}

function a44() {
	var go = 0;
	this.f = function() {
		a3N.f(), go = 0
	}, this.setState = function(a4x) {
		go = a4x
	}, this.qs = function() {
		return go
	}, this.x9 = function() {
		this.setState(8), c9.wO()
	}, this.fR = function(b8) {
		if (!a2.a2i) return !1;
		if (!(eK.iJ < 400)) {
			if ("Enter" === b8.key || "Escape" === b8.key) {
				if (this.a4y()) return !0;
				if ("Enter" === b8.key) {
					if (0 === go) return !0;
					if (7 === go) return !0
				}
			}
			return !1
		}
	}, this.a4z = function() {
		a3a.resize()
	}, this.a4y = function() {
		return !!a3a.fQ()
	}, this.tj = function(fm, fn) {
		!a2.a2i || a3a.tj(fm, fn) || 6 === go && a3O.tj(fm, fn) || a3Z.tj(fm, fn) || qz.tj(fm, fn)
	}, this.mx = function(fm, fn) {
		!qz.a50 && a3N.mx(fm, fn, !0) || qz.mx(fm, fn)
	}, this.click = function(fm, fn) {
		qz.vs()
	}, this.a51 = function(fm, fn, deltaY) {}, this.a52 = function() {
		a3N.a53(), eK.eN = !0
	}, this.fc = function() {
		8 !== go && 10 !== go && (fW.imageSmoothingEnabled = !0, this.fV(), 0 !== go && (qz.fc(), a3M.fc(), this.a54(), a3Z.fc()), 0 !== go && 6 === go && a3O.fc(), a3a.fc(), c9.fc())
	}, this.fV = function() {
		var a56, a55;
		if (__fx.makeMainMenuTransparent) fW.clearRect(0, 0, bI.ce, bI.cf);
		else a2.a2i ? (a55 = bI.ce / a2.a3, a56 = bI.cf / a2.a4, fW.setTransform(a55 = a56 < a55 ? a55 : a56, 0, 0, a55, Math.floor((bI.ce - a55 * a2.a3) / 2), Math.floor((bI.cf - a55 * a2.a4) / 2)), fW.drawImage(a2.fY, 0, 0), fW.setTransform(1,
			0, 0, 1, 0, 0), fW.fillStyle = fg.a57) : fW.fillStyle = fg.lX, fW.fillRect(0, 0, bI.ce, bI.cf)
	}, this.a54 = function() {
		var fn = Math.floor(.3 * bI.cf),
			canvas = ml.a58("territorial.io"),
			ne = (ne = 1.75 * bI.cf / canvas.width) * canvas.width < .98 * bI.ce ? .98 * bI.ce / canvas.width : ne,
			fm = (fW.globalAlpha = .15, fW.imageSmoothingEnabled = !1, Math.floor(.5 * (bI.ce - ne * canvas.width))),
			fm = Math.floor(fm / ne),
			fn = Math.floor(fn - .5 * canvas.height * ne),
			fn = Math.floor(fn / ne);
		fW.setTransform(ne, 0, 0, ne, fm, fn), fW.drawImage(canvas, fm, fn), fW.setTransform(1, 0, 0, 1, 0, 0), fW.globalAlpha = 1, fW.imageSmoothingEnabled = !0
	}
}

function a4k() {
	function a5B(b8) {
		a5M(b8), c9.ed(4, 5, new a5G("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new bV("⬅️ " + L(43), function() {
				c9.f7()
			}), new bV("🔄 Reload", function() {
				bD.bE.a5N()
			}, fg.tb)]))
	}

	function a5J(b8) {
		a5M(b8), c9.ed(4, 5, new a5G(L(206), a5H(b8), !0))
	}

	function a5H(b8) {
		var bq = " [" + b8 + "]";
		return 3249 === b8 || 1006 === b8 ? "No Internet / No Server Response" + bq : 4527 === b8 ? "Player already in lobby" + bq : 4530 === b8 ? "Lobby Timeout" + bq : 4528 === b8 ? "Lobby Kick: Another login detected." + bq : 4540 === b8 ?
			"You have been kicked." + bq : 4495 === b8 ? "Account doesn't exist." : 4229 === b8 ? "Bad Internet / Unresponsive Client" + bq : 4555 === b8 ? "Invalid Account Error. Please Try Again." + bq : 4557 <= b8 && b8 <= 4560 ?
			"Please try again later!" + bq : "Unknown error" + bq
	}

	function a5M(b8) {
		a5E(b8), c9.b0.a5O()
	}

	function a5E(b8) {
		var go = cL.qs();
		6 === go ? az.b0.a5P(b8) : bx.a5C ? (c9.wO(), bx.pE(), az.b0.close(az.b0.a5D, 3256)) : 8 === go && aP.eS(!0)
	}
	this.a59 = [], this.a5A = function(qC, b8) {
		if (this.a59.push(b8), 8 === c9.cA && 0 === qC)
			if (4211 === b8) a5B(b8);
			else {
				if (bx.a5C && (4495 === b8 || 4480 === b8) && az.b0.a5D !== qC) return void c9.f7();
				if (8 !== cL.qs() && a5E(), 4480 === b8) return l.m.wS(), void c9.ed(4, 0, new a5G(L(208), L(209), !0));
				c9.ed(4, 0, new a5G(L(206), a5H(b8), !0))
			}
		else {
			var go = cL.qs();
			if (6 === go) {
				if (4211 === b8) return void a5B(b8);
				if (4215 !== b8 && 4516 !== b8 && 4527 !== b8 && 4533 !== b8 && 4528 !== b8 && !(4557 <= b8 && b8 <= 4560)) return void a3O.a5I(qC)
			} else {
				if (!bx.a5C) return 8 === go ? void(qC !== az.b0.qY || aP.d0 || 1 !== aP.d2 || aP.d1 || eB.ip(L(207, [b8]))) : void 0;
				if (qC !== az.b0.a5D) return
			}
			a5J(b8)
		}
	}, this.a5K = function(b8) {
		this.a59.push(b8), 8 === cL.qs() ? aP.d0 || 1 !== aP.d2 || eB.ip(L(207, [b8])) : a5J(b8)
	}, this.a5L = function() {
		this.a59.push(3268), a5M(3268)
	}
}

function a24() {
	this.a0o = function(ls) {
		aP.d0 ? db.a26.a0o(aP.cs, ls) : az.qv.a5Q(ls)
	}, this.a0v = function(hE, gt) {
		aP.d0 ? db.a26.a0v(aP.cs, hE, gt) : az.qv.a5R(hE, gt)
	}, this.a5S = function(hE, hM) {
		aP.d0 ? db.a26.hL(aP.cs, hE, hM) : az.qv.a5T(hE, hM)
	}, this.a10 = function(hE, ls) {
		ls = (ls << 3) + dN.gY[6];
		aP.d0 ? db.a26.a10(aP.cs, hE, ls) : dm.t7.t8(aP.cs) && az.qv.a5V(hE, ls)
	}, this.a12 = function(hE) {
		849 === hE && (hE = 850);
		var tr = dN.gY[3];
		aP.d0 ? db.a26.a12(aP.cs, hE, tr) : dm.a11.xq(aP.cs, tr) && az.qv.a5W(hE, tr)
	}, this.a5X = function(tr) {
		aP.d0 ? db.a26.a5X(aP.cs, tr) : az.qv.a5W(849, tr)
	}, this.a5Y = function(gt) {
		aP.d0 ? db.a26.a5Y(aP.cs, gt) : az.qv.a5Z(gt)
	}, this.uF = function(nU) {
		aP.d0 ? db.a26.a5a(aP.cs, nU) : az.qv.a5b(nU)
	}, this.a19 = function(a5c) {
		aP.d0 ? db.a26.a19(aP.cs, a5c) : az.qv.a5d(a5c)
	}, this.a5e = function() {
		aP.d0 ? db.a26.a5e(aP.cs) : az.qv.a5f()
	}, this.a17 = function() {
		aP.d0 ? db.a26.a17(aP.cs) : az.qv.a5Z(513)
	}, this.a0r = function(hE, ls, gt) {
		aP.d0 ? db.a26.a0r(aP.cs, hE, ls, gt) : az.qv.a5g(hE, ls, gt)
	}
}

function a3p() {
	var a5h, a5i, a5j, a5k, a5l, a5m, a5n, a5o, a5p, a5q;

	function a5s() {
		var cx = aP.cx;
		for (a5p = cx; a5p < aP.aj; a5p++) a5r();
		for (a5p = aP.d5 ? aP.ct : 0; a5p < cx; a5p++) {
			if (!a5v()) {
				for (var bd = aP.cy = a5p; bd < cx; bd++) a5p = bd, a5r();
				return
			}
			a5w(a5m + a5h * a5l + aN.aO(a5l, 2), a5n + a5i * a5l + aN.aO(a5l, 2))
		}
	}

	function a6J(player) {
		for (var mj = ad.mj, mk = ad.mk, mm = ad.mm, mn = ad.mn, fn = mk[player]; fn <= mn[player]; fn++)
			for (var fm = mj[player]; fm <= mm[player]; fm++) {
				var nw = ag.z8(fm, fn);
				ag.aq(nw) && (ag.zF(nw) ? ag.ai(nw, player) : ag.zP(nw, player))
			}
	}

	function a6I(bk, rV, rY) {
		var aX = bk[rV];
		bk[rV] = bk[rY], bk[rY] = aX
	}

	function a5v() {
		return function() {
			var j;
			for (j = 0; j < 8; j++)
				if (a5h = aN.aO(a5j * dV.random(), dV.value(100)), a5i = aN.aO(a5k * dV.random(), dV.value(100)), a6O()) return 1;
			return
		}() || function() {
			var mv, mw, bc, nO, bd, nN;
			for (mv = aN.aO(a5j * dV.random(), dV.value(100)), mw = aN.aO(a5k * dV.random(), dV.value(100)), bc = 40; 1 <= bc; bc--)
				for (nO = a5k - bc; 0 <= nO; nO -= 40)
					for (a5i = (nO + mw) % a5k, bd = 40; 1 <= bd; bd--)
						for (nN = a5j - bd; 0 <= nN; nN -= 40)
							if (a5h = (nN + mv) % a5j, a6O()) return 1;
			return
		}()
	}

	function a6O() {
		for (var am, a6Q, gap = aN.aO(a5l - a5o, 2), a2T = a5n + a5i * a5l + gap, a2S = a5m + a5h * a5l + gap, a6P = a2T + a5o - 1; a2T <= a6P; a6P--)
			for (a6Q = a2S + a5o - 1; a2S <= a6Q; a6Q--)
				if (am = ag.z8(a6Q, a6P), !ag.ah(am) || ag.zF(am)) return;
		return 1
	}

	function a5w(nN, nO) {
		a5r(), a6R(nN - 2, nO - 2)
	}

	function a5r() {
		ad.eQ[a5p] = 0, ad.el[a5p] = ad.vC[a5p] = 0, ad.ac[a5p] = [], ad.vD[a5p] = [], ad.sn[a5p] = [], ad.rb[a5p] = [], ad.mj[a5p] = ad.mk[a5p] = ad.mm[a5p] = ad.mn[a5p] = 0
	}

	function a6R(nN, nO) {
		var am, j, a6S, a6T;
		for (ad.eQ[a5p] = 1, ad.mj[a5p] = nN + 10, ad.mk[a5p] = nO + 10, ad.mn[a5p] = ad.mm[a5p] = 0, a6S = nN; a6S < nN + 4; a6S++)
			for (a6T = nO; a6T < nO + 4; a6T++)(nN < a6S && a6S < nN + 3 || nO < a6T && a6T < nO + 3) && (am = ag.z8(a6S, a6T), ag.ah(am)) && (ad.mj[a5p] = Math.min(a6S, ad.mj[a5p]), ad.mm[a5p] = Math.max(a6S, ad.mm[a5p]), ad.mk[a5p] = Math.min(a6T,
				ad.mk[a5p]), ad.mn[a5p] = Math.max(a6T, ad.mn[a5p]), a5q[ad.el[a5p]] = am, ad.el[a5p]++, ag.zP(am, a5p));
		for (ad.vC[a5p] = ad.el[a5p], j = ad.el[a5p] - 1; 0 <= j; j--) ag.zC(a5q[j], a5p) ? (ag.ai(a5q[j], a5p), ad.vD[a5p].push(a5q[j])) : ag.zG(a5q[j]) ? (ag.ai(a5q[j], a5p), ad.sn[a5p].push(a5q[j])) : ag.z9(a5q[j]) && (ag.ai(a5q[j], a5p), ad.rb[
			a5p].push(a5q[j]))
	}
	this.f = function() {
		if (a5q = new Array(12), a5o = 6, a5l = 10, a5j = aN.aO(a2.a3, a5l), a5k = aN.aO(a2.a4, a5l), a5m = aN.aO(a2.a3 - a5l * a5j, 2), a5n = aN.aO(a2.a4 - a5l * a5k, 2), aP.d5)
			for (var j = 0; j < aP.ct; j++) a5p = j, a5r(), ad.eQ[a5p] = 1;
		(0 === aP.data.spawningType ? a5s : 1 === aP.data.spawningType ? (a5s(), function() {
			var a5x = aP.d8;
			aP.d9 || a5x++;
			if (!(a5x < 3)) {
				for (var data = aP.data, ny = (aP.d5 ? aP.ct : 0) + data.teamPlayerCount[0], k6 = aP.cy, a5y = new Uint32Array(a5x), a5z = new Uint32Array(a5x), a60 = new Uint16Array(a5x), a61 = new Uint16Array(a5x), gu = de.gu, mj = ad
						.mj, mk = ad.mk, mm = ad.mm, mn = ad.mn, gb = dN.gb, gc = dN.gc, j = ny; j < k6; j++) gb[j] = mj[j] + mm[j] >> 1, gc[j] = mk[j] + mn[j] >> 1;
				for (j = ny; j < k6; j++) {
					var id = gu[j];
					a5y[id] += gb[j], a5z[id] += gc[j]
				}
				var lq = de.lq;
				for (j = 1; j < a5x; j++) {
					var ae = Math.max(data.teamPlayerCount[lq[j]], 1);
					a60[j] = aN.aO(a5y[j], ae), a61[j] = aN.aO(a5z[j], ae)
				}
				var a62 = de.a62,
					a63 = de.a63,
					a64 = de.a64,
					ga = dN.ga;
				for (j = 0; j < 512; j++) ga[j] = j;
				for (var rp = 0; rp < 2 + (4 <= a5x); rp++)
					for (j = ny; j < k6; j++) {
						for (var ov = j, pt = ga[ov], a65 = 1, p0 = aN.a66(gb[pt] - a60[1], gc[pt] - a61[1]), bc = 2; bc < a5x; bc++) {
							var a67 = aN.a66(gb[pt] - a60[bc], gc[pt] - a61[bc]);
							a67 < p0 && (p0 = a67, a65 = bc)
						}
						var a68 = gu[ov];
						if (a65 !== a68) {
							if (2 === rp && 4 <= a5x) {
								var a69 = Math.max((a65 + 1) % a5x, 1),
									a6A = aN.a66(gb[pt] - a60[a69], gc[pt] - a61[a69]);
								for (bc = 1; bc < a5x; bc++) a67 = aN.a66(gb[pt] - a60[bc], gc[pt] - a61[bc]), p0 < a67 && a67 < a6A && (a6A = a67, a69 = bc);
								a69 !== a68 && aN.a66(a60[a68] - a60[a69], a61[a68] - a61[a69]) < aN.a66(a60[a68] - a60[a65], a61[a68] - a61[a65]) && (a65 = a69)
							}
							var a6B = lq[a65],
								a6C = a63[a6B] + (aP.d5 ? 0 : a64[a6B]),
								ow = a62[a6C],
								pu = ga[ow],
								a6D = a63[a6B + 1];
							p0 = aN.a66(gb[pu] - a60[a68], gc[pu] - a61[a68]);
							for (var bt = a6C + 1; bt < a6D; bt++) {
								var a6E = a62[bt],
									a6F = ga[a6E];
								(a67 = aN.a66(gb[a6F] - a60[a68], gc[a6F] - a61[a68])) < p0 && (p0 = a67, ow = a6E)
							}
							ow < ny || k6 <= ow || (pu = ga[ow], a5y[a68] += gb[pu] - gb[pt], a5z[a68] += gc[pu] - gc[pt], a5y[a65] += gb[pt] - gb[pu], a5z[a65] += gc[pt] - gc[pu], ae = data.teamPlayerCount[lq[a68]], a60[a68] = aN.aO(a5y[
								a68], ae), a61[a68] = aN.aO(a5z[a68], ae), ae = data.teamPlayerCount[a6B], a60[a65] = aN.aO(a5y[a65], ae), a61[a65] = aN.aO(a5z[a65], ae), ga[ov] = pu, ga[ow] = pt)
						}
					}! function() {
						for (var ga = dN.ga, mj = ad.mj, mk = ad.mk, mm = ad.mm, mn = ad.mn, el = ad.el, vC = ad.vC, vD = ad.vD, sn = ad.sn, rb = ad.rb, j = 0; j < 512; j++) {
							var a6H = ga[j];
							if (a6H !== j) {
								a6I(mj, j, a6H), a6I(mk, j, a6H), a6I(mm, j, a6H), a6I(mn, j, a6H), a6I(el, j, a6H), a6I(vC, j, a6H), a6I(vD, j, a6H), a6I(sn, j, a6H), a6I(rb, j, a6H), a6J(j), a6J(a6H), ga[j] = j;
								for (var cf = a6H, an = ga[cf]; an !== j;) an = ga[cf = an];
								ga[cf] = a6H
							}
						}
					}()
			}
		}) : function() {
			var cx = aP.cx;
			for (a5p = cx; a5p < aP.aj; a5p++) a5r();
			for (a5p = aP.d5 ? aP.ct : 0; a5p < cx; a5p++)
				if (! function() {
						var spawningData = aP.data.spawningData,
							nN = spawningData[2 * a5p] + 1,
							spawningData = spawningData[2 * a5p + 1] + 1;
						if (3 < nN && nN < a2.a3 - 5 && 3 < spawningData && spawningData < a2.a4 - 5 && ag.ah(ag.z8(nN, spawningData)) && function(nN, nO) {
								var am, a6Q, a6P;
								for (a6P = nO; nO - 6 < a6P; a6P--)
									for (a6Q = nN; nN - 6 < a6Q; a6Q--)
										if (am = ag.z8(a6Q, a6P), ag.zF(am)) return;
								return 1
							}(nN + 3, spawningData + 3)) return a5w(nN + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a5v()) {
						for (var bd = aP.cy = a5p; bd < cx; bd++) a5p = bd, a5r();
						return
					}
					var nN = a5m + a5h * a5l + aN.aO(a5l, 2),
						nO = a5n + a5i * a5l + aN.aO(a5l, 2);
					a5w(nN, nO)
				}
		})(), aZ.w8[7] = ad.el[aP.cs]
	}, this.zT = function(gt, a6U, a6V) {
		var j, nN, nO, am, a5h, a5i;
		for (a5p = gt, j = 0; j < 20; j++)
			for (nN = a6U + j; a6U - j <= nN; nN--)
				for (nO = a6V + j; a6V - j <= nO; nO--)
					if ((nN === a6U + j || nN === a6U - j || nO === a6V + j || nO === a6V - j) && 3 < nN && nN < a2.a3 - 5 && 3 < nO && nO < a2.a4 - 5 && ag.ah(ag.z8(nN, nO)) && function(nN, nO) {
							var am, a6Q, a6P;
							for (a6P = nO; nO - 6 < a6P; a6P--)
								for (a6Q = nN; nN - 6 < a6Q; a6Q--)
									if (am = ag.z8(a6Q, a6P), ag.zF(am) && !ag.wx(a5p, am)) return;
							return 1
						}(nN + 3, nO + 3)) {
						if (0 < ad.el[a5p]) {
							for (a5i = a5h = am = void 0, a5h = ad.mm[a5p]; a5h >= ad.mj[a5p]; a5h--)
								for (a5i = ad.mn[a5p]; a5i >= ad.mk[a5p]; a5i--) am = 4 * (a5i * a2.a3 + a5h), ag.o2(a5p, am) && (ag.zK(am), ad.el[a5p]--);
							a5r()
						}
						return a6R(nN - 1, nO - 1), !0
					} return !1
	}, this.zU = function(gt) {
		a5p = gt, a5v() ? a5w(a5m + a5h * a5l + aN.aO(a5l, 2), a5n + a5i * a5l + aN.aO(a5l, 2)) : a5r()
	}
}

function a4j() {
	this.a6Y = 0, this.gap = 0, this.ho = 0, this.a6Z = 0, this.f = function() {
		this.resize()
	}, this.resize = function() {
		this.a6Y = .0022 * aS.bG.hs(.5) * bI.ht, this.ho = this.a6Y / bI.hu, this.gap = Math.max(Math.floor((bD.bE.bF() ? .0114 : .01296) * bI.ht), 2), this.a6Z = this.gap / bI.hu
	}
}

function a4d() {
	var gap, a6a = !1,
		lO = 0,
		ce = 0,
		fp = 0,
		canvas = null,
		ff = null,
		a6b = null;

	function a6e() {
		for (var a6l, a6j = 0, h = 0, bt = Math.floor(ce / 2), rp = Math.floor(fp / 2), a6k = 1.5 * Math.PI, j = aP.d8; 0 <= j; j--) h += a6b[j], 0 === a6b[j] && a6j++;
		if (a6a = !1, ff.clearRect(0, 0, ce, ce), 0 < h)
			if (a6j === aP.d8) {
				for (j = aP.d8; 0 <= j; j--)
					if (0 < a6b[j]) {
						! function(j, bt, rp) {
							ff.fillStyle = de.a6s[de.lq[j]], ff.beginPath(), ff.arc(bt, bt, rp, 0, 2 * Math.PI), ff.fill()
						}(j, bt, rp);
						break
					}!
				function(bt) {
					var fontSize = bt / 3;
					ff.font = aS.bG.bQ(1, fontSize), ff.fillStyle = fg.fk, ff.fillText("100%", bt, bt + .1 * fontSize)
				}(bt)
			} else {
				for (j = 0; j <= aP.d8; j++) 0 < a6b[j] && (! function(j, bt, rp, a6k, a6l) {
					ff.fillStyle = de.a6s[de.lq[j]], ff.beginPath(), ff.arc(bt, bt, rp, a6k, a6l), ff.lineTo(bt, bt), ff.fill()
				}(j, bt, rp, a6k, a6l = a6k + 2 * Math.PI * a6b[j] / h), function(bt, rp, a6k, a6l) {
					var h9 = (a6l - a6k) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * rp * Math.min(h9, .37);
					fontSize < 8 || (a6k = (a6k + a6l) / 2, a6l = (__fx.settings.detailedTeamPercentage ? (100 * h9).toFixed(2) : Math.floor(100 * h9 + .5)) + "%", rp *= .525 - Math.max(.6 * (h9 - .7), 0), ff.font = aS.bG.bQ(1, fontSize), ff
						.fillStyle = fg.fk, ff.fillText(a6l, bt + Math.cos(a6k) * rp, bt + Math.cos(a6k + 1.5 * Math.PI) * rp))
				}(bt, rp, a6k, a6l), 0 !== j && a6q(bt, rp, a6k), a6k = a6l);
				a6q(bt, rp, 1.5 * Math.PI)
			}!
		function(bt, rp) {
			ff.beginPath(), ff.arc(bt, bt, rp, 0, 2 * Math.PI), ff.stroke()
		}(bt, rp)
	}

	function a6q(bt, rp, a6t) {
		ff.beginPath(), ff.moveTo(bt, bt), ff.lineTo(bt + Math.cos(a6t) * rp, bt + Math.cos(a6t + 1.5 * Math.PI) * rp), ff.stroke()
	}
	this.f = function() {
		if (aP.d7) {
			lO = 0, a6b = new Uint32Array(aP.d8 + 1);
			for (var j = aP.d8; 0 <= j; j--) a6b[j] = 0;
			for (j = du.ek - 1; 0 <= j; j--) a6b[de.gu[du.h0[j]]] += 1;
			this.resize()
		} else a6b = ff = canvas = null
	}, this.a6d = function() {
		return ce
	}, this.resize = function() {
		aP.d7 && (ce = Math.floor(.95 * (bD.bE.bF() && !aP.d4 ? .18 * bI.min : .13 * bI.ht)), ce = (ce *= 1 + (.5 + .2 * bD.bE.bF()) * aP.d4) + ce % 2, gap = Math.max(1, .015 * ce), fp = Math.floor(ce - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = ce, canvas.height = ce, (ff = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ff.strokeStyle = fg.fk, aS.bG.textAlign(ff, 1), aS.bG.textBaseline(ff, 1), a6e())
	}, this.hd = function() {
		var aX, gz = this.eu();
		return de.lq[gz] || (gz = function() {
			for (var gz = -1, j = aP.d8; 1 <= j; j--)(-1 === gz || a6b[j] > a6b[gz]) && (gz = j);
			return gz
		}(), aX = ad.el[em[0]], -1 !== gz && a6b[gz] > aX) ? a6b[gz] : aX
	}, this.a6g = function() {
		return lO = 31, this.iL(), this.eu()
	}, this.eu = function() {
		for (var gz = 0, j = aP.d8; 0 < j; j--) a6b[j] > a6b[gz] && (gz = j);
		return gz
	}, this.a6h = function() {
		return a6b[2] > 2 * a6b[1] || a6b[1] > 4 * a6b[2]
	}, this.a0Y = function(p6) {
		for (var ae = 0, h0 = du.h0, gu = de.gu, h = du.ek, ga = dN.ga, j = 0; j < h; j++) {
			var am = h0[j];
			gu[am] === p6 && (ga[ae++] = am)
		}
		dN.gP[0] = ae
	}, this.sW = function(p6) {
		for (var ae = 0, h0 = du.h0, gu = de.gu, h = du.ek, ga = dN.ga, j = 0; j < h; j++) {
			var am = h0[j];
			gu[am] !== p6 && (ga[ae++] = am)
		}
		dN.gP[0] = ae
	}, this.gw = function() {
		for (var ae = 0, j = aP.d8; 0 <= j; j--) ae += 0 < a6b[j];
		return ae
	}, this.iL = function() {
		if (aP.d7 && 32 <= ++lO) {
			lO = 0;
			for (var j = aP.d8; 0 <= j; j--) a6b[j] = 0;
			for (j = du.ek - 1; 0 <= j; j--) a6b[de.gu[du.h0[j]]] += ad.el[du.h0[j]];
			a6a = !0
		}
	}, this.vv = function() {
		aP.d7 && a6a && a6e()
	}, this.fc = function() {
		aP.d7 && (aP.d4 ? fW.drawImage(canvas, hn.gap, hn.gap) : fW.drawImage(canvas, hn.gap, a6u + 2 * hn.gap))
	}
}

function a3w() {
	var a6v, a6w, ce, fm, fn, a6x, a6y;
	this.f = function() {
		a6v = new Array(2), a6w = new Array(2), this.a6z = !1, a6y = a6x = n6 = n5 = 0, fX = 1, this.resize()
	}, this.resize = function() {
		ce = (ce = Math.floor((bD.bE.bF() ? .072 : .0502) * bI.ht)) < 8 ? 8 : ce;
		for (var j = 1; 0 <= j; j--) a6v[j] = document.createElement("canvas"), a6v[j].width = ce, a6v[j].height = ce, a6w[j] = a6v[j].getContext("2d", {
			alpha: !0
		});
		this.a70(),
			function() {
				for (var a7F = Math.floor(1 + ce / 20), j = 1; 0 <= j; j--) a6w[j].clearRect(0, 0, ce, ce), a6w[j].fillStyle = fg.a7G, a6w[j].beginPath(), a6w[j].arc(ce / 2, ce / 2, ce / 2 - a7F, 0, 2 * Math.PI), a6w[j].fill(), a6w[j].lineWidth =
					a7F, a6w[j].fillStyle = fg.fk, a6w[j].strokeStyle = fg.fk, a6w[j].beginPath(), a6w[j].arc(ce / 2, ce / 2, ce / 2 - a7F, 0, 2 * Math.PI), a6w[j].stroke(), fl(a6w[j], 0, 0, ce, a7F, .3, 0 === j)
			}()
	}, this.fZ = function() {
		return -n5 / fX
	}, this.fa = function() {
		return -n6 / fX
	}, this.a74 = function(a75, kA) {
		n5 = fX * a75 - kA
	}, this.a76 = function(a77, kB) {
		n6 = fX * a77 - kB
	}, this.tj = function(a73, tk) {
		return aP.d4 || ! function(a73, tk) {
			return Math.pow(a73 - (fm + ce / 2), 2) + Math.pow(tk - (fn + ce / 2), 2) < ce * ce / 4 || Math.pow(a73 - (fm + ce / 2), 2) + Math.pow(tk - (fn + 2 * ce), 2) < ce * ce / 4
		}(a73, tk) || l.bj.data[8].value ? (eO.k6() && (this.a6z = !0, a6x = a73, a6y = tk), !1) : tk < fn + 1.25 * ce ? this.a51(Math.floor(bI.ce / 2), Math.floor(bI.cf / 2), -200) : this.a51(Math.floor(bI.ce / 2), Math.floor(bI.cf / 2),
			200)
	}, this.mx = function(a73, tk) {
		var a78, a79, mv, mw;
		return !eO.k6() || (a78 = n5, a79 = n6, n5 += mv = a6x - a73, n6 += mw = a6y - tk, eG.mx(mv, mw), this.a7A(), a6x = a73, a6y = tk, a78 !== n5) || a79 !== n6
	}, this.a51 = function(mz, n0, deltaY) {
		var h3;
		if (eO.k6()) {
			if (0 < deltaY) h3 = (h3 = 500 / (500 + deltaY)) < .5 ? .5 : h3;
			else {
				if (!(deltaY < 0)) return !1;
				h3 = 2 < (h3 = (500 - deltaY) / 500) ? 2 : h3
			}
			this.kC(mz, n0, h3), eK.eN = !0
		}
		return !0
	}, this.kC = function(fm, fn, nw) {
		var my;
		nw = my = (my = 1024 < (my = nw) * fX ? 1024 / fX : my) * fX < .125 ? .125 / fX : my, eG.zoom(nw, fm, fn),
			function(my, mz, n0) {
				fX *= my, n5 = (n5 + mz) * my - mz, n6 = (n6 + n0) * my - n0, e3.a7A()
			}(nw, fm, fn)
	}, this.a7A = function() {
		var a7D = bI.ce / 16,
			ox = 0,
			a7E = bI.cf / 16,
			oy = 0;
		n5 < -bI.ce + a7D && (ox = -bI.ce + a7D - n5), n5 > fX * a2.a3 - a7D && (ox = fX * a2.a3 - a7D - n5), n6 < -bI.cf + a7E && (oy = -bI.cf + a7E - n6), n6 > fX * a2.a4 - a7E && (oy = fX * a2.a4 - a7E - n6), n5 += ox, n6 += oy, zS.s3(), eG
			.mu(ox, oy)
	}, this.a70 = function() {
		fm = bI.ce - ce - hn.gap, fn = Math.floor(bI.cf / 2 - 1.25 * ce)
	}, this.fc = function() {
		l.bj.data[8].value || (fW.drawImage(a6v[0], fm, fn), fW.drawImage(a6v[1], fm, Math.floor(fn + 3 * ce / 2)))
	}
}

function kV() {
	var b8;
	this.b8 = document.createElement("hr"), this.resize = function() {
		aS.bG.hm(this.b8, 8, fg.a7H)
	}, (b8 = this.b8).style.marginBottom = b8.style.marginTop = "0.65em", b8.style.marginLeft = b8.style.marginRight = "-4%", b8.style.border = "none"
}

function a7I() {
	var a7J = 0,
		a7K = null;
	this.f = function() {
		null === a7K && (a7K = new Uint16Array(2 * dm.b0.o4)), a7J = 0
	}, this.qe = function(a7L, p8) {
		var a7M = a7K;
		a7M[a7J++] = a7L, a7M[a7J++] = p8
	}, this.t1 = function(player, t0) {
		for (var a7M = a7K, h = a7J, j = 0; j < h; j += 2)
			if (a7M[j] === t0 && dm.g8.xr(a7M[j + 1]) && player === dm.b0.o8[dN.gY[2]] >> 3) return !0;
		return !1
	}, this.p9 = function(a7N) {
		var oL = dm.b0.oE[a7N];
		if (!(oL < 64)) {
			for (var t0 = dm.b0.oD[a7N], a7M = a7K, h = a7J, j = h - 2; 0 <= j; j -= 2)
				if (a7M[j] === t0) {
					{
						a7R = void 0;
						var a7R = a7M[j + 1];
						dm.g8.xr(a7R) && dm.p8.a7Z(dN.gY[2])
					}
					a7M[j] = a7M[h - 2], a7M[j + 1] = a7M[h - 1], h -= 2
				} a7J = h
		}
	}, this.wp = function(a7P, a7Q) {
		for (var a7R = dm.b0.oD[a7P], t0 = -1, a7M = a7K, h = a7J, j = 1; j < h; j += 2)
			if (a7M[j] === a7R) {
				t0 = a7M[j - 1];
				break
			} if (-1 === t0) return !1;
		if (!dm.g8.xr(t0)) return !1;
		var a7N = dN.gY[2],
			oM = dm.b0.oG[a7N];
		if (a7Q === oM[oM.length - 1]) dm.b0.oG[a7P] = dm.tA.a7S(dm.b0.oG[a7P], dm.tA.tB(oM));
		else {
			var a7T = dm.g8.a7U(oM, a7Q);
			if (-1 === a7T) return !1;
			var a7V = dm.b0.oH[a7N];
			a7T === a7V ? (a7N = dl.t6(dm.b0.o9[a7N]), dm.b0.oG[a7P] = dm.tA.a7X(dm.b0.oG[a7P], oM, a7T, a7Q, dl.t5(oM[a7T], a7Q) > dl.t5(oM[a7T], a7N))) : dm.b0.oG[a7P] = dm.tA.a7X(dm.b0.oG[a7P], oM, a7T, a7Q, a7V < a7T)
		}
		return !0
	}, this.a7Z = function(xn) {
		var oM, bl = dm.b0,
			oL = bl.oE[xn];
		return oL % 64 != 5 && (oM = bl.oG[xn], bl.oA[xn] = 65535 - bl.oA[xn], bl.oH[xn] = oM.length - bl.oH[xn] - 2, bl.oG[xn] = dm.tA.tB(oM), bl.oE[xn] = oL - oL % 64 + 5, !0)
	}
}

function a4L() {
	var a7a, a7b;
	this.f = function() {
		a7a = 1, a7b = 0
	}, this.iL = function() {
		0 < a7a && (a7b = 0 === a7b ? eK.iJ + 16 : a7b, a7a = (a7a -= .001 * (eK.iJ - a7b)) < 0 ? 0 : a7a, a7b = eK.iJ, eK.eN = !0)
	}, this.fc = function() {
		0 < a7a && (fW.fillStyle = "rgba(0,0,0," + a7a + ")", fW.fillRect(0, 0, bI.ce, bI.cf))
	}
}

function a4o() {
	var a7e = [];
	this.a7f = function(player, hM, mb, a7g) {
		player === aP.cs || hM === aP.cs || !a7g && aS.aT.gy(player) || aS.aT.gy(hM) || this.lk(ad.ll[player] + " supported " + ad.ll[hM] + " with " + aS.fO.gG(mb) + " ressource" + (1 === mb ? "." : "s."))
	}, this.lk = function(bq, nU) {
		bq = {
			iJ: e8.a7i(),
			bq: bq,
			nU: nU
		};
		a7e.push(bq), 30 === c9.cA && c9.r2().lk(bq)
	}, this.clear = function() {
		a7e = [];
		var gJ = c9.yX(30);
		gJ && gJ.clear()
	}, this.a7j = function() {
		return a7e
	}
}

function a7k() {
	var r9, a0G, fB;
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a0G.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(L(210), [new bV("⬅️ " + L(43), function() {
		c9.ed(7, c9.yX(7).rW)
	}), new bV(L(211), function() {
		l.m.n(105, pS.gF.a7m(a0G.a7n[0].a7o[0].b8.value, 5)), l.m.n(106, pS.gF.a7m(a0G.a7n[1].a7o[0].b8.value, 15)), c9.ed(8, c9.yX(7).rW, new rX(18))
	})]), a0G = new f2(r9.f3, ((fB = []).push(function() {
		var fF = new fG;
		return fF.fH(L(212)), fF.fJ(new fK({
			value: "",
			k: -1
		})), fF
	}()), fB.push(function() {
		var fF = new fG,
			a7s = (fF.fH(L(213)), new fK({
				value: "",
				k: -1
			}));
		return a7s.b8.type = "password", fF.fJ(a7s), fF.fJ(new i9([new bV(L(55), function(b8) {
			return b8.textContent === L(55) ? (b8.textContent = L(214), a7s.b8.type = "text") : (b8.textContent = L(55), a7s.b8.type = "password"), !0
		}).button])), fF
	}()), fB.push(function() {
		var fF = new fG;
		return fF.fH(L(215)), fF.jI(L(216)), fF.jI(L(217)), fF.jI(L(218)), fF
	}()), fB))
}

function a7t() {
	this.a7u = !1, this.iL = function() {
		eK.lf() % 250 != 249 || aP.d1 || (az.b2.a7v(+(this.a7u && ad.eQ[aP.cs]), du.ek + dm.b0.o6), this.a7u = !1)
	}
}

function yg(a3E) {
	var kn = document.createElement("div"),
		a7w = document.createElement("div"),
		a7x = [];

	function a3H() {
		l3.l4() || (this.style.backgroundColor = aS.color.a3I(fg.a3J, 50))
	}

	function a3G() {
		this.style.backgroundColor = fg.a3J
	}
	this.n = function(a7y, a3K) {
			a7x[2].textContent = a7y + 1 + " / " + a3K
		}, this.show = function(g3) {
			a7w.appendChild(bx.ms.transform(bx.g8.yV(g3, bx.g8.yW(g3)))), document.body.appendChild(kn)
		}, this.resize = function() {
			var cf = aS.bG.bJ(.03, .5);
			kn.style.width = 10 * cf + "px", kn.style.font = aS.bG.bQ(1, .75 * cf), aS.bG.hm(kn, 4), a7w.style.top = cf + "px", a7w.style.font = aS.bG.bQ(0, .55 * cf), aS.bG.hm(a7w, 2), kn.style.height = cf + a7w.offsetHeight + "px";
			for (var j = 0; j < 3; j++) aS.bG.hm(a7x[j], 6), a7x[[0, 1, 3][j]].style.width = 2 * cf + "px";
			for (j = 0; j < 4; j++) a7x[j].style.height = cf + "px", aS.bG.hm(a7x[j], 2);
			a7x[2].style.width = 4 * cf + "px", a7x[1].style.left = 2 * cf + "px", a7x[2].style.left = 4 * cf + "px", a7x[3].style.left = 8 * cf + "px"
		}, this.pE = function() {
			for (var j = 0; j < 4; j++) a7x[j].onclick = null, a7x[j].onmouseover = null, a7x[j].onmouseout = null;
			c9.removeChild(document.body, kn), kn = a7w = a7x = null
		}, kn.style.position = "absolute", kn.style.color = fg.fk, kn.style.zIndex = "3", kn.style.right = "0", kn.style.top = "0", a7w.style.position = "absolute", a7w.style.height = "auto", a7w.style.color = fg.fk, a7w.style.backgroundColor = fg
		.a3J, a7w.style.left = "0", a7w.style.width = "100%", a7w.style.overflowWrap = "break-word", kn.appendChild(a7w);
	for (var j = 0; j < 4; j++) a7x[j] = document.createElement("div"), a7x[j].style.position = "absolute", a7x[j].style.backgroundColor = fg.a3J, a7x[j].style.color = fg.fk, a7x[j].style.top = "0", a7x[j].style.display = "flex", a7x[j].style
		.justifyContent = "center", a7x[j].style.alignItems = "center", a7x[j].style.userSelect = "none", a7x[j].style.outline = "none", a7x[j].style.font = "inherit", 2 !== (a7x[j].yf = j) && (a7x[j].onclick = a3E, a7x[j].onmouseover = a3H, a7x[j]
			.onmouseout = a3G), kn.appendChild(a7x[j]);
	a7x[0].textContent = "◀", a7x[1].textContent = "▶", a7x[3].textContent = "✖"
}

function a7z() {
	var a80 = 0,
		a81 = 0,
		a82 = 300,
		a83 = 300,
		a84 = 0;
	this.lu = 0, this.bj = new Uint32Array(512), this.f = function() {
		a81 = a80 = 0, this.lu = 0, a84 = 0
	}, this.iL = function() {
		if (function() {
				var h = dn.lt.lu;
				if (0 === h) return 1;
				var bj = dn.lt.bj;
				if (eK.lf() % 35 == 6) {
					for (var j = h - 1; 0 <= j; j--) ag.at(bj[j] << 2) || (h--, bj[j] = bj[h]);
					dn.lt.lu = h
				}
				return h < bj.length
			}())
			if (a82 <= a80) {
				var a88 = dn.lt.lu;
				if (a88) {
					if (eK.lf() % 350 != 1) return;
					if (a84 !== a88) return void(a84 = a88);
					if (!aS.aT.gy(em[0])) return
				} else if (eK.lf() % 12 != 8) return;
				aS.aT.gv() || dn.lt.f()
			} else {
				var j, ce = a2.a3,
					a89 = ce - 2,
					a88 = a89 * (a2.a4 - 2),
					a8A = a82,
					bj = dn.lt.bj,
					bl = dn.lt.lu,
					a8B = bj.length,
					an = Math.min(a81 + a8A * ((1 + 19 * dn.performance.a0T) * a83), a88);
				for (j = a81; j < an; j += a8A) {
					var nw = 4 * (j % a89 + (aN.aO(j, a89) + 1) * ce + 1);
					if (ag.at(nw) && (bj[bl] = nw >> 2, ++bl === a8B)) {
						j += a8A;
						break
					}
				}(a81 = j) >= a88 && (a81 = ++a80), dn.lt.lu = bl
			}
	}
}

function a4p() {
	this.a8C = function() {
		for (var fm, fn, j = u - 1; 0 <= j; j--) fm = aN.aO(w[j], 4) % a2.a3, fn = aN.aO(w[j], 4 * a2.a3), ad.mj[p] = Math.min(fm, ad.mj[p]), ad.mk[p] = Math.min(fn, ad.mk[p]), ad.mm[p] = Math.max(fm, ad.mm[p]), ad.mn[p] = Math.max(fn, ad.mn[p])
	}, this.aD = function() {
		var ao, am, j, h = ad.ac[p].length,
			ap = ag.ap;
		loop: for (j = h - 1; 0 <= j; j--) {
			for (ao = 3; 0 <= ao; ao--)
				if (am = ad.ac[p][j] + ap[ao], ag.at(am) || ag.aq(am) && ag.ar(am) !== p) {
					ag.zQ(ad.ac[p][j], p);
					continue loop
				} ad.ac[p][j] = ad.ac[p][h - 1], ad.ac[p].pop(), h--
		}
	}, this.aE = function() {
		var player = p,
			vD = ad.vD,
			sn = ad.sn,
			rb = ad.rb,
			h = vD[player].length,
			ap = ag.ap;
		loop: for (var j = h - 1; 0 <= j; j--) {
			for (var a8D = !1, a8E = !1, ao = 3; 0 <= ao; ao--) {
				var am = vD[player][j] + ap[ao];
				if (ag.zD(am, player)) continue loop;
				a8D = a8D || ag.zH(am), a8E = a8E || ag.zA(am)
			}
			a8D ? sn[player].push(vD[player][j]) : a8E ? rb[player].push(vD[player][j]) : ag.zP(vD[player][j], player), vD[player][j] = vD[player][h - 1], vD[player].pop(), h--
		}
	}, this.a8F = function() {
		ad.el[t] -= u
	}, this.a8G = function(border) {
		for (var h = border.length, j = h - 1; 0 <= j; j--) ag.o2(t, border[j]) || (border[j] = border[h - 1], border.pop(), h--)
	}, this.a8H = function(border) {
		for (var h = border.length, j = h - 1; 0 <= j; j--) !ag.o2(t, border[j]) && ag.ah(border[j]) && (border[j] = border[h - 1], border.pop(), h--)
	}, this.a8I = function(border) {
		for (var ao, am, h = border.length, ap = ag.ap, j = h - 1; 0 <= j; j--)
			for (ao = 3; 0 <= ao; ao--)
				if (am = border[j] + ap[ao], ag.zD(am, t)) {
					ad.vD[t].push(border[j]), border[j] = border[h - 1], border.pop(), h--;
					break
				}
	}, this.a8J = function() {
		for (var ao, am, ap = ag.ap, j = u - 1; 0 <= j; j--)
			for (ao = 3; 0 <= ao; ao--) am = w[j] + ap[ao], ag.wx(t, am) && ag.zE(am) && (ad.vD[t].push(am), ag.ai(am, t))
	}, this.a8K = function() {
		var fm, fn;
		loop: for (; ad.mk[t] < ad.mn[t];) {
			for (fm = ad.mm[t]; fm >= ad.mj[t]; fm--)
				if (ag.o2(t, 4 * (ad.mk[t] * a2.a3 + fm))) break loop;
			ad.mk[t]++
		}
		loop: for (; ad.mk[t] < ad.mn[t];) {
			for (fm = ad.mm[t]; fm >= ad.mj[t]; fm--)
				if (ag.o2(t, 4 * (ad.mn[t] * a2.a3 + fm))) break loop;
			ad.mn[t]--
		}
		loop: for (; ad.mj[t] < ad.mm[t];) {
			for (fn = ad.mn[t]; fn >= ad.mk[t]; fn--)
				if (ag.o2(t, 4 * (fn * a2.a3 + ad.mj[t]))) break loop;
			ad.mj[t]++
		}
		loop: for (; ad.mj[t] < ad.mm[t];) {
			for (fn = ad.mn[t]; fn >= ad.mk[t]; fn--)
				if (ag.o2(t, 4 * (fn * a2.a3 + ad.mm[t]))) break loop;
			ad.mm[t]--
		}
	}, this.hW = function(player, gt) {
		return 0 === de.gu[player] || de.gu[player] !== de.gu[gt]
	}, this.a0u = function(player) {
		for (var j, an, h = ad.vD[player].length, ap = ag.ap, ao = 3; 0 <= ao; ao--)
			for (an = ap[ao], j = 0; j < h; j++)
				if (ag.at(ad.vD[player][j] + an)) return !0;
		return !1
	}, this.a8L = function(player) {
		for (var j, an, h = ad.vD[player].length, ap = ag.ap, ao = 3; 0 <= ao; ao--)
			for (an = ap[ao], j = 0; j < h; j++)
				if (ag.zF(ad.vD[player][j]) && ag.at(ad.vD[player][j] + an)) return !0;
		return !1
	}, this.a0x = function(h7, h8) {
		for (var j, aX, an, am, oQ = ad.vD[h7].length, oR = ad.vD[h8].length, ap = (oR < oQ && (aX = h7, h7 = h8, h8 = aX, aX = oQ, oQ = oR, 0), ag.ap), ao = 3; 0 <= ao; ao--)
			for (an = ap[ao], j = 0; j < oQ; j++)
				if (am = ad.vD[h7][j] + an, ag.aq(am) && ag.ar(am) === h8) return !0;
		return !1
	}, this.a8M = function(h7, h8) {
		for (var j, an, am, oQ = ad.vD[h7].length, ap = ag.ap, ao = 3; 0 <= ao; ao--)
			for (an = ap[ao], j = 0; j < oQ; j++)
				if (ag.zF(ad.vD[h7][j]) && (am = ad.vD[h7][j] + an, ag.aq(am)) && ag.ar(am) === h8) return !0;
		return !1
	}
}

function a8N() {
	var ew, ex, ey, fB;

	function f1() {
		f5(), 2 !== aP.data.iIncomeType && (aP.data.iIncomeData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		2 === aP.data.iIncomeType && aS.f8.f9(ey.fA(), aP.data.iIncomeData, 255)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(182), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), fF.fI(new a({
			i: [L(45), L(46), L(47)],
			value: aP.data.iIncomeType
		}, function(k) {
			f5(), 2 !== k || aP.data.iIncomeData || (aP.data.iIncomeData = new Uint8Array(aP.aj), aP.data.iIncomeData.fill(32)), aP.data.iIncomeType = k, c9.ed(27)
		})), fB.push(fF)
	}(fB = []), function(fB) {
		var fF;
		1 === aP.data.iIncomeType && ((fF = new fG).fH("Value"), fF.fJ(new fK({
			k: -1,
			value: aP.data.iIncomeValue
		}, 1, 0, function(b8) {
			var value = aN.fL(Math.floor(b8.target.value), 0, 255);
			b8.target.value = aP.data.iIncomeValue = value
		})), fB.push(fF))
	}(fB), function(fB) {
		var fF;
		2 === aP.data.iIncomeType && ((fF = new fG).fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.iIncomeData, 4)), fF.fJ(ey), fB.push(fF))
	}(fB), fB))
}

function a4s() {
	var gap, vn, fm = [0, 0, 0, 0, 0],
		fn = [0, 0, 0, 0, 0],
		h3 = [1, 1, 1, 1, 1],
		h9 = [!0, !0, !0, !1, !1],
		bt = (this.gj = [!0, !0, !0, !1, !1], null);
	this.a8O = function(nb, a8P) {
		bt = nb, h9 = a8P, vn = [a3V.xe, a3V.xf, a3V.xh, a3V.xh, a3V.xi], this.f()
	}, this.f = function() {
		if (ml.a8Q()) {
			var j, fp = Math.floor((bD.bE.bF() ? .261 : .195) * bI.ht),
				fq = Math.floor(.9 * fp),
				kN = Math.floor(.17 * fq);
			if (gap = bD.bE.bF() ? 2 * hn.gap : hn.gap, h3[0] = fp / bt[0].width, h3[1] = fq / bt[1].width, h3[2] = kN / bt[2].height, h3[3] = kN / bt[3].height, h3[4] = kN / bt[4].height, h3[2] *= 1.7, h3[3] *= 1.07, fm[0] = gap, fm[1] = gap,
				fm[2] = gap, fm[3] = gap, fm[4] = Math.floor(2 * gap + h3[3] * bt[3].width), fn[0] = gap, fn[1] = fn[0] + gap + h3[0] * bt[0].height, fn[2] = fn[1] + gap + h3[1] * bt[1].height, fn[3] = fn[2] + gap + h3[2] * bt[2].height, fn[4] =
				fn[3], !h9[0])
				for (j = 0; j < 5; j++) fn[j] -= h3[0] * bt[0].height + gap;
			if (!h9[1])
				for (j = 2; j < 5; j++) fn[j] -= h3[1] * bt[1].height + gap
		}
	}, this.td = function() {
		return !(7 === cL.qs() && bD.bE.bF())
	}, this.tj = function(kA, kB) {
		if (bt && this.td())
			for (var j = h9.length - 1; 0 <= j; j--)
				if (h9[j] && this.gj[j] && fm[j] < kA && fn[j] < kB && kA < fm[j] + h3[j] * bt[j].width && kB < fn[j] + h3[j] * bt[j].height) return c9.ed(9, c9.cA, new a8R(L(219), aS.bG.i2(vn[j]))), !0;
		return !1
	}, this.fc = function() {
		if (bt && this.td()) {
			var j;
			for (fW.imageSmoothingEnabled = !0, j = 0; j < 5; j++) h9[j] && this.gj[j] && (fW.setTransform(h3[j], 0, 0, h3[j], fm[j], fn[j]), fW.drawImage(bt[j], 0, 0));
			fW.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function q6() {
	this.a10 = function(player) {
		aS.aT.gr(player) && eB.lk(80, L(220), 637, 0, fg.a8S, fg.fh, -1, !1)
	}, this.a12 = function(player) {
		aS.aT.gr(player) && eB.lk(80, L(221), 637, 0, fg.a8S, fg.fh, -1, !1)
	}
}

function a48() {
	var a8T = new Uint16Array(aP.aj),
		a8U = 0;

	function a8Y(uG, a8W) {
		var bt = eK.lf();
		return 3213 <= bt ? 4 + aN.aO(100 * a8W, dX.a8Z(uG)) : (uG = 1 + aN.aO(aP.d3, 300), bt < 357 ? 2 + aN.aO(100 * a8W, uG) : bt < 714 ? 2 + aN.aO(100 * a8W, 4 * uG) : bt < 1071 ? 2 + aN.aO(100 * a8W, 10 * uG) : bt < 2142 ? 2 + aN.aO(100 * a8W,
			30 * uG) : 2 + aN.aO(100 * a8W, 100 * uG))
	}

	function a8X(uG) {
		return aP.d0 || 7 <= aP.dA || 4284 <= eK.lf() || aS.aT.gy(uG)
	}
	this.f = function() {
		a8T.fill(0), a8U = 15
	}, this.xl = function(hM) {
		var player = aP.cs;
		return !!aS.aT.hX(player, hM) && !(!aS.aT.hK(player, aS.aT.hP(player, e4.a0s()), hM) || (player = hM, hM = dN.gR[0], !a8X(player) && a8T[player] + a8Y(player, hM) > a8U))
	}, this.qe = function(uG, a8W) {
		if (!a8X(uG)) {
			a8W = a8Y(uG, a8W);
			if (a8T[uG] + a8W > a8U) return !1;
			a8T[uG] += a8W
		}
		return !0
	}, this.iL = function() {
		eK.lf() % 100 == 99 && (eK.lf() < 1071 ? a8U += 4 : eK.lf() < 2142 ? a8U += 6 : eK.lf() < 3213 ? a8U += 8 : a8U += 10)
	}
}

function a8a() {
	this.si = function(player, a8b) {
		return -1 !== a8b && !!dm.g8.a8c(player, a8b) && this.y3(player, a8b, 0)
	}, this.y3 = function(player, a8b, a8d) {
		player = function(player, a8b, a8d) {
			var xy = dm.g8.xz(player, a8b);
			if (-1 === xy) return -1;
			xy = dm.g8.sj(xy, a8b);
			if (-1 === xy) return -1;
			var a8e = dm.tA.a8h(xy, a8b);
			if (0 <= a8e) return a8e;
			if (dm.tA.yA()) return -1;
			if (0 <= (a8e = dm.tA.a8h(a8b, xy))) return dm.tA.a8i(dm.tA.tB(dm.tA.get(a8e)));
			if (xy === a8b) return dm.tA.a8i(new Uint32Array([xy, a8b]));
			if (0 <= (a8e = dm.a8j.y3(xy, a8b))) return a8e;
			return a8d ? function(a8l, player) {
				var gd = dN.gd,
					bj = (gd.fill(0), [a8l]),
					zi = (gd[a8l] = 1, dl.zi),
					a2K = -1,
					h = bj.length;
				for (; - 1 === a2K && h;) {
					for (var bk = [], j = 0; j < h; j++)
						for (var ls = bj[j], xO = gd[ls], ao = 0; ao < 8; ao++) {
							var a8n, a8o, a8m = ls + zi[ao],
								nw = 4 * a8m;
							ag.zH(nw) ? (a8n = gd[a8m], a8o = xO + 5 + ((1 & ao) << 1), 0 === a8n ? (bk.push(a8m), gd[a8m] = a8o) : gd[a8m] = Math.min(a8o, a8n)) : -1 === a2K && ao % 2 == 0 && ag.o2(player, nw) && (a2K = ls)
						}
					h = (bj = bk).length
				}
				return -1 !== a2K ? function(zt, a8q) {
					var zi = dl.zi,
						a8r = -1,
						wj = 0,
						w8 = [];
					for (; a8q !== zt;)(wj = function(ls, wj) {
						var gd = dN.gd,
							zi = dl.zi,
							xO = gd[ls];
						if (xO - gd[ls + zi[wj]] != 5 + ((1 & wj) << 1))
							for (var bc = 0; bc < 8; bc++) {
								var ao = bc + wj + 6 & 7;
								if (xO - gd[ls + zi[ao]] == 5 + ((1 & ao) << 1)) return ao
							}
						return wj
					}(a8q, wj)) !== a8r && (w8.push(a8q), a8r = wj), a8q += zi[wj];
					w8.push(zt);
					var a8e = dm.tA.a8h(w8[0], zt);
					if (0 <= a8e) return a8e;
					return dm.tA.a8i(new Uint32Array(w8))
				}(a8l, a2K) : -1
			}(a8b, player) : -1
		}(player, a8b, a8d);
		return -1 !== player && (dN.bk[0] = dm.tA.get(player), !0)
	}
}

function a8R(title, a8t, rB) {
	var r9, a8u;
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a8u.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, rB = rB || [new bV("⬅️ " + L(43), function() {
		c9.f7()
	}, fg.a8v)], r9 = new f0(title, rB), a8u = new a8w(r9.f3, a8t), aS.bG.textAlign(r9.f3.style, 1)
}

function a4g() {
	this.a8x = new a8y, this.f = function() {
		this.a8x.resize()
	}
}

function a3s() {
	var cf, canvas, tV, a8z, a90, a91 = -1;

	function a92() {
		var nM, ff = canvas.getContext("2d", {
			alpha: !0
		});
		ff.clearRect(0, 0, cf, cf), ff.fillStyle = fg.a3J, ff.fillRect(0, 0, cf, cf), 0 === a8z && (ff.fillStyle = fg.a93, ff.fillRect(0, 0, cf, cf)), ff.fillStyle = fg.fk, ff.fillRect(0, 0, cf, 1), ff.fillRect(0, 0, 1, cf), ff.fillRect(0, cf - 1,
				cf, 1), ff.fillRect(cf - 1, 0, 1, cf), nM = .9 * cf / ml.get(0).width, ff.imageSmoothingEnabled = !0, ff.setTransform(nM, 0, 0, nM, Math.floor((cf - nM * ml.get(0).width) / 2), Math.floor((cf - nM * ml.get(0).height) / 2)), ff
			.drawImage(ml.get(0), 0, 0), ff.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a97(mz, n0) {
		if (!e9.ef) return mz <= cf + hn.gap && n0 >= e4.fn ? 9 : -1;
		if (mz <= 4 * cf + hn.gap) {
			if (n0 >= e4.fn) return 0;
			if (n0 >= e4.fn - cf - a90 * hn.gap) return 2
		} else if (mz <= 7 * cf + hn.gap && n0 >= e4.fn - cf - a90 * hn.gap) return 1;
		return -1
	}
	this.ef = !1, this.f = function() {
		a8z = -1, this.ef = !1, a90 = bD.bE.bF() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		cf = e4.cf, (canvas = document.createElement("canvas")).width = cf, canvas.height = cf, tV = aS.bG.bQ(1, (bD.bE.bF() ? .5 : .45) * cf), a92()
	}, this.vt = function() {
		this.ef = !this.ef, this.ef ? (e5.a94(!1), aP.d1 && e5.eg && e5.iq(!0), this.a95()) : (a8z = -1, a92(), !aP.d0 || 1 !== aP.d2 || aP.d5 || aP.d1 || bD.bE.setState(1)), eK.eN = !0
	}, this.a95 = function() {
		(aP.d0 || aP.d1) && 1 === aP.d2 && (e2.eR(!0), aP.d5 || setTimeout(function() {
			dj.a96()
		}, 0), bD.bE.setState(0))
	}, this.tj = function(mz, n0) {
		return 0 <= (a91 = a97(mz, n0)) || !e9.ef || aP.d0 || aP.d1 || dz.td || e9.vt(), a91
	}, this.mx = function(mz, n0) {
		mz = a97(mz, n0);
		mz !== a8z && (a8z = mz, this.ef || a92(), eK.eN = !0)
	}, this.a99 = function(mz, n0) {
		mz = a97(mz, n0);
		return -1 !== mz && a91 === mz && (this.ef ? aP.d4 ? (0 <= mz && e5.a94(!1), !aP.d1) : (0 === mz ? aP.eS() : 1 === mz ? this.vt() : 2 === mz && c9.ed(1, 0), !0) : 9 === mz && (this.vt(), !0))
	}, this.fc = function() {
		var ce;
		this.ef ? (ce = Math.floor(5.5 * cf), fW.setTransform(1, 0, 0, 1, hn.gap, e4.fn), fW.fillStyle = fg.a3J, fW.fillRect(0, 0, ce, cf), 0 === a8z ? (fW.fillStyle = fg.a93, fW.fillRect(0, 0, 4 * cf, cf)) : 1 === a8z && (fW.fillStyle = fg.a93,
				fW.fillRect(4 * cf, 0, Math.floor(1.5 * cf), cf)), fW.fillStyle = fg.fk, fW.fillRect(0, 0, ce, 1), fW.fillRect(0, 0, 1, cf), fW.fillRect(4 * cf, 0, 1, cf), fW.fillRect(0, cf - 1, ce, 1), fW.fillRect(ce - 1, 0, 1, cf), fW
			.font = tV, aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 1), fW.fillText(L(222), 2 * cf, .54 * cf), ce = .4 * cf, e9.w4(hn.gap + 4 * cf + (1.5 * cf - ce) / 2, e4.fn + .3 * cf, ce), ce = 1, fW.setTransform(1, 0, 0, 1, hn.gap, e4
				.fn - ce * a90 * hn.gap - ce * cf), fW.fillStyle = fg.a3J, fW.fillRect(0, 0, 4 * cf, cf), a8z === ce + 1 && (fW.fillStyle = fg.a93, fW.fillRect(0, 0, 4 * cf, cf)), fW.fillStyle = fg.fk, fW.fillRect(0, 0, 4 * cf, 1), fW
			.fillRect(0, 0, 1, cf), fW.fillRect(4 * cf, 0, 1, cf), fW.fillRect(0, cf - 1, 4 * cf, 1), fW.fillText(L(0 === ce ? 222 : 223), 2 * cf, .54 * cf), fW.setTransform(1, 0, 0, 1, 0, 0)) : fW.drawImage(canvas, hn.gap, e4.fn)
	}, this.a9C = function(player) {
		return 0 !== ad.eQ[player] && 2 !== aP.d2 && !aS.aT.gy(player)
	}, this.w4 = function(fm, fn, h) {
		fW.setTransform(1, 0, 0, 1, fm, fn), fW.lineWidth = hn.a6Y, fW.strokeStyle = fg.fk, fW.beginPath(), fW.moveTo(0, 0), fW.lineTo(h, h), fW.moveTo(0, h), fW.lineTo(h, 0), fW.stroke()
	}
}

function a9E() {
	this.a37 = function() {
		if (2 === aP.dG) aP.dH = 2;
		else {
			if (8 === aP.dA) aS.aT.gy(0) || 0 === ad.eQ[0] ? aP.dI = 1 : aS.aT.gy(1) || 0 === ad.eQ[1] ? aP.dI = 0 : aP.dI = +(ad.el[1] > ad.el[0]);
			else {
				if (aP.d7) {
					var gz = dx.a6g();
					if (aP.dJ = gz, de.lq[gz]) return void(aP.dH = +(de.gu[aP.cs] === gz))
				}
				aP.dI = em[0]
			}
			aP.dH = +(aP.dI === aP.cs)
		}
	}
}

function a9G() {
	this.a1G = 28, this.lO = 0, this.a1F = null;
	var a9H = this.a1H = null;

	function a9K(bC, a9L) {
		var fm, fn, ls, mv, nb = aS.bG.hk(bC, bC),
			hl = aS.bG.getContext(nb, !0),
			a1X = aS.bG.getImageData(hl, bC, bC),
			nW = a1X.data,
			bl = (bC >> 1) - .5,
			a9M = .5 + bl;
		for (a9M *= a9M, fn = 0; fn < bC; fn++)
			for (fm = 0; fm < bC; fm++) mv = (mv = fm - bl) * mv + (mv = fn - bl) * mv, nW[ls = 4 * (fn * bC + fm)] = a9L[0], nW[1 + ls] = a9L[1], nW[2 + ls] = a9L[2], nW[3 + ls] = (a9M - mv) * a9L[3] / a9M;
		return hl.putImageData(a1X, 0, 0), nb
	}

	function a9Q(j, hl, nb, bC) {
		var highlight, fm, fn;
		0 !== ad.eQ[j] && 0 !== ad.el[j] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[j]) && (bC *= 2), fm = ad.mj[j] + ad.mm[j] + 1 - bC - 2 >> 1, fn = ad.mk[j] + ad.mn[j] + 1 - bC - 2 >> 1, highlight ? hl
			.drawImage(nb[aP.d7 ? 9 === aP.dA && 5 === dr.hH[j] ? 3 : de.gu[j] : j < aP.ct ? 1 : 0], fm, fn, bC, bC) : hl.drawImage(nb[aP.d7 ? 9 === aP.dA && 5 === dr.hH[j] ? 3 : de.gu[j] : j < aP.ct ? 1 : 0], fm, fn))
	}
	this.f = function() {
		var oa;
		this.lO = 700,
			function(oa) {
				var bC = oa.a1G;
				if (oa.a1H = [], a9H = [], aP.d7) {
					for (var j = 0; j <= aP.d8; j++) oa.a1H.push(a9K(bC, de.s9[de.lq[j]])), a9H.push(a9K(bC >> 1, de.s9[de.lq[j]]));
					9 === aP.dA && a9H.push(a9K(bC, de.s9[1]))
				} else oa.a1H.push(a9K(bC, de.s9[7])), oa.a1H.push(a9K(bC, de.s9[4])), a9H.push(a9K(bC >> 1, de.s9[7]))
			}(this),
			function(oa, a9N) {
				var j, a1F = oa.a1F,
					hl = aS.bG.getContext(a1F, !0),
					h = aP.aj,
					bC = oa.a1G >> 1;
				hl.imageSmoothingEnabled = !1, hl.setTransform(1, 0, 0, 1, 0, 0), a9N && hl.clearRect(0, 0, a1F.width, a1F.height);
				if (9 === aP.dA) {
					bC <<= 1;
					oa = dQ.a9P[5];
					for (j = h - oa; j < h; j++) a9Q(j, hl, a9H, bC);
					h -= oa, bC >>= 1
				}
				for (j = aP.ct; j < h; j++) a9Q(j, hl, a9H, bC)
			}(this, null !== (oa = this).a1F && oa.a1F.width === a2.a3 - 2 && oa.a1F.height === a2.a4 - 2 || (oa.a1F = aS.bG.hk(a2.a3 - 2, a2.a4 - 2), !1)), aP.d5 || this.zX()
	}, this.s8 = a9K, this.zX = function() {
		for (var h = aP.ct, bC = this.a1G, a1H = this.a1H, hl = aS.bG.getContext(this.a1F, !0), j = 0; j < h; j++) a9Q(j, hl, a1H, bC)
	}
}

function a4G() {
	var a9S, a9T, a9U, a9V, a9R = !1;

	function a9W() {
		a9R = !0, a9S = -1, a9T = new Array(4);
		for (var j = 3; 0 <= j; j--) a9T[j] = !1;
		var a66 = Math.floor(1 + .02 * bI.min);
		a9U = new Array(4), (a9V = new Array(4))[1] = a9V[3] = a9U[0] = a9U[2] = 0, a9V[0] = a9U[3] = -a66, a9U[1] = a9V[2] = a66
	}

	function a9Y() {
		if (-1 !== a9S)
			if (0 !== aP.d2 && eO.k6()) {
				for (var a9a = !1, j = 3; 0 <= j; j--) a9T[j] && (a9a = !0, n5 += a9U[j], n6 += a9V[j], eG.mx(a9U[j], a9V[j]), e3.a7A());
				a9a ? eK.eN = !0 : a3R.a9b()
			} else a3R.a9b()
	}
	this.a9X = function(k) {
		0 !== aP.d2 && eO.k6() && (a9R || a9W(), a9T[k] = !0, -1 === a9S) && (a9S = setInterval(a9Y, 20), a9Y())
	}, this.a9Z = function(k) {
		if (0 !== aP.d2 && (a9R || a9W(), a9T[k] = !1, -1 !== a9S)) {
			for (var a9a = !1, j = 3; 0 <= j; j--) a9a = a9a || a9T[j];
			a9a || this.a9b()
		}
	}, this.a9b = function() {
		if (a9R && -1 !== a9S) {
			for (var j = 3; 0 <= j; j--) a9T[j] = !1;
			clearInterval(a9S), a9S = -1
		}
	}
}

function a3q() {
	this.f = function() {
		if (0 === aP.data.sResourcesType) {
			for (var oQ = aP.ct, er = ad.er, j = 0; j < oQ; j++) er[j] = 512;
			var oR = aP.cx,
				a9f = dr.a9f,
				hH = dr.hH;
			for (j = oQ; j < oR; j++) er[j] = a9f[hH[j]]
		} else(1 === aP.data.sResourcesType ? function() {
			for (var h = aP.cx, er = ad.er, sResourcesValue = aP.data.sResourcesValue, j = 0; j < h; j++) er[j] = sResourcesValue
		} : function() {
			for (var h = aP.cx, er = ad.er, sResourcesData = aP.data.sResourcesData, j = 0; j < h; j++) er[j] = sResourcesData[j]
		})();
		aZ.w8[8] = ad.er[aP.cs]
	}
}

function a9g() {
	this.a9h = function(qC, a9i) {
		pJ.cM(11), pJ.q9(1, 0), pJ.q9(6, 4), pJ.q9(1, a9i ? 1 : 0), pJ.q9(3, 0 === aP.d2 ? bx.a5C ? 6 : 0 : aP.d1 ? 1 : aP.d0 ? 7 : aP.dA < 7 ? 2 : 8 === aP.dA ? 4 : 9 === aP.dA ? 5 : 3), az.b0.send(qC, pJ.pD)
	}, this.qw = function() {
		pJ.cM(58), pJ.q9(1, 0), pJ.q9(6, 5), pJ.q9(8, az.b0.a5D), pJ.q9(10, cD.cC), pJ.q9(9, cD.a9j), pJ.q9(10, dT.a9k), pJ.q9(14, dT.a9l), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5Q = function(ls) {
		pJ.cM(27), pJ.q9(1, 1), pJ.q9(4, 0), pJ.q9(22, ls), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5R = function(hE, gt) {
		pJ.cM(25), pJ.q9(1, 1), pJ.q9(4, 1), pJ.q9(10, hE), pJ.q9(10, gt), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5T = function(hE, hM) {
		pJ.cM(24), pJ.q9(1, 1), pJ.q9(4, 2), pJ.q9(10, hE), pJ.q9(9, hM), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5V = function(hE, a5U) {
		pJ.cM(42), pJ.q9(1, 1), pJ.q9(4, 3), pJ.q9(10, hE), pJ.q9(27, a5U), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5W = function(hE, tr) {
		pJ.cM(31), pJ.q9(1, 1), pJ.q9(4, 4), pJ.q9(10, hE), pJ.q9(16, tr), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5Z = function(gt) {
		pJ.cM(15), pJ.q9(1, 1), pJ.q9(4, 5), pJ.q9(10, gt), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5b = function(k) {
		pJ.cM(15), pJ.q9(1, 1), pJ.q9(4, 6), pJ.q9(10, k), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5d = function(a5c) {
		pJ.cM(6), pJ.q9(1, 1), pJ.q9(4, 7), pJ.q9(1, a5c), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5f = function() {
		pJ.cM(5), pJ.q9(1, 1), pJ.q9(4, 8), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a5g = function(hE, ls, gt) {
		pJ.cM(47), pJ.q9(1, 1), pJ.q9(4, 10), pJ.q9(10, hE), pJ.q9(10, gt), pJ.q9(22, ls), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a9m = function(a9n, a9o) {
		pJ.cM(24), pJ.q9(1, 1), pJ.q9(4, 15), pJ.q9(9, a9o), pJ.q9(10, a9n), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a9p = function(uG) {
		pJ.cM(14), pJ.q9(1, 1), pJ.q9(4, 14), pJ.q9(9, uG), az.b0.send(az.b0.qY, pJ.pD)
	}, this.a9q = function(a9r, target) {
		var j, h = a9r.length;
		for (pJ.cM(14 + 9 * h), pJ.q9(1, 1), pJ.q9(4, 13), pJ.q9(9, target), j = 0; j < h; j++) pJ.q9(9, a9r[j]);
		az.b0.send(az.b0.qY, pJ.pD)
	}
}

function a4T() {
	var a9s, a9t, a9u = -15e3,
		a9v = !1;

	function tj(b8) {
		aAA() || (a9v = !0, aAB(b8, 1), az.b0.aAC(az.b0.qY), aAD(Math.floor(bI.hu * b8.clientX), Math.floor(bI.hu * b8.clientY)))
	}

	function k3(b8) {
		a9u = eK.iJ, aAB(b8, 1), az.b0.aAC(az.b0.qY), 0 < b8.touches.length && (a9s = Math.floor(bI.hu * b8.touches[0].clientX), a9t = Math.floor(bI.hu * b8.touches[0].clientY), a3S.k3(b8) || aAD(a9s, a9t))
	}

	function aAD(fm, fn) {
		c9.tj(fm, fn), 0 === aP.d2 ? cL.tj(fm, fn) : e5.aAE(fm, fn) || dz.tj(fm, fn) || eE.tj(fm, fn) || eD.aAF(fm, fn) || eC.tj(fm, fn) || 0 <= e9.tj(fm, fn) || e6.tj(fm, fn) || l3.aAG(fm, fn) || eD.kE(fm, fn)
	}

	function mx(b8) {
		aAA() || (a9v = !0, aAB(b8, 1), aAH(Math.floor(bI.hu * b8.clientX), Math.floor(bI.hu * b8.clientY)))
	}

	function k5(b8) {
		a9u = eK.iJ, aAB(b8, 1), 0 < b8.touches.length && (a9s = Math.floor(bI.hu * b8.touches[0].clientX), a9t = Math.floor(bI.hu * b8.touches[0].clientY), a3S.k5(b8) || aAH(a9s, a9t))
	}

	function aAH(fm, fn) {
		c9.mx(fm, fn), 0 === aP.d2 ? cL.mx(fm, fn) : (a3X.a0e(fm, fn), dz.mx(fm, fn) || (e9.mx(fm, fn), eD.td() ? eD.mx(fm, fn) : e4.a0g ? e4.mx(fm) && (eK.eN = !0) : (e2.mx(fm, fn), e3.a6z && e3.mx(fm, fn) && (eK.eN = !0))))
	}

	function aA0(b8) {
		aAA() || (aAB(b8, 1), aAI(), 0 === aP.d2 ? (cL.click(-1024, -1024), qz.aAJ()) : (e2.vs(-1024, -1024), e9.mx(-1024, -1024), e4.aAK(), e3.a6z = !1))
	}

	function a99(b8) {
		aAA() || (aAB(b8, 1), aAL(Math.floor(bI.hu * b8.clientX), Math.floor(bI.hu * b8.clientY), 2 === b8.button), l3.a9y && (l3.a9y = !1, b8.preventDefault()))
	}

	function click(b8) {
		aAA() || aAB(b8, 1)
	}

	function aA1(b8) {
		a9u = eK.iJ, aAB(b8, 1), b8 && b8.touches && 0 < b8.touches.length && 0 !== aP.d2 ? e3.a6z = !1 : a3S.kD() || (aAL(a9s, a9t, !1), l3.a9y && (l3.a9y = !1, b8.preventDefault()))
	}

	function aA2(b8) {
		a9u = eK.iJ, aAB(b8, 1), aAL(a9s, a9t, !1), l3.a9y && (l3.a9y = !1, b8.preventDefault())
	}

	function aA3(b8) {}

	function aA4(b8) {}

	function aA5(b8) {
		aAA() || aAB(b8, 0)
	}

	function aAL(fm, fn, aAM) {
		aAI(), 0 === aP.d2 ? cL.click(fm, fn) : (e2.vs(fm, fn), dz.vs(), e4.aAK(), e3.a6z = !1, eD.click(fm, fn, aAM) ? eK.eN = !0 : e9.a99(fm, fn))
	}

	function aAI() {
		c9.aAI()
	}

	function a51(b8) {
		var fm, fn, deltaY;
		aAA() || (aAB(b8, 1), az.b0.aAC(az.b0.qY), fm = Math.floor(bI.hu * b8.clientX), fn = Math.floor(bI.hu * b8.clientY), deltaY = b8.deltaY, 1 === b8.deltaMode && (deltaY *= 16), c9.a51(fm, fn, deltaY), 0 === aP.d2 ? cL.a51(fm, fn, deltaY) : e2
			.a51(fm, fn, deltaY) || (e4.aAN(fm, fn) ? e4.a51(deltaY) && (eK.eN = !0) : e3.a51(fm, fn, deltaY)))
	}

	function aA6(b8) {
		aAB(b8, 0)
	}

	function aAB(b8, id) {
		0 === id && c9.td() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cL.qs() && b8.preventDefault()
	}

	function aA7(b8) {
		if (__fx.keybindHandler(b8.key)) return;
		aAA() || 0 < bI.aAP || (b8 = b8.code) && b8.length && (bn.bt(b8, 18) ? a3R.a9X(3) : bn.bt(b8, 22) ? a3R.a9X(0) : bn.bt(b8, 20) ? a3R.a9X(1) : bn.bt(b8, 24) ? a3R.a9X(2) : bn.bt(b8, 10) ? e4.aAQ(31 / 32) : bn.bt(b8, 8) ? e4.aAQ(32 / 31) : bn
			.bt(b8, 6) ? e4.aAQ(7 / 8) : bn.bt(b8, 4) ? e4.aAQ(8 / 7) : bn.bt(b8, 14) ? 0 !== aP.d2 && e3.a51(Math.floor(bI.ce / 2), Math.floor(bI.cf / 2), -200) : bn.bt(b8, 16) ? 0 !== aP.d2 && e3.a51(Math.floor(bI.ce / 2), Math.floor(bI.cf /
				2), 200) : bn.bt(b8, 0) ? aP.d2 && a3X.a0f(0) : bn.bt(b8, 2) ? aP.d2 && a3X.a0f(1) : bn.bt(b8, 30) ? aP.d2 && a3X.a0f(2) : bn.bt(b8, 26) ? aP.d2 && a3X.a13() : bn.bt(b8, 28) && aP.d2 && a3X.a17())
	}

	function aA8(b8) {
		if (!aAA() && !(0 < bI.aAP || eK.iJ < 400)) {
			var code = b8.code;
			if (code && code.length && !("Enter" === code && c9.fR(1) || "Space" === code && c9.fR(0))) return bx.a5C ? bx.aAR.fR(code) ? void 0 : void("Escape" === code && l3.aAS()) : void(8 !== cL.qs() && cL.fR(b8) ? eK.eN = !0 : "Escape" ===
				code ? l3.aAS() : bn.bt(code, 18) ? a3R.a9Z(3) : bn.bt(code, 22) ? a3R.a9Z(0) : bn.bt(code, 20) ? a3R.a9Z(1) : bn.bt(code, 24) ? a3R.a9Z(2) : bn.bt(code, 12) ? e5.a94(!aP.d4) : "Space" === code && aP.d2 && (e9.ef && e9.vt(),
					aP.d1) && e5.iq(!1))
		}
	}

	function aA9() {
		"hidden" !== document.visibilityState && (eK.eN = !0)
	}

	function aAA() {
		return a9u + 15e3 > eK.iJ
	}

	function resize() {
		bI.aAU()
	}
	this.a9w = 0, this.a9x = "", this.a9y = !1, this.f = function() {
		a9z.addEventListener("mousedown", tj, {
			passive: !1
		}), a9z.addEventListener("mousemove", mx, {
			passive: !1
		}), a9z.addEventListener("mouseup", a99, {
			passive: !1
		}), a9z.addEventListener("click", click, {
			passive: !1
		}), a9z.addEventListener("mouseleave", aA0, {
			passive: !1
		}), a9z.addEventListener("wheel", a51, {
			passive: !1
		}), a9z.addEventListener("touchstart", k3, {
			passive: !1
		}), a9z.addEventListener("touchmove", k5, {
			passive: !1
		}), a9z.addEventListener("touchend", aA1, {
			passive: !1
		}), a9z.addEventListener("touchcancel", aA2, {
			passive: !1
		}), a9z.addEventListener("dragover", aA3), a9z.addEventListener("drop", aA4), a9z.addEventListener("dblclick", aA5), document.addEventListener("contextmenu", aA6), document.addEventListener("keydown", aA7), document.addEventListener(
			"keyup", aA8), document.addEventListener("visibilitychange", aA9), window.addEventListener("resize", resize)
	}, this.aAG = function(fm, fn) {
		return !!e5.tj(fm, fn) || !!(e2.tj(fm, fn) || e3.tj(fm, fn) || e4.tj(fm, fn) || eB.tj(fm, fn))
	}, this.aAT = aAA, this.l4 = function() {
		return !a9v || 0 < a9u
	}, this.aAS = function() {
		if (!c9.td()) return 8 === cL.qs() ? aP.d4 ? void e5.a94(!1) : dz.td ? void dz.vt() : void e9.vt() : void(7 !== cL.qs() && 6 === cL.qs() && a3O.aAV());
		c9.fR(2)
	}
}

function aAW() {
	var aAX = null,
		aAY = null,
		aAZ = 0,
		aAa = 0,
		aAb = null;

	function aAe() {
		0 !== aAY.gA && (bx.aAR.fQ(), c9.ed(8, 29, new rX(25, {
			qI: 0,
			cQ: gE.gF.gG(aAY.cQ, 5),
			rN: 0
		}, 29)))
	}

	function aAg() {
		return !bx.cP || bx.g8.aAp(aAY) ? 1 : 0
	}

	function aAf() {
		var fm = aAX.fm,
			fn = aAX.fn,
			aAs = (bx.aAR.fQ(), aAg());
		aAX = new aAd([new bV(rP.aAk[5][0], function() {
			aAj(5, 0)
		}, aAs), new bV(rP.aAk[5][1], function() {
			aAj(5, 1)
		}, aAs), new bV(rP.aAk[5][2], function() {
			aAj(5, 2)
		}, aAs), new bV(rP.aAk[5][3], function() {
			aAj(5, 3)
		}, aAs)]), aAi(fm, fn), aAa = aAZ = 2
	}

	function aAh() {
		29 === c9.cA && c9.r2().aAt(gE.gF.gG(aAY.cQ, 5))
	}

	function aAj(id, value) {
		5 === id && az.jS.qR({
			qI: 3,
			cQ: gE.gF.gG(aAY.cQ, 5),
			value: value
		})
	}

	function aAi(fm, fn, aAw) {
		aAX.show(fm, fn, aAw), bx.g6.show(aAX.fm, aAX.fn, aAY, 1)
	}
	this.aAc = function(b8, g3) {
		aAZ = 1, aAY = g3, aAX = new aAd([new bV(L(224), aAe, 0 === g3.gA ? 1 : 0), new bV(L(225), aAf, aAg()), new bV(L(226), aAh, 0)]), aAi((aAb = {
			clientX: b8.clientX,
			clientY: b8.clientY
		}).clientX, aAb.clientY, 1)
	}, this.fR = function(code) {
		if (29 !== c9.cA) return !1;
		if (!aAY) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.fQ();
			else if (aS.fO.startsWith(code, "Numpad") || aS.fO.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aAZ) this.aAc(aAb, aAY);
				else {
					if (!aAX) return !1;
					1 === aAZ ? code <= 1 ? aAe() : 2 === code ? aAf() : (aAh(), this.fQ()) : (aAj(aAa, aN.fL(code - 1, 0, rP.aAk[aAa].length - 1)), this.fQ())
				}
		}
		return !0
	}, this.fQ = function() {
		aAZ = 0, aAX && aAX.fQ(), aAX = null, bx.g6.fQ()
	}
}

function a4Y() {
	this.b0 = new aAx, this.cA = 0;
	var aAy = new Array(32);

	function aB1() {
		for (var h = aAy.length, j = 0; j < h; j++) aAy[j] = null
	}
	this.f = function() {
		for (var aAz, aB0 = document.body.firstChild; aB0;) aAz = aB0.nextSibling, !document.body.contains(aB0) || "DIV" !== aB0.tagName && "INPUT" !== aB0.tagName && "BUTTON" !== aB0.tagName || c9.removeChild(document.body, aB0), aB0 = aAz
	}, this.ed = function(k, rW, qH) {
		void 0 === rW && (rW = this.cA), eK.eN = !0, 0 === k && (0 === cL.qs() ? k = 5 : bD.bE.setState(13)), this.fQ(), this.cA === k && (rW = aAy[k].rW, aAy[k] = null), this.cA = k;
		var bl = aAy[k];
		if (!bl || 4 === k || 7 === k || 8 === k || 9 === k || 10 === k || 11 === k || 13 === k || 15 === k || 18 === k || 20 <= k && k <= 28 || 32 === k || 33 === k) {
			if (0 === k) return void aB1();
			1 === k ? bl = new aB2 : 2 === k ? bl = new aB3 : 3 === k ? bl = new aB4 : 4 === k || 9 === k || 10 === k || 11 === k || 13 === k || 33 === k ? bl = qH : 5 === k ? bl = new aB5 : 6 === k ? bl = new a7k : 7 === k ? bl = new aB6(c9.b0
					.aB7) : 8 === k ? bl = qH : 12 === k ? bl = new aB8 : 14 === k ? bl = new a0F : 15 === k ? bl = new aB6(c9.b0.aB9) : 16 === k ? bl = new aBA : 17 === k ? bl = new aBB : 18 === k ? bl = new aBC : 19 === k ? bl = new aBD :
				20 === k ? bl = new aBE : 21 === k ? bl = new kR : 22 === k ? bl = new aBF : 23 === k ? bl = new a32 : 24 === k ? bl = new aBG : 25 === k ? bl = new aBH : 26 === k ? bl = new ev : 27 === k ? bl = new a8N : 28 === k ? bl =
				new aBI : 29 === k ? bl = new aBJ : 30 === k ? bl = new aBK : 31 === k && (bl = new j9), bl.rW = rW, aAy[k] = bl
		}
		bl.show(qH)
	}, this.f7 = function() {
		this.td() && this.a0H(this.r2().rW)
	}, this.a0H = function(k) {
		this.td() && (aAy[k] ? (this.fQ(), eK.eN = !0, this.cA = k, aAy[k].show()) : this.ed(k))
	}, this.fQ = function() {
		this.td() && aAy[this.cA].fQ()
	}, this.wO = function() {
		this.td() && (aAy[this.cA].fQ(), aB1(), this.cA = 0, bD.bE.setState(13))
	}, this.fc = function() {
		var bl;
		this.td() && (bl = aAy[this.cA]).fc && bl.fc()
	}, this.resize = function() {
		if (!this.td()) return !1;
		aAy[this.cA].resize()
	}, this.tj = function(fm, fn) {
		var bl;
		this.td() && (bl = aAy[this.cA]).tj && bl.tj(fm, fn)
	}, this.mx = function(fm, fn) {
		var bl;
		this.td() && (bl = aAy[this.cA]).mx && bl.mx(fm, fn)
	}, this.aAI = function() {
		var bl;
		this.td() && (bl = aAy[this.cA]).aAI && bl.aAI()
	}, this.a51 = function(mz, n0, deltaY) {
		var bl;
		this.td() && (bl = aAy[this.cA]).a51 && bl.a51(mz, n0, deltaY)
	}, this.fR = function(code) {
		var bl;
		return !!this.td() && ((bl = aAy[this.cA]).fR && bl.fR(code), !0)
	}, this.iL = function() {
		var bl;
		this.td() && (bl = aAy[this.cA]) && bl.iL && bl.iL()
	}, this.td = function() {
		return 0 < this.cA
	}, this.r2 = function() {
		return aAy[this.cA]
	}, this.yX = function(k) {
		return aAy[k]
	}, this.f6 = function() {
		return aAy
	}, this.removeChild = function(bS, i7) {
		try {
			bS.removeChild(i7)
		} catch (b8) {
			console.log("removeChild error " + b8)
		}
	}
}

function a29() {
	this.aBL = function(player, hM, hH) {
		aS.aT.hK(player, hH, hM) && (dX.a5S(player, hM), !aS.aT.gy(hM)) && dn.aBM.aBN[hM] && dn.aBM.aBN[hM]--
	}, this.wz = function(player, hM, hH) {
		aS.aT.hO(hH, hM) ? dY.qe(hM, dN.gR[0]) && (dP.a7f(player, hM, dN.gR[0], 1), aS.aT.aY(hM, dN.gR[0]), aZ.uZ(player, hM), eG.md(hM, dN.gR[0])) : aZ.aa(player, hH, 12)
	}
}

function zf() {
	this.f = function() {
		! function() {
			var data = l.bj.data;
			0 === data[2].jn && (bI.cf > bI.ce || 0 !== bD.id) && (data[2].value = data[2].jM = 1);
			0 === data[100].jn && (data[100].value = data[100].jM = (0 === bD.id ? "Player " : 1 === bD.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var j, h9, data = l.bj.data,
			h = data.length;
		for (j = 0; j < h; j++) data[j] && data[j].jn === l.fT.aBQ(j, !0) && (h9 = l.fT.aBR(j), data[j].value = null === h9 ? data[j].jM : 2 === data[j].type ? h9 : Number(h9))
	}
}

function a4N() {
	var cf, canvas, ff, aBS, aBT, aBU, aBV, aBW, aBX, aBY, aBZ, aBa, uQ = !1,
		nb = (this.td = !1, this.ce = 0, new Array(2)),
		aBb = 0;

	function vv() {
		var ce = e6.ce,
			bl = (aBW = !1, fe(ff, ce, cf), Math.floor(ce / 2));
		1 === aBS ? (ff.fillStyle = fg.aBf, ff.fillRect(bl, 0, bl, cf)) : -1 === aBS && (ff.fillStyle = fg.aBg, ff.fillRect(0, 0, bl, cf)), fi(ff, ce, cf, 2);
		var bl = (bl = Math.floor(.25 * cf)) < 2 ? 2 : bl,
			ue = (ff.fillStyle = fg.aBh, Math.floor((cf - 4) * aBT[1] / aBU[1]));
		0 < ue && ff.fillRect(2, cf - 2 - ue, bl, ue), 0 < (ue = Math.floor((cf - 4) * aBT[0] / aBU[0])) && ff.fillRect(ce - 2 - bl, cf - 2 - ue, bl, ue);
		bl = (bl = Math.floor(cf / 8)) < 2 ? 2 : bl, fl(ff, Math.floor(.4 * cf), 0, cf, bl, .5, !1), fl(ff, Math.floor(ce - 1.4 * cf), 0, cf, bl, .5, !0), ue = 1.1 * cf / nb[0].width;
		ff.imageSmoothingEnabled = !0, ff.setTransform(ue, 0, 0, ue, (ce - ue * nb[0].width) / 2, -.05 * cf), ff.drawImage(nb[+uQ], 0, 0), ff.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aBm() {
		aBa = -1, uQ = a3P.ej(), eB.tx(257), eB.uP(uQ), e6.td = !0, aBW = !0, aBX = 360;
		for (var h9, aX = 0, j = du.ek - 1; 0 <= j; j--) aS.aT.gy(du.h0[j]) || (aX += ad.el[du.h0[j]]);
		uQ ? aBU[0] = Math.max(aN.aO(3 * aX, 4), 1) : aP.d7 ? 9 === aP.dA && 8 === de.lq[dx.eu()] ? aBU[0] = Math.max(aX, 1) : (h9 = aN.aO(100 * dx.hd(), aP.d3), h9 = aN.fL(200 - 2 * h9, 40, 100), h9 = aN.aO(h9 * aX, 100), aBU[0] = Math.max(h9, 1)) :
			8 === aP.dA ? aBU[0] = Math.max(aN.aO(3 * aX, 4), 1) : aBU[0] = Math.max(aN.aO(3 * aX, 5), 1), aBU[1] = Math.max(aX - aBU[0], 1)
	}

	function aBi() {
		aBZ = eK.lf(), aBW = !0, aBX = aBS = 0, aBV = [], e6.td = !1, eB.nn(247), aBT[0] = aBT[1] = 0, eB.tx(673)
	}

	function fa() {
		return e4.tg(eB.tc()) ? __fx.settings.keybindButtons ? e4.fn - 2 * (cf + hn.gap) : e4.fn - cf - hn.gap : e5.tg(eB.tf()) ? e5.fa() - cf - hn.gap : bI.cf - cf - th.ti() * hn.gap
	}
	this.dg = function() {
		for (var j = 0; j < 2; j++) nb[j] = aS.canvas.aBc(ml.get(3), 8 - j, fg.aBd), nb[j] = aS.canvas.aBe(nb[j])
	}, this.f = function() {
		aBZ = -1e4, aBY = aBb = 0, aBa = -1, this.td = !1, aBW = uQ = !1, aBT = [aBS = aBX = 0, 0], aBU = [1, 1], aBV = [], this.resize()
	}, this.resize = function() {
		cf = e4.cf, this.ce = 4 * cf, (canvas = document.createElement("canvas")).width = this.ce, canvas.height = cf, ff = canvas.getContext("2d", {
			alpha: !0
		}), vv()
	}, this.eR = function() {
		aBW && vv()
	}, this.tj = function(fm, fn) {
		return !!this.td && !(fm < bI.ce - this.ce - hn.gap || fn < fa() || (aP.d1 || this.a18(aP.cs) && (e9.ef && e9.vt(), db.a0n.a19(fm > bI.ce - hn.gap - this.ce / 2 ? 1 : 0)), 0))
	}, this.iL = function() {
		0 < aBY ? 0 === --aBY && aBi() : this.td ? 180 == --aBX && 3 * aBT[0] < aBU[0] ? aBi() : aBT[0] >= aBU[0] ? uQ ? dO.a38.aBp() : dO.a38.aBq() : aBT[1] >= aBU[1] ? aBY = 4 : aBX <= 0 && aBi() : ! function() {
			var aBo = eK.lf();
			if (aBo % 40 == 14) {
				if (aBb) return !(aBo < aBb) && !(aBo < aBZ + 535) && (aBb = aBo + 1071, aS.aT.gx()) ? (aBm(), 1) : 0;
				(1 === du.ek || (aP.d7 ? dx.hd() : ad.el[em[0]]) >= aN.aO(96 * aP.d3, 100)) && (aBb = aBo + 535)
			}
			return
		}() && 0 <= aBa && (eB.lk(250, L(227, [ad.ll[aBa]]), 673, aBa, fg.fk, fg.fh, -1, !0), aBm())
	}, this.aBr = function() {
		this.td && aBT[0] < aBU[0] && aBi()
	}, this.aBs = function(player, aBt) {
		var aBu = L(aBt ? 228 : 229, [ad.ll[player]]),
			aBu = (eB.lk(450, aBu, 257, player, aBt ? fg.aBv : fg.wn, fg.fh, -1, !0), aBV.push(player), aBW = !0, aP.d0 ? Math.max(aBU[0], aBU[1]) : ad.el[player]),
			aBu = Math.max(aBu, 1);
		aBt ? aBT[0] += aBu : aBT[1] += aBu, player === aP.cs && (aBS = aBt ? 1 : -1)
	}, this.fc = function() {
		var fn;
		this.td && (fn = fa(), fW.drawImage(canvas, bI.ce - this.ce - hn.gap, fn))
	}, this.a1A = function(player) {
		return 0 === aBX && !!aS.aT.gn(1) && !!aS.aT.gp(player) && !(10 <= lp[player] && !aS.aT.hY(player, 9) || !aP.d0 && ((player = eK.lf()) < aBZ + 100 || player < 1607 || 9 === aP.dA && !dx.a6h()))
	}, this.a18 = function(am) {
		if (!aS.aT.gn(1)) return !1;
		if (!aS.aT.gp(am)) return !1;
		if (!this.td) return !1;
		for (var j = aBV.length - 1; 0 <= j; j--)
			if (aBV[j] === am) return !1;
		return !0
	}, this.a17 = function(player) {
		aBa = player
	}
}

function a3o() {
	var ch, aBx, aBy, cg, aBz, aC0, aC1, aC2, aC3, aC4, aC5, a7b, aC6, aC7 = !1,
		aC8 = !1;

	function aC9(tN) {
		a7b = eK.iJ, aBy = cg = aBx = 0, aBz = (aC6 = 33) / tN, ch = 1 / (tN / aC6 / 4), aC0 = (bI.ce / 2 + n5) / fX, aC1 = (bI.cf / 2 + n6) / fX, aC2 = fX
	}

	function aCB(j) {
		var jx; - 1 !== j && (j = dl.t6(dm.b0.o9[j]), jx = dl.lv(j) - 15, j = dl.lw(j) - 15, eO.tp(jx, j, 29 + jx, 29 + j))
	}

	function aCJ(aCK) {
		Math.abs(Math.log(aC5 / aC2)) < .125 && (aC5 = aCK * aC2)
	}

	function aCI(jx, jy, jz, k0) {
		aC3 = (jx + jz + 1) / 2, aC4 = (jy + k0 + 1) / 2;
		jz = bI.ce / (jz - jx + 1), jx = bI.cf / (k0 - jy + 1);
		aC5 = .9 * (jz < jx ? jz : jx)
	}
	this.aCA = function() {
		return aC7
	}, this.eP = function() {
		aC9(1), this.tp(0, 0, a2.a3 - 1, a2.a4 - 1), aP.d5 || aP.d1 || this.tn(aP.cs, 3e3, !0, .3)
	}, this.tq = function(player, tr) {
		aCB(dm.g8.aCC(player, tr))
	}, this.tn = function(player, tN, aCD, zoom) {
		aP.d4 || aC7 && !aCD && aC8 || (0 === ad.el[player] ? aCB(dm.g8.aCE(player)) : (e3.a6z = !1, aC8 = aCD, aC9(tN), function(player) {
			aC3 = (ad.mj[player] + ad.mm[player] + 1) / 2, aC4 = (ad.mk[player] + ad.mn[player] + 1) / 2
		}(player), function(zoom, player) {
			var mv = ad.mm[player] - ad.mj[player] + 1,
				player = ad.mn[player] - ad.mk[player] + 1,
				bc = bI.ce / mv,
				bd = bI.cf / player,
				bc = (aC5 = bc < bd ? bc : bd, 0 !== zoom ? zoom : mv < 20 && player < 20 ? .5 : .9);
			aC5 *= bc, aCJ(7 / 8)
		}(zoom, player), aC7 = !0, a3R.a9b()))
	}, this.aCH = function(tN) {
		aP.d1 || aP.d4 || (e3.a6z = !1, aC8 = !1, aC9(tN), aCI(0, 0, a2.a3 - 1, a2.a4 - 1), aCJ(7 / 8), aC7 = !0, a3R.a9b())
	}, this.tp = function(jx, jy, jz, k0) {
		aC7 = !1, aCI(jx, jy, jz, k0), fX = aC5, e3.a74(aC3, bI.ce / 2), e3.a76(aC4, bI.cf / 2), zS.s3(), eK.eN = !0
	}, this.k6 = function() {
		return !(aC7 && aC8 || (aC7 = !1))
	}, this.iL = function() {
		var aCM, aCN, ao, aCQ;
		aC7 && (aBx < .5 ? cg < aBz && (cg += aBz * ch, aBy = aBx) : 1 - aBy < aBx && (cg = (cg -= aBz * ch) < aBz * ch ? aBz * ch : cg), a7b = a7b >= eK.iJ ? eK.iJ - 1 : a7b, ao = eK.iJ - a7b, aBx = 1e3 < ao || 1 < (aBx += cg * ao / aC6) ? 1 :
			aBx, a7b = eK.iJ, ao = fX, aCM = n5, aCN = n6, ao = (fX = aC2 * Math.pow(aC5 / aC2, aBx)) / ao, aCQ = 1 - (aC2 * Math.pow(aC5 / aC2, 1 - aBx) - aC2) / (aC5 - aC2), e3.a74(aC0 + aCQ * (aC3 - aC0), bI.ce / 2), e3.a76(aC1 + aCQ * (
				aC4 - aC1), bI.cf / 2), eG.zoom(ao, (aCM * ao - n5) / (1 - ao), (aCN * ao - n6) / (1 - ao)), zS.s3(), 1 <= aBx && (aC7 = !1, dj.zR = !0), eK.eN = !0)
	}
}

function aCR(aCS, aCT, aCU) {
	this.fm = 0, this.fn = 0, this.ce = 0, this.cf = 0, this.resize = function() {
		this.cf = Math.min(aS.bG.hs(aCU || .5) * aCS[1] * bI.ht, bI.cf - 2 * hn.gap), this.ce = Math.min(this.cf * (aCS[0] / aCS[1]), bI.ce - 2 * hn.gap), this.cf = aCS[1] * this.ce / aCS[0], this.fm = hn.gap + aCT[0] * (bI.ce - this.ce - 2 * hn
			.gap), this.fn = hn.gap + aCT[1] * (bI.cf - this.cf - 2 * hn.gap)
	}, this.aCV = function() {
		return this.fm + .5 * this.ce
	}
}

function aCW() {
	var aCX = null,
		aCY = 2e4,
		aCZ = 0;
	this.iL = function() {
		eK.iJ < aCY || (aCY = eK.iJ + 1e4, 0 !== bD.id) || aCX || ea.aCa() || (az.b0.b1(0) ? az.b2.qp(5) : aCY = eK.iJ + 1e3)
	}, this.qe = function(bt) {
		aCX = bt
	}, this.show = function() {
		return !(!aCX || eK.iJ < aCZ) && (__fx.settings.hidePropagandaPopup ? void 0 : (aCZ = eK.iJ + 6e4, (new au).show(aCX.ay, aCX.colors, aCX.id), !(aCX = null)))
	}
}

function a3u() {
	var tD, aCb, a7a, aCc, cf, tV, fontSize, aCd, aCe, vm, aCf, canvas, ff, a7b, aCg;

	function fA(j) {
		return L(0 === j ? 230 : 1 === j ? 231 : 2 === j ? 232 : 233)
	}

	function aCn() {
		aP.d7 ? a6u + 4 * hn.gap + cf + dx.a6d() > e4.fn ? fW.drawImage(canvas, 2 * hn.gap + dx.a6d(), a6u + 2 * hn.gap) : fW.drawImage(canvas, hn.gap, a6u + 3 * hn.gap + dx.a6d()) : fW.drawImage(canvas, hn.gap, a6u + 2 * hn.gap)
	}

	function aCh() {
		canvas.width = tD[0].width + vm, canvas.height = cf + vm, (ff = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tD[0].width + vm, cf + vm), ff.translate(Math.floor(vm / 2), Math.floor(vm / 2)), ff.lineWidth = vm, ff.fillStyle = 1 === tD[0].aCm ? fg.aCo : fg.fh, aCp(), ff.fill(), ff.strokeStyle = 1 === tD[0].aCm ? fg.lX : fg.fk,
			aCp(), ff.stroke(), aS.bG.textAlign(ff, 1), aS.bG.textBaseline(ff, 1), ff.fillStyle = 1 === tD[0].aCm ? fg.lX : fg.fk, ff.font = tV[0], ff.fillText(fA(tD[0].aCl), Math.floor(tD[0].width / 2), Math.floor(.72 * aCd[0] * cf)), ff.font = tV[
				1], ff.fillText(tD[0].bq, Math.floor(tD[0].width / 2), Math.floor((aCd[0] + .48 * aCd[1]) * cf))
	}

	function aCp() {
		ff.beginPath(), ff.moveTo(aCf, 0), ff.lineTo(tD[0].width - aCf, 0), ff.lineTo(tD[0].width, aCf), ff.lineTo(tD[0].width, cf - aCf), ff.lineTo(tD[0].width - aCf, cf), ff.lineTo(aCf, cf), ff.lineTo(0, cf - aCf), ff.lineTo(0, aCf), ff.closePath()
	}
	this.f = function() {
		aCb = 4, a7a = aCc = a7b = 0, tD = [], tV = new Array(2), fontSize = new Array(2), (aCd = new Array(2))[0] = .3, aCd[1] = .7, aCe = new Array(4), canvas = document.createElement("canvas"), aCg = eK.iJ + 2e3, this.resize()
	}, this.resize = function() {
		var j, ce;
		for (cf = Math.floor((bD.bE.bF() ? .062 : .047) * bI.ht), fontSize[0] = Math.floor(.85 * aCd[0] * cf), fontSize[1] = Math.floor(.85 * aCd[1] * cf), tV[0] = aS.bG.bQ(1, fontSize[0]), tV[1] = aS.bG.bQ(1, fontSize[1]), j = aCe.length -
			1; 0 <= j; j--) aCe[j] = this.measureText(fA(j) + "000", tV[0]);
		if (vm = Math.floor(1 + .05 * cf), aCf = Math.floor(.2 * cf), 0 < tD.length) {
			for (j = tD.length - 1; 0 <= j; j--) ce = this.measureText(tD[j].bq + "00", tV[1]), tD[j].width = ce < aCe[j] ? aCe[j] : ce;
			aCh()
		}
	}, this.iL = function() {
		0 !== aCb && (4 === aCb ? eK.iJ > aCg && (aCb = 0, 1 === aP.d2) && eA.uL(a2.uc.cS[a2.cI].name, 3, 1, 9) : (1 === aCb ? (0 === a7a && (aCh(), a7a = 1e-4), 1 <= (a7a += .002 * (eK.iJ - a7b)) && (aCc = 0, aCb = 2, a7a = 1), eK.eN = !0) :
				2 === aCb ? ((aCc += (eK.iJ - a7b) / 1e3) > tD[0].tN || 1 < aCc && 1 < tD.length) && (aCb = 3) : 3 === aCb && ((a7a -= .002 * (eK.iJ - a7b)) <= 0 && (a7a = 0, tD.shift(), aCb = 0 < tD.length ? 1 : 0), eK.eN = !0), a7b = eK.iJ
				))
	}, this.measureText = function(bq, tV) {
		return fW.font = tV, Math.floor(fW.measureText(bq).width)
	}, this.qe = function(aCk, j) {
		this.uL(ad.ll[aCk], j, 1, 0 === j ? 3 : 7)
	}, this.uL = function(bq, aCl, aCm, tN) {
		var ce;
		bq.length && (ce = (ce = this.measureText(bq + "00", tV[1])) < aCe[aCl] ? aCe[aCl] : ce, tD.push({
			bq: bq,
			width: ce,
			aCl: aCl,
			aCm: aCm,
			tN: tN
		}), 0 === aCb) && (a7a = 0, aCb = 1, a7b = eK.iJ)
	}, this.fc = function() {
		0 !== aCb && 0 !== a7a && (a7a < 1 ? (fW.globalAlpha = a7a, aCn(), fW.globalAlpha = 1) : aCn())
	}
}

function aCq() {
	this.aCr = function() {
		l.b0.aCs(), l.m.n(105, gE.gF.pW(gE.gF.pX(5))), l.m.n(106, gE.gF.pW(gE.gF.pX(15))), l.m.n(109, 0), l.m.n(108, l.bj.data[109].value), l.m.n(111, l.bj.data[109].value + 1), l.m.n(107, 0), l.m.n(110, "")
	}, this.aCt = function() {
		var data;
		qb.size < pJ.pK(29) ? az.b0.ql(0, 3254) : ((data = {
			rN: qb.pF(30),
			wU: qb.pF(16),
			wV: qb.pF(30),
			wW: qb.pF(30),
			wX: qb.pF(30),
			g0: qb.pG(32),
			username: pS.q2.qc(5),
			wY: pS.q2.qc(3),
			wZ: pS.q2.qc(3),
			wa: qb.pG(32),
			wb: qb.pG(32),
			wc: qb.pF(30),
			wd: qb.pG(32),
			we: qb.pG(32),
			wf: qb.pG(32),
			wg: qb.pG(32),
			aCu: qb.pG(32),
			aCv: qb.pG(30),
			aCw: qb.pG(32),
			aCx: pS.q2.qc(3),
			aCy: qb.pG(2),
			aCz: qb.pG(10),
			aD0: pS.q2.qc(8),
			aD1: qb.pG(5),
			aD2: qb.pF(30),
			aD3: qb.pF(30),
			aD4: qb.pG(32),
			aD5: qb.pF(3),
			aD6: qb.pF(8),
			aD7: qb.pF(1),
			aD8: qb.pF(1)
		}).aD7 && (data.aD9 = qb.pG(32), data.aDA = qb.pF(30), data.aDB = qb.pF(30), data.aDC = qb.pF(1)), 8 === c9.cA && (25 === c9.r2().aDD ? (data.aDE = !0, c9.b0.aB9 = data, c9.r2().r4(25, !1)) : (data.aDE = !1, l.m.n(160, +(data
			.aD7 && data.aDC)), data.cQ = l.bj.data[105].value, c9.b0.aB7 = data, l.m.wT(data), c9.r2().r4(16, !0))))
	}
}

function aDF() {
	function aDG(zm, zx, zz) {
		for (var ny = Math.min(zx, zz), k6 = Math.max(zx, zz), fn = ny + 1; fn < k6; fn++)
			if (!ag.zH(dl.a05(zm, fn))) return;
		return 1
	}

	function aDH(zn, zw, zy) {
		for (var ny = Math.min(zw, zy), k6 = Math.max(zw, zy), fm = ny + 1; fm < k6; fm++)
			if (!ag.zH(dl.a05(fm, zn))) return;
		return 1
	}

	function aDI(zw, zx, zy, zz, a8g, a8b) {
		for (var h = Math.min(Math.abs(zy - zw), Math.abs(zz - zx)), mv = Math.sign(zy - zw), mw = Math.sign(zz - zx), j = 0; j < h; j++)
			if (!ag.zH(dl.a05(zw += mv, zx += mw))) return null;
		return zw === zy ? aDG(zw, zx, zz) ? new Uint32Array([a8g, dl.a04(zw, zx), a8b]) : null : aDH(zx, zw, zy) ? new Uint32Array([a8g, dl.a04(zw, zx), a8b]) : null
	}
	this.y3 = function(a8g, a8b) {
		a8g = function(a8g, a8b) {
			var zw = dl.lv(a8g),
				zx = dl.lw(a8g),
				zy = dl.lv(a8b),
				zz = dl.lw(a8b);
			if (zw === zy) {
				if (aDG(zw, zx, zz)) return new Uint32Array([a8g, a8b])
			} else {
				if (zx !== zz) return aDI(zw, zx, zy, zz, a8g, a8b) || aDI(zy, zz, zw, zx, a8g, a8b);
				if (aDH(zx, zw, zy)) return new Uint32Array([a8g, a8b])
			}
			return null
		}(a8g, a8b);
		return null === a8g ? -1 : dm.tA.a8i(a8g)
	}
}

function aBI() {
	var ew, ex, ey, fB;

	function f1() {
		f5(), 2 !== aP.data.sResourcesType && (aP.data.sResourcesData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		2 === aP.data.sResourcesType && aS.f8.f9(ey.fA(), aP.data.sResourcesData, 2047)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(234), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), fF.fI(new a({
			i: [L(45), L(46), L(47)],
			value: aP.data.sResourcesType
		}, function(k) {
			f5(), 2 !== k || aP.data.sResourcesData || (aP.data.sResourcesData = new Uint16Array(aP.aj)), aP.data.sResourcesType = k, c9.ed(28)
		})), fB.push(fF)
	}(fB = []), function(fB) {
		var fF;
		1 === aP.data.sResourcesType && ((fF = new fG).fH("Value"), fF.fJ(new fK({
			k: -1,
			value: aP.data.sResourcesValue
		}, 1, 0, function(b8) {
			var value = aN.fL(Math.floor(b8.target.value), 0, 2047);
			b8.target.value = aP.data.sResourcesValue = value
		})), fB.push(fF))
	}(fB), function(fB) {
		var fF;
		2 === aP.data.sResourcesType && ((fF = new fG).fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.sResourcesData, 2)), fF.fJ(ey), fB.push(fF))
	}(fB), fB))
}

function a3g() {
	this.aO = function(bc, bd) {
		return Math.floor((bc + .5) / bd)
	}, this.aDJ = function(bc, bd) {
		return Math.floor(bc * (bd + .5))
	}, this.sqrt = function(h9) {
		return ~~Math.sqrt(h9 + .5)
	}, this.pow = function(b8) {
		return Math.floor(Math.pow(2, b8) + .5)
	}, this.fL = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aDK = function(gf, gh, gj) {
		return Math.max(Math.min(gf, gh), gj)
	}, this.aDL = function(aDM, aDN, fm, fn) {
		fm -= aDM, aDM = fn - aDN, fn = 0;
		return 0 == fm ? fn = 0 <= aDM ? Math.PI : 0 : (fn = Math.atan(aDM / fm), fn += 0 < fm ? .5 * Math.PI : 1.5 * Math.PI), fn
	}, this.log2 = function(h9) {
		return Math.floor(!!h9 * (1 + Math.log2(h9 + .5)))
	}, this.log10 = function(h9) {
		return Math.floor(Math.log10(h9 + .5))
	}, this.aDP = function(a1l, a1m, aDQ, aDR, aDS) {
		return aDQ - aDS < a1l && a1l < aDQ + aDS && aDR - aDS < a1m && a1m < aDR + aDS
	}, this.a66 = function(ox, oy) {
		return ox * ox + oy * oy
	}
}

function aDT() {
	this.aDU = function(qC) {
		var aDd;
		pJ.cM(55), pJ.q9(1, 0), pJ.q9(6, 13), pJ.q9(14, dT.a9l), pJ.q9(4, bD.id), pJ.q9(7, bD.jn), pJ.q9(1, +dT.aDb), pJ.q9(1, +dT.aDc), pJ.q9(5, (new Date).getHours() % 24), aDd = qN.aDe(), pJ.q9(8, aDd[0]), pJ.q9(8, aDd[1]), az.b0.send(qC, pJ
			.pD)
	}, this.qo = function(qC, qg, qn, qm) {
		pJ.cM(100), pJ.q9(1, 0), pJ.q9(6, 14), pJ.q9(3, qm), pJ.q9(30, qg[0]), pJ.q9(30, qg[1]), pJ.q9(30, qn), az.b0.send(qC, pJ.pD)
	}, this.qj = function(qC, qg) {
		pJ.cM(37), pJ.q9(1, 0), pJ.q9(6, 30), pJ.q9(30, qg), az.b0.send(qC, pJ.pD)
	}, this.qp = function(id) {
		pJ.cM(13), pJ.q9(1, 0), pJ.q9(6, 15), pJ.q9(6, id), az.b0.send(0, pJ.pD)
	}, this.b3 = function(id, value) {
		pJ.cM(43), pJ.q9(1, 0), pJ.q9(6, 3), pJ.q9(6, id), pJ.q9(30, value), az.b0.send(0, pJ.pD)
	}, this.aDW = function(id, bq) {
		var h = Math.min(bq.length, 63);
		pJ.cM(19 + 16 * h), pJ.q9(1, 0), pJ.q9(6, 26), pJ.q9(6, id), pJ.q9(6, h), gE.pT.qJ(bq), az.b0.send(0, pJ.pD)
	}, this.aDX = function(aDY, g3) {
		pJ.cM(7 + 26 * g3.length), pJ.q9(1, 0), pJ.q9(6, 9);
		for (var j = 0; j < g3.length; j++) pJ.q9(16, g3[j][0]), pJ.q9(10, g3[j][1]);
		az.b0.send(aDY, pJ.pD)
	}, this.a7v = function(aDZ, aDa) {
		pJ.cM(20), pJ.q9(1, 0), pJ.q9(6, 19), pJ.q9(1, aDZ), pJ.q9(12, aDa), az.b0.send(az.b0.qY, pJ.pD)
	}, this.aDf = function(username) {
		pJ.q9(5, username.length), gE.pT.qJ(username)
	}
}

function aBA() {
	var r9, aDg, aDh, aDj;

	function aDi(j) {
		c9.ed(8, c9.cA, new rX(21, {
			rE: j,
			rV: 0,
			rY: 10
		}))
	}
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), aDg.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, aDh = [new bV(L(235), function() {
		aDi(1)
	}, 0, 0, 1), new bV(L(236), function() {
		aDi(2)
	}, 0, 0, 1), new bV(L(237), function() {
		aDi(3)
	}, 0, 0, 1), new bV(L(238), function() {
		aDi(0)
	}, 0, 0, 1), new bV(L(239), function() {
		aDi(9)
	}, 0, 0, 1), new bV(L(82), function() {
		aDi(10)
	}, 0, 0, 1), new bV(L(83), function() {
		aDi(11)
	}, 0, 0, 1)], aDj = [new bV("⬅️ " + L(43), function() {
		c9.f7()
	})], r9 = new f0(L(240), aDj), aDg = new aDk(aDh, r9.f3)
}

function a4O() {
	this.cC = 0;
	var aDl, aDm, aDn, aDo, aDp, aDq = this.a9j = 0;

	function aDt() {
		aDo = aDp = null, aDq = 0
	}
	this.f = function(bz, c4, c5) {
		c9.wO(), bx.pE(), cL.setState(10), aDo = bz, aDp = c4, aDq = c5, this.cC = bz.cC, this.a9j = c5, aDl = 0, aDm = eK.iJ + 4500, az.b0.qY = bz.qY, az.b0.a5D === bz.qY ? (console.log("direct pass"), aDn = 0) : (console.log("delayed pass"), az
			.b0.close(az.b0.a5D, 3247), aDn = 2, az.b0.aDr(bz.qY, 5) && az.qv.qw()), fW.imageSmoothingEnabled = !0, cL.fV();
		c4 = ml.a58("loading"), c5 = (bD.bE.bF() ? .396 : .25) * bI.ht / c4.width;
		fW.setTransform(c5, 0, 0, c5, Math.floor((bI.ce - c5 * c4.width) / 2), Math.floor((bI.cf - c5 * c4.height) / 2)), fW.imageSmoothingEnabled = !1, fW.drawImage(c4, 0, 0), fW.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aDu = function() {
		0 < aDn && eK.iJ > aDm && (aDn--, aDm += 4500, 0 === eK.iH) && 0 === eK.lf() && az.b0.aDr(az.b0.qY, 5)
	}, this.aDv = function() {
		return 10 === cL.qs() && (bx.aDw.cE(aDo, aDp, aDq), aDt(), !0)
	}, this.aDx = function() {
		10 === cL.qs() && 2 <= ++aDl && (bx.aDw.cE(aDo, aDp, aDq), aDt())
	}
}

function a4l() {
	function aE0(b8) {
		var bk, b8 = b8.target.files;
		b8 && 0 < b8.length && (b8 = b8[0], "json" === (bk = b8.name.split("."))[bk.length - 1].toLowerCase()) && ((bk = new FileReader).onload = aEC, bk.readAsText(b8))
	}

	function aEC(b8) {
		var aEG;
		aP.d2 || (b8 = JSON.parse(b8.target.result), aEG = aP.data = new cF, aEH(b8, aEG, "mapType", 0, 2), aEH(b8, aEG, "mapProceduralIndex", 0, 255), aEH(b8, aEG, "mapRealisticIndex", 0, 255), aEH(b8, aEG, "mapSeed", 0, 16383), function(aEF, aEG,
				an, max) {
				aEF = aEF[an];
				aEG[an] = aEN(aEF) ? aEF.slice(0, max) : aEG[an]
			}(b8, aEG, "mapName", 20), function(aEF, aEG, an) {
				var pa;
				2 === aEG.mapType && (!aEN(aEF = aEF[an]) || aEF.length <= 20 ? aEG.mapType = 0 : ((pa = new Image).onload = function() {
					dw.pb.pc(pa, 1), pa.onload = null, pa = null
				}, pa.src = aEF))
			}(b8, aEG, "canvas"), aEH(b8, aEG, "passableWater", 0, 1), aEH(b8, aEG, "passableMountains", 0, 1), aEH(b8, aEG, "playerCount", 1, 512), aEH(b8, aEG, "humanCount", 1, 1), aEH(b8, aEG, "selectedPlayer", 0, 0), aEH(b8, aEG, "gameMode",
				0, 1), aEH(b8, aEG, "playerMode", 0, 0), aEH(b8, aEG, "battleRoyaleMode", 0, 0), aEH(b8, aEG, "numberTeams", 0, 8), aEH(b8, aEG, "isZombieMode", 0, 0), aEH(b8, aEG, "isContest", 0, 0), aEH(b8, aEG, "isReplay", 0, 0), aEK(b8, aEG,
				"elo", 16, 2, 16383), aEH(b8, aEG, "colorsType", 0, 1), aEH(b8, aEG, "colorsPersonalized", 0, 1), aEK(b8, aEG, "colorsData", 32, 512, 262143), aEH(b8, aEG, "selectableColor", 0, 1), aEK(b8, aEG, "teamPlayerCount", 16, 9, 512),
			aEH(b8, aEG, "neutralBots", 0, 1), aEH(b8, aEG, "botDifficultyType", 0, 3), aEH(b8, aEG, "botDifficultyValue", 0, 15), aEK(b8, aEG, "botDifficultyTeam", 8, 9, 15), aEK(b8, aEG, "botDifficultyData", 8, 512, 15), aEH(b8, aEG,
				"spawningType", 0, 2), aEH(b8, aEG, "spawningSeed", 0, 16383), aEK(b8, aEG, "spawningData", 16, 1024, 4095), aEH(b8, aEG, "selectableSpawn", 0, 1), aEH(b8, aEG, "playerNamesType", 0, 2),
			function(aEF, aEG, an, size, max) {
				var vT = aEF[an];
				if (Array.isArray(vT)) {
					for (var vW = new Array(size), h = Math.min(vT.length, size), j = 0; j < h; j++) vW[j] = aEN(vT[j]) ? vT[j].slice(0, max) : "";
					vW.fill("", h), aEG[an] = vW
				}
			}(b8, aEG, "playerNamesData", 512, 20), aEH(b8, aEG, "selectableName", 0, 1), aEH(b8, aEG, "aIncomeType", 0, 2), aEH(b8, aEG, "aIncomeValue", 0, 255), aEK(b8, aEG, "aIncomeData", 8, 512, 255), aEH(b8, aEG, "tIncomeType", 0, 2), aEH(
				b8, aEG, "tIncomeValue", 0, 255), aEK(b8, aEG, "tIncomeData", 8, 512, 255), aEH(b8, aEG, "iIncomeType", 0, 2), aEH(b8, aEG, "iIncomeValue", 0, 255), aEK(b8, aEG, "iIncomeData", 8, 512, 255), aEH(b8, aEG, "sResourcesType", 0, 2),
			aEH(b8, aEG, "sResourcesValue", 0, 2047), aEK(b8, aEG, "sResourcesData", 16, 512, 2047), c9.wO(), c9.b0.aEE[0] = 0, c9.ed(19))
	}

	function aEH(aEF, aEG, an, min, max) {
		aEF = aEF[an];
		aEG[an] = "number" == typeof aEF && min <= aEF && aEF <= max ? Math.floor(aEF) : aEG[an]
	}

	function aEN(bq) {
		return "string" == typeof bq
	}

	function aEK(aEF, aEG, an, aEO, size, max) {
		var vT = aEF[an];
		if (Array.isArray(vT)) {
			for (var vW = new(8 === aEO ? Uint8Array : 16 === aEO ? Uint16Array : Uint32Array)(size), h = Math.min(vT.length, size), j = 0; j < h; j++) vW[j] = aN.fL(vT[j], 0, max);
			aEG[an] = vW
		}
	}
	this.aDz = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aE0, input.click()
	}, this.aE1 = function() {
		for (var aE4, aE7, a7h = aP.data, keys = Object.keys(a7h), aE2 = {}, j = 0; j < keys.length; j++) {
			var key = keys[j];
			a7h[key] instanceof Uint8Array || a7h[key] instanceof Uint16Array || a7h[key] instanceof Uint32Array ? aE2[key] = Array.from(a7h[key]) : aE2[key] = a7h[key]
		}
		aE2.canvas = 2 === aE2.mapType && aE2.canvas ? aE2.canvas.toDataURL() : null, aE4 = aE2, aE4 = JSON.stringify(aE4, null, 2), aE4 = new Blob([aE4], {
			type: "application/json"
		}), (aE7 = document.createElement("a")).href = URL.createObjectURL(aE4), aE7.download = "tt_scenario.json", aE7.click()
	}
}

function aEP() {
	this.iL = function(player) {
		var a8e = function(player) {
			for (var tA = dm.tA.aER(), h = tA.length, bl = Math.min(h, 32), j8 = dV.rl(h), j = 0; j < bl; j++) {
				var a8e = (j + j8) % h,
					oM = tA[a8e],
					zt = oM[0],
					zu = oM[oM.length - 1];
				if (dm.g8.aES(player, zt) && dm.g8.a8c(player, zu)) return a8e;
				if (dm.g8.aES(player, zu) && dm.g8.a8c(player, zt)) return 0 <= (a8e = dm.tA.a8h(zu, zt)) ? a8e : dm.tA.yA() ? -1 : dm.tA.a8i(dm.tA.tB(oM))
			}
			return -1
		}(player);
		return -1 !== a8e && (a8e = dm.tA.get(a8e), !dm.g8.aEQ(player, a8e)) && (dN.bk[0] = a8e, !0)
	}
}

function a4Q() {
	this.aET = function(player) {
		eF.aEU(player), aP.cw++, ad.gq[player] = 2, ad.qX[player] = qh.aEV.aEW(), player === aP.cs && (eE.show(!1, !1), e8.aEX(), dO.aEY.aEZ()), eG.nm(player)
	}
}

function a4C() {
	var aEa;
	this.a9P = null, this.aEb = 0, this.f = function() {
		aEa = [], 9 === aP.dA && this.aEc()
	}, this.aEc = function() {
		this.a9P = [0, 0, 0, 0, 0, 0];
		for (var aEd = [256, 227, 170, 148, 100, this.aEb = 0, 0, 0], aEe = [0, 8, 24, 30, 46, 70, 256, 333], aEf = [0, 0, 3, 7, 14, 22, 256, 179], cf = aP.ct, j = 1; j < aEd.length; j++)
			if (cf <= aEe[j]) {
				this.aEb = aEd[j - 1] - aN.aO((cf - aEe[j - 1]) * (aEd[j - 1] - aEd[j]), aEe[j] - aEe[j - 1]), this.a9P[5] = aEf[j - 1] - aN.aO((cf - aEe[j - 1]) * (aEf[j - 1] - aEf[j]), aEe[j] - aEe[j - 1]), this.a9P[0] = aP.aj - cf - this.aEb -
					this.a9P[5];
				break
			} aP.cv = aP.aj - aP.ct, aP.data.numberTeams = (0 < aP.ct) + (0 < aP.cv), aP.data.playerCount = aP.cx = aP.ct + aP.cv, aP.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aP.ct + this.aEb, aP.cv - this.aEb]), aP.dK.dR()
	}, this.aEg = function(player) {
		aEa.push({
			player: player,
			ae: 14 + dV.rl(20)
		})
	}, this.iL = function() {
		if (9 === aP.dA)
			for (var j = aEa.length - 1; 0 <= j; j--) --aEa[j].ae <= 0 && (eG.mo(aEa[j].player, 0, mr.ms.sM + mr.ms.sO), aEa.splice(j))
	}
}

function aB2() {
	var r9, aDg, aDh, aDj;

	function aEi(id) {
		0 !== bD.id || l.bj.data[140].value ? 0 === id ? c9.ed(8, 1, new rX(16)) : c9.ed(2) : c9.b0.aEr(c9.cA, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bD.bE.setState(12), r9.show(), this.resize(), this.iL()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), aDg.resize()
	}, this.iL = function() {
		8 === cL.qs() && (2 <= aZ.vu ? aDh[2].aEt === fg.aEu && aDh[2].jU(0) : aDh[2].aEt !== fg.aEu && aDh[2].jU(fg.aEu), !aP.d1 && e9.a9C(aP.cs) ? aDh[1].aEt === fg.aEu && aDh[1].jU(0) : aDh[1].aEt !== fg.aEu && aDh[1].jU(fg.aEu), !aP.d1 && e6
			.a1A(aP.cs) ? aDh[0].aEt === fg.aEu && aDh[0].jU(0) : aDh[0].aEt !== fg.aEu && aDh[0].jU(fg.aEu))
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, aDh = [new bV(L(241), function() {
		aEi(0)
	}), new bV(L(240), function() {
		c9.ed(16)
	}), new bV(L(242), function() {
		c9.ed(17)
	}), new bV(L(243), function() {
		c9.b0.a0O()
	}, 0, 0, 1), new bV(L(244), function() {
		c9.ed(3, 1)
	}), new bV(L(245), function() {
		c9.ed(18)
	}), new bV(L(48), function() {
		c9.ed(31)
	}), new bV(L(246), function() {
		aEi(1)
	}), new bV(L(247), function() {
		var i0 = ["Patreon", L(257), L(258), "YouTube Tutorial", "Discord", L(259), L(235), L(260), L(238), L(261), "Terms", "Privacy"],
			i1 = [a3V.xd, a3V.xe, a3V.xf, "https://www.youtube.com/watch?v=6QBmA9N1668", a3V.xh, a3V.xV, a3V.xb, a3V.xc, a3V.xa, a3V.xZ, a3V.xW, a3V.xY];
		1 === bD.id ? (i0.splice(2, 1), i0.splice(0, 1), i1.splice(2, 1), i1.splice(0, 1)) : 2 === bD.id && (i0.splice(1, 1), i0.splice(0, 1), i1.splice(1, 1), i1.splice(0, 1)), c9.ed(4, 1, new a5G(L(247), aS.bG.hz(i0, i1), !1, [new bV(
			"⬅️ " + L(43),
			function() {
				c9.ed(1)
			})]))
	}), new bV(L(248), function() {
		c9.ed(4, 1, new a5G(L(248), dT.jn + "<br><a href='" + a3V.xV + "' target='_blank'>" + a3V.xV + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new bV("⬅️ " + L(43), function() {
				c9.ed(1)
			})]))
	}), new bV(L(249), function() {
		c9.ed(4, 1, new a5G(L(249), L(262) + "<br>" + L(263), !1, [new bV("⬅️ " + L(43), function() {
			c9.ed(1)
		}), new bV(L(264), function() {
			bD.bE.aEs(), c9.ed(1)
		})]))
	}), new bV(L(250), function() {
		bD.bE.aEm(), c9.ed(4, 1, new a5G(L(265), L(266) + " <a href='" + a3V.xY + "' target='_blank'>" + a3V.xY + "</a>", !1, [new bV("⬅️ " + L(43), function() {
			c9.ed(1)
		})]))
	})], aDj = [new bV("⬅️ " + L(43), function() {
		c9.b0.aEn()
	})], 8 === cL.qs() && (aDh.unshift(new bV(L(253), function() {
		c9.ed(30)
	})), aDh.unshift(new bV(L(254), function() {
		2 <= aZ.vu && (c9.wO(), dz.vt(), eK.eN = !0)
	}, 0, 1)), aDh.unshift(new bV(L(255), function() {
		!aP.d1 && e9.a9C(aP.cs) && (db.a0n.a5e(), c9.wO(), e9.ef) && e9.vt()
	}, 0, 1)), aDh.unshift(new bV(L(256), function() {
		!aP.d1 && e6.a1A(aP.cs) && (dp.aEq(2), db.a0n.a17(), c9.wO(), e9.ef) && e9.vt()
	}, 0, 1))), 1 === bD.id && 5 <= bD.jn && aDh.push(new bV(L(251), function() {
		bD.bE.aEp()
	})), r9 = new f0(L(252), aDj), aDg = new aDk(aDh, r9.f3)
}

function aEv() {
	this.u9 = function(bq, font, maxWidth) {
		if (font && (fW.font = font), fW.measureText(bq).width <= maxWidth) return bq;
		for (var j = bq.length - 1; 1 <= j; j--)
			if (bq = bq.substring(0, j), fW.measureText(bq + "...").width <= maxWidth) return bq + "...";
		return "..."
	}
}

function aEx() {
	this.aEy = function(bk) {
		bk.fill(0)
	}, this.aEz = function(bk) {
		for (var h = bk.length, j = 0; j < h; j++) bk[j] = []
	}, this.a1h = function(nk, my) {
		for (var nl = dN.gU, j = 0; j < 3; j++) nl[j] = my * nk[j];
		return nl
	}, this.a1i = function(nk, nl, aF0) {
		for (var rT = 0, j = 0; j < 3; j++) rT += Math.abs(nk[j] - nl[j]);
		return aF0 <= rT
	}, this.a1j = function(nk, aF1) {
		for (var j = 0; j < 3; j++) nk[j] = aN.fL(nk[j] + aF1, 0, 255);
		return nk
	}, this.a34 = function(bk, rV, rY) {
		rY = rY || bk.length - 1;
		for (var a6b = 0, j = rV = rV || 0; j <= rY; j++) a6b += bk[j];
		return a6b
	}, this.aF2 = function(bk, aF3) {
		for (var j, aF4, h = bk.length, aF5 = [], bc = h - 1; 0 <= bc; bc--) {
			for (j = aF4 = 0; j < h; j++) aF3(bk[j]) < aF3(bk[aF4]) && (aF4 = j);
			h--, aF5.push(bk[aF4]), bk[aF4] = bk[h], bk.pop()
		}
		return aF5
	}, this.min = function(bk) {
		var j, h9, h = bk.length;
		if (0 === h) return 0;
		for (h9 = bk[0], j = 1; j < h; j++) h9 = Math.min(h9, bk[j]);
		return h9
	}, this.max = function(bk) {
		var h = bk.length;
		if (0 === h) return 0;
		for (var h9 = bk[0], j = 1; j < h; j++) h9 = Math.max(h9, bk[j]);
		return h9
	}, this.aF6 = function(bk, h9) {
		for (var h = bk.length, ae = 0, j = 0; j < h; j++) ae += bk[j] > h9;
		return ae
	}, this.aF7 = function(vT, vW, min) {
		for (var h = vW[0], j = h - 1; 0 <= j; j--) vT[j] < min && (vT[j] = vT[--h]);
		vW[0] = h
	}, this.aF8 = function(bk, h, value) {
		for (var j = 0; j < h; j++) bk[j] -= value
	}, this.aF9 = function(bk) {
		for (var h = bk.length, j = 0; j < h; j++)
			if ("string" != typeof bk[j]) return !1;
		return !0
	}, this.f9 = function(bq, bk, aFA) {
		bk.fill(0);
		for (var gJ = bq.split(","), h = Math.min(gJ.length, bk.length), j = 0; j < h; j++) bk[j] = Math.min(parseInt(gJ[j]), aFA)
	}, this.a35 = function(bq, bk, aFB) {
		bk.fill("");
		for (var gJ = bq.split('"'), h = Math.min(gJ.length, 2 * bk.length), j8 = 0, j = 1; j < h; j += 2) bk[j8++] = gJ[j].slice(0, aFB)
	}, this.aFC = function(bk, ae) {
		if (0 === ae) bk.fill(0);
		else {
			var a6b = this.a34(bk),
				h = bk.length;
			if (0 === a6b) bk.fill(aN.aO(ae, h));
			else
				for (var j = 0; j < h; j++) bk[j] = aN.aO(ae * bk[j], a6b);
			if (0 === (a6b = this.a34(bk))) bk[1] = ae;
			else
				for (var j8 = 0; a6b++ < ae;) bk[j8 = (j8 + 1) % h] && bk[j8]++
		}
	}, this.yG = function(bk) {
		if (!bk) return 0;
		var h = bk.length;
		if (0 === h) return 0;
		for (var h9 = bk[h - 1], j = h - 2; 0 <= j; j--)
			if (bk[j] !== h9) return j + 2;
		return 1
	}, this.aFD = function(bk) {
		for (var a6b = 0, j = 0; j < bk.length; j++) a6b += bk[j].length;
		return a6b
	}, this.aFE = function(aFF) {
		for (var bk = [], j = 0; j < aFF.length; j++) bk = bk.concat(aFF[j]);
		return bk
	}, this.has = function(bk, h9) {
		for (var h = bk.length, j = 0; j < h; j++)
			if (bk[j] === h9) return !0;
		return !1
	}
}

function aFG() {
	var aFI, aFK;
	this.aFH = 5, this.aFJ = null;

	function aFR(j) {
		return aFK[j].a9R && aFI[j].aFR()
	}

	function aFN(qC) {
		aFK[qC].iJ = eK.iJ, aFK[qC].a9i = !1
	}
	this.qY = 0, this.a5D = 0, this.f = function() {
		this.aFJ = new Array(this.aFH);
		this.aFJ[0] = "territorial.io";
		var ci = dV.aFM(0);
		dV.dW(0);
		for (var j = 1; j < this.aFH; j++) this.aFJ[j] = a3L.v4() + ".territorial.io";
		for (dV.dW(ci), aFI = new Array(this.aFH), aFK = new Array(this.aFH), j = this.aFH - 1; 0 <= j; j--) aFK[j] = {
			a9R: !1,
			iJ: 0,
			a9i: !1
		};
		this.aDr(0, 0)
	}, this.qq = function(j) {
		return aFI[j]
	}, this.iL = function() {
		for (var j = this.aFH - 1; 0 <= j; j--) this.b1(j) && eK.iJ > aFK[j].iJ + 15e3 && (az.qv.a9h(j, aFK[j].a9i), aFN(j));
		!this.b1(0) && eK.iJ > aFK[0].iJ + 8e3 && (aFK[0].iJ = eK.iJ, this.aDr(0, 0))
	}, this.aFO = function(id) {
		return this.aDr(0, id) && this.aFP(0)
	}, this.aDr = function(qC, rW) {
		if (aFK[qC].a9R) {
			if (aFI[qC].aFR()) return aFI[qC].aFS(rW), aFI[qC].b1();
			aFI[qC].fQ()
		}
		return this.aFQ(qC, rW), !1
	}, this.aFQ = function(qC, rW) {
		aFK[qC].a9R = !0, aFN(qC), aFI[qC] = new aFT, aFI[qC].f(qC, rW)
	}, this.aFS = function(qC, rW) {
		aFR(qC) && aFI[qC].aFS(rW)
	}, this.aFU = function(qC, rW) {
		az.b2.aDU(qC)
	}, this.aFP = function(j) {
		return this.b1(j) && aFI[j].aFP()
	}, this.qy = function(j) {
		aFI[j].qy()
	}, this.b1 = function(j) {
		return aFK[j].a9R && aFI[j].b1()
	}, this.send = function(qC, pD) {
		0 !== qC && aFN(qC), aFI[qC].send(pD)
	}, this.aAC = function(qC) {
		8 === cL.qs() && (aFK[qC].a9i = !0, az.aFV.a7u = !0)
	}, this.close = function(qC, aFW) {
		aFR(qC) && aFI[qC].close(aFW)
	}, this.ql = function(qC, aFW) {
		a3b.a5K(aFW), aFR(qC) && aFI[qC].close(aFW)
	}, this.a5P = function(aFW) {
		for (var j = this.aFH - 1; 0 <= j; j--) this.close(j, aFW)
	}, this.aFX = function(qC, aFW) {
		for (var j = this.aFH - 1; 0 <= j; j--) j !== qC && this.close(j, aFW)
	}, this.eY = function() {
		0 === this.qY && (aP.d0 || aP.d1) || this.close(this.qY, 3246)
	}, this.aFY = function(qC, b8) {
		aFI[qC].fQ(), a3b.a5A(qC, b8.code)
	}
}

function a4W() {
	function aFa() {
		8 === aP.dA && 1 === aP.d2 && dO.a38.aBq()
	}

	function aFZ(player) {
		aP.d5 ? (a3Q.aFc(player), du.aFd(), aP.d0 && aP.dC.iL()) : a3T.aET(player)
	}
	this.a5e = function(player) {
		eB.tP(player, player === aP.cs ? 21 : 22), aFZ(player), aFa()
	}, this.aFb = function(player) {
		1 === aP.d2 && 0 !== ad.eQ[player] && 2 !== ad.gq[player] && aFZ(player), aP.cu--, aP.cw--, eB.tP(player, 4), aS.aT.gn(2) && e8.eR(!0), aFa()
	}
}

function a4a() {
	this.a9l = 1115, this.aFe = 2140, this.rVersion = 15, this.aFf = 0, this.f = function() {
		this.dU = 2;
		var aX = aN.aO(this.aFe, 10) % 100;
		this.jn = "30 Nov 2025 [" + aN.aO(this.aFe, 1e3) + "." + (aX < 10 ? "0" : "") + aX + "." + this.aFe % 10 + "]", this.aDb = true, this.aDc = function() {
			try {
				return window.self !== window.top
			} catch (b8) {
				return !0
			}
		}(), this.a9k = (new Date).getTime() % 1048576
	}, this.a4w = 0
}

function aFi() {
	var nX = 32,
		nY = new Array(2);

	function hk(bt) {
		var fm, fn, ls, mw, mv, bC = nX,
			nb = aS.bG.hk(bC, bC),
			hl = aS.bG.getContext(nb, !0),
			a1X = aS.bG.getImageData(hl, bC, bC),
			nW = a1X.data,
			bl = (bC >> 1) - .5,
			so = Math.sqrt(bl * bl);
		for (nW.fill(255), fn = 0; fn < bC; fn++)
			for (fm = 0; fm < bC; fm++) mv = fm - bl, mw = fn - bl, ls = 4 * (fn * bC + fm), mv = 714 * (so - Math.sqrt(mv * mv + mw * mw)) / so, nW[2 + ls] = bt, nW[3 + ls] = 255 < mv ? 0 : mv;
		return hl.putImageData(a1X, 0, 0), nb
	}
	this.aFj = -1, this.f = function() {
		this.aFj = -1, nY[0] || (nY[0] = hk(255), nY[1] = hk(0))
	}, this.a9Q = function(hl, nw, fm, fn, rp, j) {
		aS.aT.gp(aP.cs) && (hl.setTransform(nw *= 4 / 3 * .625, 0, 0, nw, fm - (rp *= 4 / 3), fn - rp), hl.drawImage(nY[+(dm.b0.oD[j] === this.aFj)], 0, 0))
	}
}

function aBD() {
	var ew, ex, fB;

	function aFm() {
		var ae;
		1 === aP.data.gameMode ? (aP.data.teamPlayerCount || (aP.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aP.dK.dR()), ae = aS.f8.aF6(aP.data.teamPlayerCount, 0), aP.data.numberTeams = ae) : (2 === aP.data
			.botDifficultyType && (aP.data.botDifficultyType = 0), 1 === aP.data.spawningType && (aP.data.spawningType = 0))
	}

	function f1() {
		1 !== aP.data.gameMode && (aP.data.teamPlayerCount = null), aFo(), aP.data.canvas = null, c9.ed(5, 5)
	}

	function aFo() {
		dw.eU.f(), l.m.n(156, dw.eW.eX())
	}

	function aFk() {
		aP.data.isReplay = 0, aFo(), aP.dK.aFp(), cL.x9(), aP.dK.xA(), aP.data.canvas = 2 === aP.data.mapType ? a2.fY : null, aP.cN(), aP.cO = 1
	}

	function aG2() {
		aFm();
		for (var bk = [jC(), aFs(), aFt()], j = 3; j < 6; j++) c9.removeChild(ex.aG3, ex.a7n[j].iB), ex.a7n[j] = bk[j - 3], ex.aG3.appendChild(ex.a7n[j].iB);
		ex.resize()
	}

	function jC() {
		var aG4, fF = new fG;
		return fF.fH(L(51)), aG4 = 0 === aP.data.gameMode ? [L(62), L(47)][aP.data.colorsType] : aP.data.numberTeams + " Team" + (1 === aP.data.numberTeams ? "" : "s"), fF.jG(aG4), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(21)
		}).button])), fF
	}

	function aFs() {
		var fF = new fG,
			bk = (fF.fH(L(124)), [L(46) + ": " + dr.uC[aP.data.botDifficultyValue], L(272), L(273), L(47)]);
		return fF.jG(bk[aP.data.botDifficultyType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(25)
		}).button])), fF
	}

	function aFt() {
		var fF = new fG,
			bk = (fF.fH("Spawning"), [L(62), L(274), L(47)]);
		return fF.jG(bk[aP.data.spawningType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(24)
		}).button])), fF
	}
	this.show = function() {
		ew.show(), this.resize(), ew.f3.scrollTop = c9.b0.aEE[0]
	}, this.fQ = function() {
		c9.b0.aEE[0] = ew.f3.scrollTop, ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0("🔧 " + L(267), [new bV("⬅️ " + L(43), f1), new bV(L(268), aFk)]), aFm(), aP.data.canvas || (2 === aP.data.mapType ? aP.data.canvas = a2.fY : 1 === aP.data.mapType ? aP.data.canvas = a2.a2t(a2.a30(aP.data), 0).fY : (aP.data
		.mapType = 0, aP.data.passableWater = aP.data.passableMountains = 1, aP.data.canvas = a2.a2t(a2.a30(aP.data), aP.data.mapSeed).fY)), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG,
			nb = (fF.fH(L(269)), aP.data.canvas);
		nb.style.width = "100%", fF.fJ({
			b8: nb
		}), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(20)
		}).button])), fB.push(fF)
	}(fB = []), function(fB) {
		var fF = new fG;
		fF.fH(L(64)), fF.fJ(new fK({
			k: -1,
			value: aP.data.playerCount
		}, 1, 0, function(b8) {
			var playerCount = aN.fL(Math.floor(b8.target.value), 1, 512);
			b8.target.value = aP.data.playerCount = playerCount, 1 === aP.data.gameMode && (b8 = aS.f8.aF6(aP.data.teamPlayerCount, 0), aP.dK.dR(), aS.f8.aF6(aP.data.teamPlayerCount, 0) !== b8) && aG2()
		})), fB.push(fF)
	}(fB), function(fB) {
		var fF = new fG;
		fF.fH(L(271)), fF.fI(new a({
			i: ["Battle Royale", "Teams"],
			value: aP.data.gameMode
		}, function(k) {
			aP.data.gameMode !== k && (aP.data.gameMode = k, aG2())
		})), fB.push(fF)
	}(fB), fB.push(jC()), fB.push(aFs()), fB.push(aFt()), function(fB) {
		var fF = new fG,
			bk = (fF.fH(L(202)), [L(203), L(204), L(47)]);
		fF.jG(bk[aP.data.playerNamesType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(23)
		}).button])), fB.push(fF)
	}(fB), function(fB) {
		var fF = new fG,
			bk = (fF.fH(L(190)), [L(45), L(46) + ": " + aP.data.aIncomeValue, L(47)]);
		fF.jG(bk[aP.data.aIncomeType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(22)
		}).button])), fB.push(fF)
	}(fB), function(fB) {
		var fF = new fG,
			bk = (fF.fH(L(42)), [L(45), L(46) + ": " + aP.data.tIncomeValue, L(47)]);
		fF.jG(bk[aP.data.tIncomeType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(26)
		}).button])), fB.push(fF)
	}(fB), function(fB) {
		var fF = new fG,
			bk = (fF.fH(L(182)), [L(45), L(46) + ": " + aP.data.iIncomeValue, L(47)]);
		fF.jG(bk[aP.data.iIncomeType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(27)
		}).button])), fB.push(fF)
	}(fB), function(fB) {
		var fF = new fG,
			bk = (fF.fH(L(234)), [L(45), L(46) + ": " + aP.data.sResourcesValue, L(47)]);
		fF.jG(bk[aP.data.sResourcesType]), fF.fJ(new i9([new bV(L(270), function() {
			c9.ed(28)
		}).button])), fB.push(fF)
	}(fB), function(fB) {
		var fF = new fG;
		fF.fH(L(275)), fF.fJ(new i9([new bV(L(276), function() {
			c9.wO(), aP.dK.aG5(), c9.b0.aEE[0] = 0, c9.ed(19)
		}).button])), fF.fJ(new i9([new bV(L(277), function() {
			a3d.aDz()
		}).button])), fF.fJ(new i9([new bV(L(278), function() {
			return a3d.aE1(), !0
		}).button])), fB.push(fF)
	}(fB), fB))
}

function a4K() {
	var aG6, aG7, zH, a1c;
	this.f = function() {
		var j, fm, fn, aG8, aG9, ce, cf, ff, a1X, nW, h9, am, p0, bc, aGC;
		if (function() {
				if (zH = !0, a1c = "rgb(" + a2.vN[0] + "," + a2.vN[1] + "," + a2.vN[2] + ")", a2.a2y(a2.cI)) return 1;
				return zH = !1, 0
			}()) aG7 = null;
		else {
			for (aG6 = aN.aO(96, 4), aG9 = 1 === a2.cI ? (aG8 = 0, 160) : (aG8 = 128, 32), a1c = "rgb(" + aG8 + "," + aG8 + "," + aG8 + ")", aG7 = new Array(4), j = 3; 0 <= j; j--) {
				if (aG7[j] = document.createElement("canvas"), ce = j % 2 == 0 ? a2.a3 : aG6, cf = j % 2 == 0 ? aG6 : a2.a4 + 2 * aG6, aG7[j].width = ce, aG7[j].height = cf, nW = (a1X = (ff = aG7[j].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, ce, cf)).data, j % 2 == 0)
					for (fn = aG6 - 1; 0 <= fn; fn--)
						for (h9 = aG9 + Math.floor((fn + 1) * (aG8 - aG9) / (aG6 + 1)), fm = ce - 1; 0 <= fm; fm--) nW[am = 4 * ((0 === j ? aG6 - fn - 1 : fn) * ce + fm)] = h9, nW[am + 1] = h9, nW[am + 2] = h9, nW[am + 3] = 255;
				else {
					for (fm = aG6 - 1; 0 <= fm; fm--)
						for (h9 = aG9 + Math.floor((fm + 1) * (aG8 - aG9) / (aG6 + 1)), fn = cf - 1 - aG6; aG6 <= fn; fn--) nW[am = 4 * (fn * ce + (3 === j ? aG6 - fm - 1 : fm))] = h9, nW[am + 1] = h9, nW[am + 2] = h9, nW[am + 3] = 255;
					for (bc = 1; 0 <= bc; bc--)
						for (fm = aG6 - 1; 0 <= fm; fm--)
							for (fn = aG6 - 1; 0 <= fn; fn--) p0 = (Math.pow(fm * fm + fn * fn, .5) + 1) / (aG6 + 1), h9 = aG9 + Math.floor((1 < p0 ? 1 : p0) * (aG8 - aG9)), nW[am = 4 * ((0 === bc ? aG6 - fn - 1 : fn + bc * (cf - aG6)) * ce + (
								1 === j ? fm : aG6 - fm - 1))] = h9, nW[am + 1] = h9, nW[am + 2] = h9, nW[am + 3] = 255
				}
				ff.putImageData(a1X, 0, 0)
			}
			aGC = aG9, a2.a2g.fillStyle = "rgb(" + aGC + "," + aGC + "," + aGC + ")", a2.a2g.fillRect(0, 0, a2.a3, 1), a2.a2g.fillRect(0, a2.a4 - 1, a2.a3, 1), a2.a2g.fillRect(0, 0, 1, a2.a4), a2.a2g.fillRect(a2.a3 - 1, 0, 1, a2.a4)
		}
	}, this.fV = function() {
		var bc = zH ? 0 : -aG6;
		kP(bc, bc, a2.a3 - 2 * bc, a2.a4 - 2 * bc, zS.ry, zS.rz, zS.s0, zS.s1) || (fW.fillStyle = a1c, fW.fillRect(0, 0, bI.ce, bI.cf))
	}, this.fc = function() {
		zH || (kM(0, -aG6, a2.a3, aG6, zS.ry, zS.rz, zS.s0, zS.s1) && fW.drawImage(aG7[0], zS.rw, zS.rx - aG6), kM(a2.a3, -aG6, aG6, a2.a4 + 2 * aG6, zS.ry, zS.rz, zS.s0, zS.s1) && fW.drawImage(aG7[1], zS.rw + a2.a3, zS.rx - aG6), kM(0, a2.a4, a2
			.a3, aG6, zS.ry, zS.rz, zS.s0, zS.s1) && fW.drawImage(aG7[2], zS.rw, zS.rx + a2.a4), kM(-aG6, -aG6, aG6, a2.a4 + 2 * aG6, zS.ry, zS.rz, zS.s0, zS.s1) && fW.drawImage(aG7[3], zS.rw - aG6, zS.rx - aG6))
	}
}

function aBF() {
	var ew, ex, ey, fB;

	function f1() {
		f5(), 2 !== aP.data.aIncomeType && (aP.data.aIncomeData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		2 === aP.data.aIncomeType ? (aS.f8.f9(ey.fA(), aP.data.aIncomeData, 255), aS.f8.max(aP.data.aIncomeData) || (aP.data.aIncomeType = 0)) : 1 !== aP.data.aIncomeType || aP.data.aIncomeValue || (aP.data.aIncomeType = 0)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(190), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), fF.fI(new a({
			i: [L(45), L(46), L(47)],
			value: aP.data.aIncomeType
		}, function(k) {
			f5(), 2 !== k || aP.data.aIncomeData || (aP.data.aIncomeData = new Uint8Array(aP.aj)), aP.data.aIncomeType = k, c9.ed(22)
		})), fB.push(fF)
	}(fB = []), function(fB) {
		var fF;
		1 === aP.data.aIncomeType && ((fF = new fG).fH("Value"), fF.fJ(new fK({
			k: -1,
			value: aP.data.aIncomeValue
		}, 1, 0, function(b8) {
			var value = aN.fL(Math.floor(b8.target.value), 0, 255);
			b8.target.value = aP.data.aIncomeValue = value
		})), fB.push(fF))
	}(fB), function(fB) {
		var fF;
		2 === aP.data.aIncomeType && ((fF = new fG).fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.aIncomeData, 4)), fF.fJ(ey), fB.push(fF))
	}(fB), fB))
}

function a4P() {
	var aGD = 0,
		aGE = new Uint16Array(64);

	function aGG(sC) {
		aGD -= 2;
		for (var j = sC; j < aGD; j += 2) aGE[j] = aGE[j + 2], aGE[j + 1] = aGE[j + 3]
	}
	this.f = function() {
		aGD = 0
	}, this.iL = function() {
		var j, gt, hE;
		if (0 !== aGD)
			if (0 === ad.eQ[aP.cs]) aGD = 0;
			else if (0 === a8.a9(aP.cs)) aGD = 0;
		else
			for (j = aGD - 2; 0 <= j; j -= 2)(gt = aGE[j]) < aP.aj && 0 === ad.eQ[gt] ? aGG(j) : (hE = aGE[j + 1], (gt >= aP.aj && aC.a8L(aP.cs) || gt < aP.aj && aC.a8M(aP.cs, gt)) && (db.a0n.a0v(hE, gt), aGG(j)))
	}, this.a0w = function(gt, hE) {
		! function(gt, hE) {
			for (var j = 0; j < aGD; j += 2)
				if (aGE[j] === gt) return aGE[j + 1] = Math.min(aGE[j + 1] + hE, 1023), 1;
			return
		}(gt, hE) && 64 !== aGD && (aGE[aGD] = gt, aGE[aGD + 1] = hE, aGD += 2)
	}
}

function a43() {
	var aGI, aGJ, aGK, aGL, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, vb, aGT, aGU = 1;

	function aGW(aGX) {
		!aGX && 1 === aGT && aGU ? (aGU = 0, az.b0.close(aGT, 3280)) : aGT = (aGT + 1) % az.b0.aFH, vb = eK.iJ, az.b0.aDr(aGT, 4) && az.qt.qu(aGT)
	}

	function aGY() {
		0 === aGT ? a3b.a5K(3249) : aGW()
	}

	function aGe(fn, aGd, l9) {
		var jx = Math.floor((bI.ce - aGL) / 2) + aGO,
			jz = jx + Math.floor(l9 * (aGL - 2 * aGO));
		fW.lineWidth = aGd, fW.beginPath(), fW.moveTo(jx, fn), fW.lineTo(jz, fn), fW.lineTo(Math.floor(jx - aGO + l9 * aGL), fn + aGK), fW.lineTo(jx - aGO, fn + aGK), fW.closePath()
	}
	this.aGV = 1, this.f = function() {
		cL.setState(6), aGI = 0, aGJ = 1, aGP = "rgba(0,220,120,0.4)", aGQ = "rgba(0,0,0,0.8)", this.resize(), eK.eN = !0, aGU = 1, aGT = this.aGV - 1, aGW(1)
	}, this.resize = function() {
		aGL = Math.floor((bD.bE.bF() ? .5 : .25) * bI.ht), aGM = aGL + 12, aGK = Math.floor(.125 * aGL), aGO = 3 * aGK, aGN = Math.floor(.225 * aGL), aGS = Math.floor(.3 * aGK), aGR = aS.bG.bQ(0, aGS)
	}, this.a5I = function(qC) {
		qC === aGT && aGY()
	}, this.tj = function(fm, fn) {
		var jx = Math.floor((bI.ce - aGM) / 2),
			jy = Math.floor(.5 * (bI.cf - hn.gap - aGK - aGN)) + aGK + hn.gap;
		return jx < fm && fm < jx + aGM && jy < fn && fn < jy + aGN && (this.aAV(), a3N.mx(fm, fn, !1), !0)
	}, this.aAV = function() {
		az.b0.a5P(3260), c9.b0.a5O()
	}, this.iL = function() {
		6 === cL.qs() && (eK.iJ > vb + 12e3 && aGY(), 100 < (aGI += .07 * aGJ * (aGI < 16 ? 5 + aGI : 84 < aGI ? 105 - aGI : 17)) ? (aGI = 100, aGJ = -1) : aGI < 0 && (aGI = 0, aGJ = 1), aGP = "rgba(0," + Math.floor(190 - 1.9 * aGI) + "," + Math
			.floor(120 - 1.2 * aGI) + "," + (.4 + .004 * aGI) + ")", aGQ = "rgba(0," + Math.floor(1.9 * aGI) + "," + Math.floor(1.2 * aGI) + "," + (.8 - .004 * aGI) + ")", eK.eN = !0)
	}, this.fc = function() {
		var fm = Math.floor((bI.ce - aGM) / 2),
			fn = Math.floor(.5 * (bI.cf - hn.gap - aGK - aGN));
		! function(title, fn, aGd, l9) {
			fW.fillStyle = aGQ, aGe(fn, aGd, 1), fW.fill(), fW.fillStyle = aGP, aGe(fn, aGd, l9), fW.fill(), fW.strokeStyle = fg.fk, aGe(fn, aGd, 1), fW.stroke(),
				function(aGg, fn) {
					aS.bG.textAlign(fW, 1), aS.bG.textBaseline(fW, 1), fW.font = aGR, fW.fillStyle = fg.fk, fW.fillText(aGg, Math.floor(.5 * bI.ce), Math.floor(fn + .58 * aGK))
				}(title, fn)
		}(L(279), fn, 3, aGI / 100),
		function(fm, fn, ce, cf, lN) {
			fW.fillStyle = fg.a57, fW.fillRect(fm, fn, ce, cf), fW.lineWidth = 3, fW.strokeStyle = fg.fk, fW.strokeRect(fm, fn, ce, cf);
			var h = Math.floor(.3 * cf);
			aS.bG.textAlign(fW, 1), aS.bG.textBaseline(fW, 1), fW.font = aS.bG.bQ(0, h), fW.fillStyle = fg.fk, fW.fillText(lN, Math.floor(fm + ce / 2), Math.floor(fn + cf / 2 + .1 * h))
		}(fm, fn + aGK + hn.gap, aGM, aGN, L(43))
	}
}

function a4b() {
	this.qi = new pd, this.aEV = new aGh, this.aGi = new aGj
}

function aGk() {
	this.iK = 0, this.iL = function() {
		a3M.iL(), a3O.iL(), bI.iL(), az.b0.iL(), cD.aDx(), ea.qd.iL(), eK.eN && (eK.eN = !1, cL.fc())
	}
}

function f0(title, aDj, aGl) {
	var aGm = document.createElement("div"),
		aGn = document.createElement("div"),
		aGo = document.createElement("div"),
		aGp = document.createElement("div"),
		aGq = document.createElement("div");
	this.f3 = aGo, this.fS = aDj, this.show = function() {
			!1 !== aGl ? document.body.appendChild(aGm) : (document.body.appendChild(aGn), document.body.appendChild(aGp))
		}, this.fQ = function() {
			!1 !== aGl ? c9.removeChild(document.body, aGm) : (c9.removeChild(document.body, aGn), c9.removeChild(document.body, aGp))
		}, this.aGv = function() {
			var aGw = aS.bG.bJ(.1),
				aGx = aS.bG.bJ(.08 + .04 * (bI.aGy < 1), .3);
			return {
				aGw: aGw,
				aGx: aGx,
				aGz: bI.cf / bI.hu - aGw - aGx
			}
		}, this.resize = function(aH0) {
			var h = aDj.length,
				tO = this.aGv(),
				aGw = tO.aGw,
				aGx = tO.aGx;
			for (aGn.style.height = aS.bG.bK(aGw), aS.bG.hm(aGn, 2), aGp.style.top = aS.bG.bK(bI.cf / bI.hu - aGx), aGp.style.height = aS.bG.bK(aGx), aS.bG.hm(aGp, 8), aGo.style.top = aS.bG.bK(aGw), aGo.style.height = aGo.style.maxHeight = aS.bG.bK(
					tO.aGz), aGn.style.font = aS.bG.bQ(0, aS.bG.bJ(.02, .15)), aGp.style.font = aS.bG.bQ(0, aS.bG.bJ(.02, .7)), aGo.style.font = aS.bG.bQ(0, aS.bG.bJ(.02, .35)), j = 1; j < h; j++) aS.bG.hm(aDj[j].button, 4);
			for (var aH1 = 0, j = 0; j < h; j++) aH1 += aDj[j].button.offsetWidth;
			if (aH0 && aH1 < aGp.offsetWidth)
				for (j = 0; j < h; j++) aDj[j].button.style.width = (100 * aDj[j].button.offsetWidth / aH1).toFixed(2) + "%";
			else
				for (j = 0; j < h; j++) aDj[j].button.style.width = "auto";
			aGp.i8 && (aGp.scrollLeft = aGp.i8), aH0 || this.resize(!0)
		}, this.fc = function() {
			var tO = this.aGv(),
				bt = bI.hu;
			fW.fillStyle = fg.a3J, fW.fillRect(0, bt * tO.aGw, bI.ce, bt * tO.aGz)
		}, aGm.style.position = "absolute", aGm.style.top = "0", aGm.style.left = "0", aGm.style.width = "100%", aGm.style.height = "100%", aGn.style.position = "absolute", aGn.style.top = "0", aGn.style.left = "0", aGn.style.width = "100%", aGn
		.style.display = "flex", aGn.style.backgroundColor = fg.a3J, aGp.style.position = "absolute", aGp.style.left = "0", aGp.style.width = "100%", aS.bG.i6(aGp), aGq.style.height = aGq.style.maxHeight = "100%", aGo.style.position = "absolute", aGo
		.style.width = "100%", aGo.style.backgroundColor = fg.a3J,
		function() {
			for (var j = 0; j < aDj.length; j++) aDj[j].button.style.height = "100%", aDj[j].button.style.padding = "0.0em 0.9em"
		}();
	for (var j = 0; j < aDj.length; j++) aGq.appendChild(aDj[j].button);
	aGn.appendChild(function() {
		var aGu = document.createElement("h1");
		return aGu.textContent = title, aGu.style.margin = "auto", aGu.style.fontSize = 18 <= title.length && bI.cf > bI.ce ? "1.8em" : "2.3em", aGu.style.fontFamily = "Arial Black, Trebuchet MS", aGu
	}()), aGp.appendChild(aGq), !1 !== aGl && (aGm.appendChild(aGo), aGm.appendChild(aGn), aGm.appendChild(aGp))
}

function aH2() {
	var aH3 = [],
		aH4 = [],
		aH5 = [];

	function aH7(g3) {
		for (var jc = g3.jc, aH6 = [];;) {
			var bt = function aHB(jc, position) {
				position = jc.indexOf("@", position);
				if (position < 0) return -1;
				var bq = jc.substring(position + 1, position + 6);
				if (5 !== bq.length) return aHB(jc, position + 1);
				if (aS.fO.startsWith(bq, "room")) return aHB(jc, position + 1);
				var aHR = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aHR.test(bq)) return aHB(jc, position + 1);
				aHR = jc.substring(position + 6, position + 7);
				if (1 !== aHR.length) return position;
				bq = new RegExp("^[ :!.]+$");
				if (!bq.test(aHR)) return aHB(jc, position + 1);
				return position
			}(jc, 0);
			if (-1 === bt) {
				aH6.push(aHC(jc, g3));
				break
			}
			0 === bt ? aH6.push(aHD(jc.substring(1, 6), g3, bt)) : (aH6.push(aHC(jc.substring(0, bt), g3)), aH6.push(aHD(jc.substring(bt + 1, bt + 6), g3, bt))), jc = jc.substring(bt + 6)
		}
		return aH6
	}

	function aHD(bq, g3, bt) {
		var aHE = function(bq) {
				var cQ = pS.gF.aHP(bq, 5),
					aHE = bx.by.gI(cQ);
				if (aHE) {
					for (aH3.push(aHE); 75 < aH3.length;) aH3.shift();
					return aHE
				}
				for (var c7 = bx.by.c7, j = c7.length - 1; 0 <= j; j--)
					if (aHE = c7[j], cQ === aHE.cQ) return aH3.push(aHE), aHE;
				for (j = aH3.length - 1; 0 <= j; j--)
					if (aHE = aH3[j], cQ === aHE.cQ) return aH3.push(aHE), aHE;
				return bx.by.aHQ(cQ, bq, 1, 999999, 999999, 0, 0, 0, 0)
			}(bq),
			bq = (0 === bt && 0 === g3.yS.id && g3.aH8 && (g3.fontSize = bx.g8.aHG(aHE.gA, aHE.gB), g3.aHA = bx.g8.aHH(aHE.gB)), document.createElement("span"));
		return bq.textContent = function(aHE, g3, bt) {
			if (aHE.aHK) return aHE.aHK--, bt = 2 === g3.yS.id || (3 === g3.yS.id || 4 === g3.yS.id) && 0 !== bt, aHE.username + (bt ? " (" + aHE.aHM + ")" : "");
			if (g3.yS.aHN) return "Redacted " + gE.gF.gG(aHE.cQ, 2);
			return aHE.username
		}(aHE, g3, bt), bq.style.display = "inline-block", bq.style.color = bx.g8.aHJ(aHE.gA), bq.style.cursor = "pointer", bq.style.margin = "0", bq.style.font = "inherit", bq.style.minWidth = bq.style.minHeight = "1em", bx.g8.aAp(aHE) && (bq
			.style.textDecoration = "underline"), aHE.jh && (bq.style.textDecorationLine = "underline", bq.style.textDecorationStyle = "dotted"), bx.g8.aHH(aHE.gB) && (bq.style.fontWeight = "bold"), bq.onclick = function(b8) {
			bx.aAR.aAc(b8, aHE)
		}, l3.l4() || (bq.onmouseover = function(b8) {
			bx.g6.g2(b8, aHE)
		}), aH4.push(bq), bq
	}

	function aHC(jc, g3) {
		var a2G = document.createElement("span");
		return a2G.textContent = jc, a2G.style.color = g3.aHO, a2G.style.margin = "0", a2G.style.font = "inherit", a2G
	}

	function aHX(aHE, aHW, cQ) {
		cQ !== aHE.cQ || aHE.aHM || (aHE.aHM = aHE.username, aHE.username = aHW)
	}
	this.pE = function() {
		for (var j = 0; j < aH4.length; j++) aH4[j].onclick = aH4[j].onmouseover = null;
		aH5 = aH4 = null
	}, this.transform = function(g3) {
		for (var iB = document.createElement("div"), aH6 = aH7(g3), j = 0; j < aH6.length; j++) iB.appendChild(aH6[j]);
		0 === g3.yS.id && (iB.vx143 = g3.yS, aH5.push(iB)), iB.style.margin = "0.6em 0.6em", g3.aH8 && (iB.style.marginLeft = iB.style.marginRight = "inherit"), iB.style.font = "inherit";
		var aH9 = 0 < g3.yS.id;
		return g3.aHA && (iB.style.fontWeight = "bold"), aH9 && (iB.style.paddingLeft = "0.7em"), aH9 && (iB.style.fontStyle = "italic"), iB.style.fontSize = g3.fontSize.toFixed(2) + "em", iB
	}, this.aHU = function(aHV) {
		if (aHV && (2 === aHV.id && 1 === aHV.yT || 3 === aHV.id && 2 === aHV.yT)) {
			var cQ = 3 === aHV.id ? aHV.target : aHV.cQ;
			if (!bx.by.gI(cQ)) {
				for (var aHW = "Redacted " + gE.gF.gG(cQ, 2), c7 = bx.by.c7, j = c7.length - 1; 0 <= j; j--) aHX(c7[j], aHW, cQ);
				for (j = aH3.length - 1; 0 <= j; j--) aHX(aH3[j], aHW, cQ)
			}
		}
	}, this.aHY = function(cQ) {
		for (var aHZ = aH5, j = aHZ.length - 1; 0 <= j; j--) {
			var ao = aHZ[j];
			if (ao.vx143.cQ === cQ) {
				for (; ao.firstChild;) c9.removeChild(ao, ao.firstChild);
				for (var aH6 = aH7(bx.g8.yV(ao.vx143, bx.g8.yW(ao.vx143))), bc = 0; bc < aH6.length; bc++) ao.appendChild(aH6[bc]);
				aHZ.splice(j, 1)
			}
		}
	}, this.yU = function(cQ) {
		for (var aHZ = aH5, j = aHZ.length - 1; 0 <= j; j--) {
			var ao = aHZ[j];
			if (ao.vx143.cQ === cQ) {
				for (; ao.firstChild;) c9.removeChild(ao, ao.firstChild);
				ao.vx143.jc = "[Redacted Message]";
				for (var aH6 = aH7(bx.g8.yV(ao.vx143, bx.g8.yW(ao.vx143))), bc = 0; bc < aH6.length; bc++) ao.appendChild(aH6[bc]);
				aHZ.splice(j, 1)
			}
		}
	}
}

function aHa() {
	var aH4, aHd, aGm = document.createElement("div"),
		aHb = document.createElement("div"),
		aHc = document.createElement("div"),
		aGo = document.createElement("div"),
		kS = [],
		aHe = [L(280), L(281), L(282), L(283), L(284), L(285), L(286)],
		aHf = [1, 2, 3, 0, 9, 10, 11];

	function aHg(j) {
		c9.ed(8, 0, new rX(21, {
			rE: aHf[j],
			rV: 0,
			rY: 10
		}))
	}
	this.show = function() {
			this.n(c9.b0.rI), document.body.appendChild(aGm)
		}, this.fQ = function() {
			c9.removeChild(document.body, aGm)
		}, this.n = function(rI) {
			for (var aHn = [3, 0, 1, 2, 4, 5, 6], j = 0; j < kS.length; j++) {
				var ce = rI[j];
				aH4[aHn[j]][1].a2G.textContent = ce || ""
			}
		}, this.resize = function() {
			var j, gJ = hn.gap,
				cf = aS.bG.hv(.085),
				ce = Math.min(4 * cf, bI.ce - 2 * gJ),
				h = kS.length;
			for (aS.bG.hp(aGm, gJ, bI.cf - gJ - cf, ce, cf), aS.bG.hm(aGm), aS.bG.hm(aHb, 6), j = 0; j < h - 1; j++) aS.bG.hm(kS[j].button, 6);
			for (j = 0; j < h; j++) aH4[j][0].resize(), aH4[j][1].resize();
			for (kS[0].fm = 0, kS[0].button.style.left = aS.bG.bK(kS[0].fm), kS[0].button.style.width = aS.bG.hr(1.7 * cf), j = 1; j < h; j++) kS[j].fm = kS[j - 1].fm + kS[j - 1].button.offsetWidth, kS[j].button.style.left = aS.bG.bK(kS[j].fm);
			if (!aHd) {
				if (!ml.a8Q()) return;
				(aHd = ml.get(14)).style.width = "24%", aHd.style.position = "absolute", aHb.appendChild(aHd)
			}
			aHd.style.left = aS.bG.bK(0), aHd.style.top = "7%", aHc.i8 && (aHc.scrollLeft = aHc.i8)
		}, aGm.style.position = "absolute", aHb.style.width = "25%", aHb.style.height = "100%", aHb.style.backgroundColor = fg.a3J, aHc.style.position = "absolute", aHc.style.width = "75%", aHc.style.height = "100%", aHc.style.backgroundColor = fg
		.a3J, aHc.style.top = aHc.style.right = aS.bG.bK(0), aS.bG.i6(aHc), aGo.style.height = aGo.style.maxHeight = "100%", kS.push(new bV("", function() {
			aHg(0)
		}, fg.aHh)), kS.push(new bV("", function() {
			aHg(1)
		}, fg.aHi)), kS.push(new bV("", function() {
			aHg(2)
		}, fg.aHj)), kS.push(new bV("", function() {
			aHg(3)
		}, fg.aHk)), kS.push(new bV("", function() {
			aHg(4)
		}, fg.aHl)), kS.push(new bV("", function() {
			aHg(5)
		}, fg.aHm)), kS.push(new bV("", function() {
			aHg(6)
		}, fg.aHl)), aH4 = new Array(kS.length);
	for (var j = 0; j < kS.length; j++) kS[j].button.style.position = "absolute", aH4[j] = [new a2A(aHe[j], kS[j].button, .25, .45), new a2A("", kS[j].button, .53, .84, 1)], kS[j].button.style.height = kS[j].button.style.maxHeight = "100%", kS[j]
		.button.top = aS.bG.bK(0), aGo.appendChild(kS[j].button);
	aHc.appendChild(aGo), aGm.appendChild(aHb), aGm.appendChild(aHc)
}

function a46() {
	function aHs(player) {
		var aX;
		aS.aT.h1(player) && (aX = ad.er[player] - ad.hB[player] + a8.oV(player), aZ.aa(player, Math.abs(aX), aX < 0 ? 18 : 12)), ad.er[player] = 0, ad.hB[player] = 0
	}

	function aHy() {
		eE.show(!1, !1, !1, !0), e8.aEX(), dO.aEY.aEZ()
	}

	function aHp(player, aHx) {
		for (var j = aHx.length - 1; 0 <= j; j--) a8.aI0(aHx[j], player)
	}

	function aHr(player) {
		var mj = ad.mj,
			mm = ad.mm,
			mk = ad.mk,
			mn = ad.mn,
			a3 = a2.a3;
		if (ad.el[player]) {
			ad.el[player] = 0;
			for (var jx = mj[player], jy = mk[player], fm = mm[player]; jx <= fm; fm--)
				for (var fn = mn[player]; jy <= fn; fn--) {
					var am = 4 * (fn * a3 + fm);
					ag.o2(player, am) && ag.zK(am)
				}
		}
		mm[player] = mn[player] = 0, mj[player] = mk[player] = Math.max(a3, a2.a4)
	}
	this.bv = function(am) {
		var player, aX = ad.el[am] + ad.vC[am];
		dm.b0.oI[am] ? aX && (aHp(player = am, a8.aHq(player)), aHr(player), aV.aW(player), a8.clear(player), aHs(player), function(player) {
			ad.vC[player] = 0, ad.ac[player] = [], ad.vD[player] = [], ad.sn[player] = [], ad.rb[player] = []
		}(player)) : !aX && ad.ac[am].length || this.aFc(am)
	}, this.aFc = function(player) {
		! function(player) {
			aS.aT.gy(player) || (ad.qX[player] = qh.aEV.aEW(), aP.cw++);
			var aHx = a8.aHq(player);
			0 === aHx.length ? aS.aT.gr(player) && aHy() : (aHp(player, aHx), function(player, aHx) {
				var aI2 = aHx[function(aHx) {
					var j, k = 0;
					for (j = aHx.length - 1; 1 <= j; j--) ad.el[aHx[j]] > ad.el[aHx[k]] && (k = j);
					return k
				}(aHx)];
				9 === aP.dA && (1 === de.gu[player] ? dV.aI3(8) && dQ.aEg(aI2) : dr.hH[player] && (eB.lh(765, 0), eB.lk(280, L(287, [ad.ll[aI2], ad.ll[player]]), 765, aI2, fg.lX, fg.aI4, -1, !0)));
				if (aS.aT.gr(player)) aHy(), eB.tP(aI2, 1);
				else {
					for (var j = aHx.length - 1; 0 <= j; j--)
						if (aS.aT.h1(aHx[j]) && (aZ.w8[4 - aS.aT.gy(player)]++, aS.aT.gr(aHx[j]))) return eB.tP(player, 0);
					aS.aT.gy(player) || eB.u1(0, player, aI2)
				}
			}(player, aHx))
		}(player), aHr(player), aHs(player),
			function(player) {
				ad.eQ[player] = 0, ad.ac[player] = null, ad.vD[player] = null, ad.sn[player] = null, ad.rb[player] = null
			}(player), aV.aW(player), a8.clear(player), dm.pA.aHw(player)
	}
}

function x5() {
	var aI5 = 0;

	function aIB(bq, id) {
		aI5 || (id ? 1 === id ? eB.tL = L(289) + ": " + bq : c9.ed(4, 3, new a5G(L(290), bq, 1)) : c9.ed(4, 3, new a5G("⚠️ " + L(288), bq, 1)))
	}
	this.qc = function(bq, aI6) {
		var jK, g3;
		return aI5 = aI6, pS.gF.aI7(pS.gF.yL(pS.gF.aI8(bq))), eB.tL = "", !! function() {
			if (qb.size < 10) aIB("File Too Small");
			else {
				var aID = qb.pF(12),
					aDa = (aID !== dT.rVersion && aIB("Incompatible Version   Required: " + dT.rVersion + ("   Found: " + aID) + ("   Compatible at territorial.io/" + aID), 1), qb.pF(12)),
					aIE = qb.pF(31);
				if (aIE !== qb.size) aIB("Size Error: " + aIE + " " + qb.size);
				else if (function(cf, aID) {
						for (var am = qb.pD, h = qb.size, aDa = aID, j = 3; j < h; j++) aDa = aDa + am[j] & 4095;
						return aDa === cf || (aIB("Hash Error: " + aDa + " " + cf + " " + h), !1)
					}(aDa, aID)) return 1
			}
			return
		}() && (jK = qb, (g3 = aP.data = new cF).mapType = jK.pF(2), g3.mapProceduralIndex = jK.pF(8), g3.mapRealisticIndex = jK.pF(8), g3.mapSeed = jK.pF(14), g3.mapName = jK.pR(5), 2 === g3.mapType && jK.pV(), g3.passableWater = jK.pF(1),
			g3.passableMountains = jK.pF(1), g3.playerCount = jK.pF(10), g3.humanCount = jK.pF(10), g3.selectedPlayer = jK.pF(9), g3.gameMode = jK.pF(1), g3.playerMode = jK.pF(2), g3.battleRoyaleMode = jK.pF(2), g3.numberTeams = jK.pF(4), g3
			.isZombieMode = jK.pF(1), g3.isContest = jK.pF(1), g3.isReplay = jK.pF(1), g3.elo = jK.pL(2, 14, 2), g3.colorsType = jK.pF(1), g3.colorsPersonalized = jK.pF(1), g3.colorsData = jK.pL(10, 18, 512), g3.selectableColor = jK.pF(1), g3
			.teamPlayerCount = jK.pL(4, 10, 9), g3.neutralBots = jK.pF(1), g3.botDifficultyType = jK.pF(2), g3.botDifficultyValue = jK.pF(4), g3.botDifficultyTeam = jK.pL(4, 4, 9), g3.botDifficultyData = jK.pL(10, 4, 512), g3.spawningType =
			jK.pF(2), g3.spawningSeed = jK.pF(14), g3.spawningData = jK.pL(11, 12, 1024), g3.selectableSpawn = jK.pF(1), g3.playerNamesType = jK.pF(2), g3.playerNamesData = jK.pP(10, 5, 512), g3.selectableName = jK.pF(1), g3.aIncomeType = jK
			.pF(2), g3.aIncomeValue = jK.pF(8), g3.aIncomeData = jK.pL(10, 8, 512), g3.tIncomeType = jK.pF(2), g3.tIncomeValue = jK.pF(8), g3.tIncomeData = jK.pL(10, 8, 512), g3.iIncomeType = jK.pF(2), g3.iIncomeValue = jK.pF(8), g3
			.iIncomeData = jK.pL(10, 8, 512), g3.sResourcesType = jK.pF(2), g3.sResourcesValue = jK.pF(11), g3.sResourcesData = jK.pL(10, 11, 512), !! function() {
				var jK = qb,
					mi = jK.pF(5),
					aIG = jK.pF(30),
					aIH = jK.pF(30);
				if (aIG + aIH > 8 * jK.size) return void aIB("Corrupted File");
				return function(h) {
						var aIK = new Uint8Array(h),
							aIL = new Uint16Array(h),
							aIM = new Uint32Array(h),
							aIN = new Uint32Array(h);
						dw.eU.ig = aIK, dw.eU.ih = aIL, dw.eU.ii = aIM, dw.eU.ij = aIN;
						for (var j = 0; j < h; j++) {
							var id = qb.pF(4);
							aIK[j] = id, aIL[j] = qb.pF(9), 0 === id ? aIM[j] = qb.pF(22) : 1 === id ? (aIM[j] = qb.pF(10), aIN[j] = qb.pF(10)) : 2 === id ? (aIM[j] = qb.pF(10), aIN[j] = qb.pF(9)) : 3 === id ? (aIM[j] = qb.pF(10), aIN[j] = qb
								.pF(27)) : 4 === id ? (aIM[j] = qb.pF(10), aIN[j] = qb.pF(16)) : 5 === id || 6 === id ? aIM[j] = qb.pF(10) : 7 === id ? aIM[j] = qb.pF(1) : 10 === id && (aIM[j] = qb.pF(20), aIN[j] = qb.pF(22))
						}
					}(aIG),
					function(h, mi) {
						var il = new Uint8Array(h),
							io = new Array(h);
						io.fill(0), dw.eU.il = il, dw.eU.io = io;
						for (var j = 0; j < h; j++) il[j] = qb.pF(1), io[j] = qb.pF(mi)
					}(aIH, mi), 1
			}()) && (qb.k < 8 * qb.size - 13 || qb.k > 8 * qb.size ? (aIB("Out Of Bounds Error: " + qb.k + " " + 8 * qb.size), !1) : (dw.eU.eV = bq, 2 !== aP.data.mapType || (aIB("Load base64 image...", 2), aI6)))
	}, this.pc = function(pa, aIC) {
		var nb = document.createElement("canvas"),
			hl = nb.getContext("2d");
		if (nb.width = pa.width, nb.height = pa.height, hl.drawImage(pa, 0, 0), aP.data.canvas = nb, aI5 || aIC) return aP.d2 ? void 0 : (aP.data.mapType = 2, c9.wO(), void c9.ed(19));
		dw.x8()
	}
}

function fM(aIO, aIP, aIQ, aIR) {
	var aIS = document.createElement("textarea"),
		aIT = (this.b8 = aIS, !0);

	function aIX() {
		aIS.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aIP && aS.bG.hm(aIS, 5)
		}, this.fN = function(ay) {
			aIS.value = ay
		}, this.fA = function() {
			return aIS.value
		}, this.aIV = function() {
			aIS.select()
		}, this.clear = function() {
			aIS.value = ""
		}, this.aIW = function() {
			aIT && navigator.clipboard ? (aIS.select(), navigator.clipboard.writeText(aIS.value).catch(function() {
				aIT = !1, aIX()
			})) : aIX()
		}, aIS.setAttribute("id", "textArea" + c9.b0.aIU++), aIS.setAttribute("autocomplete", "off"), aIO && aIS.setAttribute("placeholder", aIO), aIS.style.top = "0", aIS.style.left = "0", aIS.style.width = "100%", aIS.style.height = "100%", aIS
		.style.userSelect = "none", aIS.style.outline = "none", aIS.style.resize = "none", aIS.style.border = "none", aIS.style.color = fg.fk, aIS.style.backgroundColor = fg.a7G, aIR ? (aIS.style.fontSize = "1em", aIS.rows = 6, aIS.style.padding =
			"0.25em") : (aIS.style.padding = "0.45em", aIS.style.fontSize = "1.2em"), aIQ && aIS.addEventListener("input", function(b8) {
			aIQ(b8)
		}), aIS.addEventListener("focus", function() {
			bI.aAP++
		}), aIS.addEventListener("blur", function() {
			bI.aAP--
		})
}

function a3z() {
	var aIY, aIZ, aIa, aIb, aIc, aId, aIe, aIf, aIg, aIh, aIi, aIj, aIk, aIl, aIm, aIn, aIo, aIp, aIq, aIr, aIs, aIt, position, aIu, aIv, aIw, aIx, aIy = 1,
		mU = 1,
		aIz = "";
	var leaderboardHasChanged = true;
	this.playerPos = aP.cs;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => lp[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(lp[aP.cs]);
	}

	function aJ1() {
		aIe.clearRect(0, 0, aIY, a6u),
			aIe.fillStyle = fg.aJ4,
			aIe.fillRect(0, 0, aIY, aIj),
			aIe.fillStyle = fg.a3J,
			aIe.fillRect(0, aIj, aIY, a6u - aIj);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			lp[aP.cs]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aIt = -1;
		if (__fx.leaderboardFilter.enabled && aIt >= __fx.leaderboardFilter.filteredLeaderboard.length) aIt = -1;
		playerPos >= position && aJ5(playerPos - position, fg.aJ6),
			0 !== lp[aP.cs] && 0 === position && aJ5(0, fg.aJ7),
			-1 !== aIt && aJ5(aIt, fg.a93),
			aIe.fillStyle = fg.a3J,
			//console.log("drawing", aIt),
			aIe.clearRect(0, a6u - __fx.leaderboardFilter.tabBarOffset, aIY, __fx.leaderboardFilter.tabBarOffset);
		aIe.fillRect(0, a6u - __fx.leaderboardFilter.tabBarOffset, aIY, __fx.leaderboardFilter.tabBarOffset);
		aIe.fillStyle = fg.fk,
			aIe.fillRect(0, aIj, aIY, 1),
			aIe.fillRect(0, a6u - __fx.leaderboardFilter.tabBarOffset, aIY, 1),
			__fx.leaderboardFilter.drawTabs(aIe, aIY, a6u - __fx.leaderboardFilter.tabBarOffset, fg.aJ6),
			aIe.fillRect(0, 0, aIY, hn.a6Y),
			aIe.fillRect(0, 0, hn.a6Y, a6u),
			aIe.fillRect(aIY - hn.a6Y, 0, hn.a6Y, a6u),
			aIe.fillRect(0, a6u - hn.a6Y, aIY, hn.a6Y), aIe.font = aIZ, aS.bG.textBaseline(aIe, 1), aS.bG.textAlign(aIe, 1), aIe.fillText(aIz, Math.floor((aIY + aIj - 22) / 2), Math.floor(aIh + aIa / 2));
		__fx.playerList.drawButton(aIe, 12, 12, aIj - 22);
		var bc, an = playerPos < position + aIc - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aIc)
				position = (result.length > aIc ? result.length : aIc) - aIc;
			//if (position >= result.length) position = result.length - 1;
			for (aIe.font = aIb, aS.bG.textAlign(aIe, 0), bc = aIc - an; 0 <= bc; bc--) {
				const pos = result[bc + position];
				if (pos !== undefined)
					aJ8(em[pos]), aJ9(bc, pos, em[pos]);
			}
			for (aS.bG.textAlign(aIe, 2), bc = aIc - an; 0 <= bc; bc--) {
				const pos = result[bc + position];
				if (pos !== undefined)
					aJ8(em[pos]), aJA(bc, em[pos]);
			}
		} else {
			for (aIe.font = aIb, aS.bG.textAlign(aIe, 0), bc = aIc - an; 0 <= bc; bc--)
				aJ8(em[bc + position]), aJ9(bc, bc + position, em[bc + position]);
			for (aS.bG.textAlign(aIe, 2), bc = aIc - an; 0 <= bc; bc--)
				aJ8(em[bc + position]), aJA(bc, em[bc + position]);
		}
		2 == an && (aJ8(aP.cs), aS.bG.textAlign(aIe, 0), aJ9(aIc - 1, lp[aP.cs], aP.cs), aS.bG.textAlign(aIe, 2), aJA(aIc - 1, aP.cs)), 0 === position && (an = .7 * aIk / ml.get(4).height, aIe.setTransform(an, 0, 0, an, Math.floor(aIl + .58 * aIk +
			.5 * an * ml.get(4).width), Math.floor(aIh + aIa + .4 * aIk)), aIe.imageSmoothingEnabled = !0, aIe.drawImage(ml.get(4), -Math.floor(ml.get(4).width / 2), -Math.floor(ml.get(4).height / 2)), aIe.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aJ8(player) {
		aP.d7 && (aIe.fillStyle = de.aJC[de.sH[player]])
	}

	function aJ5(j, aJD) {
		aIe.fillStyle = aJD, j = aIc - 1 < j ? aIc - 1 : j;
		aJD = Math.floor((j === aIc - 1 ? 2 : 0 === j ? 1.15 : 1) * aIk), aJD = j === aIc - 2 ? Math.floor(aIj + 9.15 * aIk) - Math.floor(aIj + 8.15 * aIk) : aJD;
		aIe.fillRect(0, Math.floor(aIj + (j + (0 === j ? 0 : .15)) * aIk), aIY, aJD)
	}

	function aJ9(aJE, gB, j) {
		aIe.fillText(aIp[gB], aIl, Math.floor(aIh + aIa + (aJE + .5) * aIk)), 1 === ad.gq[j] && (aIe.font = "italic " + aIb);
		gB = Math.floor(aIh + aIa + (aJE + .5) * aIk);
		aIe.fillText(ad.ll[j], aIm, gB), 0 !== ad.gq[j] && (aIe.font = aIb), j < aP.ct && 2 !== ad.gq[j] || aIe.fillRect(aIm, gB + .35 * aIy, aIo[j], Math.max(1, .1 * aIy))
	}

	function aJA(aJE, j) {
		aIe.fillText(ad.el[j], aIn, Math.floor(aIh + aIa + (aJE + .5) * aIk))
	}

	function aJO(fn) {
		return (fn -= hn.gap + aIj) < 0 ? Math.floor(fn / aIk) - 1 : fn < (aIc - 1) * aIk ? Math.floor(fn / aIk) : fn < a6u - aIj ? aIc - 1 : (fn -= a6u - aIj, aIc + Math.floor(fn / aIk))
	}

	function aJN(fm, fn) {
		return fm >= hn.gap && fm < hn.gap + aIY && fn >= hn.gap && fn < hn.gap + a6u
	}
	this.f = function() {
			var j;
			for (aIv = !1, aIx = aIw = aIu = 0, aIt = -1, aIc = bD.bE.bF() ? 6 : 10, mU = (position = 0) === (mU = l.bj.data[11].value) ? 10 : 1 === mU ? 5 : 1, aIs = !1, aIq = new Uint16Array(aIc + 1), aIr = new Uint32Array(aIc + 1), aIg = aP.aj,
				em = new Uint16Array(aIg), lp = new Uint16Array(aIg), j = aIg - 1; 0 <= j; j--) em[j] = j, lp[j] = j;
			this.resize(!0), aIo = new Uint16Array(aP.aj);
			var aJ0 = Math.floor(aIY - aIm - aIl - aIf);
			for (aIp = new Array(aP.aj), aIe.font = aIb, j = aP.aj - 1; 0 <= j; j--) aIp[j] = j + 1 + ".", ad.ll[j] = aS.ff.u9(ad.uA[j], aIb, aJ0), aIo[j] = Math.floor(aIe.measureText(ad.ll[j]).width);
			aJ1()
		}, this.resize = function(f) {
			if (a6u = bD.bE.bF() ? (aIY = Math.floor(.335 * bI.ht), Math.floor(aIc * aIY / 8)) : (aIY = Math.floor(.27 * bI.ht), Math.floor(aIc * aIY / 10)), aIY = Math.floor(.97 * aIY), (aId = document.createElement("canvas")).width = aIY, aId
				.height = a6u, aIe = aId.getContext("2d", {
					alpha: !0
				}), aIh = .025 * aIY, aIa = .16 * aIY, aIi = 0 * aIY, aIj = Math.floor(.45 * aIh + aIa), aIk = (a6u - aIa - 2 * aIh - aIi) / aIc,
				aId.height = a6u += aIk, __fx.leaderboardFilter.tabBarOffset = Math.floor(aIk * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6u - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aIY,
				aIZ = aS.bG.bQ(1, Math.floor(.55 * aIa)), aIy = Math.floor((bD.bE.bF() ? .67 : .72) * aIk), aIb = aS.bG.bQ(0, aIy), aIe.font = aIb, aIl = Math.floor(.04 * aIY), aIm = Math.floor((bD.bE.bF() ? .195 : .18) * aIY), aIf = Math.floor(aIe
					.measureText("00920600").width), aIe.font = aIZ, aIn = aIY - aIl, !f) {
				aIe.font = aIb;
				for (var j = aP.aj - 1; 0 <= j; j--) aIo[j] = Math.floor(aIe.measureText(ad.ll[j]).width);
				aJ1()
			}
			aIz = aS.ff.u9(L(291), aIZ, .96 * aIY)
		}, this.aJ2 = function() {
			return aIY
		}, this.eR = function(n2, aJ3) {
			(aJ3 || aIs && (n2 || eK.lf() % mU == 0)) && (aIs = !1, aJ1())
		}, this.iL = function() {
			! function() {
				for (var bc = aIg - 1; 0 <= bc; bc--) 0 === ad.eQ[em[bc]] && ! function(bc) {
					var aJL = em[bc];
					aIg--;
					for (var j = bc; j < aIg; j++) em[j] = em[j + 1], lp[em[j]] = j;
					em[aIg] = aJL, lp[em[aIg]] = aIg
				}(bc)
			}();
			for (var aJJ, k6 = aIg - 1, bc = 0; bc < k6; bc++) ad.el[em[bc]] < ad.el[em[bc + 1]] && (aJJ = em[bc], em[bc] = em[bc + 1], em[bc + 1] = aJJ, lp[em[bc]] = bc, lp[em[bc + 1]] = bc + 1);
			! function() {
				for (var aX = aIs, an = (aIs = !0, lp[aP.cs] >= aIc - 1 ? aIc - 2 : aIc - 1), j = an; 0 <= j; j--)
					if (aIq[j] !== em[j] || aIr[j] !== ad.el[em[j]]) return;
				(an != aIc - 2 || aIq[aIc] === lp[aP.cs] && aIr[aIc] === ad.el[aP.cs]) && (aIs = aX)
			}();
			for (var j = aIc - 1; 0 <= j; j--) aIq[j] = em[j], aIr[j] = ad.el[em[j]];
			aIq[aIc] = lp[aP.cs], aIr[aIc] = ad.el[aP.cs];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.tj = function(fm, fn) {
			return !!aJN(fm, fn) && ((__fx.utils.isPointInRectangle(fm, fn, hn.gap + 12, hn.gap + 12, aIj - 22, aIj - 22) && __fx.playerList.display(ad.uA), true) &&
				!(fn - hn.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(fm - hn.gap)) && (aIu = eK.iJ, aIv = !0, aIw = aIx = aJO(fn), l3.aAT() && (fm = kJ(-1, aIx, aIc), aIt !== (fm = fm === aIc ? -
					1 : fm)) && (aIt = fm, aJ1(), eK.eN = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aJ1(), eK.eN = !0;
		},
		this.mx = function(fm, fn) {
			if (__fx.utils.isPointInRectangle(fm, fn, hn.gap + 12, hn.gap + 12, aIj - 22, aIj - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aJ1(), eK.eN = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aJ1(), eK.eN = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(fm, fn, hn.gap, hn.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), fm - hn.gap
				)) return;
			var aX, aJM = aJO(fn);
			return aIv ? (aX = position, (position = kJ(0, position += aIw - aJM, aP.aj - aIc)) !== aX && (aJM = (aJM = kJ(-1, aIw = aJM, aIc)) !== aIc && aJN(fm, fn) ? aJM : -1, aIt = aJM, aJ1(), eK.eN = !0), !0) : (aJM = (aJM = kJ(-1, aJM,
				aIc)) === aIc || !aJN(fm, fn) || l3.aAT() ? -1 : aJM, aIt !== aJM && (aIt = aJM, aJ1(), eK.eN = !0))
		}, this.vs = function(fm, fn) {
			if (!aIv) return !1;
			aIv = !1;
			var aJM = aJO(fn);
			var isEmptySpace = false;
			return l3.aAT() && -1 !== aIt && (aIt = -1, aJ1(), eK.eN = !0), eK.iJ - aIu < 350 && aIx === aJM && -1 !== (aJM = (aJM = kJ(-1, aJM, aIc)) !== aIc && aJN(fm, fn) ? aJM : -1) && (fm = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					em[__fx.leaderboardFilter.filteredLeaderboard[aJM + position] ?? (isEmptySpace = true, lp[aP.cs])]) : em[aJM + position]), aJM === aIc - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : lp[aP.cs]) >=
				position + aIc - 1 && (fm = aP.cs), !isEmptySpace && aP.d7 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fm, ad.uA, aP.d0), 0 !== ad.eQ[fm] && !isEmptySpace) && eO.tn(fm, 800, !1, 0), !0
		}, this.a51 = function(fm, fn, deltaY) {
			var aJP;
			return !(aIv || aP.d4 || (aJP = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aJN(fm, fn)) || (fm = (fm = kJ(-1, aJO(fn), aIc)) === aIc || l3.aAT() ? -1 : fm, 0 < deltaY ? position < aP.aj - aIc && (position += Math.min(aP.aj - aIc -
				position, aJP), aIt = fm, aJ1(), eK.eN = !0) : 0 < position && (position -= Math.min(position, aJP), aIt = fm, aJ1(), eK.eN = !0), 0))
		}, this.fc = function() {
			fW.drawImage(aId, hn.gap, hn.gap)
		}
}

function aJQ() {
	this.aJR = function(canvas, aJS, qH) {
		var ce = canvas.width,
			cf = canvas.height,
			bt = aS.bG.hk(ce, cf),
			hl = aS.bG.getContext(bt, !0),
			canvas = (hl.drawImage(canvas, 0, 0), hl.getImageData(0, 0, ce, cf));
		return aJS(canvas.data, ce, cf, qH), hl.putImageData(canvas, 0, 0), bt
	}, this.aJT = function(nW, ce, cf) {
		for (var fm = ce - 1; 0 <= fm; fm--)
			for (var fn = cf - 1; 0 <= fn; fn--) {
				var j = 4 * (fm + fn * ce);
				nW[3 + j] = nW[j], nW[j] = nW[1 + j] = nW[2 + j] = 255
			}
	}, this.aJU = function(nW, ce, cf) {
		for (var fm = ce - 1; 0 <= fm; fm--)
			for (var fn = cf - 1; 0 <= fn; fn--) {
				var j = 4 * (fm + fn * ce);
				nW[1 + j] > nW[2 + j] + 10 && (nW[3 + j] = nW[j], nW[1 + j] = nW[2 + j])
			}
	}, this.aJV = function(nW, ce, cf, qH) {
		for (var gap = Math.floor(Math.min(ce, cf) * qH), fm = 0; fm < ce; fm++)
			for (var j, fn = 0; fn < cf; fn++)(fm < gap || fn < gap || ce - gap <= fm || cf - gap <= fn) && (nW[3 + (j = 4 * (fm + fn * ce))] = 255 - 255 * (nW[1 + j] - nW[j]) / (255 - nW[j]))
	}, this.aJW = function(nW, ce, cf, qH) {
		for (var fm = ce - 1; 0 <= fm; fm--)
			for (var fn = cf - 1; 0 <= fn; fn--) {
				var j = 4 * (fm + fn * ce);
				nW[j] = qH[0], nW[1 + j] = qH[1], nW[2 + j] = qH[2]
			}
	}, this.aJX = function(nW, ce, cf, qH) {
		for (var gap = Math.floor(ce * qH), fm = 0; fm < ce; fm++)
			for (var j, fn = 0; fn < cf; fn++)(fm < gap || fn < gap || ce - gap <= fm || cf - gap <= fn) && (nW[j = 4 * (fm + fn * ce)] = nW[1 + j] = nW[2 + j] = 0)
	}, this.aJY = function(nW, ce, cf) {
		for (var fn, j, fm = ce - 1; 0 <= fm; fm--)
			for (fn = cf - 1; 0 <= fn; fn--) 200 < nW[1 + (j = 4 * (fm + fn * ce))] && nW[1 + j] - 20 > nW[j] && nW[1 + j] - 20 > nW[2 + j] ? nW[j] + nW[2 + j] < 40 ? nW[3 + j] = 0 : (nW[3 + j] = nW[j], nW[j] = 255, nW[1 + j] = 255, nW[2 + j] =
				255) : nW[j] < 50 && nW[1 + j] < 50 && nW[2 + j] < 50 && (nW[j] + nW[1 + j] + nW[2 + j] < 50 ? nW[3 + j] = 180 : nW[3 + j] = 180 + Math.floor(75 * (nW[j] + nW[1 + j] + nW[2 + j] - 50) / 100))
	}, this.aJZ = function(nW, ce, cf) {
		for (var fn, j, fm = ce - 1; 0 <= fm; fm--)
			for (fn = cf - 1; 0 <= fn; fn--) nW[1 + (j = 4 * (fm + fn * ce))] > nW[j] + 20 && nW[1 + j] > nW[2 + j] + 20 && nW[j] + nW[2] < 40 && (nW[3 + j] = 255 - nW[1 + j], nW[j] = nW[1 + j] = nW[2 + j] = nW[j])
	}, this.aJa = function(nW, ce, cf, qH) {
		for (var rp = ce >> 1, fm = 0; fm < ce; fm++)
			for (var fn = 0; fn < cf; fn++) Math.sqrt((fm - rp) * (fm - rp) + (fn - rp) * (fn - rp)) > qH * rp && (nW[4 * (fm + fn * ce) + 3] = 0)
	}
}

function aJb() {
	this.f = function() {
		this.aJc = 0, this.qW = [], this.aJd = 0, this.aJe = 0
	}, this.a37 = function() {
		var oa;
		aP.d0 || (oa = this, 2 === aP.dG ? oa.qW = dO.aJg.a1K() : aP.d7 ? oa.qW = dO.aJg.a1L() : oa.qW = dO.aJg.a1M(), oa.aJc = qh.aEV.aJh(), oa.aJd = Math.max(1, dO.aJg.a1N(oa.qW)), db.aT.qV(), 8 === aP.dA ? dO.result.aJe = 0 : oa.aJe = 100 * dO
			.result.aJc * (1 + aP.dB))
	}
}

function aJj() {
	this.aJk = function() {
		var j;
		if (qb.size < pJ.pK(23)) az.b0.ql(0, 3259);
		else {
			var rE = qb.pF(6),
				h = qb.pF(10),
				data = [];
			if (9 === rE || 10 === rE || 11 === rE) {
				for (j = 0; j < h; j++) data.push([qb.pF(30), pS.q2.qc(5), qb.pG(32), 0, qb.pF(30)]);
				8 === c9.cA && c9.r2().r4(21, !0, {
					rE: rE,
					data: data
				})
			} else if (12 === rE) {
				for (j = 0; j < h; j++) data.push([qb.pF(20), qb.pF(30), qb.pF(30), qb.pG(32), qb.pF(30), pS.q2.qc(5), pS.q2.qc(5)]);
				8 === c9.cA && c9.r2().r4(21, !0, {
					rE: rE,
					data: data
				})
			} else {
				var aJl = qb.pF(16);
				if (qb.pH(39 + 16 * aJl + h * (0 === rE ? 111 : 1 === rE ? 101 : 2 === rE || 3 === rE ? 127 : 212))) {
					if (0 === rE)
						for (j = 0; j < h; j++) data.push([qb.pF(30), pS.pT.pU(qb.pF(5)), qb.pF(16), qb.pF(30), qb.pF(30)]);
					else if (1 === rE)
						for (j = 0; j < h; j++) data.push([qb.pF(16), pS.pT.pU(qb.pF(3)), qb.pF(16), pS.pT.pU(qb.pF(5)), qb.pF(31), qb.pF(30)]);
					else if (2 === rE || 3 === rE)
						for (j = 0; j < h; j++) data.push([qb.pF(30), pS.pT.pU(qb.pF(5)), qb.pG(32), qb.pF(30), qb.pF(30)]);
					else
						for (j = 0; j < h; j++) data.push([qb.pF(20), qb.pF(30), qb.pF(30), qb.pF(30), qb.pF(30), qb.pG(32), qb.pF(30), pS.pT.pU(qb.pF(5)), pS.pT.pU(qb.pF(5))]);
					8 === c9.cA && c9.r2().r4(21, !0, {
						rE: rE,
						data: data
					})
				} else az.b0.ql(0, 3260)
			}
		}
	}, this.aJm = function() {
		if (qb.size < pJ.pK(29)) az.b0.ql(0, 3265);
		else {
			var aJn = qb.pF(4),
				aJo = qb.pF(7),
				aJp = qb.pF(11);
			if (qb.pH(29 + 16 * aJo + 16 * aJp + 11 * aJn)) {
				for (var data = [], j = 0; j < aJn; j++) {
					for (var aJq = pS.pT.pU(qb.pF(3)), aJr = qb.pF(8), aJs = [], bc = 0; bc < aJr; bc++) aJs.push(qb.pF(16));
					data.push({
						name: "[" + aJq + "]",
						aJs: aJs
					})
				}
				8 === c9.cA && c9.r2().r4(23, !0, data)
			} else az.b0.ql(0, 3266)
		}
	}
}

function a25() {
	this.aJt = function(nU, player) {
		eB.uF(aP.cs, player, nU), az.qv.a9m(nU, player)
	}, this.tm = function(player) {
		eB.uV(player, 0), az.qv.a9p(player)
	}, this.aJu = function(aJv, player) {
		eB.uW(aJv, player), az.qv.a9q(aJv, player)
	}, this.qV = function() {
		aP.d0 || aP.d1 || az.aJw.qV()
	}
}

function a4R() {
	var input;

	function aJx(b8) {
		(b8 = b8.target.files) && 0 < b8.length && a3U.aK0(b8[0])
	}

	function aK1(b8) {
		var bt = new Image;
		bt.onload = aK2, bt.src = b8.target.result
	}

	function aK2(b8) {
		var b8 = b8.target,
			ce = b8.width,
			cf = b8.height,
			aK3 = l.bj.data[162].value,
			max = Math.min(a2.a2f, aK3),
			aK3 = (max = bD.id || l3.l4() ? Math.min(1400, aK3) : max) / Math.max(ce, cf);
		if (aK3 < 1 && (ce = Math.floor(aK3 * ce + .125), cf = Math.floor(aK3 * cf + .125)), max < ce || max < cf || ce < 10 || cf < 10) aK3 = "Invalid Image Dimensions!", bD.jp ? bD.jp.showToast(aK3) : alert(aK3);
		else {
			for (var max = document.createElement("canvas"), aK3 = (max.width = ce, max.height = cf, max.getContext("2d")), aK5 = document.createElement("canvas"), aK6 = (aK5.width = b8.width, aK5.height = b8.height, aK5.getContext("2d")), b8 = (aK6
					.drawImage(b8, 0, 0), aK6.getImageData(0, 0, aK5.width, aK5.height)), aK6 = aK3.createImageData(ce, cf), src = b8.data, aK9 = aK6.data, a75 = aK5.width / ce, a77 = aK5.height / cf, fn = 0; fn < cf; fn++)
				for (var fm = 0; fm < ce; fm++) {
					var aKA = Math.floor(fm * a75),
						aKA = 4 * (Math.floor(fn * a77) * aK5.width + aKA),
						aKD = 4 * (fn * ce + fm);
					aK9[aKD] = src[aKA], aK9[1 + aKD] = src[1 + aKA], aK9[2 + aKD] = src[2 + aKA], aK9[3 + aKD] = 255
				}
			aK3.putImageData(aK6, 0, 0), 20 === c9.cA && c9.r2().aK2(max)
		}
	}
	this.f = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJx
	}, this.pE = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJy = function() {
		input.click()
	}, this.aK0 = function(aE9) {
		var bk = aE9.name.split("."),
			bk = bk[bk.length - 1].toLowerCase();
		"gif" !== bk && "jpg" !== bk && "jpeg" !== bk && "png" !== bk || ((bk = new FileReader).onload = aK1, bk.readAsDataURL(aE9))
	}
}

function aKE(data) {
	var r9, aKF, aKG, aKH, aKI, aKJ, aKK, colors, aKL, aKM, aKN = 0,
		aKO = 0,
		aKP = !1,
		aKQ = !1,
		aKR = [1, 5, 60, 240, 1440, 10080, 43200];

	function aKv(mz, n0) {
		! function(mz, n0) {
			return aKF < mz && mz < aKF + aKH && aKG < n0 && n0 < aKG + aKI
		}(aKN = mz, aKO = n0) ? (aKP && (eK.eN = !0), aKP = !1) : (aKP = !0, eK.eN = !0)
	}
	this.show = function() {
		aKQ = l.bj.data[127].value, r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize();
		var bt = bI.hu,
			tO = r9.aGv(),
			aKa = bt * tO.aGz,
			bt = bt * tO.aGw;
		aKJ = aS.bG.hv(.06), aKK = aS.bG.hv(.04), aKF = aS.bG.hv(.06), aKG = bt + aKJ, aKH = bI.ce - aKF - aKK, aKI = aKa + bt - aKG - aKK
	}, this.fc = function() {
		r9.fc(),
			function() {
				var j, aJs, ae, fm, bc, bk = data.data,
					aKe = 1,
					aKf = .125,
					aKg = aKQ ? 65536 : 0;
				for (j = 0; j < bk.length; j++)
					for (aJs = bk[j].aJs, ae = aJs.length, aKe = Math.max(ae, aKe), bc = 0; bc < ae; bc++) aKf = Math.max(aJs[bc], aKf), aKg = Math.min(aJs[bc], aKg);
				var jy = aKG + aKI,
					a6V = aKI / (aKf - aKg),
					a6U = 1 / (aKe - 1);
				for (fW.lineWidth = hn.a6Y, j = 0; j < bk.length; j++) {
					for (aJs = bk[j].aJs, ae = aJs.length, fm = aKF, fW.beginPath(), fW.moveTo(fm + aKH, jy - a6V * (aJs[ae - 1] - aKg)), bc = ae - 2; 0 <= bc; bc--) fW.lineTo(fm + a6U * bc * aKH, jy - a6V * (aJs[bc] - aKg));
					fW.strokeStyle = colors[j], fW.stroke()
				}(function(aKg, aKf, jy, a6V) {
					fW.font = aS.bG.bQ(0, .25 * aKF), aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 2), fW.fillStyle = colors[0];
					for (var fm = .92 * aKF, j = 0; j < 3; j++) {
						var h9 = aKg + j * (aKf - aKg) / 2;
						fW.fillText((h9 / 1e3).toFixed(3), fm, jy - a6V * (h9 - aKg))
					}
				})(aKg, aKf, jy, a6V),
				function(aKe) {
					var fn = aKG + aKI + .15 * aKK;
					fW.font = aS.bG.bQ(0, Math.min(.4 * aKK, .028 * bI.ce)), aS.bG.textBaseline(fW, 0), aS.bG.textAlign(fW, 2), fW.fillStyle = colors[0], fW.fillText(aS.aKX.ke(aKL), aKF + aKH, fn), aS.bG.textAlign(fW, 0), fW.fillText(aS.aKX.ke(
						new Date(aKM.getTime() - 6e4 * (aKe - 1) * aKR[data.aKW])), aKF, fn)
				}(aKe),
				function(aKe, aKg, aKf) {
					if (aKP && !(aKe < 2)) {
						for (var aKs, k = (aKN - aKF) / aKH * (aKe - 1), aKj = Math.floor(k), aKk = Math.floor(1 + k), aKl = k - aKj, aKm = 1e5, y9 = -1, aKn = -1, aKo = aKf - (aKf - aKg) * (aKO - aKG) / aKI, bk = data.data, j = 0; j < bk
							.length; j++) {
							var aKp, aJs = bk[j].aJs;
							aJs.length <= aKk || (aJs = aJs[aKj] + aKl * (aJs[aKk] - aJs[aKj]), (aKp = Math.abs(aKo - aJs)) < aKm && (aKm = aKp, y9 = j, aKn = aJs))
						} - 1 !== y9 && (aKf = aKG + aKI - (aKn - aKg) / (aKf - aKg) * aKI, fW.lineWidth = .5 * hn.a6Y, fW.strokeStyle = colors[y9], fW.beginPath(), fW.moveTo(aKF, aKf), fW.lineTo(aKN, aKf), fW.lineTo(aKN, aKG + aKI), fW.stroke(),
							fW.beginPath(), fW.arc(aKN, aKf, .1 * aKF, 0, 2 * Math.PI), fW.fillStyle = colors[y9], fW.fill(), aKg = aKG + aKI + .15 * aKK, aS.bG.textAlign(fW, 1), aKs = aKe - 2 < k ? (aKs = aKM.getTime() - 6e4 * aKR[data.aKW],
								new Date(aKs + (k - (aKe - 2)) * (aKL.getTime() - aKs))) : new Date(aKM.getTime() - 6e4 * (aKe - k - 1) * aKR[data.aKW]), aKe = aS.aKX.ke(aKs), k = aS.bG.measureText(aKe), aKs = aN.fL(aKN, aKF + .5 * k, aKF +
								aKH - .5 * k), fW.fillStyle = aS.color.bb(70, 50, 20), fW.fillRect(aKs - .52 * k, aKG + aKI, 1.04 * k, .55 * aKK), fW.fillStyle = colors[0], fW.fillText(aKe, aKs, aKg), fW.font = aS.bG.bQ(0, .25 * aKF), aS.bG
							.textBaseline(fW, 1), aS.bG.textAlign(fW, 2), aKs = .92 * aKF, aKe = (aKn / 1e3).toFixed(3), k = aS.bG.measureText(aKe), aKg = aKs - 1.04 * k, fW.fillStyle = aS.color.bb(70, 50, 20), fW.fillRect(aKg, aKf - .1625 *
								aKF, aKF - aKg, .275 * aKF), fW.fillStyle = colors[y9], fW.fillText(aKe, aKs, aKf))
					}
				}(aKe, aKg, aKf)
			}(), fW.lineWidth = hn.a6Y, fW.strokeStyle = fg.fk, fW.beginPath(), fW.moveTo(aKF, aKG), fW.lineTo(aKF, aKG + aKI), fW.lineTo(aKF + aKH, aKG + aKI), fW.stroke();
		var j, fontSize = .5 * aKJ,
			bk = (fW.font = aS.bG.bQ(0, fontSize), aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 0), data.data),
			h = bk.length,
			fn = aKG - .5 * aKJ,
			bq = "";
		for (j = 0; j < h; j++) bq += bk[j].name + "  ";
		bq = bq.trim();
		var wD = aS.bG.measureText(bq),
			fm = .5 * (bI.ce - wD);
		for (wD > bI.ce && (fm = 0, fW.font = aS.bG.bQ(0, bI.ce / wD * fontSize)), j = 0; j < h; j++) fW.fillStyle = colors[j], fW.fillText(bk[j].name, fm, fn), fm += aS.bG.measureText(bk[j].name + "  ")
	}, this.tj = function(mz, n0) {
		aKv(mz, n0)
	}, this.mx = function(mz, n0) {
		aKv(mz, n0)
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	};
	var j, aX, kc, j8, ao = data.data,
		h = ao.length,
		max = 1;
	for (j = 0; j < h; j++) max = Math.max(max, ao[j].aJs.length);
	for (j = 0; j < h; j++)
		for (; ao[j].aJs.length < max;) ao[j].aJs.unshift(0);
	aX = new Date, kc = 6e4 * aX.getTimezoneOffset(), j8 = aX.getTime() - kc, aKL = new Date(j8), 6 === data.aKW ? function(aX, kc) {
		var aKZ = aX.getUTCFullYear(),
			aX = aX.getUTCMonth() + 1;
		aKM = aX < 12 ? new Date(Date.UTC(aKZ, aX) - kc) : new Date(Date.UTC(aKZ + 1, 0) - kc)
	}(aX, kc) : (kc = 6e4 * aKR[data.aKW], aKM = data.aKW <= 4 ? new Date(j8 + kc - aX.getTime() % kc) : new Date(j8 + kc - (aX.getTime() + 2592e5) % kc)), j8 = aS.color, colors = [fg.fk, j8.bb(255, 0, 0), j8.bb(0, 200, 0), j8.bb(80, 80, 255), j8
		.bb(255, 255, 0), j8.bb(255, 0, 255), j8.bb(0, 255, 255), j8.bb(255, 140, 0), j8.bb(128, 128, 128), j8.bb(0, 255, 140)
	], r9 = new f0(L(292) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKW] + ", " + aS.aKX.kb(aKL), [new bV("⬅️ " + L(43), function() {
		c9.ed(1)
	}), new bV(L(71), function() {
		c9.ed(14)
	})], !1)
}

function zb() {
	this.aBQ = function(k, jn) {
		return Number(this.aBR(k, jn))
	}, this.aBR = function(k, jn) {
		var h9 = null;
		return 0 === bD.id ? bD.jo && (h9 = bD.jo.getItem((jn ? "v" : "d") + k)) : 1 === bD.id ? h9 = bD.jp.loadString((jn ? 1e3 : 2e3) + k) : 2 === bD.id && (h9 = bD.jq[(jn ? "v" : "d") + k]), h9 && 0 !== h9.length ? h9 : null
	}, this.aKw = function(h, aKx) {
		var bk = [],
			aKy = aKx ? "e" : "l";
		if (0 === bD.id) {
			if (bD.jo)
				for (j = 0; j < h; j++) bk.push(bD.jo.getItem(aKy + j))
		} else if (1 === bD.id)
			for (var aKz = aKx ? 5e3 : 3e3, j = 0; j < h; j++) bk.push(bD.jp.loadString(aKz + j));
		else if (2 === bD.id)
			for (j = 0; j < h; j++) bk.push(bD.jq[aKy + j]);
		return bk
	}, this.save = function(k, value, jn) {
		var aL0 = (jn ? "v" : "d") + k;
		if (0 === bD.id) {
			if (bD.jo && l.bj.data[140].value) try {
				bD.jo.setItem(aL0, value)
			} catch (b8) {
				console.log(b8)
			}
		} else 1 === bD.id ? bD.jp.saveString((jn ? 1e3 : 2e3) + k, value) : 2 === bD.id && (bD.jq[aL0] = value, bD.jr.postMessage(aL0 + " " + value))
	}, this.aL1 = function(bk, aKx) {
		var h = bk.length,
			aKy = aKx ? "e" : "l";
		if (0 === bD.id) {
			if (bD.jo && l.bj.data[140].value) try {
				for (j = 0; j < h; j++) bD.jo.setItem(aKy + j, bk[j])
			} catch (b8) {
				console.log(b8)
			}
		} else if (1 === bD.id)
			for (var aKz = aKx ? 5e3 : 3e3, j = 0; j < h; j++) bD.jp.saveString(aKz + j, bk[j]);
		else if (2 === bD.id)
			for (j = 0; j < h; j++) bD.jq[aKy + j] = bk[j], bD.jr.postMessage(aKy + j + " " + bk[j])
	}
}

function zd() {
	function aL4(bk) {
		if (0 === bk.length) l.m.n(116, "");
		else {
			for (var aL7 = bk[0], j = 1; j < bk.length; j++) aL7 += ";" + bk[j];
			l.m.n(116, aL7)
		}
	}
	this.aCs = function() {
		l.bj.data[110].value.length && (l.bj.data[106].value = l.bj.data[110], l.m.n(110, ""), this.aL2())
	}, this.aL2 = function() {
		var bk = l.bj.data[116].value.split(";");
		for (bk.length % 2 == 1 && bk.pop(), bk.unshift(l.bj.data[106].value), bk.unshift(l.bj.data[105].value), j = 2; j < bk.length; j += 2)
			if (bk[j] === bk[0]) {
				bk.splice(j, 2);
				break
			} for (var aL3 = [], j = 0; j < bk.length; j += 2) aL3.push(bk[j]);
		aL4(bk), l.bj.data[117].value = 0, l.bj.data[117].i = aL3
	}, this.aL5 = function(k) {
		l.bj.data[117].i.splice(k, 1), l.bj.data[117].value = Math.min(k, l.bj.data[117].i.length - 1);
		var bk = l.bj.data[116].value.split(";");
		bk.splice(2 * k, 2), aL4(bk)
	}, this.aL6 = function(k) {
		var bk = l.bj.data[116].value.split(";");
		return {
			cQ: bk[2 * k],
			password: bk[2 * k + 1]
		}
	}, this.aL8 = function() {
		var h9 = aN.fL(l.bj.data[121].value, -1, 262143);
		return h9 = -1 === h9 ? ~~(262144 * Math.random()) : h9
	}, this.zg = function() {
		var bk = document.cookie.split(";");
		for (let j = 0; j < bk.length; j++) {
			var bq = bk[j].trim(),
				aJE = bq.indexOf("="),
				aJE = 0 <= aJE ? bq.substring(0, aJE) : bq;
			document.cookie = aJE + "=;expires=0;path=/", document.cookie = aJE + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = aJE + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function a42() {
	var aL9, aLA, aLB;

	function aLG(j) {
		var button = a3N.kS[j],
			fm = button.fm,
			fn = button.fn,
			ce = button.ce,
			cf = button.cf;
		fW.fillStyle = button.aLE, fW.fillRect(fm, fn, ce, cf), j === aL9 && (fW.fillStyle = aLB, fW.fillRect(fm, fn, ce, cf)), fW.lineWidth = hn.a6Y, fW.strokeStyle = aLA, fW.strokeRect(fm, fn, ce, cf),
			function(button) {
				var fm = button.fm,
					fn = button.fn,
					ce = button.ce,
					cf = button.cf;
				aS.bG.textAlign(fW, 1), aS.bG.textBaseline(fW, 1), fW.font = button.font, fW.fillStyle = aLA, fW.fillText(button.lN, Math.floor(fm + ce / 2), Math.floor(fn + cf / 2 + .1 * button.fontSize))
			}(button)
	}
	this.ce = 0, this.cf = 0, this.fn = 0, this.gap = 0, this.f = function() {
		aL9 = -1, aLA = fg.fk, aLB = "rgba(255,255,255,0.16)", this.kS = new Array(7), this.cf = Math.floor((bD.bE.bF() ? .123 : .093) * bI.ht), this.ce = Math.floor((bD.bE.bF() ? 3.96 : 4.2) * this.cf), this.gap = Math.floor(.025 * this.ce);
		var aLC = Math.floor(.26 * this.cf),
			aLD = aS.bG.bQ(1, aLC);
		this.kS[0] = {
			fm: 0,
			fn: 0,
			ce: Math.floor(.6 * this.ce - this.gap / 2),
			cf: this.cf,
			lN: "Multiplayer",
			font: aLD,
			aLE: "rgba(22,88,22,0.8)",
			fontSize: aLC
		}, aLC = Math.floor(.18 * this.cf), aLD = aS.bG.bQ(1, aLC), this.kS[1] = {
			fm: 0,
			fn: 0,
			ce: this.ce - this.kS[0].ce - this.gap,
			cf: this.cf,
			lN: "Single Player",
			font: aLD,
			aLE: "rgba(22,88,88,0.8)",
			fontSize: aLC
		}, this.kS[2] = {
			fm: 0,
			fn: 0,
			ce: this.ce,
			cf: Math.floor(.3 * this.cf),
			lN: "",
			font: this.kS[1].font,
			aLE: "rgba(100,0,0,0.8)",
			fontSize: this.kS[1].fontSize
		}, this.kS[3] = {
			fm: 0,
			fn: 0,
			ce: this.ce,
			cf: this.cf,
			lN: "Back",
			font: this.kS[0].font,
			aLE: "rgba(0,0,0,0.8)",
			fontSize: this.kS[0].fontSize
		}, this.kS[4] = {
			fm: 0,
			fn: 0,
			ce: this.ce,
			cf: Math.floor(.3 * this.cf),
			lN: "The game was updated!",
			font: this.kS[1].font,
			aLE: "rgba(100,0,0,0.8)",
			fontSize: this.kS[1].fontSize
		}, this.kS[5] = {
			fm: 0,
			fn: 0,
			ce: this.kS[0].ce,
			cf: Math.floor(.8 * this.cf),
			lN: "Reload",
			font: this.kS[0].font,
			aLE: "rgba(0,100,0,0.8)",
			fontSize: this.kS[0].fontSize
		}, this.kS[6] = {
			fm: 0,
			fn: 0,
			ce: this.kS[1].ce,
			cf: this.kS[5].cf,
			lN: "Back",
			font: this.kS[0].font,
			aLE: "rgba(0,0,0,0.8)",
			fontSize: this.kS[0].fontSize
		}, this.a53()
	}, this.a53 = function() {
		this.fn = Math.floor(.54 * bI.cf), this.kS[0].fm = Math.floor(.5 * bI.ce - .5 * this.ce), this.kS[1].fm = this.kS[0].fm + this.kS[0].ce + this.gap, this.kS[2].fm = this.kS[3].fm = this.kS[0].fm, this.kS[4].fm = this.kS[5].fm = this.kS[0]
			.fm, this.kS[6].fm = this.kS[1].fm, this.kS[0].fn = Math.floor(.54 * bI.cf), this.kS[1].fn = this.kS[0].fn, this.kS[2].fn = Math.floor((bI.cf - this.kS[2].cf - this.kS[3].cf - this.gap) / 2), this.kS[3].fn = this.kS[2].fn + this.kS[2]
			.cf + this.gap, this.kS[4].fn = Math.floor((bI.cf - this.kS[4].cf - this.kS[5].cf - this.gap) / 2), this.kS[5].fn = this.kS[6].fn = this.kS[4].fn + this.kS[4].cf + this.gap
	}, this.aLF = function() {
		aLG(0), aLG(1)
	}, this.aLH = function() {
		aLG(2), aLG(3)
	}, this.aLI = function() {
		aLG(4), aLG(5), aLG(6)
	}, this.mx = function(fm, fn, eR) {
		var j = -1;
		return 0 === cL.qs() ? j = this.aAN(fm, fn, 0, 2) : 3 === cL.qs() ? j = this.aAN(fm, fn, 3, 1) : 5 === cL.qs() && (j = this.aAN(fm, fn, 5, 2)), aL9 !== j && (aL9 = j, eR) && (eK.eN = !0), -1 !== j && (qz.aAJ(), !0)
	}, this.aAN = function(fm, fn, aLJ, size) {
		for (var j = aLJ; j < aLJ + size; j++)
			if (fm >= this.kS[j].fm && fn >= this.kS[j].fn && fm <= this.kS[j].fm + this.kS[j].ce && fn <= this.kS[j].fn + this.kS[j].cf) return j;
		return -1
	}
}

function aLL() {
	this.xw = function(player, id) {
		for (var aLM = ad.sn[player], h = aLM.length, j = 0; j < h; j++)
			if (dl.zj(aLM[j], id)) return !0;
		return !1
	}, this.xz = function(player, ls) {
		for (var zu, aLN, nw, aLM = ad.sn[player], h = aLM.length, ce = a2.a3, aLP = dl.lv(ls), aLQ = dl.lw(ls), a8m = -1, min = a2.a3 * a2.a3 + a2.a4 * a2.a4, id = ag.rn(dl.ww(ls)), j = 0; j < h; j++)(aLN = (aLN = aLP - (zu = (nw = aLM[j]) >>
			2) % ce) * aLN + (aLN = aLQ - ~~((.5 + zu) / ce)) * aLN) < min && dl.zj(nw, id) && (min = aLN, a8m = zu);
		return a8m
	}, this.sj = function(zt, zu) {
		for (var id = ag.rn(dl.ww(zu)), wu = dl.wv, nw = dl.ww(zt), aLR = -1, j = 0; j < 4; j++) {
			var rq = nw + wu[j];
			ag.zH(rq) && ag.rn(rq) === id && (-1 === aLR || dl.sq(dl.a08(rq), zu) < dl.sq(aLR, zu)) && (aLR = dl.a08(rq))
		}
		return aLR
	}, this.aES = function(player, ls) {
		for (var wu = dl.wv, nw = dl.ww(ls), j = 0; j < 4; j++) {
			var rq = nw + wu[j];
			if (ag.aq(rq) && ag.wx(player, rq)) return !0
		}
		return !1
	}, this.a8c = function(player, ls) {
		for (var wu = dl.wv, nw = dl.ww(ls), j = 0; j < 4; j++) {
			var rq = nw + wu[j];
			if (ag.at(rq)) return !0;
			if (ag.aq(rq)) {
				rq = ag.ar(rq);
				if (player !== rq && aC.hW(player, rq)) return !0
			}
		}
		return !1
	}, this.sy = function(ls) {
		for (var wu = dl.wv, nw = dl.ww(ls), j = 0; j < 4; j++) {
			var rq = nw + wu[j];
			if (ag.aq(rq)) {
				rq = ag.ar(rq);
				if (aS.aT.gy(rq)) return rq
			}
		}
		return -1
	}, this.a2d = function(nw) {
		if (ag.zH(nw))
			for (var wu = dl.wv, j = 0; j < 4; j++)
				if (ag.ah(nw + wu[j])) return !0;
		return !1
	}, this.aCC = function(player, id) {
		for (var rV = player << 3, rY = rV + dm.b0.oI[player], oD = dm.b0.oD, oJ = dm.b0.oJ, j = rV; j < rY; j++) {
			var aLS = oJ[j];
			if (oD[aLS] === id) return aLS
		}
		return -1
	}, this.aCE = function(player) {
		return 0 === dm.b0.oI[player] ? -1 : dm.b0.oJ[player << 3]
	}, this.aLT = function(mz, n0) {
		var h = dm.b0.o6;
		if (h < 1) return -1;
		for (var o9 = dm.b0.o9, p7 = 80, y9 = -1, j = 0; j < h; j++) {
			var p0 = dl.zo(mz, n0, o9[j]);
			p0 < p7 && (p7 = p0, y9 = j)
		}
		return function(j, mz, n0) {
			if (j < 0) return;
			var aLY = dm.b0.o9[j],
				aLZ = dl.zq(aLY),
				aLY = dl.zs(aLY),
				j = 20 * (.9 + .1 * Math.log10(dm.b0.oB[j]));
			return j = Math.max(j, dl.a00(aS.bG.hv(.02, 1.7))), aN.aDP(dl.zp(mz), dl.zr(n0), aLZ, aLY, j)
		}(y9, mz, n0) ? y9 : -1
	}, this.xr = function(tr) {
		for (var h = dm.b0.o6, oD = dm.b0.oD, j = 0; j < h; j++)
			if (oD[j] === tr) return dN.gY[2] = j, !0;
		return !1
	}, this.oV = function(player) {
		for (var rV = player << 3, rY = rV + dm.b0.oI[player], oJ = dm.b0.oJ, oB = dm.b0.oB, hH = 0, j = rV; j < rY; j++) hH += oB[oJ[j]];
		return hH
	}, this.y7 = function(player, xn) {
		xn = dm.b0.oG[xn];
		return this.aES(player, xn[xn.length - 1])
	}, this.y5 = function(zt, zu, p0, aLV) {
		var zw = dl.lv(zt),
			zt = dl.lw(zt),
			zy = dl.lv(zu),
			zu = dl.lw(zu),
			zy = (p0 = Math.max(p0, 1), zy - zw),
			zu = zu - zt,
			mv = aN.aO(Math.abs(zy) * aLV, p0),
			aLV = aN.aO(Math.abs(zu) * aLV, p0);
		return dl.a04(zw + Math.sign(zy) * mv, zt + Math.sign(zu) * aLV)
	}, this.a7U = function(oM, ls) {
		for (var h = oM.length - 1, fm = dl.lv(ls), fn = dl.lw(ls), j = 0; j < h; j++) {
			var zt = oM[j],
				zu = oM[j + 1],
				jx = dl.lv(zt),
				zt = dl.lw(zt),
				jz = dl.lv(zu),
				zu = dl.lw(zu);
			if (!(fm !== jx && fm !== jz && Math.sign(fm - jx) === Math.sign(fm - jz) || fn !== zt && fn !== zu && Math.sign(fn - zt) === Math.sign(fn - zu))) {
				if (jx === jz || zt === zu) return j;
				if (Math.abs(fm - jx) === Math.abs(fn - zt) && Math.abs(fm - jz) === Math.abs(fn - zu)) return j
			}
		}
		return -1
	}, this.aLb = function() {
		for (var aLc = em[0], o8 = dm.b0.o8, o6 = dm.b0.o6, bk = [], j = 0; j < o6; j++) aS.aT.gs(aLc, o8[j] >> 3) && bk.push(j);
		return bk
	}, this.aEQ = function(player, oM) {
		for (var rV = player << 3, rY = rV + dm.b0.oI[player], oJ = dm.b0.oJ, oG = dm.b0.oG, ov = oM[0], ow = oM[oM.length - 1], j = rV; j < rY; j++) {
			var am = oG[oJ[j]];
			if (am[0] === ov && am[am.length - 1] === ow) return !0
		}
		return !1
	}
}

function a3n() {
	var size, aLd;
	this.f = function() {
		size = aP.cv, aLd = new Uint16Array(aP.aj);
		for (var ct = aP.ct, j = aP.cv - 1; 0 <= j; j--) aLd[j] = ct + j
	}, this.iL = function() {
		dn.aLe.iL();
		for (var j = size - 1; 0 <= j; j--)
			if (0 === ad.eQ[aLd[j]]) {
				bc = void 0;
				var bc = j;
				size--, aLd[bc] = aLd[size]
			} else dr.iL(aLd[j])
	}, this.aEU = function(am) {
		aLd[size++] = am
	}
}

function a47() {
	this.h0 = null, this.ek = 0, this.dv = function() {
		for (this.ek = 0, j = aP.aj - 1; 0 <= j; j--) 0 !== ad.eQ[j] && this.ek++;
		this.h0 = new Uint16Array(this.ek);
		for (var h = 0, j = 0; j < aP.aj; j++) 0 !== ad.eQ[j] && (this.h0[h++] = j)
	}, this.aLh = function() {
		for (var el = ad.el, vC = ad.vC, vH = ad.vH, h0 = du.h0, j = du.ek - 1; 0 <= j; j--) {
			var am = h0[j],
				aX = el[am],
				bl = vC[am];
			aX <= aN.aO(bl, 4) ? a3Q.bv(am) : bl <= aX ? 250 <= (vC[am] = aX) && (vH[am] = 1) : vC[am] = bl - Math.max(1, aN.aO(bl - aX, 1e3))
		}
		this.aFd()
	}, this.aFd = function() {
		for (var eQ = ad.eQ, ln = this.h0, lm = this.ek, j = lm - 1; 0 <= j; j--) 0 === eQ[ln[j]] && (ln[j] = ln[--lm]);
		this.ek = lm
	}
}

function rX(id, qH, aLj) {
	var r9, a8u;

	function aLm() {
		a8u.aG3.innerHTML += "<br>" + L(295)
	}

	function aLw() {
		var bd = 1;
		c9.ed(4, 1, new a5G(L(296), L(297), !1, [new bV("🔄 Reload", function() {
			bd && (setTimeout(function() {
				c9.ed(1)
			}, 5e3), bD.bE.a5N()), bd = 0
		}, fg.tb)]))
	}

	function aLl() {
		pJ.cM(90), pJ.q9(30, Math.floor(aN.pow(30) * Math.random())), pJ.q9(30, Math.floor(aN.pow(30) * Math.random())), pJ.q9(30, Math.floor(aN.pow(30) * Math.random())), qb.f(pJ.pD), l.m.n(110, gE.gF.pW(gE.gF.pX(15))), az.jS.qE()
	}
	this.aLk = !0, this.aDD = id, this.show = function() {
		r9.show(), this.resize(), 15 === id ? (az.b0.aFO(id) ? aLl : aLm)() : 16 === id ? az.b0.aFO(id) ? az.b2.qp(2) : aLm() : 17 === id ? az.b0.aFO(id) ? az.b2.qp(3) : aLm() : 18 === id ? (az.b0.close(0, 3253), az.b0.aDr(0, id), aLm()) : 21 ===
			id ? az.b0.aFO(id) ? az.aLn.aLo(qH.rE, qH.rV, qH.rY) : aLm() : 22 === id ? az.b0.aFO(id) ? az.aLn.aLp(qH.rE, qH.aLq, qH.aLr) : aLm() : 23 === id ? az.b0.aFO(id) ? az.aLn.aLs(qH.aKW, qH.aLt) : aLm() : 24 === id ? az.b0.aFO(id) ? az.aLn
			.aLu(qH.aKW, qH.rV, qH.rY) : aLm() : 25 === id ? az.b0.aFO(id) ? az.jS.qQ(qH) : aLm() : 28 === id ? az.b0.aFO(id) ? az.aLn.aLv(qH.rE, qH.aLq, qH.aLr) : aLm() : 29 === id ? az.b0.aFO(id) ? az.jS.qG(qH) : aLm() : 30 === id && (az.b0
				.aFO(id) ? qN.r1() || aLw() : aLm())
	}, this.r3 = function() {
		15 === id ? aLl() : 16 === id ? az.b2.qp(2) : 17 === id ? az.b2.qp(3) : 18 === id ? c9.ed(8, this.rW, new rX(16)) : 21 === id ? az.aLn.aLo(qH.rE, qH.rV, qH.rY) : 22 === id ? az.aLn.aLp(qH.rE, qH.aLq, qH.aLr) : 23 === id ? az.aLn.aLs(qH
			.aKW, qH.aLt) : 24 === id ? az.aLn.aLu(qH.aKW, qH.rV, qH.rY) : 25 === id ? az.jS.qQ(qH) : 28 === id ? az.aLn.aLv(qH.rE, qH.aLq, qH.aLr) : 29 === id ? az.jS.qG(qH) : 30 === id ? qN.r1() || aLw() : 1e3 === id && (this.aDD = id = 25,
			az.jS.qQ(qH))
	}, this.r4 = function(code, n2, data) {
		!n2 && code !== id || (15 === code || 16 === code ? c9.ed(7, this.rW) : 17 === code ? (az.b0.close(0, 3252), l.b0.aL5(0), l.bj.data[117].i && 0 < l.bj.data[117].i.length ? (n2 = l.b0.aL6(0), l.m.n(105, n2.cQ), l.m.n(106, n2.password), c9
			.ed(8, this.rW, new rX(16))) : (l.m.n(105, ""), c9.b0.aEn())) : 21 === code ? c9.ed(10, this.rW, new r8(data)) : 23 === code ? c9.ed(13, this.rW, new aKE({
			data: data,
			aKW: qH.aKW
		})) : 25 === code ? (c9.b0.aB9.cQ = qH.cQ, l.jg.vv(qH.cQ), c9.ed(15, this.rW)) : 30 === code && (data ? c9.ed(1) : aLw()))
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a8u.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(L(293), [new bV("⬅️ " + L(43), function() {
		aLj ? c9.ed(29) : c9.b0.aEn()
	})]), a8u = new a8w(r9.f3, L(294))
}

function dL() {
	this.dR = function() {
		var aLx = aP.data;
		aS.f8.aFC(aLx.teamPlayerCount, aLx.playerCount), aLx.numberTeams = aS.f8.aF6(aLx.teamPlayerCount, 0), aLx.teamPlayerCount[0] && aLx.teamPlayerCount[7] && (aLx.teamPlayerCount[7] = 0, this.dR())
	}, this.xA = function() {
		var aLx = aP.data;
		aLx.mapType < 2 ? a2.cM(a2.a30(aLx), aLx.mapSeed) : a2.a2w(aLx.canvas)
	}, this.aFp = function() {
		var aLx = aP.data;
		aLx.colorsData || (aLx.colorsData = new Uint32Array(1)), aLx.selectableColor && (aLx.colorsData[0] = l.b0.aL8()), aLx.selectableName && (aLx.playerNamesData || (aLx.playerNamesData = new Array(1)), aLx.playerNamesData[0] = l.bj.data[122]
			.value)
	}, this.aG5 = function() {
		aP.data = new cF, aP.data.aIncomeType = 2, aP.data.aIncomeData = new Uint8Array(aP.aj), aP.data.aIncomeData[0] = 64
	}
}

function a3m() {
	var aLy, aLz, aM0;

	function aM2(uI) {
		for (var j = aLy - 1; 0 <= j; j--) 0 === aM0[aLz[j]] && ad.el[aLz[j]] >= uI && a5(aLz[j])
	}

	function aM1(player) {
		var aX;
		64 === aM0[player] ? aM0[player] = 6 : (aX = ad.el[player], aM0[player] = aX < 1e3 ? 3 : aX < 1e4 ? 2 : aX < 6e4 ? 1 : 0)
	}
	this.f = function() {
		aLy = 0, aLz = new Uint16Array(aP.aj), aM0 = new Uint8Array(aP.aj)
	}, this.iL = function() {
		for (var j = aLy - 1; 0 <= j; j--) 64 === aM0[aLz[j]] ? aM1(aLz[j]) : 0 == aM0[aLz[j]]-- && (aM1(aLz[j]), a5(aLz[j]));
		16e4 <= ad.el[em[0]] && (aM2(16e4), 3e5 <= ad.el[em[0]]) && aM2(3e5), aS.aT.h4(aP.cs) && (aZ.w8[7] = Math.max(ad.el[aP.cs], aZ.w8[7]))
	}, this.aW = function(player) {
		for (var bc, j = aLy - 1; 0 <= j; j--)
			if (player === aLz[j]) {
				for (aLy--, bc = j; bc < aLy; bc++) aLz[bc] = aLz[bc + 1];
				return
			}
	}, this.ru = function(player, aM4) {
		for (var j = aLy - 1; 0 <= j; j--)
			if (player === aLz[j]) return;
		aLz[aLy++] = player, aM0[player] = aM4 ? 2 : 64
	}
}

function aM5() {
	this.qc = function(pM) {
		for (var wM = qb, size = wM.pF(pM), aM6 = 7 + 9 * wM.pF(1), bk = [], j = 0; j < size; j++) bk.push(String.fromCharCode(wM.pF(aM6)));
		return bk.join("")
	}
}

function aM7() {
	function aMM(bk, rV, rY) {
		var aMN = bk[rV];
		bk[rV] = bk[rY], bk[rY] = aMN
	}
	this.c3 = [
		[],
		[],
		[],
		[]
	], this.bw = [0, 0, 0, 0], this.c7 = [], this.aET = function(aM8, cQ, username, gA, gB, gC, elo, color, g0, gH) {
		username = this.aHQ(cQ, username, gA, gB, gC, elo, color, g0, gH);
		this.c3[aM8].push(username), bx.jf === cQ && (bx.cP = username), bx.aM9.jd(cQ) && (username.jh = 1), bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === aM8 && 1 === bx.b0.cB[2]
	}, this.aHQ = function(cQ, username, gA, gB, gC, elo, color, g0, gH) {
		return {
			cQ: cQ,
			username: username,
			gA: gA,
			gB: gB,
			gC: gC,
			elo: elo,
			color: color,
			g0: g0,
			gH: gH
		}
	}, this.aMA = function(k, aM8, gA, gB, gC, elo, g0) {
		k = this.c3[aM8][k];
		k.gA = gA, k.gB = gB, k.gC = gC, k.elo = elo, k.g0 = g0, bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === aM8 && 1 === bx.b0.cB[2]
	}, this.aMB = function(k, aM8, aMC) {
		var k = this.c3[aM8][k],
			aMD = k.username,
			aHW = "Redacted " + gE.gF.gG(k.cQ, 2);
		k.username = aMC ? "[" + aS.fO.aME(aMD) + "] " + aHW : aHW, aMD.indexOf("Redacted") < 0 && (k.aHM = aMD), bx.ms.aHY(k.cQ), bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === aM8 && 1 === bx.b0.cB[2]
	}, this.aMF = function(k, aMG, aMH) {
		var player = this.c3[aMG][k];
		this.aMI(k, aMG), this.c3[aMH].push(player), bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === aMH && 1 === bx.b0.cB[2]
	}, this.aMI = function(k, aMG) {
		var by = this.c3[aMG];
		this.c7.push(by[k]), 1e3 < this.c7.length && this.c7.shift(), k >= this.bw[aMG] ? by[k] = by[by.length - 1] : (this.bw[aMG]--, 2 === aMG ? (by.splice(this.bw[aMG] + 1, 0, by[by.length - 1]), by.splice(k, 1)) : (by[k] = by[this.bw[aMG]],
			by[this.bw[aMG]] = by[by.length - 1])), by.pop(), bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === aMG && 1 === bx.b0.cB[2]
	}, this.aMJ = function(k, aMK) {
		bx.b0.c8 += 29 === c9.cA && bx.b0.cB[0] === aMK && 1 === bx.b0.cB[2];
		var by = this.c3[aMK],
			g3 = by[k];
		if (2 === aMK)
			if (k >= this.bw[aMK]) {
				bx.aM9.join(g3);
				for (var aML = this.bw[aMK], elo = g3.elo; aML && elo > by[aML - 1].elo;) aML--;
				by[k] = by[this.bw[aMK]], by.splice(this.bw[aMK]++, 1), by.splice(aML, 0, g3)
			} else by.splice(this.bw[aMK]--, 0, g3), by.splice(k, 1);
		else k >= this.bw[aMK] ? (bx.aM9.join(g3), aMM(by, this.bw[aMK]++, k)) : aMM(by, --this.bw[aMK], k)
	}, this.gI = function(cQ) {
		for (var c3 = this.c3, h = c3.length, j = 0; j < h; j++)
			for (var by = c3[j], bl = by.length, bc = 0; bc < bl; bc++)
				if (cQ === by[bc].cQ) return by[bc];
		return null
	}
}

function a4S() {
	var canvas, ff, g5, font, aKs = 0,
		aMO = !1,
		aMP = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aMQ = 5;

	function vw() {
		if (aMO) {
			var j, h = aMP.length,
				kN = Math.floor(.5 * g5.cf),
				cf = h * kN,
				fm = Math.floor(Math.floor(g5.fm) + .3 * g5.ce - .5),
				fn = Math.floor(Math.floor(g5.fn) - cf),
				ce = Math.floor(.4 * g5.ce + 2.5);
			for (fW.fillStyle = fg.a3J, fW.fillRect(fm, fn, ce, cf), fW.fillStyle = fg.aJ6, fW.fillRect(fm, fn + aMQ * kN, ce, kN), fW.fillStyle = fg.fk, fW.fillRect(fm, fn, 2, cf), fW.fillRect(fm, fn, ce, 2), fW.fillRect(fm + ce - 2, fn, 2, cf), j =
				1; j < h; j++) fW.fillRect(fm, fn + j * kN, ce, 2);
			for (fW.fillStyle = fg.fk, aS.bG.textAlign(fW, 1), aS.bG.textBaseline(fW, 1), fW.font = aS.bG.bQ(0, .6 * kN), fm += .5 * ce, j = 0; j < h; j++) fW.fillText(aMe(j), fm, fn + (j + .6) * kN)
		}
		fW.drawImage(canvas, Math.floor(g5.fm), Math.floor(g5.fn))
	}

	function vv(oa) {
		var fm, jx, jy, kN;
		ff.clearRect(0, 0, Math.floor(g5.ce), Math.floor(g5.cf)), ff.fillStyle = fg.a3J, ff.fillRect(0, 0, Math.floor(g5.ce), Math.floor(g5.cf)), aP.d4 && (ff.fillStyle = fg.aJ6, ff.fillRect(0, 0, Math.floor(.3 * g5.ce), Math.floor(g5.cf))), ff
			.fillStyle = fg.fk, ff.fillText("Hide UI", .15 * g5.ce, .5 * g5.cf), ff.fillRect(Math.floor(.3 * g5.ce - .5), 0, 2, Math.floor(g5.cf)), fm = .5 * g5.ce, ff.fillText("Replay Speed", fm, .31 * g5.cf), ff.fillText(aMe(aMQ), fm, .69 * g5.cf),
			ff.fillRect(Math.floor(.7 * g5.ce - .5), 0, 2, Math.floor(g5.cf)), oa.eg ? (fm = Math.floor(.02 * g5.ce), oa = Math.floor(.025 * g5.ce), jx = Math.floor(.85 * g5.ce - fm - .5 * oa), jy = Math.floor(.25 * g5.cf), kN = Math.floor(g5.cf) -
				2 * jy, ff.fillRect(jx, jy, fm, kN), ff.fillRect(jx + fm + oa, jy, fm, kN)) : function() {
				var ce = Math.floor(.46 * g5.cf),
					cf = Math.floor(.23 * g5.cf),
					fm = Math.floor(.85 * g5.ce - .5 * ce + ce / 12),
					fn = Math.floor(.5 * g5.cf - cf);
				ff.beginPath(), ff.moveTo(fm, fn), ff.lineTo(fm + ce, fn + cf), ff.lineTo(fm, fn + (cf << 1)), ff.fill()
			}(), ff.fillRect(0, 0, Math.floor(g5.ce), 2), ff.fillRect(0, 0, 2, Math.floor(g5.cf)), ff.fillRect(0, Math.floor(g5.cf) - 2, Math.floor(g5.ce), 2), ff.fillRect(Math.floor(g5.ce - 2), 0, 2, Math.floor(g5.cf))
	}

	function aMe(j) {
		return 5 === j ? "Normal" : "" + aMP[j]
	}
	this.eg = !1, this.f = function() {
		aP.d1 && (aMQ = 5, this.eg = !1, aMO = !1, g5 = new aCR([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.iM = function() {
		return aMP[aMQ]
	}, this.fa = function() {
		return g5.fn
	}, this.tg = function(aMR) {
		return !!aP.d1 && g5.fm + g5.ce > bI.ce - aMR - hn.gap
	}, this.resize = function() {
		aP.d1 && (g5.resize(), g5.fn -= (th.ti() - 1) * hn.gap, font = aS.bG.bQ(0, .3 * g5.cf), (canvas = document.createElement("canvas")).width = Math.floor(g5.ce), canvas.height = Math.floor(g5.cf), (ff = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aS.bG.textAlign(ff, 1), aS.bG.textBaseline(ff, 1), vv(this))
	}, this.a94 = function(aMS) {
		0 === aP.d2 || c9.td() || aMS !== aP.d4 && (aP.d4 = aMS, dx.resize(), eK.eN = !0, aP.d1) && (aKs = eK.iJ + 2e3, vv(this))
	}, this.tj = function(fm, fn) {
		if (!aP.d1) return !1;
		if (fm < g5.fm || fn < g5.fn || fm > g5.fm + g5.ce) return aMO && function(oa, fm, fn) {
			var h = aMP.length,
				kN = Math.floor(.5 * g5.cf),
				cf = h * kN,
				jx = Math.floor(Math.floor(g5.fm) + .3 * g5.ce - .5),
				cf = Math.floor(Math.floor(g5.fn) - cf),
				ce = Math.floor(.4 * g5.ce + 2.5);
			return aMO = !1, eK.eN = !0, fm < jx || jx + ce < fm || fn < cf || (aMQ = kJ(0, Math.floor((fn - cf) / kN), h - 1), vv(oa)), !0
		}(this, fm, fn);
		if ((fm -= g5.fm) < .3 * g5.ce) aMO = !1, this.a94(!aP.d4);
		else {
			if (fm < .7 * g5.ce) return aMO = !aMO, eK.eN = !0;
			this.iq(!1)
		}
		return !0
	}, this.iq = function(aMU) {
		2 === aP.d2 ? (this.a94(!1), c9.ed(3)) : (aMO = !1, this.eg = !this.eg, this.eg ? (e9.ef && e9.vt(), bD.bE.setState(1)) : aMU || e9.a95(), eK.eN = !0, vv(this))
	}, this.aMV = function() {
		this.eg = !1, e9.a95(), eK.eN = !0, vv(this)
	}, this.aAE = function(fm, fn) {
		return !!aP.d4 && (0 <= e9.tj(fm, fn) || (aP.d1 ? ((eK.iJ > aKs || !this.tj(fm, fn)) && e3.tj(fm, fn), eK.eN = !0, aKs = eK.iJ + 2e3) : e3.tj(fm, fn)), !0)
	}, this.iL = function() {
		aP.d1 && aP.d4 && eK.iJ > aKs - 1e3 && eK.iJ < aKs && (eK.eN = !0)
	}, this.aMW = function() {
		aP.d1 && (this.eg = !1, eK.eN = !0, vv(this))
	}, this.fc = function() {
		if (aP.d1) {
			if (aP.d4) {
				if (eK.iJ > aKs) return;
				if (eK.iJ > aKs - 1e3) return fW.globalAlpha = kJ(0, (1e3 - (eK.iJ - (aKs - 1e3))) / 1e3, 1), vw(), void(fW.globalAlpha = 1)
			}
			vw()
		}
	}
}

function aMf() {
	this.aBc = function(aMg, k, aMh) {
		var bC = aMg.height,
			nb = aS.bG.hk(bC, bC),
			hl = aS.bG.getContext(nb);
		return function(ce, hl, aMh) {
			hl.fillStyle = aMh, hl.beginPath(), hl.arc(ce / 2, ce / 2, .47 * ce, 0, 2 * Math.PI), hl.fill()
		}(bC, hl, aMh), hl.drawImage(aMg, -k * bC, 0), nb
	}, this.aBe = function(aMj) {
		var hl, a1X, bC = aMj.height;
		return aMj.width === bC && (a1X = (hl = aS.bG.getContext(aMj, !0)).getImageData(0, 0, bC, bC), aS.aMk.aJa(a1X.data, bC, bC, .9), hl.putImageData(a1X, 0, 0)), aMj
	}
}

function aB8() {
	var r9, aMl, aKH, aMm, aMn, aMo, colors = [0, 0, 0],
		aMp = -1;

	function aMs(j) {
		var aMt = aMl.fn + j * (hn.gap + aMo);
		fW.fillStyle = "rgb(" + (0 === j ? 150 : 2 === j ? 30 : 0) + "," + (1 === j ? 130 : 2 === j ? 30 : 0) + "," + (2 === j ? 220 : 0) + ")", fW.fillRect(aMm, aMt, colors[j] * aMn, aMo), fW.strokeStyle = fg.fk, fW.strokeRect(aMm, aMt, aMn, aMo),
			fW.fillStyle = fg.fk, fW.font = aS.bG.bQ(0, .32 * aMo), aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 0), fW.fillText(L(0 === j ? 300 : 1 === j ? 301 : 302) + aMq(j), aMm + hn.gap, aMt + .53 * aMo)
	}

	function aMq(j, aMu) {
		return aMu = aMu || 256, aN.fL(Math.floor(aMu * colors[j]), 0, aMu - 1)
	}

	function aAN(mz, n0) {
		return !(mz < aMm || n0 < aMl.fn || mz > aMl.fm + aMl.ce || n0 > aMl.fn + aMl.cf)
	}
	this.show = function() {
		var h9 = l.bj.data[121].value;
		colors[0] = (h9 >> 12) / 63, colors[1] = (h9 >> 6 & 63) / 63, colors[2] = (63 & h9) / 63, r9.show(), this.resize()
	}, this.fQ = function() {
		l.m.n(121, (aMq(0, 64) << 12) + (aMq(1, 64) << 6) + aMq(2, 64)), r9.fQ()
	}, this.resize = function() {
		r9.resize(), aMl.resize();
		var bt = bI.hu,
			tO = r9.aGv(),
			aMr = (aMl.fn = Math.max(aMl.fn, bt * tO.aGw + hn.gap), bt * tO.aGz - 2 * hn.gap);
		aMl.cf = Math.min(aMl.cf, aMr), aMl.ce = 2 * aMl.cf, aMl.fn = bt * tO.aGw + .5 * (bt * tO.aGz - aMl.cf), aMl.fm = .5 * (bI.ce - aMl.ce), aKH = .25 * aMl.ce, aMm = aMl.fm + aKH + hn.gap, aMn = aMl.ce - aKH - hn.gap, aMo = (aMl.cf - 2 * hn
			.gap) / 3
	}, this.fc = function() {
		var rp, gJ, bd;
		r9.fc(), fW.lineWidth = hn.a6Y, rp = aMq(0), gJ = aMq(1), bd = aMq(2), fW.fillStyle = "rgb(" + rp + "," + gJ + "," + bd + ")", fW.fillRect(aMl.fm, aMl.fn, aKH, aMl.cf), fW.strokeStyle = fg.fk, fW.strokeRect(aMl.fm, aMl.fn, aKH, aMl.cf),
			fW.fillStyle = rp + gJ + bd < 306 && gJ < 150 ? fg.fk : fg.lX, aS.bG.textBaseline(fW, 1), aS.bG.textAlign(fW, 1), fW.font = aS.bG.bQ(0, .1 * aMl.cf), fW.rotate(-Math.PI / 2), fW.fillText(L(299), -aMl.fn - .5 * aMl.cf, aMl.fm + .5 *
				aKH), fW.setTransform(1, 0, 0, 1, 0, 0), aMs(0), aMs(1), aMs(2)
	}, this.tj = function(mz, n0) {
		aAN(mz, n0) && (aMp = aN.fL(Math.floor((n0 - aMl.fn) / (aMo + .75 * hn.gap)), 0, 2), colors[aMp] = aN.fL((mz - aMm) / aMn, 0, 1), eK.eN = !0)
	}, this.mx = function(mz) {
		-1 !== aMp && (colors[aMp] = aN.fL((mz - aMm) / aMn, 0, 1), eK.eN = !0)
	}, this.a51 = function(mz, n0, deltaY) {
		aAN(mz, n0) && (mz = aN.fL(Math.floor((n0 - aMl.fn) / (aMo + .75 * hn.gap)), 0, 2), colors[mz] = aN.fL(colors[mz] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), eK.eN = !0)
	}, this.aAI = function() {
		0 <= aMp && (aMp = -1, eK.eN = !0)
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(L(298), [new bV("⬅️ " + L(43), function() {
		c9.b0.aEn()
	})], !1), aMl = new aCR([.5, .25], [.5, .5], 1)
}

function aMv() {
	this.iL = function(player) {
		return !!dm.t7.t8(player) && !(dm.b0.oI[player] >= Math.max(3 * dn.performance.a0T, dr.o4[dr.hH[player]]) || !aS.aT.hD(player, dr.t9[dr.hH[player]], 32, 0)) && (e8.aMw() ? function(player) {
			var aN2 = dm.g8.aLb(),
				h = aN2.length;
			if (0 === h) return !1;
			aN2 = aN2[dV.rl(h)], h = dm.b0.oD[aN2];
			if (dm.p8.t1(player, h)) return !1;
			return !! function(player, t3) {
				var t3 = dl.t6(dm.b0.o9[t3]),
					zm = dl.lv(t3),
					t3 = dl.lw(t3),
					jx = ad.mj[player],
					jy = ad.mk[player],
					jz = ad.mm[player],
					player = ad.mn[player],
					jz = Math.max(zm - jz, jx - zm),
					jx = Math.max(t3 - player, jy - t3);
				return jz < 100 && jx < 100
			}(player, aN2) && !!dm.a11.xs(player, h, 1) && (aS.aT.hU(player), dm.b0.oK(player), !0)
		}(player) : !!(dn.aMy.iL(player) || dn.aMz.iL(player) || dn.aN0.iL(player)) && (function(player) {
			dN.gY[1] = 4, aS.aT.hU(player), dm.b0.oK(player)
		}(player), !0))
	}
}

function df() {
	(fd = void 0 === fd ? document.createElement("canvas") : fd).width = a2.a3, fd.height = a2.a4, e0 = fd.getContext("2d", {
		alpha: !0
	}), e1 = vL = null, e1 = e0.getImageData(0, 0, a2.a3, a2.a4), vL = e1.data, aS.f8.aEy(vL)
}

function a45() {
	var aN4, canvas, kX, aN5;

	function aNB(k, name, aNC, bq) {
		kX[k] = name, canvas[k] = new Image, canvas[k].onload = function() {
			! function(k, aNC) {
				var aJS, qH = null;
				7 === aNC ? aJS = aS.aMk.aJU : 8 === aNC ? (aJS = aS.aMk.aJX, qH = .1) : 3 === aNC ? (aJS = aS.aMk.aJV, qH = .06) : 5 === aNC ? aJS = aS.aMk.aJY : 6 === aNC ? aJS = aS.aMk.aJT : 4 === aNC && (aJS = aS.aMk.aJZ);
				canvas[k] = aS.aMk.aJR(canvas[k], aJS, qH)
			}(k, aNC), aNE()
		}, canvas[k].onerror = function(b8) {
			console.error("Error loading image at index", k, "Error:", b8), aNE()
		}, canvas[k].src = "data:image/png;base64," + bq
	}

	function aNE() {
		aN4--, aN8()
	}

	function aN8() {
		0 === aN4 && (aN4 = -1, aNA(), eK.eN = !0, canvas[7] = aN5, canvas[8] = aN5, canvas[9] = aN5, canvas[10] = aN5, 5 === c9.cA) && c9.r2().aNG.resize()
	}

	function aNA() {
		eD.aNH(), a3Z.a8O([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== bD.id, 1 !== bD.id, !0, !0, !0]), mr.nW = new aNI, mr.nW.f(), e6.dg()
	}
	this.f = function() {
		if (void 0 === canvas) {
			aN4 = 23, canvas = new Array(aN4), kX = new Array(aN4), (aN5 = document.createElement("canvas")).width = 1;
			for (var j = aN4 - (aN5.height = 1); 0 <= j; j--) canvas[j] = aN5;
			aNA(), aNB(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aNB(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aNB(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNB(3, "orders", 6,
					"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"
					), aNB(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aNB(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aNB(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aNB(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNB(8,
					"googleplay", 3,
					"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"
					), aNB(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aNB(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNB(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNB(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNB(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNB(14, "bestPlayer", 5,
					"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"
					), aNB(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aNB(16, "apple", 3,
					"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"
					), aNB(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aNB(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aNB(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aNB(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aNB(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aNB(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(k) {
		return canvas[k]
	}, this.a58 = function(name) {
		for (var j = kX.length - 1; 0 <= j; j--)
			if (kX[j] === name) return canvas[j];
		return aN5
	}, this.a8Q = function() {
		return aN4 <= 0
	}, this.aN7 = function() {
		aN4 = 0, aN8()
	}
}

function aNJ() {
	var aNK = {
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
		aNL = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.aNM = function(ay) {
		return ay.replace(aNL, function(match) {
			return aNK[match] || match
		})
	}, this.gG = function(h9) {
		var j, rL, aNN, aNO, aNP;
		if (h9 < 0) return "-" + this.gG(Math.abs(h9));
		if (h9 < 1e3) return h9.toString();
		for (rL = Math.floor(Math.log(h9 + .5) / Math.log(10)) + 1, aNN = Math.floor((rL - 1) / 3), aNP = (aNO = h9.toString()).substring(rL - 3, rL), j = 1; j < aNN; j++) aNP = aNO.substring(rL - 3 * (j + 1), rL - 3 * j) + " " + aNP;
		return aNO.substring(0, rL - 3 * aNN) + " " + aNP
	}, this.ug = function(am, rL) {
		return am.toFixed(rL) + "%"
	}, this.aNQ = function(h9, aNR) {
		return h9.toFixed(aN.fL(Math.floor((void 0 === aNR ? 3 : aNR) - Math.log10(Math.max(h9, 1))), 0, 8))
	}, this.aNS = function(h9, h3, rL) {
		return (h9 * h3).toFixed(rL)
	}, this.aME = function(username) {
		var rr, rq = username.indexOf("[");
		return !(rq < 0) && 1 < (rr = username.indexOf("]")) - rq && rr - rq <= 8 ? username.substring(rq + 1, rr).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.aME;
	this.tv = function(bq) {
		for (var bc = Math.floor(.5 * bq.length + .5), k6 = Math.floor(.5 * (bc - 1)), j = 0; j < k6; j++)
			for (var bd = -1; bd < 2; bd += 2) {
				var bt = bc + bd * j;
				if (" " === bq[bt]) return [this.aNT(bq.substring(0, bt)), this.aNU(bq.substring(bt))]
			}
		return [bq.substring(0, bc), bq.substring(bc)]
	}, this.aNU = function(bq) {
		for (var h = bq.length, j = 0; j < h; j++)
			if (" " !== bq[j]) return bq.substring(j);
		return bq
	}, this.aNT = function(bq) {
		for (var j = bq.length - 1; 0 <= j; j--)
			if (" " !== bq[j]) return bq.substring(0, j + 1);
		return bq
	}, this.aNV = function(bq, xO) {
		return bq.split("(")[0] + "(🧈 " + xO.toFixed(2) + ")"
	}, this.startsWith = function(bq, aNW) {
		return bq.substring(0, aNW.length) === aNW
	}, this.i5 = function(bq, aNW) {
		var h = bq.length;
		return bq.substring(h - aNW.length, h) === aNW
	}, this.fP = function(bk, aNX, aNY) {
		var bq = "",
			h = bk.length - 1;
		aNY = aNY || "";
		for (var j = 0; j < h; j++) bq += aNY + bk[j] + aNY + ",", (j + 1) % aNX == 0 && (bq += "\n");
		return bq += aNY + bk[h] + aNY
	}, this.pY = function(bq, nk, nl) {
		return bq.replace(new RegExp(nk, "g"), nl)
	}
}

function ky(kl, km) {
	var aNe, self, aNZ = document.createElement("div"),
		aNa = document.createElement("div"),
		a7w = document.createElement("div"),
		aNb = null,
		aNf = (this.a0P = new fK({
			value: "",
			k: -1
		}, 0, aNc, function(b8) {
			b8.target.value = aS.fO.aNM(b8.target.value), aNb.a2G.textContent = 127 - b8.target.value.length
		}), 0),
		aNg = 1,
		aNh = 0,
		aNi = 1048575;

	function aNc() {
		kl(), aNb.a2G.textContent = 127
	}

	function aNq(aNp, g3) {
		g3 && (g3.aH8 = 1, aNp.appendChild(bx.ms.transform(g3)))
	}

	function aNr(n2) {
		aNg ? aNZ.scrollTop = aNZ.scrollHeight : n2 && (aNZ.scrollTop = aNh)
	}
	this.aAJ = function(aNm) {
			aNi = 1048575, aNa.textContent = "", aNm || this.vv()
		}, this.vv = function() {
			var aMK = bx.b0.cB[0],
				aMK = bx.b0.c0[aMK],
				aNn = aMK.aNn,
				h = aNn.length,
				ny = 1048575 === aNi ? 0 : h - (aMK.aNo - aNi + 1048575) % 1048575;
			if (aNi = aMK.aNo, !(h <= (ny = Math.max(ny, 0)))) {
				for (var aNp = document.createDocumentFragment(), j = ny; j < h; j++) aNq(aNp, bx.g8.yV(aNn[j], bx.g8.yW(aNn[j])));
				aNa.appendChild(aNp), aNr()
			}
		}, this.yZ = function(jc) {
			var aNp = document.createDocumentFragment();
			aNq(aNp, jc), aNa.appendChild(aNp), aNr()
		}, this.show = function(aNs) {
			aNs.appendChild(aNZ), aNs.appendChild(a7w), this.resize(aNs)
		}, this.fQ = function(aNs) {
			c9.removeChild(aNs, aNZ), c9.removeChild(aNs, a7w)
		}, this.resize = function(aNs) {
			aNf = aNs ? aNs.offsetHeight : aNf;
			var aNs = aS.bG.bJ(.04, .75),
				aGw = Math.max(aNs, aNf - aNs),
				aNt = bI.ce / bI.hu,
				aNu = .7 * aNt,
				aNv = aS.bG.bK(aNf - aNs - aGw),
				aGw = (a7w.style.height = aS.bG.bK(aNs), aNZ.style.height = aS.bG.bK(aGw), bI.cf > bI.ce || bD.bE.bF() ? (a7w.style.top = aNv, aNZ.style.top = aS.bG.bK(aNf - aGw), aS.bG.hm(aNZ, 8)) : (aNZ.style.top = aNv, a7w.style.top = aS.bG.bK(
						aNf - aNs), aS.bG.hm(aNZ, 2)), this.a0P.b8.style.width = aS.bG.bK(aNu), this.a0P.b8.style.fontSize = aNe.button.style.fontSize = aS.bG.bK(.5 * aNs), aS.bG.hm(this.a0P.b8, 6), aNe.button.style.left = aS.bG.bK(aNu), aNe.button
					.style.width = aS.bG.bK(aNt - aNu), .385 * aNs);
			bD.bE.bF() && (aGw *= .8 - .12 * (bI.ce > bI.cf)), aNa.style.marginLeft = aNa.style.marginRight = aS.bG.bK(.5 * aGw), aNa.style.fontSize = aS.bG.bK(aGw), aNr(1)
		}, (self = this).a0P.b8.aFB = 127, aNZ.style.position = "absolute", aNZ.style.left = "0", aNZ.style.width = "100%", aNZ.style.overflowX = "hidden", aNZ.style.overflowY = "auto", aNZ.style.font = "inherit", aNZ.style.backgroundColor = fg.aNj,
		aNZ.addEventListener("scroll", function() {
			aNh = aNZ.scrollTop, aNg = aNh < aNZ.scrollHeight - aNZ.clientHeight - 2 ? 0 : 1
		}), aNa.style.font = "inherit", a7w.style.position = "absolute", a7w.style.left = "0", a7w.style.width = "100%", self.a0P.b8.setAttribute("placeholder", L(303)), self.a0P.b8.style.position = "absolute", self.a0P.b8.style.top = "0", self.a0P
		.b8.style.left = "0", self.a0P.b8.style.height = "100%", self.a0P.b8.style.backgroundColor = fg.a57, self.a0P.b8.style.textAlign = "center", (aNe = new bV(L(304), aNc)).button.top = "0", aNe.button.style.position = "absolute", aNe.button
		.style.height = "100%", aNe.jU(fg.aNk), aNb = new aNl("127", aNe.button, 1, 1), aNZ.appendChild(aNa), a7w.appendChild(self.a0P.b8), a7w.appendChild(aNe.button)
}

function a4i() {
	this.ti = function() {
		return bD.bE.bF() ? 2 : 1
	}
}

function iw() {
	this.a0q = function(nw) {
		var rk;
		return a2.ra(a2.cI) && aP.data.passableMountains && (rk = ag.rn(nw), this.aNx(aP.cs, rk) || this.aNy(aP.cs, rk)) && 0 !== (rk = function(a8m) {
			for (var fm = dl.lv(a8m), fn = dl.lw(a8m), max = Math.max(a2.a3, a2.a4) - 2, aO2 = max * max, uY = !1, aO3 = 0, p0 = 0; p0 < max; p0++) {
				var aO4, ls = function(fm, fn, p0) {
					for (var j = 0; j <= p0; j++)
						for (var bc = -1; bc < 2; bc += 2)
							for (var bd = -1; bd < 2; bd += 2)
								for (var bt = 0; bt < 2; bt++) {
									var nw = function(fm, fn) {
										if (dl.a07(fm, fn)) {
											fm = dl.a04(fm, fn), fn = dl.ww(fm);
											if (ag.ah(fn) && ag.zB(fn)) return fm
										}
										return 0
									}(fm + bt * bc * j + (1 - bt) * bd * p0, fn + bt * bd * p0 + (1 - bt) * bc * j);
									if (nw) return nw
								}
					return 0
				}(fm, fn, p0);
				ls && (aO4 = dl.zl(fm, fn, ls)) < aO2 && (aO3 = ls, aO2 = aO4, uY || (uY = !0, max = Math.floor(Math.sqrt(aO4)) + 1))
			}
			return aO3
		}(dl.a08(nw))) && (nw = dl.ww(rk), ag.at(nw) || (nw = ag.ar(nw)) !== aP.cs && aC.hW(nw, aP.cs)) ? rk : 0
	}, this.aO0 = function(player, ls) {
		ls = dl.ww(ls);
		if (ag.ah(ls)) {
			if (ag.at(ls)) dN.gX[0] = aP.aj;
			else if (ag.ar(ls) !== dN.gX[0]) return !1;
			for (var gu = function(nw) {
					var ap = ag.ap,
						gu = [];
					loop: for (var ao = 3; 0 <= ao; ao--) {
						var rr = nw + ap[ao];
						if (ag.rm(rr)) {
							for (var id = ag.rn(rr), j = 0; j < gu.length; j++)
								if (id === gu[j]) continue loop;
							dN.gV[gu.length] = rr, gu.push(id)
						}
					}
					return gu
				}(ls), h = gu.length, j = 0; j < h; j++)
				if (this.aNx(player, gu[j]) || this.aNy(player, gu[j])) return dN.gV[0] = dN.gV[j], !0
		}
		return !1
	}, this.aNx = function(player, rk) {
		for (var rb = ad.rb[player], h = rb.length, ro = Math.max(aN.aO(h, 12), 1), ap = ag.ap, j = 0; j < h; j += ro)
			for (var rq = rb[j], ao = 3; 0 <= ao; ao--) {
				var rr = rq + ap[ao];
				if (ag.rm(rr) && rk === ag.rn(rr)) return !0
			}
		return !1
	}, this.aNy = function(player, rk) {
		for (var rb = ad.rb[player], h = rb.length, ap = ag.ap, j = 0; j < h; j++)
			for (var rq = rb[j], ao = 3; 0 <= ao; ao--) {
				var rr = rq + ap[ao];
				if (ag.rm(rr) && rk === ag.rn(rr)) return !0
			}
		return !1
	}
}

function aFT() {
	var qC, rW, aO5, aO6 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aO7 = 0;

	function aFU() {
		az.b0.aFU(qC, rW)
	}

	function aOB(b8) {
		az.uG.aOD(qC, new Uint8Array(b8.data))
	}

	function aOC() {}

	function aFY(b8) {
		az.b0.aFY(qC, b8)
	}
	this.f = function(k, aO8) {
		qC = k, rW = aO8, k = dT.aFf ? "ws://localhost:" + (7130 + qC) + "/" : aO6[0] + az.b0.aFJ[qC] + aO6[1 + dT.dU], (aO5 = new WebSocket(k)).binaryType = "arraybuffer", aO5.onopen = aFU, aO5.onmessage = aOB, aO5.onclose = aFY, aO5.onerror =
			aOC
	}, this.aOA = function() {
		return aO5.readyState === aO5.CONNECTING
	}, this.b1 = function() {
		return aO5.readyState === aO5.OPEN
	}, this.aFP = function() {
		return aO7
	}, this.qy = function() {
		aO7 = 1
	}, this.aFR = function() {
		return this.aOA() || this.b1()
	}, this.aFS = function(aO8) {
		rW = aO8
	}, this.qr = function() {
		return rW
	}, this.send = function(pD) {
		this.b1() && aO5.send(pD)
	}, this.close = function(aFW) {
		this.aFR() && (aO5.close(aFW), this.fQ())
	}, this.fQ = function() {
		aO5.onopen = null, aO5.onmessage = null, aO5.onclose = null, aO5.onerror = null
	}
}

function a8w(aNs, a8t) {
	var iB = document.createElement("div");
	this.aG3 = iB, this.resize = function() {
		iB.style.padding = aS.bG.bK(hn.a6Z), iB.style.lineHeight = aS.bG.bK(aS.bG.bJ(.035))
	}, aNs.style.overflowX = "hidden", aNs.style.overflowY = "auto", iB.innerHTML = a8t, aNs.appendChild(iB)
}

function a2k() {
	function aOM() {
		a2.a2j.iL()
	}

	function aOR(am, aOQ) {
		0 < aOQ && (a2.vN[am] += aOQ, a2.vN[am + 1] += aOQ, a2.vN[am + 2] += aOQ)
	}

	function zH(am) {
		return a2.vN[am + 2] > a2.vN[am] && a2.vN[am + 2] > a2.vN[am + 1]
	}
	this.a9S = -1, this.go = 0, this.aOE = 0, this.aOF = 8, this.aOG = 32, this.aOH = 8, this.aOI = 32, this.aOJ = [0, 0], this.mc = [0, 0, 0, 0], this.oS = null, this.aOK = !0, this.aOL = !1, this.a2n = function() {
		-1 !== this.a9S && clearTimeout(this.a9S), this.a9S = -1, this.oS = null, a2p.a2s()
	}, this.f = function() {
		7 === cL.qs() || this.aOL || (this.aOK = !0, this.go = 0, this.aOE = 1, this.aOJ = [a2.uc.cS[a2.cI].cj[0], a2.uc.cS[a2.cI].ck[0]], this.mc = [a2.uc.cS[a2.cI].cl[3], a2.uc.cS[a2.cI].cl[4], a2.uc.cS[a2.cI].cl[5], a2.uc.cS[a2.cI].cl[6]],
			this.aOF = a2.uc.cS[a2.cI].cl[7], this.aOG = a2.uc.cS[a2.cI].cl[8], this.aOH = a2.uc.cS[a2.cI].cl[9], this.aOI = a2.uc.cS[a2.cI].cl[10], this.aOK ? this.a9S = setTimeout(aOM, 16) : this.iL())
	}, this.iL = function() {
		if (8 === cL.qs() && eO.aCA()) this.a9S = setTimeout(aOM, 16);
		else {
			if (0 === this.go) {
				var ci = dV.aFM();
				if (dV.dW(a2.uc.cS[a2.cI].cl[2]), a2p.cM([a2.a3, a2.a4, a2.uc.cS[a2.cI].cl[0], a2.uc.cS[a2.cI].cl[1]]), dV.dW(ci), this.oS = a2p.aON(), this.go++, this.aOK) return void(this.a9S = setTimeout(aOM, 16))
			}
			for (var am, ls, ci = this.aOK ? 10 : 1e6, ci = a2.a4 - this.aOE - 1 < ci ? a2.a4 - this.aOE - 1 : ci, a2T = this.aOE + ci, fn = this.aOE; fn < a2T; fn++)
				for (var fm = 1; fm < a2.a3 - 1; fm++) zH(am = 4 * (ls = fm + fn * a2.a3)) ? this.aOO(am, ls, 1) : (this.aOO(am, ls, 0), function(fm, fn, am) {
					return 1 < fm && zH(am - 4) || fm < a2.a3 - 2 && zH(am + 4) || 1 < fn && zH(am - 4 * a2.a3) || fn < a2.a4 - 2 && zH(am + 4 * a2.a3)
				}(fm, fn, am) && this.aOP(fm, fn));
			this.aOE = a2T, this.aOE >= a2.a4 - 1 ? (a2.a2g.putImageData(a2.a2h, 0, 0, 1, 1, a2.a3 - 2, a2.a4 - 2), eK.eN = !0, this.a2n()) : this.aOK && (this.a9S = setTimeout(aOM, 16))
		}
	}, this.aOO = function(am, ls, k) {
		aOR(am, Math.floor(this.aOJ[k] + this.mc[k] * this.oS[ls] / 1e4) - a2.vN[am])
	}, this.aOS = function(am, rp, aOT, k, mc) {
		aOR(am, Math.floor(this.aOJ[k] + (1 - rp / aOT) * mc) - a2.vN[am])
	}, this.aOP = function(mz, n0) {
		for (var am, rp, aOT, a2Q = mz - this.aOG, a2R = n0 - this.aOG, a2S = mz + this.aOG, a2T = n0 + this.aOG, a2Q = a2Q < 1 ? 1 : a2Q, a2S = a2S > a2.a3 - 2 ? a2.a3 - 2 : a2S, a2T = a2T > a2.a4 - 2 ? a2.a4 - 2 : a2T, fn = a2R < 1 ? 1 :
			a2R; fn <= a2T; fn++)
			for (var fm = a2Q; fm <= a2S; fm++) zH(am = 4 * (fm + fn * a2.a3)) ? (aOT = this.aOF + (this.aOG - this.aOF) * this.oS[fm + a2.a3 * fn] / 1e4, Math.abs(mz - fm) > aOT || Math.abs(n0 - fn) > aOT || aOT <= (rp = Math.sqrt((mz - fm) * (
				mz - fm) + (n0 - fn) * (n0 - fn))) || this.aOS(am, rp, aOT, 1, this.mc[3])) : (aOT = this.aOH + (this.aOI - this.aOH) * this.oS[fm + a2.a3 * fn] / 1e4, Math.abs(mz - fm) > aOT || Math.abs(n0 - fn) > aOT || aOT <= (rp = Math
				.sqrt((mz - fm) * (mz - fm) + (n0 - fn) * (n0 - fn))) || this.aOS(am, rp, aOT, 0, this.mc[2]))
	}
}

function a4h() {
	this.aOU = null, this.eN = !1, this.iJ = 0, this.iR = 56;
	var aOV = 0;

	function aOW() {
		eK.iJ = aOV = performance.now(), eK.aOU.iL(), window.requestAnimationFrame(aOW)
	}
	this.f = function() {
		this.eZ(), window.requestAnimationFrame(aOW), this.iJ = performance.now()
	}, this.dq = function() {
		aP.d1 ? (this.aOU = new iD, this.aOU.f()) : aP.d0 ? this.aOU = new it : (this.aOU = new aOX, this.aOU.f())
	}, this.eZ = function() {
		this.aOU = new aGk, this.eN = !0
	}, this.iL = function() {
		this.aOU.iK++
	}, this.lf = function() {
		return this.aOU.iK
	}, this.aOY = function() {
		var aX = performance.now();
		aX < aOV + 1e3 || (this.iJ = aX, this.aOU.iL())
	}
}

function a4e() {
	this.s4 = !1, this.zR = !1, this.zY = !1, this.aOZ = [0, 0, 0, 0], this.iU = function() {
		var jx, jy, jz, k0;
		this.zY = this.zY || this.zR, (this.zR || this.s4 && this.zY) && (jx = zS.s2[0], jy = zS.s2[1], jz = zS.s2[2], k0 = zS.s2[3], jx = jx < this.aOZ[0] ? this.aOZ[0] : jx, jy = jy < this.aOZ[1] ? this.aOZ[1] : jy, jz = jz > this.aOZ[2] ? this
			.aOZ[2] : jz, k0 = k0 > this.aOZ[3] ? this.aOZ[3] : k0, this.zR = !1, this.s4 = !1, jx === this.aOZ[0] && jy === this.aOZ[1] && jz === this.aOZ[2] && k0 === this.aOZ[3] ? this.zZ() : jx <= jz && jy <= k0 && e0.putImageData(e1, 0,
				0, jx, jy, jz - jx + 1, k0 - jy + 1))
	}, this.zZ = function() {
		this.zY && this.aOZ[2] >= this.aOZ[0] && this.aOZ[3] >= this.aOZ[1] && e0.putImageData(e1, 0, 0, this.aOZ[0], this.aOZ[1], this.aOZ[2] - this.aOZ[0] + 1, this.aOZ[3] - this.aOZ[1] + 1), this.zY = !1
	}, this.a96 = function() {
		this.aOZ[2] >= this.aOZ[0] && this.aOZ[3] >= this.aOZ[1] && e0.putImageData(e1, 0, 0, this.aOZ[0], this.aOZ[1], this.aOZ[2] - this.aOZ[0] + 1, this.aOZ[3] - this.aOZ[1] + 1), this.zY = !1
	}, this.f = function() {
		var fm, fn;
		this.s4 = !1, this.zR = !1, this.zY = !1, this.aOZ[0] = a2.a3, this.aOZ[1] = a2.a4, this.aOZ[2] = this.aOZ[3] = 0;
		loop: for (fm = 1; fm < a2.a3 - 1; fm++)
			for (fn = a2.a4 - 2; 1 < fn; fn--)
				if (1 === vL[ag.z8(fm, fn) + 2]) {
					this.aOZ[0] = fm;
					break loop
				} loop: for (fn = 1; fn < a2.a4 - 1; fn++)
			for (fm = a2.a3 - 2; 1 < fm; fm--)
				if (1 === vL[ag.z8(fm, fn) + 2]) {
					this.aOZ[1] = fn;
					break loop
				} loop: for (fm = a2.a3 - 2; 0 < fm; fm--)
			for (fn = a2.a4 - 2; 1 < fn; fn--)
				if (1 === vL[ag.z8(fm, fn) + 2]) {
					this.aOZ[2] = fm;
					break loop
				} loop: for (fn = a2.a4 - 2; 0 < fn; fn--)
			for (fm = a2.a3 - 2; 1 < fm; fm--)
				if (1 === vL[ag.z8(fm, fn) + 2]) {
					this.aOZ[3] = fn;
					break loop
				}
	}
}

function hj(bC, size, aJl, aOa, font) {
	var j, ne = .2,
		canvas = document.createElement("canvas"),
		hl = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = bC, canvas.height = bC, hl.font = size + font, hl.textAlign = "center", hl.textBaseline = "middle", hl.fillStyle = "red", j = 0; j < aJl.length; j++) hl.fillText(aJl[j], .5 * bC, .5 * bC);
	return -1 < (canvas = function(a1X) {
		var j, rp, ao = a1X.data;
		for (j = ao.length - 4; 0 <= j; j -= 4)
			if (rp = ao[j], aOa <= rp) return Math.floor(j / (4 * bC));
		return -1
	}(hl.getImageData(0, 0, bC, bC))) && (ne = (canvas - .5 * bC + .1 * size) / size), Math.max(ne, 0)
}

function gL() {
	var a5h, a5i, a3F = document.createElement("div"),
		ft = 0,
		aOd = 0;
	this.show = function(fm, fn, bq, gK, aOe) {
		if (ft) {
			if (!gK) return;
			this.fQ()
		}
		fm === fn && -1 === fm ? (fm = a5h, fn = a5i) : (a5h = fm, a5i = fn), aOe || (aOd = gK), ft = 1;
		aOe = bI.ce / bI.hu, a3F.style.whiteSpace = "pre", a3F.textContent = bq, aS.bG.hm(a3F, 5), a3F.style.font = aS.bG.bQ(0, aS.bG.bJ(.015)), a3F.style.padding = "0.3em 0.6em", a3F.style.left = fm + "px", a3F.style.top = "0px", document.body
			.appendChild(a3F), gK = fm + a3F.offsetWidth - aOe;
		0 < gK && (a3F.style.left = (bq = fm - gK) + "px", bq < 5) && (a3F.style.whiteSpace = "pre-wrap"), a3F.style.top = fn - a3F.offsetHeight + aOd * hn.ho + "px"
	}, this.fQ = function(gM) {
		if (ft) {
			if (gM && aOd) return 0;
			ft = 0, c9.removeChild(document.body, a3F)
		}
		return 1
	}, a3F.style.position = "absolute", a3F.style.backgroundColor = fg.a3J, a3F.style.color = fg.fk, a3F.style.pointerEvents = "none", a3F.style.zIndex = "5", a3F.style.maxWidth = "100%"
}

function a49() {
	var aOh, aOi, size, gt, hH, aOj;

	function aOk(player) {
		return player < aP.ct ? aOh * player : aOh * aP.ct + aOi * (player - aP.ct)
	}
	this.f = function() {
		aOh = aP.ct < 16 ? 12 : 8, aOi = 4;
		var h = aOk(aP.aj);
		size = new Uint8Array(aP.aj), gt = new Uint16Array(h), hH = new Uint32Array(h), aOj = new Uint8Array(h)
	}, this.aOl = function(aCk, aOm) {
		var aOn = this.aOo(aCk, aOm),
			aOm = (this.aOp(aCk, aOm, 0), aS.aT.aY(aCk, aOn));
		aZ.aa(aCk, aOn - aOm, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aI0 = function(player, aOm) {
		var aOs, aOm = function(player, aOm) {
			var j, bl = aOk(player);
			for (j = size[player] - 1; 0 <= j; j--)
				if (gt[bl + j] === aOm) return j;
			return size[player]
		}(player, aOm);
		aOm !== size[player] && (aOs = hH[aOk(player) + aOm], this.ab(player, aOm), this.qe(player, aOs, aP.aj))
	}, this.x0 = function(player, aOm) {
		for (var bl = aOk(player), j = size[player] - 1; 0 <= j; j--)
			if (gt[bl + j] === aOm) return !0;
		return !1
	}, this.x1 = function(player) {
		return player < aP.ct ? size[player] < aOh : size[player] < aOi
	}, this.a9 = function(player) {
		return size[player]
	}, this.aF = function(player, j) {
		return gt[aOk(player) + j]
	}, this.aG = function(player, j) {
		return hH[aOk(player) + j]
	}, this.aOo = function(player, aOm) {
		for (var bl = aOk(player), j = size[player] - 1; 0 <= j; j--)
			if (gt[bl + j] === aOm) return hH[bl + j];
		return 0
	}, this.oV = function(player) {
		for (var bl = aOk(player), h9 = 0, j = size[player] - 1; 0 <= j; j--) h9 += hH[bl + j];
		return h9
	}, this.aOp = function(player, aOm, aOs) {
		for (var bl = aOk(player), j = size[player] - 1; 0 <= j; j--) gt[bl + j] === aOm && (hH[bl + j] = aOs)
	}, this.aOt = function(player, j, aOs) {
		hH[aOk(player) + j] = Math.max(aOs, 0)
	}, this.aOu = function(player, j) {
		aOj[aOk(player) + j] = 0
	}, this.aH = function(player, j) {
		return aOj[aOk(player) + j]
	}, this.qe = function(player, aOs, aOm) {
		dn.aBM.aBN[player] = dn.aBM.aBN[aOm] = 8, aS.aT.h1(aOm) && aZ.w8[6 - aS.aT.gy(player)]++;
		for (var bl = aOk(player), j = size[player] - 1; 0 <= j; j--)
			if (gt[bl + j] === aOm) return hH[bl + j] += aOs, void(hH[bl + j] = hH[bl + j] > aP.co ? aP.co : hH[bl + j]);
		gt[bl + size[player]] = aOm, hH[bl + size[player]] = aOs, aOj[bl + size[player]] = 1, size[player]++, aOm === aP.cs ? eB.tP(player, 5) : player < aP.ct && player === aP.cs && eG.nm(aOm)
	}, this.ab = function(player, k) {
		var bc, bl;
		if (0 !== size[player])
			for (bl = aOk(player), size[player]--, bc = k; bc < size[player]; bc++) gt[bl + bc] = gt[bl + bc + 1], hH[bl + bc] = hH[bl + bc + 1], aOj[bl + bc] = aOj[bl + bc + 1]
	}, this.aHq = function(player) {
		for (var bc, bl, aHx = [], j = du.ek - 1; 0 <= j; j--)
			for (bl = aOk(du.h0[j]), bc = size[du.h0[j]] - 1; 0 <= bc; bc--)
				if (gt[bl + bc] === player) {
					aHx.push(du.h0[j]);
					break
				} return aHx
	}
}

function a3y() {
	var tV, ce, fn, aOv, aOw, aOx, canvas, ff, aBW, hC, aOy, aOz, aP0, aP1;
	this.fm = 0, this.cf = 0, this.f = function() {
		aOx = aP.cr, aOz = "rgba(0,100,0,0.8)", aP0 = "rgba(150,0,0,0.8)", aBW = aOy = !0, hC = ad.er[aP.cs], this.resize()
	}, this.resize = function() {
		ce = Math.floor((bD.bE.bF() ? .305 : .24) * bI.ht), this.cf = Math.floor(.5 + .13 * ce), ce = Math.floor(6 * this.cf), tV = aS.bG.bQ(1, Math.floor(.8 * this.cf)), aOw = aS.bG.bQ(1, Math.floor(.45 * this.cf)), aP1 = Math.floor(.5 * this
			.cf), a2.a2g.font = tV, fn = hn.gap, aOv = Math.floor(1 + .13 * this.cf), (canvas = document.createElement("canvas")).width = ce, canvas.height = this.cf, ff = canvas.getContext("2d", {
			alpha: !0
		}), aS.bG.textBaseline(ff, 1), aS.bG.textAlign(ff, 1), this.aP2()
	}, this.aP3 = function() {
		return bD.bE.bF() && bI.ce < 1.2 * bI.cf
	}, this.a70 = function() {
		this.aP3() ? this.fm = bI.ce - ce - hn.gap : this.fm = Math.floor(e2.aJ2() + (bI.ce - e2.aJ2() - e8.ce - ce) / 2 - .5 * hn.gap)
	}, this.eR = function() {
		aBW && (aBW = !1, this.aP2())
	}, this.aP2 = function() {
		ff.font = tV, ff.clearRect(0, 0, ce, this.cf), ff.fillStyle = aOy ? aOz : aP0, ff.fillRect(0, 0, ce, this.cf), ff.fillStyle = fg.aP4;
		var bt = this.aP5(),
			aP7 = (this.aP6(), ff.fillStyle = ad.er[aP.cs] >= dX.a8Z(aP.cs) ? fg.wn : fg.fk, aS.fO.gG(hC)),
			aP7 = (ff.fillText(aP7, Math.floor(ce / 2), aP1), ff.measureText(aP7).width),
			bt = (ff.font = aOw, ff.fillStyle = 9 === bt ? fg.aP8 : fg.fk, dX.aPA),
			aPB = "+" + bt,
			fq = ff.measureText(aPB).width,
			aPC = Math.floor(this.cf / 12),
			aP7 = .5 * (ce + aP7) + aPC;
		(aP7 + fq + aOv <= ce || 1e3 <= bt && (aPB = "+" + Math.floor(bt / 1e3) + "K", aP7 + (fq = ff.measureText(aPB).width) + aOv <= ce)) && ff.fillText(aPB, Math.floor(aP7 + .5 * fq), Math.floor(.3 * this.cf)), ff.fillStyle = fg.fk, ff
			.fillRect(0, 0, ce, 1), ff.fillRect(0, 0, 1, this.cf), ff.fillRect(0, this.cf - 1, ce, 1), ff.fillRect(ce - 1, 0, 1, this.cf)
	}, this.aP5 = function() {
		var bt = eK.lf() % 100,
			nO = (bt = 9 - aN.aO(bt -= bt % 10, 10), Math.floor(bt * (this.cf - aOv) / 9));
		return ff.fillRect(0, nO, aOv, this.cf - nO), ff.fillRect(ce - aOv, nO, aOv, this.cf - nO), bt
	}, this.aP6 = function() {
		ff.fillRect(aOv, this.cf - aOv, Math.floor((ce - 2 * aOv) * ad.er[aP.cs] / aOx), aOv)
	}, this.iL = function() {
		var am = aP.cs;
		aS.aT.gp(am) && (am = ad.er[am] - ad.hB[am], hC !== am ? (aOx = kH(am, aOx), aOy = hC < am && 10 <= am, hC = am, aBW = !0) : eK.lf() % 10 == 9 && (aBW = !0))
	}, this.fc = function() {
		0 === ad.eQ[aP.cs] || aP.d5 || 2 === ad.gq[aP.cs] || fW.drawImage(canvas, this.fm, fn)
	}
}

function aBC() {
	var r9, a0G, fB;
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a0G.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(L(245), [new bV("⬅️ " + L(43), function() {
		c9.f7()
	})]), a0G = new f2(r9.f3, ((fB = []).push(function() {
		function jR() {
			jQ.button.textContent = L(60), aPF.b8.readOnly = !1, aPH.b8.readOnly = !1, aPI.jU(1), aPI.button.style.color = fg.fk
		}
		var fF = new fG,
			aPE = (fF.jG("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", fF.fH(L(305)), new fK({
				value: l.bj.data[105].value,
				k: -1
			})),
			aPF = (aPE.b8.readOnly = !0, fF.fJ(aPE), fF.fH(L(96), "0.8em"), new fK(l.bj.data[148], 0, void 0, function(b8) {
				aPG(l.bj.data[149].value, b8.target.value)
			})),
			aPH = (fF.fJ(aPF), fF.fH(L(100), "0.8em"), new fK(l.bj.data[149], 1, void 0, function(b8) {
				aPG(b8.target.value, l.bj.data[148].value)
			})),
			jQ = (fF.fJ(aPH), new bV(L(60), function(b8) {
				return b8.textContent === L(60) ? (b8.textContent = L(59), aPF.b8.readOnly = !0, aPH.b8.readOnly = !0, aPI.jU(0), aPI.button.style.color = fg.jV, l.m.n(149, aPH.b8.value), aPG(l.bj.data[149].value, l.bj.data[
					148].value)) : jR(), !0
			})),
			aPI = (fF.fJ(new i9([jQ.button])), new bV(L(304), function(b8) {
				return aPF.b8.readOnly && az.b0.b1(0) && (aS.bG.bZ(b8), jR(), az.jS.qR({
					qI: 0,
					cQ: l.bj.data[148].value,
					value: parseInt(l.bj.data[149].value, 10)
				})), !0
			}, 1)),
			jH = fF.jI(),
			aPG = (fF.jI(L(306)).style.fontWeight = "bold", function(h9, bq) {
				jH.innerHTML = c9.b0.aPJ(h9, l.bj.data[105].value, bq)
			});
		return fF.fJ(new i9([aPI.button])), aPG(l.bj.data[149].value, l.bj.data[148].value), fF
	}()), fB))
}

function a3i() {
	var bt = aS.color;
	this.lX = bt.bb(0, 0, 0), this.a7G = bt.b7(0, 0, 0, .7), this.a57 = bt.b7(0, 0, 0, .5), this.a3J = bt.b7(0, 0, 0, .85), this.fh = bt.b7(0, 0, 0, .75), this.aNj = bt.b7(0, 0, 0, .6), this.l2 = bt.b7(0, 0, 0, .35), this.fk = bt.bb(255, 255, 255),
		this.a93 = bt.b7(255, 255, 255, .3), this.aP4 = bt.b7(255, 255, 255, .6), this.wG = bt.b7(255, 255, 255, .4), this.aPK = bt.b7(255, 255, 255, .25), this.aCo = bt.b7(255, 255, 255, .85), this.aBh = bt.b7(255, 255, 255, .75), this.aPL = bt.b7(
			255, 255, 255, .15), this.aPM = bt.b7(255, 255, 255, .11), this.a7H = bt.bb(128, 128, 128), this.aPN = bt.b7(64, 64, 64, .75), this.aPO = bt.b7(88, 88, 88, .83), this.aEu = bt.b7(60, 60, 60, .85), this.aPP = bt.b7(80, 60, 60, .85), this
		.aPQ = bt.bb(170, 170, 170), this.aPR = bt.bb(200, 235, 245), this.wA = bt.bb(30, 255, 30), this.w9 = bt.bb(0, 200, 0), this.aBv = bt.bb(128, 255, 128), this.aPS = bt.b7(10, 65, 10, .75), this.aBf = bt.b7(0, 255, 0, .6), this.aPT = bt.b7(0,
			255, 0, .5), this.l5 = bt.b7(0, 200, 0, .5), this.tb = bt.b7(0, 100, 0, .75), this.aHk = bt.b7(0, 60, 0, .8), this.aJ6 = bt.b7(0, 255, 0, .3), this.aPU = bt.b7(0, 180, 0, .6), this.aPV = bt.b7(0, 120, 0, .85), this.aPW = bt.bb(0, 120, 0),
		this.aPX = bt.b7(0, 70, 0, .85), this.aPY = bt.bb(190, 230, 190), this.aPZ = bt.bb(0, 255, 0), this.aPa = bt.bb(255, 120, 120), this.wn = bt.bb(255, 160, 160), this.wC = bt.bb(255, 70, 70), this.wB = bt.bb(230, 0, 0), this.aBg = bt.b7(220, 0,
			0, .6), this.wI = bt.b7(255, 100, 100, .8), this.u4 = bt.b7(100, 0, 0, .85), this.aHj = bt.b7(60, 0, 0, .85), this.aPb = bt.b7(200, 0, 0, .6), this.a8v = bt.b7(120, 0, 0, .85), this.u0 = bt.bb(255, 70, 10), this.aPc = bt.bb(230, 190,
		190), this.aPd = bt.bb(255, 0, 0), this.aPe = bt.bb(255, 0, 255), this.aHh = bt.b7(60, 0, 60, .85), this.aHi = bt.b7(0, 60, 60, .85), this.w5 = bt.b7(10, 60, 60, .9), this.aPf = bt.b7(0, 96, 96, .75), this.aPg = bt.bb(0, 255, 255), this.a8S =
		bt.bb(160, 160, 255), this.aJ4 = bt.b7(0, 40, 90, .75), this.aPh = bt.b7(0, 0, 255, .6), this.aPi = bt.bb(200, 200, 255), this.aPj = bt.b7(50, 50, 255, .83), this.aPk = bt.bb(255, 120, 100), this.aPl = bt.b7(255, 255, 0, .5), this.aJ7 = bt
		.b7(255, 255, 150, .2), this.jV = bt.bb(255, 255, 0), this.u3 = bt.bb(255, 255, 200), this.aPm = bt.b7(200, 200, 0, .6), this.aPn = bt.b7(140, 120, 0, .75), this.aPo = bt.b7(180, 160, 40, .75), this.aPp = bt.b7(70, 50, 20, .85), this.aPq = bt
		.b7(30, 30, 0, .85), this.aHm = bt.b7(60, 60, 0, .85), this.aP8 = bt.bb(255, 255, 100), this.aPr = bt.bb(255, 255, 140), this.aPs = bt.b7(255, 140, 0, .75), this.aHl = bt.b7(70, 40, 0, .85), this.aPt = bt.bb(255, 150, 0), this.aI4 = bt.b7(
			255, 200, 80, .85), this.aBd = bt.b7(0, 0, 0, 0), this.aNk = bt.b7(255, 255, 255, 0), this.aPu = bt.b7(254, 254, 254, 0)
}

function aPv() {
	function aPw() {
		if (2 === aP.d2) return 1;
		e6.aBr(), aP.d2 = 2, aP.cw = aP.cu
	}

	function aPx() {
		dO.aPy.a37(), eE.show(1 === aP.dH, !1, 2 === aP.dH), dO.result.a37(), dO.aEY.iL(), dO.aPz.iL(), eB.uj(!0), eB.nn(247), eB.nn(956), eB.nn(957), e2.eR(!0), e8.eR(!0), e6.eR(), e5.aMW(), aP.d1 && eK.aOU.is(), eK.eN = !0, dj.a96(), bD.bE
			.setState(0)
	}
	this.aBp = function() {
		aPw() || (aP.dG = 2, aPx())
	}, this.aBq = function() {
		aPw() || (aP.dG = 1, aPx())
	}
}

function aQ0() {
	this.iL = function() {
		var aQ5;
		2 === aP.dG ? (eB.tP(0, 59), eO.aCH(2700)) : aP.dA < 7 ? (aQ5 = de.lq[aP.dJ], aQ5 = de.kX[aQ5], eA.uL(L(307, [aQ5]), 2, 1, 12), eB.lk(0, L(308, [aQ5]), 40, 0, fg.fk, fg.fh, -1, !1), eO.aCH(2700)) : 8 === aP.dA ? (aP.dH ? eB.tP(aP.dI, 2) :
			eB.tP(1 - aP.cs, 3), aP.dD.v6(aP.dI), eO.tn(aP.dI, 2700, !1, 0)) : 9 === aP.dA ? (eB.uK(), eO.aCH(2700)) : (eB.u5(aP.dI), eO.tn(aP.dI, 2700, !1, 0))
	}
}

function kW(aQ7, aQ8, aQ9) {
	function click() {
		var value = 1 - aQ7.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + aQ8, void 0 !== aQ7.k ? l.m.n(aQ7.k, value) : aQ7.value = value, aQ9 && aQ9(value)
	}
	var b8;
	aQ8 = aQ8 || L(309), this.b8 = document.createElement("p"), (b8 = this.b8).textContent = (aQ7.value ? "🟩 " : "⬜ ") + aQ8, b8.style.margin = "0", b8.style.marginBottom = "0.5em", b8.style.cursor = "pointer", b8.addEventListener("click", click)
}

function aQA() {
	this.aHw = function(player) {
		for (var oJ = dm.b0.oJ, rV = player << 3, j = rV + dm.b0.oI[player] - 1; rV <= j; j--) this.pB(oJ[j])
	}, this.pB = function(aQB) {
		var b0 = dm.b0,
			aQC = b0.o6 - 1,
			aQD = b0.o8[aQB],
			aQE = b0.oC[aQB],
			aQF = b0.o9[aQB];
		b0.o6 = aQC, b0.o8[aQB] = b0.o8[aQC], b0.o9[aQB] = b0.o9[aQC], b0.oA[aQB] = b0.oA[aQC], b0.oB[aQB] = b0.oB[aQC], b0.oC[aQB] = b0.oC[aQC], b0.oD[aQB] = b0.oD[aQC], b0.oE[aQB] = b0.oE[aQC], b0.oF[aQB] = b0.oF[aQC], b0.oG[aQB] = b0.oG[aQC],
			b0.oH[aQB] = b0.oH[aQC], b0.oJ[b0.o8[aQB]] = aQB,
			function(a6t) {
				var player = a6t >> 3,
					b0 = dm.b0,
					h = b0.oI[player] - 1,
					aQI = (player << 3) + h;
				b0.oI[player] = h, aQI !== a6t && (b0.oJ[a6t] = b0.oJ[aQI], b0.o8[b0.oJ[a6t]] = a6t)
			}(aQD), dm.oS.oS[dl.oT(b0.o9[aQB])][b0.oC[aQB]] = aQB, aQC = dl.oT(aQF), aQD = aQE, aQC = dm.oS.oS[aQC], b0 = aQC.pop(), aQD !== aQC.length && (aQC[aQD] = b0, dm.b0.oC[b0] = aQD)
	}
}

function ze() {
	var aQK = [];

	function aQN(cQ) {
		aQK.unshift(cQ), l.m.n(161, aQK.join(";"))
	}

	function aGG(cQ) {
		for (var aQP = aQK, h = aQP.length, j = 0; j < h; j++)
			if (aQP[j] === cQ) return aQP.splice(j, 1), l.m.n(161, aQP.join(";")), 1
	}
	this.f = function() {
		var bq = l.bj.data[161].value;
		bq.length && (aQK = bq.split(";"))
	}, this.get = function() {
		return aQK
	}, this.aQL = function() {
		return {
			i: aQK,
			value: 0
		}
	}, this.jh = function(cQ) {
		return aS.f8.has(aQK, cQ)
	}, this.aQM = function(cQ) {
		return aGG(cQ) ? 0 : (aQN(cQ), 1)
	}, this.vv = function(cQ) {
		aGG(cQ) && aQN(cQ)
	}, this.aQO = function(k) {
		k < aQK.length && (aQK.splice(k, 1), l.m.n(161, aQK.join(";")))
	}
}

function f2(aNs, fB) {
	var iB = document.createElement("div");

	function mW() {
		var j, hq, cf, an, ao, aQR = bI.hu * iB.offsetWidth,
			aQT = new Float64Array(function(aQR) {
				var ce = .25 * aS.bG.hs(.6) * bI.ht;
				return Math.max(Math.floor(aQR / ce), 1)
			}(aQR)),
			a6Z = hn.a6Z,
			aQU = (aQR - (aQT.length + 1) * hn.gap) / (aQT.length * bI.hu);
		for (aQT.fill(a6Z), j = 0; j < fB.length; j++) hq = (ao = fB[j].iB).style, cf = aS.f8.min(aQT), an = aQT.indexOf(cf), hq.top = aS.bG.bK(cf), hq.left = aS.bG.bK(a6Z + an * (aQU + a6Z)), hq.width = aS.bG.bK(aQU), aS.bG.hm(ao, 5), aQT[an] += ao
			.offsetHeight + 3 * a6Z;
		iB.style.height = aS.bG.bK(aS.f8.max(aQT) - 2 * a6Z)
	}
	this.aG3 = iB, this.a7n = fB, this.resize = function() {
		var j;
		for (j = 0; j < fB.length; j++) fB[j].resize();
		mW(), mW()
	}, iB.style.width = "100%", iB.style.maxWidth = "100%", aNs.style.lineHeight = "1.5em", aNs.style.overflowX = "hidden", aNs.style.overflowY = "auto";
	for (var j = 0; j < fB.length; j++) iB.appendChild(fB[j].iB);
	aNs.appendChild(iB)
}

function bV(aQ8, aQV, aQW, aQX, aQY) {
	var self, aQZ = document.createElement("button");

	function a3H() {
		var aQf;
		l3.l4() || (aQf = aS.color.aQg(aQW), !1 !== aQX && 0 < aQf[0] && aQf[0] < 255 && aQf[0] === aQf[1] && aQf[0] === aQf[2]) || (128 < aQf[0] && 128 < aQf[1] && 128 < aQf[2] ? aQZ.style.backgroundColor = aS.color.a3I(aQW, -50) : aQZ.style
			.backgroundColor = aS.color.a3I(aQW, aQf[3] && aQf[3] < 120 ? 150 : 50))
	}

	function aQb() {
		if (aQX) {
			var aQf = aS.color.aQg(aQW);
			if (aQf[0] === aQf[1] && aQf[0] === aQf[2]) return
		}
		aQV && ((aQf = aQV(this)) ? 2 === aQf && a3H() : aQh(this))
	}

	function aQc() {
		this.style.backgroundColor = aQW
	}

	function a3G() {
		aQh(this)
	}

	function aQh(ao) {
		ao.style.backgroundColor = aQW, ao.blur()
	}
	this.button = aQZ, this.fT = aQV, this.aEt = aQW, this.aQa = function(aQd) {
			aQd = 1.1 - Math.min(.01 * aQ8.length, .6) + .2 * aQd;
			aQZ.style.fontSize = aQd.toFixed(1) + "em"
		}, this.jU = function(bt) {
			bt ? 1 === bt ? bt = fg.aEu : 2 === bt && (aQX = 1, bt = fg.aEu) : (aQX = 0, bt = fg.a3J), this.aEt = aQW = bt, aQZ.style.backgroundColor = bt
		}, self = this, aQZ.innerHTML = aQ8, aQZ.style.color = aQY ? fg.jV : fg.fk, aQZ.style.userSelect = "none", aQZ.style.outline = "none", aQZ.style.overflowWrap = "break-word", self.jU(aQW), aQZ.style.border = "none", aQZ.style.font = "inherit",
		self.aQa(0), aQZ.style.padding = "0em 0.3em", aQZ.onclick = aQb, aQZ.addEventListener("mouseover", a3H), aQZ.addEventListener("mouseout", a3G), aQZ.addEventListener("focus", a3H), aQZ.addEventListener("blur", aQc)
}

function rD(qH) {
	var r9, a0G, fB;
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a0G.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(L(310), [new bV("⬅️ " + L(43), function() {
		c9.a0H(10)
	})]), a0G = new f2(r9.f3, ((fB = []).push(function() {
		var a0N, fF = new fG,
			a0Q = new fK(l.bj.data[132], 1, function() {
				a0N.button.click()
			}),
			a0R = new fK(l.bj.data[131], 1, function() {
				a0Q.b8.focus()
			});
		fF.fH(L(197)), fF.fJ(a0R), a0R.b8.style.marginBottom = "0.8em", fF.fH(L(198)), fF.fJ(a0Q);
		return a0N = new bV(L(196), function() {
			rV = Math.floor(a0R.b8.value), rY = Math.floor(a0Q.b8.value);
			var rY, rV = {
				aF4: Math.min(rV, rY),
				aQl: Math.max(rV, rY)
			};
			c9.ed(8, c9.yX(10).rW, new rX(21, {
				rE: qH.rE,
				rV: rV.aF4,
				rY: rV.aQl
			}))
		}, 0, 0, 1), fF.fJ(new i9([a0N.button])), fF
	}()), fB.push(function() {
		var a0N, fF = new fG,
			a0Q = new fK(l.bj.data[134], 1, function() {
				a0N.button.click()
			}),
			a0R = new fK(l.bj.data[133], 0, function() {
				a0Q.b8.focus()
			});
		return fF.fH(1 === qH.rE ? L(311) : L(312)), fF.fJ(a0R), a0R.b8.style.marginBottom = "0.8em", fF.fH(L(313)), fF.fJ(a0Q), a0N = new bV(L(196), function() {
			var aLq = a0R.b8.value.slice(0, 20),
				aLr = Math.abs(Math.floor(a0Q.b8.value));
			c9.ed(8, c9.yX(10).rW, new rX(22, {
				rE: qH.rE,
				aLq: aLq,
				aLr: aLr
			}))
		}, 0, 0, 1), fF.fJ(new i9([a0N.button])), fF
	}()), fB.push(function() {
		var a0N, fF = new fG,
			a0Q = new fK(l.bj.data[152], 1, function() {
				a0N.button.click()
			}),
			a0R = new fK(l.bj.data[151], 0, function() {
				a0Q.b8.focus()
			});
		return fF.fH(L(314)), fF.fJ(a0R), a0R.b8.style.marginBottom = "0.8em", fF.fH(L(313)), fF.fJ(a0Q), a0N = new bV(L(196), function() {
			var aLq = a0R.b8.value.slice(0, 5),
				aLr = Math.abs(Math.floor(a0Q.b8.value));
			c9.ed(8, c9.yX(10).rW, new rX(28, {
				rE: qH.rE,
				aLq: aLq,
				aLr: aLr
			}))
		}, 0, 0, 1), fF.fJ(new i9([a0N.button])), fF
	}()), fB))
}

function aQm() {
	var aQn = [];
	this.f = function() {
		aQn = []
	}, this.yA = function() {
		return 65536 === aQn.length
	}, this.a8h = function(a8g, a8b) {
		for (var tA = aQn, h = tA.length, j = 0; j < h; j++) {
			var am = tA[j];
			if (am[0] === a8g && am[am.length - 1] === a8b) return j
		}
		return -1
	}, this.tB = function(oM) {
		var aQo = new Uint32Array(oM.length);
		return aQo.set(oM), aQo.reverse()
	}, this.a7S = function(ov, ow) {
		var ae = ov.length - 1,
			aQp = new Uint32Array(ae + ow.length);
		return aQp.set(ov, 0), aQp.set(ow, ae), aQp
	}, this.a7X = function(ov, ow, aJE, ls, aQq) {
		aQq && (aJE = (ow = this.tB(ow)).length - aJE - 2);
		aQq = ow.subarray(aJE + 1 + (ls === ow[aJE + 1])), ls = new Uint32Array(ov.length + aQq.length);
		return ls.set(ov, 0), ls.set(aQq, ov.length), ls
	}, this.a8i = function(oM) {
		return aQn.push(oM), aQn.length - 1
	}, this.get = function(j) {
		return aQn[j]
	}, this.aER = function() {
		return aQn
	}, this.aQs = function(a8g, a8b) {
		return null
	}
}

function aQt() {
	var aQu = 0,
		aQv = "",
		aQw = 0,
		aQx = 0,
		aQy = 0;

	function aR0(lN) {
		az.qt.aRB(3, lN)
	}

	function aR9(ae) {
		aQu = 1, bx.message.jb({
			id: 6,
			value: ae
		})
	}

	function aR3(jc) {
		var aRD = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return jc.match(aRD)
	}
	this.a37 = function(jc) {
		var aQz, bk, aR5;
		if (aQu) return aQu = 0, "yes" === (aQz = jc.toLowerCase()) || "y" === aQz ? void aR0(aQv) : void bx.message.jb({
			id: 5,
			yT: 7
		});
		!(jc.indexOf("@") < 0) && (aQz = aR3(jc)) ? (aQv = jc, bk = function(aR2) {
			for (var h = aR2.length, aRC = [0, 0, 0, 0], j = 0; j < h; j++)
				for (var ce = aR2[j], bc = 0; bc < 4; bc++) ce === "@room" + (bc + 1) && (aRC[bc] = 1);
			if ((aQx = aS.f8.a34(aRC)) % 4 == 0) return aS.f8.aFE(bx.by.c3);
			for (bc = 0; bc < 4; bc++) aRC[bc] = aRC[bc] ? bx.by.c3[bc] : [];
			return aS.f8.aFE(aRC)
		}(aQz), function(aR2, aR5, jc) {
			if (!aQw) return;
			for (var h = aR5.length, j = 0; j < h; j++) 2 === aR5[j].id && (jc = jc.replace(aR2[aR5[j].k], "@" + aR5[j].h9));
			return aQu = 1, aR0((aQv = jc).slice(0, 126) + "|"), 1
		}(aQz, aR5 = function(aR2) {
			for (var aR5 = [], h = (aQy = aQw = 0, aR2.length), j = 0; j < h; j++) {
				var ce = aR2[j],
					bl = ce.length;
				aS.fO.startsWith(ce, "@[") ? bl <= 9 && aS.fO.i5(ce, "]") && aR5.push({
					id: 0,
					h9: ce.substring(2, bl - 1).toUpperCase()
				}) : 6 === bl ? aS.fO.startsWith(ce, "@room") || (aQy++, aR5.push({
					id: 1,
					h9: pS.gF.aHP(ce.substring(1), 5)
				})) : 1 < bl && bl < 5 && 0 <= (bl = qN.data.qO(ce.substring(1))) && (aR5.push({
					id: 2,
					h9: bl,
					k: j
				}), aQw = 1)
			}
			return aR5
		}(aQz), jc) || (0 === aR5.length ? aQx || function(aR2) {
			for (var h = aR2.length, j = 0; j < h; j++) {
				var ce = aR2[j];
				if ("@all" === ce || "@everyone" === ce) return 1
			}
			return
		}(aQz) ? aR9(bk.length) : aR0(jc) : aQz.length === aQy ? aR0(jc) : (function(bk, aR5) {
			var bl = aR5.length;
			if (0 === bl) return;
			var h = bk.length;
			loop: for (var j = h - 1; 0 <= j; j--) {
				for (var bc = 0; bc < bl; bc++)
					if (0 === aR5[bc].id) {
						if (aR5[bc].h9 === aS.fO.aME(bk[j].username)) continue loop
					} else if (1 === aR5[bc].id && aR5[bc].h9 === bk[j].cQ) continue loop;
				bk[j] = bk[--h], bk.pop()
			}
		}(bk, aR5), aR9(bk.length)))) : aR0(jc)
	}, this.aRE = function(jc) {
		var aR2 = aR3(jc);
		if (aR2)
			for (var aRF = new RegExp("^[0-9]+$"), h = aR2.length, j = 0; j < h; j++) {
				var ce = aR2[j].substring(1),
					bl = ce.length;
				1 <= bl && bl <= 3 && aRF.test(ce) && (bl = parseInt(ce, 10), !isNaN(bl)) && 0 <= bl && bl < qN.data.bk.length && (jc = jc.replace("@" + ce, "@" + qN.data.bk[bl]))
			}
		return jc
	}
}

function aRG() {
	function aRK(aRM) {
		bx.b0.c8 && 1 === bx.b0.cB[2] && c9.yX(29).aRN(), bx.b0.c8 = 0, c9.yX(29).aRO(), 0 !== bx.b0.c0[bx.b0.cB[0]].l9 && !aRM || c9.yX(29).aRP(), bx.g6.fy()
	}
	this.c0 = new Array(4), this.cB = [0, 0, 1, 0], this.c8 = 0, this.aRH = [0, 0], this.f = function() {
		for (var j = 0; j < this.c0.length; j++) this.c0[j] = new aRI;
		this.cB[0] = l.bj.data[158].value
	}, this.aRJ = function() {
		aRK(!0), bx.aM9.f()
	}, this.ji = function() {
		bx.aM9.ji();
		for (var j = 0; j < bx.b0.c0.length; j++) {
			var bz = bx.b0.c0[j];
			0 === bz.l9 ? bz.aRQ = 0 : (bz.aRR = Math.max(bz.aRR - bz.aRQ % 2, 0), bz.aRQ++)
		}
		aRK(!1)
	}, this.aRS = function(aMK) {
		this.cB[0] !== aMK || this.cB[2] || c9.yX(29).aRT()
	}
}

function a4F() {
	var h9, ce, cf, max, aRU, ch, aRW, aRX, aRY, aRZ, aRa, aRb, aRc, aRd, aRV = 1e4;

	function aRk(aRj, cg, h) {
		var j;
		for (aRW[0] = aRj, j = 1; j < h; j++) aRW[j] = aRW[j - 1] + cg, cg = aRW[j] >= aRV ? (aRW[j] = aRV - 1, -cg) : aRW[j] < 0 ? (aRW[j] = 0, -cg) : (cg += 16384 <= dV.random() ? ch : -ch) < -aRU ? -aRU : aRU < cg ? aRU : cg
	}

	function aRm(fm, fn, aRn, h) {
		(aRn ? function(fm, fn, h) {
			var j;
			for (j = 0; j < h; j++) h9[fn * ce + fm + j] = aRW[j]
		} : function(fm, fn, h) {
			var j;
			for (j = 0; j < h; j++) h9[fn * ce + fm + j * ce] = aRW[j]
		})(fm, fn, h)
	}

	function aRq(value, h) {
		var j, nz, nw, rT = value - aRW[h - 1];
		if (0 != rT) {
			for (nz = 1 + aN.aO(Math.abs(rT), h - 1), nz = rT < 0 ? -nz : nz, aRW[h - 1] = value, nw = (nw = h - 1 - aN.aO(Math.abs(rT), Math.abs(nz))) < 1 ? 1 : h - 2 < nw ? h - 2 : nw, j = h - 2; nw <= j; j--) aRW[j] += rT - (h - 1 - j) * nz;
			(rT < 0 ? function(h) {
				var j;
				for (j = h - 2; 1 <= j; j--) aRW[j] < 0 && (aRW[j] = -aRW[j] - 1)
			} : function(h) {
				var j;
				for (j = h - 2; 1 <= j; j--) aRW[j] >= aRV && (aRW[j] = 2 * aRV - aRW[j] - 1)
			})(h)
		}
	}

	function aRt(vT, vW, h) {
		for (var j = 0; j < h; j++) vT[j] = vW[j]
	}

	function aRu(bk) {
		for (var j = 0; j < bk.length - 1; j++) bk[j] = bk[j + 1] - bk[j];
		bk[bk.length - 1] = bk[bk.length - 3]
	}

	function aRv(sC, gap, wj) {
		aRX.push(sC), aRY.push(gap), aRZ.push(wj)
	}
	this.cM = function(qH) {
		! function(qH) {
			var j;
			for (ce = qH[0], cf = qH[1], aRU = qH[2], ch = qH[3], h9 = new Int16Array(ce * cf), max = cf < ce ? ce : cf, aRW = new Int16Array(max), aRX = [], aRY = [], aRZ = [], aRa = new Array(ce), aRb = new Array(cf), j = ce - 1; 0 <= j; j--)
				aRa[j] = !1;
			for (j = cf - 1; 0 <= j; j--) aRb[j] = !1;
			aRc = new Int16Array(ce), aRd = new Int16Array(cf)
		}(qH),
		function(h) {
			var aRj = dV.random() % aRV,
				cg = dV.random() % (2 * aRU + 1) - aRU;
			aRk(aRj, cg, h)
		}(max), aRt(aRd, aRW, cf), aRm(0, 0, !0, ce);
		var fm, fn, qH = h9[0],
			h = max,
			cg = dV.random() % (2 * aRU + 1) - aRU;
		for (aRk(qH, cg, h), aRt(aRc, aRW, ce), aRm(0, 0, !1, cf), aRu(aRc), aRu(aRd), aRk(h9[ce - 1], aRc[ce - 1], cf), aRm(ce - 1, 0, !1, cf), aRk(h9[ce * (cf - 1)], aRd[cf - 1], ce), aRq(h9[ce * cf - 1], ce), aRm(0, cf - 1, !0, ce), aRa[ce -
				1] = aRa[0] = !0, aRb[cf - 1] = aRb[0] = !0, aRv(0, ce, !0), aRv(0, cf, !1), ! function() {
				var aQl, sC;
				for (;;) {
					if (aQl = function() {
							var j, aQl = aRX.length - 1;
							for (j = aQl - 1; 0 <= j; j--) aRY[j] > aRY[aQl] && (aQl = j);
							return aQl
						}(), aRY[aQl] < 5) return;
					sC = aRX[aQl] + aN.aO(aRY[aQl], 2), (aRZ[aQl] ? function(fm) {
						var h, aRz, j, aLJ = 0,
							aS0 = 0;
						for (; aS0 < cf - 1;) {
							for (j = aLJ + 1; j < cf; j++)
								if (aRb[j]) {
									aS0 = j;
									break
								} h = aS0 - aLJ + 1, aRk(h9[fm + ce * aLJ], 0 === aLJ ? aRc[fm] : aRW[aRz - 1] - aRW[aRz - 2], h), aRq(h9[aS0 * ce + fm], h), aRm(fm, aLJ, !1, h), aRz = h, aLJ = aS0
						}
						aRa[fm] = !0
					} : function(fn) {
						var h, aRz, j, aLJ = 0,
							aS0 = 0;
						for (; aS0 < ce - 1;) {
							for (j = aLJ + 1; j < ce; j++)
								if (aRa[j]) {
									aS0 = j;
									break
								} h = aS0 - aLJ + 1, aRk(h9[fn * ce + aLJ], 0 === aLJ ? aRd[fn] : aRW[aRz - 1] - aRW[aRz - 2], h), aRq(h9[fn * ce + aS0], h), aRm(aLJ, fn, !0, h), aRz = h, aLJ = aS0
						}
						aRb[fn] = !0
					})(sC), aRv(sC, aRX[aQl] + aRY[aQl] - sC, aRZ[aQl]), aRY[aQl] = sC - aRX[aQl] + 1
				}
			}(), fm = 0; fm < ce; fm++)
			if (!aRa[fm])
				for (fn = 0; fn < cf; fn++) aRb[fn] || ! function(fm, fn) {
					var value = h9[fn * ce + fm - 1] + h9[(fn - 1) * ce + fm],
						lW = 2;
					aRa[fm + 1] && (lW++, value += h9[fn * ce + fm + 1]);
					aRb[fn + 1] && (lW++, value += h9[(fn + 1) * ce + fm]);
					h9[fn * ce + fm] = aN.aO(value, lW)
				}(fm, fn)
	}, this.aON = function() {
		return h9
	}, this.a2s = function() {
		h9 = null
	}
}

function a4E() {
	var aS2;

	function aSC(nb, ne, fm, fn, globalAlpha) {
		a2.a2g.save(), a2.a2g.globalAlpha = globalAlpha, a2.a2g.imageSmoothingEnabled = !1, a2.a2g.scale(ne, ne), a2.a2g.drawImage(nb, Math.floor(fm * (a2.a3 / ne - nb.width)), Math.floor(fn * (a2.a4 / ne - nb.height))), a2.a2g.restore()
	}
	this.ue = 0, this.uf = 0, this.uh = 0, this.ui = 0, this.f = function() {
		(aS2 = new Array(a2.cd))[0] = {
			ce: [0, 5e3, 8e3, 1e4],
			rp: [220, 250, 255, 220],
			gJ: [190, 220, 0, 0],
			bd: [170, 200, 0, 0]
		}, aS2[1] = {
			ce: [0, 4e3, 5e3, 6e3, 1e4],
			rp: [25, 0, 100, 0, 25],
			gJ: [25, 0, 0, 0, 25],
			bd: [25, 0, 0, 0, 25]
		}, aS2[2] = {
			ce: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			rp: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			gJ: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			bd: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aS2[3] = {
			ce: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			rp: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			gJ: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			bd: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aS2[4] = {
			ce: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			rp: [10, 10, 20, 10, 10, 170, 212],
			gJ: [20, 20, 60, 100, 100, 110, 170],
			bd: [70, 70, 160, 30, 30, 60, 120]
		}, aS2[5] = {
			ce: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			rp: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			gJ: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			bd: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aS2[6] = {
			ce: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			rp: [10, 10, 60, 255, 255, 200, 200],
			gJ: [10, 10, 60, 255, 255, 200, 200],
			bd: [80, 80, 255, 255, 255, 200, 200]
		}, aS2[7] = {
			ce: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			rp: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			gJ: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			bd: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aS2[8] = {
			ce: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			rp: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			gJ: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			bd: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aS2[9] = {
			ce: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			rp: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			gJ: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			bd: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aS2[20] = {
			ce: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			rp: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			gJ: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			bd: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aS2[21] = {
			ce: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			rp: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			gJ: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			bd: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a2r = function() {
		var aSB, j, bc, gf, a1X = function() {
				var a1X;
				return a2.fY = document.createElement("canvas"), a2.fY.width = a2.a3, a2.fY.height = a2.a4, a2.a2g = a2.fY.getContext("2d", {
					alpha: !1
				}), a1X = a2.a2g.getImageData(0, 0, a2.a3, a2.a4), a2.vN = a1X.data, a1X
			}(),
			ce = aS2[a2.cI].ce,
			rp = aS2[a2.cI].rp,
			gJ = aS2[a2.cI].gJ,
			bd = aS2[a2.cI].bd,
			h9 = a2p.aON(),
			h = ce.length - 2,
			aS6 = new Array(1 + h),
			aS7 = new Array(1 + h),
			aS8 = new Array(1 + h),
			aS9 = new Array(1 + h);
		for (bc = h; 0 <= bc; bc--) aS6[bc] = ce[bc + 1] - ce[bc], aS7[bc] = rp[bc + 1] - rp[bc], aS8[bc] = gJ[bc + 1] - gJ[bc], aS9[bc] = bd[bc + 1] - bd[bc];
		for (j = a2.a3 * a2.a4 - 1; 0 <= j; j--)
			for (bc = h; 0 <= bc; bc--)
				if (h9[j] >= ce[bc]) {
					gf = h9[j] - ce[bc], a2.vN[4 * j] = rp[bc] + kF(aS7[bc] * gf, aS6[bc]), a2.vN[4 * j + 1] = gJ[bc] + kF(aS8[bc] * gf, aS6[bc]), a2.vN[4 * j + 2] = bd[bc] + kF(aS9[bc] * gf, aS6[bc]), a2.vN[4 * j + 3] = 255;
					break
				} a2.a2g.putImageData(a1X, 0, 0), a2.a2z(a2.cI) && ml.a8Q() && a2.a2z(a2.cI) && (a1X = ml.a58("arena"), aSB = ml.a58("territorial.io"), aSC(a1X, 5, .5, .5, .1), aSC(aSB, 2, .5, .45, .1)), a2.a2i = !0, eK.eN = !0
	}, this.di = function() {
		for (var am, fm, fn, vO, sB, gh, uf = 0, ce = a2.a3, cf = a2.a4, gf = ce * cf * 4, vK = vL, vM = a2.vN, j = ce - 1; 0 <= j; j--) vK[(am = j << 2) + 2] = vK[gf - am - 2] = 3;
		for (gf = 4 * ce, j = cf - 1; 0 <= j; j--) vK[(am = j * gf) + 2] = vK[am + gf - 2] = 3;
		for (vO = ce - 1, sB = cf - 1, fn = 1; fn < sB; fn++)
			for (gf = fn * ce, fm = 1; fm < vO; fm++) gh = 1 - (vM[(am = gf + fm << 2) + 2] > vM[am + 1] && vM[am + 2] > vM[am]), vK[am + 2] = 6 - 5 * gh, uf += gh;
		this.ue = (ce - 2) * (cf - 2), this.ui = 0, a2.ra(a2.cI) && (a2.ui.vJ(), a2.ui.vP(4, 5)), this.uf = aP.d3 = uf - this.ui, this.uh = this.ue - this.uf - this.ui, this.uh && (a2.ui.vP(6, 2), a2.ui.vX())
	}
}

function aSD() {
	var aSE = new Uint8Array(78);
	this.f = function() {
		var j;
		for (aSE[50] = 37, j = 0; j < 10; j++) aSE[j + 3] = j + 1;
		for (j = 0; j < 26; j++) aSE[j + 20] = j + 11, aSE[j + 52] = j + 38
	}, this.aI8 = function(bq) {
		return bq.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a7m = function(bq, size) {
		if ((bq = this.aI8(bq)).length > size) return bq.substring(0, size);
		for (; bq.length < size;) bq = "-" + bq;
		return bq
	}, this.yL = function(bq) {
		for (var a8n = aSE, h = bq.length, bk = new Uint8Array(h), j = 0; j < h; j++) bk[j] = a8n[bq.charCodeAt(j) - 45];
		return bk
	}, this.aI7 = function(v3) {
		pJ.cM(6 * v3.length), this.aSF(v3), qb.f(pJ.pD)
	}, this.aSF = function(v3) {
		for (var h = v3.length, ce = pJ, j = 0; j < h; j++) ce.q9(6, v3[j])
	}, this.qJ = function(bq) {
		this.aSF(this.yL(bq))
	}, this.qF = function(bq, size) {
		this.aSF(this.yL(this.a7m(bq, size)))
	}, this.aHP = function(bq, size) {
		for (var bk = this.yL(this.a7m(bq, size)), h9 = 0, h3 = 1, j = bk.length - 1; 0 <= j; j--) h9 += h3 * bk[j], h3 *= 64;
		return h9
	}
}

function a3h() {
	this.bG = new hf, this.f8 = new aEx, this.aT = new gm, this.fO = new aNJ, this.ff = new aEv, this.aMk = new aJQ, this.canvas = new aMf, this.color = new aSG, this.aKX = new kZ, this.f = function() {
		this.bG.hi()
	}
}

function a3j() {
	this.data = new aSH;
	var aSI = (new a1O).L84,
		aSL = (this.aSJ = aSI, !(this.aSK = "en"));
	this.f = function() {
		var bq, bk;
		aSL = !1, ("en" === (bq = l.bj.data[12].value).split("-")[0].toLowerCase() ? (qN.aSJ = aSI, qN.aSK = bq, 1) : l.bj.data[12].value === l.bj.data[145].value && 0 < l.bj.data[146].value && (bq = l.bj.data[146].value, (bk = l.fT.aKw(bq, !1))
			.length === bq) && !!aS.f8.aF9(bk) && function(bk) {
			for (var h = bk.length, cf = 0; cf < h; cf++) bk[cf] = bk[cf].replace("&#39;", "'");
			var aST = l.fT.aKw(h, !0);
			if (h !== aST.length) return !1;
			if (!aS.f8.aF9(aST)) return !1;
			for (var bl = aSI.length, aSU = new Array(bl), aSV = bl === h, ae = Math.min(h, bl), j = 0; j < bl; j++)
				if (aSU[j] = aSI[j], j < h && aST[j] === aSU[j]) aSU[j] = bk[j];
				else {
					aSV = !1;
					for (var bd = 0; bd < ae; bd++)
						if (aST[bd] === aSU[j]) {
							aSU[j] = bk[bd];
							break
						}
				} return qN.aSJ = aSU, qN.aSK = l.bj.data[12].value, aSV
		}(bk)) || (aSL = !0)
	}, this.a4r = function() {
		de.dg(), dr.dg(), dz.dg(), aZ.dg(), a3M.f(), rP = new aSQ
	}, this.aSR = function() {
		return this.aSJ === aSI || !aSI.length
	}, this.r1 = function() {
		var aSW;
		return !!aSL && (aSL = !1, 0 !== aSI.length) && (aSW = l.bj.data[12].value, az.b2.aDW(0, aSW.slice(0, 20)), !0)
	}, this.r7 = function(bk) {
		bk.length !== aSI.length ? 8 === c9.cA && c9.r2().r4(30, 0, 1) : (this.aSJ = bk, this.aSK = l.bj.data[12].value, l.m.n(145, this.aSK), l.m.n(146, bk.length), l.fT.aL1(bk, !1), l.fT.aL1(aSI, !0), 8 === c9.cA ? c9.r2().r4(30) : 0 === cL
		.qs() && 5 === c9.cA && c9.b0.aEn())
	}, this.aDe = function() {
		var qM, bk = navigator.languages;
		return bk && bk.length ? (qM = Math.max(qN.data.qO(bk[0]), 0), 1 === bk.length ? [qM, qM] : [qM, Math.max(qN.data.qO(bk[1]), 0)]) : [0, 0]
	}
}

function aSX() {
	this.aSY = 32, this.fm = 0, this.fn = 0, this.a0A = 0, this.aSZ = 0, this.aSa = 4, this.oS = null, this.p4 = new Int16Array(9), this.f = function() {
		this.a0A = 1 + aN.aO(a2.a3 - 1, this.aSY), this.aSZ = 1 + aN.aO(a2.a4 - 1, this.aSY), this.oS = new Array(this.a0A * this.aSZ), aS.f8.aEz(this.oS);
		var fm, fn, p4 = this.p4,
			ce = this.a0A;
		for (fm = -1; fm <= 1; fm++)
			for (fn = -1; fn <= 1; fn++) p4[3 * (1 + fn) + 1 + fm] = fn * ce + fm
	}, this.oK = function(aSc, j) {
		return this.oS[j].push(aSc), this.oS[j].length - 1
	}, this.oq = function(aSd, oO, og) {
		var aSe, aSf, oO = dl.oT(oO),
			og = dl.oT(og);
		return oO === og ? aSd : (aSe = this.oS[oO].pop(), this.oS[oO].length === aSd ? this.oK(aSe, og) : (aSf = this.oS[oO][aSd], this.oS[oO][aSd] = aSe, dm.b0.oC[aSe] = aSd, this.oK(aSf, og)))
	}
}

function q3() {
	this.eX = function(bq, pM, aSg) {
		for (var aSh = [], h = bq.length, max = 0, j = 0; j < h; j++) {
			var h9 = bq.charCodeAt(j);
			aSh.push(h9), max = Math.max(max, h9)
		}
		var aM6 = max < 128 ? 7 : 16;
		for (aSg.q9(pM, h), aSg.q9(1, +(16 == aM6)), j = 0; j < h; j++) aSg.q9(aM6, aSh[j])
	}
}

function a4H() {
	this.b0 = new aFG, this.aFV = new a7t, this.qv = new a9g, this.qt = new aSi, this.b2 = new aDT, this.jS = new q7, this.aJw = new qU, this.aLn = new aSj, this.uG = new aSk, this.aSl = new aSm, this.aSn = new qZ, this.aSo = new aCq, this.aSp =
		new aJj, this.f = function() {
			this.b0.f()
		}
}

function aAx() {
	this.bj = {}, this.rI = new Array(7), this.aB9 = null, this.aB7 = null, this.aIU = 0, this.aEE = [0, 0], this.a5O = function() {
		c9.ed(5, 5)
	}, this.ec = function() {
		c9.wO(), a3O.f()
	}, this.aEn = function() {
		c9.ed(0 === cL.qs() ? 5 : 0)
	}, this.a0O = function() {
		if (1 === l.bj.data[130].value) c9.ed(8, c9.r2().rW, new rX(24, {
			aKW: l.bj.data[125].value,
			rV: l.bj.data[128].value,
			rY: l.bj.data[129].value
		}));
		else {
			for (var bk = (bk = l.bj.data[126].value.split(",")).slice(0, 10), j = 0; j < bk.length; j++) bk[j] = bk[j].trim().slice(0, 7).toUpperCase();
			1 === bk.length && 0 === bk[0].length && (bk = []), c9.ed(8, c9.r2().rW, new rX(23, {
				aKW: l.bj.data[125].value,
				aLt: bk
			}))
		}
	}, this.aEr = function(rW, target) {
		c9.ed(4, rW, new a5G("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + a3V.xY +
			"' target='_blank'>" + a3V.xY + "</a>", !1, [new bV("⬅️ " + L(43), function() {
				c9.ed(rW)
			}), new bV("✅ Accept", function() {
				l.m.n(140, 1), 0 === target ? c9.ed(2, rW) : c9.ed(8, rW, new rX(target))
			})]))
	}, this.aSq = function() {
		for (var j = 0; j < 7; j++) this.rI[j] = pS.pT.pU(qb.pF(5));
		this.rI[1] = "[" + this.rI[1] + "]", 5 === c9.cA && (c9.r2().aNG.n(this.rI), c9.r2().resize())
	}, this.aPJ = function(h9, qv, uG) {
		h9 = aS.aT.he(h9, 1, 1e6);
		var aSr = Math.max(1, 1 + Math.floor(.01 * (h9 - 100))),
			qv = L(315, [qv]);
		return (qv += "<br>") + L(316, [uG]) + "<br>" + L(317, [aSr < 20 ? h9 + aSr + "–" + (h9 + 20) : h9 + aSr]) + "<br>" + L(318, [h9])
	}
}

function a4m() {
	this.jf = 0, this.cP = null, this.by = null, this.g8 = null, this.b0 = null, this.aAR = null, this.g6 = null, this.message = null, this.aAt = null, this.ms = null, this.aM9 = null, this.aDw = new bu, this.a5C = 0, this.aSs = 0, this.f =
	function() {
		this.aSs = eK.iJ, this.jf = pS.gF.aHP(l.bj.data[105].value, 5), this.by = new aM7, this.g8 = new aSt, this.b0 = new aRG, this.aAR = new aAW, this.g6 = new fs, this.message = new yM, this.aAt = new aQt, this.ms = new aH2, this.aM9 =
			new jW, this.b0.f(), yb.f(), this.a5C = 1, bD.bE.setState(1), cL.setState(0)
	}, this.pE = function() {
		this.ms && this.ms.pE(), this.cP = null, this.by = null, this.g8 = null, this.b0 = null, this.aAR = null, this.g6 = null, this.message = null, this.aAt = null, this.ms = null, this.aM9 = null, this.a5C = 0, yb.pE(), bD.bE.setState(0)
	}
}

function aSu() {
	var aCY = 12e3;
	this.show = function(eT) {
		return !eT && !ea.aCa() && (0 === bD.id ? ea.qd.show() : 2 === bD.id && !(eK.iJ < aCY) && (aCY = eK.iJ + 3e5, 2 === dT.dU) && bD.bE.aSv(Math.floor(3e5)))
	}
}

function js() {
	this.aEs = function() {
		l.m.wQ(), l.m.wR(), az.b0.close(0, 3255), 0 === bD.id ? bD.jo && bD.jo.clear() : 1 === bD.id ? bD.jp.saveString(199, "") : 2 === bD.id && bD.jr.postMessage("clear")
	}, this.aEm = function() {
		2 === bD.id ? bD.jr.postMessage("showConsentForm") : 1 === bD.id && bD.jp.setState(7)
	}, this.aEp = function() {
		this.setState(14)
	}, this.bF = function() {
		return 1 === l.bj.aSw(2)
	}, this.aSx = function() {
		l.bj.jL(102, "")
	}, this.setState = function(go) {
		1 === bD.id && 5 <= bD.jn && bD.jp.setState(go)
	}, this.a5N = function() {
		var a1z;
		1 === bD.id && 7 <= bD.jn ? bD.jp.setState(5) : ((a1z = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1z.toString())
	}, this.a4t = function() {
		1 !== bD.id || bD.jn < 17 || bD.jp.saveString(23, document.documentElement.outerHTML)
	}, this.aSy = function() {
		0 !== bD.id && (1 === bD.id ? bD.jp.prepareAd("1688441405") : 2 === bD.id && (0 === bD.jn ? bD.jr.postMessage("prepare ad 2904813909") : bD.jr.postMessage("loadAds 2904813909")))
	}, this.aSv = function(aX) {
		return 0 !== bD.id && 1 !== bD.id && 2 === bD.id && 0 !== bD.jn && (bD.jr.postMessage("showAd"), !0)
	}, this.a4v = function() {
		2 === bD.id && bD.jn < 23 && c9.ed(4, 1, new a5G("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + a3V.xf + "' target='_blank'>" +
			a3V.xf + "</a>", !0, [new bV("⬅️ " + L(43), function() {
				c9.ed(0)
			}, fg.a8v)]))
	}
}

function L(value, aSz, jM, aT0) {
	var bq = "number" == typeof value ? qN.aSJ[value] : value;
	if (jM && qN.aSR() && (bq = jM), !aSz) return aT0 ? bq.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : bq;
	for (var h = aSz.length, j = 0; j < h; j++)
		for (var bc = 0; bc < 3; bc++) bq = bq.replace("{" + (10 * bc + j) + "}", aSz[j]);
	return bq
}

function a4V() {
	this.b0 = new a9G, this.fb = new a1C, this.f = function() {
		this.b0.f()
	}, this.iL = function() {
		0 !== this.b0.lO && this.b0.lO--
	}
}

function aSt() {
	var aT1 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aT2 = [fg.aPQ, fg.aPQ, fg.aPR, fg.aPd, fg.aPe, fg.aPZ, fg.aPg, fg.aPR, fg.aPt, fg.jV, fg.aPr],
		aT3 = [
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
		aT4 = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aTC(aNn, cQ, aTD) {
		for (var bd = aNn.length - 1; 0 <= bd; bd--) {
			var g3 = aNn[bd];
			0 === g3.id && g3.cQ === cQ && (g3.jc = "[Redacted Message]", aTD) && (g3.aHN = 1)
		}
	}
	this.yW = function(yS) {
		var aT5, lQ;
		return yS.id < 5 && (aT5 = "@" + gE.gF.gG(yS.cQ, 5)), 0 === yS.id ? aT5 + ": " + yS.jc : 1 === yS.id ? (lQ = "@" + gE.gF.gG(yS.target, 5), 0 === yS.yT ? 32768 <= yS.value ? aT5 + " voted with " + (yS.value - 32768 + 1) +
				" gold against " + lQ + " to weaken the latter's admin position. 📉" : aT5 + " voted with " + (yS.value + 1) + " gold for " + lQ + " to strengthen the latter's admin position. 💪" : 1 === yS.yT ? aT5 + " sent " + Math.floor(yS
					.value / 100) + " 🧈 gold to " + lQ + "." : aT5 + " voted with " + (yS.value / 10).toFixed(1) + " points for " + lQ + " to acknowledge the latter as clan leader. ✅") : 2 === yS.id ? 0 === yS.yT ? aT5 +
			" was 🔇 muted for 1 Hour." : 1 === yS.yT ? "The username of " + aT5 + " was ✂️ redacted. Duration: 1 Day" : aT5 + " 👢 was kicked." : 3 === yS.id ? aT5 + rP.aT6(yS.yT, rP.aAk[yS.yT][yS.value]) + "@" + gE.gF.gG(yS.target, 5) + rP.aT7(
				yS.yT, rP.aAk[yS.yT][yS.value]) : 4 === yS.id ? aT5 + rP.aT6(5, rP.aAk[5][yS.yT]) + "@" + gE.gF.gG(yS.target, 5) + rP.aT7(5, rP.aAk[5][yS.yT]) : 5 === yS.id ? aT4[yS.yT] : 6 === yS.id ? "You are about to mention " + yS.value +
			" player" + (1 === yS.value ? "" : "s") + ". This action will cost " + (Math.max(10 * yS.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === yS.id ? yS.jc : void 0
	}, this.yV = function(yS, lN) {
		return {
			yS: yS,
			jc: lN,
			aHA: 0,
			fontSize: 1,
			aH8: 0,
			aHO: yS.id ? fg.aPc : fg.fk
		}
	}, this.aT8 = function(player, aMK) {
		return (2 === aMK ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.aHJ = function(gA) {
		return aT2[gA]
	}, this.aHG = function(gA, gB) {
		return gA < 3 || 7 === gA ? aT3[gA][0] : 4 === gA ? aT3[gA][gB < 1 ? 0 : gB < 10 ? 1 : 2] : aT3[gA][gB < 10 ? 0 : 1]
	}, this.aHH = function(gB) {
		return 0 === gB
	}, this.gI = function(aMK, cQ) {
		for (var c3 = bx.by.c3, by = c3[aMK], h = by.length, j = 0; j < h; j++)
			if (cQ === by[j].cQ) return by[j];
		for (var bd = 0; bd < c3.length; bd++)
			if (aMK !== bd)
				for (h = (by = c3[bd]).length, j = 0; j < h; j++)
					if (cQ === by[j].cQ) return by[j];
		return null
	}, this.aAp = function(g3) {
		return !!bx.cP && g3.cQ === bx.cP.cQ
	}, this.aT9 = function(by, aTA, aTB) {
		var aLt = [];
		loop: for (var j = aTA; j < aTB; j++) {
			var aJq = aS.fO.aME(by[j].username);
			if (aJq) {
				for (var bd = aLt.length - 1; 0 <= bd; bd--)
					if (aJq === aLt[bd].name) {
						aLt[bd].ae++;
						continue loop
					} aLt.push({
					name: aJq,
					ae: 1
				})
			}
		}
		if (aLt.sort(function(bc, bd) {
				return bd.ae - bc.ae
			}), 0 === aLt.length) return "";
		for (var bq = aLt[0].name + ": " + aLt[0].ae, j = 1; j < aLt.length; j++) bq += "   " + aLt[j].name + ": " + aLt[j].ae;
		return bq
	}, this.g9 = function(gA, gB, gC) {
		return 0 === aT1[gA].length ? "Rank: " + (gB + 1) : aT1[gA] + " Rank: " + (gB + 1) + (3 !== gA && gC < 100 ? "   " + aT1[3] + " Rank: " + (gC + 1) : "")
	}, this.yU = function(cQ) {
		for (var c0 = bx.b0.c0, j = 0; j < c0.length; j++) aTC(c0[j].aNn, cQ);
		aTC(bx.message.yi(), cQ, 1), bx.ms.yU(cQ)
	}
}

function x4() {
	this.eX = function() {
		var mi = function() {
				for (var io = dw.eU.io, h = io.length, max = 0, j = 0; j < h; j++) max = Math.max(max, io[j]);
				return kQ(Math.max(max, 1))
			}(),
			ce = (g3 = aP.data, (ce = qL).f(), ce.q9(12, dT.rVersion), ce.k += 43, ce.q9(2, g3.mapType), ce.q9(8, g3.mapProceduralIndex), ce.q9(8, g3.mapRealisticIndex), ce.q9(14, g3.mapSeed), ce.yI(g3.mapName, 5), 2 === g3.mapType && ce.yJ(g3
				.canvas), ce.q9(1, g3.passableWater), ce.q9(1, g3.passableMountains), ce.q9(10, g3.playerCount), ce.q9(10, g3.humanCount), ce.q9(9, g3.selectedPlayer), ce.q9(1, g3.gameMode), ce.q9(2, g3.playerMode), ce.q9(2, g3
				.battleRoyaleMode), ce.q9(4, g3.numberTeams), ce.q9(1, g3.isZombieMode), ce.q9(1, g3.isContest), ce.q9(1, g3.isReplay), ce.yE(g3.elo, 2, 14), ce.q9(1, g3.colorsType), ce.q9(1, g3.colorsPersonalized), ce.yE(g3.colorsData, 10,
				18), ce.q9(1, g3.selectableColor), ce.yE(g3.teamPlayerCount, 4, 10), ce.q9(1, g3.neutralBots), ce.q9(2, g3.botDifficultyType), ce.q9(4, g3.botDifficultyValue), ce.yE(g3.botDifficultyTeam, 4, 4), ce.yE(g3.botDifficultyData, 10,
				4), ce.q9(2, g3.spawningType), ce.q9(14, g3.spawningSeed), ce.yE(g3.spawningData, 11, 12), ce.q9(1, g3.selectableSpawn), ce.q9(2, g3.playerNamesType), ce.yH(g3.playerNamesData, 10, 5), ce.q9(1, g3.selectableName), ce.q9(2, g3
				.aIncomeType), ce.q9(8, g3.aIncomeValue), ce.yE(g3.aIncomeData, 10, 8), ce.q9(2, g3.tIncomeType), ce.q9(8, g3.tIncomeValue), ce.yE(g3.tIncomeData, 10, 8), ce.q9(2, g3.iIncomeType), ce.q9(8, g3.iIncomeValue), ce.yE(g3
				.iIncomeData, 10, 8), ce.q9(2, g3.sResourcesType), ce.q9(11, g3.sResourcesValue), ce.yE(g3.sResourcesData, 10, 11), ! function(mi) {
				var ce = qL,
					ig = dw.eU.ig,
					gf = dw.eU.ih,
					gh = dw.eU.ii,
					gj = dw.eU.ij,
					h = ig.length;
				ce.q9(5, mi), ce.q9(30, h), ce.q9(30, dw.eU.io.length);
				for (var j = 0; j < h; j++) {
					var bt = ig[j];
					ce.q9(4, bt), ce.q9(9, gf[j]), 0 === bt ? ce.q9(22, gh[j]) : 1 === bt ? (ce.q9(10, gh[j]), ce.q9(10, gj[j])) : 2 === bt ? (ce.q9(10, gh[j]), ce.q9(9, gj[j])) : 3 === bt ? (ce.q9(10, gh[j]), ce.q9(27, gj[j])) : 4 === bt ? (
						ce.q9(10, gh[j]), ce.q9(16, gj[j])) : 5 === bt || 6 === bt ? ce.q9(10, gh[j]) : 7 === bt ? ce.q9(1, gh[j]) : 10 === bt && (ce.q9(20, gh[j]), ce.q9(22, gj[j]))
				}
			}(mi), ! function(mi) {
				for (var ce = qL, il = dw.eU.il, io = dw.eU.io, h = il.length, j = 0; j < h; j++) ce.q9(1, il[j]), ce.q9(mi, io[j])
			}(mi), qL.k),
			g3 = aN.aO(ce - 1, 6) + 1,
			mi = (pJ.pK(6 * g3) !== qL.bk.length && qL.bk.push(0), ! function() {
				var ce = qL;
				ce.k = 24, ce.q9(31, ce.bk.length), ce.k = 12, ce.q9(12, function() {
					for (var bk = qL.bk, h = bk.length, aDa = dT.rVersion, j = 3; j < h; j++) aDa = aDa + bk[j] & 4095;
					return aDa
				}())
			}(), qb.f(qL.bk), gE.gF.pW(gE.gF.pX(g3)));
		return qb.pE(), qL.f(), mi
	}
}

function aTM() {
	this.t8 = function(player) {
		return !!aP.data.passableWater && dm.b0.o6 !== dm.b0.o4 && dm.b0.oI[player] !== dm.b0.o5 && 0 !== ad.sn[player].length
	}, this.aTN = function(y1) {
		var oL = dN.gY[1];
		return !(4 <= oL || !dm.g8.a2d(dl.ww(y1))) && ag.ah(dl.ww(dl.a0B(y1, oL)))
	}
}

function aSH() {
	this.bk = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aTO = function() {
		for (var aTP = [], bk = this.bk, h = bk.length, j = 0; j < h; j++) aTP.push(bk[j]);
		var aKp = l.bj.data[12].jM;
		for (j = 0; j < h; j++)
			if (aTP[j] === aKp) {
				aTP.splice(j, 1), h--;
				break
			} aTP.sort(), h++, aTP.unshift(aKp);
		try {
			if ("undefined" == typeof Intl) return aTP;
			for (j = 0; j < h; j++) {
				var bq = new Intl.DisplayNames([aTP[j]], {
					type: "language"
				}).of(aTP[j]);
				bq !== aTP[j] && (aTP[j] = aTP[j] + ": " + bq)
			}
		} catch (b8) {
			console.log("error 3646: " + b8)
		}
		return aTP
	}, this.aTR = function(mJ) {
		for (var bq = l.bj.data[12].value, h = mJ.length, j = 0; j < h; j++)
			if (bq === mJ[j].split(":")[0]) return j;
		return 0
	}, this.qO = function(aTS) {
		if (aTS && !(aTS.length < 2)) {
			aTS = aTS.split("-")[0].toLowerCase();
			for (var bk = this.bk, h = bk.length, j = 0; j < h; j++)
				if (aTS === bk[j]) return j
		}
		return -1
	}
}

function aTT() {
	function aTi(player, gt, aTW) {
		3 <= aTW && 2142 < eK.lf() && (gt === aP.aj || ad.er[gt] < aN.aO(ad.er[player], 20)) && dr.aTZ(player, 20)
	}

	function aTl(player, hH, gt, aTW) {
		3 <= aTW && aTW < 6 && aN.aO(ad.er[player], 8) > ad.er[gt] && (hH = Math.max(aN.aO(11 * ad.er[gt], 5), aN.aO(ad.er[player], 10)));
		aTW = ad.ac[player].length;
		dn.aTc.aTw(player, gt), dn.aTc.aTx(player, gt, aTW, hH)
	}

	function aTh(player, hH) {
		var gt = aP.aj,
			h = ad.ac[player].length;
		dn.aTc.aTy(player), ad.ac[player].length !== h && dn.aTc.aTx(player, gt, h, hH)
	}
	this.aBN = new Uint8Array(aP.aj), this.f = function() {
		this.aBN.fill(0)
	}, this.aTU = function(player, hH) {
		var aTV, aTW, aTX, aTY;
		a8.x1(player) && (aTV = dX.a8Z(player), 3 <= (aTW = dr.hH[player]) && aTW < 6 && (hH = Math.max(ad.er[player] - aTV, hH)), aTX = ad.sn[player].length, aTY = ad.vD[player].length, 30 * ad.el[player] > aP.d3 && lp[player] < 10 && 100 *
			aTY <= aTX && dr.aTZ(player, 10), aP.d7 ? function(player, hH, aTW, aTV) {
				var gt;
				if (dn.aTc.aTd(player, !1) || dn.aTc.aTe(player, !1)) {
					if (!dn.aTc.aTf(player))
						if (dn.aTc.aTg()) aTh(player, hH), aTi(player, aP.aj, aTW);
						else {
							if (dV.aI3(dr.aTj[aTW])) gt = dn.aTc.aTk(player);
							else {
								if (dn.aTc.aTm() && dV.aI3(dr.aTn[aTW]) && dn.aTc.aTo(), 6 === aTW) return aTl(player, hH, dn.aTc.aTp(), aTW);
								gt = dn.aTc.aTq(player)
							}
							aTl(player, hH, gt, aTW), aTi(player, gt, aTW)
						}
				} else dm.aLd.iL(player) || dn.aTr.iL(player) || ! function(player, hH, aTW, aTV) {
					var aBN = dn.aBM.aBN;
					aBN[player] = 0;
					var aTt = de.gu[player];
					if (0 !== aTt) {
						var aTu = ad.er[player],
							el = ad.el;
						if (player < aP.ct && (hH = aTu), !(aTu < el[player] || 5 === aTW && aTu < aTV || 4 === aTW && aTu < aN.aO(aTV, 2))) {
							dx.a0Y(aTt);
							for (var h = dN.gP[0], ga = dN.ga, j = dV.rl(h), bd = 0; bd < h; bd++) {
								var bt = ga[(bd + j) % h];
								if (aBN[bt]) return db.wy.aBL(player, bt, hH)
							}
							var oI = dm.b0.oI;
							for (bd = 0; bd < h; bd++)
								if (bt = ga[(bd + j) % h], oI[bt] && bt !== player) return db.wy.aBL(player, bt, hH)
						}
					}
				}(player, hH, aTW, aTV)
			}(player, hH, aTW, aTV) : (!aTY || aTX && (aTX < aTY && !dV.rl(10) || 100 * aTY <= aTX && dV.rl(3) || !dV.rl(8))) && dm.aLd.iL(player) || function(player, hH, aTW) {
				dn.aTc.aTd(player, !0) || dn.aTc.aTe(player, !0) ? dn.aTc.aTf(player) || (dn.aTc.aTg() ? aTh(player, hH) : dV.aI3(dr.aTj[aTW]) ? aTl(player, hH, dn.aTc.aTk(player), aTW) : 5 === aTW ? aTl(player, hH, dn.aTc.aTv(), aTW) : (dn
					.aTc.aTm() && dV.aI3(dr.aTn[aTW]) && dn.aTc.aTo(), aTl(player, hH, 6 === aTW ? dn.aTc.aTp() : dn.aTc.aTq(player), aTW))) : dn.aTr.iL(player)
			}(player, hH, aTW))
	}
}

function a4Z() {
	this.eb = new aSu, this.qd = new aCW, this.f = function() {
		bD.bE.aSy()
	}, this.aCa = function() {
		return l.bj.data[160].value
	}
}

function aTz(aU0, aQW, aU1) {
	this.iB = document.createElement("div"), this.kS = aU0;
	var aU2 = 0;
	this.resize = function(aNs, aH0) {
		var h = aU0.length;
		if (!aU1)
			for (var j = 1; j < h; j++) aS.bG.hm(aU0[j].button, 4);
		for (var aH1 = 0, j = 0; j < h; j++) aH1 += aU0[j].button.offsetWidth;
		if (aNs && (aU2 = aNs.offsetWidth), aH0 && aH1 < aU2)
			for (j = 0; j < h; j++) aU0[j].button.style.width = (100 * aU0[j].button.offsetWidth / aH1).toFixed(2) + "%";
		else
			for (j = 0; j < h; j++) aU0[j].button.style.width = "auto";
		aH0 || this.resize(aNs, 1)
	};
	var oa = this;
	oa.iB.style.height = oa.iB.style.maxHeight = "100%";
	for (var j = 0; j < aU0.length; j++) aU0[j].jU(aQW), aU0[j].button.style.height = "100%", aU0[j].button.style.padding = "0.0em 0.9em", oa.iB.appendChild(aU0[j].button)
}

function aBG() {
	var ew, ex, ey, fB;

	function f1() {
		f5(), 2 !== aP.data.spawningType || aS.f8.a34(aP.data.spawningData) || (aP.data.spawningType = 0), 2 !== aP.data.spawningType && (aP.data.spawningData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		2 === aP.data.spawningType && aS.f8.f9(ey.fA(), aP.data.spawningData, a2.a2f - 1)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(319), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG,
			i = (fF.fH(L(44)), [L(62), L(274), L(47)]),
			value = aP.data.spawningType;
		0 === aP.data.gameMode && (i.splice(1, 1), 0 < value) && (value = 1);
		fF.fI(new a({
			i: i,
			value: value
		}, function(k) {
			f5(), aP.data.spawningType = k, 0 === aP.data.gameMode && 1 === k && (aP.data.spawningType = 2), 2 !== aP.data.spawningType || aP.data.spawningData || (aP.data.spawningData = new Uint16Array(2 * aP.aj)), c9.ed(24)
		})), fF.fJ(new kV), fF.fJ(new kW({
			value: aP.data.selectableSpawn
		}, L(320), function(value) {
			aP.data.selectableSpawn = value
		})), fB.push(fF)
	}(fB = []), function(fB) {
		var fF = new fG;
		fF.fH("Seed"), fF.fJ(new fK({
			k: -1,
			value: aP.data.spawningSeed
		}, 1, 0, function(b8) {
			var value = Math.abs(Math.floor(b8.target.value)) % 16384;
			b8.target.value = aP.data.spawningSeed = value
		})), fB.push(fF)
	}(fB), function(fB) {
		var fF;
		2 === aP.data.spawningType && ((fF = new fG).fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.spawningData, 2)), fF.fJ(ey), fB.push(fF))
	}(fB), fB))
}

function a41() {
	var td, aU3, ce, cf, kN, aU4, aU5, a7a, canvas, a7b, aU6;

	function fa() {
		return Math.floor((bI.ce - ce) / 2) < e4.cf + 2 * hn.gap ? bI.cf - cf - 4 * hn.gap - e4.cf : bI.cf - cf - 2 * hn.gap
	}
	this.f = function() {
		aU6 = td = !1, kN = .61, aU4 = .07, aU5 = .09, a7b = a7a = cf = 0
	}, this.resize = function() {
		var ff, jx, bt, aUA, aUB, nM;
		td && (ce = kI(ce = bD.bE.bF() ? Math.floor(.69 * bI.ht) : Math.floor(.5 * bI.ht), kH(bI.ce - 2 * hn.gap, 10)), ce = kI(ce, Math.floor(3.57 * kH(bI.cf - 2 * hn.gap, 3))), cf = Math.floor(.28 * ce), (canvas = document.createElement(
			"canvas")).width = ce, canvas.height = cf, ff = canvas.getContext("2d", {
			alpha: !0
		}), jx = Math.floor(1 + cf / 40), ff.clearRect(0, 0, ce, cf), ff.fillStyle = fg.fh, ff.fillRect(jx, jx, ce - 2 * jx, cf - 2 * jx), ff.lineJoin = "bevel", ff.lineWidth = 2 * jx, ff.strokeStyle = fg.fk, ff.strokeRect(jx, jx, ce -
			2 * jx, cf - 2 * jx), ff.imageSmoothingEnabled = !1, bt = ml.get(aU3), aUA = bt.width, nM = (1 === aU3 ? .85 : 21 === aU3 ? .666 : .9) * kN * cf / (aUB = bt.height), ff.setTransform(nM, 0, 0, nM, Math.floor((ce - nM * aUA) /
			2), Math.floor((cf - nM * aUB) / 2)), ff.drawImage(bt, 0, 0), ff.setTransform(1, 0, 0, 1, Math.floor(ce - aU5 * cf - aU4 * cf - jx), Math.floor(jx + aU4 * cf)), function(ff, h) {
			ff.lineWidth = Math.floor(1 + cf / 80), ff.strokeStyle = fg.fk, ff.beginPath(), ff.moveTo(0, 0), ff.lineTo(h, h), ff.moveTo(0, h), ff.lineTo(h, 0), ff.stroke()
		}(ff, Math.floor(aU5 * cf)), ff.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(h9, aU8, ej, aU9) {
		td || aU9 && aU6 || (aU3 = ej ? 21 : h9 ? 1 : 2, td = aU6 = !0, this.resize(), eD.fQ(), e4.aBi(), a7b = eK.iJ, a7a = aU8 ? 1 : 0)
	}, this.iL = function() {
		!td || 1 <= a7a || (a7a = 1 < (a7a += 5e-4 * (eK.iJ - a7b)) ? 1 : a7a, a7b = eK.iJ, eK.eN = !0)
	}, this.tj = function(fm, fn) {
		return !(!td || a7a <= 0 || (fm -= Math.floor((bI.ce - ce) / 2), fn -= fa(), fm < 0) || fn < 0 || ce < fm || cf < fn || (ce - cf / 3 < fm && fn < cf / 3 && (td = !1, eK.eN = !0), 0))
	}, this.fc = function() {
		!td || a7a <= 0 || (fW.globalAlpha = a7a, fW.drawImage(canvas, Math.floor((bI.ce - ce) / 2), fa()), fW.globalAlpha = 1)
	}
}

function a4D() {
	this.ms = new sK, this.nW = new aNI
}

function aNI() {
	this.td = !1;
	this.nY = [], this.nX = 100;
	var jx, jy, gap, bC, aUD, aUF, aUG = 0,
		aUH = new Array(9),
		aUI = [],
		aUJ = [],
		aUK = 0,
		aUL = 0,
		aUM = 0,
		aUN = 0;

	function aUS() {
		aUH.sort(function(bc, bd) {
			return bd.aCb - bc.aCb
		});
		for (var bq = "" + aUH[0].nU, j = 1; j < 9; j++) bq += "," + aUH[j].nU;
		for (j = 0; j < 9; j++) bq += "," + aUH[j].aCb;
		l.bj.jL(120, bq)
	}
	this.f = function() {
		for (var aUO = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], j = 0; j < aUO.length; j++) {
			var color = 6 === aUO[j] ? fg.aPU : fg.aNj;
			this.nY.push(aS.canvas.aBc(ml.get(3), aUO[j], color))
		}
		for (j = 0; j < mr.ms.nZ; j++) aUJ.push(mr.ms.sN - mr.ms.nZ + j);
		for (j = 0; j < mr.ms.sL; j++) aUJ.push(mr.ms.sM + j);
		var xj = mr.ms.sS(a3V.xj);
		for (j = 0; j < xj.length; j++) aUJ.push(xj[j]);
		! function() {
			var j, bk = l.bj.data[120].value.split(",");
			if (18 !== bk.length)
				for (j = 0; j < 9; j++) aUH[j] = {
					nU: 1015 + j,
					aCb: 0
				};
			else
				for (j = 0; j < 9; j++) {
					var h9 = parseInt(bk[j]),
						bt = (h9 = 0 <= h9 && h9 < mr.ms.sN ? h9 : 0, parseInt(bk[j + 9]));
					bt = 0 <= bt && bt < 1e3 ? bt : 0, aUH[j] = {
						nU: h9,
						aCb: bt
					}
				}
		}()
	}, this.show = function(mz, n0, ot) {
		var j;
		if (aUK = mz, aUL = n0, aUG = ot || 0, this.td = !0, aUI = [], 0 === aUG)
			for (j = 0; j < 9; j++) aUI.push(aUH[j].nU);
		else {
			var bd = 49 * aUG,
				ot = bd - 49;
			for (ot >= aUJ.length && (aUG = 1, ot = 0, bd = 49), j = ot = (bd = Math.min(bd, aUJ.length)) - 49; j < bd; j++) aUI.push(aUJ[j])
		}
		aUI.push(1024);
		ot = aUI.length, bC = Math.floor((bD.bE.bF() ? .075 : .0468) * bI.ht), gap = Math.floor(bC / 3), (aUM = 10 * (aUD = bC + gap)) > bI.ce && (aUM = bI.ce, gap = (aUD = aUM / 10) - (bC = 3 * aUD / 4)), aUF = aN.aO(ot, 10) + !!(ot % 10), (
			aUN = aUF * aUD) > bI.cf && (aUN = bI.cf, gap = (aUD = aUN / aUF) - (bC = 3 * aUD / 4)), ot = .5 * gap;
		jx = Math.min(Math.max(mz - .5 * aUM + ot, ot), bI.ce - aUM + ot), jy = Math.min(Math.max(n0 - .5 * aUN + ot, ot), bI.cf - aUN + ot)
	}, this.tj = function(mz, n0, player) {
		if (!this.td) return !1;
		if (this.aJN(mz, n0)) {
			mz = aN.fL(aN.aO(mz - jx + .5 * gap, aUD), 0, 9);
			if ((mz += 10 * aN.fL(aN.aO(n0 - jy + .5 * gap, aUD), 0, 9)) >= aUI.length) return eD.fQ(), !0;
			n0 = aUI[mz];
			if (1024 === n0) return this.show(aUK, aUL, aUG + 1), !0;
			! function(nU) {
				for (var j = 0; j < 9; j++) aUH[j].aCb = Math.floor(.99 * aUH[j].aCb);
				for (j = 0; j < 9; j++)
					if (nU === aUH[j].nU) return aUH[j].aCb = Math.min(aUH[j].aCb + 30, 999), aUS();
				aUH.splice(5, 0, {
					nU: nU,
					aCb: Math.max(aUH[4].aCb, 30)
				}), aUH.pop(), aUS()
			}(n0), player === aP.cs ? db.a0n.uF(n0) : db.aT.aJt(n0, player)
		}
		return eD.fQ(), !0
	}, this.aJN = function(mz, n0) {
		return !(mz < jx - .5 * gap || n0 < jy - .5 * gap || jx + aUM - .5 * gap <= mz || jy + aUN - .5 * gap <= n0)
	}, this.fc = function() {
		fW.fillStyle = fg.fh, fW.fillRect(jx - .5 * gap, jy - .5 * gap, aUM, aUN);
		for (var j8 = .5 * hn.a6Y, h = (fW.lineWidth = hn.a6Y, fW.strokeStyle = fW.fillStyle = fg.fk, fW.strokeRect(jx - .5 * gap + j8, jy - .5 * gap + j8, aUM - 2 * j8, aUN - 2 * j8), fW.imageSmoothingEnabled = !0, aUI.length), j = 0; j <
			h; j++) this.tw(aUI[j], fW, jx + j % 10 * aUD, jy + aN.aO(j, 10) * aUD, bC);
		fW.imageSmoothingEnabled = !1
	}, this.tw = function(nU, hl, fm, fn, bC) {
		var nw;
		nU >= 1024 - mr.ms.nZ ? (nw = bC / this.nX, hl.setTransform(nw, 0, 0, nw, fm, fn), hl.drawImage(this.nY[nU - 1024 + mr.ms.nZ], 0, 0), hl.setTransform(1, 0, 0, 1, 0, 0)) : (aS.bG.textAlign(hl, 1), aS.bG.textBaseline(hl, 1), hl.font = aS.bG
			.bQ(0, .89 * bC), hl.fillText(mr.ms.na(nU), fm + .5 * bC, fn + (.35 - aS.bG.hh + .56) * bC))
	}
}

function a4U() {
	this.pA = new aQA, this.fb = new a1P, this.b0 = new o3, this.oS = new aSX, this.aGC = new aFi, this.oL = new wh, this.aLd = new aMv, this.sh = new a8a, this.a8j = new aDF, this.aUU = new s5, this.t7 = new aTM, this.a0y = new a2H, this.tA =
		new aQm, this.g8 = new aLL, this.a11 = new xk, this.p8 = new a7I, this.aUV = new aUW, this.f = function() {
			this.tA.f(), this.fb.f(), this.b0.f(), this.oS.f(), this.aGC.f(), this.aUU.f(), this.p8.f()
		}, this.fc = function() {
			this.aUU.fc(), this.fb.fc()
		}
}

function aB5() {
	var aUX, aUY, aMl, a0P, aUZ;
	this.aNG = new aHa, aMl = new aCR([.45, .27], [.5, .5], 2 / 3), aUY = [new bV("⚔️<br>" + L(321), function() {
			aUa(0)
		}, fg.aPX), new bV("🗡️<br>" + L(267), function() {
			aUa(1)
		}, fg.aHi), new bV("🔑<br>" + L(322), function() {
			aUa(2)
		}, fg.aPp), new bV("☰<br>" + L(323), function() {
			aUa(3)
		}, fg.aPP), new bV("", function() {
			c9.ed(12)
		}, fg.a3J, !1),
		new bV("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new bV("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], a0P = new fK(l.bj.data[122]);
	for (var j = 0; j < aUY.length; j++) aUY[j].button.style.position = "absolute";

	function aUa(k) {
		bD.bE.setState(10), ml.a8Q() || ml.aN7(), 0 === k ? c9.b0.ec() : 1 === k ? (dw.pb.qc(l.bj.data[156].value, 1) || aP.dK.aG5(), c9.ed(19)) : 2 === k ? 0 !== bD.id || l.bj.data[140].value ? c9.ed(8, c9.cA, new rX(16)) : c9.b0.aEr(c9.cA, 16) :
			3 === k && c9.ed(1)
	}
	a0P.b8.style.position = "absolute", a0P.b8.style.textAlign = "center", a0P.b8.placeholder = L(324), this.show = function() {
		cL.setState(0), bD.bE.setState(12), this.aNG.show(), aUY[4].jU(aS.color.aUb(l.bj.data[121].value)), this.resize(), document.body.appendChild(a0P.b8);
		for (var j = 0; j < aUY.length; j++) document.body.appendChild(aUY[j].button);
		1 !== bD.id || bD.jn < 5 || (aUZ && eK.iJ > aUZ + 144e5 ? bD.jp.setState(14) : aUZ = eK.iJ)
	}, this.fQ = function() {
		this.aNG.fQ(), c9.removeChild(document.body, a0P.b8);
		for (var j = 0; j < aUY.length; j++) c9.removeChild(document.body, aUY[j].button)
	}, this.resize = function() {
		this.aNG.resize(), this.aNG.resize(), aMl.resize();
		var gap = .5 * hn.gap,
			lF = 10 / 99 * .84 * aMl.ce,
			aUe = .16 * aMl.cf,
			a7D = .19 * aMl.ce,
			fm = aMl.fm + a7D,
			lF = aMl.fn + lF + 3 * gap,
			ce = .5 * (aMl.ce - gap) - a7D,
			a7D = aMl.ce - 2 * a7D - aUe - gap,
			a7D = (aS.bG.hp(a0P.b8, fm, lF, a7D, aUe), aS.bG.hp(aUY[4].button, fm + a7D + gap, lF, aUe, aUe), .5 * (aMl.fn + aMl.cf - (lF += aUe + gap) - gap));
		aS.bG.hp(aUY[0].button, fm, lF, ce, a7D), aS.bG.hp(aUY[1].button, fm + ce + gap, lF, ce, a7D), aS.bG.hp(aUY[2].button, fm, lF + a7D + gap, ce, a7D), aS.bG.hp(aUY[3].button, fm + ce + gap, lF + a7D + gap, ce, a7D);
		aS.bG.hp(aUY[5].button, fm, lF + a7D * 2 + gap * 2, ce * 2 + gap, a7D / 3);
		aS.bG.hp(aUY[6].button, fm, lF + a7D * 2.33 + gap * 3, ce * 2 + gap, a7D / 3);
		for (var j = 0; j < aUY.length; j++) aUY[j].button.style.font = aS.bG.bQ(0, aS.bG.bH(.065 * aMl.cf)), aS.bG.hm(aUY[j].button, 5);
		a0P.b8.style.font = aS.bG.bQ(0, aS.bG.bH(.08 * aMl.cf)), aS.bG.hm(a0P.b8, 5)
	}, this.fc = function() {
		if (cL.a54(), qz.fc(), h = Math.floor((bD.bE.bF() ? .018 : .0137) * bI.ht), fW.font = aS.bG.bQ(0, Math.max(5, h)), aS.bG.textBaseline(fW, 0), aS.bG.textAlign(fW, 2), fW.fillStyle = fg.fk, fW.fillText(dT.jn, bI.ce, 0), text =
			"Win count: " + __fx.wins.count, textLength = fW.measureText(text).width, h = Math.max(5, h), fW.textAlign = "left", fW.textBaseline = "middle", fW.fillText(text, fW.canvas.width - textLength - h / 2, 2 * h), a3M.fc(), a3Z.fc(), ml
			.a8Q()) {
			fW.imageSmoothingEnabled = !1;
			var text = ml.a58("territorial.io"),
				textLength = .84 * aMl.ce / text.width;
			fW.setTransform(textLength, 0, 0, textLength, aMl.fm + .08 * aMl.ce, aMl.fn), aUX = aUX || aS.aMk.aJR(text, aS.aMk.aJW, [0, 0, 0]);
			for (var fm = -1; fm <= 1; fm += 2)
				for (var fn = -1; fn <= 1; fn += 2) fW.drawImage(aUX, fm, fn);
			fW.drawImage(text, 0, 0), fW.imageSmoothingEnabled = !0;
			var h = ml.a58("logo"),
				aUg = .6666 * textLength * text.height / h.height,
				jz = .5 * bI.ce,
				k0 = aMl.fn + .5 * textLength * text.height - .5 * aUg * h.height;
			fW.setTransform(aUg, 0, 0, aUg, jz - .6 * textLength * text.width, k0), fW.drawImage(h, 0, 0), fW.setTransform(aUg, 0, 0, aUg, jz + .6 * textLength * text.width - aUg * h.width, k0), fW.drawImage(h, 0, 0), fW.setTransform(1, 0, 0, 1,
				0, 0), fW.imageSmoothingEnabled = !0
		}
	}
}

function aUh() {
	var aUi, aUk = new Uint16Array(8);

	function aUo(size, player) {
		for (var j = ad.ac[player].length - 1; size <= j; j--) ag.zQ(ad.ac[player][j], player)
	}
	this.f = function() {
		aUi = 0
	}, this.aUl = function(player, aUm) {
		return dN.gX[1] = ad.ac[player].length, dN.gX[0] === aP.aj ? dn.aTc.aTy(player) : this.aTw(player, dN.gX[0]), (0 !== dN.gX[1] || 0 !== ad.ac[player].length) && !(!aUm && dN.gX[1] === ad.ac[player].length || (dN.gX[0] === aP.aj ? ad.vF[
			player]++ : ad.vG[player]++, 0))
	}, this.aUn = function(player) {
		aUo(dN.gX[1], player), a8.qe(player, dN.gR[0], dN.gX[0]), aV.ru(player, !1)
	}, this.aTx = function(player, gt, h, hH) {
		var aUp = aN.aO(12 * ad.er[player], 1024);
		hH -= hH >= aN.aO(ad.er[player], 2) ? aUp : 0, aUo(h, player), a8.qe(player, hH, gt), ad.er[player] -= hH + aUp, aV.ru(player, !1)
	}, this.aTw = function(player, gt) {
		for (var wj, ap = ag.ap, j = ad.vD[player].length - 1; 0 <= j; j--)
			if (ag.zF(ad.vD[player][j]))
				for (wj = 3; 0 <= wj; wj--)
					if (ag.aq(ad.vD[player][j] + ap[wj]) && ag.ar(ad.vD[player][j] + ap[wj]) === gt) {
						ad.ac[player].push(ad.vD[player][j]);
						break
					}
	}, this.aTy = function(player) {
		for (var ap = ag.ap, j = ad.vD[player].length - 1; 0 <= j; j--)
			if (ag.zF(ad.vD[player][j]))
				for (var wj = 3; 0 <= wj; wj--)
					if (ag.at(ad.vD[player][j] + ap[wj])) {
						ad.ac[player].push(ad.vD[player][j]);
						break
					}
	}, this.aTd = function(player, aUq) {
		var j, bc, wj, a1B, h = ad.vD[player].length,
			rT = 256 <= h ? 12 : 32 <= h ? 6 : 1,
			ny = h - 1 - dV.rl(rT),
			ap = ag.ap;
		aUi = 0;
		loop: for (j = ny; 0 <= j; j -= rT)
			for (wj = 3; 0 <= wj; wj--)
				if ((a1B = ag.at(ad.vD[player][j] + ap[wj]) ? aP.aj : ag.ar(ad.vD[player][j] + ap[wj])) === aP.aj || ag.aq(ad.vD[player][j] + ap[wj]) && a1B !== player && (aUq || aC.hW(player, a1B))) {
					for (bc = aUi - 1; 0 <= bc; bc--)
						if (aUk[bc] === a1B) continue loop;
					if (aUk[aUi] = a1B, 8 <= ++aUi) return !0
				}
		return 0 < aUi
	}, this.aTe = function(player, aUq) {
		var j, wj, a1B, ap = ag.ap;
		for (aUi = 0, j = ad.vD[player].length - 1; 0 <= j; j--)
			for (wj = 3; 0 <= wj; wj--)
				if ((a1B = ag.at(ad.vD[player][j] + ap[wj]) ? aP.aj : ag.ar(ad.vD[player][j] + ap[wj])) === aP.aj || ag.aq(ad.vD[player][j] + ap[wj]) && a1B !== player && (aUq || aC.hW(player, a1B))) return aUk[aUi++] = a1B, !0;
		return !1
	}, this.aTg = function() {
		for (var bd, j = aUi - 1; 0 <= j; j--)
			if (aUk[j] === aP.aj) {
				for (aUi--, bd = j; bd < aUi; bd++) aUk[bd] = aUk[bd + 1];
				return !0
			} return !1
	}, this.aTf = function(player) {
		for (var bd, j = aUi - 1; 0 <= j; j--)
			if (a8.x0(player, aUk[j]))
				for (aUi--, bd = j; bd < aUi; bd++) aUk[bd] = aUk[bd + 1];
		return 0 === aUi
	}, this.aTm = function() {
		for (var j = aUi - 1; 0 <= j; j--)
			if (aS.aT.gy(aUk[j])) return !0;
		return !1
	}, this.aTo = function() {
		for (var j = aUi - 1; 0 <= j; j--) aS.aT.gy(aUk[j]) || (aUk[j] = aUk[--aUi]);
		return 0 < aUi
	}, this.aTk = function(player) {
		for (var bd, aUr = aUk[0], aUs = ad.er[aUr] + a8.aOo(aUr, player), j = aUi - 1; 1 <= j; j--)(bd = ad.er[aUk[j]] + a8.aOo(aUk[j], player)) < aUs && (aUr = aUk[j], aUs = bd);
		return aUr
	}, this.aTq = function(player) {
		var cf, aUt = aUk[0];
		if (1 !== aUi)
			for (var aUu = aN.aO(ad.mm[player] + ad.mj[player], 2), aUv = aN.aO(ad.mn[player] + ad.mk[player], 2), p0 = kG(aUu - aN.aO(ad.mm[aUt] + ad.mj[aUt], 2)) + kG(aUv - aN.aO(ad.mn[aUt] + ad.mk[aUt], 2)), j = aUi - 1; 1 <= j; j--)(cf = kG(
				aUu - aN.aO(ad.mm[aUk[j]] + ad.mj[aUk[j]], 2)) + kG(aUv - aN.aO(ad.mn[aUk[j]] + ad.mk[aUk[j]], 2))) < p0 && (p0 = cf, aUt = aUk[j]);
		return aUt
	}, this.aTv = function() {
		for (var aUw = aUk, aUx = aUw[0], er = ad.er, aUy = er[aUx], j = aUi - 1; 1 <= j; j--) {
			var am = aUw[j],
				bd = er[am];
			aUy < bd && (aUx = am, aUy = bd)
		}
		return aUx
	}, this.aTp = function() {
		return aUk[dV.rl(aUi)]
	}
}

function aBH() {
	var ew, ex, ey;

	function f1() {
		f5(), 3 !== aP.data.botDifficultyType || aS.f8.a34(aP.data.botDifficultyData) || (aP.data.botDifficultyType = 0), 3 !== aP.data.botDifficultyType && (aP.data.botDifficultyData = null), c9.f6()[19] = null, c9.f7()
	}

	function f5() {
		3 === aP.data.botDifficultyType && aS.f8.f9(ey.fA(), aP.data.botDifficultyData, dr.uC.length - 1)
	}

	function aUz(fB, k) {
		var fF = new fG,
			value = (fF.fH(k < 0 ? L(124) : L(123) + " " + de.kX[k % 9]), 0 <= k && (fF.jG(L(64) + ": " + aP.data.teamPlayerCount[k]).style.marginBottom = "1em"), k < 0 ? aP.data.botDifficultyValue : aP.data.botDifficultyTeam[k]);
		fF.fI(new a({
			i: dr.uC,
			value: value
		}, function(j8) {
			k < 0 ? aP.data.botDifficultyValue = j8 : aP.data.botDifficultyTeam[k] = j8
		})), fB.push(fF)
	}
	this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(124), [new bV("⬅️ " + L(43), f1)]), ex = new f2(ew.f3, function() {
		var fB = [];
		if (function(fB) {
				var fF = new fG,
					i = (fF.fH(L(44)), [L(46), L(272), L(273), L(47)]),
					value = aP.data.botDifficultyType;
				0 === aP.data.gameMode && (value = Math.min(value, 2), i.splice(2, 1));
				fF.fI(new a({
					i: i,
					value: value
				}, function(k) {
					f5(), aP.data.botDifficultyType = k, 0 === aP.data.gameMode && 2 === k && (aP.data.botDifficultyType = 3), 3 !== aP.data.botDifficultyType || aP.data.botDifficultyData || (aP.data.botDifficultyData =
						new Uint8Array(aP.aj)), 2 !== aP.data.botDifficultyType || aP.data.botDifficultyTeam || (aP.data.botDifficultyTeam = new Uint8Array(9)), c9.ed(25)
				})), fB.push(fF)
			}(fB), 0 === aP.data.botDifficultyType) aUz(fB, -1);
		else if (2 === aP.data.botDifficultyType)
			for (var j = 0; j < aP.data.teamPlayerCount.length; j++) aP.data.teamPlayerCount[j] && aUz(fB, j);
		else 3 === aP.data.botDifficultyType && ! function(fB) {
			var fF = new fG;
			fF.fH("Data"), (ey = new fM(0, 1, 0, 1)).fN(aS.fO.fP(aP.data.botDifficultyData, 8)), fF.fJ(ey), fB.push(fF)
		}(fB);
		return fB
	}())
}

function aAd(aU0) {
	var kn = document.createElement("div"),
		aV0 = document.createElement("div"),
		ft = (this.fm = 0, this.fn = 0);

	function aV2() {
		bx.aAR.fQ()
	}
	this.kS = aU0, this.show = function(fm, fn, aAw) {
		if (ft) return [0, 0];
		ft = 1, this.fm = fm, this.fn = fn,
			function(self, aAw) {
				var ce = aS.bG.bJ(.16, .7),
					cf = aU0.length * ce / 3,
					aV5 = bI.ce / bI.hu,
					aV6 = bI.cf / bI.hu,
					h3 = Math.min(1, Math.min(aV5 / ce, aV6 / cf));
				ce *= h3, cf *= h3, aAw && (self.fm += aS.bG.bJ(.03, .5)), self.fm = aN.fL(self.fm, 0, aV5 - ce), self.fn = aN.fL(self.fn, 0, aV6 - cf), aV0.style.left = self.fm + "px", aV0.style.top = self.fn + "px", aV0.style.width = ce + "px",
					aV0.style.height = cf + "px", aV0.style.font = aS.bG.bQ(0, .3 * cf / aU0.length), aS.bG.hm(aV0, 5);
				for (var j = 1; j < aU0.length; j++) aS.bG.hm(aU0[j].button, 8)
			}(this, aAw), document.body.appendChild(kn)
	}, this.fQ = function() {
		ft && (ft = 0, kn.removeEventListener("click", aV2), c9.removeChild(document.body, kn))
	};
	for (var j = 0; j < aU0.length; j++) new aNl("" + (1 + j), aU0[j].button, 0, 1);
	kn.style.position = "fixed", kn.style.top = "0", kn.style.left = "0", kn.style.width = "100%", kn.style.height = "100%", kn.style.zIndex = "5", aV0.style.position = "absolute",
		function() {
			for (var aV3 = (100 / aU0.length).toFixed(2) + "%", j = 0; j < aU0.length; j++) aU0[j].button.style.width = "100%", aU0[j].button.style.height = aU0[j].button.style.maxHeight = aV3, aU0[j].button.style.padding = "0.0em 0.9em", aV0
				.appendChild(aU0[j].button)
		}(), kn.appendChild(aV0), kn.addEventListener("click", aV2)
}

function a4J() {
	this.lt = new a7z, this.aMz = new a3A, this.aN0 = new sT, this.performance = new a0S, this.aTc = new aUh, this.aBM = new aTT, this.aTr = new rZ, this.aMy = new aEP, this.aLe = new sv, this.f = function() {
		this.lt.f(), this.aN0.f(), this.performance.f(), this.aTc.f(), this.aBM.f()
	}, this.iL = function() {
		this.performance.iL(), this.lt.iL(), this.aN0.sV()
	}
}

function aV7() {
	var aV8, aV9;

	function aVC() {
		(aV8 = new WebSocket("wss://territorial.io/s52/")).onopen = aVD, aV8.onclose = function() {
			aVE()
		}
	}

	function aVD() {
		if (aV8 && aV8.readyState === aV8.OPEN) {
			var ce = new xD;
			ce.cM(1608), ce.q9(1, 0), ce.q9(6, 7), ce.q9(2, bD ? bD.id : 3), ce.q9(1, dT.aDb ? 1 : 0), ce.q9(1, dT.aDc ? 1 : 0), ce.q9(1, dT ? dT.a4w : 0);
			for (var j = 0; j < aV9.length && j < 228; j++) ce.q9(7, aV9.charCodeAt(j) % 128);
			aV8.send(ce.pD), aVE()
		}
	}

	function aVE() {
		aV8 && (aV8.onclose = null, aV8.onopen = null, aV8 = null)
	}
	window.addEventListener("error", function aVA(b8) {
		aV9 = "";
		try {
			return window.removeEventListener("error", aVA), aV9 = b8.lineno + " " + b8.colno + "|" + function(b8) {
				if (!b8.error) return "NoStack";
				var stack = b8.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, aRF = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = aRF.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(b8), __fx.reportError(b8, aV9), alert("Error:\n" + b8.filename + " " + b8.lineno + " " + b8.colno + " " + b8.message)
		} catch (b8) {
			aV9 = "SE|" + aV9 + "|" + b8, console.log(aV9), alert(aV9)
		}
		aVC()
	})
}

function aUW() {
	this.iL = function(player, tr) {
		player = dm.g8.aCC(player, tr);
		return !(player < 0 || !dm.p8.a7Z(player) || (dm.p8.p9(player), 0))
	}
}

function a28() {
	this.iL = function(pD) {
		var id, gf, k6;
		for (qb.f(pD), qb.k += 2, k6 = 8 * qb.size; qb.k + 8 <= k6;) id = qb.pF(4), gf = qb.pF(9), 0 === id ? this.ir(id, gf, qb.pF(22)) : 1 === id ? this.ir(id, gf, qb.pF(10), qb.pF(10)) : 2 === id ? this.ir(id, gf, qb.pF(10), qb.pF(9)) : 3 ===
			id ? this.ir(id, gf, qb.pF(10), qb.pF(27)) : 4 === id ? this.ir(id, gf, qb.pF(10), qb.pF(16)) : 5 === id || 6 === id ? this.ir(id, gf, qb.pF(10)) : 7 === id ? this.ir(id, gf, qb.pF(1)) : 10 === id ? this.ir(id, gf, qb.pF(20), qb.pF(
				22)) : this.ir(id, gf)
	}, this.dd = [], this.aVF = function() {
		for (var aVH = 0, aVI = 0, aVJ = 0, aVK = 0, aVL = 0, aVM = 0, j = 0; j < 512; j++) aVH += ad.eQ[j], aVI += ad.el[j], aVJ += ad.er[j], aVK += dm.b0.oI[j];
		aVL += dm.b0.o6, aVM += du.ek, this.dd.push(aVJ % 1073741824 * 4 + (aVH + aVI + aVK + aVL + aVM) % 4)
	}, this.ir = function(id, gf, gh, gj) {
		0 === id ? db.a26.a0o(gf, gh) : 1 === id ? db.a26.a0v(gf, gh, gj) : 2 === id ? db.a26.hL(gf, gh, gj) : 3 === id ? db.a26.a10(gf, gh, gj) : 4 === id ? db.a26.a12(gf, gh, gj) : 5 === id ? db.a26.a5Y(gf, gh) : 6 === id ? db.a26.a5a(gf, gh) :
			7 === id ? db.a26.a19(gf, gh) : 8 === id ? db.a26.a5e(gf) : 9 === id ? db.a26.aFb(gf) : 10 === id && db.a26.a0r(gf, gh >> 10, gj, gh % 1024)
	}
}

function zc() {
	function aVN(j, type, jM, jn) {
		l.bj.data.push({
			k: j,
			type: type || 0,
			value: jM || 0,
			jM: jM || 0,
			jn: jn || 0
		})
	}

	function aVO(j, type, jM, jn) {
		l.bj.data.push({
			k: j,
			type: type,
			value: jM || "",
			jM: jM || "",
			jn: jn || 0
		})
	}

	function aVP(k6) {
		for (var j = l.bj.data.length; j < k6; j++) l.bj.data.push(null)
	}
	this.data = [], this.f = function() {
		aVN(0, 1, 0, 5), aVN(1, 1, 1), aVN(2, 0), aVO(3, 2), aVN(4, 1), aVO(5, 2, "Trebuchet MS", 1), aVN(6, 0), aVN(7, 0, 0), aVN(8, 0), aVN(9, 1, 1), aVN(10, 1), aVN(11, 1, 1), aVO(12, 2, navigator.language), aVN(13), aVN(14), aVP(100), aVO(
				100, 2), aVO(101, 2), aVO(102, 2), aVO(103, 2), aVO(104, 2), aVO(105, 2), aVO(106, 2), aVN(107), aVN(108), aVN(109), aVO(110, 2), aVN(111), aVN(112), aVN(113), aVO(114, 2), aVN(115), aVO(116, 2), aVN(117, 1), aVO(118, 2, "", 2),
			aVN(119, 1, 0, 1), aVO(120, 2), aVN(121, 1, ~~(262144 * Math.random())), aVO(122, 2, "Player " + Math.floor(1e3 * Math.random())), aVN(123), aVO(124), aVN(125, 1), aVO(126, 2), aVN(127, 0, 1), aVN(128), aVN(129), aVN(130), aVN(131),
			aVN(132), aVO(133, 2), aVN(134, 0, 5), aVO(135, 2), aVO(136, 2), aVN(137), aVN(138), aVN(139), aVN(140), aVN(141), aVN(142), aVN(143), aVN(144), aVO(145, 2), aVN(146), aVN(147), aVO(148, 2), aVN(149), aVN(150, 0, 1), aVO(151, 2), aVN(
				152, 0, 5), aVN(153, 1), aVN(154, 1), aVO(155, 2), aVO(156, 2), aVN(157), aVN(158), aVN(159), aVN(160), aVO(161, 2), aVN(162, 0, 1024), aVO(163, 2, "0,0,0"), aVO(164, 2, "100,100,100"), aVO(165, 2, "30,30,30"), aVO(166, 2,
				"70,70,70"), aVO(167, 2, "100,100,100"), aVO(168, 2, "85,85,85"), aVO(169, 2, "100,100,100");
		for (var j = 0; j < 4; j++) aVO(170 + j, 2, "255,255,255");
		aVO(174, 2), aVO(175, 2), aVN(176, 0, 200), aVP(180), aVN(180, 0), aVN(181, 0)
	}, this.n = function(k, value) {
		this.data[k].value = value
	}, this.jL = function(k, value) {
		this.n(k, value);
		var value = String(value),
			h = value.length;
		5e4 < h ? console.log("storage value too large: index " + k + " size " + h) : (l.fT.save(k, value), l.fT.save(k, String(this.data[k].jn), !0))
	}, this.aSw = function(k) {
		return Number(this.data[k].value)
	}, this.aVQ = function(k) {
		return String(this.data[k].value)
	}
}

function aVR() {
	var ce, cf, aVS;

	function aVe(ov, ao, aVc, aVV, nW) {
		ao = aVd(ov, ao + 1 + 2 * aVV & 3);
		! function(ov, ow) {
			return 1 < Math.abs(ov % ce - ow % ce) || 1 < Math.abs(aVg(ov) - aVg(ow))
		}(ov, ao) && 0 === nW[ao << 2] && (nW[ao << 2] = aVc)
	}

	function aVg(am) {
		return Math.floor((am + .5) / ce) % cf
	}

	function aVd(am, ao) {
		return am + aVS[ao]
	}
	this.qc = function(bq) {
		var j, mi, h, aVT, wM = qb;
		for (pS.gF.aI7(pS.gF.yL(bq)), a2.uc.cS[a2.cI].ce = a2.a3 = ce = wM.pF(12), a2.uc.cS[a2.cI].cf = a2.a4 = cf = wM.pF(12), aVS = [-ce, -1, ce, 1], a2.fY = document.createElement("canvas"), a2.fY.width = a2.a3, a2.fY.height = a2.a4, a2.a2g =
			a2.fY.getContext("2d", {
				alpha: !1
			}), a2.a2h = a2.vN = null, a2.a2h = a2.a2g.getImageData(0, 0, a2.a3, a2.a4), a2.vN = a2.a2h.data, aS.f8.aEy(a2.vN), h = wM.pF(12), mi = wM.pF(5), aVT = kQ(ce * cf - 1), j = 0; j < h; j++) ! function(bl, am, aVU, aVV) {
			var j, ao, wM = qb,
				nW = a2.vN,
				aVY = am,
				aVZ = am,
				aVa = 0,
				aVb = 1 + aVU,
				aVc = 2 - aVU;
			for (nW[am << 2] = aVb, j = 0; j < bl; j++) ao = wM.pF(2), am = aVd(am, ao), nW[am << 2] === aVb ? aVa % 2 == 1 && aVe(aVZ, aVa + 2 * aVV + 3, aVc, aVV, nW) : nW[am << 2] = aVb, aVe(am, ao, aVc, aVV, nW), aVe(aVZ, ao, aVc, aVV,
				nW), aVZ = am, aVa = ao;
			aVd(am, 0) === aVY ? (aVe(am, 0, aVc, aVV, nW), aVe(aVY, 0, aVc, aVV, nW)) : aVd(am, 1) === aVY && (aVe(am, 0, aVc, aVV, nW), aVe(aVY, 2, aVc, aVV, nW));
			0 === bl && (aVe(aVY, 0, aVc, aVV, nW), aVe(aVY, 2, aVc, aVV, nW))
		}(wM.pF(mi), wM.pF(aVT), 1 === wM.pF(1), 1 === wM.pF(1));
		var fm, fn, j8, aVh, aVi, aVj, nW = a2.vN,
			aVk = !0,
			cj = a2.uc.cS[a2.cI].cj,
			ck = a2.uc.cS[a2.cI].ck;
		for (fn = 0; fn < cf; fn++)
			for (aVh = !0, aVi = aVk, fm = aVj = 0; fm < ce; fm++) j8 = 4 * fn * ce + 4 * fm, aVj <= fm && 0 < nW[j8] && (aVi = 2 === nW[j8], aVh) && (aVh = !1, aVi !== aVk) ? (aVk = aVi, aVj = fm + 1, fm = -1) : (aVi ? (nW[j8] = ck[0], nW[1 +
				j8] = ck[1], nW[2 + j8] = ck[2]) : (nW[j8] = cj[0], nW[1 + j8] = cj[1], nW[2 + j8] = cj[2]), nW[3 + j8] = 255);
		a2.a2g.putImageData(a2.a2h, 0, 0), a2.a2i = !0, a2.a2j.f(), eK.eN = !0
	}
}

function a4X() {
	this.a38 = new aPv, this.result = new aJb, this.aJg = new a1J, this.aPz = new aQ0, this.aPy = new a9E, this.aEY = new aVl, this.f = function() {
		this.result.f()
	}
}

function aBB() {
	var r9, aDg, aDh, aDj;

	function aDi(j) {
		c9.ed(8, c9.cA, new rX(21, {
			rE: j,
			rV: 0,
			rY: 10
		}))
	}
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), aDg.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, aDh = [new bV(L(77), function() {
		aDi(5)
	}, 0, 0, 1), new bV(L(78), function() {
		aDi(6)
	}, 0, 0, 1), new bV(L(79), function() {
		aDi(7)
	}, 0, 0, 1), new bV("Audit Log", function() {
		aDi(12)
	}, 0, 0, 1)], aDj = [new bV("⬅️ " + L(43), function() {
		c9.f7()
	})], r9 = new f0(L(242), aDj), aDg = new aDk(aDh, r9.f3)
}

function a4u() {
	var fm, fn, cf, lF, aVm, aVn, aVo, aVp, aVq, ce, i3, aE7;
	this.td = !1, this.f = function(bq, aVr) {
		if (1 === bD.id && 13 <= bD.jn && bD.jn < 18) return aVr ? void(i3 = bq) : i3 !== bq ? void 0 : void bD.jp.saveString(200, bq);
		aVr && (i3 = bq, (aE7 = document.createElement("a")).appendChild(document.createTextNode(i3)), this.td = !0, aE7.title = i3, aE7.target = "_blank", aE7.href = i3, aE7.style.textAlign = "center", aE7.style.color = fg.fk, aE7.style
			.position = "absolute", aE7.style.padding = "0px", aE7.style.margin = "0px", this.resize(), document.body.appendChild(aE7), eK.eN = !0)
	}, this.fQ = function() {
		return !(!this.td || (c9.removeChild(document.body, aE7), this.td = !1))
	}, this.tj = function(kA, kB) {
		return !!this.td && ((kA < fm || kB < fn || fm + ce < kA || fn + cf < kB || fm + ce - lF < kA && kB < fn + lF) && (eK.eN = !0, this.td = !1, c9.removeChild(document.body, aE7)), !0)
	}, this.resize = function() {
		var tV, nx;
		this.td && (aVp = Math.floor(.8 * (bD.bE.bF() ? bI.ce > bI.cf ? .6 : .55 : .4) * bI.ht), lF = Math.floor(.15 * aVp), aVm = Math.floor(.35 * lF), aVn = Math.floor(.5 * lF), aVo = Math.floor(2.5 * aVn), cf = lF + aVm + 3 * aVn, tV = aS.bG
			.bQ(1, aVm / bI.hu), aVq = Math.floor(bI.hu * eA.measureText(i3, tV)), nx = ce = (aVp < aVq ? aVq : aVp) + 2 * aVo, ce = Math.min(ce, bI.ce - 2 * (bD.bE.bF() ? 2 : 1) * hn.gap), tV = aS.bG.bQ(1, ce / nx * aVm / bI.hu), aVq = Math
			.floor(bI.hu * eA.measureText(i3, tV)), fm = Math.floor((bI.ce - ce) / 2), fn = Math.floor((bI.cf - cf) / 2), aE7.style.font = tV, aE7.style.top = Math.floor((fn + 1.4 * aVn + lF) / bI.hu) + "px", aE7.style.left = Math.floor((fm +
				(ce - aVq) / 2) / bI.hu) + "px")
	}, this.fc = function() {
		this.td && (fW.fillStyle = fg.fh, fW.fillRect(fm, fn + lF, ce, cf - lF), fW.fillStyle = fg.aPs, fW.fillRect(fm, fn, ce, lF), fW.fillStyle = fg.fk, fW.lineWidth = hn.a6Y, fW.strokeStyle = fg.fk, fW.strokeRect(fm, fn, ce, cf), fW.fillRect(
			fm, fn + lF, ce, hn.a6Y), fW.font = aS.bG.bQ(1, .48 * lF), aS.bG.textAlign(fW, 1), aS.bG.textBaseline(fW, 1), fW.fillText(L(325), Math.floor(fm + (ce - .5 * lF) / 2), Math.floor(fn + .55 * lF)), e9.w4(Math.floor(fm + ce - .8 *
			lF), Math.floor(fn + .25 * lF), Math.floor(.5 * lF)), fW.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a3l() {
	var aCb = new Uint8Array(aP.aj),
		aVs = new Uint16Array(aP.aj),
		aVt = new Uint16Array(aP.aj),
		aVu = new Uint8Array(aP.aj),
		aVv = (this.hH = new Uint8Array(aP.aj), new Uint16Array(aP.aj)),
		aVw = new Uint16Array(aP.aj);

	function aW1(j) {
		aCb[j] = 1 + aN.aO(aVv[j] * dV.random(), 10 * dV.value(100))
	}
	this.uC = null, this.aTn = [97, 94, 70, 40, 20, 0, 100], this.t9 = [500, 450, 400, 300, 80, 50, 100], this.aTj = [0, 0, 5, 25, 50, 100, 0], this.a9f = [60, 74, 112, 200, 256, 512, 512], this.o4 = [1, 2, 3, 4, 6, 8, 1], this.rt = [500, 450, 400,
		300, 80, 50, 100
	], this.sx = [100, 150, 250, 400, 600, 1e3, 100], this.dg = function() {
		this.uC = [L(326), L(327), L(328), L(329), L(330), L(331), "H Bot"]
	}, this.f = function() {
		aCb.fill(0), aVs.fill(0), aVt.fill(0), aVu.fill(0), this.hH.fill(0), aVv.fill(0), aVw.fill(0);
		var aVx = aP.ct;
		if (9 === aP.dA) this.aVy();
		else if (aP.d0)
			if (3 === aP.data.botDifficultyType)
				for (j = aP.cv - 1; 0 <= j; j--) {
					var j8 = j + aVx;
					this.hH[j8] = aP.data.botDifficultyData[j8]
				} else if (2 === aP.data.botDifficultyType)
					for (j = aP.cv - 1; 0 <= j; j--) this.hH[j8 = j + aVx] = aP.data.botDifficultyTeam[de.lq[de.gu[j8]]];
				else if (1 === aP.data.botDifficultyType) {
			var aW0 = this.uC.length;
			for (j = aP.cv - 1; 0 <= j; j--) this.hH[j + aVx] = j % aW0
		} else
			for (aW0 = aP.data.botDifficultyValue, j = aP.cv - 1; 0 <= j; j--) this.hH[j + aVx] = aW0;
		else
			for (var aVz = 8 === aP.dA ? 1 : 0, j = aP.cv - 1; 0 <= j; j--) this.hH[j + aVx] = aVz;
		for (j = 0; j < aVx; j++) this.hH[j] = 6;
		var h = aP.aj;
		for (j = 0; j < h; j++) this.hH[j] <= 2 ? (aVu[j] = 5, aVv[j] = aVw[j] = 1040, 0 === this.hH[j] ? (aVs[j] = 980, aVt[j] = 980) : 1 === this.hH[j] ? (aVs[j] = 980, aVt[j] = 920, aVv[j] = aVw[j] = 1100) : (aVs[j] = 825, aVt[j] = 750)) :
			this.hH[j] <= 4 ? (aVu[j] = 1 + dV.rl(20), 3 === this.hH[j] ? (aVs[j] = aVt[j] = 500, aVv[j] = aVw[j] = 1e3) : (aVw[j] = 250 + dV.rl(1501), aVv[j] = 500 + dV.rl(501), aVs[j] = 300 + dV.rl(201), aVt[j] = 100 + dV.rl(201))) : this.hH[
			j] <= 5 ? (aVv[j] = 1e3, aVw[j] = 1e3, aVu[j] = 35 + dV.rl(16), aVs[j] = 300 + dV.rl(201), aVt[j] = 50 + dV.rl(101)) : (aVv[j] = aVw[j] = 800, aVu[j] = 5, aVs[j] = 10, aVt[j] = 250), aW1(j)
	}, this.aVy = function() {
		for (var nw = dQ.aEb, aVx = aP.ct, j = nw - 1; 0 <= j; j--) this.hH[j + aVx] = 0;
		for (var bd = 0; bd < 6; bd++) {
			for (j = nw + dQ.a9P[bd] - 1; nw <= j; j--) this.hH[j + aVx] = bd;
			nw += dQ.a9P[bd]
		}
	}, this.aTZ = function(am, value) {
		aCb[am] = Math.min(value, aCb[am])
	}, this.iL = function(am) {
		0 == --aCb[am] && ! function(am) {
			(function(am) {
				aVv[am] !== aVw[am] && (aVv[am] += aVv[am] < aVw[am] ? 3 : -3);
				aVs[am] !== aVt[am] && (aVs[am] += aVs[am] < aVt[am] ? aVu[am] : -aVu[am], aVs[am] = (Math.abs(aVs[am] - aVt[am]) <= aVu[am] ? aVt : aVs)[am]);
				aCb[am] = aN.aO(aVv[am], 10)
			})(am), dn.aBM.aTU(am, aN.aO(aVs[am] * ad.er[am], 1e3))
		}(am)
	}, this.a0a = function(am, ae) {
		aVv[am] = aVw[am] = ae
	}
}

function a3k() {
	this.gF = new aSD, this.pT = new wL, this.q2 = new aM5, this.f = function() {
		this.gF.f()
	}
}

function aGj() {
	this.pF = function() {
		return 69
	}, this.eX = function() {
		var ce = window.screen.width,
			cf = window.screen.height;
		pJ.q9(26, (ce * cf + cf) % 67108864), pJ.q9(22, 0), pJ.q9(21, 0)
	}
}

function aBK() {
	var ew, aNg = !0;

	function aNq(aNp, a7h) {
		var iB = document.createElement("div"),
			aW5 = document.createElement("span"),
			aW6 = document.createElement("span");
		aW5.textContent = e8.wK(a7h.iJ) + ":", aW5.style.color = fg.aPR, aW5.style.paddingRight = "0.4em", aW5.style.display = "table-cell", aW5.style.width = "6ch", aW5.style.textAlign = "end", iB.appendChild(aW5), aW6.textContent = a7h.bq, iB
			.appendChild(aW6), iB.style.display = "table", a7h.nU && function(iB, nU) {
				{
					var pa;
					nU >= 1024 - mr.ms.nZ ? ((pa = document.createElement("img")).src = mr.nW.nY[nU - 1024 + mr.ms.nZ].toDataURL(), pa.style.width = "1.5em", pa.style.height = "1.5em", pa.style.verticalAlign = "middle", iB.appendChild(pa)) : ((pa =
						document.createElement("span")).textContent = mr.ms.na(nU), pa.style.display = "inline-block", pa.style.fontSize = "1.5em", pa.style.lineHeight = "1em", pa.style.verticalAlign = "middle", iB.appendChild(pa))
				}
			}(iB, a7h.nU), aNp.appendChild(iB)
	}

	function aNr() {
		aNg && (ew.f3.scrollTop = ew.f3.scrollHeight)
	}
	this.clear = function() {
		ew.f3.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var tD = dP.a7j(), h = tD.length, aNp = document.createDocumentFragment(), j = 0; j < h; j++) aNq(aNp, tD[j]);
		ew.f3.appendChild(aNp), aNr(), ew.show(), this.resize(), aNg = !0, aNr()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ew.f3.style.padding = "0.4em " + aS.bG.bK(hn.a6Z)
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, this.lk = function(a7h) {
		var aNp = document.createDocumentFragment();
		aNq(aNp, a7h), ew.f3.appendChild(aNp), aNr()
	}, (ew = new f0(L(253), [new bV("⬅️ " + L(43), function() {
		c9.a0H(1)
	})])).f3.style.overflowY = "auto", ew.f3.addEventListener("scroll", function() {
		aNg = ew.f3.scrollTop >= ew.f3.scrollHeight - ew.f3.clientHeight - 2
	})
}

function aBJ() {
	var aW8, ki, aWB, kh, kk, aW9 = [new Array(4), [], new Array(2), new Array(2)],
		aWA = new Array(4),
		aWC = new Array(2),
		aWD = [L(123), L(239), L(332), L(333)];

	function aR0() {
		var lN;
		!bx.a5C || (lN = aW8.kx.a0P.b8.value.trim().slice(0, 127)).length < 1 || (aW8.kx.a0P.b8.value = "", bx.aAt.a37(lN))
	}

	function aWG(aWI) {
		bx.b0.cB[3] = 1 - bx.b0.cB[3], aWH(3, 1, bx.b0.cB[3]), aWI && az.qt.aRB(4), bx.b0.cB[3] && l.m.n(158, bx.b0.cB[0])
	}

	function aWE(bc, bd) {
		bx.b0.cB[bc] !== bd && (0 === bc && bx.b0.cB[3] && aWG(0), aWH(bc, bx.b0.cB[bc], 0), aWH(bc, bd, 1), bx.b0.cB[bc] = bd, 0 === bc ? (az.qt.aRB(2, bd), bx.b0.cB[2] ? (aW8.kz.vv(), aW8.kx.aAJ(1)) : aW8.kx.aAJ(0), c9.r2().aRP(), c9.r2().aRO()) :
			2 === bc && (0 === bd ? (az.qt.aRB(0), aW8.kx.vv(), aW8.lA()) : (az.qt.aRB(1), aW8.kz.vv(), aW8.lB())))
	}

	function aWH(bc, bd, color) {
		aW8.l1[bc].kS[bd].jU(color ? fg.aJ6 : fg.aNk)
	}

	function aWL(c2) {
		return c2 < 7 ? c2 + 2 + " " + L(340) : 7 === c2 || 10 === c2 ? L(239) + " (Full-Sending: " + L(7 === c2 ? 341 : 342) + ")" : 8 === c2 ? "1v1" : L(343)
	}

	function aWO(h9) {
		var lR = aN.aO(h9, 60),
			h9 = h9 % 60;
		return (lR < 10 ? "0" : "") + lR + ":" + (h9 < 10 ? "0" : "") + h9
	}
	this.yY = function() {
		return aW8.kx
	}, this.aAt = function(cQ) {
		aWE(2, 0);
		var bq = aW8.kx.a0P.b8.value,
			cQ = "@" + cQ + " ";
		bq.length && !aS.fO.i5(bq, " ") && (cQ = " " + cQ), aW8.kx.a0P.b8.value = bq += cQ, aW8.kx.a0P.b8.focus()
	}, this.aRN = function() {
		aW8.kz.vv()
	}, this.aRP = function() {
		var aWK = bx.b0.cB[0],
			aWK = bx.b0.c0[aWK];
		a2.cM(aWK.cI, aWK.mapSeed), ki.kS[0].button.textContent = L(269) + ": " + a2.uc.cS[aWK.cI].name, ki.kS[1].button.textContent = L(271, 0, "Mode") + ": " + aWL(aWK.c2), ki.kS[2].button.textContent = L(337) + ": " + a2.uc.cS[aWK.aWM].name,
			ki.kS[3].button.textContent = L(338, 0, "Next Mode") + ": " + aWL(aWK.aWN), ki.kS[4].button.textContent = L(339) + ": " + aWO(aWK.aRR), ki.resize()
	}, this.aRO = function() {
		var aWK = bx.b0.cB[0],
			bz = bx.b0.c0[aWK];
		aW8.l8(bz.l9);
		for (var j = 0; j < bx.by.c3.length; j++) aW9[0][j].a2G.textContent = "" + bx.by.c3[j].length;
		var by = bx.by.c3[aWK],
			aWP = by.length,
			aWQ = bx.by.bw[aWK];
		aW9[2][1].a2G.textContent = "" + aWP, aW9[3][1].a2G.textContent = "" + aWQ, ki.kS[4].button.textContent = L(339) + ": " + aWO(bz.aRR);
		for (j = 0; j < 4; j++) {
			var aWR = bx.b0.c0[j];
			aWA[j] ? 0 === aWR.l9 && (aWA[j].a2G.textContent = a2.uc.cS[aWR.cI].name) : aWA[j] = new aNl(a2.uc.cS[aWR.cI].name, kh.kS[j].button, 1, 1), aS.fO.startsWith(aWD[j], "🏆 ") ? aWR.cG || (aWD[j] = aWD[j].substring(3), kh.kS[j].button
				.textContent = aWD[j], kh.kS[j].button.appendChild(aW9[0][j].a2G), kh.kS[j].button.appendChild(aWA[j].a2G)) : aWR.cG && (aWD[j] = "🏆 " + aWD[j], kh.kS[j].button.textContent = aWD[j], kh.kS[j].button.appendChild(aW9[0][j]
				.a2G), kh.kS[j].button.appendChild(aWA[j].a2G))
		}
		var bz = "",
			aWT = "";
		0 === aWK && (bz = bx.g8.aT9(by, 0, aWP), aWT = bx.g8.aT9(by, 0, aWQ)), aWB[0].a2G.textContent = bz, aWB[1].a2G.textContent = aWT, aWC[1].a2G.textContent = "MP: " + bx.b0.aRH[0] + "   SP: " + bx.b0.aRH[1] + "   Lobby: " + aS.f8.aFD(bx.by
			.c3)
	}, this.aRT = function() {
		aW8.kx.vv()
	}, this.show = function() {
		aW8.show(), this.resize(), bx.message.show()
	}, this.fQ = function() {
		aW8.fQ(), bx.aAR.fQ(), bx.g6.fQ(), bx.message.fQ()
	}, this.resize = function() {
		aW8.resize(1 - bx.b0.cB[2]), bx.message.resize()
	}, this.fR = function(bt) {
		2 === bt ? bx.b0.cB[3] ? aWG(1) : aW8.l1[3].kS[0].fT() : bt < 2 && aWG(1)
	}, kh = new aTz([new bV(aWD[0], function() {
		return aWE(0, 0), 2
	}), new bV(aWD[1], function() {
		return aWE(0, 1), 2
	}), new bV(aWD[2], function() {
		return aWE(0, 2), 2
	}), new bV(aWD[3], function() {
		return aWE(0, 3), 2
	})], fg.aNk), ki = new aTz([new bV("", 0, 2), new bV("", 0, 2), new bV("", 0, 2), new bV("", 0, 2), new bV("", 0, 2)], fg.aPu, 1);
	var aWF = new aTz([new bV(L(334), function() {
		return aWE(2, 0), 2
	}), new bV(L(335), function() {
		return aWE(2, 1), 2
	})], fg.aNk);
	kk = new aTz([new bV(L(1, 0, 0, 1), function() {
		c9.wO(), bx.pE(), az.b0.a5P(3240), c9.ed(5, 5)
	}), new bV(L(336), function() {
		return aWG(1), 2
	})], fg.aNk), aW8 = new kg(kh, ki, aWF, kk, aR0, bx.aAR.aAc);
	for (var j = 0; j < 4; j++) aW9[0][j] = new aNl("0", kh.kS[j].button);
	aW9[2][1] = new aNl("0", aWF.kS[1].button), aW9[3][1] = new aNl("0", kk.kS[1].button), aWB = [new aNl("", aWF.kS[1].button, 1, 1), new aNl("", kk.kS[1].button, 1, 1)], aWH(0, bx.b0.cB[0], 1), aWH(2, bx.b0.cB[2], 1), (aWC = [new aNl(L(64), aW8
	.lC(), 1, 0), new aNl("", aW8.lC(), 1, 1)])[0].a2G.style.fontSize = "0.4em", aWC[1].a2G.style.fontSize = "0.4em"
}

function aB6(data) {
	var r9, a0G;
	this.show = function() {
		data.aDE && a1y.a22("account", data.cQ), r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a0G.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, r9 = new f0(data.username, [new bV("⬅️ " + L(43), function() {
		a1y.clear(), c9.f7()
	}), new bV(data.aDE ? "🔄 " + L(344) : L(345), function() {
		c9.ed(8, data.aDE ? c9.r2().rW : void 0, new rX(25, {
			qI: 0,
			cQ: data.cQ,
			rN: data.rN
		}))
	}, 0, 0, 1)]), a0G = new f2(r9.f3, function() {
		var fB = [];
		fB.push(function() {
				var fF = new fG,
					lQ = (fF.fH(L(394)), data.aD6);
				lQ < 1 ? (fF.jG(L(395)), 0 === data.aD5 ? fF.jI(L(396)) : 1 === data.aD5 ? fF.jI(L(397)) : 2 === data.aD5 ? fF.jI(L(398)) : 3 === data.aD5 ? fF.jI(L(399)) : 4 === data.aD5 ? fF.jI(L(400)) : 5 === data.aD5 ? fF.jI(L(401)) :
					6 === data.aD5 ? fF.jI(L(402)) : fF.jI(L(403))) : (fF.jG(L(404)), lQ = lQ < 2 ? L(405) : lQ < 61 ? 2 === lQ ? L(406) : L(407, [lQ - 1]) : lQ < 84 ? 61 === lQ ? L(408) : L(409, [lQ - 60]) : lQ < 255 ? 84 === lQ ? L(
					410) : L(411, [lQ - 83]) : L(412), fF.jI(lQ));
				{
					var jH, aPG;
					fF.fJ(new kV), data.aDE && (jH = fF.jI(), fF.fJ(new i9([new bV(l.jg.jh(data.cQ) ? L(413) : L(414), function(b8) {
						return l.jg.aQM(data.cQ) ? (b8.textContent = L(413), aPG(1)) : (b8.textContent = L(414), aPG(0)), !0
					}).button])), aPG = function(h9) {
						jH.textContent = h9 ? L(415) : ""
					}, l.jg.jh(data.cQ) && aPG(1), fF.fJ(new kV))
				}
				var a0P = new fK({
					value: data.username,
					k: -1
				});
				a0P.b8.readOnly = !0, fF.fJ(a0P), fF.fJ(new i9([new bV(L(365), function(b8) {
					return aS.bG.i4(a0P.b8), aS.bG.bZ(b8), !0
				}).button])), data.aDE ? (fF.fJ(new kV), fF.jG("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", fF.fJ(new i9([new bV(L(417),
					function(b8) {
						return az.jS.qR({
							qI: 3,
							cQ: data.cQ,
							value: 0
						}), aS.bG.bZ(b8), !0
					}, fg.a8v).button])), fF.fJ(new i9([new bV(L(418), function(b8) {
					return az.jS.qR({
						qI: 3,
						cQ: data.cQ,
						value: 1
					}), aS.bG.bZ(b8), !0
				}, fg.a8v).button])), fF.fJ(new i9([new bV("Cheater", function(b8) {
					return az.jS.qR({
						qI: 3,
						cQ: data.cQ,
						value: 2
					}), aS.bG.bZ(b8), !0
				}, fg.a8v).button])), fF.fJ(new i9([new bV("False Reporter", function(b8) {
					return az.jS.qR({
						qI: 3,
						cQ: data.cQ,
						value: 3
					}), aS.bG.bZ(b8), !0
				}, fg.a8v).button]))) : fF.jI(L(416));
				return fF
			}()),
			function(fB) {
				var fF, jH, aSV, jJ, aPI, a0N, jR;
				data.aDE || ((fF = new fG).fH(L(419)), (jH = fF.jI(data.aD0.length + " / 160")).style.textAlign = "center", aSV = !0, (jJ = new fM(0, 1, function(b8) {
					b8 = b8.target.value.length;
					jH.textContent = b8 + " / 160", 160 < b8 ? aSV && (aSV = !1, a0N.jU(1)) : aSV || (aSV = !0, a0N.jU(0))
				})).b8.rows = 6, jJ.b8.style.fontSize = "1em", jJ.fN(data.aD0), fF.fJ(jJ), 0 !== data.aCy ? (a0N = new bV(L(420), function() {
					if (!aSV) return !0;
					c9.ed(8, c9.r2().rW, new rX(29, {
						qI: 1,
						bq: jJ.fA().substring(0, 160)
					}))
				}, 0, 0, 1), fF.fJ(new i9([a0N.button])), fF.fJ(new i9([new bV(1 === data.aCy ? L(421) : L(422), function() {
					c9.ed(8, c9.r2().rW, new rX(29, {
						qI: 0,
						bq: ""
					}))
				}, 0, 0, 1).button])), fF.jI(1 === data.aCy ? L(423, [data.aD1 - 1]) : L(424, [data.aD1 - 1])), fF.jI(L(425, [data.aCz]))) : (aPI = new bV(L(426), function() {
					if (!jJ.b8.readOnly) return !0;
					c9.ed(8, c9.r2().rW, new rX(29, {
						qI: 1,
						bq: jJ.fA().substring(0, 160)
					}))
				}, 1), a0N = new bV(L(60), function(b8) {
					if (b8.textContent === L(60)) {
						if (!aSV) return !0;
						b8.textContent = L(59), jJ.b8.readOnly = !0, aPI.jU(0), aPI.button.style.color = fg.jV
					} else jR();
					return !0
				}), fF.fJ(new i9([a0N.button])), fF.jI(L(425, [data.aCz])), jR = function() {
					a0N.button.textContent = L(60), jJ.b8.readOnly = !1, aPI.jU(1), aPI.button.style.color = fg.fk
				}, fF.fJ(new i9([aPI.button]))), fB.push(fF))
			}(fB),
			function(fB) {
				var fF;
				data.aDE && 0 !== data.aCy && ((fF = new fG).fH(L(427)), fF.aWq(data.aD0), fF.fJ(new i9([new bV(L(428, 0, "Report"), function(b8) {
					return az.b0.b1(0) && (aS.bG.bZ(b8), az.jS.qQ({
						qI: 5,
						cQ: data.cQ
					})), !0
				}, 0, 0, 1).button])), fB.push(fF))
			}(fB), fB.push(function() {
				var fF = new fG,
					aWi = (fF.fH(L(346)), fF.jG("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(347), L(348), L(349), L(350), L(351), L(352), L(353), L(
						354), L(355), L(356), L(357), L(358), L(359), L(360)]),
					rp = data.aD2;
				return fF.jG(L(361) + aS.fO.aNS(data.g0, .01, 2) + "<br>" + L(362) + (rp + 1) + " / " + data.wX + "<br>" + L(363) + aWi[function(rp, g0) {
					if (rp < 10) return 0;
					if (rp < 30) return 1;
					if (rp < 60) return 2;
					if (3e4 <= (g0 = aN.aO(g0, 100))) return 3;
					if (12e3 <= g0) return 4;
					if (7e3 <= g0) return 5;
					if (3e3 <= g0) return 6;
					if (1e3 <= g0) return 7;
					if (500 <= g0) return 8;
					if (200 <= g0) return 9;
					if (70 <= g0) return 10;
					if (20 <= g0) return 11;
					if (3 <= g0) return 12;
					return 13
				}(rp, data.g0)]), fF
			}()), data.aDE && fB.push(function() {
				var fF = new fG,
					a0P = (fF.fH(L(364)), fF.jG("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new fK({
						value: l.bj.data[147].value,
						k: -1
					}, 1, void 0, function(b8) {
						l.m.n(147, aPG(b8.target.value))
					})),
					aPI = (fF.fJ(a0P), new bV(L(304), function(b8) {
						return a0P.b8.readOnly && az.b0.b1(0) && (aS.bG.bZ(b8), jR(), az.jS.qR({
							qI: 0,
							cQ: data.cQ,
							value: parseInt(l.bj.data[147].value, 10)
						})), !0
					}, 1)),
					a0N = new bV(L(60), function(b8) {
						return b8.textContent === L(60) ? (b8.textContent = L(59), a0P.b8.readOnly = !0, aPI.jU(0), aPI.button.style.color = fg.jV, l.m.n(147, a0P.b8.value), aPG(l.bj.data[147].value)) : jR(), !0
					}),
					jH = (fF.fJ(new i9([a0N.button])), fF.jI()),
					aPG = function(h9) {
						jH.innerHTML = c9.b0.aPJ(h9, l.bj.data[105].value, data.cQ)
					},
					jR = function() {
						a0N.button.textContent = L(60), a0P.b8.readOnly = !1, aPI.jU(1), aPI.button.style.color = fg.fk
					};
				return aPG(l.bj.data[147].value), fF.fJ(new i9([aPI.button])), fF
			}());
		fB.push(function() {
			var fF = new fG,
				a0P = (fF.fH(L(212)), new fK({
					value: data.cQ,
					k: -1
				}));
			return a0P.b8.readOnly = !0, fF.fJ(a0P), fF.fJ(new i9([new bV(L(365), function(b8) {
				return aS.bG.i4(a0P.b8), aS.bG.bZ(b8), !0
			}).button])), fF
		}()), data.aDE || (fB.push(function() {
			var fF = new fG,
				a7s = (fF.fH(L(213)), new fK(l.bj.data[106]));
			return a7s.b8.readOnly = !0, a7s.b8.type = "password", fF.fJ(a7s), fF.fJ(new i9([new bV(L(55), function(b8) {
				return b8.textContent === L(55) ? (b8.textContent = L(214), a7s.b8.type = "text") : (b8.textContent = L(55), a7s.b8.type = "password"), !0
			}).button, new bV(L(365), function(b8) {
				return aS.bG.i4(a7s.b8), aS.bG.bZ(b8), !0
			}).button])), fF.fJ(new i9([new bV(L(366), function() {
				c9.ed(8, c9.r2().rW, new rX(15))
			}).button])), fF.fH(L(215), "0.8em"), fF.jI(L(367)), fF.jI(L(368)), fF.jI(L(369)), fF
		}()), fB.push(function() {
			var fF = new fG;
			return fF.fH(L(370)), fF.fJ(new i9([new bV(L(371), function() {
				c9.ed(6, c9.r2().rW)
			}).button])), fF.fJ(new i9([new bV(L(372), function() {
				l.m.n(105, ""), c9.ed(8, c9.r2().rW, new rX(18))
			}).button])), fF.fJ(new i9([new bV(L(373) + l.bj.data[105].value, function() {
				c9.ed(4, 0, new a5G(L(374), L(375), !0, [new bV("⬅️ " + L(43), function() {
					c9.ed(7, c9.yX(7).rW)
				})]))
			}, fg.a8v).button])), fF
		}()), fB.push(function() {
			function aWm(k) {
				aWl[0].jU(0 === k ? fg.aEu : fg.tb), aWl[1].jU(0 === k ? fg.aEu : fg.a8v), aWl[2].jU(k === aWk.d.length - 1 || k < 5 ? fg.aEu : fg.a8v)
			}
			var aWk, aWl, fF = new fG;
			fF.fH(L(380)), fF.jI(L(381)), l.b0.aL2();
			return aWl = [new bV(L(211), function() {
				var k = Math.min(l.bj.data[117].value, aWk.d.length - 1);
				k < 1 || (k = l.b0.aL6(k), l.m.n(105, k.cQ), l.m.n(106, k.password), c9.ed(8, c9.r2().rW, new rX(18)))
			}, fg.aEu, 1), new bV(L(378), function() {
				var k = Math.min(l.bj.data[117].value, aWk.d.length - 1);
				if (!(k < 1)) {
					aWk.d[k].remove(), aWk.d.splice(k, 1);
					for (var j = k; j < aWk.d.length; j++) aWk.d[j].name = "" + j;
					l.b0.aL5(k), k = l.bj.data[117].value, aWk.d[k].textContent = aWk.d[k].textContent.replace("⚪", "🟢"), aWm(k)
				}
			}, fg.aEu, 1), new bV(L(379), function() {
				var k = Math.min(l.bj.data[117].value, aWk.d.length - 1);
				if (k !== aWk.d.length - 1) {
					for (var j = aWk.d.length - 1; k < j; j--) aWk.d[j].remove(), aWk.d.splice(j, 1), l.b0.aL5(j);
					aWm(k)
				}
			}, fg.aEu, 1)], aWk = new a(l.bj.data[117], aWm), aWm(0), aWk.d[0].style.marginTop = "0.5em", fF.fI(aWk), fF.fJ(new i9([aWl[0].button])), fF.fJ(new i9([aWl[1].button])), fF.fJ(new i9([aWl[2].button])), fF
		}()));
		return fB.push(function() {
				var fF = new fG,
					aWi = (fF.fH(L(385)), [L(386), L(387), L(388), L(389)]),
					rp = data.aD3;
				return fF.jG(L(390) + (data.aD4 / 100).toFixed(2) + "<br>" + L(362) + (rp + 1) + " / " + data.wX + "<br>" + L(363) + aWi[rp < 10 ? 0 : rp < 50 ? 1 : rp < 200 ? 2 : 3]), fF
			}()), fB.push(function() {
				var fF = new fG;
				return fF.fH(L(382)), fF.jG(L(383) + aS.fO.aNS(data.wU, .1, 1) + "<br>" + L(362) + (data.wV + 1) + " / " + data.wX + "<br>" + L(384) + data.wW), fF
			}()),
			function(fB) {
				var fF = new fG,
					aWr = data.wa,
					aWs = (fF.fH(L(429)), fF.jG(L(430, [data.wY.length ? "[" + data.wY + "]" : "-"])), fF.jG(L(431, [aS.fO.aNS(aWr, .01, 2)])), fF.jG(L(432, [data.wc + 1 + " / " + data.wX])), data.wd),
					aWt = (fF.jG(L(433, [aS.fO.aNS(aWs, .1, 1)])), data.wf);
				fF.jG(L(434, [aWt])), fF.jG(L(435, [aS.fO.aNS(aWs / Math.max(aWt, 1), .1, 2)])), aWr = data.wb, fF.fH(L(436), "0.8em"), fF.jG(L(430, [data.wZ.length ? "[" + data.wZ + "]" : "-"])), fF.jG(L(431, [aS.fO.aNS(aWr, .01, 2)])),
					aWs = data.we, fF.jG(L(433, [aS.fO.aNS(aWs, .1, 1)])), aWt = data.wg, fF.jG(L(434, [aWt])), fF.jG(L(435, [aS.fO.aNS(aWs / Math.max(aWt, 1), .1, 2)])), fF.jG(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", fB.push(fF)
			}(fB),
			function(fB) {
				var fF = new fG;
				fF.fH(L(437)), fF.jG(L(390) + (data.aCw / 10).toFixed(1) + "<br>" + L(363) + (data.aCx.length ? L(438, [data.aCx]) : L(439))), data.aDE && fF.fJ(new i9([new bV(L(440), function(b8) {
					return az.b0.b1(0) && (aS.bG.bZ(b8), az.jS.qQ({
						qI: 4,
						cQ: data.cQ
					})), !0
				}, 0, 0, 1).button]));
				fF.jG("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", fB.push(fF)
			}(fB), fB.push(function() {
				var fF = new fG;
				if (fF.fH(L(391)), fF.jG(L(392) + data.aCu + "<br>" + L(362) + (data.aCv + 1) + " / " + data.wX + "<br>" + L(363) + rP.aWo(data.aCv)), data.aDE) {
					var a0P = new fK({
							value: l.bj.data[157].value,
							k: -1
						}, 1, void 0, function(b8) {
							l.m.n(157, aPG(b8.target.value))
						}),
						a0N = (a0P.b8.style.marginTop = "0.6em", fF.fJ(a0P), new bV(L(60), function(b8) {
							return b8.textContent === L(60) ? (b8.textContent = L(59), a0P.b8.readOnly = !0, aWp[0].jU(0), aWp[1].jU(0), aWp[0].button.style.color = fg.jV, aWp[1].button.style.color = fg.jV, aPG(l.bj.data[157]
								.value)) : jR(), !0
						})),
						aWp = (fF.fJ(new i9([a0N.button])), [new bV("−", function(b8) {
							return a0P.b8.readOnly && az.b0.b1(0) && (aS.bG.bZ(b8), jR(), az.jS.qR({
								qI: 2,
								cQ: data.cQ,
								value: aN.fL(parseInt(l.bj.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new bV("+", function(b8) {
							return a0P.b8.readOnly && az.b0.b1(0) && (aS.bG.bZ(b8), jR(), az.jS.qR({
								qI: 1,
								cQ: data.cQ,
								value: aN.fL(parseInt(l.bj.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						jH = fF.jI(),
						aPG = function(h9) {
							return h9 = aS.aT.he(h9, 3, 32767), jH.textContent = L(393, [h9 - 1, h9, l.bj.data[105].value]), h9
						};
					fF.fJ(new i9([aWp[0].button, aWp[1].button]));
					for (var j = 0; j < 2; j++) aWp[j].button.style.fontSize = "1.6em";
					var jR = function() {
						a0N.button.textContent = L(60), a0P.b8.readOnly = !1, aWp[0].jU(1), aWp[1].jU(1), aWp[0].button.style.color = fg.fk, aWp[1].button.style.color = fg.fk
					};
					aPG(l.bj.data[157].value)
				}
				return fF
			}()),
			function(fB) {
				var fF, i3;
				data.aDE && !data.aD7 || (0 === bD.id || data.aDE || data.aD7) && ((fF = new fG).fH("Patreon"), !data.aDE && data.aD8 ? fF.fJ(new i9([new bV(L(55), function() {
					az.jS.qQ({
						qI: 7,
						cQ: data.cQ
					}), data.aD8 = 0, c9.ed(7)
				}).button])) : data.aD7 ? (fF.jG(L(441, [(data.aD9 / 100).toFixed(2)]) + "<br>" + L(442, [1 + data.aDA + " / " + data.aDB]) + "<br>" + L(443, [data.aDC ? L(444) : L(445)])), data.aDE || fF.fJ(new i9([new bV(L(446),
					function() {
						az.jS.qQ({
							qI: 8,
							cQ: data.cQ
						}), data.aD7 = 0, l.m.n(160, 0), c9.ed(7)
					}).button]))) : (fF.jG(L(447), "0.75em").style.marginBottom = "0.3em", fF.jG("  • " + L(448), "0.75em").style.whiteSpace = "pre", fF.jG("  • " + L(449), "0.75em").style.whiteSpace = "pre", fF.jG("  • " + L(450),
						"0.75em").style.whiteSpace = "pre", fF.jG(L(451), "0.75em").style.marginTop = "1.0em", fF.jG(L(452), "0.75em").style.marginTop = "1.0em", fF.jG("<a href='" + a3V.xd +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", i3 = "https://www.patreon.com/oauth2/authorize?state=" + data.cQ +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", fF.jG(L(453), "0.75em").style.marginTop = "1.0em", fF.jG("<a href='" + i3 +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aDE || (fF.fJ(new kV), fF.fJ(new i9([new bV(L(214), function() {
						az.jS.qQ({
							qI: 6,
							cQ: data.cQ
						}), data.aD8 = 1, c9.ed(7)
					}).button])), fF.jG(L(454), "0.75em").style.marginTop = "0.75em")), fB.push(fF))
			}(fB),
			function(fB) {
				var fF, aWk, aWl, k, aWm;
				data.aDE || l.jg.get().length && ((fF = new fG).fH(L(376)), k = 0, aWm = function() {
					var aWn = l.jg.get().length;
					aWl[0].jU(k === aWn ? fg.aEu : fg.tb), aWl[1].jU(k === aWn ? fg.aEu : fg.a8v), aWl[2].jU(k === aWn || aWn - 1 <= k || k < 5 ? fg.aEu : fg.a8v)
				}, aWl = [new bV(L(377), function() {
					c9.ed(8, void 0, new rX(25, {
						qI: 0,
						cQ: l.jg.get()[k],
						rN: 0
					}))
				}, fg.aEu, 1), new bV(L(378), function() {
					l.jg.aQO(k), aWk.d[k].remove(), aWk.d.splice(k, 1);
					for (var j = k; j < aWk.d.length; j++) aWk.d[j].name = "" + j;
					l.jg.get().length && (k = Math.max(k - 1, 0), aWk.d[k].textContent = aWk.d[k].textContent.replace("⚪", "🟢")), aWm()
				}, fg.aEu, 1), new bV(L(379), function() {
					for (var j8 = aWk.d.length - 1; k < j8; j8--) l.jg.aQO(j8), aWk.d[j8].remove(), aWk.d.splice(j8, 1);
					aWm()
				}, fg.aEu, 1)], aWm(), (aWk = new a(l.jg.aQL(), function(j) {
					k = j, aWm()
				})).d[0].style.marginTop = "0.5em", fF.fI(aWk), fF.fJ(new i9([aWl[0].button])), fF.fJ(new i9([aWl[1].button])), fF.fJ(new i9([aWl[2].button])), fB.push(fF))
			}(fB), fB
	}())
}

function a3x() {
	var bk, a2Q, a2O, aGd, gap, aWu, aWv, aWw, aWx, aWy, tV, aSs, a0c, wF, aWz, a9S, aX0;

	function aX2() {
		aGd = Math.floor(.2 * (bD.bE.bF() ? .07 : .035) * bI.ht), aGd = kH(bD.bE.bF() ? 3 : 1, aGd);
		var aX4 = bI.ce / (bk.length + gap);
		aGd = aGd < aX4 ? aX4 : aGd, aWz = Math.floor((1 - gap) * aGd), a2Q = 0, aX5()
	}

	function aX5() {
		a2Q = (a2Q = a2Q < -20 ? -20 : a2Q) > (bk.length - 15) * aGd ? (bk.length - 15) * aGd : a2Q, aWv = Math.floor(a2Q / aGd), aWw = (aWw = aWv + Math.floor(bI.ce / aGd)) > bk.length - 1 ? bk.length - 1 : aWw, aWv = (aWv = aWw < aWv ? aWw : aWv) <
			0 ? 0 : aWv;
		var bl = aWw;
		aWu = a2O / bk[bl];
		for (var j = aWw - 1; aWv <= j; j--) bk[j] > bk[bl] && (bl = j, aWu = a2O / Math.pow(bk[j], wF))
	}

	function aX7(fm) {
		fm = Math.floor((a2Q + bI.ce - fm - gap * aGd) / aGd);
		return (fm = fm < -1 ? -1 : -1 === fm ? 0 : fm > bk.length - 1 ? -1 : fm) !== aWx && (aWx = fm, -1 === a9S && 0 === aWx && qz.r0 && (a9S = setInterval(aX8, 100)), 1)
	}

	function aX9(j) {
		var aXB = Math.floor(aWu * Math.pow(bk[j], wF));
		fW.fillRect(a2Q + bI.ce - (j + 1) * aGd, bI.cf - aXB, aWz, aXB)
	}

	function aX8() {
		var am;
		0 !== (aWx = 8 === cL.qs() ? -1 : aWx) ? (aX0 = (new Date).getTime(), clearInterval(a9S), a9S = -1) : (am = bk[1] / 864e3, -1 !== aX0 && (am += ((new Date).getTime() - aX0) * bk[1] / 864e5, aX0 = -1), 0 < am && (bk[0] += Math.floor(am), eK
			.eN = !0))
	}
	this.r0 = !1, this.f = function() {
		aX0 = a9S = -1, aWx = -(wF = 1), this.a50 = !1, a0c = 0, aSs = new Date, a2Q = 0, gap = .3, bk = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a2O = Math.floor(.15 * bI.cf), aWy = (aWy = Math.floor((bD.bE.bF() ? .018 : .0137) * bI.ht)) < 2 ? 2 : aWy, tV = aS.bG.bQ(1, aWy), aX2()
	}, this.aX3 = function(aSU) {
		var j;
		for (this.r0 = !0, j = 0; j < aSU.length; j++) bk.unshift(aSU[j]);
		aX2(), eK.eN = !0
	}, this.a53 = function() {
		aX5()
	}, this.mx = function(fm, fn) {
		fn > bI.cf - .6 * a2O ? this.a50 ? fm !== a0c && (a2Q += fm - a0c, a0c = fm, aX5(), aX7(fm), this.a50 = -1 !== aWx, eK.eN = !0) : aX7(fm) && (eK.eN = !0) : this.aAJ()
	}, this.aAJ = function() {
		-1 !== aWx && (this.a50 = !1, aWx = -1, eK.eN = !0)
	}, this.a51 = function(fm, deltaY) {
		-1 !== aWx && (a2Q += Math.floor(deltaY), aX5(), aX7(fm), eK.eN = !0)
	}, this.tj = function(fm, fn) {
		this.mx(fm, fn), -1 !== aWx && (a0c = fm, this.a50 = !0)
	}, this.vs = function() {
		-1 !== aWx && (this.a50 = !1)
	}, this.fc = function() {
		fW.fillStyle = fg.wG;
		for (var aXC, month, aX, fq, aXF, aXG, jy, aXH, aXI, j = aWw; aWv <= j; j--) aX9(j);
		this.r0 && 0 === aWv && (fW.fillStyle = fg.aBg, aX9(0)), -1 !== aWx && (fW.fillStyle = fg.aP4, aX9(aWx)), -1 !== aWx && (fW.font = tV, aS.bG.textBaseline(fW, 2), (aX = new Date).setTime(aSs.getTime() - 1e3 * aWx * 60 * 60 * 24), month =
			"month", aXC = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(aX), aXC = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(aX)), aXC = aXC + ", " + aX.getUTCDate() + " " + month + " " + aX.getFullYear(), month = 1 === bk[aWx] ? L(455) : L(456), month = aS.fO.gG(bk[aWx]) + " " + month, aX = Math.floor(fW.measureText(aXC).width), fq = Math
			.floor(fW.measureText(month).width), aXF = Math.floor(.5 * (aX + aWy)), aXG = (aXG = a2Q + bI.ce - (aWx + 1) * aGd) < aXF ? aXF : aXG > bI.ce - aXF ? bI.ce - aXF : aXG, jy = bI.cf - Math.floor(aWu * Math.pow(bk[aWx], wF)), aXH =
			Math.floor(1.1 * aWy), aXI = jy > bI.cf - aXH ? bI.cf - aXH : jy, fW.fillStyle = fg.fh, fW.fillRect(bI.ce - fq - aWy, aXI - aXH, fq + aWy, aXH), fW.fillRect(aXG - aXF, bI.cf - aXH, aX + aWy, aXH), fW.fillStyle = fg.fk, aS.bG
			.textAlign(fW, 2), fW.fillText(month, Math.floor(bI.ce - .5 * aWy), aXI), aS.bG.textAlign(fW, 1), fW.fillText(aXC, aXG, bI.cf), fW.strokeStyle = fg.aPK, fW.lineWidth = 1, fW.beginPath(), fW.moveTo(0, jy), fW.lineTo(bI.ce, jy), fW
			.closePath(), fW.stroke())
	}
}

function a4I() {
	var aXJ, bk;
	this.f = function() {
		for (var j = (bk = new Uint16Array(101)).length - 1; 0 <= j; j--) bk[j] = aN.aO(32768 * j, 100);
		this.dW(0)
	}, this.value = function(am) {
		return bk[am]
	}, this.aFM = function() {
		return aN.aO(aXJ - 1, 2)
	}, this.dW = function(ci) {
		aXJ = 2 * ci % 32768 + 1
	}, this.random = function() {
		return aXJ = 167 * aXJ % 32768
	}, this.rl = function(uI) {
		return aN.aO(uI * this.random(), 32768)
	}, this.aI3 = function(am) {
		return 0 !== am && this.random() < this.value(am)
	}, this.a0E = function(bc, bd) {
		return bc + this.rl(bd - bc)
	}
}

function a4B() {
	var aXK, aXL, aXM;
	this.f = function() {
		aXK =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aXL =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aXM = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var jj = ["K ", " Y", "E ", " Z", " z", " s", "S "], jk = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], j = aXK.length - 1; 0 <= j; j--)
			for (var bc = jj.length - 1; 0 <= bc; bc--) aXK[j] = aXK[j].replace(jj[bc], jk[bc]);
		if (__fx.settings.realisticNames) aXK = realisticNames;
	}, this.da = function() {
		var h = aP.ct,
			ll = ad.ll,
			uA = ad.uA,
			playerNamesData = aP.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < h)
			for (var j = 0; j < h; j++) ll[j] = uA[j] = "Player " + dV.rl(1e3);
		else
			for (j = 0; j < h; j++) ll[j] = uA[j] = playerNamesData[j]
	}, this.cM = function() {
		if (9 === aP.dA) {
			for (var rp = dV.random(), aXS = aXM, aXT = aXL, hH = dr.hH, h = aXS.length, bl = aP.data.teamPlayerCount[7], ll = ad.ll, uA = ad.uA, j = bl - 1; j >= aP.ct; j--) ll[j] = uA[j] = aXS[(j + rp) % h];
			for (h = aXT.length - 1, j = bl; j < aP.aj; j++) ll[j] = uA[j] = aXT[hH[j] ? h : j % h]
		} else(2 === aP.data.playerNamesType ? function() {
			for (var h = aP.aj, ll = ad.ll, uA = ad.uA, playerNamesData = aP.data.playerNamesData, j = aP.ct; j < h; j++) ll[j] = uA[j] = playerNamesData[j]
		} : 1 === aP.data.playerNamesType ? function() {
			for (var ll = ad.ll, uA = ad.uA, j = aP.ct; j < aP.aj; j++) ll[j] = uA[j] = "Bot " + dV.rl(1e3)
		} : function() {
			for (var aXU = aXK, h = aXU.length, rp = dV.random(), ll = ad.ll, uA = ad.uA, j = aP.ct; j < aP.aj; j++) ll[j] = uA[j] = aXU[(j + rp) % h]
		})()
	}
}

function a3v() {
	var ce, fm, aXV, canvas, ff, td, hE, xO, tV, aBW, aXW = 11 / 12;

	function aXX() {
		var aWz = Math.floor(hE * (ce - 2 * aXV)),
			aXZ = 1 + Math.floor(.0625 * e4.cf),
			aXa = 1 + Math.floor(.3 * e4.cf),
			kN = Math.floor(.55 * e4.cf);
		ff.clearRect(0, 0, ce, e4.cf), ff.fillStyle = fg.a3J, ff.fillRect(0, 0, aXV, e4.cf), ff.fillRect(aXV + aWz, 0, ce - aXV - aWz, e4.cf), ff.fillStyle = hE < 1 / 3 ? "rgba(" + Math.floor(3 * hE * 130) + ",130,0,0.85)" : hE < 2 / 3 ?
			"rgba(130," + (130 - Math.floor(3 * (hE - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hE - 2 / 3) * 130) + ",0.85)", ff.fillRect(aXV, 0, aWz, e4.cf), ff.fillStyle = fg.fk, ff.fillRect(0, 0, ce, 1), ff.fillRect(0, e4.cf -
				1, ce, 1), ff.fillRect(0, 0, 1, e4.cf), ff.fillRect(aXV, 0, 1, e4.cf), ff.fillRect(aXV + aWz, 0, 1, e4.cf), ff.fillRect(ce - aXV, 0, 1, e4.cf), ff.fillRect(ce - 1, 0, 1, e4.cf), ff.fillRect(Math.floor(.25 * e4.cf) + aXa, Math.floor((
				e4.cf - aXZ) / 2), e4.cf - 2 * aXa, aXZ), ff.fillRect(Math.floor(ce - 1.25 * e4.cf) + aXa, Math.floor((e4.cf - aXZ) / 2), e4.cf - 2 * aXa - aXa % 2, aXZ), ff.fillRect(Math.floor(ce - 1.25 * e4.cf) + Math.floor((e4.cf - aXZ) / 2), aXa,
				aXZ, e4.cf - 2 * aXa - aXa % 2), xO = aS.aT.hP(aP.cs, e4.a0s()), ff.fillText(aS.fO.gG(xO) + " (" + aS.fO.ug(100 * hE, +(hE < .1)) + ")", Math.floor(.5 * ce), kN)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hE = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => e4.aAQ(arg1);

	function aXe(my) {
		return !(1 < my && 1 === hE || (1 < my && my * hE - hE < 1 / 1024 ? my = (hE + 1 / 1024) / hE : my < 1 && hE - my * hE < 1 / 1024 && (my = (hE - 1 / 1024) / hE), hE = aN.fL(hE * my, 1 / 1024, 1), aXX(), 0))
	}

	function aXf(mz) {
		return hE !== (hE = aN.fL((mz - fm - aXV) / (ce - 2 * aXV), 1 / 1024, 1)) && (aXX(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aXX(), eK.eN = !0
	}, this.fn = 0, this.a0g = !1, this.f = function() {
		td = !aP.d5 && !aP.d1, aBW = !1, hE = .5, xO = 0, this.a0g = !1, this.resize()
	}, this.resize = function() {
		bD.bE.bF() && bI.ce < .8 * bI.cf ? (this.cf = Math.floor(.066 * bI.ht), ce = bI.ce - 4 * hn.gap - this.cf) : (ce = Math.floor((bD.bE.bF() ? .65 : .389) * bI.ht), ce += 12 - ce % 12, this.cf = Math.floor(ce / 12)), aXV = Math.floor(3 *
			this.cf / 2), tV = aS.bG.bQ(1, Math.floor(.5 * this.cf)), (canvas = document.createElement("canvas")).width = ce, __fx.mobileKeybinds.setSize(ce, this.cf, fW), canvas.height = this.cf, (ff = canvas.getContext("2d", {
			alpha: !0
		})).font = tV, aS.bG.textBaseline(ff, 1), aS.bG.textAlign(ff, 1), this.a70(), aXX()
	}, this.a70 = function() {
		fm = bD.bE.bF() && bI.ce < .8 * bI.cf ? this.cf + 3 * hn.gap : Math.floor((bI.ce - ce) / 2), this.fn = bI.cf - this.cf - th.ti() * hn.gap
	}, this.eR = function() {
		aBW && (aBW = !1, aXX())
	}, this.td = function() {
		return !(!td || e9.ef && fm < Math.floor(hn.gap + 5.5 * this.cf))
	}, this.tg = function(aMR) {
		return !!this.td() && fm + ce > bI.ce - aMR - hn.gap
	}, this.zV = function() {
		td = !aP.d1
	}, this.aBi = function() {
		td = !1
	}, this.a0s = function() {
		return aN.fL(Math.floor(1024 * hE + .5) - 1, 0, 1023)
	}, this.aAN = function(mz, n0) {
		return this.td() && fm < mz && mz < fm + ce && n0 > this.fn
	}, this.tj = function(mz, n0) {
		if (!this.td()) return !1;
		if (!(__fx.settings.keybindButtons && n0 > this.fn - Math.floor(hn.gap / 4) - this.cf && n0 < this.fn - Math.floor(hn.gap / 4) && __fx.mobileKeybinds.click(mz - fm))) {
			if (!e4.aAN(mz, n0)) return !1;
			e3.a6z = !1, ! function(oa, mz, n0) {
				if (function(mz, n0) {
						return fm < mz && mz < fm + aXV && n0 > e4.fn
					}(mz, n0)) return aXe(aXW);
				if (function(mz, n0) {
						return fm + ce - aXV < mz && mz < fm + ce && n0 > e4.fn
					}(mz, n0)) return aXe(1 / aXW);
				return oa.a0g = !0, aXf(mz)
			}(this, mz, n0) || (eK.eN = !0)
		}
		return !0
	}, this.aAQ = function(h3) {
		0 !== aP.d2 && this.td() && aXe(h3) && (eK.eN = !0)
	}, this.a51 = function(deltaY) {
		var h3;
		return !(0 === deltaY || !this.td()) && aXe(h3 = 0 < deltaY ? (h3 = 400 / (400 + deltaY)) < aXW ? aXW : h3 : 1 / aXW < (h3 = (400 - deltaY) / 400) ? 1 / aXW : h3)
	}, this.mx = function(mz) {
		return !!this.a0g && aXf(mz)
	}, this.aAK = function() {
		this.a0g = !1
	}, this.iL = function() {
		this.td() && xO !== aS.aT.hP(aP.cs, this.a0s()) && (aBW = !0)
	}, this.fc = function() {
		this.td() && (fW.drawImage(canvas, fm, this.fn), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(fW, fm, this.fn)
	}
}

function rS(aNs, data) {
	var h = data.rG.length,
		aXg = document.createElement("div"),
		aXh = document.createElement("div"),
		aGo = document.createElement("div"),
		aXi = new Array(h),
		fB = new Array(h),
		aXj = new Array(data.i0.length),
		aXk = aS.color.b7(70, 70, 0, .35);

	function a3I() {
		this.style.backgroundColor = aS.color.a3I(aXk, 160)
	}

	function aXo() {
		this.style.backgroundColor = aXk
	}

	function mW() {
		var bc;
		for (aNs.style.font = aS.bG.bQ(0, aS.bG.hw(.026, .5, .03)), j = 1; j < aXj.length; j++) aS.bG.hm(aXj[j], 4);
		if (aS.bG.hm(aXg, 2), h) {
			for (var ov, fp = aXg.offsetWidth, fq = aGo.offsetWidth, j = 0; j < aXj.length; j++) ov = .01 * data.rM[j] * fq, aXj[j].style.width = (100 * ov / fp).toFixed(2) + "%";
			var bl = data.rG[0].length;
			for (j = 0; j < h; j++)
				for (aS.bG.hm(aXi[j], 2), bc = 1; bc < bl; bc++) aS.bG.hm(fB[j][bc], 4);
			aXh.aXl && (aXh.scrollTop = aXh.aXl)
		}
	}
	this.resize = function() {
			mW(), mW()
		}, aNs.style.display = "flex", aNs.style.flexDirection = "column", aXh.style.overflowX = "hidden", aXh.style.overflowY = "auto", aXh.addEventListener("scroll", function() {
			this.aXl = this.scrollTop
		}),
		function() {
			var ao, j, rG = data.rG,
				bl = h ? rG[0].length : 0;
			for (j = 0; j < h; j++) {
				aXi[j] = document.createElement("div"), aXi[j].style.backgroundColor = function(j) {
					return j % 2 == 1 ? aS.color.b7(130, 130, 130, .35) : fg.l2
				}(j), aXi[j].style.width = "100%", aXi[j].style.display = "flex", fB[j] = new Array(bl);
				for (var bc = 0; bc < bl; bc++) fB[j][bc] = ao = document.createElement("div"), ao.style.display = "flex", ao.style.justifyContent = "center", ao.style.wordBreak = "break-all", ao.style.padding = "0.4em 0em", ao.style.width = data.rM[
					bc] + "%", ao.innerHTML = rG[j][bc].h9, 1 === rG[j][bc].aX && (ao.name = "" + j, ao.style.color = fg.jV, ao.style.backgroundColor = aXk, ao.addEventListener("mouseover", a3I), ao.addEventListener("mouseout", aXo), function(ao,
					cQ, rN) {
					2147483647 !== rN && ao.addEventListener("click", function() {
						pJ.cM(30), pJ.q9(30, cQ), qb.f(pJ.pD), this.style.backgroundColor = aXk, c9.ed(8, c9.cA, new rX(25, {
							qI: 0,
							cQ: gE.gF.pW(gE.gF.pX(5)),
							rN: rN
						}))
					})
				}(ao, rG[j][bc].cQ, rG[j][bc].rN)), aXi[j].appendChild(ao)
			}
			for (aXg.style.display = "flex", aXg.style.backgroundColor = aS.color.b7(0, 120, 0, .35), j = 0; j < aXj.length; j++) aXj[j] = ao = document.createElement("div"), ao.style.display = "flex", ao.style.justifyContent = "center", ao.style
				.wordBreak = "break-all", ao.style.padding = "0.4em 0em", ao.style.width = data.rM[j] + "%", ao.innerHTML = data.i0[j], aXg.appendChild(ao)
		}();
	for (var j = 0; j < h; j++) aGo.appendChild(aXi[j]);
	aXh.appendChild(aGo), aNs.appendChild(aXg), aNs.appendChild(aXh)
}

function aBE() {
	var ew, ex, aXq, fB;

	function f1() {
		a3U.pE(), c9.f6()[19] = null, c9.f7()
	}

	function aXx() {
		aY0(), aXy()
	}

	function aY0() {
		aXq.iB.lastChild && c9.removeChild(aXq.iB, aXq.iB.lastChild)
	}

	function aXy() {
		var aY1 = a2.a30(aP.data);
		aP.data.canvas = a2.a2t(aY1, aP.data.mapSeed).fY, aXz()
	}

	function aXz() {
		var nb = aP.data.canvas;
		nb.style.width = "100%", aXq.iB.appendChild(nb)
	}
	this.aK2 = function(nb) {
		aP.data.canvas && aY0(), aP.data.canvas = nb, aXz()
	}, this.show = function() {
		ew.show(), this.resize()
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), ex.resize()
	}, this.fR = function(bt) {
		2 === bt && ew.fS[0].fT()
	}, ew = new f0(L(269), [new bV("⬅️ " + L(43), f1)]), 2 === aP.data.mapType && a3U.f(), ex = new f2(ew.f3, (function(fB) {
		var fF = new fG;
		fF.fH(L(44)), fF.fI(new a({
			i: [L(457), L(458), L(459)],
			value: aP.data.mapType
		}, function(k) {
			2 === (aP.data.mapType = k) ? (a3U.f(), aP.data.canvas = null) : (aP.data.passableWater = aP.data.passableMountains = 1, a3U.pE()), c9.ed(20)
		})), 2 <= aP.data.mapType && (fF.fJ(new kV), fF.fJ(new kW({
			value: aP.data.passableWater
		}, L(460), function(value) {
			aP.data.passableWater = value
		})), fF.fJ(new kW({
			value: aP.data.passableMountains
		}, L(461), function(value) {
			aP.data.passableMountains = value
		})));
		fB.push(fF)
	}(fB = []), function(fB) {
		if (0 === aP.data.mapType) {
			for (var fF = new fG, i = (fF.fH(L(269)), []), j = 0; j < a2.uc.cT.length; j++) i.push(a2.uc.cS[a2.uc.cT[j]].name);
			fF.fI(new a({
				i: i,
				value: aP.data.mapProceduralIndex
			}, function(k) {
				aP.data.mapProceduralIndex = k, aXx()
			})), fB.push(fF)
		}
	}(fB), function(fB) {
		if (1 === aP.data.mapType) {
			for (var fF = new fG, i = (fF.fH(L(269)), []), j = 0; j < a2.uc.cU.length; j++) i.push(a2.uc.cS[a2.uc.cU[j]].name);
			fF.fI(new a({
				i: i,
				value: aP.data.mapRealisticIndex
			}, function(k) {
				aP.data.mapRealisticIndex = k, aXx()
			})), fB.push(fF)
		}
	}(fB), function(fB) {
		var fF;
		2 === aP.data.mapType && ((fF = new fG).fH(L(462)), fF.fJ(new fK(l.bj.data[162], 1)), fF.fH(L(463), "0.8em"), fF.fJ(new i9([new bV(L(464), function() {
			return a3U.aJy(), !0
		}).button])), fB.push(fF))
	}(fB), function(fB) {
		var fF, a0P;
		2 === aP.data.mapType && ((fF = new fG).fH(L(465)), a0P = new fK({
			k: -1,
			value: aP.data.mapName
		}, 0, 0, function(b8) {
			aP.data.mapName = b8.target.value = b8.target.value.slice(0, 20)
		}), fF.fJ(a0P), fB.push(fF))
	}(fB), function(fB) {
		var fF, a0P, a0N;
		0 === aP.data.mapType && ((fF = new fG).fH("Seed"), a0P = new fK({
			k: -1,
			value: aP.data.mapSeed
		}, 1, 0, function(b8) {
			b8 = Math.abs(Math.floor(b8.target.value)) % 16384;
			aP.data.mapSeed !== b8 && (aP.data.mapSeed = b8, aXx())
		}), a0N = new bV(L(62), function(b8) {
			var ci = Math.floor(16384 * Math.random());
			if (aP.data.mapSeed !== ci) return a0P.b8.value = aP.data.mapSeed = ci, aXx(), !0
		}), fF.fJ(a0P), fF.fJ(new i9([a0N.button])), fB.push(fF))
	}(fB), function(fB) {
		(aXq = new fG).fH(L(54)), 2 !== aP.data.mapType ? aXy() : aP.data.canvas && aXz();
		fB.push(aXq)
	}(fB), fB))
}

function fK(b, type, aY2, aY3) {
	var b8;
	this.b8 = document.createElement("input"), (b8 = this.b8).type = type ? "number" : "text", b8.id = "input" + c9.b0.aIU++, b8.value = b.value, b8.style.width = "100%", b8.style.userSelect = "none", b8.style.outline = "none", b8.style.resize =
		"none", b8.style.border = "inherit", b8.style.font = "inherit", b8.style.color = fg.fk, b8.style.backgroundColor = fg.a7G, b8.style.fontSize = "1em", b8.style.padding = "0.1em 0.2em", b8.addEventListener("focus", function() {
			bI.aAP++
		}), b8.addEventListener("blur", function() {
			bI.aAP--, -1 !== b.k && l.m.n(b.k, b8.value)
		}), b8.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== b.k && l.m.n(b.k, b8.value), aY2 ? aY2() : b8.blur())
		}), aY3 && b8.addEventListener("input", function(g3) {
			aY3(g3)
		})
}

function a3t() {
	var a7e, aY4, aGR, a5k, aGK, aY5 = 0,
		aY6 = 0;

	function aY8(j) {
		var aY9 = !0,
			nk = fg.fk,
			ce = (1 === a7e[j].id ? a7e[j].ff.fillStyle = fg.aPj : a7e[j].gt === aP.aj ? a7e[j].ff.fillStyle = fg.aPO : (ag.z7(a7e[j].gt), a7e[j].ff.fillStyle = aS.color.b7(dN.gT[0], dN.gT[1], dN.gT[2], .87), 400 < aS.f8.a34(dN.gT, 0, 2) && (aY9 = !
				1, nk = fg.lX)), a7e[j].canvas.width),
			fp = (a7e[j].ff.clearRect(0, 0, ce, a5k), a7e[j].ff.fillRect(0, 0, ce, a5k), a7e[j].ff.fillStyle = nk, ! function(ff, ce, a5k) {
				ff.fillRect(0, 0, ce, 1), ff.fillRect(0, a5k - 1, ce, 1), ff.fillRect(0, 0, 1, a5k), ff.fillRect(ce - 1, 0, 1, a5k)
			}(a7e[j].ff, ce, a5k), aY4 + 2 * a5k < ce && (a7e[j].ff.fillRect(ce - aY4 - a5k, 0, 1, a5k), a7e[j].ff.fillText(ad.ll[a7e[j].gt], Math.floor((ce - aY4) / 2), Math.floor(.57 * a5k))), 0 !== a7e[j].id ? 0 : a5k);
		a7e[j].ff.fillText(aS.fO.gG(a7e[j].hH), Math.floor(ce - aY4 / 2 - fp), Math.floor(.57 * a5k)),
			function(j, ce, fp, aY9) {
				a7e[j].ff.fillStyle = aY9 ? fg.aP4 : fg.aNj;
				aY9 = Math.floor(aY4 * a7e[j].hH / a7e[j].aYE);
				a7e[j].ff.fillRect(Math.floor(ce - aY4 - fp), a5k - aGK, aY9, aGK)
			}(j, ce, fp, aY9), 0 === a7e[j].id ? (aYC(j, ce, aY9, nk), function(j, ce, aY9) {
				a7e[j].ff.strokeStyle = aY9 ? fg.aBv : fg.aPW, a7e[j].ff.fillRect(a5k, 0, 1, a5k);
				aY9 = ce - a5k;
				a7e[j].ff.beginPath(), a7e[j].ff.moveTo(Math.floor(.3 * a5k + aY9), Math.floor(a5k / 2)), a7e[j].ff.lineTo(Math.floor(a5k - .3 * a5k + 0 + aY9), Math.floor(a5k / 2)), a7e[j].ff.stroke(), a7e[j].ff.beginPath(), a7e[j].ff.moveTo(
					Math.floor(a5k / 2 + aY9), Math.floor(.3 * a5k)), a7e[j].ff.lineTo(Math.floor(a5k / 2 + aY9), Math.floor(a5k - .3 * a5k + 0)), a7e[j].ff.stroke()
			}(j, ce, aY9)) : aYC(j, 2 * a5k, aY9, nk)
	}

	function aYC(j, ce, aY9, nk) {
		a7e[j].ff.strokeStyle = a7e[j].aYF ? fg.a7H : aY9 ? fg.wC : fg.wB, a7e[j].ff.fillStyle = nk, a7e[j].ff.fillRect(ce - a5k, 0, 1, a5k), a7e[j].ff.lineWidth = Math.max(Math.floor(a5k / 12), 3), a7e[j].ff.lineCap = "round";
		aY9 = .35;
		ce = a5k + 1, a7e[j].ff.beginPath(), a7e[j].ff.moveTo(Math.floor(ce - aY9 * a5k + 0), Math.floor(aY9 * a5k)), a7e[j].ff.lineTo(Math.floor(ce - a5k + aY9 * a5k), Math.floor(a5k - aY9 * a5k + 0)), a7e[j].ff.stroke(), a7e[j].ff.beginPath(), a7e[
			j].ff.moveTo(Math.floor(ce - a5k + aY9 * a5k), Math.floor(aY9 * a5k)), a7e[j].ff.lineTo(Math.floor(ce - aY9 * a5k + 0), Math.floor(a5k - aY9 * a5k + 0)), a7e[j].ff.stroke()
	}

	function aYQ(bk, aG0) {
		for (var hH, j = aG0 - 1; 0 <= j; j--) hH = a8.aG(aP.cs, j), bk[j].hH !== hH && (bk[j].hH = hH, bk[j].aYE = Math.max(hH, bk[j].aYE), bk[j].aBW = !0)
	}

	function aYT(bk, aG1) {
		for (var rV = aP.cs << 3, oB = dm.b0.oB, oE = dm.b0.oE, oJ = dm.b0.oJ, j = aG1 - 1; 0 <= j; j--) {
			var aLS = oJ[rV + j],
				hH = oB[aLS];
			bk[j].hH !== hH ? (bk[j].hH = hH, bk[j].aYE = Math.max(hH, bk[j].aYE), bk[j].aBW = !0) : bk[j].aYF || oE[aLS] % 64 != 5 || (bk[j].aYF = !0, bk[j].aBW = !0)
		}
	}

	function aY7(a7h) {
		a7h.canvas = document.createElement("canvas"), a2.a2g.font = aGR;
		var ce = aY4;
		a7h.gt < aP.aj && 0 === a7h.id && (ce += Math.floor(a2.a2g.measureText(ad.ll[a7h.gt] + "000").width)), ce += a5k, 0 === a7h.id && (ce += a5k), a7h.canvas.width = ce, a7h.canvas.height = a5k, a7h.ff = a7h.canvas.getContext("2d", {
			alpha: !0
		}), a7h.ff.font = aGR, aS.bG.textBaseline(a7h.ff, 1), aS.bG.textAlign(a7h.ff, 1)
	}

	function aYL(j) {
		return e7.aP3() ? bI.ce - a7e[j].canvas.width - hn.gap : e7.fm
	}

	function aYM(j) {
		return Math.floor(2 * hn.gap + (e7.aP3() ? e8.cf + hn.gap : 0) + e7.cf + j * (1.3 * a5k))
	}
	this.f = function() {
		aY5 = aY6 = 0, a7e = [], this.resize()
	}, this.resize = function() {
		aGR = eB.tV, a5k = eB.fontSize + 5, a5k = Math.floor(1.25 * a5k), bD.bE.bF() && (a5k = Math.floor(1.25 * a5k)), aGK = Math.floor(.15 * a5k), a2.a2g.font = aGR, aY4 = Math.floor(a2.a2g.measureText("02 000 000 0000").width);
		for (var j = a7e.length - 1; 0 <= j; j--) aY7(a7e[j]), aY8(j)
	}, this.eR = function() {
		for (var j = a7e.length - 1; 0 <= j; j--) a7e[j].aBW && (a7e[j].aBW = !1, aY8(j))
	}, this.tj = function(mz, n0) {
		if (2 !== aP.d2 && 0 !== ad.eQ[aP.cs] && !aP.d1 && !aS.aT.gy(aP.cs))
			for (var aYG, aYH, aYI, aYJ = bD.bE.bF() ? a5k : 0, aYK = bD.bE.bF() ? Math.floor(.15 * a5k) : 0, j = a7e.length - 1; 0 <= j; j--)
				if (aYG = aYL(j), aYH = aYM(j), aYI = a7e[j].canvas.width, aYH - aYK <= n0 && n0 <= aYH + a5k + aYK) {
					if (aYG - aYJ <= mz && mz <= aYG + a5k + aYJ) return a7e[j].aYF || (a7e[j].aBW = !0, a7e[j].aYF = !0, 0 === a7e[j].id ? db.a0n.a5Y(a7e[j].gt) : db.a0n.a5X(a7e[j].gt)), !0;
					if (0 === a7e[j].id && aYG + aYI - a5k - aYJ <= mz && mz <= aYG + aYI + aYJ) return dp.aEq(3), db.a0n.a0v(e4.a0s(), a7e[j].gt), !0
				} return !1
	}, this.iL = function() {
		var vT, vW, bk, aG0;
		0 === ad.eQ[aP.cs] || aS.aT.gy(aP.cs) && !aP.d1 || (vT = a7e.slice(0, aY5), vW = a7e.slice(aY5, aY5 + aY6), bk = vT, aG0 = a8.a9(aP.cs), function(bk, aG0) {
			if (aY5 !== aG0) return 1;
			for (var j = aG0 - 1; 0 <= j; j--)
				if (bk[j].gt !== a8.aF(aP.cs, j)) return 1;
			return
		}(bk, aG0) ? aYQ(bk = function(bk, aG0) {
			var j, gt, bd, hH, tU = [];
			loop: for (j = 0; j < aG0; j++) {
				for (gt = a8.aF(aP.cs, j), bd = 0; bd < bk.length; bd++)
					if (bk[bd].gt === gt) {
						tU.push(bk.splice(bd, 1)[0]);
						continue loop
					} hH = a8.aG(aP.cs, j), aY7(hH = {
					gt: gt,
					hH: hH,
					aYE: hH,
					id: 0,
					aBW: !0,
					aYF: !1,
					canvas: null,
					ff: null
				}), tU.push(hH)
			}
			return tU
		}(bk, aG0), aG0) : aYQ(bk, aG0), vT = bk, vW = function(bk) {
			var aG1 = dm.b0.oI[aP.cs];
			return function(bk, aG1) {
				if (aY6 !== aG1) return 1;
				for (var rV = aP.cs << 3, oD = dm.b0.oD, oJ = dm.b0.oJ, j = aG1 - 1; 0 <= j; j--) {
					var aLS = oJ[rV + j];
					if (bk[j].gt !== oD[aLS]) return 1
				}
				return
			}(bk, aG1) ? aYT(bk = function(bk, aG1) {
				var j, gt, bd, tU = [],
					rV = aP.cs << 3,
					oD = dm.b0.oD,
					oB = dm.b0.oB,
					oJ = dm.b0.oJ;
				loop: for (j = 0; j < aG1; j++) {
					var aLS = oJ[rV + j];
					for (gt = oD[aLS], bd = 0; bd < bk.length; bd++)
						if (bk[bd].gt === gt) {
							tU.push(bk.splice(bd, 1)[0]);
							continue loop
						} aLS = oB[aLS], aY7(aLS = {
						gt: gt,
						hH: aLS,
						aYE: aLS,
						id: 1,
						aBW: !0,
						aYF: !1,
						canvas: null,
						ff: null
					}), tU.push(aLS)
				}
				return tU
			}(bk, aG1), aG1) : aYT(bk, aG1), bk
		}(vW), aY5 = vT.length, aY6 = vW.length, a7e = vT.concat(vW))
	}, this.fc = function() {
		if (0 !== ad.eQ[aP.cs] && (!aS.aT.gy(aP.cs) || aP.d1))
			for (var j = a7e.length - 1; 0 <= j; j--) fW.drawImage(a7e[j].canvas, aYL(j), aYM(j))
	}
}

function aOX() {
	this.iJ = eK.iJ, this.k = 0, this.iK = 0, this.iH = 0, this.aYV = null, this.aYW = 7, this.lP = 0, this.f = function() {
		this.iH = 0, this.aYV = [], this.k = 0, this.iK = 0
	}, this.aYX = function(pD) {
		if (aP.d5) this.iZ(pD);
		else if (this.aYV.push(pD), 2 === aP.d2) {
			for (var j = 0; j < this.aYV.length; j++) db.dc.iL(this.aYV[j]);
			this.aYV = []
		}
	}, this.iZ = function(pD) {
		2 !== aP.d2 && (db.dc.iL(pD), dw.iL(), e8.iZ(this.iH), this.iH === aP.dF ? (aP.dC.iL(), this.iH = 0, this.k = 0, this.iK = 0, this.iJ = eK.iJ) : (this.iH++, eG.ia(), eG.eR(!0), dj.iU()))
	}, this.iL = function() {
		bI.iL(), aP.d5 ? (eK.eN = e8.iZ(-1) || eK.eN, ib()) : (0 !== this.k || eK.iJ >= this.iJ && (this.iJ += eK.iR * Math.floor(1 + (eK.iJ - this.iJ) / eK.iR), 2 === aP.d2 ? iS() : this.aYY(), this.k++, 27 < eK.iJ - this.lP)) && this.aYZ(),
		iP(), eK.eN && (eK.eN = !1, fU()), this.lP = eK.iJ
	}, this.aYZ = function() {
		eK.eN = !0, ic(), this.k = 0
	}, this.aYY = function() {
		var aL0, j;
		if (this.iK !== 7 * this.iH) iY(), dj.iU();
		else {
			aL0 = !1;
			loop: for (; this.aYa() && (aL0 = !0, iY(), 2 !== aP.d2) && 0 < this.aYV.length;)
				for (j = this.aYW - 2; 0 <= j; j--)
					if (iY(), 2 === aP.d2) break loop;
			aL0 ? dj.iU() : (iS(), dj.zZ())
		}
	}, this.aYa = function() {
		return 0 < this.aYV.length && (this.iH++, db.dc.iL(this.aYV[0]), this.aYV.shift(), !0)
	}
}

function aSQ() {
	var aT1 = [L(466), L(467), L(468), L(469), L(470), L(471), L(472)],
		aYb = [100, 60, 30, 15, 6, 1],
		aYc = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		aYd = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		aYe = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.aAk = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.aAq = function(id, rp, k) {
		rp = this.aYf(rp);
		return +(aYc[rp][id] > k)
	}, this.aYf = function(rp) {
		for (var j = 0; j < aYb.length; j++)
			if (aYb[j] <= rp) return j;
		return aYb.length
	}, this.aWo = function(rp) {
		return aT1[this.aYf(rp)]
	}, this.aT6 = function(id, aCK) {
		return aYd[id].replace(new RegExp("x", "g"), aCK)
	}, this.aT7 = function(id, aCK) {
		return aYe[id].replace(new RegExp("x", "g"), aCK)
	}, this.rQ = function(id, tN) {
		return this.aAk[5][id]
	}
}

function a4M() {
	var bt, n2 = !1,
		aYg = !1,
		aYh = -1e4,
		aYi = -1,
		aYj = 0;

	function resize(aYn) {
		bt = 0, ml.a8Q() && (aYl(aYn) || n2) && (n2 = !1, hn.resize(), a3Y.a8x.resize(), a3N.f(), a3Z.f(), a3O.resize(), qz.resize(), a3M.resize(), c9.resize(), 1 <= aP.d2 ? (e2.resize(!1), e7.resize(), e8.resize(), e3.resize(), e4.resize(), eB
			.resize(), e9.resize(), e5.resize(), e6.resize(), eC.resize(), eA.resize(), eD.resize(), dz.resize(), eG.resize(), eE.resize(), dx.resize(), e3.a7A()) : (cL.a4z(), cL.a52()), eK.eN = !0)
	}

	function aYk(h9) {
		return h9 && 128 < h9 ? Math.floor(h9) : 128
	}

	function aYl(aYn) {
		var ce, cf, aYp, fp, kN;
		if (!(0 < bI.aAP)) return fp = aYk(document.documentElement.clientWidth), kN = aYk(window.visualViewport && 2 !== bD.id ? window.visualViewport.height : document.documentElement.clientHeight), ce = fp, cf = kN, aYp = 0 !== bD.id || ce < cf ?
			700 : 1200, aYp = Math.min(aYp / ((ce + cf) / 2), 1), aYp = 0 === l.bj.data[1].value ? 2 * aYp / 3 : Math.min(aYp + (l.bj.data[1].value - 1) * (1 - aYp) / 2, 1), bI.hu = (window.devicePixelRatio || 1) * aYp, __fx.hoveringTooltip
			.canvasPixelScale = bI.hu, aYn && !aYg ? (aYg = !0, c9.removeChild(document.body, a9z)) : aYg && (aYg = !1, document.body.appendChild(a9z)), ce = Math.floor(.5 + fp * bI.hu), cf = Math.floor(.5 + kN * bI.hu), ce !== bI.ce || cf !== bI
			.cf ? (bI.ce = ce, bI.cf = cf, bI.min = kI(ce, cf), bI.max = kH(ce, cf), bI.ht = aN.aO(ce + cf, 2), bI.aGy = ce / cf, a9z.width = ce, a9z.height = cf, a9z.style.width = fp + "px", a9z.style.height = kN + "px", aYi = eK.iJ + 1e3, 1) :
			void 0
	}
	this.ce = 0, this.cf = 0, this.min = 0, this.max = 0, this.ht = 0, this.aGy = 1, this.hu = 1, this.aAP = 0, this.dg = function() {
		this.ce = aYk(document.documentElement.clientWidth) + 2, this.cf = aYk(document.documentElement.clientHeight) + 2
	}, this.f = function() {
		bt = 1, a9z = document.getElementById("canvasA"), 2 === bD.id && (a9z.style.webkitUserSelect = "none"), (fW = a9z.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aYl(0)
	}, this.iL = function() {
		50 <= ++bt && resize(0), -1 === aYi || eK.iJ < aYi || (aYi = -1, 2e3 * ++aYj >= eK.iJ + 8e3 ? console.log("error 3748") : bD.bE.setState(15))
	}, this.wP = function(rT) {
		n2 = !0, resize(rT)
	}, this.aAU = function() {
		aYh + 1e3 > eK.iJ || (aYh = eK.iJ, resize(0))
	}
}

function aSk() {
	function aZ6(aZ7) {
		var ao = aP.data,
			aZ7 = (ao.selectedPlayer = qb.pF(aZ7), ao.spawningSeed = qb.pF(14), qb.pF(4)),
			aZ7 = (aZ7 < 7 ? (ao.gameMode = 1, ao.numberTeams = aZ7 + 2) : 9 === aZ7 ? (ao.gameMode = ao.isZombieMode = 1, ao.numberTeams = 2) : (ao.gameMode = 0, ao.battleRoyaleMode = 7 === aZ7 ? 0 : 10 === aZ7 ? 1 : 2), ao.isContest = qb.pF(1), qb
				.pF(6));
		return ao.mapType = a2.cH(aZ7) ? 0 : 1, a2.cJ(ao, aZ7), ao.mapSeed = qb.pF(14), aZ7
	}
	this.aOD = function(qC, pD) {
		qb.f(pD), 0 === qb.size ? az.b0.ql(qC, 3205) : ((0 === qb.pF(1) ? function(qC) {
			var aYt = qb.pF(6);
			0 === aYt ? function(qC) {
					if (0 === qC && 8 !== cL.qs()) {
						c9.b0.aSq();
						for (var aYz = qb.pF(12), aZ0 = qb.pF(6), bk = new Array(aYz), j = 0; j < aYz; j++) bk[j] = qb.pF(aZ0);
						qz.aX3(bk)
					}
				}(qC) : 2 === aYt ? az.aSl.aYv(qC) : 3 === aYt || 4 === aYt ? cD.f() : 5 === aYt ? az.aSn.qa() : 9 === aYt ? az.aSn.qk(qC) : 10 === aYt ? az.aSo.aCr() : 11 === aYt ? az.aSn.qx(qC) : 12 === aYt ? az.aSo.aCt() : 13 ===
				aYt ? az.aSp.aJk() : 14 === aYt ? az.aSp.aJm() : 15 === aYt ? az.aSn.r5() : 16 === aYt ? az.aSl.aYw(qC) : 17 === aYt ? az.aSl.aYx(qC) : 19 === aYt ? az.aSl.aYy(qC) : 20 === aYt && az.aSn.qf(qC)
		} : function(qC) {
			if (8 !== cL.qs() && !cD.aDv()) return;
			if (qC !== az.b0.qY) az.b0.ql(qC, 3244);
			else if (0 === qb.pF(1)) eK.aOU.aYX(qb.pD);
			else {
				var j, qC = qb.pF(2);
				if (0 === qC) {
					var nU, qv = qb.pF(9);
					0 !== ad.eQ[qv] && 0 !== ad.eQ[aP.cs] && (nU = qb.pF(10), eB.uF(qv, aP.cs, nU), eG.mo(qv, 1, nU))
				} else if (1 === qC) ! function() {
					var qv = qb.pF(9);
					0 !== ad.eQ[qv] && 0 !== ad.eQ[aP.cs] && eI.j5(0, [qv], !0) && eB.uV(qv, 1)
				}();
				else if (2 === qC) ! function() {
					var qv = qb.pF(9),
						target = qb.pF(9);
					0 !== ad.eQ[qv] && 0 !== ad.eQ[target] && 0 !== ad.eQ[aP.cs] && eI.j5(1, [qv], !0) && (eG.mo(qv, 3, 96), eG.mo(target, 4, 96), eB.uX(qv, target))
				}();
				else if (dT.aDb && !dT.aDc) {
					var h = 540;
					for (pJ.cM(17287), pJ.q9(1, 0), pJ.q9(6, 10), h = Math.min(db.dc.dd.length, 540), j = 0; j < h; j++) pJ.qS(32, db.dc.dd[j]);
					az.b0.send(az.b0.qY, pJ.pD)
				}
			}
		})(qC), eK.aOY())
	}, this.aZ1 = function(pD) {
		if (qb.f(pD), qb.k = 1, 3 === qb.pF(6)) {
			qb.k += 20;
			var ao = aP.data = new cF,
				pD = aZ6(9),
				cK = ao.humanCount = qb.pF(9) + 1;
			ao.selectableSpawn = 1 === ao.gameMode || cK < 100, ao.colorsData = new Uint32Array(cK), ao.playerNamesData = new Array(cK);
			for (var j = 0; j < cK; j++) qb.k++, ao.colorsData[j] = qb.pF(18), ao.playerNamesData[j] = pS.pT.pU(qb.pF(5));
			cL.x9(), a2.cM(pD, ao.mapSeed), aP.cN()
		} else ! function() {
			qb.k += 20;
			var ao = aP.data = new cF,
				aZ5 = aZ6(1);
			ao.humanCount = 2;
			ao.selectableSpawn = 1, ao.elo = new Uint16Array(2), ao.colorsData = new Uint32Array(2), ao.playerNamesData = new Array(2);
			for (var j = 0; j < 2; j++) qb.k++, ao.colorsData[j] = qb.pF(18), ao.elo[j] = qb.pF(14), ao.playerNamesData[j] = pS.pT.pU(qb.pF(5));
			cL.x9(), a2.cM(aZ5, ao.mapSeed), aP.cN()
		}()
	}, this.aZ4 = function() {
		qb.k = 1;
		var aYt = qb.pF(6),
			aDY = qb.pF(10);
		return az.b0.a5D === aDY ? (az.b0.qY = aDY, !1) : (az.b0.close(az.b0.a5D, 3247), az.b0.qY = aDY, cD.cC = qb.pF(10), cD.a9j = qb.pF(3 === aYt ? 9 : 1), az.b0.aDr(aDY, 5) && az.qv.qw(), !0)
	}
}

function aSj() {
	this.aLo = function(rE, rV, rY) {
		pJ.cM(75), pJ.q9(1, 0), pJ.q9(6, 21), pJ.q9(6, rE), pJ.q9(1, +(rV < 0)), pJ.q9(1, +(rY < 0)), pJ.q9(30, Math.abs(rV)), pJ.q9(30, Math.abs(rY)), az.b0.send(0, pJ.pD)
	}, this.aLp = function(rE, aLq, aLr) {
		pJ.cM(18 + 16 * aLq.length + 30), pJ.q9(1, 0), pJ.q9(6, 22), pJ.q9(6, rE), az.b2.aDf(aLq), pJ.q9(30, aLr), az.b0.send(0, pJ.pD)
	}, this.aLv = function(rE, aLq, aLr) {
		pJ.cM(73), pJ.q9(1, 0), pJ.q9(6, 28), pJ.q9(6, rE), pS.gF.qF(aLq, 5), pJ.q9(30, aLr), az.b0.send(0, pJ.pD)
	}, this.aLs = function(aKW, aLt) {
		for (var h = aLt.length, aJl = 0, j = 0; j < h; j++) aJl += aLt[j].length;
		for (pJ.cM(21 + 3 * h + 16 * aJl), pJ.q9(1, 0), pJ.q9(6, 23), pJ.q9(3, aKW), pJ.q9(4, h), pJ.q9(7, aJl), j = 0; j < h; j++) pJ.q9(3, aLt[j].length), gE.pT.qJ(aLt[j]);
		az.b0.send(0, pJ.pD)
	}, this.aLu = function(aKW, rV, rY) {
		pJ.cM(52), pJ.q9(1, 0), pJ.q9(6, 24), pJ.q9(3, aKW), pJ.q9(1, +(rV < 0)), pJ.q9(1, +(rY < 0)), pJ.q9(20, Math.abs(rV)), pJ.q9(20, Math.abs(rY)), az.b0.send(0, pJ.pD)
	}
}

function a2q() {
	var i = aZC(a2.cI);
	i && aZD(i[0], i[1], i[2], i[3], i[4])
}

function aZC(cI) {
	return 2 === cI ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === cI ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === cI ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === cI ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === cI ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aZD(aZE, aZF, aZG, aZH, aZI) {
	for (var fm, fn, k7, k9, my, aZL, jK = aZE.length - 1, aZJ = a2.a3 + a2.a4, h = (aZJ *= aZJ, aZG.length), aZK = Array(h), j = h - 1; 0 <= j; j--) aZK[j] = aZG[j] * aZG[j];
	var aZM = new Array(h),
		aKp = new Array(h),
		aZN = new Array(h),
		h9 = a2p.aON();
	if (void 0 === aZI)
		for (aZI = new Array(h), j = h - 1; 0 <= j; j--) aZI[j] = 0;
	for (j = 1; j < h; j++) aZM[j] = aZK[j] - aZK[j - 1], aKp[j] = aZH[j] - aZH[j - 1], aZN[j] = aZI[j] - aZI[j - 1];
	for (fm = a2.a3 - 1; 0 <= fm; fm--)
		for (fn = a2.a4 - 1; 0 <= fn; fn--) {
			for (k7 = aZJ, j = jK; 0 <= j; j--) k7 = (k9 = (fm - aZE[j]) * (fm - aZE[j]) + (fn - aZF[j]) * (fn - aZF[j])) < k7 ? k9 : k7;
			for (my = aZH[h - 1], aZL = aZI[h - 1], j = 1; j < h; j++)
				if (k7 < aZK[j]) {
					my = aZH[j - 1] + kF((k7 - aZK[j - 1]) * aKp[j], aZM[j]), aZL = aZI[j - 1] + kF((k7 - aZK[j - 1]) * aZN[j], aZM[j]);
					break
				} aZO(a2.a3 * fn + fm, my, aZL, h9)
		}
}

function aZO(k, my, aZL, h9) {
	my < 500 ? h9[k] = aN.aO(h9[k] * my * 2, 1e3) : 500 < my && (h9[k] += aN.aO(2 * (1e4 - h9[k]) * (my - 500), 1e3)), h9[k] += aN.aO(aZL * (10 * my - h9[k]), 1e3)
}

function a3r() {
	var kS, fm, fn, aZP, aZQ, aZR, iJ, aZS, aZT, aZU, aZV, gap, zoom, aJv, aZW;

	function aZf(mz, n0, nw) {
		ag.ah(nw) || -1 === (mz = dm.g8.aLT(mz, n0)) ? eB.u7(nw) : eB.uD(mz)
	}

	function aZd(aZS) {
		for (var j = aJv.length - 1; 0 <= j; j--)
			if (aJv[j] === aZS) return 1
	}

	function aZb(sC) {
		var j, h;
		if (-1 !== sC)
			for (h = kS.length, j = 0; j < h; j++)
				if (kS[j].td && kS[j].fm + 1 === sC % 4 && kS[j].fn + 1 === sC >> 2) return j;
		return -1
	}

	function aZZ(mz, n0) {
		var gJ = gap / 2;
		return mz < fm - aZP - 3 * gJ || fm + 3 * aZP + 5 * gJ < mz || n0 < fn - aZP - 3 * gJ || fn + 2 * aZP + 3 * gJ < n0 ? -1 : 4 * (n0 < fn - gJ ? 0 : n0 < fn + aZP + gJ ? 1 : 2) + (mz < fm - gJ ? 0 : mz < fm + aZP + gJ ? 1 : mz < fm + 2 * aZP +
			3 * gJ ? 2 : 3)
	}
	this.aNH = function() {
		var j, bd, aZY = [fg.aPU, fg.aPb, fg.aNj, fg.aPm, fg.aPh];
		for (kS = new Array(10), j = 0; j < 10; j++) kS[j] = {
			id: j,
			td: !1,
			sp: 0,
			canvas: [],
			fm: 0,
			fn: 0
		};
		for (kS[0].colors = [0, 1, 2, 3], kS[0].fm = 0, kS[0].fn = 0, kS[1].colors = [1, 4], kS[1].fm = 1, kS[1].fn = 0, kS[2].colors = [0, 1], kS[2].fm = -1, kS[2].fn = 0, kS[3].colors = [0], kS[3].fm = 0, kS[3].fn = 0, kS[4].colors = [0, 2],
			kS[4].fm = 1, kS[4].fn = 1, kS[5].colors = [3], kS[5].fm = 0, kS[5].fn = -1, kS[6].id = 20, kS[6].colors = [0], kS[6].fm = 1, kS[6].fn = -1, kS[7].id = 21, kS[7].colors = [0], kS[7].fm = 0, kS[7].fn = 1, kS[8].id = 16, kS[8]
			.colors = [0], kS[8].fm = 0, kS[8].fn = 0, kS[9].id = 10, kS[9].colors = [4], kS[9].fm = 2, kS[9].fn = 0, j = 0; j < 10; j++)
			for (bd = 0; bd < kS[j].colors.length; bd++) kS[j].canvas.push(function(id, aMh) {
				if (id < 20) return aS.canvas.aBc(ml.get(3), id, aMh);
				var aMh = ml.get(3).height,
					nb = aS.bG.hk(aMh, aMh),
					hl = aS.bG.getContext(nb);
				20 === id ? hl.drawImage(ml.get(18), 0, 0) : 21 === id && mr.nW.tw(mr.ms.sM + mr.ms.sR, hl, 0, 0, aMh);
				return nb
			}(kS[j].id, aZY[kS[j].colors[bd]]))
	}, this.nd = function() {
		return kS
	}, this.f = function() {
		aJv = [], fm = fn = iJ = 0, aZQ = aZR = -1e3, this.resize()
	}, this.resize = function() {
		aZP = Math.floor((bD.bE.bF() ? .075 : .0468) * bI.ht), zoom = aZP / ml.get(3).height, gap = Math.floor(aZP / 3)
	}, this.aAF = function(mz, n0) {
		return !!this.td() && (eK.eN = !0, !!mr.nW.tj(mz, n0, aZT) || (mz = function(mz, n0) {
			aZR = aZQ = -1e3;
			var aZa = aZb(aZZ(mz, n0));
			if (-1 === aZa) return 0;
			if (1 !== kS[aZa].colors[kS[aZa].sp])
				if (5 === aZa) {
					if (! function() {
							var aX = performance.now();
							aZW + 4e3 < aX && (aJv = []);
							aZW = aX
						}(), aZd(aZS)) return 1;
					aJv.push(aZS), 16 < aJv.length && aJv.shift()
				} else if (6 === aZa) {
				for (var j = aJv.length - 1; 0 <= j; j--) 0 === ad.eQ[aJv[j]] && aJv.splice(j, 1);
				0 < aJv.length && (eI.j1(1, aJv, !0) && db.aT.aJu(aJv, aZS), aJv = [])
			} else if (2 === aZa) dY.xl(aZS) && db.a0n.a5S(e4.a0s(), aZS);
			else if (3 === aZa) aP.d5 && db.a0n.a0o(aZU);
			else if (0 === aZa)
				if (0 === kS[0].sp) {
					if (aP.d6 && e8.a7i() < 350) return 1;
					dp.aEq(4), db.a0n.a0v(e4.a0s(), aZS)
				} else eJ.a0w(aZS, e4.a0s());
			else if (1 === aZa) db.a0n.a10(e4.a0s(), aZU);
			else if (9 === aZa) db.a0n.a12(e4.a0s());
			else {
				if (7 === aZa) return dp.aEq(0), mr.nW.show(mz, n0), 2;
				if (4 === aZa) eI.j1(0, [aZS], !0) && db.aT.tm(aZS);
				else {
					if (8 !== aZa) return 0;
					db.a0n.a0r(e4.a0s(), aZV, aZS)
				}
			}
			return 1
		}(mz, n0), this.fQ(), 2 === mz && (mr.nW.td = !0), 0 < mz))
	}, this.kE = function(mz, n0) {
		this.td() || (aZQ = mz, aZR = n0, iJ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = dl.a01(mouseX),
			coordY = dl.a02(mouseY),
			coord = dl.a04(coordX, coordY),
			coord = dl.ww(coord);
		dl.a03(coordX, coordY) && aZf(mouseX, mouseY, coord)
	}, this.click = function(mz, n0, aAM) {
		var zm = dl.a01(mz),
			zn = dl.a02(n0),
			ls = dl.a04(zm, zn),
			nw = dl.ww(ls);
		return !(!dl.a03(zm, zn) || (zm = (bD.bE.bF() ? .025 : .0144) * bI.ht, zn = performance.now(), Math.abs(mz - aZQ) > zm) || Math.abs(n0 - aZR) > zm || iJ + 500 < zn) && (iJ = zn, aAM ? (aZf(mz, n0, nw), !1) : e9.ef || this.td() || !aS.aT
			.gp(aP.cs) || aP.d1 ? (this.fQ(), !1) : (aP.d5 ? 0 <= (aZU = a0l.a0m(ls)) && (kS[3].td = !0) : 2 === aP.d2 ? ag.aq(nw) && (aZS = ag.ar(nw), aS.aT.gy(aZS) || (kS[0].td = !0, kS[0].sp = 1, kS[7].td = !0)) : (dm.a11.xl(aP.cs, ls) &&
				(kS[0].td = !0, kS[0].sp = 1, kS[1].td = !0, kS[1].sp = 0, kS[9].td = !0, kS[9].sp = 0), dm.a0y.a0z(aP.cs, ls) && (kS[0].td = !0, kS[0].sp = 1, kS[1].td = !0, kS[1].sp = 1, aZU = dN.gY[7]), ag.rm(nw) ? (aZV = a0p.iv.a0q(
					nw)) && (zm = dl.ww(aZV), kS[8].td = !0, aZS = ag.at(zm) ? aP.aj : ag.ar(zm)) : (ag.o2(aP.cs, nw) && (aZT = aP.cs, kS[0].td = !0, kS[0].sp = 1, kS[7].td = !0), -1 !== (zn = a0l.a0t(ls)) && (ag.at(zn << 2) ? (aZS = aP
					.aj, aC.a0u(aP.cs) ? (kS[0].td = !0, kS[0].sp = 0) : a8.a9(aP.cs) && (kS[0].td = !0, kS[0].sp = 3)) : (aZS = ag.ar(zn << 2), kS[0].sp = 1, kS[5].td = function(aZS) {
					return !aS.aT.gy(aZS) && !aZd(aZS) && eI.j1(1, [aZS], !1)
				}(aZS), kS[7].td || aS.aT.gy(aZS) || (aZT = aZS, kS[7].td = !0), kS[4].td = !aS.aT.gy(aZS) && !eG.no(aZS) && eI.j1(0, [aZS], !1), kS[6].td = function(aZS) {
					if (0 === aJv.length) return !1;
					if (performance.now() > aZW + 4e3) return !(aJv = []);
					return !aZd(aZS) && ! function(aZS) {
						var j;
						if (aP.d7)
							for (j = aJv.length - 1; 0 <= j; j--)
								if (!aC.hW(aZS, aJv[j])) return 1;
						return
					}(aZS)
				}(aZS), aC.hW(aZS, aP.cs) ? (aC.a0x(aP.cs, aZS) ? (kS[0].sp = 0, kS[0].td = !0) : a8.a9(aP.cs) && (kS[0].sp = 3, kS[0].td = !0), kS[0].td = this.aZk()) : (kS[2].td = !0, dY.xl(aZS) ? kS[2].sp = 0 : kS[2].sp =
					1, kS[0].td = !0))))), this.aZg(mz, n0)))
	}, this.aZg = function(mz, n0) {
		return fm = mz - Math.floor(aZP / 2), fn = n0 - Math.floor(aZP / 2), !!this.td()
	}, this.mx = function(mz, n0) {
		return !!this.td() && (mr.nW.td ? !mr.nW.aJN(mz, n0) && (mr.nW.td = !1, eK.eN = !0) : function(oa, mz, n0) {
			mz = aZZ(mz, n0);
			if (0 <= aZb(mz)) return !1;
			if ((1 === mz || 6 === mz) && 0 <= aZb(2)) return !1;
			if ((6 === mz || 9 === mz) && 0 <= aZb(10)) return !1;
			return oa.fQ(), eK.eN = !0
		}(this, mz, n0))
	}, this.fQ = function() {
		for (var j = kS.length - 1; 0 <= j; j--) kS[j].td = !1, kS[j].sp = 0;
		mr.nW.td = !1
	}, this.td = function() {
		return this.aZk() || mr.nW.td
	}, this.aZk = function() {
		for (var h = kS.length, j = 0; j < h; j++)
			if (kS[j].td) return !0;
		return !1
	}, this.fc = function() {
		if (this.td())
			if (mr.nW.td) mr.nW.fc();
			else {
				var j, hl = fW,
					bd = kS,
					h = bd.length,
					aZp = (aZP + gap) / zoom;
				for (hl.imageSmoothingEnabled = !0, hl.setTransform(zoom, 0, 0, zoom, fm, fn), j = 0; j < h; j++) bd[j].td && fW.drawImage(bd[j].canvas[bd[j].sp], bd[j].fm * aZp, bd[j].fn * aZp);
				hl.imageSmoothingEnabled = !1, hl.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aSG() {
	this.aZq = function(h9) {
		return [h9 >> 12 & 63, h9 >> 6 & 63, 63 & h9]
	}, this.aZr = function(h9) {
		for (var bk = this.aZq(h9), j = 0; j < 3; j++) bk[j] = ~~(4.05 * bk[j]);
		return bk
	}, this.aUb = function(h9) {
		h9 = this.aZr(h9);
		return aS.color.bb(h9[0], h9[1], h9[2])
	}, this.aZs = function(bk) {
		for (var j = 0; j < 3; j++) bk[j] = ~~(bk[j] / 4.04);
		return (bk[0] << 12) + (bk[1] << 6) + bk[2]
	}, this.bb = function(rp, gJ, bd) {
		return "rgb(" + rp + "," + gJ + "," + bd + ")"
	}, this.b7 = function(rp, gJ, bd, bc) {
		return "rgba(" + rp + "," + gJ + "," + bd + "," + bc.toFixed(3) + ")"
	}, this.aQg = function(bt) {
		for (var bk = bt.split("(")[1].split(","), gT = dN.gT, j = 0; j < 3; j++) gT[j] = parseInt(bk[j]);
		return 4 === bk.length ? gT[3] = 255 * parseFloat(bk[3].slice(0, -1)) : gT[3] = 255, gT
	}, this.a3I = function(aZt, ao) {
		for (var bk = aZt.slice(aZt.indexOf("(") + 1, aZt.indexOf(")")).split(","), gT = dN.gT, j = 0; j < 3; j++) gT[j] = aN.fL(parseInt(bk[j].trim(), 10) + ao, 0, 255);
		return 3 === bk.length ? this.bb(gT[0], gT[1], gT[2]) : (aZt = parseFloat(bk[3].trim()), this.b7(gT[0], gT[1], gT[2], aZt = 0 === aZt ? .3 : aZt))
	}, this.be = function(aZu, aZv) {
		for (var rT = 0, j = 0; j < 3; j++) rT += Math.abs(aZv[j] - aZu[j]);
		if (!(240 <= rT))
			for (j = 0; j < 3; j++) aZv[j] = aZu[j] + (aZu[j] < 128 ? 80 : -80)
	}, this.aZw = function(bk) {
		for (var bq = "#", j = 0; j < 3; j++) {
			var rp = bk[j].toString(16);
			bq += 1 === rp.length ? "0" + rp : rp
		}
		return bq
	}, this.aZx = function(bq) {
		var rp, gJ;
		return bq.length < 7 ? fg.lX : (rp = parseInt(bq.slice(1, 3), 16), gJ = parseInt(bq.slice(3, 5), 16), bq = parseInt(bq.slice(5, 7), 16), this.bb(rp, gJ, bq))
	}
}

function q0() {
	var aZy = new Uint8Array(64);
	this.f = function() {
		var j;
		for (aZy[0] = 45, aZy[37] = 95, j = 0; j < 10; j++) aZy[j + 1] = 48 + j;
		for (j = 0; j < 26; j++) aZy[j + 11] = 65 + j, aZy[j + 38] = 97 + j
	}, this.pX = function(aTJ) {
		for (var wM = qb, v3 = new Uint8Array(aTJ), j = 0; j < aTJ; j++) v3[j] = wM.pF(6);
		return v3
	}, this.pW = function(v3) {
		for (var h = v3.length, aZz = aZy, bk = [], j = 0; j < h; j++) bk.push(String.fromCharCode(aZz[v3[j]]));
		return bk.join("")
	}, this.gG = function(value, aa0) {
		for (var aZz = aZy, bk = [], j = 0; j < aa0; j++) bk.push(String.fromCharCode(aZz[value >> 6 * (aa0 - 1 - j) & 63]));
		return bk.join("")
	}
}

function a4n() {
	var aa1 = new Array(1),
		aa2 = new Array(1),
		aa3 = 20,
		aCY = 0,
		aa4 = !1;

	function aa6() {
		aa3++, yb.play()
	}
	this.f = function() {
		if (!window.document.documentMode) {
			for (var j = 0; 0 <= j; j--) ! function(j, src) {
				aa2[j] = 0, aa1[j] = document.createElement("audio"), aa1[j].src = src, aa1[j].setAttribute("preload", "auto"), aa1[j].setAttribute("controls", "none"), aa1[j].style.display = "none", aa1[j].onpause = function() {
					aa2[j] = 1
				}, aa1[j].oncanplaythrough = function() {
					aa2[j] = 0 === aa2[j] ? 1 : aa2[j]
				}, document.body.appendChild(aa1[j])
			}(j,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
			aa4 = !0
		}
	}, this.pE = function() {
		if (aa4) {
			aa4 = !1;
			for (var j = 0; 0 <= j; j--) aa1[j].onpause = null, aa1[j].oncanplaythrough = null, c9.removeChild(document.body, aa1[j]), aa1[j] = null
		}
	}, this.play = function() {
		if (aa4) {
			var aX = performance.now();
			if (aCY + 66 < aX)
				for (var j = 0; 0 <= j; j--)
					if (1 === aa2[j]) return aCY = aX, aa2[j] = 2, void aa1[j].play();
			0 < aa3 && (aa3--, setTimeout(aa6, 66))
		}
	}
}

function iS() {
	eB.iL(), eG.iL(), e8.aa7(), az.b0.iL()
}

function iY() {
	eJ.iL(), eF.iL(), dY.iL(), dX.iL(), eH.iL(), aV.iL(), dn.iL(), dm.b0.iL(), du.aLh(), e2.iL(), dQ.iL(), dp.iL(), eG.iL(), eG.nj(), e8.iL(), dy.iL(), e7.iL(), eC.iL(), eB.iL(), eI.iL(), e4.iL(), e6.iL(), aZ.iL(), dx.iL(), az.b0.iL(), az.aFV.iL(),
		c9.iL(), ea.qd.iL(), dw.iL(), eK.iL()
}

function iP() {
	eO.iL(), eE.iL(), eA.iL(), eM.iL(), e5.iL(), cD.aDu()
}

function ic() {
	e2.eR(!1), eC.eR(), e8.eR(!1), e7.eR(), e4.eR(), e6.eR(), eG.eR(!1), dx.vv()
}

function ib() {
	eG.eR(!1) && (eK.eN = !0), az.b0.iL()
}

function aSi() {
	this.qu = function(qC) {
		var username = l.bj.data[122].value.slice(0, 20),
			username = (pJ.cM(24 + 16 * username.length + 18 + qh.aGi.pF()), pJ.q9(1, 0), pJ.q9(6, 1), pJ.q9(10, dT.a9k), pJ.q9(2, l.bj.data[158].value), az.b2.aDf(username), aS.color.aZq(l.b0.aL8()));
		pJ.q9(6, username[0]), pJ.q9(6, username[1]), pJ.q9(6, username[2]), qh.aGi.eX(), az.b0.a5D = qC, az.b0.send(qC, pJ.pD)
	}, this.aRB = function(aa8, qH) {
		qL.f(), qL.q9(1, 0), qL.q9(6, 2), qL.q9(3, aa8), 2 === aa8 ? qL.q9(2, qH) : 3 === aa8 ? gE.q2.eX(qH, 7, qL) : 5 === aa8 && (qL.q9(3, qH.id), qL.q9(3, qH.value), qL.q9(30, qH.cQ)), az.b0.send(az.b0.a5D, qL.qP())
	}
}

function a4c() {
	this.a6s = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aJC = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", fg.fk, "rgb(170,170,170)"
	], this.aa9 = [fg.fk, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", fg.fk, fg.lX], this.aaA = [fg.lX, fg.fk, fg.fk, fg.fk, fg.lX, fg.lX, fg.lX, fg.lX, fg.fk];
	var aEe = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.nf = ["rgba(" + aEe[0] + ",", "rgba(" + aEe[1] + ",", "rgba(" + aEe[2] + ",", "rgba(" + aEe[3] + ",", "rgba(" + aEe[4] + ",", "rgba(" + aEe[5] + ",", "rgba(" + aEe[6] + ",", "rgba(" + aEe[7] + ",", "rgba(" + aEe[8] + ",", "rgba(" + aEe[9] +
			","
		], this.ng = ["rgb(" + aEe[0] + ")", "rgb(" + aEe[1] + ")", "rgb(" + aEe[2] + ")", "rgb(" + aEe[3] + ")", "rgb(" + aEe[4] + ")", "rgb(" + aEe[5] + ")", "rgb(" + aEe[6] + ")", "rgb(" + aEe[7] + ")", "rgb(" + aEe[8] + ")", "rgb(" + aEe[9] +
			")"], this.kX = null, this.s9 = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.a1b = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lq = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.gu = new Uint8Array(aP.aj), this.sH = new Uint8Array(aP.aj), this.a62 = new Uint16Array(aP.aj), this.a63 = new Uint16Array(this.lq.length + 1), this.a64 = new Uint16Array(this.lq.length), this
		.dg = function() {
			this.kX = [L(473), L(474), L(475), L(476), L(477), L(478), L(479), L(480), L(481)]
		}, this.f = function() {
			if (this.gu.fill(0), this.sH.fill(0), this.aaB(), aP.d7) {
				if (9 === aP.dA) {
					for (var gu = de.gu, j = aP.data.teamPlayerCount[7] - 1; 0 <= j; j--) gu[j] = 1;
					var h = aP.aj;
					for (j = aP.data.teamPlayerCount[7]; j < h; j++) gu[j] = 2;
					de.lq[1] = 7, de.lq[2] = 8
				} else aP.d0 ? function() {
					var a1b = de.a1b,
						colorsData = aP.data.colorsData;
					if (!aP.data.selectableColor)
						for (var j = aP.ct - 1; 0 <= j; j--) colorsData[j] = dV.rl(262144);
					var aaM = 0,
						p0 = 768,
						aG8 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aP.data.teamPlayerCount;
					for (j = 0; j < 9; j++)
						if (teamPlayerCount[j]) {
							for (var ao = 0, bd = 0; bd < 3; bd++) ao += Math.abs(a1b[j][bd] - aG8[bd]);
							ao < p0 && (aaM = j, p0 = ao)
						} var aaN = new Uint16Array(9);
					for (j = 0; j < 9; j++) aaN[j] = teamPlayerCount[j];
					var lq = de.lq,
						aaO = new Uint8Array(9),
						ae = (lq[0] = 0, 1);
					for (j = 1; j < 9; j++) aaN[j] && (aaO[j] = ae, lq[ae++] = j);
					var ny = aP.ct,
						gu = de.gu;
					aaN[aaM] ? (aaN[aaM]--, gu[0] = aaO[aaM]) : ny = 0;
					var bt = 0;
					for (j = ny; j < aP.cx; j++) {
						var j8 = lq[bt];
						if (aaN[j8]) aaN[j8]--, gu[j] = aaO[j8];
						else if (j--, 9 <= ++bt) return console.log("error 325")
					}
				}() : this.iL();
				! function() {
					for (var h = aP.aj, a62 = de.a62, a63 = de.a63, a64 = de.a64, gu = de.gu, lq = de.lq, a5x = lq.length, bj = new Array(a5x), j = 0; j < a5x; j++) bj[j] = [];
					for (j = 0; j < h; j++) bj[lq[gu[j]]].push(j);
					for (j = 1; j <= a5x; j++) a63[j] = a63[j - 1] + bj[j - 1].length;
					for (j = 0; j < a5x; j++)
						for (var ae = bj[j].length, bl = a63[j], j8 = 0; j8 < ae; j8++) a62[j8 + bl] = bj[j][j8];
					var ct = aP.ct;
					for (j = 0; j < a5x; j++)
						for (ae = bj[j].length, bl = a63[j], j8 = 0; j8 < ae; j8++)
							if (a62[j8 + bl] >= ct) {
								a64[j] = j8;
								break
							}
				}(), ! function() {
					for (var h = aP.aj, gu = de.gu, sH = de.sH, lq = de.lq, j = 0; j < h; j++) sH[j] = lq[gu[j]];
					9 === aP.dA && sH.fill(1, h - dQ.a9P[5])
				}()
			}
		}, this.aaB = function() {
			for (var j = this.lq.length - 1; 0 <= j; j--) this.lq[j] = j
		}, this.iL = function() {
			var nk = new Uint8Array(aP.ct),
				nl = new Uint8Array(aP.ct),
				aaG = new Uint16Array(8),
				aaH = new Uint16Array(this.lq.length);
			this.aaI(nk, nl, aaG, 1), this.yz(aaG), this.aaJ(aaH, nk, nl), this.aaK(nk, nl, aaH), this.aaL()
		}, this.aaI = function(nk, nl, aaN, aaP) {
			for (var bd, b8, aaQ, h = this.lq.length - aaP, bk = new Uint16Array(h), a1b = this.a1b, colorsData = aP.data.colorsData, j = aP.ct - 1; 0 <= j; j--) {
				for (bd = h; aaP <= bd; bd--) bk[bd - 1] = Math.abs(4 * (colorsData[j] >> 12) - a1b[bd][0]) + Math.abs(4 * (colorsData[j] >> 6 & 63) - a1b[bd][1]) + Math.abs(4 * (63 & colorsData[j]) - a1b[bd][2]);
				for (aaQ = 768, bd = h - 1; 0 <= bd; bd--) bk[b8 = (bd + j) % h] < aaQ && (aaQ = bk[b8], nk[j] = b8);
				for (aaN[nk[j]] += 4, aaQ = 768, bd = h - 1; 0 <= bd; bd--) bk[b8 = (bd + j) % h] < aaQ && b8 !== nk[j] && (aaQ = bk[b8], nl[j] = b8);
				aaN[nl[j]]++
			}
		}, this.yz = function(aaN) {
			for (var bd, sp, h = this.lq.length - 1, j = h; 0 <= j; j--) this.lq[j] = j;
			for (j = h - 1; 0 <= j; j--) aaN[j]++;
			for (j = 1; j <= h; j++) {
				for (sp = 0, bd = 1; bd < h; bd++) aaN[bd] > aaN[sp] && (sp = bd);
				aaN[sp] = 0, this.lq[j] = sp + 1
			}
		}, this.aaJ = function(aaH, nk, nl) {
			var bd, aJq, bt, ao, b8, h3, gJ, aaR = this.lq.length - 1,
				aQf = new Uint16Array(aaR),
				aaS = [],
				aaT = 0,
				aLt = [],
				aaU = [];
			loop: for (var j = 0; j < aP.ct; j++)
				if (null !== (aJq = aS.fO.aME(ad.uA[j]))) {
					for (bd = aLt.length - 1; 0 <= bd; bd--)
						if (aJq === aLt[bd]) {
							aaU[bd].push(j), aaT = Math.max(aaT, aaU[bd].length);
							continue loop
						} aLt.push(aJq), aaS.push(!1), aaU.push([j]), aaT = Math.max(aaT, 1)
				}
			for (; 2 < aP.d8 && aaT > aN.aO(aP.ct, aP.d8);) aP.d8--, aP.dA--;
			for (bd = aLt.length - 1; 0 <= bd; bd--) {
				for (ao = -1, bt = aLt.length - 1; 0 <= bt; bt--) !aaS[bt] && (-1 === ao || aaU[bt].length > aaU[ao].length) && (ao = bt);
				for (bt = aaR - 1; 0 <= bt; bt--) aQf[bt] = 1;
				for (bt = aaU[ao].length - 1; 0 <= bt; bt--) aQf[nk[aaU[ao][bt]]] += 3, aQf[nl[aaU[ao][bt]]]++;
				for (j = aaR - 1; 0 <= j; j--) {
					for (b8 = ao % aaR, bt = aaR - 1; 0 <= bt; bt--) aQf[bt] > aQf[b8] && (b8 = bt);
					for (h3 = -1, bt = aP.d8; 0 < bt; bt--)
						if (this.lq[bt] === b8 + 1) {
							h3 = bt;
							break
						} if (aQf[b8] = 0, -1 !== h3) {
						for (gJ = 0, bt = aP.d8; 0 < bt; bt--) aaH[h3] > aaH[bt] && gJ++;
						if (gJ !== aP.d8 - 1) {
							for (bt = aaU[ao].length - 1; 0 <= bt; bt--) aaH[h3]++, this.gu[aaU[ao][bt]] = h3;
							break
						}
					}
				}
				aaS[ao] = !0
			}
		}, this.aaK = function(nk, nl, aaH) {
			for (var j, jK, h = this.lq.length - 1, border = aN.aO(aP.ct, aP.d8), aaV = (0 < aP.ct % aP.d8 && border++, new Uint8Array(1 + h)), bd = h; 1 <= bd; bd--) aaV[this.lq[bd]] = bd;
			for (j = 0; j < aP.ct; j++) jK = aaV[nk[j] + 1], 0 === this.gu[j] && jK <= aP.d8 && aaH[jK] < border && (aaH[jK]++, this.gu[j] = jK);
			for (j = 0; j < aP.ct; j++) jK = aaV[nl[j] + 1], 0 === this.gu[j] && jK <= aP.d8 && aaH[jK] < border && (aaH[jK]++, this.gu[j] = jK);
			for (bd = aP.d8; 1 <= bd; bd--)
				for (j = aP.ct - 1; 0 <= j && !(aaH[bd] >= border); j--) 0 === this.gu[j] && (aaH[bd]++, this.gu[j] = bd)
		}, this.aaL = function() {
			for (var j = aP.ct; j < aP.aj; j++) this.gu[j] = 1 + j % aP.d8
		}
}

function fG() {
	var iB;
	this.a7o = [], this.iB = document.createElement("div"), this.fH = function(bq, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = bq, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.iB.appendChild(
			title), title
	}, this.jI = function(bq, marginBottom) {
		var jH = document.createElement("p");
		return jH.textContent = bq, jH.style.fontSize = "0.75em", jH.style.lineHeight = "1.2em", jH.style.marginBottom = marginBottom || "0", this.iB.appendChild(jH), jH
	}, this.aWq = function(bq) {
		var aaW = document.createElement("p");
		return aaW.textContent = bq, aaW.style.fontSize = "1em", aaW.style.marginBottom = "0", aaW.style.whiteSpace = "pre-wrap", aaW.style.overflowWrap = "break-word", this.iB.appendChild(aaW), aaW
	}, this.jG = function(a8t, fontSize) {
		var iB = document.createElement("div");
		return iB.innerHTML = a8t, iB.style.fontSize = fontSize || "1em", iB.style.lineHeight = "1.2em", this.iB.appendChild(iB), iB
	}, this.fI = function(aWk) {
		for (var d = aWk.d, h = d.length, j = 0; j < h; j++) this.iB.appendChild(d[j])
	}, this.fJ = function(g3) {
		return this.a7o.push(g3), this.iB.appendChild(g3.b8), g3
	}, this.resize = function() {
		for (var h = this.a7o.length, j = 0; j < h; j++) this.a7o[j].resize && this.a7o[j].resize()
	}, (iB = this.iB).style.position = "absolute", iB.style.height = "auto", iB.style.padding = "0.5em"
}

function a2o() {
	var bq;
	10 === a2.cI ? bq =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === a2.cI ? bq =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === a2.cI ? bq =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === a2.cI ? bq =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === a2.cI ? bq =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === a2.cI ? bq =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === a2.cI ? bq =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === a2.cI ? bq =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === a2.cI ? bq =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === a2.cI ? bq =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === a2.cI ? bq =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === a2.cI && (bq =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new aVR).qc(bq)
}

function aNl(a2B, a2C, aaX, aaY) {
	var self;
	this.a2G = document.createElement("span"), (self = this).a2G.textContent = a2B, self.a2G.style.color = fg.fk, self.a2G.style.position = "absolute", self.a2G.style.font = "inherit", aaY ? self.a2G.style.bottom = "0.06em" : self.a2G.style.top =
		"0.12em", aaX ? self.a2G.style.left = "0.2em" : self.a2G.style.right = "0.2em", self.a2G.style.fontSize = "0.6em", self.a2G.style.pointerEvents = "none", self.a2G.style.whiteSpace = "pre", a2C.style.position = "relative", a2C.style.overflow =
		"hidden", a2C.appendChild(self.a2G)
}

function aSm() {
	function aab() {
		var id = qb.pF(3);
		return 0 === id ? {
			id: id,
			cQ: qb.pF(30),
			jc: bx.aAt.aRE(pS.q2.qc(7))
		} : 1 === id ? {
			id: id,
			cQ: qb.pF(30),
			yT: qb.pF(3),
			value: qb.pF(30),
			target: qb.pF(30)
		} : 2 === id ? {
			id: id,
			cQ: qb.pF(30),
			yT: qb.pF(3)
		} : 3 === id ? {
			id: id,
			cQ: qb.pF(30),
			yT: qb.pF(3),
			value: qb.pF(4),
			target: qb.pF(30)
		} : 4 === id ? {
			id: id,
			cQ: qb.pF(30),
			yT: qb.pF(3),
			target: qb.pF(30)
		} : 5 === id ? {
			id: id,
			yT: qb.pF(6)
		} : 6 === id ? {
			id: id,
			value: qb.pF(17)
		} : null
	}
	this.aYv = function(qC) {
		if (qC !== az.b0.a5D) az.b0.close(qC, 3239);
		else if (6 !== cL.qs()) az.b0.close(qC, 3271);
		else {
			bx.f();
			for (var j = 0; j < 4; j++) {
				var bz = bx.b0.c0[j],
					playerCount = (bz.l9 = qb.pF(10), bz.cI = qb.pF(6), bz.mapSeed = qb.pF(14), bz.c2 = qb.pF(4), bz.aWM = qb.pF(6), bz.aWN = qb.pF(4), bz.cG = qb.pF(1), bz.aRR = qb.pF(12), bz.spawningSeed = qb.pF(14), qb.pF(16));
				bx.by.bw[j] = qb.pF(16);
				for (var bc = 0; bc < playerCount; bc++) bx.by.aET(j, qb.pF(30), pS.q2.qc(5), qb.pF(4), qb.pF(30), qb.pF(7), qb.pF(16), qb.pF(18), qb.pF(11), qb.pF(12))
			}
			c9.ed(29), bx.b0.aRJ(!0)
		}
	}, this.aYw = function(qC) {
		if (qC !== az.b0.a5D) az.b0.close(qC, 3239);
		else if (bx.a5C) {
			bx.b0.aRH[0] = qb.pF(20), bx.b0.aRH[1] = qb.pF(20);
			for (var aaZ = qb.pF(16), bc = 0; bc < aaZ; bc++) {
				var id = qb.pF(3);
				0 === id ? bx.by.aET(qb.pF(2), qb.pF(30), pS.q2.qc(5), 0, 1234566, 127, 0, qb.pF(18), 0, qb.pF(12)) : 1 === id ? bx.by.aMJ(qb.pF(16), qb.pF(2)) : 2 === id ? bx.by.aMF(qb.pF(16), qb.pF(2), qb.pF(2)) : 3 === id ? bx.by.aMI(qb.pF(
					16), qb.pF(2)) : 4 === id ? bx.by.aMA(qb.pF(16), qb.pF(2), qb.pF(4), qb.pF(30), qb.pF(7), qb.pF(16), qb.pF(11)) : 5 === id && bx.by.aMB(qb.pF(16), qb.pF(2), qb.pF(1))
			}
			for (var j = 0; j < 4; j++) {
				var bz = bx.b0.c0[j];
				if (bz.l9 = qb.pF(10), 0 === bz.l9) {
					if (bz.qY = qb.pF(10), bz.cC = qb.pF(10), bx.aDw.bv(j)) return;
					bz.cI = qb.pF(6), bz.mapSeed = qb.pF(14), bz.c2 = qb.pF(4), bz.aWM = qb.pF(6), bz.aWN = qb.pF(4), bz.cG = qb.pF(1), bz.aRR = qb.pF(12), bz.spawningSeed = qb.pF(14), bz.aaa.push(bz.aaa[0]), bz.aaa.shift()
				}
			}
			bx.b0.ji()
		} else az.b0.close(qC, 3251)
	}, this.aYx = function(qC) {
		if (qC !== az.b0.a5D) az.b0.close(qC, 3272);
		else if (bx.a5C) {
			for (var aMK = qb.pF(4), bz = bx.b0.c0[aMK], aNn = bz.aNn, a3K = (bz.aNo = qb.pF(20), qb.pF(6)), j = 0; j < a3K; j++) {
				var aHV = aab();
				bx.ms.aHU(aHV), aNn.push(aHV)
			}
			bx.b0.aRS(aMK)
		} else az.b0.close(qC, 3273)
	}, this.aYy = function(qC) {
		qC !== az.b0.a5D ? az.b0.close(qC, 3276) : bx.a5C ? bx.message.jb(aab()) : az.b0.close(qC, 3277)
	}
}

function aRI() {
	this.l9 = 0, this.cI = 0, this.mapSeed = 0, this.c2 = 0, this.aWM = 0, this.aWN = 0, this.cG = 0, this.aRR = 0, this.spawningSeed = 0, this.qY = 0, this.cC = 0, this.aNn = [], this.aNo = 1048575, this.aRQ = 0, this.aaa = [{
		cI: 0,
		mapSeed: 0,
		c2: 0,
		iJ: 100,
		cG: 0
	}, {
		cI: 1,
		mapSeed: 0,
		c2: 1,
		iJ: 200,
		cG: 0
	}, {
		cI: 2,
		mapSeed: 0,
		c2: 2,
		iJ: 300,
		cG: 0
	}, {
		cI: 3,
		mapSeed: 0,
		c2: 3,
		iJ: 400,
		cG: 0
	}, {
		cI: 0,
		mapSeed: 0,
		c2: 9,
		iJ: 500,
		cG: 0
	}, {
		cI: 1,
		mapSeed: 0,
		c2: 10,
		iJ: 600,
		cG: 0
	}, {
		cI: 2,
		mapSeed: 0,
		c2: 8,
		iJ: 700,
		cG: 0
	}, {
		cI: 3,
		mapSeed: 0,
		c2: 3,
		iJ: 800,
		cG: 0
	}]
}

function a40() {
	var canvas, ff, fm, fn, aXB, aac, gap, aad, fontSize, aae, vn, aaf, aag, aah, aai, aaj, aak, aal;

	function aap() {
		ff.clearRect(0, 0, e8.ce, e8.cf), ff.fillStyle = fg.fh, ff.fillRect(0, 0, e8.ce, e8.cf), ff.fillStyle = fg.aBf, nw = 0 < aaj ? aaj : Math.sqrt(aag[4] / 1e4), ff.fillRect(0, e8.cf - aXB - 1, Math.floor(nw * e8.ce), aXB), ff.fillStyle = fg.fk,
			ff.fillRect(0, 0, e8.ce, 1), ff.fillRect(0, 0, 1, e8.cf), ff.fillRect(e8.ce - 1, 0, 1, e8.cf), ff.fillRect(0, e8.cf - 1, e8.ce, 1), ff.fillRect(0, e8.cf - aXB - 1, e8.ce, 1);
		for (var nw, aaq, aX = 0, j = 0; j < aaf.length; j++) aah[j] ? (aS.bG.textAlign(ff, 0), aaq = Math.floor((aac - aXB + 2 * aad) * (j - aX + 1) / (aaf.length + 1) - .7 * aad), ff.fillText(aaf[j], gap, aaq), aS.bG.textAlign(ff, 2), 5 === j &&
			0 !== ad.eQ[aP.cs] && ad.er[aP.cs] >= dX.a8Z(aP.cs) ? (ff.fillStyle = fg.aPk, ff.fillText(aan(j), e8.ce - gap, aaq), ff.fillStyle = fg.fk) : ff.fillText(aan(j), e8.ce - gap, aaq)) : aX++
	}

	function aan(j) {
		return j < 3 ? aag[j].toString() : 3 === j || 4 === j || 5 === j ? aS.fO.ug(aag[j] / 100, 2) : j < 7 ? aS.fO.gG(aag[j]) : j === 7 ? e8.wK(aag[7]) : j === 8 ? __fx.utils.getMaxTroops(ad.el, aP.cs) : __fx.utils.getDensity(aP.cs)
	}

	function aam() {
		ad.el[aP.cs] !== aag[6] && (aag[6] = ad.el[aP.cs], aae++)
	}
	this.f = function() {
		aaj = aak = 0, (vn = new Array(8))[0] = L(482), vn[1] = aP.d0 ? L(335) : L(483), vn[2] = L(484), vn[3] = L(485), vn[4] = L(94), vn[5] = L(169, 0, "Interest"), vn[6] = L(168), vn[7] = L(486),
			vn.push("Max Troops", "Density"), // add vn
			(aaf = new Array(vn.length)).fill(""), (aag = new Array(vn.length))[0] = aP.d0 ? 0 : aP.ct, aag[1] = aP.d0 ? du.ek : aP.cv, aag[2] = aP.cw, aag[3] = 0, aag[4] = aN.aO(1e4 * ad.el[0], Math.max(aP.d3, 1)), aag[5] = 0 === aP.data
			.iIncomeType ? 700 : 1 === aP.data.iIncomeType ? aN.aO(700 * aP.data.iIncomeValue, 64) : aN.aO(700 * aP.data.iIncomeData[aP.cs], 64), aag[6] = 0, aam(), aag[7] = 0, aai = aan(6), (aah = new Array(vn.length)).fill(!0), aal = 0, aal =
			aP.d0 ? (aah[0] = !1, aah[2] = !1, aah[3] = !1, 3) : (aah[3] = !1, 1), aae = 0, this.resize()
	}, this.resize = function() {
		this.ce = Math.floor((bD.bE.bF() ? .1646 : .126) * 1.25 * bI.ht), this.cf = Math.floor(1.18 * this.ce), aXB = Math.floor(.04 * this.ce), gap = Math.floor(.035 * this.ce), aad = .04 * this.ce, aac = this.cf, this.cf -= Math.floor(aal * (
			this.cf - 2 * aXB) / vn.length), fontSize = Math.floor(.7 * (aac - aXB) / vn.length);
		var tV = aS.bG.bQ(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.ce, canvas.height = this.cf,
			function(tV, ce) {
				for (var j = 0; j < aaf.length; j++) aaf[j] = aS.ff.u9(vn[j], tV, ce)
			}((ff = canvas.getContext("2d", {
				alpha: !0
			})).font = tV, .575 * this.ce), aS.bG.textBaseline(ff, 1), ff.lineWidth = 1, this.zW(), this.a70(), e7.a70(), aap()
	}, this.a70 = function() {
		fm = bI.ce - this.ce - hn.gap
	}, this.aEX = function() {
		fn = hn.gap
	}, this.zW = function() {
		fn = hn.gap + (e7.aP3() && 0 !== ad.eQ[aP.cs] && !aP.d5 ? e7.cf + hn.gap : 0)
	}, this.eR = function(n2) {
		(n2 || 100 <= aae) && (aae = 0, aap())
	}, this.a7i = function() {
		return aag[7]
	}, this.wK = function(value) {
		var bl = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * bl) / 1e3);
		return value < 10 ? bl + ":0" + value : bl + ":" + value
	}, this.iL = function() {
		var px, per;
		aah[0] && aP.cu - aP.cw !== aag[0] && (aag[0] = aP.cu - aP.cw, aae++), du.ek - aag[0] !== aag[1] && (aag[1] = du.ek - aag[0], aae++), this.aa7(), (px = dX.py(aP.cs)) !== aag[5] && (aag[5] = px, aae++), aam(), aag[7] += eK.iR, px = aan(7),
			aai !== px && (aai = px, aae += 100), px = aP.d7 ? dx.hd() : ad.el[em[0]], per = aN.aO(1e4 * px, Math.max(aP.d3, 1)), aag[3] = px, aag[4] !== per && (aae++, aag[4] = per), 8 === aP.dA && function() {
				for (var j = 0; j < 2; j++)
					if (!aS.aT.gp(j)) return dO.a38.aBq(), 1;
				return
			}() || aag[3] < aP.d3 || ! function() {
				for (var j = du.ek - 1; 0 <= j; j--)
					if (0 < ad.ac[du.h0[j]].length) return;
				return 1
			}() || dm.g8.aLb().length || dO.a38.aBq()
	}, this.aa7 = function() {
		aah[2] && aP.cw !== aag[2] && (aag[2] = aP.cw, aae += 2 === aP.d2 ? 100 : 1)
	}, this.aMw = function() {
		return aag[3] === aP.d3
	}, this.iZ = function(j) {
		var gJ, aaz, aX;
		return 2 !== aP.d2 && (j % 2 == 1 && (e2.eR(1, 1), eK.eN = !0), j === aP.dF ? (aaj = 0, aap(), !1) : (-1 !== j || 0 !== aak) && (aaz = aaj, aaj = aP.d1 ? j / aP.dF : (aX = performance.now(), 0 <= j && (gJ = aX - 392 * j, aak = 0 === j ||
			gJ < aak ? gJ : aak), 1 < (aaj = (aX - aak) / (392 * aP.dF)) ? 1 : aaj), aap(), aaj !== aaz))
	}, this.fc = function() {
		fW.drawImage(canvas, fm, fn)
	}
}

function a4f() {
	var ab0, ab1 = new Uint8Array(5),
		ab2 = new Uint8Array(5);
	this.ab3 = new lY, this.f = function() {
		for (var h9 = l.bj.data[119].value, j = 0; j < ab1.length; j++) ab1[j] = (h9 >> 2 * j) % 4
	}, this.dq = function() {
		ab0 = [L(487), "", L(488, [bn.bi[28]]), L(489, [bn.bi[26]]), L(490, [bn.bi[0]])], this.ab3.f()
	}, this.iL = function() {
		this.ab3.iL()
	}, this.aEq = function(id) {
		1 < id && l3.l4() || ! function(k) {
			if (3 === ab1[k] || 1 === ab2[k]) return;
			if (ab2[k] = 1, !(Math.random() < .6)) {
				ab1[k]++;
				for (var h9 = 0, j = 0; j < ab1.length; j++) h9 += ab1[j] << 2 * j;
				l.m.n(119, h9)
			}
			return 1
		}(id) || eB.ts(ab0[id])
	}
}

function aVl() {
	function abA() {
		var gJ;
		return 8 === aP.dA ? 0 : (gJ = Math.floor(ad.qX[aP.cs] / 50), (gJ = Math.min(gJ, 400)) / 100)
	}

	function ab5() {
		var gJ = abA();
		0 !== gJ && eB.lk(440, L(491, [gJ.toFixed(2)]), 40, 0, fg.aBv, fg.fh, -1, !1)
	}
	this.iL = function() {
		var aD4;
		0 === dO.result.aJe || 0 === dO.result.qW.length || 8 === aP.dA ? aS.aT.gp(aP.cs) && ab5() : (function(aD4) {
			7 !== aP.dA && 10 !== aP.dA || 0 !== aP.dH && aD4 && eB.lk(600, L(495, [aD4.toFixed(2)]), 40, 0, fg.fk, fg.fh, -1, !1)
		}(aD4 = function() {
			eB.lk(520, L(492), 40, 0, fg.fk, fg.fh, -1, !1);
			for (var qW = dO.result.qW, h = qW.length, el = ad.el, bk = [], j = 0; j < h; j++) {
				var am = qW[j];
				bk.push({
					am: am,
					aX: el[am]
				})
			}
			bk.sort((bc, bd) => bd.aX - bc.aX);
			var kX = ad.ll,
				aX = dO.result.aJd,
				gJ = dO.result.aJe,
				bq = "",
				aD4 = 0;
			for (j = 0; j < h; j++) {
				var a16 = bk[j].aX * gJ / (100 * aX),
					abC = kX[bk[j].am] + ": " + a16.toFixed(2) + "   ";
				bk[j].am === aP.cs && (aD4 = a16), 2 < j && 4 !== h ? 3 === j && (bq += "(" + L(493, [h - 3]) + ")") : bq += abC
			}
			eB.lk(560, aS.fO.aNT(bq), 40, 0, fg.aBv, fg.fh, -1, !1), aD4 ? eB.lk(580, L(494, [aD4.toFixed(2) + " + " + abA().toFixed(2)]), 40, 0, fg.aBv, fg.fh, -1, !1) : aS.aT.gp(aP.cs) && ab5();
			return aD4
		}()), 2 === aP.dG || 7 <= aP.dA || function(aD4) {
			var qW = dO.result.qW,
				h = qW.length,
				uA = ad.uA,
				el = ad.el,
				aLt = [];
			loop: for (var j = 0; j < h; j++) {
				var am = qW[j],
					aJq = aS.fO.aME(uA[am]);
				if (null !== aJq) {
					for (var lQ = el[am], bd = aLt.length - 1; 0 <= bd; bd--)
						if (aJq === aLt[bd].name) {
							aLt[bd].aX += lQ, aLt[bd].bk.push({
								am: am,
								aX: lQ
							});
							continue loop
						} aLt.push({
						name: aJq,
						aX: lQ,
						bk: [{
							am: am,
							aX: lQ
						}]
					})
				}
			}
			if (0 !== aLt.length) {
				aLt.sort((bc, bd) => bd.aX - bc.aX);
				var bk = aLt[0].bk,
					a8o = (bk.sort((bc, bd) => bd.aX - bc.aX), "[" + aLt[0].name + "]"),
					abD = 512 * dO.result.aJe / 26214400,
					bl = (eB.lk(0, L(496, [a8o, abD.toFixed(4)]), 40, 0, fg.fk, fg.fh, -1, !1), bk.length),
					a8n = aLt[0].aX,
					abE = 1e4 * abD;
				for (j = 0; j < bl; j++)
					if (bk[j].am === aP.cs) {
						eB.lk(600, L(497, [(abE * bk[j].aX / (10 * a8n)).toFixed(2)]), 40, 0, fg.fk, fg.fh, -1, !1), eB.lk(640, L(498, [(.2 * aD4).toFixed(2), a8o]), 40, 0, fg.fk, fg.fh, -1, !1);
						break
					} aP.d1 || eB.lk(720, L(499), 736, 0, fg.fk, fg.aHk, -1, !1)
			}
		}(aD4))
	}, this.aEZ = function() {
		var ab9, aVY;
		aP.d0 || (ab9 = ad, aVY = aP.cs, 0 === ab9.vH[aVY]) || ab9.vG[aVY] < 1 || 2 * ab9.vE[aVY] > 3 * (ab9.vF[aVY] + ab9.vG[aVY]) || ab5()
	}
}

function a8y() {
	this.resize = function() {
		var j, aWn = document.head.querySelector("style#ss");
		if (aWn)
			for (j = aWn.sheet.cssRules.length - 1; 0 <= j; j--) aWn.sheet.deleteRule(0);
		else(aWn = document.createElement("style")).id = "ss", document.head.appendChild(aWn);
		var aKs = "::-webkit-scrollbar",
			abF = aS.bG.bK(hn.ho),
			bC = aS.bG.bK(Math.max(aS.bG.bJ(.012), 8));
		try {
			aWn.sheet.insertRule(aKs + "{width:" + bC + ";height:" + bC + ";}", aWn.sheet.cssRules.length), aWn.sheet.insertRule(aKs + "-thumb{background-color:white;}", aWn.sheet.cssRules.length), aWn.sheet.insertRule(aKs +
				"-track{background:" + fg.a3J + ";}", aWn.sheet.cssRules.length), aWn.sheet.insertRule(aKs + "-track:horizontal{border-top:" + abF + " solid white;}", aWn.sheet.cssRules.length), aWn.sheet.insertRule(aKs +
				"-track:vertical{border-left:" + abF + " solid white;}", aWn.sheet.cssRules.length), aWn.sheet.insertRule(aKs + "-button{display:none;}", aWn.sheet.cssRules.length)
		} catch (b8) {
			for (console.log("error 3425: " + b8), j = aWn.sheet.cssRules.length - 1; 0 <= j; j--) aWn.sheet.deleteRule(0)
		}
	}
}

function a27() {
	this.a0o = function(player, ls) {
		aS.aT.gn(0) && aS.aT.gp(player) && dl.a06(ls) && (dw.eU.abG(0, player, ls), aP.dC.qe(player, ls))
	}, this.a0v = function(player, hE, gt) {
		aS.aT.gn(1) && aS.aT.gp(player) && aS.aT.h6(player, gt) && aS.aT.hD(player, hE, 12, 0) && aS.aT.hV(player, gt) && ((gt = a8.x0(player, dN.gX[0])) || a8.x1(player)) && (ad.vE[player]++, dw.eU.abG(1, player, hE, dN.gX[0]), dn.aTc.aUl(
			player, gt)) && (aS.aT.hU(player), aZ.xL(player, hE), dn.aTc.aUn(player))
	}, this.hL = function(player, hE, hM) {
		aS.aT.gn(1) && aS.aT.gp(player) && aP.d7 && aS.aT.h6(player, hM) && aS.aT.hX(player, hM) && aS.aT.hK(player, aS.aT.hP(player, hE), hM) && dY.qe(hM, dN.gR[0]) && (dw.eU.abG(2, player, hE, hM), dX.a5S(player, hM))
	}, this.a10 = function(player, hE, a5U) {
		dN.gY[1] = 7 & a5U;
		var ls = a5U >> 3;
		aS.aT.gn(1) && aS.aT.gp(player) && dl.a06(ls) && dm.t7.t8(player) && dm.t7.aTN(ls) && aS.aT.hD(player, hE, 32, 0) && dm.sh.y3(player, ls, 1) && (aZ.xM(player), dw.eU.abG(3, player, hE, a5U), aS.aT.hU(player), a3c.q5.a10(player), dm.b0.oK(
			player))
	}, this.a12 = function(player, hE, tr) {
		849 === hE ? this.a5X(player, tr) : aS.aT.gn(1) && aS.aT.gp(player) && aS.aT.hD(player, hE, 32, 0) && dm.a11.xs(player, tr) && (aZ.xM(player), dw.eU.abG(4, player, hE, tr), aS.aT.hU(player), a3c.q5.a12(player), dm.b0.oK(player))
	}, this.a5X = function(player, tr) {
		aS.aT.gn(1) && aS.aT.gp(player) && dm.aUV.iL(player, tr) && dw.eU.abG(4, player, 849, tr)
	}, this.a5Y = function(player, gt) {
		513 === gt ? this.a17(player) : aS.aT.gn(1) && aS.aT.gp(player) && (gt = Math.min(gt, aP.aj), a8.x0(player, gt)) && (dw.eU.abG(5, player, gt), a8.aOl(player, gt))
	}, this.a5a = function(player, nU) {
		(aS.aT.gn(1) || aS.aT.gn(2)) && aS.aT.gp(player) && (nU = aN.fL(nU, 0, 1023), dw.eU.abG(6, player, nU), eG.mo(player, 0, nU))
	}, this.a19 = function(player, a5c) {
		e6.a18(player) && (dw.eU.abG(7, player, a5c), e6.aBs(player, a5c))
	}, this.a5e = function(player) {
		(aS.aT.gn(0) || aS.aT.gn(1)) && aS.aT.gp(player) && e9.a9C(player) && (dw.eU.abG(8, player), a3W.a5e(player))
	}, this.aFb = function(player) {
		dw.eU.abG(9, player), a3W.aFb(player)
	}, this.a17 = function(player) {
		e6.a1A(player) && (dw.eU.abG(5, player, 513), e6.a17(player))
	}, this.a0r = function(player, hE, ls, gt) {
		aS.aT.gn(1) && aS.aT.gp(player) && aS.aT.h6(player, gt) && aS.aT.hV(player, gt) && dl.a06(ls) && a0p.iv.aO0(player, ls) && (a8.x0(player, dN.gX[0]) || a8.x1(player)) && (dw.eU.abG(10, player, (hE << 10) + dN.gX[0], ls), gt = aS.aT.hT(
			player, hE), ad.ac[player].push(dN.gV[0]), a8.qe(player, gt, dN.gX[0]), aV.ru(player, !0), aZ.xN(player))
	}
}

function aGh() {
	this.aJh = function() {
		for (var am, h = du.ek, j2 = du.h0, qX = ad.qX, aBo = this.aEW(), j = 0; j < h; j++) am = j2[j], aS.aT.gy(am) || (qX[am] = aBo);
		var vE = ad.vE,
			vF = ad.vF,
			vG = ad.vG,
			vH = ad.vH,
			h = aP.ct;
		for (j = 0; j < h; j++)(0 === vH[j] || vG[j] < 1 || 2 * vE[j] > 3 * (vF[j] + vG[j])) && (qX[j] = 0);
		var aJc = 0;
		for (j = 0; j < h; j++) aJc += 0 < qX[j];
		return aJc
	}, this.aEW = function() {
		return Math.min(65535, eK.lf())
	}
}

function a5G(title, a8t, abH, rB) {
	var r9, a8u;
	this.show = function() {
		r9.show(), this.resize()
	}, this.fQ = function() {
		r9.fQ()
	}, this.resize = function() {
		r9.resize(), a8u.resize()
	}, this.fR = function(bt) {
		2 === bt && r9.fS[0].fT()
	}, rB = rB || [new bV("⬅️ " + L(43), function() {
		c9.f7()
	})], r9 = new f0(title, rB), a8u = new a8w(r9.f3, a8t), abH && aS.bG.textAlign(r9.f3.style, 1)
}

function aDk(kS, aNs) {
	var iB;
	this.resize = function() {
		for (var j = 0; j < kS.length; j++) aS.bG.hm(kS[j].button);
		iB.style.gap = iB.style.padding = aS.bG.bK(hn.a6Z)
	}, (iB = document.createElement("div")).style.display = "grid", iB.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", iB.style.overflowY = "auto", iB.style.gridAutoRows = "5.3em", iB.style.maxHeight = "100%";
	for (var j = 0; j < kS.length; j++) kS[j].aQa(1), iB.appendChild(kS[j].button);
	aNs.appendChild(iB)
}

function a4A() {
	var abI;

	function abJ(player) {
		var rp, aTV;
		return aS.aT.gy(player) && player < aP.ct ? 0 : (rp = abI[aN.aO((aP.aj - 1) * ad.el[player], aP.d3)], eK.lf() < 1920 && (rp = Math.max(aN.aO(100 * (13440 - 6 * eK.lf()), 1920), rp)), aTV = dX.a8Z(player), ad.er[player] > aTV && (rp -= aN.aO(
			2 * rp * (ad.er[player] - aTV), aTV)), Math.min(Math.max(rp, 0), 700))
	}

	function abS(h3) {
		for (var el = ad.el, h0 = du.h0, j = du.ek - 1; 0 <= j; j--) {
			var am = h0[j];
			aS.aT.aY(am, aN.aO(h3 * el[am], 32))
		}
	}

	function abP() {
		var aVY = aP.cs;
		dN.gQ[0] = ad.er[aVY] - ad.hB[aVY]
	}

	function abR(k) {
		var aVY = aP.cs,
			aVY = ad.er[aVY] - ad.hB[aVY] - dN.gQ[0];
		dX.aPA += aVY, aZ.w8[k] += aVY
	}
	this.aPA = 0, this.yE = function() {
		for (var h = aP.aj, j = (abI = new Uint16Array(h), 0); j < h; j++) abI[j] = 100 + kL(aN.aO(25600 * j, h - 4), 9)
	}, this.f = function() {
		(this.aPA = 0) === aP.data.iIncomeType ? this.py = abJ : 1 === aP.data.iIncomeType ? this.py = function(player) {
			return aN.aO(aP.data.iIncomeValue * abJ(player), 64)
		} : this.py = function(player) {
			return aN.aO(aP.data.iIncomeData[player] * abJ(player), 64)
		}
	}, this.iL = function() {
		if (eK.lf() % 10 == 9 && (dX.aPA = 0, function() {
				abP();
				for (var h0 = du.h0, er = ad.er, j = du.ek - 1; 0 <= j; j--) {
					var am = h0[j],
						abQ = aN.aO(dX.py(am) * er[am], 1e4);
					aS.aT.aY(am, Math.max(abQ, 1))
				}
				abR(9)
			}(), function() {
				if (0 !== aP.data.aIncomeType) {
					if (abP(), 1 === aP.data.aIncomeType)
						for (var el = ad.el, h0 = du.h0, h3 = aP.data.aIncomeValue, j = du.ek - 1; 0 <= j; j--) {
							var am = h0[j];
							aS.aT.aY(am, aN.aO(h3 * el[am], 128))
						} else 2 === aP.data.aIncomeType && function() {
							for (var el = ad.el, h0 = du.h0, h3 = aP.data.aIncomeData, j = du.ek - 1; 0 <= j; j--) {
								var am = h0[j];
								aS.aT.aY(am, aN.aO(h3[am] * el[am], 128))
							}
						}();
					abR(18)
				}
			}(), eK.lf() % 100 == 99)) {
			if (abP(), 0 === aP.data.tIncomeType) abS(32);
			else if (1 === aP.data.tIncomeType) abS(aP.data.tIncomeValue);
			else
				for (var el = ad.el, h0 = du.h0, h3 = aP.data.tIncomeData, j = du.ek - 1; 0 <= j; j--) {
					var am = h0[j];
					aS.aT.aY(am, aN.aO(h3[am] * el[am], 32))
				}
			abR(8)
		}
	}, this.a8Z = function(player) {
		return Math.min(100 * ad.el[player], aP.cp)
	}, this.a5S = function(player, hM) {
		dP.a7f(player, hM, dN.gR[0], 0), aS.aT.aY(hM, dN.gR[0]), aZ.uZ(player, hM), eG.ma(player, dN.gR[0] + dN.gR[1]), eG.md(hM, dN.gR[0]), aS.aT.hU(player)
	}, this.eq = function() {
		for (var h = du.ek, j2 = du.h0, bl = 0, hC = ad.er, j = 0; j < h; j++) bl += hC[j2[j]];
		return bl
	}, this.et = function(abL) {
		for (var am, h = du.ek, j2 = du.h0, bl = 0, hC = ad.er, gu = de.gu, j = 0; j < h; j++) gu[am = j2[j]] === abL && (bl += hC[am]);
		return bl
	}
}

function aM() {
	abW() ? (abX(), t !== aP.aj && abY()) : aJ()
}

function abY() {
	aC.a8F(), aC.a8G(ad.vD[t]), aC.a8G(ad.sn[t]), a2.ra(a2.cI) && aC.a8G(ad.rb[t]), aC.a8H(ad.ac[t]), aC.a8I(ad.sn[t]), aC.a8I(ad.rb[t]), aC.a8J(), aC.a8K()
}

function abX() {
	a0 = !0, a8.aOt(p, o, q), a8.aOu(p, o), ad.el[p] += u, aC.a8C(), abZ()
}

function abW() {
	return (t === aP.aj ? aba : abb)()
}

function abb() {
	var abc = u * aP.aQ,
		abd = abe(),
		abf = abg(),
		abd = abc + 2 * abd + abf,
		abi = s * u;
	return abd < abi ? (q -= abd, aZ.aa(p, abd, 13), abj(abd - abc, abf), !0) : r && 0 === abf ? (q -= abi, abi += aS.aT.aU(p, abd - abi + 1), aZ.aa(p, abi, 13), abj(abi - abc, 0), !0) : (q -= abi, aZ.aa(p, abi, 13), abj(abi - abc, abf), !1)
}

function abj(abi, abf) {
	if (0 < abf) {
		if (abi <= abf) return aZ.aa(t, abi, 13), void a8.aOp(t, p, abf - abi);
		a8.aOp(t, p, 0), abi -= abf
	}
	abi = aN.aO(abi, 2), abi = Math.min(ad.er[t], abi), aZ.aa(t, abi, 13), ad.er[t] -= abi
}

function abg() {
	return a8.aOo(t, p)
}

function abe() {
	return aN.aO(u * ad.er[t], 1 + aN.aO(10 * ad.el[t], 16))
}

function aba() {
	var abk = u * aP.aQ;
	return q -= abk, aZ.aa(p, abk, 13), !0
}

function abZ() {
	for (var j = u - 1; 0 <= j; j--) ad.ac[p].push(w[j]), ad.vD[p].push(w[j]), ag.ai(w[j], p)
}

function l0(km) {
	var kn = document.createElement("div"),
		ks = document.createElement("div");
	this.vv = function() {
			ks.textContent = "", bx.g6.fQ(1);
			for (var aNp = document.createDocumentFragment(), abl = bx.b0.cB[0], by = bx.by.c3[abl], bw = bx.by.bw[abl], j = 0; j < by.length; j++) ! function(aNp, g3, abn, abl) {
				var a2G = document.createElement("span");
				a2G.textContent = (abn ? "🟢 " : "⚪ ") + bx.g8.aT8(g3, abl), a2G.style.color = bx.g8.aHJ(g3.gA), a2G.style.cursor = "pointer", a2G.style.margin = "0.2em 0.2em 0.2em 0.2em", a2G.style.width = a2G.style.maxWidth = 2 === abl ?
					"10em" : "9em", a2G.style.height = a2G.style.maxHeight = "1.4em", a2G.style.whiteSpace = "nowrap", a2G.style.overflow = "hidden", a2G.style.textOverflow = "ellipsis", a2G.style.font = "inherit", a2G.style.display =
					"inline-block", bx.g8.aAp(g3) && (a2G.style.textDecoration = "underline"), g3.jh && (a2G.style.textDecorationLine = "underline", a2G.style.textDecorationStyle = "dotted");
				a2G.onclick = function(b8) {
					km(b8, g3)
				}, l3.l4() || (a2G.onmouseover = function(b8) {
					bx.g6.g2(b8, g3, 1)
				}), aNp.appendChild(a2G)
			}(aNp, by[j], j < bw, abl);
			ks.appendChild(aNp)
		}, this.show = function(aNs) {
			aNs.appendChild(kn)
		}, this.fQ = function(aNs) {
			c9.removeChild(aNs, kn)
		}, this.resize = function() {
			ks.style.fontSize = aS.bG.bK(aS.bG.bJ(.02, .3))
		}, kn.style.top = "0", kn.style.left = "0", kn.style.width = kn.style.height = "100%", kn.style.overflowX = "hidden", kn.style.overflowY = "auto", kn.style.font = "inherit", ks.style.font = "inherit", ks.style.margin = "0.4em", kn
		.appendChild(ks)
}

function aB4() {
	var ew, aIS;

	function abo() {
		c9.wO();
		var bq = dw.xB(aIS.fA());
		(aP.d2 && 0 < bq.length && bq === dw.eU.eV || dw.pb.qc(bq)) && dw.x8()
	}
	this.show = function(a20) {
		this.x7(a20), ew.show(), this.resize()
	}, this.x7 = function(a20) {
		0 === aP.d2 ? a20 ? aIS.fN(a20) : aP.dM.length && aIS.fN(aP.dM) : (aP.d1 || (dw.eU.eV = dw.eW.eX()), aIS.fN(dw.xC(dw.eU.eV)))
	}, this.fQ = function() {
		ew.fQ()
	}, this.resize = function() {
		ew.resize(), aIS.resize()
	}, this.fR = function(bt) {
		2 === bt ? ew.fS[0].fT() : abo()
	}, ew = new f0(L(244), [new bV("⬅️ " + L(43), function() {
		c9.a0H(1)
	}), new bV(L(500), function() {
		aIS.aIV()
	}), new bV(L(501), function() {
		aIS.aIW()
	}), new bV(L(502), function() {
		aIS.clear()
	}), new bV(L(503), function() {
		abo()
	})]), aIS = new fM(L(504)), ew.f3.appendChild(aIS.b8)
}

function x3() {
	this.ig = null, this.ih = null, this.ii = null, this.ij = null, this.il = null, this.io = null, this.eV = "";
	var abp = 0;
	this.f = function() {
		this.ig = [], this.ih = [], this.ii = [], this.ij = [], this.il = [0], this.io = [0], abp = 0, this.eV = ""
	}, this.abG = function(id, gf, gh, gj) {
		aP.d1 || 2 === aP.d2 || (0 === this.il[abp] && (this.io[abp] ? (this.il.push(1), this.io.push(0), abp++) : this.il[abp] = 1), this.ig.push(id), this.ih.push(gf), this.ii.push(void 0 === gh ? 0 : gh), this.ij.push(void 0 === gj ? 0 : gj),
			this.io[abp]++)
	}, this.iL = function() {
		0 === this.il[abp] ? this.io[abp]++ : (this.il.push(0), this.io.push(0), abp++)
	}
}

function aB3() {
	var r9, a0G, fB, fF;

	function abq() {
		qN.aSK !== l.bj.data[12].value ? (qN.f(), c9.ed(8, 1, new rX(30))) : c9.ed(1)
	}
	this.show = function() {
			r9.show(), this.resize()
		}, this.fQ = function() {
			r9.fQ()
		}, this.resize = function() {
			r9.resize(), a0G.resize()
		}, this.fR = function(bt) {
			2 === bt && r9.fS[0].fT()
		}, r9 = new f0(L(246), [new bV("⬅️ " + L(43), abq), new bV(L(505), function() {
			c9.wO(), l.m.wQ(), c9.ed(2)
		})]), fB = [], (fF = new fG).fH(L(506)), fF.jI(L(507)), fB.push(fF),
		function(fB) {
			var fF = new fG,
				bk = (fF.fH(L(53)), qN.data.aTO());
			fF.fI(new a({
				i: bk,
				value: qN.data.aTR(bk)
			}, function(k) {
				return l.m.n(12, bk[k].split(":")[0]), !0
			})), fB.push(fF)
		}(fB),
		function(fB) {
			var fF = new fG,
				abu = (fF.fH(L(526)), []);
			fF.fJ(new i9([new bV(L(52), function(b8) {
				bn.bs();
				for (var j = 0; j < abu.length; j++) abu[j].b8.value = bn.bi[j];
				return aS.bG.bZ(b8), !0
			}).button]));
			for (var j = 0; j < bn.bg.length; j++) {
				fF.jI(bn.bg[j]);
				for (var bc = 0; bc < 2; bc++) {
					var k = 2 * j + bc,
						a0P = new fK({
							value: bn.bi[k],
							k: -1
						});
					a0P.b8.abv = k, abu.push(a0P), a0P.b8.addEventListener("keydown", function(b8) {
						b8.preventDefault();
						var code = b8.code;
						b8.target.value = code, bn.bo(b8.target.abv, code)
					}), bc && (a0P.b8.style.marginLeft = "4%"), a0P.b8.style.width = "48%", fF.fJ(a0P)
				}
			}
			fB.push(fF)
		}(fB), (fF = new fG).fH(L(65)), fF.fI(new a({
			i: ["1", "2"],
			value: a3O.aGV - 1
		}, function(j) {
			a3O.aGV = j + 1
		})), fB.push(fF), (fF = new fG).fH(L(508)), l.bj.data[1].i = [L(509), L(510), L(511), L(512)], fF.fI(new a(l.bj.data[1])), fB.push(fF), (fF = new fG).fH(L(513)), l.bj.data[9].i = [L(510), L(514), L(515)], fF.fI(new a(l.bj.data[9])), fB.push(
			fF), (fF = new fG).fH(L(516)), l.bj.data[11].i = [L(517), L(328), L(518)], fF.fI(new a(l.bj.data[11])), fB.push(fF), (fF = new fG).fH(L(519)), fF.fJ(new kW(l.bj.data[2])), fB.push(fF), (fF = new fG).fH(L(520)), fF.fJ(new kW(l.bj.data[
		7])), fB.push(fF), (fF = new fG).fH(L(521)), fF.fJ(new kW(l.bj.data[8])), fB.push(fF), (fF = new fG).fH(L(522)), fF.fJ(new fK(l.bj.data[5])), fB.push(fF), (fF = new fG).fH(L(523)), fF.fJ(new kW(l.bj.data[13], L(524))), fF.fJ(new kW(l.bj.data[
			14], L(525))), fB.push(fF), a0G = new f2(r9.f3, fB)
}
self.aiCommand746 = function(h9) {
	0 === h9 ? a3e() : 1 !== h9 || !bD || 1 !== bD.id || bD.jn < 14 || l3.aAS()
}, aV7(), setTimeout(a3e, 1e4), window.onload = function() {
	a3e()
};