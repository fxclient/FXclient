var nm, nl, nn, o4, o2, nW, np, pM, o9, pN, pO, pP, ni, wt, eX, wu, wv, gJ, p, mG, pg, a4X, r, a9t, a9u, a9v, m, lU, mY, a6k, pt, p7, lE, y, xy, a08, fp, fr, a09, a6i, vs, b6, i4, eu, nj, fv, j7, fe, a9w, a9x, a9y, tr, tq, qB, j0, it, a9z, wb, l4,
	a06, a9f, a0A, qW, xf, a5, eG, a4Z, bA, qJ, aA0, a13, a4Y, yD, aA1, vn, q7, ls, aa, aF, lJ, n4, n2, n9, iH, n7, yk, tC, uY, dV, pv, ao, eC, a07, aA2, mO, dx, a9k, aC, a4T, a4a, a6g, v1, a6j, aA3, ev, es, bW, iy, lV, j, eL, uh, fg, a1h, aK, aA4,
	gM, aA5, mK, f7, a0L, iR, j3, q5, nZ, aOn, re, a7b, a6b, gD, os, l5, l6, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span",
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
	var b, c, d, e, f = 0,
		g = 0;

	function u() {
		return Math.pow(Math.pow(d - b, 2) + Math.pow(e - c, 2), .5)
	}

	function l(i) {
		b = a5.a6 * i.touches[0].clientX, c = a5.a6 * i.touches[0].clientY, d = a5.a6 * i.touches[1].clientX, e = a5.a6 * i.touches[1].clientY
	}
	this.h = function(i) {
		return 1 < i.touches.length ? (g = j.k, f = 3, l(i), m.n(), !0) : (f = 0, !1)
	}, this.o = function(i) {
		var t, w, x;
		return 0 !== p.q && 1 < i.touches.length && (f = Math.max(f - 1, 0), r.s() && (t = u(), l(i), i = u(), w = Math.floor((b + d) / 2), x = Math.floor((c + e) / 2), y.z(w, x, Math.max(.125, i) / Math.max(.125, t)), j.a0 = !0), !0)
	}, this.a1 = function() {
		var a2, a3;
		return !!(f && (f = 0, j.k < g + 500)) && (a2 = (b + d) / 2, a3 = (c + e) / 2, m.a4(a2, a3), m.click(a2, a3, !0) && (j.a0 = !0), !0)
	}
}

function a7(a8, type, a9, aA) {
	var i;
	this.i = document.createElement("input"), (i = this.i).type = type ? "number" : "text", i.id = "input" + aC.aD.aE++, i.value = a8.value, i.style.width = "100%", i.style.userSelect = "none", i.style.outline = "none", i.style.resize = "none", i
		.style.border = "inherit", i.style.font = "inherit", i.style.color = aF.aG, i.style.backgroundColor = aF.aH, i.style.fontSize = "1em", i.style.padding = "0.1em 0.2em", i.addEventListener("focus", function() {
			a5.aI++
		}), i.addEventListener("blur", function() {
			a5.aI--, -1 !== a8.aJ && aK.aL.aM(a8.aJ, i.value)
		}), i.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a8.aJ && aK.aL.aM(a8.aJ, i.value), a9 ? a9() : i.blur())
		}), aA && i.addEventListener("input", function(aN) {
			aA(aN)
		})
}

function aO() {
	var aP = 32,
		aQ = new Array(2);

	function aS(aT) {
		var a2, a3, aU, aW, aV, aY = aP,
			aZ = aa.ab.aS(aY, aY),
			ac = aa.ab.getContext(aZ, !0),
			ad = aa.ab.getImageData(ac, aY, aY),
			ae = ad.data,
			af = (aY >> 1) - .5,
			ag = Math.sqrt(af * af);
		for (ae.fill(255), a3 = 0; a3 < aY; a3++)
			for (a2 = 0; a2 < aY; a2++) aV = a2 - af, aW = a3 - af, aU = 4 * (a3 * aY + a2), aV = 714 * (ag - Math.sqrt(aV * aV + aW * aW)) / ag, ae[2 + aU] = aT, ae[3 + aU] = 255 < aV ? 0 : aV;
		return ac.putImageData(ad, 0, 0), aZ
	}
	this.aR = -1, this.aB = function() {
		this.aR = -1, aQ[0] || (aQ[0] = aS(255), aQ[1] = aS(0))
	}, this.ah = function(ac, ai, a2, a3, aj, ak) {
		aa.al.am(p.an) && (ac.setTransform(ai *= 4 / 3 * .625, 0, 0, ai, a2 - (aj *= 4 / 3), a3 - aj), ac.drawImage(aQ[+(ao.aD.ap[ak] === this.aR)], 0, 0))
	}
}

function aq() {
	this.ar = new at, this.au = new av, this.aw = new ax, this.aB = function() {
		p.ay || this.ar.aB()
	}, this.az = function() {
		p.ay || (this.ar.az(), 3 !== aC.b1) || j.b2() % 15 != 5 && 2 !== p.q || aC.b3().b4()
	}, this.b5 = function() {
		0 === p.q && b6.b7(), p.b8.b9(), p.data.canvas = null, bA.aD.close(bA.aD.bB, 3257), bA.aD.bB = 0, p.data.isReplay = 1, p.bC()
	}, this.bD = function(bE) {
		var ak = bE.indexOf("=");
		return 0 <= ak ? bE.substring(ak + 1) : bE
	}, this.bF = function(bE) {
		return bE
	}
}

function bG(bH, bI, bJ, bK, bL) {
	var self;
	this.bM = document.createElement("span"), this.resize = function() {
			this.bM.style.fontSize = ((bK - bJ) * bI.offsetHeight).toFixed(1) + "px"
		}, (self = this).bM.textContent = bH, self.bM.style.color = aF.aG, self.bM.style.font = "inherit", self.bM.style.margin = "0.1em 0.6em", self.bM.style.pointerEvents = "none", bL && (self.bM.style.fontWeight = "bold"), self.bM.style
		.whiteSpace = "nowrap", self.bM.style.display = "block", bI.appendChild(self.bM)
}

function bO(bP, bQ) {
	var bR;
	this.resize = function() {
		for (var ak = 0; ak < bP.length; ak++) aa.ab.bU(bP[ak].button);
		bR.style.gap = bR.style.padding = aa.ab.bV(bW.bX)
	}, (bR = document.createElement("div")).style.display = "grid", bR.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", bR.style.overflowY = "auto", bR.style.gridAutoRows = "5.3em", bR.style.maxHeight = "100%";
	for (var ak = 0; ak < bP.length; ak++) bP[ak].bT(1), bR.appendChild(bP[ak].button);
	bQ.appendChild(bR)
}

function bY() {
	var aT = aa.color;
	this.bZ = aT.ba(0, 0, 0), this.aH = aT.bb(0, 0, 0, .7), this.bc = aT.bb(0, 0, 0, .5), this.bd = aT.bb(0, 0, 0, .85), this.be = aT.bb(0, 0, 0, .75), this.bf = aT.bb(0, 0, 0, .6), this.bg = aT.bb(0, 0, 0, .35), this.aG = aT.ba(255, 255, 255), this
		.bh = aT.bb(255, 255, 255, .3), this.bi = aT.bb(255, 255, 255, .6), this.bj = aT.bb(255, 255, 255, .4), this.bk = aT.bb(255, 255, 255, .25), this.bl = aT.bb(255, 255, 255, .85), this.bm = aT.bb(255, 255, 255, .75), this.bn = aT.bb(255, 255,
			255, .15), this.bo = aT.bb(255, 255, 255, .11), this.bp = aT.ba(128, 128, 128), this.bq = aT.bb(64, 64, 64, .75), this.br = aT.bb(88, 88, 88, .83), this.bs = aT.bb(60, 60, 60, .85), this.bt = aT.bb(80, 60, 60, .85), this.bu = aT.ba(170,
			170, 170), this.bv = aT.ba(200, 235, 245), this.bw = aT.ba(30, 255, 30), this.bx = aT.ba(0, 200, 0), this.by = aT.ba(128, 255, 128), this.bz = aT.bb(10, 65, 10, .75), this.c0 = aT.bb(0, 255, 0, .6), this.c1 = aT.bb(0, 255, 0, .5), this
		.c2 = aT.bb(0, 200, 0, .5), this.c3 = aT.bb(0, 100, 0, .75), this.c4 = aT.bb(0, 60, 0, .8), this.c5 = aT.bb(0, 255, 0, .3), this.c6 = aT.bb(0, 180, 0, .6), this.c7 = aT.bb(0, 120, 0, .85), this.c8 = aT.ba(0, 120, 0), this.c9 = aT.bb(0, 70, 0,
			.85), this.cA = aT.ba(190, 230, 190), this.cB = aT.ba(0, 255, 0), this.cC = aT.ba(255, 120, 120), this.cD = aT.ba(255, 160, 160), this.cE = aT.ba(255, 70, 70), this.cF = aT.ba(230, 0, 0), this.cG = aT.bb(220, 0, 0, .6), this.cH = aT.bb(
			255, 100, 100, .8), this.cI = aT.bb(100, 0, 0, .85), this.cJ = aT.bb(60, 0, 0, .85), this.cK = aT.bb(200, 0, 0, .6), this.cL = aT.bb(120, 0, 0, .85), this.cM = aT.ba(255, 70, 10), this.cN = aT.ba(230, 190, 190), this.cO = aT.ba(255, 0,
		0), this.cP = aT.ba(255, 0, 255), this.cQ = aT.bb(60, 0, 60, .85), this.cR = aT.bb(0, 60, 60, .85), this.cS = aT.bb(10, 60, 60, .9), this.cT = aT.bb(0, 96, 96, .75), this.cU = aT.ba(0, 255, 255), this.cV = aT.ba(160, 160, 255), this.cW = aT
		.bb(0, 40, 90, .75), this.cX = aT.bb(0, 0, 255, .6), this.cY = aT.ba(200, 200, 255), this.cZ = aT.bb(50, 50, 255, .83), this.ca = aT.bb(20, 90, 150, .75), this.cb = aT.ba(255, 120, 100), this.cc = aT.bb(255, 255, 0, .5), this.cd = aT.bb(255,
			255, 150, .2), this.ce = aT.ba(255, 255, 0), this.cf = aT.ba(255, 255, 200), this.cg = aT.bb(200, 200, 0, .6), this.ch = aT.bb(140, 120, 0, .75), this.ci = aT.bb(180, 160, 40, .75), this.cj = aT.bb(70, 50, 20, .85), this.ck = aT.bb(30,
			30, 0, .85), this.cl = aT.bb(60, 60, 0, .85), this.cm = aT.ba(255, 255, 100), this.cn = aT.ba(255, 255, 140), this.co = aT.bb(255, 140, 0, .75), this.cp = aT.bb(70, 40, 0, .85), this.cq = aT.ba(255, 150, 0), this.cr = aT.bb(255, 200, 80,
			.85), this.cs = aT.bb(0, 0, 0, 0), this.ct = aT.bb(255, 255, 255, 0), this.cu = aT.bb(254, 254, 254, 0)
}

function cv() {
	this.cw = new cx, this.cy = new cz, this.d0 = new d1, this.aB = function() {
		this.cw.aB()
	}
}

function d2() {
	var d3, d4, d5, dI;

	function d8() {
		dC(), 2 !== p.data.tIncomeType && (p.data.tIncomeData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		2 === p.data.tIncomeType && aa.dF.dG(d5.dH(), p.data.tIncomeData, 255)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(0), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), dM.dP(new dQ({
			dR: [L(3), L(4), L(5)],
			value: p.data.tIncomeType
		}, function(aJ) {
			dC(), 2 !== aJ || p.data.tIncomeData || (p.data.tIncomeData = new Uint8Array(p.dS), p.data.tIncomeData.fill(32)), p.data.tIncomeType = aJ, aC.dT(26)
		})), dI.push(dM)
	}(dI = []), function(dI) {
		var dM;
		1 === p.data.tIncomeType && ((dM = new dN).dO("Value"), dM.dU(new a7({
			aJ: -1,
			value: p.data.tIncomeValue
		}, 1, 0, function(i) {
			var value = dV.dW(Math.floor(i.target.value), 0, 255);
			i.target.value = p.data.tIncomeValue = value
		})), dI.push(dM))
	}(dI), function(dI) {
		var dM;
		2 === p.data.tIncomeType && ((dM = new dN).dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.tIncomeData, 4)), dM.dU(d5), dI.push(dM))
	}(dI), dI))
}

function de() {
	var dh, di, dj, dk, dl, dm, dn, dp, dq, dr, df = [
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
		dg = [
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

	function e4(eE, s) {
		for (var ak = eE; ak < s; ak++) dh[ak] = 4 * dV.eF(64 * eG.random(), eG.value(100)), di[ak] = 4 * dV.eF(64 * eG.random(), eG.value(100)), dj[ak] = 4 * dV.eF(64 * eG.random(), eG.value(100))
	}

	function e2(eE, s) {
		for (var colorsData = p.data.colorsData, ak = eE; ak < s; ak++) {
			var eH = colorsData[ak];
			dh[ak] = 4 * (eH >> 12), di[ak] = 4 * (eH >> 6 & 63), dj[ak] = 4 * (63 & eH)
		}
	}

	function el(ai, en) {
		eX[ai] = 0, eX[ai + 1] = 0, eX[ai + 2] = en, eX[ai + 3] = 0, eo(ai)
	}

	function eo(ai) {
		var a2;
		es.et || (a2 = eu.eN(ai), ai = eu.eO(ai), es.et = a2 >= ev.ew[0] && a2 <= ev.ew[2] && ai >= ev.ew[1] && ai <= ev.ew[3])
	}
	this.dv = new Int32Array(4), this.dw = function() {
		var dv = this.dv;
		dv[0] = -4 * dx.dy, dv[1] = 4, dv[2] = -dv[0], dv[3] = -dv[1]
	}, this.aB = function() {
		if (dh = new Uint8Array(p.dS), di = new Uint8Array(p.dS), dj = new Uint8Array(p.dS), dk = new Uint8Array(p.dS), dl = new Uint8Array(p.dS), dm = new Uint8Array(p.dS), dn = new Uint8Array(p.dS), dp = new Uint8Array(p.dS), dq =
			new Uint8Array(p.dS), dr = new Uint8Array(p.dS), this.dz = new Uint8Array(p.dS), p.e0)
			for (var eK = eL.eK, ak = p.dS - 1; 0 <= ak; ak--) {
				var aT = eK[ak],
					af = dV.eF((dg[aT][3] + 1) * eG.random(), eG.value(100));
				dh[ak] = df[aT][0] + af * dg[aT][0], di[ak] = df[aT][1] + af * dg[aT][1], dj[ak] = df[aT][2] + af * dg[aT][2]
			} else 0 === p.data.colorsType ? p.data.selectableColor ? (e2(0, p.e3), e4(p.e3, p.dS)) : e4(0, p.dS) : e2(0, p.dS);
		! function() {
			var ak, eI;
			for (ak = p.dS - 1; 0 <= ak; ak--) eI = dV.eF(dh[ak] + di[ak] + dj[ak], 3), dh[ak] += eJ(eI - dh[ak], 2), di[ak] += eJ(eI - di[ak], 2), dj[ak] += eJ(eI - dj[ak], 2), dh[ak] -= dh[ak] % 4, di[ak] -= di[ak] % 4, dj[ak] -= dj[ak] % 4
		}(),
		function() {
			for (var ak = p.dS - 1; 0 <= ak; ak--) dh[ak] += dV.eF(ak, 128), di[ak] += dV.eF(ak % 128, 32), dj[ak] += dV.eF(ak % 32, 8), dk[ak] = ak % 8
		}(), this.e7(),
			function() {
				for (var ak = p.dS - 1; 0 <= ak; ak--) dl[ak] = dh[ak] < 32 ? dh[ak] + 32 : dh[ak] - 32, dm[ak] = di[ak] < 32 ? di[ak] + 32 : di[ak] - 32, dn[ak] = dj[ak] < 32 ? dj[ak] + 32 : dj[ak] - 32
			}(),
			function() {
				for (var ak = p.dS - 1; 0 <= ak; ak--) dp[ak] = 235 < dh[ak] ? dh[ak] - 20 : dh[ak] + 20, dq[ak] = 235 < di[ak] ? di[ak] - 20 : di[ak] + 20, dr[ak] = 235 < dj[ak] ? dj[ak] - 20 : dj[ak] + 20
			}()
	}, this.eA = function(player) {
		var eB = eC.eD;
		return eB[0] = dh[player], eB[1] = di[player], eB[2] = dj[player], eB
	}, this.e7 = function() {
		for (var ak = p.dS - 1; 0 <= ak; ak--) this.dz[ak] = dh[ak] + di[ak] + dj[ak] < 280 ? 0 : 1
	}, this.eN = function(ai) {
		return dV.eF(ai, 4) % dx.dy
	}, this.eO = function(ai) {
		return dV.eF(ai, 4 * dx.dy)
	}, this.eP = function(a2, a3) {
		return Math.floor(4 * (a3 * dx.dy + a2))
	}, this.eQ = function(ai) {
		var dv = this.dv;
		return this.eR(ai + dv[0]) || this.eR(ai + dv[1]) || this.eR(ai + dv[2]) || this.eR(ai + dv[3])
	}, this.eS = function(ai) {
		var dv = this.dv;
		return this.eT(ai + dv[0]) || this.eT(ai + dv[1]) || this.eT(ai + dv[2]) || this.eT(ai + dv[3])
	}, this.eU = function(ai, player) {
		var dv = this.dv;
		return this.eV(ai + dv[0], player) || this.eV(ai + dv[1], player) || this.eV(ai + dv[2], player) || this.eV(ai + dv[3], player)
	}, this.eW = function(ai) {
		return 208 <= eX[ai + 3]
	}, this.eY = function(player, ai) {
		return this.eW(ai) && this.eZ(player, ai)
	}, this.eZ = function(player, ai) {
		return player === this.ea(ai)
	}, this.eb = function(ai) {
		return 208 <= eX[ai + 3] && eX[ai + 3] < 224
	}, this.ec = function(ai) {
		return 224 <= eX[ai + 3] && eX[ai + 3] < 248
	}, this.ed = function(ai) {
		for (var dv = this.dv, ak = 3; 0 <= ak; ak--)
			if (this.ee(ai + dv[ak])) return !0;
		return !1
	}, this.ef = function(ai) {
		return this.eW(ai) || this.eg(ai)
	}, this.ee = function(ai) {
		return 0 === eX[ai + 3] && 2 === eX[ai + 2]
	}, this.eg = function(ai) {
		return 0 === eX[ai + 3] && 1 === eX[ai + 2]
	}, this.eh = function(ai) {
		return 0 === eX[ai + 3] && 3 === eX[ai + 2]
	}, this.eT = function(ai) {
		return 0 === eX[ai + 3] && 5 === eX[ai + 2]
	}, this.eR = function(ai) {
		return 0 === eX[ai + 3] && 3 <= eX[ai + 2]
	}, this.ei = function(ai) {
		return (eX[ai] >> 1 << 8) + eX[ai + 1]
	}, this.ej = function(ai) {
		return 1 & eX[ai]
	}, this.eV = function(ai, player) {
		return this.eg(ai) || this.eW(ai) && player !== this.ea(ai)
	}, this.ea = function(ai) {
		return eX[ai] % 4 * 128 + eX[ai + 1] % 4 * 32 + eX[ai + 2] % 4 * 8 + eX[ai + 3] % 8
	}, this.ek = function(ai) {
		el(ai, 1)
	}, this.em = function(ai) {
		el(ai, 2)
	}, this.ep = function(ai, player) {
		eX[ai] = dh[player], eX[ai + 1] = di[player], eX[ai + 2] = dj[player], eX[ai + 3] = 208 + dk[player], eo(ai)
	}, this.eq = function(ai, player) {
		eX[ai] = dl[player], eX[ai + 1] = dm[player], eX[ai + 2] = dn[player], eX[ai + 3] = 224 + dk[player], eo(ai)
	}, this.er = function(ai, player) {
		eX[ai] = dp[player], eX[ai + 1] = dq[player], eX[ai + 2] = dr[player], eX[ai + 3] = 248 + dk[player], eo(ai)
	}
}

function ex() {
	this.L84 = ["Territorial Income", "Back", "Options", "Default", "Uniform", "Customized", "Admin Election", "Blockchain", "Clan Leader Election", "📜 Logs", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator",
		"Lead Moderator", "Head Admin", "Quit Game", "More", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Player Count", "Game Mode", "Colors", "Random", "Bot Difficulty", "Mixed", "Team dependent", "Clustered", "Player Names",
		"Kingdom Names", "Simple Names", "Additional Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "The prize money was distributed as follows:", "and {10} more",
		"You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Ship launched!", "Ship intercepted!",
		"Next Contest: ", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay data here!", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "You are leaving Territorial.io!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "🛠️ List Options",
		"Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Selectable Name", "second played", "seconds played", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Players",
		"Close {button}", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Activated", "Team {0}", "Team {0} won the game!", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.",
		"Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Richest Players", "Patreon Members", "Index", "Username",
		"Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Seconds Ago", "Accuser", "Accused", "Percentage", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted",
		"Bio Removed", "Spawning", "Selectable Spawn", "🧈 Gold Transfer", "Source Account", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "📰 Propaganda", "Links", "Propaganda Text", "Preview", "Show", "Launch Campaign", "Gold Investment", "Launch", "Humans", "Bots", "Spectators", "Threshold",
		"Growth", "Income", "Time", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar",
		"Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Replay Error", "Warning", "Loading...",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.",
		"{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}",
		"Player: {0}", "Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Clans", "Clan Members", "Admins", "1v1 Players", "🏆 Leaderboards", "You are leaving Territorial.io.", "📜 Game Log", "Incoming Boat!", "Incoming Ship!", "Multiplayer",
		"My Account", "Game Menu", "Your Kingdom's Name", "Propaganda", "Report Abuse", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:",
		"LEADERBOARD", "Adjust", "Selectable Color", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe", "More Options", "Y-Axis Compression", "{0} defeated {1}!", "Procedural Map", "Realistic Map",
		"Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe",
		"World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible",
		"Type your message here...", "🔑 My Account", "📈 Clan Charts", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Loading", "Territory", "Numbers", "Statistics", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Login", "➡️ Login", "Account Name", "Password", "Hide", "Security Tip", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter",
		"Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Copy", "Request New Password",
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
		"If you hide Patreon, no one can share their membership with you.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Clan Chart"
	]
}

function ey() {
	function f6(fB) {
		f7.aD.f1 && 1 === f7.aD.f0[2] && aC.fC(29).fD(), f7.aD.f1 = 0, aC.fC(29).fE(), 0 !== f7.aD.ez[f7.aD.f0[0]].fF && !fB || aC.fC(29).fG(), f7.fH.fI()
	}
	this.ez = new Array(4), this.f0 = [0, 0, 1, 0], this.f1 = 0, this.f2 = [0, 0], this.aB = function() {
		for (var ak = 0; ak < this.ez.length; ak++) this.ez[ak] = new f3;
		this.f0[0] = aK.f4.data[158].value
	}, this.f5 = function() {
		f6(!0), f7.f8.aB()
	}, this.f9 = function() {
		f7.f8.f9();
		for (var ak = 0; ak < f7.aD.ez.length; ak++) {
			var fJ = f7.aD.ez[ak];
			0 === fJ.fF ? fJ.fK = 0 : (fJ.fL = Math.max(fJ.fL - fJ.fK % 2, 0), fJ.fK++)
		}
		f6(!1)
	}, this.fM = function(fN) {
		this.f0[0] !== fN || this.f0[2] || aC.fC(29).fO()
	}
}

function fP() {
	var fR, fS, a3, fT, fU, fV, canvas, fW, fX, fY, fZ, fa, fb, fc;
	this.a2 = 0, this.fQ = 0, this.aB = function() {
		fV = p.fd, fa = "rgba(0,100,0,0.8)", fb = "rgba(150,0,0,0.8)", fX = fZ = !0, fY = fe.ff[p.an], this.resize()
	}, this.resize = function() {
		fS = Math.floor((fg.fh.fi() ? .305 : .24) * a5.fj), this.fQ = Math.floor(.5 + .13 * fS), fS = Math.floor(6 * this.fQ), fR = aa.ab.fk(1, Math.floor(.8 * this.fQ)), fU = aa.ab.fk(1, Math.floor(.45 * this.fQ)), fc = Math.floor(.5 * this.fQ),
			dx.fl.font = fR, a3 = bW.gap, fT = Math.floor(1 + .13 * this.fQ), (canvas = document.createElement("canvas")).width = fS, canvas.height = this.fQ, fW = canvas.getContext("2d", {
				alpha: !0
			}), aa.ab.textBaseline(fW, 1), aa.ab.textAlign(fW, 1), this.fm()
	}, this.fn = function() {
		return fg.fh.fi() && a5.fS < 1.2 * a5.fQ
	}, this.fo = function() {
		this.fn() ? this.a2 = a5.fS - fS - bW.gap : this.a2 = Math.floor(fp.fq() + (a5.fS - fp.fq() - fr.fS - fS) / 2 - .5 * bW.gap)
	}, this.fs = function() {
		fX && (fX = !1, this.fm())
	}, this.fm = function() {
		fW.font = fR, fW.clearRect(0, 0, fS, this.fQ), fW.fillStyle = fZ ? fa : fb, fW.fillRect(0, 0, fS, this.fQ), fW.fillStyle = aF.bi;
		var aT = this.ft(),
			fx = (this.fu(), fW.fillStyle = fe.ff[p.an] >= fv.fw(p.an) ? aF.cD : aF.aG, aa.dZ.fy(fY)),
			fx = (fW.fillText(fx, Math.floor(fS / 2), fc), fW.measureText(fx).width),
			aT = (fW.font = fU, fW.fillStyle = 9 === aT ? aF.cm : aF.aG, fv.g1),
			g2 = "+" + aT,
			g3 = fW.measureText(g2).width,
			g4 = Math.floor(this.fQ / 12),
			fx = .5 * (fS + fx) + g4;
		(fx + g3 + fT <= fS || 1e3 <= aT && (g2 = "+" + Math.floor(aT / 1e3) + "K", fx + (g3 = fW.measureText(g2).width) + fT <= fS)) && fW.fillText(g2, Math.floor(fx + .5 * g3), Math.floor(.3 * this.fQ)), fW.fillStyle = aF.aG, fW.fillRect(0, 0,
			fS, 1), fW.fillRect(0, 0, 1, this.fQ), fW.fillRect(0, this.fQ - 1, fS, 1), fW.fillRect(fS - 1, 0, 1, this.fQ)
	}, this.ft = function() {
		var aT = j.b2() % 100,
			g5 = (aT = 9 - dV.eF(aT -= aT % 10, 10), Math.floor(aT * (this.fQ - fT) / 9));
		return fW.fillRect(0, g5, fT, this.fQ - g5), fW.fillRect(fS - fT, g5, fT, this.fQ - g5), aT
	}, this.fu = function() {
		fW.fillRect(fT, this.fQ - fT, Math.floor((fS - 2 * fT) * fe.ff[p.an] / fV), fT)
	}, this.az = function() {
		var g6 = p.an;
		aa.al.am(g6) && (g6 = fe.ff[g6] - fe.g7[g6], fY !== g6 ? (fV = g8(g6, fV), fZ = fY < g6 && 10 <= g6, fY = g6, fX = !0) : j.b2() % 10 == 9 && (fX = !0))
	}, this.g9 = function() {
		0 === fe.gA[p.an] || p.gB || 2 === fe.gC[p.an] || gD.drawImage(canvas, this.a2, a3)
	}
}

function gE() {
	var gF, gG;

	function gO() {
		(gF = new WebSocket("wss://territorial.io/s52/")).onopen = gV, gF.onclose = function() {
			gW()
		}
	}

	function gV() {
		if (gF && gF.readyState === gF.OPEN) {
			var fS = new gY;
			fS.gZ(1608), fS.ga(1, 0), fS.ga(6, 7), fS.ga(2, fg ? fg.id : 3), fS.ga(1, gJ.gb ? 1 : 0), fS.ga(1, gJ.gc ? 1 : 0), fS.ga(1, gJ ? gJ.gK : 0);
			for (var ak = 0; ak < gG.length && ak < 228; ak++) fS.ga(7, gG.charCodeAt(ak) % 128);
			gF.send(fS.gd), gW()
		}
	}

	function gW() {
		gF && (gF.onclose = null, gF.onopen = null, gF = null)
	}
	window.addEventListener("error", function gH(i) {
		gG = "";
		try {
			return window.removeEventListener("error", gH), gG = i.lineno + " " + i.colno + "|" + function(i) {
				if (!i.error) return "NoStack";
				var stack = i.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, gX = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = gX.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(i), __fx.reportError(i, gG), alert("Error:\n" + i.filename + " " + i.lineno + " " + i.colno + " " + i.message)
		} catch (i) {
			gG = "SE|" + gG + "|" + i, console.log(gG), alert(gG)
		}
		gO()
	})
}

function ge() {
	var gf = null;
	this.gg = 0, this.gh = function() {
		var eH = aK.f4.data[5].value;
		gf = "px " + eH, "Trebuchet MS" !== eH && (gf += ", Trebuchet MS"), this.gg = gi(32, 32, ["a", "b", "m"], 200, gf)
	}, this.aS = function(fS, fQ) {
		var aT = document.createElement("canvas");
		return aT.width = fS, aT.height = fQ, aT
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(fW, fS, fQ) {
		return fW.getImageData(0, 0, fS, fQ)
	}, this.fk = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + gf : 1 === type ? "bold " + size + gf : 2 === type ? "lighter " + size + gf : 3 === type ? "italic " + size + gf : 4 === type ? "oblique " + size + gf : 5 === type ? "small-caps " +
			size + gf : "small-caps bold " + size + gf
	}, this.textAlign = function(ac, id) {
		ac.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ac, id) {
		ac.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.bU = function(i, code, color) {
		color = this.bV(bW.gj) + " solid " + (color || aF.aG);
		5 === (code = code || 5) ? i.style.border = color : 4 === code ? i.style.borderLeft = color : 2 === code ? i.style.borderBottom = color : 6 === code ? i.style.borderRight = color : i.style.borderTop = color
	}, this.gk = function(i, a2, a3, fS, fQ) {
		i = i.style;
		i.left = this.gm(a2), i.top = this.gm(a3), i.width = this.gm(fS), i.height = this.gm(fQ)
	}, this.gn = function(eH) {
		return 1 + eH * fg.fh.fi()
	}, this.go = function(gp, gq) {
		return gp * this.gn(void 0 === gq ? .5 : gq) * a5.fj / a5.a6
	}, this.gr = function(gp, gq) {
		return gp * this.gn(void 0 === gq ? .5 : gq) * a5.fj
	}, this.gs = function(gp, gq, gt) {
		return this.gn(gq) * Math.min(gp * a5.fj, gt * a5.fS) / a5.a6
	}, this.bV = function(eH) {
		return eH.toFixed(1) + "px"
	}, this.gm = function(eH) {
		return this.gv(eH).toFixed(1) + "px"
	}, this.gv = function(eH) {
		return eH / a5.a6
	}, this.gw = function(gx, gy) {
		for (var bE = "<ul>", gz = gx.length, ak = 0; ak < gz; ak++) bE += "<li>" + gx[ak] + ": <a href='" + gy[ak] + "' target='_blank'>" + gy[ak] + "</a></li>";
		return bE += "</ul>"
	}, this.h0 = function(h1) {
		return "<a href='" + h1 + "' target='_blank'>" + h1 + "</a>"
	}, this.h2 = function(i) {
		navigator.clipboard && navigator.clipboard.writeText(i.value)
	}, this.h3 = function(i) {
		var h4 = i.textContent;
		aa.dZ.h5(h4, "✔") || (1 === h4.length ? i.textContent = "✔" : i.textContent = h4 + " ✔", setTimeout(function() {
			i.textContent = h4
		}, 500))
	}, this.measureText = function(bE) {
		return gD.measureText(bE).width
	}, this.h6 = function(h7) {
		h7.style.overflowX = "auto", h7.style.overflowY = "hidden", h7.style.whiteSpace = "nowrap", h7.addEventListener("wheel", function(i) {
			Math.abs(i.deltaY) < Math.abs(i.deltaX) || (this.scrollLeft += i.deltaY, this.h8 = this.scrollLeft, i.preventDefault())
		}), h7.addEventListener("scroll", function() {
			this.h8 = this.scrollLeft
		})
	}
}

function h9() {
	this.hA = function(aJ, hB) {
		return Number(this.hC(aJ, hB))
	}, this.hC = function(aJ, hB) {
		var eH = null;
		return 0 === fg.id ? fg.hD && (eH = fg.hD.getItem((hB ? "v" : "d") + aJ)) : 1 === fg.id ? eH = fg.hE.loadString((hB ? 1e3 : 2e3) + aJ) : 2 === fg.id && (eH = fg.hF[(hB ? "v" : "d") + aJ]), eH && 0 !== eH.length ? eH : null
	}, this.hG = function(gz, hH) {
		var eB = [],
			hI = hH ? "e" : "l";
		if (0 === fg.id) {
			if (fg.hD)
				for (ak = 0; ak < gz; ak++) eB.push(fg.hD.getItem(hI + ak))
		} else if (1 === fg.id)
			for (var hJ = hH ? 5e3 : 3e3, ak = 0; ak < gz; ak++) eB.push(fg.hE.loadString(hJ + ak));
		else if (2 === fg.id)
			for (ak = 0; ak < gz; ak++) eB.push(fg.hF[hI + ak]);
		return eB
	}, this.save = function(aJ, value, hB) {
		var hK = (hB ? "v" : "d") + aJ;
		if (0 === fg.id) {
			if (fg.hD && aK.f4.data[140].value) try {
				fg.hD.setItem(hK, value)
			} catch (i) {
				console.log(i)
			}
		} else 1 === fg.id ? fg.hE.saveString((hB ? 1e3 : 2e3) + aJ, value) : 2 === fg.id && (fg.hF[hK] = value, fg.hL.postMessage(hK + " " + value))
	}, this.hM = function(eB, hH) {
		var gz = eB.length,
			hI = hH ? "e" : "l";
		if (0 === fg.id) {
			if (fg.hD && aK.f4.data[140].value) try {
				for (ak = 0; ak < gz; ak++) fg.hD.setItem(hI + ak, eB[ak])
			} catch (i) {
				console.log(i)
			}
		} else if (1 === fg.id)
			for (var hJ = hH ? 5e3 : 3e3, ak = 0; ak < gz; ak++) fg.hE.saveString(hJ + ak, eB[ak]);
		else if (2 === fg.id)
			for (ak = 0; ak < gz; ak++) fg.hF[hI + ak] = eB[ak], fg.hL.postMessage(hI + ak + " " + eB[ak])
	}
}

function hN() {
	this.aD = new hO, this.hP = new hQ, this.aB = function() {
		this.aD.aB()
	}, this.az = function() {
		0 !== this.aD.hR && this.aD.hR--
	}
}

function hS() {
	var hT, hU, hV, hX;

	function hW(ak) {
		aC.dT(8, aC.b1, new hY(21, {
			hZ: ak,
			ha: 0,
			hb: 10
		}))
	}
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), hU.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hV = [new d7(L(6), function() {
		hW(5)
	}, 0, 0, 1), new d7(L(7), function() {
		hW(6)
	}, 0, 0, 1), new d7(L(8), function() {
		hW(7)
	}, 0, 0, 1), new d7("Audit Log", function() {
		hW(12)
	}, 0, 0, 1)], hX = [new d7("⬅️ " + L(1), function() {
		aC.dE()
	})], hT = new d6(L(9), hX), hU = new bO(hV, hT.dA)
}

function hc() {
	this.hd = 0;
	var hf, hg, hh, hi, hj, hk = this.he = 0;

	function ht() {
		hi = hj = null, hk = 0
	}
	this.aB = function(fJ, hl, hm) {
		aC.gS(), f7.hn(), b6.setState(10), hi = fJ, hj = hl, hk = hm, this.hd = fJ.hd, this.he = hm, hf = 0, hg = j.k + 4500, bA.aD.bB = fJ.bB, bA.aD.ho === fJ.bB ? (console.log("direct pass"), hh = 0) : (console.log("delayed pass"), bA.aD.close(
			bA.aD.ho, 3247), hh = 2, bA.aD.hp(fJ.bB, 5) && bA.hq.hr()), gD.imageSmoothingEnabled = !0, b6.i2();
		hl = i4.i5("loading"), hm = (fg.fh.fi() ? .396 : .25) * a5.fj / hl.width;
		gD.setTransform(hm, 0, 0, hm, Math.floor((a5.fS - hm * hl.width) / 2), Math.floor((a5.fQ - hm * hl.height) / 2)), gD.imageSmoothingEnabled = !1, gD.drawImage(hl, 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.hu = function() {
		0 < hh && j.k > hg && (hh--, hg += 4500, 0 === j.hw) && 0 === j.b2() && bA.aD.hp(bA.aD.bB, 5)
	}, this.hx = function() {
		return 10 === b6.hy() && (f7.hz.i0(hi, hj, hk), ht(), !0)
	}, this.i1 = function() {
		10 === b6.hy() && 2 <= ++hf && (f7.hz.i0(hi, hj, hk), ht())
	}
}

function i6() {
	this.i7 = 0, this.i8 = null, this.i9 = null, this.iA = null, this.aD = null, this.iB = null, this.fH = null, this.message = null, this.iC = null, this.iD = null, this.f8 = null, this.hz = new iE, this.iF = 0, this.iG = 0, this.aB = function() {
		this.iG = j.k, this.i7 = iH.cw.iI(aK.f4.data[105].value, 5), this.i9 = new iJ, this.iA = new iK, this.aD = new ey, this.iB = new iL, this.fH = new iM, this.message = new iN, this.iC = new iO, this.iD = new iP, this.f8 = new iQ, this.aD
			.aB(), iR.aB(), this.iF = 1, fg.fh.setState(1), b6.setState(0)
	}, this.hn = function() {
		this.iD && this.iD.hn(), this.i8 = null, this.i9 = null, this.iA = null, this.aD = null, this.iB = null, this.fH = null, this.message = null, this.iC = null, this.iD = null, this.f8 = null, this.iF = 0, iR.hn(), fg.fh.setState(0)
	}
}

function d6(title, hX, iS) {
	var iT = document.createElement("div"),
		iU = document.createElement("div"),
		iV = document.createElement("div"),
		iW = document.createElement("div"),
		iX = document.createElement("div");
	this.dA = iV, this.dc = hX, this.show = function() {
			!1 !== iS ? document.body.appendChild(iT) : (document.body.appendChild(iU), document.body.appendChild(iW))
		}, this.n = function() {
			!1 !== iS ? aC.removeChild(document.body, iT) : (aC.removeChild(document.body, iU), aC.removeChild(document.body, iW))
		}, this.ib = function() {
			var ic = aa.ab.go(.1),
				ie = aa.ab.go(.08 + .04 * (a5.ig < 1), .3);
			return {
				ic: ic,
				ie: ie,
				ih: a5.fQ / a5.a6 - ic - ie
			}
		}, this.resize = function(ii) {
			var gz = hX.length,
				ij = this.ib(),
				ic = ij.ic,
				ie = ij.ie;
			for (iU.style.height = aa.ab.bV(ic), aa.ab.bU(iU, 2), iW.style.top = aa.ab.bV(a5.fQ / a5.a6 - ie), iW.style.height = aa.ab.bV(ie), aa.ab.bU(iW, 8), iV.style.top = aa.ab.bV(ic), iV.style.height = iV.style.maxHeight = aa.ab.bV(ij.ih), iU
				.style.font = aa.ab.fk(0, aa.ab.go(.02, .15)), iW.style.font = aa.ab.fk(0, aa.ab.go(.02, .7)), iV.style.font = aa.ab.fk(0, aa.ab.go(.02, .35)), ak = 1; ak < gz; ak++) aa.ab.bU(hX[ak].button, 4);
			for (var ik = 0, ak = 0; ak < gz; ak++) ik += hX[ak].button.offsetWidth;
			if (ii && ik < iW.offsetWidth)
				for (ak = 0; ak < gz; ak++) hX[ak].button.style.width = (100 * hX[ak].button.offsetWidth / ik).toFixed(2) + "%";
			else
				for (ak = 0; ak < gz; ak++) hX[ak].button.style.width = "auto";
			iW.h8 && (iW.scrollLeft = iW.h8), ii || this.resize(!0)
		}, this.g9 = function() {
			var ij = this.ib(),
				aT = a5.a6;
			gD.fillStyle = aF.bd, gD.fillRect(0, aT * ij.ic, a5.fS, aT * ij.ih)
		}, iT.style.position = "absolute", iT.style.top = "0", iT.style.left = "0", iT.style.width = "100%", iT.style.height = "100%", iU.style.position = "absolute", iU.style.top = "0", iU.style.left = "0", iU.style.width = "100%", iU.style
		.display = "flex", iU.style.backgroundColor = aF.bd, iW.style.position = "absolute", iW.style.left = "0", iW.style.width = "100%", aa.ab.h6(iW), iX.style.height = iX.style.maxHeight = "100%", iV.style.position = "absolute", iV.style.width =
		"100%", iV.style.backgroundColor = aF.bd,
		function() {
			for (var ak = 0; ak < hX.length; ak++) hX[ak].button.style.height = "100%", hX[ak].button.style.padding = "0.0em 0.9em"
		}();
	for (var ak = 0; ak < hX.length; ak++) iX.appendChild(hX[ak].button);
	iU.appendChild(function() {
		var ia = document.createElement("h1");
		return ia.textContent = title, ia.style.margin = "auto", ia.style.fontSize = 18 <= title.length && a5.fQ > a5.fS ? "1.8em" : "2.3em", ia.style.fontFamily = "Arial Black, Trebuchet MS", ia
	}()), iW.appendChild(iX), !1 !== iS && (iT.appendChild(iV), iT.appendChild(iU), iT.appendChild(iW))
}

function il() {
	this.im = function(player, io, ip) {
		aa.al.iq(player, ip, io) && (fv.ir(player, io), !aa.al.is(io)) && it.iu.iv[io] && it.iu.iv[io]--
	}, this.iw = function(player, io, ip) {
		aa.al.ix(ip, io) ? j0.j1(io, eC.j2[0]) && (j3.j4(player, io, eC.j2[0], 1), aa.al.j5(io, eC.j2[0]), iy.j6(player, io), j7.j8(io, eC.j2[0])) : iy.iz(player, ip, 12)
	}
}

function j9() {
	var jA, jB, jC, jD, jE, jF, jG, jH, jI, jJ;

	function jM() {
		var jR = p.jR;
		for (jI = jR; jI < p.dS; jI++) jL();
		for (jI = p.gB ? p.e3 : 0; jI < jR; jI++) {
			if (!jS()) {
				for (var eM = p.jV = jI; eM < jR; eM++) jI = eM, jL();
				return
			}
			jU(jF + jA * jE + dV.eF(jE, 2), jG + jB * jE + dV.eF(jE, 2))
		}
	}

	function kD(player) {
		for (var je = fe.je, jf = fe.jf, jg = fe.jg, jh = fe.jh, a3 = jf[player]; a3 <= jh[player]; a3++)
			for (var a2 = je[player]; a2 <= jg[player]; a2++) {
				var ai = eu.eP(a2, a3);
				eu.eW(ai) && (eu.ec(ai) ? eu.eq(ai, player) : eu.ep(ai, player))
			}
	}

	function kC(eB, ha, hb) {
		var h4 = eB[ha];
		eB[ha] = eB[hb], eB[hb] = h4
	}

	function jS() {
		return function() {
			var ak;
			for (ak = 0; ak < 8; ak++)
				if (jA = dV.eF(jC * eG.random(), eG.value(100)), jB = dV.eF(jD * eG.random(), eG.value(100)), kI()) return 1;
			return
		}() || function() {
			var aV, aW, ju, g5, eM, jT;
			for (aV = dV.eF(jC * eG.random(), eG.value(100)), aW = dV.eF(jD * eG.random(), eG.value(100)), ju = 40; 1 <= ju; ju--)
				for (g5 = jD - ju; 0 <= g5; g5 -= 40)
					for (jB = (g5 + aW) % jD, eM = 40; 1 <= eM; eM--)
						for (jT = jC - eM; 0 <= jT; jT -= 40)
							if (jA = (jT + aV) % jC, kI()) return 1;
			return
		}()
	}

	function kI() {
		for (var g6, kK, gap = dV.eF(jE - jH, 2), kL = jG + jB * jE + gap, kM = jF + jA * jE + gap, kJ = kL + jH - 1; kL <= kJ; kJ--)
			for (kK = kM + jH - 1; kM <= kK; kK--)
				if (g6 = eu.eP(kK, kJ), !eu.ef(g6) || eu.ec(g6)) return;
		return 1
	}

	function jU(jT, g5) {
		jL(), kN(jT - 2, g5 - 2)
	}

	function jL() {
		fe.gA[jI] = 0, fe.jQ[jI] = fe.k7[jI] = 0, fe.kO[jI] = [], fe.k8[jI] = [], fe.k9[jI] = [], fe.kA[jI] = [], fe.je[jI] = fe.jf[jI] = fe.jg[jI] = fe.jh[jI] = 0
	}

	function kN(jT, g5) {
		var g6, ak, kP, kQ;
		for (fe.gA[jI] = 1, fe.je[jI] = jT + 10, fe.jf[jI] = g5 + 10, fe.jh[jI] = fe.jg[jI] = 0, kP = jT; kP < jT + 4; kP++)
			for (kQ = g5; kQ < g5 + 4; kQ++)(jT < kP && kP < jT + 3 || g5 < kQ && kQ < g5 + 3) && (g6 = eu.eP(kP, kQ), eu.ef(g6)) && (fe.je[jI] = Math.min(kP, fe.je[jI]), fe.jg[jI] = Math.max(kP, fe.jg[jI]), fe.jf[jI] = Math.min(kQ, fe.jf[jI]), fe
				.jh[jI] = Math.max(kQ, fe.jh[jI]), jJ[fe.jQ[jI]] = g6, fe.jQ[jI]++, eu.ep(g6, jI));
		for (fe.k7[jI] = fe.jQ[jI], ak = fe.jQ[jI] - 1; 0 <= ak; ak--) eu.eU(jJ[ak], jI) ? (eu.eq(jJ[ak], jI), fe.k8[jI].push(jJ[ak])) : eu.ed(jJ[ak]) ? (eu.eq(jJ[ak], jI), fe.k9[jI].push(jJ[ak])) : eu.eQ(jJ[ak]) && (eu.eq(jJ[ak], jI), fe.kA[jI]
			.push(jJ[ak]))
	}
	this.aB = function() {
		if (jJ = new Array(12), jH = 6, jE = 10, jC = dV.eF(dx.dy, jE), jD = dV.eF(dx.jK, jE), jF = dV.eF(dx.dy - jE * jC, 2), jG = dV.eF(dx.jK - jE * jD, 2), p.gB)
			for (var ak = 0; ak < p.e3; ak++) jI = ak, jL(), fe.gA[jI] = 1;
		(0 === p.data.spawningType ? jM : 1 === p.data.spawningType ? (jM(), function() {
			var jW = p.jX;
			p.jY || jW++;
			if (!(jW < 3)) {
				for (var data = p.data, eE = (p.gB ? p.e3 : 0) + data.teamPlayerCount[0], s = p.jV, jZ = new Uint32Array(jW), ja = new Uint32Array(jW), jb = new Uint16Array(jW), jc = new Uint16Array(jW), jd = eL.jd, je = fe.je, jf = fe
						.jf, jg = fe.jg, jh = fe.jh, ji = eC.ji, jj = eC.jj, ak = eE; ak < s; ak++) ji[ak] = je[ak] + jg[ak] >> 1, jj[ak] = jf[ak] + jh[ak] >> 1;
				for (ak = eE; ak < s; ak++) {
					var id = jd[ak];
					jZ[id] += ji[ak], ja[id] += jj[ak]
				}
				var jk = eL.jk;
				for (ak = 1; ak < jW; ak++) {
					var jl = Math.max(data.teamPlayerCount[jk[ak]], 1);
					jb[ak] = dV.eF(jZ[ak], jl), jc[ak] = dV.eF(ja[ak], jl)
				}
				var jm = eL.jm,
					jn = eL.jn,
					jo = eL.jo,
					jp = eC.jp;
				for (ak = 0; ak < 512; ak++) jp[ak] = ak;
				for (var aj = 0; aj < 2 + (4 <= jW); aj++)
					for (ak = eE; ak < s; ak++) {
						for (var jq = ak, jr = jp[jq], js = 1, aX = dV.jt(ji[jr] - jb[1], jj[jr] - jc[1]), ju = 2; ju < jW; ju++) {
							var jv = dV.jt(ji[jr] - jb[ju], jj[jr] - jc[ju]);
							jv < aX && (aX = jv, js = ju)
						}
						var jw = jd[jq];
						if (js !== jw) {
							if (2 === aj && 4 <= jW) {
								var jx = Math.max((js + 1) % jW, 1),
									jy = dV.jt(ji[jr] - jb[jx], jj[jr] - jc[jx]);
								for (ju = 1; ju < jW; ju++) jv = dV.jt(ji[jr] - jb[ju], jj[jr] - jc[ju]), aX < jv && jv < jy && (jy = jv, jx = ju);
								jx !== jw && dV.jt(jb[jw] - jb[jx], jc[jw] - jc[jx]) < dV.jt(jb[jw] - jb[js], jc[jw] - jc[js]) && (js = jx)
							}
							var jz = jk[js],
								k0 = jn[jz] + (p.gB ? 0 : jo[jz]),
								k1 = jm[k0],
								k2 = jp[k1],
								k3 = jn[jz + 1];
							aX = dV.jt(ji[k2] - jb[jw], jj[k2] - jc[jw]);
							for (var aT = k0 + 1; aT < k3; aT++) {
								var k4 = jm[aT],
									k5 = jp[k4];
								(jv = dV.jt(ji[k5] - jb[jw], jj[k5] - jc[jw])) < aX && (aX = jv, k1 = k4)
							}
							k1 < eE || s <= k1 || (k2 = jp[k1], jZ[jw] += ji[k2] - ji[jr], ja[jw] += jj[k2] - jj[jr], jZ[js] += ji[jr] - ji[k2], ja[js] += jj[jr] - jj[k2], jl = data.teamPlayerCount[jk[jw]], jb[jw] = dV.eF(jZ[jw], jl), jc[
								jw] = dV.eF(ja[jw], jl), jl = data.teamPlayerCount[jz], jb[js] = dV.eF(jZ[js], jl), jc[js] = dV.eF(ja[js], jl), jp[jq] = k2, jp[k1] = jr)
						}
					}! function() {
						for (var jp = eC.jp, je = fe.je, jf = fe.jf, jg = fe.jg, jh = fe.jh, jQ = fe.jQ, k7 = fe.k7, k8 = fe.k8, k9 = fe.k9, kA = fe.kA, ak = 0; ak < 512; ak++) {
							var kB = jp[ak];
							if (kB !== ak) {
								kC(je, ak, kB), kC(jf, ak, kB), kC(jg, ak, kB), kC(jh, ak, kB), kC(jQ, ak, kB), kC(k7, ak, kB), kC(k8, ak, kB), kC(k9, ak, kB), kC(kA, ak, kB), kD(ak), kD(kB), jp[ak] = ak;
								for (var fQ = kB, gq = jp[fQ]; gq !== ak;) gq = jp[fQ = gq];
								jp[fQ] = kB
							}
						}
					}()
			}
		}) : function() {
			var jR = p.jR;
			for (jI = jR; jI < p.dS; jI++) jL();
			for (jI = p.gB ? p.e3 : 0; jI < jR; jI++)
				if (! function() {
						var spawningData = p.data.spawningData,
							jT = spawningData[2 * jI] + 1,
							spawningData = spawningData[2 * jI + 1] + 1;
						if (3 < jT && jT < dx.dy - 5 && 3 < spawningData && spawningData < dx.jK - 5 && eu.ef(eu.eP(jT, spawningData)) && function(jT, g5) {
								var g6, kK, kJ;
								for (kJ = g5; g5 - 6 < kJ; kJ--)
									for (kK = jT; jT - 6 < kK; kK--)
										if (g6 = eu.eP(kK, kJ), eu.ec(g6)) return;
								return 1
							}(jT + 3, spawningData + 3)) return jU(jT + 1, spawningData + 1), 1;
						return
					}()) {
					if (!jS()) {
						for (var eM = p.jV = jI; eM < jR; eM++) jI = eM, jL();
						return
					}
					var jT = jF + jA * jE + dV.eF(jE, 2),
						g5 = jG + jB * jE + dV.eF(jE, 2);
					jU(jT, g5)
				}
		})(), iy.jP[7] = fe.jQ[p.an]
	}, this.kR = function(kS, kT, kU) {
		var ak, jT, g5, g6, jA, jB;
		for (jI = kS, ak = 0; ak < 20; ak++)
			for (jT = kT + ak; kT - ak <= jT; jT--)
				for (g5 = kU + ak; kU - ak <= g5; g5--)
					if ((jT === kT + ak || jT === kT - ak || g5 === kU + ak || g5 === kU - ak) && 3 < jT && jT < dx.dy - 5 && 3 < g5 && g5 < dx.jK - 5 && eu.ef(eu.eP(jT, g5)) && function(jT, g5) {
							var g6, kK, kJ;
							for (kJ = g5; g5 - 6 < kJ; kJ--)
								for (kK = jT; jT - 6 < kK; kK--)
									if (g6 = eu.eP(kK, kJ), eu.ec(g6) && !eu.eZ(jI, g6)) return;
							return 1
						}(jT + 3, g5 + 3)) {
						if (0 < fe.jQ[jI]) {
							for (jB = jA = g6 = void 0, jA = fe.jg[jI]; jA >= fe.je[jI]; jA--)
								for (jB = fe.jh[jI]; jB >= fe.jf[jI]; jB--) g6 = 4 * (jB * dx.dy + jA), eu.eY(jI, g6) && (eu.ek(g6), fe.jQ[jI]--);
							jL()
						}
						return kN(jT - 1, g5 - 1), !0
					} return !1
	}, this.kX = function(kS) {
		jI = kS, jS() ? jU(jF + jA * jE + dV.eF(jE, 2), jG + jB * jE + dV.eF(jE, 2)) : jL()
	}
}

function kY() {
	var kZ = [L(10), L(11), L(12), L(13), L(14), L(15), L(16)],
		ka = [100, 60, 30, 15, 6, 1],
		kb = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		kc = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		ke = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.kf = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.kg = function(id, aj, aJ) {
		aj = this.kh(aj);
		return +(kb[aj][id] > aJ)
	}, this.kh = function(aj) {
		for (var ak = 0; ak < ka.length; ak++)
			if (ka[ak] <= aj) return ak;
		return ka.length
	}, this.ki = function(aj) {
		return kZ[this.kh(aj)]
	}, this.kj = function(id, kk) {
		return kc[id].replace(new RegExp("x", "g"), kk)
	}, this.kl = function(id, kk) {
		return ke[id].replace(new RegExp("x", "g"), kk)
	}, this.km = function(id, kn) {
		return this.kf[5][id]
	}
}

function ko() {
	this.cw = new kp, this.cy = new kq, this.d0 = new kr, this.aB = function() {
		this.cw.aB()
	}
}

function ks() {
	var ku, kv, kw, kx, kt = !1;

	function ky() {
		kt = !0, ku = -1, kv = new Array(4);
		for (var ak = 3; 0 <= ak; ak--) kv[ak] = !1;
		var jt = Math.floor(1 + .02 * a5.min);
		kw = new Array(4), (kx = new Array(4))[1] = kx[3] = kw[0] = kw[2] = 0, kx[0] = kw[3] = -jt, kw[1] = kx[2] = jt
	}

	function l0() {
		if (-1 !== ku)
			if (0 !== p.q && r.s()) {
				for (var l2 = !1, ak = 3; 0 <= ak; ak--) kv[ak] && (l2 = !0, l5 += kw[ak], l6 += kx[ak], j7.l7(kw[ak], kx[ak]), y.l8());
				l2 ? j.a0 = !0 : l4.l3()
			} else l4.l3()
	}
	this.kz = function(aJ) {
		0 !== p.q && r.s() && (kt || ky(), kv[aJ] = !0, -1 === ku) && (ku = setInterval(l0, 20), l0())
	}, this.l1 = function(aJ) {
		if (0 !== p.q && (kt || ky(), kv[aJ] = !1, -1 !== ku)) {
			for (var l2 = !1, ak = 3; 0 <= ak; ak--) l2 = l2 || kv[ak];
			l2 || this.l3()
		}
	}, this.l3 = function() {
		if (kt && -1 !== ku) {
			for (var ak = 3; 0 <= ak; ak--) kv[ak] = !1;
			clearInterval(ku), ku = -1
		}
	}
}

function l9() {
	var fQ, canvas, fR, lA, lB, lC = -1;

	function lF() {
		var lG, fW = canvas.getContext("2d", {
			alpha: !0
		});
		fW.clearRect(0, 0, fQ, fQ), fW.fillStyle = aF.bd, fW.fillRect(0, 0, fQ, fQ), 0 === lA && (fW.fillStyle = aF.bh, fW.fillRect(0, 0, fQ, fQ)), fW.fillStyle = aF.aG, fW.fillRect(0, 0, fQ, 1), fW.fillRect(0, 0, 1, fQ), fW.fillRect(0, fQ - 1, fQ,
			1), fW.fillRect(fQ - 1, 0, 1, fQ), lG = .9 * fQ / i4.get(0).width, fW.imageSmoothingEnabled = !0, fW.setTransform(lG, 0, 0, lG, Math.floor((fQ - lG * i4.get(0).width) / 2), Math.floor((fQ - lG * i4.get(0).height) / 2)), fW.drawImage(
			i4.get(0), 0, 0), fW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function lS(lQ, lR) {
		if (!lU.lD) return lQ <= fQ + bW.gap && lR >= lE.a3 ? 9 : -1;
		if (lQ <= 4 * fQ + bW.gap) {
			if (lR >= lE.a3) return 0;
			if (lR >= lE.a3 - fQ - lB * bW.gap) return 2
		} else if (lQ <= 7 * fQ + bW.gap && lR >= lE.a3 - fQ - lB * bW.gap) return 1;
		return -1
	}
	this.lD = !1, this.aB = function() {
		lA = -1, this.lD = !1, lB = fg.fh.fi() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		fQ = lE.fQ, (canvas = document.createElement("canvas")).width = fQ, canvas.height = fQ, fR = aa.ab.fk(1, (fg.fh.fi() ? .5 : .45) * fQ), lF()
	}, this.lH = function() {
		this.lD = !this.lD, this.lD ? (lJ.lK(!1), p.ay && lJ.lL && lJ.lM(!0), this.lN()) : (lA = -1, lF(), !p.lI || 1 !== p.q || p.gB || p.ay || fg.fh.setState(1)), j.a0 = !0
	}, this.lN = function() {
		(p.lI || p.ay) && 1 === p.q && (fp.fs(!0), p.gB || setTimeout(function() {
			es.lO()
		}, 0), fg.fh.setState(0))
	}, this.lP = function(lQ, lR) {
		return 0 <= (lC = lS(lQ, lR)) || !lU.lD || p.lI || p.ay || lV.lW || lU.lH(), lC
	}, this.l7 = function(lQ, lR) {
		lQ = lS(lQ, lR);
		lQ !== lA && (lA = lQ, this.lD || lF(), j.a0 = !0)
	}, this.lY = function(lQ, lR) {
		lQ = lS(lQ, lR);
		return -1 !== lQ && lC === lQ && (this.lD ? p.lZ ? (0 <= lQ && lJ.lK(!1), !p.ay) : (0 === lQ ? p.la() : 1 === lQ ? this.lH() : 2 === lQ && aC.dT(1, 0), !0) : 9 === lQ && (this.lH(), !0))
	}, this.g9 = function() {
		var fS;
		this.lD ? (fS = Math.floor(5.5 * fQ), gD.setTransform(1, 0, 0, 1, bW.gap, lE.a3), gD.fillStyle = aF.bd, gD.fillRect(0, 0, fS, fQ), 0 === lA ? (gD.fillStyle = aF.bh, gD.fillRect(0, 0, 4 * fQ, fQ)) : 1 === lA && (gD.fillStyle = aF.bh, gD
				.fillRect(4 * fQ, 0, Math.floor(1.5 * fQ), fQ)), gD.fillStyle = aF.aG, gD.fillRect(0, 0, fS, 1), gD.fillRect(0, 0, 1, fQ), gD.fillRect(4 * fQ, 0, 1, fQ), gD.fillRect(0, fQ - 1, fS, 1), gD.fillRect(fS - 1, 0, 1, fQ), gD.font =
			fR, aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 1), gD.fillText(L(17), 2 * fQ, .54 * fQ), fS = .4 * fQ, lU.le(bW.gap + 4 * fQ + (1.5 * fQ - fS) / 2, lE.a3 + .3 * fQ, fS), fS = 1, gD.setTransform(1, 0, 0, 1, bW.gap, lE.a3 - fS *
				lB * bW.gap - fS * fQ), gD.fillStyle = aF.bd, gD.fillRect(0, 0, 4 * fQ, fQ), lA === fS + 1 && (gD.fillStyle = aF.bh, gD.fillRect(0, 0, 4 * fQ, fQ)), gD.fillStyle = aF.aG, gD.fillRect(0, 0, 4 * fQ, 1), gD.fillRect(0, 0, 1, fQ),
			gD.fillRect(4 * fQ, 0, 1, fQ), gD.fillRect(0, fQ - 1, 4 * fQ, 1), gD.fillText(L(0 === fS ? 17 : 18), 2 * fQ, .54 * fQ), gD.setTransform(1, 0, 0, 1, 0, 0)) : gD.drawImage(canvas, bW.gap, lE.a3)
	}, this.ld = function(player) {
		return 0 !== fe.gA[player] && 2 !== p.q && !aa.al.is(player)
	}, this.le = function(a2, a3, gz) {
		gD.setTransform(1, 0, 0, 1, a2, a3), gD.lineWidth = bW.lg, gD.strokeStyle = aF.aG, gD.beginPath(), gD.moveTo(0, 0), gD.lineTo(gz, gz), gD.moveTo(0, gz), gD.lineTo(gz, 0), gD.stroke()
	}
}

function lh() {
	var d3, d4, dI;

	function lk() {
		var jl;
		1 === p.data.gameMode ? (p.data.teamPlayerCount || (p.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), p.b8.lp()), jl = aa.dF.lq(p.data.teamPlayerCount, 0), p.data.numberTeams = jl) : (2 === p.data.botDifficultyType && (p
			.data.botDifficultyType = 0), 1 === p.data.spawningType && (p.data.spawningType = 0))
	}

	function d8() {
		1 !== p.data.gameMode && (p.data.teamPlayerCount = null), lr(), p.data.canvas = null, aC.dT(5, 5)
	}

	function lr() {
		ls.ar.aB(), aK.aL.aM(156, ls.au.lt())
	}

	function li() {
		p.data.isReplay = 0, lr(), p.b8.lu(), b6.b7(), p.b8.b9(), p.data.canvas = 2 === p.data.mapType ? dx.lm : null, p.bC(), p.lv = 1
	}

	function mB() {
		lk();
		for (var eB = [lz(), m0(), m1()], ak = 3; ak < 6; ak++) aC.removeChild(d4.mC, d4.mD[ak].bR), d4.mD[ak] = eB[ak - 3], d4.mC.appendChild(d4.mD[ak].bR);
		d4.resize()
	}

	function lz() {
		var mE, dM = new dN;
		return dM.dO(L(25)), mE = 0 === p.data.gameMode ? [L(26), L(5)][p.data.colorsType] : p.data.numberTeams + " Team" + (1 === p.data.numberTeams ? "" : "s"), dM.mF(mE), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(21)
		}).button])), dM
	}

	function m0() {
		var dM = new dN,
			eB = (dM.dO(L(27)), [L(4) + ": " + mG.mH[p.data.botDifficultyValue], L(28), L(29), L(5)]);
		return dM.mF(eB[p.data.botDifficultyType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(25)
		}).button])), dM
	}

	function m1() {
		var dM = new dN,
			eB = (dM.dO("Spawning"), [L(26), L(30), L(5)]);
		return dM.mF(eB[p.data.spawningType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(24)
		}).button])), dM
	}
	this.show = function() {
		d3.show(), this.resize(), d3.dA.scrollTop = aC.aD.mJ[0]
	}, this.n = function() {
		aC.aD.mJ[0] = d3.dA.scrollTop, d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6("🔧 " + L(19), [new d7("⬅️ " + L(1), d8), new d7(L(20), li)]), lk(), p.data.canvas || (2 === p.data.mapType ? p.data.canvas = dx.lm : 1 === p.data.mapType ? p.data.canvas = dx.ln(dx.lo(p.data), 0).lm : (p.data.mapType = 0, p
		.data.passableWater = p.data.passableMountains = 1, p.data.canvas = dx.ln(dx.lo(p.data), p.data.mapSeed).lm)), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN,
			aZ = (dM.dO(L(21)), p.data.canvas);
		aZ.style.width = "100%", dM.dU({
			i: aZ
		}), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(20)
		}).button])), dI.push(dM)
	}(dI = []), function(dI) {
		var dM = new dN;
		dM.dO(L(23)), dM.dU(new a7({
			aJ: -1,
			value: p.data.playerCount
		}, 1, 0, function(i) {
			var playerCount = dV.dW(Math.floor(i.target.value), 1, 512);
			i.target.value = p.data.playerCount = playerCount, 1 === p.data.gameMode && (i = aa.dF.lq(p.data.teamPlayerCount, 0), p.b8.lp(), aa.dF.lq(p.data.teamPlayerCount, 0) !== i) && mB()
		})), dI.push(dM)
	}(dI), function(dI) {
		var dM = new dN;
		dM.dO(L(24)), dM.dP(new dQ({
			dR: ["Battle Royale", "Teams"],
			value: p.data.gameMode
		}, function(aJ) {
			p.data.gameMode !== aJ && (p.data.gameMode = aJ, mB())
		})), dI.push(dM)
	}(dI), dI.push(lz()), dI.push(m0()), dI.push(m1()), function(dI) {
		var dM = new dN,
			eB = (dM.dO(L(31)), [L(32), L(33), L(5)]);
		dM.mF(eB[p.data.playerNamesType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(23)
		}).button])), dI.push(dM)
	}(dI), function(dI) {
		var dM = new dN,
			eB = (dM.dO(L(34)), [L(3), L(4) + ": " + p.data.aIncomeValue, L(5)]);
		dM.mF(eB[p.data.aIncomeType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(22)
		}).button])), dI.push(dM)
	}(dI), function(dI) {
		var dM = new dN,
			eB = (dM.dO(L(0)), [L(3), L(4) + ": " + p.data.tIncomeValue, L(5)]);
		dM.mF(eB[p.data.tIncomeType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(26)
		}).button])), dI.push(dM)
	}(dI), function(dI) {
		var dM = new dN,
			eB = (dM.dO(L(35)), [L(3), L(4) + ": " + p.data.iIncomeValue, L(5)]);
		dM.mF(eB[p.data.iIncomeType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(27)
		}).button])), dI.push(dM)
	}(dI), function(dI) {
		var dM = new dN,
			eB = (dM.dO(L(36)), [L(3), L(4) + ": " + p.data.sResourcesValue, L(5)]);
		dM.mF(eB[p.data.sResourcesType]), dM.dU(new m8([new d7(L(22), function() {
			aC.dT(28)
		}).button])), dI.push(dM)
	}(dI), function(dI) {
		var dM = new dN;
		dM.dO(L(37)), dM.dU(new m8([new d7(L(38), function() {
			aC.gS(), p.b8.mI(), aC.aD.mJ[0] = 0, aC.dT(19)
		}).button])), dM.dU(new m8([new d7(L(39), function() {
			mK.mL()
		}).button])), dM.dU(new m8([new d7(L(40), function() {
			return mK.mM(), !0
		}).button])), dI.push(dM)
	}(dI), dI))
}

function mN() {
	this.az = function() {
		var mS;
		0 === mO.result.mP || 0 === mO.result.mQ.length || 8 === p.mR || (function(mS) {
			7 !== p.mR && 10 !== p.mR || 0 !== p.mi && mS && mY.mZ(600, L(44, [mS.toFixed(2)]), 40, 0, aF.aG, aF.be, -1, !1)
		}(mS = function() {
			mY.mZ(520, L(41), 40, 0, aF.aG, aF.be, -1, !1);
			for (var mQ = mO.result.mQ, gz = mQ.length, jQ = fe.jQ, eB = [], ak = 0; ak < gz; ak++) {
				var g6 = mQ[ak];
				eB.push({
					g6: g6,
					h4: jQ[g6]
				})
			}
			eB.sort((ju, eM) => eM.h4 - ju.h4);
			var ma = fe.mb,
				h4 = mO.result.mc,
				md = mO.result.mP,
				bE = "",
				mS = 0;
			for (ak = 0; ak < gz; ak++) {
				var mf = eB[ak].h4 * md / (100 * h4),
					mg = ma[eB[ak].g6] + ": " + mf.toFixed(2) + "   ";
				eB[ak].g6 === p.an && (mS = mf), 2 < ak && 4 !== gz ? 3 === ak && (bE += "(" + L(42, [gz - 3]) + ")") : bE += mg
			}
			mY.mZ(560, aa.dZ.mh(bE), 40, 0, aF.by, aF.be, -1, !1), mS && mY.mZ(580, L(43, [mS.toFixed(2)]), 40, 0, aF.by, aF.be, -1, !1);
			return mS
		}()), 2 === p.mV) || 7 <= p.mR || ! function(mS) {
			var mQ = mO.result.mQ,
				gz = mQ.length,
				mj = fe.mj,
				jQ = fe.jQ,
				mk = [];
			loop: for (var ak = 0; ak < gz; ak++) {
				var g6 = mQ[ak],
					ml = aa.dZ.mm(mj[g6]);
				if (null !== ml) {
					for (var mn = jQ[g6], eM = mk.length - 1; 0 <= eM; eM--)
						if (ml === mk[eM].name) {
							mk[eM].h4 += mn, mk[eM].eB.push({
								g6: g6,
								h4: mn
							});
							continue loop
						} mk.push({
						name: ml,
						h4: mn,
						eB: [{
							g6: g6,
							h4: mn
						}]
					})
				}
			}
			if (0 !== mk.length) {
				mk.sort((ju, eM) => eM.h4 - ju.h4);
				var eB = mk[0].eB,
					mo = (eB.sort((ju, eM) => eM.h4 - ju.h4), "[" + mk[0].name + "]"),
					mp = 512 * mO.result.mP / 26214400,
					af = (mY.mZ(0, L(45, [mo, mp.toFixed(4)]), 40, 0, aF.aG, aF.be, -1, !1), eB.length),
					mq = mk[0].h4,
					mr = 1e4 * mp;
				for (ak = 0; ak < af; ak++)
					if (eB[ak].g6 === p.an) {
						mY.mZ(600, L(46, [(mr * eB[ak].h4 / (10 * mq)).toFixed(2)]), 40, 0, aF.aG, aF.be, -1, !1), mY.mZ(640, L(47, [(.2 * mS).toFixed(2), mo]), 40, 0, aF.aG, aF.be, -1, !1);
						break
					}
			}
		}(mS)
	}, this.mX = function() {}
}

function ms() {
	this.mt = function(player) {
		aa.al.mu(player) && mY.mZ(80, L(48), 637, 0, aF.cV, aF.be, -1, !1)
	}, this.mv = function(player) {
		aa.al.mu(player) && mY.mZ(80, L(49), 637, 0, aF.cV, aF.be, -1, !1)
	}
}

function av() {
	this.lt = function() {
		var mw = function() {
				for (var nO = ls.ar.nO, gz = nO.length, max = 0, ak = 0; ak < gz; ak++) max = Math.max(max, nO[ak]);
				return nS(Math.max(max, 1))
			}(),
			fS = (aN = p.data, (fS = n2).aB(), fS.ga(12, gJ.rVersion), fS.aJ += 43, fS.ga(2, aN.mapType), fS.ga(8, aN.mapProceduralIndex), fS.ga(8, aN.mapRealisticIndex), fS.ga(14, aN.mapSeed), fS.nC(aN.mapName, 5), 2 === aN.mapType && fS.nD(aN
				.canvas), fS.ga(1, aN.passableWater), fS.ga(1, aN.passableMountains), fS.ga(10, aN.playerCount), fS.ga(10, aN.humanCount), fS.ga(9, aN.selectedPlayer), fS.ga(1, aN.gameMode), fS.ga(2, aN.playerMode), fS.ga(2, aN
				.battleRoyaleMode), fS.ga(4, aN.numberTeams), fS.ga(1, aN.isZombieMode), fS.ga(1, aN.isContest), fS.ga(1, aN.isReplay), fS.nE(aN.elo, 2, 14), fS.ga(1, aN.colorsType), fS.ga(1, aN.colorsPersonalized), fS.nE(aN.colorsData, 10,
				18), fS.ga(1, aN.selectableColor), fS.nE(aN.teamPlayerCount, 4, 10), fS.ga(1, aN.neutralBots), fS.ga(2, aN.botDifficultyType), fS.ga(4, aN.botDifficultyValue), fS.nE(aN.botDifficultyTeam, 4, 4), fS.nE(aN.botDifficultyData, 10,
				4), fS.ga(2, aN.spawningType), fS.ga(14, aN.spawningSeed), fS.nE(aN.spawningData, 11, 12), fS.ga(1, aN.selectableSpawn), fS.ga(2, aN.playerNamesType), fS.nF(aN.playerNamesData, 10, 5), fS.ga(1, aN.selectableName), fS.ga(2, aN
				.aIncomeType), fS.ga(8, aN.aIncomeValue), fS.nE(aN.aIncomeData, 10, 8), fS.ga(2, aN.tIncomeType), fS.ga(8, aN.tIncomeValue), fS.nE(aN.tIncomeData, 10, 8), fS.ga(2, aN.iIncomeType), fS.ga(8, aN.iIncomeValue), fS.nE(aN
				.iIncomeData, 10, 8), fS.ga(2, aN.sResourcesType), fS.ga(11, aN.sResourcesValue), fS.nE(aN.sResourcesData, 10, 11), fS.nE(aN.nG, 10, 30), ! function(mw) {
				var fS = n2,
					nH = ls.ar.nH,
					nI = ls.ar.nJ,
					nK = ls.ar.nL,
					nM = ls.ar.nN,
					gz = nH.length;
				fS.ga(5, mw), fS.ga(30, gz), fS.ga(30, ls.ar.nO.length);
				for (var ak = 0; ak < gz; ak++) {
					var aT = nH[ak];
					fS.ga(4, aT), fS.ga(9, nI[ak]), 0 === aT ? fS.ga(22, nK[ak]) : 1 === aT ? (fS.ga(10, nK[ak]), fS.ga(10, nM[ak])) : 2 === aT ? (fS.ga(10, nK[ak]), fS.ga(9, nM[ak])) : 3 === aT ? (fS.ga(10, nK[ak]), fS.ga(27, nM[ak])) :
						4 === aT ? (fS.ga(10, nK[ak]), fS.ga(16, nM[ak])) : 5 === aT || 6 === aT ? fS.ga(10, nK[ak]) : 7 === aT ? fS.ga(1, nK[ak]) : 10 === aT && (fS.ga(20, nK[ak]), fS.ga(22, nM[ak]))
				}
			}(mw), ! function(mw) {
				for (var fS = n2, nP = ls.ar.nP, nO = ls.ar.nO, gz = nP.length, ak = 0; ak < gz; ak++) fS.ga(1, nP[ak]), fS.ga(mw, nO[ak])
			}(mw), n2.aJ),
			aN = dV.eF(fS - 1, 6) + 1,
			mw = (n4.n5(6 * aN) !== n2.eB.length && n2.eB.push(0), ! function() {
				var fS = n2;
				fS.aJ = 24, fS.ga(31, fS.eB.length), fS.aJ = 12, fS.ga(12, function() {
					for (var eB = n2.eB, gz = eB.length, nR = gJ.rVersion, ak = 3; ak < gz; ak++) nR = nR + eB[ak] & 4095;
					return nR
				}())
			}(), n7.aB(n2.eB), n9.cw.nA(n9.cw.nB(aN)));
		return n7.hn(), n2.aB(), mw
	}
}

function nT() {
	nU() ? (nV(), nW !== p.dS && nX()) : nY()
}

function nX() {
	nZ.na(), nZ.nb(fe.k8[nW]), nZ.nb(fe.k9[nW]), dx.nc(dx.nd) && nZ.nb(fe.kA[nW]), nZ.ne(fe.kO[nW]), nZ.nf(fe.k9[nW]), nZ.nf(fe.kA[nW]), nZ.ng(), nZ.nh()
}

function nV() {
	ni = !0, nj.nk(nl, nm, nn), nj.no(nl, nm), fe.jQ[nl] += np, nZ.nq(), nr()
}

function nU() {
	return (nW === p.dS ? ns : nt)()
}

function nt() {
	var nu = np * p.nv,
		nw = nx(),
		ny = nz(),
		nw = nu + 2 * nw + ny,
		o1 = o2 * np;
	return nw < o1 ? (nn -= nw, iy.iz(nl, nw, 13), o3(nw - nu, ny), !0) : o4 && 0 === ny ? (nn -= o1, o1 += aa.al.o5(nl, nw - o1 + 1), iy.iz(nl, o1, 13), o3(o1 - nu, 0), !0) : (nn -= o1, iy.iz(nl, o1, 13), o3(o1 - nu, ny), !1)
}

function o3(o1, ny) {
	if (0 < ny) {
		if (o1 <= ny) return iy.iz(nW, o1, 13), void nj.o6(nW, nl, ny - o1);
		nj.o6(nW, nl, 0), o1 -= ny
	}
	o1 = dV.eF(o1, 2), o1 = Math.min(fe.ff[nW], o1), iy.iz(nW, o1, 13), fe.ff[nW] -= o1
}

function nz() {
	return nj.o7(nW, nl)
}

function nx() {
	return dV.eF(np * fe.ff[nW], 1 + dV.eF(10 * fe.jQ[nW], 16))
}

function ns() {
	var o8 = np * p.nv;
	return nn -= o8, iy.iz(nl, o8, 13), !0
}

function nr() {
	for (var ak = np - 1; 0 <= ak; ak--) fe.kO[nl].push(o9[ak]), fe.k8[nl].push(o9[ak]), eu.eq(o9[ak], nl)
}

function oA() {
	var oB, oC = 8,
		oD = null;

	function oJ(ae, aU, aJ) {
		aU *= 4;
		ae[aU] = 255, ae[1 + aU] = 255, ae[2 + aU] = aJ, ae[3 + aU] = 255
	}

	function oL(ac, oN) {
		var a2, a3, aV, aU, oO, oP, aY = oC,
			ad = aa.ab.getImageData(ac, aY, aY),
			ae = ad.data,
			af = (aY >> 1) - .5,
			oR = aa.dF.oS(oN, .5);
		for (aa.dF.oT(oN, oR, 300) || aa.dF.oU(oN, 100), a3 = 0; a3 < aY; a3++)
			for (a2 = 0; a2 < aY; a2++) oP = (aY - 1.5) * (aY - 1.5) / 4, ae[aU = 4 * (a3 * aY + a2)] = (oO = (aV = (aV = a2 - af) * aV + (aV = a3 - af) * aV) <= (aY - 4.5) * (aY - 4.5) / 4 ? oR : oN)[0], ae[1 + aU] = oO[1], ae[2 + aU] = oO[2], ae[
				3 + aU] = oP < aV ? 0 : 255;
		ac.putImageData(ad, 0, 0)
	}
	this.aB = function() {
		var aJ, aY, aZ, ac, ad, ae;
		(oB = oB || new Array(p.dS)).fill(null), aJ = 255, aY = oC + 4, aZ = aa.ab.aS(aY, aY), ac = aa.ab.getContext(aZ, !0), ad = aa.ab.getImageData(ac, aY, aY), oJ(ae = ad.data, aY + 1, aJ), oJ(ae, aY + 2, aJ), oJ(ae, 2 * aY + 1, aJ), oJ(ae,
				2 * aY - 3, aJ), oJ(ae, 2 * aY - 2, aJ), oJ(ae, 3 * aY - 2, aJ), oJ(ae, aY * (aY - 3) + 1, aJ), oJ(ae, aY * (aY - 2) + 1, aJ), oJ(ae, aY * (aY - 2) + 2, aJ), oJ(ae, aY * (aY - 2) - 2, aJ), oJ(ae, aY * (aY - 1) - 3, aJ), oJ(ae,
				aY * (aY - 1) - 2, aJ), ac.putImageData(ad, 0, 0), oD = aZ,
			function() {
				if (p.e0)
					for (var aZ = new Array(eL.jk.length), gz = p.dS, oG = oB, eK = eL.eK, ak = 0; ak < gz; ak++) {
						var oH = eK[ak];
						aZ[oH] || (aZ[oH] = function(oH) {
							var aZ = aa.ab.aS(oC, oC),
								ac = aa.ab.getContext(aZ, !0),
								eB = eC.eD;
							return eB.set(eL.oM[oH]), oL(ac, eB), aZ
						}(oH)), oG[ak] = aZ[oH]
					}
			}()
	}, this.g9 = function() {
		var ak, player, oV, oW, ip, oa, ob, od, oe, og = ao.aD.og,
			oh = ao.aD.oh,
			oi = ao.aD.oi,
			oj = ao.aD.oj,
			ok = oB,
			ol = p.an,
			gz = ao.aD.om,
			on = a5.fS,
			oo = a5.fQ,
			op = dx.dy << 4,
			or = os,
			ai = or / oC,
			b = l5 / or,
			c = l6 / or,
			aV = (on + l5) / or - b,
			aW = (oo + l6) / or - c,
			ac = gD;
		for (ac.imageSmoothingEnabled = or < 9, aa.ab.textAlign(ac, 1), aa.ab.textBaseline(ac, 1), ak = 0; ak < gz; ak++) player = oh[ak] >> 3, ip = oi[ak], oV = .9 + .1 * Math.log10(ip), oW = (oa = og[ak]) % op / 16 - oV, oa = oo * (Math.floor(
			oa / op) / 16 - oV - c) / aW, ob = -2 * (oe = or * oV) * (1 + (od = +(player === ol)) / 8), od = od * oe / 4, (oe = on * (oW - b) / aV) < ob || oa < ob || on + od < oe || oo + od < oa || (oW = 2 * oV * ai, ob = oV * or, null === (
			od = ok[player]) && (ok[player] = od = function(player) {
			var aZ = aa.ab.aS(oC, oC);
			return oL(aa.ab.getContext(aZ, !0), eu.eA(player)), aZ
		}(player)), player === ol && (ac.setTransform(oW, 0, 0, oW, oe - 2 * oW, oa - 2 * oW), ac.drawImage(oD, 0, 0)), ac.setTransform(oW, 0, 0, oW, oe, oa), ac.drawImage(od, 0, 0), (oV = Math.floor(function(ip) {
			if (ip < 1e3) return .42;
			if (ip < 1e4) return .34;
			if (ip < 1e6) return .26;
			if (ip < 1e8) return .19;
			return .15
		}(ip) * ob)) < 6) || (ac.setTransform(1, 0, 0, 1, 0, 0), ac.fillStyle = oj[ak] ? aF.cE : aF.aG, ac.font = aa.ab.fk(1, oV), ac.fillText(aa.dZ.fy(ip), oe + ob, oa + ob + .1 * oV));
		ac.imageSmoothingEnabled = !1, ac.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ou(title, ov, ow) {
	var hT, ox;
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), ox.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, ow = ow || [new d7("⬅️ " + L(1), function() {
		aC.dE()
	}, aF.cL)], hT = new d6(title, ow), ox = new oy(hT.dA, ov), aa.ab.textAlign(hT.dA.style, 1)
}

function oz() {
	var p0, hR, p1, fS, fQ, font, bE;

	function p6(p8) {
		return p8 < 10 ? "0" + p8 : String(p8)
	}
	this.aB = function() {
		bE = L(50)
	}, this.resize = function() {
		fS = Math.floor((fg.fh.fi() ? .53 : .36) * a5.fj), fQ = Math.floor(.065 * fS), font = aa.ab.fk(1, Math.floor(.9 * fQ)), p1--, this.setTime()
	}, this.az = function() {
		this.setTime() && (j.a0 = !0)
	}, this.setTime = function() {
		for (var h4 = new Date, p2 = h4.getUTCMinutes(), p3 = h4.getUTCSeconds(), p4 = [0, 10, 20, 25, 30, 35, 40, 45, 50], p5 = (hR = 3600 - 60 * p2 - p3, hR %= 300, 300), ak = 0; ak < p4.length; ak++)
			if ((60 * p2 + p3 + hR) % 3600 == 60 * p4[ak]) {
				p5 = 0;
				break
			} return hR += p5, p0 = bE + p6(Math.floor(hR / 60)) + ":" + p6(hR % 60), p1 !== (p1 = 60 * p2 + p3) && (fS = p7.measureText(p0, font), fS += Math.floor(.4 * fQ), !0)
	}, this.g9 = function() {
		gD.lineWidth = 1 + Math.floor(fQ / 15), gD.translate(a5.fS - fQ, Math.floor(.5 * (a5.fQ + fS))), gD.rotate(-Math.PI / 2), gD.fillStyle = aF.aG, gD.fillRect(0, 0, fS, fQ), gD.strokeStyle = aF.bZ, gD.strokeRect(0, 0, fS, fQ + 10), gD
			.fillStyle = aF.bZ, gD.font = font, aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 1), gD.fillText(p0, Math.floor(fS / 2), Math.floor(.59 * fQ)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function p9(pA) {
	var pB = document.createElement("div"),
		pC = document.createElement("div"),
		pD = (this.a2 = 0, this.a3 = 0);

	function pG() {
		f7.iB.n()
	}
	this.bP = pA, this.show = function(a2, a3, pI) {
		if (pD) return [0, 0];
		pD = 1, this.a2 = a2, this.a3 = a3,
			function(self, pI) {
				var fS = aa.ab.go(.16, .7),
					fQ = pA.length * fS / 3,
					pK = a5.fS / a5.a6,
					pL = a5.fQ / a5.a6,
					gp = Math.min(1, Math.min(pK / fS, pL / fQ));
				fS *= gp, fQ *= gp, pI && (self.a2 += aa.ab.go(.03, .5)), self.a2 = dV.dW(self.a2, 0, pK - fS), self.a3 = dV.dW(self.a3, 0, pL - fQ), pC.style.left = self.a2 + "px", pC.style.top = self.a3 + "px", pC.style.width = fS + "px", pC
					.style.height = fQ + "px", pC.style.font = aa.ab.fk(0, .3 * fQ / pA.length), aa.ab.bU(pC, 5);
				for (var ak = 1; ak < pA.length; ak++) aa.ab.bU(pA[ak].button, 8)
			}(this, pI), document.body.appendChild(pB)
	}, this.n = function() {
		pD && (pD = 0, pB.removeEventListener("click", pG), aC.removeChild(document.body, pB))
	};
	for (var ak = 0; ak < pA.length; ak++) new pE("" + (1 + ak), pA[ak].button, 0, 1);
	pB.style.position = "fixed", pB.style.top = "0", pB.style.left = "0", pB.style.width = "100%", pB.style.height = "100%", pB.style.zIndex = "5", pC.style.position = "absolute",
		function() {
			for (var pH = (100 / pA.length).toFixed(2) + "%", ak = 0; ak < pA.length; ak++) pA[ak].button.style.width = "100%", pA[ak].button.style.height = pA[ak].button.style.maxHeight = pH, pA[ak].button.style.padding = "0.0em 0.9em", pC
				.appendChild(pA[ak].button)
		}(), pB.appendChild(pC), pB.addEventListener("click", pG)
}

function pQ() {
	np = 0, pM = 2048, o9 = new Uint32Array(4 * pM), pN = 0, pO = new Uint32Array(pM), pP = new Uint8Array(dx.dy * dx.jK)
}

function pR(player) {
	nl = player, ni = !1, pS(), pT();
	for (var ak = nj.pU(nl) - 1; 0 <= ak; ak--) nm = ak, pV();
	ni && pW()
}

function pW() {
	nZ.pX(), nZ.pY()
}

function pV() {
	nW = nj.pZ(nl, nm), nn = nj.pa(nl, nm), o4 = nj.pb(nl, nm), pc(), (0 !== np && (pd(), pe()) ? nT : nY)()
}

function pe() {
	if (!((o2 = dV.eF(nn, np)) > p.nv)) {
		if (!o4) return !1;
		var pf = np * (1 + p.nv);
		nn += aa.al.o5(nl, pf - nn), o2 = dV.eF(nn, np)
	}
	return !0
}

function pd() {
	for (var ak = np - 1; 0 <= ak; ak--) pP[dV.eF(o9[ak], 4)] = 0
}

function nY() {
	1 === nj.pU(nl) && pg.ph(nl);
	var h4 = aa.al.j5(nl, nn);
	iy.iz(nl, nn - h4, 12), nj.pi(nl, nm)
}

function pS() {
	for (var player = nl, kO = fe.kO, gz = Math.min(kO[player].length, pM), jl = 0, pj = pO, ak = gz - 1; 0 <= ak; ak--) pj[jl++] = kO[player][ak];
	pN = jl
}

function pT() {
	for (var ak = fe.kO[nl].length - 1; 0 <= ak; ak--) eu.ef(fe.kO[nl][ak]) && eu.eq(fe.kO[nl][ak], nl);
	fe.kO[nl] = []
}

function pc() {
	np = 0, (nW === p.dS ? pk : pl)()
}

function pl() {
	for (var g6, gq, ak, dv = eu.dv, eI = 3; 0 <= eI; eI--)
		for (ak = pN - 1; 0 <= ak; ak--) g6 = pO[ak] + dv[eI], gq = dV.eF(g6, 4), 0 === pP[gq] && eu.eW(g6) && eu.ea(g6) === nW && (pP[gq] = 1, o9[np++] = g6)
}

function pk() {
	for (var g6, gq, ak, dv = eu.dv, eI = 3; 0 <= eI; eI--)
		for (ak = pN - 1; 0 <= ak; ak--) g6 = pO[ak] + dv[eI], gq = dV.eF(g6, 4), 0 === pP[gq] && eu.eg(g6) && (pP[gq] = 1, o9[np++] = g6)
}

function pm() {
	var pn = 0,
		po = 0;
	this.pp = function(a2, a3) {
		pn = a2, po = a3
	}, this.pq = function(code) {
		var pu, px, aU;
		p.ay || lU.lD || (aa.al.pr(0) || aa.al.pr(1)) && aa.al.am(p.an) && (lE.lP(pn, po) ? lE.ps = !1 : pt.lP(pn, po) || (pu = pv.pw(pn), px = pv.py(po), aU = pv.pz(pu, px), pv.q0(pu, px) && (0 === code ? function(aU) {
			var q4, ai, or;
			p.gB ? -1 !== (q4 = q5.q6(aU)) && q7.q8.q9(aU) : (ai = pv.qA(aU), eu.eT(ai) ? (q4 = qB.qC.qD(ai)) && (or = pv.qA(q4), or = eu.eg(or) ? p.dS : eu.ea(or), q7.q8.qE(lE.qF(), q4, or)) : (q4 = q5.qG(aU)) < 0 || (ai = pv.qA(
				q4), eu.eg(ai) ? nZ.qH(p.an) ? q7.q8.qI(lE.qF(), p.dS) : nj.pU(p.an) && qJ.qK(p.dS, lE.qF()) : (or = eu.ea(ai), nZ.qL(or, p.an) && (nZ.qM(p.an, or) ? q7.q8.qI(lE.qF(), or) : nj.pU(p.an) && qJ.qK(or, lE
				.qF())))))
		}(aU) : 1 === code ? function(aU) {
			ao.qN.qO(p.an, aU) && q7.q8.mt(lE.qF(), eC.qP[7])
		}(aU) : 2 === code && function(aU) {
			ao.qQ.qR(p.an, aU) && q7.q8.mv(lE.qF())
		}(aU))))
	}, this.qS = function() {
		if (!p.ay && !lU.lD && aa.al.pr(1)) {
			var g6 = p.an;
			if (aa.al.am(g6)) {
				var gz = nj.pU(g6);
				if (gz < 1) ! function() {
					var g6 = p.an;
					if (nZ.qH(g6)) q7.q8.qI(lE.qF(), p.dS);
					else
						for (var dv = eu.dv, k8 = fe.k8, gz = k8[g6].length, qa = Math.floor(Math.random() * gz), ak = 0; ak < gz; ak++)
							for (var qb = 3; 0 <= qb; qb--) {
								var qc = k8[g6][(ak + qa) % gz] + dv[qb];
								if (eu.eW(qc)) {
									qc = eu.ea(qc);
									if (qc !== g6 && (!p.e0 || nZ.qL(g6, qc))) return q7.q8.qI(lE.qF(), qc)
								}
							}
				}();
				else {
					for (var qU = 0, ip = nj.pa(g6, 0), ak = 1; ak < gz; ak++) {
						var mf = nj.pa(g6, ak);
						mf < ip && (ip = mf, qU = ak)
					}
					q7.q8.qI(lE.qF(), nj.pZ(g6, qU))
				}
			}
		}
	}, this.qV = function() {
		if (!p.ay && !lU.lD && aa.al.am(p.an) && aa.al.pr(1)) return qW.lW ? qW.qX(p.an) ? void q7.q8.qY(1) : void 0 : void(qW.qZ(p.an) && q7.q8.qV())
	}
}

function qe() {
	this.qf = function(player, id) {
		for (var qg = fe.k9[player], gz = qg.length, ak = 0; ak < gz; ak++)
			if (pv.qh(qg[ak], id)) return !0;
		return !1
	}, this.qi = function(player, aU) {
		for (var qj, qk, ai, qg = fe.k9[player], gz = qg.length, fS = dx.dy, qm = pv.qn(aU), qo = pv.qp(aU), qq = -1, min = dx.dy * dx.dy + dx.jK * dx.jK, id = eu.ei(pv.qA(aU)), ak = 0; ak < gz; ak++)(qk = (qk = qm - (qj = (ai = qg[ak]) >> 2) %
			fS) * qk + (qk = qo - ~~((.5 + qj) / fS)) * qk) < min && pv.qh(ai, id) && (min = qk, qq = qj);
		return qq
	}, this.qr = function(qs, qj) {
		for (var id = eu.ei(pv.qA(qj)), qt = pv.qu, ai = pv.qA(qs), qv = -1, ak = 0; ak < 4; ak++) {
			var or = ai + qt[ak];
			eu.ee(or) && eu.ei(or) === id && (-1 === qv || pv.qw(pv.qx(or), qj) < pv.qw(qv, qj)) && (qv = pv.qx(or))
		}
		return qv
	}, this.qy = function(player, aU) {
		for (var qt = pv.qu, ai = pv.qA(aU), ak = 0; ak < 4; ak++) {
			var or = ai + qt[ak];
			if (eu.eW(or) && eu.eZ(player, or)) return !0
		}
		return !1
	}, this.qz = function(player, aU) {
		for (var qt = pv.qu, ai = pv.qA(aU), ak = 0; ak < 4; ak++) {
			var or = ai + qt[ak];
			if (eu.eg(or)) return !0;
			if (eu.eW(or)) {
				or = eu.ea(or);
				if (player !== or && nZ.qL(player, or)) return !0
			}
		}
		return !1
	}, this.r0 = function(aU) {
		for (var qt = pv.qu, ai = pv.qA(aU), ak = 0; ak < 4; ak++) {
			var or = ai + qt[ak];
			if (eu.eW(or)) {
				or = eu.ea(or);
				if (aa.al.is(or)) return or
			}
		}
		return -1
	}, this.r1 = function(ai) {
		if (eu.ee(ai))
			for (var qt = pv.qu, ak = 0; ak < 4; ak++)
				if (eu.ef(ai + qt[ak])) return !0;
		return !1
	}, this.r2 = function(player, id) {
		for (var ha = player << 3, hb = ha + ao.aD.r3[player], ap = ao.aD.ap, r4 = ao.aD.r4, ak = ha; ak < hb; ak++) {
			var r5 = r4[ak];
			if (ap[r5] === id) return r5
		}
		return -1
	}, this.r6 = function(player) {
		return 0 === ao.aD.r3[player] ? -1 : ao.aD.r4[player << 3]
	}, this.r7 = function(lQ, lR) {
		var gz = ao.aD.om;
		if (gz < 1) return -1;
		for (var og = ao.aD.og, r8 = 80, r9 = -1, ak = 0; ak < gz; ak++) {
			var aX = pv.rA(lQ, lR, og[ak]);
			aX < r8 && (r8 = aX, r9 = ak)
		}
		return function(ak, lQ, lR) {
			if (ak < 0) return;
			var rR = ao.aD.og[ak],
				rS = pv.rT(rR),
				rR = pv.rV(rR),
				ak = 20 * (.9 + .1 * Math.log10(ao.aD.oi[ak]));
			return ak = Math.max(ak, pv.rX(aa.ab.gr(.02, 1.7))), dV.rY(pv.rZ(lQ), pv.ra(lR), rS, rR, ak)
		}(r9, lQ, lR) ? r9 : -1
	}, this.rC = function(rD) {
		for (var gz = ao.aD.om, ap = ao.aD.ap, ak = 0; ak < gz; ak++)
			if (ap[ak] === rD) return eC.qP[2] = ak, !0;
		return !1
	}, this.rE = function(player) {
		for (var ha = player << 3, hb = ha + ao.aD.r3[player], r4 = ao.aD.r4, oi = ao.aD.oi, ip = 0, ak = ha; ak < hb; ak++) ip += oi[r4[ak]];
		return ip
	}, this.rF = function(player, rG) {
		rG = ao.aD.rI[rG];
		return this.qy(player, rG[rG.length - 1])
	}, this.rJ = function(qs, qj, aX, rK) {
		var rL = pv.qn(qs),
			qs = pv.qp(qs),
			rN = pv.qn(qj),
			qj = pv.qp(qj),
			rN = (aX = Math.max(aX, 1), rN - rL),
			qj = qj - qs,
			aV = dV.eF(Math.abs(rN) * rK, aX),
			rK = dV.eF(Math.abs(qj) * rK, aX);
		return pv.pz(rL + Math.sign(rN) * aV, qs + Math.sign(qj) * rK)
	}, this.rb = function(rH, aU) {
		for (var gz = rH.length - 1, a2 = pv.qn(aU), a3 = pv.qp(aU), ak = 0; ak < gz; ak++) {
			var qs = rH[ak],
				qj = rH[ak + 1],
				b = pv.qn(qs),
				qs = pv.qp(qs),
				d = pv.qn(qj),
				qj = pv.qp(qj);
			if (!(a2 !== b && a2 !== d && Math.sign(a2 - b) === Math.sign(a2 - d) || a3 !== qs && a3 !== qj && Math.sign(a3 - qs) === Math.sign(a3 - qj))) {
				if (b === d || qs === qj) return ak;
				if (Math.abs(a2 - b) === Math.abs(a3 - qs) && Math.abs(a2 - d) === Math.abs(a3 - qj)) return ak
			}
		}
		return -1
	}, this.rc = function() {
		for (var rd = re[0], oh = ao.aD.oh, om = ao.aD.om, eB = [], ak = 0; ak < om; ak++) aa.al.rf(rd, oh[ak] >> 3) && eB.push(ak);
		return eB
	}, this.rg = function(player, rH) {
		for (var ha = player << 3, hb = ha + ao.aD.r3[player], r4 = ao.aD.r4, rI = ao.aD.rI, jq = rH[0], k1 = rH[rH.length - 1], ak = ha; ak < hb; ak++) {
			var g6 = rI[r4[ak]];
			if (g6[0] === jq && g6[g6.length - 1] === k1) return !0
		}
		return !1
	}
}

function rh() {
	var rk, rl, iT = document.createElement("div"),
		ri = document.createElement("div"),
		rj = document.createElement("div"),
		iV = document.createElement("div"),
		bP = [],
		kd = [L(51), L(52), L(53), L(54), L(55), L(56), L(57)],
		rm = [1, 2, 3, 0, 9, 10, 11];

	function rn(ak) {
		aC.dT(8, 0, new hY(21, {
			hZ: rm[ak],
			ha: 0,
			hb: 10
		}))
	}
	this.show = function() {
			this.aM(aC.aD.ro), document.body.appendChild(iT)
		}, this.n = function() {
			aC.removeChild(document.body, iT)
		}, this.aM = function(ro) {
			for (var rp = [3, 0, 1, 2, 4, 5, 6], ak = 0; ak < bP.length; ak++) {
				var fS = ro[ak];
				rk[rp[ak]][1].bM.textContent = fS || ""
			}
		}, this.resize = function() {
			var ak, md = bW.gap,
				fQ = aa.ab.gr(.085),
				fS = Math.min(4 * fQ, a5.fS - 2 * md),
				gz = bP.length;
			for (aa.ab.gk(iT, md, a5.fQ - md - fQ, fS, fQ), aa.ab.bU(iT), aa.ab.bU(ri, 6), ak = 0; ak < gz - 1; ak++) aa.ab.bU(bP[ak].button, 6);
			for (ak = 0; ak < gz; ak++) rk[ak][0].resize(), rk[ak][1].resize();
			for (bP[0].a2 = 0, bP[0].button.style.left = aa.ab.bV(bP[0].a2), bP[0].button.style.width = aa.ab.gm(1.7 * fQ), ak = 1; ak < gz; ak++) bP[ak].a2 = bP[ak - 1].a2 + bP[ak - 1].button.offsetWidth, bP[ak].button.style.left = aa.ab.bV(bP[ak]
				.a2);
			if (!rl) {
				if (!i4.rq()) return;
				(rl = i4.get(14)).style.width = "24%", rl.style.position = "absolute", ri.appendChild(rl)
			}
			rl.style.left = aa.ab.bV(0), rl.style.top = "7%", rj.h8 && (rj.scrollLeft = rj.h8)
		}, iT.style.position = "absolute", ri.style.width = "25%", ri.style.height = "100%", ri.style.backgroundColor = aF.bd, rj.style.position = "absolute", rj.style.width = "75%", rj.style.height = "100%", rj.style.backgroundColor = aF.bd, rj
		.style.top = rj.style.right = aa.ab.bV(0), aa.ab.h6(rj), iV.style.height = iV.style.maxHeight = "100%", bP.push(new d7("", function() {
			rn(0)
		}, aF.cQ)), bP.push(new d7("", function() {
			rn(1)
		}, aF.cR)), bP.push(new d7("", function() {
			rn(2)
		}, aF.cJ)), bP.push(new d7("", function() {
			rn(3)
		}, aF.c4)), bP.push(new d7("", function() {
			rn(4)
		}, aF.cp)), bP.push(new d7("", function() {
			rn(5)
		}, aF.cl)), bP.push(new d7("", function() {
			rn(6)
		}, aF.cp)), rk = new Array(bP.length);
	for (var ak = 0; ak < bP.length; ak++) bP[ak].button.style.position = "absolute", rk[ak] = [new bG(kd[ak], bP[ak].button, .25, .45), new bG("", bP[ak].button, .53, .84, 1)], bP[ak].button.style.height = bP[ak].button.style.maxHeight = "100%", bP[
		ak].button.top = aa.ab.bV(0), iV.appendChild(bP[ak].button);
	rj.appendChild(iV), iT.appendChild(ri), iT.appendChild(rj)
}

function rr() {
	var fS, fQ, rs;

	function sG(jq, eI, sE, rw, ae) {
		eI = sF(jq, eI + 1 + 2 * rw & 3);
		! function(jq, k1) {
			return 1 < Math.abs(jq % fS - k1 % fS) || 1 < Math.abs(sI(jq) - sI(k1))
		}(jq, eI) && 0 === ae[eI << 2] && (ae[eI << 2] = sE)
	}

	function sI(g6) {
		return Math.floor((g6 + .5) / fS) % fQ
	}

	function sF(g6, eI) {
		return g6 + rs[eI]
	}
	this.rt = function(bE) {
		var ak, mw, gz, ru, rx = n7;
		for (iH.cw.ry(iH.cw.rz(bE)), dx.s0.s1[dx.nd].fS = dx.dy = fS = rx.s2(12), dx.s0.s1[dx.nd].fQ = dx.jK = fQ = rx.s2(12), rs = [-fS, -1, fS, 1], dx.lm = document.createElement("canvas"), dx.lm.width = dx.dy, dx.lm.height = dx.jK, dx.fl = dx
			.lm.getContext("2d", {
				alpha: !1
			}), dx.s5 = dx.s8 = null, dx.s5 = dx.fl.getImageData(0, 0, dx.dy, dx.jK), dx.s8 = dx.s5.data, aa.dF.s9(dx.s8), gz = rx.s2(12), mw = rx.s2(5), ru = nS(fS * fQ - 1), ak = 0; ak < gz; ak++) ! function(af, g6, rv, rw) {
			var ak, eI, rx = n7,
				ae = dx.s8,
				sA = g6,
				sB = g6,
				sC = 0,
				sD = 1 + rv,
				sE = 2 - rv;
			for (ae[g6 << 2] = sD, ak = 0; ak < af; ak++) eI = rx.s2(2), g6 = sF(g6, eI), ae[g6 << 2] === sD ? sC % 2 == 1 && sG(sB, sC + 2 * rw + 3, sE, rw, ae) : ae[g6 << 2] = sD, sG(g6, eI, sE, rw, ae), sG(sB, eI, sE, rw, ae), sB = g6,
				sC = eI;
			sF(g6, 0) === sA ? (sG(g6, 0, sE, rw, ae), sG(sA, 0, sE, rw, ae)) : sF(g6, 1) === sA && (sG(g6, 0, sE, rw, ae), sG(sA, 2, sE, rw, ae));
			0 === af && (sG(sA, 0, sE, rw, ae), sG(sA, 2, sE, rw, ae))
		}(rx.s2(mw), rx.s2(ru), 1 === rx.s2(1), 1 === rx.s2(1));
		var a2, a3, qc, sJ, sK, sL, ae = dx.s8,
			sM = !0,
			sN = dx.s0.s1[dx.nd].sN,
			sO = dx.s0.s1[dx.nd].sO;
		for (a3 = 0; a3 < fQ; a3++)
			for (sJ = !0, sK = sM, a2 = sL = 0; a2 < fS; a2++) qc = 4 * a3 * fS + 4 * a2, sL <= a2 && 0 < ae[qc] && (sK = 2 === ae[qc], sJ) && (sJ = !1, sK !== sM) ? (sM = sK, sL = a2 + 1, a2 = -1) : (sK ? (ae[qc] = sO[0], ae[1 + qc] = sO[1], ae[
				2 + qc] = sO[2]) : (ae[qc] = sN[0], ae[1 + qc] = sN[1], ae[2 + qc] = sN[2]), ae[3 + qc] = 255);
		dx.fl.putImageData(dx.s5, 0, 0), dx.s6 = !0, dx.s7.aB(), j.a0 = !0
	}
}

function sP() {
	this.sQ = new sR, this.hP = new oA, this.aD = new sS, this.sT = new sU, this.sV = new aO, this.sW = new sX, this.sY = new sZ, this.sa = new sb, this.sc = new sd, this.se = new sf, this.sg = new sh, this.qN = new si, this.sj = new sk, this.iA =
		new qe, this.qQ = new sl, this.sm = new sn, this.so = new sp, this.aB = function() {
			this.sj.aB(), this.hP.aB(), this.aD.aB(), this.sT.aB(), this.sV.aB(), this.se.aB(), this.sm.aB()
		}, this.g9 = function() {
			this.se.g9(), this.hP.g9()
		}
}

function iP() {
	var sq = [],
		rk = [],
		sr = [];

	function st(aN) {
		for (var gP = aN.gP, ss = [];;) {
			var aT = function sy(gP, position) {
				position = gP.indexOf("@", position);
				if (position < 0) return -1;
				var bE = gP.substring(position + 1, position + 6);
				if (5 !== bE.length) return sy(gP, position + 1);
				if (aa.dZ.startsWith(bE, "room")) return sy(gP, position + 1);
				var tO = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!tO.test(bE)) return sy(gP, position + 1);
				tO = gP.substring(position + 6, position + 7);
				if (1 !== tO.length) return position;
				bE = new RegExp("^[ :!.]+$");
				if (!bE.test(tO)) return sy(gP, position + 1);
				return position
			}(gP, 0);
			if (-1 === aT) {
				ss.push(sz(gP, aN));
				break
			}
			0 === aT ? ss.push(t0(gP.substring(1, 6), aN, aT)) : (ss.push(sz(gP.substring(0, aT), aN)), ss.push(t0(gP.substring(aT + 1, aT + 6), aN, aT))), gP = gP.substring(aT + 6)
		}
		return ss
	}

	function t0(bE, aN, aT) {
		var t1 = function(bE) {
				var tJ = iH.cw.iI(bE, 5),
					t1 = f7.i9.tL(tJ);
				if (t1) {
					for (sq.push(t1); 75 < sq.length;) sq.shift();
					return t1
				}
				for (var tM = f7.i9.tM, ak = tM.length - 1; 0 <= ak; ak--)
					if (t1 = tM[ak], tJ === t1.tJ) return sq.push(t1), t1;
				for (ak = sq.length - 1; 0 <= ak; ak--)
					if (t1 = sq[ak], tJ === t1.tJ) return sq.push(t1), t1;
				return f7.i9.tN(tJ, bE, 1, 999999, 999999, 0, 0, 0, 0)
			}(bE),
			bE = (0 === aT && 0 === aN.su.id && aN.sv && (aN.fontSize = f7.iA.t3(t1.t4, t1.t5), aN.sx = f7.iA.t6(t1.t5)), document.createElement("span"));
		return bE.textContent = function(t1, aN, aT) {
			if (t1.tF) return t1.tF--, aT = 2 === aN.su.id || (3 === aN.su.id || 4 === aN.su.id) && 0 !== aT, t1.username + (aT ? " (" + t1.tH + ")" : "");
			if (aN.su.tI) return "Redacted " + n9.cw.fy(t1.tJ, 2);
			return t1.username
		}(t1, aN, aT), bE.style.display = "inline-block", bE.style.color = f7.iA.t8(t1.t4), bE.style.cursor = "pointer", bE.style.margin = "0", bE.style.font = "inherit", bE.style.minWidth = bE.style.minHeight = "1em", f7.iA.t9(t1) && (bE.style
			.textDecoration = "underline"), t1.tA && (bE.style.textDecorationLine = "underline", bE.style.textDecorationStyle = "dotted"), f7.iA.t6(t1.t5) && (bE.style.fontWeight = "bold"), bE.onclick = function(i) {
			f7.iB.tB(i, t1)
		}, tC.tD() || (bE.onmouseover = function(i) {
			f7.fH.tE(i, t1)
		}), rk.push(bE), bE
	}

	function sz(gP, aN) {
		var bM = document.createElement("span");
		return bM.textContent = gP, bM.style.color = aN.tK, bM.style.margin = "0", bM.style.font = "inherit", bM
	}

	function tV(t1, tU, tJ) {
		tJ !== t1.tJ || t1.tH || (t1.tH = t1.username, t1.username = tU)
	}
	this.hn = function() {
		for (var ak = 0; ak < rk.length; ak++) rk[ak].onclick = rk[ak].onmouseover = null;
		sr = rk = null
	}, this.transform = function(aN) {
		for (var bR = document.createElement("div"), ss = st(aN), ak = 0; ak < ss.length; ak++) bR.appendChild(ss[ak]);
		0 === aN.su.id && (bR.vx143 = aN.su, sr.push(bR)), bR.style.margin = "0.6em 0.6em", aN.sv && (bR.style.marginLeft = bR.style.marginRight = "inherit"), bR.style.font = "inherit";
		var sw = 0 < aN.su.id;
		return aN.sx && (bR.style.fontWeight = "bold"), sw && (bR.style.paddingLeft = "0.7em"), sw && (bR.style.fontStyle = "italic"), bR.style.fontSize = aN.fontSize.toFixed(2) + "em", bR
	}, this.tR = function(tS) {
		if (tS && (2 === tS.id && 1 === tS.tT || 3 === tS.id && 2 === tS.tT)) {
			var tJ = 3 === tS.id ? tS.target : tS.tJ;
			if (!f7.i9.tL(tJ)) {
				for (var tU = "Redacted " + n9.cw.fy(tJ, 2), tM = f7.i9.tM, ak = tM.length - 1; 0 <= ak; ak--) tV(tM[ak], tU, tJ);
				for (ak = sq.length - 1; 0 <= ak; ak--) tV(sq[ak], tU, tJ)
			}
		}
	}, this.tW = function(tJ) {
		for (var tX = sr, ak = tX.length - 1; 0 <= ak; ak--) {
			var eI = tX[ak];
			if (eI.vx143.tJ === tJ) {
				for (; eI.firstChild;) aC.removeChild(eI, eI.firstChild);
				for (var ss = st(f7.iA.tY(eI.vx143, f7.iA.tZ(eI.vx143))), ju = 0; ju < ss.length; ju++) eI.appendChild(ss[ju]);
				tX.splice(ak, 1)
			}
		}
	}, this.ta = function(tJ) {
		for (var tX = sr, ak = tX.length - 1; 0 <= ak; ak--) {
			var eI = tX[ak];
			if (eI.vx143.tJ === tJ) {
				for (; eI.firstChild;) aC.removeChild(eI, eI.firstChild);
				eI.vx143.gP = "[Redacted Message]";
				for (var ss = st(f7.iA.tY(eI.vx143, f7.iA.tZ(eI.vx143))), ju = 0; ju < ss.length; ju++) eI.appendChild(ss[ju]);
				tX.splice(ak, 1)
			}
		}
	}
}

function tb() {
	this.tc = function() {
		for (var gz = p.e3, mQ = mO.result.mQ, af = mQ.length, te = (n4.gZ(17 + 16 * gz + 33 * af), n4.ga(1, 1), n4.ga(4, 12), n4.ga(10, af), n4.ga(1, +(2 === p.mV)), n4.ga(1, p.td % 2), fe.te), ak = 0; ak < gz; ak++) n4.ga(16, te[ak]);
		for (var jQ = fe.jQ, ak = 0; ak < af; ak++) {
			var g6 = mQ[ak];
			n4.ga(9, g6), n4.ga(24, jQ[g6])
		}
		bA.aD.send(bA.aD.bB, n4.gd)
	}
}

function tf() {
	this.tg = null, this.th = 0, this.ti = function() {
		for (this.th = 0, ak = p.dS - 1; 0 <= ak; ak--) 0 !== fe.gA[ak] && this.th++;
		this.tg = new Uint16Array(this.th);
		for (var gz = 0, ak = 0; ak < p.dS; ak++) 0 !== fe.gA[ak] && (this.tg[gz++] = ak)
	}, this.tj = function() {
		for (var jQ = fe.jQ, k7 = fe.k7, tp = fe.tp, tg = tq.tg, ak = tq.th - 1; 0 <= ak; ak--) {
			var g6 = tg[ak],
				h4 = jQ[g6],
				af = k7[g6];
			h4 <= dV.eF(af, 4) ? tr.ts(g6) : af <= h4 ? 250 <= (k7[g6] = h4) && (tp[g6] = 1) : k7[g6] = af - Math.max(1, dV.eF(af - h4, 1e3))
		}
		this.tl()
	}, this.tl = function() {
		for (var gA = fe.gA, tm = this.tg, tn = this.th, ak = tn - 1; 0 <= ak; ak--) 0 === gA[tm[ak]] && (tm[ak] = tm[--tn]);
		this.th = tn
	}
}

function tt() {
	this.id = 0, this.hB = 0, this.hD = null, this.hE = null, this.hF = null, this.hL = null, this.fh = new tu, this.aB = function() {
		var self, hB;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (hB = Android.getVersion()) < 12 || (self.hB = hB, self.id = 1, self.hE = Android),
			function(self) {
				var hB;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.hF = mwIOSdataX, self.hL = window.webkit.messageHandlers.iosCommandA, hB = self
					.hF.version, self.hB = hB ? Number(hB) : 0)
			}(this),
			function(self) {
				var hD;
				try {
					if (!(hD = window.localStorage)) return;
					hD.setItem("tls7", "1"), hD.removeItem("tls7")
				} catch (error) {
					return
				}
				self.hD = hD
			}(this)
	}
}

function ty() {
	var tz, u0, size, kS, ip, u1;

	function u2(player) {
		return player < p.e3 ? tz * player : tz * p.e3 + u0 * (player - p.e3)
	}
	this.aB = function() {
		tz = p.e3 < 16 ? 12 : 8, u0 = 4;
		var gz = u2(p.dS);
		size = new Uint8Array(p.dS), kS = new Uint16Array(gz), ip = new Uint32Array(gz), u1 = new Uint8Array(gz)
	}, this.u3 = function(u4, u5) {
		var u6 = this.o7(u4, u5),
			u5 = (this.o6(u4, u5, 0), aa.al.j5(u4, u6));
		iy.iz(u4, u6 - u5, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.u8 = function(player, u5) {
		var uA, u5 = function(player, u5) {
			var ak, af = u2(player);
			for (ak = size[player] - 1; 0 <= ak; ak--)
				if (kS[af + ak] === u5) return ak;
			return size[player]
		}(player, u5);
		u5 !== size[player] && (uA = ip[u2(player) + u5], this.pi(player, u5), this.j1(player, uA, p.dS))
	}, this.uB = function(player, u5) {
		for (var af = u2(player), ak = size[player] - 1; 0 <= ak; ak--)
			if (kS[af + ak] === u5) return !0;
		return !1
	}, this.uC = function(player) {
		return player < p.e3 ? size[player] < tz : size[player] < u0
	}, this.pU = function(player) {
		return size[player]
	}, this.pZ = function(player, ak) {
		return kS[u2(player) + ak]
	}, this.pa = function(player, ak) {
		return ip[u2(player) + ak]
	}, this.o7 = function(player, u5) {
		for (var af = u2(player), ak = size[player] - 1; 0 <= ak; ak--)
			if (kS[af + ak] === u5) return ip[af + ak];
		return 0
	}, this.rE = function(player) {
		for (var af = u2(player), eH = 0, ak = size[player] - 1; 0 <= ak; ak--) eH += ip[af + ak];
		return eH
	}, this.o6 = function(player, u5, uA) {
		for (var af = u2(player), ak = size[player] - 1; 0 <= ak; ak--) kS[af + ak] === u5 && (ip[af + ak] = uA)
	}, this.nk = function(player, ak, uA) {
		ip[u2(player) + ak] = Math.max(uA, 0)
	}, this.no = function(player, ak) {
		u1[u2(player) + ak] = 0
	}, this.pb = function(player, ak) {
		return u1[u2(player) + ak]
	}, this.j1 = function(player, uA, u5) {
		it.iu.iv[player] = it.iu.iv[u5] = 8, aa.al.uD(u5) && iy.jP[6 - aa.al.is(player)]++;
		for (var af = u2(player), ak = size[player] - 1; 0 <= ak; ak--)
			if (kS[af + ak] === u5) return ip[af + ak] += uA, void(ip[af + ak] = ip[af + ak] > p.uE ? p.uE : ip[af + ak]);
		kS[af + size[player]] = u5, ip[af + size[player]] = uA, u1[af + size[player]] = 1, size[player]++, u5 === p.an ? mY.uF(player, 5) : player < p.e3 && player === p.an && j7.uG(u5)
	}, this.pi = function(player, aJ) {
		var ju, af;
		if (0 !== size[player])
			for (af = u2(player), size[player]--, ju = aJ; ju < size[player]; ju++) kS[af + ju] = kS[af + ju + 1], ip[af + ju] = ip[af + ju + 1], u1[af + ju] = u1[af + ju + 1]
	}, this.uH = function(player) {
		for (var ju, af, uI = [], ak = tq.th - 1; 0 <= ak; ak--)
			for (af = u2(tq.tg[ak]), ju = size[tq.tg[ak]] - 1; 0 <= ju; ju--)
				if (kS[af + ju] === player) {
					uI.push(tq.tg[ak]);
					break
				} return uI
	}
}

function uJ() {
	this.lg = 0, this.gap = 0, this.gj = 0, this.bX = 0, this.aB = function() {
		this.resize()
	}, this.resize = function() {
		this.lg = .0022 * aa.ab.gn(.5) * a5.fj, this.gj = this.lg / a5.a6, this.gap = Math.max(Math.floor((fg.fh.fi() ? .0114 : .01296) * a5.fj), 2), this.bX = this.gap / a5.a6
	}
}

function tu() {
	this.uK = function() {
		aK.aL.uL(), aK.aL.uM(), bA.aD.close(0, 3255), 0 === fg.id ? fg.hD && fg.hD.clear() : 1 === fg.id ? fg.hE.saveString(199, "") : 2 === fg.id && fg.hL.postMessage("clear")
	}, this.uN = function() {
		2 === fg.id ? fg.hL.postMessage("showConsentForm") : 1 === fg.id && fg.hE.setState(7)
	}, this.uO = function() {
		this.setState(14)
	}, this.fi = function() {
		return 1 === aK.f4.uP(2)
	}, this.uQ = function() {
		aK.f4.uR(102, "")
	}, this.setState = function(uS) {
		1 === fg.id && 5 <= fg.hB && fg.hE.setState(uS)
	}, this.gU = function() {
		var uT;
		1 === fg.id && 7 <= fg.hB ? fg.hE.setState(5) : ((uT = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = uT.toString())
	}, this.uU = function() {
		1 !== fg.id || fg.hB < 17 || fg.hE.saveString(23, document.documentElement.outerHTML)
	}, this.uV = function() {
		0 !== fg.id && (1 === fg.id ? fg.hE.prepareAd("1688441405") : 2 === fg.id && (0 === fg.hB ? fg.hL.postMessage("prepare ad 2904813909") : fg.hL.postMessage("loadAds 2904813909")))
	}, this.uW = function(h4) {
		return 0 !== fg.id && 1 !== fg.id && 2 === fg.id && 0 !== fg.hB && (fg.hL.postMessage("showAd"), !0)
	}, this.uX = function() {
		2 === fg.id && fg.hB < 23 && aC.dT(4, 1, new gR("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + uY.uZ + "' target='_blank'>" + uY
			.uZ + "</a>", !0, [new d7("⬅️ " + L(1), function() {
				aC.dT(0)
			}, aF.cL)]))
	}
}

function ua() {
	this.ub = function() {
		for (var gz = tq.th, uc = tq.tg, mQ = [], ak = 0; ak < gz; ak++) {
			var g6 = uc[ak];
			aa.al.ud(g6) && mQ.push(g6)
		}
		return mQ
	}, this.ue = function() {
		if (0 === eL.jk[p.uf]) return this.ug();
		uh.ui(p.uf);
		for (var mQ = [], gz = eC.uj[0], jp = eC.jp, ak = 0; ak < gz; ak++) {
			var g6 = jp[ak];
			aa.al.ud(g6) && mQ.push(g6)
		}
		return mQ
	}, this.ug = function() {
		var g6 = re[0];
		return aa.al.ud(g6) ? [g6] : []
	}, this.uk = function(mQ) {
		for (var gz = mQ.length, h4 = 0, jQ = fe.jQ, ak = 0; ak < gz; ak++) h4 += jQ[mQ[ak]];
		return h4
	}
}

function ul() {
	var d3, um;

	function uq() {
		aC.gS();
		var bE = ls.bD(um.dH());
		(p.q && 0 < bE.length && bE === ls.ar.ut || ls.aw.rt(bE)) && ls.b5()
	}
	this.show = function(ur) {
		this.b4(ur), d3.show(), this.resize()
	}, this.b4 = function(ur) {
		0 === p.q ? ur ? um.dY(ur) : p.us.length && um.dY(p.us) : (p.ay || (ls.ar.ut = ls.au.lt()), um.dY(ls.bF(ls.ar.ut)))
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), um.resize()
	}, this.db = function(aT) {
		2 === aT ? d3.dc[0].dd() : uq()
	}, d3 = new d6(L(58), [new d7("⬅️ " + L(1), function() {
		aC.un(1)
	}), new d7(L(59), function() {
		um.uo()
	}), new d7(L(60), function() {
		um.up()
	}), new d7(L(61), function() {
		um.clear()
	}), new d7(L(62), function() {
		uq()
	})]), um = new dX(L(63)), d3.dA.appendChild(um.i)
}

function uu() {
	var uv, uw = new Uint8Array(5),
		ux = new Uint8Array(5);
	this.uy = new uz, this.aB = function() {
		for (var eH = aK.f4.data[119].value, ak = 0; ak < uw.length; ak++) uw[ak] = (eH >> 2 * ak) % 4
	}, this.v0 = function() {
		uv = [L(64), "", L(65, [v1.v2[28]]), L(66, [v1.v2[26]]), L(67, [v1.v2[0]])], this.uy.aB()
	}, this.az = function() {
		this.uy.az()
	}, this.v3 = function(id) {
		1 < id && tC.tD() || ! function(aJ) {
			if (3 === uw[aJ] || 1 === ux[aJ]) return;
			if (ux[aJ] = 1, !(Math.random() < .6)) {
				uw[aJ]++;
				for (var eH = 0, ak = 0; ak < uw.length; ak++) eH += uw[ak] << 2 * ak;
				aK.aL.aM(119, eH)
			}
			return 1
		}(id) || mY.v5(uv[id])
	}
}

function v6() {
	var hT, v7, v8, v9, vA, vB, colors = [0, 0, 0],
		vC = -1;

	function vI(ak) {
		var vJ = v7.a3 + ak * (bW.gap + vB);
		gD.fillStyle = "rgb(" + (0 === ak ? 150 : 2 === ak ? 30 : 0) + "," + (1 === ak ? 130 : 2 === ak ? 30 : 0) + "," + (2 === ak ? 220 : 0) + ")", gD.fillRect(v9, vJ, colors[ak] * vA, vB), gD.strokeStyle = aF.aG, gD.strokeRect(v9, vJ, vA, vB), gD
			.fillStyle = aF.aG, gD.font = aa.ab.fk(0, .32 * vB), aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 0), gD.fillText(L(0 === ak ? 70 : 1 === ak ? 71 : 72) + vF(ak), v9 + bW.gap, vJ + .53 * vB)
	}

	function vF(ak, vK) {
		return vK = vK || 256, dV.dW(Math.floor(vK * colors[ak]), 0, vK - 1)
	}

	function vL(lQ, lR) {
		return !(lQ < v9 || lR < v7.a3 || lQ > v7.a2 + v7.fS || lR > v7.a3 + v7.fQ)
	}
	this.show = function() {
		var eH = aK.f4.data[121].value;
		colors[0] = (eH >> 12) / 63, colors[1] = (eH >> 6 & 63) / 63, colors[2] = (63 & eH) / 63, hT.show(), this.resize()
	}, this.n = function() {
		aK.aL.aM(121, (vF(0, 64) << 12) + (vF(1, 64) << 6) + vF(2, 64)), hT.n()
	}, this.resize = function() {
		hT.resize(), v7.resize();
		var aT = a5.a6,
			ij = hT.ib(),
			vG = (v7.a3 = Math.max(v7.a3, aT * ij.ic + bW.gap), aT * ij.ih - 2 * bW.gap);
		v7.fQ = Math.min(v7.fQ, vG), v7.fS = 2 * v7.fQ, v7.a3 = aT * ij.ic + .5 * (aT * ij.ih - v7.fQ), v7.a2 = .5 * (a5.fS - v7.fS), v8 = .25 * v7.fS, v9 = v7.a2 + v8 + bW.gap, vA = v7.fS - v8 - bW.gap, vB = (v7.fQ - 2 * bW.gap) / 3
	}, this.g9 = function() {
		var aj, md, eM;
		hT.g9(), gD.lineWidth = bW.lg, aj = vF(0), md = vF(1), eM = vF(2), gD.fillStyle = "rgb(" + aj + "," + md + "," + eM + ")", gD.fillRect(v7.a2, v7.a3, v8, v7.fQ), gD.strokeStyle = aF.aG, gD.strokeRect(v7.a2, v7.a3, v8, v7.fQ), gD
			.fillStyle = aj + md + eM < 306 && md < 150 ? aF.aG : aF.bZ, aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 1), gD.font = aa.ab.fk(0, .1 * v7.fQ), gD.rotate(-Math.PI / 2), gD.fillText(L(69), -v7.a3 - .5 * v7.fQ, v7.a2 + .5 * v8), gD
			.setTransform(1, 0, 0, 1, 0, 0), vI(0), vI(1), vI(2)
	}, this.lP = function(lQ, lR) {
		vL(lQ, lR) && (vC = dV.dW(Math.floor((lR - v7.a3) / (vB + .75 * bW.gap)), 0, 2), colors[vC] = dV.dW((lQ - v9) / vA, 0, 1), j.a0 = !0)
	}, this.l7 = function(lQ) {
		-1 !== vC && (colors[vC] = dV.dW((lQ - v9) / vA, 0, 1), j.a0 = !0)
	}, this.vM = function(lQ, lR, deltaY) {
		vL(lQ, lR) && (lQ = dV.dW(Math.floor((lR - v7.a3) / (vB + .75 * bW.gap)), 0, 2), colors[lQ] = dV.dW(colors[lQ] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), j.a0 = !0)
	}, this.vN = function() {
		0 <= vC && (vC = -1, j.a0 = !0)
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(L(68), [new d7("⬅️ " + L(1), function() {
		aC.aD.vD()
	})], !1), v7 = new vE([.5, .25], [.5, .5], 1)
}

function vO() {
	this.iD = new vP, this.ae = new vQ
}

function vR() {
	var a2, a3, fQ, vS, vT, vU, vV, vW, vX, fS, h1, vY;
	this.lW = !1, this.aB = function(bE, vZ) {
		if (1 === fg.id && 13 <= fg.hB && fg.hB < 18) return vZ ? void(h1 = bE) : h1 !== bE ? void 0 : void fg.hE.saveString(200, bE);
		vZ && (h1 = bE, (vY = document.createElement("a")).appendChild(document.createTextNode(h1)), this.lW = !0, vY.title = h1, vY.target = "_blank", vY.href = h1, vY.style.textAlign = "center", vY.style.color = aF.aG, vY.style.position =
			"absolute", vY.style.padding = "0px", vY.style.margin = "0px", this.resize(), document.body.appendChild(vY), j.a0 = !0)
	}, this.n = function() {
		return !(!this.lW || (aC.removeChild(document.body, vY), this.lW = !1))
	}, this.lP = function(w, x) {
		return !!this.lW && ((w < a2 || x < a3 || a2 + fS < w || a3 + fQ < x || a2 + fS - vS < w && x < a3 + vS) && (j.a0 = !0, this.lW = !1, aC.removeChild(document.body, vY)), !0)
	}, this.resize = function() {
		var fR, va;
		this.lW && (vW = Math.floor(.8 * (fg.fh.fi() ? a5.fS > a5.fQ ? .6 : .55 : .4) * a5.fj), vS = Math.floor(.15 * vW), vT = Math.floor(.35 * vS), vU = Math.floor(.5 * vS), vV = Math.floor(2.5 * vU), fQ = vS + vT + 3 * vU, fR = aa.ab.fk(1,
			vT / a5.a6), vX = Math.floor(a5.a6 * p7.measureText(h1, fR)), va = fS = (vW < vX ? vX : vW) + 2 * vV, fS = Math.min(fS, a5.fS - 2 * (fg.fh.fi() ? 2 : 1) * bW.gap), fR = aa.ab.fk(1, fS / va * vT / a5.a6), vX = Math.floor(a5
			.a6 * p7.measureText(h1, fR)), a2 = Math.floor((a5.fS - fS) / 2), a3 = Math.floor((a5.fQ - fQ) / 2), vY.style.font = fR, vY.style.top = Math.floor((a3 + 1.4 * vU + vS) / a5.a6) + "px", vY.style.left = Math.floor((a2 + (fS -
			vX) / 2) / a5.a6) + "px")
	}, this.g9 = function() {
		this.lW && (gD.fillStyle = aF.be, gD.fillRect(a2, a3 + vS, fS, fQ - vS), gD.fillStyle = aF.co, gD.fillRect(a2, a3, fS, vS), gD.fillStyle = aF.aG, gD.lineWidth = bW.lg, gD.strokeStyle = aF.aG, gD.strokeRect(a2, a3, fS, fQ), gD.fillRect(a2,
			a3 + vS, fS, bW.lg), gD.font = aa.ab.fk(1, .48 * vS), aa.ab.textAlign(gD, 1), aa.ab.textBaseline(gD, 1), gD.fillText(L(73), Math.floor(a2 + (fS - .5 * vS) / 2), Math.floor(a3 + .55 * vS)), lU.le(Math.floor(a2 + fS - .8 * vS),
			Math.floor(a3 + .25 * vS), Math.floor(.5 * vS)), gD.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function vb() {
	this.dd = new h9, this.f4 = new vc, this.aL = new vd, this.aD = new ve, this.vf = new vg, this.aB = function() {
		this.f4.aB(), (new vh).aB(), this.vf.aB(), this.aD.vi()
	}
}

function vj() {
	var hT, vk, dI, dM;

	function vl() {
		vn.vo !== aK.f4.data[12].value ? (vn.aB(), aC.dT(8, 1, new hY(30))) : aC.dT(1)
	}
	this.show = function() {
			hT.show(), this.resize()
		}, this.n = function() {
			hT.n()
		}, this.resize = function() {
			hT.resize(), vk.resize()
		}, this.db = function(aT) {
			2 === aT && hT.dc[0].dd()
		}, hT = new d6(L(74), [new d7("⬅️ " + L(1), vl), new d7(L(75), function() {
			aC.gS(), aK.aL.uL(), aC.dT(2)
		})]), dI = [], (dM = new dN).dO(L(76)), dM.vp(L(77)), dI.push(dM),
		function(dI) {
			var dM = new dN,
				eB = (dM.dO(L(100)), vn.data.w1());
			dM.dP(new dQ({
				dR: eB,
				value: vn.data.w2(eB)
			}, function(aJ) {
				return aK.aL.aM(12, eB[aJ].split(":")[0]), !0
			})), dI.push(dM)
		}(dI),
		function(dI) {
			var dM = new dN,
				vv = (dM.dO(L(98)), []);
			dM.dU(new m8([new d7(L(99), function(i) {
				v1.vw();
				for (var ak = 0; ak < vv.length; ak++) vv[ak].i.value = v1.v2[ak];
				return aa.ab.h3(i), !0
			}).button]));
			for (var ak = 0; ak < v1.vx.length; ak++) {
				dM.vp(v1.vx[ak]);
				for (var ju = 0; ju < 2; ju++) {
					var aJ = 2 * ak + ju,
						vy = new a7({
							value: v1.v2[aJ],
							aJ: -1
						});
					vy.i.vz = aJ, vv.push(vy), vy.i.addEventListener("keydown", function(i) {
						i.preventDefault();
						var code = i.code;
						i.target.value = code, v1.w0(i.target.vz, code)
					}), ju && (vy.i.style.marginLeft = "4%"), vy.i.style.width = "48%", dM.dU(vy)
				}
			}
			dI.push(dM)
		}(dI), (dM = new dN).dO(L(78)), dM.dP(new dQ({
			dR: ["1", "2"],
			value: vs.vt - 1
		}, function(ak) {
			vs.vt = ak + 1
		})), dI.push(dM), (dM = new dN).dO(L(79)), aK.f4.data[1].dR = [L(80), L(81), L(82), L(83)], dM.dP(new dQ(aK.f4.data[1])), dI.push(dM), (dM = new dN).dO(L(84)), aK.f4.data[9].dR = [L(81), L(85), L(86)], dM.dP(new dQ(aK.f4.data[9])), dI.push(
			dM), (dM = new dN).dO(L(87)), aK.f4.data[11].dR = [L(88), L(89), L(90)], dM.dP(new dQ(aK.f4.data[11])), dI.push(dM), (dM = new dN).dO(L(91)), dM.dU(new vu(aK.f4.data[2])), dI.push(dM), (dM = new dN).dO(L(92)), dM.dU(new vu(aK.f4.data[
		7])), dI.push(dM), (dM = new dN).dO(L(93)), dM.dU(new vu(aK.f4.data[8])), dI.push(dM), (dM = new dN).dO(L(94)), dM.dU(new a7(aK.f4.data[5])), dI.push(dM), (dM = new dN).dO(L(95)), dM.dU(new vu(aK.f4.data[13], L(96))), dM.dU(new vu(aK.f4.data[
			14], L(97))), dI.push(dM), vk = new d9(hT.dA, dI)
}

function w3() {
	this.k = j.k, this.aJ = 0, this.w4 = 0, this.hw = 0, this.w5 = null, this.w6 = 7, this.p1 = 0, this.aB = function() {
		this.hw = 0, this.w5 = [], this.aJ = 0, this.w4 = 0
	}, this.w7 = function(gd) {
		if (p.gB) this.w8(gd);
		else if (this.w5.push(gd), 2 === p.q) {
			for (var ak = 0; ak < this.w5.length; ak++) q7.w9.az(this.w5[ak]);
			this.w5 = []
		}
	}, this.w8 = function(gd) {
		2 !== p.q && (q7.w9.az(gd), ls.az(), fr.w8(this.hw), this.hw === p.wA ? (p.wB.az(), this.hw = 0, this.aJ = 0, this.w4 = 0, this.k = j.k) : (this.hw++, j7.wC(), j7.fs(!0), es.wD()))
	}, this.az = function() {
		a5.az(), p.gB ? (j.a0 = fr.w8(-1) || j.a0, wE()) : (0 !== this.aJ || j.k >= this.k && (this.k += j.wF * Math.floor(1 + (j.k - this.k) / j.wF), 2 === p.q ? wG() : this.wH(), this.aJ++, 27 < j.k - this.p1)) && this.wI(), wJ(), j.a0 && (j
			.a0 = !1, wK()), this.p1 = j.k
	}, this.wI = function() {
		j.a0 = !0, wL(), this.aJ = 0
	}, this.wH = function() {
		var hK, ak;
		if (this.w4 !== 7 * this.hw) wM(), es.wD();
		else {
			hK = !1;
			loop: for (; this.wN() && (hK = !0, wM(), 2 !== p.q) && 0 < this.w5.length;)
				for (ak = this.w6 - 2; 0 <= ak; ak--)
					if (wM(), 2 === p.q) break loop;
			hK ? es.wD() : (wG(), es.wO())
		}
	}, this.wN = function() {
		return 0 < this.w5.length && (this.hw++, q7.w9.az(this.w5[0]), this.w5.shift(), !0)
	}
}

function wP() {
	var wQ;

	function wj(aZ, wk, a2, a3, globalAlpha) {
		dx.fl.save(), dx.fl.globalAlpha = globalAlpha, dx.fl.imageSmoothingEnabled = !1, dx.fl.scale(wk, wk), dx.fl.drawImage(aZ, Math.floor(a2 * (dx.dy / wk - aZ.width)), Math.floor(a3 * (dx.jK / wk - aZ.height))), dx.fl.restore()
	}
	this.wR = 0, this.wS = 0, this.wT = 0, this.wU = 0, this.aB = function() {
		(wQ = new Array(dx.wV))[0] = {
			fS: [0, 5e3, 8e3, 1e4],
			aj: [220, 250, 255, 220],
			md: [190, 220, 0, 0],
			eM: [170, 200, 0, 0]
		}, wQ[1] = {
			fS: [0, 4e3, 5e3, 6e3, 1e4],
			aj: [25, 0, 100, 0, 25],
			md: [25, 0, 0, 0, 25],
			eM: [25, 0, 0, 0, 25]
		}, wQ[2] = {
			fS: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			aj: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			md: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eM: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, wQ[3] = {
			fS: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			aj: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			md: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eM: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, wQ[4] = {
			fS: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			aj: [10, 10, 20, 10, 10, 170, 212],
			md: [20, 20, 60, 100, 100, 110, 170],
			eM: [70, 70, 160, 30, 30, 60, 120]
		}, wQ[5] = {
			fS: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			aj: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			md: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eM: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, wQ[6] = {
			fS: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			aj: [10, 10, 60, 255, 255, 200, 200],
			md: [10, 10, 60, 255, 255, 200, 200],
			eM: [80, 80, 255, 255, 255, 200, 200]
		}, wQ[7] = {
			fS: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			aj: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			md: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eM: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, wQ[8] = {
			fS: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			aj: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			md: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eM: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, wQ[9] = {
			fS: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			aj: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			md: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eM: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, wQ[20] = {
			fS: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			aj: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			md: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eM: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, wQ[21] = {
			fS: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			aj: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			md: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eM: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.wW = function() {
		var wi, ak, ju, nI, ad = function() {
				var ad;
				return dx.lm = document.createElement("canvas"), dx.lm.width = dx.dy, dx.lm.height = dx.jK, dx.fl = dx.lm.getContext("2d", {
					alpha: !1
				}), ad = dx.fl.getImageData(0, 0, dx.dy, dx.jK), dx.s8 = ad.data, ad
			}(),
			fS = wQ[dx.nd].fS,
			aj = wQ[dx.nd].aj,
			md = wQ[dx.nd].md,
			eM = wQ[dx.nd].eM,
			eH = wb.wc(),
			gz = fS.length - 2,
			wd = new Array(1 + gz),
			we = new Array(1 + gz),
			wf = new Array(1 + gz),
			wg = new Array(1 + gz);
		for (ju = gz; 0 <= ju; ju--) wd[ju] = fS[ju + 1] - fS[ju], we[ju] = aj[ju + 1] - aj[ju], wf[ju] = md[ju + 1] - md[ju], wg[ju] = eM[ju + 1] - eM[ju];
		for (ak = dx.dy * dx.jK - 1; 0 <= ak; ak--)
			for (ju = gz; 0 <= ju; ju--)
				if (eH[ak] >= fS[ju]) {
					nI = eH[ak] - fS[ju], dx.s8[4 * ak] = aj[ju] + eJ(we[ju] * nI, wd[ju]), dx.s8[4 * ak + 1] = md[ju] + eJ(wf[ju] * nI, wd[ju]), dx.s8[4 * ak + 2] = eM[ju] + eJ(wg[ju] * nI, wd[ju]), dx.s8[4 * ak + 3] = 255;
					break
				} dx.fl.putImageData(ad, 0, 0), dx.wZ(dx.nd) && i4.rq() && dx.wZ(dx.nd) && (ad = i4.i5("arena"), wi = i4.i5("territorial.io"), wj(ad, 5, .5, .5, .1), wj(wi, 2, .5, .45, .1)), dx.s6 = !0, j.a0 = !0
	}, this.wl = function() {
		for (var g6, a2, a3, wm, qa, nK, wS = 0, fS = dx.dy, fQ = dx.jK, nI = fS * fQ * 4, wn = eX, wo = dx.s8, ak = fS - 1; 0 <= ak; ak--) wn[(g6 = ak << 2) + 2] = wn[nI - g6 - 2] = 3;
		for (nI = 4 * fS, ak = fQ - 1; 0 <= ak; ak--) wn[(g6 = ak * nI) + 2] = wn[g6 + nI - 2] = 3;
		for (wm = fS - 1, qa = fQ - 1, a3 = 1; a3 < qa; a3++)
			for (nI = a3 * fS, a2 = 1; a2 < wm; a2++) nK = 1 - (wo[(g6 = nI + a2 << 2) + 2] > wo[g6 + 1] && wo[g6 + 2] > wo[g6]), wn[g6 + 2] = 6 - 5 * nK, wS += nK;
		this.wR = (fS - 2) * (fQ - 2), this.wU = 0, dx.nc(dx.nd) && (dx.wU.wp(), dx.wU.wq(4, 5)), this.wS = p.wr = wS - this.wU, this.wT = this.wR - this.wS - this.wU, this.wT && (dx.wU.wq(6, 2), dx.wU.ws())
	}
}

function ww() {
	(wt = void 0 === wt ? document.createElement("canvas") : wt).width = dx.dy, wt.height = dx.jK, wu = wt.getContext("2d", {
		alpha: !0
	}), wv = eX = null, wv = wu.getImageData(0, 0, dx.dy, dx.jK), eX = wv.data, aa.dF.s9(eX)
}

function wx() {
	this.q8 = new wy, this.al = new wz, this.x0 = new x1, this.w9 = new x2, this.x3 = new il
}

function sb() {
	this.x4 = function(player, x5) {
		return -1 !== x5 && !!ao.iA.qz(player, x5) && this.x6(player, x5, 0)
	}, this.x6 = function(player, x5, x7) {
		player = function(player, x5, x7) {
			var xA = ao.iA.qi(player, x5);
			if (-1 === xA) return -1;
			xA = ao.iA.qr(xA, x5);
			if (-1 === xA) return -1;
			var x8 = ao.sj.xC(xA, x5);
			if (0 <= x8) return x8;
			if (ao.sj.xD()) return -1;
			if (0 <= (x8 = ao.sj.xC(x5, xA))) return ao.sj.xE(ao.sj.xF(ao.sj.get(x8)));
			if (xA === x5) return ao.sj.xE(new Uint32Array([xA, x5]));
			if (0 <= (x8 = ao.sc.x6(xA, x5))) return x8;
			return x7 ? function(xH, player) {
				var xI = eC.xI,
					f4 = (xI.fill(0), [xH]),
					xJ = (xI[xH] = 1, pv.xJ),
					xK = -1,
					gz = f4.length;
				for (; - 1 === xK && gz;) {
					for (var eB = [], ak = 0; ak < gz; ak++)
						for (var aU = f4[ak], xL = xI[aU], eI = 0; eI < 8; eI++) {
							var mq, mo, qq = aU + xJ[eI],
								ai = 4 * qq;
							eu.ee(ai) ? (mq = xI[qq], mo = xL + 5 + ((1 & eI) << 1), 0 === mq ? (eB.push(qq), xI[qq] = mo) : xI[qq] = Math.min(mo, mq)) : -1 === xK && eI % 2 == 0 && eu.eY(player, ai) && (xK = aU)
						}
					gz = (f4 = eB).length
				}
				return -1 !== xK ? function(qs, xN) {
					var xJ = pv.xJ,
						xO = -1,
						qb = 0,
						jP = [];
					for (; xN !== qs;)(qb = function(aU, qb) {
						var xI = eC.xI,
							xJ = pv.xJ,
							xL = xI[aU];
						if (xL - xI[aU + xJ[qb]] != 5 + ((1 & qb) << 1))
							for (var ju = 0; ju < 8; ju++) {
								var eI = ju + qb + 6 & 7;
								if (xL - xI[aU + xJ[eI]] == 5 + ((1 & eI) << 1)) return eI
							}
						return qb
					}(xN, qb)) !== xO && (jP.push(xN), xO = qb), xN += xJ[qb];
					jP.push(qs);
					var x8 = ao.sj.xC(jP[0], qs);
					if (0 <= x8) return x8;
					return ao.sj.xE(new Uint32Array(jP))
				}(xH, xK) : -1
			}(x5, player) : -1
		}(player, x5, x7);
		return -1 !== player && (eC.eB[0] = ao.sj.get(player), !0)
	}
}

function xQ() {
	this.az = function(player) {
		var x8 = function(player) {
			for (var sj = ao.sj.xS(), gz = sj.length, af = Math.min(gz, 32), qc = eG.xT(gz), ak = 0; ak < af; ak++) {
				var x8 = (ak + qc) % gz,
					rH = sj[x8],
					qs = rH[0],
					qj = rH[rH.length - 1];
				if (ao.iA.qy(player, qs) && ao.iA.qz(player, qj)) return x8;
				if (ao.iA.qy(player, qj) && ao.iA.qz(player, qs)) return 0 <= (x8 = ao.sj.xC(qj, qs)) ? x8 : ao.sj.xD() ? -1 : ao.sj.xE(ao.sj.xF(rH))
			}
			return -1
		}(player);
		return -1 !== x8 && (x8 = ao.sj.get(x8), !ao.iA.rg(player, x8)) && (eC.eB[0] = x8, !0)
	}
}

function xU() {
	this.xV = function(xW, gd) {
		n7.aB(gd), 0 === n7.size ? bA.aD.xX(xW, 3205) : ((0 === n7.s2(1) ? function(xW) {
			var xb = n7.s2(6);
			0 === xb ? function(xW) {
					if (0 === xW && 8 !== b6.hy()) {
						aC.aD.xv();
						for (var xw = n7.s2(12), xx = n7.s2(6), eB = new Array(xw), ak = 0; ak < xw; ak++) eB[ak] = n7.s2(xx);
						xy.xz(eB)
					}
				}(xW) : 2 === xb ? bA.xd.xe(xW) : 3 === xb || 4 === xb ? xf.aB() : 5 === xb ? bA.xg.xh() : 9 === xb ? bA.xg.xi(xW) : 10 === xb ? bA.xj.xk() : 11 === xb ? bA.xg.xl(xW) : 12 === xb ? bA.xj.xm() : 13 === xb ? bA.xn.xo() :
				14 === xb ? bA.xn.xp() : 15 === xb ? bA.xg.xq() : 16 === xb ? bA.xd.xr(xW) : 17 === xb ? bA.xd.xs(xW) : 19 === xb ? bA.xd.xt(xW) : 20 === xb && bA.xg.xu(xW)
		} : function(xW) {
			if (8 !== b6.hy() && !xf.hx()) return;
			if (xW !== bA.aD.bB) bA.aD.xX(xW, 3244);
			else if (0 === n7.s2(1)) j.y2.w7(n7.gd);
			else {
				var ak, xW = n7.s2(2);
				if (0 === xW) {
					var yA, hq = n7.s2(9);
					0 !== fe.gA[hq] && 0 !== fe.gA[p.an] && (yA = n7.s2(10), mY.yB(hq, p.an, yA), j7.yC(hq, 1, yA))
				} else if (1 === xW) ! function() {
					var hq = n7.s2(9);
					0 !== fe.gA[hq] && 0 !== fe.gA[p.an] && yD.yE(0, [hq], !0) && mY.yF(hq, 1)
				}();
				else if (2 === xW) ! function() {
					var hq = n7.s2(9),
						target = n7.s2(9);
					0 !== fe.gA[hq] && 0 !== fe.gA[target] && 0 !== fe.gA[p.an] && yD.yE(1, [hq], !0) && (j7.yC(hq, 3, 96), j7.yC(target, 4, 96), mY.yG(hq, target))
				}();
				else if (gJ.gb && !gJ.gc) {
					var gz = 540;
					for (n4.gZ(17287), n4.ga(1, 0), n4.ga(6, 10), gz = Math.min(q7.w9.y8.length, 540), ak = 0; ak < gz; ak++) n4.y9(32, q7.w9.y8[ak]);
					bA.aD.send(bA.aD.bB, n4.gd)
				}
			}
		})(xW), j.xa())
	}, this.y0 = function() {
		n7.aJ = 1;
		var xb = n7.s2(6),
			y1 = n7.s2(10);
		return bA.aD.ho === y1 ? (bA.aD.bB = y1, !1) : (bA.aD.close(bA.aD.ho, 3247), bA.aD.bB = y1, xf.hd = n7.s2(10), xf.he = n7.s2(3 === xb ? 9 : 1), bA.aD.hp(y1, 5) && bA.hq.hr(), !0)
	}
}

function vg() {
	var yH = [];

	function yL(tJ) {
		yH.unshift(tJ), aK.aL.aM(161, yH.join(";"))
	}

	function yK(tJ) {
		for (var yO = yH, gz = yO.length, ak = 0; ak < gz; ak++)
			if (yO[ak] === tJ) return yO.splice(ak, 1), aK.aL.aM(161, yO.join(";")), 1
	}
	this.aB = function() {
		var bE = aK.f4.data[161].value;
		bE.length && (yH = bE.split(";"))
	}, this.get = function() {
		return yH
	}, this.yI = function() {
		return {
			dR: yH,
			value: 0
		}
	}, this.tA = function(tJ) {
		return aa.dF.has(yH, tJ)
	}, this.yJ = function(tJ) {
		return yK(tJ) ? 0 : (yL(tJ), 1)
	}, this.yM = function(tJ) {
		yK(tJ) && yL(tJ)
	}, this.yN = function(aJ) {
		aJ < yH.length && (yH.splice(aJ, 1), aK.aL.aM(161, yH.join(";")))
	}
}

function yP() {
	this.az = function(player) {
		return ao.sa.x4(player, function(player) {
			var gz = it.yR.yS;
			if (0 === gz) return -1;
			for (var af = Math.min(gz, it.performance.yT ? gz : 10), f4 = it.yR.f4, eE = dV.eF(eG.random() * gz, eG.value(100)), i = eE + af, lQ = eG.yU(fe.je[player], fe.jg[player]), lR = eG.yU(fe.jf[player], fe.jh[player]), lX = -1,
					aX = pv.yV(0, 0, dx.dy, dx.jK), ak = eE; ak < i; ak++) {
				var gq = ak % gz,
					yW = pv.yX(lQ, lR, f4[gq]);
				yW < aX && (aX = yW, lX = gq)
			}
			return -1 !== lX ? function(aU, lQ, lR) {
				var pu = pv.qn(aU),
					px = pv.qp(aU),
					aV = lQ - pu,
					aW = lR - px;
				Math.abs(aV) >= Math.abs(aW) ? (aW = 0, aV = Math.sign(aV)) : (aV = 0, aW = Math.sign(aW));
				aV === aW && (aV = 1);
				for (;;) {
					if (pu += aV, px += aW, !pv.yZ(pu, px)) break;
					if (aU = pv.pz(pu, px), eu.ee(pv.qA(aU))) return aU
				}
				return -1
			}(f4[lX], lQ, lR) : -1
		}(player))
	}
}

function ya() {
	this.aB = function() {
		if (0 === p.data.sResourcesType) {
			for (var ye = p.e3, ff = fe.ff, ak = 0; ak < ye; ak++) ff[ak] = 512;
			var yf = p.jR,
				yg = mG.yg,
				ip = mG.ip;
			for (ak = ye; ak < yf; ak++) ff[ak] = yg[ip[ak]]
		} else(1 === p.data.sResourcesType ? function() {
			for (var gz = p.jR, ff = fe.ff, sResourcesValue = p.data.sResourcesValue, ak = 0; ak < gz; ak++) ff[ak] = sResourcesValue
		} : function() {
			for (var gz = p.jR, ff = fe.ff, sResourcesData = p.data.sResourcesData, ak = 0; ak < gz; ak++) ff[ak] = sResourcesData[ak]
		})();
		iy.jP[8] = fe.ff[p.an]
	}
}

function yh() {
	function yj(key) {
		var ur;
		return "undefined" == typeof URLSearchParams || (ur = window.location.search, "string" != typeof(ur = new URLSearchParams(ur).get(key))) || ur.length < 1 ? null : ur
	}
	this.ts = function() {
		if (0 !== fg.id) return !1;
		if (! function() {
				var value = yj("account");
				if (!value && !(value = yj("a"))) return void yk.clear();
				return yk.clear(), aC.dT(8, aC.b1, new hY(1e3, {
					yl: 0,
					tJ: value,
					ym: 0
				})), 1
			}()) {
			var value = yj("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			aC.dT(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var uT = new URL(window.location.href);
		uT.search = "";
		try {
			return history.replaceState(null, "", uT.toString()), !0
		} catch (i) {
			console.log("error 352: " + i)
		}
		return !1
	}, this.yo = function(key, value) {
		if (0 === fg.id) try {
			var uT = new URL(window.location.href),
				g6 = uT.searchParams;
			g6.set(key, value), uT.search = g6.toString(), history.replaceState(null, "", uT.toString())
		} catch (i) {
			console.log("error 358: " + i)
		}
	}
}

function yp() {
	var yq, yr;
	this.aB = function() {
		yq = 1, yr = 0
	}, this.az = function() {
		0 < yq && (yr = 0 === yr ? j.k + 16 : yr, yq = (yq -= .001 * (j.k - yr)) < 0 ? 0 : yq, yr = j.k, j.a0 = !0)
	}, this.g9 = function() {
		0 < yq && (gD.fillStyle = "rgba(0,0,0," + yq + ")", gD.fillRect(0, 0, a5.fS, a5.fQ))
	}
}

function yu() {
	this.xo = function() {
		var ak;
		if (n7.size < n4.n5(23)) bA.aD.xX(0, 3259);
		else {
			var hZ = n7.s2(6),
				gz = n7.s2(10),
				data = [];
			if (9 === hZ || 10 === hZ || 11 === hZ) {
				for (ak = 0; ak < gz; ak++) data.push([n7.s2(30), iH.d0.rt(5), n7.yv(32), 0, n7.s2(30)]);
				8 === aC.b1 && aC.b3().yw(21, !0, {
					hZ: hZ,
					data: data
				})
			} else if (12 === hZ) {
				for (ak = 0; ak < gz; ak++) data.push([n7.s2(20), n7.s2(30), n7.s2(30), n7.yv(32), n7.s2(30), iH.d0.rt(5), iH.d0.rt(5)]);
				8 === aC.b1 && aC.b3().yw(21, !0, {
					hZ: hZ,
					data: data
				})
			} else {
				var yx = n7.s2(16);
				if (n7.yy(39 + 16 * yx + gz * (0 === hZ ? 111 : 1 === hZ ? 101 : 2 === hZ || 3 === hZ ? 127 : 212))) {
					if (0 === hZ)
						for (ak = 0; ak < gz; ak++) data.push([n7.s2(30), iH.cy.yz(n7.s2(5)), n7.s2(16), n7.s2(30), n7.s2(30)]);
					else if (1 === hZ)
						for (ak = 0; ak < gz; ak++) data.push([n7.s2(16), iH.cy.yz(n7.s2(3)), n7.s2(16), iH.cy.yz(n7.s2(5)), n7.s2(31), n7.s2(30)]);
					else if (2 === hZ || 3 === hZ)
						for (ak = 0; ak < gz; ak++) data.push([n7.s2(30), iH.cy.yz(n7.s2(5)), n7.yv(32), n7.s2(30), n7.s2(30)]);
					else
						for (ak = 0; ak < gz; ak++) data.push([n7.s2(20), n7.s2(30), n7.s2(30), n7.s2(30), n7.s2(30), n7.yv(32), n7.s2(30), iH.cy.yz(n7.s2(5)), iH.cy.yz(n7.s2(5))]);
					8 === aC.b1 && aC.b3().yw(21, !0, {
						hZ: hZ,
						data: data
					})
				} else bA.aD.xX(0, 3260)
			}
		}
	}, this.xp = function() {
		if (n7.size < n4.n5(29)) bA.aD.xX(0, 3265);
		else {
			var z0 = n7.s2(4),
				z1 = n7.s2(7),
				z2 = n7.s2(11);
			if (n7.yy(29 + 16 * z1 + 16 * z2 + 11 * z0)) {
				for (var data = [], ak = 0; ak < z0; ak++) {
					for (var ml = iH.cy.yz(n7.s2(3)), z3 = n7.s2(8), z4 = [], ju = 0; ju < z3; ju++) z4.push(n7.s2(16));
					data.push({
						name: "[" + ml + "]",
						z4: z4
					})
				}
				8 === aC.b1 && aC.b3().yw(23, !0, data)
			} else bA.aD.xX(0, 3266)
		}
	}
}

function z5() {
	this.aB = function() {
		8 === p.mR && mY.z6()
	}, this.z7 = function(z8) {
		var elo = p.data.elo,
			z9 = (elo[z8] - elo[1 - z8]) / 10,
			z9 = 8 / (1 + Math.pow(2, z9 / 32)),
			z9 = Math.floor(10 * z9 + .5),
			zB = elo[z8] + z9,
			zB = this.zD(zB),
			elo = this.zD(elo[1 - z8] - z9);
		0 === z8 ? mY.zF(zB, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : mY.zF(elo, zB, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.zD = function(elo) {
		return 16e3 === (elo = dV.dW(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function zG() {
	this.zH = new zI, this.result = new zJ, this.zK = new ua, this.zL = new zM, this.zN = new zO, this.zP = new mN, this.aB = function() {
		this.result.aB()
	}
}

function zQ() {
	function zT(player) {
		for (var kA = fe.kA[player], gz = kA.length, za = Math.max(dV.eF(gz, 12), 1), dv = eu.dv, aj = eG.xT(gz), ak = 0; ak < gz; ak += za)
			for (var or = kA[(ak + aj) % gz], eI = 3; 0 <= eI; eI--) {
				var oY = or + dv[eI];
				if (eu.eT(oY)) return {
					ai: oY,
					id: eu.ei(oY),
					g6: player
				}
			}
		return null
	}

	function zY(player, zc) {
		var ip = aa.al.zd(player, mG.ze[mG.ip[player]]);
		fe.kO[player].push(zc.ai), nj.j1(player, ip, zc.g6), pg.zf(player, !0)
	}
	this.az = function(player) {
		return !!dx.nc(dx.nd) && !!p.data.passableMountains && 0 !== fe.kA[player].length && function(player) {
			var zS = zT(player);
			if (null === zS) return !1;
			! function(player) {
				for (var tg = tq.tg, th = tq.th, gz = Math.min(th, 12), gq = eG.xT(th), zb = eC.zb, kA = fe.kA, jl = 0, ak = 0; ak < gz; ak++) {
					var g6 = tg[(ak + gq) % th];
					g6 !== player && kA[g6].length && nZ.qL(player, g6) && (zb[jl++] = g6)
				}
				eC.uj[0] = jl
			}(player);
			var zV = function(zZ) {
				for (var gz = eC.uj[0], zb = eC.zb, ak = 0; ak < gz; ak++) {
					var zc = zT(zb[ak]);
					if (null !== zc && zc.id === zZ) return zc
				}
				return null
			}(zS.id);
			return null !== zV ? (zY(player, zV), !0) : function(player, zZ) {
				var gz = it.yR.yS;
				if (0 !== gz)
					for (var ai = it.yR.f4[eG.xT(gz)] << 2, dv = eu.dv, eI = eG.xT(4);;) {
						if (ai += dv[eI], eu.eT(ai)) {
							if (eu.ei(ai) === zZ) return zY(player, {
								ai: ai,
								g6: p.dS
							}), !0;
							break
						}
						if (!eu.eg(ai)) break
					}
				return !1
			}(player, zS.id)
		}(player)
	}
}

function zg() {
	var bE;
	10 === dx.nd ? bE =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === dx.nd ? bE =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === dx.nd ? bE =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === dx.nd ? bE =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === dx.nd ? bE =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === dx.nd ? bE =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === dx.nd ? bE =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === dx.nd ? bE =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === dx.nd ? bE =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === dx.nd ? bE =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === dx.nd ? bE =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === dx.nd && (bE =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new rr).rt(bE)
}

function oy(bQ, ov) {
	var bR = document.createElement("div");
	this.mC = bR, this.resize = function() {
		bR.style.padding = aa.ab.bV(bW.bX), bR.style.lineHeight = aa.ab.bV(aa.ab.go(.035))
	}, bQ.style.overflowX = "hidden", bQ.style.overflowY = "auto", bR.innerHTML = ov, bQ.appendChild(bR)
}

function zh() {
	this.zi = function() {
		var zl;
		return !(tq.th < 3 || fe.jQ[re[0]] >= p.wr >> 1) && (p.e0 ? 9 !== p.mR && (zl = fv.zm(), !(2 * fv.zo(uh.zp()) >= zl)) : function() {
			if (8 === p.mR) return !1;
			var zl = fv.zm();
			if (2 * fe.ff[re[0]] >= zl) return !1;
			return !0
		}())
	}
}

function zq() {
	var zr, zs, ee, oN;
	this.aB = function() {
		var ak, a2, a3, zt, zu, fS, fQ, fW, ad, ae, eH, g6, aX, ju, sV;
		if (function() {
				if (ee = !0, oN = "rgb(" + dx.s8[0] + "," + dx.s8[1] + "," + dx.s8[2] + ")", dx.zx(dx.nd)) return 1;
				return ee = !1, 0
			}()) zs = null;
		else {
			for (zr = dV.eF(96, 4), zu = 1 === dx.nd ? (zt = 0, 160) : (zt = 128, 32), oN = "rgb(" + zt + "," + zt + "," + zt + ")", zs = new Array(4), ak = 3; 0 <= ak; ak--) {
				if (zs[ak] = document.createElement("canvas"), fS = ak % 2 == 0 ? dx.dy : zr, fQ = ak % 2 == 0 ? zr : dx.jK + 2 * zr, zs[ak].width = fS, zs[ak].height = fQ, ae = (ad = (fW = zs[ak].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, fS, fQ)).data, ak % 2 == 0)
					for (a3 = zr - 1; 0 <= a3; a3--)
						for (eH = zu + Math.floor((a3 + 1) * (zt - zu) / (zr + 1)), a2 = fS - 1; 0 <= a2; a2--) ae[g6 = 4 * ((0 === ak ? zr - a3 - 1 : a3) * fS + a2)] = eH, ae[g6 + 1] = eH, ae[g6 + 2] = eH, ae[g6 + 3] = 255;
				else {
					for (a2 = zr - 1; 0 <= a2; a2--)
						for (eH = zu + Math.floor((a2 + 1) * (zt - zu) / (zr + 1)), a3 = fQ - 1 - zr; zr <= a3; a3--) ae[g6 = 4 * (a3 * fS + (3 === ak ? zr - a2 - 1 : a2))] = eH, ae[g6 + 1] = eH, ae[g6 + 2] = eH, ae[g6 + 3] = 255;
					for (ju = 1; 0 <= ju; ju--)
						for (a2 = zr - 1; 0 <= a2; a2--)
							for (a3 = zr - 1; 0 <= a3; a3--) aX = (Math.pow(a2 * a2 + a3 * a3, .5) + 1) / (zr + 1), eH = zu + Math.floor((1 < aX ? 1 : aX) * (zt - zu)), ae[g6 = 4 * ((0 === ju ? zr - a3 - 1 : a3 + ju * (fQ - zr)) * fS + (1 ===
								ak ? a2 : zr - a2 - 1))] = eH, ae[g6 + 1] = eH, ae[g6 + 2] = eH, ae[g6 + 3] = 255
				}
				fW.putImageData(ad, 0, 0)
			}
			sV = zu, dx.fl.fillStyle = "rgb(" + sV + "," + sV + "," + sV + ")", dx.fl.fillRect(0, 0, dx.dy, 1), dx.fl.fillRect(0, dx.jK - 1, dx.dy, 1), dx.fl.fillRect(0, 0, 1, dx.jK), dx.fl.fillRect(dx.dy - 1, 0, 1, dx.jK)
		}
	}, this.i2 = function() {
		var ju = ee ? 0 : -zr;
		zy(ju, ju, dx.dy - 2 * ju, dx.jK - 2 * ju, ev.zz, ev.a00, ev.a01, ev.a02) || (gD.fillStyle = oN, gD.fillRect(0, 0, a5.fS, a5.fQ))
	}, this.g9 = function() {
		ee || (a03(0, -zr, dx.dy, zr, ev.zz, ev.a00, ev.a01, ev.a02) && gD.drawImage(zs[0], ev.a04, ev.a05 - zr), a03(dx.dy, -zr, zr, dx.jK + 2 * zr, ev.zz, ev.a00, ev.a01, ev.a02) && gD.drawImage(zs[1], ev.a04 + dx.dy, ev.a05 - zr), a03(0, dx
			.jK, dx.dy, zr, ev.zz, ev.a00, ev.a01, ev.a02) && gD.drawImage(zs[2], ev.a04, ev.a05 + dx.jK), a03(-zr, -zr, zr, dx.jK + 2 * zr, ev.zz, ev.a00, ev.a01, ev.a02) && gD.drawImage(zs[3], ev.a04 - zr, ev.a05 - zr))
	}
}

function wK() {
	a06.i2(), gD.setTransform(os, 0, 0, os, 0, 0), gD.imageSmoothingEnabled = os < 3, gD.drawImage(dx.lm, y.eN(), y.eO()), a07.hP.g9(), gD.drawImage(wt, y.eN(), y.eO()), a06.g9(), ao.g9(), j7.g9(), (p.lZ ? (uh.g9(), lJ) : (mY.g9(), fp.g9(), lE.g9(),
		lJ.g9(), qW.g9(), fr.g9(), y.g9(), p7.g9(), uh.g9(), a08.g9(), pt.g9(), lU.g9(), m.g9(), a09.g9(), lV.g9(), a0A)).g9(), aC.g9()
}

function a0B(fW, fS, fQ) {
	fW.clearRect(0, 0, fS, fQ), fW.fillStyle = aF.be, fW.fillRect(0, 0, fS, fQ)
}

function a0C(fW, fS, fQ, a0D) {
	fW.fillStyle = aF.aG, fW.fillRect(0, 0, fS, a0D), fW.fillRect(0, 0, a0D, fQ), fW.fillRect(fS - a0D, 0, a0D, fQ), fW.fillRect(0, fQ - a0D, fS, a0D)
}

function a0E(fW, a2, a3, aY, a0D, g6, a0F) {
	fW.fillStyle = aF.aG;
	var g6 = Math.floor(aY * g6),
		g3 = (g6 += (g6 - a0D) % 2, Math.floor((g6 - a0D) / 2)),
		aY = Math.floor((aY - g6) / 2);
	fW.fillRect(a2 + aY, a3 + aY + g3, g6, a0D), a0F && fW.fillRect(a2 + aY + g3, a3 + aY, a0D, g6)
}

function iK() {
	var kZ = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		a0H = [aF.bu, aF.bu, aF.bv, aF.cO, aF.cP, aF.cB, aF.cU, aF.bv, aF.cq, aF.ce, aF.cn],
		a0I = [
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
		a0J = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function a0T(a0U, tJ, a0W) {
		for (var eM = a0U.length - 1; 0 <= eM; eM--) {
			var aN = a0U[eM];
			0 === aN.id && aN.tJ === tJ && (aN.gP = "[Redacted Message]", a0W) && (aN.tI = 1)
		}
	}
	this.tZ = function(su) {
		var a0K, mn;
		return su.id < 5 && (a0K = "@" + n9.cw.fy(su.tJ, 5)), 0 === su.id ? a0K + ": " + su.gP : 1 === su.id ? (mn = "@" + n9.cw.fy(su.target, 5), 0 === su.tT ? 32768 <= su.value ? a0K + " voted with " + (su.value - 32768 + 1) +
				" gold against " + mn + " to weaken the latter's admin position. 📉" : a0K + " voted with " + (su.value + 1) + " gold for " + mn + " to strengthen the latter's admin position. 💪" : 1 === su.tT ? a0K + " sent " + Math.floor(su
					.value / 100) + " 🧈 gold to " + mn + "." : a0K + " voted with " + (su.value / 10).toFixed(1) + " points for " + mn + " to acknowledge the latter as clan leader. ✅") : 2 === su.id ? 0 === su.tT ? a0K +
			" was 🔇 muted for 1 Hour." : 1 === su.tT ? "The username of " + a0K + " was ✂️ redacted. Duration: 1 Day" : a0K + " 👢 was kicked." : 3 === su.id ? a0K + a0L.kj(su.tT, a0L.kf[su.tT][su.value]) + "@" + n9.cw.fy(su.target, 5) + a0L.kl(
				su.tT, a0L.kf[su.tT][su.value]) : 4 === su.id ? a0K + a0L.kj(5, a0L.kf[5][su.tT]) + "@" + n9.cw.fy(su.target, 5) + a0L.kl(5, a0L.kf[5][su.tT]) : 5 === su.id ? a0J[su.tT] : 6 === su.id ? "You are about to mention " + su.value +
			" player" + (1 === su.value ? "" : "s") + ". This action will cost " + (Math.max(10 * su.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === su.id ? su.gP : void 0
	}, this.tY = function(su, p0) {
		return {
			su: su,
			gP: p0,
			sx: 0,
			fontSize: 1,
			sv: 0,
			tK: su.id ? aF.cN : aF.aG
		}
	}, this.a0M = function(player, fN) {
		return (2 === fN ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.t8 = function(t4) {
		return a0H[t4]
	}, this.t3 = function(t4, t5) {
		return t4 < 3 || 7 === t4 ? a0I[t4][0] : 4 === t4 ? a0I[t4][t5 < 1 ? 0 : t5 < 10 ? 1 : 2] : a0I[t4][t5 < 10 ? 0 : 1]
	}, this.t6 = function(t5) {
		return 0 === t5
	}, this.tL = function(fN, tJ) {
		for (var a0N = f7.i9.a0N, i9 = a0N[fN], gz = i9.length, ak = 0; ak < gz; ak++)
			if (tJ === i9[ak].tJ) return i9[ak];
		for (var eM = 0; eM < a0N.length; eM++)
			if (fN !== eM)
				for (gz = (i9 = a0N[eM]).length, ak = 0; ak < gz; ak++)
					if (tJ === i9[ak].tJ) return i9[ak];
		return null
	}, this.t9 = function(aN) {
		return !!f7.i8 && aN.tJ === f7.i8.tJ
	}, this.a0O = function(i9, a0P, a0Q) {
		var mk = [];
		loop: for (var ak = a0P; ak < a0Q; ak++) {
			var ml = aa.dZ.mm(i9[ak].username);
			if (ml) {
				for (var eM = mk.length - 1; 0 <= eM; eM--)
					if (ml === mk[eM].name) {
						mk[eM].jl++;
						continue loop
					} mk.push({
					name: ml,
					jl: 1
				})
			}
		}
		if (mk.sort(function(ju, eM) {
				return eM.jl - ju.jl
			}), 0 === mk.length) return "";
		for (var bE = mk[0].name + ": " + mk[0].jl, ak = 1; ak < mk.length; ak++) bE += "   " + mk[ak].name + ": " + mk[ak].jl;
		return bE
	}, this.a0R = function(t4, t5, a0S) {
		return 0 === kZ[t4].length ? "Rank: " + (t5 + 1) : kZ[t4] + " Rank: " + (t5 + 1) + (3 !== t4 && a0S < 100 ? "   " + kZ[3] + " Rank: " + (a0S + 1) : "")
	}, this.ta = function(tJ) {
		for (var ez = f7.aD.ez, ak = 0; ak < ez.length; ak++) a0T(ez[ak].a0U, tJ);
		a0T(f7.message.a0V(), tJ, 1), f7.iD.ta(tJ)
	}
}

function a0X() {
	var xW, a0Y, a0Z, a0a = ["wss://", "/s50/", "/s51/", "/s52/"],
		a0b = 0;

	function a0p() {
		bA.aD.a0p(xW, a0Y)
	}

	function a0q(i) {
		bA.a0t.xV(xW, new Uint8Array(i.data))
	}

	function a0s() {}

	function a0r(i) {
		bA.aD.a0r(xW, i)
	}
	this.aB = function(aJ, a0c) {
		xW = aJ, a0Y = a0c, aJ = gJ.a0m ? "ws://localhost:" + (7130 + xW) + "/" : a0a[0] + bA.aD.a0n[xW] + a0a[1 + gJ.a0o], (a0Z = new WebSocket(aJ)).binaryType = "arraybuffer", a0Z.onopen = a0p, a0Z.onmessage = a0q, a0Z.onclose = a0r, a0Z
			.onerror = a0s
	}, this.a0e = function() {
		return a0Z.readyState === a0Z.CONNECTING
	}, this.a0f = function() {
		return a0Z.readyState === a0Z.OPEN
	}, this.a0g = function() {
		return a0b
	}, this.a0h = function() {
		a0b = 1
	}, this.a0i = function() {
		return this.a0e() || this.a0f()
	}, this.a0j = function(a0c) {
		a0Y = a0c
	}, this.a0k = function() {
		return a0Y
	}, this.send = function(gd) {
		this.a0f() && a0Z.send(gd)
	}, this.close = function(a0l) {
		this.a0i() && (a0Z.close(a0l), this.n())
	}, this.n = function() {
		a0Z.onopen = null, a0Z.onmessage = null, a0Z.onclose = null, a0Z.onerror = null
	}
}

function a0u() {
	function a0x() {
		8 === p.mR && 1 === p.q && mO.zH.a11()
	}

	function a0w(player) {
		p.gB ? (tr.a12(player), tq.tl(), p.lI && p.wB.az()) : a13.a14(player)
	}
	this.a0v = function(player) {
		mY.uF(player, player === p.an ? 21 : 22), a0w(player), a0x()
	}, this.a0y = function(player) {
		1 === p.q && 0 !== fe.gA[player] && 2 !== fe.gC[player] && a0w(player), p.a0z--, p.a10--, mY.uF(player, 4), aa.al.pr(2) && fr.fs(!0), a0x()
	}
}

function a15(a16) {
	var hT, vk, dI;
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), vk.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(L(101), [new d7("⬅️ " + L(1), function() {
		aC.un(10)
	})]), vk = new d9(hT.dA, ((dI = []).push(function() {
		var a1A, dM = new dN,
			a1B = new a7(aK.f4.data[132], 1, function() {
				a1A.button.click()
			}),
			a1C = new a7(aK.f4.data[131], 1, function() {
				a1B.i.focus()
			});
		dM.dO(L(102)), dM.dU(a1C), a1C.i.style.marginBottom = "0.8em", dM.dO(L(103)), dM.dU(a1B);
		return a1A = new d7(L(104), function() {
			ha = Math.floor(a1C.i.value), hb = Math.floor(a1B.i.value);
			var hb, ha = {
				a1E: Math.min(ha, hb),
				a1F: Math.max(ha, hb)
			};
			aC.dT(8, aC.fC(10).a0Y, new hY(21, {
				hZ: a16.hZ,
				ha: ha.a1E,
				hb: ha.a1F
			}))
		}, 0, 0, 1), dM.dU(new m8([a1A.button])), dM
	}()), dI.push(function() {
		var a1A, dM = new dN,
			a1B = new a7(aK.f4.data[134], 1, function() {
				a1A.button.click()
			}),
			a1C = new a7(aK.f4.data[133], 0, function() {
				a1B.i.focus()
			});
		return dM.dO(1 === a16.hZ ? L(105) : L(106)), dM.dU(a1C), a1C.i.style.marginBottom = "0.8em", dM.dO(L(107)), dM.dU(a1B), a1A = new d7(L(104), function() {
			var a1G = a1C.i.value.slice(0, 20),
				a1H = Math.abs(Math.floor(a1B.i.value));
			aC.dT(8, aC.fC(10).a0Y, new hY(22, {
				hZ: a16.hZ,
				a1G: a1G,
				a1H: a1H
			}))
		}, 0, 0, 1), dM.dU(new m8([a1A.button])), dM
	}()), dI.push(function() {
		var a1A, dM = new dN,
			a1B = new a7(aK.f4.data[152], 1, function() {
				a1A.button.click()
			}),
			a1C = new a7(aK.f4.data[151], 0, function() {
				a1B.i.focus()
			});
		return dM.dO(L(108)), dM.dU(a1C), a1C.i.style.marginBottom = "0.8em", dM.dO(L(107)), dM.dU(a1B), a1A = new d7(L(104), function() {
			var a1G = a1C.i.value.slice(0, 5),
				a1H = Math.abs(Math.floor(a1B.i.value));
			aC.dT(8, aC.fC(10).a0Y, new hY(28, {
				hZ: a16.hZ,
				a1G: a1G,
				a1H: a1H
			}))
		}, 0, 0, 1), dM.dU(new m8([a1A.button])), dM
	}()), dI))
}

function a1I() {
	var d3, d4, d5, dI;

	function d8() {
		dC(), 2 === p.data.playerNamesType && 1 === aa.dF.a1K(p.data.playerNamesData).length && (p.data.playerNamesType = 0), 2 !== p.data.playerNamesType && (p.data.playerNamesData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		2 === p.data.playerNamesType && aa.dF.a1L(d5.dH(), p.data.playerNamesData, 20)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(31), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), dM.dP(new dQ({
			dR: [L(32), L(33), L(5)],
			value: p.data.playerNamesType
		}, function(aJ) {
			dC(), p.data.playerNamesType = aJ, aC.dT(23)
		})), dM.dU(new a1M), dM.dU(new vu({
			value: p.data.selectableName
		}, L(109), function(value) {
			p.data.selectableName = value
		})), dI.push(dM)
	}(dI = []), function(dI) {
		var dM;
		2 === p.data.playerNamesType && ((dM = new dN).dO("Data"), d5 = new dX(0, 1, 0, 1), p.data.playerNamesData && p.data.playerNamesData.length === p.dS || (p.data.playerNamesData = new Array(p.dS), p.data.playerNamesData.fill("")),
			d5.dY(aa.dZ.da(p.data.playerNamesData, 1, '"')), dM.dU(d5), dI.push(dM))
	}(dI), dI))
}

function d7(a1N, a1O, a1P, a1Q, a1R) {
	var self, a1S = document.createElement("button");

	function a1W() {
		var a1b;
		tC.tD() || (a1b = aa.color.a1c(a1P), !1 !== a1Q && 0 < a1b[0] && a1b[0] < 255 && a1b[0] === a1b[1] && a1b[0] === a1b[2]) || (128 < a1b[0] && 128 < a1b[1] && 128 < a1b[2] ? a1S.style.backgroundColor = aa.color.a1d(a1P, -50) : a1S.style
			.backgroundColor = aa.color.a1d(a1P, a1b[3] && a1b[3] < 120 ? 150 : 50))
	}

	function a1V() {
		if (a1Q) {
			var a1b = aa.color.a1c(a1P);
			if (a1b[0] === a1b[1] && a1b[0] === a1b[2]) return
		}
		a1O && ((a1b = a1O(this)) ? 2 === a1b && a1W() : a1e(this))
	}

	function a1Y() {
		this.style.backgroundColor = a1P
	}

	function a1X() {
		a1e(this)
	}

	function a1e(eI) {
		eI.style.backgroundColor = a1P, eI.blur()
	}
	this.button = a1S, this.dd = a1O, this.a1T = a1P, this.bT = function(a1Z) {
			a1Z = 1.1 - Math.min(.01 * a1N.length, .6) + .2 * a1Z;
			a1S.style.fontSize = a1Z.toFixed(1) + "em"
		}, this.a1U = function(aT) {
			aT ? 1 === aT ? aT = aF.bs : 2 === aT && (a1Q = 1, aT = aF.bs) : (a1Q = 0, aT = aF.bd), this.a1T = a1P = aT, a1S.style.backgroundColor = aT
		}, self = this, a1S.innerHTML = a1N, a1S.style.color = a1R ? aF.ce : aF.aG, a1S.style.userSelect = "none", a1S.style.outline = "none", a1S.style.overflowWrap = "break-word", self.a1U(a1P), a1S.style.border = "none", a1S.style.font =
		"inherit", self.bT(0), a1S.style.padding = "0em 0.3em", a1S.onclick = a1V, a1S.addEventListener("mouseover", a1W), a1S.addEventListener("mouseout", a1X), a1S.addEventListener("focus", a1W), a1S.addEventListener("blur", a1Y)
}

function a1f() {
	this.a1g = function(xW) {
		var username = aK.f4.data[122].value.slice(0, 20),
			username = (n4.gZ(24 + 16 * username.length + 18 + a1h.a1i.s2()), n4.ga(1, 0), n4.ga(6, 1), n4.ga(10, gJ.a1j), n4.ga(2, aK.f4.data[158].value), bA.a1k.a1l(username), aa.color.a1m(aK.aD.a1n()));
		n4.ga(6, username[0]), n4.ga(6, username[1]), n4.ga(6, username[2]), a1h.a1i.lt(), bA.aD.ho = xW, bA.aD.send(xW, n4.gd)
	}, this.a1o = function(a1p, a16) {
		n2.aB(), n2.ga(1, 0), n2.ga(6, 2), n2.ga(3, a1p), 2 === a1p ? n2.ga(2, a16) : 3 === a1p ? n9.d0.lt(a16, 7, n2) : 5 === a1p && (n2.ga(3, a16.id), n2.ga(3, a16.value), n2.ga(30, a16.tJ)), bA.aD.send(bA.aD.ho, n2.a1q())
	}
}

function a1r() {
	this.a1s = function(a1t, aJ, a1u) {
		var aY = a1t.height,
			aZ = aa.ab.aS(aY, aY),
			ac = aa.ab.getContext(aZ);
		return function(fS, ac, a1u) {
			ac.fillStyle = a1u, ac.beginPath(), ac.arc(fS / 2, fS / 2, .47 * fS, 0, 2 * Math.PI), ac.fill()
		}(aY, ac, a1u), ac.drawImage(a1t, -aJ * aY, 0), aZ
	}, this.a1w = function(a1x) {
		var ac, ad, aY = a1x.height;
		return a1x.width === aY && (ad = (ac = aa.ab.getContext(a1x, !0)).getImageData(0, 0, aY, aY), aa.a1y.a1z(ad.data, aY, aY, .9), ac.putImageData(ad, 0, 0)), a1x
	}
}

function vP() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a20 = 13, this.a21 = this.emojis.length, this.a22 = 676, this.a23 = 1024, this.a24 = this.emojis.indexOf("💀"), this.a25 = this.a24 + 1, this.a26 = this.emojis.indexOf("🥇"), this.a27 = this.emojis.indexOf("😊"), this.a28 = function(
		eH) {
		return eH < this.a22 ? String.fromCharCode(55356, 56806 + dV.eF(eH, 26), 55356, 56806 + eH % 26) : this.emojis[Math.min(eH - this.a22, this.a21 - 1)]
	}, this.a29 = function(bE) {
		for (var gz = bE.length - 2, eB = [], ak = 0; ak < gz; ak++) {
			var a2A = bE.charCodeAt(ak) - 56806,
				a2B = bE.charCodeAt(ak + 2) - 56806;
			0 <= a2A && a2A < 26 && 0 <= a2B && a2B < 26 && (eB.push(26 * a2A + a2B), ak += 3)
		}
		return eB
	}, this.a2C = function(eH) {
		return eH < this.a22
	}, this.a2D = function(eH) {
		return eH >= 1024 - this.a20
	}, this.a2E = function(eH) {
		return eH >= this.a22 && eH < this.a22 + this.a25
	}
}

function a2F() {
	var a2G, a2I = new Uint16Array(8);

	function a2S(size, player) {
		for (var ak = fe.kO[player].length - 1; size <= ak; ak--) eu.er(fe.kO[player][ak], player)
	}
	this.aB = function() {
		a2G = 0
	}, this.a2J = function(player, a2K) {
		return eC.a2L[1] = fe.kO[player].length, eC.a2L[0] === p.dS ? it.a2M.a2N(player) : this.a2O(player, eC.a2L[0]), (0 !== eC.a2L[1] || 0 !== fe.kO[player].length) && !(!a2K && eC.a2L[1] === fe.kO[player].length || (eC.a2L[0] === p.dS ? fe
			.a2P[player]++ : fe.a2Q[player]++, 0))
	}, this.a2R = function(player) {
		a2S(eC.a2L[1], player), nj.j1(player, eC.j2[0], eC.a2L[0]), pg.zf(player, !1)
	}, this.a2T = function(player, kS, gz, ip) {
		var a2U = dV.eF(12 * fe.ff[player], 1024);
		ip -= ip >= dV.eF(fe.ff[player], 2) ? a2U : 0, a2S(gz, player), nj.j1(player, ip, kS), fe.ff[player] -= ip + a2U, pg.zf(player, !1)
	}, this.a2O = function(player, kS) {
		for (var qb, dv = eu.dv, ak = fe.k8[player].length - 1; 0 <= ak; ak--)
			if (eu.ec(fe.k8[player][ak]))
				for (qb = 3; 0 <= qb; qb--)
					if (eu.eW(fe.k8[player][ak] + dv[qb]) && eu.ea(fe.k8[player][ak] + dv[qb]) === kS) {
						fe.kO[player].push(fe.k8[player][ak]);
						break
					}
	}, this.a2N = function(player) {
		for (var dv = eu.dv, ak = fe.k8[player].length - 1; 0 <= ak; ak--)
			if (eu.ec(fe.k8[player][ak]))
				for (var qb = 3; 0 <= qb; qb--)
					if (eu.eg(fe.k8[player][ak] + dv[qb])) {
						fe.kO[player].push(fe.k8[player][ak]);
						break
					}
	}, this.a2V = function(player, a2W) {
		var ak, ju, qb, qd, gz = fe.k8[player].length,
			z9 = 256 <= gz ? 12 : 32 <= gz ? 6 : 1,
			eE = gz - 1 - eG.xT(z9),
			dv = eu.dv;
		a2G = 0;
		loop: for (ak = eE; 0 <= ak; ak -= z9)
			for (qb = 3; 0 <= qb; qb--)
				if ((qd = eu.eg(fe.k8[player][ak] + dv[qb]) ? p.dS : eu.ea(fe.k8[player][ak] + dv[qb])) === p.dS || eu.eW(fe.k8[player][ak] + dv[qb]) && qd !== player && (a2W || nZ.qL(player, qd))) {
					for (ju = a2G - 1; 0 <= ju; ju--)
						if (a2I[ju] === qd) continue loop;
					if (a2I[a2G] = qd, 8 <= ++a2G) return !0
				}
		return 0 < a2G
	}, this.a2X = function(player, a2W) {
		var ak, qb, qd, dv = eu.dv;
		for (a2G = 0, ak = fe.k8[player].length - 1; 0 <= ak; ak--)
			for (qb = 3; 0 <= qb; qb--)
				if ((qd = eu.eg(fe.k8[player][ak] + dv[qb]) ? p.dS : eu.ea(fe.k8[player][ak] + dv[qb])) === p.dS || eu.eW(fe.k8[player][ak] + dv[qb]) && qd !== player && (a2W || nZ.qL(player, qd))) return a2I[a2G++] = qd, !0;
		return !1
	}, this.a2Y = function() {
		for (var eM, ak = a2G - 1; 0 <= ak; ak--)
			if (a2I[ak] === p.dS) {
				for (a2G--, eM = ak; eM < a2G; eM++) a2I[eM] = a2I[eM + 1];
				return !0
			} return !1
	}, this.a2Z = function(player) {
		for (var eM, ak = a2G - 1; 0 <= ak; ak--)
			if (nj.uB(player, a2I[ak]))
				for (a2G--, eM = ak; eM < a2G; eM++) a2I[eM] = a2I[eM + 1];
		return 0 === a2G
	}, this.a2a = function() {
		for (var ak = a2G - 1; 0 <= ak; ak--)
			if (aa.al.is(a2I[ak])) return !0;
		return !1
	}, this.a2b = function() {
		for (var ak = a2G - 1; 0 <= ak; ak--) aa.al.is(a2I[ak]) || (a2I[ak] = a2I[--a2G]);
		return 0 < a2G
	}, this.a2c = function(player) {
		for (var eM, a2d = a2I[0], a2e = fe.ff[a2d] + nj.o7(a2d, player), ak = a2G - 1; 1 <= ak; ak--)(eM = fe.ff[a2I[ak]] + nj.o7(a2I[ak], player)) < a2e && (a2d = a2I[ak], a2e = eM);
		return a2d
	}, this.a2f = function(player) {
		var fQ, a2g = a2I[0];
		if (1 !== a2G)
			for (var a2h = dV.eF(fe.jg[player] + fe.je[player], 2), a2i = dV.eF(fe.jh[player] + fe.jf[player], 2), aX = a2j(a2h - dV.eF(fe.jg[a2g] + fe.je[a2g], 2)) + a2j(a2i - dV.eF(fe.jh[a2g] + fe.jf[a2g], 2)), ak = a2G - 1; 1 <= ak; ak--)(fQ =
				a2j(a2h - dV.eF(fe.jg[a2I[ak]] + fe.je[a2I[ak]], 2)) + a2j(a2i - dV.eF(fe.jh[a2I[ak]] + fe.jf[a2I[ak]], 2))) < aX && (aX = fQ, a2g = a2I[ak]);
		return a2g
	}, this.a2k = function() {
		for (var a2l = a2I, a2m = a2l[0], ff = fe.ff, a2n = ff[a2m], ak = a2G - 1; 1 <= ak; ak--) {
			var g6 = a2l[ak],
				eM = ff[g6];
			a2n < eM && (a2m = g6, a2n = eM)
		}
		return a2m
	}, this.a2o = function() {
		return a2I[eG.xT(a2G)]
	}
}

function a2p() {
	this.a04 = 0, this.a05 = 0, this.zz = 0, this.a00 = 0, this.a01 = 0, this.a02 = 0, this.ew = [0, 0, 0, 0], this.a2q = function() {
		this.a04 = y.eN(), this.a05 = y.eO(), this.zz = -this.a04, this.a00 = -this.a05, this.a01 = a5.fS / os, this.a02 = a5.fQ / os, this.ew[0] = Math.floor(this.zz), this.ew[1] = Math.floor(this.a00), this.ew[2] = Math.floor(this.ew[0] + this
			.a01 + 1), this.ew[3] = Math.floor(this.ew[1] + this.a02 + 1), es.a2r = !0
	}
}

function a2s() {
	var a2t, eB;
	this.aB = function() {
		for (var ak = (eB = new Uint16Array(101)).length - 1; 0 <= ak; ak--) eB[ak] = dV.eF(32768 * ak, 100);
		this.a2u(0)
	}, this.value = function(g6) {
		return eB[g6]
	}, this.a2v = function() {
		return dV.eF(a2t - 1, 2)
	}, this.a2u = function(a2w) {
		a2t = 2 * a2w % 32768 + 1
	}, this.random = function() {
		return a2t = 167 * a2t % 32768
	}, this.xT = function(a2x) {
		return dV.eF(a2x * this.random(), 32768)
	}, this.a2y = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.yU = function(ju, eM) {
		return ju + this.xT(eM - ju)
	}
}

function a2z() {
	var eB, a30, a31, a32, gap, a33, a34, a35, a36, a37, fR, iG, pn, a38, a39, ku, a3A;

	function a3E() {
		a32 = Math.floor(.2 * (fg.fh.fi() ? .07 : .035) * a5.fj), a32 = g8(fg.fh.fi() ? 3 : 1, a32);
		var a3G = a5.fS / (eB.length + gap);
		a32 = a32 < a3G ? a3G : a32, a39 = Math.floor((1 - gap) * a32), a30 = 0, a3H()
	}

	function a3H() {
		a30 = (a30 = a30 < -20 ? -20 : a30) > (eB.length - 15) * a32 ? (eB.length - 15) * a32 : a30, a34 = Math.floor(a30 / a32), a35 = (a35 = a34 + Math.floor(a5.fS / a32)) > eB.length - 1 ? eB.length - 1 : a35, a34 = (a34 = a35 < a34 ? a35 : a34) <
			0 ? 0 : a34;
		var af = a35;
		a33 = a31 / eB[af];
		for (var ak = a35 - 1; a34 <= ak; ak--) eB[ak] > eB[af] && (af = ak, a33 = a31 / Math.pow(eB[ak], a38))
	}

	function a3K(a2) {
		a2 = Math.floor((a30 + a5.fS - a2 - gap * a32) / a32);
		return (a2 = a2 < -1 ? -1 : -1 === a2 ? 0 : a2 > eB.length - 1 ? -1 : a2) !== a36 && (a36 = a2, -1 === ku && 0 === a36 && xy.a3B && (ku = setInterval(a3L, 100)), 1)
	}

	function a3O(ak) {
		var a3Q = Math.floor(a33 * Math.pow(eB[ak], a38));
		gD.fillRect(a30 + a5.fS - (ak + 1) * a32, a5.fQ - a3Q, a39, a3Q)
	}

	function a3L() {
		var g6;
		0 !== (a36 = 8 === b6.hy() ? -1 : a36) ? (a3A = (new Date).getTime(), clearInterval(ku), ku = -1) : (g6 = eB[1] / 864e3, -1 !== a3A && (g6 += ((new Date).getTime() - a3A) * eB[1] / 864e5, a3A = -1), 0 < g6 && (eB[0] += Math.floor(g6), j
			.a0 = !0))
	}
	this.a3B = !1, this.aB = function() {
		a3A = ku = -1, a36 = -(a38 = 1), this.a3C = !1, pn = 0, iG = new Date, a30 = 0, gap = .3, eB = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a31 = Math.floor(.15 * a5.fQ), a37 = (a37 = Math.floor((fg.fh.fi() ? .018 : .0137) * a5.fj)) < 2 ? 2 : a37, fR = aa.ab.fk(1, a37), a3E()
	}, this.xz = function(a3F) {
		var ak;
		for (this.a3B = !0, ak = 0; ak < a3F.length; ak++) eB.unshift(a3F[ak]);
		a3E(), j.a0 = !0
	}, this.a3I = function() {
		a3H()
	}, this.l7 = function(a2, a3) {
		a3 > a5.fQ - .6 * a31 ? this.a3C ? a2 !== pn && (a30 += a2 - pn, pn = a2, a3H(), a3K(a2), this.a3C = -1 !== a36, j.a0 = !0) : a3K(a2) && (j.a0 = !0) : this.a3M()
	}, this.a3M = function() {
		-1 !== a36 && (this.a3C = !1, a36 = -1, j.a0 = !0)
	}, this.vM = function(a2, deltaY) {
		-1 !== a36 && (a30 += Math.floor(deltaY), a3H(), a3K(a2), j.a0 = !0)
	}, this.lP = function(a2, a3) {
		this.l7(a2, a3), -1 !== a36 && (pn = a2, this.a3C = !0)
	}, this.a3N = function() {
		-1 !== a36 && (this.a3C = !1)
	}, this.g9 = function() {
		gD.fillStyle = aF.bj;
		for (var a3R, month, h4, g3, a3U, a3V, c, a3W, a3X, ak = a35; a34 <= ak; ak--) a3O(ak);
		this.a3B && 0 === a34 && (gD.fillStyle = aF.cG, a3O(0)), -1 !== a36 && (gD.fillStyle = aF.bi, a3O(a36)), -1 !== a36 && (gD.font = fR, aa.ab.textBaseline(gD, 2), (h4 = new Date).setTime(iG.getTime() - 1e3 * a36 * 60 * 60 * 24), month =
			"month", a3R = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(h4), a3R = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(h4)), a3R = a3R + ", " + h4.getUTCDate() + " " + month + " " + h4.getFullYear(), month = 1 === eB[a36] ? L(110) : L(111), month = aa.dZ.fy(eB[a36]) + " " + month, h4 = Math.floor(gD.measureText(a3R).width), g3 = Math
			.floor(gD.measureText(month).width), a3U = Math.floor(.5 * (h4 + a37)), a3V = (a3V = a30 + a5.fS - (a36 + 1) * a32) < a3U ? a3U : a3V > a5.fS - a3U ? a5.fS - a3U : a3V, c = a5.fQ - Math.floor(a33 * Math.pow(eB[a36], a38)), a3W =
			Math.floor(1.1 * a37), a3X = c > a5.fQ - a3W ? a5.fQ - a3W : c, gD.fillStyle = aF.be, gD.fillRect(a5.fS - g3 - a37, a3X - a3W, g3 + a37, a3W), gD.fillRect(a3V - a3U, a5.fQ - a3W, h4 + a37, a3W), gD.fillStyle = aF.aG, aa.ab
			.textAlign(gD, 2), gD.fillText(month, Math.floor(a5.fS - .5 * a37), a3X), aa.ab.textAlign(gD, 1), gD.fillText(a3R, a3V, a5.fQ), gD.strokeStyle = aF.bk, gD.lineWidth = 1, gD.beginPath(), gD.moveTo(0, c), gD.lineTo(a5.fS, c), gD
			.closePath(), gD.stroke())
	}
}

function a3Y() {
	var a3Z, a3a, a3d, a3g, a3h, a3b = [new Array(4), [], new Array(2), new Array(2)],
		a3c = new Array(4),
		a3e = new Array(2),
		a3f = [L(112), L(113), L(114), L(115)];

	function a3n() {
		var p0;
		!f7.iF || (p0 = a3Z.a3q.vy.i.value.trim().slice(0, 127)).length < 1 || (a3Z.a3q.vy.i.value = "", f7.iC.a3r(p0))
	}

	function a3l(a3u) {
		f7.aD.f0[3] = 1 - f7.aD.f0[3], a3o(3, 1, f7.aD.f0[3]), a3u && bA.a3v.a1o(4), f7.aD.f0[3] && aK.aL.aM(158, f7.aD.f0[0])
	}

	function a3j(ju, eM) {
		f7.aD.f0[ju] !== eM && (0 === ju && f7.aD.f0[3] && a3l(0), a3o(ju, f7.aD.f0[ju], 0), a3o(ju, eM, 1), f7.aD.f0[ju] = eM, 0 === ju ? (bA.a3v.a1o(2, eM), f7.aD.f0[2] ? (a3Z.a3x.yM(), a3Z.a3q.a3M(1)) : a3Z.a3q.a3M(0), aC.b3().fG(), aC.b3()
		.fE()) : 2 === ju && (0 === eM ? (bA.a3v.a1o(0), a3Z.a3q.yM(), a3Z.a3y()) : (bA.a3v.a1o(1), a3Z.a3x.yM(), a3Z.a3z())))
	}

	function a3o(ju, eM, color) {
		a3Z.a40[ju].bP[eM].a1U(color ? aF.c5 : aF.ct)
	}

	function a42(a43) {
		return a43 < 7 ? a43 + 2 + " " + L(123) : 7 === a43 || 10 === a43 ? L(113) + " (Full-Sending: " + L(7 === a43 ? 124 : 125) + ")" : 8 === a43 ? "1v1" : L(126)
	}

	function a46(eH) {
		var p2 = dV.eF(eH, 60),
			eH = eH % 60;
		return (p2 < 10 ? "0" : "") + p2 + ":" + (eH < 10 ? "0" : "") + eH
	}
	this.a3s = function() {
		return a3Z.a3q
	}, this.iC = function(tJ) {
		a3j(2, 0);
		var bE = a3Z.a3q.vy.i.value,
			tJ = "@" + tJ + " ";
		bE.length && !aa.dZ.h5(bE, " ") && (tJ = " " + tJ), a3Z.a3q.vy.i.value = bE += tJ, a3Z.a3q.vy.i.focus()
	}, this.fD = function() {
		a3Z.a3x.yM()
	}, this.fG = function() {
		var a41 = f7.aD.f0[0],
			a41 = f7.aD.ez[a41];
		dx.gZ(a41.nd, a41.mapSeed), a3a.bP[0].button.textContent = L(21) + ": " + dx.s0.s1[a41.nd].name, a3a.bP[1].button.textContent = L(24, 0, "Mode") + ": " + a42(a41.a43), a3a.bP[2].button.textContent = L(120) + ": " + dx.s0.s1[a41.a44].name,
			a3a.bP[3].button.textContent = L(121, 0, "Next Mode") + ": " + a42(a41.a45), a3a.bP[4].button.textContent = L(122) + ": " + a46(a41.fL), a3a.resize()
	}, this.fE = function() {
		var a41 = f7.aD.f0[0],
			fJ = f7.aD.ez[a41];
		a3Z.a47(fJ.fF);
		for (var ak = 0; ak < f7.i9.a0N.length; ak++) a3b[0][ak].bM.textContent = "" + f7.i9.a0N[ak].length;
		var i9 = f7.i9.a0N[a41],
			a48 = i9.length,
			a49 = f7.i9.a4A[a41];
		a3b[2][1].bM.textContent = "" + a48, a3b[3][1].bM.textContent = "" + a49, a3a.bP[4].button.textContent = L(122) + ": " + a46(fJ.fL);
		for (ak = 0; ak < 4; ak++) {
			var a4B = f7.aD.ez[ak];
			a3c[ak] ? 0 === a4B.fF && (a3c[ak].bM.textContent = dx.s0.s1[a4B.nd].name) : a3c[ak] = new pE(dx.s0.s1[a4B.nd].name, a3g.bP[ak].button, 1, 1), aa.dZ.startsWith(a3f[ak], "🏆 ") ? a4B.a4C || (a3f[ak] = a3f[ak].substring(3), a3g.bP[ak]
				.button.textContent = a3f[ak], a3g.bP[ak].button.appendChild(a3b[0][ak].bM), a3g.bP[ak].button.appendChild(a3c[ak].bM)) : a4B.a4C && (a3f[ak] = "🏆 " + a3f[ak], a3g.bP[ak].button.textContent = a3f[ak], a3g.bP[ak].button
				.appendChild(a3b[0][ak].bM), a3g.bP[ak].button.appendChild(a3c[ak].bM))
		}
		var fJ = "",
			a4E = "";
		0 === a41 && (fJ = f7.iA.a0O(i9, 0, a48), a4E = f7.iA.a0O(i9, 0, a49)), a3d[0].bM.textContent = fJ, a3d[1].bM.textContent = a4E, a3e[1].bM.textContent = "MP: " + f7.aD.f2[0] + "   SP: " + f7.aD.f2[1] + "   Lobby: " + aa.dF.a4F(f7.i9.a0N)
	}, this.fO = function() {
		a3Z.a3q.yM()
	}, this.show = function() {
		a3Z.show(), this.resize(), f7.message.show()
	}, this.n = function() {
		a3Z.n(), f7.iB.n(), f7.fH.n(), f7.message.n()
	}, this.resize = function() {
		a3Z.resize(1 - f7.aD.f0[2]), f7.message.resize()
	}, this.db = function(aT) {
		2 === aT ? f7.aD.f0[3] ? a3l(1) : a3Z.a40[3].bP[0].dd() : aT < 2 && a3l(1)
	}, a3g = new a3i([new d7(a3f[0], function() {
		return a3j(0, 0), 2
	}), new d7(a3f[1], function() {
		return a3j(0, 1), 2
	}), new d7(a3f[2], function() {
		return a3j(0, 2), 2
	}), new d7(a3f[3], function() {
		return a3j(0, 3), 2
	})], aF.ct), a3a = new a3i([new d7("", 0, 2), new d7("", 0, 2), new d7("", 0, 2), new d7("", 0, 2), new d7("", 0, 2)], aF.cu, 1);
	var a3k = new a3i([new d7(L(116), function() {
		return a3j(2, 0), 2
	}), new d7(L(117), function() {
		return a3j(2, 1), 2
	})], aF.ct);
	a3h = new a3i([new d7(L(118, 0, 0, 1), function() {
		aC.gS(), f7.hn(), bA.aD.a3t(3240), aC.dT(5, 5)
	}), new d7(L(119), function() {
		return a3l(1), 2
	})], aF.ct), a3Z = new a3m(a3g, a3a, a3k, a3h, a3n, f7.iB.tB);
	for (var ak = 0; ak < 4; ak++) a3b[0][ak] = new pE("0", a3g.bP[ak].button);
	a3b[2][1] = new pE("0", a3k.bP[1].button), a3b[3][1] = new pE("0", a3h.bP[1].button), a3d = [new pE("", a3k.bP[1].button, 1, 1), new pE("", a3h.bP[1].button, 1, 1)], a3o(0, f7.aD.f0[0], 1), a3o(2, f7.aD.f0[2], 1), (a3e = [new pE(L(23), a3Z.a3p(),
		1, 0), new pE("", a3Z.a3p(), 1, 1)])[0].bM.style.fontSize = "0.4em", a3e[1].bM.style.fontSize = "0.4em"
}

function vu(a4G, a1N, a4H) {
	function click() {
		var value = 1 - a4G.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + a1N, void 0 !== a4G.aJ ? aK.aL.aM(a4G.aJ, value) : a4G.value = value, a4H && a4H(value)
	}
	var i;
	a1N = a1N || L(127), this.i = document.createElement("p"), (i = this.i).textContent = (a4G.value ? "🟩 " : "⬜ ") + a1N, i.style.margin = "0", i.style.marginBottom = "0.5em", i.style.cursor = "pointer", i.addEventListener("click", click)
}

function a4I() {
	var jA, jB, a4J = document.createElement("div"),
		pD = 0,
		a4K = 0;
	this.show = function(a2, a3, bE, a4L, a4M) {
		if (pD) {
			if (!a4L) return;
			this.n()
		}
		a2 === a3 && -1 === a2 ? (a2 = jA, a3 = jB) : (jA = a2, jB = a3), a4M || (a4K = a4L), pD = 1;
		a4M = a5.fS / a5.a6, a4J.style.whiteSpace = "pre", a4J.textContent = bE, aa.ab.bU(a4J, 5), a4J.style.font = aa.ab.fk(0, aa.ab.go(.015)), a4J.style.padding = "0.3em 0.6em", a4J.style.left = a2 + "px", a4J.style.top = "0px", document.body
			.appendChild(a4J), a4L = a2 + a4J.offsetWidth - a4M;
		0 < a4L && (a4J.style.left = (bE = a2 - a4L) + "px", bE < 5) && (a4J.style.whiteSpace = "pre-wrap"), a4J.style.top = a3 - a4J.offsetHeight + a4K * bW.gj + "px"
	}, this.n = function(a4P) {
		if (pD) {
			if (a4P && a4K) return 0;
			pD = 0, aC.removeChild(document.body, a4J)
		}
		return 1
	}, a4J.style.position = "absolute", a4J.style.backgroundColor = aF.bd, a4J.style.color = aF.aG, a4J.style.pointerEvents = "none", a4J.style.zIndex = "5", a4J.style.maxWidth = "100%"
}

function a4Q() {
	var a4R = 12e3;
	this.show = function(a4S) {
		return !a4S && !a4T.a4U() && (0 === fg.id ? a4T.a4V.show() : 2 === fg.id && !(j.k < a4R) && (a4R = j.k + 3e5, 2 === gJ.a0o) && fg.fh.uW(Math.floor(3e5)))
	}
}

function wG() {
	mY.az(), j7.az(), fr.a4W(), bA.aD.az()
}

function wM() {
	qJ.az(), a4X.az(), j0.az(), fv.az(), a4Y.az(), pg.az(), it.az(), ao.aD.az(), tq.tj(), fp.az(), a4Z.az(), a4a.az(), j7.az(), j7.a4b(), fr.az(), a07.az(), a08.az(), pt.az(), mY.az(), yD.az(), lE.az(), qW.az(), iy.az(), uh.az(), bA.aD.az(), bA.a4c
		.az(), aC.az(), a4T.a4V.az(), ls.az(), j.az()
}

function wJ() {
	r.az(), a09.az(), p7.az(), a0A.az(), lJ.az(), xf.hu()
}

function wL() {
	fp.fs(!1), pt.fs(), fr.fs(!1), a08.fs(), lE.fs(), qW.fs(), j7.fs(!1), uh.yM()
}

function wE() {
	j7.fs(!1) && (j.a0 = !0), bA.aD.az()
}

function a4d() {
	var a4e, a4f, a4g, a4h, a4i, a4j, a4k, a4l, a4m, a4n, a4o, yr, a4p, a4q = !1,
		a4r = !1;

	function a4s(kn) {
		yr = j.k, a4g = a4h = a4f = 0, a4i = (a4p = 33) / kn, a4e = 1 / (kn / a4p / 4), a4j = (a5.fS / 2 + l5) / os, a4k = (a5.fQ / 2 + l6) / os, a4l = os
	}

	function a4y(ak) {
		var b; - 1 !== ak && (ak = pv.a4z(ao.aD.og[ak]), b = pv.qn(ak) - 15, ak = pv.qp(ak) - 15, r.a4v(b, ak, 29 + b, 29 + ak))
	}

	function a56(kk) {
		Math.abs(Math.log(a4o / a4l)) < .125 && (a4o = kk * a4l)
	}

	function a55(b, c, d, e) {
		a4m = (b + d + 1) / 2, a4n = (c + e + 1) / 2;
		d = a5.fS / (d - b + 1), b = a5.fQ / (e - c + 1);
		a4o = .9 * (d < b ? d : b)
	}
	this.a4t = function() {
		return a4q
	}, this.a4u = function() {
		a4s(1), this.a4v(0, 0, dx.dy - 1, dx.jK - 1), p.gB || p.ay || this.a4w(p.an, 3e3, !0, .3)
	}, this.a4x = function(player, rD) {
		a4y(ao.iA.r2(player, rD))
	}, this.a4w = function(player, kn, a50, zoom) {
		p.lZ || a4q && !a50 && a4r || (0 === fe.jQ[player] ? a4y(ao.iA.r6(player)) : (y.a51 = !1, a4r = a50, a4s(kn), function(player) {
			a4m = (fe.je[player] + fe.jg[player] + 1) / 2, a4n = (fe.jf[player] + fe.jh[player] + 1) / 2
		}(player), function(zoom, player) {
			var aV = fe.jg[player] - fe.je[player] + 1,
				player = fe.jh[player] - fe.jf[player] + 1,
				ju = a5.fS / aV,
				eM = a5.fQ / player,
				ju = (a4o = ju < eM ? ju : eM, 0 !== zoom ? zoom : aV < 20 && player < 20 ? .5 : .9);
			a4o *= ju, a56(7 / 8)
		}(zoom, player), a4q = !0, l4.l3()))
	}, this.a54 = function(kn) {
		p.ay || p.lZ || (y.a51 = !1, a4r = !1, a4s(kn), a55(0, 0, dx.dy - 1, dx.jK - 1), a56(7 / 8), a4q = !0, l4.l3())
	}, this.a4v = function(b, c, d, e) {
		a4q = !1, a55(b, c, d, e), os = a4o, y.a57(a4m, a5.fS / 2), y.a58(a4n, a5.fQ / 2), ev.a2q(), j.a0 = !0
	}, this.s = function() {
		return !(a4q && a4r || (a4q = !1))
	}, this.az = function() {
		var a5B, a5C, eI, a5F;
		a4q && (a4f < .5 ? a4h < a4i && (a4h += a4i * a4e, a4g = a4f) : 1 - a4g < a4f && (a4h = (a4h -= a4i * a4e) < a4i * a4e ? a4i * a4e : a4h), yr = yr >= j.k ? j.k - 1 : yr, a4f = 1e3 < (eI = j.k - yr) || 1 < (a4f += a4h * eI / a4p) ? 1 :
			a4f, yr = j.k, eI = os, a5B = l5, a5C = l6, eI = (os = a4l * Math.pow(a4o / a4l, a4f)) / eI, a5F = 1 - (a4l * Math.pow(a4o / a4l, 1 - a4f) - a4l) / (a4o - a4l), y.a57(a4j + a5F * (a4m - a4j), a5.fS / 2), y.a58(a4k + a5F * (a4n -
				a4k), a5.fQ / 2), j7.zoom(eI, (a5B * eI - l5) / (1 - eI), (a5C * eI - l6) / (1 - eI)), ev.a2q(), 1 <= a4f && (a4q = !1, es.et = !0), j.a0 = !0)
	}
}

function a5G() {
	this.xh = function() {
		for (var id = n7.s2(20), colors = new Array(11), ak = 0; ak < 11; ak++) colors[ak] = new Uint8Array([n7.s2(8), n7.s2(8), n7.s2(8)]);
		var a5H = iH.d0.rt(8);
		a4T.a4V.j1({
			id: id,
			colors: colors,
			a5H: a5H
		})
	}, this.xu = function(xW) {
		var eI = n7.s2(5),
			eI = a1h.a5I.a5J(eI, n7.s2(30), n7.s2(30), n7.s2(30));
		bA.a1k.a5K(xW, eI)
	}, this.xi = function(xW) {
		var y4, n8, a5L;
		n7.yy(165) ? (y4 = n7.s2(3), n8 = a1h.a5I.az(n7.s2(30), n7.s2(30)), a5L = a1h.a5I.a5J(n7.s2(5), n7.s2(30), n7.s2(30), n7.s2(30)), bA.a1k.a5M(xW, n8, a5L, y4), 0 < y4 || (0 === xW && 0 === aK.f4.data[105].value.length ? bA.a1k.a5N(0) : bA
			.a5O.a5P(xW), 4 === bA.aD.a5Q(xW).a0k() ? 6 === b6.hy() && bA.a3v.a1g(xW) : 5 !== bA.aD.a5Q(xW).a0k() || 8 !== b6.hy() && 10 !== b6.hy() || bA.hq.hr())) : bA.aD.xX(xW, 3269)
	}, this.xl = function(xW) {
		var id = n7.s2(6);
		1 === id ? (aK.aL.aM(160, n7.s2(30)), bA.aD.a0h(xW), xy.a3B || bA.a1k.a5N(1), vn.a5R(), 8 === aC.b1 && aC.b3().a5S()) : 21 === id ? 8 === aC.b1 && aC.b3().yw(17) : 22 === id && (aK.aL.aM(106, aK.f4.data[110].value), aK.aL.aM(110, ""),
			8 === aC.b1) && aC.b3().yw(15)
	}, this.xq = function() {
		var gz = n7.s2(16),
			a5T = n7.s2(16);
		if (n7.yy(55 + 10 * gz + 16 * a5T)) {
			for (var eB = [], ak = 0; ak < gz; ak++) eB.push(iH.cy.yz(n7.s2(10)));
			vn.a5U(eB)
		} else bA.aD.xX(0, 3270)
	}
}

function a5V() {
	var a5W = {
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
		a5X = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.a5Y = function(a5H) {
		return a5H.replace(a5X, function(match) {
			return a5W[match] || match
		})
	}, this.fy = function(eH) {
		var ak, a5Z, a5a, a5b, a5c;
		if (eH < 0) return "-" + this.fy(Math.abs(eH));
		if (eH < 1e3) return eH.toString();
		for (a5Z = Math.floor(Math.log(eH + .5) / Math.log(10)) + 1, a5a = Math.floor((a5Z - 1) / 3), a5c = (a5b = eH.toString()).substring(a5Z - 3, a5Z), ak = 1; ak < a5a; ak++) a5c = a5b.substring(a5Z - 3 * (ak + 1), a5Z - 3 * ak) + " " + a5c;
		return a5b.substring(0, a5Z - 3 * a5a) + " " + a5c
	}, this.a5d = function(g6, a5Z) {
		return g6.toFixed(a5Z) + "%"
	}, this.a5e = function(eH, a5f) {
		return eH.toFixed(dV.dW(Math.floor((void 0 === a5f ? 3 : a5f) - Math.log10(Math.max(eH, 1))), 0, 8))
	}, this.a5g = function(eH, gp, a5Z) {
		return (eH * gp).toFixed(a5Z)
	}, this.mm = function(username) {
		var oY, or = username.indexOf("[");
		return !(or < 0) && 1 < (oY = username.indexOf("]")) - or && oY - or <= 8 ? username.substring(or + 1, oY).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.mm;
	this.a5h = function(bE) {
		for (var ju = Math.floor(.5 * bE.length + .5), s = Math.floor(.5 * (ju - 1)), ak = 0; ak < s; ak++)
			for (var eM = -1; eM < 2; eM += 2) {
				var aT = ju + eM * ak;
				if (" " === bE[aT]) return [this.mh(bE.substring(0, aT)), this.a5i(bE.substring(aT))]
			}
		return [bE.substring(0, ju), bE.substring(ju)]
	}, this.a5i = function(bE) {
		for (var gz = bE.length, ak = 0; ak < gz; ak++)
			if (" " !== bE[ak]) return bE.substring(ak);
		return bE
	}, this.mh = function(bE) {
		for (var ak = bE.length - 1; 0 <= ak; ak--)
			if (" " !== bE[ak]) return bE.substring(0, ak + 1);
		return bE
	}, this.a5j = function(bE, xL) {
		return bE.split("(")[0] + "(🧈 " + xL.toFixed(2) + ")"
	}, this.startsWith = function(bE, a5k) {
		return bE.substring(0, a5k.length) === a5k
	}, this.h5 = function(bE, a5k) {
		var gz = bE.length;
		return bE.substring(gz - a5k.length, gz) === a5k
	}, this.da = function(eB, a5l, a5m) {
		var bE = "",
			gz = eB.length - 1;
		a5m = a5m || "";
		for (var ak = 0; ak < gz; ak++) bE += a5m + eB[ak] + a5m + ",", (ak + 1) % a5l == 0 && (bE += "\n");
		return bE += a5m + eB[gz] + a5m
	}, this.a5n = function(bE, a2A, a2B) {
		return bE.replace(new RegExp(a2A, "g"), a2B)
	}
}

function wz() {
	this.a5o = function(yA, player) {
		mY.yB(p.an, player, yA), bA.hq.a5p(yA, player)
	}, this.a5q = function(player) {
		mY.yF(player, 0), bA.hq.a5r(player)
	}, this.a5s = function(a5t, player) {
		mY.a5u(a5t, player), bA.hq.a5v(a5t, player)
	}, this.tc = function() {
		p.lI || p.ay || bA.a5w.tc()
	}
}

function zM() {
	this.az = function() {
		var a62;
		2 === p.mV ? (mY.uF(0, 59), r.a54(2700)) : p.mR < 7 ? (a62 = eL.jk[p.uf], a62 = eL.ma[a62], p7.a64(L(128, [a62]), 2, 1, 12), mY.mZ(0, L(129, [a62]), 40, 0, aF.aG, aF.be, -1, !1), r.a54(2700)) : 8 === p.mR ? (p.mi ? mY.uF(p.td, 2) : mY.uF(
			1 - p.an, 3), p.a61.z7(p.td), r.a4w(p.td, 2700, !1, 0)) : 9 === p.mR ? (mY.a65(), r.a54(2700)) : (mY.a66(p.td), r.a4w(p.td, 2700, !1, 0))
	}, this.a67 = function() {
		var bE;
		p.ay || (bE = p.mR < 7 ? "territorial.io/log/team" : 8 === p.mR ? "territorial.io/log/1v1" : 9 === p.mR ? "territorial.io/log/zombies" : "territorial.io/log/br", mY.mZ(720, bE, 736, 0, aF.aG, aF.c4, -1, !1))
	}
}

function a68() {
	var d3, d4, d5, dI;

	function d8() {
		dC(), 2 !== p.data.aIncomeType && (p.data.aIncomeData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		2 === p.data.aIncomeType ? (aa.dF.dG(d5.dH(), p.data.aIncomeData, 255), aa.dF.max(p.data.aIncomeData) || (p.data.aIncomeType = 0)) : 1 !== p.data.aIncomeType || p.data.aIncomeValue || (p.data.aIncomeType = 0)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(34), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), dM.dP(new dQ({
			dR: [L(3), L(4), L(5)],
			value: p.data.aIncomeType
		}, function(aJ) {
			dC(), 2 !== aJ || p.data.aIncomeData || (p.data.aIncomeData = new Uint8Array(p.dS)), p.data.aIncomeType = aJ, aC.dT(22)
		})), dI.push(dM)
	}(dI = []), function(dI) {
		var dM;
		1 === p.data.aIncomeType && ((dM = new dN).dO("Value"), dM.dU(new a7({
			aJ: -1,
			value: p.data.aIncomeValue
		}, 1, 0, function(i) {
			var value = dV.dW(Math.floor(i.target.value), 0, 255);
			i.target.value = p.data.aIncomeValue = value
		})), dI.push(dM))
	}(dI), function(dI) {
		var dM;
		2 === p.data.aIncomeType && ((dM = new dN).dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.aIncomeData, 4)), dM.dU(d5), dI.push(dM))
	}(dI), dI))
}

function a69() {
	this.resize = function() {
		var ak, a6A = document.head.querySelector("style#ss");
		if (a6A)
			for (ak = a6A.sheet.cssRules.length - 1; 0 <= ak; ak--) a6A.sheet.deleteRule(0);
		else(a6A = document.createElement("style")).id = "ss", document.head.appendChild(a6A);
		var a6B = "::-webkit-scrollbar",
			a6C = aa.ab.bV(bW.gj),
			aY = aa.ab.bV(Math.max(aa.ab.go(.012), 8));
		try {
			a6A.sheet.insertRule(a6B + "{width:" + aY + ";height:" + aY + ";}", a6A.sheet.cssRules.length), a6A.sheet.insertRule(a6B + "-thumb{background-color:white;}", a6A.sheet.cssRules.length), a6A.sheet.insertRule(a6B +
				"-track{background:" + aF.bd + ";}", a6A.sheet.cssRules.length), a6A.sheet.insertRule(a6B + "-track:horizontal{border-top:" + a6C + " solid white;}", a6A.sheet.cssRules.length), a6A.sheet.insertRule(a6B +
				"-track:vertical{border-left:" + a6C + " solid white;}", a6A.sheet.cssRules.length), a6A.sheet.insertRule(a6B + "-button{display:none;}", a6A.sheet.cssRules.length)
		} catch (i) {
			for (console.log("error 3425: " + i), ak = a6A.sheet.cssRules.length - 1; 0 <= ak; ak--) a6A.sheet.deleteRule(0)
		}
	}
}

function a6D() {
	var dR = a6E(dx.nd);
	dR && a6F(dR[0], dR[1], dR[2], dR[3], dR[4])
}

function a6E(nd) {
	return 2 === nd ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === nd ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === nd ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === nd ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === nd ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function a6F(a6G, a6H, a6I, a6J, a6K) {
	for (var a2, a3, t, v, a6N, a6O, oa = a6G.length - 1, a6L = dx.dy + dx.jK, gz = (a6L *= a6L, a6I.length), a6M = Array(gz), ak = gz - 1; 0 <= ak; ak--) a6M[ak] = a6I[ak] * a6I[ak];
	var a6P = new Array(gz),
		a6Q = new Array(gz),
		a6R = new Array(gz),
		eH = wb.wc();
	if (void 0 === a6K)
		for (a6K = new Array(gz), ak = gz - 1; 0 <= ak; ak--) a6K[ak] = 0;
	for (ak = 1; ak < gz; ak++) a6P[ak] = a6M[ak] - a6M[ak - 1], a6Q[ak] = a6J[ak] - a6J[ak - 1], a6R[ak] = a6K[ak] - a6K[ak - 1];
	for (a2 = dx.dy - 1; 0 <= a2; a2--)
		for (a3 = dx.jK - 1; 0 <= a3; a3--) {
			for (t = a6L, ak = oa; 0 <= ak; ak--) t = (v = (a2 - a6G[ak]) * (a2 - a6G[ak]) + (a3 - a6H[ak]) * (a3 - a6H[ak])) < t ? v : t;
			for (a6N = a6J[gz - 1], a6O = a6K[gz - 1], ak = 1; ak < gz; ak++)
				if (t < a6M[ak]) {
					a6N = a6J[ak - 1] + eJ((t - a6M[ak - 1]) * a6Q[ak], a6P[ak]), a6O = a6K[ak - 1] + eJ((t - a6M[ak - 1]) * a6R[ak], a6P[ak]);
					break
				} a6S(dx.dy * a3 + a2, a6N, a6O, eH)
		}
}

function a6S(aJ, a6N, a6O, eH) {
	a6N < 500 ? eH[aJ] = dV.eF(eH[aJ] * a6N * 2, 1e3) : 500 < a6N && (eH[aJ] += dV.eF(2 * (1e4 - eH[aJ]) * (a6N - 500), 1e3)), eH[aJ] += dV.eF(a6O * (10 * a6N - eH[aJ]), 1e3)
}

function a6T() {
	var aT, a6U = !1,
		a6V = !1,
		a6W = -1e4,
		a6X = -1,
		a6Y = 0;

	function resize(a6f) {
		aT = 0, i4.rq() && (a6a(a6f) || a6U) && (a6U = !1, bW.resize(), a6g.a6h.resize(), a6i.aB(), a6j.aB(), vs.resize(), xy.resize(), a6k.resize(), aC.resize(), 1 <= p.q ? (fp.resize(!1), a08.resize(), fr.resize(), y.resize(), lE.resize(), mY
			.resize(), lU.resize(), lJ.resize(), qW.resize(), pt.resize(), p7.resize(), m.resize(), lV.resize(), j7.resize(), a09.resize(), uh.resize(), y.l8()) : (b6.a6l(), b6.a6m()), j.a0 = !0)
	}

	function a6Z(eH) {
		return eH && 128 < eH ? Math.floor(eH) : 128
	}

	function a6a(a6f) {
		var fS, fQ, a6o, fz, a6q;
		if (!(0 < a5.aI)) return fz = a6Z(document.documentElement.clientWidth), a6q = a6Z(window.visualViewport && 2 !== fg.id ? window.visualViewport.height : document.documentElement.clientHeight), fS = fz, fQ = a6q, a6o = 0 !== fg.id || fS < fQ ?
			700 : 1200, a6o = Math.min(a6o / ((fS + fQ) / 2), 1), a6o = 0 === aK.f4.data[1].value ? 2 * a6o / 3 : Math.min(a6o + (aK.f4.data[1].value - 1) * (1 - a6o) / 2, 1), a5.a6 = (window.devicePixelRatio || 1) * a6o, __fx.hoveringTooltip
			.canvasPixelScale = a5.a6, a6f && !a6V ? (a6V = !0, aC.removeChild(document.body, a6b)) : a6V && (a6V = !1, document.body.appendChild(a6b)), fS = Math.floor(.5 + fz * a5.a6), fQ = Math.floor(.5 + a6q * a5.a6), fS !== a5.fS || fQ !==
			a5.fQ ? (a5.fS = fS, a5.fQ = fQ, a5.min = a6s(fS, fQ), a5.max = g8(fS, fQ), a5.fj = dV.eF(fS + fQ, 2), a5.ig = fS / fQ, a6b.width = fS, a6b.height = fQ, a6b.style.width = fz + "px", a6b.style.height = a6q + "px", a6X = j.k + 1e3, 1) :
			void 0
	}
	this.fS = 0, this.fQ = 0, this.min = 0, this.max = 0, this.fj = 0, this.ig = 1, this.a6 = 1, this.aI = 0, this.dw = function() {
		this.fS = a6Z(document.documentElement.clientWidth) + 2, this.fQ = a6Z(document.documentElement.clientHeight) + 2
	}, this.aB = function() {
		aT = 1, a6b = document.getElementById("canvasA"), 2 === fg.id && (a6b.style.webkitUserSelect = "none"), (gD = a6b.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, a6a(0)
	}, this.az = function() {
		50 <= ++aT && resize(0), -1 === a6X || j.k < a6X || (a6Y++, a6X = -1, j.k + 8e3 <= 2e3 * a6Y ? console.log("error 3748") : fg.fh.setState(15))
	}, this.a6d = function(z9) {
		a6U = !0, resize(z9)
	}, this.a6e = function() {
		a6W + 1e3 > j.k || (a6W = j.k, resize(0))
	}
}

function a6t() {
	var d3, d4, d5;

	function d8() {
		dC(), 3 !== p.data.botDifficultyType || aa.dF.a1K(p.data.botDifficultyData) || (p.data.botDifficultyType = 0), 3 !== p.data.botDifficultyType && (p.data.botDifficultyData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		3 === p.data.botDifficultyType && aa.dF.dG(d5.dH(), p.data.botDifficultyData, mG.mH.length - 1)
	}

	function a6u(dI, aJ) {
		var dM = new dN,
			value = (dM.dO(aJ < 0 ? L(27) : L(112) + " " + eL.ma[aJ % 9]), 0 <= aJ && (dM.mF(L(23) + ": " + p.data.teamPlayerCount[aJ]).style.marginBottom = "1em"), aJ < 0 ? p.data.botDifficultyValue : p.data.botDifficultyTeam[aJ]);
		dM.dP(new dQ({
			dR: mG.mH,
			value: value
		}, function(qc) {
			aJ < 0 ? p.data.botDifficultyValue = qc : p.data.botDifficultyTeam[aJ] = qc
		})), dI.push(dM)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(27), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, function() {
		var dI = [];
		if (function(dI) {
				var dM = new dN,
					dR = (dM.dO(L(2)), [L(4), L(28), L(29), L(5)]),
					value = p.data.botDifficultyType;
				0 === p.data.gameMode && (value = Math.min(value, 2), dR.splice(2, 1));
				dM.dP(new dQ({
					dR: dR,
					value: value
				}, function(aJ) {
					dC(), p.data.botDifficultyType = aJ, 0 === p.data.gameMode && 2 === aJ && (p.data.botDifficultyType = 3), 3 !== p.data.botDifficultyType || p.data.botDifficultyData || (p.data.botDifficultyData =
						new Uint8Array(p.dS)), 2 !== p.data.botDifficultyType || p.data.botDifficultyTeam || (p.data.botDifficultyTeam = new Uint8Array(9)), aC.dT(25)
				})), dI.push(dM)
			}(dI), 0 === p.data.botDifficultyType) a6u(dI, -1);
		else if (2 === p.data.botDifficultyType)
			for (var ak = 0; ak < p.data.teamPlayerCount.length; ak++) p.data.teamPlayerCount[ak] && a6u(dI, ak);
		else 3 === p.data.botDifficultyType && ! function(dI) {
			var dM = new dN;
			dM.dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.botDifficultyData, 8)), dM.dU(d5), dI.push(dM)
		}(dI);
		return dI
	}())
}

function a6v() {
	this.yT = 0, this.aB = function() {
		this.yT = 0
	}, this.az = function() {
		if (!this.yT && j.b2() % 30 == 7 && aa.al.a6y(80) && (it.performance.yT = 1)) {
			if (p.e0) {
				var a71 = uh.zp();
				if (eL.jk[a71]) {
					uh.ui(a71);
					var eB = eC.jp,
						gz = eC.uj[0];
					if (0 !== gz)
						for (var a72 = Math.min(100 + 10 * (gz - 1), 400), ak = 0; ak < gz; ak++) mG.a73(eB[ak], a72)
				}
			}
			mG.a73(re[0], 100)
		}
	}
}

function a74() {
	this.a75 = function(xW, a76) {
		n4.gZ(11), n4.ga(1, 0), n4.ga(6, 4), n4.ga(1, a76 ? 1 : 0), n4.ga(3, 0 === p.q ? f7.iF ? 6 : 0 : p.ay ? 1 : p.lI ? 7 : p.mR < 7 ? 2 : 8 === p.mR ? 4 : 9 === p.mR ? 5 : 3), bA.aD.send(xW, n4.gd)
	}, this.hr = function() {
		n4.gZ(58), n4.ga(1, 0), n4.ga(6, 5), n4.ga(8, bA.aD.ho), n4.ga(10, xf.hd), n4.ga(9, xf.he), n4.ga(10, gJ.a1j), n4.ga(14, gJ.a77), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a78 = function(aU) {
		n4.gZ(27), n4.ga(1, 1), n4.ga(4, 0), n4.ga(22, aU), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a79 = function(a7A, kS) {
		n4.gZ(25), n4.ga(1, 1), n4.ga(4, 1), n4.ga(10, a7A), n4.ga(10, kS), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7B = function(a7A, io) {
		n4.gZ(24), n4.ga(1, 1), n4.ga(4, 2), n4.ga(10, a7A), n4.ga(9, io), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7C = function(a7A, a7D) {
		n4.gZ(42), n4.ga(1, 1), n4.ga(4, 3), n4.ga(10, a7A), n4.ga(27, a7D), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7E = function(a7A, rD) {
		n4.gZ(31), n4.ga(1, 1), n4.ga(4, 4), n4.ga(10, a7A), n4.ga(16, rD), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7F = function(kS) {
		n4.gZ(15), n4.ga(1, 1), n4.ga(4, 5), n4.ga(10, kS), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7G = function(aJ) {
		n4.gZ(15), n4.ga(1, 1), n4.ga(4, 6), n4.ga(10, aJ), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7H = function(a7I) {
		n4.gZ(6), n4.ga(1, 1), n4.ga(4, 7), n4.ga(1, a7I), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7J = function() {
		n4.gZ(5), n4.ga(1, 1), n4.ga(4, 8), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a7K = function(a7A, aU, kS) {
		n4.gZ(47), n4.ga(1, 1), n4.ga(4, 10), n4.ga(10, a7A), n4.ga(10, kS), n4.ga(22, aU), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a5p = function(a7L, a7M) {
		n4.gZ(24), n4.ga(1, 1), n4.ga(4, 15), n4.ga(9, a7M), n4.ga(10, a7L), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a5r = function(a0t) {
		n4.gZ(14), n4.ga(1, 1), n4.ga(4, 14), n4.ga(9, a0t), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a5v = function(a7N, target) {
		var ak, gz = a7N.length;
		for (n4.gZ(14 + 9 * gz), n4.ga(1, 1), n4.ga(4, 13), n4.ga(9, target), ak = 0; ak < gz; ak++) n4.ga(9, a7N[ak]);
		bA.aD.send(bA.aD.bB, n4.gd)
	}
}

function a7O() {
	var a7P = [];
	this.j4 = function(player, io, a7Q, a7R) {
		player === p.an || io === p.an || !a7R && aa.al.is(player) || aa.al.is(io) || this.mZ(fe.mb[player] + " supported " + fe.mb[io] + " with " + aa.dZ.fy(a7Q) + " ressource" + (1 === a7Q ? "." : "s."))
	}, this.mZ = function(bE, yA) {
		bE = {
			k: fr.a7T(),
			bE: bE,
			yA: yA
		};
		a7P.push(bE), 30 === aC.b1 && aC.b3().mZ(bE)
	}, this.clear = function() {
		a7P = [];
		var md = aC.fC(30);
		md && md.clear()
	}, this.a7U = function() {
		return a7P
	}
}

function a7V() {
	function a7g(player, kS, a7Y) {
		3 <= a7Y && 2142 < j.b2() && (kS === p.dS || fe.ff[kS] < dV.eF(fe.ff[player], 20)) && mG.a7c(player, 20)
	}

	function a7i(player, ip, kS, a7Y) {
		3 <= a7Y && a7Y < 6 && dV.eF(fe.ff[player], 8) > fe.ff[kS] && (ip = Math.max(dV.eF(11 * fe.ff[kS], 5), dV.eF(fe.ff[player], 10)));
		a7Y = fe.kO[player].length;
		it.a2M.a2O(player, kS), it.a2M.a2T(player, kS, a7Y, ip)
	}

	function a7f(player, ip) {
		var kS = p.dS,
			gz = fe.kO[player].length;
		it.a2M.a2N(player), fe.kO[player].length !== gz && it.a2M.a2T(player, kS, gz, ip)
	}
	this.iv = new Uint8Array(p.dS), this.aB = function() {
		this.iv.fill(0)
	}, this.a7W = function(player, ip) {
		var a7X, a7Y, a7Z, a7a;
		nj.uC(player) && (a7X = fv.fw(player), 3 <= (a7Y = mG.ip[player]) && a7Y < 6 && (ip = Math.max(fe.ff[player] - a7X, ip)), a7Z = fe.k9[player].length, a7a = fe.k8[player].length, 30 * fe.jQ[player] > p.wr && a7b[player] < 10 && 100 *
			a7a <= a7Z && mG.a7c(player, 10), p.e0 ? function(player, ip, a7Y, a7X) {
				var kS;
				if (it.a2M.a2V(player, !1) || it.a2M.a2X(player, !1)) {
					if (!it.a2M.a2Z(player))
						if (it.a2M.a2Y()) a7f(player, ip), a7g(player, p.dS, a7Y);
						else {
							if (eG.a2y(mG.a7h[a7Y])) kS = it.a2M.a2c(player);
							else {
								if (it.a2M.a2a() && eG.a2y(mG.a7j[a7Y]) && it.a2M.a2b(), 6 === a7Y) return a7i(player, ip, it.a2M.a2o(), a7Y);
								kS = it.a2M.a2f(player)
							}
							a7i(player, ip, kS, a7Y), a7g(player, kS, a7Y)
						}
				} else ao.sY.az(player) || it.a7k.az(player) || ! function(player, ip, a7Y, a7X) {
					var iv = it.iu.iv;
					iv[player] = 0;
					var a7m = eL.jd[player];
					if (0 !== a7m) {
						var a7n = fe.ff[player],
							jQ = fe.jQ;
						if (player < p.e3 && (ip = a7n), !(a7n < jQ[player] || 5 === a7Y && a7n < a7X || 4 === a7Y && a7n < dV.eF(a7X, 2))) {
							uh.ui(a7m);
							for (var gz = eC.uj[0], jp = eC.jp, ak = eG.xT(gz), eM = 0; eM < gz; eM++) {
								var aT = jp[(eM + ak) % gz];
								if (iv[aT]) return q7.x3.im(player, aT, ip)
							}
							var r3 = ao.aD.r3;
							for (eM = 0; eM < gz; eM++)
								if (aT = jp[(eM + ak) % gz], r3[aT] && aT !== player) return q7.x3.im(player, aT, ip)
						}
					}
				}(player, ip, a7Y, a7X)
			}(player, ip, a7Y, a7X) : (!a7a || a7Z && (a7Z < a7a && !eG.xT(10) || 100 * a7a <= a7Z && eG.xT(3) || !eG.xT(8))) && ao.sY.az(player) || function(player, ip, a7Y) {
				it.a2M.a2V(player, !0) || it.a2M.a2X(player, !0) ? it.a2M.a2Z(player) || (it.a2M.a2Y() ? a7f(player, ip) : eG.a2y(mG.a7h[a7Y]) ? a7i(player, ip, it.a2M.a2c(player), a7Y) : 5 === a7Y ? a7i(player, ip, it.a2M.a2k(), a7Y) : (it
					.a2M.a2a() && eG.a2y(mG.a7j[a7Y]) && it.a2M.a2b(), a7i(player, ip, 6 === a7Y ? it.a2M.a2o() : it.a2M.a2f(player), a7Y))) : it.a7k.az(player)
			}(player, ip, a7Y))
	}
}

function a7o(bQ, data) {
	var gz = data.a7p.length,
		a7q = document.createElement("div"),
		a7r = document.createElement("div"),
		iV = document.createElement("div"),
		a7s = new Array(gz),
		dI = new Array(gz),
		a7t = new Array(data.gx.length),
		a7u = aa.color.bb(70, 70, 0, .35);

	function a1d() {
		this.style.backgroundColor = aa.color.a1d(a7u, 160)
	}

	function a7z() {
		this.style.backgroundColor = a7u
	}

	function a81() {
		var ju;
		for (bQ.style.font = aa.ab.fk(0, aa.ab.gs(.026, .5, .03)), ak = 1; ak < a7t.length; ak++) aa.ab.bU(a7t[ak], 4);
		if (aa.ab.bU(a7q, 2), gz) {
			for (var jq, fz = a7q.offsetWidth, g3 = iV.offsetWidth, ak = 0; ak < a7t.length; ak++) jq = .01 * data.a7y[ak] * g3, a7t[ak].style.width = (100 * jq / fz).toFixed(2) + "%";
			var af = data.a7p[0].length;
			for (ak = 0; ak < gz; ak++)
				for (aa.ab.bU(a7s[ak], 2), ju = 1; ju < af; ju++) aa.ab.bU(dI[ak][ju], 4);
			a7r.a7v && (a7r.scrollTop = a7r.a7v)
		}
	}
	this.resize = function() {
			a81(), a81()
		}, bQ.style.display = "flex", bQ.style.flexDirection = "column", a7r.style.overflowX = "hidden", a7r.style.overflowY = "auto", a7r.addEventListener("scroll", function() {
			this.a7v = this.scrollTop
		}),
		function() {
			var eI, ak, a7p = data.a7p,
				af = gz ? a7p[0].length : 0;
			for (ak = 0; ak < gz; ak++) {
				a7s[ak] = document.createElement("div"), a7s[ak].style.backgroundColor = function(ak) {
					return ak % 2 == 1 ? aa.color.bb(130, 130, 130, .35) : aF.bg
				}(ak), a7s[ak].style.width = "100%", a7s[ak].style.display = "flex", dI[ak] = new Array(af);
				for (var ju = 0; ju < af; ju++) dI[ak][ju] = eI = document.createElement("div"), eI.style.display = "flex", eI.style.justifyContent = "center", eI.style.wordBreak = "break-all", eI.style.padding = "0.4em 0em", eI.style.width = data
					.a7y[ju] + "%", eI.innerHTML = a7p[ak][ju].eH, 1 === a7p[ak][ju].h4 && (eI.name = "" + ak, eI.style.color = aF.ce, eI.style.backgroundColor = a7u, eI.addEventListener("mouseover", a1d), eI.addEventListener("mouseout", a7z),
						function(eI, tJ, ym) {
							2147483647 !== ym && eI.addEventListener("click", function() {
								n4.gZ(30), n4.ga(30, tJ), n7.aB(n4.gd), this.style.backgroundColor = a7u, aC.dT(8, aC.b1, new hY(25, {
									yl: 0,
									tJ: n9.cw.nA(n9.cw.nB(5)),
									ym: ym
								}))
							})
						}(eI, a7p[ak][ju].tJ, a7p[ak][ju].ym)), a7s[ak].appendChild(eI)
			}
			for (a7q.style.display = "flex", a7q.style.backgroundColor = aa.color.bb(0, 120, 0, .35), ak = 0; ak < a7t.length; ak++) a7t[ak] = eI = document.createElement("div"), eI.style.display = "flex", eI.style.justifyContent = "center", eI.style
				.wordBreak = "break-all", eI.style.padding = "0.4em 0em", eI.style.width = data.a7y[ak] + "%", eI.innerHTML = data.gx[ak], a7q.appendChild(eI)
		}();
	for (var ak = 0; ak < gz; ak++) iV.appendChild(a7s[ak]);
	a7r.appendChild(iV), bQ.appendChild(a7q), bQ.appendChild(a7r)
}

function sh() {
	this.a82 = function(player) {
		return !!p.data.passableWater && ao.aD.om !== ao.aD.a83 && ao.aD.r3[player] !== ao.aD.a84 && 0 !== fe.k9[player].length
	}, this.a85 = function(a86) {
		var sW = eC.qP[1];
		return !(4 <= sW || !ao.iA.r1(pv.qA(a86))) && eu.ef(pv.qA(pv.a87(a86, sW)))
	}
}

function a88() {
	this.a89 = function() {
		n4.gZ(39), n4.ga(1, 0), n4.ga(6, 16), bA.a1k.a8A(), bA.aD.send(0, n4.gd)
	}, this.a5P = function(xW) {
		n4.gZ(127), n4.ga(1, 0), n4.ga(6, 17), iH.cw.a8D(aK.f4.data[105].value, 5), iH.cw.a8D(aK.f4.data[106].value, 15), bA.aD.send(xW, n4.gd)
	}, this.a8C = function() {
		n4.gZ(97), n4.ga(1, 0), n4.ga(6, 18), iH.cw.a8D(aK.f4.data[110].value, 15), bA.aD.send(0, n4.gd)
	}, this.a8E = function(a16) {
		var gz = a16.bE.length;
		n4.gZ(21 + 16 * gz), n4.ga(1, 0), n4.ga(6, 29), n4.ga(6, a16.yl), n4.ga(8, gz), n9.cy.a8F(a16.bE), bA.aD.send(0, n4.gd)
	}, this.a8G = function(a8H, colors, a8I, a5H) {
		n2.aB(), n2.ga(1, 0), n2.ga(6, 16), n2.ga(20, Math.min(a8H, 1e6));
		for (var ak = 0; ak < 11; ak++)
			for (var ju = 0; ju < 3; ju++) n2.ga(8, colors[ak][ju]);
		a8H = vn.data.a8K(a8I.trim());
		n2.ga(8, -1 === a8H ? 255 : a8H), n9.d0.lt(a5H.trim().substring(0, 180), 8, n2), bA.aD.send(0, n2.a1q())
	}, this.a8L = function(data) {
		n4.gZ(43), n4.ga(1, 0), n4.ga(6, 25), n4.ga(6, data.yl), iH.cw.a8D(data.tJ, 5), bA.aD.send(0, n4.gd)
	}, this.a8M = function(data) {
		n4.gZ(75), n4.ga(1, 0), n4.ga(6, 27), n4.ga(6, data.yl), iH.cw.a8D(data.tJ, 5), n4.y9(32, data.value), bA.aD.send(0, n4.gd)
	}
}

function a8N() {
	this.w4 = 0, this.az = function() {
		a6k.az(), vs.az(), a5.az(), bA.aD.az(), xf.i1(), a4T.a4V.az(), j.a0 && (j.a0 = !1, b6.g9())
	}
}

function a8O() {
	this.a8P = "https://", this.a8Q = this.a8P + "territorial.io/", this.a8R = this.a8Q + "changelog", this.a8S = this.a8Q + "terms", this.a8T = this.a8Q + "cookie_policy", this.a8U = this.a8Q + "privacy", this.a8V = this.a8Q + "tutorial", this.a8W =
		this.a8Q + "players", this.a8X = this.a8Q + "clans", this.a8Y = this.a8Q + "clan-results", this.a8Z = "https://patreon.com/c/territorial", this.a8a = this.a8P + "play.google.com/store/apps/details?id=territorial.io", this.uZ = this.a8P +
		"apps.apple.com/app/id1581110913", this.a8b = this.a8P + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a8c = this.a8P + "discord.gg/pthqvpTXmh", this.a8d = this.a8P + "www.instagram.com/davidtschacher/", this.a8e =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a8f() {
	this.aD = new a8g, this.b1 = 0;
	var a8h = new Array(32);

	function a8k() {
		for (var gz = a8h.length, ak = 0; ak < gz; ak++) a8h[ak] = null
	}
	this.aB = function() {
		for (var a8i, a8j = document.body.firstChild; a8j;) a8i = a8j.nextSibling, !document.body.contains(a8j) || "DIV" !== a8j.tagName && "INPUT" !== a8j.tagName && "BUTTON" !== a8j.tagName || aC.removeChild(document.body, a8j), a8j = a8i
	}, this.dT = function(aJ, a0Y, a16) {
		void 0 === a0Y && (a0Y = this.b1), j.a0 = !0, 0 === aJ && (0 === b6.hy() ? aJ = 5 : fg.fh.setState(13)), this.n(), this.b1 === aJ && (a0Y = a8h[aJ].a0Y, a8h[aJ] = null), this.b1 = aJ;
		var af = a8h[aJ];
		if (!af || 4 === aJ || 7 === aJ || 8 === aJ || 9 === aJ || 10 === aJ || 11 === aJ || 13 === aJ || 15 === aJ || 18 === aJ || 20 <= aJ && aJ <= 28 || 32 === aJ || 33 === aJ) {
			if (0 === aJ) return void a8k();
			1 === aJ ? af = new a8l : 2 === aJ ? af = new vj : 3 === aJ ? af = new ul : 4 === aJ || 9 === aJ || 10 === aJ || 11 === aJ || 13 === aJ || 33 === aJ ? af = a16 : 5 === aJ ? af = new a8m : 6 === aJ ? af = new a8n : 7 === aJ ? af =
				new a8o(aC.aD.a8p) : 8 === aJ ? af = a16 : 12 === aJ ? af = new v6 : 14 === aJ ? af = new a8q : 15 === aJ ? af = new a8o(aC.aD.a8r) : 16 === aJ ? af = new a8s : 17 === aJ ? af = new hS : 18 === aJ ? af = new a8t : 19 === aJ ? af =
				new lh : 20 === aJ ? af = new a8u : 21 === aJ ? af = new a8v : 22 === aJ ? af = new a68 : 23 === aJ ? af = new a1I : 24 === aJ ? af = new a8w : 25 === aJ ? af = new a6t : 26 === aJ ? af = new d2 : 27 === aJ ? af = new a8x : 28 ===
				aJ ? af = new a8y : 29 === aJ ? af = new a3Y : 30 === aJ ? af = new a8z : 31 === aJ && (af = new a90), af.a0Y = a0Y, a8h[aJ] = af
		}
		af.show(a16)
	}, this.dE = function() {
		this.lW() && this.un(this.b3().a0Y)
	}, this.un = function(aJ) {
		this.lW() && (a8h[aJ] ? (this.n(), j.a0 = !0, this.b1 = aJ, a8h[aJ].show()) : this.dT(aJ))
	}, this.n = function() {
		this.lW() && a8h[this.b1].n()
	}, this.gS = function() {
		this.lW() && (a8h[this.b1].n(), a8k(), this.b1 = 0, fg.fh.setState(13))
	}, this.g9 = function() {
		var af;
		this.lW() && (af = a8h[this.b1]).g9 && af.g9()
	}, this.resize = function() {
		if (!this.lW()) return !1;
		a8h[this.b1].resize()
	}, this.lP = function(a2, a3) {
		var af;
		this.lW() && (af = a8h[this.b1]).lP && af.lP(a2, a3)
	}, this.l7 = function(a2, a3) {
		var af;
		this.lW() && (af = a8h[this.b1]).l7 && af.l7(a2, a3)
	}, this.vN = function() {
		var af;
		this.lW() && (af = a8h[this.b1]).vN && af.vN()
	}, this.vM = function(lQ, lR, deltaY) {
		var af;
		this.lW() && (af = a8h[this.b1]).vM && af.vM(lQ, lR, deltaY)
	}, this.db = function(code) {
		var af;
		return !!this.lW() && ((af = a8h[this.b1]).db && af.db(code), !0)
	}, this.az = function() {
		var af;
		this.lW() && (af = a8h[this.b1]) && af.az && af.az()
	}, this.lW = function() {
		return 0 < this.b1
	}, this.b3 = function() {
		return a8h[this.b1]
	}, this.fC = function(aJ) {
		return a8h[aJ]
	}, this.dD = function() {
		return a8h
	}, this.removeChild = function(a91, h7) {
		try {
			a91.removeChild(h7)
		} catch (i) {
			console.log("removeChild error " + i)
		}
	}
}

function sU() {
	this.a92 = 32, this.a2 = 0, this.a3 = 0, this.a93 = 0, this.a94 = 0, this.a95 = 4, this.sT = null, this.a96 = new Int16Array(9), this.aB = function() {
		this.a93 = 1 + dV.eF(dx.dy - 1, this.a92), this.a94 = 1 + dV.eF(dx.jK - 1, this.a92), this.sT = new Array(this.a93 * this.a94), aa.dF.a97(this.sT);
		var a2, a3, a96 = this.a96,
			fS = this.a93;
		for (a2 = -1; a2 <= 1; a2++)
			for (a3 = -1; a3 <= 1; a3++) a96[3 * (1 + a3) + 1 + a2] = a3 * fS + a2
	}, this.a99 = function(a9A, ak) {
		return this.sT[ak].push(a9A), this.sT[ak].length - 1
	}, this.a9B = function(a9C, a9D, a9E) {
		var a9F, a9G, a9D = pv.a9H(a9D),
			a9E = pv.a9H(a9E);
		return a9D === a9E ? a9C : (a9F = this.sT[a9D].pop(), this.sT[a9D].length === a9C ? this.a99(a9F, a9E) : (a9G = this.sT[a9D][a9C], this.sT[a9D][a9C] = a9F, ao.aD.a9I[a9F] = a9C, this.a99(a9G, a9E)))
	}
}

function a9J() {
	var a9K, a9L, a9M = -15e3,
		a9N = !1;

	function lP(i) {
		a9b() || (a9N = !0, a9c(i, 1), bA.aD.a9d(bA.aD.bB), a9e(Math.floor(a5.a6 * i.clientX), Math.floor(a5.a6 * i.clientY)))
	}

	function h(i) {
		a9M = j.k, a9c(i, 1), bA.aD.a9d(bA.aD.bB), 0 < i.touches.length && (a9K = Math.floor(a5.a6 * i.touches[0].clientX), a9L = Math.floor(a5.a6 * i.touches[0].clientY), a9f.h(i) || a9e(a9K, a9L))
	}

	function a9e(a2, a3) {
		aC.lP(a2, a3), 0 === p.q ? b6.lP(a2, a3) : lJ.a9g(a2, a3) || lV.lP(a2, a3) || a09.lP(a2, a3) || m.a9h(a2, a3) || pt.lP(a2, a3) || 0 <= lU.lP(a2, a3) || qW.lP(a2, a3) || tC.a9i(a2, a3) || m.a4(a2, a3)
	}

	function l7(i) {
		a9b() || (a9N = !0, a9c(i, 1), a9j(Math.floor(a5.a6 * i.clientX), Math.floor(a5.a6 * i.clientY)))
	}

	function o(i) {
		a9M = j.k, a9c(i, 1), 0 < i.touches.length && (a9K = Math.floor(a5.a6 * i.touches[0].clientX), a9L = Math.floor(a5.a6 * i.touches[0].clientY), a9f.o(i) || a9j(a9K, a9L))
	}

	function a9j(a2, a3) {
		aC.l7(a2, a3), 0 === p.q ? b6.l7(a2, a3) : (a9k.pp(a2, a3), lV.l7(a2, a3) || (lU.l7(a2, a3), m.lW() ? m.l7(a2, a3) : lE.ps ? lE.l7(a2) && (j.a0 = !0) : (fp.l7(a2, a3), y.a51 && y.l7(a2, a3) && (j.a0 = !0))))
	}

	function a9R(i) {
		a9b() || (a9c(i, 1), vN(), 0 === p.q ? (b6.click(-1024, -1024), xy.a3M()) : (fp.a3N(-1024, -1024), lU.l7(-1024, -1024), lE.a9l(), y.a51 = !1))
	}

	function lY(i) {
		a9b() || (a9c(i, 1), a9m(Math.floor(a5.a6 * i.clientX), Math.floor(a5.a6 * i.clientY), 2 === i.button), tC.a9Q && (tC.a9Q = !1, i.preventDefault()))
	}

	function click(i) {
		a9b() || a9c(i, 1)
	}

	function a9S(i) {
		a9M = j.k, a9c(i, 1), i && i.touches && 0 < i.touches.length && 0 !== p.q ? y.a51 = !1 : a9f.a1() || (a9m(a9K, a9L, !1), tC.a9Q && (tC.a9Q = !1, i.preventDefault()))
	}

	function a9T(i) {
		a9M = j.k, a9c(i, 1), a9m(a9K, a9L, !1), tC.a9Q && (tC.a9Q = !1, i.preventDefault())
	}

	function a9U(i) {}

	function a9V(i) {}

	function a9W(i) {
		a9b() || a9c(i, 0)
	}

	function a9m(a2, a3, a9n) {
		vN(), 0 === p.q ? b6.click(a2, a3) : (fp.a3N(a2, a3), lV.a3N(), lE.a9l(), y.a51 = !1, m.click(a2, a3, a9n) ? j.a0 = !0 : lU.lY(a2, a3))
	}

	function vN() {
		aC.vN()
	}

	function vM(i) {
		var a2, a3, deltaY;
		a9b() || (a9c(i, 1), bA.aD.a9d(bA.aD.bB), a2 = Math.floor(a5.a6 * i.clientX), a3 = Math.floor(a5.a6 * i.clientY), deltaY = i.deltaY, 1 === i.deltaMode && (deltaY *= 16), aC.vM(a2, a3, deltaY), 0 === p.q ? b6.vM(a2, a3, deltaY) : fp.vM(a2, a3,
			deltaY) || (lE.vL(a2, a3) ? lE.vM(deltaY) && (j.a0 = !0) : y.vM(a2, a3, deltaY)))
	}

	function a9X(i) {
		a9c(i, 0)
	}

	function a9c(i, id) {
		0 === id && aC.lW() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== b6.hy() && i.preventDefault()
	}

	function a9Y(i) {
		if (__fx.keybindHandler(i.key)) return;
		a9b() || 0 < a5.aI || (i = i.code) && i.length && (v1.aT(i, 18) ? l4.kz(3) : v1.aT(i, 22) ? l4.kz(0) : v1.aT(i, 20) ? l4.kz(1) : v1.aT(i, 24) ? l4.kz(2) : v1.aT(i, 10) ? lE.a9p(31 / 32) : v1.aT(i, 8) ? lE.a9p(32 / 31) : v1.aT(i, 6) ? lE.a9p(
				7 / 8) : v1.aT(i, 4) ? lE.a9p(8 / 7) : v1.aT(i, 14) ? 0 !== p.q && y.vM(Math.floor(a5.fS / 2), Math.floor(a5.fQ / 2), -200) : v1.aT(i, 16) ? 0 !== p.q && y.vM(Math.floor(a5.fS / 2), Math.floor(a5.fQ / 2), 200) : v1.aT(i, 0) ? p
			.q && a9k.pq(0) : v1.aT(i, 2) ? p.q && a9k.pq(1) : v1.aT(i, 30) ? p.q && a9k.pq(2) : v1.aT(i, 26) ? p.q && a9k.qS() : v1.aT(i, 28) && p.q && a9k.qV())
	}

	function a9Z(i) {
		if (!a9b() && !(0 < a5.aI || j.k < 400)) {
			var code = i.code;
			if (code && code.length && !("Enter" === code && aC.db(1) || "Space" === code && aC.db(0))) return f7.iF ? f7.iB.db(code) ? void 0 : void("Escape" === code && tC.a9q()) : void(8 !== b6.hy() && b6.db(i) ? j.a0 = !0 : "Escape" === code ? tC
				.a9q() : v1.aT(code, 18) ? l4.l1(3) : v1.aT(code, 22) ? l4.l1(0) : v1.aT(code, 20) ? l4.l1(1) : v1.aT(code, 24) ? l4.l1(2) : v1.aT(code, 12) ? lJ.lK(!p.lZ) : "Space" === code && p.q && (lU.lD && lU.lH(), p.ay) && lJ.lM(!1))
		}
	}

	function a9a() {
		"hidden" !== document.visibilityState && (j.a0 = !0)
	}

	function a9b() {
		return a9M + 15e3 > j.k
	}

	function resize() {
		a5.a6e()
	}
	this.a9O = 0, this.a9P = "", this.a9Q = !1, this.aB = function() {
		a6b.addEventListener("mousedown", lP, {
			passive: !1
		}), a6b.addEventListener("mousemove", l7, {
			passive: !1
		}), a6b.addEventListener("mouseup", lY, {
			passive: !1
		}), a6b.addEventListener("click", click, {
			passive: !1
		}), a6b.addEventListener("mouseleave", a9R, {
			passive: !1
		}), a6b.addEventListener("wheel", vM, {
			passive: !1
		}), a6b.addEventListener("touchstart", h, {
			passive: !1
		}), a6b.addEventListener("touchmove", o, {
			passive: !1
		}), a6b.addEventListener("touchend", a9S, {
			passive: !1
		}), a6b.addEventListener("touchcancel", a9T, {
			passive: !1
		}), a6b.addEventListener("dragover", a9U), a6b.addEventListener("drop", a9V), a6b.addEventListener("dblclick", a9W), document.addEventListener("contextmenu", a9X), document.addEventListener("keydown", a9Y), document.addEventListener(
			"keyup", a9Z), document.addEventListener("visibilitychange", a9a), window.addEventListener("resize", resize)
	}, this.a9i = function(a2, a3) {
		return !!lJ.lP(a2, a3) || !!(fp.lP(a2, a3) || y.lP(a2, a3) || lE.lP(a2, a3) || mY.lP(a2, a3))
	}, this.a9r = a9b, this.tD = function() {
		return !a9N || 0 < a9M
	}, this.a9q = function() {
		if (!aC.lW()) return 8 === b6.hy() ? p.lZ ? void lJ.lK(!1) : lV.lW ? void lV.lH() : void lU.lH() : void(7 !== b6.hy() && 6 === b6.hy() && vs.a9s());
		aC.db(2)
	}
}

function aA6(a6U) {
	gJ && !a6U || (aA8(), dV = new aA9, uY = new a8O, aa = new aAA, aF = new bY, p = new aAB, vn = new aAC, n9 = new ko, iH = new cv, mG = new aAD, pg = new aAE, a4X = new aAF, r = new a4d, a9t = new j9, a9u = new ya, a9v = new aAG, m = new aAH, lU =
		new l9, mY = new aAI, a6k = new oz, pt = new aAJ, p7 = new aAK, lE = new aAL, y = new aAM, xy = new a2z, a08 = new fP, fp = new aAN, fr = new aAO, a09 = new aAP, a6i = new aAQ, vs = new aAR, b6 = new aAS, i4 = new aAT, eu = new de, tr =
		new aAU, tq = new tf, j0 = new aAV, qB = new aAW, nj = new ty, fv = new aAX, a9w = new zh, j7 = new aAY, fe = new aAZ, a9x = new aAa, a4Z = new aAb, a9y = new vO, a9z = new wP, wb = new aAc, l4 = new ks, bA = new aAd, eG = new a2s, it =
		new aAe, a06 = new zq, a9f = new a, a0A = new yp, a5 = new a6T, qW = new aAf, xf = new hc, qJ = new aAg, aA0 = new aAh, a13 = new aAi, a4Y = new aAj, yD = new aAk, aA1 = new aAl, q7 = new wx, ls = new aq, lJ = new aAm, n4 = new gY, n2 =
		new aAn, n7 = new aAo, yk = new yh, tC = new a9J, pv = new aAp, ao = new sP, eC = new aAq, a07 = new hN, aA2 = new a0u, mO = new zG, dx = new aAr, a9k = new pm, aC = new a8f, a4T = new aAs, fg = new tt, gJ = new aAt, a1h = new aAu, aK =
		new vb, eL = new aAv, uh = new aAw, ev = new a2p, es = new aAx, a4a = new uu, a6g = new aAy, iy = new aAz, lV = new aB0, j = new aB1, aA4 = new aB2, bW = new uJ, gM = new aB3, aA5 = new aB4, mK = new aB5, f7 = new i6, iR = new aB6, j3 =
		new a7O, q5 = new aB7, nZ = new aB8, gJ.aB(), fg.aB(), a5.dw(), aK.aB(), vn.aB(), vn.aBA(), (v1 = new aBB).aB(), aa.aB(), a4a.aB(), bA.aB(), n9.aB(), iH.aB(), dx.aB(), aC.aB(), a6j = new aBC, a5.aB(), fg.fh.uU(), j.aB(), bW.aB(), a6g
	.aB(), aA3 = new vR, eG.aB(), fv.nE(), a4T.aB(), a9z.aB(), b6.aB(), xy.aB(), a9x.aB(), tC.aB(), i4.aB(), j.a0 = !0, setTimeout(function() {
			dx.gZ(2, 14071)
		}, 0), aC.dT(5, 5), yk.ts() || fg.fh.uX(), a5.a6d(), gJ.gK = 1)
}

function aAd() {
	this.aD = new aBD, this.a4c = new aBE, this.hq = new a74, this.a3v = new a1f, this.a1k = new aBF, this.a5O = new a88, this.a5w = new tb, this.aBG = new aBH, this.a0t = new xU, this.xd = new aBI, this.xg = new a5G, this.xj = new aBJ, this.xn =
		new yu, this.aB = function() {
			this.aD.aB()
		}
}

function iN() {
	var aBK, aBL = [],
		aBM = -1,
		aBN = 0,
		aBO = 0;

	function aBU() {
		aBN = j.k, (3 === this.aBV ? aBT : (aBM = (aBL.length + aBM + 2 * this.aBV - 1) % aBL.length, aBS))()
	}

	function aBS() {
		0 !== aBL.length && (aBO = 0, aBK && aBK.hn(), (aBK = new aBW(aBU)).aM(aBM, aBL.length), aBK.show(aBL[aBM]), f7.message.resize())
	}

	function aBT() {
		aBO = 1, aBK && aBK.hn(), (aBK = new aBX(aBS)).aM(aBL.length), aBK.show(), f7.message.resize()
	}
	this.aBP = function(su) {
		var aN;
		2 === su.id && 3 === su.tT ? f7.iA.ta(su.tJ) : (aN = f7.iA.tY(su, f7.iA.tZ(su)), (5 !== su.id && 6 !== su.id || (aC.fC(29).a3s().aBQ(aN), 5 === su.id)) && (aN = j.k < aBN + 2e4, aBM !== aBL.length - 1 && aN || (aBM = aBL.length), aBL
			.push(su), aK.f4.data[14].value || 7 === su.id || iR.play(), aBK) && (aBO && (aK.f4.data[13].value || aN) ? aBK.aM(aBL.length) : aBS()))
	}, this.show = function() {
		aBT()
	}, this.n = function() {
		aBM = aBL.length - 1, aBK && aBK.hn(), aBK = null
	}, this.resize = function() {
		aBK && aBK.resize()
	}, this.a0V = function() {
		return aBL
	}
}

function dQ(a8, aBY) {
	this.aBZ = [];
	var aBa = this.aBZ;

	function click() {
		for (var ak = 0; ak < aBa.length; ak++) aBa[ak].textContent = aBa[ak].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var aJ = parseInt(this.name);
		void 0 !== a8.aJ && aK.aL.aM(a8.aJ, aJ), aBY && aBY(aJ)
	}
	for (var aBb, gz = a8.dR.length, ak = 0; ak < gz; ak++)(aBb = document.createElement("p")).textContent = "⚪ " + a8.dR[ak], aBb.style.margin = "0", aBb.name = "" + ak, aBb.style.cursor = "pointer", aBb.style.fontSize = "1em", aBb.addEventListener(
		"click", click), aBa.push(aBb);
	aBa[a8.value].textContent = aBa[a8.value].textContent.replace("⚪", "🟢")
}

function aAg() {
	var aBc = 0,
		aBe = new Uint16Array(64);

	function yK(oH) {
		aBc -= 2;
		for (var ak = oH; ak < aBc; ak += 2) aBe[ak] = aBe[ak + 2], aBe[ak + 1] = aBe[ak + 3]
	}
	this.aB = function() {
		aBc = 0
	}, this.az = function() {
		var ak, kS, a7A;
		if (0 !== aBc)
			if (0 === fe.gA[p.an]) aBc = 0;
			else if (0 === nj.pU(p.an)) aBc = 0;
		else
			for (ak = aBc - 2; 0 <= ak; ak -= 2)(kS = aBe[ak]) < p.dS && 0 === fe.gA[kS] ? yK(ak) : (a7A = aBe[ak + 1], (kS >= p.dS && nZ.aBg(p.an) || kS < p.dS && nZ.aBh(p.an, kS)) && (q7.q8.qI(a7A, kS), yK(ak)))
	}, this.qK = function(kS, a7A) {
		! function(kS, a7A) {
			for (var ak = 0; ak < aBc; ak += 2)
				if (aBe[ak] === kS) return aBe[ak + 1] = Math.min(aBe[ak + 1] + a7A, 1023), 1;
			return
		}(kS, a7A) && 64 !== aBc && (aBe[aBc] = kS, aBe[aBc + 1] = a7A, aBc += 2)
	}
}

function sf() {
	var aBj;
	this.aB = function() {
		if (p.e0) {
			var qa = 1 - p.jY;
			aBj = new Array(eL.jk.length);
			for (var ak = p.jX - 1; 0 <= ak; ak--) {
				var oH = eL.jk[ak + qa];
				aBj[oH] = a07.aD.aBl(20, eL.aBm[oH])
			}
			9 === p.mR && (aBj[1] = a07.aD.aBl(20, eL.aBm[1]))
		} else aBj = [a07.aD.aBl(20, eL.aBm[7])]
	}, this.g9 = function() {
		var a5A = os;
		if (!(5 <= a5A)) {
			var on = a5.fS,
				oo = a5.fQ,
				b = l5 / a5A,
				c = l6 / a5A,
				d = (on + l5) / a5A,
				e = (oo + l6) / a5A,
				gq = -20 * a5A,
				aBo = .5 * gq,
				op = dx.dy << 4,
				gz = ao.aD.om,
				og = ao.aD.og,
				oh = ao.aD.oh,
				eK = eL.eK,
				aZ = aBj,
				ac = gD;
			3 < a5A && (ac.globalAlpha = .5 * (5 - a5A));
			for (var ak = 0; ak < gz; ak++) {
				var oa = og[ak],
					a2 = on * (oa % op / 16 - b) / (d - b) + aBo,
					oa = oo * (Math.floor(oa / op) / 16 - c) / (e - c) + aBo;
				on < a2 || oo < oa || a2 < gq || oa < gq || (ac.setTransform(a5A, 0, 0, a5A, a2, oa), ac.drawImage(aZ[eK[oh[ak] >> 3]], 0, 0))
			}
			ac.globalAlpha = 1, ac.setTransform(a5A, 0, 0, a5A, 0, 0)
		}
	}
}

function aAe() {
	this.yR = new aBr, this.aBs = new yP, this.aBt = new aBu, this.performance = new a6v, this.a2M = new a2F, this.iu = new a7V, this.a7k = new zQ, this.aBv = new xQ, this.aBw = new aBx, this.aB = function() {
		this.yR.aB(), this.aBt.aB(), this.performance.aB(), this.a2M.aB(), this.iu.aB()
	}, this.az = function() {
		this.performance.az(), this.yR.az(), this.aBt.aBy()
	}
}

function aBX(aBz) {
	var a4J = document.createElement("div");

	function a1W() {
		tC.tD() || (a4J.style.backgroundColor = aa.color.a1d(aF.bd, 50))
	}

	function a1X() {
		a4J.style.backgroundColor = aF.bd
	}
	this.aM = function(aC0) {
			a4J.textContent = aC0
		}, this.show = function() {
			document.body.appendChild(a4J)
		}, this.resize = function() {
			var fQ = aa.ab.go(.03, .5);
			a4J.style.width = 2 * fQ + "px", a4J.style.height = fQ + "px", a4J.style.font = aa.ab.fk(1, .75 * fQ), aa.ab.bU(a4J, 4), aa.ab.bU(a4J, 2)
		}, this.hn = function() {
			a4J.onclick = null, a4J.onmouseover = null, a4J.onmouseout = null, aC.removeChild(document.body, a4J), a4J = null
		}, a4J.style.position = "absolute", a1X(), a4J.style.color = aF.aG, a4J.style.zIndex = "3", a4J.style.right = "0", a4J.style.top = "0", a4J.style.display = "flex", a4J.style.justifyContent = "center", a4J.style.alignItems = "center", a4J
		.style.userSelect = "none", a4J.style.outline = "none", a4J.onclick = aBz, a4J.onmouseover = a1W, a4J.onmouseout = a1X
}

function f3() {
	this.fF = 0, this.nd = 0, this.mapSeed = 0, this.a43 = 0, this.a44 = 0, this.a45 = 0, this.a4C = 0, this.fL = 0, this.spawningSeed = 0, this.bB = 0, this.hd = 0, this.a0U = [], this.aC1 = 1048575, this.fK = 0, this.aC2 = [{
		nd: 0,
		mapSeed: 0,
		a43: 0,
		k: 100,
		a4C: 0
	}, {
		nd: 1,
		mapSeed: 0,
		a43: 1,
		k: 200,
		a4C: 0
	}, {
		nd: 2,
		mapSeed: 0,
		a43: 2,
		k: 300,
		a4C: 0
	}, {
		nd: 3,
		mapSeed: 0,
		a43: 3,
		k: 400,
		a4C: 0
	}, {
		nd: 0,
		mapSeed: 0,
		a43: 9,
		k: 500,
		a4C: 0
	}, {
		nd: 1,
		mapSeed: 0,
		a43: 10,
		k: 600,
		a4C: 0
	}, {
		nd: 2,
		mapSeed: 0,
		a43: 8,
		k: 700,
		a4C: 0
	}, {
		nd: 3,
		mapSeed: 0,
		a43: 3,
		k: 800,
		a4C: 0
	}]
}

function aAf() {
	var fQ, canvas, fW, aC3, aC4, aC5, aC6, fX, aC7, aC8, aC9, aCB, aCA = !1,
		aZ = (this.lW = !1, this.fS = 0, new Array(2)),
		aCC = 0;

	function yM() {
		var fS = qW.fS,
			af = (fX = !1, a0B(fW, fS, fQ), Math.floor(fS / 2));
		1 === aC3 ? (fW.fillStyle = aF.c0, fW.fillRect(af, 0, af, fQ)) : -1 === aC3 && (fW.fillStyle = aF.cG, fW.fillRect(0, 0, af, fQ)), a0C(fW, fS, fQ, 2);
		var af = (af = Math.floor(.25 * fQ)) < 2 ? 2 : af,
			wR = (fW.fillStyle = aF.bm, Math.floor((fQ - 4) * aC4[1] / aC5[1]));
		0 < wR && fW.fillRect(2, fQ - 2 - wR, af, wR), 0 < (wR = Math.floor((fQ - 4) * aC4[0] / aC5[0])) && fW.fillRect(fS - 2 - af, fQ - 2 - wR, af, wR);
		af = (af = Math.floor(fQ / 8)) < 2 ? 2 : af, a0E(fW, Math.floor(.4 * fQ), 0, fQ, af, .5, !1), a0E(fW, Math.floor(fS - 1.4 * fQ), 0, fQ, af, .5, !0), wR = 1.1 * fQ / aZ[0].width;
		fW.imageSmoothingEnabled = !0, fW.setTransform(wR, 0, 0, wR, (fS - wR * aZ[0].width) / 2, -.05 * fQ), fW.drawImage(aZ[+aCA], 0, 0), fW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCH() {
		aCB = -1, aCA = a9w.zi(), mY.aCI(257), mY.aCJ(aCA), qW.lW = !0, fX = !0, aC7 = 360;
		for (var eH, h4 = 0, ak = tq.th - 1; 0 <= ak; ak--) aa.al.is(tq.tg[ak]) || (h4 += fe.jQ[tq.tg[ak]]);
		aCA ? aC5[0] = Math.max(dV.eF(3 * h4, 4), 1) : p.e0 ? 9 === p.mR && 8 === eL.jk[uh.zp()] ? aC5[0] = Math.max(h4, 1) : (eH = dV.eF(100 * uh.aCO(), p.wr), eH = dV.dW(200 - 2 * eH, 40, 100), eH = dV.eF(eH * h4, 100), aC5[0] = Math.max(eH, 1)) :
			8 === p.mR ? aC5[0] = Math.max(dV.eF(3 * h4, 4), 1) : aC5[0] = Math.max(dV.eF(3 * h4, 5), 1), aC5[1] = Math.max(h4 - aC5[0], 1)
	}

	function aCD() {
		aC9 = j.b2(), fX = !0, aC7 = aC3 = 0, aC6 = [], qW.lW = !1, mY.aCQ(247), aC4[0] = aC4[1] = 0, mY.aCI(673)
	}

	function eO() {
		return lE.aCV(mY.aCW()) ? __fx.settings.keybindButtons ? lE.a3 - 2 * (fQ + bW.gap) : lE.a3 - fQ - bW.gap : lJ.aCV(mY.aCX()) ? lJ.eO() - fQ - bW.gap : a5.fQ - fQ - aA4.aCY() * bW.gap
	}
	this.dw = function() {
		for (var ak = 0; ak < 2; ak++) aZ[ak] = aa.canvas.a1s(i4.get(3), 8 - ak, aF.cs), aZ[ak] = aa.canvas.a1w(aZ[ak])
	}, this.aB = function() {
		aC9 = -1e4, aC8 = aCC = 0, aCB = -1, this.lW = !1, fX = aCA = !1, aC4 = [aC3 = aC7 = 0, 0], aC5 = [1, 1], aC6 = [], this.resize()
	}, this.resize = function() {
		fQ = lE.fQ, this.fS = 4 * fQ, (canvas = document.createElement("canvas")).width = this.fS, canvas.height = fQ, fW = canvas.getContext("2d", {
			alpha: !0
		}), yM()
	}, this.fs = function() {
		fX && yM()
	}, this.lP = function(a2, a3) {
		return !!this.lW && !(a2 < a5.fS - this.fS - bW.gap || a3 < eO() || (p.ay || this.qX(p.an) && (lU.lD && lU.lH(), q7.q8.qY(a2 > a5.fS - bW.gap - this.fS / 2 ? 1 : 0)), 0))
	}, this.az = function() {
		0 < aC8 ? 0 === --aC8 && aCD() : this.lW ? 180 == --aC7 && 3 * aC4[0] < aC5[0] ? aCD() : aC4[0] >= aC5[0] ? aCA ? mO.zH.aCP() : mO.zH.a11() : aC4[1] >= aC5[1] ? aC8 = 4 : aC7 <= 0 && aCD() : ! function() {
			var aCL = j.b2();
			if (aCL % 40 == 14) {
				if (aCC) return !(aCL < aCC) && !(aCL < aC9 + 535) && (aCC = aCL + 1071, aa.al.aCM()) ? (aCH(), 1) : 0;
				(1 === tq.th || (p.e0 ? uh.aCO() : fe.jQ[re[0]]) >= dV.eF(96 * p.wr, 100)) && (aCC = aCL + 535)
			}
			return
		}() && 0 <= aCB && (mY.mZ(250, L(130, [fe.mb[aCB]]), 673, aCB, aF.aG, aF.be, -1, !0), aCH())
	}, this.aCR = function() {
		this.lW && aC4[0] < aC5[0] && aCD()
	}, this.aCS = function(player, aCT) {
		var aCU = L(aCT ? 131 : 132, [fe.mb[player]]),
			aCU = (mY.mZ(450, aCU, 257, player, aCT ? aF.by : aF.cD, aF.be, -1, !0), aC6.push(player), fX = !0, p.lI ? Math.max(aC5[0], aC5[1]) : fe.jQ[player]),
			aCU = Math.max(aCU, 1);
		aCT ? aC4[0] += aCU : aC4[1] += aCU, player === p.an && (aC3 = aCT ? 1 : -1)
	}, this.g9 = function() {
		var a3;
		this.lW && (a3 = eO(), gD.drawImage(canvas, a5.fS - this.fS - bW.gap, a3))
	}, this.qZ = function(player) {
		return 0 === aC7 && !!aa.al.pr(1) && !!aa.al.am(player) && !(10 <= a7b[player] && !aa.al.aCZ(player, 9) || !p.lI && ((player = j.b2()) < aC9 + 100 || player < 1607 || 9 === p.mR && !uh.aCb()))
	}, this.qX = function(g6) {
		if (!aa.al.pr(1)) return !1;
		if (!aa.al.am(g6)) return !1;
		if (!this.lW) return !1;
		for (var ak = aC6.length - 1; 0 <= ak; ak--)
			if (aC6[ak] === g6) return !1;
		return !0
	}, this.qV = function(player) {
		aCB = player
	}
}

function iQ() {
	var aCc = [],
		aCd = [],
		aCe = 0;

	function aCf(eB, aCi, aCj, aCk) {
		var gz = eB.length;
		if (0 === gz) return "";
		var bE = "@" + eB[0];
		if (1 === gz) return bE + aCi + aCk;
		for (var ak = 1; ak < gz - 1; ak++) bE += ", @" + eB[ak];
		return bE + " and @" + eB[gz - 1] + aCj + aCk
	}
	this.aB = function() {
		var bE = aCf(aCd, " is", " are", " in the lobby!");
		bE.length && f7.message.aBP({
			id: 7,
			gP: bE
		}), aCc = [], aCd = [], aCe = 0
	}, this.aCg = function(aCh) {
		return f7.i7 !== aCh && (aCh = n9.cw.fy(aCh, 5), !!aK.vf.tA(aCh)) && (aCd.push(aCh), !0)
	}, this.join = function(player) {
		f7.i7 !== player.tJ && (player = n9.cw.fy(player.tJ, 5), aK.vf.tA(player)) && aCc.push(player)
	}, this.f9 = function() {
		var aCi, aCj;
		++aCe < 3 || (aCe = 0, aCi = aCf(aCd, "", "", " entered the lobby!"), (aCi = (aCj = aCf(aCc, "", "", " joined a game!")).length ? aCi.length ? aCi + " " + aCj : aCj : aCi).length && f7.message.aBP({
			id: 7,
			gP: aCi
		}), aCc = [], aCd = [])
	}
}

function a3i(pA, a1P, aCl) {
	this.bR = document.createElement("div"), this.bP = pA;
	var aCm = 0;
	this.resize = function(bQ, ii) {
		var gz = pA.length;
		if (!aCl)
			for (var ak = 1; ak < gz; ak++) aa.ab.bU(pA[ak].button, 4);
		for (var ik = 0, ak = 0; ak < gz; ak++) ik += pA[ak].button.offsetWidth;
		if (bQ && (aCm = bQ.offsetWidth), ii && ik < aCm)
			for (ak = 0; ak < gz; ak++) pA[ak].button.style.width = (100 * pA[ak].button.offsetWidth / ik).toFixed(2) + "%";
		else
			for (ak = 0; ak < gz; ak++) pA[ak].button.style.width = "auto";
		ii || this.resize(bQ, 1)
	};
	var aCn = this;
	aCn.bR.style.height = aCn.bR.style.maxHeight = "100%";
	for (var ak = 0; ak < pA.length; ak++) pA[ak].a1U(a1P), pA[ak].button.style.height = "100%", pA[ak].button.style.padding = "0.0em 0.9em", aCn.bR.appendChild(pA[ak].button)
}

function wy() {
	this.q9 = function(aU) {
		p.lI ? q7.x0.q9(p.an, aU) : bA.hq.a78(aU)
	}, this.qI = function(a7A, kS) {
		p.lI ? q7.x0.qI(p.an, a7A, kS) : bA.hq.a79(a7A, kS)
	}, this.ir = function(a7A, io) {
		p.lI ? q7.x0.aCo(p.an, a7A, io) : bA.hq.a7B(a7A, io)
	}, this.mt = function(a7A, aU) {
		aU = (aU << 3) + eC.qP[6];
		p.lI ? q7.x0.mt(p.an, a7A, aU) : ao.sg.a82(p.an) && bA.hq.a7C(a7A, aU)
	}, this.mv = function(a7A) {
		849 === a7A && (a7A = 850);
		var rD = eC.qP[3];
		p.lI ? q7.x0.mv(p.an, a7A, rD) : ao.qQ.aCp(p.an, rD) && bA.hq.a7E(a7A, rD)
	}, this.aCq = function(rD) {
		p.lI ? q7.x0.aCq(p.an, rD) : bA.hq.a7E(849, rD)
	}, this.aCr = function(kS) {
		p.lI ? q7.x0.aCr(p.an, kS) : bA.hq.a7F(kS)
	}, this.yB = function(yA) {
		p.lI ? q7.x0.aCs(p.an, yA) : bA.hq.a7G(yA)
	}, this.qY = function(a7I) {
		p.lI ? q7.x0.qY(p.an, a7I) : bA.hq.a7H(a7I)
	}, this.a0v = function() {
		p.lI ? q7.x0.a0v(p.an) : bA.hq.a7J()
	}, this.qV = function() {
		p.lI ? q7.x0.qV(p.an) : bA.hq.a7F(513)
	}, this.qE = function(a7A, aU, kS) {
		p.lI ? q7.x0.qE(p.an, a7A, aU, kS) : bA.hq.a7K(a7A, aU, kS)
	}
}

function aCt(data) {
	var hT, aCu;

	function aCx(z9) {
		var gz = data.data.length;
		if (gz) {
			for (var ha, max = min = parseInt(data.data[0][0]), ak = 1; ak < gz; ak++) var aD4 = parseInt(data.data[ak][0]),
				min = Math.min(aD4, min),
				max = Math.max(aD4, max);
			ha = z9 < 0 ? min + z9 : max + 1, aC.dT(8, aC.b3().a0Y, new hY(21, {
				hZ: data.hZ,
				ha: ha,
				hb: ha + Math.abs(z9)
			}))
		}
	}
	if (this.show = function() {
			hT.show(), this.resize()
		}, this.n = function() {
			hT.n()
		}, this.resize = function() {
			hT.resize(), aCu.resize()
		}, this.db = function(aT) {
			2 === aT && hT.dc[0].dd()
		}, data.aCv) {
		hT = new d6(L(117), [new d7("⬅️ " + L(1), function() {
			aC.dE()
		})]);
		var eI = {
				a7p: [],
				gx: [L(145), L(146), L(147) + " ↗"],
				a7y: [12, 50, 38]
			},
			nG = p.data.nG;
		if (nG)
			for (var gz = nG.length, a7p = eI.a7p, mb = fe.mb, ak = 0; ak < gz; ak++) a7p.push([{
				eH: ak + 1 + ".",
				h4: 0
			}, {
				eH: mb[ak],
				h4: 0
			}, {
				eH: n9.cw.fy(nG[ak], 5),
				h4: 1,
				tJ: nG[ak],
				ym: 0
			}]);
		aCu = new a7o(hT.dA, eI)
	} else {
		var eI = data.data.length ? 0 : 1,
			ow = [new d7("⬅️ " + L(1), function() {
				aC.dE()
			}), new d7(L(133), function() {
				aCx(-10)
			}, eI, 0, 1), new d7(L(134), function() {
				aCx(10)
			}, eI, 0, 1), new d7(L(135), function() {
				aC.dT(11, 10, new a15({
					hZ: data.hZ
				}))
			})],
			gx = [L(136), L(137), L(138), L(139), L(140), L(6), L(7), L(8), L(141), L(142), L(143), L(144), "Audit Log"];
		hT = new d6(gx[data.hZ], ow), ! function() {
			var ak, eI = {
					a7p: []
				},
				a7p = eI.a7p,
				aCz = data.data,
				gz = aCz.length;
			gz && 0 === aCz[0][0] && 0 <= (aJ = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.hZ]) && (aC.aD.ro[aJ] = aCz[0][1]);
			var gp = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.hZ],
				a5Z = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.hZ],
				aJ = [
					[L(148), L(149) + " ↗", L(150)],
					[L(148), L(151), L(152), L(153) + " ↗"],
					[L(148), L(149) + " ↗", L(152)],
					[L(148), L(149) + " ↗", L(152)],
					[L(145), L(154), L(155) + " ↗", L(156) + " ↗", L(157)],
					[L(145), L(154), L(158) + " ↗", L(159) + " ↗", L(160)],
					[L(145), L(154), L(161) + " ↗", L(162) + " ↗", L(163)],
					[L(145), L(154), L(158) + " ↗", L(159) + " ↗", L(164)],
					[L(145), L(154), L(155) + " ↗", L(156) + " ↗", L(157)],
					[L(148), L(149) + " ↗", L(152)],
					[L(148), L(149) + " ↗", L(165)],
					[L(148), L(149) + " ↗", L(152)],
					[L(145), L(154), L(155) + " ↗", L(156) + " ↗", L(166)]
				];
			if (eI.gx = aJ[data.hZ], eI.a7y = [
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
				][data.hZ], 0 === data.hZ || 2 === data.hZ || 3 === data.hZ || 9 === data.hZ || 10 === data.hZ || 11 === data.hZ)
				for (ak = 0; ak < gz; ak++) a7p.push([{
					eH: aCz[ak][0] + 1 + ".",
					h4: 0
				}, {
					eH: aCz[ak][1],
					h4: 1,
					tJ: aCz[ak][4],
					ym: aCz[ak][3]
				}, {
					eH: (gp * aCz[ak][2]).toFixed(a5Z),
					h4: 0
				}]);
			else if (12 === data.hZ)
				for (ak = 0; ak < gz; ak++) {
					var aD2 = aCz[ak][3];
					a7p.push([{
						eH: "" + aCz[ak][0],
						h4: 0
					}, {
						eH: "" + aCz[ak][4],
						h4: 0
					}, {
						eH: aCz[ak][5],
						h4: 1,
						tJ: aCz[ak][1],
						ym: 0
					}, {
						eH: aCz[ak][6],
						h4: 1,
						tJ: aCz[ak][2],
						ym: 0
					}, {
						eH: a0L.km(aD2),
						h4: 0
					}])
				} else if (1 === data.hZ)
					for (ak = 0; ak < gz; ak++) a7p.push([{
						eH: aCz[ak][0] + 1 + ".",
						h4: 0
					}, {
						eH: aCz[ak][1],
						h4: 0
					}, {
						eH: (gp * aCz[ak][2]).toFixed(a5Z),
						h4: 0
					}, {
						eH: aCz[ak][3],
						h4: 1,
						tJ: aCz[ak][5],
						ym: aCz[ak][4]
					}]);
				else if (4 === data.hZ || 5 === data.hZ || 6 === data.hZ || 7 === data.hZ || 8 === data.hZ)
				for (ak = 0; ak < gz; ak++) {
					var aD3 = aCz[ak][5];
					4 === data.hZ || 8 === data.hZ ? "100%" === (aD3 = (aD3 % 64 * 100 / (aD3 >> 6)).toFixed(0) + "%") && (4 === data.hZ ? aD3 += " (" + L(167) + ")" : aD3 += " (" + L(168) + ")") : 5 === data.hZ ? 32768 <= aD3 && (aD3 = -(aD3 -
						32768)) : aD3 = (gp * aD3).toFixed(a5Z), a7p.push([{
						eH: "" + aCz[ak][0],
						h4: 0
					}, {
						eH: "" + aCz[ak][6],
						h4: 0
					}, {
						eH: aCz[ak][7],
						h4: 1,
						tJ: aCz[ak][1],
						ym: aCz[ak][2]
					}, {
						eH: aCz[ak][8],
						h4: 1,
						tJ: aCz[ak][3],
						ym: aCz[ak][4]
					}, {
						eH: "" + aD3,
						h4: 0
					}])
				}
			aCu = new a7o(hT.dA, eI)
		}()
	}
}

function a8w() {
	var d3, d4, d5, dI;

	function d8() {
		dC(), 2 !== p.data.spawningType || aa.dF.a1K(p.data.spawningData) || (p.data.spawningType = 0), 2 !== p.data.spawningType && (p.data.spawningData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		2 === p.data.spawningType && aa.dF.dG(d5.dH(), p.data.spawningData, dx.aD5 - 1)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(169), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN,
			dR = (dM.dO(L(2)), [L(26), L(30), L(5)]),
			value = p.data.spawningType;
		0 === p.data.gameMode && (dR.splice(1, 1), 0 < value) && (value = 1);
		dM.dP(new dQ({
			dR: dR,
			value: value
		}, function(aJ) {
			dC(), p.data.spawningType = aJ, 0 === p.data.gameMode && 1 === aJ && (p.data.spawningType = 2), 2 !== p.data.spawningType || p.data.spawningData || (p.data.spawningData = new Uint16Array(2 * p.dS)), aC.dT(24)
		})), dM.dU(new a1M), dM.dU(new vu({
			value: p.data.selectableSpawn
		}, L(170), function(value) {
			p.data.selectableSpawn = value
		})), dI.push(dM)
	}(dI = []), function(dI) {
		var dM = new dN;
		dM.dO("Seed"), dM.dU(new a7({
			aJ: -1,
			value: p.data.spawningSeed
		}, 1, 0, function(i) {
			var value = Math.abs(Math.floor(i.target.value)) % 16384;
			i.target.value = p.data.spawningSeed = value
		})), dI.push(dM)
	}(dI), function(dI) {
		var dM;
		2 === p.data.spawningType && ((dM = new dN).dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.spawningData, 2)), dM.dU(d5), dI.push(dM))
	}(dI), dI))
}

function a8t() {
	var hT, vk, dI;
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), vk.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(L(171), [new d7("⬅️ " + L(1), function() {
		aC.dE()
	})]), vk = new d9(hT.dA, ((dI = []).push(function() {
		function aDB() {
			aDC.button.textContent = L(173), aD8.i.readOnly = !1, aDA.i.readOnly = !1, aDD.a1U(1), aDD.button.style.color = aF.aG
		}
		var dM = new dN,
			aD7 = (dM.mF("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", dM.dO(L(172)), new a7({
				value: aK.f4.data[105].value,
				aJ: -1
			})),
			aD8 = (aD7.i.readOnly = !0, dM.dU(aD7), dM.dO(L(159), "0.8em"), new a7(aK.f4.data[148], 0, void 0, function(i) {
				aD9(aK.f4.data[149].value, i.target.value)
			})),
			aDA = (dM.dU(aD8), dM.dO(L(163), "0.8em"), new a7(aK.f4.data[149], 1, void 0, function(i) {
				aD9(i.target.value, aK.f4.data[148].value)
			})),
			aDC = (dM.dU(aDA), new d7(L(173), function(i) {
				return i.textContent === L(173) ? (i.textContent = L(174), aD8.i.readOnly = !0, aDA.i.readOnly = !0, aDD.a1U(0), aDD.button.style.color = aF.ce, aK.aL.aM(149, aDA.i.value), aD9(aK.f4.data[149].value, aK.f4
					.data[148].value)) : aDB(), !0
			})),
			aDD = (dM.dU(new m8([aDC.button])), new d7(L(175), function(i) {
				return aD8.i.readOnly && bA.aD.a0f(0) && (aa.ab.h3(i), aDB(), bA.a5O.a8M({
					yl: 0,
					tJ: aK.f4.data[148].value,
					value: parseInt(aK.f4.data[149].value, 10)
				})), !0
			}, 1)),
			aDE = dM.vp(),
			aD9 = (dM.vp(L(176)).style.fontWeight = "bold", function(eH, bE) {
				aDE.innerHTML = aC.aD.aDF(eH, aK.f4.data[105].value, bE)
			});
		return dM.dU(new m8([aDD.button])), aD9(aK.f4.data[149].value, aK.f4.data[148].value), dM
	}()), dI))
}

function pE(bH, bI, aDG, aDH) {
	var self;
	this.bM = document.createElement("span"), (self = this).bM.textContent = bH, self.bM.style.color = aF.aG, self.bM.style.position = "absolute", self.bM.style.font = "inherit", aDH ? self.bM.style.bottom = "0.06em" : self.bM.style.top = "0.12em",
		aDG ? self.bM.style.left = "0.2em" : self.bM.style.right = "0.2em", self.bM.style.fontSize = "0.6em", self.bM.style.pointerEvents = "none", self.bM.style.whiteSpace = "pre", bI.style.position = "relative", bI.style.overflow = "hidden", bI
		.appendChild(self.bM)
}

function aDI() {
	var aJ = 0,
		k = j.k;
	this.w4 = 0, this.az = function() {
		a5.az(), p.gB ? wE() : 0 === aJ ? j.k >= k && (k += j.wF * Math.floor(1 + (j.k - k) / j.wF), 2 === p.q || lU.lD ? wG() : (wM(), es.wD()), aJ++) : ((lU.lD ? wE : (j.a0 = !0, wL))(), aJ = 0), wJ(), j.a0 && (j.a0 = !1, wK())
	}
}

function aBx() {
	this.az = function() {
		if (j.b2() % 51 == 45)
			for (var gz = ao.aD.om, aDJ = ao.aD.aDJ, rI = ao.aD.rI, ap = ao.aD.ap, oh = ao.aD.oh, aDK = mG.aDK, ip = mG.ip, ak = 0; ak < gz; ak++) {
				var rH, player, aDM, sW = aDJ[ak];
				sW % 64 == 6 || (rH = rI[ak], (player = ao.iA.r0(rH[rH.length - 1])) < 0) || !aa.al.rf(player, oh[ak] >> 3) || eG.xT(1e3) >= aDK[ip[player]] || ! function(aDP, rH) {
					for (var gz = rH.length - 1, aDQ = ao.aD.aDR[aDP], aX = 0, ak = aDQ + 1; ak < gz; ak++) aX += pv.aDS(rH[ak], rH[ak + 1]);
					return (aX += pv.aDS(pv.a4z(ao.aD.og[aDP]), rH[aDQ + 1])) <= 60
				}(ak, rH) || (aDM = ap[ak], 64 <= sW && ao.sm.aDN(player, aDM)) || function(player, rH, aDM, aDP, sW) {
					ao.sg.a82(player) && aa.al.aDT(player, mG.aDU[mG.ip[player]], 32, 0) && (ao.aD.aDJ[aDP] = 64 + sW % 64, ao.sm.j1(aDM, ao.aD.aDV), eC.eB[0] = ao.sj.xF(rH), eC.qP[1] = 6, aa.al.aDW(player), ao.aD.a99(player))
				}(player, rH, aDM, ak, sW)
			}
	}
}

function uz() {
	var aDX;
	this.aB = function() {
		aDX = !1
	}, this.az = function() {
		var g6;
		if (function() {
				if (!aDX) {
					if (j.b2() % 30 != 9) return;
					if (!aa.al.a6y(90)) return;
					aDX = !0
				}
				return 1
			}() && (! function() {
				var aN = mY.aDd(956);
				if (aN) {
					if (aa.al.aDe(aN.player)) return 1;
					mY.aDf(956, 0)
				}
				return
			}() && (-1 === (g6 = (p.e0 ? function() {
				var id = uh.zp(),
					gz = tq.th;
				if (eL.jk[id])
					for (var uc = tq.tg, jd = eL.jd, ak = 0; ak < gz; ak++) {
						var g6 = uc[ak];
						if (jd[g6] !== id) return g6
					} else if (1 < gz) return re[gz - 1];
				return -1
			} : function() {
				for (var tn = tq.th, tm = tq.tg, aDi = a7b, ak = 0; ak < tn; ak++) {
					var g6 = tm[ak];
					if (0 !== aDi[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var aN = mY.aDd(957);
				if (aN && aN.aDj) {
					if (eu.eg(aN.aDj.aU << 2)) return 1;
					mY.aDf(957, 0)
				}
				return
			}() : (mY.mZ(0, L(177, [fe.mb[g6]]), 956, g6, aF.aG, aF.be, -1, !0), 0)))) {
			var gz = it.yR.yS;
			if (0 !== gz)
				for (var f4 = it.yR.f4, ak = 0; ak < gz; ak++) {
					var aU = f4[ak];
					if (eu.eg(aU << 2)) return void mY.mZ(0, L(178, [pv.qn(aU), pv.qp(aU)]), 957, 0, aF.aG, aF.be, -1, !0, void 0, {
						ju: 1,
						aU: aU
					})
				}
		}
	}
}

function zI() {
	function aDk() {
		if (2 === p.q) return 1;
		qW.aCR(), p.q = 2, p.a10 = p.a0z
	}

	function aDl() {
		mO.zN.a3r(), a09.show(1 === p.mi, !1, 2 === p.mi), mO.result.a3r(), mO.zP.az(), mO.zL.az(), mO.zL.a67(), mY.aDm(!0), mY.aCQ(247), mY.aCQ(956), mY.aCQ(957), fp.fs(!0), fr.fs(!0), qW.fs(), lJ.aDn(), p.ay && j.y2.aDo(), j.a0 = !0, es.lO(), fg.fh
			.setState(0)
	}
	this.aCP = function() {
		aDk() || (p.mV = 2, aDl())
	}, this.a11 = function() {
		aDk() || (p.mV = 1, aDl())
	}
}

function x2() {
	this.az = function(gd) {
		var id, nI, s;
		for (n7.aB(gd), n7.aJ += 2, s = 8 * n7.size; n7.aJ + 8 <= s;) id = n7.s2(4), nI = n7.s2(9), 0 === id ? this.aDp(id, nI, n7.s2(22)) : 1 === id ? this.aDp(id, nI, n7.s2(10), n7.s2(10)) : 2 === id ? this.aDp(id, nI, n7.s2(10), n7.s2(9)) :
			3 === id ? this.aDp(id, nI, n7.s2(10), n7.s2(27)) : 4 === id ? this.aDp(id, nI, n7.s2(10), n7.s2(16)) : 5 === id || 6 === id ? this.aDp(id, nI, n7.s2(10)) : 7 === id ? this.aDp(id, nI, n7.s2(1)) : 10 === id ? this.aDp(id, nI, n7.s2(
				20), n7.s2(22)) : this.aDp(id, nI)
	}, this.y8 = [], this.aDq = function() {
		for (var aDs = 0, aDt = 0, aDu = 0, aDv = 0, aDw = 0, aDx = 0, ak = 0; ak < 512; ak++) aDs += fe.gA[ak], aDt += fe.jQ[ak], aDu += fe.ff[ak], aDv += ao.aD.r3[ak];
		aDw += ao.aD.om, aDx += tq.th, this.y8.push(aDu % 1073741824 * 4 + (aDs + aDt + aDv + aDw + aDx) % 4)
	}, this.aDp = function(id, nI, nK, nM) {
		0 === id ? q7.x0.q9(nI, nK) : 1 === id ? q7.x0.qI(nI, nK, nM) : 2 === id ? q7.x0.aCo(nI, nK, nM) : 3 === id ? q7.x0.mt(nI, nK, nM) : 4 === id ? q7.x0.mv(nI, nK, nM) : 5 === id ? q7.x0.aCr(nI, nK) : 6 === id ? q7.x0.aCs(nI, nK) : 7 ===
			id ? q7.x0.qY(nI, nK) : 8 === id ? q7.x0.a0v(nI) : 9 === id ? q7.x0.a0y(nI) : 10 === id && q7.x0.qE(nI, nK >> 10, nM, nK % 1024)
	}
}

function a90() {
	var d3, d4, dI;

	function aE6() {
		for (var colors = new Array(11), ak = 0; ak < 11; ak++) {
			var eB = aK.f4.data[163 + ak].value.split(",");
			colors[ak] = new Uint8Array(3);
			for (var ju = 0; ju < 3; ju++) ju < eB.length && (colors[ak][ju] = Number(eB[ju]))
		}
		return colors
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(179), [new d7("⬅️ " + L(1), function() {
		aC.dE()
	})]), d4 = new d9(d3.dA, ((dI = []).push(function() {
		var dM = new dN;
		return dM.dO(L(180)), dM.mF("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", dM.mF(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), dM
	}()), dI.push(function() {
		var dM = new dN,
			a5H = (dM.dO(L(181)), aK.f4.data[174].value),
			aDE = dM.vp(a5H.length + " / 180"),
			aE3 = (aDE.style.textAlign = "center", new dX(0, 1, function(i) {
				var i = i.target.value,
					jl = i.length;
				aDE.textContent = jl + " / 180", jl <= 180 && aK.aL.aM(174, i)
			}));
		return aE3.i.rows = 6, aE3.i.style.fontSize = "1em", aE3.dY(a5H), dM.dU(aE3), dM
	}()), dI.push(function() {
		var dM = new dN;
		dM.dO(L(25));
		for (var ak = 0; ak < 11; ak++) {
			var oa = dM.dU(new a7(aK.f4.data[163 + ak]));
			ak && (oa.i.style.marginTop = "0.6em")
		}
		return dM.dU(new m8([new d7(L(99), function() {
			for (var data = aK.f4.data, ak = 163; ak < 174; ak++) data[ak] && aK.f4.uR(ak, data[ak].aE4);
			aC.dE(), aC.dD()[31] = null, aC.dT(31)
		}).button])), dM
	}()), dI.push(function() {
		var dM = new dN;
		return dM.dO("Targeting"), dM.mF(L(100)), dM.dU(new a7(aK.f4.data[175], 0, 0)), dM
	}()), dI.push(function() {
		var dM = new dN;
		return dM.dO(L(182)), dM.dU(new m8([new d7(L(183), function() {
			(new aE5).show(aK.f4.data[174].value, aE6(), -1)
		}).button])), dM
	}()), dI.push(function() {
		var dM = new dN,
			aE7 = (dM.dO(L(184)), dM.mF(L(185)), new a7(aK.f4.data[176], 1, 0)),
			aE8 = (dM.dU(aE7), new d7(L(186), function(i) {
				return aDC.button.textContent === L(174) && bA.aD.a0f(0) && (aa.ab.h3(i), aDB(), bA.a5O.a8G(aK.f4.data[176].value, aE6(), aK.f4.data[175].value, aK.f4.data[174].value)), !0
			}, 1)),
			aDB = function() {
				aDC.button.textContent = L(173), aE8.a1U(1), aE8.button.style.color = aF.aG
			},
			aDC = new d7(L(173), function(i) {
				return i.textContent === L(173) ? (i.textContent = L(174), aE8.a1U(0), aE8.button.style.color = aF.ce) : aDB(), !0
			});
		return dM.dU(new m8([aDC.button, aE8.button])), dM
	}()), dI))
}

function aE9() {
	this.a1m = function(eH) {
		return [eH >> 12 & 63, eH >> 6 & 63, 63 & eH]
	}, this.aEA = function(eH) {
		for (var eB = this.a1m(eH), ak = 0; ak < 3; ak++) eB[ak] = ~~(4.05 * eB[ak]);
		return eB
	}, this.aEB = function(eH) {
		eH = this.aEA(eH);
		return aa.color.ba(eH[0], eH[1], eH[2])
	}, this.aEC = function(eB) {
		for (var ak = 0; ak < 3; ak++) eB[ak] = ~~(eB[ak] / 4.04);
		return (eB[0] << 12) + (eB[1] << 6) + eB[2]
	}, this.ba = function(aj, md, eM) {
		return "rgb(" + aj + "," + md + "," + eM + ")"
	}, this.bb = function(aj, md, eM, ju) {
		return "rgba(" + aj + "," + md + "," + eM + "," + ju.toFixed(3) + ")"
	}, this.a1c = function(aT) {
		for (var eB = aT.split("(")[1].split(","), eD = eC.eD, ak = 0; ak < 3; ak++) eD[ak] = parseInt(eB[ak]);
		return 4 === eB.length ? eD[3] = 255 * parseFloat(eB[3].slice(0, -1)) : eD[3] = 255, eD
	}, this.a1d = function(aED, eI) {
		for (var eB = aED.slice(aED.indexOf("(") + 1, aED.indexOf(")")).split(","), eD = eC.eD, ak = 0; ak < 3; ak++) eD[ak] = dV.dW(parseInt(eB[ak].trim(), 10) + eI, 0, 255);
		return 3 === eB.length ? this.ba(eD[0], eD[1], eD[2]) : (aED = parseFloat(eB[3].trim()), this.bb(eD[0], eD[1], eD[2], aED = 0 === aED ? .3 : aED))
	}, this.aEE = function(aEF, aEG) {
		for (var z9 = 0, ak = 0; ak < 3; ak++) z9 += Math.abs(aEG[ak] - aEF[ak]);
		if (!(240 <= z9))
			for (ak = 0; ak < 3; ak++) aEG[ak] = aEF[ak] + (aEF[ak] < 128 ? 80 : -80)
	}, this.aEH = function(eB) {
		for (var bE = "#", ak = 0; ak < 3; ak++) {
			var aj = eB[ak].toString(16);
			bE += 1 === aj.length ? "0" + aj : aj
		}
		return bE
	}, this.aEI = function(bE) {
		var aj, md;
		return bE.length < 7 ? aF.bZ : (aj = parseInt(bE.slice(1, 3), 16), md = parseInt(bE.slice(3, 5), 16), bE = parseInt(bE.slice(5, 7), 16), this.ba(aj, md, bE))
	}
}

function aEJ() {
	function aEN(eB, eH, qc) {
		for (var ak = 0; ak < 256; ak++) eB[ak] = (eB[ak] + (eH >> (ak + qc) % 30 & 1)) % 256
	}
	this.az = function(aEK, aEL) {
		var eB = new Uint8Array(256);
		return function(eB, aEK, aEL) {
				var ak, aEQ = 3 + (4 + aEK) % 32768,
					aER = 12 + aEL % 32768,
					aES = 17 + ((aEK & aEL) + (aEK | aEL) + aEK) % 32768;
				for (ak = 0; ak < 256; ak++) aEQ = 1 + aEQ * aER % aES, eB[ak] = aEQ % 256
			}(eB, aEK, aEL), aEN(eB, aEK, 2), aEN(eB, aEL, 7),
			function(eB) {
				var ak, eH, aJ = 0;
				for (ak = 0; ak < 3e4; ak++) eH = eB[aJ], eB[aJ] = (eH + ak + eB[(aJ + ak) % 256]) % 256, aJ = (eH + ak + aJ + (eH & aJ)) % 256
			}(eB),
			function(eB) {
				var ak, a6q = 1,
					a6r = 1;
				for (ak = 0; ak < 256; ak += 2) a6q = (1 + a6q) * (eB[ak] + 1) % 1073741824, a6r = (1 + a6r) * (eB[ak + 1] + 1) % 1073741824;
				return [a6q, a6r]
			}(eB)
	}, this.a5J = function(aET, aEU, aEV, result) {
		for (var jl = 1 << aET, ak = 0; ak < jl; ak++)
			if (this.aEW(ak, aEU, aEV) === result) return ak;
		return 0
	}, this.aEW = function(aEX, aEU, aEV) {
		for (var jr = aEU + aEX, k2 = aEV + aEX, eH = jr + k2 & 2147483647, ju = 1; ju <= 16; ju++) eH = (eH = (eH ^ eH >> ju) >>> 1 + (3 & jr)) * (7 + (1023 & (jr | k2))) & 1073741823, k2 >>= 1 + (1 & (jr >>= 1 + (1 & (eH += 65535 & k2))));
		return eH &= 1073741823
	}
}

function aAC() {
	this.data = new aEY;
	var aEZ = (new ex).L84,
		aEb = (this.aEa = aEZ, !(this.vo = "en"));
	this.aB = function() {
		var bE, eB;
		aEb = !1, ("en" === (bE = aK.f4.data[12].value).split("-")[0].toLowerCase() ? (vn.aEa = aEZ, vn.vo = bE, 1) : aK.f4.data[12].value === aK.f4.data[145].value && 0 < aK.f4.data[146].value && (bE = aK.f4.data[146].value, (eB = aK.dd.hG(bE, !
			1)).length === bE) && !!aa.dF.aEh(eB) && function(eB) {
			for (var gz = eB.length, fQ = 0; fQ < gz; fQ++) eB[fQ] = eB[fQ].replace("&#39;", "'");
			var aEj = aK.dd.hG(gz, !0);
			if (gz !== aEj.length) return !1;
			if (!aa.dF.aEh(aEj)) return !1;
			for (var af = aEZ.length, a3F = new Array(af), aEk = af === gz, jl = Math.min(gz, af), ak = 0; ak < af; ak++)
				if (a3F[ak] = aEZ[ak], ak < gz && aEj[ak] === a3F[ak]) a3F[ak] = eB[ak];
				else {
					aEk = !1;
					for (var eM = 0; eM < jl; eM++)
						if (aEj[eM] === a3F[ak]) {
							a3F[ak] = eB[eM];
							break
						}
				} return vn.aEa = a3F, vn.vo = aK.f4.data[12].value, aEk
		}(eB)) || (aEb = !0)
	}, this.aBA = function() {
		eL.dw(), mG.dw(), lV.dw(), iy.dw(), a6k.aB(), a0L = new kY
	}, this.aEg = function() {
		return this.aEa === aEZ || !aEZ.length
	}, this.a5R = function() {
		var aEl;
		return !!aEb && (aEb = !1, 0 !== aEZ.length) && (aEl = aK.f4.data[12].value, bA.a1k.aEm(0, aEl.slice(0, 20)), !0)
	}, this.a5U = function(eB) {
		eB.length !== aEZ.length ? 8 === aC.b1 && aC.b3().yw(30, 0, 1) : (this.aEa = eB, this.vo = aK.f4.data[12].value, aK.aL.aM(145, this.vo), aK.aL.aM(146, eB.length), aK.dd.hM(eB, !1), aK.dd.hM(aEZ, !0), 8 === aC.b1 ? aC.b3().yw(30) : 0 ===
			b6.hy() && 5 === aC.b1 && aC.aD.vD())
	}, this.aEn = function() {
		var a8J, eB = navigator.languages;
		return eB && eB.length ? (a8J = Math.max(vn.data.a8K(eB[0]), 0), 1 === eB.length ? [a8J, a8J] : [a8J, Math.max(vn.data.a8K(eB[1]), 0)]) : [0, 0]
	}
}

function hQ() {
	this.g9 = function() {
		if (0 !== a07.aD.hR && (gD.globalAlpha = Math.min(a07.aD.hR / 580, 1), gD.drawImage(a07.aD.aEq, 1 + y.eN(), 1 + y.eO()), gD.globalAlpha = 1, p.gB)) {
			for (var b = l5 / os, c = l6 / os, d = (a5.fS + l5) / os, e = (a5.fQ + l6) / os, gq = a07.aD.aEr * os, aEs = a07.aD.aEs, ak = p.e3 - 1; 0 <= ak; ak--) ! function(ak, gq, b, c, d, e, aEs) {
				var highlight;
				0 === fe.gA[ak] || 0 === fe.jQ[ak] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[ak]) && (gq *= 2), d = a5.fS * ((fe.je[ak] + fe.jg[ak] + 1) / 2 - b) / (d - b) - .5 * gq, b = a5.fQ * ((fe.jf[
					ak] + fe.jh[ak] + 1) / 2 - c) / (e - c) - .5 * gq, d > a5.fS) || b > a5.fQ || d < -gq || b < -gq || (highlight ? gD.setTransform(2 * os, 0, 0, 2 * os, d, b) : gD.setTransform(os, 0, 0, os, d, b), gD.drawImage(aEs[p
					.e0 ? eL.jd[ak] : 1], 0, 0))
			}(ak, gq, b, c, d, e, aEs);
			gD.setTransform(os, 0, 0, os, 0, 0)
		}
	}
}

function kr() {
	this.lt = function(bE, aEu, aEv) {
		for (var aEw = [], gz = bE.length, max = 0, ak = 0; ak < gz; ak++) {
			var eH = bE.charCodeAt(ak);
			aEw.push(eH), max = Math.max(max, eH)
		}
		var aEx = max < 128 ? 7 : 16;
		for (aEv.ga(aEu, gz), aEv.ga(1, +(16 == aEx)), ak = 0; ak < gz; ak++) aEv.ga(aEx, aEw[ak])
	}
}

function dN() {
	var bR;
	this.aEy = [], this.bR = document.createElement("div"), this.dO = function(bE, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = bE, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.bR.appendChild(
			title), title
	}, this.vp = function(bE, marginBottom) {
		var aDE = document.createElement("p");
		return aDE.textContent = bE, aDE.style.fontSize = "0.75em", aDE.style.lineHeight = "1.2em", aDE.style.marginBottom = marginBottom || "0", this.bR.appendChild(aDE), aDE
	}, this.aEz = function(bE) {
		var aF0 = document.createElement("p");
		return aF0.textContent = bE, aF0.style.fontSize = "1em", aF0.style.marginBottom = "0", aF0.style.whiteSpace = "pre-wrap", aF0.style.overflowWrap = "break-word", this.bR.appendChild(aF0), aF0
	}, this.mF = function(ov, fontSize) {
		var bR = document.createElement("div");
		return bR.innerHTML = ov, bR.style.fontSize = fontSize || "1em", bR.style.lineHeight = "1.2em", this.bR.appendChild(bR), bR
	}, this.dP = function(aF1) {
		for (var aBZ = aF1.aBZ, gz = aBZ.length, ak = 0; ak < gz; ak++) this.bR.appendChild(aBZ[ak])
	}, this.dU = function(aN) {
		return this.aEy.push(aN), this.bR.appendChild(aN.i), aN
	}, this.resize = function() {
		for (var gz = this.aEy.length, ak = 0; ak < gz; ak++) this.aEy[ak].resize && this.aEy[ak].resize()
	}, (bR = this.bR).style.position = "absolute", bR.style.height = "auto", bR.style.padding = "0.5em"
}

function aB2() {
	this.aCY = function() {
		return fg.fh.fi() ? 2 : 1
	}
}

function aAA() {
	this.ab = new ge, this.dF = new aF2, this.al = new aF3, this.dZ = new a5V, this.fW = new aF4, this.a1y = new aF5, this.canvas = new a1r, this.color = new aE9, this.aF6 = new aF7, this.aB = function() {
		this.ab.gh()
	}
}

function aAm() {
	var canvas, fW, aF8, font, a6B = 0,
		aF9 = !1,
		aFA = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aFB = 5;

	function aFJ() {
		if (aF9) {
			var ak, gz = aFA.length,
				a6q = Math.floor(.5 * aF8.fQ),
				fQ = gz * a6q,
				a2 = Math.floor(Math.floor(aF8.a2) + .3 * aF8.fS - .5),
				a3 = Math.floor(Math.floor(aF8.a3) - fQ),
				fS = Math.floor(.4 * aF8.fS + 2.5);
			for (gD.fillStyle = aF.bd, gD.fillRect(a2, a3, fS, fQ), gD.fillStyle = aF.c5, gD.fillRect(a2, a3 + aFB * a6q, fS, a6q), gD.fillStyle = aF.aG, gD.fillRect(a2, a3, 2, fQ), gD.fillRect(a2, a3, fS, 2), gD.fillRect(a2 + fS - 2, a3, 2, fQ),
				ak = 1; ak < gz; ak++) gD.fillRect(a2, a3 + ak * a6q, fS, 2);
			for (gD.fillStyle = aF.aG, aa.ab.textAlign(gD, 1), aa.ab.textBaseline(gD, 1), gD.font = aa.ab.fk(0, .6 * a6q), a2 += .5 * fS, ak = 0; ak < gz; ak++) gD.fillText(aFR(ak), a2, a3 + (ak + .6) * a6q)
		}
		gD.drawImage(canvas, Math.floor(aF8.a2), Math.floor(aF8.a3))
	}

	function yM(aCn) {
		var a2, b, c, a6q;
		fW.clearRect(0, 0, Math.floor(aF8.fS), Math.floor(aF8.fQ)), fW.fillStyle = aF.bd, fW.fillRect(0, 0, Math.floor(aF8.fS), Math.floor(aF8.fQ)), p.lZ && (fW.fillStyle = aF.c5, fW.fillRect(0, 0, Math.floor(.3 * aF8.fS), Math.floor(aF8.fQ))), fW
			.fillStyle = aF.aG, fW.fillText("Hide UI", .15 * aF8.fS, .5 * aF8.fQ), fW.fillRect(Math.floor(.3 * aF8.fS - .5), 0, 2, Math.floor(aF8.fQ)), a2 = .5 * aF8.fS, fW.fillText("Replay Speed", a2, .31 * aF8.fQ), fW.fillText(aFR(aFB), a2, .69 *
				aF8.fQ), fW.fillRect(Math.floor(.7 * aF8.fS - .5), 0, 2, Math.floor(aF8.fQ)), aCn.lL ? (a2 = Math.floor(.02 * aF8.fS), aCn = Math.floor(.025 * aF8.fS), b = Math.floor(.85 * aF8.fS - a2 - .5 * aCn), c = Math.floor(.25 * aF8.fQ), a6q =
				Math.floor(aF8.fQ) - 2 * c, fW.fillRect(b, c, a2, a6q), fW.fillRect(b + a2 + aCn, c, a2, a6q)) : function() {
				var fS = Math.floor(.46 * aF8.fQ),
					fQ = Math.floor(.23 * aF8.fQ),
					a2 = Math.floor(.85 * aF8.fS - .5 * fS + fS / 12),
					a3 = Math.floor(.5 * aF8.fQ - fQ);
				fW.beginPath(), fW.moveTo(a2, a3), fW.lineTo(a2 + fS, a3 + fQ), fW.lineTo(a2, a3 + (fQ << 1)), fW.fill()
			}(), fW.fillRect(0, 0, Math.floor(aF8.fS), 2), fW.fillRect(0, 0, 2, Math.floor(aF8.fQ)), fW.fillRect(0, Math.floor(aF8.fQ) - 2, Math.floor(aF8.fS), 2), fW.fillRect(Math.floor(aF8.fS - 2), 0, 2, Math.floor(aF8.fQ))
	}

	function aFR(ak) {
		return 5 === ak ? "Normal" : "" + aFA[ak]
	}
	this.lL = !1, this.aB = function() {
		p.ay && (aFB = 5, this.lL = !1, aF9 = !1, aF8 = new vE([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aFC = function() {
		return aFA[aFB]
	}, this.eO = function() {
		return aF8.a3
	}, this.aCV = function(aFD) {
		return !!p.ay && aF8.a2 + aF8.fS > a5.fS - aFD - bW.gap
	}, this.resize = function() {
		p.ay && (aF8.resize(), aF8.a3 -= (aA4.aCY() - 1) * bW.gap, font = aa.ab.fk(0, .3 * aF8.fQ), (canvas = document.createElement("canvas")).width = Math.floor(aF8.fS), canvas.height = Math.floor(aF8.fQ), (fW = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aa.ab.textAlign(fW, 1), aa.ab.textBaseline(fW, 1), yM(this))
	}, this.lK = function(aFE) {
		0 === p.q || aC.lW() || aFE !== p.lZ && (p.lZ = aFE, uh.resize(), j.a0 = !0, p.ay) && (a6B = j.k + 2e3, yM(this))
	}, this.lP = function(a2, a3) {
		if (!p.ay) return !1;
		if (a2 < aF8.a2 || a3 < aF8.a3 || a2 > aF8.a2 + aF8.fS) return aF9 && function(aCn, a2, a3) {
			var gz = aFA.length,
				a6q = Math.floor(.5 * aF8.fQ),
				fQ = gz * a6q,
				b = Math.floor(Math.floor(aF8.a2) + .3 * aF8.fS - .5),
				fQ = Math.floor(Math.floor(aF8.a3) - fQ),
				fS = Math.floor(.4 * aF8.fS + 2.5);
			return aF9 = !1, j.a0 = !0, a2 < b || b + fS < a2 || a3 < fQ || (aFB = aFI(0, Math.floor((a3 - fQ) / a6q), gz - 1), yM(aCn)), !0
		}(this, a2, a3);
		if ((a2 -= aF8.a2) < .3 * aF8.fS) aF9 = !1, this.lK(!p.lZ);
		else {
			if (a2 < .7 * aF8.fS) return aF9 = !aF9, j.a0 = !0;
			this.lM(!1)
		}
		return !0
	}, this.lM = function(aFG) {
		2 === p.q ? (this.lK(!1), aC.dT(3)) : (aF9 = !1, this.lL = !this.lL, this.lL ? (lU.lD && lU.lH(), fg.fh.setState(1)) : aFG || lU.lN(), j.a0 = !0, yM(this))
	}, this.aFH = function() {
		this.lL = !1, lU.lN(), j.a0 = !0, yM(this)
	}, this.a9g = function(a2, a3) {
		return !!p.lZ && (0 <= lU.lP(a2, a3) || (p.ay ? ((j.k > a6B || !this.lP(a2, a3)) && y.lP(a2, a3), j.a0 = !0, a6B = j.k + 2e3) : y.lP(a2, a3)), !0)
	}, this.az = function() {
		p.ay && p.lZ && j.k > a6B - 1e3 && j.k < a6B && (j.a0 = !0)
	}, this.aDn = function() {
		p.ay && (this.lL = !1, j.a0 = !0, yM(this))
	}, this.g9 = function() {
		if (p.ay) {
			if (p.lZ) {
				if (j.k > a6B) return;
				if (j.k > a6B - 1e3) return gD.globalAlpha = aFI(0, (1e3 - (j.k - (a6B - 1e3))) / 1e3, 1), aFJ(), void(gD.globalAlpha = 1)
			}
			aFJ()
		}
	}
}

function aAp() {
	this.aFS = new Int16Array(4), this.qu = new Int16Array(4), this.xJ = null, this.aB = function() {
		var ak;
		for (this.aFS[0] = -dx.dy, this.aFS[1] = 1, this.aFS[2] = dx.dy, this.aFS[3] = -1, this.xJ = new Int16Array([-dx.dy, 1 - dx.dy, 1, dx.dy + 1, dx.dy, dx.dy - 1, -1, -dx.dy - 1]), ak = 0; ak < 4; ak++) this.qu[ak] = 4 * this.aFS[ak]
	}, this.aFT = function() {
		return dV.dW(Math.floor(.15 * (1 + .25 * fg.fh.fi()) * a5.fj / os), 4, 128)
	}, this.qh = function(ai, id) {
		for (var qt = this.qu, ak = 0; ak < 4; ak++) {
			var or = ai + qt[ak];
			if (eu.ee(or) && eu.ei(or) === id) return !0
		}
		return !1
	}, this.aFU = function(player, ai) {
		return !eu.eg(ai) && player === eu.ea(ai)
	}, this.yX = function(pu, px, aU) {
		return (pu -= this.qn(aU)) * pu + (px -= this.qp(aU)) * px
	}, this.rA = function(w, x, oa) {
		w = this.rZ(w) - this.rT(oa), x = this.ra(x) - this.rV(oa);
		return Math.sqrt(w * w + x * x)
	}, this.aDS = function(qs, qj) {
		var aV = this.qn(qs) - this.qn(qj),
			qs = this.qp(qs) - this.qp(qj);
		return ~~Math.sqrt(aV * aV + qs * qs + .5)
	}, this.qw = function(qs, qj) {
		var aV = this.qn(qs) - this.qn(qj),
			qs = this.qp(qs) - this.qp(qj);
		return aV * aV + qs * qs
	}, this.yV = function(rL, rM, rN, rO) {
		return (rL -= rN) * rL + (rM -= rO) * rM
	}, this.aFV = function(g6, a7A) {
		return dV.eF(a7A * fe.ff[g6], 1e3)
	}, this.rZ = function(w) {
		return 16 * (w + l5) / os
	}, this.ra = function(x) {
		return 16 * (x + l6) / os
	}, this.rX = function(eI) {
		return 16 * eI / os
	}, this.pw = function(w) {
		return Math.floor((w + l5) / os)
	}, this.py = function(x) {
		return Math.floor((x + l6) / os)
	}, this.q0 = function(pu, px) {
		return 1 <= pu && 1 <= px && pu < dx.dy - 1 && px < dx.jK - 1
	}, this.qn = function(aU) {
		return aU % dx.dy
	}, this.qp = function(aU) {
		return dV.eF(aU, dx.dy)
	}, this.pz = function(pu, px) {
		return px * dx.dy + pu
	}, this.aFW = function(pu, px) {
		return 4 * this.pz(pu, px)
	}, this.aFX = function(aU) {
		return this.yZ(this.qn(aU), this.qp(aU))
	}, this.yZ = function(pu, px) {
		return 0 < pu && pu < dx.dy - 1 && 0 < px && px < dx.jK - 1
	}, this.qA = function(aU) {
		return aU << 2
	}, this.qx = function(ai) {
		return ai >> 2
	}, this.aFY = function(aU) {
		return dx.dy * this.qp(aU) * 256 + (this.qn(aU) << 4)
	}, this.aFZ = function(aU) {
		return this.aFY(aU) + 8 + (dx.dy << 7)
	}, this.a4z = function(oa) {
		return dx.dy * (this.rV(oa) >> 4) + (this.rT(oa) >> 4)
	}, this.a9H = function(oa) {
		oa = this.a4z(oa);
		return (this.qn(oa) >> 5) + ao.sT.a93 * (this.qp(oa) >> 5)
	}, this.rT = function(oa) {
		return oa % (dx.dy << 4)
	}, this.rV = function(oa) {
		return dV.eF(oa, dx.dy << 4)
	}, this.a87 = function(aU, qb) {
		return aU + this.aFS[qb]
	}, this.aFa = function(ai, qb) {
		return ai + this.qu[qb]
	}, this.aFb = function(qs, qj) {
		var aV = this.qn(qj) - this.qn(qs),
			qj = this.qp(qj) - this.qp(qs);
		return Math.abs(aV) >= Math.abs(qj) ? 1 + 2 * (aV < 0) : 2 * (0 < qj)
	}, this.aFc = function(player) {
		return this.pz(fe.je[player] + fe.jg[player] >> 1, fe.jf[player] + fe.jh[player] >> 1)
	}, this.aFd = function(player) {
		return this.pz(eG.yU(fe.je[player], fe.jg[player]), eG.yU(fe.jf[player], fe.jh[player]))
	}
}

function aAO() {
	var canvas, fW, a2, a3, a3Q, aFe, gap, aFf, fontSize, aFg, aFh, aFi, aFj, aFk, aFl, aFm, aFn, aFo;

	function aFu() {
		fW.clearRect(0, 0, fr.fS, fr.fQ), fW.fillStyle = aF.be, fW.fillRect(0, 0, fr.fS, fr.fQ), fW.fillStyle = aF.c0, ai = 0 < aFm ? aFm : Math.sqrt(aFj[4] / 1e4), fW.fillRect(0, fr.fQ - a3Q - 1, Math.floor(ai * fr.fS), a3Q), fW.fillStyle = aF.aG,
			fW.fillRect(0, 0, fr.fS, 1), fW.fillRect(0, 0, 1, fr.fQ), fW.fillRect(fr.fS - 1, 0, 1, fr.fQ), fW.fillRect(0, fr.fQ - 1, fr.fS, 1), fW.fillRect(0, fr.fQ - a3Q - 1, fr.fS, 1);
		for (var ai, aFx, h4 = 0, ak = 0; ak < aFi.length; ak++) aFk[ak] ? (aa.ab.textAlign(fW, 0), aFx = Math.floor((aFe - a3Q + 2 * aFf) * (ak - h4 + 1) / (aFi.length + 1) - .7 * aFf), fW.fillText(aFi[ak], gap, aFx), aa.ab.textAlign(fW, 2), 5 ===
			ak && 0 !== fe.gA[p.an] && fe.ff[p.an] >= fv.fw(p.an) ? (fW.fillStyle = aF.cb, fW.fillText(aFr(ak), fr.fS - gap, aFx), fW.fillStyle = aF.aG) : fW.fillText(aFr(ak), fr.fS - gap, aFx)) : h4++
	}

	function aFr(ak) {
		return ak < 3 ? aFj[ak].toString() : 3 === ak || 4 === ak || 5 === ak ? aa.dZ.a5d(aFj[ak] / 100, 2) : ak < 7 ? aa.dZ.fy(aFj[ak]) : ak === 7 ? fr.aFy(aFj[7]) : ak === 8 ? __fx.utils.getMaxTroops(fe.jQ, p.an) : __fx.utils.getDensity(p.an)
	}

	function aFq() {
		fe.jQ[p.an] !== aFj[6] && (aFj[6] = fe.jQ[p.an], aFg++)
	}
	this.aB = function() {
		aFm = aFn = 0, (aFh = new Array(8))[0] = L(187), aFh[1] = p.lI ? L(117) : L(188), aFh[2] = L(189), aFh[3] = L(190), aFh[4] = L(157), aFh[5] = L(191, 0, "Interest"), aFh[6] = L(192), aFh[7] = L(193),
			aFh.push("Max Troops", "Density"), // add aFh
			(aFi = new Array(aFh.length)).fill(""), (aFj = new Array(aFh.length))[0] = p.lI ? 0 : p.e3, aFj[1] = p.lI ? tq.th : p.aFp, aFj[2] = p.a10, aFj[3] = 0, aFj[4] = dV.eF(1e4 * fe.jQ[0], Math.max(p.wr, 1)), aFj[5] = 0 === p.data
			.iIncomeType ? 700 : 1 === p.data.iIncomeType ? dV.eF(700 * p.data.iIncomeValue, 64) : dV.eF(700 * p.data.iIncomeData[p.an], 64), aFj[6] = 0, aFq(), aFj[7] = 0, aFl = aFr(6), (aFk = new Array(aFh.length)).fill(!0), aFo = 0, aFo = p
			.lI ? (aFk[0] = !1, aFk[2] = !1, aFk[3] = !1, 3) : (aFk[3] = !1, 1), aFg = 0, this.resize()
	}, this.resize = function() {
		this.fS = Math.floor((fg.fh.fi() ? .1646 : .126) * 1.25 * a5.fj), this.fQ = Math.floor(1.18 * this.fS), a3Q = Math.floor(.04 * this.fS), gap = Math.floor(.035 * this.fS), aFf = .04 * this.fS, aFe = this.fQ, this.fQ -= Math.floor(aFo * (
			this.fQ - 2 * a3Q) / aFh.length), fontSize = Math.floor(.7 * (aFe - a3Q) / aFh.length);
		var fR = aa.ab.fk(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.fS, canvas.height = this.fQ,
			function(fR, fS) {
				for (var ak = 0; ak < aFi.length; ak++) aFi[ak] = aa.fW.aFv(aFh[ak], fR, fS)
			}((fW = canvas.getContext("2d", {
				alpha: !0
			})).font = fR, .575 * this.fS), aa.ab.textBaseline(fW, 1), fW.lineWidth = 1, this.aFt(), this.fo(), a08.fo(), aFu()
	}, this.fo = function() {
		a2 = a5.fS - this.fS - bW.gap
	}, this.aFw = function() {
		a3 = bW.gap
	}, this.aFt = function() {
		a3 = bW.gap + (a08.fn() && 0 !== fe.gA[p.an] && !p.gB ? a08.fQ + bW.gap : 0)
	}, this.fs = function(a6U) {
		(a6U || 100 <= aFg) && (aFg = 0, aFu())
	}, this.a7T = function() {
		return aFj[7]
	}, this.aFy = function(value) {
		var af = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * af) / 1e3);
		return value < 10 ? af + ":0" + value : af + ":" + value
	}, this.az = function() {
		var aG8, per;
		aFk[0] && p.a0z - p.a10 !== aFj[0] && (aFj[0] = p.a0z - p.a10, aFg++), tq.th - aFj[0] !== aFj[1] && (aFj[1] = tq.th - aFj[0], aFg++), this.a4W(), (aG8 = fv.aG9(p.an)) !== aFj[5] && (aFj[5] = aG8, aFg++), aFq(), aFj[7] += j.wF, aG8 = aFr(
			7), aFl !== aG8 && (aFl = aG8, aFg += 100), aG8 = p.e0 ? uh.aCO() : fe.jQ[re[0]], per = dV.eF(1e4 * aG8, Math.max(p.wr, 1)), aFj[3] = aG8, aFj[4] !== per && (aFg++, aFj[4] = per), 8 === p.mR && function() {
			for (var ak = 0; ak < 2; ak++)
				if (!aa.al.am(ak)) return mO.zH.a11(), 1;
			return
		}() || aFj[3] < p.wr || ! function() {
			for (var ak = tq.th - 1; 0 <= ak; ak--)
				if (0 < fe.kO[tq.tg[ak]].length) return;
			return 1
		}() || ao.iA.rc().length || mO.zH.a11()
	}, this.a4W = function() {
		aFk[2] && p.a10 !== aFj[2] && (aFj[2] = p.a10, aFg += 2 === p.q ? 100 : 1)
	}, this.aG5 = function() {
		return aFj[3] === p.wr
	}, this.w8 = function(ak) {
		var md, aGA, h4;
		return 2 !== p.q && (ak % 2 == 1 && (fp.fs(1, 1), j.a0 = !0), ak === p.wA ? (aFm = 0, aFu(), !1) : (-1 !== ak || 0 !== aFn) && (aGA = aFm, aFm = p.ay ? ak / p.wA : (h4 = performance.now(), 0 <= ak && (md = h4 - 392 * ak, aFn = 0 === ak ||
			md < aFn ? md : aFn), 1 < (aFm = (h4 - aFn) / (392 * p.wA)) ? 1 : aFm), aFu(), aFm !== aGA))
	}, this.g9 = function() {
		gD.drawImage(canvas, a2, a3)
	}
}

function aBB() {
	this.vx = [L(194), L(195), L(196), L(197), L(198), L(199), L(200), L(201), L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209)];
	var aGB = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.v2 = new Array(aGB.length), this.aB = function() {
		var eB = aK.f4.data[155].value.split(";"),
			af = eB.length;
		if (function() {
				for (var gz = aGB.length, ak = 0; ak < gz; ak++) v1.v2[ak] = aGB[ak]
			}(), !(af > aGB.length))
			for (var ak = 0; ak < af; ak++) eB[ak].length && (this.v2[ak] = eB[ak])
	}, this.w0 = function(aJ, code) {
		for (var v2 = this.v2, aGD = aGB, bE = (v2[aJ] = code, ""), gz = v2.length, aGE = [], ak = 0; ak < gz; ak++) aGE.push(v2[ak] === aGD[ak] ? "" : v2[ak]);
		gz--;
		for (ak = 0; ak < gz; ak++) bE += aGE[ak] + ";";
		aK.aL.aM(155, bE += aGE[gz])
	}, this.vw = function() {
		aK.aL.aM(155, ""), this.aB()
	}, this.aT = function(code, aJ) {
		return code === this.v2[aJ] || code === this.v2[aJ + 1]
	}
}

function iM() {
	var pD = 0,
		aGF = 0,
		aGG = 0,
		aGH = null,
		aGI = null;

	function aGK(aN, aGL, aGM) {
		var bE = aN.username;
		return (bE += "   " + f7.iA.a0R(aN.t4, aN.t5, aN.a0S)) + function(aN) {
			aN = aN.a8H;
			if (aN < 1e3) return "   Gold: " + aN;
			if ((aN %= 1024) < 1e3) return "   Gold: " + aN + "k";
			return "   Gold: " + (aN - 999) + "M"
		}(aN) + ("   IP: " + n9.cw.fy(aN.aGO, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aGM ? aGF : aGJ(aN, aGL)])
	}

	function aGJ(aN, aGL) {
		return aGF = aGL || f7.i9.tL(aN.tJ) ? 1 : 0
	}
	this.fI = function() {
		!pD || aGF === aGJ(aGI) && aGG === aGI.a8H || (aGG = aGI.a8H, aGH.show(-1, -1, aGK(aGI, 0, 1), 1, 1))
	}, this.tE = function(i, aN, aGL) {
		var aF8 = i.target.getBoundingClientRect();
		this.show(aF8.left, aF8.top, aN, 0, aGL), i.target.addEventListener("mouseleave", function remove() {
			i.target.removeEventListener("mouseleave", remove), f7.fH && f7.fH.n(1)
		})
	}, this.show = function(a2, a3, aN, a4L, aGL) {
		aGH = aGH || new a4I, aGG = (aGI = aN).a8H, aGH.show(a2, a3, aGK(aN, aGL), a4L), pD = 1
	}, this.n = function(a4P) {
		aGH && aGH.n(a4P) && (pD = 0, aGI = null)
	}
}

function aBJ() {
	this.xk = function() {
		aK.aD.aGP(), aK.aL.aM(105, n9.cw.nA(n9.cw.nB(5))), aK.aL.aM(106, n9.cw.nA(n9.cw.nB(15))), aK.aL.aM(109, 0), aK.aL.aM(108, aK.f4.data[109].value), aK.aL.aM(111, aK.f4.data[109].value + 1), aK.aL.aM(107, 0), aK.aL.aM(110, "")
	}, this.xm = function() {
		var data;
		n7.size < n4.n5(29) ? bA.aD.xX(0, 3254) : ((data = {
			ym: n7.s2(30),
			aGQ: n7.s2(16),
			aGR: n7.s2(30),
			aGS: n7.s2(30),
			aGT: n7.s2(30),
			a8H: n7.yv(32),
			username: iH.d0.rt(5),
			aGU: iH.d0.rt(3),
			aGV: iH.d0.rt(3),
			aGW: n7.yv(32),
			aGX: n7.yv(32),
			aGY: n7.s2(30),
			aGZ: n7.yv(32),
			aGa: n7.yv(32),
			aGb: n7.yv(32),
			aGc: n7.yv(32),
			aGd: n7.yv(32),
			aGe: n7.yv(30),
			aGf: n7.yv(32),
			aGg: iH.d0.rt(3),
			aGh: n7.yv(2),
			aGi: n7.yv(10),
			aGj: iH.d0.rt(8),
			aGk: n7.yv(5),
			aGl: n7.s2(30),
			aGm: n7.s2(30),
			mS: n7.yv(32),
			aGn: n7.s2(3),
			aGo: n7.s2(8),
			aGp: n7.s2(1),
			aGq: n7.s2(1)
		}).aGp && (data.aGr = n7.yv(32), data.aGs = n7.s2(30), data.aGt = n7.s2(30), data.aGu = n7.s2(1)), 8 === aC.b1 && (25 === aC.b3().aGv ? (data.aGw = !0, aC.aD.a8r = data, aC.b3().yw(25, !1)) : (data.aGw = !1, aK.aL.aM(160, +(data
			.aGp && data.aGu)), data.tJ = aK.f4.data[105].value, aC.aD.a8p = data, aK.aL.aGx(data), aC.b3().yw(16, !0))))
	}
}

function ax() {
	var aGy = 0;

	function aH4(bE, id) {
		aGy || (id ? 1 === id ? mY.aH1 = L(211) + ": " + bE : aC.dT(4, 3, new gR(L(212), bE, 1)) : aC.dT(4, 3, new gR("⚠️ " + L(210), bE, 1)))
	}
	this.rt = function(bE, aGz) {
		var oa, aN;
		return aGy = aGz, iH.cw.ry(iH.cw.rz(iH.cw.aH0(bE))), mY.aH1 = "", !! function() {
			if (n7.size < 10) aH4("File Too Small");
			else {
				var aH8 = n7.s2(12),
					nR = (aH8 !== gJ.rVersion && aH4("Incompatible Version   Required: " + gJ.rVersion + ("   Found: " + aH8) + ("   Compatible at territorial.io/" + aH8), 1), n7.s2(12)),
					aH9 = n7.s2(31);
				if (aH9 !== n7.size) aH4("Size Error: " + aH9 + " " + n7.size);
				else if (function(fQ, aH8) {
						for (var g6 = n7.gd, gz = n7.size, nR = aH8, ak = 3; ak < gz; ak++) nR = nR + g6[ak] & 4095;
						return nR === fQ || (aH4("Hash Error: " + nR + " " + fQ + " " + gz), !1)
					}(nR, aH8)) return 1
			}
			return
		}() && (oa = n7, (aN = p.data = new aHB).mapType = oa.s2(2), aN.mapProceduralIndex = oa.s2(8), aN.mapRealisticIndex = oa.s2(8), aN.mapSeed = oa.s2(14), aN.mapName = oa.aHC(5), 2 === aN.mapType && oa.aHD(), aN.passableWater = oa.s2(1),
			aN.passableMountains = oa.s2(1), aN.playerCount = oa.s2(10), aN.humanCount = oa.s2(10), aN.selectedPlayer = oa.s2(9), aN.gameMode = oa.s2(1), aN.playerMode = oa.s2(2), aN.battleRoyaleMode = oa.s2(2), aN.numberTeams = oa.s2(4), aN
			.isZombieMode = oa.s2(1), aN.isContest = oa.s2(1), aN.isReplay = oa.s2(1), aN.elo = oa.aHE(2, 14, 2), aN.colorsType = oa.s2(1), aN.colorsPersonalized = oa.s2(1), aN.colorsData = oa.aHE(10, 18, 512), aN.selectableColor = oa.s2(1),
			aN.teamPlayerCount = oa.aHE(4, 10, 9), aN.neutralBots = oa.s2(1), aN.botDifficultyType = oa.s2(2), aN.botDifficultyValue = oa.s2(4), aN.botDifficultyTeam = oa.aHE(4, 4, 9), aN.botDifficultyData = oa.aHE(10, 4, 512), aN
			.spawningType = oa.s2(2), aN.spawningSeed = oa.s2(14), aN.spawningData = oa.aHE(11, 12, 1024), aN.selectableSpawn = oa.s2(1), aN.playerNamesType = oa.s2(2), aN.playerNamesData = oa.aHF(10, 5, 512), aN.selectableName = oa.s2(1), aN
			.aIncomeType = oa.s2(2), aN.aIncomeValue = oa.s2(8), aN.aIncomeData = oa.aHE(10, 8, 512), aN.tIncomeType = oa.s2(2), aN.tIncomeValue = oa.s2(8), aN.tIncomeData = oa.aHE(10, 8, 512), aN.iIncomeType = oa.s2(2), aN.iIncomeValue = oa
			.s2(8), aN.iIncomeData = oa.aHE(10, 8, 512), aN.sResourcesType = oa.s2(2), aN.sResourcesValue = oa.s2(11), aN.sResourcesData = oa.aHE(10, 11, 512), aN.nG = oa.aHE(10, 30, 0), !! function() {
				var oa = n7,
					mw = oa.s2(5),
					aHG = oa.s2(30),
					aHH = oa.s2(30);
				if (aHG + aHH > 8 * oa.size) return void aH4("Corrupted File");
				return function(gz) {
						var aHK = new Uint8Array(gz),
							aHL = new Uint16Array(gz),
							aHM = new Uint32Array(gz),
							aHN = new Uint32Array(gz);
						ls.ar.nH = aHK, ls.ar.nJ = aHL, ls.ar.nL = aHM, ls.ar.nN = aHN;
						for (var ak = 0; ak < gz; ak++) {
							var id = n7.s2(4);
							aHK[ak] = id, aHL[ak] = n7.s2(9), 0 === id ? aHM[ak] = n7.s2(22) : 1 === id ? (aHM[ak] = n7.s2(10), aHN[ak] = n7.s2(10)) : 2 === id ? (aHM[ak] = n7.s2(10), aHN[ak] = n7.s2(9)) : 3 === id ? (aHM[ak] = n7.s2(10),
								aHN[ak] = n7.s2(27)) : 4 === id ? (aHM[ak] = n7.s2(10), aHN[ak] = n7.s2(16)) : 5 === id || 6 === id ? aHM[ak] = n7.s2(10) : 7 === id ? aHM[ak] = n7.s2(1) : 10 === id && (aHM[ak] = n7.s2(20), aHN[ak] = n7
								.s2(22))
						}
					}(aHG),
					function(gz, mw) {
						var nP = new Uint8Array(gz),
							nO = new Array(gz);
						nO.fill(0), ls.ar.nP = nP, ls.ar.nO = nO;
						for (var ak = 0; ak < gz; ak++) nP[ak] = n7.s2(1), nO[ak] = n7.s2(mw)
					}(aHH, mw), 1
			}()) && (n7.aJ < 8 * n7.size - 13 || n7.aJ > 8 * n7.size ? (aH4("Out Of Bounds Error: " + n7.aJ + " " + 8 * n7.size), !1) : (ls.ar.ut = bE, 2 !== p.data.mapType || (aH4("Load base64 image...", 2), aGz)))
	}, this.aH5 = function(aH6, aH7) {
		var aZ = document.createElement("canvas"),
			ac = aZ.getContext("2d");
		if (aZ.width = aH6.width, aZ.height = aH6.height, ac.drawImage(aH6, 0, 0), p.data.canvas = aZ, aGy || aH7) return p.q ? void 0 : (p.data.mapType = 2, aC.gS(), void aC.dT(19));
		ls.b5()
	}
}

function aF3() {
	this.pr = function(uS) {
		return 0 === uS ? 1 === p.q && p.gB : 1 === uS ? 1 === p.q && !p.gB : 2 === p.q
	}, this.am = function(player) {
		return 0 !== fe.gA[player] && 2 !== fe.gC[player]
	}, this.mu = function(player) {
		return player === p.an && 2 !== fe.gC[player]
	}, this.rf = function(player, kS) {
		return player !== kS && (0 === eL.jd[player] || eL.jd[player] !== eL.jd[kS])
	}, this.aHO = function() {
		return tq.th < 2 ? 0 : p.e0 ? 1 < uh.aHP() : fe.jQ[re[1]]
	}, this.aCM = function() {
		var th = tq.th;
		if (0 !== th) {
			if (!p.e0) return !this.is(re[0]);
			for (var jd = eL.jd, a71 = uh.zp(), tg = tq.tg, ak = th - 1; 0 <= ak; ak--) {
				var g6 = tg[ak];
				if (jd[g6] === a71 && !this.is(g6)) return 1
			}
		}
		return 0
	}, this.uD = function(player) {
		return player === p.an
	}, this.aHQ = function(kS, gp) {
		return fe.ff[p.an] < gp * fe.ff[kS]
	}, this.is = function(player) {
		return player >= p.e3 || 2 === fe.gC[player]
	}, this.aDe = function(player) {
		return 0 !== fe.gA[player]
	}, this.ud = function(player) {
		return player < p.e3
	}, this.aHR = function(aHS, aHT) {
		return aHS !== aHT
	}, this.j5 = function(player, eH) {
		var min;
		return eH = this.aHU(player, eH), fe.ff[player] += eH, fe.g7[player] && (min = Math.min(fe.g7[player], fe.ff[player]), fe.g7[player] -= min, fe.ff[player] -= min), eH
	}, this.aHU = function(player, eH) {
		var fY = fe.ff[player];
		return eH = Math.min(eH, fe.jQ[player] * p.aHV - fY), eH = Math.min(eH, p.uE - fY), Math.max(eH, 0)
	}, this.aDT = function(player, a7A, aHW, aHX) {
		var fY = fe.ff[player],
			a7A = dV.eF(fY * (a7A + 1), 1024),
			aHW = dV.eF(aHW * fY, 1024),
			a7A = Math.min(a7A, fY - aHW);
		return 10 === p.mR && (a7A = a4Y.aHZ(player, a7A)), eC.j2[0] = a7A, eC.j2[1] = aHW, aHX <= a7A
	}, this.iq = function(player, aCo, io) {
		var player = fe.ff[player],
			aHY = dV.eF(64 * player, 1024);
		return aCo = Math.min(aCo, player - aHY), aCo = this.aHU(io, aCo), eC.j2[0] = aCo, eC.j2[1] = aHY, 1 <= aCo
	}, this.aHa = function(player, aCo, io) {
		var player = fe.ff[player],
			aHY = dV.eF(64 * player, 1024);
		return aCo = Math.min(aCo, player - aHY), this.aHU(io, aCo)
	}, this.ix = function(aCo, io) {
		return aCo = this.aHU(io, aCo), eC.j2[0] = aCo, eC.j2[1] = 0, 1 <= aCo
	}, this.aFV = function(player, aHb) {
		return dV.eF(fe.ff[player] * (aHb + 1), 1024)
	}, this.aHc = function(player, aHW) {
		aHW = dV.eF(aHW * fe.ff[player], 1024);
		eC.j2[1] = aHW, fe.ff[player] -= aHW
	}, this.o5 = function(player, aHd) {
		var nK, nM, eM = fe.ff[player];
		return aHd <= eM ? fe.ff[player] -= aHd : (fe.ff[player] = 0, nM = fe.g7[player] + (nK = 5 * ((eM = aHd - eM) >> 2)), iy.iz(player, nK - eM, 12), nM <= p.aHe ? fe.g7[player] = nM : (fe.g7[player] = p.aHe, iy.iz(player, nM - p.aHe, 18))),
			aHd
	}, this.zd = function(player, a7A) {
		var ff = fe.ff,
			fY = ff[player],
			a7A = dV.eF(fY * (a7A + 1), 1024),
			aHY = Math.max(dV.eF(fY, 10), 1e3);
		return (a7A = Math.min(a7A, fY - aHY)) < 0 ? (ff[player] = 0, aHY = Math.min(1e3, fY + p.aHe - fe.g7[player]), eC.j2[1] = aHY, fe.g7[player] += aHY - fY, 0) : (eC.j2[1] = aHY, 10 === p.mR && (a7A = a4Y.aHZ(player, a7A)), ff[player] -=
			aHY + a7A, a7A)
	}, this.aDW = function(player) {
		fe.ff[player] -= eC.j2[0] + eC.j2[1]
	}, this.aHf = function(player, kS) {
		return (kS = Math.min(kS, p.dS)) < p.dS && 0 === fe.gA[kS] && (kS = p.dS), (eC.a2L[0] = kS) === p.dS || nZ.qL(player, kS)
	}, this.aHg = function(player, io) {
		return 0 !== fe.gA[io] && !nZ.qL(player, io)
	}, this.aCZ = function(player, aHh) {
		for (var g6, gz = tq.th, t5 = 0, aHi = re, ak = 0; ak < gz; ak++)
			if (g6 = aHi[ak], !this.is(g6)) {
				if (player === g6) return !0;
				if (++t5 > aHh) return !1
			} return !1
	}, this.a6y = function(g6) {
		var aCN = p.e0 ? uh.aCO() : fe.jQ[re[0]];
		return aCN >= dV.eF(g6 * p.wr, 100)
	}, this.aHj = function(eH, min, max) {
		return Math.floor(dV.dW(isNaN(eH) ? 0 : Number(eH), min, max))
	}
}

function sZ() {
	this.az = function(player) {
		return !!ao.sg.a82(player) && !(ao.aD.r3[player] >= Math.max(3 * it.performance.yT, mG.a83[mG.ip[player]]) || !aa.al.aDT(player, mG.aDU[mG.ip[player]], 32, 0)) && (fr.aG5() ? function(player) {
			var aHm = ao.iA.rc(),
				gz = aHm.length;
			if (0 === gz) return !1;
			aHm = aHm[eG.xT(gz)], gz = ao.aD.ap[aHm];
			if (ao.sm.aDN(player, gz)) return !1;
			return !! function(player, aDP) {
				var aDP = pv.a4z(ao.aD.og[aDP]),
					pu = pv.qn(aDP),
					aDP = pv.qp(aDP),
					b = fe.je[player],
					c = fe.jf[player],
					d = fe.jg[player],
					player = fe.jh[player],
					d = Math.max(pu - d, b - pu),
					b = Math.max(aDP - player, c - aDP);
				return d < 100 && b < 100
			}(player, aHm) && !!ao.qQ.aHo(player, gz, 1) && (aa.al.aDW(player), ao.aD.a99(player), !0)
		}(player) : !!(it.aBv.az(player) || it.aBs.az(player) || it.aBt.az(player)) && (function(player) {
			eC.qP[1] = 4, aa.al.aDW(player), ao.aD.a99(player)
		}(player), !0))
	}
}

function aAz() {
	var aBd = 501,
		aHs = (this.aHq = new Uint32Array(aBd), this.fY = new Uint32Array(aBd), this.aG8 = new Uint16Array(aBd), this.aHr = 0, 1),
		aHt = 0;

	function aHw(self) {
		self.max.fill(0)
	}

	function aI3(self, ak) {
		self.max[0] = Math.max(self.aHq[ak], self.max[0]), self.max[1] = Math.max(self.fY[ak], self.max[1]), self.max[2] = Math.max(self.aG8[ak], self.max[2])
	}
	this.max = [0, 0, 0], this.aHu = 0, this.jP = new Array(21), this.aHv = null, this.dw = function() {
		this.aHv = [L(213), L(214), L(215), L(216), L(217), L(218), L(219), L(220), L(0), L(35), L(221), L(222), L(223), L(224), "", L(225), L(226), L(227), L(34), L(228), L(229)]
	}, this.aB = function() {
		this.aHr = 0, aHs = 1, this.aHu = 0, aHt = 0, aHw(this), this.jP.fill(0)
	}, this.aHx = function(player, a7A) {
		aa.al.uD(player) && (this.jP[0] += a7A + 1, this.jP[1]++, this.jP[12] += eC.j2[1])
	}, this.j6 = function(player, io) {
		__fx.donationsTracker.logDonation(player, io, eC.j2[0]);
		player === p.an && (mY.j6(eC.j2[0], eC.j2[1], io), this.jP[12] += eC.j2[1], this.jP[16] += eC.j2[0]), io === p.an && (mY.aHy(eC.j2[0], player), this.jP[10] += eC.j2[0])
	}, this.aHz = function(player) {
		aa.al.uD(player) && (this.jP[2]++, this.jP[12] += eC.j2[1])
	}, this.aI0 = function(player) {
		aa.al.uD(player) && (this.jP[19]++, this.jP[12] += eC.j2[1])
	}, this.aI1 = function(player) {
		aa.al.uD(player) && this.jP[20]++
	}, this.iz = function(player, xL, aJ) {
		aa.al.uD(player) && (this.jP[aJ] += xL)
	}, this.az = function() {
		var self;
		this.aHu || 0 < aHt-- || ((self = this).aHq[self.aHr] = fe.jQ[p.an], self.fY[self.aHr] = fe.ff[p.an], self.aG8[self.aHr] = fv.aG9(p.an), aI3(self, self.aHr), self.aHr++, self.aHr === aBd && function(self) {
			aHw(self), aI3(self, 0), self.aHr = 1 + dV.eF(aBd, 2);
			for (var ak = 1; ak < self.aHr; ak++) self.aHq[ak] = self.aHq[2 * ak], self.fY[ak] = self.fY[2 * ak], self.aG8[ak] = self.aG8[2 * ak], aI3(self, ak);
			aHs *= 2
		}(self), aHt = aHs - 1, lV.yM(), 0 === fe.gA[p.an] && (self.aHu = j.b2()))
	}
}

function aAl() {
	var input;

	function aI5(i) {
		(i = i.target.files) && 0 < i.length && aA1.aI8(i[0])
	}

	function aIC(i) {
		var aT = new Image;
		aT.onload = aID, aT.src = i.target.result
	}

	function aID(i) {
		var i = i.target,
			fS = i.width,
			fQ = i.height,
			aIE = aK.f4.data[162].value,
			max = Math.min(dx.aD5, aIE),
			aIE = (max = fg.id || tC.tD() ? Math.min(1400, aIE) : max) / Math.max(fS, fQ);
		if (aIE < 1 && (fS = Math.floor(aIE * fS + .125), fQ = Math.floor(aIE * fQ + .125)), max < fS || max < fQ || fS < 10 || fQ < 10) aIE = "Invalid Image Dimensions!", fg.hE ? fg.hE.showToast(aIE) : alert(aIE);
		else {
			for (var max = document.createElement("canvas"), aIE = (max.width = fS, max.height = fQ, max.getContext("2d")), aIG = document.createElement("canvas"), aIH = (aIG.width = i.width, aIG.height = i.height, aIG.getContext("2d")), i = (aIH
					.drawImage(i, 0, 0), aIH.getImageData(0, 0, aIG.width, aIG.height)), aIH = aIE.createImageData(fS, fQ), src = i.data, aIK = aIH.data, aIL = aIG.width / fS, aIM = aIG.height / fQ, a3 = 0; a3 < fQ; a3++)
				for (var a2 = 0; a2 < fS; a2++) {
					var aIN = Math.floor(a2 * aIL),
						aIN = 4 * (Math.floor(a3 * aIM) * aIG.width + aIN),
						aIQ = 4 * (a3 * fS + a2);
					aIK[aIQ] = src[aIN], aIK[1 + aIQ] = src[1 + aIN], aIK[2 + aIQ] = src[2 + aIN], aIK[3 + aIQ] = 255
				}
			aIE.putImageData(aIH, 0, 0), 20 === aC.b1 && aC.b3().aID(max)
		}
	}
	this.aB = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aI5
	}, this.hn = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aI6 = function() {
		input.click()
	}, this.aI8 = function(aI9) {
		var eB = aI9.name.split("."),
			eB = eB[eB.length - 1].toLowerCase();
		"gif" !== eB && "jpg" !== eB && "jpeg" !== eB && "png" !== eB || ((eB = new FileReader).onload = aIC, eB.readAsDataURL(aI9))
	}
}

function aB4() {
	this.aIR = new ms
}

function aAI() {
	var aIS, fQ, aIT, aIU, aIV, aIW, aIX, aIY, aIZ;

	function eO() {
		return lE.aCV(mY.aCW()) ? qW.lW ? __fx.settings.keybindButtons ? lE.a3 - 2 * lE.fQ - 3 * aIT : lE.a3 - lE.fQ - 2 * aIT : __fx.settings.keybindButtons ? lE.a3 - lE.fQ - 2 * aIT : lE.a3 - aIT : lJ.aCV(mY.aCX()) ? qW.lW ? lJ.eO() - lE.fQ - 2 *
			aIT : lJ.eO() - aIT : qW.lW ? a5.fQ - lE.fQ - (aA4.aCY() + 1) * aIT : a5.fQ - aA4.aCY() * bW.gap
	}

	function aIe(h4, bE, id, g6, aIh, aIi, k1, aIj, aIk, aDj, aIp) {
		var ak, fW, aZ, aN, aIq = void 0 !== aIk,
			fS = Math.floor(p7.measureText(bE, mY.fR) + 1.5 * aIU + (aIq ? fQ : 1.5 * aIU));
		if (j.a0 = !0, aIp || j3.mZ(bE, aIk), fS + 2 * aIT + lE.fQ > a5.fS && !aIq && 50 !== id && 20 < bE.length) aIe(h4, (aIp = aa.dZ.a5h(bE))[0], id, g6, aIh, aIi, k1, aIj, aIk, aDj, !0), aIe(h4, aIp[1], id, g6, aIh, aIi, k1, aIj, aIk, aDj, !0);
		else if (aIp = fS + (50 === id ? aIV : 0), (aZ = document.createElement("canvas")).width = fS, aZ.height = fQ, (fW = aZ.getContext("2d", {
				alpha: !0
			})).font = mY.fR, aa.ab.textBaseline(fW, 1), aa.ab.textAlign(fW, 0), fW.clearRect(0, 0, fS, fQ), fW.fillStyle = aIi, fW.fillRect(0, 0, fS, fQ), fW.fillStyle = aIh, fW.fillText(bE, Math.floor(1.5 * aIU), Math.floor(fQ / 2)), aIq && (fW
				.imageSmoothingEnabled = !0, a9y.ae.aIr(aIk, fW, fS - fQ, 0, fQ)), 0 === (aN = {
				k: h4,
				bE: bE,
				id: id,
				player: g6,
				canvas: aZ,
				aIh: aIh,
				aIi: aIi,
				fS: fS,
				aIm: aIp,
				k1: k1,
				aIj: aIj,
				aIk: aIk,
				aDj: aDj
			}).k || 0 < aIS.length && 0 < aIS[0].k) aIS.unshift(aN);
		else {
			for (ak = 1; ak < aIS.length; ak++)
				if (0 < aIS[ak].k) return void aIS.splice(ak, 0, aN);
			aIS.push(aN)
		}
	}

	function aIf(aj, md, eM) {
		return "rgb(" + aj + "," + md + "," + eM + ")"
	}

	function aIs(id, jl) {
		for (var gz = aIS.length, ak = 0; ak < gz; ak++) aIS[ak].id === id && jl-- <= 0 && (aIS.splice(ak, 1), ak--, gz--)
	}

	function aIt(id, player) {
		for (var aJ7 = !1, ak = aIS.length - 1; 0 <= ak; ak--) aIS[ak].id !== id || player !== p.dS && aIS[ak].player !== player || (aIS.splice(ak, 1), aJ7 = !0);
		return aJ7
	}

	function aJ9(bE) {
		aIe(340, bE, 6, 0, aIf(215, 245, 255), aF.be, -1, !1)
	}
	this.aH1 = "", this.aB = function() {
		var self;
		aIY = 0, aIX = fg.fh.fi() ? 7 : 12, aIW = {
			uc: [0, 0, 0],
			aIa: [0, 0, 0],
			kn: [220, 180, 180],
			ij: [0, 0, 0],
			aT: [0, 0, 0]
		}, aIS = [], this.resize(), p.gB && this.uF(0, 18), dx.s0.s1[dx.nd].name.length && aJ9(L(270, [dx.s0.s1[dx.nd].name])), aJ9(L(271, [dx.dy - 2 + "x" + (dx.jK - 2)])), aJ9(L(272, [aa.dZ.fy(a9z.wR)])), a9z.wR !== a9z.wS && aJ9(L(273, [aa
			.dZ.fy(a9z.wS) + " (" + aa.dZ.a5d(100 * a9z.wS / a9z.wR, 1) + ")"
		])), 0 < a9z.wT && aJ9(L(250, [aa.dZ.fy(a9z.wT) + " (" + aa.dZ.a5d(100 * a9z.wT / a9z.wR, 1) + ")"])), 0 < a9z.wU && aJ9(L(274, [aa.dZ.fy(a9z.wU) + " (" + aa.dZ.a5d(100 * a9z.wU / a9z.wR, 1) + ")"])), 10 === p.mR && aIe(120, L(275),
			6, 0, aIf(235, 255, 120), aF.be, -1, !1), 0 !== (self = this).aH1.length && (aIe(200, self.aH1, 0, 0, aF.aG, aF.be, -1, !1), self.aH1 = ""), p.aId && aIe(340, L(230), 6, 0, aIf(255, 200, 0), aF.be, -1, !1)
	}, this.resize = function() {
		var aIg, ak;
		if (fQ = (fQ = Math.floor((fg.fh.fi() ? .031 : .0249) * a5.fj)) < 10 ? 10 : fQ, this.fontSize = Math.floor(2 * fQ / 3), this.fR = aa.ab.fk(1, this.fontSize), aIT = bW.gap, aIU = Math.floor(fQ / 5), 0 < aIS.length)
			for (aIg = aIS, aIS = [], ak = aIg.length - 1; 0 <= ak; ak--) aIe(aIg[ak].k, aIg[ak].bE, aIg[ak].id, aIg[ak].player, aIg[ak].aIh, aIg[ak].aIi, aIg[ak].k1, aIg[ak].aIj, aIg[ak].aIk, aIg[ak].aDj, !0);
		this.aIl()
	}, this.aIl = function() {
		aIZ = document.createElement("canvas");
		var bE = L(231),
			fW = (aIV = p7.measureText(bE, this.fR) + 5 * aIU, aIZ.height = fQ, aIZ.width = aIV, aIZ.getContext("2d", {
				alpha: !0
			}));
		fW.font = this.fR, aa.ab.textBaseline(fW, 1), aa.ab.textAlign(fW, 1), fW.clearRect(0, 0, aIV, fQ), fW.fillStyle = aF.c3, fW.fillRect(0, 0, aIV, fQ), fW.fillStyle = aF.aG, fW.fillText(bE, Math.floor(aIV / 2), Math.floor(fQ / 2))
	}, this.aCW = function() {
		var gz;
		return qW.lW ? qW.fS : 0 === (gz = aIS.length) ? 0 : 1 === gz ? aIS[0].aIm : g8(aIS[0].aIm, aIS[1].aIm)
	}, this.aCX = function() {
		var gz = aIS.length;
		return qW.lW ? gz ? g8(qW.fS, aIS[0].aIm) : qW.fS : 0 === gz ? 0 : 1 === gz ? aIS[0].aIm : 2 === gz ? g8(aIS[0].aIm, aIS[1].aIm) : g8(g8(aIS[0].aIm, aIS[1].aIm), aIS[2].aIm)
	}, this.lP = function(a2, a3) {
		for (var b, aIn, aIo = eO(), ak = aIS.length - 1; 0 <= ak; ak--)
			if ((aIn = aIo - (ak + 1) * fQ) <= a3 && a3 < aIn + fQ) return 50 === aIS[ak].id ? a2 >= a5.fS - aIV - aIT - aIS[ak].fS && (a2 >= a5.fS - aIV - aIT ? q7.al.a5q(aIS[ak].player) : r.a4w(aIS[ak].player, 800, !1, 0), !0) : a2 >= a5.fS -
				aIS[ak].fS - aIT && (736 === aIS[ak].id ? window.open("https://" + aIS[ak].bE, "_blank") : aIS[ak].aIj && (aIS[ak].aDj && aIS[ak].aDj.ju ? (aIn = aIS[ak].aDj.aU, b = pv.qn(aIn) - 10, aIn = pv.qp(aIn) - 10, r.a4v(b, aIn, 19 +
					b, 19 + aIn)) : aIS[ak].aDj && aIS[ak].aDj.eM ? r.a4x(aIS[ak].player, aIS[ak].aDj.rD) : (r.a4w(aIS[ak].player, 800, !1, 0), 0 <= aIS[ak].k1 && (b = aIS[ak].k1, aIS[ak].k1 = aIS[ak].player, aIS[ak].player = b))), !0);
		return !1
	}, this.mZ = function(h4, bE, id, g6, aIh, aIi, k1, aIj, aIk, aDj) {
		aIe(h4, bE, id, g6, aIh, aIi, k1, aIj, aIk, aDj)
	}, this.v5 = function(gP) {
		aIe(300, gP, 252, 0, aF.aG, aF.be, -1, !1)
	}, this.aCI = function(id) {
		for (var ak = aIS.length - 1; 0 <= ak; ak--) aIS[ak].id === id && (aIS[ak].k = 1)
	}, this.uF = function(player, id) {
		0 === id ? (p7.j1(player, 0), aIs(423, 2), aIe(160, L(232, [fe.mb[player]]), 423, player, "rgb(10,220,10)", aF.be, -1, !1)) : 1 === id ? (aIt(50, p.dS), p7.j1(player, 1), aIe(360, L(233, [fe.mb[player]]), 0, player, aF.cM, aF.be, -1, !0),
				r.a4w(player, 2700, !1, 0)) : 2 === id ? (p7.j1(player, 2), aIe(0, L(234), 0, player, "rgb(10,255,255)", aF.be, -1, !0), r.a4w(player, 2700, !1, 0)) : 3 === id ? (p7.j1(player, 2), aIe(0, L(235, [fe.mb[player]]), 0, player, aF.aG,
				aF.be, -1, !0), r.a4w(player, 2700, !1, 0)) : 4 === id ? this.aIu(1, player, player) : 5 === id ? aa.al.is(p.an) || (function(id, a2x) {
				var ak, aJ4 = 0,
					gz = aIS.length;
				for (ak = 0; ak < gz; ak++)
					if (aIS[ak].id === id && a2x <= ++aJ4) return aIS.splice(ak, 1)
			}(1, 5), j7.uG(player) && aIe(180, L(236, [fe.mb[player]]), 1, player, aIf(255, 200, 180), aF.be, -1, !0), aa.al.aHQ(player, 10) && (aIs(573, 0), aIe(180, L(237, [fe.mb[player]]), 573, player, aF.cM, aF.be, -1, !0))) : 18 === id ?
			aIe(255, L(238), 18, 0, aF.aG, aF.be, -1, !1) : 21 === id ? aIe(220, L(239), id, 0, aF.aG, aF.be, -1, !1) : 22 === id ? this.aIu(2, player, player) : 59 === id && aIe(0, L(240), id, 0, aF.cf, aF.be, 0, !1)
	}, this.aIw = function(gP) {
		aIe(200, L(241, [gP]), 94, 0, aF.aG, aF.cI, -1, !1)
	}, this.a66 = function(aIx) {
		if (p.an === aIx && !p.lI && !p.ay)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aIe(0, "Your Win Count is now " + __fx.wins.count, 3, aIx, aF.aG, aF.be, -1, !0);
		fe.jQ[aIx] && (p7.j1(aIx, 2), p.e3 < 100 ? aIe(0, L(235, [fe.mb[aIx]]), 3, aIx, aF.aG, aF.be, -1, !0) : aIe(0, L(242, [fe.mb[aIx]]), 3, aIx, aF.aG, aF.be, -1, !0))
	}, this.aIy = function(ai) {
		var bE, aJ0, aIz = "(" + pv.qn(ai >> 2) + ", " + pv.qp(ai >> 2) + ")",
			aIj = !1,
			player = 0;
		eu.ef(ai) ? eu.eg(ai) ? aIz = L(243, [aIz]) : (player = eu.ea(ai), p.ay && !1 === __fx.hoveringTooltip.active && (p.an = player), bE = L(244, [aa.fW.aFv(fe.mj[player], aa.ab.fk(0, 10), 150)]) + "   ", bE = (bE += L(245, [aa.dZ.fy(fe.ff[
				player])]) + "   ") + L(246, [aa.dZ.fy(fe.jQ[player])]) + "   ", p.e0 && (aJ0 = eL.ma[eL.jk[eL.jd[player]]], bE += L(112) + ": " + aJ0 + "   "), aa.al.is(player) && (bE += L(27) + ": " + mG.mH[mG.ip[player]] + "   "), aIz =
			bE = (bE += L(247, [player]) + "   ") + L(248, [aIz]), aIj = !0) : aIz = eu.eT(ai) ? L(249, [aIz]) + "   #" + eu.ei(ai) : L(250, [aIz]), j.a0 = !0, aIs(55, 0), aIe(220, aIz, 55, player, aF.aG, aF.be, -1, aIj, void 0, void 0, !0)
	}, this.aJ1 = function(aJ2) {
		var af = ao.aD,
			player = af.oh[aJ2] >> 3,
			bE = (j.a0 = !0, aIs(55, 0), L(251, [fe.mb[player]]) + "   ");
		aIe(220, bE += L(245, [aa.dZ.fy(af.oi[aJ2])]), 55, player, aF.aG, aF.be, -1, !0)
	}, this.yB = function(hq, a0t, yA) {
		hq === p.an ? aIe(175, " " + L(252, [fe.mb[a0t]]) + ": ", 1001, a0t, aIf(200, 255, 210), aF.be, -1, !0, yA) : this.aJ3(hq, yA)
	}, this.aJ3 = function(hq, yA) {
		aIs(1e3, 0), aIe(175, fe.mb[hq] + ": ", 1e3, hq, aF.aG, "rgba(5,60,25,0.9)", -1, !0, yA)
	}, this.a65 = function() {
		var gP;
		p.mi ? (gP = L(253), p7.a64(L(254), 2, 1, 12), aIe(0, gP, 40, 0, "rgb(10,220,10)", aF.be, -1, !1)) : (gP = L(255), p7.a64(L(256), 2, 0, 16), aIe(0, gP, 41, 0, aF.aG, aF.be, -1, !1))
	}, this.z6 = function() {
		var jl = fe.mb,
			eI = p.data;
		aIe(300, jl[0] + " [" + p.a61.zD(eI.elo[0]) + "] vs " + jl[1] + " [" + p.a61.zD(eI.elo[1]) + "]", 65, 0, aF.bZ, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aJ5 = function(gP) {
		aIe(350, gP, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aCJ = function(aCA) {
		aIe(0, L(aCA ? 257 : 258), 247, 0, aF.ce, aF.be, -1, !1)
	}, this.zF = function(zC, zE, aJ6) {
		var eI = p.data,
			jl = fe.mb;
		aIe(0, jl[0] + ": " + p.a61.zD(eI.elo[0]) + " -> " + zC, 66, 0, aF.aG, aJ6[0], -1, !1), aIe(0, jl[1] + ": " + p.a61.zD(eI.elo[1]) + " -> " + zE, 66, 1, aF.aG, aJ6[1], -1, !1)
	}, this.yF = function(player, id) {
		0 === id ? aIt(50, player) ? (aIe(128, L(259, [fe.mb[player]]), 52, player, aIf(180, 255, 180), aF.be, -1, !0), j7.yC(player, 2, 255)) : aIe(384, L(260, [fe.mb[player]]), 51, player, aIf(210, 210, 255), aF.be, -1, !0) : aIt(51, player) ?
			(aIe(128, L(261, [fe.mb[player]]), 52, player, aF.aG, "rgba(60,120,10,0.9)", -1, !0), j7.yC(player, 2, 255)) : (aIe(384, L(262, [fe.mb[player]]), 50, player, aF.aG, "rgba(90,90,90,0.9)", -1, !0), j7.yC(player, 2, 96))
	}, this.a5u = function(uc, target) {
		var color = aIf(210, 255, 210);
		1 < uc.length ? aIe(230, L(263, [uc.length, fe.mb[target]]), 66, target, color, aF.be, -1, !0) : aIe(230, L(264, [fe.mb[uc[0]], fe.mb[target]]), 66, uc[0], color, aF.be, target, !0)
	}, this.yG = function(player, target) {
		aIe(230, L(265, [fe.mb[player], fe.mb[target]]), 66, player, aF.aG, "rgba(75,65,5,0.9)", target, !0)
	}, this.aDf = function(id, jl) {
		aIs(id, jl)
	}, this.aCQ = function(id, player) {
		aIt(id, void 0 === player ? p.dS : player)
	}, this.aDd = function(id) {
		for (var ak = aIS.length - 1; 0 <= ak; ak--)
			if (aIS[ak].id === id) return aIS[ak];
		return null
	}, this.j6 = function(a7Q, aJ8, player) {
		2 !== fe.gC[p.an] && aIe(200, 1 === a7Q ? L(266, [fe.mb[player]]) : L(267, [aa.dZ.fy(a7Q), fe.mb[player]]), 30, player, "rgb(190,255,190)", aF.be, -1, !0)
	}, this.aHy = function(a7Q, player) {
		2 !== fe.gC[p.an] && (aIs(31, 0), a7Q = " (" + aa.dZ.fy(a7Q) + ") 💸", aIe(150, a7Q = aa.al.is(player) ? L(268) + a7Q : L(269, [fe.mb[player]]) + a7Q, 31, player, aF.bZ, "rgba(205,205,205,0.9)", -1, !0))
	}, this.aDm = function(a6U) {
		for (var aT = j.b2(), ak = 2; 0 <= ak; ak--) 0 < aIW.ij[ak] && (a6U || aIW.aT[ak] < aT - 220) && this.aJA(ak)
	}, this.aJA = function(id) {
		var bE, gz = aIW.ij[id],
			player = aIW.uc[id];
		aIW.ij[id] = 0, 1 === gz ? (0 === id ? bE = L(276, [fe.mb[player], fe.mb[aIW.aIa[0]]]) : 1 === id ? bE = L(277, [fe.mb[player]]) : 2 === id ? bE = L(278, [fe.mb[player]]) : 3 === id && (bE = L(279, [fe.mb[player]])), aIs(7, 0), aIe(aIW
			.kn[id], bE, 7, aIW.aIa[id], aF.aG, aF.be, -1, !0)) : (bE = L(0 === id ? 280 : 1 === id ? 281 : 282, [gz]), aIs(7, 0), aIe(aIW.kn[id], bE, 7, player, aF.aG, aF.be, -1, !1))
	}, this.aIu = function(id, jq, k1) {
		var aT = j.b2(),
			gz = aIW.ij[id] + 1;
		aIW.ij[id]++, aIW.uc[id] = jq, aIW.aIa[id] = k1, 1 === gz && (aIW.aT[id] = aT), (1 === gz && (p.a0z < 32 || 2 === p.q) || 1 < gz && (aIW.aT[id] < aT - 140 || 2 === p.q)) && this.aJA(id)
	}, this.az = function() {
		aA0.az();
		for (var z9 = (z9 = aIS.length - aIX) <= 1 ? 1 : z9 * z9, ak = aIS.length - 1; 0 <= ak; ak--) 0 < aIS[ak].k && (aIS[ak].k -= z9, aIS[ak].k <= 0) && (j.a0 = !0, aIS.splice(ak, 1));
		! function() {
			var jl, ak;
			if (128 !== aIY && !(++aIY < 128))
				for (jl = 5, ak = tq.th - 1; 0 <= ak; ak--) 1 === fe.gC[tq.tg[ak]] && 0 < jl-- && aIe(240, L(279, [fe.mb[tq.tg[ak]]]), 1, tq.tg[ak], aF.bZ, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.aDm(!1)
	}, this.g9 = function() {
		for (var g5, a3 = eO(), ak = aIS.length - 1; 0 <= ak; ak--) g5 = a3 - (ak + 1) * fQ, 50 === aIS[ak].id ? (gD.drawImage(aIS[ak].canvas, a5.fS - aIS[ak].fS - aIV - aIT, g5), gD.drawImage(aIZ, a5.fS - aIV - aIT, g5)) : gD.drawImage(aIS[ak]
			.canvas, a5.fS - aIS[ak].fS - aIT, g5)
	}
}

function L(value, aJC, aE4, aJD) {
	var bE = "number" == typeof value ? vn.aEa[value] : value;
	if (aE4 && vn.aEg() && (bE = aE4), !aJC) return aJD ? bE.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : bE;
	for (var gz = aJC.length, ak = 0; ak < gz; ak++)
		for (var ju = 0; ju < 3; ju++) bE = bE.replace("{" + (10 * ju + ak) + "}", aJC[ak]);
	return bE
}

function aB6() {
	var aJF = new Array(1),
		aJG = new Array(1),
		aJH = 20,
		a4R = 0,
		aJI = !1;

	function aJK() {
		aJH++, iR.play()
	}
	this.aB = function() {
		if (!window.document.documentMode) {
			for (var ak = 0; 0 <= ak; ak--) ! function(ak, src) {
				aJG[ak] = 0, aJF[ak] = document.createElement("audio"), aJF[ak].src = src, aJF[ak].setAttribute("preload", "auto"), aJF[ak].setAttribute("controls", "none"), aJF[ak].style.display = "none", aJF[ak].onpause = function() {
					aJG[ak] = 1
				}, aJF[ak].oncanplaythrough = function() {
					aJG[ak] = 0 === aJG[ak] ? 1 : aJG[ak]
				}, document.body.appendChild(aJF[ak])
			}(ak,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aJI = !0
		}
	}, this.hn = function() {
		if (aJI) {
			aJI = !1;
			for (var ak = 0; 0 <= ak; ak--) aJF[ak].onpause = null, aJF[ak].oncanplaythrough = null, aC.removeChild(document.body, aJF[ak]), aJF[ak] = null
		}
	}, this.play = function() {
		if (aJI) {
			var h4 = performance.now();
			if (a4R + 66 < h4)
				for (var ak = 0; 0 <= ak; ak--)
					if (1 === aJG[ak]) return a4R = h4, aJG[ak] = 2, void aJF[ak].play();
			0 < aJH && (aJH--, setTimeout(aJK, 66))
		}
	}
}

function cx() {
	var aJL = new Uint8Array(78);
	this.aB = function() {
		var ak;
		for (aJL[50] = 37, ak = 0; ak < 10; ak++) aJL[ak + 3] = ak + 1;
		for (ak = 0; ak < 26; ak++) aJL[ak + 20] = ak + 11, aJL[ak + 52] = ak + 38
	}, this.aH0 = function(bE) {
		return bE.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.aJM = function(bE, size) {
		if ((bE = this.aH0(bE)).length > size) return bE.substring(0, size);
		for (; bE.length < size;) bE = "-" + bE;
		return bE
	}, this.rz = function(bE) {
		for (var mq = aJL, gz = bE.length, eB = new Uint8Array(gz), ak = 0; ak < gz; ak++) eB[ak] = mq[bE.charCodeAt(ak) - 45];
		return eB
	}, this.ry = function(aJN) {
		n4.gZ(6 * aJN.length), this.aJO(aJN), n7.aB(n4.gd)
	}, this.aJO = function(aJN) {
		for (var gz = aJN.length, fS = n4, ak = 0; ak < gz; ak++) fS.ga(6, aJN[ak])
	}, this.a8F = function(bE) {
		this.aJO(this.rz(bE))
	}, this.a8D = function(bE, size) {
		this.aJO(this.rz(this.aJM(bE, size)))
	}, this.iI = function(bE, size) {
		for (var eB = this.rz(this.aJM(bE, size)), eH = 0, gp = 1, ak = eB.length - 1; 0 <= ak; ak--) eH += gp * eB[ak], gp *= 64;
		return eH
	}
}

function aAB() {
	this.dS = 512, this.uE = 15e8, this.aJP = 1e9, this.aHe = 5e4, this.fd = 512, this.nv = 2, this.an = 0, this.e3 = 0, this.a0z = 0, this.aFp = 0, this.a10 = 0, this.jR = 512, this.jV = 512, this.aHV = 150, this.lI = !0, this.ay = 0, this.q = 0,
		this.wr = 0, this.lZ = !1, this.gB = 0, this.aJQ = 0, this.e0 = !1, this.jX = 0, this.jY = 0, this.mR = 0, this.aId = 0, this.wB = null, this.a61 = new z5, this.wA = 30, this.mV = 0, this.mi = 0, this.td = 0, this.uf = 0, this.data = new aHB,
		this.b8 = new aJR, this.lv = 0, this.us = "", this.bC = function() {
			eC.aB(), mO.aB(), j3.clear(), this.a0z = this.e3 = this.data.humanCount, this.lI = 1 === this.a0z, this.lZ = !1, this.ay = this.data.isReplay, this.mR = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.aId = this.data.isContest, this.e0 = this.mR < 7 || 9 === this.mR, this.mR = 10 === this.mR && this.lI ? 7 : this.mR, this.mR = 8 === this.mR && 2 !== this.e3 ? 7 : this.mR, a4Z
			.aB(), this.jX = this.data.numberTeams, this.data.teamPlayerCount ? this.jY = +(0 < this.data.teamPlayerCount[0]) : (this.jY = 0, this.e0 && this.lI && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.jX + 1), p.b8.lp())), this.wA = this.e3 <= 2 ? 30 : this.e3 <= 50 ? 40 : 50, this.aJQ = this.gB = this.data.selectableSpawn, this.wB = this.gB ? new aJS : null, 1 === gJ.a0o ? this.jR = this.e3 : this.jR = this.data
				.playerCount, this.jV = this.jR, this.aFp = this.jR - this.e3, this.a10 = 0, this.an = this.data.selectedPlayer, this.mV = 0, this.mi = 0, this.td = 0, this.uf = 0, eG.a2u(this.data.spawningSeed), fv.aB(), fe.aB(), j0.aB(), a9x.aJT(),
				q7.w9.y8 = [], eL.aB(), this.q = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), iy.aB(), ww(), eu.dw(), a9z.wl(), es.aB(), eu.aB(), a06.aB(), pv.aB(), ao.aB(), it.aB(), a4a.v0(), mG.aB(),
				a9x.gZ(), a9t.aB(), a9u.aB(), tq.ti(), ls.aB(), uh.aB(), a07.aB(), lV.aB(), wu.putImageData(wv, 0, 0), fp.aB(), y.aB(), lE.aB(), lJ.aB(), qW.aB(), a08.aB(), fr.aB(), lU.aB(), p7.aB(), mY.aB(), pt.aB(), m.aB(), a09.aB(), pg.aB(), a4X
				.aB(), pQ(), nj.aB(), j7.aB(), a4Y.aB(), yD.aB(), qJ.aB(), this.a61.aB(), j.v0(), r.a4u(), 0 === fe.gA[p.an] && a09.show(!1, !0), j7.fs(!0), a0A.aB(), j.a0 = !0, this.ay || this.lI && this.gB || fg.fh.setState(1), this.lv = 0
		}, this.la = function(a4S) {
			ls.ar.ut.length ? this.us = ls.ar.ut : this.us = ls.au.lt(), bA.aD.aJV(), j3.clear(), this.q = 0, j.aJW(), fg.fh.setState(0), b6.setState(0), a4T.aJX.show(a4S), 2 === this.lv ? aC.aD.aJY() : 1 === this.lv ? aC.dT(19) : aC.dT(5, 5)
		}, this.aJZ = function() {
			return this.ay ? lU.lD || !lJ.lL : this.lI && (lU.lD || this.gB)
		}, this.aJa = function() {
			return 1 === this.q && !this.gB
		}
}

function a8g() {
	this.f4 = {}, this.ro = new Array(7), this.a8r = null, this.a8p = null, this.aE = 0, this.mJ = [0, 0], this.gT = function() {
		aC.dT(5, 5)
	}, this.aJY = function() {
		aC.gS(), vs.aB()
	}, this.vD = function() {
		aC.dT(0 === b6.hy() ? 5 : 0)
	}, this.aJb = function() {
		if (1 === aK.f4.data[130].value) aC.dT(8, aC.b3().a0Y, new hY(24, {
			aJc: aK.f4.data[125].value,
			ha: aK.f4.data[128].value,
			hb: aK.f4.data[129].value
		}));
		else {
			for (var eB = (eB = aK.f4.data[126].value.split(",")).slice(0, 10), ak = 0; ak < eB.length; ak++) eB[ak] = eB[ak].trim().slice(0, 7).toUpperCase();
			1 === eB.length && 0 === eB[0].length && (eB = []), aC.dT(8, aC.b3().a0Y, new hY(23, {
				aJc: aK.f4.data[125].value,
				mk: eB
			}))
		}
	}, this.aJd = function(a0Y, target) {
		aC.dT(4, a0Y, new gR("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + uY.a8U +
			"' target='_blank'>" + uY.a8U + "</a>", !1, [new d7("⬅️ " + L(1), function() {
				aC.dT(a0Y)
			}), new d7("✅ Accept", function() {
				aK.aL.aM(140, 1), 0 === target ? aC.dT(2, a0Y) : aC.dT(8, a0Y, new hY(target))
			})]))
	}, this.xv = function() {
		for (var ak = 0; ak < 7; ak++) this.ro[ak] = iH.cy.yz(n7.s2(5));
		this.ro[1] = "[" + this.ro[1] + "]", 5 === aC.b1 && (aC.b3().aJe.aM(this.ro), aC.b3().resize())
	}, this.aDF = function(eH, hq, a0t) {
		eH = aa.al.aHj(eH, 1, 1e6);
		var aJf = Math.max(1, 1 + Math.floor(.01 * (eH - 100))),
			hq = L(283, [hq]);
		return (hq += "<br>") + L(284, [a0t]) + "<br>" + L(285, [aJf < 20 ? eH + aJf + "–" + (eH + 20) : eH + aJf]) + "<br>" + L(286, [eH])
	}
}

function hY(id, a16, aJg) {
	var hT, ox;

	function aJk() {
		ox.mC.innerHTML += "<br>" + L(289)
	}

	function aJq() {
		var eM = 1;
		aC.dT(4, 1, new gR(L(290), L(291), !1, [new d7("🔄 Reload", function() {
			eM && (setTimeout(function() {
				aC.dT(1)
			}, 5e3), fg.fh.gU()), eM = 0
		}, aF.c3)]))
	}

	function aJj() {
		n4.gZ(90), n4.ga(30, Math.floor(dV.pow(30) * Math.random())), n4.ga(30, Math.floor(dV.pow(30) * Math.random())), n4.ga(30, Math.floor(dV.pow(30) * Math.random())), n7.aB(n4.gd), aK.aL.aM(110, n9.cw.nA(n9.cw.nB(15))), bA.a5O.a8C()
	}
	this.aJh = !0, this.aGv = id, this.show = function() {
		hT.show(), this.resize(), 15 === id ? (bA.aD.aJi(id) ? aJj : aJk)() : 16 === id ? bA.aD.aJi(id) ? bA.a1k.a5N(2) : aJk() : 17 === id ? bA.aD.aJi(id) ? bA.a1k.a5N(3) : aJk() : 18 === id ? (bA.aD.close(0, 3253), bA.aD.hp(0, id), aJk()) :
			21 === id ? bA.aD.aJi(id) ? bA.aBG.aJl(a16.hZ, a16.ha, a16.hb) : aJk() : 22 === id ? bA.aD.aJi(id) ? bA.aBG.aJm(a16.hZ, a16.a1G, a16.a1H) : aJk() : 23 === id ? bA.aD.aJi(id) ? bA.aBG.aJn(a16.aJc, a16.mk) : aJk() : 24 === id ? bA.aD
			.aJi(id) ? bA.aBG.aJo(a16.aJc, a16.ha, a16.hb) : aJk() : 25 === id ? bA.aD.aJi(id) ? bA.a5O.a8L(a16) : aJk() : 28 === id ? bA.aD.aJi(id) ? bA.aBG.aJp(a16.hZ, a16.a1G, a16.a1H) : aJk() : 29 === id ? bA.aD.aJi(id) ? bA.a5O.a8E(a16) :
			aJk() : 30 === id && (bA.aD.aJi(id) ? vn.a5R() || aJq() : aJk())
	}, this.a5S = function() {
		15 === id ? aJj() : 16 === id ? bA.a1k.a5N(2) : 17 === id ? bA.a1k.a5N(3) : 18 === id ? aC.dT(8, this.a0Y, new hY(16)) : 21 === id ? bA.aBG.aJl(a16.hZ, a16.ha, a16.hb) : 22 === id ? bA.aBG.aJm(a16.hZ, a16.a1G, a16.a1H) : 23 === id ? bA
			.aBG.aJn(a16.aJc, a16.mk) : 24 === id ? bA.aBG.aJo(a16.aJc, a16.ha, a16.hb) : 25 === id ? bA.a5O.a8L(a16) : 28 === id ? bA.aBG.aJp(a16.hZ, a16.a1G, a16.a1H) : 29 === id ? bA.a5O.a8E(a16) : 30 === id ? vn.a5R() || aJq() : 1e3 === id &&
			(this.aGv = id = 25, bA.a5O.a8L(a16))
	}, this.yw = function(code, a6U, data) {
		!a6U && code !== id || (15 === code || 16 === code ? aC.dT(7, this.a0Y) : 17 === code ? (bA.aD.close(0, 3252), aK.aD.aJr(0), aK.f4.data[117].dR && 0 < aK.f4.data[117].dR.length ? (a6U = aK.aD.aJs(0), aK.aL.aM(105, a6U.tJ), aK.aL.aM(106,
			a6U.password), aC.dT(8, this.a0Y, new hY(16))) : (aK.aL.aM(105, ""), aC.aD.vD())) : 21 === code ? aC.dT(10, this.a0Y, new aCt(data)) : 23 === code ? aC.dT(13, this.a0Y, new aJt({
			data: data,
			aJc: a16.aJc
		})) : 25 === code ? (aC.aD.a8r.tJ = a16.tJ, aK.vf.yM(a16.tJ), aC.dT(15, this.a0Y)) : 30 === code && (data ? aC.dT(1) : aJq()))
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), ox.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(L(287), [new d7("⬅️ " + L(1), function() {
		aJg ? aC.dT(29) : aC.aD.vD()
	})]), ox = new oy(hT.dA, L(288))
}

function eJ(ju, eM) {
	return 0 <= ju ? dV.eF(ju, eM) : -dV.eF(-ju, eM)
}

function a2j(eH) {
	return eH * eH
}

function g8(ju, eM) {
	return eM < ju ? ju : eM
}

function a6s(ju, eM) {
	return ju < eM ? ju : eM
}

function aFI(ju, eH, eM) {
	return eH < ju ? ju : eM < eH ? eM : eH
}

function aJu(eH, gz) {
	for (var aT = dV.eF(eH + 1, 2), ak = 0; ak < gz; ak++) aT = dV.eF(aT + dV.eF(eH, aT), 2);
	return aT
}

function aJv(eH, gz) {
	return eH < 1 ? 0 : aJu(eH, gz)
}

function a03(b, c, fz, a6q, d, e, g3, a6r) {
	return !(b + fz <= d || c + a6q <= e || d + g3 <= b || e + a6r <= c)
}

function zy(b, c, fz, a6q, d, e, g3, a6r) {
	return b <= d && c <= e && d + g3 <= b + fz && e + a6r <= c + a6q
}

function nS(eH) {
	return Math.floor(!!eH * (1 + Math.log2(eH + .5)))
}

function aAc() {
	var eH, fS, fQ, max, aJw, a4e, aJy, aJz, aK0, aK1, aK2, aK3, aK4, aK5, aJx = 1e4;

	function aKD(aKC, a4h, gz) {
		var ak;
		for (aJy[0] = aKC, ak = 1; ak < gz; ak++) aJy[ak] = aJy[ak - 1] + a4h, a4h = aJy[ak] >= aJx ? (aJy[ak] = aJx - 1, -a4h) : aJy[ak] < 0 ? (aJy[ak] = 0, -a4h) : (a4h += 16384 <= eG.random() ? a4e : -a4e) < -aJw ? -aJw : aJw < a4h ? aJw : a4h
	}

	function aKF(a2, a3, aKG, gz) {
		(aKG ? function(a2, a3, gz) {
			var ak;
			for (ak = 0; ak < gz; ak++) eH[a3 * fS + a2 + ak] = aJy[ak]
		} : function(a2, a3, gz) {
			var ak;
			for (ak = 0; ak < gz; ak++) eH[a3 * fS + a2 + ak * fS] = aJy[ak]
		})(a2, a3, gz)
	}

	function aKJ(value, gz) {
		var ak, aKK, ai, z9 = value - aJy[gz - 1];
		if (0 != z9) {
			for (aKK = 1 + dV.eF(Math.abs(z9), gz - 1), aKK = z9 < 0 ? -aKK : aKK, aJy[gz - 1] = value, ai = (ai = gz - 1 - dV.eF(Math.abs(z9), Math.abs(aKK))) < 1 ? 1 : gz - 2 < ai ? gz - 2 : ai, ak = gz - 2; ai <= ak; ak--) aJy[ak] += z9 - (gz -
				1 - ak) * aKK;
			(z9 < 0 ? function(gz) {
				var ak;
				for (ak = gz - 2; 1 <= ak; ak--) aJy[ak] < 0 && (aJy[ak] = -aJy[ak] - 1)
			} : function(gz) {
				var ak;
				for (ak = gz - 2; 1 <= ak; ak--) aJy[ak] >= aJx && (aJy[ak] = 2 * aJx - aJy[ak] - 1)
			})(gz)
		}
	}

	function aKN(aKO, aKP, gz) {
		for (var ak = 0; ak < gz; ak++) aKO[ak] = aKP[ak]
	}

	function aKQ(eB) {
		for (var ak = 0; ak < eB.length - 1; ak++) eB[ak] = eB[ak + 1] - eB[ak];
		eB[eB.length - 1] = eB[eB.length - 3]
	}

	function aKR(oH, gap, qb) {
		aJz.push(oH), aK0.push(gap), aK1.push(qb)
	}
	this.gZ = function(a16) {
		! function(a16) {
			var ak;
			for (fS = a16[0], fQ = a16[1], aJw = a16[2], a4e = a16[3], eH = new Int16Array(fS * fQ), max = fQ < fS ? fS : fQ, aJy = new Int16Array(max), aJz = [], aK0 = [], aK1 = [], aK2 = new Array(fS), aK3 = new Array(fQ), ak = fS - 1; 0 <=
				ak; ak--) aK2[ak] = !1;
			for (ak = fQ - 1; 0 <= ak; ak--) aK3[ak] = !1;
			aK4 = new Int16Array(fS), aK5 = new Int16Array(fQ)
		}(a16),
		function(gz) {
			var aKC = eG.random() % aJx,
				a4h = eG.random() % (2 * aJw + 1) - aJw;
			aKD(aKC, a4h, gz)
		}(max), aKN(aK5, aJy, fQ), aKF(0, 0, !0, fS);
		var a2, a3, a16 = eH[0],
			gz = max,
			a4h = eG.random() % (2 * aJw + 1) - aJw;
		for (aKD(a16, a4h, gz), aKN(aK4, aJy, fS), aKF(0, 0, !1, fQ), aKQ(aK4), aKQ(aK5), aKD(eH[fS - 1], aK4[fS - 1], fQ), aKF(fS - 1, 0, !1, fQ), aKD(eH[fS * (fQ - 1)], aK5[fQ - 1], fS), aKJ(eH[fS * fQ - 1], fS), aKF(0, fQ - 1, !0, fS), aK2[
				fS - 1] = aK2[0] = !0, aK3[fQ - 1] = aK3[0] = !0, aKR(0, fS, !0), aKR(0, fQ, !1), ! function() {
				var a1F, oH;
				for (;;) {
					if (a1F = function() {
							var ak, a1F = aJz.length - 1;
							for (ak = a1F - 1; 0 <= ak; ak--) aK0[ak] > aK0[a1F] && (a1F = ak);
							return a1F
						}(), aK0[a1F] < 5) return;
					oH = aJz[a1F] + dV.eF(aK0[a1F], 2), (aK1[a1F] ? function(a2) {
						var gz, aKV, ak, aKW = 0,
							aKX = 0;
						for (; aKX < fQ - 1;) {
							for (ak = aKW + 1; ak < fQ; ak++)
								if (aK3[ak]) {
									aKX = ak;
									break
								} gz = aKX - aKW + 1, aKD(eH[a2 + fS * aKW], 0 === aKW ? aK4[a2] : aJy[aKV - 1] - aJy[aKV - 2], gz), aKJ(eH[aKX * fS + a2], gz), aKF(a2, aKW, !1, gz), aKV = gz, aKW = aKX
						}
						aK2[a2] = !0
					} : function(a3) {
						var gz, aKV, ak, aKW = 0,
							aKX = 0;
						for (; aKX < fS - 1;) {
							for (ak = aKW + 1; ak < fS; ak++)
								if (aK2[ak]) {
									aKX = ak;
									break
								} gz = aKX - aKW + 1, aKD(eH[a3 * fS + aKW], 0 === aKW ? aK5[a3] : aJy[aKV - 1] - aJy[aKV - 2], gz), aKJ(eH[a3 * fS + aKX], gz), aKF(aKW, a3, !0, gz), aKV = gz, aKW = aKX
						}
						aK3[a3] = !0
					})(oH), aKR(oH, aJz[a1F] + aK0[a1F] - oH, aK1[a1F]), aK0[a1F] = oH - aJz[a1F] + 1
				}
			}(), a2 = 0; a2 < fS; a2++)
			if (!aK2[a2])
				for (a3 = 0; a3 < fQ; a3++) aK3[a3] || ! function(a2, a3) {
					var value = eH[a3 * fS + a2 - 1] + eH[(a3 - 1) * fS + a2],
						p8 = 2;
					aK2[a2 + 1] && (p8++, value += eH[a3 * fS + a2 + 1]);
					aK3[a3 + 1] && (p8++, value += eH[(a3 + 1) * fS + a2]);
					eH[a3 * fS + a2] = dV.eF(value, p8)
				}(a2, a3)
	}, this.wc = function() {
		return eH
	}, this.aKA = function() {
		eH = null
	}
}

function x1() {
	this.q9 = function(player, aU) {
		aa.al.pr(0) && aa.al.am(player) && pv.aFX(aU) && (ls.ar.aKZ(0, player, aU), p.wB.j1(player, aU))
	}, this.qI = function(player, a7A, kS) {
		aa.al.pr(1) && aa.al.am(player) && aa.al.aHR(player, kS) && aa.al.aDT(player, a7A, 12, 0) && aa.al.aHf(player, kS) && ((kS = nj.uB(player, eC.a2L[0])) || nj.uC(player)) && (fe.aKa[player]++, ls.ar.aKZ(1, player, a7A, eC.a2L[0]), it.a2M
			.a2J(player, kS)) && (aa.al.aDW(player), iy.aHx(player, a7A), it.a2M.a2R(player))
	}, this.aCo = function(player, a7A, io) {
		aa.al.pr(1) && aa.al.am(player) && p.e0 && aa.al.aHR(player, io) && aa.al.aHg(player, io) && aa.al.iq(player, aa.al.aFV(player, a7A), io) && j0.j1(io, eC.j2[0]) && (ls.ar.aKZ(2, player, a7A, io), fv.ir(player, io))
	}, this.mt = function(player, a7A, a7D) {
		eC.qP[1] = 7 & a7D;
		var aU = a7D >> 3;
		aa.al.pr(1) && aa.al.am(player) && pv.aFX(aU) && ao.sg.a82(player) && ao.sg.a85(aU) && aa.al.aDT(player, a7A, 32, 0) && ao.sa.x6(player, aU, 1) && (iy.aHz(player), ls.ar.aKZ(3, player, a7A, a7D), aa.al.aDW(player), aA5.aIR.mt(player), ao
			.aD.a99(player))
	}, this.mv = function(player, a7A, rD) {
		849 === a7A ? this.aCq(player, rD) : aa.al.pr(1) && aa.al.am(player) && aa.al.aDT(player, a7A, 32, 0) && ao.qQ.aHo(player, rD) && (iy.aHz(player), ls.ar.aKZ(4, player, a7A, rD), aa.al.aDW(player), aA5.aIR.mv(player), ao.aD.a99(player))
	}, this.aCq = function(player, rD) {
		aa.al.pr(1) && aa.al.am(player) && ao.so.az(player, rD) && ls.ar.aKZ(4, player, 849, rD)
	}, this.aCr = function(player, kS) {
		513 === kS ? this.qV(player) : aa.al.pr(1) && aa.al.am(player) && (kS = Math.min(kS, p.dS), nj.uB(player, kS)) && (ls.ar.aKZ(5, player, kS), nj.u3(player, kS))
	}, this.aCs = function(player, yA) {
		(aa.al.pr(1) || aa.al.pr(2)) && aa.al.am(player) && (yA = dV.dW(yA, 0, 1023), ls.ar.aKZ(6, player, yA), j7.yC(player, 0, yA))
	}, this.qY = function(player, a7I) {
		qW.qX(player) && (ls.ar.aKZ(7, player, a7I), qW.aCS(player, a7I))
	}, this.a0v = function(player) {
		(aa.al.pr(0) || aa.al.pr(1)) && aa.al.am(player) && lU.ld(player) && (ls.ar.aKZ(8, player), aA2.a0v(player))
	}, this.a0y = function(player) {
		ls.ar.aKZ(9, player), aA2.a0y(player)
	}, this.qV = function(player) {
		qW.qZ(player) && (ls.ar.aKZ(5, player, 513), qW.qV(player))
	}, this.qE = function(player, a7A, aU, kS) {
		aa.al.pr(1) && aa.al.am(player) && aa.al.aHR(player, kS) && aa.al.aHf(player, kS) && pv.aFX(aU) && qB.qC.aKb(player, aU) && (nj.uB(player, eC.a2L[0]) || nj.uC(player)) && (ls.ar.aKZ(10, player, (a7A << 10) + eC.a2L[0], aU), kS = aa.al.zd(
			player, a7A), fe.kO[player].push(eC.aKc[0]), nj.j1(player, kS, eC.a2L[0]), pg.zf(player, !0), iy.aI0(player))
	}
}

function sp() {
	this.az = function(player, rD) {
		player = ao.iA.r2(player, rD);
		return !(player < 0 || !ao.sm.aKd(player) || (ao.sm.aKe(player), 0))
	}
}

function aKf(aKg) {
	var pB = document.createElement("div"),
		aKh = document.createElement("div");
	this.yM = function() {
			aKh.textContent = "", f7.fH.n(1);
			for (var aKi = document.createDocumentFragment(), aKj = f7.aD.f0[0], i9 = f7.i9.a0N[aKj], a4A = f7.i9.a4A[aKj], ak = 0; ak < i9.length; ak++) ! function(aKi, aN, aKl, aKj) {
				var bM = document.createElement("span");
				bM.textContent = (aKl ? "🟢 " : "⚪ ") + f7.iA.a0M(aN, aKj), bM.style.color = f7.iA.t8(aN.t4), bM.style.cursor = "pointer", bM.style.margin = "0.2em 0.2em 0.2em 0.2em", bM.style.width = bM.style.maxWidth = 2 === aKj ? "10em" :
					"9em", bM.style.height = bM.style.maxHeight = "1.4em", bM.style.whiteSpace = "nowrap", bM.style.overflow = "hidden", bM.style.textOverflow = "ellipsis", bM.style.font = "inherit", bM.style.display = "inline-block", f7.iA.t9(
						aN) && (bM.style.textDecoration = "underline"), aN.tA && (bM.style.textDecorationLine = "underline", bM.style.textDecorationStyle = "dotted");
				bM.onclick = function(i) {
					aKg(i, aN)
				}, tC.tD() || (bM.onmouseover = function(i) {
					f7.fH.tE(i, aN, 1)
				}), aKi.appendChild(bM)
			}(aKi, i9[ak], ak < a4A, aKj);
			aKh.appendChild(aKi)
		}, this.show = function(bQ) {
			bQ.appendChild(pB)
		}, this.n = function(bQ) {
			aC.removeChild(bQ, pB)
		}, this.resize = function() {
			aKh.style.fontSize = aa.ab.bV(aa.ab.go(.02, .3))
		}, pB.style.top = "0", pB.style.left = "0", pB.style.width = pB.style.height = "100%", pB.style.overflowX = "hidden", pB.style.overflowY = "auto", pB.style.font = "inherit", aKh.style.font = "inherit", aKh.style.margin = "0.4em", pB
		.appendChild(aKh)
}

function aAu() {
	this.a5I = new aEJ, this.aKm = new aKn, this.a1i = new aKo
}

function a8s() {
	var hT, hU, hV, hX;

	function hW(ak) {
		aC.dT(8, aC.b1, new hY(21, {
			hZ: ak,
			ha: 0,
			hb: 10
		}))
	}
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), hU.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hV = [new d7(L(292), function() {
		hW(1)
	}, 0, 0, 1), new d7(L(293), function() {
		hW(2)
	}, 0, 0, 1), new d7(L(294), function() {
		hW(3)
	}, 0, 0, 1), new d7(L(295), function() {
		hW(0)
	}, 0, 0, 1), new d7(L(113), function() {
		hW(9)
	}, 0, 0, 1), new d7(L(143), function() {
		hW(10)
	}, 0, 0, 1), new d7(L(144), function() {
		hW(11)
	}, 0, 0, 1)], hX = [new d7("⬅️ " + L(1), function() {
		aC.dE()
	})], hT = new d6(L(296), hX), hU = new bO(hV, hT.dA)
}

function sk() {
	var aKp = [];
	this.aB = function() {
		aKp = []
	}, this.xD = function() {
		return 65536 === aKp.length
	}, this.xC = function(xB, x5) {
		for (var sj = aKp, gz = sj.length, ak = 0; ak < gz; ak++) {
			var g6 = sj[ak];
			if (g6[0] === xB && g6[g6.length - 1] === x5) return ak
		}
		return -1
	}, this.xF = function(rH) {
		var aKq = new Uint32Array(rH.length);
		return aKq.set(rH), aKq.reverse()
	}, this.aKr = function(jq, k1) {
		var jl = jq.length - 1,
			aKs = new Uint32Array(jl + k1.length);
		return aKs.set(jq, 0), aKs.set(k1, jl), aKs
	}, this.aKt = function(jq, k1, aKu, aU, aKv) {
		aKv && (aKu = (k1 = this.xF(k1)).length - aKu - 2);
		aKv = k1.subarray(aKu + 1 + (aU === k1[aKu + 1])), aU = new Uint32Array(jq.length + aKv.length);
		return aU.set(jq, 0), aU.set(aKv, jq.length), aU
	}, this.xE = function(rH) {
		return aKp.push(rH), aKp.length - 1
	}, this.get = function(ak) {
		return aKp[ak]
	}, this.xS = function() {
		return aKp
	}, this.aKx = function(xB, x5) {
		return null
	}
}

function aBC() {
	var gap, aFh, a2 = [0, 0, 0, 0, 0],
		a3 = [0, 0, 0, 0, 0],
		gp = [1, 1, 1, 1, 1],
		eH = [!0, !0, !0, !1, !1],
		aT = (this.nM = [!0, !0, !0, !1, !1], null);
	this.aKy = function(aZ, aKz) {
		aT = aZ, eH = aKz, aFh = [uY.a8a, uY.uZ, uY.a8c, uY.a8c, uY.a8d], this.aB()
	}, this.aB = function() {
		if (i4.rq()) {
			var ak, fz = Math.floor((fg.fh.fi() ? .261 : .195) * a5.fj),
				g3 = Math.floor(.9 * fz),
				a6q = Math.floor(.17 * g3);
			if (gap = fg.fh.fi() ? 2 * bW.gap : bW.gap, gp[0] = fz / aT[0].width, gp[1] = g3 / aT[1].width, gp[2] = a6q / aT[2].height, gp[3] = a6q / aT[3].height, gp[4] = a6q / aT[4].height, gp[2] *= 1.7, gp[3] *= 1.07, a2[0] = gap, a2[1] = gap,
				a2[2] = gap, a2[3] = gap, a2[4] = Math.floor(2 * gap + gp[3] * aT[3].width), a3[0] = gap, a3[1] = a3[0] + gap + gp[0] * aT[0].height, a3[2] = a3[1] + gap + gp[1] * aT[1].height, a3[3] = a3[2] + gap + gp[2] * aT[2].height, a3[4] =
				a3[3], !eH[0])
				for (ak = 0; ak < 5; ak++) a3[ak] -= gp[0] * aT[0].height + gap;
			if (!eH[1])
				for (ak = 2; ak < 5; ak++) a3[ak] -= gp[1] * aT[1].height + gap
		}
	}, this.lW = function() {
		return !(7 === b6.hy() && fg.fh.fi())
	}, this.lP = function(w, x) {
		if (aT && this.lW())
			for (var ak = eH.length - 1; 0 <= ak; ak--)
				if (eH[ak] && this.nM[ak] && a2[ak] < w && a3[ak] < x && w < a2[ak] + gp[ak] * aT[ak].width && x < a3[ak] + gp[ak] * aT[ak].height) return aC.dT(9, aC.b1, new ou(L(297), aa.ab.h0(aFh[ak]))), !0;
		return !1
	}, this.g9 = function() {
		if (aT && this.lW()) {
			var ak;
			for (gD.imageSmoothingEnabled = !0, ak = 0; ak < 5; ak++) eH[ak] && this.nM[ak] && (gD.setTransform(gp[ak], 0, 0, gp[ak], a2[ak], a3[ak]), gD.drawImage(aT[ak], 0, 0));
			gD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aAJ() {
	var a7P, aL0, aL1, jD, aL2, aL3 = 0,
		aL4 = 0;

	function aL6(ak) {
		var aL7 = !0,
			a2A = aF.aG,
			fS = (1 === a7P[ak].id ? a7P[ak].fW.fillStyle = aF.cZ : a7P[ak].kS === p.dS ? a7P[ak].fW.fillStyle = aF.br : (eu.eA(a7P[ak].kS), a7P[ak].fW.fillStyle = aa.color.bb(eC.eD[0], eC.eD[1], eC.eD[2], .87), 400 < aa.dF.a1K(eC.eD, 0, 2) && (
				aL7 = !1, a2A = aF.bZ)), a7P[ak].canvas.width),
			fz = (a7P[ak].fW.clearRect(0, 0, fS, jD), a7P[ak].fW.fillRect(0, 0, fS, jD), a7P[ak].fW.fillStyle = a2A, ! function(fW, fS, jD) {
				fW.fillRect(0, 0, fS, 1), fW.fillRect(0, jD - 1, fS, 1), fW.fillRect(0, 0, 1, jD), fW.fillRect(fS - 1, 0, 1, jD)
			}(a7P[ak].fW, fS, jD), aL0 + 2 * jD < fS && (a7P[ak].fW.fillRect(fS - aL0 - jD, 0, 1, jD), a7P[ak].fW.fillText(fe.mb[a7P[ak].kS], Math.floor((fS - aL0) / 2), Math.floor(.57 * jD))), 0 !== a7P[ak].id ? 0 : jD);
		a7P[ak].fW.fillText(aa.dZ.fy(a7P[ak].ip), Math.floor(fS - aL0 / 2 - fz), Math.floor(.57 * jD)),
			function(ak, fS, fz, aL7) {
				a7P[ak].fW.fillStyle = aL7 ? aF.bi : aF.bf;
				aL7 = Math.floor(aL0 * a7P[ak].ip / a7P[ak].aLC);
				a7P[ak].fW.fillRect(Math.floor(fS - aL0 - fz), jD - aL2, aL7, aL2)
			}(ak, fS, fz, aL7), 0 === a7P[ak].id ? (aLA(ak, fS, aL7, a2A), function(ak, fS, aL7) {
				a7P[ak].fW.strokeStyle = aL7 ? aF.by : aF.c8, a7P[ak].fW.fillRect(jD, 0, 1, jD);
				aL7 = fS - jD;
				a7P[ak].fW.beginPath(), a7P[ak].fW.moveTo(Math.floor(.3 * jD + aL7), Math.floor(jD / 2)), a7P[ak].fW.lineTo(Math.floor(jD - .3 * jD + 0 + aL7), Math.floor(jD / 2)), a7P[ak].fW.stroke(), a7P[ak].fW.beginPath(), a7P[ak].fW.moveTo(
					Math.floor(jD / 2 + aL7), Math.floor(.3 * jD)), a7P[ak].fW.lineTo(Math.floor(jD / 2 + aL7), Math.floor(jD - .3 * jD + 0)), a7P[ak].fW.stroke()
			}(ak, fS, aL7)) : aLA(ak, 2 * jD, aL7, a2A)
	}

	function aLA(ak, fS, aL7, a2A) {
		a7P[ak].fW.strokeStyle = a7P[ak].aLD ? aF.bp : aL7 ? aF.cE : aF.cF, a7P[ak].fW.fillStyle = a2A, a7P[ak].fW.fillRect(fS - jD, 0, 1, jD), a7P[ak].fW.lineWidth = Math.max(Math.floor(jD / 12), 3), a7P[ak].fW.lineCap = "round";
		aL7 = .35;
		fS = jD + 1, a7P[ak].fW.beginPath(), a7P[ak].fW.moveTo(Math.floor(fS - aL7 * jD + 0), Math.floor(aL7 * jD)), a7P[ak].fW.lineTo(Math.floor(fS - jD + aL7 * jD), Math.floor(jD - aL7 * jD + 0)), a7P[ak].fW.stroke(), a7P[ak].fW.beginPath(), a7P[
			ak].fW.moveTo(Math.floor(fS - jD + aL7 * jD), Math.floor(aL7 * jD)), a7P[ak].fW.lineTo(Math.floor(fS - aL7 * jD + 0), Math.floor(jD - aL7 * jD + 0)), a7P[ak].fW.stroke()
	}

	function aLO(eB, m9) {
		for (var ip, ak = m9 - 1; 0 <= ak; ak--) ip = nj.pa(p.an, ak), eB[ak].ip !== ip && (eB[ak].ip = ip, eB[ak].aLC = Math.max(ip, eB[ak].aLC), eB[ak].fX = !0)
	}

	function aLR(eB, mA) {
		for (var ha = p.an << 3, oi = ao.aD.oi, aDJ = ao.aD.aDJ, r4 = ao.aD.r4, ak = mA - 1; 0 <= ak; ak--) {
			var r5 = r4[ha + ak],
				ip = oi[r5];
			eB[ak].ip !== ip ? (eB[ak].ip = ip, eB[ak].aLC = Math.max(ip, eB[ak].aLC), eB[ak].fX = !0) : eB[ak].aLD || aDJ[r5] % 64 != 5 || (eB[ak].aLD = !0, eB[ak].fX = !0)
		}
	}

	function aL5(a7S) {
		a7S.canvas = document.createElement("canvas"), dx.fl.font = aL1;
		var fS = aL0;
		a7S.kS < p.dS && 0 === a7S.id && (fS += Math.floor(dx.fl.measureText(fe.mb[a7S.kS] + "000").width)), fS += jD, 0 === a7S.id && (fS += jD), a7S.canvas.width = fS, a7S.canvas.height = jD, a7S.fW = a7S.canvas.getContext("2d", {
			alpha: !0
		}), a7S.fW.font = aL1, aa.ab.textBaseline(a7S.fW, 1), aa.ab.textAlign(a7S.fW, 1)
	}

	function aLJ(ak) {
		return a08.fn() ? a5.fS - a7P[ak].canvas.width - bW.gap : a08.a2
	}

	function aLK(ak) {
		return Math.floor(2 * bW.gap + (a08.fn() ? fr.fQ + bW.gap : 0) + a08.fQ + ak * (1.3 * jD))
	}
	this.aB = function() {
		aL3 = aL4 = 0, a7P = [], this.resize()
	}, this.resize = function() {
		aL1 = mY.fR, jD = mY.fontSize + 5, jD = Math.floor(1.25 * jD), fg.fh.fi() && (jD = Math.floor(1.25 * jD)), aL2 = Math.floor(.15 * jD), dx.fl.font = aL1, aL0 = Math.floor(dx.fl.measureText("02 000 000 0000").width);
		for (var ak = a7P.length - 1; 0 <= ak; ak--) aL5(a7P[ak]), aL6(ak)
	}, this.fs = function() {
		for (var ak = a7P.length - 1; 0 <= ak; ak--) a7P[ak].fX && (a7P[ak].fX = !1, aL6(ak))
	}, this.lP = function(lQ, lR) {
		if (2 !== p.q && 0 !== fe.gA[p.an] && !p.ay && !aa.al.is(p.an))
			for (var aLE, aLF, aLG, aLH = fg.fh.fi() ? jD : 0, aLI = fg.fh.fi() ? Math.floor(.15 * jD) : 0, ak = a7P.length - 1; 0 <= ak; ak--)
				if (aLE = aLJ(ak), aLF = aLK(ak), aLG = a7P[ak].canvas.width, aLF - aLI <= lR && lR <= aLF + jD + aLI) {
					if (aLE - aLH <= lQ && lQ <= aLE + jD + aLH) return a7P[ak].aLD || (a7P[ak].fX = !0, a7P[ak].aLD = !0, 0 === a7P[ak].id ? q7.q8.aCr(a7P[ak].kS) : q7.q8.aCq(a7P[ak].kS)), !0;
					if (0 === a7P[ak].id && aLE + aLG - jD - aLH <= lQ && lQ <= aLE + aLG + aLH) return a4a.v3(3), q7.q8.qI(lE.qF(), a7P[ak].kS), !0
				} return !1
	}, this.az = function() {
		var aKO, aKP, eB, m9;
		0 === fe.gA[p.an] || aa.al.is(p.an) && !p.ay || (aKO = a7P.slice(0, aL3), aKP = a7P.slice(aL3, aL3 + aL4), eB = aKO, m9 = nj.pU(p.an), function(eB, m9) {
			if (aL3 !== m9) return 1;
			for (var ak = m9 - 1; 0 <= ak; ak--)
				if (eB[ak].kS !== nj.pZ(p.an, ak)) return 1;
			return
		}(eB, m9) ? aLO(eB = function(eB, m9) {
			var ak, kS, eM, ip, aIg = [];
			loop: for (ak = 0; ak < m9; ak++) {
				for (kS = nj.pZ(p.an, ak), eM = 0; eM < eB.length; eM++)
					if (eB[eM].kS === kS) {
						aIg.push(eB.splice(eM, 1)[0]);
						continue loop
					} ip = nj.pa(p.an, ak), aL5(ip = {
					kS: kS,
					ip: ip,
					aLC: ip,
					id: 0,
					fX: !0,
					aLD: !1,
					canvas: null,
					fW: null
				}), aIg.push(ip)
			}
			return aIg
		}(eB, m9), m9) : aLO(eB, m9), aKO = eB, aKP = function(eB) {
			var mA = ao.aD.r3[p.an];
			return function(eB, mA) {
				if (aL4 !== mA) return 1;
				for (var ha = p.an << 3, ap = ao.aD.ap, r4 = ao.aD.r4, ak = mA - 1; 0 <= ak; ak--) {
					var r5 = r4[ha + ak];
					if (eB[ak].kS !== ap[r5]) return 1
				}
				return
			}(eB, mA) ? aLR(eB = function(eB, mA) {
				var ak, kS, eM, aIg = [],
					ha = p.an << 3,
					ap = ao.aD.ap,
					oi = ao.aD.oi,
					r4 = ao.aD.r4;
				loop: for (ak = 0; ak < mA; ak++) {
					var r5 = r4[ha + ak];
					for (kS = ap[r5], eM = 0; eM < eB.length; eM++)
						if (eB[eM].kS === kS) {
							aIg.push(eB.splice(eM, 1)[0]);
							continue loop
						} r5 = oi[r5], aL5(r5 = {
						kS: kS,
						ip: r5,
						aLC: r5,
						id: 1,
						fX: !0,
						aLD: !1,
						canvas: null,
						fW: null
					}), aIg.push(r5)
				}
				return aIg
			}(eB, mA), mA) : aLR(eB, mA), eB
		}(aKP), aL3 = aKO.length, aL4 = aKP.length, a7P = aKO.concat(aKP))
	}, this.g9 = function() {
		if (0 !== fe.gA[p.an] && (!aa.al.is(p.an) || p.ay))
			for (var ak = a7P.length - 1; 0 <= ak; ak--) gD.drawImage(a7P[ak].canvas, aLJ(ak), aLK(ak))
	}
}

function iJ() {
	function aLe(eB, ha, hb) {
		var aLf = eB[ha];
		eB[ha] = eB[hb], eB[hb] = aLf
	}
	this.a0N = [
		[],
		[],
		[],
		[]
	], this.a4A = [0, 0, 0, 0], this.tM = [], this.a14 = function(aLT, tJ, username, t4, t5, a0S, elo, color, a8H, aGO) {
		username = this.tN(tJ, username, t4, t5, a0S, elo, color, a8H, aGO);
		this.a0N[aLT].push(username), f7.i7 === tJ && (f7.i8 = username), f7.f8.aCg(tJ) && (username.tA = 1), f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === aLT && 1 === f7.aD.f0[2]
	}, this.tN = function(tJ, username, t4, t5, a0S, elo, color, a8H, aGO) {
		return {
			tJ: tJ,
			username: username,
			t4: t4,
			t5: t5,
			a0S: a0S,
			elo: elo,
			color: color,
			a8H: a8H,
			aGO: aGO
		}
	}, this.aLU = function(aJ, aLT, t4, t5, a0S, elo, a8H) {
		aJ = this.a0N[aLT][aJ];
		aJ.t4 = t4, aJ.t5 = t5, aJ.a0S = a0S, aJ.elo = elo, aJ.a8H = a8H, f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === aLT && 1 === f7.aD.f0[2]
	}, this.aLV = function(aJ, aLT, aLW) {
		var aJ = this.a0N[aLT][aJ],
			aLX = aJ.username,
			tU = "Redacted " + n9.cw.fy(aJ.tJ, 2);
		aJ.username = aLW ? "[" + aa.dZ.mm(aLX) + "] " + tU : tU, aLX.indexOf("Redacted") < 0 && (aJ.tH = aLX), f7.iD.tW(aJ.tJ), f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === aLT && 1 === f7.aD.f0[2]
	}, this.aLY = function(aJ, aLZ, aLa) {
		var player = this.a0N[aLZ][aJ];
		this.aLb(aJ, aLZ), this.a0N[aLa].push(player), f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === aLa && 1 === f7.aD.f0[2]
	}, this.aLb = function(aJ, aLZ) {
		var i9 = this.a0N[aLZ];
		this.tM.push(i9[aJ]), 1e3 < this.tM.length && this.tM.shift(), aJ >= this.a4A[aLZ] ? i9[aJ] = i9[i9.length - 1] : (this.a4A[aLZ]--, 2 === aLZ ? (i9.splice(this.a4A[aLZ] + 1, 0, i9[i9.length - 1]), i9.splice(aJ, 1)) : (i9[aJ] = i9[this
			.a4A[aLZ]], i9[this.a4A[aLZ]] = i9[i9.length - 1])), i9.pop(), f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === aLZ && 1 === f7.aD.f0[2]
	}, this.aLc = function(aJ, fN) {
		f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === fN && 1 === f7.aD.f0[2];
		var i9 = this.a0N[fN],
			aN = i9[aJ];
		if (2 === fN)
			if (aJ >= this.a4A[fN]) {
				f7.f8.join(aN);
				for (var aLd = this.a4A[fN], elo = aN.elo; aLd && elo > i9[aLd - 1].elo;) aLd--;
				i9[aJ] = i9[this.a4A[fN]], i9.splice(this.a4A[fN]++, 1), i9.splice(aLd, 0, aN)
			} else i9.splice(this.a4A[fN]--, 0, aN), i9.splice(aJ, 1);
		else aJ >= this.a4A[fN] ? (f7.f8.join(aN), aLe(i9, this.a4A[fN]++, aJ)) : aLe(i9, --this.a4A[fN], aJ)
	}, this.tL = function(tJ) {
		for (var a0N = this.a0N, gz = a0N.length, ak = 0; ak < gz; ak++)
			for (var i9 = a0N[ak], af = i9.length, ju = 0; ju < af; ju++)
				if (tJ === i9[ju].tJ) return i9[ju];
		return null
	}
}

function aAn() {
	this.aB = function() {
		this.eB = [], this.aJ = 0
	}, this.a1q = function() {
		return new Uint8Array(this.eB)
	}, this.ga = function(aLg, value) {
		for (var eB = this.eB, s = this.aJ + aLg - 1, aLh = 1 + (s >> 3); eB.length < aLh;) eB.push(0);
		for (var ak = this.aJ; ak <= s; ak++) eB[ak >> 3] |= (value >> s - ak & 1) << 7 - (7 & ak);
		this.aJ += aLg
	}, this.nE = function(eB, aEu, aLi) {
		var aLj = aa.dF.aLk(eB);
		this.ga(aEu, aLj);
		for (var ak = 0; ak < aLj; ak++) this.ga(aLi, eB[ak])
	}, this.nF = function(eB, aEu, aLl) {
		var aLj = aa.dF.aLk(eB);
		this.ga(aEu, aLj);
		for (var ak = 0; ak < aLj; ak++) this.nC(eB[ak], aLl)
	}, this.nC = function(bE, aEu) {
		var gz = bE.length;
		this.ga(aEu, gz);
		for (var ak = 0; ak < gz; ak++) this.ga(16, bE.charCodeAt(ak))
	}, this.nD = function(aZ) {
		var aLm = (aZ = aZ.toDataURL()).split(",");
		if (aLm.length < 2) console.log("error 266");
		else {
			aZ = aa.dZ.a5n(aZ = aLm[aLm.length - 1], "/", "_"), aZ = aa.dZ.a5n(aZ, "\\+", "-");
			var aZ = aa.dZ.a5n(aZ, "=", ""),
				aJN = iH.cw.rz(aZ),
				gz = aJN.length;
			this.ga(30, gz);
			for (var ak = 0; ak < gz; ak++) this.ga(6, aJN[ak])
		}
	}
}

function aB8() {
	this.nq = function() {
		for (var a2, a3, ak = np - 1; 0 <= ak; ak--) a2 = dV.eF(o9[ak], 4) % dx.dy, a3 = dV.eF(o9[ak], 4 * dx.dy), fe.je[nl] = Math.min(a2, fe.je[nl]), fe.jf[nl] = Math.min(a3, fe.jf[nl]), fe.jg[nl] = Math.max(a2, fe.jg[nl]), fe.jh[nl] = Math
			.max(a3, fe.jh[nl])
	}, this.pX = function() {
		var eI, g6, ak, gz = fe.kO[nl].length,
			dv = eu.dv;
		loop: for (ak = gz - 1; 0 <= ak; ak--) {
			for (eI = 3; 0 <= eI; eI--)
				if (g6 = fe.kO[nl][ak] + dv[eI], eu.eg(g6) || eu.eW(g6) && eu.ea(g6) !== nl) {
					eu.er(fe.kO[nl][ak], nl);
					continue loop
				} fe.kO[nl][ak] = fe.kO[nl][gz - 1], fe.kO[nl].pop(), gz--
		}
	}, this.pY = function() {
		var player = nl,
			k8 = fe.k8,
			k9 = fe.k9,
			kA = fe.kA,
			gz = k8[player].length,
			dv = eu.dv;
		loop: for (var ak = gz - 1; 0 <= ak; ak--) {
			for (var aLn = !1, aLo = !1, eI = 3; 0 <= eI; eI--) {
				var g6 = k8[player][ak] + dv[eI];
				if (eu.eV(g6, player)) continue loop;
				aLn = aLn || eu.ee(g6), aLo = aLo || eu.eR(g6)
			}
			aLn ? k9[player].push(k8[player][ak]) : aLo ? kA[player].push(k8[player][ak]) : eu.ep(k8[player][ak], player), k8[player][ak] = k8[player][gz - 1], k8[player].pop(), gz--
		}
	}, this.na = function() {
		fe.jQ[nW] -= np
	}, this.nb = function(border) {
		for (var gz = border.length, ak = gz - 1; 0 <= ak; ak--) eu.eY(nW, border[ak]) || (border[ak] = border[gz - 1], border.pop(), gz--)
	}, this.ne = function(border) {
		for (var gz = border.length, ak = gz - 1; 0 <= ak; ak--) !eu.eY(nW, border[ak]) && eu.ef(border[ak]) && (border[ak] = border[gz - 1], border.pop(), gz--)
	}, this.nf = function(border) {
		for (var eI, g6, gz = border.length, dv = eu.dv, ak = gz - 1; 0 <= ak; ak--)
			for (eI = 3; 0 <= eI; eI--)
				if (g6 = border[ak] + dv[eI], eu.eV(g6, nW)) {
					fe.k8[nW].push(border[ak]), border[ak] = border[gz - 1], border.pop(), gz--;
					break
				}
	}, this.ng = function() {
		for (var eI, g6, dv = eu.dv, ak = np - 1; 0 <= ak; ak--)
			for (eI = 3; 0 <= eI; eI--) g6 = o9[ak] + dv[eI], eu.eZ(nW, g6) && eu.eb(g6) && (fe.k8[nW].push(g6), eu.eq(g6, nW))
	}, this.nh = function() {
		var a2, a3;
		loop: for (; fe.jf[nW] < fe.jh[nW];) {
			for (a2 = fe.jg[nW]; a2 >= fe.je[nW]; a2--)
				if (eu.eY(nW, 4 * (fe.jf[nW] * dx.dy + a2))) break loop;
			fe.jf[nW]++
		}
		loop: for (; fe.jf[nW] < fe.jh[nW];) {
			for (a2 = fe.jg[nW]; a2 >= fe.je[nW]; a2--)
				if (eu.eY(nW, 4 * (fe.jh[nW] * dx.dy + a2))) break loop;
			fe.jh[nW]--
		}
		loop: for (; fe.je[nW] < fe.jg[nW];) {
			for (a3 = fe.jh[nW]; a3 >= fe.jf[nW]; a3--)
				if (eu.eY(nW, 4 * (a3 * dx.dy + fe.je[nW]))) break loop;
			fe.je[nW]++
		}
		loop: for (; fe.je[nW] < fe.jg[nW];) {
			for (a3 = fe.jh[nW]; a3 >= fe.jf[nW]; a3--)
				if (eu.eY(nW, 4 * (a3 * dx.dy + fe.jg[nW]))) break loop;
			fe.jg[nW]--
		}
	}, this.qL = function(player, kS) {
		return 0 === eL.jd[player] || eL.jd[player] !== eL.jd[kS]
	}, this.qH = function(player) {
		for (var ak, gq, gz = fe.k8[player].length, dv = eu.dv, eI = 3; 0 <= eI; eI--)
			for (gq = dv[eI], ak = 0; ak < gz; ak++)
				if (eu.eg(fe.k8[player][ak] + gq)) return !0;
		return !1
	}, this.aBg = function(player) {
		for (var ak, gq, gz = fe.k8[player].length, dv = eu.dv, eI = 3; 0 <= eI; eI--)
			for (gq = dv[eI], ak = 0; ak < gz; ak++)
				if (eu.ec(fe.k8[player][ak]) && eu.eg(fe.k8[player][ak] + gq)) return !0;
		return !1
	}, this.qM = function(aHS, aHT) {
		for (var ak, h4, gq, g6, ye = fe.k8[aHS].length, yf = fe.k8[aHT].length, dv = (yf < ye && (h4 = aHS, aHS = aHT, aHT = h4, h4 = ye, ye = yf, 0), eu.dv), eI = 3; 0 <= eI; eI--)
			for (gq = dv[eI], ak = 0; ak < ye; ak++)
				if (g6 = fe.k8[aHS][ak] + gq, eu.eW(g6) && eu.ea(g6) === aHT) return !0;
		return !1
	}, this.aBh = function(aHS, aHT) {
		for (var ak, gq, g6, ye = fe.k8[aHS].length, dv = eu.dv, eI = 3; 0 <= eI; eI--)
			for (gq = dv[eI], ak = 0; ak < ye; ak++)
				if (eu.ec(fe.k8[aHS][ak]) && (g6 = fe.k8[aHS][ak] + gq, eu.eW(g6)) && eu.ea(g6) === aHT) return !0;
		return !1
	}
}

function a3m(a3g, a3a, aLp, a3h, aLq, aKg) {
	var pB = document.createElement("div"),
		aLr = document.createElement("div"),
		aLs = document.createElement("div"),
		aLt = document.createElement("div"),
		aLu = document.createElement("div"),
		aKh = document.createElement("div"),
		aLv = document.createElement("div"),
		aLw = document.createElement("div"),
		aLx = document.createElement("span"),
		aLy = document.createElement("div");
	this.a3q = new aLz(aLq, aKg), this.a3x = new aKf(aKg), this.a40 = [a3g, a3a, aLp, a3h], this.a47 = function(fF) {
		fF = (fF / 10).toFixed(1) + "%";
		aLw.style.width = fF, aLx.innerHTML = fF
	}, this.a3y = function() {
		this.a3x.n(aKh), this.a3q.show(aKh)
	}, this.a3z = function() {
		this.a3q.n(aKh), this.a3x.show(aKh)
	}, this.a3p = function() {
		return aLr
	}, this.show = function() {
		document.body.appendChild(pB)
	}, this.n = function() {
		aC.removeChild(document.body, pB)
	}, this.resize = function(aM2) {
		var aM3 = 1 - .4 * fg.fh.fi() * (a5.fS > 1.6 * a5.fQ),
			vS = aa.ab.go(.05 * aM3),
			aM4 = a5.fQ > a5.fS,
			aM5 = aa.ab.go(.07 * aM3 + .03 * aM4),
			aM6 = aa.ab.go(.04 + .02 * aM4),
			aM4 = aa.ab.go(.02 * aM3 + .01 * aM4),
			aM8 = aa.ab.go(.025);
		pB.style.font = aa.ab.fk(0, aM8), aM3 < 1 && (aM8 = aa.ab.fk(0, aM3 * aM8), aLs.style.font = aM8, aLu.style.font = aM8, aLy.style.font = aM8, aLv.style.font = aM8, aLt.style.font = aM8), aLr.style.height = aa.ab.bV(vS), aLr.style.font =
			aa.ab.fk(0, .72 * vS), aa.ab.bU(aLr, 2), aLs.style.top = aa.ab.bV(vS), aLs.style.height = aa.ab.bV(aM5), aa.ab.bU(aLs, 2), aLt.style.font = aa.ab.fk(0, aM3 * aa.ab.go(.02)), aLt.style.top = aa.ab.bV(vS + aM5), aLt.style.height = aa.ab
			.bV(aM6), aa.ab.bU(aLt, 2), aLu.style.top = aa.ab.bV(vS + aM5 + aM6), aLu.style.height = aa.ab.bV(aM5), aa.ab.bU(aLu, 2), aKh.style.top = aa.ab.bV(vS + aM5 + aM6 + aM5), aKh.style.height = aa.ab.bV(a5.fQ / a5.a6 - vS - 3 * aM5 - aM6 -
				aM4), aLv.style.top = aa.ab.bV(a5.fQ / a5.a6 - aM5 - aM4), aLv.style.height = aa.ab.bV(aM4), aa.ab.bU(aLv, 8), aLx.style.font = aa.ab.fk(0, .8 * aM4), aLy.style.top = aa.ab.bV(a5.fQ / a5.a6 - aM5), aLy.style.height = aa.ab.bV(
			aM5), aa.ab.bU(aLy, 8), a3g.resize(aLs), a3a.resize(aLs), aLp.resize(aLs), a3h.resize(aLs), aM2 ? this.a3q.resize(aKh) : this.a3x.resize()
	};
	aLq = this;
	pB.style.position = "absolute", pB.style.top = "0", pB.style.left = "0", pB.style.width = "100%", pB.style.height = "100%", pB.style.backgroundColor = aF.bg, tC.tD() || (pB.style.backdropFilter = "blur(4px)", pB.style.webkitBackdropFilter =
		"blur(4px)"), aLr.style.position = "absolute", aLr.style.top = "0", aLr.style.left = "0", aLr.style.width = "100%", aLr.style.display = "flex", aLr.style.alignItems = "center";
	for (var eB = [aLs, aLt, aLu, aLy], ak = 0; ak < eB.length; ak++) eB[ak].style.position = "absolute", eB[ak].style.left = "0", eB[ak].style.width = "100%", aa.ab.h6(eB[ak]);
	aKh.style.position = "absolute", aKh.style.left = "0", aKh.style.width = "100%", aKh.style.font = "inherit", aLv.style.position = "absolute", aLv.style.left = "0", aLv.style.width = "100%", aLw.style.position = "absolute", aLw.style.top = "0",
		aLw.style.left = "0", aLw.style.height = "100%", aLw.style.width = "50%", aLw.style.backgroundColor = aF.c2, aLx.innerHTML = "", aLx.style.position = "absolute", aLx.style.top = "50%", aLx.style.left = "50%", aLx.style.transform =
		"translate(-50%, -50%)", aLr.appendChild(function() {
			var a6r = document.createElement("h1");
			return a6r.textContent = L(78), a6r.style.margin = "0 auto 0.15em auto", a6r.style.fontFamily = "Arial Black, Trebuchet MS", a6r.style.fontSize = "inherit", a6r.style.fontWeight = "inherit", a6r
		}()), aLs.appendChild(a3g.bR), aLt.appendChild(a3a.bR), aLu.appendChild(aLp.bR), aLv.appendChild(aLw), aLv.appendChild(aLx), aLy.appendChild(a3h.bR), pB.appendChild(aLr), pB.appendChild(aLs), pB.appendChild(aLt), pB.appendChild(aLu), pB
		.appendChild(aKh), pB.appendChild(aLv), pB.appendChild(aLy), aLq.a3x.show(aKh)
}

function sR() {
	this.aMA = function(player) {
		for (var r4 = ao.aD.r4, ha = player << 3, ak = ha + ao.aD.r3[player] - 1; ha <= ak; ak--) this.aMB(r4[ak])
	}, this.aMB = function(aMC) {
		var aD = ao.aD,
			aMD = aD.om - 1,
			aME = aD.oh[aMC],
			aMF = aD.a9I[aMC],
			aMG = aD.og[aMC];
		aD.om = aMD, aD.oh[aMC] = aD.oh[aMD], aD.og[aMC] = aD.og[aMD], aD.aMH[aMC] = aD.aMH[aMD], aD.oi[aMC] = aD.oi[aMD], aD.a9I[aMC] = aD.a9I[aMD], aD.ap[aMC] = aD.ap[aMD], aD.aDJ[aMC] = aD.aDJ[aMD], aD.oj[aMC] = aD.oj[aMD], aD.rI[aMC] = aD.rI[
				aMD], aD.aDR[aMC] = aD.aDR[aMD], aD.r4[aD.oh[aMC]] = aMC,
			function(aMK) {
				var player = aMK >> 3,
					aD = ao.aD,
					gz = aD.r3[player] - 1,
					aML = (player << 3) + gz;
				aD.r3[player] = gz, aML !== aMK && (aD.r4[aMK] = aD.r4[aML], aD.oh[aD.r4[aMK]] = aMK)
			}(aME), ao.sT.sT[pv.a9H(aD.og[aMC])][aD.a9I[aMC]] = aMC, aMD = pv.a9H(aMG), aME = aMF, aMD = ao.sT.sT[aMD], aD = aMD.pop(), aME !== aMD.length && (aMD[aME] = aD, ao.aD.a9I[aD] = aME)
	}
}

function aBu() {
	var aMN = new Uint16Array(p.dS);

	function aMV(player, aMT) {
		for (var gz = eC.uj[0], zb = eC.zb, ag = -1, lX = p.dS, ak = 0; ak < gz; ak++) {
			var aX, g6 = zb[ak];
			nZ.qL(player, g6) && (aX = pv.qw(aMT, pv.aFc(g6)), -1 === ag || aX < ag) && (ag = aX, lX = g6)
		}
		return lX
	}

	function aMX(aMU, aMT) {
		if (aMU === p.dS) return 0;
		var k9 = fe.k9[aMU],
			af = k9.length;
		if (0 === af) return 0;
		for (var gz = Math.min(af, 10), lX = 0, ag = pv.qw(k9[lX] >> 2, aMT), ak = 0; ak < gz; ak++) {
			var qc = eG.xT(af),
				aX = pv.qw(k9[qc] >> 2, aMT);
			aX < ag && (ag = aX, lX = qc)
		}
		return k9[lX] >> 2
	}

	function aMY(player, aMT, kS, aMb) {
		var aMc;
		(aMb === p.dS || (aMc = pv.aFc(kS), aMb = pv.aFc(aMb), pv.qw(aMT, aMc) < pv.qw(aMT, aMb))) && (aMN[player] = kS)
	}
	this.aB = function() {
		aMN.fill(p.dS)
	}, this.aBy = function() {
		if (j.b2() % 109 == 9 && !(tq.th < 20) && p.e0 && !(uh.aCO() < dV.eF(8 * p.wr, 10))) {
			var a71 = uh.zp();
			if (eL.jk[a71]) {
				uh.aMO(a71);
				var gz = eC.uj[0];
				if (0 !== gz)
					for (var eB = eC.jp, tg = tq.tg, th = tq.th, aMP = aMN, qc = eG.xT(gz), ak = 0; ak < th; ak++) {
						var jq = tg[ak],
							k1 = eB[qc];
						aa.al.rf(jq, k1) && 512 === aMP[jq] && (aMP[jq] = k1, qc = (qc + 1) % gz)
					}
			}
		}
	}, this.az = function(player) {
		var aMT, aMW, aMU, aMQ = function(player) {
			var kS = aMN[player];
			if (kS !== p.dS) {
				if (aa.al.aDe(kS) && fe.k9[kS]) return kS;
				aMN[player] = p.dS
			}
			return p.dS
		}(player);
		return function(player) {
			for (var tm = tq.tg, af = tq.th, gz = Math.min(af, af < 17 && 5 === eG.xT(20) ? 1 : 16), gq = eG.xT(af), zb = eC.zb, k9 = fe.k9, jl = 0, ak = 0; ak < gz; ak++) {
				var g6 = tm[(ak + gq) % af];
				g6 !== player && k9[g6].length && (zb[jl++] = g6)
			}
			eC.uj[0] = jl
		}(player), 0 !== eC.uj[0] && (0 < (aMW = aMX(aMU = aMV(player, aMT = pv.aFd(player)), aMT)) && ao.sa.x4(player, ao.iA.qr(aMW, aMT)) ? (aMY(player, aMT, aMU, aMQ), !0) : 0 < (aMU = function(player, aMT) {
			for (var gz = eC.uj[0], zb = eC.zb, aMP = aMN, gq = 0, ak = 0; ak < gz; ak++) {
				var g6 = zb[ak],
					g6 = aMP[g6];
				g6 !== p.dS && aa.al.aDe(g6) && player !== g6 && nZ.qL(player, g6) && (zb[gq++] = g6)
			}
			return 0 !== (eC.uj[0] = gq) ? aMX(aMV(player, aMT), aMT) : 0
		}(player, aMT)) && ao.sa.x4(player, ao.iA.qr(aMU, aMT)) ? (aMY(player, aMT, eu.ea(aMU << 2), aMQ), !0) : !!(0 < (aMW = aMX(aMQ, aMT)) && ao.sa.x4(player, ao.iA.qr(aMW, aMT))))
	}
}

function a8y() {
	var d3, d4, d5, dI;

	function d8() {
		dC(), 2 !== p.data.sResourcesType && (p.data.sResourcesData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		2 === p.data.sResourcesType && aa.dF.dG(d5.dH(), p.data.sResourcesData, 2047)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(36), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), dM.dP(new dQ({
			dR: [L(3), L(4), L(5)],
			value: p.data.sResourcesType
		}, function(aJ) {
			dC(), 2 !== aJ || p.data.sResourcesData || (p.data.sResourcesData = new Uint16Array(p.dS)), p.data.sResourcesType = aJ, aC.dT(28)
		})), dI.push(dM)
	}(dI = []), function(dI) {
		var dM;
		1 === p.data.sResourcesType && ((dM = new dN).dO("Value"), dM.dU(new a7({
			aJ: -1,
			value: p.data.sResourcesValue
		}, 1, 0, function(i) {
			var value = dV.dW(Math.floor(i.target.value), 0, 2047);
			i.target.value = p.data.sResourcesValue = value
		})), dI.push(dM))
	}(dI), function(dI) {
		var dM;
		2 === p.data.sResourcesType && ((dM = new dN).dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.sResourcesData, 2)), dM.dU(d5), dI.push(dM))
	}(dI), dI))
}

function aMe() {
	this.qD = function(ai) {
		var zZ;
		return dx.nc(dx.nd) && p.data.passableMountains && (zZ = eu.ei(ai), this.aMf(p.an, zZ) || this.aMg(p.an, zZ)) && 0 !== (zZ = function(qq) {
			for (var a2 = pv.qn(qq), a3 = pv.qp(qq), max = Math.max(dx.dy, dx.jK) - 2, aMj = max * max, aJ7 = !1, aMk = 0, aX = 0; aX < max; aX++) {
				var aMl, aU = function(a2, a3, aX) {
					for (var ak = 0; ak <= aX; ak++)
						for (var ju = -1; ju < 2; ju += 2)
							for (var eM = -1; eM < 2; eM += 2)
								for (var aT = 0; aT < 2; aT++) {
									var ai = function(a2, a3) {
										if (pv.yZ(a2, a3)) {
											a2 = pv.pz(a2, a3), a3 = pv.qA(a2);
											if (eu.ef(a3) && eu.eS(a3)) return a2
										}
										return 0
									}(a2 + aT * ju * ak + (1 - aT) * eM * aX, a3 + aT * eM * aX + (1 - aT) * ju * ak);
									if (ai) return ai
								}
					return 0
				}(a2, a3, aX);
				aU && (aMl = pv.yX(a2, a3, aU)) < aMj && (aMk = aU, aMj = aMl, aJ7 || (aJ7 = !0, max = Math.floor(Math.sqrt(aMl)) + 1))
			}
			return aMk
		}(pv.qx(ai))) && (ai = pv.qA(zZ), eu.eg(ai) || (ai = eu.ea(ai)) !== p.an && nZ.qL(ai, p.an)) ? zZ : 0
	}, this.aKb = function(player, aU) {
		aU = pv.qA(aU);
		if (eu.ef(aU)) {
			if (eu.eg(aU)) eC.a2L[0] = p.dS;
			else if (eu.ea(aU) !== eC.a2L[0]) return !1;
			for (var jd = function(ai) {
					var dv = eu.dv,
						jd = [];
					loop: for (var eI = 3; 0 <= eI; eI--) {
						var oY = ai + dv[eI];
						if (eu.eT(oY)) {
							for (var id = eu.ei(oY), ak = 0; ak < jd.length; ak++)
								if (id === jd[ak]) continue loop;
							eC.aKc[jd.length] = oY, jd.push(id)
						}
					}
					return jd
				}(aU), gz = jd.length, ak = 0; ak < gz; ak++)
				if (this.aMf(player, jd[ak]) || this.aMg(player, jd[ak])) return eC.aKc[0] = eC.aKc[ak], !0
		}
		return !1
	}, this.aMf = function(player, zZ) {
		for (var kA = fe.kA[player], gz = kA.length, za = Math.max(dV.eF(gz, 12), 1), dv = eu.dv, ak = 0; ak < gz; ak += za)
			for (var or = kA[ak], eI = 3; 0 <= eI; eI--) {
				var oY = or + dv[eI];
				if (eu.eT(oY) && zZ === eu.ei(oY)) return !0
			}
		return !1
	}, this.aMg = function(player, zZ) {
		for (var kA = fe.kA[player], gz = kA.length, dv = eu.dv, ak = 0; ak < gz; ak++)
			for (var or = kA[ak], eI = 3; 0 <= eI; eI--) {
				var oY = or + dv[eI];
				if (eu.eT(oY) && zZ === eu.ei(oY)) return !0
			}
		return !1
	}
}

function aMn() {
	this.wp = function() {
		for (var g6, a2, nI, wn = eX, wo = dx.s8, fS = dx.dy, wm = fS - 1, qa = dx.jK - 1, jl = 0, a3 = 1; a3 < qa; a3++)
			for (nI = a3 * fS, a2 = 1; a2 < wm; a2++) wo[g6 = nI + a2 << 2] === wo[1 + g6] && wo[g6] === wo[2 + g6] && (jl++, wn[2 + g6] = 4);
		a9z.wU = jl
	}, this.wq = function(aMo, aMp) {
		for (var wn = eX, fS = dx.dy, wm = fS - 1, qa = dx.jK - 1, id = 0, a3 = 1; a3 < qa; a3++)
			for (var nI = a3 * fS, a2 = 1; a2 < wm; a2++) {
				var ai = 2 + (nI + a2 << 2);
				wn[ai] === aMo && (! function(ai, id, aMo, aMp) {
					var gz = 1,
						wn = eX,
						dv = eu.dv,
						aKO = [ai],
						aMr = id >> 8 << 1,
						aMs = 255 & id;
					wn[ai - 2] = aMr, wn[ai - 1] = aMs, wn[ai] = 5;
					for (; gz;) {
						for (var aKP = [], ak = 0; ak < gz; ak++)
							for (var or = aKO[ak], eI = 3; 0 <= eI; eI--) {
								var oY = or + dv[eI];
								wn[oY] === aMo && (wn[oY - 2] = aMr, wn[oY - 1] = aMs, wn[oY] = aMp, aKP.push(oY))
							}
						gz = (aKO = aKP).length
					}
				}(ai, id, aMo, aMp), id = (id + 1) % 32768)
			}
	}, this.ws = function() {
		for (var wn = eX, fS = dx.dy, wm = fS - 3, qa = dx.jK - 3, aMu = 12 * fS, a3 = 3; a3 < qa; a3++)
			for (var nI = a3 * fS, a2 = 3; a2 < wm; a2++) {
				var ai = 2 + (nI + a2 << 2);
				2 !== wn[ai] || 2 === wn[ai - 12] && 2 === wn[12 + ai] && 2 === wn[ai - aMu] && 2 === wn[ai + aMu] || (wn[ai - 2] = 1 | wn[ai - 2])
			}
	}
}

function a8z() {
	var d3, aMv = !0;

	function aMy(aKi, a7S) {
		var bR = document.createElement("div"),
			aMz = document.createElement("span"),
			aN0 = document.createElement("span");
		aMz.textContent = fr.aFy(a7S.k) + ":", aMz.style.color = aF.bv, aMz.style.paddingRight = "0.4em", aMz.style.display = "table-cell", aMz.style.width = "6ch", aMz.style.textAlign = "end", bR.appendChild(aMz), aN0.textContent = a7S.bE, bR
			.appendChild(aN0), bR.style.display = "table", a7S.yA && function(bR, yA) {
				{
					var aH6;
					yA >= 1024 - a9y.iD.a20 ? ((aH6 = document.createElement("img")).src = a9y.ae.aQ[yA - 1024 + a9y.iD.a20].toDataURL(), aH6.style.width = "1.5em", aH6.style.height = "1.5em", aH6.style.verticalAlign = "middle", bR.appendChild(
						aH6)) : ((aH6 = document.createElement("span")).textContent = a9y.iD.a28(yA), aH6.style.display = "inline-block", aH6.style.fontSize = "1.5em", aH6.style.lineHeight = "1em", aH6.style.verticalAlign = "middle", bR.appendChild(
							aH6))
				}
			}(bR, a7S.yA), aKi.appendChild(bR)
	}

	function aMx() {
		aMv && (d3.dA.scrollTop = d3.dA.scrollHeight)
	}
	this.clear = function() {
		d3.dA.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aIS = j3.a7U(), gz = aIS.length, aKi = document.createDocumentFragment(), ak = 0; ak < gz; ak++) aMy(aKi, aIS[ak]);
		d3.dA.appendChild(aKi), aMx(), d3.show(), this.resize(), aMv = !0, aMx()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d3.dA.style.padding = "0.4em " + aa.ab.bV(bW.bX)
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, this.mZ = function(a7S) {
		var aKi = document.createDocumentFragment();
		aMy(aKi, a7S), d3.dA.appendChild(aKi), aMx()
	}, (d3 = new d6(L(298), [new d7("⬅️ " + L(1), function() {
		aC.un(1)
	})])).dA.style.overflowY = "auto", d3.dA.addEventListener("scroll", function() {
		aMv = d3.dA.scrollTop >= d3.dA.scrollHeight - d3.dA.clientHeight - 2
	})
}

function aAE() {
	var aN2, aN3, aN4;

	function aN6(a2x) {
		for (var ak = aN2 - 1; 0 <= ak; ak--) 0 === aN4[aN3[ak]] && fe.jQ[aN3[ak]] >= a2x && pR(aN3[ak])
	}

	function aN5(player) {
		var h4;
		64 === aN4[player] ? aN4[player] = 6 : (h4 = fe.jQ[player], aN4[player] = h4 < 1e3 ? 3 : h4 < 1e4 ? 2 : h4 < 6e4 ? 1 : 0)
	}
	this.aB = function() {
		aN2 = 0, aN3 = new Uint16Array(p.dS), aN4 = new Uint8Array(p.dS)
	}, this.az = function() {
		for (var ak = aN2 - 1; 0 <= ak; ak--) 64 === aN4[aN3[ak]] ? aN5(aN3[ak]) : 0 == aN4[aN3[ak]]-- && (aN5(aN3[ak]), pR(aN3[ak]));
		16e4 <= fe.jQ[re[0]] && (aN6(16e4), 3e5 <= fe.jQ[re[0]]) && aN6(3e5), aa.al.aDe(p.an) && (iy.jP[7] = Math.max(fe.jQ[p.an], iy.jP[7]))
	}, this.ph = function(player) {
		for (var ju, ak = aN2 - 1; 0 <= ak; ak--)
			if (player === aN3[ak]) {
				for (aN2--, ju = ak; ju < aN2; ju++) aN3[ju] = aN3[ju + 1];
				return
			}
	}, this.zf = function(player, aN8) {
		for (var ak = aN2 - 1; 0 <= ak; ak--)
			if (player === aN3[ak]) return;
		aN3[aN2++] = player, aN4[player] = aN8 ? 2 : 64
	}
}

function sX() {
	function aND(player, ip, aNB, aHp) {
		var kS;
		if (eu.eg(aNB)) kS = p.dS;
		else {
			if ((kS = eu.ea(aNB)) === player) return void iy.iz(player, ip - aa.al.j5(player, ip), 12);
			if (!nZ.qL(player, kS)) return void q7.x3.iw(player, kS, ip)
		}
		nj.uB(player, kS) || nj.uC(player) ? (fe.kO[player].push(aHp << 2), nj.j1(player, ip, kS), pg.zf(player, !0)) : iy.iz(player, ip, 12)
	}
	this.az = function() {
		for (var aDJ = ao.aD.aDJ, og = ao.aD.og, aMH = ao.aD.aMH, ak = ao.aD.om - 1; 0 <= ak; ak--) 65535 === aMH[ak] && function(ak, aHp, qb) {
			if (6 === qb) {
				if (ao.sm.aNC(ak, aHp)) return ao.aD.aDR[ak]++, ao.aD.aMH[ak] = 0, 0
			} else {
				var player = ao.aD.oh[ak] >> 3,
					ak = ao.aD.oi[ak];
				iy.aI1(player), qb < 4 ? aND(player, ak, aHp + pv.aFS[qb] << 2, aHp) : 4 === qb ? function(player, ip, aHp) {
					var ak, oY, qt = pv.qu,
						or = pv.qA(aHp);
					for (ak = 0; ak < 4; ak++)
						if (oY = or + qt[ak], eu.eg(oY)) return aND(player, ip, oY, aHp);
					for (ak = 0; ak < 4; ak++)
						if (oY = or + qt[ak], eu.eW(oY) && !eu.eZ(player, oY)) return aND(player, ip, oY, aHp);
					for (ak = 0; ak < 4; ak++)
						if (oY = or + qt[ak], eu.eW(oY)) return aND(player, ip, oY, aHp)
				}(player, ak, aHp) : 5 === qb && function(player, ip, aHp) {
					var ak, oY, qt = pv.qu,
						or = pv.qA(aHp);
					for (ak = 0; ak < 4; ak++)
						if (oY = or + qt[ak], eu.eW(oY) && eu.eZ(player, oY)) return aND(player, ip, oY, aHp);
					for (ak = 0; ak < 4; ak++)
						if (oY = or + qt[ak], eu.eW(oY)) return aND(player, ip, oY, aHp);
					for (ak = 0; ak < 4; ak++)
						if (oY = or + qt[ak], eu.eg(oY)) return aND(player, ip, oY, aHp)
				}(player, ak, aHp)
			}
			return 1
		}(ak, pv.a4z(og[ak]), aDJ[ak] % 64) && (ao.sm.aKe(ak), ao.sQ.aMB(ak))
	}, this.aNA = function(player, aU, qb, rD, ip) {
		if (!(5 <= qb)) {
			var ol = p.an;
			if (aa.al.am(ol) && nZ.qL(player, ol) && player !== ol && 0 !== fe.k9[ol].length && aa.al.aHQ(player, 5)) {
				for (var aNB, aJ7 = !1, ak = 0; ak < 4; ak++)
					if (aNB = aU + pv.aFS[ak] << 2, eu.ef(aNB) && !eu.eg(aNB) && eu.ea(aNB) === ol) {
						aJ7 = !0;
						break
					} aJ7 && (mY.aDf(719, 0), qb = ip < 25e3 ? L(299) + " (" + aa.dZ.fy(ip) + ") ⛵" : L(300) + " (" + aa.dZ.fy(ip) + ") 🚢", mY.mZ(180, qb, 719, player, aF.cD, aF.be, -1, !0, void 0, {
					eM: 1,
					rD: rD
				}))
			}
		}
	}
}

function a8m() {
	var aNG, aNH, v7, vy, aNI;
	this.aJe = new rh, v7 = new vE([.45, .27], [.5, .5], 2 / 3), aNH = [new d7("⚔️<br>" + L(301), function() {
			aNJ(0)
		}, aF.c9), new d7("🗡️<br>" + L(19), function() {
			aNJ(1)
		}, aF.cR), new d7("🔑<br>" + L(302), function() {
			aNJ(2)
		}, aF.cj), new d7("☰<br>" + L(303), function() {
			aNJ(3)
		}, aF.bt), new d7("", function() {
			aC.dT(12)
		}, aF.bd, !1),
		new d7("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new d7("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], vy = new a7(aK.f4.data[122]);
	for (var ak = 0; ak < aNH.length; ak++) aNH[ak].button.style.position = "absolute";

	function aNJ(aJ) {
		fg.fh.setState(10), i4.rq() || i4.aNK(), 0 === aJ ? aC.aD.aJY() : 1 === aJ ? (ls.aw.rt(aK.f4.data[156].value, 1) || p.b8.mI(), aC.dT(19)) : 2 === aJ ? 0 !== fg.id || aK.f4.data[140].value ? aC.dT(8, aC.b1, new hY(16)) : aC.aD.aJd(aC.b1, 16) :
			3 === aJ && aC.dT(1)
	}
	vy.i.style.position = "absolute", vy.i.style.textAlign = "center", vy.i.placeholder = L(304), this.show = function() {
		b6.setState(0), fg.fh.setState(12), this.aJe.show(), aNH[4].a1U(aa.color.aEB(aK.f4.data[121].value)), this.resize(), document.body.appendChild(vy.i);
		for (var ak = 0; ak < aNH.length; ak++) document.body.appendChild(aNH[ak].button);
		1 !== fg.id || fg.hB < 5 || (aNI && j.k > aNI + 144e5 ? fg.hE.setState(14) : aNI = j.k)
	}, this.n = function() {
		this.aJe.n(), aC.removeChild(document.body, vy.i);
		for (var ak = 0; ak < aNH.length; ak++) aC.removeChild(document.body, aNH[ak].button)
	}, this.resize = function() {
		this.aJe.resize(), this.aJe.resize(), v7.resize();
		var gap = .5 * bW.gap,
			vS = 10 / 99 * .84 * v7.fS,
			aNN = .16 * v7.fQ,
			aNO = .19 * v7.fS,
			a2 = v7.a2 + aNO,
			vS = v7.a3 + vS + 3 * gap,
			fS = .5 * (v7.fS - gap) - aNO,
			aNO = v7.fS - 2 * aNO - aNN - gap,
			aNO = (aa.ab.gk(vy.i, a2, vS, aNO, aNN), aa.ab.gk(aNH[4].button, a2 + aNO + gap, vS, aNN, aNN), .5 * (v7.a3 + v7.fQ - (vS += aNN + gap) - gap));
		aa.ab.gk(aNH[0].button, a2, vS, fS, aNO), aa.ab.gk(aNH[1].button, a2 + fS + gap, vS, fS, aNO), aa.ab.gk(aNH[2].button, a2, vS + aNO + gap, fS, aNO), aa.ab.gk(aNH[3].button, a2 + fS + gap, vS + aNO + gap, fS, aNO);
		aa.ab.gk(aNH[5].button, a2, vS + aNO * 2 + gap * 2, fS * 2 + gap, aNO / 3);
		aa.ab.gk(aNH[6].button, a2, vS + aNO * 2.33 + gap * 3, fS * 2 + gap, aNO / 3);
		for (var ak = 0; ak < aNH.length; ak++) aNH[ak].button.style.font = aa.ab.fk(0, aa.ab.gv(.065 * v7.fQ)), aa.ab.bU(aNH[ak].button, 5);
		vy.i.style.font = aa.ab.fk(0, aa.ab.gv(.08 * v7.fQ)), aa.ab.bU(vy.i, 5)
	}, this.g9 = function() {
		if (b6.aNQ(), xy.g9(), gz = Math.floor((fg.fh.fi() ? .018 : .0137) * a5.fj), gD.font = aa.ab.fk(0, Math.max(5, gz)), aa.ab.textBaseline(gD, 0), aa.ab.textAlign(gD, 2), gD.fillStyle = aF.aG, gD.fillText(gJ.hB, a5.fS, 0), text =
			"Win count: " + __fx.wins.count, textLength = gD.measureText(text).width, gz = Math.max(5, gz), gD.textAlign = "left", gD.textBaseline = "middle", gD.fillText(text, gD.canvas.width - textLength - gz / 2, 2 * gz), a6k.g9(), a6j.g9(),
			i4.rq()) {
			gD.imageSmoothingEnabled = !1;
			var text = i4.i5("territorial.io"),
				textLength = .84 * v7.fS / text.width;
			gD.setTransform(textLength, 0, 0, textLength, v7.a2 + .08 * v7.fS, v7.a3), aNG = aNG || aa.a1y.aNT(text, aa.a1y.aNU, [0, 0, 0]);
			for (var a2 = -1; a2 <= 1; a2 += 2)
				for (var a3 = -1; a3 <= 1; a3 += 2) gD.drawImage(aNG, a2, a3);
			gD.drawImage(text, 0, 0), gD.imageSmoothingEnabled = !0;
			var gz = i4.i5("logo"),
				aNV = .6666 * textLength * text.height / gz.height,
				d = .5 * a5.fS,
				e = v7.a3 + .5 * textLength * text.height - .5 * aNV * gz.height;
			gD.setTransform(aNV, 0, 0, aNV, d - .6 * textLength * text.width, e), gD.drawImage(gz, 0, 0), gD.setTransform(aNV, 0, 0, aNV, d + .6 * textLength * text.width - aNV * gz.width, e), gD.drawImage(gz, 0, 0), gD.setTransform(1, 0, 0, 1,
				0, 0), gD.imageSmoothingEnabled = !0
		}
	}
}

function gR(title, ov, aNW, ow) {
	var hT, ox;
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), ox.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, ow = ow || [new d7("⬅️ " + L(1), function() {
		aC.dE()
	})], hT = new d6(title, ow), ox = new oy(hT.dA, ov), aNW && aa.ab.textAlign(hT.dA.style, 1)
}

function aNX() {
	var aNY, aNZ, aNa, hw, aNb, aJ = 0,
		k = j.k;

	function aNf() {
		! function() {
			if (!p.gB) return;
			if (p.lI) return;
			if (2 !== p.q)
				if (aNb % 7 != 0) aNb++;
				else if (hw === p.wA) {
				if (!aNi()) return;
				fr.w8(hw), p.wB.az()
			} else {
				if (!aNi()) return;
				aNb++, hw++, j7.wC(), j7.fs(!0)
			}
			return 1
		}() && aNi() && wM()
	}

	function aNg() {
		aJ = 0, (p.gB ? (j.a0 = fr.w8(hw - (aNb % 7 == 0 ? 0 : 1) + aNb % 7 / 7) || j.a0, wE) : lU.lD || !lJ.lL ? wE : (j.a0 = !0, wL))()
	}

	function aNi() {
		var ak, gz, aNj = ls.ar.nH,
			nI = ls.ar.nJ,
			nK = ls.ar.nL,
			nM = ls.ar.nN,
			aNk = ls.ar.nP,
			aNl = ls.ar.nO;
		if (!(aNY >= aNl.length)) {
			if (aNl = aNl[aNY], aNk[aNY]) {
				for (gz = aNZ + aNl, ak = aNZ; ak < gz; ak++) q7.w9.aDp(aNj[ak], nI[ak], nK[ak], nM[ak]);
				aNZ += aNl, aNY++
			} else ++aNa >= aNl && (aNY++, aNa = 0);
			return 1
		}
		mY.aIw("Replay file smaller than expected."), lJ.lM(!1), p.q = 2
	}
	this.w4 = 0, this.aB = function() {
		aNb = hw = aNa = aNZ = aNY = 0
	}, this.az = function() {
		var aNe;
		a5.az(), lJ.aFC() < 1.7 ? 0 === aJ ? j.k >= k && (aNe = j.wF / lJ.aFC(), k += aNe * Math.floor(1 + (j.k - k) / aNe), 2 === p.q || lU.lD || !lJ.lL ? wG() : (aNf(), es.wD()), aJ++) : aNg() : function() {
			var aNe;
			if (j.k >= k)
				if (2 === p.q || lU.lD || !lJ.lL) wG(), k = j.k;
				else {
					for (aNe = j.wF / lJ.aFC(), 16 < (j.k - k) / aNe && (k = j.k - 16 * aNe); j.k >= k && 2 !== p.q;) k += aNe, aNf();
					es.wD()
				} aNg()
		}(), wJ(), j.a0 && (j.a0 = !1, wK())
	}, this.aDo = function() {
		ls.ar.nO.length - aNY <= 2 || mY.aIw("Replay file larger than expected.")
	}
}

function aE5() {
	var aNm, aHt, aNn;

	function aNu(ak) {
		return aa.color.ba(aHt[ak][0], aHt[ak][1], aHt[ak][2])
	}

	function aNz(ju, eM) {
		return aa.color.aEE(aHt[ju], aHt[eM]), aNu(eM)
	}

	function aNs() {
		aNm && (aNm.remove(), aNm = null)
	}
	this.show = function(a5H, colors, id) {
		0 <= (aNn = id) && bA.aD.a0f(0) && bA.a1k.aNo(0, id), a5H = (a5H = (a5H = (a5H = (a5H = (a5H = (a5H = (a5H = (a5H = (a5H = (a5H = (a5H = a5H.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aHt = colors, (aNm = document.createElement("div")).style.position = "fixed", aNm.style.top = "0", aNm.style.left = "0", aNm.style.width = "100%", aNm.style.height = "100%", aNm.style.backgroundColor = aa.color.bb(aHt[0][0], aHt[0][
				1], aHt[0][2], .6), aNm.style.zIndex = "6", aNm.onclick = function(i) {
				i.target === aNm && aNs()
			},
			function(a5H) {
				var aY, aNt = document.createElement("div");
				aNt.style.position = "absolute", aNt.style.display = "flex", aNt.style.flexDirection = "column", aNt.style.top = "50%", aNt.style.left = "50%", aNt.style.backgroundColor = aNu(2), aY = fg.fh.fi() ? aa.ab.gv(a5.min) : aa.ab.go(.4);
				aY = Math.max(aY, 200), aNt.style.width = aa.ab.bV(aY), aNt.style.height = aa.ab.bV(aY), aNt.style.transform = "translate(-50%, -50%)",
					function(aNt, aY) {
						var aNy = document.createElement("div");
						aNy.style.flex = "0 0 10%", aNy.style.overflow = "hidden", aNy.style.backgroundColor = aNu(1), aNy.style.color = aNz(1, 7), aNy.style.font = aa.ab.fk(1, .05 * aY), aNy.style.display = "flex", aNy.style.alignItems =
							"center", aNy.style.justifyContent = "center", aNy.innerHTML = L(305), aNt.appendChild(aNy)
					}(aNt, aY),
					function(aNt, a5H, aY) {
						var aO0 = document.createElement("div");
						aO0.style.flex = "0 0 70%", aO0.style.overflowY = "auto", aO0.style.overflowX = "hidden", aO0.style.whiteSpace = "pre-wrap", aO0.style.wordWrap = "break-word", aO0.style.padding = aa.ab.bV(.02 * aY), aO0.style
							.backgroundColor = aNu(2), aO0.style.color = aNz(2, 8), aO0.style.font = aa.ab.fk(0, .07 * aY), aO0.innerHTML = a5H, aO0.innerHTML = "<style>a { color: inherit; }</style>" + aO0.innerHTML, aNt.appendChild(aO0)
					}(aNt, a5H, aY),
					function(aNt, aY) {
						var a91 = document.createElement("div"),
							aO1 = (a91.style.display = "flex", a91.style.flexDirection = "row", a91.style.justifyContent = "space-between", a91.style.alignItems = "stretch", a91.style.backgroundColor = aNu(3), a91.style.flex = "1", a91.style
								.padding = aa.ab.bV(.01 * aY), a91.style.gap = aa.ab.bV(.01 * aY), document.createElement("div")),
							aO2 = (aO1.style.flex = "0 0 60%", aO1.style.height = "100%", new d7(L(118, 0, 0, 1), function() {
								aNs()
							}, aNu(4), !1)),
							aO2 = (aO2.button.style.width = "100%", aO2.button.style.height = "100%", aO2.button.style.color = aNz(4, 9), aO2.button.style.font = aa.ab.fk(1, .05 * aY), aO1.appendChild(aO2.button), document.createElement("div")),
							aO4 = (aO2.style.flex = "0 0 15%", aO2.style.height = "100%", aO2.style.backgroundColor = aNu(5), document.createElement("div")),
							aO5 = (aO4.style.flex = "1", aO4.style.height = "100%", new d7(L(306), function(i) {
								return aa.ab.h3(i), aNn < 0 || bA.aD.a0f(0) && (bA.a1k.aNo(1, aNn), aNn = -1), !0
							}, aNu(6), !1));
						aO5.button.style.width = "100%", aO5.button.style.height = "100%", aO5.button.style.color = aNz(6, 10), aO5.button.style.font = aa.ab.fk(1, .035 * aY), aO4.appendChild(aO5.button), a91.appendChild(aO1), a91.appendChild(
							aO2), a91.appendChild(aO4), aNt.appendChild(a91)
					}(aNt, aY), aNm.appendChild(aNt)
			}(a5H), document.body.appendChild(aNm)
	}
}

function aAv() {
	this.aO7 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aO8 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aF.aG, "rgb(170,170,170)"
	], this.aO9 = [aF.aG, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aF.aG, aF.bZ], this.aOA = [aF.bZ, aF.aG, aF.aG, aF.aG, aF.bZ, aF.bZ, aF.bZ, aF.bZ, aF.aG];
	var aOB = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aOC = ["rgba(" + aOB[0] + ",", "rgba(" + aOB[1] + ",", "rgba(" + aOB[2] + ",", "rgba(" + aOB[3] + ",", "rgba(" + aOB[4] + ",", "rgba(" + aOB[5] + ",", "rgba(" + aOB[6] + ",", "rgba(" + aOB[7] + ",", "rgba(" + aOB[8] + ",", "rgba(" + aOB[9] +
			","
		], this.aOD = ["rgb(" + aOB[0] + ")", "rgb(" + aOB[1] + ")", "rgb(" + aOB[2] + ")", "rgb(" + aOB[3] + ")", "rgb(" + aOB[4] + ")", "rgb(" + aOB[5] + ")", "rgb(" + aOB[6] + ")", "rgb(" + aOB[7] + ")", "rgb(" + aOB[8] + ")", "rgb(" + aOB[9] +
			")"
		], this.ma = null, this.aBm = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.oM = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.jk = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.jd = new Uint8Array(p.dS), this.eK = new Uint8Array(p.dS), this.jm = new Uint16Array(p.dS), this.jn = new Uint16Array(this.jk.length + 1), this.jo = new Uint16Array(this.jk.length), this.dw =
		function() {
			this.ma = [L(307), L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315)]
		}, this.aB = function() {
			if (this.jd.fill(0), this.eK.fill(0), this.aOE(), p.e0) {
				if (9 === p.mR) {
					for (var jd = eL.jd, ak = p.data.teamPlayerCount[7] - 1; 0 <= ak; ak--) jd[ak] = 1;
					var gz = p.dS;
					for (ak = p.data.teamPlayerCount[7]; ak < gz; ak++) jd[ak] = 2;
					eL.jk[1] = 7, eL.jk[2] = 8
				} else p.lI ? function() {
					var oM = eL.oM,
						colorsData = p.data.colorsData;
					if (!p.data.selectableColor)
						for (var ak = p.e3 - 1; 0 <= ak; ak--) colorsData[ak] = eG.xT(262144);
					var aOP = 0,
						aX = 768,
						zt = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = p.data.teamPlayerCount;
					for (ak = 0; ak < 9; ak++)
						if (teamPlayerCount[ak]) {
							for (var eI = 0, eM = 0; eM < 3; eM++) eI += Math.abs(oM[ak][eM] - zt[eM]);
							eI < aX && (aOP = ak, aX = eI)
						} var aOQ = new Uint16Array(9);
					for (ak = 0; ak < 9; ak++) aOQ[ak] = teamPlayerCount[ak];
					var jk = eL.jk,
						aOR = new Uint8Array(9),
						jl = (jk[0] = 0, 1);
					for (ak = 1; ak < 9; ak++) aOQ[ak] && (aOR[ak] = jl, jk[jl++] = ak);
					var eE = p.e3,
						jd = eL.jd;
					aOQ[aOP] ? (aOQ[aOP]--, jd[0] = aOR[aOP]) : eE = 0;
					var aT = 0;
					for (ak = eE; ak < p.jR; ak++) {
						var qc = jk[aT];
						if (aOQ[qc]) aOQ[qc]--, jd[ak] = aOR[qc];
						else if (ak--, 9 <= ++aT) return console.log("error 325")
					}
				}() : this.az();
				! function() {
					for (var gz = p.dS, jm = eL.jm, jn = eL.jn, jo = eL.jo, jd = eL.jd, jk = eL.jk, jW = jk.length, f4 = new Array(jW), ak = 0; ak < jW; ak++) f4[ak] = [];
					for (ak = 0; ak < gz; ak++) f4[jk[jd[ak]]].push(ak);
					for (ak = 1; ak <= jW; ak++) jn[ak] = jn[ak - 1] + f4[ak - 1].length;
					for (ak = 0; ak < jW; ak++)
						for (var jl = f4[ak].length, af = jn[ak], qc = 0; qc < jl; qc++) jm[qc + af] = f4[ak][qc];
					var e3 = p.e3;
					for (ak = 0; ak < jW; ak++)
						for (jl = f4[ak].length, af = jn[ak], qc = 0; qc < jl; qc++)
							if (jm[qc + af] >= e3) {
								jo[ak] = qc;
								break
							}
				}(), ! function() {
					for (var gz = p.dS, jd = eL.jd, eK = eL.eK, jk = eL.jk, ak = 0; ak < gz; ak++) eK[ak] = jk[jd[ak]];
					9 === p.mR && eK.fill(1, gz - a4Z.aOZ[5])
				}()
			}
		}, this.aOE = function() {
			for (var ak = this.jk.length - 1; 0 <= ak; ak--) this.jk[ak] = ak
		}, this.az = function() {
			var a2A = new Uint8Array(p.e3),
				a2B = new Uint8Array(p.e3),
				aOJ = new Uint16Array(8),
				aOK = new Uint16Array(this.jk.length);
			this.aOL(a2A, a2B, aOJ, 1), this.e1(aOJ), this.aOM(aOK, a2A, a2B), this.aON(a2A, a2B, aOK), this.aOO()
		}, this.aOL = function(a2A, a2B, aOQ, aOS) {
			for (var eM, i, aOT, gz = this.jk.length - aOS, eB = new Uint16Array(gz), oM = this.oM, colorsData = p.data.colorsData, ak = p.e3 - 1; 0 <= ak; ak--) {
				for (eM = gz; aOS <= eM; eM--) eB[eM - 1] = Math.abs(4 * (colorsData[ak] >> 12) - oM[eM][0]) + Math.abs(4 * (colorsData[ak] >> 6 & 63) - oM[eM][1]) + Math.abs(4 * (63 & colorsData[ak]) - oM[eM][2]);
				for (aOT = 768, eM = gz - 1; 0 <= eM; eM--) eB[i = (eM + ak) % gz] < aOT && (aOT = eB[i], a2A[ak] = i);
				for (aOQ[a2A[ak]] += 4, aOT = 768, eM = gz - 1; 0 <= eM; eM--) eB[i = (eM + ak) % gz] < aOT && i !== a2A[ak] && (aOT = eB[i], a2B[ak] = i);
				aOQ[a2B[ak]]++
			}
		}, this.e1 = function(aOQ) {
			for (var eM, lX, gz = this.jk.length - 1, ak = gz; 0 <= ak; ak--) this.jk[ak] = ak;
			for (ak = gz - 1; 0 <= ak; ak--) aOQ[ak]++;
			for (ak = 1; ak <= gz; ak++) {
				for (lX = 0, eM = 1; eM < gz; eM++) aOQ[eM] > aOQ[lX] && (lX = eM);
				aOQ[lX] = 0, this.jk[ak] = lX + 1
			}
		}, this.aOM = function(aOK, a2A, a2B) {
			var eM, ml, aT, eI, i, gp, md, aOU = this.jk.length - 1,
				a1b = new Uint16Array(aOU),
				aOV = [],
				aOW = 0,
				mk = [],
				aOX = [];
			loop: for (var ak = 0; ak < p.e3; ak++)
				if (null !== (ml = aa.dZ.mm(fe.mj[ak]))) {
					for (eM = mk.length - 1; 0 <= eM; eM--)
						if (ml === mk[eM]) {
							aOX[eM].push(ak), aOW = Math.max(aOW, aOX[eM].length);
							continue loop
						} mk.push(ml), aOV.push(!1), aOX.push([ak]), aOW = Math.max(aOW, 1)
				}
			for (; 2 < p.jX && aOW > dV.eF(p.e3, p.jX);) p.jX--, p.mR--;
			for (eM = mk.length - 1; 0 <= eM; eM--) {
				for (eI = -1, aT = mk.length - 1; 0 <= aT; aT--) !aOV[aT] && (-1 === eI || aOX[aT].length > aOX[eI].length) && (eI = aT);
				for (aT = aOU - 1; 0 <= aT; aT--) a1b[aT] = 1;
				for (aT = aOX[eI].length - 1; 0 <= aT; aT--) a1b[a2A[aOX[eI][aT]]] += 3, a1b[a2B[aOX[eI][aT]]]++;
				for (ak = aOU - 1; 0 <= ak; ak--) {
					for (i = eI % aOU, aT = aOU - 1; 0 <= aT; aT--) a1b[aT] > a1b[i] && (i = aT);
					for (gp = -1, aT = p.jX; 0 < aT; aT--)
						if (this.jk[aT] === i + 1) {
							gp = aT;
							break
						} if (a1b[i] = 0, -1 !== gp) {
						for (md = 0, aT = p.jX; 0 < aT; aT--) aOK[gp] > aOK[aT] && md++;
						if (md !== p.jX - 1) {
							for (aT = aOX[eI].length - 1; 0 <= aT; aT--) aOK[gp]++, this.jd[aOX[eI][aT]] = gp;
							break
						}
					}
				}
				aOV[eI] = !0
			}
		}, this.aON = function(a2A, a2B, aOK) {
			for (var ak, oa, gz = this.jk.length - 1, border = dV.eF(p.e3, p.jX), aOY = (0 < p.e3 % p.jX && border++, new Uint8Array(1 + gz)), eM = gz; 1 <= eM; eM--) aOY[this.jk[eM]] = eM;
			for (ak = 0; ak < p.e3; ak++) oa = aOY[a2A[ak] + 1], 0 === this.jd[ak] && oa <= p.jX && aOK[oa] < border && (aOK[oa]++, this.jd[ak] = oa);
			for (ak = 0; ak < p.e3; ak++) oa = aOY[a2B[ak] + 1], 0 === this.jd[ak] && oa <= p.jX && aOK[oa] < border && (aOK[oa]++, this.jd[ak] = oa);
			for (eM = p.jX; 1 <= eM; eM--)
				for (ak = p.e3 - 1; 0 <= ak && !(aOK[eM] >= border); ak--) 0 === this.jd[ak] && (aOK[eM]++, this.jd[ak] = eM)
		}, this.aOO = function() {
			for (var ak = p.e3; ak < p.dS; ak++) this.jd[ak] = 1 + ak % p.jX
		}
}

function aAK() {
	var aIS, aOa, yq, aOb, fQ, fR, fontSize, aOc, aOd, aOe, aOf, canvas, fW, yr, aOg;

	function dH(ak) {
		return L(0 === ak ? 316 : 1 === ak ? 317 : 2 === ak ? 318 : 319)
	}

	function aOm() {
		p.e0 ? aOn + 4 * bW.gap + fQ + uh.aOo() > lE.a3 ? gD.drawImage(canvas, 2 * bW.gap + uh.aOo(), aOn + 2 * bW.gap) : gD.drawImage(canvas, bW.gap, aOn + 3 * bW.gap + uh.aOo()) : gD.drawImage(canvas, bW.gap, aOn + 2 * bW.gap)
	}

	function aOh() {
		canvas.width = aIS[0].width + aOe, canvas.height = fQ + aOe, (fW = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aIS[0].width + aOe, fQ + aOe), fW.translate(Math.floor(aOe / 2), Math.floor(aOe / 2)), fW.lineWidth = aOe, fW.fillStyle = 1 === aIS[0].aOl ? aF.bl : aF.be, aOp(), fW.fill(), fW.strokeStyle = 1 === aIS[0].aOl ? aF.bZ :
			aF.aG, aOp(), fW.stroke(), aa.ab.textAlign(fW, 1), aa.ab.textBaseline(fW, 1), fW.fillStyle = 1 === aIS[0].aOl ? aF.bZ : aF.aG, fW.font = fR[0], fW.fillText(dH(aIS[0].aOk), Math.floor(aIS[0].width / 2), Math.floor(.72 * aOc[0] * fQ)), fW
			.font = fR[1], fW.fillText(aIS[0].bE, Math.floor(aIS[0].width / 2), Math.floor((aOc[0] + .48 * aOc[1]) * fQ))
	}

	function aOp() {
		fW.beginPath(), fW.moveTo(aOf, 0), fW.lineTo(aIS[0].width - aOf, 0), fW.lineTo(aIS[0].width, aOf), fW.lineTo(aIS[0].width, fQ - aOf), fW.lineTo(aIS[0].width - aOf, fQ), fW.lineTo(aOf, fQ), fW.lineTo(0, fQ - aOf), fW.lineTo(0, aOf), fW
			.closePath()
	}
	this.aB = function() {
		aOa = 4, yq = aOb = yr = 0, aIS = [], fR = new Array(2), fontSize = new Array(2), (aOc = new Array(2))[0] = .3, aOc[1] = .7, aOd = new Array(4), canvas = document.createElement("canvas"), aOg = j.k + 2e3, this.resize()
	}, this.resize = function() {
		var ak, fS;
		for (fQ = Math.floor((fg.fh.fi() ? .062 : .047) * a5.fj), fontSize[0] = Math.floor(.85 * aOc[0] * fQ), fontSize[1] = Math.floor(.85 * aOc[1] * fQ), fR[0] = aa.ab.fk(1, fontSize[0]), fR[1] = aa.ab.fk(1, fontSize[1]), ak = aOd.length -
			1; 0 <= ak; ak--) aOd[ak] = this.measureText(dH(ak) + "000", fR[0]);
		if (aOe = Math.floor(1 + .05 * fQ), aOf = Math.floor(.2 * fQ), 0 < aIS.length) {
			for (ak = aIS.length - 1; 0 <= ak; ak--) fS = this.measureText(aIS[ak].bE + "00", fR[1]), aIS[ak].width = fS < aOd[ak] ? aOd[ak] : fS;
			aOh()
		}
	}, this.az = function() {
		0 !== aOa && (4 === aOa ? j.k > aOg && (aOa = 0, 1 === p.q) && p7.a64(dx.s0.s1[dx.nd].name, 3, 1, 9) : (1 === aOa ? (0 === yq && (aOh(), yq = 1e-4), 1 <= (yq += .002 * (j.k - yr)) && (aOb = 0, aOa = 2, yq = 1), j.a0 = !0) : 2 === aOa ? ((
			aOb += (j.k - yr) / 1e3) > aIS[0].kn || 1 < aOb && 1 < aIS.length) && (aOa = 3) : 3 === aOa && ((yq -= .002 * (j.k - yr)) <= 0 && (yq = 0, aIS.shift(), aOa = 0 < aIS.length ? 1 : 0), j.a0 = !0), yr = j.k))
	}, this.measureText = function(bE, fR) {
		return gD.font = fR, Math.floor(gD.measureText(bE).width)
	}, this.j1 = function(u4, ak) {
		this.a64(fe.mb[u4], ak, 1, 0 === ak ? 3 : 7)
	}, this.a64 = function(bE, aOk, aOl, kn) {
		var fS;
		bE.length && (fS = (fS = this.measureText(bE + "00", fR[1])) < aOd[aOk] ? aOd[aOk] : fS, aIS.push({
			bE: bE,
			width: fS,
			aOk: aOk,
			aOl: aOl,
			kn: kn
		}), 0 === aOa) && (yq = 0, aOa = 1, yr = j.k)
	}, this.g9 = function() {
		0 !== aOa && 0 !== yq && (yq < 1 ? (gD.globalAlpha = yq, aOm(), gD.globalAlpha = 1) : aOm())
	}
}

function sl() {
	function aOs(player, rG) {
		rG = pv.a4z(ao.aD.og[rG]), rG = eu.ei(pv.qA(rG));
		return !!ao.iA.qf(player, rG)
	}

	function aOq(player) {
		return ao.sg.a82(player) && !ao.sj.xD()
	}
	this.qR = function(player, aU) {
		return !!aOq(player) && -1 !== (aU = function(player, aU) {
			for (var gz = ao.aD.om, og = ao.aD.og, oh = ao.aD.oh, r8 = pv.aFT(), r9 = -1, ak = 0; ak < gz; ak++) {
				var aX = pv.aDS(aU, pv.a4z(og[ak]));
				aX < r8 && aa.al.rf(player, oh[ak] >> 3) && (r8 = aX, r9 = ak)
			}
			return r9
		}(player, aU)) && !!aOs(player, aU) && (eC.qP[3] = ao.aD.ap[aU], !0)
	}, this.aCp = function(player, rD) {
		return !!aOq(player) && !!ao.iA.rC(rD) && !!aOs(player, eC.qP[2])
	}, this.aHo = function(player, rD, aOt) {
		return !! function(player, rD, aOt) {
			if (aOq(player) && ao.iA.rC(rD)) {
				rD = eC.qP[2];
				if (aa.al.rf(player, ao.aD.oh[rD] >> 3)) {
					if (function(player, rG) {
							return ao.iA.rF(player, rG) && (eC.eB[0] = ao.sj.xF(ao.aD.rI[rG]), eC.qP[1] = 6, !0)
						}(player, rD)) return 1;
					var aHp = pv.a4z(ao.aD.og[rD]),
						xA = ao.iA.qi(player, aHp);
					if (-1 !== xA) {
						xA = pv.aDS(xA, aHp);
						if (!(aOt && 120 < xA)) {
							aOt = function(rG, aOx, aHp) {
								var rH = ao.aD.rI[rG],
									rG = ao.aD.aDR[rG],
									aOz = pv.aDS(aHp, rH[rG + 1]);
								if (aOx <= aOz) return ao.iA.rJ(aHp, rH[rG + 1], aOz, aOx);
								for (var aX = aOx - aOz, gz = rH.length - 1, ak = rG + 1; ak < gz; ak++) {
									var aP0 = pv.aDS(rH[ak], rH[ak + 1]);
									if (aX <= aP0) return ao.iA.rJ(rH[ak], rH[ak + 1], aP0, aX);
									aX -= aP0
								}
								return rH[gz]
							}(rD, xA, aHp);
							if (ao.sa.x6(player, aOt, 1)) return eC.qP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, rD, aOt) && (player = eC.qP[2], ao.aD.aDJ[player] = 64 + ao.aD.aDJ[player] % 64, ao.sm.j1(rD, ao.aD.aDV), !0)
	}
}

function aAN() {
	var aP1, aP2, aP3, aP4, aP5, aP6, aP7, aP8, aP9, aPA, aPB, aPC, aPD, aPE, aPF, aPG, aPH, aPI, aPJ, aPK, aPL, aPM, position, aPN, aPO, aPP, aPQ, aPR, aPS = 1,
		aPT = 1,
		aPU = "";
	var leaderboardHasChanged = true;
	this.playerPos = p.an;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => a7b[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(a7b[p.an]);
	}

	function aPW() {
		aP7.clearRect(0, 0, aP1, aOn),
			aP7.fillStyle = aPR ? aF.ca : aF.cW,
			aP7.fillRect(0, 0, aP1, aPC),
			aP7.fillStyle = aF.bd,
			aP7.fillRect(0, aPC, aP1, aOn - aPC);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			a7b[p.an]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aPM = -1;
		if (__fx.leaderboardFilter.enabled && aPM >= __fx.leaderboardFilter.filteredLeaderboard.length) aPM = -1;
		playerPos >= position && aPY(playerPos - position, aF.c5),
			0 !== a7b[p.an] && 0 === position && aPY(0, aF.cd),
			-1 !== aPM && aPY(aPM, aF.bh),
			aP7.fillStyle = aF.bd,
			//console.log("drawing", aPM),
			aP7.clearRect(0, aOn - __fx.leaderboardFilter.tabBarOffset, aP1, __fx.leaderboardFilter.tabBarOffset);
		aP7.fillRect(0, aOn - __fx.leaderboardFilter.tabBarOffset, aP1, __fx.leaderboardFilter.tabBarOffset);
		aP7.fillStyle = aF.aG,
			aP7.fillRect(0, aPC, aP1, 1),
			aP7.fillRect(0, aOn - __fx.leaderboardFilter.tabBarOffset, aP1, 1),
			__fx.leaderboardFilter.drawTabs(aP7, aP1, aOn - __fx.leaderboardFilter.tabBarOffset, aF.c5),
			aP7.fillRect(0, 0, aP1, bW.lg),
			aP7.fillRect(0, 0, bW.lg, aOn),
			aP7.fillRect(aP1 - bW.lg, 0, bW.lg, aOn),
			aP7.fillRect(0, aOn - bW.lg, aP1, bW.lg), aP7.font = aP2, aa.ab.textBaseline(aP7, 1), aa.ab.textAlign(aP7, 1), aP7.fillText(aPU, Math.floor((aP1 + aPC - 22) / 2), Math.floor(aPA + aP3 / 2));
		__fx.playerList.drawButton(aP7, 12, 12, aPC - 22);
		var ju, gq = playerPos < position + aP5 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aP5)
				position = (result.length > aP5 ? result.length : aP5) - aP5;
			//if (position >= result.length) position = result.length - 1;
			for (aP7.font = aP4, aa.ab.textAlign(aP7, 0), ju = aP5 - gq; 0 <= ju; ju--) {
				const pos = result[ju + position];
				if (pos !== undefined)
					aPZ(re[pos]), aPa(ju, pos, re[pos]);
			}
			for (aa.ab.textAlign(aP7, 2), ju = aP5 - gq; 0 <= ju; ju--) {
				const pos = result[ju + position];
				if (pos !== undefined)
					aPZ(re[pos]), aPb(ju, re[pos]);
			}
		} else {
			for (aP7.font = aP4, aa.ab.textAlign(aP7, 0), ju = aP5 - gq; 0 <= ju; ju--)
				aPZ(re[ju + position]), aPa(ju, ju + position, re[ju + position]);
			for (aa.ab.textAlign(aP7, 2), ju = aP5 - gq; 0 <= ju; ju--)
				aPZ(re[ju + position]), aPb(ju, re[ju + position]);
		}
		2 == gq && (aPZ(p.an), aa.ab.textAlign(aP7, 0), aPa(aP5 - 1, a7b[p.an], p.an), aa.ab.textAlign(aP7, 2), aPb(aP5 - 1, p.an)), 0 === position && (gq = .7 * aPD / i4.get(4).height, aP7.setTransform(gq, 0, 0, gq, Math.floor(aPE + .58 * aPD + .5 *
			gq * i4.get(4).width), Math.floor(aPA + aP3 + .4 * aPD)), aP7.imageSmoothingEnabled = !0, aP7.drawImage(i4.get(4), -Math.floor(i4.get(4).width / 2), -Math.floor(i4.get(4).height / 2)), aP7.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aPZ(player) {
		p.e0 && (aP7.fillStyle = eL.aO8[eL.eK[player]])
	}

	function aPY(ak, aPd) {
		aP7.fillStyle = aPd, ak = aP5 - 1 < ak ? aP5 - 1 : ak;
		aPd = Math.floor((ak === aP5 - 1 ? 2 : 0 === ak ? 1.15 : 1) * aPD), aPd = ak === aP5 - 2 ? Math.floor(aPC + 9.15 * aPD) - Math.floor(aPC + 8.15 * aPD) : aPd;
		aP7.fillRect(0, Math.floor(aPC + (ak + (0 === ak ? 0 : .15)) * aPD), aP1, aPd)
	}

	function aPa(aKu, t5, ak) {
		aP7.fillText(aPI[t5], aPE, Math.floor(aPA + aP3 + (aKu + .5) * aPD)), 1 === fe.gC[ak] && (aP7.font = "italic " + aP4);
		t5 = Math.floor(aPA + aP3 + (aKu + .5) * aPD);
		aP7.fillText(fe.mb[ak], aPF, t5), 0 !== fe.gC[ak] && (aP7.font = aP4), ak < p.e3 && 2 !== fe.gC[ak] || aP7.fillRect(aPF, t5 + .35 * aPS, aPH[ak], Math.max(1, .1 * aPS))
	}

	function aPb(aKu, ak) {
		aP7.fillText(fe.jQ[ak], aPG, Math.floor(aPA + aP3 + (aKu + .5) * aPD))
	}
	this.aB = function() {
		var ak;
		for (aPQ = aPP = aPN = 0, aPR = aPO = !1, aPM = -1, aP5 = fg.fh.fi() ? 6 : 10, aPT = (position = 0) === (aPT = aK.f4.data[11].value) ? 10 : 1 === aPT ? 5 : 1, aPL = !1, aPJ = new Uint16Array(aP5 + 1), aPK = new Uint32Array(aP5 + 1), aP9 =
			p.dS, re = new Uint16Array(aP9), a7b = new Uint16Array(aP9), ak = aP9 - 1; 0 <= ak; ak--) re[ak] = ak, a7b[ak] = ak;
		this.resize(!0), aPH = new Uint16Array(p.dS);
		var aPV = Math.floor(aP1 - aPF - aPE - aP8);
		for (aPI = new Array(p.dS), aP7.font = aP4, ak = p.dS - 1; 0 <= ak; ak--) aPI[ak] = ak + 1 + ".", fe.mb[ak] = aa.fW.aFv(fe.mj[ak], aP4, aPV), aPH[ak] = Math.floor(aP7.measureText(fe.mb[ak]).width);
		aPW()
	}, this.resize = function(aB) {
		if (aOn = fg.fh.fi() ? (aP1 = Math.floor(.335 * a5.fj), Math.floor(aP5 * aP1 / 8)) : (aP1 = Math.floor(.27 * a5.fj), Math.floor(aP5 * aP1 / 10)), aP1 = Math.floor(.97 * aP1), (aP6 = document.createElement("canvas")).width = aP1, aP6
			.height = aOn, aP7 = aP6.getContext("2d", {
				alpha: !0
			}), aPA = .025 * aP1, aP3 = .16 * aP1, aPB = 0 * aP1, aPC = Math.floor(.45 * aPA + aP3), aPD = (aOn - aP3 - 2 * aPA - aPB) / aP5,
			aP6.height = aOn += aPD, __fx.leaderboardFilter.tabBarOffset = Math.floor(aPD * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aOn - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aP1,
			aP2 = aa.ab.fk(1, Math.floor(.55 * aP3)), aPS = Math.floor((fg.fh.fi() ? .67 : .72) * aPD), aP4 = aa.ab.fk(0, aPS), aP7.font = aP4, aPE = Math.floor(.04 * aP1), aPF = Math.floor((fg.fh.fi() ? .195 : .18) * aP1), aP8 = Math.floor(aP7
				.measureText("00920600").width), aP7.font = aP2, aPG = aP1 - aPE, !aB) {
			aP7.font = aP4;
			for (var ak = p.dS - 1; 0 <= ak; ak--) aPH[ak] = Math.floor(aP7.measureText(fe.mb[ak]).width);
			aPW()
		}
		aPU = aa.fW.aFv(L(320), aP2, .96 * aP1)
	}, this.fq = function() {
		return aP1
	}, this.fs = function(a6U, aPX) {
		(aPX || aPL && (a6U || j.b2() % aPT == 0)) && (aPL = !1, aPW())
	}, this.az = function() {
		! function() {
			for (var ju = aP9 - 1; 0 <= ju; ju--) 0 === fe.gA[re[ju]] && ! function(ju) {
				var aPl = re[ju];
				aP9--;
				for (var ak = ju; ak < aP9; ak++) re[ak] = re[ak + 1], a7b[re[ak]] = ak;
				re[aP9] = aPl, a7b[re[aP9]] = aP9
			}(ju)
		}();
		for (var aPj, s = aP9 - 1, ju = 0; ju < s; ju++) fe.jQ[re[ju]] < fe.jQ[re[ju + 1]] && (aPj = re[ju], re[ju] = re[ju + 1], re[ju + 1] = aPj, a7b[re[ju]] = ju, a7b[re[ju + 1]] = ju + 1);
		! function() {
			for (var h4 = aPL, gq = (aPL = !0, a7b[p.an] >= aP5 - 1 ? aP5 - 2 : aP5 - 1), ak = gq; 0 <= ak; ak--)
				if (aPJ[ak] !== re[ak] || aPK[ak] !== fe.jQ[re[ak]]) return;
			(gq != aP5 - 2 || aPJ[aP5] === a7b[p.an] && aPK[aP5] === fe.jQ[p.an]) && (aPL = h4)
		}();
		for (var ak = aP5 - 1; 0 <= ak; ak--) aPJ[ak] = re[ak], aPK[ak] = fe.jQ[re[ak]];
		aPJ[aP5] = a7b[p.an], aPK[aP5] = fe.jQ[p.an];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.lP = function(a2, a3) {
		if (aPm(a2, a3)) {
			if (__fx.utils.isPointInRectangle(a2, a3, bW.gap + 12, bW.gap + 12, aPC - 22, aPC - 22)) __fx.playerList.display(fe.mj);
			else {
				if (a3 - bW.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(a2 - bW.gap);
				a2 = aPo(a3);
				0 <= a2 ? (aPN = j.k, aPO = !0, aPP = aPQ = a2, tC.a9r() && (a2 = aFI(-1, aPQ, aP5), aPM !== (a2 = a2 === aP5 ? -1 : a2)) && (aPM = a2, aPW(), j.a0 = !0)) : (aPR && (aPR = !1, aPW(), j.a0 = !0), aC.dT(10, 0, new aCt({
					aCv: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aPW(), j.a0 = !0
	};

	function aPo(a3) {
		return (a3 -= bW.gap + aPC) < 0 ? Math.floor(a3 / aPD) - 1 : a3 < (aP5 - 1) * aPD ? Math.floor(a3 / aPD) : a3 < aOn - aPC ? aP5 - 1 : (a3 -= aOn - aPC, aP5 + Math.floor(a3 / aPD))
	}

	function aPm(a2, a3) {
		return a2 >= bW.gap && a2 < bW.gap + aP1 && a3 >= bW.gap && a3 < bW.gap + aOn
	}
	this.l7 = function(a2, a3) {
		var h4, aPn;
		if (__fx.utils.isPointInRectangle(a2, a3, bW.gap + 12, bW.gap + 12, aPC - 22, aPC - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(a2, a3, bW.gap, bW.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), a2 - bW.gap)) return aPn = aPo(a3), a2 = aPm(a2, a3), a3 = !(!(aPn < 0 && a2) || tC.a9r()), aPO ? (h4 = position, (position = aFI(0, position += aPP - aPn, p.dS - aP5)) !== h4 ? (aPR = a3,
			aPn = aFI(-1, aPP = aPn, aP5), aPM = aPn = aPn !== aP5 && a2 ? aPn : -1, aPW(), j.a0 = !0) : aPR !== a3 && (aPR = a3, aPW(), j.a0 = !0), !0) : (aPn = (aPn = aFI(-1, aPn, aP5)) === aP5 || !a2 || tC.a9r() ? -1 : aPn, (aPM !==
			aPn || aPR !== a3) && (aPM = aPn, aPR = a3, aPW(), j.a0 = !0))
	}, this.a3N = function(a2, a3) {
		if (!aPO) return !1;
		aPO = !1;
		var aPn = aPo(a3);
		var isEmptySpace = false;
		return tC.a9r() && -1 !== aPM && (aPM = -1, aPW(), j.a0 = !0), j.k - aPN < 350 && aPQ === aPn && -1 !== (aPn = (aPn = aFI(-1, aPn, aP5)) !== aP5 && aPm(a2, a3) ? aPn : -1) && (a2 = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				re[__fx.leaderboardFilter.filteredLeaderboard[aPn + position] ?? (isEmptySpace = true, a7b[p.an])]) : re[aPn + position]), aPn === aP5 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : a7b[p.an]) >=
			position + aP5 - 1 && (a2 = p.an), !isEmptySpace && p.e0 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(a2, fe.mj, p.lI), 0 !== fe.gA[a2] && !isEmptySpace) && r.a4w(a2, 800, !1, 0), !0
	}, this.vM = function(a2, a3, deltaY) {
		var aPr;
		return !(aPO || p.lZ || (aPr = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aPm(a2, a3)) || (a2 = (a2 = aFI(-1, aPo(a3), aP5)) === aP5 || tC.a9r() ? -1 : a2, 0 < deltaY ? position < p.dS - aP5 && (position += Math.min(p.dS - aP5 -
			position, aPr), aPM = a2, aPW(), j.a0 = !0) : 0 < position && (position -= Math.min(position, aPr), aPM = a2, aPW(), j.a0 = !0), 0))
	}, this.g9 = function() {
		gD.drawImage(aP6, bW.gap, bW.gap)
	}
}

function a8v() {
	var d3, d4, d5, bP;

	function d8() {
		dC(), 1 !== p.data.colorsType && (p.data.colorsData = null), aC.dD()[19] = null, aC.dE()
	}

	function aPs() {
		dC(), aC.dT(21)
	}

	function dC() {
		1 === p.data.gameMode ? p.b8.lp() : 0 === p.data.gameMode && 1 === p.data.colorsType && aa.dF.dG(d5.dH(), p.data.colorsData, 262143)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, bP = [new d7("⬅️ " + L(1), d8)], 1 === p.data.gameMode && bP.push(new d7(L(321), aPs, 1, 1)), d3 = new d6(L(25), bP), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), 0 === p.data.gameMode && (dM.dP(new dQ({
			dR: [L(26), L(5)],
			value: p.data.colorsType
		}, function(aJ) {
			dC(), p.data.colorsType = aJ, 1 !== p.data.colorsType || p.data.colorsData && p.data.colorsData.length === p.dS || (p.data.colorsData = new Uint32Array(p.dS)), aC.dT(21)
		})), dM.dU(new a1M));
		dM.dU(new vu({
			value: p.data.selectableColor
		}, L(322), function(value) {
			p.data.selectableColor = value
		})), dI.push(dM)
	}(bP = []), 0 === p.data.gameMode ? 1 === p.data.colorsType && function(dI) {
		var dM = new dN;
		dM.dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.colorsData, 1)), dM.dU(d5), dI.push(dM)
	}(bP) : (p.b8.lp(), bP.push(function() {
		var dM = new dN;
		dM.dO(L(23));
		for (var ak = 0; ak < eL.ma.length; ak++) {
			var qc = (ak + 1) % eL.ma.length,
				i = dM.mF((0 == qc ? "" : "Team ") + eL.ma[qc]);
			ak && (i.style.marginTop = "0.5em"), dM.dU(new a7({
				aJ: -1,
				value: p.data.teamPlayerCount[qc]
			}, 1, 0, function(i) {
				d3.dc[1].a1U(0);
				var playerCount = dV.dW(Math.floor(i.target.value), 0, 512);
				i.target.value = playerCount, p.data.teamPlayerCount[i.target.aPt] = playerCount
			})).i.aPt = qc
		}
		return dM
	}())), bP))
}

function aB5() {
	function aPu(i) {
		var eB, i = i.target.files;
		i && 0 < i.length && (i = i[0], "json" === (eB = i.name.split("."))[eB.length - 1].toLowerCase()) && ((eB = new FileReader).onload = aQ1, eB.readAsText(i))
	}

	function aQ1(i) {
		var aQ4;
		p.q || (i = JSON.parse(i.target.result), aQ4 = p.data = new aHB, aQ5(i, aQ4, "mapType", 0, 2), aQ5(i, aQ4, "mapProceduralIndex", 0, 255), aQ5(i, aQ4, "mapRealisticIndex", 0, 255), aQ5(i, aQ4, "mapSeed", 0, 16383), function(aQ3, aQ4, gq,
			max) {
				aQ3 = aQ3[gq];
				aQ4[gq] = aQB(aQ3) ? aQ3.slice(0, max) : aQ4[gq]
			}(i, aQ4, "mapName", 20), function(aQ3, aQ4, gq) {
				var aH6;
				2 === aQ4.mapType && (!aQB(aQ3 = aQ3[gq]) || aQ3.length <= 20 ? aQ4.mapType = 0 : ((aH6 = new Image).onload = function() {
					ls.aw.aH5(aH6, 1), aH6.onload = null, aH6 = null
				}, aH6.src = aQ3))
			}(i, aQ4, "canvas"), aQ5(i, aQ4, "passableWater", 0, 1), aQ5(i, aQ4, "passableMountains", 0, 1), aQ5(i, aQ4, "playerCount", 1, 512), aQ5(i, aQ4, "humanCount", 1, 1), aQ5(i, aQ4, "selectedPlayer", 0, 0), aQ5(i, aQ4, "gameMode", 0, 1),
			aQ5(i, aQ4, "playerMode", 0, 0), aQ5(i, aQ4, "battleRoyaleMode", 0, 0), aQ5(i, aQ4, "numberTeams", 0, 8), aQ5(i, aQ4, "isZombieMode", 0, 0), aQ5(i, aQ4, "isContest", 0, 0), aQ5(i, aQ4, "isReplay", 0, 0), aQ8(i, aQ4, "elo", 16, 2,
				16383), aQ5(i, aQ4, "colorsType", 0, 1), aQ5(i, aQ4, "colorsPersonalized", 0, 1), aQ8(i, aQ4, "colorsData", 32, 512, 262143), aQ5(i, aQ4, "selectableColor", 0, 1), aQ8(i, aQ4, "teamPlayerCount", 16, 9, 512), aQ5(i, aQ4,
				"neutralBots", 0, 1), aQ5(i, aQ4, "botDifficultyType", 0, 3), aQ5(i, aQ4, "botDifficultyValue", 0, 15), aQ8(i, aQ4, "botDifficultyTeam", 8, 9, 15), aQ8(i, aQ4, "botDifficultyData", 8, 512, 15), aQ5(i, aQ4, "spawningType", 0, 2),
			aQ5(i, aQ4, "spawningSeed", 0, 16383), aQ8(i, aQ4, "spawningData", 16, 1024, 4095), aQ5(i, aQ4, "selectableSpawn", 0, 1), aQ5(i, aQ4, "playerNamesType", 0, 2),
			function(aQ3, aQ4, gq, size, max) {
				var aKO = aQ3[gq];
				if (Array.isArray(aKO)) {
					for (var aKP = new Array(size), gz = Math.min(aKO.length, size), ak = 0; ak < gz; ak++) aKP[ak] = aQB(aKO[ak]) ? aKO[ak].slice(0, max) : "";
					aKP.fill("", gz), aQ4[gq] = aKP
				}
			}(i, aQ4, "playerNamesData", 512, 20), aQ5(i, aQ4, "selectableName", 0, 1), aQ5(i, aQ4, "aIncomeType", 0, 2), aQ5(i, aQ4, "aIncomeValue", 0, 255), aQ8(i, aQ4, "aIncomeData", 8, 512, 255), aQ5(i, aQ4, "tIncomeType", 0, 2), aQ5(i, aQ4,
				"tIncomeValue", 0, 255), aQ8(i, aQ4, "tIncomeData", 8, 512, 255), aQ5(i, aQ4, "iIncomeType", 0, 2), aQ5(i, aQ4, "iIncomeValue", 0, 255), aQ8(i, aQ4, "iIncomeData", 8, 512, 255), aQ5(i, aQ4, "sResourcesType", 0, 2), aQ5(i, aQ4,
				"sResourcesValue", 0, 2047), aQ8(i, aQ4, "sResourcesData", 16, 512, 2047), aC.gS(), aC.aD.mJ[0] = 0, aC.dT(19))
	}

	function aQ5(aQ3, aQ4, gq, min, max) {
		aQ3 = aQ3[gq];
		aQ4[gq] = "number" == typeof aQ3 && min <= aQ3 && aQ3 <= max ? Math.floor(aQ3) : aQ4[gq]
	}

	function aQB(bE) {
		return "string" == typeof bE
	}

	function aQ8(aQ3, aQ4, gq, aQC, size, max) {
		var aKO = aQ3[gq];
		if (Array.isArray(aKO)) {
			for (var aKP = new(8 === aQC ? Uint8Array : 16 === aQC ? Uint16Array : Uint32Array)(size), gz = Math.min(aKO.length, size), ak = 0; ak < gz; ak++) aKP[ak] = dV.dW(aKO[ak], 0, max);
			aQ4[gq] = aKP
		}
	}
	this.mL = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aPu, input.click()
	}, this.mM = function() {
		for (var aPx, vY, a7S = p.data, keys = Object.keys(a7S), aPv = {}, ak = 0; ak < keys.length; ak++) {
			var key = keys[ak];
			a7S[key] instanceof Uint8Array || a7S[key] instanceof Uint16Array || a7S[key] instanceof Uint32Array ? aPv[key] = Array.from(a7S[key]) : aPv[key] = a7S[key]
		}
		aPv.canvas = 2 === aPv.mapType && aPv.canvas ? aPv.canvas.toDataURL() : null, aPx = aPv, aPx = JSON.stringify(aPx, null, 2), aPx = new Blob([aPx], {
			type: "application/json"
		}), (vY = document.createElement("a")).href = URL.createObjectURL(aPx), vY.download = "tt_scenario.json", vY.click()
	}
}

function aA9() {
	this.eF = function(ju, eM) {
		return Math.floor((ju + .5) / eM)
	}, this.aQD = function(ju, eM) {
		return Math.floor(ju * (eM + .5))
	}, this.sqrt = function(eH) {
		return ~~Math.sqrt(eH + .5)
	}, this.pow = function(i) {
		return Math.floor(Math.pow(2, i) + .5)
	}, this.dW = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aQE = function(nI, nK, nM) {
		return Math.max(Math.min(nI, nK), nM)
	}, this.aQF = function(aQG, aQH, a2, a3) {
		a2 -= aQG, aQG = a3 - aQH, a3 = 0;
		return 0 == a2 ? a3 = 0 <= aQG ? Math.PI : 0 : (a3 = Math.atan(aQG / a2), a3 += 0 < a2 ? .5 * Math.PI : 1.5 * Math.PI), a3
	}, this.log2 = function(eH) {
		return Math.floor(!!eH * (1 + Math.log2(eH + .5)))
	}, this.log10 = function(eH) {
		return Math.floor(Math.log10(eH + .5))
	}, this.rY = function(oW, oX, aQJ, aQK, aQL) {
		return aQJ - aQL < oW && oW < aQJ + aQL && aQK - aQL < oX && oX < aQK + aQL
	}, this.jt = function(aQM, aQN) {
		return aQM * aQM + aQN * aQN
	}
}

function aAb() {
	var aQO;
	this.aOZ = null, this.aQP = 0, this.aB = function() {
		aQO = [], 9 === p.mR && this.aQQ()
	}, this.aQQ = function() {
		this.aOZ = [0, 0, 0, 0, 0, 0];
		for (var aQR = [256, 227, 170, 148, 100, this.aQP = 0, 0, 0], aOB = [0, 8, 24, 30, 46, 70, 256, 333], aQS = [0, 0, 3, 7, 14, 22, 256, 179], fQ = p.e3, ak = 1; ak < aQR.length; ak++)
			if (fQ <= aOB[ak]) {
				this.aQP = aQR[ak - 1] - dV.eF((fQ - aOB[ak - 1]) * (aQR[ak - 1] - aQR[ak]), aOB[ak] - aOB[ak - 1]), this.aOZ[5] = aQS[ak - 1] - dV.eF((fQ - aOB[ak - 1]) * (aQS[ak - 1] - aQS[ak]), aOB[ak] - aOB[ak - 1]), this.aOZ[0] = p.dS - fQ -
					this.aQP - this.aOZ[5];
				break
			} p.aFp = p.dS - p.e3, p.data.numberTeams = (0 < p.e3) + (0 < p.aFp), p.data.playerCount = p.jR = p.e3 + p.aFp, p.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, p.e3 + this.aQP, p.aFp - this.aQP]), p.b8.lp()
	}, this.aQT = function(player) {
		aQO.push({
			player: player,
			jl: 14 + eG.xT(20)
		})
	}, this.az = function() {
		if (9 === p.mR)
			for (var ak = aQO.length - 1; 0 <= ak; ak--) --aQO[ak].jl <= 0 && (j7.yC(aQO[ak].player, 0, a9y.iD.a22 + a9y.iD.a24), aQO.splice(ak))
	}
}

function a8q() {
	var hT, vk, dI;
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), vk.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(L(323), [new d7("⬅️ " + L(1), function() {
		aC.un(13)
	})]), vk = new d9(hT.dA, ((dI = []).push(function() {
		var dM = new dN,
			a1A = (dM.dO(L(324)), dM.vp(L(325)), new d7(L(104), function() {
				aK.aL.aM(130, 0), aC.aD.aJb()
			}, 0, 0, 1)),
			vy = new a7(aK.f4.data[126], 0, function() {
				a1A.button.click()
			});
		return dM.dU(vy), vy.i.placeholder = "a,b,c", vy.i.style.marginTop = "0.5em", dM.dU(new m8([a1A.button])), dM
	}()), dI.push(function() {
		var dM = new dN,
			a1A = new d7(L(104), function() {
				aK.aL.aM(130, 1), aC.aD.aJb()
			}, 0, 0, 1),
			a1B = new a7(aK.f4.data[129], 1, function() {
				a1B.i.focus()
			}),
			a1C = new a7(aK.f4.data[128], 1, function() {
				a1A.button.click()
			});
		return dM.dO(L(102)), dM.dU(a1C), a1C.i.style.marginBottom = "0.5em", dM.dO(L(103)), dM.dU(a1B), dM.dU(new m8([a1A.button])), dM
	}()), dI.push(function() {
		var dM = new dN;
		return dM.dO(L(326)), aK.f4.data[125].dR = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], dM.dP(new dQ(aK.f4.data[125])), dM
	}()), dI.push(function() {
		var dM = new dN;
		return dM.dO(L(327)), dM.dU(new vu(aK.f4.data[127], L(328))), dM
	}()), dI))
}

function aA8() {
	"function" != typeof Math.log2 && (Math.log2 = function(a2) {
		return Math.log(a2) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(a2) {
		return Math.log(a2) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(a2) {
		return 0 < a2 ? 1 : a2 < 0 ? -1 : 0
	})
}

function gY() {
	this.size = 0, this.aJ = 0, this.gd = null, this.aB = function(gd) {
		this.aJ = 0, this.gd = gd, this.size = gd.length
	}, this.gZ = function(aQY) {
		return this.aB(new Uint8Array(this.n5(aQY))), this.gd
	}, this.hn = function() {
		this.gd = null
	}, this.ga = function(size, p8) {
		for (var gd = this.gd, s = this.aJ + size - 1, ak = this.aJ; ak <= s; ak++) gd[ak >> 3] |= (p8 >> s - ak & 1) << 7 - (7 & ak);
		this.aJ += size, this.aJ > 8 * this.size && console.error("Wrapper Overflow")
	}, this.y9 = function(size, p8) {
		var eM = size >> 1,
			eI = 1 << eM;
		this.ga(size - eM, dV.eF(p8, eI)), this.ga(eM, p8 % eI)
	}, this.aQZ = function(size) {
		for (var gd = this.gd, s = this.aJ + size, ak = this.aJ; ak < s; ak++) gd[ak >> 3] &= 255 ^ 128 >>> (7 & ak)
	}, this.n5 = function(aQY) {
		return aQY + 7 >> 3
	}, this.aQa = function(eB, eE, s, aQb) {
		for (var ak = eE; ak < s; ak++) this.ga(aQb, eB[ak])
	}
}

function aKo() {
	this.s2 = function() {
		return 69
	}, this.lt = function() {
		var fS = window.screen.width,
			fQ = window.screen.height;
		n4.ga(26, (fS * fQ + fQ) % 67108864), n4.ga(22, 0), n4.ga(21, 0)
	}
}

function at() {
	this.nH = null, this.nJ = null, this.nL = null, this.nN = null, this.nP = null, this.nO = null, this.ut = "";
	var aQc = 0;
	this.aB = function() {
		this.nH = [], this.nJ = [], this.nL = [], this.nN = [], this.nP = [0], this.nO = [0], aQc = 0, this.ut = ""
	}, this.aKZ = function(id, nI, nK, nM) {
		p.ay || 2 === p.q || (0 === this.nP[aQc] && (this.nO[aQc] ? (this.nP.push(1), this.nO.push(0), aQc++) : this.nP[aQc] = 1), this.nH.push(id), this.nJ.push(nI), this.nL.push(void 0 === nK ? 0 : nK), this.nN.push(void 0 === nM ? 0 : nM),
			this.nO[aQc]++)
	}, this.az = function() {
		0 === this.nP[aQc] ? this.nO[aQc]++ : (this.nP.push(0), this.nO.push(0), aQc++)
	}
}

function aAW() {
	this.qC = new aMe
}

function aAa() {
	var aQd, aQe, aQf;
	this.aB = function() {
		aQd =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQe =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQf = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aCi = ["K ", " Y", "E ", " Z", " z", " s", "S "], aCj = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], ak = aQd.length - 1; 0 <= ak; ak--)
			for (var ju = aCi.length - 1; 0 <= ju; ju--) aQd[ak] = aQd[ak].replace(aCi[ju], aCj[ju]);
		if (__fx.settings.realisticNames) aQd = realisticNames;
	}, this.aJT = function() {
		var gz = p.e3,
			mb = fe.mb,
			mj = fe.mj,
			playerNamesData = p.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < gz)
			for (var ak = 0; ak < gz; ak++) mb[ak] = mj[ak] = "Player " + eG.xT(1e3);
		else
			for (ak = 0; ak < gz; ak++) mb[ak] = mj[ak] = playerNamesData[ak]
	}, this.gZ = function() {
		if (9 === p.mR) {
			for (var aj = eG.random(), aQl = aQf, aQm = aQe, ip = mG.ip, gz = aQl.length, af = p.data.teamPlayerCount[7], mb = fe.mb, mj = fe.mj, ak = af - 1; ak >= p.e3; ak--) mb[ak] = mj[ak] = aQl[(ak + aj) % gz];
			for (gz = aQm.length - 1, ak = af; ak < p.dS; ak++) mb[ak] = mj[ak] = aQm[ip[ak] ? gz : ak % gz]
		} else(2 === p.data.playerNamesType ? function() {
			for (var gz = p.dS, mb = fe.mb, mj = fe.mj, playerNamesData = p.data.playerNamesData, ak = p.e3; ak < gz; ak++) mb[ak] = mj[ak] = playerNamesData[ak]
		} : 1 === p.data.playerNamesType ? function() {
			for (var mb = fe.mb, mj = fe.mj, ak = p.e3; ak < p.dS; ak++) mb[ak] = mj[ak] = "Bot " + eG.xT(1e3)
		} : function() {
			for (var aQn = aQd, gz = aQn.length, aj = eG.random(), mb = fe.mb, mj = fe.mj, ak = p.e3; ak < p.dS; ak++) mb[ak] = mj[ak] = aQn[(ak + aj) % gz]
		})()
	}
}

function aQo() {
	function aQz() {
		dx.s7.az()
	}

	function aR3(g6, aR2) {
		0 < aR2 && (dx.s8[g6] += aR2, dx.s8[g6 + 1] += aR2, dx.s8[g6 + 2] += aR2)
	}

	function ee(g6) {
		return dx.s8[g6 + 2] > dx.s8[g6] && dx.s8[g6 + 2] > dx.s8[g6 + 1]
	}
	this.ku = -1, this.uS = 0, this.aQp = 0, this.aQq = 8, this.aQr = 32, this.aQs = 8, this.aQt = 32, this.aQu = [0, 0], this.dz = [0, 0, 0, 0], this.sT = null, this.aQv = !0, this.aQw = !1, this.aQx = function() {
		-1 !== this.ku && clearTimeout(this.ku), this.ku = -1, this.sT = null, wb.aKA()
	}, this.aB = function() {
		7 === b6.hy() || this.aQw || (this.aQv = !0, this.uS = 0, this.aQp = 1, this.aQu = [dx.s0.s1[dx.nd].sN[0], dx.s0.s1[dx.nd].sO[0]], this.dz = [dx.s0.s1[dx.nd].aQy[3], dx.s0.s1[dx.nd].aQy[4], dx.s0.s1[dx.nd].aQy[5], dx.s0.s1[dx.nd].aQy[6]],
			this.aQq = dx.s0.s1[dx.nd].aQy[7], this.aQr = dx.s0.s1[dx.nd].aQy[8], this.aQs = dx.s0.s1[dx.nd].aQy[9], this.aQt = dx.s0.s1[dx.nd].aQy[10], this.aQv ? this.ku = setTimeout(aQz, 16) : this.az())
	}, this.az = function() {
		if (8 === b6.hy() && r.a4t()) this.ku = setTimeout(aQz, 16);
		else {
			if (0 === this.uS) {
				var a2w = eG.a2v();
				if (eG.a2u(dx.s0.s1[dx.nd].aQy[2]), wb.gZ([dx.dy, dx.jK, dx.s0.s1[dx.nd].aQy[0], dx.s0.s1[dx.nd].aQy[1]]), eG.a2u(a2w), this.sT = wb.wc(), this.uS++, this.aQv) return void(this.ku = setTimeout(aQz, 16))
			}
			for (var g6, aU, a2w = this.aQv ? 10 : 1e6, a2w = dx.jK - this.aQp - 1 < a2w ? dx.jK - this.aQp - 1 : a2w, kL = this.aQp + a2w, a3 = this.aQp; a3 < kL; a3++)
				for (var a2 = 1; a2 < dx.dy - 1; a2++) ee(g6 = 4 * (aU = a2 + a3 * dx.dy)) ? this.aR0(g6, aU, 1) : (this.aR0(g6, aU, 0), function(a2, a3, g6) {
					return 1 < a2 && ee(g6 - 4) || a2 < dx.dy - 2 && ee(g6 + 4) || 1 < a3 && ee(g6 - 4 * dx.dy) || a3 < dx.jK - 2 && ee(g6 + 4 * dx.dy)
				}(a2, a3, g6) && this.aR1(a2, a3));
			this.aQp = kL, this.aQp >= dx.jK - 1 ? (dx.fl.putImageData(dx.s5, 0, 0, 1, 1, dx.dy - 2, dx.jK - 2), j.a0 = !0, this.aQx()) : this.aQv && (this.ku = setTimeout(aQz, 16))
		}
	}, this.aR0 = function(g6, aU, aJ) {
		aR3(g6, Math.floor(this.aQu[aJ] + this.dz[aJ] * this.sT[aU] / 1e4) - dx.s8[g6])
	}, this.aR4 = function(g6, aj, aR5, aJ, dz) {
		aR3(g6, Math.floor(this.aQu[aJ] + (1 - aj / aR5) * dz) - dx.s8[g6])
	}, this.aR1 = function(lQ, lR) {
		for (var g6, aj, aR5, a30 = lQ - this.aQr, aR6 = lR - this.aQr, kM = lQ + this.aQr, kL = lR + this.aQr, a30 = a30 < 1 ? 1 : a30, kM = kM > dx.dy - 2 ? dx.dy - 2 : kM, kL = kL > dx.jK - 2 ? dx.jK - 2 : kL, a3 = aR6 < 1 ? 1 : aR6; a3 <=
			kL; a3++)
			for (var a2 = a30; a2 <= kM; a2++) ee(g6 = 4 * (a2 + a3 * dx.dy)) ? (aR5 = this.aQq + (this.aQr - this.aQq) * this.sT[a2 + dx.dy * a3] / 1e4, Math.abs(lQ - a2) > aR5 || Math.abs(lR - a3) > aR5 || aR5 <= (aj = Math.sqrt((lQ - a2) * (
				lQ - a2) + (lR - a3) * (lR - a3))) || this.aR4(g6, aj, aR5, 1, this.dz[3])) : (aR5 = this.aQs + (this.aQt - this.aQs) * this.sT[a2 + dx.dy * a3] / 1e4, Math.abs(lQ - a2) > aR5 || Math.abs(lR - a3) > aR5 || aR5 <= (aj = Math
				.sqrt((lQ - a2) * (lQ - a2) + (lR - a3) * (lR - a3))) || this.aR4(g6, aj, aR5, 0, this.dz[2]))
	}
}

function a8x() {
	var d3, d4, d5, dI;

	function d8() {
		dC(), 2 !== p.data.iIncomeType && (p.data.iIncomeData = null), aC.dD()[19] = null, aC.dE()
	}

	function dC() {
		2 === p.data.iIncomeType && aa.dF.dG(d5.dH(), p.data.iIncomeData, 255)
	}
	this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(35), [new d7("⬅️ " + L(1), d8)]), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), dM.dP(new dQ({
			dR: [L(3), L(4), L(5)],
			value: p.data.iIncomeType
		}, function(aJ) {
			dC(), 2 !== aJ || p.data.iIncomeData || (p.data.iIncomeData = new Uint8Array(p.dS), p.data.iIncomeData.fill(32)), p.data.iIncomeType = aJ, aC.dT(27)
		})), dI.push(dM)
	}(dI = []), function(dI) {
		var dM;
		1 === p.data.iIncomeType && ((dM = new dN).dO("Value"), dM.dU(new a7({
			aJ: -1,
			value: p.data.iIncomeValue
		}, 1, 0, function(i) {
			var value = dV.dW(Math.floor(i.target.value), 0, 255);
			i.target.value = p.data.iIncomeValue = value
		})), dI.push(dM))
	}(dI), function(dI) {
		var dM;
		2 === p.data.iIncomeType && ((dM = new dN).dO("Data"), (d5 = new dX(0, 1, 0, 1)).dY(aa.dZ.da(p.data.iIncomeData, 4)), dM.dU(d5), dI.push(dM))
	}(dI), dI))
}

function sn() {
	var aJE = 0,
		aR7 = null;
	this.aB = function() {
		null === aR7 && (aR7 = new Uint16Array(2 * ao.aD.a83)), aJE = 0
	}, this.j1 = function(aR8, sm) {
		var aR9 = aR7;
		aR9[aJE++] = aR8, aR9[aJE++] = sm
	}, this.aDN = function(player, aDM) {
		for (var aR9 = aR7, gz = aJE, ak = 0; ak < gz; ak += 2)
			if (aR9[ak] === aDM && ao.iA.rC(aR9[ak + 1]) && player === ao.aD.oh[eC.qP[2]] >> 3) return !0;
		return !1
	}, this.aKe = function(aRA) {
		var sW = ao.aD.aDJ[aRA];
		if (!(sW < 64)) {
			for (var aDM = ao.aD.ap[aRA], aR9 = aR7, gz = aJE, ak = gz - 2; 0 <= ak; ak -= 2)
				if (aR9[ak] === aDM) {
					{
						aRE = void 0;
						var aRE = aR9[ak + 1];
						ao.iA.rC(aRE) && ao.sm.aKd(eC.qP[2])
					}
					aR9[ak] = aR9[gz - 2], aR9[ak + 1] = aR9[gz - 1], gz -= 2
				} aJE = gz
		}
	}, this.aNC = function(aRC, aRD) {
		for (var aRE = ao.aD.ap[aRC], aDM = -1, aR9 = aR7, gz = aJE, ak = 1; ak < gz; ak += 2)
			if (aR9[ak] === aRE) {
				aDM = aR9[ak - 1];
				break
			} if (-1 === aDM) return !1;
		if (!ao.iA.rC(aDM)) return !1;
		var aRA = eC.qP[2],
			rH = ao.aD.rI[aRA];
		if (aRD === rH[rH.length - 1]) ao.aD.rI[aRC] = ao.sj.aKr(ao.aD.rI[aRC], ao.sj.xF(rH));
		else {
			var aRF = ao.iA.rb(rH, aRD);
			if (-1 === aRF) return !1;
			var aRG = ao.aD.aDR[aRA];
			aRF === aRG ? (aRA = pv.a4z(ao.aD.og[aRA]), ao.aD.rI[aRC] = ao.sj.aKt(ao.aD.rI[aRC], rH, aRF, aRD, pv.aDS(rH[aRF], aRD) > pv.aDS(rH[aRF], aRA))) : ao.aD.rI[aRC] = ao.sj.aKt(ao.aD.rI[aRC], rH, aRF, aRD, aRG < aRF)
		}
		return !0
	}, this.aKd = function(rG) {
		var rH, af = ao.aD,
			sW = af.aDJ[rG];
		return sW % 64 != 5 && (rH = af.rI[rG], af.aMH[rG] = 65535 - af.aMH[rG], af.aDR[rG] = rH.length - af.aDR[rG] - 2, af.rI[rG] = ao.sj.xF(rH), af.aDJ[rG] = sW - sW % 64 + 5, !0)
	}
}

function aJS() {
	this.j1 = function(player, aU) {
		a9t.kR(player, pv.qn(aU), pv.qp(aU)) && (j.a0 = !0), p.lI && this.az()
	}, this.az = function() {
		p.gB = !1;
		for (var ak = 0; ak < p.e3; ak++) 0 !== fe.gA[ak] && 0 === fe.jQ[ak] && a9t.kX(ak);
		0 !== fe.gA[p.an] ? (iy.jP[7] = fe.jQ[p.an], iy.jP[8] = fe.ff[p.an], lE.aRJ(), fr.aFt(), p.ay || r.a4v(fe.je[p.an] - 5, fe.jf[p.an] - 5, fe.jg[p.an] + 5, fe.jh[p.an] + 5), a0A.aB()) : a09.show(!1, !1, !1, !0), mY.aCI(18), j7.wC(), j7.fs(!
			0), a07.aD.aRK(), m.n(), p.wB = null, es.aRL = !0, es.wO(), p.lI && fg.fh.setState(1)
	}
}

function aF7() {
	var aRM = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aRN = function(k) {
		var aRP, bE = new Date(k.getTime() - 6e4 * k.getTimezoneOffset()).toUTCString();
		return bE.length < 12 || (bE = bE.substring(5, bE.length), 0 === (k = k.getTimezoneOffset())) ? bE : (aRP = (k < 0 ? "+" : "-") + dV.eF(Math.abs(k), 60), 0 == (k = Math.abs(k) % 60) ? bE + aRP : bE + aRP + ":" + (k < 10 ? "0" : "") + k)
	}, this.aRQ = function(k) {
		var bE = k.toUTCString();
		return bE.length < 12 ? bE : function(k) {
			return aRM[k.getUTCDay()]
		}(k) + ", " + bE.substring(5, bE.length - 4)
	}
}

function aBD() {
	var aRT, aRU;
	this.aRS = 5, this.a0n = null;

	function a0i(ak) {
		return aRU[ak].kt && aRT[ak].a0i()
	}

	function aRX(xW) {
		aRU[xW].k = j.k, aRU[xW].a76 = !1
	}
	this.bB = 0, this.ho = 0, this.aB = function() {
		this.a0n = new Array(this.aRS);
		this.a0n[0] = "territorial.io";
		var a2w = eG.a2v(0);
		eG.a2u(0);
		for (var ak = 1; ak < this.aRS; ak++) this.a0n[ak] = a9v.aRW() + ".territorial.io";
		for (eG.a2u(a2w), aRT = new Array(this.aRS), aRU = new Array(this.aRS), ak = this.aRS - 1; 0 <= ak; ak--) aRU[ak] = {
			kt: !1,
			k: 0,
			a76: !1
		};
		this.hp(0, 0)
	}, this.a5Q = function(ak) {
		return aRT[ak]
	}, this.az = function() {
		for (var ak = this.aRS - 1; 0 <= ak; ak--) this.a0f(ak) && j.k > aRU[ak].k + 15e3 && (bA.hq.a75(ak, aRU[ak].a76), aRX(ak));
		!this.a0f(0) && j.k > aRU[0].k + 8e3 && (aRU[0].k = j.k, this.hp(0, 0))
	}, this.aJi = function(id) {
		return this.hp(0, id) && this.a0g(0)
	}, this.hp = function(xW, a0Y) {
		if (aRU[xW].kt) {
			if (aRT[xW].a0i()) return aRT[xW].a0j(a0Y), aRT[xW].a0f();
			aRT[xW].n()
		}
		return this.aRY(xW, a0Y), !1
	}, this.aRY = function(xW, a0Y) {
		aRU[xW].kt = !0, aRX(xW), aRT[xW] = new a0X, aRT[xW].aB(xW, a0Y)
	}, this.a0j = function(xW, a0Y) {
		a0i(xW) && aRT[xW].a0j(a0Y)
	}, this.a0p = function(xW, a0Y) {
		bA.a1k.aRZ(xW)
	}, this.a0g = function(ak) {
		return this.a0f(ak) && aRT[ak].a0g()
	}, this.a0h = function(ak) {
		aRT[ak].a0h()
	}, this.a0f = function(ak) {
		return aRU[ak].kt && aRT[ak].a0f()
	}, this.send = function(xW, gd) {
		0 !== xW && aRX(xW), aRT[xW].send(gd)
	}, this.a9d = function(xW) {
		8 === b6.hy() && (aRU[xW].a76 = !0, bA.a4c.aRa = !0)
	}, this.close = function(xW, a0l) {
		a0i(xW) && aRT[xW].close(a0l)
	}, this.xX = function(xW, a0l) {
		gM.aRb(a0l), a0i(xW) && aRT[xW].close(a0l)
	}, this.a3t = function(a0l) {
		for (var ak = this.aRS - 1; 0 <= ak; ak--) this.close(ak, a0l)
	}, this.aRc = function(xW, a0l) {
		for (var ak = this.aRS - 1; 0 <= ak; ak--) ak !== xW && this.close(ak, a0l)
	}, this.aJV = function() {
		0 === this.bB && (p.lI || p.ay) || this.close(this.bB, 3246)
	}, this.a0r = function(xW, i) {
		aRT[xW].n(), gM.aRd(xW, i.code)
	}
}

function a1M() {
	var i;
	this.i = document.createElement("hr"), this.resize = function() {
		aa.ab.bU(this.i, 8, aF.bp)
	}, (i = this.i).style.marginBottom = i.style.marginTop = "0.65em", i.style.marginLeft = i.style.marginRight = "-4%", i.style.border = "none"
}

function aAj() {
	this.aRe = null, this.aB = function() {
		10 !== p.mR ? this.aRe = null : this.aRe = new Uint32Array(p.dS)
	}, this.az = function() {
		10 === p.mR && this.iA()
	}, this.iA = function() {
		for (var g6, target, aG8, aRe = this.aRe, uc = tq.tg, fY = fe.ff, ak = tq.th - 1; 0 <= ak; ak--)(g6 = uc[ak]) >= p.e3 || (target = Math.max(dV.eF(fY[g6], 4), 2048), aG8 = Math.max(fv.aG9(g6), 100), aRe[g6] += dV.eF(aG8 * target, 1e4),
			aRe[g6] > target && (aRe[g6] = target))
	}, this.aHZ = function(player, ip) {
		return ip > this.aRe[player] ? (ip = this.aRe[player], this.aRe[player] = 0) : this.aRe[player] -= ip, ip
	}
}

function aAU() {
	function aRi(player) {
		var h4;
		aa.al.uD(player) && (h4 = fe.ff[player] - fe.g7[player] + nj.rE(player), iy.iz(player, Math.abs(h4), h4 < 0 ? 18 : 12)), fe.ff[player] = 0, fe.g7[player] = 0
	}

	function aRn() {
		a09.show(!1, !1, !1, !0), fr.aFw(), mO.zP.mX()
	}

	function aRg(player, uI) {
		for (var ak = uI.length - 1; 0 <= ak; ak--) nj.u8(uI[ak], player)
	}

	function aRh(player) {
		var je = fe.je,
			jg = fe.jg,
			jf = fe.jf,
			jh = fe.jh,
			dy = dx.dy;
		if (fe.jQ[player]) {
			fe.jQ[player] = 0;
			for (var b = je[player], c = jf[player], a2 = jg[player]; b <= a2; a2--)
				for (var a3 = jh[player]; c <= a3; a3--) {
					var g6 = 4 * (a3 * dy + a2);
					eu.eY(player, g6) && eu.ek(g6)
				}
		}
		jg[player] = jh[player] = 0, je[player] = jf[player] = Math.max(dy, dx.jK)
	}
	this.ts = function(g6) {
		var player, h4 = fe.jQ[g6] + fe.k7[g6];
		ao.aD.r3[g6] ? h4 && (aRg(player = g6, nj.uH(player)), aRh(player), pg.ph(player), nj.clear(player), aRi(player), function(player) {
			fe.k7[player] = 0, fe.kO[player] = [], fe.k8[player] = [], fe.k9[player] = [], fe.kA[player] = []
		}(player)) : !h4 && fe.kO[g6].length || this.a12(g6)
	}, this.a12 = function(player) {
		! function(player) {
			aa.al.is(player) || (fe.te[player] = a1h.aKm.aRm(), p.a10++);
			var uI = nj.uH(player);
			0 === uI.length ? aa.al.mu(player) && aRn() : (aRg(player, uI), function(player, uI) {
				var aRq = uI[function(uI) {
					var ak, aJ = 0;
					for (ak = uI.length - 1; 1 <= ak; ak--) fe.jQ[uI[ak]] > fe.jQ[uI[aJ]] && (aJ = ak);
					return aJ
				}(uI)];
				9 === p.mR && (1 === eL.jd[player] ? eG.a2y(8) && a4Z.aQT(aRq) : mG.ip[player] && (mY.aDf(765, 0), mY.mZ(280, L(329, [fe.mb[aRq], fe.mb[player]]), 765, aRq, aF.bZ, aF.cr, -1, !0)));
				if (aa.al.mu(player)) aRn(), mY.uF(aRq, 1);
				else {
					for (var ak = uI.length - 1; 0 <= ak; ak--)
						if (aa.al.uD(uI[ak]) && (iy.jP[4 - aa.al.is(player)]++, aa.al.mu(uI[ak]))) return mY.uF(player, 0);
					aa.al.is(player) || mY.aIu(0, player, aRq)
				}
			}(player, uI))
		}(player), aRh(player), aRi(player),
			function(player) {
				fe.gA[player] = 0, fe.kO[player] = null, fe.k8[player] = null, fe.k9[player] = null, fe.kA[player] = null
			}(player), pg.ph(player), nj.clear(player), ao.sQ.aMA(player)
	}
}

function a8u() {
	var d3, d4, aRr, dI;

	function d8() {
		aA1.hn(), aC.dD()[19] = null, aC.dE()
	}

	function aRz() {
		aS3(), aS1()
	}

	function aS3() {
		aRr.bR.lastChild && aC.removeChild(aRr.bR, aRr.bR.lastChild)
	}

	function aS1() {
		var aS4 = dx.lo(p.data);
		p.data.canvas = dx.ln(aS4, p.data.mapSeed).lm, aS2()
	}

	function aS2() {
		var aZ = p.data.canvas;
		aZ.style.width = "100%", aRr.bR.appendChild(aZ)
	}
	this.aID = function(aZ) {
		p.data.canvas && aS3(), p.data.canvas = aZ, aS2()
	}, this.show = function() {
		d3.show(), this.resize()
	}, this.n = function() {
		d3.n()
	}, this.resize = function() {
		d3.resize(), d4.resize()
	}, this.db = function(aT) {
		2 === aT && d3.dc[0].dd()
	}, d3 = new d6(L(21), [new d7("⬅️ " + L(1), d8)]), 2 === p.data.mapType && aA1.aB(), d4 = new d9(d3.dA, (function(dI) {
		var dM = new dN;
		dM.dO(L(2)), dM.dP(new dQ({
			dR: [L(330), L(331), L(332)],
			value: p.data.mapType
		}, function(aJ) {
			2 === (p.data.mapType = aJ) ? (aA1.aB(), p.data.canvas = null) : (p.data.passableWater = p.data.passableMountains = 1, aA1.hn()), aC.dT(20)
		})), 2 <= p.data.mapType && (dM.dU(new a1M), dM.dU(new vu({
			value: p.data.passableWater
		}, L(333), function(value) {
			p.data.passableWater = value
		})), dM.dU(new vu({
			value: p.data.passableMountains
		}, L(334), function(value) {
			p.data.passableMountains = value
		})));
		dI.push(dM)
	}(dI = []), function(dI) {
		if (0 === p.data.mapType) {
			for (var dM = new dN, dR = (dM.dO(L(21)), []), ak = 0; ak < dx.s0.aRy.length; ak++) dR.push(dx.s0.s1[dx.s0.aRy[ak]].name);
			dM.dP(new dQ({
				dR: dR,
				value: p.data.mapProceduralIndex
			}, function(aJ) {
				p.data.mapProceduralIndex = aJ, aRz()
			})), dI.push(dM)
		}
	}(dI), function(dI) {
		if (1 === p.data.mapType) {
			for (var dM = new dN, dR = (dM.dO(L(21)), []), ak = 0; ak < dx.s0.aS0.length; ak++) dR.push(dx.s0.s1[dx.s0.aS0[ak]].name);
			dM.dP(new dQ({
				dR: dR,
				value: p.data.mapRealisticIndex
			}, function(aJ) {
				p.data.mapRealisticIndex = aJ, aRz()
			})), dI.push(dM)
		}
	}(dI), function(dI) {
		var dM;
		2 === p.data.mapType && ((dM = new dN).dO(L(335)), dM.dU(new a7(aK.f4.data[162], 1)), dM.dO(L(336), "0.8em"), dM.dU(new m8([new d7(L(337), function() {
			return aA1.aI6(), !0
		}).button])), dI.push(dM))
	}(dI), function(dI) {
		var dM, vy;
		2 === p.data.mapType && ((dM = new dN).dO(L(338)), vy = new a7({
			aJ: -1,
			value: p.data.mapName
		}, 0, 0, function(i) {
			p.data.mapName = i.target.value = i.target.value.slice(0, 20)
		}), dM.dU(vy), dI.push(dM))
	}(dI), function(dI) {
		var dM, vy, a1A;
		0 === p.data.mapType && ((dM = new dN).dO("Seed"), vy = new a7({
			aJ: -1,
			value: p.data.mapSeed
		}, 1, 0, function(i) {
			i = Math.abs(Math.floor(i.target.value)) % 16384;
			p.data.mapSeed !== i && (p.data.mapSeed = i, aRz())
		}), a1A = new d7(L(26), function(i) {
			var a2w = Math.floor(16384 * Math.random());
			if (p.data.mapSeed !== a2w) return vy.i.value = p.data.mapSeed = a2w, aRz(), !0
		}), dM.dU(vy), dM.dU(new m8([a1A.button])), dI.push(dM))
	}(dI), function(dI) {
		(aRr = new dN).dO(L(182)), 2 !== p.data.mapType ? aS1() : p.data.canvas && aS2();
		dI.push(aRr)
	}(dI), dI))
}

function aS5() {
	this.s1 = null, this.aRy = null, this.aS0 = null, this.aB = function() {
		var aS6 = [120, 105, 92],
			cos = [12, 12, 60],
			aS7 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aS8 = [140, 130, 120],
			aS9 = [12, 12, 76],
			aSA = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aSB = [130, 117, 106],
			aSC = [12, 12, 68],
			aSD = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.s1 = new Array(dx.wV + 1), this.s1[0] = {
			name: L(339),
			fS: 230,
			fQ: 230,
			a4h: 1e3,
			a4e: 2e3,
			a2w: 173
		}, this.s1[1] = {
			name: L(340),
			fS: 800,
			fQ: 800,
			a4h: 100,
			a4e: 50,
			a2w: 43
		}, this.s1[2] = {
			name: L(341),
			fS: 512,
			fQ: 512,
			a4h: 128,
			a4e: 32,
			a2w: 0
		}, this.s1[3] = {
			name: L(342) + " 1",
			fS: 960,
			fQ: 960,
			a4h: 60,
			a4e: 8,
			a2w: 0
		}, this.s1[4] = {
			name: L(343),
			fS: 900,
			fQ: 900,
			a4h: 100,
			a4e: 5,
			a2w: 0
		}, this.s1[5] = {
			name: L(344),
			fS: 1e3,
			fQ: 1e3,
			a4h: 100,
			a4e: 40,
			a2w: 0
		}, this.s1[6] = {
			name: L(345),
			fS: 1e3,
			fQ: 1e3,
			a4h: 100,
			a4e: 20,
			a2w: 0
		}, this.s1[7] = {
			name: L(346),
			fS: 1024,
			fQ: 1024,
			a4h: 128,
			a4e: 32,
			a2w: 0
		}, this.s1[8] = {
			name: L(347),
			fS: 820,
			fQ: 820,
			a4h: 200,
			a4e: 100,
			a2w: 0
		}, this.s1[9] = {
			name: L(348),
			fS: 1024,
			fQ: 1024,
			a4h: 128,
			a4e: 32,
			a2w: 0
		}, this.s1[10] = {
			name: L(349),
			sN: aS8,
			sO: aS9,
			aQy: aSA
		}, this.s1[11] = {
			name: L(350),
			sN: aSB,
			sO: aSC,
			aQy: aSD
		}, this.s1[12] = {
			name: L(351),
			sN: aSB,
			sO: aSC,
			aQy: aSD
		}, this.s1[13] = {
			name: L(352),
			sN: aS6,
			sO: cos,
			aQy: aS7
		}, this.s1[14] = {
			name: L(353),
			sN: aS6,
			sO: cos,
			aQy: aS7
		}, this.s1[15] = {
			name: L(354),
			sN: aS8,
			sO: aS9,
			aQy: aSA
		}, this.s1[16] = {
			name: L(355),
			sN: aS8,
			sO: aS9,
			aQy: aSA
		}, this.s1[17] = {
			name: L(356),
			sN: aS6,
			sO: cos,
			aQy: aS7
		}, this.s1[18] = {
			name: L(357),
			sN: aSB,
			sO: aSC,
			aQy: aSD
		}, this.s1[19] = {
			name: L(358),
			sN: aS6,
			sO: cos,
			aQy: aS7
		}, this.s1[20] = {
			name: L(359),
			fS: 1024,
			fQ: 1024,
			a4h: 128,
			a4e: 32,
			a2w: 0
		}, this.s1[21] = {
			name: L(342) + " 2",
			fS: 940,
			fQ: 940,
			a4h: 80,
			a4e: 8,
			a2w: 0
		}, this.s1[22] = {
			name: L(360),
			sN: aSB,
			sO: aSC,
			aQy: aSD
		}, this.s1[23] = {
			name: L(361),
			sN: aS8,
			sO: aS9,
			aQy: aSA
		}, this.s1[dx.wV] = {
			name: ""
		}, this.aRy = new Uint8Array(12);
		for (var ak = 0; ak < 10; ak++) this.aRy[ak] = ak;
		for (this.aRy[10] = 20, this.aRy[11] = 21, this.aS0 = new Uint8Array(dx.aSE), ak = 0; ak < 10; ak++) this.aS0[ak] = 10 + ak;
		this.aS0[10] = 22, this.aS0[11] = 23
	}
}

function aAq() {
	this.eB = new Array(4), this.aSF = new Uint16Array(2), this.uj = new Uint16Array(2), this.aSG = new Int32Array(2), this.j2 = new Uint32Array(2), this.aSH = new Uint32Array(2), this.eD = new Uint8Array(4), this.aSI = new Uint8Array(4), this.aKc =
		new Uint32Array(4), this.aSJ = new Uint32Array(5), this.a2L = new Uint32Array(8), this.qP = new Uint32Array(8), this.zb = new Uint16Array(16), this.jp = new Uint16Array(512), this.ji = new Uint16Array(512), this.jj = new Uint16Array(512),
		this.xI = new Uint16Array(0), this.aB = function() {
			var gz = dx.dy * dx.jK;
			this.xI.length !== gz && (this.xI = new Uint16Array(gz))
		}, this.aSK = function(eB, nI) {
			return eB[0] = nI, eB
		}, this.aSL = function(eB, nI, nK) {
			return eB[0] = nI, eB[1] = nK, eB
		}, this.aSM = function(eB, nI, nK, nM) {
			return eB[0] = nI, eB[1] = nK, eB[2] = nM, eB
		}, this.aSN = function(eB, nI, nK, nM, aSO) {
			return eB[0] = nI, eB[1] = nK, eB[2] = nM, eB[3] = aSO, eB
		}
}

function aAD() {
	var aOa = new Uint8Array(p.dS),
		aSP = new Uint16Array(p.dS),
		aSQ = new Uint16Array(p.dS),
		aSR = new Uint8Array(p.dS),
		aSS = (this.ip = new Uint8Array(p.dS), new Uint16Array(p.dS)),
		aST = new Uint16Array(p.dS);

	function aSY(ak) {
		aOa[ak] = 1 + dV.eF(aSS[ak] * eG.random(), 10 * eG.value(100))
	}
	this.mH = null, this.a7j = [97, 94, 70, 40, 20, 0, 100], this.aDU = [500, 450, 400, 300, 80, 50, 100], this.a7h = [0, 0, 5, 25, 50, 100, 0], this.yg = [60, 74, 112, 200, 256, 512, 512], this.a83 = [1, 2, 3, 4, 6, 8, 1], this.ze = [500, 450, 400,
		300, 80, 50, 100
	], this.aDK = [100, 150, 250, 400, 600, 1e3, 100], this.dw = function() {
		this.mH = [L(362), L(363), L(89), L(364), L(365), L(366), "H Bot"]
	}, this.aB = function() {
		aOa.fill(0), aSP.fill(0), aSQ.fill(0), aSR.fill(0), this.ip.fill(0), aSS.fill(0), aST.fill(0);
		var aSU = p.e3;
		if (9 === p.mR) this.aSV();
		else if (p.lI)
			if (3 === p.data.botDifficultyType)
				for (ak = p.aFp - 1; 0 <= ak; ak--) {
					var qc = ak + aSU;
					this.ip[qc] = p.data.botDifficultyData[qc]
				} else if (2 === p.data.botDifficultyType)
					for (ak = p.aFp - 1; 0 <= ak; ak--) this.ip[qc = ak + aSU] = p.data.botDifficultyTeam[eL.jk[eL.jd[qc]]];
				else if (1 === p.data.botDifficultyType) {
			var aSX = this.mH.length;
			for (ak = p.aFp - 1; 0 <= ak; ak--) this.ip[ak + aSU] = ak % aSX
		} else
			for (aSX = p.data.botDifficultyValue, ak = p.aFp - 1; 0 <= ak; ak--) this.ip[ak + aSU] = aSX;
		else
			for (var aSW = 8 === p.mR ? 1 : 0, ak = p.aFp - 1; 0 <= ak; ak--) this.ip[ak + aSU] = aSW;
		for (ak = 0; ak < aSU; ak++) this.ip[ak] = 6;
		var gz = p.dS;
		for (ak = 0; ak < gz; ak++) this.ip[ak] <= 2 ? (aSR[ak] = 5, aSS[ak] = aST[ak] = 1040, 0 === this.ip[ak] ? (aSP[ak] = 980, aSQ[ak] = 980) : 1 === this.ip[ak] ? (aSP[ak] = 980, aSQ[ak] = 920, aSS[ak] = aST[ak] = 1100) : (aSP[ak] = 825,
				aSQ[ak] = 750)) : this.ip[ak] <= 4 ? (aSR[ak] = 1 + eG.xT(20), 3 === this.ip[ak] ? (aSP[ak] = aSQ[ak] = 500, aSS[ak] = aST[ak] = 1e3) : (aST[ak] = 250 + eG.xT(1501), aSS[ak] = 500 + eG.xT(501), aSP[ak] = 300 + eG.xT(201), aSQ[
				ak] = 100 + eG.xT(201))) : this.ip[ak] <= 5 ? (aSS[ak] = 1e3, aST[ak] = 1e3, aSR[ak] = 35 + eG.xT(16), aSP[ak] = 300 + eG.xT(201), aSQ[ak] = 50 + eG.xT(101)) : (aSS[ak] = aST[ak] = 800, aSR[ak] = 5, aSP[ak] = 10, aSQ[ak] = 250),
			aSY(ak)
	}, this.aSV = function() {
		for (var ai = a4Z.aQP, aSU = p.e3, ak = ai - 1; 0 <= ak; ak--) this.ip[ak + aSU] = 0;
		for (var eM = 0; eM < 6; eM++) {
			for (ak = ai + a4Z.aOZ[eM] - 1; ai <= ak; ak--) this.ip[ak + aSU] = eM;
			ai += a4Z.aOZ[eM]
		}
	}, this.a7c = function(g6, value) {
		aOa[g6] = Math.min(value, aOa[g6])
	}, this.az = function(g6) {
		0 == --aOa[g6] && ! function(g6) {
			(function(g6) {
				aSS[g6] !== aST[g6] && (aSS[g6] += aSS[g6] < aST[g6] ? 3 : -3);
				aSP[g6] !== aSQ[g6] && (aSP[g6] += aSP[g6] < aSQ[g6] ? aSR[g6] : -aSR[g6], aSP[g6] = (Math.abs(aSP[g6] - aSQ[g6]) <= aSR[g6] ? aSQ : aSP)[g6]);
				aOa[g6] = dV.eF(aSS[g6], 10)
			})(g6), it.iu.a7W(g6, dV.eF(aSP[g6] * fe.ff[g6], 1e3))
		}(g6)
	}, this.a73 = function(g6, jl) {
		aSS[g6] = aST[g6] = jl
	}
}

function vd() {
	this.aM = function(aJ, value) {
		2 !== aK.f4.data[aJ].type && (value = Math.floor(value)), aK.f4.data[aJ].value !== value && (aK.f4.uR(aJ, value), 0 === aJ ? (aC.gS(), vn.aB(), aC.dT(2)) : 1 === aJ ? a5.a6d(1) : 2 === aJ ? a5.a6d(0) : 5 === aJ && (aa.ab.gh(), a5.a6d(0)))
	}, this.uL = function() {
		for (var data = aK.f4.data, ak = 0; ak < 100; ak++) data[ak] && aK.f4.uR(ak, data[ak].aE4);
		aa.ab.gh(), a5.a6d(1)
	}, this.uM = function() {
		for (var data = aK.f4.data, ak = 0; ak < data.length; ak++) data[ak] && aK.f4.aM(ak, data[ak].aE4)
	}, this.aSb = function() {
		for (var eM = aK.f4, ak = 128; ak < 135; ak++) eM.uR(ak, eM.data[ak].aE4)
	}, this.aGx = function(data) {
		aK.aL.aM(109, data.ym), aK.aL.aM(107, data.aGQ), aK.aL.aM(108, data.aGR), aK.aL.aM(112, data.aGS), aK.aL.aM(111, data.aGT), aK.aL.aM(113, data.a8H), aK.aL.aM(135, data.aGU), aK.aL.aM(136, data.aGV), aK.aL.aM(137, data.aGW), aK.aL.aM(138,
			data.aGX), aK.aL.aM(139, data.aGY), aK.aL.aM(141, data.aGZ), aK.aL.aM(142, data.aGa), aK.aL.aM(143, data.aGb), aK.aL.aM(144, data.aGc)
	}
}

function hO() {
	this.aEr = 28, this.hR = 0, this.aEq = null;
	var aSc = this.aEs = null;

	function aSf(aY, aSg) {
		var a2, a3, aU, aV, aZ = aa.ab.aS(aY, aY),
			ac = aa.ab.getContext(aZ, !0),
			ad = aa.ab.getImageData(ac, aY, aY),
			ae = ad.data,
			af = (aY >> 1) - .5,
			aSh = .5 + af;
		for (aSh *= aSh, a3 = 0; a3 < aY; a3++)
			for (a2 = 0; a2 < aY; a2++) aV = (aV = a2 - af) * aV + (aV = a3 - af) * aV, ae[aU = 4 * (a3 * aY + a2)] = aSg[0], ae[1 + aU] = aSg[1], ae[2 + aU] = aSg[2], ae[3 + aU] = (aSh - aV) * aSg[3] / aSh;
		return ac.putImageData(ad, 0, 0), aZ
	}

	function ah(ak, ac, aZ, aY) {
		var highlight, a2, a3;
		0 !== fe.gA[ak] && 0 !== fe.jQ[ak] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[ak]) && (aY *= 2), a2 = fe.je[ak] + fe.jg[ak] + 1 - aY - 2 >> 1, a3 = fe.jf[ak] + fe.jh[ak] + 1 - aY - 2 >> 1, highlight ? ac
			.drawImage(aZ[p.e0 ? 9 === p.mR && 5 === mG.ip[ak] ? 3 : eL.jd[ak] : ak < p.e3 ? 1 : 0], a2, a3, aY, aY) : ac.drawImage(aZ[p.e0 ? 9 === p.mR && 5 === mG.ip[ak] ? 3 : eL.jd[ak] : ak < p.e3 ? 1 : 0], a2, a3))
	}
	this.aB = function() {
		var aCn;
		this.hR = 700,
			function(aCn) {
				var aY = aCn.aEr;
				if (aCn.aEs = [], aSc = [], p.e0) {
					for (var ak = 0; ak <= p.jX; ak++) aCn.aEs.push(aSf(aY, eL.aBm[eL.jk[ak]])), aSc.push(aSf(aY >> 1, eL.aBm[eL.jk[ak]]));
					9 === p.mR && aSc.push(aSf(aY, eL.aBm[1]))
				} else aCn.aEs.push(aSf(aY, eL.aBm[7])), aCn.aEs.push(aSf(aY, eL.aBm[4])), aSc.push(aSf(aY >> 1, eL.aBm[7]))
			}(this),
			function(aCn, aSi) {
				var ak, aEq = aCn.aEq,
					ac = aa.ab.getContext(aEq, !0),
					gz = p.dS,
					aY = aCn.aEr >> 1;
				ac.imageSmoothingEnabled = !1, ac.setTransform(1, 0, 0, 1, 0, 0), aSi && ac.clearRect(0, 0, aEq.width, aEq.height);
				if (9 === p.mR) {
					aY <<= 1;
					aCn = a4Z.aOZ[5];
					for (ak = gz - aCn; ak < gz; ak++) ah(ak, ac, aSc, aY);
					gz -= aCn, aY >>= 1
				}
				for (ak = p.e3; ak < gz; ak++) ah(ak, ac, aSc, aY)
			}(this, null !== (aCn = this).aEq && aCn.aEq.width === dx.dy - 2 && aCn.aEq.height === dx.jK - 2 || (aCn.aEq = aa.ab.aS(dx.dy - 2, dx.jK - 2), !1)), p.gB || this.aRK()
	}, this.aBl = aSf, this.aRK = function() {
		for (var gz = p.e3, aY = this.aEr, aEs = this.aEs, ac = aa.ab.getContext(this.aEq, !0), ak = 0; ak < gz; ak++) ah(ak, ac, aEs, aY)
	}
}

function aLz(aLq, aKg) {
	var aSq, self, aSk = document.createElement("div"),
		aSl = document.createElement("div"),
		aSm = document.createElement("div"),
		aSn = null,
		aSr = (this.vy = new a7({
			value: "",
			aJ: -1
		}, 0, aSo, function(i) {
			i.target.value = aa.dZ.a5Y(i.target.value), aSn.bM.textContent = 127 - i.target.value.length
		}), 0),
		aMv = 1,
		aSs = 0,
		aSt = 1048575;

	function aSo() {
		aLq(), aSn.bM.textContent = 127
	}

	function aMy(aKi, aN) {
		aN && (aN.sv = 1, aKi.appendChild(f7.iD.transform(aN)))
	}

	function aMx(a6U) {
		aMv ? aSk.scrollTop = aSk.scrollHeight : a6U && (aSk.scrollTop = aSs)
	}
	this.a3M = function(aSv) {
			aSt = 1048575, aSl.textContent = "", aSv || this.yM()
		}, this.yM = function() {
			var fN = f7.aD.f0[0],
				fN = f7.aD.ez[fN],
				a0U = fN.a0U,
				gz = a0U.length,
				eE = 1048575 === aSt ? 0 : gz - (fN.aC1 - aSt + 1048575) % 1048575;
			if (aSt = fN.aC1, !(gz <= (eE = Math.max(eE, 0)))) {
				for (var aKi = document.createDocumentFragment(), ak = eE; ak < gz; ak++) aMy(aKi, f7.iA.tY(a0U[ak], f7.iA.tZ(a0U[ak])));
				aSl.appendChild(aKi), aMx()
			}
		}, this.aBQ = function(gP) {
			var aKi = document.createDocumentFragment();
			aMy(aKi, gP), aSl.appendChild(aKi), aMx()
		}, this.show = function(bQ) {
			bQ.appendChild(aSk), bQ.appendChild(aSm), this.resize(bQ)
		}, this.n = function(bQ) {
			aC.removeChild(bQ, aSk), aC.removeChild(bQ, aSm)
		}, this.resize = function(bQ) {
			aSr = bQ ? bQ.offsetHeight : aSr;
			var bQ = aa.ab.go(.04, .75),
				ic = Math.max(bQ, aSr - bQ),
				aSw = a5.fS / a5.a6,
				aNP = .7 * aSw,
				aSx = aa.ab.bV(aSr - bQ - ic),
				ic = (aSm.style.height = aa.ab.bV(bQ), aSk.style.height = aa.ab.bV(ic), a5.fQ > a5.fS || fg.fh.fi() ? (aSm.style.top = aSx, aSk.style.top = aa.ab.bV(aSr - ic), aa.ab.bU(aSk, 8)) : (aSk.style.top = aSx, aSm.style.top = aa.ab.bV(aSr -
						bQ), aa.ab.bU(aSk, 2)), this.vy.i.style.width = aa.ab.bV(aNP), this.vy.i.style.fontSize = aSq.button.style.fontSize = aa.ab.bV(.5 * bQ), aa.ab.bU(this.vy.i, 6), aSq.button.style.left = aa.ab.bV(aNP), aSq.button.style.width =
					aa.ab.bV(aSw - aNP), .385 * bQ);
			fg.fh.fi() && (ic *= .8 - .12 * (a5.fS > a5.fQ)), aSl.style.marginLeft = aSl.style.marginRight = aa.ab.bV(.5 * ic), aSl.style.fontSize = aa.ab.bV(ic), aMx(1)
		}, (self = this).vy.i.aSu = 127, aSk.style.position = "absolute", aSk.style.left = "0", aSk.style.width = "100%", aSk.style.overflowX = "hidden", aSk.style.overflowY = "auto", aSk.style.font = "inherit", aSk.style.backgroundColor = aF.bf, aSk
		.addEventListener("scroll", function() {
			aSs = aSk.scrollTop, aMv = aSs < aSk.scrollHeight - aSk.clientHeight - 2 ? 0 : 1
		}), aSl.style.font = "inherit", aSm.style.position = "absolute", aSm.style.left = "0", aSm.style.width = "100%", self.vy.i.setAttribute("placeholder", L(367)), self.vy.i.style.position = "absolute", self.vy.i.style.top = "0", self.vy.i.style
		.left = "0", self.vy.i.style.height = "100%", self.vy.i.style.backgroundColor = aF.bc, self.vy.i.style.textAlign = "center", (aSq = new d7(L(175), aSo)).button.top = "0", aSq.button.style.position = "absolute", aSq.button.style.height =
		"100%", aSq.a1U(aF.ct), aSn = new pE("127", aSq.button, 1, 1), aSk.appendChild(aSl), aSm.appendChild(self.vy.i), aSm.appendChild(aSq.button)
}

function vE(aSz, aT0, aT1) {
	this.a2 = 0, this.a3 = 0, this.fS = 0, this.fQ = 0, this.resize = function() {
		this.fQ = Math.min(aa.ab.gn(aT1 || .5) * aSz[1] * a5.fj, a5.fQ - 2 * bW.gap), this.fS = Math.min(this.fQ * (aSz[0] / aSz[1]), a5.fS - 2 * bW.gap), this.fQ = aSz[1] * this.fS / aSz[0], this.a2 = bW.gap + aT0[0] * (a5.fS - this.fS - 2 * bW
			.gap), this.a3 = bW.gap + aT0[1] * (a5.fQ - this.fQ - 2 * bW.gap)
	}, this.aT2 = function() {
		return this.a2 + .5 * this.fS
	}
}

function a8l() {
	var hT, hU, hV, hX;

	function aT3(id) {
		0 !== fg.id || aK.f4.data[140].value ? 0 === id ? aC.dT(8, 1, new hY(16)) : aC.dT(2) : aC.aD.aJd(aC.b1, 0 === id ? 16 : 0)
	}
	this.show = function() {
		fg.fh.setState(12), hT.show(), this.resize(), this.az()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), hU.resize()
	}, this.az = function() {
		8 === b6.hy() && (2 <= iy.aHr ? hV[2].a1T === aF.bs && hV[2].a1U(0) : hV[2].a1T !== aF.bs && hV[2].a1U(aF.bs), !p.ay && lU.ld(p.an) ? hV[1].a1T === aF.bs && hV[1].a1U(0) : hV[1].a1T !== aF.bs && hV[1].a1U(aF.bs), !p.ay && qW.qZ(p.an) ?
			hV[0].a1T === aF.bs && hV[0].a1U(0) : hV[0].a1T !== aF.bs && hV[0].a1U(aF.bs))
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hV = [new d7(L(368), function() {
		aT3(0)
	}), new d7(L(296), function() {
		aC.dT(16)
	}), new d7(L(9), function() {
		aC.dT(17)
	}), new d7(L(369), function() {
		aC.aD.aJb()
	}, 0, 0, 1), new d7(L(58), function() {
		aC.dT(3, 1)
	}), new d7(L(171), function() {
		aC.dT(18)
	}), new d7(L(179), function() {
		aC.dT(31)
	}), new d7(L(74), function() {
		aT3(1)
	}), new d7(L(370), function() {
		var gx = ["Patreon", L(379), L(380), "YouTube Tutorial", "Discord", L(381), L(292), L(382), L(295), L(383), "Terms", "Privacy"],
			gy = [uY.a8Z, uY.a8a, uY.uZ, "https://www.youtube.com/watch?v=6QBmA9N1668", uY.a8c, uY.a8R, uY.a8X, uY.a8Y, uY.a8W, uY.a8V, uY.a8S, uY.a8U];
		1 === fg.id ? (gx.splice(2, 1), gx.splice(0, 1), gy.splice(2, 1), gy.splice(0, 1)) : 2 === fg.id && (gx.splice(1, 1), gx.splice(0, 1), gy.splice(1, 1), gy.splice(0, 1)), aC.dT(4, 1, new gR(L(370), aa.ab.gw(gx, gy), !1, [new d7(
			"⬅️ " + L(1),
			function() {
				aC.dT(1)
			})]))
	}), new d7(L(371), function() {
		aC.dT(4, 1, new gR(L(371), gJ.hB + "<br><a href='" + uY.a8R + "' target='_blank'>" + uY.a8R + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new d7("⬅️ " + L(1), function() {
				aC.dT(1)
			})]))
	}), new d7(L(372), function() {
		aC.dT(4, 1, new gR(L(372), L(384) + "<br>" + L(385), !1, [new d7("⬅️ " + L(1), function() {
			aC.dT(1)
		}), new d7(L(386), function() {
			fg.fh.uK(), aC.dT(1)
		})]))
	}), new d7(L(373), function() {
		fg.fh.uN(), aC.dT(4, 1, new gR(L(387), L(388) + " <a href='" + uY.a8U + "' target='_blank'>" + uY.a8U + "</a>", !1, [new d7("⬅️ " + L(1), function() {
			aC.dT(1)
		})]))
	})], hX = [new d7("⬅️ " + L(1), function() {
		aC.aD.vD()
	})], 8 === b6.hy() && (hV.unshift(new d7(L(298), function() {
		aC.dT(30)
	})), hV.unshift(new d7(L(376), function() {
		2 <= iy.aHr && (aC.gS(), lV.lH(), j.a0 = !0)
	}, 0, 1)), hV.unshift(new d7(L(377), function() {
		!p.ay && lU.ld(p.an) && (q7.q8.a0v(), aC.gS(), lU.lD) && lU.lH()
	}, 0, 1)), hV.unshift(new d7(L(378), function() {
		!p.ay && qW.qZ(p.an) && (a4a.v3(2), q7.q8.qV(), aC.gS(), lU.lD) && lU.lH()
	}, 0, 1))), 1 === fg.id && 5 <= fg.hB && hV.push(new d7(L(374), function() {
		fg.fh.uO()
	})), hT = new d6(L(375), hX), hU = new bO(hV, hT.dA)
}

function si() {
	function aTD(a2, gz, a3, aT8, a31, za, player) {
		if (!(a3 < 1 || a31 < a3))
			for (var ak = 0; ak <= gz; ak++) {
				var ai = pv.aFW(a2, a3);
				if (ao.iA.r1(ai) && !aa.dF.has(aT8, eu.ei(ai)) && eu.eU(ai, player)) return ai >> 2;
				a2 += za
			}
		return -1
	}

	function aTH(a3, gz, a2, aT8, aTB, za, player) {
		if (!(a2 < 1 || aTB < a2)) {
			gz = Math.max(gz, 0);
			for (var ak = 0; ak <= gz; ak++) {
				var ai = pv.aFW(a2, a3);
				if (ao.iA.r1(ai) && !aa.dF.has(aT8, eu.ei(ai)) && eu.eU(ai, player)) return ai >> 2;
				a3 += za
			}
		}
		return -1
	}

	function aTL(qs, qj, a86) {
		return -1 !== qj && (-1 === qs || pv.qw(qj, a86) < pv.qw(qs, a86)) ? qj : qs
	}
	this.qO = function(player, a86) {
		if (ao.sg.a82(player))
			for (var rW = pv.aFT(), aT8 = [];;) {
				var xK = function(a86, rW, aT8, player) {
					for (var pu = pv.qn(a86), px = pv.qp(a86), aTB = dx.dy - 2, a31 = dx.jK - 2, aTC = -1, eI = 0; eI < rW; eI++) {
						var a30 = Math.max(pu - eI, 1),
							aR6 = Math.max(px - eI, 1),
							kM = Math.min(pu + eI, aTB),
							kL = Math.min(px + eI, a31),
							qs = aTD(pu, kM - pu, px - eI, aT8, a31, 1, player),
							qj = aTD(pu - 1, pu - a30 - 1, px - eI, aT8, a31, -1, player),
							kM = aTD(pu, kM - pu, px + eI, aT8, a31, 1, player),
							a30 = aTD(pu - 1, pu - a30 - 1, px + eI, aT8, a31, -1, player),
							aTG = aTH(px, kL - px - 1, pu - eI, aT8, aTB, 1, player),
							aTI = aTH(px - 1, px - aR6 - 2, pu - eI, aT8, aTB, -1, player),
							kL = aTH(px, kL - px - 1, pu + eI, aT8, aTB, 1, player),
							aR6 = aTH(px - 1, px - aR6 - 2, pu + eI, aT8, aTB, -1, player);
						if (aTC = aTL(aTC, qs, a86), aTC = aTL(aTC, qj, a86), aTC = aTL(aTC, kM, a86), aTC = aTL(aTC, a30, a86), aTC = aTL(aTC, aTG, a86), aTC = aTL(aTC, aTI, a86), aTC = aTL(aTC, kL, a86), 0 <= (aTC = aTL(aTC, aR6, a86)) &&
							eI * eI >= pv.qw(aTC, a86)) return aTC
					}
					return -1
				}(a86, rW, aT8, player);
				if (-1 === xK) break;
				var id = eu.ei(pv.qA(xK));
				if (ao.iA.qf(player, id)) return !! function(player, xK, a86) {
					for (var qb = pv.aFb(xK, a86), ak = 0; ak < 4; ak++) {
						var aU = pv.a87(xK, qb);
						if (eu.eV(pv.qA(aU), player)) return eC.qP[6] = qb, 1;
						qb = (qb + 1) % 4
					}
					return
				}(player, xK, a86) && (eC.qP[7] = xK, !0);
				aT8.push(id)
			}
		return !1
	}
}

function sS() {
	this.a83 = 512, this.a84 = 8, this.om = 0, this.aDV = 0, this.oh = new Uint16Array(this.a83), this.og = new Uint32Array(this.a83), this.aMH = new Uint16Array(this.a83), this.oi = new Uint32Array(this.a83), this.a9I = new Uint16Array(this.a83),
		this.ap = new Uint16Array(this.a83), this.aDJ = new Uint8Array(this.a83), this.oj = new Uint8Array(this.a83), this.rI = new Array(this.a83), this.aDR = new Uint16Array(this.a83), this.r3 = new Uint8Array(p.dS), this.r4 = new Uint16Array(this
			.a84 * p.dS), this.aB = function() {
			this.om = 0, this.aDV = 0, this.r3.fill(0), this.rI.fill(null)
		}, this.a99 = function(player) {
			var ip = eC.j2[0],
				sW = eC.qP[1],
				rH = eC.eB[0],
				aTM = this.aDV,
				gz = this.om,
				a9D = pv.aFZ(rH[0]),
				ye = this.r3[player],
				yf = (player << 3) + ye;
			this.oh[gz] = yf, this.og[gz] = a9D, this.aMH[gz] = 0, ip < 60 && (aa.al.o5(player, 60 - ip), ip = 60), this.oi[gz] = ip, this.a9I[gz] = ao.sT.a99(gz, pv.a9H(a9D)), this.ap[gz] = aTM, this.aDJ[gz] = sW, this.oj[gz] = 0, this.rI[gz] = rH,
				this.aDR[gz] = 0, this.aDV = (aTM + 1) % 65536, this.r3[player] = ye + 1, this.r4[yf] = gz, this.om++, ao.sW.aNA(player, rH[rH.length - 1], sW, aTM, ip)
		}, this.az = function() {
			ao.sW.az();
			for (var g6 = p.an, h4 = ao.iA.rE(g6), aCn = (! function(aCn) {
					for (var aTR, og = aCn.og, oi = aCn.oi, oj = aCn.oj, aMH = aCn.aMH, a9I = aCn.a9I, rI = aCn.rI, aDR = aCn.aDR, aCn = aCn.om, op = dx.dy << 4, ak = aCn - 1; 0 <= ak; ak--) {
						var aTS = og[ak],
							rH = rI[ak],
							aTT = aDR[ak],
							a9D = pv.aFZ(rH[aTT]),
							a9E = pv.aFZ(rH[aTT + 1]),
							aTU = a9D % op,
							a9D = ~~((a9D + .5) / op),
							aTW = a9E % op,
							aTX = ~~((a9E + .5) / op),
							aTY = aTW - aTU,
							aTZ = aTX - a9D,
							eI = Math.max(~~Math.sqrt(aTY * aTY + aTZ * aTZ + .5), 1),
							aTa = oi[ak],
							aTa = (aTa = oj[ak] ? 4e4 : 25e4 + Math.min(20 * aTa, 3e5) + Math.min(aTa >> 3, 5e4), aMH[ak] + Math.max(~~((aTa + .5) / eI), 1));
						65535 <= aTa ? aTT + 2 < rH.length ? (aDR[ak] = aTT + 1, og[ak] = aTR = function(ak, aTb, aTU, aTV, aTT, eI, rH, op) {
							aTb = Math.min(aTb - 65535, 65535);
							var rH = pv.aFZ(rH[aTT + 2]),
								aTT = rH % op - aTU,
								rH = ~~((rH + .5) / op) - aTV,
								aTd = Math.max(~~Math.sqrt(aTT * aTT + rH * rH + .5), 1);
							return aTb = Math.min(Math.floor((eI * aTb + .5) / aTd), 65534), ao.aD.aMH[ak] = aTb, aTU + dV.eF(aTb * aTT, 65535) + op * (aTV + dV.eF(aTb * rH, 65535))
						}(ak, aTa, aTW, aTX, aTT, eI, rH, op)) : (og[ak] = aTR = a9E, aMH[ak] = 65535) : (aMH[ak] = aTa, og[ak] = aTR = aTU + dV.eF(aTa * aTY, 65535) + op * (a9D + dV.eF(aTa * aTZ, 65535))), a9I[ak] = ao.sT.a9B(a9I[ak],
							aTS, aTR)
					}
				}(this), ! function(aCn) {
					if (j.b2() % 2 == 1) {
						var ak, qc, af, eM, aT, aTe, aTf, aTg, jq, b, c, a9D, aTh, aQM, aTj, k1, gz = aCn.om,
							og = aCn.og,
							oh = aCn.oh,
							oi = aCn.oi,
							oj = aCn.oj,
							sT = ao.sT.sT,
							aNe = sT.length,
							a96 = ao.sT.a96,
							op = dx.dy << 4,
							aTl = p.e0,
							aTm = eL.jd,
							gq = (gz - 1) * (dV.eF(j.b2(), 2) % 2);
						for (ak = 0; ak < gz; ak++)
							for (qc = Math.abs(ak - gq), a9D = og[qc], af = pv.a9H(a9D), jq = oh[qc] >> 3, b = a9D % op, c = ~~((a9D + .5) / op), aTj = oi[qc], eM = 0; eM < 9; eM++)
								if (!((aTe = af + a96[eM]) < 0 || aNe <= aTe))
									for (aTg = sT[aTe], aTf = aTg.length, aT = 0; aT < aTf; aT++) aTh = aTg[aT], k1 = oh[aTh] >> 3, jq == k1 || aTl && aTm[jq] === aTm[k1] && aTm[jq] || (k1 = og[aTh], (aQM = b - k1 % op) * aQM + (aQM = c - ~~(
										(k1 + .5) / op)) * aQM < 14400 && (k1 = oi[aTh], aQM = k1 <= aTj ? Math.max(1, dV.eF(k1 + dV.eF(aTj - k1, 10), 10)) : Math.max(1, dV.eF(aTj, 10)), oi[aTh] = Math.max(k1 - aQM, 0), oj[aTh] = 4))
					}
				}(this), ! function(aCn) {
					if (j.b2() % 5 == 3)
						for (var oi = aCn.oi, gz = aCn.om, ak = 0; ak < gz; ak++) {
							var ip = oi[ak];
							oi[ak] = Math.max(ip - Math.max(1, ip >> 7), 0)
						}
				}(this), this), oi = aCn.oi, oj = aCn.oj, ak = aCn.om - 1; 0 <= ak; ak--) oj[ak] = oj[ak] >> 1, 0 === oi[ak] && (ao.sm.aKe(ak), ao.sQ.aMB(ak));
			iy.iz(g6, h4 - ao.iA.rE(g6), 15)
		}
}

function vh() {
	this.aB = function() {
		! function() {
			var data = aK.f4.data;
			0 === data[2].hB && (a5.fQ > a5.fS || 0 !== fg.id) && (data[2].value = data[2].aE4 = 1);
			0 === data[100].hB && (data[100].value = data[100].aE4 = (0 === fg.id ? "Player " : 1 === fg.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var ak, eH, data = aK.f4.data,
			gz = data.length;
		for (ak = 0; ak < gz; ak++) data[ak] && data[ak].hB === aK.dd.hA(ak, !0) && (eH = aK.dd.hC(ak), data[ak].value = null === eH ? data[ak].aE4 : 2 === data[ak].type ? eH : Number(eH))
	}
}

function aAH() {
	var bP, a2, a3, aTp, aTq, aTr, k, aTs, aTt, aTu, aTv, gap, zoom, a5t, aTw;

	function aU8(lQ, lR, ai) {
		eu.ef(ai) || -1 === (lQ = ao.iA.r7(lQ, lR)) ? mY.aIy(ai) : mY.aJ1(lQ)
	}

	function aU5(aTs) {
		for (var ak = a5t.length - 1; 0 <= ak; ak--)
			if (a5t[ak] === aTs) return 1
	}

	function aU3(oH) {
		var ak, gz;
		if (-1 !== oH)
			for (gz = bP.length, ak = 0; ak < gz; ak++)
				if (bP[ak].lW && bP[ak].a2 + 1 === oH % 4 && bP[ak].a3 + 1 === oH >> 2) return ak;
		return -1
	}

	function aU1(lQ, lR) {
		var md = gap / 2;
		return lQ < a2 - aTp - 3 * md || a2 + 3 * aTp + 5 * md < lQ || lR < a3 - aTp - 3 * md || a3 + 2 * aTp + 3 * md < lR ? -1 : 4 * (lR < a3 - md ? 0 : lR < a3 + aTp + md ? 1 : 2) + (lQ < a2 - md ? 0 : lQ < a2 + aTp + md ? 1 : lQ < a2 + 2 * aTp +
			3 * md ? 2 : 3)
	}
	this.aTx = function() {
		var ak, eM, aU0 = [aF.c6, aF.cK, aF.bf, aF.cg, aF.cX];
		for (bP = new Array(10), ak = 0; ak < 10; ak++) bP[ak] = {
			id: ak,
			lW: !1,
			lX: 0,
			canvas: [],
			a2: 0,
			a3: 0
		};
		for (bP[0].colors = [0, 1, 2, 3], bP[0].a2 = 0, bP[0].a3 = 0, bP[1].colors = [1, 4], bP[1].a2 = 1, bP[1].a3 = 0, bP[2].colors = [0, 1], bP[2].a2 = -1, bP[2].a3 = 0, bP[3].colors = [0], bP[3].a2 = 0, bP[3].a3 = 0, bP[4].colors = [0, 2],
			bP[4].a2 = 1, bP[4].a3 = 1, bP[5].colors = [3], bP[5].a2 = 0, bP[5].a3 = -1, bP[6].id = 20, bP[6].colors = [0], bP[6].a2 = 1, bP[6].a3 = -1, bP[7].id = 21, bP[7].colors = [0], bP[7].a2 = 0, bP[7].a3 = 1, bP[8].id = 16, bP[8]
			.colors = [0], bP[8].a2 = 0, bP[8].a3 = 0, bP[9].id = 10, bP[9].colors = [4], bP[9].a2 = 2, bP[9].a3 = 0, ak = 0; ak < 10; ak++)
			for (eM = 0; eM < bP[ak].colors.length; eM++) bP[ak].canvas.push(function(id, a1u) {
				if (id < 20) return aa.canvas.a1s(i4.get(3), id, a1u);
				var a1u = i4.get(3).height,
					aZ = aa.ab.aS(a1u, a1u),
					ac = aa.ab.getContext(aZ);
				20 === id ? ac.drawImage(i4.get(18), 0, 0) : 21 === id && a9y.ae.aIr(a9y.iD.a22 + a9y.iD.a27, ac, 0, 0, a1u);
				return aZ
			}(bP[ak].id, aU0[bP[ak].colors[eM]]))
	}, this.aTz = function() {
		return bP
	}, this.aB = function() {
		a5t = [], a2 = a3 = k = 0, aTq = aTr = -1e3, this.resize()
	}, this.resize = function() {
		aTp = Math.floor((fg.fh.fi() ? .075 : .0468) * a5.fj), zoom = aTp / i4.get(3).height, gap = Math.floor(aTp / 3)
	}, this.a9h = function(lQ, lR) {
		return !!this.lW() && (j.a0 = !0, !!a9y.ae.lP(lQ, lR, aTt) || (lQ = function(lQ, lR) {
			aTr = aTq = -1e3;
			var aU2 = aU3(aU1(lQ, lR));
			if (-1 === aU2) return 0;
			if (1 !== bP[aU2].colors[bP[aU2].lX])
				if (5 === aU2) {
					if (! function() {
							var h4 = performance.now();
							aTw + 4e3 < h4 && (a5t = []);
							aTw = h4
						}(), aU5(aTs)) return 1;
					a5t.push(aTs), 16 < a5t.length && a5t.shift()
				} else if (6 === aU2) {
				for (var ak = a5t.length - 1; 0 <= ak; ak--) 0 === fe.gA[a5t[ak]] && a5t.splice(ak, 1);
				0 < a5t.length && (yD.aU6(1, a5t, !0) && q7.al.a5s(a5t, aTs), a5t = [])
			} else if (2 === aU2) j0.qR(aTs) && q7.q8.ir(lE.qF(), aTs);
			else if (3 === aU2) p.gB && q7.q8.q9(aTu);
			else if (0 === aU2)
				if (0 === bP[0].lX) {
					if (p.aJQ && fr.a7T() < 350) return 1;
					a4a.v3(4), q7.q8.qI(lE.qF(), aTs)
				} else qJ.qK(aTs, lE.qF());
			else if (1 === aU2) q7.q8.mt(lE.qF(), aTu);
			else if (9 === aU2) q7.q8.mv(lE.qF());
			else {
				if (7 === aU2) return a4a.v3(0), a9y.ae.show(lQ, lR), 2;
				if (4 === aU2) yD.aU6(0, [aTs], !0) && q7.al.a5q(aTs);
				else {
					if (8 !== aU2) return 0;
					q7.q8.qE(lE.qF(), aTv, aTs)
				}
			}
			return 1
		}(lQ, lR), this.n(), 2 === lQ && (a9y.ae.lW = !0), 0 < lQ))
	}, this.a4 = function(lQ, lR) {
		this.lW() || (aTq = lQ, aTr = lR, k = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = pv.pw(mouseX),
			coordY = pv.py(mouseY),
			coord = pv.pz(coordX, coordY),
			coord = pv.qA(coord);
		pv.q0(coordX, coordY) && aU8(mouseX, mouseY, coord)
	}, this.click = function(lQ, lR, a9n) {
		var pu = pv.pw(lQ),
			px = pv.py(lR),
			aU = pv.pz(pu, px),
			ai = pv.qA(aU);
		return !(!pv.q0(pu, px) || (pu = (fg.fh.fi() ? .025 : .0144) * a5.fj, px = performance.now(), Math.abs(lQ - aTq) > pu) || Math.abs(lR - aTr) > pu || k + 500 < px) && (k = px, a9n ? (aU8(lQ, lR, ai), !1) : lU.lD || this.lW() || !aa.al.am(p
			.an) || p.ay ? (this.n(), !1) : (p.gB ? 0 <= (aTu = q5.q6(aU)) && (bP[3].lW = !0) : 2 === p.q ? eu.eW(ai) && (aTs = eu.ea(ai), aa.al.is(aTs) || (bP[0].lW = !0, bP[0].lX = 1, bP[7].lW = !0)) : (ao.qQ.qR(p.an, aU) && (bP[0]
			.lW = !0, bP[0].lX = 1, bP[1].lW = !0, bP[1].lX = 0, bP[9].lW = !0, bP[9].lX = 0), ao.qN.qO(p.an, aU) && (bP[0].lW = !0, bP[0].lX = 1, bP[1].lW = !0, bP[1].lX = 1, aTu = eC.qP[7]), eu.eT(ai) ? (aTv = qB.qC.qD(ai)) && (
			pu = pv.qA(aTv), bP[8].lW = !0, aTs = eu.eg(pu) ? p.dS : eu.ea(pu)) : (eu.eY(p.an, ai) && (aTt = p.an, bP[0].lW = !0, bP[0].lX = 1, bP[7].lW = !0), -1 !== (px = q5.qG(aU)) && (eu.eg(px << 2) ? (aTs = p.dS, nZ.qH(p
			.an) ? (bP[0].lW = !0, bP[0].lX = 0) : nj.pU(p.an) && (bP[0].lW = !0, bP[0].lX = 3)) : (aTs = eu.ea(px << 2), bP[0].lX = 1, bP[5].lW = function(aTs) {
			return !aa.al.is(aTs) && !aU5(aTs) && yD.aU6(1, [aTs], !1)
		}(aTs), bP[7].lW || aa.al.is(aTs) || (aTt = aTs, bP[7].lW = !0), bP[4].lW = !aa.al.is(aTs) && !j7.aUC(aTs) && yD.aU6(0, [aTs], !1), bP[6].lW = function(aTs) {
			if (0 === a5t.length) return !1;
			if (performance.now() > aTw + 4e3) return !(a5t = []);
			return !aU5(aTs) && ! function(aTs) {
				var ak;
				if (p.e0)
					for (ak = a5t.length - 1; 0 <= ak; ak--)
						if (!nZ.qL(aTs, a5t[ak])) return 1;
				return
			}(aTs)
		}(aTs), nZ.qL(aTs, p.an) ? (nZ.qM(p.an, aTs) ? (bP[0].lX = 0, bP[0].lW = !0) : nj.pU(p.an) && (bP[0].lX = 3, bP[0].lW = !0), bP[0].lW = this.aUE()) : (bP[2].lW = !0, j0.qR(aTs) ? bP[2].lX = 0 : bP[2].lX = 1,
			bP[0].lW = !0))))), this.aU9(lQ, lR)))
	}, this.aU9 = function(lQ, lR) {
		return a2 = lQ - Math.floor(aTp / 2), a3 = lR - Math.floor(aTp / 2), !!this.lW()
	}, this.l7 = function(lQ, lR) {
		return !!this.lW() && (a9y.ae.lW ? !a9y.ae.aPm(lQ, lR) && (a9y.ae.lW = !1, j.a0 = !0) : function(aCn, lQ, lR) {
			lQ = aU1(lQ, lR);
			if (0 <= aU3(lQ)) return !1;
			if ((1 === lQ || 6 === lQ) && 0 <= aU3(2)) return !1;
			if ((6 === lQ || 9 === lQ) && 0 <= aU3(10)) return !1;
			return aCn.n(), j.a0 = !0
		}(this, lQ, lR))
	}, this.n = function() {
		for (var ak = bP.length - 1; 0 <= ak; ak--) bP[ak].lW = !1, bP[ak].lX = 0;
		a9y.ae.lW = !1
	}, this.lW = function() {
		return this.aUE() || a9y.ae.lW
	}, this.aUE = function() {
		for (var gz = bP.length, ak = 0; ak < gz; ak++)
			if (bP[ak].lW) return !0;
		return !1
	}, this.g9 = function() {
		if (this.lW())
			if (a9y.ae.lW) a9y.ae.g9();
			else {
				var ak, ac = gD,
					eM = bP,
					gz = eM.length,
					aUJ = (aTp + gap) / zoom;
				for (ac.imageSmoothingEnabled = !0, ac.setTransform(zoom, 0, 0, zoom, a2, a3), ak = 0; ak < gz; ak++) eM[ak].lW && gD.drawImage(eM[ak].canvas[eM[ak].lX], eM[ak].a2 * aUJ, eM[ak].a3 * aUJ);
				ac.imageSmoothingEnabled = !1, ac.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aB1() {
	this.y2 = null, this.a0 = !1, this.k = 0, this.wF = 56;
	var aUK = 0;

	function aUL() {
		j.k = aUK = performance.now(), j.y2.az(), window.requestAnimationFrame(aUL)
	}
	this.aB = function() {
		this.aJW(), window.requestAnimationFrame(aUL), this.k = performance.now()
	}, this.v0 = function() {
		p.ay ? (this.y2 = new aNX, this.y2.aB()) : p.lI ? this.y2 = new aDI : (this.y2 = new w3, this.y2.aB())
	}, this.aJW = function() {
		this.y2 = new a8N, this.a0 = !0
	}, this.az = function() {
		this.y2.w4++
	}, this.b2 = function() {
		return this.y2.w4
	}, this.xa = function() {
		var h4 = performance.now();
		h4 < aUK + 1e3 || (this.k = h4, this.y2.az())
	}
}

function aBr() {
	var aUM = 0,
		aUN = 0,
		aUO = 300,
		aUP = 300,
		aUQ = 0;
	this.yS = 0, this.f4 = new Uint32Array(512), this.aB = function() {
		aUN = aUM = 0, this.yS = 0, aUQ = 0
	}, this.az = function() {
		if (function() {
				var gz = it.yR.yS;
				if (0 === gz) return 1;
				var f4 = it.yR.f4;
				if (j.b2() % 35 == 6) {
					for (var ak = gz - 1; 0 <= ak; ak--) eu.eg(f4[ak] << 2) || (gz--, f4[ak] = f4[gz]);
					it.yR.yS = gz
				}
				return gz < f4.length
			}())
			if (aUO <= aUM) {
				var aUU = it.yR.yS;
				if (aUU) {
					if (j.b2() % 350 != 1) return;
					if (aUQ !== aUU) return void(aUQ = aUU);
					if (!aa.al.is(re[0])) return
				} else if (j.b2() % 12 != 8) return;
				aa.al.aHO() || it.yR.aB()
			} else {
				var ak, fS = dx.dy,
					aUV = fS - 2,
					aUU = aUV * (dx.jK - 2),
					aUW = aUO,
					f4 = it.yR.f4,
					af = it.yR.yS,
					aUX = f4.length,
					gq = Math.min(aUN + aUW * ((1 + 19 * it.performance.yT) * aUP), aUU);
				for (ak = aUN; ak < gq; ak += aUW) {
					var ai = 4 * (ak % aUV + (dV.eF(ak, aUV) + 1) * fS + 1);
					if (eu.eg(ai) && (f4[af] = ai >> 2, ++af === aUX)) {
						ak += aUW;
						break
					}
				}(aUN = ak) >= aUU && (aUN = ++aUM), it.yR.yS = af
			}
	}
}

function aAV() {
	var aUY = new Uint16Array(p.dS),
		aUZ = 0;

	function aUd(a0t, aUb) {
		var aT = j.b2();
		return 3213 <= aT ? 4 + dV.eF(100 * aUb, fv.fw(a0t)) : (a0t = 1 + dV.eF(p.wr, 300), aT < 357 ? 2 + dV.eF(100 * aUb, a0t) : aT < 714 ? 2 + dV.eF(100 * aUb, 4 * a0t) : aT < 1071 ? 2 + dV.eF(100 * aUb, 10 * a0t) : aT < 2142 ? 2 + dV.eF(100 *
			aUb, 30 * a0t) : 2 + dV.eF(100 * aUb, 100 * a0t))
	}

	function aUc(a0t) {
		return p.lI || 7 <= p.mR || 4284 <= j.b2() || aa.al.is(a0t)
	}
	this.aB = function() {
		aUY.fill(0), aUZ = 15
	}, this.qR = function(io) {
		var player = p.an;
		return !!aa.al.aHg(player, io) && !(!aa.al.iq(player, aa.al.aFV(player, lE.qF()), io) || (player = io, io = eC.j2[0], !aUc(player) && aUY[player] + aUd(player, io) > aUZ))
	}, this.j1 = function(a0t, aUb) {
		if (!aUc(a0t)) {
			aUb = aUd(a0t, aUb);
			if (aUY[a0t] + aUb > aUZ) return !1;
			aUY[a0t] += aUb
		}
		return !0
	}, this.az = function() {
		j.b2() % 100 == 99 && (j.b2() < 1071 ? aUZ += 4 : j.b2() < 2142 ? aUZ += 6 : j.b2() < 3213 ? aUZ += 8 : aUZ += 10)
	}
}

function aAx() {
	this.a2r = !1, this.et = !1, this.aRL = !1, this.aUe = [0, 0, 0, 0], this.wD = function() {
		var b, c, d, e;
		this.aRL = this.aRL || this.et, (this.et || this.a2r && this.aRL) && (b = ev.ew[0], c = ev.ew[1], d = ev.ew[2], e = ev.ew[3], b = b < this.aUe[0] ? this.aUe[0] : b, c = c < this.aUe[1] ? this.aUe[1] : c, d = d > this.aUe[2] ? this.aUe[
			2] : d, e = e > this.aUe[3] ? this.aUe[3] : e, this.et = !1, this.a2r = !1, b === this.aUe[0] && c === this.aUe[1] && d === this.aUe[2] && e === this.aUe[3] ? this.wO() : b <= d && c <= e && wu.putImageData(wv, 0, 0, b, c, d - b +
				1, e - c + 1))
	}, this.wO = function() {
		this.aRL && this.aUe[2] >= this.aUe[0] && this.aUe[3] >= this.aUe[1] && wu.putImageData(wv, 0, 0, this.aUe[0], this.aUe[1], this.aUe[2] - this.aUe[0] + 1, this.aUe[3] - this.aUe[1] + 1), this.aRL = !1
	}, this.lO = function() {
		this.aUe[2] >= this.aUe[0] && this.aUe[3] >= this.aUe[1] && wu.putImageData(wv, 0, 0, this.aUe[0], this.aUe[1], this.aUe[2] - this.aUe[0] + 1, this.aUe[3] - this.aUe[1] + 1), this.aRL = !1
	}, this.aB = function() {
		var a2, a3;
		this.a2r = !1, this.et = !1, this.aRL = !1, this.aUe[0] = dx.dy, this.aUe[1] = dx.jK, this.aUe[2] = this.aUe[3] = 0;
		loop: for (a2 = 1; a2 < dx.dy - 1; a2++)
			for (a3 = dx.jK - 2; 1 < a3; a3--)
				if (1 === eX[eu.eP(a2, a3) + 2]) {
					this.aUe[0] = a2;
					break loop
				} loop: for (a3 = 1; a3 < dx.jK - 1; a3++)
			for (a2 = dx.dy - 2; 1 < a2; a2--)
				if (1 === eX[eu.eP(a2, a3) + 2]) {
					this.aUe[1] = a3;
					break loop
				} loop: for (a2 = dx.dy - 2; 0 < a2; a2--)
			for (a3 = dx.jK - 2; 1 < a3; a3--)
				if (1 === eX[eu.eP(a2, a3) + 2]) {
					this.aUe[2] = a2;
					break loop
				} loop: for (a3 = dx.jK - 2; 0 < a3; a3--)
			for (a2 = dx.dy - 2; 1 < a2; a2--)
				if (1 === eX[eu.eP(a2, a3) + 2]) {
					this.aUe[3] = a3;
					break loop
				}
	}
}

function iE() {
	this.ts = function(aJ) {
		if ((a4A = f7.i9.a4A[aJ]) < 2) return !1;
		var fJ = f7.aD.ez[aJ],
			aUf = 9 === fJ.a43 ? 333 : 512,
			a4A = Math.min(a4A, aUf);
		8 === fJ.a43 && (a4A -= a4A % 2);
		aUf = f7.i9.a0N[aJ].splice(0, a4A), f7.i9.a4A[aJ] -= a4A, a4A = function(hl) {
			if (f7.i8)
				for (var gz = hl.length, tJ = f7.i8.tJ, ak = 0; ak < gz; ak++)
					if (hl[ak].tJ === tJ) return ak;
			return -1
		}(aUf);
		return -1 === a4A ? (f7.i9.tM = f7.i9.tM.concat(aUf), 1e3 < f7.i9.tM.length && f7.i9.tM.splice(0, f7.i9.tM.length - 1e3), f7.aD.f1 += 29 === aC.b1 && f7.aD.f0[0] === aJ && 1 === f7.aD.f0[2], !1) : (8 === fJ.a43 && (fJ.hd = (fJ.hd + (
			a4A >> 1)) % 1024, aJ = a4A - a4A % 2, a4A %= 2, aUf = aUf.slice(aJ, 2 + aJ)), xf.aB(fJ, aUf, a4A), !0)
	}, this.i0 = function(fJ, hl, hm) {
		var eI = p.data = new aHB,
			aUj = (eI.spawningSeed = fJ.spawningSeed, fJ.a43 < 7 ? (eI.gameMode = 1, eI.numberTeams = fJ.a43 + 2) : 9 === fJ.a43 ? (eI.gameMode = eI.isZombieMode = 1, eI.numberTeams = 2) : (eI.gameMode = 0, eI.battleRoyaleMode = 7 === fJ.a43 ?
				0 : 10 === fJ.a43 ? 1 : 2), eI.selectedPlayer = hm, eI.isContest = fJ.a4C, eI.mapType = dx.aUh(fJ.nd) ? 0 : 1, dx.aUi(eI, fJ.nd), eI.mapSeed = fJ.mapSeed, eI.humanCount = hl.length);
		eI.selectableSpawn = 1 === eI.gameMode || aUj < 100, eI.colorsData = new Uint32Array(aUj), eI.playerNamesData = new Array(aUj), eI.nG = new Uint32Array(aUj);
		for (var ak = 0; ak < aUj; ak++) eI.colorsData[ak] = hl[ak].color, eI.playerNamesData[ak] = hl[ak].username, eI.nG[ak] = hl[ak].tJ;
		if (2 === eI.battleRoyaleMode)
			for (eI.elo = new Uint16Array(aUj), ak = 0; ak < aUj; ak++) eI.elo[ak] = hl[ak].elo;
		b6.setState(8), dx.gZ(fJ.nd, eI.mapSeed), p.bC(), p.lv = 2
	}
}

function aAF() {
	var size, sY;
	this.aB = function() {
		size = p.aFp, sY = new Uint16Array(p.dS);
		for (var e3 = p.e3, ak = p.aFp - 1; 0 <= ak; ak--) sY[ak] = e3 + ak
	}, this.az = function() {
		it.aBw.az();
		for (var ak = size - 1; 0 <= ak; ak--)
			if (0 === fe.gA[sY[ak]]) {
				ju = void 0;
				var ju = ak;
				size--, sY[ju] = sY[size]
			} else mG.az(sY[ak])
	}, this.aUl = function(g6) {
		sY[size++] = g6
	}
}

function aAi() {
	this.a14 = function(player) {
		a4X.aUl(player), p.a10++, fe.gC[player] = 2, fe.te[player] = a1h.aKm.aRm(), player === p.an && (a09.show(!1, !1), fr.aFw(), mO.zP.mX()), j7.uG(player)
	}
}

function aAT() {
	var aUn, canvas, ma, aUo;

	function aUt(aJ, name, aUu, bE) {
		ma[aJ] = name, canvas[aJ] = new Image, canvas[aJ].onload = function() {
			! function(aJ, aUu) {
				var aUx, a16 = null;
				7 === aUu ? aUx = aa.a1y.aUy : 8 === aUu ? (aUx = aa.a1y.aUz, a16 = .1) : 3 === aUu ? (aUx = aa.a1y.aV0, a16 = .06) : 5 === aUu ? aUx = aa.a1y.aV1 : 6 === aUu ? aUx = aa.a1y.aV2 : 4 === aUu && (aUx = aa.a1y.aV3);
				canvas[aJ] = aa.a1y.aNT(canvas[aJ], aUx, a16)
			}(aJ, aUu), aUw()
		}, canvas[aJ].onerror = function(i) {
			console.error("Error loading image at index", aJ, "Error:", i), aUw()
		}, canvas[aJ].src = "data:image/png;base64," + bE
	}

	function aUw() {
		aUn--, aUq()
	}

	function aUq() {
		0 === aUn && (aUn = -1, aUs(), j.a0 = !0, canvas[7] = aUo, canvas[8] = aUo, canvas[9] = aUo, canvas[10] = aUo, 5 === aC.b1) && aC.b3().aJe.resize()
	}

	function aUs() {
		m.aTx(), a6j.aKy([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== fg.id, 1 !== fg.id, !0, !0, !0]), a9y.ae = new vQ, a9y.ae.aB(), qW.dw()
	}
	this.aB = function() {
		if (void 0 === canvas) {
			aUn = 23, canvas = new Array(aUn), ma = new Array(aUn), (aUo = document.createElement("canvas")).width = 1;
			for (var ak = aUn - (aUo.height = 1); 0 <= ak; ak--) canvas[ak] = aUo;
			aUs(), aUt(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aUt(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aUt(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aUt(3, "orders", 6,
					"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"
					), aUt(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aUt(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aUt(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aUt(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aUt(8,
					"googleplay", 3,
					"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"
					), aUt(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aUt(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aUt(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aUt(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aUt(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aUt(14, "bestPlayer", 5,
					"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"
					), aUt(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aUt(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), aUt(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aUt(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aUt(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aUt(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aUt(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aUt(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(aJ) {
		return canvas[aJ]
	}, this.i5 = function(name) {
		for (var ak = ma.length - 1; 0 <= ak; ak--)
			if (ma[ak] === name) return canvas[ak];
		return aUo
	}, this.rq = function() {
		return aUn <= 0
	}, this.aNK = function() {
		aUn = 0, aUq()
	}
}

function aKn() {
	this.aV5 = function() {
		for (var g6, gz = tq.th, uc = tq.tg, te = fe.te, aCL = this.aRm(), ak = 0; ak < gz; ak++) g6 = uc[ak], aa.al.is(g6) || (te[g6] = aCL);
		var aKa = fe.aKa,
			a2P = fe.a2P,
			a2Q = fe.a2Q,
			tp = fe.tp,
			gz = p.e3;
		for (ak = 0; ak < gz; ak++)(0 === tp[ak] || a2Q[ak] < 1 || 2 * aKa[ak] > 3 * (a2P[ak] + a2Q[ak])) && (te[ak] = 0);
		var aV6 = 0;
		for (ak = 0; ak < gz; ak++) aV6 += 0 < te[ak];
		return aV6
	}, this.aRm = function() {
		return Math.min(65535, j.b2())
	}
}

function kq() {
	this.a8F = function(bE) {
		for (var gz = bE.length, fS = n4, ak = 0; ak < gz; ak++) fS.ga(16, bE.charCodeAt(ak))
	}
}

function aAw() {
	var gap, aV7 = !1,
		hR = 0,
		fS = 0,
		fz = 0,
		canvas = null,
		fW = null,
		aV8 = null;

	function aVA() {
		for (var aVG, aVE = 0, gz = 0, aT = Math.floor(fS / 2), aj = Math.floor(fz / 2), aVF = 1.5 * Math.PI, ak = p.jX; 0 <= ak; ak--) gz += aV8[ak], 0 === aV8[ak] && aVE++;
		if (aV7 = !1, fW.clearRect(0, 0, fS, fS), 0 < gz)
			if (aVE === p.jX) {
				for (ak = p.jX; 0 <= ak; ak--)
					if (0 < aV8[ak]) {
						! function(ak, aT, aj) {
							fW.fillStyle = eL.aO7[eL.jk[ak]], fW.beginPath(), fW.arc(aT, aT, aj, 0, 2 * Math.PI), fW.fill()
						}(ak, aT, aj);
						break
					}!
				function(aT) {
					var fontSize = aT / 3;
					fW.font = aa.ab.fk(1, fontSize), fW.fillStyle = aF.aG, fW.fillText("100%", aT, aT + .1 * fontSize)
				}(aT)
			} else {
				for (ak = 0; ak <= p.jX; ak++) 0 < aV8[ak] && (! function(ak, aT, aj, aVF, aVG) {
					fW.fillStyle = eL.aO7[eL.jk[ak]], fW.beginPath(), fW.arc(aT, aT, aj, aVF, aVG), fW.lineTo(aT, aT), fW.fill()
				}(ak, aT, aj, aVF, aVG = aVF + 2 * Math.PI * aV8[ak] / gz), function(aT, aj, aVF, aVG) {
					var eH = (aVG - aVF) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * aj * Math.min(eH, .37);
					fontSize < 8 || (aVF = (aVF + aVG) / 2, aVG = (__fx.settings.detailedTeamPercentage ? (100 * eH).toFixed(2) : Math.floor(100 * eH + .5)) + "%", aj *= .525 - Math.max(.6 * (eH - .7), 0), fW.font = aa.ab.fk(1, fontSize), fW
						.fillStyle = aF.aG, fW.fillText(aVG, aT + Math.cos(aVF) * aj, aT + Math.cos(aVF + 1.5 * Math.PI) * aj))
				}(aT, aj, aVF, aVG), 0 !== ak && aVL(aT, aj, aVF), aVF = aVG);
				aVL(aT, aj, 1.5 * Math.PI)
			}!
		function(aT, aj) {
			fW.beginPath(), fW.arc(aT, aT, aj, 0, 2 * Math.PI), fW.stroke()
		}(aT, aj)
	}

	function aVL(aT, aj, aMK) {
		fW.beginPath(), fW.moveTo(aT, aT), fW.lineTo(aT + Math.cos(aMK) * aj, aT + Math.cos(aMK + 1.5 * Math.PI) * aj), fW.stroke()
	}
	this.aB = function() {
		if (p.e0) {
			hR = 0, aV8 = new Uint32Array(p.jX + 1);
			for (var ak = p.jX; 0 <= ak; ak--) aV8[ak] = 0;
			for (ak = tq.th - 1; 0 <= ak; ak--) aV8[eL.jd[tq.tg[ak]]] += 1;
			this.resize()
		} else aV8 = fW = canvas = null
	}, this.aOo = function() {
		return fS
	}, this.resize = function() {
		p.e0 && (fS = Math.floor(.95 * (fg.fh.fi() && !p.lZ ? .18 * a5.min : .13 * a5.fj)), fS = (fS *= 1 + (.5 + .2 * fg.fh.fi()) * p.lZ) + fS % 2, gap = Math.max(1, .015 * fS), fz = Math.floor(fS - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = fS, canvas.height = fS, (fW = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, fW.strokeStyle = aF.aG, aa.ab.textAlign(fW, 1), aa.ab.textBaseline(fW, 1), aVA())
	}, this.aCO = function() {
		var h4, a71 = this.zp();
		return eL.jk[a71] || (a71 = function() {
			for (var a71 = -1, ak = p.jX; 1 <= ak; ak--)(-1 === a71 || aV8[ak] > aV8[a71]) && (a71 = ak);
			return a71
		}(), h4 = fe.jQ[re[0]], -1 !== a71 && aV8[a71] > h4) ? aV8[a71] : h4
	}, this.aVC = function() {
		return hR = 31, this.az(), this.zp()
	}, this.zp = function() {
		for (var a71 = 0, ak = p.jX; 0 < ak; ak--) aV8[ak] > aV8[a71] && (a71 = ak);
		return a71
	}, this.aCb = function() {
		return aV8[2] > 2 * aV8[1] || aV8[1] > 4 * aV8[2]
	}, this.ui = function(aTm) {
		for (var jl = 0, tg = tq.tg, jd = eL.jd, gz = tq.th, jp = eC.jp, ak = 0; ak < gz; ak++) {
			var g6 = tg[ak];
			jd[g6] === aTm && (jp[jl++] = g6)
		}
		eC.uj[0] = jl
	}, this.aMO = function(aTm) {
		for (var jl = 0, tg = tq.tg, jd = eL.jd, gz = tq.th, jp = eC.jp, ak = 0; ak < gz; ak++) {
			var g6 = tg[ak];
			jd[g6] !== aTm && (jp[jl++] = g6)
		}
		eC.uj[0] = jl
	}, this.aHP = function() {
		for (var jl = 0, ak = p.jX; 0 <= ak; ak--) jl += 0 < aV8[ak];
		return jl
	}, this.az = function() {
		if (p.e0 && 32 <= ++hR) {
			hR = 0;
			for (var ak = p.jX; 0 <= ak; ak--) aV8[ak] = 0;
			for (ak = tq.th - 1; 0 <= ak; ak--) aV8[eL.jd[tq.tg[ak]]] += fe.jQ[tq.tg[ak]];
			aV7 = !0
		}
	}, this.yM = function() {
		p.e0 && aV7 && aVA()
	}, this.g9 = function() {
		p.e0 && (p.lZ ? gD.drawImage(canvas, bW.gap, bW.gap) : gD.drawImage(canvas, bW.gap, aOn + 2 * bW.gap))
	}
}

function aAG() {
	var aVN, aVO, aVP;
	aVN = [32, 65, 191, 913, 931], aVO = [64, 127, 688, 930, 1155], aVP = new Array(aVN.length + 1);
	for (var ak = 0; ak < aVP.length; ak++) {
		aVP[ak] = 0;
		for (var ju = ak - 1; 0 <= ju; ju--) aVP[ak] += aVO[ju] - aVN[ju]
	}

	function aVW(aT) {
		for (var ak = aVN.length - 1; 0 <= ak; ak--)
			if (aT >= aVN[ak] && aT < aVO[ak]) return ak;
		return -1
	}
	this.aVR = function(bE) {
		return 0 !== (bE = bE.trim()).indexOf("Bot ") && 0 !== bE.indexOf("[Bot] ") && function(bE, aVT, aVU) {
			var gz = (bE = bE.trim()).length;
			if (gz < aVT || aVU < gz) return !1;
			for (var aT, aVV = 0, ak = 0; ak < gz; ak++)
				if (aT = bE.charCodeAt(ak), aVV += 65 <= aT && aT <= 90 || 1040 <= aT && aT <= 1071 ? 1 : 0, -1 === aVW(aT)) return !1;
			if (3 < aVV && aVV > Math.floor(gz / 2)) return !1;
			return !0
		}(bE, 3, 20)
	}, this.lt = function(bE) {
		for (var gz = (bE = bE.trim()).length, eB = [], ak = 0; ak < gz; ak++) {
			var aT, g6 = aVW(aT = bE.charCodeAt(ak));
			eB.push(aVP[g6] + aT - aVN[g6])
		}
		return eB
	}, this.rt = function(eB) {
		for (var aT, eM, bE = "", gz = eB.length, ak = 0; ak < gz; ak++)
			for (eM = 1; eM < aVP.length; eM++)
				if (eB[ak] < aVP[eM]) {
					aT = aVN[eM - 1] + eB[ak] - aVP[eM - 1], bE += String.fromCharCode(aT);
					break
				} return bE
	}, this.aVX = function(bE) {
		for (var eB = this.lt(bE), result = "", ak = 0; ak < eB.length; ak++) result = (result += eB[ak] < 10 ? "00" : eB[ak] < 100 ? "0" : "") + eB[ak].toString(10);
		return result
	}, this.aVY = function(bE) {
		for (var eB = new Array(Math.floor(bE.length / 3)), ak = 0; ak < bE.length; ak += 3) eB[Math.floor(ak / 3)] = parseInt(bE.substring(ak, ak + 3));
		return this.rt(eB)
	}, this.aVZ = function(bE) {
		for (var eH, eB = [bE.length], ak = 0; ak < bE.length; ak++) eB[ak] = bE.charCodeAt(ak) - 48;
		var result = "";
		for (ak = 0; ak < bE.length; ak++) ak === bE.length - 1 || 51 < 10 * eB[ak] + eB[ak + 1] ? result += eB[ak].toString() : (eH = 10 * eB[ak] + eB[ak + 1], result += String.fromCharCode(eH + (eH < 26 ? 65 : 71)), ak++);
		return result
	}, this.aVa = function(bE) {
		for (var aT, result = "", ak = 0; ak < bE.length; ak++) 48 <= (aT = bE.charCodeAt(ak)) && aT < 58 ? result += String.fromCharCode(aT) : 65 <= aT && aT < 75 ? result += "0" + (aT - 65).toString() : 75 <= aT && aT < 91 ? result += (aT - 65)
			.toString() : 97 <= aT && aT < 123 && (result += (aT - 71).toString());
		return result
	}, this.aVb = function(bE) {
		for (var gz = bE.length, eB = [], ak = 0; ak < gz; ak++)(aT = bE.charCodeAt(ak)) < 58 ? eB.push(bE[ak]) : (aT -= aT < 91 ? 65 : 71, eB.push(String(dV.eF(aT, 10))), eB.push(String(aT - 10 * dV.eF(aT, 10))));
		var gz = eB.length - 2,
			aT = 0,
			aJN = [];
		for (ak = 0; ak < gz; ak += 3) aJN[aT++] = parseInt(eB[ak] + eB[ak + 1] + eB[ak + 2]);
		return aJN
	}, this.aRW = function() {
		for (var aj, aVc = "", ak = 0; ak < 6; ak++) aj = 48 + eG.random() % 36, aj += 58 <= aj ? 39 : 0, aVc += String.fromCharCode(aj);
		return aVc
	}
}

function aF5() {
	this.aNT = function(canvas, aUx, a16) {
		var fS = canvas.width,
			fQ = canvas.height,
			aT = aa.ab.aS(fS, fQ),
			ac = aa.ab.getContext(aT, !0),
			canvas = (ac.drawImage(canvas, 0, 0), ac.getImageData(0, 0, fS, fQ));
		return aUx(canvas.data, fS, fQ, a16), ac.putImageData(canvas, 0, 0), aT
	}, this.aV2 = function(ae, fS, fQ) {
		for (var a2 = fS - 1; 0 <= a2; a2--)
			for (var a3 = fQ - 1; 0 <= a3; a3--) {
				var ak = 4 * (a2 + a3 * fS);
				ae[3 + ak] = ae[ak], ae[ak] = ae[1 + ak] = ae[2 + ak] = 255
			}
	}, this.aUy = function(ae, fS, fQ) {
		for (var a2 = fS - 1; 0 <= a2; a2--)
			for (var a3 = fQ - 1; 0 <= a3; a3--) {
				var ak = 4 * (a2 + a3 * fS);
				ae[1 + ak] > ae[2 + ak] + 10 && (ae[3 + ak] = ae[ak], ae[1 + ak] = ae[2 + ak])
			}
	}, this.aV0 = function(ae, fS, fQ, a16) {
		for (var gap = Math.floor(Math.min(fS, fQ) * a16), a2 = 0; a2 < fS; a2++)
			for (var ak, a3 = 0; a3 < fQ; a3++)(a2 < gap || a3 < gap || fS - gap <= a2 || fQ - gap <= a3) && (ae[3 + (ak = 4 * (a2 + a3 * fS))] = 255 - 255 * (ae[1 + ak] - ae[ak]) / (255 - ae[ak]))
	}, this.aNU = function(ae, fS, fQ, a16) {
		for (var a2 = fS - 1; 0 <= a2; a2--)
			for (var a3 = fQ - 1; 0 <= a3; a3--) {
				var ak = 4 * (a2 + a3 * fS);
				ae[ak] = a16[0], ae[1 + ak] = a16[1], ae[2 + ak] = a16[2]
			}
	}, this.aUz = function(ae, fS, fQ, a16) {
		for (var gap = Math.floor(fS * a16), a2 = 0; a2 < fS; a2++)
			for (var ak, a3 = 0; a3 < fQ; a3++)(a2 < gap || a3 < gap || fS - gap <= a2 || fQ - gap <= a3) && (ae[ak = 4 * (a2 + a3 * fS)] = ae[1 + ak] = ae[2 + ak] = 0)
	}, this.aV1 = function(ae, fS, fQ) {
		for (var a3, ak, a2 = fS - 1; 0 <= a2; a2--)
			for (a3 = fQ - 1; 0 <= a3; a3--) 200 < ae[1 + (ak = 4 * (a2 + a3 * fS))] && ae[1 + ak] - 20 > ae[ak] && ae[1 + ak] - 20 > ae[2 + ak] ? ae[ak] + ae[2 + ak] < 40 ? ae[3 + ak] = 0 : (ae[3 + ak] = ae[ak], ae[ak] = 255, ae[1 + ak] = 255,
				ae[2 + ak] = 255) : ae[ak] < 50 && ae[1 + ak] < 50 && ae[2 + ak] < 50 && (ae[ak] + ae[1 + ak] + ae[2 + ak] < 50 ? ae[3 + ak] = 180 : ae[3 + ak] = 180 + Math.floor(75 * (ae[ak] + ae[1 + ak] + ae[2 + ak] - 50) / 100))
	}, this.aV3 = function(ae, fS, fQ) {
		for (var a3, ak, a2 = fS - 1; 0 <= a2; a2--)
			for (a3 = fQ - 1; 0 <= a3; a3--) ae[1 + (ak = 4 * (a2 + a3 * fS))] > ae[ak] + 20 && ae[1 + ak] > ae[2 + ak] + 20 && ae[ak] + ae[2] < 40 && (ae[3 + ak] = 255 - ae[1 + ak], ae[ak] = ae[1 + ak] = ae[2 + ak] = ae[ak])
	}, this.a1z = function(ae, fS, fQ, a16) {
		for (var aj = fS >> 1, a2 = 0; a2 < fS; a2++)
			for (var a3 = 0; a3 < fQ; a3++) Math.sqrt((a2 - aj) * (a2 - aj) + (a3 - aj) * (a3 - aj)) > a16 * aj && (ae[4 * (a2 + a3 * fS) + 3] = 0)
	}
}

function aAk() {
	this.aVd = [], this.aVe = [], this.aB = function() {
		this.aVd = [], this.aVe = []
	}, this.az = function() {
		0 <= this.aVd.length && this.aVf(this.aVd), 0 <= this.aVe.length && this.aVf(this.aVe)
	}, this.aVf = function(eB) {
		for (var eM = -1, ak = eB.length - 1; 0 <= ak; ak--)
			if (eB[ak].k--, eB[ak].k <= 0) {
				eM = ak;
				break
			} for (ak = eM; 0 <= ak; ak--) eB.shift()
	}, this.aU6 = function(id, uc, aVg) {
		return this.aMm(this.aVd, id, uc, aVg)
	}, this.yE = function(id, uc, aVg) {
		return this.aMm(this.aVe, id, uc, aVg)
	}, this.aMm = function(eB, id, uc, aVg) {
		return ! function(eB, id, uc) {
			var ak, qc;
			for (ak = uc.length - 1; 0 <= ak; ak--)
				for (qc = eB.length - 1; 0 <= qc; qc--)
					if (eB[qc].player === uc[ak] && id === eB[qc].id) return 1;
			return
		}(eB, id, uc) && (aVg && function(eB, id, uc) {
			var ak;
			for (ak = uc.length - 1; 0 <= ak; ak--) eB.push({
				player: uc[ak],
				id: id,
				k: 384
			})
		}(eB, id, uc), !0)
	}
}

function m8(aVj) {
	var bR = document.createElement("div");
	this.i = bR, this.aVk = aVj, this.resize = function() {
		for (var gz = aVj.length, ak = 1; ak < gz; ak++) aa.ab.bU(aVj[ak], 4)
	};
	var ak, gz = aVj.length;
	for (bR.style.width = "100%", bR.style.height = "2.7em", bR.style.marginTop = "0.6em", bR.style.border = "inherit", ak = 0; ak < gz; ak++) aVj[ak].style.verticalAlign = "top", aVj[ak].style.width = (100 / gz).toFixed(2) + "%", aVj[ak].style
		.height = "100%", aVj[ak].style.fontSize = "0.75em", bR.appendChild(aVj[ak])
}

function d9(bQ, dI) {
	var bR = document.createElement("div");

	function a81() {
		var ak, gl, fQ, gq, eI, aVm = a5.a6 * bR.offsetWidth,
			aVo = new Float64Array(function(aVm) {
				var fS = .25 * aa.ab.gn(.6) * a5.fj;
				return Math.max(Math.floor(aVm / fS), 1)
			}(aVm)),
			bX = bW.bX,
			aVp = (aVm - (aVo.length + 1) * bW.gap) / (aVo.length * a5.a6);
		for (aVo.fill(bX), ak = 0; ak < dI.length; ak++) gl = (eI = dI[ak].bR).style, fQ = aa.dF.min(aVo), gq = aVo.indexOf(fQ), gl.top = aa.ab.bV(fQ), gl.left = aa.ab.bV(bX + gq * (aVp + bX)), gl.width = aa.ab.bV(aVp), aa.ab.bU(eI, 5), aVo[gq] += eI
			.offsetHeight + 3 * bX;
		bR.style.height = aa.ab.bV(aa.dF.max(aVo) - 2 * bX)
	}
	this.mC = bR, this.mD = dI, this.resize = function() {
		var ak;
		for (ak = 0; ak < dI.length; ak++) dI[ak].resize();
		a81(), a81()
	}, bR.style.width = "100%", bR.style.maxWidth = "100%", bQ.style.lineHeight = "1.5em", bQ.style.overflowX = "hidden", bQ.style.overflowY = "auto";
	for (var ak = 0; ak < dI.length; ak++) bR.appendChild(dI[ak].bR);
	bQ.appendChild(bR)
}

function aAR() {
	var aVq, aVr, aL2, aVs, aVt, aVu, aVv, aVw, aVx, aL1, aVy, aVz, aW0, aW1 = 1;

	function aW2(aW3) {
		!aW3 && 1 === aW0 && aW1 ? (aW1 = 0, bA.aD.close(aW0, 3280)) : aW0 = (aW0 + 1) % bA.aD.aRS, aVz = j.k, bA.aD.hp(aW0, 4) && bA.a3v.a1g(aW0)
	}

	function aW5() {
		0 === aW0 ? gM.aRb(3249) : aW2()
	}

	function aWA(a3, a32, fF) {
		var b = Math.floor((a5.fS - aVs) / 2) + aVv,
			d = b + Math.floor(fF * (aVs - 2 * aVv));
		gD.lineWidth = a32, gD.beginPath(), gD.moveTo(b, a3), gD.lineTo(d, a3), gD.lineTo(Math.floor(b - aVv + fF * aVs), a3 + aL2), gD.lineTo(b - aVv, a3 + aL2), gD.closePath()
	}
	this.vt = 1, this.aB = function() {
		b6.setState(6), aVq = 0, aVr = 1, aVw = "rgba(0,220,120,0.4)", aVx = "rgba(0,0,0,0.8)", this.resize(), j.a0 = !0, aW1 = 1, aW0 = this.vt - 1, aW2(1)
	}, this.resize = function() {
		aVs = Math.floor((fg.fh.fi() ? .5 : .25) * a5.fj), aVt = aVs + 12, aL2 = Math.floor(.125 * aVs), aVv = 3 * aL2, aVu = Math.floor(.225 * aVs), aVy = Math.floor(.3 * aL2), aL1 = aa.ab.fk(0, aVy)
	}, this.aW4 = function(xW) {
		xW === aW0 && aW5()
	}, this.lP = function(a2, a3) {
		var b = Math.floor((a5.fS - aVt) / 2),
			c = Math.floor(.5 * (a5.fQ - bW.gap - aL2 - aVu)) + aL2 + bW.gap;
		return b < a2 && a2 < b + aVt && c < a3 && a3 < c + aVu && (this.a9s(), a6i.l7(a2, a3, !1), !0)
	}, this.a9s = function() {
		bA.aD.a3t(3260), aC.aD.gT()
	}, this.az = function() {
		6 === b6.hy() && (j.k > aVz + 12e3 && aW5(), 100 < (aVq += .07 * aVr * (aVq < 16 ? 5 + aVq : 84 < aVq ? 105 - aVq : 17)) ? (aVq = 100, aVr = -1) : aVq < 0 && (aVq = 0, aVr = 1), aVw = "rgba(0," + Math.floor(190 - 1.9 * aVq) + "," + Math
			.floor(120 - 1.2 * aVq) + "," + (.4 + .004 * aVq) + ")", aVx = "rgba(0," + Math.floor(1.9 * aVq) + "," + Math.floor(1.2 * aVq) + "," + (.8 - .004 * aVq) + ")", j.a0 = !0)
	}, this.g9 = function() {
		var a2 = Math.floor((a5.fS - aVt) / 2),
			a3 = Math.floor(.5 * (a5.fQ - bW.gap - aL2 - aVu));
		! function(title, a3, a32, fF) {
			gD.fillStyle = aVx, aWA(a3, a32, 1), gD.fill(), gD.fillStyle = aVw, aWA(a3, a32, fF), gD.fill(), gD.strokeStyle = aF.aG, aWA(a3, a32, 1), gD.stroke(),
				function(aWC, a3) {
					aa.ab.textAlign(gD, 1), aa.ab.textBaseline(gD, 1), gD.font = aL1, gD.fillStyle = aF.aG, gD.fillText(aWC, Math.floor(.5 * a5.fS), Math.floor(a3 + .58 * aL2))
				}(title, a3)
		}(L(389), a3, 3, aVq / 100),
		function(a2, a3, fS, fQ, p0) {
			gD.fillStyle = aF.bc, gD.fillRect(a2, a3, fS, fQ), gD.lineWidth = 3, gD.strokeStyle = aF.aG, gD.strokeRect(a2, a3, fS, fQ);
			var gz = Math.floor(.3 * fQ);
			aa.ab.textAlign(gD, 1), aa.ab.textBaseline(gD, 1), gD.font = aa.ab.fk(0, gz), gD.fillStyle = aF.aG, gD.fillText(p0, Math.floor(a2 + fS / 2), Math.floor(a3 + fQ / 2 + .1 * gz))
		}(a2, a3 + aL2 + bW.gap, aVt, aVu, L(1))
	}
}

function aHB() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.nG = null
}

function aAQ() {
	var aWD, aWE, aWF;

	function aWK(ak) {
		var button = a6i.bP[ak],
			a2 = button.a2,
			a3 = button.a3,
			fS = button.fS,
			fQ = button.fQ;
		gD.fillStyle = button.aWI, gD.fillRect(a2, a3, fS, fQ), ak === aWD && (gD.fillStyle = aWF, gD.fillRect(a2, a3, fS, fQ)), gD.lineWidth = bW.lg, gD.strokeStyle = aWE, gD.strokeRect(a2, a3, fS, fQ),
			function(button) {
				var a2 = button.a2,
					a3 = button.a3,
					fS = button.fS,
					fQ = button.fQ;
				aa.ab.textAlign(gD, 1), aa.ab.textBaseline(gD, 1), gD.font = button.font, gD.fillStyle = aWE, gD.fillText(button.p0, Math.floor(a2 + fS / 2), Math.floor(a3 + fQ / 2 + .1 * button.fontSize))
			}(button)
	}
	this.fS = 0, this.fQ = 0, this.a3 = 0, this.gap = 0, this.aB = function() {
		aWD = -1, aWE = aF.aG, aWF = "rgba(255,255,255,0.16)", this.bP = new Array(7), this.fQ = Math.floor((fg.fh.fi() ? .123 : .093) * a5.fj), this.fS = Math.floor((fg.fh.fi() ? 3.96 : 4.2) * this.fQ), this.gap = Math.floor(.025 * this.fS);
		var aWG = Math.floor(.26 * this.fQ),
			aWH = aa.ab.fk(1, aWG);
		this.bP[0] = {
			a2: 0,
			a3: 0,
			fS: Math.floor(.6 * this.fS - this.gap / 2),
			fQ: this.fQ,
			p0: "Multiplayer",
			font: aWH,
			aWI: "rgba(22,88,22,0.8)",
			fontSize: aWG
		}, aWG = Math.floor(.18 * this.fQ), aWH = aa.ab.fk(1, aWG), this.bP[1] = {
			a2: 0,
			a3: 0,
			fS: this.fS - this.bP[0].fS - this.gap,
			fQ: this.fQ,
			p0: "Single Player",
			font: aWH,
			aWI: "rgba(22,88,88,0.8)",
			fontSize: aWG
		}, this.bP[2] = {
			a2: 0,
			a3: 0,
			fS: this.fS,
			fQ: Math.floor(.3 * this.fQ),
			p0: "",
			font: this.bP[1].font,
			aWI: "rgba(100,0,0,0.8)",
			fontSize: this.bP[1].fontSize
		}, this.bP[3] = {
			a2: 0,
			a3: 0,
			fS: this.fS,
			fQ: this.fQ,
			p0: "Back",
			font: this.bP[0].font,
			aWI: "rgba(0,0,0,0.8)",
			fontSize: this.bP[0].fontSize
		}, this.bP[4] = {
			a2: 0,
			a3: 0,
			fS: this.fS,
			fQ: Math.floor(.3 * this.fQ),
			p0: "The game was updated!",
			font: this.bP[1].font,
			aWI: "rgba(100,0,0,0.8)",
			fontSize: this.bP[1].fontSize
		}, this.bP[5] = {
			a2: 0,
			a3: 0,
			fS: this.bP[0].fS,
			fQ: Math.floor(.8 * this.fQ),
			p0: "Reload",
			font: this.bP[0].font,
			aWI: "rgba(0,100,0,0.8)",
			fontSize: this.bP[0].fontSize
		}, this.bP[6] = {
			a2: 0,
			a3: 0,
			fS: this.bP[1].fS,
			fQ: this.bP[5].fQ,
			p0: "Back",
			font: this.bP[0].font,
			aWI: "rgba(0,0,0,0.8)",
			fontSize: this.bP[0].fontSize
		}, this.a3I()
	}, this.a3I = function() {
		this.a3 = Math.floor(.54 * a5.fQ), this.bP[0].a2 = Math.floor(.5 * a5.fS - .5 * this.fS), this.bP[1].a2 = this.bP[0].a2 + this.bP[0].fS + this.gap, this.bP[2].a2 = this.bP[3].a2 = this.bP[0].a2, this.bP[4].a2 = this.bP[5].a2 = this.bP[0]
			.a2, this.bP[6].a2 = this.bP[1].a2, this.bP[0].a3 = Math.floor(.54 * a5.fQ), this.bP[1].a3 = this.bP[0].a3, this.bP[2].a3 = Math.floor((a5.fQ - this.bP[2].fQ - this.bP[3].fQ - this.gap) / 2), this.bP[3].a3 = this.bP[2].a3 + this.bP[2]
			.fQ + this.gap, this.bP[4].a3 = Math.floor((a5.fQ - this.bP[4].fQ - this.bP[5].fQ - this.gap) / 2), this.bP[5].a3 = this.bP[6].a3 = this.bP[4].a3 + this.bP[4].fQ + this.gap
	}, this.aWJ = function() {
		aWK(0), aWK(1)
	}, this.aWL = function() {
		aWK(2), aWK(3)
	}, this.aWM = function() {
		aWK(4), aWK(5), aWK(6)
	}, this.l7 = function(a2, a3, fs) {
		var ak = -1;
		return 0 === b6.hy() ? ak = this.vL(a2, a3, 0, 2) : 3 === b6.hy() ? ak = this.vL(a2, a3, 3, 1) : 5 === b6.hy() && (ak = this.vL(a2, a3, 5, 2)), aWD !== ak && (aWD = ak, fs) && (j.a0 = !0), -1 !== ak && (xy.a3M(), !0)
	}, this.vL = function(a2, a3, aKW, size) {
		for (var ak = aKW; ak < aKW + size; ak++)
			if (a2 >= this.bP[ak].a2 && a3 >= this.bP[ak].a3 && a2 <= this.bP[ak].a2 + this.bP[ak].fS && a3 <= this.bP[ak].a3 + this.bP[ak].fQ) return ak;
		return -1
	}
}

function aAo() {
	this.size = 0, this.aJ = 0, this.gd = null, this.aB = function(gd) {
		this.aJ = 0, this.gd = gd, this.size = gd.length
	}, this.hn = function() {
		this.gd = null
	}, this.s2 = function(size) {
		for (var eH = 0, gd = this.gd, s = this.aJ + size - 1, ak = this.aJ; ak <= s; ak++) eH |= (gd[ak >> 3] >> 7 - (7 & ak) & 1) << s - ak;
		return this.aJ += size, this.aJ > 8 * this.size && console.error("Unwrapper Overflow"), eH
	}, this.yv = function(size) {
		var eM = size >> 1;
		return (1 << eM) * this.s2(size - eM) + this.s2(eM)
	}, this.yy = function(aQY) {
		return this.size === n4.n5(aQY)
	}, this.aHE = function(aEu, aLi, aWO) {
		var jl = this.s2(aEu);
		if (!jl) return null;
		for (var aEu = Math.max(jl, aWO), eB = new(aLi <= 8 ? Uint8Array : aLi <= 16 ? Uint16Array : Uint32Array)(aEu), ak = 0; ak < jl; ak++) eB[ak] = this.s2(aLi);
		aWO = eB[jl - 1];
		return aWO && eB.fill(aWO, jl), eB
	}, this.aHF = function(aEu, aLl, aWO) {
		var jl = this.s2(aEu);
		if (!jl) return null;
		for (var aEu = Math.max(jl, aWO), eB = new Array(aEu), ak = 0; ak < jl; ak++) eB[ak] = this.aHC(aLl);
		return eB.fill(eB[jl - 1], jl), eB
	}, this.aHC = function(aEu) {
		return iH.cy.yz(this.s2(aEu))
	}, this.aHD = function() {
		var bE = n9.cw.nA(n9.cw.nB(this.s2(30))),
			bE = aa.dZ.a5n(bE, "_", "/");
		bE = aa.dZ.a5n(bE, "-", "+");
		for (var aWP = "";
			(bE.length + aWP.length) % 4;) aWP += "=";
		bE = "data:image/png;base64," + bE + aWP;
		var aH6 = new Image;
		aH6.onload = function() {
			ls.aw.aH5(aH6), aH6.onload = null, aH6 = null
		}, aH6.src = bE
	}
}

function aAX() {
	var aWQ;

	function aWR(player) {
		var aj, a7X;
		return aa.al.is(player) && player < p.e3 ? 0 : (aj = aWQ[dV.eF((p.dS - 1) * fe.jQ[player], p.wr)], j.b2() < 1920 && (aj = Math.max(dV.eF(100 * (13440 - 6 * j.b2()), 1920), aj)), a7X = fv.fw(player), fe.ff[player] > a7X && (aj -= dV.eF(2 *
			aj * (fe.ff[player] - a7X), a7X)), Math.min(Math.max(aj, 0), 700))
	}

	function aWb(gp) {
		for (var jQ = fe.jQ, tg = tq.tg, ak = tq.th - 1; 0 <= ak; ak--) {
			var g6 = tg[ak];
			aa.al.j5(g6, dV.eF(gp * jQ[g6], 32))
		}
	}

	function aWY() {
		var sA = p.an;
		eC.aSG[0] = fe.ff[sA] - fe.g7[sA]
	}

	function aWa(aJ) {
		var sA = p.an,
			sA = fe.ff[sA] - fe.g7[sA] - eC.aSG[0];
		fv.g1 += sA, iy.jP[aJ] += sA
	}
	this.g1 = 0, this.nE = function() {
		for (var gz = p.dS, ak = (aWQ = new Uint16Array(gz), 0); ak < gz; ak++) aWQ[ak] = 100 + aJv(dV.eF(25600 * ak, gz - 4), 9)
	}, this.aB = function() {
		(this.g1 = 0) === p.data.iIncomeType ? this.aG9 = aWR : 1 === p.data.iIncomeType ? this.aG9 = function(player) {
			return dV.eF(p.data.iIncomeValue * aWR(player), 64)
		} : this.aG9 = function(player) {
			return dV.eF(p.data.iIncomeData[player] * aWR(player), 64)
		}
	}, this.az = function() {
		if (j.b2() % 10 == 9 && (fv.g1 = 0, function() {
				aWY();
				for (var tg = tq.tg, ff = fe.ff, ak = tq.th - 1; 0 <= ak; ak--) {
					var g6 = tg[ak],
						aWZ = dV.eF(fv.aG9(g6) * ff[g6], 1e4);
					aa.al.j5(g6, Math.max(aWZ, 1))
				}
				aWa(9)
			}(), function() {
				if (0 !== p.data.aIncomeType) {
					if (aWY(), 1 === p.data.aIncomeType)
						for (var jQ = fe.jQ, tg = tq.tg, gp = p.data.aIncomeValue, ak = tq.th - 1; 0 <= ak; ak--) {
							var g6 = tg[ak];
							aa.al.j5(g6, dV.eF(gp * jQ[g6], 128))
						} else 2 === p.data.aIncomeType && function() {
							for (var jQ = fe.jQ, tg = tq.tg, gp = p.data.aIncomeData, ak = tq.th - 1; 0 <= ak; ak--) {
								var g6 = tg[ak];
								aa.al.j5(g6, dV.eF(gp[g6] * jQ[g6], 128))
							}
						}();
					aWa(18)
				}
			}(), j.b2() % 100 == 99)) {
			if (aWY(), 0 === p.data.tIncomeType) aWb(32);
			else if (1 === p.data.tIncomeType) aWb(p.data.tIncomeValue);
			else
				for (var jQ = fe.jQ, tg = tq.tg, gp = p.data.tIncomeData, ak = tq.th - 1; 0 <= ak; ak--) {
					var g6 = tg[ak];
					aa.al.j5(g6, dV.eF(gp[g6] * jQ[g6], 32))
				}
			aWa(8)
		}
	}, this.fw = function(player) {
		return Math.min(100 * fe.jQ[player], p.aJP)
	}, this.ir = function(player, io) {
		j3.j4(player, io, eC.j2[0], 0), aa.al.j5(io, eC.j2[0]), iy.j6(player, io), j7.aWT(player, eC.j2[0] + eC.j2[1]), j7.j8(io, eC.j2[0]), aa.al.aDW(player)
	}, this.zm = function() {
		for (var gz = tq.th, uc = tq.tg, af = 0, fY = fe.ff, ak = 0; ak < gz; ak++) af += fY[uc[ak]];
		return af
	}, this.zo = function(aWU) {
		for (var g6, gz = tq.th, uc = tq.tg, af = 0, fY = fe.ff, jd = eL.jd, ak = 0; ak < gz; ak++) jd[g6 = uc[ak]] === aWU && (af += fY[g6]);
		return af
	}
}

function aB0() {
	this.fS = 0, this.fQ = 0, this.fz = 0, this.g3 = 0, this.aWf = 0, this.aWg = 0, this.a6q = 0, this.a6r = 0;
	var aWi = this.aWh = 0;
	this.aWj = 0, this.aWk = 0, this.aWl = 0, this.aOe = 0, this.aJ = 0, this.aFh = null, this.lW = !1, this.aWm = -1, this.aWn = !1, this.aWo = [0, 0], this.dw = function() {
		this.aFh = [L(390), L(192, 0, "Balance"), L(191, 0, "Interest"), L(391)]
	}, this.aB = function() {
		this.lW = !1, this.aWm = -1, this.aWn = !1, this.resize()
	}, this.resize = function() {
		this.fS = a5.fS < 1.369 * a5.fQ ? a5.fS : 1.369 * a5.fQ;
		var eI = fg.fh.fi() && a5.fS < a5.fQ ? 1 : fg.fh.fi() ? .8 : a5.fS < a5.fQ ? .65 : .59;
		this.fS = Math.floor(eI * this.fS), this.fS -= fg.fh.fi() && a5.fS < a5.fQ ? 2 * bW.gap + 2 : 0, this.fQ = Math.floor(this.fS / 1.369), this.aOe = Math.floor(this.fQ / 150), this.aOe = Math.max(this.aOe, 1.5), this.fz = Math.floor(1 +
			.02 * this.fS), this.g3 = Math.floor(1 + .04 * this.fS), this.a6q = this.g3, aWi = Math.floor(.75 * this.a6q), this.a6r = Math.floor(1 + .075 * this.fS), this.aWj = Math.floor(1 + .1125 * this.fS), this.aWk = Math.floor(this.fS *
			(fg.fh.fi() ? .03 : .029)), this.aWk = Math.max(this.aWk, 4), this.aWl = Math.floor(.035 * this.fS), this.aWl = Math.max(this.aWl, 4), this.aWh = this.fQ - 2 * this.a6q - this.a6r - this.aWj, this.lW && this.aWp()
	}, this.lP = function(lQ, lR) {
		var g5, jT;
		return !!this.lW && (jT = lQ, g5 = lR, lQ -= dV.eF(a5.fS - this.fS, 2), lR -= dV.eF(a5.fQ - this.fQ, 2), lQ < 0 || lR < 0 || lQ >= this.fS || lR >= this.fQ || lQ >= this.fS - this.aWj && lR < this.aWj ? -1 !== lU.lP(jT, g5) || lJ.lP(jT,
			g5) || this.n() : lR < this.aWj || (lR < this.fQ - this.a6r ? (this.aWn = !0, this.aWm = (lQ - 2 * this.fz - this.aWf) / this.aWg, 3 !== this.aJ && (j.a0 = !0)) : (jT = (jT = Math.floor(lQ / (this.fS / this.aFh.length))) < 0 ?
			0 : jT >= this.aFh.length ? this.aFh.length - 1 : jT) !== this.aJ && (this.aJ = jT, this.aWp(), j.a0 = !0)), !0)
	}, this.l7 = function(lQ, lR) {
		return this.aWo[0] = lQ, this.aWo[1] = lR, !(!this.lW || !this.aWn || (lQ -= dV.eF(a5.fS - this.fS, 2), lR = this.aWm, this.aWm = (lQ - 2 * this.fz - this.aWf) / this.aWg, (0 <= this.aWm && this.aWm <= 1 || 0 <= lR && lR <= 1) && (j
			.a0 = !0), 0))
	}, this.a3N = function() {
		this.aWn && (this.aWn = !1)
	}, this.lH = function() {
		this.lW ? this.n() : this.show()
	}, this.show = function() {
		iy.aHr < 2 || (this.lW = !0, this.aWp())
	}, this.n = function() {
		this.lW = !1, this.aWm = -1, j.a0 = !0
	}, this.aWp = function() {
		this.aJ < 2 ? this.aWf = p7.measureText(aa.dZ.fy(iy.max[this.aJ]), aa.ab.fk(0, this.aWk)) : 2 === this.aJ && (this.aWf = p7.measureText(aa.dZ.a5d(6, 2), aa.ab.fk(0, this.aWk))), this.aWg = this.fS - 2 * this.fz - this.aWf - this.g3
	}, this.yM = function() {
		this.lW && this.aWp()
	}, this.g9 = function() {
		this.lW && this.aFJ()
	}, this.aFJ = function() {
		var a2 = dV.eF(a5.fS - this.fS, 2),
			a3 = dV.eF(a5.fQ - this.fQ, 2);
		gD.setTransform(1, 0, 0, 1, a2, a3), gD.fillStyle = aF.be, gD.fillRect(0, this.aWj, this.fS, this.fQ - this.aWj), this.aWq(), this.aNS(), gD.strokeRect(0, 0, this.fS, this.fQ), aa.ab.textAlign(gD, 2), gD.font = aa.ab.fk(0, this.aWk),
			0 === this.aJ ? this.aWr(iy.aHq, a2, a3) : 1 === this.aJ ? this.aWr(iy.fY, a2, a3) : 2 === this.aJ ? this.aWs(a2, a3) : 3 === this.aJ && (this.aWt(a2, a3), this.aWu(a2, a3)), lU.le(Math.floor(a2 + this.fS - .725 * this.aWj), Math
				.floor(a3 + .275 * this.aWj), Math.floor(.45 * this.aWj)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aWq = function() {
		var ak, h4;
		for (gD.lineWidth = this.aOe, aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 1), gD.strokeStyle = aF.aG, gD.font = aa.ab.fk(1, this.aWl), h4 = this.fS / this.aFh.length, gD.fillStyle = aF.c2, gD.fillRect(this.aJ * h4, this.fQ - this.a6r,
				h4, this.a6r), gD.fillStyle = aF.aG, gD.fillRect(0, this.fQ - this.a6r - .5 * this.aOe, this.fS, this.aOe), ak = 1; ak <= 3; ak++) gD.fillRect(ak * h4, this.fQ - this.a6r, this.aOe, this.a6r);
		for (ak = this.aFh.length - 1; 0 <= ak; ak--) gD.fillText(aa.fW.aFv(this.aFh[ak], 0, .9 * h4), (ak + .5) * h4, this.fQ - .46 * this.a6r)
	}, this.aNS = function() {
		gD.fillStyle = aF.cS, gD.fillRect(0, 0, this.fS, this.aWj), gD.fillStyle = aF.aG, gD.fillRect(0, this.aWj - .5 * this.aOe, this.fS, this.aOe), gD.font = aa.ab.fk(1, .39 * this.aWj), gD.fillText(aa.fW.aFv(L(392), 0, .8 * this.fS), Math
			.floor(this.fS / 2), Math.floor(.55 * this.aWj))
	}, this.aWr = function(eB, a2, a3) {
		var af = iy.max[this.aJ],
			a6N = (gD.setTransform(1, 0, 0, 1, a2 + 2 * this.fz + this.aWf, a3 + this.a6q + this.aWj), gD.lineWidth = 2, this.aWh / Math.sqrt(af));
		gD.beginPath(), gD.moveTo(this.aWg, this.aWh - a6N * Math.sqrt(eB[iy.aHr - 1]));
		for (var ak = iy.aHr - 2; 0 <= ak; ak--) gD.lineTo(ak * this.aWg / (iy.aHr - 1), this.aWh - a6N * Math.sqrt(eB[ak]));
		gD.stroke();
		a2 = this.le(eB, a6N, .5);
		a2 < .95 && gD.fillText(aa.dZ.fy(af), -this.fz, 0), .05 < Math.abs(a2 - .5) && gD.fillText(aa.dZ.fy(Math.floor(af / 4)), -this.fz, Math.floor(this.aWh / 2)), .05 < a2 && gD.fillText("0", -this.fz, this.aWh)
	}, this.aWs = function(a2, a3) {
		gD.setTransform(1, 0, 0, 1, a2 + 2 * this.fz + this.aWf, a3 + this.a6q + this.aWj), gD.lineWidth = 2;
		var a6N = this.aWh / Math.max(iy.max[this.aJ], 1);
		gD.beginPath(), gD.moveTo(this.aWg, this.aWh - a6N * iy.aG8[iy.aHr - 1]);
		for (var ak = iy.aHr - 2; 0 <= ak; ak--) gD.lineTo(ak * this.aWg / (iy.aHr - 1), this.aWh - a6N * iy.aG8[ak]);
		gD.stroke();
		a2 = this.le(iy.aG8, a6N, 1), a3 = iy.max[this.aJ] / 100;
		a2 < .95 && gD.fillText(aa.dZ.a5d(a3, 2), -this.fz, 0), .05 < Math.abs(a2 - .5) && gD.fillText(aa.dZ.a5d(a3 / 2, 2), -this.fz, Math.floor(this.aWh / 2)), .05 < a2 && gD.fillText(aa.dZ.a5d(0, 2), -this.fz, this.aWh)
	}, this.aWt = function(a2, a3) {
		gD.setTransform(1, 0, 0, 1, a2 + .34 * this.fS, a3 + 2 * aWi + this.aWj), aa.ab.textAlign(gD, 2);
		for (var aPe = this.fQ - 4 * aWi - this.a6r - this.aWj, eB = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], ak = 9; 0 <= ak; ak--) gD.fillText(aa.fW.aFv(iy.aHv[eB[ak]], 0, .31 * this.fS), 0, ak * aPe / 9);
		var eH = iy.jP;
		for (gD.setTransform(1, 0, 0, 1, a2 + .39 * this.fS, a3 + 2 * aWi + this.aWj), aa.ab.textAlign(gD, 0), gD.fillText(aa.dZ.a5d(100 * eH[0] / (1024 * Math.max(eH[1], 1)), 1), 0, 0), ak = 8; 1 <= ak; ak--) gD.fillText(eH[eB[ak]].toString(),
			0, ak * aPe / 9);
		gD.fillText(aa.dZ.a5d(100 * (1 - fe.jQ[p.an] / eH[7]), 0), 0, aPe)
	}, this.aWu = function(a2, a3) {
		gD.setTransform(1, 0, 0, 1, a2 + .79 * this.fS, a3 + 2 * aWi + this.aWj), aa.ab.textAlign(gD, 2);
		var ak, aPe = this.fQ - 4 * aWi - this.a6r - this.aWj;
		for (gD.fillStyle = aF.bx, ak = 2; 0 <= ak; ak--) gD.fillText(aa.fW.aFv(iy.aHv[ak + 8], 0, .31 * this.fS), 0, ak * aPe / 9);
		gD.fillText(aa.fW.aFv(iy.aHv[18], 0, .31 * this.fS), 0, 3 * aPe / 9), gD.fillStyle = aF.bw, gD.fillText(aa.fW.aFv(iy.aHv[11], 0, .31 * this.fS), 0, 4 * aPe / 9), gD.fillStyle = aF.cF, gD.fillText(aa.fW.aFv(iy.aHv[13], 0, .31 * this.fS),
				0, 5 * aPe / 9), gD.fillText(aa.fW.aFv(iy.aHv[15], 0, .31 * this.fS), 0, 6 * aPe / 9), gD.fillText(aa.fW.aFv(iy.aHv[16], 0, .31 * this.fS), 0, 7 * aPe / 9), gD.fillText(aa.fW.aFv(iy.aHv[12], 0, .31 * this.fS), 0, 8 * aPe / 9), gD
			.fillStyle = aF.cE, gD.fillText(aa.fW.aFv(iy.aHv[17], 0, .31 * this.fS), 0, aPe), gD.fillStyle = aF.bx;
		var eH = iy.jP,
			aD4 = eH[8] + eH[9] + eH[10] + eH[18],
			aD4 = aa.dZ.fy(aD4),
			aWv = gD.measureText(aD4).width,
			a2 = (gD.setTransform(1, 0, 0, 1, a2 + .83 * this.fS + aWv, a3 + 2 * aWi + this.aWj), gD.fillText(aa.dZ.fy(eH[8]), 0, 0), gD.fillText(aa.dZ.fy(eH[9]), 0, aPe / 9), gD.fillText(aa.dZ.fy(eH[10]), 0, 2 * aPe / 9), gD.fillText(aa.dZ.fy(
				eH[18]), 0, 3 * aPe / 9), gD.fillStyle = aF.bw, gD.fillText(aD4, 0, 4 * aPe / 9), gD.fillStyle = aF.cF, gD.fillText(aa.dZ.fy(eH[13]), 0, 5 * aPe / 9), gD.fillText(aa.dZ.fy(eH[15]), 0, 6 * aPe / 9), gD.fillText(aa.dZ.fy(eH[
				16]), 0, 7 * aPe / 9), gD.fillText(aa.dZ.fy(eH[12]), 0, 8 * aPe / 9), eH[12] + eH[13] + eH[15] + eH[16]);
		gD.fillStyle = aF.cE, gD.fillText(aa.dZ.fy(a2), 0, aPe), gD.fillStyle = aF.aG
	}, this.le = function(eB, a6N, a38) {
		var ak, i, nI;
		return this.aWm < 0 || 1 < this.aWm ? .25 : (ak = this.aWm * (iy.aHr - 1), nI = eB[i = Math.floor(ak)], nI += (ak - i) * (eB[i < iy.aHr - 1 ? i + 1 : i] - nI), gD.strokeStyle = aF.bj, .04 < this.aWm && this.aWx(0, this.aWh - a6N * Math
				.pow(nI, a38), ak * this.aWg / (iy.aHr - 1), this.aWh - a6N * Math.pow(nI, a38)), .04 < nI / iy.max[this.aJ] && this.aWx(ak * this.aWg / (iy.aHr - 1), this.aWh, ak * this.aWg / (iy.aHr - 1), this.aWh - a6N * Math.pow(nI,
			a38)), gD.fillStyle = aF.cH, gD.beginPath(), gD.arc(ak * this.aWg / (iy.aHr - 1), this.aWh - a6N * Math.pow(nI, a38), Math.max(2, .014 * this.fQ), 0, 2 * Math.PI), gD.fill(), eB = this.aWm * j.wF, eB = 0 === fe.gA[p.an] ? Math
			.floor(eB * iy.aHu) : Math.floor(eB * j.b2()), gD.fillStyle = aF.aG, gD.fillText(1 === a38 ? aa.dZ.a5d(nI / 100, 2) : aa.dZ.fy(Math.floor(nI)), -this.fz, this.aWh - a6N * Math.pow(nI, a38)), aa.ab.textAlign(gD, 1), gD.fillText(fr
				.aFy(eB), ak * this.aWg / (iy.aHr - 1), this.aWh + this.aWk - (fg.fh.fi() ? 2 : 0) - this.aOe), aa.ab.textAlign(gD, 2), a6N * Math.pow(nI, a38) / this.aWh)
	}, this.aWx = function(b, c, d, e) {
		gD.beginPath(), gD.moveTo(b, c), gD.lineTo(d, e), gD.stroke()
	}
}

function aB3() {
	function aWy(i) {
		xR(i), aC.dT(4, 5, new gR("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new d7("⬅️ " + L(1), function() {
				aC.dE()
			}), new d7("🔄 Reload", function() {
				fg.fh.gU()
			}, aF.c3)]))
	}

	function aX2(i) {
		xR(i), aC.dT(4, 5, new gR(L(393), aX1(i), !0))
	}

	function aX1(i) {
		var bE = " [" + i + "]";
		return 3249 === i || 1006 === i ? "No Internet / No Server Response" + bE : 4527 === i ? "Player already in lobby" + bE : 4530 === i ? "Lobby Timeout" + bE : 4528 === i ? "Lobby Kick: Another login detected." + bE : 4540 === i ?
			"You have been kicked." + bE : 4495 === i ? "Account doesn't exist." : 4229 === i ? "Bad Internet / Unresponsive Client" + bE : 4555 === i ? "Invalid Account Error. Please Try Again." + bE : 4557 <= i && i <= 4560 ?
			"Please try again later!" + bE : "Unknown error" + bE
	}

	function xR(i) {
		aWz(i), aC.aD.gT()
	}

	function aWz(i) {
		var uS = b6.hy();
		6 === uS ? bA.aD.a3t(i) : f7.iF ? (aC.gS(), f7.hn(), bA.aD.close(bA.aD.ho, 3256)) : 8 === uS && p.la(!0)
	}
	this.gN = [], this.aRd = function(xW, i) {
		if (this.gN.push(i), 8 === aC.b1 && 0 === xW)
			if (4211 === i) aWy(i);
			else {
				if (f7.iF && (4495 === i || 4480 === i) && bA.aD.ho !== xW) return void aC.dE();
				if (8 !== b6.hy() && aWz(), 4480 === i) return aK.aL.aSb(), void aC.dT(4, 0, new gR(L(395), L(396), !0));
				aC.dT(4, 0, new gR(L(393), aX1(i), !0))
			}
		else {
			var uS = b6.hy();
			if (6 === uS) {
				if (4211 === i) return void aWy(i);
				if (4215 !== i && 4516 !== i && 4527 !== i && 4533 !== i && 4528 !== i && !(4557 <= i && i <= 4560)) return void vs.aW4(xW)
			} else {
				if (!f7.iF) return 8 === uS ? void(xW !== bA.aD.bB || p.lI || 1 !== p.q || p.ay || mY.aIw(L(394, [i]))) : void 0;
				if (xW !== bA.aD.ho) return
			}
			aX2(i)
		}
	}, this.aRb = function(i) {
		this.gN.push(i), 8 === b6.hy() ? p.lI || 1 !== p.q || mY.aIw(L(394, [i])) : aX2(i)
	}, this.gQ = function() {
		this.gN.push(3268), xR(3268)
	}
}

function a8n() {
	var hT, vk, dI;
	this.show = function() {
		hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), vk.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(L(397), [new d7("⬅️ " + L(1), function() {
		aC.dT(7, aC.fC(7).a0Y)
	}), new d7(L(398), function() {
		aK.aL.aM(105, iH.cw.aJM(vk.mD[0].aEy[0].i.value, 5)), aK.aL.aM(106, iH.cw.aJM(vk.mD[1].aEy[0].i.value, 15)), aC.dT(8, aC.fC(7).a0Y, new hY(18))
	})]), vk = new d9(hT.dA, ((dI = []).push(function() {
		var dM = new dN;
		return dM.dO(L(399)), dM.dU(new a7({
			value: "",
			aJ: -1
		})), dM
	}()), dI.push(function() {
		var dM = new dN,
			aX7 = (dM.dO(L(400)), new a7({
				value: "",
				aJ: -1
			}));
		return aX7.i.type = "password", dM.dU(aX7), dM.dU(new m8([new d7(L(183), function(i) {
			return i.textContent === L(183) ? (i.textContent = L(401), aX7.i.type = "text") : (i.textContent = L(183), aX7.i.type = "password"), !0
		}).button])), dM
	}()), dI.push(function() {
		var dM = new dN;
		return dM.dO(L(402)), dM.vp(L(403)), dM.vp(L(404)), dM.vp(L(405)), dM
	}()), dI))
}

function vQ() {
	this.lW = !1;
	this.aQ = [], this.aP = 100;
	var b, c, gap, aY, aX8, aXA, aXB = 0,
		aXC = new Array(9),
		aXD = [],
		aXE = [],
		aXF = 0,
		aXG = 0,
		aXH = 0,
		aXI = 0;

	function aXN() {
		aXC.sort(function(ju, eM) {
			return eM.aOa - ju.aOa
		});
		for (var bE = "" + aXC[0].yA, ak = 1; ak < 9; ak++) bE += "," + aXC[ak].yA;
		for (ak = 0; ak < 9; ak++) bE += "," + aXC[ak].aOa;
		aK.f4.uR(120, bE)
	}
	this.aB = function() {
		for (var aXJ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], ak = 0; ak < aXJ.length; ak++) {
			var color = 6 === aXJ[ak] ? aF.c6 : aF.bf;
			this.aQ.push(aa.canvas.a1s(i4.get(3), aXJ[ak], color))
		}
		for (ak = 0; ak < a9y.iD.a20; ak++) aXE.push(a9y.iD.a23 - a9y.iD.a20 + ak);
		for (ak = 0; ak < a9y.iD.a21; ak++) aXE.push(a9y.iD.a22 + ak);
		var a8e = a9y.iD.a29(uY.a8e);
		for (ak = 0; ak < a8e.length; ak++) aXE.push(a8e[ak]);
		! function() {
			var ak, eB = aK.f4.data[120].value.split(",");
			if (18 !== eB.length)
				for (ak = 0; ak < 9; ak++) aXC[ak] = {
					yA: 1015 + ak,
					aOa: 0
				};
			else
				for (ak = 0; ak < 9; ak++) {
					var eH = parseInt(eB[ak]),
						aT = (eH = 0 <= eH && eH < a9y.iD.a23 ? eH : 0, parseInt(eB[ak + 9]));
					aT = 0 <= aT && aT < 1e3 ? aT : 0, aXC[ak] = {
						yA: eH,
						aOa: aT
					}
				}
		}()
	}, this.show = function(lQ, lR, aTf) {
		var ak;
		if (aXF = lQ, aXG = lR, aXB = aTf || 0, this.lW = !0, aXD = [], 0 === aXB)
			for (ak = 0; ak < 9; ak++) aXD.push(aXC[ak].yA);
		else {
			var eM = 49 * aXB,
				aTf = eM - 49;
			for (aTf >= aXE.length && (aXB = 1, aTf = 0, eM = 49), ak = aTf = (eM = Math.min(eM, aXE.length)) - 49; ak < eM; ak++) aXD.push(aXE[ak])
		}
		aXD.push(1024);
		aTf = aXD.length, aY = Math.floor((fg.fh.fi() ? .075 : .0468) * a5.fj), gap = Math.floor(aY / 3), (aXH = 10 * (aX8 = aY + gap)) > a5.fS && (aXH = a5.fS, gap = (aX8 = aXH / 10) - (aY = 3 * aX8 / 4)), aXA = dV.eF(aTf, 10) + !!(aTf % 10), (
			aXI = aXA * aX8) > a5.fQ && (aXI = a5.fQ, gap = (aX8 = aXI / aXA) - (aY = 3 * aX8 / 4)), aTf = .5 * gap;
		b = Math.min(Math.max(lQ - .5 * aXH + aTf, aTf), a5.fS - aXH + aTf), c = Math.min(Math.max(lR - .5 * aXI + aTf, aTf), a5.fQ - aXI + aTf)
	}, this.lP = function(lQ, lR, player) {
		if (!this.lW) return !1;
		if (this.aPm(lQ, lR)) {
			lQ = dV.dW(dV.eF(lQ - b + .5 * gap, aX8), 0, 9);
			if ((lQ += 10 * dV.dW(dV.eF(lR - c + .5 * gap, aX8), 0, 9)) >= aXD.length) return m.n(), !0;
			lR = aXD[lQ];
			if (1024 === lR) return this.show(aXF, aXG, aXB + 1), !0;
			! function(yA) {
				for (var ak = 0; ak < 9; ak++) aXC[ak].aOa = Math.floor(.99 * aXC[ak].aOa);
				for (ak = 0; ak < 9; ak++)
					if (yA === aXC[ak].yA) return aXC[ak].aOa = Math.min(aXC[ak].aOa + 30, 999), aXN();
				aXC.splice(5, 0, {
					yA: yA,
					aOa: Math.max(aXC[4].aOa, 30)
				}), aXC.pop(), aXN()
			}(lR), player === p.an ? q7.q8.yB(lR) : q7.al.a5o(lR, player)
		}
		return m.n(), !0
	}, this.aPm = function(lQ, lR) {
		return !(lQ < b - .5 * gap || lR < c - .5 * gap || b + aXH - .5 * gap <= lQ || c + aXI - .5 * gap <= lR)
	}, this.g9 = function() {
		gD.fillStyle = aF.be, gD.fillRect(b - .5 * gap, c - .5 * gap, aXH, aXI);
		for (var qc = .5 * bW.lg, gz = (gD.lineWidth = bW.lg, gD.strokeStyle = gD.fillStyle = aF.aG, gD.strokeRect(b - .5 * gap + qc, c - .5 * gap + qc, aXH - 2 * qc, aXI - 2 * qc), gD.imageSmoothingEnabled = !0, aXD.length), ak = 0; ak <
			gz; ak++) this.aIr(aXD[ak], gD, b + ak % 10 * aX8, c + dV.eF(ak, 10) * aX8, aY);
		gD.imageSmoothingEnabled = !1
	}, this.aIr = function(yA, ac, a2, a3, aY) {
		var ai;
		yA >= 1024 - a9y.iD.a20 ? (ai = aY / this.aP, ac.setTransform(ai, 0, 0, ai, a2, a3), ac.drawImage(this.aQ[yA - 1024 + a9y.iD.a20], 0, 0), ac.setTransform(1, 0, 0, 1, 0, 0)) : (aa.ab.textAlign(ac, 1), aa.ab.textBaseline(ac, 1), ac.font =
			aa.ab.fk(0, .89 * aY), ac.fillText(a9y.iD.a28(yA), a2 + .5 * aY, a3 + (.35 - aa.ab.gg + .56) * aY))
	}
}

function aAs() {
	this.aJX = new a4Q, this.a4V = new aXP, this.aB = function() {
		fg.fh.uV()
	}, this.a4U = function() {
		return aK.f4.data[160].value
	}
}

function aF2() {
	this.s9 = function(eB) {
		eB.fill(0)
	}, this.a97 = function(eB) {
		for (var gz = eB.length, ak = 0; ak < gz; ak++) eB[ak] = []
	}, this.oS = function(a2A, a6N) {
		for (var a2B = eC.aSI, ak = 0; ak < 3; ak++) a2B[ak] = a6N * a2A[ak];
		return a2B
	}, this.oT = function(a2A, a2B, aXQ) {
		for (var z9 = 0, ak = 0; ak < 3; ak++) z9 += Math.abs(a2A[ak] - a2B[ak]);
		return aXQ <= z9
	}, this.oU = function(a2A, aXR) {
		for (var ak = 0; ak < 3; ak++) a2A[ak] = dV.dW(a2A[ak] + aXR, 0, 255);
		return a2A
	}, this.a1K = function(eB, ha, hb) {
		hb = hb || eB.length - 1;
		for (var aV8 = 0, ak = ha = ha || 0; ak <= hb; ak++) aV8 += eB[ak];
		return aV8
	}, this.aXS = function(eB, aXT) {
		for (var ak, a1E, gz = eB.length, aXU = [], ju = gz - 1; 0 <= ju; ju--) {
			for (ak = a1E = 0; ak < gz; ak++) aXT(eB[ak]) < aXT(eB[a1E]) && (a1E = ak);
			gz--, aXU.push(eB[a1E]), eB[a1E] = eB[gz], eB.pop()
		}
		return aXU
	}, this.min = function(eB) {
		var ak, eH, gz = eB.length;
		if (0 === gz) return 0;
		for (eH = eB[0], ak = 1; ak < gz; ak++) eH = Math.min(eH, eB[ak]);
		return eH
	}, this.max = function(eB) {
		var gz = eB.length;
		if (0 === gz) return 0;
		for (var eH = eB[0], ak = 1; ak < gz; ak++) eH = Math.max(eH, eB[ak]);
		return eH
	}, this.lq = function(eB, eH) {
		for (var gz = eB.length, jl = 0, ak = 0; ak < gz; ak++) jl += eB[ak] > eH;
		return jl
	}, this.aXV = function(aKO, aKP, min) {
		for (var gz = aKP[0], ak = gz - 1; 0 <= ak; ak--) aKO[ak] < min && (aKO[ak] = aKO[--gz]);
		aKP[0] = gz
	}, this.aXW = function(eB, gz, value) {
		for (var ak = 0; ak < gz; ak++) eB[ak] -= value
	}, this.aEh = function(eB) {
		for (var gz = eB.length, ak = 0; ak < gz; ak++)
			if ("string" != typeof eB[ak]) return !1;
		return !0
	}, this.dG = function(bE, eB, aXX) {
		eB.fill(0);
		for (var md = bE.split(","), gz = Math.min(md.length, eB.length), ak = 0; ak < gz; ak++) eB[ak] = Math.min(parseInt(md[ak]), aXX)
	}, this.a1L = function(bE, eB, aSu) {
		eB.fill("");
		for (var md = bE.split('"'), gz = Math.min(md.length, 2 * eB.length), qc = 0, ak = 1; ak < gz; ak += 2) eB[qc++] = md[ak].slice(0, aSu)
	}, this.aXY = function(eB, jl) {
		if (0 === jl) eB.fill(0);
		else {
			var aV8 = this.a1K(eB),
				gz = eB.length;
			if (0 === aV8) eB.fill(dV.eF(jl, gz));
			else
				for (var ak = 0; ak < gz; ak++) eB[ak] = dV.eF(jl * eB[ak], aV8);
			if (0 === (aV8 = this.a1K(eB))) eB[1] = jl;
			else
				for (var qc = 0; aV8++ < jl;) eB[qc = (qc + 1) % gz] && eB[qc]++
		}
	}, this.aLk = function(eB) {
		if (!eB) return 0;
		var gz = eB.length;
		if (0 === gz) return 0;
		for (var eH = eB[gz - 1], ak = gz - 2; 0 <= ak; ak--)
			if (eB[ak] !== eH) return ak + 2;
		return 1
	}, this.a4F = function(eB) {
		for (var aV8 = 0, ak = 0; ak < eB.length; ak++) aV8 += eB[ak].length;
		return aV8
	}, this.aXZ = function(aXa) {
		for (var eB = [], ak = 0; ak < aXa.length; ak++) eB = eB.concat(aXa[ak]);
		return eB
	}, this.has = function(eB, eH) {
		for (var gz = eB.length, ak = 0; ak < gz; ak++)
			if (eB[ak] === eH) return !0;
		return !1
	}
}

function d1() {
	this.rt = function(aEu) {
		for (var rx = n7, size = rx.s2(aEu), aEx = 7 + 9 * rx.s2(1), eB = [], ak = 0; ak < size; ak++) eB.push(String.fromCharCode(rx.s2(aEx)));
		return eB.join("")
	}
}

function aBW(aBz) {
	var pB = document.createElement("div"),
		aSm = document.createElement("div"),
		aXb = [];

	function a1W() {
		tC.tD() || (this.style.backgroundColor = aa.color.a1d(aF.bd, 50))
	}

	function a1X() {
		this.style.backgroundColor = aF.bd
	}
	this.aM = function(aXc, aC0) {
			aXb[2].textContent = aXc + 1 + " / " + aC0
		}, this.show = function(aN) {
			aSm.appendChild(f7.iD.transform(f7.iA.tY(aN, f7.iA.tZ(aN)))), document.body.appendChild(pB)
		}, this.resize = function() {
			var fQ = aa.ab.go(.03, .5);
			pB.style.width = 10 * fQ + "px", pB.style.font = aa.ab.fk(1, .75 * fQ), aa.ab.bU(pB, 4), aSm.style.top = fQ + "px", aSm.style.font = aa.ab.fk(0, .55 * fQ), aa.ab.bU(aSm, 2), pB.style.height = fQ + aSm.offsetHeight + "px";
			for (var ak = 0; ak < 3; ak++) aa.ab.bU(aXb[ak], 6), aXb[[0, 1, 3][ak]].style.width = 2 * fQ + "px";
			for (ak = 0; ak < 4; ak++) aXb[ak].style.height = fQ + "px", aa.ab.bU(aXb[ak], 2);
			aXb[2].style.width = 4 * fQ + "px", aXb[1].style.left = 2 * fQ + "px", aXb[2].style.left = 4 * fQ + "px", aXb[3].style.left = 8 * fQ + "px"
		}, this.hn = function() {
			for (var ak = 0; ak < 4; ak++) aXb[ak].onclick = null, aXb[ak].onmouseover = null, aXb[ak].onmouseout = null;
			aC.removeChild(document.body, pB), pB = aSm = aXb = null
		}, pB.style.position = "absolute", pB.style.color = aF.aG, pB.style.zIndex = "3", pB.style.right = "0", pB.style.top = "0", aSm.style.position = "absolute", aSm.style.height = "auto", aSm.style.color = aF.aG, aSm.style.backgroundColor = aF
		.bd, aSm.style.left = "0", aSm.style.width = "100%", aSm.style.overflowWrap = "break-word", pB.appendChild(aSm);
	for (var ak = 0; ak < 4; ak++) aXb[ak] = document.createElement("div"), aXb[ak].style.position = "absolute", aXb[ak].style.backgroundColor = aF.bd, aXb[ak].style.color = aF.aG, aXb[ak].style.top = "0", aXb[ak].style.display = "flex", aXb[ak]
		.style.justifyContent = "center", aXb[ak].style.alignItems = "center", aXb[ak].style.userSelect = "none", aXb[ak].style.outline = "none", aXb[ak].style.font = "inherit", 2 !== (aXb[ak].aBV = ak) && (aXb[ak].onclick = aBz, aXb[ak]
			.onmouseover = a1W, aXb[ak].onmouseout = a1X), pB.appendChild(aXb[ak]);
	aXb[0].textContent = "◀", aXb[1].textContent = "▶", aXb[3].textContent = "✖"
}

function ve() {
	function aXf(eB) {
		if (0 === eB.length) aK.aL.aM(116, "");
		else {
			for (var aXg = eB[0], ak = 1; ak < eB.length; ak++) aXg += ";" + eB[ak];
			aK.aL.aM(116, aXg)
		}
	}
	this.aGP = function() {
		aK.f4.data[110].value.length && (aK.f4.data[106].value = aK.f4.data[110], aK.aL.aM(110, ""), this.aXd())
	}, this.aXd = function() {
		var eB = aK.f4.data[116].value.split(";");
		for (eB.length % 2 == 1 && eB.pop(), eB.unshift(aK.f4.data[106].value), eB.unshift(aK.f4.data[105].value), ak = 2; ak < eB.length; ak += 2)
			if (eB[ak] === eB[0]) {
				eB.splice(ak, 2);
				break
			} for (var aXe = [], ak = 0; ak < eB.length; ak += 2) aXe.push(eB[ak]);
		aXf(eB), aK.f4.data[117].value = 0, aK.f4.data[117].dR = aXe
	}, this.aJr = function(aJ) {
		aK.f4.data[117].dR.splice(aJ, 1), aK.f4.data[117].value = Math.min(aJ, aK.f4.data[117].dR.length - 1);
		var eB = aK.f4.data[116].value.split(";");
		eB.splice(2 * aJ, 2), aXf(eB)
	}, this.aJs = function(aJ) {
		var eB = aK.f4.data[116].value.split(";");
		return {
			tJ: eB[2 * aJ],
			password: eB[2 * aJ + 1]
		}
	}, this.a1n = function() {
		var eH = dV.dW(aK.f4.data[121].value, -1, 262143);
		return eH = -1 === eH ? ~~(262144 * Math.random()) : eH
	}, this.vi = function() {
		for (var eB = document.cookie.split(";"), ak = 0; ak < eB.length; ak++) {
			var bE = eB[ak].trim(),
				aKu = bE.indexOf("="),
				aKu = 0 <= aKu ? bE.substring(0, aKu) : bE;
			document.cookie = aKu + "=;expires=0;path=/", document.cookie = aKu + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = aKu + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function aAh() {
	var aVz = 0,
		aXh = !0;

	function aXi(id) {
		id = [L(406), L(407), L(408), L(409)][id];
		mY.aJ5(id)
	}
	this.az = function() {
		var h4, p3;
		j.k < aVz || (aVz = j.k + 5e3, p.ay) || p.lI || aa.al.am(p.an) || (h4 = new Date, p3 = h4.getUTCSeconds(), aXh ? p3 < 50 && (aXh = !1) : p3 < 50 || (aXh = !0, (p3 = (h4.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == p3 || 20 == p3 || 40 ==
			p3 ? p.mR < 7 && aXi(0) : 10 == p3 || 30 == p3 || 50 == p3 ? 7 !== p.mR && 10 !== p.mR || aXi(1) : 5 == p3 || 25 == p3 || 45 == p3 ? 8 === p.mR && aXi(2) : 35 == p3 && 9 === p.mR && aXi(3))))
	}
}

function aAY() {
	var aXj, aXk, aXl, aXm, aXn, aXo, aXp, aXq, aXr, aXs, aXt, aXu, aXv, aXw, aXx, aXy, aXz, aY0, aY2, aY3, aY4, aY5, aY6, aYD, aYE, aY1 = null,
		aY8 = 0,
		aY9 = !1,
		aYA = new Float32Array(4),
		aYB = 0,
		aYC = !0,
		aPT = 400,
		aYF = 0;

	function a81() {
		aXr = Math.floor(+a5.fj), aXs = Math.floor(.5 * aXr)
	}

	function aYG() {
		var ak, aYL;
		for (gD.font = aa.ab.fk(1, 100 * aXt), aYL = 80 / Math.floor(gD.measureText(aa.dZ.fy(p.uE)).width), gD.font = aa.ab.fk(1, 100), ak = p.dS - 1; 0 <= ak; ak--) aXq[ak] = 100 / Math.floor(gD.measureText(fe.mb[ak]).width), aXp[ak] = Math.min(aYL,
			aXq[ak])
	}

	function aYM(ak) {
		return !aYF || (ak = fe.ff[ak]) < 1e6 ? 1 : ak < 1e7 ? aYA[0] : aYA[Math.min(Math.floor(Math.log10(ak)) - 6, 3)]
	}

	function aYK(ac) {
		aY0 = !1, aXz = 1, aXx = aXy = 0, aYC && (aa.ab.textAlign(ac, 1), aa.ab.textBaseline(ac, 1));
		for (var aYT, aYU, ak, aYV, fontSize, aYW, b = l5 / os, c = l6 / os, d = (a5.fS + l5) / os, e = (a5.fQ + l6) / os, aYX = 0 !== fe.gA[p.an] && !aa.al.is(p.an), ju = tq.th - 1; 0 <= ju; ju--) ak = tq.tg[ju], (fontSize = Math.floor(aXw * os *
			aYM(ak) * aXp[ak] * aXn[ak])) < aXv || aXr <= fontSize || aXl[ak] + aXn[ak] > b && aXl[ak] < d && aXm[ak] + aXo[ak] > c && aXm[ak] < e && (aYT = Math.floor(a5.fS * (aXl[ak] + aXn[ak] / 2 - b) / (d - b)), aYU = Math.floor(a5.fQ * (aXm[
			ak] + aXo[ak] / 2 - c) / (e - c) - .1 * fontSize), aYV = eu.dz[ak], ac.font = aa.ab.fk(1 === fe.gC[ak] ? 4 : 1, fontSize), ac.fillStyle = aYY(fontSize, aYV % 2), aYF ? aYZ(ac, ak, fontSize, aYT, aYU, aYV) : aYa(ak, fontSize, aYT,
			aYU, ac), aY0 = !0, 0 < aY4[ak] ? function(aYT, aYU, fontSize, ak, ac) {
			0 === a7b[ak] ? a9y.iD.a2C(aY3[ak]) ? (function(aYT, aYU, fontSize, player, yA, ac) {
				for (var g5 = aYU, wk = (ac.globalAlpha = aYi(fontSize), aYM(player) * (aYF ? aYB : aXq[player])), jT = aYT - .5 * fontSize / wk - .9 * fontSize, eM = 0; eM < 2; eM++) ac.fillText(a9y.iD.a28(yA), jT, g5), jT = aYT +
					.5 * fontSize / wk + .9 * fontSize;
				ac.globalAlpha = 1
			}(aYT, aYU, fontSize, ak, aY3[ak], ac), aYc(aYT, aYU, fontSize, 0, 0, ac)) : a9y.iD.a2E(aY3[ak]) ? (aYl(aYT, aYU, fontSize, aY3[ak], 0, ac), aYc(aYT, aYU, fontSize, 0, 1, ac)) : (aYl(aYT, aYU, fontSize, aY3[ak], 1, ac), aYc(
				aYT, aYU, fontSize, 1, 0, ac)) : aYl(aYT, aYU, fontSize, aY3[ak], 0, ac)
		}(aYT, aYU, fontSize, ak, ac) : 0 === a7b[ak] && aYc(aYT, aYU, fontSize, 0, 0, ac), aYX && (0 < aY4[ak + p.dS] || 0 < aY4[ak + 2 * p.dS] || 0 < aY4[ak + 3 * p.dS] || 0 < aY4[ak + 4 * p.dS]) && function(aYT, aYU, fontSize, ak, ac) {
			var aT, jl = -1;
			for (aT = 4; 1 <= aT; aT--) 0 < aY4[ak + aT * p.dS] && jl++;
			for (aT = 1; aT < 5; aT++) 0 < aY4[ak + aT * p.dS] && (! function(aYT, aYU, fontSize, aT, ak, aYg, h4, ac) {
				var aZ;
				if (1 === aT) {
					ak = aY3[ak + p.dS];
					if (!a9y.iD.a2D(ak)) return function(aYT, aYU, fontSize, yA, aYg, ac) {
						ac.globalAlpha = aYi(fontSize);
						aYT -= .534 * aYg * fontSize, aYg = aYU + 1.59 * fontSize;
						ac.font = aa.ab.fk(0, .785 * fontSize), ac.fillText(a9y.iD.a28(yA), aYT, aYg), ac.globalAlpha = 1
					}(aYT, aYU, fontSize, ak, aYg, ac);
					aZ = a9y.ae.aQ[ak - 1024 + a9y.iD.a20]
				} else aZ = 2 === aT ? m.aTz()[4].canvas[+(h4 < 255)] : (3 === aT ? m.aTz()[5] : m.aTz()[6]).canvas[0];
				ak = a9y.ae.aP, h4 = .8 * fontSize / ak, aT = aYT - .5 * h4 * ak - .534 * aYg * fontSize, aYT = aYU + 1.4 * h4 * ak;
				ac.setTransform(h4, 0, 0, h4, aT, aYT), ac.globalAlpha = aYi(fontSize), ac.drawImage(aZ, 0, 0), ac.globalAlpha = 1, ac.setTransform(1, 0, 0, 1, 0, 0)
			}(aYT, aYU, fontSize, aT, ak, jl, aY4[ak + aT * p.dS], ac), jl -= 2)
		}(aYT, aYU, fontSize, ak, ac), (aYW = aXt * fontSize) < aXv || (ac.font = aa.ab.fk(1, aYW), aYU += Math.floor(.78 * fontSize), aYF ? aYa(ak, aYW, aYT, aYU, ac) : aYZ(ac, ak, aYW, aYT, aYU, aYV)))
	}

	function aYa(ak, fontSize, a2, a3, ac) {
		var ___id = ak;
		var showName = ak < p.e3 || !__fx.settings.hideBotNames;
		if (showName) ac.fillText(fe.mb[ak], a2, a3), ak < p.e3 && 2 !== fe.gC[ak] || (ak = fontSize / aXq[ak], ac.fillRect(a2 - .5 * ak, a3 + aa.ab.gg * fontSize, ak, Math.max(1, .1 * fontSize)));
		aYF && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ac.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ac.fillText(__fx.utils.getDensity(___id), a2, showName ? a3 + fontSize : a3)
		);
	}

	function aYZ(ac, ak, fontSize, aYT, aYU, aYV) {
		var ___id = ak;
		ak = aa.dZ.fy(fe.ff[ak]);
		aYV >> 1 & 1 ? (ac.lineWidth = .05 * fontSize, ac.strokeStyle = aYY(fontSize, aYV % 2), ac.strokeText(ak, aYT, aYU)) : (1 < aYV && (ac.lineWidth = .12 * fontSize, ac.strokeStyle = aYY(fontSize, aYV), ac.strokeText(ak, aYT, aYU)), ac.fillText(
			ak, aYT, aYU));
		aYF || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ac.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), ac.fillText(__fx.utils.getDensity(___id), aYT, aYU + fontSize))
	}

	function aYc(aYT, aYU, fontSize, aYg, aYh, ac) {
		var lG = .95 * fontSize / aY6,
			aYT = aYT - .5 * lG * aY5 + .8 * aYg * fontSize,
			aYg = aYU - 1.76 * lG * aY6 - (.35 - aa.ab.gg + .7) * aYh * fontSize;
		ac.setTransform(lG, 0, 0, lG, aYT, aYg), ac.globalAlpha = aYi(fontSize), ac.drawImage(i4.get(4), 0, 0), ac.globalAlpha = 1, ac.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aYl(aYT, aYU, fontSize, yA, aYg, ac) {
		var aY, jT, lG;
		ac.globalAlpha = aYi(fontSize), a9y.iD.a2D(yA) ? (aY = a9y.ae.aP, ac.setTransform(lG = 1.1 * fontSize / aY, 0, 0, lG, jT = aYT - .5 * lG * aY - .8 * aYg * fontSize, lG = aYU - 1.55 * lG * aY), ac.drawImage(a9y.ae.aQ[yA - 1024 + a9y.iD.a20],
			0, 0), ac.setTransform(1, 0, 0, 1, 0, 0)) : (jT = aYT - .8 * aYg * fontSize, lG = aYU - (.35 - aa.ab.gg + 1) * fontSize, ac.fillText(a9y.iD.a28(yA), jT, lG)), ac.globalAlpha = 1
	}

	function aYY(fontSize, aYV) {
		return aXs <= fontSize && fontSize < aXr ? eL.aOC[aYV] + aYi(fontSize).toFixed(3) + ")" : eL.aOD[aYV]
	}

	function aYi(fontSize) {
		return aXs <= fontSize && fontSize < aXr ? 1 - (fontSize - aXs) / (aXr - aXs) : 1
	}

	function aYv(wk, fS) {
		return 1 + Math.floor(aXu * wk * fS)
	}

	function aYs(ak) {
		for (var left = aXl[ak], ju = aXl[ak] - fe.je[ak] - 1; 0 <= ju; ju--)
			if (!aYw(ak, --left, aXm[ak], aXo[ak])) {
				left++;
				break
			} var right = aXl[ak];
		for (ju = fe.jg[ak] - aXl[ak] - aXn[ak]; 0 <= ju; ju--)
			if (!aYw(ak, ++right + aXn[ak] - 1, aXm[ak], aXo[ak])) {
				right--;
				break
			} var a2 = Math.floor((left + right) / 2),
			top = aXm[ak];
		for (ju = aXm[ak] - fe.jf[ak] - 1; 0 <= ju; ju--)
			if (!aYx(ak, a2, --top, aXn[ak])) {
				top++;
				break
			} var bottom = aXm[ak];
		for (ju = fe.jh[ak] - aXm[ak] - aXo[ak]; 0 <= ju; ju--)
			if (!aYx(ak, a2, ++bottom + aXo[ak] - 1, aXn[ak])) {
				bottom--;
				break
			} var a3 = Math.floor((top + bottom) / 2);
		aYp(ak, a2, a3, aXn[ak], aXo[ak]) && (aXl[ak] = a2, aXm[ak] = a3)
	}

	function aYp(player, a2, a3, fS, fQ) {
		eI = Math.floor(.2 * fS);
		for (var eI, aT = a2 + fS - 1; a2 <= aT; aT--)
			if (!aYw(player, aT, a3, fQ)) return;
		for (aT = a3 + fQ - 1 - (eI = (eI = Math.floor(.25 * fQ)) < 1 ? 1 : eI); a3 + eI <= aT; aT--)
			if (!aYx(player, a2, aT, fS)) return;
		return 1
	}

	function aYw(player, a2, a3, fQ) {
		return eu.eY(player, 4 * (a3 * dx.dy + a2)) && eu.eY(player, 4 * ((a3 + fQ - 1) * dx.dy + a2))
	}

	function aYx(player, a2, a3, fS) {
		return eu.eY(player, 4 * (a3 * dx.dy + a2)) && eu.eY(player, 4 * (a3 * dx.dy + a2 + fS - 1))
	}
	this.aB = function() {
		if (aYF = aK.f4.data[7].value || 8 === p.mR, aPT = 0 === (aPT = aK.f4.data[11].value) ? 280 : 1 === aPT ? 187 : 112, aY0 = !1, aXw = .88, aXt = .5, aXu = 1.8, aXv = 12 - 3 * aK.f4.data[9].value, aXk = aXj = 0, aXl = new Uint16Array(p.dS),
			aXm = new Uint16Array(p.dS), aXn = new Uint16Array(p.dS), aXo = new Uint16Array(p.dS), aXp = new Float32Array(p.dS), aXq = new Float32Array(p.dS), aY3 = new Uint16Array(2 * p.dS), aY4 = new Uint8Array(5 * p.dS), aYD = new Uint8Array(p
				.dS), aYE = new Uint8Array(p.dS), aYC || (aY1 = aY1 || document.createElement("canvas")), a81(), aXy = aXx = 0, aXz = 1, aYF) {
			var ak, aYL;
			for (aYG(), gD.font = aa.ab.fk(1, 100), aYL = 100 / Math.floor(gD.measureText("900 000").width), ak = p.dS - 1; 0 <= ak; ak--) aXp[ak] = Math.min(aYL, 2 * aXq[ak]);
			aYB = aYL, aYA[0] = 100 / (aYL * Math.floor(gD.measureText("5 000 000").width)), aYA[1] = 100 / (aYL * Math.floor(gD.measureText("50 000 000").width)), aYA[2] = 100 / (aYL * Math.floor(gD.measureText("500 000 000").width)), aYA[3] =
				100 / (aYL * Math.floor(gD.measureText("1 000 000 000").width))
		} else aYG();
		! function() {
			var ak;
			for (ak = p.dS - 1; 0 <= ak; ak--) fe.jQ[ak] < 12 ? (aXl[ak] = fe.je[ak] + 1, aXm[ak] = fe.jf[ak] + 1, aXn[ak] = 1, aXo[ak] = 1) : (aXl[ak] = fe.je[ak], aXm[ak] = fe.jf[ak] + 1, aXn[ak] = 4, aXo[ak] = 2);
			if (p.gB)
				for (ak = 0; ak < p.e3; ak++) aXn[ak] = 0;
			aY5 = i4.get(4).width, aY6 = i4.get(4).height
		}()
	}, this.aWT = function(g6, a7Q) {
		a7Q > 18 * fe.jQ[g6] ? (aYE[g6] = 6, eu.dz[g6] = 2 + eu.dz[g6] % 2) : (aYD[g6] = 4, (eu.dz[g6] < 2 || 3 < eu.dz[g6]) && (eu.dz[g6] = 6 + eu.dz[g6] % 2))
	}, this.j8 = function(g6, a7Q) {
		a7Q > 6 * fe.jQ[g6] ? (aYE[g6] = 6, eu.dz[g6] = 4 + eu.dz[g6] % 2) : (aYD[g6] = 4, (eu.dz[g6] < 4 || 5 < eu.dz[g6]) && (eu.dz[g6] = 8 + eu.dz[g6] % 2))
	}, this.resize = function() {
		a81(), aYC || aYK(aY2)
	}, this.wC = function() {
		for (var ak = 0; ak < p.e3; ak++) fe.jg[ak] - fe.je[ak] != 3 || fe.jh[ak] - fe.jf[ak] != 3 ? (aXl[ak] = fe.je[ak] + (fe.jg[ak] !== fe.je[ak] ? 1 : 0), aXm[ak] = fe.jf[ak], aXn[ak] = 1, aXo[ak] = 1) : (aXl[ak] = fe.je[ak], aXm[ak] = fe.jf[
			ak] + 1, aXn[ak] = 4, aXo[ak] = 2)
	}, this.yC = function(player, aJ, aYN) {
		! function(player, aJ, aYN) {
			player += aJ * p.dS;
			0 === aJ ? aY3[player] === aYN && 0 < aY4[player] ? aY4[player] = 0 : (aY3[player] = aYN, aY4[player] = a9y.iD.a2C(aYN) ? 255 : 64) : 1 === aJ ? (aY4[player] = 64, aY3[player] = aYN) : aY4[player] = aYN
		}(player, aJ, aYN), 2 === p.q && this.fs(!0)
	}, this.g9 = function() {
		aYC ? aYK(gD) : aY0 && (1 !== aXz ? (gD.imageSmoothingEnabled = !0, gD.setTransform(aXz, 0, 0, aXz, 0, 0), gD.drawImage(aY1, -aXx / aXz, -aXy / aXz), gD.setTransform(1, 0, 0, 1, 0, 0), gD.imageSmoothingEnabled = !1) : gD.drawImage(aY1, -
			aXx, -aXy))
	}, this.aYP = function(aV, aW) {
		aXx += aV, aXy += aW
	}, this.l7 = function(aV, aW) {
		j7.aYP(aV, aW)
	}, this.zoom = function(a6N, lQ, lR) {
		aXz *= a6N, aXx = (aXx + lQ) * a6N - lQ, aXy = (aXy + lR) * a6N - lR
	}, this.fs = function(a6U) {
		return !aYC && !(!aY9 && !a6U && j.k < aY8 + (1 === aXz && 0 === aXx && 0 === aXy && (p.aJZ() || p.gB || 2 === p.q) ? 1e3 : aPT) || (aY9 = !1, aY8 = j.k, aYK(aY2), 0))
	}, this.aYR = function(ak) {
		return aYM(ak) * aXp[ak]
	}, this.aYS = function(player) {
		return aXp[player]
	}, this.az = function() {
		j.b2() % 10 == 9 && (aY9 = p.aJa() && !p.aJZ()), !p.aJZ() && 4 <= ++aXk && function() {
			var ak, ju, eM;
			for (aXk = 0, eM = 4; 1 <= eM; eM--)
				for (ju = tq.th - 1; 0 <= ju; ju--) ak = tq.tg[ju] + eM * p.dS, 0 < aY4[ak] && aY4[ak] < 255 && aY4[ak]--;
			if (2 !== p.q)
				for (ju = tq.th - 1; 0 <= ju; ju--) ak = tq.tg[ju], 0 < aY4[ak] && aY4[ak] < 255 && aY4[ak]--
		}();
		var ak, ju, gz = Math.floor(.1 * tq.th);
		for (gz = (gz = gz < 8 ? 8 : gz) > tq.th ? tq.th : gz, ak = aXj + gz - 1; aXj <= ak; ak--) ju = ak % tq.th, ! function(ak) {
			var wk = aYM(ak) * aXp[ak];
			0 < aXn[ak] && aYp(ak, aXl[ak], aXm[ak], aXn[ak], aXo[ak]) ? ! function(ak) {
				for (var a2, a3, fS, fQ, ai = !1, eM = 0; eM < 8; eM++) {
					if (fS = aXn[ak] + 2, fQ = aXo[ak] + 2, fS > fe.jg[ak] - fe.je[ak] + 1 || fQ > fe.jh[ak] - fe.jf[ak] + 1) return ai;
					if (a2 = aXl[ak] - 1, a3 = aXm[ak] - 1, !aYp(ak, a2, a3, fS, fQ)) return ai;
					aXl[ak] = a2, aXm[ak] = a3, aXn[ak] = fS, aXo[ak] = fQ, ai = !0
				}
				return ai
			}(ak) && function(ak, wk) {
				for (var a2, a3, fS, fQ, ai = !1, va = aXn[ak], gp = 1 + Math.floor(.02 * va), eM = 1; eM < 5; eM++) {
					if ((fS = va + eM * gp) > fe.jg[ak] - fe.je[ak] + 1) return ai;
					if ((fQ = aYv(wk, fS)) > fe.jh[ak] - fe.jf[ak] + 1) return ai;
					a2 = fe.je[ak] + Math.floor(Math.random() * (fe.jg[ak] - fe.je[ak] + 2 - fS)), a3 = fe.jf[ak] + Math.floor(Math.random() * (fe.jh[ak] - fe.jf[ak] + 2 - fQ)), aYp(ak, a2, a3, fS, fQ) && (aXl[ak] = a2, aXm[ak] = a3, aXn[
						ak] = fS, aXo[ak] = fQ, ai = !0)
				}
				return ai
			}(ak, wk) && aYs(ak) : ! function(ak, wk) {
				var fQ, a2 = aXl[ak] + 1,
					a3 = aXm[ak] + 1,
					fS = aXn[ak] - 2;
				for (;;) {
					if (fS < 1) {
						aXn[ak] = 0;
						break
					}
					if (fQ = aYv(wk, fS), aYp(ak, a2, a3, fS, fQ)) return aXl[ak] = a2, aXm[ak] = a3, aXn[ak] = fS, aXo[ak] = fQ, 1;
					a2++, a3++, fS -= 2
				}
				return
			}(ak, wk) ? function(ak, wk) {
				var a2, a3, fS, fQ, eM, s, eE = fe.jg[ak] - fe.je[ak] + 1,
					aKK = Math.floor(.02 * eE);
				for (s = -6 * (aKK = aKK < 1 ? 1 : aKK), eM = eE; s <= eM; eM -= aKK)
					if (fQ = aYv(wk, fS = 0 < eM ? eM : 1), a2 = fe.je[ak] + Math.floor(Math.random() * (fe.jg[ak] - fe.je[ak] + 2 - fS)), a3 = fe.jf[ak] + Math.floor(Math.random() * (fe.jh[ak] - fe.jf[ak] + 2 - fQ)), aYp(ak, a2, a3, fS,
							fQ)) return aXl[ak] = a2, aXm[ak] = a3, aXn[ak] = fS, aXo[ak] = fQ
			}(ak, wk) : aYs(ak)
		}(tq.tg[ju]);
		aXj = (aXj += gz) % tq.th
	}, this.a4b = function() {
		var ak, g6, a2A, a2B;
		if (j.b2() % 4 == 1)
			for (ak = tq.th - 1; 0 <= ak; ak--) g6 = tq.tg[ak], eu.dz[g6] < 2 || ((a2A = Math.max(aYD[g6] - 1, 0)) === (a2B = Math.max(aYE[g6] - 1, 0)) ? 0 === a2A && (eu.dz[g6] %= 2) : 0 === a2B && eu.dz[g6] < 6 && (eu.dz[g6] += 4), aYD[g6] =
				a2A, aYE[g6] = a2B)
	}, this.uG = function(player) {
		var ak = player + 2 * p.dS,
			h4 = aY4[ak];
		return 0 < h4 && (mY.aCQ(50, player), aY4[ak] = 0, 255 === h4)
	}, this.aUC = function(player) {
		return 255 === aY4[player + 2 * p.dS]
	}
}

function aAr() {
	function aZ0() {
		return {
			dy: dx.dy,
			jK: dx.jK,
			lm: dx.lm,
			fl: dx.fl,
			s5: dx.s5,
			s8: dx.s8,
			nd: dx.nd,
			mapSeed: dx.mapSeed,
			s6: dx.s6
		}
	}

	function aYz(ak) {
		return 1 !== ak && dx.aUh(ak) && ak !== dx.aZ3()
	}
	this.wV = 24, this.aSE = 12, this.aD5 = 4096, this.dy = 0, this.jK = 0, this.lm = null, this.fl = null, this.s5 = null, this.s8 = null, this.nd = 0, this.mapSeed = 0, this.s6 = !1, this.s7 = new aQo, this.s0 = new aS5, this.wU = new aMn, this
		.aB = function() {
			this.s0.aB()
		}, this.gZ = function(map, aYy) {
			((map %= this.wV) !== this.nd || aYz(this.nd) && aYy !== this.mapSeed) && (this.s6 = !1, this.s7.aQx(), eG.a2u(map), this.nd = map, this.mapSeed = aYy, aYz(map) && (dx.s0.s1[map].a2w = aYy), this.aUh(this.nd) ? (map = dx.s0.s1[this.nd],
				this.dy = map.fS, this.jK = map.fQ, eG.a2u(map.a2w), wb.gZ([this.dy, this.jK, map.a4h, map.a4e]), a6D(), a9z.wW(), wb.aKA()) : zg())
		}, this.ln = function(map, aYy) {
			var nI = aZ0(),
				map = (this.gZ(map, aYy), this.s7.aQx(), aZ0());
			return aYy = nI, dx.dy = aYy.dy, dx.jK = aYy.jK, dx.lm = aYy.lm, dx.fl = aYy.fl, dx.s5 = aYy.s5, dx.s8 = aYy.s8, dx.nd = aYy.nd, dx.mapSeed = aYy.mapSeed, dx.s6 = aYy.s6, map
		}, this.aZ2 = function(canvas) {
			canvas && this.lm !== canvas && (this.dy = canvas.width, this.jK = canvas.height, this.lm = canvas, this.fl = this.lm.getContext("2d", {
				alpha: !1
			}), this.ad = this.fl.getImageData(0, 0, this.dy, this.jK), this.s8 = this.ad.data, this.nd = this.aZ3(), this.mapSeed = 0, dx.s0.s1[this.nd].name = p.data.mapName)
		}, this.nc = function(ak) {
			return 3 === ak || 7 === ak || 9 === ak || 21 === ak || ak === this.aZ3()
		}, this.zx = function(ak) {
			return 2 === ak || 7 === ak || 9 === ak || 20 === ak
		}, this.wZ = function(ak) {
			return 1 === ak
		}, this.aZ3 = function() {
			return this.wV
		}, this.aUh = function(ak) {
			return void 0 === this.s0.s1[ak].aQy
		}, this.lo = function(aN) {
			return 0 === aN.mapType ? aN.mapProceduralIndex < 10 ? aN.mapProceduralIndex : 10 + aN.mapProceduralIndex : 1 === aN.mapType ? 10 <= aN.mapRealisticIndex ? 22 + aN.mapRealisticIndex - 10 : aN.mapRealisticIndex + 10 : void 0
		}, this.aUi = function(aN, aZ4) {
			0 === aN.mapType ? aN.mapProceduralIndex = aZ4 < 10 ? aZ4 : aZ4 - 10 : 1 === aN.mapType && (aN.mapRealisticIndex = aZ4 - (22 <= aZ4 ? 12 : 10))
		}
}

function sd() {
	function aZ5(pu, rM, rO) {
		for (var eE = Math.min(rM, rO), s = Math.max(rM, rO), a3 = eE + 1; a3 < s; a3++)
			if (!eu.ee(pv.aFW(pu, a3))) return;
		return 1
	}

	function aZ6(px, rL, rN) {
		for (var eE = Math.min(rL, rN), s = Math.max(rL, rN), a2 = eE + 1; a2 < s; a2++)
			if (!eu.ee(pv.aFW(a2, px))) return;
		return 1
	}

	function aZ7(rL, rM, rN, rO, xB, x5) {
		for (var gz = Math.min(Math.abs(rN - rL), Math.abs(rO - rM)), aV = Math.sign(rN - rL), aW = Math.sign(rO - rM), ak = 0; ak < gz; ak++)
			if (!eu.ee(pv.aFW(rL += aV, rM += aW))) return null;
		return rL === rN ? aZ5(rL, rM, rO) ? new Uint32Array([xB, pv.pz(rL, rM), x5]) : null : aZ6(rM, rL, rN) ? new Uint32Array([xB, pv.pz(rL, rM), x5]) : null
	}
	this.x6 = function(xB, x5) {
		xB = function(xB, x5) {
			var rL = pv.qn(xB),
				rM = pv.qp(xB),
				rN = pv.qn(x5),
				rO = pv.qp(x5);
			if (rL === rN) {
				if (aZ5(rL, rM, rO)) return new Uint32Array([xB, x5])
			} else {
				if (rM !== rO) return aZ7(rL, rM, rN, rO, xB, x5) || aZ7(rN, rO, rL, rM, xB, x5);
				if (aZ6(rM, rL, rN)) return new Uint32Array([xB, x5])
			}
			return null
		}(xB, x5);
		return null === xB ? -1 : ao.sj.xE(xB)
	}
}

function a8o(data) {
	var hT, vk;
	this.show = function() {
		data.aGw && yk.yo("account", data.tJ), hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize(), vk.resize()
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	}, hT = new d6(data.username, [new d7("⬅️ " + L(1), function() {
		yk.clear(), aC.dE()
	}), new d7(data.aGw ? "🔄 " + L(410) : L(411), function() {
		aC.dT(8, data.aGw ? aC.b3().a0Y : void 0, new hY(25, {
			yl: 0,
			tJ: data.tJ,
			ym: data.ym
		}))
	}, 0, 0, 1)]), vk = new d9(hT.dA, function() {
		var dI = [];
		dI.push(function() {
				var dM = new dN,
					mn = (dM.dO(L(460)), data.aGo);
				mn < 1 ? (dM.mF(L(461)), 0 === data.aGn ? dM.vp(L(462)) : 1 === data.aGn ? dM.vp(L(463)) : 2 === data.aGn ? dM.vp(L(464)) : 3 === data.aGn ? dM.vp(L(465)) : 4 === data.aGn ? dM.vp(L(466)) : 5 === data.aGn ? dM.vp(L(467)) :
					6 === data.aGn ? dM.vp(L(468)) : dM.vp(L(469))) : (dM.mF(L(470)), mn = mn < 2 ? L(471) : mn < 61 ? 2 === mn ? L(472) : L(473, [mn - 1]) : mn < 84 ? 61 === mn ? L(474) : L(475, [mn - 60]) : mn < 255 ? 84 === mn ? L(
					476) : L(477, [mn - 83]) : L(478), dM.vp(mn));
				{
					var aDE, aD9;
					dM.dU(new a1M), data.aGw && (aDE = dM.vp(), dM.dU(new m8([new d7(aK.vf.tA(data.tJ) ? L(479) : L(480), function(i) {
						return aK.vf.yJ(data.tJ) ? (i.textContent = L(479), aD9(1)) : (i.textContent = L(480), aD9(0)), !0
					}).button])), aD9 = function(eH) {
						aDE.textContent = eH ? L(481) : ""
					}, aK.vf.tA(data.tJ) && aD9(1), dM.dU(new a1M))
				}
				var vy = new a7({
					value: data.username,
					aJ: -1
				});
				vy.i.readOnly = !0, dM.dU(vy), dM.dU(new m8([new d7(L(431), function(i) {
					return aa.ab.h2(vy.i), aa.ab.h3(i), !0
				}).button])), data.aGw ? (dM.dU(new a1M), dM.mF("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", dM.dU(new m8([new d7(L(483),
					function(i) {
						return bA.a5O.a8M({
							yl: 3,
							tJ: data.tJ,
							value: 0
						}), aa.ab.h3(i), !0
					}, aF.cL).button])), dM.dU(new m8([new d7(L(484), function(i) {
					return bA.a5O.a8M({
						yl: 3,
						tJ: data.tJ,
						value: 1
					}), aa.ab.h3(i), !0
				}, aF.cL).button])), dM.dU(new m8([new d7("Cheater", function(i) {
					return bA.a5O.a8M({
						yl: 3,
						tJ: data.tJ,
						value: 2
					}), aa.ab.h3(i), !0
				}, aF.cL).button])), dM.dU(new m8([new d7("False Reporter", function(i) {
					return bA.a5O.a8M({
						yl: 3,
						tJ: data.tJ,
						value: 3
					}), aa.ab.h3(i), !0
				}, aF.cL).button]))) : dM.vp(L(482));
				return dM
			}()),
			function(dI) {
				var dM, aDE, aEk, aE3, aDD, a1A, aDB;
				data.aGw || ((dM = new dN).dO(L(485)), (aDE = dM.vp(data.aGj.length + " / 160")).style.textAlign = "center", aEk = !0, (aE3 = new dX(0, 1, function(i) {
					i = i.target.value.length;
					aDE.textContent = i + " / 160", 160 < i ? aEk && (aEk = !1, a1A.a1U(1)) : aEk || (aEk = !0, a1A.a1U(0))
				})).i.rows = 6, aE3.i.style.fontSize = "1em", aE3.dY(data.aGj), dM.dU(aE3), 0 !== data.aGh ? (a1A = new d7(L(486), function() {
					if (!aEk) return !0;
					aC.dT(8, aC.b3().a0Y, new hY(29, {
						yl: 1,
						bE: aE3.dH().substring(0, 160)
					}))
				}, 0, 0, 1), dM.dU(new m8([a1A.button])), dM.dU(new m8([new d7(1 === data.aGh ? L(487) : L(488), function() {
					aC.dT(8, aC.b3().a0Y, new hY(29, {
						yl: 0,
						bE: ""
					}))
				}, 0, 0, 1).button])), dM.vp(1 === data.aGh ? L(489, [data.aGk - 1]) : L(490, [data.aGk - 1])), dM.vp(L(491, [data.aGi]))) : (aDD = new d7(L(492), function() {
					if (!aE3.i.readOnly) return !0;
					aC.dT(8, aC.b3().a0Y, new hY(29, {
						yl: 1,
						bE: aE3.dH().substring(0, 160)
					}))
				}, 1), a1A = new d7(L(173), function(i) {
					if (i.textContent === L(173)) {
						if (!aEk) return !0;
						i.textContent = L(174), aE3.i.readOnly = !0, aDD.a1U(0), aDD.button.style.color = aF.ce
					} else aDB();
					return !0
				}), dM.dU(new m8([a1A.button])), dM.vp(L(491, [data.aGi])), aDB = function() {
					a1A.button.textContent = L(173), aE3.i.readOnly = !1, aDD.a1U(1), aDD.button.style.color = aF.aG
				}, dM.dU(new m8([aDD.button]))), dI.push(dM))
			}(dI),
			function(dI) {
				var dM;
				data.aGw && 0 !== data.aGh && ((dM = new dN).dO(L(493)), dM.aEz(data.aGj), dM.dU(new m8([new d7(L(494, 0, "Report"), function(i) {
					return bA.aD.a0f(0) && (aa.ab.h3(i), bA.a5O.a8L({
						yl: 5,
						tJ: data.tJ
					})), !0
				}, 0, 0, 1).button])), dI.push(dM))
			}(dI), dI.push(function() {
				var dM = new dN,
					aZM = (dM.dO(L(412)), dM.mF("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(413), L(414), L(415), L(416), L(417), L(418), L(419), L(
						420), L(421), L(422), L(423), L(424), L(425), L(426)]),
					aj = data.aGl;
				return dM.mF(L(427) + aa.dZ.a5g(data.a8H, .01, 2) + "<br>" + L(428) + (aj + 1) + " / " + data.aGT + "<br>" + L(429) + aZM[function(aj, a8H) {
					if (aj < 10) return 0;
					if (aj < 30) return 1;
					if (aj < 60) return 2;
					if (3e4 <= (a8H = dV.eF(a8H, 100))) return 3;
					if (12e3 <= a8H) return 4;
					if (7e3 <= a8H) return 5;
					if (3e3 <= a8H) return 6;
					if (1e3 <= a8H) return 7;
					if (500 <= a8H) return 8;
					if (200 <= a8H) return 9;
					if (70 <= a8H) return 10;
					if (20 <= a8H) return 11;
					if (3 <= a8H) return 12;
					return 13
				}(aj, data.a8H)]), dM
			}()), data.aGw && dI.push(function() {
				var dM = new dN,
					vy = (dM.dO(L(430)), dM.mF("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new a7({
						value: aK.f4.data[147].value,
						aJ: -1
					}, 1, void 0, function(i) {
						aK.aL.aM(147, aD9(i.target.value))
					})),
					aDD = (dM.dU(vy), new d7(L(175), function(i) {
						return vy.i.readOnly && bA.aD.a0f(0) && (aa.ab.h3(i), aDB(), bA.a5O.a8M({
							yl: 0,
							tJ: data.tJ,
							value: parseInt(aK.f4.data[147].value, 10)
						})), !0
					}, 1)),
					a1A = new d7(L(173), function(i) {
						return i.textContent === L(173) ? (i.textContent = L(174), vy.i.readOnly = !0, aDD.a1U(0), aDD.button.style.color = aF.ce, aK.aL.aM(147, vy.i.value), aD9(aK.f4.data[147].value)) : aDB(), !0
					}),
					aDE = (dM.dU(new m8([a1A.button])), dM.vp()),
					aD9 = function(eH) {
						aDE.innerHTML = aC.aD.aDF(eH, aK.f4.data[105].value, data.tJ)
					},
					aDB = function() {
						a1A.button.textContent = L(173), vy.i.readOnly = !1, aDD.a1U(1), aDD.button.style.color = aF.aG
					};
				return aD9(aK.f4.data[147].value), dM.dU(new m8([aDD.button])), dM
			}());
		dI.push(function() {
			var dM = new dN,
				vy = (dM.dO(L(399)), new a7({
					value: data.tJ,
					aJ: -1
				}));
			return vy.i.readOnly = !0, dM.dU(vy), dM.dU(new m8([new d7(L(431), function(i) {
				return aa.ab.h2(vy.i), aa.ab.h3(i), !0
			}).button])), dM
		}()), data.aGw || (dI.push(function() {
			var dM = new dN,
				aX7 = (dM.dO(L(400)), new a7(aK.f4.data[106]));
			return aX7.i.readOnly = !0, aX7.i.type = "password", dM.dU(aX7), dM.dU(new m8([new d7(L(183), function(i) {
				return i.textContent === L(183) ? (i.textContent = L(401), aX7.i.type = "text") : (i.textContent = L(183), aX7.i.type = "password"), !0
			}).button, new d7(L(431), function(i) {
				return aa.ab.h2(aX7.i), aa.ab.h3(i), !0
			}).button])), dM.dU(new m8([new d7(L(432), function() {
				aC.dT(8, aC.b3().a0Y, new hY(15))
			}).button])), dM.dO(L(402), "0.8em"), dM.vp(L(433)), dM.vp(L(434)), dM.vp(L(435)), dM
		}()), dI.push(function() {
			var dM = new dN;
			return dM.dO(L(436)), dM.dU(new m8([new d7(L(437), function() {
				aC.dT(6, aC.b3().a0Y)
			}).button])), dM.dU(new m8([new d7(L(438), function() {
				aK.aL.aM(105, ""), aC.dT(8, aC.b3().a0Y, new hY(18))
			}).button])), dM.dU(new m8([new d7(L(439) + aK.f4.data[105].value, function() {
				aC.dT(4, 0, new gR(L(440), L(441), !0, [new d7("⬅️ " + L(1), function() {
					aC.dT(7, aC.fC(7).a0Y)
				})]))
			}, aF.cL).button])), dM
		}()), dI.push(function() {
			function aZP(aJ) {
				aZO[0].a1U(0 === aJ ? aF.bs : aF.c3), aZO[1].a1U(0 === aJ ? aF.bs : aF.cL), aZO[2].a1U(aJ === aF1.aBZ.length - 1 || aJ < 5 ? aF.bs : aF.cL)
			}
			var aF1, aZO, dM = new dN;
			dM.dO(L(446)), dM.vp(L(447)), aK.aD.aXd();
			return aZO = [new d7(L(398), function() {
				var aJ = Math.min(aK.f4.data[117].value, aF1.aBZ.length - 1);
				aJ < 1 || (aJ = aK.aD.aJs(aJ), aK.aL.aM(105, aJ.tJ), aK.aL.aM(106, aJ.password), aC.dT(8, aC.b3().a0Y, new hY(18)))
			}, aF.bs, 1), new d7(L(444), function() {
				var aJ = Math.min(aK.f4.data[117].value, aF1.aBZ.length - 1);
				if (!(aJ < 1)) {
					aF1.aBZ[aJ].remove(), aF1.aBZ.splice(aJ, 1);
					for (var ak = aJ; ak < aF1.aBZ.length; ak++) aF1.aBZ[ak].name = "" + ak;
					aK.aD.aJr(aJ), aJ = aK.f4.data[117].value, aF1.aBZ[aJ].textContent = aF1.aBZ[aJ].textContent.replace("⚪", "🟢"), aZP(aJ)
				}
			}, aF.bs, 1), new d7(L(445), function() {
				var aJ = Math.min(aK.f4.data[117].value, aF1.aBZ.length - 1);
				if (aJ !== aF1.aBZ.length - 1) {
					for (var ak = aF1.aBZ.length - 1; aJ < ak; ak--) aF1.aBZ[ak].remove(), aF1.aBZ.splice(ak, 1), aK.aD.aJr(ak);
					aZP(aJ)
				}
			}, aF.bs, 1)], aF1 = new dQ(aK.f4.data[117], aZP), aZP(0), aF1.aBZ[0].style.marginTop = "0.5em", dM.dP(aF1), dM.dU(new m8([aZO[0].button])), dM.dU(new m8([aZO[1].button])), dM.dU(new m8([aZO[2].button])), dM
		}()));
		return dI.push(function() {
				var dM = new dN,
					aZM = (dM.dO(L(451)), [L(452), L(453), L(454), L(455)]),
					aj = data.aGm;
				return dM.mF(L(456) + (data.mS / 100).toFixed(2) + "<br>" + L(428) + (aj + 1) + " / " + data.aGT + "<br>" + L(429) + aZM[aj < 10 ? 0 : aj < 50 ? 1 : aj < 200 ? 2 : 3]), dM
			}()), dI.push(function() {
				var dM = new dN;
				return dM.dO(L(448)), dM.mF(L(449) + aa.dZ.a5g(data.aGQ, .1, 1) + "<br>" + L(428) + (data.aGR + 1) + " / " + data.aGT + "<br>" + L(450) + data.aGS), dM
			}()),
			function(dI) {
				var dM = new dN,
					aZR = data.aGW,
					aZS = (dM.dO(L(495)), dM.mF(L(496, [data.aGU.length ? "[" + data.aGU + "]" : "-"])), dM.mF(L(497, [aa.dZ.a5g(aZR, .01, 2)])), dM.mF(L(498, [data.aGY + 1 + " / " + data.aGT])), data.aGZ),
					aZT = (dM.mF(L(499, [aa.dZ.a5g(aZS, .1, 1)])), data.aGb);
				dM.mF(L(500, [aZT])), dM.mF(L(501, [aa.dZ.a5g(aZS / Math.max(aZT, 1), .1, 2)])), aZR = data.aGX, dM.dO(L(502), "0.8em"), dM.mF(L(496, [data.aGV.length ? "[" + data.aGV + "]" : "-"])), dM.mF(L(497, [aa.dZ.a5g(aZR, .01, 2)])),
					aZS = data.aGa, dM.mF(L(499, [aa.dZ.a5g(aZS, .1, 1)])), aZT = data.aGc, dM.mF(L(500, [aZT])), dM.mF(L(501, [aa.dZ.a5g(aZS / Math.max(aZT, 1), .1, 2)])), dM.mF(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", dI.push(dM)
			}(dI),
			function(dI) {
				var dM = new dN;
				dM.dO(L(503)), dM.mF(L(456) + (data.aGf / 10).toFixed(1) + "<br>" + L(429) + (data.aGg.length ? L(504, [data.aGg]) : L(505))), data.aGw && dM.dU(new m8([new d7(L(506), function(i) {
					return bA.aD.a0f(0) && (aa.ab.h3(i), bA.a5O.a8L({
						yl: 4,
						tJ: data.tJ
					})), !0
				}, 0, 0, 1).button]));
				dM.mF("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", dI.push(dM)
			}(dI), dI.push(function() {
				var dM = new dN;
				if (dM.dO(L(457)), dM.mF(L(458) + data.aGd + "<br>" + L(428) + (data.aGe + 1) + " / " + data.aGT + "<br>" + L(429) + a0L.ki(data.aGe)), data.aGw) {
					var vy = new a7({
							value: aK.f4.data[157].value,
							aJ: -1
						}, 1, void 0, function(i) {
							aK.aL.aM(157, aD9(i.target.value))
						}),
						a1A = (vy.i.style.marginTop = "0.6em", dM.dU(vy), new d7(L(173), function(i) {
							return i.textContent === L(173) ? (i.textContent = L(174), vy.i.readOnly = !0, aZQ[0].a1U(0), aZQ[1].a1U(0), aZQ[0].button.style.color = aF.ce, aZQ[1].button.style.color = aF.ce, aD9(aK.f4.data[157]
								.value)) : aDB(), !0
						})),
						aZQ = (dM.dU(new m8([a1A.button])), [new d7("−", function(i) {
							return vy.i.readOnly && bA.aD.a0f(0) && (aa.ab.h3(i), aDB(), bA.a5O.a8M({
								yl: 2,
								tJ: data.tJ,
								value: dV.dW(parseInt(aK.f4.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new d7("+", function(i) {
							return vy.i.readOnly && bA.aD.a0f(0) && (aa.ab.h3(i), aDB(), bA.a5O.a8M({
								yl: 1,
								tJ: data.tJ,
								value: dV.dW(parseInt(aK.f4.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						aDE = dM.vp(),
						aD9 = function(eH) {
							return eH = aa.al.aHj(eH, 3, 32767), aDE.textContent = L(459, [eH - 1, eH, aK.f4.data[105].value]), eH
						};
					dM.dU(new m8([aZQ[0].button, aZQ[1].button]));
					for (var ak = 0; ak < 2; ak++) aZQ[ak].button.style.fontSize = "1.6em";
					var aDB = function() {
						a1A.button.textContent = L(173), vy.i.readOnly = !1, aZQ[0].a1U(1), aZQ[1].a1U(1), aZQ[0].button.style.color = aF.aG, aZQ[1].button.style.color = aF.aG
					};
					aD9(aK.f4.data[157].value)
				}
				return dM
			}()),
			function(dI) {
				var dM, h1;
				data.aGw && !data.aGp || (0 === fg.id || data.aGw || data.aGp) && ((dM = new dN).dO("Patreon"), !data.aGw && data.aGq ? dM.dU(new m8([new d7(L(183), function() {
					bA.a5O.a8L({
						yl: 7,
						tJ: data.tJ
					}), data.aGq = 0, aC.dT(7)
				}).button])) : data.aGp ? (dM.mF(L(507, [(data.aGr / 100).toFixed(2)]) + "<br>" + L(508, [1 + data.aGs + " / " + data.aGt]) + "<br>" + L(509, [data.aGu ? L(510) : L(511)])), data.aGw || dM.dU(new m8([new d7(L(512),
					function() {
						bA.a5O.a8L({
							yl: 8,
							tJ: data.tJ
						}), data.aGp = 0, aK.aL.aM(160, 0), aC.dT(7)
					}).button]))) : (dM.mF(L(513), "0.75em").style.marginBottom = "0.3em", dM.mF("  • " + L(514), "0.75em").style.whiteSpace = "pre", dM.mF("  • " + L(515), "0.75em").style.whiteSpace = "pre", dM.mF("  • " + L(516),
						"0.75em").style.whiteSpace = "pre", dM.mF(L(517), "0.75em").style.marginTop = "1.0em", dM.mF(L(518), "0.75em").style.marginTop = "1.0em", dM.mF("<a href='" + uY.a8Z +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", h1 = "https://www.patreon.com/oauth2/authorize?state=" + data.tJ +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", dM.mF(L(519), "0.75em").style.marginTop = "1.0em", dM.mF("<a href='" + h1 +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aGw || (dM.dU(new a1M), dM.dU(new m8([new d7(L(401), function() {
						bA.a5O.a8L({
							yl: 6,
							tJ: data.tJ
						}), data.aGq = 1, aC.dT(7)
					}).button])), dM.mF(L(520), "0.75em").style.marginTop = "0.75em")), dI.push(dM))
			}(dI),
			function(dI) {
				var dM, aF1, aZO, aJ, aZP;
				data.aGw || aK.vf.get().length && ((dM = new dN).dO(L(442)), aJ = 0, aZP = function() {
					var a6A = aK.vf.get().length;
					aZO[0].a1U(aJ === a6A ? aF.bs : aF.c3), aZO[1].a1U(aJ === a6A ? aF.bs : aF.cL), aZO[2].a1U(aJ === a6A || a6A - 1 <= aJ || aJ < 5 ? aF.bs : aF.cL)
				}, aZO = [new d7(L(443), function() {
					aC.dT(8, void 0, new hY(25, {
						yl: 0,
						tJ: aK.vf.get()[aJ],
						ym: 0
					}))
				}, aF.bs, 1), new d7(L(444), function() {
					aK.vf.yN(aJ), aF1.aBZ[aJ].remove(), aF1.aBZ.splice(aJ, 1);
					for (var ak = aJ; ak < aF1.aBZ.length; ak++) aF1.aBZ[ak].name = "" + ak;
					aK.vf.get().length && (aJ = Math.max(aJ - 1, 0), aF1.aBZ[aJ].textContent = aF1.aBZ[aJ].textContent.replace("⚪", "🟢")), aZP()
				}, aF.bs, 1), new d7(L(445), function() {
					for (var qc = aF1.aBZ.length - 1; aJ < qc; qc--) aK.vf.yN(qc), aF1.aBZ[qc].remove(), aF1.aBZ.splice(qc, 1);
					aZP()
				}, aF.bs, 1)], aZP(), (aF1 = new dQ(aK.vf.yI(), function(ak) {
					aJ = ak, aZP()
				})).aBZ[0].style.marginTop = "0.5em", dM.dP(aF1), dM.dU(new m8([aZO[0].button])), dM.dU(new m8([aZO[1].button])), dM.dU(new m8([aZO[2].button])), dI.push(dM))
			}(dI), dI
	}())
}

function aAP() {
	var lW, aZU, fS, fQ, a6q, aZV, aZW, yq, canvas, yr, aZX;

	function eO() {
		return Math.floor((a5.fS - fS) / 2) < lE.fQ + 2 * bW.gap ? a5.fQ - fQ - 4 * bW.gap - lE.fQ : a5.fQ - fQ - 2 * bW.gap
	}
	this.aB = function() {
		aZX = lW = !1, a6q = .61, aZV = .07, aZW = .09, yr = yq = fQ = 0
	}, this.resize = function() {
		var fW, b, aT, aZb, aZc, lG;
		lW && (fS = a6s(fS = fg.fh.fi() ? Math.floor(.69 * a5.fj) : Math.floor(.5 * a5.fj), g8(a5.fS - 2 * bW.gap, 10)), fS = a6s(fS, Math.floor(3.57 * g8(a5.fQ - 2 * bW.gap, 3))), fQ = Math.floor(.28 * fS), (canvas = document.createElement(
			"canvas")).width = fS, canvas.height = fQ, fW = canvas.getContext("2d", {
			alpha: !0
		}), b = Math.floor(1 + fQ / 40), fW.clearRect(0, 0, fS, fQ), fW.fillStyle = aF.be, fW.fillRect(b, b, fS - 2 * b, fQ - 2 * b), fW.lineJoin = "bevel", fW.lineWidth = 2 * b, fW.strokeStyle = aF.aG, fW.strokeRect(b, b, fS - 2 * b,
			fQ - 2 * b), fW.imageSmoothingEnabled = !1, aT = i4.get(aZU), aZb = aT.width, lG = (1 === aZU ? .85 : 21 === aZU ? .666 : .9) * a6q * fQ / (aZc = aT.height), fW.setTransform(lG, 0, 0, lG, Math.floor((fS - lG * aZb) / 2), Math
			.floor((fQ - lG * aZc) / 2)), fW.drawImage(aT, 0, 0), fW.setTransform(1, 0, 0, 1, Math.floor(fS - aZW * fQ - aZV * fQ - b), Math.floor(b + aZV * fQ)), function(fW, gz) {
			fW.lineWidth = Math.floor(1 + fQ / 80), fW.strokeStyle = aF.aG, fW.beginPath(), fW.moveTo(0, 0), fW.lineTo(gz, gz), fW.moveTo(0, gz), fW.lineTo(gz, 0), fW.stroke()
		}(fW, Math.floor(aZW * fQ)), fW.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(eH, aZZ, zi, aZa) {
		lW || aZa && aZX || (aZU = zi ? 21 : eH ? 1 : 2, lW = aZX = !0, this.resize(), m.n(), lE.aCD(), yr = j.k, yq = aZZ ? 1 : 0)
	}, this.az = function() {
		!lW || 1 <= yq || (yq = 1 < (yq += 5e-4 * (j.k - yr)) ? 1 : yq, yr = j.k, j.a0 = !0)
	}, this.lP = function(a2, a3) {
		return !(!lW || yq <= 0 || (a2 -= Math.floor((a5.fS - fS) / 2), a3 -= eO(), a2 < 0) || a3 < 0 || fS < a2 || fQ < a3 || (fS - fQ / 3 < a2 && a3 < fQ / 3 && (lW = !1, j.a0 = !0), 0))
	}, this.g9 = function() {
		!lW || yq <= 0 || (gD.globalAlpha = yq, gD.drawImage(canvas, Math.floor((a5.fS - fS) / 2), eO()), gD.globalAlpha = 1)
	}
}

function cz() {
	this.yz = function(size) {
		for (var rx = n7, eB = [], ak = 0; ak < size; ak++) eB.push(String.fromCharCode(rx.s2(16)));
		return eB.join("")
	}, this.aVR = function(bE) {
		return 20 < (bE = bE.trim()).length ? bE.substring(0, 20) : bE
	}
}

function gi(aY, size, yx, aZe, font) {
	var ak, wk = .2,
		canvas = document.createElement("canvas"),
		ac = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = aY, canvas.height = aY, ac.font = size + font, ac.textAlign = "center", ac.textBaseline = "middle", ac.fillStyle = "red", ak = 0; ak < yx.length; ak++) ac.fillText(yx[ak], .5 * aY, .5 * aY);
	return -1 < (canvas = function(ad) {
		var ak, aj, eI = ad.data;
		for (ak = eI.length - 4; 0 <= ak; ak -= 4)
			if (aj = eI[ak], aZe <= aj) return Math.floor(ak / (4 * aY));
		return -1
	}(ac.getImageData(0, 0, aY, aY))) && (wk = (canvas - .5 * aY + .1 * size) / size), Math.max(wk, 0)
}

function aBH() {
	this.aJl = function(hZ, ha, hb) {
		n4.gZ(75), n4.ga(1, 0), n4.ga(6, 21), n4.ga(6, hZ), n4.ga(1, +(ha < 0)), n4.ga(1, +(hb < 0)), n4.ga(30, Math.abs(ha)), n4.ga(30, Math.abs(hb)), bA.aD.send(0, n4.gd)
	}, this.aJm = function(hZ, a1G, a1H) {
		n4.gZ(18 + 16 * a1G.length + 30), n4.ga(1, 0), n4.ga(6, 22), n4.ga(6, hZ), bA.a1k.a1l(a1G), n4.ga(30, a1H), bA.aD.send(0, n4.gd)
	}, this.aJp = function(hZ, a1G, a1H) {
		n4.gZ(73), n4.ga(1, 0), n4.ga(6, 28), n4.ga(6, hZ), iH.cw.a8D(a1G, 5), n4.ga(30, a1H), bA.aD.send(0, n4.gd)
	}, this.aJn = function(aJc, mk) {
		for (var gz = mk.length, yx = 0, ak = 0; ak < gz; ak++) yx += mk[ak].length;
		for (n4.gZ(21 + 3 * gz + 16 * yx), n4.ga(1, 0), n4.ga(6, 23), n4.ga(3, aJc), n4.ga(4, gz), n4.ga(7, yx), ak = 0; ak < gz; ak++) n4.ga(3, mk[ak].length), n9.cy.a8F(mk[ak]);
		bA.aD.send(0, n4.gd)
	}, this.aJo = function(aJc, ha, hb) {
		n4.gZ(52), n4.ga(1, 0), n4.ga(6, 24), n4.ga(3, aJc), n4.ga(1, +(ha < 0)), n4.ga(1, +(hb < 0)), n4.ga(20, Math.abs(ha)), n4.ga(20, Math.abs(hb)), bA.aD.send(0, n4.gd)
	}
}

function aBI() {
	function aZi() {
		var id = n7.s2(3);
		return 0 === id ? {
			id: id,
			tJ: n7.s2(30),
			gP: f7.iC.aZj(iH.d0.rt(7))
		} : 1 === id ? {
			id: id,
			tJ: n7.s2(30),
			tT: n7.s2(3),
			value: n7.s2(30),
			target: n7.s2(30)
		} : 2 === id ? {
			id: id,
			tJ: n7.s2(30),
			tT: n7.s2(3)
		} : 3 === id ? {
			id: id,
			tJ: n7.s2(30),
			tT: n7.s2(3),
			value: n7.s2(4),
			target: n7.s2(30)
		} : 4 === id ? {
			id: id,
			tJ: n7.s2(30),
			tT: n7.s2(3),
			target: n7.s2(30)
		} : 5 === id ? {
			id: id,
			tT: n7.s2(6)
		} : 6 === id ? {
			id: id,
			value: n7.s2(17)
		} : null
	}
	this.xe = function(xW) {
		if (xW !== bA.aD.ho) bA.aD.close(xW, 3239);
		else if (6 !== b6.hy()) bA.aD.close(xW, 3271);
		else {
			f7.aB();
			for (var ak = 0; ak < 4; ak++) {
				var fJ = f7.aD.ez[ak],
					playerCount = (fJ.fF = n7.s2(10), fJ.nd = n7.s2(6), fJ.mapSeed = n7.s2(14), fJ.a43 = n7.s2(4), fJ.a44 = n7.s2(6), fJ.a45 = n7.s2(4), fJ.a4C = n7.s2(1), fJ.fL = n7.s2(12), fJ.spawningSeed = n7.s2(14), n7.s2(16));
				f7.i9.a4A[ak] = n7.s2(16);
				for (var ju = 0; ju < playerCount; ju++) f7.i9.a14(ak, n7.s2(30), iH.d0.rt(5), n7.s2(4), n7.s2(30), n7.s2(7), n7.s2(16), n7.s2(18), n7.s2(11), n7.s2(12))
			}
			aC.dT(29), f7.aD.f5(!0)
		}
	}, this.xr = function(xW) {
		if (xW !== bA.aD.ho) bA.aD.close(xW, 3239);
		else if (f7.iF) {
			f7.aD.f2[0] = n7.s2(20), f7.aD.f2[1] = n7.s2(20);
			for (var aZh = n7.s2(16), ju = 0; ju < aZh; ju++) {
				var id = n7.s2(3);
				0 === id ? f7.i9.a14(n7.s2(2), n7.s2(30), iH.d0.rt(5), 0, 1234566, 127, 0, n7.s2(18), 0, n7.s2(12)) : 1 === id ? f7.i9.aLc(n7.s2(16), n7.s2(2)) : 2 === id ? f7.i9.aLY(n7.s2(16), n7.s2(2), n7.s2(2)) : 3 === id ? f7.i9.aLb(n7.s2(
					16), n7.s2(2)) : 4 === id ? f7.i9.aLU(n7.s2(16), n7.s2(2), n7.s2(4), n7.s2(30), n7.s2(7), n7.s2(16), n7.s2(11)) : 5 === id && f7.i9.aLV(n7.s2(16), n7.s2(2), n7.s2(1))
			}
			for (var ak = 0; ak < 4; ak++) {
				var fJ = f7.aD.ez[ak];
				if (fJ.fF = n7.s2(10), 0 === fJ.fF) {
					if (fJ.bB = n7.s2(10), fJ.hd = n7.s2(10), f7.hz.ts(ak)) return;
					fJ.nd = n7.s2(6), fJ.mapSeed = n7.s2(14), fJ.a43 = n7.s2(4), fJ.a44 = n7.s2(6), fJ.a45 = n7.s2(4), fJ.a4C = n7.s2(1), fJ.fL = n7.s2(12), fJ.spawningSeed = n7.s2(14), fJ.aC2.push(fJ.aC2[0]), fJ.aC2.shift()
				}
			}
			f7.aD.f9()
		} else bA.aD.close(xW, 3251)
	}, this.xs = function(xW) {
		if (xW !== bA.aD.ho) bA.aD.close(xW, 3272);
		else if (f7.iF) {
			for (var fN = n7.s2(4), fJ = f7.aD.ez[fN], a0U = fJ.a0U, aC0 = (fJ.aC1 = n7.s2(20), n7.s2(6)), ak = 0; ak < aC0; ak++) {
				var tS = aZi();
				f7.iD.tR(tS), a0U.push(tS)
			}
			f7.aD.fM(fN)
		} else bA.aD.close(xW, 3273)
	}, this.xt = function(xW) {
		xW !== bA.aD.ho ? bA.aD.close(xW, 3276) : f7.iF ? f7.message.aBP(aZi()) : bA.aD.close(xW, 3277)
	}
}

function aXP() {
	var aZk = null,
		a4R = 2e4,
		aZl = 0;
	this.az = function() {
		j.k < a4R || (a4R = j.k + 1e4, 0 !== fg.id) || aZk || a4T.a4U() || (bA.aD.a0f(0) ? bA.a1k.a5N(5) : a4R = j.k + 1e3)
	}, this.j1 = function(aT) {
		aZk = aT
	}, this.show = function() {
		return !(!aZk || j.k < aZl) && (__fx.settings.hidePropagandaPopup ? void 0 : (aZl = j.k + 6e4, (new aE5).show(aZk.a5H, aZk.colors, aZk.id), !(aZk = null)))
	}
}

function aAM() {
	var aZm, aZn, fS, a2, a3, aZo, aZp;
	this.aB = function() {
		aZm = new Array(2), aZn = new Array(2), this.a51 = !1, aZp = aZo = l6 = l5 = 0, os = 1, this.resize()
	}, this.resize = function() {
		fS = (fS = Math.floor((fg.fh.fi() ? .072 : .0502) * a5.fj)) < 8 ? 8 : fS;
		for (var ak = 1; 0 <= ak; ak--) aZm[ak] = document.createElement("canvas"), aZm[ak].width = fS, aZm[ak].height = fS, aZn[ak] = aZm[ak].getContext("2d", {
			alpha: !0
		});
		this.fo(),
			function() {
				for (var aZy = Math.floor(1 + fS / 20), ak = 1; 0 <= ak; ak--) aZn[ak].clearRect(0, 0, fS, fS), aZn[ak].fillStyle = aF.aH, aZn[ak].beginPath(), aZn[ak].arc(fS / 2, fS / 2, fS / 2 - aZy, 0, 2 * Math.PI), aZn[ak].fill(), aZn[ak]
					.lineWidth = aZy, aZn[ak].fillStyle = aF.aG, aZn[ak].strokeStyle = aF.aG, aZn[ak].beginPath(), aZn[ak].arc(fS / 2, fS / 2, fS / 2 - aZy, 0, 2 * Math.PI), aZn[ak].stroke(), a0E(aZn[ak], 0, 0, fS, aZy, .3, 0 === ak)
			}()
	}, this.eN = function() {
		return -l5 / os
	}, this.eO = function() {
		return -l6 / os
	}, this.a57 = function(aIL, w) {
		l5 = os * aIL - w
	}, this.a58 = function(aIM, x) {
		l6 = os * aIM - x
	}, this.lP = function(aZs, aIn) {
		return p.lZ || ! function(aZs, aIn) {
			return Math.pow(aZs - (a2 + fS / 2), 2) + Math.pow(aIn - (a3 + fS / 2), 2) < fS * fS / 4 || Math.pow(aZs - (a2 + fS / 2), 2) + Math.pow(aIn - (a3 + 2 * fS), 2) < fS * fS / 4
		}(aZs, aIn) || aK.f4.data[8].value ? (r.s() && (this.a51 = !0, aZo = aZs, aZp = aIn), !1) : aIn < a3 + 1.25 * fS ? this.vM(Math.floor(a5.fS / 2), Math.floor(a5.fQ / 2), -200) : this.vM(Math.floor(a5.fS / 2), Math.floor(a5.fQ / 2),
			200)
	}, this.l7 = function(aZs, aIn) {
		var aZt, aZu, aV, aW;
		return !r.s() || (aZt = l5, aZu = l6, l5 += aV = aZo - aZs, l6 += aW = aZp - aIn, j7.l7(aV, aW), this.l8(), aZo = aZs, aZp = aIn, aZt !== l5) || aZu !== l6
	}, this.vM = function(lQ, lR, deltaY) {
		var gp;
		if (r.s()) {
			if (0 < deltaY) gp = (gp = 500 / (500 + deltaY)) < .5 ? .5 : gp;
			else {
				if (!(deltaY < 0)) return !1;
				gp = 2 < (gp = (500 - deltaY) / 500) ? 2 : gp
			}
			this.z(lQ, lR, gp), j.a0 = !0
		}
		return !0
	}, this.z = function(a2, a3, ai) {
		var a6N;
		ai = a6N = (a6N = 1024 < (a6N = ai) * os ? 1024 / os : a6N) * os < .125 ? .125 / os : a6N, j7.zoom(ai, a2, a3),
			function(a6N, lQ, lR) {
				os *= a6N, l5 = (l5 + lQ) * a6N - lQ, l6 = (l6 + lR) * a6N - lR, y.l8()
			}(ai, a2, a3)
	}, this.l8 = function() {
		var aNO = a5.fS / 16,
			aQM = 0,
			aZx = a5.fQ / 16,
			aQN = 0;
		l5 < -a5.fS + aNO && (aQM = -a5.fS + aNO - l5), l5 > os * dx.dy - aNO && (aQM = os * dx.dy - aNO - l5), l6 < -a5.fQ + aZx && (aQN = -a5.fQ + aZx - l6), l6 > os * dx.jK - aZx && (aQN = os * dx.jK - aZx - l6), l5 += aQM, l6 += aQN, ev
		.a2q(), j7.aYP(aQM, aQN)
	}, this.fo = function() {
		a2 = a5.fS - fS - bW.gap, a3 = Math.floor(a5.fQ / 2 - 1.25 * fS)
	}, this.g9 = function() {
		aK.f4.data[8].value || (gD.drawImage(aZm[0], a2, a3), gD.drawImage(aZm[1], a2, Math.floor(a3 + 3 * fS / 2)))
	}
}

function aAS() {
	var uS = 0;
	this.aB = function() {
		a6i.aB(), uS = 0
	}, this.setState = function(aZz) {
		uS = aZz
	}, this.hy = function() {
		return uS
	}, this.b7 = function() {
		this.setState(8), aC.gS()
	}, this.db = function(i) {
		if (!dx.s6) return !1;
		if (!(j.k < 400)) {
			if ("Enter" === i.key || "Escape" === i.key) {
				if (this.aa0()) return !0;
				if ("Enter" === i.key) {
					if (0 === uS) return !0;
					if (7 === uS) return !0
				}
			}
			return !1
		}
	}, this.a6l = function() {
		aA3.resize()
	}, this.aa0 = function() {
		return !!aA3.n()
	}, this.lP = function(a2, a3) {
		!dx.s6 || aA3.lP(a2, a3) || 6 === uS && vs.lP(a2, a3) || a6j.lP(a2, a3) || xy.lP(a2, a3)
	}, this.l7 = function(a2, a3) {
		!xy.a3C && a6i.l7(a2, a3, !0) || xy.l7(a2, a3)
	}, this.click = function(a2, a3) {
		xy.a3N()
	}, this.vM = function(a2, a3, deltaY) {}, this.a6m = function() {
		a6i.a3I(), j.a0 = !0
	}, this.g9 = function() {
		8 !== uS && 10 !== uS && (gD.imageSmoothingEnabled = !0, this.i2(), 0 !== uS && (xy.g9(), a6k.g9(), this.aNQ(), a6j.g9()), 0 !== uS && 6 === uS && vs.g9(), aA3.g9(), aC.g9())
	}, this.i2 = function() {
		var aa2, aa1;
		if (__fx.makeMainMenuTransparent) gD.clearRect(0, 0, a5.fS, a5.fQ);
		else dx.s6 ? (aa1 = a5.fS / dx.dy, aa2 = a5.fQ / dx.jK, gD.setTransform(aa1 = aa2 < aa1 ? aa1 : aa2, 0, 0, aa1, Math.floor((a5.fS - aa1 * dx.dy) / 2), Math.floor((a5.fQ - aa1 * dx.jK) / 2)), gD.drawImage(dx.lm, 0, 0), gD.setTransform(1,
			0, 0, 1, 0, 0), gD.fillStyle = aF.bc) : gD.fillStyle = aF.bZ, gD.fillRect(0, 0, a5.fS, a5.fQ)
	}, this.aNQ = function() {
		var a3 = Math.floor(.3 * a5.fQ),
			canvas = i4.i5("territorial.io"),
			wk = (wk = 1.75 * a5.fQ / canvas.width) * canvas.width < .98 * a5.fS ? .98 * a5.fS / canvas.width : wk,
			a2 = (gD.globalAlpha = .15, gD.imageSmoothingEnabled = !1, Math.floor(.5 * (a5.fS - wk * canvas.width))),
			a2 = Math.floor(a2 / wk),
			a3 = Math.floor(a3 - .5 * canvas.height * wk),
			a3 = Math.floor(a3 / wk);
		gD.setTransform(wk, 0, 0, wk, a2, a3), gD.drawImage(canvas, a2, a3), gD.setTransform(1, 0, 0, 1, 0, 0), gD.globalAlpha = 1, gD.imageSmoothingEnabled = !0
	}
}

function zJ() {
	this.aB = function() {
		this.aV6 = 0, this.mQ = [], this.mc = 0, this.mP = 0
	}, this.a3r = function() {
		var aCn;
		p.lI || (aCn = this, 2 === p.mV ? aCn.mQ = mO.zK.ub() : p.e0 ? aCn.mQ = mO.zK.ue() : aCn.mQ = mO.zK.ug(), aCn.aV6 = a1h.aKm.aV5(), aCn.mc = Math.max(1, mO.zK.uk(aCn.mQ)), q7.al.tc(), 8 === p.mR ? mO.result.mP = 0 : aCn.mP = 100 * mO
			.result.aV6 * (1 + p.aId))
	}
}

function aBF() {
	this.aRZ = function(xW) {
		var aa9;
		n4.gZ(55), n4.ga(1, 0), n4.ga(6, 13), n4.ga(14, gJ.a77), n4.ga(4, fg.id), n4.ga(7, fg.hB), n4.ga(1, +gJ.gb), n4.ga(1, +gJ.gc), n4.ga(5, (new Date).getHours() % 24), aa9 = vn.aEn(), n4.ga(8, aa9[0]), n4.ga(8, aa9[1]), bA.aD.send(xW, n4.gd)
	}, this.a5M = function(xW, n8, a5L, y4) {
		n4.gZ(100), n4.ga(1, 0), n4.ga(6, 14), n4.ga(3, y4), n4.ga(30, n8[0]), n4.ga(30, n8[1]), n4.ga(30, a5L), bA.aD.send(xW, n4.gd)
	}, this.a5K = function(xW, n8) {
		n4.gZ(37), n4.ga(1, 0), n4.ga(6, 30), n4.ga(30, n8), bA.aD.send(xW, n4.gd)
	}, this.a5N = function(id) {
		n4.gZ(13), n4.ga(1, 0), n4.ga(6, 15), n4.ga(6, id), bA.aD.send(0, n4.gd)
	}, this.aNo = function(id, value) {
		n4.gZ(43), n4.ga(1, 0), n4.ga(6, 3), n4.ga(6, id), n4.ga(30, value), bA.aD.send(0, n4.gd)
	}, this.aEm = function(id, bE) {
		var gz = Math.min(bE.length, 63);
		n4.gZ(19 + 16 * gz), n4.ga(1, 0), n4.ga(6, 26), n4.ga(6, id), n4.ga(6, gz), n9.cy.a8F(bE), bA.aD.send(0, n4.gd)
	}, this.aa6 = function(y1, aN) {
		n4.gZ(7 + 26 * aN.length), n4.ga(1, 0), n4.ga(6, 9);
		for (var ak = 0; ak < aN.length; ak++) n4.ga(16, aN[ak][0]), n4.ga(10, aN[ak][1]);
		bA.aD.send(y1, n4.gd)
	}, this.aa7 = function(aa8, nR) {
		n4.gZ(20), n4.ga(1, 0), n4.ga(6, 19), n4.ga(1, aa8), n4.ga(12, nR), bA.aD.send(bA.aD.bB, n4.gd)
	}, this.a1l = function(username) {
		n4.ga(5, username.length), n9.cy.a8F(username)
	}
}

function aBE() {
	this.aRa = !1, this.az = function() {
		j.b2() % 250 != 249 || p.ay || (bA.a1k.aa7(+(this.aRa && fe.gA[p.an]), tq.th + ao.aD.om), this.aRa = !1)
	}
}

function iL() {
	var aaA = null,
		aaB = null,
		aaC = 0,
		aaD = 0,
		aaE = null;

	function aaF() {
		0 !== aaB.t4 && (f7.iB.n(), aC.dT(8, 29, new hY(25, {
			yl: 0,
			tJ: n9.cw.fy(aaB.tJ, 5),
			ym: 0
		}, 29)))
	}

	function aaH() {
		return !f7.i8 || f7.iA.t9(aaB) ? 1 : 0
	}

	function aaG() {
		var a2 = aaA.a2,
			a3 = aaA.a3,
			aaQ = (f7.iB.n(), aaH());
		aaA = new p9([new d7(a0L.kf[5][0], function() {
			aaK(5, 0)
		}, aaQ), new d7(a0L.kf[5][1], function() {
			aaK(5, 1)
		}, aaQ), new d7(a0L.kf[5][2], function() {
			aaK(5, 2)
		}, aaQ), new d7(a0L.kf[5][3], function() {
			aaK(5, 3)
		}, aaQ)]), aaJ(a2, a3), aaD = aaC = 2
	}

	function aaI() {
		29 === aC.b1 && aC.b3().iC(n9.cw.fy(aaB.tJ, 5))
	}

	function aaK(id, value) {
		5 === id && bA.a5O.a8M({
			yl: 3,
			tJ: n9.cw.fy(aaB.tJ, 5),
			value: value
		})
	}

	function aaJ(a2, a3, pI) {
		aaA.show(a2, a3, pI), f7.fH.show(aaA.a2, aaA.a3, aaB, 1)
	}
	this.tB = function(i, aN) {
		aaC = 1, aaB = aN, aaA = new p9([new d7(L(521), aaF, 0 === aN.t4 ? 1 : 0), new d7(L(522), aaG, aaH()), new d7(L(523), aaI, 0)]), aaJ((aaE = {
			clientX: i.clientX,
			clientY: i.clientY
		}).clientX, aaE.clientY, 1)
	}, this.db = function(code) {
		if (29 !== aC.b1) return !1;
		if (!aaB) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.n();
			else if (aa.dZ.startsWith(code, "Numpad") || aa.dZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aaC) this.tB(aaE, aaB);
				else {
					if (!aaA) return !1;
					1 === aaC ? code <= 1 ? aaF() : 2 === code ? aaG() : (aaI(), this.n()) : (aaK(aaD, dV.dW(code - 1, 0, a0L.kf[aaD].length - 1)), this.n())
				}
		}
		return !0
	}, this.n = function() {
		aaC = 0, aaA && aaA.n(), aaA = null, f7.fH.n()
	}
}

function aEY() {
	this.eB = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.w1 = function() {
		for (var aaT = [], eB = this.eB, gz = eB.length, ak = 0; ak < gz; ak++) aaT.push(eB[ak]);
		var a6Q = aK.f4.data[12].aE4;
		for (ak = 0; ak < gz; ak++)
			if (aaT[ak] === a6Q) {
				aaT.splice(ak, 1), gz--;
				break
			} aaT.sort(), gz++, aaT.unshift(a6Q);
		try {
			if ("undefined" == typeof Intl) return aaT;
			for (ak = 0; ak < gz; ak++) {
				var bE = new Intl.DisplayNames([aaT[ak]], {
					type: "language"
				}).of(aaT[ak]);
				bE !== aaT[ak] && (aaT[ak] = aaT[ak] + ": " + bE)
			}
		} catch (i) {
			console.log("error 3646: " + i)
		}
		return aaT
	}, this.w2 = function(aY4) {
		for (var bE = aK.f4.data[12].value, gz = aY4.length, ak = 0; ak < gz; ak++)
			if (bE === aY4[ak].split(":")[0]) return ak;
		return 0
	}, this.a8K = function(aaV) {
		if (aaV && !(aaV.length < 2)) {
			aaV = aaV.split("-")[0].toLowerCase();
			for (var eB = this.eB, gz = eB.length, ak = 0; ak < gz; ak++)
				if (aaV === eB[ak]) return ak
		}
		return -1
	}
}

function aJR() {
	this.lp = function() {
		var aaW = p.data;
		aa.dF.aXY(aaW.teamPlayerCount, aaW.playerCount), aaW.numberTeams = aa.dF.lq(aaW.teamPlayerCount, 0), aaW.teamPlayerCount[0] && aaW.teamPlayerCount[7] && (aaW.teamPlayerCount[7] = 0, this.lp())
	}, this.b9 = function() {
		var aaW = p.data;
		aaW.mapType < 2 ? dx.gZ(dx.lo(aaW), aaW.mapSeed) : dx.aZ2(aaW.canvas)
	}, this.lu = function() {
		var aaW = p.data;
		aaW.colorsData || (aaW.colorsData = new Uint32Array(1)), aaW.selectableColor && (aaW.colorsData[0] = aK.aD.a1n()), aaW.selectableName && (aaW.playerNamesData || (aaW.playerNamesData = new Array(1)), aaW.playerNamesData[0] = aK.f4.data[
			122].value), aaW.nG = new Uint32Array(1), aaW.nG[0] = iH.cw.iI(aK.f4.data[105].value, 5)
	}, this.mI = function() {
		p.data = new aHB, p.data.aIncomeType = 2, p.data.aIncomeData = new Uint8Array(p.dS), p.data.aIncomeData[0] = 64
	}
}

function vc() {
	function aaX(ak, type, aE4, hB) {
		aK.f4.data.push({
			aJ: ak,
			type: type || 0,
			value: aE4 || 0,
			aE4: aE4 || 0,
			hB: hB || 0
		})
	}

	function aaY(ak, type, aE4, hB) {
		aK.f4.data.push({
			aJ: ak,
			type: type,
			value: aE4 || "",
			aE4: aE4 || "",
			hB: hB || 0
		})
	}

	function aaZ(s) {
		for (var ak = aK.f4.data.length; ak < s; ak++) aK.f4.data.push(null)
	}
	this.data = [], this.aB = function() {
		aaX(0, 1, 0, 5), aaX(1, 1, 1), aaX(2, 0), aaY(3, 2), aaX(4, 1), aaY(5, 2, "Trebuchet MS", 1), aaX(6, 0), aaX(7, 0, 0), aaX(8, 0), aaX(9, 1, 1), aaX(10, 1), aaX(11, 1, 1), aaY(12, 2, navigator.language), aaX(13), aaX(14), aaZ(100), aaY(
				100, 2), aaY(101, 2), aaY(102, 2), aaY(103, 2), aaY(104, 2), aaY(105, 2), aaY(106, 2), aaX(107), aaX(108), aaX(109), aaY(110, 2), aaX(111), aaX(112), aaX(113), aaY(114, 2), aaX(115), aaY(116, 2), aaX(117, 1), aaY(118, 2, "", 2),
			aaX(119, 1, 0, 1), aaY(120, 2), aaX(121, 1, ~~(262144 * Math.random())), aaY(122, 2, "Player " + Math.floor(1e3 * Math.random())), aaX(123), aaY(124), aaX(125, 1), aaY(126, 2), aaX(127, 0, 1), aaX(128), aaX(129), aaX(130), aaX(131),
			aaX(132), aaY(133, 2), aaX(134, 0, 5), aaY(135, 2), aaY(136, 2), aaX(137), aaX(138), aaX(139), aaX(140), aaX(141), aaX(142), aaX(143), aaX(144), aaY(145, 2), aaX(146), aaX(147), aaY(148, 2), aaX(149), aaX(150, 0, 1), aaY(151, 2), aaX(
				152, 0, 5), aaX(153, 1), aaX(154, 1), aaY(155, 2), aaY(156, 2), aaX(157), aaX(158), aaX(159), aaX(160), aaY(161, 2), aaX(162, 0, 1024), aaY(163, 2, "0,0,0"), aaY(164, 2, "100,100,100"), aaY(165, 2, "30,30,30"), aaY(166, 2,
				"70,70,70"), aaY(167, 2, "100,100,100"), aaY(168, 2, "85,85,85"), aaY(169, 2, "100,100,100");
		for (var ak = 0; ak < 4; ak++) aaY(170 + ak, 2, "255,255,255");
		aaY(174, 2), aaY(175, 2), aaX(176, 0, 200), aaZ(180), aaX(180, 0), aaX(181, 0)
	}, this.aM = function(aJ, value) {
		this.data[aJ].value = value
	}, this.uR = function(aJ, value) {
		this.aM(aJ, value);
		var value = String(value),
			gz = value.length;
		5e4 < gz ? console.log("storage value too large: index " + aJ + " size " + gz) : (aK.dd.save(aJ, value), aK.dd.save(aJ, String(this.data[aJ].hB), !0))
	}, this.uP = function(aJ) {
		return Number(this.data[aJ].value)
	}, this.aaa = function(aJ) {
		return String(this.data[aJ].value)
	}
}

function aAy() {
	this.a6h = new a69, this.aB = function() {
		this.a6h.resize()
	}
}

function aJt(data) {
	var hT, aab, aac, v8, aad, aae, aaf, colors, aag, aah, aai = 0,
		aaj = 0,
		aak = !1,
		aal = !1,
		aam = [1, 5, 60, 240, 1440, 10080, 43200];

	function abB(lQ, lR) {
		! function(lQ, lR) {
			return aab < lQ && lQ < aab + v8 && aac < lR && lR < aac + aad
		}(aai = lQ, aaj = lR) ? (aak && (j.a0 = !0), aak = !1) : (aak = !0, j.a0 = !0)
	}
	this.show = function() {
		aal = aK.f4.data[127].value, hT.show(), this.resize()
	}, this.n = function() {
		hT.n()
	}, this.resize = function() {
		hT.resize();
		var aT = a5.a6,
			ij = hT.ib(),
			aat = aT * ij.ih,
			aT = aT * ij.ic;
		aae = aa.ab.gr(.06), aaf = aa.ab.gr(.04), aab = aa.ab.gr(.06), aac = aT + aae, v8 = a5.fS - aab - aaf, aad = aat + aT - aac - aaf
	}, this.g9 = function() {
		hT.g9(),
			function() {
				var ak, z4, jl, a2, ju, eB = data.data,
					aaw = 1,
					aax = .125,
					aay = aal ? 65536 : 0;
				for (ak = 0; ak < eB.length; ak++)
					for (z4 = eB[ak].z4, jl = z4.length, aaw = Math.max(jl, aaw), ju = 0; ju < jl; ju++) aax = Math.max(z4[ju], aax), aay = Math.min(z4[ju], aay);
				var c = aac + aad,
					kU = aad / (aax - aay),
					kT = 1 / (aaw - 1);
				for (gD.lineWidth = bW.lg, ak = 0; ak < eB.length; ak++) {
					for (z4 = eB[ak].z4, jl = z4.length, a2 = aab, gD.beginPath(), gD.moveTo(a2 + v8, c - kU * (z4[jl - 1] - aay)), ju = jl - 2; 0 <= ju; ju--) gD.lineTo(a2 + kT * ju * v8, c - kU * (z4[ju] - aay));
					gD.strokeStyle = colors[ak], gD.stroke()
				}(function(aay, aax, c, kU) {
					gD.font = aa.ab.fk(0, .25 * aab), aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 2), gD.fillStyle = colors[0];
					for (var a2 = .92 * aab, ak = 0; ak < 3; ak++) {
						var eH = aay + ak * (aax - aay) / 2;
						gD.fillText((eH / 1e3).toFixed(3), a2, c - kU * (eH - aay))
					}
				})(aay, aax, c, kU),
				function(aaw) {
					var a3 = aac + aad + .15 * aaf;
					gD.font = aa.ab.fk(0, Math.min(.4 * aaf, .028 * a5.fS)), aa.ab.textBaseline(gD, 0), aa.ab.textAlign(gD, 2), gD.fillStyle = colors[0], gD.fillText(aa.aF6.aRQ(aag), aab + v8, a3), aa.ab.textAlign(gD, 0), gD.fillText(aa.aF6.aRQ(
						new Date(aah.getTime() - 6e4 * (aaw - 1) * aam[data.aJc])), aab, a3)
				}(aaw),
				function(aaw, aay, aax) {
					if (aak && !(aaw < 2)) {
						for (var a6B, aJ = (aai - aab) / v8 * (aaw - 1), ab1 = Math.floor(aJ), ab2 = Math.floor(1 + aJ), ab3 = aJ - ab1, ab4 = 1e5, r9 = -1, ab5 = -1, ab6 = aax - (aax - aay) * (aaj - aac) / aad, eB = data.data, ak = 0; ak < eB
							.length; ak++) {
							var a6Q, z4 = eB[ak].z4;
							z4.length <= ab2 || (z4 = z4[ab1] + ab3 * (z4[ab2] - z4[ab1]), (a6Q = Math.abs(ab6 - z4)) < ab4 && (ab4 = a6Q, r9 = ak, ab5 = z4))
						} - 1 !== r9 && (aax = aac + aad - (ab5 - aay) / (aax - aay) * aad, gD.lineWidth = .5 * bW.lg, gD.strokeStyle = colors[r9], gD.beginPath(), gD.moveTo(aab, aax), gD.lineTo(aai, aax), gD.lineTo(aai, aac + aad), gD.stroke(),
							gD.beginPath(), gD.arc(aai, aax, .1 * aab, 0, 2 * Math.PI), gD.fillStyle = colors[r9], gD.fill(), aay = aac + aad + .15 * aaf, aa.ab.textAlign(gD, 1), a6B = aaw - 2 < aJ ? (a6B = aah.getTime() - 6e4 * aam[data
								.aJc], new Date(a6B + (aJ - (aaw - 2)) * (aag.getTime() - a6B))) : new Date(aah.getTime() - 6e4 * (aaw - aJ - 1) * aam[data.aJc]), aaw = aa.aF6.aRQ(a6B), aJ = aa.ab.measureText(aaw), a6B = dV.dW(aai, aab + .5 *
								aJ, aab + v8 - .5 * aJ), gD.fillStyle = aa.color.ba(70, 50, 20), gD.fillRect(a6B - .52 * aJ, aac + aad, 1.04 * aJ, .55 * aaf), gD.fillStyle = colors[0], gD.fillText(aaw, a6B, aay), gD.font = aa.ab.fk(0, .25 *
								aab), aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 2), a6B = .92 * aab, aaw = (ab5 / 1e3).toFixed(3), aJ = aa.ab.measureText(aaw), aay = a6B - 1.04 * aJ, gD.fillStyle = aa.color.ba(70, 50, 20), gD.fillRect(
								aay, aax - .1625 * aab, aab - aay, .275 * aab), gD.fillStyle = colors[r9], gD.fillText(aaw, a6B, aax))
					}
				}(aaw, aay, aax)
			}(), gD.lineWidth = bW.lg, gD.strokeStyle = aF.aG, gD.beginPath(), gD.moveTo(aab, aac), gD.lineTo(aab, aac + aad), gD.lineTo(aab + v8, aac + aad), gD.stroke();
		var ak, fontSize = .5 * aae,
			eB = (gD.font = aa.ab.fk(0, fontSize), aa.ab.textBaseline(gD, 1), aa.ab.textAlign(gD, 0), data.data),
			gz = eB.length,
			a3 = aac - .5 * aae,
			bE = "";
		for (ak = 0; ak < gz; ak++) bE += eB[ak].name + "  ";
		bE = bE.trim();
		var aWv = aa.ab.measureText(bE),
			a2 = .5 * (a5.fS - aWv);
		for (aWv > a5.fS && (a2 = 0, gD.font = aa.ab.fk(0, a5.fS / aWv * fontSize)), ak = 0; ak < gz; ak++) gD.fillStyle = colors[ak], gD.fillText(eB[ak].name, a2, a3), a2 += aa.ab.measureText(eB[ak].name + "  ")
	}, this.lP = function(lQ, lR) {
		abB(lQ, lR)
	}, this.l7 = function(lQ, lR) {
		abB(lQ, lR)
	}, this.db = function(aT) {
		2 === aT && hT.dc[0].dd()
	};
	var ak, h4, aRO, qc, eI = data.data,
		gz = eI.length,
		max = 1;
	for (ak = 0; ak < gz; ak++) max = Math.max(max, eI[ak].z4.length);
	for (ak = 0; ak < gz; ak++)
		for (; eI[ak].z4.length < max;) eI[ak].z4.unshift(0);
	h4 = new Date, aRO = 6e4 * h4.getTimezoneOffset(), qc = h4.getTime() - aRO, aag = new Date(qc), 6 === data.aJc ? function(h4, aRO) {
		var aas = h4.getUTCFullYear(),
			h4 = h4.getUTCMonth() + 1;
		aah = h4 < 12 ? new Date(Date.UTC(aas, h4) - aRO) : new Date(Date.UTC(aas + 1, 0) - aRO)
	}(h4, aRO) : (aRO = 6e4 * aam[data.aJc], aah = data.aJc <= 4 ? new Date(qc + aRO - h4.getTime() % aRO) : new Date(qc + aRO - (h4.getTime() + 2592e5) % aRO)), qc = aa.color, colors = [aF.aG, qc.ba(255, 0, 0), qc.ba(0, 200, 0), qc.ba(80, 80,
		255), qc.ba(255, 255, 0), qc.ba(255, 0, 255), qc.ba(0, 255, 255), qc.ba(255, 140, 0), qc.ba(128, 128, 128), qc.ba(0, 255, 140)], hT = new d6(L(524) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aJc] + ", " + aa.aF6.aRN(aag), [
		new d7("⬅️ " + L(1), function() {
			aC.dT(1)
		}), new d7(L(135), function() {
			aC.dT(14)
		})
	], !1)
}

function aF4() {
	this.aFv = function(bE, font, maxWidth) {
		if (font && (gD.font = font), gD.measureText(bE).width <= maxWidth) return bE;
		for (var ak = bE.length - 1; 1 <= ak; ak--)
			if (bE = bE.substring(0, ak), gD.measureText(bE + "...").width <= maxWidth) return bE + "...";
		return "..."
	}
}

function kp() {
	var abD = new Uint8Array(64);
	this.aB = function() {
		var ak;
		for (abD[0] = 45, abD[37] = 95, ak = 0; ak < 10; ak++) abD[ak + 1] = 48 + ak;
		for (ak = 0; ak < 26; ak++) abD[ak + 11] = 65 + ak, abD[ak + 38] = 97 + ak
	}, this.nB = function(n3) {
		for (var rx = n7, aJN = new Uint8Array(n3), ak = 0; ak < n3; ak++) aJN[ak] = rx.s2(6);
		return aJN
	}, this.nA = function(aJN) {
		for (var gz = aJN.length, abE = abD, eB = [], ak = 0; ak < gz; ak++) eB.push(String.fromCharCode(abE[aJN[ak]]));
		return eB.join("")
	}, this.fy = function(value, abF) {
		for (var abE = abD, eB = [], ak = 0; ak < abF; ak++) eB.push(String.fromCharCode(abE[value >> 6 * (abF - 1 - ak) & 63]));
		return eB.join("")
	}
}

function zO() {
	this.a3r = function() {
		if (2 === p.mV) p.mi = 2;
		else {
			if (8 === p.mR) aa.al.is(0) || 0 === fe.gA[0] ? p.td = 1 : aa.al.is(1) || 0 === fe.gA[1] ? p.td = 0 : p.td = +(fe.jQ[1] > fe.jQ[0]);
			else {
				if (p.e0) {
					var a71 = uh.aVC();
					if (p.uf = a71, eL.jk[a71]) return void(p.mi = +(eL.jd[p.an] === a71))
				}
				p.td = re[0]
			}
			p.mi = +(p.td === p.an)
		}
	}
}

function aAt() {
	this.a77 = 1116, this.gL = 2145, this.rVersion = 16, this.a0m = 0, this.aB = function() {
		this.a0o = 2;
		var h4 = dV.eF(this.gL, 10) % 100;
		this.hB = "6 Dec 2025 [" + dV.eF(this.gL, 1e3) + "." + (h4 < 10 ? "0" : "") + h4 + "." + this.gL % 10 + "]", this.gb = true, this.gc = function() {
			try {
				return window.self !== window.top
			} catch (i) {
				return !0
			}
		}(), this.a1j = (new Date).getTime() % 1048576
	}, this.gK = 0
}

function aAL() {
	var fS, a2, abJ, canvas, fW, lW, a7A, xL, fR, fX, abK = 11 / 12;

	function abL() {
		var a39 = Math.floor(a7A * (fS - 2 * abJ)),
			abN = 1 + Math.floor(.0625 * lE.fQ),
			abO = 1 + Math.floor(.3 * lE.fQ),
			a6q = Math.floor(.55 * lE.fQ);
		fW.clearRect(0, 0, fS, lE.fQ), fW.fillStyle = aF.bd, fW.fillRect(0, 0, abJ, lE.fQ), fW.fillRect(abJ + a39, 0, fS - abJ - a39, lE.fQ), fW.fillStyle = a7A < 1 / 3 ? "rgba(" + Math.floor(3 * a7A * 130) + ",130,0,0.85)" : a7A < 2 / 3 ?
			"rgba(130," + (130 - Math.floor(3 * (a7A - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (a7A - 2 / 3) * 130) + ",0.85)", fW.fillRect(abJ, 0, a39, lE.fQ), fW.fillStyle = aF.aG, fW.fillRect(0, 0, fS, 1), fW.fillRect(0, lE
				.fQ - 1, fS, 1), fW.fillRect(0, 0, 1, lE.fQ), fW.fillRect(abJ, 0, 1, lE.fQ), fW.fillRect(abJ + a39, 0, 1, lE.fQ), fW.fillRect(fS - abJ, 0, 1, lE.fQ), fW.fillRect(fS - 1, 0, 1, lE.fQ), fW.fillRect(Math.floor(.25 * lE.fQ) + abO, Math
				.floor((lE.fQ - abN) / 2), lE.fQ - 2 * abO, abN), fW.fillRect(Math.floor(fS - 1.25 * lE.fQ) + abO, Math.floor((lE.fQ - abN) / 2), lE.fQ - 2 * abO - abO % 2, abN), fW.fillRect(Math.floor(fS - 1.25 * lE.fQ) + Math.floor((lE.fQ - abN) /
				2), abO, abN, lE.fQ - 2 * abO - abO % 2), xL = aa.al.aFV(p.an, lE.qF()), fW.fillText(aa.dZ.fy(xL) + " (" + aa.dZ.a5d(100 * a7A, +(a7A < .1)) + ")", Math.floor(.5 * fS), a6q)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		a7A = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => lE.a9p(arg1);

	function abS(a6N) {
		return !(1 < a6N && 1 === a7A || (1 < a6N && a6N * a7A - a7A < 1 / 1024 ? a6N = (a7A + 1 / 1024) / a7A : a6N < 1 && a7A - a6N * a7A < 1 / 1024 && (a6N = (a7A - 1 / 1024) / a7A), a7A = dV.dW(a7A * a6N, 1 / 1024, 1), abL(), 0))
	}

	function abT(lQ) {
		return a7A !== (a7A = dV.dW((lQ - a2 - abJ) / (fS - 2 * abJ), 1 / 1024, 1)) && (abL(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		abL(), j.a0 = !0
	}, this.a3 = 0, this.ps = !1, this.aB = function() {
		lW = !p.gB && !p.ay, fX = !1, a7A = .5, xL = 0, this.ps = !1, this.resize()
	}, this.resize = function() {
		fg.fh.fi() && a5.fS < .8 * a5.fQ ? (this.fQ = Math.floor(.066 * a5.fj), fS = a5.fS - 4 * bW.gap - this.fQ) : (fS = Math.floor((fg.fh.fi() ? .65 : .389) * a5.fj), fS += 12 - fS % 12, this.fQ = Math.floor(fS / 12)), abJ = Math.floor(3 *
			this.fQ / 2), fR = aa.ab.fk(1, Math.floor(.5 * this.fQ)), (canvas = document.createElement("canvas")).width = fS, __fx.mobileKeybinds.setSize(fS, this.fQ, gD), canvas.height = this.fQ, (fW = canvas.getContext("2d", {
			alpha: !0
		})).font = fR, aa.ab.textBaseline(fW, 1), aa.ab.textAlign(fW, 1), this.fo(), abL()
	}, this.fo = function() {
		a2 = fg.fh.fi() && a5.fS < .8 * a5.fQ ? this.fQ + 3 * bW.gap : Math.floor((a5.fS - fS) / 2), this.a3 = a5.fQ - this.fQ - aA4.aCY() * bW.gap
	}, this.fs = function() {
		fX && (fX = !1, abL())
	}, this.lW = function() {
		return !(!lW || lU.lD && a2 < Math.floor(bW.gap + 5.5 * this.fQ))
	}, this.aCV = function(aFD) {
		return !!this.lW() && a2 + fS > a5.fS - aFD - bW.gap
	}, this.aRJ = function() {
		lW = !p.ay
	}, this.aCD = function() {
		lW = !1
	}, this.qF = function() {
		return dV.dW(Math.floor(1024 * a7A + .5) - 1, 0, 1023)
	}, this.vL = function(lQ, lR) {
		return this.lW() && a2 < lQ && lQ < a2 + fS && lR > this.a3
	}, this.lP = function(lQ, lR) {
		if (!this.lW()) return !1;
		if (!(__fx.settings.keybindButtons && lR > this.a3 - Math.floor(bW.gap / 4) - this.fQ && lR < this.a3 - Math.floor(bW.gap / 4) && __fx.mobileKeybinds.click(lQ - a2))) {
			if (!lE.vL(lQ, lR)) return !1;
			y.a51 = !1, ! function(aCn, lQ, lR) {
				if (function(lQ, lR) {
						return a2 < lQ && lQ < a2 + abJ && lR > lE.a3
					}(lQ, lR)) return abS(abK);
				if (function(lQ, lR) {
						return a2 + fS - abJ < lQ && lQ < a2 + fS && lR > lE.a3
					}(lQ, lR)) return abS(1 / abK);
				return aCn.ps = !0, abT(lQ)
			}(this, lQ, lR) || (j.a0 = !0)
		}
		return !0
	}, this.a9p = function(gp) {
		0 !== p.q && this.lW() && abS(gp) && (j.a0 = !0)
	}, this.vM = function(deltaY) {
		var gp;
		return !(0 === deltaY || !this.lW()) && abS(gp = 0 < deltaY ? (gp = 400 / (400 + deltaY)) < abK ? abK : gp : 1 / abK < (gp = (400 - deltaY) / 400) ? 1 / abK : gp)
	}, this.l7 = function(lQ) {
		return !!this.ps && abT(lQ)
	}, this.a9l = function() {
		this.ps = !1
	}, this.az = function() {
		this.lW() && xL !== aa.al.aFV(p.an, this.qF()) && (fX = !0)
	}, this.g9 = function() {
		this.lW() && (gD.drawImage(canvas, a2, this.a3), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(gD, a2, this.a3)
	}
}

function dX(abU, abV, abW, abX) {
	var um = document.createElement("textarea"),
		abY = (this.i = um, !0);

	function abZ() {
		um.select(), document.execCommand("copy")
	}
	this.resize = function() {
			abV && aa.ab.bU(um, 5)
		}, this.dY = function(a5H) {
			um.value = a5H
		}, this.dH = function() {
			return um.value
		}, this.uo = function() {
			um.select()
		}, this.clear = function() {
			um.value = ""
		}, this.up = function() {
			abY && navigator.clipboard ? (um.select(), navigator.clipboard.writeText(um.value).catch(function() {
				abY = !1, abZ()
			})) : abZ()
		}, um.setAttribute("id", "textArea" + aC.aD.aE++), um.setAttribute("autocomplete", "off"), abU && um.setAttribute("placeholder", abU), um.style.top = "0", um.style.left = "0", um.style.width = "100%", um.style.height = "100%", um.style
		.userSelect = "none", um.style.outline = "none", um.style.resize = "none", um.style.border = "none", um.style.color = aF.aG, um.style.backgroundColor = aF.aH, abX ? (um.style.fontSize = "1em", um.rows = 6, um.style.padding = "0.25em") : (um
			.style.padding = "0.45em", um.style.fontSize = "1.2em"), abW && um.addEventListener("input", function(i) {
			abW(i)
		}), um.addEventListener("focus", function() {
			a5.aI++
		}), um.addEventListener("blur", function() {
			a5.aI--
		})
}

function aAZ() {
	this.mj = new Array(p.dS), this.mb = new Array(p.dS), this.gC = new Uint8Array(p.dS), this.gA = new Uint8Array(p.dS), this.je = new Uint16Array(p.dS), this.jf = new Uint16Array(p.dS), this.jg = new Uint16Array(p.dS), this.jh = new Uint16Array(p
			.dS), this.jQ = new Uint32Array(p.dS), this.k7 = new Uint32Array(p.dS), this.ff = new Uint32Array(p.dS), this.kO = null, this.k8 = null, this.k9 = null, this.kA = null, this.aKa = new Uint16Array(p.dS), this.a2P = new Uint16Array(p.dS),
		this.a2Q = new Uint16Array(p.dS), this.te = new Uint16Array(p.dS), this.tp = new Uint8Array(p.dS), this.g7 = new Uint16Array(p.dS), this.aB = function() {
			this.mj.fill(""), this.mb.fill(""), this.gC.fill(0), this.gA.fill(0), this.je.fill(0), this.jf.fill(0), this.jg.fill(0), this.jh.fill(0), this.jQ.fill(0), this.k7.fill(0), this.ff.fill(0), this.kO = new Array(p.dS), this.k8 = new Array(p
				.dS), this.k9 = new Array(p.dS), this.kA = new Array(p.dS), this.aKa.fill(0), this.a2P.fill(0), this.a2Q.fill(0), this.te.fill(0), this.tp.fill(0), this.g7.fill(0)
		}
}

function iO() {
	var aba = 0,
		abb = "",
		abc = 0,
		abd = 0,
		abe = 0;

	function a3n(p0) {
		bA.a3v.a1o(3, p0)
	}

	function abo(jl) {
		aba = 1, f7.message.aBP({
			id: 6,
			value: jl
		})
	}

	function abi(gP) {
		var abr = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return gP.match(abr)
	}
	this.a3r = function(gP) {
		var abf, eB, abk;
		if (aba) return aba = 0, "yes" === (abf = gP.toLowerCase()) || "y" === abf ? void a3n(abb) : void f7.message.aBP({
			id: 5,
			tT: 7
		});
		!(gP.indexOf("@") < 0) && (abf = abi(gP)) ? (abb = gP, eB = function(abh) {
			for (var gz = abh.length, abq = [0, 0, 0, 0], ak = 0; ak < gz; ak++)
				for (var fS = abh[ak], ju = 0; ju < 4; ju++) fS === "@room" + (ju + 1) && (abq[ju] = 1);
			if ((abd = aa.dF.a1K(abq)) % 4 == 0) return aa.dF.aXZ(f7.i9.a0N);
			for (ju = 0; ju < 4; ju++) abq[ju] = abq[ju] ? f7.i9.a0N[ju] : [];
			return aa.dF.aXZ(abq)
		}(abf), function(abh, abk, gP) {
			if (!abc) return;
			for (var gz = abk.length, ak = 0; ak < gz; ak++) 2 === abk[ak].id && (gP = gP.replace(abh[abk[ak].aJ], "@" + abk[ak].eH));
			return aba = 1, a3n((abb = gP).slice(0, 126) + "|"), 1
		}(abf, abk = function(abh) {
			for (var abk = [], gz = (abe = abc = 0, abh.length), ak = 0; ak < gz; ak++) {
				var fS = abh[ak],
					af = fS.length;
				aa.dZ.startsWith(fS, "@[") ? af <= 9 && aa.dZ.h5(fS, "]") && abk.push({
					id: 0,
					eH: fS.substring(2, af - 1).toUpperCase()
				}) : 6 === af ? aa.dZ.startsWith(fS, "@room") || (abe++, abk.push({
					id: 1,
					eH: iH.cw.iI(fS.substring(1), 5)
				})) : 1 < af && af < 5 && 0 <= (af = vn.data.a8K(fS.substring(1))) && (abk.push({
					id: 2,
					eH: af,
					aJ: ak
				}), abc = 1)
			}
			return abk
		}(abf), gP) || (0 === abk.length ? abd || function(abh) {
			for (var gz = abh.length, ak = 0; ak < gz; ak++) {
				var fS = abh[ak];
				if ("@all" === fS || "@everyone" === fS) return 1
			}
			return
		}(abf) ? abo(eB.length) : a3n(gP) : abf.length === abe ? a3n(gP) : (function(eB, abk) {
			var af = abk.length;
			if (0 === af) return;
			var gz = eB.length;
			loop: for (var ak = gz - 1; 0 <= ak; ak--) {
				for (var ju = 0; ju < af; ju++)
					if (0 === abk[ju].id) {
						if (abk[ju].eH === aa.dZ.mm(eB[ak].username)) continue loop
					} else if (1 === abk[ju].id && abk[ju].eH === eB[ak].tJ) continue loop;
				eB[ak] = eB[--gz], eB.pop()
			}
		}(eB, abk), abo(eB.length)))) : a3n(gP)
	}, this.aZj = function(gP) {
		var abh = abi(gP);
		if (abh)
			for (var gX = new RegExp("^[0-9]+$"), gz = abh.length, ak = 0; ak < gz; ak++) {
				var fS = abh[ak].substring(1),
					af = fS.length;
				1 <= af && af <= 3 && gX.test(fS) && (af = parseInt(fS, 10), !isNaN(af)) && 0 <= af && af < vn.data.eB.length && (gP = gP.replace("@" + fS, "@" + vn.data.eB[af]))
			}
		return gP
	}
}

function aB7() {
	function aTD(a2, gz, a3, zH, a31, za) {
		if (!(a3 < 1 || a31 < a3))
			for (var ak = 0; ak <= gz; ak++) {
				var ai = pv.aFW(a2, a3);
				if (zH(ai)) return ai >> 2;
				a2 += za
			}
		return -1
	}

	function aTH(a3, gz, a2, zH, aTB, za) {
		if (!(a2 < 1 || aTB < a2)) {
			gz = Math.max(gz, 0);
			for (var ak = 0; ak <= gz; ak++) {
				var ai = pv.aFW(a2, a3);
				if (zH(ai)) return ai >> 2;
				a3 += za
			}
		}
		return -1
	}

	function aTL(qs, qj, a86) {
		return -1 !== qj && (-1 === qs || pv.qw(qj, a86) < pv.qw(qs, a86)) ? qj : qs
	}
	this.q6 = function(a86) {
		return this.a3r(a86, function(ai) {
			return eu.ef(ai)
		})
	}, this.qG = function(a86) {
		return this.a3r(a86, function(ai) {
			return eu.eV(ai, p.an)
		})
	}, this.a3r = function(a86, zH) {
		return function(a86, rW, zH) {
			for (var pu = pv.qn(a86), px = pv.qp(a86), aTB = dx.dy - 2, a31 = dx.jK - 2, aTC = -1, eI = 0; eI < rW; eI++) {
				var a30 = Math.max(pu - eI, 1),
					aR6 = Math.max(px - eI, 1),
					kM = Math.min(pu + eI, aTB),
					kL = Math.min(px + eI, a31),
					qs = aTD(pu, kM - pu, px - eI, zH, a31, 1),
					qj = aTD(pu - 1, pu - a30 - 1, px - eI, zH, a31, -1),
					kM = aTD(pu, kM - pu, px + eI, zH, a31, 1),
					a30 = aTD(pu - 1, pu - a30 - 1, px + eI, zH, a31, -1),
					aTG = aTH(px, kL - px - 1, pu - eI, zH, aTB, 1),
					aTI = aTH(px - 1, px - aR6 - 2, pu - eI, zH, aTB, -1),
					kL = aTH(px, kL - px - 1, pu + eI, zH, aTB, 1),
					aR6 = aTH(px - 1, px - aR6 - 2, pu + eI, zH, aTB, -1);
				if (aTC = aTL(aTC, qs, a86), aTC = aTL(aTC, qj, a86), aTC = aTL(aTC, kM, a86), aTC = aTL(aTC, a30, a86), aTC = aTL(aTC, aTG, a86), aTC = aTL(aTC, aTI, a86), aTC = aTL(aTC, kL, a86), 0 <= (aTC = aTL(aTC, aR6, a86)) && eI *
					eI >= pv.qw(aTC, a86)) return aTC
			}
			return -1
		}(a86, pv.aFT(), zH)
	}
}
gE(), self.aiCommand746 = function(eH) {
	0 === eH ? aA6() : 1 !== eH || !fg || 1 !== fg.id || fg.hB < 14 || tC.a9q()
}, setTimeout(aA6, 1e4), window.onload = function() {
	aA6()
};