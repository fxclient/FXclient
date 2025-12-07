var dJ, dK, dL, fS, fZ, fa, jh, eD, hd, bK, wX, a4S, aE7, di, j5, aKn, aKo, jS, vs, bI, aCB, zt, fD, fV, e7, ss, aEA, zw, jF, jN, tv, a0E, cB, gZ, x, ks, a2n, dq, fL, aKp, aKq, y7, aGG, my, yn, yK, kD, aFw, a2G, pR, aKr, zq, jM, zu, aEB, b3, kJ, wU,
	bM, yV, aKs, aKt, aE8, yJ, u7, ln, k6, zK, aR, aJ, zr, cN, hp, cI, bw, cM, uw, gr, mF, je, hQ, h4, oi, jQ, a4M, jy, t, zy, ax, vA, yS, aH7, sN, aGW, aKj, h, jU, dH, jB, zs, bu, gT, fT, bA, hb, bz, x9, ts, a49, aKu, aY, a6i, cA, a2r, yf, kf, aM1,
	w, n, o, kv, ku, kw, lE, lB, kc, ky, aZR, lJ, aZS, aZT, aZU, kr, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span", "Data",
		"0.5em", " / ", "territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click",
		"' target='_blank'>", "undefined", "pre", "break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string", "rgba(0,0,0,0.8)",
		"pre-wrap", "number", "nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ",
		"🔄 Reload", "wheel", "translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout",
		"long", "logo", "loading", "keydown", "italic ", "https://", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed",
		"Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room",
		"<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "255,255,255", "1v1", "1 Minute",
		"1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
	];

function a() {
	this.b = !1, this.c = !1, this.d = !1, this.e = [0, 0, 0, 0], this.f = function() {
		var g, j, k, l;
		this.d = this.d || this.c, (this.c || this.b && this.d) && (g = h.i[0], j = h.i[1], k = h.i[2], l = h.i[3], g = g < this.e[0] ? this.e[0] : g, j = j < this.e[1] ? this.e[1] : j, k = k > this.e[2] ? this.e[2] : k, l = l > this.e[3] ? this
			.e[3] : l, this.c = !1, this.b = !1, g === this.e[0] && j === this.e[1] && k === this.e[2] && l === this.e[3] ? this.m() : g <= k && j <= l && n.putImageData(o, 0, 0, g, j, k - g + 1, l - j + 1))
	}, this.m = function() {
		this.d && this.e[2] >= this.e[0] && this.e[3] >= this.e[1] && n.putImageData(o, 0, 0, this.e[0], this.e[1], this.e[2] - this.e[0] + 1, this.e[3] - this.e[1] + 1), this.d = !1
	}, this.p = function() {
		this.e[2] >= this.e[0] && this.e[3] >= this.e[1] && n.putImageData(o, 0, 0, this.e[0], this.e[1], this.e[2] - this.e[0] + 1, this.e[3] - this.e[1] + 1), this.d = !1
	}, this.q = function() {
		var r, s;
		this.b = !1, this.c = !1, this.d = !1, this.e[0] = t.u, this.e[1] = t.v, this.e[2] = this.e[3] = 0;
		loop: for (r = 1; r < t.u - 1; r++)
			for (s = t.v - 2; 1 < s; s--)
				if (1 === w[x.y(r, s) + 2]) {
					this.e[0] = r;
					break loop
				} loop: for (s = 1; s < t.v - 1; s++)
			for (r = t.u - 2; 1 < r; r--)
				if (1 === w[x.y(r, s) + 2]) {
					this.e[1] = s;
					break loop
				} loop: for (r = t.u - 2; 0 < r; r--)
			for (s = t.v - 2; 1 < s; s--)
				if (1 === w[x.y(r, s) + 2]) {
					this.e[2] = r;
					break loop
				} loop: for (s = t.v - 2; 0 < s; s--)
			for (r = t.u - 2; 1 < r; r--)
				if (1 === w[x.y(r, s) + 2]) {
					this.e[3] = s;
					break loop
				}
	}
}

function z(a0, a1) {
	var aB, self, a2 = document.createElement("div"),
		a3 = document.createElement("div"),
		a4 = document.createElement("div"),
		a5 = null,
		aC = (this.a6 = new a7({
			value: "",
			a8: -1
		}, 0, a9, function(aH) {
			aH.target.value = aR.aS.aT(aH.target.value), a5.aQ.textContent = 127 - aH.target.value.length
		}), 0),
		aD = 1,
		aE = 0,
		aF = 1048575;

	function a9() {
		a0(), a5.aQ.textContent = 127
	}

	function aj(ah, aq) {
		aq && (aq.ar = 1, ah.appendChild(aY.at.transform(aq)))
	}

	function an(au) {
		aD ? a2.scrollTop = a2.scrollHeight : au && (a2.scrollTop = aE)
	}
	this.aU = function(aV) {
			aF = 1048575, a3.textContent = "", aV || this.aW()
		}, this.aW = function() {
			var aX = aY.aZ.aa[0],
				aX = aY.aZ.ac[aX],
				ad = aX.ad,
				ae = ad.length,
				af = 1048575 === aF ? 0 : ae - (aX.ag - aF + 1048575) % 1048575;
			if (aF = aX.ag, !(ae <= (af = Math.max(af, 0)))) {
				for (var ah = document.createDocumentFragment(), ai = af; ai < ae; ai++) aj(ah, aY.ak.al(ad[ai], aY.ak.am(ad[ai])));
				a3.appendChild(ah), an()
			}
		}, this.ao = function(ap) {
			var ah = document.createDocumentFragment();
			aj(ah, ap), a3.appendChild(ah), an()
		}, this.show = function(av) {
			av.appendChild(a2), av.appendChild(a4), this.resize(av)
		}, this.aw = function(av) {
			ax.removeChild(av, a2), ax.removeChild(av, a4)
		}, this.resize = function(av) {
			aC = av ? av.offsetHeight : aC;
			var av = aR.az.b0(.04, .75),
				b1 = Math.max(av, aC - av),
				b2 = b3.b4 / b3.b5,
				b6 = .7 * b2,
				b7 = aR.az.b8(aC - av - b1),
				b1 = (a4.style.height = aR.az.b8(av), a2.style.height = aR.az.b8(b1), b3.b9 > b3.b4 || bA.bB.bC() ? (a4.style.top = b7, a2.style.top = aR.az.b8(aC - b1), aR.az.bD(a2, 8)) : (a2.style.top = b7, a4.style.top = aR.az.b8(aC - av), aR.az
					.bD(a2, 2)), this.a6.aH.style.width = aR.az.b8(b6), this.a6.aH.style.fontSize = aB.button.style.fontSize = aR.az.b8(.5 * av), aR.az.bD(this.a6.aH, 6), aB.button.style.left = aR.az.b8(b6), aB.button.style.width = aR.az.b8(b2 -
					b6), .385 * av);
			bA.bB.bC() && (b1 *= .8 - .12 * (b3.b4 > b3.b9)), a3.style.marginLeft = a3.style.marginRight = aR.az.b8(.5 * b1), a3.style.fontSize = aR.az.b8(b1), an(1)
		}, (self = this).a6.aH.aI = 127, a2.style.position = "absolute", a2.style.left = "0", a2.style.width = "100%", a2.style.overflowX = "hidden", a2.style.overflowY = "auto", a2.style.font = "inherit", a2.style.backgroundColor = aJ.aK, a2
		.addEventListener("scroll", function() {
			aE = a2.scrollTop, aD = aE < a2.scrollHeight - a2.clientHeight - 2 ? 0 : 1
		}), a3.style.font = "inherit", a4.style.position = "absolute", a4.style.left = "0", a4.style.width = "100%", self.a6.aH.setAttribute("placeholder", L(0)), self.a6.aH.style.position = "absolute", self.a6.aH.style.top = "0", self.a6.aH.style
		.left = "0", self.a6.aH.style.height = "100%", self.a6.aH.style.backgroundColor = aJ.aL, self.a6.aH.style.textAlign = "center", (aB = new aM(L(1), a9)).button.top = "0", aB.button.style.position = "absolute", aB.button.style.height = "100%",
		aB.aN(aJ.aO), a5 = new aP("127", aB.button, 1, 1), a2.appendChild(a3), a4.appendChild(self.a6.aH), a4.appendChild(aB.button)
}

function bF() {
	this.bG = function(bH, player) {
		bI.bJ(bK.bL, player, bH), bM.bN.bO(bH, player)
	}, this.bP = function(player) {
		bI.bQ(player, 0), bM.bN.bR(player)
	}, this.bS = function(bT, player) {
		bI.bU(bT, player), bM.bN.bV(bT, player)
	}, this.bW = function() {
		bK.bX || bK.bY || bM.bZ.bW()
	}
}

function ba() {
	this.bb = function(player) {
		aR.bc.bd(player) && bI.be(80, L(2), 637, 0, aJ.bf, aJ.bg, -1, !1)
	}, this.bh = function(player) {
		aR.bc.bd(player) && bI.be(80, L(3), 637, 0, aJ.bf, aJ.bg, -1, !1)
	}
}

function bi() {
	this.bj = 0, this.bk = null, this.bl = null, this.ak = null, this.aZ = null, this.bm = null, this.bn = null, this.message = null, this.bo = null, this.at = null, this.bp = null, this.bq = new br, this.bs = 0, this.bt = 0, this.q = function() {
		this.bt = bu.bv, this.bj = bw.bx.by(bz.c0.data[105].value, 5), this.bl = new c1, this.ak = new c2, this.aZ = new c3, this.bm = new c4, this.bn = new c5, this.message = new c6, this.bo = new c7, this.at = new c8, this.bp = new c9, this.aZ
			.q(), cA.q(), this.bs = 1, bA.bB.setState(1), cB.setState(0)
	}, this.cC = function() {
		this.at && this.at.cC(), this.bk = null, this.bl = null, this.ak = null, this.aZ = null, this.bm = null, this.bn = null, this.message = null, this.bo = null, this.at = null, this.bp = null, this.bs = 0, cA.cC(), bA.bB.setState(0)
	}
}

function cD() {
	this.cE = function() {
		bz.aZ.cF(), bz.cG.cH(105, cI.bx.cJ(cI.bx.cK(5))), bz.cG.cH(106, cI.bx.cJ(cI.bx.cK(15))), bz.cG.cH(109, 0), bz.cG.cH(108, bz.c0.data[109].value), bz.cG.cH(111, bz.c0.data[109].value + 1), bz.cG.cH(107, 0), bz.cG.cH(110, "")
	}, this.cL = function() {
		var data;
		cM.size < cN.cO(29) ? bM.aZ.cP(0, 3254) : ((data = {
			cQ: cM.cR(30),
			cS: cM.cR(16),
			cT: cM.cR(30),
			cU: cM.cR(30),
			cV: cM.cR(30),
			cW: cM.cX(32),
			username: bw.cY.cZ(5),
			ca: bw.cY.cZ(3),
			cb: bw.cY.cZ(3),
			cc: cM.cX(32),
			cd: cM.cX(32),
			ce: cM.cR(30),
			cf: cM.cX(32),
			cg: cM.cX(32),
			ch: cM.cX(32),
			ci: cM.cX(32),
			cj: cM.cX(32),
			ck: cM.cX(30),
			cl: cM.cX(32),
			cm: bw.cY.cZ(3),
			cn: cM.cX(2),
			co: cM.cX(10),
			cp: bw.cY.cZ(8),
			cq: cM.cX(5),
			cr: cM.cR(30),
			cs: cM.cR(30),
			ct: cM.cX(32),
			cu: cM.cR(3),
			cv: cM.cR(8),
			cw: cM.cR(1),
			cx: cM.cR(1)
		}).cw && (data.cy = cM.cX(32), data.cz = cM.cR(30), data.d0 = cM.cR(30), data.d1 = cM.cR(1)), 8 === ax.d2 && (25 === ax.d3().d4 ? (data.d5 = !0, ax.aZ.d6 = data, ax.d3().d7(25, !1)) : (data.d5 = !1, bz.cG.cH(160, +(data.cw && data
			.d1)), data.d8 = bz.c0.data[105].value, ax.aZ.d9 = data, bz.cG.dA(data), ax.d3().d7(16, !0))))
	}
}

function dB(dC, dD, dE) {
	this.r = 0, this.s = 0, this.b4 = 0, this.b9 = 0, this.resize = function() {
		this.b9 = Math.min(aR.az.dF(dE || .5) * dC[1] * b3.dG, b3.b9 - 2 * dH.gap), this.b4 = Math.min(this.b9 * (dC[0] / dC[1]), b3.b4 - 2 * dH.gap), this.b9 = dC[1] * this.b4 / dC[0], this.r = dH.gap + dD[0] * (b3.b4 - this.b4 - 2 * dH.gap),
			this.s = dH.gap + dD[1] * (b3.b9 - this.b9 - 2 * dH.gap)
	}, this.dI = function() {
		return this.r + .5 * this.b4
	}
}

function dM() {
	var dN, dO, b4, r, s, dP, dQ;
	this.q = function() {
		dN = new Array(2), dO = new Array(2), this.dR = !1, dQ = dP = dL = dK = 0, dJ = 1, this.resize()
	}, this.resize = function() {
		b4 = (b4 = Math.floor((bA.bB.bC() ? .072 : .0502) * b3.dG)) < 8 ? 8 : b4;
		for (var ai = 1; 0 <= ai; ai--) dN[ai] = document.createElement("canvas"), dN[ai].width = b4, dN[ai].height = b4, dO[ai] = dN[ai].getContext("2d", {
			alpha: !0
		});
		this.dS(),
			function() {
				for (var e8 = Math.floor(1 + b4 / 20), ai = 1; 0 <= ai; ai--) dO[ai].clearRect(0, 0, b4, b4), dO[ai].fillStyle = aJ.e9, dO[ai].beginPath(), dO[ai].arc(b4 / 2, b4 / 2, b4 / 2 - e8, 0, 2 * Math.PI), dO[ai].fill(), dO[ai].lineWidth =
					e8, dO[ai].fillStyle = aJ.eA, dO[ai].strokeStyle = aJ.eA, dO[ai].beginPath(), dO[ai].arc(b4 / 2, b4 / 2, b4 / 2 - e8, 0, 2 * Math.PI), dO[ai].stroke(), eB(dO[ai], 0, 0, b4, e8, .3, 0 === ai)
			}()
	}, this.dX = function() {
		return -dK / dJ
	}, this.dY = function() {
		return -dL / dJ
	}, this.dZ = function(da, db) {
		dK = dJ * da - db
	}, this.dc = function(dd, de) {
		dL = dJ * dd - de
	}, this.df = function(dV, dW) {
		return bK.dg || ! function(dV, dW) {
			return Math.pow(dV - (r + b4 / 2), 2) + Math.pow(dW - (s + b4 / 2), 2) < b4 * b4 / 4 || Math.pow(dV - (r + b4 / 2), 2) + Math.pow(dW - (s + 2 * b4), 2) < b4 * b4 / 4
		}(dV, dW) || bz.c0.data[8].value ? (di.dj() && (this.dR = !0, dP = dV, dQ = dW), !1) : dW < s + 1.25 * b4 ? this.dh(Math.floor(b3.b4 / 2), Math.floor(b3.b9 / 2), -200) : this.dh(Math.floor(b3.b4 / 2), Math.floor(b3.b9 / 2), 200)
	}, this.dk = function(dV, dW) {
		var dl, dm, dn, dp;
		return !di.dj() || (dl = dK, dm = dL, dK += dn = dP - dV, dL += dp = dQ - dW, dq.dk(dn, dp), this.dr(), dP = dV, dQ = dW, dl !== dK) || dm !== dL
	}, this.dh = function(ds, dt, deltaY) {
		var du;
		if (di.dj()) {
			if (0 < deltaY) du = (du = 500 / (500 + deltaY)) < .5 ? .5 : du;
			else {
				if (!(deltaY < 0)) return !1;
				du = 2 < (du = (500 - deltaY) / 500) ? 2 : du
			}
			this.dv(ds, dt, du), bu.dw = !0
		}
		return !0
	}, this.dv = function(r, s, dx) {
		var e6;
		dx = e6 = (e6 = 1024 < (e6 = dx) * dJ ? 1024 / dJ : e6) * dJ < .125 ? .125 / dJ : e6, dq.zoom(dx, r, s),
			function(e6, ds, dt) {
				dJ *= e6, dK = (dK + ds) * e6 - ds, dL = (dL + dt) * e6 - dt, e7.dr()
			}(dx, r, s)
	}, this.dr = function() {
		var e0 = b3.b4 / 16,
			e1 = 0,
			e2 = b3.b9 / 16,
			e3 = 0;
		dK < e0 - b3.b4 && (e1 = -b3.b4 + e0 - dK), dK > dJ * t.u - e0 && (e1 = dJ * t.u - e0 - dK), dL < e2 - b3.b9 && (e3 = -b3.b9 + e2 - dL), dJ * t.v - e2 < dL && (e3 = dJ * t.v - e2 - dL), dK += e1, dL += e3, h.e4(), dq.e5(e1, e3)
	}, this.dS = function() {
		r = b3.b4 - b4 - dH.gap, s = Math.floor(b3.b9 / 2 - 1.25 * b4)
	}, this.eC = function() {
		bz.c0.data[8].value || (eD.drawImage(dN[0], r, s), eD.drawImage(dN[1], r, Math.floor(s + 3 * b4 / 2)))
	}
}

function eE() {
	this.eF = new eG, this.eH = new eI, this.aZ = new eJ, this.eK = new eL, this.eM = new eN, this.eO = new eP, this.eQ = new eR, this.eS = new eT, this.eU = new eV, this.eW = new eX, this.eY = new eZ, this.ea = new eb, this.ec = new ed, this.ak =
		new ee, this.ef = new eg, this.eh = new ei, this.ej = new ek, this.q = function() {
			this.ec.q(), this.eH.q(), this.aZ.q(), this.eK.q(), this.eM.q(), this.eW.q(), this.eh.q()
		}, this.eC = function() {
			this.eW.eC(), this.eH.eC()
		}
}

function el() {
	this.em = function(en, eo, ep) {
		for (var eq = [], ae = en.length, max = 0, ai = 0; ai < ae; ai++) {
			var er = en.charCodeAt(ai);
			eq.push(er), max = Math.max(max, er)
		}
		var es = max < 128 ? 7 : 16;
		for (ep.et(eo, ae), ep.et(1, +(16 == es)), ai = 0; ai < ae; ai++) ep.et(es, eq[ai])
	}
}

function eu() {
	var ev, ew, ex, ey, b9, ez, fontSize, f0, f1, f2, f3, canvas, f4, f5, f6;

	function f7(ai) {
		return L(0 === ai ? 4 : 1 === ai ? 5 : 2 === ai ? 6 : 7)
	}

	function fQ() {
		bK.fR ? fS + 4 * dH.gap + b9 + fT.fU() > fV.s ? eD.drawImage(canvas, 2 * dH.gap + fT.fU(), fS + 2 * dH.gap) : eD.drawImage(canvas, dH.gap, fS + 3 * dH.gap + fT.fU()) : eD.drawImage(canvas, dH.gap, fS + 2 * dH.gap)
	}

	function f9() {
		canvas.width = ev[0].width + f2, canvas.height = b9 + f2, (f4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, ev[0].width + f2, b9 + f2), f4.translate(Math.floor(f2 / 2), Math.floor(f2 / 2)), f4.lineWidth = f2, f4.fillStyle = 1 === ev[0].fO ? aJ.fW : aJ.bg, fX(), f4.fill(), f4.strokeStyle = 1 === ev[0].fO ? aJ.fY : aJ.eA,
		fX(), f4.stroke(), aR.az.textAlign(f4, 1), aR.az.textBaseline(f4, 1), f4.fillStyle = 1 === ev[0].fO ? aJ.fY : aJ.eA, f4.font = ez[0], f4.fillText(f7(ev[0].fN), Math.floor(ev[0].width / 2), Math.floor(.72 * f0[0] * b9)), f4.font = ez[1], f4
			.fillText(ev[0].en, Math.floor(ev[0].width / 2), Math.floor((f0[0] + .48 * f0[1]) * b9))
	}

	function fX() {
		f4.beginPath(), f4.moveTo(f3, 0), f4.lineTo(ev[0].width - f3, 0), f4.lineTo(ev[0].width, f3), f4.lineTo(ev[0].width, b9 - f3), f4.lineTo(ev[0].width - f3, b9), f4.lineTo(f3, b9), f4.lineTo(0, b9 - f3), f4.lineTo(0, f3), f4.closePath()
	}
	this.q = function() {
		ew = 4, ex = ey = f5 = 0, ev = [], ez = new Array(2), fontSize = new Array(2), (f0 = new Array(2))[0] = .3, f0[1] = .7, f1 = new Array(4), canvas = document.createElement("canvas"), f6 = bu.bv + 2e3, this.resize()
	}, this.resize = function() {
		var ai, b4;
		for (b9 = Math.floor((bA.bB.bC() ? .062 : .047) * b3.dG), fontSize[0] = Math.floor(.85 * f0[0] * b9), fontSize[1] = Math.floor(.85 * f0[1] * b9), ez[0] = aR.az.f8(1, fontSize[0]), ez[1] = aR.az.f8(1, fontSize[1]), ai = f1.length - 1; 0 <=
			ai; ai--) f1[ai] = this.measureText(f7(ai) + "000", ez[0]);
		if (f2 = Math.floor(1 + .05 * b9), f3 = Math.floor(.2 * b9), 0 < ev.length) {
			for (ai = ev.length - 1; 0 <= ai; ai--) b4 = this.measureText(ev[ai].en + "00", ez[1]), ev[ai].width = b4 < f1[ai] ? f1[ai] : b4;
			f9()
		}
	}, this.fA = function() {
		0 !== ew && (4 === ew ? bu.bv > f6 && (ew = 0, 1 === bK.fC) && fD.fE(t.fF.fG[t.fH].name, 3, 1, 9) : (1 === ew ? (0 === ex && (f9(), ex = 1e-4), 1 <= (ex += .002 * (bu.bv - f5)) && (ey = 0, ew = 2, ex = 1), bu.dw = !0) : 2 === ew ? ((ey +=
			(bu.bv - f5) / 1e3) > ev[0].fP || 1 < ey && 1 < ev.length) && (ew = 3) : 3 === ew && ((ex -= .002 * (bu.bv - f5)) <= 0 && (ex = 0, ev.shift(), ew = 0 < ev.length ? 1 : 0), bu.dw = !0), f5 = bu.bv))
	}, this.measureText = function(en, ez) {
		return eD.font = ez, Math.floor(eD.measureText(en).width)
	}, this.fJ = function(fK, ai) {
		this.fE(fL.fM[fK], ai, 1, 0 === ai ? 3 : 7)
	}, this.fE = function(en, fN, fO, fP) {
		var b4;
		en.length && (b4 = (b4 = this.measureText(en + "00", ez[1])) < f1[fN] ? f1[fN] : b4, ev.push({
			en: en,
			width: b4,
			fN: fN,
			fO: fO,
			fP: fP
		}), 0 === ew) && (ex = 0, ew = 1, f5 = bu.bv)
	}, this.eC = function() {
		0 !== ew && 0 !== ex && (ex < 1 ? (eD.globalAlpha = ex, fQ(), eD.globalAlpha = 1) : fQ())
	}
}

function fb() {
	var fc, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, fq, fr, fs, ft, fu, fv, fw, fx, position, fy, fz, g0, g1, g2, g3 = 1,
		g4 = 1,
		g5 = "";
	var leaderboardHasChanged = true;
	this.playerPos = bK.bL;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => fa[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(fa[bK.bL]);
	}

	function gA() {
		fi.clearRect(0, 0, fc, fS),
			fi.fillStyle = g2 ? aJ.gG : aJ.gH,
			fi.fillRect(0, 0, fc, fn),
			fi.fillStyle = aJ.gI,
			fi.fillRect(0, fn, fc, fS - fn);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			fa[bK.bL]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) fx = -1;
		if (__fx.leaderboardFilter.enabled && fx >= __fx.leaderboardFilter.filteredLeaderboard.length) fx = -1;
		playerPos >= position && gJ(playerPos - position, aJ.gK),
			0 !== fa[bK.bL] && 0 === position && gJ(0, aJ.gL),
			-1 !== fx && gJ(fx, aJ.gM),
			fi.fillStyle = aJ.gI,
			//console.log("drawing", fx),
			fi.clearRect(0, fS - __fx.leaderboardFilter.tabBarOffset, fc, __fx.leaderboardFilter.tabBarOffset);
		fi.fillRect(0, fS - __fx.leaderboardFilter.tabBarOffset, fc, __fx.leaderboardFilter.tabBarOffset);
		fi.fillStyle = aJ.eA,
			fi.fillRect(0, fn, fc, 1),
			fi.fillRect(0, fS - __fx.leaderboardFilter.tabBarOffset, fc, 1),
			__fx.leaderboardFilter.drawTabs(fi, fc, fS - __fx.leaderboardFilter.tabBarOffset, aJ.gK),
			fi.fillRect(0, 0, fc, dH.gN),
			fi.fillRect(0, 0, dH.gN, fS),
			fi.fillRect(fc - dH.gN, 0, dH.gN, fS),
			fi.fillRect(0, fS - dH.gN, fc, dH.gN), fi.font = fd, aR.az.textBaseline(fi, 1), aR.az.textAlign(fi, 1), fi.fillText(g5, Math.floor((fc + fn - 22) / 2), Math.floor(fl + fe / 2));
		__fx.playerList.drawButton(fi, 12, 12, fn - 22);
		var gF, gO = playerPos < position + fg - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - fg)
				position = (result.length > fg ? result.length : fg) - fg;
			//if (position >= result.length) position = result.length - 1;
			for (fi.font = ff, aR.az.textAlign(fi, 0), gF = fg - gO; 0 <= gF; gF--) {
				const pos = result[gF + position];
				if (pos !== undefined)
					gP(fZ[pos]), gQ(gF, pos, fZ[pos]);
			}
			for (aR.az.textAlign(fi, 2), gF = fg - gO; 0 <= gF; gF--) {
				const pos = result[gF + position];
				if (pos !== undefined)
					gP(fZ[pos]), gR(gF, fZ[pos]);
			}
		} else {
			for (fi.font = ff, aR.az.textAlign(fi, 0), gF = fg - gO; 0 <= gF; gF--)
				gP(fZ[gF + position]), gQ(gF, gF + position, fZ[gF + position]);
			for (aR.az.textAlign(fi, 2), gF = fg - gO; 0 <= gF; gF--)
				gP(fZ[gF + position]), gR(gF, fZ[gF + position]);
		}
		2 == gO && (gP(bK.bL), aR.az.textAlign(fi, 0), gQ(fg - 1, fa[bK.bL], bK.bL), aR.az.textAlign(fi, 2), gR(fg - 1, bK.bL)), 0 === position && (gO = .7 * fo / gZ.get(4).height, fi.setTransform(gO, 0, 0, gO, Math.floor(fp + .58 * fo + .5 * gO * gZ
			.get(4).width), Math.floor(fl + fe + .4 * fo)), fi.imageSmoothingEnabled = !0, fi.drawImage(gZ.get(4), -Math.floor(gZ.get(4).width / 2), -Math.floor(gZ.get(4).height / 2)), fi.setTransform(1, 0, 0, 1, 0, 0))
	}

	function gP(player) {
		bK.fR && (fi.fillStyle = gT.gU[gT.gV[player]])
	}

	function gJ(ai, gW) {
		fi.fillStyle = gW, ai = fg - 1 < ai ? fg - 1 : ai;
		gW = Math.floor((ai === fg - 1 ? 2 : 0 === ai ? 1.15 : 1) * fo), gW = ai === fg - 2 ? Math.floor(fn + 9.15 * fo) - Math.floor(fn + 8.15 * fo) : gW;
		fi.fillRect(0, Math.floor(fn + (ai + (0 === ai ? 0 : .15)) * fo), fc, gW)
	}

	function gQ(ga, gb, ai) {
		fi.fillText(ft[gb], fp, Math.floor(fl + fe + (ga + .5) * fo)), 1 === fL.gc[ai] && (fi.font = "italic " + ff);
		gb = Math.floor(fl + fe + (ga + .5) * fo);
		fi.fillText(fL.fM[ai], fq, gb), 0 !== fL.gc[ai] && (fi.font = ff), ai < bK.gd && 2 !== fL.gc[ai] || fi.fillRect(fq, gb + .35 * g3, fs[ai], Math.max(1, .1 * g3))
	}

	function gR(ga, ai) {
		fi.fillText(fL.ge[ai], fr, Math.floor(fl + fe + (ga + .5) * fo))
	}
	this.q = function() {
		var ai;
		for (g1 = g0 = fy = 0, g2 = fz = !1, fx = -1, fg = bA.bB.bC() ? 6 : 10, g4 = (position = 0) === (g4 = bz.c0.data[11].value) ? 10 : 1 === g4 ? 5 : 1, fw = !1, fu = new Uint16Array(fg + 1), fv = new Uint32Array(fg + 1), fk = bK.g6, fZ =
			new Uint16Array(fk), fa = new Uint16Array(fk), ai = fk - 1; 0 <= ai; ai--) fZ[ai] = ai, fa[ai] = ai;
		this.resize(!0), fs = new Uint16Array(bK.g6);
		var g7 = Math.floor(fc - fq - fp - fj);
		for (ft = new Array(bK.g6), fi.font = ff, ai = bK.g6 - 1; 0 <= ai; ai--) ft[ai] = ai + 1 + ".", fL.fM[ai] = aR.f4.g8(fL.g9[ai], ff, g7), fs[ai] = Math.floor(fi.measureText(fL.fM[ai]).width);
		gA()
	}, this.resize = function(q) {
		if (fS = bA.bB.bC() ? (fc = Math.floor(.335 * b3.dG), Math.floor(fg * fc / 8)) : (fc = Math.floor(.27 * b3.dG), Math.floor(fg * fc / 10)), fc = Math.floor(.97 * fc), (fh = document.createElement("canvas")).width = fc, fh.height = fS, fi =
			fh.getContext("2d", {
				alpha: !0
			}), fl = .025 * fc, fe = .16 * fc, fm = 0 * fc, fn = Math.floor(.45 * fl + fe), fo = (fS - fe - 2 * fl - fm) / fg,
			fh.height = fS += fo, __fx.leaderboardFilter.tabBarOffset = Math.floor(fo * 1.3), __fx.leaderboardFilter.verticalClickThreshold = fS - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = fc,
			fd = aR.az.f8(1, Math.floor(.55 * fe)), g3 = Math.floor((bA.bB.bC() ? .67 : .72) * fo), ff = aR.az.f8(0, g3), fi.font = ff, fp = Math.floor(.04 * fc), fq = Math.floor((bA.bB.bC() ? .195 : .18) * fc), fj = Math.floor(fi.measureText(
				"00920600").width), fi.font = fd, fr = fc - fp, !q) {
			fi.font = ff;
			for (var ai = bK.g6 - 1; 0 <= ai; ai--) fs[ai] = Math.floor(fi.measureText(fL.fM[ai]).width);
			gA()
		}
		g5 = aR.f4.g8(L(8), fd, .96 * fc)
	}, this.gB = function() {
		return fc
	}, this.gC = function(au, gD) {
		(gD || fw && (au || bu.gE() % g4 == 0)) && (fw = !1, gA())
	}, this.fA = function() {
		! function() {
			for (var gF = fk - 1; 0 <= gF; gF--) 0 === fL.gl[fZ[gF]] && ! function(gF) {
				var gn = fZ[gF];
				fk--;
				for (var ai = gF; ai < fk; ai++) fZ[ai] = fZ[ai + 1], fa[fZ[ai]] = ai;
				fZ[fk] = gn, fa[fZ[fk]] = fk
			}(gF)
		}();
		for (var gk, dj = fk - 1, gF = 0; gF < dj; gF++) fL.ge[fZ[gF]] < fL.ge[fZ[gF + 1]] && (gk = fZ[gF], fZ[gF] = fZ[gF + 1], fZ[gF + 1] = gk, fa[fZ[gF]] = gF, fa[fZ[gF + 1]] = gF + 1);
		! function() {
			for (var gj = fw, gO = (fw = !0, fa[bK.bL] >= fg - 1 ? fg - 2 : fg - 1), ai = gO; 0 <= ai; ai--)
				if (fu[ai] !== fZ[ai] || fv[ai] !== fL.ge[fZ[ai]]) return;
			(gO != fg - 2 || fu[fg] === fa[bK.bL] && fv[fg] === fL.ge[bK.bL]) && (fw = gj)
		}();
		for (var ai = fg - 1; 0 <= ai; ai--) fu[ai] = fZ[ai], fv[ai] = fL.ge[fZ[ai]];
		fu[fg] = fa[bK.bL], fv[fg] = fL.ge[bK.bL];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.df = function(r, s) {
		if (go(r, s)) {
			if (__fx.utils.isPointInRectangle(r, s, dH.gap + 12, dH.gap + 12, fn - 22, fn - 22)) __fx.playerList.display(fL.g9);
			else {
				if (s - dH.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(r - dH.gap);
				r = gq(s);
				0 <= r ? (fy = bu.bv, fz = !0, g0 = g1 = r, gr.gs() && (r = gt(-1, g1, fg), fx !== (r = r === fg ? -1 : r)) && (fx = r, gA(), bu.dw = !0)) : (g2 && (g2 = !1, gA(), bu.dw = !0), ax.gu(10, 0, new gv({
					gw: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		gA(), bu.dw = !0
	};

	function gq(s) {
		return (s -= dH.gap + fn) < 0 ? Math.floor(s / fo) - 1 : s < (fg - 1) * fo ? Math.floor(s / fo) : s < fS - fn ? fg - 1 : (s -= fS - fn, fg + Math.floor(s / fo))
	}

	function go(r, s) {
		return r >= dH.gap && r < dH.gap + fc && s >= dH.gap && s < dH.gap + fS
	}
	this.dk = function(r, s) {
		var gj, gp;
		if (__fx.utils.isPointInRectangle(r, s, dH.gap + 12, dH.gap + 12, fn - 22, fn - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (__fx
				.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(r, s, dH.gap, dH.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx
				.leaderboardFilter.tabBarOffset), r - dH.gap)) return gp = gq(s), r = go(r, s), s = !(!(gp < 0 && r) || gr.gs()), fz ? (gj = position, (position = gt(0, position += g0 - gp, bK.g6 - fg)) !== gj ? (g2 = s, gp = gt(-1, g0 = gp, fg),
			fx = gp = gp !== fg && r ? gp : -1, gA(), bu.dw = !0) : g2 !== s && (g2 = s, gA(), bu.dw = !0), !0) : (gp = (gp = gt(-1, gp, fg)) === fg || !r || gr.gs() ? -1 : gp, (fx !== gp || g2 !== s) && (fx = gp, g2 = s, gA(), bu.dw = !
			0))
	}, this.gz = function(r, s) {
		if (!fz) return !1;
		fz = !1;
		var gp = gq(s);
		var isEmptySpace = false;
		return gr.gs() && -1 !== fx && (fx = -1, gA(), bu.dw = !0), bu.bv - fy < 350 && g1 === gp && -1 !== (gp = (gp = gt(-1, gp, fg)) !== fg && go(r, s) ? gp : -1) && (r = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(), fZ[__fx
				.leaderboardFilter.filteredLeaderboard[gp + position] ?? (isEmptySpace = true, fa[bK.bL])]) : fZ[gp + position]), gp === fg - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : fa[bK.bL]) >=
			position + fg - 1 && (r = bK.bL), !isEmptySpace && bK.fR && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(r, fL.g9, bK.bX), 0 !== fL.gl[r] && !isEmptySpace) && di.h0(r, 800, !1, 0), !0
	}, this.dh = function(r, s, deltaY) {
		var h1;
		return !(fz || bK.dg || (h1 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !go(r, s)) || (r = (r = gt(-1, gq(s), fg)) === fg || gr.gs() ? -1 : r, 0 < deltaY ? position < bK.g6 - fg && (position += Math.min(bK.g6 - fg - position, h1),
			fx = r, gA(), bu.dw = !0) : 0 < position && (position -= Math.min(position, h1), fx = r, gA(), bu.dw = !0), 0))
	}, this.eC = function() {
		eD.drawImage(fh, dH.gap, dH.gap)
	}
}

function eG() {
	this.h2 = function(player) {
		for (var h3 = h4.aZ.h3, h5 = player << 3, ai = h5 + h4.aZ.h7[player] - 1; h5 <= ai; ai--) this.h8(h3[ai])
	}, this.h8 = function(h9) {
		var aZ = h4.aZ,
			hA = aZ.hB - 1,
			hC = aZ.hD[h9],
			hE = aZ.hF[h9],
			hG = aZ.hH[h9];
		aZ.hB = hA, aZ.hD[h9] = aZ.hD[hA], aZ.hH[h9] = aZ.hH[hA], aZ.hI[h9] = aZ.hI[hA], aZ.hJ[h9] = aZ.hJ[hA], aZ.hF[h9] = aZ.hF[hA], aZ.hK[h9] = aZ.hK[hA], aZ.hL[h9] = aZ.hL[hA], aZ.hM[h9] = aZ.hM[hA], aZ.hN[h9] = aZ.hN[hA], aZ.hO[h9] = aZ.hO[
				hA], aZ.h3[aZ.hD[h9]] = h9,
			function(hT) {
				var player = hT >> 3,
					aZ = h4.aZ,
					ae = aZ.h7[player] - 1,
					hU = (player << 3) + ae;
				aZ.h7[player] = ae, hU !== hT && (aZ.h3[hT] = aZ.h3[hU], aZ.hD[aZ.h3[hT]] = hT)
			}(hC), h4.eK.eK[hQ.hR(aZ.hH[h9])][aZ.hF[h9]] = h9, hA = hQ.hR(hG), hC = hE, hA = h4.eK.eK[hA], aZ = hA.pop(), hC !== hA.length && (hA[hC] = aZ, h4.aZ.hF[aZ] = hC)
	}
}

function hX() {
	this.hY = function(hZ) {
		var username = bz.c0.data[122].value.slice(0, 20),
			username = (cN.ha(24 + 16 * username.length + 18 + hb.hc.cR()), cN.et(1, 0), cN.et(6, 1), cN.et(10, hd.he), cN.et(2, bz.c0.data[158].value), bM.hf.hg(username), aR.color.hi(bz.aZ.hj()));
		cN.et(6, username[0]), cN.et(6, username[1]), cN.et(6, username[2]), hb.hc.em(), bM.aZ.hk = hZ, bM.aZ.send(hZ, cN.hl)
	}, this.hm = function(hn, ho) {
		hp.q(), hp.et(1, 0), hp.et(6, 2), hp.et(3, hn), 2 === hn ? hp.et(2, ho) : 3 === hn ? cI.cY.em(ho, 7, hp) : 5 === hn && (hp.et(3, ho.id), hp.et(3, ho.value), hp.et(30, ho.d8)), bM.aZ.send(bM.aZ.hk, hp.hq())
	}
}

function hr() {
	this.hs = new ht, this.q = function() {
		this.hs.resize()
	}
}

function hu(hv) {
	var hw = document.createElement("div"),
		a4 = document.createElement("div"),
		hx = [];

	function hz() {
		gr.i3() || (this.style.backgroundColor = aR.color.i4(aJ.gI, 50))
	}

	function i0() {
		this.style.backgroundColor = aJ.gI
	}
	this.cH = function(i1, i2) {
			hx[2].textContent = i1 + 1 + " / " + i2
		}, this.show = function(aq) {
			a4.appendChild(aY.at.transform(aY.ak.al(aq, aY.ak.am(aq)))), document.body.appendChild(hw)
		}, this.resize = function() {
			var b9 = aR.az.b0(.03, .5);
			hw.style.width = 10 * b9 + "px", hw.style.font = aR.az.f8(1, .75 * b9), aR.az.bD(hw, 4), a4.style.top = b9 + "px", a4.style.font = aR.az.f8(0, .55 * b9), aR.az.bD(a4, 2), hw.style.height = b9 + a4.offsetHeight + "px";
			for (var ai = 0; ai < 3; ai++) aR.az.bD(hx[ai], 6), hx[[0, 1, 3][ai]].style.width = 2 * b9 + "px";
			for (ai = 0; ai < 4; ai++) hx[ai].style.height = b9 + "px", aR.az.bD(hx[ai], 2);
			hx[2].style.width = 4 * b9 + "px", hx[1].style.left = 2 * b9 + "px", hx[2].style.left = 4 * b9 + "px", hx[3].style.left = 8 * b9 + "px"
		}, this.cC = function() {
			for (var ai = 0; ai < 4; ai++) hx[ai].onclick = null, hx[ai].onmouseover = null, hx[ai].onmouseout = null;
			ax.removeChild(document.body, hw), hw = a4 = hx = null
		}, hw.style.position = "absolute", hw.style.color = aJ.eA, hw.style.zIndex = "3", hw.style.right = "0", hw.style.top = "0", a4.style.position = "absolute", a4.style.height = "auto", a4.style.color = aJ.eA, a4.style.backgroundColor = aJ.gI, a4
		.style.left = "0", a4.style.width = "100%", a4.style.overflowWrap = "break-word", hw.appendChild(a4);
	for (var ai = 0; ai < 4; ai++) hx[ai] = document.createElement("div"), hx[ai].style.position = "absolute", hx[ai].style.backgroundColor = aJ.gI, hx[ai].style.color = aJ.eA, hx[ai].style.top = "0", hx[ai].style.display = "flex", hx[ai].style
		.justifyContent = "center", hx[ai].style.alignItems = "center", hx[ai].style.userSelect = "none", hx[ai].style.outline = "none", hx[ai].style.font = "inherit", 2 !== (hx[ai].hy = ai) && (hx[ai].onclick = hv, hx[ai].onmouseover = hz, hx[ai]
			.onmouseout = i0), hw.appendChild(hx[ai]);
	hx[0].textContent = "◀", hx[1].textContent = "▶", hx[3].textContent = "✖"
}

function aM(i5, i6, i7, i8, i9) {
	var self, iA = document.createElement("button");

	function hz() {
		var iL;
		gr.i3() || (iL = aR.color.iM(i7), !1 !== i8 && 0 < iL[0] && iL[0] < 255 && iL[0] === iL[1] && iL[0] === iL[2]) || (128 < iL[0] && 128 < iL[1] && 128 < iL[2] ? iA.style.backgroundColor = aR.color.i4(i7, -50) : iA.style.backgroundColor = aR
			.color.i4(i7, iL[3] && iL[3] < 120 ? 150 : 50))
	}

	function iF() {
		if (i8) {
			var iL = aR.color.iM(i7);
			if (iL[0] === iL[1] && iL[0] === iL[2]) return
		}
		i6 && ((iL = i6(this)) ? 2 === iL && hz() : iO(this))
	}

	function iG() {
		this.style.backgroundColor = i7
	}

	function i0() {
		iO(this)
	}

	function iO(iP) {
		iP.style.backgroundColor = i7, iP.blur()
	}
	this.button = iA, this.iB = i6, this.iC = i7, this.iE = function(iH) {
		iH = 1.1 - Math.min(.01 * i5.length, .6) + .2 * iH;
		iA.style.fontSize = iH.toFixed(1) + "em"
	}, this.aN = function(iJ) {
		iJ ? 1 === iJ ? iJ = aJ.iK : 2 === iJ && (i8 = 1, iJ = aJ.iK) : (i8 = 0, iJ = aJ.gI), this.iC = i7 = iJ, iA.style.backgroundColor = iJ
	}, self = this, iA.innerHTML = i5, iA.style.color = i9 ? aJ.iD : aJ.eA, iA.style.userSelect = "none", iA.style.outline = "none", iA.style.overflowWrap = "break-word", self.aN(i7), iA.style.border = "none", iA.style.font = "inherit", self.iE(
		0), iA.style.padding = "0em 0.3em", iA.onclick = iF, iA.addEventListener("mouseover", hz), iA.addEventListener("mouseout", i0), iA.addEventListener("focus", hz), iA.addEventListener("blur", iG)
}

function iQ() {
	var iR, iS, iT, ii;

	function iV() {
		iZ(), 2 === bK.data.playerNamesType && 1 === aR.ie.ig(bK.data.playerNamesData).length && (bK.data.playerNamesType = 0), 2 !== bK.data.playerNamesType && (bK.data.playerNamesData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		2 === bK.data.playerNamesType && aR.ie.ih(iT.f7(), bK.data.playerNamesData, 20)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(9), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), hW.io(new ip({
			iq: [L(12), L(13), L(14)],
			value: bK.data.playerNamesType
		}, function(a8) {
			iZ(), bK.data.playerNamesType = a8, ax.gu(23)
		})), hW.ir(new is), hW.ir(new it({
			value: bK.data.selectableName
		}, L(15), function(value) {
			bK.data.selectableName = value
		})), ii.push(hW)
	}(ii = []), function(ii) {
		var hW;
		2 === bK.data.playerNamesType && ((hW = new il).im("Data"), iT = new iu(0, 1, 0, 1), bK.data.playerNamesData && bK.data.playerNamesData.length === bK.g6 || (bK.data.playerNamesData = new Array(bK.g6), bK.data.playerNamesData.fill(
			"")), iT.iv(aR.aS.iw(bK.data.playerNamesData, 1, '"')), hW.ir(iT), ii.push(hW))
	}(ii), ii))
}

function iz() {
	var iR, iS, iT, ii;

	function iV() {
		iZ(), 2 !== bK.data.spawningType || aR.ie.ig(bK.data.spawningData) || (bK.data.spawningType = 0), 2 !== bK.data.spawningType && (bK.data.spawningData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		2 === bK.data.spawningType && aR.ie.j0(iT.f7(), bK.data.spawningData, t.j1 - 1)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(16), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, (function(ii) {
		var hW = new il,
			iq = (hW.im(L(11)), [L(17), L(18), L(14)]),
			value = bK.data.spawningType;
		0 === bK.data.gameMode && (iq.splice(1, 1), 0 < value) && (value = 1);
		hW.io(new ip({
			iq: iq,
			value: value
		}, function(a8) {
			iZ(), bK.data.spawningType = a8, 0 === bK.data.gameMode && 1 === a8 && (bK.data.spawningType = 2), 2 !== bK.data.spawningType || bK.data.spawningData || (bK.data.spawningData = new Uint16Array(2 * bK.g6)), ax.gu(
				24)
		})), hW.ir(new is), hW.ir(new it({
			value: bK.data.selectableSpawn
		}, L(19), function(value) {
			bK.data.selectableSpawn = value
		})), ii.push(hW)
	}(ii = []), function(ii) {
		var hW = new il;
		hW.im("Seed"), hW.ir(new a7({
			a8: -1,
			value: bK.data.spawningSeed
		}, 1, 0, function(aH) {
			var value = Math.abs(Math.floor(aH.target.value)) % 16384;
			aH.target.value = bK.data.spawningSeed = value
		})), ii.push(hW)
	}(ii), function(ii) {
		var hW;
		2 === bK.data.spawningType && ((hW = new il).im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.spawningData, 2)), hW.ir(iT), ii.push(hW))
	}(ii), ii))
}

function j3() {
	this.fJ = function(player, j4) {
		j5.j6(player, hQ.j7(j4), hQ.j8(j4)) && (bu.dw = !0), bK.bX && this.fA()
	}, this.fA = function() {
		bK.j9 = !1;
		for (var ai = 0; ai < bK.gd; ai++) 0 !== fL.gl[ai] && 0 === fL.ge[ai] && j5.jA(ai);
		0 !== fL.gl[bK.bL] ? (jB.jC[7] = fL.ge[bK.bL], jB.jC[8] = fL.jD[bK.bL], fV.jE(), jF.jG(), bK.bY || di.jH(fL.jI[bK.bL] - 5, fL.jJ[bK.bL] - 5, fL.jK[bK.bL] + 5, fL.jL[bK.bL] + 5), jM.q()) : jN.show(!1, !1, !1, !0), bI.jO(18), dq.jP(), dq
			.gC(!0), jQ.aZ.jR(), jS.aw(), bK.jT = null, jU.d = !0, jU.m(), bK.bX && bA.bB.setState(1)
	}
}

function jV() {
	var iR, iS, iT, jW;

	function iV() {
		iZ(), 1 !== bK.data.colorsType && (bK.data.colorsData = null), ax.ib()[19] = null, ax.ic()
	}

	function jX() {
		iZ(), ax.gu(21)
	}

	function iZ() {
		1 === bK.data.gameMode ? bK.jY.jZ() : 0 === bK.data.gameMode && 1 === bK.data.colorsType && aR.ie.j0(iT.f7(), bK.data.colorsData, 262143)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, jW = [new aM("⬅️ " + L(10), iV)], 1 === bK.data.gameMode && jW.push(new aM(L(20), jX, 1, 1)), iR = new iU(L(21), jW), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), 0 === bK.data.gameMode && (hW.io(new ip({
			iq: [L(17), L(14)],
			value: bK.data.colorsType
		}, function(a8) {
			iZ(), bK.data.colorsType = a8, 1 !== bK.data.colorsType || bK.data.colorsData && bK.data.colorsData.length === bK.g6 || (bK.data.colorsData = new Uint32Array(bK.g6)), ax.gu(21)
		})), hW.ir(new is));
		hW.ir(new it({
			value: bK.data.selectableColor
		}, L(22), function(value) {
			bK.data.selectableColor = value
		})), ii.push(hW)
	}(jW = []), 0 === bK.data.gameMode ? 1 === bK.data.colorsType && function(ii) {
		var hW = new il;
		hW.im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.colorsData, 1)), hW.ir(iT), ii.push(hW)
	}(jW) : (bK.jY.jZ(), jW.push(function() {
		var hW = new il;
		hW.im(L(23));
		for (var ai = 0; ai < gT.jb.length; ai++) {
			var jc = (ai + 1) % gT.jb.length,
				aH = hW.jd((0 == jc ? "" : "Team ") + gT.jb[jc]);
			ai && (aH.style.marginTop = "0.5em"), hW.ir(new a7({
				a8: -1,
				value: bK.data.teamPlayerCount[jc]
			}, 1, 0, function(aH) {
				iR.iy[1].aN(0);
				var playerCount = je.jf(Math.floor(aH.target.value), 0, 512);
				aH.target.value = playerCount, bK.data.teamPlayerCount[aH.target.jg] = playerCount
			})).aH.jg = jc
		}
		return hW
	}())), jW))
}

function ji() {
	this.q = function() {
		! function() {
			var data = bz.c0.data;
			0 === data[2].jl && (b3.b9 > b3.b4 || 0 !== bA.id) && (data[2].value = data[2].jm = 1);
			0 === data[100].jl && (data[100].value = data[100].jm = (0 === bA.id ? "Player " : 1 === bA.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var ai, er, data = bz.c0.data,
			ae = data.length;
		for (ai = 0; ai < ae; ai++) data[ai] && data[ai].jl === bz.iB.jn(ai, !0) && (er = bz.iB.jo(ai), data[ai].value = null === er ? data[ai].jm : 2 === data[ai].type ? er : Number(er))
	}
}

function jp() {
	this.q = function() {
		this.jq = 0, this.jr = [], this.js = 0, this.jt = 0
	}, this.ju = function() {
		var jw;
		bK.bX || (jw = this, 2 === bK.jx ? jw.jr = jy.jz.k0() : bK.fR ? jw.jr = jy.jz.k1() : jw.jr = jy.jz.k2(), jw.jq = hb.k3.k4(), jw.js = Math.max(1, jy.jz.k5(jw.jr)), k6.bc.bW(), 8 === bK.k7 ? jy.result.jt = 0 : jw.jt = 100 * jy.result.jq * (
			1 + bK.k9))
	}
}

function kA() {
	this.fA = function(player) {
		return h4.eS.kB(player, function(player) {
			var ae = kD.kE.kF;
			if (0 === ae) return -1;
			for (var kG = Math.min(ae, kD.performance.kH ? ae : 10), c0 = kD.kE.c0, af = je.kI(kJ.random() * ae, kJ.value(100)), aH = af + kG, ds = kJ.kK(fL.jI[player], fL.jK[player]), dt = kJ.kK(fL.jJ[player], fL.jL[player]), kL = -1,
					kM = hQ.kN(0, 0, t.u, t.v), ai = af; ai < aH; ai++) {
				var gO = ai % ae,
					kO = hQ.kP(ds, dt, c0[gO]);
				kO < kM && (kM = kO, kL = gO)
			}
			return -1 !== kL ? function(j4, ds, dt) {
				var kR = hQ.j7(j4),
					kS = hQ.j8(j4),
					dn = ds - kR,
					dp = dt - kS;
				Math.abs(dn) >= Math.abs(dp) ? (dp = 0, dn = Math.sign(dn)) : (dn = 0, dp = Math.sign(dp));
				dn === dp && (dn = 1);
				for (;;) {
					if (kR += dn, kS += dp, !hQ.kT(kR, kS)) break;
					if (j4 = hQ.kU(kR, kS), x.kV(hQ.kW(j4))) return j4
				}
				return -1
			}(c0[kL], ds, dt) : -1
		}(player))
	}
}

function kX() {
	this.kY = function(en) {
		for (var ae = en.length, b4 = cN, ai = 0; ai < ae; ai++) b4.et(16, en.charCodeAt(ai))
	}
}

function kZ() {
	ka() ? (kb(), kc !== bK.g6 && kd()) : ke()
}

function kd() {
	kf.kg(), kf.kh(fL.ki[kc]), kf.kh(fL.kj[kc]), t.kk(t.fH) && kf.kh(fL.kl[kc]), kf.km(fL.kn[kc]), kf.ko(fL.kj[kc]), kf.ko(fL.kl[kc]), kf.kp(), kf.kq()
}

function kb() {
	kr = !0, ks.kt(ku, kv, kw), ks.kx(ku, kv), fL.ge[ku] += ky, kf.kz(), l0()
}

function ka() {
	return (kc === bK.g6 ? l1 : l2)()
}

function l2() {
	var l3 = ky * bK.l4,
		l5 = l6(),
		l7 = l8(),
		l5 = l3 + 2 * l5 + l7,
		lA = lB * ky;
	return l5 < lA ? (kw -= l5, jB.lC(ku, l5, 13), lD(l5 - l3, l7), !0) : lE && 0 === l7 ? (kw -= lA, lA += aR.bc.lF(ku, l5 - lA + 1), jB.lC(ku, lA, 13), lD(lA - l3, 0), !0) : (kw -= lA, jB.lC(ku, lA, 13), lD(lA - l3, l7), !1)
}

function lD(lA, l7) {
	if (0 < l7) {
		if (lA <= l7) return jB.lC(kc, lA, 13), void ks.lG(kc, ku, l7 - lA);
		ks.lG(kc, ku, 0), lA -= l7
	}
	lA = je.kI(lA, 2), lA = Math.min(fL.jD[kc], lA), jB.lC(kc, lA, 13), fL.jD[kc] -= lA
}

function l8() {
	return ks.lH(kc, ku)
}

function l6() {
	return je.kI(ky * fL.jD[kc], 1 + je.kI(10 * fL.ge[kc], 16))
}

function l1() {
	var lI = ky * bK.l4;
	return kw -= lI, jB.lC(ku, lI, 13), !0
}

function l0() {
	for (var ai = ky - 1; 0 <= ai; ai--) fL.kn[ku].push(lJ[ai]), fL.ki[ku].push(lJ[ai]), x.lK(lJ[ai], ku)
}

function lL() {
	this.lM = new lN, this.lO = new lP, this.q = function() {
		bA.bB.lQ()
	}, this.lR = function() {
		return bz.c0.data[160].value
	}
}

function lS() {
	this.lT = function(hZ) {
		var lm;
		cN.ha(55), cN.et(1, 0), cN.et(6, 13), cN.et(14, hd.lj), cN.et(4, bA.id), cN.et(7, bA.jl), cN.et(1, +hd.lk), cN.et(1, +hd.ll), cN.et(5, (new Date).getHours() % 24), lm = ln.lo(), cN.et(8, lm[0]), cN.et(8, lm[1]), bM.aZ.send(hZ, cN.hl)
	}, this.lV = function(hZ, iN, lW, lX) {
		cN.ha(100), cN.et(1, 0), cN.et(6, 14), cN.et(3, lX), cN.et(30, iN[0]), cN.et(30, iN[1]), cN.et(30, lW), bM.aZ.send(hZ, cN.hl)
	}, this.lY = function(hZ, iN) {
		cN.ha(37), cN.et(1, 0), cN.et(6, 30), cN.et(30, iN), bM.aZ.send(hZ, cN.hl)
	}, this.lZ = function(id) {
		cN.ha(13), cN.et(1, 0), cN.et(6, 15), cN.et(6, id), bM.aZ.send(0, cN.hl)
	}, this.la = function(id, value) {
		cN.ha(43), cN.et(1, 0), cN.et(6, 3), cN.et(6, id), cN.et(30, value), bM.aZ.send(0, cN.hl)
	}, this.lb = function(id, en) {
		var ae = Math.min(en.length, 63);
		cN.ha(19 + 16 * ae), cN.et(1, 0), cN.et(6, 26), cN.et(6, id), cN.et(6, ae), cI.lc.kY(en), bM.aZ.send(0, cN.hl)
	}, this.ld = function(le, aq) {
		cN.ha(7 + 26 * aq.length), cN.et(1, 0), cN.et(6, 9);
		for (var ai = 0; ai < aq.length; ai++) cN.et(16, aq[ai][0]), cN.et(10, aq[ai][1]);
		bM.aZ.send(le, cN.hl)
	}, this.lf = function(lg, lh) {
		cN.ha(20), cN.et(1, 0), cN.et(6, 19), cN.et(1, lg), cN.et(12, lh), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.hg = function(username) {
		cN.et(5, username.length), cI.lc.kY(username)
	}
}

function lp() {
	var lq, lr, ii;
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), lr.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(L(24), [new aM("⬅️ " + L(10), function() {
		ax.gu(7, ax.ls(7).lt)
	}), new aM(L(25), function() {
		bz.cG.cH(105, bw.bx.lw(lr.lx[0].ly[0].aH.value, 5)), bz.cG.cH(106, bw.bx.lw(lr.lx[1].ly[0].aH.value, 15)), ax.gu(8, ax.ls(7).lt, new lz(18))
	})]), lr = new iW(lq.iX, ((ii = []).push(function() {
		var hW = new il;
		return hW.im(L(26)), hW.ir(new a7({
			value: "",
			a8: -1
		})), hW
	}()), ii.push(function() {
		var hW = new il,
			m3 = (hW.im(L(27)), new a7({
				value: "",
				a8: -1
			}));
		return m3.aH.type = "password", hW.ir(m3), hW.ir(new m4([new aM(L(28), function(aH) {
			return aH.textContent === L(28) ? (aH.textContent = L(29), m3.aH.type = "text") : (aH.textContent = L(28), m3.aH.type = "password"), !0
		}).button])), hW
	}()), ii.push(function() {
		var hW = new il;
		return hW.im(L(30)), hW.m5(L(31)), hW.m5(L(32)), hW.m5(L(33)), hW
	}()), ii))
}

function m6() {
	this.m7 = new ba
}

function m8() {
	var iR, iS, iT, ii;

	function iV() {
		iZ(), 2 !== bK.data.tIncomeType && (bK.data.tIncomeData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		2 === bK.data.tIncomeType && aR.ie.j0(iT.f7(), bK.data.tIncomeData, 255)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(34), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), hW.io(new ip({
			iq: [L(35), L(36), L(14)],
			value: bK.data.tIncomeType
		}, function(a8) {
			iZ(), 2 !== a8 || bK.data.tIncomeData || (bK.data.tIncomeData = new Uint8Array(bK.g6), bK.data.tIncomeData.fill(32)), bK.data.tIncomeType = a8, ax.gu(26)
		})), ii.push(hW)
	}(ii = []), function(ii) {
		var hW;
		1 === bK.data.tIncomeType && ((hW = new il).im("Value"), hW.ir(new a7({
			a8: -1,
			value: bK.data.tIncomeValue
		}, 1, 0, function(aH) {
			var value = je.jf(Math.floor(aH.target.value), 0, 255);
			aH.target.value = bK.data.tIncomeValue = value
		})), ii.push(hW))
	}(ii), function(ii) {
		var hW;
		2 === bK.data.tIncomeType && ((hW = new il).im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.tIncomeData, 4)), hW.ir(iT), ii.push(hW))
	}(ii), ii))
}

function m9() {
	var gap, mB, r = [0, 0, 0, 0, 0],
		s = [0, 0, 0, 0, 0],
		du = [1, 1, 1, 1, 1],
		er = [!0, !0, !0, !1, !1],
		iJ = (this.mA = [!0, !0, !0, !1, !1], null);
	this.mC = function(mD, mE) {
		iJ = mD, er = mE, mB = [mF.mG, mF.mH, mF.mI, mF.mI, mF.mJ], this.q()
	}, this.q = function() {
		if (gZ.mK()) {
			var ai, mL = Math.floor((bA.bB.bC() ? .261 : .195) * b3.dG),
				mM = Math.floor(.9 * mL),
				mN = Math.floor(.17 * mM);
			if (gap = bA.bB.bC() ? 2 * dH.gap : dH.gap, du[0] = mL / iJ[0].width, du[1] = mM / iJ[1].width, du[2] = mN / iJ[2].height, du[3] = mN / iJ[3].height, du[4] = mN / iJ[4].height, du[2] *= 1.7, du[3] *= 1.07, r[0] = gap, r[1] = gap, r[
				2] = gap, r[3] = gap, r[4] = Math.floor(2 * gap + du[3] * iJ[3].width), s[0] = gap, s[1] = s[0] + gap + du[0] * iJ[0].height, s[2] = s[1] + gap + du[1] * iJ[1].height, s[3] = s[2] + gap + du[2] * iJ[2].height, s[4] = s[3], !er[0])
				for (ai = 0; ai < 5; ai++) s[ai] -= du[0] * iJ[0].height + gap;
			if (!er[1])
				for (ai = 2; ai < 5; ai++) s[ai] -= du[1] * iJ[1].height + gap
		}
	}, this.mO = function() {
		return !(7 === cB.mP() && bA.bB.bC())
	}, this.df = function(db, de) {
		if (iJ && this.mO())
			for (var ai = er.length - 1; 0 <= ai; ai--)
				if (er[ai] && this.mA[ai] && r[ai] < db && s[ai] < de && db < r[ai] + du[ai] * iJ[ai].width && de < s[ai] + du[ai] * iJ[ai].height) return ax.gu(9, ax.d2, new mQ(L(37), aR.az.mR(mB[ai]))), !0;
		return !1
	}, this.eC = function() {
		if (iJ && this.mO()) {
			var ai;
			for (eD.imageSmoothingEnabled = !0, ai = 0; ai < 5; ai++) er[ai] && this.mA[ai] && (eD.setTransform(du[ai], 0, 0, du[ai], r[ai], s[ai]), eD.drawImage(iJ[ai], 0, 0));
			eD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function mS() {
	var mT, mU, size, mV, mW, mX;

	function mY(player) {
		return player < bK.gd ? mT * player : mT * bK.gd + mU * (player - bK.gd)
	}
	this.q = function() {
		mT = bK.gd < 16 ? 12 : 8, mU = 4;
		var ae = mY(bK.g6);
		size = new Uint8Array(bK.g6), mV = new Uint16Array(ae), mW = new Uint32Array(ae), mX = new Uint8Array(ae)
	}, this.mZ = function(fK, ma) {
		var mb = this.lH(fK, ma),
			ma = (this.lG(fK, ma, 0), aR.bc.md(fK, mb));
		jB.lC(fK, mb - ma, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.me = function(player, ma) {
		var mg, ma = function(player, ma) {
			var ai, kG = mY(player);
			for (ai = size[player] - 1; 0 <= ai; ai--)
				if (mV[kG + ai] === ma) return ai;
			return size[player]
		}(player, ma);
		ma !== size[player] && (mg = mW[mY(player) + ma], this.mh(player, ma), this.fJ(player, mg, bK.g6))
	}, this.mi = function(player, ma) {
		for (var kG = mY(player), ai = size[player] - 1; 0 <= ai; ai--)
			if (mV[kG + ai] === ma) return !0;
		return !1
	}, this.mj = function(player) {
		return player < bK.gd ? size[player] < mT : size[player] < mU
	}, this.mk = function(player) {
		return size[player]
	}, this.ml = function(player, ai) {
		return mV[mY(player) + ai]
	}, this.mm = function(player, ai) {
		return mW[mY(player) + ai]
	}, this.lH = function(player, ma) {
		for (var kG = mY(player), ai = size[player] - 1; 0 <= ai; ai--)
			if (mV[kG + ai] === ma) return mW[kG + ai];
		return 0
	}, this.mn = function(player) {
		for (var kG = mY(player), er = 0, ai = size[player] - 1; 0 <= ai; ai--) er += mW[kG + ai];
		return er
	}, this.lG = function(player, ma, mg) {
		for (var kG = mY(player), ai = size[player] - 1; 0 <= ai; ai--) mV[kG + ai] === ma && (mW[kG + ai] = mg)
	}, this.kt = function(player, ai, mg) {
		mW[mY(player) + ai] = Math.max(mg, 0)
	}, this.kx = function(player, ai) {
		mX[mY(player) + ai] = 0
	}, this.mo = function(player, ai) {
		return mX[mY(player) + ai]
	}, this.fJ = function(player, mg, ma) {
		kD.mp.mq[player] = kD.mp.mq[ma] = 8, aR.bc.mr(ma) && jB.jC[6 - aR.bc.ms(player)]++;
		for (var kG = mY(player), ai = size[player] - 1; 0 <= ai; ai--)
			if (mV[kG + ai] === ma) return mW[kG + ai] += mg, void(mW[kG + ai] = mW[kG + ai] > bK.mt ? bK.mt : mW[kG + ai]);
		mV[kG + size[player]] = ma, mW[kG + size[player]] = mg, mX[kG + size[player]] = 1, size[player]++, ma === bK.bL ? bI.mu(player, 5) : player < bK.gd && player === bK.bL && dq.mv(ma)
	}, this.mh = function(player, a8) {
		var gF, kG;
		if (0 !== size[player])
			for (kG = mY(player), size[player]--, gF = a8; gF < size[player]; gF++) mV[kG + gF] = mV[kG + gF + 1], mW[kG + gF] = mW[kG + gF + 1], mX[kG + gF] = mX[kG + gF + 1]
	}, this.mw = function(player) {
		for (var gF, kG, mx = [], ai = my.mz - 1; 0 <= ai; ai--)
			for (kG = mY(my.n0[ai]), gF = size[my.n0[ai]] - 1; 0 <= gF; gF--)
				if (mV[kG + gF] === player) {
					mx.push(my.n0[ai]);
					break
				} return mx
	}
}

function n1() {
	this.n2 = function() {
		bz.cG.n3(), bz.cG.n4(), bM.aZ.close(0, 3255), 0 === bA.id ? bA.n5 && bA.n5.clear() : 1 === bA.id ? bA.n6.saveString(199, "") : 2 === bA.id && bA.n7.postMessage("clear")
	}, this.n8 = function() {
		2 === bA.id ? bA.n7.postMessage("showConsentForm") : 1 === bA.id && bA.n6.setState(7)
	}, this.n9 = function() {
		this.setState(14)
	}, this.bC = function() {
		return 1 === bz.c0.nA(2)
	}, this.nB = function() {
		bz.c0.nC(102, "")
	}, this.setState = function(nD) {
		1 === bA.id && 5 <= bA.jl && bA.n6.setState(nD)
	}, this.nE = function() {
		var nF;
		1 === bA.id && 7 <= bA.jl ? bA.n6.setState(5) : ((nF = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = nF.toString())
	}, this.nG = function() {
		1 !== bA.id || bA.jl < 17 || bA.n6.saveString(23, document.documentElement.outerHTML)
	}, this.lQ = function() {
		0 !== bA.id && (1 === bA.id ? bA.n6.prepareAd("1688441405") : 2 === bA.id && (0 === bA.jl ? bA.n7.postMessage("prepare ad 2904813909") : bA.n7.postMessage("loadAds 2904813909")))
	}, this.nH = function(gj) {
		return 0 !== bA.id && 1 !== bA.id && 2 === bA.id && 0 !== bA.jl && (bA.n7.postMessage("showAd"), !0)
	}, this.nI = function() {
		2 === bA.id && bA.jl < 23 && ax.gu(4, 1, new nJ("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + mF.mH + "' target='_blank'>" + mF
			.mH + "</a>", !0, [new aM("⬅️ " + L(10), function() {
				ax.gu(0)
			}, aJ.nK)]))
	}
}

function nL(data) {
	var lq, nM, nN, nO, nP, nQ, nR, colors, nS, nT, nU = 0,
		nV = 0,
		nW = !1,
		nX = !1,
		nY = [1, 5, 60, 240, 1440, 10080, 43200];

	function oJ(ds, dt) {
		! function(ds, dt) {
			return nM < ds && ds < nM + nO && nN < dt && dt < nN + nP
		}(nU = ds, nV = dt) ? (nW && (bu.dw = !0), nW = !1) : (nW = !0, bu.dw = !0)
	}
	this.show = function() {
		nX = bz.c0.data[127].value, lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize();
		var iJ = b3.b5,
			nl = lq.nm(),
			nn = iJ * nl.no,
			iJ = iJ * nl.b1;
		nQ = aR.az.np(.06), nR = aR.az.np(.04), nM = aR.az.np(.06), nN = iJ + nQ, nO = b3.b4 - nM - nR, nP = nn + iJ - nN - nR
	}, this.eC = function() {
		lq.eC(),
			function() {
				var ai, ng, nt, r, gF, nu = data.data,
					nv = 1,
					nw = .125,
					nx = nX ? 65536 : 0;
				for (ai = 0; ai < nu.length; ai++)
					for (ng = nu[ai].ng, nt = ng.length, nv = Math.max(nt, nv), gF = 0; gF < nt; gF++) nw = Math.max(ng[gF], nw), nx = Math.min(ng[gF], nx);
				var j = nN + nP,
					ny = nP / (nw - nx),
					nz = 1 / (nv - 1);
				for (eD.lineWidth = dH.gN, ai = 0; ai < nu.length; ai++) {
					for (ng = nu[ai].ng, nt = ng.length, r = nM, eD.beginPath(), eD.moveTo(r + nO, j - ny * (ng[nt - 1] - nx)), gF = nt - 2; 0 <= gF; gF--) eD.lineTo(r + nz * gF * nO, j - ny * (ng[gF] - nx));
					eD.strokeStyle = colors[ai], eD.stroke()
				}(function(nx, nw, j, ny) {
					eD.font = aR.az.f8(0, .25 * nM), aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 2), eD.fillStyle = colors[0];
					for (var r = .92 * nM, ai = 0; ai < 3; ai++) {
						var er = nx + ai * (nw - nx) / 2;
						eD.fillText((er / 1e3).toFixed(3), r, j - ny * (er - nx))
					}
				})(nx, nw, j, ny),
				function(nv) {
					var s = nN + nP + .15 * nR;
					eD.font = aR.az.f8(0, Math.min(.4 * nR, .028 * b3.b4)), aR.az.textBaseline(eD, 0), aR.az.textAlign(eD, 2), eD.fillStyle = colors[0], eD.fillText(aR.ne.o3(nS), nM + nO, s), aR.az.textAlign(eD, 0), eD.fillText(aR.ne.o3(new Date(
						nT.getTime() - 6e4 * (nv - 1) * nY[data.nd])), nM, s)
				}(nv),
				function(nv, nx, nw) {
					if (nW && !(nv < 2)) {
						for (var oF, a8 = (nU - nM) / nO * (nv - 1), o5 = Math.floor(a8), o6 = Math.floor(1 + a8), o7 = a8 - o5, o8 = 1e5, o9 = -1, oA = -1, oB = nw - (nw - nx) * (nV - nN) / nP, nu = data.data, ai = 0; ai < nu.length; ai++) {
							var oC, ng = nu[ai].ng;
							ng.length <= o6 || (ng = ng[o5] + o7 * (ng[o6] - ng[o5]), (oC = Math.abs(oB - ng)) < o8 && (o8 = oC, o9 = ai, oA = ng))
						} - 1 !== o9 && (nw = nN + nP - (oA - nx) / (nw - nx) * nP, eD.lineWidth = .5 * dH.gN, eD.strokeStyle = colors[o9], eD.beginPath(), eD.moveTo(nM, nw), eD.lineTo(nU, nw), eD.lineTo(nU, nN + nP), eD.stroke(), eD.beginPath(),
							eD.arc(nU, nw, .1 * nM, 0, 2 * Math.PI), eD.fillStyle = colors[o9], eD.fill(), nx = nN + nP + .15 * nR, aR.az.textAlign(eD, 1), oF = nv - 2 < a8 ? (oF = nT.getTime() - 6e4 * nY[data.nd], new Date(oF + (a8 - (nv -
								2)) * (nS.getTime() - oF))) : new Date(nT.getTime() - 6e4 * (nv - a8 - 1) * nY[data.nd]), nv = aR.ne.o3(oF), a8 = aR.az.measureText(nv), oF = je.jf(nU, nM + .5 * a8, nM + nO - .5 * a8), eD.fillStyle = aR.color
							.nk(70, 50, 20), eD.fillRect(oF - .52 * a8, nN + nP, 1.04 * a8, .55 * nR), eD.fillStyle = colors[0], eD.fillText(nv, oF, nx), eD.font = aR.az.f8(0, .25 * nM), aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 2), oF =
							.92 * nM, nv = (oA / 1e3).toFixed(3), a8 = aR.az.measureText(nv), nx = oF - 1.04 * a8, eD.fillStyle = aR.color.nk(70, 50, 20), eD.fillRect(nx, nw - .1625 * nM, nM - nx, .275 * nM), eD.fillStyle = colors[o9], eD
							.fillText(nv, oF, nw))
					}
				}(nv, nx, nw)
			}(), eD.lineWidth = dH.gN, eD.strokeStyle = aJ.eA, eD.beginPath(), eD.moveTo(nM, nN), eD.lineTo(nM, nN + nP), eD.lineTo(nM + nO, nN + nP), eD.stroke();
		var ai, fontSize = .5 * nQ,
			nu = (eD.font = aR.az.f8(0, fontSize), aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 0), data.data),
			ae = nu.length,
			s = nN - .5 * nQ,
			en = "";
		for (ai = 0; ai < ae; ai++) en += nu[ai].name + "  ";
		en = en.trim();
		var oG = aR.az.measureText(en),
			r = .5 * (b3.b4 - oG);
		for (b3.b4 < oG && (r = 0, eD.font = aR.az.f8(0, b3.b4 / oG * fontSize)), ai = 0; ai < ae; ai++) eD.fillStyle = colors[ai], eD.fillText(nu[ai].name, r, s), r += aR.az.measureText(nu[ai].name + "  ")
	}, this.df = function(ds, dt) {
		oJ(ds, dt)
	}, this.dk = function(ds, dt) {
		oJ(ds, dt)
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	};
	var ai, gj, nh, jc, iP = data.data,
		ae = iP.length,
		max = 1;
	for (ai = 0; ai < ae; ai++) max = Math.max(max, iP[ai].ng.length);
	for (ai = 0; ai < ae; ai++)
		for (; iP[ai].ng.length < max;) iP[ai].ng.unshift(0);
	gj = new Date, nh = 6e4 * gj.getTimezoneOffset(), jc = gj.getTime() - nh, nS = new Date(jc), 6 === data.nd ? function(gj, nh) {
		var nj = gj.getUTCFullYear(),
			gj = gj.getUTCMonth() + 1;
		nT = gj < 12 ? new Date(Date.UTC(nj, gj) - nh) : new Date(Date.UTC(nj + 1, 0) - nh)
	}(gj, nh) : (nh = 6e4 * nY[data.nd], nT = data.nd <= 4 ? new Date(jc + nh - gj.getTime() % nh) : new Date(jc + nh - (gj.getTime() + 2592e5) % nh)), jc = aR.color, colors = [aJ.eA, jc.nk(255, 0, 0), jc.nk(0, 200, 0), jc.nk(80, 80, 255), jc.nk(
		255, 255, 0), jc.nk(255, 0, 255), jc.nk(0, 255, 255), jc.nk(255, 140, 0), jc.nk(128, 128, 128), jc.nk(0, 255, 140)], lq = new iU(L(38) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.nd] + ", " + aR.ne.nf(nS), [new aM("⬅️ " + L(
		10), function() {
		ax.gu(1)
	}), new aM(L(39), function() {
		ax.gu(14)
	})], !1)
}

function aP(oL, oM, oN, oO) {
	var self;
	this.aQ = document.createElement("span"), (self = this).aQ.textContent = oL, self.aQ.style.color = aJ.eA, self.aQ.style.position = "absolute", self.aQ.style.font = "inherit", oO ? self.aQ.style.bottom = "0.06em" : self.aQ.style.top = "0.12em",
		oN ? self.aQ.style.left = "0.2em" : self.aQ.style.right = "0.2em", self.aQ.style.fontSize = "0.6em", self.aQ.style.pointerEvents = "none", self.aQ.style.whiteSpace = "pre", oM.style.position = "relative", oM.style.overflow = "hidden", oM
		.appendChild(self.aQ)
}

function oP() {
	var gap, oQ = !1,
		oR = 0,
		b4 = 0,
		mL = 0,
		canvas = null,
		f4 = null,
		oS = null;

	function oV() {
		for (var oq, on = 0, ae = 0, iJ = Math.floor(b4 / 2), oo = Math.floor(mL / 2), op = 1.5 * Math.PI, ai = bK.oT; 0 <= ai; ai--) ae += oS[ai], 0 === oS[ai] && on++;
		if (oQ = !1, f4.clearRect(0, 0, b4, b4), 0 < ae)
			if (on === bK.oT) {
				for (ai = bK.oT; 0 <= ai; ai--)
					if (0 < oS[ai]) {
						! function(ai, iJ, oo) {
							f4.fillStyle = gT.oy[gT.oZ[ai]], f4.beginPath(), f4.arc(iJ, iJ, oo, 0, 2 * Math.PI), f4.fill()
						}(ai, iJ, oo);
						break
					}!
				function(iJ) {
					var fontSize = iJ / 3;
					f4.font = aR.az.f8(1, fontSize), f4.fillStyle = aJ.eA, f4.fillText("100%", iJ, iJ + .1 * fontSize)
				}(iJ)
			} else {
				for (ai = 0; ai <= bK.oT; ai++) 0 < oS[ai] && (! function(ai, iJ, oo, op, oq) {
					f4.fillStyle = gT.oy[gT.oZ[ai]], f4.beginPath(), f4.arc(iJ, iJ, oo, op, oq), f4.lineTo(iJ, iJ), f4.fill()
				}(ai, iJ, oo, op, oq = op + 2 * Math.PI * oS[ai] / ae), function(iJ, oo, op, oq) {
					var er = (oq - op) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * oo * Math.min(er, .37);
					fontSize < 8 || (op = (op + oq) / 2, oq = (__fx.settings.detailedTeamPercentage ? (100 * er).toFixed(2) : Math.floor(100 * er + .5)) + "%", oo *= .525 - Math.max(.6 * (er - .7), 0), f4.font = aR.az.f8(1, fontSize), f4
						.fillStyle = aJ.eA, f4.fillText(oq, iJ + Math.cos(op) * oo, iJ + Math.cos(op + 1.5 * Math.PI) * oo))
				}(iJ, oo, op, oq), 0 !== ai && ow(iJ, oo, op), op = oq);
				ow(iJ, oo, 1.5 * Math.PI)
			}!
		function(iJ, oo) {
			f4.beginPath(), f4.arc(iJ, iJ, oo, 0, 2 * Math.PI), f4.stroke()
		}(iJ, oo)
	}

	function ow(iJ, oo, hT) {
		f4.beginPath(), f4.moveTo(iJ, iJ), f4.lineTo(iJ + Math.cos(hT) * oo, iJ + Math.cos(hT + 1.5 * Math.PI) * oo), f4.stroke()
	}
	this.q = function() {
		if (bK.fR) {
			oR = 0, oS = new Uint32Array(bK.oT + 1);
			for (var ai = bK.oT; 0 <= ai; ai--) oS[ai] = 0;
			for (ai = my.mz - 1; 0 <= ai; ai--) oS[gT.og[my.n0[ai]]] += 1;
			this.resize()
		} else oS = f4 = canvas = null
	}, this.fU = function() {
		return b4
	}, this.resize = function() {
		bK.fR && (b4 = Math.floor(.95 * (bA.bB.bC() && !bK.dg ? .18 * b3.min : .13 * b3.dG)), b4 = (b4 *= 1 + (.5 + .2 * bA.bB.bC()) * bK.dg) + b4 % 2, gap = Math.max(1, .015 * b4), mL = Math.floor(b4 - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = b4, canvas.height = b4, (f4 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, f4.strokeStyle = aJ.eA, aR.az.textAlign(f4, 1), aR.az.textBaseline(f4, 1), oV())
	}, this.oW = function() {
		var gj, oX = this.oY();
		return gT.oZ[oX] || (oX = function() {
			for (var oX = -1, ai = bK.oT; 1 <= ai; ai--)(-1 === oX || oS[ai] > oS[oX]) && (oX = ai);
			return oX
		}(), gj = fL.ge[fZ[0]], -1 !== oX && oS[oX] > gj) ? oS[oX] : gj
	}, this.ob = function() {
		return oR = 31, this.fA(), this.oY()
	}, this.oY = function() {
		for (var oX = 0, ai = bK.oT; 0 < ai; ai--) oS[ai] > oS[oX] && (oX = ai);
		return oX
	}, this.oc = function() {
		return oS[2] > 2 * oS[1] || oS[1] > 4 * oS[2]
	}, this.od = function(oe) {
		for (var nt = 0, n0 = my.n0, og = gT.og, ae = my.mz, oh = oi.oh, ai = 0; ai < ae; ai++) {
			var o4 = n0[ai];
			og[o4] === oe && (oh[nt++] = o4)
		}
		oi.oj[0] = nt
	}, this.ok = function(oe) {
		for (var nt = 0, n0 = my.n0, og = gT.og, ae = my.mz, oh = oi.oh, ai = 0; ai < ae; ai++) {
			var o4 = n0[ai];
			og[o4] !== oe && (oh[nt++] = o4)
		}
		oi.oj[0] = nt
	}, this.ol = function() {
		for (var nt = 0, ai = bK.oT; 0 <= ai; ai--) nt += 0 < oS[ai];
		return nt
	}, this.fA = function() {
		if (bK.fR && 32 <= ++oR) {
			oR = 0;
			for (var ai = bK.oT; 0 <= ai; ai--) oS[ai] = 0;
			for (ai = my.mz - 1; 0 <= ai; ai--) oS[gT.og[my.n0[ai]]] += fL.ge[my.n0[ai]];
			oQ = !0
		}
	}, this.aW = function() {
		bK.fR && oQ && oV()
	}, this.eC = function() {
		bK.fR && (bK.dg ? eD.drawImage(canvas, dH.gap, dH.gap) : eD.drawImage(canvas, dH.gap, fS + 2 * dH.gap))
	}
}

function p0() {
	var p1, p2, p3, p4, p5, p6, p7, p8, p9, pA, pB, f5, pC, pD = !1,
		pE = !1;

	function pF(fP) {
		f5 = bu.bv, p3 = p4 = p2 = 0, p5 = (pC = 33) / fP, p1 = 1 / (fP / pC / 4), p6 = (b3.b4 / 2 + dK) / dJ, p7 = (b3.b9 / 2 + dL) / dJ, p8 = dJ
	}

	function pK(ai) {
		var g; - 1 !== ai && (ai = hQ.pM(h4.aZ.hH[ai]), g = hQ.j7(ai) - 15, ai = hQ.j8(ai) - 15, di.jH(g, ai, 29 + g, 29 + ai))
	}

	function pV(pX) {
		Math.abs(Math.log(pB / p8)) < .125 && (pB = pX * p8)
	}

	function pU(g, j, k, l) {
		p9 = (g + k + 1) / 2, pA = (j + l + 1) / 2;
		k = b3.b4 / (k - g + 1), g = b3.b9 / (l - j + 1);
		pB = .9 * (k < g ? k : g)
	}
	this.pG = function() {
		return pD
	}, this.pH = function() {
		pF(1), this.jH(0, 0, t.u - 1, t.v - 1), bK.j9 || bK.bY || this.h0(bK.bL, 3e3, !0, .3)
	}, this.pI = function(player, pJ) {
		pK(h4.ak.pL(player, pJ))
	}, this.h0 = function(player, fP, pN, zoom) {
		bK.dg || pD && !pN && pE || (0 === fL.ge[player] ? pK(h4.ak.pO(player)) : (e7.dR = !1, pE = pN, pF(fP), function(player) {
			p9 = (fL.jI[player] + fL.jK[player] + 1) / 2, pA = (fL.jJ[player] + fL.jL[player] + 1) / 2
		}(player), function(zoom, player) {
			var dn = fL.jK[player] - fL.jI[player] + 1,
				player = fL.jL[player] - fL.jJ[player] + 1,
				gF = b3.b4 / dn,
				pW = b3.b9 / player,
				gF = (pB = gF < pW ? gF : pW, 0 !== zoom ? zoom : dn < 20 && player < 20 ? .5 : .9);
			pB *= gF, pV(7 / 8)
		}(zoom, player), pD = !0, pR.pS()))
	}, this.pT = function(fP) {
		bK.bY || bK.dg || (e7.dR = !1, pE = !1, pF(fP), pU(0, 0, t.u - 1, t.v - 1), pV(7 / 8), pD = !0, pR.pS())
	}, this.jH = function(g, j, k, l) {
		pD = !1, pU(g, j, k, l), dJ = pB, e7.dZ(p9, b3.b4 / 2), e7.dc(pA, b3.b9 / 2), h.e4(), bu.dw = !0
	}, this.dj = function() {
		return !(pD && pE || (pD = !1))
	}, this.fA = function() {
		var pa, pb, iP, pe;
		pD && (p2 < .5 ? p4 < p5 && (p4 += p5 * p1, p3 = p2) : 1 - p3 < p2 && (p4 = (p4 -= p5 * p1) < p5 * p1 ? p5 * p1 : p4), f5 = f5 >= bu.bv ? bu.bv - 1 : f5, p2 = 1e3 < (iP = bu.bv - f5) || 1 < (p2 += p4 * iP / pC) ? 1 : p2, f5 = bu.bv, iP =
			dJ, pa = dK, pb = dL, iP = (dJ = p8 * Math.pow(pB / p8, p2)) / iP, pe = 1 - (p8 * Math.pow(pB / p8, 1 - p2) - p8) / (pB - p8), e7.dZ(p6 + pe * (p9 - p6), b3.b4 / 2), e7.dc(p7 + pe * (pA - p7), b3.b9 / 2), dq.zoom(iP, (pa * iP -
				dK) / (1 - iP), (pb * iP - dL) / (1 - iP)), h.e4(), 1 <= p2 && (pD = !1, jU.c = !0), bu.dw = !0)
	}
}

function pf() {
	this.pg = [], this.ph = [], this.q = function() {
		this.pg = [], this.ph = []
	}, this.fA = function() {
		0 <= this.pg.length && this.pi(this.pg), 0 <= this.ph.length && this.pi(this.ph)
	}, this.pi = function(nu) {
		for (var pW = -1, ai = nu.length - 1; 0 <= ai; ai--)
			if (nu[ai].bv--, nu[ai].bv <= 0) {
				pW = ai;
				break
			} for (ai = pW; 0 <= ai; ai--) nu.shift()
	}, this.pj = function(id, pk, pl) {
		return this.pm(this.pg, id, pk, pl)
	}, this.pn = function(id, pk, pl) {
		return this.pm(this.ph, id, pk, pl)
	}, this.pm = function(nu, id, pk, pl) {
		return ! function(nu, id, pk) {
			var ai, jc;
			for (ai = pk.length - 1; 0 <= ai; ai--)
				for (jc = nu.length - 1; 0 <= jc; jc--)
					if (nu[jc].player === pk[ai] && id === nu[jc].id) return 1;
			return
		}(nu, id, pk) && (pl && function(nu, id, pk) {
			var ai;
			for (ai = pk.length - 1; 0 <= ai; ai--) nu.push({
				player: pk[ai],
				id: id,
				bv: 384
			})
		}(nu, id, pk), !0)
	}
}

function is() {
	var aH;
	this.aH = document.createElement("hr"), this.resize = function() {
		aR.az.bD(this.aH, 8, aJ.pq)
	}, (aH = this.aH).style.marginBottom = aH.style.marginTop = "0.65em", aH.style.marginLeft = aH.style.marginRight = "-4%", aH.style.border = "none"
}

function pr() {
	var ps = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.nf = function(bv) {
		var pt, en = new Date(bv.getTime() - 6e4 * bv.getTimezoneOffset()).toUTCString();
		return en.length < 12 || (en = en.substring(5, en.length), 0 === (bv = bv.getTimezoneOffset())) ? en : (pt = (bv < 0 ? "+" : "-") + je.kI(Math.abs(bv), 60), 0 == (bv = Math.abs(bv) % 60) ? en + pt : en + pt + ":" + (bv < 10 ? "0" : "") +
			bv)
	}, this.o3 = function(bv) {
		var en = bv.toUTCString();
		return en.length < 12 ? en : function(bv) {
			return ps[bv.getUTCDay()]
		}(bv) + ", " + en.substring(5, en.length - 4)
	}
}

function pv() {
	this.pw = 0, this.px = 0, this.py = 0, this.pz = 0, this.q0 = 0, this.q1 = 0, this.i = [0, 0, 0, 0], this.e4 = function() {
		this.pw = e7.dX(), this.px = e7.dY(), this.py = -this.pw, this.pz = -this.px, this.q0 = b3.b4 / dJ, this.q1 = b3.b9 / dJ, this.i[0] = Math.floor(this.py), this.i[1] = Math.floor(this.pz), this.i[2] = Math.floor(this.i[0] + this.q0 + 1),
			this.i[3] = Math.floor(this.i[1] + this.q1 + 1), jU.b = !0
	}
}

function c6() {
	var q2, q3 = [],
		q4 = -1,
		q5 = 0,
		q6 = 0;

	function qF() {
		q5 = bu.bv, (3 === this.hy ? qE : (q4 = (q3.length + q4 + 2 * this.hy - 1) % q3.length, qD))()
	}

	function qD() {
		0 !== q3.length && (q6 = 0, q2 && q2.cC(), (q2 = new hu(qF)).cH(q4, q3.length), q2.show(q3[q4]), aY.message.resize())
	}

	function qE() {
		q6 = 1, q2 && q2.cC(), (q2 = new qG(qD)).cH(q3.length), q2.show(), aY.message.resize()
	}
	this.q7 = function(q8) {
		var aq;
		2 === q8.id && 3 === q8.q9 ? aY.ak.qA(q8.d8) : (aq = aY.ak.al(q8, aY.ak.am(q8)), (5 !== q8.id && 6 !== q8.id || (ax.ls(29).qB().ao(aq), 5 === q8.id)) && (aq = bu.bv < q5 + 2e4, q4 !== q3.length - 1 && aq || (q4 = q3.length), q3.push(q8),
			bz.c0.data[14].value || 7 === q8.id || cA.play(), q2) && (q6 && (bz.c0.data[13].value || aq) ? q2.cH(q3.length) : qD()))
	}, this.show = function() {
		qE()
	}, this.aw = function() {
		q4 = q3.length - 1, q2 && q2.cC(), q2 = null
	}, this.resize = function() {
		q2 && q2.resize()
	}, this.qH = function() {
		return q3
	}
}

function qI() {
	var lq, qJ, nO, qK, qL, qM, colors = [0, 0, 0],
		qN = -1;

	function qR(ai) {
		var qT = qJ.s + ai * (dH.gap + qM);
		eD.fillStyle = "rgb(" + (0 === ai ? 150 : 2 === ai ? 30 : 0) + "," + (1 === ai ? 130 : 2 === ai ? 30 : 0) + "," + (2 === ai ? 220 : 0) + ")", eD.fillRect(qK, qT, colors[ai] * qL, qM), eD.strokeStyle = aJ.eA, eD.strokeRect(qK, qT, qL, qM), eD
			.fillStyle = aJ.eA, eD.font = aR.az.f8(0, .32 * qM), aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 0), eD.fillText(L(0 === ai ? 42 : 1 === ai ? 43 : 44) + qP(ai), qK + dH.gap, qT + .53 * qM)
	}

	function qP(ai, qU) {
		return qU = qU || 256, je.jf(Math.floor(qU * colors[ai]), 0, qU - 1)
	}

	function oK(ds, dt) {
		return !(ds < qK || dt < qJ.s || ds > qJ.r + qJ.b4 || dt > qJ.s + qJ.b9)
	}
	this.show = function() {
		var er = bz.c0.data[121].value;
		colors[0] = (er >> 12) / 63, colors[1] = (er >> 6 & 63) / 63, colors[2] = (63 & er) / 63, lq.show(), this.resize()
	}, this.aw = function() {
		bz.cG.cH(121, (qP(0, 64) << 12) + (qP(1, 64) << 6) + qP(2, 64)), lq.aw()
	}, this.resize = function() {
		lq.resize(), qJ.resize();
		var iJ = b3.b5,
			nl = lq.nm(),
			qQ = (qJ.s = Math.max(qJ.s, iJ * nl.b1 + dH.gap), iJ * nl.no - 2 * dH.gap);
		qJ.b9 = Math.min(qJ.b9, qQ), qJ.b4 = 2 * qJ.b9, qJ.s = iJ * nl.b1 + .5 * (iJ * nl.no - qJ.b9), qJ.r = .5 * (b3.b4 - qJ.b4), nO = .25 * qJ.b4, qK = qJ.r + nO + dH.gap, qL = qJ.b4 - nO - dH.gap, qM = (qJ.b9 - 2 * dH.gap) / 3
	}, this.eC = function() {
		var oo, qS, pW;
		lq.eC(), eD.lineWidth = dH.gN, oo = qP(0), qS = qP(1), pW = qP(2), eD.fillStyle = "rgb(" + oo + "," + qS + "," + pW + ")", eD.fillRect(qJ.r, qJ.s, nO, qJ.b9), eD.strokeStyle = aJ.eA, eD.strokeRect(qJ.r, qJ.s, nO, qJ.b9), eD.fillStyle =
			oo + qS + pW < 306 && qS < 150 ? aJ.eA : aJ.fY, aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 1), eD.font = aR.az.f8(0, .1 * qJ.b9), eD.rotate(-Math.PI / 2), eD.fillText(L(41), -qJ.s - .5 * qJ.b9, qJ.r + .5 * nO), eD.setTransform(1,
				0, 0, 1, 0, 0), qR(0), qR(1), qR(2)
	}, this.df = function(ds, dt) {
		oK(ds, dt) && (qN = je.jf(Math.floor((dt - qJ.s) / (qM + .75 * dH.gap)), 0, 2), colors[qN] = je.jf((ds - qK) / qL, 0, 1), bu.dw = !0)
	}, this.dk = function(ds) {
		-1 !== qN && (colors[qN] = je.jf((ds - qK) / qL, 0, 1), bu.dw = !0)
	}, this.dh = function(ds, dt, deltaY) {
		oK(ds, dt) && (ds = je.jf(Math.floor((dt - qJ.s) / (qM + .75 * dH.gap)), 0, 2), colors[ds] = je.jf(colors[ds] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bu.dw = !0)
	}, this.qV = function() {
		0 <= qN && (qN = -1, bu.dw = !0)
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(L(40), [new aM("⬅️ " + L(10), function() {
		ax.aZ.qO()
	})], !1), qJ = new dB([.5, .25], [.5, .5], 1)
}

function qW() {
	this.lj = 1116, this.qX = 2147, this.rVersion = 16, this.qY = 0, this.q = function() {
		this.qZ = 2;
		var gj = je.kI(this.qX, 10) % 100;
		this.jl = "7 Dec 2025 [" + je.kI(this.qX, 1e3) + "." + (gj < 10 ? "0" : "") + gj + "." + this.qX % 10 + "]", this.lk = true, this.ll = function() {
			try {
				return window.self !== window.top
			} catch (aH) {
				return !0
			}
		}(), this.he = (new Date).getTime() % 1048576
	}, this.qc = 0
}

function lz(id, ho, qd) {
	var lq, qe;

	function qj() {
		qe.r0.innerHTML += "<br>" + L(47)
	}

	function qz() {
		var pW = 1;
		ax.gu(4, 1, new nJ(L(48), L(49), !1, [new aM("🔄 Reload", function() {
			pW && (setTimeout(function() {
				ax.gu(1)
			}, 5e3), bA.bB.nE()), pW = 0
		}, aJ.r5)]))
	}

	function qi() {
		cN.ha(90), cN.et(30, Math.floor(je.pow(30) * Math.random())), cN.et(30, Math.floor(je.pow(30) * Math.random())), cN.et(30, Math.floor(je.pow(30) * Math.random())), cM.q(cN.hl), bz.cG.cH(110, cI.bx.cJ(cI.bx.cK(15))), bM.qu.r6()
	}
	this.qf = !0, this.d4 = id, this.show = function() {
		lq.show(), this.resize(), 15 === id ? (bM.aZ.qh(id) ? qi : qj)() : 16 === id ? bM.aZ.qh(id) ? bM.hf.lZ(2) : qj() : 17 === id ? bM.aZ.qh(id) ? bM.hf.lZ(3) : qj() : 18 === id ? (bM.aZ.close(0, 3253), bM.aZ.qk(0, id), qj()) : 21 === id ? bM
			.aZ.qh(id) ? bM.ql.qm(ho.qn, ho.h5, ho.h6) : qj() : 22 === id ? bM.aZ.qh(id) ? bM.ql.qo(ho.qn, ho.qp, ho.qq) : qj() : 23 === id ? bM.aZ.qh(id) ? bM.ql.qr(ho.nd, ho.qs) : qj() : 24 === id ? bM.aZ.qh(id) ? bM.ql.qt(ho.nd, ho.h5, ho
			.h6) : qj() : 25 === id ? bM.aZ.qh(id) ? bM.qu.qv(ho) : qj() : 28 === id ? bM.aZ.qh(id) ? bM.ql.qw(ho.qn, ho.qp, ho.qq) : qj() : 29 === id ? bM.aZ.qh(id) ? bM.qu.qx(ho) : qj() : 30 === id && (bM.aZ.qh(id) ? ln.qy() || qz() : qj())
	}, this.r1 = function() {
		15 === id ? qi() : 16 === id ? bM.hf.lZ(2) : 17 === id ? bM.hf.lZ(3) : 18 === id ? ax.gu(8, this.lt, new lz(16)) : 21 === id ? bM.ql.qm(ho.qn, ho.h5, ho.h6) : 22 === id ? bM.ql.qo(ho.qn, ho.qp, ho.qq) : 23 === id ? bM.ql.qr(ho.nd, ho
			.qs) : 24 === id ? bM.ql.qt(ho.nd, ho.h5, ho.h6) : 25 === id ? bM.qu.qv(ho) : 28 === id ? bM.ql.qw(ho.qn, ho.qp, ho.qq) : 29 === id ? bM.qu.qx(ho) : 30 === id ? ln.qy() || qz() : 1e3 === id && (this.d4 = id = 25, bM.qu.qv(ho))
	}, this.d7 = function(code, au, data) {
		!au && code !== id || (15 === code || 16 === code ? ax.gu(7, this.lt) : 17 === code ? (bM.aZ.close(0, 3252), bz.aZ.r2(0), bz.c0.data[117].iq && 0 < bz.c0.data[117].iq.length ? (au = bz.aZ.r3(0), bz.cG.cH(105, au.d8), bz.cG.cH(106, au
			.password), ax.gu(8, this.lt, new lz(16))) : (bz.cG.cH(105, ""), ax.aZ.qO())) : 21 === code ? ax.gu(10, this.lt, new gv(data)) : 23 === code ? ax.gu(13, this.lt, new nL({
			data: data,
			nd: ho.nd
		})) : 25 === code ? (ax.aZ.d6.d8 = ho.d8, bz.r4.aW(ho.d8), ax.gu(15, this.lt)) : 30 === code && (data ? ax.gu(1) : qz()))
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), qe.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(L(45), [new aM("⬅️ " + L(10), function() {
		qd ? ax.gu(29) : ax.aZ.qO()
	})]), qe = new qg(lq.iX, L(46))
}

function r7() {
	this.k0 = function() {
		for (var ae = my.mz, pk = my.n0, jr = [], ai = 0; ai < ae; ai++) {
			var o4 = pk[ai];
			aR.bc.r8(o4) && jr.push(o4)
		}
		return jr
	}, this.k1 = function() {
		if (0 === gT.oZ[bK.r9]) return this.k2();
		fT.od(bK.r9);
		for (var jr = [], ae = oi.oj[0], oh = oi.oh, ai = 0; ai < ae; ai++) {
			var o4 = oh[ai];
			aR.bc.r8(o4) && jr.push(o4)
		}
		return jr
	}, this.k2 = function() {
		var o4 = fZ[0];
		return aR.bc.r8(o4) ? [o4] : []
	}, this.k5 = function(jr) {
		for (var ae = jr.length, gj = 0, ge = fL.ge, ai = 0; ai < ae; ai++) gj += ge[jr[ai]];
		return gj
	}
}

function rA() {
	var rB, rC, rF, rI, rJ, rD = [new Array(4), [], new Array(2), new Array(2)],
		rE = new Array(4),
		rG = new Array(2),
		rH = [L(50), L(51), L(52), L(53)];

	function rQ() {
		var rU;
		!aY.bs || (rU = rB.rV.a6.aH.value.trim().slice(0, 127)).length < 1 || (rB.rV.a6.aH.value = "", aY.bo.ju(rU))
	}

	function rO(rY) {
		aY.aZ.aa[3] = 1 - aY.aZ.aa[3], rS(3, 1, aY.aZ.aa[3]), rY && bM.rZ.hm(4), aY.aZ.aa[3] && bz.cG.cH(158, aY.aZ.aa[0])
	}

	function rL(gF, pW) {
		aY.aZ.aa[gF] !== pW && (0 === gF && aY.aZ.aa[3] && rO(0), rS(gF, aY.aZ.aa[gF], 0), rS(gF, pW, 1), aY.aZ.aa[gF] = pW, 0 === gF ? (bM.rZ.hm(2, pW), aY.aZ.aa[2] ? (rB.rc.aW(), rB.rV.aU(1)) : rB.rV.aU(0), ax.d3().rd(), ax.d3().re()) : 2 === gF &&
			(0 === pW ? (bM.rZ.hm(0), rB.rV.aW(), rB.rf()) : (bM.rZ.hm(1), rB.rc.aW(), rB.rg())))
	}

	function rS(gF, pW, color) {
		rB.rh[gF].jW[pW].aN(color ? aJ.gK : aJ.aO)
	}

	function rk(rl) {
		return rl < 7 ? rl + 2 + " " + L(63) : 7 === rl || 10 === rl ? L(51) + " (Full-Sending: " + L(7 === rl ? 64 : 65) + ")" : 8 === rl ? "1v1" : L(66)
	}

	function ro(er) {
		var s4 = je.kI(er, 60),
			er = er % 60;
		return (s4 < 10 ? "0" : "") + s4 + ":" + (er < 10 ? "0" : "") + er
	}
	this.qB = function() {
		return rB.rV
	}, this.bo = function(d8) {
		rL(2, 0);
		var en = rB.rV.a6.aH.value,
			d8 = "@" + d8 + " ";
		en.length && !aR.aS.rb(en, " ") && (d8 = " " + d8), rB.rV.a6.aH.value = en += d8, rB.rV.a6.aH.focus()
	}, this.ri = function() {
		rB.rc.aW()
	}, this.rd = function() {
		var rj = aY.aZ.aa[0],
			rj = aY.aZ.ac[rj];
		t.ha(rj.fH, rj.mapSeed), rC.jW[0].button.textContent = L(58) + ": " + t.fF.fG[rj.fH].name, rC.jW[1].button.textContent = L(59, 0, "Mode") + ": " + rk(rj.rl), rC.jW[2].button.textContent = L(60) + ": " + t.fF.fG[rj.rm].name, rC.jW[3]
			.button.textContent = L(61, 0, "Next Mode") + ": " + rk(rj.rn), rC.jW[4].button.textContent = L(62) + ": " + ro(rj.rp), rC.resize()
	}, this.re = function() {
		var rj = aY.aZ.aa[0],
			ab = aY.aZ.ac[rj];
		rB.rq(ab.rr);
		for (var ai = 0; ai < aY.bl.rs.length; ai++) rD[0][ai].aQ.textContent = "" + aY.bl.rs[ai].length;
		var bl = aY.bl.rs[rj],
			rt = bl.length,
			ru = aY.bl.rv[rj];
		rD[2][1].aQ.textContent = "" + rt, rD[3][1].aQ.textContent = "" + ru, rC.jW[4].button.textContent = L(62) + ": " + ro(ab.rp);
		for (ai = 0; ai < 4; ai++) {
			var rw = aY.aZ.ac[ai];
			rE[ai] ? 0 === rw.rr && (rE[ai].aQ.textContent = t.fF.fG[rw.fH].name) : rE[ai] = new aP(t.fF.fG[rw.fH].name, rI.jW[ai].button, 1, 1), aR.aS.startsWith(rH[ai], "🏆 ") ? rw.rx || (rH[ai] = rH[ai].substring(3), rI.jW[ai].button
				.textContent = rH[ai], rI.jW[ai].button.appendChild(rD[0][ai].aQ), rI.jW[ai].button.appendChild(rE[ai].aQ)) : rw.rx && (rH[ai] = "🏆 " + rH[ai], rI.jW[ai].button.textContent = rH[ai], rI.jW[ai].button.appendChild(rD[0][ai]
				.aQ), rI.jW[ai].button.appendChild(rE[ai].aQ))
		}
		var ab = "",
			rz = "";
		0 === rj && (ab = aY.ak.s0(bl, 0, rt), rz = aY.ak.s0(bl, 0, ru)), rF[0].aQ.textContent = ab, rF[1].aQ.textContent = rz, rG[1].aQ.textContent = "MP: " + aY.aZ.s1[0] + "   SP: " + aY.aZ.s1[1] + "   Lobby: " + aR.ie.s2(aY.bl.rs)
	}, this.s3 = function() {
		rB.rV.aW()
	}, this.show = function() {
		rB.show(), this.resize(), aY.message.show()
	}, this.aw = function() {
		rB.aw(), aY.bm.aw(), aY.bn.aw(), aY.message.aw()
	}, this.resize = function() {
		rB.resize(1 - aY.aZ.aa[2]), aY.message.resize()
	}, this.ix = function(iJ) {
		2 === iJ ? aY.aZ.aa[3] ? rO(1) : rB.rh[3].jW[0].iB() : iJ < 2 && rO(1)
	}, rI = new rK([new aM(rH[0], function() {
		return rL(0, 0), 2
	}), new aM(rH[1], function() {
		return rL(0, 1), 2
	}), new aM(rH[2], function() {
		return rL(0, 2), 2
	}), new aM(rH[3], function() {
		return rL(0, 3), 2
	})], aJ.aO), rC = new rK([new aM("", 0, 2), new aM("", 0, 2), new aM("", 0, 2), new aM("", 0, 2), new aM("", 0, 2)], aJ.rM, 1);
	var rN = new rK([new aM(L(54), function() {
		return rL(2, 0), 2
	}), new aM(L(55), function() {
		return rL(2, 1), 2
	})], aJ.aO);
	rJ = new rK([new aM(L(56, 0, 0, 1), function() {
		ax.rW(), aY.cC(), bM.aZ.rX(3240), ax.gu(5, 5)
	}), new aM(L(57), function() {
		return rO(1), 2
	})], aJ.aO), rB = new rP(rI, rC, rN, rJ, rQ, aY.bm.rR);
	for (var ai = 0; ai < 4; ai++) rD[0][ai] = new aP("0", rI.jW[ai].button);
	rD[2][1] = new aP("0", rN.jW[1].button), rD[3][1] = new aP("0", rJ.jW[1].button), rF = [new aP("", rN.jW[1].button, 1, 1), new aP("", rJ.jW[1].button, 1, 1)], rS(0, aY.aZ.aa[0], 1), rS(2, aY.aZ.aa[2], 1), (rG = [new aP(L(23), rB.rT(), 1, 0),
		new aP("", rB.rT(), 1, 1)
	])[0].aQ.style.fontSize = "0.4em", rG[1].aQ.style.fontSize = "0.4em"
}

function s6() {
	this.s7 = null, this.s8 = null, this.s9 = null, this.sA = null, this.sB = null, this.sC = null, this.sD = "";
	var sE = 0;
	this.q = function() {
		this.s7 = [], this.s8 = [], this.s9 = [], this.sA = [], this.sB = [0], this.sC = [0], sE = 0, this.sD = ""
	}, this.sF = function(id, sG, sH, mA) {
		bK.bY || 2 === bK.fC || (0 === this.sB[sE] && (this.sC[sE] ? (this.sB.push(1), this.sC.push(0), sE++) : this.sB[sE] = 1), this.s7.push(id), this.s8.push(sG), this.s9.push(void 0 === sH ? 0 : sH), this.sA.push(void 0 === mA ? 0 : mA), this
			.sC[sE]++)
	}, this.fA = function() {
		0 === this.sB[sE] ? this.sC[sE]++ : (this.sB.push(0), this.sC.push(0), sE++)
	}
}

function sI() {
	this.sJ = [L(67), L(68), L(69), L(70), L(71), L(72), L(73), L(74), L(75), L(76), L(77), L(78), L(79), L(80), L(81), L(82)];
	var sK = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.sL = new Array(sK.length), this.q = function() {
		var nu = bz.c0.data[155].value.split(";"),
			kG = nu.length;
		if (function() {
				for (var ae = sK.length, ai = 0; ai < ae; ai++) sN.sL[ai] = sK[ai]
			}(), !(kG > sK.length))
			for (var ai = 0; ai < kG; ai++) nu[ai].length && (this.sL[ai] = nu[ai])
	}, this.sO = function(a8, code) {
		for (var sL = this.sL, sP = sK, en = (sL[a8] = code, ""), ae = sL.length, sQ = [], ai = 0; ai < ae; ai++) sQ.push(sL[ai] === sP[ai] ? "" : sL[ai]);
		ae--;
		for (ai = 0; ai < ae; ai++) en += sQ[ai] + ";";
		bz.cG.cH(155, en += sQ[ae])
	}, this.sR = function() {
		bz.cG.cH(155, ""), this.q()
	}, this.iJ = function(code, a8) {
		return code === this.sL[a8] || code === this.sL[a8 + 1]
	}
}

function sS() {
	var nu, sT, sU, sV, gap, sW, sX, sY, sZ, sa, ez, bt, sb, sc, sd, se, sf;

	function sj() {
		sV = Math.floor(.2 * (bA.bB.bC() ? .07 : .035) * b3.dG), sV = sm(bA.bB.bC() ? 3 : 1, sV);
		var sn = b3.b4 / (nu.length + gap);
		sV = sV < sn ? sn : sV, sd = Math.floor((1 - gap) * sV), sT = 0, so()
	}

	function so() {
		sT = (sT = sT < -20 ? -20 : sT) > (nu.length - 15) * sV ? (nu.length - 15) * sV : sT, sX = Math.floor(sT / sV), sY = (sY = sX + Math.floor(b3.b4 / sV)) > nu.length - 1 ? nu.length - 1 : sY, sX = (sX = sY < sX ? sY : sX) < 0 ? 0 : sX;
		var kG = sY;
		sW = sU / nu[kG];
		for (var ai = sY - 1; sX <= ai; ai--) nu[ai] > nu[kG] && (kG = ai, sW = sU / Math.pow(nu[ai], sc))
	}

	function sr(r) {
		r = Math.floor((sT + b3.b4 - r - gap * sV) / sV);
		return (r = r < -1 ? -1 : -1 === r ? 0 : r > nu.length - 1 ? -1 : r) !== sZ && (sZ = r, -1 === se && 0 === sZ && ss.sg && (se = setInterval(st, 100)), 1)
	}

	function sv(ai) {
		var sz = Math.floor(sW * Math.pow(nu[ai], sc));
		eD.fillRect(sT + b3.b4 - (ai + 1) * sV, b3.b9 - sz, sd, sz)
	}

	function st() {
		var o4;
		0 !== (sZ = 8 === cB.mP() ? -1 : sZ) ? (sf = (new Date).getTime(), clearInterval(se), se = -1) : (o4 = nu[1] / 864e3, -1 !== sf && (o4 += ((new Date).getTime() - sf) * nu[1] / 864e5, sf = -1), 0 < o4 && (nu[0] += Math.floor(o4), bu.dw = !0))
	}
	this.sg = !1, this.q = function() {
		sf = se = -1, sZ = -(sc = 1), this.sh = !1, sb = 0, bt = new Date, sT = 0, gap = .3, nu = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		sU = Math.floor(.15 * b3.b9), sa = (sa = Math.floor((bA.bB.bC() ? .018 : .0137) * b3.dG)) < 2 ? 2 : sa, ez = aR.az.f8(1, sa), sj()
	}, this.sk = function(sl) {
		var ai;
		for (this.sg = !0, ai = 0; ai < sl.length; ai++) nu.unshift(sl[ai]);
		sj(), bu.dw = !0
	}, this.sp = function() {
		so()
	}, this.dk = function(r, s) {
		s > b3.b9 - .6 * sU ? this.sh ? r !== sb && (sT += r - sb, sb = r, so(), sr(r), this.sh = -1 !== sZ, bu.dw = !0) : sr(r) && (bu.dw = !0) : this.aU()
	}, this.aU = function() {
		-1 !== sZ && (this.sh = !1, sZ = -1, bu.dw = !0)
	}, this.dh = function(r, deltaY) {
		-1 !== sZ && (sT += Math.floor(deltaY), so(), sr(r), bu.dw = !0)
	}, this.df = function(r, s) {
		this.dk(r, s), -1 !== sZ && (sb = r, this.sh = !0)
	}, this.gz = function() {
		-1 !== sZ && (this.sh = !1)
	}, this.eC = function() {
		eD.fillStyle = aJ.su;
		for (var t0, month, gj, mM, t4, t5, j, t6, t7, ai = sY; sX <= ai; ai--) sv(ai);
		this.sg && 0 === sX && (eD.fillStyle = aJ.sw, sv(0)), -1 !== sZ && (eD.fillStyle = aJ.sx, sv(sZ)), -1 !== sZ && (eD.font = ez, aR.az.textBaseline(eD, 2), (gj = new Date).setTime(bt.getTime() - 1e3 * sZ * 60 * 60 * 24), month = "month",
			t0 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(gj), t0 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(gj)), t0 = t0 + ", " + gj.getUTCDate() + " " + month + " " + gj.getFullYear(), month = 1 === nu[sZ] ? L(83) : L(84), month = aR.aS.t3(nu[sZ]) + " " + month, gj = Math.floor(eD.measureText(t0).width), mM = Math.floor(eD
				.measureText(month).width), t4 = Math.floor(.5 * (gj + sa)), t5 = (t5 = sT + b3.b4 - (sZ + 1) * sV) < t4 ? t4 : t5 > b3.b4 - t4 ? b3.b4 - t4 : t5, j = b3.b9 - Math.floor(sW * Math.pow(nu[sZ], sc)), t6 = Math.floor(1.1 * sa),
			t7 = j > b3.b9 - t6 ? b3.b9 - t6 : j, eD.fillStyle = aJ.bg, eD.fillRect(b3.b4 - mM - sa, t7 - t6, mM + sa, t6), eD.fillRect(t5 - t4, b3.b9 - t6, gj + sa, t6), eD.fillStyle = aJ.eA, aR.az.textAlign(eD, 2), eD.fillText(month, Math
				.floor(b3.b4 - .5 * sa), t7), aR.az.textAlign(eD, 1), eD.fillText(t0, t5, b3.b9), eD.strokeStyle = aJ.t8, eD.lineWidth = 1, eD.beginPath(), eD.moveTo(0, j), eD.lineTo(b3.b4, j), eD.closePath(), eD.stroke())
	}
}

function t9() {
	this.L84 = ["Type your message here...", "Send", "Ship launched!", "Ship intercepted!", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "LEADERBOARD", "Player Names", "Back", "Options", "Kingdom Names", "Simple Names",
		"Customized", "Selectable Name", "Spawning", "Random", "Clustered", "Selectable Spawn", "Adjust", "Colors", "Selectable Color", "Player Count", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "Security Tip",
		"The only official webpage is https://territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "Territorial Income", "Default", "Uniform",
		"You are leaving Territorial.io.", "Clan Chart", "🛠️ Options", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Players", "Close {button}", "Ready", "Map", "Game Mode", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF",
		"Zombies", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility",
		"Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "second played", "seconds played", "Clans", "Clan Members", "Admins",
		"1v1 Players", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Loading", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options",
		"Y-Axis Compression", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!",
		"Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Bot Difficulty", "Mixed", "Team dependent", "Admin Election", "Blockchain",
		"Clan Leader Election", "📜 Logs", "Starting Resources", "Quit Game", "More", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond",
		"Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "No Admin", "Helper", "Junior Moderator", "Moderator",
		"Senior Moderator", "Lead Moderator", "Head Admin", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black",
		"Replay Error", "Warning", "Loading...", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account",
		"Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Seconds Ago", "Accuser", "Accused", "Percentage", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed",
		"🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "📰 Propaganda", "⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics",
		"🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Interest Income", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income",
		"Mountain Attacks", "Ships landed", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank",
		"Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Copy",
		"Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
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
		"If you hide Patreon, no one can share their membership with you.", "Territory", "Income", "Growth", "Numbers", "Statistics", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "{0} defeated {1}!",
		"Propaganda", "Report Abuse", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Links", "Propaganda Text",
		"Launch Campaign", "Gold Investment", "Launch", "Custom Scenario", "⚔️ Play", "Settings", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "Team {0}",
		"Team {0} won the game!", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Incoming Boat!", "Incoming Ship!", "Humans", "Bots", "Spectators", "Threshold", "Time", "Activated", "This is a contest!", "Accept",
		"You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️",
		"The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}",
		"Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.",
		"Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.",
		"{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}",
		"Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "You are leaving Territorial.io!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!", "Next Contest: ", "Source Account", "Send gold only to trusted accounts!"
	]
}

function tA() {
	var lq, tB, tC, tE;

	function tD(ai) {
		ax.gu(8, ax.d2, new lz(21, {
			qn: ai,
			h5: 0,
			h6: 10
		}))
	}
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), tB.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, tC = [new aM(L(85), function() {
		tD(1)
	}, 0, 0, 1), new aM(L(86), function() {
		tD(2)
	}, 0, 0, 1), new aM(L(87), function() {
		tD(3)
	}, 0, 0, 1), new aM(L(88), function() {
		tD(0)
	}, 0, 0, 1), new aM(L(51), function() {
		tD(9)
	}, 0, 0, 1), new aM(L(89), function() {
		tD(10)
	}, 0, 0, 1), new aM(L(90), function() {
		tD(11)
	}, 0, 0, 1)], tE = [new aM("⬅️ " + L(10), function() {
		ax.ic()
	})], lq = new iU(L(91), tE), tB = new tF(tC, lq.iX)
}

function tG() {
	this.fA = function(player) {
		var tH = function(player) {
			for (var ec = h4.ec.tL(), ae = ec.length, kG = Math.min(ae, 32), jc = kJ.tM(ae), ai = 0; ai < kG; ai++) {
				var tH = (ai + jc) % ae,
					tJ = ec[tH],
					tN = tJ[0],
					tO = tJ[tJ.length - 1];
				if (h4.ak.tP(player, tN) && h4.ak.tQ(player, tO)) return tH;
				if (h4.ak.tP(player, tO) && h4.ak.tQ(player, tN)) return 0 <= (tH = h4.ec.tR(tO, tN)) ? tH : h4.ec.tS() ? -1 : h4.ec.tT(h4.ec.tU(tJ))
			}
			return -1
		}(player);
		return -1 !== tH && (tH = h4.ec.get(tH), !h4.ak.tK(player, tH)) && (oi.nu[0] = tH, !0)
	}
}

function tV() {
	var tW, tX, tY, tZ, ta, tb, tc, td, te, tf, tg, th, ti, tj = 1;

	function tl(tm) {
		!tm && 1 === ti && tj ? (tj = 0, bM.aZ.close(ti, 3280)) : ti = (ti + 1) % bM.aZ.tn, th = bu.bv, bM.aZ.qk(ti, 4) && bM.rZ.hY(ti)
	}

	function tq() {
		0 === ti ? ts.tt(3249) : tl()
	}

	function u0(s, sV, rr) {
		var g = Math.floor((b3.b4 - tZ) / 2) + tc,
			k = g + Math.floor(rr * (tZ - 2 * tc));
		eD.lineWidth = sV, eD.beginPath(), eD.moveTo(g, s), eD.lineTo(k, s), eD.lineTo(Math.floor(g - tc + rr * tZ), s + tY), eD.lineTo(g - tc, s + tY), eD.closePath()
	}
	this.tk = 1, this.q = function() {
		cB.setState(6), tW = 0, tX = 1, td = "rgba(0,220,120,0.4)", te = "rgba(0,0,0,0.8)", this.resize(), bu.dw = !0, tj = 1, ti = this.tk - 1, tl(1)
	}, this.resize = function() {
		tZ = Math.floor((bA.bB.bC() ? .5 : .25) * b3.dG), ta = tZ + 12, tY = Math.floor(.125 * tZ), tc = 3 * tY, tb = Math.floor(.225 * tZ), tg = Math.floor(.3 * tY), tf = aR.az.f8(0, tg)
	}, this.tp = function(hZ) {
		hZ === ti && tq()
	}, this.df = function(r, s) {
		var g = Math.floor((b3.b4 - ta) / 2),
			j = Math.floor(.5 * (b3.b9 - dH.gap - tY - tb)) + tY + dH.gap;
		return g < r && r < g + ta && j < s && s < j + tb && (this.tu(), tv.dk(r, s, !1), !0)
	}, this.tu = function() {
		bM.aZ.rX(3260), ax.aZ.tw()
	}, this.fA = function() {
		6 === cB.mP() && (bu.bv > th + 12e3 && tq(), 100 < (tW += .07 * tX * (tW < 16 ? 5 + tW : 84 < tW ? 105 - tW : 17)) ? (tW = 100, tX = -1) : tW < 0 && (tW = 0, tX = 1), td = "rgba(0," + Math.floor(190 - 1.9 * tW) + "," + Math.floor(120 -
			1.2 * tW) + "," + (.4 + .004 * tW) + ")", te = "rgba(0," + Math.floor(1.9 * tW) + "," + Math.floor(1.2 * tW) + "," + (.8 - .004 * tW) + ")", bu.dw = !0)
	}, this.eC = function() {
		var r = Math.floor((b3.b4 - ta) / 2),
			s = Math.floor(.5 * (b3.b9 - dH.gap - tY - tb));
		! function(title, s, sV, rr) {
			eD.fillStyle = te, u0(s, sV, 1), eD.fill(), eD.fillStyle = td, u0(s, sV, rr), eD.fill(), eD.strokeStyle = aJ.eA, u0(s, sV, 1), eD.stroke(),
				function(u2, s) {
					aR.az.textAlign(eD, 1), aR.az.textBaseline(eD, 1), eD.font = tf, eD.fillStyle = aJ.eA, eD.fillText(u2, Math.floor(.5 * b3.b4), Math.floor(s + .58 * tY))
				}(title, s)
		}(L(92), s, 3, tW / 100),
		function(r, s, b4, b9, rU) {
			eD.fillStyle = aJ.aL, eD.fillRect(r, s, b4, b9), eD.lineWidth = 3, eD.strokeStyle = aJ.eA, eD.strokeRect(r, s, b4, b9);
			var ae = Math.floor(.3 * b9);
			aR.az.textAlign(eD, 1), aR.az.textBaseline(eD, 1), eD.font = aR.az.f8(0, ae), eD.fillStyle = aJ.eA, eD.fillText(rU, Math.floor(r + b4 / 2), Math.floor(s + b9 / 2 + .1 * ae))
		}(r, s + tY + dH.gap, ta, tb, L(10))
	}
}

function u3() {
	var input;

	function u4(aH) {
		(aH = aH.target.files) && 0 < aH.length && u7.u8(aH[0])
	}

	function uC(aH) {
		var iJ = new Image;
		iJ.onload = uD, iJ.src = aH.target.result
	}

	function uD(aH) {
		var aH = aH.target,
			b4 = aH.width,
			b9 = aH.height,
			uF = bz.c0.data[162].value,
			max = Math.min(t.j1, uF),
			uF = (max = bA.id || gr.i3() ? Math.min(1400, uF) : max) / Math.max(b4, b9);
		if (uF < 1 && (b4 = Math.floor(uF * b4 + .125), b9 = Math.floor(uF * b9 + .125)), max < b4 || max < b9 || b4 < 10 || b9 < 10) uF = "Invalid Image Dimensions!", bA.n6 ? bA.n6.showToast(uF) : alert(uF);
		else {
			for (var max = document.createElement("canvas"), uF = (max.width = b4, max.height = b9, max.getContext("2d")), uI = document.createElement("canvas"), uJ = (uI.width = aH.width, uI.height = aH.height, uI.getContext("2d")), aH = (uJ
					.drawImage(aH, 0, 0), uJ.getImageData(0, 0, uI.width, uI.height)), uJ = uF.createImageData(b4, b9), src = aH.data, uM = uJ.data, da = uI.width / b4, dd = uI.height / b9, s = 0; s < b9; s++)
				for (var r = 0; r < b4; r++) {
					var uN = Math.floor(r * da),
						uN = 4 * (Math.floor(s * dd) * uI.width + uN),
						uQ = 4 * (s * b4 + r);
					uM[uQ] = src[uN], uM[1 + uQ] = src[1 + uN], uM[2 + uQ] = src[2 + uN], uM[3 + uQ] = 255
				}
			uF.putImageData(uJ, 0, 0), 20 === ax.d2 && ax.d3().uD(max)
		}
	}
	this.q = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = u4
	}, this.cC = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.u5 = function() {
		input.click()
	}, this.u8 = function(u9) {
		var nu = u9.name.split("."),
			nu = nu[nu.length - 1].toLowerCase();
		"gif" !== nu && "jpg" !== nu && "jpeg" !== nu && "png" !== nu || ((nu = new FileReader).onload = uC, nu.readAsDataURL(u9))
	}
}

function uR() {
	var mO, uS, b4, b9, mN, uT, uU, ex, canvas, f5, uV;

	function dY() {
		return Math.floor((b3.b4 - b4) / 2) < fV.b9 + 2 * dH.gap ? b3.b9 - b9 - 4 * dH.gap - fV.b9 : b3.b9 - b9 - 2 * dH.gap
	}
	this.q = function() {
		uV = mO = !1, mN = .61, uT = .07, uU = .09, f5 = ex = b9 = 0
	}, this.resize = function() {
		var f4, g, iJ, uc, ud, gY;
		mO && (b4 = uW(b4 = bA.bB.bC() ? Math.floor(.69 * b3.dG) : Math.floor(.5 * b3.dG), sm(b3.b4 - 2 * dH.gap, 10)), b4 = uW(b4, Math.floor(3.57 * sm(b3.b9 - 2 * dH.gap, 3))), b9 = Math.floor(.28 * b4), (canvas = document.createElement(
			"canvas")).width = b4, canvas.height = b9, f4 = canvas.getContext("2d", {
			alpha: !0
		}), g = Math.floor(1 + b9 / 40), f4.clearRect(0, 0, b4, b9), f4.fillStyle = aJ.bg, f4.fillRect(g, g, b4 - 2 * g, b9 - 2 * g), f4.lineJoin = "bevel", f4.lineWidth = 2 * g, f4.strokeStyle = aJ.eA, f4.strokeRect(g, g, b4 - 2 * g,
			b9 - 2 * g), f4.imageSmoothingEnabled = !1, iJ = gZ.get(uS), uc = iJ.width, gY = (1 === uS ? .85 : 21 === uS ? .666 : .9) * mN * b9 / (ud = iJ.height), f4.setTransform(gY, 0, 0, gY, Math.floor((b4 - gY * uc) / 2), Math.floor((
			b9 - gY * ud) / 2)), f4.drawImage(iJ, 0, 0), f4.setTransform(1, 0, 0, 1, Math.floor(b4 - uU * b9 - uT * b9 - g), Math.floor(g + uT * b9)), function(f4, ae) {
			f4.lineWidth = Math.floor(1 + b9 / 80), f4.strokeStyle = aJ.eA, f4.beginPath(), f4.moveTo(0, 0), f4.lineTo(ae, ae), f4.moveTo(0, ae), f4.lineTo(ae, 0), f4.stroke()
		}(f4, Math.floor(uU * b9)), f4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(er, uY, uZ, ua) {
		mO || ua && uV || (uS = uZ ? 21 : er ? 1 : 2, mO = uV = !0, this.resize(), jS.aw(), fV.ub(), f5 = bu.bv, ex = uY ? 1 : 0)
	}, this.fA = function() {
		!mO || 1 <= ex || (ex = 1 < (ex += 5e-4 * (bu.bv - f5)) ? 1 : ex, f5 = bu.bv, bu.dw = !0)
	}, this.df = function(r, s) {
		return !(!mO || ex <= 0 || (r -= Math.floor((b3.b4 - b4) / 2), s -= dY(), r < 0) || s < 0 || b4 < r || b9 < s || (b4 - b9 / 3 < r && s < b9 / 3 && (mO = !1, bu.dw = !0), 0))
	}, this.eC = function() {
		!mO || ex <= 0 || (eD.globalAlpha = ex, eD.drawImage(canvas, Math.floor((b3.b4 - b4) / 2), dY()), eD.globalAlpha = 1)
	}
}

function uf() {
	var uj, uk, ug = document.createElement("div"),
		uh = 0,
		ui = 0;
	this.show = function(r, s, en, ul, um) {
		if (uh) {
			if (!ul) return;
			this.aw()
		}
		r === s && -1 === r ? (r = uj, s = uk) : (uj = r, uk = s), um || (ui = ul), uh = 1;
		um = b3.b4 / b3.b5, ug.style.whiteSpace = "pre", ug.textContent = en, aR.az.bD(ug, 5), ug.style.font = aR.az.f8(0, aR.az.b0(.015)), ug.style.padding = "0.3em 0.6em", ug.style.left = r + "px", ug.style.top = "0px", document.body
			.appendChild(ug), ul = r + ug.offsetWidth - um;
		0 < ul && (ug.style.left = (en = r - ul) + "px", en < 5) && (ug.style.whiteSpace = "pre-wrap"), ug.style.top = s - ug.offsetHeight + ui * dH.uq + "px"
	}, this.aw = function(ur) {
		if (uh) {
			if (ur && ui) return 0;
			uh = 0, ax.removeChild(document.body, ug)
		}
		return 1
	}, ug.style.position = "absolute", ug.style.backgroundColor = aJ.gI, ug.style.color = aJ.eA, ug.style.pointerEvents = "none", ug.style.zIndex = "5", ug.style.maxWidth = "100%"
}

function us() {
	function uv(key) {
		var uy;
		return "undefined" == typeof URLSearchParams || (uy = window.location.search, "string" != typeof(uy = new URLSearchParams(uy).get(key))) || uy.length < 1 ? null : uy
	}
	this.ut = function() {
		if (0 !== bA.id) return !1;
		if (! function() {
				var value = uv("account");
				if (!value && !(value = uv("a"))) return void uw.clear();
				return uw.clear(), ax.gu(8, ax.d2, new lz(1e3, {
					ux: 0,
					d8: value,
					cQ: 0
				})), 1
			}()) {
			var value = uv("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			ax.gu(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var nF = new URL(window.location.href);
		nF.search = "";
		try {
			return history.replaceState(null, "", nF.toString()), !0
		} catch (aH) {
			console.log("error 352: " + aH)
		}
		return !1
	}, this.v0 = function(key, value) {
		if (0 === bA.id) try {
			var nF = new URL(window.location.href),
				o4 = nF.searchParams;
			o4.set(key, value), nF.search = o4.toString(), history.replaceState(null, "", nF.toString())
		} catch (aH) {
			console.log("error 358: " + aH)
		}
	}
}

function il() {
	var v1;
	this.ly = [], this.v1 = document.createElement("div"), this.im = function(en, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = en, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.v1.appendChild(
			title), title
	}, this.m5 = function(en, marginBottom) {
		var v2 = document.createElement("p");
		return v2.textContent = en, v2.style.fontSize = "0.75em", v2.style.lineHeight = "1.2em", v2.style.marginBottom = marginBottom || "0", this.v1.appendChild(v2), v2
	}, this.v3 = function(en) {
		var v4 = document.createElement("p");
		return v4.textContent = en, v4.style.fontSize = "1em", v4.style.marginBottom = "0", v4.style.whiteSpace = "pre-wrap", v4.style.overflowWrap = "break-word", this.v1.appendChild(v4), v4
	}, this.jd = function(v5, fontSize) {
		var v1 = document.createElement("div");
		return v1.innerHTML = v5, v1.style.fontSize = fontSize || "1em", v1.style.lineHeight = "1.2em", this.v1.appendChild(v1), v1
	}, this.io = function(v6) {
		for (var v7 = v6.v7, ae = v7.length, ai = 0; ai < ae; ai++) this.v1.appendChild(v7[ai])
	}, this.ir = function(aq) {
		return this.ly.push(aq), this.v1.appendChild(aq.aH), aq
	}, this.resize = function() {
		for (var ae = this.ly.length, ai = 0; ai < ae; ai++) this.ly[ai].resize && this.ly[ai].resize()
	}, (v1 = this.v1).style.position = "absolute", v1.style.height = "auto", v1.style.padding = "0.5em"
}

function v8() {
	this.v9 = function() {
		for (var id = cM.cR(20), colors = new Array(11), ai = 0; ai < 11; ai++) colors[ai] = new Uint8Array([cM.cR(8), cM.cR(8), cM.cR(8)]);
		var oz = bw.cY.cZ(8);
		vA.lO.fJ({
			id: id,
			colors: colors,
			oz: oz
		})
	}, this.vB = function(hZ) {
		var iP = cM.cR(5),
			iP = hb.vC.vD(iP, cM.cR(30), cM.cR(30), cM.cR(30));
		bM.hf.lY(hZ, iP)
	}, this.vE = function(hZ) {
		var lX, iN, lW;
		cM.vF(165) ? (lX = cM.cR(3), iN = hb.vC.fA(cM.cR(30), cM.cR(30)), lW = hb.vC.vD(cM.cR(5), cM.cR(30), cM.cR(30), cM.cR(30)), bM.hf.lV(hZ, iN, lW, lX), 0 < lX || (0 === hZ && 0 === bz.c0.data[105].value.length ? bM.hf.lZ(0) : bM.qu.vG(hZ),
			4 === bM.aZ.vH(hZ).vI() ? 6 === cB.mP() && bM.rZ.hY(hZ) : 5 !== bM.aZ.vH(hZ).vI() || 8 !== cB.mP() && 10 !== cB.mP() || bM.bN.vJ())) : bM.aZ.cP(hZ, 3269)
	}, this.vK = function(hZ) {
		var id = cM.cR(6);
		1 === id ? (bz.cG.cH(160, cM.cR(30)), bM.aZ.vL(hZ), ss.sg || bM.hf.lZ(1), ln.qy(), 8 === ax.d2 && ax.d3().r1()) : 21 === id ? 8 === ax.d2 && ax.d3().d7(17) : 22 === id && (bz.cG.cH(106, bz.c0.data[110].value), bz.cG.cH(110, ""), 8 === ax
			.d2) && ax.d3().d7(15)
	}, this.vM = function() {
		var ae = cM.cR(16),
			vN = cM.cR(16);
		if (cM.vF(55 + 10 * ae + 16 * vN)) {
			for (var nu = [], ai = 0; ai < ae; ai++) nu.push(bw.lc.vO(cM.cR(10)));
			ln.vP(nu)
		} else bM.aZ.cP(0, 3270)
	}
}

function vQ() {
	this.vR = function() {
		var ai;
		if (cM.size < cN.cO(23)) bM.aZ.cP(0, 3259);
		else {
			var qn = cM.cR(6),
				ae = cM.cR(10),
				data = [];
			if (9 === qn || 10 === qn || 11 === qn) {
				for (ai = 0; ai < ae; ai++) data.push([cM.cR(30), bw.cY.cZ(5), cM.cX(32), 0, cM.cR(30)]);
				8 === ax.d2 && ax.d3().d7(21, !0, {
					qn: qn,
					data: data
				})
			} else if (12 === qn) {
				for (ai = 0; ai < ae; ai++) data.push([cM.cR(20), cM.cR(30), cM.cR(30), cM.cX(32), cM.cR(30), bw.cY.cZ(5), bw.cY.cZ(5)]);
				8 === ax.d2 && ax.d3().d7(21, !0, {
					qn: qn,
					data: data
				})
			} else {
				var vS = cM.cR(16);
				if (cM.vF(39 + 16 * vS + ae * (0 === qn ? 111 : 1 === qn ? 101 : 2 === qn || 3 === qn ? 127 : 212))) {
					if (0 === qn)
						for (ai = 0; ai < ae; ai++) data.push([cM.cR(30), bw.lc.vO(cM.cR(5)), cM.cR(16), cM.cR(30), cM.cR(30)]);
					else if (1 === qn)
						for (ai = 0; ai < ae; ai++) data.push([cM.cR(16), bw.lc.vO(cM.cR(3)), cM.cR(16), bw.lc.vO(cM.cR(5)), cM.cR(31), cM.cR(30)]);
					else if (2 === qn || 3 === qn)
						for (ai = 0; ai < ae; ai++) data.push([cM.cR(30), bw.lc.vO(cM.cR(5)), cM.cX(32), cM.cR(30), cM.cR(30)]);
					else
						for (ai = 0; ai < ae; ai++) data.push([cM.cR(20), cM.cR(30), cM.cR(30), cM.cR(30), cM.cR(30), cM.cX(32), cM.cR(30), bw.lc.vO(cM.cR(5)), bw.lc.vO(cM.cR(5))]);
					8 === ax.d2 && ax.d3().d7(21, !0, {
						qn: qn,
						data: data
					})
				} else bM.aZ.cP(0, 3260)
			}
		}
	}, this.vT = function() {
		if (cM.size < cN.cO(29)) bM.aZ.cP(0, 3265);
		else {
			var vU = cM.cR(4),
				vV = cM.cR(7),
				vW = cM.cR(11);
			if (cM.vF(29 + 16 * vV + 16 * vW + 11 * vU)) {
				for (var data = [], ai = 0; ai < vU; ai++) {
					for (var vX = bw.lc.vO(cM.cR(3)), vY = cM.cR(8), ng = [], gF = 0; gF < vY; gF++) ng.push(cM.cR(16));
					data.push({
						name: "[" + vX + "]",
						ng: ng
					})
				}
				8 === ax.d2 && ax.d3().d7(23, !0, data)
			} else bM.aZ.cP(0, 3266)
		}
	}
}

function vZ() {
	var lq, lr, ii;
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), lr.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(L(93), [new aM("⬅️ " + L(10), function() {
		ax.va(13)
	})]), lr = new iW(lq.iX, ((ii = []).push(function() {
		var hW = new il,
			vf = (hW.im(L(94)), hW.m5(L(95)), new aM(L(96), function() {
				bz.cG.cH(130, 0), ax.aZ.vg()
			}, 0, 0, 1)),
			a6 = new a7(bz.c0.data[126], 0, function() {
				vf.button.click()
			});
		return hW.ir(a6), a6.aH.placeholder = "a,b,c", a6.aH.style.marginTop = "0.5em", hW.ir(new m4([vf.button])), hW
	}()), ii.push(function() {
		var hW = new il,
			vf = new aM(L(96), function() {
				bz.cG.cH(130, 1), ax.aZ.vg()
			}, 0, 0, 1),
			vh = new a7(bz.c0.data[129], 1, function() {
				vh.aH.focus()
			}),
			vi = new a7(bz.c0.data[128], 1, function() {
				vf.button.click()
			});
		return hW.im(L(97)), hW.ir(vi), vi.aH.style.marginBottom = "0.5em", hW.im(L(98)), hW.ir(vh), hW.ir(new m4([vf.button])), hW
	}()), ii.push(function() {
		var hW = new il;
		return hW.im(L(99)), bz.c0.data[125].iq = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], hW.io(new ip(bz.c0.data[125])), hW
	}()), ii.push(function() {
		var hW = new il;
		return hW.im(L(100)), hW.ir(new it(bz.c0.data[127], L(101))), hW
	}()), ii))
}

function rK(vj, i7, vk) {
	this.v1 = document.createElement("div"), this.jW = vj;
	var vl = 0;
	this.resize = function(av, vm) {
		var ae = vj.length;
		if (!vk)
			for (var ai = 1; ai < ae; ai++) aR.az.bD(vj[ai].button, 4);
		for (var vn = 0, ai = 0; ai < ae; ai++) vn += vj[ai].button.offsetWidth;
		if (av && (vl = av.offsetWidth), vm && vn < vl)
			for (ai = 0; ai < ae; ai++) vj[ai].button.style.width = (100 * vj[ai].button.offsetWidth / vn).toFixed(2) + "%";
		else
			for (ai = 0; ai < ae; ai++) vj[ai].button.style.width = "auto";
		vm || this.resize(av, 1)
	};
	var jw = this;
	jw.v1.style.height = jw.v1.style.maxHeight = "100%";
	for (var ai = 0; ai < vj.length; ai++) vj[ai].aN(i7), vj[ai].button.style.height = "100%", vj[ai].button.style.padding = "0.0em 0.9em", jw.v1.appendChild(vj[ai].button)
}

function vo() {
	var a8 = 0,
		bv = bu.bv;
	this.vp = 0, this.fA = function() {
		b3.fA(), bK.j9 ? vq() : 0 === a8 ? bu.bv >= bv && (bv += bu.vr * Math.floor(1 + (bu.bv - bv) / bu.vr), 2 === bK.fC || vs.vt ? vu() : (vv(), jU.f()), a8++) : ((vs.vt ? vq : (bu.dw = !0, vw))(), a8 = 0), vx(), bu.dw && (bu.dw = !1, vy())
	}
}

function vz() {
	var w0, w1, w2;

	function w5(w7) {
		for (var ai = w0 - 1; 0 <= ai; ai--) 0 === w2[w1[ai]] && fL.ge[w1[ai]] >= w7 && w4(w1[ai])
	}

	function w3(player) {
		var gj;
		64 === w2[player] ? w2[player] = 6 : (gj = fL.ge[player], w2[player] = gj < 1e3 ? 3 : gj < 1e4 ? 2 : gj < 6e4 ? 1 : 0)
	}
	this.q = function() {
		w0 = 0, w1 = new Uint16Array(bK.g6), w2 = new Uint8Array(bK.g6)
	}, this.fA = function() {
		for (var ai = w0 - 1; 0 <= ai; ai--) 64 === w2[w1[ai]] ? w3(w1[ai]) : 0 == w2[w1[ai]]-- && (w3(w1[ai]), w4(w1[ai]));
		16e4 <= fL.ge[fZ[0]] && (w5(16e4), 3e5 <= fL.ge[fZ[0]]) && w5(3e5), aR.bc.w8(bK.bL) && (jB.jC[7] = Math.max(fL.ge[bK.bL], jB.jC[7]))
	}, this.w9 = function(player) {
		for (var gF, ai = w0 - 1; 0 <= ai; ai--)
			if (player === w1[ai]) {
				for (w0--, gF = ai; gF < w0; gF++) w1[gF] = w1[gF + 1];
				return
			}
	}, this.wA = function(player, wB) {
		for (var ai = w0 - 1; 0 <= ai; ai--)
			if (player === w1[ai]) return;
		w1[w0++] = player, w2[player] = wB ? 2 : 64
	}
}

function wC() {
	this.wD = 28, this.oR = 0, this.wE = null;
	var wG = this.wF = null;

	function wL(wK, wO) {
		var r, s, j4, dn, mD = aR.az.wJ(wK, wK),
			uH = aR.az.getContext(mD, !0),
			wP = aR.az.getImageData(uH, wK, wK),
			wQ = wP.data,
			kG = (wK >> 1) - .5,
			wR = .5 + kG;
		for (wR *= wR, s = 0; s < wK; s++)
			for (r = 0; r < wK; r++) dn = (dn = r - kG) * dn + (dn = s - kG) * dn, wQ[j4 = 4 * (s * wK + r)] = wO[0], wQ[1 + j4] = wO[1], wQ[2 + j4] = wO[2], wQ[3 + j4] = (wR - dn) * wO[3] / wR;
		return uH.putImageData(wP, 0, 0), mD
	}

	function wW(ai, uH, mD, wK) {
		var highlight, r, s;
		0 !== fL.gl[ai] && 0 !== fL.ge[ai] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[ai]) && (wK *= 2), r = fL.jI[ai] + fL.jK[ai] + 1 - wK - 2 >> 1, s = fL.jJ[ai] + fL.jL[ai] + 1 - wK - 2 >> 1, highlight ? uH
			.drawImage(mD[bK.fR ? 9 === bK.k7 && 5 === wX.mW[ai] ? 3 : gT.og[ai] : ai < bK.gd ? 1 : 0], r, s, wK, wK) : uH.drawImage(mD[bK.fR ? 9 === bK.k7 && 5 === wX.mW[ai] ? 3 : gT.og[ai] : ai < bK.gd ? 1 : 0], r, s))
	}
	this.q = function() {
		var jw;
		this.oR = 700,
			function(jw) {
				var wK = jw.wD;
				if (jw.wF = [], wG = [], bK.fR) {
					for (var ai = 0; ai <= bK.oT; ai++) jw.wF.push(wL(wK, gT.wM[gT.oZ[ai]])), wG.push(wL(wK >> 1, gT.wM[gT.oZ[ai]]));
					9 === bK.k7 && wG.push(wL(wK, gT.wM[1]))
				} else jw.wF.push(wL(wK, gT.wM[7])), jw.wF.push(wL(wK, gT.wM[4])), wG.push(wL(wK >> 1, gT.wM[7]))
			}(this),
			function(jw, wS) {
				var ai, wE = jw.wE,
					uH = aR.az.getContext(wE, !0),
					ae = bK.g6,
					wK = jw.wD >> 1;
				uH.imageSmoothingEnabled = !1, uH.setTransform(1, 0, 0, 1, 0, 0), wS && uH.clearRect(0, 0, wE.width, wE.height);
				if (9 === bK.k7) {
					wK <<= 1;
					jw = wU.wV[5];
					for (ai = ae - jw; ai < ae; ai++) wW(ai, uH, wG, wK);
					ae -= jw, wK >>= 1
				}
				for (ai = bK.gd; ai < ae; ai++) wW(ai, uH, wG, wK)
			}(this, null !== (jw = this).wE && jw.wE.width === t.u - 2 && jw.wE.height === t.v - 2 || (jw.wE = aR.az.wJ(t.u - 2, t.v - 2), !1)), bK.j9 || this.jR()
	}, this.wN = wL, this.jR = function() {
		for (var ae = bK.gd, wK = this.wD, wF = this.wF, uH = aR.az.getContext(this.wE, !0), ai = 0; ai < ae; ai++) wW(ai, uH, wF, wK)
	}
}

function wY() {
	this.vC = new wZ, this.k3 = new wa, this.hc = new wb
}

function wc(vj) {
	var hw = document.createElement("div"),
		wd = document.createElement("div"),
		uh = (this.r = 0, this.s = 0);

	function wf() {
		aY.bm.aw()
	}
	this.jW = vj, this.show = function(r, s, wh) {
		if (uh) return [0, 0];
		uh = 1, this.r = r, this.s = s,
			function(self, wh) {
				var b4 = aR.az.b0(.16, .7),
					b9 = vj.length * b4 / 3,
					wj = b3.b4 / b3.b5,
					wk = b3.b9 / b3.b5,
					du = Math.min(1, Math.min(wj / b4, wk / b9));
				b4 *= du, b9 *= du, wh && (self.r += aR.az.b0(.03, .5)), self.r = je.jf(self.r, 0, wj - b4), self.s = je.jf(self.s, 0, wk - b9), wd.style.left = self.r + "px", wd.style.top = self.s + "px", wd.style.width = b4 + "px", wd.style
					.height = b9 + "px", wd.style.font = aR.az.f8(0, .3 * b9 / vj.length), aR.az.bD(wd, 5);
				for (var ai = 1; ai < vj.length; ai++) aR.az.bD(vj[ai].button, 8)
			}(this, wh), document.body.appendChild(hw)
	}, this.aw = function() {
		uh && (uh = 0, hw.removeEventListener("click", wf), ax.removeChild(document.body, hw))
	};
	for (var ai = 0; ai < vj.length; ai++) new aP("" + (1 + ai), vj[ai].button, 0, 1);
	hw.style.position = "fixed", hw.style.top = "0", hw.style.left = "0", hw.style.width = "100%", hw.style.height = "100%", hw.style.zIndex = "5", wd.style.position = "absolute",
		function() {
			for (var wg = (100 / vj.length).toFixed(2) + "%", ai = 0; ai < vj.length; ai++) vj[ai].button.style.width = "100%", vj[ai].button.style.height = vj[ai].button.style.maxHeight = wg, vj[ai].button.style.padding = "0.0em 0.9em", wd
				.appendChild(vj[ai].button)
		}(), hw.appendChild(wd), hw.addEventListener("click", wf)
}

function wl() {
	var wm, wn, wo;
	this.q = function() {
		wm = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), wn =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), wo = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var wp = ["K ", " Y", "E ", " Z", " z", " s", "S "], wq = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], ai = wm.length - 1; 0 <= ai; ai--)
			for (var gF = wp.length - 1; 0 <= gF; gF--) wm[ai] = wm[ai].replace(wp[gF], wq[gF]);
		if (__fx.settings.realisticNames) wm = realisticNames;
	}, this.wr = function() {
		var ae = bK.gd,
			fM = fL.fM,
			g9 = fL.g9,
			playerNamesData = bK.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ae)
			for (var ai = 0; ai < ae; ai++) fM[ai] = g9[ai] = "Player " + kJ.tM(1e3);
		else
			for (ai = 0; ai < ae; ai++) fM[ai] = g9[ai] = playerNamesData[ai]
	}, this.ha = function() {
		if (9 === bK.k7) {
			for (var oo = kJ.random(), wx = wo, wy = wn, mW = wX.mW, ae = wx.length, kG = bK.data.teamPlayerCount[7], fM = fL.fM, g9 = fL.g9, ai = kG - 1; ai >= bK.gd; ai--) fM[ai] = g9[ai] = wx[(ai + oo) % ae];
			for (ae = wy.length - 1, ai = kG; ai < bK.g6; ai++) fM[ai] = g9[ai] = wy[mW[ai] ? ae : ai % ae]
		} else(2 === bK.data.playerNamesType ? function() {
			for (var ae = bK.g6, fM = fL.fM, g9 = fL.g9, playerNamesData = bK.data.playerNamesData, ai = bK.gd; ai < ae; ai++) fM[ai] = g9[ai] = playerNamesData[ai]
		} : 1 === bK.data.playerNamesType ? function() {
			for (var fM = fL.fM, g9 = fL.g9, ai = bK.gd; ai < bK.g6; ai++) fM[ai] = g9[ai] = "Bot " + kJ.tM(1e3)
		} : function() {
			for (var wz = wm, ae = wz.length, oo = kJ.random(), fM = fL.fM, g9 = fL.g9, ai = bK.gd; ai < bK.g6; ai++) fM[ai] = g9[ai] = wz[(ai + oo) % ae]
		})()
	}
}

function x0() {
	var canvas, f4, x1, font, oF = 0,
		x2 = !1,
		x3 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		x4 = 5;

	function xL() {
		if (x2) {
			var ai, ae = x3.length,
				mN = Math.floor(.5 * x1.b9),
				b9 = ae * mN,
				r = Math.floor(Math.floor(x1.r) + .3 * x1.b4 - .5),
				s = Math.floor(Math.floor(x1.s) - b9),
				b4 = Math.floor(.4 * x1.b4 + 2.5);
			for (eD.fillStyle = aJ.gI, eD.fillRect(r, s, b4, b9), eD.fillStyle = aJ.gK, eD.fillRect(r, s + x4 * mN, b4, mN), eD.fillStyle = aJ.eA, eD.fillRect(r, s, 2, b9), eD.fillRect(r, s, b4, 2), eD.fillRect(r + b4 - 2, s, 2, b9), ai = 1; ai <
				ae; ai++) eD.fillRect(r, s + ai * mN, b4, 2);
			for (eD.fillStyle = aJ.eA, aR.az.textAlign(eD, 1), aR.az.textBaseline(eD, 1), eD.font = aR.az.f8(0, .6 * mN), r += .5 * b4, ai = 0; ai < ae; ai++) eD.fillText(xT(ai), r, s + (ai + .6) * mN)
		}
		eD.drawImage(canvas, Math.floor(x1.r), Math.floor(x1.s))
	}

	function aW(jw) {
		var r, g, j, mN;
		f4.clearRect(0, 0, Math.floor(x1.b4), Math.floor(x1.b9)), f4.fillStyle = aJ.gI, f4.fillRect(0, 0, Math.floor(x1.b4), Math.floor(x1.b9)), bK.dg && (f4.fillStyle = aJ.gK, f4.fillRect(0, 0, Math.floor(.3 * x1.b4), Math.floor(x1.b9))), f4
			.fillStyle = aJ.eA, f4.fillText("Hide UI", .15 * x1.b4, .5 * x1.b9), f4.fillRect(Math.floor(.3 * x1.b4 - .5), 0, 2, Math.floor(x1.b9)), r = .5 * x1.b4, f4.fillText("Replay Speed", r, .31 * x1.b9), f4.fillText(xT(x4), r, .69 * x1.b9), f4
			.fillRect(Math.floor(.7 * x1.b4 - .5), 0, 2, Math.floor(x1.b9)), jw.x5 ? (r = Math.floor(.02 * x1.b4), jw = Math.floor(.025 * x1.b4), g = Math.floor(.85 * x1.b4 - r - .5 * jw), j = Math.floor(.25 * x1.b9), mN = Math.floor(x1.b9) - 2 * j,
				f4.fillRect(g, j, r, mN), f4.fillRect(g + r + jw, j, r, mN)) : function() {
				var b4 = Math.floor(.46 * x1.b9),
					b9 = Math.floor(.23 * x1.b9),
					r = Math.floor(.85 * x1.b4 - .5 * b4 + b4 / 12),
					s = Math.floor(.5 * x1.b9 - b9);
				f4.beginPath(), f4.moveTo(r, s), f4.lineTo(r + b4, s + b9), f4.lineTo(r, s + (b9 << 1)), f4.fill()
			}(), f4.fillRect(0, 0, Math.floor(x1.b4), 2), f4.fillRect(0, 0, 2, Math.floor(x1.b9)), f4.fillRect(0, Math.floor(x1.b9) - 2, Math.floor(x1.b4), 2), f4.fillRect(Math.floor(x1.b4 - 2), 0, 2, Math.floor(x1.b9))
	}

	function xT(ai) {
		return 5 === ai ? "Normal" : "" + x3[ai]
	}
	this.x5 = !1, this.q = function() {
		bK.bY && (x4 = 5, this.x5 = !1, x2 = !1, x1 = new dB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.x6 = function() {
		return x3[x4]
	}, this.dY = function() {
		return x1.s
	}, this.x7 = function(x8) {
		return !!bK.bY && x1.r + x1.b4 > b3.b4 - x8 - dH.gap
	}, this.resize = function() {
		bK.bY && (x1.resize(), x1.s -= (x9.xA() - 1) * dH.gap, font = aR.az.f8(0, .3 * x1.b9), (canvas = document.createElement("canvas")).width = Math.floor(x1.b4), canvas.height = Math.floor(x1.b9), (f4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aR.az.textAlign(f4, 1), aR.az.textBaseline(f4, 1), aW(this))
	}, this.xB = function(xC) {
		0 === bK.fC || ax.mO() || xC !== bK.dg && (bK.dg = xC, fT.resize(), bu.dw = !0, bK.bY) && (oF = bu.bv + 2e3, aW(this))
	}, this.df = function(r, s) {
		if (!bK.bY) return !1;
		if (r < x1.r || s < x1.s || r > x1.r + x1.b4) return x2 && function(jw, r, s) {
			var ae = x3.length,
				mN = Math.floor(.5 * x1.b9),
				b9 = ae * mN,
				g = Math.floor(Math.floor(x1.r) + .3 * x1.b4 - .5),
				b9 = Math.floor(Math.floor(x1.s) - b9),
				b4 = Math.floor(.4 * x1.b4 + 2.5);
			return x2 = !1, bu.dw = !0, r < g || g + b4 < r || s < b9 || (x4 = gt(0, Math.floor((s - b9) / mN), ae - 1), aW(jw)), !0
		}(this, r, s);
		if ((r -= x1.r) < .3 * x1.b4) x2 = !1, this.xB(!bK.dg);
		else {
			if (r < .7 * x1.b4) return x2 = !x2, bu.dw = !0;
			this.xE(!1)
		}
		return !0
	}, this.xE = function(xF) {
		2 === bK.fC ? (this.xB(!1), ax.gu(3)) : (x2 = !1, this.x5 = !this.x5, this.x5 ? (vs.vt && vs.xG(), bA.bB.setState(1)) : xF || vs.xH(), bu.dw = !0, aW(this))
	}, this.xI = function() {
		this.x5 = !1, vs.xH(), bu.dw = !0, aW(this)
	}, this.xJ = function(r, s) {
		return !!bK.dg && (0 <= vs.df(r, s) || (bK.bY ? ((bu.bv > oF || !this.df(r, s)) && e7.df(r, s), bu.dw = !0, oF = bu.bv + 2e3) : e7.df(r, s)), !0)
	}, this.fA = function() {
		bK.bY && bK.dg && bu.bv > oF - 1e3 && bu.bv < oF && (bu.dw = !0)
	}, this.xK = function() {
		bK.bY && (this.x5 = !1, bu.dw = !0, aW(this))
	}, this.eC = function() {
		if (bK.bY) {
			if (bK.dg) {
				if (bu.bv > oF) return;
				if (oF - 1e3 < bu.bv) return eD.globalAlpha = gt(0, (1e3 - (bu.bv - (oF - 1e3))) / 1e3, 1), xL(), void(eD.globalAlpha = 1)
			}
			xL()
		}
	}
}

function xU() {
	this.qm = function(qn, h5, h6) {
		cN.ha(75), cN.et(1, 0), cN.et(6, 21), cN.et(6, qn), cN.et(1, +(h5 < 0)), cN.et(1, +(h6 < 0)), cN.et(30, Math.abs(h5)), cN.et(30, Math.abs(h6)), bM.aZ.send(0, cN.hl)
	}, this.qo = function(qn, qp, qq) {
		cN.ha(18 + 16 * qp.length + 30), cN.et(1, 0), cN.et(6, 22), cN.et(6, qn), bM.hf.hg(qp), cN.et(30, qq), bM.aZ.send(0, cN.hl)
	}, this.qw = function(qn, qp, qq) {
		cN.ha(73), cN.et(1, 0), cN.et(6, 28), cN.et(6, qn), bw.bx.xV(qp, 5), cN.et(30, qq), bM.aZ.send(0, cN.hl)
	}, this.qr = function(nd, qs) {
		for (var ae = qs.length, vS = 0, ai = 0; ai < ae; ai++) vS += qs[ai].length;
		for (cN.ha(21 + 3 * ae + 16 * vS), cN.et(1, 0), cN.et(6, 23), cN.et(3, nd), cN.et(4, ae), cN.et(7, vS), ai = 0; ai < ae; ai++) cN.et(3, qs[ai].length), cI.lc.kY(qs[ai]);
		bM.aZ.send(0, cN.hl)
	}, this.qt = function(nd, h5, h6) {
		cN.ha(52), cN.et(1, 0), cN.et(6, 24), cN.et(3, nd), cN.et(1, +(h5 < 0)), cN.et(1, +(h6 < 0)), cN.et(20, Math.abs(h5)), cN.et(20, Math.abs(h6)), bM.aZ.send(0, cN.hl)
	}
}

function xW() {
	function xZ(nu) {
		if (0 === nu.length) bz.cG.cH(116, "");
		else {
			for (var xa = nu[0], ai = 1; ai < nu.length; ai++) xa += ";" + nu[ai];
			bz.cG.cH(116, xa)
		}
	}
	this.cF = function() {
		bz.c0.data[110].value.length && (bz.c0.data[106].value = bz.c0.data[110], bz.cG.cH(110, ""), this.xX())
	}, this.xX = function() {
		var nu = bz.c0.data[116].value.split(";");
		for (nu.length % 2 == 1 && nu.pop(), nu.unshift(bz.c0.data[106].value), nu.unshift(bz.c0.data[105].value), ai = 2; ai < nu.length; ai += 2)
			if (nu[ai] === nu[0]) {
				nu.splice(ai, 2);
				break
			} for (var xY = [], ai = 0; ai < nu.length; ai += 2) xY.push(nu[ai]);
		xZ(nu), bz.c0.data[117].value = 0, bz.c0.data[117].iq = xY
	}, this.r2 = function(a8) {
		bz.c0.data[117].iq.splice(a8, 1), bz.c0.data[117].value = Math.min(a8, bz.c0.data[117].iq.length - 1);
		var nu = bz.c0.data[116].value.split(";");
		nu.splice(2 * a8, 2), xZ(nu)
	}, this.r3 = function(a8) {
		var nu = bz.c0.data[116].value.split(";");
		return {
			d8: nu[2 * a8],
			password: nu[2 * a8 + 1]
		}
	}, this.hj = function() {
		var er = je.jf(bz.c0.data[121].value, -1, 262143);
		return er = -1 === er ? ~~(262144 * Math.random()) : er
	}, this.xb = function() {
		for (var nu = document.cookie.split(";"), ai = 0; ai < nu.length; ai++) {
			var en = nu[ai].trim(),
				ga = en.indexOf("="),
				ga = 0 <= ga ? en.substring(0, ga) : en;
			document.cookie = ga + "=;expires=0;path=/", document.cookie = ga + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = ga + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function ed() {
	var xc = [];
	this.q = function() {
		xc = []
	}, this.tS = function() {
		return 65536 === xc.length
	}, this.tR = function(xd, xe) {
		for (var ec = xc, ae = ec.length, ai = 0; ai < ae; ai++) {
			var o4 = ec[ai];
			if (o4[0] === xd && o4[o4.length - 1] === xe) return ai
		}
		return -1
	}, this.tU = function(tJ) {
		var xf = new Uint32Array(tJ.length);
		return xf.set(tJ), xf.reverse()
	}, this.xg = function(xh, xi) {
		var nt = xh.length - 1,
			xj = new Uint32Array(nt + xi.length);
		return xj.set(xh, 0), xj.set(xi, nt), xj
	}, this.xk = function(xh, xi, ga, j4, xl) {
		xl && (ga = (xi = this.tU(xi)).length - ga - 2);
		xl = xi.subarray(ga + 1 + (j4 === xi[ga + 1])), j4 = new Uint32Array(xh.length + xl.length);
		return j4.set(xh, 0), j4.set(xl, xh.length), j4
	}, this.tT = function(tJ) {
		return xc.push(tJ), xc.length - 1
	}, this.get = function(ai) {
		return xc[ai]
	}, this.tL = function() {
		return xc
	}, this.xn = function(xd, xe) {
		return null
	}
}

function xo() {
	var jW, r, s, xp, xq, xr, bv, xs, xt, xu, xv, gap, zoom, bT, xw;

	function yd(ds, dt, dx) {
		x.z3(dx) || -1 === (ds = h4.ak.z5(ds, dt)) ? bI.z4(dx) : bI.z6(ds)
	}

	function yI(xs) {
		for (var ai = bT.length - 1; 0 <= ai; ai--)
			if (bT[ai] === xs) return 1
	}

	function yG(yD) {
		var ai, ae;
		if (-1 !== yD)
			for (ae = jW.length, ai = 0; ai < ae; ai++)
				if (jW[ai].mO && jW[ai].r + 1 === yD % 4 && jW[ai].s + 1 === yD >> 2) return ai;
		return -1
	}

	function yE(ds, dt) {
		var qS = gap / 2;
		return ds < r - xp - 3 * qS || r + 3 * xp + 5 * qS < ds || dt < s - xp - 3 * qS || s + 2 * xp + 3 * qS < dt ? -1 : 4 * (dt < s - qS ? 0 : dt < s + xp + qS ? 1 : 2) + (ds < r - qS ? 0 : ds < r + xp + qS ? 1 : ds < r + 2 * xp + 3 * qS ? 2 : 3)
	}
	this.xx = function() {
		var ai, pW, y0 = [aJ.y1, aJ.y2, aJ.aK, aJ.y3, aJ.y4];
		for (jW = new Array(10), ai = 0; ai < 10; ai++) jW[ai] = {
			id: ai,
			mO: !1,
			kL: 0,
			canvas: [],
			r: 0,
			s: 0
		};
		for (jW[0].colors = [0, 1, 2, 3], jW[0].r = 0, jW[0].s = 0, jW[1].colors = [1, 4], jW[1].r = 1, jW[1].s = 0, jW[2].colors = [0, 1], jW[2].r = -1, jW[2].s = 0, jW[3].colors = [0], jW[3].r = 0, jW[3].s = 0, jW[4].colors = [0, 2], jW[4].r =
			1, jW[4].s = 1, jW[5].colors = [3], jW[5].r = 0, jW[5].s = -1, jW[6].id = 20, jW[6].colors = [0], jW[6].r = 1, jW[6].s = -1, jW[7].id = 21, jW[7].colors = [0], jW[7].r = 0, jW[7].s = 1, jW[8].id = 16, jW[8].colors = [0], jW[8].r = 0,
			jW[8].s = 0, jW[9].id = 10, jW[9].colors = [4], jW[9].r = 2, jW[9].s = 0, ai = 0; ai < 10; ai++)
			for (pW = 0; pW < jW[ai].colors.length; pW++) jW[ai].canvas.push(function(id, y5) {
				if (id < 20) return aR.canvas.y6(gZ.get(3), id, y5);
				var y5 = gZ.get(3).height,
					mD = aR.az.wJ(y5, y5),
					uH = aR.az.getContext(mD);
				20 === id ? uH.drawImage(gZ.get(18), 0, 0) : 21 === id && y7.wQ.y8(y7.at.y9 + y7.at.yA, uH, 0, 0, y5);
				return mD
			}(jW[ai].id, y0[jW[ai].colors[pW]]))
	}, this.xz = function() {
		return jW
	}, this.q = function() {
		bT = [], r = s = bv = 0, xq = xr = -1e3, this.resize()
	}, this.resize = function() {
		xp = Math.floor((bA.bB.bC() ? .075 : .0468) * b3.dG), zoom = xp / gZ.get(3).height, gap = Math.floor(xp / 3)
	}, this.yB = function(ds, dt) {
		return !!this.mO() && (bu.dw = !0, !!y7.wQ.df(ds, dt, xt) || (ds = function(ds, dt) {
			xr = xq = -1e3;
			var yF = yG(yE(ds, dt));
			if (-1 === yF) return 0;
			if (1 !== jW[yF].colors[jW[yF].kL])
				if (5 === yF) {
					if (! function() {
							var gj = performance.now();
							xw + 4e3 < gj && (bT = []);
							xw = gj
						}(), yI(xs)) return 1;
					bT.push(xs), 16 < bT.length && bT.shift()
				} else if (6 === yF) {
				for (var ai = bT.length - 1; 0 <= ai; ai--) 0 === fL.gl[bT[ai]] && bT.splice(ai, 1);
				0 < bT.length && (yJ.pj(1, bT, !0) && k6.bc.bS(bT, xs), bT = [])
			} else if (2 === yF) yK.yL(xs) && k6.yM.yN(fV.yO(), xs);
			else if (3 === yF) bK.j9 && k6.yM.yP(xu);
			else if (0 === yF)
				if (0 === jW[0].kL) {
					if (bK.yQ && jF.yR() < 350) return 1;
					yS.yT(4), k6.yM.yU(fV.yO(), xs)
				} else yV.yW(xs, fV.yO());
			else if (1 === yF) k6.yM.bb(fV.yO(), xu);
			else if (9 === yF) k6.yM.bh(fV.yO());
			else {
				if (7 === yF) return yS.yT(0), y7.wQ.show(ds, dt), 2;
				if (4 === yF) yJ.pj(0, [xs], !0) && k6.bc.bP(xs);
				else {
					if (8 !== yF) return 0;
					k6.yM.yX(fV.yO(), xv, xs)
				}
			}
			return 1
		}(ds, dt), this.aw(), 2 === ds && (y7.wQ.mO = !0), 0 < ds))
	}, this.yC = function(ds, dt) {
		this.mO() || (xq = ds, xr = dt, bv = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = hQ.yZ(mouseX),
			coordY = hQ.ya(mouseY),
			coord = hQ.kU(coordX, coordY),
			coord = hQ.kW(coord);
		hQ.yb(coordX, coordY) && yd(mouseX, mouseY, coord)
	}, this.click = function(ds, dt, yY) {
		var kR = hQ.yZ(ds),
			kS = hQ.ya(dt),
			j4 = hQ.kU(kR, kS),
			dx = hQ.kW(j4);
		return !(!hQ.yb(kR, kS) || (kR = (bA.bB.bC() ? .025 : .0144) * b3.dG, kS = performance.now(), Math.abs(ds - xq) > kR) || Math.abs(dt - xr) > kR || bv + 500 < kS) && (bv = kS, yY ? (yd(ds, dt, dx), !1) : vs.vt || this.mO() || !aR.bc.ye(bK
			.bL) || bK.bY ? (this.aw(), !1) : (bK.j9 ? 0 <= (xu = yf.yg(j4)) && (jW[3].mO = !0) : 2 === bK.fC ? x.yi(dx) && (xs = x.yj(dx), aR.bc.ms(xs) || (jW[0].mO = !0, jW[0].kL = 1, jW[7].mO = !0)) : (h4.ef.yL(bK.bL, j4) && (jW[0]
			.mO = !0, jW[0].kL = 1, jW[1].mO = !0, jW[1].kL = 0, jW[9].mO = !0, jW[9].kL = 0), h4.ea.yk(bK.bL, j4) && (jW[0].mO = !0, jW[0].kL = 1, jW[1].mO = !0, jW[1].kL = 1, xu = oi.yl[7]), x.ym(dx) ? (xv = yn.yo.yp(dx)) && (
			kR = hQ.kW(xv), jW[8].mO = !0, xs = x.yr(kR) ? bK.g6 : x.yj(kR)) : (x.ys(bK.bL, dx) && (xt = bK.bL, jW[0].mO = !0, jW[0].kL = 1, jW[7].mO = !0), -1 !== (kS = yf.yu(j4)) && (x.yr(kS << 2) ? (xs = bK.g6, kf.yv(bK.bL) ? (
			jW[0].mO = !0, jW[0].kL = 0) : ks.mk(bK.bL) && (jW[0].mO = !0, jW[0].kL = 3)) : (xs = x.yj(kS << 2), jW[0].kL = 1, jW[5].mO = function(xs) {
			return !aR.bc.ms(xs) && !yI(xs) && yJ.pj(1, [xs], !1)
		}(xs), jW[7].mO || aR.bc.ms(xs) || (xt = xs, jW[7].mO = !0), jW[4].mO = !aR.bc.ms(xs) && !dq.yx(xs) && yJ.pj(0, [xs], !1), jW[6].mO = function(xs) {
			if (0 === bT.length) return !1;
			if (performance.now() > xw + 4e3) return !(bT = []);
			return !yI(xs) && ! function(xs) {
				var ai;
				if (bK.fR)
					for (ai = bT.length - 1; 0 <= ai; ai--)
						if (!kf.yz(xs, bT[ai])) return 1;
				return
			}(xs)
		}(xs), kf.yz(xs, bK.bL) ? (kf.z0(bK.bL, xs) ? (jW[0].kL = 0, jW[0].mO = !0) : ks.mk(bK.bL) && (jW[0].kL = 3, jW[0].mO = !0), jW[0].mO = this.z1()) : (jW[2].mO = !0, yK.yL(xs) ? jW[2].kL = 0 : jW[2].kL = 1, jW[
			0].mO = !0))))), this.yh(ds, dt)))
	}, this.yh = function(ds, dt) {
		return r = ds - Math.floor(xp / 2), s = dt - Math.floor(xp / 2), !!this.mO()
	}, this.dk = function(ds, dt) {
		return !!this.mO() && (y7.wQ.mO ? !y7.wQ.go(ds, dt) && (y7.wQ.mO = !1, bu.dw = !0) : function(jw, ds, dt) {
			ds = yE(ds, dt);
			if (0 <= yG(ds)) return !1;
			if ((1 === ds || 6 === ds) && 0 <= yG(2)) return !1;
			if ((6 === ds || 9 === ds) && 0 <= yG(10)) return !1;
			return jw.aw(), bu.dw = !0
		}(this, ds, dt))
	}, this.aw = function() {
		for (var ai = jW.length - 1; 0 <= ai; ai--) jW[ai].mO = !1, jW[ai].kL = 0;
		y7.wQ.mO = !1
	}, this.mO = function() {
		return this.z1() || y7.wQ.mO
	}, this.z1 = function() {
		for (var ae = jW.length, ai = 0; ai < ae; ai++)
			if (jW[ai].mO) return !0;
		return !1
	}, this.eC = function() {
		if (this.mO())
			if (y7.wQ.mO) y7.wQ.eC();
			else {
				var ai, uH = eD,
					pW = jW,
					ae = pW.length,
					zC = (xp + gap) / zoom;
				for (uH.imageSmoothingEnabled = !0, uH.setTransform(zoom, 0, 0, zoom, r, s), ai = 0; ai < ae; ai++) pW[ai].mO && eD.drawImage(pW[ai].canvas[pW[ai].kL], pW[ai].r * zC, pW[ai].s * zC);
				uH.imageSmoothingEnabled = !1, uH.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function zD() {
	var iR, zE;

	function zH() {
		ax.rW();
		var en = zK.zO(zE.f7());
		(bK.fC && 0 < en.length && en === zK.zL.sD || zK.zQ.cZ(en)) && zK.zP()
	}
	this.show = function(uy) {
		this.zI(uy), iR.show(), this.resize()
	}, this.zI = function(uy) {
		0 === bK.fC ? uy ? zE.iv(uy) : bK.zJ.length && zE.iv(bK.zJ) : (bK.bY || (zK.zL.sD = zK.zM.em()), zE.iv(zK.zN(zK.zL.sD)))
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), zE.resize()
	}, this.ix = function(iJ) {
		2 === iJ ? iR.iy[0].iB() : zH()
	}, iR = new iU(L(102), [new aM("⬅️ " + L(10), function() {
		ax.va(1)
	}), new aM(L(103), function() {
		zE.zF()
	}), new aM(L(104), function() {
		zE.zG()
	}), new aM(L(105), function() {
		zE.clear()
	}), new aM(L(106), function() {
		zH()
	})]), zE = new iu(L(107)), iR.iX.appendChild(zE.aH)
}

function zR() {
	var zS, zT, zU = -15e3,
		zV = !1;

	function df(aH) {
		zm() || (zV = !0, zn(aH, 1), bM.aZ.zo(bM.aZ.li), zp(Math.floor(b3.b5 * aH.clientX), Math.floor(b3.b5 * aH.clientY)))
	}

	function zb(aH) {
		zU = bu.bv, zn(aH, 1), bM.aZ.zo(bM.aZ.li), 0 < aH.touches.length && (zS = Math.floor(b3.b5 * aH.touches[0].clientX), zT = Math.floor(b3.b5 * aH.touches[0].clientY), zq.zb(aH) || zp(zS, zT))
	}

	function zp(r, s) {
		ax.df(r, s), 0 === bK.fC ? cB.df(r, s) : zr.xJ(r, s) || zs.df(r, s) || jN.df(r, s) || jS.yB(r, s) || zt.df(r, s) || 0 <= vs.df(r, s) || zu.df(r, s) || gr.zv(r, s) || jS.yC(r, s)
	}

	function dk(aH) {
		zm() || (zV = !0, zn(aH, 1), zx(Math.floor(b3.b5 * aH.clientX), Math.floor(b3.b5 * aH.clientY)))
	}

	function zc(aH) {
		zU = bu.bv, zn(aH, 1), 0 < aH.touches.length && (zS = Math.floor(b3.b5 * aH.touches[0].clientX), zT = Math.floor(b3.b5 * aH.touches[0].clientY), zq.zc(aH) || zx(zS, zT))
	}

	function zx(r, s) {
		ax.dk(r, s), 0 === bK.fC ? cB.dk(r, s) : (zy.zz(r, s), zs.dk(r, s) || (vs.dk(r, s), jS.mO() ? jS.dk(r, s) : fV.a00 ? fV.dk(r) && (bu.dw = !0) : (zw.dk(r, s), e7.dR && e7.dk(r, s) && (bu.dw = !0))))
	}

	function za(aH) {
		zm() || (zn(aH, 1), qV(), 0 === bK.fC ? (cB.click(-1024, -1024), ss.aU()) : (zw.gz(-1024, -1024), vs.dk(-1024, -1024), fV.a01(), e7.dR = !1))
	}

	function zZ(aH) {
		zm() || (zn(aH, 1), a02(Math.floor(b3.b5 * aH.clientX), Math.floor(b3.b5 * aH.clientY), 2 === aH.button), gr.zY && (gr.zY = !1, aH.preventDefault()))
	}

	function click(aH) {
		zm() || zn(aH, 1)
	}

	function zd(aH) {
		zU = bu.bv, zn(aH, 1), aH && aH.touches && 0 < aH.touches.length && 0 !== bK.fC ? e7.dR = !1 : zq.a03() || (a02(zS, zT, !1), gr.zY && (gr.zY = !1, aH.preventDefault()))
	}

	function ze(aH) {
		zU = bu.bv, zn(aH, 1), a02(zS, zT, !1), gr.zY && (gr.zY = !1, aH.preventDefault())
	}

	function zf(aH) {}

	function zg(aH) {}

	function zh(aH) {
		zm() || zn(aH, 0)
	}

	function a02(r, s, yY) {
		qV(), 0 === bK.fC ? cB.click(r, s) : (zw.gz(r, s), zs.gz(), fV.a01(), e7.dR = !1, jS.click(r, s, yY) ? bu.dw = !0 : vs.zZ(r, s))
	}

	function qV() {
		ax.qV()
	}

	function dh(aH) {
		var r, s, deltaY;
		zm() || (zn(aH, 1), bM.aZ.zo(bM.aZ.li), r = Math.floor(b3.b5 * aH.clientX), s = Math.floor(b3.b5 * aH.clientY), deltaY = aH.deltaY, 1 === aH.deltaMode && (deltaY *= 16), ax.dh(r, s, deltaY), 0 === bK.fC ? cB.dh(r, s, deltaY) : zw.dh(r, s,
			deltaY) || (fV.oK(r, s) ? fV.dh(deltaY) && (bu.dw = !0) : e7.dh(r, s, deltaY)))
	}

	function zi(aH) {
		zn(aH, 0)
	}

	function zn(aH, id) {
		0 === id && ax.mO() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cB.mP() && aH.preventDefault()
	}

	function zj(aH) {
		if (__fx.keybindHandler(aH.key)) return;
		zm() || 0 < b3.a05 || (aH = aH.code) && aH.length && (sN.iJ(aH, 18) ? pR.a06(3) : sN.iJ(aH, 22) ? pR.a06(0) : sN.iJ(aH, 20) ? pR.a06(1) : sN.iJ(aH, 24) ? pR.a06(2) : sN.iJ(aH, 10) ? fV.a07(31 / 32) : sN.iJ(aH, 8) ? fV.a07(32 / 31) : sN.iJ(aH,
				6) ? fV.a07(7 / 8) : sN.iJ(aH, 4) ? fV.a07(8 / 7) : sN.iJ(aH, 14) ? 0 !== bK.fC && e7.dh(Math.floor(b3.b4 / 2), Math.floor(b3.b9 / 2), -200) : sN.iJ(aH, 16) ? 0 !== bK.fC && e7.dh(Math.floor(b3.b4 / 2), Math.floor(b3.b9 / 2),
			200) : sN.iJ(aH, 0) ? bK.fC && zy.a08(0) : sN.iJ(aH, 2) ? bK.fC && zy.a08(1) : sN.iJ(aH, 30) ? bK.fC && zy.a08(2) : sN.iJ(aH, 26) ? bK.fC && zy.a09() : sN.iJ(aH, 28) && bK.fC && zy.a0A())
	}

	function zk(aH) {
		if (!zm() && !(0 < b3.a05 || bu.bv < 400)) {
			var code = aH.code;
			if (code && code.length && !("Enter" === code && ax.ix(1) || "Space" === code && ax.ix(0))) return aY.bs ? aY.bm.ix(code) ? void 0 : void("Escape" === code && gr.a0B()) : void(8 !== cB.mP() && cB.ix(aH) ? bu.dw = !0 : "Escape" === code ?
				gr.a0B() : sN.iJ(code, 18) ? pR.a0C(3) : sN.iJ(code, 22) ? pR.a0C(0) : sN.iJ(code, 20) ? pR.a0C(1) : sN.iJ(code, 24) ? pR.a0C(2) : sN.iJ(code, 12) ? zr.xB(!bK.dg) : "Space" === code && bK.fC && (vs.vt && vs.xG(), bK.bY) && zr
				.xE(!1))
		}
	}

	function zl() {
		"hidden" !== document.visibilityState && (bu.dw = !0)
	}

	function zm() {
		return zU + 15e3 > bu.bv
	}

	function resize() {
		b3.a0D()
	}
	this.zW = 0, this.zX = "", this.zY = !1, this.q = function() {
		jh.addEventListener("mousedown", df, {
			passive: !1
		}), jh.addEventListener("mousemove", dk, {
			passive: !1
		}), jh.addEventListener("mouseup", zZ, {
			passive: !1
		}), jh.addEventListener("click", click, {
			passive: !1
		}), jh.addEventListener("mouseleave", za, {
			passive: !1
		}), jh.addEventListener("wheel", dh, {
			passive: !1
		}), jh.addEventListener("touchstart", zb, {
			passive: !1
		}), jh.addEventListener("touchmove", zc, {
			passive: !1
		}), jh.addEventListener("touchend", zd, {
			passive: !1
		}), jh.addEventListener("touchcancel", ze, {
			passive: !1
		}), jh.addEventListener("dragover", zf), jh.addEventListener("drop", zg), jh.addEventListener("dblclick", zh), document.addEventListener("contextmenu", zi), document.addEventListener("keydown", zj), document.addEventListener("keyup",
			zk), document.addEventListener("visibilitychange", zl), window.addEventListener("resize", resize)
	}, this.zv = function(r, s) {
		return !!zr.df(r, s) || !!(zw.df(r, s) || e7.df(r, s) || fV.df(r, s) || bI.df(r, s))
	}, this.gs = zm, this.i3 = function() {
		return !zV || 0 < zU
	}, this.a0B = function() {
		if (!ax.mO()) return 8 === cB.mP() ? bK.dg ? void zr.xB(!1) : zs.mO ? void zs.xG() : void vs.xG() : void(7 !== cB.mP() && 6 === cB.mP() && a0E.tu());
		ax.ix(2)
	}
}

function ip(a0F, a0G) {
	this.v7 = [];
	var a0H = this.v7;

	function click() {
		for (var ai = 0; ai < a0H.length; ai++) a0H[ai].textContent = a0H[ai].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var a8 = parseInt(this.name);
		void 0 !== a0F.a8 && bz.cG.cH(a0F.a8, a8), a0G && a0G(a8)
	}
	for (var a0I, ae = a0F.iq.length, ai = 0; ai < ae; ai++)(a0I = document.createElement("p")).textContent = "⚪ " + a0F.iq[ai], a0I.style.margin = "0", a0I.name = "" + ai, a0I.style.cursor = "pointer", a0I.style.fontSize = "1em", a0I
		.addEventListener("click", click), a0H.push(a0I);
	a0H[a0F.value].textContent = a0H[a0F.value].textContent.replace("⚪", "🟢")
}

function a0J() {
	var a0K;
	this.q = function() {
		a0K = !1
	}, this.fA = function() {
		var o4;
		if (function() {
				if (!a0K) {
					if (bu.gE() % 30 != 9) return;
					if (!aR.bc.a0Q(90)) return;
					a0K = !0
				}
				return 1
			}() && (! function() {
				var aq = bI.a0R(956);
				if (aq) {
					if (aR.bc.w8(aq.player)) return 1;
					bI.a0S(956, 0)
				}
				return
			}() && (-1 === (o4 = (bK.fR ? function() {
				var id = fT.oY(),
					ae = my.mz;
				if (gT.oZ[id])
					for (var pk = my.n0, og = gT.og, ai = 0; ai < ae; ai++) {
						var o4 = pk[ai];
						if (og[o4] !== id) return o4
					} else if (1 < ae) return fZ[ae - 1];
				return -1
			} : function() {
				for (var a0V = my.mz, a0W = my.n0, a0X = fa, ai = 0; ai < a0V; ai++) {
					var o4 = a0W[ai];
					if (0 !== a0X[o4]) return o4
				}
				return -1
			})()) ? ! function() {
				var aq = bI.a0R(957);
				if (aq && aq.a0Y) {
					if (x.yr(aq.a0Y.j4 << 2)) return 1;
					bI.a0S(957, 0)
				}
				return
			}() : (bI.be(0, L(108, [fL.fM[o4]]), 956, o4, aJ.eA, aJ.bg, -1, !0), 0)))) {
			var ae = kD.kE.kF;
			if (0 !== ae)
				for (var c0 = kD.kE.c0, ai = 0; ai < ae; ai++) {
					var j4 = c0[ai];
					if (x.yr(j4 << 2)) return void bI.be(0, L(109, [hQ.j7(j4), hQ.j8(j4)]), 957, 0, aJ.eA, aJ.bg, -1, !0, void 0, {
						gF: 1,
						j4: j4
					})
				}
		}
	}
}

function L(value, a0Z, jm, a0a) {
	var en = "number" == typeof value ? ln.a0b[value] : value;
	if (jm && ln.a0c() && (en = jm), !a0Z) return a0a ? en.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : en;
	for (var ae = a0Z.length, ai = 0; ai < ae; ai++)
		for (var gF = 0; gF < 3; gF++) en = en.replace("{" + (10 * gF + ai) + "}", a0Z[ai]);
	return en
}

function a0d() {
	this.a0e = function(canvas, a0f, ho) {
		var b4 = canvas.width,
			b9 = canvas.height,
			iJ = aR.az.wJ(b4, b9),
			uH = aR.az.getContext(iJ, !0),
			canvas = (uH.drawImage(canvas, 0, 0), uH.getImageData(0, 0, b4, b9));
		return a0f(canvas.data, b4, b9, ho), uH.putImageData(canvas, 0, 0), iJ
	}, this.a0g = function(wQ, b4, b9) {
		for (var r = b4 - 1; 0 <= r; r--)
			for (var s = b9 - 1; 0 <= s; s--) {
				var ai = 4 * (r + s * b4);
				wQ[3 + ai] = wQ[ai], wQ[ai] = wQ[1 + ai] = wQ[2 + ai] = 255
			}
	}, this.a0h = function(wQ, b4, b9) {
		for (var r = b4 - 1; 0 <= r; r--)
			for (var s = b9 - 1; 0 <= s; s--) {
				var ai = 4 * (r + s * b4);
				wQ[1 + ai] > wQ[2 + ai] + 10 && (wQ[3 + ai] = wQ[ai], wQ[1 + ai] = wQ[2 + ai])
			}
	}, this.a0i = function(wQ, b4, b9, ho) {
		for (var gap = Math.floor(Math.min(b4, b9) * ho), r = 0; r < b4; r++)
			for (var ai, s = 0; s < b9; s++)(r < gap || s < gap || b4 - gap <= r || b9 - gap <= s) && (wQ[3 + (ai = 4 * (r + s * b4))] = 255 - 255 * (wQ[1 + ai] - wQ[ai]) / (255 - wQ[ai]))
	}, this.a0j = function(wQ, b4, b9, ho) {
		for (var r = b4 - 1; 0 <= r; r--)
			for (var s = b9 - 1; 0 <= s; s--) {
				var ai = 4 * (r + s * b4);
				wQ[ai] = ho[0], wQ[1 + ai] = ho[1], wQ[2 + ai] = ho[2]
			}
	}, this.a0k = function(wQ, b4, b9, ho) {
		for (var gap = Math.floor(b4 * ho), r = 0; r < b4; r++)
			for (var ai, s = 0; s < b9; s++)(r < gap || s < gap || b4 - gap <= r || b9 - gap <= s) && (wQ[ai = 4 * (r + s * b4)] = wQ[1 + ai] = wQ[2 + ai] = 0)
	}, this.a0l = function(wQ, b4, b9) {
		for (var s, ai, r = b4 - 1; 0 <= r; r--)
			for (s = b9 - 1; 0 <= s; s--) 200 < wQ[1 + (ai = 4 * (r + s * b4))] && wQ[1 + ai] - 20 > wQ[ai] && wQ[1 + ai] - 20 > wQ[2 + ai] ? wQ[ai] + wQ[2 + ai] < 40 ? wQ[3 + ai] = 0 : (wQ[3 + ai] = wQ[ai], wQ[ai] = 255, wQ[1 + ai] = 255, wQ[2 +
				ai] = 255) : wQ[ai] < 50 && wQ[1 + ai] < 50 && wQ[2 + ai] < 50 && (wQ[ai] + wQ[1 + ai] + wQ[2 + ai] < 50 ? wQ[3 + ai] = 180 : wQ[3 + ai] = 180 + Math.floor(75 * (wQ[ai] + wQ[1 + ai] + wQ[2 + ai] - 50) / 100))
	}, this.a0m = function(wQ, b4, b9) {
		for (var s, ai, r = b4 - 1; 0 <= r; r--)
			for (s = b9 - 1; 0 <= s; s--) wQ[1 + (ai = 4 * (r + s * b4))] > wQ[ai] + 20 && wQ[1 + ai] > wQ[2 + ai] + 20 && wQ[ai] + wQ[2] < 40 && (wQ[3 + ai] = 255 - wQ[1 + ai], wQ[ai] = wQ[1 + ai] = wQ[2 + ai] = wQ[ai])
	}, this.a0n = function(wQ, b4, b9, ho) {
		for (var oo = b4 >> 1, r = 0; r < b4; r++)
			for (var s = 0; s < b9; s++) Math.sqrt((r - oo) * (r - oo) + (s - oo) * (s - oo)) > ho * oo && (wQ[4 * (r + s * b4) + 3] = 0)
	}
}

function a0o() {
	var iR, iS, a0p, ii;

	function iV() {
		u7.cC(), ax.ib()[19] = null, ax.ic()
	}

	function a0x() {
		a12(), a10()
	}

	function a12() {
		a0p.v1.lastChild && ax.removeChild(a0p.v1, a0p.v1.lastChild)
	}

	function a10() {
		var a13 = t.a14(bK.data);
		bK.data.canvas = t.a15(a13, bK.data.mapSeed).a16, a11()
	}

	function a11() {
		var mD = bK.data.canvas;
		mD.style.width = "100%", a0p.v1.appendChild(mD)
	}
	this.uD = function(mD) {
		bK.data.canvas && a12(), bK.data.canvas = mD, a11()
	}, this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(58), [new aM("⬅️ " + L(10), iV)]), 2 === bK.data.mapType && u7.q(), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), hW.io(new ip({
			iq: [L(110), L(111), L(112)],
			value: bK.data.mapType
		}, function(a8) {
			2 === (bK.data.mapType = a8) ? (u7.q(), bK.data.canvas = null) : (bK.data.passableWater = bK.data.passableMountains = 1, u7.cC()), ax.gu(20)
		})), 2 <= bK.data.mapType && (hW.ir(new is), hW.ir(new it({
			value: bK.data.passableWater
		}, L(113), function(value) {
			bK.data.passableWater = value
		})), hW.ir(new it({
			value: bK.data.passableMountains
		}, L(114), function(value) {
			bK.data.passableMountains = value
		})));
		ii.push(hW)
	}(ii = []), function(ii) {
		if (0 === bK.data.mapType) {
			for (var hW = new il, iq = (hW.im(L(58)), []), ai = 0; ai < t.fF.a0w.length; ai++) iq.push(t.fF.fG[t.fF.a0w[ai]].name);
			hW.io(new ip({
				iq: iq,
				value: bK.data.mapProceduralIndex
			}, function(a8) {
				bK.data.mapProceduralIndex = a8, a0x()
			})), ii.push(hW)
		}
	}(ii), function(ii) {
		if (1 === bK.data.mapType) {
			for (var hW = new il, iq = (hW.im(L(58)), []), ai = 0; ai < t.fF.a0y.length; ai++) iq.push(t.fF.fG[t.fF.a0y[ai]].name);
			hW.io(new ip({
				iq: iq,
				value: bK.data.mapRealisticIndex
			}, function(a8) {
				bK.data.mapRealisticIndex = a8, a0x()
			})), ii.push(hW)
		}
	}(ii), function(ii) {
		var hW;
		2 === bK.data.mapType && ((hW = new il).im(L(115)), hW.ir(new a7(bz.c0.data[162], 1)), hW.im(L(116), "0.8em"), hW.ir(new m4([new aM(L(117), function() {
			return u7.u5(), !0
		}).button])), ii.push(hW))
	}(ii), function(ii) {
		var hW, a6;
		2 === bK.data.mapType && ((hW = new il).im(L(118)), a6 = new a7({
			a8: -1,
			value: bK.data.mapName
		}, 0, 0, function(aH) {
			bK.data.mapName = aH.target.value = aH.target.value.slice(0, 20)
		}), hW.ir(a6), ii.push(hW))
	}(ii), function(ii) {
		var hW, a6, vf;
		0 === bK.data.mapType && ((hW = new il).im("Seed"), a6 = new a7({
			a8: -1,
			value: bK.data.mapSeed
		}, 1, 0, function(aH) {
			aH = Math.abs(Math.floor(aH.target.value)) % 16384;
			bK.data.mapSeed !== aH && (bK.data.mapSeed = aH, a0x())
		}), vf = new aM(L(17), function(aH) {
			var a0z = Math.floor(16384 * Math.random());
			if (bK.data.mapSeed !== a0z) return a6.aH.value = bK.data.mapSeed = a0z, a0x(), !0
		}), hW.ir(a6), hW.ir(new m4([vf.button])), ii.push(hW))
	}(ii), function(ii) {
		(a0p = new il).im(L(119)), 2 !== bK.data.mapType ? a10() : bK.data.canvas && a11();
		ii.push(a0p)
	}(ii), ii))
}

function a17() {
	var iJ = aR.color;
	this.fY = iJ.nk(0, 0, 0), this.e9 = iJ.a18(0, 0, 0, .7), this.aL = iJ.a18(0, 0, 0, .5), this.gI = iJ.a18(0, 0, 0, .85), this.bg = iJ.a18(0, 0, 0, .75), this.aK = iJ.a18(0, 0, 0, .6), this.a19 = iJ.a18(0, 0, 0, .35), this.eA = iJ.nk(255, 255,
		255), this.gM = iJ.a18(255, 255, 255, .3), this.sx = iJ.a18(255, 255, 255, .6), this.su = iJ.a18(255, 255, 255, .4), this.t8 = iJ.a18(255, 255, 255, .25), this.fW = iJ.a18(255, 255, 255, .85), this.a1A = iJ.a18(255, 255, 255, .75), this.a1B =
		iJ.a18(255, 255, 255, .15), this.a1C = iJ.a18(255, 255, 255, .11), this.pq = iJ.nk(128, 128, 128), this.a1D = iJ.a18(64, 64, 64, .75), this.a1E = iJ.a18(88, 88, 88, .83), this.iK = iJ.a18(60, 60, 60, .85), this.a1F = iJ.a18(80, 60, 60, .85),
		this.a1G = iJ.nk(170, 170, 170), this.a1H = iJ.nk(200, 235, 245), this.a1I = iJ.nk(30, 255, 30), this.a1J = iJ.nk(0, 200, 0), this.a1K = iJ.nk(128, 255, 128), this.a1L = iJ.a18(10, 65, 10, .75), this.a1M = iJ.a18(0, 255, 0, .6), this.a1N = iJ
		.a18(0, 255, 0, .5), this.a1O = iJ.a18(0, 200, 0, .5), this.r5 = iJ.a18(0, 100, 0, .75), this.a1P = iJ.a18(0, 60, 0, .8), this.gK = iJ.a18(0, 255, 0, .3), this.y1 = iJ.a18(0, 180, 0, .6), this.a1Q = iJ.a18(0, 120, 0, .85), this.a1R = iJ.nk(0,
			120, 0), this.a1S = iJ.a18(0, 70, 0, .85), this.a1T = iJ.nk(190, 230, 190), this.a1U = iJ.nk(0, 255, 0), this.a1V = iJ.nk(255, 120, 120), this.a1W = iJ.nk(255, 160, 160), this.a1X = iJ.nk(255, 70, 70), this.a1Y = iJ.nk(230, 0, 0), this
		.sw = iJ.a18(220, 0, 0, .6), this.a1Z = iJ.a18(255, 100, 100, .8), this.a1a = iJ.a18(100, 0, 0, .85), this.a1b = iJ.a18(60, 0, 0, .85), this.y2 = iJ.a18(200, 0, 0, .6), this.nK = iJ.a18(120, 0, 0, .85), this.a1c = iJ.nk(255, 70, 10), this
		.a1d = iJ.nk(230, 190, 190), this.a1e = iJ.nk(255, 0, 0), this.a1f = iJ.nk(255, 0, 255), this.a1g = iJ.a18(60, 0, 60, .85), this.a1h = iJ.a18(0, 60, 60, .85), this.a1i = iJ.a18(10, 60, 60, .9), this.a1j = iJ.a18(0, 96, 96, .75), this.a1k = iJ
		.nk(0, 255, 255), this.bf = iJ.nk(160, 160, 255), this.gH = iJ.a18(0, 40, 90, .75), this.y4 = iJ.a18(0, 0, 255, .6), this.a1l = iJ.nk(200, 200, 255), this.a1m = iJ.a18(50, 50, 255, .83), this.gG = iJ.a18(20, 90, 150, .75), this.a1n = iJ.nk(
			255, 120, 100), this.a1o = iJ.a18(255, 255, 0, .5), this.gL = iJ.a18(255, 255, 150, .2), this.iD = iJ.nk(255, 255, 0), this.a1p = iJ.nk(255, 255, 200), this.y3 = iJ.a18(200, 200, 0, .6), this.a1q = iJ.a18(140, 120, 0, .75), this.a1r = iJ
		.a18(180, 160, 40, .75), this.a1s = iJ.a18(70, 50, 20, .85), this.a1t = iJ.a18(30, 30, 0, .85), this.a1u = iJ.a18(60, 60, 0, .85), this.a1v = iJ.nk(255, 255, 100), this.a1w = iJ.nk(255, 255, 140), this.a1x = iJ.a18(255, 140, 0, .75), this
		.a1y = iJ.a18(70, 40, 0, .85), this.a1z = iJ.nk(255, 150, 0), this.a20 = iJ.a18(255, 200, 80, .85), this.a21 = iJ.a18(0, 0, 0, 0), this.aO = iJ.a18(255, 255, 255, 0), this.rM = iJ.a18(254, 254, 254, 0)
}

function a22() {
	var iR, iS, iT;

	function iV() {
		iZ(), 3 !== bK.data.botDifficultyType || aR.ie.ig(bK.data.botDifficultyData) || (bK.data.botDifficultyType = 0), 3 !== bK.data.botDifficultyType && (bK.data.botDifficultyData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		3 === bK.data.botDifficultyType && aR.ie.j0(iT.f7(), bK.data.botDifficultyData, wX.a23.length - 1)
	}

	function a24(ii, a8) {
		var hW = new il,
			value = (hW.im(a8 < 0 ? L(120) : L(50) + " " + gT.jb[a8 % 9]), 0 <= a8 && (hW.jd(L(23) + ": " + bK.data.teamPlayerCount[a8]).style.marginBottom = "1em"), a8 < 0 ? bK.data.botDifficultyValue : bK.data.botDifficultyTeam[a8]);
		hW.io(new ip({
			iq: wX.a23,
			value: value
		}, function(jc) {
			a8 < 0 ? bK.data.botDifficultyValue = jc : bK.data.botDifficultyTeam[a8] = jc
		})), ii.push(hW)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(120), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, function() {
		var ii = [];
		if (function(ii) {
				var hW = new il,
					iq = (hW.im(L(11)), [L(36), L(121), L(122), L(14)]),
					value = bK.data.botDifficultyType;
				0 === bK.data.gameMode && (value = Math.min(value, 2), iq.splice(2, 1));
				hW.io(new ip({
					iq: iq,
					value: value
				}, function(a8) {
					iZ(), bK.data.botDifficultyType = a8, 0 === bK.data.gameMode && 2 === a8 && (bK.data.botDifficultyType = 3), 3 !== bK.data.botDifficultyType || bK.data.botDifficultyData || (bK.data.botDifficultyData =
						new Uint8Array(bK.g6)), 2 !== bK.data.botDifficultyType || bK.data.botDifficultyTeam || (bK.data.botDifficultyTeam = new Uint8Array(9)), ax.gu(25)
				})), ii.push(hW)
			}(ii), 0 === bK.data.botDifficultyType) a24(ii, -1);
		else if (2 === bK.data.botDifficultyType)
			for (var ai = 0; ai < bK.data.teamPlayerCount.length; ai++) bK.data.teamPlayerCount[ai] && a24(ii, ai);
		else 3 === bK.data.botDifficultyType && ! function(ii) {
			var hW = new il;
			hW.im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.botDifficultyData, 8)), hW.ir(iT), ii.push(hW)
		}(ii);
		return ii
	}())
}

function a25() {
	function a2L() {
		t.a2M.fA()
	}

	function a2Y(o4, a2W) {
		0 < a2W && (t.a2X[o4] += a2W, t.a2X[o4 + 1] += a2W, t.a2X[o4 + 2] += a2W)
	}

	function kV(o4) {
		return t.a2X[o4 + 2] > t.a2X[o4] && t.a2X[o4 + 2] > t.a2X[o4 + 1]
	}
	this.se = -1, this.nD = 0, this.a26 = 0, this.a27 = 8, this.a28 = 32, this.a29 = 8, this.a2A = 32, this.a2B = [0, 0], this.a2C = [0, 0, 0, 0], this.eK = null, this.a2D = !0, this.a2E = !1, this.a2F = function() {
		-1 !== this.se && clearTimeout(this.se), this.se = -1, this.eK = null, a2G.a2H()
	}, this.q = function() {
		7 === cB.mP() || this.a2E || (this.a2D = !0, this.nD = 0, this.a26 = 1, this.a2B = [t.fF.fG[t.fH].a2I[0], t.fF.fG[t.fH].a2J[0]], this.a2C = [t.fF.fG[t.fH].a2K[3], t.fF.fG[t.fH].a2K[4], t.fF.fG[t.fH].a2K[5], t.fF.fG[t.fH].a2K[6]], this
			.a27 = t.fF.fG[t.fH].a2K[7], this.a28 = t.fF.fG[t.fH].a2K[8], this.a29 = t.fF.fG[t.fH].a2K[9], this.a2A = t.fF.fG[t.fH].a2K[10], this.a2D ? this.se = setTimeout(a2L, 16) : this.fA())
	}, this.fA = function() {
		if (8 === cB.mP() && di.pG()) this.se = setTimeout(a2L, 16);
		else {
			if (0 === this.nD) {
				var a0z = kJ.a2N();
				if (kJ.a2O(t.fF.fG[t.fH].a2K[2]), a2G.ha([t.u, t.v, t.fF.fG[t.fH].a2K[0], t.fF.fG[t.fH].a2K[1]]), kJ.a2O(a0z), this.eK = a2G.a2P(), this.nD++, this.a2D) return void(this.se = setTimeout(a2L, 16))
			}
			for (var o4, j4, a0z = this.a2D ? 10 : 1e6, a0z = t.v - this.a26 - 1 < a0z ? t.v - this.a26 - 1 : a0z, a2Q = this.a26 + a0z, s = this.a26; s < a2Q; s++)
				for (var r = 1; r < t.u - 1; r++) kV(o4 = 4 * (j4 = r + s * t.u)) ? this.a2R(o4, j4, 1) : (this.a2R(o4, j4, 0), function(r, s, o4) {
					return 1 < r && kV(o4 - 4) || r < t.u - 2 && kV(o4 + 4) || 1 < s && kV(o4 - 4 * t.u) || s < t.v - 2 && kV(o4 + 4 * t.u)
				}(r, s, o4) && this.a2T(r, s));
			this.a26 = a2Q, this.a26 >= t.v - 1 ? (t.a2U.putImageData(t.a2V, 0, 0, 1, 1, t.u - 2, t.v - 2), bu.dw = !0, this.a2F()) : this.a2D && (this.se = setTimeout(a2L, 16))
		}
	}, this.a2R = function(o4, j4, a8) {
		a2Y(o4, Math.floor(this.a2B[a8] + this.a2C[a8] * this.eK[j4] / 1e4) - t.a2X[o4])
	}, this.a2Z = function(o4, oo, a2a, a8, a2C) {
		a2Y(o4, Math.floor(this.a2B[a8] + (1 - oo / a2a) * a2C) - t.a2X[o4])
	}, this.a2T = function(ds, dt) {
		for (var o4, oo, a2a, sT = ds - this.a28, a2b = dt - this.a28, a2c = ds + this.a28, a2Q = dt + this.a28, sT = sT < 1 ? 1 : sT, a2c = a2c > t.u - 2 ? t.u - 2 : a2c, a2Q = t.v - 2 < a2Q ? t.v - 2 : a2Q, s = a2b < 1 ? 1 : a2b; s <= a2Q; s++)
			for (var r = sT; r <= a2c; r++) kV(o4 = 4 * (r + s * t.u)) ? (a2a = this.a27 + (this.a28 - this.a27) * this.eK[r + t.u * s] / 1e4, Math.abs(ds - r) > a2a || Math.abs(dt - s) > a2a || a2a <= (oo = Math.sqrt((ds - r) * (ds - r) + (dt -
				s) * (dt - s))) || this.a2Z(o4, oo, a2a, 1, this.a2C[3])) : (a2a = this.a29 + (this.a2A - this.a29) * this.eK[r + t.u * s] / 1e4, Math.abs(ds - r) > a2a || Math.abs(dt - s) > a2a || a2a <= (oo = Math.sqrt((ds - r) * (ds - r) +
				(dt - s) * (dt - s))) || this.a2Z(o4, oo, a2a, 0, this.a2C[2]))
	}
}

function a2d() {
	var a2f;

	function a2j(player) {
		var oo, a2m;
		return aR.bc.ms(player) && player < bK.gd ? 0 : (oo = a2f[je.kI((bK.g6 - 1) * fL.ge[player], bK.a2l)], bu.gE() < 1920 && (oo = Math.max(je.kI(100 * (13440 - 6 * bu.gE()), 1920), oo)), a2m = a2n.a2o(player), fL.jD[player] > a2m && (oo -= je
			.kI(2 * oo * (fL.jD[player] - a2m), a2m)), Math.min(Math.max(oo, 0), 700))
	}

	function a38(du) {
		for (var ge = fL.ge, n0 = my.n0, ai = my.mz - 1; 0 <= ai; ai--) {
			var o4 = n0[ai];
			aR.bc.md(o4, je.kI(du * ge[o4], 32))
		}
	}

	function a35() {
		var a3C = bK.bL;
		oi.a3D[0] = fL.jD[a3C] - fL.a3E[a3C]
	}

	function a37(a8) {
		var a3C = bK.bL,
			a3C = fL.jD[a3C] - fL.a3E[a3C] - oi.a3D[0];
		a2n.a2e += a3C, jB.jC[a8] += a3C
	}
	this.a2e = 0, this.a2g = function() {
		for (var ae = bK.g6, ai = (a2f = new Uint16Array(ae), 0); ai < ae; ai++) a2f[ai] = 100 + a2h(je.kI(25600 * ai, ae - 4), 9)
	}, this.q = function() {
		(this.a2e = 0) === bK.data.iIncomeType ? this.a2i = a2j : 1 === bK.data.iIncomeType ? this.a2i = function(player) {
			return je.kI(bK.data.iIncomeValue * a2j(player), 64)
		} : this.a2i = function(player) {
			return je.kI(bK.data.iIncomeData[player] * a2j(player), 64)
		}
	}, this.fA = function() {
		if (bu.gE() % 10 == 9 && (a2n.a2e = 0, function() {
				a35();
				for (var n0 = my.n0, jD = fL.jD, ai = my.mz - 1; 0 <= ai; ai--) {
					var o4 = n0[ai],
						a36 = je.kI(a2n.a2i(o4) * jD[o4], 1e4);
					aR.bc.md(o4, Math.max(a36, 1))
				}
				a37(9)
			}(), function() {
				if (0 !== bK.data.aIncomeType) {
					if (a35(), 1 === bK.data.aIncomeType)
						for (var ge = fL.ge, n0 = my.n0, du = bK.data.aIncomeValue, ai = my.mz - 1; 0 <= ai; ai--) {
							var o4 = n0[ai];
							aR.bc.md(o4, je.kI(du * ge[o4], 128))
						} else 2 === bK.data.aIncomeType && function() {
							for (var ge = fL.ge, n0 = my.n0, du = bK.data.aIncomeData, ai = my.mz - 1; 0 <= ai; ai--) {
								var o4 = n0[ai];
								aR.bc.md(o4, je.kI(du[o4] * ge[o4], 128))
							}
						}();
					a37(18)
				}
			}(), bu.gE() % 100 == 99)) {
			if (a35(), 0 === bK.data.tIncomeType) a38(32);
			else if (1 === bK.data.tIncomeType) a38(bK.data.tIncomeValue);
			else
				for (var ge = fL.ge, n0 = my.n0, du = bK.data.tIncomeData, ai = my.mz - 1; 0 <= ai; ai--) {
					var o4 = n0[ai];
					aR.bc.md(o4, je.kI(du[o4] * ge[o4], 32))
				}
			a37(8)
		}
	}, this.a2o = function(player) {
		return Math.min(100 * fL.ge[player], bK.a2p)
	}, this.yN = function(player, a2q) {
		a2r.a2s(player, a2q, oi.a2t[0], 0), aR.bc.md(a2q, oi.a2t[0]), jB.a2u(player, a2q), dq.a2v(player, oi.a2t[0] + oi.a2t[1]), dq.a2w(a2q, oi.a2t[0]), aR.bc.a2x(player)
	}, this.a2y = function() {
		for (var ae = my.mz, pk = my.n0, kG = 0, a2z = fL.jD, ai = 0; ai < ae; ai++) kG += a2z[pk[ai]];
		return kG
	}, this.a30 = function(a31) {
		for (var o4, ae = my.mz, pk = my.n0, kG = 0, a2z = fL.jD, og = gT.og, ai = 0; ai < ae; ai++) og[o4 = pk[ai]] === a31 && (kG += a2z[o4]);
		return kG
	}
}

function a3F() {
	this.bx = new a3G, this.lc = new a3H, this.cY = new a3I, this.q = function() {
		this.bx.q()
	}
}

function eb() {
	function a3V(r, ae, s, a3N, sU, a3f, player) {
		if (!(s < 1 || sU < s))
			for (var ai = 0; ai <= ae; ai++) {
				var dx = hQ.a3g(r, s);
				if (h4.ak.a3h(dx) && !aR.ie.has(a3N, x.a3Q(dx)) && x.a3i(dx, player)) return dx >> 2;
				r += a3f
			}
		return -1
	}

	function a3Z(s, ae, r, a3N, a3T, a3f, player) {
		if (!(r < 1 || a3T < r)) {
			ae = Math.max(ae, 0);
			for (var ai = 0; ai <= ae; ai++) {
				var dx = hQ.a3g(r, s);
				if (h4.ak.a3h(dx) && !aR.ie.has(a3N, x.a3Q(dx)) && x.a3i(dx, player)) return dx >> 2;
				s += a3f
			}
		}
		return -1
	}

	function a3d(tN, tO, a3J) {
		return -1 !== tO && (-1 === tN || hQ.a3e(tO, a3J) < hQ.a3e(tN, a3J)) ? tO : tN
	}
	this.yk = function(player, a3J) {
		if (h4.eY.a3K(player))
			for (var a3L = hQ.a3M(), a3N = [];;) {
				var a3O = function(a3J, a3L, a3N, player) {
					for (var kR = hQ.j7(a3J), kS = hQ.j8(a3J), a3T = t.u - 2, sU = t.v - 2, a3U = -1, iP = 0; iP < a3L; iP++) {
						var sT = Math.max(kR - iP, 1),
							a2b = Math.max(kS - iP, 1),
							a2c = Math.min(kR + iP, a3T),
							a2Q = Math.min(kS + iP, sU),
							tN = a3V(kR, a2c - kR, kS - iP, a3N, sU, 1, player),
							tO = a3V(kR - 1, kR - sT - 1, kS - iP, a3N, sU, -1, player),
							a2c = a3V(kR, a2c - kR, kS + iP, a3N, sU, 1, player),
							sT = a3V(kR - 1, kR - sT - 1, kS + iP, a3N, sU, -1, player),
							a3Y = a3Z(kS, a2Q - kS - 1, kR - iP, a3N, a3T, 1, player),
							a3a = a3Z(kS - 1, kS - a2b - 2, kR - iP, a3N, a3T, -1, player),
							a2Q = a3Z(kS, a2Q - kS - 1, kR + iP, a3N, a3T, 1, player),
							a2b = a3Z(kS - 1, kS - a2b - 2, kR + iP, a3N, a3T, -1, player);
						if (a3U = a3d(a3U, tN, a3J), a3U = a3d(a3U, tO, a3J), a3U = a3d(a3U, a2c, a3J), a3U = a3d(a3U, sT, a3J), a3U = a3d(a3U, a3Y, a3J), a3U = a3d(a3U, a3a, a3J), a3U = a3d(a3U, a2Q, a3J), 0 <= (a3U = a3d(a3U, a2b, a3J)) &&
							iP * iP >= hQ.a3e(a3U, a3J)) return a3U
					}
					return -1
				}(a3J, a3L, a3N, player);
				if (-1 === a3O) break;
				var id = x.a3Q(hQ.kW(a3O));
				if (h4.ak.a3R(player, id)) return !! function(player, a3O, a3J) {
					for (var a3j = hQ.a3k(a3O, a3J), ai = 0; ai < 4; ai++) {
						var j4 = hQ.a3l(a3O, a3j);
						if (x.a3m(hQ.kW(j4), player)) return oi.yl[6] = a3j, 1;
						a3j = (a3j + 1) % 4
					}
					return
				}(player, a3O, a3J) && (oi.yl[7] = a3O, !0);
				a3N.push(id)
			}
		return !1
	}
}

function a3n() {
	this.yP = function(player, j4) {
		aR.bc.a3o(0) && aR.bc.ye(player) && hQ.a3p(j4) && (zK.zL.sF(0, player, j4), bK.jT.fJ(player, j4))
	}, this.yU = function(player, a3q, mV) {
		aR.bc.a3o(1) && aR.bc.ye(player) && aR.bc.a3r(player, mV) && aR.bc.a3s(player, a3q, 12, 0) && aR.bc.a3t(player, mV) && ((mV = ks.mi(player, oi.a3v[0])) || ks.mj(player)) && (fL.a3w[player]++, zK.zL.sF(1, player, a3q, oi.a3v[0]), kD.a3x
			.a3y(player, mV)) && (aR.bc.a2x(player), jB.a3z(player, a3q), kD.a3x.a40(player))
	}, this.a41 = function(player, a3q, a2q) {
		aR.bc.a3o(1) && aR.bc.ye(player) && bK.fR && aR.bc.a3r(player, a2q) && aR.bc.a42(player, a2q) && aR.bc.a43(player, aR.bc.a44(player, a3q), a2q) && yK.fJ(a2q, oi.a2t[0]) && (zK.zL.sF(2, player, a3q, a2q), a2n.yN(player, a2q))
	}, this.bb = function(player, a3q, a45) {
		oi.yl[1] = 7 & a45;
		var j4 = a45 >> 3;
		aR.bc.a3o(1) && aR.bc.ye(player) && hQ.a3p(j4) && h4.eY.a3K(player) && h4.eY.a46(j4) && aR.bc.a3s(player, a3q, 32, 0) && h4.eS.a47(player, j4, 1) && (jB.a48(player), zK.zL.sF(3, player, a3q, a45), aR.bc.a2x(player), a49.m7.bb(player), h4
			.aZ.a4A(player))
	}, this.bh = function(player, a3q, pJ) {
		849 === a3q ? this.a4B(player, pJ) : aR.bc.a3o(1) && aR.bc.ye(player) && aR.bc.a3s(player, a3q, 32, 0) && h4.ef.a4C(player, pJ) && (jB.a48(player), zK.zL.sF(4, player, a3q, pJ), aR.bc.a2x(player), a49.m7.bh(player), h4.aZ.a4A(player))
	}, this.a4B = function(player, pJ) {
		aR.bc.a3o(1) && aR.bc.ye(player) && h4.ej.fA(player, pJ) && zK.zL.sF(4, player, 849, pJ)
	}, this.a4D = function(player, mV) {
		513 === mV ? this.a0A(player) : aR.bc.a3o(1) && aR.bc.ye(player) && (mV = Math.min(mV, bK.g6), ks.mi(player, mV)) && (zK.zL.sF(5, player, mV), ks.mZ(player, mV))
	}, this.a4E = function(player, bH) {
		(aR.bc.a3o(1) || aR.bc.a3o(2)) && aR.bc.ye(player) && (bH = je.jf(bH, 0, 1023), zK.zL.sF(6, player, bH), dq.a4F(player, 0, bH))
	}, this.a4G = function(player, a4H) {
		zu.a4I(player) && (zK.zL.sF(7, player, a4H), zu.a4J(player, a4H))
	}, this.a4K = function(player) {
		(aR.bc.a3o(0) || aR.bc.a3o(1)) && aR.bc.ye(player) && vs.a4L(player) && (zK.zL.sF(8, player), a4M.a4K(player))
	}, this.a4N = function(player) {
		zK.zL.sF(9, player), a4M.a4N(player)
	}, this.a0A = function(player) {
		zu.a4O(player) && (zK.zL.sF(5, player, 513), zu.a0A(player))
	}, this.yX = function(player, a3q, j4, mV) {
		aR.bc.a3o(1) && aR.bc.ye(player) && aR.bc.a3r(player, mV) && aR.bc.a3t(player, mV) && hQ.a3p(j4) && yn.yo.a4P(player, j4) && (ks.mi(player, oi.a3v[0]) || ks.mj(player)) && (zK.zL.sF(10, player, (a3q << 10) + oi.a3v[0], j4), mV = aR.bc
			.a4Q(player, a3q), fL.kn[player].push(oi.a4R[0]), ks.fJ(player, mV, oi.a3v[0]), a4S.wA(player, !0), jB.a4T(player))
	}
}

function c9() {
	var a4U = [],
		a4V = [],
		a4W = 0;

	function a4X(nu, wp, wq, a4c) {
		var ae = nu.length;
		if (0 === ae) return "";
		var en = "@" + nu[0];
		if (1 === ae) return en + wp + a4c;
		for (var ai = 1; ai < ae - 1; ai++) en += ", @" + nu[ai];
		return en + " and @" + nu[ae - 1] + wq + a4c
	}
	this.q = function() {
		var en = a4X(a4V, " is", " are", " in the lobby!");
		en.length && aY.message.q7({
			id: 7,
			ap: en
		}), a4U = [], a4V = [], a4W = 0
	}, this.a4Y = function(a4Z) {
		return aY.bj !== a4Z && (a4Z = cI.bx.t3(a4Z, 5), !!bz.r4.a4a(a4Z)) && (a4V.push(a4Z), !0)
	}, this.join = function(player) {
		aY.bj !== player.d8 && (player = cI.bx.t3(player.d8, 5), bz.r4.a4a(player)) && a4U.push(player)
	}, this.a4b = function() {
		var wp, wq;
		++a4W < 3 || (a4W = 0, wp = a4X(a4V, "", "", " entered the lobby!"), (wp = (wq = a4X(a4U, "", "", " joined a game!")).length ? wp.length ? wp + " " + wq : wq : wp).length && aY.message.q7({
			id: 7,
			ap: wp
		}), a4U = [], a4V = [])
	}
}

function a4d() {
	this.q = function() {
		if (0 === bK.data.sResourcesType) {
			for (var a4h = bK.gd, jD = fL.jD, ai = 0; ai < a4h; ai++) jD[ai] = 512;
			var a4i = bK.a4j,
				a4k = wX.a4k,
				mW = wX.mW;
			for (ai = a4h; ai < a4i; ai++) jD[ai] = a4k[mW[ai]]
		} else(1 === bK.data.sResourcesType ? function() {
			for (var ae = bK.a4j, jD = fL.jD, sResourcesValue = bK.data.sResourcesValue, ai = 0; ai < ae; ai++) jD[ai] = sResourcesValue
		} : function() {
			for (var ae = bK.a4j, jD = fL.jD, sResourcesData = bK.data.sResourcesData, ai = 0; ai < ae; ai++) jD[ai] = sResourcesData[ai]
		})();
		jB.jC[8] = fL.jD[bK.bL]
	}
}

function a3H() {
	this.vO = function(size) {
		for (var a4l = cM, nu = [], ai = 0; ai < size; ai++) nu.push(String.fromCharCode(a4l.cR(16)));
		return nu.join("")
	}, this.a4m = function(en) {
		return 20 < (en = en.trim()).length ? en.substring(0, 20) : en
	}
}

function a4n() {
	function a4p() {
		if (2 === bK.fC) return 1;
		zu.a4s(), bK.fC = 2, bK.a4t = bK.a4u
	}

	function a4q() {
		jy.a4v.ju(), jN.show(1 === bK.a4w, !1, 2 === bK.a4w), jy.result.ju(), jy.a4x.fA(), jy.a4y.fA(), jy.a4y.a4z(), bI.a50(!0), bI.a51(247), bI.a51(956), bI.a51(957), zw.gC(!0), jF.gC(!0), zu.gC(), zr.xK(), bK.bY && bu.a52.a53(), bu.dw = !0, jU
		.p(), bA.bB.setState(0)
	}
	this.a4o = function() {
		a4p() || (bK.jx = 2, a4q())
	}, this.a4r = function() {
		a4p() || (bK.jx = 1, a4q())
	}
}

function a54() {
	var a55, a56, a57, a58, a59, a8 = 0,
		bv = bu.bv;

	function a5D() {
		! function() {
			if (!bK.j9) return;
			if (bK.bX) return;
			if (2 !== bK.fC)
				if (a59 % 7 != 0) a59++;
				else if (a58 === bK.a5H) {
				if (!a5G()) return;
				jF.a5I(a58), bK.jT.fA()
			} else {
				if (!a5G()) return;
				a59++, a58++, dq.jP(), dq.gC(!0)
			}
			return 1
		}() && a5G() && vv()
	}

	function a5E() {
		a8 = 0, (bK.j9 ? (bu.dw = jF.a5I(a58 - (a59 % 7 == 0 ? 0 : 1) + a59 % 7 / 7) || bu.dw, vq) : vs.vt || !zr.x5 ? vq : (bu.dw = !0, vw))()
	}

	function a5G() {
		var ai, ae, a5J = zK.zL.s7,
			sG = zK.zL.s8,
			sH = zK.zL.s9,
			mA = zK.zL.sA,
			a5K = zK.zL.sB,
			a5L = zK.zL.sC;
		if (!(a55 >= a5L.length)) {
			if (a5L = a5L[a55], a5K[a55]) {
				for (ae = a56 + a5L, ai = a56; ai < ae; ai++) k6.a5N.a5O(a5J[ai], sG[ai], sH[ai], mA[ai]);
				a56 += a5L, a55++
			} else ++a57 >= a5L && (a55++, a57 = 0);
			return 1
		}
		bI.a5M("Replay file smaller than expected."), zr.xE(!1), bK.fC = 2
	}
	this.vp = 0, this.q = function() {
		a59 = a58 = a57 = a56 = a55 = 0
	}, this.fA = function() {
		var a5C;
		b3.fA(), zr.x6() < 1.7 ? 0 === a8 ? bu.bv >= bv && (a5C = bu.vr / zr.x6(), bv += a5C * Math.floor(1 + (bu.bv - bv) / a5C), 2 === bK.fC || vs.vt || !zr.x5 ? vu() : (a5D(), jU.f()), a8++) : a5E() : function() {
			var a5C;
			if (bu.bv >= bv)
				if (2 === bK.fC || vs.vt || !zr.x5) vu(), bv = bu.bv;
				else {
					for (a5C = bu.vr / zr.x6(), 16 < (bu.bv - bv) / a5C && (bv = bu.bv - 16 * a5C); bu.bv >= bv && 2 !== bK.fC;) bv += a5C, a5D();
					jU.f()
				} a5E()
		}(), vx(), bu.dw && (bu.dw = !1, vy())
	}, this.a53 = function() {
		zK.zL.sC.length - a55 <= 2 || bI.a5M("Replay file larger than expected.")
	}
}

function a5P() {
	var lq, tB, tC, tE;

	function tD(ai) {
		ax.gu(8, ax.d2, new lz(21, {
			qn: ai,
			h5: 0,
			h6: 10
		}))
	}
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), tB.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, tC = [new aM(L(123), function() {
		tD(5)
	}, 0, 0, 1), new aM(L(124), function() {
		tD(6)
	}, 0, 0, 1), new aM(L(125), function() {
		tD(7)
	}, 0, 0, 1), new aM("Audit Log", function() {
		tD(12)
	}, 0, 0, 1)], tE = [new aM("⬅️ " + L(10), function() {
		ax.ic()
	})], lq = new iU(L(126), tE), tB = new tF(tC, lq.iX)
}

function a7(a0F, type, a5Q, a5R) {
	var aH;
	this.aH = document.createElement("input"), (aH = this.aH).type = type ? "number" : "text", aH.id = "input" + ax.aZ.a5S++, aH.value = a0F.value, aH.style.width = "100%", aH.style.userSelect = "none", aH.style.outline = "none", aH.style.resize =
		"none", aH.style.border = "inherit", aH.style.font = "inherit", aH.style.color = aJ.eA, aH.style.backgroundColor = aJ.e9, aH.style.fontSize = "1em", aH.style.padding = "0.1em 0.2em", aH.addEventListener("focus", function() {
			b3.a05++
		}), aH.addEventListener("blur", function() {
			b3.a05--, -1 !== a0F.a8 && bz.cG.cH(a0F.a8, aH.value)
		}), aH.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a0F.a8 && bz.cG.cH(a0F.a8, aH.value), a5Q ? a5Q() : aH.blur())
		}), a5R && aH.addEventListener("input", function(aq) {
			a5R(aq)
		})
}

function a5T() {
	this.jZ = function() {
		var a5U = bK.data;
		aR.ie.a5V(a5U.teamPlayerCount, a5U.playerCount), a5U.numberTeams = aR.ie.a5W(a5U.teamPlayerCount, 0), a5U.teamPlayerCount[0] && a5U.teamPlayerCount[7] && (a5U.teamPlayerCount[7] = 0, this.jZ())
	}, this.a5X = function() {
		var a5U = bK.data;
		a5U.mapType < 2 ? t.ha(t.a14(a5U), a5U.mapSeed) : t.a5Y(a5U.canvas)
	}, this.a5Z = function() {
		var a5U = bK.data;
		a5U.colorsData || (a5U.colorsData = new Uint32Array(1)), a5U.selectableColor && (a5U.colorsData[0] = bz.aZ.hj()), a5U.selectableName && (a5U.playerNamesData || (a5U.playerNamesData = new Array(1)), a5U.playerNamesData[0] = bz.c0.data[122]
			.value), a5U.a5a = new Uint32Array(1), a5U.a5a[0] = bw.bx.by(bz.c0.data[105].value, 5)
	}, this.a5b = function() {
		bK.data = new a5c, bK.data.aIncomeType = 2, bK.data.aIncomeData = new Uint8Array(bK.g6), bK.data.aIncomeData[0] = 64
	}
}

function a5d() {
	function a5e(ai, type, jm, jl) {
		bz.c0.data.push({
			a8: ai,
			type: type || 0,
			value: jm || 0,
			jm: jm || 0,
			jl: jl || 0
		})
	}

	function a5f(ai, type, jm, jl) {
		bz.c0.data.push({
			a8: ai,
			type: type,
			value: jm || "",
			jm: jm || "",
			jl: jl || 0
		})
	}

	function a5g(dj) {
		for (var ai = bz.c0.data.length; ai < dj; ai++) bz.c0.data.push(null)
	}
	this.data = [], this.q = function() {
		a5e(0, 1, 0, 5), a5e(1, 1, 1), a5e(2, 0), a5f(3, 2), a5e(4, 1), a5f(5, 2, "Trebuchet MS", 1), a5e(6, 0), a5e(7, 0, 0), a5e(8, 0), a5e(9, 1, 1), a5e(10, 1), a5e(11, 1, 1), a5f(12, 2, navigator.language), a5e(13), a5e(14), a5g(100), a5f(
				100, 2), a5f(101, 2), a5f(102, 2), a5f(103, 2), a5f(104, 2), a5f(105, 2), a5f(106, 2), a5e(107), a5e(108), a5e(109), a5f(110, 2), a5e(111), a5e(112), a5e(113), a5f(114, 2), a5e(115), a5f(116, 2), a5e(117, 1), a5f(118, 2, "", 2),
			a5e(119, 1, 0, 1), a5f(120, 2), a5e(121, 1, ~~(262144 * Math.random())), a5f(122, 2, "Player " + Math.floor(1e3 * Math.random())), a5e(123), a5f(124), a5e(125, 1), a5f(126, 2), a5e(127, 0, 1), a5e(128), a5e(129), a5e(130), a5e(131),
			a5e(132), a5f(133, 2), a5e(134, 0, 5), a5f(135, 2), a5f(136, 2), a5e(137), a5e(138), a5e(139), a5e(140), a5e(141), a5e(142), a5e(143), a5e(144), a5f(145, 2), a5e(146), a5e(147), a5f(148, 2), a5e(149), a5e(150, 0, 1), a5f(151, 2), a5e(
				152, 0, 5), a5e(153, 1), a5e(154, 1), a5f(155, 2), a5f(156, 2), a5e(157), a5e(158), a5e(159), a5e(160), a5f(161, 2), a5e(162, 0, 1024), a5f(163, 2, "0,0,0"), a5f(164, 2, "100,100,100"), a5f(165, 2, "30,30,30"), a5f(166, 2,
				"70,70,70"), a5f(167, 2, "100,100,100"), a5f(168, 2, "85,85,85"), a5f(169, 2, "100,100,100");
		for (var ai = 0; ai < 4; ai++) a5f(170 + ai, 2, "255,255,255");
		a5f(174, 2), a5f(175, 2), a5e(176, 0, 200), a5g(180), a5e(180, 0), a5e(181, 0)
	}, this.cH = function(a8, value) {
		this.data[a8].value = value
	}, this.nC = function(a8, value) {
		this.cH(a8, value);
		var value = String(value),
			ae = value.length;
		5e4 < ae ? console.log("storage value too large: index " + a8 + " size " + ae) : (bz.iB.save(a8, value), bz.iB.save(a8, String(this.data[a8].jl), !0))
	}, this.nA = function(a8) {
		return Number(this.data[a8].value)
	}, this.a5h = function(a8) {
		return String(this.data[a8].value)
	}
}

function a5i() {
	var iR, iS, iT, ii;

	function iV() {
		iZ(), 2 !== bK.data.sResourcesType && (bK.data.sResourcesData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		2 === bK.data.sResourcesType && aR.ie.j0(iT.f7(), bK.data.sResourcesData, 2047)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(127), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), hW.io(new ip({
			iq: [L(35), L(36), L(14)],
			value: bK.data.sResourcesType
		}, function(a8) {
			iZ(), 2 !== a8 || bK.data.sResourcesData || (bK.data.sResourcesData = new Uint16Array(bK.g6)), bK.data.sResourcesType = a8, ax.gu(28)
		})), ii.push(hW)
	}(ii = []), function(ii) {
		var hW;
		1 === bK.data.sResourcesType && ((hW = new il).im("Value"), hW.ir(new a7({
			a8: -1,
			value: bK.data.sResourcesValue
		}, 1, 0, function(aH) {
			var value = je.jf(Math.floor(aH.target.value), 0, 2047);
			aH.target.value = bK.data.sResourcesValue = value
		})), ii.push(hW))
	}(ii), function(ii) {
		var hW;
		2 === bK.data.sResourcesType && ((hW = new il).im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.sResourcesData, 2)), hW.ir(iT), ii.push(hW))
	}(ii), ii))
}

function a5j() {
	var a5k = new Uint16Array(bK.g6),
		a5l = 0;

	function a5q(a5n, a5o) {
		var iJ = bu.gE();
		return 3213 <= iJ ? 4 + je.kI(100 * a5o, a2n.a2o(a5n)) : (a5n = 1 + je.kI(bK.a2l, 300), iJ < 357 ? 2 + je.kI(100 * a5o, a5n) : iJ < 714 ? 2 + je.kI(100 * a5o, 4 * a5n) : iJ < 1071 ? 2 + je.kI(100 * a5o, 10 * a5n) : iJ < 2142 ? 2 + je.kI(100 *
			a5o, 30 * a5n) : 2 + je.kI(100 * a5o, 100 * a5n))
	}

	function a5p(a5n) {
		return bK.bX || 7 <= bK.k7 || 4284 <= bu.gE() || aR.bc.ms(a5n)
	}
	this.q = function() {
		a5k.fill(0), a5l = 15
	}, this.yL = function(a2q) {
		var player = bK.bL;
		return !!aR.bc.a42(player, a2q) && !(!aR.bc.a43(player, aR.bc.a44(player, fV.yO()), a2q) || (player = a2q, a2q = oi.a2t[0], !a5p(player) && a5k[player] + a5q(player, a2q) > a5l))
	}, this.fJ = function(a5n, a5o) {
		if (!a5p(a5n)) {
			a5o = a5q(a5n, a5o);
			if (a5k[a5n] + a5o > a5l) return !1;
			a5k[a5n] += a5o
		}
		return !0
	}, this.fA = function() {
		bu.gE() % 100 == 99 && (bu.gE() < 1071 ? a5l += 4 : bu.gE() < 2142 ? a5l += 6 : bu.gE() < 3213 ? a5l += 8 : a5l += 10)
	}
}

function a5r(a1) {
	var hw = document.createElement("div"),
		a5s = document.createElement("div");
	this.aW = function() {
			a5s.textContent = "", aY.bn.aw(1);
			for (var ah = document.createDocumentFragment(), a5t = aY.aZ.aa[0], bl = aY.bl.rs[a5t], rv = aY.bl.rv[a5t], ai = 0; ai < bl.length; ai++) ! function(ah, aq, a5v, a5t) {
				var aQ = document.createElement("span");
				aQ.textContent = (a5v ? "🟢 " : "⚪ ") + aY.ak.a5w(aq, a5t), aQ.style.color = aY.ak.a5x(aq.a5y), aQ.style.cursor = "pointer", aQ.style.margin = "0.2em 0.2em 0.2em 0.2em", aQ.style.width = aQ.style.maxWidth = 2 === a5t ? "10em" :
					"9em", aQ.style.height = aQ.style.maxHeight = "1.4em", aQ.style.whiteSpace = "nowrap", aQ.style.overflow = "hidden", aQ.style.textOverflow = "ellipsis", aQ.style.font = "inherit", aQ.style.display = "inline-block", aY.ak.a5z(
						aq) && (aQ.style.textDecoration = "underline"), aq.a4a && (aQ.style.textDecorationLine = "underline", aQ.style.textDecorationStyle = "dotted");
				aQ.onclick = function(aH) {
					a1(aH, aq)
				}, gr.i3() || (aQ.onmouseover = function(aH) {
					aY.bn.a60(aH, aq, 1)
				}), ah.appendChild(aQ)
			}(ah, bl[ai], ai < rv, a5t);
			a5s.appendChild(ah)
		}, this.show = function(av) {
			av.appendChild(hw)
		}, this.aw = function(av) {
			ax.removeChild(av, hw)
		}, this.resize = function() {
			a5s.style.fontSize = aR.az.b8(aR.az.b0(.02, .3))
		}, hw.style.top = "0", hw.style.left = "0", hw.style.width = hw.style.height = "100%", hw.style.overflowX = "hidden", hw.style.overflowY = "auto", hw.style.font = "inherit", a5s.style.font = "inherit", a5s.style.margin = "0.4em", hw
		.appendChild(a5s)
}

function a61() {
	this.a62 = new Int16Array(4), this.a63 = new Int16Array(4), this.a64 = null, this.q = function() {
		var ai;
		for (this.a62[0] = -t.u, this.a62[1] = 1, this.a62[2] = t.u, this.a62[3] = -1, this.a64 = new Int16Array([-t.u, 1 - t.u, 1, t.u + 1, t.u, t.u - 1, -1, -t.u - 1]), ai = 0; ai < 4; ai++) this.a63[ai] = 4 * this.a62[ai]
	}, this.a3M = function() {
		return je.jf(Math.floor(.15 * (1 + .25 * bA.bB.bC()) * b3.dG / dJ), 4, 128)
	}, this.a65 = function(dx, id) {
		for (var a66 = this.a63, ai = 0; ai < 4; ai++) {
			var yq = dx + a66[ai];
			if (x.kV(yq) && x.a3Q(yq) === id) return !0
		}
		return !1
	}, this.a67 = function(player, dx) {
		return !x.yr(dx) && player === x.yj(dx)
	}, this.kP = function(kR, kS, j4) {
		return (kR -= this.j7(j4)) * kR + (kS -= this.j8(j4)) * kS
	}, this.a68 = function(db, de, a69) {
		db = this.a6A(db) - this.a6B(a69), de = this.a6C(de) - this.a6D(a69);
		return Math.sqrt(db * db + de * de)
	}, this.a6E = function(tN, tO) {
		var dn = this.j7(tN) - this.j7(tO),
			tN = this.j8(tN) - this.j8(tO);
		return ~~Math.sqrt(dn * dn + tN * tN + .5)
	}, this.a3e = function(tN, tO) {
		var dn = this.j7(tN) - this.j7(tO),
			tN = this.j8(tN) - this.j8(tO);
		return dn * dn + tN * tN
	}, this.kN = function(a6F, a6G, a6H, a6I) {
		return (a6F -= a6H) * a6F + (a6G -= a6I) * a6G
	}, this.a44 = function(o4, a3q) {
		return je.kI(a3q * fL.jD[o4], 1e3)
	}, this.a6A = function(db) {
		return 16 * (db + dK) / dJ
	}, this.a6C = function(de) {
		return 16 * (de + dL) / dJ
	}, this.a6J = function(iP) {
		return 16 * iP / dJ
	}, this.yZ = function(db) {
		return Math.floor((db + dK) / dJ)
	}, this.ya = function(de) {
		return Math.floor((de + dL) / dJ)
	}, this.yb = function(kR, kS) {
		return 1 <= kR && 1 <= kS && kR < t.u - 1 && kS < t.v - 1
	}, this.j7 = function(j4) {
		return j4 % t.u
	}, this.j8 = function(j4) {
		return je.kI(j4, t.u)
	}, this.kU = function(kR, kS) {
		return kS * t.u + kR
	}, this.a3g = function(kR, kS) {
		return 4 * this.kU(kR, kS)
	}, this.a3p = function(j4) {
		return this.kT(this.j7(j4), this.j8(j4))
	}, this.kT = function(kR, kS) {
		return 0 < kR && kR < t.u - 1 && 0 < kS && kS < t.v - 1
	}, this.kW = function(j4) {
		return j4 << 2
	}, this.a6K = function(dx) {
		return dx >> 2
	}, this.a6L = function(j4) {
		return t.u * this.j8(j4) * 256 + (this.j7(j4) << 4)
	}, this.a6M = function(j4) {
		return this.a6L(j4) + 8 + (t.u << 7)
	}, this.pM = function(a69) {
		return t.u * (this.a6D(a69) >> 4) + (this.a6B(a69) >> 4)
	}, this.hR = function(a69) {
		a69 = this.pM(a69);
		return (this.j7(a69) >> 5) + h4.eK.a6N * (this.j8(a69) >> 5)
	}, this.a6B = function(a69) {
		return a69 % (t.u << 4)
	}, this.a6D = function(a69) {
		return je.kI(a69, t.u << 4)
	}, this.a3l = function(j4, a3j) {
		return j4 + this.a62[a3j]
	}, this.a6O = function(dx, a3j) {
		return dx + this.a63[a3j]
	}, this.a3k = function(tN, tO) {
		var dn = this.j7(tO) - this.j7(tN),
			tO = this.j8(tO) - this.j8(tN);
		return Math.abs(dn) >= Math.abs(tO) ? 1 + 2 * (dn < 0) : 2 * (0 < tO)
	}, this.a6P = function(player) {
		return this.kU(fL.jI[player] + fL.jK[player] >> 1, fL.jJ[player] + fL.jL[player] >> 1)
	}, this.a6Q = function(player) {
		return this.kU(kJ.kK(fL.jI[player], fL.jK[player]), kJ.kK(fL.jJ[player], fL.jL[player]))
	}
}

function a6R() {
	var b9, canvas, ez, a6S, a6T, a6U = -1;

	function a6V() {
		var gY, f4 = canvas.getContext("2d", {
			alpha: !0
		});
		f4.clearRect(0, 0, b9, b9), f4.fillStyle = aJ.gI, f4.fillRect(0, 0, b9, b9), 0 === a6S && (f4.fillStyle = aJ.gM, f4.fillRect(0, 0, b9, b9)), f4.fillStyle = aJ.eA, f4.fillRect(0, 0, b9, 1), f4.fillRect(0, 0, 1, b9), f4.fillRect(0, b9 - 1, b9,
			1), f4.fillRect(b9 - 1, 0, 1, b9), gY = .9 * b9 / gZ.get(0).width, f4.imageSmoothingEnabled = !0, f4.setTransform(gY, 0, 0, gY, Math.floor((b9 - gY * gZ.get(0).width) / 2), Math.floor((b9 - gY * gZ.get(0).height) / 2)), f4.drawImage(
			gZ.get(0), 0, 0), f4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6W(ds, dt) {
		if (!vs.vt) return ds <= b9 + dH.gap && dt >= fV.s ? 9 : -1;
		if (ds <= 4 * b9 + dH.gap) {
			if (dt >= fV.s) return 0;
			if (dt >= fV.s - b9 - a6T * dH.gap) return 2
		} else if (ds <= 7 * b9 + dH.gap && dt >= fV.s - b9 - a6T * dH.gap) return 1;
		return -1
	}
	this.vt = !1, this.q = function() {
		a6S = -1, this.vt = !1, a6T = bA.bB.bC() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		b9 = fV.b9, (canvas = document.createElement("canvas")).width = b9, canvas.height = b9, ez = aR.az.f8(1, (bA.bB.bC() ? .5 : .45) * b9), a6V()
	}, this.xG = function() {
		this.vt = !this.vt, this.vt ? (zr.xB(!1), bK.bY && zr.x5 && zr.xE(!0), this.xH()) : (a6S = -1, a6V(), !bK.bX || 1 !== bK.fC || bK.j9 || bK.bY || bA.bB.setState(1)), bu.dw = !0
	}, this.xH = function() {
		(bK.bX || bK.bY) && 1 === bK.fC && (zw.gC(!0), bK.j9 || setTimeout(function() {
			jU.p()
		}, 0), bA.bB.setState(0))
	}, this.df = function(ds, dt) {
		return 0 <= (a6U = a6W(ds, dt)) || !vs.vt || bK.bX || bK.bY || zs.mO || vs.xG(), a6U
	}, this.dk = function(ds, dt) {
		ds = a6W(ds, dt);
		ds !== a6S && (a6S = ds, this.vt || a6V(), bu.dw = !0)
	}, this.zZ = function(ds, dt) {
		ds = a6W(ds, dt);
		return -1 !== ds && a6U === ds && (this.vt ? bK.dg ? (0 <= ds && zr.xB(!1), !bK.bY) : (0 === ds ? bK.a6Y() : 1 === ds ? this.xG() : 2 === ds && ax.gu(1, 0), !0) : 9 === ds && (this.xG(), !0))
	}, this.eC = function() {
		var b4;
		this.vt ? (b4 = Math.floor(5.5 * b9), eD.setTransform(1, 0, 0, 1, dH.gap, fV.s), eD.fillStyle = aJ.gI, eD.fillRect(0, 0, b4, b9), 0 === a6S ? (eD.fillStyle = aJ.gM, eD.fillRect(0, 0, 4 * b9, b9)) : 1 === a6S && (eD.fillStyle = aJ.gM, eD
				.fillRect(4 * b9, 0, Math.floor(1.5 * b9), b9)), eD.fillStyle = aJ.eA, eD.fillRect(0, 0, b4, 1), eD.fillRect(0, 0, 1, b9), eD.fillRect(4 * b9, 0, 1, b9), eD.fillRect(0, b9 - 1, b4, 1), eD.fillRect(b4 - 1, 0, 1, b9), eD.font =
			ez, aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 1), eD.fillText(L(128), 2 * b9, .54 * b9), b4 = .4 * b9, vs.o2(dH.gap + 4 * b9 + (1.5 * b9 - b4) / 2, fV.s + .3 * b9, b4), b4 = 1, eD.setTransform(1, 0, 0, 1, dH.gap, fV.s - b4 *
				a6T * dH.gap - b4 * b9), eD.fillStyle = aJ.gI, eD.fillRect(0, 0, 4 * b9, b9), a6S === b4 + 1 && (eD.fillStyle = aJ.gM, eD.fillRect(0, 0, 4 * b9, b9)), eD.fillStyle = aJ.eA, eD.fillRect(0, 0, 4 * b9, 1), eD.fillRect(0, 0, 1,
				b9), eD.fillRect(4 * b9, 0, 1, b9), eD.fillRect(0, b9 - 1, 4 * b9, 1), eD.fillText(L(0 === b4 ? 128 : 129), 2 * b9, .54 * b9), eD.setTransform(1, 0, 0, 1, 0, 0)) : eD.drawImage(canvas, dH.gap, fV.s)
	}, this.a4L = function(player) {
		return 0 !== fL.gl[player] && 2 !== bK.fC && !aR.bc.ms(player)
	}, this.o2 = function(r, s, ae) {
		eD.setTransform(1, 0, 0, 1, r, s), eD.lineWidth = dH.gN, eD.strokeStyle = aJ.eA, eD.beginPath(), eD.moveTo(0, 0), eD.lineTo(ae, ae), eD.moveTo(0, ae), eD.lineTo(ae, 0), eD.stroke()
	}
}

function c2() {
	var a6c = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		a6d = [aJ.a1G, aJ.a1G, aJ.a1H, aJ.a1e, aJ.a1f, aJ.a1U, aJ.a1k, aJ.a1H, aJ.a1z, aJ.iD, aJ.a1w],
		a6e = [
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
		a6f = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function a6w(ad, d8, a6x) {
		for (var pW = ad.length - 1; 0 <= pW; pW--) {
			var aq = ad[pW];
			0 === aq.id && aq.d8 === d8 && (aq.ap = "[Redacted Message]", a6x) && (aq.a6y = 1)
		}
	}
	this.am = function(q8) {
		var a6g, a6h;
		return q8.id < 5 && (a6g = "@" + cI.bx.t3(q8.d8, 5)), 0 === q8.id ? a6g + ": " + q8.ap : 1 === q8.id ? (a6h = "@" + cI.bx.t3(q8.target, 5), 0 === q8.q9 ? 32768 <= q8.value ? a6g + " voted with " + (q8.value - 32768 + 1) +
				" gold against " + a6h + " to weaken the latter's admin position. 📉" : a6g + " voted with " + (q8.value + 1) + " gold for " + a6h + " to strengthen the latter's admin position. 💪" : 1 === q8.q9 ? a6g + " sent " + Math.floor(q8
					.value / 100) + " 🧈 gold to " + a6h + "." : a6g + " voted with " + (q8.value / 10).toFixed(1) + " points for " + a6h + " to acknowledge the latter as clan leader. ✅") : 2 === q8.id ? 0 === q8.q9 ? a6g +
			" was 🔇 muted for 1 Hour." : 1 === q8.q9 ? "The username of " + a6g + " was ✂️ redacted. Duration: 1 Day" : a6g + " 👢 was kicked." : 3 === q8.id ? a6g + a6i.a6j(q8.q9, a6i.a6k[q8.q9][q8.value]) + "@" + cI.bx.t3(q8.target, 5) + a6i
			.a6l(q8.q9, a6i.a6k[q8.q9][q8.value]) : 4 === q8.id ? a6g + a6i.a6j(5, a6i.a6k[5][q8.q9]) + "@" + cI.bx.t3(q8.target, 5) + a6i.a6l(5, a6i.a6k[5][q8.q9]) : 5 === q8.id ? a6f[q8.q9] : 6 === q8.id ? "You are about to mention " + q8
			.value + " player" + (1 === q8.value ? "" : "s") + ". This action will cost " + (Math.max(10 * q8.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === q8.id ? q8.ap : void 0
	}, this.al = function(q8, rU) {
		return {
			q8: q8,
			ap: rU,
			a6m: 0,
			fontSize: 1,
			ar: 0,
			a6n: q8.id ? aJ.a1d : aJ.eA
		}
	}, this.a5w = function(player, aX) {
		return (2 === aX ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.a5x = function(a5y) {
		return a6d[a5y]
	}, this.a6o = function(a5y, gb) {
		return a5y < 3 || 7 === a5y ? a6e[a5y][0] : 4 === a5y ? a6e[a5y][gb < 1 ? 0 : gb < 10 ? 1 : 2] : a6e[a5y][gb < 10 ? 0 : 1]
	}, this.a6p = function(gb) {
		return 0 === gb
	}, this.a6q = function(aX, d8) {
		for (var rs = aY.bl.rs, bl = rs[aX], ae = bl.length, ai = 0; ai < ae; ai++)
			if (d8 === bl[ai].d8) return bl[ai];
		for (var pW = 0; pW < rs.length; pW++)
			if (aX !== pW)
				for (ae = (bl = rs[pW]).length, ai = 0; ai < ae; ai++)
					if (d8 === bl[ai].d8) return bl[ai];
		return null
	}, this.a5z = function(aq) {
		return !!aY.bk && aq.d8 === aY.bk.d8
	}, this.s0 = function(bl, a6r, a6s) {
		var qs = [];
		loop: for (var ai = a6r; ai < a6s; ai++) {
			var vX = aR.aS.a6t(bl[ai].username);
			if (vX) {
				for (var pW = qs.length - 1; 0 <= pW; pW--)
					if (vX === qs[pW].name) {
						qs[pW].nt++;
						continue loop
					} qs.push({
					name: vX,
					nt: 1
				})
			}
		}
		if (qs.sort(function(gF, pW) {
				return pW.nt - gF.nt
			}), 0 === qs.length) return "";
		for (var en = qs[0].name + ": " + qs[0].nt, ai = 1; ai < qs.length; ai++) en += "   " + qs[ai].name + ": " + qs[ai].nt;
		return en
	}, this.a6u = function(a5y, gb, a6v) {
		return 0 === a6c[a5y].length ? "Rank: " + (gb + 1) : a6c[a5y] + " Rank: " + (gb + 1) + (3 !== a5y && a6v < 100 ? "   " + a6c[3] + " Rank: " + (a6v + 1) : "")
	}, this.qA = function(d8) {
		for (var ac = aY.aZ.ac, ai = 0; ai < ac.length; ai++) a6w(ac[ai].ad, d8);
		a6w(aY.message.qH(), d8, 1), aY.at.qA(d8)
	}
}

function c4() {
	var a6z = null,
		a70 = null,
		a71 = 0,
		a72 = 0,
		a73 = null;

	function a74() {
		0 !== a70.a5y && (aY.bm.aw(), ax.gu(8, 29, new lz(25, {
			ux: 0,
			d8: cI.bx.t3(a70.d8, 5),
			cQ: 0
		}, 29)))
	}

	function a76() {
		return !aY.bk || aY.ak.a5z(a70) ? 1 : 0
	}

	function a75() {
		var r = a6z.r,
			s = a6z.s,
			a7G = (aY.bm.aw(), a76());
		a6z = new wc([new aM(a6i.a6k[5][0], function() {
			a79(5, 0)
		}, a7G), new aM(a6i.a6k[5][1], function() {
			a79(5, 1)
		}, a7G), new aM(a6i.a6k[5][2], function() {
			a79(5, 2)
		}, a7G), new aM(a6i.a6k[5][3], function() {
			a79(5, 3)
		}, a7G)]), a78(r, s), a72 = a71 = 2
	}

	function a77() {
		29 === ax.d2 && ax.d3().bo(cI.bx.t3(a70.d8, 5))
	}

	function a79(id, value) {
		5 === id && bM.qu.a7H({
			ux: 3,
			d8: cI.bx.t3(a70.d8, 5),
			value: value
		})
	}

	function a78(r, s, wh) {
		a6z.show(r, s, wh), aY.bn.show(a6z.r, a6z.s, a70, 1)
	}
	this.rR = function(aH, aq) {
		a71 = 1, a70 = aq, a6z = new wc([new aM(L(130), a74, 0 === aq.a5y ? 1 : 0), new aM(L(131), a75, a76()), new aM(L(132), a77, 0)]), a78((a73 = {
			clientX: aH.clientX,
			clientY: aH.clientY
		}).clientX, a73.clientY, 1)
	}, this.ix = function(code) {
		if (29 !== ax.d2) return !1;
		if (!a70) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.aw();
			else if (aR.aS.startsWith(code, "Numpad") || aR.aS.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === a71) this.rR(a73, a70);
				else {
					if (!a6z) return !1;
					1 === a71 ? code <= 1 ? a74() : 2 === code ? a75() : (a77(), this.aw()) : (a79(a72, je.jf(code - 1, 0, a6i.a6k[a72].length - 1)), this.aw())
				}
		}
		return !0
	}, this.aw = function() {
		a71 = 0, a6z && a6z.aw(), a6z = null, aY.bn.aw()
	}
}

function a7K() {
	this.yo = new a7L
}

function a7M() {
	var se, a7O, a7P, a7Q, a7N = !1;

	function a7R() {
		a7N = !0, se = -1, a7O = new Array(4);
		for (var ai = 3; 0 <= ai; ai--) a7O[ai] = !1;
		var a7S = Math.floor(1 + .02 * b3.min);
		a7P = new Array(4), (a7Q = new Array(4))[1] = a7Q[3] = a7P[0] = a7P[2] = 0, a7Q[0] = a7P[3] = -a7S, a7P[1] = a7Q[2] = a7S
	}

	function a7T() {
		if (-1 !== se)
			if (0 !== bK.fC && di.dj()) {
				for (var a7U = !1, ai = 3; 0 <= ai; ai--) a7O[ai] && (a7U = !0, dK += a7P[ai], dL += a7Q[ai], dq.dk(a7P[ai], a7Q[ai]), e7.dr());
				a7U ? bu.dw = !0 : pR.pS()
			} else pR.pS()
	}
	this.a06 = function(a8) {
		0 !== bK.fC && di.dj() && (a7N || a7R(), a7O[a8] = !0, -1 === se) && (se = setInterval(a7T, 20), a7T())
	}, this.a0C = function(a8) {
		if (0 !== bK.fC && (a7N || a7R(), a7O[a8] = !1, -1 !== se)) {
			for (var a7U = !1, ai = 3; 0 <= ai; ai--) a7U = a7U || a7O[ai];
			a7U || this.pS()
		}
	}, this.pS = function() {
		if (a7N && -1 !== se) {
			for (var ai = 3; 0 <= ai; ai--) a7O[ai] = !1;
			clearInterval(se), se = -1
		}
	}
}

function a7V() {
	var a7W, a7X, a7Y, a7Z, a7a, a7b, a7c, a7d, a7e, a7f, a7g, a7h, a7i, a7j, a7k, a7l, a7m, a7n, a7p, a7q, a7r, a7s, a7t, a80, a81, a7o = null,
		a7v = 0,
		a7w = !1,
		a7x = new Float32Array(4),
		a7y = 0,
		a7z = !0,
		g4 = 400,
		a82 = 0;

	function a83() {
		a7e = Math.floor(+b3.dG), a7f = Math.floor(.5 * a7e)
	}

	function a84() {
		var ai, a8A;
		for (eD.font = aR.az.f8(1, 100 * a7g), a8A = 80 / Math.floor(eD.measureText(aR.aS.t3(bK.mt)).width), eD.font = aR.az.f8(1, 100), ai = bK.g6 - 1; 0 <= ai; ai--) a7d[ai] = 100 / Math.floor(eD.measureText(fL.fM[ai]).width), a7c[ai] = Math.min(
			a8A, a7d[ai])
	}

	function a8B(ai) {
		return !a82 || (ai = fL.jD[ai]) < 1e6 ? 1 : ai < 1e7 ? a7x[0] : a7x[Math.min(Math.floor(Math.log10(ai)) - 6, 3)]
	}

	function a89(uH) {
		a7n = !1, a7m = 1, a7k = a7l = 0, a7z && (aR.az.textAlign(uH, 1), aR.az.textBaseline(uH, 1));
		for (var a8K, a8L, ai, a8M, fontSize, a8N, g = dK / dJ, j = dL / dJ, k = (b3.b4 + dK) / dJ, l = (b3.b9 + dL) / dJ, a8O = 0 !== fL.gl[bK.bL] && !aR.bc.ms(bK.bL), gF = my.mz - 1; 0 <= gF; gF--) ai = my.n0[gF], (fontSize = Math.floor(a7j * dJ *
			a8B(ai) * a7c[ai] * a7a[ai])) < a7i || a7e <= fontSize || a7Y[ai] + a7a[ai] > g && a7Y[ai] < k && a7Z[ai] + a7b[ai] > j && a7Z[ai] < l && (a8K = Math.floor(b3.b4 * (a7Y[ai] + a7a[ai] / 2 - g) / (k - g)), a8L = Math.floor(b3.b9 * (a7Z[
			ai] + a7b[ai] / 2 - j) / (l - j) - .1 * fontSize), a8M = x.a2C[ai], uH.font = aR.az.f8(1 === fL.gc[ai] ? 4 : 1, fontSize), uH.fillStyle = a8P(fontSize, a8M % 2), a82 ? a8Q(uH, ai, fontSize, a8K, a8L, a8M) : a8R(ai, fontSize, a8K,
			a8L, uH), a7n = !0, 0 < a7r[ai] ? function(a8K, a8L, fontSize, ai, uH) {
			0 === fa[ai] ? y7.at.a8F(a7q[ai]) ? (function(a8K, a8L, fontSize, player, bH, uH) {
				for (var zA = a8L, a8l = (uH.globalAlpha = a8a(fontSize), a8B(player) * (a82 ? a7y : a7d[player])), z9 = a8K - .5 * fontSize / a8l - .9 * fontSize, pW = 0; pW < 2; pW++) uH.fillText(y7.at.a8j(bH), z9, zA), z9 = a8K +
					.5 * fontSize / a8l + .9 * fontSize;
				uH.globalAlpha = 1
			}(a8K, a8L, fontSize, ai, a7q[ai], uH), a8T(a8K, a8L, fontSize, 0, 0, uH)) : y7.at.a8d(a7q[ai]) ? (a8e(a8K, a8L, fontSize, a7q[ai], 0, uH), a8T(a8K, a8L, fontSize, 0, 1, uH)) : (a8e(a8K, a8L, fontSize, a7q[ai], 1, uH), a8T(
				a8K, a8L, fontSize, 1, 0, uH)) : a8e(a8K, a8L, fontSize, a7q[ai], 0, uH)
		}(a8K, a8L, fontSize, ai, uH) : 0 === fa[ai] && a8T(a8K, a8L, fontSize, 0, 0, uH), a8O && (0 < a7r[ai + bK.g6] || 0 < a7r[ai + 2 * bK.g6] || 0 < a7r[ai + 3 * bK.g6] || 0 < a7r[ai + 4 * bK.g6]) && function(a8K, a8L, fontSize, ai, uH) {
			var iJ, nt = -1;
			for (iJ = 4; 1 <= iJ; iJ--) 0 < a7r[ai + iJ * bK.g6] && nt++;
			for (iJ = 1; iJ < 5; iJ++) 0 < a7r[ai + iJ * bK.g6] && (! function(a8K, a8L, fontSize, iJ, ai, a8Y, gj, uH) {
				var mD;
				if (1 === iJ) {
					ai = a7q[ai + bK.g6];
					if (!y7.at.a8f(ai)) return function(a8K, a8L, fontSize, bH, a8Y, uH) {
						uH.globalAlpha = a8a(fontSize);
						a8K -= .534 * a8Y * fontSize, a8Y = a8L + 1.59 * fontSize;
						uH.font = aR.az.f8(0, .785 * fontSize), uH.fillText(y7.at.a8j(bH), a8K, a8Y), uH.globalAlpha = 1
					}(a8K, a8L, fontSize, ai, a8Y, uH);
					mD = y7.wQ.a8h[ai - 1024 + y7.at.a8i]
				} else mD = 2 === iJ ? jS.xz()[4].canvas[+(gj < 255)] : (3 === iJ ? jS.xz()[5] : jS.xz()[6]).canvas[0];
				ai = y7.wQ.a8g, gj = .8 * fontSize / ai, iJ = a8K - .5 * gj * ai - .534 * a8Y * fontSize, a8K = a8L + 1.4 * gj * ai;
				uH.setTransform(gj, 0, 0, gj, iJ, a8K), uH.globalAlpha = a8a(fontSize), uH.drawImage(mD, 0, 0), uH.globalAlpha = 1, uH.setTransform(1, 0, 0, 1, 0, 0)
			}(a8K, a8L, fontSize, iJ, ai, nt, a7r[ai + iJ * bK.g6], uH), nt -= 2)
		}(a8K, a8L, fontSize, ai, uH), (a8N = a7g * fontSize) < a7i || (uH.font = aR.az.f8(1, a8N), a8L += Math.floor(.78 * fontSize), a82 ? a8R(ai, a8N, a8K, a8L, uH) : a8Q(uH, ai, a8N, a8K, a8L, a8M)))
	}

	function a8R(ai, fontSize, r, s, uH) {
		var ___id = ai;
		var showName = ai < bK.gd || !__fx.settings.hideBotNames;
		if (showName) uH.fillText(fL.fM[ai], r, s), ai < bK.gd && 2 !== fL.gc[ai] || (ai = fontSize / a7d[ai], uH.fillRect(r - .5 * ai, s + aR.az.a8W * fontSize, ai, Math.max(1, .1 * fontSize)));
		a82 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (uH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			uH.fillText(__fx.utils.getDensity(___id), r, showName ? s + fontSize : s)
		);
	}

	function a8Q(uH, ai, fontSize, a8K, a8L, a8M) {
		var ___id = ai;
		ai = aR.aS.t3(fL.jD[ai]);
		a8M >> 1 & 1 ? (uH.lineWidth = .05 * fontSize, uH.strokeStyle = a8P(fontSize, a8M % 2), uH.strokeText(ai, a8K, a8L)) : (1 < a8M && (uH.lineWidth = .12 * fontSize, uH.strokeStyle = a8P(fontSize, a8M), uH.strokeText(ai, a8K, a8L)), uH.fillText(
			ai, a8K, a8L));
		a82 || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (uH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), uH.fillText(__fx.utils.getDensity(___id), a8K, a8L + fontSize))
	}

	function a8T(a8K, a8L, fontSize, a8Y, a8Z, uH) {
		var gY = .95 * fontSize / a7t,
			a8K = a8K - .5 * gY * a7s + .8 * a8Y * fontSize,
			a8Y = a8L - 1.76 * gY * a7t - (.35 - aR.az.a8W + .7) * a8Z * fontSize;
		uH.setTransform(gY, 0, 0, gY, a8K, a8Y), uH.globalAlpha = a8a(fontSize), uH.drawImage(gZ.get(4), 0, 0), uH.globalAlpha = 1, uH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8e(a8K, a8L, fontSize, bH, a8Y, uH) {
		var wK, z9, gY;
		uH.globalAlpha = a8a(fontSize), y7.at.a8f(bH) ? (wK = y7.wQ.a8g, uH.setTransform(gY = 1.1 * fontSize / wK, 0, 0, gY, z9 = a8K - .5 * gY * wK - .8 * a8Y * fontSize, gY = a8L - 1.55 * gY * wK), uH.drawImage(y7.wQ.a8h[bH - 1024 + y7.at.a8i], 0,
			0), uH.setTransform(1, 0, 0, 1, 0, 0)) : (z9 = a8K - .8 * a8Y * fontSize, gY = a8L - (.35 - aR.az.a8W + 1) * fontSize, uH.fillText(y7.at.a8j(bH), z9, gY)), uH.globalAlpha = 1
	}

	function a8P(fontSize, a8M) {
		return a7f <= fontSize && fontSize < a7e ? gT.a8m[a8M] + a8a(fontSize).toFixed(3) + ")" : gT.a8n[a8M]
	}

	function a8a(fontSize) {
		return a7f <= fontSize && fontSize < a7e ? 1 - (fontSize - a7f) / (a7e - a7f) : 1
	}

	function a90(a8l, b4) {
		return 1 + Math.floor(a7h * a8l * b4)
	}

	function a8x(ai) {
		for (var left = a7Y[ai], gF = a7Y[ai] - fL.jI[ai] - 1; 0 <= gF; gF--)
			if (!a93(ai, --left, a7Z[ai], a7b[ai])) {
				left++;
				break
			} var right = a7Y[ai];
		for (gF = fL.jK[ai] - a7Y[ai] - a7a[ai]; 0 <= gF; gF--)
			if (!a93(ai, ++right + a7a[ai] - 1, a7Z[ai], a7b[ai])) {
				right--;
				break
			} var r = Math.floor((left + right) / 2),
			top = a7Z[ai];
		for (gF = a7Z[ai] - fL.jJ[ai] - 1; 0 <= gF; gF--)
			if (!a94(ai, r, --top, a7a[ai])) {
				top++;
				break
			} var bottom = a7Z[ai];
		for (gF = fL.jL[ai] - a7Z[ai] - a7b[ai]; 0 <= gF; gF--)
			if (!a94(ai, r, ++bottom + a7b[ai] - 1, a7a[ai])) {
				bottom--;
				break
			} var s = Math.floor((top + bottom) / 2);
		a8u(ai, r, s, a7a[ai], a7b[ai]) && (a7Y[ai] = r, a7Z[ai] = s)
	}

	function a8u(player, r, s, b4, b9) {
		iP = Math.floor(.2 * b4);
		for (var iP, iJ = r + b4 - 1; r <= iJ; iJ--)
			if (!a93(player, iJ, s, b9)) return;
		for (iJ = s + b9 - 1 - (iP = (iP = Math.floor(.25 * b9)) < 1 ? 1 : iP); s + iP <= iJ; iJ--)
			if (!a94(player, r, iJ, b4)) return;
		return 1
	}

	function a93(player, r, s, b9) {
		return x.ys(player, 4 * (s * t.u + r)) && x.ys(player, 4 * ((s + b9 - 1) * t.u + r))
	}

	function a94(player, r, s, b4) {
		return x.ys(player, 4 * (s * t.u + r)) && x.ys(player, 4 * (s * t.u + r + b4 - 1))
	}
	this.q = function() {
		if (a82 = bz.c0.data[7].value || 8 === bK.k7, g4 = 0 === (g4 = bz.c0.data[11].value) ? 280 : 1 === g4 ? 187 : 112, a7n = !1, a7j = .88, a7g = .5, a7h = 1.8, a7i = 12 - 3 * bz.c0.data[9].value, a7X = a7W = 0, a7Y = new Uint16Array(bK.g6),
			a7Z = new Uint16Array(bK.g6), a7a = new Uint16Array(bK.g6), a7b = new Uint16Array(bK.g6), a7c = new Float32Array(bK.g6), a7d = new Float32Array(bK.g6), a7q = new Uint16Array(2 * bK.g6), a7r = new Uint8Array(5 * bK.g6), a80 =
			new Uint8Array(bK.g6), a81 = new Uint8Array(bK.g6), a7z || (a7o = a7o || document.createElement("canvas")), a83(), a7l = a7k = 0, a7m = 1, a82) {
			var ai, a8A;
			for (a84(), eD.font = aR.az.f8(1, 100), a8A = 100 / Math.floor(eD.measureText("900 000").width), ai = bK.g6 - 1; 0 <= ai; ai--) a7c[ai] = Math.min(a8A, 2 * a7d[ai]);
			a7y = a8A, a7x[0] = 100 / (a8A * Math.floor(eD.measureText("5 000 000").width)), a7x[1] = 100 / (a8A * Math.floor(eD.measureText("50 000 000").width)), a7x[2] = 100 / (a8A * Math.floor(eD.measureText("500 000 000").width)), a7x[3] =
				100 / (a8A * Math.floor(eD.measureText("1 000 000 000").width))
		} else a84();
		! function() {
			var ai;
			for (ai = bK.g6 - 1; 0 <= ai; ai--) fL.ge[ai] < 12 ? (a7Y[ai] = fL.jI[ai] + 1, a7Z[ai] = fL.jJ[ai] + 1, a7a[ai] = 1, a7b[ai] = 1) : (a7Y[ai] = fL.jI[ai], a7Z[ai] = fL.jJ[ai] + 1, a7a[ai] = 4, a7b[ai] = 2);
			if (bK.j9)
				for (ai = 0; ai < bK.gd; ai++) a7a[ai] = 0;
			a7s = gZ.get(4).width, a7t = gZ.get(4).height
		}()
	}, this.a2v = function(o4, a87) {
		a87 > 18 * fL.ge[o4] ? (a81[o4] = 6, x.a2C[o4] = 2 + x.a2C[o4] % 2) : (a80[o4] = 4, (x.a2C[o4] < 2 || 3 < x.a2C[o4]) && (x.a2C[o4] = 6 + x.a2C[o4] % 2))
	}, this.a2w = function(o4, a87) {
		a87 > 6 * fL.ge[o4] ? (a81[o4] = 6, x.a2C[o4] = 4 + x.a2C[o4] % 2) : (a80[o4] = 4, (x.a2C[o4] < 4 || 5 < x.a2C[o4]) && (x.a2C[o4] = 8 + x.a2C[o4] % 2))
	}, this.resize = function() {
		a83(), a7z || a89(a7p)
	}, this.jP = function() {
		for (var ai = 0; ai < bK.gd; ai++) fL.jK[ai] - fL.jI[ai] != 3 || fL.jL[ai] - fL.jJ[ai] != 3 ? (a7Y[ai] = fL.jI[ai] + (fL.jK[ai] !== fL.jI[ai] ? 1 : 0), a7Z[ai] = fL.jJ[ai], a7a[ai] = 1, a7b[ai] = 1) : (a7Y[ai] = fL.jI[ai], a7Z[ai] = fL
			.jJ[ai] + 1, a7a[ai] = 4, a7b[ai] = 2)
	}, this.a4F = function(player, a8, a8D) {
		! function(player, a8, a8D) {
			player += a8 * bK.g6;
			0 === a8 ? a7q[player] === a8D && 0 < a7r[player] ? a7r[player] = 0 : (a7q[player] = a8D, a7r[player] = y7.at.a8F(a8D) ? 255 : 64) : 1 === a8 ? (a7r[player] = 64, a7q[player] = a8D) : a7r[player] = a8D
		}(player, a8, a8D), 2 === bK.fC && this.gC(!0)
	}, this.eC = function() {
		a7z ? a89(eD) : a7n && (1 !== a7m ? (eD.imageSmoothingEnabled = !0, eD.setTransform(a7m, 0, 0, a7m, 0, 0), eD.drawImage(a7o, -a7k / a7m, -a7l / a7m), eD.setTransform(1, 0, 0, 1, 0, 0), eD.imageSmoothingEnabled = !1) : eD.drawImage(a7o, -
			a7k, -a7l))
	}, this.e5 = function(dn, dp) {
		a7k += dn, a7l += dp
	}, this.dk = function(dn, dp) {
		dq.e5(dn, dp)
	}, this.zoom = function(e6, ds, dt) {
		a7m *= e6, a7k = (a7k + ds) * e6 - ds, a7l = (a7l + dt) * e6 - dt
	}, this.gC = function(au) {
		return !a7z && !(!a7w && !au && bu.bv < a7v + (1 === a7m && 0 === a7k && 0 === a7l && (bK.a8H() || bK.j9 || 2 === bK.fC) ? 1e3 : g4) || (a7w = !1, a7v = bu.bv, a89(a7p), 0))
	}, this.a8I = function(ai) {
		return a8B(ai) * a7c[ai]
	}, this.a8J = function(player) {
		return a7c[player]
	}, this.fA = function() {
		bu.gE() % 10 == 9 && (a7w = bK.a8o() && !bK.a8H()), !bK.a8H() && 4 <= ++a7X && function() {
			var ai, gF, pW;
			for (a7X = 0, pW = 4; 1 <= pW; pW--)
				for (gF = my.mz - 1; 0 <= gF; gF--) ai = my.n0[gF] + pW * bK.g6, 0 < a7r[ai] && a7r[ai] < 255 && a7r[ai]--;
			if (2 !== bK.fC)
				for (gF = my.mz - 1; 0 <= gF; gF--) ai = my.n0[gF], 0 < a7r[ai] && a7r[ai] < 255 && a7r[ai]--
		}();
		var ai, gF, ae = Math.floor(.1 * my.mz);
		for (ae = (ae = ae < 8 ? 8 : ae) > my.mz ? my.mz : ae, ai = a7W + ae - 1; a7W <= ai; ai--) gF = ai % my.mz, ! function(ai) {
			var a8l = a8B(ai) * a7c[ai];
			0 < a7a[ai] && a8u(ai, a7Y[ai], a7Z[ai], a7a[ai], a7b[ai]) ? ! function(ai) {
				for (var r, s, b4, b9, dx = !1, pW = 0; pW < 8; pW++) {
					if (b4 = a7a[ai] + 2, b9 = a7b[ai] + 2, b4 > fL.jK[ai] - fL.jI[ai] + 1 || b9 > fL.jL[ai] - fL.jJ[ai] + 1) return dx;
					if (r = a7Y[ai] - 1, s = a7Z[ai] - 1, !a8u(ai, r, s, b4, b9)) return dx;
					a7Y[ai] = r, a7Z[ai] = s, a7a[ai] = b4, a7b[ai] = b9, dx = !0
				}
				return dx
			}(ai) && function(ai, a8l) {
				for (var r, s, b4, b9, dx = !1, a91 = a7a[ai], du = 1 + Math.floor(.02 * a91), pW = 1; pW < 5; pW++) {
					if ((b4 = a91 + pW * du) > fL.jK[ai] - fL.jI[ai] + 1) return dx;
					if ((b9 = a90(a8l, b4)) > fL.jL[ai] - fL.jJ[ai] + 1) return dx;
					r = fL.jI[ai] + Math.floor(Math.random() * (fL.jK[ai] - fL.jI[ai] + 2 - b4)), s = fL.jJ[ai] + Math.floor(Math.random() * (fL.jL[ai] - fL.jJ[ai] + 2 - b9)), a8u(ai, r, s, b4, b9) && (a7Y[ai] = r, a7Z[ai] = s, a7a[ai] =
						b4, a7b[ai] = b9, dx = !0)
				}
				return dx
			}(ai, a8l) && a8x(ai) : ! function(ai, a8l) {
				var b9, r = a7Y[ai] + 1,
					s = a7Z[ai] + 1,
					b4 = a7a[ai] - 2;
				for (;;) {
					if (b4 < 1) {
						a7a[ai] = 0;
						break
					}
					if (b9 = a90(a8l, b4), a8u(ai, r, s, b4, b9)) return a7Y[ai] = r, a7Z[ai] = s, a7a[ai] = b4, a7b[ai] = b9, 1;
					r++, s++, b4 -= 2
				}
				return
			}(ai, a8l) ? function(ai, a8l) {
				var r, s, b4, b9, pW, dj, af = fL.jK[ai] - fL.jI[ai] + 1,
					a92 = Math.floor(.02 * af);
				for (dj = -6 * (a92 = a92 < 1 ? 1 : a92), pW = af; dj <= pW; pW -= a92)
					if (b9 = a90(a8l, b4 = 0 < pW ? pW : 1), r = fL.jI[ai] + Math.floor(Math.random() * (fL.jK[ai] - fL.jI[ai] + 2 - b4)), s = fL.jJ[ai] + Math.floor(Math.random() * (fL.jL[ai] - fL.jJ[ai] + 2 - b9)), a8u(ai, r, s, b4,
						b9)) return a7Y[ai] = r, a7Z[ai] = s, a7a[ai] = b4, a7b[ai] = b9
			}(ai, a8l) : a8x(ai)
		}(my.n0[gF]);
		a7W = (a7W += ae) % my.mz
	}, this.a8r = function() {
		var ai, o4, a8s, a8t;
		if (bu.gE() % 4 == 1)
			for (ai = my.mz - 1; 0 <= ai; ai--) o4 = my.n0[ai], x.a2C[o4] < 2 || ((a8s = Math.max(a80[o4] - 1, 0)) === (a8t = Math.max(a81[o4] - 1, 0)) ? 0 === a8s && (x.a2C[o4] %= 2) : 0 === a8t && x.a2C[o4] < 6 && (x.a2C[o4] += 4), a80[o4] =
				a8s, a81[o4] = a8t)
	}, this.mv = function(player) {
		var ai = player + 2 * bK.g6,
			gj = a7r[ai];
		return 0 < gj && (bI.a51(50, player), a7r[ai] = 0, 255 === gj)
	}, this.yx = function(player) {
		return 255 === a7r[player + 2 * bK.g6]
	}
}

function a95() {
	this.ju = function() {
		if (2 === bK.jx) bK.a4w = 2;
		else {
			if (8 === bK.k7) aR.bc.ms(0) || 0 === fL.gl[0] ? bK.a97 = 1 : aR.bc.ms(1) || 0 === fL.gl[1] ? bK.a97 = 0 : bK.a97 = +(fL.ge[1] > fL.ge[0]);
			else {
				if (bK.fR) {
					var oX = fT.ob();
					if (bK.r9 = oX, gT.oZ[oX]) return void(bK.a4w = +(gT.og[bK.bL] === oX))
				}
				bK.a97 = fZ[0]
			}
			bK.a4w = +(bK.a97 === bK.bL)
		}
	}
}

function ht() {
	this.resize = function() {
		var ai, a98 = document.head.querySelector("style#ss");
		if (a98)
			for (ai = a98.sheet.cssRules.length - 1; 0 <= ai; ai--) a98.sheet.deleteRule(0);
		else(a98 = document.createElement("style")).id = "ss", document.head.appendChild(a98);
		var oF = "::-webkit-scrollbar",
			a99 = aR.az.b8(dH.uq),
			wK = aR.az.b8(Math.max(aR.az.b0(.012), 8));
		try {
			a98.sheet.insertRule(oF + "{width:" + wK + ";height:" + wK + ";}", a98.sheet.cssRules.length), a98.sheet.insertRule(oF + "-thumb{background-color:white;}", a98.sheet.cssRules.length), a98.sheet.insertRule(oF + "-track{background:" +
				aJ.gI + ";}", a98.sheet.cssRules.length), a98.sheet.insertRule(oF + "-track:horizontal{border-top:" + a99 + " solid white;}", a98.sheet.cssRules.length), a98.sheet.insertRule(oF + "-track:vertical{border-left:" + a99 +
				" solid white;}", a98.sheet.cssRules.length), a98.sheet.insertRule(oF + "-button{display:none;}", a98.sheet.cssRules.length)
		} catch (aH) {
			for (console.log("error 3425: " + aH), ai = a98.sheet.cssRules.length - 1; 0 <= ai; ai--) a98.sheet.deleteRule(0)
		}
	}
}

function a9A() {
	this.fG = null, this.a0w = null, this.a0y = null, this.q = function() {
		var a9B = [120, 105, 92],
			cos = [12, 12, 60],
			a9C = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a9D = [140, 130, 120],
			a9E = [12, 12, 76],
			a9F = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a9G = [130, 117, 106],
			a9H = [12, 12, 68],
			a9I = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.fG = new Array(t.a9J + 1), this.fG[0] = {
			name: L(133),
			b4: 230,
			b9: 230,
			p4: 1e3,
			p1: 2e3,
			a0z: 173
		}, this.fG[1] = {
			name: L(134),
			b4: 800,
			b9: 800,
			p4: 100,
			p1: 50,
			a0z: 43
		}, this.fG[2] = {
			name: L(135),
			b4: 512,
			b9: 512,
			p4: 128,
			p1: 32,
			a0z: 0
		}, this.fG[3] = {
			name: L(136) + " 1",
			b4: 960,
			b9: 960,
			p4: 60,
			p1: 8,
			a0z: 0
		}, this.fG[4] = {
			name: L(137),
			b4: 900,
			b9: 900,
			p4: 100,
			p1: 5,
			a0z: 0
		}, this.fG[5] = {
			name: L(138),
			b4: 1e3,
			b9: 1e3,
			p4: 100,
			p1: 40,
			a0z: 0
		}, this.fG[6] = {
			name: L(139),
			b4: 1e3,
			b9: 1e3,
			p4: 100,
			p1: 20,
			a0z: 0
		}, this.fG[7] = {
			name: L(140),
			b4: 1024,
			b9: 1024,
			p4: 128,
			p1: 32,
			a0z: 0
		}, this.fG[8] = {
			name: L(141),
			b4: 820,
			b9: 820,
			p4: 200,
			p1: 100,
			a0z: 0
		}, this.fG[9] = {
			name: L(142),
			b4: 1024,
			b9: 1024,
			p4: 128,
			p1: 32,
			a0z: 0
		}, this.fG[10] = {
			name: L(143),
			a2I: a9D,
			a2J: a9E,
			a2K: a9F
		}, this.fG[11] = {
			name: L(144),
			a2I: a9G,
			a2J: a9H,
			a2K: a9I
		}, this.fG[12] = {
			name: L(145),
			a2I: a9G,
			a2J: a9H,
			a2K: a9I
		}, this.fG[13] = {
			name: L(146),
			a2I: a9B,
			a2J: cos,
			a2K: a9C
		}, this.fG[14] = {
			name: L(147),
			a2I: a9B,
			a2J: cos,
			a2K: a9C
		}, this.fG[15] = {
			name: L(148),
			a2I: a9D,
			a2J: a9E,
			a2K: a9F
		}, this.fG[16] = {
			name: L(149),
			a2I: a9D,
			a2J: a9E,
			a2K: a9F
		}, this.fG[17] = {
			name: L(150),
			a2I: a9B,
			a2J: cos,
			a2K: a9C
		}, this.fG[18] = {
			name: L(151),
			a2I: a9G,
			a2J: a9H,
			a2K: a9I
		}, this.fG[19] = {
			name: L(152),
			a2I: a9B,
			a2J: cos,
			a2K: a9C
		}, this.fG[20] = {
			name: L(153),
			b4: 1024,
			b9: 1024,
			p4: 128,
			p1: 32,
			a0z: 0
		}, this.fG[21] = {
			name: L(136) + " 2",
			b4: 940,
			b9: 940,
			p4: 80,
			p1: 8,
			a0z: 0
		}, this.fG[22] = {
			name: L(154),
			a2I: a9G,
			a2J: a9H,
			a2K: a9I
		}, this.fG[23] = {
			name: L(155),
			a2I: a9D,
			a2J: a9E,
			a2K: a9F
		}, this.fG[t.a9J] = {
			name: ""
		}, this.a0w = new Uint8Array(12);
		for (var ai = 0; ai < 10; ai++) this.a0w[ai] = ai;
		for (this.a0w[10] = 20, this.a0w[11] = 21, this.a0y = new Uint8Array(t.a9K), ai = 0; ai < 10; ai++) this.a0y[ai] = 10 + ai;
		this.a0y[10] = 22, this.a0y[11] = 23
	}
}

function a9L() {
	var a6c = [L(156), L(157), L(158), L(159), L(160), L(161), L(162)],
		a9M = [100, 60, 30, 15, 6, 1],
		a9N = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		a9O = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		a9Q = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a6k = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.a7E = function(id, oo, a8) {
		oo = this.a9R(oo);
		return +(a9N[oo][id] > a8)
	}, this.a9R = function(oo) {
		for (var ai = 0; ai < a9M.length; ai++)
			if (a9M[ai] <= oo) return ai;
		return a9M.length
	}, this.a9S = function(oo) {
		return a6c[this.a9R(oo)]
	}, this.a6j = function(id, pX) {
		return a9O[id].replace(new RegExp("x", "g"), pX)
	}, this.a6l = function(id, pX) {
		return a9Q[id].replace(new RegExp("x", "g"), pX)
	}, this.a9T = function(id, fP) {
		return this.a6k[5][id]
	}
}

function a9U() {
	this.xA = function() {
		return bA.bB.bC() ? 2 : 1
	}
}

function a9V() {
	function a9k() {
		var id = cM.cR(3);
		return 0 === id ? {
			id: id,
			d8: cM.cR(30),
			ap: aY.bo.a9n(bw.cY.cZ(7))
		} : 1 === id ? {
			id: id,
			d8: cM.cR(30),
			q9: cM.cR(3),
			value: cM.cR(30),
			target: cM.cR(30)
		} : 2 === id ? {
			id: id,
			d8: cM.cR(30),
			q9: cM.cR(3)
		} : 3 === id ? {
			id: id,
			d8: cM.cR(30),
			q9: cM.cR(3),
			value: cM.cR(4),
			target: cM.cR(30)
		} : 4 === id ? {
			id: id,
			d8: cM.cR(30),
			q9: cM.cR(3),
			target: cM.cR(30)
		} : 5 === id ? {
			id: id,
			q9: cM.cR(6)
		} : 6 === id ? {
			id: id,
			value: cM.cR(17)
		} : null
	}
	this.a9W = function(hZ) {
		if (hZ !== bM.aZ.hk) bM.aZ.close(hZ, 3239);
		else if (6 !== cB.mP()) bM.aZ.close(hZ, 3271);
		else {
			aY.q();
			for (var ai = 0; ai < 4; ai++) {
				var ab = aY.aZ.ac[ai],
					playerCount = (ab.rr = cM.cR(10), ab.fH = cM.cR(6), ab.mapSeed = cM.cR(14), ab.rl = cM.cR(4), ab.rm = cM.cR(6), ab.rn = cM.cR(4), ab.rx = cM.cR(1), ab.rp = cM.cR(12), ab.spawningSeed = cM.cR(14), cM.cR(16));
				aY.bl.rv[ai] = cM.cR(16);
				for (var gF = 0; gF < playerCount; gF++) aY.bl.a9X(ai, cM.cR(30), bw.cY.cZ(5), cM.cR(4), cM.cR(30), cM.cR(7), cM.cR(16), cM.cR(18), cM.cR(11), cM.cR(12))
			}
			ax.gu(29), aY.aZ.a9Y(!0)
		}
	}, this.a9Z = function(hZ) {
		if (hZ !== bM.aZ.hk) bM.aZ.close(hZ, 3239);
		else if (aY.bs) {
			aY.aZ.s1[0] = cM.cR(20), aY.aZ.s1[1] = cM.cR(20);
			for (var a9a = cM.cR(16), gF = 0; gF < a9a; gF++) {
				var id = cM.cR(3);
				0 === id ? aY.bl.a9X(cM.cR(2), cM.cR(30), bw.cY.cZ(5), 0, 1234566, 127, 0, cM.cR(18), 0, cM.cR(12)) : 1 === id ? aY.bl.a9b(cM.cR(16), cM.cR(2)) : 2 === id ? aY.bl.a9c(cM.cR(16), cM.cR(2), cM.cR(2)) : 3 === id ? aY.bl.a9d(cM.cR(
					16), cM.cR(2)) : 4 === id ? aY.bl.a9e(cM.cR(16), cM.cR(2), cM.cR(4), cM.cR(30), cM.cR(7), cM.cR(16), cM.cR(11)) : 5 === id && aY.bl.a9f(cM.cR(16), cM.cR(2), cM.cR(1))
			}
			for (var ai = 0; ai < 4; ai++) {
				var ab = aY.aZ.ac[ai];
				if (ab.rr = cM.cR(10), 0 === ab.rr) {
					if (ab.li = cM.cR(10), ab.a9g = cM.cR(10), aY.bq.ut(ai)) return;
					ab.fH = cM.cR(6), ab.mapSeed = cM.cR(14), ab.rl = cM.cR(4), ab.rm = cM.cR(6), ab.rn = cM.cR(4), ab.rx = cM.cR(1), ab.rp = cM.cR(12), ab.spawningSeed = cM.cR(14), ab.a9h.push(ab.a9h[0]), ab.a9h.shift()
				}
			}
			aY.aZ.a4b()
		} else bM.aZ.close(hZ, 3251)
	}, this.a9i = function(hZ) {
		if (hZ !== bM.aZ.hk) bM.aZ.close(hZ, 3272);
		else if (aY.bs) {
			for (var aX = cM.cR(4), ab = aY.aZ.ac[aX], ad = ab.ad, i2 = (ab.ag = cM.cR(20), cM.cR(6)), ai = 0; ai < i2; ai++) {
				var a9j = a9k();
				aY.at.a9l(a9j), ad.push(a9j)
			}
			aY.aZ.a9m(aX)
		} else bM.aZ.close(hZ, 3273)
	}, this.a9o = function(hZ) {
		hZ !== bM.aZ.hk ? bM.aZ.close(hZ, 3276) : aY.bs ? aY.message.q7(a9k()) : bM.aZ.close(hZ, 3277)
	}
}

function a9p(ho) {
	var lq, lr, ii;
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), lr.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(L(163), [new aM("⬅️ " + L(10), function() {
		ax.va(10)
	})]), lr = new iW(lq.iX, ((ii = []).push(function() {
		var vf, hW = new il,
			vh = new a7(bz.c0.data[132], 1, function() {
				vf.button.click()
			}),
			vi = new a7(bz.c0.data[131], 1, function() {
				vh.aH.focus()
			});
		hW.im(L(97)), hW.ir(vi), vi.aH.style.marginBottom = "0.8em", hW.im(L(98)), hW.ir(vh);
		return vf = new aM(L(96), function() {
			h5 = Math.floor(vi.aH.value), h6 = Math.floor(vh.aH.value);
			var h6, h5 = {
				a9t: Math.min(h5, h6),
				a9u: Math.max(h5, h6)
			};
			ax.gu(8, ax.ls(10).lt, new lz(21, {
				qn: ho.qn,
				h5: h5.a9t,
				h6: h5.a9u
			}))
		}, 0, 0, 1), hW.ir(new m4([vf.button])), hW
	}()), ii.push(function() {
		var vf, hW = new il,
			vh = new a7(bz.c0.data[134], 1, function() {
				vf.button.click()
			}),
			vi = new a7(bz.c0.data[133], 0, function() {
				vh.aH.focus()
			});
		return hW.im(1 === ho.qn ? L(164) : L(165)), hW.ir(vi), vi.aH.style.marginBottom = "0.8em", hW.im(L(166)), hW.ir(vh), vf = new aM(L(96), function() {
			var qp = vi.aH.value.slice(0, 20),
				qq = Math.abs(Math.floor(vh.aH.value));
			ax.gu(8, ax.ls(10).lt, new lz(22, {
				qn: ho.qn,
				qp: qp,
				qq: qq
			}))
		}, 0, 0, 1), hW.ir(new m4([vf.button])), hW
	}()), ii.push(function() {
		var vf, hW = new il,
			vh = new a7(bz.c0.data[152], 1, function() {
				vf.button.click()
			}),
			vi = new a7(bz.c0.data[151], 0, function() {
				vh.aH.focus()
			});
		return hW.im(L(167)), hW.ir(vi), vi.aH.style.marginBottom = "0.8em", hW.im(L(166)), hW.ir(vh), vf = new aM(L(96), function() {
			var qp = vi.aH.value.slice(0, 5),
				qq = Math.abs(Math.floor(vh.aH.value));
			ax.gu(8, ax.ls(10).lt, new lz(28, {
				qn: ho.qn,
				qp: qp,
				qq: qq
			}))
		}, 0, 0, 1), hW.ir(new m4([vf.button])), hW
	}()), ii))
}

function mQ(title, v5, a9v) {
	var lq, qe;
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), qe.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, a9v = a9v || [new aM("⬅️ " + L(10), function() {
		ax.ic()
	}, aJ.nK)], lq = new iU(title, a9v), qe = new qg(lq.iX, v5), aR.az.textAlign(lq.iX.style, 1)
}

function a9w() {
	var a9x, a9y, kV, a9z;
	this.q = function() {
		var ai, r, s, hh, aA0, b4, b9, f4, wP, wQ, er, o4, kM, gF, eM;
		if (function() {
				if (kV = !0, a9z = "rgb(" + t.a2X[0] + "," + t.a2X[1] + "," + t.a2X[2] + ")", t.aA3(t.fH)) return 1;
				return kV = !1, 0
			}()) a9y = null;
		else {
			for (a9x = je.kI(96, 4), aA0 = 1 === t.fH ? (hh = 0, 160) : (hh = 128, 32), a9z = "rgb(" + hh + "," + hh + "," + hh + ")", a9y = new Array(4), ai = 3; 0 <= ai; ai--) {
				if (a9y[ai] = document.createElement("canvas"), b4 = ai % 2 == 0 ? t.u : a9x, b9 = ai % 2 == 0 ? a9x : t.v + 2 * a9x, a9y[ai].width = b4, a9y[ai].height = b9, wQ = (wP = (f4 = a9y[ai].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, b4, b9)).data, ai % 2 == 0)
					for (s = a9x - 1; 0 <= s; s--)
						for (er = aA0 + Math.floor((s + 1) * (hh - aA0) / (a9x + 1)), r = b4 - 1; 0 <= r; r--) wQ[o4 = 4 * ((0 === ai ? a9x - s - 1 : s) * b4 + r)] = er, wQ[o4 + 1] = er, wQ[o4 + 2] = er, wQ[o4 + 3] = 255;
				else {
					for (r = a9x - 1; 0 <= r; r--)
						for (er = aA0 + Math.floor((r + 1) * (hh - aA0) / (a9x + 1)), s = b9 - 1 - a9x; a9x <= s; s--) wQ[o4 = 4 * (s * b4 + (3 === ai ? a9x - r - 1 : r))] = er, wQ[o4 + 1] = er, wQ[o4 + 2] = er, wQ[o4 + 3] = 255;
					for (gF = 1; 0 <= gF; gF--)
						for (r = a9x - 1; 0 <= r; r--)
							for (s = a9x - 1; 0 <= s; s--) kM = (Math.pow(r * r + s * s, .5) + 1) / (a9x + 1), er = aA0 + Math.floor((1 < kM ? 1 : kM) * (hh - aA0)), wQ[o4 = 4 * ((0 === gF ? a9x - s - 1 : s + gF * (b9 - a9x)) * b4 + (1 === ai ?
								r : a9x - r - 1))] = er, wQ[o4 + 1] = er, wQ[o4 + 2] = er, wQ[o4 + 3] = 255
				}
				f4.putImageData(wP, 0, 0)
			}
			eM = aA0, t.a2U.fillStyle = "rgb(" + eM + "," + eM + "," + eM + ")", t.a2U.fillRect(0, 0, t.u, 1), t.a2U.fillRect(0, t.v - 1, t.u, 1), t.a2U.fillRect(0, 0, 1, t.v), t.a2U.fillRect(t.u - 1, 0, 1, t.v)
		}
	}, this.or = function() {
		var gF = kV ? 0 : -a9x;
		aA4(gF, gF, t.u - 2 * gF, t.v - 2 * gF, h.py, h.pz, h.q0, h.q1) || (eD.fillStyle = a9z, eD.fillRect(0, 0, b3.b4, b3.b9))
	}, this.eC = function() {
		kV || (aA5(0, -a9x, t.u, a9x, h.py, h.pz, h.q0, h.q1) && eD.drawImage(a9y[0], h.pw, h.px - a9x), aA5(t.u, -a9x, a9x, t.v + 2 * a9x, h.py, h.pz, h.q0, h.q1) && eD.drawImage(a9y[1], h.pw + t.u, h.px - a9x), aA5(0, t.v, t.u, a9x, h.py, h.pz,
			h.q0, h.q1) && eD.drawImage(a9y[2], h.pw, h.px + t.v), aA5(-a9x, -a9x, a9x, t.v + 2 * a9x, h.py, h.pz, h.q0, h.q1) && eD.drawImage(a9y[3], h.pw - a9x, h.px - a9x))
	}
}

function aA6() {
	this.q = function() {
		8 === bK.k7 && bI.aA7()
	}, this.aA8 = function(aA9) {
		var elo = bK.data.elo,
			uo = (elo[aA9] - elo[1 - aA9]) / 10,
			uo = 8 / (1 + Math.pow(2, uo / 32)),
			uo = Math.floor(10 * uo + .5),
			aAB = elo[aA9] + uo,
			aAB = this.aAD(aAB),
			elo = this.aAD(elo[1 - aA9] - uo);
		0 === aA9 ? bI.aAF(aAB, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : bI.aAF(elo, aAB, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.aAD = function(elo) {
		return 16e3 === (elo = je.jf(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function aAG() {
	this.g8 = function(en, font, maxWidth) {
		if (font && (eD.font = font), eD.measureText(en).width <= maxWidth) return en;
		for (var ai = en.length - 1; 1 <= ai; ai--)
			if (en = en.substring(0, ai), eD.measureText(en + "...").width <= maxWidth) return en + "...";
		return "..."
	}
}

function aAI() {
	var g, j, k, l, aAJ = 0,
		aAK = 0;

	function aAN() {
		return Math.pow(Math.pow(k - g, 2) + Math.pow(l - j, 2), .5)
	}

	function aAL(aH) {
		g = b3.b5 * aH.touches[0].clientX, j = b3.b5 * aH.touches[0].clientY, k = b3.b5 * aH.touches[1].clientX, l = b3.b5 * aH.touches[1].clientY
	}
	this.zb = function(aH) {
		return 1 < aH.touches.length ? (aAK = bu.bv, aAJ = 3, aAL(aH), jS.aw(), !0) : (aAJ = 0, !1)
	}, this.zc = function(aH) {
		var aAM, db, de;
		return 0 !== bK.fC && 1 < aH.touches.length && (aAJ = Math.max(aAJ - 1, 0), di.dj() && (aAM = aAN(), aAL(aH), aH = aAN(), db = Math.floor((g + k) / 2), de = Math.floor((j + l) / 2), e7.dv(db, de, Math.max(.125, aH) / Math.max(.125, aAM)),
			bu.dw = !0), !0)
	}, this.a03 = function() {
		var r, s;
		return !!(aAJ && (aAJ = 0, bu.bv < aAK + 500)) && (r = (g + k) / 2, s = (j + l) / 2, jS.yC(r, s), jS.click(r, s, !0) && (bu.dw = !0), !0)
	}
}

function aAP() {
	this.size = 0, this.a8 = 0, this.hl = null, this.q = function(hl) {
		this.a8 = 0, this.hl = hl, this.size = hl.length
	}, this.cC = function() {
		this.hl = null
	}, this.cR = function(size) {
		for (var er = 0, hl = this.hl, dj = this.a8 + size - 1, ai = this.a8; ai <= dj; ai++) er |= (hl[ai >> 3] >> 7 - (7 & ai) & 1) << dj - ai;
		return this.a8 += size, this.a8 > 8 * this.size && console.error("Unwrapper Overflow"), er
	}, this.cX = function(size) {
		var pW = size >> 1;
		return (1 << pW) * this.cR(size - pW) + this.cR(pW)
	}, this.vF = function(aAQ) {
		return this.size === cN.cO(aAQ)
	}, this.aAR = function(eo, aAS, aAT) {
		var nt = this.cR(eo);
		if (!nt) return null;
		for (var eo = Math.max(nt, aAT), nu = new(aAS <= 8 ? Uint8Array : aAS <= 16 ? Uint16Array : Uint32Array)(eo), ai = 0; ai < nt; ai++) nu[ai] = this.cR(aAS);
		aAT = nu[nt - 1];
		return aAT && nu.fill(aAT, nt), nu
	}, this.aAU = function(eo, aAV, aAT) {
		var nt = this.cR(eo);
		if (!nt) return null;
		for (var eo = Math.max(nt, aAT), nu = new Array(eo), ai = 0; ai < nt; ai++) nu[ai] = this.aAW(aAV);
		return nu.fill(nu[nt - 1], nt), nu
	}, this.aAW = function(eo) {
		return bw.lc.vO(this.cR(eo))
	}, this.aAX = function() {
		var en = cI.bx.cJ(cI.bx.cK(this.cR(30))),
			en = aR.aS.aAY(en, "_", "/");
		en = aR.aS.aAY(en, "-", "+");
		for (var aAZ = "";
			(en.length + aAZ.length) % 4;) aAZ += "=";
		en = "data:image/png;base64," + en + aAZ;
		var uE = new Image;
		uE.onload = function() {
			zK.zQ.aAa(uE), uE.onload = null, uE = null
		}, uE.src = en
	}
}

function aAb() {
	this.y6 = function(aAc, a8, y5) {
		var wK = aAc.height,
			mD = aR.az.wJ(wK, wK),
			uH = aR.az.getContext(mD);
		return function(b4, uH, y5) {
			uH.fillStyle = y5, uH.beginPath(), uH.arc(b4 / 2, b4 / 2, .47 * b4, 0, 2 * Math.PI), uH.fill()
		}(wK, uH, y5), uH.drawImage(aAc, -a8 * wK, 0), mD
	}, this.aAe = function(aAf) {
		var uH, wP, wK = aAf.height;
		return aAf.width === wK && (wP = (uH = aR.az.getContext(aAf, !0)).getImageData(0, 0, wK, wK), aR.aAg.a0n(wP.data, wK, wK, .9), uH.putImageData(wP, 0, 0)), aAf
	}
}

function aAh() {
	var b4, r, aAi, canvas, f4, mO, a3q, aAj, ez, aAk, aAl = 11 / 12;

	function aAm() {
		var sd = Math.floor(a3q * (b4 - 2 * aAi)),
			aAo = 1 + Math.floor(.0625 * fV.b9),
			aAp = 1 + Math.floor(.3 * fV.b9),
			mN = Math.floor(.55 * fV.b9);
		f4.clearRect(0, 0, b4, fV.b9), f4.fillStyle = aJ.gI, f4.fillRect(0, 0, aAi, fV.b9), f4.fillRect(aAi + sd, 0, b4 - aAi - sd, fV.b9), f4.fillStyle = a3q < 1 / 3 ? "rgba(" + Math.floor(3 * a3q * 130) + ",130,0,0.85)" : a3q < 2 / 3 ?
			"rgba(130," + (130 - Math.floor(3 * (a3q - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (a3q - 2 / 3) * 130) + ",0.85)", f4.fillRect(aAi, 0, sd, fV.b9), f4.fillStyle = aJ.eA, f4.fillRect(0, 0, b4, 1), f4.fillRect(0, fV
				.b9 - 1, b4, 1), f4.fillRect(0, 0, 1, fV.b9), f4.fillRect(aAi, 0, 1, fV.b9), f4.fillRect(aAi + sd, 0, 1, fV.b9), f4.fillRect(b4 - aAi, 0, 1, fV.b9), f4.fillRect(b4 - 1, 0, 1, fV.b9), f4.fillRect(Math.floor(.25 * fV.b9) + aAp, Math
				.floor((fV.b9 - aAo) / 2), fV.b9 - 2 * aAp, aAo), f4.fillRect(Math.floor(b4 - 1.25 * fV.b9) + aAp, Math.floor((fV.b9 - aAo) / 2), fV.b9 - 2 * aAp - aAp % 2, aAo), f4.fillRect(Math.floor(b4 - 1.25 * fV.b9) + Math.floor((fV.b9 - aAo) /
				2), aAp, aAo, fV.b9 - 2 * aAp - aAp % 2), aAj = aR.bc.a44(bK.bL, fV.yO()), f4.fillText(aR.aS.t3(aAj) + " (" + aR.aS.aAq(100 * a3q, +(a3q < .1)) + ")", Math.floor(.5 * b4), mN)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		a3q = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => fV.a07(arg1);

	function aAu(e6) {
		return !(1 < e6 && 1 === a3q || (1 < e6 && e6 * a3q - a3q < 1 / 1024 ? e6 = (a3q + 1 / 1024) / a3q : e6 < 1 && a3q - e6 * a3q < 1 / 1024 && (e6 = (a3q - 1 / 1024) / a3q), a3q = je.jf(a3q * e6, 1 / 1024, 1), aAm(), 0))
	}

	function aAv(ds) {
		return a3q !== (a3q = je.jf((ds - r - aAi) / (b4 - 2 * aAi), 1 / 1024, 1)) && (aAm(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aAm(), bu.dw = !0
	}, this.s = 0, this.a00 = !1, this.q = function() {
		mO = !bK.j9 && !bK.bY, aAk = !1, a3q = .5, aAj = 0, this.a00 = !1, this.resize()
	}, this.resize = function() {
		bA.bB.bC() && b3.b4 < .8 * b3.b9 ? (this.b9 = Math.floor(.066 * b3.dG), b4 = b3.b4 - 4 * dH.gap - this.b9) : (b4 = Math.floor((bA.bB.bC() ? .65 : .389) * b3.dG), b4 += 12 - b4 % 12, this.b9 = Math.floor(b4 / 12)), aAi = Math.floor(3 *
			this.b9 / 2), ez = aR.az.f8(1, Math.floor(.5 * this.b9)), (canvas = document.createElement("canvas")).width = b4, __fx.mobileKeybinds.setSize(b4, this.b9, eD), canvas.height = this.b9, (f4 = canvas.getContext("2d", {
			alpha: !0
		})).font = ez, aR.az.textBaseline(f4, 1), aR.az.textAlign(f4, 1), this.dS(), aAm()
	}, this.dS = function() {
		r = bA.bB.bC() && b3.b4 < .8 * b3.b9 ? this.b9 + 3 * dH.gap : Math.floor((b3.b4 - b4) / 2), this.s = b3.b9 - this.b9 - x9.xA() * dH.gap
	}, this.gC = function() {
		aAk && (aAk = !1, aAm())
	}, this.mO = function() {
		return !(!mO || vs.vt && r < Math.floor(dH.gap + 5.5 * this.b9))
	}, this.x7 = function(x8) {
		return !!this.mO() && r + b4 > b3.b4 - x8 - dH.gap
	}, this.jE = function() {
		mO = !bK.bY
	}, this.ub = function() {
		mO = !1
	}, this.yO = function() {
		return je.jf(Math.floor(1024 * a3q + .5) - 1, 0, 1023)
	}, this.oK = function(ds, dt) {
		return this.mO() && r < ds && ds < r + b4 && dt > this.s
	}, this.df = function(ds, dt) {
		if (!this.mO()) return !1;
		if (!(__fx.settings.keybindButtons && dt > this.s - Math.floor(dH.gap / 4) - this.b9 && dt < this.s - Math.floor(dH.gap / 4) && __fx.mobileKeybinds.click(ds - r))) {
			if (!fV.oK(ds, dt)) return !1;
			e7.dR = !1, ! function(jw, ds, dt) {
				if (function(ds, dt) {
						return r < ds && ds < r + aAi && dt > fV.s
					}(ds, dt)) return aAu(aAl);
				if (function(ds, dt) {
						return r + b4 - aAi < ds && ds < r + b4 && dt > fV.s
					}(ds, dt)) return aAu(1 / aAl);
				return jw.a00 = !0, aAv(ds)
			}(this, ds, dt) || (bu.dw = !0)
		}
		return !0
	}, this.a07 = function(du) {
		0 !== bK.fC && this.mO() && aAu(du) && (bu.dw = !0)
	}, this.dh = function(deltaY) {
		var du;
		return !(0 === deltaY || !this.mO()) && aAu(du = 0 < deltaY ? (du = 400 / (400 + deltaY)) < aAl ? aAl : du : 1 / aAl < (du = (400 - deltaY) / 400) ? 1 / aAl : du)
	}, this.dk = function(ds) {
		return !!this.a00 && aAv(ds)
	}, this.a01 = function() {
		this.a00 = !1
	}, this.fA = function() {
		this.mO() && aAj !== aR.bc.a44(bK.bL, this.yO()) && (aAk = !0)
	}, this.eC = function() {
		this.mO() && (eD.drawImage(canvas, r, this.s), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(eD, r, this.s)
	}
}

function aAw() {
	this.uZ = function() {
		var aAz;
		return !(my.mz < 3 || fL.ge[fZ[0]] >= bK.a2l >> 1) && (bK.fR ? 9 !== bK.k7 && (aAz = a2n.a2y(), !(2 * a2n.a30(fT.oY()) >= aAz)) : function() {
			if (8 === bK.k7) return !1;
			var aAz = a2n.a2y();
			if (2 * fL.jD[fZ[0]] >= aAz) return !1;
			return !0
		}())
	}
}

function aB1() {
	this.kI = function(gF, pW) {
		return Math.floor((gF + .5) / pW)
	}, this.aB2 = function(gF, pW) {
		return Math.floor(gF * (pW + .5))
	}, this.sqrt = function(er) {
		return ~~Math.sqrt(er + .5)
	}, this.pow = function(aH) {
		return Math.floor(Math.pow(2, aH) + .5)
	}, this.jf = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aB3 = function(sG, sH, mA) {
		return Math.max(Math.min(sG, sH), mA)
	}, this.aB4 = function(aB5, aB6, r, s) {
		r -= aB5, aB5 = s - aB6, s = 0;
		return 0 == r ? s = 0 <= aB5 ? Math.PI : 0 : (s = Math.atan(aB5 / r), s += 0 < r ? .5 * Math.PI : 1.5 * Math.PI), s
	}, this.log2 = function(er) {
		return Math.floor(!!er * (1 + Math.log2(er + .5)))
	}, this.log10 = function(er) {
		return Math.floor(Math.log10(er + .5))
	}, this.aB8 = function(aB9, aBA, aBB, aBC, aBD) {
		return aBB - aBD < aB9 && aB9 < aBB + aBD && aBC - aBD < aBA && aBA < aBC + aBD
	}, this.a7S = function(e1, e3) {
		return e1 * e1 + e3 * e3
	}
}

function aBE() {
	this.oy = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.gU = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aJ.eA, "rgb(170,170,170)"
	], this.aBF = [aJ.eA, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aJ.eA, aJ.fY], this.aBG = [aJ.fY, aJ.eA, aJ.eA, aJ.eA, aJ.fY, aJ.fY, aJ.fY, aJ.fY, aJ.eA];
	var aBH = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.a8m = ["rgba(" + aBH[0] + ",", "rgba(" + aBH[1] + ",", "rgba(" + aBH[2] + ",", "rgba(" + aBH[3] + ",", "rgba(" + aBH[4] + ",", "rgba(" + aBH[5] + ",", "rgba(" + aBH[6] + ",", "rgba(" + aBH[7] + ",", "rgba(" + aBH[8] + ",", "rgba(" + aBH[9] +
			","
		], this.a8n = ["rgb(" + aBH[0] + ")", "rgb(" + aBH[1] + ")", "rgb(" + aBH[2] + ")", "rgb(" + aBH[3] + ")", "rgb(" + aBH[4] + ")", "rgb(" + aBH[5] + ")", "rgb(" + aBH[6] + ")", "rgb(" + aBH[7] + ")", "rgb(" + aBH[8] + ")", "rgb(" + aBH[9] +
			")"
		], this.jb = null, this.wM = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aBI = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.oZ = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.og = new Uint8Array(bK.g6), this.gV = new Uint8Array(bK.g6), this.aBJ = new Uint16Array(bK.g6), this.aBK = new Uint16Array(this.oZ.length + 1), this.aBL = new Uint16Array(this.oZ.length), this
		.aBM = function() {
			this.jb = [L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176)]
		}, this.q = function() {
			if (this.og.fill(0), this.gV.fill(0), this.aBN(), bK.fR) {
				if (9 === bK.k7) {
					for (var og = gT.og, ai = bK.data.teamPlayerCount[7] - 1; 0 <= ai; ai--) og[ai] = 1;
					var ae = bK.g6;
					for (ai = bK.data.teamPlayerCount[7]; ai < ae; ai++) og[ai] = 2;
					gT.oZ[1] = 7, gT.oZ[2] = 8
				} else bK.bX ? function() {
					var aBI = gT.aBI,
						colorsData = bK.data.colorsData;
					if (!bK.data.selectableColor)
						for (var ai = bK.gd - 1; 0 <= ai; ai--) colorsData[ai] = kJ.tM(262144);
					var aBZ = 0,
						kM = 768,
						hh = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = bK.data.teamPlayerCount;
					for (ai = 0; ai < 9; ai++)
						if (teamPlayerCount[ai]) {
							for (var iP = 0, pW = 0; pW < 3; pW++) iP += Math.abs(aBI[ai][pW] - hh[pW]);
							iP < kM && (aBZ = ai, kM = iP)
						} var aBa = new Uint16Array(9);
					for (ai = 0; ai < 9; ai++) aBa[ai] = teamPlayerCount[ai];
					var oZ = gT.oZ,
						aBb = new Uint8Array(9),
						nt = (oZ[0] = 0, 1);
					for (ai = 1; ai < 9; ai++) aBa[ai] && (aBb[ai] = nt, oZ[nt++] = ai);
					var af = bK.gd,
						og = gT.og;
					aBa[aBZ] ? (aBa[aBZ]--, og[0] = aBb[aBZ]) : af = 0;
					var iJ = 0;
					for (ai = af; ai < bK.a4j; ai++) {
						var jc = oZ[iJ];
						if (aBa[jc]) aBa[jc]--, og[ai] = aBb[jc];
						else if (ai--, 9 <= ++iJ) return console.log("error 325")
					}
				}() : this.fA();
				! function() {
					for (var ae = bK.g6, aBJ = gT.aBJ, aBK = gT.aBK, aBL = gT.aBL, og = gT.og, oZ = gT.oZ, aBj = oZ.length, c0 = new Array(aBj), ai = 0; ai < aBj; ai++) c0[ai] = [];
					for (ai = 0; ai < ae; ai++) c0[oZ[og[ai]]].push(ai);
					for (ai = 1; ai <= aBj; ai++) aBK[ai] = aBK[ai - 1] + c0[ai - 1].length;
					for (ai = 0; ai < aBj; ai++)
						for (var nt = c0[ai].length, kG = aBK[ai], jc = 0; jc < nt; jc++) aBJ[jc + kG] = c0[ai][jc];
					var gd = bK.gd;
					for (ai = 0; ai < aBj; ai++)
						for (nt = c0[ai].length, kG = aBK[ai], jc = 0; jc < nt; jc++)
							if (aBJ[jc + kG] >= gd) {
								aBL[ai] = jc;
								break
							}
				}(), ! function() {
					for (var ae = bK.g6, og = gT.og, gV = gT.gV, oZ = gT.oZ, ai = 0; ai < ae; ai++) gV[ai] = oZ[og[ai]];
					9 === bK.k7 && gV.fill(1, ae - wU.wV[5])
				}()
			}
		}, this.aBN = function() {
			for (var ai = this.oZ.length - 1; 0 <= ai; ai--) this.oZ[ai] = ai
		}, this.fA = function() {
			var a8s = new Uint8Array(bK.gd),
				a8t = new Uint8Array(bK.gd),
				aBS = new Uint16Array(8),
				aBT = new Uint16Array(this.oZ.length);
			this.aBU(a8s, a8t, aBS, 1), this.aBV(aBS), this.aBW(aBT, a8s, a8t), this.aBX(a8s, a8t, aBT), this.aBY()
		}, this.aBU = function(a8s, a8t, aBa, aBc) {
			for (var pW, aH, aBd, ae = this.oZ.length - aBc, nu = new Uint16Array(ae), aBI = this.aBI, colorsData = bK.data.colorsData, ai = bK.gd - 1; 0 <= ai; ai--) {
				for (pW = ae; aBc <= pW; pW--) nu[pW - 1] = Math.abs(4 * (colorsData[ai] >> 12) - aBI[pW][0]) + Math.abs(4 * (colorsData[ai] >> 6 & 63) - aBI[pW][1]) + Math.abs(4 * (63 & colorsData[ai]) - aBI[pW][2]);
				for (aBd = 768, pW = ae - 1; 0 <= pW; pW--) nu[aH = (pW + ai) % ae] < aBd && (aBd = nu[aH], a8s[ai] = aH);
				for (aBa[a8s[ai]] += 4, aBd = 768, pW = ae - 1; 0 <= pW; pW--) nu[aH = (pW + ai) % ae] < aBd && aH !== a8s[ai] && (aBd = nu[aH], a8t[ai] = aH);
				aBa[a8t[ai]]++
			}
		}, this.aBV = function(aBa) {
			for (var pW, kL, ae = this.oZ.length - 1, ai = ae; 0 <= ai; ai--) this.oZ[ai] = ai;
			for (ai = ae - 1; 0 <= ai; ai--) aBa[ai]++;
			for (ai = 1; ai <= ae; ai++) {
				for (kL = 0, pW = 1; pW < ae; pW++) aBa[pW] > aBa[kL] && (kL = pW);
				aBa[kL] = 0, this.oZ[ai] = kL + 1
			}
		}, this.aBW = function(aBT, a8s, a8t) {
			var pW, vX, iJ, iP, aH, du, qS, aBe = this.oZ.length - 1,
				iL = new Uint16Array(aBe),
				aBf = [],
				aBg = 0,
				qs = [],
				aBh = [];
			loop: for (var ai = 0; ai < bK.gd; ai++)
				if (null !== (vX = aR.aS.a6t(fL.g9[ai]))) {
					for (pW = qs.length - 1; 0 <= pW; pW--)
						if (vX === qs[pW]) {
							aBh[pW].push(ai), aBg = Math.max(aBg, aBh[pW].length);
							continue loop
						} qs.push(vX), aBf.push(!1), aBh.push([ai]), aBg = Math.max(aBg, 1)
				}
			for (; 2 < bK.oT && aBg > je.kI(bK.gd, bK.oT);) bK.oT--, bK.k7--;
			for (pW = qs.length - 1; 0 <= pW; pW--) {
				for (iP = -1, iJ = qs.length - 1; 0 <= iJ; iJ--) !aBf[iJ] && (-1 === iP || aBh[iJ].length > aBh[iP].length) && (iP = iJ);
				for (iJ = aBe - 1; 0 <= iJ; iJ--) iL[iJ] = 1;
				for (iJ = aBh[iP].length - 1; 0 <= iJ; iJ--) iL[a8s[aBh[iP][iJ]]] += 3, iL[a8t[aBh[iP][iJ]]]++;
				for (ai = aBe - 1; 0 <= ai; ai--) {
					for (aH = iP % aBe, iJ = aBe - 1; 0 <= iJ; iJ--) iL[iJ] > iL[aH] && (aH = iJ);
					for (du = -1, iJ = bK.oT; 0 < iJ; iJ--)
						if (this.oZ[iJ] === aH + 1) {
							du = iJ;
							break
						} if (iL[aH] = 0, -1 !== du) {
						for (qS = 0, iJ = bK.oT; 0 < iJ; iJ--) aBT[du] > aBT[iJ] && qS++;
						if (qS !== bK.oT - 1) {
							for (iJ = aBh[iP].length - 1; 0 <= iJ; iJ--) aBT[du]++, this.og[aBh[iP][iJ]] = du;
							break
						}
					}
				}
				aBf[iP] = !0
			}
		}, this.aBX = function(a8s, a8t, aBT) {
			for (var ai, a69, ae = this.oZ.length - 1, border = je.kI(bK.gd, bK.oT), aBi = (0 < bK.gd % bK.oT && border++, new Uint8Array(1 + ae)), pW = ae; 1 <= pW; pW--) aBi[this.oZ[pW]] = pW;
			for (ai = 0; ai < bK.gd; ai++) a69 = aBi[a8s[ai] + 1], 0 === this.og[ai] && a69 <= bK.oT && aBT[a69] < border && (aBT[a69]++, this.og[ai] = a69);
			for (ai = 0; ai < bK.gd; ai++) a69 = aBi[a8t[ai] + 1], 0 === this.og[ai] && a69 <= bK.oT && aBT[a69] < border && (aBT[a69]++, this.og[ai] = a69);
			for (pW = bK.oT; 1 <= pW; pW--)
				for (ai = bK.gd - 1; 0 <= ai && !(aBT[pW] >= border); ai--) 0 === this.og[ai] && (aBT[pW]++, this.og[ai] = pW)
		}, this.aBY = function() {
			for (var ai = bK.gd; ai < bK.g6; ai++) this.og[ai] = 1 + ai % bK.oT
		}
}

function ek() {
	this.fA = function(player, pJ) {
		player = h4.ak.pL(player, pJ);
		return !(player < 0 || !h4.eh.aBl(player) || (h4.eh.aBm(player), 0))
	}
}

function tF(jW, av) {
	var v1;
	this.resize = function() {
		for (var ai = 0; ai < jW.length; ai++) aR.az.bD(jW[ai].button);
		v1.style.gap = v1.style.padding = aR.az.b8(dH.aBo)
	}, (v1 = document.createElement("div")).style.display = "grid", v1.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", v1.style.overflowY = "auto", v1.style.gridAutoRows = "5.3em", v1.style.maxHeight = "100%";
	for (var ai = 0; ai < jW.length; ai++) jW[ai].iE(1), v1.appendChild(jW[ai].button);
	av.appendChild(v1)
}

function aBp() {
	this.aZ = new aBq, this.aBr = new aBs, this.bN = new aBt, this.rZ = new hX, this.hf = new lS, this.qu = new aBu, this.bZ = new aBv, this.ql = new xU, this.a5n = new aBw, this.aBx = new a9V, this.aBy = new v8, this.aBz = new cD, this.aC0 = new vQ,
		this.q = function() {
			this.aZ.q()
		}
}

function aC1() {
	this.data = new aC2;
	var aC3 = (new t9).L84,
		aC5 = (this.a0b = aC3, !(this.aC4 = "en"));
	this.q = function() {
		var en, nu;
		aC5 = !1, ("en" === (en = bz.c0.data[12].value).split("-")[0].toLowerCase() ? (ln.a0b = aC3, ln.aC4 = en, 1) : bz.c0.data[12].value === bz.c0.data[145].value && 0 < bz.c0.data[146].value && (en = bz.c0.data[146].value, (nu = bz.iB.aCC(en,
			!1)).length === en) && !!aR.ie.aCD(nu) && function(nu) {
			for (var ae = nu.length, b9 = 0; b9 < ae; b9++) nu[b9] = nu[b9].replace("&#39;", "'");
			var aCF = bz.iB.aCC(ae, !0);
			if (ae !== aCF.length) return !1;
			if (!aR.ie.aCD(aCF)) return !1;
			for (var kG = aC3.length, sl = new Array(kG), aCG = kG === ae, nt = Math.min(ae, kG), ai = 0; ai < kG; ai++)
				if (sl[ai] = aC3[ai], ai < ae && aCF[ai] === sl[ai]) sl[ai] = nu[ai];
				else {
					aCG = !1;
					for (var pW = 0; pW < nt; pW++)
						if (aCF[pW] === sl[ai]) {
							sl[ai] = nu[pW];
							break
						}
				} return ln.a0b = sl, ln.aC4 = bz.c0.data[12].value, aCG
		}(nu)) || (aC5 = !0)
	}, this.aCA = function() {
		gT.aBM(), wX.aBM(), zs.aBM(), jB.aBM(), aCB.q(), a6i = new a9L
	}, this.a0c = function() {
		return this.a0b === aC3 || !aC3.length
	}, this.qy = function() {
		var aCH;
		return !!aC5 && (aC5 = !1, 0 !== aC3.length) && (aCH = bz.c0.data[12].value, bM.hf.lb(0, aCH.slice(0, 20)), !0)
	}, this.vP = function(nu) {
		nu.length !== aC3.length ? 8 === ax.d2 && ax.d3().d7(30, 0, 1) : (this.a0b = nu, this.aC4 = bz.c0.data[12].value, bz.cG.cH(145, this.aC4), bz.cG.cH(146, nu.length), bz.iB.aCI(nu, !1), bz.iB.aCI(aC3, !0), 8 === ax.d2 ? ax.d3().d7(30) :
			0 === cB.mP() && 5 === ax.d2 && ax.aZ.qO())
	}, this.lo = function() {
		var aCJ, nu = navigator.languages;
		return nu && nu.length ? (aCJ = Math.max(ln.data.aCK(nu[0]), 0), 1 === nu.length ? [aCJ, aCJ] : [aCJ, Math.max(ln.data.aCK(nu[1]), 0)]) : [0, 0]
	}
}

function aBu() {
	this.aCL = function() {
		cN.ha(39), cN.et(1, 0), cN.et(6, 16), bM.hf.aCM(), bM.aZ.send(0, cN.hl)
	}, this.vG = function(hZ) {
		cN.ha(127), cN.et(1, 0), cN.et(6, 17), bw.bx.xV(bz.c0.data[105].value, 5), bw.bx.xV(bz.c0.data[106].value, 15), bM.aZ.send(hZ, cN.hl)
	}, this.r6 = function() {
		cN.ha(97), cN.et(1, 0), cN.et(6, 18), bw.bx.xV(bz.c0.data[110].value, 15), bM.aZ.send(0, cN.hl)
	}, this.qx = function(ho) {
		var ae = ho.en.length;
		cN.ha(21 + 16 * ae), cN.et(1, 0), cN.et(6, 29), cN.et(6, ho.ux), cN.et(8, ae), cI.lc.kY(ho.en), bM.aZ.send(0, cN.hl)
	}, this.aCO = function(cW, colors, aCP, oz) {
		hp.q(), hp.et(1, 0), hp.et(6, 16), hp.et(20, Math.min(cW, 1e6));
		for (var ai = 0; ai < 11; ai++)
			for (var gF = 0; gF < 3; gF++) hp.et(8, colors[ai][gF]);
		cW = ln.data.aCK(aCP.trim());
		hp.et(8, -1 === cW ? 255 : cW), cI.cY.em(oz.trim().substring(0, 180), 8, hp), bM.aZ.send(0, hp.hq())
	}, this.qv = function(data) {
		cN.ha(43), cN.et(1, 0), cN.et(6, 25), cN.et(6, data.ux), bw.bx.xV(data.d8, 5), bM.aZ.send(0, cN.hl)
	}, this.a7H = function(data) {
		cN.ha(75), cN.et(1, 0), cN.et(6, 27), cN.et(6, data.ux), bw.bx.xV(data.d8, 5), cN.aCQ(32, data.value), bM.aZ.send(0, cN.hl)
	}
}

function iU(title, tE, aCR) {
	var aCS = document.createElement("div"),
		aCT = document.createElement("div"),
		aCU = document.createElement("div"),
		aCV = document.createElement("div"),
		aCW = document.createElement("div");
	this.iX = aCU, this.iy = tE, this.show = function() {
			!1 !== aCR ? document.body.appendChild(aCS) : (document.body.appendChild(aCT), document.body.appendChild(aCV))
		}, this.aw = function() {
			!1 !== aCR ? ax.removeChild(document.body, aCS) : (ax.removeChild(document.body, aCT), ax.removeChild(document.body, aCV))
		}, this.nm = function() {
			var b1 = aR.az.b0(.1),
				ay = aR.az.b0(.08 + .04 * (b3.aCb < 1), .3);
			return {
				b1: b1,
				ay: ay,
				no: b3.b9 / b3.b5 - b1 - ay
			}
		}, this.resize = function(vm) {
			var ae = tE.length,
				nl = this.nm(),
				b1 = nl.b1,
				ay = nl.ay;
			for (aCT.style.height = aR.az.b8(b1), aR.az.bD(aCT, 2), aCV.style.top = aR.az.b8(b3.b9 / b3.b5 - ay), aCV.style.height = aR.az.b8(ay), aR.az.bD(aCV, 8), aCU.style.top = aR.az.b8(b1), aCU.style.height = aCU.style.maxHeight = aR.az.b8(nl
					.no), aCT.style.font = aR.az.f8(0, aR.az.b0(.02, .15)), aCV.style.font = aR.az.f8(0, aR.az.b0(.02, .7)), aCU.style.font = aR.az.f8(0, aR.az.b0(.02, .35)), ai = 1; ai < ae; ai++) aR.az.bD(tE[ai].button, 4);
			for (var vn = 0, ai = 0; ai < ae; ai++) vn += tE[ai].button.offsetWidth;
			if (vm && vn < aCV.offsetWidth)
				for (ai = 0; ai < ae; ai++) tE[ai].button.style.width = (100 * tE[ai].button.offsetWidth / vn).toFixed(2) + "%";
			else
				for (ai = 0; ai < ae; ai++) tE[ai].button.style.width = "auto";
			aCV.aCc && (aCV.scrollLeft = aCV.aCc), vm || this.resize(!0)
		}, this.eC = function() {
			var nl = this.nm(),
				iJ = b3.b5;
			eD.fillStyle = aJ.gI, eD.fillRect(0, iJ * nl.b1, b3.b4, iJ * nl.no)
		}, aCS.style.position = "absolute", aCS.style.top = "0", aCS.style.left = "0", aCS.style.width = "100%", aCS.style.height = "100%", aCT.style.position = "absolute", aCT.style.top = "0", aCT.style.left = "0", aCT.style.width = "100%", aCT
		.style.display = "flex", aCT.style.backgroundColor = aJ.gI, aCV.style.position = "absolute", aCV.style.left = "0", aCV.style.width = "100%", aR.az.aCX(aCV), aCW.style.height = aCW.style.maxHeight = "100%", aCU.style.position = "absolute", aCU
		.style.width = "100%", aCU.style.backgroundColor = aJ.gI,
		function() {
			for (var ai = 0; ai < tE.length; ai++) tE[ai].button.style.height = "100%", tE[ai].button.style.padding = "0.0em 0.9em"
		}();
	for (var ai = 0; ai < tE.length; ai++) aCW.appendChild(tE[ai].button);
	aCT.appendChild(function() {
		var aCa = document.createElement("h1");
		return aCa.textContent = title, aCa.style.margin = "auto", aCa.style.fontSize = 18 <= title.length && b3.b9 > b3.b4 ? "1.8em" : "2.3em", aCa.style.fontFamily = "Arial Black, Trebuchet MS", aCa
	}()), aCV.appendChild(aCW), !1 !== aCR && (aCS.appendChild(aCU), aCS.appendChild(aCT), aCS.appendChild(aCV))
}

function aCd() {
	var aCe = null;
	this.a8W = 0, this.aCf = function() {
		var er = bz.c0.data[5].value;
		aCe = "px " + er, "Trebuchet MS" !== er && (aCe += ", Trebuchet MS"), this.a8W = aCg(32, 32, ["a", "b", "m"], 200, aCe)
	}, this.wJ = function(b4, b9) {
		var iJ = document.createElement("canvas");
		return iJ.width = b4, iJ.height = b9, iJ
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(f4, b4, b9) {
		return f4.getImageData(0, 0, b4, b9)
	}, this.f8 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aCe : 1 === type ? "bold " + size + aCe : 2 === type ? "lighter " + size + aCe : 3 === type ? "italic " + size + aCe : 4 === type ? "oblique " + size + aCe : 5 === type ? "small-caps " +
			size + aCe : "small-caps bold " + size + aCe
	}, this.textAlign = function(uH, id) {
		uH.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(uH, id) {
		uH.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.bD = function(aH, code, color) {
		color = this.b8(dH.uq) + " solid " + (color || aJ.eA);
		5 === (code = code || 5) ? aH.style.border = color : 4 === code ? aH.style.borderLeft = color : 2 === code ? aH.style.borderBottom = color : 6 === code ? aH.style.borderRight = color : aH.style.borderTop = color
	}, this.aCh = function(aH, r, s, b4, b9) {
		aH = aH.style;
		aH.left = this.aCj(r), aH.top = this.aCj(s), aH.width = this.aCj(b4), aH.height = this.aCj(b9)
	}, this.dF = function(er) {
		return 1 + er * bA.bB.bC()
	}, this.b0 = function(du, gO) {
		return du * this.dF(void 0 === gO ? .5 : gO) * b3.dG / b3.b5
	}, this.np = function(du, gO) {
		return du * this.dF(void 0 === gO ? .5 : gO) * b3.dG
	}, this.aCk = function(du, gO, aCl) {
		return this.dF(gO) * Math.min(du * b3.dG, aCl * b3.b4) / b3.b5
	}, this.b8 = function(er) {
		return er.toFixed(1) + "px"
	}, this.aCj = function(er) {
		return this.aCn(er).toFixed(1) + "px"
	}, this.aCn = function(er) {
		return er / b3.b5
	}, this.aCo = function(aCp, aCq) {
		for (var en = "<ul>", ae = aCp.length, ai = 0; ai < ae; ai++) en += "<li>" + aCp[ai] + ": <a href='" + aCq[ai] + "' target='_blank'>" + aCq[ai] + "</a></li>";
		return en += "</ul>"
	}, this.mR = function(aCr) {
		return "<a href='" + aCr + "' target='_blank'>" + aCr + "</a>"
	}, this.aCs = function(aH) {
		navigator.clipboard && navigator.clipboard.writeText(aH.value)
	}, this.aCt = function(aH) {
		var gj = aH.textContent;
		aR.aS.rb(gj, "✔") || (1 === gj.length ? aH.textContent = "✔" : aH.textContent = gj + " ✔", setTimeout(function() {
			aH.textContent = gj
		}, 500))
	}, this.measureText = function(en) {
		return eD.measureText(en).width
	}, this.aCX = function(aCu) {
		aCu.style.overflowX = "auto", aCu.style.overflowY = "hidden", aCu.style.whiteSpace = "nowrap", aCu.addEventListener("wheel", function(aH) {
			Math.abs(aH.deltaY) < Math.abs(aH.deltaX) || (this.scrollLeft += aH.deltaY, this.aCc = this.scrollLeft, aH.preventDefault())
		}), aCu.addEventListener("scroll", function() {
			this.aCc = this.scrollLeft
		})
	}
}

function aCv() {
	this.yM = new aCw, this.bc = new bF, this.aCx = new a3n, this.a5N = new aCy, this.aCz = new aD0
}

function aBs() {
	this.aD1 = !1, this.fA = function() {
		bu.gE() % 250 != 249 || bK.bY || (bM.hf.lf(+(this.aD1 && fL.gl[bK.bL]), my.mz + h4.aZ.hB), this.aD1 = !1)
	}
}

function aD3() {
	var aD4 = 0;

	function aDC(en, id) {
		aD4 || (id ? 1 === id ? bI.aD9 = L(178) + ": " + en : ax.gu(4, 3, new nJ(L(179), en, 1)) : ax.gu(4, 3, new nJ("⚠️ " + L(177), en, 1)))
	}
	this.cZ = function(en, aD5) {
		var a69, aq;
		return aD4 = aD5, bw.bx.aD6(bw.bx.aD7(bw.bx.aD8(en))), bI.aD9 = "", !! function() {
			if (cM.size < 10) aDC("File Too Small");
			else {
				var aDE = cM.cR(12),
					lh = (aDE !== hd.rVersion && aDC("Incompatible Version   Required: " + hd.rVersion + ("   Found: " + aDE) + ("   Compatible at territorial.io/" + aDE), 1), cM.cR(12)),
					aDF = cM.cR(31);
				if (aDF !== cM.size) aDC("Size Error: " + aDF + " " + cM.size);
				else if (function(b9, aDE) {
						for (var o4 = cM.hl, ae = cM.size, lh = aDE, ai = 3; ai < ae; ai++) lh = lh + o4[ai] & 4095;
						return lh === b9 || (aDC("Hash Error: " + lh + " " + b9 + " " + ae), !1)
					}(lh, aDE)) return 1
			}
			return
		}() && (a69 = cM, (aq = bK.data = new a5c).mapType = a69.cR(2), aq.mapProceduralIndex = a69.cR(8), aq.mapRealisticIndex = a69.cR(8), aq.mapSeed = a69.cR(14), aq.mapName = a69.aAW(5), 2 === aq.mapType && a69.aAX(), aq.passableWater =
			a69.cR(1), aq.passableMountains = a69.cR(1), aq.playerCount = a69.cR(10), aq.humanCount = a69.cR(10), aq.selectedPlayer = a69.cR(9), aq.gameMode = a69.cR(1), aq.playerMode = a69.cR(2), aq.battleRoyaleMode = a69.cR(2), aq
			.numberTeams = a69.cR(4), aq.isZombieMode = a69.cR(1), aq.isContest = a69.cR(1), aq.isReplay = a69.cR(1), aq.elo = a69.aAR(2, 14, 2), aq.colorsType = a69.cR(1), aq.colorsPersonalized = a69.cR(1), aq.colorsData = a69.aAR(10, 18,
				512), aq.selectableColor = a69.cR(1), aq.teamPlayerCount = a69.aAR(4, 10, 9), aq.neutralBots = a69.cR(1), aq.botDifficultyType = a69.cR(2), aq.botDifficultyValue = a69.cR(4), aq.botDifficultyTeam = a69.aAR(4, 4, 9), aq
			.botDifficultyData = a69.aAR(10, 4, 512), aq.spawningType = a69.cR(2), aq.spawningSeed = a69.cR(14), aq.spawningData = a69.aAR(11, 12, 1024), aq.selectableSpawn = a69.cR(1), aq.playerNamesType = a69.cR(2), aq.playerNamesData = a69
			.aAU(10, 5, 512), aq.selectableName = a69.cR(1), aq.aIncomeType = a69.cR(2), aq.aIncomeValue = a69.cR(8), aq.aIncomeData = a69.aAR(10, 8, 512), aq.tIncomeType = a69.cR(2), aq.tIncomeValue = a69.cR(8), aq.tIncomeData = a69.aAR(10,
				8, 512), aq.iIncomeType = a69.cR(2), aq.iIncomeValue = a69.cR(8), aq.iIncomeData = a69.aAR(10, 8, 512), aq.sResourcesType = a69.cR(2), aq.sResourcesValue = a69.cR(11), aq.sResourcesData = a69.aAR(10, 11, 512), aq.a5a = a69
			.aAR(10, 30, 0), !! function() {
				var a69 = cM,
					a8C = a69.cR(5),
					aDH = a69.cR(30),
					aDI = a69.cR(30);
				if (aDH + aDI > 8 * a69.size) return void aDC("Corrupted File");
				return function(ae) {
						var aDL = new Uint8Array(ae),
							aDM = new Uint16Array(ae),
							aDN = new Uint32Array(ae),
							aDO = new Uint32Array(ae);
						zK.zL.s7 = aDL, zK.zL.s8 = aDM, zK.zL.s9 = aDN, zK.zL.sA = aDO;
						for (var ai = 0; ai < ae; ai++) {
							var id = cM.cR(4);
							aDL[ai] = id, aDM[ai] = cM.cR(9), 0 === id ? aDN[ai] = cM.cR(22) : 1 === id ? (aDN[ai] = cM.cR(10), aDO[ai] = cM.cR(10)) : 2 === id ? (aDN[ai] = cM.cR(10), aDO[ai] = cM.cR(9)) : 3 === id ? (aDN[ai] = cM.cR(10),
								aDO[ai] = cM.cR(27)) : 4 === id ? (aDN[ai] = cM.cR(10), aDO[ai] = cM.cR(16)) : 5 === id || 6 === id ? aDN[ai] = cM.cR(10) : 7 === id ? aDN[ai] = cM.cR(1) : 10 === id && (aDN[ai] = cM.cR(20), aDO[ai] = cM
								.cR(22))
						}
					}(aDH),
					function(ae, a8C) {
						var sB = new Uint8Array(ae),
							sC = new Array(ae);
						sC.fill(0), zK.zL.sB = sB, zK.zL.sC = sC;
						for (var ai = 0; ai < ae; ai++) sB[ai] = cM.cR(1), sC[ai] = cM.cR(a8C)
					}(aDI, a8C), 1
			}()) && (cM.a8 < 8 * cM.size - 13 || cM.a8 > 8 * cM.size ? (aDC("Out Of Bounds Error: " + cM.a8 + " " + 8 * cM.size), !1) : (zK.zL.sD = en, 2 !== bK.data.mapType || (aDC("Load base64 image...", 2), aD5)))
	}, this.aAa = function(uE, aDD) {
		var mD = document.createElement("canvas"),
			uH = mD.getContext("2d");
		if (mD.width = uE.width, mD.height = uE.height, uH.drawImage(uE, 0, 0), bK.data.canvas = mD, aD4 || aDD) return bK.fC ? void 0 : (bK.data.mapType = 2, ax.rW(), void ax.gu(19));
		zK.zP()
	}
}

function ei() {
	var aDP = 0,
		aDQ = null;
	this.q = function() {
		null === aDQ && (aDQ = new Uint16Array(2 * h4.aZ.aDR)), aDP = 0
	}, this.fJ = function(aDS, eh) {
		var aDT = aDQ;
		aDT[aDP++] = aDS, aDT[aDP++] = eh
	}, this.aDU = function(player, aDV) {
		for (var aDT = aDQ, ae = aDP, ai = 0; ai < ae; ai += 2)
			if (aDT[ai] === aDV && h4.ak.aDW(aDT[ai + 1]) && player === h4.aZ.hD[oi.yl[2]] >> 3) return !0;
		return !1
	}, this.aBm = function(aDX) {
		var eO = h4.aZ.hL[aDX];
		if (!(eO < 64)) {
			for (var aDV = h4.aZ.hK[aDX], aDT = aDQ, ae = aDP, ai = ae - 2; 0 <= ai; ai -= 2)
				if (aDT[ai] === aDV) {
					{
						aDc = void 0;
						var aDc = aDT[ai + 1];
						h4.ak.aDW(aDc) && h4.eh.aBl(oi.yl[2])
					}
					aDT[ai] = aDT[ae - 2], aDT[ai + 1] = aDT[ae - 1], ae -= 2
				} aDP = ae
		}
	}, this.aDZ = function(aDa, aDb) {
		for (var aDc = h4.aZ.hK[aDa], aDV = -1, aDT = aDQ, ae = aDP, ai = 1; ai < ae; ai += 2)
			if (aDT[ai] === aDc) {
				aDV = aDT[ai - 1];
				break
			} if (-1 === aDV) return !1;
		if (!h4.ak.aDW(aDV)) return !1;
		var aDX = oi.yl[2],
			tJ = h4.aZ.hN[aDX];
		if (aDb === tJ[tJ.length - 1]) h4.aZ.hN[aDa] = h4.ec.xg(h4.aZ.hN[aDa], h4.ec.tU(tJ));
		else {
			var aDd = h4.ak.aDe(tJ, aDb);
			if (-1 === aDd) return !1;
			var aDf = h4.aZ.hO[aDX];
			aDd === aDf ? (aDX = hQ.pM(h4.aZ.hH[aDX]), h4.aZ.hN[aDa] = h4.ec.xk(h4.aZ.hN[aDa], tJ, aDd, aDb, hQ.a6E(tJ[aDd], aDb) > hQ.a6E(tJ[aDd], aDX))) : h4.aZ.hN[aDa] = h4.ec.xk(h4.aZ.hN[aDa], tJ, aDd, aDb, aDf < aDd)
		}
		return !0
	}, this.aBl = function(aDi) {
		var tJ, kG = h4.aZ,
			eO = kG.hL[aDi];
		return eO % 64 != 5 && (tJ = kG.hN[aDi], kG.hI[aDi] = 65535 - kG.hI[aDi], kG.hO[aDi] = tJ.length - kG.hO[aDi] - 2, kG.hN[aDi] = h4.ec.tU(tJ), kG.hL[aDi] = eO - eO % 64 + 5, !0)
	}
}

function aDj() {
	this.fA = function() {
		if (bu.gE() % 51 == 45)
			for (var ae = h4.aZ.hB, hL = h4.aZ.hL, hN = h4.aZ.hN, hK = h4.aZ.hK, hD = h4.aZ.hD, aDl = wX.aDl, mW = wX.mW, ai = 0; ai < ae; ai++) {
				var tJ, player, aDV, eO = hL[ai];
				eO % 64 == 6 || (tJ = hN[ai], (player = h4.ak.aDm(tJ[tJ.length - 1])) < 0) || !aR.bc.aDn(player, hD[ai] >> 3) || kJ.tM(1e3) >= aDl[mW[player]] || ! function(aBk, tJ) {
					for (var ae = tJ.length - 1, aDq = h4.aZ.hO[aBk], kM = 0, ai = aDq + 1; ai < ae; ai++) kM += hQ.a6E(tJ[ai], tJ[ai + 1]);
					return (kM += hQ.a6E(hQ.pM(h4.aZ.hH[aBk]), tJ[aDq + 1])) <= 60
				}(ai, tJ) || (aDV = hK[ai], 64 <= eO && h4.eh.aDU(player, aDV)) || function(player, tJ, aDV, aBk, eO) {
					h4.eY.a3K(player) && aR.bc.a3s(player, wX.aDr[wX.mW[player]], 32, 0) && (h4.aZ.hL[aBk] = 64 + eO % 64, h4.eh.fJ(aDV, h4.aZ.aDs), oi.nu[0] = h4.ec.tU(tJ), oi.yl[1] = 6, aR.bc.a2x(player), h4.aZ.a4A(player))
				}(player, tJ, aDV, ai, eO)
			}
	}
}

function aDt() {
	this.aZ = new wC, this.eH = new aDu, this.q = function() {
		this.aZ.q()
	}, this.fA = function() {
		0 !== this.aZ.oR && this.aZ.oR--
	}
}

function aDv() {
	this.hi = function(er) {
		return [er >> 12 & 63, er >> 6 & 63, 63 & er]
	}, this.aDw = function(er) {
		for (var nu = this.hi(er), ai = 0; ai < 3; ai++) nu[ai] = ~~(4.05 * nu[ai]);
		return nu
	}, this.aDx = function(er) {
		er = this.aDw(er);
		return aR.color.nk(er[0], er[1], er[2])
	}, this.aDy = function(nu) {
		for (var ai = 0; ai < 3; ai++) nu[ai] = ~~(nu[ai] / 4.04);
		return (nu[0] << 12) + (nu[1] << 6) + nu[2]
	}, this.nk = function(oo, qS, pW) {
		return "rgb(" + oo + "," + qS + "," + pW + ")"
	}, this.a18 = function(oo, qS, pW, gF) {
		return "rgba(" + oo + "," + qS + "," + pW + "," + gF.toFixed(3) + ")"
	}, this.iM = function(iJ) {
		for (var nu = iJ.split("(")[1].split(","), aDz = oi.aDz, ai = 0; ai < 3; ai++) aDz[ai] = parseInt(nu[ai]);
		return 4 === nu.length ? aDz[3] = 255 * parseFloat(nu[3].slice(0, -1)) : aDz[3] = 255, aDz
	}, this.i4 = function(aE0, iP) {
		for (var nu = aE0.slice(aE0.indexOf("(") + 1, aE0.indexOf(")")).split(","), aDz = oi.aDz, ai = 0; ai < 3; ai++) aDz[ai] = je.jf(parseInt(nu[ai].trim(), 10) + iP, 0, 255);
		return 3 === nu.length ? this.nk(aDz[0], aDz[1], aDz[2]) : (aE0 = parseFloat(nu[3].trim()), this.a18(aDz[0], aDz[1], aDz[2], aE0 = 0 === aE0 ? .3 : aE0))
	}, this.aE1 = function(aE2, aE3) {
		for (var uo = 0, ai = 0; ai < 3; ai++) uo += Math.abs(aE3[ai] - aE2[ai]);
		if (!(240 <= uo))
			for (ai = 0; ai < 3; ai++) aE3[ai] = aE2[ai] + (aE2[ai] < 128 ? 80 : -80)
	}, this.aE4 = function(nu) {
		for (var en = "#", ai = 0; ai < 3; ai++) {
			var oo = nu[ai].toString(16);
			en += 1 === oo.length ? "0" + oo : oo
		}
		return en
	}, this.aE5 = function(en) {
		var oo, qS;
		return en.length < 7 ? aJ.fY : (oo = parseInt(en.slice(1, 3), 16), qS = parseInt(en.slice(3, 5), 16), en = parseInt(en.slice(5, 7), 16), this.nk(oo, qS, en))
	}
}

function vu() {
	bI.fA(), dq.fA(), jF.aE6(), bM.aZ.fA()
}

function vv() {
	yV.fA(), aE7.fA(), yK.fA(), a2n.fA(), aE8.fA(), a4S.fA(), kD.fA(), h4.aZ.fA(), my.aE9(), zw.fA(), wU.fA(), yS.fA(), dq.fA(), dq.a8r(), jF.fA(), jQ.fA(), aEA.fA(), zt.fA(), bI.fA(), yJ.fA(), fV.fA(), zu.fA(), jB.fA(), fT.fA(), bM.aZ.fA(), bM.aBr
		.fA(), ax.fA(), vA.lO.fA(), zK.fA(), bu.fA()
}

function vx() {
	di.fA(), jN.fA(), fD.fA(), jM.fA(), zr.fA(), aEB.aEC()
}

function vw() {
	zw.gC(!1), zt.gC(), jF.gC(!1), aEA.gC(), fV.gC(), zu.gC(), dq.gC(!1), fT.aW()
}

function vq() {
	dq.gC(!1) && (bu.dw = !0), bM.aZ.fA()
}

function aED() {
	var aEE = 0,
		aEF = 0,
		aEG = 300,
		aEH = 300,
		aEI = 0;
	this.kF = 0, this.c0 = new Uint32Array(512), this.q = function() {
		aEF = aEE = 0, this.kF = 0, aEI = 0
	}, this.fA = function() {
		if (function() {
				var ae = kD.kE.kF;
				if (0 === ae) return 1;
				var c0 = kD.kE.c0;
				if (bu.gE() % 35 == 6) {
					for (var ai = ae - 1; 0 <= ai; ai--) x.yr(c0[ai] << 2) || (ae--, c0[ai] = c0[ae]);
					kD.kE.kF = ae
				}
				return ae < c0.length
			}())
			if (aEG <= aEE) {
				var aEM = kD.kE.kF;
				if (aEM) {
					if (bu.gE() % 350 != 1) return;
					if (aEI !== aEM) return void(aEI = aEM);
					if (!aR.bc.ms(fZ[0])) return
				} else if (bu.gE() % 12 != 8) return;
				aR.bc.aEN() || kD.kE.q()
			} else {
				var ai, b4 = t.u,
					aEO = b4 - 2,
					aEM = aEO * (t.v - 2),
					aEP = aEG,
					c0 = kD.kE.c0,
					kG = kD.kE.kF,
					aEQ = c0.length,
					gO = Math.min(aEF + aEP * ((1 + 19 * kD.performance.kH) * aEH), aEM);
				for (ai = aEF; ai < gO; ai += aEP) {
					var dx = 4 * (ai % aEO + (je.kI(ai, aEO) + 1) * b4 + 1);
					if (x.yr(dx) && (c0[kG] = dx >> 2, ++kG === aEQ)) {
						ai += aEP;
						break
					}
				}(aEF = ai) >= aEM && (aEF = ++aEE), kD.kE.kF = kG
			}
	}
}

function aER() {
	this.bx = new aES, this.lc = new kX, this.cY = new el, this.q = function() {
		this.bx.q()
	}
}

function gv(data) {
	var lq, aET;

	function aEV(uo) {
		var ae = data.data.length;
		if (ae) {
			for (var h5, max = min = parseInt(data.data[0][0]), ai = 1; ai < ae; ai++) var aEh = parseInt(data.data[ai][0]),
				min = Math.min(aEh, min),
				max = Math.max(aEh, max);
			h5 = uo < 0 ? min + uo : max + 1, ax.gu(8, ax.d3().lt, new lz(21, {
				qn: data.qn,
				h5: h5,
				h6: h5 + Math.abs(uo)
			}))
		}
	}
	if (this.show = function() {
			lq.show(), this.resize()
		}, this.aw = function() {
			lq.aw()
		}, this.resize = function() {
			lq.resize(), aET.resize()
		}, this.ix = function(iJ) {
			2 === iJ && lq.iy[0].iB()
		}, data.gw) {
		lq = new iU(L(55), [new aM("⬅️ " + L(10), function() {
			ax.ic()
		})]);
		var iP = {
				aEX: [],
				aCp: [L(189), L(190), L(191) + " ↗"],
				aEY: [12, 50, 38]
			},
			a5a = bK.data.a5a;
		if (a5a)
			for (var ae = a5a.length, aEX = iP.aEX, fM = fL.fM, ai = 0; ai < ae; ai++) aEX.push([{
				er: ai + 1 + ".",
				gj: 0
			}, {
				er: fM[ai],
				gj: 0
			}, {
				er: cI.bx.t3(a5a[ai], 5),
				gj: 1,
				d8: a5a[ai],
				cQ: 0
			}]);
		aET = new aEZ(lq.iX, iP)
	} else {
		var iP = data.data.length ? 0 : 1,
			a9v = [new aM("⬅️ " + L(10), function() {
				ax.ic()
			}), new aM(L(180), function() {
				aEV(-10)
			}, iP, 0, 1), new aM(L(181), function() {
				aEV(10)
			}, iP, 0, 1), new aM(L(39), function() {
				ax.gu(11, 10, new a9p({
					qn: data.qn
				}))
			})],
			aCp = [L(182), L(183), L(184), L(185), L(186), L(123), L(124), L(125), L(187), L(188), L(89), L(90), "Audit Log"];
		lq = new iU(aCp[data.qn], a9v), ! function() {
			var ai, iP = {
					aEX: []
				},
				aEX = iP.aEX,
				aEa = data.data,
				ae = aEa.length;
			ae && 0 === aEa[0][0] && 0 <= (a8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.qn]) && (ax.aZ.aEb[a8] = aEa[0][1]);
			var du = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.qn],
				aEe = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.qn],
				a8 = [
					[L(192), L(193) + " ↗", L(194)],
					[L(192), L(195), L(196), L(197) + " ↗"],
					[L(192), L(193) + " ↗", L(196)],
					[L(192), L(193) + " ↗", L(196)],
					[L(189), L(198), L(199) + " ↗", L(200) + " ↗", L(201)],
					[L(189), L(198), L(202) + " ↗", L(203) + " ↗", L(204)],
					[L(189), L(198), L(205) + " ↗", L(206) + " ↗", L(207)],
					[L(189), L(198), L(202) + " ↗", L(203) + " ↗", L(208)],
					[L(189), L(198), L(199) + " ↗", L(200) + " ↗", L(201)],
					[L(192), L(193) + " ↗", L(196)],
					[L(192), L(193) + " ↗", L(209)],
					[L(192), L(193) + " ↗", L(196)],
					[L(189), L(198), L(199) + " ↗", L(200) + " ↗", L(210)]
				];
			if (iP.aCp = a8[data.qn], iP.aEY = [
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
				][data.qn], 0 === data.qn || 2 === data.qn || 3 === data.qn || 9 === data.qn || 10 === data.qn || 11 === data.qn)
				for (ai = 0; ai < ae; ai++) aEX.push([{
					er: aEa[ai][0] + 1 + ".",
					gj: 0
				}, {
					er: aEa[ai][1],
					gj: 1,
					d8: aEa[ai][4],
					cQ: aEa[ai][3]
				}, {
					er: (du * aEa[ai][2]).toFixed(aEe),
					gj: 0
				}]);
			else if (12 === data.qn)
				for (ai = 0; ai < ae; ai++) {
					var aEf = aEa[ai][3];
					aEX.push([{
						er: "" + aEa[ai][0],
						gj: 0
					}, {
						er: "" + aEa[ai][4],
						gj: 0
					}, {
						er: aEa[ai][5],
						gj: 1,
						d8: aEa[ai][1],
						cQ: 0
					}, {
						er: aEa[ai][6],
						gj: 1,
						d8: aEa[ai][2],
						cQ: 0
					}, {
						er: a6i.a9T(aEf),
						gj: 0
					}])
				} else if (1 === data.qn)
					for (ai = 0; ai < ae; ai++) aEX.push([{
						er: aEa[ai][0] + 1 + ".",
						gj: 0
					}, {
						er: aEa[ai][1],
						gj: 0
					}, {
						er: (du * aEa[ai][2]).toFixed(aEe),
						gj: 0
					}, {
						er: aEa[ai][3],
						gj: 1,
						d8: aEa[ai][5],
						cQ: aEa[ai][4]
					}]);
				else if (4 === data.qn || 5 === data.qn || 6 === data.qn || 7 === data.qn || 8 === data.qn)
				for (ai = 0; ai < ae; ai++) {
					var aEg = aEa[ai][5];
					4 === data.qn || 8 === data.qn ? "100%" === (aEg = (aEg % 64 * 100 / (aEg >> 6)).toFixed(0) + "%") && (4 === data.qn ? aEg += " (" + L(211) + ")" : aEg += " (" + L(212) + ")") : 5 === data.qn ? 32768 <= aEg && (aEg = -(aEg -
						32768)) : aEg = (du * aEg).toFixed(aEe), aEX.push([{
						er: "" + aEa[ai][0],
						gj: 0
					}, {
						er: "" + aEa[ai][6],
						gj: 0
					}, {
						er: aEa[ai][7],
						gj: 1,
						d8: aEa[ai][1],
						cQ: aEa[ai][2]
					}, {
						er: aEa[ai][8],
						gj: 1,
						d8: aEa[ai][3],
						cQ: aEa[ai][4]
					}, {
						er: "" + aEg,
						gj: 0
					}])
				}
			aET = new aEZ(lq.iX, iP)
		}()
	}
}

function aBw() {
	this.aEi = function(hZ, hl) {
		cM.q(hl), 0 === cM.size ? bM.aZ.cP(hZ, 3205) : ((0 === cM.cR(1) ? function(hZ) {
			var aEm = cM.cR(6);
			0 === aEm ? function(hZ) {
					if (0 === hZ && 8 !== cB.mP()) {
						ax.aZ.aEo();
						for (var aEp = cM.cR(12), aEq = cM.cR(6), nu = new Array(aEp), ai = 0; ai < aEp; ai++) nu[ai] = cM.cR(aEq);
						ss.sk(nu)
					}
				}(hZ) : 2 === aEm ? bM.aBx.a9W(hZ) : 3 === aEm || 4 === aEm ? aEB.q() : 5 === aEm ? bM.aBy.v9() : 9 === aEm ? bM.aBy.vE(hZ) : 10 === aEm ? bM.aBz.cE() : 11 === aEm ? bM.aBy.vK(hZ) : 12 === aEm ? bM.aBz.cL() : 13 ===
				aEm ? bM.aC0.vR() : 14 === aEm ? bM.aC0.vT() : 15 === aEm ? bM.aBy.vM() : 16 === aEm ? bM.aBx.a9Z(hZ) : 17 === aEm ? bM.aBx.a9i(hZ) : 19 === aEm ? bM.aBx.a9o(hZ) : 20 === aEm && bM.aBy.vB(hZ)
		} : function(hZ) {
			if (8 !== cB.mP() && !aEB.aEt()) return;
			if (hZ !== bM.aZ.li) bM.aZ.cP(hZ, 3244);
			else if (0 === cM.cR(1)) bu.a52.aEu(cM.hl);
			else {
				var ai, hZ = cM.cR(2);
				if (0 === hZ) {
					var bH, bN = cM.cR(9);
					0 !== fL.gl[bN] && 0 !== fL.gl[bK.bL] && (bH = cM.cR(10), bI.bJ(bN, bK.bL, bH), dq.a4F(bN, 1, bH))
				} else if (1 === hZ) ! function() {
					var bN = cM.cR(9);
					0 !== fL.gl[bN] && 0 !== fL.gl[bK.bL] && yJ.pn(0, [bN], !0) && bI.bQ(bN, 1)
				}();
				else if (2 === hZ) ! function() {
					var bN = cM.cR(9),
						target = cM.cR(9);
					0 !== fL.gl[bN] && 0 !== fL.gl[target] && 0 !== fL.gl[bK.bL] && yJ.pn(1, [bN], !0) && (dq.a4F(bN, 3, 96), dq.a4F(target, 4, 96), bI.aF0(bN, target))
				}();
				else if (hd.lk && !hd.ll) {
					var ae = 540;
					for (cN.ha(17287), cN.et(1, 0), cN.et(6, 10), ae = Math.min(k6.a5N.aEz.length, 540), ai = 0; ai < ae; ai++) cN.aCQ(32, k6.a5N.aEz[ai]);
					bM.aZ.send(bM.aZ.li, cN.hl)
				}
			}
		})(hZ), bu.aEl())
	}, this.aEr = function() {
		cM.a8 = 1;
		var aEm = cM.cR(6),
			le = cM.cR(10);
		return bM.aZ.hk === le ? (bM.aZ.li = le, !1) : (bM.aZ.close(bM.aZ.hk, 3247), bM.aZ.li = le, aEB.a9g = cM.cR(10), aEB.aEs = cM.cR(3 === aEm ? 9 : 1), bM.aZ.qk(le, 5) && bM.bN.vJ(), !0)
	}
}

function aF1() {
	var aF2, aF4 = new Uint16Array(8);

	function aF9(size, player) {
		for (var ai = fL.kn[player].length - 1; size <= ai; ai--) x.aFE(fL.kn[player][ai], player)
	}
	this.q = function() {
		aF2 = 0
	}, this.a3y = function(player, a3u) {
		return oi.a3v[1] = fL.kn[player].length, oi.a3v[0] === bK.g6 ? kD.a3x.aF5(player) : this.aF6(player, oi.a3v[0]), (0 !== oi.a3v[1] || 0 !== fL.kn[player].length) && !(!a3u && oi.a3v[1] === fL.kn[player].length || (oi.a3v[0] === bK.g6 ? fL
			.aF7[player]++ : fL.aF8[player]++, 0))
	}, this.a40 = function(player) {
		aF9(oi.a3v[1], player), ks.fJ(player, oi.a2t[0], oi.a3v[0]), a4S.wA(player, !1)
	}, this.aFA = function(player, mV, ae, mW) {
		var aFB = je.kI(12 * fL.jD[player], 1024);
		mW -= mW >= je.kI(fL.jD[player], 2) ? aFB : 0, aF9(ae, player), ks.fJ(player, mW, mV), fL.jD[player] -= mW + aFB, a4S.wA(player, !1)
	}, this.aF6 = function(player, mV) {
		for (var a3j, aFC = x.aFC, ai = fL.ki[player].length - 1; 0 <= ai; ai--)
			if (x.aFD(fL.ki[player][ai]))
				for (a3j = 3; 0 <= a3j; a3j--)
					if (x.yi(fL.ki[player][ai] + aFC[a3j]) && x.yj(fL.ki[player][ai] + aFC[a3j]) === mV) {
						fL.kn[player].push(fL.ki[player][ai]);
						break
					}
	}, this.aF5 = function(player) {
		for (var aFC = x.aFC, ai = fL.ki[player].length - 1; 0 <= ai; ai--)
			if (x.aFD(fL.ki[player][ai]))
				for (var a3j = 3; 0 <= a3j; a3j--)
					if (x.yr(fL.ki[player][ai] + aFC[a3j])) {
						fL.kn[player].push(fL.ki[player][ai]);
						break
					}
	}, this.aFF = function(player, aFG) {
		var ai, gF, a3j, aFH, ae = fL.ki[player].length,
			uo = 256 <= ae ? 12 : 32 <= ae ? 6 : 1,
			af = ae - 1 - kJ.tM(uo),
			aFC = x.aFC;
		aF2 = 0;
		loop: for (ai = af; 0 <= ai; ai -= uo)
			for (a3j = 3; 0 <= a3j; a3j--)
				if ((aFH = x.yr(fL.ki[player][ai] + aFC[a3j]) ? bK.g6 : x.yj(fL.ki[player][ai] + aFC[a3j])) === bK.g6 || x.yi(fL.ki[player][ai] + aFC[a3j]) && aFH !== player && (aFG || kf.yz(player, aFH))) {
					for (gF = aF2 - 1; 0 <= gF; gF--)
						if (aF4[gF] === aFH) continue loop;
					if (aF4[aF2] = aFH, 8 <= ++aF2) return !0
				}
		return 0 < aF2
	}, this.aFI = function(player, aFG) {
		var ai, a3j, aFH, aFC = x.aFC;
		for (aF2 = 0, ai = fL.ki[player].length - 1; 0 <= ai; ai--)
			for (a3j = 3; 0 <= a3j; a3j--)
				if ((aFH = x.yr(fL.ki[player][ai] + aFC[a3j]) ? bK.g6 : x.yj(fL.ki[player][ai] + aFC[a3j])) === bK.g6 || x.yi(fL.ki[player][ai] + aFC[a3j]) && aFH !== player && (aFG || kf.yz(player, aFH))) return aF4[aF2++] = aFH, !0;
		return !1
	}, this.aFJ = function() {
		for (var pW, ai = aF2 - 1; 0 <= ai; ai--)
			if (aF4[ai] === bK.g6) {
				for (aF2--, pW = ai; pW < aF2; pW++) aF4[pW] = aF4[pW + 1];
				return !0
			} return !1
	}, this.aFK = function(player) {
		for (var pW, ai = aF2 - 1; 0 <= ai; ai--)
			if (ks.mi(player, aF4[ai]))
				for (aF2--, pW = ai; pW < aF2; pW++) aF4[pW] = aF4[pW + 1];
		return 0 === aF2
	}, this.aFL = function() {
		for (var ai = aF2 - 1; 0 <= ai; ai--)
			if (aR.bc.ms(aF4[ai])) return !0;
		return !1
	}, this.aFM = function() {
		for (var ai = aF2 - 1; 0 <= ai; ai--) aR.bc.ms(aF4[ai]) || (aF4[ai] = aF4[--aF2]);
		return 0 < aF2
	}, this.aFN = function(player) {
		for (var pW, aFO = aF4[0], aFP = fL.jD[aFO] + ks.lH(aFO, player), ai = aF2 - 1; 1 <= ai; ai--)(pW = fL.jD[aF4[ai]] + ks.lH(aF4[ai], player)) < aFP && (aFO = aF4[ai], aFP = pW);
		return aFO
	}, this.aFQ = function(player) {
		var b9, aFR = aF4[0];
		if (1 !== aF2)
			for (var aFS = je.kI(fL.jK[player] + fL.jI[player], 2), aFT = je.kI(fL.jL[player] + fL.jJ[player], 2), kM = aFU(aFS - je.kI(fL.jK[aFR] + fL.jI[aFR], 2)) + aFU(aFT - je.kI(fL.jL[aFR] + fL.jJ[aFR], 2)), ai = aF2 - 1; 1 <= ai; ai--)(b9 =
				aFU(aFS - je.kI(fL.jK[aF4[ai]] + fL.jI[aF4[ai]], 2)) + aFU(aFT - je.kI(fL.jL[aF4[ai]] + fL.jJ[aF4[ai]], 2))) < kM && (kM = b9, aFR = aF4[ai]);
		return aFR
	}, this.aFV = function() {
		for (var aFW = aF4, aFX = aFW[0], jD = fL.jD, aFY = jD[aFX], ai = aF2 - 1; 1 <= ai; ai--) {
			var o4 = aFW[ai],
				pW = jD[o4];
			aFY < pW && (aFX = o4, aFY = pW)
		}
		return aFX
	}, this.aFZ = function() {
		return aF4[kJ.tM(aF2)]
	}
}

function aFa() {
	var lq, tB, tC, tE;

	function aFb(id) {
		0 !== bA.id || bz.c0.data[140].value ? 0 === id ? ax.gu(8, 1, new lz(16)) : ax.gu(2) : ax.aZ.aFh(ax.d2, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bA.bB.setState(12), lq.show(), this.resize(), this.fA()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), tB.resize()
	}, this.fA = function() {
		8 === cB.mP() && (2 <= jB.aFg ? tC[2].iC === aJ.iK && tC[2].aN(0) : tC[2].iC !== aJ.iK && tC[2].aN(aJ.iK), !bK.bY && vs.a4L(bK.bL) ? tC[1].iC === aJ.iK && tC[1].aN(0) : tC[1].iC !== aJ.iK && tC[1].aN(aJ.iK), !bK.bY && zu.a4O(bK.bL) ? tC[
			0].iC === aJ.iK && tC[0].aN(0) : tC[0].iC !== aJ.iK && tC[0].aN(aJ.iK))
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, tC = [new aM(L(213), function() {
		aFb(0)
	}), new aM(L(91), function() {
		ax.gu(16)
	}), new aM(L(126), function() {
		ax.gu(17)
	}), new aM(L(214), function() {
		ax.aZ.vg()
	}, 0, 0, 1), new aM(L(102), function() {
		ax.gu(3, 1)
	}), new aM(L(215), function() {
		ax.gu(18)
	}), new aM(L(216), function() {
		ax.gu(31)
	}), new aM(L(217), function() {
		aFb(1)
	}), new aM(L(218), function() {
		var aCp = ["Patreon", L(228), L(229), "YouTube Tutorial", "Discord", L(230), L(85), L(231), L(88), L(232), "Terms", "Privacy"],
			aCq = [mF.aFi, mF.mG, mF.mH, "https://www.youtube.com/watch?v=6QBmA9N1668", mF.mI, mF.aFj, mF.aFk, mF.aFl, mF.aFm, mF.aFn, mF.aFo, mF.aFp];
		1 === bA.id ? (aCp.splice(2, 1), aCp.splice(0, 1), aCq.splice(2, 1), aCq.splice(0, 1)) : 2 === bA.id && (aCp.splice(1, 1), aCp.splice(0, 1), aCq.splice(1, 1), aCq.splice(0, 1)), ax.gu(4, 1, new nJ(L(218), aR.az.aCo(aCp, aCq), !1,
			[new aM("⬅️ " + L(10), function() {
				ax.gu(1)
			})]))
	}), new aM(L(219), function() {
		ax.gu(4, 1, new nJ(L(219), hd.jl + "<br><a href='" + mF.aFj + "' target='_blank'>" + mF.aFj + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new aM("⬅️ " + L(10), function() {
				ax.gu(1)
			})]))
	}), new aM(L(220), function() {
		ax.gu(4, 1, new nJ(L(220), L(233) + "<br>" + L(234), !1, [new aM("⬅️ " + L(10), function() {
			ax.gu(1)
		}), new aM(L(235), function() {
			bA.bB.n2(), ax.gu(1)
		})]))
	}), new aM(L(221), function() {
		bA.bB.n8(), ax.gu(4, 1, new nJ(L(236), L(237) + " <a href='" + mF.aFp + "' target='_blank'>" + mF.aFp + "</a>", !1, [new aM("⬅️ " + L(10), function() {
			ax.gu(1)
		})]))
	})], tE = [new aM("⬅️ " + L(10), function() {
		ax.aZ.qO()
	})], 8 === cB.mP() && (tC.unshift(new aM(L(224), function() {
		ax.gu(30)
	})), tC.unshift(new aM(L(225), function() {
		2 <= jB.aFg && (ax.rW(), zs.xG(), bu.dw = !0)
	}, 0, 1)), tC.unshift(new aM(L(226), function() {
		!bK.bY && vs.a4L(bK.bL) && (k6.yM.a4K(), ax.rW(), vs.vt) && vs.xG()
	}, 0, 1)), tC.unshift(new aM(L(227), function() {
		!bK.bY && zu.a4O(bK.bL) && (yS.yT(2), k6.yM.a0A(), ax.rW(), vs.vt) && vs.xG()
	}, 0, 1))), 1 === bA.id && 5 <= bA.jl && tC.push(new aM(L(222), function() {
		bA.bB.n9()
	})), lq = new iU(L(223), tE), tB = new tF(tC, lq.iX)
}

function aFq() {
	this.aFr = function() {
		for (var o4, r, sG, aFs = w, aFt = t.a2X, b4 = t.u, aFu = b4 - 1, aFv = t.v - 1, nt = 0, s = 1; s < aFv; s++)
			for (sG = s * b4, r = 1; r < aFu; r++) aFt[o4 = sG + r << 2] === aFt[1 + o4] && aFt[o4] === aFt[2 + o4] && (nt++, aFs[2 + o4] = 4);
		aFw.aFx = nt
	}, this.aFy = function(aFz, aG0) {
		for (var aFs = w, b4 = t.u, aFu = b4 - 1, aFv = t.v - 1, id = 0, s = 1; s < aFv; s++)
			for (var sG = s * b4, r = 1; r < aFu; r++) {
				var dx = 2 + (sG + r << 2);
				aFs[dx] === aFz && (! function(dx, id, aFz, aG0) {
					var ae = 1,
						aFs = w,
						aFC = x.aFC,
						aG2 = [dx],
						aG3 = id >> 8 << 1,
						aG4 = 255 & id;
					aFs[dx - 2] = aG3, aFs[dx - 1] = aG4, aFs[dx] = 5;
					for (; ae;) {
						for (var aG5 = [], ai = 0; ai < ae; ai++)
							for (var yq = aG2[ai], iP = 3; 0 <= iP; iP--) {
								var aG6 = yq + aFC[iP];
								aFs[aG6] === aFz && (aFs[aG6 - 2] = aG3, aFs[aG6 - 1] = aG4, aFs[aG6] = aG0, aG5.push(aG6))
							}
						ae = (aG2 = aG5).length
					}
				}(dx, id, aFz, aG0), id = (id + 1) % 32768)
			}
	}, this.aG7 = function() {
		for (var aFs = w, b4 = t.u, aFu = b4 - 3, aFv = t.v - 3, aG9 = 12 * b4, s = 3; s < aFv; s++)
			for (var sG = s * b4, r = 3; r < aFu; r++) {
				var dx = 2 + (sG + r << 2);
				2 !== aFs[dx] || 2 === aFs[dx - 12] && 2 === aFs[12 + dx] && 2 === aFs[dx - aG9] && 2 === aFs[dx + aG9] || (aFs[dx - 2] = 1 | aFs[dx - 2])
			}
	}
}

function aGA() {
	this.n0 = null, this.mz = 0, this.aGB = function() {
		for (this.mz = 0, ai = bK.g6 - 1; 0 <= ai; ai--) 0 !== fL.gl[ai] && this.mz++;
		this.n0 = new Uint16Array(this.mz);
		for (var ae = 0, ai = 0; ai < bK.g6; ai++) 0 !== fL.gl[ai] && (this.n0[ae++] = ai)
	}, this.aE9 = function() {
		for (var ge = fL.ge, aGE = fL.aGE, aGF = fL.aGF, n0 = my.n0, ai = my.mz - 1; 0 <= ai; ai--) {
			var o4 = n0[ai],
				gj = ge[o4],
				kG = aGE[o4];
			gj <= je.kI(kG, 4) ? aGG.ut(o4) : kG <= gj ? 250 <= (aGE[o4] = gj) && (aGF[o4] = 1) : aGE[o4] = kG - Math.max(1, je.kI(kG - gj, 1e3))
		}
		this.aGD()
	}, this.aGD = function() {
		for (var gl = fL.gl, a0W = this.n0, a0V = this.mz, ai = a0V - 1; 0 <= ai; ai--) 0 === gl[a0W[ai]] && (a0W[ai] = a0W[--a0V]);
		this.mz = a0V
	}
}

function aGH() {
	var aGI, canvas, jb, aGJ;

	function aGQ(a8, name, aGR, en) {
		jb[a8] = name, canvas[a8] = new Image, canvas[a8].onload = function() {
			! function(a8, aGR) {
				var a0f, ho = null;
				7 === aGR ? a0f = aR.aAg.a0h : 8 === aGR ? (a0f = aR.aAg.a0k, ho = .1) : 3 === aGR ? (a0f = aR.aAg.a0i, ho = .06) : 5 === aGR ? a0f = aR.aAg.a0l : 6 === aGR ? a0f = aR.aAg.a0g : 4 === aGR && (a0f = aR.aAg.a0m);
				canvas[a8] = aR.aAg.a0e(canvas[a8], a0f, ho)
			}(a8, aGR), aGT()
		}, canvas[a8].onerror = function(aH) {
			console.error("Error loading image at index", a8, "Error:", aH), aGT()
		}, canvas[a8].src = "data:image/png;base64," + en
	}

	function aGT() {
		aGI--, aGN()
	}

	function aGN() {
		0 === aGI && (aGI = -1, aGP(), bu.dw = !0, canvas[7] = aGJ, canvas[8] = aGJ, canvas[9] = aGJ, canvas[10] = aGJ, 5 === ax.d2) && ax.d3().aGV.resize()
	}

	function aGP() {
		jS.xx(), aGW.mC([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== bA.id, 1 !== bA.id, !0, !0, !0]), y7.wQ = new aGX, y7.wQ.q(), zu.aBM()
	}
	this.q = function() {
		if (void 0 === canvas) {
			aGI = 23, canvas = new Array(aGI), jb = new Array(aGI), (aGJ = document.createElement("canvas")).width = 1;
			for (var ai = aGI - (aGJ.height = 1); 0 <= ai; ai--) canvas[ai] = aGJ;
			aGP(), aGQ(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGQ(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGQ(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGQ(3, "orders", 6,
					"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"
					), aGQ(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGQ(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGQ(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGQ(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGQ(8,
					"googleplay", 3,
					"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"
					), aGQ(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGQ(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGQ(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGQ(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGQ(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGQ(14, "bestPlayer", 5,
					"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"
					), aGQ(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGQ(16, "apple", 3,
					"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"
					), aGQ(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGQ(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGQ(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGQ(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGQ(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGQ(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(a8) {
		return canvas[a8]
	}, this.aGL = function(name) {
		for (var ai = jb.length - 1; 0 <= ai; ai--)
			if (jb[ai] === name) return canvas[ai];
		return aGJ
	}, this.mK = function() {
		return aGI <= 0
	}, this.aGM = function() {
		aGI = 0, aGN()
	}
}

function aGY() {
	var aGZ = 501,
		aGc = (this.aGa = new Uint32Array(aGZ), this.a2z = new Uint32Array(aGZ), this.aGb = new Uint16Array(aGZ), this.aFg = 0, 1),
		aGd = 0;

	function aGg(self) {
		self.max.fill(0)
	}

	function aGk(self, ai) {
		self.max[0] = Math.max(self.aGa[ai], self.max[0]), self.max[1] = Math.max(self.a2z[ai], self.max[1]), self.max[2] = Math.max(self.aGb[ai], self.max[2])
	}
	this.max = [0, 0, 0], this.aGe = 0, this.jC = new Array(21), this.aGf = null, this.aBM = function() {
		this.aGf = [L(238), L(239), L(240), L(241), L(242), L(243), L(244), L(245), L(34), L(246), L(247), L(248), L(249), L(250), "", L(251), L(252), L(253), L(254), L(255), L(256)]
	}, this.q = function() {
		this.aFg = 0, aGc = 1, this.aGe = 0, aGd = 0, aGg(this), this.jC.fill(0)
	}, this.a3z = function(player, a3q) {
		aR.bc.mr(player) && (this.jC[0] += a3q + 1, this.jC[1]++, this.jC[12] += oi.a2t[1])
	}, this.a2u = function(player, a2q) {
		__fx.donationsTracker.logDonation(player, a2q, oi.a2t[0]);
		player === bK.bL && (bI.a2u(oi.a2t[0], oi.a2t[1], a2q), this.jC[12] += oi.a2t[1], this.jC[16] += oi.a2t[0]), a2q === bK.bL && (bI.aGh(oi.a2t[0], player), this.jC[10] += oi.a2t[0])
	}, this.a48 = function(player) {
		aR.bc.mr(player) && (this.jC[2]++, this.jC[12] += oi.a2t[1])
	}, this.a4T = function(player) {
		aR.bc.mr(player) && (this.jC[19]++, this.jC[12] += oi.a2t[1])
	}, this.aGi = function(player) {
		aR.bc.mr(player) && this.jC[20]++
	}, this.lC = function(player, aAj, a8) {
		aR.bc.mr(player) && (this.jC[a8] += aAj)
	}, this.fA = function() {
		var self;
		this.aGe || 0 < aGd-- || ((self = this).aGa[self.aFg] = fL.ge[bK.bL], self.a2z[self.aFg] = fL.jD[bK.bL], self.aGb[self.aFg] = a2n.a2i(bK.bL), aGk(self, self.aFg), self.aFg++, self.aFg === aGZ && function(self) {
			aGg(self), aGk(self, 0), self.aFg = 1 + je.kI(aGZ, 2);
			for (var ai = 1; ai < self.aFg; ai++) self.aGa[ai] = self.aGa[2 * ai], self.a2z[ai] = self.a2z[2 * ai], self.aGb[ai] = self.aGb[2 * ai], aGk(self, ai);
			aGc *= 2
		}(self), aGd = aGc - 1, zs.aW(), 0 === fL.gl[bK.bL] && (self.aGe = bu.gE()))
	}
}

function aGm() {
	this.q = function() {
		this.nu = [], this.a8 = 0
	}, this.hq = function() {
		return new Uint8Array(this.nu)
	}, this.et = function(aGn, value) {
		for (var nu = this.nu, dj = this.a8 + aGn - 1, aGo = 1 + (dj >> 3); nu.length < aGo;) nu.push(0);
		for (var ai = this.a8; ai <= dj; ai++) nu[ai >> 3] |= (value >> dj - ai & 1) << 7 - (7 & ai);
		this.a8 += aGn
	}, this.a2g = function(nu, eo, aAS) {
		var aGp = aR.ie.aGq(nu);
		this.et(eo, aGp);
		for (var ai = 0; ai < aGp; ai++) this.et(aAS, nu[ai])
	}, this.aGr = function(nu, eo, aAV) {
		var aGp = aR.ie.aGq(nu);
		this.et(eo, aGp);
		for (var ai = 0; ai < aGp; ai++) this.aGs(nu[ai], aAV)
	}, this.aGs = function(en, eo) {
		var ae = en.length;
		this.et(eo, ae);
		for (var ai = 0; ai < ae; ai++) this.et(16, en.charCodeAt(ai))
	}, this.aGt = function(mD) {
		var aGu = (mD = mD.toDataURL()).split(",");
		if (aGu.length < 2) console.log("error 266");
		else {
			mD = aR.aS.aAY(mD = aGu[aGu.length - 1], "/", "_"), mD = aR.aS.aAY(mD, "\\+", "-");
			var mD = aR.aS.aAY(mD, "=", ""),
				aGv = bw.bx.aD7(mD),
				ae = aGv.length;
			this.et(30, ae);
			for (var ai = 0; ai < ae; ai++) this.et(6, aGv[ai])
		}
	}
}

function aGw() {
	"function" != typeof Math.log2 && (Math.log2 = function(r) {
		return Math.log(r) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(r) {
		return Math.log(r) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(r) {
		return 0 < r ? 1 : r < 0 ? -1 : 0
	})
}

function aGx() {
	var iJ, au = !1,
		aGy = !1,
		aGz = -1e4,
		aH0 = -1,
		aH1 = 0;

	function resize(aH6) {
		iJ = 0, gZ.mK() && (aH3(aH6) || au) && (au = !1, dH.resize(), aH7.hs.resize(), tv.q(), aGW.q(), a0E.resize(), ss.resize(), aCB.resize(), ax.resize(), 1 <= bK.fC ? (zw.resize(!1), aEA.resize(), jF.resize(), e7.resize(), fV.resize(), bI
		.resize(), vs.resize(), zr.resize(), zu.resize(), zt.resize(), fD.resize(), jS.resize(), zs.resize(), dq.resize(), jN.resize(), fT.resize(), e7.dr()) : (cB.aH8(), cB.aH9()), bu.dw = !0)
	}

	function aH2(er) {
		return er && 128 < er ? Math.floor(er) : 128
	}

	function aH3(aH6) {
		var b4, b9, aHB, mL, mN;
		if (!(0 < b3.a05)) return mL = aH2(document.documentElement.clientWidth), mN = aH2(window.visualViewport && 2 !== bA.id ? window.visualViewport.height : document.documentElement.clientHeight), b4 = mL, b9 = mN, aHB = 0 !== bA.id || b4 < b9 ?
			700 : 1200, aHB = Math.min(aHB / ((b4 + b9) / 2), 1), aHB = 0 === bz.c0.data[1].value ? 2 * aHB / 3 : Math.min(aHB + (bz.c0.data[1].value - 1) * (1 - aHB) / 2, 1), b3.b5 = (window.devicePixelRatio || 1) * aHB, __fx.hoveringTooltip
			.canvasPixelScale = b3.b5, aH6 && !aGy ? (aGy = !0, ax.removeChild(document.body, jh)) : aGy && (aGy = !1, document.body.appendChild(jh)), b4 = Math.floor(.5 + mL * b3.b5), b9 = Math.floor(.5 + mN * b3.b5), b4 !== b3.b4 || b9 !== b3
			.b9 ? (b3.b4 = b4, b3.b9 = b9, b3.min = uW(b4, b9), b3.max = sm(b4, b9), b3.dG = je.kI(b4 + b9, 2), b3.aCb = b4 / b9, jh.width = b4, jh.height = b9, jh.style.width = mL + "px", jh.style.height = mN + "px", aH0 = bu.bv + 1e3, 1) :
			void 0
	}
	this.b4 = 0, this.b9 = 0, this.min = 0, this.max = 0, this.dG = 0, this.aCb = 1, this.b5 = 1, this.a05 = 0, this.aBM = function() {
		this.b4 = aH2(document.documentElement.clientWidth) + 2, this.b9 = aH2(document.documentElement.clientHeight) + 2
	}, this.q = function() {
		iJ = 1, jh = document.getElementById("canvasA"), 2 === bA.id && (jh.style.webkitUserSelect = "none"), (eD = jh.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aH3(0)
	}, this.fA = function() {
		50 <= ++iJ && resize(0), -1 === aH0 || bu.bv < aH0 || (aH1++, aH0 = -1, bu.bv + 8e3 <= 2e3 * aH1 ? console.log("error 3748") : bA.bB.setState(15))
	}, this.aH5 = function(uo) {
		au = !0, resize(uo)
	}, this.a0D = function() {
		aGz + 1e3 > bu.bv || (aGz = bu.bv, resize(0))
	}
}

function aHE() {
	var aHF, aHG, aHH;
	aHF = [32, 65, 191, 913, 931], aHG = [64, 127, 688, 930, 1155], aHH = new Array(aHF.length + 1);
	for (var ai = 0; ai < aHH.length; ai++) {
		aHH[ai] = 0;
		for (var gF = ai - 1; 0 <= gF; gF--) aHH[ai] += aHG[gF] - aHF[gF]
	}

	function aHN(iJ) {
		for (var ai = aHF.length - 1; 0 <= ai; ai--)
			if (iJ >= aHF[ai] && iJ < aHG[ai]) return ai;
		return -1
	}
	this.a4m = function(en) {
		return 0 !== (en = en.trim()).indexOf("Bot ") && 0 !== en.indexOf("[Bot] ") && function(en, aHK, aHL) {
			var ae = (en = en.trim()).length;
			if (ae < aHK || aHL < ae) return !1;
			for (var iJ, aHM = 0, ai = 0; ai < ae; ai++)
				if (iJ = en.charCodeAt(ai), aHM += 65 <= iJ && iJ <= 90 || 1040 <= iJ && iJ <= 1071 ? 1 : 0, -1 === aHN(iJ)) return !1;
			if (3 < aHM && aHM > Math.floor(ae / 2)) return !1;
			return !0
		}(en, 3, 20)
	}, this.em = function(en) {
		for (var ae = (en = en.trim()).length, nu = [], ai = 0; ai < ae; ai++) {
			var iJ, o4 = aHN(iJ = en.charCodeAt(ai));
			nu.push(aHH[o4] + iJ - aHF[o4])
		}
		return nu
	}, this.cZ = function(nu) {
		for (var iJ, pW, en = "", ae = nu.length, ai = 0; ai < ae; ai++)
			for (pW = 1; pW < aHH.length; pW++)
				if (nu[ai] < aHH[pW]) {
					iJ = aHF[pW - 1] + nu[ai] - aHH[pW - 1], en += String.fromCharCode(iJ);
					break
				} return en
	}, this.aHO = function(en) {
		for (var nu = this.em(en), result = "", ai = 0; ai < nu.length; ai++) result = (result += nu[ai] < 10 ? "00" : nu[ai] < 100 ? "0" : "") + nu[ai].toString(10);
		return result
	}, this.aHP = function(en) {
		for (var nu = new Array(Math.floor(en.length / 3)), ai = 0; ai < en.length; ai += 3) nu[Math.floor(ai / 3)] = parseInt(en.substring(ai, ai + 3));
		return this.cZ(nu)
	}, this.aHQ = function(en) {
		for (var er, nu = [en.length], ai = 0; ai < en.length; ai++) nu[ai] = en.charCodeAt(ai) - 48;
		var result = "";
		for (ai = 0; ai < en.length; ai++) ai === en.length - 1 || 51 < 10 * nu[ai] + nu[ai + 1] ? result += nu[ai].toString() : (er = 10 * nu[ai] + nu[ai + 1], result += String.fromCharCode(er + (er < 26 ? 65 : 71)), ai++);
		return result
	}, this.aHR = function(en) {
		for (var iJ, result = "", ai = 0; ai < en.length; ai++) 48 <= (iJ = en.charCodeAt(ai)) && iJ < 58 ? result += String.fromCharCode(iJ) : 65 <= iJ && iJ < 75 ? result += "0" + (iJ - 65).toString() : 75 <= iJ && iJ < 91 ? result += (iJ - 65)
			.toString() : 97 <= iJ && iJ < 123 && (result += (iJ - 71).toString());
		return result
	}, this.aHS = function(en) {
		for (var ae = en.length, nu = [], ai = 0; ai < ae; ai++)(iJ = en.charCodeAt(ai)) < 58 ? nu.push(en[ai]) : (iJ -= iJ < 91 ? 65 : 71, nu.push(String(je.kI(iJ, 10))), nu.push(String(iJ - 10 * je.kI(iJ, 10))));
		var ae = nu.length - 2,
			iJ = 0,
			aGv = [];
		for (ai = 0; ai < ae; ai += 3) aGv[iJ++] = parseInt(nu[ai] + nu[ai + 1] + nu[ai + 2]);
		return aGv
	}, this.aHT = function() {
		for (var oo, aHU = "", ai = 0; ai < 6; ai++) oo = 48 + kJ.random() % 36, oo += 58 <= oo ? 39 : 0, aHU += String.fromCharCode(oo);
		return aHU
	}
}

function aHV() {
	var aHY, aHZ, aCS = document.createElement("div"),
		aHW = document.createElement("div"),
		aHX = document.createElement("div"),
		aCU = document.createElement("div"),
		jW = [],
		a9P = [L(257), L(258), L(259), L(260), L(261), L(262), L(263)],
		aHa = [1, 2, 3, 0, 9, 10, 11];

	function aHb(ai) {
		ax.gu(8, 0, new lz(21, {
			qn: aHa[ai],
			h5: 0,
			h6: 10
		}))
	}
	this.show = function() {
			this.cH(ax.aZ.aEb), document.body.appendChild(aCS)
		}, this.aw = function() {
			ax.removeChild(document.body, aCS)
		}, this.cH = function(aEb) {
			for (var aHd = [3, 0, 1, 2, 4, 5, 6], ai = 0; ai < jW.length; ai++) {
				var b4 = aEb[ai];
				aHY[aHd[ai]][1].aQ.textContent = b4 || ""
			}
		}, this.resize = function() {
			var ai, qS = dH.gap,
				b9 = aR.az.np(.085),
				b4 = Math.min(4 * b9, b3.b4 - 2 * qS),
				ae = jW.length;
			for (aR.az.aCh(aCS, qS, b3.b9 - qS - b9, b4, b9), aR.az.bD(aCS), aR.az.bD(aHW, 6), ai = 0; ai < ae - 1; ai++) aR.az.bD(jW[ai].button, 6);
			for (ai = 0; ai < ae; ai++) aHY[ai][0].resize(), aHY[ai][1].resize();
			for (jW[0].r = 0, jW[0].button.style.left = aR.az.b8(jW[0].r), jW[0].button.style.width = aR.az.aCj(1.7 * b9), ai = 1; ai < ae; ai++) jW[ai].r = jW[ai - 1].r + jW[ai - 1].button.offsetWidth, jW[ai].button.style.left = aR.az.b8(jW[ai].r);
			if (!aHZ) {
				if (!gZ.mK()) return;
				(aHZ = gZ.get(14)).style.width = "24%", aHZ.style.position = "absolute", aHW.appendChild(aHZ)
			}
			aHZ.style.left = aR.az.b8(0), aHZ.style.top = "7%", aHX.aCc && (aHX.scrollLeft = aHX.aCc)
		}, aCS.style.position = "absolute", aHW.style.width = "25%", aHW.style.height = "100%", aHW.style.backgroundColor = aJ.gI, aHX.style.position = "absolute", aHX.style.width = "75%", aHX.style.height = "100%", aHX.style.backgroundColor = aJ.gI,
		aHX.style.top = aHX.style.right = aR.az.b8(0), aR.az.aCX(aHX), aCU.style.height = aCU.style.maxHeight = "100%", jW.push(new aM("", function() {
			aHb(0)
		}, aJ.a1g)), jW.push(new aM("", function() {
			aHb(1)
		}, aJ.a1h)), jW.push(new aM("", function() {
			aHb(2)
		}, aJ.a1b)), jW.push(new aM("", function() {
			aHb(3)
		}, aJ.a1P)), jW.push(new aM("", function() {
			aHb(4)
		}, aJ.a1y)), jW.push(new aM("", function() {
			aHb(5)
		}, aJ.a1u)), jW.push(new aM("", function() {
			aHb(6)
		}, aJ.a1y)), aHY = new Array(jW.length);
	for (var ai = 0; ai < jW.length; ai++) jW[ai].button.style.position = "absolute", aHY[ai] = [new aHc(a9P[ai], jW[ai].button, .25, .45), new aHc("", jW[ai].button, .53, .84, 1)], jW[ai].button.style.height = jW[ai].button.style.maxHeight = "100%",
		jW[ai].button.top = aR.az.b8(0), aCU.appendChild(jW[ai].button);
	aHX.appendChild(aCU), aCS.appendChild(aHW), aCS.appendChild(aHX)
}

function iu(aHe, aHf, aHg, aHh) {
	var zE = document.createElement("textarea"),
		aHi = (this.aH = zE, !0);

	function aHj() {
		zE.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aHf && aR.az.bD(zE, 5)
		}, this.iv = function(oz) {
			zE.value = oz
		}, this.f7 = function() {
			return zE.value
		}, this.zF = function() {
			zE.select()
		}, this.clear = function() {
			zE.value = ""
		}, this.zG = function() {
			aHi && navigator.clipboard ? (zE.select(), navigator.clipboard.writeText(zE.value).catch(function() {
				aHi = !1, aHj()
			})) : aHj()
		}, zE.setAttribute("id", "textArea" + ax.aZ.a5S++), zE.setAttribute("autocomplete", "off"), aHe && zE.setAttribute("placeholder", aHe), zE.style.top = "0", zE.style.left = "0", zE.style.width = "100%", zE.style.height = "100%", zE.style
		.userSelect = "none", zE.style.outline = "none", zE.style.resize = "none", zE.style.border = "none", zE.style.color = aJ.eA, zE.style.backgroundColor = aJ.e9, aHh ? (zE.style.fontSize = "1em", zE.rows = 6, zE.style.padding = "0.25em") : (zE
			.style.padding = "0.45em", zE.style.fontSize = "1.2em"), aHg && zE.addEventListener("input", function(aH) {
			aHg(aH)
		}), zE.addEventListener("focus", function() {
			b3.a05++
		}), zE.addEventListener("blur", function() {
			b3.a05--
		})
}

function aHk(data) {
	var lq, lr;
	this.show = function() {
		data.d5 && uw.v0("account", data.d8), lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), lr.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(data.username, [new aM("⬅️ " + L(10), function() {
		uw.clear(), ax.ic()
	}), new aM(data.d5 ? "🔄 " + L(264) : L(265), function() {
		ax.gu(8, data.d5 ? ax.d3().lt : void 0, new lz(25, {
			ux: 0,
			d8: data.d8,
			cQ: data.cQ
		}))
	}, 0, 0, 1)]), lr = new iW(lq.iX, function() {
		var ii = [];
		ii.push(function() {
				var hW = new il,
					a6h = (hW.im(L(316)), data.cv);
				a6h < 1 ? (hW.jd(L(317)), 0 === data.cu ? hW.m5(L(318)) : 1 === data.cu ? hW.m5(L(319)) : 2 === data.cu ? hW.m5(L(320)) : 3 === data.cu ? hW.m5(L(321)) : 4 === data.cu ? hW.m5(L(322)) : 5 === data.cu ? hW.m5(L(323)) :
					6 === data.cu ? hW.m5(L(324)) : hW.m5(L(325))) : (hW.jd(L(326)), a6h = a6h < 2 ? L(327) : a6h < 61 ? 2 === a6h ? L(328) : L(329, [a6h - 1]) : a6h < 84 ? 61 === a6h ? L(330) : L(331, [a6h - 60]) : a6h < 255 ? 84 ===
					a6h ? L(332) : L(333, [a6h - 83]) : L(334), hW.m5(a6h));
				{
					var v2, aI2;
					hW.ir(new is), data.d5 && (v2 = hW.m5(), hW.ir(new m4([new aM(bz.r4.a4a(data.d8) ? L(335) : L(336), function(aH) {
						return bz.r4.aID(data.d8) ? (aH.textContent = L(335), aI2(1)) : (aH.textContent = L(336), aI2(0)), !0
					}).button])), aI2 = function(er) {
						v2.textContent = er ? L(337) : ""
					}, bz.r4.a4a(data.d8) && aI2(1), hW.ir(new is))
				}
				var a6 = new a7({
					value: data.username,
					a8: -1
				});
				a6.aH.readOnly = !0, hW.ir(a6), hW.ir(new m4([new aM(L(287), function(aH) {
					return aR.az.aCs(a6.aH), aR.az.aCt(aH), !0
				}).button])), data.d5 ? (hW.ir(new is), hW.jd("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", hW.ir(new m4([new aM(L(339),
					function(aH) {
						return bM.qu.a7H({
							ux: 3,
							d8: data.d8,
							value: 0
						}), aR.az.aCt(aH), !0
					}, aJ.nK).button])), hW.ir(new m4([new aM(L(340), function(aH) {
					return bM.qu.a7H({
						ux: 3,
						d8: data.d8,
						value: 1
					}), aR.az.aCt(aH), !0
				}, aJ.nK).button])), hW.ir(new m4([new aM("Cheater", function(aH) {
					return bM.qu.a7H({
						ux: 3,
						d8: data.d8,
						value: 2
					}), aR.az.aCt(aH), !0
				}, aJ.nK).button])), hW.ir(new m4([new aM("False Reporter", function(aH) {
					return bM.qu.a7H({
						ux: 3,
						d8: data.d8,
						value: 3
					}), aR.az.aCt(aH), !0
				}, aJ.nK).button]))) : hW.m5(L(338));
				return hW
			}()),
			function(ii) {
				var hW, v2, aCG, aIE, aI3, vf, aI5;
				data.d5 || ((hW = new il).im(L(341)), (v2 = hW.m5(data.cp.length + " / 160")).style.textAlign = "center", aCG = !0, (aIE = new iu(0, 1, function(aH) {
					aH = aH.target.value.length;
					v2.textContent = aH + " / 160", 160 < aH ? aCG && (aCG = !1, vf.aN(1)) : aCG || (aCG = !0, vf.aN(0))
				})).aH.rows = 6, aIE.aH.style.fontSize = "1em", aIE.iv(data.cp), hW.ir(aIE), 0 !== data.cn ? (vf = new aM(L(342), function() {
					if (!aCG) return !0;
					ax.gu(8, ax.d3().lt, new lz(29, {
						ux: 1,
						en: aIE.f7().substring(0, 160)
					}))
				}, 0, 0, 1), hW.ir(new m4([vf.button])), hW.ir(new m4([new aM(1 === data.cn ? L(343) : L(344), function() {
					ax.gu(8, ax.d3().lt, new lz(29, {
						ux: 0,
						en: ""
					}))
				}, 0, 0, 1).button])), hW.m5(1 === data.cn ? L(345, [data.cq - 1]) : L(346, [data.cq - 1])), hW.m5(L(347, [data.co]))) : (aI3 = new aM(L(348), function() {
					if (!aIE.aH.readOnly) return !0;
					ax.gu(8, ax.d3().lt, new lz(29, {
						ux: 1,
						en: aIE.f7().substring(0, 160)
					}))
				}, 1), vf = new aM(L(285), function(aH) {
					if (aH.textContent === L(285)) {
						if (!aCG) return !0;
						aH.textContent = L(286), aIE.aH.readOnly = !0, aI3.aN(0), aI3.button.style.color = aJ.iD
					} else aI5();
					return !0
				}), hW.ir(new m4([vf.button])), hW.m5(L(347, [data.co])), aI5 = function() {
					vf.button.textContent = L(285), aIE.aH.readOnly = !1, aI3.aN(1), aI3.button.style.color = aJ.eA
				}, hW.ir(new m4([aI3.button]))), ii.push(hW))
			}(ii),
			function(ii) {
				var hW;
				data.d5 && 0 !== data.cn && ((hW = new il).im(L(349)), hW.v3(data.cp), hW.ir(new m4([new aM(L(350, 0, "Report"), function(aH) {
					return bM.aZ.aI4(0) && (aR.az.aCt(aH), bM.qu.qv({
						ux: 5,
						d8: data.d8
					})), !0
				}, 0, 0, 1).button])), ii.push(hW))
			}(ii), ii.push(function() {
				var hW = new il,
					aHz = (hW.im(L(266)), hW.jd("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(267), L(268), L(269), L(270), L(271), L(272), L(273), L(
						274), L(275), L(276), L(277), L(278), L(279), L(280)]),
					oo = data.cr;
				return hW.jd(L(281) + aR.aS.aI0(data.cW, .01, 2) + "<br>" + L(282) + (oo + 1) + " / " + data.cV + "<br>" + L(283) + aHz[function(oo, cW) {
					if (oo < 10) return 0;
					if (oo < 30) return 1;
					if (oo < 60) return 2;
					if (3e4 <= (cW = je.kI(cW, 100))) return 3;
					if (12e3 <= cW) return 4;
					if (7e3 <= cW) return 5;
					if (3e3 <= cW) return 6;
					if (1e3 <= cW) return 7;
					if (500 <= cW) return 8;
					if (200 <= cW) return 9;
					if (70 <= cW) return 10;
					if (20 <= cW) return 11;
					if (3 <= cW) return 12;
					return 13
				}(oo, data.cW)]), hW
			}()), data.d5 && ii.push(function() {
				var hW = new il,
					a6 = (hW.im(L(284)), hW.jd("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new a7({
						value: bz.c0.data[147].value,
						a8: -1
					}, 1, void 0, function(aH) {
						bz.cG.cH(147, aI2(aH.target.value))
					})),
					aI3 = (hW.ir(a6), new aM(L(1), function(aH) {
						return a6.aH.readOnly && bM.aZ.aI4(0) && (aR.az.aCt(aH), aI5(), bM.qu.a7H({
							ux: 0,
							d8: data.d8,
							value: parseInt(bz.c0.data[147].value, 10)
						})), !0
					}, 1)),
					vf = new aM(L(285), function(aH) {
						return aH.textContent === L(285) ? (aH.textContent = L(286), a6.aH.readOnly = !0, aI3.aN(0), aI3.button.style.color = aJ.iD, bz.cG.cH(147, a6.aH.value), aI2(bz.c0.data[147].value)) : aI5(), !0
					}),
					v2 = (hW.ir(new m4([vf.button])), hW.m5()),
					aI2 = function(er) {
						v2.innerHTML = ax.aZ.aI6(er, bz.c0.data[105].value, data.d8)
					},
					aI5 = function() {
						vf.button.textContent = L(285), a6.aH.readOnly = !1, aI3.aN(1), aI3.button.style.color = aJ.eA
					};
				return aI2(bz.c0.data[147].value), hW.ir(new m4([aI3.button])), hW
			}());
		ii.push(function() {
			var hW = new il,
				a6 = (hW.im(L(26)), new a7({
					value: data.d8,
					a8: -1
				}));
			return a6.aH.readOnly = !0, hW.ir(a6), hW.ir(new m4([new aM(L(287), function(aH) {
				return aR.az.aCs(a6.aH), aR.az.aCt(aH), !0
			}).button])), hW
		}()), data.d5 || (ii.push(function() {
			var hW = new il,
				m3 = (hW.im(L(27)), new a7(bz.c0.data[106]));
			return m3.aH.readOnly = !0, m3.aH.type = "password", hW.ir(m3), hW.ir(new m4([new aM(L(28), function(aH) {
				return aH.textContent === L(28) ? (aH.textContent = L(29), m3.aH.type = "text") : (aH.textContent = L(28), m3.aH.type = "password"), !0
			}).button, new aM(L(287), function(aH) {
				return aR.az.aCs(m3.aH), aR.az.aCt(aH), !0
			}).button])), hW.ir(new m4([new aM(L(288), function() {
				ax.gu(8, ax.d3().lt, new lz(15))
			}).button])), hW.im(L(30), "0.8em"), hW.m5(L(289)), hW.m5(L(290)), hW.m5(L(291)), hW
		}()), ii.push(function() {
			var hW = new il;
			return hW.im(L(292)), hW.ir(new m4([new aM(L(293), function() {
				ax.gu(6, ax.d3().lt)
			}).button])), hW.ir(new m4([new aM(L(294), function() {
				bz.cG.cH(105, ""), ax.gu(8, ax.d3().lt, new lz(18))
			}).button])), hW.ir(new m4([new aM(L(295) + bz.c0.data[105].value, function() {
				ax.gu(4, 0, new nJ(L(296), L(297), !0, [new aM("⬅️ " + L(10), function() {
					ax.gu(7, ax.ls(7).lt)
				})]))
			}, aJ.nK).button])), hW
		}()), ii.push(function() {
			function aI8(a8) {
				aI7[0].aN(0 === a8 ? aJ.iK : aJ.r5), aI7[1].aN(0 === a8 ? aJ.iK : aJ.nK), aI7[2].aN(a8 === v6.v7.length - 1 || a8 < 5 ? aJ.iK : aJ.nK)
			}
			var v6, aI7, hW = new il;
			hW.im(L(302)), hW.m5(L(303)), bz.aZ.xX();
			return aI7 = [new aM(L(25), function() {
				var a8 = Math.min(bz.c0.data[117].value, v6.v7.length - 1);
				a8 < 1 || (a8 = bz.aZ.r3(a8), bz.cG.cH(105, a8.d8), bz.cG.cH(106, a8.password), ax.gu(8, ax.d3().lt, new lz(18)))
			}, aJ.iK, 1), new aM(L(300), function() {
				var a8 = Math.min(bz.c0.data[117].value, v6.v7.length - 1);
				if (!(a8 < 1)) {
					v6.v7[a8].remove(), v6.v7.splice(a8, 1);
					for (var ai = a8; ai < v6.v7.length; ai++) v6.v7[ai].name = "" + ai;
					bz.aZ.r2(a8), a8 = bz.c0.data[117].value, v6.v7[a8].textContent = v6.v7[a8].textContent.replace("⚪", "🟢"), aI8(a8)
				}
			}, aJ.iK, 1), new aM(L(301), function() {
				var a8 = Math.min(bz.c0.data[117].value, v6.v7.length - 1);
				if (a8 !== v6.v7.length - 1) {
					for (var ai = v6.v7.length - 1; a8 < ai; ai--) v6.v7[ai].remove(), v6.v7.splice(ai, 1), bz.aZ.r2(ai);
					aI8(a8)
				}
			}, aJ.iK, 1)], v6 = new ip(bz.c0.data[117], aI8), aI8(0), v6.v7[0].style.marginTop = "0.5em", hW.io(v6), hW.ir(new m4([aI7[0].button])), hW.ir(new m4([aI7[1].button])), hW.ir(new m4([aI7[2].button])), hW
		}()));
		return ii.push(function() {
				var hW = new il,
					aHz = (hW.im(L(307)), [L(308), L(309), L(310), L(311)]),
					oo = data.cs;
				return hW.jd(L(312) + (data.ct / 100).toFixed(2) + "<br>" + L(282) + (oo + 1) + " / " + data.cV + "<br>" + L(283) + aHz[oo < 10 ? 0 : oo < 50 ? 1 : oo < 200 ? 2 : 3]), hW
			}()), ii.push(function() {
				var hW = new il;
				return hW.im(L(304)), hW.jd(L(305) + aR.aS.aI0(data.cS, .1, 1) + "<br>" + L(282) + (data.cT + 1) + " / " + data.cV + "<br>" + L(306) + data.cU), hW
			}()),
			function(ii) {
				var hW = new il,
					aIF = data.cc,
					aIG = (hW.im(L(351)), hW.jd(L(352, [data.ca.length ? "[" + data.ca + "]" : "-"])), hW.jd(L(353, [aR.aS.aI0(aIF, .01, 2)])), hW.jd(L(354, [data.ce + 1 + " / " + data.cV])), data.cf),
					aIH = (hW.jd(L(355, [aR.aS.aI0(aIG, .1, 1)])), data.ch);
				hW.jd(L(356, [aIH])), hW.jd(L(357, [aR.aS.aI0(aIG / Math.max(aIH, 1), .1, 2)])), aIF = data.cd, hW.im(L(358), "0.8em"), hW.jd(L(352, [data.cb.length ? "[" + data.cb + "]" : "-"])), hW.jd(L(353, [aR.aS.aI0(aIF, .01, 2)])),
					aIG = data.cg, hW.jd(L(355, [aR.aS.aI0(aIG, .1, 1)])), aIH = data.ci, hW.jd(L(356, [aIH])), hW.jd(L(357, [aR.aS.aI0(aIG / Math.max(aIH, 1), .1, 2)])), hW.jd(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", ii.push(hW)
			}(ii),
			function(ii) {
				var hW = new il;
				hW.im(L(359)), hW.jd(L(312) + (data.cl / 10).toFixed(1) + "<br>" + L(283) + (data.cm.length ? L(360, [data.cm]) : L(361))), data.d5 && hW.ir(new m4([new aM(L(362), function(aH) {
					return bM.aZ.aI4(0) && (aR.az.aCt(aH), bM.qu.qv({
						ux: 4,
						d8: data.d8
					})), !0
				}, 0, 0, 1).button]));
				hW.jd("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", ii.push(hW)
			}(ii), ii.push(function() {
				var hW = new il;
				if (hW.im(L(313)), hW.jd(L(314) + data.cj + "<br>" + L(282) + (data.ck + 1) + " / " + data.cV + "<br>" + L(283) + a6i.a9S(data.ck)), data.d5) {
					var a6 = new a7({
							value: bz.c0.data[157].value,
							a8: -1
						}, 1, void 0, function(aH) {
							bz.cG.cH(157, aI2(aH.target.value))
						}),
						vf = (a6.aH.style.marginTop = "0.6em", hW.ir(a6), new aM(L(285), function(aH) {
							return aH.textContent === L(285) ? (aH.textContent = L(286), a6.aH.readOnly = !0, aIB[0].aN(0), aIB[1].aN(0), aIB[0].button.style.color = aJ.iD, aIB[1].button.style.color = aJ.iD, aI2(bz.c0.data[157]
								.value)) : aI5(), !0
						})),
						aIB = (hW.ir(new m4([vf.button])), [new aM("−", function(aH) {
							return a6.aH.readOnly && bM.aZ.aI4(0) && (aR.az.aCt(aH), aI5(), bM.qu.a7H({
								ux: 2,
								d8: data.d8,
								value: je.jf(parseInt(bz.c0.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new aM("+", function(aH) {
							return a6.aH.readOnly && bM.aZ.aI4(0) && (aR.az.aCt(aH), aI5(), bM.qu.a7H({
								ux: 1,
								d8: data.d8,
								value: je.jf(parseInt(bz.c0.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						v2 = hW.m5(),
						aI2 = function(er) {
							return er = aR.bc.aIC(er, 3, 32767), v2.textContent = L(315, [er - 1, er, bz.c0.data[105].value]), er
						};
					hW.ir(new m4([aIB[0].button, aIB[1].button]));
					for (var ai = 0; ai < 2; ai++) aIB[ai].button.style.fontSize = "1.6em";
					var aI5 = function() {
						vf.button.textContent = L(285), a6.aH.readOnly = !1, aIB[0].aN(1), aIB[1].aN(1), aIB[0].button.style.color = aJ.eA, aIB[1].button.style.color = aJ.eA
					};
					aI2(bz.c0.data[157].value)
				}
				return hW
			}()),
			function(ii) {
				var hW, aCr;
				data.d5 && !data.cw || (0 === bA.id || data.d5 || data.cw) && ((hW = new il).im("Patreon"), !data.d5 && data.cx ? hW.ir(new m4([new aM(L(28), function() {
					bM.qu.qv({
						ux: 7,
						d8: data.d8
					}), data.cx = 0, ax.gu(7)
				}).button])) : data.cw ? (hW.jd(L(363, [(data.cy / 100).toFixed(2)]) + "<br>" + L(364, [1 + data.cz + " / " + data.d0]) + "<br>" + L(365, [data.d1 ? L(366) : L(367)])), data.d5 || hW.ir(new m4([new aM(L(368),
				function() {
					bM.qu.qv({
						ux: 8,
						d8: data.d8
					}), data.cw = 0, bz.cG.cH(160, 0), ax.gu(7)
				}).button]))) : (hW.jd(L(369), "0.75em").style.marginBottom = "0.3em", hW.jd("  • " + L(370), "0.75em").style.whiteSpace = "pre", hW.jd("  • " + L(371), "0.75em").style.whiteSpace = "pre", hW.jd("  • " + L(372),
						"0.75em").style.whiteSpace = "pre", hW.jd(L(373), "0.75em").style.marginTop = "1.0em", hW.jd(L(374), "0.75em").style.marginTop = "1.0em", hW.jd("<a href='" + mF.aFi +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aCr = "https://www.patreon.com/oauth2/authorize?state=" + data.d8 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", hW.jd(L(375), "0.75em").style.marginTop = "1.0em", hW.jd("<a href='" + aCr +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.d5 || (hW.ir(new is), hW.ir(new m4([new aM(L(29), function() {
						bM.qu.qv({
							ux: 6,
							d8: data.d8
						}), data.cx = 1, ax.gu(7)
					}).button])), hW.jd(L(376), "0.75em").style.marginTop = "0.75em")), ii.push(hW))
			}(ii),
			function(ii) {
				var hW, v6, aI7, a8, aI8;
				data.d5 || bz.r4.get().length && ((hW = new il).im(L(298)), a8 = 0, aI8 = function() {
					var a98 = bz.r4.get().length;
					aI7[0].aN(a8 === a98 ? aJ.iK : aJ.r5), aI7[1].aN(a8 === a98 ? aJ.iK : aJ.nK), aI7[2].aN(a8 === a98 || a98 - 1 <= a8 || a8 < 5 ? aJ.iK : aJ.nK)
				}, aI7 = [new aM(L(299), function() {
					ax.gu(8, void 0, new lz(25, {
						ux: 0,
						d8: bz.r4.get()[a8],
						cQ: 0
					}))
				}, aJ.iK, 1), new aM(L(300), function() {
					bz.r4.aI9(a8), v6.v7[a8].remove(), v6.v7.splice(a8, 1);
					for (var ai = a8; ai < v6.v7.length; ai++) v6.v7[ai].name = "" + ai;
					bz.r4.get().length && (a8 = Math.max(a8 - 1, 0), v6.v7[a8].textContent = v6.v7[a8].textContent.replace("⚪", "🟢")), aI8()
				}, aJ.iK, 1), new aM(L(301), function() {
					for (var jc = v6.v7.length - 1; a8 < jc; jc--) bz.r4.aI9(jc), v6.v7[jc].remove(), v6.v7.splice(jc, 1);
					aI8()
				}, aJ.iK, 1)], aI8(), (v6 = new ip(bz.r4.aIA(), function(ai) {
					a8 = ai, aI8()
				})).v7[0].style.marginTop = "0.5em", hW.io(v6), hW.ir(new m4([aI7[0].button])), hW.ir(new m4([aI7[1].button])), hW.ir(new m4([aI7[2].button])), ii.push(hW))
			}(ii), ii
	}())
}

function aII() {
	function aIR(player, mV, aIK) {
		3 <= aIK && 2142 < bu.gE() && (mV === bK.g6 || fL.jD[mV] < je.kI(fL.jD[player], 20)) && wX.aIN(player, 20)
	}

	function aIU(player, mW, mV, aIK) {
		3 <= aIK && aIK < 6 && je.kI(fL.jD[player], 8) > fL.jD[mV] && (mW = Math.max(je.kI(11 * fL.jD[mV], 5), je.kI(fL.jD[player], 10)));
		aIK = fL.kn[player].length;
		kD.a3x.aF6(player, mV), kD.a3x.aFA(player, mV, aIK, mW)
	}

	function aIQ(player, mW) {
		var mV = bK.g6,
			ae = fL.kn[player].length;
		kD.a3x.aF5(player), fL.kn[player].length !== ae && kD.a3x.aFA(player, mV, ae, mW)
	}
	this.mq = new Uint8Array(bK.g6), this.q = function() {
		this.mq.fill(0)
	}, this.aIJ = function(player, mW) {
		var a2m, aIK, aIL, aIM;
		ks.mj(player) && (a2m = a2n.a2o(player), 3 <= (aIK = wX.mW[player]) && aIK < 6 && (mW = Math.max(fL.jD[player] - a2m, mW)), aIL = fL.kj[player].length, aIM = fL.ki[player].length, 30 * fL.ge[player] > bK.a2l && fa[player] < 10 && 100 *
			aIM <= aIL && wX.aIN(player, 10), bK.fR ? function(player, mW, aIK, a2m) {
				var mV;
				if (kD.a3x.aFF(player, !1) || kD.a3x.aFI(player, !1)) {
					if (!kD.a3x.aFK(player))
						if (kD.a3x.aFJ()) aIQ(player, mW), aIR(player, bK.g6, aIK);
						else {
							if (kJ.aIS(wX.aIT[aIK])) mV = kD.a3x.aFN(player);
							else {
								if (kD.a3x.aFL() && kJ.aIS(wX.aIV[aIK]) && kD.a3x.aFM(), 6 === aIK) return aIU(player, mW, kD.a3x.aFZ(), aIK);
								mV = kD.a3x.aFQ(player)
							}
							aIU(player, mW, mV, aIK), aIR(player, mV, aIK)
						}
				} else h4.eQ.fA(player) || kD.aIW.fA(player) || ! function(player, mW, aIK, a2m) {
					var mq = kD.mp.mq;
					mq[player] = 0;
					var aIY = gT.og[player];
					if (0 !== aIY) {
						var aIZ = fL.jD[player],
							ge = fL.ge;
						if (player < bK.gd && (mW = aIZ), !(aIZ < ge[player] || 5 === aIK && aIZ < a2m || 4 === aIK && aIZ < je.kI(a2m, 2))) {
							fT.od(aIY);
							for (var ae = oi.oj[0], oh = oi.oh, ai = kJ.tM(ae), pW = 0; pW < ae; pW++) {
								var iJ = oh[(pW + ai) % ae];
								if (mq[iJ]) return k6.aCz.aIa(player, iJ, mW)
							}
							var h7 = h4.aZ.h7;
							for (pW = 0; pW < ae; pW++)
								if (iJ = oh[(pW + ai) % ae], h7[iJ] && iJ !== player) return k6.aCz.aIa(player, iJ, mW)
						}
					}
				}(player, mW, aIK, a2m)
			}(player, mW, aIK, a2m) : (!aIM || aIL && (aIL < aIM && !kJ.tM(10) || 100 * aIM <= aIL && kJ.tM(3) || !kJ.tM(8))) && h4.eQ.fA(player) || function(player, mW, aIK) {
				kD.a3x.aFF(player, !0) || kD.a3x.aFI(player, !0) ? kD.a3x.aFK(player) || (kD.a3x.aFJ() ? aIQ(player, mW) : kJ.aIS(wX.aIT[aIK]) ? aIU(player, mW, kD.a3x.aFN(player), aIK) : 5 === aIK ? aIU(player, mW, kD.a3x.aFV(), aIK) : (kD
					.a3x.aFL() && kJ.aIS(wX.aIV[aIK]) && kD.a3x.aFM(), aIU(player, mW, 6 === aIK ? kD.a3x.aFZ() : kD.a3x.aFQ(player), aIK))) : kD.aIW.fA(player)
			}(player, mW, aIK))
	}
}

function c1() {
	function aIp(nu, h5, h6) {
		var aIq = nu[h5];
		nu[h5] = nu[h6], nu[h6] = aIq
	}
	this.rs = [
		[],
		[],
		[],
		[]
	], this.rv = [0, 0, 0, 0], this.aIb = [], this.a9X = function(aIc, d8, username, a5y, gb, a6v, elo, color, cW, aId) {
		username = this.aIf(d8, username, a5y, gb, a6v, elo, color, cW, aId);
		this.rs[aIc].push(username), aY.bj === d8 && (aY.bk = username), aY.bp.a4Y(d8) && (username.a4a = 1), aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === aIc && 1 === aY.aZ.aa[2]
	}, this.aIf = function(d8, username, a5y, gb, a6v, elo, color, cW, aId) {
		return {
			d8: d8,
			username: username,
			a5y: a5y,
			gb: gb,
			a6v: a6v,
			elo: elo,
			color: color,
			cW: cW,
			aId: aId
		}
	}, this.a9e = function(a8, aIc, a5y, gb, a6v, elo, cW) {
		a8 = this.rs[aIc][a8];
		a8.a5y = a5y, a8.gb = gb, a8.a6v = a6v, a8.elo = elo, a8.cW = cW, aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === aIc && 1 === aY.aZ.aa[2]
	}, this.a9f = function(a8, aIc, aIh) {
		var a8 = this.rs[aIc][a8],
			aIi = a8.username,
			aIj = "Redacted " + cI.bx.t3(a8.d8, 2);
		a8.username = aIh ? "[" + aR.aS.a6t(aIi) + "] " + aIj : aIj, aIi.indexOf("Redacted") < 0 && (a8.aIk = aIi), aY.at.aIl(a8.d8), aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === aIc && 1 === aY.aZ.aa[2]
	}, this.a9c = function(a8, aIm, aIn) {
		var player = this.rs[aIm][a8];
		this.a9d(a8, aIm), this.rs[aIn].push(player), aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === aIn && 1 === aY.aZ.aa[2]
	}, this.a9d = function(a8, aIm) {
		var bl = this.rs[aIm];
		this.aIb.push(bl[a8]), 1e3 < this.aIb.length && this.aIb.shift(), a8 >= this.rv[aIm] ? bl[a8] = bl[bl.length - 1] : (this.rv[aIm]--, 2 === aIm ? (bl.splice(this.rv[aIm] + 1, 0, bl[bl.length - 1]), bl.splice(a8, 1)) : (bl[a8] = bl[this.rv[
			aIm]], bl[this.rv[aIm]] = bl[bl.length - 1])), bl.pop(), aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === aIm && 1 === aY.aZ.aa[2]
	}, this.a9b = function(a8, aX) {
		aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === aX && 1 === aY.aZ.aa[2];
		var bl = this.rs[aX],
			aq = bl[a8];
		if (2 === aX)
			if (a8 >= this.rv[aX]) {
				aY.bp.join(aq);
				for (var aIo = this.rv[aX], elo = aq.elo; aIo && elo > bl[aIo - 1].elo;) aIo--;
				bl[a8] = bl[this.rv[aX]], bl.splice(this.rv[aX]++, 1), bl.splice(aIo, 0, aq)
			} else bl.splice(this.rv[aX]--, 0, aq), bl.splice(a8, 1);
		else a8 >= this.rv[aX] ? (aY.bp.join(aq), aIp(bl, this.rv[aX]++, a8)) : aIp(bl, --this.rv[aX], a8)
	}, this.a6q = function(d8) {
		for (var rs = this.rs, ae = rs.length, ai = 0; ai < ae; ai++)
			for (var bl = rs[ai], kG = bl.length, gF = 0; gF < kG; gF++)
				if (d8 === bl[gF].d8) return bl[gF];
		return null
	}
}

function aIr() {
	this.az = new aCd, this.ie = new aIs, this.bc = new aIt, this.aS = new aIu, this.f4 = new aAG, this.aAg = new a0d, this.canvas = new aAb, this.color = new aDv, this.ne = new pr, this.q = function() {
		this.az.aCf()
	}
}

function eR() {
	this.fA = function(player) {
		return !!h4.eY.a3K(player) && !(h4.aZ.h7[player] >= Math.max(3 * kD.performance.kH, wX.aDR[wX.mW[player]]) || !aR.bc.a3s(player, wX.aDr[wX.mW[player]], 32, 0)) && (jF.aIv() ? function(player) {
			var aJ1 = h4.ak.aJ2(),
				ae = aJ1.length;
			if (0 === ae) return !1;
			aJ1 = aJ1[kJ.tM(ae)], ae = h4.aZ.hK[aJ1];
			if (h4.eh.aDU(player, ae)) return !1;
			return !! function(player, aBk) {
				var aBk = hQ.pM(h4.aZ.hH[aBk]),
					kR = hQ.j7(aBk),
					aBk = hQ.j8(aBk),
					g = fL.jI[player],
					j = fL.jJ[player],
					k = fL.jK[player],
					player = fL.jL[player],
					k = Math.max(kR - k, g - kR),
					g = Math.max(aBk - player, j - aBk);
				return k < 100 && g < 100
			}(player, aJ1) && !!h4.ef.a4C(player, ae, 1) && (aR.bc.a2x(player), h4.aZ.a4A(player), !0)
		}(player) : !!(kD.aIx.fA(player) || kD.aIy.fA(player) || kD.aIz.fA(player)) && (function(player) {
			oi.yl[1] = 4, aR.bc.a2x(player), h4.aZ.a4A(player)
		}(player), !0))
	}
}

function eg() {
	function aJ7(player, aDi) {
		aDi = hQ.pM(h4.aZ.hH[aDi]), aDi = x.a3Q(hQ.kW(aDi));
		return !!h4.ak.a3R(player, aDi)
	}

	function aJ5(player) {
		return h4.eY.a3K(player) && !h4.ec.tS()
	}
	this.yL = function(player, j4) {
		return !!aJ5(player) && -1 !== (j4 = function(player, j4) {
			for (var ae = h4.aZ.hB, hH = h4.aZ.hH, hD = h4.aZ.hD, aJL = hQ.a3M(), o9 = -1, ai = 0; ai < ae; ai++) {
				var kM = hQ.a6E(j4, hQ.pM(hH[ai]));
				kM < aJL && aR.bc.aDn(player, hD[ai] >> 3) && (aJL = kM, o9 = ai)
			}
			return o9
		}(player, j4)) && !!aJ7(player, j4) && (oi.yl[3] = h4.aZ.hK[j4], !0)
	}, this.aJ8 = function(player, pJ) {
		return !!aJ5(player) && !!h4.ak.aDW(pJ) && !!aJ7(player, oi.yl[2])
	}, this.a4C = function(player, pJ, aJ9) {
		return !! function(player, pJ, aJ9) {
			if (aJ5(player) && h4.ak.aDW(pJ)) {
				pJ = oi.yl[2];
				if (aR.bc.aDn(player, h4.aZ.hD[pJ] >> 3)) {
					if (function(player, aDi) {
							return h4.ak.aJK(player, aDi) && (oi.nu[0] = h4.ec.tU(h4.aZ.hN[aDi]), oi.yl[1] = 6, !0)
						}(player, pJ)) return 1;
					var aJ4 = hQ.pM(h4.aZ.hH[pJ]),
						aJD = h4.ak.aJE(player, aJ4);
					if (-1 !== aJD) {
						aJD = hQ.a6E(aJD, aJ4);
						if (!(aJ9 && 120 < aJD)) {
							aJ9 = function(aDi, aJF, aJ4) {
								var tJ = h4.aZ.hN[aDi],
									aDi = h4.aZ.hO[aDi],
									aJH = hQ.a6E(aJ4, tJ[aDi + 1]);
								if (aJF <= aJH) return h4.ak.aJI(aJ4, tJ[aDi + 1], aJH, aJF);
								for (var kM = aJF - aJH, ae = tJ.length - 1, ai = aDi + 1; ai < ae; ai++) {
									var aJJ = hQ.a6E(tJ[ai], tJ[ai + 1]);
									if (kM <= aJJ) return h4.ak.aJI(tJ[ai], tJ[ai + 1], aJJ, kM);
									kM -= aJJ
								}
								return tJ[ae]
							}(pJ, aJD, aJ4);
							if (h4.eS.a47(player, aJ9, 1)) return oi.yl[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, pJ, aJ9) && (player = oi.yl[2], h4.aZ.hL[player] = 64 + h4.aZ.hL[player] % 64, h4.eh.fJ(pJ, h4.aZ.aDs), !0)
	}
}

function aIu() {
	var aJM = {
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
		aJN = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.aT = function(oz) {
		return oz.replace(aJN, function(match) {
			return aJM[match] || match
		})
	}, this.t3 = function(er) {
		var ai, aEe, aJO, aJP, aJQ;
		if (er < 0) return "-" + this.t3(Math.abs(er));
		if (er < 1e3) return er.toString();
		for (aEe = Math.floor(Math.log(er + .5) / Math.log(10)) + 1, aJO = Math.floor((aEe - 1) / 3), aJQ = (aJP = er.toString()).substring(aEe - 3, aEe), ai = 1; ai < aJO; ai++) aJQ = aJP.substring(aEe - 3 * (ai + 1), aEe - 3 * ai) + " " + aJQ;
		return aJP.substring(0, aEe - 3 * aJO) + " " + aJQ
	}, this.aAq = function(o4, aEe) {
		return o4.toFixed(aEe) + "%"
	}, this.aJR = function(er, aJS) {
		return er.toFixed(je.jf(Math.floor((void 0 === aJS ? 3 : aJS) - Math.log10(Math.max(er, 1))), 0, 8))
	}, this.aI0 = function(er, du, aEe) {
		return (er * du).toFixed(aEe)
	}, this.a6t = function(username) {
		var aG6, yq = username.indexOf("[");
		return !(yq < 0) && 1 < (aG6 = username.indexOf("]")) - yq && aG6 - yq <= 8 ? username.substring(yq + 1, aG6).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a6t;
	this.aJT = function(en) {
		for (var gF = Math.floor(.5 * en.length + .5), dj = Math.floor(.5 * (gF - 1)), ai = 0; ai < dj; ai++)
			for (var pW = -1; pW < 2; pW += 2) {
				var iJ = gF + pW * ai;
				if (" " === en[iJ]) return [this.aJU(en.substring(0, iJ)), this.aJV(en.substring(iJ))]
			}
		return [en.substring(0, gF), en.substring(gF)]
	}, this.aJV = function(en) {
		for (var ae = en.length, ai = 0; ai < ae; ai++)
			if (" " !== en[ai]) return en.substring(ai);
		return en
	}, this.aJU = function(en) {
		for (var ai = en.length - 1; 0 <= ai; ai--)
			if (" " !== en[ai]) return en.substring(0, ai + 1);
		return en
	}, this.aJW = function(en, aAj) {
		return en.split("(")[0] + "(🧈 " + aAj.toFixed(2) + ")"
	}, this.startsWith = function(en, aJX) {
		return en.substring(0, aJX.length) === aJX
	}, this.rb = function(en, aJX) {
		var ae = en.length;
		return en.substring(ae - aJX.length, ae) === aJX
	}, this.iw = function(nu, aJY, aJZ) {
		var en = "",
			ae = nu.length - 1;
		aJZ = aJZ || "";
		for (var ai = 0; ai < ae; ai++) en += aJZ + nu[ai] + aJZ + ",", (ai + 1) % aJY == 0 && (en += "\n");
		return en += aJZ + nu[ae] + aJZ
	}, this.aAY = function(en, a8s, a8t) {
		return en.replace(new RegExp(a8s, "g"), a8t)
	}
}

function aJa() {
	var aJb, aJc;

	function aJg() {
		(aJb = new WebSocket("wss://territorial.io/s52/")).onopen = aJi, aJb.onclose = function() {
			aJj()
		}
	}

	function aJi() {
		if (aJb && aJb.readyState === aJb.OPEN) {
			var b4 = new aJl;
			b4.ha(1608), b4.et(1, 0), b4.et(6, 7), b4.et(2, bA ? bA.id : 3), b4.et(1, hd.lk ? 1 : 0), b4.et(1, hd.ll ? 1 : 0), b4.et(1, hd ? hd.qc : 0);
			for (var ai = 0; ai < aJc.length && ai < 228; ai++) b4.et(7, aJc.charCodeAt(ai) % 128);
			aJb.send(b4.hl), aJj()
		}
	}

	function aJj() {
		aJb && (aJb.onclose = null, aJb.onopen = null, aJb = null)
	}
	window.addEventListener("error", function aJd(aH) {
		aJc = "";
		try {
			return window.removeEventListener("error", aJd), aJc = aH.lineno + " " + aH.colno + "|" + function(aH) {
				if (!aH.error) return "NoStack";
				var stack = aH.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, aJk = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = aJk.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(aH), __fx.reportError(aH, aJc), alert("Error:\n" + aH.filename + " " + aH.lineno + " " + aH.colno + " " + aH.message)
		} catch (aH) {
			aJc = "SE|" + aJc + "|" + aH, console.log(aJc), alert(aJc)
		}
		aJg()
	})
}

function aJm() {
	this.b4 = 0, this.b9 = 0, this.mL = 0, this.mM = 0, this.aJn = 0, this.aJo = 0, this.mN = 0, this.aHD = 0;
	var aJq = this.aJp = 0;
	this.aJr = 0, this.aJs = 0, this.aJt = 0, this.f2 = 0, this.a8 = 0, this.mB = null, this.mO = !1, this.aJu = -1, this.aJv = !1, this.aJw = [0, 0], this.aBM = function() {
		this.mB = [L(377), L(378, 0, "Balance"), L(379, 0, "Interest"), L(380)]
	}, this.q = function() {
		this.mO = !1, this.aJu = -1, this.aJv = !1, this.resize()
	}, this.resize = function() {
		this.b4 = b3.b4 < 1.369 * b3.b9 ? b3.b4 : 1.369 * b3.b9;
		var iP = bA.bB.bC() && b3.b4 < b3.b9 ? 1 : bA.bB.bC() ? .8 : b3.b4 < b3.b9 ? .65 : .59;
		this.b4 = Math.floor(iP * this.b4), this.b4 -= bA.bB.bC() && b3.b4 < b3.b9 ? 2 * dH.gap + 2 : 0, this.b9 = Math.floor(this.b4 / 1.369), this.f2 = Math.floor(this.b9 / 150), this.f2 = Math.max(this.f2, 1.5), this.mL = Math.floor(1 + .02 *
			this.b4), this.mM = Math.floor(1 + .04 * this.b4), this.mN = this.mM, aJq = Math.floor(.75 * this.mN), this.aHD = Math.floor(1 + .075 * this.b4), this.aJr = Math.floor(1 + .1125 * this.b4), this.aJs = Math.floor(this.b4 * (bA.bB
			.bC() ? .03 : .029)), this.aJs = Math.max(this.aJs, 4), this.aJt = Math.floor(.035 * this.b4), this.aJt = Math.max(this.aJt, 4), this.aJp = this.b9 - 2 * this.mN - this.aHD - this.aJr, this.mO && this.aJx()
	}, this.df = function(ds, dt) {
		var zA, z9;
		return !!this.mO && (z9 = ds, zA = dt, ds -= je.kI(b3.b4 - this.b4, 2), dt -= je.kI(b3.b9 - this.b9, 2), ds < 0 || dt < 0 || ds >= this.b4 || dt >= this.b9 || ds >= this.b4 - this.aJr && dt < this.aJr ? -1 !== vs.df(z9, zA) || zr.df(z9,
			zA) || this.aw() : dt < this.aJr || (dt < this.b9 - this.aHD ? (this.aJv = !0, this.aJu = (ds - 2 * this.mL - this.aJn) / this.aJo, 3 !== this.a8 && (bu.dw = !0)) : (z9 = (z9 = Math.floor(ds / (this.b4 / this.mB.length))) <
			0 ? 0 : z9 >= this.mB.length ? this.mB.length - 1 : z9) !== this.a8 && (this.a8 = z9, this.aJx(), bu.dw = !0)), !0)
	}, this.dk = function(ds, dt) {
		return this.aJw[0] = ds, this.aJw[1] = dt, !(!this.mO || !this.aJv || (ds -= je.kI(b3.b4 - this.b4, 2), dt = this.aJu, this.aJu = (ds - 2 * this.mL - this.aJn) / this.aJo, (0 <= this.aJu && this.aJu <= 1 || 0 <= dt && dt <= 1) && (bu
			.dw = !0), 0))
	}, this.gz = function() {
		this.aJv && (this.aJv = !1)
	}, this.xG = function() {
		this.mO ? this.aw() : this.show()
	}, this.show = function() {
		jB.aFg < 2 || (this.mO = !0, this.aJx())
	}, this.aw = function() {
		this.mO = !1, this.aJu = -1, bu.dw = !0
	}, this.aJx = function() {
		this.a8 < 2 ? this.aJn = fD.measureText(aR.aS.t3(jB.max[this.a8]), aR.az.f8(0, this.aJs)) : 2 === this.a8 && (this.aJn = fD.measureText(aR.aS.aAq(6, 2), aR.az.f8(0, this.aJs))), this.aJo = this.b4 - 2 * this.mL - this.aJn - this.mM
	}, this.aW = function() {
		this.mO && this.aJx()
	}, this.eC = function() {
		this.mO && this.xL()
	}, this.xL = function() {
		var r = je.kI(b3.b4 - this.b4, 2),
			s = je.kI(b3.b9 - this.b9, 2);
		eD.setTransform(1, 0, 0, 1, r, s), eD.fillStyle = aJ.bg, eD.fillRect(0, this.aJr, this.b4, this.b9 - this.aJr), this.aJy(), this.aJz(), eD.strokeRect(0, 0, this.b4, this.b9), aR.az.textAlign(eD, 2), eD.font = aR.az.f8(0, this.aJs), 0 ===
			this.a8 ? this.aK0(jB.aGa, r, s) : 1 === this.a8 ? this.aK0(jB.a2z, r, s) : 2 === this.a8 ? this.aK1(r, s) : 3 === this.a8 && (this.aK2(r, s), this.aK3(r, s)), vs.o2(Math.floor(r + this.b4 - .725 * this.aJr), Math.floor(s + .275 *
				this.aJr), Math.floor(.45 * this.aJr)), eD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aJy = function() {
		var ai, gj;
		for (eD.lineWidth = this.f2, aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 1), eD.strokeStyle = aJ.eA, eD.font = aR.az.f8(1, this.aJt), gj = this.b4 / this.mB.length, eD.fillStyle = aJ.a1O, eD.fillRect(this.a8 * gj, this.b9 - this.aHD,
				gj, this.aHD), eD.fillStyle = aJ.eA, eD.fillRect(0, this.b9 - this.aHD - .5 * this.f2, this.b4, this.f2), ai = 1; ai <= 3; ai++) eD.fillRect(ai * gj, this.b9 - this.aHD, this.f2, this.aHD);
		for (ai = this.mB.length - 1; 0 <= ai; ai--) eD.fillText(aR.f4.g8(this.mB[ai], 0, .9 * gj), (ai + .5) * gj, this.b9 - .46 * this.aHD)
	}, this.aJz = function() {
		eD.fillStyle = aJ.a1i, eD.fillRect(0, 0, this.b4, this.aJr), eD.fillStyle = aJ.eA, eD.fillRect(0, this.aJr - .5 * this.f2, this.b4, this.f2), eD.font = aR.az.f8(1, .39 * this.aJr), eD.fillText(aR.f4.g8(L(381), 0, .8 * this.b4), Math
			.floor(this.b4 / 2), Math.floor(.55 * this.aJr))
	}, this.aK0 = function(nu, r, s) {
		var kG = jB.max[this.a8],
			e6 = (eD.setTransform(1, 0, 0, 1, r + 2 * this.mL + this.aJn, s + this.mN + this.aJr), eD.lineWidth = 2, this.aJp / Math.sqrt(kG));
		eD.beginPath(), eD.moveTo(this.aJo, this.aJp - e6 * Math.sqrt(nu[jB.aFg - 1]));
		for (var ai = jB.aFg - 2; 0 <= ai; ai--) eD.lineTo(ai * this.aJo / (jB.aFg - 1), this.aJp - e6 * Math.sqrt(nu[ai]));
		eD.stroke();
		r = this.o2(nu, e6, .5);
		r < .95 && eD.fillText(aR.aS.t3(kG), -this.mL, 0), .05 < Math.abs(r - .5) && eD.fillText(aR.aS.t3(Math.floor(kG / 4)), -this.mL, Math.floor(this.aJp / 2)), .05 < r && eD.fillText("0", -this.mL, this.aJp)
	}, this.aK1 = function(r, s) {
		eD.setTransform(1, 0, 0, 1, r + 2 * this.mL + this.aJn, s + this.mN + this.aJr), eD.lineWidth = 2;
		var e6 = this.aJp / Math.max(jB.max[this.a8], 1);
		eD.beginPath(), eD.moveTo(this.aJo, this.aJp - e6 * jB.aGb[jB.aFg - 1]);
		for (var ai = jB.aFg - 2; 0 <= ai; ai--) eD.lineTo(ai * this.aJo / (jB.aFg - 1), this.aJp - e6 * jB.aGb[ai]);
		eD.stroke();
		r = this.o2(jB.aGb, e6, 1), s = jB.max[this.a8] / 100;
		r < .95 && eD.fillText(aR.aS.aAq(s, 2), -this.mL, 0), .05 < Math.abs(r - .5) && eD.fillText(aR.aS.aAq(s / 2, 2), -this.mL, Math.floor(this.aJp / 2)), .05 < r && eD.fillText(aR.aS.aAq(0, 2), -this.mL, this.aJp)
	}, this.aK2 = function(r, s) {
		eD.setTransform(1, 0, 0, 1, r + .34 * this.b4, s + 2 * aJq + this.aJr), aR.az.textAlign(eD, 2);
		for (var gX = this.b9 - 4 * aJq - this.aHD - this.aJr, nu = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], ai = 9; 0 <= ai; ai--) eD.fillText(aR.f4.g8(jB.aGf[nu[ai]], 0, .31 * this.b4), 0, ai * gX / 9);
		var er = jB.jC;
		for (eD.setTransform(1, 0, 0, 1, r + .39 * this.b4, s + 2 * aJq + this.aJr), aR.az.textAlign(eD, 0), eD.fillText(aR.aS.aAq(100 * er[0] / (1024 * Math.max(er[1], 1)), 1), 0, 0), ai = 8; 1 <= ai; ai--) eD.fillText(er[nu[ai]].toString(), 0,
			ai * gX / 9);
		eD.fillText(aR.aS.aAq(100 * (1 - fL.ge[bK.bL] / er[7]), 0), 0, gX)
	}, this.aK3 = function(r, s) {
		eD.setTransform(1, 0, 0, 1, r + .79 * this.b4, s + 2 * aJq + this.aJr), aR.az.textAlign(eD, 2);
		var ai, gX = this.b9 - 4 * aJq - this.aHD - this.aJr;
		for (eD.fillStyle = aJ.a1J, ai = 2; 0 <= ai; ai--) eD.fillText(aR.f4.g8(jB.aGf[ai + 8], 0, .31 * this.b4), 0, ai * gX / 9);
		eD.fillText(aR.f4.g8(jB.aGf[18], 0, .31 * this.b4), 0, 3 * gX / 9), eD.fillStyle = aJ.a1I, eD.fillText(aR.f4.g8(jB.aGf[11], 0, .31 * this.b4), 0, 4 * gX / 9), eD.fillStyle = aJ.a1Y, eD.fillText(aR.f4.g8(jB.aGf[13], 0, .31 * this.b4), 0,
				5 * gX / 9), eD.fillText(aR.f4.g8(jB.aGf[15], 0, .31 * this.b4), 0, 6 * gX / 9), eD.fillText(aR.f4.g8(jB.aGf[16], 0, .31 * this.b4), 0, 7 * gX / 9), eD.fillText(aR.f4.g8(jB.aGf[12], 0, .31 * this.b4), 0, 8 * gX / 9), eD
			.fillStyle = aJ.a1X, eD.fillText(aR.f4.g8(jB.aGf[17], 0, .31 * this.b4), 0, gX), eD.fillStyle = aJ.a1J;
		var er = jB.jC,
			aEh = er[8] + er[9] + er[10] + er[18],
			aEh = aR.aS.t3(aEh),
			oG = eD.measureText(aEh).width,
			r = (eD.setTransform(1, 0, 0, 1, r + .83 * this.b4 + oG, s + 2 * aJq + this.aJr), eD.fillText(aR.aS.t3(er[8]), 0, 0), eD.fillText(aR.aS.t3(er[9]), 0, gX / 9), eD.fillText(aR.aS.t3(er[10]), 0, 2 * gX / 9), eD.fillText(aR.aS.t3(er[18]),
				0, 3 * gX / 9), eD.fillStyle = aJ.a1I, eD.fillText(aEh, 0, 4 * gX / 9), eD.fillStyle = aJ.a1Y, eD.fillText(aR.aS.t3(er[13]), 0, 5 * gX / 9), eD.fillText(aR.aS.t3(er[15]), 0, 6 * gX / 9), eD.fillText(aR.aS.t3(er[16]), 0, 7 *
				gX / 9), eD.fillText(aR.aS.t3(er[12]), 0, 8 * gX / 9), er[12] + er[13] + er[15] + er[16]);
		eD.fillStyle = aJ.a1X, eD.fillText(aR.aS.t3(r), 0, gX), eD.fillStyle = aJ.eA
	}, this.o2 = function(nu, e6, sc) {
		var ai, aH, sG;
		return this.aJu < 0 || 1 < this.aJu ? .25 : (ai = this.aJu * (jB.aFg - 1), sG = nu[aH = Math.floor(ai)], sG += (ai - aH) * (nu[aH < jB.aFg - 1 ? aH + 1 : aH] - sG), eD.strokeStyle = aJ.su, .04 < this.aJu && this.aK6(0, this.aJp - e6 *
				Math.pow(sG, sc), ai * this.aJo / (jB.aFg - 1), this.aJp - e6 * Math.pow(sG, sc)), .04 < sG / jB.max[this.a8] && this.aK6(ai * this.aJo / (jB.aFg - 1), this.aJp, ai * this.aJo / (jB.aFg - 1), this.aJp - e6 * Math.pow(sG, sc)),
			eD.fillStyle = aJ.a1Z, eD.beginPath(), eD.arc(ai * this.aJo / (jB.aFg - 1), this.aJp - e6 * Math.pow(sG, sc), Math.max(2, .014 * this.b9), 0, 2 * Math.PI), eD.fill(), nu = this.aJu * bu.vr, nu = 0 === fL.gl[bK.bL] ? Math.floor(
				nu * jB.aGe) : Math.floor(nu * bu.gE()), eD.fillStyle = aJ.eA, eD.fillText(1 === sc ? aR.aS.aAq(sG / 100, 2) : aR.aS.t3(Math.floor(sG)), -this.mL, this.aJp - e6 * Math.pow(sG, sc)), aR.az.textAlign(eD, 1), eD.fillText(jF.aK7(
				nu), ai * this.aJo / (jB.aFg - 1), this.aJp + this.aJs - (bA.bB.bC() ? 2 : 0) - this.f2), aR.az.textAlign(eD, 2), e6 * Math.pow(sG, sc) / this.aJp)
	}, this.aK6 = function(g, j, k, l) {
		eD.beginPath(), eD.moveTo(g, j), eD.lineTo(k, l), eD.stroke()
	}
}

function eI() {
	var aK8, aK9 = 8,
		aKA = null;

	function aKF(wQ, j4, a8) {
		j4 *= 4;
		wQ[j4] = 255, wQ[1 + j4] = 255, wQ[2 + j4] = a8, wQ[3 + j4] = 255
	}

	function aKH(uH, a9z) {
		var r, s, dn, j4, aKJ, aKK, wK = aK9,
			wP = aR.az.getImageData(uH, wK, wK),
			wQ = wP.data,
			kG = (wK >> 1) - .5,
			aKM = aR.ie.aKN(a9z, .5);
		for (aR.ie.aKO(a9z, aKM, 300) || aR.ie.aKP(a9z, 100), s = 0; s < wK; s++)
			for (r = 0; r < wK; r++) aKK = (wK - 1.5) * (wK - 1.5) / 4, wQ[j4 = 4 * (s * wK + r)] = (aKJ = (dn = (dn = r - kG) * dn + (dn = s - kG) * dn) <= (wK - 4.5) * (wK - 4.5) / 4 ? aKM : a9z)[0], wQ[1 + j4] = aKJ[1], wQ[2 + j4] = aKJ[2], wQ[3 +
				j4] = aKK < dn ? 0 : 255;
		uH.putImageData(wP, 0, 0)
	}
	this.q = function() {
		var a8, wK, mD, uH, wP, wQ;
		(aK8 = aK8 || new Array(bK.g6)).fill(null), a8 = 255, wK = aK9 + 4, mD = aR.az.wJ(wK, wK), uH = aR.az.getContext(mD, !0), wP = aR.az.getImageData(uH, wK, wK), aKF(wQ = wP.data, wK + 1, a8), aKF(wQ, wK + 2, a8), aKF(wQ, 2 * wK + 1, a8),
			aKF(wQ, 2 * wK - 3, a8), aKF(wQ, 2 * wK - 2, a8), aKF(wQ, 3 * wK - 2, a8), aKF(wQ, wK * (wK - 3) + 1, a8), aKF(wQ, wK * (wK - 2) + 1, a8), aKF(wQ, wK * (wK - 2) + 2, a8), aKF(wQ, wK * (wK - 2) - 2, a8), aKF(wQ, wK * (wK - 1) - 3, a8),
			aKF(wQ, wK * (wK - 1) - 2, a8), uH.putImageData(wP, 0, 0), aKA = mD,
			function() {
				if (bK.fR)
					for (var mD = new Array(gT.oZ.length), ae = bK.g6, aKD = aK8, gV = gT.gV, ai = 0; ai < ae; ai++) {
						var yD = gV[ai];
						mD[yD] || (mD[yD] = function(yD) {
							var mD = aR.az.wJ(aK9, aK9),
								uH = aR.az.getContext(mD, !0),
								nu = oi.aDz;
							return nu.set(gT.aBI[yD]), aKH(uH, nu), mD
						}(yD)), aKD[ai] = mD[yD]
					}
			}()
	}, this.eC = function() {
		var ai, player, aKQ, aB9, mW, a69, aKS, aKU, aKV, hH = h4.aZ.hH,
			hD = h4.aZ.hD,
			hJ = h4.aZ.hJ,
			hM = h4.aZ.hM,
			aKW = aK8,
			aKX = bK.bL,
			ae = h4.aZ.hB,
			aKY = b3.b4,
			aKZ = b3.b9,
			aKa = t.u << 4,
			yq = dJ,
			dx = yq / aK9,
			g = dK / yq,
			j = dL / yq,
			dn = (aKY + dK) / yq - g,
			dp = (aKZ + dL) / yq - j,
			uH = eD;
		for (uH.imageSmoothingEnabled = yq < 9, aR.az.textAlign(uH, 1), aR.az.textBaseline(uH, 1), ai = 0; ai < ae; ai++) player = hD[ai] >> 3, mW = hJ[ai], aKQ = .9 + .1 * Math.log10(mW), aB9 = (a69 = hH[ai]) % aKa / 16 - aKQ, a69 = aKZ * (Math
			.floor(a69 / aKa) / 16 - aKQ - j) / dp, aKS = -2 * (aKV = yq * aKQ) * (1 + (aKU = +(player === aKX)) / 8), aKU = aKU * aKV / 4, (aKV = aKY * (aB9 - g) / dn) < aKS || a69 < aKS || aKY + aKU < aKV || aKZ + aKU < a69 || (aB9 = 2 *
			aKQ * dx, aKS = aKQ * yq, null === (aKU = aKW[player]) && (aKW[player] = aKU = function(player) {
				var mD = aR.az.wJ(aK9, aK9);
				return aKH(aR.az.getContext(mD, !0), x.aKI(player)), mD
			}(player)), player === aKX && (uH.setTransform(aB9, 0, 0, aB9, aKV - 2 * aB9, a69 - 2 * aB9), uH.drawImage(aKA, 0, 0)), uH.setTransform(aB9, 0, 0, aB9, aKV, a69), uH.drawImage(aKU, 0, 0), (aKQ = Math.floor(function(mW) {
				if (mW < 1e3) return .42;
				if (mW < 1e4) return .34;
				if (mW < 1e6) return .26;
				if (mW < 1e8) return .19;
				return .15
			}(mW) * aKS)) < 6) || (uH.setTransform(1, 0, 0, 1, 0, 0), uH.fillStyle = hM[ai] ? aJ.a1X : aJ.eA, uH.font = aR.az.f8(1, aKQ), uH.fillText(aR.aS.t3(mW), aKV + aKS, a69 + aKS + .1 * aKQ));
		uH.imageSmoothingEnabled = !1, uH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function eZ() {
	this.a3K = function(player) {
		return !!bK.data.passableWater && h4.aZ.hB !== h4.aZ.aDR && h4.aZ.h7[player] !== h4.aZ.aKd && 0 !== fL.kj[player].length
	}, this.a46 = function(a3J) {
		var eO = oi.yl[1];
		return !(4 <= eO || !h4.ak.a3h(hQ.kW(a3J))) && x.z3(hQ.kW(hQ.a3l(a3J, eO)))
	}
}

function aKe() {
	var nD = 0;
	this.q = function() {
		tv.q(), nD = 0
	}, this.setState = function(aKf) {
		nD = aKf
	}, this.mP = function() {
		return nD
	}, this.aKg = function() {
		this.setState(8), ax.rW()
	}, this.ix = function(aH) {
		if (!t.aKh) return !1;
		if (!(bu.bv < 400)) {
			if ("Enter" === aH.key || "Escape" === aH.key) {
				if (this.aKi()) return !0;
				if ("Enter" === aH.key) {
					if (0 === nD) return !0;
					if (7 === nD) return !0
				}
			}
			return !1
		}
	}, this.aH8 = function() {
		aKj.resize()
	}, this.aKi = function() {
		return !!aKj.aw()
	}, this.df = function(r, s) {
		!t.aKh || aKj.df(r, s) || 6 === nD && a0E.df(r, s) || aGW.df(r, s) || ss.df(r, s)
	}, this.dk = function(r, s) {
		!ss.sh && tv.dk(r, s, !0) || ss.dk(r, s)
	}, this.click = function(r, s) {
		ss.gz()
	}, this.dh = function(r, s, deltaY) {}, this.aH9 = function() {
		tv.sp(), bu.dw = !0
	}, this.eC = function() {
		8 !== nD && 10 !== nD && (eD.imageSmoothingEnabled = !0, this.or(), 0 !== nD && (ss.eC(), aCB.eC(), this.aKk(), aGW.eC()), 0 !== nD && 6 === nD && a0E.eC(), aKj.eC(), ax.eC())
	}, this.or = function() {
		var aKm, aKl;
		if (__fx.makeMainMenuTransparent) eD.clearRect(0, 0, b3.b4, b3.b9);
		else t.aKh ? (aKl = b3.b4 / t.u, aKm = b3.b9 / t.v, eD.setTransform(aKl = aKm < aKl ? aKl : aKm, 0, 0, aKl, Math.floor((b3.b4 - aKl * t.u) / 2), Math.floor((b3.b9 - aKl * t.v) / 2)), eD.drawImage(t.a16, 0, 0), eD.setTransform(1, 0, 0, 1,
			0, 0), eD.fillStyle = aJ.aL) : eD.fillStyle = aJ.fY, eD.fillRect(0, 0, b3.b4, b3.b9)
	}, this.aKk = function() {
		var s = Math.floor(.3 * b3.b9),
			canvas = gZ.aGL("territorial.io"),
			a8l = (a8l = 1.75 * b3.b9 / canvas.width) * canvas.width < .98 * b3.b4 ? .98 * b3.b4 / canvas.width : a8l,
			r = (eD.globalAlpha = .15, eD.imageSmoothingEnabled = !1, Math.floor(.5 * (b3.b4 - a8l * canvas.width))),
			r = Math.floor(r / a8l),
			s = Math.floor(s - .5 * canvas.height * a8l),
			s = Math.floor(s / a8l);
		eD.setTransform(a8l, 0, 0, a8l, r, s), eD.drawImage(canvas, r, s), eD.setTransform(1, 0, 0, 1, 0, 0), eD.globalAlpha = 1, eD.imageSmoothingEnabled = !0
	}
}

function aKv(au) {
	hd && !au || (aGw(), je = new aB1, mF = new aKx, aR = new aIr, aJ = new a17, bK = new aKy, ln = new aC1, cI = new aER, bw = new a3F, wX = new aKz, a4S = new vz, aE7 = new aL0, di = new p0, j5 = new aL1, aKn = new a4d, aKo = new aHE, jS = new xo,
		vs = new a6R, bI = new aL2, aCB = new aL3, zt = new aL4, fD = new eu, fV = new aAh, e7 = new dM, ss = new sS, aEA = new aL5, zw = new fb, jF = new aL6, jN = new uR, tv = new aL7, a0E = new tV, cB = new aKe, gZ = new aGH, x = new aL8,
		aGG = new aL9, my = new aGA, yK = new a5j, yn = new a7K, ks = new mS, a2n = new a2d, aKp = new aAw, dq = new a7V, fL = new aLA, aKq = new wl, wU = new aLB, y7 = new aLC, aFw = new aLD, a2G = new aLE, pR = new a7M, bM = new aBp, kJ =
		new aLF, kD = new aLG, aKr = new a9w, zq = new aAI, jM = new aLH, b3 = new aGx, zu = new aLI, aEB = new aLJ, yV = new aLK, aKs = new aLL, aKt = new aLM, aE8 = new aLN, yJ = new pf, u7 = new u3, k6 = new aCv, zK = new aLO, zr = new x0,
		cN = new aJl, hp = new aGm, cM = new aAP, uw = new us, gr = new zR, hQ = new a61, h4 = new eE, oi = new aLP, jQ = new aDt, a4M = new aLQ, jy = new aLR, t = new aLS, zy = new aLT, ax = new aLU, vA = new lL, bA = new aLV, hd = new qW, hb =
		new wY, bz = new aLW, gT = new aBE, fT = new oP, h = new pv, jU = new a, yS = new aLX, aH7 = new hr, jB = new aGY, zs = new aJm, bu = new aLY, x9 = new a9U, dH = new aLZ, ts = new aLa, a49 = new m6, aKu = new aLb, aY = new bi, cA =
		new aLc, a2r = new aLd, yf = new aLe, kf = new aLf, hd.q(), bA.q(), b3.aBM(), bz.q(), ln.q(), ln.aCA(), (sN = new sI).q(), aR.q(), yS.q(), bM.q(), cI.q(), bw.q(), t.q(), ax.q(), aGW = new m9, b3.q(), bA.bB.nG(), bu.q(), dH.q(), aH7.q(),
		aKj = new aLh, kJ.q(), a2n.a2g(), vA.q(), aFw.q(), cB.q(), ss.q(), aKq.q(), gr.q(), gZ.q(), bu.dw = !0, setTimeout(function() {
			t.ha(2, 14071)
		}, 0), ax.gu(5, 5), uw.ut() || bA.bB.nI(), b3.aH5(), hd.qc = 1)
}

function aLi() {
	var iR, aD = !0;

	function aj(ah, aLl) {
		var v1 = document.createElement("div"),
			aLm = document.createElement("span"),
			aLn = document.createElement("span");
		aLm.textContent = jF.aK7(aLl.bv) + ":", aLm.style.color = aJ.a1H, aLm.style.paddingRight = "0.4em", aLm.style.display = "table-cell", aLm.style.width = "6ch", aLm.style.textAlign = "end", v1.appendChild(aLm), aLn.textContent = aLl.en, v1
			.appendChild(aLn), v1.style.display = "table", aLl.bH && function(v1, bH) {
				{
					var uE;
					bH >= 1024 - y7.at.a8i ? ((uE = document.createElement("img")).src = y7.wQ.a8h[bH - 1024 + y7.at.a8i].toDataURL(), uE.style.width = "1.5em", uE.style.height = "1.5em", uE.style.verticalAlign = "middle", v1.appendChild(uE)) : ((
						uE = document.createElement("span")).textContent = y7.at.a8j(bH), uE.style.display = "inline-block", uE.style.fontSize = "1.5em", uE.style.lineHeight = "1em", uE.style.verticalAlign = "middle", v1.appendChild(uE))
				}
			}(v1, aLl.bH), ah.appendChild(v1)
	}

	function an() {
		aD && (iR.iX.scrollTop = iR.iX.scrollHeight)
	}
	this.clear = function() {
		iR.iX.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var ev = a2r.aLk(), ae = ev.length, ah = document.createDocumentFragment(), ai = 0; ai < ae; ai++) aj(ah, ev[ai]);
		iR.iX.appendChild(ah), an(), iR.show(), this.resize(), aD = !0, an()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iR.iX.style.padding = "0.4em " + aR.az.b8(dH.aBo)
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, this.be = function(aLl) {
		var ah = document.createDocumentFragment();
		aj(ah, aLl), iR.iX.appendChild(ah), an()
	}, (iR = new iU(L(224), [new aM("⬅️ " + L(10), function() {
		ax.va(1)
	})])).iX.style.overflowY = "auto", iR.iX.addEventListener("scroll", function() {
		aD = iR.iX.scrollTop >= iR.iX.scrollHeight - iR.iX.clientHeight - 2
	})
}

function aLp() {
	var lq, lr, ii, hW;

	function aLq() {
		ln.aC4 !== bz.c0.data[12].value ? (ln.q(), ax.gu(8, 1, new lz(30))) : ax.gu(1)
	}
	this.show = function() {
			lq.show(), this.resize()
		}, this.aw = function() {
			lq.aw()
		}, this.resize = function() {
			lq.resize(), lr.resize()
		}, this.ix = function(iJ) {
			2 === iJ && lq.iy[0].iB()
		}, lq = new iU(L(217), [new aM("⬅️ " + L(10), aLq), new aM(L(382), function() {
			ax.rW(), bz.cG.n3(), ax.gu(2)
		})]), ii = [], (hW = new il).im(L(383)), hW.m5(L(384)), ii.push(hW),
		function(ii) {
			var hW = new il,
				nu = (hW.im(L(407)), ln.data.aLv());
			hW.io(new ip({
				iq: nu,
				value: ln.data.aLw(nu)
			}, function(a8) {
				return bz.cG.cH(12, nu[a8].split(":")[0]), !0
			})), ii.push(hW)
		}(ii),
		function(ii) {
			var hW = new il,
				aLt = (hW.im(L(405)), []);
			hW.ir(new m4([new aM(L(406), function(aH) {
				sN.sR();
				for (var ai = 0; ai < aLt.length; ai++) aLt[ai].aH.value = sN.sL[ai];
				return aR.az.aCt(aH), !0
			}).button]));
			for (var ai = 0; ai < sN.sJ.length; ai++) {
				hW.m5(sN.sJ[ai]);
				for (var gF = 0; gF < 2; gF++) {
					var a8 = 2 * ai + gF,
						a6 = new a7({
							value: sN.sL[a8],
							a8: -1
						});
					a6.aH.aLu = a8, aLt.push(a6), a6.aH.addEventListener("keydown", function(aH) {
						aH.preventDefault();
						var code = aH.code;
						aH.target.value = code, sN.sO(aH.target.aLu, code)
					}), gF && (a6.aH.style.marginLeft = "4%"), a6.aH.style.width = "48%", hW.ir(a6)
				}
			}
			ii.push(hW)
		}(ii), (hW = new il).im(L(385)), hW.io(new ip({
			iq: ["1", "2"],
			value: a0E.tk - 1
		}, function(ai) {
			a0E.tk = ai + 1
		})), ii.push(hW), (hW = new il).im(L(386)), bz.c0.data[1].iq = [L(387), L(388), L(389), L(390)], hW.io(new ip(bz.c0.data[1])), ii.push(hW), (hW = new il).im(L(391)), bz.c0.data[9].iq = [L(388), L(392), L(393)], hW.io(new ip(bz.c0.data[9])),
		ii.push(hW), (hW = new il).im(L(394)), bz.c0.data[11].iq = [L(395), L(396), L(397)], hW.io(new ip(bz.c0.data[11])), ii.push(hW), (hW = new il).im(L(398)), hW.ir(new it(bz.c0.data[2])), ii.push(hW), (hW = new il).im(L(399)), hW.ir(new it(bz.c0
			.data[7])), ii.push(hW), (hW = new il).im(L(400)), hW.ir(new it(bz.c0.data[8])), ii.push(hW), (hW = new il).im(L(401)), hW.ir(new a7(bz.c0.data[5])), ii.push(hW), (hW = new il).im(L(402)), hW.ir(new it(bz.c0.data[13], L(403))), hW.ir(
			new it(bz.c0.data[14], L(404))), ii.push(hW), lr = new iW(lq.iX, ii)
}

function aJl() {
	this.size = 0, this.a8 = 0, this.hl = null, this.q = function(hl) {
		this.a8 = 0, this.hl = hl, this.size = hl.length
	}, this.ha = function(aAQ) {
		return this.q(new Uint8Array(this.cO(aAQ))), this.hl
	}, this.cC = function() {
		this.hl = null
	}, this.et = function(size, aLx) {
		for (var hl = this.hl, dj = this.a8 + size - 1, ai = this.a8; ai <= dj; ai++) hl[ai >> 3] |= (aLx >> dj - ai & 1) << 7 - (7 & ai);
		this.a8 += size, this.a8 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aCQ = function(size, aLx) {
		var pW = size >> 1,
			iP = 1 << pW;
		this.et(size - pW, je.kI(aLx, iP)), this.et(pW, aLx % iP)
	}, this.aLy = function(size) {
		for (var hl = this.hl, dj = this.a8 + size, ai = this.a8; ai < dj; ai++) hl[ai >> 3] &= 255 ^ 128 >>> (7 & ai)
	}, this.cO = function(aAQ) {
		return aAQ + 7 >> 3
	}, this.aLz = function(nu, af, dj, aM0) {
		for (var ai = af; ai < dj; ai++) this.et(aM0, nu[ai])
	}
}

function aM2() {
	(aM1 = void 0 === aM1 ? document.createElement("canvas") : aM1).width = t.u, aM1.height = t.v, n = aM1.getContext("2d", {
		alpha: !0
	}), o = w = null, o = n.getImageData(0, 0, t.u, t.v), w = o.data, aR.ie.aM3(w)
}

function aL9() {
	function aM8(player) {
		var gj;
		aR.bc.mr(player) && (gj = fL.jD[player] - fL.a3E[player] + ks.mn(player), jB.lC(player, Math.abs(gj), gj < 0 ? 18 : 12)), fL.jD[player] = 0, fL.a3E[player] = 0
	}

	function aME() {
		jN.show(!1, !1, !1, !0), jF.aMG(), jy.a4x.aMH()
	}

	function aM6(player, mx) {
		for (var ai = mx.length - 1; 0 <= ai; ai--) ks.me(mx[ai], player)
	}

	function aM7(player) {
		var jI = fL.jI,
			jK = fL.jK,
			jJ = fL.jJ,
			jL = fL.jL,
			u = t.u;
		if (fL.ge[player]) {
			fL.ge[player] = 0;
			for (var g = jI[player], j = jJ[player], r = jK[player]; g <= r; r--)
				for (var s = jL[player]; j <= s; s--) {
					var o4 = 4 * (s * u + r);
					x.ys(player, o4) && x.aMM(o4)
				}
		}
		jK[player] = jL[player] = 0, jI[player] = jJ[player] = Math.max(u, t.v)
	}
	this.ut = function(o4) {
		var player, gj = fL.ge[o4] + fL.aGE[o4];
		h4.aZ.h7[o4] ? gj && (aM6(player = o4, ks.mw(player)), aM7(player), a4S.w9(player), ks.clear(player), aM8(player), function(player) {
			fL.aGE[player] = 0, fL.kn[player] = [], fL.ki[player] = [], fL.kj[player] = [], fL.kl[player] = []
		}(player)) : !gj && fL.kn[o4].length || this.aM5(o4)
	}, this.aM5 = function(player) {
		! function(player) {
			aR.bc.ms(player) || (fL.aMC[player] = hb.k3.aMD(), bK.a4t++);
			var mx = ks.mw(player);
			0 === mx.length ? aR.bc.bd(player) && aME() : (aM6(player, mx), function(player, mx) {
				var aMJ = mx[function(mx) {
					var ai, a8 = 0;
					for (ai = mx.length - 1; 1 <= ai; ai--) fL.ge[mx[ai]] > fL.ge[mx[a8]] && (a8 = ai);
					return a8
				}(mx)];
				9 === bK.k7 && (1 === gT.og[player] ? kJ.aIS(8) && wU.aMK(aMJ) : wX.mW[player] && (bI.a0S(765, 0), bI.be(280, L(408, [fL.fM[aMJ], fL.fM[player]]), 765, aMJ, aJ.fY, aJ.a20, -1, !0)));
				if (aR.bc.bd(player)) aME(), bI.mu(aMJ, 1);
				else {
					for (var ai = mx.length - 1; 0 <= ai; ai--)
						if (aR.bc.mr(mx[ai]) && (jB.jC[4 - aR.bc.ms(player)]++, aR.bc.bd(mx[ai]))) return bI.mu(player, 0);
					aR.bc.ms(player) || bI.aML(0, player, aMJ)
				}
			}(player, mx))
		}(player), aM7(player), aM8(player),
			function(player) {
				fL.gl[player] = 0, fL.kn[player] = null, fL.ki[player] = null, fL.kj[player] = null, fL.kl[player] = null
			}(player), a4S.w9(player), ks.clear(player), h4.eF.h2(player)
	}
}

function aCw() {
	this.yP = function(j4) {
		bK.bX ? k6.aCx.yP(bK.bL, j4) : bM.bN.aMN(j4)
	}, this.yU = function(a3q, mV) {
		bK.bX ? k6.aCx.yU(bK.bL, a3q, mV) : bM.bN.aMO(a3q, mV)
	}, this.yN = function(a3q, a2q) {
		bK.bX ? k6.aCx.a41(bK.bL, a3q, a2q) : bM.bN.aMP(a3q, a2q)
	}, this.bb = function(a3q, j4) {
		j4 = (j4 << 3) + oi.yl[6];
		bK.bX ? k6.aCx.bb(bK.bL, a3q, j4) : h4.eY.a3K(bK.bL) && bM.bN.aMQ(a3q, j4)
	}, this.bh = function(a3q) {
		849 === a3q && (a3q = 850);
		var pJ = oi.yl[3];
		bK.bX ? k6.aCx.bh(bK.bL, a3q, pJ) : h4.ef.aJ8(bK.bL, pJ) && bM.bN.aMR(a3q, pJ)
	}, this.a4B = function(pJ) {
		bK.bX ? k6.aCx.a4B(bK.bL, pJ) : bM.bN.aMR(849, pJ)
	}, this.a4D = function(mV) {
		bK.bX ? k6.aCx.a4D(bK.bL, mV) : bM.bN.aMS(mV)
	}, this.bJ = function(bH) {
		bK.bX ? k6.aCx.a4E(bK.bL, bH) : bM.bN.aMT(bH)
	}, this.a4G = function(a4H) {
		bK.bX ? k6.aCx.a4G(bK.bL, a4H) : bM.bN.aMU(a4H)
	}, this.a4K = function() {
		bK.bX ? k6.aCx.a4K(bK.bL) : bM.bN.aMV()
	}, this.a0A = function() {
		bK.bX ? k6.aCx.a0A(bK.bL) : bM.bN.aMS(513)
	}, this.yX = function(a3q, j4, mV) {
		bK.bX ? k6.aCx.yX(bK.bL, a3q, j4, mV) : bM.bN.aMW(a3q, j4, mV)
	}
}

function aLC() {
	this.at = new aMX, this.wQ = new aGX
}

function aIt() {
	this.a3o = function(nD) {
		return 0 === nD ? 1 === bK.fC && bK.j9 : 1 === nD ? 1 === bK.fC && !bK.j9 : 2 === bK.fC
	}, this.ye = function(player) {
		return 0 !== fL.gl[player] && 2 !== fL.gc[player]
	}, this.bd = function(player) {
		return player === bK.bL && 2 !== fL.gc[player]
	}, this.aDn = function(player, mV) {
		return player !== mV && (0 === gT.og[player] || gT.og[player] !== gT.og[mV])
	}, this.aEN = function() {
		return my.mz < 2 ? 0 : bK.fR ? 1 < fT.ol() : fL.ge[fZ[1]]
	}, this.aMY = function() {
		var mz = my.mz;
		if (0 !== mz) {
			if (!bK.fR) return !this.ms(fZ[0]);
			for (var og = gT.og, oX = fT.oY(), n0 = my.n0, ai = mz - 1; 0 <= ai; ai--) {
				var o4 = n0[ai];
				if (og[o4] === oX && !this.ms(o4)) return 1
			}
		}
		return 0
	}, this.mr = function(player) {
		return player === bK.bL
	}, this.aMZ = function(mV, du) {
		return fL.jD[bK.bL] < du * fL.jD[mV]
	}, this.ms = function(player) {
		return player >= bK.gd || 2 === fL.gc[player]
	}, this.w8 = function(player) {
		return 0 !== fL.gl[player]
	}, this.r8 = function(player) {
		return player < bK.gd
	}, this.a3r = function(aMa, aMb) {
		return aMa !== aMb
	}, this.md = function(player, er) {
		var min;
		return er = this.aMc(player, er), fL.jD[player] += er, fL.a3E[player] && (min = Math.min(fL.a3E[player], fL.jD[player]), fL.a3E[player] -= min, fL.jD[player] -= min), er
	}, this.aMc = function(player, er) {
		var a2z = fL.jD[player];
		return er = Math.min(er, fL.ge[player] * bK.aMd - a2z), er = Math.min(er, bK.mt - a2z), Math.max(er, 0)
	}, this.a3s = function(player, a3q, aMe, aMf) {
		var a2z = fL.jD[player],
			a3q = je.kI(a2z * (a3q + 1), 1024),
			aMe = je.kI(aMe * a2z, 1024),
			a3q = Math.min(a3q, a2z - aMe);
		return 10 === bK.k7 && (a3q = aE8.aMh(player, a3q)), oi.a2t[0] = a3q, oi.a2t[1] = aMe, aMf <= a3q
	}, this.a43 = function(player, a41, a2q) {
		var player = fL.jD[player],
			aMg = je.kI(64 * player, 1024);
		return a41 = Math.min(a41, player - aMg), a41 = this.aMc(a2q, a41), oi.a2t[0] = a41, oi.a2t[1] = aMg, 1 <= a41
	}, this.aMi = function(player, a41, a2q) {
		var player = fL.jD[player],
			aMg = je.kI(64 * player, 1024);
		return a41 = Math.min(a41, player - aMg), this.aMc(a2q, a41)
	}, this.aMj = function(a41, a2q) {
		return a41 = this.aMc(a2q, a41), oi.a2t[0] = a41, oi.a2t[1] = 0, 1 <= a41
	}, this.a44 = function(player, aMk) {
		return je.kI(fL.jD[player] * (aMk + 1), 1024)
	}, this.aMl = function(player, aMe) {
		aMe = je.kI(aMe * fL.jD[player], 1024);
		oi.a2t[1] = aMe, fL.jD[player] -= aMe
	}, this.lF = function(player, aMm) {
		var sH, mA, pW = fL.jD[player];
		return aMm <= pW ? fL.jD[player] -= aMm : (fL.jD[player] = 0, mA = fL.a3E[player] + (sH = 5 * ((pW = aMm - pW) >> 2)), jB.lC(player, sH - pW, 12), mA <= bK.aMn ? fL.a3E[player] = mA : (fL.a3E[player] = bK.aMn, jB.lC(player, mA - bK.aMn,
			18))), aMm
	}, this.a4Q = function(player, a3q) {
		var jD = fL.jD,
			a2z = jD[player],
			a3q = je.kI(a2z * (a3q + 1), 1024),
			aMg = Math.max(je.kI(a2z, 10), 1e3);
		return (a3q = Math.min(a3q, a2z - aMg)) < 0 ? (jD[player] = 0, aMg = Math.min(1e3, a2z + bK.aMn - fL.a3E[player]), oi.a2t[1] = aMg, fL.a3E[player] += aMg - a2z, 0) : (oi.a2t[1] = aMg, 10 === bK.k7 && (a3q = aE8.aMh(player, a3q)), jD[
			player] -= aMg + a3q, a3q)
	}, this.a2x = function(player) {
		fL.jD[player] -= oi.a2t[0] + oi.a2t[1]
	}, this.a3t = function(player, mV) {
		return (mV = Math.min(mV, bK.g6)) < bK.g6 && 0 === fL.gl[mV] && (mV = bK.g6), (oi.a3v[0] = mV) === bK.g6 || kf.yz(player, mV)
	}, this.a42 = function(player, a2q) {
		return 0 !== fL.gl[a2q] && !kf.yz(player, a2q)
	}, this.aMo = function(player, aMp) {
		for (var o4, ae = my.mz, gb = 0, aMq = fZ, ai = 0; ai < ae; ai++)
			if (o4 = aMq[ai], !this.ms(o4)) {
				if (player === o4) return !0;
				if (++gb > aMp) return !1
			} return !1
	}, this.a0Q = function(o4) {
		var aMr = bK.fR ? fT.oW() : fL.ge[fZ[0]];
		return aMr >= je.kI(o4 * bK.a2l, 100)
	}, this.aIC = function(er, min, max) {
		return Math.floor(je.jf(isNaN(er) ? 0 : Number(er), min, max))
	}
}

function m4(aMs) {
	var v1 = document.createElement("div");
	this.aH = v1, this.aMt = aMs, this.resize = function() {
		for (var ae = aMs.length, ai = 1; ai < ae; ai++) aR.az.bD(aMs[ai], 4)
	};
	var ai, ae = aMs.length;
	for (v1.style.width = "100%", v1.style.height = "2.7em", v1.style.marginTop = "0.6em", v1.style.border = "inherit", ai = 0; ai < ae; ai++) aMs[ai].style.verticalAlign = "top", aMs[ai].style.width = (100 / ae).toFixed(2) + "%", aMs[ai].style
		.height = "100%", aMs[ai].style.fontSize = "0.75em", v1.appendChild(aMs[ai])
}

function aMu() {
	this.cH = function(a8, value) {
		2 !== bz.c0.data[a8].type && (value = Math.floor(value)), bz.c0.data[a8].value !== value && (bz.c0.nC(a8, value), 0 === a8 ? (ax.rW(), ln.q(), ax.gu(2)) : 1 === a8 ? b3.aH5(1) : 2 === a8 ? b3.aH5(0) : 5 === a8 && (aR.az.aCf(), b3.aH5(0)))
	}, this.n3 = function() {
		for (var data = bz.c0.data, ai = 0; ai < 100; ai++) data[ai] && bz.c0.nC(ai, data[ai].jm);
		aR.az.aCf(), b3.aH5(1)
	}, this.n4 = function() {
		for (var data = bz.c0.data, ai = 0; ai < data.length; ai++) data[ai] && bz.c0.cH(ai, data[ai].jm)
	}, this.aMv = function() {
		for (var pW = bz.c0, ai = 128; ai < 135; ai++) pW.nC(ai, pW.data[ai].jm)
	}, this.dA = function(data) {
		bz.cG.cH(109, data.cQ), bz.cG.cH(107, data.cS), bz.cG.cH(108, data.cT), bz.cG.cH(112, data.cU), bz.cG.cH(111, data.cV), bz.cG.cH(113, data.cW), bz.cG.cH(135, data.ca), bz.cG.cH(136, data.cb), bz.cG.cH(137, data.cc), bz.cG.cH(138, data
			.cd), bz.cG.cH(139, data.ce), bz.cG.cH(141, data.cf), bz.cG.cH(142, data.cg), bz.cG.cH(143, data.ch), bz.cG.cH(144, data.ci)
	}
}

function aMw() {
	var aMx, aGd, aMy;

	function aN4(ai) {
		return aR.color.nk(aGd[ai][0], aGd[ai][1], aGd[ai][2])
	}

	function aN9(gF, pW) {
		return aR.color.aE1(aGd[gF], aGd[pW]), aN4(pW)
	}

	function aN2() {
		aMx && (aMx.remove(), aMx = null)
	}
	this.show = function(oz, colors, id) {
		0 <= (aMy = id) && bM.aZ.aI4(0) && bM.hf.la(0, id), oz = (oz = (oz = (oz = (oz = (oz = (oz = (oz = (oz = (oz = (oz = (oz = oz.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aGd = colors, (aMx = document.createElement("div")).style.position = "fixed", aMx.style.top = "0", aMx.style.left = "0", aMx.style.width = "100%", aMx.style.height = "100%", aMx.style.backgroundColor = aR.color.a18(aGd[0][0], aGd[0][
				1], aGd[0][2], .6), aMx.style.zIndex = "6", aMx.onclick = function(aH) {
				aH.target === aMx && aN2()
			},
			function(oz) {
				var wK, aN3 = document.createElement("div");
				aN3.style.position = "absolute", aN3.style.display = "flex", aN3.style.flexDirection = "column", aN3.style.top = "50%", aN3.style.left = "50%", aN3.style.backgroundColor = aN4(2), wK = bA.bB.bC() ? aR.az.aCn(b3.min) : aR.az.b0(
				.4);
				wK = Math.max(wK, 200), aN3.style.width = aR.az.b8(wK), aN3.style.height = aR.az.b8(wK), aN3.style.transform = "translate(-50%, -50%)",
					function(aN3, wK) {
						var aN8 = document.createElement("div");
						aN8.style.flex = "0 0 10%", aN8.style.overflow = "hidden", aN8.style.backgroundColor = aN4(1), aN8.style.color = aN9(1, 7), aN8.style.font = aR.az.f8(1, .05 * wK), aN8.style.display = "flex", aN8.style.alignItems =
							"center", aN8.style.justifyContent = "center", aN8.innerHTML = L(409), aN3.appendChild(aN8)
					}(aN3, wK),
					function(aN3, oz, wK) {
						var aNA = document.createElement("div");
						aNA.style.flex = "0 0 70%", aNA.style.overflowY = "auto", aNA.style.overflowX = "hidden", aNA.style.whiteSpace = "pre-wrap", aNA.style.wordWrap = "break-word", aNA.style.padding = aR.az.b8(.02 * wK), aNA.style
							.backgroundColor = aN4(2), aNA.style.color = aN9(2, 8), aNA.style.font = aR.az.f8(0, .07 * wK), aNA.innerHTML = oz, aNA.innerHTML = "<style>a { color: inherit; }</style>" + aNA.innerHTML, aN3.appendChild(aNA)
					}(aN3, oz, wK),
					function(aN3, wK) {
						var aNB = document.createElement("div"),
							aNC = (aNB.style.display = "flex", aNB.style.flexDirection = "row", aNB.style.justifyContent = "space-between", aNB.style.alignItems = "stretch", aNB.style.backgroundColor = aN4(3), aNB.style.flex = "1", aNB.style
								.padding = aR.az.b8(.01 * wK), aNB.style.gap = aR.az.b8(.01 * wK), document.createElement("div")),
							aND = (aNC.style.flex = "0 0 60%", aNC.style.height = "100%", new aM(L(56, 0, 0, 1), function() {
								aN2()
							}, aN4(4), !1)),
							aND = (aND.button.style.width = "100%", aND.button.style.height = "100%", aND.button.style.color = aN9(4, 9), aND.button.style.font = aR.az.f8(1, .05 * wK), aNC.appendChild(aND.button), document.createElement("div")),
							aNF = (aND.style.flex = "0 0 15%", aND.style.height = "100%", aND.style.backgroundColor = aN4(5), document.createElement("div")),
							aNG = (aNF.style.flex = "1", aNF.style.height = "100%", new aM(L(410), function(aH) {
								return aR.az.aCt(aH), aMy < 0 || bM.aZ.aI4(0) && (bM.hf.la(1, aMy), aMy = -1), !0
							}, aN4(6), !1));
						aNG.button.style.width = "100%", aNG.button.style.height = "100%", aNG.button.style.color = aN9(6, 10), aNG.button.style.font = aR.az.f8(1, .035 * wK), aNF.appendChild(aNG.button), aNB.appendChild(aNC), aNB.appendChild(
							aND), aNB.appendChild(aNF), aN3.appendChild(aNB)
					}(aN3, wK), aMx.appendChild(aN3)
			}(oz), document.body.appendChild(aMx)
	}
}

function aNI() {
	var iq = aNJ(t.fH);
	iq && aNK(iq[0], iq[1], iq[2], iq[3], iq[4])
}

function aNJ(fH) {
	return 2 === fH ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fH ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fH ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fH ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fH ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aNK(aNL, aNM, aNN, aNO, aNP) {
	for (var r, s, aAM, aAO, e6, aNS, a69 = aNL.length - 1, aNQ = t.u + t.v, ae = (aNQ *= aNQ, aNN.length), aNR = Array(ae), ai = ae - 1; 0 <= ai; ai--) aNR[ai] = aNN[ai] * aNN[ai];
	var aNT = new Array(ae),
		oC = new Array(ae),
		aNU = new Array(ae),
		er = a2G.a2P();
	if (void 0 === aNP)
		for (aNP = new Array(ae), ai = ae - 1; 0 <= ai; ai--) aNP[ai] = 0;
	for (ai = 1; ai < ae; ai++) aNT[ai] = aNR[ai] - aNR[ai - 1], oC[ai] = aNO[ai] - aNO[ai - 1], aNU[ai] = aNP[ai] - aNP[ai - 1];
	for (r = t.u - 1; 0 <= r; r--)
		for (s = t.v - 1; 0 <= s; s--) {
			for (aAM = aNQ, ai = a69; 0 <= ai; ai--) aAM = (aAO = (r - aNL[ai]) * (r - aNL[ai]) + (s - aNM[ai]) * (s - aNM[ai])) < aAM ? aAO : aAM;
			for (e6 = aNO[ae - 1], aNS = aNP[ae - 1], ai = 1; ai < ae; ai++)
				if (aAM < aNR[ai]) {
					e6 = aNO[ai - 1] + aNV((aAM - aNR[ai - 1]) * oC[ai], aNT[ai]), aNS = aNP[ai - 1] + aNV((aAM - aNR[ai - 1]) * aNU[ai], aNT[ai]);
					break
				} aNW(t.u * s + r, e6, aNS, er)
		}
}

function aNW(a8, e6, aNS, er) {
	e6 < 500 ? er[a8] = je.kI(er[a8] * e6 * 2, 1e3) : 500 < e6 && (er[a8] += je.kI(2 * (1e4 - er[a8]) * (e6 - 500), 1e3)), er[a8] += je.kI(aNS * (10 * e6 - er[a8]), 1e3)
}

function eJ() {
	this.aDR = 512, this.aKd = 8, this.hB = 0, this.aDs = 0, this.hD = new Uint16Array(this.aDR), this.hH = new Uint32Array(this.aDR), this.hI = new Uint16Array(this.aDR), this.hJ = new Uint32Array(this.aDR), this.hF = new Uint16Array(this.aDR), this
		.hK = new Uint16Array(this.aDR), this.hL = new Uint8Array(this.aDR), this.hM = new Uint8Array(this.aDR), this.hN = new Array(this.aDR), this.hO = new Uint16Array(this.aDR), this.h7 = new Uint8Array(bK.g6), this.h3 = new Uint16Array(this.aKd *
			bK.g6), this.q = function() {
			this.hB = 0, this.aDs = 0, this.h7.fill(0), this.hN.fill(null)
		}, this.a4A = function(player) {
			var mW = oi.a2t[0],
				eO = oi.yl[1],
				tJ = oi.nu[0],
				aNX = this.aDs,
				ae = this.hB,
				aNY = hQ.a6M(tJ[0]),
				a4h = this.h7[player],
				a4i = (player << 3) + a4h;
			this.hD[ae] = a4i, this.hH[ae] = aNY, this.hI[ae] = 0, mW < 60 && (aR.bc.lF(player, 60 - mW), mW = 60), this.hJ[ae] = mW, this.hF[ae] = h4.eK.a4A(ae, hQ.hR(aNY)), this.hK[ae] = aNX, this.hL[ae] = eO, this.hM[ae] = 0, this.hN[ae] = tJ,
				this.hO[ae] = 0, this.aDs = (aNX + 1) % 65536, this.h7[player] = a4h + 1, this.h3[a4i] = ae, this.hB++, h4.eO.aNZ(player, tJ[tJ.length - 1], eO, aNX, mW)
		}, this.fA = function() {
			h4.eO.fA();
			for (var o4 = bK.bL, gj = h4.ak.mn(o4), jw = (! function(jw) {
					for (var aNe, hH = jw.hH, hJ = jw.hJ, hM = jw.hM, hI = jw.hI, hF = jw.hF, hN = jw.hN, hO = jw.hO, jw = jw.hB, aKa = t.u << 4, ai = jw - 1; 0 <= ai; ai--) {
						var aNf = hH[ai],
							tJ = hN[ai],
							aNg = hO[ai],
							aNY = hQ.a6M(tJ[aNg]),
							aNh = hQ.a6M(tJ[aNg + 1]),
							aNi = aNY % aKa,
							aNY = ~~((aNY + .5) / aKa),
							aNk = aNh % aKa,
							aNl = ~~((aNh + .5) / aKa),
							aNm = aNk - aNi,
							aNn = aNl - aNY,
							iP = Math.max(~~Math.sqrt(aNm * aNm + aNn * aNn + .5), 1),
							aNo = hJ[ai],
							aNo = (aNo = hM[ai] ? 4e4 : 25e4 + Math.min(20 * aNo, 3e5) + Math.min(aNo >> 3, 5e4), hI[ai] + Math.max(~~((aNo + .5) / iP), 1));
						65535 <= aNo ? aNg + 2 < tJ.length ? (hO[ai] = aNg + 1, hH[ai] = aNe = function(ai, aNp, aNi, aNj, aNg, iP, tJ, aKa) {
							aNp = Math.min(aNp - 65535, 65535);
							var tJ = hQ.a6M(tJ[aNg + 2]),
								aNg = tJ % aKa - aNi,
								tJ = ~~((tJ + .5) / aKa) - aNj,
								aNs = Math.max(~~Math.sqrt(aNg * aNg + tJ * tJ + .5), 1);
							return aNp = Math.min(Math.floor((iP * aNp + .5) / aNs), 65534), h4.aZ.hI[ai] = aNp, aNi + je.kI(aNp * aNg, 65535) + aKa * (aNj + je.kI(aNp * tJ, 65535))
						}(ai, aNo, aNk, aNl, aNg, iP, tJ, aKa)) : (hH[ai] = aNe = aNh, hI[ai] = 65535) : (hI[ai] = aNo, hH[ai] = aNe = aNi + je.kI(aNo * aNm, 65535) + aKa * (aNY + je.kI(aNo * aNn, 65535))), hF[ai] = h4.eK.aNr(hF[ai], aNf,
							aNe)
					}
				}(this), ! function(jw) {
					if (bu.gE() % 2 == 1) {
						var ai, jc, kG, pW, iJ, aNt, aNu, aNv, xh, g, j, aNY, aNw, e1, aNy, xi, ae = jw.hB,
							hH = jw.hH,
							hD = jw.hD,
							hJ = jw.hJ,
							hM = jw.hM,
							eK = h4.eK.eK,
							a5C = eK.length,
							aO0 = h4.eK.aO0,
							aKa = t.u << 4,
							aO1 = bK.fR,
							oe = gT.og,
							gO = (ae - 1) * (je.kI(bu.gE(), 2) % 2);
						for (ai = 0; ai < ae; ai++)
							for (jc = Math.abs(ai - gO), aNY = hH[jc], kG = hQ.hR(aNY), xh = hD[jc] >> 3, g = aNY % aKa, j = ~~((aNY + .5) / aKa), aNy = hJ[jc], pW = 0; pW < 9; pW++)
								if (!((aNt = kG + aO0[pW]) < 0 || a5C <= aNt))
									for (aNv = eK[aNt], aNu = aNv.length, iJ = 0; iJ < aNu; iJ++) aNw = aNv[iJ], xi = hD[aNw] >> 3, xh == xi || aO1 && oe[xh] === oe[xi] && oe[xh] || (xi = hH[aNw], (e1 = g - xi % aKa) * e1 + (e1 = j - ~~((xi +
										.5) / aKa)) * e1 < 14400 && (xi = hJ[aNw], e1 = xi <= aNy ? Math.max(1, je.kI(xi + je.kI(aNy - xi, 10), 10)) : Math.max(1, je.kI(aNy, 10)), hJ[aNw] = Math.max(xi - e1, 0), hM[aNw] = 4))
					}
				}(this), ! function(jw) {
					if (bu.gE() % 5 == 3)
						for (var hJ = jw.hJ, ae = jw.hB, ai = 0; ai < ae; ai++) {
							var mW = hJ[ai];
							hJ[ai] = Math.max(mW - Math.max(1, mW >> 7), 0)
						}
				}(this), this), hJ = jw.hJ, hM = jw.hM, ai = jw.hB - 1; 0 <= ai; ai--) hM[ai] = hM[ai] >> 1, 0 === hJ[ai] && (h4.eh.aBm(ai), h4.eF.h8(ai));
			jB.lC(o4, gj - h4.ak.mn(o4), 15)
		}
}

function aO2() {
	function aO8() {
		var qS;
		return 8 === bK.k7 ? 0 : (qS = Math.floor(fL.aMC[bK.bL] / 50), (qS = Math.min(qS, 200)) / 100)
	}

	function aO3() {
		var qS = aO8();
		0 !== qS && bI.be(440, L(411, [qS.toFixed(2)]), 40, 0, aJ.a1K, aJ.bg, -1, !1)
	}
	this.fA = function() {
		var ct;
		0 === jy.result.jt || 0 === jy.result.jr.length || 8 === bK.k7 ? aR.bc.ye(bK.bL) && aO3() : (function(ct) {
			7 !== bK.k7 && 10 !== bK.k7 || 0 !== bK.a4w && ct && bI.be(600, L(415, [ct.toFixed(2)]), 40, 0, aJ.eA, aJ.bg, -1, !1)
		}(ct = function() {
			bI.be(520, L(412), 40, 0, aJ.eA, aJ.bg, -1, !1);
			for (var jr = jy.result.jr, ae = jr.length, ge = fL.ge, nu = [], ai = 0; ai < ae; ai++) {
				var o4 = jr[ai];
				nu.push({
					o4: o4,
					gj: ge[o4]
				})
			}
			nu.sort((gF, pW) => pW.gj - gF.gj);
			var jb = fL.fM,
				gj = jy.result.js,
				qS = jy.result.jt,
				en = "",
				ct = 0;
			for (ai = 0; ai < ae; ai++) {
				var aOA = nu[ai].gj * qS / (100 * gj),
					aOB = jb[nu[ai].o4] + ": " + aOA.toFixed(2) + "   ";
				nu[ai].o4 === bK.bL && (ct = aOA), 2 < ai && 4 !== ae ? 3 === ai && (en += "(" + L(413, [ae - 3]) + ")") : en += aOB
			}
			bI.be(560, aR.aS.aJU(en), 40, 0, aJ.a1K, aJ.bg, -1, !1), ct ? bI.be(580, L(414, [ct.toFixed(2) + " + " + aO8().toFixed(2)]), 40, 0, aJ.a1K, aJ.bg, -1, !1) : aR.bc.ye(bK.bL) && aO3();
			return ct
		}()), 2 === bK.jx || 7 <= bK.k7 || function(ct) {
			var jr = jy.result.jr,
				ae = jr.length,
				g9 = fL.g9,
				ge = fL.ge,
				qs = [];
			loop: for (var ai = 0; ai < ae; ai++) {
				var o4 = jr[ai],
					vX = aR.aS.a6t(g9[o4]);
				if (null !== vX) {
					for (var a6h = ge[o4], pW = qs.length - 1; 0 <= pW; pW--)
						if (vX === qs[pW].name) {
							qs[pW].gj += a6h, qs[pW].nu.push({
								o4: o4,
								gj: a6h
							});
							continue loop
						} qs.push({
						name: vX,
						gj: a6h,
						nu: [{
							o4: o4,
							gj: a6h
						}]
					})
				}
			}
			if (0 !== qs.length) {
				qs.sort((gF, pW) => pW.gj - gF.gj);
				var nu = qs[0].nu,
					aOC = (nu.sort((gF, pW) => pW.gj - gF.gj), "[" + qs[0].name + "]"),
					aOD = 512 * jy.result.jt / 26214400,
					kG = (bI.be(0, L(416, [aOC, aOD.toFixed(4)]), 40, 0, aJ.eA, aJ.bg, -1, !1), nu.length),
					aOE = qs[0].gj,
					aOF = 1e4 * aOD;
				for (ai = 0; ai < kG; ai++)
					if (nu[ai].o4 === bK.bL) {
						bI.be(600, L(417, [(aOF * nu[ai].gj / (10 * aOE)).toFixed(2)]), 40, 0, aJ.eA, aJ.bg, -1, !1), bI.be(640, L(418, [(.2 * ct).toFixed(2), aOC]), 40, 0, aJ.eA, aJ.bg, -1, !1);
						break
					}
			}
		}(ct))
	}, this.aMH = function() {
		var aO7, a3C;
		bK.bX || (aO7 = fL, a3C = bK.bL, 0 === aO7.aGF[a3C]) || aO7.aF8[a3C] < 1 || 2 * aO7.a3w[a3C] > 3 * (aO7.aF7[a3C] + aO7.aF8[a3C]) || aO3()
	}
}

function aOG() {
	this.bv = bu.bv, this.a8 = 0, this.vp = 0, this.a58 = 0, this.aOH = null, this.aOI = 7, this.aOJ = 0, this.q = function() {
		this.a58 = 0, this.aOH = [], this.a8 = 0, this.vp = 0
	}, this.aEu = function(hl) {
		if (bK.j9) this.a5I(hl);
		else if (this.aOH.push(hl), 2 === bK.fC) {
			for (var ai = 0; ai < this.aOH.length; ai++) k6.a5N.fA(this.aOH[ai]);
			this.aOH = []
		}
	}, this.a5I = function(hl) {
		2 !== bK.fC && (k6.a5N.fA(hl), zK.fA(), jF.a5I(this.a58), this.a58 === bK.a5H ? (bK.jT.fA(), this.a58 = 0, this.a8 = 0, this.vp = 0, this.bv = bu.bv) : (this.a58++, dq.jP(), dq.gC(!0), jU.f()))
	}, this.fA = function() {
		b3.fA(), bK.j9 ? (bu.dw = jF.a5I(-1) || bu.dw, vq()) : (0 !== this.a8 || bu.bv >= this.bv && (this.bv += bu.vr * Math.floor(1 + (bu.bv - this.bv) / bu.vr), 2 === bK.fC ? vu() : this.aOK(), this.a8++, 27 < bu.bv - this.aOJ)) && this.aOL(),
			vx(), bu.dw && (bu.dw = !1, vy()), this.aOJ = bu.bv
	}, this.aOL = function() {
		bu.dw = !0, vw(), this.a8 = 0
	}, this.aOK = function() {
		var aOM, ai;
		if (this.vp !== 7 * this.a58) vv(), jU.f();
		else {
			aOM = !1;
			loop: for (; this.aON() && (aOM = !0, vv(), 2 !== bK.fC) && 0 < this.aOH.length;)
				for (ai = this.aOI - 2; 0 <= ai; ai--)
					if (vv(), 2 === bK.fC) break loop;
			aOM ? jU.f() : (vu(), jU.m())
		}
	}, this.aON = function() {
		return 0 < this.aOH.length && (this.a58++, k6.a5N.fA(this.aOH[0]), this.aOH.shift(), !0)
	}
}

function aLI() {
	var b9, canvas, f4, aOO, aOP, aOQ, aOR, aAk, aOS, aOT, aOU, aOW, aOV = !1,
		mD = (this.mO = !1, this.b4 = 0, new Array(2)),
		aOX = 0;

	function aW() {
		var b4 = zu.b4,
			kG = (aAk = !1, aOY(f4, b4, b9), Math.floor(b4 / 2));
		1 === aOO ? (f4.fillStyle = aJ.a1M, f4.fillRect(kG, 0, kG, b9)) : -1 === aOO && (f4.fillStyle = aJ.sw, f4.fillRect(0, 0, kG, b9)), aOZ(f4, b4, b9, 2);
		var kG = (kG = Math.floor(.25 * b9)) < 2 ? 2 : kG,
			aOa = (f4.fillStyle = aJ.a1A, Math.floor((b9 - 4) * aOP[1] / aOQ[1]));
		0 < aOa && f4.fillRect(2, b9 - 2 - aOa, kG, aOa), 0 < (aOa = Math.floor((b9 - 4) * aOP[0] / aOQ[0])) && f4.fillRect(b4 - 2 - kG, b9 - 2 - aOa, kG, aOa);
		kG = (kG = Math.floor(b9 / 8)) < 2 ? 2 : kG, eB(f4, Math.floor(.4 * b9), 0, b9, kG, .5, !1), eB(f4, Math.floor(b4 - 1.4 * b9), 0, b9, kG, .5, !0), aOa = 1.1 * b9 / mD[0].width;
		f4.imageSmoothingEnabled = !0, f4.setTransform(aOa, 0, 0, aOa, (b4 - aOa * mD[0].width) / 2, -.05 * b9), f4.drawImage(mD[+aOV], 0, 0), f4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aOf() {
		aOW = -1, aOV = aKp.uZ(), bI.jO(257), bI.aOg(aOV), zu.mO = !0, aAk = !0, aOS = 360;
		for (var er, gj = 0, ai = my.mz - 1; 0 <= ai; ai--) aR.bc.ms(my.n0[ai]) || (gj += fL.ge[my.n0[ai]]);
		aOV ? aOQ[0] = Math.max(je.kI(3 * gj, 4), 1) : bK.fR ? 9 === bK.k7 && 8 === gT.oZ[fT.oY()] ? aOQ[0] = Math.max(gj, 1) : (er = je.kI(100 * fT.oW(), bK.a2l), er = je.jf(200 - 2 * er, 40, 100), er = je.kI(er * gj, 100), aOQ[0] = Math.max(er,
			1)) : 8 === bK.k7 ? aOQ[0] = Math.max(je.kI(3 * gj, 4), 1) : aOQ[0] = Math.max(je.kI(3 * gj, 5), 1), aOQ[1] = Math.max(gj - aOQ[0], 1)
	}

	function ub() {
		aOU = bu.gE(), aAk = !0, aOS = aOO = 0, aOR = [], zu.mO = !1, bI.a51(247), aOP[0] = aOP[1] = 0, bI.jO(673)
	}

	function dY() {
		return fV.x7(bI.aOm()) ? __fx.settings.keybindButtons ? fV.s - 2 * (b9 + dH.gap) : fV.s - b9 - dH.gap : zr.x7(bI.aOn()) ? zr.dY() - b9 - dH.gap : b3.b9 - b9 - x9.xA() * dH.gap
	}
	this.aBM = function() {
		for (var ai = 0; ai < 2; ai++) mD[ai] = aR.canvas.y6(gZ.get(3), 8 - ai, aJ.a21), mD[ai] = aR.canvas.aAe(mD[ai])
	}, this.q = function() {
		aOU = -1e4, aOT = aOX = 0, aOW = -1, this.mO = !1, aAk = aOV = !1, aOP = [aOO = aOS = 0, 0], aOQ = [1, 1], aOR = [], this.resize()
	}, this.resize = function() {
		b9 = fV.b9, this.b4 = 4 * b9, (canvas = document.createElement("canvas")).width = this.b4, canvas.height = b9, f4 = canvas.getContext("2d", {
			alpha: !0
		}), aW()
	}, this.gC = function() {
		aAk && aW()
	}, this.df = function(r, s) {
		return !!this.mO && !(r < b3.b4 - this.b4 - dH.gap || s < dY() || (bK.bY || this.a4I(bK.bL) && (vs.vt && vs.xG(), k6.yM.a4G(r > b3.b4 - dH.gap - this.b4 / 2 ? 1 : 0)), 0))
	}, this.fA = function() {
		0 < aOT ? 0 === --aOT && ub() : this.mO ? 180 == --aOS && 3 * aOP[0] < aOQ[0] ? ub() : aOP[0] >= aOQ[0] ? aOV ? jy.aOj.a4o() : jy.aOj.a4r() : aOP[1] >= aOQ[1] ? aOT = 4 : aOS <= 0 && ub() : ! function() {
			var aOi = bu.gE();
			if (aOi % 40 == 14) {
				if (aOX) return !(aOi < aOX) && !(aOi < aOU + 535) && (aOX = aOi + 1071, aR.bc.aMY()) ? (aOf(), 1) : 0;
				(1 === my.mz || (bK.fR ? fT.oW() : fL.ge[fZ[0]]) >= je.kI(96 * bK.a2l, 100)) && (aOX = aOi + 535)
			}
			return
		}() && 0 <= aOW && (bI.be(250, L(419, [fL.fM[aOW]]), 673, aOW, aJ.eA, aJ.bg, -1, !0), aOf())
	}, this.a4s = function() {
		this.mO && aOP[0] < aOQ[0] && ub()
	}, this.a4J = function(player, aOk) {
		var aOl = L(aOk ? 420 : 421, [fL.fM[player]]),
			aOl = (bI.be(450, aOl, 257, player, aOk ? aJ.a1K : aJ.a1W, aJ.bg, -1, !0), aOR.push(player), aAk = !0, bK.bX ? Math.max(aOQ[0], aOQ[1]) : fL.ge[player]),
			aOl = Math.max(aOl, 1);
		aOk ? aOP[0] += aOl : aOP[1] += aOl, player === bK.bL && (aOO = aOk ? 1 : -1)
	}, this.eC = function() {
		var s;
		this.mO && (s = dY(), eD.drawImage(canvas, b3.b4 - this.b4 - dH.gap, s))
	}, this.a4O = function(player) {
		return 0 === aOS && !!aR.bc.a3o(1) && !!aR.bc.ye(player) && !(10 <= fa[player] && !aR.bc.aMo(player, 9) || !bK.bX && ((player = bu.gE()) < aOU + 100 || player < 1607 || 9 === bK.k7 && !fT.oc()))
	}, this.a4I = function(o4) {
		if (!aR.bc.a3o(1)) return !1;
		if (!aR.bc.ye(o4)) return !1;
		if (!this.mO) return !1;
		for (var ai = aOR.length - 1; 0 <= ai; ai--)
			if (aOR[ai] === o4) return !1;
		return !0
	}, this.a0A = function(player) {
		aOW = player
	}
}

function aNV(gF, pW) {
	return 0 <= gF ? je.kI(gF, pW) : -je.kI(-gF, pW)
}

function aFU(er) {
	return er * er
}

function sm(gF, pW) {
	return pW < gF ? gF : pW
}

function uW(gF, pW) {
	return gF < pW ? gF : pW
}

function gt(gF, er, pW) {
	return er < gF ? gF : pW < er ? pW : er
}

function aOp(er, ae) {
	for (var iJ = je.kI(er + 1, 2), ai = 0; ai < ae; ai++) iJ = je.kI(iJ + je.kI(er, iJ), 2);
	return iJ
}

function a2h(er, ae) {
	return er < 1 ? 0 : aOp(er, ae)
}

function aA5(g, j, mL, mN, k, l, mM, aHD) {
	return !(g + mL <= k || j + mN <= l || k + mM <= g || l + aHD <= j)
}

function aA4(g, j, mL, mN, k, l, mM, aHD) {
	return g <= k && j <= l && k + mM <= g + mL && l + aHD <= j + mN
}

function aOq(er) {
	return Math.floor(!!er * (1 + Math.log2(er + .5)))
}

function aOr() {
	var iR, iS, ii;

	function aOy() {
		for (var colors = new Array(11), ai = 0; ai < 11; ai++) {
			var nu = bz.c0.data[163 + ai].value.split(",");
			colors[ai] = new Uint8Array(3);
			for (var gF = 0; gF < 3; gF++) gF < nu.length && (colors[ai][gF] = Number(nu[gF]))
		}
		return colors
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(216), [new aM("⬅️ " + L(10), function() {
		ax.ic()
	})]), iS = new iW(iR.iX, ((ii = []).push(function() {
		var hW = new il;
		return hW.im(L(422)), hW.jd("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", hW.jd(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), hW
	}()), ii.push(function() {
		var hW = new il,
			oz = (hW.im(L(423)), bz.c0.data[174].value),
			v2 = hW.m5(oz.length + " / 180"),
			aIE = (v2.style.textAlign = "center", new iu(0, 1, function(aH) {
				var aH = aH.target.value,
					nt = aH.length;
				v2.textContent = nt + " / 180", nt <= 180 && bz.cG.cH(174, aH)
			}));
		return aIE.aH.rows = 6, aIE.aH.style.fontSize = "1em", aIE.iv(oz), hW.ir(aIE), hW
	}()), ii.push(function() {
		var hW = new il;
		hW.im(L(21));
		for (var ai = 0; ai < 11; ai++) {
			var a69 = hW.ir(new a7(bz.c0.data[163 + ai]));
			ai && (a69.aH.style.marginTop = "0.6em")
		}
		return hW.ir(new m4([new aM(L(406), function() {
			for (var data = bz.c0.data, ai = 163; ai < 174; ai++) data[ai] && bz.c0.nC(ai, data[ai].jm);
			ax.ic(), ax.ib()[31] = null, ax.gu(31)
		}).button])), hW
	}()), ii.push(function() {
		var hW = new il;
		return hW.im("Targeting"), hW.jd(L(407)), hW.ir(new a7(bz.c0.data[175], 0, 0)), hW
	}()), ii.push(function() {
		var hW = new il;
		return hW.im(L(119)), hW.ir(new m4([new aM(L(28), function() {
			(new aMw).show(bz.c0.data[174].value, aOy(), -1)
		}).button])), hW
	}()), ii.push(function() {
		var hW = new il,
			aOz = (hW.im(L(424)), hW.jd(L(425)), new a7(bz.c0.data[176], 1, 0)),
			aP0 = (hW.ir(aOz), new aM(L(426), function(aH) {
				return aP1.button.textContent === L(286) && bM.aZ.aI4(0) && (aR.az.aCt(aH), aI5(), bM.qu.aCO(bz.c0.data[176].value, aOy(), bz.c0.data[175].value, bz.c0.data[174].value)), !0
			}, 1)),
			aI5 = function() {
				aP1.button.textContent = L(285), aP0.aN(1), aP0.button.style.color = aJ.eA
			},
			aP1 = new aM(L(285), function(aH) {
				return aH.textContent === L(285) ? (aH.textContent = L(286), aP0.aN(0), aP0.button.style.color = aJ.iD) : aI5(), !0
			});
		return hW.ir(new m4([aP1.button, aP0.button])), hW
	}()), ii))
}

function aIs() {
	this.aM3 = function(nu) {
		nu.fill(0)
	}, this.aP2 = function(nu) {
		for (var ae = nu.length, ai = 0; ai < ae; ai++) nu[ai] = []
	}, this.aKN = function(a8s, e6) {
		for (var a8t = oi.aP3, ai = 0; ai < 3; ai++) a8t[ai] = e6 * a8s[ai];
		return a8t
	}, this.aKO = function(a8s, a8t, aP4) {
		for (var uo = 0, ai = 0; ai < 3; ai++) uo += Math.abs(a8s[ai] - a8t[ai]);
		return aP4 <= uo
	}, this.aKP = function(a8s, aP5) {
		for (var ai = 0; ai < 3; ai++) a8s[ai] = je.jf(a8s[ai] + aP5, 0, 255);
		return a8s
	}, this.ig = function(nu, h5, h6) {
		h6 = h6 || nu.length - 1;
		for (var oS = 0, ai = h5 = h5 || 0; ai <= h6; ai++) oS += nu[ai];
		return oS
	}, this.aP6 = function(nu, aP7) {
		for (var ai, a9t, ae = nu.length, aP8 = [], gF = ae - 1; 0 <= gF; gF--) {
			for (ai = a9t = 0; ai < ae; ai++) aP7(nu[ai]) < aP7(nu[a9t]) && (a9t = ai);
			ae--, aP8.push(nu[a9t]), nu[a9t] = nu[ae], nu.pop()
		}
		return aP8
	}, this.min = function(nu) {
		var ai, er, ae = nu.length;
		if (0 === ae) return 0;
		for (er = nu[0], ai = 1; ai < ae; ai++) er = Math.min(er, nu[ai]);
		return er
	}, this.max = function(nu) {
		var ae = nu.length;
		if (0 === ae) return 0;
		for (var er = nu[0], ai = 1; ai < ae; ai++) er = Math.max(er, nu[ai]);
		return er
	}, this.a5W = function(nu, er) {
		for (var ae = nu.length, nt = 0, ai = 0; ai < ae; ai++) nt += nu[ai] > er;
		return nt
	}, this.aP9 = function(aG2, aG5, min) {
		for (var ae = aG5[0], ai = ae - 1; 0 <= ai; ai--) aG2[ai] < min && (aG2[ai] = aG2[--ae]);
		aG5[0] = ae
	}, this.aPA = function(nu, ae, value) {
		for (var ai = 0; ai < ae; ai++) nu[ai] -= value
	}, this.aCD = function(nu) {
		for (var ae = nu.length, ai = 0; ai < ae; ai++)
			if ("string" != typeof nu[ai]) return !1;
		return !0
	}, this.j0 = function(en, nu, aPB) {
		nu.fill(0);
		for (var qS = en.split(","), ae = Math.min(qS.length, nu.length), ai = 0; ai < ae; ai++) nu[ai] = Math.min(parseInt(qS[ai]), aPB)
	}, this.ih = function(en, nu, aI) {
		nu.fill("");
		for (var qS = en.split('"'), ae = Math.min(qS.length, 2 * nu.length), jc = 0, ai = 1; ai < ae; ai += 2) nu[jc++] = qS[ai].slice(0, aI)
	}, this.a5V = function(nu, nt) {
		if (0 === nt) nu.fill(0);
		else {
			var oS = this.ig(nu),
				ae = nu.length;
			if (0 === oS) nu.fill(je.kI(nt, ae));
			else
				for (var ai = 0; ai < ae; ai++) nu[ai] = je.kI(nt * nu[ai], oS);
			if (0 === (oS = this.ig(nu))) nu[1] = nt;
			else
				for (var jc = 0; oS++ < nt;) nu[jc = (jc + 1) % ae] && nu[jc]++
		}
	}, this.aGq = function(nu) {
		if (!nu) return 0;
		var ae = nu.length;
		if (0 === ae) return 0;
		for (var er = nu[ae - 1], ai = ae - 2; 0 <= ai; ai--)
			if (nu[ai] !== er) return ai + 2;
		return 1
	}, this.s2 = function(nu) {
		for (var oS = 0, ai = 0; ai < nu.length; ai++) oS += nu[ai].length;
		return oS
	}, this.aPC = function(aPD) {
		for (var nu = [], ai = 0; ai < aPD.length; ai++) nu = nu.concat(aPD[ai]);
		return nu
	}, this.has = function(nu, er) {
		for (var ae = nu.length, ai = 0; ai < ae; ai++)
			if (nu[ai] === er) return !0;
		return !1
	}
}

function eL() {
	this.aPE = 32, this.r = 0, this.s = 0, this.a6N = 0, this.aPF = 0, this.aPG = 4, this.eK = null, this.aO0 = new Int16Array(9), this.q = function() {
		this.a6N = 1 + je.kI(t.u - 1, this.aPE), this.aPF = 1 + je.kI(t.v - 1, this.aPE), this.eK = new Array(this.a6N * this.aPF), aR.ie.aP2(this.eK);
		var r, s, aO0 = this.aO0,
			b4 = this.a6N;
		for (r = -1; r <= 1; r++)
			for (s = -1; s <= 1; s++) aO0[3 * (1 + s) + 1 + r] = s * b4 + r
	}, this.a4A = function(aPI, ai) {
		return this.eK[ai].push(aPI), this.eK[ai].length - 1
	}, this.aNr = function(aPJ, aNY, aNh) {
		var aPK, aPL, aNY = hQ.hR(aNY),
			aNh = hQ.hR(aNh);
		return aNY === aNh ? aPJ : (aPK = this.eK[aNY].pop(), this.eK[aNY].length === aPJ ? this.a4A(aPK, aNh) : (aPL = this.eK[aNY][aPJ], this.eK[aNY][aPJ] = aPK, h4.aZ.hF[aPK] = aPJ, this.a4A(aPL, aNh)))
	}
}

function a3I() {
	this.cZ = function(eo) {
		for (var a4l = cM, size = a4l.cR(eo), es = 7 + 9 * a4l.cR(1), nu = [], ai = 0; ai < size; ai++) nu.push(String.fromCharCode(a4l.cR(es)));
		return nu.join("")
	}
}

function aEZ(av, data) {
	var ae = data.aEX.length,
		aPM = document.createElement("div"),
		aPN = document.createElement("div"),
		aCU = document.createElement("div"),
		aPO = new Array(ae),
		ii = new Array(ae),
		aPP = new Array(data.aCp.length),
		aPQ = aR.color.a18(70, 70, 0, .35);

	function i4() {
		this.style.backgroundColor = aR.color.i4(aPQ, 160)
	}

	function aPU() {
		this.style.backgroundColor = aPQ
	}

	function a83() {
		var gF;
		for (av.style.font = aR.az.f8(0, aR.az.aCk(.026, .5, .03)), ai = 1; ai < aPP.length; ai++) aR.az.bD(aPP[ai], 4);
		if (aR.az.bD(aPM, 2), ae) {
			for (var xh, mL = aPM.offsetWidth, mM = aCU.offsetWidth, ai = 0; ai < aPP.length; ai++) xh = .01 * data.aEY[ai] * mM, aPP[ai].style.width = (100 * xh / mL).toFixed(2) + "%";
			var kG = data.aEX[0].length;
			for (ai = 0; ai < ae; ai++)
				for (aR.az.bD(aPO[ai], 2), gF = 1; gF < kG; gF++) aR.az.bD(ii[ai][gF], 4);
			aPN.aPR && (aPN.scrollTop = aPN.aPR)
		}
	}
	this.resize = function() {
			a83(), a83()
		}, av.style.display = "flex", av.style.flexDirection = "column", aPN.style.overflowX = "hidden", aPN.style.overflowY = "auto", aPN.addEventListener("scroll", function() {
			this.aPR = this.scrollTop
		}),
		function() {
			var iP, ai, aEX = data.aEX,
				kG = ae ? aEX[0].length : 0;
			for (ai = 0; ai < ae; ai++) {
				aPO[ai] = document.createElement("div"), aPO[ai].style.backgroundColor = function(ai) {
					return ai % 2 == 1 ? aR.color.a18(130, 130, 130, .35) : aJ.a19
				}(ai), aPO[ai].style.width = "100%", aPO[ai].style.display = "flex", ii[ai] = new Array(kG);
				for (var gF = 0; gF < kG; gF++) ii[ai][gF] = iP = document.createElement("div"), iP.style.display = "flex", iP.style.justifyContent = "center", iP.style.wordBreak = "break-all", iP.style.padding = "0.4em 0em", iP.style.width = data
					.aEY[gF] + "%", iP.innerHTML = aEX[ai][gF].er, 1 === aEX[ai][gF].gj && (iP.name = "" + ai, iP.style.color = aJ.iD, iP.style.backgroundColor = aPQ, iP.addEventListener("mouseover", i4), iP.addEventListener("mouseout", aPU),
						function(iP, d8, cQ) {
							2147483647 !== cQ && iP.addEventListener("click", function() {
								cN.ha(30), cN.et(30, d8), cM.q(cN.hl), this.style.backgroundColor = aPQ, ax.gu(8, ax.d2, new lz(25, {
									ux: 0,
									d8: cI.bx.cJ(cI.bx.cK(5)),
									cQ: cQ
								}))
							})
						}(iP, aEX[ai][gF].d8, aEX[ai][gF].cQ)), aPO[ai].appendChild(iP)
			}
			for (aPM.style.display = "flex", aPM.style.backgroundColor = aR.color.a18(0, 120, 0, .35), ai = 0; ai < aPP.length; ai++) aPP[ai] = iP = document.createElement("div"), iP.style.display = "flex", iP.style.justifyContent = "center", iP
				.style.wordBreak = "break-all", iP.style.padding = "0.4em 0em", iP.style.width = data.aEY[ai] + "%", iP.innerHTML = data.aCp[ai], aPM.appendChild(iP)
		}();
	for (var ai = 0; ai < ae; ai++) aCU.appendChild(aPO[ai]);
	aPN.appendChild(aCU), av.appendChild(aPM), av.appendChild(aPN)
}

function aPW() {
	var iR, iS, iT, ii;

	function iV() {
		iZ(), 2 !== bK.data.aIncomeType && (bK.data.aIncomeData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		2 === bK.data.aIncomeType ? (aR.ie.j0(iT.f7(), bK.data.aIncomeData, 255), aR.ie.max(bK.data.aIncomeData) || (bK.data.aIncomeType = 0)) : 1 !== bK.data.aIncomeType || bK.data.aIncomeValue || (bK.data.aIncomeType = 0)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(254), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), hW.io(new ip({
			iq: [L(35), L(36), L(14)],
			value: bK.data.aIncomeType
		}, function(a8) {
			iZ(), 2 !== a8 || bK.data.aIncomeData || (bK.data.aIncomeData = new Uint8Array(bK.g6)), bK.data.aIncomeType = a8, ax.gu(22)
		})), ii.push(hW)
	}(ii = []), function(ii) {
		var hW;
		1 === bK.data.aIncomeType && ((hW = new il).im("Value"), hW.ir(new a7({
			a8: -1,
			value: bK.data.aIncomeValue
		}, 1, 0, function(aH) {
			var value = je.jf(Math.floor(aH.target.value), 0, 255);
			aH.target.value = bK.data.aIncomeValue = value
		})), ii.push(hW))
	}(ii), function(ii) {
		var hW;
		2 === bK.data.aIncomeType && ((hW = new il).im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.aIncomeData, 4)), hW.ir(iT), ii.push(hW))
	}(ii), ii))
}

function aCy() {
	this.fA = function(hl) {
		var id, sG, dj;
		for (cM.q(hl), cM.a8 += 2, dj = 8 * cM.size; cM.a8 + 8 <= dj;) id = cM.cR(4), sG = cM.cR(9), 0 === id ? this.a5O(id, sG, cM.cR(22)) : 1 === id ? this.a5O(id, sG, cM.cR(10), cM.cR(10)) : 2 === id ? this.a5O(id, sG, cM.cR(10), cM.cR(9)) :
			3 === id ? this.a5O(id, sG, cM.cR(10), cM.cR(27)) : 4 === id ? this.a5O(id, sG, cM.cR(10), cM.cR(16)) : 5 === id || 6 === id ? this.a5O(id, sG, cM.cR(10)) : 7 === id ? this.a5O(id, sG, cM.cR(1)) : 10 === id ? this.a5O(id, sG, cM.cR(
				20), cM.cR(22)) : this.a5O(id, sG)
	}, this.aEz = [], this.aPX = function() {
		for (var aPZ = 0, aPa = 0, aPb = 0, aPc = 0, aPd = 0, aPe = 0, ai = 0; ai < 512; ai++) aPZ += fL.gl[ai], aPa += fL.ge[ai], aPb += fL.jD[ai], aPc += h4.aZ.h7[ai];
		aPd += h4.aZ.hB, aPe += my.mz, this.aEz.push(aPb % 1073741824 * 4 + (aPZ + aPa + aPc + aPd + aPe) % 4)
	}, this.a5O = function(id, sG, sH, mA) {
		0 === id ? k6.aCx.yP(sG, sH) : 1 === id ? k6.aCx.yU(sG, sH, mA) : 2 === id ? k6.aCx.a41(sG, sH, mA) : 3 === id ? k6.aCx.bb(sG, sH, mA) : 4 === id ? k6.aCx.bh(sG, sH, mA) : 5 === id ? k6.aCx.a4D(sG, sH) : 6 === id ? k6.aCx.a4E(sG, sH) :
			7 === id ? k6.aCx.a4G(sG, sH) : 8 === id ? k6.aCx.a4K(sG) : 9 === id ? k6.aCx.a4N(sG) : 10 === id && k6.aCx.yX(sG, sH >> 10, mA, sH % 1024)
	}
}

function qG(hv) {
	var ug = document.createElement("div");

	function hz() {
		gr.i3() || (ug.style.backgroundColor = aR.color.i4(aJ.gI, 50))
	}

	function i0() {
		ug.style.backgroundColor = aJ.gI
	}
	this.cH = function(i2) {
			ug.textContent = i2
		}, this.show = function() {
			document.body.appendChild(ug)
		}, this.resize = function() {
			var b9 = aR.az.b0(.03, .5);
			ug.style.width = 2 * b9 + "px", ug.style.height = b9 + "px", ug.style.font = aR.az.f8(1, .75 * b9), aR.az.bD(ug, 4), aR.az.bD(ug, 2)
		}, this.cC = function() {
			ug.onclick = null, ug.onmouseover = null, ug.onmouseout = null, ax.removeChild(document.body, ug), ug = null
		}, ug.style.position = "absolute", i0(), ug.style.color = aJ.eA, ug.style.zIndex = "3", ug.style.right = "0", ug.style.top = "0", ug.style.display = "flex", ug.style.justifyContent = "center", ug.style.alignItems = "center", ug.style
		.userSelect = "none", ug.style.outline = "none", ug.onclick = hv, ug.onmouseover = hz, ug.onmouseout = i0
}

function aLZ() {
	this.gN = 0, this.gap = 0, this.uq = 0, this.aBo = 0, this.q = function() {
		this.resize()
	}, this.resize = function() {
		this.gN = .0022 * aR.az.dF(.5) * b3.dG, this.uq = this.gN / b3.b5, this.gap = Math.max(Math.floor((bA.bB.bC() ? .0114 : .01296) * b3.dG), 2), this.aBo = this.gap / b3.b5
	}
}

function aPf() {
	var en;
	10 === t.fH ? en =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === t.fH ? en =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === t.fH ? en =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === t.fH ? en =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === t.fH ? en =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === t.fH ? en =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === t.fH ? en =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === t.fH ? en =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === t.fH ? en =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === t.fH ? en =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === t.fH ? en =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === t.fH && (en =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new aPg).cZ(en)
}

function aGX() {
	this.mO = !1;
	this.a8h = [], this.a8g = 100;
	var g, j, gap, wK, aPh, aPj, aPk = 0,
		aPl = new Array(9),
		aPm = [],
		aPn = [],
		aPo = 0,
		aPp = 0,
		aPq = 0,
		aPr = 0;

	function aQ0() {
		aPl.sort(function(gF, pW) {
			return pW.ew - gF.ew
		});
		for (var en = "" + aPl[0].bH, ai = 1; ai < 9; ai++) en += "," + aPl[ai].bH;
		for (ai = 0; ai < 9; ai++) en += "," + aPl[ai].ew;
		bz.c0.nC(120, en)
	}
	this.q = function() {
		for (var aPs = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], ai = 0; ai < aPs.length; ai++) {
			var color = 6 === aPs[ai] ? aJ.y1 : aJ.aK;
			this.a8h.push(aR.canvas.y6(gZ.get(3), aPs[ai], color))
		}
		for (ai = 0; ai < y7.at.a8i; ai++) aPn.push(y7.at.aPt - y7.at.a8i + ai);
		for (ai = 0; ai < y7.at.aPu; ai++) aPn.push(y7.at.y9 + ai);
		var aPv = y7.at.aPw(mF.aPv);
		for (ai = 0; ai < aPv.length; ai++) aPn.push(aPv[ai]);
		! function() {
			var ai, nu = bz.c0.data[120].value.split(",");
			if (18 !== nu.length)
				for (ai = 0; ai < 9; ai++) aPl[ai] = {
					bH: 1015 + ai,
					ew: 0
				};
			else
				for (ai = 0; ai < 9; ai++) {
					var er = parseInt(nu[ai]),
						iJ = (er = 0 <= er && er < y7.at.aPt ? er : 0, parseInt(nu[ai + 9]));
					iJ = 0 <= iJ && iJ < 1e3 ? iJ : 0, aPl[ai] = {
						bH: er,
						ew: iJ
					}
				}
		}()
	}, this.show = function(ds, dt, aNu) {
		var ai;
		if (aPo = ds, aPp = dt, aPk = aNu || 0, this.mO = !0, aPm = [], 0 === aPk)
			for (ai = 0; ai < 9; ai++) aPm.push(aPl[ai].bH);
		else {
			var pW = 49 * aPk,
				aNu = pW - 49;
			for (aNu >= aPn.length && (aPk = 1, aNu = 0, pW = 49), ai = aNu = (pW = Math.min(pW, aPn.length)) - 49; ai < pW; ai++) aPm.push(aPn[ai])
		}
		aPm.push(1024);
		aNu = aPm.length, wK = Math.floor((bA.bB.bC() ? .075 : .0468) * b3.dG), gap = Math.floor(wK / 3), (aPq = 10 * (aPh = wK + gap)) > b3.b4 && (aPq = b3.b4, gap = (aPh = aPq / 10) - (wK = 3 * aPh / 4)), aPj = je.kI(aNu, 10) + !!(aNu % 10), (
			aPr = aPj * aPh) > b3.b9 && (aPr = b3.b9, gap = (aPh = aPr / aPj) - (wK = 3 * aPh / 4)), aNu = .5 * gap;
		g = Math.min(Math.max(ds - .5 * aPq + aNu, aNu), b3.b4 - aPq + aNu), j = Math.min(Math.max(dt - .5 * aPr + aNu, aNu), b3.b9 - aPr + aNu)
	}, this.df = function(ds, dt, player) {
		if (!this.mO) return !1;
		if (this.go(ds, dt)) {
			ds = je.jf(je.kI(ds - g + .5 * gap, aPh), 0, 9);
			if ((ds += 10 * je.jf(je.kI(dt - j + .5 * gap, aPh), 0, 9)) >= aPm.length) return jS.aw(), !0;
			dt = aPm[ds];
			if (1024 === dt) return this.show(aPo, aPp, aPk + 1), !0;
			! function(bH) {
				for (var ai = 0; ai < 9; ai++) aPl[ai].ew = Math.floor(.99 * aPl[ai].ew);
				for (ai = 0; ai < 9; ai++)
					if (bH === aPl[ai].bH) return aPl[ai].ew = Math.min(aPl[ai].ew + 30, 999), aQ0();
				aPl.splice(5, 0, {
					bH: bH,
					ew: Math.max(aPl[4].ew, 30)
				}), aPl.pop(), aQ0()
			}(dt), player === bK.bL ? k6.yM.bJ(dt) : k6.bc.bG(dt, player)
		}
		return jS.aw(), !0
	}, this.go = function(ds, dt) {
		return !(ds < g - .5 * gap || dt < j - .5 * gap || g + aPq - .5 * gap <= ds || j + aPr - .5 * gap <= dt)
	}, this.eC = function() {
		eD.fillStyle = aJ.bg, eD.fillRect(g - .5 * gap, j - .5 * gap, aPq, aPr);
		for (var jc = .5 * dH.gN, ae = (eD.lineWidth = dH.gN, eD.strokeStyle = eD.fillStyle = aJ.eA, eD.strokeRect(g - .5 * gap + jc, j - .5 * gap + jc, aPq - 2 * jc, aPr - 2 * jc), eD.imageSmoothingEnabled = !0, aPm.length), ai = 0; ai <
			ae; ai++) this.y8(aPm[ai], eD, g + ai % 10 * aPh, j + je.kI(ai, 10) * aPh, wK);
		eD.imageSmoothingEnabled = !1
	}, this.y8 = function(bH, uH, r, s, wK) {
		var dx;
		bH >= 1024 - y7.at.a8i ? (dx = wK / this.a8g, uH.setTransform(dx, 0, 0, dx, r, s), uH.drawImage(this.a8h[bH - 1024 + y7.at.a8i], 0, 0), uH.setTransform(1, 0, 0, 1, 0, 0)) : (aR.az.textAlign(uH, 1), aR.az.textBaseline(uH, 1), uH.font = aR
			.az.f8(0, .89 * wK), uH.fillText(y7.at.a8j(bH), r + .5 * wK, s + (.35 - aR.az.a8W + .56) * wK))
	}
}

function aC2() {
	this.nu = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aLv = function() {
		for (var aQ2 = [], nu = this.nu, ae = nu.length, ai = 0; ai < ae; ai++) aQ2.push(nu[ai]);
		var oC = bz.c0.data[12].jm;
		for (ai = 0; ai < ae; ai++)
			if (aQ2[ai] === oC) {
				aQ2.splice(ai, 1), ae--;
				break
			} aQ2.sort(), ae++, aQ2.unshift(oC);
		try {
			if ("undefined" == typeof Intl) return aQ2;
			for (ai = 0; ai < ae; ai++) {
				var en = new Intl.DisplayNames([aQ2[ai]], {
					type: "language"
				}).of(aQ2[ai]);
				en !== aQ2[ai] && (aQ2[ai] = aQ2[ai] + ": " + en)
			}
		} catch (aH) {
			console.log("error 3646: " + aH)
		}
		return aQ2
	}, this.aLw = function(a7r) {
		for (var en = bz.c0.data[12].value, ae = a7r.length, ai = 0; ai < ae; ai++)
			if (en === a7r[ai].split(":")[0]) return ai;
		return 0
	}, this.aCK = function(aQ4) {
		if (aQ4 && !(aQ4.length < 2)) {
			aQ4 = aQ4.split("-")[0].toLowerCase();
			for (var nu = this.nu, ae = nu.length, ai = 0; ai < ae; ai++)
				if (aQ4 === nu[ai]) return ai
		}
		return -1
	}
}

function aL8() {
	var aQ7, aQ8, aQ9, aQA, aQB, aQC, aQD, aQE, aQF, aQG, aQ5 = [
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
		aQ6 = [
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

	function aQL(af, dj) {
		for (var ai = af; ai < dj; ai++) aQ7[ai] = 4 * je.kI(64 * kJ.random(), kJ.value(100)), aQ8[ai] = 4 * je.kI(64 * kJ.random(), kJ.value(100)), aQ9[ai] = 4 * je.kI(64 * kJ.random(), kJ.value(100))
	}

	function aQK(af, dj) {
		for (var colorsData = bK.data.colorsData, ai = af; ai < dj; ai++) {
			var er = colorsData[ai];
			aQ7[ai] = 4 * (er >> 12), aQ8[ai] = 4 * (er >> 6 & 63), aQ9[ai] = 4 * (63 & er)
		}
	}

	function aQY(dx, aQa) {
		w[dx] = 0, w[dx + 1] = 0, w[dx + 2] = aQa, w[dx + 3] = 0, aQb(dx)
	}

	function aQb(dx) {
		var r;
		jU.c || (r = x.dX(dx), dx = x.dY(dx), jU.c = r >= h.i[0] && r <= h.i[2] && dx >= h.i[1] && dx <= h.i[3])
	}
	this.aFC = new Int32Array(4), this.aBM = function() {
		var aFC = this.aFC;
		aFC[0] = -4 * t.u, aFC[1] = 4, aFC[2] = -aFC[0], aFC[3] = -aFC[1]
	}, this.q = function() {
		if (aQ7 = new Uint8Array(bK.g6), aQ8 = new Uint8Array(bK.g6), aQ9 = new Uint8Array(bK.g6), aQA = new Uint8Array(bK.g6), aQB = new Uint8Array(bK.g6), aQC = new Uint8Array(bK.g6), aQD = new Uint8Array(bK.g6), aQE = new Uint8Array(bK.g6),
			aQF = new Uint8Array(bK.g6), aQG = new Uint8Array(bK.g6), this.a2C = new Uint8Array(bK.g6), bK.fR)
			for (var gV = gT.gV, ai = bK.g6 - 1; 0 <= ai; ai--) {
				var iJ = gV[ai],
					kG = je.kI((aQ6[iJ][3] + 1) * kJ.random(), kJ.value(100));
				aQ7[ai] = aQ5[iJ][0] + kG * aQ6[iJ][0], aQ8[ai] = aQ5[iJ][1] + kG * aQ6[iJ][1], aQ9[ai] = aQ5[iJ][2] + kG * aQ6[iJ][2]
			} else 0 === bK.data.colorsType ? bK.data.selectableColor ? (aQK(0, bK.gd), aQL(bK.gd, bK.g6)) : aQL(0, bK.g6) : aQK(0, bK.g6);
		! function() {
			var ai, iP;
			for (ai = bK.g6 - 1; 0 <= ai; ai--) iP = je.kI(aQ7[ai] + aQ8[ai] + aQ9[ai], 3), aQ7[ai] += aNV(iP - aQ7[ai], 2), aQ8[ai] += aNV(iP - aQ8[ai], 2), aQ9[ai] += aNV(iP - aQ9[ai], 2), aQ7[ai] -= aQ7[ai] % 4, aQ8[ai] -= aQ8[ai] % 4, aQ9[
				ai] -= aQ9[ai] % 4
		}(),
		function() {
			for (var ai = bK.g6 - 1; 0 <= ai; ai--) aQ7[ai] += je.kI(ai, 128), aQ8[ai] += je.kI(ai % 128, 32), aQ9[ai] += je.kI(ai % 32, 8), aQA[ai] = ai % 8
		}(), this.aQO(),
			function() {
				for (var ai = bK.g6 - 1; 0 <= ai; ai--) aQB[ai] = aQ7[ai] < 32 ? aQ7[ai] + 32 : aQ7[ai] - 32, aQC[ai] = aQ8[ai] < 32 ? aQ8[ai] + 32 : aQ8[ai] - 32, aQD[ai] = aQ9[ai] < 32 ? aQ9[ai] + 32 : aQ9[ai] - 32
			}(),
			function() {
				for (var ai = bK.g6 - 1; 0 <= ai; ai--) aQE[ai] = 235 < aQ7[ai] ? aQ7[ai] - 20 : aQ7[ai] + 20, aQF[ai] = 235 < aQ8[ai] ? aQ8[ai] - 20 : aQ8[ai] + 20, aQG[ai] = 235 < aQ9[ai] ? aQ9[ai] - 20 : aQ9[ai] + 20
			}()
	}, this.aKI = function(player) {
		var nu = oi.aDz;
		return nu[0] = aQ7[player], nu[1] = aQ8[player], nu[2] = aQ9[player], nu
	}, this.aQO = function() {
		for (var ai = bK.g6 - 1; 0 <= ai; ai--) this.a2C[ai] = aQ7[ai] + aQ8[ai] + aQ9[ai] < 280 ? 0 : 1
	}, this.dX = function(dx) {
		return je.kI(dx, 4) % t.u
	}, this.dY = function(dx) {
		return je.kI(dx, 4 * t.u)
	}, this.y = function(r, s) {
		return Math.floor(4 * (s * t.u + r))
	}, this.aQR = function(dx) {
		var aFC = this.aFC;
		return this.aQS(dx + aFC[0]) || this.aQS(dx + aFC[1]) || this.aQS(dx + aFC[2]) || this.aQS(dx + aFC[3])
	}, this.aQT = function(dx) {
		var aFC = this.aFC;
		return this.ym(dx + aFC[0]) || this.ym(dx + aFC[1]) || this.ym(dx + aFC[2]) || this.ym(dx + aFC[3])
	}, this.a3i = function(dx, player) {
		var aFC = this.aFC;
		return this.a3m(dx + aFC[0], player) || this.a3m(dx + aFC[1], player) || this.a3m(dx + aFC[2], player) || this.a3m(dx + aFC[3], player)
	}, this.yi = function(dx) {
		return 208 <= w[dx + 3]
	}, this.ys = function(player, dx) {
		return this.yi(dx) && this.aQU(player, dx)
	}, this.aQU = function(player, dx) {
		return player === this.yj(dx)
	}, this.aQV = function(dx) {
		return 208 <= w[dx + 3] && w[dx + 3] < 224
	}, this.aFD = function(dx) {
		return 224 <= w[dx + 3] && w[dx + 3] < 248
	}, this.a2S = function(dx) {
		for (var aFC = this.aFC, ai = 3; 0 <= ai; ai--)
			if (this.kV(dx + aFC[ai])) return !0;
		return !1
	}, this.z3 = function(dx) {
		return this.yi(dx) || this.yr(dx)
	}, this.kV = function(dx) {
		return 0 === w[dx + 3] && 2 === w[dx + 2]
	}, this.yr = function(dx) {
		return 0 === w[dx + 3] && 1 === w[dx + 2]
	}, this.aQW = function(dx) {
		return 0 === w[dx + 3] && 3 === w[dx + 2]
	}, this.ym = function(dx) {
		return 0 === w[dx + 3] && 5 === w[dx + 2]
	}, this.aQS = function(dx) {
		return 0 === w[dx + 3] && 3 <= w[dx + 2]
	}, this.a3Q = function(dx) {
		return (w[dx] >> 1 << 8) + w[dx + 1]
	}, this.aQX = function(dx) {
		return 1 & w[dx]
	}, this.a3m = function(dx, player) {
		return this.yr(dx) || this.yi(dx) && player !== this.yj(dx)
	}, this.yj = function(dx) {
		return w[dx] % 4 * 128 + w[dx + 1] % 4 * 32 + w[dx + 2] % 4 * 8 + w[dx + 3] % 8
	}, this.aMM = function(dx) {
		aQY(dx, 1)
	}, this.aQZ = function(dx) {
		aQY(dx, 2)
	}, this.aQc = function(dx, player) {
		w[dx] = aQ7[player], w[dx + 1] = aQ8[player], w[dx + 2] = aQ9[player], w[dx + 3] = 208 + aQA[player], aQb(dx)
	}, this.lK = function(dx, player) {
		w[dx] = aQB[player], w[dx + 1] = aQC[player], w[dx + 2] = aQD[player], w[dx + 3] = 224 + aQA[player], aQb(dx)
	}, this.aFE = function(dx, player) {
		w[dx] = aQE[player], w[dx + 1] = aQF[player], w[dx + 2] = aQG[player], w[dx + 3] = 248 + aQA[player], aQb(dx)
	}
}

function aBv() {
	this.bW = function() {
		for (var ae = bK.gd, jr = jy.result.jr, kG = jr.length, aMC = (cN.ha(17 + 16 * ae + 33 * kG), cN.et(1, 1), cN.et(4, 12), cN.et(10, kG), cN.et(1, +(2 === bK.jx)), cN.et(1, bK.a97 % 2), fL.aMC), ai = 0; ai < ae; ai++) cN.et(16, aMC[ai]);
		for (var ge = fL.ge, ai = 0; ai < kG; ai++) {
			var o4 = jr[ai];
			cN.et(9, o4), cN.et(24, ge[o4])
		}
		bM.aZ.send(bM.aZ.li, cN.hl)
	}
}

function aD0() {
	this.aIa = function(player, a2q, mW) {
		aR.bc.a43(player, mW, a2q) && (a2n.yN(player, a2q), !aR.bc.ms(a2q)) && kD.mp.mq[a2q] && kD.mp.mq[a2q]--
	}, this.aQd = function(player, a2q, mW) {
		aR.bc.aMj(mW, a2q) ? yK.fJ(a2q, oi.a2t[0]) && (a2r.a2s(player, a2q, oi.a2t[0], 1), aR.bc.md(a2q, oi.a2t[0]), jB.a2u(player, a2q), dq.a2w(a2q, oi.a2t[0])) : jB.lC(player, mW, 12)
	}
}

function aBt() {
	this.aQe = function(hZ, aQf) {
		cN.ha(11), cN.et(1, 0), cN.et(6, 4), cN.et(1, aQf ? 1 : 0), cN.et(3, 0 === bK.fC ? aY.bs ? 6 : 0 : bK.bY ? 1 : bK.bX ? 7 : bK.k7 < 7 ? 2 : 8 === bK.k7 ? 4 : 9 === bK.k7 ? 5 : 3), bM.aZ.send(hZ, cN.hl)
	}, this.vJ = function() {
		cN.ha(58), cN.et(1, 0), cN.et(6, 5), cN.et(8, bM.aZ.hk), cN.et(10, aEB.a9g), cN.et(9, aEB.aEs), cN.et(10, hd.he), cN.et(14, hd.lj), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMN = function(j4) {
		cN.ha(27), cN.et(1, 1), cN.et(4, 0), cN.et(22, j4), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMO = function(a3q, mV) {
		cN.ha(25), cN.et(1, 1), cN.et(4, 1), cN.et(10, a3q), cN.et(10, mV), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMP = function(a3q, a2q) {
		cN.ha(24), cN.et(1, 1), cN.et(4, 2), cN.et(10, a3q), cN.et(9, a2q), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMQ = function(a3q, a45) {
		cN.ha(42), cN.et(1, 1), cN.et(4, 3), cN.et(10, a3q), cN.et(27, a45), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMR = function(a3q, pJ) {
		cN.ha(31), cN.et(1, 1), cN.et(4, 4), cN.et(10, a3q), cN.et(16, pJ), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMS = function(mV) {
		cN.ha(15), cN.et(1, 1), cN.et(4, 5), cN.et(10, mV), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMT = function(a8) {
		cN.ha(15), cN.et(1, 1), cN.et(4, 6), cN.et(10, a8), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMU = function(a4H) {
		cN.ha(6), cN.et(1, 1), cN.et(4, 7), cN.et(1, a4H), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMV = function() {
		cN.ha(5), cN.et(1, 1), cN.et(4, 8), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.aMW = function(a3q, j4, mV) {
		cN.ha(47), cN.et(1, 1), cN.et(4, 10), cN.et(10, a3q), cN.et(10, mV), cN.et(22, j4), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.bO = function(aQg, aQh) {
		cN.ha(24), cN.et(1, 1), cN.et(4, 15), cN.et(9, aQh), cN.et(10, aQg), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.bR = function(a5n) {
		cN.ha(14), cN.et(1, 1), cN.et(4, 14), cN.et(9, a5n), bM.aZ.send(bM.aZ.li, cN.hl)
	}, this.bV = function(aQi, target) {
		var ai, ae = aQi.length;
		for (cN.ha(14 + 9 * ae), cN.et(1, 1), cN.et(4, 13), cN.et(9, target), ai = 0; ai < ae; ai++) cN.et(9, aQi[ai]);
		bM.aZ.send(bM.aZ.li, cN.hl)
	}
}

function c8() {
	var aQj = [],
		aHY = [],
		aQk = [];

	function aQm(aq) {
		for (var ap = aq.ap, aQl = [];;) {
			var iJ = function aQo(ap, position) {
				position = ap.indexOf("@", position);
				if (position < 0) return -1;
				var en = ap.substring(position + 1, position + 6);
				if (5 !== en.length) return aQo(ap, position + 1);
				if (aR.aS.startsWith(en, "room")) return aQo(ap, position + 1);
				var aQv = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aQv.test(en)) return aQo(ap, position + 1);
				aQv = ap.substring(position + 6, position + 7);
				if (1 !== aQv.length) return position;
				en = new RegExp("^[ :!.]+$");
				if (!en.test(aQv)) return aQo(ap, position + 1);
				return position
			}(ap, 0);
			if (-1 === iJ) {
				aQl.push(aQp(ap, aq));
				break
			}
			0 === iJ ? aQl.push(aQq(ap.substring(1, 6), aq, iJ)) : (aQl.push(aQp(ap.substring(0, iJ), aq)), aQl.push(aQq(ap.substring(iJ + 1, iJ + 6), aq, iJ))), ap = ap.substring(iJ + 6)
		}
		return aQl
	}

	function aQq(en, aq, iJ) {
		var aIe = function(en) {
				var d8 = bw.bx.by(en, 5),
					aIe = aY.bl.a6q(d8);
				if (aIe) {
					for (aQj.push(aIe); 75 < aQj.length;) aQj.shift();
					return aIe
				}
				for (var aIb = aY.bl.aIb, ai = aIb.length - 1; 0 <= ai; ai--)
					if (aIe = aIb[ai], d8 === aIe.d8) return aQj.push(aIe), aIe;
				for (ai = aQj.length - 1; 0 <= ai; ai--)
					if (aIe = aQj[ai], d8 === aIe.d8) return aQj.push(aIe), aIe;
				return aY.bl.aIf(d8, en, 1, 999999, 999999, 0, 0, 0, 0)
			}(en),
			en = (0 === iJ && 0 === aq.q8.id && aq.ar && (aq.fontSize = aY.ak.a6o(aIe.a5y, aIe.gb), aq.a6m = aY.ak.a6p(aIe.gb)), document.createElement("span"));
		return en.textContent = function(aIe, aq, iJ) {
			if (aIe.aQt) return aIe.aQt--, iJ = 2 === aq.q8.id || (3 === aq.q8.id || 4 === aq.q8.id) && 0 !== iJ, aIe.username + (iJ ? " (" + aIe.aIk + ")" : "");
			if (aq.q8.a6y) return "Redacted " + cI.bx.t3(aIe.d8, 2);
			return aIe.username
		}(aIe, aq, iJ), en.style.display = "inline-block", en.style.color = aY.ak.a5x(aIe.a5y), en.style.cursor = "pointer", en.style.margin = "0", en.style.font = "inherit", en.style.minWidth = en.style.minHeight = "1em", aY.ak.a5z(aIe) && (en
			.style.textDecoration = "underline"), aIe.a4a && (en.style.textDecorationLine = "underline", en.style.textDecorationStyle = "dotted"), aY.ak.a6p(aIe.gb) && (en.style.fontWeight = "bold"), en.onclick = function(aH) {
			aY.bm.rR(aH, aIe)
		}, gr.i3() || (en.onmouseover = function(aH) {
			aY.bn.a60(aH, aIe)
		}), aHY.push(en), en
	}

	function aQp(ap, aq) {
		var aQ = document.createElement("span");
		return aQ.textContent = ap, aQ.style.color = aq.a6n, aQ.style.margin = "0", aQ.style.font = "inherit", aQ
	}

	function aQy(aIe, aIj, d8) {
		d8 !== aIe.d8 || aIe.aIk || (aIe.aIk = aIe.username, aIe.username = aIj)
	}
	this.cC = function() {
		for (var ai = 0; ai < aHY.length; ai++) aHY[ai].onclick = aHY[ai].onmouseover = null;
		aQk = aHY = null
	}, this.transform = function(aq) {
		for (var v1 = document.createElement("div"), aQl = aQm(aq), ai = 0; ai < aQl.length; ai++) v1.appendChild(aQl[ai]);
		0 === aq.q8.id && (v1.vx143 = aq.q8, aQk.push(v1)), v1.style.margin = "0.6em 0.6em", aq.ar && (v1.style.marginLeft = v1.style.marginRight = "inherit"), v1.style.font = "inherit";
		var aQn = 0 < aq.q8.id;
		return aq.a6m && (v1.style.fontWeight = "bold"), aQn && (v1.style.paddingLeft = "0.7em"), aQn && (v1.style.fontStyle = "italic"), v1.style.fontSize = aq.fontSize.toFixed(2) + "em", v1
	}, this.a9l = function(a9j) {
		if (a9j && (2 === a9j.id && 1 === a9j.q9 || 3 === a9j.id && 2 === a9j.q9)) {
			var d8 = 3 === a9j.id ? a9j.target : a9j.d8;
			if (!aY.bl.a6q(d8)) {
				for (var aIj = "Redacted " + cI.bx.t3(d8, 2), aIb = aY.bl.aIb, ai = aIb.length - 1; 0 <= ai; ai--) aQy(aIb[ai], aIj, d8);
				for (ai = aQj.length - 1; 0 <= ai; ai--) aQy(aQj[ai], aIj, d8)
			}
		}
	}, this.aIl = function(d8) {
		for (var aQz = aQk, ai = aQz.length - 1; 0 <= ai; ai--) {
			var iP = aQz[ai];
			if (iP.vx143.d8 === d8) {
				for (; iP.firstChild;) ax.removeChild(iP, iP.firstChild);
				for (var aQl = aQm(aY.ak.al(iP.vx143, aY.ak.am(iP.vx143))), gF = 0; gF < aQl.length; gF++) iP.appendChild(aQl[gF]);
				aQz.splice(ai, 1)
			}
		}
	}, this.qA = function(d8) {
		for (var aQz = aQk, ai = aQz.length - 1; 0 <= ai; ai--) {
			var iP = aQz[ai];
			if (iP.vx143.d8 === d8) {
				for (; iP.firstChild;) ax.removeChild(iP, iP.firstChild);
				iP.vx143.ap = "[Redacted Message]";
				for (var aQl = aQm(aY.ak.al(iP.vx143, aY.ak.am(iP.vx143))), gF = 0; gF < aQl.length; gF++) iP.appendChild(aQl[gF]);
				aQz.splice(ai, 1)
			}
		}
	}
}

function aMX() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a8i = 13, this.aPu = this.emojis.length, this.y9 = 676, this.aPt = 1024, this.aR0 = this.emojis.indexOf("💀"), this.aR1 = this.aR0 + 1, this.aR2 = this.emojis.indexOf("🥇"), this.yA = this.emojis.indexOf("😊"), this.a8j = function(
	er) {
		return er < this.y9 ? String.fromCharCode(55356, 56806 + je.kI(er, 26), 55356, 56806 + er % 26) : this.emojis[Math.min(er - this.y9, this.aPu - 1)]
	}, this.aPw = function(en) {
		for (var ae = en.length - 2, nu = [], ai = 0; ai < ae; ai++) {
			var a8s = en.charCodeAt(ai) - 56806,
				a8t = en.charCodeAt(ai + 2) - 56806;
			0 <= a8s && a8s < 26 && 0 <= a8t && a8t < 26 && (nu.push(26 * a8s + a8t), ai += 3)
		}
		return nu
	}, this.a8F = function(er) {
		return er < this.y9
	}, this.a8f = function(er) {
		return er >= 1024 - this.a8i
	}, this.a8d = function(er) {
		return er >= this.y9 && er < this.y9 + this.aR1
	}
}

function aL5() {
	var ez, b4, s, aR3, aR4, aR5, canvas, f4, aAk, a2z, aR6, aR7, aR8, aR9;
	this.r = 0, this.b9 = 0, this.q = function() {
		aR5 = bK.aRA, aR7 = "rgba(0,100,0,0.8)", aR8 = "rgba(150,0,0,0.8)", aAk = aR6 = !0, a2z = fL.jD[bK.bL], this.resize()
	}, this.resize = function() {
		b4 = Math.floor((bA.bB.bC() ? .305 : .24) * b3.dG), this.b9 = Math.floor(.5 + .13 * b4), b4 = Math.floor(6 * this.b9), ez = aR.az.f8(1, Math.floor(.8 * this.b9)), aR4 = aR.az.f8(1, Math.floor(.45 * this.b9)), aR9 = Math.floor(.5 * this
			.b9), t.a2U.font = ez, s = dH.gap, aR3 = Math.floor(1 + .13 * this.b9), (canvas = document.createElement("canvas")).width = b4, canvas.height = this.b9, f4 = canvas.getContext("2d", {
			alpha: !0
		}), aR.az.textBaseline(f4, 1), aR.az.textAlign(f4, 1), this.aRB()
	}, this.aRC = function() {
		return bA.bB.bC() && b3.b4 < 1.2 * b3.b9
	}, this.dS = function() {
		this.aRC() ? this.r = b3.b4 - b4 - dH.gap : this.r = Math.floor(zw.gB() + (b3.b4 - zw.gB() - jF.b4 - b4) / 2 - .5 * dH.gap)
	}, this.gC = function() {
		aAk && (aAk = !1, this.aRB())
	}, this.aRB = function() {
		f4.font = ez, f4.clearRect(0, 0, b4, this.b9), f4.fillStyle = aR6 ? aR7 : aR8, f4.fillRect(0, 0, b4, this.b9), f4.fillStyle = aJ.sx;
		var iJ = this.aRD(),
			aRF = (this.aRE(), f4.fillStyle = fL.jD[bK.bL] >= a2n.a2o(bK.bL) ? aJ.a1W : aJ.eA, aR.aS.t3(a2z)),
			aRF = (f4.fillText(aRF, Math.floor(b4 / 2), aR9), f4.measureText(aRF).width),
			iJ = (f4.font = aR4, f4.fillStyle = 9 === iJ ? aJ.a1v : aJ.eA, a2n.a2e),
			aRH = "+" + iJ,
			mM = f4.measureText(aRH).width,
			aRI = Math.floor(this.b9 / 12),
			aRF = .5 * (b4 + aRF) + aRI;
		(aRF + mM + aR3 <= b4 || 1e3 <= iJ && (aRH = "+" + Math.floor(iJ / 1e3) + "K", aRF + (mM = f4.measureText(aRH).width) + aR3 <= b4)) && f4.fillText(aRH, Math.floor(aRF + .5 * mM), Math.floor(.3 * this.b9)), f4.fillStyle = aJ.eA, f4
			.fillRect(0, 0, b4, 1), f4.fillRect(0, 0, 1, this.b9), f4.fillRect(0, this.b9 - 1, b4, 1), f4.fillRect(b4 - 1, 0, 1, this.b9)
	}, this.aRD = function() {
		var iJ = bu.gE() % 100,
			zA = (iJ = 9 - je.kI(iJ -= iJ % 10, 10), Math.floor(iJ * (this.b9 - aR3) / 9));
		return f4.fillRect(0, zA, aR3, this.b9 - zA), f4.fillRect(b4 - aR3, zA, aR3, this.b9 - zA), iJ
	}, this.aRE = function() {
		f4.fillRect(aR3, this.b9 - aR3, Math.floor((b4 - 2 * aR3) * fL.jD[bK.bL] / aR5), aR3)
	}, this.fA = function() {
		var o4 = bK.bL;
		aR.bc.ye(o4) && (o4 = fL.jD[o4] - fL.a3E[o4], a2z !== o4 ? (aR5 = sm(o4, aR5), aR6 = a2z < o4 && 10 <= o4, a2z = o4, aAk = !0) : bu.gE() % 10 == 9 && (aAk = !0))
	}, this.eC = function() {
		0 === fL.gl[bK.bL] || bK.j9 || 2 === fL.gc[bK.bL] || eD.drawImage(canvas, this.r, s)
	}
}

function aLF() {
	var aRJ, nu;
	this.q = function() {
		for (var ai = (nu = new Uint16Array(101)).length - 1; 0 <= ai; ai--) nu[ai] = je.kI(32768 * ai, 100);
		this.a2O(0)
	}, this.value = function(o4) {
		return nu[o4]
	}, this.a2N = function() {
		return je.kI(aRJ - 1, 2)
	}, this.a2O = function(a0z) {
		aRJ = 2 * a0z % 32768 + 1
	}, this.random = function() {
		return aRJ = 167 * aRJ % 32768
	}, this.tM = function(w7) {
		return je.kI(w7 * this.random(), 32768)
	}, this.aIS = function(o4) {
		return 0 !== o4 && this.random() < this.value(o4)
	}, this.kK = function(gF, pW) {
		return gF + this.tM(pW - gF)
	}
}

function aRK() {
	var iR, iS, ii;

	function aRN() {
		var nt;
		1 === bK.data.gameMode ? (bK.data.teamPlayerCount || (bK.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), bK.jY.jZ()), nt = aR.ie.a5W(bK.data.teamPlayerCount, 0), bK.data.numberTeams = nt) : (2 === bK.data
			.botDifficultyType && (bK.data.botDifficultyType = 0), 1 === bK.data.spawningType && (bK.data.spawningType = 0))
	}

	function iV() {
		1 !== bK.data.gameMode && (bK.data.teamPlayerCount = null), aRP(), bK.data.canvas = null, ax.gu(5, 5)
	}

	function aRP() {
		zK.zL.q(), bz.cG.cH(156, zK.zM.em())
	}

	function aRL() {
		bK.data.isReplay = 0, aRP(), bK.jY.a5Z(), cB.aKg(), bK.jY.a5X(), bK.data.canvas = 2 === bK.data.mapType ? t.a16 : null, bK.aRQ(), bK.aRR = 1
	}

	function aRe() {
		aRN();
		for (var nu = [aOu(), aRU(), aRV()], ai = 3; ai < 6; ai++) ax.removeChild(iS.r0, iS.lx[ai].v1), iS.lx[ai] = nu[ai - 3], iS.r0.appendChild(iS.lx[ai].v1);
		iS.resize()
	}

	function aOu() {
		var aRf, hW = new il;
		return hW.im(L(21)), aRf = 0 === bK.data.gameMode ? [L(17), L(14)][bK.data.colorsType] : bK.data.numberTeams + " Team" + (1 === bK.data.numberTeams ? "" : "s"), hW.jd(aRf), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(21)
		}).button])), hW
	}

	function aRU() {
		var hW = new il,
			nu = (hW.im(L(120)), [L(36) + ": " + wX.a23[bK.data.botDifficultyValue], L(121), L(122), L(14)]);
		return hW.jd(nu[bK.data.botDifficultyType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(25)
		}).button])), hW
	}

	function aRV() {
		var hW = new il,
			nu = (hW.im("Spawning"), [L(17), L(18), L(14)]);
		return hW.jd(nu[bK.data.spawningType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(24)
		}).button])), hW
	}
	this.show = function() {
		iR.show(), this.resize(), iR.iX.scrollTop = ax.aZ.aRg[0]
	}, this.aw = function() {
		ax.aZ.aRg[0] = iR.iX.scrollTop, iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU("🔧 " + L(427), [new aM("⬅️ " + L(10), iV), new aM(L(428), aRL)]), aRN(), bK.data.canvas || (2 === bK.data.mapType ? bK.data.canvas = t.a16 : 1 === bK.data.mapType ? bK.data.canvas = t.a15(t.a14(bK.data), 0).a16 : (bK.data
		.mapType = 0, bK.data.passableWater = bK.data.passableMountains = 1, bK.data.canvas = t.a15(t.a14(bK.data), bK.data.mapSeed).a16)), iS = new iW(iR.iX, (function(ii) {
		var hW = new il,
			mD = (hW.im(L(58)), bK.data.canvas);
		mD.style.width = "100%", hW.ir({
			aH: mD
		}), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(20)
		}).button])), ii.push(hW)
	}(ii = []), function(ii) {
		var hW = new il;
		hW.im(L(23)), hW.ir(new a7({
			a8: -1,
			value: bK.data.playerCount
		}, 1, 0, function(aH) {
			var playerCount = je.jf(Math.floor(aH.target.value), 1, 512);
			aH.target.value = bK.data.playerCount = playerCount, 1 === bK.data.gameMode && (aH = aR.ie.a5W(bK.data.teamPlayerCount, 0), bK.jY.jZ(), aR.ie.a5W(bK.data.teamPlayerCount, 0) !== aH) && aRe()
		})), ii.push(hW)
	}(ii), function(ii) {
		var hW = new il;
		hW.im(L(59)), hW.io(new ip({
			iq: ["Battle Royale", "Teams"],
			value: bK.data.gameMode
		}, function(a8) {
			bK.data.gameMode !== a8 && (bK.data.gameMode = a8, aRe())
		})), ii.push(hW)
	}(ii), ii.push(aOu()), ii.push(aRU()), ii.push(aRV()), function(ii) {
		var hW = new il,
			nu = (hW.im(L(9)), [L(12), L(13), L(14)]);
		hW.jd(nu[bK.data.playerNamesType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(23)
		}).button])), ii.push(hW)
	}(ii), function(ii) {
		var hW = new il,
			nu = (hW.im(L(254)), [L(35), L(36) + ": " + bK.data.aIncomeValue, L(14)]);
		hW.jd(nu[bK.data.aIncomeType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(22)
		}).button])), ii.push(hW)
	}(ii), function(ii) {
		var hW = new il,
			nu = (hW.im(L(34)), [L(35), L(36) + ": " + bK.data.tIncomeValue, L(14)]);
		hW.jd(nu[bK.data.tIncomeType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(26)
		}).button])), ii.push(hW)
	}(ii), function(ii) {
		var hW = new il,
			nu = (hW.im(L(246)), [L(35), L(36) + ": " + bK.data.iIncomeValue, L(14)]);
		hW.jd(nu[bK.data.iIncomeType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(27)
		}).button])), ii.push(hW)
	}(ii), function(ii) {
		var hW = new il,
			nu = (hW.im(L(127)), [L(35), L(36) + ": " + bK.data.sResourcesValue, L(14)]);
		hW.jd(nu[bK.data.sResourcesType]), hW.ir(new m4([new aM(L(429), function() {
			ax.gu(28)
		}).button])), ii.push(hW)
	}(ii), function(ii) {
		var hW = new il;
		hW.im(L(430)), hW.ir(new m4([new aM(L(431), function() {
			ax.rW(), bK.jY.a5b(), ax.aZ.aRg[0] = 0, ax.gu(19)
		}).button])), hW.ir(new m4([new aM(L(432), function() {
			aKu.aRh()
		}).button])), hW.ir(new m4([new aM(L(433), function() {
			return aKu.aRi(), !0
		}).button])), ii.push(hW)
	}(ii), ii))
}

function aKz() {
	var ew = new Uint8Array(bK.g6),
		aRj = new Uint16Array(bK.g6),
		aRk = new Uint16Array(bK.g6),
		aRl = new Uint8Array(bK.g6),
		aRm = (this.mW = new Uint8Array(bK.g6), new Uint16Array(bK.g6)),
		aRn = new Uint16Array(bK.g6);

	function aRu(ai) {
		ew[ai] = 1 + je.kI(aRm[ai] * kJ.random(), 10 * kJ.value(100))
	}
	this.a23 = null, this.aIV = [97, 94, 70, 40, 20, 0, 100], this.aDr = [500, 450, 400, 300, 80, 50, 100], this.aIT = [0, 0, 5, 25, 50, 100, 0], this.a4k = [60, 74, 112, 200, 256, 512, 512], this.aDR = [1, 2, 3, 4, 6, 8, 1], this.aRo = [500, 450,
		400, 300, 80, 50, 100
	], this.aDl = [100, 150, 250, 400, 600, 1e3, 100], this.aBM = function() {
		this.a23 = [L(434), L(435), L(396), L(436), L(437), L(438), "H Bot"]
	}, this.q = function() {
		ew.fill(0), aRj.fill(0), aRk.fill(0), aRl.fill(0), this.mW.fill(0), aRm.fill(0), aRn.fill(0);
		var aRp = bK.gd;
		if (9 === bK.k7) this.aRq();
		else if (bK.bX)
			if (3 === bK.data.botDifficultyType)
				for (ai = bK.aRs - 1; 0 <= ai; ai--) {
					var jc = ai + aRp;
					this.mW[jc] = bK.data.botDifficultyData[jc]
				} else if (2 === bK.data.botDifficultyType)
					for (ai = bK.aRs - 1; 0 <= ai; ai--) this.mW[jc = ai + aRp] = bK.data.botDifficultyTeam[gT.oZ[gT.og[jc]]];
				else if (1 === bK.data.botDifficultyType) {
			var aRt = this.a23.length;
			for (ai = bK.aRs - 1; 0 <= ai; ai--) this.mW[ai + aRp] = ai % aRt
		} else
			for (aRt = bK.data.botDifficultyValue, ai = bK.aRs - 1; 0 <= ai; ai--) this.mW[ai + aRp] = aRt;
		else
			for (var aRr = 8 === bK.k7 ? 1 : 0, ai = bK.aRs - 1; 0 <= ai; ai--) this.mW[ai + aRp] = aRr;
		for (ai = 0; ai < aRp; ai++) this.mW[ai] = 6;
		var ae = bK.g6;
		for (ai = 0; ai < ae; ai++) this.mW[ai] <= 2 ? (aRl[ai] = 5, aRm[ai] = aRn[ai] = 1040, 0 === this.mW[ai] ? (aRj[ai] = 980, aRk[ai] = 980) : 1 === this.mW[ai] ? (aRj[ai] = 980, aRk[ai] = 920, aRm[ai] = aRn[ai] = 1100) : (aRj[ai] = 825,
				aRk[ai] = 750)) : this.mW[ai] <= 4 ? (aRl[ai] = 1 + kJ.tM(20), 3 === this.mW[ai] ? (aRj[ai] = aRk[ai] = 500, aRm[ai] = aRn[ai] = 1e3) : (aRn[ai] = 250 + kJ.tM(1501), aRm[ai] = 500 + kJ.tM(501), aRj[ai] = 300 + kJ.tM(201), aRk[
				ai] = 100 + kJ.tM(201))) : this.mW[ai] <= 5 ? (aRm[ai] = 1e3, aRn[ai] = 1e3, aRl[ai] = 35 + kJ.tM(16), aRj[ai] = 300 + kJ.tM(201), aRk[ai] = 50 + kJ.tM(101)) : (aRm[ai] = aRn[ai] = 800, aRl[ai] = 5, aRj[ai] = 10, aRk[ai] = 250),
			aRu(ai)
	}, this.aRq = function() {
		for (var dx = wU.aRv, aRp = bK.gd, ai = dx - 1; 0 <= ai; ai--) this.mW[ai + aRp] = 0;
		for (var pW = 0; pW < 6; pW++) {
			for (ai = dx + wU.wV[pW] - 1; dx <= ai; ai--) this.mW[ai + aRp] = pW;
			dx += wU.wV[pW]
		}
	}, this.aIN = function(o4, value) {
		ew[o4] = Math.min(value, ew[o4])
	}, this.fA = function(o4) {
		0 == --ew[o4] && ! function(o4) {
			(function(o4) {
				aRm[o4] !== aRn[o4] && (aRm[o4] += aRm[o4] < aRn[o4] ? 3 : -3);
				aRj[o4] !== aRk[o4] && (aRj[o4] += aRj[o4] < aRk[o4] ? aRl[o4] : -aRl[o4], aRj[o4] = (Math.abs(aRj[o4] - aRk[o4]) <= aRl[o4] ? aRk : aRj)[o4]);
				ew[o4] = je.kI(aRm[o4], 10)
			})(o4), kD.mp.aIJ(o4, je.kI(aRj[o4] * fL.jD[o4], 1e3))
		}(o4)
	}, this.aRy = function(o4, nt) {
		aRm[o4] = aRn[o4] = nt
	}
}

function aLU() {
	this.aZ = new aRz, this.d2 = 0;
	var aS0 = new Array(32);

	function aS3() {
		for (var ae = aS0.length, ai = 0; ai < ae; ai++) aS0[ai] = null
	}
	this.q = function() {
		for (var aS1, aS2 = document.body.firstChild; aS2;) aS1 = aS2.nextSibling, !document.body.contains(aS2) || "DIV" !== aS2.tagName && "INPUT" !== aS2.tagName && "BUTTON" !== aS2.tagName || ax.removeChild(document.body, aS2), aS2 = aS1
	}, this.gu = function(a8, lt, ho) {
		void 0 === lt && (lt = this.d2), bu.dw = !0, 0 === a8 && (0 === cB.mP() ? a8 = 5 : bA.bB.setState(13)), this.aw(), this.d2 === a8 && (lt = aS0[a8].lt, aS0[a8] = null), this.d2 = a8;
		var kG = aS0[a8];
		if (!kG || 4 === a8 || 7 === a8 || 8 === a8 || 9 === a8 || 10 === a8 || 11 === a8 || 13 === a8 || 15 === a8 || 18 === a8 || 20 <= a8 && a8 <= 28 || 32 === a8 || 33 === a8) {
			if (0 === a8) return void aS3();
			1 === a8 ? kG = new aFa : 2 === a8 ? kG = new aLp : 3 === a8 ? kG = new zD : 4 === a8 || 9 === a8 || 10 === a8 || 11 === a8 || 13 === a8 || 33 === a8 ? kG = ho : 5 === a8 ? kG = new aS4 : 6 === a8 ? kG = new lp : 7 === a8 ? kG =
				new aHk(ax.aZ.d9) : 8 === a8 ? kG = ho : 12 === a8 ? kG = new qI : 14 === a8 ? kG = new vZ : 15 === a8 ? kG = new aHk(ax.aZ.d6) : 16 === a8 ? kG = new tA : 17 === a8 ? kG = new a5P : 18 === a8 ? kG = new aS5 : 19 === a8 ? kG =
				new aRK : 20 === a8 ? kG = new a0o : 21 === a8 ? kG = new jV : 22 === a8 ? kG = new aPW : 23 === a8 ? kG = new iQ : 24 === a8 ? kG = new iz : 25 === a8 ? kG = new a22 : 26 === a8 ? kG = new m8 : 27 === a8 ? kG = new aS6 : 28 ===
				a8 ? kG = new a5i : 29 === a8 ? kG = new rA : 30 === a8 ? kG = new aLi : 31 === a8 && (kG = new aOr), kG.lt = lt, aS0[a8] = kG
		}
		kG.show(ho)
	}, this.ic = function() {
		this.mO() && this.va(this.d3().lt)
	}, this.va = function(a8) {
		this.mO() && (aS0[a8] ? (this.aw(), bu.dw = !0, this.d2 = a8, aS0[a8].show()) : this.gu(a8))
	}, this.aw = function() {
		this.mO() && aS0[this.d2].aw()
	}, this.rW = function() {
		this.mO() && (aS0[this.d2].aw(), aS3(), this.d2 = 0, bA.bB.setState(13))
	}, this.eC = function() {
		var kG;
		this.mO() && (kG = aS0[this.d2]).eC && kG.eC()
	}, this.resize = function() {
		if (!this.mO()) return !1;
		aS0[this.d2].resize()
	}, this.df = function(r, s) {
		var kG;
		this.mO() && (kG = aS0[this.d2]).df && kG.df(r, s)
	}, this.dk = function(r, s) {
		var kG;
		this.mO() && (kG = aS0[this.d2]).dk && kG.dk(r, s)
	}, this.qV = function() {
		var kG;
		this.mO() && (kG = aS0[this.d2]).qV && kG.qV()
	}, this.dh = function(ds, dt, deltaY) {
		var kG;
		this.mO() && (kG = aS0[this.d2]).dh && kG.dh(ds, dt, deltaY)
	}, this.ix = function(code) {
		var kG;
		return !!this.mO() && ((kG = aS0[this.d2]).ix && kG.ix(code), !0)
	}, this.fA = function() {
		var kG;
		this.mO() && (kG = aS0[this.d2]) && kG.fA && kG.fA()
	}, this.mO = function() {
		return 0 < this.d2
	}, this.d3 = function() {
		return aS0[this.d2]
	}, this.ls = function(a8) {
		return aS0[a8]
	}, this.ib = function() {
		return aS0
	}, this.removeChild = function(aNB, aCu) {
		try {
			aNB.removeChild(aCu)
		} catch (aH) {
			console.log("removeChild error " + aH)
		}
	}
}

function wb() {
	this.cR = function() {
		return 69
	}, this.em = function() {
		var b4 = window.screen.width,
			b9 = window.screen.height;
		cN.et(26, (b4 * b9 + b9) % 67108864), cN.et(22, 0), cN.et(21, 0)
	}
}

function aS7() {
	this.fA = function() {
		var aSD;
		2 === bK.jx ? (bI.mu(0, 59), di.pT(2700)) : bK.k7 < 7 ? (aSD = gT.oZ[bK.r9], aSD = gT.jb[aSD], fD.fE(L(439, [aSD]), 2, 1, 12), bI.be(0, L(440, [aSD]), 40, 0, aJ.eA, aJ.bg, -1, !1), di.pT(2700)) : 8 === bK.k7 ? (bK.a4w ? bI.mu(bK.a97, 2) :
			bI.mu(1 - bK.bL, 3), bK.aSC.aA8(bK.a97), di.h0(bK.a97, 2700, !1, 0)) : 9 === bK.k7 ? (bI.aSF(), di.pT(2700)) : (bI.aSG(bK.a97), di.h0(bK.a97, 2700, !1, 0))
	}, this.a4z = function() {
		var en;
		bK.bY || (en = bK.k7 < 7 ? "territorial.io/log/team" : 8 === bK.k7 ? "territorial.io/log/1v1" : 9 === bK.k7 ? "territorial.io/log/zombies" : "territorial.io/log/br", bI.be(720, en, 736, 0, aJ.eA, aJ.a1P, -1, !1))
	}
}

function iW(av, ii) {
	var v1 = document.createElement("div");

	function a83() {
		var ai, aCi, b9, gO, iP, aSI = b3.b5 * v1.offsetWidth,
			aSK = new Float64Array(function(aSI) {
				var b4 = .25 * aR.az.dF(.6) * b3.dG;
				return Math.max(Math.floor(aSI / b4), 1)
			}(aSI)),
			aBo = dH.aBo,
			aSL = (aSI - (aSK.length + 1) * dH.gap) / (aSK.length * b3.b5);
		for (aSK.fill(aBo), ai = 0; ai < ii.length; ai++) aCi = (iP = ii[ai].v1).style, b9 = aR.ie.min(aSK), gO = aSK.indexOf(b9), aCi.top = aR.az.b8(b9), aCi.left = aR.az.b8(aBo + gO * (aSL + aBo)), aCi.width = aR.az.b8(aSL), aR.az.bD(iP, 5), aSK[
			gO] += iP.offsetHeight + 3 * aBo;
		v1.style.height = aR.az.b8(aR.ie.max(aSK) - 2 * aBo)
	}
	this.r0 = v1, this.lx = ii, this.resize = function() {
		var ai;
		for (ai = 0; ai < ii.length; ai++) ii[ai].resize();
		a83(), a83()
	}, v1.style.width = "100%", v1.style.maxWidth = "100%", av.style.lineHeight = "1.5em", av.style.overflowX = "hidden", av.style.overflowY = "auto";
	for (var ai = 0; ai < ii.length; ai++) v1.appendChild(ii[ai].v1);
	av.appendChild(v1)
}

function aHc(oL, oM, aSM, aSN, aSO) {
	var self;
	this.aQ = document.createElement("span"), this.resize = function() {
			this.aQ.style.fontSize = ((aSN - aSM) * oM.offsetHeight).toFixed(1) + "px"
		}, (self = this).aQ.textContent = oL, self.aQ.style.color = aJ.eA, self.aQ.style.font = "inherit", self.aQ.style.margin = "0.1em 0.6em", self.aQ.style.pointerEvents = "none", aSO && (self.aQ.style.fontWeight = "bold"), self.aQ.style
		.whiteSpace = "nowrap", self.aQ.style.display = "block", oM.appendChild(self.aQ)
}

function aLQ() {
	function aSQ() {
		8 === bK.k7 && 1 === bK.fC && jy.aOj.a4r()
	}

	function aSP(player) {
		bK.j9 ? (aGG.aM5(player), my.aGD(), bK.bX && bK.jT.fA()) : aKt.a9X(player)
	}
	this.a4K = function(player) {
		bI.mu(player, player === bK.bL ? 21 : 22), aSP(player), aSQ()
	}, this.a4N = function(player) {
		1 === bK.fC && 0 !== fL.gl[player] && 2 !== fL.gc[player] && aSP(player), bK.a4u--, bK.a4t--, bI.mu(player, 4), aR.bc.a3o(2) && jF.gC(!0), aSQ()
	}
}

function aL4() {
	var aSR, aSS, tf, aST, tY, aSU = 0,
		aSV = 0;

	function aSX(ai) {
		var aSY = !0,
			a8s = aJ.eA,
			b4 = (1 === aSR[ai].id ? aSR[ai].f4.fillStyle = aJ.a1m : aSR[ai].mV === bK.g6 ? aSR[ai].f4.fillStyle = aJ.a1E : (x.aKI(aSR[ai].mV), aSR[ai].f4.fillStyle = aR.color.a18(oi.aDz[0], oi.aDz[1], oi.aDz[2], .87), 400 < aR.ie.ig(oi.aDz, 0, 2) &&
				(aSY = !1, a8s = aJ.fY)), aSR[ai].canvas.width),
			mL = (aSR[ai].f4.clearRect(0, 0, b4, aST), aSR[ai].f4.fillRect(0, 0, b4, aST), aSR[ai].f4.fillStyle = a8s, ! function(f4, b4, aST) {
				f4.fillRect(0, 0, b4, 1), f4.fillRect(0, aST - 1, b4, 1), f4.fillRect(0, 0, 1, aST), f4.fillRect(b4 - 1, 0, 1, aST)
			}(aSR[ai].f4, b4, aST), aSS + 2 * aST < b4 && (aSR[ai].f4.fillRect(b4 - aSS - aST, 0, 1, aST), aSR[ai].f4.fillText(fL.fM[aSR[ai].mV], Math.floor((b4 - aSS) / 2), Math.floor(.57 * aST))), 0 !== aSR[ai].id ? 0 : aST);
		aSR[ai].f4.fillText(aR.aS.t3(aSR[ai].mW), Math.floor(b4 - aSS / 2 - mL), Math.floor(.57 * aST)),
			function(ai, b4, mL, aSY) {
				aSR[ai].f4.fillStyle = aSY ? aJ.sx : aJ.aK;
				aSY = Math.floor(aSS * aSR[ai].mW / aSR[ai].aSd);
				aSR[ai].f4.fillRect(Math.floor(b4 - aSS - mL), aST - tY, aSY, tY)
			}(ai, b4, mL, aSY), 0 === aSR[ai].id ? (aSb(ai, b4, aSY, a8s), function(ai, b4, aSY) {
				aSR[ai].f4.strokeStyle = aSY ? aJ.a1K : aJ.a1R, aSR[ai].f4.fillRect(aST, 0, 1, aST);
				aSY = b4 - aST;
				aSR[ai].f4.beginPath(), aSR[ai].f4.moveTo(Math.floor(.3 * aST + aSY), Math.floor(aST / 2)), aSR[ai].f4.lineTo(Math.floor(aST - .3 * aST + 0 + aSY), Math.floor(aST / 2)), aSR[ai].f4.stroke(), aSR[ai].f4.beginPath(), aSR[ai].f4
					.moveTo(Math.floor(aST / 2 + aSY), Math.floor(.3 * aST)), aSR[ai].f4.lineTo(Math.floor(aST / 2 + aSY), Math.floor(aST - .3 * aST + 0)), aSR[ai].f4.stroke()
			}(ai, b4, aSY)) : aSb(ai, 2 * aST, aSY, a8s)
	}

	function aSb(ai, b4, aSY, a8s) {
		aSR[ai].f4.strokeStyle = aSR[ai].aSe ? aJ.pq : aSY ? aJ.a1X : aJ.a1Y, aSR[ai].f4.fillStyle = a8s, aSR[ai].f4.fillRect(b4 - aST, 0, 1, aST), aSR[ai].f4.lineWidth = Math.max(Math.floor(aST / 12), 3), aSR[ai].f4.lineCap = "round";
		aSY = .35;
		b4 = aST + 1, aSR[ai].f4.beginPath(), aSR[ai].f4.moveTo(Math.floor(b4 - aSY * aST + 0), Math.floor(aSY * aST)), aSR[ai].f4.lineTo(Math.floor(b4 - aST + aSY * aST), Math.floor(aST - aSY * aST + 0)), aSR[ai].f4.stroke(), aSR[ai].f4.beginPath(),
			aSR[ai].f4.moveTo(Math.floor(b4 - aST + aSY * aST), Math.floor(aSY * aST)), aSR[ai].f4.lineTo(Math.floor(b4 - aSY * aST + 0), Math.floor(aST - aSY * aST + 0)), aSR[ai].f4.stroke()
	}

	function aSq(nu, aRc) {
		for (var mW, ai = aRc - 1; 0 <= ai; ai--) mW = ks.mm(bK.bL, ai), nu[ai].mW !== mW && (nu[ai].mW = mW, nu[ai].aSd = Math.max(mW, nu[ai].aSd), nu[ai].aAk = !0)
	}

	function aSt(nu, aRd) {
		for (var h5 = bK.bL << 3, hJ = h4.aZ.hJ, hL = h4.aZ.hL, h3 = h4.aZ.h3, ai = aRd - 1; 0 <= ai; ai--) {
			var aSv = h3[h5 + ai],
				mW = hJ[aSv];
			nu[ai].mW !== mW ? (nu[ai].mW = mW, nu[ai].aSd = Math.max(mW, nu[ai].aSd), nu[ai].aAk = !0) : nu[ai].aSe || hL[aSv] % 64 != 5 || (nu[ai].aSe = !0, nu[ai].aAk = !0)
		}
	}

	function aSW(aLl) {
		aLl.canvas = document.createElement("canvas"), t.a2U.font = tf;
		var b4 = aSS;
		aLl.mV < bK.g6 && 0 === aLl.id && (b4 += Math.floor(t.a2U.measureText(fL.fM[aLl.mV] + "000").width)), b4 += aST, 0 === aLl.id && (b4 += aST), aLl.canvas.width = b4, aLl.canvas.height = aST, aLl.f4 = aLl.canvas.getContext("2d", {
			alpha: !0
		}), aLl.f4.font = tf, aR.az.textBaseline(aLl.f4, 1), aR.az.textAlign(aLl.f4, 1)
	}

	function aSl(ai) {
		return aEA.aRC() ? b3.b4 - aSR[ai].canvas.width - dH.gap : aEA.r
	}

	function aSm(ai) {
		return Math.floor(2 * dH.gap + (aEA.aRC() ? jF.b9 + dH.gap : 0) + aEA.b9 + ai * (1.3 * aST))
	}
	this.q = function() {
		aSU = aSV = 0, aSR = [], this.resize()
	}, this.resize = function() {
		tf = bI.ez, aST = bI.fontSize + 5, aST = Math.floor(1.25 * aST), bA.bB.bC() && (aST = Math.floor(1.25 * aST)), tY = Math.floor(.15 * aST), t.a2U.font = tf, aSS = Math.floor(t.a2U.measureText("02 000 000 0000").width);
		for (var ai = aSR.length - 1; 0 <= ai; ai--) aSW(aSR[ai]), aSX(ai)
	}, this.gC = function() {
		for (var ai = aSR.length - 1; 0 <= ai; ai--) aSR[ai].aAk && (aSR[ai].aAk = !1, aSX(ai))
	}, this.df = function(ds, dt) {
		if (2 !== bK.fC && 0 !== fL.gl[bK.bL] && !bK.bY && !aR.bc.ms(bK.bL))
			for (var aSg, aSh, aSi, aSj = bA.bB.bC() ? aST : 0, aSk = bA.bB.bC() ? Math.floor(.15 * aST) : 0, ai = aSR.length - 1; 0 <= ai; ai--)
				if (aSg = aSl(ai), aSh = aSm(ai), aSi = aSR[ai].canvas.width, aSh - aSk <= dt && dt <= aSh + aST + aSk) {
					if (aSg - aSj <= ds && ds <= aSg + aST + aSj) return aSR[ai].aSe || (aSR[ai].aAk = !0, aSR[ai].aSe = !0, 0 === aSR[ai].id ? k6.yM.a4D(aSR[ai].mV) : k6.yM.a4B(aSR[ai].mV)), !0;
					if (0 === aSR[ai].id && aSg + aSi - aST - aSj <= ds && ds <= aSg + aSi + aSj) return yS.yT(3), k6.yM.yU(fV.yO(), aSR[ai].mV), !0
				} return !1
	}, this.fA = function() {
		var aG2, aG5, nu, aRc;
		0 === fL.gl[bK.bL] || aR.bc.ms(bK.bL) && !bK.bY || (aG2 = aSR.slice(0, aSU), aG5 = aSR.slice(aSU, aSU + aSV), nu = aG2, aRc = ks.mk(bK.bL), function(nu, aRc) {
			if (aSU !== aRc) return 1;
			for (var ai = aRc - 1; 0 <= ai; ai--)
				if (nu[ai].mV !== ks.ml(bK.bL, ai)) return 1;
			return
		}(nu, aRc) ? aSq(nu = function(nu, aRc) {
			var ai, mV, pW, mW, aSw = [];
			loop: for (ai = 0; ai < aRc; ai++) {
				for (mV = ks.ml(bK.bL, ai), pW = 0; pW < nu.length; pW++)
					if (nu[pW].mV === mV) {
						aSw.push(nu.splice(pW, 1)[0]);
						continue loop
					} mW = ks.mm(bK.bL, ai), aSW(mW = {
					mV: mV,
					mW: mW,
					aSd: mW,
					id: 0,
					aAk: !0,
					aSe: !1,
					canvas: null,
					f4: null
				}), aSw.push(mW)
			}
			return aSw
		}(nu, aRc), aRc) : aSq(nu, aRc), aG2 = nu, aG5 = function(nu) {
			var aRd = h4.aZ.h7[bK.bL];
			return function(nu, aRd) {
				if (aSV !== aRd) return 1;
				for (var h5 = bK.bL << 3, hK = h4.aZ.hK, h3 = h4.aZ.h3, ai = aRd - 1; 0 <= ai; ai--) {
					var aSv = h3[h5 + ai];
					if (nu[ai].mV !== hK[aSv]) return 1
				}
				return
			}(nu, aRd) ? aSt(nu = function(nu, aRd) {
				var ai, mV, pW, aSw = [],
					h5 = bK.bL << 3,
					hK = h4.aZ.hK,
					hJ = h4.aZ.hJ,
					h3 = h4.aZ.h3;
				loop: for (ai = 0; ai < aRd; ai++) {
					var aSv = h3[h5 + ai];
					for (mV = hK[aSv], pW = 0; pW < nu.length; pW++)
						if (nu[pW].mV === mV) {
							aSw.push(nu.splice(pW, 1)[0]);
							continue loop
						} aSv = hJ[aSv], aSW(aSv = {
						mV: mV,
						mW: aSv,
						aSd: aSv,
						id: 1,
						aAk: !0,
						aSe: !1,
						canvas: null,
						f4: null
					}), aSw.push(aSv)
				}
				return aSw
			}(nu, aRd), aRd) : aSt(nu, aRd), nu
		}(aG5), aSU = aG2.length, aSV = aG5.length, aSR = aG2.concat(aG5))
	}, this.eC = function() {
		if (0 !== fL.gl[bK.bL] && (!aR.bc.ms(bK.bL) || bK.bY))
			for (var ai = aSR.length - 1; 0 <= ai; ai--) eD.drawImage(aSR[ai].canvas, aSl(ai), aSm(ai))
	}
}

function c3() {
	function aSy(aT0) {
		aY.aZ.aIg && 1 === aY.aZ.aa[2] && ax.ls(29).ri(), aY.aZ.aIg = 0, ax.ls(29).re(), 0 !== aY.aZ.ac[aY.aZ.aa[0]].rr && !aT0 || ax.ls(29).rd(), aY.bn.aT1()
	}
	this.ac = new Array(4), this.aa = [0, 0, 1, 0], this.aIg = 0, this.s1 = [0, 0], this.q = function() {
		for (var ai = 0; ai < this.ac.length; ai++) this.ac[ai] = new aSx;
		this.aa[0] = bz.c0.data[158].value
	}, this.a9Y = function() {
		aSy(!0), aY.bp.q()
	}, this.a4b = function() {
		aY.bp.a4b();
		for (var ai = 0; ai < aY.aZ.ac.length; ai++) {
			var ab = aY.aZ.ac[ai];
			0 === ab.rr ? ab.aT2 = 0 : (ab.rp = Math.max(ab.rp - ab.aT2 % 2, 0), ab.aT2++)
		}
		aSy(!1)
	}, this.a9m = function(aX) {
		this.aa[0] !== aX || this.aa[2] || ax.ls(29).s3()
	}
}

function aLH() {
	var ex, f5;
	this.q = function() {
		ex = 1, f5 = 0
	}, this.fA = function() {
		0 < ex && (f5 = 0 === f5 ? bu.bv + 16 : f5, ex = (ex -= .001 * (bu.bv - f5)) < 0 ? 0 : ex, f5 = bu.bv, bu.dw = !0)
	}, this.eC = function() {
		0 < ex && (eD.fillStyle = "rgba(0,0,0," + ex + ")", eD.fillRect(0, 0, b3.b4, b3.b9))
	}
}

function aS4() {
	var aT5, aT6, qJ, a6, aT7;
	this.aGV = new aHV, qJ = new dB([.45, .27], [.5, .5], 2 / 3), aT6 = [new aM("⚔️<br>" + L(441), function() {
			aT8(0)
		}, aJ.a1S), new aM("🗡️<br>" + L(427), function() {
			aT8(1)
		}, aJ.a1h), new aM("🔑<br>" + L(442), function() {
			aT8(2)
		}, aJ.a1s), new aM("☰<br>" + L(443), function() {
			aT8(3)
		}, aJ.a1F), new aM("", function() {
			ax.gu(12)
		}, aJ.gI, !1),
		new aM("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new aM("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], a6 = new a7(bz.c0.data[122]);
	for (var ai = 0; ai < aT6.length; ai++) aT6[ai].button.style.position = "absolute";

	function aT8(a8) {
		bA.bB.setState(10), gZ.mK() || gZ.aGM(), 0 === a8 ? ax.aZ.aT9() : 1 === a8 ? (zK.zQ.cZ(bz.c0.data[156].value, 1) || bK.jY.a5b(), ax.gu(19)) : 2 === a8 ? 0 !== bA.id || bz.c0.data[140].value ? ax.gu(8, ax.d2, new lz(16)) : ax.aZ.aFh(ax.d2,
			16) : 3 === a8 && ax.gu(1)
	}
	a6.aH.style.position = "absolute", a6.aH.style.textAlign = "center", a6.aH.placeholder = L(444), this.show = function() {
		cB.setState(0), bA.bB.setState(12), this.aGV.show(), aT6[4].aN(aR.color.aDx(bz.c0.data[121].value)), this.resize(), document.body.appendChild(a6.aH);
		for (var ai = 0; ai < aT6.length; ai++) document.body.appendChild(aT6[ai].button);
		1 !== bA.id || bA.jl < 5 || (aT7 && bu.bv > aT7 + 144e5 ? bA.n6.setState(14) : aT7 = bu.bv)
	}, this.aw = function() {
		this.aGV.aw(), ax.removeChild(document.body, a6.aH);
		for (var ai = 0; ai < aT6.length; ai++) ax.removeChild(document.body, aT6[ai].button)
	}, this.resize = function() {
		this.aGV.resize(), this.aGV.resize(), qJ.resize();
		var gap = .5 * dH.gap,
			aTB = 10 / 99 * .84 * qJ.b4,
			aTD = .16 * qJ.b9,
			e0 = .19 * qJ.b4,
			r = qJ.r + e0,
			aTB = qJ.s + aTB + 3 * gap,
			b4 = .5 * (qJ.b4 - gap) - e0,
			e0 = qJ.b4 - 2 * e0 - aTD - gap,
			e0 = (aR.az.aCh(a6.aH, r, aTB, e0, aTD), aR.az.aCh(aT6[4].button, r + e0 + gap, aTB, aTD, aTD), .5 * (qJ.s + qJ.b9 - (aTB += aTD + gap) - gap));
		aR.az.aCh(aT6[0].button, r, aTB, b4, e0), aR.az.aCh(aT6[1].button, r + b4 + gap, aTB, b4, e0), aR.az.aCh(aT6[2].button, r, aTB + e0 + gap, b4, e0), aR.az.aCh(aT6[3].button, r + b4 + gap, aTB + e0 + gap, b4, e0);
		aR.az.aCh(aT6[5].button, r, aTB + e0 * 2 + gap * 2, b4 * 2 + gap, e0 / 3);
		aR.az.aCh(aT6[6].button, r, aTB + e0 * 2.33 + gap * 3, b4 * 2 + gap, e0 / 3);
		for (var ai = 0; ai < aT6.length; ai++) aT6[ai].button.style.font = aR.az.f8(0, aR.az.aCn(.065 * qJ.b9)), aR.az.bD(aT6[ai].button, 5);
		a6.aH.style.font = aR.az.f8(0, aR.az.aCn(.08 * qJ.b9)), aR.az.bD(a6.aH, 5)
	}, this.eC = function() {
		if (cB.aKk(), ss.eC(), ae = Math.floor((bA.bB.bC() ? .018 : .0137) * b3.dG), eD.font = aR.az.f8(0, Math.max(5, ae)), aR.az.textBaseline(eD, 0), aR.az.textAlign(eD, 2), eD.fillStyle = aJ.eA, eD.fillText(hd.jl, b3.b4, 0), text =
			"Win count: " + __fx.wins.count, textLength = eD.measureText(text).width, ae = Math.max(5, ae), eD.textAlign = "left", eD.textBaseline = "middle", eD.fillText(text, eD.canvas.width - textLength - ae / 2, 2 * ae), aCB.eC(), aGW.eC(),
			gZ.mK()) {
			eD.imageSmoothingEnabled = !1;
			var text = gZ.aGL("territorial.io"),
				textLength = .84 * qJ.b4 / text.width;
			eD.setTransform(textLength, 0, 0, textLength, qJ.r + .08 * qJ.b4, qJ.s), aT5 = aT5 || aR.aAg.a0e(text, aR.aAg.a0j, [0, 0, 0]);
			for (var r = -1; r <= 1; r += 2)
				for (var s = -1; s <= 1; s += 2) eD.drawImage(aT5, r, s);
			eD.drawImage(text, 0, 0), eD.imageSmoothingEnabled = !0;
			var ae = gZ.aGL("logo"),
				aTF = .6666 * textLength * text.height / ae.height,
				k = .5 * b3.b4,
				l = qJ.s + .5 * textLength * text.height - .5 * aTF * ae.height;
			eD.setTransform(aTF, 0, 0, aTF, k - .6 * textLength * text.width, l), eD.drawImage(ae, 0, 0), eD.setTransform(aTF, 0, 0, aTF, k + .6 * textLength * text.width - aTF * ae.width, l), eD.drawImage(ae, 0, 0), eD.setTransform(1, 0, 0, 1,
				0, 0), eD.imageSmoothingEnabled = !0
		}
	}
}

function aES() {
	var aTG = new Uint8Array(64);
	this.q = function() {
		var ai;
		for (aTG[0] = 45, aTG[37] = 95, ai = 0; ai < 10; ai++) aTG[ai + 1] = 48 + ai;
		for (ai = 0; ai < 26; ai++) aTG[ai + 11] = 65 + ai, aTG[ai + 38] = 97 + ai
	}, this.cK = function(aTH) {
		for (var a4l = cM, aGv = new Uint8Array(aTH), ai = 0; ai < aTH; ai++) aGv[ai] = a4l.cR(6);
		return aGv
	}, this.cJ = function(aGv) {
		for (var ae = aGv.length, aTI = aTG, nu = [], ai = 0; ai < ae; ai++) nu.push(String.fromCharCode(aTI[aGv[ai]]));
		return nu.join("")
	}, this.t3 = function(value, aTJ) {
		for (var aTI = aTG, nu = [], ai = 0; ai < aTJ; ai++) nu.push(String.fromCharCode(aTI[value >> 6 * (aTJ - 1 - ai) & 63]));
		return nu.join("")
	}
}

function c5() {
	var uh = 0,
		aTK = 0,
		aTL = 0,
		aTM = null,
		aTN = null;

	function aTP(aq, aTQ, aTR) {
		var en = aq.username;
		return (en += "   " + aY.ak.a6u(aq.a5y, aq.gb, aq.a6v)) + function(aq) {
			aq = aq.cW;
			if (aq < 1e3) return "   Gold: " + aq;
			if ((aq %= 1024) < 1e3) return "   Gold: " + aq + "k";
			return "   Gold: " + (aq - 999) + "M"
		}(aq) + ("   IP: " + cI.bx.t3(aq.aId, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aTR ? aTK : aTO(aq, aTQ)])
	}

	function aTO(aq, aTQ) {
		return aTK = aTQ || aY.bl.a6q(aq.d8) ? 1 : 0
	}
	this.aT1 = function() {
		!uh || aTK === aTO(aTN) && aTL === aTN.cW || (aTL = aTN.cW, aTM.show(-1, -1, aTP(aTN, 0, 1), 1, 1))
	}, this.a60 = function(aH, aq, aTQ) {
		var x1 = aH.target.getBoundingClientRect();
		this.show(x1.left, x1.top, aq, 0, aTQ), aH.target.addEventListener("mouseleave", function remove() {
			aH.target.removeEventListener("mouseleave", remove), aY.bn && aY.bn.aw(1)
		})
	}, this.show = function(r, s, aq, ul, aTQ) {
		aTM = aTM || new uf, aTL = (aTN = aq).cW, aTM.show(r, s, aTP(aq, aTQ), ul), uh = 1
	}, this.aw = function(ur) {
		aTM && aTM.aw(ur) && (uh = 0, aTN = null)
	}
}

function wa() {
	this.k4 = function() {
		for (var o4, ae = my.mz, pk = my.n0, aMC = fL.aMC, aOi = this.aMD(), ai = 0; ai < ae; ai++) o4 = pk[ai], aR.bc.ms(o4) || (aMC[o4] = aOi);
		var a3w = fL.a3w,
			aF7 = fL.aF7,
			aF8 = fL.aF8,
			aGF = fL.aGF,
			ae = bK.gd;
		for (ai = 0; ai < ae; ai++)(0 === aGF[ai] || aF8[ai] < 1 || 2 * a3w[ai] > 3 * (aF7[ai] + aF8[ai])) && (aMC[ai] = 0);
		var jq = 0;
		for (ai = 0; ai < ae; ai++) jq += 0 < aMC[ai];
		return jq
	}, this.aMD = function() {
		return Math.min(65535, bu.gE())
	}
}

function aL0() {
	var size, eQ;
	this.q = function() {
		size = bK.aRs, eQ = new Uint16Array(bK.g6);
		for (var gd = bK.gd, ai = bK.aRs - 1; 0 <= ai; ai--) eQ[ai] = gd + ai
	}, this.fA = function() {
		kD.aTT.fA();
		for (var ai = size - 1; 0 <= ai; ai--)
			if (0 === fL.gl[eQ[ai]]) {
				gF = void 0;
				var gF = ai;
				size--, eQ[gF] = eQ[size]
			} else wX.fA(eQ[ai])
	}, this.aTV = function(o4) {
		eQ[size++] = o4
	}
}

function aSx() {
	this.rr = 0, this.fH = 0, this.mapSeed = 0, this.rl = 0, this.rm = 0, this.rn = 0, this.rx = 0, this.rp = 0, this.spawningSeed = 0, this.li = 0, this.a9g = 0, this.ad = [], this.ag = 1048575, this.aT2 = 0, this.a9h = [{
		fH: 0,
		mapSeed: 0,
		rl: 0,
		bv: 100,
		rx: 0
	}, {
		fH: 1,
		mapSeed: 0,
		rl: 1,
		bv: 200,
		rx: 0
	}, {
		fH: 2,
		mapSeed: 0,
		rl: 2,
		bv: 300,
		rx: 0
	}, {
		fH: 3,
		mapSeed: 0,
		rl: 3,
		bv: 400,
		rx: 0
	}, {
		fH: 0,
		mapSeed: 0,
		rl: 9,
		bv: 500,
		rx: 0
	}, {
		fH: 1,
		mapSeed: 0,
		rl: 10,
		bv: 600,
		rx: 0
	}, {
		fH: 2,
		mapSeed: 0,
		rl: 8,
		bv: 700,
		rx: 0
	}, {
		fH: 3,
		mapSeed: 0,
		rl: 3,
		bv: 800,
		rx: 0
	}]
}

function eX() {
	var aTX;
	this.q = function() {
		if (bK.fR) {
			var aFv = 1 - bK.aTa;
			aTX = new Array(gT.oZ.length);
			for (var ai = bK.oT - 1; 0 <= ai; ai--) {
				var yD = gT.oZ[ai + aFv];
				aTX[yD] = jQ.aZ.wN(20, gT.wM[yD])
			}
			9 === bK.k7 && (aTX[1] = jQ.aZ.wN(20, gT.wM[1]))
		} else aTX = [jQ.aZ.wN(20, gT.wM[7])]
	}, this.eC = function() {
		var pZ = dJ;
		if (!(5 <= pZ)) {
			var aKY = b3.b4,
				aKZ = b3.b9,
				g = dK / pZ,
				j = dL / pZ,
				k = (aKY + dK) / pZ,
				l = (aKZ + dL) / pZ,
				gO = -20 * pZ,
				aTb = .5 * gO,
				aKa = t.u << 4,
				ae = h4.aZ.hB,
				hH = h4.aZ.hH,
				hD = h4.aZ.hD,
				gV = gT.gV,
				mD = aTX,
				uH = eD;
			3 < pZ && (uH.globalAlpha = .5 * (5 - pZ));
			for (var ai = 0; ai < ae; ai++) {
				var a69 = hH[ai],
					r = aKY * (a69 % aKa / 16 - g) / (k - g) + aTb,
					a69 = aKZ * (Math.floor(a69 / aKa) / 16 - j) / (l - j) + aTb;
				aKY < r || aKZ < a69 || r < gO || a69 < gO || (uH.setTransform(pZ, 0, 0, pZ, r, a69), uH.drawImage(mD[gV[hD[ai] >> 3]], 0, 0))
			}
			uH.globalAlpha = 1, uH.setTransform(pZ, 0, 0, pZ, 0, 0)
		}
	}
}

function rP(rI, rC, aTe, rJ, a0, a1) {
	var hw = document.createElement("div"),
		aTf = document.createElement("div"),
		aTg = document.createElement("div"),
		aTh = document.createElement("div"),
		aTi = document.createElement("div"),
		a5s = document.createElement("div"),
		aTj = document.createElement("div"),
		aTk = document.createElement("div"),
		aTl = document.createElement("span"),
		aTm = document.createElement("div");
	this.rV = new z(a0, a1), this.rc = new a5r(a1), this.rh = [rI, rC, aTe, rJ], this.rq = function(rr) {
		rr = (rr / 10).toFixed(1) + "%";
		aTk.style.width = rr, aTl.innerHTML = rr
	}, this.rf = function() {
		this.rc.aw(a5s), this.rV.show(a5s)
	}, this.rg = function() {
		this.rV.aw(a5s), this.rc.show(a5s)
	}, this.rT = function() {
		return aTf
	}, this.show = function() {
		document.body.appendChild(hw)
	}, this.aw = function() {
		ax.removeChild(document.body, hw)
	}, this.resize = function(aTp) {
		var aTq = 1 - .4 * bA.bB.bC() * (b3.b4 > 1.6 * b3.b9),
			aTB = aR.az.b0(.05 * aTq),
			aTr = b3.b9 > b3.b4,
			aTs = aR.az.b0(.07 * aTq + .03 * aTr),
			aTt = aR.az.b0(.04 + .02 * aTr),
			aTr = aR.az.b0(.02 * aTq + .01 * aTr),
			aTv = aR.az.b0(.025);
		hw.style.font = aR.az.f8(0, aTv), aTq < 1 && (aTv = aR.az.f8(0, aTq * aTv), aTg.style.font = aTv, aTi.style.font = aTv, aTm.style.font = aTv, aTj.style.font = aTv, aTh.style.font = aTv), aTf.style.height = aR.az.b8(aTB), aTf.style.font =
			aR.az.f8(0, .72 * aTB), aR.az.bD(aTf, 2), aTg.style.top = aR.az.b8(aTB), aTg.style.height = aR.az.b8(aTs), aR.az.bD(aTg, 2), aTh.style.font = aR.az.f8(0, aTq * aR.az.b0(.02)), aTh.style.top = aR.az.b8(aTB + aTs), aTh.style.height = aR
			.az.b8(aTt), aR.az.bD(aTh, 2), aTi.style.top = aR.az.b8(aTB + aTs + aTt), aTi.style.height = aR.az.b8(aTs), aR.az.bD(aTi, 2), a5s.style.top = aR.az.b8(aTB + aTs + aTt + aTs), a5s.style.height = aR.az.b8(b3.b9 / b3.b5 - aTB - 3 * aTs -
				aTt - aTr), aTj.style.top = aR.az.b8(b3.b9 / b3.b5 - aTs - aTr), aTj.style.height = aR.az.b8(aTr), aR.az.bD(aTj, 8), aTl.style.font = aR.az.f8(0, .8 * aTr), aTm.style.top = aR.az.b8(b3.b9 / b3.b5 - aTs), aTm.style.height = aR.az
			.b8(aTs), aR.az.bD(aTm, 8), rI.resize(aTg), rC.resize(aTg), aTe.resize(aTg), rJ.resize(aTg), aTp ? this.rV.resize(a5s) : this.rc.resize()
	};
	a0 = this;
	hw.style.position = "absolute", hw.style.top = "0", hw.style.left = "0", hw.style.width = "100%", hw.style.height = "100%", hw.style.backgroundColor = aJ.a19, gr.i3() || (hw.style.backdropFilter = "blur(4px)", hw.style.webkitBackdropFilter =
		"blur(4px)"), aTf.style.position = "absolute", aTf.style.top = "0", aTf.style.left = "0", aTf.style.width = "100%", aTf.style.display = "flex", aTf.style.alignItems = "center";
	for (var nu = [aTg, aTh, aTi, aTm], ai = 0; ai < nu.length; ai++) nu[ai].style.position = "absolute", nu[ai].style.left = "0", nu[ai].style.width = "100%", aR.az.aCX(nu[ai]);
	a5s.style.position = "absolute", a5s.style.left = "0", a5s.style.width = "100%", a5s.style.font = "inherit", aTj.style.position = "absolute", aTj.style.left = "0", aTj.style.width = "100%", aTk.style.position = "absolute", aTk.style.top = "0",
		aTk.style.left = "0", aTk.style.height = "100%", aTk.style.width = "50%", aTk.style.backgroundColor = aJ.a1O, aTl.innerHTML = "", aTl.style.position = "absolute", aTl.style.top = "50%", aTl.style.left = "50%", aTl.style.transform =
		"translate(-50%, -50%)", aTf.appendChild(function() {
			var aHD = document.createElement("h1");
			return aHD.textContent = L(385), aHD.style.margin = "0 auto 0.15em auto", aHD.style.fontFamily = "Arial Black, Trebuchet MS", aHD.style.fontSize = "inherit", aHD.style.fontWeight = "inherit", aHD
		}()), aTg.appendChild(rI.v1), aTh.appendChild(rC.v1), aTi.appendChild(aTe.v1), aTj.appendChild(aTk), aTj.appendChild(aTl), aTm.appendChild(rJ.v1), hw.appendChild(aTf), hw.appendChild(aTg), hw.appendChild(aTh), hw.appendChild(aTi), hw
		.appendChild(a5s), hw.appendChild(aTj), hw.appendChild(aTm), a0.rc.show(a5s)
}

function aTx() {
	this.em = function() {
		var a8C = function() {
				for (var sC = zK.zL.sC, ae = sC.length, max = 0, ai = 0; ai < ae; ai++) max = Math.max(max, sC[ai]);
				return aOq(Math.max(max, 1))
			}(),
			b4 = (aq = bK.data, (b4 = hp).q(), b4.et(12, hd.rVersion), b4.a8 += 43, b4.et(2, aq.mapType), b4.et(8, aq.mapProceduralIndex), b4.et(8, aq.mapRealisticIndex), b4.et(14, aq.mapSeed), b4.aGs(aq.mapName, 5), 2 === aq.mapType && b4.aGt(aq
				.canvas), b4.et(1, aq.passableWater), b4.et(1, aq.passableMountains), b4.et(10, aq.playerCount), b4.et(10, aq.humanCount), b4.et(9, aq.selectedPlayer), b4.et(1, aq.gameMode), b4.et(2, aq.playerMode), b4.et(2, aq
				.battleRoyaleMode), b4.et(4, aq.numberTeams), b4.et(1, aq.isZombieMode), b4.et(1, aq.isContest), b4.et(1, aq.isReplay), b4.a2g(aq.elo, 2, 14), b4.et(1, aq.colorsType), b4.et(1, aq.colorsPersonalized), b4.a2g(aq.colorsData, 10,
				18), b4.et(1, aq.selectableColor), b4.a2g(aq.teamPlayerCount, 4, 10), b4.et(1, aq.neutralBots), b4.et(2, aq.botDifficultyType), b4.et(4, aq.botDifficultyValue), b4.a2g(aq.botDifficultyTeam, 4, 4), b4.a2g(aq.botDifficultyData,
				10, 4), b4.et(2, aq.spawningType), b4.et(14, aq.spawningSeed), b4.a2g(aq.spawningData, 11, 12), b4.et(1, aq.selectableSpawn), b4.et(2, aq.playerNamesType), b4.aGr(aq.playerNamesData, 10, 5), b4.et(1, aq.selectableName), b4.et(
				2, aq.aIncomeType), b4.et(8, aq.aIncomeValue), b4.a2g(aq.aIncomeData, 10, 8), b4.et(2, aq.tIncomeType), b4.et(8, aq.tIncomeValue), b4.a2g(aq.tIncomeData, 10, 8), b4.et(2, aq.iIncomeType), b4.et(8, aq.iIncomeValue), b4.a2g(aq
				.iIncomeData, 10, 8), b4.et(2, aq.sResourcesType), b4.et(11, aq.sResourcesValue), b4.a2g(aq.sResourcesData, 10, 11), b4.a2g(aq.a5a, 10, 30), ! function(a8C) {
				var b4 = hp,
					s7 = zK.zL.s7,
					sG = zK.zL.s8,
					sH = zK.zL.s9,
					mA = zK.zL.sA,
					ae = s7.length;
				b4.et(5, a8C), b4.et(30, ae), b4.et(30, zK.zL.sC.length);
				for (var ai = 0; ai < ae; ai++) {
					var iJ = s7[ai];
					b4.et(4, iJ), b4.et(9, sG[ai]), 0 === iJ ? b4.et(22, sH[ai]) : 1 === iJ ? (b4.et(10, sH[ai]), b4.et(10, mA[ai])) : 2 === iJ ? (b4.et(10, sH[ai]), b4.et(9, mA[ai])) : 3 === iJ ? (b4.et(10, sH[ai]), b4.et(27, mA[ai])) :
						4 === iJ ? (b4.et(10, sH[ai]), b4.et(16, mA[ai])) : 5 === iJ || 6 === iJ ? b4.et(10, sH[ai]) : 7 === iJ ? b4.et(1, sH[ai]) : 10 === iJ && (b4.et(20, sH[ai]), b4.et(22, mA[ai]))
				}
			}(a8C), ! function(a8C) {
				for (var b4 = hp, sB = zK.zL.sB, sC = zK.zL.sC, ae = sB.length, ai = 0; ai < ae; ai++) b4.et(1, sB[ai]), b4.et(a8C, sC[ai])
			}(a8C), hp.a8),
			aq = je.kI(b4 - 1, 6) + 1,
			a8C = (cN.cO(6 * aq) !== hp.nu.length && hp.nu.push(0), ! function() {
				var b4 = hp;
				b4.a8 = 24, b4.et(31, b4.nu.length), b4.a8 = 12, b4.et(12, function() {
					for (var nu = hp.nu, ae = nu.length, lh = hd.rVersion, ai = 3; ai < ae; ai++) lh = lh + nu[ai] & 4095;
					return lh
				}())
			}(), cM.q(hp.nu), cI.bx.cJ(cI.bx.cK(aq)));
		return cM.cC(), hp.q(), a8C
	}
}

function aDu() {
	this.eC = function() {
		if (0 !== jQ.aZ.oR && (eD.globalAlpha = Math.min(jQ.aZ.oR / 580, 1), eD.drawImage(jQ.aZ.wE, 1 + e7.dX(), 1 + e7.dY()), eD.globalAlpha = 1, bK.j9)) {
			for (var g = dK / dJ, j = dL / dJ, k = (b3.b4 + dK) / dJ, l = (b3.b9 + dL) / dJ, gO = jQ.aZ.wD * dJ, wF = jQ.aZ.wF, ai = bK.gd - 1; 0 <= ai; ai--) ! function(ai, gO, g, j, k, l, wF) {
				var highlight;
				0 === fL.gl[ai] || 0 === fL.ge[ai] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[ai]) && (gO *= 2), k = b3.b4 * ((fL.jI[ai] + fL.jK[ai] + 1) / 2 - g) / (k - g) - .5 * gO, g = b3.b9 * ((fL.jJ[
					ai] + fL.jL[ai] + 1) / 2 - j) / (l - j) - .5 * gO, k > b3.b4) || g > b3.b9 || k < -gO || g < -gO || (highlight ? eD.setTransform(2 * dJ, 0, 0, 2 * dJ, k, g) : eD.setTransform(dJ, 0, 0, dJ, k, g), eD.drawImage(wF[bK
					.fR ? gT.og[ai] : 1], 0, 0))
			}(ai, gO, g, j, k, l, wF);
			eD.setTransform(dJ, 0, 0, dJ, 0, 0)
		}
	}
}

function aLd() {
	var aSR = [];
	this.a2s = function(player, a2q, a87, aU8) {
		player === bK.bL || a2q === bK.bL || !aU8 && aR.bc.ms(player) || aR.bc.ms(a2q) || this.be(fL.fM[player] + " supported " + fL.fM[a2q] + " with " + aR.aS.t3(a87) + " ressource" + (1 === a87 ? "." : "s."))
	}, this.be = function(en, bH) {
		en = {
			bv: jF.yR(),
			en: en,
			bH: bH
		};
		aSR.push(en), 30 === ax.d2 && ax.d3().be(en)
	}, this.clear = function() {
		aSR = [];
		var qS = ax.ls(30);
		qS && qS.clear()
	}, this.aLk = function() {
		return aSR
	}
}

function aU9() {
	var aUA = new Uint16Array(bK.g6);

	function aUI(player, aUG) {
		for (var ae = oi.oj[0], aUP = oi.aUP, aUQ = -1, kL = bK.g6, ai = 0; ai < ae; ai++) {
			var kM, o4 = aUP[ai];
			kf.yz(player, o4) && (kM = hQ.a3e(aUG, hQ.a6P(o4)), -1 === aUQ || kM < aUQ) && (aUQ = kM, kL = o4)
		}
		return kL
	}

	function aUK(aUH, aUG) {
		if (aUH === bK.g6) return 0;
		var kj = fL.kj[aUH],
			kG = kj.length;
		if (0 === kG) return 0;
		for (var ae = Math.min(kG, 10), kL = 0, aUQ = hQ.a3e(kj[kL] >> 2, aUG), ai = 0; ai < ae; ai++) {
			var jc = kJ.tM(kG),
				kM = hQ.a3e(kj[jc] >> 2, aUG);
			kM < aUQ && (aUQ = kM, kL = jc)
		}
		return kj[kL] >> 2
	}

	function aUM(player, aUG, mV, aUR) {
		var aUS;
		(aUR === bK.g6 || (aUS = hQ.a6P(mV), aUR = hQ.a6P(aUR), hQ.a3e(aUG, aUS) < hQ.a3e(aUG, aUR))) && (aUA[player] = mV)
	}
	this.q = function() {
		aUA.fill(bK.g6)
	}, this.aUB = function() {
		if (bu.gE() % 109 == 9 && !(my.mz < 20) && bK.fR && !(fT.oW() < je.kI(8 * bK.a2l, 10))) {
			var oX = fT.oY();
			if (gT.oZ[oX]) {
				fT.ok(oX);
				var ae = oi.oj[0];
				if (0 !== ae)
					for (var nu = oi.oh, n0 = my.n0, mz = my.mz, aUC = aUA, jc = kJ.tM(ae), ai = 0; ai < mz; ai++) {
						var xh = n0[ai],
							xi = nu[jc];
						aR.bc.aDn(xh, xi) && 512 === aUC[xh] && (aUC[xh] = xi, jc = (jc + 1) % ae)
					}
			}
		}
	}, this.fA = function(player) {
		var aUG, aUJ, aUH, aUD = function(player) {
			var mV = aUA[player];
			if (mV !== bK.g6) {
				if (aR.bc.w8(mV) && fL.kj[mV]) return mV;
				aUA[player] = bK.g6
			}
			return bK.g6
		}(player);
		return function(player) {
			for (var a0W = my.n0, kG = my.mz, ae = Math.min(kG, kG < 17 && 5 === kJ.tM(20) ? 1 : 16), gO = kJ.tM(kG), aUP = oi.aUP, kj = fL.kj, nt = 0, ai = 0; ai < ae; ai++) {
				var o4 = a0W[(ai + gO) % kG];
				o4 !== player && kj[o4].length && (aUP[nt++] = o4)
			}
			oi.oj[0] = nt
		}(player), 0 !== oi.oj[0] && (0 < (aUJ = aUK(aUH = aUI(player, aUG = hQ.a6Q(player)), aUG)) && h4.eS.kB(player, h4.ak.aUL(aUJ, aUG)) ? (aUM(player, aUG, aUH, aUD), !0) : 0 < (aUH = function(player, aUG) {
			for (var ae = oi.oj[0], aUP = oi.aUP, aUC = aUA, gO = 0, ai = 0; ai < ae; ai++) {
				var o4 = aUP[ai],
					o4 = aUC[o4];
				o4 !== bK.g6 && aR.bc.w8(o4) && player !== o4 && kf.yz(player, o4) && (aUP[gO++] = o4)
			}
			return 0 !== (oi.oj[0] = gO) ? aUK(aUI(player, aUG), aUG) : 0
		}(player, aUG)) && h4.eS.kB(player, h4.ak.aUL(aUH, aUG)) ? (aUM(player, aUG, x.yj(aUH << 2), aUD), !0) : !!(0 < (aUJ = aUK(aUD, aUG)) && h4.eS.kB(player, h4.ak.aUL(aUJ, aUG))))
	}
}

function br() {
	this.ut = function(a8) {
		if ((rv = aY.bl.rv[a8]) < 2) return !1;
		var ab = aY.aZ.ac[a8],
			aUU = 9 === ab.rl ? 333 : 512,
			rv = Math.min(rv, aUU);
		8 === ab.rl && (rv -= rv % 2);
		aUU = aY.bl.rs[a8].splice(0, rv), aY.bl.rv[a8] -= rv, rv = function(aUV) {
			if (aY.bk)
				for (var ae = aUV.length, d8 = aY.bk.d8, ai = 0; ai < ae; ai++)
					if (aUV[ai].d8 === d8) return ai;
			return -1
		}(aUU);
		return -1 === rv ? (aY.bl.aIb = aY.bl.aIb.concat(aUU), 1e3 < aY.bl.aIb.length && aY.bl.aIb.splice(0, aY.bl.aIb.length - 1e3), aY.aZ.aIg += 29 === ax.d2 && aY.aZ.aa[0] === a8 && 1 === aY.aZ.aa[2], !1) : (8 === ab.rl && (ab.a9g = (ab.a9g +
			(rv >> 1)) % 1024, a8 = rv - rv % 2, rv %= 2, aUU = aUU.slice(a8, 2 + a8)), aEB.q(ab, aUU, rv), !0)
	}, this.aUY = function(ab, aUV, aUW) {
		var iP = bK.data = new a5c,
			aUb = (iP.spawningSeed = ab.spawningSeed, ab.rl < 7 ? (iP.gameMode = 1, iP.numberTeams = ab.rl + 2) : 9 === ab.rl ? (iP.gameMode = iP.isZombieMode = 1, iP.numberTeams = 2) : (iP.gameMode = 0, iP.battleRoyaleMode = 7 === ab.rl ? 0 :
				10 === ab.rl ? 1 : 2), iP.selectedPlayer = aUW, iP.isContest = ab.rx, iP.mapType = t.aUZ(ab.fH) ? 0 : 1, t.aUa(iP, ab.fH), iP.mapSeed = ab.mapSeed, iP.humanCount = aUV.length);
		iP.selectableSpawn = 1 === iP.gameMode || aUb < 100, iP.colorsData = new Uint32Array(aUb), iP.playerNamesData = new Array(aUb), iP.a5a = new Uint32Array(aUb);
		for (var ai = 0; ai < aUb; ai++) iP.colorsData[ai] = aUV[ai].color, iP.playerNamesData[ai] = aUV[ai].username, iP.a5a[ai] = aUV[ai].d8;
		if (2 === iP.battleRoyaleMode)
			for (iP.elo = new Uint16Array(aUb), ai = 0; ai < aUb; ai++) iP.elo[ai] = aUV[ai].elo;
		cB.setState(8), t.ha(ab.fH, iP.mapSeed), bK.aRQ(), bK.aRR = 2
	}
}

function aUc() {
	this.jn = function(a8, jl) {
		return Number(this.jo(a8, jl))
	}, this.jo = function(a8, jl) {
		var er = null;
		return 0 === bA.id ? bA.n5 && (er = bA.n5.getItem((jl ? "v" : "d") + a8)) : 1 === bA.id ? er = bA.n6.loadString((jl ? 1e3 : 2e3) + a8) : 2 === bA.id && (er = bA.aUd[(jl ? "v" : "d") + a8]), er && 0 !== er.length ? er : null
	}, this.aCC = function(ae, aUe) {
		var nu = [],
			aUf = aUe ? "e" : "l";
		if (0 === bA.id) {
			if (bA.n5)
				for (ai = 0; ai < ae; ai++) nu.push(bA.n5.getItem(aUf + ai))
		} else if (1 === bA.id)
			for (var aUg = aUe ? 5e3 : 3e3, ai = 0; ai < ae; ai++) nu.push(bA.n6.loadString(aUg + ai));
		else if (2 === bA.id)
			for (ai = 0; ai < ae; ai++) nu.push(bA.aUd[aUf + ai]);
		return nu
	}, this.save = function(a8, value, jl) {
		var aOM = (jl ? "v" : "d") + a8;
		if (0 === bA.id) {
			if (bA.n5 && bz.c0.data[140].value) try {
				bA.n5.setItem(aOM, value)
			} catch (aH) {
				console.log(aH)
			}
		} else 1 === bA.id ? bA.n6.saveString((jl ? 1e3 : 2e3) + a8, value) : 2 === bA.id && (bA.aUd[aOM] = value, bA.n7.postMessage(aOM + " " + value))
	}, this.aCI = function(nu, aUe) {
		var ae = nu.length,
			aUf = aUe ? "e" : "l";
		if (0 === bA.id) {
			if (bA.n5 && bz.c0.data[140].value) try {
				for (ai = 0; ai < ae; ai++) bA.n5.setItem(aUf + ai, nu[ai])
			} catch (aH) {
				console.log(aH)
			}
		} else if (1 === bA.id)
			for (var aUg = aUe ? 5e3 : 3e3, ai = 0; ai < ae; ai++) bA.n6.saveString(aUg + ai, nu[ai]);
		else if (2 === bA.id)
			for (ai = 0; ai < ae; ai++) bA.aUd[aUf + ai] = nu[ai], bA.n7.postMessage(aUf + ai + " " + nu[ai])
	}
}

function aLG() {
	this.kE = new aED, this.aIy = new kA, this.aIz = new aU9, this.performance = new aUh, this.a3x = new aF1, this.mp = new aII, this.aIW = new aUi, this.aIx = new tG, this.aTT = new aDj, this.q = function() {
		this.kE.q(), this.aIz.q(), this.performance.q(), this.a3x.q(), this.mp.q()
	}, this.fA = function() {
		this.performance.fA(), this.kE.fA(), this.aIz.aUB()
	}
}

function eP() {
	function aUm(player, mW, aUl, aJ4) {
		var mV;
		if (x.yr(aUl)) mV = bK.g6;
		else {
			if ((mV = x.yj(aUl)) === player) return void jB.lC(player, mW - aR.bc.md(player, mW), 12);
			if (!kf.yz(player, mV)) return void k6.aCz.aQd(player, mV, mW)
		}
		ks.mi(player, mV) || ks.mj(player) ? (fL.kn[player].push(aJ4 << 2), ks.fJ(player, mW, mV), a4S.wA(player, !0)) : jB.lC(player, mW, 12)
	}
	this.fA = function() {
		for (var hL = h4.aZ.hL, hH = h4.aZ.hH, hI = h4.aZ.hI, ai = h4.aZ.hB - 1; 0 <= ai; ai--) 65535 === hI[ai] && function(ai, aJ4, a3j) {
			if (6 === a3j) {
				if (h4.eh.aDZ(ai, aJ4)) return h4.aZ.hO[ai]++, h4.aZ.hI[ai] = 0, 0
			} else {
				var player = h4.aZ.hD[ai] >> 3,
					ai = h4.aZ.hJ[ai];
				jB.aGi(player), a3j < 4 ? aUm(player, ai, aJ4 + hQ.a62[a3j] << 2, aJ4) : 4 === a3j ? function(player, mW, aJ4) {
					var ai, aG6, a66 = hQ.a63,
						yq = hQ.kW(aJ4);
					for (ai = 0; ai < 4; ai++)
						if (aG6 = yq + a66[ai], x.yr(aG6)) return aUm(player, mW, aG6, aJ4);
					for (ai = 0; ai < 4; ai++)
						if (aG6 = yq + a66[ai], x.yi(aG6) && !x.aQU(player, aG6)) return aUm(player, mW, aG6, aJ4);
					for (ai = 0; ai < 4; ai++)
						if (aG6 = yq + a66[ai], x.yi(aG6)) return aUm(player, mW, aG6, aJ4)
				}(player, ai, aJ4) : 5 === a3j && function(player, mW, aJ4) {
					var ai, aG6, a66 = hQ.a63,
						yq = hQ.kW(aJ4);
					for (ai = 0; ai < 4; ai++)
						if (aG6 = yq + a66[ai], x.yi(aG6) && x.aQU(player, aG6)) return aUm(player, mW, aG6, aJ4);
					for (ai = 0; ai < 4; ai++)
						if (aG6 = yq + a66[ai], x.yi(aG6)) return aUm(player, mW, aG6, aJ4);
					for (ai = 0; ai < 4; ai++)
						if (aG6 = yq + a66[ai], x.yr(aG6)) return aUm(player, mW, aG6, aJ4)
				}(player, ai, aJ4)
			}
			return 1
		}(ai, hQ.pM(hH[ai]), hL[ai] % 64) && (h4.eh.aBm(ai), h4.eF.h8(ai))
	}, this.aNZ = function(player, j4, a3j, pJ, mW) {
		if (!(5 <= a3j)) {
			var aKX = bK.bL;
			if (aR.bc.ye(aKX) && kf.yz(player, aKX) && player !== aKX && 0 !== fL.kj[aKX].length && aR.bc.aMZ(player, 5)) {
				for (var aUl, aUk = !1, ai = 0; ai < 4; ai++)
					if (aUl = j4 + hQ.a62[ai] << 2, x.z3(aUl) && !x.yr(aUl) && x.yj(aUl) === aKX) {
						aUk = !0;
						break
					} aUk && (bI.a0S(719, 0), a3j = mW < 25e3 ? L(445) + " (" + aR.aS.t3(mW) + ") ⛵" : L(446) + " (" + aR.aS.t3(mW) + ") 🚢", bI.be(180, a3j, 719, player, aJ.a1W, aJ.bg, -1, !0, void 0, {
					pW: 1,
					pJ: pJ
				}))
			}
		}
	}
}

function aLR() {
	this.aOj = new a4n, this.result = new jp, this.jz = new r7, this.a4y = new aS7, this.a4v = new a95, this.a4x = new aO2, this.q = function() {
		this.result.q()
	}
}

function aL6() {
	var canvas, f4, r, s, sz, aUp, gap, aUq, fontSize, aUr, mB, aUs, aUt, aUu, aUv, aUw, aUx, aUy;

	function aV2() {
		f4.clearRect(0, 0, jF.b4, jF.b9), f4.fillStyle = aJ.bg, f4.fillRect(0, 0, jF.b4, jF.b9), f4.fillStyle = aJ.a1M, dx = 0 < aUw ? aUw : Math.sqrt(aUt[4] / 1e4), f4.fillRect(0, jF.b9 - sz - 1, Math.floor(dx * jF.b4), sz), f4.fillStyle = aJ.eA, f4
			.fillRect(0, 0, jF.b4, 1), f4.fillRect(0, 0, 1, jF.b9), f4.fillRect(jF.b4 - 1, 0, 1, jF.b9), f4.fillRect(0, jF.b9 - 1, jF.b4, 1), f4.fillRect(0, jF.b9 - sz - 1, jF.b4, 1);
		for (var dx, aV3, gj = 0, ai = 0; ai < aUs.length; ai++) aUu[ai] ? (aR.az.textAlign(f4, 0), aV3 = Math.floor((aUp - sz + 2 * aUq) * (ai - gj + 1) / (aUs.length + 1) - .7 * aUq), f4.fillText(aUs[ai], gap, aV3), aR.az.textAlign(f4, 2), 5 ===
			ai && 0 !== fL.gl[bK.bL] && fL.jD[bK.bL] >= a2n.a2o(bK.bL) ? (f4.fillStyle = aJ.a1n, f4.fillText(aV0(ai), jF.b4 - gap, aV3), f4.fillStyle = aJ.eA) : f4.fillText(aV0(ai), jF.b4 - gap, aV3)) : gj++
	}

	function aV0(ai) {
		return ai < 3 ? aUt[ai].toString() : 3 === ai || 4 === ai || 5 === ai ? aR.aS.aAq(aUt[ai] / 100, 2) : ai < 7 ? aR.aS.t3(aUt[ai]) : ai === 7 ? jF.aK7(aUt[7]) : ai === 8 ? __fx.utils.getMaxTroops(fL.ge, bK.bL) : __fx.utils.getDensity(bK.bL)
	}

	function aUz() {
		fL.ge[bK.bL] !== aUt[6] && (aUt[6] = fL.ge[bK.bL], aUr++)
	}
	this.q = function() {
		aUw = aUx = 0, (mB = new Array(8))[0] = L(447), mB[1] = bK.bX ? L(55) : L(448), mB[2] = L(449), mB[3] = L(450), mB[4] = L(201), mB[5] = L(379, 0, "Interest"), mB[6] = L(378), mB[7] = L(451),
			mB.push("Max Troops", "Density"), // add mB
			(aUs = new Array(mB.length)).fill(""), (aUt = new Array(mB.length))[0] = bK.bX ? 0 : bK.gd, aUt[1] = bK.bX ? my.mz : bK.aRs, aUt[2] = bK.a4t, aUt[3] = 0, aUt[4] = je.kI(1e4 * fL.ge[0], Math.max(bK.a2l, 1)), aUt[5] = 0 === bK.data
			.iIncomeType ? 700 : 1 === bK.data.iIncomeType ? je.kI(700 * bK.data.iIncomeValue, 64) : je.kI(700 * bK.data.iIncomeData[bK.bL], 64), aUt[6] = 0, aUz(), aUt[7] = 0, aUv = aV0(6), (aUu = new Array(mB.length)).fill(!0), aUy = 0, aUy =
			bK.bX ? (aUu[0] = !1, aUu[2] = !1, aUu[3] = !1, 3) : (aUu[3] = !1, 1), aUr = 0, this.resize()
	}, this.resize = function() {
		this.b4 = Math.floor((bA.bB.bC() ? .1646 : .126) * 1.25 * b3.dG), this.b9 = Math.floor(1.18 * this.b4), sz = Math.floor(.04 * this.b4), gap = Math.floor(.035 * this.b4), aUq = .04 * this.b4, aUp = this.b9, this.b9 -= Math.floor(aUy * (
			this.b9 - 2 * sz) / mB.length), fontSize = Math.floor(.7 * (aUp - sz) / mB.length);
		var ez = aR.az.f8(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.b4, canvas.height = this.b9,
			function(ez, b4) {
				for (var ai = 0; ai < aUs.length; ai++) aUs[ai] = aR.f4.g8(mB[ai], ez, b4)
			}((f4 = canvas.getContext("2d", {
				alpha: !0
			})).font = ez, .575 * this.b4), aR.az.textBaseline(f4, 1), f4.lineWidth = 1, this.jG(), this.dS(), aEA.dS(), aV2()
	}, this.dS = function() {
		r = b3.b4 - this.b4 - dH.gap
	}, this.aMG = function() {
		s = dH.gap
	}, this.jG = function() {
		s = dH.gap + (aEA.aRC() && 0 !== fL.gl[bK.bL] && !bK.j9 ? aEA.b9 + dH.gap : 0)
	}, this.gC = function(au) {
		(au || 100 <= aUr) && (aUr = 0, aV2())
	}, this.yR = function() {
		return aUt[7]
	}, this.aK7 = function(value) {
		var kG = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kG) / 1e3);
		return value < 10 ? kG + ":0" + value : kG + ":" + value
	}, this.fA = function() {
		var aGb, per;
		aUu[0] && bK.a4u - bK.a4t !== aUt[0] && (aUt[0] = bK.a4u - bK.a4t, aUr++), my.mz - aUt[0] !== aUt[1] && (aUt[1] = my.mz - aUt[0], aUr++), this.aE6(), (aGb = a2n.a2i(bK.bL)) !== aUt[5] && (aUt[5] = aGb, aUr++), aUz(), aUt[7] += bu.vr,
			aGb = aV0(7), aUv !== aGb && (aUv = aGb, aUr += 100), aGb = bK.fR ? fT.oW() : fL.ge[fZ[0]], per = je.kI(1e4 * aGb, Math.max(bK.a2l, 1)), aUt[3] = aGb, aUt[4] !== per && (aUr++, aUt[4] = per), 8 === bK.k7 && function() {
				for (var ai = 0; ai < 2; ai++)
					if (!aR.bc.ye(ai)) return jy.aOj.a4r(), 1;
				return
			}() || aUt[3] < bK.a2l || ! function() {
				for (var ai = my.mz - 1; 0 <= ai; ai--)
					if (0 < fL.kn[my.n0[ai]].length) return;
				return 1
			}() || h4.ak.aJ2().length || jy.aOj.a4r()
	}, this.aE6 = function() {
		aUu[2] && bK.a4t !== aUt[2] && (aUt[2] = bK.a4t, aUr += 2 === bK.fC ? 100 : 1)
	}, this.aIv = function() {
		return aUt[3] === bK.a2l
	}, this.a5I = function(ai) {
		var qS, aVC, gj;
		return 2 !== bK.fC && (ai % 2 == 1 && (zw.gC(1, 1), bu.dw = !0), ai === bK.a5H ? (aUw = 0, aV2(), !1) : (-1 !== ai || 0 !== aUx) && (aVC = aUw, aUw = bK.bY ? ai / bK.a5H : (gj = performance.now(), 0 <= ai && (qS = gj - 392 * ai, aUx =
			0 === ai || qS < aUx ? qS : aUx), 1 < (aUw = (gj - aUx) / (392 * bK.a5H)) ? 1 : aUw), aV2(), aUw !== aVC))
	}, this.eC = function() {
		eD.drawImage(canvas, r, s)
	}
}

function aLD() {
	var aVD;

	function aVR(mD, a8l, r, s, globalAlpha) {
		t.a2U.save(), t.a2U.globalAlpha = globalAlpha, t.a2U.imageSmoothingEnabled = !1, t.a2U.scale(a8l, a8l), t.a2U.drawImage(mD, Math.floor(r * (t.u / a8l - mD.width)), Math.floor(s * (t.v / a8l - mD.height))), t.a2U.restore()
	}
	this.aOa = 0, this.aVE = 0, this.aVF = 0, this.aFx = 0, this.q = function() {
		(aVD = new Array(t.a9J))[0] = {
			b4: [0, 5e3, 8e3, 1e4],
			oo: [220, 250, 255, 220],
			qS: [190, 220, 0, 0],
			pW: [170, 200, 0, 0]
		}, aVD[1] = {
			b4: [0, 4e3, 5e3, 6e3, 1e4],
			oo: [25, 0, 100, 0, 25],
			qS: [25, 0, 0, 0, 25],
			pW: [25, 0, 0, 0, 25]
		}, aVD[2] = {
			b4: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			oo: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qS: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			pW: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aVD[3] = {
			b4: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			oo: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			qS: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			pW: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aVD[4] = {
			b4: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			oo: [10, 10, 20, 10, 10, 170, 212],
			qS: [20, 20, 60, 100, 100, 110, 170],
			pW: [70, 70, 160, 30, 30, 60, 120]
		}, aVD[5] = {
			b4: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			oo: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qS: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			pW: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aVD[6] = {
			b4: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			oo: [10, 10, 60, 255, 255, 200, 200],
			qS: [10, 10, 60, 255, 255, 200, 200],
			pW: [80, 80, 255, 255, 255, 200, 200]
		}, aVD[7] = {
			b4: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			oo: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qS: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			pW: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aVD[8] = {
			b4: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			oo: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qS: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			pW: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aVD[9] = {
			b4: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			oo: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qS: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			pW: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aVD[20] = {
			b4: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			oo: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			qS: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			pW: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aVD[21] = {
			b4: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			oo: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			qS: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			pW: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aVG = function() {
		var aVQ, ai, gF, sG, wP = function() {
				var wP;
				return t.a16 = document.createElement("canvas"), t.a16.width = t.u, t.a16.height = t.v, t.a2U = t.a16.getContext("2d", {
					alpha: !1
				}), wP = t.a2U.getImageData(0, 0, t.u, t.v), t.a2X = wP.data, wP
			}(),
			b4 = aVD[t.fH].b4,
			oo = aVD[t.fH].oo,
			qS = aVD[t.fH].qS,
			pW = aVD[t.fH].pW,
			er = a2G.a2P(),
			ae = b4.length - 2,
			aVL = new Array(1 + ae),
			aVM = new Array(1 + ae),
			aVN = new Array(1 + ae),
			aVO = new Array(1 + ae);
		for (gF = ae; 0 <= gF; gF--) aVL[gF] = b4[gF + 1] - b4[gF], aVM[gF] = oo[gF + 1] - oo[gF], aVN[gF] = qS[gF + 1] - qS[gF], aVO[gF] = pW[gF + 1] - pW[gF];
		for (ai = t.u * t.v - 1; 0 <= ai; ai--)
			for (gF = ae; 0 <= gF; gF--)
				if (er[ai] >= b4[gF]) {
					sG = er[ai] - b4[gF], t.a2X[4 * ai] = oo[gF] + aNV(aVM[gF] * sG, aVL[gF]), t.a2X[4 * ai + 1] = qS[gF] + aNV(aVN[gF] * sG, aVL[gF]), t.a2X[4 * ai + 2] = pW[gF] + aNV(aVO[gF] * sG, aVL[gF]), t.a2X[4 * ai + 3] = 255;
					break
				} t.a2U.putImageData(wP, 0, 0), t.aVJ(t.fH) && gZ.mK() && t.aVJ(t.fH) && (wP = gZ.aGL("arena"), aVQ = gZ.aGL("territorial.io"), aVR(wP, 5, .5, .5, .1), aVR(aVQ, 2, .5, .45, .1)), t.aKh = !0, bu.dw = !0
	}, this.aVS = function() {
		for (var o4, r, s, aFu, aFv, sH, aVE = 0, b4 = t.u, b9 = t.v, sG = b4 * b9 * 4, aFs = w, aFt = t.a2X, ai = b4 - 1; 0 <= ai; ai--) aFs[(o4 = ai << 2) + 2] = aFs[sG - o4 - 2] = 3;
		for (sG = 4 * b4, ai = b9 - 1; 0 <= ai; ai--) aFs[(o4 = ai * sG) + 2] = aFs[o4 + sG - 2] = 3;
		for (aFu = b4 - 1, aFv = b9 - 1, s = 1; s < aFv; s++)
			for (sG = s * b4, r = 1; r < aFu; r++) sH = 1 - (aFt[(o4 = sG + r << 2) + 2] > aFt[o4 + 1] && aFt[o4 + 2] > aFt[o4]), aFs[o4 + 2] = 6 - 5 * sH, aVE += sH;
		this.aOa = (b4 - 2) * (b9 - 2), this.aFx = 0, t.kk(t.fH) && (t.aFx.aFr(), t.aFx.aFy(4, 5)), this.aVE = bK.a2l = aVE - this.aFx, this.aVF = this.aOa - this.aVE - this.aFx, this.aVF && (t.aFx.aFy(6, 2), t.aFx.aG7())
	}
}

function aBq() {
	var aVT, aVV;
	this.tn = 5, this.aVU = null;

	function aVa(ai) {
		return aVV[ai].a7N && aVT[ai].aVa()
	}

	function aVX(hZ) {
		aVV[hZ].bv = bu.bv, aVV[hZ].aQf = !1
	}
	this.li = 0, this.hk = 0, this.q = function() {
		this.aVU = new Array(this.tn);
		this.aVU[0] = "territorial.io";
		var a0z = kJ.a2N(0);
		kJ.a2O(0);
		for (var ai = 1; ai < this.tn; ai++) this.aVU[ai] = aKo.aHT() + ".territorial.io";
		for (kJ.a2O(a0z), aVT = new Array(this.tn), aVV = new Array(this.tn), ai = this.tn - 1; 0 <= ai; ai--) aVV[ai] = {
			a7N: !1,
			bv: 0,
			aQf: !1
		};
		this.qk(0, 0)
	}, this.vH = function(ai) {
		return aVT[ai]
	}, this.fA = function() {
		for (var ai = this.tn - 1; 0 <= ai; ai--) this.aI4(ai) && bu.bv > aVV[ai].bv + 15e3 && (bM.bN.aQe(ai, aVV[ai].aQf), aVX(ai));
		!this.aI4(0) && bu.bv > aVV[0].bv + 8e3 && (aVV[0].bv = bu.bv, this.qk(0, 0))
	}, this.qh = function(id) {
		return this.qk(0, id) && this.aVY(0)
	}, this.qk = function(hZ, lt) {
		if (aVV[hZ].a7N) {
			if (aVT[hZ].aVa()) return aVT[hZ].aVb(lt), aVT[hZ].aI4();
			aVT[hZ].aw()
		}
		return this.aVZ(hZ, lt), !1
	}, this.aVZ = function(hZ, lt) {
		aVV[hZ].a7N = !0, aVX(hZ), aVT[hZ] = new aVc, aVT[hZ].q(hZ, lt)
	}, this.aVb = function(hZ, lt) {
		aVa(hZ) && aVT[hZ].aVb(lt)
	}, this.aVd = function(hZ, lt) {
		bM.hf.lT(hZ)
	}, this.aVY = function(ai) {
		return this.aI4(ai) && aVT[ai].aVY()
	}, this.vL = function(ai) {
		aVT[ai].vL()
	}, this.aI4 = function(ai) {
		return aVV[ai].a7N && aVT[ai].aI4()
	}, this.send = function(hZ, hl) {
		0 !== hZ && aVX(hZ), aVT[hZ].send(hl)
	}, this.zo = function(hZ) {
		8 === cB.mP() && (aVV[hZ].aQf = !0, bM.aBr.aD1 = !0)
	}, this.close = function(hZ, aVe) {
		aVa(hZ) && aVT[hZ].close(aVe)
	}, this.cP = function(hZ, aVe) {
		ts.tt(aVe), aVa(hZ) && aVT[hZ].close(aVe)
	}, this.rX = function(aVe) {
		for (var ai = this.tn - 1; 0 <= ai; ai--) this.close(ai, aVe)
	}, this.aVf = function(hZ, aVe) {
		for (var ai = this.tn - 1; 0 <= ai; ai--) ai !== hZ && this.close(ai, aVe)
	}, this.aVg = function() {
		0 === this.li && (bK.bX || bK.bY) || this.close(this.li, 3246)
	}, this.aVh = function(hZ, aH) {
		aVT[hZ].aw(), ts.aVi(hZ, aH.code)
	}
}

function a3G() {
	var aVj = new Uint8Array(78);
	this.q = function() {
		var ai;
		for (aVj[50] = 37, ai = 0; ai < 10; ai++) aVj[ai + 3] = ai + 1;
		for (ai = 0; ai < 26; ai++) aVj[ai + 20] = ai + 11, aVj[ai + 52] = ai + 38
	}, this.aD8 = function(en) {
		return en.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.lw = function(en, size) {
		if ((en = this.aD8(en)).length > size) return en.substring(0, size);
		for (; en.length < size;) en = "-" + en;
		return en
	}, this.aD7 = function(en) {
		for (var aOE = aVj, ae = en.length, nu = new Uint8Array(ae), ai = 0; ai < ae; ai++) nu[ai] = aOE[en.charCodeAt(ai) - 45];
		return nu
	}, this.aD6 = function(aGv) {
		cN.ha(6 * aGv.length), this.aVk(aGv), cM.q(cN.hl)
	}, this.aVk = function(aGv) {
		for (var ae = aGv.length, b4 = cN, ai = 0; ai < ae; ai++) b4.et(6, aGv[ai])
	}, this.kY = function(en) {
		this.aVk(this.aD7(en))
	}, this.xV = function(en, size) {
		this.aVk(this.aD7(this.lw(en, size)))
	}, this.by = function(en, size) {
		for (var nu = this.aD7(this.lw(en, size)), er = 0, du = 1, ai = nu.length - 1; 0 <= ai; ai--) er += du * nu[ai], du *= 64;
		return er
	}
}

function eN() {
	var a8g = 32,
		a8h = new Array(2);

	function wJ(iJ) {
		var r, s, j4, dp, dn, wK = a8g,
			mD = aR.az.wJ(wK, wK),
			uH = aR.az.getContext(mD, !0),
			wP = aR.az.getImageData(uH, wK, wK),
			wQ = wP.data,
			kG = (wK >> 1) - .5,
			aUQ = Math.sqrt(kG * kG);
		for (wQ.fill(255), s = 0; s < wK; s++)
			for (r = 0; r < wK; r++) dn = r - kG, dp = s - kG, j4 = 4 * (s * wK + r), dn = 714 * (aUQ - Math.sqrt(dn * dn + dp * dp)) / aUQ, wQ[2 + j4] = iJ, wQ[3 + j4] = 255 < dn ? 0 : dn;
		return uH.putImageData(wP, 0, 0), mD
	}
	this.aVl = -1, this.q = function() {
		this.aVl = -1, a8h[0] || (a8h[0] = wJ(255), a8h[1] = wJ(0))
	}, this.wW = function(uH, dx, r, s, oo, ai) {
		aR.bc.ye(bK.bL) && (uH.setTransform(dx *= 4 / 3 * .625, 0, 0, dx, r - (oo *= 4 / 3), s - oo), uH.drawImage(a8h[+(h4.aZ.hK[ai] === this.aVl)], 0, 0))
	}
}

function a7L() {
	this.yp = function(dx) {
		var aVm;
		return t.kk(t.fH) && bK.data.passableMountains && (aVm = x.a3Q(dx), this.aVn(bK.bL, aVm) || this.aVo(bK.bL, aVm)) && 0 !== (aVm = function(aVr) {
			for (var r = hQ.j7(aVr), s = hQ.j8(aVr), max = Math.max(t.u, t.v) - 2, aVs = max * max, aUk = !1, aVt = 0, kM = 0; kM < max; kM++) {
				var aVu, j4 = function(r, s, kM) {
					for (var ai = 0; ai <= kM; ai++)
						for (var gF = -1; gF < 2; gF += 2)
							for (var pW = -1; pW < 2; pW += 2)
								for (var iJ = 0; iJ < 2; iJ++) {
									var dx = function(r, s) {
										if (hQ.kT(r, s)) {
											r = hQ.kU(r, s), s = hQ.kW(r);
											if (x.z3(s) && x.aQT(s)) return r
										}
										return 0
									}(r + iJ * gF * ai + (1 - iJ) * pW * kM, s + iJ * pW * kM + (1 - iJ) * gF * ai);
									if (dx) return dx
								}
					return 0
				}(r, s, kM);
				j4 && (aVu = hQ.kP(r, s, j4)) < aVs && (aVt = j4, aVs = aVu, aUk || (aUk = !0, max = Math.floor(Math.sqrt(aVu)) + 1))
			}
			return aVt
		}(hQ.a6K(dx))) && (dx = hQ.kW(aVm), x.yr(dx) || (dx = x.yj(dx)) !== bK.bL && kf.yz(dx, bK.bL)) ? aVm : 0
	}, this.a4P = function(player, j4) {
		j4 = hQ.kW(j4);
		if (x.z3(j4)) {
			if (x.yr(j4)) oi.a3v[0] = bK.g6;
			else if (x.yj(j4) !== oi.a3v[0]) return !1;
			for (var og = function(dx) {
					var aFC = x.aFC,
						og = [];
					loop: for (var iP = 3; 0 <= iP; iP--) {
						var aG6 = dx + aFC[iP];
						if (x.ym(aG6)) {
							for (var id = x.a3Q(aG6), ai = 0; ai < og.length; ai++)
								if (id === og[ai]) continue loop;
							oi.a4R[og.length] = aG6, og.push(id)
						}
					}
					return og
				}(j4), ae = og.length, ai = 0; ai < ae; ai++)
				if (this.aVn(player, og[ai]) || this.aVo(player, og[ai])) return oi.a4R[0] = oi.a4R[ai], !0
		}
		return !1
	}, this.aVn = function(player, aVm) {
		for (var kl = fL.kl[player], ae = kl.length, a3f = Math.max(je.kI(ae, 12), 1), aFC = x.aFC, ai = 0; ai < ae; ai += a3f)
			for (var yq = kl[ai], iP = 3; 0 <= iP; iP--) {
				var aG6 = yq + aFC[iP];
				if (x.ym(aG6) && aVm === x.a3Q(aG6)) return !0
			}
		return !1
	}, this.aVo = function(player, aVm) {
		for (var kl = fL.kl[player], ae = kl.length, aFC = x.aFC, ai = 0; ai < ae; ai++)
			for (var yq = kl[ai], iP = 3; 0 <= iP; iP--) {
				var aG6 = yq + aFC[iP];
				if (x.ym(aG6) && aVm === x.a3Q(aG6)) return !0
			}
		return !1
	}
}

function aPg() {
	var b4, b9, aVv;

	function aW6(xh, iP, aW4, aVy, wQ) {
		iP = aW5(xh, iP + 1 + 2 * aVy & 3);
		! function(xh, xi) {
			return 1 < Math.abs(xh % b4 - xi % b4) || 1 < Math.abs(aW8(xh) - aW8(xi))
		}(xh, iP) && 0 === wQ[iP << 2] && (wQ[iP << 2] = aW4)
	}

	function aW8(o4) {
		return Math.floor((o4 + .5) / b4) % b9
	}

	function aW5(o4, iP) {
		return o4 + aVv[iP]
	}
	this.cZ = function(en) {
		var ai, a8C, ae, aVw, a4l = cM;
		for (bw.bx.aD6(bw.bx.aD7(en)), t.fF.fG[t.fH].b4 = t.u = b4 = a4l.cR(12), t.fF.fG[t.fH].b9 = t.v = b9 = a4l.cR(12), aVv = [-b4, -1, b4, 1], t.a16 = document.createElement("canvas"), t.a16.width = t.u, t.a16.height = t.v, t.a2U = t.a16
			.getContext("2d", {
				alpha: !1
			}), t.a2V = t.a2X = null, t.a2V = t.a2U.getImageData(0, 0, t.u, t.v), t.a2X = t.a2V.data, aR.ie.aM3(t.a2X), ae = a4l.cR(12), a8C = a4l.cR(5), aVw = aOq(b4 * b9 - 1), ai = 0; ai < ae; ai++) ! function(kG, o4, aVx, aVy) {
			var ai, iP, a4l = cM,
				wQ = t.a2X,
				a3C = o4,
				aW1 = o4,
				aW2 = 0,
				aW3 = 1 + aVx,
				aW4 = 2 - aVx;
			for (wQ[o4 << 2] = aW3, ai = 0; ai < kG; ai++) iP = a4l.cR(2), o4 = aW5(o4, iP), wQ[o4 << 2] === aW3 ? aW2 % 2 == 1 && aW6(aW1, aW2 + 2 * aVy + 3, aW4, aVy, wQ) : wQ[o4 << 2] = aW3, aW6(o4, iP, aW4, aVy, wQ), aW6(aW1, iP, aW4,
				aVy, wQ), aW1 = o4, aW2 = iP;
			aW5(o4, 0) === a3C ? (aW6(o4, 0, aW4, aVy, wQ), aW6(a3C, 0, aW4, aVy, wQ)) : aW5(o4, 1) === a3C && (aW6(o4, 0, aW4, aVy, wQ), aW6(a3C, 2, aW4, aVy, wQ));
			0 === kG && (aW6(a3C, 0, aW4, aVy, wQ), aW6(a3C, 2, aW4, aVy, wQ))
		}(a4l.cR(a8C), a4l.cR(aVw), 1 === a4l.cR(1), 1 === a4l.cR(1));
		var r, s, jc, aW9, aWA, aWB, wQ = t.a2X,
			aWC = !0,
			a2I = t.fF.fG[t.fH].a2I,
			a2J = t.fF.fG[t.fH].a2J;
		for (s = 0; s < b9; s++)
			for (aW9 = !0, aWA = aWC, r = aWB = 0; r < b4; r++) jc = 4 * s * b4 + 4 * r, aWB <= r && 0 < wQ[jc] && (aWA = 2 === wQ[jc], aW9) && (aW9 = !1, aWA !== aWC) ? (aWC = aWA, aWB = r + 1, r = -1) : (aWA ? (wQ[jc] = a2J[0], wQ[1 + jc] =
				a2J[1], wQ[2 + jc] = a2J[2]) : (wQ[jc] = a2I[0], wQ[1 + jc] = a2I[1], wQ[2 + jc] = a2I[2]), wQ[3 + jc] = 255);
		t.a2U.putImageData(t.a2V, 0, 0), t.aKh = !0, t.a2M.q(), bu.dw = !0
	}
}

function aLS() {
	function aWF() {
		return {
			u: t.u,
			v: t.v,
			a16: t.a16,
			a2U: t.a2U,
			a2V: t.a2V,
			a2X: t.a2X,
			fH: t.fH,
			mapSeed: t.mapSeed,
			aKh: t.aKh
		}
	}

	function aWE(ai) {
		return 1 !== ai && t.aUZ(ai) && ai !== t.aWH()
	}
	this.a9J = 24, this.a9K = 12, this.j1 = 4096, this.u = 0, this.v = 0, this.a16 = null, this.a2U = null, this.a2V = null, this.a2X = null, this.fH = 0, this.mapSeed = 0, this.aKh = !1, this.a2M = new a25, this.fF = new a9A, this.aFx = new aFq,
		this.q = function() {
			this.fF.q()
		}, this.ha = function(map, aWD) {
			((map %= this.a9J) !== this.fH || aWE(this.fH) && aWD !== this.mapSeed) && (this.aKh = !1, this.a2M.a2F(), kJ.a2O(map), this.fH = map, this.mapSeed = aWD, aWE(map) && (t.fF.fG[map].a0z = aWD), this.aUZ(this.fH) ? (map = t.fF.fG[this.fH],
				this.u = map.b4, this.v = map.b9, kJ.a2O(map.a0z), a2G.ha([this.u, this.v, map.p4, map.p1]), aNI(), aFw.aVG(), a2G.a2H()) : aPf())
		}, this.a15 = function(map, aWD) {
			var sG = aWF(),
				map = (this.ha(map, aWD), this.a2M.a2F(), aWF());
			return aWD = sG, t.u = aWD.u, t.v = aWD.v, t.a16 = aWD.a16, t.a2U = aWD.a2U, t.a2V = aWD.a2V, t.a2X = aWD.a2X, t.fH = aWD.fH, t.mapSeed = aWD.mapSeed, t.aKh = aWD.aKh, map
		}, this.a5Y = function(canvas) {
			canvas && this.a16 !== canvas && (this.u = canvas.width, this.v = canvas.height, this.a16 = canvas, this.a2U = this.a16.getContext("2d", {
				alpha: !1
			}), this.wP = this.a2U.getImageData(0, 0, this.u, this.v), this.a2X = this.wP.data, this.fH = this.aWH(), this.mapSeed = 0, t.fF.fG[this.fH].name = bK.data.mapName)
		}, this.kk = function(ai) {
			return 3 === ai || 7 === ai || 9 === ai || 21 === ai || ai === this.aWH()
		}, this.aA3 = function(ai) {
			return 2 === ai || 7 === ai || 9 === ai || 20 === ai
		}, this.aVJ = function(ai) {
			return 1 === ai
		}, this.aWH = function() {
			return this.a9J
		}, this.aUZ = function(ai) {
			return void 0 === this.fF.fG[ai].a2K
		}, this.a14 = function(aq) {
			return 0 === aq.mapType ? aq.mapProceduralIndex < 10 ? aq.mapProceduralIndex : 10 + aq.mapProceduralIndex : 1 === aq.mapType ? 10 <= aq.mapRealisticIndex ? 22 + aq.mapRealisticIndex - 10 : aq.mapRealisticIndex + 10 : void 0
		}, this.aUa = function(aq, aWI) {
			0 === aq.mapType ? aq.mapProceduralIndex = aWI < 10 ? aWI : aWI - 10 : 1 === aq.mapType && (aq.mapRealisticIndex = aWI - (22 <= aWI ? 12 : 10))
		}
}

function it(aWJ, i5, aWK) {
	function click() {
		var value = 1 - aWJ.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + i5, void 0 !== aWJ.a8 ? bz.cG.cH(aWJ.a8, value) : aWJ.value = value, aWK && aWK(value)
	}
	var aH;
	i5 = i5 || L(452), this.aH = document.createElement("p"), (aH = this.aH).textContent = (aWJ.value ? "🟩 " : "⬜ ") + i5, aH.style.margin = "0", aH.style.marginBottom = "0.5em", aH.style.cursor = "pointer", aH.addEventListener("click", click)
}

function aLb() {
	function aWL(aH) {
		var nu, aH = aH.target.files;
		aH && 0 < aH.length && (aH = aH[0], "json" === (nu = aH.name.split("."))[nu.length - 1].toLowerCase()) && ((nu = new FileReader).onload = aWT, nu.readAsText(aH))
	}

	function aWT(aH) {
		var aWW;
		bK.fC || (aH = JSON.parse(aH.target.result), aWW = bK.data = new a5c, aWX(aH, aWW, "mapType", 0, 2), aWX(aH, aWW, "mapProceduralIndex", 0, 255), aWX(aH, aWW, "mapRealisticIndex", 0, 255), aWX(aH, aWW, "mapSeed", 0, 16383), function(aWV, aWW,
				gO, max) {
				aWV = aWV[gO];
				aWW[gO] = aWd(aWV) ? aWV.slice(0, max) : aWW[gO]
			}(aH, aWW, "mapName", 20), function(aWV, aWW, gO) {
				var uE;
				2 === aWW.mapType && (!aWd(aWV = aWV[gO]) || aWV.length <= 20 ? aWW.mapType = 0 : ((uE = new Image).onload = function() {
					zK.zQ.aAa(uE, 1), uE.onload = null, uE = null
				}, uE.src = aWV))
			}(aH, aWW, "canvas"), aWX(aH, aWW, "passableWater", 0, 1), aWX(aH, aWW, "passableMountains", 0, 1), aWX(aH, aWW, "playerCount", 1, 512), aWX(aH, aWW, "humanCount", 1, 1), aWX(aH, aWW, "selectedPlayer", 0, 0), aWX(aH, aWW, "gameMode",
				0, 1), aWX(aH, aWW, "playerMode", 0, 0), aWX(aH, aWW, "battleRoyaleMode", 0, 0), aWX(aH, aWW, "numberTeams", 0, 8), aWX(aH, aWW, "isZombieMode", 0, 0), aWX(aH, aWW, "isContest", 0, 0), aWX(aH, aWW, "isReplay", 0, 0), aWa(aH, aWW,
				"elo", 16, 2, 16383), aWX(aH, aWW, "colorsType", 0, 1), aWX(aH, aWW, "colorsPersonalized", 0, 1), aWa(aH, aWW, "colorsData", 32, 512, 262143), aWX(aH, aWW, "selectableColor", 0, 1), aWa(aH, aWW, "teamPlayerCount", 16, 9, 512),
			aWX(aH, aWW, "neutralBots", 0, 1), aWX(aH, aWW, "botDifficultyType", 0, 3), aWX(aH, aWW, "botDifficultyValue", 0, 15), aWa(aH, aWW, "botDifficultyTeam", 8, 9, 15), aWa(aH, aWW, "botDifficultyData", 8, 512, 15), aWX(aH, aWW,
				"spawningType", 0, 2), aWX(aH, aWW, "spawningSeed", 0, 16383), aWa(aH, aWW, "spawningData", 16, 1024, 4095), aWX(aH, aWW, "selectableSpawn", 0, 1), aWX(aH, aWW, "playerNamesType", 0, 2),
			function(aWV, aWW, gO, size, max) {
				var aG2 = aWV[gO];
				if (Array.isArray(aG2)) {
					for (var aG5 = new Array(size), ae = Math.min(aG2.length, size), ai = 0; ai < ae; ai++) aG5[ai] = aWd(aG2[ai]) ? aG2[ai].slice(0, max) : "";
					aG5.fill("", ae), aWW[gO] = aG5
				}
			}(aH, aWW, "playerNamesData", 512, 20), aWX(aH, aWW, "selectableName", 0, 1), aWX(aH, aWW, "aIncomeType", 0, 2), aWX(aH, aWW, "aIncomeValue", 0, 255), aWa(aH, aWW, "aIncomeData", 8, 512, 255), aWX(aH, aWW, "tIncomeType", 0, 2), aWX(
				aH, aWW, "tIncomeValue", 0, 255), aWa(aH, aWW, "tIncomeData", 8, 512, 255), aWX(aH, aWW, "iIncomeType", 0, 2), aWX(aH, aWW, "iIncomeValue", 0, 255), aWa(aH, aWW, "iIncomeData", 8, 512, 255), aWX(aH, aWW, "sResourcesType", 0, 2),
			aWX(aH, aWW, "sResourcesValue", 0, 2047), aWa(aH, aWW, "sResourcesData", 16, 512, 2047), ax.rW(), ax.aZ.aRg[0] = 0, ax.gu(19))
	}

	function aWX(aWV, aWW, gO, min, max) {
		aWV = aWV[gO];
		aWW[gO] = "number" == typeof aWV && min <= aWV && aWV <= max ? Math.floor(aWV) : aWW[gO]
	}

	function aWd(en) {
		return "string" == typeof en
	}

	function aWa(aWV, aWW, gO, aWe, size, max) {
		var aG2 = aWV[gO];
		if (Array.isArray(aG2)) {
			for (var aG5 = new(8 === aWe ? Uint8Array : 16 === aWe ? Uint16Array : Uint32Array)(size), ae = Math.min(aG2.length, size), ai = 0; ai < ae; ai++) aG5[ai] = je.jf(aG2[ai], 0, max);
			aWW[gO] = aG5
		}
	}
	this.aRh = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aWL, input.click()
	}, this.aRi = function() {
		for (var aWO, aWR, aLl = bK.data, keys = Object.keys(aLl), aWM = {}, ai = 0; ai < keys.length; ai++) {
			var key = keys[ai];
			aLl[key] instanceof Uint8Array || aLl[key] instanceof Uint16Array || aLl[key] instanceof Uint32Array ? aWM[key] = Array.from(aLl[key]) : aWM[key] = aLl[key]
		}
		aWM.canvas = 2 === aWM.mapType && aWM.canvas ? aWM.canvas.toDataURL() : null, aWO = aWM, aWO = JSON.stringify(aWO, null, 2), aWO = new Blob([aWO], {
			type: "application/json"
		}), (aWR = document.createElement("a")).href = URL.createObjectURL(aWO), aWR.download = "tt_scenario.json", aWR.click()
	}
}

function aLO() {
	this.zL = new s6, this.zM = new aTx, this.zQ = new aD3, this.q = function() {
		bK.bY || this.zL.q()
	}, this.fA = function() {
		bK.bY || (this.zL.fA(), 3 !== ax.d2) || bu.gE() % 15 != 5 && 2 !== bK.fC || ax.d3().zI()
	}, this.zP = function() {
		0 === bK.fC && cB.aKg(), bK.jY.a5X(), bK.data.canvas = null, bM.aZ.close(bM.aZ.li, 3257), bM.aZ.li = 0, bK.data.isReplay = 1, bK.aRQ()
	}, this.zO = function(en) {
		var ai = en.indexOf("=");
		return 0 <= ai ? en.substring(ai + 1) : en
	}, this.zN = function(en) {
		return en
	}
}

function ee() {
	this.a3R = function(player, id) {
		for (var aWg = fL.kj[player], ae = aWg.length, ai = 0; ai < ae; ai++)
			if (hQ.a65(aWg[ai], id)) return !0;
		return !1
	}, this.aJE = function(player, j4) {
		for (var tO, aWh, dx, aWg = fL.kj[player], ae = aWg.length, b4 = t.u, aWj = hQ.j7(j4), aWk = hQ.j8(j4), aVr = -1, min = t.u * t.u + t.v * t.v, id = x.a3Q(hQ.kW(j4)), ai = 0; ai < ae; ai++)(aWh = (aWh = aWj - (tO = (dx = aWg[ai]) >> 2) %
			b4) * aWh + (aWh = aWk - ~~((.5 + tO) / b4)) * aWh) < min && hQ.a65(dx, id) && (min = aWh, aVr = tO);
		return aVr
	}, this.aUL = function(tN, tO) {
		for (var id = x.a3Q(hQ.kW(tO)), a66 = hQ.a63, dx = hQ.kW(tN), aWl = -1, ai = 0; ai < 4; ai++) {
			var yq = dx + a66[ai];
			x.kV(yq) && x.a3Q(yq) === id && (-1 === aWl || hQ.a3e(hQ.a6K(yq), tO) < hQ.a3e(aWl, tO)) && (aWl = hQ.a6K(yq))
		}
		return aWl
	}, this.tP = function(player, j4) {
		for (var a66 = hQ.a63, dx = hQ.kW(j4), ai = 0; ai < 4; ai++) {
			var yq = dx + a66[ai];
			if (x.yi(yq) && x.aQU(player, yq)) return !0
		}
		return !1
	}, this.tQ = function(player, j4) {
		for (var a66 = hQ.a63, dx = hQ.kW(j4), ai = 0; ai < 4; ai++) {
			var yq = dx + a66[ai];
			if (x.yr(yq)) return !0;
			if (x.yi(yq)) {
				yq = x.yj(yq);
				if (player !== yq && kf.yz(player, yq)) return !0
			}
		}
		return !1
	}, this.aDm = function(j4) {
		for (var a66 = hQ.a63, dx = hQ.kW(j4), ai = 0; ai < 4; ai++) {
			var yq = dx + a66[ai];
			if (x.yi(yq)) {
				yq = x.yj(yq);
				if (aR.bc.ms(yq)) return yq
			}
		}
		return -1
	}, this.a3h = function(dx) {
		if (x.kV(dx))
			for (var a66 = hQ.a63, ai = 0; ai < 4; ai++)
				if (x.z3(dx + a66[ai])) return !0;
		return !1
	}, this.pL = function(player, id) {
		for (var h5 = player << 3, h6 = h5 + h4.aZ.h7[player], hK = h4.aZ.hK, h3 = h4.aZ.h3, ai = h5; ai < h6; ai++) {
			var aSv = h3[ai];
			if (hK[aSv] === id) return aSv
		}
		return -1
	}, this.pO = function(player) {
		return 0 === h4.aZ.h7[player] ? -1 : h4.aZ.h3[player << 3]
	}, this.z5 = function(ds, dt) {
		var ae = h4.aZ.hB;
		if (ae < 1) return -1;
		for (var hH = h4.aZ.hH, aJL = 80, o9 = -1, ai = 0; ai < ae; ai++) {
			var kM = hQ.a68(ds, dt, hH[ai]);
			kM < aJL && (aJL = kM, o9 = ai)
		}
		return function(ai, ds, dt) {
			if (ai < 0) return;
			var aWq = h4.aZ.hH[ai],
				aWr = hQ.a6B(aWq),
				aWq = hQ.a6D(aWq),
				ai = 20 * (.9 + .1 * Math.log10(h4.aZ.hJ[ai]));
			return ai = Math.max(ai, hQ.a6J(aR.az.np(.02, 1.7))), je.aB8(hQ.a6A(ds), hQ.a6C(dt), aWr, aWq, ai)
		}(o9, ds, dt) ? o9 : -1
	}, this.aDW = function(pJ) {
		for (var ae = h4.aZ.hB, hK = h4.aZ.hK, ai = 0; ai < ae; ai++)
			if (hK[ai] === pJ) return oi.yl[2] = ai, !0;
		return !1
	}, this.mn = function(player) {
		for (var h5 = player << 3, h6 = h5 + h4.aZ.h7[player], h3 = h4.aZ.h3, hJ = h4.aZ.hJ, mW = 0, ai = h5; ai < h6; ai++) mW += hJ[h3[ai]];
		return mW
	}, this.aJK = function(player, aDi) {
		aDi = h4.aZ.hN[aDi];
		return this.tP(player, aDi[aDi.length - 1])
	}, this.aJI = function(tN, tO, kM, aWn) {
		var a6F = hQ.j7(tN),
			tN = hQ.j8(tN),
			a6H = hQ.j7(tO),
			tO = hQ.j8(tO),
			a6H = (kM = Math.max(kM, 1), a6H - a6F),
			tO = tO - tN,
			dn = je.kI(Math.abs(a6H) * aWn, kM),
			aWn = je.kI(Math.abs(tO) * aWn, kM);
		return hQ.kU(a6F + Math.sign(a6H) * dn, tN + Math.sign(tO) * aWn)
	}, this.aDe = function(tJ, j4) {
		for (var ae = tJ.length - 1, r = hQ.j7(j4), s = hQ.j8(j4), ai = 0; ai < ae; ai++) {
			var tN = tJ[ai],
				tO = tJ[ai + 1],
				g = hQ.j7(tN),
				tN = hQ.j8(tN),
				k = hQ.j7(tO),
				tO = hQ.j8(tO);
			if (!(r !== g && r !== k && Math.sign(r - g) === Math.sign(r - k) || s !== tN && s !== tO && Math.sign(s - tN) === Math.sign(s - tO))) {
				if (g === k || tN === tO) return ai;
				if (Math.abs(r - g) === Math.abs(s - tN) && Math.abs(r - k) === Math.abs(s - tO)) return ai
			}
		}
		return -1
	}, this.aJ2 = function() {
		for (var aWt = fZ[0], hD = h4.aZ.hD, hB = h4.aZ.hB, nu = [], ai = 0; ai < hB; ai++) aR.bc.aDn(aWt, hD[ai] >> 3) && nu.push(ai);
		return nu
	}, this.tK = function(player, tJ) {
		for (var h5 = player << 3, h6 = h5 + h4.aZ.h7[player], h3 = h4.aZ.h3, hN = h4.aZ.hN, xh = tJ[0], xi = tJ[tJ.length - 1], ai = h5; ai < h6; ai++) {
			var o4 = hN[h3[ai]];
			if (o4[0] === xh && o4[o4.length - 1] === xi) return !0
		}
		return !1
	}
}

function aKy() {
	this.g6 = 512, this.mt = 15e8, this.a2p = 1e9, this.aMn = 5e4, this.aRA = 512, this.l4 = 2, this.bL = 0, this.gd = 0, this.a4u = 0, this.aRs = 0, this.a4t = 0, this.a4j = 512, this.aWu = 512, this.aMd = 150, this.bX = !0, this.bY = 0, this.fC =
		0, this.a2l = 0, this.dg = !1, this.j9 = 0, this.yQ = 0, this.fR = !1, this.oT = 0, this.aTa = 0, this.k7 = 0, this.k9 = 0, this.jT = null, this.aSC = new aA6, this.a5H = 30, this.jx = 0, this.a4w = 0, this.a97 = 0, this.r9 = 0, this.data =
		new a5c, this.jY = new a5T, this.aRR = 0, this.zJ = "", this.aRQ = function() {
			oi.q(), jy.q(), a2r.clear(), this.a4u = this.gd = this.data.humanCount, this.bX = 1 === this.a4u, this.dg = !1, this.bY = this.data.isReplay, this.k7 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.k9 = this.data.isContest, this.fR = this.k7 < 7 || 9 === this.k7, this.k7 = 10 === this.k7 && this.bX ? 7 : this.k7, this.k7 = 8 === this.k7 && 2 !== this.gd ? 7 : this.k7, wU.q(),
				this.oT = this.data.numberTeams, this.data.teamPlayerCount ? this.aTa = +(0 < this.data.teamPlayerCount[0]) : (this.aTa = 0, this.fR && this.bX && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.oT + 1), bK.jY.jZ())), this.a5H = this.gd <= 2 ? 30 : this.gd <= 50 ? 40 : 50, this.yQ = this.j9 = this.data.selectableSpawn, this.jT = this.j9 ? new j3 : null, 1 === hd.qZ ? this.a4j = this.gd : this.a4j = this.data
				.playerCount, this.aWu = this.a4j, this.aRs = this.a4j - this.gd, this.a4t = 0, this.bL = this.data.selectedPlayer, this.jx = 0, this.a4w = 0, this.a97 = 0, this.r9 = 0, kJ.a2O(this.data.spawningSeed), a2n.q(), fL.q(), yK.q(), aKq
				.wr(), k6.a5N.aEz = [], gT.q(), this.fC = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), jB.q(), aM2(), x.aBM(), aFw.aVS(), jU.q(), x.q(), aKr.q(), hQ.q(), h4.q(), kD.q(), yS.aWv(), wX.q(), aKq
			.ha(), j5.q(), aKn.q(), my.aGB(), zK.q(), fT.q(), jQ.q(), zs.q(), n.putImageData(o, 0, 0), zw.q(), e7.q(), fV.q(), zr.q(), zu.q(), aEA.q(), jF.q(), vs.q(), fD.q(), bI.q(), zt.q(), jS.q(), jN.q(), a4S.q(), aE7.q(), aWw(), ks.q(), dq.q(),
				aE8.q(), yJ.q(), yV.q(), this.aSC.q(), bu.aWv(), di.pH(), 0 === fL.gl[bK.bL] && jN.show(!1, !0), dq.gC(!0), jM.q(), bu.dw = !0, this.bY || this.bX && this.j9 || bA.bB.setState(1), this.aRR = 0
		}, this.a6Y = function(aWy) {
			zK.zL.sD.length ? this.zJ = zK.zL.sD : this.zJ = zK.zM.em(), bM.aZ.aVg(), a2r.clear(), this.fC = 0, bu.aWz(), bA.bB.setState(0), cB.setState(0), vA.lM.show(aWy), 2 === this.aRR ? ax.aZ.aT9() : 1 === this.aRR ? ax.gu(19) : ax.gu(5, 5)
		}, this.a8H = function() {
			return this.bY ? vs.vt || !zr.x5 : this.bX && (vs.vt || this.j9)
		}, this.a8o = function() {
			return 1 === this.fC && !this.j9
		}
}

function aUh() {
	this.kH = 0, this.q = function() {
		this.kH = 0
	}, this.fA = function() {
		if (!this.kH && bu.gE() % 30 == 7 && aR.bc.a0Q(80) && (kD.performance.kH = 1)) {
			if (bK.fR) {
				var oX = fT.oY();
				if (gT.oZ[oX]) {
					fT.od(oX);
					var nu = oi.oh,
						ae = oi.oj[0];
					if (0 !== ae)
						for (var aX4 = Math.min(100 + 10 * (ae - 1), 400), ai = 0; ai < ae; ai++) wX.aRy(nu[ai], aX4)
				}
			}
			wX.aRy(fZ[0], 100)
		}
	}
}

function aL2() {
	var ev, b9, aX5, aX6, aX7, aX8, aX9, aXA, aXB;

	function dY() {
		return fV.x7(bI.aOm()) ? zu.mO ? __fx.settings.keybindButtons ? fV.s - 2 * fV.b9 - 3 * aX5 : fV.s - fV.b9 - 2 * aX5 : __fx.settings.keybindButtons ? fV.s - fV.b9 - 2 * aX5 : fV.s - aX5 : zr.x7(bI.aOn()) ? zu.mO ? zr.dY() - fV.b9 - 2 * aX5 :
			zr.dY() - aX5 : zu.mO ? b3.b9 - fV.b9 - (x9.xA() + 1) * aX5 : b3.b9 - x9.xA() * dH.gap
	}

	function aXF(gj, en, id, o4, aXH, aXI, xi, aXJ, aXK, a0Y, aXP) {
		var ai, f4, mD, aq, aXQ = void 0 !== aXK,
			b4 = Math.floor(fD.measureText(en, bI.ez) + 1.5 * aX6 + (aXQ ? b9 : 1.5 * aX6));
		if (bu.dw = !0, aXP || a2r.be(en, aXK), b4 + 2 * aX5 + fV.b9 > b3.b4 && !aXQ && 50 !== id && 20 < en.length) aXF(gj, (aXP = aR.aS.aJT(en))[0], id, o4, aXH, aXI, xi, aXJ, aXK, a0Y, !0), aXF(gj, aXP[1], id, o4, aXH, aXI, xi, aXJ, aXK, a0Y, !0);
		else if (aXP = b4 + (50 === id ? aX7 : 0), (mD = document.createElement("canvas")).width = b4, mD.height = b9, (f4 = mD.getContext("2d", {
				alpha: !0
			})).font = bI.ez, aR.az.textBaseline(f4, 1), aR.az.textAlign(f4, 0), f4.clearRect(0, 0, b4, b9), f4.fillStyle = aXI, f4.fillRect(0, 0, b4, b9), f4.fillStyle = aXH, f4.fillText(en, Math.floor(1.5 * aX6), Math.floor(b9 / 2)), aXQ && (f4
				.imageSmoothingEnabled = !0, y7.wQ.y8(aXK, f4, b4 - b9, 0, b9)), 0 === (aq = {
				bv: gj,
				en: en,
				id: id,
				player: o4,
				canvas: mD,
				aXH: aXH,
				aXI: aXI,
				b4: b4,
				aXM: aXP,
				xi: xi,
				aXJ: aXJ,
				aXK: aXK,
				a0Y: a0Y
			}).bv || 0 < ev.length && 0 < ev[0].bv) ev.unshift(aq);
		else {
			for (ai = 1; ai < ev.length; ai++)
				if (0 < ev[ai].bv) return void ev.splice(ai, 0, aq);
			ev.push(aq)
		}
	}

	function aXG(oo, qS, pW) {
		return "rgb(" + oo + "," + qS + "," + pW + ")"
	}

	function aXR(id, nt) {
		for (var ae = ev.length, ai = 0; ai < ae; ai++) ev[ai].id === id && nt-- <= 0 && (ev.splice(ai, 1), ai--, ae--)
	}

	function aXS(id, player) {
		for (var aUk = !1, ai = ev.length - 1; 0 <= ai; ai--) ev[ai].id !== id || player !== bK.g6 && ev[ai].player !== player || (ev.splice(ai, 1), aUk = !0);
		return aUk
	}

	function aXc(en) {
		aXF(340, en, 6, 0, aXG(215, 245, 255), aJ.bg, -1, !1)
	}
	this.aD9 = "", this.q = function() {
		var self;
		aXA = 0, aX9 = bA.bB.bC() ? 7 : 12, aX8 = {
			pk: [0, 0, 0],
			aXC: [0, 0, 0],
			fP: [220, 180, 180],
			nl: [0, 0, 0],
			iJ: [0, 0, 0]
		}, ev = [], this.resize(), bK.j9 && this.mu(0, 18), t.fF.fG[t.fH].name.length && aXc(L(493, [t.fF.fG[t.fH].name])), aXc(L(494, [t.u - 2 + "x" + (t.v - 2)])), aXc(L(495, [aR.aS.t3(aFw.aOa)])), aFw.aOa !== aFw.aVE && aXc(L(496, [aR.aS
			.t3(aFw.aVE) + " (" + aR.aS.aAq(100 * aFw.aVE / aFw.aOa, 1) + ")"
		])), 0 < aFw.aVF && aXc(L(473, [aR.aS.t3(aFw.aVF) + " (" + aR.aS.aAq(100 * aFw.aVF / aFw.aOa, 1) + ")"])), 0 < aFw.aFx && aXc(L(497, [aR.aS.t3(aFw.aFx) + " (" + aR.aS.aAq(100 * aFw.aFx / aFw.aOa, 1) + ")"])), 10 === bK.k7 && aXF(120,
			L(498), 6, 0, aXG(235, 255, 120), aJ.bg, -1, !1), 0 !== (self = this).aD9.length && (aXF(200, self.aD9, 0, 0, aJ.eA, aJ.bg, -1, !1), self.aD9 = ""), bK.k9 && aXF(340, L(453), 6, 0, aXG(255, 200, 0), aJ.bg, -1, !1)
	}, this.resize = function() {
		var aSw, ai;
		if (b9 = (b9 = Math.floor((bA.bB.bC() ? .031 : .0249) * b3.dG)) < 10 ? 10 : b9, this.fontSize = Math.floor(2 * b9 / 3), this.ez = aR.az.f8(1, this.fontSize), aX5 = dH.gap, aX6 = Math.floor(b9 / 5), 0 < ev.length)
			for (aSw = ev, ev = [], ai = aSw.length - 1; 0 <= ai; ai--) aXF(aSw[ai].bv, aSw[ai].en, aSw[ai].id, aSw[ai].player, aSw[ai].aXH, aSw[ai].aXI, aSw[ai].xi, aSw[ai].aXJ, aSw[ai].aXK, aSw[ai].a0Y, !0);
		this.aXL()
	}, this.aXL = function() {
		aXB = document.createElement("canvas");
		var en = L(454),
			f4 = (aX7 = fD.measureText(en, this.ez) + 5 * aX6, aXB.height = b9, aXB.width = aX7, aXB.getContext("2d", {
				alpha: !0
			}));
		f4.font = this.ez, aR.az.textBaseline(f4, 1), aR.az.textAlign(f4, 1), f4.clearRect(0, 0, aX7, b9), f4.fillStyle = aJ.r5, f4.fillRect(0, 0, aX7, b9), f4.fillStyle = aJ.eA, f4.fillText(en, Math.floor(aX7 / 2), Math.floor(b9 / 2))
	}, this.aOm = function() {
		var ae;
		return zu.mO ? zu.b4 : 0 === (ae = ev.length) ? 0 : 1 === ae ? ev[0].aXM : sm(ev[0].aXM, ev[1].aXM)
	}, this.aOn = function() {
		var ae = ev.length;
		return zu.mO ? ae ? sm(zu.b4, ev[0].aXM) : zu.b4 : 0 === ae ? 0 : 1 === ae ? ev[0].aXM : 2 === ae ? sm(ev[0].aXM, ev[1].aXM) : sm(sm(ev[0].aXM, ev[1].aXM), ev[2].aXM)
	}, this.df = function(r, s) {
		for (var g, dW, aXN = dY(), ai = ev.length - 1; 0 <= ai; ai--)
			if ((dW = aXN - (ai + 1) * b9) <= s && s < dW + b9) return 50 === ev[ai].id ? r >= b3.b4 - aX7 - aX5 - ev[ai].b4 && (r >= b3.b4 - aX7 - aX5 ? k6.bc.bP(ev[ai].player) : di.h0(ev[ai].player, 800, !1, 0), !0) : r >= b3.b4 - ev[ai].b4 -
				aX5 && (736 === ev[ai].id ? window.open("https://" + ev[ai].en, "_blank") : ev[ai].aXJ && (ev[ai].a0Y && ev[ai].a0Y.gF ? (dW = ev[ai].a0Y.j4, g = hQ.j7(dW) - 10, dW = hQ.j8(dW) - 10, di.jH(g, dW, 19 + g, 19 + dW)) : ev[ai]
					.a0Y && ev[ai].a0Y.pW ? di.pI(ev[ai].player, ev[ai].a0Y.pJ) : (di.h0(ev[ai].player, 800, !1, 0), 0 <= ev[ai].xi && (g = ev[ai].xi, ev[ai].xi = ev[ai].player, ev[ai].player = g))), !0);
		return !1
	}, this.be = function(gj, en, id, o4, aXH, aXI, xi, aXJ, aXK, a0Y) {
		aXF(gj, en, id, o4, aXH, aXI, xi, aXJ, aXK, a0Y)
	}, this.aXO = function(ap) {
		aXF(300, ap, 252, 0, aJ.eA, aJ.bg, -1, !1)
	}, this.jO = function(id) {
		for (var ai = ev.length - 1; 0 <= ai; ai--) ev[ai].id === id && (ev[ai].bv = 1)
	}, this.mu = function(player, id) {
		0 === id ? (fD.fJ(player, 0), aXR(423, 2), aXF(160, L(455, [fL.fM[player]]), 423, player, "rgb(10,220,10)", aJ.bg, -1, !1)) : 1 === id ? (aXS(50, bK.g6), fD.fJ(player, 1), aXF(360, L(456, [fL.fM[player]]), 0, player, aJ.a1c, aJ.bg, -1, !
				0), di.h0(player, 2700, !1, 0)) : 2 === id ? (fD.fJ(player, 2), aXF(0, L(457), 0, player, "rgb(10,255,255)", aJ.bg, -1, !0), di.h0(player, 2700, !1, 0)) : 3 === id ? (fD.fJ(player, 2), aXF(0, L(458, [fL.fM[player]]), 0, player, aJ
				.eA, aJ.bg, -1, !0), di.h0(player, 2700, !1, 0)) : 4 === id ? this.aML(1, player, player) : 5 === id ? aR.bc.ms(bK.bL) || (function(id, w7) {
				var ai, aXY = 0,
					ae = ev.length;
				for (ai = 0; ai < ae; ai++)
					if (ev[ai].id === id && w7 <= ++aXY) return ev.splice(ai, 1)
			}(1, 5), dq.mv(player) && aXF(180, L(459, [fL.fM[player]]), 1, player, aXG(255, 200, 180), aJ.bg, -1, !0), aR.bc.aMZ(player, 10) && (aXR(573, 0), aXF(180, L(460, [fL.fM[player]]), 573, player, aJ.a1c, aJ.bg, -1, !0))) : 18 === id ?
			aXF(255, L(461), 18, 0, aJ.eA, aJ.bg, -1, !1) : 21 === id ? aXF(220, L(462), id, 0, aJ.eA, aJ.bg, -1, !1) : 22 === id ? this.aML(2, player, player) : 59 === id && aXF(0, L(463), id, 0, aJ.a1p, aJ.bg, 0, !1)
	}, this.a5M = function(ap) {
		aXF(200, L(464, [ap]), 94, 0, aJ.eA, aJ.a1a, -1, !1)
	}, this.aSG = function(aXU) {
		if (bK.bL === aXU && !bK.bX && !bK.bY)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aXF(0, "Your Win Count is now " + __fx.wins.count, 3, aXU, aJ.eA, aJ.bg, -1, !0);
		fL.ge[aXU] && (fD.fJ(aXU, 2), bK.gd < 100 ? aXF(0, L(458, [fL.fM[aXU]]), 3, aXU, aJ.eA, aJ.bg, -1, !0) : aXF(0, L(465, [fL.fM[aXU]]), 3, aXU, aJ.eA, aJ.bg, -1, !0))
	}, this.z4 = function(dx) {
		var en, aXV, aK4 = "(" + hQ.j7(dx >> 2) + ", " + hQ.j8(dx >> 2) + ")",
			aXJ = !1,
			player = 0;
		x.z3(dx) ? x.yr(dx) ? aK4 = L(466, [aK4]) : (player = x.yj(dx), bK.bY && !1 === __fx.hoveringTooltip.active && (bK.bL = player), en = L(467, [aR.f4.g8(fL.g9[player], aR.az.f8(0, 10), 150)]) + "   ", en = (en += L(468, [aR.aS.t3(fL.jD[
				player])]) + "   ") + L(469, [aR.aS.t3(fL.ge[player])]) + "   ", bK.fR && (aXV = gT.jb[gT.oZ[gT.og[player]]], en += L(50) + ": " + aXV + "   "), aR.bc.ms(player) && (en += L(120) + ": " + wX.a23[wX.mW[player]] + "   "), aK4 =
			en = (en += L(470, [player]) + "   ") + L(471, [aK4]), aXJ = !0) : aK4 = x.ym(dx) ? L(472, [aK4]) + "   #" + x.a3Q(dx) : L(473, [aK4]), bu.dw = !0, aXR(55, 0), aXF(220, aK4, 55, player, aJ.eA, aJ.bg, -1, aXJ, void 0, void 0, !0)
	}, this.z6 = function(aXW) {
		var kG = h4.aZ,
			player = kG.hD[aXW] >> 3,
			en = (bu.dw = !0, aXR(55, 0), L(474, [fL.fM[player]]) + "   ");
		aXF(220, en += L(468, [aR.aS.t3(kG.hJ[aXW])]), 55, player, aJ.eA, aJ.bg, -1, !0)
	}, this.bJ = function(bN, a5n, bH) {
		bN === bK.bL ? aXF(175, " " + L(475, [fL.fM[a5n]]) + ": ", 1001, a5n, aXG(200, 255, 210), aJ.bg, -1, !0, bH) : this.aXX(bN, bH)
	}, this.aXX = function(bN, bH) {
		aXR(1e3, 0), aXF(175, fL.fM[bN] + ": ", 1e3, bN, aJ.eA, "rgba(5,60,25,0.9)", -1, !0, bH)
	}, this.aSF = function() {
		var ap;
		bK.a4w ? (ap = L(476), fD.fE(L(477), 2, 1, 12), aXF(0, ap, 40, 0, "rgb(10,220,10)", aJ.bg, -1, !1)) : (ap = L(478), fD.fE(L(479), 2, 0, 16), aXF(0, ap, 41, 0, aJ.eA, aJ.bg, -1, !1))
	}, this.aA7 = function() {
		var nt = fL.fM,
			iP = bK.data;
		aXF(300, nt[0] + " [" + bK.aSC.aAD(iP.elo[0]) + "] vs " + nt[1] + " [" + bK.aSC.aAD(iP.elo[1]) + "]", 65, 0, aJ.fY, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aXZ = function(ap) {
		aXF(350, ap, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aOg = function(aOV) {
		aXF(0, L(aOV ? 480 : 481), 247, 0, aJ.iD, aJ.bg, -1, !1)
	}, this.aAF = function(aAC, aAE, aXa) {
		var iP = bK.data,
			nt = fL.fM;
		aXF(0, nt[0] + ": " + bK.aSC.aAD(iP.elo[0]) + " -> " + aAC, 66, 0, aJ.eA, aXa[0], -1, !1), aXF(0, nt[1] + ": " + bK.aSC.aAD(iP.elo[1]) + " -> " + aAE, 66, 1, aJ.eA, aXa[1], -1, !1)
	}, this.bQ = function(player, id) {
		0 === id ? aXS(50, player) ? (aXF(128, L(482, [fL.fM[player]]), 52, player, aXG(180, 255, 180), aJ.bg, -1, !0), dq.a4F(player, 2, 255)) : aXF(384, L(483, [fL.fM[player]]), 51, player, aXG(210, 210, 255), aJ.bg, -1, !0) : aXS(51, player) ?
			(aXF(128, L(484, [fL.fM[player]]), 52, player, aJ.eA, "rgba(60,120,10,0.9)", -1, !0), dq.a4F(player, 2, 255)) : (aXF(384, L(485, [fL.fM[player]]), 50, player, aJ.eA, "rgba(90,90,90,0.9)", -1, !0), dq.a4F(player, 2, 96))
	}, this.bU = function(pk, target) {
		var color = aXG(210, 255, 210);
		1 < pk.length ? aXF(230, L(486, [pk.length, fL.fM[target]]), 66, target, color, aJ.bg, -1, !0) : aXF(230, L(487, [fL.fM[pk[0]], fL.fM[target]]), 66, pk[0], color, aJ.bg, target, !0)
	}, this.aF0 = function(player, target) {
		aXF(230, L(488, [fL.fM[player], fL.fM[target]]), 66, player, aJ.eA, "rgba(75,65,5,0.9)", target, !0)
	}, this.a0S = function(id, nt) {
		aXR(id, nt)
	}, this.a51 = function(id, player) {
		aXS(id, void 0 === player ? bK.g6 : player)
	}, this.a0R = function(id) {
		for (var ai = ev.length - 1; 0 <= ai; ai--)
			if (ev[ai].id === id) return ev[ai];
		return null
	}, this.a2u = function(a87, aXb, player) {
		2 !== fL.gc[bK.bL] && aXF(200, 1 === a87 ? L(489, [fL.fM[player]]) : L(490, [aR.aS.t3(a87), fL.fM[player]]), 30, player, "rgb(190,255,190)", aJ.bg, -1, !0)
	}, this.aGh = function(a87, player) {
		2 !== fL.gc[bK.bL] && (aXR(31, 0), a87 = " (" + aR.aS.t3(a87) + ") 💸", aXF(150, a87 = aR.bc.ms(player) ? L(491) + a87 : L(492, [fL.fM[player]]) + a87, 31, player, aJ.fY, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a50 = function(au) {
		for (var iJ = bu.gE(), ai = 2; 0 <= ai; ai--) 0 < aX8.nl[ai] && (au || aX8.iJ[ai] < iJ - 220) && this.aXd(ai)
	}, this.aXd = function(id) {
		var en, ae = aX8.nl[id],
			player = aX8.pk[id];
		aX8.nl[id] = 0, 1 === ae ? (0 === id ? en = L(499, [fL.fM[player], fL.fM[aX8.aXC[0]]]) : 1 === id ? en = L(500, [fL.fM[player]]) : 2 === id ? en = L(501, [fL.fM[player]]) : 3 === id && (en = L(502, [fL.fM[player]])), aXR(7, 0), aXF(aX8
			.fP[id], en, 7, aX8.aXC[id], aJ.eA, aJ.bg, -1, !0)) : (en = L(0 === id ? 503 : 1 === id ? 504 : 505, [ae]), aXR(7, 0), aXF(aX8.fP[id], en, 7, player, aJ.eA, aJ.bg, -1, !1))
	}, this.aML = function(id, xh, xi) {
		var iJ = bu.gE(),
			ae = aX8.nl[id] + 1;
		aX8.nl[id]++, aX8.pk[id] = xh, aX8.aXC[id] = xi, 1 === ae && (aX8.iJ[id] = iJ), (1 === ae && (bK.a4u < 32 || 2 === bK.fC) || 1 < ae && (aX8.iJ[id] < iJ - 140 || 2 === bK.fC)) && this.aXd(id)
	}, this.fA = function() {
		aKs.fA();
		for (var uo = (uo = ev.length - aX9) <= 1 ? 1 : uo * uo, ai = ev.length - 1; 0 <= ai; ai--) 0 < ev[ai].bv && (ev[ai].bv -= uo, ev[ai].bv <= 0) && (bu.dw = !0, ev.splice(ai, 1));
		! function() {
			var nt, ai;
			if (128 !== aXA && !(++aXA < 128))
				for (nt = 5, ai = my.mz - 1; 0 <= ai; ai--) 1 === fL.gc[my.n0[ai]] && 0 < nt-- && aXF(240, L(502, [fL.fM[my.n0[ai]]]), 1, my.n0[ai], aJ.fY, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a50(!1)
	}, this.eC = function() {
		for (var zA, s = dY(), ai = ev.length - 1; 0 <= ai; ai--) zA = s - (ai + 1) * b9, 50 === ev[ai].id ? (eD.drawImage(ev[ai].canvas, b3.b4 - ev[ai].b4 - aX7 - aX5, zA), eD.drawImage(aXB, b3.b4 - aX7 - aX5, zA)) : eD.drawImage(ev[ai].canvas,
			b3.b4 - ev[ai].b4 - aX5, zA)
	}
}

function aLX() {
	var aXf, aXg = new Uint8Array(5),
		aXh = new Uint8Array(5);
	this.aXi = new a0J, this.q = function() {
		for (var er = bz.c0.data[119].value, ai = 0; ai < aXg.length; ai++) aXg[ai] = (er >> 2 * ai) % 4
	}, this.aWv = function() {
		aXf = [L(506), "", L(507, [sN.sL[28]]), L(508, [sN.sL[26]]), L(509, [sN.sL[0]])], this.aXi.q()
	}, this.fA = function() {
		this.aXi.fA()
	}, this.yT = function(id) {
		1 < id && gr.i3() || ! function(a8) {
			if (3 === aXg[a8] || 1 === aXh[a8]) return;
			if (aXh[a8] = 1, !(Math.random() < .6)) {
				aXg[a8]++;
				for (var er = 0, ai = 0; ai < aXg.length; ai++) er += aXg[ai] << 2 * ai;
				bz.cG.cH(119, er)
			}
			return 1
		}(id) || bI.aXO(aXf[id])
	}
}

function aUi() {
	function aXm(player) {
		for (var kl = fL.kl[player], ae = kl.length, a3f = Math.max(je.kI(ae, 12), 1), aFC = x.aFC, oo = kJ.tM(ae), ai = 0; ai < ae; ai += a3f)
			for (var yq = kl[(ai + oo) % ae], iP = 3; 0 <= iP; iP--) {
				var aG6 = yq + aFC[iP];
				if (x.ym(aG6)) return {
					dx: aG6,
					id: x.a3Q(aG6),
					o4: player
				}
			}
		return null
	}

	function aXr(player, aXs) {
		var mW = aR.bc.a4Q(player, wX.aRo[wX.mW[player]]);
		fL.kn[player].push(aXs.dx), ks.fJ(player, mW, aXs.o4), a4S.wA(player, !0)
	}
	this.fA = function(player) {
		return !!t.kk(t.fH) && !!bK.data.passableMountains && 0 !== fL.kl[player].length && function(player) {
			var aXl = aXm(player);
			if (null === aXl) return !1;
			! function(player) {
				for (var n0 = my.n0, mz = my.mz, ae = Math.min(mz, 12), gO = kJ.tM(mz), aUP = oi.aUP, kl = fL.kl, nt = 0, ai = 0; ai < ae; ai++) {
					var o4 = n0[(ai + gO) % mz];
					o4 !== player && kl[o4].length && kf.yz(player, o4) && (aUP[nt++] = o4)
				}
				oi.oj[0] = nt
			}(player);
			var aXo = function(aVm) {
				for (var ae = oi.oj[0], aUP = oi.aUP, ai = 0; ai < ae; ai++) {
					var aXs = aXm(aUP[ai]);
					if (null !== aXs && aXs.id === aVm) return aXs
				}
				return null
			}(aXl.id);
			return null !== aXo ? (aXr(player, aXo), !0) : function(player, aVm) {
				var ae = kD.kE.kF;
				if (0 !== ae)
					for (var dx = kD.kE.c0[kJ.tM(ae)] << 2, aFC = x.aFC, iP = kJ.tM(4);;) {
						if (dx += aFC[iP], x.ym(dx)) {
							if (x.a3Q(dx) === aVm) return aXr(player, {
								dx: dx,
								o4: bK.g6
							}), !0;
							break
						}
						if (!x.yr(dx)) break
					}
				return !1
			}(player, aXl.id)
		}(player)
	}
}

function aLe() {
	function a3V(r, ae, s, aOj, sU, a3f) {
		if (!(s < 1 || sU < s))
			for (var ai = 0; ai <= ae; ai++) {
				var dx = hQ.a3g(r, s);
				if (aOj(dx)) return dx >> 2;
				r += a3f
			}
		return -1
	}

	function a3Z(s, ae, r, aOj, a3T, a3f) {
		if (!(r < 1 || a3T < r)) {
			ae = Math.max(ae, 0);
			for (var ai = 0; ai <= ae; ai++) {
				var dx = hQ.a3g(r, s);
				if (aOj(dx)) return dx >> 2;
				s += a3f
			}
		}
		return -1
	}

	function a3d(tN, tO, a3J) {
		return -1 !== tO && (-1 === tN || hQ.a3e(tO, a3J) < hQ.a3e(tN, a3J)) ? tO : tN
	}
	this.yg = function(a3J) {
		return this.ju(a3J, function(dx) {
			return x.z3(dx)
		})
	}, this.yu = function(a3J) {
		return this.ju(a3J, function(dx) {
			return x.a3m(dx, bK.bL)
		})
	}, this.ju = function(a3J, aOj) {
		return function(a3J, a3L, aOj) {
			for (var kR = hQ.j7(a3J), kS = hQ.j8(a3J), a3T = t.u - 2, sU = t.v - 2, a3U = -1, iP = 0; iP < a3L; iP++) {
				var sT = Math.max(kR - iP, 1),
					a2b = Math.max(kS - iP, 1),
					a2c = Math.min(kR + iP, a3T),
					a2Q = Math.min(kS + iP, sU),
					tN = a3V(kR, a2c - kR, kS - iP, aOj, sU, 1),
					tO = a3V(kR - 1, kR - sT - 1, kS - iP, aOj, sU, -1),
					a2c = a3V(kR, a2c - kR, kS + iP, aOj, sU, 1),
					sT = a3V(kR - 1, kR - sT - 1, kS + iP, aOj, sU, -1),
					a3Y = a3Z(kS, a2Q - kS - 1, kR - iP, aOj, a3T, 1),
					a3a = a3Z(kS - 1, kS - a2b - 2, kR - iP, aOj, a3T, -1),
					a2Q = a3Z(kS, a2Q - kS - 1, kR + iP, aOj, a3T, 1),
					a2b = a3Z(kS - 1, kS - a2b - 2, kR + iP, aOj, a3T, -1);
				if (a3U = a3d(a3U, tN, a3J), a3U = a3d(a3U, tO, a3J), a3U = a3d(a3U, a2c, a3J), a3U = a3d(a3U, sT, a3J), a3U = a3d(a3U, a3Y, a3J), a3U = a3d(a3U, a3a, a3J), a3U = a3d(a3U, a2Q, a3J), 0 <= (a3U = a3d(a3U, a2b, a3J)) && iP *
					iP >= hQ.a3e(a3U, a3J)) return a3U
			}
			return -1
		}(a3J, hQ.a3M(), aOj)
	}
}

function aKx() {
	this.aXu = "https://", this.aXv = this.aXu + "territorial.io/", this.aFj = this.aXv + "changelog", this.aFo = this.aXv + "terms", this.aXw = this.aXv + "cookie_policy", this.aFp = this.aXv + "privacy", this.aFn = this.aXv + "tutorial", this.aFm =
		this.aXv + "players", this.aFk = this.aXv + "clans", this.aFl = this.aXv + "clan-results", this.aFi = "https://patreon.com/c/territorial", this.mG = this.aXu + "play.google.com/store/apps/details?id=territorial.io", this.mH = this.aXu +
		"apps.apple.com/app/id1581110913", this.aXx = this.aXu + "www.youtube.com/watch?v=toZTQ8aRdFc", this.mI = this.aXu + "discord.gg/pthqvpTXmh", this.mJ = this.aXu + "www.instagram.com/davidtschacher/", this.aPv =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function nJ(title, v5, aXy, a9v) {
	var lq, qe;
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), qe.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, a9v = a9v || [new aM("⬅️ " + L(10), function() {
		ax.ic()
	})], lq = new iU(title, a9v), qe = new qg(lq.iX, v5), aXy && aR.az.textAlign(lq.iX.style, 1)
}

function aLE() {
	var er, b4, b9, max, aXz, p1, aY1, aY2, aY3, aY4, aY5, aY6, aY7, aY8, aY0 = 1e4;

	function aYF(aYE, p4, ae) {
		var ai;
		for (aY1[0] = aYE, ai = 1; ai < ae; ai++) aY1[ai] = aY1[ai - 1] + p4, p4 = aY1[ai] >= aY0 ? (aY1[ai] = aY0 - 1, -p4) : aY1[ai] < 0 ? (aY1[ai] = 0, -p4) : (p4 += 16384 <= kJ.random() ? p1 : -p1) < -aXz ? -aXz : aXz < p4 ? aXz : p4
	}

	function aYH(r, s, aYI, ae) {
		(aYI ? function(r, s, ae) {
			var ai;
			for (ai = 0; ai < ae; ai++) er[s * b4 + r + ai] = aY1[ai]
		} : function(r, s, ae) {
			var ai;
			for (ai = 0; ai < ae; ai++) er[s * b4 + r + ai * b4] = aY1[ai]
		})(r, s, ae)
	}

	function aYL(value, ae) {
		var ai, a92, dx, uo = value - aY1[ae - 1];
		if (0 != uo) {
			for (a92 = 1 + je.kI(Math.abs(uo), ae - 1), a92 = uo < 0 ? -a92 : a92, aY1[ae - 1] = value, dx = (dx = ae - 1 - je.kI(Math.abs(uo), Math.abs(a92))) < 1 ? 1 : ae - 2 < dx ? ae - 2 : dx, ai = ae - 2; dx <= ai; ai--) aY1[ai] += uo - (ae -
				1 - ai) * a92;
			(uo < 0 ? function(ae) {
				var ai;
				for (ai = ae - 2; 1 <= ai; ai--) aY1[ai] < 0 && (aY1[ai] = -aY1[ai] - 1)
			} : function(ae) {
				var ai;
				for (ai = ae - 2; 1 <= ai; ai--) aY1[ai] >= aY0 && (aY1[ai] = 2 * aY0 - aY1[ai] - 1)
			})(ae)
		}
	}

	function aYO(aG2, aG5, ae) {
		for (var ai = 0; ai < ae; ai++) aG2[ai] = aG5[ai]
	}

	function aYP(nu) {
		for (var ai = 0; ai < nu.length - 1; ai++) nu[ai] = nu[ai + 1] - nu[ai];
		nu[nu.length - 1] = nu[nu.length - 3]
	}

	function aYQ(yD, gap, a3j) {
		aY2.push(yD), aY3.push(gap), aY4.push(a3j)
	}
	this.ha = function(ho) {
		! function(ho) {
			var ai;
			for (b4 = ho[0], b9 = ho[1], aXz = ho[2], p1 = ho[3], er = new Int16Array(b4 * b9), max = b9 < b4 ? b4 : b9, aY1 = new Int16Array(max), aY2 = [], aY3 = [], aY4 = [], aY5 = new Array(b4), aY6 = new Array(b9), ai = b4 - 1; 0 <=
				ai; ai--) aY5[ai] = !1;
			for (ai = b9 - 1; 0 <= ai; ai--) aY6[ai] = !1;
			aY7 = new Int16Array(b4), aY8 = new Int16Array(b9)
		}(ho),
		function(ae) {
			var aYE = kJ.random() % aY0,
				p4 = kJ.random() % (2 * aXz + 1) - aXz;
			aYF(aYE, p4, ae)
		}(max), aYO(aY8, aY1, b9), aYH(0, 0, !0, b4);
		var r, s, ho = er[0],
			ae = max,
			p4 = kJ.random() % (2 * aXz + 1) - aXz;
		for (aYF(ho, p4, ae), aYO(aY7, aY1, b4), aYH(0, 0, !1, b9), aYP(aY7), aYP(aY8), aYF(er[b4 - 1], aY7[b4 - 1], b9), aYH(b4 - 1, 0, !1, b9), aYF(er[b4 * (b9 - 1)], aY8[b9 - 1], b4), aYL(er[b4 * b9 - 1], b4), aYH(0, b9 - 1, !0, b4), aY5[b4 -
				1] = aY5[0] = !0, aY6[b9 - 1] = aY6[0] = !0, aYQ(0, b4, !0), aYQ(0, b9, !1), ! function() {
				var a9u, yD;
				for (;;) {
					if (a9u = function() {
							var ai, a9u = aY2.length - 1;
							for (ai = a9u - 1; 0 <= ai; ai--) aY3[ai] > aY3[a9u] && (a9u = ai);
							return a9u
						}(), aY3[a9u] < 5) return;
					yD = aY2[a9u] + je.kI(aY3[a9u], 2), (aY4[a9u] ? function(r) {
						var ae, aYU, ai, aYV = 0,
							aYW = 0;
						for (; aYW < b9 - 1;) {
							for (ai = aYV + 1; ai < b9; ai++)
								if (aY6[ai]) {
									aYW = ai;
									break
								} ae = aYW - aYV + 1, aYF(er[r + b4 * aYV], 0 === aYV ? aY7[r] : aY1[aYU - 1] - aY1[aYU - 2], ae), aYL(er[aYW * b4 + r], ae), aYH(r, aYV, !1, ae), aYU = ae, aYV = aYW
						}
						aY5[r] = !0
					} : function(s) {
						var ae, aYU, ai, aYV = 0,
							aYW = 0;
						for (; aYW < b4 - 1;) {
							for (ai = aYV + 1; ai < b4; ai++)
								if (aY5[ai]) {
									aYW = ai;
									break
								} ae = aYW - aYV + 1, aYF(er[s * b4 + aYV], 0 === aYV ? aY8[s] : aY1[aYU - 1] - aY1[aYU - 2], ae), aYL(er[s * b4 + aYW], ae), aYH(aYV, s, !0, ae), aYU = ae, aYV = aYW
						}
						aY6[s] = !0
					})(yD), aYQ(yD, aY2[a9u] + aY3[a9u] - yD, aY4[a9u]), aY3[a9u] = yD - aY2[a9u] + 1
				}
			}(), r = 0; r < b4; r++)
			if (!aY5[r])
				for (s = 0; s < b9; s++) aY6[s] || ! function(r, s) {
					var value = er[s * b4 + r - 1] + er[(s - 1) * b4 + r],
						aLx = 2;
					aY5[r + 1] && (aLx++, value += er[s * b4 + r + 1]);
					aY6[s + 1] && (aLx++, value += er[(s + 1) * b4 + r]);
					er[s * b4 + r] = je.kI(value, aLx)
				}(r, s)
	}, this.a2P = function() {
		return er
	}, this.a2H = function() {
		er = null
	}
}

function aLM() {
	this.a9X = function(player) {
		aE7.aTV(player), bK.a4t++, fL.gc[player] = 2, fL.aMC[player] = hb.k3.aMD(), player === bK.bL && (jN.show(!1, !1), jF.aMG(), jy.a4x.aMH()), dq.mv(player)
	}
}

function a5c() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5a = null
}

function lP() {
	var aYY = null,
		aYZ = 2e4,
		aYa = 0;
	this.fA = function() {
		bu.bv < aYZ || (aYZ = bu.bv + 1e4, 0 !== bA.id) || aYY || vA.lR() || (bM.aZ.aI4(0) ? bM.hf.lZ(5) : aYZ = bu.bv + 1e3)
	}, this.fJ = function(iJ) {
		aYY = iJ
	}, this.show = function() {
		return !(!aYY || bu.bv < aYa) && (__fx.settings.hidePropagandaPopup ? void 0 : (aYa = bu.bv + 6e4, (new aMw).show(aYY.oz, aYY.colors, aYY.id), !(aYY = null)))
	}
}

function aYb() {
	var aYc = [];

	function aYe(d8) {
		aYc.unshift(d8), bz.cG.cH(161, aYc.join(";"))
	}

	function aYd(d8) {
		for (var aYf = aYc, ae = aYf.length, ai = 0; ai < ae; ai++)
			if (aYf[ai] === d8) return aYf.splice(ai, 1), bz.cG.cH(161, aYf.join(";")), 1
	}
	this.q = function() {
		var en = bz.c0.data[161].value;
		en.length && (aYc = en.split(";"))
	}, this.get = function() {
		return aYc
	}, this.aIA = function() {
		return {
			iq: aYc,
			value: 0
		}
	}, this.a4a = function(d8) {
		return aR.ie.has(aYc, d8)
	}, this.aID = function(d8) {
		return aYd(d8) ? 0 : (aYe(d8), 1)
	}, this.aW = function(d8) {
		aYd(d8) && aYe(d8)
	}, this.aI9 = function(a8) {
		a8 < aYc.length && (aYc.splice(a8, 1), bz.cG.cH(161, aYc.join(";")))
	}
}

function eT() {
	this.kB = function(player, xe) {
		return -1 !== xe && !!h4.ak.tQ(player, xe) && this.a47(player, xe, 0)
	}, this.a47 = function(player, xe, aYg) {
		player = function(player, xe, aYg) {
			var aJD = h4.ak.aJE(player, xe);
			if (-1 === aJD) return -1;
			aJD = h4.ak.aUL(aJD, xe);
			if (-1 === aJD) return -1;
			var tH = h4.ec.tR(aJD, xe);
			if (0 <= tH) return tH;
			if (h4.ec.tS()) return -1;
			if (0 <= (tH = h4.ec.tR(xe, aJD))) return h4.ec.tT(h4.ec.tU(h4.ec.get(tH)));
			if (aJD === xe) return h4.ec.tT(new Uint32Array([aJD, xe]));
			if (0 <= (tH = h4.eU.a47(aJD, xe))) return tH;
			return aYg ? function(aYj, player) {
				var aYk = oi.aYk,
					c0 = (aYk.fill(0), [aYj]),
					a64 = (aYk[aYj] = 1, hQ.a64),
					a3O = -1,
					ae = c0.length;
				for (; - 1 === a3O && ae;) {
					for (var nu = [], ai = 0; ai < ae; ai++)
						for (var j4 = c0[ai], aAj = aYk[j4], iP = 0; iP < 8; iP++) {
							var aOE, aOC, aVr = j4 + a64[iP],
								dx = 4 * aVr;
							x.kV(dx) ? (aOE = aYk[aVr], aOC = aAj + 5 + ((1 & iP) << 1), 0 === aOE ? (nu.push(aVr), aYk[aVr] = aOC) : aYk[aVr] = Math.min(aOC, aOE)) : -1 === a3O && iP % 2 == 0 && x.ys(player, dx) && (a3O = j4)
						}
					ae = (c0 = nu).length
				}
				return -1 !== a3O ? function(tN, aYm) {
					var a64 = hQ.a64,
						aYn = -1,
						a3j = 0,
						jC = [];
					for (; aYm !== tN;)(a3j = function(j4, a3j) {
						var aYk = oi.aYk,
							a64 = hQ.a64,
							aAj = aYk[j4];
						if (aAj - aYk[j4 + a64[a3j]] != 5 + ((1 & a3j) << 1))
							for (var gF = 0; gF < 8; gF++) {
								var iP = gF + a3j + 6 & 7;
								if (aAj - aYk[j4 + a64[iP]] == 5 + ((1 & iP) << 1)) return iP
							}
						return a3j
					}(aYm, a3j)) !== aYn && (jC.push(aYm), aYn = a3j), aYm += a64[a3j];
					jC.push(tN);
					var tH = h4.ec.tR(jC[0], tN);
					if (0 <= tH) return tH;
					return h4.ec.tT(new Uint32Array(jC))
				}(aYj, a3O) : -1
			}(xe, player) : -1
		}(player, xe, aYg);
		return -1 !== player && (oi.nu[0] = h4.ec.get(player), !0)
	}
}

function aCg(wK, size, vS, aYp, font) {
	var ai, a8l = .2,
		canvas = document.createElement("canvas"),
		uH = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = wK, canvas.height = wK, uH.font = size + font, uH.textAlign = "center", uH.textBaseline = "middle", uH.fillStyle = "red", ai = 0; ai < vS.length; ai++) uH.fillText(vS[ai], .5 * wK, .5 * wK);
	return -1 < (canvas = function(wP) {
		var ai, oo, iP = wP.data;
		for (ai = iP.length - 4; 0 <= ai; ai -= 4)
			if (oo = iP[ai], aYp <= oo) return Math.floor(ai / (4 * wK));
		return -1
	}(uH.getImageData(0, 0, wK, wK))) && (a8l = (canvas - .5 * wK + .1 * size) / size), Math.max(a8l, 0)
}

function aLP() {
	this.nu = new Array(4), this.aYs = new Uint16Array(2), this.oj = new Uint16Array(2), this.a3D = new Int32Array(2), this.a2t = new Uint32Array(2), this.aYt = new Uint32Array(2), this.aDz = new Uint8Array(4), this.aP3 = new Uint8Array(4), this
		.a4R = new Uint32Array(4), this.aYu = new Uint32Array(5), this.a3v = new Uint32Array(8), this.yl = new Uint32Array(8), this.aUP = new Uint16Array(16), this.oh = new Uint16Array(512), this.aYv = new Uint16Array(512), this.aYw =
		new Uint16Array(512), this.aYk = new Uint16Array(0), this.q = function() {
			var ae = t.u * t.v;
			this.aYk.length !== ae && (this.aYk = new Uint16Array(ae))
		}, this.aYx = function(nu, sG) {
			return nu[0] = sG, nu
		}, this.aYy = function(nu, sG, sH) {
			return nu[0] = sG, nu[1] = sH, nu
		}, this.aYz = function(nu, sG, sH, mA) {
			return nu[0] = sG, nu[1] = sH, nu[2] = mA, nu
		}, this.aZ0 = function(nu, sG, sH, mA, aZ1) {
			return nu[0] = sG, nu[1] = sH, nu[2] = mA, nu[3] = aZ1, nu
		}
}

function wZ() {
	function aZ5(nu, er, jc) {
		for (var ai = 0; ai < 256; ai++) nu[ai] = (nu[ai] + (er >> (ai + jc) % 30 & 1)) % 256
	}
	this.fA = function(aZ2, aZ3) {
		var nu = new Uint8Array(256);
		return function(nu, aZ2, aZ3) {
				var ai, aZ7 = 3 + (4 + aZ2) % 32768,
					aZ8 = 12 + aZ3 % 32768,
					aZ9 = 17 + ((aZ2 & aZ3) + (aZ2 | aZ3) + aZ2) % 32768;
				for (ai = 0; ai < 256; ai++) aZ7 = 1 + aZ7 * aZ8 % aZ9, nu[ai] = aZ7 % 256
			}(nu, aZ2, aZ3), aZ5(nu, aZ2, 2), aZ5(nu, aZ3, 7),
			function(nu) {
				var ai, er, a8 = 0;
				for (ai = 0; ai < 3e4; ai++) er = nu[a8], nu[a8] = (er + ai + nu[(a8 + ai) % 256]) % 256, a8 = (er + ai + a8 + (er & a8)) % 256
			}(nu),
			function(nu) {
				var ai, mN = 1,
					aHD = 1;
				for (ai = 0; ai < 256; ai += 2) mN = (1 + mN) * (nu[ai] + 1) % 1073741824, aHD = (1 + aHD) * (nu[ai + 1] + 1) % 1073741824;
				return [mN, aHD]
			}(nu)
	}, this.vD = function(aZA, aZB, aZC, result) {
		for (var nt = 1 << aZA, ai = 0; ai < nt; ai++)
			if (this.aZD(ai, aZB, aZC) === result) return ai;
		return 0
	}, this.aZD = function(aZE, aZB, aZC) {
		for (var aZF = aZB + aZE, aZG = aZC + aZE, er = aZF + aZG & 2147483647, gF = 1; gF <= 16; gF++) er = (er = (er ^ er >> gF) >>> 1 + (3 & aZF)) * (7 + (1023 & (aZF | aZG))) & 1073741823, aZG >>= 1 + (1 & (aZF >>= 1 + (1 & (er += 65535 &
			aZG))));
		return er &= 1073741823
	}
}

function aLJ() {
	this.a9g = 0;
	var aZH, aZI, aZJ, aZK, aZL, aZM = this.aEs = 0;

	function aZO() {
		aZK = aZL = null, aZM = 0
	}
	this.q = function(ab, aUV, aUW) {
		ax.rW(), aY.cC(), cB.setState(10), aZK = ab, aZL = aUV, aZM = aUW, this.a9g = ab.a9g, this.aEs = aUW, aZH = 0, aZI = bu.bv + 4500, bM.aZ.li = ab.li, bM.aZ.hk === ab.li ? (console.log("direct pass"), aZJ = 0) : (console.log(
			"delayed pass"), bM.aZ.close(bM.aZ.hk, 3247), aZJ = 2, bM.aZ.qk(ab.li, 5) && bM.bN.vJ()), eD.imageSmoothingEnabled = !0, cB.or();
		aUV = gZ.aGL("loading"), aUW = (bA.bB.bC() ? .396 : .25) * b3.dG / aUV.width;
		eD.setTransform(aUW, 0, 0, aUW, Math.floor((b3.b4 - aUW * aUV.width) / 2), Math.floor((b3.b9 - aUW * aUV.height) / 2)), eD.imageSmoothingEnabled = !1, eD.drawImage(aUV, 0, 0), eD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aEC = function() {
		0 < aZJ && bu.bv > aZI && (aZJ--, aZI += 4500, 0 === bu.a58) && 0 === bu.gE() && bM.aZ.qk(bM.aZ.li, 5)
	}, this.aEt = function() {
		return 10 === cB.mP() && (aY.bq.aUY(aZK, aZL, aZM), aZO(), !0)
	}, this.aZP = function() {
		10 === cB.mP() && 2 <= ++aZH && (aY.bq.aUY(aZK, aZL, aZM), aZO())
	}
}

function aWw() {
	ky = 0, aZR = 2048, lJ = new Uint32Array(4 * aZR), aZS = 0, aZT = new Uint32Array(aZR), aZU = new Uint8Array(t.u * t.v)
}

function w4(player) {
	ku = player, kr = !1, aZV(), aZW();
	for (var ai = ks.mk(ku) - 1; 0 <= ai; ai--) kv = ai, aZX();
	kr && aZY()
}

function aZY() {
	kf.aZZ(), kf.aZa()
}

function aZX() {
	kc = ks.ml(ku, kv), kw = ks.mm(ku, kv), lE = ks.mo(ku, kv), aZb(), (0 !== ky && (aZc(), aZd()) ? kZ : ke)()
}

function aZd() {
	if (!((lB = je.kI(kw, ky)) > bK.l4)) {
		if (!lE) return !1;
		var aZe = ky * (1 + bK.l4);
		kw += aR.bc.lF(ku, aZe - kw), lB = je.kI(kw, ky)
	}
	return !0
}

function aZc() {
	for (var ai = ky - 1; 0 <= ai; ai--) aZU[je.kI(lJ[ai], 4)] = 0
}

function ke() {
	1 === ks.mk(ku) && a4S.w9(ku);
	var gj = aR.bc.md(ku, kw);
	jB.lC(ku, kw - gj, 12), ks.mh(ku, kv)
}

function aZV() {
	for (var player = ku, kn = fL.kn, ae = Math.min(kn[player].length, aZR), nt = 0, aZf = aZT, ai = ae - 1; 0 <= ai; ai--) aZf[nt++] = kn[player][ai];
	aZS = nt
}

function aZW() {
	for (var ai = fL.kn[ku].length - 1; 0 <= ai; ai--) x.z3(fL.kn[ku][ai]) && x.lK(fL.kn[ku][ai], ku);
	fL.kn[ku] = []
}

function aZb() {
	ky = 0, (kc === bK.g6 ? aZg : aZh)()
}

function aZh() {
	for (var o4, gO, ai, aFC = x.aFC, iP = 3; 0 <= iP; iP--)
		for (ai = aZS - 1; 0 <= ai; ai--) o4 = aZT[ai] + aFC[iP], gO = je.kI(o4, 4), 0 === aZU[gO] && x.yi(o4) && x.yj(o4) === kc && (aZU[gO] = 1, lJ[ky++] = o4)
}

function aZg() {
	for (var o4, gO, ai, aFC = x.aFC, iP = 3; 0 <= iP; iP--)
		for (ai = aZS - 1; 0 <= ai; ai--) o4 = aZT[ai] + aFC[iP], gO = je.kI(o4, 4), 0 === aZU[gO] && x.yr(o4) && (aZU[gO] = 1, lJ[ky++] = o4)
}

function aLA() {
	this.g9 = new Array(bK.g6), this.fM = new Array(bK.g6), this.gc = new Uint8Array(bK.g6), this.gl = new Uint8Array(bK.g6), this.jI = new Uint16Array(bK.g6), this.jJ = new Uint16Array(bK.g6), this.jK = new Uint16Array(bK.g6), this.jL =
		new Uint16Array(bK.g6), this.ge = new Uint32Array(bK.g6), this.aGE = new Uint32Array(bK.g6), this.jD = new Uint32Array(bK.g6), this.kn = null, this.ki = null, this.kj = null, this.kl = null, this.a3w = new Uint16Array(bK.g6), this.aF7 =
		new Uint16Array(bK.g6), this.aF8 = new Uint16Array(bK.g6), this.aMC = new Uint16Array(bK.g6), this.aGF = new Uint8Array(bK.g6), this.a3E = new Uint16Array(bK.g6), this.q = function() {
			this.g9.fill(""), this.fM.fill(""), this.gc.fill(0), this.gl.fill(0), this.jI.fill(0), this.jJ.fill(0), this.jK.fill(0), this.jL.fill(0), this.ge.fill(0), this.aGE.fill(0), this.jD.fill(0), this.kn = new Array(bK.g6), this.ki = new Array(
				bK.g6), this.kj = new Array(bK.g6), this.kl = new Array(bK.g6), this.a3w.fill(0), this.aF7.fill(0), this.aF8.fill(0), this.aMC.fill(0), this.aGF.fill(0), this.a3E.fill(0)
		}
}

function aRz() {
	this.c0 = {}, this.aEb = new Array(7), this.d6 = null, this.d9 = null, this.a5S = 0, this.aRg = [0, 0], this.tw = function() {
		ax.gu(5, 5)
	}, this.aT9 = function() {
		ax.rW(), a0E.q()
	}, this.qO = function() {
		ax.gu(0 === cB.mP() ? 5 : 0)
	}, this.vg = function() {
		if (1 === bz.c0.data[130].value) ax.gu(8, ax.d3().lt, new lz(24, {
			nd: bz.c0.data[125].value,
			h5: bz.c0.data[128].value,
			h6: bz.c0.data[129].value
		}));
		else {
			for (var nu = (nu = bz.c0.data[126].value.split(",")).slice(0, 10), ai = 0; ai < nu.length; ai++) nu[ai] = nu[ai].trim().slice(0, 7).toUpperCase();
			1 === nu.length && 0 === nu[0].length && (nu = []), ax.gu(8, ax.d3().lt, new lz(23, {
				nd: bz.c0.data[125].value,
				qs: nu
			}))
		}
	}, this.aFh = function(lt, target) {
		ax.gu(4, lt, new nJ("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + mF.aFp +
			"' target='_blank'>" + mF.aFp + "</a>", !1, [new aM("⬅️ " + L(10), function() {
				ax.gu(lt)
			}), new aM("✅ Accept", function() {
				bz.cG.cH(140, 1), 0 === target ? ax.gu(2, lt) : ax.gu(8, lt, new lz(target))
			})]))
	}, this.aEo = function() {
		for (var ai = 0; ai < 7; ai++) this.aEb[ai] = bw.lc.vO(cM.cR(5));
		this.aEb[1] = "[" + this.aEb[1] + "]", 5 === ax.d2 && (ax.d3().aGV.cH(this.aEb), ax.d3().resize())
	}, this.aI6 = function(er, bN, a5n) {
		er = aR.bc.aIC(er, 1, 1e6);
		var aZi = Math.max(1, 1 + Math.floor(.01 * (er - 100))),
			bN = L(510, [bN]);
		return (bN += "<br>") + L(511, [a5n]) + "<br>" + L(512, [aZi < 20 ? er + aZi + "–" + (er + 20) : er + aZi]) + "<br>" + L(513, [er])
	}
}

function aLa() {
	function aZj(aH) {
		tI(aH), ax.gu(4, 5, new nJ("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new aM("⬅️ " + L(10), function() {
				ax.ic()
			}), new aM("🔄 Reload", function() {
				bA.bB.nE()
			}, aJ.r5)]))
	}

	function aZn(aH) {
		tI(aH), ax.gu(4, 5, new nJ(L(514), aZm(aH), !0))
	}

	function aZm(aH) {
		var en = " [" + aH + "]";
		return 3249 === aH || 1006 === aH ? "No Internet / No Server Response" + en : 4527 === aH ? "Player already in lobby" + en : 4530 === aH ? "Lobby Timeout" + en : 4528 === aH ? "Lobby Kick: Another login detected." + en : 4540 === aH ?
			"You have been kicked." + en : 4495 === aH ? "Account doesn't exist." : 4229 === aH ? "Bad Internet / Unresponsive Client" + en : 4555 === aH ? "Invalid Account Error. Please Try Again." + en : 4557 <= aH && aH <= 4560 ?
			"Please try again later!" + en : "Unknown error" + en
	}

	function tI(aH) {
		aZk(aH), ax.aZ.tw()
	}

	function aZk(aH) {
		var nD = cB.mP();
		6 === nD ? bM.aZ.rX(aH) : aY.bs ? (ax.rW(), aY.cC(), bM.aZ.close(bM.aZ.hk, 3256)) : 8 === nD && bK.a6Y(!0)
	}
	this.aJf = [], this.aVi = function(hZ, aH) {
		if (this.aJf.push(aH), 8 === ax.d2 && 0 === hZ)
			if (4211 === aH) aZj(aH);
			else {
				if (aY.bs && (4495 === aH || 4480 === aH) && bM.aZ.hk !== hZ) return void ax.ic();
				if (8 !== cB.mP() && aZk(), 4480 === aH) return bz.cG.aMv(), void ax.gu(4, 0, new nJ(L(516), L(517), !0));
				ax.gu(4, 0, new nJ(L(514), aZm(aH), !0))
			}
		else {
			var nD = cB.mP();
			if (6 === nD) {
				if (4211 === aH) return void aZj(aH);
				if (4215 !== aH && 4516 !== aH && 4527 !== aH && 4533 !== aH && 4528 !== aH && !(4557 <= aH && aH <= 4560)) return void a0E.tp(hZ)
			} else {
				if (!aY.bs) return 8 === nD ? void(hZ !== bM.aZ.li || bK.bX || 1 !== bK.fC || bK.bY || bI.a5M(L(515, [aH]))) : void 0;
				if (hZ !== bM.aZ.hk) return
			}
			aZn(aH)
		}
	}, this.tt = function(aH) {
		this.aJf.push(aH), 8 === cB.mP() ? bK.bX || 1 !== bK.fC || bI.a5M(L(515, [aH])) : aZn(aH)
	}, this.aJh = function() {
		this.aJf.push(3268), tI(3268)
	}
}

function lN() {
	var aYZ = 12e3;
	this.show = function(aWy) {
		return !aWy && !vA.lR() && (0 === bA.id ? vA.lO.show() : 2 === bA.id && !(bu.bv < aYZ) && (aYZ = bu.bv + 3e5, 2 === hd.qZ) && bA.bB.nH(Math.floor(3e5)))
	}
}

function aLh() {
	var r, s, b9, aTB, aZo, aZp, aZq, aZr, aZs, b4, aCr, aWR;
	this.mO = !1, this.q = function(en, aZt) {
		if (1 === bA.id && 13 <= bA.jl && bA.jl < 18) return aZt ? void(aCr = en) : aCr !== en ? void 0 : void bA.n6.saveString(200, en);
		aZt && (aCr = en, (aWR = document.createElement("a")).appendChild(document.createTextNode(aCr)), this.mO = !0, aWR.title = aCr, aWR.target = "_blank", aWR.href = aCr, aWR.style.textAlign = "center", aWR.style.color = aJ.eA, aWR.style
			.position = "absolute", aWR.style.padding = "0px", aWR.style.margin = "0px", this.resize(), document.body.appendChild(aWR), bu.dw = !0)
	}, this.aw = function() {
		return !(!this.mO || (ax.removeChild(document.body, aWR), this.mO = !1))
	}, this.df = function(db, de) {
		return !!this.mO && ((db < r || de < s || r + b4 < db || s + b9 < de || r + b4 - aTB < db && de < s + aTB) && (bu.dw = !0, this.mO = !1, ax.removeChild(document.body, aWR)), !0)
	}, this.resize = function() {
		var ez, a91;
		this.mO && (aZr = Math.floor(.8 * (bA.bB.bC() ? b3.b4 > b3.b9 ? .6 : .55 : .4) * b3.dG), aTB = Math.floor(.15 * aZr), aZo = Math.floor(.35 * aTB), aZp = Math.floor(.5 * aTB), aZq = Math.floor(2.5 * aZp), b9 = aTB + aZo + 3 * aZp, ez = aR
			.az.f8(1, aZo / b3.b5), aZs = Math.floor(b3.b5 * fD.measureText(aCr, ez)), a91 = b4 = (aZr < aZs ? aZs : aZr) + 2 * aZq, b4 = Math.min(b4, b3.b4 - 2 * (bA.bB.bC() ? 2 : 1) * dH.gap), ez = aR.az.f8(1, b4 / a91 * aZo / b3.b5), aZs =
			Math.floor(b3.b5 * fD.measureText(aCr, ez)), r = Math.floor((b3.b4 - b4) / 2), s = Math.floor((b3.b9 - b9) / 2), aWR.style.font = ez, aWR.style.top = Math.floor((s + 1.4 * aZp + aTB) / b3.b5) + "px", aWR.style.left = Math.floor((
				r + (b4 - aZs) / 2) / b3.b5) + "px")
	}, this.eC = function() {
		this.mO && (eD.fillStyle = aJ.bg, eD.fillRect(r, s + aTB, b4, b9 - aTB), eD.fillStyle = aJ.a1x, eD.fillRect(r, s, b4, aTB), eD.fillStyle = aJ.eA, eD.lineWidth = dH.gN, eD.strokeStyle = aJ.eA, eD.strokeRect(r, s, b4, b9), eD.fillRect(r,
			s + aTB, b4, dH.gN), eD.font = aR.az.f8(1, .48 * aTB), aR.az.textAlign(eD, 1), aR.az.textBaseline(eD, 1), eD.fillText(L(518), Math.floor(r + (b4 - .5 * aTB) / 2), Math.floor(s + .55 * aTB)), vs.o2(Math.floor(r + b4 - .8 *
			aTB), Math.floor(s + .25 * aTB), Math.floor(.5 * aTB)), eD.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aLT() {
	var sb = 0,
		aZu = 0;
	this.zz = function(r, s) {
		sb = r, aZu = s
	}, this.a08 = function(code) {
		var kR, kS, j4;
		bK.bY || vs.vt || (aR.bc.a3o(0) || aR.bc.a3o(1)) && aR.bc.ye(bK.bL) && (fV.df(sb, aZu) ? fV.a00 = !1 : zt.df(sb, aZu) || (kR = hQ.yZ(sb), kS = hQ.ya(aZu), j4 = hQ.kU(kR, kS), hQ.yb(kR, kS) && (0 === code ? function(j4) {
			var aZy, dx, yq;
			bK.j9 ? -1 !== (aZy = yf.yg(j4)) && k6.yM.yP(j4) : (dx = hQ.kW(j4), x.ym(dx) ? (aZy = yn.yo.yp(dx)) && (yq = hQ.kW(aZy), yq = x.yr(yq) ? bK.g6 : x.yj(yq), k6.yM.yX(fV.yO(), aZy, yq)) : (aZy = yf.yu(j4)) < 0 || (dx = hQ
				.kW(aZy), x.yr(dx) ? kf.yv(bK.bL) ? k6.yM.yU(fV.yO(), bK.g6) : ks.mk(bK.bL) && yV.yW(bK.g6, fV.yO()) : (yq = x.yj(dx), kf.yz(yq, bK.bL) && (kf.z0(bK.bL, yq) ? k6.yM.yU(fV.yO(), yq) : ks.mk(bK.bL) && yV.yW(
					yq, fV.yO())))))
		}(j4) : 1 === code ? function(j4) {
			h4.ea.yk(bK.bL, j4) && k6.yM.bb(fV.yO(), oi.yl[7])
		}(j4) : 2 === code && function(j4) {
			h4.ef.yL(bK.bL, j4) && k6.yM.bh(fV.yO())
		}(j4))))
	}, this.a09 = function() {
		if (!bK.bY && !vs.vt && aR.bc.a3o(1)) {
			var o4 = bK.bL;
			if (aR.bc.ye(o4)) {
				var ae = ks.mk(o4);
				if (ae < 1) ! function() {
					var o4 = bK.bL;
					if (kf.yv(o4)) k6.yM.yU(fV.yO(), bK.g6);
					else
						for (var aFC = x.aFC, ki = fL.ki, ae = ki[o4].length, aFv = Math.floor(Math.random() * ae), ai = 0; ai < ae; ai++)
							for (var a3j = 3; 0 <= a3j; a3j--) {
								var jc = ki[o4][(ai + aFv) % ae] + aFC[a3j];
								if (x.yi(jc)) {
									jc = x.yj(jc);
									if (jc !== o4 && (!bK.fR || kf.yz(o4, jc))) return k6.yM.yU(fV.yO(), jc)
								}
							}
				}();
				else {
					for (var aa0 = 0, mW = ks.mm(o4, 0), ai = 1; ai < ae; ai++) {
						var aOA = ks.mm(o4, ai);
						aOA < mW && (mW = aOA, aa0 = ai)
					}
					k6.yM.yU(fV.yO(), ks.ml(o4, aa0))
				}
			}
		}
	}, this.a0A = function() {
		if (!bK.bY && !vs.vt && aR.bc.ye(bK.bL) && aR.bc.a3o(1)) return zu.mO ? zu.a4I(bK.bL) ? void k6.yM.a4G(1) : void 0 : void(zu.a4O(bK.bL) && k6.yM.a0A())
	}
}

function aLN() {
	this.aa1 = null, this.q = function() {
		10 !== bK.k7 ? this.aa1 = null : this.aa1 = new Uint32Array(bK.g6)
	}, this.fA = function() {
		10 === bK.k7 && this.ak()
	}, this.ak = function() {
		for (var o4, target, aGb, aa1 = this.aa1, pk = my.n0, a2z = fL.jD, ai = my.mz - 1; 0 <= ai; ai--)(o4 = pk[ai]) >= bK.gd || (target = Math.max(je.kI(a2z[o4], 4), 2048), aGb = Math.max(a2n.a2i(o4), 100), aa1[o4] += je.kI(aGb * target, 1e4),
			aa1[o4] > target && (aa1[o4] = target))
	}, this.aMh = function(player, mW) {
		return mW > this.aa1[player] ? (mW = this.aa1[player], this.aa1[player] = 0) : this.aa1[player] -= mW, mW
	}
}

function c7() {
	var aa2 = 0,
		aa3 = "",
		aa4 = 0,
		aa5 = 0,
		aa6 = 0;

	function rQ(rU) {
		bM.rZ.hm(3, rU)
	}

	function aaG(nt) {
		aa2 = 1, aY.message.q7({
			id: 6,
			value: nt
		})
	}

	function aaA(ap) {
		var aaJ = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return ap.match(aaJ)
	}
	this.ju = function(ap) {
		var aa7, nu, aaC;
		if (aa2) return aa2 = 0, "yes" === (aa7 = ap.toLowerCase()) || "y" === aa7 ? void rQ(aa3) : void aY.message.q7({
			id: 5,
			q9: 7
		});
		!(ap.indexOf("@") < 0) && (aa7 = aaA(ap)) ? (aa3 = ap, nu = function(aa9) {
			for (var ae = aa9.length, aaI = [0, 0, 0, 0], ai = 0; ai < ae; ai++)
				for (var b4 = aa9[ai], gF = 0; gF < 4; gF++) b4 === "@room" + (gF + 1) && (aaI[gF] = 1);
			if ((aa5 = aR.ie.ig(aaI)) % 4 == 0) return aR.ie.aPC(aY.bl.rs);
			for (gF = 0; gF < 4; gF++) aaI[gF] = aaI[gF] ? aY.bl.rs[gF] : [];
			return aR.ie.aPC(aaI)
		}(aa7), function(aa9, aaC, ap) {
			if (!aa4) return;
			for (var ae = aaC.length, ai = 0; ai < ae; ai++) 2 === aaC[ai].id && (ap = ap.replace(aa9[aaC[ai].a8], "@" + aaC[ai].er));
			return aa2 = 1, rQ((aa3 = ap).slice(0, 126) + "|"), 1
		}(aa7, aaC = function(aa9) {
			for (var aaC = [], ae = (aa6 = aa4 = 0, aa9.length), ai = 0; ai < ae; ai++) {
				var b4 = aa9[ai],
					kG = b4.length;
				aR.aS.startsWith(b4, "@[") ? kG <= 9 && aR.aS.rb(b4, "]") && aaC.push({
					id: 0,
					er: b4.substring(2, kG - 1).toUpperCase()
				}) : 6 === kG ? aR.aS.startsWith(b4, "@room") || (aa6++, aaC.push({
					id: 1,
					er: bw.bx.by(b4.substring(1), 5)
				})) : 1 < kG && kG < 5 && 0 <= (kG = ln.data.aCK(b4.substring(1))) && (aaC.push({
					id: 2,
					er: kG,
					a8: ai
				}), aa4 = 1)
			}
			return aaC
		}(aa7), ap) || (0 === aaC.length ? aa5 || function(aa9) {
			for (var ae = aa9.length, ai = 0; ai < ae; ai++) {
				var b4 = aa9[ai];
				if ("@all" === b4 || "@everyone" === b4) return 1
			}
			return
		}(aa7) ? aaG(nu.length) : rQ(ap) : aa7.length === aa6 ? rQ(ap) : (function(nu, aaC) {
			var kG = aaC.length;
			if (0 === kG) return;
			var ae = nu.length;
			loop: for (var ai = ae - 1; 0 <= ai; ai--) {
				for (var gF = 0; gF < kG; gF++)
					if (0 === aaC[gF].id) {
						if (aaC[gF].er === aR.aS.a6t(nu[ai].username)) continue loop
					} else if (1 === aaC[gF].id && aaC[gF].er === nu[ai].d8) continue loop;
				nu[ai] = nu[--ae], nu.pop()
			}
		}(nu, aaC), aaG(nu.length)))) : rQ(ap)
	}, this.a9n = function(ap) {
		var aa9 = aaA(ap);
		if (aa9)
			for (var aJk = new RegExp("^[0-9]+$"), ae = aa9.length, ai = 0; ai < ae; ai++) {
				var b4 = aa9[ai].substring(1),
					kG = b4.length;
				1 <= kG && kG <= 3 && aJk.test(b4) && (kG = parseInt(b4, 10), !isNaN(kG)) && 0 <= kG && kG < ln.data.nu.length && (ap = ap.replace("@" + b4, "@" + ln.data.nu[kG]))
			}
		return ap
	}
}

function qg(av, v5) {
	var v1 = document.createElement("div");
	this.r0 = v1, this.resize = function() {
		v1.style.padding = aR.az.b8(dH.aBo), v1.style.lineHeight = aR.az.b8(aR.az.b0(.035))
	}, av.style.overflowX = "hidden", av.style.overflowY = "auto", v1.innerHTML = v5, av.appendChild(v1)
}

function aS6() {
	var iR, iS, iT, ii;

	function iV() {
		iZ(), 2 !== bK.data.iIncomeType && (bK.data.iIncomeData = null), ax.ib()[19] = null, ax.ic()
	}

	function iZ() {
		2 === bK.data.iIncomeType && aR.ie.j0(iT.f7(), bK.data.iIncomeData, 255)
	}
	this.show = function() {
		iR.show(), this.resize()
	}, this.aw = function() {
		iR.aw()
	}, this.resize = function() {
		iR.resize(), iS.resize()
	}, this.ix = function(iJ) {
		2 === iJ && iR.iy[0].iB()
	}, iR = new iU(L(246), [new aM("⬅️ " + L(10), iV)]), iS = new iW(iR.iX, (function(ii) {
		var hW = new il;
		hW.im(L(11)), hW.io(new ip({
			iq: [L(35), L(36), L(14)],
			value: bK.data.iIncomeType
		}, function(a8) {
			iZ(), 2 !== a8 || bK.data.iIncomeData || (bK.data.iIncomeData = new Uint8Array(bK.g6), bK.data.iIncomeData.fill(32)), bK.data.iIncomeType = a8, ax.gu(27)
		})), ii.push(hW)
	}(ii = []), function(ii) {
		var hW;
		1 === bK.data.iIncomeType && ((hW = new il).im("Value"), hW.ir(new a7({
			a8: -1,
			value: bK.data.iIncomeValue
		}, 1, 0, function(aH) {
			var value = je.jf(Math.floor(aH.target.value), 0, 255);
			aH.target.value = bK.data.iIncomeValue = value
		})), ii.push(hW))
	}(ii), function(ii) {
		var hW;
		2 === bK.data.iIncomeType && ((hW = new il).im("Data"), (iT = new iu(0, 1, 0, 1)).iv(aR.aS.iw(bK.data.iIncomeData, 4)), hW.ir(iT), ii.push(hW))
	}(ii), ii))
}

function aL7() {
	var aaK, aaL, aaM;

	function aaR(ai) {
		var button = tv.jW[ai],
			r = button.r,
			s = button.s,
			b4 = button.b4,
			b9 = button.b9;
		eD.fillStyle = button.aaP, eD.fillRect(r, s, b4, b9), ai === aaK && (eD.fillStyle = aaM, eD.fillRect(r, s, b4, b9)), eD.lineWidth = dH.gN, eD.strokeStyle = aaL, eD.strokeRect(r, s, b4, b9),
			function(button) {
				var r = button.r,
					s = button.s,
					b4 = button.b4,
					b9 = button.b9;
				aR.az.textAlign(eD, 1), aR.az.textBaseline(eD, 1), eD.font = button.font, eD.fillStyle = aaL, eD.fillText(button.rU, Math.floor(r + b4 / 2), Math.floor(s + b9 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.b4 = 0, this.b9 = 0, this.s = 0, this.gap = 0, this.q = function() {
		aaK = -1, aaL = aJ.eA, aaM = "rgba(255,255,255,0.16)", this.jW = new Array(7), this.b9 = Math.floor((bA.bB.bC() ? .123 : .093) * b3.dG), this.b4 = Math.floor((bA.bB.bC() ? 3.96 : 4.2) * this.b9), this.gap = Math.floor(.025 * this.b4);
		var aaN = Math.floor(.26 * this.b9),
			aaO = aR.az.f8(1, aaN);
		this.jW[0] = {
			r: 0,
			s: 0,
			b4: Math.floor(.6 * this.b4 - this.gap / 2),
			b9: this.b9,
			rU: "Multiplayer",
			font: aaO,
			aaP: "rgba(22,88,22,0.8)",
			fontSize: aaN
		}, aaN = Math.floor(.18 * this.b9), aaO = aR.az.f8(1, aaN), this.jW[1] = {
			r: 0,
			s: 0,
			b4: this.b4 - this.jW[0].b4 - this.gap,
			b9: this.b9,
			rU: "Single Player",
			font: aaO,
			aaP: "rgba(22,88,88,0.8)",
			fontSize: aaN
		}, this.jW[2] = {
			r: 0,
			s: 0,
			b4: this.b4,
			b9: Math.floor(.3 * this.b9),
			rU: "",
			font: this.jW[1].font,
			aaP: "rgba(100,0,0,0.8)",
			fontSize: this.jW[1].fontSize
		}, this.jW[3] = {
			r: 0,
			s: 0,
			b4: this.b4,
			b9: this.b9,
			rU: "Back",
			font: this.jW[0].font,
			aaP: "rgba(0,0,0,0.8)",
			fontSize: this.jW[0].fontSize
		}, this.jW[4] = {
			r: 0,
			s: 0,
			b4: this.b4,
			b9: Math.floor(.3 * this.b9),
			rU: "The game was updated!",
			font: this.jW[1].font,
			aaP: "rgba(100,0,0,0.8)",
			fontSize: this.jW[1].fontSize
		}, this.jW[5] = {
			r: 0,
			s: 0,
			b4: this.jW[0].b4,
			b9: Math.floor(.8 * this.b9),
			rU: "Reload",
			font: this.jW[0].font,
			aaP: "rgba(0,100,0,0.8)",
			fontSize: this.jW[0].fontSize
		}, this.jW[6] = {
			r: 0,
			s: 0,
			b4: this.jW[1].b4,
			b9: this.jW[5].b9,
			rU: "Back",
			font: this.jW[0].font,
			aaP: "rgba(0,0,0,0.8)",
			fontSize: this.jW[0].fontSize
		}, this.sp()
	}, this.sp = function() {
		this.s = Math.floor(.54 * b3.b9), this.jW[0].r = Math.floor(.5 * b3.b4 - .5 * this.b4), this.jW[1].r = this.jW[0].r + this.jW[0].b4 + this.gap, this.jW[2].r = this.jW[3].r = this.jW[0].r, this.jW[4].r = this.jW[5].r = this.jW[0].r, this
			.jW[6].r = this.jW[1].r, this.jW[0].s = Math.floor(.54 * b3.b9), this.jW[1].s = this.jW[0].s, this.jW[2].s = Math.floor((b3.b9 - this.jW[2].b9 - this.jW[3].b9 - this.gap) / 2), this.jW[3].s = this.jW[2].s + this.jW[2].b9 + this.gap,
			this.jW[4].s = Math.floor((b3.b9 - this.jW[4].b9 - this.jW[5].b9 - this.gap) / 2), this.jW[5].s = this.jW[6].s = this.jW[4].s + this.jW[4].b9 + this.gap
	}, this.aaQ = function() {
		aaR(0), aaR(1)
	}, this.aaS = function() {
		aaR(2), aaR(3)
	}, this.aaT = function() {
		aaR(4), aaR(5), aaR(6)
	}, this.dk = function(r, s, gC) {
		var ai = -1;
		return 0 === cB.mP() ? ai = this.oK(r, s, 0, 2) : 3 === cB.mP() ? ai = this.oK(r, s, 3, 1) : 5 === cB.mP() && (ai = this.oK(r, s, 5, 2)), aaK !== ai && (aaK = ai, gC) && (bu.dw = !0), -1 !== ai && (ss.aU(), !0)
	}, this.oK = function(r, s, aYV, size) {
		for (var ai = aYV; ai < aYV + size; ai++)
			if (r >= this.jW[ai].r && s >= this.jW[ai].s && r <= this.jW[ai].r + this.jW[ai].b4 && s <= this.jW[ai].s + this.jW[ai].b9) return ai;
		return -1
	}
}

function aLf() {
	this.kz = function() {
		for (var r, s, ai = ky - 1; 0 <= ai; ai--) r = je.kI(lJ[ai], 4) % t.u, s = je.kI(lJ[ai], 4 * t.u), fL.jI[ku] = Math.min(r, fL.jI[ku]), fL.jJ[ku] = Math.min(s, fL.jJ[ku]), fL.jK[ku] = Math.max(r, fL.jK[ku]), fL.jL[ku] = Math.max(s, fL.jL[
			ku])
	}, this.aZZ = function() {
		var iP, o4, ai, ae = fL.kn[ku].length,
			aFC = x.aFC;
		loop: for (ai = ae - 1; 0 <= ai; ai--) {
			for (iP = 3; 0 <= iP; iP--)
				if (o4 = fL.kn[ku][ai] + aFC[iP], x.yr(o4) || x.yi(o4) && x.yj(o4) !== ku) {
					x.aFE(fL.kn[ku][ai], ku);
					continue loop
				} fL.kn[ku][ai] = fL.kn[ku][ae - 1], fL.kn[ku].pop(), ae--
		}
	}, this.aZa = function() {
		var player = ku,
			ki = fL.ki,
			kj = fL.kj,
			kl = fL.kl,
			ae = ki[player].length,
			aFC = x.aFC;
		loop: for (var ai = ae - 1; 0 <= ai; ai--) {
			for (var aaV = !1, aaW = !1, iP = 3; 0 <= iP; iP--) {
				var o4 = ki[player][ai] + aFC[iP];
				if (x.a3m(o4, player)) continue loop;
				aaV = aaV || x.kV(o4), aaW = aaW || x.aQS(o4)
			}
			aaV ? kj[player].push(ki[player][ai]) : aaW ? kl[player].push(ki[player][ai]) : x.aQc(ki[player][ai], player), ki[player][ai] = ki[player][ae - 1], ki[player].pop(), ae--
		}
	}, this.kg = function() {
		fL.ge[kc] -= ky
	}, this.kh = function(border) {
		for (var ae = border.length, ai = ae - 1; 0 <= ai; ai--) x.ys(kc, border[ai]) || (border[ai] = border[ae - 1], border.pop(), ae--)
	}, this.km = function(border) {
		for (var ae = border.length, ai = ae - 1; 0 <= ai; ai--) !x.ys(kc, border[ai]) && x.z3(border[ai]) && (border[ai] = border[ae - 1], border.pop(), ae--)
	}, this.ko = function(border) {
		for (var iP, o4, ae = border.length, aFC = x.aFC, ai = ae - 1; 0 <= ai; ai--)
			for (iP = 3; 0 <= iP; iP--)
				if (o4 = border[ai] + aFC[iP], x.a3m(o4, kc)) {
					fL.ki[kc].push(border[ai]), border[ai] = border[ae - 1], border.pop(), ae--;
					break
				}
	}, this.kp = function() {
		for (var iP, o4, aFC = x.aFC, ai = ky - 1; 0 <= ai; ai--)
			for (iP = 3; 0 <= iP; iP--) o4 = lJ[ai] + aFC[iP], x.aQU(kc, o4) && x.aQV(o4) && (fL.ki[kc].push(o4), x.lK(o4, kc))
	}, this.kq = function() {
		var r, s;
		loop: for (; fL.jJ[kc] < fL.jL[kc];) {
			for (r = fL.jK[kc]; r >= fL.jI[kc]; r--)
				if (x.ys(kc, 4 * (fL.jJ[kc] * t.u + r))) break loop;
			fL.jJ[kc]++
		}
		loop: for (; fL.jJ[kc] < fL.jL[kc];) {
			for (r = fL.jK[kc]; r >= fL.jI[kc]; r--)
				if (x.ys(kc, 4 * (fL.jL[kc] * t.u + r))) break loop;
			fL.jL[kc]--
		}
		loop: for (; fL.jI[kc] < fL.jK[kc];) {
			for (s = fL.jL[kc]; s >= fL.jJ[kc]; s--)
				if (x.ys(kc, 4 * (s * t.u + fL.jI[kc]))) break loop;
			fL.jI[kc]++
		}
		loop: for (; fL.jI[kc] < fL.jK[kc];) {
			for (s = fL.jL[kc]; s >= fL.jJ[kc]; s--)
				if (x.ys(kc, 4 * (s * t.u + fL.jK[kc]))) break loop;
			fL.jK[kc]--
		}
	}, this.yz = function(player, mV) {
		return 0 === gT.og[player] || gT.og[player] !== gT.og[mV]
	}, this.yv = function(player) {
		for (var ai, gO, ae = fL.ki[player].length, aFC = x.aFC, iP = 3; 0 <= iP; iP--)
			for (gO = aFC[iP], ai = 0; ai < ae; ai++)
				if (x.yr(fL.ki[player][ai] + gO)) return !0;
		return !1
	}, this.aaX = function(player) {
		for (var ai, gO, ae = fL.ki[player].length, aFC = x.aFC, iP = 3; 0 <= iP; iP--)
			for (gO = aFC[iP], ai = 0; ai < ae; ai++)
				if (x.aFD(fL.ki[player][ai]) && x.yr(fL.ki[player][ai] + gO)) return !0;
		return !1
	}, this.z0 = function(aMa, aMb) {
		for (var ai, gj, gO, o4, a4h = fL.ki[aMa].length, a4i = fL.ki[aMb].length, aFC = (a4i < a4h && (gj = aMa, aMa = aMb, aMb = gj, gj = a4h, a4h = a4i, 0), x.aFC), iP = 3; 0 <= iP; iP--)
			for (gO = aFC[iP], ai = 0; ai < a4h; ai++)
				if (o4 = fL.ki[aMa][ai] + gO, x.yi(o4) && x.yj(o4) === aMb) return !0;
		return !1
	}, this.aaY = function(aMa, aMb) {
		for (var ai, gO, o4, a4h = fL.ki[aMa].length, aFC = x.aFC, iP = 3; 0 <= iP; iP--)
			for (gO = aFC[iP], ai = 0; ai < a4h; ai++)
				if (x.aFD(fL.ki[aMa][ai]) && (o4 = fL.ki[aMa][ai] + gO, x.yi(o4)) && x.yj(o4) === aMb) return !0;
		return !1
	}
}

function aLL() {
	var th = 0,
		aaZ = !0;

	function aaa(id) {
		id = [L(519), L(520), L(521), L(522)][id];
		bI.aXZ(id)
	}
	this.fA = function() {
		var gj, s5;
		bu.bv < th || (th = bu.bv + 5e3, bK.bY) || bK.bX || aR.bc.ye(bK.bL) || (gj = new Date, s5 = gj.getUTCSeconds(), aaZ ? s5 < 50 && (aaZ = !1) : s5 < 50 || (aaZ = !0, (s5 = (gj.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == s5 || 20 == s5 ||
			40 == s5 ? bK.k7 < 7 && aaa(0) : 10 == s5 || 30 == s5 || 50 == s5 ? 7 !== bK.k7 && 10 !== bK.k7 || aaa(1) : 5 == s5 || 25 == s5 || 45 == s5 ? 8 === bK.k7 && aaa(2) : 35 == s5 && 9 === bK.k7 && aaa(3))))
	}
}

function aab() {
	this.vp = 0, this.fA = function() {
		aCB.fA(), a0E.fA(), b3.fA(), bM.aZ.fA(), aEB.aZP(), vA.lO.fA(), bu.dw && (bu.dw = !1, cB.eC())
	}
}

function aLW() {
	this.iB = new aUc, this.c0 = new a5d, this.cG = new aMu, this.aZ = new xW, this.r4 = new aYb, this.q = function() {
		this.c0.q(), (new ji).q(), this.r4.q(), this.aZ.xb()
	}
}

function aLK() {
	var aac = 0,
		aad = new Uint16Array(64);

	function aYd(yD) {
		aac -= 2;
		for (var ai = yD; ai < aac; ai += 2) aad[ai] = aad[ai + 2], aad[ai + 1] = aad[ai + 3]
	}
	this.q = function() {
		aac = 0
	}, this.fA = function() {
		var ai, mV, a3q;
		if (0 !== aac)
			if (0 === fL.gl[bK.bL]) aac = 0;
			else if (0 === ks.mk(bK.bL)) aac = 0;
		else
			for (ai = aac - 2; 0 <= ai; ai -= 2)(mV = aad[ai]) < bK.g6 && 0 === fL.gl[mV] ? aYd(ai) : (a3q = aad[ai + 1], (mV >= bK.g6 && kf.aaX(bK.bL) || mV < bK.g6 && kf.aaY(bK.bL, mV)) && (k6.yM.yU(a3q, mV), aYd(ai)))
	}, this.yW = function(mV, a3q) {
		! function(mV, a3q) {
			for (var ai = 0; ai < aac; ai += 2)
				if (aad[ai] === mV) return aad[ai + 1] = Math.min(aad[ai + 1] + a3q, 1023), 1;
			return
		}(mV, a3q) && 64 !== aac && (aad[aac] = mV, aad[aac + 1] = a3q, aac += 2)
	}
}

function vy() {
	aKr.or(), eD.setTransform(dJ, 0, 0, dJ, 0, 0), eD.imageSmoothingEnabled = dJ < 3, eD.drawImage(t.a16, e7.dX(), e7.dY()), jQ.eH.eC(), eD.drawImage(aM1, e7.dX(), e7.dY()), aKr.eC(), h4.eC(), dq.eC(), (bK.dg ? (fT.eC(), zr) : (bI.eC(), zw.eC(), fV
		.eC(), zr.eC(), zu.eC(), jF.eC(), e7.eC(), fD.eC(), fT.eC(), aEA.eC(), zt.eC(), vs.eC(), jS.eC(), jN.eC(), zs.eC(), jM)).eC(), ax.eC()
}

function aOY(f4, b4, b9) {
	f4.clearRect(0, 0, b4, b9), f4.fillStyle = aJ.bg, f4.fillRect(0, 0, b4, b9)
}

function aOZ(f4, b4, b9, aOb) {
	f4.fillStyle = aJ.eA, f4.fillRect(0, 0, b4, aOb), f4.fillRect(0, 0, aOb, b9), f4.fillRect(b4 - aOb, 0, aOb, b9), f4.fillRect(0, b9 - aOb, b4, aOb)
}

function eB(f4, r, s, wK, aOb, o4, aag) {
	f4.fillStyle = aJ.eA;
	var o4 = Math.floor(wK * o4),
		mM = (o4 += (o4 - aOb) % 2, Math.floor((o4 - aOb) / 2)),
		wK = Math.floor((wK - o4) / 2);
	f4.fillRect(r + wK, s + wK + mM, o4, aOb), aag && f4.fillRect(r + wK + mM, s + wK, aOb, o4)
}

function aLB() {
	var aai;
	this.wV = null, this.aRv = 0, this.q = function() {
		aai = [], 9 === bK.k7 && this.aaj()
	}, this.aaj = function() {
		this.wV = [0, 0, 0, 0, 0, 0];
		for (var aak = [256, 227, 170, 148, 100, this.aRv = 0, 0, 0], aBH = [0, 8, 24, 30, 46, 70, 256, 333], aal = [0, 0, 3, 7, 14, 22, 256, 179], b9 = bK.gd, ai = 1; ai < aak.length; ai++)
			if (b9 <= aBH[ai]) {
				this.aRv = aak[ai - 1] - je.kI((b9 - aBH[ai - 1]) * (aak[ai - 1] - aak[ai]), aBH[ai] - aBH[ai - 1]), this.wV[5] = aal[ai - 1] - je.kI((b9 - aBH[ai - 1]) * (aal[ai - 1] - aal[ai]), aBH[ai] - aBH[ai - 1]), this.wV[0] = bK.g6 - b9 -
					this.aRv - this.wV[5];
				break
			} bK.aRs = bK.g6 - bK.gd, bK.data.numberTeams = (0 < bK.gd) + (0 < bK.aRs), bK.data.playerCount = bK.a4j = bK.gd + bK.aRs, bK.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, bK.gd + this.aRv, bK.aRs - this.aRv]), bK.jY
			.jZ()
	}, this.aMK = function(player) {
		aai.push({
			player: player,
			nt: 14 + kJ.tM(20)
		})
	}, this.fA = function() {
		if (9 === bK.k7)
			for (var ai = aai.length - 1; 0 <= ai; ai--) --aai[ai].nt <= 0 && (dq.a4F(aai[ai].player, 0, y7.at.y9 + y7.at.aR0), aai.splice(ai))
	}
}

function aLc() {
	var aan = new Array(1),
		aao = new Array(1),
		aap = 20,
		aYZ = 0,
		aaq = !1;

	function aas() {
		aap++, cA.play()
	}
	this.q = function() {
		if (!window.document.documentMode) {
			for (var ai = 0; 0 <= ai; ai--) ! function(ai, src) {
				aao[ai] = 0, aan[ai] = document.createElement("audio"), aan[ai].src = src, aan[ai].setAttribute("preload", "auto"), aan[ai].setAttribute("controls", "none"), aan[ai].style.display = "none", aan[ai].onpause = function() {
					aao[ai] = 1
				}, aan[ai].oncanplaythrough = function() {
					aao[ai] = 0 === aao[ai] ? 1 : aao[ai]
				}, document.body.appendChild(aan[ai])
			}(ai,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aaq = !0
		}
	}, this.cC = function() {
		if (aaq) {
			aaq = !1;
			for (var ai = 0; 0 <= ai; ai--) aan[ai].onpause = null, aan[ai].oncanplaythrough = null, ax.removeChild(document.body, aan[ai]), aan[ai] = null
		}
	}, this.play = function() {
		if (aaq) {
			var gj = performance.now();
			if (aYZ + 66 < gj)
				for (var ai = 0; 0 <= ai; ai--)
					if (1 === aao[ai]) return aYZ = gj, aao[ai] = 2, void aan[ai].play();
			0 < aap && (aap--, setTimeout(aas, 66))
		}
	}
}

function aL3() {
	var rU, oR, aOJ, b4, b9, font, en;

	function aav(aLx) {
		return aLx < 10 ? "0" + aLx : String(aLx)
	}
	this.q = function() {
		en = L(523)
	}, this.resize = function() {
		b4 = Math.floor((bA.bB.bC() ? .53 : .36) * b3.dG), b9 = Math.floor(.065 * b4), font = aR.az.f8(1, Math.floor(.9 * b9)), aOJ--, this.setTime()
	}, this.fA = function() {
		this.setTime() && (bu.dw = !0)
	}, this.setTime = function() {
		for (var gj = new Date, s4 = gj.getUTCMinutes(), s5 = gj.getUTCSeconds(), aat = [0, 10, 20, 25, 30, 35, 40, 45, 50], aau = (oR = 3600 - 60 * s4 - s5, oR %= 300, 300), ai = 0; ai < aat.length; ai++)
			if ((60 * s4 + s5 + oR) % 3600 == 60 * aat[ai]) {
				aau = 0;
				break
			} return oR += aau, rU = en + aav(Math.floor(oR / 60)) + ":" + aav(oR % 60), aOJ !== (aOJ = 60 * s4 + s5) && (b4 = fD.measureText(rU, font), b4 += Math.floor(.4 * b9), !0)
	}, this.eC = function() {
		eD.lineWidth = 1 + Math.floor(b9 / 15), eD.translate(b3.b4 - b9, Math.floor(.5 * (b3.b9 + b4))), eD.rotate(-Math.PI / 2), eD.fillStyle = aJ.eA, eD.fillRect(0, 0, b4, b9), eD.strokeStyle = aJ.fY, eD.strokeRect(0, 0, b4, b9 + 10), eD
			.fillStyle = aJ.fY, eD.font = font, aR.az.textBaseline(eD, 1), aR.az.textAlign(eD, 1), eD.fillText(rU, Math.floor(b4 / 2), Math.floor(.59 * b9)), eD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aL1() {
	var uj, uk, aaw, aST, aax, aay, aaz, ab0, ab1, ab2;

	function ab4() {
		var a4j = bK.a4j;
		for (ab1 = a4j; ab1 < bK.g6; ab1++) ab3();
		for (ab1 = bK.j9 ? bK.gd : 0; ab1 < a4j; ab1++) {
			if (!ab7()) {
				for (var pW = bK.aWu = ab1; pW < a4j; pW++) ab1 = pW, ab3();
				return
			}
			ab8(aay + uj * aax + je.kI(aax, 2), aaz + uk * aax + je.kI(aax, 2))
		}
	}

	function abP(player) {
		for (var jI = fL.jI, jJ = fL.jJ, jK = fL.jK, jL = fL.jL, s = jJ[player]; s <= jL[player]; s++)
			for (var r = jI[player]; r <= jK[player]; r++) {
				var dx = x.y(r, s);
				x.yi(dx) && (x.aFD(dx) ? x.lK(dx, player) : x.aQc(dx, player))
			}
	}

	function abO(nu, h5, h6) {
		var gj = nu[h5];
		nu[h5] = nu[h6], nu[h6] = gj
	}

	function ab7() {
		return function() {
			var ai;
			for (ai = 0; ai < 8; ai++)
				if (uj = je.kI(aaw * kJ.random(), kJ.value(100)), uk = je.kI(aST * kJ.random(), kJ.value(100)), abU()) return 1;
			return
		}() || function() {
			var dn, dp, gF, zA, pW, z9;
			for (dn = je.kI(aaw * kJ.random(), kJ.value(100)), dp = je.kI(aST * kJ.random(), kJ.value(100)), gF = 40; 1 <= gF; gF--)
				for (zA = aST - gF; 0 <= zA; zA -= 40)
					for (uk = (zA + dp) % aST, pW = 40; 1 <= pW; pW--)
						for (z9 = aaw - pW; 0 <= z9; z9 -= 40)
							if (uj = (z9 + dn) % aaw, abU()) return 1;
			return
		}()
	}

	function abU() {
		for (var o4, abW, gap = je.kI(aax - ab0, 2), a2Q = aaz + uk * aax + gap, a2c = aay + uj * aax + gap, abV = a2Q + ab0 - 1; a2Q <= abV; abV--)
			for (abW = a2c + ab0 - 1; a2c <= abW; abW--)
				if (o4 = x.y(abW, abV), !x.z3(o4) || x.aFD(o4)) return;
		return 1
	}

	function ab8(z9, zA) {
		ab3(), abX(z9 - 2, zA - 2)
	}

	function ab3() {
		fL.gl[ab1] = 0, fL.ge[ab1] = fL.aGE[ab1] = 0, fL.kn[ab1] = [], fL.ki[ab1] = [], fL.kj[ab1] = [], fL.kl[ab1] = [], fL.jI[ab1] = fL.jJ[ab1] = fL.jK[ab1] = fL.jL[ab1] = 0
	}

	function abX(z9, zA) {
		var o4, ai, abY, abZ;
		for (fL.gl[ab1] = 1, fL.jI[ab1] = z9 + 10, fL.jJ[ab1] = zA + 10, fL.jL[ab1] = fL.jK[ab1] = 0, abY = z9; abY < z9 + 4; abY++)
			for (abZ = zA; abZ < zA + 4; abZ++)(z9 < abY && abY < z9 + 3 || zA < abZ && abZ < zA + 3) && (o4 = x.y(abY, abZ), x.z3(o4)) && (fL.jI[ab1] = Math.min(abY, fL.jI[ab1]), fL.jK[ab1] = Math.max(abY, fL.jK[ab1]), fL.jJ[ab1] = Math.min(abZ, fL
				.jJ[ab1]), fL.jL[ab1] = Math.max(abZ, fL.jL[ab1]), ab2[fL.ge[ab1]] = o4, fL.ge[ab1]++, x.aQc(o4, ab1));
		for (fL.aGE[ab1] = fL.ge[ab1], ai = fL.ge[ab1] - 1; 0 <= ai; ai--) x.a3i(ab2[ai], ab1) ? (x.lK(ab2[ai], ab1), fL.ki[ab1].push(ab2[ai])) : x.a2S(ab2[ai]) ? (x.lK(ab2[ai], ab1), fL.kj[ab1].push(ab2[ai])) : x.aQR(ab2[ai]) && (x.lK(ab2[ai], ab1),
			fL.kl[ab1].push(ab2[ai]))
	}
	this.q = function() {
		if (ab2 = new Array(12), ab0 = 6, aax = 10, aaw = je.kI(t.u, aax), aST = je.kI(t.v, aax), aay = je.kI(t.u - aax * aaw, 2), aaz = je.kI(t.v - aax * aST, 2), bK.j9)
			for (var ai = 0; ai < bK.gd; ai++) ab1 = ai, ab3(), fL.gl[ab1] = 1;
		(0 === bK.data.spawningType ? ab4 : 1 === bK.data.spawningType ? (ab4(), function() {
			var aBj = bK.oT;
			bK.aTa || aBj++;
			if (!(aBj < 3)) {
				for (var data = bK.data, af = (bK.j9 ? bK.gd : 0) + data.teamPlayerCount[0], dj = bK.aWu, ab9 = new Uint32Array(aBj), abA = new Uint32Array(aBj), abB = new Uint16Array(aBj), abC = new Uint16Array(aBj), og = gT.og, jI = fL
						.jI, jJ = fL.jJ, jK = fL.jK, jL = fL.jL, aYv = oi.aYv, aYw = oi.aYw, ai = af; ai < dj; ai++) aYv[ai] = jI[ai] + jK[ai] >> 1, aYw[ai] = jJ[ai] + jL[ai] >> 1;
				for (ai = af; ai < dj; ai++) {
					var id = og[ai];
					ab9[id] += aYv[ai], abA[id] += aYw[ai]
				}
				var oZ = gT.oZ;
				for (ai = 1; ai < aBj; ai++) {
					var nt = Math.max(data.teamPlayerCount[oZ[ai]], 1);
					abB[ai] = je.kI(ab9[ai], nt), abC[ai] = je.kI(abA[ai], nt)
				}
				var aBJ = gT.aBJ,
					aBK = gT.aBK,
					aBL = gT.aBL,
					oh = oi.oh;
				for (ai = 0; ai < 512; ai++) oh[ai] = ai;
				for (var oo = 0; oo < 2 + (4 <= aBj); oo++)
					for (ai = af; ai < dj; ai++) {
						for (var xh = ai, aZF = oh[xh], abD = 1, kM = je.a7S(aYv[aZF] - abB[1], aYw[aZF] - abC[1]), gF = 2; gF < aBj; gF++) {
							var aSf = je.a7S(aYv[aZF] - abB[gF], aYw[aZF] - abC[gF]);
							aSf < kM && (kM = aSf, abD = gF)
						}
						var abE = og[xh];
						if (abD !== abE) {
							if (2 === oo && 4 <= aBj) {
								var abF = Math.max((abD + 1) % aBj, 1),
									abG = je.a7S(aYv[aZF] - abB[abF], aYw[aZF] - abC[abF]);
								for (gF = 1; gF < aBj; gF++) aSf = je.a7S(aYv[aZF] - abB[gF], aYw[aZF] - abC[gF]), kM < aSf && aSf < abG && (abG = aSf, abF = gF);
								abF !== abE && je.a7S(abB[abE] - abB[abF], abC[abE] - abC[abF]) < je.a7S(abB[abE] - abB[abD], abC[abE] - abC[abD]) && (abD = abF)
							}
							var abH = oZ[abD],
								abI = aBK[abH] + (bK.j9 ? 0 : aBL[abH]),
								xi = aBJ[abI],
								aZG = oh[xi],
								abJ = aBK[abH + 1];
							kM = je.a7S(aYv[aZG] - abB[abE], aYw[aZG] - abC[abE]);
							for (var iJ = abI + 1; iJ < abJ; iJ++) {
								var abK = aBJ[iJ],
									abL = oh[abK];
								(aSf = je.a7S(aYv[abL] - abB[abE], aYw[abL] - abC[abE])) < kM && (kM = aSf, xi = abK)
							}
							xi < af || dj <= xi || (aZG = oh[xi], ab9[abE] += aYv[aZG] - aYv[aZF], abA[abE] += aYw[aZG] - aYw[aZF], ab9[abD] += aYv[aZF] - aYv[aZG], abA[abD] += aYw[aZF] - aYw[aZG], nt = data.teamPlayerCount[oZ[abE]], abB[
								abE] = je.kI(ab9[abE], nt), abC[abE] = je.kI(abA[abE], nt), nt = data.teamPlayerCount[abH], abB[abD] = je.kI(ab9[abD], nt), abC[abD] = je.kI(abA[abD], nt), oh[xh] = aZG, oh[xi] = aZF)
						}
					}! function() {
						for (var oh = oi.oh, jI = fL.jI, jJ = fL.jJ, jK = fL.jK, jL = fL.jL, ge = fL.ge, aGE = fL.aGE, ki = fL.ki, kj = fL.kj, kl = fL.kl, ai = 0; ai < 512; ai++) {
							var abN = oh[ai];
							if (abN !== ai) {
								abO(jI, ai, abN), abO(jJ, ai, abN), abO(jK, ai, abN), abO(jL, ai, abN), abO(ge, ai, abN), abO(aGE, ai, abN), abO(ki, ai, abN), abO(kj, ai, abN), abO(kl, ai, abN), abP(ai), abP(abN), oh[ai] = ai;
								for (var b9 = abN, gO = oh[b9]; gO !== ai;) gO = oh[b9 = gO];
								oh[b9] = abN
							}
						}
					}()
			}
		}) : function() {
			var a4j = bK.a4j;
			for (ab1 = a4j; ab1 < bK.g6; ab1++) ab3();
			for (ab1 = bK.j9 ? bK.gd : 0; ab1 < a4j; ab1++)
				if (! function() {
						var spawningData = bK.data.spawningData,
							z9 = spawningData[2 * ab1] + 1,
							spawningData = spawningData[2 * ab1 + 1] + 1;
						if (3 < z9 && z9 < t.u - 5 && 3 < spawningData && spawningData < t.v - 5 && x.z3(x.y(z9, spawningData)) && function(z9, zA) {
								var o4, abW, abV;
								for (abV = zA; zA - 6 < abV; abV--)
									for (abW = z9; z9 - 6 < abW; abW--)
										if (o4 = x.y(abW, abV), x.aFD(o4)) return;
								return 1
							}(z9 + 3, spawningData + 3)) return ab8(z9 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!ab7()) {
						for (var pW = bK.aWu = ab1; pW < a4j; pW++) ab1 = pW, ab3();
						return
					}
					var z9 = aay + uj * aax + je.kI(aax, 2),
						zA = aaz + uk * aax + je.kI(aax, 2);
					ab8(z9, zA)
				}
		})(), jB.jC[7] = fL.ge[bK.bL]
	}, this.j6 = function(mV, nz, ny) {
		var ai, z9, zA, o4, uj, uk;
		for (ab1 = mV, ai = 0; ai < 20; ai++)
			for (z9 = nz + ai; nz - ai <= z9; z9--)
				for (zA = ny + ai; ny - ai <= zA; zA--)
					if ((z9 === nz + ai || z9 === nz - ai || zA === ny + ai || zA === ny - ai) && 3 < z9 && z9 < t.u - 5 && 3 < zA && zA < t.v - 5 && x.z3(x.y(z9, zA)) && function(z9, zA) {
							var o4, abW, abV;
							for (abV = zA; zA - 6 < abV; abV--)
								for (abW = z9; z9 - 6 < abW; abW--)
									if (o4 = x.y(abW, abV), x.aFD(o4) && !x.aQU(ab1, o4)) return;
							return 1
						}(z9 + 3, zA + 3)) {
						if (0 < fL.ge[ab1]) {
							for (uk = uj = o4 = void 0, uj = fL.jK[ab1]; uj >= fL.jI[ab1]; uj--)
								for (uk = fL.jL[ab1]; uk >= fL.jJ[ab1]; uk--) o4 = 4 * (uk * t.u + uj), x.ys(ab1, o4) && (x.aMM(o4), fL.ge[ab1]--);
							ab3()
						}
						return abX(z9 - 1, zA - 1), !0
					} return !1
	}, this.jA = function(mV) {
		ab1 = mV, ab7() ? ab8(aay + uj * aax + je.kI(aax, 2), aaz + uk * aax + je.kI(aax, 2)) : ab3()
	}
}

function aVc() {
	var hZ, lt, abc, abd = ["wss://", "/s50/", "/s51/", "/s52/"],
		abe = 0;

	function aVd() {
		bM.aZ.aVd(hZ, lt)
	}

	function abi(aH) {
		bM.a5n.aEi(hZ, new Uint8Array(aH.data))
	}

	function abj() {}

	function aVh(aH) {
		bM.aZ.aVh(hZ, aH)
	}
	this.q = function(a8, abf) {
		hZ = a8, lt = abf, a8 = hd.qY ? "ws://localhost:" + (7130 + hZ) + "/" : abd[0] + bM.aZ.aVU[hZ] + abd[1 + hd.qZ], (abc = new WebSocket(a8)).binaryType = "arraybuffer", abc.onopen = aVd, abc.onmessage = abi, abc.onclose = aVh, abc.onerror =
			abj
	}, this.abh = function() {
		return abc.readyState === abc.CONNECTING
	}, this.aI4 = function() {
		return abc.readyState === abc.OPEN
	}, this.aVY = function() {
		return abe
	}, this.vL = function() {
		abe = 1
	}, this.aVa = function() {
		return this.abh() || this.aI4()
	}, this.aVb = function(abf) {
		lt = abf
	}, this.vI = function() {
		return lt
	}, this.send = function(hl) {
		this.aI4() && abc.send(hl)
	}, this.close = function(aVe) {
		this.aVa() && (abc.close(aVe), this.aw())
	}, this.aw = function() {
		abc.onopen = null, abc.onmessage = null, abc.onclose = null, abc.onerror = null
	}
}

function aLV() {
	this.id = 0, this.jl = 0, this.n5 = null, this.n6 = null, this.aUd = null, this.n7 = null, this.bB = new n1, this.q = function() {
		var self, jl;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (jl = Android.getVersion()) < 12 || (self.jl = jl, self.id = 1, self.n6 = Android),
			function(self) {
				var jl;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aUd = mwIOSdataX, self.n7 = window.webkit.messageHandlers.iosCommandA, jl = self
					.aUd.version, self.jl = jl ? Number(jl) : 0)
			}(this),
			function(self) {
				var n5;
				try {
					if (!(n5 = window.localStorage)) return;
					n5.setItem("tls7", "1"), n5.removeItem("tls7")
				} catch (error) {
					return
				}
				self.n5 = n5
			}(this)
	}
}

function eV() {
	function abn(kR, a6G, a6I) {
		for (var af = Math.min(a6G, a6I), dj = Math.max(a6G, a6I), s = af + 1; s < dj; s++)
			if (!x.kV(hQ.a3g(kR, s))) return;
		return 1
	}

	function abo(kS, a6F, a6H) {
		for (var af = Math.min(a6F, a6H), dj = Math.max(a6F, a6H), r = af + 1; r < dj; r++)
			if (!x.kV(hQ.a3g(r, kS))) return;
		return 1
	}

	function abp(a6F, a6G, a6H, a6I, xd, xe) {
		for (var ae = Math.min(Math.abs(a6H - a6F), Math.abs(a6I - a6G)), dn = Math.sign(a6H - a6F), dp = Math.sign(a6I - a6G), ai = 0; ai < ae; ai++)
			if (!x.kV(hQ.a3g(a6F += dn, a6G += dp))) return null;
		return a6F === a6H ? abn(a6F, a6G, a6I) ? new Uint32Array([xd, hQ.kU(a6F, a6G), xe]) : null : abo(a6G, a6F, a6H) ? new Uint32Array([xd, hQ.kU(a6F, a6G), xe]) : null
	}
	this.a47 = function(xd, xe) {
		xd = function(xd, xe) {
			var a6F = hQ.j7(xd),
				a6G = hQ.j8(xd),
				a6H = hQ.j7(xe),
				a6I = hQ.j8(xe);
			if (a6F === a6H) {
				if (abn(a6F, a6G, a6I)) return new Uint32Array([xd, xe])
			} else {
				if (a6G !== a6I) return abp(a6F, a6G, a6H, a6I, xd, xe) || abp(a6H, a6I, a6F, a6G, xd, xe);
				if (abo(a6G, a6F, a6H)) return new Uint32Array([xd, xe])
			}
			return null
		}(xd, xe);
		return null === xd ? -1 : h4.ec.tT(xd)
	}
}

function aS5() {
	var lq, lr, ii;
	this.show = function() {
		lq.show(), this.resize()
	}, this.aw = function() {
		lq.aw()
	}, this.resize = function() {
		lq.resize(), lr.resize()
	}, this.ix = function(iJ) {
		2 === iJ && lq.iy[0].iB()
	}, lq = new iU(L(215), [new aM("⬅️ " + L(10), function() {
		ax.ic()
	})]), lr = new iW(lq.iX, ((ii = []).push(function() {
		function aI5() {
			aP1.button.textContent = L(285), abt.aH.readOnly = !1, abu.aH.readOnly = !1, aI3.aN(1), aI3.button.style.color = aJ.eA
		}
		var hW = new il,
			abr = (hW.jd("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", hW.im(L(524)), new a7({
				value: bz.c0.data[105].value,
				a8: -1
			})),
			abt = (abr.aH.readOnly = !0, hW.ir(abr), hW.im(L(203), "0.8em"), new a7(bz.c0.data[148], 0, void 0, function(aH) {
				aI2(bz.c0.data[149].value, aH.target.value)
			})),
			abu = (hW.ir(abt), hW.im(L(207), "0.8em"), new a7(bz.c0.data[149], 1, void 0, function(aH) {
				aI2(aH.target.value, bz.c0.data[148].value)
			})),
			aP1 = (hW.ir(abu), new aM(L(285), function(aH) {
				return aH.textContent === L(285) ? (aH.textContent = L(286), abt.aH.readOnly = !0, abu.aH.readOnly = !0, aI3.aN(0), aI3.button.style.color = aJ.iD, bz.cG.cH(149, abu.aH.value), aI2(bz.c0.data[149].value, bz.c0
					.data[148].value)) : aI5(), !0
			})),
			aI3 = (hW.ir(new m4([aP1.button])), new aM(L(1), function(aH) {
				return abt.aH.readOnly && bM.aZ.aI4(0) && (aR.az.aCt(aH), aI5(), bM.qu.a7H({
					ux: 0,
					d8: bz.c0.data[148].value,
					value: parseInt(bz.c0.data[149].value, 10)
				})), !0
			}, 1)),
			v2 = hW.m5(),
			aI2 = (hW.m5(L(525)).style.fontWeight = "bold", function(er, en) {
				v2.innerHTML = ax.aZ.aI6(er, bz.c0.data[105].value, en)
			});
		return hW.ir(new m4([aI3.button])), aI2(bz.c0.data[149].value, bz.c0.data[148].value), hW
	}()), ii))
}

function aLY() {
	this.a52 = null, this.dw = !1, this.bv = 0, this.vr = 56;
	var abv = 0;

	function abw() {
		bu.bv = abv = performance.now(), bu.a52.fA(), window.requestAnimationFrame(abw)
	}
	this.q = function() {
		this.aWz(), window.requestAnimationFrame(abw), this.bv = performance.now()
	}, this.aWv = function() {
		bK.bY ? (this.a52 = new a54, this.a52.q()) : bK.bX ? this.a52 = new vo : (this.a52 = new aOG, this.a52.q())
	}, this.aWz = function() {
		this.a52 = new aab, this.dw = !0
	}, this.fA = function() {
		this.a52.vp++
	}, this.gE = function() {
		return this.a52.vp
	}, this.aEl = function() {
		var gj = performance.now();
		gj < abv + 1e3 || (this.bv = gj, this.a52.fA())
	}
}
aJa(), self.aiCommand746 = function(er) {
	0 === er ? aKv() : 1 !== er || !bA || 1 !== bA.id || bA.jl < 14 || gr.a0B()
}, setTimeout(aKv, 1e4), window.onload = function() {
	aKv()
};