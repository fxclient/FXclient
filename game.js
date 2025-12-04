var ov, aa, mn, zN, zO, hs, b4, e8, m4, a1g, dD, aIy, aIz, aM0, p9, aC, d8, p5, p8, aO, c7, cM, p4, p7, p6, bQ, pB, p1, p3, iY, nj, dw, m0, mD, dl, b2, aP3, aIv, dY, a12, fG, aG7, mJ, mF, f2, kW, r3, aIX, qo, aIZ, d3, o2, y, kI, a3w, fz, aFx, fD,
	a15, aJ4, aFs, aAU, oi, dB, jo, aP, ab, aD, hn, i4, fj, gL, jQ, aEX, qr, uC, aA, dH, eF, mK, zC, aNm, a0z, ev, qv, fZ, aIg, aCz, p0, r2, p2, aP4, a6y, l9, a3, aM, pA, aF, e4, pC, a0, ho, gH, c0, aM6, aNj, xV, fd, fc, aGV, dW, aG3, lb, aA4, aA3,
	aA5, aAL, aAJ, a9t, aA6, aUw, aAO, aUx, aUy, aUz, aA2, aIY, a8N, aJ1, aJ2, s1, pd, a5L, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden",
		"1em", "span", "Data", "0.5em", " / ", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "' target='_blank'>", "undefined", "pre",
		"break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave",
		"inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "wheel", "translate(-50%, -50%)",
		"top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ",
		"https://", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "False Reporter",
		"Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room", "<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>",
		"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "255,255,255", "1v1", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ",
		" / 180", " / 160", " -> "
	];

function a() {
	this.b = 0, this.c = 0, this.d = 0, this.e = 0, this.f = 0, this.g = 0, this.h = 0, this.i = 0;
	var k = this.j = 0;
	this.l = 0, this.m = 0, this.n = 0, this.o = 0, this.p = 0, this.q = null, this.r = !1, this.s = -1, this.t = !1, this.u = [0, 0], this.v = function() {
		this.q = [L(0), L(1, 0, "Balance"), L(2, 0, "Interest"), L(3)]
	}, this.w = function() {
		this.r = !1, this.s = -1, this.t = !1, this.resize()
	}, this.resize = function() {
		var x = 1.369,
			z = (this.b = y.b < x * y.c ? y.b : y.c * x, a0.a1.a2() && y.b < y.c ? 1 : a0.a1.a2() ? .8 : y.b < y.c ? .65 : .59);
		this.b = Math.floor(z * this.b), this.b -= a0.a1.a2() && y.b < y.c ? 2 * a3.gap + 2 : 0, this.c = Math.floor(this.b / x), this.o = Math.floor(this.c / 150), this.o = Math.max(this.o, 1.5), this.d = Math.floor(1 + .02 * this.b), this.e =
			Math.floor(1 + .04 * this.b), this.h = this.e, k = Math.floor(.75 * this.h), this.i = Math.floor(1 + .075 * this.b), this.l = Math.floor(1 + .1125 * this.b), this.m = Math.floor(this.b * (a0.a1.a2() ? .03 : .029)), this.m = Math.max(
				this.m, 4), this.n = Math.floor(.035 * this.b), this.n = Math.max(this.n, 4), this.j = this.c - 2 * this.h - this.i - this.l, this.r && this.a4()
	}, this.a5 = function(a6, a7) {
		var a9, a8;
		return !!this.r && (a8 = a6, a9 = a7, a6 -= aA.aB(y.b - this.b, 2), a7 -= aA.aB(y.c - this.c, 2), a6 < 0 || a7 < 0 || a6 >= this.b || a7 >= this.c || a6 >= this.b - this.l && a7 < this.l ? -1 !== aC.a5(a8, a9) || aD.a5(a8, a9) || this
		.aE() : a7 < this.l || (a7 < this.c - this.i ? (this.t = !0, this.s = (a6 - 2 * this.d - this.f) / this.g, 3 !== this.p && (aF.aG = !0)) : (a8 = (a8 = Math.floor(a6 / (this.b / this.q.length))) < 0 ? 0 : a8 >= this.q.length ? this
			.q.length - 1 : a8) !== this.p && (this.p = a8, this.a4(), aF.aG = !0)), !0)
	}, this.aI = function(a6, a7) {
		return this.u[0] = a6, this.u[1] = a7, !(!this.r || !this.t || (a6 -= aA.aB(y.b - this.b, 2), a7 = this.s, this.s = (a6 - 2 * this.d - this.f) / this.g, (0 <= this.s && this.s <= 1 || 0 <= a7 && a7 <= 1) && (aF.aG = !0), 0))
	}, this.aK = function() {
		this.t && (this.t = !1)
	}, this.aL = function() {
		this.r ? this.aE() : this.show()
	}, this.show = function() {
		aM.aN < 2 || (this.r = !0, this.a4())
	}, this.aE = function() {
		this.r = !1, this.s = -1, aF.aG = !0
	}, this.a4 = function() {
		this.p < 2 ? this.f = aO.measureText(aP.aQ.aR(aM.max[this.p]), aP.aS.aT(0, this.m)) : 2 === this.p && (this.f = aO.measureText(aP.aQ.aU(6, 2), aP.aS.aT(0, this.m))), this.g = this.b - 2 * this.d - this.f - this.e
	}, this.aV = function() {
		this.r && this.a4()
	}, this.aW = function() {
		this.r && this.aX()
	}, this.aX = function() {
		var aY = aA.aB(y.b - this.b, 2),
			aZ = aA.aB(y.c - this.c, 2);
		aa.setTransform(1, 0, 0, 1, aY, aZ), aa.fillStyle = ab.ac, aa.fillRect(0, this.l, this.b, this.c - this.l), this.ad(), this.ae(), aa.strokeRect(0, 0, this.b, this.c), aP.aS.textAlign(aa, 2), aa.font = aP.aS.aT(0, this.m), 0 === this.p ?
			this.af(aM.ag, aY, aZ) : 1 === this.p ? this.af(aM.ah, aY, aZ) : 2 === this.p ? this.ai(aY, aZ) : 3 === this.p && (this.aj(aY, aZ), this.ak(aY, aZ)), aC.al(Math.floor(aY + this.b - .725 * this.l), Math.floor(aZ + .275 * this.l), Math
				.floor(.45 * this.l)), aa.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ad = function() {
		var aH, aJ;
		for (aa.lineWidth = this.o, aP.aS.textBaseline(aa, 1), aP.aS.textAlign(aa, 1), aa.strokeStyle = ab.am, aa.font = aP.aS.aT(1, this.n), aJ = this.b / this.q.length, aa.fillStyle = ab.an, aa.fillRect(this.p * aJ, this.c - this.i, aJ, this
			.i), aa.fillStyle = ab.am, aa.fillRect(0, this.c - this.i - .5 * this.o, this.b, this.o), aH = 1; aH <= 3; aH++) aa.fillRect(aH * aJ, this.c - this.i, this.o, this.i);
		for (aH = this.q.length - 1; 0 <= aH; aH--) aa.fillText(aP.ao.ap(this.q[aH], 0, .9 * aJ), (aH + .5) * aJ, this.c - .46 * this.i)
	}, this.ae = function() {
		aa.fillStyle = ab.aq, aa.fillRect(0, 0, this.b, this.l), aa.fillStyle = ab.am, aa.fillRect(0, this.l - .5 * this.o, this.b, this.o), aa.font = aP.aS.aT(1, .39 * this.l), aa.fillText(aP.ao.ap(L(4), 0, .8 * this.b), Math.floor(this.b / 2),
			Math.floor(.55 * this.l))
	}, this.af = function(ar, aY, aZ) {
		var at = aM.max[this.p],
			au = (aa.setTransform(1, 0, 0, 1, aY + 2 * this.d + this.f, aZ + this.h + this.l), aa.lineWidth = 2, this.j / Math.sqrt(at));
		aa.beginPath(), aa.moveTo(this.g, this.j - au * Math.sqrt(ar[aM.aN - 1]));
		for (var aH = aM.aN - 2; 0 <= aH; aH--) aa.lineTo(aH * this.g / (aM.aN - 1), this.j - au * Math.sqrt(ar[aH]));
		aa.stroke();
		aY = this.al(ar, au, .5);
		aY < .95 && aa.fillText(aP.aQ.aR(at), -this.d, 0), .05 < Math.abs(aY - .5) && aa.fillText(aP.aQ.aR(Math.floor(at / 4)), -this.d, Math.floor(this.j / 2)), .05 < aY && aa.fillText("0", -this.d, this.j)
	}, this.ai = function(aY, aZ) {
		aa.setTransform(1, 0, 0, 1, aY + 2 * this.d + this.f, aZ + this.h + this.l), aa.lineWidth = 2;
		var au = this.j / Math.max(aM.max[this.p], 1);
		aa.beginPath(), aa.moveTo(this.g, this.j - au * aM.aw[aM.aN - 1]);
		for (var aH = aM.aN - 2; 0 <= aH; aH--) aa.lineTo(aH * this.g / (aM.aN - 1), this.j - au * aM.aw[aH]);
		aa.stroke();
		aY = this.al(aM.aw, au, 1), aZ = aM.max[this.p] / 100;
		aY < .95 && aa.fillText(aP.aQ.aU(aZ, 2), -this.d, 0), .05 < Math.abs(aY - .5) && aa.fillText(aP.aQ.aU(aZ / 2, 2), -this.d, Math.floor(this.j / 2)), .05 < aY && aa.fillText(aP.aQ.aU(0, 2), -this.d, this.j)
	}, this.aj = function(aY, aZ) {
		aa.setTransform(1, 0, 0, 1, aY + .34 * this.b, aZ + 2 * k + this.l), aP.aS.textAlign(aa, 2);
		for (var ax = this.c - 4 * k - this.i - this.l, ar = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aH = 9; 0 <= aH; aH--) aa.fillText(aP.ao.ap(aM.az[ar[aH]], 0, .31 * this.b), 0, aH * ax / 9);
		var b0 = aM.b1;
		for (aa.setTransform(1, 0, 0, 1, aY + .39 * this.b, aZ + 2 * k + this.l), aP.aS.textAlign(aa, 0), aa.fillText(aP.aQ.aU(100 * b0[0] / (1024 * Math.max(b0[1], 1)), 1), 0, 0), aH = 8; 1 <= aH; aH--) aa.fillText(b0[ar[aH]].toString(), 0, aH *
			ax / 9);
		aa.fillText(aP.aQ.aU(100 * (1 - b2.b3[b4.b5] / b0[7]), 0), 0, ax)
	}, this.ak = function(aY, aZ) {
		aa.setTransform(1, 0, 0, 1, aY + .79 * this.b, aZ + 2 * k + this.l), aP.aS.textAlign(aa, 2);
		var aH, ax = this.c - 4 * k - this.i - this.l;
		for (aa.fillStyle = ab.b6, aH = 2; 0 <= aH; aH--) aa.fillText(aP.ao.ap(aM.az[aH + 8], 0, .31 * this.b), 0, aH * ax / 9);
		aa.fillText(aP.ao.ap(aM.az[18], 0, .31 * this.b), 0, 3 * ax / 9), aa.fillStyle = ab.b7, aa.fillText(aP.ao.ap(aM.az[11], 0, .31 * this.b), 0, 4 * ax / 9), aa.fillStyle = ab.b8, aa.fillText(aP.ao.ap(aM.az[13], 0, .31 * this.b), 0, 5 * ax /
				9), aa.fillText(aP.ao.ap(aM.az[15], 0, .31 * this.b), 0, 6 * ax / 9), aa.fillText(aP.ao.ap(aM.az[16], 0, .31 * this.b), 0, 7 * ax / 9), aa.fillText(aP.ao.ap(aM.az[12], 0, .31 * this.b), 0, 8 * ax / 9), aa.fillStyle = ab.b9, aa
			.fillText(aP.ao.ap(aM.az[17], 0, .31 * this.b), 0, ax), aa.fillStyle = ab.b6;
		var b0 = aM.b1,
			bA = b0[8] + b0[9] + b0[10] + b0[18],
			bA = aP.aQ.aR(bA),
			bC = aa.measureText(bA).width,
			aY = (aa.setTransform(1, 0, 0, 1, aY + .83 * this.b + bC, aZ + 2 * k + this.l), aa.fillText(aP.aQ.aR(b0[8]), 0, 0), aa.fillText(aP.aQ.aR(b0[9]), 0, ax / 9), aa.fillText(aP.aQ.aR(b0[10]), 0, 2 * ax / 9), aa.fillText(aP.aQ.aR(b0[18]),
				0, 3 * ax / 9), aa.fillStyle = ab.b7, aa.fillText(bA, 0, 4 * ax / 9), aa.fillStyle = ab.b8, aa.fillText(aP.aQ.aR(b0[13]), 0, 5 * ax / 9), aa.fillText(aP.aQ.aR(b0[15]), 0, 6 * ax / 9), aa.fillText(aP.aQ.aR(b0[16]), 0, 7 * ax /
				9), aa.fillText(aP.aQ.aR(b0[12]), 0, 8 * ax / 9), b0[12] + b0[13] + b0[15] + b0[16]);
		aa.fillStyle = ab.b9, aa.fillText(aP.aQ.aR(aY), 0, ax), aa.fillStyle = ab.am
	}, this.al = function(ar, au, bE) {
		var aH, bF, bG;
		return this.s < 0 || 1 < this.s ? .25 : (aH = this.s * (aM.aN - 1), bG = ar[bF = Math.floor(aH)], bG += (aH - bF) * (ar[bF < aM.aN - 1 ? bF + 1 : bF] - bG), aa.strokeStyle = ab.bI, .04 < this.s && this.bJ(0, this.j - au * Math.pow(bG,
				bE), aH * this.g / (aM.aN - 1), this.j - au * Math.pow(bG, bE)), .04 < bG / aM.max[this.p] && this.bJ(aH * this.g / (aM.aN - 1), this.j, aH * this.g / (aM.aN - 1), this.j - au * Math.pow(bG, bE)), aa.fillStyle = ab.bK, aa
			.beginPath(), aa.arc(aH * this.g / (aM.aN - 1), this.j - au * Math.pow(bG, bE), Math.max(2, .014 * this.c), 0, 2 * Math.PI), aa.fill(), ar = this.s * aF.bM, ar = 0 === b2.bN[b4.b5] ? Math.floor(ar * aM.bO) : Math.floor(ar * aF
			.bP()), aa.fillStyle = ab.am, aa.fillText(1 === bE ? aP.aQ.aU(bG / 100, 2) : aP.aQ.aR(Math.floor(bG)), -this.d, this.j - au * Math.pow(bG, bE)), aP.aS.textAlign(aa, 1), aa.fillText(bQ.bR(ar), aH * this.g / (aM.aN - 1), this.j +
				this.m - (a0.a1.a2() ? 2 : 0) - this.o), aP.aS.textAlign(aa, 2), au * Math.pow(bG, bE) / this.j)
	}, this.bJ = function(bS, bT, bU, bV) {
		aa.beginPath(), aa.moveTo(bS, bT), aa.lineTo(bU, bV), aa.stroke()
	}
}

function bW() {
	var bX = [L(5), L(6), L(7), L(8), L(9), L(10), L(11)],
		bY = [100, 60, 30, 15, 6, 1],
		bZ = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		ba = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		bc = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.bd = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.be = function(id, bf, p) {
		bf = this.bg(bf);
		return +(bZ[bf][id] > p)
	}, this.bg = function(bf) {
		for (var aH = 0; aH < bY.length; aH++)
			if (bY[aH] <= bf) return aH;
		return bY.length
	}, this.bh = function(bf) {
		return bX[this.bg(bf)]
	}, this.bi = function(id, bj) {
		return ba[id].replace(new RegExp("x", "g"), bj)
	}, this.bk = function(id, bj) {
		return bc[id].replace(new RegExp("x", "g"), bj)
	}, this.bl = function(id, bm) {
		return this.bd[5][id]
	}
}

function bn() {
	var b, aY, bo, canvas, ao, r, bp, bq, br, bs, bt = 11 / 12;

	function bz() {
		var c5 = Math.floor(bp * (b - 2 * bo)),
			c6 = 1 + Math.floor(.0625 * c7.c),
			c8 = 1 + Math.floor(.3 * c7.c),
			h = Math.floor(.55 * c7.c);
		ao.clearRect(0, 0, b, c7.c), ao.fillStyle = ab.c9, ao.fillRect(0, 0, bo, c7.c), ao.fillRect(bo + c5, 0, b - bo - c5, c7.c), ao.fillStyle = bp < 1 / 3 ? "rgba(" + Math.floor(3 * bp * 130) + ",130,0,0.85)" : bp < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (bp - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (bp - 2 / 3) * 130) + ",0.85)", ao.fillRect(bo, 0, c5, c7.c), ao.fillStyle = ab.am, ao.fillRect(0, 0, b, 1), ao.fillRect(0, c7.c - 1, b, 1), ao
			.fillRect(0, 0, 1, c7.c), ao.fillRect(bo, 0, 1, c7.c), ao.fillRect(bo + c5, 0, 1, c7.c), ao.fillRect(b - bo, 0, 1, c7.c), ao.fillRect(b - 1, 0, 1, c7.c), ao.fillRect(Math.floor(.25 * c7.c) + c8, Math.floor((c7.c - c6) / 2), c7.c - 2 * c8,
				c6), ao.fillRect(Math.floor(b - 1.25 * c7.c) + c8, Math.floor((c7.c - c6) / 2), c7.c - 2 * c8 - c8 % 2, c6), ao.fillRect(Math.floor(b - 1.25 * c7.c) + Math.floor((c7.c - c6) / 2), c8, c6, c7.c - 2 * c8 - c8 % 2), bq = aP.cA.cB(b4.b5,
				c7.cC()), ao.fillText(aP.aQ.aR(bq) + " (" + aP.aQ.aU(100 * bp, +(bp < .1)) + ")", Math.floor(.5 * b), h)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		bp = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => c7.cS(arg1);

	function cQ(au) {
		return !(1 < au && 1 === bp || (1 < au && au * bp - bp < 1 / 1024 ? au = (bp + 1 / 1024) / bp : au < 1 && bp - au * bp < 1 / 1024 && (au = (bp - 1 / 1024) / bp), bp = aA.cI(bp * au, 1 / 1024, 1), bz(), 0))
	}

	function cR(a6) {
		return bp !== (bp = aA.cI((a6 - aY - bo) / (b - 2 * bo), 1 / 1024, 1)) && (bz(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		bz(), aF.aG = !0
	}, this.aZ = 0, this.bu = !1, this.w = function() {
		r = !b4.bv && !b4.bw, bs = !1, bp = .5, bq = 0, this.bu = !1, this.resize()
	}, this.resize = function() {
		a0.a1.a2() && y.b < .8 * y.c ? (this.c = Math.floor(.066 * y.bx), b = y.b - 4 * a3.gap - this.c) : (b = Math.floor((a0.a1.a2() ? .65 : .389) * y.bx), b += 12 - b % 12, this.c = Math.floor(b / 12)), bo = Math.floor(3 * this.c / 2), br = aP
			.aS.aT(1, Math.floor(.5 * this.c)), (canvas = document.createElement("canvas")).width = b, __fx.mobileKeybinds.setSize(b, this.c, aa), canvas.height = this.c, (ao = canvas.getContext("2d", {
				alpha: !0
			})).font = br, aP.aS.textBaseline(ao, 1), aP.aS.textAlign(ao, 1), this.by(), bz()
	}, this.by = function() {
		aY = a0.a1.a2() && y.b < .8 * y.c ? this.c + 3 * a3.gap : Math.floor((y.b - b) / 2), this.aZ = y.c - this.c - c0.c1() * a3.gap
	}, this.c2 = function() {
		bs && (bs = !1, bz())
	}, this.r = function() {
		return !(!r || aC.cD && aY < Math.floor(a3.gap + 5.5 * this.c))
	}, this.cE = function(cF) {
		return !!this.r() && aY + b > y.b - cF - a3.gap
	}, this.cG = function() {
		r = !b4.bw
	}, this.cH = function() {
		r = !1
	}, this.cC = function() {
		return aA.cI(Math.floor(1024 * bp + .5) - 1, 0, 1023)
	}, this.cJ = function(a6, a7) {
		return this.r() && aY < a6 && a6 < aY + b && a7 > this.aZ
	}, this.a5 = function(a6, a7) {
		if (!this.r()) return !1;
		if (!(__fx.settings.keybindButtons && a7 > this.aZ - Math.floor(a3.gap / 4) - this.c && a7 < this.aZ - Math.floor(a3.gap / 4) && __fx.mobileKeybinds.click(a6 - aY))) {
			if (!c7.cJ(a6, a7)) return !1;
			cM.cN = !1, ! function(cP, a6, a7) {
				if (function(a6, a7) {
						return aY < a6 && a6 < aY + bo && a7 > c7.aZ
					}(a6, a7)) return cQ(bt);
				if (function(a6, a7) {
						return aY + b - bo < a6 && a6 < aY + b && a7 > c7.aZ
					}(a6, a7)) return cQ(1 / bt);
				return cP.bu = !0, cR(a6)
			}(this, a6, a7) || (aF.aG = !0)
		}
		return !0
	}, this.cS = function(cT) {
		0 !== b4.cU && this.r() && cQ(cT) && (aF.aG = !0)
	}, this.cV = function(deltaY) {
		var cT;
		return !(0 === deltaY || !this.r()) && cQ(cT = 0 < deltaY ? (cT = 400 / (400 + deltaY)) < bt ? bt : cT : 1 / bt < (cT = (400 - deltaY) / 400) ? 1 / bt : cT)
	}, this.aI = function(a6) {
		return !!this.bu && cR(a6)
	}, this.cW = function() {
		this.bu = !1
	}, this.cX = function() {
		this.r() && bq !== aP.cA.cB(b4.b5, this.cC()) && (bs = !0)
	}, this.aW = function() {
		this.r() && (aa.drawImage(canvas, aY, this.aZ), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(aa, aY, this.aZ)
	}
}

function cY() {
	var cZ, c, ca, cb, cc, cd, ce, cf, cg;

	function d7() {
		return c7.cE(d8.d2()) ? d3.r ? __fx.settings.keybindButtons ? c7.aZ - 2 * c7.c - 3 * ca : c7.aZ - c7.c - 2 * ca : __fx.settings.keybindButtons ? c7.aZ - c7.c - 2 * ca : c7.aZ - ca : aD.cE(d8.d6()) ? d3.r ? aD.d7() - c7.c - 2 * ca : aD.d7() -
			ca : d3.r ? y.c - c7.c - (c0.c1() + 1) * ca : y.c - c0.c1() * a3.gap
	}

	function cq(aJ, ct, id, dP, cu, cv, cw, cx, cy, cz, dS) {
		var aH, ao, dT, dU, dV = void 0 !== cy,
			b = Math.floor(aO.measureText(ct, d8.br) + 1.5 * cb + (dV ? c : 1.5 * cb));
		if (aF.aG = !0, dS || dW.dO(ct, cy), b + 2 * ca + c7.c > y.b && !dV && 50 !== id && 20 < ct.length) cq(aJ, (dS = aP.aQ.dX(ct))[0], id, dP, cu, cv, cw, cx, cy, cz, !0), cq(aJ, dS[1], id, dP, cu, cv, cw, cx, cy, cz, !0);
		else if (dS = b + (50 === id ? cc : 0), (dT = document.createElement("canvas")).width = b, dT.height = c, (ao = dT.getContext("2d", {
				alpha: !0
			})).font = d8.br, aP.aS.textBaseline(ao, 1), aP.aS.textAlign(ao, 0), ao.clearRect(0, 0, b, c), ao.fillStyle = cv, ao.fillRect(0, 0, b, c), ao.fillStyle = cu, ao.fillText(ct, Math.floor(1.5 * cb), Math.floor(c / 2)), dV && (ao
				.imageSmoothingEnabled = !0, dY.dZ.da(cy, ao, b - c, 0, c)), 0 === (dU = {
				bL: aJ,
				ct: ct,
				id: id,
				player: dP,
				canvas: dT,
				cu: cu,
				cv: cv,
				b: b,
				d4: dS,
				cw: cw,
				cx: cx,
				cy: cy,
				cz: cz
			}).bL || 0 < cZ.length && 0 < cZ[0].bL) cZ.unshift(dU);
		else {
			for (aH = 1; aH < cZ.length; aH++)
				if (0 < cZ[aH].bL) return void cZ.splice(aH, 0, dU);
			cZ.push(dU)
		}
	}

	function cr(bf, ej, dL) {
		return "rgb(" + bf + "," + ej + "," + dL + ")"
	}

	function dd(id, eU) {
		for (var ay = cZ.length, aH = 0; aH < ay; aH++) cZ[aH].id === id && eU-- <= 0 && (cZ.splice(aH, 1), aH--, ay--)
	}

	function df(id, player) {
		for (var en = !1, aH = cZ.length - 1; 0 <= aH; aH--) cZ[aH].id !== id || player !== b4.dg && cZ[aH].player !== player || (cZ.splice(aH, 1), en = !0);
		return en
	}

	function ez(ct) {
		cq(340, ct, 6, 0, cr(215, 245, 255), ab.ac, -1, !1)
	}
	this.ch = "", this.w = function() {
		var self;
		cf = 0, ce = a0.a1.a2() ? 7 : 12, cd = {
			ci: [0, 0, 0],
			cj: [0, 0, 0],
			bm: [220, 180, 180],
			ck: [0, 0, 0],
			cl: [0, 0, 0]
		}, cZ = [], this.resize(), b4.bv && this.cm(0, 18), ev.ew.ex[ev.ey].name.length && ez(L(54, [ev.ew.ex[ev.ey].name])), ez(L(55, [ev.f0 - 2 + "x" + (ev.f1 - 2)])), ez(L(56, [aP.aQ.aR(f2.f3)])), f2.f3 !== f2.f4 && ez(L(57, [aP.aQ.aR(f2
			.f4) + " (" + aP.aQ.aU(100 * f2.f4 / f2.f3, 1) + ")"])), 0 < f2.f5 && ez(L(34, [aP.aQ.aR(f2.f5) + " (" + aP.aQ.aU(100 * f2.f5 / f2.f3, 1) + ")"])), 0 < f2.f6 && ez(L(58, [aP.aQ.aR(f2.f6) + " (" + aP.aQ.aU(100 * f2.f6 / f2.f3, 1) +
			")"
		])), 10 === b4.f7 && cq(120, L(59), 6, 0, cr(235, 255, 120), ab.ac, -1, !1), 0 !== (self = this).ch.length && (cq(200, self.ch, 0, 0, ab.am, ab.ac, -1, !1), self.ch = ""), b4.cp && cq(340, L(12), 6, 0, cr(255, 200, 0), ab.ac, -1, !1)
	}, this.resize = function() {
		var cs, aH;
		if (c = (c = Math.floor((a0.a1.a2() ? .031 : .0249) * y.bx)) < 10 ? 10 : c, this.fontSize = Math.floor(2 * c / 3), this.br = aP.aS.aT(1, this.fontSize), ca = a3.gap, cb = Math.floor(c / 5), 0 < cZ.length)
			for (cs = cZ, cZ = [], aH = cs.length - 1; 0 <= aH; aH--) cq(cs[aH].bL, cs[aH].ct, cs[aH].id, cs[aH].player, cs[aH].cu, cs[aH].cv, cs[aH].cw, cs[aH].cx, cs[aH].cy, cs[aH].cz, !0);
		this.d0()
	}, this.d0 = function() {
		cg = document.createElement("canvas");
		var ct = L(13),
			ao = (cc = aO.measureText(ct, this.br) + 5 * cb, cg.height = c, cg.width = cc, cg.getContext("2d", {
				alpha: !0
			}));
		ao.font = this.br, aP.aS.textBaseline(ao, 1), aP.aS.textAlign(ao, 1), ao.clearRect(0, 0, cc, c), ao.fillStyle = ab.d1, ao.fillRect(0, 0, cc, c), ao.fillStyle = ab.am, ao.fillText(ct, Math.floor(cc / 2), Math.floor(c / 2))
	}, this.d2 = function() {
		var ay;
		return d3.r ? d3.b : 0 === (ay = cZ.length) ? 0 : 1 === ay ? cZ[0].d4 : d5(cZ[0].d4, cZ[1].d4)
	}, this.d6 = function() {
		var ay = cZ.length;
		return d3.r ? ay ? d5(d3.b, cZ[0].d4) : d3.b : 0 === ay ? 0 : 1 === ay ? cZ[0].d4 : 2 === ay ? d5(cZ[0].d4, cZ[1].d4) : d5(d5(cZ[0].d4, cZ[1].d4), cZ[2].d4)
	}, this.a5 = function(aY, aZ) {
		for (var bS, d9, dA = d7(), aH = cZ.length - 1; 0 <= aH; aH--)
			if ((d9 = dA - (aH + 1) * c) <= aZ && aZ < d9 + c) return 50 === cZ[aH].id ? aY >= y.b - cc - ca - cZ[aH].b && (aY >= y.b - cc - ca ? dB.cA.dC(cZ[aH].player) : dD.dE(cZ[aH].player, 800, !1, 0), !0) : aY >= y.b - cZ[aH].b - ca && (
				736 === cZ[aH].id ? window.open("https://" + cZ[aH].ct, "_blank") : cZ[aH].cx && (cZ[aH].cz && cZ[aH].cz.dF ? (d9 = cZ[aH].cz.dG, bS = dH.dI(d9) - 10, d9 = dH.dJ(d9) - 10, dD.dK(bS, d9, 19 + bS, 19 + d9)) : cZ[aH].cz &&
					cZ[aH].cz.dL ? dD.dM(cZ[aH].player, cZ[aH].cz.dN) : (dD.dE(cZ[aH].player, 800, !1, 0), 0 <= cZ[aH].cw && (bS = cZ[aH].cw, cZ[aH].cw = cZ[aH].player, cZ[aH].player = bS))), !0);
		return !1
	}, this.dO = function(aJ, ct, id, dP, cu, cv, cw, cx, cy, cz) {
		cq(aJ, ct, id, dP, cu, cv, cw, cx, cy, cz)
	}, this.dQ = function(dR) {
		cq(300, dR, 252, 0, ab.am, ab.ac, -1, !1)
	}, this.db = function(id) {
		for (var aH = cZ.length - 1; 0 <= aH; aH--) cZ[aH].id === id && (cZ[aH].bL = 1)
	}, this.cm = function(player, id) {
		0 === id ? (aO.dc(player, 0), dd(423, 2), cq(160, L(14, [b2.de[player]]), 423, player, "rgb(10,220,10)", ab.ac, -1, !1)) : 1 === id ? (df(50, b4.dg), aO.dc(player, 1), cq(360, L(15, [b2.de[player]]), 0, player, ab.dh, ab.ac, -1, !0), dD
			.dE(player, 2700, !1, 0)) : 2 === id ? (aO.dc(player, 2), cq(0, L(16), 0, player, "rgb(10,255,255)", ab.ac, -1, !0), dD.dE(player, 2700, !1, 0)) : 3 === id ? (aO.dc(player, 2), cq(0, L(17, [b2.de[player]]), 0, player, ab.am, ab
			.ac, -1, !0), dD.dE(player, 2700, !1, 0)) : 4 === id ? this.di(1, player, player) : 5 === id ? aP.cA.dj(b4.b5) || (function(id, eO) {
			var aH, eP = 0,
				ay = cZ.length;
			for (aH = 0; aH < ay; aH++)
				if (cZ[aH].id === id && eO <= ++eP) return cZ.splice(aH, 1)
		}(1, 5), dl.dm(player) && cq(180, L(18, [b2.de[player]]), 1, player, cr(255, 200, 180), ab.ac, -1, !0), aP.cA.dn(player, 10) && (dd(573, 0), cq(180, L(19, [b2.de[player]]), 573, player, ab.dh, ab.ac, -1, !0))) : 18 === id ? cq(255, L(
			20), 18, 0, ab.am, ab.ac, -1, !1) : 21 === id ? cq(220, L(21), id, 0, ab.am, ab.ac, -1, !1) : 22 === id ? this.di(2, player, player) : 59 === id && cq(0, L(22), id, 0, ab.dp, ab.ac, 0, !1)
	}, this.dq = function(dR) {
		cq(200, L(23, [dR]), 94, 0, ab.am, ab.dr, -1, !1)
	}, this.ds = function(dt) {
		if (b4.b5 === dt && !b4.o0 && !b4.bw)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			cq(0, "Your Win Count is now " + __fx.wins.count, 3, dt, ab.am, ab.ac, -1, !0);
		b2.b3[dt] && (aO.dc(dt, 2), b4.du < 100 ? cq(0, L(17, [b2.de[dt]]), 3, dt, ab.am, ab.ac, -1, !0) : cq(0, L(24, [b2.de[dt]]), 3, dt, ab.am, ab.ac, -1, !0))
	}, this.dv = function(av) {
		var ct, e3, bB = "(" + dH.dI(av >> 2) + ", " + dH.dJ(av >> 2) + ")",
			cx = !1,
			player = 0;
		dw.dx(av) ? dw.dy(av) ? bB = L(25, [bB]) : (player = dw.dz(av), b4.bw && !1 === __fx.hoveringTooltip.active && (b4.b5 = player), ct = L(26, [aP.ao.ap(b2.e0[player], aP.aS.aT(0, 10), 150)]) + "   ", ct = (ct += L(27, [aP.aQ.aR(b2.e1[
			player])]) + "   ") + L(28, [aP.aQ.aR(b2.b3[player])]) + "   ", b4.e2 && (e3 = e4.e5[e4.e6[e4.e7[player]]], ct += L(29) + ": " + e3 + "   "), aP.cA.dj(player) && (ct += L(30) + ": " + e8.e9[e8.eA[player]] + "   "), bB = ct = (
			ct += L(31, [player]) + "   ") + L(32, [bB]), cx = !0) : bB = dw.eB(av) ? L(33, [bB]) + "   #" + dw.eC(av) : L(34, [bB]), aF.aG = !0, dd(55, 0), cq(220, bB, 55, player, ab.am, ab.ac, -1, cx, void 0, void 0, !0)
	}, this.eD = function(eE) {
		var at = eF.eG,
			player = at.eH[eE] >> 3,
			ct = (aF.aG = !0, dd(55, 0), L(35, [b2.de[player]]) + "   ");
		cq(220, ct += L(27, [aP.aQ.aR(at.eI[eE])]), 55, player, ab.am, ab.ac, -1, !0)
	}, this.eJ = function(eK, eL, eM) {
		eK === b4.b5 ? cq(175, " " + L(36, [b2.de[eL]]) + ": ", 1001, eL, cr(200, 255, 210), ab.ac, -1, !0, eM) : this.eN(eK, eM)
	}, this.eN = function(eK, eM) {
		dd(1e3, 0), cq(175, b2.de[eK] + ": ", 1e3, eK, ab.am, "rgba(5,60,25,0.9)", -1, !0, eM)
	}, this.eQ = function() {
		var dR;
		b4.eR ? (dR = L(37), aO.eS(L(38), 2, 1, 12), cq(0, dR, 40, 0, "rgb(10,220,10)", ab.ac, -1, !1)) : (dR = L(39), aO.eS(L(40), 2, 0, 16), cq(0, dR, 41, 0, ab.am, ab.ac, -1, !1))
	}, this.eT = function() {
		var eU = b2.de,
			z = b4.data;
		cq(300, eU[0] + " [" + b4.eV.eW(z.elo[0]) + "] vs " + eU[1] + " [" + b4.eV.eW(z.elo[1]) + "]", 65, 0, ab.eX, "rgba(100,255,255,0.75)", -1, !1)
	}, this.eY = function(dR) {
		cq(350, dR, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.eZ = function(ea) {
		cq(0, L(ea ? 41 : 42), 247, 0, ab.eb, ab.ac, -1, !1)
	}, this.ec = function(ed, ee, ef) {
		var z = b4.data,
			eU = b2.de;
		cq(0, eU[0] + ": " + b4.eV.eW(z.elo[0]) + " -> " + ed, 66, 0, ab.am, ef[0], -1, !1), cq(0, eU[1] + ": " + b4.eV.eW(z.elo[1]) + " -> " + ee, 66, 1, ab.am, ef[1], -1, !1)
	}, this.eg = function(player, id) {
		0 === id ? df(50, player) ? (cq(128, L(43, [b2.de[player]]), 52, player, cr(180, 255, 180), ab.ac, -1, !0), dl.eh(player, 2, 255)) : cq(384, L(44, [b2.de[player]]), 51, player, cr(210, 210, 255), ab.ac, -1, !0) : df(51, player) ? (cq(128,
			L(45, [b2.de[player]]), 52, player, ab.am, "rgba(60,120,10,0.9)", -1, !0), dl.eh(player, 2, 255)) : (cq(384, L(46, [b2.de[player]]), 50, player, ab.am, "rgba(90,90,90,0.9)", -1, !0), dl.eh(player, 2, 96))
	}, this.ei = function(ci, target) {
		var color = cr(210, 255, 210);
		1 < ci.length ? cq(230, L(47, [ci.length, b2.de[target]]), 66, target, color, ab.ac, -1, !0) : cq(230, L(48, [b2.de[ci[0]], b2.de[target]]), 66, ci[0], color, ab.ac, target, !0)
	}, this.ek = function(player, target) {
		cq(230, L(49, [b2.de[player], b2.de[target]]), 66, player, ab.am, "rgba(75,65,5,0.9)", target, !0)
	}, this.el = function(id, eU) {
		dd(id, eU)
	}, this.em = function(id, player) {
		df(id, void 0 === player ? b4.dg : player)
	}, this.eo = function(id) {
		for (var aH = cZ.length - 1; 0 <= aH; aH--)
			if (cZ[aH].id === id) return cZ[aH];
		return null
	}, this.ep = function(eq, er, player) {
		2 !== b2.es[b4.b5] && cq(200, 1 === eq ? L(50, [b2.de[player]]) : L(51, [aP.aQ.aR(eq), b2.de[player]]), 30, player, "rgb(190,255,190)", ab.ac, -1, !0)
	}, this.eu = function(eq, player) {
		2 !== b2.es[b4.b5] && (dd(31, 0), eq = " (" + aP.aQ.aR(eq) + ") 💸", cq(150, eq = aP.cA.dj(player) ? L(52) + eq : L(53, [b2.de[player]]) + eq, 31, player, ab.eX, "rgba(205,205,205,0.9)", -1, !0))
	}, this.f8 = function(f9) {
		for (var cl = aF.bP(), aH = 2; 0 <= aH; aH--) 0 < cd.ck[aH] && (f9 || cd.cl[aH] < cl - 220) && this.fA(aH)
	}, this.fA = function(id) {
		var ct, ay = cd.ck[id],
			player = cd.ci[id];
		cd.ck[id] = 0, 1 === ay ? (0 === id ? ct = L(60, [b2.de[player], b2.de[cd.cj[0]]]) : 1 === id ? ct = L(61, [b2.de[player]]) : 2 === id ? ct = L(62, [b2.de[player]]) : 3 === id && (ct = L(63, [b2.de[player]])), dd(7, 0), cq(cd.bm[id], ct,
			7, cd.cj[id], ab.am, ab.ac, -1, !0)) : (ct = L(0 === id ? 64 : 1 === id ? 65 : 66, [ay]), dd(7, 0), cq(cd.bm[id], ct, 7, player, ab.am, ab.ac, -1, !1))
	}, this.di = function(id, fB, cw) {
		var cl = aF.bP(),
			ay = cd.ck[id] + 1;
		cd.ck[id]++, cd.ci[id] = fB, cd.cj[id] = cw, 1 === ay && (cd.cl[id] = cl), (1 === ay && (b4.fC < 32 || 2 === b4.cU) || 1 < ay && (cd.cl[id] < cl - 140 || 2 === b4.cU)) && this.fA(id)
	}, this.cX = function() {
		fD.cX();
		for (var fE = (fE = cZ.length - ce) <= 1 ? 1 : fE * fE, aH = cZ.length - 1; 0 <= aH; aH--) 0 < cZ[aH].bL && (cZ[aH].bL -= fE, cZ[aH].bL <= 0) && (aF.aG = !0, cZ.splice(aH, 1));
		! function() {
			var eU, aH;
			if (128 !== cf && !(++cf < 128))
				for (eU = 5, aH = fG.fH - 1; 0 <= aH; aH--) 1 === b2.es[fG.fI[aH]] && 0 < eU-- && cq(240, L(63, [b2.de[fG.fI[aH]]]), 1, fG.fI[aH], ab.eX, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.f8(!1)
	}, this.aW = function() {
		for (var a9, aZ = d7(), aH = cZ.length - 1; 0 <= aH; aH--) a9 = aZ - (aH + 1) * c, 50 === cZ[aH].id ? (aa.drawImage(cZ[aH].canvas, y.b - cZ[aH].b - cc - ca, a9), aa.drawImage(cg, y.b - cc - ca, a9)) : aa.drawImage(cZ[aH].canvas, y.b - cZ[
			aH].b - ca, a9)
	}
}

function fJ() {
	var fK = null,
		fL = null,
		fM = 0,
		fN = 0,
		fO = null;

	function fS() {
		0 !== fL.fT && (fd.fe.aE(), fZ.ff(8, 29, new fg(25, {
			fh: 0,
			fi: fj.fk.aR(fL.fi, 5),
			fl: 0
		}, 29)))
	}

	function fV() {
		return !fd.fq || fd.fr.fs(fL) ? 1 : 0
	}

	function fU() {
		var aY = fK.aY,
			aZ = fK.aZ,
			fw = (fd.fe.aE(), fV());
		fK = new fQ([new fR(fc.bd[5][0], function() {
			fb(5, 0)
		}, fw), new fR(fc.bd[5][1], function() {
			fb(5, 1)
		}, fw), new fR(fc.bd[5][2], function() {
			fb(5, 2)
		}, fw), new fR(fc.bd[5][3], function() {
			fb(5, 3)
		}, fw)]), fX(aY, aZ), fN = fM = 2
	}

	function fW() {
		29 === fZ.fa && fZ.fx().fy(fj.fk.aR(fL.fi, 5))
	}

	function fb(id, value) {
		5 === id && fz.g0.g1({
			fh: 3,
			fi: fj.fk.aR(fL.fi, 5),
			value: value
		})
	}

	function fX(aY, aZ, g4) {
		fK.show(aY, aZ, g4), fd.g5.show(fK.aY, fK.aZ, fL, 1)
	}
	this.fP = function(bF, dU) {
		fM = 1, fL = dU, fK = new fQ([new fR(L(67), fS, 0 === dU.fT ? 1 : 0), new fR(L(68), fU, fV()), new fR(L(69), fW, 0)]), fX((fO = {
			clientX: bF.clientX,
			clientY: bF.clientY
		}).clientX, fO.clientY, 1)
	}, this.fY = function(code) {
		if (29 !== fZ.fa) return !1;
		if (!fL) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.aE();
			else if (aP.aQ.startsWith(code, "Numpad") || aP.aQ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === fM) this.fP(fO, fL);
				else {
					if (!fK) return !1;
					1 === fM ? code <= 1 ? fS() : 2 === code ? fU() : (fW(), this.aE()) : (fb(fN, aA.cI(code - 1, 0, fc.bd[fN].length - 1)), this.aE())
				}
		}
		return !0
	}, this.aE = function() {
		fM = 0, fK && fK.aE(), fK = null, fd.g5.aE()
	}
}

function g6() {
	this.g7 = function() {
		var g8 = b4.data;
		aP.g9.gA(g8.teamPlayerCount, g8.playerCount), g8.numberTeams = aP.g9.gB(g8.teamPlayerCount, 0), g8.teamPlayerCount[0] && g8.teamPlayerCount[7] && (g8.teamPlayerCount[7] = 0, this.g7())
	}, this.gC = function() {
		var g8 = b4.data;
		g8.mapType < 2 ? ev.gD(ev.gE(g8), g8.mapSeed) : ev.gF(g8.canvas)
	}, this.gG = function() {
		var g8 = b4.data;
		g8.colorsData || (g8.colorsData = new Uint32Array(1)), g8.selectableColor && (g8.colorsData[0] = gH.eG.gI()), g8.selectableName && (g8.playerNamesData || (g8.playerNamesData = new Array(1)), g8.playerNamesData[0] = gH.gJ.data[122].value),
			g8.gK = new Uint32Array(1), g8.gK[0] = gL.fk.gM(gH.gJ.data[105].value, 5)
	}, this.gN = function() {
		b4.data = new gO, b4.data.aIncomeType = 2, b4.data.aIncomeData = new Uint8Array(b4.dg), b4.data.aIncomeData[0] = 64
	}
}

function gP() {
	var gQ, gR, gS, gg;

	function gV() {
		gZ(), 2 === b4.data.playerNamesType && 1 === aP.g9.gd(b4.data.playerNamesData).length && (b4.data.playerNamesType = 0), 2 !== b4.data.playerNamesType && (b4.data.playerNamesData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		2 === b4.data.playerNamesType && aP.g9.ge(gS.gf(), b4.data.playerNamesData, 20)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(70), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), gj.gm(new gn({
			go: [L(73), L(74), L(75)],
			value: b4.data.playerNamesType
		}, function(p) {
			gZ(), b4.data.playerNamesType = p, fZ.ff(23)
		})), gj.gp(new gq), gj.gp(new gr({
			value: b4.data.selectableName
		}, L(76), function(value) {
			b4.data.selectableName = value
		})), gg.push(gj)
	}(gg = []), function(gg) {
		var gj;
		2 === b4.data.playerNamesType && ((gj = new gk).gl("Data"), gS = new gs(0, 1, 0, 1), b4.data.playerNamesData && b4.data.playerNamesData.length === b4.dg || (b4.data.playerNamesData = new Array(b4.dg), b4.data.playerNamesData.fill(
			"")), gS.gt(aP.aQ.gu(b4.data.playerNamesData, 1, '"')), gj.gp(gS), gg.push(gj))
	}(gg), gg))
}

function gx() {
	"function" != typeof Math.log2 && (Math.log2 = function(aY) {
		return Math.log(aY) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aY) {
		return Math.log(aY) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aY) {
		return 0 < aY ? 1 : aY < 0 ? -1 : 0
	})
}

function gy() {
	this.id = 0, this.gz = 0, this.h0 = null, this.h1 = null, this.h2 = null, this.h3 = null, this.a1 = new h4, this.w = function() {
		var self, gz;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (gz = Android.getVersion()) < 12 || (self.gz = gz, self.id = 1, self.h1 = Android),
			function(self) {
				var gz;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.h2 = mwIOSdataX, self.h3 = window.webkit.messageHandlers.iosCommandA, gz = self
					.h2.version, self.gz = gz ? Number(gz) : 0)
			}(this),
			function(self) {
				var h0;
				try {
					if (!(h0 = window.localStorage)) return;
					h0.setItem("tls7", "1"), h0.removeItem("tls7")
				} catch (error) {
					return
				}
				self.h0 = h0
			}(this)
	}
}

function h8() {
	var gQ, gR, gS;

	function gV() {
		gZ(), 3 !== b4.data.botDifficultyType || aP.g9.gd(b4.data.botDifficultyData) || (b4.data.botDifficultyType = 0), 3 !== b4.data.botDifficultyType && (b4.data.botDifficultyData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		3 === b4.data.botDifficultyType && aP.g9.h9(gS.gf(), b4.data.botDifficultyData, e8.e9.length - 1)
	}

	function hA(gg, p) {
		var gj = new gk,
			value = (gj.gl(p < 0 ? L(30) : L(29) + " " + e4.e5[p % 9]), 0 <= p && (gj.hB(L(80) + ": " + b4.data.teamPlayerCount[p]).style.marginBottom = "1em"), p < 0 ? b4.data.botDifficultyValue : b4.data.botDifficultyTeam[p]);
		gj.gm(new gn({
			go: e8.e9,
			value: value
		}, function(hC) {
			p < 0 ? b4.data.botDifficultyValue = hC : b4.data.botDifficultyTeam[p] = hC
		})), gg.push(gj)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(30), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, function() {
		var gg = [];
		if (function(gg) {
				var gj = new gk,
					go = (gj.gl(L(72)), [L(77), L(78), L(79), L(75)]),
					value = b4.data.botDifficultyType;
				0 === b4.data.gameMode && (value = Math.min(value, 2), go.splice(2, 1));
				gj.gm(new gn({
					go: go,
					value: value
				}, function(p) {
					gZ(), b4.data.botDifficultyType = p, 0 === b4.data.gameMode && 2 === p && (b4.data.botDifficultyType = 3), 3 !== b4.data.botDifficultyType || b4.data.botDifficultyData || (b4.data.botDifficultyData =
						new Uint8Array(b4.dg)), 2 !== b4.data.botDifficultyType || b4.data.botDifficultyTeam || (b4.data.botDifficultyTeam = new Uint8Array(9)), fZ.ff(25)
				})), gg.push(gj)
			}(gg), 0 === b4.data.botDifficultyType) hA(gg, -1);
		else if (2 === b4.data.botDifficultyType)
			for (var aH = 0; aH < b4.data.teamPlayerCount.length; aH++) b4.data.teamPlayerCount[aH] && hA(gg, aH);
		else 3 === b4.data.botDifficultyType && ! function(gg) {
			var gj = new gk;
			gj.gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.botDifficultyData, 8)), gj.gp(gS), gg.push(gj)
		}(gg);
		return gg
	}())
}

function hD() {
	var hE = null;
	this.hF = 0, this.hG = function() {
		var b0 = gH.gJ.data[5].value;
		hE = "px " + b0, "Trebuchet MS" !== b0 && (hE += ", Trebuchet MS"), this.hF = hH(32, 32, ["a", "b", "m"], 200, hE)
	}, this.hI = function(b, c) {
		var cl = document.createElement("canvas");
		return cl.width = b, cl.height = c, cl
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ao, b, c) {
		return ao.getImageData(0, 0, b, c)
	}, this.aT = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + hE : 1 === type ? "bold " + size + hE : 2 === type ? "lighter " + size + hE : 3 === type ? "italic " + size + hE : 4 === type ? "oblique " + size + hE : 5 === type ? "small-caps " +
			size + hE : "small-caps bold " + size + hE
	}, this.textAlign = function(hJ, id) {
		hJ.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hJ, id) {
		hJ.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.hK = function(bF, code, color) {
		color = this.hL(a3.hM) + " solid " + (color || ab.am);
		5 === (code = code || 5) ? bF.style.border = color : 4 === code ? bF.style.borderLeft = color : 2 === code ? bF.style.borderBottom = color : 6 === code ? bF.style.borderRight = color : bF.style.borderTop = color
	}, this.hN = function(bF, aY, aZ, b, c) {
		bF = bF.style;
		bF.left = this.hP(aY), bF.top = this.hP(aZ), bF.width = this.hP(b), bF.height = this.hP(c)
	}, this.hQ = function(b0) {
		return 1 + b0 * a0.a1.a2()
	}, this.hR = function(cT, hS) {
		return cT * this.hQ(void 0 === hS ? .5 : hS) * y.bx / y.hT
	}, this.hU = function(cT, hS) {
		return cT * this.hQ(void 0 === hS ? .5 : hS) * y.bx
	}, this.hV = function(cT, hS, hW) {
		return this.hQ(hS) * Math.min(cT * y.bx, hW * y.b) / y.hT
	}, this.hL = function(b0) {
		return b0.toFixed(1) + "px"
	}, this.hP = function(b0) {
		return this.hY(b0).toFixed(1) + "px"
	}, this.hY = function(b0) {
		return b0 / y.hT
	}, this.hZ = function(ha, hb) {
		for (var ct = "<ul>", ay = ha.length, aH = 0; aH < ay; aH++) ct += "<li>" + ha[aH] + ": <a href='" + hb[aH] + "' target='_blank'>" + hb[aH] + "</a></li>";
		return ct += "</ul>"
	}, this.hc = function(hd) {
		return "<a href='" + hd + "' target='_blank'>" + hd + "</a>"
	}, this.he = function(bF) {
		navigator.clipboard && navigator.clipboard.writeText(bF.value)
	}, this.hf = function(bF) {
		var aJ = bF.textContent;
		aP.aQ.hg(aJ, "✔") || (1 === aJ.length ? bF.textContent = "✔" : bF.textContent = aJ + " ✔", setTimeout(function() {
			bF.textContent = aJ
		}, 500))
	}, this.measureText = function(ct) {
		return aa.measureText(ct).width
	}, this.hh = function(hi) {
		hi.style.overflowX = "auto", hi.style.overflowY = "hidden", hi.style.whiteSpace = "nowrap", hi.addEventListener("wheel", function(bF) {
			Math.abs(bF.deltaY) < Math.abs(bF.deltaX) || (this.scrollLeft += bF.deltaY, this.hj = this.scrollLeft, bF.preventDefault())
		}), hi.addEventListener("scroll", function() {
			this.hj = this.scrollLeft
		})
	}
}

function hk() {
	this.hl = function(hm) {
		var username = gH.gJ.data[122].value.slice(0, 20),
			username = (hn.gD(24 + 16 * username.length + 18 + ho.hp.hq()), hn.hr(1, 0), hn.hr(6, 1), hn.hr(10, hs.ht), hn.hr(2, gH.gJ.data[158].value), fz.hu.hv(username), aP.color.hx(gH.eG.gI()));
		hn.hr(6, username[0]), hn.hr(6, username[1]), hn.hr(6, username[2]), ho.hp.hy(), fz.eG.hz = hm, fz.eG.send(hm, hn.i0)
	}, this.i1 = function(i2, i3) {
		i4.w(), i4.hr(1, 0), i4.hr(6, 2), i4.hr(3, i2), 2 === i2 ? i4.hr(2, i3) : 3 === i2 ? fj.i5.hy(i3, 7, i4) : 5 === i2 && (i4.hr(3, i3.id), i4.hr(3, i3.value), i4.hr(30, i3.fi)), fz.eG.send(fz.eG.hz, i4.i6())
	}
}

function i7(dF, dL) {
	return 0 <= dF ? aA.aB(dF, dL) : -aA.aB(-dF, dL)
}

function i8(b0) {
	return b0 * b0
}

function d5(dF, dL) {
	return dL < dF ? dF : dL
}

function i9(dF, dL) {
	return dF < dL ? dF : dL
}

function iA(dF, b0, dL) {
	return b0 < dF ? dF : dL < b0 ? dL : b0
}

function iB(b0, ay) {
	for (var cl = aA.aB(b0 + 1, 2), aH = 0; aH < ay; aH++) cl = aA.aB(cl + aA.aB(b0, cl), 2);
	return cl
}

function iC(b0, ay) {
	return b0 < 1 ? 0 : iB(b0, ay)
}

function iD(bS, bT, d, h, bU, bV, e, i) {
	return !(bS + d <= bU || bT + h <= bV || bU + e <= bS || bV + i <= bT)
}

function iE(bS, bT, d, h, bU, bV, e, i) {
	return bS <= bU && bT <= bV && bU + e <= bS + d && bV + i <= bT + h
}

function iF(b0) {
	return Math.floor(!!b0 * (1 + Math.log2(b0 + .5)))
}

function fQ(iG) {
	var iH = document.createElement("div"),
		iI = document.createElement("div"),
		iJ = (this.aY = 0, this.aZ = 0);

	function iN() {
		fd.fe.aE()
	}
	this.iK = iG, this.show = function(aY, aZ, g4) {
		if (iJ) return [0, 0];
		iJ = 1, this.aY = aY, this.aZ = aZ,
			function(self, g4) {
				var b = aP.aS.hR(.16, .7),
					c = iG.length * b / 3,
					iQ = y.b / y.hT,
					iR = y.c / y.hT,
					cT = Math.min(1, Math.min(iQ / b, iR / c));
				b *= cT, c *= cT, g4 && (self.aY += aP.aS.hR(.03, .5)), self.aY = aA.cI(self.aY, 0, iQ - b), self.aZ = aA.cI(self.aZ, 0, iR - c), iI.style.left = self.aY + "px", iI.style.top = self.aZ + "px", iI.style.width = b + "px", iI.style
					.height = c + "px", iI.style.font = aP.aS.aT(0, .3 * c / iG.length), aP.aS.hK(iI, 5);
				for (var aH = 1; aH < iG.length; aH++) aP.aS.hK(iG[aH].button, 8)
			}(this, g4), document.body.appendChild(iH)
	}, this.aE = function() {
		iJ && (iJ = 0, iH.removeEventListener("click", iN), fZ.removeChild(document.body, iH))
	};
	for (var aH = 0; aH < iG.length; aH++) new iL("" + (1 + aH), iG[aH].button, 0, 1);
	iH.style.position = "fixed", iH.style.top = "0", iH.style.left = "0", iH.style.width = "100%", iH.style.height = "100%", iH.style.zIndex = "5", iI.style.position = "absolute",
		function() {
			for (var iO = (100 / iG.length).toFixed(2) + "%", aH = 0; aH < iG.length; aH++) iG[aH].button.style.width = "100%", iG[aH].button.style.height = iG[aH].button.style.maxHeight = iO, iG[aH].button.style.padding = "0.0em 0.9em", iI
				.appendChild(iG[aH].button)
		}(), iH.appendChild(iI), iH.addEventListener("click", iN)
}

function iS() {
	this.eG = new iT, this.fa = 0;
	var iU = new Array(32);

	function ia() {
		for (var ay = iU.length, aH = 0; aH < ay; aH++) iU[aH] = null
	}
	this.w = function() {
		for (var iV, iW = document.body.firstChild; iW;) iV = iW.nextSibling, !document.body.contains(iW) || "DIV" !== iW.tagName && "INPUT" !== iW.tagName && "BUTTON" !== iW.tagName || fZ.removeChild(document.body, iW), iW = iV
	}, this.ff = function(p, iX, i3) {
		void 0 === iX && (iX = this.fa), aF.aG = !0, 0 === p && (0 === iY.iZ() ? p = 5 : a0.a1.setState(13)), this.aE(), this.fa === p && (iX = iU[p].iX, iU[p] = null), this.fa = p;
		var at = iU[p];
		if (!at || 4 === p || 7 === p || 8 === p || 9 === p || 10 === p || 11 === p || 13 === p || 15 === p || 18 === p || 20 <= p && p <= 28 || 32 === p || 33 === p) {
			if (0 === p) return void ia();
			1 === p ? at = new ib : 2 === p ? at = new ic : 3 === p ? at = new ie : 4 === p || 9 === p || 10 === p || 11 === p || 13 === p || 33 === p ? at = i3 : 5 === p ? at = new ig : 6 === p ? at = new ih : 7 === p ? at = new ii(fZ.eG.ij) :
				8 === p ? at = i3 : 12 === p ? at = new ik : 14 === p ? at = new il : 15 === p ? at = new ii(fZ.eG.im) : 16 === p ? at = new io : 17 === p ? at = new ip : 18 === p ? at = new iq : 19 === p ? at = new ir : 20 === p ? at = new is :
				21 === p ? at = new it : 22 === p ? at = new iu : 23 === p ? at = new gP : 24 === p ? at = new iv : 25 === p ? at = new h8 : 26 === p ? at = new iw : 27 === p ? at = new ix : 28 === p ? at = new iy : 29 === p ? at = new iz :
				30 === p ? at = new j0 : 31 === p && (at = new j1), at.iX = iX, iU[p] = at
		}
		at.show(i3)
	}, this.gc = function() {
		this.r() && this.j2(this.fx().iX)
	}, this.j2 = function(p) {
		this.r() && (iU[p] ? (this.aE(), aF.aG = !0, this.fa = p, iU[p].show()) : this.ff(p))
	}, this.aE = function() {
		this.r() && iU[this.fa].aE()
	}, this.j3 = function() {
		this.r() && (iU[this.fa].aE(), ia(), this.fa = 0, a0.a1.setState(13))
	}, this.aW = function() {
		var at;
		this.r() && (at = iU[this.fa]).aW && at.aW()
	}, this.resize = function() {
		if (!this.r()) return !1;
		iU[this.fa].resize()
	}, this.a5 = function(aY, aZ) {
		var at;
		this.r() && (at = iU[this.fa]).a5 && at.a5(aY, aZ)
	}, this.aI = function(aY, aZ) {
		var at;
		this.r() && (at = iU[this.fa]).aI && at.aI(aY, aZ)
	}, this.j4 = function() {
		var at;
		this.r() && (at = iU[this.fa]).j4 && at.j4()
	}, this.cV = function(a6, a7, deltaY) {
		var at;
		this.r() && (at = iU[this.fa]).cV && at.cV(a6, a7, deltaY)
	}, this.fY = function(code) {
		var at;
		return !!this.r() && ((at = iU[this.fa]).fY && at.fY(code), !0)
	}, this.cX = function() {
		var at;
		this.r() && (at = iU[this.fa]) && at.cX && at.cX()
	}, this.r = function() {
		return 0 < this.fa
	}, this.fx = function() {
		return iU[this.fa]
	}, this.j5 = function(p) {
		return iU[p]
	}, this.gb = function() {
		return iU
	}, this.removeChild = function(j6, hi) {
		try {
			j6.removeChild(hi)
		} catch (bF) {
			console.log("removeChild error " + bF)
		}
	}
}

function j7() {
	this.j8 = function(j9, jA, jB) {
		hn.gD(75), hn.hr(1, 0), hn.hr(6, 21), hn.hr(6, j9), hn.hr(1, +(jA < 0)), hn.hr(1, +(jB < 0)), hn.hr(30, Math.abs(jA)), hn.hr(30, Math.abs(jB)), fz.eG.send(0, hn.i0)
	}, this.jC = function(j9, jD, jE) {
		hn.gD(18 + 16 * jD.length + 30), hn.hr(1, 0), hn.hr(6, 22), hn.hr(6, j9), fz.hu.hv(jD), hn.hr(30, jE), fz.eG.send(0, hn.i0)
	}, this.jF = function(j9, jD, jE) {
		hn.gD(73), hn.hr(1, 0), hn.hr(6, 28), hn.hr(6, j9), gL.fk.jG(jD, 5), hn.hr(30, jE), fz.eG.send(0, hn.i0)
	}, this.jH = function(jI, jJ) {
		for (var ay = jJ.length, jK = 0, aH = 0; aH < ay; aH++) jK += jJ[aH].length;
		for (hn.gD(21 + 3 * ay + 16 * jK), hn.hr(1, 0), hn.hr(6, 23), hn.hr(3, jI), hn.hr(4, ay), hn.hr(7, jK), aH = 0; aH < ay; aH++) hn.hr(3, jJ[aH].length), fj.jL.jM(jJ[aH]);
		fz.eG.send(0, hn.i0)
	}, this.jN = function(jI, jA, jB) {
		hn.gD(52), hn.hr(1, 0), hn.hr(6, 24), hn.hr(3, jI), hn.hr(1, +(jA < 0)), hn.hr(1, +(jB < 0)), hn.hr(20, Math.abs(jA)), hn.hr(20, Math.abs(jB)), fz.eG.send(0, hn.i0)
	}
}

function jO() {
	this.jP = function() {
		var aH;
		if (jQ.size < hn.jR(23)) fz.eG.jS(0, 3259);
		else {
			var j9 = jQ.hq(6),
				ay = jQ.hq(10),
				data = [];
			if (9 === j9 || 10 === j9 || 11 === j9) {
				for (aH = 0; aH < ay; aH++) data.push([jQ.hq(30), gL.i5.jT(5), jQ.jU(32), 0, jQ.hq(30)]);
				8 === fZ.fa && fZ.fx().jV(21, !0, {
					j9: j9,
					data: data
				})
			} else if (12 === j9) {
				for (aH = 0; aH < ay; aH++) data.push([jQ.hq(20), jQ.hq(30), jQ.hq(30), jQ.jU(32), jQ.hq(30), gL.i5.jT(5), gL.i5.jT(5)]);
				8 === fZ.fa && fZ.fx().jV(21, !0, {
					j9: j9,
					data: data
				})
			} else {
				var jK = jQ.hq(16);
				if (jQ.jW(39 + 16 * jK + ay * (0 === j9 ? 111 : 1 === j9 ? 101 : 2 === j9 || 3 === j9 ? 127 : 212))) {
					if (0 === j9)
						for (aH = 0; aH < ay; aH++) data.push([jQ.hq(30), gL.jL.jX(jQ.hq(5)), jQ.hq(16), jQ.hq(30), jQ.hq(30)]);
					else if (1 === j9)
						for (aH = 0; aH < ay; aH++) data.push([jQ.hq(16), gL.jL.jX(jQ.hq(3)), jQ.hq(16), gL.jL.jX(jQ.hq(5)), jQ.hq(31), jQ.hq(30)]);
					else if (2 === j9 || 3 === j9)
						for (aH = 0; aH < ay; aH++) data.push([jQ.hq(30), gL.jL.jX(jQ.hq(5)), jQ.jU(32), jQ.hq(30), jQ.hq(30)]);
					else
						for (aH = 0; aH < ay; aH++) data.push([jQ.hq(20), jQ.hq(30), jQ.hq(30), jQ.hq(30), jQ.hq(30), jQ.jU(32), jQ.hq(30), gL.jL.jX(jQ.hq(5)), gL.jL.jX(jQ.hq(5))]);
					8 === fZ.fa && fZ.fx().jV(21, !0, {
						j9: j9,
						data: data
					})
				} else fz.eG.jS(0, 3260)
			}
		}
	}, this.jY = function() {
		if (jQ.size < hn.jR(29)) fz.eG.jS(0, 3265);
		else {
			var jZ = jQ.hq(4),
				ja = jQ.hq(7),
				jb = jQ.hq(11);
			if (jQ.jW(29 + 16 * ja + 16 * jb + 11 * jZ)) {
				for (var data = [], aH = 0; aH < jZ; aH++) {
					for (var jc = gL.jL.jX(jQ.hq(3)), jd = jQ.hq(8), je = [], dF = 0; dF < jd; dF++) je.push(jQ.hq(16));
					data.push({
						name: "[" + jc + "]",
						je: je
					})
				}
				8 === fZ.fa && fZ.fx().jV(23, !0, data)
			} else fz.eG.jS(0, 3266)
		}
	}
}

function jf() {
	this.ap = function(ct, font, maxWidth) {
		if (font && (aa.font = font), aa.measureText(ct).width <= maxWidth) return ct;
		for (var aH = ct.length - 1; 1 <= aH; aH--)
			if (ct = ct.substring(0, aH), aa.measureText(ct + "...").width <= maxWidth) return ct + "...";
		return "..."
	}
}

function ie() {
	var gQ, jh;

	function jk() {
		fZ.j3();
		var ct = jo.jt(jh.gf());
		(b4.cU && 0 < ct.length && ct === jo.jp.jq || jo.jv.jT(ct)) && jo.ju()
	}
	this.show = function(jl) {
		this.jm(jl), gQ.show(), this.resize()
	}, this.jm = function(jl) {
		0 === b4.cU ? jl ? jh.gt(jl) : b4.jn.length && jh.gt(b4.jn) : (b4.bw || (jo.jp.jq = jo.jr.hy()), jh.gt(jo.js(jo.jp.jq)))
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), jh.resize()
	}, this.fY = function(cl) {
		2 === cl ? gQ.gv[0].gw() : jk()
	}, gQ = new gU(L(81), [new fR("⬅️ " + L(71), function() {
		fZ.j2(1)
	}), new fR(L(82), function() {
		jh.ji()
	}), new fR(L(83), function() {
		jh.jj()
	}), new fR(L(84), function() {
		jh.clear()
	}), new fR(L(85), function() {
		jk()
	})]), jh = new gs(L(86)), gQ.gX.appendChild(jh.bF)
}

function jw() {
	this.jx = new jy
}

function jz() {
	var k0, k1, k2;
	k0 = [32, 65, 191, 913, 931], k1 = [64, 127, 688, 930, 1155], k2 = new Array(k0.length + 1);
	for (var aH = 0; aH < k2.length; aH++) {
		k2[aH] = 0;
		for (var dF = aH - 1; 0 <= dF; dF--) k2[aH] += k1[dF] - k0[dF]
	}

	function k9(cl) {
		for (var aH = k0.length - 1; 0 <= aH; aH--)
			if (cl >= k0[aH] && cl < k1[aH]) return aH;
		return -1
	}
	this.k4 = function(ct) {
		return 0 !== (ct = ct.trim()).indexOf("Bot ") && 0 !== ct.indexOf("[Bot] ") && function(ct, k6, k7) {
			var ay = (ct = ct.trim()).length;
			if (ay < k6 || k7 < ay) return !1;
			for (var cl, k8 = 0, aH = 0; aH < ay; aH++)
				if (cl = ct.charCodeAt(aH), k8 += 65 <= cl && cl <= 90 || 1040 <= cl && cl <= 1071 ? 1 : 0, -1 === k9(cl)) return !1;
			if (3 < k8 && k8 > Math.floor(ay / 2)) return !1;
			return !0
		}(ct, 3, 20)
	}, this.hy = function(ct) {
		for (var ay = (ct = ct.trim()).length, ar = [], aH = 0; aH < ay; aH++) {
			var cl, dP = k9(cl = ct.charCodeAt(aH));
			ar.push(k2[dP] + cl - k0[dP])
		}
		return ar
	}, this.jT = function(ar) {
		for (var cl, dL, ct = "", ay = ar.length, aH = 0; aH < ay; aH++)
			for (dL = 1; dL < k2.length; dL++)
				if (ar[aH] < k2[dL]) {
					cl = k0[dL - 1] + ar[aH] - k2[dL - 1], ct += String.fromCharCode(cl);
					break
				} return ct
	}, this.kA = function(ct) {
		for (var ar = this.hy(ct), result = "", aH = 0; aH < ar.length; aH++) result = (result += ar[aH] < 10 ? "00" : ar[aH] < 100 ? "0" : "") + ar[aH].toString(10);
		return result
	}, this.kB = function(ct) {
		for (var ar = new Array(Math.floor(ct.length / 3)), aH = 0; aH < ct.length; aH += 3) ar[Math.floor(aH / 3)] = parseInt(ct.substring(aH, aH + 3));
		return this.jT(ar)
	}, this.kC = function(ct) {
		for (var b0, ar = [ct.length], aH = 0; aH < ct.length; aH++) ar[aH] = ct.charCodeAt(aH) - 48;
		var result = "";
		for (aH = 0; aH < ct.length; aH++) aH === ct.length - 1 || 51 < 10 * ar[aH] + ar[aH + 1] ? result += ar[aH].toString() : (b0 = 10 * ar[aH] + ar[aH + 1], result += String.fromCharCode(b0 + (b0 < 26 ? 65 : 71)), aH++);
		return result
	}, this.kD = function(ct) {
		for (var cl, result = "", aH = 0; aH < ct.length; aH++) 48 <= (cl = ct.charCodeAt(aH)) && cl < 58 ? result += String.fromCharCode(cl) : 65 <= cl && cl < 75 ? result += "0" + (cl - 65).toString() : 75 <= cl && cl < 91 ? result += (cl - 65)
			.toString() : 97 <= cl && cl < 123 && (result += (cl - 71).toString());
		return result
	}, this.kE = function(ct) {
		for (var ay = ct.length, ar = [], aH = 0; aH < ay; aH++)(cl = ct.charCodeAt(aH)) < 58 ? ar.push(ct[aH]) : (cl -= cl < 91 ? 65 : 71, ar.push(String(aA.aB(cl, 10))), ar.push(String(cl - 10 * aA.aB(cl, 10))));
		var ay = ar.length - 2,
			cl = 0,
			kF = [];
		for (aH = 0; aH < ay; aH += 3) kF[cl++] = parseInt(ar[aH] + ar[aH + 1] + ar[aH + 2]);
		return kF
	}, this.kG = function() {
		for (var bf, kH = "", aH = 0; aH < 6; aH++) bf = 48 + kI.random() % 36, bf += 58 <= bf ? 39 : 0, kH += String.fromCharCode(bf);
		return kH
	}
}

function kJ() {
	function kb() {
		ev.kc.cX()
	}

	function kr(dP, kp) {
		0 < kp && (ev.kq[dP] += kp, ev.kq[dP + 1] += kp, ev.kq[dP + 2] += kp)
	}

	function kj(dP) {
		return ev.kq[dP + 2] > ev.kq[dP] && ev.kq[dP + 2] > ev.kq[dP + 1]
	}
	this.kK = -1, this.kL = 0, this.kM = 0, this.kN = 8, this.kO = 32, this.kP = 8, this.kQ = 32, this.kR = [0, 0], this.c4 = [0, 0, 0, 0], this.kS = null, this.kT = !0, this.kU = !1, this.kV = function() {
		-1 !== this.kK && clearTimeout(this.kK), this.kK = -1, this.kS = null, kW.kX()
	}, this.w = function() {
		7 === iY.iZ() || this.kU || (this.kT = !0, this.kL = 0, this.kM = 1, this.kR = [ev.ew.ex[ev.ey].kY[0], ev.ew.ex[ev.ey].kZ[0]], this.c4 = [ev.ew.ex[ev.ey].ka[3], ev.ew.ex[ev.ey].ka[4], ev.ew.ex[ev.ey].ka[5], ev.ew.ex[ev.ey].ka[6]], this
			.kN = ev.ew.ex[ev.ey].ka[7], this.kO = ev.ew.ex[ev.ey].ka[8], this.kP = ev.ew.ex[ev.ey].ka[9], this.kQ = ev.ew.ex[ev.ey].ka[10], this.kT ? this.kK = setTimeout(kb, 16) : this.cX())
	}, this.cX = function() {
		if (8 === iY.iZ() && dD.kd()) this.kK = setTimeout(kb, 16);
		else {
			if (0 === this.kL) {
				var ke = kI.kf();
				if (kI.kg(ev.ew.ex[ev.ey].ka[2]), kW.gD([ev.f0, ev.f1, ev.ew.ex[ev.ey].ka[0], ev.ew.ex[ev.ey].ka[1]]), kI.kg(ke), this.kS = kW.kh(), this.kL++, this.kT) return void(this.kK = setTimeout(kb, 16))
			}
			for (var dP, dG, ke = this.kT ? 10 : 1e6, ke = ev.f1 - this.kM - 1 < ke ? ev.f1 - this.kM - 1 : ke, ki = this.kM + ke, aZ = this.kM; aZ < ki; aZ++)
				for (var aY = 1; aY < ev.f0 - 1; aY++) kj(dP = 4 * (dG = aY + aZ * ev.f0)) ? this.kk(dP, dG, 1) : (this.kk(dP, dG, 0), function(aY, aZ, dP) {
					return 1 < aY && kj(dP - 4) || aY < ev.f0 - 2 && kj(dP + 4) || 1 < aZ && kj(dP - 4 * ev.f0) || aZ < ev.f1 - 2 && kj(dP + 4 * ev.f0)
				}(aY, aZ, dP) && this.km(aY, aZ));
			this.kM = ki, this.kM >= ev.f1 - 1 ? (ev.kn.putImageData(ev.ko, 0, 0, 1, 1, ev.f0 - 2, ev.f1 - 2), aF.aG = !0, this.kV()) : this.kT && (this.kK = setTimeout(kb, 16))
		}
	}, this.kk = function(dP, dG, p) {
		kr(dP, Math.floor(this.kR[p] + this.c4[p] * this.kS[dG] / 1e4) - ev.kq[dP])
	}, this.ks = function(dP, bf, kt, p, c4) {
		kr(dP, Math.floor(this.kR[p] + (1 - bf / kt) * c4) - ev.kq[dP])
	}, this.km = function(a6, a7) {
		for (var dP, bf, kt, ku = a6 - this.kO, kv = a7 - this.kO, kw = a6 + this.kO, ki = a7 + this.kO, ku = ku < 1 ? 1 : ku, kw = kw > ev.f0 - 2 ? ev.f0 - 2 : kw, ki = ev.f1 - 2 < ki ? ev.f1 - 2 : ki, aZ = kv < 1 ? 1 : kv; aZ <= ki; aZ++)
			for (var aY = ku; aY <= kw; aY++) kj(dP = 4 * (aY + aZ * ev.f0)) ? (kt = this.kN + (this.kO - this.kN) * this.kS[aY + ev.f0 * aZ] / 1e4, Math.abs(a6 - aY) > kt || Math.abs(a7 - aZ) > kt || kt <= (bf = Math.sqrt((a6 - aY) * (a6 - aY) +
				(a7 - aZ) * (a7 - aZ))) || this.ks(dP, bf, kt, 1, this.c4[3])) : (kt = this.kP + (this.kQ - this.kP) * this.kS[aY + ev.f0 * aZ] / 1e4, Math.abs(a6 - aY) > kt || Math.abs(a7 - aZ) > kt || kt <= (bf = Math.sqrt((a6 - aY) * (a6 -
				aY) + (a7 - aZ) * (a7 - aZ))) || this.ks(dP, bf, kt, 0, this.c4[2]))
	}
}

function kx() {
	this.bL = aF.bL, this.p = 0, this.ky = 0, this.kz = 0, this.l0 = null, this.l1 = 7, this.l2 = 0, this.w = function() {
		this.kz = 0, this.l0 = [], this.p = 0, this.ky = 0
	}, this.l3 = function(i0) {
		if (b4.bv) this.l4(i0);
		else if (this.l0.push(i0), 2 === b4.cU) {
			for (var aH = 0; aH < this.l0.length; aH++) dB.l5.cX(this.l0[aH]);
			this.l0 = []
		}
	}, this.l4 = function(i0) {
		2 !== b4.cU && (dB.l5.cX(i0), jo.cX(), bQ.l4(this.kz), this.kz === b4.l6 ? (b4.l7.cX(), this.kz = 0, this.p = 0, this.ky = 0, this.bL = aF.bL) : (this.kz++, dl.l8(), dl.c2(!0), l9.lA()))
	}, this.cX = function() {
		y.cX(), b4.bv ? (aF.aG = bQ.l4(-1) || aF.aG, lB()) : (0 !== this.p || aF.bL >= this.bL && (this.bL += aF.bM * Math.floor(1 + (aF.bL - this.bL) / aF.bM), 2 === b4.cU ? lC() : this.lD(), this.p++, 27 < aF.bL - this.l2)) && this.lE(), lF(),
			aF.aG && (aF.aG = !1, lG()), this.l2 = aF.bL
	}, this.lE = function() {
		aF.aG = !0, lH(), this.p = 0
	}, this.lD = function() {
		var lI, aH;
		if (this.ky !== 7 * this.kz) lJ(), l9.lA();
		else {
			lI = !1;
			loop: for (; this.lK() && (lI = !0, lJ(), 2 !== b4.cU) && 0 < this.l0.length;)
				for (aH = this.l1 - 2; 0 <= aH; aH--)
					if (lJ(), 2 === b4.cU) break loop;
			lI ? l9.lA() : (lC(), l9.lL())
		}
	}, this.lK = function() {
		return 0 < this.l0.length && (this.kz++, dB.l5.cX(this.l0[0]), this.l0.shift(), !0)
	}
}

function lM() {
	function ll(player, eA, le, lh) {
		var lv;
		if (dw.dy(le)) lv = b4.dg;
		else {
			if ((lv = dw.dz(le)) === player) return void aM.lw(player, eA - aP.cA.lx(player, eA), 12);
			if (!lb.lc(player, lv)) return void dB.ly.lz(player, lv, eA)
		}
		m0.m1(player, lv) || m0.m2(player) ? (b2.m3[player].push(lh << 2), m0.dc(player, eA, lv), m4.m5(player, !0)) : aM.lw(player, eA, 12)
	}
	this.cX = function() {
		for (var lN = eF.eG.lN, lO = eF.eG.lO, lP = eF.eG.lP, aH = eF.eG.lQ - 1; 0 <= aH; aH--) 65535 === lP[aH] && function(aH, lh, lY) {
			if (6 === lY) {
				if (eF.lT.li(aH, lh)) return eF.eG.lj[aH]++, eF.eG.lP[aH] = 0, 0
			} else {
				var player = eF.eG.eH[aH] >> 3,
					aH = eF.eG.eI[aH];
				aM.lk(player), lY < 4 ? ll(player, aH, lh + dH.lf[lY] << 2, lh) : 4 === lY ? function(player, eA, lh) {
					var aH, lo, lp = dH.lq,
						lr = dH.ls(lh);
					for (aH = 0; aH < 4; aH++)
						if (lo = lr + lp[aH], dw.dy(lo)) return ll(player, eA, lo, lh);
					for (aH = 0; aH < 4; aH++)
						if (lo = lr + lp[aH], dw.lt(lo) && !dw.lu(player, lo)) return ll(player, eA, lo, lh);
					for (aH = 0; aH < 4; aH++)
						if (lo = lr + lp[aH], dw.lt(lo)) return ll(player, eA, lo, lh)
				}(player, aH, lh) : 5 === lY && function(player, eA, lh) {
					var aH, lo, lp = dH.lq,
						lr = dH.ls(lh);
					for (aH = 0; aH < 4; aH++)
						if (lo = lr + lp[aH], dw.lt(lo) && dw.lu(player, lo)) return ll(player, eA, lo, lh);
					for (aH = 0; aH < 4; aH++)
						if (lo = lr + lp[aH], dw.lt(lo)) return ll(player, eA, lo, lh);
					for (aH = 0; aH < 4; aH++)
						if (lo = lr + lp[aH], dw.dy(lo)) return ll(player, eA, lo, lh)
				}(player, aH, lh)
			}
			return 1
		}(aH, dH.lS(lO[aH]), lN[aH] % 64) && (eF.lT.lU(aH), eF.lV.lW(aH))
	}, this.lX = function(player, dG, lY, dN, eA) {
		if (!(5 <= lY)) {
			var lZ = b4.b5;
			if (aP.cA.la(lZ) && lb.lc(player, lZ) && player !== lZ && 0 !== b2.ld[lZ].length && aP.cA.dn(player, 5)) {
				for (var le, en = !1, aH = 0; aH < 4; aH++)
					if (le = dG + dH.lf[aH] << 2, dw.dx(le) && !dw.dy(le) && dw.dz(le) === lZ) {
						en = !0;
						break
					} en && (d8.el(719, 0), lY = eA < 25e3 ? L(87) + " (" + aP.aQ.aR(eA) + ") ⛵" : L(88) + " (" + aP.aQ.aR(eA) + ") 🚢", d8.dO(180, lY, 719, player, ab.lg, ab.ac, -1, !0, void 0, {
					dL: 1,
					dN: dN
				}))
			}
		}
	}
}

function m6() {
	this.m7 = new m8, this.w = function() {
		this.m7.resize()
	}
}

function m9() {
	this.mA = function(player, mB, eA) {
		aP.cA.mC(player, eA, mB) && (mD.mE(player, mB), !aP.cA.dj(mB)) && mF.mG.mH[mB] && mF.mG.mH[mB]--
	}, this.lz = function(player, mB, eA) {
		aP.cA.mI(eA, mB) ? mJ.dc(mB, mK.mL[0]) && (dW.mM(player, mB, mK.mL[0], 1), aP.cA.lx(mB, mK.mL[0]), aM.ep(player, mB), dl.mN(mB, mK.mL[0])) : aM.lw(player, eA, 12)
	}
}

function mO(mP, mQ, mR) {
	this.aY = 0, this.aZ = 0, this.b = 0, this.c = 0, this.resize = function() {
		this.c = Math.min(aP.aS.hQ(mR || .5) * mP[1] * y.bx, y.c - 2 * a3.gap), this.b = Math.min(this.c * (mP[0] / mP[1]), y.b - 2 * a3.gap), this.c = mP[1] * this.b / mP[0], this.aY = a3.gap + mQ[0] * (y.b - this.b - 2 * a3.gap), this.aZ = a3
			.gap + mQ[1] * (y.c - this.c - 2 * a3.gap)
	}, this.mS = function() {
		return this.aY + .5 * this.b
	}
}

function mT() {
	this.mU = null, this.mV = null, this.mW = null, this.mX = null, this.mY = null, this.mZ = null, this.jq = "";
	var ma = 0;
	this.w = function() {
		this.mU = [], this.mV = [], this.mW = [], this.mX = [], this.mY = [0], this.mZ = [0], ma = 0, this.jq = ""
	}, this.mb = function(id, bG, bH, mc) {
		b4.bw || 2 === b4.cU || (0 === this.mY[ma] && (this.mZ[ma] ? (this.mY.push(1), this.mZ.push(0), ma++) : this.mY[ma] = 1), this.mU.push(id), this.mV.push(bG), this.mW.push(void 0 === bH ? 0 : bH), this.mX.push(void 0 === mc ? 0 : mc), this
			.mZ[ma]++)
	}, this.cX = function() {
		0 === this.mY[ma] ? this.mZ[ma]++ : (this.mY.push(0), this.mZ.push(0), ma++)
	}
}

function md() {
	this.me = 0, this.mf = 0, this.mg = 0, this.mh = 0, this.mi = 0, this.mj = 0, this.mk = [0, 0, 0, 0], this.ml = function() {
		this.me = cM.mm(), this.mf = cM.d7(), this.mg = -this.me, this.mh = -this.mf, this.mi = y.b / mn, this.mj = y.c / mn, this.mk[0] = Math.floor(this.mg), this.mk[1] = Math.floor(this.mh), this.mk[2] = Math.floor(this.mk[0] + this.mi + 1),
			this.mk[3] = Math.floor(this.mk[1] + this.mj + 1), l9.mo = !0
	}
}

function mp() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.mq = 13, this.mr = this.emojis.length, this.ms = 676, this.mt = 1024, this.mu = this.emojis.indexOf("💀"), this.mv = this.mu + 1, this.mw = this.emojis.indexOf("🥇"), this.mx = this.emojis.indexOf("😊"), this.my = function(b0) {
		return b0 < this.ms ? String.fromCharCode(55356, 56806 + aA.aB(b0, 26), 55356, 56806 + b0 % 26) : this.emojis[Math.min(b0 - this.ms, this.mr - 1)]
	}, this.mz = function(ct) {
		for (var ay = ct.length - 2, ar = [], aH = 0; aH < ay; aH++) {
			var n0 = ct.charCodeAt(aH) - 56806,
				n1 = ct.charCodeAt(aH + 2) - 56806;
			0 <= n0 && n0 < 26 && 0 <= n1 && n1 < 26 && (ar.push(26 * n0 + n1), aH += 3)
		}
		return ar
	}, this.n2 = function(b0) {
		return b0 < this.ms
	}, this.n3 = function(b0) {
		return b0 >= 1024 - this.mq
	}, this.n4 = function(b0) {
		return b0 >= this.ms && b0 < this.ms + this.mv
	}
}

function n5() {
	var n6, n7, n8;
	this.w = function() {
		n6 = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), n7 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), n8 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var et = ["K ", " Y", "E ", " Z", " z", " s", "S "], n9 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aH = n6.length - 1; 0 <= aH; aH--)
			for (var dF = et.length - 1; 0 <= dF; dF--) n6[aH] = n6[aH].replace(et[dF], n9[dF]);
		if (__fx.settings.realisticNames) n6 = realisticNames;
	}, this.nA = function() {
		var ay = b4.du,
			de = b2.de,
			e0 = b2.e0,
			playerNamesData = b4.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ay)
			for (var aH = 0; aH < ay; aH++) de[aH] = e0[aH] = "Player " + kI.nG(1e3);
		else
			for (aH = 0; aH < ay; aH++) de[aH] = e0[aH] = playerNamesData[aH]
	}, this.gD = function() {
		if (9 === b4.f7) {
			for (var bf = kI.random(), nH = n8, nI = n7, eA = e8.eA, ay = nH.length, at = b4.data.teamPlayerCount[7], de = b2.de, e0 = b2.e0, aH = at - 1; aH >= b4.du; aH--) de[aH] = e0[aH] = nH[(aH + bf) % ay];
			for (ay = nI.length - 1, aH = at; aH < b4.dg; aH++) de[aH] = e0[aH] = nI[eA[aH] ? ay : aH % ay]
		} else(2 === b4.data.playerNamesType ? function() {
			for (var ay = b4.dg, de = b2.de, e0 = b2.e0, playerNamesData = b4.data.playerNamesData, aH = b4.du; aH < ay; aH++) de[aH] = e0[aH] = playerNamesData[aH]
		} : 1 === b4.data.playerNamesType ? function() {
			for (var de = b2.de, e0 = b2.e0, aH = b4.du; aH < b4.dg; aH++) de[aH] = e0[aH] = "Bot " + kI.nG(1e3)
		} : function() {
			for (var nJ = n6, ay = nJ.length, bf = kI.random(), de = b2.de, e0 = b2.e0, aH = b4.du; aH < b4.dg; aH++) de[aH] = e0[aH] = nJ[(aH + bf) % ay]
		})()
	}
}

function nK() {
	this.nL = function(player) {
		aP.cA.nM(player) && d8.dO(80, L(89), 637, 0, ab.nN, ab.ac, -1, !1)
	}, this.nO = function(player) {
		aP.cA.nM(player) && d8.dO(80, L(90), 637, 0, ab.nN, ab.ac, -1, !1)
	}
}

function nP() {
	var nU, nV, nQ = document.createElement("div"),
		nR = document.createElement("div"),
		nS = document.createElement("div"),
		nT = document.createElement("div"),
		iK = [],
		bb = [L(91), L(92), L(93), L(94), L(95), L(96), L(97)],
		nW = [1, 2, 3, 0, 9, 10, 11];

	function nX(aH) {
		fZ.ff(8, 0, new fg(21, {
			j9: nW[aH],
			jA: 0,
			jB: 10
		}))
	}
	this.show = function() {
			this.nf(fZ.eG.ng), document.body.appendChild(nQ)
		}, this.aE = function() {
			fZ.removeChild(document.body, nQ)
		}, this.nf = function(ng) {
			for (var nh = [3, 0, 1, 2, 4, 5, 6], aH = 0; aH < iK.length; aH++) {
				var b = ng[aH];
				nU[nh[aH]][1].ni.textContent = b || ""
			}
		}, this.resize = function() {
			var aH, ej = a3.gap,
				c = aP.aS.hU(.085),
				b = Math.min(4 * c, y.b - 2 * ej),
				ay = iK.length;
			for (aP.aS.hN(nQ, ej, y.c - ej - c, b, c), aP.aS.hK(nQ), aP.aS.hK(nR, 6), aH = 0; aH < ay - 1; aH++) aP.aS.hK(iK[aH].button, 6);
			for (aH = 0; aH < ay; aH++) nU[aH][0].resize(), nU[aH][1].resize();
			for (iK[0].aY = 0, iK[0].button.style.left = aP.aS.hL(iK[0].aY), iK[0].button.style.width = aP.aS.hP(1.7 * c), aH = 1; aH < ay; aH++) iK[aH].aY = iK[aH - 1].aY + iK[aH - 1].button.offsetWidth, iK[aH].button.style.left = aP.aS.hL(iK[aH]
				.aY);
			if (!nV) {
				if (!nj.nk()) return;
				(nV = nj.get(14)).style.width = "24%", nV.style.position = "absolute", nR.appendChild(nV)
			}
			nV.style.left = aP.aS.hL(0), nV.style.top = "7%", nS.hj && (nS.scrollLeft = nS.hj)
		}, nQ.style.position = "absolute", nR.style.width = "25%", nR.style.height = "100%", nR.style.backgroundColor = ab.c9, nS.style.position = "absolute", nS.style.width = "75%", nS.style.height = "100%", nS.style.backgroundColor = ab.c9, nS
		.style.top = nS.style.right = aP.aS.hL(0), aP.aS.hh(nS), nT.style.height = nT.style.maxHeight = "100%", iK.push(new fR("", function() {
			nX(0)
		}, ab.nY)), iK.push(new fR("", function() {
			nX(1)
		}, ab.nZ)), iK.push(new fR("", function() {
			nX(2)
		}, ab.na)), iK.push(new fR("", function() {
			nX(3)
		}, ab.nb)), iK.push(new fR("", function() {
			nX(4)
		}, ab.nc)), iK.push(new fR("", function() {
			nX(5)
		}, ab.nd)), iK.push(new fR("", function() {
			nX(6)
		}, ab.nc)), nU = new Array(iK.length);
	for (var aH = 0; aH < iK.length; aH++) iK[aH].button.style.position = "absolute", nU[aH] = [new ne(bb[aH], iK[aH].button, .25, .45), new ne("", iK[aH].button, .53, .84, 1)], iK[aH].button.style.height = iK[aH].button.style.maxHeight = "100%", iK[
		aH].button.top = aP.aS.hL(0), nT.appendChild(iK[aH].button);
	nS.appendChild(nT), nQ.appendChild(nR), nQ.appendChild(nS)
}

function iu() {
	var gQ, gR, gS, gg;

	function gV() {
		gZ(), 2 !== b4.data.aIncomeType && (b4.data.aIncomeData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		2 === b4.data.aIncomeType ? (aP.g9.h9(gS.gf(), b4.data.aIncomeData, 255), aP.g9.max(b4.data.aIncomeData) || (b4.data.aIncomeType = 0)) : 1 !== b4.data.aIncomeType || b4.data.aIncomeValue || (b4.data.aIncomeType = 0)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(98), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), gj.gm(new gn({
			go: [L(99), L(77), L(75)],
			value: b4.data.aIncomeType
		}, function(p) {
			gZ(), 2 !== p || b4.data.aIncomeData || (b4.data.aIncomeData = new Uint8Array(b4.dg)), b4.data.aIncomeType = p, fZ.ff(22)
		})), gg.push(gj)
	}(gg = []), function(gg) {
		var gj;
		1 === b4.data.aIncomeType && ((gj = new gk).gl("Value"), gj.gp(new nm({
			p: -1,
			value: b4.data.aIncomeValue
		}, 1, 0, function(bF) {
			var value = aA.cI(Math.floor(bF.target.value), 0, 255);
			bF.target.value = b4.data.aIncomeValue = value
		})), gg.push(gj))
	}(gg), function(gg) {
		var gj;
		2 === b4.data.aIncomeType && ((gj = new gk).gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.aIncomeData, 4)), gj.gp(gS), gg.push(gj))
	}(gg), gg))
}

function gk() {
	var no;
	this.nn = [], this.no = document.createElement("div"), this.gl = function(ct, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ct, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.no.appendChild(
			title), title
	}, this.np = function(ct, marginBottom) {
		var nq = document.createElement("p");
		return nq.textContent = ct, nq.style.fontSize = "0.75em", nq.style.lineHeight = "1.2em", nq.style.marginBottom = marginBottom || "0", this.no.appendChild(nq), nq
	}, this.nr = function(ct) {
		var ns = document.createElement("p");
		return ns.textContent = ct, ns.style.fontSize = "1em", ns.style.marginBottom = "0", ns.style.whiteSpace = "pre-wrap", ns.style.overflowWrap = "break-word", this.no.appendChild(ns), ns
	}, this.hB = function(nt, fontSize) {
		var no = document.createElement("div");
		return no.innerHTML = nt, no.style.fontSize = fontSize || "1em", no.style.lineHeight = "1.2em", this.no.appendChild(no), no
	}, this.gm = function(nu) {
		for (var nv = nu.nv, ay = nv.length, aH = 0; aH < ay; aH++) this.no.appendChild(nv[aH])
	}, this.gp = function(dU) {
		return this.nn.push(dU), this.no.appendChild(dU.bF), dU
	}, this.resize = function() {
		for (var ay = this.nn.length, aH = 0; aH < ay; aH++) this.nn[aH].resize && this.nn[aH].resize()
	}, (no = this.no).style.position = "absolute", no.style.height = "auto", no.style.padding = "0.5em"
}

function nw() {
	this.nx = function(hm, ny) {
		hn.gD(11), hn.hr(1, 0), hn.hr(6, 4), hn.hr(1, ny ? 1 : 0), hn.hr(3, 0 === b4.cU ? fd.nz ? 6 : 0 : b4.bw ? 1 : b4.o0 ? 7 : b4.f7 < 7 ? 2 : 8 === b4.f7 ? 4 : 9 === b4.f7 ? 5 : 3), fz.eG.send(hm, hn.i0)
	}, this.o1 = function() {
		hn.gD(58), hn.hr(1, 0), hn.hr(6, 5), hn.hr(8, fz.eG.hz), hn.hr(10, o2.o3), hn.hr(9, o2.o4), hn.hr(10, hs.ht), hn.hr(14, hs.o5), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.o7 = function(dG) {
		hn.gD(27), hn.hr(1, 1), hn.hr(4, 0), hn.hr(22, dG), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.o8 = function(bp, lv) {
		hn.gD(25), hn.hr(1, 1), hn.hr(4, 1), hn.hr(10, bp), hn.hr(10, lv), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.o9 = function(bp, mB) {
		hn.gD(24), hn.hr(1, 1), hn.hr(4, 2), hn.hr(10, bp), hn.hr(9, mB), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oA = function(bp, oB) {
		hn.gD(42), hn.hr(1, 1), hn.hr(4, 3), hn.hr(10, bp), hn.hr(27, oB), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oC = function(bp, dN) {
		hn.gD(31), hn.hr(1, 1), hn.hr(4, 4), hn.hr(10, bp), hn.hr(16, dN), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oD = function(lv) {
		hn.gD(15), hn.hr(1, 1), hn.hr(4, 5), hn.hr(10, lv), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oE = function(p) {
		hn.gD(15), hn.hr(1, 1), hn.hr(4, 6), hn.hr(10, p), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oF = function(oG) {
		hn.gD(6), hn.hr(1, 1), hn.hr(4, 7), hn.hr(1, oG), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oH = function() {
		hn.gD(5), hn.hr(1, 1), hn.hr(4, 8), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oI = function(bp, dG, lv) {
		hn.gD(47), hn.hr(1, 1), hn.hr(4, 10), hn.hr(10, bp), hn.hr(10, lv), hn.hr(22, dG), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oJ = function(oK, oL) {
		hn.gD(24), hn.hr(1, 1), hn.hr(4, 15), hn.hr(9, oL), hn.hr(10, oK), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oM = function(eL) {
		hn.gD(14), hn.hr(1, 1), hn.hr(4, 14), hn.hr(9, eL), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.oN = function(oO, target) {
		var aH, ay = oO.length;
		for (hn.gD(14 + 9 * ay), hn.hr(1, 1), hn.hr(4, 13), hn.hr(9, target), aH = 0; aH < ay; aH++) hn.hr(9, oO[aH]);
		fz.eG.send(fz.eG.o6, hn.i0)
	}
}

function oP() {
	var oQ = [];
	this.mM = function(player, mB, eq, oR) {
		player === b4.b5 || mB === b4.b5 || !oR && aP.cA.dj(player) || aP.cA.dj(mB) || this.dO(b2.de[player] + " supported " + b2.de[mB] + " with " + aP.aQ.aR(eq) + " ressource" + (1 === eq ? "." : "s."))
	}, this.dO = function(ct, eM) {
		ct = {
			bL: bQ.oT(),
			ct: ct,
			eM: eM
		};
		oQ.push(ct), 30 === fZ.fa && fZ.fx().dO(ct)
	}, this.clear = function() {
		oQ = [];
		var ej = fZ.j5(30);
		ej && ej.clear()
	}, this.oU = function() {
		return oQ
	}
}

function oV() {
	this.oW = function() {
		hn.gD(39), hn.hr(1, 0), hn.hr(6, 16), fz.hu.oX(), fz.eG.send(0, hn.i0)
	}, this.oY = function(hm) {
		hn.gD(127), hn.hr(1, 0), hn.hr(6, 17), gL.fk.jG(gH.gJ.data[105].value, 5), gL.fk.jG(gH.gJ.data[106].value, 15), fz.eG.send(hm, hn.i0)
	}, this.oa = function() {
		hn.gD(97), hn.hr(1, 0), hn.hr(6, 18), gL.fk.jG(gH.gJ.data[110].value, 15), fz.eG.send(0, hn.i0)
	}, this.ob = function(i3) {
		var ay = i3.ct.length;
		hn.gD(21 + 16 * ay), hn.hr(1, 0), hn.hr(6, 29), hn.hr(6, i3.fh), hn.hr(8, ay), fj.jL.jM(i3.ct), fz.eG.send(0, hn.i0)
	}, this.oc = function(od, colors, oe, og) {
		i4.w(), i4.hr(1, 0), i4.hr(6, 16), i4.hr(20, Math.min(od, 1e6));
		for (var aH = 0; aH < 11; aH++)
			for (var dF = 0; dF < 3; dF++) i4.hr(8, colors[aH][dF]);
		od = oi.data.oj(oe.trim());
		i4.hr(8, -1 === od ? 255 : od), fj.i5.hy(og.trim().substring(0, 180), 8, i4), fz.eG.send(0, i4.i6())
	}, this.ok = function(data) {
		hn.gD(43), hn.hr(1, 0), hn.hr(6, 25), hn.hr(6, data.fh), gL.fk.jG(data.fi, 5), fz.eG.send(0, hn.i0)
	}, this.g1 = function(data) {
		hn.gD(75), hn.hr(1, 0), hn.hr(6, 27), hn.hr(6, data.fh), gL.fk.jG(data.fi, 5), hn.ol(32, data.value), fz.eG.send(0, hn.i0)
	}
}

function om() {
	var cl, f9 = !1,
		on = !1,
		oo = -1e4,
		op = -1,
		oq = 0;

	function resize(oz) {
		cl = 0, nj.nk() && (ou(oz) || f9) && (f9 = !1, a3.resize(), p0.m7.resize(), p1.w(), p2.w(), p3.resize(), p4.resize(), p5.resize(), fZ.resize(), 1 <= b4.cU ? (p6.resize(!1), p7.resize(), bQ.resize(), cM.resize(), c7.resize(), d8.resize(), aC
			.resize(), aD.resize(), d3.resize(), p8.resize(), aO.resize(), p9.resize(), pA.resize(), dl.resize(), pB.resize(), pC.resize(), cM.pD()) : (iY.pE(), iY.pF()), aF.aG = !0)
	}

	function ot(b0) {
		return b0 && 128 < b0 ? Math.floor(b0) : 128
	}

	function ou(oz) {
		var b, c, pH, d, h;
		if (!(0 < y.os)) return d = ot(document.documentElement.clientWidth), h = ot(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), b = d, c = h, pH = 0 !== a0.id || b < c ? 700 : 1200,
			pH = Math.min(pH / ((b + c) / 2), 1), pH = 0 === gH.gJ.data[1].value ? 2 * pH / 3 : Math.min(pH + (gH.gJ.data[1].value - 1) * (1 - pH) / 2, 1), y.hT = (window.devicePixelRatio || 1) * pH, __fx.hoveringTooltip.canvasPixelScale = y.hT,
			oz && !on ? (on = !0, fZ.removeChild(document.body, ov)) : on && (on = !1, document.body.appendChild(ov)), b = Math.floor(.5 + d * y.hT), c = Math.floor(.5 + h * y.hT), b !== y.b || c !== y.c ? (y.b = b, y.c = c, y.min = i9(b, c), y
				.max = d5(b, c), y.bx = aA.aB(b + c, 2), y.or = b / c, ov.width = b, ov.height = c, ov.style.width = d + "px", ov.style.height = h + "px", op = aF.bL + 1e3, 1) : void 0
	}
	this.b = 0, this.c = 0, this.min = 0, this.max = 0, this.bx = 0, this.or = 1, this.hT = 1, this.os = 0, this.v = function() {
		this.b = ot(document.documentElement.clientWidth) + 2, this.c = ot(document.documentElement.clientHeight) + 2
	}, this.w = function() {
		cl = 1, ov = document.getElementById("canvasA"), 2 === a0.id && (ov.style.webkitUserSelect = "none"), (aa = ov.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, ou(0)
	}, this.cX = function() {
		50 <= ++cl && resize(0), -1 === op || aF.bL < op || (oq++, op = -1, aF.bL + 8e3 <= 2e3 * oq ? console.log("error 3748") : a0.a1.setState(15))
	}, this.ox = function(fE) {
		f9 = !0, resize(fE)
	}, this.oy = function() {
		oo + 1e3 > aF.bL || (oo = aF.bL, resize(0))
	}
}

function pJ() {
	function pK(aH, type, pQ, gz) {
		gH.gJ.data.push({
			p: aH,
			type: type || 0,
			value: pQ || 0,
			pQ: pQ || 0,
			gz: gz || 0
		})
	}

	function pL(aH, type, pQ, gz) {
		gH.gJ.data.push({
			p: aH,
			type: type,
			value: pQ || "",
			pQ: pQ || "",
			gz: gz || 0
		})
	}

	function pM(pR) {
		for (var aH = gH.gJ.data.length; aH < pR; aH++) gH.gJ.data.push(null)
	}
	this.data = [], this.w = function() {
		pK(0, 1, 0, 5), pK(1, 1, 1), pK(2, 0), pL(3, 2), pK(4, 1), pL(5, 2, "Trebuchet MS", 1), pK(6, 0), pK(7, 0, 0), pK(8, 0), pK(9, 1, 1), pK(10, 1), pK(11, 1, 1), pL(12, 2, navigator.language), pK(13), pK(14), pM(100), pL(100, 2), pL(101, 2),
			pL(102, 2), pL(103, 2), pL(104, 2), pL(105, 2), pL(106, 2), pK(107), pK(108), pK(109), pL(110, 2), pK(111), pK(112), pK(113), pL(114, 2), pK(115), pL(116, 2), pK(117, 1), pL(118, 2, "", 2), pK(119, 1, 0, 1), pL(120, 2), pK(121, 1, ~~(
				262144 * Math.random())), pL(122, 2, "Player " + Math.floor(1e3 * Math.random())), pK(123), pL(124), pK(125, 1), pL(126, 2), pK(127, 0, 1), pK(128), pK(129), pK(130), pK(131), pK(132), pL(133, 2), pK(134, 0, 5), pL(135, 2), pL(
				136, 2), pK(137), pK(138), pK(139), pK(140), pK(141), pK(142), pK(143), pK(144), pL(145, 2), pK(146), pK(147), pL(148, 2), pK(149), pK(150, 0, 1), pL(151, 2), pK(152, 0, 5), pK(153, 1), pK(154, 1), pL(155, 2), pL(156, 2), pK(157),
			pK(158), pK(159), pK(160), pL(161, 2), pK(162, 0, 1024), pL(163, 2, "0,0,0"), pL(164, 2, "100,100,100"), pL(165, 2, "30,30,30"), pL(166, 2, "70,70,70"), pL(167, 2, "100,100,100"), pL(168, 2, "85,85,85"), pL(169, 2, "100,100,100");
		for (var aH = 0; aH < 4; aH++) pL(170 + aH, 2, "255,255,255");
		pL(174, 2), pL(175, 2), pK(176, 0, 200), pM(180), pK(180, 0), pK(181, 0)
	}, this.nf = function(p, value) {
		this.data[p].value = value
	}, this.pN = function(p, value) {
		this.nf(p, value);
		var value = String(value),
			ay = value.length;
		5e4 < ay ? console.log("storage value too large: index " + p + " size " + ay) : (gH.gw.save(p, value), gH.gw.save(p, String(this.data[p].gz), !0))
	}, this.pO = function(p) {
		return Number(this.data[p].value)
	}, this.pP = function(p) {
		return String(this.data[p].value)
	}
}

function pS() {
	this.w = function() {
		! function() {
			var data = gH.gJ.data;
			0 === data[2].gz && (y.c > y.b || 0 !== a0.id) && (data[2].value = data[2].pQ = 1);
			0 === data[100].gz && (data[100].value = data[100].pQ = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aH, b0, data = gH.gJ.data,
			ay = data.length;
		for (aH = 0; aH < ay; aH++) data[aH] && data[aH].gz === gH.gw.pV(aH, !0) && (b0 = gH.gw.pW(aH), data[aH].value = null === b0 ? data[aH].pQ : 2 === data[aH].type ? b0 : Number(b0))
	}
}

function pX() {
	var pY, pZ, pa;

	function pe(eO) {
		for (var aH = pY - 1; 0 <= aH; aH--) 0 === pa[pZ[aH]] && b2.b3[pZ[aH]] >= eO && pc(pZ[aH])
	}

	function pb(player) {
		var aJ;
		64 === pa[player] ? pa[player] = 6 : (aJ = b2.b3[player], pa[player] = aJ < 1e3 ? 3 : aJ < 1e4 ? 2 : aJ < 6e4 ? 1 : 0)
	}
	this.w = function() {
		pY = 0, pZ = new Uint16Array(b4.dg), pa = new Uint8Array(b4.dg)
	}, this.cX = function() {
		for (var aH = pY - 1; 0 <= aH; aH--) 64 === pa[pZ[aH]] ? pb(pZ[aH]) : 0 == pa[pZ[aH]]-- && (pb(pZ[aH]), pc(pZ[aH]));
		16e4 <= b2.b3[pd[0]] && (pe(16e4), 3e5 <= b2.b3[pd[0]]) && pe(3e5), aP.cA.pg(b4.b5) && (aM.b1[7] = Math.max(b2.b3[b4.b5], aM.b1[7]))
	}, this.ph = function(player) {
		for (var dF, aH = pY - 1; 0 <= aH; aH--)
			if (player === pZ[aH]) {
				for (pY--, dF = aH; dF < pY; dF++) pZ[dF] = pZ[dF + 1];
				return
			}
	}, this.m5 = function(player, pi) {
		for (var aH = pY - 1; 0 <= aH; aH--)
			if (player === pZ[aH]) return;
		pZ[pY++] = player, pa[player] = pi ? 2 : 64
	}
}

function pj(i3) {
	var pk, pl, gg;
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), pl.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(L(100), [new fR("⬅️ " + L(71), function() {
		fZ.j2(10)
	})]), pl = new gW(pk.gX, ((gg = []).push(function() {
		var pq, gj = new gk,
			pr = new nm(gH.gJ.data[132], 1, function() {
				pq.button.click()
			}),
			ps = new nm(gH.gJ.data[131], 1, function() {
				pr.bF.focus()
			});
		gj.gl(L(101)), gj.gp(ps), ps.bF.style.marginBottom = "0.8em", gj.gl(L(102)), gj.gp(pr);
		return pq = new fR(L(103), function() {
			jA = Math.floor(ps.bF.value), jB = Math.floor(pr.bF.value);
			var jB, jA = {
				pu: Math.min(jA, jB),
				pv: Math.max(jA, jB)
			};
			fZ.ff(8, fZ.j5(10).iX, new fg(21, {
				j9: i3.j9,
				jA: jA.pu,
				jB: jA.pv
			}))
		}, 0, 0, 1), gj.gp(new pw([pq.button])), gj
	}()), gg.push(function() {
		var pq, gj = new gk,
			pr = new nm(gH.gJ.data[134], 1, function() {
				pq.button.click()
			}),
			ps = new nm(gH.gJ.data[133], 0, function() {
				pr.bF.focus()
			});
		return gj.gl(1 === i3.j9 ? L(104) : L(105)), gj.gp(ps), ps.bF.style.marginBottom = "0.8em", gj.gl(L(106)), gj.gp(pr), pq = new fR(L(103), function() {
			var jD = ps.bF.value.slice(0, 20),
				jE = Math.abs(Math.floor(pr.bF.value));
			fZ.ff(8, fZ.j5(10).iX, new fg(22, {
				j9: i3.j9,
				jD: jD,
				jE: jE
			}))
		}, 0, 0, 1), gj.gp(new pw([pq.button])), gj
	}()), gg.push(function() {
		var pq, gj = new gk,
			pr = new nm(gH.gJ.data[152], 1, function() {
				pq.button.click()
			}),
			ps = new nm(gH.gJ.data[151], 0, function() {
				pr.bF.focus()
			});
		return gj.gl(L(107)), gj.gp(ps), ps.bF.style.marginBottom = "0.8em", gj.gl(L(106)), gj.gp(pr), pq = new fR(L(103), function() {
			var jD = ps.bF.value.slice(0, 5),
				jE = Math.abs(Math.floor(pr.bF.value));
			fZ.ff(8, fZ.j5(10).iX, new fg(28, {
				j9: i3.j9,
				jD: jD,
				jE: jE
			}))
		}, 0, 0, 1), gj.gp(new pw([pq.button])), gj
	}()), gg))
}

function iy() {
	var gQ, gR, gS, gg;

	function gV() {
		gZ(), 2 !== b4.data.sResourcesType && (b4.data.sResourcesData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		2 === b4.data.sResourcesType && aP.g9.h9(gS.gf(), b4.data.sResourcesData, 2047)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(108), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), gj.gm(new gn({
			go: [L(99), L(77), L(75)],
			value: b4.data.sResourcesType
		}, function(p) {
			gZ(), 2 !== p || b4.data.sResourcesData || (b4.data.sResourcesData = new Uint16Array(b4.dg)), b4.data.sResourcesType = p, fZ.ff(28)
		})), gg.push(gj)
	}(gg = []), function(gg) {
		var gj;
		1 === b4.data.sResourcesType && ((gj = new gk).gl("Value"), gj.gp(new nm({
			p: -1,
			value: b4.data.sResourcesValue
		}, 1, 0, function(bF) {
			var value = aA.cI(Math.floor(bF.target.value), 0, 2047);
			bF.target.value = b4.data.sResourcesValue = value
		})), gg.push(gj))
	}(gg), function(gg) {
		var gj;
		2 === b4.data.sResourcesType && ((gj = new gk).gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.sResourcesData, 2)), gj.gp(gS), gg.push(gj))
	}(gg), gg))
}

function px() {
	this.L84 = ["Territory", "Income", "Growth", "Numbers", "Statistics", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "This is a contest!", "Accept", "You conquered {0}. 🔥",
		"You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!",
		"Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}",
		"Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.",
		"Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.",
		"{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Player Names", "Back", "Options", "Kingdom Names", "Simple Names",
		"Customized", "Selectable Name", "Uniform", "Mixed", "Team dependent", "Player Count", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "Incoming Boat!", "Incoming Ship!",
		"Ship launched!", "Ship intercepted!", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Additional Income", "Default", "🛠️ List Options", "Start Index",
		"End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Starting Resources", "Quit Game", "More", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains",
		"Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "🧈 Gold Transfer", "Source Account",
		"Target Account", "Amount", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Lobby", "Battle Royale", "1v1", "Zombie", "Chat", "Players",
		"Close {button}", "Ready", "Map", "Game Mode", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Next Contest: ", "Clans", "Clan Members", "Admins", "1v1 Players", "Richest Players", "Patreon Members",
		"🏆 Leaderboards", "Custom Scenario", "⚔️ Play", "Settings", "Colors", "Random", "Clustered", "Territorial Income", "Interest Income", "More Settings", "Reset Scenario", "Open File...", "Save As File...",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader",
		"Seconds Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language",
		"You are leaving Territorial.io.", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Spawning", "Selectable Spawn", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black",
		"Replay Error", "Warning", "Loading...", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "Security Tip", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "{0} defeated {1}!", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe",
		"More Options", "Y-Axis Compression", "Team {0}", "Team {0} won the game!", "📜 Logs", "second played", "seconds played", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "Propaganda", "Report Abuse", "⏳ Connecting...",
		"Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!",
		"🔑 My Account", "📈 Clan Charts", "📰 Propaganda", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Humans", "Bots", "Spectators", "Threshold", "Time", "Type your message here...",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clan Chart", "Refresh",
		"Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ",
		"Status: ", "Gold Transfer", "Copy", "Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
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
		"If you hide Patreon, no one can share their membership with you.", "You are leaving Territorial.io!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!",
		"Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Activated", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map",
		"Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Adjust", "Selectable Color",
		"LEADERBOARD", "Links", "Propaganda Text", "Launch Campaign", "Gold Investment", "Launch", "Loading", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}."
	]
}

function py(title, nt, pz) {
	var pk, q0;
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), q0.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pz = pz || [new fR("⬅️ " + L(71), function() {
		fZ.gc()
	}, ab.q1)], pk = new gU(title, pz), q0 = new q2(pk.gX, nt), aP.aS.textAlign(pk.gX.style, 1)
}

function q3() {
	var c, canvas, br, q4, q5, q6 = -1;

	function q7() {
		var q8, ao = canvas.getContext("2d", {
			alpha: !0
		});
		ao.clearRect(0, 0, c, c), ao.fillStyle = ab.c9, ao.fillRect(0, 0, c, c), 0 === q4 && (ao.fillStyle = ab.q9, ao.fillRect(0, 0, c, c)), ao.fillStyle = ab.am, ao.fillRect(0, 0, c, 1), ao.fillRect(0, 0, 1, c), ao.fillRect(0, c - 1, c, 1), ao
			.fillRect(c - 1, 0, 1, c), q8 = .9 * c / nj.get(0).width, ao.imageSmoothingEnabled = !0, ao.setTransform(q8, 0, 0, q8, Math.floor((c - q8 * nj.get(0).width) / 2), Math.floor((c - q8 * nj.get(0).height) / 2)), ao.drawImage(nj.get(0), 0,
			0), ao.setTransform(1, 0, 0, 1, 0, 0)
	}

	function qF(a6, a7) {
		if (!aC.cD) return a6 <= c + a3.gap && a7 >= c7.aZ ? 9 : -1;
		if (a6 <= 4 * c + a3.gap) {
			if (a7 >= c7.aZ) return 0;
			if (a7 >= c7.aZ - c - q5 * a3.gap) return 2
		} else if (a6 <= 7 * c + a3.gap && a7 >= c7.aZ - c - q5 * a3.gap) return 1;
		return -1
	}
	this.cD = !1, this.w = function() {
		q4 = -1, this.cD = !1, q5 = a0.a1.a2() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		c = c7.c, (canvas = document.createElement("canvas")).width = c, canvas.height = c, br = aP.aS.aT(1, (a0.a1.a2() ? .5 : .45) * c), q7()
	}, this.aL = function() {
		this.cD = !this.cD, this.cD ? (aD.qA(!1), b4.bw && aD.qB && aD.qC(!0), this.qD()) : (q4 = -1, q7(), !b4.o0 || 1 !== b4.cU || b4.bv || b4.bw || a0.a1.setState(1)), aF.aG = !0
	}, this.qD = function() {
		(b4.o0 || b4.bw) && 1 === b4.cU && (p6.c2(!0), b4.bv || setTimeout(function() {
			l9.qE()
		}, 0), a0.a1.setState(0))
	}, this.a5 = function(a6, a7) {
		return 0 <= (q6 = qF(a6, a7)) || !aC.cD || b4.o0 || b4.bw || pA.r || aC.aL(), q6
	}, this.aI = function(a6, a7) {
		a6 = qF(a6, a7);
		a6 !== q4 && (q4 = a6, this.cD || q7(), aF.aG = !0)
	}, this.qI = function(a6, a7) {
		a6 = qF(a6, a7);
		return -1 !== a6 && q6 === a6 && (this.cD ? b4.qJ ? (0 <= a6 && aD.qA(!1), !b4.bw) : (0 === a6 ? b4.qK() : 1 === a6 ? this.aL() : 2 === a6 && fZ.ff(1, 0), !0) : 9 === a6 && (this.aL(), !0))
	}, this.aW = function() {
		var b;
		this.cD ? (b = Math.floor(5.5 * c), aa.setTransform(1, 0, 0, 1, a3.gap, c7.aZ), aa.fillStyle = ab.c9, aa.fillRect(0, 0, b, c), 0 === q4 ? (aa.fillStyle = ab.q9, aa.fillRect(0, 0, 4 * c, c)) : 1 === q4 && (aa.fillStyle = ab.q9, aa
				.fillRect(4 * c, 0, Math.floor(1.5 * c), c)), aa.fillStyle = ab.am, aa.fillRect(0, 0, b, 1), aa.fillRect(0, 0, 1, c), aa.fillRect(4 * c, 0, 1, c), aa.fillRect(0, c - 1, b, 1), aa.fillRect(b - 1, 0, 1, c), aa.font = br, aP.aS
			.textBaseline(aa, 1), aP.aS.textAlign(aa, 1), aa.fillText(L(109), 2 * c, .54 * c), b = .4 * c, aC.al(a3.gap + 4 * c + (1.5 * c - b) / 2, c7.aZ + .3 * c, b), b = 1, aa.setTransform(1, 0, 0, 1, a3.gap, c7.aZ - b * q5 * a3.gap - b *
				c), aa.fillStyle = ab.c9, aa.fillRect(0, 0, 4 * c, c), q4 === b + 1 && (aa.fillStyle = ab.q9, aa.fillRect(0, 0, 4 * c, c)), aa.fillStyle = ab.am, aa.fillRect(0, 0, 4 * c, 1), aa.fillRect(0, 0, 1, c), aa.fillRect(4 * c, 0, 1,
				c), aa.fillRect(0, c - 1, 4 * c, 1), aa.fillText(L(0 === b ? 109 : 110), 2 * c, .54 * c), aa.setTransform(1, 0, 0, 1, 0, 0)) : aa.drawImage(canvas, a3.gap, c7.aZ)
	}, this.qN = function(player) {
		return 0 !== b2.bN[player] && 2 !== b4.cU && !aP.cA.dj(player)
	}, this.al = function(aY, aZ, ay) {
		aa.setTransform(1, 0, 0, 1, aY, aZ), aa.lineWidth = a3.qP, aa.strokeStyle = ab.am, aa.beginPath(), aa.moveTo(0, 0), aa.lineTo(ay, ay), aa.moveTo(0, ay), aa.lineTo(ay, 0), aa.stroke()
	}
}

function qQ() {
	var qR, qS, qT = -15e3,
		qU = !1;

	function a5(bF) {
		qk() || (qU = !0, ql(bF, 1), fz.eG.qm(fz.eG.o6), qn(Math.floor(y.hT * bF.clientX), Math.floor(y.hT * bF.clientY)))
	}

	function qZ(bF) {
		qT = aF.bL, ql(bF, 1), fz.eG.qm(fz.eG.o6), 0 < bF.touches.length && (qR = Math.floor(y.hT * bF.touches[0].clientX), qS = Math.floor(y.hT * bF.touches[0].clientY), qo.qZ(bF) || qn(qR, qS))
	}

	function qn(aY, aZ) {
		fZ.a5(aY, aZ), 0 === b4.cU ? iY.a5(aY, aZ) : aD.qp(aY, aZ) || pA.a5(aY, aZ) || pB.a5(aY, aZ) || p9.qq(aY, aZ) || p8.a5(aY, aZ) || 0 <= aC.a5(aY, aZ) || d3.a5(aY, aZ) || qr.qs(aY, aZ) || p9.qt(aY, aZ)
	}

	function aI(bF) {
		qk() || (qU = !0, ql(bF, 1), qu(Math.floor(y.hT * bF.clientX), Math.floor(y.hT * bF.clientY)))
	}

	function qa(bF) {
		qT = aF.bL, ql(bF, 1), 0 < bF.touches.length && (qR = Math.floor(y.hT * bF.touches[0].clientX), qS = Math.floor(y.hT * bF.touches[0].clientY), qo.qa(bF) || qu(qR, qS))
	}

	function qu(aY, aZ) {
		fZ.aI(aY, aZ), 0 === b4.cU ? iY.aI(aY, aZ) : (qv.qw(aY, aZ), pA.aI(aY, aZ) || (aC.aI(aY, aZ), p9.r() ? p9.aI(aY, aZ) : c7.bu ? c7.aI(aY) && (aF.aG = !0) : (p6.aI(aY, aZ), cM.cN && cM.aI(aY, aZ) && (aF.aG = !0))))
	}

	function qY(bF) {
		qk() || (ql(bF, 1), j4(), 0 === b4.cU ? (iY.click(-1024, -1024), p4.qx()) : (p6.aK(-1024, -1024), aC.aI(-1024, -1024), c7.cW(), cM.cN = !1))
	}

	function qI(bF) {
		qk() || (ql(bF, 1), qy(Math.floor(y.hT * bF.clientX), Math.floor(y.hT * bF.clientY), 2 === bF.button), qr.qX && (qr.qX = !1, bF.preventDefault()))
	}

	function click(bF) {
		qk() || ql(bF, 1)
	}

	function qb(bF) {
		qT = aF.bL, ql(bF, 1), bF && bF.touches && 0 < bF.touches.length && 0 !== b4.cU ? cM.cN = !1 : qo.qz() || (qy(qR, qS, !1), qr.qX && (qr.qX = !1, bF.preventDefault()))
	}

	function qc(bF) {
		qT = aF.bL, ql(bF, 1), qy(qR, qS, !1), qr.qX && (qr.qX = !1, bF.preventDefault())
	}

	function qd(bF) {}

	function qe(bF) {}

	function qf(bF) {
		qk() || ql(bF, 0)
	}

	function qy(aY, aZ, r0) {
		j4(), 0 === b4.cU ? iY.click(aY, aZ) : (p6.aK(aY, aZ), pA.aK(), c7.cW(), cM.cN = !1, p9.click(aY, aZ, r0) ? aF.aG = !0 : aC.qI(aY, aZ))
	}

	function j4() {
		fZ.j4()
	}

	function cV(bF) {
		var aY, aZ, deltaY;
		qk() || (ql(bF, 1), fz.eG.qm(fz.eG.o6), aY = Math.floor(y.hT * bF.clientX), aZ = Math.floor(y.hT * bF.clientY), deltaY = bF.deltaY, 1 === bF.deltaMode && (deltaY *= 16), fZ.cV(aY, aZ, deltaY), 0 === b4.cU ? iY.cV(aY, aZ, deltaY) : p6.cV(aY,
			aZ, deltaY) || (c7.cJ(aY, aZ) ? c7.cV(deltaY) && (aF.aG = !0) : cM.cV(aY, aZ, deltaY)))
	}

	function qg(bF) {
		ql(bF, 0)
	}

	function ql(bF, id) {
		0 === id && fZ.r() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== iY.iZ() && bF.preventDefault()
	}

	function qh(bF) {
		if (__fx.keybindHandler(bF.key)) return;
		qk() || 0 < y.os || (bF = bF.code) && bF.length && (r2.cl(bF, 18) ? r3.r4(3) : r2.cl(bF, 22) ? r3.r4(0) : r2.cl(bF, 20) ? r3.r4(1) : r2.cl(bF, 24) ? r3.r4(2) : r2.cl(bF, 10) ? c7.cS(31 / 32) : r2.cl(bF, 8) ? c7.cS(32 / 31) : r2.cl(bF, 6) ? c7
			.cS(7 / 8) : r2.cl(bF, 4) ? c7.cS(8 / 7) : r2.cl(bF, 14) ? 0 !== b4.cU && cM.cV(Math.floor(y.b / 2), Math.floor(y.c / 2), -200) : r2.cl(bF, 16) ? 0 !== b4.cU && cM.cV(Math.floor(y.b / 2), Math.floor(y.c / 2), 200) : r2.cl(bF, 0) ? b4
			.cU && qv.r5(0) : r2.cl(bF, 2) ? b4.cU && qv.r5(1) : r2.cl(bF, 30) ? b4.cU && qv.r5(2) : r2.cl(bF, 26) ? b4.cU && qv.r6() : r2.cl(bF, 28) && b4.cU && qv.r7())
	}

	function qi(bF) {
		if (!qk() && !(0 < y.os || aF.bL < 400)) {
			var code = bF.code;
			if (code && code.length && !("Enter" === code && fZ.fY(1) || "Space" === code && fZ.fY(0))) return fd.nz ? fd.fe.fY(code) ? void 0 : void("Escape" === code && qr.r8()) : void(8 !== iY.iZ() && iY.fY(bF) ? aF.aG = !0 : "Escape" === code ?
				qr.r8() : r2.cl(code, 18) ? r3.r9(3) : r2.cl(code, 22) ? r3.r9(0) : r2.cl(code, 20) ? r3.r9(1) : r2.cl(code, 24) ? r3.r9(2) : r2.cl(code, 12) ? aD.qA(!b4.qJ) : "Space" === code && b4.cU && (aC.cD && aC.aL(), b4.bw) && aD.qC(!
					1))
		}
	}

	function qj() {
		"hidden" !== document.visibilityState && (aF.aG = !0)
	}

	function qk() {
		return qT + 15e3 > aF.bL
	}

	function resize() {
		y.oy()
	}
	this.qV = 0, this.qW = "", this.qX = !1, this.w = function() {
		ov.addEventListener("mousedown", a5, {
			passive: !1
		}), ov.addEventListener("mousemove", aI, {
			passive: !1
		}), ov.addEventListener("mouseup", qI, {
			passive: !1
		}), ov.addEventListener("click", click, {
			passive: !1
		}), ov.addEventListener("mouseleave", qY, {
			passive: !1
		}), ov.addEventListener("wheel", cV, {
			passive: !1
		}), ov.addEventListener("touchstart", qZ, {
			passive: !1
		}), ov.addEventListener("touchmove", qa, {
			passive: !1
		}), ov.addEventListener("touchend", qb, {
			passive: !1
		}), ov.addEventListener("touchcancel", qc, {
			passive: !1
		}), ov.addEventListener("dragover", qd), ov.addEventListener("drop", qe), ov.addEventListener("dblclick", qf), document.addEventListener("contextmenu", qg), document.addEventListener("keydown", qh), document.addEventListener("keyup",
			qi), document.addEventListener("visibilitychange", qj), window.addEventListener("resize", resize)
	}, this.qs = function(aY, aZ) {
		return !!aD.a5(aY, aZ) || !!(p6.a5(aY, aZ) || cM.a5(aY, aZ) || c7.a5(aY, aZ) || d8.a5(aY, aZ))
	}, this.rA = qk, this.rB = function() {
		return !qU || 0 < qT
	}, this.r8 = function() {
		if (!fZ.r()) return 8 === iY.iZ() ? b4.qJ ? void aD.qA(!1) : pA.r ? void pA.aL() : void aC.aL() : void(7 !== iY.iZ() && 6 === iY.iZ() && p3.rC());
		fZ.fY(2)
	}
}

function hH(rD, size, jK, rE, font) {
	var aH, x = .2,
		canvas = document.createElement("canvas"),
		hJ = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = rD, canvas.height = rD, hJ.font = size + font, hJ.textAlign = "center", hJ.textBaseline = "middle", hJ.fillStyle = "red", aH = 0; aH < jK.length; aH++) hJ.fillText(jK[aH], .5 * rD, .5 * rD);
	return -1 < (canvas = function(rF) {
		var aH, bf, z = rF.data;
		for (aH = z.length - 4; 0 <= aH; aH -= 4)
			if (bf = z[aH], rE <= bf) return Math.floor(aH / (4 * rD));
		return -1
	}(hJ.getImageData(0, 0, rD, rD))) && (x = (canvas - .5 * rD + .1 * size) / size), Math.max(x, 0)
}

function rI() {
	this.ex = null, this.rJ = null, this.rK = null, this.w = function() {
		var rL = [120, 105, 92],
			cos = [12, 12, 60],
			rM = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			rN = [140, 130, 120],
			rO = [12, 12, 76],
			rP = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			rQ = [130, 117, 106],
			rR = [12, 12, 68],
			rS = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.ex = new Array(ev.rT + 1), this.ex[0] = {
			name: L(111),
			b: 230,
			c: 230,
			rU: 1e3,
			rV: 2e3,
			ke: 173
		}, this.ex[1] = {
			name: L(112),
			b: 800,
			c: 800,
			rU: 100,
			rV: 50,
			ke: 43
		}, this.ex[2] = {
			name: L(113),
			b: 512,
			c: 512,
			rU: 128,
			rV: 32,
			ke: 0
		}, this.ex[3] = {
			name: L(114) + " 1",
			b: 960,
			c: 960,
			rU: 60,
			rV: 8,
			ke: 0
		}, this.ex[4] = {
			name: L(115),
			b: 900,
			c: 900,
			rU: 100,
			rV: 5,
			ke: 0
		}, this.ex[5] = {
			name: L(116),
			b: 1e3,
			c: 1e3,
			rU: 100,
			rV: 40,
			ke: 0
		}, this.ex[6] = {
			name: L(117),
			b: 1e3,
			c: 1e3,
			rU: 100,
			rV: 20,
			ke: 0
		}, this.ex[7] = {
			name: L(118),
			b: 1024,
			c: 1024,
			rU: 128,
			rV: 32,
			ke: 0
		}, this.ex[8] = {
			name: L(119),
			b: 820,
			c: 820,
			rU: 200,
			rV: 100,
			ke: 0
		}, this.ex[9] = {
			name: L(120),
			b: 1024,
			c: 1024,
			rU: 128,
			rV: 32,
			ke: 0
		}, this.ex[10] = {
			name: L(121),
			kY: rN,
			kZ: rO,
			ka: rP
		}, this.ex[11] = {
			name: L(122),
			kY: rQ,
			kZ: rR,
			ka: rS
		}, this.ex[12] = {
			name: L(123),
			kY: rQ,
			kZ: rR,
			ka: rS
		}, this.ex[13] = {
			name: L(124),
			kY: rL,
			kZ: cos,
			ka: rM
		}, this.ex[14] = {
			name: L(125),
			kY: rL,
			kZ: cos,
			ka: rM
		}, this.ex[15] = {
			name: L(126),
			kY: rN,
			kZ: rO,
			ka: rP
		}, this.ex[16] = {
			name: L(127),
			kY: rN,
			kZ: rO,
			ka: rP
		}, this.ex[17] = {
			name: L(128),
			kY: rL,
			kZ: cos,
			ka: rM
		}, this.ex[18] = {
			name: L(129),
			kY: rQ,
			kZ: rR,
			ka: rS
		}, this.ex[19] = {
			name: L(130),
			kY: rL,
			kZ: cos,
			ka: rM
		}, this.ex[20] = {
			name: L(131),
			b: 1024,
			c: 1024,
			rU: 128,
			rV: 32,
			ke: 0
		}, this.ex[21] = {
			name: L(114) + " 2",
			b: 940,
			c: 940,
			rU: 80,
			rV: 8,
			ke: 0
		}, this.ex[22] = {
			name: L(132),
			kY: rQ,
			kZ: rR,
			ka: rS
		}, this.ex[23] = {
			name: L(133),
			kY: rN,
			kZ: rO,
			ka: rP
		}, this.ex[ev.rT] = {
			name: ""
		}, this.rJ = new Uint8Array(12);
		for (var aH = 0; aH < 10; aH++) this.rJ[aH] = aH;
		for (this.rJ[10] = 20, this.rJ[11] = 21, this.rK = new Uint8Array(ev.rW), aH = 0; aH < 10; aH++) this.rK[aH] = 10 + aH;
		this.rK[10] = 22, this.rK[11] = 23
	}
}

function iq() {
	var pk, pl, gg;
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), pl.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(L(134), [new fR("⬅️ " + L(71), function() {
		fZ.gc()
	})]), pl = new gW(pk.gX, ((gg = []).push(function() {
		function rc() {
			rd.button.textContent = L(138), rZ.bF.readOnly = !1, rb.bF.readOnly = !1, re.rf(1), re.button.style.color = ab.am
		}
		var gj = new gk,
			rY = (gj.hB("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", gj.gl(L(135)), new nm({
				value: gH.gJ.data[105].value,
				p: -1
			})),
			rZ = (rY.bF.readOnly = !0, gj.gp(rY), gj.gl(L(136), "0.8em"), new nm(gH.gJ.data[148], 0, void 0, function(bF) {
				ra(gH.gJ.data[149].value, bF.target.value)
			})),
			rb = (gj.gp(rZ), gj.gl(L(137), "0.8em"), new nm(gH.gJ.data[149], 1, void 0, function(bF) {
				ra(bF.target.value, gH.gJ.data[148].value)
			})),
			rd = (gj.gp(rb), new fR(L(138), function(bF) {
				return bF.textContent === L(138) ? (bF.textContent = L(139), rZ.bF.readOnly = !0, rb.bF.readOnly = !0, re.rf(0), re.button.style.color = ab.eb, gH.rg.nf(149, rb.bF.value), ra(gH.gJ.data[149].value, gH.gJ.data[
					148].value)) : rc(), !0
			})),
			re = (gj.gp(new pw([rd.button])), new fR(L(140), function(bF) {
				return rZ.bF.readOnly && fz.eG.rh(0) && (aP.aS.hf(bF), rc(), fz.g0.g1({
					fh: 0,
					fi: gH.gJ.data[148].value,
					value: parseInt(gH.gJ.data[149].value, 10)
				})), !0
			}, 1)),
			nq = gj.np(),
			ra = (gj.np(L(141)).style.fontWeight = "bold", function(b0, ct) {
				nq.innerHTML = fZ.eG.ri(b0, gH.gJ.data[105].value, ct)
			});
		return gj.gp(new pw([re.button])), ra(gH.gJ.data[149].value, gH.gJ.data[148].value), gj
	}()), gg))
}

function pw(rj) {
	var no = document.createElement("div");
	this.bF = no, this.rk = rj, this.resize = function() {
		for (var ay = rj.length, aH = 1; aH < ay; aH++) aP.aS.hK(rj[aH], 4)
	};
	var aH, ay = rj.length;
	for (no.style.width = "100%", no.style.height = "2.7em", no.style.marginTop = "0.6em", no.style.border = "inherit", aH = 0; aH < ay; aH++) rj[aH].style.verticalAlign = "top", rj[aH].style.width = (100 / ay).toFixed(2) + "%", rj[aH].style.height =
		"100%", rj[aH].style.fontSize = "0.75em", no.appendChild(rj[aH])
}

function rl() {
	var cZ, rm, rn, ro, c, br, fontSize, rp, rq, o, rr, canvas, ao, rs, rt;

	function gf(aH) {
		return L(0 === aH ? 142 : 1 === aH ? 143 : 2 === aH ? 144 : 145)
	}

	function s0() {
		b4.e2 ? s1 + 4 * a3.gap + c + pC.s2() > c7.aZ ? aa.drawImage(canvas, 2 * a3.gap + pC.s2(), s1 + 2 * a3.gap) : aa.drawImage(canvas, a3.gap, s1 + 3 * a3.gap + pC.s2()) : aa.drawImage(canvas, a3.gap, s1 + 2 * a3.gap)
	}

	function ru() {
		canvas.width = cZ[0].width + o, canvas.height = c + o, (ao = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, cZ[0].width + o, c + o), ao.translate(Math.floor(o / 2), Math.floor(o / 2)), ao.lineWidth = o, ao.fillStyle = 1 === cZ[0].rz ? ab.s3 : ab.ac, s4(), ao.fill(), ao.strokeStyle = 1 === cZ[0].rz ? ab.eX : ab.am, s4(), ao
			.stroke(), aP.aS.textAlign(ao, 1), aP.aS.textBaseline(ao, 1), ao.fillStyle = 1 === cZ[0].rz ? ab.eX : ab.am, ao.font = br[0], ao.fillText(gf(cZ[0].ry), Math.floor(cZ[0].width / 2), Math.floor(.72 * rp[0] * c)), ao.font = br[1], ao
			.fillText(cZ[0].ct, Math.floor(cZ[0].width / 2), Math.floor((rp[0] + .48 * rp[1]) * c))
	}

	function s4() {
		ao.beginPath(), ao.moveTo(rr, 0), ao.lineTo(cZ[0].width - rr, 0), ao.lineTo(cZ[0].width, rr), ao.lineTo(cZ[0].width, c - rr), ao.lineTo(cZ[0].width - rr, c), ao.lineTo(rr, c), ao.lineTo(0, c - rr), ao.lineTo(0, rr), ao.closePath()
	}
	this.w = function() {
		rm = 4, rn = ro = rs = 0, cZ = [], br = new Array(2), fontSize = new Array(2), (rp = new Array(2))[0] = .3, rp[1] = .7, rq = new Array(4), canvas = document.createElement("canvas"), rt = aF.bL + 2e3, this.resize()
	}, this.resize = function() {
		var aH, b;
		for (c = Math.floor((a0.a1.a2() ? .062 : .047) * y.bx), fontSize[0] = Math.floor(.85 * rp[0] * c), fontSize[1] = Math.floor(.85 * rp[1] * c), br[0] = aP.aS.aT(1, fontSize[0]), br[1] = aP.aS.aT(1, fontSize[1]), aH = rq.length - 1; 0 <=
			aH; aH--) rq[aH] = this.measureText(gf(aH) + "000", br[0]);
		if (o = Math.floor(1 + .05 * c), rr = Math.floor(.2 * c), 0 < cZ.length) {
			for (aH = cZ.length - 1; 0 <= aH; aH--) b = this.measureText(cZ[aH].ct + "00", br[1]), cZ[aH].width = b < rq[aH] ? rq[aH] : b;
			ru()
		}
	}, this.cX = function() {
		0 !== rm && (4 === rm ? aF.bL > rt && (rm = 0, 1 === b4.cU) && aO.eS(ev.ew.ex[ev.ey].name, 3, 1, 9) : (1 === rm ? (0 === rn && (ru(), rn = 1e-4), 1 <= (rn += .002 * (aF.bL - rs)) && (ro = 0, rm = 2, rn = 1), aF.aG = !0) : 2 === rm ? ((
			ro += (aF.bL - rs) / 1e3) > cZ[0].bm || 1 < ro && 1 < cZ.length) && (rm = 3) : 3 === rm && ((rn -= .002 * (aF.bL - rs)) <= 0 && (rn = 0, cZ.shift(), rm = 0 < cZ.length ? 1 : 0), aF.aG = !0), rs = aF.bL))
	}, this.measureText = function(ct, br) {
		return aa.font = br, Math.floor(aa.measureText(ct).width)
	}, this.dc = function(rx, aH) {
		this.eS(b2.de[rx], aH, 1, 0 === aH ? 3 : 7)
	}, this.eS = function(ct, ry, rz, bm) {
		var b;
		ct.length && (b = (b = this.measureText(ct + "00", br[1])) < rq[ry] ? rq[ry] : b, cZ.push({
			ct: ct,
			width: b,
			ry: ry,
			rz: rz,
			bm: bm
		}), 0 === rm) && (rn = 0, rm = 1, rs = aF.bL)
	}, this.aW = function() {
		0 !== rm && 0 !== rn && (rn < 1 ? (aa.globalAlpha = rn, s0(), aa.globalAlpha = 1) : s0())
	}
}

function s5(s6, s7, s8, s9, sA, sB) {
	var iH = document.createElement("div"),
		sC = document.createElement("div"),
		sD = document.createElement("div"),
		sE = document.createElement("div"),
		sF = document.createElement("div"),
		sG = document.createElement("div"),
		sH = document.createElement("div"),
		sI = document.createElement("div"),
		sJ = document.createElement("span"),
		sK = document.createElement("div");
	this.sL = new sM(sA, sB), this.sN = new sO(sB), this.sP = [s6, s7, s8, s9], this.sT = function(sU) {
		sU = (sU / 10).toFixed(1) + "%";
		sI.style.width = sU, sJ.innerHTML = sU
	}, this.sV = function() {
		this.sN.aE(sG), this.sL.show(sG)
	}, this.sW = function() {
		this.sL.aE(sG), this.sN.show(sG)
	}, this.sX = function() {
		return sC
	}, this.show = function() {
		document.body.appendChild(iH)
	}, this.aE = function() {
		fZ.removeChild(document.body, iH)
	}, this.resize = function(sY) {
		var sZ = 1 - .4 * a0.a1.a2() * (y.b > 1.6 * y.c),
			sa = aP.aS.hR(.05 * sZ),
			sb = y.c > y.b,
			sc = aP.aS.hR(.07 * sZ + .03 * sb),
			sd = aP.aS.hR(.04 + .02 * sb),
			sb = aP.aS.hR(.02 * sZ + .01 * sb),
			sf = aP.aS.hR(.025);
		iH.style.font = aP.aS.aT(0, sf), sZ < 1 && (sf = aP.aS.aT(0, sZ * sf), sD.style.font = sf, sF.style.font = sf, sK.style.font = sf, sH.style.font = sf, sE.style.font = sf), sC.style.height = aP.aS.hL(sa), sC.style.font = aP.aS.aT(0, .72 *
				sa), aP.aS.hK(sC, 2), sD.style.top = aP.aS.hL(sa), sD.style.height = aP.aS.hL(sc), aP.aS.hK(sD, 2), sE.style.font = aP.aS.aT(0, sZ * aP.aS.hR(.02)), sE.style.top = aP.aS.hL(sa + sc), sE.style.height = aP.aS.hL(sd), aP.aS.hK(sE,
			2), sF.style.top = aP.aS.hL(sa + sc + sd), sF.style.height = aP.aS.hL(sc), aP.aS.hK(sF, 2), sG.style.top = aP.aS.hL(sa + sc + sd + sc), sG.style.height = aP.aS.hL(y.c / y.hT - sa - 3 * sc - sd - sb), sH.style.top = aP.aS.hL(y.c / y
				.hT - sc - sb), sH.style.height = aP.aS.hL(sb), aP.aS.hK(sH, 8), sJ.style.font = aP.aS.aT(0, .8 * sb), sK.style.top = aP.aS.hL(y.c / y.hT - sc), sK.style.height = aP.aS.hL(sc), aP.aS.hK(sK, 8), s6.resize(sD), s7.resize(sD), s8
			.resize(sD), s9.resize(sD), sY ? this.sL.resize(sG) : this.sN.resize()
	};
	sA = this;
	iH.style.position = "absolute", iH.style.top = "0", iH.style.left = "0", iH.style.width = "100%", iH.style.height = "100%", iH.style.backgroundColor = ab.sQ, qr.rB() || (iH.style.backdropFilter = "blur(4px)", iH.style.webkitBackdropFilter =
		"blur(4px)"), sC.style.position = "absolute", sC.style.top = "0", sC.style.left = "0", sC.style.width = "100%", sC.style.display = "flex", sC.style.alignItems = "center";
	for (var ar = [sD, sE, sF, sK], aH = 0; aH < ar.length; aH++) ar[aH].style.position = "absolute", ar[aH].style.left = "0", ar[aH].style.width = "100%", aP.aS.hh(ar[aH]);
	sG.style.position = "absolute", sG.style.left = "0", sG.style.width = "100%", sG.style.font = "inherit", sH.style.position = "absolute", sH.style.left = "0", sH.style.width = "100%", sI.style.position = "absolute", sI.style.top = "0", sI.style
		.left = "0", sI.style.height = "100%", sI.style.width = "50%", sI.style.backgroundColor = ab.an, sJ.innerHTML = "", sJ.style.position = "absolute", sJ.style.top = "50%", sJ.style.left = "50%", sJ.style.transform = "translate(-50%, -50%)", sC
		.appendChild(function() {
			var i = document.createElement("h1");
			return i.textContent = L(146), i.style.margin = "0 auto 0.15em auto", i.style.fontFamily = "Arial Black, Trebuchet MS", i.style.fontSize = "inherit", i.style.fontWeight = "inherit", i
		}()), sD.appendChild(s6.no), sE.appendChild(s7.no), sF.appendChild(s8.no), sH.appendChild(sI), sH.appendChild(sJ), sK.appendChild(s9.no), iH.appendChild(sC), iH.appendChild(sD), iH.appendChild(sE), iH.appendChild(sF), iH.appendChild(sG), iH
		.appendChild(sH), iH.appendChild(sK), sA.sN.show(sG)
}

function iz() {
	var sh, s7, sk, s6, s9, si = [new Array(4), [], new Array(2), new Array(2)],
		sj = new Array(4),
		sl = new Array(2),
		sm = [L(29), L(147), L(148), L(149)];

	function st() {
		var sw;
		!fd.nz || (sw = sh.sL.sx.bF.value.trim().slice(0, 127)).length < 1 || (sh.sL.sx.bF.value = "", fd.fy.sy(sw))
	}

	function ss(t2) {
		fd.eG.sv[3] = 1 - fd.eG.sv[3], su(3, 1, fd.eG.sv[3]), t2 && fz.t3.i1(4), fd.eG.sv[3] && gH.rg.nf(158, fd.eG.sv[0])
	}

	function so(dF, dL) {
		fd.eG.sv[dF] !== dL && (0 === dF && fd.eG.sv[3] && ss(0), su(dF, fd.eG.sv[dF], 0), su(dF, dL, 1), fd.eG.sv[dF] = dL, 0 === dF ? (fz.t3.i1(2, dL), fd.eG.sv[2] ? (sh.sN.aV(), sh.sL.qx(1)) : sh.sL.qx(0), fZ.fx().t5(), fZ.fx().t6()) : 2 === dF &&
			(0 === dL ? (fz.t3.i1(0), sh.sL.aV(), sh.sV()) : (fz.t3.i1(1), sh.sN.aV(), sh.sW())))
	}

	function su(dF, dL, color) {
		sh.sP[dF].iK[dL].rf(color ? ab.t7 : ab.sp)
	}

	function tC(tD) {
		return tD < 7 ? tD + 2 + " " + L(159) : 7 === tD || 10 === tD ? L(147) + " (Full-Sending: " + L(7 === tD ? 160 : 161) + ")" : 8 === tD ? "1v1" : L(162)
	}

	function tG(b0) {
		var tV = aA.aB(b0, 60),
			b0 = b0 % 60;
		return (tV < 10 ? "0" : "") + tV + ":" + (b0 < 10 ? "0" : "") + b0
	}
	this.sz = function() {
		return sh.sL
	}, this.fy = function(fi) {
		so(2, 0);
		var ct = sh.sL.sx.bF.value,
			fi = "@" + fi + " ";
		ct.length && !aP.aQ.hg(ct, " ") && (fi = " " + fi), sh.sL.sx.bF.value = ct += fi, sh.sL.sx.bF.focus()
	}, this.t8 = function() {
		sh.sN.aV()
	}, this.t5 = function() {
		var t9 = fd.eG.sv[0],
			t9 = fd.eG.tB[t9];
		ev.gD(t9.ey, t9.mapSeed), s7.iK[0].button.textContent = L(154) + ": " + ev.ew.ex[t9.ey].name, s7.iK[1].button.textContent = L(155, 0, "Mode") + ": " + tC(t9.tD), s7.iK[2].button.textContent = L(156) + ": " + ev.ew.ex[t9.tE].name, s7.iK[3]
			.button.textContent = L(157, 0, "Next Mode") + ": " + tC(t9.tF), s7.iK[4].button.textContent = L(158) + ": " + tG(t9.tH), s7.resize()
	}, this.t6 = function() {
		var t9 = fd.eG.sv[0],
			tA = fd.eG.tB[t9];
		sh.sT(tA.sU);
		for (var aH = 0; aH < fd.tI.tJ.length; aH++) si[0][aH].ni.textContent = "" + fd.tI.tJ[aH].length;
		var tI = fd.tI.tJ[t9],
			tK = tI.length,
			tL = fd.tI.tM[t9];
		si[2][1].ni.textContent = "" + tK, si[3][1].ni.textContent = "" + tL, s7.iK[4].button.textContent = L(158) + ": " + tG(tA.tH);
		for (aH = 0; aH < 4; aH++) {
			var tN = fd.eG.tB[aH];
			sj[aH] ? 0 === tN.sU && (sj[aH].ni.textContent = ev.ew.ex[tN.ey].name) : sj[aH] = new iL(ev.ew.ex[tN.ey].name, s6.iK[aH].button, 1, 1), aP.aQ.startsWith(sm[aH], "🏆 ") ? tN.tO || (sm[aH] = sm[aH].substring(3), s6.iK[aH].button
				.textContent = sm[aH], s6.iK[aH].button.appendChild(si[0][aH].ni), s6.iK[aH].button.appendChild(sj[aH].ni)) : tN.tO && (sm[aH] = "🏆 " + sm[aH], s6.iK[aH].button.textContent = sm[aH], s6.iK[aH].button.appendChild(si[0][aH]
				.ni), s6.iK[aH].button.appendChild(sj[aH].ni))
		}
		var tA = "",
			tQ = "";
		0 === t9 && (tA = fd.fr.tR(tI, 0, tK), tQ = fd.fr.tR(tI, 0, tL)), sk[0].ni.textContent = tA, sk[1].ni.textContent = tQ, sl[1].ni.textContent = "MP: " + fd.eG.tS[0] + "   SP: " + fd.eG.tS[1] + "   Lobby: " + aP.g9.tT(fd.tI.tJ)
	}, this.tU = function() {
		sh.sL.aV()
	}, this.show = function() {
		sh.show(), this.resize(), fd.message.show()
	}, this.aE = function() {
		sh.aE(), fd.fe.aE(), fd.g5.aE(), fd.message.aE()
	}, this.resize = function() {
		sh.resize(1 - fd.eG.sv[2]), fd.message.resize()
	}, this.fY = function(cl) {
		2 === cl ? fd.eG.sv[3] ? ss(1) : sh.sP[3].iK[0].gw() : cl < 2 && ss(1)
	}, s6 = new sn([new fR(sm[0], function() {
		return so(0, 0), 2
	}), new fR(sm[1], function() {
		return so(0, 1), 2
	}), new fR(sm[2], function() {
		return so(0, 2), 2
	}), new fR(sm[3], function() {
		return so(0, 3), 2
	})], ab.sp), s7 = new sn([new fR("", 0, 2), new fR("", 0, 2), new fR("", 0, 2), new fR("", 0, 2), new fR("", 0, 2)], ab.sq, 1);
	var sr = new sn([new fR(L(150), function() {
		return so(2, 0), 2
	}), new fR(L(151), function() {
		return so(2, 1), 2
	})], ab.sp);
	s9 = new sn([new fR(L(152, 0, 0, 1), function() {
		fZ.j3(), fd.t0(), fz.eG.t1(3240), fZ.ff(5, 5)
	}), new fR(L(153), function() {
		return ss(1), 2
	})], ab.sp), sh = new s5(s6, s7, sr, s9, st, fd.fe.fP);
	for (var aH = 0; aH < 4; aH++) si[0][aH] = new iL("0", s6.iK[aH].button);
	si[2][1] = new iL("0", sr.iK[1].button), si[3][1] = new iL("0", s9.iK[1].button), sk = [new iL("", sr.iK[1].button, 1, 1), new iL("", s9.iK[1].button, 1, 1)], su(0, fd.eG.sv[0], 1), su(2, fd.eG.sv[2], 1), (sl = [new iL(L(80), sh.sX(), 1, 0),
		new iL("", sh.sX(), 1, 1)
	])[0].ni.style.fontSize = "0.4em", sl[1].ni.style.fontSize = "0.4em"
}

function fR(tX, tY, tZ, ta, tb) {
	var self, tc = document.createElement("button");

	function tg() {
		var tm;
		qr.rB() || (tm = aP.color.tn(tZ), !1 !== ta && 0 < tm[0] && tm[0] < 255 && tm[0] === tm[1] && tm[0] === tm[2]) || (128 < tm[0] && 128 < tm[1] && 128 < tm[2] ? tc.style.backgroundColor = aP.color.tp(tZ, -50) : tc.style.backgroundColor = aP
			.color.tp(tZ, tm[3] && tm[3] < 120 ? 150 : 50))
	}

	function tf() {
		if (ta) {
			var tm = aP.color.tn(tZ);
			if (tm[0] === tm[1] && tm[0] === tm[2]) return
		}
		tY && ((tm = tY(this)) ? 2 === tm && tg() : tr(this))
	}

	function ti() {
		this.style.backgroundColor = tZ
	}

	function th() {
		tr(this)
	}

	function tr(z) {
		z.style.backgroundColor = tZ, z.blur()
	}
	this.button = tc, this.gw = tY, this.td = tZ, this.te = function(tj) {
		tj = 1.1 - Math.min(.01 * tX.length, .6) + .2 * tj;
		tc.style.fontSize = tj.toFixed(1) + "em"
	}, this.rf = function(cl) {
		cl ? 1 === cl ? cl = ab.tl : 2 === cl && (ta = 1, cl = ab.tl) : (ta = 0, cl = ab.c9), this.td = tZ = cl, tc.style.backgroundColor = cl
	}, self = this, tc.innerHTML = tX, tc.style.color = tb ? ab.eb : ab.am, tc.style.userSelect = "none", tc.style.outline = "none", tc.style.overflowWrap = "break-word", self.rf(tZ), tc.style.border = "none", tc.style.font = "inherit", self.te(
		0), tc.style.padding = "0em 0.3em", tc.onclick = tf, tc.addEventListener("mouseover", tg), tc.addEventListener("mouseout", th), tc.addEventListener("focus", tg), tc.addEventListener("blur", ti)
}

function ts() {
	var sw, tt, l2, b, c, font, ct;

	function tx(ty) {
		return ty < 10 ? "0" + ty : String(ty)
	}
	this.w = function() {
		ct = L(163)
	}, this.resize = function() {
		b = Math.floor((a0.a1.a2() ? .53 : .36) * y.bx), c = Math.floor(.065 * b), font = aP.aS.aT(1, Math.floor(.9 * c)), l2--, this.setTime()
	}, this.cX = function() {
		this.setTime() && (aF.aG = !0)
	}, this.setTime = function() {
		for (var aJ = new Date, tV = aJ.getUTCMinutes(), tW = aJ.getUTCSeconds(), tv = [0, 10, 20, 25, 30, 35, 40, 45, 50], tw = (tt = 3600 - 60 * tV - tW, tt %= 300, 300), aH = 0; aH < tv.length; aH++)
			if ((60 * tV + tW + tt) % 3600 == 60 * tv[aH]) {
				tw = 0;
				break
			} return tt += tw, sw = ct + tx(Math.floor(tt / 60)) + ":" + tx(tt % 60), l2 !== (l2 = 60 * tV + tW) && (b = aO.measureText(sw, font), b += Math.floor(.4 * c), !0)
	}, this.aW = function() {
		aa.lineWidth = 1 + Math.floor(c / 15), aa.translate(y.b - c, Math.floor(.5 * (y.c + b))), aa.rotate(-Math.PI / 2), aa.fillStyle = ab.am, aa.fillRect(0, 0, b, c), aa.strokeStyle = ab.eX, aa.strokeRect(0, 0, b, c + 10), aa.fillStyle = ab
			.eX, aa.font = font, aP.aS.textBaseline(aa, 1), aP.aS.textAlign(aa, 1), aa.fillText(sw, Math.floor(b / 2), Math.floor(.59 * c)), aa.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function h4() {
	this.tz = function() {
		gH.rg.u0(), gH.rg.u1(), fz.eG.close(0, 3255), 0 === a0.id ? a0.h0 && a0.h0.clear() : 1 === a0.id ? a0.h1.saveString(199, "") : 2 === a0.id && a0.h3.postMessage("clear")
	}, this.u2 = function() {
		2 === a0.id ? a0.h3.postMessage("showConsentForm") : 1 === a0.id && a0.h1.setState(7)
	}, this.u3 = function() {
		this.setState(14)
	}, this.a2 = function() {
		return 1 === gH.gJ.pO(2)
	}, this.u4 = function() {
		gH.gJ.pN(102, "")
	}, this.setState = function(kL) {
		1 === a0.id && 5 <= a0.gz && a0.h1.setState(kL)
	}, this.u5 = function() {
		var u6;
		1 === a0.id && 7 <= a0.gz ? a0.h1.setState(5) : ((u6 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = u6.toString())
	}, this.u7 = function() {
		1 !== a0.id || a0.gz < 17 || a0.h1.saveString(23, document.documentElement.outerHTML)
	}, this.u8 = function() {
		0 !== a0.id && (1 === a0.id ? a0.h1.prepareAd("1688441405") : 2 === a0.id && (0 === a0.gz ? a0.h3.postMessage("prepare ad 2904813909") : a0.h3.postMessage("loadAds 2904813909")))
	}, this.u9 = function(aJ) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && 0 !== a0.gz && (a0.h3.postMessage("showAd"), !0)
	}, this.uA = function() {
		2 === a0.id && a0.gz < 23 && fZ.ff(4, 1, new uB("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + uC.uD + "' target='_blank'>" + uC
			.uD + "</a>", !0, [new fR("⬅️ " + L(71), function() {
				fZ.ff(0)
			}, ab.q1)]))
	}
}

function uE() {
	this.uF = function(player, uG) {
		return -1 !== uG && !!eF.fr.uH(player, uG) && this.uI(player, uG, 0)
	}, this.uI = function(player, uG, uJ) {
		player = function(player, uG, uJ) {
			var uN = eF.fr.uO(player, uG);
			if (-1 === uN) return -1;
			uN = eF.fr.uQ(uN, uG);
			if (-1 === uN) return -1;
			var uK = eF.uM.uR(uN, uG);
			if (0 <= uK) return uK;
			if (eF.uM.uS()) return -1;
			if (0 <= (uK = eF.uM.uR(uG, uN))) return eF.uM.uT(eF.uM.uU(eF.uM.get(uK)));
			if (uN === uG) return eF.uM.uT(new Uint32Array([uN, uG]));
			if (0 <= (uK = eF.uV.uI(uN, uG))) return uK;
			return uJ ? function(uX, player) {
				var uY = mK.uY,
					gJ = (uY.fill(0), [uX]),
					uZ = (uY[uX] = 1, dH.uZ),
					ua = -1,
					ay = gJ.length;
				for (; - 1 === ua && ay;) {
					for (var ar = [], aH = 0; aH < ay; aH++)
						for (var dG = gJ[aH], bq = uY[dG], z = 0; z < 8; z++) {
							var ud, ue, ub = dG + uZ[z],
								av = 4 * ub;
							dw.kj(av) ? (ud = uY[ub], ue = bq + 5 + ((1 & z) << 1), 0 === ud ? (ar.push(ub), uY[ub] = ue) : uY[ub] = Math.min(ue, ud)) : -1 === ua && z % 2 == 0 && dw.uc(player, av) && (ua = dG)
						}
					ay = (gJ = ar).length
				}
				return -1 !== ua ? function(ug, uh) {
					var uZ = dH.uZ,
						ui = -1,
						lY = 0,
						b1 = [];
					for (; uh !== ug;)(lY = function(dG, lY) {
						var uY = mK.uY,
							uZ = dH.uZ,
							bq = uY[dG];
						if (bq - uY[dG + uZ[lY]] != 5 + ((1 & lY) << 1))
							for (var dF = 0; dF < 8; dF++) {
								var z = dF + lY + 6 & 7;
								if (bq - uY[dG + uZ[z]] == 5 + ((1 & z) << 1)) return z
							}
						return lY
					}(uh, lY)) !== ui && (b1.push(uh), ui = lY), uh += uZ[lY];
					b1.push(ug);
					var uK = eF.uM.uR(b1[0], ug);
					if (0 <= uK) return uK;
					return eF.uM.uT(new Uint32Array(b1))
				}(uX, ua) : -1
			}(uG, player) : -1
		}(player, uG, uJ);
		return -1 !== player && (mK.ar[0] = eF.uM.get(player), !0)
	}
}

function uk() {
	var go = ul(ev.ey);
	go && um(go[0], go[1], go[2], go[3], go[4])
}

function ul(ey) {
	return 2 === ey ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === ey ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === ey ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === ey ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === ey ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function um(un, uo, up, uq, ur) {
	for (var aY, aZ, uu, uv, au, ux, us = un.length - 1, ut = ev.f0 + ev.f1, ay = (ut *= ut, up.length), uw = Array(ay), aH = ay - 1; 0 <= aH; aH--) uw[aH] = up[aH] * up[aH];
	var uy = new Array(ay),
		uz = new Array(ay),
		v0 = new Array(ay),
		b0 = kW.kh();
	if (void 0 === ur)
		for (ur = new Array(ay), aH = ay - 1; 0 <= aH; aH--) ur[aH] = 0;
	for (aH = 1; aH < ay; aH++) uy[aH] = uw[aH] - uw[aH - 1], uz[aH] = uq[aH] - uq[aH - 1], v0[aH] = ur[aH] - ur[aH - 1];
	for (aY = ev.f0 - 1; 0 <= aY; aY--)
		for (aZ = ev.f1 - 1; 0 <= aZ; aZ--) {
			for (uu = ut, aH = us; 0 <= aH; aH--) uu = (uv = (aY - un[aH]) * (aY - un[aH]) + (aZ - uo[aH]) * (aZ - uo[aH])) < uu ? uv : uu;
			for (au = uq[ay - 1], ux = ur[ay - 1], aH = 1; aH < ay; aH++)
				if (uu < uw[aH]) {
					au = uq[aH - 1] + i7((uu - uw[aH - 1]) * uz[aH], uy[aH]), ux = ur[aH - 1] + i7((uu - uw[aH - 1]) * v0[aH], uy[aH]);
					break
				} v1(ev.f0 * aZ + aY, au, ux, b0)
		}
}

function v1(p, au, ux, b0) {
	au < 500 ? b0[p] = aA.aB(b0[p] * au * 2, 1e3) : 500 < au && (b0[p] += aA.aB(2 * (1e4 - b0[p]) * (au - 500), 1e3)), b0[p] += aA.aB(ux * (10 * au - b0[p]), 1e3)
}

function v2() {
	var v3 = [];
	this.w = function() {
		v3 = []
	}, this.uS = function() {
		return 65536 === v3.length
	}, this.uR = function(uP, uG) {
		for (var uM = v3, ay = uM.length, aH = 0; aH < ay; aH++) {
			var dP = uM[aH];
			if (dP[0] === uP && dP[dP.length - 1] === uG) return aH
		}
		return -1
	}, this.uU = function(v4) {
		var v5 = new Uint32Array(v4.length);
		return v5.set(v4), v5.reverse()
	}, this.v6 = function(fB, cw) {
		var eU = fB.length - 1,
			v7 = new Uint32Array(eU + cw.length);
		return v7.set(fB, 0), v7.set(cw, eU), v7
	}, this.v8 = function(fB, cw, v9, dG, vA) {
		vA && (v9 = (cw = this.uU(cw)).length - v9 - 2);
		vA = cw.subarray(v9 + 1 + (dG === cw[v9 + 1])), dG = new Uint32Array(fB.length + vA.length);
		return dG.set(fB, 0), dG.set(vA, fB.length), dG
	}, this.uT = function(v4) {
		return v3.push(v4), v3.length - 1
	}, this.get = function(aH) {
		return v3[aH]
	}, this.vC = function() {
		return v3
	}, this.vD = function(uP, uG) {
		return null
	}
}

function io() {
	var pk, vE, vF, vH;

	function vG(aH) {
		fZ.ff(8, fZ.fa, new fg(21, {
			j9: aH,
			jA: 0,
			jB: 10
		}))
	}
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), vE.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, vF = [new fR(L(164), function() {
		vG(1)
	}, 0, 0, 1), new fR(L(165), function() {
		vG(2)
	}, 0, 0, 1), new fR(L(166), function() {
		vG(3)
	}, 0, 0, 1), new fR(L(167), function() {
		vG(0)
	}, 0, 0, 1), new fR(L(147), function() {
		vG(9)
	}, 0, 0, 1), new fR(L(168), function() {
		vG(10)
	}, 0, 0, 1), new fR(L(169), function() {
		vG(11)
	}, 0, 0, 1)], vH = [new fR("⬅️ " + L(71), function() {
		fZ.gc()
	})], pk = new gU(L(170), vH), vE = new vI(vF, pk.gX)
}

function vJ() {
	this.vK = function() {
		for (var ay = fG.fH, ci = fG.fI, vL = [], aH = 0; aH < ay; aH++) {
			var dP = ci[aH];
			aP.cA.vM(dP) && vL.push(dP)
		}
		return vL
	}, this.vN = function() {
		if (0 === e4.e6[b4.vO]) return this.vP();
		pC.vQ(b4.vO);
		for (var vL = [], ay = mK.vR[0], vS = mK.vS, aH = 0; aH < ay; aH++) {
			var dP = vS[aH];
			aP.cA.vM(dP) && vL.push(dP)
		}
		return vL
	}, this.vP = function() {
		var dP = pd[0];
		return aP.cA.vM(dP) ? [dP] : []
	}, this.vT = function(vL) {
		for (var ay = vL.length, aJ = 0, b3 = b2.b3, aH = 0; aH < ay; aH++) aJ += b3[vL[aH]];
		return aJ
	}
}

function vU() {
	this.o3 = 0;
	var vV, vW, vX, vY, vZ, va = this.o4 = 0;

	function vf() {
		vY = vZ = null, va = 0
	}
	this.w = function(tA, vb, vc) {
		fZ.j3(), fd.t0(), iY.setState(10), vY = tA, vZ = vb, va = vc, this.o3 = tA.o3, this.o4 = vc, vV = 0, vW = aF.bL + 4500, fz.eG.o6 = tA.o6, fz.eG.hz === tA.o6 ? (console.log("direct pass"), vX = 0) : (console.log("delayed pass"), fz.eG
			.close(fz.eG.hz, 3247), vX = 2, fz.eG.vd(tA.o6, 5) && fz.eK.o1()), aa.imageSmoothingEnabled = !0, iY.vm();
		vb = nj.vo("loading"), vc = (a0.a1.a2() ? .396 : .25) * y.bx / vb.width;
		aa.setTransform(vc, 0, 0, vc, Math.floor((y.b - vc * vb.width) / 2), Math.floor((y.c - vc * vb.height) / 2)), aa.imageSmoothingEnabled = !1, aa.drawImage(vb, 0, 0), aa.setTransform(1, 0, 0, 1, 0, 0)
	}, this.vg = function() {
		0 < vX && aF.bL > vW && (vX--, vW += 4500, 0 === aF.kz) && 0 === aF.bP() && fz.eG.vd(fz.eG.o6, 5)
	}, this.vi = function() {
		return 10 === iY.iZ() && (fd.vj.vk(vY, vZ, va), vf(), !0)
	}, this.vl = function() {
		10 === iY.iZ() && 2 <= ++vV && (fd.vj.vk(vY, vZ, va), vf())
	}
}

function vp() {
	this.vq = function(dG) {
		b4.o0 ? dB.vr.vq(b4.b5, dG) : fz.eK.o7(dG)
	}, this.vs = function(bp, lv) {
		b4.o0 ? dB.vr.vs(b4.b5, bp, lv) : fz.eK.o8(bp, lv)
	}, this.mE = function(bp, mB) {
		b4.o0 ? dB.vr.vt(b4.b5, bp, mB) : fz.eK.o9(bp, mB)
	}, this.nL = function(bp, dG) {
		dG = (dG << 3) + mK.vu[6];
		b4.o0 ? dB.vr.nL(b4.b5, bp, dG) : eF.vv.vw(b4.b5) && fz.eK.oA(bp, dG)
	}, this.nO = function(bp) {
		849 === bp && (bp = 850);
		var dN = mK.vu[3];
		b4.o0 ? dB.vr.nO(b4.b5, bp, dN) : eF.vx.vy(b4.b5, dN) && fz.eK.oC(bp, dN)
	}, this.vz = function(dN) {
		b4.o0 ? dB.vr.vz(b4.b5, dN) : fz.eK.oC(849, dN)
	}, this.w0 = function(lv) {
		b4.o0 ? dB.vr.w0(b4.b5, lv) : fz.eK.oD(lv)
	}, this.eJ = function(eM) {
		b4.o0 ? dB.vr.w1(b4.b5, eM) : fz.eK.oE(eM)
	}, this.w2 = function(oG) {
		b4.o0 ? dB.vr.w2(b4.b5, oG) : fz.eK.oF(oG)
	}, this.w3 = function() {
		b4.o0 ? dB.vr.w3(b4.b5) : fz.eK.oH()
	}, this.r7 = function() {
		b4.o0 ? dB.vr.r7(b4.b5) : fz.eK.oD(513)
	}, this.w4 = function(bp, dG, lv) {
		b4.o0 ? dB.vr.w4(b4.b5, bp, dG, lv) : fz.eK.oI(bp, dG, lv)
	}
}

function w5() {
	this.w6 = function(player, id) {
		for (var w7 = b2.ld[player], ay = w7.length, aH = 0; aH < ay; aH++)
			if (dH.w8(w7[aH], id)) return !0;
		return !1
	}, this.uO = function(player, dG) {
		for (var w9, wA, av, w7 = b2.ld[player], ay = w7.length, b = ev.f0, wC = dH.dI(dG), wD = dH.dJ(dG), ub = -1, min = ev.f0 * ev.f0 + ev.f1 * ev.f1, id = dw.eC(dH.ls(dG)), aH = 0; aH < ay; aH++)(wA = (wA = wC - (w9 = (av = w7[aH]) >> 2) %
			b) * wA + (wA = wD - ~~((.5 + w9) / b)) * wA) < min && dH.w8(av, id) && (min = wA, ub = w9);
		return ub
	}, this.uQ = function(ug, w9) {
		for (var id = dw.eC(dH.ls(w9)), lp = dH.lq, av = dH.ls(ug), wE = -1, aH = 0; aH < 4; aH++) {
			var lr = av + lp[aH];
			dw.kj(lr) && dw.eC(lr) === id && (-1 === wE || dH.wF(dH.wG(lr), w9) < dH.wF(wE, w9)) && (wE = dH.wG(lr))
		}
		return wE
	}, this.wH = function(player, dG) {
		for (var lp = dH.lq, av = dH.ls(dG), aH = 0; aH < 4; aH++) {
			var lr = av + lp[aH];
			if (dw.lt(lr) && dw.lu(player, lr)) return !0
		}
		return !1
	}, this.uH = function(player, dG) {
		for (var lp = dH.lq, av = dH.ls(dG), aH = 0; aH < 4; aH++) {
			var lr = av + lp[aH];
			if (dw.dy(lr)) return !0;
			if (dw.lt(lr)) {
				lr = dw.dz(lr);
				if (player !== lr && lb.lc(player, lr)) return !0
			}
		}
		return !1
	}, this.wI = function(dG) {
		for (var lp = dH.lq, av = dH.ls(dG), aH = 0; aH < 4; aH++) {
			var lr = av + lp[aH];
			if (dw.lt(lr)) {
				lr = dw.dz(lr);
				if (aP.cA.dj(lr)) return lr
			}
		}
		return -1
	}, this.wJ = function(av) {
		if (dw.kj(av))
			for (var lp = dH.lq, aH = 0; aH < 4; aH++)
				if (dw.dx(av + lp[aH])) return !0;
		return !1
	}, this.wK = function(player, id) {
		for (var jA = player << 3, jB = jA + eF.eG.wL[player], wM = eF.eG.wM, wN = eF.eG.wN, aH = jA; aH < jB; aH++) {
			var wO = wN[aH];
			if (wM[wO] === id) return wO
		}
		return -1
	}, this.wP = function(player) {
		return 0 === eF.eG.wL[player] ? -1 : eF.eG.wN[player << 3]
	}, this.wQ = function(a6, a7) {
		var ay = eF.eG.lQ;
		if (ay < 1) return -1;
		for (var lO = eF.eG.lO, wR = 80, wS = -1, aH = 0; aH < ay; aH++) {
			var wT = dH.wU(a6, a7, lO[aH]);
			wT < wR && (wR = wT, wS = aH)
		}
		return function(aH, a6, a7) {
			if (aH < 0) return;
			var wm = eF.eG.lO[aH],
				wn = dH.wo(wm),
				wm = dH.wq(wm),
				aH = 20 * (.9 + .1 * Math.log10(eF.eG.eI[aH]));
			return aH = Math.max(aH, dH.ws(aP.aS.hU(.02, 1.7))), aA.wt(dH.wu(a6), dH.wv(a7), wn, wm, aH)
		}(wS, a6, a7) ? wS : -1
	}, this.wW = function(dN) {
		for (var ay = eF.eG.lQ, wM = eF.eG.wM, aH = 0; aH < ay; aH++)
			if (wM[aH] === dN) return mK.vu[2] = aH, !0;
		return !1
	}, this.wX = function(player) {
		for (var jA = player << 3, jB = jA + eF.eG.wL[player], wN = eF.eG.wN, eI = eF.eG.eI, eA = 0, aH = jA; aH < jB; aH++) eA += eI[wN[aH]];
		return eA
	}, this.wY = function(player, wZ) {
		wZ = eF.eG.wa[wZ];
		return this.wH(player, wZ[wZ.length - 1])
	}, this.wb = function(ug, w9, wT, wc) {
		var wd = dH.dI(ug),
			ug = dH.dJ(ug),
			wf = dH.dI(w9),
			w9 = dH.dJ(w9),
			wf = (wT = Math.max(wT, 1), wf - wd),
			w9 = w9 - ug,
			wj = aA.aB(Math.abs(wf) * wc, wT),
			wc = aA.aB(Math.abs(w9) * wc, wT);
		return dH.wl(wd + Math.sign(wf) * wj, ug + Math.sign(w9) * wc)
	}, this.ww = function(v4, dG) {
		for (var ay = v4.length - 1, aY = dH.dI(dG), aZ = dH.dJ(dG), aH = 0; aH < ay; aH++) {
			var ug = v4[aH],
				w9 = v4[aH + 1],
				bS = dH.dI(ug),
				ug = dH.dJ(ug),
				bU = dH.dI(w9),
				w9 = dH.dJ(w9);
			if (!(aY !== bS && aY !== bU && Math.sign(aY - bS) === Math.sign(aY - bU) || aZ !== ug && aZ !== w9 && Math.sign(aZ - ug) === Math.sign(aZ - w9))) {
				if (bS === bU || ug === w9) return aH;
				if (Math.abs(aY - bS) === Math.abs(aZ - ug) && Math.abs(aY - bU) === Math.abs(aZ - w9)) return aH
			}
		}
		return -1
	}, this.wx = function() {
		for (var wy = pd[0], eH = eF.eG.eH, lQ = eF.eG.lQ, ar = [], aH = 0; aH < lQ; aH++) aP.cA.wz(wy, eH[aH] >> 3) && ar.push(aH);
		return ar
	}, this.x0 = function(player, v4) {
		for (var jA = player << 3, jB = jA + eF.eG.wL[player], wN = eF.eG.wN, wa = eF.eG.wa, fB = v4[0], cw = v4[v4.length - 1], aH = jA; aH < jB; aH++) {
			var dP = wa[wN[aH]];
			if (dP[0] === fB && dP[dP.length - 1] === cw) return !0
		}
		return !1
	}
}

function ir() {
	var gQ, gR, gg;

	function x3() {
		var eU;
		1 === b4.data.gameMode ? (b4.data.teamPlayerCount || (b4.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), b4.x7.g7()), eU = aP.g9.gB(b4.data.teamPlayerCount, 0), b4.data.numberTeams = eU) : (2 === b4.data
			.botDifficultyType && (b4.data.botDifficultyType = 0), 1 === b4.data.spawningType && (b4.data.spawningType = 0))
	}

	function gV() {
		1 !== b4.data.gameMode && (b4.data.teamPlayerCount = null), x8(), b4.data.canvas = null, fZ.ff(5, 5)
	}

	function x8() {
		jo.jp.w(), gH.rg.nf(156, jo.jr.hy())
	}

	function x1() {
		b4.data.isReplay = 0, x8(), b4.x7.gG(), iY.x9(), b4.x7.gC(), b4.data.canvas = 2 === b4.data.mapType ? ev.x5 : null, b4.xA(), b4.xB = 1
	}

	function xQ() {
		x3();
		for (var ar = [xF(), xG(), xH()], aH = 3; aH < 6; aH++) fZ.removeChild(gR.xR, gR.xS[aH].no), gR.xS[aH] = ar[aH - 3], gR.xR.appendChild(gR.xS[aH].no);
		gR.resize()
	}

	function xF() {
		var xT, gj = new gk;
		return gj.gl(L(174)), xT = 0 === b4.data.gameMode ? [L(175), L(75)][b4.data.colorsType] : b4.data.numberTeams + " Team" + (1 === b4.data.numberTeams ? "" : "s"), gj.hB(xT), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(21)
		}).button])), gj
	}

	function xG() {
		var gj = new gk,
			ar = (gj.gl(L(30)), [L(77) + ": " + e8.e9[b4.data.botDifficultyValue], L(78), L(79), L(75)]);
		return gj.hB(ar[b4.data.botDifficultyType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(25)
		}).button])), gj
	}

	function xH() {
		var gj = new gk,
			ar = (gj.gl("Spawning"), [L(175), L(176), L(75)]);
		return gj.hB(ar[b4.data.spawningType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(24)
		}).button])), gj
	}
	this.show = function() {
		gQ.show(), this.resize(), gQ.gX.scrollTop = fZ.eG.xU[0]
	}, this.aE = function() {
		fZ.eG.xU[0] = gQ.gX.scrollTop, gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU("🔧 " + L(171), [new fR("⬅️ " + L(71), gV), new fR(L(172), x1)]), x3(), b4.data.canvas || (2 === b4.data.mapType ? b4.data.canvas = ev.x5 : 1 === b4.data.mapType ? b4.data.canvas = ev.x6(ev.gE(b4.data), 0).x5 : (b4.data
		.mapType = 0, b4.data.passableWater = b4.data.passableMountains = 1, b4.data.canvas = ev.x6(ev.gE(b4.data), b4.data.mapSeed).x5)), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk,
			dT = (gj.gl(L(154)), b4.data.canvas);
		dT.style.width = "100%", gj.gp({
			bF: dT
		}), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(20)
		}).button])), gg.push(gj)
	}(gg = []), function(gg) {
		var gj = new gk;
		gj.gl(L(80)), gj.gp(new nm({
			p: -1,
			value: b4.data.playerCount
		}, 1, 0, function(bF) {
			var playerCount = aA.cI(Math.floor(bF.target.value), 1, 512);
			bF.target.value = b4.data.playerCount = playerCount, 1 === b4.data.gameMode && (bF = aP.g9.gB(b4.data.teamPlayerCount, 0), b4.x7.g7(), aP.g9.gB(b4.data.teamPlayerCount, 0) !== bF) && xQ()
		})), gg.push(gj)
	}(gg), function(gg) {
		var gj = new gk;
		gj.gl(L(155)), gj.gm(new gn({
			go: ["Battle Royale", "Teams"],
			value: b4.data.gameMode
		}, function(p) {
			b4.data.gameMode !== p && (b4.data.gameMode = p, xQ())
		})), gg.push(gj)
	}(gg), gg.push(xF()), gg.push(xG()), gg.push(xH()), function(gg) {
		var gj = new gk,
			ar = (gj.gl(L(70)), [L(73), L(74), L(75)]);
		gj.hB(ar[b4.data.playerNamesType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(23)
		}).button])), gg.push(gj)
	}(gg), function(gg) {
		var gj = new gk,
			ar = (gj.gl(L(98)), [L(99), L(77) + ": " + b4.data.aIncomeValue, L(75)]);
		gj.hB(ar[b4.data.aIncomeType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(22)
		}).button])), gg.push(gj)
	}(gg), function(gg) {
		var gj = new gk,
			ar = (gj.gl(L(177)), [L(99), L(77) + ": " + b4.data.tIncomeValue, L(75)]);
		gj.hB(ar[b4.data.tIncomeType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(26)
		}).button])), gg.push(gj)
	}(gg), function(gg) {
		var gj = new gk,
			ar = (gj.gl(L(178)), [L(99), L(77) + ": " + b4.data.iIncomeValue, L(75)]);
		gj.hB(ar[b4.data.iIncomeType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(27)
		}).button])), gg.push(gj)
	}(gg), function(gg) {
		var gj = new gk,
			ar = (gj.gl(L(108)), [L(99), L(77) + ": " + b4.data.sResourcesValue, L(75)]);
		gj.hB(ar[b4.data.sResourcesType]), gj.gp(new pw([new fR(L(173), function() {
			fZ.ff(28)
		}).button])), gg.push(gj)
	}(gg), function(gg) {
		var gj = new gk;
		gj.gl(L(179)), gj.gp(new pw([new fR(L(180), function() {
			fZ.j3(), b4.x7.gN(), fZ.eG.xU[0] = 0, fZ.ff(19)
		}).button])), gj.gp(new pw([new fR(L(181), function() {
			xV.xW()
		}).button])), gj.gp(new pw([new fR(L(182), function() {
			return xV.xX(), !0
		}).button])), gg.push(gj)
	}(gg), gg))
}

function xY() {
	var b, c, xZ;

	function xr(fB, z, xp, xd, dZ) {
		z = xq(fB, z + 1 + 2 * xd & 3);
		! function(fB, cw) {
			return 1 < Math.abs(fB % b - cw % b) || 1 < Math.abs(xu(fB) - xu(cw))
		}(fB, z) && 0 === dZ[z << 2] && (dZ[z << 2] = xp)
	}

	function xu(dP) {
		return Math.floor((dP + .5) / b) % c
	}

	function xq(dP, z) {
		return dP + xZ[z]
	}
	this.jT = function(ct) {
		var aH, xa, ay, xb, xe = jQ;
		for (gL.fk.xf(gL.fk.xg(ct)), ev.ew.ex[ev.ey].b = ev.f0 = b = xe.hq(12), ev.ew.ex[ev.ey].c = ev.f1 = c = xe.hq(12), xZ = [-b, -1, b, 1], ev.x5 = document.createElement("canvas"), ev.x5.width = ev.f0, ev.x5.height = ev.f1, ev.kn = ev.x5
			.getContext("2d", {
				alpha: !1
			}), ev.ko = ev.kq = null, ev.ko = ev.kn.getImageData(0, 0, ev.f0, ev.f1), ev.kq = ev.ko.data, aP.g9.xk(ev.kq), ay = xe.hq(12), xa = xe.hq(5), xb = iF(b * c - 1), aH = 0; aH < ay; aH++) ! function(at, dP, xc, xd) {
			var aH, z, xe = jQ,
				dZ = ev.kq,
				xl = dP,
				xm = dP,
				xn = 0,
				xo = 1 + xc,
				xp = 2 - xc;
			for (dZ[dP << 2] = xo, aH = 0; aH < at; aH++) z = xe.hq(2), dP = xq(dP, z), dZ[dP << 2] === xo ? xn % 2 == 1 && xr(xm, xn + 2 * xd + 3, xp, xd, dZ) : dZ[dP << 2] = xo, xr(dP, z, xp, xd, dZ), xr(xm, z, xp, xd, dZ), xm = dP, xn = z;
			xq(dP, 0) === xl ? (xr(dP, 0, xp, xd, dZ), xr(xl, 0, xp, xd, dZ)) : xq(dP, 1) === xl && (xr(dP, 0, xp, xd, dZ), xr(xl, 2, xp, xd, dZ));
			0 === at && (xr(xl, 0, xp, xd, dZ), xr(xl, 2, xp, xd, dZ))
		}(xe.hq(xa), xe.hq(xb), 1 === xe.hq(1), 1 === xe.hq(1));
		var aY, aZ, hC, xv, xw, xx, dZ = ev.kq,
			xy = !0,
			kY = ev.ew.ex[ev.ey].kY,
			kZ = ev.ew.ex[ev.ey].kZ;
		for (aZ = 0; aZ < c; aZ++)
			for (xv = !0, xw = xy, aY = xx = 0; aY < b; aY++) hC = 4 * aZ * b + 4 * aY, xx <= aY && 0 < dZ[hC] && (xw = 2 === dZ[hC], xv) && (xv = !1, xw !== xy) ? (xy = xw, xx = aY + 1, aY = -1) : (xw ? (dZ[hC] = kZ[0], dZ[1 + hC] = kZ[1], dZ[
				2 + hC] = kZ[2]) : (dZ[hC] = kY[0], dZ[1 + hC] = kY[1], dZ[2 + hC] = kY[2]), dZ[3 + hC] = 255);
		ev.kn.putImageData(ev.ko, 0, 0), ev.xj = !0, ev.kc.w(), aF.aG = !0
	}
}

function xz() {
	this.hy = function() {
		var xa = function() {
				for (var mZ = jo.jp.mZ, ay = mZ.length, max = 0, aH = 0; aH < ay; aH++) max = Math.max(max, mZ[aH]);
				return iF(Math.max(max, 1))
			}(),
			b = (dU = b4.data, (b = i4).w(), b.hr(12, hs.rVersion), b.p += 43, b.hr(2, dU.mapType), b.hr(8, dU.mapProceduralIndex), b.hr(8, dU.mapRealisticIndex), b.hr(14, dU.mapSeed), b.y9(dU.mapName, 5), 2 === dU.mapType && b.yA(dU.canvas), b
				.hr(1, dU.passableWater), b.hr(1, dU.passableMountains), b.hr(10, dU.playerCount), b.hr(10, dU.humanCount), b.hr(9, dU.selectedPlayer), b.hr(1, dU.gameMode), b.hr(2, dU.playerMode), b.hr(2, dU.battleRoyaleMode), b.hr(4, dU
					.numberTeams), b.hr(1, dU.isZombieMode), b.hr(1, dU.isContest), b.hr(1, dU.isReplay), b.yB(dU.elo, 2, 14), b.hr(1, dU.colorsType), b.hr(1, dU.colorsPersonalized), b.yB(dU.colorsData, 10, 18), b.hr(1, dU.selectableColor), b.yB(
					dU.teamPlayerCount, 4, 10), b.hr(1, dU.neutralBots), b.hr(2, dU.botDifficultyType), b.hr(4, dU.botDifficultyValue), b.yB(dU.botDifficultyTeam, 4, 4), b.yB(dU.botDifficultyData, 10, 4), b.hr(2, dU.spawningType), b.hr(14, dU
					.spawningSeed), b.yB(dU.spawningData, 11, 12), b.hr(1, dU.selectableSpawn), b.hr(2, dU.playerNamesType), b.yC(dU.playerNamesData, 10, 5), b.hr(1, dU.selectableName), b.hr(2, dU.aIncomeType), b.hr(8, dU.aIncomeValue), b.yB(dU
					.aIncomeData, 10, 8), b.hr(2, dU.tIncomeType), b.hr(8, dU.tIncomeValue), b.yB(dU.tIncomeData, 10, 8), b.hr(2, dU.iIncomeType), b.hr(8, dU.iIncomeValue), b.yB(dU.iIncomeData, 10, 8), b.hr(2, dU.sResourcesType), b.hr(11, dU
					.sResourcesValue), b.yB(dU.sResourcesData, 10, 11), b.yB(dU.gK, 10, 30), ! function(xa) {
					var b = i4,
						mU = jo.jp.mU,
						bG = jo.jp.mV,
						bH = jo.jp.mW,
						mc = jo.jp.mX,
						ay = mU.length;
					b.hr(5, xa), b.hr(30, ay), b.hr(30, jo.jp.mZ.length);
					for (var aH = 0; aH < ay; aH++) {
						var cl = mU[aH];
						b.hr(4, cl), b.hr(9, bG[aH]), 0 === cl ? b.hr(22, bH[aH]) : 1 === cl ? (b.hr(10, bH[aH]), b.hr(10, mc[aH])) : 2 === cl ? (b.hr(10, bH[aH]), b.hr(9, mc[aH])) : 3 === cl ? (b.hr(10, bH[aH]), b.hr(27, mc[aH])) : 4 === cl ? (b
							.hr(10, bH[aH]), b.hr(16, mc[aH])) : 5 === cl || 6 === cl ? b.hr(10, bH[aH]) : 7 === cl ? b.hr(1, bH[aH]) : 10 === cl && (b.hr(20, bH[aH]), b.hr(22, mc[aH]))
					}
				}(xa), ! function(xa) {
					for (var b = i4, mY = jo.jp.mY, mZ = jo.jp.mZ, ay = mY.length, aH = 0; aH < ay; aH++) b.hr(1, mY[aH]), b.hr(xa, mZ[aH])
				}(xa), i4.p),
			dU = aA.aB(b - 1, 6) + 1,
			xa = (hn.jR(6 * dU) !== i4.ar.length && i4.ar.push(0), ! function() {
				var b = i4;
				b.p = 24, b.hr(31, b.ar.length), b.p = 12, b.hr(12, function() {
					for (var ar = i4.ar, ay = ar.length, yE = hs.rVersion, aH = 3; aH < ay; aH++) yE = yE + ar[aH] & 4095;
					return yE
				}())
			}(), jQ.w(i4.ar), fj.fk.y7(fj.fk.y8(dU)));
		return jQ.t0(), i4.w(), xa
	}
}

function yF() {
	this.yG = [L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197), L(198)];
	var yH = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.yI = new Array(yH.length), this.w = function() {
		var ar = gH.gJ.data[155].value.split(";"),
			at = ar.length;
		if (function() {
				for (var ay = yH.length, aH = 0; aH < ay; aH++) r2.yI[aH] = yH[aH]
			}(), !(at > yH.length))
			for (var aH = 0; aH < at; aH++) ar[aH].length && (this.yI[aH] = ar[aH])
	}, this.yK = function(p, code) {
		for (var yI = this.yI, yL = yH, ct = (yI[p] = code, ""), ay = yI.length, yM = [], aH = 0; aH < ay; aH++) yM.push(yI[aH] === yL[aH] ? "" : yI[aH]);
		ay--;
		for (aH = 0; aH < ay; aH++) ct += yM[aH] + ";";
		gH.rg.nf(155, ct += yM[ay])
	}, this.yN = function() {
		gH.rg.nf(155, ""), this.w()
	}, this.cl = function(code, p) {
		return code === this.yI[p] || code === this.yI[p + 1]
	}
}

function yO() {
	this.yP = new mp, this.dZ = new yQ
}

function yR() {
	this.sU = 0, this.ey = 0, this.mapSeed = 0, this.tD = 0, this.tE = 0, this.tF = 0, this.tO = 0, this.tH = 0, this.spawningSeed = 0, this.o6 = 0, this.o3 = 0, this.yS = [], this.yT = 1048575, this.yU = 0, this.yV = [{
		ey: 0,
		mapSeed: 0,
		tD: 0,
		bL: 100,
		tO: 0
	}, {
		ey: 1,
		mapSeed: 0,
		tD: 1,
		bL: 200,
		tO: 0
	}, {
		ey: 2,
		mapSeed: 0,
		tD: 2,
		bL: 300,
		tO: 0
	}, {
		ey: 3,
		mapSeed: 0,
		tD: 3,
		bL: 400,
		tO: 0
	}, {
		ey: 0,
		mapSeed: 0,
		tD: 9,
		bL: 500,
		tO: 0
	}, {
		ey: 1,
		mapSeed: 0,
		tD: 10,
		bL: 600,
		tO: 0
	}, {
		ey: 2,
		mapSeed: 0,
		tD: 8,
		bL: 700,
		tO: 0
	}, {
		ey: 3,
		mapSeed: 0,
		tD: 3,
		bL: 800,
		tO: 0
	}]
}

function yW() {
	function yb(player) {
		for (var yY = b2.yY[player], ay = yY.length, yl = Math.max(aA.aB(ay, 12), 1), yk = dw.yk, bf = kI.nG(ay), aH = 0; aH < ay; aH += yl)
			for (var lr = yY[(aH + bf) % ay], z = 3; 0 <= z; z--) {
				var lo = lr + yk[z];
				if (dw.eB(lo)) return {
					av: lo,
					id: dw.eC(lo),
					dP: player
				}
			}
		return null
	}

	function yg(player, yn) {
		var eA = aP.cA.yo(player, e8.yp[e8.eA[player]]);
		b2.m3[player].push(yn.av), m0.dc(player, eA, yn.dP), m4.m5(player, !0)
	}
	this.cX = function(player) {
		return !!ev.yX(ev.ey) && !!b4.data.passableMountains && 0 !== b2.yY[player].length && function(player) {
			var ya = yb(player);
			if (null === ya) return !1;
			! function(player) {
				for (var fI = fG.fI, fH = fG.fH, ay = Math.min(fH, 12), hS = kI.nG(fH), ym = mK.ym, yY = b2.yY, eU = 0, aH = 0; aH < ay; aH++) {
					var dP = fI[(aH + hS) % fH];
					dP !== player && yY[dP].length && lb.lc(player, dP) && (ym[eU++] = dP)
				}
				mK.vR[0] = eU
			}(player);
			var yd = function(yh) {
				for (var ay = mK.vR[0], ym = mK.ym, aH = 0; aH < ay; aH++) {
					var yn = yb(ym[aH]);
					if (null !== yn && yn.id === yh) return yn
				}
				return null
			}(ya.id);
			return null !== yd ? (yg(player, yd), !0) : function(player, yh) {
				var ay = mF.yi.yj;
				if (0 !== ay)
					for (var av = mF.yi.gJ[kI.nG(ay)] << 2, yk = dw.yk, z = kI.nG(4);;) {
						if (av += yk[z], dw.eB(av)) {
							if (dw.eC(av) === yh) return yg(player, {
								av: av,
								dP: b4.dg
							}), !0;
							break
						}
						if (!dw.dy(av)) break
					}
				return !1
			}(player, ya.id)
		}(player)
	}
}

function yq() {
	var yr = {
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
		ys = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.yt = function(og) {
		return og.replace(ys, function(match) {
			return yr[match] || match
		})
	}, this.aR = function(b0) {
		var aH, yu, yv, yw, yx;
		if (b0 < 0) return "-" + this.aR(Math.abs(b0));
		if (b0 < 1e3) return b0.toString();
		for (yu = Math.floor(Math.log(b0 + .5) / Math.log(10)) + 1, yv = Math.floor((yu - 1) / 3), yx = (yw = b0.toString()).substring(yu - 3, yu), aH = 1; aH < yv; aH++) yx = yw.substring(yu - 3 * (aH + 1), yu - 3 * aH) + " " + yx;
		return yw.substring(0, yu - 3 * yv) + " " + yx
	}, this.aU = function(dP, yu) {
		return dP.toFixed(yu) + "%"
	}, this.yy = function(b0, yz) {
		return b0.toFixed(aA.cI(Math.floor((void 0 === yz ? 3 : yz) - Math.log10(Math.max(b0, 1))), 0, 8))
	}, this.z0 = function(b0, cT, yu) {
		return (b0 * cT).toFixed(yu)
	}, this.z1 = function(username) {
		var lo, lr = username.indexOf("[");
		return !(lr < 0) && 1 < (lo = username.indexOf("]")) - lr && lo - lr <= 8 ? username.substring(lr + 1, lo).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.z1;
	this.dX = function(ct) {
		for (var dF = Math.floor(.5 * ct.length + .5), pR = Math.floor(.5 * (dF - 1)), aH = 0; aH < pR; aH++)
			for (var dL = -1; dL < 2; dL += 2) {
				var cl = dF + dL * aH;
				if (" " === ct[cl]) return [this.z2(ct.substring(0, cl)), this.z3(ct.substring(cl))]
			}
		return [ct.substring(0, dF), ct.substring(dF)]
	}, this.z3 = function(ct) {
		for (var ay = ct.length, aH = 0; aH < ay; aH++)
			if (" " !== ct[aH]) return ct.substring(aH);
		return ct
	}, this.z2 = function(ct) {
		for (var aH = ct.length - 1; 0 <= aH; aH--)
			if (" " !== ct[aH]) return ct.substring(0, aH + 1);
		return ct
	}, this.z4 = function(ct, bq) {
		return ct.split("(")[0] + "(🧈 " + bq.toFixed(2) + ")"
	}, this.startsWith = function(ct, z5) {
		return ct.substring(0, z5.length) === z5
	}, this.hg = function(ct, z5) {
		var ay = ct.length;
		return ct.substring(ay - z5.length, ay) === z5
	}, this.gu = function(ar, z6, z7) {
		var ct = "",
			ay = ar.length - 1;
		z7 = z7 || "";
		for (var aH = 0; aH < ay; aH++) ct += z7 + ar[aH] + z7 + ",", (aH + 1) % z6 == 0 && (ct += "\n");
		return ct += z7 + ar[ay] + z7
	}, this.z8 = function(ct, n0, n1) {
		return ct.replace(new RegExp(n0, "g"), n1)
	}
}

function z9() {
	var zA;
	this.w = function() {
		if (b4.e2) {
			var zG = 1 - b4.zH;
			zA = new Array(e4.e6.length);
			for (var aH = b4.zI - 1; 0 <= aH; aH--) {
				var zJ = e4.e6[aH + zG];
				zA[zJ] = zC.eG.zD(20, e4.zE[zJ])
			}
			9 === b4.f7 && (zA[1] = zC.eG.zD(20, e4.zE[1]))
		} else zA = [zC.eG.zD(20, e4.zE[7])]
	}, this.aW = function() {
		var zK = mn;
		if (!(5 <= zK)) {
			var zL = y.b,
				zM = y.c,
				bS = zN / zK,
				bT = zO / zK,
				bU = (zL + zN) / zK,
				bV = (zM + zO) / zK,
				hS = -20 * zK,
				zP = .5 * hS,
				zQ = ev.f0 << 4,
				ay = eF.eG.lQ,
				lO = eF.eG.lO,
				eH = eF.eG.eH,
				zR = e4.zR,
				dT = zA,
				hJ = aa;
			3 < zK && (hJ.globalAlpha = .5 * (5 - zK));
			for (var aH = 0; aH < ay; aH++) {
				var us = lO[aH],
					aY = zL * (us % zQ / 16 - bS) / (bU - bS) + zP,
					us = zM * (Math.floor(us / zQ) / 16 - bT) / (bV - bT) + zP;
				zL < aY || zM < us || aY < hS || us < hS || (hJ.setTransform(zK, 0, 0, zK, aY, us), hJ.drawImage(dT[zR[eH[aH] >> 3]], 0, 0))
			}
			hJ.globalAlpha = 1, hJ.setTransform(zK, 0, 0, zK, 0, 0)
		}
	}
}

function zU(data) {
	var pk, zV;

	function zY(fE) {
		var ay = data.data.length;
		if (ay) {
			for (var jA, max = min = parseInt(data.data[0][0]), aH = 1; aH < ay; aH++) var bA = parseInt(data.data[aH][0]),
				min = Math.min(bA, min),
				max = Math.max(bA, max);
			jA = fE < 0 ? min + fE : max + 1, fZ.ff(8, fZ.fx().iX, new fg(21, {
				j9: data.j9,
				jA: jA,
				jB: jA + Math.abs(fE)
			}))
		}
	}
	if (this.show = function() {
			pk.show(), this.resize()
		}, this.aE = function() {
			pk.aE()
		}, this.resize = function() {
			pk.resize(), zV.resize()
		}, this.fY = function(cl) {
			2 === cl && pk.gv[0].gw()
		}, data.zW) {
		pk = new gU(L(151), [new fR("⬅️ " + L(71), function() {
			fZ.gc()
		})]);
		var z = {
				za: [],
				ha: [L(212), L(213), L(214) + " ↗"],
				zb: [12, 50, 38]
			},
			gK = b4.data.gK;
		if (gK)
			for (var ay = gK.length, za = z.za, de = b2.de, aH = 0; aH < ay; aH++) za.push([{
				b0: aH + 1 + ".",
				aJ: 0
			}, {
				b0: de[aH],
				aJ: 0
			}, {
				b0: fj.fk.aR(gK[aH], 5),
				aJ: 1,
				fi: gK[aH],
				fl: 0
			}]);
		zV = new zc(pk.gX, z)
	} else {
		var z = data.data.length ? 0 : 1,
			pz = [new fR("⬅️ " + L(71), function() {
				fZ.gc()
			}), new fR(L(199), function() {
				zY(-10)
			}, z, 0, 1), new fR(L(200), function() {
				zY(10)
			}, z, 0, 1), new fR(L(201), function() {
				fZ.ff(11, 10, new pj({
					j9: data.j9
				}))
			})],
			ha = [L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209), L(210), L(211), L(168), L(169), "Audit Log"];
		pk = new gU(ha[data.j9], pz), ! function() {
			var aH, z = {
					za: []
				},
				za = z.za,
				zd = data.data,
				ay = zd.length;
			ay && 0 === zd[0][0] && 0 <= (p = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.j9]) && (fZ.eG.ng[p] = zd[0][1]);
			var cT = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.j9],
				yu = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.j9],
				p = [
					[L(215), L(216) + " ↗", L(217)],
					[L(215), L(218), L(219), L(220) + " ↗"],
					[L(215), L(216) + " ↗", L(219)],
					[L(215), L(216) + " ↗", L(219)],
					[L(212), L(221), L(222) + " ↗", L(223) + " ↗", L(224)],
					[L(212), L(221), L(225) + " ↗", L(136) + " ↗", L(226)],
					[L(212), L(221), L(227) + " ↗", L(228) + " ↗", L(137)],
					[L(212), L(221), L(225) + " ↗", L(136) + " ↗", L(229)],
					[L(212), L(221), L(222) + " ↗", L(223) + " ↗", L(224)],
					[L(215), L(216) + " ↗", L(219)],
					[L(215), L(216) + " ↗", L(230)],
					[L(215), L(216) + " ↗", L(219)],
					[L(212), L(221), L(222) + " ↗", L(223) + " ↗", L(231)]
				];
			if (z.ha = p[data.j9], z.zb = [
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
				][data.j9], 0 === data.j9 || 2 === data.j9 || 3 === data.j9 || 9 === data.j9 || 10 === data.j9 || 11 === data.j9)
				for (aH = 0; aH < ay; aH++) za.push([{
					b0: zd[aH][0] + 1 + ".",
					aJ: 0
				}, {
					b0: zd[aH][1],
					aJ: 1,
					fi: zd[aH][4],
					fl: zd[aH][3]
				}, {
					b0: (cT * zd[aH][2]).toFixed(yu),
					aJ: 0
				}]);
			else if (12 === data.j9)
				for (aH = 0; aH < ay; aH++) {
					var zg = zd[aH][3];
					za.push([{
						b0: "" + zd[aH][0],
						aJ: 0
					}, {
						b0: "" + zd[aH][4],
						aJ: 0
					}, {
						b0: zd[aH][5],
						aJ: 1,
						fi: zd[aH][1],
						fl: 0
					}, {
						b0: zd[aH][6],
						aJ: 1,
						fi: zd[aH][2],
						fl: 0
					}, {
						b0: fc.bl(zg),
						aJ: 0
					}])
				} else if (1 === data.j9)
					for (aH = 0; aH < ay; aH++) za.push([{
						b0: zd[aH][0] + 1 + ".",
						aJ: 0
					}, {
						b0: zd[aH][1],
						aJ: 0
					}, {
						b0: (cT * zd[aH][2]).toFixed(yu),
						aJ: 0
					}, {
						b0: zd[aH][3],
						aJ: 1,
						fi: zd[aH][5],
						fl: zd[aH][4]
					}]);
				else if (4 === data.j9 || 5 === data.j9 || 6 === data.j9 || 7 === data.j9 || 8 === data.j9)
				for (aH = 0; aH < ay; aH++) {
					var zh = zd[aH][5];
					4 === data.j9 || 8 === data.j9 ? "100%" === (zh = (zh % 64 * 100 / (zh >> 6)).toFixed(0) + "%") && (4 === data.j9 ? zh += " (" + L(232) + ")" : zh += " (" + L(233) + ")") : 5 === data.j9 ? 32768 <= zh && (zh = -(zh - 32768)) :
						zh = (cT * zh).toFixed(yu), za.push([{
							b0: "" + zd[aH][0],
							aJ: 0
						}, {
							b0: "" + zd[aH][6],
							aJ: 0
						}, {
							b0: zd[aH][7],
							aJ: 1,
							fi: zd[aH][1],
							fl: zd[aH][2]
						}, {
							b0: zd[aH][8],
							aJ: 1,
							fi: zd[aH][3],
							fl: zd[aH][4]
						}, {
							b0: "" + zh,
							aJ: 0
						}])
				}
			zV = new zc(pk.gX, z)
		}()
	}
}

function zi() {
	var rn, rs;
	this.w = function() {
		rn = 1, rs = 0
	}, this.cX = function() {
		0 < rn && (rs = 0 === rs ? aF.bL + 16 : rs, rn = (rn -= .001 * (aF.bL - rs)) < 0 ? 0 : rn, rs = aF.bL, aF.aG = !0)
	}, this.aW = function() {
		0 < rn && (aa.fillStyle = "rgba(0,0,0," + rn + ")", aa.fillRect(0, 0, y.b, y.c))
	}
}

function zl() {
	this.zm = null, this.w = function() {
		10 !== b4.f7 ? this.zm = null : this.zm = new Uint32Array(b4.dg)
	}, this.cX = function() {
		10 === b4.f7 && this.fr()
	}, this.fr = function() {
		for (var dP, target, aw, zm = this.zm, ci = fG.fI, ah = b2.e1, aH = fG.fH - 1; 0 <= aH; aH--)(dP = ci[aH]) >= b4.du || (target = Math.max(aA.aB(ah[dP], 4), 2048), aw = Math.max(mD.zn(dP), 100), zm[dP] += aA.aB(aw * target, 1e4), zm[dP] >
			target && (zm[dP] = target))
	}, this.zo = function(player, eA) {
		return eA > this.zm[player] ? (eA = this.zm[player], this.zm[player] = 0) : this.zm[player] -= eA, eA
	}
}

function zp() {
	this.size = 0, this.p = 0, this.i0 = null, this.w = function(i0) {
		this.p = 0, this.i0 = i0, this.size = i0.length
	}, this.t0 = function() {
		this.i0 = null
	}, this.hq = function(size) {
		for (var b0 = 0, i0 = this.i0, pR = this.p + size - 1, aH = this.p; aH <= pR; aH++) b0 |= (i0[aH >> 3] >> 7 - (7 & aH) & 1) << pR - aH;
		return this.p += size, this.p > 8 * this.size && console.error("Unwrapper Overflow"), b0
	}, this.jU = function(size) {
		var dL = size >> 1;
		return (1 << dL) * this.hq(size - dL) + this.hq(dL)
	}, this.jW = function(zq) {
		return this.size === hn.jR(zq)
	}, this.zr = function(zs, zt, zu) {
		var eU = this.hq(zs);
		if (!eU) return null;
		for (var zs = Math.max(eU, zu), ar = new(zt <= 8 ? Uint8Array : zt <= 16 ? Uint16Array : Uint32Array)(zs), aH = 0; aH < eU; aH++) ar[aH] = this.hq(zt);
		zu = ar[eU - 1];
		return zu && ar.fill(zu, eU), ar
	}, this.zv = function(zs, zw, zu) {
		var eU = this.hq(zs);
		if (!eU) return null;
		for (var zs = Math.max(eU, zu), ar = new Array(zs), aH = 0; aH < eU; aH++) ar[aH] = this.zx(zw);
		return ar.fill(ar[eU - 1], eU), ar
	}, this.zx = function(zs) {
		return gL.jL.jX(this.hq(zs))
	}, this.zy = function() {
		var ct = fj.fk.y7(fj.fk.y8(this.hq(30))),
			ct = aP.aQ.z8(ct, "_", "/");
		ct = aP.aQ.z8(ct, "-", "+");
		for (var zz = "";
			(ct.length + zz.length) % 4;) zz += "=";
		ct = "data:image/png;base64," + ct + zz;
		var a00 = new Image;
		a00.onload = function() {
			jo.jv.a01(a00), a00.onload = null, a00 = null
		}, a00.src = ct
	}
}

function a02() {
	this.a03 = function(a04, p, a05) {
		var rD = a04.height,
			dT = aP.aS.hI(rD, rD),
			hJ = aP.aS.getContext(dT);
		return function(b, hJ, a05) {
			hJ.fillStyle = a05, hJ.beginPath(), hJ.arc(b / 2, b / 2, .47 * b, 0, 2 * Math.PI), hJ.fill()
		}(rD, hJ, a05), hJ.drawImage(a04, -p * rD, 0), dT
	}, this.a07 = function(a08) {
		var hJ, rF, rD = a08.height;
		return a08.width === rD && (rF = (hJ = aP.aS.getContext(a08, !0)).getImageData(0, 0, rD, rD), aP.a09.a0A(rF.data, rD, rD, .9), hJ.putImageData(rF, 0, 0)), a08
	}
}

function a0B() {
	var bX = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		a0C = [ab.a0D, ab.a0D, ab.a0E, ab.a0F, ab.a0G, ab.a0H, ab.a0I, ab.a0E, ab.a0J, ab.eb, ab.a0K],
		a0L = [
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
		a0M = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function a0g(yS, fi, a0i) {
		for (var dL = yS.length - 1; 0 <= dL; dL--) {
			var dU = yS[dL];
			0 === dU.id && dU.fi === fi && (dU.dR = "[Redacted Message]", a0i) && (dU.a0j = 1)
		}
	}
	this.a0N = function(a0O) {
		var a0P, tu;
		return a0O.id < 5 && (a0P = "@" + fj.fk.aR(a0O.fi, 5)), 0 === a0O.id ? a0P + ": " + a0O.dR : 1 === a0O.id ? (tu = "@" + fj.fk.aR(a0O.target, 5), 0 === a0O.a0Q ? 32768 <= a0O.value ? a0P + " voted with " + (a0O.value - 32768 + 1) +
				" gold against " + tu + " to weaken the latter's admin position. 📉" : a0P + " voted with " + (a0O.value + 1) + " gold for " + tu + " to strengthen the latter's admin position. 💪" : 1 === a0O.a0Q ? a0P + " sent " + Math.floor(a0O
					.value / 100) + " 🧈 gold to " + tu + "." : a0P + " voted with " + (a0O.value / 10).toFixed(1) + " points for " + tu + " to acknowledge the latter as clan leader. ✅") : 2 === a0O.id ? 0 === a0O.a0Q ? a0P +
			" was 🔇 muted for 1 Hour." : 1 === a0O.a0Q ? "The username of " + a0P + " was ✂️ redacted. Duration: 1 Day" : a0P + " 👢 was kicked." : 3 === a0O.id ? a0P + fc.bi(a0O.a0Q, fc.bd[a0O.a0Q][a0O.value]) + "@" + fj.fk.aR(a0O.target, 5) +
			fc.bk(a0O.a0Q, fc.bd[a0O.a0Q][a0O.value]) : 4 === a0O.id ? a0P + fc.bi(5, fc.bd[5][a0O.a0Q]) + "@" + fj.fk.aR(a0O.target, 5) + fc.bk(5, fc.bd[5][a0O.a0Q]) : 5 === a0O.id ? a0M[a0O.a0Q] : 6 === a0O.id ? "You are about to mention " +
			a0O.value + " player" + (1 === a0O.value ? "" : "s") + ". This action will cost " + (Math.max(10 * a0O.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === a0O.id ? a0O.dR : void 0
	}, this.a0R = function(a0O, sw) {
		return {
			a0O: a0O,
			dR: sw,
			a0S: 0,
			fontSize: 1,
			a0T: 0,
			a0U: a0O.id ? ab.a0V : ab.am
		}
	}, this.a0W = function(player, a0X) {
		return (2 === a0X ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.a0Y = function(fT) {
		return a0C[fT]
	}, this.a0Z = function(fT, ft) {
		return fT < 3 || 7 === fT ? a0L[fT][0] : 4 === fT ? a0L[fT][ft < 1 ? 0 : ft < 10 ? 1 : 2] : a0L[fT][ft < 10 ? 0 : 1]
	}, this.a0a = function(ft) {
		return 0 === ft
	}, this.a0b = function(a0X, fi) {
		for (var tJ = fd.tI.tJ, tI = tJ[a0X], ay = tI.length, aH = 0; aH < ay; aH++)
			if (fi === tI[aH].fi) return tI[aH];
		for (var dL = 0; dL < tJ.length; dL++)
			if (a0X !== dL)
				for (ay = (tI = tJ[dL]).length, aH = 0; aH < ay; aH++)
					if (fi === tI[aH].fi) return tI[aH];
		return null
	}, this.fs = function(dU) {
		return !!fd.fq && dU.fi === fd.fq.fi
	}, this.tR = function(tI, a0c, a0d) {
		var jJ = [];
		loop: for (var aH = a0c; aH < a0d; aH++) {
			var jc = aP.aQ.z1(tI[aH].username);
			if (jc) {
				for (var dL = jJ.length - 1; 0 <= dL; dL--)
					if (jc === jJ[dL].name) {
						jJ[dL].eU++;
						continue loop
					} jJ.push({
					name: jc,
					eU: 1
				})
			}
		}
		if (jJ.sort(function(dF, dL) {
				return dL.eU - dF.eU
			}), 0 === jJ.length) return "";
		for (var ct = jJ[0].name + ": " + jJ[0].eU, aH = 1; aH < jJ.length; aH++) ct += "   " + jJ[aH].name + ": " + jJ[aH].eU;
		return ct
	}, this.a0e = function(fT, ft, fu) {
		return 0 === bX[fT].length ? "Rank: " + (ft + 1) : bX[fT] + " Rank: " + (ft + 1) + (3 !== fT && fu < 100 ? "   " + bX[3] + " Rank: " + (fu + 1) : "")
	}, this.a0f = function(fi) {
		for (var tB = fd.eG.tB, aH = 0; aH < tB.length; aH++) a0g(tB[aH].yS, fi);
		a0g(fd.message.a0h(), fi, 1), fd.yP.a0f(fi)
	}
}

function ic() {
	var pk, pl, gg, gj;

	function a0k() {
		oi.a0l !== gH.gJ.data[12].value ? (oi.w(), fZ.ff(8, 1, new fg(30))) : fZ.ff(1)
	}
	this.show = function() {
			pk.show(), this.resize()
		}, this.aE = function() {
			pk.aE()
		}, this.resize = function() {
			pk.resize(), pl.resize()
		}, this.fY = function(cl) {
			2 === cl && pk.gv[0].gw()
		}, pk = new gU(L(234), [new fR("⬅️ " + L(71), a0k), new fR(L(235), function() {
			fZ.j3(), gH.rg.u0(), fZ.ff(2)
		})]), gg = [], (gj = new gk).gl(L(236)), gj.np(L(237)), gg.push(gj),
		function(gg) {
			var gj = new gk,
				ar = (gj.gl(L(259)), oi.data.a0r());
			gj.gm(new gn({
				go: ar,
				value: oi.data.a0s(ar)
			}, function(p) {
				return gH.rg.nf(12, ar[p].split(":")[0]), !0
			})), gg.push(gj)
		}(gg),
		function(gg) {
			var gj = new gk,
				a0p = (gj.gl(L(257)), []);
			gj.gp(new pw([new fR(L(258), function(bF) {
				r2.yN();
				for (var aH = 0; aH < a0p.length; aH++) a0p[aH].bF.value = r2.yI[aH];
				return aP.aS.hf(bF), !0
			}).button]));
			for (var aH = 0; aH < r2.yG.length; aH++) {
				gj.np(r2.yG[aH]);
				for (var dF = 0; dF < 2; dF++) {
					var p = 2 * aH + dF,
						sx = new nm({
							value: r2.yI[p],
							p: -1
						});
					sx.bF.a0q = p, a0p.push(sx), sx.bF.addEventListener("keydown", function(bF) {
						bF.preventDefault();
						var code = bF.code;
						bF.target.value = code, r2.yK(bF.target.a0q, code)
					}), dF && (sx.bF.style.marginLeft = "4%"), sx.bF.style.width = "48%", gj.gp(sx)
				}
			}
			gg.push(gj)
		}(gg), (gj = new gk).gl(L(146)), gj.gm(new gn({
			go: ["1", "2"],
			value: p3.a0o - 1
		}, function(aH) {
			p3.a0o = aH + 1
		})), gg.push(gj), (gj = new gk).gl(L(238)), gH.gJ.data[1].go = [L(239), L(240), L(241), L(242)], gj.gm(new gn(gH.gJ.data[1])), gg.push(gj), (gj = new gk).gl(L(243)), gH.gJ.data[9].go = [L(240), L(244), L(245)], gj.gm(new gn(gH.gJ.data[9])),
		gg.push(gj), (gj = new gk).gl(L(246)), gH.gJ.data[11].go = [L(247), L(248), L(249)], gj.gm(new gn(gH.gJ.data[11])), gg.push(gj), (gj = new gk).gl(L(250)), gj.gp(new gr(gH.gJ.data[2])), gg.push(gj), (gj = new gk).gl(L(251)), gj.gp(new gr(gH.gJ
			.data[7])), gg.push(gj), (gj = new gk).gl(L(252)), gj.gp(new gr(gH.gJ.data[8])), gg.push(gj), (gj = new gk).gl(L(253)), gj.gp(new nm(gH.gJ.data[5])), gg.push(gj), (gj = new gk).gl(L(254)), gj.gp(new gr(gH.gJ.data[13], L(255))), gj.gp(
			new gr(gH.gJ.data[14], L(256))), gg.push(gj), pl = new gW(pk.gX, gg)
}

function a0t() {
	function a0v() {
		8 === b4.f7 && 1 === b4.cU && a0z.a10.a11()
	}

	function a0u(player) {
		b4.bv ? (a12.a13(player), fG.a14(), b4.o0 && b4.l7.cX()) : a15.a16(player)
	}
	this.w3 = function(player) {
		d8.cm(player, player === b4.b5 ? 21 : 22), a0u(player), a0v()
	}, this.a0w = function(player) {
		1 === b4.cU && 0 !== b2.bN[player] && 2 !== b2.es[player] && a0u(player), b4.fC--, b4.a0x--, d8.cm(player, 4), aP.cA.a0y(2) && bQ.c2(!0), a0v()
	}
}

function a17() {
	function a1V(ar, jA, jB) {
		var a1W = ar[jA];
		ar[jA] = ar[jB], ar[jB] = a1W
	}
	this.tJ = [
		[],
		[],
		[],
		[]
	], this.tM = [0, 0, 0, 0], this.a18 = [], this.a16 = function(a19, fi, username, fT, ft, fu, elo, color, od, a1A) {
		username = this.a1C(fi, username, fT, ft, fu, elo, color, od, a1A);
		this.tJ[a19].push(username), fd.a1D === fi && (fd.fq = username), fd.a1E.a1F(fi) && (username.a1G = 1), fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === a19 && 1 === fd.eG.sv[2]
	}, this.a1C = function(fi, username, fT, ft, fu, elo, color, od, a1A) {
		return {
			fi: fi,
			username: username,
			fT: fT,
			ft: ft,
			fu: fu,
			elo: elo,
			color: color,
			od: od,
			a1A: a1A
		}
	}, this.a1I = function(p, a19, fT, ft, fu, elo, od) {
		p = this.tJ[a19][p];
		p.fT = fT, p.ft = ft, p.fu = fu, p.elo = elo, p.od = od, fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === a19 && 1 === fd.eG.sv[2]
	}, this.a1J = function(p, a19, a1K) {
		var p = this.tJ[a19][p],
			a1L = p.username,
			a1M = "Redacted " + fj.fk.aR(p.fi, 2);
		p.username = a1K ? "[" + aP.aQ.z1(a1L) + "] " + a1M : a1M, a1L.indexOf("Redacted") < 0 && (p.a1N = a1L), fd.yP.a1O(p.fi), fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === a19 && 1 === fd.eG.sv[2]
	}, this.a1P = function(p, a1Q, a1R) {
		var player = this.tJ[a1Q][p];
		this.a1S(p, a1Q), this.tJ[a1R].push(player), fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === a1R && 1 === fd.eG.sv[2]
	}, this.a1S = function(p, a1Q) {
		var tI = this.tJ[a1Q];
		this.a18.push(tI[p]), 1e3 < this.a18.length && this.a18.shift(), p >= this.tM[a1Q] ? tI[p] = tI[tI.length - 1] : (this.tM[a1Q]--, 2 === a1Q ? (tI.splice(this.tM[a1Q] + 1, 0, tI[tI.length - 1]), tI.splice(p, 1)) : (tI[p] = tI[this.tM[
			a1Q]], tI[this.tM[a1Q]] = tI[tI.length - 1])), tI.pop(), fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === a1Q && 1 === fd.eG.sv[2]
	}, this.a1T = function(p, a0X) {
		fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === a0X && 1 === fd.eG.sv[2];
		var tI = this.tJ[a0X],
			dU = tI[p];
		if (2 === a0X)
			if (p >= this.tM[a0X]) {
				fd.a1E.join(dU);
				for (var a1U = this.tM[a0X], elo = dU.elo; a1U && elo > tI[a1U - 1].elo;) a1U--;
				tI[p] = tI[this.tM[a0X]], tI.splice(this.tM[a0X]++, 1), tI.splice(a1U, 0, dU)
			} else tI.splice(this.tM[a0X]--, 0, dU), tI.splice(p, 1);
		else p >= this.tM[a0X] ? (fd.a1E.join(dU), a1V(tI, this.tM[a0X]++, p)) : a1V(tI, --this.tM[a0X], p)
	}, this.a0b = function(fi) {
		for (var tJ = this.tJ, ay = tJ.length, aH = 0; aH < ay; aH++)
			for (var tI = tJ[aH], at = tI.length, dF = 0; dF < at; dF++)
				if (fi === tI[dF].fi) return tI[dF];
		return null
	}
}

function a1X() {
	var gap, q, aY = [0, 0, 0, 0, 0],
		aZ = [0, 0, 0, 0, 0],
		cT = [1, 1, 1, 1, 1],
		b0 = [!0, !0, !0, !1, !1],
		cl = (this.mc = [!0, !0, !0, !1, !1], null);
	this.a1Y = function(dT, a1Z) {
		cl = dT, b0 = a1Z, q = [uC.a1a, uC.uD, uC.a1b, uC.a1b, uC.a1c], this.w()
	}, this.w = function() {
		if (nj.nk()) {
			var aH, d = Math.floor((a0.a1.a2() ? .261 : .195) * y.bx),
				e = Math.floor(.9 * d),
				h = Math.floor(.17 * e);
			if (gap = a0.a1.a2() ? 2 * a3.gap : a3.gap, cT[0] = d / cl[0].width, cT[1] = e / cl[1].width, cT[2] = h / cl[2].height, cT[3] = h / cl[3].height, cT[4] = h / cl[4].height, cT[2] *= 1.7, cT[3] *= 1.07, aY[0] = gap, aY[1] = gap, aY[2] =
				gap, aY[3] = gap, aY[4] = Math.floor(2 * gap + cT[3] * cl[3].width), aZ[0] = gap, aZ[1] = aZ[0] + gap + cT[0] * cl[0].height, aZ[2] = aZ[1] + gap + cT[1] * cl[1].height, aZ[3] = aZ[2] + gap + cT[2] * cl[2].height, aZ[4] = aZ[3], !
				b0[0])
				for (aH = 0; aH < 5; aH++) aZ[aH] -= cT[0] * cl[0].height + gap;
			if (!b0[1])
				for (aH = 2; aH < 5; aH++) aZ[aH] -= cT[1] * cl[1].height + gap
		}
	}, this.r = function() {
		return !(7 === iY.iZ() && a0.a1.a2())
	}, this.a5 = function(a1d, a1e) {
		if (cl && this.r())
			for (var aH = b0.length - 1; 0 <= aH; aH--)
				if (b0[aH] && this.mc[aH] && aY[aH] < a1d && aZ[aH] < a1e && a1d < aY[aH] + cT[aH] * cl[aH].width && a1e < aZ[aH] + cT[aH] * cl[aH].height) return fZ.ff(9, fZ.fa, new py(L(260), aP.aS.hc(q[aH]))), !0;
		return !1
	}, this.aW = function() {
		if (cl && this.r()) {
			var aH;
			for (aa.imageSmoothingEnabled = !0, aH = 0; aH < 5; aH++) b0[aH] && this.mc[aH] && (aa.setTransform(cT[aH], 0, 0, cT[aH], aY[aH], aZ[aH]), aa.drawImage(cl[aH], 0, 0));
			aa.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a1f() {
	this.a16 = function(player) {
		a1g.a1h(player), b4.a0x++, b2.es[player] = 2, b2.a1i[player] = ho.a1j.a1k(), player === b4.b5 && (pB.show(!1, !1), bQ.a1l(), a0z.a1m.a1n()), dl.dm(player)
	}
}

function a1o() {
	this.a1p = function(player) {
		for (var wN = eF.eG.wN, jA = player << 3, aH = jA + eF.eG.wL[player] - 1; jA <= aH; aH--) this.lW(wN[aH])
	}, this.lW = function(a1q) {
		var eG = eF.eG,
			a1r = eG.lQ - 1,
			a1s = eG.eH[a1q],
			a1t = eG.a1u[a1q],
			a1v = eG.lO[a1q];
		eG.lQ = a1r, eG.eH[a1q] = eG.eH[a1r], eG.lO[a1q] = eG.lO[a1r], eG.lP[a1q] = eG.lP[a1r], eG.eI[a1q] = eG.eI[a1r], eG.a1u[a1q] = eG.a1u[a1r], eG.wM[a1q] = eG.wM[a1r], eG.lN[a1q] = eG.lN[a1r], eG.a1w[a1q] = eG.a1w[a1r], eG.wa[a1q] = eG.wa[
				a1r], eG.lj[a1q] = eG.lj[a1r], eG.wN[eG.eH[a1q]] = a1q,
			function(a20) {
				var player = a20 >> 3,
					eG = eF.eG,
					ay = eG.wL[player] - 1,
					a21 = (player << 3) + ay;
				eG.wL[player] = ay, a21 !== a20 && (eG.wN[a20] = eG.wN[a21], eG.eH[eG.wN[a20]] = a20)
			}(a1s), eF.kS.kS[dH.a1y(eG.lO[a1q])][eG.a1u[a1q]] = a1q, a1r = dH.a1y(a1v), a1s = a1t, a1r = eF.kS.kS[a1r], eG = a1r.pop(), a1s !== a1r.length && (a1r[a1s] = eG, eF.eG.a1u[eG] = a1s)
	}
}

function a23() {
	this.ar = new Array(4), this.a24 = new Uint16Array(2), this.vR = new Uint16Array(2), this.a25 = new Int32Array(2), this.mL = new Uint32Array(2), this.a26 = new Uint32Array(2), this.a27 = new Uint8Array(4), this.a28 = new Uint8Array(4), this.a29 =
		new Uint32Array(4), this.a2A = new Uint32Array(5), this.a2B = new Uint32Array(8), this.vu = new Uint32Array(8), this.ym = new Uint16Array(16), this.vS = new Uint16Array(512), this.a2C = new Uint16Array(512), this.a2D = new Uint16Array(512),
		this.uY = new Uint16Array(0), this.w = function() {
			var ay = ev.f0 * ev.f1;
			this.uY.length !== ay && (this.uY = new Uint16Array(ay))
		}, this.a2E = function(ar, bG) {
			return ar[0] = bG, ar
		}, this.a2F = function(ar, bG, bH) {
			return ar[0] = bG, ar[1] = bH, ar
		}, this.a2G = function(ar, bG, bH, mc) {
			return ar[0] = bG, ar[1] = bH, ar[2] = mc, ar
		}, this.a2H = function(ar, bG, bH, mc, a2I) {
			return ar[0] = bG, ar[1] = bH, ar[2] = mc, ar[3] = a2I, ar
		}
}

function a2J() {
	function a2M(bF) {
		a2U(bF), fZ.ff(4, 5, new uB("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new fR("⬅️ " + L(71), function() {
				fZ.gc()
			}), new fR("🔄 Reload", function() {
				a0.a1.u5()
			}, ab.d1)]))
	}

	function a2R(bF) {
		a2U(bF), fZ.ff(4, 5, new uB(L(261), a2P(bF), !0))
	}

	function a2P(bF) {
		var ct = " [" + bF + "]";
		return 3249 === bF || 1006 === bF ? "No Internet / No Server Response" + ct : 4527 === bF ? "Player already in lobby" + ct : 4530 === bF ? "Lobby Timeout" + ct : 4528 === bF ? "Lobby Kick: Another login detected." + ct : 4540 === bF ?
			"You have been kicked." + ct : 4495 === bF ? "Account doesn't exist." : 4229 === bF ? "Bad Internet / Unresponsive Client" + ct : 4555 === bF ? "Invalid Account Error. Please Try Again." + ct : 4557 <= bF && bF <= 4560 ?
			"Please try again later!" + ct : "Unknown error" + ct
	}

	function a2U(bF) {
		a2N(bF), fZ.eG.a2W()
	}

	function a2N(bF) {
		var kL = iY.iZ();
		6 === kL ? fz.eG.t1(bF) : fd.nz ? (fZ.j3(), fd.t0(), fz.eG.close(fz.eG.hz, 3256)) : 8 === kL && b4.qK(!0)
	}
	this.a2K = [], this.a2L = function(hm, bF) {
		if (this.a2K.push(bF), 8 === fZ.fa && 0 === hm)
			if (4211 === bF) a2M(bF);
			else {
				if (fd.nz && (4495 === bF || 4480 === bF) && fz.eG.hz !== hm) return void fZ.gc();
				if (8 !== iY.iZ() && a2N(), 4480 === bF) return gH.rg.a2V(), void fZ.ff(4, 0, new uB(L(263), L(264), !0));
				fZ.ff(4, 0, new uB(L(261), a2P(bF), !0))
			}
		else {
			var kL = iY.iZ();
			if (6 === kL) {
				if (4211 === bF) return void a2M(bF);
				if (4215 !== bF && 4516 !== bF && 4527 !== bF && 4533 !== bF && 4528 !== bF && !(4557 <= bF && bF <= 4560)) return void p3.a2Q(hm)
			} else {
				if (!fd.nz) return 8 === kL ? void(hm !== fz.eG.o6 || b4.o0 || 1 !== b4.cU || b4.bw || d8.dq(L(262, [bF]))) : void 0;
				if (hm !== fz.eG.hz) return
			}
			a2R(bF)
		}
	}, this.a2S = function(bF) {
		this.a2K.push(bF), 8 === iY.iZ() ? b4.o0 || 1 !== b4.cU || d8.dq(L(262, [bF])) : a2R(bF)
	}, this.a2T = function() {
		this.a2K.push(3268), a2U(3268)
	}
}

function a2X() {
	this.w = function() {
		this.a2Y = 0, this.vL = [], this.a2Z = 0, this.a2a = 0
	}, this.sy = function() {
		var cP;
		b4.o0 || (cP = this, 2 === b4.a2c ? cP.vL = a0z.a2d.vK() : b4.e2 ? cP.vL = a0z.a2d.vN() : cP.vL = a0z.a2d.vP(), cP.a2Y = ho.a1j.a2e(), cP.a2Z = Math.max(1, a0z.a2d.vT(cP.vL)), dB.cA.a2f(), 8 === b4.f7 ? a0z.result.a2a = 0 : cP.a2a = 100 *
			a0z.result.a2Y * (1 + b4.cp))
	}
}

function a2h() {
	this.cX = function(i0) {
		var id, bG, pR;
		for (jQ.w(i0), jQ.p += 2, pR = 8 * jQ.size; jQ.p + 8 <= pR;) id = jQ.hq(4), bG = jQ.hq(9), 0 === id ? this.a2i(id, bG, jQ.hq(22)) : 1 === id ? this.a2i(id, bG, jQ.hq(10), jQ.hq(10)) : 2 === id ? this.a2i(id, bG, jQ.hq(10), jQ.hq(9)) :
			3 === id ? this.a2i(id, bG, jQ.hq(10), jQ.hq(27)) : 4 === id ? this.a2i(id, bG, jQ.hq(10), jQ.hq(16)) : 5 === id || 6 === id ? this.a2i(id, bG, jQ.hq(10)) : 7 === id ? this.a2i(id, bG, jQ.hq(1)) : 10 === id ? this.a2i(id, bG, jQ.hq(
				20), jQ.hq(22)) : this.a2i(id, bG)
	}, this.a2j = [], this.a2k = function() {
		for (var a2m = 0, a2n = 0, a2o = 0, a2p = 0, a2q = 0, a2r = 0, aH = 0; aH < 512; aH++) a2m += b2.bN[aH], a2n += b2.b3[aH], a2o += b2.e1[aH], a2p += eF.eG.wL[aH];
		a2q += eF.eG.lQ, a2r += fG.fH, this.a2j.push(a2o % 1073741824 * 4 + (a2m + a2n + a2p + a2q + a2r) % 4)
	}, this.a2i = function(id, bG, bH, mc) {
		0 === id ? dB.vr.vq(bG, bH) : 1 === id ? dB.vr.vs(bG, bH, mc) : 2 === id ? dB.vr.vt(bG, bH, mc) : 3 === id ? dB.vr.nL(bG, bH, mc) : 4 === id ? dB.vr.nO(bG, bH, mc) : 5 === id ? dB.vr.w0(bG, bH) : 6 === id ? dB.vr.w1(bG, bH) : 7 === id ?
			dB.vr.w2(bG, bH) : 8 === id ? dB.vr.w3(bG) : 9 === id ? dB.vr.a0w(bG) : 10 === id && dB.vr.w4(bG, bH >> 10, mc, bH % 1024)
	}
}

function a2s() {
	this.a2t = new a2u, this.a1j = new a2v, this.hp = new a2w
}

function a2x() {
	this.a2y = 0, this.w = function() {
		this.a2y = 0
	}, this.cX = function() {
		if (!this.a2y && aF.bP() % 30 == 7 && aP.cA.a31(80) && (mF.performance.a2y = 1)) {
			if (b4.e2) {
				var a34 = pC.a35();
				if (e4.e6[a34]) {
					pC.vQ(a34);
					var ar = mK.vS,
						ay = mK.vR[0];
					if (0 !== ay)
						for (var a36 = Math.min(100 + 10 * (ay - 1), 400), aH = 0; aH < ay; aH++) e8.a37(ar[aH], a36)
				}
			}
			e8.a37(pd[0], 100)
		}
	}
}

function a38() {
	this.aW = function() {
		if (0 !== zC.eG.tt && (aa.globalAlpha = Math.min(zC.eG.tt / 580, 1), aa.drawImage(zC.eG.a3B, 1 + cM.mm(), 1 + cM.d7()), aa.globalAlpha = 1, b4.bv)) {
			for (var bS = zN / mn, bT = zO / mn, bU = (y.b + zN) / mn, bV = (y.c + zO) / mn, hS = zC.eG.a3C * mn, a3D = zC.eG.a3D, aH = b4.du - 1; 0 <= aH; aH--) ! function(aH, hS, bS, bT, bU, bV, a3D) {
				var highlight;
				0 === b2.bN[aH] || 0 === b2.b3[aH] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aH]) && (hS *= 2), bU = y.b * ((b2.a3F[aH] + b2.a3G[aH] + 1) / 2 - bS) / (bU - bS) - .5 * hS, bS = y.c * ((b2
					.a3H[aH] + b2.a3I[aH] + 1) / 2 - bT) / (bV - bT) - .5 * hS, y.b < bU) || bS > y.c || bU < -hS || bS < -hS || (highlight ? aa.setTransform(2 * mn, 0, 0, 2 * mn, bU, bS) : aa.setTransform(mn, 0, 0, mn, bU, bS), aa
					.drawImage(a3D[b4.e2 ? e4.e7[aH] : 1], 0, 0))
			}(aH, hS, bS, bT, bU, bV, a3D);
			aa.setTransform(mn, 0, 0, mn, 0, 0)
		}
	}
}

function a3J() {
	var ct;
	10 === ev.ey ? ct =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === ev.ey ? ct =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === ev.ey ? ct =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === ev.ey ? ct =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === ev.ey ? ct =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === ev.ey ? ct =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === ev.ey ? ct =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === ev.ey ? ct =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === ev.ey ? ct =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === ev.ey ? ct =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === ev.ey ? ct =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === ev.ey && (ct =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new xY).jT(ct)
}

function iv() {
	var gQ, gR, gS, gg;

	function gV() {
		gZ(), 2 !== b4.data.spawningType || aP.g9.gd(b4.data.spawningData) || (b4.data.spawningType = 0), 2 !== b4.data.spawningType && (b4.data.spawningData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		2 === b4.data.spawningType && aP.g9.h9(gS.gf(), b4.data.spawningData, ev.a3K - 1)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(265), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk,
			go = (gj.gl(L(72)), [L(175), L(176), L(75)]),
			value = b4.data.spawningType;
		0 === b4.data.gameMode && (go.splice(1, 1), 0 < value) && (value = 1);
		gj.gm(new gn({
			go: go,
			value: value
		}, function(p) {
			gZ(), b4.data.spawningType = p, 0 === b4.data.gameMode && 1 === p && (b4.data.spawningType = 2), 2 !== b4.data.spawningType || b4.data.spawningData || (b4.data.spawningData = new Uint16Array(2 * b4.dg)), fZ.ff(24)
		})), gj.gp(new gq), gj.gp(new gr({
			value: b4.data.selectableSpawn
		}, L(266), function(value) {
			b4.data.selectableSpawn = value
		})), gg.push(gj)
	}(gg = []), function(gg) {
		var gj = new gk;
		gj.gl("Seed"), gj.gp(new nm({
			p: -1,
			value: b4.data.spawningSeed
		}, 1, 0, function(bF) {
			var value = Math.abs(Math.floor(bF.target.value)) % 16384;
			bF.target.value = b4.data.spawningSeed = value
		})), gg.push(gj)
	}(gg), function(gg) {
		var gj;
		2 === b4.data.spawningType && ((gj = new gk).gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.spawningData, 2)), gj.gp(gS), gg.push(gj))
	}(gg), gg))
}

function a3L() {
	this.a3M = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a3N = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", ab.am, "rgb(170,170,170)"
	], this.a3O = [ab.am, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", ab.am, ab.eX], this.a3P = [ab.eX, ab.am, ab.am, ab.am, ab.eX, ab.eX, ab.eX, ab.eX, ab.am];
	var a3Q = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.a3R = ["rgba(" + a3Q[0] + ",", "rgba(" + a3Q[1] + ",", "rgba(" + a3Q[2] + ",", "rgba(" + a3Q[3] + ",", "rgba(" + a3Q[4] + ",", "rgba(" + a3Q[5] + ",", "rgba(" + a3Q[6] + ",", "rgba(" + a3Q[7] + ",", "rgba(" + a3Q[8] + ",", "rgba(" + a3Q[9] +
			","
		], this.a3S = ["rgb(" + a3Q[0] + ")", "rgb(" + a3Q[1] + ")", "rgb(" + a3Q[2] + ")", "rgb(" + a3Q[3] + ")", "rgb(" + a3Q[4] + ")", "rgb(" + a3Q[5] + ")", "rgb(" + a3Q[6] + ")", "rgb(" + a3Q[7] + ")", "rgb(" + a3Q[8] + ")", "rgb(" + a3Q[9] +
			")"
		], this.e5 = null, this.zE = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.a3T = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.e6 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.e7 = new Uint8Array(b4.dg), this.zR = new Uint8Array(b4.dg), this.a3U = new Uint16Array(b4.dg), this.a3V = new Uint16Array(this.e6.length + 1), this.a3W = new Uint16Array(this.e6.length), this
		.v = function() {
			this.e5 = [L(267), L(268), L(269), L(270), L(271), L(272), L(273), L(274), L(275)]
		}, this.w = function() {
			if (this.e7.fill(0), this.zR.fill(0), this.a3X(), b4.e2) {
				if (9 === b4.f7) {
					for (var e7 = e4.e7, aH = b4.data.teamPlayerCount[7] - 1; 0 <= aH; aH--) e7[aH] = 1;
					var ay = b4.dg;
					for (aH = b4.data.teamPlayerCount[7]; aH < ay; aH++) e7[aH] = 2;
					e4.e6[1] = 7, e4.e6[2] = 8
				} else b4.o0 ? function() {
					var a3T = e4.a3T,
						colorsData = b4.data.colorsData;
					if (!b4.data.selectableColor)
						for (var aH = b4.du - 1; 0 <= aH; aH--) colorsData[aH] = kI.nG(262144);
					var a3j = 0,
						wT = 768,
						hw = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = b4.data.teamPlayerCount;
					for (aH = 0; aH < 9; aH++)
						if (teamPlayerCount[aH]) {
							for (var z = 0, dL = 0; dL < 3; dL++) z += Math.abs(a3T[aH][dL] - hw[dL]);
							z < wT && (a3j = aH, wT = z)
						} var a3k = new Uint16Array(9);
					for (aH = 0; aH < 9; aH++) a3k[aH] = teamPlayerCount[aH];
					var e6 = e4.e6,
						a3l = new Uint8Array(9),
						eU = (e6[0] = 0, 1);
					for (aH = 1; aH < 9; aH++) a3k[aH] && (a3l[aH] = eU, e6[eU++] = aH);
					var a3m = b4.du,
						e7 = e4.e7;
					a3k[a3j] ? (a3k[a3j]--, e7[0] = a3l[a3j]) : a3m = 0;
					var cl = 0;
					for (aH = a3m; aH < b4.a3n; aH++) {
						var hC = e6[cl];
						if (a3k[hC]) a3k[hC]--, e7[aH] = a3l[hC];
						else if (aH--, 9 <= ++cl) return console.log("error 325")
					}
				}() : this.cX();
				! function() {
					for (var ay = b4.dg, a3U = e4.a3U, a3V = e4.a3V, a3W = e4.a3W, e7 = e4.e7, e6 = e4.e6, a3v = e6.length, gJ = new Array(a3v), aH = 0; aH < a3v; aH++) gJ[aH] = [];
					for (aH = 0; aH < ay; aH++) gJ[e6[e7[aH]]].push(aH);
					for (aH = 1; aH <= a3v; aH++) a3V[aH] = a3V[aH - 1] + gJ[aH - 1].length;
					for (aH = 0; aH < a3v; aH++)
						for (var eU = gJ[aH].length, at = a3V[aH], hC = 0; hC < eU; hC++) a3U[hC + at] = gJ[aH][hC];
					var du = b4.du;
					for (aH = 0; aH < a3v; aH++)
						for (eU = gJ[aH].length, at = a3V[aH], hC = 0; hC < eU; hC++)
							if (a3U[hC + at] >= du) {
								a3W[aH] = hC;
								break
							}
				}(), ! function() {
					for (var ay = b4.dg, e7 = e4.e7, zR = e4.zR, e6 = e4.e6, aH = 0; aH < ay; aH++) zR[aH] = e6[e7[aH]];
					9 === b4.f7 && zR.fill(1, ay - a3w.a3x[5])
				}()
			}
		}, this.a3X = function() {
			for (var aH = this.e6.length - 1; 0 <= aH; aH--) this.e6[aH] = aH
		}, this.cX = function() {
			var n0 = new Uint8Array(b4.du),
				n1 = new Uint8Array(b4.du),
				a3c = new Uint16Array(8),
				a3d = new Uint16Array(this.e6.length);
			this.a3e(n0, n1, a3c, 1), this.a3f(a3c), this.a3g(a3d, n0, n1), this.a3h(n0, n1, a3d), this.a3i()
		}, this.a3e = function(n0, n1, a3k, a3o) {
			for (var dL, bF, a3p, ay = this.e6.length - a3o, ar = new Uint16Array(ay), a3T = this.a3T, colorsData = b4.data.colorsData, aH = b4.du - 1; 0 <= aH; aH--) {
				for (dL = ay; a3o <= dL; dL--) ar[dL - 1] = Math.abs(4 * (colorsData[aH] >> 12) - a3T[dL][0]) + Math.abs(4 * (colorsData[aH] >> 6 & 63) - a3T[dL][1]) + Math.abs(4 * (63 & colorsData[aH]) - a3T[dL][2]);
				for (a3p = 768, dL = ay - 1; 0 <= dL; dL--) ar[bF = (dL + aH) % ay] < a3p && (a3p = ar[bF], n0[aH] = bF);
				for (a3k[n0[aH]] += 4, a3p = 768, dL = ay - 1; 0 <= dL; dL--) ar[bF = (dL + aH) % ay] < a3p && bF !== n0[aH] && (a3p = ar[bF], n1[aH] = bF);
				a3k[n1[aH]]++
			}
		}, this.a3f = function(a3k) {
			for (var dL, qH, ay = this.e6.length - 1, aH = ay; 0 <= aH; aH--) this.e6[aH] = aH;
			for (aH = ay - 1; 0 <= aH; aH--) a3k[aH]++;
			for (aH = 1; aH <= ay; aH++) {
				for (qH = 0, dL = 1; dL < ay; dL++) a3k[dL] > a3k[qH] && (qH = dL);
				a3k[qH] = 0, this.e6[aH] = qH + 1
			}
		}, this.a3g = function(a3d, n0, n1) {
			var dL, jc, cl, z, bF, cT, ej, a3q = this.e6.length - 1,
				tm = new Uint16Array(a3q),
				a3r = [],
				a3s = 0,
				jJ = [],
				a3t = [];
			loop: for (var aH = 0; aH < b4.du; aH++)
				if (null !== (jc = aP.aQ.z1(b2.e0[aH]))) {
					for (dL = jJ.length - 1; 0 <= dL; dL--)
						if (jc === jJ[dL]) {
							a3t[dL].push(aH), a3s = Math.max(a3s, a3t[dL].length);
							continue loop
						} jJ.push(jc), a3r.push(!1), a3t.push([aH]), a3s = Math.max(a3s, 1)
				}
			for (; 2 < b4.zI && a3s > aA.aB(b4.du, b4.zI);) b4.zI--, b4.f7--;
			for (dL = jJ.length - 1; 0 <= dL; dL--) {
				for (z = -1, cl = jJ.length - 1; 0 <= cl; cl--) !a3r[cl] && (-1 === z || a3t[cl].length > a3t[z].length) && (z = cl);
				for (cl = a3q - 1; 0 <= cl; cl--) tm[cl] = 1;
				for (cl = a3t[z].length - 1; 0 <= cl; cl--) tm[n0[a3t[z][cl]]] += 3, tm[n1[a3t[z][cl]]]++;
				for (aH = a3q - 1; 0 <= aH; aH--) {
					for (bF = z % a3q, cl = a3q - 1; 0 <= cl; cl--) tm[cl] > tm[bF] && (bF = cl);
					for (cT = -1, cl = b4.zI; 0 < cl; cl--)
						if (this.e6[cl] === bF + 1) {
							cT = cl;
							break
						} if (tm[bF] = 0, -1 !== cT) {
						for (ej = 0, cl = b4.zI; 0 < cl; cl--) a3d[cT] > a3d[cl] && ej++;
						if (ej !== b4.zI - 1) {
							for (cl = a3t[z].length - 1; 0 <= cl; cl--) a3d[cT]++, this.e7[a3t[z][cl]] = cT;
							break
						}
					}
				}
				a3r[z] = !0
			}
		}, this.a3h = function(n0, n1, a3d) {
			for (var aH, us, ay = this.e6.length - 1, border = aA.aB(b4.du, b4.zI), a3u = (0 < b4.du % b4.zI && border++, new Uint8Array(1 + ay)), dL = ay; 1 <= dL; dL--) a3u[this.e6[dL]] = dL;
			for (aH = 0; aH < b4.du; aH++) us = a3u[n0[aH] + 1], 0 === this.e7[aH] && us <= b4.zI && a3d[us] < border && (a3d[us]++, this.e7[aH] = us);
			for (aH = 0; aH < b4.du; aH++) us = a3u[n1[aH] + 1], 0 === this.e7[aH] && us <= b4.zI && a3d[us] < border && (a3d[us]++, this.e7[aH] = us);
			for (dL = b4.zI; 1 <= dL; dL--)
				for (aH = b4.du - 1; 0 <= aH && !(a3d[dL] >= border); aH--) 0 === this.e7[aH] && (a3d[dL]++, this.e7[aH] = dL)
		}, this.a3i = function() {
			for (var aH = b4.du; aH < b4.dg; aH++) this.e7[aH] = 1 + aH % b4.zI
		}
}

function yQ() {
	this.r = !1;
	this.a41 = [], this.a42 = 100;
	var bS, bT, gap, rD, a3y, a40, a43 = 0,
		a44 = new Array(9),
		a45 = [],
		a46 = [],
		a47 = 0,
		a48 = 0,
		a49 = 0,
		a4A = 0;

	function a4I() {
		a44.sort(function(dF, dL) {
			return dL.rm - dF.rm
		});
		for (var ct = "" + a44[0].eM, aH = 1; aH < 9; aH++) ct += "," + a44[aH].eM;
		for (aH = 0; aH < 9; aH++) ct += "," + a44[aH].rm;
		gH.gJ.pN(120, ct)
	}
	this.w = function() {
		for (var a4B = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aH = 0; aH < a4B.length; aH++) {
			var color = 6 === a4B[aH] ? ab.a4C : ab.a4D;
			this.a41.push(aP.canvas.a03(nj.get(3), a4B[aH], color))
		}
		for (aH = 0; aH < dY.yP.mq; aH++) a46.push(dY.yP.mt - dY.yP.mq + aH);
		for (aH = 0; aH < dY.yP.mr; aH++) a46.push(dY.yP.ms + aH);
		var a4E = dY.yP.mz(uC.a4E);
		for (aH = 0; aH < a4E.length; aH++) a46.push(a4E[aH]);
		! function() {
			var aH, ar = gH.gJ.data[120].value.split(",");
			if (18 !== ar.length)
				for (aH = 0; aH < 9; aH++) a44[aH] = {
					eM: 1015 + aH,
					rm: 0
				};
			else
				for (aH = 0; aH < 9; aH++) {
					var b0 = parseInt(ar[aH]),
						cl = (b0 = 0 <= b0 && b0 < dY.yP.mt ? b0 : 0, parseInt(ar[aH + 9]));
					cl = 0 <= cl && cl < 1e3 ? cl : 0, a44[aH] = {
						eM: b0,
						rm: cl
					}
				}
		}()
	}, this.show = function(a6, a7, a4J) {
		var aH;
		if (a47 = a6, a48 = a7, a43 = a4J || 0, this.r = !0, a45 = [], 0 === a43)
			for (aH = 0; aH < 9; aH++) a45.push(a44[aH].eM);
		else {
			var dL = 49 * a43,
				a4J = dL - 49;
			for (a4J >= a46.length && (a43 = 1, a4J = 0, dL = 49), aH = a4J = (dL = Math.min(dL, a46.length)) - 49; aH < dL; aH++) a45.push(a46[aH])
		}
		a45.push(1024);
		a4J = a45.length, rD = Math.floor((a0.a1.a2() ? .075 : .0468) * y.bx), gap = Math.floor(rD / 3), (a49 = 10 * (a3y = rD + gap)) > y.b && (a49 = y.b, gap = (a3y = a49 / 10) - (rD = 3 * a3y / 4)), a40 = aA.aB(a4J, 10) + !!(a4J % 10), (a4A =
			a40 * a3y) > y.c && (a4A = y.c, gap = (a3y = a4A / a40) - (rD = 3 * a3y / 4)), a4J = .5 * gap;
		bS = Math.min(Math.max(a6 - .5 * a49 + a4J, a4J), y.b - a49 + a4J), bT = Math.min(Math.max(a7 - .5 * a4A + a4J, a4J), y.c - a4A + a4J)
	}, this.a5 = function(a6, a7, player) {
		if (!this.r) return !1;
		if (this.a4L(a6, a7)) {
			a6 = aA.cI(aA.aB(a6 - bS + .5 * gap, a3y), 0, 9);
			if ((a6 += 10 * aA.cI(aA.aB(a7 - bT + .5 * gap, a3y), 0, 9)) >= a45.length) return p9.aE(), !0;
			a7 = a45[a6];
			if (1024 === a7) return this.show(a47, a48, a43 + 1), !0;
			! function(eM) {
				for (var aH = 0; aH < 9; aH++) a44[aH].rm = Math.floor(.99 * a44[aH].rm);
				for (aH = 0; aH < 9; aH++)
					if (eM === a44[aH].eM) return a44[aH].rm = Math.min(a44[aH].rm + 30, 999), a4I();
				a44.splice(5, 0, {
					eM: eM,
					rm: Math.max(a44[4].rm, 30)
				}), a44.pop(), a4I()
			}(a7), player === b4.b5 ? dB.a4M.eJ(a7) : dB.cA.a4N(a7, player)
		}
		return p9.aE(), !0
	}, this.a4L = function(a6, a7) {
		return !(a6 < bS - .5 * gap || a7 < bT - .5 * gap || bS + a49 - .5 * gap <= a6 || bT + a4A - .5 * gap <= a7)
	}, this.aW = function() {
		aa.fillStyle = ab.ac, aa.fillRect(bS - .5 * gap, bT - .5 * gap, a49, a4A);
		for (var hC = .5 * a3.qP, ay = (aa.lineWidth = a3.qP, aa.strokeStyle = aa.fillStyle = ab.am, aa.strokeRect(bS - .5 * gap + hC, bT - .5 * gap + hC, a49 - 2 * hC, a4A - 2 * hC), aa.imageSmoothingEnabled = !0, a45.length), aH = 0; aH <
			ay; aH++) this.da(a45[aH], aa, bS + aH % 10 * a3y, bT + aA.aB(aH, 10) * a3y, rD);
		aa.imageSmoothingEnabled = !1
	}, this.da = function(eM, hJ, aY, aZ, rD) {
		var av;
		eM >= 1024 - dY.yP.mq ? (av = rD / this.a42, hJ.setTransform(av, 0, 0, av, aY, aZ), hJ.drawImage(this.a41[eM - 1024 + dY.yP.mq], 0, 0), hJ.setTransform(1, 0, 0, 1, 0, 0)) : (aP.aS.textAlign(hJ, 1), aP.aS.textBaseline(hJ, 1), hJ.font = aP
			.aS.aT(0, .89 * rD), hJ.fillText(dY.yP.my(eM), aY + .5 * rD, aZ + (.35 - aP.aS.hF + .56) * rD))
	}
}

function a4O() {
	var cl = aP.color;
	this.eX = cl.a4P(0, 0, 0), this.a4Q = cl.a4R(0, 0, 0, .7), this.a4S = cl.a4R(0, 0, 0, .5), this.c9 = cl.a4R(0, 0, 0, .85), this.ac = cl.a4R(0, 0, 0, .75), this.a4D = cl.a4R(0, 0, 0, .6), this.sQ = cl.a4R(0, 0, 0, .35), this.am = cl.a4P(255, 255,
			255), this.q9 = cl.a4R(255, 255, 255, .3), this.a4T = cl.a4R(255, 255, 255, .6), this.bI = cl.a4R(255, 255, 255, .4), this.a4U = cl.a4R(255, 255, 255, .25), this.s3 = cl.a4R(255, 255, 255, .85), this.a4V = cl.a4R(255, 255, 255, .75), this
		.a4W = cl.a4R(255, 255, 255, .15), this.a4X = cl.a4R(255, 255, 255, .11), this.a4Y = cl.a4P(128, 128, 128), this.a4Z = cl.a4R(64, 64, 64, .75), this.a4a = cl.a4R(88, 88, 88, .83), this.tl = cl.a4R(60, 60, 60, .85), this.a4b = cl.a4R(80, 60,
			60, .85), this.a0D = cl.a4P(170, 170, 170), this.a0E = cl.a4P(200, 235, 245), this.b7 = cl.a4P(30, 255, 30), this.b6 = cl.a4P(0, 200, 0), this.a4c = cl.a4P(128, 255, 128), this.a4d = cl.a4R(10, 65, 10, .75), this.a4e = cl.a4R(0, 255, 0,
			.6), this.a4f = cl.a4R(0, 255, 0, .5), this.an = cl.a4R(0, 200, 0, .5), this.d1 = cl.a4R(0, 100, 0, .75), this.nb = cl.a4R(0, 60, 0, .8), this.t7 = cl.a4R(0, 255, 0, .3), this.a4C = cl.a4R(0, 180, 0, .6), this.a4g = cl.a4R(0, 120, 0,
		.85), this.a4h = cl.a4P(0, 120, 0), this.a4i = cl.a4R(0, 70, 0, .85), this.a4j = cl.a4P(190, 230, 190), this.a0H = cl.a4P(0, 255, 0), this.a4k = cl.a4P(255, 120, 120), this.lg = cl.a4P(255, 160, 160), this.b9 = cl.a4P(255, 70, 70), this.b8 =
		cl.a4P(230, 0, 0), this.a4l = cl.a4R(220, 0, 0, .6), this.bK = cl.a4R(255, 100, 100, .8), this.dr = cl.a4R(100, 0, 0, .85), this.na = cl.a4R(60, 0, 0, .85), this.a4m = cl.a4R(200, 0, 0, .6), this.q1 = cl.a4R(120, 0, 0, .85), this.dh = cl.a4P(
			255, 70, 10), this.a0V = cl.a4P(230, 190, 190), this.a0F = cl.a4P(255, 0, 0), this.a0G = cl.a4P(255, 0, 255), this.nY = cl.a4R(60, 0, 60, .85), this.nZ = cl.a4R(0, 60, 60, .85), this.aq = cl.a4R(10, 60, 60, .9), this.a4n = cl.a4R(0, 96,
			96, .75), this.a0I = cl.a4P(0, 255, 255), this.nN = cl.a4P(160, 160, 255), this.a4o = cl.a4R(0, 40, 90, .75), this.a4p = cl.a4R(0, 0, 255, .6), this.a4q = cl.a4P(200, 200, 255), this.a4r = cl.a4R(50, 50, 255, .83), this.a4s = cl.a4R(20,
			90, 150, .75), this.a4t = cl.a4P(255, 120, 100), this.a4u = cl.a4R(255, 255, 0, .5), this.a4v = cl.a4R(255, 255, 150, .2), this.eb = cl.a4P(255, 255, 0), this.dp = cl.a4P(255, 255, 200), this.a4w = cl.a4R(200, 200, 0, .6), this.a4x = cl
		.a4R(140, 120, 0, .75), this.a4y = cl.a4R(180, 160, 40, .75), this.a4z = cl.a4R(70, 50, 20, .85), this.a50 = cl.a4R(30, 30, 0, .85), this.nd = cl.a4R(60, 60, 0, .85), this.a51 = cl.a4P(255, 255, 100), this.a0K = cl.a4P(255, 255, 140), this
		.a52 = cl.a4R(255, 140, 0, .75), this.nc = cl.a4R(70, 40, 0, .85), this.a0J = cl.a4P(255, 150, 0), this.a53 = cl.a4R(255, 200, 80, .85), this.a54 = cl.a4R(0, 0, 0, 0), this.sp = cl.a4R(255, 255, 255, 0), this.sq = cl.a4R(254, 254, 254, 0)
}

function a55() {
	this.aS = new hD, this.g9 = new a56, this.cA = new a57, this.aQ = new yq, this.ao = new jf, this.a09 = new a58, this.canvas = new a02, this.color = new a59, this.a5A = new a5B, this.w = function() {
		this.aS.hG()
	}
}

function a5C() {
	function a5W(player, lv, a5G) {
		3 <= a5G && 2142 < aF.bP() && (lv === b4.dg || b2.e1[lv] < aA.aB(b2.e1[player], 20)) && e8.a5M(player, 20)
	}

	function a5a(player, eA, lv, a5G) {
		3 <= a5G && a5G < 6 && aA.aB(b2.e1[player], 8) > b2.e1[lv] && (eA = Math.max(aA.aB(11 * b2.e1[lv], 5), aA.aB(b2.e1[player], 10)));
		a5G = b2.m3[player].length;
		mF.a5Q.a5l(player, lv), mF.a5Q.a5m(player, lv, a5G, eA)
	}

	function a5V(player, eA) {
		var lv = b4.dg,
			ay = b2.m3[player].length;
		mF.a5Q.a5n(player), b2.m3[player].length !== ay && mF.a5Q.a5m(player, lv, ay, eA)
	}
	this.mH = new Uint8Array(b4.dg), this.w = function() {
		this.mH.fill(0)
	}, this.a5D = function(player, eA) {
		var a5E, a5G, a5H, a5I;
		m0.m2(player) && (a5E = mD.a5F(player), 3 <= (a5G = e8.eA[player]) && a5G < 6 && (eA = Math.max(b2.e1[player] - a5E, eA)), a5H = b2.ld[player].length, a5I = b2.a5J[player].length, 30 * b2.b3[player] > b4.a5K && a5L[player] < 10 && 100 *
			a5I <= a5H && e8.a5M(player, 10), b4.e2 ? function(player, eA, a5G, a5E) {
				var lv;
				if (mF.a5Q.a5R(player, !1) || mF.a5Q.a5S(player, !1)) {
					if (!mF.a5Q.a5T(player))
						if (mF.a5Q.a5U()) a5V(player, eA), a5W(player, b4.dg, a5G);
						else {
							if (kI.a5X(e8.a5Y[a5G])) lv = mF.a5Q.a5Z(player);
							else {
								if (mF.a5Q.a5b() && kI.a5X(e8.a5c[a5G]) && mF.a5Q.a5d(), 6 === a5G) return a5a(player, eA, mF.a5Q.a5e(), a5G);
								lv = mF.a5Q.a5f(player)
							}
							a5a(player, eA, lv, a5G), a5W(player, lv, a5G)
						}
				} else eF.a5O.cX(player) || mF.a5g.cX(player) || ! function(player, eA, a5G, a5E) {
					var mH = mF.mG.mH;
					mH[player] = 0;
					var a5i = e4.e7[player];
					if (0 !== a5i) {
						var a5j = b2.e1[player],
							b3 = b2.b3;
						if (player < b4.du && (eA = a5j), !(a5j < b3[player] || 5 === a5G && a5j < a5E || 4 === a5G && a5j < aA.aB(a5E, 2))) {
							pC.vQ(a5i);
							for (var ay = mK.vR[0], vS = mK.vS, aH = kI.nG(ay), dL = 0; dL < ay; dL++) {
								var cl = vS[(dL + aH) % ay];
								if (mH[cl]) return dB.ly.mA(player, cl, eA)
							}
							var wL = eF.eG.wL;
							for (dL = 0; dL < ay; dL++)
								if (cl = vS[(dL + aH) % ay], wL[cl] && cl !== player) return dB.ly.mA(player, cl, eA)
						}
					}
				}(player, eA, a5G, a5E)
			}(player, eA, a5G, a5E) : (!a5I || a5H && (a5H < a5I && !kI.nG(10) || 100 * a5I <= a5H && kI.nG(3) || !kI.nG(8))) && eF.a5O.cX(player) || function(player, eA, a5G) {
				mF.a5Q.a5R(player, !0) || mF.a5Q.a5S(player, !0) ? mF.a5Q.a5T(player) || (mF.a5Q.a5U() ? a5V(player, eA) : kI.a5X(e8.a5Y[a5G]) ? a5a(player, eA, mF.a5Q.a5Z(player), a5G) : 5 === a5G ? a5a(player, eA, mF.a5Q.a5k(), a5G) : (mF
					.a5Q.a5b() && kI.a5X(e8.a5c[a5G]) && mF.a5Q.a5d(), a5a(player, eA, 6 === a5G ? mF.a5Q.a5e() : mF.a5Q.a5f(player), a5G))) : mF.a5g.cX(player)
			}(player, eA, a5G))
	}
}

function a5o() {
	var a5p, a5q = 8,
		a5r = null;

	function a5w(dZ, dG, p) {
		dG *= 4;
		dZ[dG] = 255, dZ[1 + dG] = 255, dZ[2 + dG] = p, dZ[3 + dG] = 255
	}

	function a5y(hJ, a60) {
		var aY, aZ, wj, dG, a61, a62, rD = a5q,
			rF = aP.aS.getImageData(hJ, rD, rD),
			dZ = rF.data,
			at = (rD >> 1) - .5,
			a64 = aP.g9.a65(a60, .5);
		for (aP.g9.a66(a60, a64, 300) || aP.g9.a67(a60, 100), aZ = 0; aZ < rD; aZ++)
			for (aY = 0; aY < rD; aY++) a62 = (rD - 1.5) * (rD - 1.5) / 4, dZ[dG = 4 * (aZ * rD + aY)] = (a61 = (wj = (wj = aY - at) * wj + (wj = aZ - at) * wj) <= (rD - 4.5) * (rD - 4.5) / 4 ? a64 : a60)[0], dZ[1 + dG] = a61[1], dZ[2 + dG] = a61[2],
				dZ[3 + dG] = a62 < wj ? 0 : 255;
		hJ.putImageData(rF, 0, 0)
	}
	this.w = function() {
		var p, rD, dT, hJ, rF, dZ;
		(a5p = a5p || new Array(b4.dg)).fill(null), p = 255, rD = a5q + 4, dT = aP.aS.hI(rD, rD), hJ = aP.aS.getContext(dT, !0), rF = aP.aS.getImageData(hJ, rD, rD), a5w(dZ = rF.data, rD + 1, p), a5w(dZ, rD + 2, p), a5w(dZ, 2 * rD + 1, p), a5w(
				dZ, 2 * rD - 3, p), a5w(dZ, 2 * rD - 2, p), a5w(dZ, 3 * rD - 2, p), a5w(dZ, rD * (rD - 3) + 1, p), a5w(dZ, rD * (rD - 2) + 1, p), a5w(dZ, rD * (rD - 2) + 2, p), a5w(dZ, rD * (rD - 2) - 2, p), a5w(dZ, rD * (rD - 1) - 3, p), a5w(dZ,
				rD * (rD - 1) - 2, p), hJ.putImageData(rF, 0, 0), a5r = dT,
			function() {
				if (b4.e2)
					for (var dT = new Array(e4.e6.length), ay = b4.dg, a5u = a5p, zR = e4.zR, aH = 0; aH < ay; aH++) {
						var zJ = zR[aH];
						dT[zJ] || (dT[zJ] = function(zJ) {
							var dT = aP.aS.hI(a5q, a5q),
								hJ = aP.aS.getContext(dT, !0),
								ar = mK.a27;
							return ar.set(e4.a3T[zJ]), a5y(hJ, ar), dT
						}(zJ)), a5u[aH] = dT[zJ]
					}
			}()
	}, this.aW = function() {
		var aH, player, a68, a69, eA, us, a6C, a6E, a6F, lO = eF.eG.lO,
			eH = eF.eG.eH,
			eI = eF.eG.eI,
			a1w = eF.eG.a1w,
			a6G = a5p,
			lZ = b4.b5,
			ay = eF.eG.lQ,
			zL = y.b,
			zM = y.c,
			zQ = ev.f0 << 4,
			lr = mn,
			av = lr / a5q,
			bS = zN / lr,
			bT = zO / lr,
			wj = (zL + zN) / lr - bS,
			wk = (zM + zO) / lr - bT,
			hJ = aa;
		for (hJ.imageSmoothingEnabled = lr < 9, aP.aS.textAlign(hJ, 1), aP.aS.textBaseline(hJ, 1), aH = 0; aH < ay; aH++) player = eH[aH] >> 3, eA = eI[aH], a68 = .9 + .1 * Math.log10(eA), a69 = (us = lO[aH]) % zQ / 16 - a68, us = zM * (Math
			.floor(us / zQ) / 16 - a68 - bT) / wk, a6C = -2 * (a6F = lr * a68) * (1 + (a6E = +(player === lZ)) / 8), a6E = a6E * a6F / 4, (a6F = zL * (a69 - bS) / wj) < a6C || us < a6C || zL + a6E < a6F || zM + a6E < us || (a69 = 2 * a68 *
			av, a6C = a68 * lr, null === (a6E = a6G[player]) && (a6G[player] = a6E = function(player) {
				var dT = aP.aS.hI(a5q, a5q);
				return a5y(aP.aS.getContext(dT, !0), dw.a5z(player)), dT
			}(player)), player === lZ && (hJ.setTransform(a69, 0, 0, a69, a6F - 2 * a69, us - 2 * a69), hJ.drawImage(a5r, 0, 0)), hJ.setTransform(a69, 0, 0, a69, a6F, us), hJ.drawImage(a6E, 0, 0), (a68 = Math.floor(function(eA) {
				if (eA < 1e3) return .42;
				if (eA < 1e4) return .34;
				if (eA < 1e6) return .26;
				if (eA < 1e8) return .19;
				return .15
			}(eA) * a6C)) < 6) || (hJ.setTransform(1, 0, 0, 1, 0, 0), hJ.fillStyle = a1w[aH] ? ab.b9 : ab.am, hJ.font = aP.aS.aT(1, a68), hJ.fillText(aP.aQ.aR(eA), a6F + a6C, us + a6C + .1 * a68));
		hJ.imageSmoothingEnabled = !1, hJ.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function gq() {
	var bF;
	this.bF = document.createElement("hr"), this.resize = function() {
		aP.aS.hK(this.bF, 8, ab.a4Y)
	}, (bF = this.bF).style.marginBottom = bF.style.marginTop = "0.65em", bF.style.marginLeft = bF.style.marginRight = "-4%", bF.style.border = "none"
}

function a6J() {
	this.jp = new mT, this.jr = new xz, this.jv = new a6K, this.w = function() {
		b4.bw || this.jp.w()
	}, this.cX = function() {
		b4.bw || (this.jp.cX(), 3 !== fZ.fa) || aF.bP() % 15 != 5 && 2 !== b4.cU || fZ.fx().jm()
	}, this.ju = function() {
		0 === b4.cU && iY.x9(), b4.x7.gC(), b4.data.canvas = null, fz.eG.close(fz.eG.o6, 3257), fz.eG.o6 = 0, b4.data.isReplay = 1, b4.xA()
	}, this.jt = function(ct) {
		var aH = ct.indexOf("=");
		return 0 <= aH ? ct.substring(aH + 1) : ct
	}, this.js = function(ct) {
		return ct
	}
}

function iw() {
	var gQ, gR, gS, gg;

	function gV() {
		gZ(), 2 !== b4.data.tIncomeType && (b4.data.tIncomeData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		2 === b4.data.tIncomeType && aP.g9.h9(gS.gf(), b4.data.tIncomeData, 255)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(177), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), gj.gm(new gn({
			go: [L(99), L(77), L(75)],
			value: b4.data.tIncomeType
		}, function(p) {
			gZ(), 2 !== p || b4.data.tIncomeData || (b4.data.tIncomeData = new Uint8Array(b4.dg), b4.data.tIncomeData.fill(32)), b4.data.tIncomeType = p, fZ.ff(26)
		})), gg.push(gj)
	}(gg = []), function(gg) {
		var gj;
		1 === b4.data.tIncomeType && ((gj = new gk).gl("Value"), gj.gp(new nm({
			p: -1,
			value: b4.data.tIncomeValue
		}, 1, 0, function(bF) {
			var value = aA.cI(Math.floor(bF.target.value), 0, 255);
			bF.target.value = b4.data.tIncomeValue = value
		})), gg.push(gj))
	}(gg), function(gg) {
		var gj;
		2 === b4.data.tIncomeType && ((gj = new gk).gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.tIncomeData, 4)), gj.gp(gS), gg.push(gj))
	}(gg), gg))
}

function a56() {
	this.xk = function(ar) {
		ar.fill(0)
	}, this.a6M = function(ar) {
		for (var ay = ar.length, aH = 0; aH < ay; aH++) ar[aH] = []
	}, this.a65 = function(n0, au) {
		for (var n1 = mK.a28, aH = 0; aH < 3; aH++) n1[aH] = au * n0[aH];
		return n1
	}, this.a66 = function(n0, n1, a6N) {
		for (var fE = 0, aH = 0; aH < 3; aH++) fE += Math.abs(n0[aH] - n1[aH]);
		return a6N <= fE
	}, this.a67 = function(n0, a6O) {
		for (var aH = 0; aH < 3; aH++) n0[aH] = aA.cI(n0[aH] + a6O, 0, 255);
		return n0
	}, this.gd = function(ar, jA, jB) {
		jB = jB || ar.length - 1;
		for (var a6P = 0, aH = jA = jA || 0; aH <= jB; aH++) a6P += ar[aH];
		return a6P
	}, this.a6Q = function(ar, a6R) {
		for (var aH, pu, ay = ar.length, a6S = [], dF = ay - 1; 0 <= dF; dF--) {
			for (aH = pu = 0; aH < ay; aH++) a6R(ar[aH]) < a6R(ar[pu]) && (pu = aH);
			ay--, a6S.push(ar[pu]), ar[pu] = ar[ay], ar.pop()
		}
		return a6S
	}, this.min = function(ar) {
		var aH, b0, ay = ar.length;
		if (0 === ay) return 0;
		for (b0 = ar[0], aH = 1; aH < ay; aH++) b0 = Math.min(b0, ar[aH]);
		return b0
	}, this.max = function(ar) {
		var ay = ar.length;
		if (0 === ay) return 0;
		for (var b0 = ar[0], aH = 1; aH < ay; aH++) b0 = Math.max(b0, ar[aH]);
		return b0
	}, this.gB = function(ar, b0) {
		for (var ay = ar.length, eU = 0, aH = 0; aH < ay; aH++) eU += ar[aH] > b0;
		return eU
	}, this.a6T = function(a6U, a6V, min) {
		for (var ay = a6V[0], aH = ay - 1; 0 <= aH; aH--) a6U[aH] < min && (a6U[aH] = a6U[--ay]);
		a6V[0] = ay
	}, this.a6W = function(ar, ay, value) {
		for (var aH = 0; aH < ay; aH++) ar[aH] -= value
	}, this.a6X = function(ar) {
		for (var ay = ar.length, aH = 0; aH < ay; aH++)
			if ("string" != typeof ar[aH]) return !1;
		return !0
	}, this.h9 = function(ct, ar, a6Y) {
		ar.fill(0);
		for (var ej = ct.split(","), ay = Math.min(ej.length, ar.length), aH = 0; aH < ay; aH++) ar[aH] = Math.min(parseInt(ej[aH]), a6Y)
	}, this.ge = function(ct, ar, a6Z) {
		ar.fill("");
		for (var ej = ct.split('"'), ay = Math.min(ej.length, 2 * ar.length), hC = 0, aH = 1; aH < ay; aH += 2) ar[hC++] = ej[aH].slice(0, a6Z)
	}, this.gA = function(ar, eU) {
		if (0 === eU) ar.fill(0);
		else {
			var a6P = this.gd(ar),
				ay = ar.length;
			if (0 === a6P) ar.fill(aA.aB(eU, ay));
			else
				for (var aH = 0; aH < ay; aH++) ar[aH] = aA.aB(eU * ar[aH], a6P);
			if (0 === (a6P = this.gd(ar))) ar[1] = eU;
			else
				for (var hC = 0; a6P++ < eU;) ar[hC = (hC + 1) % ay] && ar[hC]++
		}
	}, this.a6a = function(ar) {
		if (!ar) return 0;
		var ay = ar.length;
		if (0 === ay) return 0;
		for (var b0 = ar[ay - 1], aH = ay - 2; 0 <= aH; aH--)
			if (ar[aH] !== b0) return aH + 2;
		return 1
	}, this.tT = function(ar) {
		for (var a6P = 0, aH = 0; aH < ar.length; aH++) a6P += ar[aH].length;
		return a6P
	}, this.a6b = function(a6c) {
		for (var ar = [], aH = 0; aH < a6c.length; aH++) ar = ar.concat(a6c[aH]);
		return ar
	}, this.has = function(ar, b0) {
		for (var ay = ar.length, aH = 0; aH < ay; aH++)
			if (ar[aH] === b0) return !0;
		return !1
	}
}

function a6d() {
	var a6e, a6f, b, aY, aZ, a6g, a6h;
	this.w = function() {
		a6e = new Array(2), a6f = new Array(2), this.cN = !1, a6h = a6g = zO = zN = 0, mn = 1, this.resize()
	}, this.resize = function() {
		b = (b = Math.floor((a0.a1.a2() ? .072 : .0502) * y.bx)) < 8 ? 8 : b;
		for (var aH = 1; 0 <= aH; aH--) a6e[aH] = document.createElement("canvas"), a6e[aH].width = b, a6e[aH].height = b, a6f[aH] = a6e[aH].getContext("2d", {
			alpha: !0
		});
		this.by(),
			function() {
				for (var a70 = Math.floor(1 + b / 20), aH = 1; 0 <= aH; aH--) a6f[aH].clearRect(0, 0, b, b), a6f[aH].fillStyle = ab.a4Q, a6f[aH].beginPath(), a6f[aH].arc(b / 2, b / 2, b / 2 - a70, 0, 2 * Math.PI), a6f[aH].fill(), a6f[aH]
					.lineWidth = a70, a6f[aH].fillStyle = ab.am, a6f[aH].strokeStyle = ab.am, a6f[aH].beginPath(), a6f[aH].arc(b / 2, b / 2, b / 2 - a70, 0, 2 * Math.PI), a6f[aH].stroke(), a71(a6f[aH], 0, 0, b, a70, .3, 0 === aH)
			}()
	}, this.mm = function() {
		return -zN / mn
	}, this.d7 = function() {
		return -zO / mn
	}, this.a6l = function(a6m, a1d) {
		zN = mn * a6m - a1d
	}, this.a6n = function(a6o, a1e) {
		zO = mn * a6o - a1e
	}, this.a5 = function(a6k, d9) {
		return b4.qJ || ! function(a6k, d9) {
			return Math.pow(a6k - (aY + b / 2), 2) + Math.pow(d9 - (aZ + b / 2), 2) < b * b / 4 || Math.pow(a6k - (aY + b / 2), 2) + Math.pow(d9 - (aZ + 2 * b), 2) < b * b / 4
		}(a6k, d9) || gH.gJ.data[8].value ? (dD.pR() && (this.cN = !0, a6g = a6k, a6h = d9), !1) : d9 < aZ + 1.25 * b ? this.cV(Math.floor(y.b / 2), Math.floor(y.c / 2), -200) : this.cV(Math.floor(y.b / 2), Math.floor(y.c / 2), 200)
	}, this.aI = function(a6k, d9) {
		var a6p, a6q, wj, wk;
		return !dD.pR() || (a6p = zN, a6q = zO, zN += wj = a6g - a6k, zO += wk = a6h - d9, dl.aI(wj, wk), this.pD(), a6g = a6k, a6h = d9, a6p !== zN) || a6q !== zO
	}, this.cV = function(a6, a7, deltaY) {
		var cT;
		if (dD.pR()) {
			if (0 < deltaY) cT = (cT = 500 / (500 + deltaY)) < .5 ? .5 : cT;
			else {
				if (!(deltaY < 0)) return !1;
				cT = 2 < (cT = (500 - deltaY) / 500) ? 2 : cT
			}
			this.a6r(a6, a7, cT), aF.aG = !0
		}
		return !0
	}, this.a6r = function(aY, aZ, av) {
		var au;
		av = au = (au = 1024 < (au = av) * mn ? 1024 / mn : au) * mn < .125 ? .125 / mn : au, dl.zoom(av, aY, aZ),
			function(au, a6, a7) {
				mn *= au, zN = (zN + a6) * au - a6, zO = (zO + a7) * au - a7, cM.pD()
			}(av, aY, aZ)
	}, this.pD = function() {
		var a6u = y.b / 16,
			a6v = 0,
			a6w = y.c / 16,
			a6x = 0;
		zN < a6u - y.b && (a6v = -y.b + a6u - zN), zN > mn * ev.f0 - a6u && (a6v = mn * ev.f0 - a6u - zN), zO < a6w - y.c && (a6x = -y.c + a6w - zO), mn * ev.f1 - a6w < zO && (a6x = mn * ev.f1 - a6w - zO), zN += a6v, zO += a6x, a6y.ml(), dl.a6z(
			a6v, a6x)
	}, this.by = function() {
		aY = y.b - b - a3.gap, aZ = Math.floor(y.c / 2 - 1.25 * b)
	}, this.aW = function() {
		gH.gJ.data[8].value || (aa.drawImage(a6e[0], aY, aZ), aa.drawImage(a6e[1], aY, Math.floor(aZ + 3 * b / 2)))
	}
}

function a72() {
	this.a73 = "https://", this.a74 = this.a73 + "territorial.io/", this.a75 = this.a74 + "changelog", this.a76 = this.a74 + "terms", this.a77 = this.a74 + "cookie_policy", this.a78 = this.a74 + "privacy", this.a79 = this.a74 + "tutorial", this.a7A =
		this.a74 + "players", this.a7B = this.a74 + "clans", this.a7C = this.a74 + "clan-results", this.a7D = "https://patreon.com/c/territorial", this.a1a = this.a73 + "play.google.com/store/apps/details?id=territorial.io", this.uD = this.a73 +
		"apps.apple.com/app/id1581110913", this.a7E = this.a73 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a1b = this.a73 + "discord.gg/pthqvpTXmh", this.a1c = this.a73 + "www.instagram.com/davidtschacher/", this.a4E =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a7F() {
	var a7G = 0,
		a7I = new Uint16Array(64);

	function a7L(zJ) {
		a7G -= 2;
		for (var aH = zJ; aH < a7G; aH += 2) a7I[aH] = a7I[aH + 2], a7I[aH + 1] = a7I[aH + 3]
	}
	this.w = function() {
		a7G = 0
	}, this.cX = function() {
		var aH, lv, bp;
		if (0 !== a7G)
			if (0 === b2.bN[b4.b5]) a7G = 0;
			else if (0 === m0.a7J(b4.b5)) a7G = 0;
		else
			for (aH = a7G - 2; 0 <= aH; aH -= 2)(lv = a7I[aH]) < b4.dg && 0 === b2.bN[lv] ? a7L(aH) : (bp = a7I[aH + 1], (b4.dg <= lv && lb.a7M(b4.b5) || lv < b4.dg && lb.a7N(b4.b5, lv)) && (dB.a4M.vs(bp, lv), a7L(aH)))
	}, this.a7O = function(lv, bp) {
		! function(lv, bp) {
			for (var aH = 0; aH < a7G; aH += 2)
				if (a7I[aH] === lv) return a7I[aH + 1] = Math.min(a7I[aH + 1] + bp, 1023), 1;
			return
		}(lv, bp) && 64 !== a7G && (a7I[a7G] = lv, a7I[a7G + 1] = bp, a7G += 2)
	}
}

function a7Q() {
	var a7R, a7S, size, lv, eA, a7T;

	function a7U(player) {
		return player < b4.du ? a7R * player : a7R * b4.du + a7S * (player - b4.du)
	}
	this.w = function() {
		a7R = b4.du < 16 ? 12 : 8, a7S = 4;
		var ay = a7U(b4.dg);
		size = new Uint8Array(b4.dg), lv = new Uint16Array(ay), eA = new Uint32Array(ay), a7T = new Uint8Array(ay)
	}, this.a7V = function(rx, a7W) {
		var a7X = this.a7Y(rx, a7W),
			a7W = (this.a7Z(rx, a7W, 0), aP.cA.lx(rx, a7X));
		aM.lw(rx, a7X - a7W, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a7b = function(player, a7W) {
		var a7d, a7W = function(player, a7W) {
			var aH, at = a7U(player);
			for (aH = size[player] - 1; 0 <= aH; aH--)
				if (lv[at + aH] === a7W) return aH;
			return size[player]
		}(player, a7W);
		a7W !== size[player] && (a7d = eA[a7U(player) + a7W], this.a7e(player, a7W), this.dc(player, a7d, b4.dg))
	}, this.m1 = function(player, a7W) {
		for (var at = a7U(player), aH = size[player] - 1; 0 <= aH; aH--)
			if (lv[at + aH] === a7W) return !0;
		return !1
	}, this.m2 = function(player) {
		return player < b4.du ? size[player] < a7R : size[player] < a7S
	}, this.a7J = function(player) {
		return size[player]
	}, this.a7f = function(player, aH) {
		return lv[a7U(player) + aH]
	}, this.a7g = function(player, aH) {
		return eA[a7U(player) + aH]
	}, this.a7Y = function(player, a7W) {
		for (var at = a7U(player), aH = size[player] - 1; 0 <= aH; aH--)
			if (lv[at + aH] === a7W) return eA[at + aH];
		return 0
	}, this.wX = function(player) {
		for (var at = a7U(player), b0 = 0, aH = size[player] - 1; 0 <= aH; aH--) b0 += eA[at + aH];
		return b0
	}, this.a7Z = function(player, a7W, a7d) {
		for (var at = a7U(player), aH = size[player] - 1; 0 <= aH; aH--) lv[at + aH] === a7W && (eA[at + aH] = a7d)
	}, this.a7h = function(player, aH, a7d) {
		eA[a7U(player) + aH] = Math.max(a7d, 0)
	}, this.a7i = function(player, aH) {
		a7T[a7U(player) + aH] = 0
	}, this.a7j = function(player, aH) {
		return a7T[a7U(player) + aH]
	}, this.dc = function(player, a7d, a7W) {
		mF.mG.mH[player] = mF.mG.mH[a7W] = 8, aP.cA.a7k(a7W) && aM.b1[6 - aP.cA.dj(player)]++;
		for (var at = a7U(player), aH = size[player] - 1; 0 <= aH; aH--)
			if (lv[at + aH] === a7W) return eA[at + aH] += a7d, void(eA[at + aH] = eA[at + aH] > b4.a7l ? b4.a7l : eA[at + aH]);
		lv[at + size[player]] = a7W, eA[at + size[player]] = a7d, a7T[at + size[player]] = 1, size[player]++, a7W === b4.b5 ? d8.cm(player, 5) : player < b4.du && player === b4.b5 && dl.dm(a7W)
	}, this.a7e = function(player, p) {
		var dF, at;
		if (0 !== size[player])
			for (at = a7U(player), size[player]--, dF = p; dF < size[player]; dF++) lv[at + dF] = lv[at + dF + 1], eA[at + dF] = eA[at + dF + 1], a7T[at + dF] = a7T[at + dF + 1]
	}, this.a7m = function(player) {
		for (var dF, at, a7n = [], aH = fG.fH - 1; 0 <= aH; aH--)
			for (at = a7U(fG.fI[aH]), dF = size[fG.fI[aH]] - 1; 0 <= dF; dF--)
				if (lv[at + dF] === player) {
					a7n.push(fG.fI[aH]);
					break
				} return a7n
	}
}

function a6K() {
	var a7o = 0;

	function a7t(ct, id) {
		a7o || (id ? 1 === id ? d8.ch = L(277) + ": " + ct : fZ.ff(4, 3, new uB(L(278), ct, 1)) : fZ.ff(4, 3, new uB("⚠️ " + L(276), ct, 1)))
	}
	this.jT = function(ct, a7p) {
		var us, dU;
		return a7o = a7p, gL.fk.xf(gL.fk.xg(gL.fk.a7q(ct))), d8.ch = "", !! function() {
			if (jQ.size < 10) a7t("File Too Small");
			else {
				var a7v = jQ.hq(12),
					yE = (a7v !== hs.rVersion && a7t("Incompatible Version   Required: " + hs.rVersion + ("   Found: " + a7v) + ("   Compatible at territorial.io/" + a7v), 1), jQ.hq(12)),
					a7w = jQ.hq(31);
				if (a7w !== jQ.size) a7t("Size Error: " + a7w + " " + jQ.size);
				else if (function(c, a7v) {
						for (var dP = jQ.i0, ay = jQ.size, yE = a7v, aH = 3; aH < ay; aH++) yE = yE + dP[aH] & 4095;
						return yE === c || (a7t("Hash Error: " + yE + " " + c + " " + ay), !1)
					}(yE, a7v)) return 1
			}
			return
		}() && (us = jQ, (dU = b4.data = new gO).mapType = us.hq(2), dU.mapProceduralIndex = us.hq(8), dU.mapRealisticIndex = us.hq(8), dU.mapSeed = us.hq(14), dU.mapName = us.zx(5), 2 === dU.mapType && us.zy(), dU.passableWater = us.hq(1),
			dU.passableMountains = us.hq(1), dU.playerCount = us.hq(10), dU.humanCount = us.hq(10), dU.selectedPlayer = us.hq(9), dU.gameMode = us.hq(1), dU.playerMode = us.hq(2), dU.battleRoyaleMode = us.hq(2), dU.numberTeams = us.hq(4), dU
			.isZombieMode = us.hq(1), dU.isContest = us.hq(1), dU.isReplay = us.hq(1), dU.elo = us.zr(2, 14, 2), dU.colorsType = us.hq(1), dU.colorsPersonalized = us.hq(1), dU.colorsData = us.zr(10, 18, 512), dU.selectableColor = us.hq(1), dU
			.teamPlayerCount = us.zr(4, 10, 9), dU.neutralBots = us.hq(1), dU.botDifficultyType = us.hq(2), dU.botDifficultyValue = us.hq(4), dU.botDifficultyTeam = us.zr(4, 4, 9), dU.botDifficultyData = us.zr(10, 4, 512), dU.spawningType =
			us.hq(2), dU.spawningSeed = us.hq(14), dU.spawningData = us.zr(11, 12, 1024), dU.selectableSpawn = us.hq(1), dU.playerNamesType = us.hq(2), dU.playerNamesData = us.zv(10, 5, 512), dU.selectableName = us.hq(1), dU.aIncomeType = us
			.hq(2), dU.aIncomeValue = us.hq(8), dU.aIncomeData = us.zr(10, 8, 512), dU.tIncomeType = us.hq(2), dU.tIncomeValue = us.hq(8), dU.tIncomeData = us.zr(10, 8, 512), dU.iIncomeType = us.hq(2), dU.iIncomeValue = us.hq(8), dU
			.iIncomeData = us.zr(10, 8, 512), dU.sResourcesType = us.hq(2), dU.sResourcesValue = us.hq(11), dU.sResourcesData = us.zr(10, 11, 512), dU.gK = us.zr(10, 30, 512), !! function() {
				var us = jQ,
					xa = us.hq(5),
					a7y = us.hq(30),
					a7z = us.hq(30);
				if (a7y + a7z > 8 * us.size) return void a7t("Corrupted File");
				return function(ay) {
						var a82 = new Uint8Array(ay),
							a83 = new Uint16Array(ay),
							a84 = new Uint32Array(ay),
							a85 = new Uint32Array(ay);
						jo.jp.mU = a82, jo.jp.mV = a83, jo.jp.mW = a84, jo.jp.mX = a85;
						for (var aH = 0; aH < ay; aH++) {
							var id = jQ.hq(4);
							a82[aH] = id, a83[aH] = jQ.hq(9), 0 === id ? a84[aH] = jQ.hq(22) : 1 === id ? (a84[aH] = jQ.hq(10), a85[aH] = jQ.hq(10)) : 2 === id ? (a84[aH] = jQ.hq(10), a85[aH] = jQ.hq(9)) : 3 === id ? (a84[aH] = jQ.hq(10),
								a85[aH] = jQ.hq(27)) : 4 === id ? (a84[aH] = jQ.hq(10), a85[aH] = jQ.hq(16)) : 5 === id || 6 === id ? a84[aH] = jQ.hq(10) : 7 === id ? a84[aH] = jQ.hq(1) : 10 === id && (a84[aH] = jQ.hq(20), a85[aH] = jQ
								.hq(22))
						}
					}(a7y),
					function(ay, xa) {
						var mY = new Uint8Array(ay),
							mZ = new Array(ay);
						mZ.fill(0), jo.jp.mY = mY, jo.jp.mZ = mZ;
						for (var aH = 0; aH < ay; aH++) mY[aH] = jQ.hq(1), mZ[aH] = jQ.hq(xa)
					}(a7z, xa), 1
			}()) && (jQ.p < 8 * jQ.size - 13 || jQ.p > 8 * jQ.size ? (a7t("Out Of Bounds Error: " + jQ.p + " " + 8 * jQ.size), !1) : (jo.jp.jq = ct, 2 !== b4.data.mapType || (a7t("Load base64 image...", 2), a7p)))
	}, this.a01 = function(a00, a7u) {
		var dT = document.createElement("canvas"),
			hJ = dT.getContext("2d");
		if (dT.width = a00.width, dT.height = a00.height, hJ.drawImage(a00, 0, 0), b4.data.canvas = dT, a7o || a7u) return b4.cU ? void 0 : (b4.data.mapType = 2, fZ.j3(), void fZ.ff(19));
		jo.ju()
	}
}

function a86() {
	var a87;

	function a8J(dT, x, aY, aZ, globalAlpha) {
		ev.kn.save(), ev.kn.globalAlpha = globalAlpha, ev.kn.imageSmoothingEnabled = !1, ev.kn.scale(x, x), ev.kn.drawImage(dT, Math.floor(aY * (ev.f0 / x - dT.width)), Math.floor(aZ * (ev.f1 / x - dT.height))), ev.kn.restore()
	}
	this.f3 = 0, this.f4 = 0, this.f5 = 0, this.f6 = 0, this.w = function() {
		(a87 = new Array(ev.rT))[0] = {
			b: [0, 5e3, 8e3, 1e4],
			bf: [220, 250, 255, 220],
			ej: [190, 220, 0, 0],
			dL: [170, 200, 0, 0]
		}, a87[1] = {
			b: [0, 4e3, 5e3, 6e3, 1e4],
			bf: [25, 0, 100, 0, 25],
			ej: [25, 0, 0, 0, 25],
			dL: [25, 0, 0, 0, 25]
		}, a87[2] = {
			b: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			bf: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			ej: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			dL: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a87[3] = {
			b: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			bf: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			ej: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			dL: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, a87[4] = {
			b: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			bf: [10, 10, 20, 10, 10, 170, 212],
			ej: [20, 20, 60, 100, 100, 110, 170],
			dL: [70, 70, 160, 30, 30, 60, 120]
		}, a87[5] = {
			b: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			bf: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			ej: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			dL: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a87[6] = {
			b: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			bf: [10, 10, 60, 255, 255, 200, 200],
			ej: [10, 10, 60, 255, 255, 200, 200],
			dL: [80, 80, 255, 255, 255, 200, 200]
		}, a87[7] = {
			b: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			bf: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			ej: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			dL: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a87[8] = {
			b: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			bf: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			ej: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			dL: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a87[9] = {
			b: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			bf: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			ej: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			dL: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a87[20] = {
			b: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			bf: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			ej: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			dL: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, a87[21] = {
			b: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			bf: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			ej: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			dL: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a88 = function() {
		var a8I, aH, dF, bG, rF = function() {
				var rF;
				return ev.x5 = document.createElement("canvas"), ev.x5.width = ev.f0, ev.x5.height = ev.f1, ev.kn = ev.x5.getContext("2d", {
					alpha: !1
				}), rF = ev.kn.getImageData(0, 0, ev.f0, ev.f1), ev.kq = rF.data, rF
			}(),
			b = a87[ev.ey].b,
			bf = a87[ev.ey].bf,
			ej = a87[ev.ey].ej,
			dL = a87[ev.ey].dL,
			b0 = kW.kh(),
			ay = b.length - 2,
			a8D = new Array(1 + ay),
			a8E = new Array(1 + ay),
			a8F = new Array(1 + ay),
			a8G = new Array(1 + ay);
		for (dF = ay; 0 <= dF; dF--) a8D[dF] = b[dF + 1] - b[dF], a8E[dF] = bf[dF + 1] - bf[dF], a8F[dF] = ej[dF + 1] - ej[dF], a8G[dF] = dL[dF + 1] - dL[dF];
		for (aH = ev.f0 * ev.f1 - 1; 0 <= aH; aH--)
			for (dF = ay; 0 <= dF; dF--)
				if (b0[aH] >= b[dF]) {
					bG = b0[aH] - b[dF], ev.kq[4 * aH] = bf[dF] + i7(a8E[dF] * bG, a8D[dF]), ev.kq[4 * aH + 1] = ej[dF] + i7(a8F[dF] * bG, a8D[dF]), ev.kq[4 * aH + 2] = dL[dF] + i7(a8G[dF] * bG, a8D[dF]), ev.kq[4 * aH + 3] = 255;
					break
				} ev.kn.putImageData(rF, 0, 0), ev.a8B(ev.ey) && nj.nk() && ev.a8B(ev.ey) && (rF = nj.vo("arena"), a8I = nj.vo("territorial.io"), a8J(rF, 5, .5, .5, .1), a8J(a8I, 2, .5, .45, .1)), ev.xj = !0, aF.aG = !0
	}, this.a8K = function() {
		for (var dP, aY, aZ, a8L, zG, bH, f4 = 0, b = ev.f0, c = ev.f1, bG = b * c * 4, a8M = a8N, a8O = ev.kq, aH = b - 1; 0 <= aH; aH--) a8M[(dP = aH << 2) + 2] = a8M[bG - dP - 2] = 3;
		for (bG = 4 * b, aH = c - 1; 0 <= aH; aH--) a8M[(dP = aH * bG) + 2] = a8M[dP + bG - 2] = 3;
		for (a8L = b - 1, zG = c - 1, aZ = 1; aZ < zG; aZ++)
			for (bG = aZ * b, aY = 1; aY < a8L; aY++) bH = 1 - (a8O[(dP = bG + aY << 2) + 2] > a8O[dP + 1] && a8O[dP + 2] > a8O[dP]), a8M[dP + 2] = 6 - 5 * bH, f4 += bH;
		this.f3 = (b - 2) * (c - 2), this.f6 = 0, ev.yX(ev.ey) && (ev.f6.a8P(), ev.f6.a8Q(4, 5)), this.f4 = b4.a5K = f4 - this.f6, this.f5 = this.f3 - this.f4 - this.f6, this.f5 && (ev.f6.a8Q(6, 2), ev.f6.a8R())
	}
}

function a8S() {
	function a8X() {
		return {
			f0: ev.f0,
			f1: ev.f1,
			x5: ev.x5,
			kn: ev.kn,
			ko: ev.ko,
			kq: ev.kq,
			ey: ev.ey,
			mapSeed: ev.mapSeed,
			xj: ev.xj
		}
	}

	function a8V(aH) {
		return 1 !== aH && ev.a8W(aH) && aH !== ev.a8Z()
	}
	this.rT = 24, this.rW = 12, this.a3K = 4096, this.f0 = 0, this.f1 = 0, this.x5 = null, this.kn = null, this.ko = null, this.kq = null, this.ey = 0, this.mapSeed = 0, this.xj = !1, this.kc = new kJ, this.ew = new rI, this.f6 = new a8T, this.w =
		function() {
			this.ew.w()
		}, this.gD = function(map, a8U) {
			((map %= this.rT) !== this.ey || a8V(this.ey) && a8U !== this.mapSeed) && (this.xj = !1, this.kc.kV(), kI.kg(map), this.ey = map, this.mapSeed = a8U, a8V(map) && (ev.ew.ex[map].ke = a8U), this.a8W(this.ey) ? (map = ev.ew.ex[this.ey], this
				.f0 = map.b, this.f1 = map.c, kI.kg(map.ke), kW.gD([this.f0, this.f1, map.rU, map.rV]), uk(), f2.a88(), kW.kX()) : a3J())
		}, this.x6 = function(map, a8U) {
			var bG = a8X(),
				map = (this.gD(map, a8U), this.kc.kV(), a8X());
			return a8U = bG, ev.f0 = a8U.f0, ev.f1 = a8U.f1, ev.x5 = a8U.x5, ev.kn = a8U.kn, ev.ko = a8U.ko, ev.kq = a8U.kq, ev.ey = a8U.ey, ev.mapSeed = a8U.mapSeed, ev.xj = a8U.xj, map
		}, this.gF = function(canvas) {
			canvas && this.x5 !== canvas && (this.f0 = canvas.width, this.f1 = canvas.height, this.x5 = canvas, this.kn = this.x5.getContext("2d", {
				alpha: !1
			}), this.rF = this.kn.getImageData(0, 0, this.f0, this.f1), this.kq = this.rF.data, this.ey = this.a8Z(), this.mapSeed = 0, ev.ew.ex[this.ey].name = b4.data.mapName)
		}, this.yX = function(aH) {
			return 3 === aH || 7 === aH || 9 === aH || 21 === aH || aH === this.a8Z()
		}, this.a8a = function(aH) {
			return 2 === aH || 7 === aH || 9 === aH || 20 === aH
		}, this.a8B = function(aH) {
			return 1 === aH
		}, this.a8Z = function() {
			return this.rT
		}, this.a8W = function(aH) {
			return void 0 === this.ew.ex[aH].ka
		}, this.gE = function(dU) {
			return 0 === dU.mapType ? dU.mapProceduralIndex < 10 ? dU.mapProceduralIndex : 10 + dU.mapProceduralIndex : 1 === dU.mapType ? 10 <= dU.mapRealisticIndex ? 22 + dU.mapRealisticIndex - 10 : dU.mapRealisticIndex + 10 : void 0
		}, this.a8b = function(dU, a8c) {
			0 === dU.mapType ? dU.mapProceduralIndex = a8c < 10 ? a8c : a8c - 10 : 1 === dU.mapType && (dU.mapRealisticIndex = a8c - (22 <= a8c ? 12 : 10))
		}
}

function a8d() {
	var a8e = 0,
		a8f = "",
		a8g = 0,
		a8h = 0,
		a8i = 0;

	function st(sw) {
		fz.t3.i1(3, sw)
	}

	function a8s(eU) {
		a8e = 1, fd.message.a8u({
			id: 6,
			value: eU
		})
	}

	function a8m(dR) {
		var a8w = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return dR.match(a8w)
	}
	this.sy = function(dR) {
		var a8j, ar, a8o;
		if (a8e) return a8e = 0, "yes" === (a8j = dR.toLowerCase()) || "y" === a8j ? void st(a8f) : void fd.message.a8u({
			id: 5,
			a0Q: 7
		});
		!(dR.indexOf("@") < 0) && (a8j = a8m(dR)) ? (a8f = dR, ar = function(a8l) {
			for (var ay = a8l.length, a8v = [0, 0, 0, 0], aH = 0; aH < ay; aH++)
				for (var b = a8l[aH], dF = 0; dF < 4; dF++) b === "@room" + (dF + 1) && (a8v[dF] = 1);
			if ((a8h = aP.g9.gd(a8v)) % 4 == 0) return aP.g9.a6b(fd.tI.tJ);
			for (dF = 0; dF < 4; dF++) a8v[dF] = a8v[dF] ? fd.tI.tJ[dF] : [];
			return aP.g9.a6b(a8v)
		}(a8j), function(a8l, a8o, dR) {
			if (!a8g) return;
			for (var ay = a8o.length, aH = 0; aH < ay; aH++) 2 === a8o[aH].id && (dR = dR.replace(a8l[a8o[aH].p], "@" + a8o[aH].b0));
			return a8e = 1, st((a8f = dR).slice(0, 126) + "|"), 1
		}(a8j, a8o = function(a8l) {
			for (var a8o = [], ay = (a8i = a8g = 0, a8l.length), aH = 0; aH < ay; aH++) {
				var b = a8l[aH],
					at = b.length;
				aP.aQ.startsWith(b, "@[") ? at <= 9 && aP.aQ.hg(b, "]") && a8o.push({
					id: 0,
					b0: b.substring(2, at - 1).toUpperCase()
				}) : 6 === at ? aP.aQ.startsWith(b, "@room") || (a8i++, a8o.push({
					id: 1,
					b0: gL.fk.gM(b.substring(1), 5)
				})) : 1 < at && at < 5 && 0 <= (at = oi.data.oj(b.substring(1))) && (a8o.push({
					id: 2,
					b0: at,
					p: aH
				}), a8g = 1)
			}
			return a8o
		}(a8j), dR) || (0 === a8o.length ? a8h || function(a8l) {
			for (var ay = a8l.length, aH = 0; aH < ay; aH++) {
				var b = a8l[aH];
				if ("@all" === b || "@everyone" === b) return 1
			}
			return
		}(a8j) ? a8s(ar.length) : st(dR) : a8j.length === a8i ? st(dR) : (function(ar, a8o) {
			var at = a8o.length;
			if (0 === at) return;
			var ay = ar.length;
			loop: for (var aH = ay - 1; 0 <= aH; aH--) {
				for (var dF = 0; dF < at; dF++)
					if (0 === a8o[dF].id) {
						if (a8o[dF].b0 === aP.aQ.z1(ar[aH].username)) continue loop
					} else if (1 === a8o[dF].id && a8o[dF].b0 === ar[aH].fi) continue loop;
				ar[aH] = ar[--ay], ar.pop()
			}
		}(ar, a8o), a8s(ar.length)))) : st(dR)
	}, this.a8x = function(dR) {
		var a8l = a8m(dR);
		if (a8l)
			for (var a8y = new RegExp("^[0-9]+$"), ay = a8l.length, aH = 0; aH < ay; aH++) {
				var b = a8l[aH].substring(1),
					at = b.length;
				1 <= at && at <= 3 && a8y.test(b) && (at = parseInt(b, 10), !isNaN(at)) && 0 <= at && at < oi.data.ar.length && (dR = dR.replace("@" + b, "@" + oi.data.ar[at]))
			}
		return dR
	}
}

function a8z() {
	this.lV = new a1o, this.a90 = new a5o, this.eG = new a91, this.kS = new a92, this.a93 = new a94, this.a95 = new lM, this.a5O = new a96, this.a97 = new uE, this.uV = new a98, this.a99 = new z9, this.vv = new a9A, this.a9B = new a9C, this.uM =
		new v2, this.fr = new w5, this.vx = new a9D, this.lT = new a9E, this.a9F = new a9G, this.w = function() {
			this.uM.w(), this.a90.w(), this.eG.w(), this.kS.w(), this.a93.w(), this.a99.w(), this.lT.w()
		}, this.aW = function() {
			this.a99.aW(), this.a90.aW()
		}
}

function ih() {
	var pk, pl, gg;
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), pl.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(L(279), [new fR("⬅️ " + L(71), function() {
		fZ.ff(7, fZ.j5(7).iX)
	}), new fR(L(280), function() {
		gH.rg.nf(105, gL.fk.a9I(pl.xS[0].nn[0].bF.value, 5)), gH.rg.nf(106, gL.fk.a9I(pl.xS[1].nn[0].bF.value, 15)), fZ.ff(8, fZ.j5(7).iX, new fg(18))
	})]), pl = new gW(pk.gX, ((gg = []).push(function() {
		var gj = new gk;
		return gj.gl(L(281)), gj.gp(new nm({
			value: "",
			p: -1
		})), gj
	}()), gg.push(function() {
		var gj = new gk,
			a9M = (gj.gl(L(282)), new nm({
				value: "",
				p: -1
			}));
		return a9M.bF.type = "password", gj.gp(a9M), gj.gp(new pw([new fR(L(283), function(bF) {
			return bF.textContent === L(283) ? (bF.textContent = L(284), a9M.bF.type = "text") : (bF.textContent = L(283), a9M.bF.type = "password"), !0
		}).button])), gj
	}()), gg.push(function() {
		var gj = new gk;
		return gj.gl(L(285)), gj.np(L(286)), gj.np(L(287)), gj.np(L(288)), gj
	}()), gg))
}

function a9N() {
	this.eG = new a9O, this.a9P = new a9Q, this.eK = new nw, this.t3 = new hk, this.hu = new a9R, this.g0 = new oV, this.a9S = new a9T, this.a9U = new j7, this.eL = new a9V, this.a9W = new a9X, this.a9Y = new a9Z, this.a9a = new a9b, this.a9c =
		new jO, this.w = function() {
			this.eG.w()
		}
}

function a9d() {
	this.a9e = function() {
		var a9h;
		return !(fG.fH < 3 || b2.b3[pd[0]] >= b4.a5K >> 1) && (b4.e2 ? 9 !== b4.f7 && (a9h = mD.a9i(), !(2 * mD.a9k(pC.a35()) >= a9h)) : function() {
			if (8 === b4.f7) return !1;
			var a9h = mD.a9i();
			if (2 * b2.e1[pd[0]] >= a9h) return !1;
			return !0
		}())
	}
}

function sn(iG, tZ, a9l) {
	this.no = document.createElement("div"), this.iK = iG;
	var a9m = 0;
	this.resize = function(a9n, a9o) {
		var ay = iG.length;
		if (!a9l)
			for (var aH = 1; aH < ay; aH++) aP.aS.hK(iG[aH].button, 4);
		for (var a9p = 0, aH = 0; aH < ay; aH++) a9p += iG[aH].button.offsetWidth;
		if (a9n && (a9m = a9n.offsetWidth), a9o && a9p < a9m)
			for (aH = 0; aH < ay; aH++) iG[aH].button.style.width = (100 * iG[aH].button.offsetWidth / a9p).toFixed(2) + "%";
		else
			for (aH = 0; aH < ay; aH++) iG[aH].button.style.width = "auto";
		a9o || this.resize(a9n, 1)
	};
	var cP = this;
	cP.no.style.height = cP.no.style.maxHeight = "100%";
	for (var aH = 0; aH < iG.length; aH++) iG[aH].rf(tZ), iG[aH].button.style.height = "100%", iG[aH].button.style.padding = "0.0em 0.9em", cP.no.appendChild(iG[aH].button)
}

function a9q() {
	a9r() ? (a9s(), a9t !== b4.dg && a9u()) : a9v()
}

function a9u() {
	lb.a9w(), lb.a9x(b2.a5J[a9t]), lb.a9x(b2.ld[a9t]), ev.yX(ev.ey) && lb.a9x(b2.yY[a9t]), lb.a9y(b2.m3[a9t]), lb.a9z(b2.ld[a9t]), lb.a9z(b2.yY[a9t]), lb.aA0(), lb.aA1()
}

function a9s() {
	aA2 = !0, m0.a7h(aA3, aA4, aA5), m0.a7i(aA3, aA4), b2.b3[aA3] += aA6, lb.aA7(), aA8()
}

function a9r() {
	return (a9t === b4.dg ? aA9 : aAA)()
}

function aAA() {
	var aAB = aA6 * b4.aAC,
		aAD = aAE(),
		aAF = aAG(),
		aAD = aAB + 2 * aAD + aAF,
		aAI = aAJ * aA6;
	return aAD < aAI ? (aA5 -= aAD, aM.lw(aA3, aAD, 13), aAK(aAD - aAB, aAF), !0) : aAL && 0 === aAF ? (aA5 -= aAI, aAI += aP.cA.aAM(aA3, aAD - aAI + 1), aM.lw(aA3, aAI, 13), aAK(aAI - aAB, 0), !0) : (aA5 -= aAI, aM.lw(aA3, aAI, 13), aAK(aAI - aAB,
		aAF), !1)
}

function aAK(aAI, aAF) {
	if (0 < aAF) {
		if (aAI <= aAF) return aM.lw(a9t, aAI, 13), void m0.a7Z(a9t, aA3, aAF - aAI);
		m0.a7Z(a9t, aA3, 0), aAI -= aAF
	}
	aAI = aA.aB(aAI, 2), aAI = Math.min(b2.e1[a9t], aAI), aM.lw(a9t, aAI, 13), b2.e1[a9t] -= aAI
}

function aAG() {
	return m0.a7Y(a9t, aA3)
}

function aAE() {
	return aA.aB(aA6 * b2.e1[a9t], 1 + aA.aB(10 * b2.b3[a9t], 16))
}

function aA9() {
	var aAN = aA6 * b4.aAC;
	return aA5 -= aAN, aM.lw(aA3, aAN, 13), !0
}

function aA8() {
	for (var aH = aA6 - 1; 0 <= aH; aH--) b2.m3[aA3].push(aAO[aH]), b2.a5J[aA3].push(aAO[aH]), dw.aAP(aAO[aH], aA3)
}

function aAQ() {
	var input;

	function aAR(bF) {
		(bF = bF.target.files) && 0 < bF.length && aAU.aAV(bF[0])
	}

	function aAZ(bF) {
		var cl = new Image;
		cl.onload = aAa, cl.src = bF.target.result
	}

	function aAa(bF) {
		var bF = bF.target,
			b = bF.width,
			c = bF.height,
			aAb = gH.gJ.data[162].value,
			max = Math.min(ev.a3K, aAb),
			aAb = (max = a0.id || qr.rB() ? Math.min(1400, aAb) : max) / Math.max(b, c);
		if (aAb < 1 && (b = Math.floor(aAb * b + .125), c = Math.floor(aAb * c + .125)), max < b || max < c || b < 10 || c < 10) aAb = "Invalid Image Dimensions!", a0.h1 ? a0.h1.showToast(aAb) : alert(aAb);
		else {
			for (var max = document.createElement("canvas"), aAb = (max.width = b, max.height = c, max.getContext("2d")), aAd = document.createElement("canvas"), aAe = (aAd.width = bF.width, aAd.height = bF.height, aAd.getContext("2d")), bF = (aAe
					.drawImage(bF, 0, 0), aAe.getImageData(0, 0, aAd.width, aAd.height)), aAe = aAb.createImageData(b, c), src = bF.data, aAh = aAe.data, a6m = aAd.width / b, a6o = aAd.height / c, aZ = 0; aZ < c; aZ++)
				for (var aY = 0; aY < b; aY++) {
					var aAi = Math.floor(aY * a6m),
						aAi = 4 * (Math.floor(aZ * a6o) * aAd.width + aAi),
						aAl = 4 * (aZ * b + aY);
					aAh[aAl] = src[aAi], aAh[1 + aAl] = src[1 + aAi], aAh[2 + aAl] = src[2 + aAi], aAh[3 + aAl] = 255
				}
			aAb.putImageData(aAe, 0, 0), 20 === fZ.fa && fZ.fx().aAa(max)
		}
	}
	this.w = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aAR
	}, this.t0 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aAS = function() {
		input.click()
	}, this.aAV = function(aAW) {
		var ar = aAW.name.split("."),
			ar = ar[ar.length - 1].toLowerCase();
		"gif" !== ar && "jpg" !== ar && "jpeg" !== ar && "png" !== ar || ((ar = new FileReader).onload = aAZ, ar.readAsDataURL(aAW))
	}
}

function aAm() {
	var aAn, aAp = new Uint16Array(8);

	function aAv(size, player) {
		for (var aH = b2.m3[player].length - 1; size <= aH; aH--) dw.aAy(b2.m3[player][aH], player)
	}
	this.w = function() {
		aAn = 0
	}, this.aAq = function(player, aAr) {
		return mK.a2B[1] = b2.m3[player].length, mK.a2B[0] === b4.dg ? mF.a5Q.a5n(player) : this.a5l(player, mK.a2B[0]), (0 !== mK.a2B[1] || 0 !== b2.m3[player].length) && !(!aAr && mK.a2B[1] === b2.m3[player].length || (mK.a2B[0] === b4.dg ? b2
			.aAs[player]++ : b2.aAt[player]++, 0))
	}, this.aAu = function(player) {
		aAv(mK.a2B[1], player), m0.dc(player, mK.mL[0], mK.a2B[0]), m4.m5(player, !1)
	}, this.a5m = function(player, lv, ay, eA) {
		var aAw = aA.aB(12 * b2.e1[player], 1024);
		eA -= eA >= aA.aB(b2.e1[player], 2) ? aAw : 0, aAv(ay, player), m0.dc(player, eA, lv), b2.e1[player] -= eA + aAw, m4.m5(player, !1)
	}, this.a5l = function(player, lv) {
		for (var lY, yk = dw.yk, aH = b2.a5J[player].length - 1; 0 <= aH; aH--)
			if (dw.aAx(b2.a5J[player][aH]))
				for (lY = 3; 0 <= lY; lY--)
					if (dw.lt(b2.a5J[player][aH] + yk[lY]) && dw.dz(b2.a5J[player][aH] + yk[lY]) === lv) {
						b2.m3[player].push(b2.a5J[player][aH]);
						break
					}
	}, this.a5n = function(player) {
		for (var yk = dw.yk, aH = b2.a5J[player].length - 1; 0 <= aH; aH--)
			if (dw.aAx(b2.a5J[player][aH]))
				for (var lY = 3; 0 <= lY; lY--)
					if (dw.dy(b2.a5J[player][aH] + yk[lY])) {
						b2.m3[player].push(b2.a5J[player][aH]);
						break
					}
	}, this.a5R = function(player, aAz) {
		var aH, dF, lY, aB0, ay = b2.a5J[player].length,
			fE = 256 <= ay ? 12 : 32 <= ay ? 6 : 1,
			a3m = ay - 1 - kI.nG(fE),
			yk = dw.yk;
		aAn = 0;
		loop: for (aH = a3m; 0 <= aH; aH -= fE)
			for (lY = 3; 0 <= lY; lY--)
				if ((aB0 = dw.dy(b2.a5J[player][aH] + yk[lY]) ? b4.dg : dw.dz(b2.a5J[player][aH] + yk[lY])) === b4.dg || dw.lt(b2.a5J[player][aH] + yk[lY]) && aB0 !== player && (aAz || lb.lc(player, aB0))) {
					for (dF = aAn - 1; 0 <= dF; dF--)
						if (aAp[dF] === aB0) continue loop;
					if (aAp[aAn] = aB0, 8 <= ++aAn) return !0
				}
		return 0 < aAn
	}, this.a5S = function(player, aAz) {
		var aH, lY, aB0, yk = dw.yk;
		for (aAn = 0, aH = b2.a5J[player].length - 1; 0 <= aH; aH--)
			for (lY = 3; 0 <= lY; lY--)
				if ((aB0 = dw.dy(b2.a5J[player][aH] + yk[lY]) ? b4.dg : dw.dz(b2.a5J[player][aH] + yk[lY])) === b4.dg || dw.lt(b2.a5J[player][aH] + yk[lY]) && aB0 !== player && (aAz || lb.lc(player, aB0))) return aAp[aAn++] = aB0, !0;
		return !1
	}, this.a5U = function() {
		for (var dL, aH = aAn - 1; 0 <= aH; aH--)
			if (aAp[aH] === b4.dg) {
				for (aAn--, dL = aH; dL < aAn; dL++) aAp[dL] = aAp[dL + 1];
				return !0
			} return !1
	}, this.a5T = function(player) {
		for (var dL, aH = aAn - 1; 0 <= aH; aH--)
			if (m0.m1(player, aAp[aH]))
				for (aAn--, dL = aH; dL < aAn; dL++) aAp[dL] = aAp[dL + 1];
		return 0 === aAn
	}, this.a5b = function() {
		for (var aH = aAn - 1; 0 <= aH; aH--)
			if (aP.cA.dj(aAp[aH])) return !0;
		return !1
	}, this.a5d = function() {
		for (var aH = aAn - 1; 0 <= aH; aH--) aP.cA.dj(aAp[aH]) || (aAp[aH] = aAp[--aAn]);
		return 0 < aAn
	}, this.a5Z = function(player) {
		for (var dL, aB1 = aAp[0], aB2 = b2.e1[aB1] + m0.a7Y(aB1, player), aH = aAn - 1; 1 <= aH; aH--)(dL = b2.e1[aAp[aH]] + m0.a7Y(aAp[aH], player)) < aB2 && (aB1 = aAp[aH], aB2 = dL);
		return aB1
	}, this.a5f = function(player) {
		var c, aB3 = aAp[0];
		if (1 !== aAn)
			for (var aB4 = aA.aB(b2.a3G[player] + b2.a3F[player], 2), aB5 = aA.aB(b2.a3I[player] + b2.a3H[player], 2), wT = i8(aB4 - aA.aB(b2.a3G[aB3] + b2.a3F[aB3], 2)) + i8(aB5 - aA.aB(b2.a3I[aB3] + b2.a3H[aB3], 2)), aH = aAn - 1; 1 <=
				aH; aH--)(c = i8(aB4 - aA.aB(b2.a3G[aAp[aH]] + b2.a3F[aAp[aH]], 2)) + i8(aB5 - aA.aB(b2.a3I[aAp[aH]] + b2.a3H[aAp[aH]], 2))) < wT && (wT = c, aB3 = aAp[aH]);
		return aB3
	}, this.a5k = function() {
		for (var aB6 = aAp, aB7 = aB6[0], e1 = b2.e1, aB8 = e1[aB7], aH = aAn - 1; 1 <= aH; aH--) {
			var dP = aB6[aH],
				dL = e1[dP];
			aB8 < dL && (aB7 = dP, aB8 = dL)
		}
		return aB7
	}, this.a5e = function() {
		return aAp[kI.nG(aAn)]
	}
}

function aB9() {
	function aBF(player) {
		var aJ;
		aP.cA.a7k(player) && (aJ = b2.e1[player] - b2.aBH[player] + m0.wX(player), aM.lw(player, Math.abs(aJ), aJ < 0 ? 18 : 12)), b2.e1[player] = 0, b2.aBH[player] = 0
	}

	function aBK() {
		pB.show(!1, !1, !1, !0), bQ.a1l(), a0z.a1m.a1n()
	}

	function aBD(player, a7n) {
		for (var aH = a7n.length - 1; 0 <= aH; aH--) m0.a7b(a7n[aH], player)
	}

	function aBE(player) {
		var a3F = b2.a3F,
			a3G = b2.a3G,
			a3H = b2.a3H,
			a3I = b2.a3I,
			f0 = ev.f0;
		if (b2.b3[player]) {
			b2.b3[player] = 0;
			for (var bS = a3F[player], bT = a3H[player], aY = a3G[player]; bS <= aY; aY--)
				for (var aZ = a3I[player]; bT <= aZ; aZ--) {
					var dP = 4 * (aZ * f0 + aY);
					dw.uc(player, dP) && dw.aBP(dP)
				}
		}
		a3G[player] = a3I[player] = 0, a3F[player] = a3H[player] = Math.max(f0, ev.f1)
	}
	this.aBA = function(dP) {
		var player, aJ = b2.b3[dP] + b2.aBB[dP];
		eF.eG.wL[dP] ? aJ && (aBD(player = dP, m0.a7m(player)), aBE(player), m4.ph(player), m0.clear(player), aBF(player), function(player) {
			b2.aBB[player] = 0, b2.m3[player] = [], b2.a5J[player] = [], b2.ld[player] = [], b2.yY[player] = []
		}(player)) : !aJ && b2.m3[dP].length || this.a13(dP)
	}, this.a13 = function(player) {
		! function(player) {
			aP.cA.dj(player) || (b2.a1i[player] = ho.a1j.a1k(), b4.a0x++);
			var a7n = m0.a7m(player);
			0 === a7n.length ? aP.cA.nM(player) && aBK() : (aBD(player, a7n), function(player, a7n) {
				var aBN = a7n[function(a7n) {
					var aH, p = 0;
					for (aH = a7n.length - 1; 1 <= aH; aH--) b2.b3[a7n[aH]] > b2.b3[a7n[p]] && (p = aH);
					return p
				}(a7n)];
				9 === b4.f7 && (1 === e4.e7[player] ? kI.a5X(8) && a3w.aBO(aBN) : e8.eA[player] && (d8.el(765, 0), d8.dO(280, L(289, [b2.de[aBN], b2.de[player]]), 765, aBN, ab.eX, ab.a53, -1, !0)));
				if (aP.cA.nM(player)) aBK(), d8.cm(aBN, 1);
				else {
					for (var aH = a7n.length - 1; 0 <= aH; aH--)
						if (aP.cA.a7k(a7n[aH]) && (aM.b1[4 - aP.cA.dj(player)]++, aP.cA.nM(a7n[aH]))) return d8.cm(player, 0);
					aP.cA.dj(player) || d8.di(0, player, aBN)
				}
			}(player, a7n))
		}(player), aBE(player), aBF(player),
			function(player) {
				b2.bN[player] = 0, b2.m3[player] = null, b2.a5J[player] = null, b2.ld[player] = null, b2.yY[player] = null
			}(player), m4.ph(player), m0.clear(player), eF.lV.a1p(player)
	}
}

function aBQ() {
	var aBR, aBS, aBT, aBU, aBV, aBW, aBX, aBY, aBZ, aBa;

	function aBc() {
		var a3n = b4.a3n;
		for (aBZ = a3n; aBZ < b4.dg; aBZ++) aBb();
		for (aBZ = b4.bv ? b4.du : 0; aBZ < a3n; aBZ++) {
			if (!aBf()) {
				for (var dL = b4.aBh = aBZ; dL < a3n; dL++) aBZ = dL, aBb();
				return
			}
			aBg(aBW + aBR * aBV + aA.aB(aBV, 2), aBX + aBS * aBV + aA.aB(aBV, 2))
		}
	}

	function aC2(player) {
		for (var a3F = b2.a3F, a3H = b2.a3H, a3G = b2.a3G, a3I = b2.a3I, aZ = a3H[player]; aZ <= a3I[player]; aZ++)
			for (var aY = a3F[player]; aY <= a3G[player]; aY++) {
				var av = dw.aC3(aY, aZ);
				dw.lt(av) && (dw.aAx(av) ? dw.aAP(av, player) : dw.aC4(av, player))
			}
	}

	function aC1(ar, jA, jB) {
		var aJ = ar[jA];
		ar[jA] = ar[jB], ar[jB] = aJ
	}

	function aBf() {
		return function() {
			var aH;
			for (aH = 0; aH < 8; aH++)
				if (aBR = aA.aB(aBT * kI.random(), kI.value(100)), aBS = aA.aB(aBU * kI.random(), kI.value(100)), aC9()) return 1;
			return
		}() || function() {
			var wj, wk, dF, a9, dL, a8;
			for (wj = aA.aB(aBT * kI.random(), kI.value(100)), wk = aA.aB(aBU * kI.random(), kI.value(100)), dF = 40; 1 <= dF; dF--)
				for (a9 = aBU - dF; 0 <= a9; a9 -= 40)
					for (aBS = (a9 + wk) % aBU, dL = 40; 1 <= dL; dL--)
						for (a8 = aBT - dL; 0 <= a8; a8 -= 40)
							if (aBR = (a8 + wj) % aBT, aC9()) return 1;
			return
		}()
	}

	function aC9() {
		for (var dP, aCB, gap = aA.aB(aBV - aBY, 2), ki = aBX + aBS * aBV + gap, kw = aBW + aBR * aBV + gap, aCA = ki + aBY - 1; ki <= aCA; aCA--)
			for (aCB = kw + aBY - 1; kw <= aCB; aCB--)
				if (dP = dw.aC3(aCB, aCA), !dw.dx(dP) || dw.aAx(dP)) return;
		return 1
	}

	function aBg(a8, a9) {
		aBb(), aCC(a8 - 2, a9 - 2)
	}

	function aBb() {
		b2.bN[aBZ] = 0, b2.b3[aBZ] = b2.aBB[aBZ] = 0, b2.m3[aBZ] = [], b2.a5J[aBZ] = [], b2.ld[aBZ] = [], b2.yY[aBZ] = [], b2.a3F[aBZ] = b2.a3H[aBZ] = b2.a3G[aBZ] = b2.a3I[aBZ] = 0
	}

	function aCC(a8, a9) {
		var dP, aH, aCD, aCE;
		for (b2.bN[aBZ] = 1, b2.a3F[aBZ] = a8 + 10, b2.a3H[aBZ] = a9 + 10, b2.a3I[aBZ] = b2.a3G[aBZ] = 0, aCD = a8; aCD < a8 + 4; aCD++)
			for (aCE = a9; aCE < a9 + 4; aCE++)(a8 < aCD && aCD < a8 + 3 || a9 < aCE && aCE < a9 + 3) && (dP = dw.aC3(aCD, aCE), dw.dx(dP)) && (b2.a3F[aBZ] = Math.min(aCD, b2.a3F[aBZ]), b2.a3G[aBZ] = Math.max(aCD, b2.a3G[aBZ]), b2.a3H[aBZ] = Math
				.min(aCE, b2.a3H[aBZ]), b2.a3I[aBZ] = Math.max(aCE, b2.a3I[aBZ]), aBa[b2.b3[aBZ]] = dP, b2.b3[aBZ]++, dw.aC4(dP, aBZ));
		for (b2.aBB[aBZ] = b2.b3[aBZ], aH = b2.b3[aBZ] - 1; 0 <= aH; aH--) dw.aCF(aBa[aH], aBZ) ? (dw.aAP(aBa[aH], aBZ), b2.a5J[aBZ].push(aBa[aH])) : dw.kl(aBa[aH]) ? (dw.aAP(aBa[aH], aBZ), b2.ld[aBZ].push(aBa[aH])) : dw.aCG(aBa[aH]) && (dw.aAP(aBa[
			aH], aBZ), b2.yY[aBZ].push(aBa[aH]))
	}
	this.w = function() {
		if (aBa = new Array(12), aBY = 6, aBV = 10, aBT = aA.aB(ev.f0, aBV), aBU = aA.aB(ev.f1, aBV), aBW = aA.aB(ev.f0 - aBV * aBT, 2), aBX = aA.aB(ev.f1 - aBV * aBU, 2), b4.bv)
			for (var aH = 0; aH < b4.du; aH++) aBZ = aH, aBb(), b2.bN[aBZ] = 1;
		(0 === b4.data.spawningType ? aBc : 1 === b4.data.spawningType ? (aBc(), function() {
			var a3v = b4.zI;
			b4.zH || a3v++;
			if (!(a3v < 3)) {
				for (var data = b4.data, a3m = (b4.bv ? b4.du : 0) + data.teamPlayerCount[0], pR = b4.aBh, aBi = new Uint32Array(a3v), aBj = new Uint32Array(a3v), aBk = new Uint16Array(a3v), aBl = new Uint16Array(a3v), e7 = e4.e7, a3F =
						b2.a3F, a3H = b2.a3H, a3G = b2.a3G, a3I = b2.a3I, a2C = mK.a2C, a2D = mK.a2D, aH = a3m; aH < pR; aH++) a2C[aH] = a3F[aH] + a3G[aH] >> 1, a2D[aH] = a3H[aH] + a3I[aH] >> 1;
				for (aH = a3m; aH < pR; aH++) {
					var id = e7[aH];
					aBi[id] += a2C[aH], aBj[id] += a2D[aH]
				}
				var e6 = e4.e6;
				for (aH = 1; aH < a3v; aH++) {
					var eU = Math.max(data.teamPlayerCount[e6[aH]], 1);
					aBk[aH] = aA.aB(aBi[aH], eU), aBl[aH] = aA.aB(aBj[aH], eU)
				}
				var a3U = e4.a3U,
					a3V = e4.a3V,
					a3W = e4.a3W,
					vS = mK.vS;
				for (aH = 0; aH < 512; aH++) vS[aH] = aH;
				for (var bf = 0; bf < 2 + (4 <= a3v); bf++)
					for (aH = a3m; aH < pR; aH++) {
						for (var fB = aH, aBm = vS[fB], aBn = 1, wT = aA.aBo(a2C[aBm] - aBk[1], a2D[aBm] - aBl[1]), dF = 2; dF < a3v; dF++) {
							var aBp = aA.aBo(a2C[aBm] - aBk[dF], a2D[aBm] - aBl[dF]);
							aBp < wT && (wT = aBp, aBn = dF)
						}
						var aBq = e7[fB];
						if (aBn !== aBq) {
							if (2 === bf && 4 <= a3v) {
								var aBr = Math.max((aBn + 1) % a3v, 1),
									aBs = aA.aBo(a2C[aBm] - aBk[aBr], a2D[aBm] - aBl[aBr]);
								for (dF = 1; dF < a3v; dF++) aBp = aA.aBo(a2C[aBm] - aBk[dF], a2D[aBm] - aBl[dF]), wT < aBp && aBp < aBs && (aBs = aBp, aBr = dF);
								aBr !== aBq && aA.aBo(aBk[aBq] - aBk[aBr], aBl[aBq] - aBl[aBr]) < aA.aBo(aBk[aBq] - aBk[aBn], aBl[aBq] - aBl[aBn]) && (aBn = aBr)
							}
							var aBt = e6[aBn],
								aBu = a3V[aBt] + (b4.bv ? 0 : a3W[aBt]),
								cw = a3U[aBu],
								aBv = vS[cw],
								aBw = a3V[aBt + 1];
							wT = aA.aBo(a2C[aBv] - aBk[aBq], a2D[aBv] - aBl[aBq]);
							for (var cl = aBu + 1; cl < aBw; cl++) {
								var aBx = a3U[cl],
									aBy = vS[aBx];
								(aBp = aA.aBo(a2C[aBy] - aBk[aBq], a2D[aBy] - aBl[aBq])) < wT && (wT = aBp, cw = aBx)
							}
							cw < a3m || pR <= cw || (aBv = vS[cw], aBi[aBq] += a2C[aBv] - a2C[aBm], aBj[aBq] += a2D[aBv] - a2D[aBm], aBi[aBn] += a2C[aBm] - a2C[aBv], aBj[aBn] += a2D[aBm] - a2D[aBv], eU = data.teamPlayerCount[e6[aBq]],
								aBk[aBq] = aA.aB(aBi[aBq], eU), aBl[aBq] = aA.aB(aBj[aBq], eU), eU = data.teamPlayerCount[aBt], aBk[aBn] = aA.aB(aBi[aBn], eU), aBl[aBn] = aA.aB(aBj[aBn], eU), vS[fB] = aBv, vS[cw] = aBm)
						}
					}! function() {
						for (var vS = mK.vS, a3F = b2.a3F, a3H = b2.a3H, a3G = b2.a3G, a3I = b2.a3I, b3 = b2.b3, aBB = b2.aBB, a5J = b2.a5J, ld = b2.ld, yY = b2.yY, aH = 0; aH < 512; aH++) {
							var aC0 = vS[aH];
							if (aC0 !== aH) {
								aC1(a3F, aH, aC0), aC1(a3H, aH, aC0), aC1(a3G, aH, aC0), aC1(a3I, aH, aC0), aC1(b3, aH, aC0), aC1(aBB, aH, aC0), aC1(a5J, aH, aC0), aC1(ld, aH, aC0), aC1(yY, aH, aC0), aC2(aH), aC2(aC0), vS[aH] = aH;
								for (var c = aC0, hS = vS[c]; hS !== aH;) hS = vS[c = hS];
								vS[c] = aC0
							}
						}
					}()
			}
		}) : function() {
			var a3n = b4.a3n;
			for (aBZ = a3n; aBZ < b4.dg; aBZ++) aBb();
			for (aBZ = b4.bv ? b4.du : 0; aBZ < a3n; aBZ++)
				if (! function() {
						var spawningData = b4.data.spawningData,
							a8 = spawningData[2 * aBZ] + 1,
							spawningData = spawningData[2 * aBZ + 1] + 1;
						if (3 < a8 && a8 < ev.f0 - 5 && 3 < spawningData && spawningData < ev.f1 - 5 && dw.dx(dw.aC3(a8, spawningData)) && function(a8, a9) {
								var dP, aCB, aCA;
								for (aCA = a9; a9 - 6 < aCA; aCA--)
									for (aCB = a8; a8 - 6 < aCB; aCB--)
										if (dP = dw.aC3(aCB, aCA), dw.aAx(dP)) return;
								return 1
							}(a8 + 3, spawningData + 3)) return aBg(a8 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aBf()) {
						for (var dL = b4.aBh = aBZ; dL < a3n; dL++) aBZ = dL, aBb();
						return
					}
					var a8 = aBW + aBR * aBV + aA.aB(aBV, 2),
						a9 = aBX + aBS * aBV + aA.aB(aBV, 2);
					aBg(a8, a9)
				}
		})(), aM.b1[7] = b2.b3[b4.b5]
	}, this.aCH = function(lv, aCI, aCJ) {
		var aH, a8, a9, dP, aBR, aBS;
		for (aBZ = lv, aH = 0; aH < 20; aH++)
			for (a8 = aCI + aH; aCI - aH <= a8; a8--)
				for (a9 = aCJ + aH; aCJ - aH <= a9; a9--)
					if ((a8 === aCI + aH || a8 === aCI - aH || a9 === aCJ + aH || a9 === aCJ - aH) && 3 < a8 && a8 < ev.f0 - 5 && 3 < a9 && a9 < ev.f1 - 5 && dw.dx(dw.aC3(a8, a9)) && function(a8, a9) {
							var dP, aCB, aCA;
							for (aCA = a9; a9 - 6 < aCA; aCA--)
								for (aCB = a8; a8 - 6 < aCB; aCB--)
									if (dP = dw.aC3(aCB, aCA), dw.aAx(dP) && !dw.lu(aBZ, dP)) return;
							return 1
						}(a8 + 3, a9 + 3)) {
						if (0 < b2.b3[aBZ]) {
							for (aBS = aBR = dP = void 0, aBR = b2.a3G[aBZ]; aBR >= b2.a3F[aBZ]; aBR--)
								for (aBS = b2.a3I[aBZ]; aBS >= b2.a3H[aBZ]; aBS--) dP = 4 * (aBS * ev.f0 + aBR), dw.uc(aBZ, dP) && (dw.aBP(dP), b2.b3[aBZ]--);
							aBb()
						}
						return aCC(a8 - 1, a9 - 1), !0
					} return !1
	}, this.aCM = function(lv) {
		aBZ = lv, aBf() ? aBg(aBW + aBR * aBV + aA.aB(aBV, 2), aBX + aBS * aBV + aA.aB(aBV, 2)) : aBb()
	}
}

function aCN() {
	this.pV = function(p, gz) {
		return Number(this.pW(p, gz))
	}, this.pW = function(p, gz) {
		var b0 = null;
		return 0 === a0.id ? a0.h0 && (b0 = a0.h0.getItem((gz ? "v" : "d") + p)) : 1 === a0.id ? b0 = a0.h1.loadString((gz ? 1e3 : 2e3) + p) : 2 === a0.id && (b0 = a0.h2[(gz ? "v" : "d") + p]), b0 && 0 !== b0.length ? b0 : null
	}, this.aCO = function(ay, aCP) {
		var ar = [],
			aCQ = aCP ? "e" : "l";
		if (0 === a0.id) {
			if (a0.h0)
				for (aH = 0; aH < ay; aH++) ar.push(a0.h0.getItem(aCQ + aH))
		} else if (1 === a0.id)
			for (var aCR = aCP ? 5e3 : 3e3, aH = 0; aH < ay; aH++) ar.push(a0.h1.loadString(aCR + aH));
		else if (2 === a0.id)
			for (aH = 0; aH < ay; aH++) ar.push(a0.h2[aCQ + aH]);
		return ar
	}, this.save = function(p, value, gz) {
		var lI = (gz ? "v" : "d") + p;
		if (0 === a0.id) {
			if (a0.h0 && gH.gJ.data[140].value) try {
				a0.h0.setItem(lI, value)
			} catch (bF) {
				console.log(bF)
			}
		} else 1 === a0.id ? a0.h1.saveString((gz ? 1e3 : 2e3) + p, value) : 2 === a0.id && (a0.h2[lI] = value, a0.h3.postMessage(lI + " " + value))
	}, this.aCS = function(ar, aCP) {
		var ay = ar.length,
			aCQ = aCP ? "e" : "l";
		if (0 === a0.id) {
			if (a0.h0 && gH.gJ.data[140].value) try {
				for (aH = 0; aH < ay; aH++) a0.h0.setItem(aCQ + aH, ar[aH])
			} catch (bF) {
				console.log(bF)
			}
		} else if (1 === a0.id)
			for (var aCR = aCP ? 5e3 : 3e3, aH = 0; aH < ay; aH++) a0.h1.saveString(aCR + aH, ar[aH]);
		else if (2 === a0.id)
			for (aH = 0; aH < ay; aH++) a0.h2[aCQ + aH] = ar[aH], a0.h3.postMessage(aCQ + aH + " " + ar[aH])
	}
}

function aCT() {
	this.a4M = new vp, this.cA = new aCU, this.vr = new aCV, this.l5 = new a2h, this.ly = new m9
}

function aCW() {
	this.w = function() {
		if (0 === b4.data.sResourcesType) {
			for (var aCa = b4.du, e1 = b2.e1, aH = 0; aH < aCa; aH++) e1[aH] = 512;
			var aCb = b4.a3n,
				aCc = e8.aCc,
				eA = e8.eA;
			for (aH = aCa; aH < aCb; aH++) e1[aH] = aCc[eA[aH]]
		} else(1 === b4.data.sResourcesType ? function() {
			for (var ay = b4.a3n, e1 = b2.e1, sResourcesValue = b4.data.sResourcesValue, aH = 0; aH < ay; aH++) e1[aH] = sResourcesValue
		} : function() {
			for (var ay = b4.a3n, e1 = b2.e1, sResourcesData = b4.data.sResourcesData, aH = 0; aH < ay; aH++) e1[aH] = sResourcesData[aH]
		})();
		aM.b1[8] = b2.e1[b4.b5]
	}
}

function aCd() {
	var oQ, aCe, aCf, aBU, aCg, aCh = 0,
		aCi = 0;

	function aCk(aH) {
		var aCl = !0,
			n0 = ab.am,
			b = (1 === oQ[aH].id ? oQ[aH].ao.fillStyle = ab.a4r : oQ[aH].lv === b4.dg ? oQ[aH].ao.fillStyle = ab.a4a : (dw.a5z(oQ[aH].lv), oQ[aH].ao.fillStyle = aP.color.a4R(mK.a27[0], mK.a27[1], mK.a27[2], .87), 400 < aP.g9.gd(mK.a27, 0, 2) && (
				aCl = !1, n0 = ab.eX)), oQ[aH].canvas.width),
			d = (oQ[aH].ao.clearRect(0, 0, b, aBU), oQ[aH].ao.fillRect(0, 0, b, aBU), oQ[aH].ao.fillStyle = n0, ! function(ao, b, aBU) {
				ao.fillRect(0, 0, b, 1), ao.fillRect(0, aBU - 1, b, 1), ao.fillRect(0, 0, 1, aBU), ao.fillRect(b - 1, 0, 1, aBU)
			}(oQ[aH].ao, b, aBU), aCe + 2 * aBU < b && (oQ[aH].ao.fillRect(b - aCe - aBU, 0, 1, aBU), oQ[aH].ao.fillText(b2.de[oQ[aH].lv], Math.floor((b - aCe) / 2), Math.floor(.57 * aBU))), 0 !== oQ[aH].id ? 0 : aBU);
		oQ[aH].ao.fillText(aP.aQ.aR(oQ[aH].eA), Math.floor(b - aCe / 2 - d), Math.floor(.57 * aBU)),
			function(aH, b, d, aCl) {
				oQ[aH].ao.fillStyle = aCl ? ab.a4T : ab.a4D;
				aCl = Math.floor(aCe * oQ[aH].eA / oQ[aH].aCq);
				oQ[aH].ao.fillRect(Math.floor(b - aCe - d), aBU - aCg, aCl, aCg)
			}(aH, b, d, aCl), 0 === oQ[aH].id ? (aCo(aH, b, aCl, n0), function(aH, b, aCl) {
				oQ[aH].ao.strokeStyle = aCl ? ab.a4c : ab.a4h, oQ[aH].ao.fillRect(aBU, 0, 1, aBU);
				aCl = b - aBU;
				oQ[aH].ao.beginPath(), oQ[aH].ao.moveTo(Math.floor(.3 * aBU + aCl), Math.floor(aBU / 2)), oQ[aH].ao.lineTo(Math.floor(aBU - .3 * aBU + 0 + aCl), Math.floor(aBU / 2)), oQ[aH].ao.stroke(), oQ[aH].ao.beginPath(), oQ[aH].ao.moveTo(
					Math.floor(aBU / 2 + aCl), Math.floor(.3 * aBU)), oQ[aH].ao.lineTo(Math.floor(aBU / 2 + aCl), Math.floor(aBU - .3 * aBU + 0)), oQ[aH].ao.stroke()
			}(aH, b, aCl)) : aCo(aH, 2 * aBU, aCl, n0)
	}

	function aCo(aH, b, aCl, n0) {
		oQ[aH].ao.strokeStyle = oQ[aH].aCr ? ab.a4Y : aCl ? ab.b9 : ab.b8, oQ[aH].ao.fillStyle = n0, oQ[aH].ao.fillRect(b - aBU, 0, 1, aBU), oQ[aH].ao.lineWidth = Math.max(Math.floor(aBU / 12), 3), oQ[aH].ao.lineCap = "round";
		aCl = .35;
		b = aBU + 1, oQ[aH].ao.beginPath(), oQ[aH].ao.moveTo(Math.floor(b - aCl * aBU + 0), Math.floor(aCl * aBU)), oQ[aH].ao.lineTo(Math.floor(b - aBU + aCl * aBU), Math.floor(aBU - aCl * aBU + 0)), oQ[aH].ao.stroke(), oQ[aH].ao.beginPath(), oQ[aH]
			.ao.moveTo(Math.floor(b - aBU + aCl * aBU), Math.floor(aCl * aBU)), oQ[aH].ao.lineTo(Math.floor(b - aCl * aBU + 0), Math.floor(aBU - aCl * aBU + 0)), oQ[aH].ao.stroke()
	}

	function aD4(ar, xO) {
		for (var eA, aH = xO - 1; 0 <= aH; aH--) eA = m0.a7g(b4.b5, aH), ar[aH].eA !== eA && (ar[aH].eA = eA, ar[aH].aCq = Math.max(eA, ar[aH].aCq), ar[aH].bs = !0)
	}

	function aD7(ar, xP) {
		for (var jA = b4.b5 << 3, eI = eF.eG.eI, lN = eF.eG.lN, wN = eF.eG.wN, aH = xP - 1; 0 <= aH; aH--) {
			var wO = wN[jA + aH],
				eA = eI[wO];
			ar[aH].eA !== eA ? (ar[aH].eA = eA, ar[aH].aCq = Math.max(eA, ar[aH].aCq), ar[aH].bs = !0) : ar[aH].aCr || lN[wO] % 64 != 5 || (ar[aH].aCr = !0, ar[aH].bs = !0)
		}
	}

	function aCj(oS) {
		oS.canvas = document.createElement("canvas"), ev.kn.font = aCf;
		var b = aCe;
		oS.lv < b4.dg && 0 === oS.id && (b += Math.floor(ev.kn.measureText(b2.de[oS.lv] + "000").width)), b += aBU, 0 === oS.id && (b += aBU), oS.canvas.width = b, oS.canvas.height = aBU, oS.ao = oS.canvas.getContext("2d", {
			alpha: !0
		}), oS.ao.font = aCf, aP.aS.textBaseline(oS.ao, 1), aP.aS.textAlign(oS.ao, 1)
	}

	function aCx(aH) {
		return p7.aD9() ? y.b - oQ[aH].canvas.width - a3.gap : p7.aY
	}

	function aCy(aH) {
		return Math.floor(2 * a3.gap + (p7.aD9() ? bQ.c + a3.gap : 0) + p7.c + aH * (1.3 * aBU))
	}
	this.w = function() {
		aCh = aCi = 0, oQ = [], this.resize()
	}, this.resize = function() {
		aCf = d8.br, aBU = d8.fontSize + 5, aBU = Math.floor(1.25 * aBU), a0.a1.a2() && (aBU = Math.floor(1.25 * aBU)), aCg = Math.floor(.15 * aBU), ev.kn.font = aCf, aCe = Math.floor(ev.kn.measureText("02 000 000 0000").width);
		for (var aH = oQ.length - 1; 0 <= aH; aH--) aCj(oQ[aH]), aCk(aH)
	}, this.c2 = function() {
		for (var aH = oQ.length - 1; 0 <= aH; aH--) oQ[aH].bs && (oQ[aH].bs = !1, aCk(aH))
	}, this.a5 = function(a6, a7) {
		if (2 !== b4.cU && 0 !== b2.bN[b4.b5] && !b4.bw && !aP.cA.dj(b4.b5))
			for (var aCs, aCt, aCu, aCv = a0.a1.a2() ? aBU : 0, aCw = a0.a1.a2() ? Math.floor(.15 * aBU) : 0, aH = oQ.length - 1; 0 <= aH; aH--)
				if (aCs = aCx(aH), aCt = aCy(aH), aCu = oQ[aH].canvas.width, aCt - aCw <= a7 && a7 <= aCt + aBU + aCw) {
					if (aCs - aCv <= a6 && a6 <= aCs + aBU + aCv) return oQ[aH].aCr || (oQ[aH].bs = !0, oQ[aH].aCr = !0, 0 === oQ[aH].id ? dB.a4M.w0(oQ[aH].lv) : dB.a4M.vz(oQ[aH].lv)), !0;
					if (0 === oQ[aH].id && aCs + aCu - aBU - aCv <= a6 && a6 <= aCs + aCu + aCv) return aCz.aD0(3), dB.a4M.vs(c7.cC(), oQ[aH].lv), !0
				} return !1
	}, this.cX = function() {
		var a6U, a6V, ar, xO;
		0 === b2.bN[b4.b5] || aP.cA.dj(b4.b5) && !b4.bw || (a6U = oQ.slice(0, aCh), a6V = oQ.slice(aCh, aCh + aCi), ar = a6U, xO = m0.a7J(b4.b5), function(ar, xO) {
			if (aCh !== xO) return 1;
			for (var aH = xO - 1; 0 <= aH; aH--)
				if (ar[aH].lv !== m0.a7f(b4.b5, aH)) return 1;
			return
		}(ar, xO) ? aD4(ar = function(ar, xO) {
			var aH, lv, dL, eA, cs = [];
			loop: for (aH = 0; aH < xO; aH++) {
				for (lv = m0.a7f(b4.b5, aH), dL = 0; dL < ar.length; dL++)
					if (ar[dL].lv === lv) {
						cs.push(ar.splice(dL, 1)[0]);
						continue loop
					} eA = m0.a7g(b4.b5, aH), aCj(eA = {
					lv: lv,
					eA: eA,
					aCq: eA,
					id: 0,
					bs: !0,
					aCr: !1,
					canvas: null,
					ao: null
				}), cs.push(eA)
			}
			return cs
		}(ar, xO), xO) : aD4(ar, xO), a6U = ar, a6V = function(ar) {
			var xP = eF.eG.wL[b4.b5];
			return function(ar, xP) {
				if (aCi !== xP) return 1;
				for (var jA = b4.b5 << 3, wM = eF.eG.wM, wN = eF.eG.wN, aH = xP - 1; 0 <= aH; aH--) {
					var wO = wN[jA + aH];
					if (ar[aH].lv !== wM[wO]) return 1
				}
				return
			}(ar, xP) ? aD7(ar = function(ar, xP) {
				var aH, lv, dL, cs = [],
					jA = b4.b5 << 3,
					wM = eF.eG.wM,
					eI = eF.eG.eI,
					wN = eF.eG.wN;
				loop: for (aH = 0; aH < xP; aH++) {
					var wO = wN[jA + aH];
					for (lv = wM[wO], dL = 0; dL < ar.length; dL++)
						if (ar[dL].lv === lv) {
							cs.push(ar.splice(dL, 1)[0]);
							continue loop
						} wO = eI[wO], aCj(wO = {
						lv: lv,
						eA: wO,
						aCq: wO,
						id: 1,
						bs: !0,
						aCr: !1,
						canvas: null,
						ao: null
					}), cs.push(wO)
				}
				return cs
			}(ar, xP), xP) : aD7(ar, xP), ar
		}(a6V), aCh = a6U.length, aCi = a6V.length, oQ = a6U.concat(a6V))
	}, this.aW = function() {
		if (0 !== b2.bN[b4.b5] && (!aP.cA.dj(b4.b5) || b4.bw))
			for (var aH = oQ.length - 1; 0 <= aH; aH--) aa.drawImage(oQ[aH].canvas, aCx(aH), aCy(aH))
	}
}

function aDA() {
	var gap, aDB = !1,
		tt = 0,
		b = 0,
		d = 0,
		canvas = null,
		ao = null,
		a6P = null;

	function aDD() {
		for (var aDO, aDM = 0, ay = 0, cl = Math.floor(b / 2), bf = Math.floor(d / 2), aDN = 1.5 * Math.PI, aH = b4.zI; 0 <= aH; aH--) ay += a6P[aH], 0 === a6P[aH] && aDM++;
		if (aDB = !1, ao.clearRect(0, 0, b, b), 0 < ay)
			if (aDM === b4.zI) {
				for (aH = b4.zI; 0 <= aH; aH--)
					if (0 < a6P[aH]) {
						! function(aH, cl, bf) {
							ao.fillStyle = e4.a3M[e4.e6[aH]], ao.beginPath(), ao.arc(cl, cl, bf, 0, 2 * Math.PI), ao.fill()
						}(aH, cl, bf);
						break
					}!
				function(cl) {
					var fontSize = cl / 3;
					ao.font = aP.aS.aT(1, fontSize), ao.fillStyle = ab.am, ao.fillText("100%", cl, cl + .1 * fontSize)
				}(cl)
			} else {
				for (aH = 0; aH <= b4.zI; aH++) 0 < a6P[aH] && (! function(aH, cl, bf, aDN, aDO) {
					ao.fillStyle = e4.a3M[e4.e6[aH]], ao.beginPath(), ao.arc(cl, cl, bf, aDN, aDO), ao.lineTo(cl, cl), ao.fill()
				}(aH, cl, bf, aDN, aDO = aDN + 2 * Math.PI * a6P[aH] / ay), function(cl, bf, aDN, aDO) {
					var b0 = (aDO - aDN) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * bf * Math.min(b0, .37);
					fontSize < 8 || (aDN = (aDN + aDO) / 2, aDO = (__fx.settings.detailedTeamPercentage ? (100 * b0).toFixed(2) : Math.floor(100 * b0 + .5)) + "%", bf *= .525 - Math.max(.6 * (b0 - .7), 0), ao.font = aP.aS.aT(1, fontSize), ao
						.fillStyle = ab.am, ao.fillText(aDO, cl + Math.cos(aDN) * bf, cl + Math.cos(aDN + 1.5 * Math.PI) * bf))
				}(cl, bf, aDN, aDO), 0 !== aH && aDT(cl, bf, aDN), aDN = aDO);
				aDT(cl, bf, 1.5 * Math.PI)
			}!
		function(cl, bf) {
			ao.beginPath(), ao.arc(cl, cl, bf, 0, 2 * Math.PI), ao.stroke()
		}(cl, bf)
	}

	function aDT(cl, bf, a20) {
		ao.beginPath(), ao.moveTo(cl, cl), ao.lineTo(cl + Math.cos(a20) * bf, cl + Math.cos(a20 + 1.5 * Math.PI) * bf), ao.stroke()
	}
	this.w = function() {
		if (b4.e2) {
			tt = 0, a6P = new Uint32Array(b4.zI + 1);
			for (var aH = b4.zI; 0 <= aH; aH--) a6P[aH] = 0;
			for (aH = fG.fH - 1; 0 <= aH; aH--) a6P[e4.e7[fG.fI[aH]]] += 1;
			this.resize()
		} else a6P = ao = canvas = null
	}, this.s2 = function() {
		return b
	}, this.resize = function() {
		b4.e2 && (b = Math.floor(.95 * (a0.a1.a2() && !b4.qJ ? .18 * y.min : .13 * y.bx)), b = (b *= 1 + (.5 + .2 * a0.a1.a2()) * b4.qJ) + b % 2, gap = Math.max(1, .015 * b), d = Math.floor(b - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = b, canvas.height = b, (ao = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ao.strokeStyle = ab.am, aP.aS.textAlign(ao, 1), aP.aS.textBaseline(ao, 1), aDD())
	}, this.aDE = function() {
		var aJ, a34 = this.a35();
		return e4.e6[a34] || (a34 = function() {
			for (var a34 = -1, aH = b4.zI; 1 <= aH; aH--)(-1 === a34 || a6P[aH] > a6P[a34]) && (a34 = aH);
			return a34
		}(), aJ = b2.b3[pd[0]], -1 !== a34 && a6P[a34] > aJ) ? a6P[a34] : aJ
	}, this.aDG = function() {
		return tt = 31, this.cX(), this.a35()
	}, this.a35 = function() {
		for (var a34 = 0, aH = b4.zI; 0 < aH; aH--) a6P[aH] > a6P[a34] && (a34 = aH);
		return a34
	}, this.aDH = function() {
		return a6P[2] > 2 * a6P[1] || a6P[1] > 4 * a6P[2]
	}, this.vQ = function(aDI) {
		for (var eU = 0, fI = fG.fI, e7 = e4.e7, ay = fG.fH, vS = mK.vS, aH = 0; aH < ay; aH++) {
			var dP = fI[aH];
			e7[dP] === aDI && (vS[eU++] = dP)
		}
		mK.vR[0] = eU
	}, this.aDJ = function(aDI) {
		for (var eU = 0, fI = fG.fI, e7 = e4.e7, ay = fG.fH, vS = mK.vS, aH = 0; aH < ay; aH++) {
			var dP = fI[aH];
			e7[dP] !== aDI && (vS[eU++] = dP)
		}
		mK.vR[0] = eU
	}, this.aDK = function() {
		for (var eU = 0, aH = b4.zI; 0 <= aH; aH--) eU += 0 < a6P[aH];
		return eU
	}, this.cX = function() {
		if (b4.e2 && 32 <= ++tt) {
			tt = 0;
			for (var aH = b4.zI; 0 <= aH; aH--) a6P[aH] = 0;
			for (aH = fG.fH - 1; 0 <= aH; aH--) a6P[e4.e7[fG.fI[aH]]] += b2.b3[fG.fI[aH]];
			aDB = !0
		}
	}, this.aV = function() {
		b4.e2 && aDB && aDD()
	}, this.aW = function() {
		b4.e2 && (b4.qJ ? aa.drawImage(canvas, a3.gap, a3.gap) : aa.drawImage(canvas, a3.gap, s1 + 2 * a3.gap))
	}
}

function aDV() {
	var aDW, aDX, aDY;

	function aDe(aH) {
		var button = p1.iK[aH],
			aY = button.aY,
			aZ = button.aZ,
			b = button.b,
			c = button.c;
		aa.fillStyle = button.aDb, aa.fillRect(aY, aZ, b, c), aH === aDW && (aa.fillStyle = aDY, aa.fillRect(aY, aZ, b, c)), aa.lineWidth = a3.qP, aa.strokeStyle = aDX, aa.strokeRect(aY, aZ, b, c),
			function(button) {
				var aY = button.aY,
					aZ = button.aZ,
					b = button.b,
					c = button.c;
				aP.aS.textAlign(aa, 1), aP.aS.textBaseline(aa, 1), aa.font = button.font, aa.fillStyle = aDX, aa.fillText(button.sw, Math.floor(aY + b / 2), Math.floor(aZ + c / 2 + .1 * button.fontSize))
			}(button)
	}
	this.b = 0, this.c = 0, this.aZ = 0, this.gap = 0, this.w = function() {
		aDW = -1, aDX = ab.am, aDY = "rgba(255,255,255,0.16)", this.iK = new Array(7), this.c = Math.floor((a0.a1.a2() ? .123 : .093) * y.bx), this.b = Math.floor((a0.a1.a2() ? 3.96 : 4.2) * this.c), this.gap = Math.floor(.025 * this.b);
		var aDZ = Math.floor(.26 * this.c),
			aDa = aP.aS.aT(1, aDZ);
		this.iK[0] = {
			aY: 0,
			aZ: 0,
			b: Math.floor(.6 * this.b - this.gap / 2),
			c: this.c,
			sw: "Multiplayer",
			font: aDa,
			aDb: "rgba(22,88,22,0.8)",
			fontSize: aDZ
		}, aDZ = Math.floor(.18 * this.c), aDa = aP.aS.aT(1, aDZ), this.iK[1] = {
			aY: 0,
			aZ: 0,
			b: this.b - this.iK[0].b - this.gap,
			c: this.c,
			sw: "Single Player",
			font: aDa,
			aDb: "rgba(22,88,88,0.8)",
			fontSize: aDZ
		}, this.iK[2] = {
			aY: 0,
			aZ: 0,
			b: this.b,
			c: Math.floor(.3 * this.c),
			sw: "",
			font: this.iK[1].font,
			aDb: "rgba(100,0,0,0.8)",
			fontSize: this.iK[1].fontSize
		}, this.iK[3] = {
			aY: 0,
			aZ: 0,
			b: this.b,
			c: this.c,
			sw: "Back",
			font: this.iK[0].font,
			aDb: "rgba(0,0,0,0.8)",
			fontSize: this.iK[0].fontSize
		}, this.iK[4] = {
			aY: 0,
			aZ: 0,
			b: this.b,
			c: Math.floor(.3 * this.c),
			sw: "The game was updated!",
			font: this.iK[1].font,
			aDb: "rgba(100,0,0,0.8)",
			fontSize: this.iK[1].fontSize
		}, this.iK[5] = {
			aY: 0,
			aZ: 0,
			b: this.iK[0].b,
			c: Math.floor(.8 * this.c),
			sw: "Reload",
			font: this.iK[0].font,
			aDb: "rgba(0,100,0,0.8)",
			fontSize: this.iK[0].fontSize
		}, this.iK[6] = {
			aY: 0,
			aZ: 0,
			b: this.iK[1].b,
			c: this.iK[5].c,
			sw: "Back",
			font: this.iK[0].font,
			aDb: "rgba(0,0,0,0.8)",
			fontSize: this.iK[0].fontSize
		}, this.aDc()
	}, this.aDc = function() {
		this.aZ = Math.floor(.54 * y.c), this.iK[0].aY = Math.floor(.5 * y.b - .5 * this.b), this.iK[1].aY = this.iK[0].aY + this.iK[0].b + this.gap, this.iK[2].aY = this.iK[3].aY = this.iK[0].aY, this.iK[4].aY = this.iK[5].aY = this.iK[0].aY,
			this.iK[6].aY = this.iK[1].aY, this.iK[0].aZ = Math.floor(.54 * y.c), this.iK[1].aZ = this.iK[0].aZ, this.iK[2].aZ = Math.floor((y.c - this.iK[2].c - this.iK[3].c - this.gap) / 2), this.iK[3].aZ = this.iK[2].aZ + this.iK[2].c + this
			.gap, this.iK[4].aZ = Math.floor((y.c - this.iK[4].c - this.iK[5].c - this.gap) / 2), this.iK[5].aZ = this.iK[6].aZ = this.iK[4].aZ + this.iK[4].c + this.gap
	}, this.aDd = function() {
		aDe(0), aDe(1)
	}, this.aDf = function() {
		aDe(2), aDe(3)
	}, this.aDg = function() {
		aDe(4), aDe(5), aDe(6)
	}, this.aI = function(aY, aZ, c2) {
		var aH = -1;
		return 0 === iY.iZ() ? aH = this.cJ(aY, aZ, 0, 2) : 3 === iY.iZ() ? aH = this.cJ(aY, aZ, 3, 1) : 5 === iY.iZ() && (aH = this.cJ(aY, aZ, 5, 2)), aDW !== aH && (aDW = aH, c2) && (aF.aG = !0), -1 !== aH && (p4.qx(), !0)
	}, this.cJ = function(aY, aZ, aDh, size) {
		for (var aH = aDh; aH < aDh + size; aH++)
			if (aY >= this.iK[aH].aY && aZ >= this.iK[aH].aZ && aY <= this.iK[aH].aY + this.iK[aH].b && aZ <= this.iK[aH].aZ + this.iK[aH].c) return aH;
		return -1
	}
}

function aDj() {
	this.yi = new aDk, this.aDl = new aDm, this.aDn = new aDo, this.performance = new a2x, this.a5Q = new aAm, this.mG = new a5C, this.a5g = new yW, this.aDp = new aDq, this.aDr = new aDs, this.w = function() {
		this.yi.w(), this.aDn.w(), this.performance.w(), this.a5Q.w(), this.mG.w()
	}, this.cX = function() {
		this.performance.cX(), this.yi.cX(), this.aDn.aDt()
	}
}

function a96() {
	this.cX = function(player) {
		return !!eF.vv.vw(player) && !(eF.eG.wL[player] >= Math.max(3 * mF.performance.a2y, e8.aDu[e8.eA[player]]) || !aP.cA.aDv(player, e8.aDw[e8.eA[player]], 32, 0)) && (bQ.aDx() ? function(player) {
			var aE0 = eF.fr.wx(),
				ay = aE0.length;
			if (0 === ay) return !1;
			aE0 = aE0[kI.nG(ay)], ay = eF.eG.wM[aE0];
			if (eF.lT.aE2(player, ay)) return !1;
			return !! function(player, aE1) {
				var aE1 = dH.lS(eF.eG.lO[aE1]),
					aE7 = dH.dI(aE1),
					aE1 = dH.dJ(aE1),
					bS = b2.a3F[player],
					bT = b2.a3H[player],
					bU = b2.a3G[player],
					player = b2.a3I[player],
					bU = Math.max(aE7 - bU, bS - aE7),
					bS = Math.max(aE1 - player, bT - aE1);
				return bU < 100 && bS < 100
			}(player, aE0) && !!eF.vx.aE4(player, ay, 1) && (aP.cA.aE5(player), eF.eG.aE6(player), !0)
		}(player) : !!(mF.aDp.cX(player) || mF.aDl.cX(player) || mF.aDn.cX(player)) && (function(player) {
			mK.vu[1] = 4, aP.cA.aE5(player), eF.eG.aE6(player)
		}(player), !0))
	}
}

function il() {
	var pk, pl, gg;
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), pl.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(L(290), [new fR("⬅️ " + L(71), function() {
		fZ.j2(13)
	})]), pl = new gW(pk.gX, ((gg = []).push(function() {
		var gj = new gk,
			pq = (gj.gl(L(291)), gj.np(L(292)), new fR(L(103), function() {
				gH.rg.nf(130, 0), fZ.eG.aEC()
			}, 0, 0, 1)),
			sx = new nm(gH.gJ.data[126], 0, function() {
				pq.button.click()
			});
		return gj.gp(sx), sx.bF.placeholder = "a,b,c", sx.bF.style.marginTop = "0.5em", gj.gp(new pw([pq.button])), gj
	}()), gg.push(function() {
		var gj = new gk,
			pq = new fR(L(103), function() {
				gH.rg.nf(130, 1), fZ.eG.aEC()
			}, 0, 0, 1),
			pr = new nm(gH.gJ.data[129], 1, function() {
				pr.bF.focus()
			}),
			ps = new nm(gH.gJ.data[128], 1, function() {
				pq.button.click()
			});
		return gj.gl(L(101)), gj.gp(ps), ps.bF.style.marginBottom = "0.5em", gj.gl(L(102)), gj.gp(pr), gj.gp(new pw([pq.button])), gj
	}()), gg.push(function() {
		var gj = new gk;
		return gj.gl(L(293)), gH.gJ.data[125].go = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], gj.gm(new gn(gH.gJ.data[125])), gj
	}()), gg.push(function() {
		var gj = new gk;
		return gj.gl(L(294)), gj.gp(new gr(gH.gJ.data[127], L(295))), gj
	}()), gg))
}

function a9R() {
	this.aED = function(hm) {
		var aES;
		hn.gD(55), hn.hr(1, 0), hn.hr(6, 13), hn.hr(14, hs.o5), hn.hr(4, a0.id), hn.hr(7, a0.gz), hn.hr(1, +hs.aEQ), hn.hr(1, +hs.aER), hn.hr(5, (new Date).getHours() % 24), aES = oi.aET(), hn.hr(8, aES[0]), hn.hr(8, aES[1]), fz.eG.send(hm, hn
			.i0)
	}, this.aEF = function(hm, tq, aEG, aEH) {
		hn.gD(100), hn.hr(1, 0), hn.hr(6, 14), hn.hr(3, aEH), hn.hr(30, tq[0]), hn.hr(30, tq[1]), hn.hr(30, aEG), fz.eG.send(hm, hn.i0)
	}, this.aEI = function(hm, tq) {
		hn.gD(37), hn.hr(1, 0), hn.hr(6, 30), hn.hr(30, tq), fz.eG.send(hm, hn.i0)
	}, this.aEJ = function(id) {
		hn.gD(13), hn.hr(1, 0), hn.hr(6, 15), hn.hr(6, id), fz.eG.send(0, hn.i0)
	}, this.aEK = function(id, value) {
		hn.gD(43), hn.hr(1, 0), hn.hr(6, 3), hn.hr(6, id), hn.hr(30, value), fz.eG.send(0, hn.i0)
	}, this.aEL = function(id, ct) {
		var ay = Math.min(ct.length, 63);
		hn.gD(19 + 16 * ay), hn.hr(1, 0), hn.hr(6, 26), hn.hr(6, id), hn.hr(6, ay), fj.jL.jM(ct), fz.eG.send(0, hn.i0)
	}, this.aEM = function(aEN, dU) {
		hn.gD(7 + 26 * dU.length), hn.hr(1, 0), hn.hr(6, 9);
		for (var aH = 0; aH < dU.length; aH++) hn.hr(16, dU[aH][0]), hn.hr(10, dU[aH][1]);
		fz.eG.send(aEN, hn.i0)
	}, this.aEO = function(aEP, yE) {
		hn.gD(20), hn.hr(1, 0), hn.hr(6, 19), hn.hr(1, aEP), hn.hr(12, yE), fz.eG.send(fz.eG.o6, hn.i0)
	}, this.hv = function(username) {
		hn.hr(5, username.length), fj.jL.jM(username)
	}
}

function aEU() {
	function aEW(key) {
		var jl;
		return "undefined" == typeof URLSearchParams || (jl = window.location.search, "string" != typeof(jl = new URLSearchParams(jl).get(key))) || jl.length < 1 ? null : jl
	}
	this.aBA = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aEW("account");
				if (!value && !(value = aEW("a"))) return void aEX.clear();
				return aEX.clear(), fZ.ff(8, fZ.fa, new fg(1e3, {
					fh: 0,
					fi: value,
					fl: 0
				})), 1
			}()) {
			var value = aEW("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			fZ.ff(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var u6 = new URL(window.location.href);
		u6.search = "";
		try {
			return history.replaceState(null, "", u6.toString()), !0
		} catch (bF) {
			console.log("error 352: " + bF)
		}
		return !1
	}, this.aEZ = function(key, value) {
		if (0 === a0.id) try {
			var u6 = new URL(window.location.href),
				dP = u6.searchParams;
			dP.set(key, value), u6.search = dP.toString(), history.replaceState(null, "", u6.toString())
		} catch (bF) {
			console.log("error 358: " + bF)
		}
	}
}

function aEa() {
	this.qP = 0, this.gap = 0, this.hM = 0, this.aEb = 0, this.w = function() {
		this.resize()
	}, this.resize = function() {
		this.qP = .0022 * aP.aS.hQ(.5) * y.bx, this.hM = this.qP / y.hT, this.gap = Math.max(Math.floor((a0.a1.a2() ? .0114 : .01296) * y.bx), 2), this.aEb = this.gap / y.hT
	}
}

function q2(a9n, nt) {
	var no = document.createElement("div");
	this.xR = no, this.resize = function() {
		no.style.padding = aP.aS.hL(a3.aEb), no.style.lineHeight = aP.aS.hL(aP.aS.hR(.035))
	}, a9n.style.overflowX = "hidden", a9n.style.overflowY = "auto", no.innerHTML = nt, a9n.appendChild(no)
}

function aEc() {
	this.cX = function() {
		var aEk;
		2 === b4.a2c ? (d8.cm(0, 59), dD.aEd(2700)) : b4.f7 < 7 ? (aEk = e4.e6[b4.vO], aEk = e4.e5[aEk], aO.eS(L(296, [aEk]), 2, 1, 12), d8.dO(0, L(297, [aEk]), 40, 0, ab.am, ab.ac, -1, !1), dD.aEd(2700)) : 8 === b4.f7 ? (b4.eR ? d8.cm(b4.aEi,
			2) : d8.cm(1 - b4.b5, 3), b4.eV.aEj(b4.aEi), dD.dE(b4.aEi, 2700, !1, 0)) : 9 === b4.f7 ? (d8.eQ(), dD.aEd(2700)) : (d8.ds(b4.aEi), dD.dE(b4.aEi, 2700, !1, 0))
	}, this.aEm = function() {
		var ct;
		b4.bw || (ct = b4.f7 < 7 ? "territorial.io/log/team" : 8 === b4.f7 ? "territorial.io/log/1v1" : 9 === b4.f7 ? "territorial.io/log/zombies" : "territorial.io/log/br", d8.dO(720, ct, 736, 0, ab.am, ab.nb, -1, !1))
	}
}

function aEn() {
	var aEo = [],
		nU = [],
		aEp = [];

	function aEr(dU) {
		for (var dR = dU.dR, aEq = [];;) {
			var cl = function aEt(dR, position) {
				position = dR.indexOf("@", position);
				if (position < 0) return -1;
				var ct = dR.substring(position + 1, position + 6);
				if (5 !== ct.length) return aEt(dR, position + 1);
				if (aP.aQ.startsWith(ct, "room")) return aEt(dR, position + 1);
				var aF1 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aF1.test(ct)) return aEt(dR, position + 1);
				aF1 = dR.substring(position + 6, position + 7);
				if (1 !== aF1.length) return position;
				ct = new RegExp("^[ :!.]+$");
				if (!ct.test(aF1)) return aEt(dR, position + 1);
				return position
			}(dR, 0);
			if (-1 === cl) {
				aEq.push(aEu(dR, dU));
				break
			}
			0 === cl ? aEq.push(aEv(dR.substring(1, 6), dU, cl)) : (aEq.push(aEu(dR.substring(0, cl), dU)), aEq.push(aEv(dR.substring(cl + 1, cl + 6), dU, cl))), dR = dR.substring(cl + 6)
		}
		return aEq
	}

	function aEv(ct, dU, cl) {
		var a1B = function(ct) {
				var fi = gL.fk.gM(ct, 5),
					a1B = fd.tI.a0b(fi);
				if (a1B) {
					for (aEo.push(a1B); 75 < aEo.length;) aEo.shift();
					return a1B
				}
				for (var a18 = fd.tI.a18, aH = a18.length - 1; 0 <= aH; aH--)
					if (a1B = a18[aH], fi === a1B.fi) return aEo.push(a1B), a1B;
				for (aH = aEo.length - 1; 0 <= aH; aH--)
					if (a1B = aEo[aH], fi === a1B.fi) return aEo.push(a1B), a1B;
				return fd.tI.a1C(fi, ct, 1, 999999, 999999, 0, 0, 0, 0)
			}(ct),
			ct = (0 === cl && 0 === dU.a0O.id && dU.a0T && (dU.fontSize = fd.fr.a0Z(a1B.fT, a1B.ft), dU.a0S = fd.fr.a0a(a1B.ft)), document.createElement("span"));
		return ct.textContent = function(a1B, dU, cl) {
			if (a1B.aEz) return a1B.aEz--, cl = 2 === dU.a0O.id || (3 === dU.a0O.id || 4 === dU.a0O.id) && 0 !== cl, a1B.username + (cl ? " (" + a1B.a1N + ")" : "");
			if (dU.a0O.a0j) return "Redacted " + fj.fk.aR(a1B.fi, 2);
			return a1B.username
		}(a1B, dU, cl), ct.style.display = "inline-block", ct.style.color = fd.fr.a0Y(a1B.fT), ct.style.cursor = "pointer", ct.style.margin = "0", ct.style.font = "inherit", ct.style.minWidth = ct.style.minHeight = "1em", fd.fr.fs(a1B) && (ct
			.style.textDecoration = "underline"), a1B.a1G && (ct.style.textDecorationLine = "underline", ct.style.textDecorationStyle = "dotted"), fd.fr.a0a(a1B.ft) && (ct.style.fontWeight = "bold"), ct.onclick = function(bF) {
			fd.fe.fP(bF, a1B)
		}, qr.rB() || (ct.onmouseover = function(bF) {
			fd.g5.aEy(bF, a1B)
		}), nU.push(ct), ct
	}

	function aEu(dR, dU) {
		var ni = document.createElement("span");
		return ni.textContent = dR, ni.style.color = dU.a0U, ni.style.margin = "0", ni.style.font = "inherit", ni
	}

	function aF6(a1B, a1M, fi) {
		fi !== a1B.fi || a1B.a1N || (a1B.a1N = a1B.username, a1B.username = a1M)
	}
	this.t0 = function() {
		for (var aH = 0; aH < nU.length; aH++) nU[aH].onclick = nU[aH].onmouseover = null;
		aEp = nU = null
	}, this.transform = function(dU) {
		for (var no = document.createElement("div"), aEq = aEr(dU), aH = 0; aH < aEq.length; aH++) no.appendChild(aEq[aH]);
		0 === dU.a0O.id && (no.vx143 = dU.a0O, aEp.push(no)), no.style.margin = "0.6em 0.6em", dU.a0T && (no.style.marginLeft = no.style.marginRight = "inherit"), no.style.font = "inherit";
		var aEs = 0 < dU.a0O.id;
		return dU.a0S && (no.style.fontWeight = "bold"), aEs && (no.style.paddingLeft = "0.7em"), aEs && (no.style.fontStyle = "italic"), no.style.fontSize = dU.fontSize.toFixed(2) + "em", no
	}, this.aF4 = function(aF5) {
		if (aF5 && (2 === aF5.id && 1 === aF5.a0Q || 3 === aF5.id && 2 === aF5.a0Q)) {
			var fi = 3 === aF5.id ? aF5.target : aF5.fi;
			if (!fd.tI.a0b(fi)) {
				for (var a1M = "Redacted " + fj.fk.aR(fi, 2), a18 = fd.tI.a18, aH = a18.length - 1; 0 <= aH; aH--) aF6(a18[aH], a1M, fi);
				for (aH = aEo.length - 1; 0 <= aH; aH--) aF6(aEo[aH], a1M, fi)
			}
		}
	}, this.a1O = function(fi) {
		for (var aF7 = aEp, aH = aF7.length - 1; 0 <= aH; aH--) {
			var z = aF7[aH];
			if (z.vx143.fi === fi) {
				for (; z.firstChild;) fZ.removeChild(z, z.firstChild);
				for (var aEq = aEr(fd.fr.a0R(z.vx143, fd.fr.a0N(z.vx143))), dF = 0; dF < aEq.length; dF++) z.appendChild(aEq[dF]);
				aF7.splice(aH, 1)
			}
		}
	}, this.a0f = function(fi) {
		for (var aF7 = aEp, aH = aF7.length - 1; 0 <= aH; aH--) {
			var z = aF7[aH];
			if (z.vx143.fi === fi) {
				for (; z.firstChild;) fZ.removeChild(z, z.firstChild);
				z.vx143.dR = "[Redacted Message]";
				for (var aEq = aEr(fd.fr.a0R(z.vx143, fd.fr.a0N(z.vx143))), dF = 0; dF < aEq.length; dF++) z.appendChild(aEq[dF]);
				aF7.splice(aH, 1)
			}
		}
	}
}

function aF8() {
	var aFA;

	function aFB(player) {
		var bf, a5E;
		return aP.cA.dj(player) && player < b4.du ? 0 : (bf = aFA[aA.aB((b4.dg - 1) * b2.b3[player], b4.a5K)], aF.bP() < 1920 && (bf = Math.max(aA.aB(100 * (13440 - 6 * aF.bP()), 1920), bf)), a5E = mD.a5F(player), b2.e1[player] > a5E && (bf -= aA.aB(
			2 * bf * (b2.e1[player] - a5E), a5E)), Math.min(Math.max(bf, 0), 700))
	}

	function aFM(cT) {
		for (var b3 = b2.b3, fI = fG.fI, aH = fG.fH - 1; 0 <= aH; aH--) {
			var dP = fI[aH];
			aP.cA.lx(dP, aA.aB(cT * b3[dP], 32))
		}
	}

	function aFJ() {
		var xl = b4.b5;
		mK.a25[0] = b2.e1[xl] - b2.aBH[xl]
	}

	function aFL(p) {
		var xl = b4.b5,
			xl = b2.e1[xl] - b2.aBH[xl] - mK.a25[0];
		mD.aF9 += xl, aM.b1[p] += xl
	}
	this.aF9 = 0, this.yB = function() {
		for (var ay = b4.dg, aH = (aFA = new Uint16Array(ay), 0); aH < ay; aH++) aFA[aH] = 100 + iC(aA.aB(25600 * aH, ay - 4), 9)
	}, this.w = function() {
		(this.aF9 = 0) === b4.data.iIncomeType ? this.zn = aFB : 1 === b4.data.iIncomeType ? this.zn = function(player) {
			return aA.aB(b4.data.iIncomeValue * aFB(player), 64)
		} : this.zn = function(player) {
			return aA.aB(b4.data.iIncomeData[player] * aFB(player), 64)
		}
	}, this.cX = function() {
		if (aF.bP() % 10 == 9 && (mD.aF9 = 0, function() {
				aFJ();
				for (var fI = fG.fI, e1 = b2.e1, aH = fG.fH - 1; 0 <= aH; aH--) {
					var dP = fI[aH],
						aFK = aA.aB(mD.zn(dP) * e1[dP], 1e4);
					aP.cA.lx(dP, Math.max(aFK, 1))
				}
				aFL(9)
			}(), function() {
				if (0 !== b4.data.aIncomeType) {
					if (aFJ(), 1 === b4.data.aIncomeType)
						for (var b3 = b2.b3, fI = fG.fI, cT = b4.data.aIncomeValue, aH = fG.fH - 1; 0 <= aH; aH--) {
							var dP = fI[aH];
							aP.cA.lx(dP, aA.aB(cT * b3[dP], 128))
						} else 2 === b4.data.aIncomeType && function() {
							for (var b3 = b2.b3, fI = fG.fI, cT = b4.data.aIncomeData, aH = fG.fH - 1; 0 <= aH; aH--) {
								var dP = fI[aH];
								aP.cA.lx(dP, aA.aB(cT[dP] * b3[dP], 128))
							}
						}();
					aFL(18)
				}
			}(), aF.bP() % 100 == 99)) {
			if (aFJ(), 0 === b4.data.tIncomeType) aFM(32);
			else if (1 === b4.data.tIncomeType) aFM(b4.data.tIncomeValue);
			else
				for (var b3 = b2.b3, fI = fG.fI, cT = b4.data.tIncomeData, aH = fG.fH - 1; 0 <= aH; aH--) {
					var dP = fI[aH];
					aP.cA.lx(dP, aA.aB(cT[dP] * b3[dP], 32))
				}
			aFL(8)
		}
	}, this.a5F = function(player) {
		return Math.min(100 * b2.b3[player], b4.aFD)
	}, this.mE = function(player, mB) {
		dW.mM(player, mB, mK.mL[0], 0), aP.cA.lx(mB, mK.mL[0]), aM.ep(player, mB), dl.aFE(player, mK.mL[0] + mK.mL[1]), dl.mN(mB, mK.mL[0]), aP.cA.aE5(player)
	}, this.a9i = function() {
		for (var ay = fG.fH, ci = fG.fI, at = 0, ah = b2.e1, aH = 0; aH < ay; aH++) at += ah[ci[aH]];
		return at
	}, this.a9k = function(aFF) {
		for (var dP, ay = fG.fH, ci = fG.fI, at = 0, ah = b2.e1, e7 = e4.e7, aH = 0; aH < ay; aH++) e7[dP = ci[aH]] === aFF && (at += ah[dP]);
		return at
	}
}

function a58() {
	this.aFQ = function(canvas, aFR, i3) {
		var b = canvas.width,
			c = canvas.height,
			cl = aP.aS.hI(b, c),
			hJ = aP.aS.getContext(cl, !0),
			canvas = (hJ.drawImage(canvas, 0, 0), hJ.getImageData(0, 0, b, c));
		return aFR(canvas.data, b, c, i3), hJ.putImageData(canvas, 0, 0), cl
	}, this.aFS = function(dZ, b, c) {
		for (var aY = b - 1; 0 <= aY; aY--)
			for (var aZ = c - 1; 0 <= aZ; aZ--) {
				var aH = 4 * (aY + aZ * b);
				dZ[3 + aH] = dZ[aH], dZ[aH] = dZ[1 + aH] = dZ[2 + aH] = 255
			}
	}, this.aFT = function(dZ, b, c) {
		for (var aY = b - 1; 0 <= aY; aY--)
			for (var aZ = c - 1; 0 <= aZ; aZ--) {
				var aH = 4 * (aY + aZ * b);
				dZ[1 + aH] > dZ[2 + aH] + 10 && (dZ[3 + aH] = dZ[aH], dZ[1 + aH] = dZ[2 + aH])
			}
	}, this.aFU = function(dZ, b, c, i3) {
		for (var gap = Math.floor(Math.min(b, c) * i3), aY = 0; aY < b; aY++)
			for (var aH, aZ = 0; aZ < c; aZ++)(aY < gap || aZ < gap || b - gap <= aY || c - gap <= aZ) && (dZ[3 + (aH = 4 * (aY + aZ * b))] = 255 - 255 * (dZ[1 + aH] - dZ[aH]) / (255 - dZ[aH]))
	}, this.aFV = function(dZ, b, c, i3) {
		for (var aY = b - 1; 0 <= aY; aY--)
			for (var aZ = c - 1; 0 <= aZ; aZ--) {
				var aH = 4 * (aY + aZ * b);
				dZ[aH] = i3[0], dZ[1 + aH] = i3[1], dZ[2 + aH] = i3[2]
			}
	}, this.aFW = function(dZ, b, c, i3) {
		for (var gap = Math.floor(b * i3), aY = 0; aY < b; aY++)
			for (var aH, aZ = 0; aZ < c; aZ++)(aY < gap || aZ < gap || b - gap <= aY || c - gap <= aZ) && (dZ[aH = 4 * (aY + aZ * b)] = dZ[1 + aH] = dZ[2 + aH] = 0)
	}, this.aFX = function(dZ, b, c) {
		for (var aZ, aH, aY = b - 1; 0 <= aY; aY--)
			for (aZ = c - 1; 0 <= aZ; aZ--) 200 < dZ[1 + (aH = 4 * (aY + aZ * b))] && dZ[1 + aH] - 20 > dZ[aH] && dZ[1 + aH] - 20 > dZ[2 + aH] ? dZ[aH] + dZ[2 + aH] < 40 ? dZ[3 + aH] = 0 : (dZ[3 + aH] = dZ[aH], dZ[aH] = 255, dZ[1 + aH] = 255, dZ[
				2 + aH] = 255) : dZ[aH] < 50 && dZ[1 + aH] < 50 && dZ[2 + aH] < 50 && (dZ[aH] + dZ[1 + aH] + dZ[2 + aH] < 50 ? dZ[3 + aH] = 180 : dZ[3 + aH] = 180 + Math.floor(75 * (dZ[aH] + dZ[1 + aH] + dZ[2 + aH] - 50) / 100))
	}, this.aFY = function(dZ, b, c) {
		for (var aZ, aH, aY = b - 1; 0 <= aY; aY--)
			for (aZ = c - 1; 0 <= aZ; aZ--) dZ[1 + (aH = 4 * (aY + aZ * b))] > dZ[aH] + 20 && dZ[1 + aH] > dZ[2 + aH] + 20 && dZ[aH] + dZ[2] < 40 && (dZ[3 + aH] = 255 - dZ[1 + aH], dZ[aH] = dZ[1 + aH] = dZ[2 + aH] = dZ[aH])
	}, this.a0A = function(dZ, b, c, i3) {
		for (var bf = b >> 1, aY = 0; aY < b; aY++)
			for (var aZ = 0; aZ < c; aZ++) Math.sqrt((aY - bf) * (aY - bf) + (aZ - bf) * (aZ - bf)) > i3 * bf && (dZ[4 * (aY + aZ * b) + 3] = 0)
	}
}

function aFZ() {
	var iK, aY, aZ, aFa, aFb, aFc, bL, aFd, aFe, aFf, aFg, gap, zoom, aFh, aFi;

	function aG2(a6, a7, av) {
		dw.dx(av) || -1 === (a6 = eF.fr.wQ(a6, a7)) ? d8.dv(av) : d8.eD(a6)
	}

	function aFr(aFd) {
		for (var aH = aFh.length - 1; 0 <= aH; aH--)
			if (aFh[aH] === aFd) return 1
	}

	function aFp(zJ) {
		var aH, ay;
		if (-1 !== zJ)
			for (ay = iK.length, aH = 0; aH < ay; aH++)
				if (iK[aH].r && iK[aH].aY + 1 === zJ % 4 && iK[aH].aZ + 1 === zJ >> 2) return aH;
		return -1
	}

	function aFn(a6, a7) {
		var ej = gap / 2;
		return a6 < aY - aFa - 3 * ej || aY + 3 * aFa + 5 * ej < a6 || a7 < aZ - aFa - 3 * ej || aZ + 2 * aFa + 3 * ej < a7 ? -1 : 4 * (a7 < aZ - ej ? 0 : a7 < aZ + aFa + ej ? 1 : 2) + (a6 < aY - ej ? 0 : a6 < aY + aFa + ej ? 1 : a6 < aY + 2 * aFa +
			3 * ej ? 2 : 3)
	}
	this.aFj = function() {
		var aH, dL, aFm = [ab.a4C, ab.a4m, ab.a4D, ab.a4w, ab.a4p];
		for (iK = new Array(10), aH = 0; aH < 10; aH++) iK[aH] = {
			id: aH,
			r: !1,
			qH: 0,
			canvas: [],
			aY: 0,
			aZ: 0
		};
		for (iK[0].colors = [0, 1, 2, 3], iK[0].aY = 0, iK[0].aZ = 0, iK[1].colors = [1, 4], iK[1].aY = 1, iK[1].aZ = 0, iK[2].colors = [0, 1], iK[2].aY = -1, iK[2].aZ = 0, iK[3].colors = [0], iK[3].aY = 0, iK[3].aZ = 0, iK[4].colors = [0, 2],
			iK[4].aY = 1, iK[4].aZ = 1, iK[5].colors = [3], iK[5].aY = 0, iK[5].aZ = -1, iK[6].id = 20, iK[6].colors = [0], iK[6].aY = 1, iK[6].aZ = -1, iK[7].id = 21, iK[7].colors = [0], iK[7].aY = 0, iK[7].aZ = 1, iK[8].id = 16, iK[8]
			.colors = [0], iK[8].aY = 0, iK[8].aZ = 0, iK[9].id = 10, iK[9].colors = [4], iK[9].aY = 2, iK[9].aZ = 0, aH = 0; aH < 10; aH++)
			for (dL = 0; dL < iK[aH].colors.length; dL++) iK[aH].canvas.push(function(id, a05) {
				if (id < 20) return aP.canvas.a03(nj.get(3), id, a05);
				var a05 = nj.get(3).height,
					dT = aP.aS.hI(a05, a05),
					hJ = aP.aS.getContext(dT);
				20 === id ? hJ.drawImage(nj.get(18), 0, 0) : 21 === id && dY.dZ.da(dY.yP.ms + dY.yP.mx, hJ, 0, 0, a05);
				return dT
			}(iK[aH].id, aFm[iK[aH].colors[dL]]))
	}, this.aFl = function() {
		return iK
	}, this.w = function() {
		aFh = [], aY = aZ = bL = 0, aFb = aFc = -1e3, this.resize()
	}, this.resize = function() {
		aFa = Math.floor((a0.a1.a2() ? .075 : .0468) * y.bx), zoom = aFa / nj.get(3).height, gap = Math.floor(aFa / 3)
	}, this.qq = function(a6, a7) {
		return !!this.r() && (aF.aG = !0, !!dY.dZ.a5(a6, a7, aFe) || (a6 = function(a6, a7) {
			aFc = aFb = -1e3;
			var aFo = aFp(aFn(a6, a7));
			if (-1 === aFo) return 0;
			if (1 !== iK[aFo].colors[iK[aFo].qH])
				if (5 === aFo) {
					if (! function() {
							var aJ = performance.now();
							aFi + 4e3 < aJ && (aFh = []);
							aFi = aJ
						}(), aFr(aFd)) return 1;
					aFh.push(aFd), 16 < aFh.length && aFh.shift()
				} else if (6 === aFo) {
				for (var aH = aFh.length - 1; 0 <= aH; aH--) 0 === b2.bN[aFh[aH]] && aFh.splice(aH, 1);
				0 < aFh.length && (aFs.aFt(1, aFh, !0) && dB.cA.aFu(aFh, aFd), aFh = [])
			} else if (2 === aFo) mJ.aFv(aFd) && dB.a4M.mE(c7.cC(), aFd);
			else if (3 === aFo) b4.bv && dB.a4M.vq(aFf);
			else if (0 === aFo)
				if (0 === iK[0].qH) {
					if (b4.aFw && bQ.oT() < 350) return 1;
					aCz.aD0(4), dB.a4M.vs(c7.cC(), aFd)
				} else aFx.a7O(aFd, c7.cC());
			else if (1 === aFo) dB.a4M.nL(c7.cC(), aFf);
			else if (9 === aFo) dB.a4M.nO(c7.cC());
			else {
				if (7 === aFo) return aCz.aD0(0), dY.dZ.show(a6, a7), 2;
				if (4 === aFo) aFs.aFt(0, [aFd], !0) && dB.cA.dC(aFd);
				else {
					if (8 !== aFo) return 0;
					dB.a4M.w4(c7.cC(), aFg, aFd)
				}
			}
			return 1
		}(a6, a7), this.aE(), 2 === a6 && (dY.dZ.r = !0), 0 < a6))
	}, this.qt = function(a6, a7) {
		this.r() || (aFb = a6, aFc = a7, bL = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = dH.aFy(mouseX),
			coordY = dH.aFz(mouseY),
			coord = dH.wl(coordX, coordY),
			coord = dH.ls(coord);
		dH.aG0(coordX, coordY) && aG2(mouseX, mouseY, coord)
	}, this.click = function(a6, a7, r0) {
		var aE7 = dH.aFy(a6),
			aE8 = dH.aFz(a7),
			dG = dH.wl(aE7, aE8),
			av = dH.ls(dG);
		return !(!dH.aG0(aE7, aE8) || (aE7 = (a0.a1.a2() ? .025 : .0144) * y.bx, aE8 = performance.now(), Math.abs(a6 - aFb) > aE7) || Math.abs(a7 - aFc) > aE7 || bL + 500 < aE8) && (bL = aE8, r0 ? (aG2(a6, a7, av), !1) : aC.cD || this.r() || !aP
			.cA.la(b4.b5) || b4.bw ? (this.aE(), !1) : (b4.bv ? 0 <= (aFf = aG3.aG4(dG)) && (iK[3].r = !0) : 2 === b4.cU ? dw.lt(av) && (aFd = dw.dz(av), aP.cA.dj(aFd) || (iK[0].r = !0, iK[0].qH = 1, iK[7].r = !0)) : (eF.vx.aFv(b4.b5, dG) &&
				(iK[0].r = !0, iK[0].qH = 1, iK[1].r = !0, iK[1].qH = 0, iK[9].r = !0, iK[9].qH = 0), eF.a9B.aG6(b4.b5, dG) && (iK[0].r = !0, iK[0].qH = 1, iK[1].r = !0, iK[1].qH = 1, aFf = mK.vu[7]), dw.eB(av) ? (aFg = aG7.jx.aG8(av)) &&
				(aE7 = dH.ls(aFg), iK[8].r = !0, aFd = dw.dy(aE7) ? b4.dg : dw.dz(aE7)) : (dw.uc(b4.b5, av) && (aFe = b4.b5, iK[0].r = !0, iK[0].qH = 1, iK[7].r = !0), -1 !== (aE8 = aG3.aGA(dG)) && (dw.dy(aE8 << 2) ? (aFd = b4.dg, lb.aGB(
					b4.b5) ? (iK[0].r = !0, iK[0].qH = 0) : m0.a7J(b4.b5) && (iK[0].r = !0, iK[0].qH = 3)) : (aFd = dw.dz(aE8 << 2), iK[0].qH = 1, iK[5].r = function(aFd) {
					return !aP.cA.dj(aFd) && !aFr(aFd) && aFs.aFt(1, [aFd], !1)
				}(aFd), iK[7].r || aP.cA.dj(aFd) || (aFe = aFd, iK[7].r = !0), iK[4].r = !aP.cA.dj(aFd) && !dl.aGD(aFd) && aFs.aFt(0, [aFd], !1), iK[6].r = function(aFd) {
					if (0 === aFh.length) return !1;
					if (performance.now() > aFi + 4e3) return !(aFh = []);
					return !aFr(aFd) && ! function(aFd) {
						var aH;
						if (b4.e2)
							for (aH = aFh.length - 1; 0 <= aH; aH--)
								if (!lb.lc(aFd, aFh[aH])) return 1;
						return
					}(aFd)
				}(aFd), lb.lc(aFd, b4.b5) ? (lb.aGF(b4.b5, aFd) ? (iK[0].qH = 0, iK[0].r = !0) : m0.a7J(b4.b5) && (iK[0].qH = 3, iK[0].r = !0), iK[0].r = this.aGG()) : (iK[2].r = !0, mJ.aFv(aFd) ? iK[2].qH = 0 : iK[2].qH = 1,
					iK[0].r = !0))))), this.aG5(a6, a7)))
	}, this.aG5 = function(a6, a7) {
		return aY = a6 - Math.floor(aFa / 2), aZ = a7 - Math.floor(aFa / 2), !!this.r()
	}, this.aI = function(a6, a7) {
		return !!this.r() && (dY.dZ.r ? !dY.dZ.a4L(a6, a7) && (dY.dZ.r = !1, aF.aG = !0) : function(cP, a6, a7) {
			a6 = aFn(a6, a7);
			if (0 <= aFp(a6)) return !1;
			if ((1 === a6 || 6 === a6) && 0 <= aFp(2)) return !1;
			if ((6 === a6 || 9 === a6) && 0 <= aFp(10)) return !1;
			return cP.aE(), aF.aG = !0
		}(this, a6, a7))
	}, this.aE = function() {
		for (var aH = iK.length - 1; 0 <= aH; aH--) iK[aH].r = !1, iK[aH].qH = 0;
		dY.dZ.r = !1
	}, this.r = function() {
		return this.aGG() || dY.dZ.r
	}, this.aGG = function() {
		for (var ay = iK.length, aH = 0; aH < ay; aH++)
			if (iK[aH].r) return !0;
		return !1
	}, this.aW = function() {
		if (this.r())
			if (dY.dZ.r) dY.dZ.aW();
			else {
				var aH, hJ = aa,
					dL = iK,
					ay = dL.length,
					aGL = (aFa + gap) / zoom;
				for (hJ.imageSmoothingEnabled = !0, hJ.setTransform(zoom, 0, 0, zoom, aY, aZ), aH = 0; aH < ay; aH++) dL[aH].r && aa.drawImage(dL[aH].canvas[dL[aH].qH], dL[aH].aY * aGL, dL[aH].aZ * aGL);
				hJ.imageSmoothingEnabled = !1, hJ.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aGM() {
	var aGO = new Array(1),
		aGP = new Array(1),
		aGQ = 20,
		aGR = 0,
		aGS = !1;

	function aGU() {
		aGQ++, aGV.play()
	}
	this.w = function() {
		if (!window.document.documentMode) {
			for (var aH = 0; 0 <= aH; aH--) ! function(aH, src) {
				aGP[aH] = 0, aGO[aH] = document.createElement("audio"), aGO[aH].src = src, aGO[aH].setAttribute("preload", "auto"), aGO[aH].setAttribute("controls", "none"), aGO[aH].style.display = "none", aGO[aH].onpause = function() {
					aGP[aH] = 1
				}, aGO[aH].oncanplaythrough = function() {
					aGP[aH] = 0 === aGP[aH] ? 1 : aGP[aH]
				}, document.body.appendChild(aGO[aH])
			}(aH,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aGS = !0
		}
	}, this.t0 = function() {
		if (aGS) {
			aGS = !1;
			for (var aH = 0; 0 <= aH; aH--) aGO[aH].onpause = null, aGO[aH].oncanplaythrough = null, fZ.removeChild(document.body, aGO[aH]), aGO[aH] = null
		}
	}, this.play = function() {
		if (aGS) {
			var aJ = performance.now();
			if (aGR + 66 < aJ)
				for (var aH = 0; 0 <= aH; aH--)
					if (1 === aGP[aH]) return aGR = aJ, aGP[aH] = 2, void aGO[aH].play();
			0 < aGQ && (aGQ--, setTimeout(aGU, 66))
		}
	}
}

function aDm() {
	this.cX = function(player) {
		return eF.a97.uF(player, function(player) {
			var ay = mF.yi.yj;
			if (0 === ay) return -1;
			for (var at = Math.min(ay, mF.performance.a2y ? ay : 10), gJ = mF.yi.gJ, a3m = aA.aB(kI.random() * ay, kI.value(100)), bF = a3m + at, a6 = kI.aGX(b2.a3F[player], b2.a3G[player]), a7 = kI.aGX(b2.a3H[player], b2.a3I[player]),
					qH = -1, wT = dH.aGY(0, 0, ev.f0, ev.f1), aH = a3m; aH < bF; aH++) {
				var hS = aH % ay,
					aGZ = dH.aGa(a6, a7, gJ[hS]);
				aGZ < wT && (wT = aGZ, qH = hS)
			}
			return -1 !== qH ? function(dG, a6, a7) {
				var aE7 = dH.dI(dG),
					aE8 = dH.dJ(dG),
					wj = a6 - aE7,
					wk = a7 - aE8;
				Math.abs(wj) >= Math.abs(wk) ? (wk = 0, wj = Math.sign(wj)) : (wj = 0, wk = Math.sign(wk));
				wj === wk && (wj = 1);
				for (;;) {
					if (aE7 += wj, aE8 += wk, !dH.aGc(aE7, aE8)) break;
					if (dG = dH.wl(aE7, aE8), dw.kj(dH.ls(dG))) return dG
				}
				return -1
			}(gJ[qH], a6, a7) : -1
		}(player))
	}
}

function sO(sB) {
	var iH = document.createElement("div"),
		sG = document.createElement("div");
	this.aV = function() {
			sG.textContent = "", fd.g5.aE(1);
			for (var aGd = document.createDocumentFragment(), aGe = fd.eG.sv[0], tI = fd.tI.tJ[aGe], tM = fd.tI.tM[aGe], aH = 0; aH < tI.length; aH++) ! function(aGd, dU, aGg, aGe) {
				var ni = document.createElement("span");
				ni.textContent = (aGg ? "🟢 " : "⚪ ") + fd.fr.a0W(dU, aGe), ni.style.color = fd.fr.a0Y(dU.fT), ni.style.cursor = "pointer", ni.style.margin = "0.2em 0.2em 0.2em 0.2em", ni.style.width = ni.style.maxWidth = 2 === aGe ? "10em" :
					"9em", ni.style.height = ni.style.maxHeight = "1.4em", ni.style.whiteSpace = "nowrap", ni.style.overflow = "hidden", ni.style.textOverflow = "ellipsis", ni.style.font = "inherit", ni.style.display = "inline-block", fd.fr.fs(
						dU) && (ni.style.textDecoration = "underline"), dU.a1G && (ni.style.textDecorationLine = "underline", ni.style.textDecorationStyle = "dotted");
				ni.onclick = function(bF) {
					sB(bF, dU)
				}, qr.rB() || (ni.onmouseover = function(bF) {
					fd.g5.aEy(bF, dU, 1)
				}), aGd.appendChild(ni)
			}(aGd, tI[aH], aH < tM, aGe);
			sG.appendChild(aGd)
		}, this.show = function(a9n) {
			a9n.appendChild(iH)
		}, this.aE = function(a9n) {
			fZ.removeChild(a9n, iH)
		}, this.resize = function() {
			sG.style.fontSize = aP.aS.hL(aP.aS.hR(.02, .3))
		}, iH.style.top = "0", iH.style.left = "0", iH.style.width = iH.style.height = "100%", iH.style.overflowX = "hidden", iH.style.overflowY = "auto", iH.style.font = "inherit", sG.style.font = "inherit", sG.style.margin = "0.4em", iH
		.appendChild(sG)
}

function ip() {
	var pk, vE, vF, vH;

	function vG(aH) {
		fZ.ff(8, fZ.fa, new fg(21, {
			j9: aH,
			jA: 0,
			jB: 10
		}))
	}
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), vE.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, vF = [new fR(L(207), function() {
		vG(5)
	}, 0, 0, 1), new fR(L(208), function() {
		vG(6)
	}, 0, 0, 1), new fR(L(209), function() {
		vG(7)
	}, 0, 0, 1), new fR("Audit Log", function() {
		vG(12)
	}, 0, 0, 1)], vH = [new fR("⬅️ " + L(71), function() {
		fZ.gc()
	})], pk = new gU(L(298), vH), vE = new vI(vF, pk.gX)
}

function aGh() {
	var aGi = [];

	function aGl(fi) {
		aGi.unshift(fi), gH.rg.nf(161, aGi.join(";"))
	}

	function a7L(fi) {
		for (var aGn = aGi, ay = aGn.length, aH = 0; aH < ay; aH++)
			if (aGn[aH] === fi) return aGn.splice(aH, 1), gH.rg.nf(161, aGn.join(";")), 1
	}
	this.w = function() {
		var ct = gH.gJ.data[161].value;
		ct.length && (aGi = ct.split(";"))
	}, this.get = function() {
		return aGi
	}, this.aGj = function() {
		return {
			go: aGi,
			value: 0
		}
	}, this.a1G = function(fi) {
		return aP.g9.has(aGi, fi)
	}, this.aGk = function(fi) {
		return a7L(fi) ? 0 : (aGl(fi), 1)
	}, this.aV = function(fi) {
		a7L(fi) && aGl(fi)
	}, this.aGm = function(p) {
		p < aGi.length && (aGi.splice(p, 1), gH.rg.nf(161, aGi.join(";")))
	}
}

function aGo() {
	this.aA7 = function() {
		for (var aY, aZ, aH = aA6 - 1; 0 <= aH; aH--) aY = aA.aB(aAO[aH], 4) % ev.f0, aZ = aA.aB(aAO[aH], 4 * ev.f0), b2.a3F[aA3] = Math.min(aY, b2.a3F[aA3]), b2.a3H[aA3] = Math.min(aZ, b2.a3H[aA3]), b2.a3G[aA3] = Math.max(aY, b2.a3G[aA3]), b2
			.a3I[aA3] = Math.max(aZ, b2.a3I[aA3])
	}, this.aGp = function() {
		var z, dP, aH, ay = b2.m3[aA3].length,
			yk = dw.yk;
		loop: for (aH = ay - 1; 0 <= aH; aH--) {
			for (z = 3; 0 <= z; z--)
				if (dP = b2.m3[aA3][aH] + yk[z], dw.dy(dP) || dw.lt(dP) && dw.dz(dP) !== aA3) {
					dw.aAy(b2.m3[aA3][aH], aA3);
					continue loop
				} b2.m3[aA3][aH] = b2.m3[aA3][ay - 1], b2.m3[aA3].pop(), ay--
		}
	}, this.aGq = function() {
		var player = aA3,
			a5J = b2.a5J,
			ld = b2.ld,
			yY = b2.yY,
			ay = a5J[player].length,
			yk = dw.yk;
		loop: for (var aH = ay - 1; 0 <= aH; aH--) {
			for (var aGr = !1, aGs = !1, z = 3; 0 <= z; z--) {
				var dP = a5J[player][aH] + yk[z];
				if (dw.aGt(dP, player)) continue loop;
				aGr = aGr || dw.kj(dP), aGs = aGs || dw.aGu(dP)
			}
			aGr ? ld[player].push(a5J[player][aH]) : aGs ? yY[player].push(a5J[player][aH]) : dw.aC4(a5J[player][aH], player), a5J[player][aH] = a5J[player][ay - 1], a5J[player].pop(), ay--
		}
	}, this.a9w = function() {
		b2.b3[a9t] -= aA6
	}, this.a9x = function(border) {
		for (var ay = border.length, aH = ay - 1; 0 <= aH; aH--) dw.uc(a9t, border[aH]) || (border[aH] = border[ay - 1], border.pop(), ay--)
	}, this.a9y = function(border) {
		for (var ay = border.length, aH = ay - 1; 0 <= aH; aH--) !dw.uc(a9t, border[aH]) && dw.dx(border[aH]) && (border[aH] = border[ay - 1], border.pop(), ay--)
	}, this.a9z = function(border) {
		for (var z, dP, ay = border.length, yk = dw.yk, aH = ay - 1; 0 <= aH; aH--)
			for (z = 3; 0 <= z; z--)
				if (dP = border[aH] + yk[z], dw.aGt(dP, a9t)) {
					b2.a5J[a9t].push(border[aH]), border[aH] = border[ay - 1], border.pop(), ay--;
					break
				}
	}, this.aA0 = function() {
		for (var z, dP, yk = dw.yk, aH = aA6 - 1; 0 <= aH; aH--)
			for (z = 3; 0 <= z; z--) dP = aAO[aH] + yk[z], dw.lu(a9t, dP) && dw.aGv(dP) && (b2.a5J[a9t].push(dP), dw.aAP(dP, a9t))
	}, this.aA1 = function() {
		var aY, aZ;
		loop: for (; b2.a3H[a9t] < b2.a3I[a9t];) {
			for (aY = b2.a3G[a9t]; aY >= b2.a3F[a9t]; aY--)
				if (dw.uc(a9t, 4 * (b2.a3H[a9t] * ev.f0 + aY))) break loop;
			b2.a3H[a9t]++
		}
		loop: for (; b2.a3H[a9t] < b2.a3I[a9t];) {
			for (aY = b2.a3G[a9t]; aY >= b2.a3F[a9t]; aY--)
				if (dw.uc(a9t, 4 * (b2.a3I[a9t] * ev.f0 + aY))) break loop;
			b2.a3I[a9t]--
		}
		loop: for (; b2.a3F[a9t] < b2.a3G[a9t];) {
			for (aZ = b2.a3I[a9t]; aZ >= b2.a3H[a9t]; aZ--)
				if (dw.uc(a9t, 4 * (aZ * ev.f0 + b2.a3F[a9t]))) break loop;
			b2.a3F[a9t]++
		}
		loop: for (; b2.a3F[a9t] < b2.a3G[a9t];) {
			for (aZ = b2.a3I[a9t]; aZ >= b2.a3H[a9t]; aZ--)
				if (dw.uc(a9t, 4 * (aZ * ev.f0 + b2.a3G[a9t]))) break loop;
			b2.a3G[a9t]--
		}
	}, this.lc = function(player, lv) {
		return 0 === e4.e7[player] || e4.e7[player] !== e4.e7[lv]
	}, this.aGB = function(player) {
		for (var aH, hS, ay = b2.a5J[player].length, yk = dw.yk, z = 3; 0 <= z; z--)
			for (hS = yk[z], aH = 0; aH < ay; aH++)
				if (dw.dy(b2.a5J[player][aH] + hS)) return !0;
		return !1
	}, this.a7M = function(player) {
		for (var aH, hS, ay = b2.a5J[player].length, yk = dw.yk, z = 3; 0 <= z; z--)
			for (hS = yk[z], aH = 0; aH < ay; aH++)
				if (dw.aAx(b2.a5J[player][aH]) && dw.dy(b2.a5J[player][aH] + hS)) return !0;
		return !1
	}, this.aGF = function(aGw, aGx) {
		for (var aH, aJ, hS, dP, aCa = b2.a5J[aGw].length, aCb = b2.a5J[aGx].length, yk = (aCb < aCa && (aJ = aGw, aGw = aGx, aGx = aJ, aJ = aCa, aCa = aCb, 0), dw.yk), z = 3; 0 <= z; z--)
			for (hS = yk[z], aH = 0; aH < aCa; aH++)
				if (dP = b2.a5J[aGw][aH] + hS, dw.lt(dP) && dw.dz(dP) === aGx) return !0;
		return !1
	}, this.a7N = function(aGw, aGx) {
		for (var aH, hS, dP, aCa = b2.a5J[aGw].length, yk = dw.yk, z = 3; 0 <= z; z--)
			for (hS = yk[z], aH = 0; aH < aCa; aH++)
				if (dw.aAx(b2.a5J[aGw][aH]) && (dP = b2.a5J[aGw][aH] + hS, dw.lt(dP)) && dw.dz(dP) === aGx) return !0;
		return !1
	}
}

function a2w() {
	this.hq = function() {
		return 69
	}, this.hy = function() {
		var b = window.screen.width,
			c = window.screen.height;
		hn.hr(26, (b * c + c) % 67108864), hn.hr(22, 0), hn.hr(21, 0)
	}
}

function nm(aGy, type, aGz, aH0) {
	var bF;
	this.bF = document.createElement("input"), (bF = this.bF).type = type ? "number" : "text", bF.id = "input" + fZ.eG.aH1++, bF.value = aGy.value, bF.style.width = "100%", bF.style.userSelect = "none", bF.style.outline = "none", bF.style.resize =
		"none", bF.style.border = "inherit", bF.style.font = "inherit", bF.style.color = ab.am, bF.style.backgroundColor = ab.a4Q, bF.style.fontSize = "1em", bF.style.padding = "0.1em 0.2em", bF.addEventListener("focus", function() {
			y.os++
		}), bF.addEventListener("blur", function() {
			y.os--, -1 !== aGy.p && gH.rg.nf(aGy.p, bF.value)
		}), bF.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== aGy.p && gH.rg.nf(aGy.p, bF.value), aGz ? aGz() : bF.blur())
		}), aH0 && bF.addEventListener("input", function(dU) {
			aH0(dU)
		})
}

function aH2() {
	this.a1D = 0, this.fq = null, this.tI = null, this.fr = null, this.eG = null, this.fe = null, this.g5 = null, this.message = null, this.fy = null, this.yP = null, this.a1E = null, this.vj = new aH3, this.nz = 0, this.aH4 = 0, this.w =
function() {
		this.aH4 = aF.bL, this.a1D = gL.fk.gM(gH.gJ.data[105].value, 5), this.tI = new a17, this.fr = new a0B, this.eG = new aH5, this.fe = new fJ, this.g5 = new aH6, this.message = new aH7, this.fy = new a8d, this.yP = new aEn, this.a1E =
			new aH8, this.eG.w(), aGV.w(), this.nz = 1, a0.a1.setState(1), iY.setState(0)
	}, this.t0 = function() {
		this.yP && this.yP.t0(), this.fq = null, this.tI = null, this.fr = null, this.eG = null, this.fe = null, this.g5 = null, this.message = null, this.fy = null, this.yP = null, this.a1E = null, this.nz = 0, aGV.t0(), a0.a1.setState(0)
	}
}

function a8T() {
	this.a8P = function() {
		for (var dP, aY, bG, a8M = a8N, a8O = ev.kq, b = ev.f0, a8L = b - 1, zG = ev.f1 - 1, eU = 0, aZ = 1; aZ < zG; aZ++)
			for (bG = aZ * b, aY = 1; aY < a8L; aY++) a8O[dP = bG + aY << 2] === a8O[1 + dP] && a8O[dP] === a8O[2 + dP] && (eU++, a8M[2 + dP] = 4);
		f2.f6 = eU
	}, this.a8Q = function(aH9, aHA) {
		for (var a8M = a8N, b = ev.f0, a8L = b - 1, zG = ev.f1 - 1, id = 0, aZ = 1; aZ < zG; aZ++)
			for (var bG = aZ * b, aY = 1; aY < a8L; aY++) {
				var av = 2 + (bG + aY << 2);
				a8M[av] === aH9 && (! function(av, id, aH9, aHA) {
					var ay = 1,
						a8M = a8N,
						yk = dw.yk,
						a6U = [av],
						aHC = id >> 8 << 1,
						aHD = 255 & id;
					a8M[av - 2] = aHC, a8M[av - 1] = aHD, a8M[av] = 5;
					for (; ay;) {
						for (var a6V = [], aH = 0; aH < ay; aH++)
							for (var lr = a6U[aH], z = 3; 0 <= z; z--) {
								var lo = lr + yk[z];
								a8M[lo] === aH9 && (a8M[lo - 2] = aHC, a8M[lo - 1] = aHD, a8M[lo] = aHA, a6V.push(lo))
							}
						ay = (a6U = a6V).length
					}
				}(av, id, aH9, aHA), id = (id + 1) % 32768)
			}
	}, this.a8R = function() {
		for (var a8M = a8N, b = ev.f0, a8L = b - 3, zG = ev.f1 - 3, aHF = 12 * b, aZ = 3; aZ < zG; aZ++)
			for (var bG = aZ * b, aY = 3; aY < a8L; aY++) {
				var av = 2 + (bG + aY << 2);
				2 !== a8M[av] || 2 === a8M[av - 12] && 2 === a8M[12 + av] && 2 === a8M[av - aHF] && 2 === a8M[av + aHF] || (a8M[av - 2] = 1 | a8M[av - 2])
			}
	}
}

function aHG() {
	var ar, ku, aHH, aHI, gap, aHJ, aHK, aHL, aHM, aHN, br, aH4, aHO, bE, c5, kK, aHP;

	function aHT() {
		aHI = Math.floor(.2 * (a0.a1.a2() ? .07 : .035) * y.bx), aHI = d5(a0.a1.a2() ? 3 : 1, aHI);
		var aHW = y.b / (ar.length + gap);
		aHI = aHI < aHW ? aHW : aHI, c5 = Math.floor((1 - gap) * aHI), ku = 0, aHX()
	}

	function aHX() {
		ku = (ku = ku < -20 ? -20 : ku) > (ar.length - 15) * aHI ? (ar.length - 15) * aHI : ku, aHK = Math.floor(ku / aHI), aHL = (aHL = aHK + Math.floor(y.b / aHI)) > ar.length - 1 ? ar.length - 1 : aHL, aHK = (aHK = aHL < aHK ? aHL : aHK) < 0 ? 0 :
			aHK;
		var at = aHL;
		aHJ = aHH / ar[at];
		for (var aH = aHL - 1; aHK <= aH; aH--) ar[aH] > ar[at] && (at = aH, aHJ = aHH / Math.pow(ar[aH], bE))
	}

	function aHZ(aY) {
		aY = Math.floor((ku + y.b - aY - gap * aHI) / aHI);
		return (aY = aY < -1 ? -1 : -1 === aY ? 0 : aY > ar.length - 1 ? -1 : aY) !== aHM && (aHM = aY, -1 === kK && 0 === aHM && p4.aHQ && (kK = setInterval(aHa, 100)), 1)
	}

	function aHb(aH) {
		var aHd = Math.floor(aHJ * Math.pow(ar[aH], bE));
		aa.fillRect(ku + y.b - (aH + 1) * aHI, y.c - aHd, c5, aHd)
	}

	function aHa() {
		var dP;
		0 !== (aHM = 8 === iY.iZ() ? -1 : aHM) ? (aHP = (new Date).getTime(), clearInterval(kK), kK = -1) : (dP = ar[1] / 864e3, -1 !== aHP && (dP += ((new Date).getTime() - aHP) * ar[1] / 864e5, aHP = -1), 0 < dP && (ar[0] += Math.floor(dP), aF
			.aG = !0))
	}
	this.aHQ = !1, this.w = function() {
		aHP = kK = -1, aHM = -(bE = 1), this.aHR = !1, aHO = 0, aH4 = new Date, ku = 0, gap = .3, ar = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aHH = Math.floor(.15 * y.c), aHN = (aHN = Math.floor((a0.a1.a2() ? .018 : .0137) * y.bx)) < 2 ? 2 : aHN, br = aP.aS.aT(1, aHN), aHT()
	}, this.aHU = function(aHV) {
		var aH;
		for (this.aHQ = !0, aH = 0; aH < aHV.length; aH++) ar.unshift(aHV[aH]);
		aHT(), aF.aG = !0
	}, this.aDc = function() {
		aHX()
	}, this.aI = function(aY, aZ) {
		aZ > y.c - .6 * aHH ? this.aHR ? aY !== aHO && (ku += aY - aHO, aHO = aY, aHX(), aHZ(aY), this.aHR = -1 !== aHM, aF.aG = !0) : aHZ(aY) && (aF.aG = !0) : this.qx()
	}, this.qx = function() {
		-1 !== aHM && (this.aHR = !1, aHM = -1, aF.aG = !0)
	}, this.cV = function(aY, deltaY) {
		-1 !== aHM && (ku += Math.floor(deltaY), aHX(), aHZ(aY), aF.aG = !0)
	}, this.a5 = function(aY, aZ) {
		this.aI(aY, aZ), -1 !== aHM && (aHO = aY, this.aHR = !0)
	}, this.aK = function() {
		-1 !== aHM && (this.aHR = !1)
	}, this.aW = function() {
		aa.fillStyle = ab.bI;
		for (var aHe, month, aJ, e, aHh, aHi, bT, aHj, aHk, aH = aHL; aHK <= aH; aH--) aHb(aH);
		this.aHQ && 0 === aHK && (aa.fillStyle = ab.a4l, aHb(0)), -1 !== aHM && (aa.fillStyle = ab.a4T, aHb(aHM)), -1 !== aHM && (aa.font = br, aP.aS.textBaseline(aa, 2), (aJ = new Date).setTime(aH4.getTime() - 1e3 * aHM * 60 * 60 * 24), month =
			"month", aHe = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(aJ), aHe = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(aJ)), aHe = aHe + ", " + aJ.getUTCDate() + " " + month + " " + aJ.getFullYear(), month = 1 === ar[aHM] ? L(299) : L(300), month = aP.aQ.aR(ar[aHM]) + " " + month, aJ = Math.floor(aa.measureText(aHe).width), e = Math
			.floor(aa.measureText(month).width), aHh = Math.floor(.5 * (aJ + aHN)), aHi = (aHi = ku + y.b - (aHM + 1) * aHI) < aHh ? aHh : aHi > y.b - aHh ? y.b - aHh : aHi, bT = y.c - Math.floor(aHJ * Math.pow(ar[aHM], bE)), aHj = Math
			.floor(1.1 * aHN), aHk = bT > y.c - aHj ? y.c - aHj : bT, aa.fillStyle = ab.ac, aa.fillRect(y.b - e - aHN, aHk - aHj, e + aHN, aHj), aa.fillRect(aHi - aHh, y.c - aHj, aJ + aHN, aHj), aa.fillStyle = ab.am, aP.aS.textAlign(aa, 2),
			aa.fillText(month, Math.floor(y.b - .5 * aHN), aHk), aP.aS.textAlign(aa, 1), aa.fillText(aHe, aHi, y.c), aa.strokeStyle = ab.a4U, aa.lineWidth = 1, aa.beginPath(), aa.moveTo(0, bT), aa.lineTo(y.b, bT), aa.closePath(), aa.stroke())
	}
}

function aHl() {
	var rm = new Uint8Array(b4.dg),
		aHm = new Uint16Array(b4.dg),
		aHn = new Uint16Array(b4.dg),
		aHo = new Uint8Array(b4.dg),
		aHp = (this.eA = new Uint8Array(b4.dg), new Uint16Array(b4.dg)),
		aHq = new Uint16Array(b4.dg);

	function aHx(aH) {
		rm[aH] = 1 + aA.aB(aHp[aH] * kI.random(), 10 * kI.value(100))
	}
	this.e9 = null, this.a5c = [97, 94, 70, 40, 20, 0, 100], this.aDw = [500, 450, 400, 300, 80, 50, 100], this.a5Y = [0, 0, 5, 25, 50, 100, 0], this.aCc = [60, 74, 112, 200, 256, 512, 512], this.aDu = [1, 2, 3, 4, 6, 8, 1], this.yp = [500, 450, 400,
		300, 80, 50, 100
	], this.aHr = [100, 150, 250, 400, 600, 1e3, 100], this.v = function() {
		this.e9 = [L(301), L(302), L(248), L(303), L(304), L(305), "H Bot"]
	}, this.w = function() {
		rm.fill(0), aHm.fill(0), aHn.fill(0), aHo.fill(0), this.eA.fill(0), aHp.fill(0), aHq.fill(0);
		var aHs = b4.du;
		if (9 === b4.f7) this.aHt();
		else if (b4.o0)
			if (3 === b4.data.botDifficultyType)
				for (aH = b4.aHv - 1; 0 <= aH; aH--) {
					var hC = aH + aHs;
					this.eA[hC] = b4.data.botDifficultyData[hC]
				} else if (2 === b4.data.botDifficultyType)
					for (aH = b4.aHv - 1; 0 <= aH; aH--) this.eA[hC = aH + aHs] = b4.data.botDifficultyTeam[e4.e6[e4.e7[hC]]];
				else if (1 === b4.data.botDifficultyType) {
			var aHw = this.e9.length;
			for (aH = b4.aHv - 1; 0 <= aH; aH--) this.eA[aH + aHs] = aH % aHw
		} else
			for (aHw = b4.data.botDifficultyValue, aH = b4.aHv - 1; 0 <= aH; aH--) this.eA[aH + aHs] = aHw;
		else
			for (var aHu = 8 === b4.f7 ? 1 : 0, aH = b4.aHv - 1; 0 <= aH; aH--) this.eA[aH + aHs] = aHu;
		for (aH = 0; aH < aHs; aH++) this.eA[aH] = 6;
		var ay = b4.dg;
		for (aH = 0; aH < ay; aH++) this.eA[aH] <= 2 ? (aHo[aH] = 5, aHp[aH] = aHq[aH] = 1040, 0 === this.eA[aH] ? (aHm[aH] = 980, aHn[aH] = 980) : 1 === this.eA[aH] ? (aHm[aH] = 980, aHn[aH] = 920, aHp[aH] = aHq[aH] = 1100) : (aHm[aH] = 825,
				aHn[aH] = 750)) : this.eA[aH] <= 4 ? (aHo[aH] = 1 + kI.nG(20), 3 === this.eA[aH] ? (aHm[aH] = aHn[aH] = 500, aHp[aH] = aHq[aH] = 1e3) : (aHq[aH] = 250 + kI.nG(1501), aHp[aH] = 500 + kI.nG(501), aHm[aH] = 300 + kI.nG(201), aHn[
				aH] = 100 + kI.nG(201))) : this.eA[aH] <= 5 ? (aHp[aH] = 1e3, aHq[aH] = 1e3, aHo[aH] = 35 + kI.nG(16), aHm[aH] = 300 + kI.nG(201), aHn[aH] = 50 + kI.nG(101)) : (aHp[aH] = aHq[aH] = 800, aHo[aH] = 5, aHm[aH] = 10, aHn[aH] = 250),
			aHx(aH)
	}, this.aHt = function() {
		for (var av = a3w.aHy, aHs = b4.du, aH = av - 1; 0 <= aH; aH--) this.eA[aH + aHs] = 0;
		for (var dL = 0; dL < 6; dL++) {
			for (aH = av + a3w.a3x[dL] - 1; av <= aH; aH--) this.eA[aH + aHs] = dL;
			av += a3w.a3x[dL]
		}
	}, this.a5M = function(dP, value) {
		rm[dP] = Math.min(value, rm[dP])
	}, this.cX = function(dP) {
		0 == --rm[dP] && ! function(dP) {
			(function(dP) {
				aHp[dP] !== aHq[dP] && (aHp[dP] += aHp[dP] < aHq[dP] ? 3 : -3);
				aHm[dP] !== aHn[dP] && (aHm[dP] += aHm[dP] < aHn[dP] ? aHo[dP] : -aHo[dP], aHm[dP] = (Math.abs(aHm[dP] - aHn[dP]) <= aHo[dP] ? aHn : aHm)[dP]);
				rm[dP] = aA.aB(aHp[dP], 10)
			})(dP), mF.mG.a5D(dP, aA.aB(aHm[dP] * b2.e1[dP], 1e3))
		}(dP)
	}, this.a37 = function(dP, eU) {
		aHp[dP] = aHq[dP] = eU
	}
}

function aI1() {
	this.aI2 = new aI3, this.aI4 = new aI5, this.w = function() {
		a0.a1.u8()
	}, this.aI6 = function() {
		return gH.gJ.data[160].value
	}
}

function aI7() {
	var aI8 = new Uint8Array(78);
	this.w = function() {
		var aH;
		for (aI8[50] = 37, aH = 0; aH < 10; aH++) aI8[aH + 3] = aH + 1;
		for (aH = 0; aH < 26; aH++) aI8[aH + 20] = aH + 11, aI8[aH + 52] = aH + 38
	}, this.a7q = function(ct) {
		return ct.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a9I = function(ct, size) {
		if ((ct = this.a7q(ct)).length > size) return ct.substring(0, size);
		for (; ct.length < size;) ct = "-" + ct;
		return ct
	}, this.xg = function(ct) {
		for (var ud = aI8, ay = ct.length, ar = new Uint8Array(ay), aH = 0; aH < ay; aH++) ar[aH] = ud[ct.charCodeAt(aH) - 45];
		return ar
	}, this.xf = function(kF) {
		hn.gD(6 * kF.length), this.aI9(kF), jQ.w(hn.i0)
	}, this.aI9 = function(kF) {
		for (var ay = kF.length, b = hn, aH = 0; aH < ay; aH++) b.hr(6, kF[aH])
	}, this.jM = function(ct) {
		this.aI9(this.xg(ct))
	}, this.jG = function(ct, size) {
		this.aI9(this.xg(this.a9I(ct, size)))
	}, this.gM = function(ct, size) {
		for (var ar = this.xg(this.a9I(ct, size)), b0 = 0, cT = 1, aH = ar.length - 1; 0 <= aH; aH--) b0 += cT * ar[aH], cT *= 64;
		return b0
	}
}

function jy() {
	this.aG8 = function(av) {
		var yh;
		return ev.yX(ev.ey) && b4.data.passableMountains && (yh = dw.eC(av), this.aIA(b4.b5, yh) || this.aIB(b4.b5, yh)) && 0 !== (yh = function(ub) {
			for (var aY = dH.dI(ub), aZ = dH.dJ(ub), max = Math.max(ev.f0, ev.f1) - 2, aIF = max * max, en = !1, aIG = 0, wT = 0; wT < max; wT++) {
				var aIH, dG = function(aY, aZ, wT) {
					for (var aH = 0; aH <= wT; aH++)
						for (var dF = -1; dF < 2; dF += 2)
							for (var dL = -1; dL < 2; dL += 2)
								for (var cl = 0; cl < 2; cl++) {
									var av = function(aY, aZ) {
										if (dH.aGc(aY, aZ)) {
											aY = dH.wl(aY, aZ), aZ = dH.ls(aY);
											if (dw.dx(aZ) && dw.aIJ(aZ)) return aY
										}
										return 0
									}(aY + cl * dF * aH + (1 - cl) * dL * wT, aZ + cl * dL * wT + (1 - cl) * dF * aH);
									if (av) return av
								}
					return 0
				}(aY, aZ, wT);
				dG && (aIH = dH.aGa(aY, aZ, dG)) < aIF && (aIG = dG, aIF = aIH, en || (en = !0, max = Math.floor(Math.sqrt(aIH)) + 1))
			}
			return aIG
		}(dH.wG(av))) && (av = dH.ls(yh), dw.dy(av) || (av = dw.dz(av)) !== b4.b5 && lb.lc(av, b4.b5)) ? yh : 0
	}, this.aID = function(player, dG) {
		dG = dH.ls(dG);
		if (dw.dx(dG)) {
			if (dw.dy(dG)) mK.a2B[0] = b4.dg;
			else if (dw.dz(dG) !== mK.a2B[0]) return !1;
			for (var e7 = function(av) {
					var yk = dw.yk,
						e7 = [];
					loop: for (var z = 3; 0 <= z; z--) {
						var lo = av + yk[z];
						if (dw.eB(lo)) {
							for (var id = dw.eC(lo), aH = 0; aH < e7.length; aH++)
								if (id === e7[aH]) continue loop;
							mK.a29[e7.length] = lo, e7.push(id)
						}
					}
					return e7
				}(dG), ay = e7.length, aH = 0; aH < ay; aH++)
				if (this.aIA(player, e7[aH]) || this.aIB(player, e7[aH])) return mK.a29[0] = mK.a29[aH], !0
		}
		return !1
	}, this.aIA = function(player, yh) {
		for (var yY = b2.yY[player], ay = yY.length, yl = Math.max(aA.aB(ay, 12), 1), yk = dw.yk, aH = 0; aH < ay; aH += yl)
			for (var lr = yY[aH], z = 3; 0 <= z; z--) {
				var lo = lr + yk[z];
				if (dw.eB(lo) && yh === dw.eC(lo)) return !0
			}
		return !1
	}, this.aIB = function(player, yh) {
		for (var yY = b2.yY[player], ay = yY.length, yk = dw.yk, aH = 0; aH < ay; aH++)
			for (var lr = yY[aH], z = 3; 0 <= z; z--) {
				var lo = lr + yk[z];
				if (dw.eB(lo) && yh === dw.eC(lo)) return !0
			}
		return !1
	}
}

function aIK() {
	this.aB = function(dF, dL) {
		return Math.floor((dF + .5) / dL)
	}, this.aIL = function(dF, dL) {
		return Math.floor(dF * (dL + .5))
	}, this.sqrt = function(b0) {
		return ~~Math.sqrt(b0 + .5)
	}, this.pow = function(bF) {
		return Math.floor(Math.pow(2, bF) + .5)
	}, this.cI = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIM = function(bG, bH, mc) {
		return Math.max(Math.min(bG, bH), mc)
	}, this.aIN = function(aIO, aIP, aY, aZ) {
		aY -= aIO, aIO = aZ - aIP, aZ = 0;
		return 0 == aY ? aZ = 0 <= aIO ? Math.PI : 0 : (aZ = Math.atan(aIO / aY), aZ += 0 < aY ? .5 * Math.PI : 1.5 * Math.PI), aZ
	}, this.log2 = function(b0) {
		return Math.floor(!!b0 * (1 + Math.log2(b0 + .5)))
	}, this.log10 = function(b0) {
		return Math.floor(Math.log10(b0 + .5))
	}, this.wt = function(a69, a6A, aIR, aIS, aIT) {
		return aIR - aIT < a69 && a69 < aIR + aIT && aIS - aIT < a6A && a6A < aIS + aIT
	}, this.aBo = function(a6v, a6x) {
		return a6v * a6v + a6x * a6x
	}
}

function gn(aGy, aIU) {
	this.nv = [];
	var aIV = this.nv;

	function click() {
		for (var aH = 0; aH < aIV.length; aH++) aIV[aH].textContent = aIV[aH].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var p = parseInt(this.name);
		void 0 !== aGy.p && gH.rg.nf(aGy.p, p), aIU && aIU(p)
	}
	for (var aIW, ay = aGy.go.length, aH = 0; aH < ay; aH++)(aIW = document.createElement("p")).textContent = "⚪ " + aGy.go[aH], aIW.style.margin = "0", aIW.name = "" + aH, aIW.style.cursor = "pointer", aIW.style.fontSize = "1em", aIW
		.addEventListener("click", click), aIV.push(aIW);
	aIV[aGy.value].textContent = aIV[aGy.value].textContent.replace("⚪", "🟢")
}

function lG() {
	aIX.vm(), aa.setTransform(mn, 0, 0, mn, 0, 0), aa.imageSmoothingEnabled = mn < 3, aa.drawImage(ev.x5, cM.mm(), cM.d7()), zC.a90.aW(), aa.drawImage(aIY, cM.mm(), cM.d7()), aIX.aW(), eF.aW(), dl.aW(), (b4.qJ ? (pC.aW(), aD) : (d8.aW(), p6.aW(), c7
		.aW(), aD.aW(), d3.aW(), bQ.aW(), cM.aW(), aO.aW(), pC.aW(), p7.aW(), p8.aW(), aC.aW(), p9.aW(), pB.aW(), pA.aW(), aIZ)).aW(), fZ.aW()
}

function aIa(ao, b, c) {
	ao.clearRect(0, 0, b, c), ao.fillStyle = ab.ac, ao.fillRect(0, 0, b, c)
}

function aIb(ao, b, c, aIc) {
	ao.fillStyle = ab.am, ao.fillRect(0, 0, b, aIc), ao.fillRect(0, 0, aIc, c), ao.fillRect(b - aIc, 0, aIc, c), ao.fillRect(0, c - aIc, b, aIc)
}

function a71(ao, aY, aZ, rD, aIc, dP, aId) {
	ao.fillStyle = ab.am;
	var dP = Math.floor(rD * dP),
		e = (dP += (dP - aIc) % 2, Math.floor((dP - aIc) / 2)),
		rD = Math.floor((rD - dP) / 2);
	ao.fillRect(aY + rD, aZ + rD + e, dP, aIc), aId && ao.fillRect(aY + rD + e, aZ + rD, aIc, dP)
}

function aI3() {
	var aGR = 12e3;
	this.show = function(aIf) {
		return !aIf && !aIg.aI6() && (0 === a0.id ? aIg.aI4.show() : 2 === a0.id && !(aF.bL < aGR) && (aGR = aF.bL + 3e5, 2 === hs.aIh) && a0.a1.u9(Math.floor(3e5)))
	}
}

function aH5() {
	function aIj(aIm) {
		fd.eG.a1H && 1 === fd.eG.sv[2] && fZ.j5(29).t8(), fd.eG.a1H = 0, fZ.j5(29).t6(), 0 !== fd.eG.tB[fd.eG.sv[0]].sU && !aIm || fZ.j5(29).t5(), fd.g5.aIn()
	}
	this.tB = new Array(4), this.sv = [0, 0, 1, 0], this.a1H = 0, this.tS = [0, 0], this.w = function() {
		for (var aH = 0; aH < this.tB.length; aH++) this.tB[aH] = new yR;
		this.sv[0] = gH.gJ.data[158].value
	}, this.aIi = function() {
		aIj(!0), fd.a1E.w()
	}, this.aIk = function() {
		fd.a1E.aIk();
		for (var aH = 0; aH < fd.eG.tB.length; aH++) {
			var tA = fd.eG.tB[aH];
			0 === tA.sU ? tA.yU = 0 : (tA.tH = Math.max(tA.tH - tA.yU % 2, 0), tA.yU++)
		}
		aIj(!1)
	}, this.aIo = function(a0X) {
		this.sv[0] !== a0X || this.sv[2] || fZ.j5(29).tU()
	}
}

function aIp() {
	this.dg = 512, this.a7l = 15e8, this.aFD = 1e9, this.aIq = 5e4, this.aIr = 512, this.aAC = 2, this.b5 = 0, this.du = 0, this.fC = 0, this.aHv = 0, this.a0x = 0, this.a3n = 512, this.aBh = 512, this.aIs = 150, this.o0 = !0, this.bw = 0, this.cU =
		0, this.a5K = 0, this.qJ = !1, this.bv = 0, this.aFw = 0, this.e2 = !1, this.zI = 0, this.zH = 0, this.f7 = 0, this.cp = 0, this.l7 = null, this.eV = new aIt, this.l6 = 30, this.a2c = 0, this.eR = 0, this.aEi = 0, this.vO = 0, this.data =
		new gO, this.x7 = new g6, this.xB = 0, this.jn = "", this.xA = function() {
			mK.w(), a0z.w(), dW.clear(), this.fC = this.du = this.data.humanCount, this.o0 = 1 === this.fC, this.qJ = !1, this.bw = this.data.isReplay, this.f7 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.cp = this.data.isContest, this.e2 = this.f7 < 7 || 9 === this.f7, this.f7 = 10 === this.f7 && this.o0 ? 7 : this.f7, this.f7 = 8 === this.f7 && 2 !== this.du ? 7 : this.f7, a3w.w(),
				this.zI = this.data.numberTeams, this.data.teamPlayerCount ? this.zH = +(0 < this.data.teamPlayerCount[0]) : (this.zH = 0, this.e2 && this.o0 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.zI + 1), b4.x7.g7())), this.l6 = this.du <= 2 ? 30 : this.du <= 50 ? 40 : 50, this.aFw = this.bv = this.data.selectableSpawn, this.l7 = this.bv ? new aIu : null, 1 === hs.aIh ? this.a3n = this.du : this.a3n = this.data
				.playerCount, this.aBh = this.a3n, this.aHv = this.a3n - this.du, this.a0x = 0, this.b5 = this.data.selectedPlayer, this.a2c = 0, this.eR = 0, this.aEi = 0, this.vO = 0, kI.kg(this.data.spawningSeed), mD.w(), b2.w(), mJ.w(), aIv.nA(),
				dB.l5.a2j = [], e4.w(), this.cU = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), aM.w(), aIw(), dw.v(), f2.a8K(), l9.w(), dw.w(), aIX.w(), dH.w(), eF.w(), mF.w(), aCz.aIx(), e8.w(), aIv
			.gD(), aIy.w(), aIz.w(), fG.aJ0(), jo.w(), pC.w(), zC.w(), pA.w(), aJ1.putImageData(aJ2, 0, 0), p6.w(), cM.w(), c7.w(), aD.w(), d3.w(), p7.w(), bQ.w(), aC.w(), aO.w(), d8.w(), p8.w(), p9.w(), pB.w(), m4.w(), a1g.w(), aJ3(), m0.w(), dl
			.w(), aJ4.w(), aFs.w(), aFx.w(), this.eV.w(), aF.aIx(), dD.aJ6(), 0 === b2.bN[b4.b5] && pB.show(!1, !0), dl.c2(!0), aIZ.w(), aF.aG = !0, this.bw || this.o0 && this.bv || a0.a1.setState(1), this.xB = 0
		}, this.qK = function(aIf) {
			jo.jp.jq.length ? this.jn = jo.jp.jq : this.jn = jo.jr.hy(), fz.eG.aJ7(), dW.clear(), this.cU = 0, aF.aJ8(), a0.a1.setState(0), iY.setState(0), aIg.aI2.show(aIf), 2 === this.xB ? fZ.eG.aJ9() : 1 === this.xB ? fZ.ff(19) : fZ.ff(5, 5)
		}, this.aJA = function() {
			return this.bw ? aC.cD || !aD.qB : this.o0 && (aC.cD || this.bv)
		}, this.aJB = function() {
			return 1 === this.cU && !this.bv
		}
}

function a91() {
	this.aDu = 512, this.aJC = 8, this.lQ = 0, this.aJD = 0, this.eH = new Uint16Array(this.aDu), this.lO = new Uint32Array(this.aDu), this.lP = new Uint16Array(this.aDu), this.eI = new Uint32Array(this.aDu), this.a1u = new Uint16Array(this.aDu),
		this.wM = new Uint16Array(this.aDu), this.lN = new Uint8Array(this.aDu), this.a1w = new Uint8Array(this.aDu), this.wa = new Array(this.aDu), this.lj = new Uint16Array(this.aDu), this.wL = new Uint8Array(b4.dg), this.wN = new Uint16Array(this
			.aJC * b4.dg), this.w = function() {
			this.lQ = 0, this.aJD = 0, this.wL.fill(0), this.wa.fill(null)
		}, this.aE6 = function(player) {
			var eA = mK.mL[0],
				a95 = mK.vu[1],
				v4 = mK.ar[0],
				aJE = this.aJD,
				ay = this.lQ,
				aJF = dH.aJG(v4[0]),
				aCa = this.wL[player],
				aCb = (player << 3) + aCa;
			this.eH[ay] = aCb, this.lO[ay] = aJF, this.lP[ay] = 0, eA < 60 && (aP.cA.aAM(player, 60 - eA), eA = 60), this.eI[ay] = eA, this.a1u[ay] = eF.kS.aE6(ay, dH.a1y(aJF)), this.wM[ay] = aJE, this.lN[ay] = a95, this.a1w[ay] = 0, this.wa[ay] =
				v4, this.lj[ay] = 0, this.aJD = (aJE + 1) % 65536, this.wL[player] = aCa + 1, this.wN[aCb] = ay, this.lQ++, eF.a95.lX(player, v4[v4.length - 1], a95, aJE, eA)
		}, this.cX = function() {
			eF.a95.cX();
			for (var dP = b4.b5, aJ = eF.fr.wX(dP), cP = (! function(cP) {
					for (var aJL, lO = cP.lO, eI = cP.eI, a1w = cP.a1w, lP = cP.lP, a1u = cP.a1u, wa = cP.wa, lj = cP.lj, cP = cP.lQ, zQ = ev.f0 << 4, aH = cP - 1; 0 <= aH; aH--) {
						var aJM = lO[aH],
							v4 = wa[aH],
							aJN = lj[aH],
							aJF = dH.aJG(v4[aJN]),
							aJO = dH.aJG(v4[aJN + 1]),
							aJP = aJF % zQ,
							aJF = ~~((aJF + .5) / zQ),
							aJR = aJO % zQ,
							aJS = ~~((aJO + .5) / zQ),
							aJT = aJR - aJP,
							aJU = aJS - aJF,
							z = Math.max(~~Math.sqrt(aJT * aJT + aJU * aJU + .5), 1),
							aJV = eI[aH],
							aJV = (aJV = a1w[aH] ? 4e4 : 25e4 + Math.min(20 * aJV, 3e5) + Math.min(aJV >> 3, 5e4), lP[aH] + Math.max(~~((aJV + .5) / z), 1));
						65535 <= aJV ? aJN + 2 < v4.length ? (lj[aH] = aJN + 1, lO[aH] = aJL = function(aH, aJW, aJP, aJQ, aJN, z, v4, zQ) {
							aJW = Math.min(aJW - 65535, 65535);
							var v4 = dH.aJG(v4[aJN + 2]),
								aJN = v4 % zQ - aJP,
								v4 = ~~((v4 + .5) / zQ) - aJQ,
								aJZ = Math.max(~~Math.sqrt(aJN * aJN + v4 * v4 + .5), 1);
							return aJW = Math.min(Math.floor((z * aJW + .5) / aJZ), 65534), eF.eG.lP[aH] = aJW, aJP + aA.aB(aJW * aJN, 65535) + zQ * (aJQ + aA.aB(aJW * v4, 65535))
						}(aH, aJV, aJR, aJS, aJN, z, v4, zQ)) : (lO[aH] = aJL = aJO, lP[aH] = 65535) : (lP[aH] = aJV, lO[aH] = aJL = aJP + aA.aB(aJV * aJT, 65535) + zQ * (aJF + aA.aB(aJV * aJU, 65535))), a1u[aH] = eF.kS.aJY(a1u[aH], aJM,
							aJL)
					}
				}(this), ! function(cP) {
					if (aF.bP() % 2 == 1) {
						var aH, hC, at, dL, cl, aJa, a4J, aJb, fB, bS, bT, aJF, aJc, a6v, aJe, cw, ay = cP.lQ,
							lO = cP.lO,
							eH = cP.eH,
							eI = cP.eI,
							a1w = cP.a1w,
							kS = eF.kS.kS,
							aJg = kS.length,
							aJh = eF.kS.aJh,
							zQ = ev.f0 << 4,
							aJi = b4.e2,
							aDI = e4.e7,
							hS = (ay - 1) * (aA.aB(aF.bP(), 2) % 2);
						for (aH = 0; aH < ay; aH++)
							for (hC = Math.abs(aH - hS), aJF = lO[hC], at = dH.a1y(aJF), fB = eH[hC] >> 3, bS = aJF % zQ, bT = ~~((aJF + .5) / zQ), aJe = eI[hC], dL = 0; dL < 9; dL++)
								if (!((aJa = at + aJh[dL]) < 0 || aJg <= aJa))
									for (aJb = kS[aJa], a4J = aJb.length, cl = 0; cl < a4J; cl++) aJc = aJb[cl], cw = eH[aJc] >> 3, fB == cw || aJi && aDI[fB] === aDI[cw] && aDI[fB] || (cw = lO[aJc], (a6v = bS - cw % zQ) * a6v + (a6v = bT - ~
										~((cw + .5) / zQ)) * a6v < 14400 && (cw = eI[aJc], a6v = cw <= aJe ? Math.max(1, aA.aB(cw + aA.aB(aJe - cw, 10), 10)) : Math.max(1, aA.aB(aJe, 10)), eI[aJc] = Math.max(cw - a6v, 0), a1w[aJc] =
										4))
					}
				}(this), ! function(cP) {
					if (aF.bP() % 5 == 3)
						for (var eI = cP.eI, ay = cP.lQ, aH = 0; aH < ay; aH++) {
							var eA = eI[aH];
							eI[aH] = Math.max(eA - Math.max(1, eA >> 7), 0)
						}
				}(this), this), eI = cP.eI, a1w = cP.a1w, aH = cP.lQ - 1; 0 <= aH; aH--) a1w[aH] = a1w[aH] >> 1, 0 === eI[aH] && (eF.lT.lU(aH), eF.lV.lW(aH));
			aM.lw(dP, aJ - eF.fr.wX(dP), 15)
		}
}

function aCU() {
	this.a4N = function(eM, player) {
		d8.eJ(b4.b5, player, eM), fz.eK.oJ(eM, player)
	}, this.dC = function(player) {
		d8.eg(player, 0), fz.eK.oM(player)
	}, this.aFu = function(aFh, player) {
		d8.ei(aFh, player), fz.eK.oN(aFh, player)
	}, this.a2f = function() {
		b4.o0 || b4.bw || fz.a9S.a2f()
	}
}

function aH7() {
	var aJj, aJk = [],
		aJl = -1,
		aJm = 0,
		aJn = 0;

	function aJs() {
		aJm = aF.bL, (3 === this.aJt ? aJr : (aJl = (aJk.length + aJl + 2 * this.aJt - 1) % aJk.length, aJq))()
	}

	function aJq() {
		0 !== aJk.length && (aJn = 0, aJj && aJj.t0(), (aJj = new aJu(aJs)).nf(aJl, aJk.length), aJj.show(aJk[aJl]), fd.message.resize())
	}

	function aJr() {
		aJn = 1, aJj && aJj.t0(), (aJj = new aJv(aJq)).nf(aJk.length), aJj.show(), fd.message.resize()
	}
	this.a8u = function(a0O) {
		var dU;
		2 === a0O.id && 3 === a0O.a0Q ? fd.fr.a0f(a0O.fi) : (dU = fd.fr.a0R(a0O, fd.fr.a0N(a0O)), (5 !== a0O.id && 6 !== a0O.id || (fZ.j5(29).sz().aJo(dU), 5 === a0O.id)) && (dU = aF.bL < aJm + 2e4, aJl !== aJk.length - 1 && dU || (aJl = aJk
			.length), aJk.push(a0O), gH.gJ.data[14].value || 7 === a0O.id || aGV.play(), aJj) && (aJn && (gH.gJ.data[13].value || dU) ? aJj.nf(aJk.length) : aJq()))
	}, this.show = function() {
		aJr()
	}, this.aE = function() {
		aJl = aJk.length - 1, aJj && aJj.t0(), aJj = null
	}, this.resize = function() {
		aJj && aJj.resize()
	}, this.a0h = function() {
		return aJk
	}
}

function aJw() {
	var aHO = 0,
		aJx = 0;
	this.qw = function(aY, aZ) {
		aHO = aY, aJx = aZ
	}, this.r5 = function(code) {
		var aE7, aE8, dG;
		b4.bw || aC.cD || (aP.cA.a0y(0) || aP.cA.a0y(1)) && aP.cA.la(b4.b5) && (c7.a5(aHO, aJx) ? c7.bu = !1 : p8.a5(aHO, aJx) || (aE7 = dH.aFy(aHO), aE8 = dH.aFz(aJx), dG = dH.wl(aE7, aE8), dH.aG0(aE7, aE8) && (0 === code ? function(dG) {
			var aK1, av, lr;
			b4.bv ? -1 !== (aK1 = aG3.aG4(dG)) && dB.a4M.vq(dG) : (av = dH.ls(dG), dw.eB(av) ? (aK1 = aG7.jx.aG8(av)) && (lr = dH.ls(aK1), lr = dw.dy(lr) ? b4.dg : dw.dz(lr), dB.a4M.w4(c7.cC(), aK1, lr)) : (aK1 = aG3.aGA(dG)) <
				0 || (av = dH.ls(aK1), dw.dy(av) ? lb.aGB(b4.b5) ? dB.a4M.vs(c7.cC(), b4.dg) : m0.a7J(b4.b5) && aFx.a7O(b4.dg, c7.cC()) : (lr = dw.dz(av), lb.lc(lr, b4.b5) && (lb.aGF(b4.b5, lr) ? dB.a4M.vs(c7.cC(), lr) : m0
					.a7J(b4.b5) && aFx.a7O(lr, c7.cC())))))
		}(dG) : 1 === code ? function(dG) {
			eF.a9B.aG6(b4.b5, dG) && dB.a4M.nL(c7.cC(), mK.vu[7])
		}(dG) : 2 === code && function(dG) {
			eF.vx.aFv(b4.b5, dG) && dB.a4M.nO(c7.cC())
		}(dG))))
	}, this.r6 = function() {
		if (!b4.bw && !aC.cD && aP.cA.a0y(1)) {
			var dP = b4.b5;
			if (aP.cA.la(dP)) {
				var ay = m0.a7J(dP);
				if (ay < 1) ! function() {
					var dP = b4.b5;
					if (lb.aGB(dP)) dB.a4M.vs(c7.cC(), b4.dg);
					else
						for (var yk = dw.yk, a5J = b2.a5J, ay = a5J[dP].length, zG = Math.floor(Math.random() * ay), aH = 0; aH < ay; aH++)
							for (var lY = 3; 0 <= lY; lY--) {
								var hC = a5J[dP][(aH + zG) % ay] + yk[lY];
								if (dw.lt(hC)) {
									hC = dw.dz(hC);
									if (hC !== dP && (!b4.e2 || lb.lc(dP, hC))) return dB.a4M.vs(c7.cC(), hC)
								}
							}
				}();
				else {
					for (var aK3 = 0, eA = m0.a7g(dP, 0), aH = 1; aH < ay; aH++) {
						var aK4 = m0.a7g(dP, aH);
						aK4 < eA && (eA = aK4, aK3 = aH)
					}
					dB.a4M.vs(c7.cC(), m0.a7f(dP, aK3))
				}
			}
		}
	}, this.r7 = function() {
		if (!b4.bw && !aC.cD && aP.cA.la(b4.b5) && aP.cA.a0y(1)) return d3.r ? d3.aK5(b4.b5) ? void dB.a4M.w2(1) : void 0 : void(d3.aK6(b4.b5) && dB.a4M.r7())
	}
}

function aK7() {
	var aK8, aK9, aKA;

	function aKG(aH) {
		return aP.color.a4P(aK9[aH][0], aK9[aH][1], aK9[aH][2])
	}

	function aKL(dF, dL) {
		return aP.color.aKT(aK9[dF], aK9[dL]), aKG(dL)
	}

	function aKE() {
		aK8 && (aK8.remove(), aK8 = null)
	}
	this.show = function(og, colors, id) {
		0 <= (aKA = id) && fz.eG.rh(0) && fz.hu.aEK(0, id), og = (og = (og = (og = (og = (og = (og = (og = (og = (og = (og = (og = og.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aK9 = colors, (aK8 = document.createElement("div")).style.position = "fixed", aK8.style.top = "0", aK8.style.left = "0", aK8.style.width = "100%", aK8.style.height = "100%", aK8.style.backgroundColor = aP.color.a4R(aK9[0][0], aK9[0][
				1], aK9[0][2], .6), aK8.style.zIndex = "6", aK8.onclick = function(bF) {
				bF.target === aK8 && aKE()
			},
			function(og) {
				var rD, aKF = document.createElement("div");
				aKF.style.position = "absolute", aKF.style.display = "flex", aKF.style.flexDirection = "column", aKF.style.top = "50%", aKF.style.left = "50%", aKF.style.backgroundColor = aKG(2), rD = a0.a1.a2() ? aP.aS.hY(y.min) : aP.aS.hR(.4);
				rD = Math.max(rD, 200), aKF.style.width = aP.aS.hL(rD), aKF.style.height = aP.aS.hL(rD), aKF.style.transform = "translate(-50%, -50%)",
					function(aKF, rD) {
						var aKK = document.createElement("div");
						aKK.style.flex = "0 0 10%", aKK.style.overflow = "hidden", aKK.style.backgroundColor = aKG(1), aKK.style.color = aKL(1, 7), aKK.style.font = aP.aS.aT(1, .05 * rD), aKK.style.display = "flex", aKK.style.alignItems =
							"center", aKK.style.justifyContent = "center", aKK.innerHTML = L(306), aKF.appendChild(aKK)
					}(aKF, rD),
					function(aKF, og, rD) {
						var aKM = document.createElement("div");
						aKM.style.flex = "0 0 70%", aKM.style.overflowY = "auto", aKM.style.overflowX = "hidden", aKM.style.whiteSpace = "pre-wrap", aKM.style.wordWrap = "break-word", aKM.style.padding = aP.aS.hL(.02 * rD), aKM.style
							.backgroundColor = aKG(2), aKM.style.color = aKL(2, 8), aKM.style.font = aP.aS.aT(0, .07 * rD), aKM.innerHTML = og, aKM.innerHTML = "<style>a { color: inherit; }</style>" + aKM.innerHTML, aKF.appendChild(aKM)
					}(aKF, og, rD),
					function(aKF, rD) {
						var j6 = document.createElement("div"),
							aKN = (j6.style.display = "flex", j6.style.flexDirection = "row", j6.style.justifyContent = "space-between", j6.style.alignItems = "stretch", j6.style.backgroundColor = aKG(3), j6.style.flex = "1", j6.style.padding =
								aP.aS.hL(.01 * rD), j6.style.gap = aP.aS.hL(.01 * rD), document.createElement("div")),
							aKO = (aKN.style.flex = "0 0 60%", aKN.style.height = "100%", new fR(L(152, 0, 0, 1), function() {
								aKE()
							}, aKG(4), !1)),
							aKO = (aKO.button.style.width = "100%", aKO.button.style.height = "100%", aKO.button.style.color = aKL(4, 9), aKO.button.style.font = aP.aS.aT(1, .05 * rD), aKN.appendChild(aKO.button), document.createElement("div")),
							aKQ = (aKO.style.flex = "0 0 15%", aKO.style.height = "100%", aKO.style.backgroundColor = aKG(5), document.createElement("div")),
							aKR = (aKQ.style.flex = "1", aKQ.style.height = "100%", new fR(L(307), function(bF) {
								return aP.aS.hf(bF), aKA < 0 || fz.eG.rh(0) && (fz.hu.aEK(1, aKA), aKA = -1), !0
							}, aKG(6), !1));
						aKR.button.style.width = "100%", aKR.button.style.height = "100%", aKR.button.style.color = aKL(6, 10), aKR.button.style.font = aP.aS.aT(1, .035 * rD), aKQ.appendChild(aKR.button), j6.appendChild(aKN), j6.appendChild(aKO),
							j6.appendChild(aKQ), aKF.appendChild(j6)
					}(aKF, rD), aK8.appendChild(aKF)
			}(og), document.body.appendChild(aK8)
	}
}

function a2v() {
	this.a2e = function() {
		for (var dP, ay = fG.fH, ci = fG.fI, a1i = b2.a1i, aKU = this.a1k(), aH = 0; aH < ay; aH++) dP = ci[aH], aP.cA.dj(dP) || (a1i[dP] = aKU);
		var aKV = b2.aKV,
			aAs = b2.aAs,
			aAt = b2.aAt,
			aKW = b2.aKW,
			ay = b4.du;
		for (aH = 0; aH < ay; aH++)(0 === aKW[aH] || aAt[aH] < 1 || 2 * aKV[aH] > 3 * (aAs[aH] + aAt[aH])) && (a1i[aH] = 0);
		var a2Y = 0;
		for (aH = 0; aH < ay; aH++) a2Y += 0 < a1i[aH];
		return a2Y
	}, this.a1k = function() {
		return Math.min(65535, aF.bP())
	}
}

function aKX() {
	var hm, iX, aKY, aKZ = ["wss://", "/s50/", "/s51/", "/s52/"],
		aKa = 0;

	function aKm() {
		fz.eG.aKm(hm, iX)
	}

	function aKn(bF) {
		fz.eL.aKq(hm, new Uint8Array(bF.data))
	}

	function aKp() {}

	function aKo(bF) {
		fz.eG.aKo(hm, bF)
	}
	this.w = function(p, aKb) {
		hm = p, iX = aKb, p = hs.aKk ? "ws://localhost:" + (7130 + hm) + "/" : aKZ[0] + fz.eG.aKl[hm] + aKZ[1 + hs.aIh], (aKY = new WebSocket(p)).binaryType = "arraybuffer", aKY.onopen = aKm, aKY.onmessage = aKn, aKY.onclose = aKo, aKY.onerror =
			aKp
	}, this.aKd = function() {
		return aKY.readyState === aKY.CONNECTING
	}, this.rh = function() {
		return aKY.readyState === aKY.OPEN
	}, this.aKe = function() {
		return aKa
	}, this.aKf = function() {
		aKa = 1
	}, this.aKg = function() {
		return this.aKd() || this.rh()
	}, this.aKh = function(aKb) {
		iX = aKb
	}, this.aKi = function() {
		return iX
	}, this.send = function(i0) {
		this.rh() && aKY.send(i0)
	}, this.close = function(aKj) {
		this.aKg() && (aKY.close(aKj), this.aE())
	}, this.aE = function() {
		aKY.onopen = null, aKY.onmessage = null, aKY.onclose = null, aKY.onerror = null
	}
}

function iL(aKr, aKs, aKt, aKu) {
	var self;
	this.ni = document.createElement("span"), (self = this).ni.textContent = aKr, self.ni.style.color = ab.am, self.ni.style.position = "absolute", self.ni.style.font = "inherit", aKu ? self.ni.style.bottom = "0.06em" : self.ni.style.top = "0.12em",
		aKt ? self.ni.style.left = "0.2em" : self.ni.style.right = "0.2em", self.ni.style.fontSize = "0.6em", self.ni.style.pointerEvents = "none", self.ni.style.whiteSpace = "pre", aKs.style.position = "relative", aKs.style.overflow = "hidden", aKs
		.appendChild(self.ni)
}

function fg(id, i3, aKv) {
	var pk, q0;

	function aL1() {
		q0.xR.innerHTML += "<br>" + L(310)
	}

	function aL3() {
		var dL = 1;
		fZ.ff(4, 1, new uB(L(311), L(312), !1, [new fR("🔄 Reload", function() {
			dL && (setTimeout(function() {
				fZ.ff(1)
			}, 5e3), a0.a1.u5()), dL = 0
		}, ab.d1)]))
	}

	function aL0() {
		hn.gD(90), hn.hr(30, Math.floor(aA.pow(30) * Math.random())), hn.hr(30, Math.floor(aA.pow(30) * Math.random())), hn.hr(30, Math.floor(aA.pow(30) * Math.random())), jQ.w(hn.i0), gH.rg.nf(110, fj.fk.y7(fj.fk.y8(15))), fz.g0.oa()
	}
	this.aKw = !0, this.aKx = id, this.show = function() {
		pk.show(), this.resize(), 15 === id ? (fz.eG.aKz(id) ? aL0 : aL1)() : 16 === id ? fz.eG.aKz(id) ? fz.hu.aEJ(2) : aL1() : 17 === id ? fz.eG.aKz(id) ? fz.hu.aEJ(3) : aL1() : 18 === id ? (fz.eG.close(0, 3253), fz.eG.vd(0, id), aL1()) :
			21 === id ? fz.eG.aKz(id) ? fz.a9U.j8(i3.j9, i3.jA, i3.jB) : aL1() : 22 === id ? fz.eG.aKz(id) ? fz.a9U.jC(i3.j9, i3.jD, i3.jE) : aL1() : 23 === id ? fz.eG.aKz(id) ? fz.a9U.jH(i3.jI, i3.jJ) : aL1() : 24 === id ? fz.eG.aKz(id) ? fz.a9U
			.jN(i3.jI, i3.jA, i3.jB) : aL1() : 25 === id ? fz.eG.aKz(id) ? fz.g0.ok(i3) : aL1() : 28 === id ? fz.eG.aKz(id) ? fz.a9U.jF(i3.j9, i3.jD, i3.jE) : aL1() : 29 === id ? fz.eG.aKz(id) ? fz.g0.ob(i3) : aL1() : 30 === id && (fz.eG.aKz(
				id) ? oi.aL2() || aL3() : aL1())
	}, this.aL4 = function() {
		15 === id ? aL0() : 16 === id ? fz.hu.aEJ(2) : 17 === id ? fz.hu.aEJ(3) : 18 === id ? fZ.ff(8, this.iX, new fg(16)) : 21 === id ? fz.a9U.j8(i3.j9, i3.jA, i3.jB) : 22 === id ? fz.a9U.jC(i3.j9, i3.jD, i3.jE) : 23 === id ? fz.a9U.jH(i3.jI,
			i3.jJ) : 24 === id ? fz.a9U.jN(i3.jI, i3.jA, i3.jB) : 25 === id ? fz.g0.ok(i3) : 28 === id ? fz.a9U.jF(i3.j9, i3.jD, i3.jE) : 29 === id ? fz.g0.ob(i3) : 30 === id ? oi.aL2() || aL3() : 1e3 === id && (this.aKx = id = 25, fz.g0.ok(
			i3))
	}, this.jV = function(code, f9, data) {
		!f9 && code !== id || (15 === code || 16 === code ? fZ.ff(7, this.iX) : 17 === code ? (fz.eG.close(0, 3252), gH.eG.aL5(0), gH.gJ.data[117].go && 0 < gH.gJ.data[117].go.length ? (f9 = gH.eG.aL6(0), gH.rg.nf(105, f9.fi), gH.rg.nf(106, f9
			.password), fZ.ff(8, this.iX, new fg(16))) : (gH.rg.nf(105, ""), fZ.eG.aKy())) : 21 === code ? fZ.ff(10, this.iX, new zU(data)) : 23 === code ? fZ.ff(13, this.iX, new aL7({
			data: data,
			jI: i3.jI
		})) : 25 === code ? (fZ.eG.im.fi = i3.fi, gH.aL8.aV(i3.fi), fZ.ff(15, this.iX)) : 30 === code && (data ? fZ.ff(1) : aL3()))
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), q0.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(L(308), [new fR("⬅️ " + L(71), function() {
		aKv ? fZ.ff(29) : fZ.eG.aKy()
	})]), q0 = new q2(pk.gX, L(309))
}

function aL9() {
	var aLA = new Uint16Array(b4.dg),
		aLB = 0;

	function aLG(eL, aLE) {
		var cl = aF.bP();
		return 3213 <= cl ? 4 + aA.aB(100 * aLE, mD.a5F(eL)) : (eL = 1 + aA.aB(b4.a5K, 300), cl < 357 ? 2 + aA.aB(100 * aLE, eL) : cl < 714 ? 2 + aA.aB(100 * aLE, 4 * eL) : cl < 1071 ? 2 + aA.aB(100 * aLE, 10 * eL) : cl < 2142 ? 2 + aA.aB(100 * aLE,
			30 * eL) : 2 + aA.aB(100 * aLE, 100 * eL))
	}

	function aLF(eL) {
		return b4.o0 || 7 <= b4.f7 || 4284 <= aF.bP() || aP.cA.dj(eL)
	}
	this.w = function() {
		aLA.fill(0), aLB = 15
	}, this.aFv = function(mB) {
		var player = b4.b5;
		return !!aP.cA.aLC(player, mB) && !(!aP.cA.mC(player, aP.cA.cB(player, c7.cC()), mB) || (player = mB, mB = mK.mL[0], !aLF(player) && aLA[player] + aLG(player, mB) > aLB))
	}, this.dc = function(eL, aLE) {
		if (!aLF(eL)) {
			aLE = aLG(eL, aLE);
			if (aLA[eL] + aLE > aLB) return !1;
			aLA[eL] += aLE
		}
		return !0
	}, this.cX = function() {
		aF.bP() % 100 == 99 && (aF.bP() < 1071 ? aLB += 4 : aF.bP() < 2142 ? aLB += 6 : aF.bP() < 3213 ? aLB += 8 : aLB += 10)
	}
}

function aLH() {
	var aLI;
	this.w = function() {
		aLI = !1
	}, this.cX = function() {
		var dP;
		if (function() {
				if (!aLI) {
					if (aF.bP() % 30 != 9) return;
					if (!aP.cA.a31(90)) return;
					aLI = !0
				}
				return 1
			}() && (! function() {
				var dU = d8.eo(956);
				if (dU) {
					if (aP.cA.pg(dU.player)) return 1;
					d8.el(956, 0)
				}
				return
			}() && (-1 === (dP = (b4.e2 ? function() {
				var id = pC.a35(),
					ay = fG.fH;
				if (e4.e6[id])
					for (var ci = fG.fI, e7 = e4.e7, aH = 0; aH < ay; aH++) {
						var dP = ci[aH];
						if (e7[dP] !== id) return dP
					} else if (1 < ay) return pd[ay - 1];
				return -1
			} : function() {
				for (var aLQ = fG.fH, aLR = fG.fI, aLS = a5L, aH = 0; aH < aLQ; aH++) {
					var dP = aLR[aH];
					if (0 !== aLS[dP]) return dP
				}
				return -1
			})()) ? ! function() {
				var dU = d8.eo(957);
				if (dU && dU.cz) {
					if (dw.dy(dU.cz.dG << 2)) return 1;
					d8.el(957, 0)
				}
				return
			}() : (d8.dO(0, L(313, [b2.de[dP]]), 956, dP, ab.am, ab.ac, -1, !0), 0)))) {
			var ay = mF.yi.yj;
			if (0 !== ay)
				for (var gJ = mF.yi.gJ, aH = 0; aH < ay; aH++) {
					var dG = gJ[aH];
					if (dw.dy(dG << 2)) return void d8.dO(0, L(314, [dH.dI(dG), dH.dJ(dG)]), 957, 0, ab.am, ab.ac, -1, !0, void 0, {
						dF: 1,
						dG: dG
					})
				}
		}
	}
}

function aLT() {
	this.aLU = null, this.aG = !1, this.bL = 0, this.bM = 56;
	var aLV = 0;

	function aLW() {
		aF.bL = aLV = performance.now(), aF.aLU.cX(), window.requestAnimationFrame(aLW)
	}
	this.w = function() {
		this.aJ8(), window.requestAnimationFrame(aLW), this.bL = performance.now()
	}, this.aIx = function() {
		b4.bw ? (this.aLU = new aLX, this.aLU.w()) : b4.o0 ? this.aLU = new aLY : (this.aLU = new kx, this.aLU.w())
	}, this.aJ8 = function() {
		this.aLU = new aLZ, this.aG = !0
	}, this.cX = function() {
		this.aLU.ky++
	}, this.bP = function() {
		return this.aLU.ky
	}, this.aLa = function() {
		var aJ = performance.now();
		aJ < aLV + 1e3 || (this.bL = aJ, this.aLU.cX())
	}
}

function aLY() {
	var p = 0,
		bL = aF.bL;
	this.ky = 0, this.cX = function() {
		y.cX(), b4.bv ? lB() : 0 === p ? aF.bL >= bL && (bL += aF.bM * Math.floor(1 + (aF.bL - bL) / aF.bM), 2 === b4.cU || aC.cD ? lC() : (lJ(), l9.lA()), p++) : ((aC.cD ? lB : (aF.aG = !0, lH))(), p = 0), lF(), aF.aG && (aF.aG = !1, lG())
	}
}

function a9E() {
	var aGN = 0,
		aLb = null;
	this.w = function() {
		null === aLb && (aLb = new Uint16Array(2 * eF.eG.aDu)), aGN = 0
	}, this.dc = function(aLc, lT) {
		var aLd = aLb;
		aLd[aGN++] = aLc, aLd[aGN++] = lT
	}, this.aE2 = function(player, aLe) {
		for (var aLd = aLb, ay = aGN, aH = 0; aH < ay; aH += 2)
			if (aLd[aH] === aLe && eF.fr.wW(aLd[aH + 1]) && player === eF.eG.eH[mK.vu[2]] >> 3) return !0;
		return !1
	}, this.lU = function(aLf) {
		var a95 = eF.eG.lN[aLf];
		if (!(a95 < 64)) {
			for (var aLe = eF.eG.wM[aLf], aLd = aLb, ay = aGN, aH = ay - 2; 0 <= aH; aH -= 2)
				if (aLd[aH] === aLe) {
					{
						aLj = void 0;
						var aLj = aLd[aH + 1];
						eF.fr.wW(aLj) && eF.lT.aLp(mK.vu[2])
					}
					aLd[aH] = aLd[ay - 2], aLd[aH + 1] = aLd[ay - 1], ay -= 2
				} aGN = ay
		}
	}, this.li = function(aLh, aLi) {
		for (var aLj = eF.eG.wM[aLh], aLe = -1, aLd = aLb, ay = aGN, aH = 1; aH < ay; aH += 2)
			if (aLd[aH] === aLj) {
				aLe = aLd[aH - 1];
				break
			} if (-1 === aLe) return !1;
		if (!eF.fr.wW(aLe)) return !1;
		var aLf = mK.vu[2],
			v4 = eF.eG.wa[aLf];
		if (aLi === v4[v4.length - 1]) eF.eG.wa[aLh] = eF.uM.v6(eF.eG.wa[aLh], eF.uM.uU(v4));
		else {
			var aLk = eF.fr.ww(v4, aLi);
			if (-1 === aLk) return !1;
			var aLl = eF.eG.lj[aLf];
			aLk === aLl ? (aLf = dH.lS(eF.eG.lO[aLf]), eF.eG.wa[aLh] = eF.uM.v8(eF.eG.wa[aLh], v4, aLk, aLi, dH.aLn(v4[aLk], aLi) > dH.aLn(v4[aLk], aLf))) : eF.eG.wa[aLh] = eF.uM.v8(eF.eG.wa[aLh], v4, aLk, aLi, aLl < aLk)
		}
		return !0
	}, this.aLp = function(wZ) {
		var v4, at = eF.eG,
			a95 = at.lN[wZ];
		return a95 % 64 != 5 && (v4 = at.wa[wZ], at.lP[wZ] = 65535 - at.lP[wZ], at.lj[wZ] = v4.length - at.lj[wZ] - 2, at.wa[wZ] = eF.uM.uU(v4), at.lN[wZ] = a95 - a95 % 64 + 5, !0)
	}
}

function gs(aLq, aLr, aLs, aLt) {
	var jh = document.createElement("textarea"),
		aLu = (this.bF = jh, !0);

	function aLv() {
		jh.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aLr && aP.aS.hK(jh, 5)
		}, this.gt = function(og) {
			jh.value = og
		}, this.gf = function() {
			return jh.value
		}, this.ji = function() {
			jh.select()
		}, this.clear = function() {
			jh.value = ""
		}, this.jj = function() {
			aLu && navigator.clipboard ? (jh.select(), navigator.clipboard.writeText(jh.value).catch(function() {
				aLu = !1, aLv()
			})) : aLv()
		}, jh.setAttribute("id", "textArea" + fZ.eG.aH1++), jh.setAttribute("autocomplete", "off"), aLq && jh.setAttribute("placeholder", aLq), jh.style.top = "0", jh.style.left = "0", jh.style.width = "100%", jh.style.height = "100%", jh.style
		.userSelect = "none", jh.style.outline = "none", jh.style.resize = "none", jh.style.border = "none", jh.style.color = ab.am, jh.style.backgroundColor = ab.a4Q, aLt ? (jh.style.fontSize = "1em", jh.rows = 6, jh.style.padding = "0.25em") : (jh
			.style.padding = "0.45em", jh.style.fontSize = "1.2em"), aLs && jh.addEventListener("input", function(bF) {
			aLs(bF)
		}), jh.addEventListener("focus", function() {
			y.os++
		}), jh.addEventListener("blur", function() {
			y.os--
		})
}

function a9O() {
	var aLx, aLy;
	this.aLw = 5, this.aKl = null;

	function aKg(aH) {
		return aLy[aH].aM1 && aLx[aH].aKg()
	}

	function aM3(hm) {
		aLy[hm].bL = aF.bL, aLy[hm].ny = !1
	}
	this.o6 = 0, this.hz = 0, this.w = function() {
		this.aKl = new Array(this.aLw);
		this.aKl[0] = "territorial.io";
		var ke = kI.kf(0);
		kI.kg(0);
		for (var aH = 1; aH < this.aLw; aH++) this.aKl[aH] = aM0.kG() + ".territorial.io";
		for (kI.kg(ke), aLx = new Array(this.aLw), aLy = new Array(this.aLw), aH = this.aLw - 1; 0 <= aH; aH--) aLy[aH] = {
			aM1: !1,
			bL: 0,
			ny: !1
		};
		this.vd(0, 0)
	}, this.aM2 = function(aH) {
		return aLx[aH]
	}, this.cX = function() {
		for (var aH = this.aLw - 1; 0 <= aH; aH--) this.rh(aH) && aF.bL > aLy[aH].bL + 15e3 && (fz.eK.nx(aH, aLy[aH].ny), aM3(aH));
		!this.rh(0) && aF.bL > aLy[0].bL + 8e3 && (aLy[0].bL = aF.bL, this.vd(0, 0))
	}, this.aKz = function(id) {
		return this.vd(0, id) && this.aKe(0)
	}, this.vd = function(hm, iX) {
		if (aLy[hm].aM1) {
			if (aLx[hm].aKg()) return aLx[hm].aKh(iX), aLx[hm].rh();
			aLx[hm].aE()
		}
		return this.aM4(hm, iX), !1
	}, this.aM4 = function(hm, iX) {
		aLy[hm].aM1 = !0, aM3(hm), aLx[hm] = new aKX, aLx[hm].w(hm, iX)
	}, this.aKh = function(hm, iX) {
		aKg(hm) && aLx[hm].aKh(iX)
	}, this.aKm = function(hm, iX) {
		fz.hu.aED(hm)
	}, this.aKe = function(aH) {
		return this.rh(aH) && aLx[aH].aKe()
	}, this.aKf = function(aH) {
		aLx[aH].aKf()
	}, this.rh = function(aH) {
		return aLy[aH].aM1 && aLx[aH].rh()
	}, this.send = function(hm, i0) {
		0 !== hm && aM3(hm), aLx[hm].send(i0)
	}, this.qm = function(hm) {
		8 === iY.iZ() && (aLy[hm].ny = !0, fz.a9P.aM5 = !0)
	}, this.close = function(hm, aKj) {
		aKg(hm) && aLx[hm].close(aKj)
	}, this.jS = function(hm, aKj) {
		aM6.a2S(aKj), aKg(hm) && aLx[hm].close(aKj)
	}, this.t1 = function(aKj) {
		for (var aH = this.aLw - 1; 0 <= aH; aH--) this.close(aH, aKj)
	}, this.aM7 = function(hm, aKj) {
		for (var aH = this.aLw - 1; 0 <= aH; aH--) aH !== hm && this.close(aH, aKj)
	}, this.aJ7 = function() {
		0 === this.o6 && (b4.o0 || b4.bw) || this.close(this.o6, 3246)
	}, this.aKo = function(hm, bF) {
		aLx[hm].aE(), aM6.a2L(hm, bF.code)
	}
}

function aM8() {
	var aBR, aBS, aM9 = document.createElement("div"),
		iJ = 0,
		aMA = 0;
	this.show = function(aY, aZ, ct, aMB, aMC) {
		if (iJ) {
			if (!aMB) return;
			this.aE()
		}
		aY === aZ && -1 === aY ? (aY = aBR, aZ = aBS) : (aBR = aY, aBS = aZ), aMC || (aMA = aMB), iJ = 1;
		aMC = y.b / y.hT, aM9.style.whiteSpace = "pre", aM9.textContent = ct, aP.aS.hK(aM9, 5), aM9.style.font = aP.aS.aT(0, aP.aS.hR(.015)), aM9.style.padding = "0.3em 0.6em", aM9.style.left = aY + "px", aM9.style.top = "0px", document.body
			.appendChild(aM9), aMB = aY + aM9.offsetWidth - aMC;
		0 < aMB && (aM9.style.left = (ct = aY - aMB) + "px", ct < 5) && (aM9.style.whiteSpace = "pre-wrap"), aM9.style.top = aZ - aM9.offsetHeight + aMA * a3.hM + "px"
	}, this.aE = function(aMF) {
		if (iJ) {
			if (aMF && aMA) return 0;
			iJ = 0, fZ.removeChild(document.body, aM9)
		}
		return 1
	}, aM9.style.position = "absolute", aM9.style.backgroundColor = ab.c9, aM9.style.color = ab.am, aM9.style.pointerEvents = "none", aM9.style.zIndex = "5", aM9.style.maxWidth = "100%"
}

function gU(title, vH, aMG) {
	var nQ = document.createElement("div"),
		aMH = document.createElement("div"),
		nT = document.createElement("div"),
		aMI = document.createElement("div"),
		aMJ = document.createElement("div");
	this.gX = nT, this.gv = vH, this.show = function() {
			!1 !== aMG ? document.body.appendChild(nQ) : (document.body.appendChild(aMH), document.body.appendChild(aMI))
		}, this.aE = function() {
			!1 !== aMG ? fZ.removeChild(document.body, nQ) : (fZ.removeChild(document.body, aMH), fZ.removeChild(document.body, aMI))
		}, this.aMO = function() {
			var aMP = aP.aS.hR(.1),
				aMQ = aP.aS.hR(.08 + .04 * (y.or < 1), .3);
			return {
				aMP: aMP,
				aMQ: aMQ,
				aMR: y.c / y.hT - aMP - aMQ
			}
		}, this.resize = function(a9o) {
			var ay = vH.length,
				ck = this.aMO(),
				aMP = ck.aMP,
				aMQ = ck.aMQ;
			for (aMH.style.height = aP.aS.hL(aMP), aP.aS.hK(aMH, 2), aMI.style.top = aP.aS.hL(y.c / y.hT - aMQ), aMI.style.height = aP.aS.hL(aMQ), aP.aS.hK(aMI, 8), nT.style.top = aP.aS.hL(aMP), nT.style.height = nT.style.maxHeight = aP.aS.hL(ck
				.aMR), aMH.style.font = aP.aS.aT(0, aP.aS.hR(.02, .15)), aMI.style.font = aP.aS.aT(0, aP.aS.hR(.02, .7)), nT.style.font = aP.aS.aT(0, aP.aS.hR(.02, .35)), aH = 1; aH < ay; aH++) aP.aS.hK(vH[aH].button, 4);
			for (var a9p = 0, aH = 0; aH < ay; aH++) a9p += vH[aH].button.offsetWidth;
			if (a9o && a9p < aMI.offsetWidth)
				for (aH = 0; aH < ay; aH++) vH[aH].button.style.width = (100 * vH[aH].button.offsetWidth / a9p).toFixed(2) + "%";
			else
				for (aH = 0; aH < ay; aH++) vH[aH].button.style.width = "auto";
			aMI.hj && (aMI.scrollLeft = aMI.hj), a9o || this.resize(!0)
		}, this.aW = function() {
			var ck = this.aMO(),
				cl = y.hT;
			aa.fillStyle = ab.c9, aa.fillRect(0, cl * ck.aMP, y.b, cl * ck.aMR)
		}, nQ.style.position = "absolute", nQ.style.top = "0", nQ.style.left = "0", nQ.style.width = "100%", nQ.style.height = "100%", aMH.style.position = "absolute", aMH.style.top = "0", aMH.style.left = "0", aMH.style.width = "100%", aMH.style
		.display = "flex", aMH.style.backgroundColor = ab.c9, aMI.style.position = "absolute", aMI.style.left = "0", aMI.style.width = "100%", aP.aS.hh(aMI), aMJ.style.height = aMJ.style.maxHeight = "100%", nT.style.position = "absolute", nT.style
		.width = "100%", nT.style.backgroundColor = ab.c9,
		function() {
			for (var aH = 0; aH < vH.length; aH++) vH[aH].button.style.height = "100%", vH[aH].button.style.padding = "0.0em 0.9em"
		}();
	for (var aH = 0; aH < vH.length; aH++) aMJ.appendChild(vH[aH].button);
	aMH.appendChild(function() {
		var aMN = document.createElement("h1");
		return aMN.textContent = title, aMN.style.margin = "auto", aMN.style.fontSize = 18 <= title.length && y.c > y.b ? "1.8em" : "2.3em", aMN.style.fontFamily = "Arial Black, Trebuchet MS", aMN
	}()), aMI.appendChild(aMJ), !1 !== aMG && (nQ.appendChild(nT), nQ.appendChild(aMH), nQ.appendChild(aMI))
}

function aMS() {
	var rV, aMT, aMU, rU, aMV, aMW, aMX, aMY, aMZ, aMa, aMb, rs, aMc, aMd = !1,
		aMe = !1;

	function aMf(bm) {
		rs = aF.bL, aMU = rU = aMT = 0, aMV = (aMc = 33) / bm, rV = 1 / (bm / aMc / 4), aMW = (y.b / 2 + zN) / mn, aMX = (y.c / 2 + zO) / mn, aMY = mn
	}

	function aMg(aH) {
		var bS; - 1 !== aH && (aH = dH.lS(eF.eG.lO[aH]), bS = dH.dI(aH) - 15, aH = dH.dJ(aH) - 15, dD.dK(bS, aH, 29 + bS, 29 + aH))
	}

	function aMm(bj) {
		Math.abs(Math.log(aMb / aMY)) < .125 && (aMb = bj * aMY)
	}

	function aMl(bS, bT, bU, bV) {
		aMZ = (bS + bU + 1) / 2, aMa = (bT + bV + 1) / 2;
		bU = y.b / (bU - bS + 1), bS = y.c / (bV - bT + 1);
		aMb = .9 * (bU < bS ? bU : bS)
	}
	this.kd = function() {
		return aMd
	}, this.aJ6 = function() {
		aMf(1), this.dK(0, 0, ev.f0 - 1, ev.f1 - 1), b4.bv || b4.bw || this.dE(b4.b5, 3e3, !0, .3)
	}, this.dM = function(player, dN) {
		aMg(eF.fr.wK(player, dN))
	}, this.dE = function(player, bm, aMh, zoom) {
		b4.qJ || aMd && !aMh && aMe || (0 === b2.b3[player] ? aMg(eF.fr.wP(player)) : (cM.cN = !1, aMe = aMh, aMf(bm), function(player) {
			aMZ = (b2.a3F[player] + b2.a3G[player] + 1) / 2, aMa = (b2.a3H[player] + b2.a3I[player] + 1) / 2
		}(player), function(zoom, player) {
			var wj = b2.a3G[player] - b2.a3F[player] + 1,
				player = b2.a3I[player] - b2.a3H[player] + 1,
				dF = y.b / wj,
				dL = y.c / player,
				dF = (aMb = dF < dL ? dF : dL, 0 !== zoom ? zoom : wj < 20 && player < 20 ? .5 : .9);
			aMb *= dF, aMm(7 / 8)
		}(zoom, player), aMd = !0, r3.aMk()))
	}, this.aEd = function(bm) {
		b4.bw || b4.qJ || (cM.cN = !1, aMe = !1, aMf(bm), aMl(0, 0, ev.f0 - 1, ev.f1 - 1), aMm(7 / 8), aMd = !0, r3.aMk())
	}, this.dK = function(bS, bT, bU, bV) {
		aMd = !1, aMl(bS, bT, bU, bV), mn = aMb, cM.a6l(aMZ, y.b / 2), cM.a6n(aMa, y.c / 2), a6y.ml(), aF.aG = !0
	}, this.pR = function() {
		return !(aMd && aMe || (aMd = !1))
	}, this.cX = function() {
		var aMo, aMp, z, aMs;
		aMd && (aMT < .5 ? rU < aMV && (rU += aMV * rV, aMU = aMT) : 1 - aMU < aMT && (rU = (rU -= aMV * rV) < aMV * rV ? aMV * rV : rU), rs = rs >= aF.bL ? aF.bL - 1 : rs, aMT = 1e3 < (z = aF.bL - rs) || 1 < (aMT += rU * z / aMc) ? 1 : aMT, rs =
			aF.bL, z = mn, aMo = zN, aMp = zO, z = (mn = aMY * Math.pow(aMb / aMY, aMT)) / z, aMs = 1 - (aMY * Math.pow(aMb / aMY, 1 - aMT) - aMY) / (aMb - aMY), cM.a6l(aMW + aMs * (aMZ - aMW), y.b / 2), cM.a6n(aMX + aMs * (aMa - aMX), y.c /
				2), dl.zoom(z, (aMo * z - zN) / (1 - z), (aMp * z - zO) / (1 - z)), a6y.ml(), 1 <= aMT && (aMd = !1, l9.aMt = !0), aF.aG = !0)
	}
}

function aMu() {
	this.jM = function(ct) {
		for (var ay = ct.length, b = hn, aH = 0; aH < ay; aH++) b.hr(16, ct.charCodeAt(aH))
	}
}

function aLZ() {
	this.ky = 0, this.cX = function() {
		p5.cX(), p3.cX(), y.cX(), fz.eG.cX(), o2.vl(), aIg.aI4.cX(), aF.aG && (aF.aG = !1, iY.aW())
	}
}

function aMv() {
	this.ar = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.a0r = function() {
		for (var aMw = [], ar = this.ar, ay = ar.length, aH = 0; aH < ay; aH++) aMw.push(ar[aH]);
		var uz = gH.gJ.data[12].pQ;
		for (aH = 0; aH < ay; aH++)
			if (aMw[aH] === uz) {
				aMw.splice(aH, 1), ay--;
				break
			} aMw.sort(), ay++, aMw.unshift(uz);
		try {
			if ("undefined" == typeof Intl) return aMw;
			for (aH = 0; aH < ay; aH++) {
				var ct = new Intl.DisplayNames([aMw[aH]], {
					type: "language"
				}).of(aMw[aH]);
				ct !== aMw[aH] && (aMw[aH] = aMw[aH] + ": " + ct)
			}
		} catch (bF) {
			console.log("error 3646: " + bF)
		}
		return aMw
	}, this.a0s = function(aMy) {
		for (var ct = gH.gJ.data[12].value, ay = aMy.length, aH = 0; aH < ay; aH++)
			if (ct === aMy[aH].split(":")[0]) return aH;
		return 0
	}, this.oj = function(aMz) {
		if (aMz && !(aMz.length < 2)) {
			aMz = aMz.split("-")[0].toLowerCase();
			for (var ar = this.ar, ay = ar.length, aH = 0; aH < ay; aH++)
				if (aMz === ar[aH]) return aH
		}
		return -1
	}
}

function a9C() {
	function aN7(aY, ay, aZ, aN2, aHH, yl, player) {
		if (!(aZ < 1 || aHH < aZ))
			for (var aH = 0; aH <= ay; aH++) {
				var av = dH.aNG(aY, aZ);
				if (eF.fr.wJ(av) && !aP.g9.has(aN2, dw.eC(av)) && dw.aCF(av, player)) return av >> 2;
				aY += yl
			}
		return -1
	}

	function aNB(aZ, ay, aY, aN2, aN5, yl, player) {
		if (!(aY < 1 || aN5 < aY)) {
			ay = Math.max(ay, 0);
			for (var aH = 0; aH <= ay; aH++) {
				var av = dH.aNG(aY, aZ);
				if (eF.fr.wJ(av) && !aP.g9.has(aN2, dw.eC(av)) && dw.aCF(av, player)) return av >> 2;
				aZ += yl
			}
		}
		return -1
	}

	function aNF(ug, w9, aN0) {
		return -1 !== w9 && (-1 === ug || dH.wF(w9, aN0) < dH.wF(ug, aN0)) ? w9 : ug
	}
	this.aG6 = function(player, aN0) {
		if (eF.vv.vw(player))
			for (var wr = dH.aN1(), aN2 = [];;) {
				var ua = function(aN0, wr, aN2, player) {
					for (var aE7 = dH.dI(aN0), aE8 = dH.dJ(aN0), aN5 = ev.f0 - 2, aHH = ev.f1 - 2, aN6 = -1, z = 0; z < wr; z++) {
						var ku = Math.max(aE7 - z, 1),
							kv = Math.max(aE8 - z, 1),
							kw = Math.min(aE7 + z, aN5),
							ki = Math.min(aE8 + z, aHH),
							ug = aN7(aE7, kw - aE7, aE8 - z, aN2, aHH, 1, player),
							w9 = aN7(aE7 - 1, aE7 - ku - 1, aE8 - z, aN2, aHH, -1, player),
							kw = aN7(aE7, kw - aE7, aE8 + z, aN2, aHH, 1, player),
							ku = aN7(aE7 - 1, aE7 - ku - 1, aE8 + z, aN2, aHH, -1, player),
							aNA = aNB(aE8, ki - aE8 - 1, aE7 - z, aN2, aN5, 1, player),
							aNC = aNB(aE8 - 1, aE8 - kv - 2, aE7 - z, aN2, aN5, -1, player),
							ki = aNB(aE8, ki - aE8 - 1, aE7 + z, aN2, aN5, 1, player),
							kv = aNB(aE8 - 1, aE8 - kv - 2, aE7 + z, aN2, aN5, -1, player);
						if (aN6 = aNF(aN6, ug, aN0), aN6 = aNF(aN6, w9, aN0), aN6 = aNF(aN6, kw, aN0), aN6 = aNF(aN6, ku, aN0), aN6 = aNF(aN6, aNA, aN0), aN6 = aNF(aN6, aNC, aN0), aN6 = aNF(aN6, ki, aN0), 0 <= (aN6 = aNF(aN6, kv, aN0)) && z *
							z >= dH.wF(aN6, aN0)) return aN6
					}
					return -1
				}(aN0, wr, aN2, player);
				if (-1 === ua) break;
				var id = dw.eC(dH.ls(ua));
				if (eF.fr.w6(player, id)) return !! function(player, ua, aN0) {
					for (var lY = dH.aNH(ua, aN0), aH = 0; aH < 4; aH++) {
						var dG = dH.aNI(ua, lY);
						if (dw.aGt(dH.ls(dG), player)) return mK.vu[6] = lY, 1;
						lY = (lY + 1) % 4
					}
					return
				}(player, ua, aN0) && (mK.vu[7] = ua, !0);
				aN2.push(id)
			}
		return !1
	}
}

function aNJ() {
	var canvas, ao, aNK, font, aNL = 0,
		aNM = !1,
		aNN = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aNO = 5;

	function aX() {
		if (aNM) {
			var aH, ay = aNN.length,
				h = Math.floor(.5 * aNK.c),
				c = ay * h,
				aY = Math.floor(Math.floor(aNK.aY) + .3 * aNK.b - .5),
				aZ = Math.floor(Math.floor(aNK.aZ) - c),
				b = Math.floor(.4 * aNK.b + 2.5);
			for (aa.fillStyle = ab.c9, aa.fillRect(aY, aZ, b, c), aa.fillStyle = ab.t7, aa.fillRect(aY, aZ + aNO * h, b, h), aa.fillStyle = ab.am, aa.fillRect(aY, aZ, 2, c), aa.fillRect(aY, aZ, b, 2), aa.fillRect(aY + b - 2, aZ, 2, c), aH = 1; aH <
				ay; aH++) aa.fillRect(aY, aZ + aH * h, b, 2);
			for (aa.fillStyle = ab.am, aP.aS.textAlign(aa, 1), aP.aS.textBaseline(aa, 1), aa.font = aP.aS.aT(0, .6 * h), aY += .5 * b, aH = 0; aH < ay; aH++) aa.fillText(aNc(aH), aY, aZ + (aH + .6) * h)
		}
		aa.drawImage(canvas, Math.floor(aNK.aY), Math.floor(aNK.aZ))
	}

	function aV(cP) {
		var aY, bS, bT, h;
		ao.clearRect(0, 0, Math.floor(aNK.b), Math.floor(aNK.c)), ao.fillStyle = ab.c9, ao.fillRect(0, 0, Math.floor(aNK.b), Math.floor(aNK.c)), b4.qJ && (ao.fillStyle = ab.t7, ao.fillRect(0, 0, Math.floor(.3 * aNK.b), Math.floor(aNK.c))), ao
			.fillStyle = ab.am, ao.fillText("Hide UI", .15 * aNK.b, .5 * aNK.c), ao.fillRect(Math.floor(.3 * aNK.b - .5), 0, 2, Math.floor(aNK.c)), aY = .5 * aNK.b, ao.fillText("Replay Speed", aY, .31 * aNK.c), ao.fillText(aNc(aNO), aY, .69 * aNK.c),
			ao.fillRect(Math.floor(.7 * aNK.b - .5), 0, 2, Math.floor(aNK.c)), cP.qB ? (aY = Math.floor(.02 * aNK.b), cP = Math.floor(.025 * aNK.b), bS = Math.floor(.85 * aNK.b - aY - .5 * cP), bT = Math.floor(.25 * aNK.c), h = Math.floor(aNK.c) -
				2 * bT, ao.fillRect(bS, bT, aY, h), ao.fillRect(bS + aY + cP, bT, aY, h)) : function() {
				var b = Math.floor(.46 * aNK.c),
					c = Math.floor(.23 * aNK.c),
					aY = Math.floor(.85 * aNK.b - .5 * b + b / 12),
					aZ = Math.floor(.5 * aNK.c - c);
				ao.beginPath(), ao.moveTo(aY, aZ), ao.lineTo(aY + b, aZ + c), ao.lineTo(aY, aZ + (c << 1)), ao.fill()
			}(), ao.fillRect(0, 0, Math.floor(aNK.b), 2), ao.fillRect(0, 0, 2, Math.floor(aNK.c)), ao.fillRect(0, Math.floor(aNK.c) - 2, Math.floor(aNK.b), 2), ao.fillRect(Math.floor(aNK.b - 2), 0, 2, Math.floor(aNK.c))
	}

	function aNc(aH) {
		return 5 === aH ? "Normal" : "" + aNN[aH]
	}
	this.qB = !1, this.w = function() {
		b4.bw && (aNO = 5, this.qB = !1, aNM = !1, aNK = new mO([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aNP = function() {
		return aNN[aNO]
	}, this.d7 = function() {
		return aNK.aZ
	}, this.cE = function(cF) {
		return !!b4.bw && aNK.aY + aNK.b > y.b - cF - a3.gap
	}, this.resize = function() {
		b4.bw && (aNK.resize(), aNK.aZ -= (c0.c1() - 1) * a3.gap, font = aP.aS.aT(0, .3 * aNK.c), (canvas = document.createElement("canvas")).width = Math.floor(aNK.b), canvas.height = Math.floor(aNK.c), (ao = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aP.aS.textAlign(ao, 1), aP.aS.textBaseline(ao, 1), aV(this))
	}, this.qA = function(aNQ) {
		0 === b4.cU || fZ.r() || aNQ !== b4.qJ && (b4.qJ = aNQ, pC.resize(), aF.aG = !0, b4.bw) && (aNL = aF.bL + 2e3, aV(this))
	}, this.a5 = function(aY, aZ) {
		if (!b4.bw) return !1;
		if (aY < aNK.aY || aZ < aNK.aZ || aY > aNK.aY + aNK.b) return aNM && function(cP, aY, aZ) {
			var ay = aNN.length,
				h = Math.floor(.5 * aNK.c),
				c = ay * h,
				bS = Math.floor(Math.floor(aNK.aY) + .3 * aNK.b - .5),
				c = Math.floor(Math.floor(aNK.aZ) - c),
				b = Math.floor(.4 * aNK.b + 2.5);
			return aNM = !1, aF.aG = !0, aY < bS || bS + b < aY || aZ < c || (aNO = iA(0, Math.floor((aZ - c) / h), ay - 1), aV(cP)), !0
		}(this, aY, aZ);
		if ((aY -= aNK.aY) < .3 * aNK.b) aNM = !1, this.qA(!b4.qJ);
		else {
			if (aY < .7 * aNK.b) return aNM = !aNM, aF.aG = !0;
			this.qC(!1)
		}
		return !0
	}, this.qC = function(aNS) {
		2 === b4.cU ? (this.qA(!1), fZ.ff(3)) : (aNM = !1, this.qB = !this.qB, this.qB ? (aC.cD && aC.aL(), a0.a1.setState(1)) : aNS || aC.qD(), aF.aG = !0, aV(this))
	}, this.aNT = function() {
		this.qB = !1, aC.qD(), aF.aG = !0, aV(this)
	}, this.qp = function(aY, aZ) {
		return !!b4.qJ && (0 <= aC.a5(aY, aZ) || (b4.bw ? ((aF.bL > aNL || !this.a5(aY, aZ)) && cM.a5(aY, aZ), aF.aG = !0, aNL = aF.bL + 2e3) : cM.a5(aY, aZ)), !0)
	}, this.cX = function() {
		b4.bw && b4.qJ && aF.bL > aNL - 1e3 && aF.bL < aNL && (aF.aG = !0)
	}, this.aNU = function() {
		b4.bw && (this.qB = !1, aF.aG = !0, aV(this))
	}, this.aW = function() {
		if (b4.bw) {
			if (b4.qJ) {
				if (aF.bL > aNL) return;
				if (aNL - 1e3 < aF.bL) return aa.globalAlpha = iA(0, (1e3 - (aF.bL - (aNL - 1e3))) / 1e3, 1), aX(), void(aa.globalAlpha = 1)
			}
			aX()
		}
	}
}

function aCV() {
	this.vq = function(player, dG) {
		aP.cA.a0y(0) && aP.cA.la(player) && dH.aNd(dG) && (jo.jp.mb(0, player, dG), b4.l7.dc(player, dG))
	}, this.vs = function(player, bp, lv) {
		aP.cA.a0y(1) && aP.cA.la(player) && aP.cA.aNe(player, lv) && aP.cA.aDv(player, bp, 12, 0) && aP.cA.aNf(player, lv) && ((lv = m0.m1(player, mK.a2B[0])) || m0.m2(player)) && (b2.aKV[player]++, jo.jp.mb(1, player, bp, mK.a2B[0]), mF.a5Q.aAq(
			player, lv)) && (aP.cA.aE5(player), aM.aNg(player, bp), mF.a5Q.aAu(player))
	}, this.vt = function(player, bp, mB) {
		aP.cA.a0y(1) && aP.cA.la(player) && b4.e2 && aP.cA.aNe(player, mB) && aP.cA.aLC(player, mB) && aP.cA.mC(player, aP.cA.cB(player, bp), mB) && mJ.dc(mB, mK.mL[0]) && (jo.jp.mb(2, player, bp, mB), mD.mE(player, mB))
	}, this.nL = function(player, bp, oB) {
		mK.vu[1] = 7 & oB;
		var dG = oB >> 3;
		aP.cA.a0y(1) && aP.cA.la(player) && dH.aNd(dG) && eF.vv.vw(player) && eF.vv.aNh(dG) && aP.cA.aDv(player, bp, 32, 0) && eF.a97.uI(player, dG, 1) && (aM.aNi(player), jo.jp.mb(3, player, bp, oB), aP.cA.aE5(player), aNj.aNk.nL(player), eF.eG
			.aE6(player))
	}, this.nO = function(player, bp, dN) {
		849 === bp ? this.vz(player, dN) : aP.cA.a0y(1) && aP.cA.la(player) && aP.cA.aDv(player, bp, 32, 0) && eF.vx.aE4(player, dN) && (aM.aNi(player), jo.jp.mb(4, player, bp, dN), aP.cA.aE5(player), aNj.aNk.nO(player), eF.eG.aE6(player))
	}, this.vz = function(player, dN) {
		aP.cA.a0y(1) && aP.cA.la(player) && eF.a9F.cX(player, dN) && jo.jp.mb(4, player, 849, dN)
	}, this.w0 = function(player, lv) {
		513 === lv ? this.r7(player) : aP.cA.a0y(1) && aP.cA.la(player) && (lv = Math.min(lv, b4.dg), m0.m1(player, lv)) && (jo.jp.mb(5, player, lv), m0.a7V(player, lv))
	}, this.w1 = function(player, eM) {
		(aP.cA.a0y(1) || aP.cA.a0y(2)) && aP.cA.la(player) && (eM = aA.cI(eM, 0, 1023), jo.jp.mb(6, player, eM), dl.eh(player, 0, eM))
	}, this.w2 = function(player, oG) {
		d3.aK5(player) && (jo.jp.mb(7, player, oG), d3.aNl(player, oG))
	}, this.w3 = function(player) {
		(aP.cA.a0y(0) || aP.cA.a0y(1)) && aP.cA.la(player) && aC.qN(player) && (jo.jp.mb(8, player), aNm.w3(player))
	}, this.a0w = function(player) {
		jo.jp.mb(9, player), aNm.a0w(player)
	}, this.r7 = function(player) {
		d3.aK6(player) && (jo.jp.mb(5, player, 513), d3.r7(player))
	}, this.w4 = function(player, bp, dG, lv) {
		aP.cA.a0y(1) && aP.cA.la(player) && aP.cA.aNe(player, lv) && aP.cA.aNf(player, lv) && dH.aNd(dG) && aG7.jx.aID(player, dG) && (m0.m1(player, mK.a2B[0]) || m0.m2(player)) && (jo.jp.mb(10, player, (bp << 10) + mK.a2B[0], dG), lv = aP.cA.yo(
			player, bp), b2.m3[player].push(mK.a29[0]), m0.dc(player, lv, mK.a2B[0]), m4.m5(player, !0), aM.aNn(player))
	}
}

function aNo() {
	function aN7(aY, ay, aZ, a10, aHH, yl) {
		if (!(aZ < 1 || aHH < aZ))
			for (var aH = 0; aH <= ay; aH++) {
				var av = dH.aNG(aY, aZ);
				if (a10(av)) return av >> 2;
				aY += yl
			}
		return -1
	}

	function aNB(aZ, ay, aY, a10, aN5, yl) {
		if (!(aY < 1 || aN5 < aY)) {
			ay = Math.max(ay, 0);
			for (var aH = 0; aH <= ay; aH++) {
				var av = dH.aNG(aY, aZ);
				if (a10(av)) return av >> 2;
				aZ += yl
			}
		}
		return -1
	}

	function aNF(ug, w9, aN0) {
		return -1 !== w9 && (-1 === ug || dH.wF(w9, aN0) < dH.wF(ug, aN0)) ? w9 : ug
	}
	this.aG4 = function(aN0) {
		return this.sy(aN0, function(av) {
			return dw.dx(av)
		})
	}, this.aGA = function(aN0) {
		return this.sy(aN0, function(av) {
			return dw.aGt(av, b4.b5)
		})
	}, this.sy = function(aN0, a10) {
		return function(aN0, wr, a10) {
			for (var aE7 = dH.dI(aN0), aE8 = dH.dJ(aN0), aN5 = ev.f0 - 2, aHH = ev.f1 - 2, aN6 = -1, z = 0; z < wr; z++) {
				var ku = Math.max(aE7 - z, 1),
					kv = Math.max(aE8 - z, 1),
					kw = Math.min(aE7 + z, aN5),
					ki = Math.min(aE8 + z, aHH),
					ug = aN7(aE7, kw - aE7, aE8 - z, a10, aHH, 1),
					w9 = aN7(aE7 - 1, aE7 - ku - 1, aE8 - z, a10, aHH, -1),
					kw = aN7(aE7, kw - aE7, aE8 + z, a10, aHH, 1),
					ku = aN7(aE7 - 1, aE7 - ku - 1, aE8 + z, a10, aHH, -1),
					aNA = aNB(aE8, ki - aE8 - 1, aE7 - z, a10, aN5, 1),
					aNC = aNB(aE8 - 1, aE8 - kv - 2, aE7 - z, a10, aN5, -1),
					ki = aNB(aE8, ki - aE8 - 1, aE7 + z, a10, aN5, 1),
					kv = aNB(aE8 - 1, aE8 - kv - 2, aE7 + z, a10, aN5, -1);
				if (aN6 = aNF(aN6, ug, aN0), aN6 = aNF(aN6, w9, aN0), aN6 = aNF(aN6, kw, aN0), aN6 = aNF(aN6, ku, aN0), aN6 = aNF(aN6, aNA, aN0), aN6 = aNF(aN6, aNC, aN0), aN6 = aNF(aN6, ki, aN0), 0 <= (aN6 = aNF(aN6, kv, aN0)) && z * z >= dH
					.wF(aN6, aN0)) return aN6
			}
			return -1
		}(aN0, dH.aN1(), a10)
	}
}

function aNq() {
	this.jT = function(zs) {
		for (var xe = jQ, size = xe.hq(zs), aNr = 7 + 9 * xe.hq(1), ar = [], aH = 0; aH < size; aH++) ar.push(String.fromCharCode(xe.hq(aNr)));
		return ar.join("")
	}
}

function aDk() {
	var aNs = 0,
		aNt = 0,
		aNu = 300,
		aNv = 300,
		aNw = 0;
	this.yj = 0, this.gJ = new Uint32Array(512), this.w = function() {
		aNt = aNs = 0, this.yj = 0, aNw = 0
	}, this.cX = function() {
		if (function() {
				var ay = mF.yi.yj;
				if (0 === ay) return 1;
				var gJ = mF.yi.gJ;
				if (aF.bP() % 35 == 6) {
					for (var aH = ay - 1; 0 <= aH; aH--) dw.dy(gJ[aH] << 2) || (ay--, gJ[aH] = gJ[ay]);
					mF.yi.yj = ay
				}
				return ay < gJ.length
			}())
			if (aNu <= aNs) {
				var aO0 = mF.yi.yj;
				if (aO0) {
					if (aF.bP() % 350 != 1) return;
					if (aNw !== aO0) return void(aNw = aO0);
					if (!aP.cA.dj(pd[0])) return
				} else if (aF.bP() % 12 != 8) return;
				aP.cA.aO1() || mF.yi.w()
			} else {
				var aH, b = ev.f0,
					aO2 = b - 2,
					aO0 = aO2 * (ev.f1 - 2),
					aO3 = aNu,
					gJ = mF.yi.gJ,
					at = mF.yi.yj,
					aO4 = gJ.length,
					hS = Math.min(aNt + aO3 * ((1 + 19 * mF.performance.a2y) * aNv), aO0);
				for (aH = aNt; aH < hS; aH += aO3) {
					var av = 4 * (aH % aO2 + (aA.aB(aH, aO2) + 1) * b + 1);
					if (dw.dy(av) && (gJ[at] = av >> 2, ++at === aO4)) {
						aH += aO3;
						break
					}
				}(aNt = aH) >= aO0 && (aNt = ++aNs), mF.yi.yj = at
			}
	}
}

function ib() {
	var pk, vE, vF, vH;

	function aO5(id) {
		0 !== a0.id || gH.gJ.data[140].value ? 0 === id ? fZ.ff(8, 1, new fg(16)) : fZ.ff(2) : fZ.eG.aOA(fZ.fa, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), pk.show(), this.resize(), this.cX()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), vE.resize()
	}, this.cX = function() {
		8 === iY.iZ() && (2 <= aM.aN ? vF[2].td === ab.tl && vF[2].rf(0) : vF[2].td !== ab.tl && vF[2].rf(ab.tl), !b4.bw && aC.qN(b4.b5) ? vF[1].td === ab.tl && vF[1].rf(0) : vF[1].td !== ab.tl && vF[1].rf(ab.tl), !b4.bw && d3.aK6(b4.b5) ? vF[0]
			.td === ab.tl && vF[0].rf(0) : vF[0].td !== ab.tl && vF[0].rf(ab.tl))
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, vF = [new fR(L(315), function() {
		aO5(0)
	}), new fR(L(170), function() {
		fZ.ff(16)
	}), new fR(L(298), function() {
		fZ.ff(17)
	}), new fR(L(316), function() {
		fZ.eG.aEC()
	}, 0, 0, 1), new fR(L(81), function() {
		fZ.ff(3, 1)
	}), new fR(L(134), function() {
		fZ.ff(18)
	}), new fR(L(317), function() {
		fZ.ff(31)
	}), new fR(L(234), function() {
		aO5(1)
	}), new fR(L(318), function() {
		var ha = ["Patreon", L(328), L(329), "YouTube Tutorial", "Discord", L(330), L(164), L(331), L(167), L(332), "Terms", "Privacy"],
			hb = [uC.a7D, uC.a1a, uC.uD, "https://www.youtube.com/watch?v=6QBmA9N1668", uC.a1b, uC.a75, uC.a7B, uC.a7C, uC.a7A, uC.a79, uC.a76, uC.a78];
		1 === a0.id ? (ha.splice(2, 1), ha.splice(0, 1), hb.splice(2, 1), hb.splice(0, 1)) : 2 === a0.id && (ha.splice(1, 1), ha.splice(0, 1), hb.splice(1, 1), hb.splice(0, 1)), fZ.ff(4, 1, new uB(L(318), aP.aS.hZ(ha, hb), !1, [new fR(
			"⬅️ " + L(71),
			function() {
				fZ.ff(1)
			})]))
	}), new fR(L(319), function() {
		fZ.ff(4, 1, new uB(L(319), hs.gz + "<br><a href='" + uC.a75 + "' target='_blank'>" + uC.a75 + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new fR("⬅️ " + L(71), function() {
				fZ.ff(1)
			})]))
	}), new fR(L(320), function() {
		fZ.ff(4, 1, new uB(L(320), L(333) + "<br>" + L(334), !1, [new fR("⬅️ " + L(71), function() {
			fZ.ff(1)
		}), new fR(L(335), function() {
			a0.a1.tz(), fZ.ff(1)
		})]))
	}), new fR(L(321), function() {
		a0.a1.u2(), fZ.ff(4, 1, new uB(L(336), L(337) + " <a href='" + uC.a78 + "' target='_blank'>" + uC.a78 + "</a>", !1, [new fR("⬅️ " + L(71), function() {
			fZ.ff(1)
		})]))
	})], vH = [new fR("⬅️ " + L(71), function() {
		fZ.eG.aKy()
	})], 8 === iY.iZ() && (vF.unshift(new fR(L(324), function() {
		fZ.ff(30)
	})), vF.unshift(new fR(L(325), function() {
		2 <= aM.aN && (fZ.j3(), pA.aL(), aF.aG = !0)
	}, 0, 1)), vF.unshift(new fR(L(326), function() {
		!b4.bw && aC.qN(b4.b5) && (dB.a4M.w3(), fZ.j3(), aC.cD) && aC.aL()
	}, 0, 1)), vF.unshift(new fR(L(327), function() {
		!b4.bw && d3.aK6(b4.b5) && (aCz.aD0(2), dB.a4M.r7(), fZ.j3(), aC.cD) && aC.aL()
	}, 0, 1))), 1 === a0.id && 5 <= a0.gz && vF.push(new fR(L(322), function() {
		a0.a1.u3()
	})), pk = new gU(L(323), vH), vE = new vI(vF, pk.gX)
}

function aDo() {
	var aOB = new Uint16Array(b4.dg);

	function aOJ(player, aOG) {
		for (var ay = mK.vR[0], ym = mK.ym, aOP = -1, qH = b4.dg, aH = 0; aH < ay; aH++) {
			var wT, dP = ym[aH];
			lb.lc(player, dP) && (wT = dH.wF(aOG, dH.aOQ(dP)), -1 === aOP || wT < aOP) && (aOP = wT, qH = dP)
		}
		return qH
	}

	function aOL(aOI, aOG) {
		if (aOI === b4.dg) return 0;
		var ld = b2.ld[aOI],
			at = ld.length;
		if (0 === at) return 0;
		for (var ay = Math.min(at, 10), qH = 0, aOP = dH.wF(ld[qH] >> 2, aOG), aH = 0; aH < ay; aH++) {
			var hC = kI.nG(at),
				wT = dH.wF(ld[hC] >> 2, aOG);
			wT < aOP && (aOP = wT, qH = hC)
		}
		return ld[qH] >> 2
	}

	function aOM(player, aOG, lv, aOR) {
		var aOS;
		(aOR === b4.dg || (aOS = dH.aOQ(lv), aOR = dH.aOQ(aOR), dH.wF(aOG, aOS) < dH.wF(aOG, aOR))) && (aOB[player] = lv)
	}
	this.w = function() {
		aOB.fill(b4.dg)
	}, this.aDt = function() {
		if (aF.bP() % 109 == 9 && !(fG.fH < 20) && b4.e2 && !(pC.aDE() < aA.aB(8 * b4.a5K, 10))) {
			var a34 = pC.a35();
			if (e4.e6[a34]) {
				pC.aDJ(a34);
				var ay = mK.vR[0];
				if (0 !== ay)
					for (var ar = mK.vS, fI = fG.fI, fH = fG.fH, aOC = aOB, hC = kI.nG(ay), aH = 0; aH < fH; aH++) {
						var fB = fI[aH],
							cw = ar[hC];
						aP.cA.wz(fB, cw) && 512 === aOC[fB] && (aOC[fB] = cw, hC = (hC + 1) % ay)
					}
			}
		}
	}, this.cX = function(player) {
		var aOG, aOK, aOI, aOD = function(player) {
			var lv = aOB[player];
			if (lv !== b4.dg) {
				if (aP.cA.pg(lv) && b2.ld[lv]) return lv;
				aOB[player] = b4.dg
			}
			return b4.dg
		}(player);
		return function(player) {
			for (var aLR = fG.fI, at = fG.fH, ay = Math.min(at, at < 17 && 5 === kI.nG(20) ? 1 : 16), hS = kI.nG(at), ym = mK.ym, ld = b2.ld, eU = 0, aH = 0; aH < ay; aH++) {
				var dP = aLR[(aH + hS) % at];
				dP !== player && ld[dP].length && (ym[eU++] = dP)
			}
			mK.vR[0] = eU
		}(player), 0 !== mK.vR[0] && (0 < (aOK = aOL(aOI = aOJ(player, aOG = dH.aOH(player)), aOG)) && eF.a97.uF(player, eF.fr.uQ(aOK, aOG)) ? (aOM(player, aOG, aOI, aOD), !0) : 0 < (aOI = function(player, aOG) {
			for (var ay = mK.vR[0], ym = mK.ym, aOC = aOB, hS = 0, aH = 0; aH < ay; aH++) {
				var dP = ym[aH],
					dP = aOC[dP];
				dP !== b4.dg && aP.cA.pg(dP) && player !== dP && lb.lc(player, dP) && (ym[hS++] = dP)
			}
			return 0 !== (mK.vR[0] = hS) ? aOL(aOJ(player, aOG), aOG) : 0
		}(player, aOG)) && eF.a97.uF(player, eF.fr.uQ(aOI, aOG)) ? (aOM(player, aOG, dw.dz(aOI << 2), aOD), !0) : !!(0 < (aOK = aOL(aOD, aOG)) && eF.a97.uF(player, eF.fr.uQ(aOK, aOG))))
	}
}

function aOU() {
	this.fk = new aI7, this.jL = new aOV, this.i5 = new aNq, this.w = function() {
		this.fk.w()
	}
}

function aOW() {
	var bS, bT, bU, bV, aOX = 0,
		aOY = 0;

	function aOa() {
		return Math.pow(Math.pow(bU - bS, 2) + Math.pow(bV - bT, 2), .5)
	}

	function aOZ(bF) {
		bS = y.hT * bF.touches[0].clientX, bT = y.hT * bF.touches[0].clientY, bU = y.hT * bF.touches[1].clientX, bV = y.hT * bF.touches[1].clientY
	}
	this.qZ = function(bF) {
		return 1 < bF.touches.length ? (aOY = aF.bL, aOX = 3, aOZ(bF), p9.aE(), !0) : (aOX = 0, !1)
	}, this.qa = function(bF) {
		var uu, a1d, a1e;
		return 0 !== b4.cU && 1 < bF.touches.length && (aOX = Math.max(aOX - 1, 0), dD.pR() && (uu = aOa(), aOZ(bF), bF = aOa(), a1d = Math.floor((bS + bU) / 2), a1e = Math.floor((bT + bV) / 2), cM.a6r(a1d, a1e, Math.max(.125, bF) / Math.max(
			.125, uu)), aF.aG = !0), !0)
	}, this.qz = function() {
		var aY, aZ;
		return !!(aOX && (aOX = 0, aF.bL < aOY + 500)) && (aY = (bS + bU) / 2, aZ = (bT + bV) / 2, p9.qt(aY, aZ), p9.click(aY, aZ, !0) && (aF.aG = !0), !0)
	}
}

function aOb() {
	var canvas, ao, aY, aZ, aHd, aOc, gap, aOd, fontSize, aOe, q, aOf, aOg, aOh, aOi, aOj, aOk, aOl;

	function aOq() {
		ao.clearRect(0, 0, bQ.b, bQ.c), ao.fillStyle = ab.ac, ao.fillRect(0, 0, bQ.b, bQ.c), ao.fillStyle = ab.a4e, av = 0 < aOj ? aOj : Math.sqrt(aOg[4] / 1e4), ao.fillRect(0, bQ.c - aHd - 1, Math.floor(av * bQ.b), aHd), ao.fillStyle = ab.am, ao
			.fillRect(0, 0, bQ.b, 1), ao.fillRect(0, 0, 1, bQ.c), ao.fillRect(bQ.b - 1, 0, 1, bQ.c), ao.fillRect(0, bQ.c - 1, bQ.b, 1), ao.fillRect(0, bQ.c - aHd - 1, bQ.b, 1);
		for (var av, aOr, aJ = 0, aH = 0; aH < aOf.length; aH++) aOh[aH] ? (aP.aS.textAlign(ao, 0), aOr = Math.floor((aOc - aHd + 2 * aOd) * (aH - aJ + 1) / (aOf.length + 1) - .7 * aOd), ao.fillText(aOf[aH], gap, aOr), aP.aS.textAlign(ao, 2), 5 ===
			aH && 0 !== b2.bN[b4.b5] && b2.e1[b4.b5] >= mD.a5F(b4.b5) ? (ao.fillStyle = ab.a4t, ao.fillText(aOn(aH), bQ.b - gap, aOr), ao.fillStyle = ab.am) : ao.fillText(aOn(aH), bQ.b - gap, aOr)) : aJ++
	}

	function aOn(aH) {
		return aH < 3 ? aOg[aH].toString() : 3 === aH || 4 === aH || 5 === aH ? aP.aQ.aU(aOg[aH] / 100, 2) : aH < 7 ? aP.aQ.aR(aOg[aH]) : aH === 7 ? bQ.bR(aOg[7]) : aH === 8 ? __fx.utils.getMaxTroops(b2.b3, b4.b5) : __fx.utils.getDensity(b4.b5)
	}

	function aOm() {
		b2.b3[b4.b5] !== aOg[6] && (aOg[6] = b2.b3[b4.b5], aOe++)
	}
	this.w = function() {
		aOj = aOk = 0, (q = new Array(8))[0] = L(338), q[1] = b4.o0 ? L(151) : L(339), q[2] = L(340), q[3] = L(341), q[4] = L(224), q[5] = L(2, 0, "Interest"), q[6] = L(1), q[7] = L(342),
			q.push("Max Troops", "Density"), // add q
			(aOf = new Array(q.length)).fill(""), (aOg = new Array(q.length))[0] = b4.o0 ? 0 : b4.du, aOg[1] = b4.o0 ? fG.fH : b4.aHv, aOg[2] = b4.a0x, aOg[3] = 0, aOg[4] = aA.aB(1e4 * b2.b3[0], Math.max(b4.a5K, 1)), aOg[5] = 0 === b4.data
			.iIncomeType ? 700 : 1 === b4.data.iIncomeType ? aA.aB(700 * b4.data.iIncomeValue, 64) : aA.aB(700 * b4.data.iIncomeData[b4.b5], 64), aOg[6] = 0, aOm(), aOg[7] = 0, aOi = aOn(6), (aOh = new Array(q.length)).fill(!0), aOl = 0, aOl = b4
			.o0 ? (aOh[0] = !1, aOh[2] = !1, aOh[3] = !1, 3) : (aOh[3] = !1, 1), aOe = 0, this.resize()
	}, this.resize = function() {
		this.b = Math.floor((a0.a1.a2() ? .1646 : .126) * 1.25 * y.bx), this.c = Math.floor(1.18 * this.b), aHd = Math.floor(.04 * this.b), gap = Math.floor(.035 * this.b), aOd = .04 * this.b, aOc = this.c, this.c -= Math.floor(aOl * (this.c -
			2 * aHd) / q.length), fontSize = Math.floor(.7 * (aOc - aHd) / q.length);
		var br = aP.aS.aT(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.b, canvas.height = this.c,
			function(br, b) {
				for (var aH = 0; aH < aOf.length; aH++) aOf[aH] = aP.ao.ap(q[aH], br, b)
			}((ao = canvas.getContext("2d", {
				alpha: !0
			})).font = br, .575 * this.b), aP.aS.textBaseline(ao, 1), ao.lineWidth = 1, this.aOp(), this.by(), p7.by(), aOq()
	}, this.by = function() {
		aY = y.b - this.b - a3.gap
	}, this.a1l = function() {
		aZ = a3.gap
	}, this.aOp = function() {
		aZ = a3.gap + (p7.aD9() && 0 !== b2.bN[b4.b5] && !b4.bv ? p7.c + a3.gap : 0)
	}, this.c2 = function(f9) {
		(f9 || 100 <= aOe) && (aOe = 0, aOq())
	}, this.oT = function() {
		return aOg[7]
	}, this.bR = function(value) {
		var at = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * at) / 1e3);
		return value < 10 ? at + ":0" + value : at + ":" + value
	}, this.cX = function() {
		var aw, per;
		aOh[0] && b4.fC - b4.a0x !== aOg[0] && (aOg[0] = b4.fC - b4.a0x, aOe++), fG.fH - aOg[0] !== aOg[1] && (aOg[1] = fG.fH - aOg[0], aOe++), this.aOu(), (aw = mD.zn(b4.b5)) !== aOg[5] && (aOg[5] = aw, aOe++), aOm(), aOg[7] += aF.bM, aw = aOn(
			7), aOi !== aw && (aOi = aw, aOe += 100), aw = b4.e2 ? pC.aDE() : b2.b3[pd[0]], per = aA.aB(1e4 * aw, Math.max(b4.a5K, 1)), aOg[3] = aw, aOg[4] !== per && (aOe++, aOg[4] = per), 8 === b4.f7 && function() {
			for (var aH = 0; aH < 2; aH++)
				if (!aP.cA.la(aH)) return a0z.a10.a11(), 1;
			return
		}() || aOg[3] < b4.a5K || ! function() {
			for (var aH = fG.fH - 1; 0 <= aH; aH--)
				if (0 < b2.m3[fG.fI[aH]].length) return;
			return 1
		}() || eF.fr.wx().length || a0z.a10.a11()
	}, this.aOu = function() {
		aOh[2] && b4.a0x !== aOg[2] && (aOg[2] = b4.a0x, aOe += 2 === b4.cU ? 100 : 1)
	}, this.aDx = function() {
		return aOg[3] === b4.a5K
	}, this.l4 = function(aH) {
		var ej, aP2, aJ;
		return 2 !== b4.cU && (aH % 2 == 1 && (p6.c2(1, 1), aF.aG = !0), aH === b4.l6 ? (aOj = 0, aOq(), !1) : (-1 !== aH || 0 !== aOk) && (aP2 = aOj, aOj = b4.bw ? aH / b4.l6 : (aJ = performance.now(), 0 <= aH && (ej = aJ - 392 * aH, aOk = 0 ===
			aH || ej < aOk ? ej : aOk), 1 < (aOj = (aJ - aOk) / (392 * b4.l6)) ? 1 : aOj), aOq(), aOj !== aP2))
	}, this.aW = function() {
		aa.drawImage(canvas, aY, aZ)
	}
}

function aP5(f9) {
	hs && !f9 || (gx(), aA = new aIK, uC = new a72, aP = new a55, ab = new a4O, b4 = new aIp, oi = new aP7, fj = new aP8, gL = new aOU, e8 = new aHl, m4 = new pX, a1g = new aP9, dD = new aMS, aIy = new aBQ, aIz = new aCW, aM0 = new jz, p9 = new aFZ,
		aC = new q3, d8 = new cY, p5 = new ts, p8 = new aCd, aO = new rl, c7 = new bn, cM = new a6d, p4 = new aHG, p7 = new aPA, p6 = new aPB, bQ = new aOb, pB = new aPC, p1 = new aDV, p3 = new aPD, iY = new aPE, nj = new aPF, dw = new aPG, a12 =
		new aB9, fG = new aPH, mJ = new aL9, aG7 = new jw, m0 = new a7Q, mD = new aF8, aP3 = new a9d, dl = new aPI, b2 = new aPJ, aIv = new n5, a3w = new aPK, dY = new yO, f2 = new a86, kW = new aPL, r3 = new aPM, fz = new a9N, kI = new aPN, mF =
		new aDj, aIX = new aPO, qo = new aOW, aIZ = new zi, y = new om, d3 = new aPP, o2 = new vU, aFx = new a7F, fD = new aPQ, a15 = new a1f, aJ4 = new zl, aFs = new aPR, aAU = new aAQ, dB = new aCT, jo = new a6J, aD = new aNJ, hn = new aPS,
		i4 = new aPT, jQ = new zp, aEX = new aEU, qr = new qQ, dH = new aPU, eF = new a8z, mK = new a23, zC = new aPV, aNm = new a0t, a0z = new aPW, ev = new a8S, qv = new aJw, fZ = new iS, aIg = new aI1, a0 = new gy, hs = new aPX, ho = new a2s,
		gH = new aPY, e4 = new a3L, pC = new aDA, a6y = new md, l9 = new aPZ, aCz = new aPa, p0 = new m6, aM = new aPb, pA = new a, aF = new aLT, c0 = new aPc, a3 = new aEa, aM6 = new a2J, aNj = new aPd, xV = new aPe, fd = new aH2, aGV = new aGM,
		dW = new oP, aG3 = new aNo, lb = new aGo, hs.w(), a0.w(), y.v(), gH.w(), oi.w(), oi.aPg(), (r2 = new yF).w(), aP.w(), aCz.w(), fz.w(), fj.w(), gL.w(), ev.w(), fZ.w(), p2 = new a1X, y.w(), a0.a1.u7(), aF.w(), a3.w(), p0.w(), aP4 = new aPh,
		kI.w(), mD.yB(), aIg.w(), f2.w(), iY.w(), p4.w(), aIv.w(), qr.w(), nj.w(), aF.aG = !0, setTimeout(function() {
			ev.gD(2, 14071)
		}, 0), fZ.ff(5, 5), aEX.aBA() || a0.a1.uA(), y.ox(), hs.aPi = 1)
}

function aIu() {
	this.dc = function(player, dG) {
		aIy.aCH(player, dH.dI(dG), dH.dJ(dG)) && (aF.aG = !0), b4.o0 && this.cX()
	}, this.cX = function() {
		b4.bv = !1;
		for (var aH = 0; aH < b4.du; aH++) 0 !== b2.bN[aH] && 0 === b2.b3[aH] && aIy.aCM(aH);
		0 !== b2.bN[b4.b5] ? (aM.b1[7] = b2.b3[b4.b5], aM.b1[8] = b2.e1[b4.b5], c7.cG(), bQ.aOp(), b4.bw || dD.dK(b2.a3F[b4.b5] - 5, b2.a3H[b4.b5] - 5, b2.a3G[b4.b5] + 5, b2.a3I[b4.b5] + 5), aIZ.w()) : pB.show(!1, !1, !1, !0), d8.db(18), dl.l8(),
			dl.c2(!0), zC.eG.aPj(), p9.aE(), b4.l7 = null, l9.aPk = !0, l9.lL(), b4.o0 && a0.a1.setState(1)
	}
}

function aPl() {
	this.hy = function(ct, zs, aPm) {
		for (var aPn = [], ay = ct.length, max = 0, aH = 0; aH < ay; aH++) {
			var b0 = ct.charCodeAt(aH);
			aPn.push(b0), max = Math.max(max, b0)
		}
		var aNr = max < 128 ? 7 : 16;
		for (aPm.hr(zs, ay), aPm.hr(1, +(16 == aNr)), aH = 0; aH < ay; aH++) aPm.hr(aNr, aPn[aH])
	}
}

function sM(sA, sB) {
	var aPu, self, aPo = document.createElement("div"),
		aPp = document.createElement("div"),
		aPq = document.createElement("div"),
		aPr = null,
		aPv = (this.sx = new nm({
			value: "",
			p: -1
		}, 0, aPs, function(bF) {
			bF.target.value = aP.aQ.yt(bF.target.value), aPr.ni.textContent = 127 - bF.target.value.length
		}), 0),
		aPw = 1,
		aPx = 0,
		aPy = 1048575;

	function aPs() {
		sA(), aPr.ni.textContent = 127
	}

	function aQ0(aGd, dU) {
		dU && (dU.a0T = 1, aGd.appendChild(fd.yP.transform(dU)))
	}

	function aQ1(f9) {
		aPw ? aPo.scrollTop = aPo.scrollHeight : f9 && (aPo.scrollTop = aPx)
	}
	this.qx = function(aPz) {
			aPy = 1048575, aPp.textContent = "", aPz || this.aV()
		}, this.aV = function() {
			var a0X = fd.eG.sv[0],
				a0X = fd.eG.tB[a0X],
				yS = a0X.yS,
				ay = yS.length,
				a3m = 1048575 === aPy ? 0 : ay - (a0X.yT - aPy + 1048575) % 1048575;
			if (aPy = a0X.yT, !(ay <= (a3m = Math.max(a3m, 0)))) {
				for (var aGd = document.createDocumentFragment(), aH = a3m; aH < ay; aH++) aQ0(aGd, fd.fr.a0R(yS[aH], fd.fr.a0N(yS[aH])));
				aPp.appendChild(aGd), aQ1()
			}
		}, this.aJo = function(dR) {
			var aGd = document.createDocumentFragment();
			aQ0(aGd, dR), aPp.appendChild(aGd), aQ1()
		}, this.show = function(a9n) {
			a9n.appendChild(aPo), a9n.appendChild(aPq), this.resize(a9n)
		}, this.aE = function(a9n) {
			fZ.removeChild(a9n, aPo), fZ.removeChild(a9n, aPq)
		}, this.resize = function(a9n) {
			aPv = a9n ? a9n.offsetHeight : aPv;
			var a9n = aP.aS.hR(.04, .75),
				aMP = Math.max(a9n, aPv - a9n),
				aQ2 = y.b / y.hT,
				aQ3 = .7 * aQ2,
				aQ4 = aP.aS.hL(aPv - a9n - aMP),
				aMP = (aPq.style.height = aP.aS.hL(a9n), aPo.style.height = aP.aS.hL(aMP), y.c > y.b || a0.a1.a2() ? (aPq.style.top = aQ4, aPo.style.top = aP.aS.hL(aPv - aMP), aP.aS.hK(aPo, 8)) : (aPo.style.top = aQ4, aPq.style.top = aP.aS.hL(aPv -
						a9n), aP.aS.hK(aPo, 2)), this.sx.bF.style.width = aP.aS.hL(aQ3), this.sx.bF.style.fontSize = aPu.button.style.fontSize = aP.aS.hL(.5 * a9n), aP.aS.hK(this.sx.bF, 6), aPu.button.style.left = aP.aS.hL(aQ3), aPu.button.style
					.width = aP.aS.hL(aQ2 - aQ3), .385 * a9n);
			a0.a1.a2() && (aMP *= .8 - .12 * (y.b > y.c)), aPp.style.marginLeft = aPp.style.marginRight = aP.aS.hL(.5 * aMP), aPp.style.fontSize = aP.aS.hL(aMP), aQ1(1)
		}, (self = this).sx.bF.a6Z = 127, aPo.style.position = "absolute", aPo.style.left = "0", aPo.style.width = "100%", aPo.style.overflowX = "hidden", aPo.style.overflowY = "auto", aPo.style.font = "inherit", aPo.style.backgroundColor = ab.a4D,
		aPo.addEventListener("scroll", function() {
			aPx = aPo.scrollTop, aPw = aPx < aPo.scrollHeight - aPo.clientHeight - 2 ? 0 : 1
		}), aPp.style.font = "inherit", aPq.style.position = "absolute", aPq.style.left = "0", aPq.style.width = "100%", self.sx.bF.setAttribute("placeholder", L(343)), self.sx.bF.style.position = "absolute", self.sx.bF.style.top = "0", self.sx.bF
		.style.left = "0", self.sx.bF.style.height = "100%", self.sx.bF.style.backgroundColor = ab.a4S, self.sx.bF.style.textAlign = "center", (aPu = new fR(L(140), aPs)).button.top = "0", aPu.button.style.position = "absolute", aPu.button.style
		.height = "100%", aPu.rf(ab.sp), aPr = new iL("127", aPu.button, 1, 1), aPo.appendChild(aPp), aPq.appendChild(self.sx.bF), aPq.appendChild(aPu.button)
}

function aPF() {
	var aQ6, canvas, e5, aQ7;

	function aQD(p, name, aQE, ct) {
		e5[p] = name, canvas[p] = new Image, canvas[p].onload = function() {
			! function(p, aQE) {
				var aFR, i3 = null;
				7 === aQE ? aFR = aP.a09.aFT : 8 === aQE ? (aFR = aP.a09.aFW, i3 = .1) : 3 === aQE ? (aFR = aP.a09.aFU, i3 = .06) : 5 === aQE ? aFR = aP.a09.aFX : 6 === aQE ? aFR = aP.a09.aFS : 4 === aQE && (aFR = aP.a09.aFY);
				canvas[p] = aP.a09.aFQ(canvas[p], aFR, i3)
			}(p, aQE), aQG()
		}, canvas[p].onerror = function(bF) {
			console.error("Error loading image at index", p, "Error:", bF), aQG()
		}, canvas[p].src = "data:image/png;base64," + ct
	}

	function aQG() {
		aQ6--, aQA()
	}

	function aQA() {
		0 === aQ6 && (aQ6 = -1, aQC(), aF.aG = !0, canvas[7] = aQ7, canvas[8] = aQ7, canvas[9] = aQ7, canvas[10] = aQ7, 5 === fZ.fa) && fZ.fx().aQI.resize()
	}

	function aQC() {
		p9.aFj(), p2.a1Y([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), dY.dZ = new yQ, dY.dZ.w(), d3.v()
	}
	this.w = function() {
		if (void 0 === canvas) {
			aQ6 = 23, canvas = new Array(aQ6), e5 = new Array(aQ6), (aQ7 = document.createElement("canvas")).width = 1;
			for (var aH = aQ6 - (aQ7.height = 1); 0 <= aH; aH--) canvas[aH] = aQ7;
			aQC(), aQD(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aQD(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aQD(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQD(3, "orders", 6,
					"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"
					), aQD(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aQD(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aQD(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aQD(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQD(8,
					"googleplay", 3,
					"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"
					), aQD(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aQD(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQD(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQD(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQD(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQD(14, "bestPlayer", 5,
					"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"
					), aQD(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aQD(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), aQD(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aQD(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aQD(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aQD(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aQD(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aQD(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(p) {
		return canvas[p]
	}, this.vo = function(name) {
		for (var aH = e5.length - 1; 0 <= aH; aH--)
			if (e5[aH] === name) return canvas[aH];
		return aQ7
	}, this.nk = function() {
		return aQ6 <= 0
	}, this.aQ9 = function() {
		aQ6 = 0, aQA()
	}
}

function L(value, aQJ, pQ, aQK) {
	var ct = "number" == typeof value ? oi.aQL[value] : value;
	if (pQ && oi.aQM() && (ct = pQ), !aQJ) return aQK ? ct.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : ct;
	for (var ay = aQJ.length, aH = 0; aH < ay; aH++)
		for (var dF = 0; dF < 3; dF++) ct = ct.replace("{" + (10 * dF + aH) + "}", aQJ[aH]);
	return ct
}

function aLX() {
	var aQN, aQO, aQP, kz, aQQ, p = 0,
		bL = aF.bL;

	function aQT() {
		! function() {
			if (!b4.bv) return;
			if (b4.o0) return;
			if (2 !== b4.cU)
				if (aQQ % 7 != 0) aQQ++;
				else if (kz === b4.l6) {
				if (!aQW()) return;
				bQ.l4(kz), b4.l7.cX()
			} else {
				if (!aQW()) return;
				aQQ++, kz++, dl.l8(), dl.c2(!0)
			}
			return 1
		}() && aQW() && lJ()
	}

	function aQU() {
		p = 0, (b4.bv ? (aF.aG = bQ.l4(kz - (aQQ % 7 == 0 ? 0 : 1) + aQQ % 7 / 7) || aF.aG, lB) : aC.cD || !aD.qB ? lB : (aF.aG = !0, lH))()
	}

	function aQW() {
		var aH, ay, aQX = jo.jp.mU,
			bG = jo.jp.mV,
			bH = jo.jp.mW,
			mc = jo.jp.mX,
			aQY = jo.jp.mY,
			aQZ = jo.jp.mZ;
		if (!(aQN >= aQZ.length)) {
			if (aQZ = aQZ[aQN], aQY[aQN]) {
				for (ay = aQO + aQZ, aH = aQO; aH < ay; aH++) dB.l5.a2i(aQX[aH], bG[aH], bH[aH], mc[aH]);
				aQO += aQZ, aQN++
			} else ++aQP >= aQZ && (aQN++, aQP = 0);
			return 1
		}
		d8.dq("Replay file smaller than expected."), aD.qC(!1), b4.cU = 2
	}
	this.ky = 0, this.w = function() {
		aQQ = kz = aQP = aQO = aQN = 0
	}, this.cX = function() {
		var aJg;
		y.cX(), aD.aNP() < 1.7 ? 0 === p ? aF.bL >= bL && (aJg = aF.bM / aD.aNP(), bL += aJg * Math.floor(1 + (aF.bL - bL) / aJg), 2 === b4.cU || aC.cD || !aD.qB ? lC() : (aQT(), l9.lA()), p++) : aQU() : function() {
			var aJg;
			if (aF.bL >= bL)
				if (2 === b4.cU || aC.cD || !aD.qB) lC(), bL = aF.bL;
				else {
					for (aJg = aF.bM / aD.aNP(), 16 < (aF.bL - bL) / aJg && (bL = aF.bL - 16 * aJg); aF.bL >= bL && 2 !== b4.cU;) bL += aJg, aQT();
					l9.lA()
				} aQU()
		}(), lF(), aF.aG && (aF.aG = !1, lG())
	}, this.aQa = function() {
		jo.jp.mZ.length - aQN <= 2 || d8.dq("Replay file larger than expected.")
	}
}

function a9Q() {
	this.aM5 = !1, this.cX = function() {
		aF.bP() % 250 != 249 || b4.bw || (fz.hu.aEO(+(this.aM5 && b2.bN[b4.b5]), fG.fH + eF.eG.lQ), this.aM5 = !1)
	}
}

function aPb() {
	var a7H = 501,
		aQc = (this.ag = new Uint32Array(a7H), this.ah = new Uint32Array(a7H), this.aw = new Uint16Array(a7H), this.aN = 0, 1),
		aK9 = 0;

	function aQd(self) {
		self.max.fill(0)
	}

	function aQf(self, aH) {
		self.max[0] = Math.max(self.ag[aH], self.max[0]), self.max[1] = Math.max(self.ah[aH], self.max[1]), self.max[2] = Math.max(self.aw[aH], self.max[2])
	}
	this.max = [0, 0, 0], this.bO = 0, this.b1 = new Array(21), this.az = null, this.v = function() {
		this.az = [L(344), L(345), L(346), L(347), L(348), L(349), L(350), L(351), L(177), L(178), L(352), L(353), L(354), L(355), "", L(356), L(357), L(358), L(98), L(359), L(360)]
	}, this.w = function() {
		this.aN = 0, aQc = 1, this.bO = 0, aK9 = 0, aQd(this), this.b1.fill(0)
	}, this.aNg = function(player, bp) {
		aP.cA.a7k(player) && (this.b1[0] += bp + 1, this.b1[1]++, this.b1[12] += mK.mL[1])
	}, this.ep = function(player, mB) {
		__fx.donationsTracker.logDonation(player, mB, mK.mL[0]);
		player === b4.b5 && (d8.ep(mK.mL[0], mK.mL[1], mB), this.b1[12] += mK.mL[1], this.b1[16] += mK.mL[0]), mB === b4.b5 && (d8.eu(mK.mL[0], player), this.b1[10] += mK.mL[0])
	}, this.aNi = function(player) {
		aP.cA.a7k(player) && (this.b1[2]++, this.b1[12] += mK.mL[1])
	}, this.aNn = function(player) {
		aP.cA.a7k(player) && (this.b1[19]++, this.b1[12] += mK.mL[1])
	}, this.lk = function(player) {
		aP.cA.a7k(player) && this.b1[20]++
	}, this.lw = function(player, bq, p) {
		aP.cA.a7k(player) && (this.b1[p] += bq)
	}, this.cX = function() {
		var self;
		this.bO || 0 < aK9-- || ((self = this).ag[self.aN] = b2.b3[b4.b5], self.ah[self.aN] = b2.e1[b4.b5], self.aw[self.aN] = mD.zn(b4.b5), aQf(self, self.aN), self.aN++, self.aN === a7H && function(self) {
			aQd(self), aQf(self, 0), self.aN = 1 + aA.aB(a7H, 2);
			for (var aH = 1; aH < self.aN; aH++) self.ag[aH] = self.ag[2 * aH], self.ah[aH] = self.ah[2 * aH], self.aw[aH] = self.aw[2 * aH], aQf(self, aH);
			aQc *= 2
		}(self), aK9 = aQc - 1, pA.aV(), 0 === b2.bN[b4.b5] && (self.bO = aF.bP()))
	}
}

function a9G() {
	this.cX = function(player, dN) {
		player = eF.fr.wK(player, dN);
		return !(player < 0 || !eF.lT.aLp(player) || (eF.lT.lU(player), 0))
	}
}

function aPA() {
	var br, b, aZ, aQh, aQi, aQj, canvas, ao, bs, ah, aQk, aQl, aQm, aQn;
	this.aY = 0, this.c = 0, this.w = function() {
		aQj = b4.aIr, aQl = "rgba(0,100,0,0.8)", aQm = "rgba(150,0,0,0.8)", bs = aQk = !0, ah = b2.e1[b4.b5], this.resize()
	}, this.resize = function() {
		b = Math.floor((a0.a1.a2() ? .305 : .24) * y.bx), this.c = Math.floor(.5 + .13 * b), b = Math.floor(6 * this.c), br = aP.aS.aT(1, Math.floor(.8 * this.c)), aQi = aP.aS.aT(1, Math.floor(.45 * this.c)), aQn = Math.floor(.5 * this.c), ev.kn
			.font = br, aZ = a3.gap, aQh = Math.floor(1 + .13 * this.c), (canvas = document.createElement("canvas")).width = b, canvas.height = this.c, ao = canvas.getContext("2d", {
				alpha: !0
			}), aP.aS.textBaseline(ao, 1), aP.aS.textAlign(ao, 1), this.aQo()
	}, this.aD9 = function() {
		return a0.a1.a2() && y.b < 1.2 * y.c
	}, this.by = function() {
		this.aD9() ? this.aY = y.b - b - a3.gap : this.aY = Math.floor(p6.aQp() + (y.b - p6.aQp() - bQ.b - b) / 2 - .5 * a3.gap)
	}, this.c2 = function() {
		bs && (bs = !1, this.aQo())
	}, this.aQo = function() {
		ao.font = br, ao.clearRect(0, 0, b, this.c), ao.fillStyle = aQk ? aQl : aQm, ao.fillRect(0, 0, b, this.c), ao.fillStyle = ab.a4T;
		var cl = this.aQq(),
			aQs = (this.aQr(), ao.fillStyle = b2.e1[b4.b5] >= mD.a5F(b4.b5) ? ab.lg : ab.am, aP.aQ.aR(ah)),
			aQs = (ao.fillText(aQs, Math.floor(b / 2), aQn), ao.measureText(aQs).width),
			cl = (ao.font = aQi, ao.fillStyle = 9 === cl ? ab.a51 : ab.am, mD.aF9),
			aQu = "+" + cl,
			e = ao.measureText(aQu).width,
			aQv = Math.floor(this.c / 12),
			aQs = .5 * (b + aQs) + aQv;
		(aQs + e + aQh <= b || 1e3 <= cl && (aQu = "+" + Math.floor(cl / 1e3) + "K", aQs + (e = ao.measureText(aQu).width) + aQh <= b)) && ao.fillText(aQu, Math.floor(aQs + .5 * e), Math.floor(.3 * this.c)), ao.fillStyle = ab.am, ao.fillRect(0,
			0, b, 1), ao.fillRect(0, 0, 1, this.c), ao.fillRect(0, this.c - 1, b, 1), ao.fillRect(b - 1, 0, 1, this.c)
	}, this.aQq = function() {
		var cl = aF.bP() % 100,
			a9 = (cl = 9 - aA.aB(cl -= cl % 10, 10), Math.floor(cl * (this.c - aQh) / 9));
		return ao.fillRect(0, a9, aQh, this.c - a9), ao.fillRect(b - aQh, a9, aQh, this.c - a9), cl
	}, this.aQr = function() {
		ao.fillRect(aQh, this.c - aQh, Math.floor((b - 2 * aQh) * b2.e1[b4.b5] / aQj), aQh)
	}, this.cX = function() {
		var dP = b4.b5;
		aP.cA.la(dP) && (dP = b2.e1[dP] - b2.aBH[dP], ah !== dP ? (aQj = d5(dP, aQj), aQk = ah < dP && 10 <= dP, ah = dP, bs = !0) : aF.bP() % 10 == 9 && (bs = !0))
	}, this.aW = function() {
		0 === b2.bN[b4.b5] || b4.bv || 2 === b2.es[b4.b5] || aa.drawImage(canvas, this.aY, aZ)
	}
}

function a9D() {
	function aQy(player, wZ) {
		wZ = dH.lS(eF.eG.lO[wZ]), wZ = dw.eC(dH.ls(wZ));
		return !!eF.fr.w6(player, wZ)
	}

	function aQw(player) {
		return eF.vv.vw(player) && !eF.uM.uS()
	}
	this.aFv = function(player, dG) {
		return !!aQw(player) && -1 !== (dG = function(player, dG) {
			for (var ay = eF.eG.lQ, lO = eF.eG.lO, eH = eF.eG.eH, wR = dH.aN1(), wS = -1, aH = 0; aH < ay; aH++) {
				var wT = dH.aLn(dG, dH.lS(lO[aH]));
				wT < wR && aP.cA.wz(player, eH[aH] >> 3) && (wR = wT, wS = aH)
			}
			return wS
		}(player, dG)) && !!aQy(player, dG) && (mK.vu[3] = eF.eG.wM[dG], !0)
	}, this.vy = function(player, dN) {
		return !!aQw(player) && !!eF.fr.wW(dN) && !!aQy(player, mK.vu[2])
	}, this.aE4 = function(player, dN, aQz) {
		return !! function(player, dN, aQz) {
			if (aQw(player) && eF.fr.wW(dN)) {
				dN = mK.vu[2];
				if (aP.cA.wz(player, eF.eG.eH[dN] >> 3)) {
					if (function(player, wZ) {
							return eF.fr.wY(player, wZ) && (mK.ar[0] = eF.uM.uU(eF.eG.wa[wZ]), mK.vu[1] = 6, !0)
						}(player, dN)) return 1;
					var lh = dH.lS(eF.eG.lO[dN]),
						uN = eF.fr.uO(player, lh);
					if (-1 !== uN) {
						uN = dH.aLn(uN, lh);
						if (!(aQz && 120 < uN)) {
							aQz = function(wZ, aR3, lh) {
								var v4 = eF.eG.wa[wZ],
									wZ = eF.eG.lj[wZ],
									aR6 = dH.aLn(lh, v4[wZ + 1]);
								if (aR3 <= aR6) return eF.fr.wb(lh, v4[wZ + 1], aR6, aR3);
								for (var wT = aR3 - aR6, ay = v4.length - 1, aH = wZ + 1; aH < ay; aH++) {
									var aR7 = dH.aLn(v4[aH], v4[aH + 1]);
									if (wT <= aR7) return eF.fr.wb(v4[aH], v4[aH + 1], aR7, wT);
									wT -= aR7
								}
								return v4[ay]
							}(dN, uN, lh);
							if (eF.a97.uI(player, aQz, 1)) return mK.vu[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, dN, aQz) && (player = mK.vu[2], eF.eG.lN[player] = 64 + eF.eG.lN[player] % 64, eF.lT.dc(dN, eF.eG.aJD), !0)
	}
}

function a2u() {
	function aRB(ar, b0, hC) {
		for (var aH = 0; aH < 256; aH++) ar[aH] = (ar[aH] + (b0 >> (aH + hC) % 30 & 1)) % 256
	}
	this.cX = function(aR8, aR9) {
		var ar = new Uint8Array(256);
		return function(ar, aR8, aR9) {
				var aH, aRD = 3 + (4 + aR8) % 32768,
					aRE = 12 + aR9 % 32768,
					aRF = 17 + ((aR8 & aR9) + (aR8 | aR9) + aR8) % 32768;
				for (aH = 0; aH < 256; aH++) aRD = 1 + aRD * aRE % aRF, ar[aH] = aRD % 256
			}(ar, aR8, aR9), aRB(ar, aR8, 2), aRB(ar, aR9, 7),
			function(ar) {
				var aH, b0, p = 0;
				for (aH = 0; aH < 3e4; aH++) b0 = ar[p], ar[p] = (b0 + aH + ar[(p + aH) % 256]) % 256, p = (b0 + aH + p + (b0 & p)) % 256
			}(ar),
			function(ar) {
				var aH, h = 1,
					i = 1;
				for (aH = 0; aH < 256; aH += 2) h = (1 + h) * (ar[aH] + 1) % 1073741824, i = (1 + i) * (ar[aH + 1] + 1) % 1073741824;
				return [h, i]
			}(ar)
	}, this.aRG = function(aRH, aRI, aRJ, result) {
		for (var eU = 1 << aRH, aH = 0; aH < eU; aH++)
			if (this.aRK(aH, aRI, aRJ) === result) return aH;
		return 0
	}, this.aRK = function(aRL, aRI, aRJ) {
		for (var aBm = aRI + aRL, aBv = aRJ + aRL, b0 = aBm + aBv & 2147483647, dF = 1; dF <= 16; dF++) b0 = (b0 = (b0 ^ b0 >> dF) >>> 1 + (3 & aBm)) * (7 + (1023 & (aBm | aBv))) & 1073741823, aBv >>= 1 + (1 & (aBm >>= 1 + (1 & (b0 += 65535 &
			aBv))));
		return b0 &= 1073741823
	}
}

function aI5() {
	var aRM = null,
		aGR = 2e4,
		aRN = 0;
	this.cX = function() {
		aF.bL < aGR || (aGR = aF.bL + 1e4, 0 !== a0.id) || aRM || aIg.aI6() || (fz.eG.rh(0) ? fz.hu.aEJ(5) : aGR = aF.bL + 1e3)
	}, this.dc = function(cl) {
		aRM = cl
	}, this.show = function() {
		return !(!aRM || aF.bL < aRN) && (__fx.settings.hidePropagandaPopup ? void 0 : (aRN = aF.bL + 6e4, (new aK7).show(aRM.og, aRM.colors, aRM.id), !(aRM = null)))
	}
}

function aP9() {
	var size, a5O;
	this.w = function() {
		size = b4.aHv, a5O = new Uint16Array(b4.dg);
		for (var du = b4.du, aH = b4.aHv - 1; 0 <= aH; aH--) a5O[aH] = du + aH
	}, this.cX = function() {
		mF.aDr.cX();
		for (var aH = size - 1; 0 <= aH; aH--)
			if (0 === b2.bN[a5O[aH]]) {
				dF = void 0;
				var dF = aH;
				size--, a5O[dF] = a5O[size]
			} else e8.cX(a5O[aH])
	}, this.a1h = function(dP) {
		a5O[size++] = dP
	}
}

function aPd() {
	this.aNk = new nK
}

function aPU() {
	this.lf = new Int16Array(4), this.lq = new Int16Array(4), this.uZ = null, this.w = function() {
		var aH;
		for (this.lf[0] = -ev.f0, this.lf[1] = 1, this.lf[2] = ev.f0, this.lf[3] = -1, this.uZ = new Int16Array([-ev.f0, 1 - ev.f0, 1, ev.f0 + 1, ev.f0, ev.f0 - 1, -1, -ev.f0 - 1]), aH = 0; aH < 4; aH++) this.lq[aH] = 4 * this.lf[aH]
	}, this.aN1 = function() {
		return aA.cI(Math.floor(.15 * (1 + .25 * a0.a1.a2()) * y.bx / mn), 4, 128)
	}, this.w8 = function(av, id) {
		for (var lp = this.lq, aH = 0; aH < 4; aH++) {
			var lr = av + lp[aH];
			if (dw.kj(lr) && dw.eC(lr) === id) return !0
		}
		return !1
	}, this.aRQ = function(player, av) {
		return !dw.dy(av) && player === dw.dz(av)
	}, this.aGa = function(aE7, aE8, dG) {
		return (aE7 -= this.dI(dG)) * aE7 + (aE8 -= this.dJ(dG)) * aE8
	}, this.wU = function(a1d, a1e, us) {
		a1d = this.wu(a1d) - this.wo(us), a1e = this.wv(a1e) - this.wq(us);
		return Math.sqrt(a1d * a1d + a1e * a1e)
	}, this.aLn = function(ug, w9) {
		var wj = this.dI(ug) - this.dI(w9),
			ug = this.dJ(ug) - this.dJ(w9);
		return ~~Math.sqrt(wj * wj + ug * ug + .5)
	}, this.wF = function(ug, w9) {
		var wj = this.dI(ug) - this.dI(w9),
			ug = this.dJ(ug) - this.dJ(w9);
		return wj * wj + ug * ug
	}, this.aGY = function(wd, we, wf, wg) {
		return (wd -= wf) * wd + (we -= wg) * we
	}, this.cB = function(dP, bp) {
		return aA.aB(bp * b2.e1[dP], 1e3)
	}, this.wu = function(a1d) {
		return 16 * (a1d + zN) / mn
	}, this.wv = function(a1e) {
		return 16 * (a1e + zO) / mn
	}, this.ws = function(z) {
		return 16 * z / mn
	}, this.aFy = function(a1d) {
		return Math.floor((a1d + zN) / mn)
	}, this.aFz = function(a1e) {
		return Math.floor((a1e + zO) / mn)
	}, this.aG0 = function(aE7, aE8) {
		return 1 <= aE7 && 1 <= aE8 && aE7 < ev.f0 - 1 && aE8 < ev.f1 - 1
	}, this.dI = function(dG) {
		return dG % ev.f0
	}, this.dJ = function(dG) {
		return aA.aB(dG, ev.f0)
	}, this.wl = function(aE7, aE8) {
		return aE8 * ev.f0 + aE7
	}, this.aNG = function(aE7, aE8) {
		return 4 * this.wl(aE7, aE8)
	}, this.aNd = function(dG) {
		return this.aGc(this.dI(dG), this.dJ(dG))
	}, this.aGc = function(aE7, aE8) {
		return 0 < aE7 && aE7 < ev.f0 - 1 && 0 < aE8 && aE8 < ev.f1 - 1
	}, this.ls = function(dG) {
		return dG << 2
	}, this.wG = function(av) {
		return av >> 2
	}, this.aRR = function(dG) {
		return ev.f0 * this.dJ(dG) * 256 + (this.dI(dG) << 4)
	}, this.aJG = function(dG) {
		return this.aRR(dG) + 8 + (ev.f0 << 7)
	}, this.lS = function(us) {
		return ev.f0 * (this.wq(us) >> 4) + (this.wo(us) >> 4)
	}, this.a1y = function(us) {
		us = this.lS(us);
		return (this.dI(us) >> 5) + eF.kS.aRS * (this.dJ(us) >> 5)
	}, this.wo = function(us) {
		return us % (ev.f0 << 4)
	}, this.wq = function(us) {
		return aA.aB(us, ev.f0 << 4)
	}, this.aNI = function(dG, lY) {
		return dG + this.lf[lY]
	}, this.aRT = function(av, lY) {
		return av + this.lq[lY]
	}, this.aNH = function(ug, w9) {
		var wj = this.dI(w9) - this.dI(ug),
			w9 = this.dJ(w9) - this.dJ(ug);
		return Math.abs(wj) >= Math.abs(w9) ? 1 + 2 * (wj < 0) : 2 * (0 < w9)
	}, this.aOQ = function(player) {
		return this.wl(b2.a3F[player] + b2.a3G[player] >> 1, b2.a3H[player] + b2.a3I[player] >> 1)
	}, this.aOH = function(player) {
		return this.wl(kI.aGX(b2.a3F[player], b2.a3G[player]), kI.aGX(b2.a3H[player], b2.a3I[player]))
	}
}

function aPa() {
	var aRU, aRV = new Uint8Array(5),
		aRW = new Uint8Array(5);
	this.aRX = new aLH, this.w = function() {
		for (var b0 = gH.gJ.data[119].value, aH = 0; aH < aRV.length; aH++) aRV[aH] = (b0 >> 2 * aH) % 4
	}, this.aIx = function() {
		aRU = [L(361), "", L(362, [r2.yI[28]]), L(363, [r2.yI[26]]), L(364, [r2.yI[0]])], this.aRX.w()
	}, this.cX = function() {
		this.aRX.cX()
	}, this.aD0 = function(id) {
		1 < id && qr.rB() || ! function(p) {
			if (3 === aRV[p] || 1 === aRW[p]) return;
			if (aRW[p] = 1, !(Math.random() < .6)) {
				aRV[p]++;
				for (var b0 = 0, aH = 0; aH < aRV.length; aH++) b0 += aRV[aH] << 2 * aH;
				gH.rg.nf(119, b0)
			}
			return 1
		}(id) || d8.dQ(aRU[id])
	}
}

function aPM() {
	var kK, aRZ, aRa, aRb, aM1 = !1;

	function aRc() {
		aM1 = !0, kK = -1, aRZ = new Array(4);
		for (var aH = 3; 0 <= aH; aH--) aRZ[aH] = !1;
		var aBo = Math.floor(1 + .02 * y.min);
		aRa = new Array(4), (aRb = new Array(4))[1] = aRb[3] = aRa[0] = aRa[2] = 0, aRb[0] = aRa[3] = -aBo, aRa[1] = aRb[2] = aBo
	}

	function aRd() {
		if (-1 !== kK)
			if (0 !== b4.cU && dD.pR()) {
				for (var aRe = !1, aH = 3; 0 <= aH; aH--) aRZ[aH] && (aRe = !0, zN += aRa[aH], zO += aRb[aH], dl.aI(aRa[aH], aRb[aH]), cM.pD());
				aRe ? aF.aG = !0 : r3.aMk()
			} else r3.aMk()
	}
	this.r4 = function(p) {
		0 !== b4.cU && dD.pR() && (aM1 || aRc(), aRZ[p] = !0, -1 === kK) && (kK = setInterval(aRd, 20), aRd())
	}, this.r9 = function(p) {
		if (0 !== b4.cU && (aM1 || aRc(), aRZ[p] = !1, -1 !== kK)) {
			for (var aRe = !1, aH = 3; 0 <= aH; aH--) aRe = aRe || aRZ[aH];
			aRe || this.aMk()
		}
	}, this.aMk = function() {
		if (aM1 && -1 !== kK) {
			for (var aH = 3; 0 <= aH; aH--) aRZ[aH] = !1;
			clearInterval(kK), kK = -1
		}
	}
}

function ig() {
	var aRf, aRg, aRh, sx, aRi;
	this.aQI = new nP, aRh = new mO([.45, .27], [.5, .5], 2 / 3), aRg = [new fR("⚔️<br>" + L(365), function() {
			aRj(0)
		}, ab.a4i), new fR("🗡️<br>" + L(171), function() {
			aRj(1)
		}, ab.nZ), new fR("🔑<br>" + L(366), function() {
			aRj(2)
		}, ab.a4z), new fR("☰<br>" + L(367), function() {
			aRj(3)
		}, ab.a4b), new fR("", function() {
			fZ.ff(12)
		}, ab.c9, !1),
		new fR("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new fR("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], sx = new nm(gH.gJ.data[122]);
	for (var aH = 0; aH < aRg.length; aH++) aRg[aH].button.style.position = "absolute";

	function aRj(p) {
		a0.a1.setState(10), nj.nk() || nj.aQ9(), 0 === p ? fZ.eG.aJ9() : 1 === p ? (jo.jv.jT(gH.gJ.data[156].value, 1) || b4.x7.gN(), fZ.ff(19)) : 2 === p ? 0 !== a0.id || gH.gJ.data[140].value ? fZ.ff(8, fZ.fa, new fg(16)) : fZ.eG.aOA(fZ.fa, 16) :
			3 === p && fZ.ff(1)
	}
	sx.bF.style.position = "absolute", sx.bF.style.textAlign = "center", sx.bF.placeholder = L(368), this.show = function() {
		iY.setState(0), a0.a1.setState(12), this.aQI.show(), aRg[4].rf(aP.color.aRk(gH.gJ.data[121].value)), this.resize(), document.body.appendChild(sx.bF);
		for (var aH = 0; aH < aRg.length; aH++) document.body.appendChild(aRg[aH].button);
		1 !== a0.id || a0.gz < 5 || (aRi && aF.bL > aRi + 144e5 ? a0.h1.setState(14) : aRi = aF.bL)
	}, this.aE = function() {
		this.aQI.aE(), fZ.removeChild(document.body, sx.bF);
		for (var aH = 0; aH < aRg.length; aH++) fZ.removeChild(document.body, aRg[aH].button)
	}, this.resize = function() {
		this.aQI.resize(), this.aQI.resize(), aRh.resize();
		var gap = .5 * a3.gap,
			sa = 10 / 99 * .84 * aRh.b,
			aRn = .16 * aRh.c,
			a6u = .19 * aRh.b,
			aY = aRh.aY + a6u,
			sa = aRh.aZ + sa + 3 * gap,
			b = .5 * (aRh.b - gap) - a6u,
			a6u = aRh.b - 2 * a6u - aRn - gap,
			a6u = (aP.aS.hN(sx.bF, aY, sa, a6u, aRn), aP.aS.hN(aRg[4].button, aY + a6u + gap, sa, aRn, aRn), .5 * (aRh.aZ + aRh.c - (sa += aRn + gap) - gap));
		aP.aS.hN(aRg[0].button, aY, sa, b, a6u), aP.aS.hN(aRg[1].button, aY + b + gap, sa, b, a6u), aP.aS.hN(aRg[2].button, aY, sa + a6u + gap, b, a6u), aP.aS.hN(aRg[3].button, aY + b + gap, sa + a6u + gap, b, a6u);
		aP.aS.hN(aRg[5].button, aY, sa + a6u * 2 + gap * 2, b * 2 + gap, a6u / 3);
		aP.aS.hN(aRg[6].button, aY, sa + a6u * 2.33 + gap * 3, b * 2 + gap, a6u / 3);
		for (var aH = 0; aH < aRg.length; aH++) aRg[aH].button.style.font = aP.aS.aT(0, aP.aS.hY(.065 * aRh.c)), aP.aS.hK(aRg[aH].button, 5);
		sx.bF.style.font = aP.aS.aT(0, aP.aS.hY(.08 * aRh.c)), aP.aS.hK(sx.bF, 5)
	}, this.aW = function() {
		if (iY.aRo(), p4.aW(), ay = Math.floor((a0.a1.a2() ? .018 : .0137) * y.bx), aa.font = aP.aS.aT(0, Math.max(5, ay)), aP.aS.textBaseline(aa, 0), aP.aS.textAlign(aa, 2), aa.fillStyle = ab.am, aa.fillText(hs.gz, y.b, 0), text =
			"Win count: " + __fx.wins.count, textLength = aa.measureText(text).width, ay = Math.max(5, ay), aa.textAlign = "left", aa.textBaseline = "middle", aa.fillText(text, aa.canvas.width - textLength - ay / 2, 2 * ay), p5.aW(), p2.aW(), nj
			.nk()) {
			aa.imageSmoothingEnabled = !1;
			var text = nj.vo("territorial.io"),
				textLength = .84 * aRh.b / text.width;
			aa.setTransform(textLength, 0, 0, textLength, aRh.aY + .08 * aRh.b, aRh.aZ), aRf = aRf || aP.a09.aFQ(text, aP.a09.aFV, [0, 0, 0]);
			for (var aY = -1; aY <= 1; aY += 2)
				for (var aZ = -1; aZ <= 1; aZ += 2) aa.drawImage(aRf, aY, aZ);
			aa.drawImage(text, 0, 0), aa.imageSmoothingEnabled = !0;
			var ay = nj.vo("logo"),
				aRq = .6666 * textLength * text.height / ay.height,
				bU = .5 * y.b,
				bV = aRh.aZ + .5 * textLength * text.height - .5 * aRq * ay.height;
			aa.setTransform(aRq, 0, 0, aRq, bU - .6 * textLength * text.width, bV), aa.drawImage(ay, 0, 0), aa.setTransform(aRq, 0, 0, aRq, bU + .6 * textLength * text.width - aRq * ay.width, bV), aa.drawImage(ay, 0, 0), aa.setTransform(1, 0, 0,
				1, 0, 0), aa.imageSmoothingEnabled = !0
		}
	}
}

function aPG() {
	var aRt, aRu, aRv, aRw, aRx, aRy, aRz, aS0, aS1, aS2, aRr = [
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
		aRs = [
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

	function aS7(a3m, pR) {
		for (var aH = a3m; aH < pR; aH++) aRt[aH] = 4 * aA.aB(64 * kI.random(), kI.value(100)), aRu[aH] = 4 * aA.aB(64 * kI.random(), kI.value(100)), aRv[aH] = 4 * aA.aB(64 * kI.random(), kI.value(100))
	}

	function aS6(a3m, pR) {
		for (var colorsData = b4.data.colorsData, aH = a3m; aH < pR; aH++) {
			var b0 = colorsData[aH];
			aRt[aH] = 4 * (b0 >> 12), aRu[aH] = 4 * (b0 >> 6 & 63), aRv[aH] = 4 * (63 & b0)
		}
	}

	function aSE(av, aSG) {
		a8N[av] = 0, a8N[av + 1] = 0, a8N[av + 2] = aSG, a8N[av + 3] = 0, aSH(av)
	}

	function aSH(av) {
		var aY;
		l9.aMt || (aY = dw.mm(av), av = dw.d7(av), l9.aMt = aY >= a6y.mk[0] && aY <= a6y.mk[2] && av >= a6y.mk[1] && av <= a6y.mk[3])
	}
	this.yk = new Int32Array(4), this.v = function() {
		var yk = this.yk;
		yk[0] = -4 * ev.f0, yk[1] = 4, yk[2] = -yk[0], yk[3] = -yk[1]
	}, this.w = function() {
		if (aRt = new Uint8Array(b4.dg), aRu = new Uint8Array(b4.dg), aRv = new Uint8Array(b4.dg), aRw = new Uint8Array(b4.dg), aRx = new Uint8Array(b4.dg), aRy = new Uint8Array(b4.dg), aRz = new Uint8Array(b4.dg), aS0 = new Uint8Array(b4.dg),
			aS1 = new Uint8Array(b4.dg), aS2 = new Uint8Array(b4.dg), this.c4 = new Uint8Array(b4.dg), b4.e2)
			for (var zR = e4.zR, aH = b4.dg - 1; 0 <= aH; aH--) {
				var cl = zR[aH],
					at = aA.aB((aRs[cl][3] + 1) * kI.random(), kI.value(100));
				aRt[aH] = aRr[cl][0] + at * aRs[cl][0], aRu[aH] = aRr[cl][1] + at * aRs[cl][1], aRv[aH] = aRr[cl][2] + at * aRs[cl][2]
			} else 0 === b4.data.colorsType ? b4.data.selectableColor ? (aS6(0, b4.du), aS7(b4.du, b4.dg)) : aS7(0, b4.dg) : aS6(0, b4.dg);
		! function() {
			var aH, z;
			for (aH = b4.dg - 1; 0 <= aH; aH--) z = aA.aB(aRt[aH] + aRu[aH] + aRv[aH], 3), aRt[aH] += i7(z - aRt[aH], 2), aRu[aH] += i7(z - aRu[aH], 2), aRv[aH] += i7(z - aRv[aH], 2), aRt[aH] -= aRt[aH] % 4, aRu[aH] -= aRu[aH] % 4, aRv[aH] -=
				aRv[aH] % 4
		}(),
		function() {
			for (var aH = b4.dg - 1; 0 <= aH; aH--) aRt[aH] += aA.aB(aH, 128), aRu[aH] += aA.aB(aH % 128, 32), aRv[aH] += aA.aB(aH % 32, 8), aRw[aH] = aH % 8
		}(), this.aSA(),
			function() {
				for (var aH = b4.dg - 1; 0 <= aH; aH--) aRx[aH] = aRt[aH] < 32 ? aRt[aH] + 32 : aRt[aH] - 32, aRy[aH] = aRu[aH] < 32 ? aRu[aH] + 32 : aRu[aH] - 32, aRz[aH] = aRv[aH] < 32 ? aRv[aH] + 32 : aRv[aH] - 32
			}(),
			function() {
				for (var aH = b4.dg - 1; 0 <= aH; aH--) aS0[aH] = 235 < aRt[aH] ? aRt[aH] - 20 : aRt[aH] + 20, aS1[aH] = 235 < aRu[aH] ? aRu[aH] - 20 : aRu[aH] + 20, aS2[aH] = 235 < aRv[aH] ? aRv[aH] - 20 : aRv[aH] + 20
			}()
	}, this.a5z = function(player) {
		var ar = mK.a27;
		return ar[0] = aRt[player], ar[1] = aRu[player], ar[2] = aRv[player], ar
	}, this.aSA = function() {
		for (var aH = b4.dg - 1; 0 <= aH; aH--) this.c4[aH] = aRt[aH] + aRu[aH] + aRv[aH] < 280 ? 0 : 1
	}, this.mm = function(av) {
		return aA.aB(av, 4) % ev.f0
	}, this.d7 = function(av) {
		return aA.aB(av, 4 * ev.f0)
	}, this.aC3 = function(aY, aZ) {
		return Math.floor(4 * (aZ * ev.f0 + aY))
	}, this.aCG = function(av) {
		var yk = this.yk;
		return this.aGu(av + yk[0]) || this.aGu(av + yk[1]) || this.aGu(av + yk[2]) || this.aGu(av + yk[3])
	}, this.aIJ = function(av) {
		var yk = this.yk;
		return this.eB(av + yk[0]) || this.eB(av + yk[1]) || this.eB(av + yk[2]) || this.eB(av + yk[3])
	}, this.aCF = function(av, player) {
		var yk = this.yk;
		return this.aGt(av + yk[0], player) || this.aGt(av + yk[1], player) || this.aGt(av + yk[2], player) || this.aGt(av + yk[3], player)
	}, this.lt = function(av) {
		return 208 <= a8N[av + 3]
	}, this.uc = function(player, av) {
		return this.lt(av) && this.lu(player, av)
	}, this.lu = function(player, av) {
		return player === this.dz(av)
	}, this.aGv = function(av) {
		return 208 <= a8N[av + 3] && a8N[av + 3] < 224
	}, this.aAx = function(av) {
		return 224 <= a8N[av + 3] && a8N[av + 3] < 248
	}, this.kl = function(av) {
		for (var yk = this.yk, aH = 3; 0 <= aH; aH--)
			if (this.kj(av + yk[aH])) return !0;
		return !1
	}, this.dx = function(av) {
		return this.lt(av) || this.dy(av)
	}, this.kj = function(av) {
		return 0 === a8N[av + 3] && 2 === a8N[av + 2]
	}, this.dy = function(av) {
		return 0 === a8N[av + 3] && 1 === a8N[av + 2]
	}, this.xs = function(av) {
		return 0 === a8N[av + 3] && 3 === a8N[av + 2]
	}, this.eB = function(av) {
		return 0 === a8N[av + 3] && 5 === a8N[av + 2]
	}, this.aGu = function(av) {
		return 0 === a8N[av + 3] && 3 <= a8N[av + 2]
	}, this.eC = function(av) {
		return (a8N[av] >> 1 << 8) + a8N[av + 1]
	}, this.aSD = function(av) {
		return 1 & a8N[av]
	}, this.aGt = function(av, player) {
		return this.dy(av) || this.lt(av) && player !== this.dz(av)
	}, this.dz = function(av) {
		return a8N[av] % 4 * 128 + a8N[av + 1] % 4 * 32 + a8N[av + 2] % 4 * 8 + a8N[av + 3] % 8
	}, this.aBP = function(av) {
		aSE(av, 1)
	}, this.aSF = function(av) {
		aSE(av, 2)
	}, this.aC4 = function(av, player) {
		a8N[av] = aRt[player], a8N[av + 1] = aRu[player], a8N[av + 2] = aRv[player], a8N[av + 3] = 208 + aRw[player], aSH(av)
	}, this.aAP = function(av, player) {
		a8N[av] = aRx[player], a8N[av + 1] = aRy[player], a8N[av + 2] = aRz[player], a8N[av + 3] = 224 + aRw[player], aSH(av)
	}, this.aAy = function(av, player) {
		a8N[av] = aS0[player], a8N[av + 1] = aS1[player], a8N[av + 2] = aS2[player], a8N[av + 3] = 248 + aRw[player], aSH(av)
	}
}

function aH3() {
	this.aBA = function(p) {
		if ((tM = fd.tI.tM[p]) < 2) return !1;
		var tA = fd.eG.tB[p],
			aSI = 9 === tA.tD ? 333 : 512,
			tM = Math.min(tM, aSI);
		8 === tA.tD && (tM -= tM % 2);
		aSI = fd.tI.tJ[p].splice(0, tM), fd.tI.tM[p] -= tM, tM = function(vb) {
			if (fd.fq)
				for (var ay = vb.length, fi = fd.fq.fi, aH = 0; aH < ay; aH++)
					if (vb[aH].fi === fi) return aH;
			return -1
		}(aSI);
		return -1 === tM ? (fd.tI.a18 = fd.tI.a18.concat(aSI), 1e3 < fd.tI.a18.length && fd.tI.a18.splice(0, fd.tI.a18.length - 1e3), fd.eG.a1H += 29 === fZ.fa && fd.eG.sv[0] === p && 1 === fd.eG.sv[2], !1) : (8 === tA.tD && (tA.o3 = (tA.o3 + (
			tM >> 1)) % 1024, p = tM - tM % 2, tM %= 2, aSI = aSI.slice(p, 2 + p)), o2.w(tA, aSI, tM), !0)
	}, this.vk = function(tA, vb, vc) {
		var z = b4.data = new gO,
			aSK = (z.spawningSeed = tA.spawningSeed, tA.tD < 7 ? (z.gameMode = 1, z.numberTeams = tA.tD + 2) : 9 === tA.tD ? (z.gameMode = z.isZombieMode = 1, z.numberTeams = 2) : (z.gameMode = 0, z.battleRoyaleMode = 7 === tA.tD ? 0 : 10 === tA
				.tD ? 1 : 2), z.selectedPlayer = vc, z.isContest = tA.tO, z.mapType = ev.a8W(tA.ey) ? 0 : 1, ev.a8b(z, tA.ey), z.mapSeed = tA.mapSeed, z.humanCount = vb.length);
		z.selectableSpawn = 1 === z.gameMode || aSK < 100, z.colorsData = new Uint32Array(aSK), z.playerNamesData = new Array(aSK), z.gK = new Uint32Array(aSK);
		for (var aH = 0; aH < aSK; aH++) z.colorsData[aH] = vb[aH].color, z.playerNamesData[aH] = vb[aH].username, z.gK[aH] = vb[aH].fi;
		if (2 === z.battleRoyaleMode)
			for (z.elo = new Uint16Array(aSK), aH = 0; aH < aSK; aH++) z.elo[aH] = vb[aH].elo;
		iY.setState(8), ev.gD(tA.ey, z.mapSeed), b4.xA(), b4.xB = 2
	}
}

function aL7(data) {
	var pk, aSL, aSM, aSN, aSO, aSP, aSQ, colors, aSR, aSS, aST = 0,
		aSU = 0,
		aSV = !1,
		aSW = !1,
		aSX = [1, 5, 60, 240, 1440, 10080, 43200];

	function aT0(a6, a7) {
		! function(a6, a7) {
			return aSL < a6 && a6 < aSL + aSN && aSM < a7 && a7 < aSM + aSO
		}(aST = a6, aSU = a7) ? (aSV && (aF.aG = !0), aSV = !1) : (aSV = !0, aF.aG = !0)
	}
	this.show = function() {
		aSW = gH.gJ.data[127].value, pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize();
		var cl = y.hT,
			ck = pk.aMO(),
			aSg = cl * ck.aMR,
			cl = cl * ck.aMP;
		aSP = aP.aS.hU(.06), aSQ = aP.aS.hU(.04), aSL = aP.aS.hU(.06), aSM = cl + aSP, aSN = y.b - aSL - aSQ, aSO = aSg + cl - aSM - aSQ
	}, this.aW = function() {
		pk.aW(),
			function() {
				var aH, je, eU, aY, dF, ar = data.data,
					aSk = 1,
					aSl = .125,
					aSm = aSW ? 65536 : 0;
				for (aH = 0; aH < ar.length; aH++)
					for (je = ar[aH].je, eU = je.length, aSk = Math.max(eU, aSk), dF = 0; dF < eU; dF++) aSl = Math.max(je[dF], aSl), aSm = Math.min(je[dF], aSm);
				var bT = aSM + aSO,
					aCJ = aSO / (aSl - aSm),
					aCI = 1 / (aSk - 1);
				for (aa.lineWidth = a3.qP, aH = 0; aH < ar.length; aH++) {
					for (je = ar[aH].je, eU = je.length, aY = aSL, aa.beginPath(), aa.moveTo(aY + aSN, bT - aCJ * (je[eU - 1] - aSm)), dF = eU - 2; 0 <= dF; dF--) aa.lineTo(aY + aCI * dF * aSN, bT - aCJ * (je[dF] - aSm));
					aa.strokeStyle = colors[aH], aa.stroke()
				}(function(aSm, aSl, bT, aCJ) {
					aa.font = aP.aS.aT(0, .25 * aSL), aP.aS.textBaseline(aa, 1), aP.aS.textAlign(aa, 2), aa.fillStyle = colors[0];
					for (var aY = .92 * aSL, aH = 0; aH < 3; aH++) {
						var b0 = aSm + aH * (aSl - aSm) / 2;
						aa.fillText((b0 / 1e3).toFixed(3), aY, bT - aCJ * (b0 - aSm))
					}
				})(aSm, aSl, bT, aCJ),
				function(aSk) {
					var aZ = aSM + aSO + .15 * aSQ;
					aa.font = aP.aS.aT(0, Math.min(.4 * aSQ, .028 * y.b)), aP.aS.textBaseline(aa, 0), aP.aS.textAlign(aa, 2), aa.fillStyle = colors[0], aa.fillText(aP.a5A.aSp(aSR), aSL + aSN, aZ), aP.aS.textAlign(aa, 0), aa.fillText(aP.a5A.aSp(
						new Date(aSS.getTime() - 6e4 * (aSk - 1) * aSX[data.jI])), aSL, aZ)
				}(aSk),
				function(aSk, aSm, aSl) {
					if (aSV && !(aSk < 2)) {
						for (var aNL, p = (aST - aSL) / aSN * (aSk - 1), aSq = Math.floor(p), aSr = Math.floor(1 + p), aSs = p - aSq, aSt = 1e5, wS = -1, aSu = -1, aSv = aSl - (aSl - aSm) * (aSU - aSM) / aSO, ar = data.data, aH = 0; aH < ar
							.length; aH++) {
							var uz, je = ar[aH].je;
							je.length <= aSr || (je = je[aSq] + aSs * (je[aSr] - je[aSq]), (uz = Math.abs(aSv - je)) < aSt && (aSt = uz, wS = aH, aSu = je))
						} - 1 !== wS && (aSl = aSM + aSO - (aSu - aSm) / (aSl - aSm) * aSO, aa.lineWidth = .5 * a3.qP, aa.strokeStyle = colors[wS], aa.beginPath(), aa.moveTo(aSL, aSl), aa.lineTo(aST, aSl), aa.lineTo(aST, aSM + aSO), aa.stroke(),
							aa.beginPath(), aa.arc(aST, aSl, .1 * aSL, 0, 2 * Math.PI), aa.fillStyle = colors[wS], aa.fill(), aSm = aSM + aSO + .15 * aSQ, aP.aS.textAlign(aa, 1), aNL = aSk - 2 < p ? (aNL = aSS.getTime() - 6e4 * aSX[data.jI],
								new Date(aNL + (p - (aSk - 2)) * (aSR.getTime() - aNL))) : new Date(aSS.getTime() - 6e4 * (aSk - p - 1) * aSX[data.jI]), aSk = aP.a5A.aSp(aNL), p = aP.aS.measureText(aSk), aNL = aA.cI(aST, aSL + .5 * p, aSL +
								aSN - .5 * p), aa.fillStyle = aP.color.a4P(70, 50, 20), aa.fillRect(aNL - .52 * p, aSM + aSO, 1.04 * p, .55 * aSQ), aa.fillStyle = colors[0], aa.fillText(aSk, aNL, aSm), aa.font = aP.aS.aT(0, .25 * aSL), aP.aS
							.textBaseline(aa, 1), aP.aS.textAlign(aa, 2), aNL = .92 * aSL, aSk = (aSu / 1e3).toFixed(3), p = aP.aS.measureText(aSk), aSm = aNL - 1.04 * p, aa.fillStyle = aP.color.a4P(70, 50, 20), aa.fillRect(aSm, aSl - .1625 *
								aSL, aSL - aSm, .275 * aSL), aa.fillStyle = colors[wS], aa.fillText(aSk, aNL, aSl))
					}
				}(aSk, aSm, aSl)
			}(), aa.lineWidth = a3.qP, aa.strokeStyle = ab.am, aa.beginPath(), aa.moveTo(aSL, aSM), aa.lineTo(aSL, aSM + aSO), aa.lineTo(aSL + aSN, aSM + aSO), aa.stroke();
		var aH, fontSize = .5 * aSP,
			ar = (aa.font = aP.aS.aT(0, fontSize), aP.aS.textBaseline(aa, 1), aP.aS.textAlign(aa, 0), data.data),
			ay = ar.length,
			aZ = aSM - .5 * aSP,
			ct = "";
		for (aH = 0; aH < ay; aH++) ct += ar[aH].name + "  ";
		ct = ct.trim();
		var bC = aP.aS.measureText(ct),
			aY = .5 * (y.b - bC);
		for (bC > y.b && (aY = 0, aa.font = aP.aS.aT(0, y.b / bC * fontSize)), aH = 0; aH < ay; aH++) aa.fillStyle = colors[aH], aa.fillText(ar[aH].name, aY, aZ), aY += aP.aS.measureText(ar[aH].name + "  ")
	}, this.a5 = function(a6, a7) {
		aT0(a6, a7)
	}, this.aI = function(a6, a7) {
		aT0(a6, a7)
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	};
	var aH, aJ, aSd, hC, z = data.data,
		ay = z.length,
		max = 1;
	for (aH = 0; aH < ay; aH++) max = Math.max(max, z[aH].je.length);
	for (aH = 0; aH < ay; aH++)
		for (; z[aH].je.length < max;) z[aH].je.unshift(0);
	aJ = new Date, aSd = 6e4 * aJ.getTimezoneOffset(), hC = aJ.getTime() - aSd, aSR = new Date(hC), 6 === data.jI ? function(aJ, aSd) {
		var aSf = aJ.getUTCFullYear(),
			aJ = aJ.getUTCMonth() + 1;
		aSS = aJ < 12 ? new Date(Date.UTC(aSf, aJ) - aSd) : new Date(Date.UTC(aSf + 1, 0) - aSd)
	}(aJ, aSd) : (aSd = 6e4 * aSX[data.jI], aSS = data.jI <= 4 ? new Date(hC + aSd - aJ.getTime() % aSd) : new Date(hC + aSd - (aJ.getTime() + 2592e5) % aSd)), hC = aP.color, colors = [ab.am, hC.a4P(255, 0, 0), hC.a4P(0, 200, 0), hC.a4P(80, 80,
		255), hC.a4P(255, 255, 0), hC.a4P(255, 0, 255), hC.a4P(0, 255, 255), hC.a4P(255, 140, 0), hC.a4P(128, 128, 128), hC.a4P(0, 255, 140)], pk = new gU(L(369) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.jI] + ", " + aP.a5A.aSc(
		aSR), [new fR("⬅️ " + L(71), function() {
		fZ.ff(1)
	}), new fR(L(201), function() {
		fZ.ff(14)
	})], !1)
}

function aDq() {
	this.cX = function(player) {
		var uK = function(player) {
			for (var uM = eF.uM.vC(), ay = uM.length, at = Math.min(ay, 32), hC = kI.nG(ay), aH = 0; aH < at; aH++) {
				var uK = (aH + hC) % ay,
					v4 = uM[uK],
					ug = v4[0],
					w9 = v4[v4.length - 1];
				if (eF.fr.wH(player, ug) && eF.fr.uH(player, w9)) return uK;
				if (eF.fr.wH(player, w9) && eF.fr.uH(player, ug)) return 0 <= (uK = eF.uM.uR(w9, ug)) ? uK : eF.uM.uS() ? -1 : eF.uM.uT(eF.uM.uU(v4))
			}
			return -1
		}(player);
		return -1 !== uK && (uK = eF.uM.get(uK), !eF.fr.x0(player, uK)) && (mK.ar[0] = uK, !0)
	}
}

function ii(data) {
	var pk, pl;
	this.show = function() {
		data.aT1 && aEX.aEZ("account", data.fi), pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), pl.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(data.username, [new fR("⬅️ " + L(71), function() {
		aEX.clear(), fZ.gc()
	}), new fR(data.aT1 ? "🔄 " + L(370) : L(371), function() {
		fZ.ff(8, data.aT1 ? fZ.fx().iX : void 0, new fg(25, {
			fh: 0,
			fi: data.fi,
			fl: data.fl
		}))
	}, 0, 0, 1)]), pl = new gW(pk.gX, function() {
		var gg = [];
		gg.push(function() {
				var gj = new gk,
					tu = (gj.gl(L(420)), data.aTX);
				tu < 1 ? (gj.hB(L(421)), 0 === data.aTY ? gj.np(L(422)) : 1 === data.aTY ? gj.np(L(423)) : 2 === data.aTY ? gj.np(L(424)) : 3 === data.aTY ? gj.np(L(425)) : 4 === data.aTY ? gj.np(L(426)) : 5 === data.aTY ? gj.np(L(427)) :
					6 === data.aTY ? gj.np(L(428)) : gj.np(L(429))) : (gj.hB(L(430)), tu = tu < 2 ? L(431) : tu < 61 ? 2 === tu ? L(432) : L(433, [tu - 1]) : tu < 84 ? 61 === tu ? L(434) : L(435, [tu - 60]) : tu < 255 ? 84 === tu ? L(
					436) : L(437, [tu - 83]) : L(438), gj.np(tu));
				{
					var nq, ra;
					gj.gp(new gq), data.aT1 && (nq = gj.np(), gj.gp(new pw([new fR(gH.aL8.a1G(data.fi) ? L(439) : L(440), function(bF) {
						return gH.aL8.aGk(data.fi) ? (bF.textContent = L(439), ra(1)) : (bF.textContent = L(440), ra(0)), !0
					}).button])), ra = function(b0) {
						nq.textContent = b0 ? L(441) : ""
					}, gH.aL8.a1G(data.fi) && ra(1), gj.gp(new gq))
				}
				var sx = new nm({
					value: data.username,
					p: -1
				});
				sx.bF.readOnly = !0, gj.gp(sx), gj.gp(new pw([new fR(L(391), function(bF) {
					return aP.aS.he(sx.bF), aP.aS.hf(bF), !0
				}).button])), data.aT1 ? (gj.gp(new gq), gj.hB("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", gj.gp(new pw([new fR(L(443),
					function(bF) {
						return fz.g0.g1({
							fh: 3,
							fi: data.fi,
							value: 0
						}), aP.aS.hf(bF), !0
					}, ab.q1).button])), gj.gp(new pw([new fR(L(444), function(bF) {
					return fz.g0.g1({
						fh: 3,
						fi: data.fi,
						value: 1
					}), aP.aS.hf(bF), !0
				}, ab.q1).button])), gj.gp(new pw([new fR("Cheater", function(bF) {
					return fz.g0.g1({
						fh: 3,
						fi: data.fi,
						value: 2
					}), aP.aS.hf(bF), !0
				}, ab.q1).button])), gj.gp(new pw([new fR("False Reporter", function(bF) {
					return fz.g0.g1({
						fh: 3,
						fi: data.fi,
						value: 3
					}), aP.aS.hf(bF), !0
				}, ab.q1).button]))) : gj.np(L(442));
				return gj
			}()),
			function(gg) {
				var gj, nq, aTa, aTb, re, pq, rc;
				data.aT1 || ((gj = new gk).gl(L(445)), (nq = gj.np(data.aTZ.length + " / 160")).style.textAlign = "center", aTa = !0, (aTb = new gs(0, 1, function(bF) {
					bF = bF.target.value.length;
					nq.textContent = bF + " / 160", 160 < bF ? aTa && (aTa = !1, pq.rf(1)) : aTa || (aTa = !0, pq.rf(0))
				})).bF.rows = 6, aTb.bF.style.fontSize = "1em", aTb.gt(data.aTZ), gj.gp(aTb), 0 !== data.aTc ? (pq = new fR(L(446), function() {
					if (!aTa) return !0;
					fZ.ff(8, fZ.fx().iX, new fg(29, {
						fh: 1,
						ct: aTb.gf().substring(0, 160)
					}))
				}, 0, 0, 1), gj.gp(new pw([pq.button])), gj.gp(new pw([new fR(1 === data.aTc ? L(447) : L(448), function() {
					fZ.ff(8, fZ.fx().iX, new fg(29, {
						fh: 0,
						ct: ""
					}))
				}, 0, 0, 1).button])), gj.np(1 === data.aTc ? L(449, [data.aTd - 1]) : L(450, [data.aTd - 1])), gj.np(L(451, [data.aTe]))) : (re = new fR(L(452), function() {
					if (!aTb.bF.readOnly) return !0;
					fZ.ff(8, fZ.fx().iX, new fg(29, {
						fh: 1,
						ct: aTb.gf().substring(0, 160)
					}))
				}, 1), pq = new fR(L(138), function(bF) {
					if (bF.textContent === L(138)) {
						if (!aTa) return !0;
						bF.textContent = L(139), aTb.bF.readOnly = !0, re.rf(0), re.button.style.color = ab.eb
					} else rc();
					return !0
				}), gj.gp(new pw([pq.button])), gj.np(L(451, [data.aTe])), rc = function() {
					pq.button.textContent = L(138), aTb.bF.readOnly = !1, re.rf(1), re.button.style.color = ab.am
				}, gj.gp(new pw([re.button]))), gg.push(gj))
			}(gg),
			function(gg) {
				var gj;
				data.aT1 && 0 !== data.aTc && ((gj = new gk).gl(L(453)), gj.nr(data.aTZ), gj.gp(new pw([new fR(L(454, 0, "Report"), function(bF) {
					return fz.eG.rh(0) && (aP.aS.hf(bF), fz.g0.ok({
						fh: 5,
						fi: data.fi
					})), !0
				}, 0, 0, 1).button])), gg.push(gj))
			}(gg), gg.push(function() {
				var gj = new gk,
					aTG = (gj.gl(L(372)), gj.hB("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(373), L(374), L(375), L(376), L(377), L(378), L(379), L(
						380), L(381), L(382), L(383), L(384), L(385), L(386)]),
					bf = data.aTH;
				return gj.hB(L(387) + aP.aQ.z0(data.od, .01, 2) + "<br>" + L(388) + (bf + 1) + " / " + data.aTI + "<br>" + L(389) + aTG[function(bf, od) {
					if (bf < 10) return 0;
					if (bf < 30) return 1;
					if (bf < 60) return 2;
					if (3e4 <= (od = aA.aB(od, 100))) return 3;
					if (12e3 <= od) return 4;
					if (7e3 <= od) return 5;
					if (3e3 <= od) return 6;
					if (1e3 <= od) return 7;
					if (500 <= od) return 8;
					if (200 <= od) return 9;
					if (70 <= od) return 10;
					if (20 <= od) return 11;
					if (3 <= od) return 12;
					return 13
				}(bf, data.od)]), gj
			}()), data.aT1 && gg.push(function() {
				var gj = new gk,
					sx = (gj.gl(L(390)), gj.hB("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new nm({
						value: gH.gJ.data[147].value,
						p: -1
					}, 1, void 0, function(bF) {
						gH.rg.nf(147, ra(bF.target.value))
					})),
					re = (gj.gp(sx), new fR(L(140), function(bF) {
						return sx.bF.readOnly && fz.eG.rh(0) && (aP.aS.hf(bF), rc(), fz.g0.g1({
							fh: 0,
							fi: data.fi,
							value: parseInt(gH.gJ.data[147].value, 10)
						})), !0
					}, 1)),
					pq = new fR(L(138), function(bF) {
						return bF.textContent === L(138) ? (bF.textContent = L(139), sx.bF.readOnly = !0, re.rf(0), re.button.style.color = ab.eb, gH.rg.nf(147, sx.bF.value), ra(gH.gJ.data[147].value)) : rc(), !0
					}),
					nq = (gj.gp(new pw([pq.button])), gj.np()),
					ra = function(b0) {
						nq.innerHTML = fZ.eG.ri(b0, gH.gJ.data[105].value, data.fi)
					},
					rc = function() {
						pq.button.textContent = L(138), sx.bF.readOnly = !1, re.rf(1), re.button.style.color = ab.am
					};
				return ra(gH.gJ.data[147].value), gj.gp(new pw([re.button])), gj
			}());
		gg.push(function() {
			var gj = new gk,
				sx = (gj.gl(L(281)), new nm({
					value: data.fi,
					p: -1
				}));
			return sx.bF.readOnly = !0, gj.gp(sx), gj.gp(new pw([new fR(L(391), function(bF) {
				return aP.aS.he(sx.bF), aP.aS.hf(bF), !0
			}).button])), gj
		}()), data.aT1 || (gg.push(function() {
			var gj = new gk,
				a9M = (gj.gl(L(282)), new nm(gH.gJ.data[106]));
			return a9M.bF.readOnly = !0, a9M.bF.type = "password", gj.gp(a9M), gj.gp(new pw([new fR(L(283), function(bF) {
				return bF.textContent === L(283) ? (bF.textContent = L(284), a9M.bF.type = "text") : (bF.textContent = L(283), a9M.bF.type = "password"), !0
			}).button, new fR(L(391), function(bF) {
				return aP.aS.he(a9M.bF), aP.aS.hf(bF), !0
			}).button])), gj.gp(new pw([new fR(L(392), function() {
				fZ.ff(8, fZ.fx().iX, new fg(15))
			}).button])), gj.gl(L(285), "0.8em"), gj.np(L(393)), gj.np(L(394)), gj.np(L(395)), gj
		}()), gg.push(function() {
			var gj = new gk;
			return gj.gl(L(396)), gj.gp(new pw([new fR(L(397), function() {
				fZ.ff(6, fZ.fx().iX)
			}).button])), gj.gp(new pw([new fR(L(398), function() {
				gH.rg.nf(105, ""), fZ.ff(8, fZ.fx().iX, new fg(18))
			}).button])), gj.gp(new pw([new fR(L(399) + gH.gJ.data[105].value, function() {
				fZ.ff(4, 0, new uB(L(400), L(401), !0, [new fR("⬅️ " + L(71), function() {
					fZ.ff(7, fZ.j5(7).iX)
				})]))
			}, ab.q1).button])), gj
		}()), gg.push(function() {
			function aTL(p) {
				aTK[0].rf(0 === p ? ab.tl : ab.d1), aTK[1].rf(0 === p ? ab.tl : ab.q1), aTK[2].rf(p === nu.nv.length - 1 || p < 5 ? ab.tl : ab.q1)
			}
			var nu, aTK, gj = new gk;
			gj.gl(L(406)), gj.np(L(407)), gH.eG.aTN();
			return aTK = [new fR(L(280), function() {
				var p = Math.min(gH.gJ.data[117].value, nu.nv.length - 1);
				p < 1 || (p = gH.eG.aL6(p), gH.rg.nf(105, p.fi), gH.rg.nf(106, p.password), fZ.ff(8, fZ.fx().iX, new fg(18)))
			}, ab.tl, 1), new fR(L(404), function() {
				var p = Math.min(gH.gJ.data[117].value, nu.nv.length - 1);
				if (!(p < 1)) {
					nu.nv[p].remove(), nu.nv.splice(p, 1);
					for (var aH = p; aH < nu.nv.length; aH++) nu.nv[aH].name = "" + aH;
					gH.eG.aL5(p), p = gH.gJ.data[117].value, nu.nv[p].textContent = nu.nv[p].textContent.replace("⚪", "🟢"), aTL(p)
				}
			}, ab.tl, 1), new fR(L(405), function() {
				var p = Math.min(gH.gJ.data[117].value, nu.nv.length - 1);
				if (p !== nu.nv.length - 1) {
					for (var aH = nu.nv.length - 1; p < aH; aH--) nu.nv[aH].remove(), nu.nv.splice(aH, 1), gH.eG.aL5(aH);
					aTL(p)
				}
			}, ab.tl, 1)], nu = new gn(gH.gJ.data[117], aTL), aTL(0), nu.nv[0].style.marginTop = "0.5em", gj.gm(nu), gj.gp(new pw([aTK[0].button])), gj.gp(new pw([aTK[1].button])), gj.gp(new pw([aTK[2].button])), gj
		}()));
		return gg.push(function() {
				var gj = new gk,
					aTG = (gj.gl(L(411)), [L(412), L(413), L(414), L(415)]),
					bf = data.aTR;
				return gj.hB(L(416) + (data.aTS / 100).toFixed(2) + "<br>" + L(388) + (bf + 1) + " / " + data.aTI + "<br>" + L(389) + aTG[bf < 10 ? 0 : bf < 50 ? 1 : bf < 200 ? 2 : 3]), gj
			}()), gg.push(function() {
				var gj = new gk;
				return gj.gl(L(408)), gj.hB(L(409) + aP.aQ.z0(data.aTO, .1, 1) + "<br>" + L(388) + (data.aTP + 1) + " / " + data.aTI + "<br>" + L(410) + data.aTQ), gj
			}()),
			function(gg) {
				var gj = new gk,
					aTf = data.aTg,
					aTj = (gj.gl(L(455)), gj.hB(L(456, [data.aTh.length ? "[" + data.aTh + "]" : "-"])), gj.hB(L(457, [aP.aQ.z0(aTf, .01, 2)])), gj.hB(L(458, [data.aTi + 1 + " / " + data.aTI])), data.aTk),
					aTl = (gj.hB(L(459, [aP.aQ.z0(aTj, .1, 1)])), data.aTm);
				gj.hB(L(460, [aTl])), gj.hB(L(461, [aP.aQ.z0(aTj / Math.max(aTl, 1), .1, 2)])), aTf = data.aTn, gj.gl(L(462), "0.8em"), gj.hB(L(456, [data.aTo.length ? "[" + data.aTo + "]" : "-"])), gj.hB(L(457, [aP.aQ.z0(aTf, .01, 2)])),
					aTj = data.aTp, gj.hB(L(459, [aP.aQ.z0(aTj, .1, 1)])), aTl = data.aTq, gj.hB(L(460, [aTl])), gj.hB(L(461, [aP.aQ.z0(aTj / Math.max(aTl, 1), .1, 2)])), gj.hB(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", gg.push(gj)
			}(gg),
			function(gg) {
				var gj = new gk;
				gj.gl(L(463)), gj.hB(L(416) + (data.aTr / 10).toFixed(1) + "<br>" + L(389) + (data.aTs.length ? L(464, [data.aTs]) : L(465))), data.aT1 && gj.gp(new pw([new fR(L(466), function(bF) {
					return fz.eG.rh(0) && (aP.aS.hf(bF), fz.g0.ok({
						fh: 4,
						fi: data.fi
					})), !0
				}, 0, 0, 1).button]));
				gj.hB("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", gg.push(gj)
			}(gg), gg.push(function() {
				var gj = new gk;
				if (gj.gl(L(417)), gj.hB(L(418) + data.aTT + "<br>" + L(388) + (data.aTU + 1) + " / " + data.aTI + "<br>" + L(389) + fc.bh(data.aTU)), data.aT1) {
					var sx = new nm({
							value: gH.gJ.data[157].value,
							p: -1
						}, 1, void 0, function(bF) {
							gH.rg.nf(157, ra(bF.target.value))
						}),
						pq = (sx.bF.style.marginTop = "0.6em", gj.gp(sx), new fR(L(138), function(bF) {
							return bF.textContent === L(138) ? (bF.textContent = L(139), sx.bF.readOnly = !0, aTV[0].rf(0), aTV[1].rf(0), aTV[0].button.style.color = ab.eb, aTV[1].button.style.color = ab.eb, ra(gH.gJ.data[157]
								.value)) : rc(), !0
						})),
						aTV = (gj.gp(new pw([pq.button])), [new fR("−", function(bF) {
							return sx.bF.readOnly && fz.eG.rh(0) && (aP.aS.hf(bF), rc(), fz.g0.g1({
								fh: 2,
								fi: data.fi,
								value: aA.cI(parseInt(gH.gJ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new fR("+", function(bF) {
							return sx.bF.readOnly && fz.eG.rh(0) && (aP.aS.hf(bF), rc(), fz.g0.g1({
								fh: 1,
								fi: data.fi,
								value: aA.cI(parseInt(gH.gJ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						nq = gj.np(),
						ra = function(b0) {
							return b0 = aP.cA.aTW(b0, 3, 32767), nq.textContent = L(419, [b0 - 1, b0, gH.gJ.data[105].value]), b0
						};
					gj.gp(new pw([aTV[0].button, aTV[1].button]));
					for (var aH = 0; aH < 2; aH++) aTV[aH].button.style.fontSize = "1.6em";
					var rc = function() {
						pq.button.textContent = L(138), sx.bF.readOnly = !1, aTV[0].rf(1), aTV[1].rf(1), aTV[0].button.style.color = ab.am, aTV[1].button.style.color = ab.am
					};
					ra(gH.gJ.data[157].value)
				}
				return gj
			}()),
			function(gg) {
				var gj, hd;
				data.aT1 && !data.aTt || (0 === a0.id || data.aT1 || data.aTt) && ((gj = new gk).gl("Patreon"), !data.aT1 && data.aTu ? gj.gp(new pw([new fR(L(283), function() {
					fz.g0.ok({
						fh: 7,
						fi: data.fi
					}), data.aTu = 0, fZ.ff(7)
				}).button])) : data.aTt ? (gj.hB(L(467, [(data.aTv / 100).toFixed(2)]) + "<br>" + L(468, [1 + data.aTw + " / " + data.aTx]) + "<br>" + L(469, [data.aTy ? L(470) : L(471)])), data.aT1 || gj.gp(new pw([new fR(L(472),
					function() {
						fz.g0.ok({
							fh: 8,
							fi: data.fi
						}), data.aTt = 0, gH.rg.nf(160, 0), fZ.ff(7)
					}).button]))) : (gj.hB(L(473), "0.75em").style.marginBottom = "0.3em", gj.hB("  • " + L(474), "0.75em").style.whiteSpace = "pre", gj.hB("  • " + L(475), "0.75em").style.whiteSpace = "pre", gj.hB("  • " + L(476),
						"0.75em").style.whiteSpace = "pre", gj.hB(L(477), "0.75em").style.marginTop = "1.0em", gj.hB(L(478), "0.75em").style.marginTop = "1.0em", gj.hB("<a href='" + uC.a7D +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", hd = "https://www.patreon.com/oauth2/authorize?state=" + data.fi +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", gj.hB(L(479), "0.75em").style.marginTop = "1.0em", gj.hB("<a href='" + hd +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aT1 || (gj.gp(new gq), gj.gp(new pw([new fR(L(284), function() {
						fz.g0.ok({
							fh: 6,
							fi: data.fi
						}), data.aTu = 1, fZ.ff(7)
					}).button])), gj.hB(L(480), "0.75em").style.marginTop = "0.75em")), gg.push(gj))
			}(gg),
			function(gg) {
				var gj, nu, aTK, p, aTL;
				data.aT1 || gH.aL8.get().length && ((gj = new gk).gl(L(402)), p = 0, aTL = function() {
					var aTM = gH.aL8.get().length;
					aTK[0].rf(p === aTM ? ab.tl : ab.d1), aTK[1].rf(p === aTM ? ab.tl : ab.q1), aTK[2].rf(p === aTM || aTM - 1 <= p || p < 5 ? ab.tl : ab.q1)
				}, aTK = [new fR(L(403), function() {
					fZ.ff(8, void 0, new fg(25, {
						fh: 0,
						fi: gH.aL8.get()[p],
						fl: 0
					}))
				}, ab.tl, 1), new fR(L(404), function() {
					gH.aL8.aGm(p), nu.nv[p].remove(), nu.nv.splice(p, 1);
					for (var aH = p; aH < nu.nv.length; aH++) nu.nv[aH].name = "" + aH;
					gH.aL8.get().length && (p = Math.max(p - 1, 0), nu.nv[p].textContent = nu.nv[p].textContent.replace("⚪", "🟢")), aTL()
				}, ab.tl, 1), new fR(L(405), function() {
					for (var hC = nu.nv.length - 1; p < hC; hC--) gH.aL8.aGm(hC), nu.nv[hC].remove(), nu.nv.splice(hC, 1);
					aTL()
				}, ab.tl, 1)], aTL(), (nu = new gn(gH.aL8.aGj(), function(aH) {
					p = aH, aTL()
				})).nv[0].style.marginTop = "0.5em", gj.gm(nu), gj.gp(new pw([aTK[0].button])), gj.gp(new pw([aTK[1].button])), gj.gp(new pw([aTK[2].button])), gg.push(gj))
			}(gg), gg
	}())
}

function aPC() {
	var r, aTz, b, c, h, aU0, aU1, rn, canvas, rs, aU2;

	function d7() {
		return Math.floor((y.b - b) / 2) < c7.c + 2 * a3.gap ? y.c - c - 4 * a3.gap - c7.c : y.c - c - 2 * a3.gap
	}
	this.w = function() {
		aU2 = r = !1, h = .61, aU0 = .07, aU1 = .09, rs = rn = c = 0
	}, this.resize = function() {
		var ao, bS, cl, aU6, aU7, q8;
		r && (b = i9(b = a0.a1.a2() ? Math.floor(.69 * y.bx) : Math.floor(.5 * y.bx), d5(y.b - 2 * a3.gap, 10)), b = i9(b, Math.floor(3.57 * d5(y.c - 2 * a3.gap, 3))), c = Math.floor(.28 * b), (canvas = document.createElement("canvas")).width =
			b, canvas.height = c, ao = canvas.getContext("2d", {
				alpha: !0
			}), bS = Math.floor(1 + c / 40), ao.clearRect(0, 0, b, c), ao.fillStyle = ab.ac, ao.fillRect(bS, bS, b - 2 * bS, c - 2 * bS), ao.lineJoin = "bevel", ao.lineWidth = 2 * bS, ao.strokeStyle = ab.am, ao.strokeRect(bS, bS, b - 2 * bS,
				c - 2 * bS), ao.imageSmoothingEnabled = !1, cl = nj.get(aTz), aU6 = cl.width, q8 = (1 === aTz ? .85 : 21 === aTz ? .666 : .9) * h * c / (aU7 = cl.height), ao.setTransform(q8, 0, 0, q8, Math.floor((b - q8 * aU6) / 2), Math
				.floor((c - q8 * aU7) / 2)), ao.drawImage(cl, 0, 0), ao.setTransform(1, 0, 0, 1, Math.floor(b - aU1 * c - aU0 * c - bS), Math.floor(bS + aU0 * c)),
			function(ao, ay) {
				ao.lineWidth = Math.floor(1 + c / 80), ao.strokeStyle = ab.am, ao.beginPath(), ao.moveTo(0, 0), ao.lineTo(ay, ay), ao.moveTo(0, ay), ao.lineTo(ay, 0), ao.stroke()
			}(ao, Math.floor(aU1 * c)), ao.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(b0, aU4, a9e, aU5) {
		r || aU5 && aU2 || (aTz = a9e ? 21 : b0 ? 1 : 2, r = aU2 = !0, this.resize(), p9.aE(), c7.cH(), rs = aF.bL, rn = aU4 ? 1 : 0)
	}, this.cX = function() {
		!r || 1 <= rn || (rn = 1 < (rn += 5e-4 * (aF.bL - rs)) ? 1 : rn, rs = aF.bL, aF.aG = !0)
	}, this.a5 = function(aY, aZ) {
		return !(!r || rn <= 0 || (aY -= Math.floor((y.b - b) / 2), aZ -= d7(), aY < 0) || aZ < 0 || b < aY || c < aZ || (b - c / 3 < aY && aZ < c / 3 && (r = !1, aF.aG = !0), 0))
	}, this.aW = function() {
		!r || rn <= 0 || (aa.globalAlpha = rn, aa.drawImage(canvas, Math.floor((y.b - b) / 2), d7()), aa.globalAlpha = 1)
	}
}

function aU9() {
	function aUC(ar) {
		if (0 === ar.length) gH.rg.nf(116, "");
		else {
			for (var aUD = ar[0], aH = 1; aH < ar.length; aH++) aUD += ";" + ar[aH];
			gH.rg.nf(116, aUD)
		}
	}
	this.aUA = function() {
		gH.gJ.data[110].value.length && (gH.gJ.data[106].value = gH.gJ.data[110], gH.rg.nf(110, ""), this.aTN())
	}, this.aTN = function() {
		var ar = gH.gJ.data[116].value.split(";");
		for (ar.length % 2 == 1 && ar.pop(), ar.unshift(gH.gJ.data[106].value), ar.unshift(gH.gJ.data[105].value), aH = 2; aH < ar.length; aH += 2)
			if (ar[aH] === ar[0]) {
				ar.splice(aH, 2);
				break
			} for (var aUB = [], aH = 0; aH < ar.length; aH += 2) aUB.push(ar[aH]);
		aUC(ar), gH.gJ.data[117].value = 0, gH.gJ.data[117].go = aUB
	}, this.aL5 = function(p) {
		gH.gJ.data[117].go.splice(p, 1), gH.gJ.data[117].value = Math.min(p, gH.gJ.data[117].go.length - 1);
		var ar = gH.gJ.data[116].value.split(";");
		ar.splice(2 * p, 2), aUC(ar)
	}, this.aL6 = function(p) {
		var ar = gH.gJ.data[116].value.split(";");
		return {
			fi: ar[2 * p],
			password: ar[2 * p + 1]
		}
	}, this.gI = function() {
		var b0 = aA.cI(gH.gJ.data[121].value, -1, 262143);
		return b0 = -1 === b0 ? ~~(262144 * Math.random()) : b0
	}, this.aUE = function() {
		for (var ar = document.cookie.split(";"), aH = 0; aH < ar.length; aH++) {
			var ct = ar[aH].trim(),
				v9 = ct.indexOf("="),
				v9 = 0 <= v9 ? ct.substring(0, v9) : ct;
			document.cookie = v9 + "=;expires=0;path=/", document.cookie = v9 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = v9 + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function aP7() {
	this.data = new aMv;
	var aUF = (new px).L84,
		aUG = (this.aQL = aUF, !(this.a0l = "en"));
	this.w = function() {
		var ct, ar;
		aUG = !1, ("en" === (ct = gH.gJ.data[12].value).split("-")[0].toLowerCase() ? (oi.aQL = aUF, oi.a0l = ct, 1) : gH.gJ.data[12].value === gH.gJ.data[145].value && 0 < gH.gJ.data[146].value && (ct = gH.gJ.data[146].value, (ar = gH.gw.aCO(ct,
			!1)).length === ct) && !!aP.g9.a6X(ar) && function(ar) {
			for (var ay = ar.length, c = 0; c < ay; c++) ar[c] = ar[c].replace("&#39;", "'");
			var aUM = gH.gw.aCO(ay, !0);
			if (ay !== aUM.length) return !1;
			if (!aP.g9.a6X(aUM)) return !1;
			for (var at = aUF.length, aHV = new Array(at), aTa = at === ay, eU = Math.min(ay, at), aH = 0; aH < at; aH++)
				if (aHV[aH] = aUF[aH], aH < ay && aUM[aH] === aHV[aH]) aHV[aH] = ar[aH];
				else {
					aTa = !1;
					for (var dL = 0; dL < eU; dL++)
						if (aUM[dL] === aHV[aH]) {
							aHV[aH] = ar[dL];
							break
						}
				} return oi.aQL = aHV, oi.a0l = gH.gJ.data[12].value, aTa
		}(ar)) || (aUG = !0)
	}, this.aPg = function() {
		e4.v(), e8.v(), pA.v(), aM.v(), p5.w(), fc = new bW
	}, this.aQM = function() {
		return this.aQL === aUF || !aUF.length
	}, this.aL2 = function() {
		var aUN;
		return !!aUG && (aUG = !1, 0 !== aUF.length) && (aUN = gH.gJ.data[12].value, fz.hu.aEL(0, aUN.slice(0, 20)), !0)
	}, this.aUO = function(ar) {
		ar.length !== aUF.length ? 8 === fZ.fa && fZ.fx().jV(30, 0, 1) : (this.aQL = ar, this.a0l = gH.gJ.data[12].value, gH.rg.nf(145, this.a0l), gH.rg.nf(146, ar.length), gH.gw.aCS(ar, !1), gH.gw.aCS(aUF, !0), 8 === fZ.fa ? fZ.fx().jV(30) :
			0 === iY.iZ() && 5 === fZ.fa && fZ.eG.aKy())
	}, this.aET = function() {
		var oh, ar = navigator.languages;
		return ar && ar.length ? (oh = Math.max(oi.data.oj(ar[0]), 0), 1 === ar.length ? [oh, oh] : [oh, Math.max(oi.data.oj(ar[1]), 0)]) : [0, 0]
	}
}

function aPh() {
	var aY, aZ, c, sa, aUP, aUQ, aUR, aUS, aUT, b, hd, aUU;
	this.r = !1, this.w = function(ct, aUV) {
		if (1 === a0.id && 13 <= a0.gz && a0.gz < 18) return aUV ? void(hd = ct) : hd !== ct ? void 0 : void a0.h1.saveString(200, ct);
		aUV && (hd = ct, (aUU = document.createElement("a")).appendChild(document.createTextNode(hd)), this.r = !0, aUU.title = hd, aUU.target = "_blank", aUU.href = hd, aUU.style.textAlign = "center", aUU.style.color = ab.am, aUU.style
			.position = "absolute", aUU.style.padding = "0px", aUU.style.margin = "0px", this.resize(), document.body.appendChild(aUU), aF.aG = !0)
	}, this.aE = function() {
		return !(!this.r || (fZ.removeChild(document.body, aUU), this.r = !1))
	}, this.a5 = function(a1d, a1e) {
		return !!this.r && ((a1d < aY || a1e < aZ || aY + b < a1d || aZ + c < a1e || aY + b - sa < a1d && a1e < aZ + sa) && (aF.aG = !0, this.r = !1, fZ.removeChild(document.body, aUU)), !0)
	}, this.resize = function() {
		var br, aUW;
		this.r && (aUS = Math.floor(.8 * (a0.a1.a2() ? y.b > y.c ? .6 : .55 : .4) * y.bx), sa = Math.floor(.15 * aUS), aUP = Math.floor(.35 * sa), aUQ = Math.floor(.5 * sa), aUR = Math.floor(2.5 * aUQ), c = sa + aUP + 3 * aUQ, br = aP.aS.aT(1,
			aUP / y.hT), aUT = Math.floor(y.hT * aO.measureText(hd, br)), aUW = b = (aUS < aUT ? aUT : aUS) + 2 * aUR, b = Math.min(b, y.b - 2 * (a0.a1.a2() ? 2 : 1) * a3.gap), br = aP.aS.aT(1, b / aUW * aUP / y.hT), aUT = Math.floor(y
			.hT * aO.measureText(hd, br)), aY = Math.floor((y.b - b) / 2), aZ = Math.floor((y.c - c) / 2), aUU.style.font = br, aUU.style.top = Math.floor((aZ + 1.4 * aUQ + sa) / y.hT) + "px", aUU.style.left = Math.floor((aY + (b - aUT) /
			2) / y.hT) + "px")
	}, this.aW = function() {
		this.r && (aa.fillStyle = ab.ac, aa.fillRect(aY, aZ + sa, b, c - sa), aa.fillStyle = ab.a52, aa.fillRect(aY, aZ, b, sa), aa.fillStyle = ab.am, aa.lineWidth = a3.qP, aa.strokeStyle = ab.am, aa.strokeRect(aY, aZ, b, c), aa.fillRect(aY, aZ +
			sa, b, a3.qP), aa.font = aP.aS.aT(1, .48 * sa), aP.aS.textAlign(aa, 1), aP.aS.textBaseline(aa, 1), aa.fillText(L(481), Math.floor(aY + (b - .5 * sa) / 2), Math.floor(aZ + .55 * sa)), aC.al(Math.floor(aY + b - .8 * sa), Math
			.floor(aZ + .25 * sa), Math.floor(.5 * sa)), aa.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a59() {
	this.hx = function(b0) {
		return [b0 >> 12 & 63, b0 >> 6 & 63, 63 & b0]
	}, this.aUX = function(b0) {
		for (var ar = this.hx(b0), aH = 0; aH < 3; aH++) ar[aH] = ~~(4.05 * ar[aH]);
		return ar
	}, this.aRk = function(b0) {
		b0 = this.aUX(b0);
		return aP.color.a4P(b0[0], b0[1], b0[2])
	}, this.aUY = function(ar) {
		for (var aH = 0; aH < 3; aH++) ar[aH] = ~~(ar[aH] / 4.04);
		return (ar[0] << 12) + (ar[1] << 6) + ar[2]
	}, this.a4P = function(bf, ej, dL) {
		return "rgb(" + bf + "," + ej + "," + dL + ")"
	}, this.a4R = function(bf, ej, dL, dF) {
		return "rgba(" + bf + "," + ej + "," + dL + "," + dF.toFixed(3) + ")"
	}, this.tn = function(cl) {
		for (var ar = cl.split("(")[1].split(","), a27 = mK.a27, aH = 0; aH < 3; aH++) a27[aH] = parseInt(ar[aH]);
		return 4 === ar.length ? a27[3] = 255 * parseFloat(ar[3].slice(0, -1)) : a27[3] = 255, a27
	}, this.tp = function(aUZ, z) {
		for (var ar = aUZ.slice(aUZ.indexOf("(") + 1, aUZ.indexOf(")")).split(","), a27 = mK.a27, aH = 0; aH < 3; aH++) a27[aH] = aA.cI(parseInt(ar[aH].trim(), 10) + z, 0, 255);
		return 3 === ar.length ? this.a4P(a27[0], a27[1], a27[2]) : (aUZ = parseFloat(ar[3].trim()), this.a4R(a27[0], a27[1], a27[2], aUZ = 0 === aUZ ? .3 : aUZ))
	}, this.aKT = function(aUa, aUb) {
		for (var fE = 0, aH = 0; aH < 3; aH++) fE += Math.abs(aUb[aH] - aUa[aH]);
		if (!(240 <= fE))
			for (aH = 0; aH < 3; aH++) aUb[aH] = aUa[aH] + (aUa[aH] < 128 ? 80 : -80)
	}, this.aUc = function(ar) {
		for (var ct = "#", aH = 0; aH < 3; aH++) {
			var bf = ar[aH].toString(16);
			ct += 1 === bf.length ? "0" + bf : bf
		}
		return ct
	}, this.aUd = function(ct) {
		var bf, ej;
		return ct.length < 7 ? ab.eX : (bf = parseInt(ct.slice(1, 3), 16), ej = parseInt(ct.slice(3, 5), 16), ct = parseInt(ct.slice(5, 7), 16), this.a4P(bf, ej, ct))
	}
}

function aPO() {
	var aUe, aUf, kj, a60;
	this.w = function() {
		var aH, aY, aZ, hw, aUg, b, c, ao, rF, dZ, b0, dP, wT, dF, a93;
		if (function() {
				if (kj = !0, a60 = "rgb(" + ev.kq[0] + "," + ev.kq[1] + "," + ev.kq[2] + ")", ev.a8a(ev.ey)) return 1;
				return kj = !1, 0
			}()) aUf = null;
		else {
			for (aUe = aA.aB(96, 4), aUg = 1 === ev.ey ? (hw = 0, 160) : (hw = 128, 32), a60 = "rgb(" + hw + "," + hw + "," + hw + ")", aUf = new Array(4), aH = 3; 0 <= aH; aH--) {
				if (aUf[aH] = document.createElement("canvas"), b = aH % 2 == 0 ? ev.f0 : aUe, c = aH % 2 == 0 ? aUe : ev.f1 + 2 * aUe, aUf[aH].width = b, aUf[aH].height = c, dZ = (rF = (ao = aUf[aH].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, b, c)).data, aH % 2 == 0)
					for (aZ = aUe - 1; 0 <= aZ; aZ--)
						for (b0 = aUg + Math.floor((aZ + 1) * (hw - aUg) / (aUe + 1)), aY = b - 1; 0 <= aY; aY--) dZ[dP = 4 * ((0 === aH ? aUe - aZ - 1 : aZ) * b + aY)] = b0, dZ[dP + 1] = b0, dZ[dP + 2] = b0, dZ[dP + 3] = 255;
				else {
					for (aY = aUe - 1; 0 <= aY; aY--)
						for (b0 = aUg + Math.floor((aY + 1) * (hw - aUg) / (aUe + 1)), aZ = c - 1 - aUe; aUe <= aZ; aZ--) dZ[dP = 4 * (aZ * b + (3 === aH ? aUe - aY - 1 : aY))] = b0, dZ[dP + 1] = b0, dZ[dP + 2] = b0, dZ[dP + 3] = 255;
					for (dF = 1; 0 <= dF; dF--)
						for (aY = aUe - 1; 0 <= aY; aY--)
							for (aZ = aUe - 1; 0 <= aZ; aZ--) wT = (Math.pow(aY * aY + aZ * aZ, .5) + 1) / (aUe + 1), b0 = aUg + Math.floor((1 < wT ? 1 : wT) * (hw - aUg)), dZ[dP = 4 * ((0 === dF ? aUe - aZ - 1 : aZ + dF * (c - aUe)) * b + (1 ===
								aH ? aY : aUe - aY - 1))] = b0, dZ[dP + 1] = b0, dZ[dP + 2] = b0, dZ[dP + 3] = 255
				}
				ao.putImageData(rF, 0, 0)
			}
			a93 = aUg, ev.kn.fillStyle = "rgb(" + a93 + "," + a93 + "," + a93 + ")", ev.kn.fillRect(0, 0, ev.f0, 1), ev.kn.fillRect(0, ev.f1 - 1, ev.f0, 1), ev.kn.fillRect(0, 0, 1, ev.f1), ev.kn.fillRect(ev.f0 - 1, 0, 1, ev.f1)
		}
	}, this.vm = function() {
		var dF = kj ? 0 : -aUe;
		iE(dF, dF, ev.f0 - 2 * dF, ev.f1 - 2 * dF, a6y.mg, a6y.mh, a6y.mi, a6y.mj) || (aa.fillStyle = a60, aa.fillRect(0, 0, y.b, y.c))
	}, this.aW = function() {
		kj || (iD(0, -aUe, ev.f0, aUe, a6y.mg, a6y.mh, a6y.mi, a6y.mj) && aa.drawImage(aUf[0], a6y.me, a6y.mf - aUe), iD(ev.f0, -aUe, aUe, ev.f1 + 2 * aUe, a6y.mg, a6y.mh, a6y.mi, a6y.mj) && aa.drawImage(aUf[1], a6y.me + ev.f0, a6y.mf - aUe), iD(
			0, ev.f1, ev.f0, aUe, a6y.mg, a6y.mh, a6y.mi, a6y.mj) && aa.drawImage(aUf[2], a6y.me, a6y.mf + ev.f1), iD(-aUe, -aUe, aUe, ev.f1 + 2 * aUe, a6y.mg, a6y.mh, a6y.mi, a6y.mj) && aa.drawImage(aUf[3], a6y.me - aUe, a6y.mf - aUe))
	}
}

function aPQ() {
	var aUj = 0,
		aUk = !0;

	function aUl(id) {
		id = [L(482), L(483), L(484), L(485)][id];
		d8.eY(id)
	}
	this.cX = function() {
		var aJ, tW;
		aF.bL < aUj || (aUj = aF.bL + 5e3, b4.bw) || b4.o0 || aP.cA.la(b4.b5) || (aJ = new Date, tW = aJ.getUTCSeconds(), aUk ? tW < 50 && (aUk = !1) : tW < 50 || (aUk = !0, (tW = (aJ.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == tW || 20 == tW ||
			40 == tW ? b4.f7 < 7 && aUl(0) : 10 == tW || 30 == tW || 50 == tW ? 7 !== b4.f7 && 10 !== b4.f7 || aUl(1) : 5 == tW || 25 == tW || 45 == tW ? 8 === b4.f7 && aUl(2) : 35 == tW && 9 === b4.f7 && aUl(3))))
	}
}

function aUm() {
	this.a3C = 28, this.tt = 0, this.a3B = null;
	var aUn = this.a3D = null;

	function aUq(rD, aUr) {
		var aY, aZ, dG, wj, dT = aP.aS.hI(rD, rD),
			hJ = aP.aS.getContext(dT, !0),
			rF = aP.aS.getImageData(hJ, rD, rD),
			dZ = rF.data,
			at = (rD >> 1) - .5,
			aUs = .5 + at;
		for (aUs *= aUs, aZ = 0; aZ < rD; aZ++)
			for (aY = 0; aY < rD; aY++) wj = (wj = aY - at) * wj + (wj = aZ - at) * wj, dZ[dG = 4 * (aZ * rD + aY)] = aUr[0], dZ[1 + dG] = aUr[1], dZ[2 + dG] = aUr[2], dZ[3 + dG] = (aUs - wj) * aUr[3] / aUs;
		return hJ.putImageData(rF, 0, 0), dT
	}

	function aUv(aH, hJ, dT, rD) {
		var highlight, aY, aZ;
		0 !== b2.bN[aH] && 0 !== b2.b3[aH] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aH]) && (rD *= 2), aY = b2.a3F[aH] + b2.a3G[aH] + 1 - rD - 2 >> 1, aZ = b2.a3H[aH] + b2.a3I[aH] + 1 - rD - 2 >> 1, highlight ?
			hJ.drawImage(dT[b4.e2 ? 9 === b4.f7 && 5 === e8.eA[aH] ? 3 : e4.e7[aH] : aH < b4.du ? 1 : 0], aY, aZ, rD, rD) : hJ.drawImage(dT[b4.e2 ? 9 === b4.f7 && 5 === e8.eA[aH] ? 3 : e4.e7[aH] : aH < b4.du ? 1 : 0], aY, aZ))
	}
	this.w = function() {
		var cP;
		this.tt = 700,
			function(cP) {
				var rD = cP.a3C;
				if (cP.a3D = [], aUn = [], b4.e2) {
					for (var aH = 0; aH <= b4.zI; aH++) cP.a3D.push(aUq(rD, e4.zE[e4.e6[aH]])), aUn.push(aUq(rD >> 1, e4.zE[e4.e6[aH]]));
					9 === b4.f7 && aUn.push(aUq(rD, e4.zE[1]))
				} else cP.a3D.push(aUq(rD, e4.zE[7])), cP.a3D.push(aUq(rD, e4.zE[4])), aUn.push(aUq(rD >> 1, e4.zE[7]))
			}(this),
			function(cP, aUt) {
				var aH, a3B = cP.a3B,
					hJ = aP.aS.getContext(a3B, !0),
					ay = b4.dg,
					rD = cP.a3C >> 1;
				hJ.imageSmoothingEnabled = !1, hJ.setTransform(1, 0, 0, 1, 0, 0), aUt && hJ.clearRect(0, 0, a3B.width, a3B.height);
				if (9 === b4.f7) {
					rD <<= 1;
					cP = a3w.a3x[5];
					for (aH = ay - cP; aH < ay; aH++) aUv(aH, hJ, aUn, rD);
					ay -= cP, rD >>= 1
				}
				for (aH = b4.du; aH < ay; aH++) aUv(aH, hJ, aUn, rD)
			}(this, null !== (cP = this).a3B && cP.a3B.width === ev.f0 - 2 && cP.a3B.height === ev.f1 - 2 || (cP.a3B = aP.aS.hI(ev.f0 - 2, ev.f1 - 2), !1)), b4.bv || this.aPj()
	}, this.zD = aUq, this.aPj = function() {
		for (var ay = b4.du, rD = this.a3C, a3D = this.a3D, hJ = aP.aS.getContext(this.a3B, !0), aH = 0; aH < ay; aH++) aUv(aH, hJ, a3D, rD)
	}
}

function aJ3() {
	aA6 = 0, aUw = 2048, aAO = new Uint32Array(4 * aUw), aUx = 0, aUy = new Uint32Array(aUw), aUz = new Uint8Array(ev.f0 * ev.f1)
}

function pc(player) {
	aA3 = player, aA2 = !1, aV0(), aV1();
	for (var aH = m0.a7J(aA3) - 1; 0 <= aH; aH--) aA4 = aH, aV2();
	aA2 && aV3()
}

function aV3() {
	lb.aGp(), lb.aGq()
}

function aV2() {
	a9t = m0.a7f(aA3, aA4), aA5 = m0.a7g(aA3, aA4), aAL = m0.a7j(aA3, aA4), aV4(), (0 !== aA6 && (aV5(), aV6()) ? a9q : a9v)()
}

function aV6() {
	if (!((aAJ = aA.aB(aA5, aA6)) > b4.aAC)) {
		if (!aAL) return !1;
		var aV7 = aA6 * (1 + b4.aAC);
		aA5 += aP.cA.aAM(aA3, aV7 - aA5), aAJ = aA.aB(aA5, aA6)
	}
	return !0
}

function aV5() {
	for (var aH = aA6 - 1; 0 <= aH; aH--) aUz[aA.aB(aAO[aH], 4)] = 0
}

function a9v() {
	1 === m0.a7J(aA3) && m4.ph(aA3);
	var aJ = aP.cA.lx(aA3, aA5);
	aM.lw(aA3, aA5 - aJ, 12), m0.a7e(aA3, aA4)
}

function aV0() {
	for (var player = aA3, m3 = b2.m3, ay = Math.min(m3[player].length, aUw), eU = 0, aV8 = aUy, aH = ay - 1; 0 <= aH; aH--) aV8[eU++] = m3[player][aH];
	aUx = eU
}

function aV1() {
	for (var aH = b2.m3[aA3].length - 1; 0 <= aH; aH--) dw.dx(b2.m3[aA3][aH]) && dw.aAP(b2.m3[aA3][aH], aA3);
	b2.m3[aA3] = []
}

function aV4() {
	aA6 = 0, (a9t === b4.dg ? aV9 : aVA)()
}

function aVA() {
	for (var dP, hS, aH, yk = dw.yk, z = 3; 0 <= z; z--)
		for (aH = aUx - 1; 0 <= aH; aH--) dP = aUy[aH] + yk[z], hS = aA.aB(dP, 4), 0 === aUz[hS] && dw.lt(dP) && dw.dz(dP) === a9t && (aUz[hS] = 1, aAO[aA6++] = dP)
}

function aV9() {
	for (var dP, hS, aH, yk = dw.yk, z = 3; 0 <= z; z--)
		for (aH = aUx - 1; 0 <= aH; aH--) dP = aUy[aH] + yk[z], hS = aA.aB(dP, 4), 0 === aUz[hS] && dw.dy(dP) && (aUz[hS] = 1, aAO[aA6++] = dP)
}

function m8() {
	this.resize = function() {
		var aH, aTM = document.head.querySelector("style#ss");
		if (aTM)
			for (aH = aTM.sheet.cssRules.length - 1; 0 <= aH; aH--) aTM.sheet.deleteRule(0);
		else(aTM = document.createElement("style")).id = "ss", document.head.appendChild(aTM);
		var aNL = "::-webkit-scrollbar",
			aVB = aP.aS.hL(a3.hM),
			rD = aP.aS.hL(Math.max(aP.aS.hR(.012), 8));
		try {
			aTM.sheet.insertRule(aNL + "{width:" + rD + ";height:" + rD + ";}", aTM.sheet.cssRules.length), aTM.sheet.insertRule(aNL + "-thumb{background-color:white;}", aTM.sheet.cssRules.length), aTM.sheet.insertRule(aNL +
				"-track{background:" + ab.c9 + ";}", aTM.sheet.cssRules.length), aTM.sheet.insertRule(aNL + "-track:horizontal{border-top:" + aVB + " solid white;}", aTM.sheet.cssRules.length), aTM.sheet.insertRule(aNL +
				"-track:vertical{border-left:" + aVB + " solid white;}", aTM.sheet.cssRules.length), aTM.sheet.insertRule(aNL + "-button{display:none;}", aTM.sheet.cssRules.length)
		} catch (bF) {
			for (console.log("error 3425: " + bF), aH = aTM.sheet.cssRules.length - 1; 0 <= aH; aH--) aTM.sheet.deleteRule(0)
		}
	}
}

function aPR() {
	this.aVC = [], this.aVD = [], this.w = function() {
		this.aVC = [], this.aVD = []
	}, this.cX = function() {
		0 <= this.aVC.length && this.aVE(this.aVC), 0 <= this.aVD.length && this.aVE(this.aVD)
	}, this.aVE = function(ar) {
		for (var dL = -1, aH = ar.length - 1; 0 <= aH; aH--)
			if (ar[aH].bL--, ar[aH].bL <= 0) {
				dL = aH;
				break
			} for (aH = dL; 0 <= aH; aH--) ar.shift()
	}, this.aFt = function(id, ci, aVF) {
		return this.aII(this.aVC, id, ci, aVF)
	}, this.aVG = function(id, ci, aVF) {
		return this.aII(this.aVD, id, ci, aVF)
	}, this.aII = function(ar, id, ci, aVF) {
		return ! function(ar, id, ci) {
			var aH, hC;
			for (aH = ci.length - 1; 0 <= aH; aH--)
				for (hC = ar.length - 1; 0 <= hC; hC--)
					if (ar[hC].player === ci[aH] && id === ar[hC].id) return 1;
			return
		}(ar, id, ci) && (aVF && function(ar, id, ci) {
			var aH;
			for (aH = ci.length - 1; 0 <= aH; aH--) ar.push({
				player: ci[aH],
				id: id,
				bL: 384
			})
		}(ar, id, ci), !0)
	}
}

function zc(a9n, data) {
	var ay = data.za.length,
		aVJ = document.createElement("div"),
		aVK = document.createElement("div"),
		nT = document.createElement("div"),
		aVL = new Array(ay),
		gg = new Array(ay),
		aVM = new Array(data.ha.length),
		aVN = aP.color.a4R(70, 70, 0, .35);

	function tp() {
		this.style.backgroundColor = aP.color.tp(aVN, 160)
	}

	function aVR() {
		this.style.backgroundColor = aVN
	}

	function aVT() {
		var dF;
		for (a9n.style.font = aP.aS.aT(0, aP.aS.hV(.026, .5, .03)), aH = 1; aH < aVM.length; aH++) aP.aS.hK(aVM[aH], 4);
		if (aP.aS.hK(aVJ, 2), ay) {
			for (var fB, d = aVJ.offsetWidth, e = nT.offsetWidth, aH = 0; aH < aVM.length; aH++) fB = .01 * data.zb[aH] * e, aVM[aH].style.width = (100 * fB / d).toFixed(2) + "%";
			var at = data.za[0].length;
			for (aH = 0; aH < ay; aH++)
				for (aP.aS.hK(aVL[aH], 2), dF = 1; dF < at; dF++) aP.aS.hK(gg[aH][dF], 4);
			aVK.aVO && (aVK.scrollTop = aVK.aVO)
		}
	}
	this.resize = function() {
			aVT(), aVT()
		}, a9n.style.display = "flex", a9n.style.flexDirection = "column", aVK.style.overflowX = "hidden", aVK.style.overflowY = "auto", aVK.addEventListener("scroll", function() {
			this.aVO = this.scrollTop
		}),
		function() {
			var z, aH, za = data.za,
				at = ay ? za[0].length : 0;
			for (aH = 0; aH < ay; aH++) {
				aVL[aH] = document.createElement("div"), aVL[aH].style.backgroundColor = function(aH) {
					return aH % 2 == 1 ? aP.color.a4R(130, 130, 130, .35) : ab.sQ
				}(aH), aVL[aH].style.width = "100%", aVL[aH].style.display = "flex", gg[aH] = new Array(at);
				for (var dF = 0; dF < at; dF++) gg[aH][dF] = z = document.createElement("div"), z.style.display = "flex", z.style.justifyContent = "center", z.style.wordBreak = "break-all", z.style.padding = "0.4em 0em", z.style.width = data.zb[dF] +
					"%", z.innerHTML = za[aH][dF].b0, 1 === za[aH][dF].aJ && (z.name = "" + aH, z.style.color = ab.eb, z.style.backgroundColor = aVN, z.addEventListener("mouseover", tp), z.addEventListener("mouseout", aVR), function(z, fi, fl) {
						2147483647 !== fl && z.addEventListener("click", function() {
							hn.gD(30), hn.hr(30, fi), jQ.w(hn.i0), this.style.backgroundColor = aVN, fZ.ff(8, fZ.fa, new fg(25, {
								fh: 0,
								fi: fj.fk.y7(fj.fk.y8(5)),
								fl: fl
							}))
						})
					}(z, za[aH][dF].fi, za[aH][dF].fl)), aVL[aH].appendChild(z)
			}
			for (aVJ.style.display = "flex", aVJ.style.backgroundColor = aP.color.a4R(0, 120, 0, .35), aH = 0; aH < aVM.length; aH++) aVM[aH] = z = document.createElement("div"), z.style.display = "flex", z.style.justifyContent = "center", z.style
				.wordBreak = "break-all", z.style.padding = "0.4em 0em", z.style.width = data.zb[aH] + "%", z.innerHTML = data.ha[aH], aVJ.appendChild(z)
		}();
	for (var aH = 0; aH < ay; aH++) nT.appendChild(aVL[aH]);
	aVK.appendChild(nT), a9n.appendChild(aVJ), a9n.appendChild(aVK)
}

function aPe() {
	function aVU(bF) {
		var ar, bF = bF.target.files;
		bF && 0 < bF.length && (bF = bF[0], "json" === (ar = bF.name.split("."))[ar.length - 1].toLowerCase()) && ((ar = new FileReader).onload = aVb, ar.readAsText(bF))
	}

	function aVb(bF) {
		var aVe;
		b4.cU || (bF = JSON.parse(bF.target.result), aVe = b4.data = new gO, aVf(bF, aVe, "mapType", 0, 2), aVf(bF, aVe, "mapProceduralIndex", 0, 255), aVf(bF, aVe, "mapRealisticIndex", 0, 255), aVf(bF, aVe, "mapSeed", 0, 16383), function(aVd, aVe,
				hS, max) {
				aVd = aVd[hS];
				aVe[hS] = aVl(aVd) ? aVd.slice(0, max) : aVe[hS]
			}(bF, aVe, "mapName", 20), function(aVd, aVe, hS) {
				var a00;
				2 === aVe.mapType && (!aVl(aVd = aVd[hS]) || aVd.length <= 20 ? aVe.mapType = 0 : ((a00 = new Image).onload = function() {
					jo.jv.a01(a00, 1), a00.onload = null, a00 = null
				}, a00.src = aVd))
			}(bF, aVe, "canvas"), aVf(bF, aVe, "passableWater", 0, 1), aVf(bF, aVe, "passableMountains", 0, 1), aVf(bF, aVe, "playerCount", 1, 512), aVf(bF, aVe, "humanCount", 1, 1), aVf(bF, aVe, "selectedPlayer", 0, 0), aVf(bF, aVe, "gameMode",
				0, 1), aVf(bF, aVe, "playerMode", 0, 0), aVf(bF, aVe, "battleRoyaleMode", 0, 0), aVf(bF, aVe, "numberTeams", 0, 8), aVf(bF, aVe, "isZombieMode", 0, 0), aVf(bF, aVe, "isContest", 0, 0), aVf(bF, aVe, "isReplay", 0, 0), aVi(bF, aVe,
				"elo", 16, 2, 16383), aVf(bF, aVe, "colorsType", 0, 1), aVf(bF, aVe, "colorsPersonalized", 0, 1), aVi(bF, aVe, "colorsData", 32, 512, 262143), aVf(bF, aVe, "selectableColor", 0, 1), aVi(bF, aVe, "teamPlayerCount", 16, 9, 512),
			aVf(bF, aVe, "neutralBots", 0, 1), aVf(bF, aVe, "botDifficultyType", 0, 3), aVf(bF, aVe, "botDifficultyValue", 0, 15), aVi(bF, aVe, "botDifficultyTeam", 8, 9, 15), aVi(bF, aVe, "botDifficultyData", 8, 512, 15), aVf(bF, aVe,
				"spawningType", 0, 2), aVf(bF, aVe, "spawningSeed", 0, 16383), aVi(bF, aVe, "spawningData", 16, 1024, 4095), aVf(bF, aVe, "selectableSpawn", 0, 1), aVf(bF, aVe, "playerNamesType", 0, 2),
			function(aVd, aVe, hS, size, max) {
				var a6U = aVd[hS];
				if (Array.isArray(a6U)) {
					for (var a6V = new Array(size), ay = Math.min(a6U.length, size), aH = 0; aH < ay; aH++) a6V[aH] = aVl(a6U[aH]) ? a6U[aH].slice(0, max) : "";
					a6V.fill("", ay), aVe[hS] = a6V
				}
			}(bF, aVe, "playerNamesData", 512, 20), aVf(bF, aVe, "selectableName", 0, 1), aVf(bF, aVe, "aIncomeType", 0, 2), aVf(bF, aVe, "aIncomeValue", 0, 255), aVi(bF, aVe, "aIncomeData", 8, 512, 255), aVf(bF, aVe, "tIncomeType", 0, 2), aVf(
				bF, aVe, "tIncomeValue", 0, 255), aVi(bF, aVe, "tIncomeData", 8, 512, 255), aVf(bF, aVe, "iIncomeType", 0, 2), aVf(bF, aVe, "iIncomeValue", 0, 255), aVi(bF, aVe, "iIncomeData", 8, 512, 255), aVf(bF, aVe, "sResourcesType", 0, 2),
			aVf(bF, aVe, "sResourcesValue", 0, 2047), aVi(bF, aVe, "sResourcesData", 16, 512, 2047), fZ.j3(), fZ.eG.xU[0] = 0, fZ.ff(19))
	}

	function aVf(aVd, aVe, hS, min, max) {
		aVd = aVd[hS];
		aVe[hS] = "number" == typeof aVd && min <= aVd && aVd <= max ? Math.floor(aVd) : aVe[hS]
	}

	function aVl(ct) {
		return "string" == typeof ct
	}

	function aVi(aVd, aVe, hS, aVm, size, max) {
		var a6U = aVd[hS];
		if (Array.isArray(a6U)) {
			for (var a6V = new(8 === aVm ? Uint8Array : 16 === aVm ? Uint16Array : Uint32Array)(size), ay = Math.min(a6U.length, size), aH = 0; aH < ay; aH++) a6V[aH] = aA.cI(a6U[aH], 0, max);
			aVe[hS] = a6V
		}
	}
	this.xW = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aVU, input.click()
	}, this.xX = function() {
		for (var aVX, aUU, oS = b4.data, keys = Object.keys(oS), aVV = {}, aH = 0; aH < keys.length; aH++) {
			var key = keys[aH];
			oS[key] instanceof Uint8Array || oS[key] instanceof Uint16Array || oS[key] instanceof Uint32Array ? aVV[key] = Array.from(oS[key]) : aVV[key] = oS[key]
		}
		aVV.canvas = 2 === aVV.mapType && aVV.canvas ? aVV.canvas.toDataURL() : null, aVX = aVV, aVX = JSON.stringify(aVX, null, 2), aVX = new Blob([aVX], {
			type: "application/json"
		}), (aUU = document.createElement("a")).href = URL.createObjectURL(aVX), aUU.download = "tt_scenario.json", aUU.click()
	}
}

function ik() {
	var pk, aRh, aSN, aVn, aVo, aVp, colors = [0, 0, 0],
		aVq = -1;

	function aVt(aH) {
		var aVu = aRh.aZ + aH * (a3.gap + aVp);
		aa.fillStyle = "rgb(" + (0 === aH ? 150 : 2 === aH ? 30 : 0) + "," + (1 === aH ? 130 : 2 === aH ? 30 : 0) + "," + (2 === aH ? 220 : 0) + ")", aa.fillRect(aVn, aVu, colors[aH] * aVo, aVp), aa.strokeStyle = ab.am, aa.strokeRect(aVn, aVu, aVo,
			aVp), aa.fillStyle = ab.am, aa.font = aP.aS.aT(0, .32 * aVp), aP.aS.textBaseline(aa, 1), aP.aS.textAlign(aa, 0), aa.fillText(L(0 === aH ? 488 : 1 === aH ? 489 : 490) + aVr(aH), aVn + a3.gap, aVu + .53 * aVp)
	}

	function aVr(aH, aVv) {
		return aVv = aVv || 256, aA.cI(Math.floor(aVv * colors[aH]), 0, aVv - 1)
	}

	function cJ(a6, a7) {
		return !(a6 < aVn || a7 < aRh.aZ || a6 > aRh.aY + aRh.b || a7 > aRh.aZ + aRh.c)
	}
	this.show = function() {
		var b0 = gH.gJ.data[121].value;
		colors[0] = (b0 >> 12) / 63, colors[1] = (b0 >> 6 & 63) / 63, colors[2] = (63 & b0) / 63, pk.show(), this.resize()
	}, this.aE = function() {
		gH.rg.nf(121, (aVr(0, 64) << 12) + (aVr(1, 64) << 6) + aVr(2, 64)), pk.aE()
	}, this.resize = function() {
		pk.resize(), aRh.resize();
		var cl = y.hT,
			ck = pk.aMO(),
			aVs = (aRh.aZ = Math.max(aRh.aZ, cl * ck.aMP + a3.gap), cl * ck.aMR - 2 * a3.gap);
		aRh.c = Math.min(aRh.c, aVs), aRh.b = 2 * aRh.c, aRh.aZ = cl * ck.aMP + .5 * (cl * ck.aMR - aRh.c), aRh.aY = .5 * (y.b - aRh.b), aSN = .25 * aRh.b, aVn = aRh.aY + aSN + a3.gap, aVo = aRh.b - aSN - a3.gap, aVp = (aRh.c - 2 * a3.gap) / 3
	}, this.aW = function() {
		var bf, ej, dL;
		pk.aW(), aa.lineWidth = a3.qP, bf = aVr(0), ej = aVr(1), dL = aVr(2), aa.fillStyle = "rgb(" + bf + "," + ej + "," + dL + ")", aa.fillRect(aRh.aY, aRh.aZ, aSN, aRh.c), aa.strokeStyle = ab.am, aa.strokeRect(aRh.aY, aRh.aZ, aSN, aRh.c), aa
			.fillStyle = bf + ej + dL < 306 && ej < 150 ? ab.am : ab.eX, aP.aS.textBaseline(aa, 1), aP.aS.textAlign(aa, 1), aa.font = aP.aS.aT(0, .1 * aRh.c), aa.rotate(-Math.PI / 2), aa.fillText(L(487), -aRh.aZ - .5 * aRh.c, aRh.aY + .5 * aSN),
			aa.setTransform(1, 0, 0, 1, 0, 0), aVt(0), aVt(1), aVt(2)
	}, this.a5 = function(a6, a7) {
		cJ(a6, a7) && (aVq = aA.cI(Math.floor((a7 - aRh.aZ) / (aVp + .75 * a3.gap)), 0, 2), colors[aVq] = aA.cI((a6 - aVn) / aVo, 0, 1), aF.aG = !0)
	}, this.aI = function(a6) {
		-1 !== aVq && (colors[aVq] = aA.cI((a6 - aVn) / aVo, 0, 1), aF.aG = !0)
	}, this.cV = function(a6, a7, deltaY) {
		cJ(a6, a7) && (a6 = aA.cI(Math.floor((a7 - aRh.aZ) / (aVp + .75 * a3.gap)), 0, 2), colors[a6] = aA.cI(colors[a6] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), aF.aG = !0)
	}, this.j4 = function() {
		0 <= aVq && (aVq = -1, aF.aG = !0)
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pk = new gU(L(486), [new fR("⬅️ " + L(71), function() {
		fZ.eG.aKy()
	})], !1), aRh = new mO([.5, .25], [.5, .5], 1)
}

function gr(aVw, tX, aVx) {
	function click() {
		var value = 1 - aVw.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tX, void 0 !== aVw.p ? gH.rg.nf(aVw.p, value) : aVw.value = value, aVx && aVx(value)
	}
	var bF;
	tX = tX || L(491), this.bF = document.createElement("p"), (bF = this.bF).textContent = (aVw.value ? "🟩 " : "⬜ ") + tX, bF.style.margin = "0", bF.style.marginBottom = "0.5em", bF.style.cursor = "pointer", bF.addEventListener("click", click)
}

function aP8() {
	this.fk = new aVy, this.jL = new aMu, this.i5 = new aPl, this.w = function() {
		this.fk.w()
	}
}

function aIt() {
	this.w = function() {
		8 === b4.f7 && d8.eT()
	}, this.aEj = function(aVz) {
		var elo = b4.data.elo,
			fE = (elo[aVz] - elo[1 - aVz]) / 10,
			fE = 8 / (1 + Math.pow(2, fE / 32)),
			fE = Math.floor(10 * fE + .5),
			aW1 = elo[aVz] + fE,
			aW1 = this.eW(aW1),
			elo = this.eW(elo[1 - aVz] - fE);
		0 === aVz ? d8.ec(aW1, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : d8.ec(elo, aW1, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.eW = function(elo) {
		return 16e3 === (elo = aA.cI(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function lC() {
	d8.cX(), dl.cX(), bQ.aOu(), fz.eG.cX()
}

function lJ() {
	aFx.cX(), a1g.cX(), mJ.cX(), mD.cX(), aJ4.cX(), m4.cX(), mF.cX(), eF.eG.cX(), fG.aW2(), p6.cX(), a3w.cX(), aCz.cX(), dl.cX(), dl.aW3(), bQ.cX(), zC.cX(), p7.cX(), p8.cX(), d8.cX(), aFs.cX(), c7.cX(), d3.cX(), aM.cX(), pC.cX(), fz.eG.cX(), fz.a9P
		.cX(), fZ.cX(), aIg.aI4.cX(), jo.cX(), aF.cX()
}

function lF() {
	dD.cX(), pB.cX(), aO.cX(), aIZ.cX(), aD.cX(), o2.vg()
}

function lH() {
	p6.c2(!1), p8.c2(), bQ.c2(!1), p7.c2(), c7.c2(), d3.c2(), dl.c2(!1), pC.aV()
}

function lB() {
	dl.c2(!1) && (aF.aG = !0), fz.eG.cX()
}

function a94() {
	var a42 = 32,
		a41 = new Array(2);

	function hI(cl) {
		var aY, aZ, dG, wk, wj, rD = a42,
			dT = aP.aS.hI(rD, rD),
			hJ = aP.aS.getContext(dT, !0),
			rF = aP.aS.getImageData(hJ, rD, rD),
			dZ = rF.data,
			at = (rD >> 1) - .5,
			aOP = Math.sqrt(at * at);
		for (dZ.fill(255), aZ = 0; aZ < rD; aZ++)
			for (aY = 0; aY < rD; aY++) wj = aY - at, wk = aZ - at, dG = 4 * (aZ * rD + aY), wj = 714 * (aOP - Math.sqrt(wj * wj + wk * wk)) / aOP, dZ[2 + dG] = cl, dZ[3 + dG] = 255 < wj ? 0 : wj;
		return hJ.putImageData(rF, 0, 0), dT
	}
	this.aW4 = -1, this.w = function() {
		this.aW4 = -1, a41[0] || (a41[0] = hI(255), a41[1] = hI(0))
	}, this.aUv = function(hJ, av, aY, aZ, bf, aH) {
		aP.cA.la(b4.b5) && (hJ.setTransform(av *= 4 / 3 * .625, 0, 0, av, aY - (bf *= 4 / 3), aZ - bf), hJ.drawImage(a41[+(eF.eG.wM[aH] === this.aW4)], 0, 0))
	}
}

function aPJ() {
	this.e0 = new Array(b4.dg), this.de = new Array(b4.dg), this.es = new Uint8Array(b4.dg), this.bN = new Uint8Array(b4.dg), this.a3F = new Uint16Array(b4.dg), this.a3H = new Uint16Array(b4.dg), this.a3G = new Uint16Array(b4.dg), this.a3I =
		new Uint16Array(b4.dg), this.b3 = new Uint32Array(b4.dg), this.aBB = new Uint32Array(b4.dg), this.e1 = new Uint32Array(b4.dg), this.m3 = null, this.a5J = null, this.ld = null, this.yY = null, this.aKV = new Uint16Array(b4.dg), this.aAs =
		new Uint16Array(b4.dg), this.aAt = new Uint16Array(b4.dg), this.a1i = new Uint16Array(b4.dg), this.aKW = new Uint8Array(b4.dg), this.aBH = new Uint16Array(b4.dg), this.w = function() {
			this.e0.fill(""), this.de.fill(""), this.es.fill(0), this.bN.fill(0), this.a3F.fill(0), this.a3H.fill(0), this.a3G.fill(0), this.a3I.fill(0), this.b3.fill(0), this.aBB.fill(0), this.e1.fill(0), this.m3 = new Array(b4.dg), this.a5J =
				new Array(b4.dg), this.ld = new Array(b4.dg), this.yY = new Array(b4.dg), this.aKV.fill(0), this.aAs.fill(0), this.aAt.fill(0), this.a1i.fill(0), this.aKW.fill(0), this.aBH.fill(0)
		}
}

function aPL() {
	var b0, b, c, max, aW5, rV, aW7, aW8, aW9, aWA, aWB, aWC, aWD, aWE, aW6 = 1e4;

	function aWL(aWK, rU, ay) {
		var aH;
		for (aW7[0] = aWK, aH = 1; aH < ay; aH++) aW7[aH] = aW7[aH - 1] + rU, rU = aW7[aH] >= aW6 ? (aW7[aH] = aW6 - 1, -rU) : aW7[aH] < 0 ? (aW7[aH] = 0, -rU) : (rU += 16384 <= kI.random() ? rV : -rV) < -aW5 ? -aW5 : aW5 < rU ? aW5 : rU
	}

	function aWN(aY, aZ, aWO, ay) {
		(aWO ? function(aY, aZ, ay) {
			var aH;
			for (aH = 0; aH < ay; aH++) b0[aZ * b + aY + aH] = aW7[aH]
		} : function(aY, aZ, ay) {
			var aH;
			for (aH = 0; aH < ay; aH++) b0[aZ * b + aY + aH * b] = aW7[aH]
		})(aY, aZ, ay)
	}

	function aWR(value, ay) {
		var aH, aWS, av, fE = value - aW7[ay - 1];
		if (0 != fE) {
			for (aWS = 1 + aA.aB(Math.abs(fE), ay - 1), aWS = fE < 0 ? -aWS : aWS, aW7[ay - 1] = value, av = (av = ay - 1 - aA.aB(Math.abs(fE), Math.abs(aWS))) < 1 ? 1 : ay - 2 < av ? ay - 2 : av, aH = ay - 2; av <= aH; aH--) aW7[aH] += fE - (ay -
				1 - aH) * aWS;
			(fE < 0 ? function(ay) {
				var aH;
				for (aH = ay - 2; 1 <= aH; aH--) aW7[aH] < 0 && (aW7[aH] = -aW7[aH] - 1)
			} : function(ay) {
				var aH;
				for (aH = ay - 2; 1 <= aH; aH--) aW7[aH] >= aW6 && (aW7[aH] = 2 * aW6 - aW7[aH] - 1)
			})(ay)
		}
	}

	function aWV(a6U, a6V, ay) {
		for (var aH = 0; aH < ay; aH++) a6U[aH] = a6V[aH]
	}

	function aWW(ar) {
		for (var aH = 0; aH < ar.length - 1; aH++) ar[aH] = ar[aH + 1] - ar[aH];
		ar[ar.length - 1] = ar[ar.length - 3]
	}

	function aWX(zJ, gap, lY) {
		aW8.push(zJ), aW9.push(gap), aWA.push(lY)
	}
	this.gD = function(i3) {
		! function(i3) {
			var aH;
			for (b = i3[0], c = i3[1], aW5 = i3[2], rV = i3[3], b0 = new Int16Array(b * c), max = c < b ? b : c, aW7 = new Int16Array(max), aW8 = [], aW9 = [], aWA = [], aWB = new Array(b), aWC = new Array(c), aH = b - 1; 0 <= aH; aH--) aWB[
				aH] = !1;
			for (aH = c - 1; 0 <= aH; aH--) aWC[aH] = !1;
			aWD = new Int16Array(b), aWE = new Int16Array(c)
		}(i3),
		function(ay) {
			var aWK = kI.random() % aW6,
				rU = kI.random() % (2 * aW5 + 1) - aW5;
			aWL(aWK, rU, ay)
		}(max), aWV(aWE, aW7, c), aWN(0, 0, !0, b);
		var aY, aZ, i3 = b0[0],
			ay = max,
			rU = kI.random() % (2 * aW5 + 1) - aW5;
		for (aWL(i3, rU, ay), aWV(aWD, aW7, b), aWN(0, 0, !1, c), aWW(aWD), aWW(aWE), aWL(b0[b - 1], aWD[b - 1], c), aWN(b - 1, 0, !1, c), aWL(b0[b * (c - 1)], aWE[c - 1], b), aWR(b0[b * c - 1], b), aWN(0, c - 1, !0, b), aWB[b - 1] = aWB[0] = !0,
			aWC[c - 1] = aWC[0] = !0, aWX(0, b, !0), aWX(0, c, !1), ! function() {
				var pv, zJ;
				for (;;) {
					if (pv = function() {
							var aH, pv = aW8.length - 1;
							for (aH = pv - 1; 0 <= aH; aH--) aW9[aH] > aW9[pv] && (pv = aH);
							return pv
						}(), aW9[pv] < 5) return;
					zJ = aW8[pv] + aA.aB(aW9[pv], 2), (aWA[pv] ? function(aY) {
						var ay, aWb, aH, aDh = 0,
							aWc = 0;
						for (; aWc < c - 1;) {
							for (aH = aDh + 1; aH < c; aH++)
								if (aWC[aH]) {
									aWc = aH;
									break
								} ay = aWc - aDh + 1, aWL(b0[aY + b * aDh], 0 === aDh ? aWD[aY] : aW7[aWb - 1] - aW7[aWb - 2], ay), aWR(b0[aWc * b + aY], ay), aWN(aY, aDh, !1, ay), aWb = ay, aDh = aWc
						}
						aWB[aY] = !0
					} : function(aZ) {
						var ay, aWb, aH, aDh = 0,
							aWc = 0;
						for (; aWc < b - 1;) {
							for (aH = aDh + 1; aH < b; aH++)
								if (aWB[aH]) {
									aWc = aH;
									break
								} ay = aWc - aDh + 1, aWL(b0[aZ * b + aDh], 0 === aDh ? aWE[aZ] : aW7[aWb - 1] - aW7[aWb - 2], ay), aWR(b0[aZ * b + aWc], ay), aWN(aDh, aZ, !0, ay), aWb = ay, aDh = aWc
						}
						aWC[aZ] = !0
					})(zJ), aWX(zJ, aW8[pv] + aW9[pv] - zJ, aWA[pv]), aW9[pv] = zJ - aW8[pv] + 1
				}
			}(), aY = 0; aY < b; aY++)
			if (!aWB[aY])
				for (aZ = 0; aZ < c; aZ++) aWC[aZ] || ! function(aY, aZ) {
					var value = b0[aZ * b + aY - 1] + b0[(aZ - 1) * b + aY],
						ty = 2;
					aWB[aY + 1] && (ty++, value += b0[aZ * b + aY + 1]);
					aWC[aZ + 1] && (ty++, value += b0[(aZ + 1) * b + aY]);
					b0[aZ * b + aY] = aA.aB(value, ty)
				}(aY, aZ)
	}, this.kh = function() {
		return b0
	}, this.kX = function() {
		b0 = null
	}
}

function gW(a9n, gg) {
	var no = document.createElement("div");

	function aVT() {
		var aH, hO, c, hS, z, aWf = y.hT * no.offsetWidth,
			aWh = new Float64Array(function(aWf) {
				var b = .25 * aP.aS.hQ(.6) * y.bx;
				return Math.max(Math.floor(aWf / b), 1)
			}(aWf)),
			aEb = a3.aEb,
			aWi = (aWf - (aWh.length + 1) * a3.gap) / (aWh.length * y.hT);
		for (aWh.fill(aEb), aH = 0; aH < gg.length; aH++) hO = (z = gg[aH].no).style, c = aP.g9.min(aWh), hS = aWh.indexOf(c), hO.top = aP.aS.hL(c), hO.left = aP.aS.hL(aEb + hS * (aWi + aEb)), hO.width = aP.aS.hL(aWi), aP.aS.hK(z, 5), aWh[hS] += z
			.offsetHeight + 3 * aEb;
		no.style.height = aP.aS.hL(aP.g9.max(aWh) - 2 * aEb)
	}
	this.xR = no, this.xS = gg, this.resize = function() {
		var aH;
		for (aH = 0; aH < gg.length; aH++) gg[aH].resize();
		aVT(), aVT()
	}, no.style.width = "100%", no.style.maxWidth = "100%", a9n.style.lineHeight = "1.5em", a9n.style.overflowX = "hidden", a9n.style.overflowY = "auto";
	for (var aH = 0; aH < gg.length; aH++) no.appendChild(gg[aH].no);
	a9n.appendChild(no)
}

function vI(iK, a9n) {
	var no;
	this.resize = function() {
		for (var aH = 0; aH < iK.length; aH++) aP.aS.hK(iK[aH].button);
		no.style.gap = no.style.padding = aP.aS.hL(a3.aEb)
	}, (no = document.createElement("div")).style.display = "grid", no.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", no.style.overflowY = "auto", no.style.gridAutoRows = "5.3em", no.style.maxHeight = "100%";
	for (var aH = 0; aH < iK.length; aH++) iK[aH].te(1), no.appendChild(iK[aH].button);
	a9n.appendChild(no)
}

function iT() {
	this.gJ = {}, this.ng = new Array(7), this.im = null, this.ij = null, this.aH1 = 0, this.xU = [0, 0], this.a2W = function() {
		fZ.ff(5, 5)
	}, this.aJ9 = function() {
		fZ.j3(), p3.w()
	}, this.aKy = function() {
		fZ.ff(0 === iY.iZ() ? 5 : 0)
	}, this.aEC = function() {
		if (1 === gH.gJ.data[130].value) fZ.ff(8, fZ.fx().iX, new fg(24, {
			jI: gH.gJ.data[125].value,
			jA: gH.gJ.data[128].value,
			jB: gH.gJ.data[129].value
		}));
		else {
			for (var ar = (ar = gH.gJ.data[126].value.split(",")).slice(0, 10), aH = 0; aH < ar.length; aH++) ar[aH] = ar[aH].trim().slice(0, 7).toUpperCase();
			1 === ar.length && 0 === ar[0].length && (ar = []), fZ.ff(8, fZ.fx().iX, new fg(23, {
				jI: gH.gJ.data[125].value,
				jJ: ar
			}))
		}
	}, this.aOA = function(iX, target) {
		fZ.ff(4, iX, new uB("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + uC.a78 +
			"' target='_blank'>" + uC.a78 + "</a>", !1, [new fR("⬅️ " + L(71), function() {
				fZ.ff(iX)
			}), new fR("✅ Accept", function() {
				gH.rg.nf(140, 1), 0 === target ? fZ.ff(2, iX) : fZ.ff(8, iX, new fg(target))
			})]))
	}, this.aWj = function() {
		for (var aH = 0; aH < 7; aH++) this.ng[aH] = gL.jL.jX(jQ.hq(5));
		this.ng[1] = "[" + this.ng[1] + "]", 5 === fZ.fa && (fZ.fx().aQI.nf(this.ng), fZ.fx().resize())
	}, this.ri = function(b0, eK, eL) {
		b0 = aP.cA.aTW(b0, 1, 1e6);
		var aWk = Math.max(1, 1 + Math.floor(.01 * (b0 - 100))),
			eK = L(492, [eK]);
		return (eK += "<br>") + L(493, [eL]) + "<br>" + L(494, [aWk < 20 ? b0 + aWk + "–" + (b0 + 20) : b0 + aWk]) + "<br>" + L(495, [b0])
	}
}

function aPS() {
	this.size = 0, this.p = 0, this.i0 = null, this.w = function(i0) {
		this.p = 0, this.i0 = i0, this.size = i0.length
	}, this.gD = function(zq) {
		return this.w(new Uint8Array(this.jR(zq))), this.i0
	}, this.t0 = function() {
		this.i0 = null
	}, this.hr = function(size, ty) {
		for (var i0 = this.i0, pR = this.p + size - 1, aH = this.p; aH <= pR; aH++) i0[aH >> 3] |= (ty >> pR - aH & 1) << 7 - (7 & aH);
		this.p += size, this.p > 8 * this.size && console.error("Wrapper Overflow")
	}, this.ol = function(size, ty) {
		var dL = size >> 1,
			z = 1 << dL;
		this.hr(size - dL, aA.aB(ty, z)), this.hr(dL, ty % z)
	}, this.aWl = function(size) {
		for (var i0 = this.i0, pR = this.p + size, aH = this.p; aH < pR; aH++) i0[aH >> 3] &= 255 ^ 128 >>> (7 & aH)
	}, this.jR = function(zq) {
		return zq + 7 >> 3
	}, this.aWm = function(ar, a3m, pR, aWn) {
		for (var aH = a3m; aH < pR; aH++) this.hr(aWn, ar[aH])
	}
}

function is() {
	var gQ, gR, aWo, gg;

	function gV() {
		aAU.t0(), fZ.gb()[19] = null, fZ.gc()
	}

	function aWv() {
		aWy(), aWw()
	}

	function aWy() {
		aWo.no.lastChild && fZ.removeChild(aWo.no, aWo.no.lastChild)
	}

	function aWw() {
		var aWz = ev.gE(b4.data);
		b4.data.canvas = ev.x6(aWz, b4.data.mapSeed).x5, aWx()
	}

	function aWx() {
		var dT = b4.data.canvas;
		dT.style.width = "100%", aWo.no.appendChild(dT)
	}
	this.aAa = function(dT) {
		b4.data.canvas && aWy(), b4.data.canvas = dT, aWx()
	}, this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(154), [new fR("⬅️ " + L(71), gV)]), 2 === b4.data.mapType && aAU.w(), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), gj.gm(new gn({
			go: [L(496), L(497), L(498)],
			value: b4.data.mapType
		}, function(p) {
			2 === (b4.data.mapType = p) ? (aAU.w(), b4.data.canvas = null) : (b4.data.passableWater = b4.data.passableMountains = 1, aAU.t0()), fZ.ff(20)
		})), 2 <= b4.data.mapType && (gj.gp(new gq), gj.gp(new gr({
			value: b4.data.passableWater
		}, L(499), function(value) {
			b4.data.passableWater = value
		})), gj.gp(new gr({
			value: b4.data.passableMountains
		}, L(500), function(value) {
			b4.data.passableMountains = value
		})));
		gg.push(gj)
	}(gg = []), function(gg) {
		if (0 === b4.data.mapType) {
			for (var gj = new gk, go = (gj.gl(L(154)), []), aH = 0; aH < ev.ew.rJ.length; aH++) go.push(ev.ew.ex[ev.ew.rJ[aH]].name);
			gj.gm(new gn({
				go: go,
				value: b4.data.mapProceduralIndex
			}, function(p) {
				b4.data.mapProceduralIndex = p, aWv()
			})), gg.push(gj)
		}
	}(gg), function(gg) {
		if (1 === b4.data.mapType) {
			for (var gj = new gk, go = (gj.gl(L(154)), []), aH = 0; aH < ev.ew.rK.length; aH++) go.push(ev.ew.ex[ev.ew.rK[aH]].name);
			gj.gm(new gn({
				go: go,
				value: b4.data.mapRealisticIndex
			}, function(p) {
				b4.data.mapRealisticIndex = p, aWv()
			})), gg.push(gj)
		}
	}(gg), function(gg) {
		var gj;
		2 === b4.data.mapType && ((gj = new gk).gl(L(501)), gj.gp(new nm(gH.gJ.data[162], 1)), gj.gl(L(502), "0.8em"), gj.gp(new pw([new fR(L(503), function() {
			return aAU.aAS(), !0
		}).button])), gg.push(gj))
	}(gg), function(gg) {
		var gj, sx;
		2 === b4.data.mapType && ((gj = new gk).gl(L(504)), sx = new nm({
			p: -1,
			value: b4.data.mapName
		}, 0, 0, function(bF) {
			b4.data.mapName = bF.target.value = bF.target.value.slice(0, 20)
		}), gj.gp(sx), gg.push(gj))
	}(gg), function(gg) {
		var gj, sx, pq;
		0 === b4.data.mapType && ((gj = new gk).gl("Seed"), sx = new nm({
			p: -1,
			value: b4.data.mapSeed
		}, 1, 0, function(bF) {
			bF = Math.abs(Math.floor(bF.target.value)) % 16384;
			b4.data.mapSeed !== bF && (b4.data.mapSeed = bF, aWv())
		}), pq = new fR(L(175), function(bF) {
			var ke = Math.floor(16384 * Math.random());
			if (b4.data.mapSeed !== ke) return sx.bF.value = b4.data.mapSeed = ke, aWv(), !0
		}), gj.gp(sx), gj.gp(new pw([pq.button])), gg.push(gj))
	}(gg), function(gg) {
		(aWo = new gk).gl(L(505)), 2 !== b4.data.mapType ? aWw() : b4.data.canvas && aWx();
		gg.push(aWo)
	}(gg), gg))
}

function aJu(aX0) {
	var iH = document.createElement("div"),
		aPq = document.createElement("div"),
		aX1 = [];

	function tg() {
		qr.rB() || (this.style.backgroundColor = aP.color.tp(ab.c9, 50))
	}

	function th() {
		this.style.backgroundColor = ab.c9
	}
	this.nf = function(aX2, aX3) {
			aX1[2].textContent = aX2 + 1 + " / " + aX3
		}, this.show = function(dU) {
			aPq.appendChild(fd.yP.transform(fd.fr.a0R(dU, fd.fr.a0N(dU)))), document.body.appendChild(iH)
		}, this.resize = function() {
			var c = aP.aS.hR(.03, .5);
			iH.style.width = 10 * c + "px", iH.style.font = aP.aS.aT(1, .75 * c), aP.aS.hK(iH, 4), aPq.style.top = c + "px", aPq.style.font = aP.aS.aT(0, .55 * c), aP.aS.hK(aPq, 2), iH.style.height = c + aPq.offsetHeight + "px";
			for (var aH = 0; aH < 3; aH++) aP.aS.hK(aX1[aH], 6), aX1[[0, 1, 3][aH]].style.width = 2 * c + "px";
			for (aH = 0; aH < 4; aH++) aX1[aH].style.height = c + "px", aP.aS.hK(aX1[aH], 2);
			aX1[2].style.width = 4 * c + "px", aX1[1].style.left = 2 * c + "px", aX1[2].style.left = 4 * c + "px", aX1[3].style.left = 8 * c + "px"
		}, this.t0 = function() {
			for (var aH = 0; aH < 4; aH++) aX1[aH].onclick = null, aX1[aH].onmouseover = null, aX1[aH].onmouseout = null;
			fZ.removeChild(document.body, iH), iH = aPq = aX1 = null
		}, iH.style.position = "absolute", iH.style.color = ab.am, iH.style.zIndex = "3", iH.style.right = "0", iH.style.top = "0", aPq.style.position = "absolute", aPq.style.height = "auto", aPq.style.color = ab.am, aPq.style.backgroundColor = ab
		.c9, aPq.style.left = "0", aPq.style.width = "100%", aPq.style.overflowWrap = "break-word", iH.appendChild(aPq);
	for (var aH = 0; aH < 4; aH++) aX1[aH] = document.createElement("div"), aX1[aH].style.position = "absolute", aX1[aH].style.backgroundColor = ab.c9, aX1[aH].style.color = ab.am, aX1[aH].style.top = "0", aX1[aH].style.display = "flex", aX1[aH]
		.style.justifyContent = "center", aX1[aH].style.alignItems = "center", aX1[aH].style.userSelect = "none", aX1[aH].style.outline = "none", aX1[aH].style.font = "inherit", 2 !== (aX1[aH].aJt = aH) && (aX1[aH].onclick = aX0, aX1[aH]
			.onmouseover = tg, aX1[aH].onmouseout = th), iH.appendChild(aX1[aH]);
	aX1[0].textContent = "◀", aX1[1].textContent = "▶", aX1[3].textContent = "✖"
}

function aPP() {
	var c, canvas, ao, aX4, aX5, aX6, aX7, bs, aX8, aX9, aXA, aXB, ea = !1,
		dT = (this.r = !1, this.b = 0, new Array(2)),
		aXC = 0;

	function aV() {
		var b = d3.b,
			at = (bs = !1, aIa(ao, b, c), Math.floor(b / 2));
		1 === aX4 ? (ao.fillStyle = ab.a4e, ao.fillRect(at, 0, at, c)) : -1 === aX4 && (ao.fillStyle = ab.a4l, ao.fillRect(0, 0, at, c)), aIb(ao, b, c, 2);
		var at = (at = Math.floor(.25 * c)) < 2 ? 2 : at,
			f3 = (ao.fillStyle = ab.a4V, Math.floor((c - 4) * aX5[1] / aX6[1]));
		0 < f3 && ao.fillRect(2, c - 2 - f3, at, f3), 0 < (f3 = Math.floor((c - 4) * aX5[0] / aX6[0])) && ao.fillRect(b - 2 - at, c - 2 - f3, at, f3);
		at = (at = Math.floor(c / 8)) < 2 ? 2 : at, a71(ao, Math.floor(.4 * c), 0, c, at, .5, !1), a71(ao, Math.floor(b - 1.4 * c), 0, c, at, .5, !0), f3 = 1.1 * c / dT[0].width;
		ao.imageSmoothingEnabled = !0, ao.setTransform(f3, 0, 0, f3, (b - f3 * dT[0].width) / 2, -.05 * c), ao.drawImage(dT[+ea], 0, 0), ao.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aXG() {
		aXB = -1, ea = aP3.a9e(), d8.db(257), d8.eZ(ea), d3.r = !0, bs = !0, aX8 = 360;
		for (var b0, aJ = 0, aH = fG.fH - 1; 0 <= aH; aH--) aP.cA.dj(fG.fI[aH]) || (aJ += b2.b3[fG.fI[aH]]);
		ea ? aX6[0] = Math.max(aA.aB(3 * aJ, 4), 1) : b4.e2 ? 9 === b4.f7 && 8 === e4.e6[pC.a35()] ? aX6[0] = Math.max(aJ, 1) : (b0 = aA.aB(100 * pC.aDE(), b4.a5K), b0 = aA.cI(200 - 2 * b0, 40, 100), b0 = aA.aB(b0 * aJ, 100), aX6[0] = Math.max(b0,
			1)) : 8 === b4.f7 ? aX6[0] = Math.max(aA.aB(3 * aJ, 4), 1) : aX6[0] = Math.max(aA.aB(3 * aJ, 5), 1), aX6[1] = Math.max(aJ - aX6[0], 1)
	}

	function cH() {
		aXA = aF.bP(), bs = !0, aX8 = aX4 = 0, aX7 = [], d3.r = !1, d8.em(247), aX5[0] = aX5[1] = 0, d8.db(673)
	}

	function d7() {
		return c7.cE(d8.d2()) ? __fx.settings.keybindButtons ? c7.aZ - 2 * (c + a3.gap) : c7.aZ - c - a3.gap : aD.cE(d8.d6()) ? aD.d7() - c - a3.gap : y.c - c - c0.c1() * a3.gap
	}
	this.v = function() {
		for (var aH = 0; aH < 2; aH++) dT[aH] = aP.canvas.a03(nj.get(3), 8 - aH, ab.a54), dT[aH] = aP.canvas.a07(dT[aH])
	}, this.w = function() {
		aXA = -1e4, aX9 = aXC = 0, aXB = -1, this.r = !1, bs = ea = !1, aX5 = [aX4 = aX8 = 0, 0], aX6 = [1, 1], aX7 = [], this.resize()
	}, this.resize = function() {
		c = c7.c, this.b = 4 * c, (canvas = document.createElement("canvas")).width = this.b, canvas.height = c, ao = canvas.getContext("2d", {
			alpha: !0
		}), aV()
	}, this.c2 = function() {
		bs && aV()
	}, this.a5 = function(aY, aZ) {
		return !!this.r && !(aY < y.b - this.b - a3.gap || aZ < d7() || (b4.bw || this.aK5(b4.b5) && (aC.cD && aC.aL(), dB.a4M.w2(aY > y.b - a3.gap - this.b / 2 ? 1 : 0)), 0))
	}, this.cX = function() {
		0 < aX9 ? 0 === --aX9 && cH() : this.r ? 180 == --aX8 && 3 * aX5[0] < aX6[0] ? cH() : aX5[0] >= aX6[0] ? ea ? a0z.a10.aXJ() : a0z.a10.a11() : aX5[1] >= aX6[1] ? aX9 = 4 : aX8 <= 0 && cH() : ! function() {
			var aKU = aF.bP();
			if (aKU % 40 == 14) {
				if (aXC) return !(aKU < aXC) && !(aKU < aXA + 535) && (aXC = aKU + 1071, aP.cA.aXI()) ? (aXG(), 1) : 0;
				(1 === fG.fH || (b4.e2 ? pC.aDE() : b2.b3[pd[0]]) >= aA.aB(96 * b4.a5K, 100)) && (aXC = aKU + 535)
			}
			return
		}() && 0 <= aXB && (d8.dO(250, L(506, [b2.de[aXB]]), 673, aXB, ab.am, ab.ac, -1, !0), aXG())
	}, this.aXK = function() {
		this.r && aX5[0] < aX6[0] && cH()
	}, this.aNl = function(player, aXL) {
		var aXM = L(aXL ? 507 : 508, [b2.de[player]]),
			aXM = (d8.dO(450, aXM, 257, player, aXL ? ab.a4c : ab.lg, ab.ac, -1, !0), aX7.push(player), bs = !0, b4.o0 ? Math.max(aX6[0], aX6[1]) : b2.b3[player]),
			aXM = Math.max(aXM, 1);
		aXL ? aX5[0] += aXM : aX5[1] += aXM, player === b4.b5 && (aX4 = aXL ? 1 : -1)
	}, this.aW = function() {
		var aZ;
		this.r && (aZ = d7(), aa.drawImage(canvas, y.b - this.b - a3.gap, aZ))
	}, this.aK6 = function(player) {
		return 0 === aX8 && !!aP.cA.a0y(1) && !!aP.cA.la(player) && !(10 <= a5L[player] && !aP.cA.aXN(player, 9) || !b4.o0 && ((player = aF.bP()) < aXA + 100 || player < 1607 || 9 === b4.f7 && !pC.aDH()))
	}, this.aK5 = function(dP) {
		if (!aP.cA.a0y(1)) return !1;
		if (!aP.cA.la(dP)) return !1;
		if (!this.r) return !1;
		for (var aH = aX7.length - 1; 0 <= aH; aH--)
			if (aX7[aH] === dP) return !1;
		return !0
	}, this.r7 = function(player) {
		aXB = player
	}
}

function aXP() {
	this.nf = function(p, value) {
		2 !== gH.gJ.data[p].type && (value = Math.floor(value)), gH.gJ.data[p].value !== value && (gH.gJ.pN(p, value), 0 === p ? (fZ.j3(), oi.w(), fZ.ff(2)) : 1 === p ? y.ox(1) : 2 === p ? y.ox(0) : 5 === p && (aP.aS.hG(), y.ox(0)))
	}, this.u0 = function() {
		for (var data = gH.gJ.data, aH = 0; aH < 100; aH++) data[aH] && gH.gJ.pN(aH, data[aH].pQ);
		aP.aS.hG(), y.ox(1)
	}, this.u1 = function() {
		for (var data = gH.gJ.data, aH = 0; aH < data.length; aH++) data[aH] && gH.gJ.nf(aH, data[aH].pQ)
	}, this.a2V = function() {
		for (var dL = gH.gJ, aH = 128; aH < 135; aH++) dL.pN(aH, dL.data[aH].pQ)
	}, this.aXQ = function(data) {
		gH.rg.nf(109, data.fl), gH.rg.nf(107, data.aTO), gH.rg.nf(108, data.aTP), gH.rg.nf(112, data.aTQ), gH.rg.nf(111, data.aTI), gH.rg.nf(113, data.od), gH.rg.nf(135, data.aTh), gH.rg.nf(136, data.aTo), gH.rg.nf(137, data.aTg), gH.rg.nf(138,
			data.aTn), gH.rg.nf(139, data.aTi), gH.rg.nf(141, data.aTk), gH.rg.nf(142, data.aTp), gH.rg.nf(143, data.aTm), gH.rg.nf(144, data.aTq)
	}
}

function aXR() {
	this.sy = function() {
		if (2 === b4.a2c) b4.eR = 2;
		else {
			if (8 === b4.f7) aP.cA.dj(0) || 0 === b2.bN[0] ? b4.aEi = 1 : aP.cA.dj(1) || 0 === b2.bN[1] ? b4.aEi = 0 : b4.aEi = +(b2.b3[1] > b2.b3[0]);
			else {
				if (b4.e2) {
					var a34 = pC.aDG();
					if (b4.vO = a34, e4.e6[a34]) return void(b4.eR = +(e4.e7[b4.b5] === a34))
				}
				b4.aEi = pd[0]
			}
			b4.eR = +(b4.aEi === b4.b5)
		}
	}
}

function aH6() {
	var iJ = 0,
		aXT = 0,
		aXU = 0,
		aXV = null,
		aXW = null;

	function aXY(dU, aXZ, aXa) {
		var ct = dU.username;
		return (ct += "   " + fd.fr.a0e(dU.fT, dU.ft, dU.fu)) + function(dU) {
			dU = dU.od;
			if (dU < 1e3) return "   Gold: " + dU;
			if ((dU %= 1024) < 1e3) return "   Gold: " + dU + "k";
			return "   Gold: " + (dU - 999) + "M"
		}(dU) + ("   IP: " + fj.fk.aR(dU.a1A, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aXa ? aXT : aXX(dU, aXZ)])
	}

	function aXX(dU, aXZ) {
		return aXT = aXZ || fd.tI.a0b(dU.fi) ? 1 : 0
	}
	this.aIn = function() {
		!iJ || aXT === aXX(aXW) && aXU === aXW.od || (aXU = aXW.od, aXV.show(-1, -1, aXY(aXW, 0, 1), 1, 1))
	}, this.aEy = function(bF, dU, aXZ) {
		var aNK = bF.target.getBoundingClientRect();
		this.show(aNK.left, aNK.top, dU, 0, aXZ), bF.target.addEventListener("mouseleave", function remove() {
			bF.target.removeEventListener("mouseleave", remove), fd.g5 && fd.g5.aE(1)
		})
	}, this.show = function(aY, aZ, dU, aMB, aXZ) {
		aXV = aXV || new aM8, aXU = (aXW = dU).od, aXV.show(aY, aZ, aXY(dU, aXZ), aMB), iJ = 1
	}, this.aE = function(aMF) {
		aXV && aXV.aE(aMF) && (iJ = 0, aXW = null)
	}
}

function a9X() {
	function aXg() {
		var id = jQ.hq(3);
		return 0 === id ? {
			id: id,
			fi: jQ.hq(30),
			dR: fd.fy.a8x(gL.i5.jT(7))
		} : 1 === id ? {
			id: id,
			fi: jQ.hq(30),
			a0Q: jQ.hq(3),
			value: jQ.hq(30),
			target: jQ.hq(30)
		} : 2 === id ? {
			id: id,
			fi: jQ.hq(30),
			a0Q: jQ.hq(3)
		} : 3 === id ? {
			id: id,
			fi: jQ.hq(30),
			a0Q: jQ.hq(3),
			value: jQ.hq(4),
			target: jQ.hq(30)
		} : 4 === id ? {
			id: id,
			fi: jQ.hq(30),
			a0Q: jQ.hq(3),
			target: jQ.hq(30)
		} : 5 === id ? {
			id: id,
			a0Q: jQ.hq(6)
		} : 6 === id ? {
			id: id,
			value: jQ.hq(17)
		} : null
	}
	this.aXc = function(hm) {
		if (hm !== fz.eG.hz) fz.eG.close(hm, 3239);
		else if (6 !== iY.iZ()) fz.eG.close(hm, 3271);
		else {
			fd.w();
			for (var aH = 0; aH < 4; aH++) {
				var tA = fd.eG.tB[aH],
					playerCount = (tA.sU = jQ.hq(10), tA.ey = jQ.hq(6), tA.mapSeed = jQ.hq(14), tA.tD = jQ.hq(4), tA.tE = jQ.hq(6), tA.tF = jQ.hq(4), tA.tO = jQ.hq(1), tA.tH = jQ.hq(12), tA.spawningSeed = jQ.hq(14), jQ.hq(16));
				fd.tI.tM[aH] = jQ.hq(16);
				for (var dF = 0; dF < playerCount; dF++) fd.tI.a16(aH, jQ.hq(30), gL.i5.jT(5), jQ.hq(4), jQ.hq(30), jQ.hq(7), jQ.hq(16), jQ.hq(18), jQ.hq(11), jQ.hq(12))
			}
			fZ.ff(29), fd.eG.aIi(!0)
		}
	}, this.aXd = function(hm) {
		if (hm !== fz.eG.hz) fz.eG.close(hm, 3239);
		else if (fd.nz) {
			fd.eG.tS[0] = jQ.hq(20), fd.eG.tS[1] = jQ.hq(20);
			for (var aXe = jQ.hq(16), dF = 0; dF < aXe; dF++) {
				var id = jQ.hq(3);
				0 === id ? fd.tI.a16(jQ.hq(2), jQ.hq(30), gL.i5.jT(5), 0, 1234566, 127, 0, jQ.hq(18), 0, jQ.hq(12)) : 1 === id ? fd.tI.a1T(jQ.hq(16), jQ.hq(2)) : 2 === id ? fd.tI.a1P(jQ.hq(16), jQ.hq(2), jQ.hq(2)) : 3 === id ? fd.tI.a1S(jQ.hq(
					16), jQ.hq(2)) : 4 === id ? fd.tI.a1I(jQ.hq(16), jQ.hq(2), jQ.hq(4), jQ.hq(30), jQ.hq(7), jQ.hq(16), jQ.hq(11)) : 5 === id && fd.tI.a1J(jQ.hq(16), jQ.hq(2), jQ.hq(1))
			}
			for (var aH = 0; aH < 4; aH++) {
				var tA = fd.eG.tB[aH];
				if (tA.sU = jQ.hq(10), 0 === tA.sU) {
					if (tA.o6 = jQ.hq(10), tA.o3 = jQ.hq(10), fd.vj.aBA(aH)) return;
					tA.ey = jQ.hq(6), tA.mapSeed = jQ.hq(14), tA.tD = jQ.hq(4), tA.tE = jQ.hq(6), tA.tF = jQ.hq(4), tA.tO = jQ.hq(1), tA.tH = jQ.hq(12), tA.spawningSeed = jQ.hq(14), tA.yV.push(tA.yV[0]), tA.yV.shift()
				}
			}
			fd.eG.aIk()
		} else fz.eG.close(hm, 3251)
	}, this.aXf = function(hm) {
		if (hm !== fz.eG.hz) fz.eG.close(hm, 3272);
		else if (fd.nz) {
			for (var a0X = jQ.hq(4), tA = fd.eG.tB[a0X], yS = tA.yS, aX3 = (tA.yT = jQ.hq(20), jQ.hq(6)), aH = 0; aH < aX3; aH++) {
				var aF5 = aXg();
				fd.yP.aF4(aF5), yS.push(aF5)
			}
			fd.eG.aIo(a0X)
		} else fz.eG.close(hm, 3273)
	}, this.aXh = function(hm) {
		hm !== fz.eG.hz ? fz.eG.close(hm, 3276) : fd.nz ? fd.message.a8u(aXg()) : fz.eG.close(hm, 3277)
	}
}

function aXi() {
	function aXj() {
		if (2 === b4.cU) return 1;
		d3.aXK(), b4.cU = 2, b4.a0x = b4.fC
	}

	function aXk() {
		a0z.aXl.sy(), pB.show(1 === b4.eR, !1, 2 === b4.eR), a0z.result.sy(), a0z.a1m.cX(), a0z.aXm.cX(), a0z.aXm.aEm(), d8.f8(!0), d8.em(247), d8.em(956), d8.em(957), p6.c2(!0), bQ.c2(!0), d3.c2(), aD.aNU(), b4.bw && aF.aLU.aQa(), aF.aG = !0, l9
		.qE(), a0.a1.setState(0)
	}
	this.aXJ = function() {
		aXj() || (b4.a2c = 2, aXk())
	}, this.a11 = function() {
		aXj() || (b4.a2c = 1, aXk())
	}
}

function aIw() {
	(aIY = void 0 === aIY ? document.createElement("canvas") : aIY).width = ev.f0, aIY.height = ev.f1, aJ1 = aIY.getContext("2d", {
		alpha: !0
	}), aJ2 = a8N = null, aJ2 = aJ1.getImageData(0, 0, ev.f0, ev.f1), a8N = aJ2.data, aP.g9.xk(a8N)
}

function aPK() {
	var aXn;
	this.a3x = null, this.aHy = 0, this.w = function() {
		aXn = [], 9 === b4.f7 && this.aXo()
	}, this.aXo = function() {
		this.a3x = [0, 0, 0, 0, 0, 0];
		for (var aXp = [256, 227, 170, 148, 100, this.aHy = 0, 0, 0], a3Q = [0, 8, 24, 30, 46, 70, 256, 333], aXq = [0, 0, 3, 7, 14, 22, 256, 179], c = b4.du, aH = 1; aH < aXp.length; aH++)
			if (c <= a3Q[aH]) {
				this.aHy = aXp[aH - 1] - aA.aB((c - a3Q[aH - 1]) * (aXp[aH - 1] - aXp[aH]), a3Q[aH] - a3Q[aH - 1]), this.a3x[5] = aXq[aH - 1] - aA.aB((c - a3Q[aH - 1]) * (aXq[aH - 1] - aXq[aH]), a3Q[aH] - a3Q[aH - 1]), this.a3x[0] = b4.dg - c -
					this.aHy - this.a3x[5];
				break
			} b4.aHv = b4.dg - b4.du, b4.data.numberTeams = (0 < b4.du) + (0 < b4.aHv), b4.data.playerCount = b4.a3n = b4.du + b4.aHv, b4.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, b4.du + this.aHy, b4.aHv - this.aHy]), b4.x7
			.g7()
	}, this.aBO = function(player) {
		aXn.push({
			player: player,
			eU: 14 + kI.nG(20)
		})
	}, this.cX = function() {
		if (9 === b4.f7)
			for (var aH = aXn.length - 1; 0 <= aH; aH--) --aXn[aH].eU <= 0 && (dl.eh(aXn[aH].player, 0, dY.yP.ms + dY.yP.mu), aXn.splice(aH))
	}
}

function a9A() {
	this.vw = function(player) {
		return !!b4.data.passableWater && eF.eG.lQ !== eF.eG.aDu && eF.eG.wL[player] !== eF.eG.aJC && 0 !== b2.ld[player].length
	}, this.aNh = function(aN0) {
		var a95 = mK.vu[1];
		return !(4 <= a95 || !eF.fr.wJ(dH.ls(aN0))) && dw.dx(dH.ls(dH.aNI(aN0, a95)))
	}
}

function a9V() {
	this.aKq = function(hm, i0) {
		jQ.w(i0), 0 === jQ.size ? fz.eG.jS(hm, 3205) : ((0 === jQ.hq(1) ? function(hm) {
			var aXu = jQ.hq(6);
			0 === aXu ? function(hm) {
					if (0 === hm && 8 !== iY.iZ()) {
						fZ.eG.aWj();
						for (var aY3 = jQ.hq(12), aY4 = jQ.hq(6), ar = new Array(aY3), aH = 0; aH < aY3; aH++) ar[aH] = jQ.hq(aY4);
						p4.aHU(ar)
					}
				}(hm) : 2 === aXu ? fz.a9W.aXc(hm) : 3 === aXu || 4 === aXu ? o2.w() : 5 === aXu ? fz.a9Y.aXw() : 9 === aXu ? fz.a9Y.aXx(hm) : 10 === aXu ? fz.a9a.aXy() : 11 === aXu ? fz.a9Y.aXz(hm) : 12 === aXu ? fz.a9a.aY0() :
				13 === aXu ? fz.a9c.jP() : 14 === aXu ? fz.a9c.jY() : 15 === aXu ? fz.a9Y.aY1() : 16 === aXu ? fz.a9W.aXd(hm) : 17 === aXu ? fz.a9W.aXf(hm) : 19 === aXu ? fz.a9W.aXh(hm) : 20 === aXu && fz.a9Y.aY2(hm)
		} : function(hm) {
			if (8 !== iY.iZ() && !o2.vi()) return;
			if (hm !== fz.eG.o6) fz.eG.jS(hm, 3244);
			else if (0 === jQ.hq(1)) aF.aLU.l3(jQ.i0);
			else {
				var aH, hm = jQ.hq(2);
				if (0 === hm) {
					var eM, eK = jQ.hq(9);
					0 !== b2.bN[eK] && 0 !== b2.bN[b4.b5] && (eM = jQ.hq(10), d8.eJ(eK, b4.b5, eM), dl.eh(eK, 1, eM))
				} else if (1 === hm) ! function() {
					var eK = jQ.hq(9);
					0 !== b2.bN[eK] && 0 !== b2.bN[b4.b5] && aFs.aVG(0, [eK], !0) && d8.eg(eK, 1)
				}();
				else if (2 === hm) ! function() {
					var eK = jQ.hq(9),
						target = jQ.hq(9);
					0 !== b2.bN[eK] && 0 !== b2.bN[target] && 0 !== b2.bN[b4.b5] && aFs.aVG(1, [eK], !0) && (dl.eh(eK, 3, 96), dl.eh(target, 4, 96), d8.ek(eK, target))
				}();
				else if (hs.aEQ && !hs.aER) {
					var ay = 540;
					for (hn.gD(17287), hn.hr(1, 0), hn.hr(6, 10), ay = Math.min(dB.l5.a2j.length, 540), aH = 0; aH < ay; aH++) hn.ol(32, dB.l5.a2j[aH]);
					fz.eG.send(fz.eG.o6, hn.i0)
				}
			}
		})(hm), aF.aLa())
	}, this.aY5 = function() {
		jQ.p = 1;
		var aXu = jQ.hq(6),
			aEN = jQ.hq(10);
		return fz.eG.hz === aEN ? (fz.eG.o6 = aEN, !1) : (fz.eG.close(fz.eG.hz, 3247), fz.eG.o6 = aEN, o2.o3 = jQ.hq(10), o2.o4 = jQ.hq(3 === aXu ? 9 : 1), fz.eG.vd(aEN, 5) && fz.eK.o1(), !0)
	}
}

function it() {
	var gQ, gR, gS, iK;

	function gV() {
		gZ(), 1 !== b4.data.colorsType && (b4.data.colorsData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function aYA() {
		gZ(), fZ.ff(21)
	}

	function gZ() {
		1 === b4.data.gameMode ? b4.x7.g7() : 0 === b4.data.gameMode && 1 === b4.data.colorsType && aP.g9.h9(gS.gf(), b4.data.colorsData, 262143)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, iK = [new fR("⬅️ " + L(71), gV)], 1 === b4.data.gameMode && iK.push(new fR(L(509), aYA, 1, 1)), gQ = new gU(L(174), iK), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), 0 === b4.data.gameMode && (gj.gm(new gn({
			go: [L(175), L(75)],
			value: b4.data.colorsType
		}, function(p) {
			gZ(), b4.data.colorsType = p, 1 !== b4.data.colorsType || b4.data.colorsData && b4.data.colorsData.length === b4.dg || (b4.data.colorsData = new Uint32Array(b4.dg)), fZ.ff(21)
		})), gj.gp(new gq));
		gj.gp(new gr({
			value: b4.data.selectableColor
		}, L(510), function(value) {
			b4.data.selectableColor = value
		})), gg.push(gj)
	}(iK = []), 0 === b4.data.gameMode ? 1 === b4.data.colorsType && function(gg) {
		var gj = new gk;
		gj.gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.colorsData, 1)), gj.gp(gS), gg.push(gj)
	}(iK) : (b4.x7.g7(), iK.push(function() {
		var gj = new gk;
		gj.gl(L(80));
		for (var aH = 0; aH < e4.e5.length; aH++) {
			var hC = (aH + 1) % e4.e5.length,
				bF = gj.hB((0 == hC ? "" : "Team ") + e4.e5[hC]);
			aH && (bF.style.marginTop = "0.5em"), gj.gp(new nm({
				p: -1,
				value: b4.data.teamPlayerCount[hC]
			}, 1, 0, function(bF) {
				gQ.gv[1].rf(0);
				var playerCount = aA.cI(Math.floor(bF.target.value), 0, 512);
				bF.target.value = playerCount, b4.data.teamPlayerCount[bF.target.aYB] = playerCount
			})).bF.aYB = hC
		}
		return gj
	}())), iK))
}

function aPZ() {
	this.mo = !1, this.aMt = !1, this.aPk = !1, this.aYC = [0, 0, 0, 0], this.lA = function() {
		var bS, bT, bU, bV;
		this.aPk = this.aPk || this.aMt, (this.aMt || this.mo && this.aPk) && (bS = a6y.mk[0], bT = a6y.mk[1], bU = a6y.mk[2], bV = a6y.mk[3], bS = bS < this.aYC[0] ? this.aYC[0] : bS, bT = bT < this.aYC[1] ? this.aYC[1] : bT, bU = bU > this.aYC[
				2] ? this.aYC[2] : bU, bV = bV > this.aYC[3] ? this.aYC[3] : bV, this.aMt = !1, this.mo = !1, bS === this.aYC[0] && bT === this.aYC[1] && bU === this.aYC[2] && bV === this.aYC[3] ? this.lL() : bS <= bU && bT <= bV && aJ1
			.putImageData(aJ2, 0, 0, bS, bT, bU - bS + 1, bV - bT + 1))
	}, this.lL = function() {
		this.aPk && this.aYC[2] >= this.aYC[0] && this.aYC[3] >= this.aYC[1] && aJ1.putImageData(aJ2, 0, 0, this.aYC[0], this.aYC[1], this.aYC[2] - this.aYC[0] + 1, this.aYC[3] - this.aYC[1] + 1), this.aPk = !1
	}, this.qE = function() {
		this.aYC[2] >= this.aYC[0] && this.aYC[3] >= this.aYC[1] && aJ1.putImageData(aJ2, 0, 0, this.aYC[0], this.aYC[1], this.aYC[2] - this.aYC[0] + 1, this.aYC[3] - this.aYC[1] + 1), this.aPk = !1
	}, this.w = function() {
		var aY, aZ;
		this.mo = !1, this.aMt = !1, this.aPk = !1, this.aYC[0] = ev.f0, this.aYC[1] = ev.f1, this.aYC[2] = this.aYC[3] = 0;
		loop: for (aY = 1; aY < ev.f0 - 1; aY++)
			for (aZ = ev.f1 - 2; 1 < aZ; aZ--)
				if (1 === a8N[dw.aC3(aY, aZ) + 2]) {
					this.aYC[0] = aY;
					break loop
				} loop: for (aZ = 1; aZ < ev.f1 - 1; aZ++)
			for (aY = ev.f0 - 2; 1 < aY; aY--)
				if (1 === a8N[dw.aC3(aY, aZ) + 2]) {
					this.aYC[1] = aZ;
					break loop
				} loop: for (aY = ev.f0 - 2; 0 < aY; aY--)
			for (aZ = ev.f1 - 2; 1 < aZ; aZ--)
				if (1 === a8N[dw.aC3(aY, aZ) + 2]) {
					this.aYC[2] = aY;
					break loop
				} loop: for (aZ = ev.f1 - 2; 0 < aZ; aZ--)
			for (aY = ev.f0 - 2; 1 < aY; aY--)
				if (1 === a8N[dw.aC3(aY, aZ) + 2]) {
					this.aYC[3] = aZ;
					break loop
				}
	}
}

function a5B() {
	var aYD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aSc = function(bL) {
		var aYE, ct = new Date(bL.getTime() - 6e4 * bL.getTimezoneOffset()).toUTCString();
		return ct.length < 12 || (ct = ct.substring(5, ct.length), 0 === (bL = bL.getTimezoneOffset())) ? ct : (aYE = (bL < 0 ? "+" : "-") + aA.aB(Math.abs(bL), 60), 0 == (bL = Math.abs(bL) % 60) ? ct + aYE : ct + aYE + ":" + (bL < 10 ? "0" :
			"") + bL)
	}, this.aSp = function(bL) {
		var ct = bL.toUTCString();
		return ct.length < 12 ? ct : function(bL) {
			return aYD[bL.getUTCDay()]
		}(bL) + ", " + ct.substring(5, ct.length - 4)
	}
}

function a57() {
	this.a0y = function(kL) {
		return 0 === kL ? 1 === b4.cU && b4.bv : 1 === kL ? 1 === b4.cU && !b4.bv : 2 === b4.cU
	}, this.la = function(player) {
		return 0 !== b2.bN[player] && 2 !== b2.es[player]
	}, this.nM = function(player) {
		return player === b4.b5 && 2 !== b2.es[player]
	}, this.wz = function(player, lv) {
		return player !== lv && (0 === e4.e7[player] || e4.e7[player] !== e4.e7[lv])
	}, this.aO1 = function() {
		return fG.fH < 2 ? 0 : b4.e2 ? 1 < pC.aDK() : b2.b3[pd[1]]
	}, this.aXI = function() {
		var fH = fG.fH;
		if (0 !== fH) {
			if (!b4.e2) return !this.dj(pd[0]);
			for (var e7 = e4.e7, a34 = pC.a35(), fI = fG.fI, aH = fH - 1; 0 <= aH; aH--) {
				var dP = fI[aH];
				if (e7[dP] === a34 && !this.dj(dP)) return 1
			}
		}
		return 0
	}, this.a7k = function(player) {
		return player === b4.b5
	}, this.dn = function(lv, cT) {
		return b2.e1[b4.b5] < cT * b2.e1[lv]
	}, this.dj = function(player) {
		return player >= b4.du || 2 === b2.es[player]
	}, this.pg = function(player) {
		return 0 !== b2.bN[player]
	}, this.vM = function(player) {
		return player < b4.du
	}, this.aNe = function(aGw, aGx) {
		return aGw !== aGx
	}, this.lx = function(player, b0) {
		var min;
		return b0 = this.aYG(player, b0), b2.e1[player] += b0, b2.aBH[player] && (min = Math.min(b2.aBH[player], b2.e1[player]), b2.aBH[player] -= min, b2.e1[player] -= min), b0
	}, this.aYG = function(player, b0) {
		var ah = b2.e1[player];
		return b0 = Math.min(b0, b2.b3[player] * b4.aIs - ah), b0 = Math.min(b0, b4.a7l - ah), Math.max(b0, 0)
	}, this.aDv = function(player, bp, aYH, aYI) {
		var ah = b2.e1[player],
			bp = aA.aB(ah * (bp + 1), 1024),
			aYH = aA.aB(aYH * ah, 1024),
			bp = Math.min(bp, ah - aYH);
		return 10 === b4.f7 && (bp = aJ4.zo(player, bp)), mK.mL[0] = bp, mK.mL[1] = aYH, aYI <= bp
	}, this.mC = function(player, vt, mB) {
		var player = b2.e1[player],
			aYJ = aA.aB(64 * player, 1024);
		return vt = Math.min(vt, player - aYJ), vt = this.aYG(mB, vt), mK.mL[0] = vt, mK.mL[1] = aYJ, 1 <= vt
	}, this.aYK = function(player, vt, mB) {
		var player = b2.e1[player],
			aYJ = aA.aB(64 * player, 1024);
		return vt = Math.min(vt, player - aYJ), this.aYG(mB, vt)
	}, this.mI = function(vt, mB) {
		return vt = this.aYG(mB, vt), mK.mL[0] = vt, mK.mL[1] = 0, 1 <= vt
	}, this.cB = function(player, aYL) {
		return aA.aB(b2.e1[player] * (aYL + 1), 1024)
	}, this.aYM = function(player, aYH) {
		aYH = aA.aB(aYH * b2.e1[player], 1024);
		mK.mL[1] = aYH, b2.e1[player] -= aYH
	}, this.aAM = function(player, aYN) {
		var bH, mc, dL = b2.e1[player];
		return aYN <= dL ? b2.e1[player] -= aYN : (b2.e1[player] = 0, mc = b2.aBH[player] + (bH = 5 * ((dL = aYN - dL) >> 2)), aM.lw(player, bH - dL, 12), mc <= b4.aIq ? b2.aBH[player] = mc : (b2.aBH[player] = b4.aIq, aM.lw(player, mc - b4.aIq,
			18))), aYN
	}, this.yo = function(player, bp) {
		var e1 = b2.e1,
			ah = e1[player],
			bp = aA.aB(ah * (bp + 1), 1024),
			aYJ = Math.max(aA.aB(ah, 10), 1e3);
		return (bp = Math.min(bp, ah - aYJ)) < 0 ? (e1[player] = 0, aYJ = Math.min(1e3, ah + b4.aIq - b2.aBH[player]), mK.mL[1] = aYJ, b2.aBH[player] += aYJ - ah, 0) : (mK.mL[1] = aYJ, 10 === b4.f7 && (bp = aJ4.zo(player, bp)), e1[player] -=
			aYJ + bp, bp)
	}, this.aE5 = function(player) {
		b2.e1[player] -= mK.mL[0] + mK.mL[1]
	}, this.aNf = function(player, lv) {
		return (lv = Math.min(lv, b4.dg)) < b4.dg && 0 === b2.bN[lv] && (lv = b4.dg), (mK.a2B[0] = lv) === b4.dg || lb.lc(player, lv)
	}, this.aLC = function(player, mB) {
		return 0 !== b2.bN[mB] && !lb.lc(player, mB)
	}, this.aXN = function(player, aYO) {
		for (var dP, ay = fG.fH, ft = 0, aYP = pd, aH = 0; aH < ay; aH++)
			if (dP = aYP[aH], !this.dj(dP)) {
				if (player === dP) return !0;
				if (++ft > aYO) return !1
			} return !1
	}, this.a31 = function(dP) {
		var aOz = b4.e2 ? pC.aDE() : b2.b3[pd[0]];
		return aOz >= aA.aB(dP * b4.a5K, 100)
	}, this.aTW = function(b0, min, max) {
		return Math.floor(aA.cI(isNaN(b0) ? 0 : Number(b0), min, max))
	}
}

function aPB() {
	var aYQ, aYR, aYS, aYT, aYU, aYV, aYW, aYX, aYY, aYZ, aYa, aYb, aYc, aYd, aYe, aYf, aYg, aYh, aYi, aYj, aYk, aYl, position, aYm, aYn, aYo, aYp, aYq, aYr = 1,
		aYs = 1,
		aYt = "";
	var leaderboardHasChanged = true;
	this.playerPos = b4.b5;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => a5L[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(a5L[b4.b5]);
	}

	function aYv() {
		aYW.clearRect(0, 0, aYQ, s1),
			aYW.fillStyle = aYq ? ab.a4s : ab.a4o,
			aYW.fillRect(0, 0, aYQ, aYb),
			aYW.fillStyle = ab.c9,
			aYW.fillRect(0, aYb, aYQ, s1 - aYb);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			a5L[b4.b5]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aYl = -1;
		if (__fx.leaderboardFilter.enabled && aYl >= __fx.leaderboardFilter.filteredLeaderboard.length) aYl = -1;
		playerPos >= position && aYx(playerPos - position, ab.t7),
			0 !== a5L[b4.b5] && 0 === position && aYx(0, ab.a4v),
			-1 !== aYl && aYx(aYl, ab.q9),
			aYW.fillStyle = ab.c9,
			//console.log("drawing", aYl),
			aYW.clearRect(0, s1 - __fx.leaderboardFilter.tabBarOffset, aYQ, __fx.leaderboardFilter.tabBarOffset);
		aYW.fillRect(0, s1 - __fx.leaderboardFilter.tabBarOffset, aYQ, __fx.leaderboardFilter.tabBarOffset);
		aYW.fillStyle = ab.am,
			aYW.fillRect(0, aYb, aYQ, 1),
			aYW.fillRect(0, s1 - __fx.leaderboardFilter.tabBarOffset, aYQ, 1),
			__fx.leaderboardFilter.drawTabs(aYW, aYQ, s1 - __fx.leaderboardFilter.tabBarOffset, ab.t7),
			aYW.fillRect(0, 0, aYQ, a3.qP),
			aYW.fillRect(0, 0, a3.qP, s1),
			aYW.fillRect(aYQ - a3.qP, 0, a3.qP, s1),
			aYW.fillRect(0, s1 - a3.qP, aYQ, a3.qP), aYW.font = aYR, aP.aS.textBaseline(aYW, 1), aP.aS.textAlign(aYW, 1), aYW.fillText(aYt, Math.floor((aYQ + aYb - 22) / 2), Math.floor(aYZ + aYS / 2));
		__fx.playerList.drawButton(aYW, 12, 12, aYb - 22);
		var dF, hS = playerPos < position + aYU - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aYU)
				position = (result.length > aYU ? result.length : aYU) - aYU;
			//if (position >= result.length) position = result.length - 1;
			for (aYW.font = aYT, aP.aS.textAlign(aYW, 0), dF = aYU - hS; 0 <= dF; dF--) {
				const pos = result[dF + position];
				if (pos !== undefined)
					aYy(pd[pos]), aYz(dF, pos, pd[pos]);
			}
			for (aP.aS.textAlign(aYW, 2), dF = aYU - hS; 0 <= dF; dF--) {
				const pos = result[dF + position];
				if (pos !== undefined)
					aYy(pd[pos]), aZ0(dF, pd[pos]);
			}
		} else {
			for (aYW.font = aYT, aP.aS.textAlign(aYW, 0), dF = aYU - hS; 0 <= dF; dF--)
				aYy(pd[dF + position]), aYz(dF, dF + position, pd[dF + position]);
			for (aP.aS.textAlign(aYW, 2), dF = aYU - hS; 0 <= dF; dF--)
				aYy(pd[dF + position]), aZ0(dF, pd[dF + position]);
		}
		2 == hS && (aYy(b4.b5), aP.aS.textAlign(aYW, 0), aYz(aYU - 1, a5L[b4.b5], b4.b5), aP.aS.textAlign(aYW, 2), aZ0(aYU - 1, b4.b5)), 0 === position && (hS = .7 * aYc / nj.get(4).height, aYW.setTransform(hS, 0, 0, hS, Math.floor(aYd + .58 * aYc +
			.5 * hS * nj.get(4).width), Math.floor(aYZ + aYS + .4 * aYc)), aYW.imageSmoothingEnabled = !0, aYW.drawImage(nj.get(4), -Math.floor(nj.get(4).width / 2), -Math.floor(nj.get(4).height / 2)), aYW.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aYy(player) {
		b4.e2 && (aYW.fillStyle = e4.a3N[e4.zR[player]])
	}

	function aYx(aH, aZ2) {
		aYW.fillStyle = aZ2, aH = aYU - 1 < aH ? aYU - 1 : aH;
		aZ2 = Math.floor((aH === aYU - 1 ? 2 : 0 === aH ? 1.15 : 1) * aYc), aZ2 = aH === aYU - 2 ? Math.floor(aYb + 9.15 * aYc) - Math.floor(aYb + 8.15 * aYc) : aZ2;
		aYW.fillRect(0, Math.floor(aYb + (aH + (0 === aH ? 0 : .15)) * aYc), aYQ, aZ2)
	}

	function aYz(v9, ft, aH) {
		aYW.fillText(aYh[ft], aYd, Math.floor(aYZ + aYS + (v9 + .5) * aYc)), 1 === b2.es[aH] && (aYW.font = "italic " + aYT);
		ft = Math.floor(aYZ + aYS + (v9 + .5) * aYc);
		aYW.fillText(b2.de[aH], aYe, ft), 0 !== b2.es[aH] && (aYW.font = aYT), aH < b4.du && 2 !== b2.es[aH] || aYW.fillRect(aYe, ft + .35 * aYr, aYg[aH], Math.max(1, .1 * aYr))
	}

	function aZ0(v9, aH) {
		aYW.fillText(b2.b3[aH], aYf, Math.floor(aYZ + aYS + (v9 + .5) * aYc))
	}
	this.w = function() {
		var aH;
		for (aYp = aYo = aYm = 0, aYq = aYn = !1, aYl = -1, aYU = a0.a1.a2() ? 6 : 10, aYs = (position = 0) === (aYs = gH.gJ.data[11].value) ? 10 : 1 === aYs ? 5 : 1, aYk = !1, aYi = new Uint16Array(aYU + 1), aYj = new Uint32Array(aYU + 1), aYY =
			b4.dg, pd = new Uint16Array(aYY), a5L = new Uint16Array(aYY), aH = aYY - 1; 0 <= aH; aH--) pd[aH] = aH, a5L[aH] = aH;
		this.resize(!0), aYg = new Uint16Array(b4.dg);
		var aYu = Math.floor(aYQ - aYe - aYd - aYX);
		for (aYh = new Array(b4.dg), aYW.font = aYT, aH = b4.dg - 1; 0 <= aH; aH--) aYh[aH] = aH + 1 + ".", b2.de[aH] = aP.ao.ap(b2.e0[aH], aYT, aYu), aYg[aH] = Math.floor(aYW.measureText(b2.de[aH]).width);
		aYv()
	}, this.resize = function(w) {
		if (s1 = a0.a1.a2() ? (aYQ = Math.floor(.335 * y.bx), Math.floor(aYU * aYQ / 8)) : (aYQ = Math.floor(.27 * y.bx), Math.floor(aYU * aYQ / 10)), aYQ = Math.floor(.97 * aYQ), (aYV = document.createElement("canvas")).width = aYQ, aYV.height =
			s1, aYW = aYV.getContext("2d", {
				alpha: !0
			}), aYZ = .025 * aYQ, aYS = .16 * aYQ, aYa = 0 * aYQ, aYb = Math.floor(.45 * aYZ + aYS), aYc = (s1 - aYS - 2 * aYZ - aYa) / aYU,
			aYV.height = s1 += aYc, __fx.leaderboardFilter.tabBarOffset = Math.floor(aYc * 1.3), __fx.leaderboardFilter.verticalClickThreshold = s1 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aYQ,
			aYR = aP.aS.aT(1, Math.floor(.55 * aYS)), aYr = Math.floor((a0.a1.a2() ? .67 : .72) * aYc), aYT = aP.aS.aT(0, aYr), aYW.font = aYT, aYd = Math.floor(.04 * aYQ), aYe = Math.floor((a0.a1.a2() ? .195 : .18) * aYQ), aYX = Math.floor(aYW
				.measureText("00920600").width), aYW.font = aYR, aYf = aYQ - aYd, !w) {
			aYW.font = aYT;
			for (var aH = b4.dg - 1; 0 <= aH; aH--) aYg[aH] = Math.floor(aYW.measureText(b2.de[aH]).width);
			aYv()
		}
		aYt = aP.ao.ap(L(511), aYR, .96 * aYQ)
	}, this.aQp = function() {
		return aYQ
	}, this.c2 = function(f9, aYw) {
		(aYw || aYk && (f9 || aF.bP() % aYs == 0)) && (aYk = !1, aYv())
	}, this.cX = function() {
		! function() {
			for (var dF = aYY - 1; 0 <= dF; dF--) 0 === b2.bN[pd[dF]] && ! function(dF) {
				var aZ9 = pd[dF];
				aYY--;
				for (var aH = dF; aH < aYY; aH++) pd[aH] = pd[aH + 1], a5L[pd[aH]] = aH;
				pd[aYY] = aZ9, a5L[pd[aYY]] = aYY
			}(dF)
		}();
		for (var aZ7, pR = aYY - 1, dF = 0; dF < pR; dF++) b2.b3[pd[dF]] < b2.b3[pd[dF + 1]] && (aZ7 = pd[dF], pd[dF] = pd[dF + 1], pd[dF + 1] = aZ7, a5L[pd[dF]] = dF, a5L[pd[dF + 1]] = dF + 1);
		! function() {
			for (var aJ = aYk, hS = (aYk = !0, a5L[b4.b5] >= aYU - 1 ? aYU - 2 : aYU - 1), aH = hS; 0 <= aH; aH--)
				if (aYi[aH] !== pd[aH] || aYj[aH] !== b2.b3[pd[aH]]) return;
			(hS != aYU - 2 || aYi[aYU] === a5L[b4.b5] && aYj[aYU] === b2.b3[b4.b5]) && (aYk = aJ)
		}();
		for (var aH = aYU - 1; 0 <= aH; aH--) aYi[aH] = pd[aH], aYj[aH] = b2.b3[pd[aH]];
		aYi[aYU] = a5L[b4.b5], aYj[aYU] = b2.b3[b4.b5];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.a5 = function(aY, aZ) {
		if (a4L(aY, aZ)) {
			if (__fx.utils.isPointInRectangle(aY, aZ, a3.gap + 12, a3.gap + 12, aYb - 22, aYb - 22)) __fx.playerList.display(b2.e0);
			else {
				if (aZ - a3.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aY - a3.gap);
				aY = aZB(aZ);
				0 <= aY ? (aYm = aF.bL, aYn = !0, aYo = aYp = aY, qr.rA() && (aY = iA(-1, aYp, aYU), aYl !== (aY = aY === aYU ? -1 : aY)) && (aYl = aY, aYv(), aF.aG = !0)) : (aYq && (aYq = !1, aYv(), aF.aG = !0), fZ.ff(10, 0, new zU({
					zW: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aYv(), aF.aG = !0
	};

	function aZB(aZ) {
		return (aZ -= a3.gap + aYb) < 0 ? Math.floor(aZ / aYc) - 1 : aZ < (aYU - 1) * aYc ? Math.floor(aZ / aYc) : aZ < s1 - aYb ? aYU - 1 : (aZ -= s1 - aYb, aYU + Math.floor(aZ / aYc))
	}

	function a4L(aY, aZ) {
		return aY >= a3.gap && aY < a3.gap + aYQ && aZ >= a3.gap && aZ < a3.gap + s1
	}
	this.aI = function(aY, aZ) {
		var aJ, aZA;
		if (__fx.utils.isPointInRectangle(aY, aZ, a3.gap + 12, a3.gap + 12, aYb - 22, aYb - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aY, aZ, a3.gap, a3.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aY - a3.gap)) return aZA = aZB(aZ), aY = a4L(aY, aZ), aZ = !(!(aZA < 0 && aY) || qr.rA()), aYn ? (aJ = position, (position = iA(0, position += aYo - aZA, b4.dg - aYU)) !== aJ ? (aYq = aZ,
			aZA = iA(-1, aYo = aZA, aYU), aYl = aZA = aZA !== aYU && aY ? aZA : -1, aYv(), aF.aG = !0) : aYq !== aZ && (aYq = aZ, aYv(), aF.aG = !0), !0) : (aZA = (aZA = iA(-1, aZA, aYU)) === aYU || !aY || qr.rA() ? -1 : aZA, (aYl !==
			aZA || aYq !== aZ) && (aYl = aZA, aYq = aZ, aYv(), aF.aG = !0))
	}, this.aK = function(aY, aZ) {
		if (!aYn) return !1;
		aYn = !1;
		var aZA = aZB(aZ);
		var isEmptySpace = false;
		return qr.rA() && -1 !== aYl && (aYl = -1, aYv(), aF.aG = !0), aF.bL - aYm < 350 && aYp === aZA && -1 !== (aZA = (aZA = iA(-1, aZA, aYU)) !== aYU && a4L(aY, aZ) ? aZA : -1) && (aY = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				pd[__fx.leaderboardFilter.filteredLeaderboard[aZA + position] ?? (isEmptySpace = true, a5L[b4.b5])]) : pd[aZA + position]), aZA === aYU - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : a5L[b4.b5]) >=
			position + aYU - 1 && (aY = b4.b5), !isEmptySpace && b4.e2 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aY, b2.e0, b4.o0), 0 !== b2.bN[aY] && !isEmptySpace) && dD.dE(aY, 800, !1, 0), !0
	}, this.cV = function(aY, aZ, deltaY) {
		var aZE;
		return !(aYn || b4.qJ || (aZE = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a4L(aY, aZ)) || (aY = (aY = iA(-1, aZB(aZ), aYU)) === aYU || qr.rA() ? -1 : aY, 0 < deltaY ? position < b4.dg - aYU && (position += Math.min(b4.dg - aYU -
			position, aZE), aYl = aY, aYv(), aF.aG = !0) : 0 < position && (position -= Math.min(position, aZE), aYl = aY, aYv(), aF.aG = !0), 0))
	}, this.aW = function() {
		aa.drawImage(aYV, a3.gap, a3.gap)
	}
}

function gO() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.gK = null
}

function aPW() {
	this.a10 = new aXi, this.result = new a2X, this.a2d = new vJ, this.aXm = new aEc, this.aXl = new aXR, this.a1m = new aZF, this.w = function() {
		this.result.w()
	}
}

function aVy() {
	var aZG = new Uint8Array(64);
	this.w = function() {
		var aH;
		for (aZG[0] = 45, aZG[37] = 95, aH = 0; aH < 10; aH++) aZG[aH + 1] = 48 + aH;
		for (aH = 0; aH < 26; aH++) aZG[aH + 11] = 65 + aH, aZG[aH + 38] = 97 + aH
	}, this.y8 = function(y5) {
		for (var xe = jQ, kF = new Uint8Array(y5), aH = 0; aH < y5; aH++) kF[aH] = xe.hq(6);
		return kF
	}, this.y7 = function(kF) {
		for (var ay = kF.length, aZH = aZG, ar = [], aH = 0; aH < ay; aH++) ar.push(String.fromCharCode(aZH[kF[aH]]));
		return ar.join("")
	}, this.aR = function(value, aZI) {
		for (var aZH = aZG, ar = [], aH = 0; aH < aZI; aH++) ar.push(String.fromCharCode(aZH[value >> 6 * (aZI - 1 - aH) & 63]));
		return ar.join("")
	}
}

function aDs() {
	this.cX = function() {
		if (aF.bP() % 51 == 45)
			for (var ay = eF.eG.lQ, lN = eF.eG.lN, wa = eF.eG.wa, wM = eF.eG.wM, eH = eF.eG.eH, aHr = e8.aHr, eA = e8.eA, aH = 0; aH < ay; aH++) {
				var v4, player, aLe, a95 = lN[aH];
				a95 % 64 == 6 || (v4 = wa[aH], (player = eF.fr.wI(v4[v4.length - 1])) < 0) || !aP.cA.wz(player, eH[aH] >> 3) || kI.nG(1e3) >= aHr[eA[player]] || ! function(aE1, v4) {
					for (var ay = v4.length - 1, aR5 = eF.eG.lj[aE1], wT = 0, aH = aR5 + 1; aH < ay; aH++) wT += dH.aLn(v4[aH], v4[aH + 1]);
					return (wT += dH.aLn(dH.lS(eF.eG.lO[aE1]), v4[aR5 + 1])) <= 60
				}(aH, v4) || (aLe = wM[aH], 64 <= a95 && eF.lT.aE2(player, aLe)) || function(player, v4, aLe, aE1, a95) {
					eF.vv.vw(player) && aP.cA.aDv(player, e8.aDw[e8.eA[player]], 32, 0) && (eF.eG.lN[aE1] = 64 + a95 % 64, eF.lT.dc(aLe, eF.eG.aJD), mK.ar[0] = eF.uM.uU(v4), mK.vu[1] = 6, aP.cA.aE5(player), eF.eG.aE6(player))
				}(player, v4, aLe, aH, a95)
			}
	}
}

function aPV() {
	this.eG = new aUm, this.a90 = new a38, this.w = function() {
		this.eG.w()
	}, this.cX = function() {
		0 !== this.eG.tt && this.eG.tt--
	}
}

function aPE() {
	var kL = 0;
	this.w = function() {
		p1.w(), kL = 0
	}, this.setState = function(aZL) {
		kL = aZL
	}, this.iZ = function() {
		return kL
	}, this.x9 = function() {
		this.setState(8), fZ.j3()
	}, this.fY = function(bF) {
		if (!ev.xj) return !1;
		if (!(aF.bL < 400)) {
			if ("Enter" === bF.key || "Escape" === bF.key) {
				if (this.aZM()) return !0;
				if ("Enter" === bF.key) {
					if (0 === kL) return !0;
					if (7 === kL) return !0
				}
			}
			return !1
		}
	}, this.pE = function() {
		aP4.resize()
	}, this.aZM = function() {
		return !!aP4.aE()
	}, this.a5 = function(aY, aZ) {
		!ev.xj || aP4.a5(aY, aZ) || 6 === kL && p3.a5(aY, aZ) || p2.a5(aY, aZ) || p4.a5(aY, aZ)
	}, this.aI = function(aY, aZ) {
		!p4.aHR && p1.aI(aY, aZ, !0) || p4.aI(aY, aZ)
	}, this.click = function(aY, aZ) {
		p4.aK()
	}, this.cV = function(aY, aZ, deltaY) {}, this.pF = function() {
		p1.aDc(), aF.aG = !0
	}, this.aW = function() {
		8 !== kL && 10 !== kL && (aa.imageSmoothingEnabled = !0, this.vm(), 0 !== kL && (p4.aW(), p5.aW(), this.aRo(), p2.aW()), 0 !== kL && 6 === kL && p3.aW(), aP4.aW(), fZ.aW())
	}, this.vm = function() {
		var aZO, aZN;
		if (__fx.makeMainMenuTransparent) aa.clearRect(0, 0, y.b, y.c);
		else ev.xj ? (aZN = y.b / ev.f0, aZO = y.c / ev.f1, aa.setTransform(aZN = aZO < aZN ? aZN : aZO, 0, 0, aZN, Math.floor((y.b - aZN * ev.f0) / 2), Math.floor((y.c - aZN * ev.f1) / 2)), aa.drawImage(ev.x5, 0, 0), aa.setTransform(1, 0, 0, 1,
			0, 0), aa.fillStyle = ab.a4S) : aa.fillStyle = ab.eX, aa.fillRect(0, 0, y.b, y.c)
	}, this.aRo = function() {
		var aZ = Math.floor(.3 * y.c),
			canvas = nj.vo("territorial.io"),
			x = (x = 1.75 * y.c / canvas.width) * canvas.width < .98 * y.b ? .98 * y.b / canvas.width : x,
			aY = (aa.globalAlpha = .15, aa.imageSmoothingEnabled = !1, Math.floor(.5 * (y.b - x * canvas.width))),
			aY = Math.floor(aY / x),
			aZ = Math.floor(aZ - .5 * canvas.height * x),
			aZ = Math.floor(aZ / x);
		aa.setTransform(x, 0, 0, x, aY, aZ), aa.drawImage(canvas, aY, aZ), aa.setTransform(1, 0, 0, 1, 0, 0), aa.globalAlpha = 1, aa.imageSmoothingEnabled = !0
	}
}

function j1() {
	var gQ, gR, gg;

	function aZU() {
		for (var colors = new Array(11), aH = 0; aH < 11; aH++) {
			var ar = gH.gJ.data[163 + aH].value.split(",");
			colors[aH] = new Uint8Array(3);
			for (var dF = 0; dF < 3; dF++) dF < ar.length && (colors[aH][dF] = Number(ar[dF]))
		}
		return colors
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(317), [new fR("⬅️ " + L(71), function() {
		fZ.gc()
	})]), gR = new gW(gQ.gX, ((gg = []).push(function() {
		var gj = new gk;
		return gj.gl(L(512)), gj.hB("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", gj.hB(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), gj
	}()), gg.push(function() {
		var gj = new gk,
			og = (gj.gl(L(513)), gH.gJ.data[174].value),
			nq = gj.np(og.length + " / 180"),
			aTb = (nq.style.textAlign = "center", new gs(0, 1, function(bF) {
				var bF = bF.target.value,
					eU = bF.length;
				nq.textContent = eU + " / 180", eU <= 180 && gH.rg.nf(174, bF)
			}));
		return aTb.bF.rows = 6, aTb.bF.style.fontSize = "1em", aTb.gt(og), gj.gp(aTb), gj
	}()), gg.push(function() {
		var gj = new gk;
		gj.gl(L(174));
		for (var aH = 0; aH < 11; aH++) {
			var us = gj.gp(new nm(gH.gJ.data[163 + aH]));
			aH && (us.bF.style.marginTop = "0.6em")
		}
		return gj.gp(new pw([new fR(L(258), function() {
			for (var data = gH.gJ.data, aH = 163; aH < 174; aH++) data[aH] && gH.gJ.pN(aH, data[aH].pQ);
			fZ.gc(), fZ.gb()[31] = null, fZ.ff(31)
		}).button])), gj
	}()), gg.push(function() {
		var gj = new gk;
		return gj.gl("Targeting"), gj.hB(L(259)), gj.gp(new nm(gH.gJ.data[175], 0, 0)), gj
	}()), gg.push(function() {
		var gj = new gk;
		return gj.gl(L(505)), gj.gp(new pw([new fR(L(283), function() {
			(new aK7).show(gH.gJ.data[174].value, aZU(), -1)
		}).button])), gj
	}()), gg.push(function() {
		var gj = new gk,
			aZV = (gj.gl(L(514)), gj.hB(L(515)), new nm(gH.gJ.data[176], 1, 0)),
			aZW = (gj.gp(aZV), new fR(L(516), function(bF) {
				return rd.button.textContent === L(139) && fz.eG.rh(0) && (aP.aS.hf(bF), rc(), fz.g0.oc(gH.gJ.data[176].value, aZU(), gH.gJ.data[175].value, gH.gJ.data[174].value)), !0
			}, 1)),
			rc = function() {
				rd.button.textContent = L(138), aZW.rf(1), aZW.button.style.color = ab.am
			},
			rd = new fR(L(138), function(bF) {
				return bF.textContent === L(138) ? (bF.textContent = L(139), aZW.rf(0), aZW.button.style.color = ab.eb) : rc(), !0
			});
		return gj.gp(new pw([rd.button, aZW.button])), gj
	}()), gg))
}

function aPD() {
	var aZX, aZY, aCg, aZZ, aZa, aZb, aZc, aZd, aZe, aCf, aZf, aUj, aZg, aZh = 1;

	function aZi(aZj) {
		!aZj && 1 === aZg && aZh ? (aZh = 0, fz.eG.close(aZg, 3280)) : aZg = (aZg + 1) % fz.eG.aLw, aUj = aF.bL, fz.eG.vd(aZg, 4) && fz.t3.hl(aZg)
	}

	function aZk() {
		0 === aZg ? aM6.a2S(3249) : aZi()
	}

	function aZp(aZ, aHI, sU) {
		var bS = Math.floor((y.b - aZZ) / 2) + aZc,
			bU = bS + Math.floor(sU * (aZZ - 2 * aZc));
		aa.lineWidth = aHI, aa.beginPath(), aa.moveTo(bS, aZ), aa.lineTo(bU, aZ), aa.lineTo(Math.floor(bS - aZc + sU * aZZ), aZ + aCg), aa.lineTo(bS - aZc, aZ + aCg), aa.closePath()
	}
	this.a0o = 1, this.w = function() {
		iY.setState(6), aZX = 0, aZY = 1, aZd = "rgba(0,220,120,0.4)", aZe = "rgba(0,0,0,0.8)", this.resize(), aF.aG = !0, aZh = 1, aZg = this.a0o - 1, aZi(1)
	}, this.resize = function() {
		aZZ = Math.floor((a0.a1.a2() ? .5 : .25) * y.bx), aZa = aZZ + 12, aCg = Math.floor(.125 * aZZ), aZc = 3 * aCg, aZb = Math.floor(.225 * aZZ), aZf = Math.floor(.3 * aCg), aCf = aP.aS.aT(0, aZf)
	}, this.a2Q = function(hm) {
		hm === aZg && aZk()
	}, this.a5 = function(aY, aZ) {
		var bS = Math.floor((y.b - aZa) / 2),
			bT = Math.floor(.5 * (y.c - a3.gap - aCg - aZb)) + aCg + a3.gap;
		return bS < aY && aY < bS + aZa && bT < aZ && aZ < bT + aZb && (this.rC(), p1.aI(aY, aZ, !1), !0)
	}, this.rC = function() {
		fz.eG.t1(3260), fZ.eG.a2W()
	}, this.cX = function() {
		6 === iY.iZ() && (aF.bL > aUj + 12e3 && aZk(), 100 < (aZX += .07 * aZY * (aZX < 16 ? 5 + aZX : 84 < aZX ? 105 - aZX : 17)) ? (aZX = 100, aZY = -1) : aZX < 0 && (aZX = 0, aZY = 1), aZd = "rgba(0," + Math.floor(190 - 1.9 * aZX) + "," + Math
			.floor(120 - 1.2 * aZX) + "," + (.4 + .004 * aZX) + ")", aZe = "rgba(0," + Math.floor(1.9 * aZX) + "," + Math.floor(1.2 * aZX) + "," + (.8 - .004 * aZX) + ")", aF.aG = !0)
	}, this.aW = function() {
		var aY = Math.floor((y.b - aZa) / 2),
			aZ = Math.floor(.5 * (y.c - a3.gap - aCg - aZb));
		! function(title, aZ, aHI, sU) {
			aa.fillStyle = aZe, aZp(aZ, aHI, 1), aa.fill(), aa.fillStyle = aZd, aZp(aZ, aHI, sU), aa.fill(), aa.strokeStyle = ab.am, aZp(aZ, aHI, 1), aa.stroke(),
				function(aZr, aZ) {
					aP.aS.textAlign(aa, 1), aP.aS.textBaseline(aa, 1), aa.font = aCf, aa.fillStyle = ab.am, aa.fillText(aZr, Math.floor(.5 * y.b), Math.floor(aZ + .58 * aCg))
				}(title, aZ)
		}(L(517), aZ, 3, aZX / 100),
		function(aY, aZ, b, c, sw) {
			aa.fillStyle = ab.a4S, aa.fillRect(aY, aZ, b, c), aa.lineWidth = 3, aa.strokeStyle = ab.am, aa.strokeRect(aY, aZ, b, c);
			var ay = Math.floor(.3 * c);
			aP.aS.textAlign(aa, 1), aP.aS.textBaseline(aa, 1), aa.font = aP.aS.aT(0, ay), aa.fillStyle = ab.am, aa.fillText(sw, Math.floor(aY + b / 2), Math.floor(aZ + c / 2 + .1 * ay))
		}(aY, aZ + aCg + a3.gap, aZa, aZb, L(71))
	}
}

function aPI() {
	var aZs, aZt, aZu, aZv, aZw, aZx, aZy, aZz, aa0, aa1, aa2, aa3, aa4, aa5, aa6, aa7, aa8, aa9, aaB, aaC, aMy, aaD, aaE, aaL, aaM, aaA = null,
		aaG = 0,
		aaH = !1,
		aaI = new Float32Array(4),
		aaJ = 0,
		aaK = !0,
		aYs = 400,
		aaN = 0;

	function aVT() {
		aa0 = Math.floor(+y.bx), aa1 = Math.floor(.5 * aa0)
	}

	function aaO() {
		var aH, aaT;
		for (aa.font = aP.aS.aT(1, 100 * aa2), aaT = 80 / Math.floor(aa.measureText(aP.aQ.aR(b4.a7l)).width), aa.font = aP.aS.aT(1, 100), aH = b4.dg - 1; 0 <= aH; aH--) aZz[aH] = 100 / Math.floor(aa.measureText(b2.de[aH]).width), aZy[aH] = Math.min(
			aaT, aZz[aH])
	}

	function aaU(aH) {
		return !aaN || (aH = b2.e1[aH]) < 1e6 ? 1 : aH < 1e7 ? aaI[0] : aaI[Math.min(Math.floor(Math.log10(aH)) - 6, 3)]
	}

	function aaS(hJ) {
		aa9 = !1, aa8 = 1, aa6 = aa7 = 0, aaK && (aP.aS.textAlign(hJ, 1), aP.aS.textBaseline(hJ, 1));
		for (var aaa, aab, aH, aac, fontSize, aad, bS = zN / mn, bT = zO / mn, bU = (y.b + zN) / mn, bV = (y.c + zO) / mn, aae = 0 !== b2.bN[b4.b5] && !aP.cA.dj(b4.b5), dF = fG.fH - 1; 0 <= dF; dF--) aH = fG.fI[dF], (fontSize = Math.floor(aa5 * mn *
			aaU(aH) * aZy[aH] * aZw[aH])) < aa4 || aa0 <= fontSize || aZu[aH] + aZw[aH] > bS && aZu[aH] < bU && aZv[aH] + aZx[aH] > bT && aZv[aH] < bV && (aaa = Math.floor(y.b * (aZu[aH] + aZw[aH] / 2 - bS) / (bU - bS)), aab = Math.floor(y.c * (
			aZv[aH] + aZx[aH] / 2 - bT) / (bV - bT) - .1 * fontSize), aac = dw.c4[aH], hJ.font = aP.aS.aT(1 === b2.es[aH] ? 4 : 1, fontSize), hJ.fillStyle = aaf(fontSize, aac % 2), aaN ? aag(hJ, aH, fontSize, aaa, aab, aac) : aah(aH,
			fontSize, aaa, aab, hJ), aa9 = !0, 0 < aMy[aH] ? function(aaa, aab, fontSize, aH, hJ) {
			0 === a5L[aH] ? dY.yP.n2(aaC[aH]) ? (function(aaa, aab, fontSize, player, eM, hJ) {
				for (var a9 = aab, x = (hJ.globalAlpha = aap(fontSize), aaU(player) * (aaN ? aaJ : aZz[player])), a8 = aaa - .5 * fontSize / x - .9 * fontSize, dL = 0; dL < 2; dL++) hJ.fillText(dY.yP.my(eM), a8, a9), a8 = aaa + .5 *
					fontSize / x + .9 * fontSize;
				hJ.globalAlpha = 1
			}(aaa, aab, fontSize, aH, aaC[aH], hJ), aaj(aaa, aab, fontSize, 0, 0, hJ)) : dY.yP.n4(aaC[aH]) ? (aas(aaa, aab, fontSize, aaC[aH], 0, hJ), aaj(aaa, aab, fontSize, 0, 1, hJ)) : (aas(aaa, aab, fontSize, aaC[aH], 1, hJ), aaj(aaa,
				aab, fontSize, 1, 0, hJ)) : aas(aaa, aab, fontSize, aaC[aH], 0, hJ)
		}(aaa, aab, fontSize, aH, hJ) : 0 === a5L[aH] && aaj(aaa, aab, fontSize, 0, 0, hJ), aae && (0 < aMy[aH + b4.dg] || 0 < aMy[aH + 2 * b4.dg] || 0 < aMy[aH + 3 * b4.dg] || 0 < aMy[aH + 4 * b4.dg]) && function(aaa, aab, fontSize, aH,
		hJ) {
			var cl, eU = -1;
			for (cl = 4; 1 <= cl; cl--) 0 < aMy[aH + cl * b4.dg] && eU++;
			for (cl = 1; cl < 5; cl++) 0 < aMy[aH + cl * b4.dg] && (! function(aaa, aab, fontSize, cl, aH, aan, aJ, hJ) {
				var dT;
				if (1 === cl) {
					aH = aaC[aH + b4.dg];
					if (!dY.yP.n3(aH)) return function(aaa, aab, fontSize, eM, aan, hJ) {
						hJ.globalAlpha = aap(fontSize);
						aaa -= .534 * aan * fontSize, aan = aab + 1.59 * fontSize;
						hJ.font = aP.aS.aT(0, .785 * fontSize), hJ.fillText(dY.yP.my(eM), aaa, aan), hJ.globalAlpha = 1
					}(aaa, aab, fontSize, aH, aan, hJ);
					dT = dY.dZ.a41[aH - 1024 + dY.yP.mq]
				} else dT = 2 === cl ? p9.aFl()[4].canvas[+(aJ < 255)] : (3 === cl ? p9.aFl()[5] : p9.aFl()[6]).canvas[0];
				aH = dY.dZ.a42, aJ = .8 * fontSize / aH, cl = aaa - .5 * aJ * aH - .534 * aan * fontSize, aaa = aab + 1.4 * aJ * aH;
				hJ.setTransform(aJ, 0, 0, aJ, cl, aaa), hJ.globalAlpha = aap(fontSize), hJ.drawImage(dT, 0, 0), hJ.globalAlpha = 1, hJ.setTransform(1, 0, 0, 1, 0, 0)
			}(aaa, aab, fontSize, cl, aH, eU, aMy[aH + cl * b4.dg], hJ), eU -= 2)
		}(aaa, aab, fontSize, aH, hJ), (aad = aa2 * fontSize) < aa4 || (hJ.font = aP.aS.aT(1, aad), aab += Math.floor(.78 * fontSize), aaN ? aah(aH, aad, aaa, aab, hJ) : aag(hJ, aH, aad, aaa, aab, aac)))
	}

	function aah(aH, fontSize, aY, aZ, hJ) {
		var ___id = aH;
		var showName = aH < b4.du || !__fx.settings.hideBotNames;
		if (showName) hJ.fillText(b2.de[aH], aY, aZ), aH < b4.du && 2 !== b2.es[aH] || (aH = fontSize / aZz[aH], hJ.fillRect(aY - .5 * aH, aZ + aP.aS.hF * fontSize, aH, Math.max(1, .1 * fontSize)));
		aaN && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hJ.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hJ.fillText(__fx.utils.getDensity(___id), aY, showName ? aZ + fontSize : aZ)
		);
	}

	function aag(hJ, aH, fontSize, aaa, aab, aac) {
		var ___id = aH;
		aH = aP.aQ.aR(b2.e1[aH]);
		aac >> 1 & 1 ? (hJ.lineWidth = .05 * fontSize, hJ.strokeStyle = aaf(fontSize, aac % 2), hJ.strokeText(aH, aaa, aab)) : (1 < aac && (hJ.lineWidth = .12 * fontSize, hJ.strokeStyle = aaf(fontSize, aac), hJ.strokeText(aH, aaa, aab)), hJ.fillText(
			aH, aaa, aab));
		aaN || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hJ.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hJ.fillText(__fx.utils.getDensity(___id), aaa, aab + fontSize))
	}

	function aaj(aaa, aab, fontSize, aan, aao, hJ) {
		var q8 = .95 * fontSize / aaE,
			aaa = aaa - .5 * q8 * aaD + .8 * aan * fontSize,
			aan = aab - 1.76 * q8 * aaE - (.35 - aP.aS.hF + .7) * aao * fontSize;
		hJ.setTransform(q8, 0, 0, q8, aaa, aan), hJ.globalAlpha = aap(fontSize), hJ.drawImage(nj.get(4), 0, 0), hJ.globalAlpha = 1, hJ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aas(aaa, aab, fontSize, eM, aan, hJ) {
		var rD, a8, q8;
		hJ.globalAlpha = aap(fontSize), dY.yP.n3(eM) ? (rD = dY.dZ.a42, hJ.setTransform(q8 = 1.1 * fontSize / rD, 0, 0, q8, a8 = aaa - .5 * q8 * rD - .8 * aan * fontSize, q8 = aab - 1.55 * q8 * rD), hJ.drawImage(dY.dZ.a41[eM - 1024 + dY.yP.mq], 0,
			0), hJ.setTransform(1, 0, 0, 1, 0, 0)) : (a8 = aaa - .8 * aan * fontSize, q8 = aab - (.35 - aP.aS.hF + 1) * fontSize, hJ.fillText(dY.yP.my(eM), a8, q8)), hJ.globalAlpha = 1
	}

	function aaf(fontSize, aac) {
		return aa1 <= fontSize && fontSize < aa0 ? e4.a3R[aac] + aap(fontSize).toFixed(3) + ")" : e4.a3S[aac]
	}

	function aap(fontSize) {
		return aa1 <= fontSize && fontSize < aa0 ? 1 - (fontSize - aa1) / (aa0 - aa1) : 1
	}

	function ab2(x, b) {
		return 1 + Math.floor(aa3 * x * b)
	}

	function aaz(aH) {
		for (var left = aZu[aH], dF = aZu[aH] - b2.a3F[aH] - 1; 0 <= dF; dF--)
			if (!ab3(aH, --left, aZv[aH], aZx[aH])) {
				left++;
				break
			} var right = aZu[aH];
		for (dF = b2.a3G[aH] - aZu[aH] - aZw[aH]; 0 <= dF; dF--)
			if (!ab3(aH, ++right + aZw[aH] - 1, aZv[aH], aZx[aH])) {
				right--;
				break
			} var aY = Math.floor((left + right) / 2),
			top = aZv[aH];
		for (dF = aZv[aH] - b2.a3H[aH] - 1; 0 <= dF; dF--)
			if (!ab4(aH, aY, --top, aZw[aH])) {
				top++;
				break
			} var bottom = aZv[aH];
		for (dF = b2.a3I[aH] - aZv[aH] - aZx[aH]; 0 <= dF; dF--)
			if (!ab4(aH, aY, ++bottom + aZx[aH] - 1, aZw[aH])) {
				bottom--;
				break
			} var aZ = Math.floor((top + bottom) / 2);
		aaw(aH, aY, aZ, aZw[aH], aZx[aH]) && (aZu[aH] = aY, aZv[aH] = aZ)
	}

	function aaw(player, aY, aZ, b, c) {
		z = Math.floor(.2 * b);
		for (var z, cl = aY + b - 1; aY <= cl; cl--)
			if (!ab3(player, cl, aZ, c)) return;
		for (cl = aZ + c - 1 - (z = (z = Math.floor(.25 * c)) < 1 ? 1 : z); aZ + z <= cl; cl--)
			if (!ab4(player, aY, cl, b)) return;
		return 1
	}

	function ab3(player, aY, aZ, c) {
		return dw.uc(player, 4 * (aZ * ev.f0 + aY)) && dw.uc(player, 4 * ((aZ + c - 1) * ev.f0 + aY))
	}

	function ab4(player, aY, aZ, b) {
		return dw.uc(player, 4 * (aZ * ev.f0 + aY)) && dw.uc(player, 4 * (aZ * ev.f0 + aY + b - 1))
	}
	this.w = function() {
		if (aaN = gH.gJ.data[7].value || 8 === b4.f7, aYs = 0 === (aYs = gH.gJ.data[11].value) ? 280 : 1 === aYs ? 187 : 112, aa9 = !1, aa5 = .88, aa2 = .5, aa3 = 1.8, aa4 = 12 - 3 * gH.gJ.data[9].value, aZt = aZs = 0, aZu = new Uint16Array(b4
				.dg), aZv = new Uint16Array(b4.dg), aZw = new Uint16Array(b4.dg), aZx = new Uint16Array(b4.dg), aZy = new Float32Array(b4.dg), aZz = new Float32Array(b4.dg), aaC = new Uint16Array(2 * b4.dg), aMy = new Uint8Array(5 * b4.dg), aaL =
			new Uint8Array(b4.dg), aaM = new Uint8Array(b4.dg), aaK || (aaA = aaA || document.createElement("canvas")), aVT(), aa7 = aa6 = 0, aa8 = 1, aaN) {
			var aH, aaT;
			for (aaO(), aa.font = aP.aS.aT(1, 100), aaT = 100 / Math.floor(aa.measureText("900 000").width), aH = b4.dg - 1; 0 <= aH; aH--) aZy[aH] = Math.min(aaT, 2 * aZz[aH]);
			aaJ = aaT, aaI[0] = 100 / (aaT * Math.floor(aa.measureText("5 000 000").width)), aaI[1] = 100 / (aaT * Math.floor(aa.measureText("50 000 000").width)), aaI[2] = 100 / (aaT * Math.floor(aa.measureText("500 000 000").width)), aaI[3] =
				100 / (aaT * Math.floor(aa.measureText("1 000 000 000").width))
		} else aaO();
		! function() {
			var aH;
			for (aH = b4.dg - 1; 0 <= aH; aH--) b2.b3[aH] < 12 ? (aZu[aH] = b2.a3F[aH] + 1, aZv[aH] = b2.a3H[aH] + 1, aZw[aH] = 1, aZx[aH] = 1) : (aZu[aH] = b2.a3F[aH], aZv[aH] = b2.a3H[aH] + 1, aZw[aH] = 4, aZx[aH] = 2);
			if (b4.bv)
				for (aH = 0; aH < b4.du; aH++) aZw[aH] = 0;
			aaD = nj.get(4).width, aaE = nj.get(4).height
		}()
	}, this.aFE = function(dP, eq) {
		eq > 18 * b2.b3[dP] ? (aaM[dP] = 6, dw.c4[dP] = 2 + dw.c4[dP] % 2) : (aaL[dP] = 4, (dw.c4[dP] < 2 || 3 < dw.c4[dP]) && (dw.c4[dP] = 6 + dw.c4[dP] % 2))
	}, this.mN = function(dP, eq) {
		eq > 6 * b2.b3[dP] ? (aaM[dP] = 6, dw.c4[dP] = 4 + dw.c4[dP] % 2) : (aaL[dP] = 4, (dw.c4[dP] < 4 || 5 < dw.c4[dP]) && (dw.c4[dP] = 8 + dw.c4[dP] % 2))
	}, this.resize = function() {
		aVT(), aaK || aaS(aaB)
	}, this.l8 = function() {
		for (var aH = 0; aH < b4.du; aH++) b2.a3G[aH] - b2.a3F[aH] != 3 || b2.a3I[aH] - b2.a3H[aH] != 3 ? (aZu[aH] = b2.a3F[aH] + (b2.a3G[aH] !== b2.a3F[aH] ? 1 : 0), aZv[aH] = b2.a3H[aH], aZw[aH] = 1, aZx[aH] = 1) : (aZu[aH] = b2.a3F[aH], aZv[
			aH] = b2.a3H[aH] + 1, aZw[aH] = 4, aZx[aH] = 2)
	}, this.eh = function(player, p, aaV) {
		! function(player, p, aaV) {
			player += p * b4.dg;
			0 === p ? aaC[player] === aaV && 0 < aMy[player] ? aMy[player] = 0 : (aaC[player] = aaV, aMy[player] = dY.yP.n2(aaV) ? 255 : 64) : 1 === p ? (aMy[player] = 64, aaC[player] = aaV) : aMy[player] = aaV
		}(player, p, aaV), 2 === b4.cU && this.c2(!0)
	}, this.aW = function() {
		aaK ? aaS(aa) : aa9 && (1 !== aa8 ? (aa.imageSmoothingEnabled = !0, aa.setTransform(aa8, 0, 0, aa8, 0, 0), aa.drawImage(aaA, -aa6 / aa8, -aa7 / aa8), aa.setTransform(1, 0, 0, 1, 0, 0), aa.imageSmoothingEnabled = !1) : aa.drawImage(aaA, -
			aa6, -aa7))
	}, this.a6z = function(wj, wk) {
		aa6 += wj, aa7 += wk
	}, this.aI = function(wj, wk) {
		dl.a6z(wj, wk)
	}, this.zoom = function(au, a6, a7) {
		aa8 *= au, aa6 = (aa6 + a6) * au - a6, aa7 = (aa7 + a7) * au - a7
	}, this.c2 = function(f9) {
		return !aaK && !(!aaH && !f9 && aF.bL < aaG + (1 === aa8 && 0 === aa6 && 0 === aa7 && (b4.aJA() || b4.bv || 2 === b4.cU) ? 1e3 : aYs) || (aaH = !1, aaG = aF.bL, aaS(aaB), 0))
	}, this.aaY = function(aH) {
		return aaU(aH) * aZy[aH]
	}, this.aaZ = function(player) {
		return aZy[player]
	}, this.cX = function() {
		aF.bP() % 10 == 9 && (aaH = b4.aJB() && !b4.aJA()), !b4.aJA() && 4 <= ++aZt && function() {
			var aH, dF, dL;
			for (aZt = 0, dL = 4; 1 <= dL; dL--)
				for (dF = fG.fH - 1; 0 <= dF; dF--) aH = fG.fI[dF] + dL * b4.dg, 0 < aMy[aH] && aMy[aH] < 255 && aMy[aH]--;
			if (2 !== b4.cU)
				for (dF = fG.fH - 1; 0 <= dF; dF--) aH = fG.fI[dF], 0 < aMy[aH] && aMy[aH] < 255 && aMy[aH]--
		}();
		var aH, dF, ay = Math.floor(.1 * fG.fH);
		for (ay = (ay = ay < 8 ? 8 : ay) > fG.fH ? fG.fH : ay, aH = aZs + ay - 1; aZs <= aH; aH--) dF = aH % fG.fH, ! function(aH) {
			var x = aaU(aH) * aZy[aH];
			0 < aZw[aH] && aaw(aH, aZu[aH], aZv[aH], aZw[aH], aZx[aH]) ? ! function(aH) {
				for (var aY, aZ, b, c, av = !1, dL = 0; dL < 8; dL++) {
					if (b = aZw[aH] + 2, c = aZx[aH] + 2, b > b2.a3G[aH] - b2.a3F[aH] + 1 || c > b2.a3I[aH] - b2.a3H[aH] + 1) return av;
					if (aY = aZu[aH] - 1, aZ = aZv[aH] - 1, !aaw(aH, aY, aZ, b, c)) return av;
					aZu[aH] = aY, aZv[aH] = aZ, aZw[aH] = b, aZx[aH] = c, av = !0
				}
				return av
			}(aH) && function(aH, x) {
				for (var aY, aZ, b, c, av = !1, aUW = aZw[aH], cT = 1 + Math.floor(.02 * aUW), dL = 1; dL < 5; dL++) {
					if ((b = aUW + dL * cT) > b2.a3G[aH] - b2.a3F[aH] + 1) return av;
					if ((c = ab2(x, b)) > b2.a3I[aH] - b2.a3H[aH] + 1) return av;
					aY = b2.a3F[aH] + Math.floor(Math.random() * (b2.a3G[aH] - b2.a3F[aH] + 2 - b)), aZ = b2.a3H[aH] + Math.floor(Math.random() * (b2.a3I[aH] - b2.a3H[aH] + 2 - c)), aaw(aH, aY, aZ, b, c) && (aZu[aH] = aY, aZv[aH] = aZ,
						aZw[aH] = b, aZx[aH] = c, av = !0)
				}
				return av
			}(aH, x) && aaz(aH) : ! function(aH, x) {
				var c, aY = aZu[aH] + 1,
					aZ = aZv[aH] + 1,
					b = aZw[aH] - 2;
				for (;;) {
					if (b < 1) {
						aZw[aH] = 0;
						break
					}
					if (c = ab2(x, b), aaw(aH, aY, aZ, b, c)) return aZu[aH] = aY, aZv[aH] = aZ, aZw[aH] = b, aZx[aH] = c, 1;
					aY++, aZ++, b -= 2
				}
				return
			}(aH, x) ? function(aH, x) {
				var aY, aZ, b, c, dL, pR, a3m = b2.a3G[aH] - b2.a3F[aH] + 1,
					aWS = Math.floor(.02 * a3m);
				for (pR = -6 * (aWS = aWS < 1 ? 1 : aWS), dL = a3m; pR <= dL; dL -= aWS)
					if (c = ab2(x, b = 0 < dL ? dL : 1), aY = b2.a3F[aH] + Math.floor(Math.random() * (b2.a3G[aH] - b2.a3F[aH] + 2 - b)), aZ = b2.a3H[aH] + Math.floor(Math.random() * (b2.a3I[aH] - b2.a3H[aH] + 2 - c)), aaw(aH, aY, aZ, b,
							c)) return aZu[aH] = aY, aZv[aH] = aZ, aZw[aH] = b, aZx[aH] = c
			}(aH, x) : aaz(aH)
		}(fG.fI[dF]);
		aZs = (aZs += ay) % fG.fH
	}, this.aW3 = function() {
		var aH, dP, n0, n1;
		if (aF.bP() % 4 == 1)
			for (aH = fG.fH - 1; 0 <= aH; aH--) dP = fG.fI[aH], dw.c4[dP] < 2 || ((n0 = Math.max(aaL[dP] - 1, 0)) === (n1 = Math.max(aaM[dP] - 1, 0)) ? 0 === n0 && (dw.c4[dP] %= 2) : 0 === n1 && dw.c4[dP] < 6 && (dw.c4[dP] += 4), aaL[dP] = n0,
				aaM[dP] = n1)
	}, this.dm = function(player) {
		var aH = player + 2 * b4.dg,
			aJ = aMy[aH];
		return 0 < aJ && (d8.em(50, player), aMy[aH] = 0, 255 === aJ)
	}, this.aGD = function(player) {
		return 255 === aMy[player + 2 * b4.dg]
	}
}

function a92() {
	this.ab5 = 32, this.aY = 0, this.aZ = 0, this.aRS = 0, this.ab6 = 0, this.ab7 = 4, this.kS = null, this.aJh = new Int16Array(9), this.w = function() {
		this.aRS = 1 + aA.aB(ev.f0 - 1, this.ab5), this.ab6 = 1 + aA.aB(ev.f1 - 1, this.ab5), this.kS = new Array(this.aRS * this.ab6), aP.g9.a6M(this.kS);
		var aY, aZ, aJh = this.aJh,
			b = this.aRS;
		for (aY = -1; aY <= 1; aY++)
			for (aZ = -1; aZ <= 1; aZ++) aJh[3 * (1 + aZ) + 1 + aY] = aZ * b + aY
	}, this.aE6 = function(ab9, aH) {
		return this.kS[aH].push(ab9), this.kS[aH].length - 1
	}, this.aJY = function(abA, aJF, aJO) {
		var abB, abC, aJF = dH.a1y(aJF),
			aJO = dH.a1y(aJO);
		return aJF === aJO ? abA : (abB = this.kS[aJF].pop(), this.kS[aJF].length === abA ? this.aE6(abB, aJO) : (abC = this.kS[aJF][abA], this.kS[aJF][abA] = abB, eF.eG.a1u[abB] = abA, this.aE6(abC, aJO)))
	}
}

function aOV() {
	this.jX = function(size) {
		for (var xe = jQ, ar = [], aH = 0; aH < size; aH++) ar.push(String.fromCharCode(xe.hq(16)));
		return ar.join("")
	}, this.k4 = function(ct) {
		return 20 < (ct = ct.trim()).length ? ct.substring(0, 20) : ct
	}
}

function aH8() {
	var abD = [],
		abE = [],
		abF = 0;

	function abG(ar, et, n9, abI) {
		var ay = ar.length;
		if (0 === ay) return "";
		var ct = "@" + ar[0];
		if (1 === ay) return ct + et + abI;
		for (var aH = 1; aH < ay - 1; aH++) ct += ", @" + ar[aH];
		return ct + " and @" + ar[ay - 1] + n9 + abI
	}
	this.w = function() {
		var ct = abG(abE, " is", " are", " in the lobby!");
		ct.length && fd.message.a8u({
			id: 7,
			dR: ct
		}), abD = [], abE = [], abF = 0
	}, this.a1F = function(abH) {
		return fd.a1D !== abH && (abH = fj.fk.aR(abH, 5), !!gH.aL8.a1G(abH)) && (abE.push(abH), !0)
	}, this.join = function(player) {
		fd.a1D !== player.fi && (player = fj.fk.aR(player.fi, 5), gH.aL8.a1G(player)) && abD.push(player)
	}, this.aIk = function() {
		var et, n9;
		++abF < 3 || (abF = 0, et = abG(abE, "", "", " entered the lobby!"), (et = (n9 = abG(abD, "", "", " joined a game!")).length ? et.length ? et + " " + n9 : n9 : et).length && fd.message.a8u({
			id: 7,
			dR: et
		}), abD = [], abE = [])
	}
}

function aPT() {
	this.w = function() {
		this.ar = [], this.p = 0
	}, this.i6 = function() {
		return new Uint8Array(this.ar)
	}, this.hr = function(abJ, value) {
		for (var ar = this.ar, pR = this.p + abJ - 1, abK = 1 + (pR >> 3); ar.length < abK;) ar.push(0);
		for (var aH = this.p; aH <= pR; aH++) ar[aH >> 3] |= (value >> pR - aH & 1) << 7 - (7 & aH);
		this.p += abJ
	}, this.yB = function(ar, zs, zt) {
		var abL = aP.g9.a6a(ar);
		this.hr(zs, abL);
		for (var aH = 0; aH < abL; aH++) this.hr(zt, ar[aH])
	}, this.yC = function(ar, zs, zw) {
		var abL = aP.g9.a6a(ar);
		this.hr(zs, abL);
		for (var aH = 0; aH < abL; aH++) this.y9(ar[aH], zw)
	}, this.y9 = function(ct, zs) {
		var ay = ct.length;
		this.hr(zs, ay);
		for (var aH = 0; aH < ay; aH++) this.hr(16, ct.charCodeAt(aH))
	}, this.yA = function(dT) {
		var abM = (dT = dT.toDataURL()).split(",");
		if (abM.length < 2) console.log("error 266");
		else {
			dT = aP.aQ.z8(dT = abM[abM.length - 1], "/", "_"), dT = aP.aQ.z8(dT, "\\+", "-");
			var dT = aP.aQ.z8(dT, "=", ""),
				kF = gL.fk.xg(dT),
				ay = kF.length;
			this.hr(30, ay);
			for (var aH = 0; aH < ay; aH++) this.hr(6, kF[aH])
		}
	}
}

function aPY() {
	this.gw = new aCN, this.gJ = new pJ, this.rg = new aXP, this.eG = new aU9, this.aL8 = new aGh, this.w = function() {
		this.gJ.w(), (new pS).w(), this.aL8.w(), this.eG.aUE()
	}
}

function aPX() {
	this.o5 = 1116, this.abN = 2144, this.rVersion = 16, this.aKk = 0, this.w = function() {
		this.aIh = 2;
		var aJ = aA.aB(this.abN, 10) % 100;
		this.gz = "3 Dec 2025 [" + aA.aB(this.abN, 1e3) + "." + (aJ < 10 ? "0" : "") + aJ + "." + this.abN % 10 + "]", this.aEQ = true, this.aER = function() {
			try {
				return window.self !== window.top
			} catch (bF) {
				return !0
			}
		}(), this.ht = (new Date).getTime() % 1048576
	}, this.aPi = 0
}

function a9Z() {
	this.aXw = function() {
		for (var id = jQ.hq(20), colors = new Array(11), aH = 0; aH < 11; aH++) colors[aH] = new Uint8Array([jQ.hq(8), jQ.hq(8), jQ.hq(8)]);
		var og = gL.i5.jT(8);
		aIg.aI4.dc({
			id: id,
			colors: colors,
			og: og
		})
	}, this.aY2 = function(hm) {
		var z = jQ.hq(5),
			z = ho.a2t.aRG(z, jQ.hq(30), jQ.hq(30), jQ.hq(30));
		fz.hu.aEI(hm, z)
	}, this.aXx = function(hm) {
		var aEH, tq, aEG;
		jQ.jW(165) ? (aEH = jQ.hq(3), tq = ho.a2t.cX(jQ.hq(30), jQ.hq(30)), aEG = ho.a2t.aRG(jQ.hq(5), jQ.hq(30), jQ.hq(30), jQ.hq(30)), fz.hu.aEF(hm, tq, aEG, aEH), 0 < aEH || (0 === hm && 0 === gH.gJ.data[105].value.length ? fz.hu.aEJ(0) : fz
			.g0.oY(hm), 4 === fz.eG.aM2(hm).aKi() ? 6 === iY.iZ() && fz.t3.hl(hm) : 5 !== fz.eG.aM2(hm).aKi() || 8 !== iY.iZ() && 10 !== iY.iZ() || fz.eK.o1())) : fz.eG.jS(hm, 3269)
	}, this.aXz = function(hm) {
		var id = jQ.hq(6);
		1 === id ? (gH.rg.nf(160, jQ.hq(30)), fz.eG.aKf(hm), p4.aHQ || fz.hu.aEJ(1), oi.aL2(), 8 === fZ.fa && fZ.fx().aL4()) : 21 === id ? 8 === fZ.fa && fZ.fx().jV(17) : 22 === id && (gH.rg.nf(106, gH.gJ.data[110].value), gH.rg.nf(110, ""),
			8 === fZ.fa) && fZ.fx().jV(15)
	}, this.aY1 = function() {
		var ay = jQ.hq(16),
			abQ = jQ.hq(16);
		if (jQ.jW(55 + 10 * ay + 16 * abQ)) {
			for (var ar = [], aH = 0; aH < ay; aH++) ar.push(gL.jL.jX(jQ.hq(10)));
			oi.aUO(ar)
		} else fz.eG.jS(0, 3270)
	}
}

function aJv(aX0) {
	var aM9 = document.createElement("div");

	function tg() {
		qr.rB() || (aM9.style.backgroundColor = aP.color.tp(ab.c9, 50))
	}

	function th() {
		aM9.style.backgroundColor = ab.c9
	}
	this.nf = function(aX3) {
			aM9.textContent = aX3
		}, this.show = function() {
			document.body.appendChild(aM9)
		}, this.resize = function() {
			var c = aP.aS.hR(.03, .5);
			aM9.style.width = 2 * c + "px", aM9.style.height = c + "px", aM9.style.font = aP.aS.aT(1, .75 * c), aP.aS.hK(aM9, 4), aP.aS.hK(aM9, 2)
		}, this.t0 = function() {
			aM9.onclick = null, aM9.onmouseover = null, aM9.onmouseout = null, fZ.removeChild(document.body, aM9), aM9 = null
		}, aM9.style.position = "absolute", th(), aM9.style.color = ab.am, aM9.style.zIndex = "3", aM9.style.right = "0", aM9.style.top = "0", aM9.style.display = "flex", aM9.style.justifyContent = "center", aM9.style.alignItems = "center", aM9.style
		.userSelect = "none", aM9.style.outline = "none", aM9.onclick = aX0, aM9.onmouseover = tg, aM9.onmouseout = th
}

function aPH() {
	this.fI = null, this.fH = 0, this.aJ0 = function() {
		for (this.fH = 0, aH = b4.dg - 1; 0 <= aH; aH--) 0 !== b2.bN[aH] && this.fH++;
		this.fI = new Uint16Array(this.fH);
		for (var ay = 0, aH = 0; aH < b4.dg; aH++) 0 !== b2.bN[aH] && (this.fI[ay++] = aH)
	}, this.aW2 = function() {
		for (var b3 = b2.b3, aBB = b2.aBB, aKW = b2.aKW, fI = fG.fI, aH = fG.fH - 1; 0 <= aH; aH--) {
			var dP = fI[aH],
				aJ = b3[dP],
				at = aBB[dP];
			aJ <= aA.aB(at, 4) ? a12.aBA(dP) : at <= aJ ? 250 <= (aBB[dP] = aJ) && (aKW[dP] = 1) : aBB[dP] = at - Math.max(1, aA.aB(at - aJ, 1e3))
		}
		this.a14()
	}, this.a14 = function() {
		for (var bN = b2.bN, aLR = this.fI, aLQ = this.fH, aH = aLQ - 1; 0 <= aH; aH--) 0 === bN[aLR[aH]] && (aLR[aH] = aLR[--aLQ]);
		this.fH = aLQ
	}
}

function j0() {
	var gQ, aPw = !0;

	function aQ0(aGd, oS) {
		var no = document.createElement("div"),
			abT = document.createElement("span"),
			abU = document.createElement("span");
		abT.textContent = bQ.bR(oS.bL) + ":", abT.style.color = ab.a0E, abT.style.paddingRight = "0.4em", abT.style.display = "table-cell", abT.style.width = "6ch", abT.style.textAlign = "end", no.appendChild(abT), abU.textContent = oS.ct, no
			.appendChild(abU), no.style.display = "table", oS.eM && function(no, eM) {
				{
					var a00;
					eM >= 1024 - dY.yP.mq ? ((a00 = document.createElement("img")).src = dY.dZ.a41[eM - 1024 + dY.yP.mq].toDataURL(), a00.style.width = "1.5em", a00.style.height = "1.5em", a00.style.verticalAlign = "middle", no.appendChild(a00)) : ((
						a00 = document.createElement("span")).textContent = dY.yP.my(eM), a00.style.display = "inline-block", a00.style.fontSize = "1.5em", a00.style.lineHeight = "1em", a00.style.verticalAlign = "middle", no.appendChild(a00))
				}
			}(no, oS.eM), aGd.appendChild(no)
	}

	function aQ1() {
		aPw && (gQ.gX.scrollTop = gQ.gX.scrollHeight)
	}
	this.clear = function() {
		gQ.gX.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var cZ = dW.oU(), ay = cZ.length, aGd = document.createDocumentFragment(), aH = 0; aH < ay; aH++) aQ0(aGd, cZ[aH]);
		gQ.gX.appendChild(aGd), aQ1(), gQ.show(), this.resize(), aPw = !0, aQ1()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gQ.gX.style.padding = "0.4em " + aP.aS.hL(a3.aEb)
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, this.dO = function(oS) {
		var aGd = document.createDocumentFragment();
		aQ0(aGd, oS), gQ.gX.appendChild(aGd), aQ1()
	}, (gQ = new gU(L(324), [new fR("⬅️ " + L(71), function() {
		fZ.j2(1)
	})])).gX.style.overflowY = "auto", gQ.gX.addEventListener("scroll", function() {
		aPw = gQ.gX.scrollTop >= gQ.gX.scrollHeight - gQ.gX.clientHeight - 2
	})
}

function uB(title, nt, abW, pz) {
	var pk, q0;
	this.show = function() {
		pk.show(), this.resize()
	}, this.aE = function() {
		pk.aE()
	}, this.resize = function() {
		pk.resize(), q0.resize()
	}, this.fY = function(cl) {
		2 === cl && pk.gv[0].gw()
	}, pz = pz || [new fR("⬅️ " + L(71), function() {
		fZ.gc()
	})], pk = new gU(title, pz), q0 = new q2(pk.gX, nt), abW && aP.aS.textAlign(pk.gX.style, 1)
}

function abX() {
	var abY, abZ;

	function abc() {
		(abY = new WebSocket("wss://territorial.io/s52/")).onopen = abd, abY.onclose = function() {
			abe()
		}
	}

	function abd() {
		if (abY && abY.readyState === abY.OPEN) {
			var b = new aPS;
			b.gD(1608), b.hr(1, 0), b.hr(6, 7), b.hr(2, a0 ? a0.id : 3), b.hr(1, hs.aEQ ? 1 : 0), b.hr(1, hs.aER ? 1 : 0), b.hr(1, hs ? hs.aPi : 0);
			for (var aH = 0; aH < abZ.length && aH < 228; aH++) b.hr(7, abZ.charCodeAt(aH) % 128);
			abY.send(b.i0), abe()
		}
	}

	function abe() {
		abY && (abY.onclose = null, abY.onopen = null, abY = null)
	}
	window.addEventListener("error", function aba(bF) {
		abZ = "";
		try {
			return window.removeEventListener("error", aba), abZ = bF.lineno + " " + bF.colno + "|" + function(bF) {
				if (!bF.error) return "NoStack";
				var stack = bF.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, a8y = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a8y.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(bF), __fx.reportError(bF, abZ), alert("Error:\n" + bF.filename + " " + bF.lineno + " " + bF.colno + " " + bF.message)
		} catch (bF) {
			abZ = "SE|" + abZ + "|" + bF, console.log(abZ), alert(abZ)
		}
		abc()
	})
}

function aZF() {
	this.cX = function() {
		var aTS;
		0 === a0z.result.a2a || 0 === a0z.result.vL.length || 8 === b4.f7 || (function(aTS) {
			7 !== b4.f7 && 10 !== b4.f7 || 0 !== b4.eR && aTS && d8.dO(600, L(521, [aTS.toFixed(2)]), 40, 0, ab.am, ab.ac, -1, !1)
		}(aTS = function() {
			d8.dO(520, L(518), 40, 0, ab.am, ab.ac, -1, !1);
			for (var vL = a0z.result.vL, ay = vL.length, b3 = b2.b3, ar = [], aH = 0; aH < ay; aH++) {
				var dP = vL[aH];
				ar.push({
					dP: dP,
					aJ: b3[dP]
				})
			}
			ar.sort((dF, dL) => dL.aJ - dF.aJ);
			var e5 = b2.de,
				aJ = a0z.result.a2Z,
				ej = a0z.result.a2a,
				ct = "",
				aTS = 0;
			for (aH = 0; aH < ay; aH++) {
				var aK4 = ar[aH].aJ * ej / (100 * aJ),
					abj = e5[ar[aH].dP] + ": " + aK4.toFixed(2) + "   ";
				ar[aH].dP === b4.b5 && (aTS = aK4), 2 < aH && 4 !== ay ? 3 === aH && (ct += "(" + L(519, [ay - 3]) + ")") : ct += abj
			}
			d8.dO(560, aP.aQ.z2(ct), 40, 0, ab.a4c, ab.ac, -1, !1), aTS && d8.dO(580, L(520, [aTS.toFixed(2)]), 40, 0, ab.a4c, ab.ac, -1, !1);
			return aTS
		}()), 2 === b4.a2c) || 7 <= b4.f7 || ! function(aTS) {
			var vL = a0z.result.vL,
				ay = vL.length,
				e0 = b2.e0,
				b3 = b2.b3,
				jJ = [];
			loop: for (var aH = 0; aH < ay; aH++) {
				var dP = vL[aH],
					jc = aP.aQ.z1(e0[dP]);
				if (null !== jc) {
					for (var tu = b3[dP], dL = jJ.length - 1; 0 <= dL; dL--)
						if (jc === jJ[dL].name) {
							jJ[dL].aJ += tu, jJ[dL].ar.push({
								dP: dP,
								aJ: tu
							});
							continue loop
						} jJ.push({
						name: jc,
						aJ: tu,
						ar: [{
							dP: dP,
							aJ: tu
						}]
					})
				}
			}
			if (0 !== jJ.length) {
				jJ.sort((dF, dL) => dL.aJ - dF.aJ);
				var ar = jJ[0].ar,
					ue = (ar.sort((dF, dL) => dL.aJ - dF.aJ), "[" + jJ[0].name + "]"),
					abk = 512 * a0z.result.a2a / 26214400,
					at = (d8.dO(0, L(522, [ue, abk.toFixed(4)]), 40, 0, ab.am, ab.ac, -1, !1), ar.length),
					ud = jJ[0].aJ,
					abl = 1e4 * abk;
				for (aH = 0; aH < at; aH++)
					if (ar[aH].dP === b4.b5) {
						d8.dO(600, L(523, [(abl * ar[aH].aJ / (10 * ud)).toFixed(2)]), 40, 0, ab.am, ab.ac, -1, !1), d8.dO(640, L(524, [(.2 * aTS).toFixed(2), ue]), 40, 0, ab.am, ab.ac, -1, !1);
						break
					}
			}
		}(aTS)
	}, this.a1n = function() {}
}

function a98() {
	function abm(aE7, we, wg) {
		for (var a3m = Math.min(we, wg), pR = Math.max(we, wg), aZ = a3m + 1; aZ < pR; aZ++)
			if (!dw.kj(dH.aNG(aE7, aZ))) return;
		return 1
	}

	function abn(aE8, wd, wf) {
		for (var a3m = Math.min(wd, wf), pR = Math.max(wd, wf), aY = a3m + 1; aY < pR; aY++)
			if (!dw.kj(dH.aNG(aY, aE8))) return;
		return 1
	}

	function abo(wd, we, wf, wg, uP, uG) {
		for (var ay = Math.min(Math.abs(wf - wd), Math.abs(wg - we)), wj = Math.sign(wf - wd), wk = Math.sign(wg - we), aH = 0; aH < ay; aH++)
			if (!dw.kj(dH.aNG(wd += wj, we += wk))) return null;
		return wd === wf ? abm(wd, we, wg) ? new Uint32Array([uP, dH.wl(wd, we), uG]) : null : abn(we, wd, wf) ? new Uint32Array([uP, dH.wl(wd, we), uG]) : null
	}
	this.uI = function(uP, uG) {
		uP = function(uP, uG) {
			var wd = dH.dI(uP),
				we = dH.dJ(uP),
				wf = dH.dI(uG),
				wg = dH.dJ(uG);
			if (wd === wf) {
				if (abm(wd, we, wg)) return new Uint32Array([uP, uG])
			} else {
				if (we !== wg) return abo(wd, we, wf, wg, uP, uG) || abo(wf, wg, wd, we, uP, uG);
				if (abn(we, wd, wf)) return new Uint32Array([uP, uG])
			}
			return null
		}(uP, uG);
		return null === uP ? -1 : eF.uM.uT(uP)
	}
}

function a9b() {
	this.aXy = function() {
		gH.eG.aUA(), gH.rg.nf(105, fj.fk.y7(fj.fk.y8(5))), gH.rg.nf(106, fj.fk.y7(fj.fk.y8(15))), gH.rg.nf(109, 0), gH.rg.nf(108, gH.gJ.data[109].value), gH.rg.nf(111, gH.gJ.data[109].value + 1), gH.rg.nf(107, 0), gH.rg.nf(110, "")
	}, this.aY0 = function() {
		var data;
		jQ.size < hn.jR(29) ? fz.eG.jS(0, 3254) : ((data = {
			fl: jQ.hq(30),
			aTO: jQ.hq(16),
			aTP: jQ.hq(30),
			aTQ: jQ.hq(30),
			aTI: jQ.hq(30),
			od: jQ.jU(32),
			username: gL.i5.jT(5),
			aTh: gL.i5.jT(3),
			aTo: gL.i5.jT(3),
			aTg: jQ.jU(32),
			aTn: jQ.jU(32),
			aTi: jQ.hq(30),
			aTk: jQ.jU(32),
			aTp: jQ.jU(32),
			aTm: jQ.jU(32),
			aTq: jQ.jU(32),
			aTT: jQ.jU(32),
			aTU: jQ.jU(30),
			aTr: jQ.jU(32),
			aTs: gL.i5.jT(3),
			aTc: jQ.jU(2),
			aTe: jQ.jU(10),
			aTZ: gL.i5.jT(8),
			aTd: jQ.jU(5),
			aTH: jQ.hq(30),
			aTR: jQ.hq(30),
			aTS: jQ.jU(32),
			aTY: jQ.hq(3),
			aTX: jQ.hq(8),
			aTt: jQ.hq(1),
			aTu: jQ.hq(1)
		}).aTt && (data.aTv = jQ.jU(32), data.aTw = jQ.hq(30), data.aTx = jQ.hq(30), data.aTy = jQ.hq(1)), 8 === fZ.fa && (25 === fZ.fx().aKx ? (data.aT1 = !0, fZ.eG.im = data, fZ.fx().jV(25, !1)) : (data.aT1 = !1, gH.rg.nf(160, +(data
			.aTt && data.aTy)), data.fi = gH.gJ.data[105].value, fZ.eG.ij = data, gH.rg.aXQ(data), fZ.fx().jV(16, !0))))
	}
}

function aPc() {
	this.c1 = function() {
		return a0.a1.a2() ? 2 : 1
	}
}

function ix() {
	var gQ, gR, gS, gg;

	function gV() {
		gZ(), 2 !== b4.data.iIncomeType && (b4.data.iIncomeData = null), fZ.gb()[19] = null, fZ.gc()
	}

	function gZ() {
		2 === b4.data.iIncomeType && aP.g9.h9(gS.gf(), b4.data.iIncomeData, 255)
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.aE = function() {
		gQ.aE()
	}, this.resize = function() {
		gQ.resize(), gR.resize()
	}, this.fY = function(cl) {
		2 === cl && gQ.gv[0].gw()
	}, gQ = new gU(L(178), [new fR("⬅️ " + L(71), gV)]), gR = new gW(gQ.gX, (function(gg) {
		var gj = new gk;
		gj.gl(L(72)), gj.gm(new gn({
			go: [L(99), L(77), L(75)],
			value: b4.data.iIncomeType
		}, function(p) {
			gZ(), 2 !== p || b4.data.iIncomeData || (b4.data.iIncomeData = new Uint8Array(b4.dg), b4.data.iIncomeData.fill(32)), b4.data.iIncomeType = p, fZ.ff(27)
		})), gg.push(gj)
	}(gg = []), function(gg) {
		var gj;
		1 === b4.data.iIncomeType && ((gj = new gk).gl("Value"), gj.gp(new nm({
			p: -1,
			value: b4.data.iIncomeValue
		}, 1, 0, function(bF) {
			var value = aA.cI(Math.floor(bF.target.value), 0, 255);
			bF.target.value = b4.data.iIncomeValue = value
		})), gg.push(gj))
	}(gg), function(gg) {
		var gj;
		2 === b4.data.iIncomeType && ((gj = new gk).gl("Data"), (gS = new gs(0, 1, 0, 1)).gt(aP.aQ.gu(b4.data.iIncomeData, 4)), gj.gp(gS), gg.push(gj))
	}(gg), gg))
}

function aPN() {
	var abp, ar;
	this.w = function() {
		for (var aH = (ar = new Uint16Array(101)).length - 1; 0 <= aH; aH--) ar[aH] = aA.aB(32768 * aH, 100);
		this.kg(0)
	}, this.value = function(dP) {
		return ar[dP]
	}, this.kf = function() {
		return aA.aB(abp - 1, 2)
	}, this.kg = function(ke) {
		abp = 2 * ke % 32768 + 1
	}, this.random = function() {
		return abp = 167 * abp % 32768
	}, this.nG = function(eO) {
		return aA.aB(eO * this.random(), 32768)
	}, this.a5X = function(dP) {
		return 0 !== dP && this.random() < this.value(dP)
	}, this.aGX = function(dF, dL) {
		return dF + this.nG(dL - dF)
	}
}

function a9T() {
	this.a2f = function() {
		for (var ay = b4.du, vL = a0z.result.vL, at = vL.length, a1i = (hn.gD(17 + 16 * ay + 33 * at), hn.hr(1, 1), hn.hr(4, 12), hn.hr(10, at), hn.hr(1, +(2 === b4.a2c)), hn.hr(1, b4.aEi % 2), b2.a1i), aH = 0; aH < ay; aH++) hn.hr(16, a1i[aH]);
		for (var b3 = b2.b3, aH = 0; aH < at; aH++) {
			var dP = vL[aH];
			hn.hr(9, dP), hn.hr(24, b3[dP])
		}
		fz.eG.send(fz.eG.o6, hn.i0)
	}
}

function ne(aKr, aKs, abq, abr, abt) {
	var self;
	this.ni = document.createElement("span"), this.resize = function() {
			this.ni.style.fontSize = ((abr - abq) * aKs.offsetHeight).toFixed(1) + "px"
		}, (self = this).ni.textContent = aKr, self.ni.style.color = ab.am, self.ni.style.font = "inherit", self.ni.style.margin = "0.1em 0.6em", self.ni.style.pointerEvents = "none", abt && (self.ni.style.fontWeight = "bold"), self.ni.style
		.whiteSpace = "nowrap", self.ni.style.display = "block", aKs.appendChild(self.ni)
}
self.aiCommand746 = function(b0) {
	0 === b0 ? aP5() : 1 !== b0 || !a0 || 1 !== a0.id || a0.gz < 14 || qr.r8()
}, abX(), setTimeout(aP5, 1e4), window.onload = function() {
	aP5()
};