var q6, fH, fD, zD, dO, a3M, a3N, a1z, a20, eG, cr, kj, oQ, a22, gQ, gF, a1x, aI0, gZ, dG, ew, rf, hp, a21, gM, dM, u5, m1, kZ, gO, gT, a2J, eC, eW, l5, fK, iH, m9, fm, f4, aI1, a1n, fo, aBN, f8, i7, a1m, fN, a1t, jW, a0y, a1v, aI2, gS, iZ, aCg, cy,
	fj, ph, f, iJ, aI3, aI4, a24, a25, a75, a26, a27, a8, i2, tq, aV, dZ, ka, c, a3, w, o, bG, a4R, jC, l0, aQ, aj, am, gx, gX, aI5, kQ, aS, aI6, d7, tX, a1w, aI7, aDA, tT, a2O, a15, gb, cz, gK, re, bV, fF, dA, cT, pW, r, d0, ec, aI8, aI9, or, rg,
	kF, a1l, i0, iE, vK, a3s, a3r, a3t, a49, a47, a3f, a3v, aQE, a4D, aQF, aQG, aQH, a3p, hY, hZ, ha, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex",
		"hidden", "span", "1em", "0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "middle", "break-word", "Escape",
		"50%", "0.6em", "underline", "text", "scroll", "pointer", "bold", "Value", "Player ", "Enter", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave",
		"keydown", "inline-block", "game.territorial.io", "focus", "fixed", "button", "blur", "aria-label", "Space", "Reload", "Redacted ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "⚠️ ", "wheel", "true", "translate(-50%, -50%)", "top", "tls7", "system-ui", "style", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "aria-pressed", "arena", "account",
		"accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui",
		"@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x",
		"-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
	];

function a() {
	this.b = function() {
		c.d(39), c.e(1, 0), c.e(6, 16), f.g.h(), f.i.send(0, c.j)
	}, this.k = function(l) {
		c.d(127), c.e(1, 0), c.e(6, 17), o.p.q(r.buffer.data[105].value, 5), o.p.q(r.buffer.data[106].value, 15), f.i.send(l, c.j)
	}, this.n = function() {
		c.d(97), c.e(1, 0), c.e(6, 18), o.p.q(r.buffer.data[110].value, 15), f.i.send(0, c.j)
	}, this.s = function(t) {
		var u = t.v.length;
		c.d(21 + 16 * u), c.e(1, 0), c.e(6, 29), c.e(6, t.action), c.e(8, u), w.x.y(t.v), f.i.send(0, c.j)
	}, this.z = function(a0, colors, a1, a2) {
		a3.a4(), a3.e(1, 0), a3.e(6, 16), a3.e(20, Math.min(a0, 1e6));
		for (var a5 = 0; a5 < 11; a5++)
			for (var a6 = 0; a6 < 3; a6++) a3.e(8, colors[a5][a6]);
		a0 = a8.data.a9(a1.trim());
		a3.e(8, -1 === a0 ? 255 : a0), w.aA.aB(a2.trim().substring(0, 180), 8, a3), f.i.send(0, a3.aC())
	}, this.aD = function(data) {
		c.d(43), c.e(1, 0), c.e(6, 25), c.e(6, data.action), o.p.q(data.aE, 5), f.i.send(0, c.j)
	}, this.aF = function(data) {
		c.d(75), c.e(1, 0), c.e(6, 27), c.e(6, data.action), o.p.q(data.aE, 5), c.aG(32, data.value), f.i.send(0, c.j)
	}
}

function aH() {
	this.aI = 32, this.aJ = 0, this.aK = 0, this.aL = 0, this.aM = 0, this.aN = 4, this.aO = null, this.aP = new Int16Array(9), this.a4 = function() {
		this.aL = 1 + aQ.aR(aS.aT - 1, this.aI), this.aM = 1 + aQ.aR(aS.aU - 1, this.aI), this.aO = new Array(this.aL * this.aM), aV.aW.aX(this.aO);
		var aJ, aK, aP = this.aP,
			aZ = this.aL;
		for (aJ = -1; aJ <= 1; aJ++)
			for (aK = -1; aK <= 1; aK++) aP[3 * (1 + aK) + 1 + aJ] = aK * aZ + aJ
	}, this.aa = function(ab, a5) {
		return this.aO[a5].push(ab), this.aO[a5].length - 1
	}, this.ac = function(ad, ae, af) {
		var ag, ah, ae = aj.ak(ae),
			af = aj.ak(af);
		return ae === af ? ad : (ag = this.aO[ae].pop(), this.aO[ae].length === ad ? this.aa(ag, af) : (ah = this.aO[ae][ad], this.aO[ae][ad] = ag, am.i.an[ag] = ad, this.aa(ah, af)))
	}
}

function ao() {
	this.ap = [], this.aq = [], this.a4 = function() {
		this.ap = [], this.aq = []
	}, this.ar = function() {
		0 <= this.ap.length && this.at(this.ap), 0 <= this.aq.length && this.at(this.aq)
	}, this.at = function(au) {
		for (var av = -1, a5 = au.length - 1; 0 <= a5; a5--)
			if (au[a5].aw--, au[a5].aw <= 0) {
				av = a5;
				break
			} for (a5 = av; 0 <= a5; a5--) au.shift()
	}, this.ax = function(id, ay, az) {
		return this.b0(this.ap, id, ay, az)
	}, this.b1 = function(id, ay, az) {
		return this.b0(this.aq, id, ay, az)
	}, this.b0 = function(au, id, ay, az) {
		return ! function(au, id, ay) {
			var a5, b4;
			for (a5 = ay.length - 1; 0 <= a5; a5--)
				for (b4 = au.length - 1; 0 <= b4; b4--)
					if (au[b4].player === ay[a5] && id === au[b4].id) return 1;
			return
		}(au, id, ay) && (az && function(au, id, ay) {
			var a5;
			for (a5 = ay.length - 1; 0 <= a5; a5--) au.push({
				player: ay[a5],
				id: id,
				aw: 384
			})
		}(au, id, ay), !0)
	}
}

function b5() {
	var aZ, b6, b7;

	function bi(bj, ba, bg, bE, bb) {
		ba = bh(bj, ba + 1 + 2 * bE & 3);
		! function(bj, bk) {
			return 1 < Math.abs(bj % aZ - bk % aZ) || 1 < Math.abs(bn(bj) - bn(bk))
		}(bj, ba) && 0 === bb[ba << 2] && (bb[ba << 2] = bg)
	}

	function bn(bB) {
		return Math.floor((bB + .5) / aZ) % b6
	}

	function bh(bB, ba) {
		return bB + b7[ba]
	}
	this.b8 = function(v) {
		var a5, b9, u, bC, bF = bG;
		for (o.p.bH(o.p.bI(v)), aS.bJ.bK[aS.bL].aZ = aS.aT = aZ = bF.bM(12), aS.bJ.bK[aS.bL].b6 = aS.aU = b6 = bF.bM(12), b7 = [-aZ, -1, aZ, 1], aS.bX = document.createElement("canvas"), aS.bX.width = aS.aT, aS.bX.height = aS.aU, aS.bR = aS.bX
			.getContext("2d", {
				alpha: !1
			}), aS.bS = aS.bY = null, aS.bS = aS.bR.getImageData(0, 0, aS.aT, aS.aU), aS.bY = aS.bS.data, aV.aW.bZ(aS.bY), u = bF.bM(12), b9 = bF.bM(5), bC = bO(aZ * b6 - 1), a5 = 0; a5 < u; a5++) ! function(bA, bB, bD, bE) {
			var a5, ba, bF = bG,
				bb = aS.bY,
				bc = bB,
				bd = bB,
				be = 0,
				bf = 1 + bD,
				bg = 2 - bD;
			for (bb[bB << 2] = bf, a5 = 0; a5 < bA; a5++) ba = bF.bM(2), bB = bh(bB, ba), bb[bB << 2] === bf ? be % 2 == 1 && bi(bd, be + 2 * bE + 3, bg, bE, bb) : bb[bB << 2] = bf, bi(bB, ba, bg, bE, bb), bi(bd, ba, bg, bE, bb), bd = bB,
				be = ba;
			bh(bB, 0) === bc ? (bi(bB, 0, bg, bE, bb), bi(bc, 0, bg, bE, bb)) : bh(bB, 1) === bc && (bi(bB, 0, bg, bE, bb), bi(bc, 2, bg, bE, bb));
			0 === bA && (bi(bc, 0, bg, bE, bb), bi(bc, 2, bg, bE, bb))
		}(bF.bM(b9), bF.bM(bC), 1 === bF.bM(1), 1 === bF.bM(1));
		var aJ, aK, b4, bo, bp, bq, bb = aS.bY,
			br = !0,
			bs = aS.bJ.bK[aS.bL].bs,
			bt = aS.bJ.bK[aS.bL].bt;
		for (aK = 0; aK < b6; aK++)
			for (bo = !0, bp = br, aJ = bq = 0; aJ < aZ; aJ++) b4 = 4 * aK * aZ + 4 * aJ, bq <= aJ && 0 < bb[b4] && (bp = 2 === bb[b4], bo) && (bo = !1, bp !== br) ? (br = bp, bq = aJ + 1, aJ = -1) : (bp ? (bb[b4] = bt[0], bb[1 + b4] = bt[1], bb[
				2 + b4] = bt[2]) : (bb[b4] = bs[0], bb[1 + b4] = bs[1], bb[2 + b4] = bs[2]), bb[3 + b4] = 255);
		aS.bR.putImageData(aS.bS, 0, 0), aS.bT = !0, aS.bU.a4(), bV.bW = !0
	}
}

function bu() {
	this.bv = new bw, this.bx = new by, this.i = new bz, this.aO = new aH, this.c0 = new c1, this.c2 = new c3, this.c4 = new c5, this.c6 = new c7, this.c8 = new c9, this.cA = new cB, this.cC = new cD, this.cE = new cF, this.cG = new cH, this.cI =
		new cJ, this.cK = new cL, this.cM = new cN, this.cO = new cP, this.a4 = function() {
			this.cG.a4(), this.bx.a4(), this.i.a4(), this.aO.a4(), this.c0.a4(), this.cA.a4(), this.cM.a4()
		}, this.cQ = function() {
			this.cA.cQ(), this.bx.cQ()
		}
}

function cR() {
	this.cS = function() {
		return cT.cU.cV() ? 2 : 1
	}
}

function cW() {
	this.cX = function(cY, ai, al) {
		c.d(75), c.e(1, 0), c.e(6, 21), c.e(6, cY), c.e(1, +(ai < 0)), c.e(1, +(al < 0)), c.e(30, Math.abs(ai)), c.e(30, Math.abs(al)), f.i.send(0, c.j)
	}, this.cZ = function(cY, ca, cb) {
		c.d(18 + 16 * ca.length + 30), c.e(1, 0), c.e(6, 22), c.e(6, cY), f.g.cc(ca), c.e(30, cb), f.i.send(0, c.j)
	}, this.cd = function(cY, ca, cb) {
		c.d(73), c.e(1, 0), c.e(6, 28), c.e(6, cY), o.p.q(ca, 5), c.e(30, cb), f.i.send(0, c.j)
	}, this.ce = function(cf, cg) {
		for (var u = cg.length, ch = 0, a5 = 0; a5 < u; a5++) ch += cg[a5].length;
		for (c.d(21 + 3 * u + 16 * ch), c.e(1, 0), c.e(6, 23), c.e(3, cf), c.e(4, u), c.e(7, ch), a5 = 0; a5 < u; a5++) c.e(3, cg[a5].length), w.x.y(cg[a5]);
		f.i.send(0, c.j)
	}, this.ci = function(cf, ai, al) {
		c.d(52), c.e(1, 0), c.e(6, 24), c.e(3, cf), c.e(1, +(ai < 0)), c.e(1, +(al < 0)), c.e(20, Math.abs(ai)), c.e(20, Math.abs(al)), f.i.send(0, c.j)
	}
}

function cj() {
	var canvas, ck, cl, font, cm = 0,
		cn = !1,
		co = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		cp = 5;

	function dQ() {
		if (cn) {
			var a5, u = co.length,
				di = Math.floor(.5 * cl.b6),
				b6 = u * di,
				aJ = Math.floor(Math.floor(cl.aJ) + .3 * cl.aZ - .5),
				aK = Math.floor(Math.floor(cl.aK) - b6),
				aZ = Math.floor(.4 * cl.aZ + 2.5);
			for (dO.fillStyle = dZ.da, dO.fillRect(aJ, aK, aZ, b6), dO.fillStyle = dZ.db, dO.fillRect(aJ, aK + cp * di, aZ, di), dO.fillStyle = dZ.dc, dO.fillRect(aJ, aK, 2, b6), dO.fillRect(aJ, aK, aZ, 2), dO.fillRect(aJ + aZ - 2, aK, 2, b6), a5 =
				1; a5 < u; a5++) dO.fillRect(aJ, aK + a5 * di, aZ, 2);
			for (dO.fillStyle = dZ.dc, aV.d1.textAlign(dO, 1), aV.d1.textBaseline(dO, 1), dO.font = aV.d1.d2(0, .6 * di), aJ += .5 * aZ, a5 = 0; a5 < u; a5++) dO.fillText(dd(a5), aJ, aK + (a5 + .6) * di)
		}
		dO.drawImage(canvas, Math.floor(cl.aJ), Math.floor(cl.aK))
	}

	function d3(dS) {
		var aJ, dg, dh, di;
		ck.clearRect(0, 0, Math.floor(cl.aZ), Math.floor(cl.b6)), ck.fillStyle = dZ.da, ck.fillRect(0, 0, Math.floor(cl.aZ), Math.floor(cl.b6)), cr.d9 && (ck.fillStyle = dZ.db, ck.fillRect(0, 0, Math.floor(.3 * cl.aZ), Math.floor(cl.b6))), ck
			.fillStyle = dZ.dc, ck.fillText("Hide UI", .15 * cl.aZ, .5 * cl.b6), ck.fillRect(Math.floor(.3 * cl.aZ - .5), 0, 2, Math.floor(cl.b6)), aJ = .5 * cl.aZ, ck.fillText("Replay Speed", aJ, .31 * cl.b6), ck.fillText(dd(cp), aJ, .69 * cl.b6),
			ck.fillRect(Math.floor(.7 * cl.aZ - .5), 0, 2, Math.floor(cl.b6)), dS.cq ? (aJ = Math.floor(.02 * cl.aZ), dS = Math.floor(.025 * cl.aZ), dg = Math.floor(.85 * cl.aZ - aJ - .5 * dS), dh = Math.floor(.25 * cl.b6), di = Math.floor(cl.b6) -
				2 * dh, ck.fillRect(dg, dh, aJ, di), ck.fillRect(dg + aJ + dS, dh, aJ, di)) : function() {
				var aZ = Math.floor(.46 * cl.b6),
					b6 = Math.floor(.23 * cl.b6),
					aJ = Math.floor(.85 * cl.aZ - .5 * aZ + aZ / 12),
					aK = Math.floor(.5 * cl.b6 - b6);
				ck.beginPath(), ck.moveTo(aJ, aK), ck.lineTo(aJ + aZ, aK + b6), ck.lineTo(aJ, aK + (b6 << 1)), ck.fill()
			}(), ck.fillRect(0, 0, Math.floor(cl.aZ), 2), ck.fillRect(0, 0, 2, Math.floor(cl.b6)), ck.fillRect(0, Math.floor(cl.b6) - 2, Math.floor(cl.aZ), 2), ck.fillRect(Math.floor(cl.aZ - 2), 0, 2, Math.floor(cl.b6))
	}

	function dd(a5) {
		return 5 === a5 ? "Normal" : "" + co[a5]
	}
	this.cq = !1, this.a4 = function() {
		cr.cs && (cp = 5, this.cq = !1, cn = !1, cl = new ct([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.cu = function() {
		return co[cp]
	}, this.cv = function() {
		return cl.aK
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.cq,
		fxGetSpeedIndex: () => cp,
		fxSetSpeedIndex: index => {
			cp = index, this.resize()
		},
		fxGetPanelTop: () => cl && cl.aK
	}, this.cw = function(cx) {
		return !!cr.cs && cl.aJ + cl.aZ > cy.aZ - cx - cz.gap
	}, this.resize = function() {
		cr.cs && (cl.resize(), cl.aK -= (d0.cS() - 1) * cz.gap, font = aV.d1.d2(0, .3 * cl.b6), (canvas = document.createElement("canvas")).width = Math.floor(cl.aZ), canvas.height = Math.floor(cl.b6), (ck = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aV.d1.textAlign(ck, 1), aV.d1.textBaseline(ck, 1), d3(this))
	}, this.d4 = function(d5) {
		0 === cr.d6 || d7.d8() || d5 !== cr.d9 && (cr.d9 = d5, dA.resize(), bV.bW = !0, cr.cs) && (cm = bV.aw + 2e3, d3(this))
	}, this.dB = function(aJ, aK) {
		if (!cr.cs) return !1;
		if (aJ < cl.aJ || aK < cl.aK || aJ > cl.aJ + cl.aZ) return cn && function(dS, aJ, aK) {
			var u = co.length,
				di = Math.floor(.5 * cl.b6),
				b6 = u * di,
				dg = Math.floor(Math.floor(cl.aJ) + .3 * cl.aZ - .5),
				b6 = Math.floor(Math.floor(cl.aK) - b6),
				aZ = Math.floor(.4 * cl.aZ + 2.5);
			return cn = !1, bV.bW = !0, aJ < dg || dg + aZ < aJ || aK < b6 || (cp = dP(0, Math.floor((aK - b6) / di), u - 1), d3(dS)), !0
		}(this, aJ, aK);
		if ((aJ -= cl.aJ) < .3 * cl.aZ) cn = !1, this.d4(!cr.d9);
		else {
			if (aJ < .7 * cl.aZ) return cn = !cn, bV.bW = !0;
			this.dD(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.dD(!0), this.dD = function(dE) {
		2 === cr.d6 ? (this.d4(!1), d7.dF(3)) : (cn = !1, this.cq = !this.cq, this.cq ? (dG.dH && dG.dI(), cT.cU.setState(1)) : dE || dG.dJ(), bV.bW = !0, d3(this))
	}, this.dK = function() {
		this.cq = !1, dG.dJ(), bV.bW = !0, d3(this)
	}, this.dL = function(aJ, aK) {
		return !!cr.d9 && (0 <= dG.dB(aJ, aK) || (cr.cs ? ((bV.aw > cm || !this.dB(aJ, aK)) && dM.dB(aJ, aK), bV.bW = !0, cm = bV.aw + 2e3) : dM.dB(aJ, aK)), !0)
	}, this.ar = function() {
		cr.cs && cr.d9 && bV.aw > cm - 1e3 && bV.aw < cm && (bV.bW = !0)
	}, this.dN = function() {
		cr.cs && (this.cq = !1, bV.bW = !0, d3(this))
	}, this.cQ = function() {
		if (cr.cs) {
			if (cr.d9) {
				if (bV.aw > cm) return;
				if (cm - 1e3 < bV.aw) return dO.globalAlpha = dP(0, (1e3 - (bV.aw - (cm - 1e3))) / 1e3, 1), dQ(), void(dO.globalAlpha = 1)
			}
			dQ()
		}
	}
}

function dj() {
	var dk = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.dl = function(aw) {
		var dn, v = new Date(aw.getTime() - 6e4 * aw.getTimezoneOffset()).toUTCString();
		return v.length < 12 || (v = v.substring(5, v.length), 0 === (aw = aw.getTimezoneOffset())) ? v : (dn = (aw < 0 ? "+" : "-") + aQ.aR(Math.abs(aw), 60), 0 == (aw = Math.abs(aw) % 60) ? v + dn : v + dn + ":" + (aw < 10 ? "0" : "") + aw)
	}, this.dq = function(aw) {
		var v = aw.toUTCString();
		return v.length < 12 ? v : function(aw) {
			return dk[aw.getUTCDay()]
		}(aw) + ", " + v.substring(5, v.length - 4)
	}
}

function ds() {
	var dx, dy;
	this.dt = 4, this.du = null, this.dv = 0, this.dw = 0;

	function eE() {
		return 0 === eC.eF ? eG.eH ? 1 : 0 : eC.eF - 1
	}

	function eN(l, eL, eM) {
		dy[l].e0 = !0, e7(l), dx[l] = new eR, dx[l].a4(l, eL, eM)
	}

	function eO(a5) {
		return dy[a5].e0 && dx[a5].eO()
	}

	function e7(l) {
		dy[l].aw = bV.aw, dy[l].e1 = !1
	}
	this.a4 = function() {
		this.du = new Array(this.dt), this.du[0] = "territorial.io", this.du[1] = "1.territorial.io", this.du[2] = "4.territorial.io", this.du[3] = "5.territorial.io", dx = new Array(this.dt), dy = new Array(this.dt);
		for (var a5 = this.dt - 1; 0 <= a5; a5--) dy[a5] = {
			e0: !1,
			aw: 0,
			e1: !1
		};
		this.e2(0, 0, 0)
	}, this.e3 = function(a5) {
		return dx[a5]
	}, this.ar = function() {
		for (var a5 = this.dt - 1; 0 <= a5; a5--) this.e4(a5) && bV.aw > dy[a5].aw + 15e3 && (f.e5.e6(a5, dy[a5].e1), e7(a5));
		!this.e4(0) && bV.aw > dy[0].aw + 8e3 && (dy[0].aw = bV.aw, this.e2(0, 0, 0))
	}, this.e8 = function(id) {
		return this.e2(0, id, 0) && this.e9(0)
	}, this.eA = function(eB) {
		return eB ? eC.eD : eE()
	}, this.eI = function() {
		return eE() ? "game.territorial.io" : "territorial.io"
	}, this.eJ = function(eK) {
		eK = this.eI() + eK;
		return "<a href='https://" + eK + "' target='_blank'>" + eK + "</a>"
	}, this.e2 = function(l, eL, eB) {
		eB = this.eA(eB);
		if (dy[l].e0) {
			if (dx[l].eO()) return dx[l].eP(eL), dx[l].e4();
			dx[l].eQ()
		}
		return eN(l, eL, eB), !1
	}, this.eS = function(l, eL) {
		console.log("Connection to Server " + l), f.g.eT(l)
	}, this.e9 = function(a5) {
		return this.e4(a5) && dx[a5].e9()
	}, this.eU = function(a5) {
		dx[a5].eU()
	}, this.e4 = function(a5) {
		return dy[a5].e0 && dx[a5].e4()
	}, this.send = function(l, j) {
		0 !== l && e7(l), dx[l].send(j)
	}, __fx.customLobby.setSendFunction(this.send), this.eV = function(l) {
		8 === eW.eX() && (dy[l].e1 = !0, f.eY.eZ = !0)
	}, this.close = function(l, ea) {
		eO(l) && dx[l].close(ea)
	}, this.eb = function(l, ea) {
		ec.ed(ea), eO(l) && dx[l].close(ea)
	}, this.ee = function(ea) {
		for (var a5 = this.dt - 1; 0 <= a5; a5--) this.close(a5, ea)
	}, this.ef = function(l, ea) {
		for (var a5 = this.dt - 1; 0 <= a5; a5--) a5 !== l && this.close(a5, ea)
	}, this.eg = function() {
		0 === this.dv && (cr.eh || cr.cs) || this.close(this.dv, 3246)
	}, this.ei = function(l, ej) {
		dx[l].eQ(), ec.ek(l, ej.code)
	}
}

function el() {
	var em;
	this.a4 = function() {
		em = !1
	}, this.ar = function() {
		var bB;
		if (function() {
				if (!em) {
					if (bV.es() % 30 != 9) return;
					if (!aV.et.eu(90)) return;
					em = !0
				}
				return 1
			}() && (! function() {
				var ev = ew.ex(956);
				if (ev) {
					if (aV.et.ey(ev.player)) return 1;
					ew.ez(956, 0)
				}
				return
			}() && (-1 === (bB = (cr.f0 ? function() {
				var id = dA.fE(),
					u = f8.f9;
				if (fF.fG[id])
					for (var ay = f8.fB, fI = fF.fI, a5 = 0; a5 < u; a5++) {
						var bB = ay[a5];
						if (fI[bB] !== id) return bB
					} else if (1 < u) return fH[u - 1];
				return -1
			} : function() {
				for (var f7 = f8.f9, fA = f8.fB, fC = fD, a5 = 0; a5 < f7; a5++) {
					var bB = fA[a5];
					if (0 !== fC[bB]) return bB
				}
				return -1
			})()) ? ! function() {
				var ev = ew.ex(957);
				if (ev && ev.fJ) {
					if (fK.fL(ev.fJ.fM << 2)) return 1;
					ew.ez(957, 0)
				}
				return
			}() : (ew.f3(0, L(0, [f4.f5[bB]]), 956, bB, dZ.dc, dZ.f6, -1, !0), 0)))) {
			var u = fN.fO.fP;
			if (0 !== u)
				for (var buffer = fN.fO.buffer, a5 = 0; a5 < u; a5++) {
					var fM = buffer[a5];
					if (fK.fL(fM << 2)) return void ew.f3(0, L(1, [aj.fQ(fM), aj.fR(fM)]), 957, 0, dZ.dc, dZ.f6, -1, !0, void 0, {
						a6: 1,
						fM: fM
					})
				}
		}
	}
}

function fS() {
	var fT;
	this.fU = null, this.fV = 0, this.a4 = function() {
		fT = [], 9 === cr.fW && this.fX()
	}, this.fX = function() {
		this.fU = [0, 0, 0, 0, 0, 0];
		for (var fY = [250, 226, 166, 148, 100, this.fV = 0, 0, 0], fZ = [0, 8, 24, 30, 46, 70, 256, 333], fa = [0, 0, 3, 9, 17, 25, 256, 179], b6 = cr.fb, a5 = 1; a5 < fY.length; a5++)
			if (b6 <= fZ[a5]) {
				this.fV = fY[a5 - 1] - aQ.aR((b6 - fZ[a5 - 1]) * (fY[a5 - 1] - fY[a5]), fZ[a5] - fZ[a5 - 1]), this.fU[5] = fa[a5 - 1] - aQ.aR((b6 - fZ[a5 - 1]) * (fa[a5 - 1] - fa[a5]), fZ[a5] - fZ[a5 - 1]), this.fU[0] = cr.fc - b6 - this.fV -
					this.fU[5];
				break
			} cr.fd = cr.fc - cr.fb, cr.data.numberTeams = (0 < cr.fb) + (0 < cr.fd), cr.data.playerCount = cr.fe = cr.fb + cr.fd, cr.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, cr.fb + this.fV, cr.fd - this.fV]), cr.ff.fg()
	}, this.fh = function(player) {
		fT.push({
			player: player,
			fi: 14 + fj.fk(20)
		})
	}, this.ar = function() {
		if (9 === cr.fW)
			for (var a5 = fT.length - 1; 0 <= a5; a5--) --fT[a5].fi <= 0 && (fm.fn(fT[a5].player, 0, fo.fp.fq + fo.fp.fr), fT.splice(a5, 1))
	}
}

function fs() {
	this.ft = new Array(cr.fc), this.f5 = new Array(cr.fc), this.fu = new Uint8Array(cr.fc), this.fv = new Uint8Array(cr.fc), this.fw = new Uint16Array(cr.fc), this.fx = new Uint16Array(cr.fc), this.fy = new Uint16Array(cr.fc), this.fz =
		new Uint16Array(cr.fc), this.g0 = new Uint32Array(cr.fc), this.g1 = new Uint32Array(cr.fc), this.g2 = new Uint32Array(cr.fc), this.g3 = null, this.g4 = null, this.g5 = null, this.g6 = null, this.g7 = new Uint16Array(cr.fc), this.g8 =
		new Uint16Array(cr.fc), this.g9 = new Uint16Array(cr.fc), this.gA = new Uint16Array(cr.fc), this.gB = new Uint8Array(cr.fc), this.gC = new Uint16Array(cr.fc), this.a4 = function() {
			this.ft.fill(""), this.f5.fill(""), this.fu.fill(0), this.fv.fill(0), this.fw.fill(0), this.fx.fill(0), this.fy.fill(0), this.fz.fill(0), this.g0.fill(0), this.g1.fill(0), this.g2.fill(0), this.g3 = new Array(cr.fc), this.g4 = new Array(
				cr.fc), this.g5 = new Array(cr.fc), this.g6 = new Array(cr.fc), this.g7.fill(0), this.g8.fill(0), this.g9.fill(0), this.gA.fill(0), this.gB.fill(0), this.gC.fill(0)
		}
}

function gD() {
	this.gE = function(player, fM) {
		gF.gG(player, aj.fQ(fM), aj.fR(fM)) && (bV.bW = !0), cr.eh && this.ar()
	}, this.ar = function() {
		cr.gH = !1;
		for (var a5 = 0; a5 < cr.fb; a5++) 0 !== f4.fv[a5] && 0 === f4.g0[a5] && gF.gI(a5);
		0 !== f4.fv[cr.gJ] ? (gK.gL[7] = f4.g0[cr.gJ], gK.gL[8] = f4.g2[cr.gJ], gM.gN(), gO.gP(), cr.cs || gQ.gR(f4.fw[cr.gJ] - 5, f4.fx[cr.gJ] - 5, f4.fy[cr.gJ] + 5, f4.fz[cr.gJ] + 5), gS.a4()) : gT.show(!1, !1, !1, !0), ew.gU(18), fm.gV(), fm
			.gW(!0), gX.i.gY(), gZ.eQ(), cr.ga = null, gb.gc = !0, gb.gd(), cr.eh && cT.cU.setState(1)
	}
}

function by() {
	var ge, gf = 8,
		gg = null;

	function gs(bb, fM, go) {
		fM *= 4;
		bb[fM] = 255, bb[1 + fM] = 255, bb[2 + fM] = go, bb[3 + fM] = 255
	}

	function gv(gq, h0) {
		var aJ, aK, h1, fM, h4, h5, gp = gf,
			gr = aV.d1.getImageData(gq, gp, gp),
			bb = gr.data,
			bA = (gp >> 1) - .5,
			h7 = aV.aW.h8(h0, .5);
		for (aV.aW.h9(h0, h7, 300) || aV.aW.hA(h0, 100), aK = 0; aK < gp; aK++)
			for (aJ = 0; aJ < gp; aJ++) h5 = (gp - 1.5) * (gp - 1.5) / 4, bb[fM = 4 * (aK * gp + aJ)] = (h4 = (h1 = (h1 = aJ - bA) * h1 + (h1 = aK - bA) * h1) <= (gp - 4.5) * (gp - 4.5) / 4 ? h7 : h0)[0], bb[1 + fM] = h4[1], bb[2 + fM] = h4[2], bb[
				3 + fM] = h5 < h1 ? 0 : 255;
		gq.putImageData(gr, 0, 0)
	}
	this.a4 = function() {
		var go, gp, gj, gq, gr, bb;
		(ge = ge || new Array(cr.fc)).fill(null), go = 255, gp = gf + 4, gj = aV.d1.bN(gp, gp), gq = aV.d1.getContext(gj, !0), gr = aV.d1.getImageData(gq, gp, gp), gs(bb = gr.data, gp + 1, go), gs(bb, gp + 2, go), gs(bb, 2 * gp + 1, go), gs(bb,
				2 * gp - 3, go), gs(bb, 2 * gp - 2, go), gs(bb, 3 * gp - 2, go), gs(bb, gp * (gp - 3) + 1, go), gs(bb, gp * (gp - 2) + 1, go), gs(bb, gp * (gp - 2) + 2, go), gs(bb, gp * (gp - 2) - 2, go), gs(bb, gp * (gp - 1) - 3, go), gs(bb,
				gp * (gp - 1) - 2, go), gq.putImageData(gr, 0, 0), gg = gj,
			function() {
				if (cr.f0)
					for (var gj = new Array(fF.fG.length), u = cr.fc, gk = ge, gl = fF.gl, a5 = 0; a5 < u; a5++) {
						var gm = gl[a5];
						gj[gm] || (gj[gm] = function(gm) {
							var gj = aV.d1.bN(gf, gf),
								gq = aV.d1.getContext(gj, !0),
								au = gx.gy;
							return au.set(fF.gz[gm]), gv(gq, au), gj
						}(gm)), gk[a5] = gj[gm]
					}
			}()
	}, this.cQ = function() {
		var a5, player, hB, hC, hF, hH, hI, hK, hL, hM = am.i.hM,
			hN = am.i.hN,
			hO = am.i.hO,
			hP = am.i.hP,
			hQ = ge,
			hR = cr.gJ,
			u = am.i.hS,
			hT = cy.aZ,
			hU = cy.b6,
			hV = aS.aT << 4,
			hX = hY,
			gt = hX / gf,
			dg = hZ / hX,
			dh = ha / hX,
			h1 = (hT + hZ) / hX - dg,
			h2 = (hU + ha) / hX - dh,
			gq = dO;
		for (gq.imageSmoothingEnabled = hX < 9, aV.d1.textAlign(gq, 1), aV.d1.textBaseline(gq, 1), a5 = 0; a5 < u; a5++) player = hN[a5] >> 3, hF = hO[a5], hB = .9 + .1 * Math.log10(hF), hC = (hH = hM[a5]) % hV / 16 - hB, hH = hU * (Math.floor(
			hH / hV) / 16 - hB - dh) / h2, hI = -2 * (hL = hX * hB) * (1 + (hK = +(player === hR)) / 8), hK = hK * hL / 4, (hL = hT * (hC - dg) / h1) < hI || hH < hI || hT + hK < hL || hU + hK < hH || (hC = 2 * hB * gt, hI = hB * hX, null ===
			(hK = hQ[player]) && (hQ[player] = hK = function(player) {
				var gj = aV.d1.bN(gf, gf);
				return gv(aV.d1.getContext(gj, !0), fK.gw(player)), gj
			}(player)), player === hR && (gq.setTransform(hC, 0, 0, hC, hL - 2 * hC, hH - 2 * hC), gq.drawImage(gg, 0, 0)), gq.setTransform(hC, 0, 0, hC, hL, hH), gq.drawImage(hK, 0, 0), (hB = Math.floor(function(hF) {
				if (hF < 1e3) return .42;
				if (hF < 1e4) return .34;
				if (hF < 1e6) return .26;
				if (hF < 1e8) return .19;
				return .15
			}(hF) * hI)) < 6) || (gq.setTransform(1, 0, 0, 1, 0, 0), gq.fillStyle = hP[a5] ? dZ.he : dZ.dc, gq.font = aV.d1.d2(1, hB), gq.fillText(aV.hf.hg(hF), hL + hI, hH + hI + .1 * hB));
		gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function hh() {
	var hi = 0,
		hj = 0;
	this.hk = function(aJ, aK) {
		hi = aJ, hj = aK
	}, this.hl = function(code) {
		var hq, hs, fM;
		cr.cs || dG.dH || (aV.et.hm(0) || aV.et.hm(1)) && aV.et.hn(cr.gJ) && (gM.dB(hi, hj) ? gM.ho = !1 : hp.dB(hi, hj) || (hq = aj.hr(hi), hs = aj.ht(hj), fM = aj.hu(hq, hs), aj.hv(hq, hs) && (0 === code ? function(fM) {
			var hz, gt, hX;
			cr.gH ? -1 !== (hz = i0.i1(fM)) && i2.i3.i4(fM) : (gt = aj.i5(fM), fK.i6(gt) ? (hz = i7.i8.i9(gt)) && (hX = aj.i5(hz), hX = fK.fL(hX) ? cr.fc : fK.iA(hX), i2.i3.iB(gM.iC(), hz, hX)) : (hz = i0.iD(fM)) < 0 || (gt = aj
				.i5(hz), fK.fL(gt) ? iE.iF(cr.gJ) ? i2.i3.iG(gM.iC(), cr.fc) : iH.iI(cr.gJ) && iJ.iK(cr.fc, gM.iC()) : (hX = fK.iA(gt), iE.iL(hX, cr.gJ) && (iE.iM(cr.gJ, hX) ? i2.i3.iG(gM.iC(), hX) : iH.iI(cr.gJ) && iJ.iK(
					hX, gM.iC())))))
		}(fM) : 1 === code ? function(fM) {
			am.cE.iN(cr.gJ, fM) && i2.i3.iO(gM.iC(), gx.iP[7])
		}(fM) : 2 === code && function(fM) {
			am.cK.iQ(cr.gJ, fM) && i2.i3.iR(gM.iC())
		}(fM))))
	}, this.iS = function() {
		if (!cr.cs && !dG.dH && aV.et.hm(1)) {
			var bB = cr.gJ;
			if (aV.et.hn(bB)) {
				var u = iH.iI(bB);
				if (u < 1) ! function() {
					var bB = cr.gJ;
					if (iE.iF(bB)) i2.i3.iG(gM.iC(), cr.fc);
					else
						for (var ie = fK.ie, g4 = f4.g4, u = g4[bB].length, ig = Math.floor(Math.random() * u), a5 = 0; a5 < u; a5++)
							for (var ih = 3; 0 <= ih; ih--) {
								var b4 = g4[bB][(a5 + ig) % u] + ie[ih];
								if (fK.ii(b4)) {
									b4 = fK.iA(b4);
									if (b4 !== bB && (!cr.f0 || iE.iL(bB, b4))) return i2.i3.iG(gM.iC(), b4)
								}
							}
				}();
				else {
					for (var iU = 0, hF = iH.iV(bB, 0), a5 = 1; a5 < u; a5++) {
						var iW = iH.iV(bB, a5);
						iW < hF && (hF = iW, iU = a5)
					}
					i2.i3.iG(gM.iC(), iH.iX(bB, iU))
				}
			}
		}
	}, this.iY = function() {
		if (!cr.cs && !dG.dH && aV.et.hn(cr.gJ) && aV.et.hm(1)) return iZ.d8 ? iZ.ia(cr.gJ) ? void i2.i3.ib(1) : void 0 : void(iZ.ic(cr.gJ) && i2.i3.iY())
	}
}

function ik() {
	this.resize = function() {
		var a5, il = document.head.querySelector("style#ss");
		if (il)
			for (a5 = il.sheet.cssRules.length - 1; 0 <= a5; a5--) il.sheet.deleteRule(0);
		else(il = document.createElement("style")).id = "ss", document.head.appendChild(il);
		var cm = "::-webkit-scrollbar",
			im = aV.d1.io(cz.ip),
			gp = aV.d1.io(Math.max(aV.d1.iq(.012), 8));
		try {
			il.sheet.insertRule(cm + "{width:" + gp + ";height:" + gp + ";}", il.sheet.cssRules.length), il.sheet.insertRule(cm + "-thumb{background-color:white;}", il.sheet.cssRules.length), il.sheet.insertRule(cm + "-track{background:" + dZ
				.da + ";}", il.sheet.cssRules.length), il.sheet.insertRule(cm + "-track:horizontal{border-top:" + im + " solid white;}", il.sheet.cssRules.length), il.sheet.insertRule(cm + "-track:vertical{border-left:" + im +
				" solid white;}", il.sheet.cssRules.length), il.sheet.insertRule(cm + "-button{display:none;}", il.sheet.cssRules.length)
		} catch (ej) {
			for (console.log("error 3425: " + ej), a5 = il.sheet.cssRules.length - 1; 0 <= a5; a5--) il.sheet.deleteRule(0)
		}
	}
}

function ir(is, it, iu, iv, iw) {
	var self, ix = document.createElement("button");

	function j5() {
		var jE;
		jC.jD() || (jE = aV.color.jF(iu), !1 !== iv && 0 < jE[0] && jE[0] < 255 && jE[0] === jE[1] && jE[0] === jE[2]) || (128 < jE[0] && 128 < jE[1] && 128 < jE[2] ? ix.style.backgroundColor = aV.color.jG(iu, -50) : ix.style.backgroundColor = aV
			.color.jG(iu, jE[3] && jE[3] < 120 ? 150 : 50))
	}

	function j4() {
		if (iv) {
			var jE = aV.color.jF(iu);
			if (jE[0] === jE[1] && jE[0] === jE[2]) return
		}
		it && ((jE = it(this)) ? 2 === jE && j5() : jI(this))
	}

	function j7() {
		this.style.backgroundColor = iu
	}

	function j6() {
		jI(this)
	}

	function jI(ba) {
		ba.style.backgroundColor = iu, ba.blur()
	}
	this.button = ix, this.iy = it, this.iz = iu, this.j3 = function(j8) {
		j8 = 1.1 - Math.min(.01 * is.length, .6) + .2 * j8;
		ix.style.fontSize = j8.toFixed(1) + "em"
	}, this.j2 = function(jA) {
		jA ? 1 === jA ? jA = dZ.jB : 2 === jA && (iv = 1, jA = dZ.jB) : (iv = 0, jA = dZ.da), this.iz = iu = jA, ix.style.backgroundColor = jA
	}, self = this, ix.innerHTML = is, ix.style.color = iw ? dZ.j1 : dZ.dc, ix.style.userSelect = "none", ix.style.outline = "none", ix.style.overflowWrap = "break-word", self.j2(iu), ix.style.border = "none", ix.style.font = "inherit", self.j3(
		0), ix.style.padding = "0em 0.3em", ix.onclick = j4, ix.addEventListener("mouseover", j5), ix.addEventListener("mouseout", j6), ix.addEventListener("focus", j5), ix.addEventListener("blur", j7)
}

function jJ() {
	function jZ() {
		aS.bU.ar()
	}

	function jl(bB, jk) {
		0 < jk && (aS.bY[bB] += jk, aS.bY[bB + 1] += jk, aS.bY[bB + 2] += jk)
	}

	function jg(bB) {
		return aS.bY[bB + 2] > aS.bY[bB] && aS.bY[bB + 2] > aS.bY[bB + 1]
	}
	this.jK = -1, this.jL = 0, this.jM = 0, this.jN = 8, this.jO = 32, this.jP = 8, this.jQ = 32, this.jR = [0, 0], this.jS = [0, 0, 0, 0], this.aO = null, this.jT = !0, this.jU = !1, this.jV = function() {
		-1 !== this.jK && clearTimeout(this.jK), this.jK = -1, this.aO = null, jW.jX()
	}, this.a4 = function() {
		7 === eW.eX() || this.jU || (this.jT = !0, this.jL = 0, this.jM = 1, this.jR = [aS.bJ.bK[aS.bL].bs[0], aS.bJ.bK[aS.bL].bt[0]], this.jS = [aS.bJ.bK[aS.bL].jY[3], aS.bJ.bK[aS.bL].jY[4], aS.bJ.bK[aS.bL].jY[5], aS.bJ.bK[aS.bL].jY[6]], this
			.jN = aS.bJ.bK[aS.bL].jY[7], this.jO = aS.bJ.bK[aS.bL].jY[8], this.jP = aS.bJ.bK[aS.bL].jY[9], this.jQ = aS.bJ.bK[aS.bL].jY[10], this.jT ? this.jK = setTimeout(jZ, 16) : this.ar())
	}, this.ar = function() {
		if (8 === eW.eX() && gQ.ja()) this.jK = setTimeout(jZ, 16);
		else {
			if (0 === this.jL) {
				var jb = fj.jc();
				if (fj.jd(aS.bJ.bK[aS.bL].jY[2]), jW.d([aS.aT, aS.aU, aS.bJ.bK[aS.bL].jY[0], aS.bJ.bK[aS.bL].jY[1]]), fj.jd(jb), this.aO = jW.je(), this.jL++, this.jT) return void(this.jK = setTimeout(jZ, 16))
			}
			for (var bB, fM, jb = this.jT ? 10 : 1e6, jb = aS.aU - this.jM - 1 < jb ? aS.aU - this.jM - 1 : jb, jf = this.jM + jb, aK = this.jM; aK < jf; aK++)
				for (var aJ = 1; aJ < aS.aT - 1; aJ++) jg(bB = 4 * (fM = aJ + aK * aS.aT)) ? this.jh(bB, fM, 1) : (this.jh(bB, fM, 0), function(aJ, aK, bB) {
					return 1 < aJ && jg(bB - 4) || aJ < aS.aT - 2 && jg(bB + 4) || 1 < aK && jg(bB - 4 * aS.aT) || aK < aS.aU - 2 && jg(bB + 4 * aS.aT)
				}(aJ, aK, bB) && this.jj(aJ, aK));
			this.jM = jf, this.jM >= aS.aU - 1 ? (aS.bR.putImageData(aS.bS, 0, 0, 1, 1, aS.aT - 2, aS.aU - 2), bV.bW = !0, this.jV()) : this.jT && (this.jK = setTimeout(jZ, 16))
		}
	}, this.jh = function(bB, fM, go) {
		jl(bB, Math.floor(this.jR[go] + this.jS[go] * this.aO[fM] / 1e4) - aS.bY[bB])
	}, this.jm = function(bB, jn, jo, go, jS) {
		jl(bB, Math.floor(this.jR[go] + (1 - jn / jo) * jS) - aS.bY[bB])
	}, this.jj = function(jp, jq) {
		for (var bB, jn, jo, jr = jp - this.jO, js = jq - this.jO, jt = jp + this.jO, jf = jq + this.jO, jr = jr < 1 ? 1 : jr, jt = jt > aS.aT - 2 ? aS.aT - 2 : jt, jf = aS.aU - 2 < jf ? aS.aU - 2 : jf, aK = js < 1 ? 1 : js; aK <= jf; aK++)
			for (var aJ = jr; aJ <= jt; aJ++) jg(bB = 4 * (aJ + aK * aS.aT)) ? (jo = this.jN + (this.jO - this.jN) * this.aO[aJ + aS.aT * aK] / 1e4, Math.abs(jp - aJ) > jo || Math.abs(jq - aK) > jo || jo <= (jn = Math.sqrt((jp - aJ) * (jp - aJ) +
				(jq - aK) * (jq - aK))) || this.jm(bB, jn, jo, 1, this.jS[3])) : (jo = this.jP + (this.jQ - this.jP) * this.aO[aJ + aS.aT * aK] / 1e4, Math.abs(jp - aJ) > jo || Math.abs(jq - aK) > jo || jo <= (jn = Math.sqrt((jp - aJ) * (jp -
				aJ) + (jq - aK) * (jq - aK))) || this.jm(bB, jn, jo, 0, this.jS[2]))
	}
}

function ju() {
	this.jv = function() {
		for (var bB, u = f8.f9, ay = f8.fB, gA = f4.gA, jw = this.jx(), a5 = 0; a5 < u; a5++) bB = ay[a5], aV.et.jy(bB) || (gA[bB] = jw);
		var g7 = f4.g7,
			g8 = f4.g8,
			g9 = f4.g9,
			gB = f4.gB,
			u = cr.fb;
		for (a5 = 0; a5 < u; a5++)(0 === gB[a5] || g9[a5] < 1 || 2 * g7[a5] > 3 * (g8[a5] + g9[a5])) && (gA[a5] = 0);
		var jz = 0;
		for (a5 = 0; a5 < u; a5++) jz += 0 < gA[a5];
		return jz
	}, this.jx = function() {
		return Math.min(65535, bV.es())
	}
}

function k0(k1) {
	var k2 = document.createElement("div");
	this.ej = k2, this.k3 = k1, this.resize = function() {
		for (var u = k1.length, a5 = 1; a5 < u; a5++) aV.d1.k4(k1[a5], 4)
	};
	var a5, u = k1.length;
	for (k2.style.width = "100%", k2.style.height = "2.7em", k2.style.marginTop = "0.6em", k2.style.border = "inherit", a5 = 0; a5 < u; a5++) k1[a5].style.verticalAlign = "top", k1[a5].style.width = (100 / u).toFixed(2) + "%", k1[a5].style.height =
		"100%", k1[a5].style.fontSize = "0.75em", k2.appendChild(k1[a5])
}

function k5() {
	var k7 = new Array(1),
		k8 = new Array(1),
		k9 = 20,
		kA = 0,
		kB = !1;

	function kE() {
		k9++, kF.play()
	}
	this.a4 = function() {
		if (!window.document.documentMode) {
			for (var a5 = 0; 0 <= a5; a5--) ! function(a5, src) {
				k8[a5] = 0, k7[a5] = document.createElement("audio"), k7[a5].src = src, k7[a5].setAttribute("preload", "auto"), k7[a5].setAttribute("controls", "none"), k7[a5].style.display = "none", k7[a5].onpause = function() {
					k8[a5] = 1
				}, k7[a5].oncanplaythrough = function() {
					k8[a5] = 0 === k8[a5] ? 1 : k8[a5]
				}, document.body.appendChild(k7[a5])
			}(a5,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			kB = !0
		}
	}, this.kD = function() {
		if (kB) {
			kB = !1;
			for (var a5 = 0; 0 <= a5; a5--) k7[a5].onpause = null, k7[a5].oncanplaythrough = null, d7.removeChild(document.body, k7[a5]), k7[a5] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		kF.play()
	}), this.play = function() {
		if (kB) {
			var kG = performance.now();
			if (kA + 66 < kG)
				for (var a5 = 0; 0 <= a5; a5--)
					if (1 === k8[a5]) return kA = kG, k8[a5] = 2, void k7[a5].play();
			0 < k9 && (k9--, setTimeout(kE, 66))
		}
	}
}

function kH() {
	function kJ() {
		if (2 === cr.d6) return 1;
		iZ.kN(), cr.d6 = 2, cr.kO = cr.kP
	}

	function kL() {
		kQ.kR.kS(), gT.show(1 === cr.kT, !1, 2 === cr.kT), kQ.result.kS(), kQ.kU.ar(), kQ.kV.ar(), kQ.kV.kW(), ew.kX(!0), ew.kY(247), ew.kY(956), ew.kY(957), kZ.gW(!0), gO.gW(!0), iZ.gW(), ka.dN(), cr.cs && bV.kb.kc(), bV.bW = !0, gb.kd(), cT.cU
			.setState(0)
	}
	this.kI = function() {
		kJ() || (cr.kK = 2, kL())
	}, this.kM = function() {
		kJ() || (cr.kK = 1, kL())
	}
}

function ke() {
	var size, c4;
	this.a4 = function() {
		size = cr.fd, c4 = new Uint16Array(cr.fc);
		for (var fb = cr.fb, a5 = cr.fd - 1; 0 <= a5; a5--) c4[a5] = fb + a5
	}, this.ar = function() {
		fN.kf.ar();
		for (var a5 = size - 1; 0 <= a5; a5--)
			if (0 === f4.fv[c4[a5]]) {
				a6 = void 0;
				var a6 = a5;
				size--, c4[a6] = c4[size]
			} else kj.ar(c4[a5])
	}, this.kh = function(bB) {
		c4[size++] = bB
	}
}

function kk() {
	this.eZ = !1, this.ar = function() {
		bV.es() % 250 != 249 || cr.cs || (f.g.kl(+(this.eZ && f4.fv[cr.gJ]), f8.f9 + am.i.hS), this.eZ = !1)
	}
}

function c1() {
	var kn = 32,
		ko = new Array(2);

	function bN(jA) {
		var aJ, aK, fM, h2, h1, gp = kn,
			gj = aV.d1.bN(gp, gp),
			gq = aV.d1.getContext(gj, !0),
			gr = aV.d1.getImageData(gq, gp, gp),
			bb = gr.data,
			bA = (gp >> 1) - .5,
			kq = Math.sqrt(bA * bA);
		for (bb.fill(255), aK = 0; aK < gp; aK++)
			for (aJ = 0; aJ < gp; aJ++) h1 = aJ - bA, h2 = aK - bA, fM = 4 * (aK * gp + aJ), h1 = 714 * (kq - Math.sqrt(h1 * h1 + h2 * h2)) / kq, bb[2 + fM] = jA, bb[3 + fM] = 255 < h1 ? 0 : h1;
		return gq.putImageData(gr, 0, 0), gj
	}
	this.kp = -1, this.a4 = function() {
		this.kp = -1, ko[0] || (ko[0] = bN(255), ko[1] = bN(0))
	}, this.kr = function(gq, gt, aJ, aK, jn, a5) {
		aV.et.hn(cr.gJ) && (gq.setTransform(gt *= 4 / 3 * .625, 0, 0, gt, aJ - (jn *= 4 / 3), aK - jn), gq.drawImage(ko[+(am.i.ks[a5] === this.kp)], 0, 0))
	}
}

function kt() {
	var gap, kx, aJ = [0, 0, 0, 0, 0],
		aK = [0, 0, 0, 0, 0],
		ku = [1, 1, 1, 1, 1],
		kv = [!0, !0, !0, !1, !1],
		jA = (this.kw = [!0, !0, !0, !1, !1], null);
	this.ky = function(gj, kz) {
		jA = gj, kv = kz, kx = [l0.l1, l0.l2, l0.l3, l0.l3, l0.l4], this.a4()
	}, this.a4 = function() {
		if (l5.l6()) {
			var a5, de = Math.floor((cT.cU.cV() ? .261 : .195) * cy.l7),
				df = Math.floor(.9 * de),
				di = Math.floor(.17 * df);
			if (gap = cT.cU.cV() ? 2 * cz.gap : cz.gap, ku[0] = de / jA[0].width, ku[1] = df / jA[1].width, ku[2] = di / jA[2].height, ku[3] = di / jA[3].height, ku[4] = di / jA[4].height, ku[2] *= 1.7, ku[3] *= 1.07, aJ[0] = gap, aJ[1] = gap,
				aJ[2] = gap, aJ[3] = gap, aJ[4] = Math.floor(2 * gap + ku[3] * jA[3].width), aK[0] = gap, aK[1] = aK[0] + gap + ku[0] * jA[0].height, aK[2] = aK[1] + gap + ku[1] * jA[1].height, aK[3] = aK[2] + gap + ku[2] * jA[2].height, aK[4] =
				aK[3], !kv[0])
				for (a5 = 0; a5 < 5; a5++) aK[a5] -= ku[0] * jA[0].height + gap;
			if (!kv[1])
				for (a5 = 2; a5 < 5; a5++) aK[a5] -= ku[1] * jA[1].height + gap
		}
	}, this.d8 = function() {
		return !(7 === eW.eX() && cT.cU.cV())
	}, this.dB = function(l8, l9) {
		if (jA && this.d8())
			for (var a5 = kv.length - 1; 0 <= a5; a5--)
				if (kv[a5] && this.kw[a5] && aJ[a5] < l8 && aK[a5] < l9 && l8 < aJ[a5] + ku[a5] * jA[a5].width && l9 < aK[a5] + ku[a5] * jA[a5].height) return d7.dF(9, d7.lA, new lB(L(2), aV.d1.lC(kx[a5]))), !0;
		return !1
	}, this.cQ = function() {
		if (jA && this.d8()) {
			var a5;
			for (dO.imageSmoothingEnabled = !0, a5 = 0; a5 < 5; a5++) kv[a5] && this.kw[a5] && (dO.setTransform(ku[a5], 0, 0, ku[a5], aJ[a5], aK[a5]), dO.drawImage(jA[a5], 0, 0));
			dO.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function lD() {
	var lE, lF, lG, lR;

	function lI() {
		lM(), 2 !== cr.data.tIncomeType && (cr.data.tIncomeData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		2 === cr.data.tIncomeType && aV.aW.lP(lG.lQ(), cr.data.tIncomeData, 255)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(3), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(6), L(7), L(8)],
			value: cr.data.tIncomeType
		}, function(go) {
			lM(), 2 !== go || cr.data.tIncomeData || (cr.data.tIncomeData = new Uint8Array(cr.fc), cr.data.tIncomeData.fill(32)), cr.data.tIncomeType = go, d7.dF(26)
		})), lR.push(lV)
	}(lR = []), function(lR) {
		var lV;
		1 === cr.data.tIncomeType && ((lV = new lW).lX("Value"), lV.lb(new lc({
			go: -1,
			value: cr.data.tIncomeValue
		}, 1, 0, function(ej) {
			var value = aQ.ld(Math.floor(ej.target.value), 0, 255);
			ej.target.value = cr.data.tIncomeValue = value
		})), lR.push(lV))
	}(lR), function(lR) {
		var lV;
		2 === cr.data.tIncomeType && ((lV = new lW).lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.tIncomeData, 4)), lV.lb(lG), lR.push(lV))
	}(lR), lR))
}

function lj() {
	var canvas, ck, aJ, aK, lk, ll, gap, lm, fontSize, ln, kx, lo, lp, lq, lr, ls, lt, lu;

	function m2() {
		ck.clearRect(0, 0, gO.aZ, gO.b6), ck.fillStyle = dZ.f6, ck.fillRect(0, 0, gO.aZ, gO.b6), ck.fillStyle = dZ.m7, gt = 0 < ls ? ls : lp[4] / 1e4, ck.fillRect(0, gO.b6 - lk - 1, Math.floor(gt * gO.aZ), lk), ck.fillStyle = dZ.dc, ck.fillRect(0, 0,
			gO.aZ, 1), ck.fillRect(0, 0, 1, gO.b6), ck.fillRect(gO.aZ - 1, 0, 1, gO.b6), ck.fillRect(0, gO.b6 - 1, gO.aZ, 1), ck.fillRect(0, gO.b6 - lk - 1, gO.aZ, 1);
		for (var gt, m8, kG = 0, a5 = 0; a5 < lo.length; a5++) lq[a5] ? (aV.d1.textAlign(ck, 0), m8 = Math.floor((ll - lk + 2 * lm) * (a5 - kG + 1) / (lo.length + 1) - .7 * lm), ck.fillText(lo[a5], gap, m8), aV.d1.textAlign(ck, 2), 5 === a5 && 0 !==
			f4.fv[cr.gJ] && f4.g2[cr.gJ] >= m9.mA(cr.gJ) ? (ck.fillStyle = dZ.mB, ck.fillText(lx(a5), gO.aZ - gap, m8), ck.fillStyle = dZ.dc) : ck.fillText(lx(a5), gO.aZ - gap, m8)) : kG++
	}

	function lx(a5) {
		return a5 < 3 ? lp[a5].toString() : 3 === a5 || 4 === a5 || 5 === a5 ? aV.hf.mC(lp[a5] / 100, 2) : a5 < 7 ? aV.hf.hg(lp[a5]) : a5 === 7 ? gO.mD(lp[7]) : a5 === 8 ? __fx.utils.getMaxTroops(f4.g0, cr.gJ) : __fx.utils.getDensity(cr.gJ)
	}

	function lw() {
		f4.g0[cr.gJ] !== lp[6] && (lp[6] = f4.g0[cr.gJ], ln++)
	}
	this.a4 = function() {
		ls = lt = 0, (kx = new Array(8))[0] = L(9), kx[1] = cr.eh ? L(10) : L(11), kx[2] = L(12), kx[3] = L(13), kx[4] = L(14), kx[5] = L(15, 0, "Interest"), kx[6] = L(16), kx[7] = L(17),
			kx.push("Max Troops", "Density"), // add kx
			(lo = new Array(kx.length)).fill(""), (lp = new Array(kx.length))[0] = cr.eh ? 0 : cr.fb, lp[1] = cr.eh ? f8.f9 : cr.fd, lp[2] = cr.kO, lp[3] = 0, lp[4] = aQ.aR(1e4 * f4.g0[0], Math.max(cr.lv, 1)), lp[5] = 0 === cr.data.iIncomeType ?
			700 : 1 === cr.data.iIncomeType ? aQ.aR(700 * cr.data.iIncomeValue, 64) : aQ.aR(700 * cr.data.iIncomeData[cr.gJ], 64), lp[6] = 0, lw(), lp[7] = 0, lr = lx(6), (lq = new Array(kx.length)).fill(!0), lu = 0, lu = cr.eh ? (lq[0] = !1, lq[
				2] = !1, lq[3] = !1, 3) : (lq[3] = !1, 1), ln = 0, this.resize()
	}, this.resize = function() {
		this.aZ = Math.floor((cT.cU.cV() ? .1646 : .126) * 1.25 * cy.l7), this.b6 = Math.floor(1.18 * this.aZ), lk = Math.floor(.04 * this.aZ), gap = Math.floor(.035 * this.aZ), lm = .04 * this.aZ, ll = this.b6, this.b6 -= Math.floor(lu * (this
			.b6 - 2 * lk) / kx.length), fontSize = Math.floor(.7 * (ll - lk) / kx.length);
		var ly = aV.d1.d2(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.aZ, canvas.height = this.b6,
			function(ly, aZ) {
				for (var a5 = 0; a5 < lo.length; a5++) lo[a5] = aV.ck.m3(kx[a5], ly, aZ)
			}((ck = canvas.getContext("2d", {
				alpha: !0
			})).font = ly, .575 * this.aZ), aV.d1.textBaseline(ck, 1), ck.lineWidth = 1, this.gP(), this.m0(), m1.m0(), m2()
	}, this.m0 = function() {
		aJ = cy.aZ - this.aZ - cz.gap
	}, this.m4 = function() {
		aK = cz.gap
	}, this.gP = function() {
		aK = cz.gap + (m1.m5() && 0 !== f4.fv[cr.gJ] && !cr.gH ? m1.b6 + cz.gap : 0)
	}, this.gW = function(m6) {
		(m6 || 100 <= ln) && (ln = 0, m2())
	}, this.mE = function() {
		return lp[7]
	}, this.mD = function(value) {
		var bA = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * bA) / 1e3);
		return value < 10 ? bA + ":0" + value : bA + ":" + value
	}, this.ar = function() {
		var mT, per;
		lq[0] && cr.kP - cr.kO !== lp[0] && (lp[0] = cr.kP - cr.kO, ln++), f8.f9 - lp[0] !== lp[1] && (lp[1] = f8.f9 - lp[0], ln++), this.mH(), (mT = m9.mU(cr.gJ)) !== lp[5] && (lp[5] = mT, ln++), lw(), lp[7] += bV.mV, mT = lx(7), lr !== mT && (
			lr = mT, ln += 100), mT = cr.f0 ? dA.mN() : f4.g0[fH[0]], per = aQ.aR(1e4 * mT, Math.max(cr.lv, 1)), lp[3] = mT, lp[4] !== per && (ln++, lp[4] = per), 8 === cr.fW && function() {
			for (var a5 = 0; a5 < 2; a5++)
				if (!aV.et.hn(a5)) return kQ.mS.kM(), 1;
			return
		}() || lp[3] < cr.lv || ! function() {
			for (var a5 = f8.f9 - 1; 0 <= a5; a5--)
				if (0 < f4.g3[f8.fB[a5]].length) return;
			return 1
		}() || am.cI.mR().length || cr.f0 && dA.mN(1) < cr.lv || kQ.mS.kM()
	}, this.mH = function() {
		lq[2] && cr.kO !== lp[2] && (lp[2] = cr.kO, ln += 2 === cr.d6 ? 100 : 1)
	}, this.mO = function() {
		return lp[3] === cr.lv
	}, this.mW = function(a5) {
		var mX, mY, kG;
		return 2 !== cr.d6 && (a5 % 2 == 1 && (kZ.gW(1, 1), bV.bW = !0), a5 === cr.mZ ? (ls = 0, m2(), !1) : (-1 !== a5 || 0 !== lt) && (mY = ls, ls = cr.cs ? a5 / cr.mZ : (kG = performance.now(), 0 <= a5 && (mX = kG - 392 * a5, lt = 0 === a5 ||
			mX < lt ? mX : lt), 1 < (ls = (kG - lt) / (392 * cr.mZ)) ? 1 : ls), m2(), ls !== mY))
	}, this.cQ = function() {
		dO.drawImage(canvas, aJ, aK)
	}
}

function ma() {
	this.iy = new mb, this.buffer = new mc, this.md = new me, this.i = new mf, this.mg = new mh, this.a4 = function() {
		this.buffer.a4(), (new mi).a4(), this.mg.a4(), this.i.mj()
	}
}

function bz() {
	this.mk = 512, this.ml = 8, this.hS = 0, this.mm = 0, this.hN = new Uint16Array(this.mk), this.hM = new Uint32Array(this.mk), this.mn = new Uint16Array(this.mk), this.hO = new Uint32Array(this.mk), this.an = new Uint16Array(this.mk), this.ks =
		new Uint16Array(this.mk), this.mo = new Uint8Array(this.mk), this.hP = new Uint8Array(this.mk), this.mp = new Array(this.mk), this.mq = new Uint16Array(this.mk), this.mr = new Uint8Array(cr.fc), this.ms = new Uint16Array(this.ml * cr.fc),
		this.a4 = function() {
			this.hS = 0, this.mm = 0, this.mr.fill(0), this.mp.fill(null)
		}, this.aa = function(player) {
			var hF = gx.mt[0],
				c2 = gx.iP[1],
				mu = gx.au[0],
				mv = this.mm,
				u = this.hS,
				ae = aj.mw(mu[0]),
				mx = this.mr[player],
				my = (player << 3) + mx;
			this.hN[u] = my, this.hM[u] = ae, this.mn[u] = 0, hF < 60 && (aV.et.mz(player, 60 - hF), hF = 60), this.hO[u] = hF, this.an[u] = am.aO.aa(u, aj.ak(ae)), this.ks[u] = mv, this.mo[u] = c2, this.hP[u] = 0, this.mp[u] = mu, this.mq[u] = 0,
				this.mm = (mv + 1) % 65536, this.mr[player] = mx + 1, this.ms[my] = u, this.hS++, am.c2.n0(player, mu[mu.length - 1], c2, mv, hF)
		}, this.ar = function() {
			am.c2.ar();
			for (var bB = cr.gJ, kG = am.cI.n1(bB), dS = (! function(dS) {
					for (var n7, hM = dS.hM, hO = dS.hO, hP = dS.hP, mn = dS.mn, an = dS.an, mp = dS.mp, mq = dS.mq, dS = dS.hS, hV = aS.aT << 4, a5 = dS - 1; 0 <= a5; a5--) {
						var n8 = hM[a5],
							mu = mp[a5],
							n9 = mq[a5],
							ae = aj.mw(mu[n9]),
							af = aj.mw(mu[n9 + 1]),
							nA = ae % hV,
							ae = ~~((ae + .5) / hV),
							nC = af % hV,
							nD = ~~((af + .5) / hV),
							nE = nC - nA,
							nF = nD - ae,
							ba = Math.max(~~Math.sqrt(nE * nE + nF * nF + .5), 1),
							nG = hO[a5],
							nG = (nG = hP[a5] ? 4e4 : 25e4 + Math.min(20 * nG, 3e5) + Math.min(nG >> 3, 5e4), mn[a5] + Math.max(~~((nG + .5) / ba), 1));
						65535 <= nG ? n9 + 2 < mu.length ? (mq[a5] = n9 + 1, hM[a5] = n7 = function(a5, nH, nA, nB, n9, ba, mu, hV) {
							nH = Math.min(nH - 65535, 65535);
							var mu = aj.mw(mu[n9 + 2]),
								n9 = mu % hV - nA,
								mu = ~~((mu + .5) / hV) - nB,
								nJ = Math.max(~~Math.sqrt(n9 * n9 + mu * mu + .5), 1);
							return nH = Math.min(Math.floor((ba * nH + .5) / nJ), 65534), am.i.mn[a5] = nH, nA + aQ.aR(nH * n9, 65535) + hV * (nB + aQ.aR(nH * mu, 65535))
						}(a5, nG, nC, nD, n9, ba, mu, hV)) : (hM[a5] = n7 = af, mn[a5] = 65535) : (mn[a5] = nG, hM[a5] = n7 = nA + aQ.aR(nG * nE, 65535) + hV * (ae + aQ.aR(nG * nF, 65535))), an[a5] = am.aO.ac(an[a5], n8, n7)
					}
				}(this), ! function(dS) {
					if (bV.es() % 2 == 1) {
						var a5, b4, bA, av, jA, nK, nL, nM, bj, dg, dh, ae, nP, nN, nR, bk, u = dS.hS,
							hM = dS.hM,
							hN = dS.hN,
							hO = dS.hO,
							hP = dS.hP,
							aO = am.aO.aO,
							nT = aO.length,
							aP = am.aO.aP,
							hV = aS.aT << 4,
							nU = cr.f0,
							nV = fF.fI,
							dp = (u - 1) * (aQ.aR(bV.es(), 2) % 2);
						for (a5 = 0; a5 < u; a5++)
							for (b4 = Math.abs(a5 - dp), ae = hM[b4], bA = aj.ak(ae), bj = hN[b4] >> 3, dg = ae % hV, dh = ~~((ae + .5) / hV), nR = hO[b4], av = 0; av < 9; av++)
								if (!((nK = bA + aP[av]) < 0 || nT <= nK))
									for (nM = aO[nK], nL = nM.length, jA = 0; jA < nL; jA++) nP = nM[jA], bk = hN[nP] >> 3, bj == bk || nU && nV[bj] === nV[bk] && nV[bj] || (bk = hM[nP], (nN = dg - bk % hV) * nN + (nN = dh - ~~((bk + .5) /
										hV)) * nN < 14400 && (bk = hO[nP], nN = bk <= nR ? Math.max(1, aQ.aR(bk + aQ.aR(nR - bk, 10), 10)) : Math.max(1, aQ.aR(nR, 10)), hO[nP] = Math.max(bk - nN, 0), hP[nP] = 4))
					}
				}(this), ! function(dS) {
					if (bV.es() % 5 == 3)
						for (var hO = dS.hO, u = dS.hS, a5 = 0; a5 < u; a5++) {
							var hF = hO[a5];
							hO[a5] = Math.max(hF - Math.max(1, hF >> 7), 0)
						}
				}(this), this), hO = dS.hO, hP = dS.hP, a5 = dS.hS - 1; 0 <= a5; a5--) hP[a5] = hP[a5] >> 1, 0 === hO[a5] && (am.cM.nX(a5), am.bv.nY(a5));
			gK.n6(bB, kG - am.cI.n1(bB), 15)
		}
}

function nZ() {
	var na = [L(18), L(19), L(20), L(21), L(22), L(23), L(24)],
		nb = [100, 60, 30, 15, 6, 1],
		nc = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		nd = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		nf = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.ng = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.nh = function(id, jn, go) {
		jn = this.ni(jn);
		return +(nc[jn][id] > go)
	}, this.ni = function(jn) {
		for (var a5 = 0; a5 < nb.length; a5++)
			if (nb[a5] <= jn) return a5;
		return nb.length
	}, this.nj = function(jn) {
		return na[this.ni(jn)]
	}, this.nk = function(id, nl) {
		return nd[id].replace(new RegExp("x", "g"), nl)
	}, this.nm = function(id, nl) {
		return nf[id].replace(new RegExp("x", "g"), nl)
	}, this.nn = function(id, no) {
		return this.ng[5][id]
	}
}

function lJ(np, lR) {
	var k2 = document.createElement("div");

	function nw() {
		var a5, nx, b6, dp, ba, nt = cy.ny * k2.offsetWidth,
			nz = new Float64Array(function(nt) {
				var aZ = .25 * aV.d1.nu(.6) * cy.l7;
				return Math.max(Math.floor(nt / aZ), 1)
			}(nt)),
			o0 = cz.o0,
			o1 = (nt - (nz.length + 1) * cz.gap) / (nz.length * cy.ny);
		for (nz.fill(o0), a5 = 0; a5 < lR.length; a5++) nx = (ba = lR[a5].k2).style, b6 = aV.aW.min(nz), dp = nz.indexOf(b6), nx.top = aV.d1.io(b6), nx.left = aV.d1.io(o0 + dp * (o1 + o0)), nx.width = aV.d1.io(o1), aV.d1.k4(ba, 5), nz[dp] += ba
			.offsetHeight + 3 * o0;
		k2.style.height = aV.d1.io(aV.aW.max(nz) - 2 * o0)
	}
	this.nq = k2, this.nr = lR, this.resize = function() {
		var a5;
		for (a5 = 0; a5 < lR.length; a5++) lR[a5].resize();
		nw(), nw()
	}, k2.style.width = "100%", k2.style.maxWidth = "100%", np.style.lineHeight = "1.5em", np.style.overflowX = "hidden", np.style.overflowY = "auto";
	for (var a5 = 0; a5 < lR.length; a5++) k2.appendChild(lR[a5].k2);
	np.appendChild(k2)
}

function c3() {
	function oE(player, hF, o7, oB) {
		var oK;
		if (fK.fL(o7)) oK = cr.fc;
		else {
			if ((oK = fK.iA(o7)) === player) return void gK.n6(player, hF - aV.et.oL(player, hF), 12);
			if (!iE.iL(player, oK)) return void i2.oM.oN(player, oK, hF)
		}
		iH.oO(player, oK) || iH.oP(player) ? (f4.g3[player].push(oB << 2), iH.gE(player, hF, oK), oQ.oR(player, !0)) : gK.n6(player, hF, 12)
	}
	this.ar = function() {
		for (var mo = am.i.mo, hM = am.i.hM, mn = am.i.mn, a5 = am.i.hS - 1; 0 <= a5; a5--) 65535 === mn[a5] && function(a5, oB, ih) {
			if (6 === ih) {
				if (am.cM.oC(a5, oB)) return am.i.mq[a5]++, am.i.mn[a5] = 0, 0
			} else {
				var player = am.i.hN[a5] >> 3,
					a5 = am.i.hO[a5];
				gK.oD(player), ih < 4 ? oE(player, a5, oB + aj.o8[ih] << 2, oB) : 4 === ih ? function(player, hF, oB) {
					var a5, hE, oH = aj.oI,
						hX = aj.i5(oB);
					for (a5 = 0; a5 < 4; a5++)
						if (hE = hX + oH[a5], fK.fL(hE)) return oE(player, hF, hE, oB);
					for (a5 = 0; a5 < 4; a5++)
						if (hE = hX + oH[a5], fK.ii(hE) && !fK.oJ(player, hE)) return oE(player, hF, hE, oB);
					for (a5 = 0; a5 < 4; a5++)
						if (hE = hX + oH[a5], fK.ii(hE)) return oE(player, hF, hE, oB)
				}(player, a5, oB) : 5 === ih && function(player, hF, oB) {
					var a5, hE, oH = aj.oI,
						hX = aj.i5(oB);
					for (a5 = 0; a5 < 4; a5++)
						if (hE = hX + oH[a5], fK.ii(hE) && fK.oJ(player, hE)) return oE(player, hF, hE, oB);
					for (a5 = 0; a5 < 4; a5++)
						if (hE = hX + oH[a5], fK.ii(hE)) return oE(player, hF, hE, oB);
					for (a5 = 0; a5 < 4; a5++)
						if (hE = hX + oH[a5], fK.fL(hE)) return oE(player, hF, hE, oB)
				}(player, a5, oB)
			}
			return 1
		}(a5, aj.o3(hM[a5]), mo[a5] % 64) && (am.cM.nX(a5), am.bv.nY(a5))
	}, this.n0 = function(player, fM, ih, o4, hF) {
		if (!(5 <= ih)) {
			var hR = cr.gJ;
			if (aV.et.hn(hR) && iE.iL(player, hR) && player !== hR && 0 !== f4.g5[hR].length && aV.et.o5(player, 5)) {
				for (var o7, o6 = !1, a5 = 0; a5 < 4; a5++)
					if (o7 = fM + aj.o8[a5] << 2, fK.o9(o7) && !fK.fL(o7) && fK.iA(o7) === hR) {
						o6 = !0;
						break
					} o6 && (ew.ez(719, 0), ih = hF < 25e3 ? L(25) + " (" + aV.hf.hg(hF) + ") ⛵" : L(26) + " (" + aV.hf.hg(hF) + ") 🚢", ew.f3(180, ih, 719, player, dZ.oA, dZ.f6, -1, !0, void 0, {
					av: 1,
					o4: o4
				}))
			}
		}
	}
}

function oS() {
	this.oT = function() {
		r.md.oU(), r.md.oV(), f.i.close(0, 3255), 0 === cT.id ? cT.oW && cT.oW.clear() : 1 === cT.id ? cT.oX.saveString(199, "") : 2 === cT.id && cT.oY.postMessage("clear")
	}, this.oZ = function() {
		2 === cT.id ? cT.oY.postMessage("showConsentForm") : 1 === cT.id && cT.oX.setState(7)
	}, this.oa = function() {
		this.setState(14)
	}, this.cV = function() {
		return 1 === r.buffer.ob(2)
	}, this.oc = function() {
		r.buffer.od(102, "")
	}, this.setState = function(jL) {
		1 === cT.id && 5 <= cT.oe && cT.oX.setState(jL)
	}, this.og = function() {
		var oh;
		1 === cT.id && 7 <= cT.oe ? cT.oX.setState(5) : 2 === cT.id ? cT.oY.postMessage("reload 0") : ((oh = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = oh.toString())
	}, this.oi = function() {
		0 !== cT.id && (1 === cT.id ? cT.oX.prepareAd("8646194357") : 2 === cT.id && (0 === cT.oe ? cT.oY.postMessage("prepare ad 2904813909") : cT.oY.postMessage("loadAds 2904813909")))
	}, this.oj = function(kG) {
		return 0 !== cT.id && (1 === cT.id ? 12 <= cT.oe && (cT.oX.presentAd(kG), !0) : 2 === cT.id && 0 !== cT.oe && (cT.oY.postMessage("showAd"), !0))
	}, this.ok = function() {
		2 === cT.id && cT.oe < 23 && d7.dF(4, 1, new ol("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + l0.l2 + "' target='_blank'>" + l0
			.l2 + "</a>", !0, [new ir("⬅️ " + L(4), function() {
				d7.dF(0)
			}, dZ.om)]))
	}
}

function on(oo) {
	var op = document.createElement("div"),
		oq = document.createElement("div");
	this.d3 = function() {
			oq.textContent = "", or.os.ot && or.os.eQ(1);
			for (var ou = document.createDocumentFragment(), ov = or.i.ow[0], ox = or.ox.oy[ov], oz = or.ox.oz[ov], a5 = 0; a5 < ox.length; a5++) ! function(ou, ev, p1, ov) {
				var p2 = document.createElement("span");
				p2.textContent = (p1 ? "🟢 " : "⚪ ") + or.cI.p3(ev, ov), p2.style.color = or.cI.p4(ev.p5), 11 === ev.p5 && (p2.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				p2.style.cursor = "pointer", p2.style.margin = "0.2em 0.2em 0.2em 0.2em", p2.style.width = p2.style.maxWidth = 2 === ov ? "10em" : "9em", p2.style.height = p2.style.maxHeight = "1.4em", p2.style.whiteSpace = "nowrap", p2.style
					.overflow = "hidden", p2.style.textOverflow = "ellipsis", p2.style.font = "inherit", p2.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (p1 = __fx.utils.getDuplicateIpHighlightColor(ev, or.ox.oy[ov],
						"aLg")) && (p2.style.backgroundColor = p1, p2.style.borderRadius = "0.3em");
				__fx.settings.highlightSameClan && (ov = __fx.utils.getSameClanHighlightColor(ev, or.a65, "username")) && (p2.style.backgroundColor ? p2.style.boxShadow = "inset 0 0 0 2px " + ov : p2.style.backgroundColor = ov, p2.style
					.borderRadius = "0.3em");
				or.cI.p6(ev) && (p2.style.textDecoration = "underline"), ev.p7 && (p2.style.textDecorationLine = "underline", p2.style.textDecorationStyle = "dotted");
				p2.onclick = function(ej) {
					oo(ej, ev)
				}, jC.jD() || (p2.onmouseover = function(ej) {
					or.os.p8(ej.target, ev, 1)
				}), ou.appendChild(p2)
			}(ou, ox[a5], a5 < oz, ov);
			oq.appendChild(ou)
		}, this.show = function(np) {
			np.appendChild(op)
		}, this.eQ = function(np) {
			d7.removeChild(np, op)
		}, this.resize = function() {
			oq.style.fontSize = aV.d1.io(aV.d1.iq(.02, .3))
		}, op.style.top = "0", op.style.left = "0", op.style.width = op.style.height = "100%", op.style.overflowX = "hidden", op.style.overflowY = "auto", op.style.font = "inherit", oq.style.font = "inherit", oq.style.margin = "0.4em", op
		.appendChild(oq)
}

function mh() {
	var p9 = [];

	function pD(aE) {
		p9.unshift(aE), r.md.pE(161, p9.join(";"))
	}

	function pC(aE) {
		for (var pG = p9, u = pG.length, a5 = 0; a5 < u; a5++)
			if (pG[a5] === aE) return pG.splice(a5, 1), r.md.pE(161, pG.join(";")), 1
	}
	this.a4 = function() {
		var v = r.buffer.data[161].value;
		v.length && (p9 = v.split(";"))
	}, this.get = function() {
		return p9
	}, this.pA = function() {
		return {
			la: p9,
			value: 0
		}
	}, this.p7 = function(aE) {
		return aV.aW.has(p9, aE)
	}, this.pB = function(aE) {
		return pC(aE) ? 0 : (pD(aE), 1)
	}, this.d3 = function(aE) {
		pC(aE) && pD(aE)
	}, this.pF = function(go) {
		go < p9.length && (p9.splice(go, 1), r.md.pE(161, p9.join(";")))
	}
}

function pH() {
	function pQ(player) {
		var kG;
		aV.et.pS(player) && (kG = f4.g2[player] - f4.gC[player] + iH.n1(player), gK.n6(player, Math.abs(kG), kG < 0 ? 18 : 12)), f4.g2[player] = 0, f4.gC[player] = 0
	}

	function pa() {
		gT.show(!1, !1, !1, !0), gO.m4(), kQ.kU.pc()
	}

	function pL(player, pY) {
		for (var a5 = pY.length - 1; 0 <= a5; a5--) iH.pd(pY[a5], player)
	}

	function pO(player) {
		var fw = f4.fw,
			fy = f4.fy,
			fx = f4.fx,
			fz = f4.fz,
			aT = aS.aT;
		if (f4.g0[player]) {
			f4.g0[player] = 0;
			for (var dg = fw[player], dh = fx[player], aJ = fy[player]; dg <= aJ; aJ--)
				for (var aK = fz[player]; dh <= aK; aK--) {
					var bB = 4 * (aK * aT + aJ);
					fK.pm(player, bB) && fK.pn(bB)
				}
		}
		fy[player] = fz[player] = 0, fw[player] = fx[player] = Math.max(aT, aS.aU)
	}
	this.pI = function(bB) {
		var player, kG = f4.g0[bB] + f4.g1[bB];
		am.i.mr[bB] ? kG && (pL(player = bB, iH.pM(player)), fm.pN(player), pO(player), oQ.pP(player), iH.clear(player), pQ(player), function(player) {
			f4.g1[player] = 0, f4.g3[player] = [], f4.g4[player] = [], f4.g5[player] = [], f4.g6[player] = []
		}(player)) : !kG && f4.g3[bB].length || this.pK(bB)
	}, this.pK = function(player) {
		! function(player) {
			aV.et.jy(player) || (f4.gA[player] = pW.pX.jx(), cr.kO++);
			var pY = iH.pM(player);
			0 === pY.length ? aV.et.pZ(player) && pa() : (pL(player, pY), function(player, pY) {
				var pf = pY[function(pY) {
					var a5, go = 0;
					for (a5 = pY.length - 1; 1 <= a5; a5--) f4.g0[pY[a5]] > f4.g0[pY[go]] && (go = a5);
					return go
				}(pY)];
				9 === cr.fW && (1 === fF.fI[player] ? fj.pg(8) && ph.fh(pf) : kj.hF[player] && (ew.ez(765, 0), ew.f3(280, L(27, [f4.f5[pf], f4.f5[player]]), 765, pf, dZ.pi, dZ.pj, -1, !0)));
				if (aV.et.pZ(player)) pa(), ew.pk(pf, 1);
				else {
					for (var a5 = pY.length - 1; 0 <= a5; a5--)
						if (aV.et.pS(pY[a5]) && (gK.gL[4 - aV.et.jy(player)]++, aV.et.pZ(pY[a5]))) return ew.pk(player, 0);
					aV.et.jy(player) || ew.pl(0, player, pf)
				}
			}(player, pY))
		}(player), fm.pN(player), pO(player), pQ(player),
			function(player) {
				f4.fv[player] = 0, f4.g3[player] = null, f4.g4[player] = null, f4.g5[player] = null, f4.g6[player] = null
			}(player), oQ.pP(player), iH.clear(player), am.bv.pV(player)
	}
}

function po() {
	var pp, pq;
	this.a4 = function() {
		pp = 1, pq = 0
	}, this.ar = function() {
		0 < pp && (pq = 0 === pq ? bV.aw + 16 : pq, pp = (pp -= .001 * (bV.aw - pq)) < 0 ? 0 : pp, pq = bV.aw, bV.bW = !0)
	}, this.cQ = function() {
		0 < pp && (dO.fillStyle = "rgba(0,0,0," + pp + ")", dO.fillRect(0, 0, cy.aZ, cy.b6))
	}
}

function ol(title, pt, pu, pv) {
	var pw, px;
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), px.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pv = pv || [new ir("⬅️ " + L(4), function() {
		d7.lO()
	})], pw = new lH(title, pv), px = new py(pw.lK, pt), pu && aV.d1.textAlign(pw.lK.style, 1)
}

function pz() {
	this.mS = new kH, this.result = new q0, this.q1 = new q2, this.kV = new q3, this.kR = new q4, this.kU = new q5, this.a4 = function() {
		this.result.a4()
	}
}

function q7() {
	var q8, q9, qA, qB, qC, qD, qE, qF, qG, qH, qI, qJ, qK, qL, qM, qN, qO, qP, qQ, qR, qS, qT, position, qU, qV, qW, qX, qY, qZ = 1,
		qa = 1,
		qb = "";
	var leaderboardHasChanged = true;
	this.playerPos = cr.gJ;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => fD[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(fD[cr.gJ]);
	}

	function qe() {
		qE.clearRect(0, 0, q8, q6),
			qE.fillStyle = qY ? dZ.qh : dZ.qi,
			qE.fillRect(0, 0, q8, qJ),
			qE.fillStyle = dZ.da,
			qE.fillRect(0, qJ, q8, q6 - qJ);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			fD[cr.gJ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) qT = -1;
		if (__fx.leaderboardFilter.enabled && qT >= __fx.leaderboardFilter.filteredLeaderboard.length) qT = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) qj(ownClanIndex - position, dZ.db);
			})() :
			(playerPos >= position && qj(playerPos - position, dZ.db),
				0 !== fD[cr.gJ] && 0 === position && qj(0, dZ.qk))
		),
		-1 !== qT && qj(qT, dZ.ql),
			qE.fillStyle = dZ.da,
			//console.log("drawing", qT),
			qE.clearRect(0, q6 - __fx.leaderboardFilter.tabBarOffset, q8, __fx.leaderboardFilter.tabBarOffset);
		qE.fillRect(0, q6 - __fx.leaderboardFilter.tabBarOffset, q8, __fx.leaderboardFilter.tabBarOffset);
		qE.fillStyle = dZ.dc,
			qE.fillRect(0, qJ, q8, 1),
			qE.fillRect(0, q6 - __fx.leaderboardFilter.tabBarOffset, q8, 1),
			__fx.leaderboardFilter.drawTabs(qE, q8, q6 - __fx.leaderboardFilter.tabBarOffset, dZ.db),
			qE.fillRect(0, 0, q8, cz.qm),
			qE.fillRect(0, 0, cz.qm, q6),
			qE.fillRect(q8 - cz.qm, 0, cz.qm, q6),
			qE.fillRect(0, q6 - cz.qm, q8, cz.qm), qE.font = q9, aV.d1.textBaseline(qE, 1), aV.d1.textAlign(qE, 1), qE.fillText(qb, Math.floor((q8 + qJ - 22) / 2), Math.floor(qH + qA / 2));
		__fx.playerList.drawButton(qE, 12, 12, qJ - 22);
		var a6, dp = playerPos < position + qC - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) dp = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - qC)
				position = (rivalsCount > qC ? rivalsCount : qC) - qC;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < qC; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, f4.d1[repId], f4.f5[repId], f4.fu[repId]]);
					f4.d1[repId] = rivalsEntry.territory;
					f4.f5[repId] = "[" + rivalsEntry.clan + "]";
					f4.fu[repId] = 0;
				}
				for (qE.font = qB, aV.d1.textAlign(qE, 0), a6 = qC - dp; 0 <= a6; a6--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[a6 + position];
					if (rivalsEntryLeft !== undefined)
						qn(rivalsEntryLeft.representativeId), qo(a6, a6 + position, rivalsEntryLeft.representativeId);
				}
				for (aV.d1.textAlign(qE, 2), a6 = qC - dp; 0 <= a6; a6--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[a6 + position];
					if (rivalsEntryRight !== undefined)
						qn(rivalsEntryRight.representativeId), qp(a6, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					f4.d1[entry[0]] = entry[1];
					f4.f5[entry[0]] = entry[2];
					f4.fu[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - qC)
				position = (result.length > qC ? result.length : qC) - qC;
			//if (position >= result.length) position = result.length - 1;
			for (qE.font = qB, aV.d1.textAlign(qE, 0), a6 = qC - dp; 0 <= a6; a6--) {
				const pos = result[a6 + position];
				if (pos !== undefined)
					qn(fH[pos]), qo(a6, pos, fH[pos]);
			}
			for (aV.d1.textAlign(qE, 2), a6 = qC - dp; 0 <= a6; a6--) {
				const pos = result[a6 + position];
				if (pos !== undefined)
					qn(fH[pos]), qp(a6, fH[pos]);
			}
		} else {
			for (qE.font = qB, aV.d1.textAlign(qE, 0), a6 = qC - dp; 0 <= a6; a6--)
				qn(fH[a6 + position]), qo(a6, a6 + position, fH[a6 + position]);
			for (aV.d1.textAlign(qE, 2), a6 = qC - dp; 0 <= a6; a6--)
				qn(fH[a6 + position]), qp(a6, fH[a6 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == dp && (qn(cr.gJ), aV.d1.textAlign(qE, 0), qo(qC - 1, fD[cr.gJ], cr.gJ), aV.d1.textAlign(qE, 2), qp(qC - 1, cr.gJ)), 0 === position && (dp = .7 * qK / l5.get(4).height, qE.setTransform(dp, 0, 0,
				dp, Math.floor(qL + .58 * qK + .5 * dp * l5.get(4).width), Math.floor(qH + qA + .4 * qK)), qE.imageSmoothingEnabled = !0, qE.drawImage(l5.get(4), -Math.floor(l5.get(4).width / 2), -Math.floor(l5.get(4).height / 2)), qE
			.setTransform(1, 0, 0, 1, 0, 0))
	}

	function qn(player) {
		cr.f0 && (qE.fillStyle = fF.qr[fF.gl[player]])
	}

	function qj(a5, qs) {
		qE.fillStyle = qs, a5 = qC - 1 < a5 ? qC - 1 : a5;
		qs = Math.floor((a5 === qC - 1 ? 2 : 0 === a5 ? 1.15 : 1) * qK), qs = a5 === qC - 2 ? Math.floor(qJ + 9.15 * qK) - Math.floor(qJ + 8.15 * qK) : qs;
		qE.fillRect(0, Math.floor(qJ + (a5 + (0 === a5 ? 0 : .15)) * qK), q8, qs)
	}

	function qo(qv, qw, a5) {
		qE.fillText(qP[qw], qL, Math.floor(qH + qA + (qv + .5) * qK)), 1 === f4.fu[a5] && (qE.font = "italic " + qB);
		qw = Math.floor(qH + qA + (qv + .5) * qK);
		qE.fillText(f4.f5[a5], qM, qw), 0 !== f4.fu[a5] && (qE.font = qB), a5 < cr.fb && 2 !== f4.fu[a5] || qE.fillRect(qM, qw + .35 * qZ, qO[a5], Math.max(1, .1 * qZ))
	}

	function qp(qv, a5) {
		qE.fillText(f4.g0[a5], qN, Math.floor(qH + qA + (qv + .5) * qK))
	}
	this.a4 = function() {
		var a5;
		for (d7.i.qc[0] = 0, qX = qW = qU = 0, qY = qV = !1, qT = -1, qC = cT.cU.cV() ? 6 : 10, qa = (position = 0) === (qa = r.buffer.data[11].value) ? 10 : 1 === qa ? 5 : 1, qS = !1, qQ = new Uint16Array(qC + 1), qR = new Uint32Array(qC + 1),
			qG = cr.fc, fH = new Uint16Array(qG), fD = new Uint16Array(qG), a5 = qG - 1; 0 <= a5; a5--) fH[a5] = a5, fD[a5] = a5;
		this.resize(!0), qO = new Uint16Array(cr.fc);
		var qd = Math.floor(q8 - qM - qL - qF);
		for (qP = new Array(cr.fc), qE.font = qB, a5 = cr.fc - 1; 0 <= a5; a5--) qP[a5] = a5 + 1 + ".", f4.f5[a5] = aV.ck.m3(f4.ft[a5], qB, qd), qO[a5] = Math.floor(qE.measureText(f4.f5[a5]).width);
		qe()
	}, this.resize = function(a4) {
		if (q6 = cT.cU.cV() ? (q8 = Math.floor(.335 * cy.l7), Math.floor(qC * q8 / 8)) : (q8 = Math.floor(.27 * cy.l7), Math.floor(qC * q8 / 10)), q8 = Math.floor(.97 * q8), (qD = document.createElement("canvas")).width = q8, qD.height = q6, qE =
			qD.getContext("2d", {
				alpha: !0
			}), qH = .025 * q8, qA = .16 * q8, qI = 0 * q8, qJ = Math.floor(.45 * qH + qA), qK = (q6 - qA - 2 * qH - qI) / qC,
			qD.height = q6 += qK, __fx.leaderboardFilter.tabBarOffset = Math.floor(qK * 1.3), __fx.leaderboardFilter.verticalClickThreshold = q6 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = q8,
			q9 = aV.d1.d2(1, Math.floor(.55 * qA)), qZ = Math.floor((cT.cU.cV() ? .67 : .72) * qK), qB = aV.d1.d2(0, qZ), qE.font = qB, qL = Math.floor(.04 * q8), qM = Math.floor((cT.cU.cV() ? .195 : .18) * q8), qF = Math.floor(qE.measureText(
				"00920600").width), qE.font = q9, qN = q8 - qL, !a4) {
			qE.font = qB;
			for (var a5 = cr.fc - 1; 0 <= a5; a5--) qO[a5] = Math.floor(qE.measureText(f4.f5[a5]).width);
			qe()
		}
		qb = aV.ck.m3(L(28), q9, .96 * q8)
	}, this.qf = function() {
		return q8
	}, this.gW = function(m6, qg) {
		(qg || qS && (m6 || bV.es() % qa == 0)) && (qS = !1, qe())
	}, this.ar = function() {
		! function() {
			for (var a6 = qG - 1; 0 <= a6; a6--) 0 === f4.fv[fH[a6]] && ! function(a6) {
				var r4 = fH[a6];
				qG--;
				for (var a5 = a6; a5 < qG; a5++) fH[a5] = fH[a5 + 1], fD[fH[a5]] = a5;
				fH[qG] = r4, fD[fH[qG]] = qG
			}(a6)
		}();
		for (var r1, r2 = qG - 1, a6 = 0; a6 < r2; a6++) f4.g0[fH[a6]] < f4.g0[fH[a6 + 1]] && (r1 = fH[a6], fH[a6] = fH[a6 + 1], fH[a6 + 1] = r1, fD[fH[a6]] = a6, fD[fH[a6 + 1]] = a6 + 1);
		! function() {
			for (var kG = qS, dp = (qS = !0, fD[cr.gJ] >= qC - 1 ? qC - 2 : qC - 1), a5 = dp; 0 <= a5; a5--)
				if (qQ[a5] !== fH[a5] || qR[a5] !== f4.g0[fH[a5]]) return;
			(dp != qC - 2 || qQ[qC] === fD[cr.gJ] && qR[qC] === f4.g0[cr.gJ]) && (qS = kG)
		}();
		for (var a5 = qC - 1; 0 <= a5; a5--) qQ[a5] = fH[a5], qR[a5] = f4.g0[fH[a5]];
		qQ[qC] = fD[cr.gJ], qR[qC] = f4.g0[cr.gJ];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.dB = function(aJ, aK) {
		if (r5(aJ, aK)) {
			if (__fx.utils.isPointInRectangle(aJ, aK, cz.gap + 12, cz.gap + 12, qJ - 22, qJ - 22)) __fx.playerList.display(f4.ft);
			else {
				if (aK - cz.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aJ - cz.gap);
				aJ = r7(aK);
				0 <= aJ ? (qU = bV.aw, qV = !0, qW = qX = aJ, jC.r8() && (aJ = dP(-1, qX, qC), qT !== (aJ = aJ === qC ? -1 : aJ)) && (qT = aJ, qe(), bV.bW = !0)) : (qY && (qY = !1, qe(), bV.bW = !0), d7.dF(10, 0, new r9({
					rA: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		qe(), bV.bW = !0
	};

	function r7(aK) {
		return (aK -= cz.gap + qJ) < 0 ? Math.floor(aK / qK) - 1 : aK < (qC - 1) * qK ? Math.floor(aK / qK) : aK < q6 - qJ ? qC - 1 : (aK -= q6 - qJ, qC + Math.floor(aK / qK))
	}

	function r5(aJ, aK) {
		return aJ >= cz.gap && aJ < cz.gap + q8 && aK >= cz.gap && aK < cz.gap + q6
	}
	this.rB = function(aJ, aK) {
		var kG, r6;
		if (__fx.utils.isPointInRectangle(aJ, aK, cz.gap + 12, cz.gap + 12, qJ - 22, qJ - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aJ, aK, cz.gap, cz.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aJ - cz.gap)) return r6 = r7(aK), aJ = r5(aJ, aK), aK = !(!(r6 < 0 && aJ) || jC.r8()), qV ? (kG = position, (position = dP(0, position += qW - r6, cr.fc - qC)) !== kG ? (qY = aK, r6 = dP(-1,
			qW = r6, qC), qT = r6 = r6 !== qC && aJ ? r6 : -1, qe(), bV.bW = !0) : qY !== aK && (qY = aK, qe(), bV.bW = !0), !0) : (r6 = (r6 = dP(-1, r6, qC)) === qC || !aJ || jC.r8() ? -1 : r6, (qT !== r6 || qY !== aK) && (qT = r6, qY =
			aK, qe(), bV.bW = !0))
	}, this.rE = function(aJ, aK) {
		if (!qV) return !1;
		qV = !1;
		var r6 = r7(aK);
		var isEmptySpace = false;
		return jC.r8() && -1 !== qT && (qT = -1, qe(), bV.bW = !0), bV.aw - qU < 350 && qX === r6 && -1 !== (r6 = (r6 = dP(-1, r6, qC)) !== qC && r5(aJ, aK) ? r6 : -1) && (aJ = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[r6 + position] === undefined, __fx.leaderboardFilter.rivalsData[r6 + position]?.representativeId ?? cr.gJ) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), fH[__fx.leaderboardFilter.filteredLeaderboard[r6 + position] ?? (isEmptySpace = true, fD[cr.gJ])]) : fH[r6 + position]),
			r6 === qC - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : fD[cr.gJ]) >=
			position + qC - 1 && (aJ = cr.gJ), !isEmptySpace && cr.f0 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aJ, f4.ft, cr.eh), 0 === f4.fv[aJ] || isEmptySpace || cr.gH && !cr.eh && !cr.cs && aJ !==
			cr.gJ || gQ.rF(aJ, 800, !1, 0)), !0
	}, this.rG = function(aJ, aK, deltaY) {
		var rH;
		return !(qV || cr.d9 || (rH = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !r5(aJ, aK)) || (aJ = (aJ = dP(-1, r7(aK), qC)) === qC || jC.r8() ? -1 : aJ, 0 < deltaY ? position < cr.fc - qC && (position += Math.min(cr.fc - qC - position,
			rH), qT = aJ, qe(), bV.bW = !0) : 0 < position && (position -= Math.min(position, rH), qT = aJ, qe(), bV.bW = !0), 0))
	}, this.cQ = function() {
		dO.drawImage(qD, cz.gap, cz.gap)
	}
}

function rI() {
	this.rJ = function(rK, go, rL) {
		var gp = rK.height,
			gj = aV.d1.bN(gp, gp),
			gq = aV.d1.getContext(gj);
		return function(aZ, gq, rL) {
			gq.fillStyle = rL, gq.beginPath(), gq.arc(aZ / 2, aZ / 2, .47 * aZ, 0, 2 * Math.PI), gq.fill()
		}(gp, gq, rL), gq.drawImage(rK, -go * gp, 0), gj
	}, this.rN = function(rO) {
		var gq, gr, gp = rO.height;
		return rO.width === gp && (gr = (gq = aV.d1.getContext(rO, !0)).getImageData(0, 0, gp, gp), aV.rP.rQ(gr.data, gp, gp, .9), gq.putImageData(gr, 0, 0)), rO
	}
}

function rR() {
	this.data = new rS;
	var rT = (new rU).L84,
		rX = (this.rV = rT, !(this.rW = "en"));
	this.a4 = function() {
		var v, au;
		rX = !1, ("en" === (v = r.buffer.data[12].value).split("-")[0].toLowerCase() ? (a8.rV = rT, a8.rW = v, 1) : r.buffer.data[12].value === r.buffer.data[145].value && 0 < r.buffer.data[146].value && (v = r.buffer.data[146].value, (au = r.iy
			.ri(v, !1)).length === v) && !!aV.aW.rj(au) && function(au) {
			for (var u = au.length, b6 = 0; b6 < u; b6++) au[b6] = au[b6].replace("&#39;", "'");
			var rl = r.iy.ri(u, !0);
			if (u !== rl.length) return !1;
			if (!aV.aW.rj(rl)) return !1;
			for (var bA = rT.length, rm = new Array(bA), rn = bA === u, fi = Math.min(u, bA), a5 = 0; a5 < bA; a5++)
				if (rm[a5] = rT[a5], a5 < u && rl[a5] === rm[a5]) rm[a5] = au[a5];
				else {
					rn = !1;
					for (var av = 0; av < fi; av++)
						if (rl[av] === rm[a5]) {
							rm[a5] = au[av];
							break
						}
				} return a8.rV = rm, a8.rW = r.buffer.data[12].value, rn
		}(au)) || (rX = !0)
	}, this.rc = function() {
		fF.rd(), kj.rd(), re.rd(), gK.rd(), rf.a4(), rg = new nZ
	}, this.rh = function() {
		return this.rV === rT || !rT.length
	}, this.ro = function() {
		var rp;
		return !!rX && (rX = !1, 0 !== rT.length) && (rp = r.buffer.data[12].value, f.g.rq(0, rp.slice(0, 20)), !0)
	}, this.rr = function(au) {
		au.length !== rT.length ? 8 === d7.lA && d7.rs().rt(30, 0, 1) : (this.rV = au, this.rW = r.buffer.data[12].value, r.md.pE(145, this.rW), r.md.pE(146, au.length), r.iy.ru(au, !1), r.iy.ru(rT, !0), 8 === d7.lA ? d7.rs().rt(30) : 0 === eW
			.eX() && 5 === d7.lA && d7.i.rv())
	}, this.rw = function() {
		var a7, au = navigator.languages;
		return au && au.length ? (a7 = Math.max(a8.data.a9(au[0]), 0), 1 === au.length ? [a7, a7] : [a7, Math.max(a8.data.a9(au[1]), 0)]) : [0, 0]
	}
}

function cH() {
	var rx = [];
	this.a4 = function() {
		rx = []
	}, this.ry = function() {
		return 65536 === rx.length
	}, this.rz = function(s0, s1) {
		for (var cG = rx, u = cG.length, a5 = 0; a5 < u; a5++) {
			var bB = cG[a5];
			if (bB[0] === s0 && bB[bB.length - 1] === s1) return a5
		}
		return -1
	}, this.s2 = function(mu) {
		var s3 = new Uint32Array(mu.length);
		return s3.set(mu), s3.reverse()
	}, this.s4 = function(bj, bk) {
		var fi = bj.length - 1,
			s5 = new Uint32Array(fi + bk.length);
		return s5.set(bj, 0), s5.set(bk, fi), s5
	}, this.s6 = function(bj, bk, qv, fM, s7) {
		s7 && (qv = (bk = this.s2(bk)).length - qv - 2);
		s7 = bk.subarray(qv + 1 + (fM === bk[qv + 1])), fM = new Uint32Array(bj.length + s7.length);
		return fM.set(bj, 0), fM.set(s7, bj.length), fM
	}, this.s9 = function(mu) {
		return rx.push(mu), rx.length - 1
	}, this.get = function(a5) {
		return rx[a5]
	}, this.sA = function() {
		return rx
	}, this.sB = function(s0, s1) {
		return null
	}
}

function sC() {
	var sD, sE = [],
		sF = -1,
		sG = 0,
		sH = 0;

	function sU() {
		sG = bV.aw, (3 === this.sV ? sT : (sF = (sE.length + sF + 2 * this.sV - 1) % sE.length, sS))()
	}

	function sS() {
		0 !== sE.length && (sH = 0, sD && sD.kD(), (sD = new sW(sU)).pE(sF, sE.length), sD.show(sE[sF]), or.message.resize())
	}

	function sT() {
		sH = 1, sD && sD.kD(), (sD = new sX(sS)).pE(sE.length), sD.show(), or.message.resize()
	}
	this.sI = function(sJ) {
		var ev;
		2 === sJ.id && 3 === sJ.sK ? or.cI.sL(sJ.aE) : (ev = or.cI.sM(sJ, or.cI.sN(sJ)), (5 !== sJ.id && 6 !== sJ.id || (d7.sO(29).sP().sQ(ev), 5 === sJ.id)) && (ev = bV.aw < sG + 2e4, sF !== sE.length - 1 && ev || (sF = sE.length), __fx
			.pingFilter.isMuted(sJ, "a06") || (sE.push(sJ), r.buffer.data[14].value || 7 === sJ.id || kF.play(), sD && (sH && (r.buffer.data[13].value || ev) ? sD.pE(sE.length) : sS()))))
	}, this.show = function() {
		sT()
	}, this.eQ = function() {
		sF = sE.length - 1, sD && sD.kD(), sD = null
	}, this.resize = function() {
		sD && sD.resize()
	}, this.sY = function() {
		return sE
	}
}

function sZ() {
	this.eT = function(l) {
		var sq;
		c.d(55 + pW.sa.bM()), c.e(1, 0), c.e(6, 13), c.e(14, eG.sn), c.e(4, cT.id), c.e(7, cT.oe), c.e(1, +eG.so), c.e(1, +eG.sp), c.e(5, (new Date).getHours() % 24), sq = a8.rw(), c.e(8, sq[0]), c.e(8, sq[1]), pW.sa.aB(), f.i.send(l, c.j)
	}, this.sc = function(l, jH, sd, se) {
		c.d(70), c.e(1, 0), c.e(6, 30), c.e(3, sd), c.e(30, jH), c.e(30, se), f.i.send(l, c.j)
	}, this.sf = function(sg) {
		a3.a4(), a3.e(1, 0), a3.e(6, 6), w.aA.aB(sg, 16, a3), f.i.send(f.i.dw, a3.aC())
	}, this.sh = function(id) {
		c.d(13), c.e(1, 0), c.e(6, 15), c.e(6, id), f.i.send(0, c.j)
	}, this.si = function(id, value) {
		c.d(43), c.e(1, 0), c.e(6, 3), c.e(6, id), c.e(30, value), f.i.send(0, c.j)
	}, this.rq = function(id, v) {
		var u = Math.min(v.length, 63);
		c.d(19 + 16 * u), c.e(1, 0), c.e(6, 26), c.e(6, id), c.e(6, u), w.x.y(v), f.i.send(0, c.j)
	}, this.sj = function(sk, ev) {
		c.d(7 + 26 * ev.length), c.e(1, 0), c.e(6, 9);
		for (var a5 = 0; a5 < ev.length; a5++) c.e(16, ev[a5][0]), c.e(10, ev[a5][1]);
		f.i.send(sk, c.j)
	}, this.kl = function(sl, sm) {
		c.d(20), c.e(1, 0), c.e(6, 19), c.e(1, sl), c.e(12, sm), f.i.send(f.i.dv, c.j)
	}, this.cc = function(username) {
		c.e(5, username.length), w.x.y(username)
	}, this.sr = function(ss, st, l, pow) {
		c.d(88), c.e(1, 0), c.e(6, 8), c.e(3, pow.sd), c.e(30, pow.jH), c.aG(32, st), c.e(16, ss), f.i.send(l, c.j)
	}
}

function su() {
	this.d1 = new sv, this.aW = new sw, this.et = new sx, this.hf = new sy, this.ck = new sz, this.rP = new t0, this.canvas = new rI, this.color = new t1, this.t2 = new dj, this.a4 = function() {
		this.d1.t3()
	}
}

function t4() {
	var t5, canvas, t6, t7;

	function tE(go, name, tF, v) {
		t6[go] = name, canvas[go] = new Image, canvas[go].onload = function() {
			! function(go, tF) {
				var tI, t = null;
				7 === tF ? tI = aV.rP.tJ : 8 === tF ? (tI = aV.rP.tK, t = .1) : 3 === tF ? (tI = aV.rP.tL, t = .06) : 5 === tF ? tI = aV.rP.tM : 6 === tF ? tI = aV.rP.tN : 4 === tF && (tI = aV.rP.tO);
				canvas[go] = aV.rP.tP(canvas[go], tI, t)
			}(go, tF), tH()
		}, canvas[go].onerror = function(ej) {
			console.error("Error loading image at index", go, "Error:", ej), tH()
		}, canvas[go].src = "data:image/png;base64," + v
	}

	function tH() {
		t5--, tB()
	}

	function tB() {
		0 === t5 && (t5 = -1, tD(), bV.bW = !0, canvas[7] = t7, canvas[8] = t7, canvas[9] = t7, canvas[10] = t7, 5 === d7.lA) && d7.rs().tR.resize()
	}

	function tD() {
		gZ.tS(), tT.ky([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== cT.id, 1 !== cT.id, !0, !0, !0]), fo.bb = new tU, fo.bb.a4(), iZ.rd()
	}
	this.a4 = function() {
		if (void 0 === canvas) {
			t5 = 23, canvas = new Array(t5), t6 = new Array(t5), (t7 = document.createElement("canvas")).width = 1;
			for (var a5 = t5 - (t7.height = 1); 0 <= a5; a5--) canvas[a5] = t7;
			tD(), tE(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), tE(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), tE(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), tE(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), tE(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), tE(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), tE(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), tE(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), tE(8,
					"googleplay", 3,
					"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"
					), tE(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), tE(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), tE(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), tE(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), tE(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), tE(14, "bestPlayer", 5,
					"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"
					), tE(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), tE(16, "apple", 3,
					"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"
					), tE(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), tE(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), tE(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), tE(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), tE(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), tE(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(go) {
		return canvas[go]
	}, this.t9 = function(name) {
		for (var a5 = t6.length - 1; 0 <= a5; a5--)
			if (t6[a5] === name) return canvas[a5];
		return t7
	}, this.l6 = function() {
		return t5 <= 0
	}, this.tA = function() {
		t5 = 0, tB()
	}
}

function tV() {
	var kA = 12e3;
	this.show = function(tW) {
		return !tW && !tX.tY() && (0 === cT.id ? tX.tZ.show() : !(bV.aw < kA) && (tW = 1 === cT.id ? 72e4 : 108e4, kA = bV.aw + tW, 2 === eG.ta) && cT.cU.oj(Math.floor(tW)))
	}
}

function tb() {
	var tc, td, te, tf, tg, th = 0;
	this.tR = new ti, te = new ct([.45, .27], [.5, .5], 2 / 3), td = [new ir("⚔️<br>" + L(29), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : tj(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : dZ.tk), new ir("🗡️<br>" + L(30), function() {
			tj(1)
		}, dZ.tl), new ir("🔑<br>" + L(31), function() {
			tj(2)
		}, dZ.tm), new ir("☰<br>" + L(32), function() {
			tj(3)
		}, dZ.tn), new ir("", function() {
			d7.dF(12)
		}, dZ.da, !1),
		new ir("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new ir("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], tf = new lc(r.buffer.data[122]);
	for (var a5 = 0; a5 < td.length; a5++) td[a5].button.style.position = "absolute";

	function tj(go) {
		cT.cU.setState(10), l5.l6() || l5.tA(), 0 === go ? d7.i.tp(1) : 1 === go ? (tq.tr.b8(r.buffer.data[156].value, 1) || cr.ff.ts(), d7.dF(19)) : 2 === go ? 0 !== cT.id || r.buffer.data[140].value ? d7.dF(8, d7.lA, new tt(16)) : d7.i.tu(d7.lA,
			16) : 3 === go && d7.dF(1)
	}
	tf.ej.style.position = "absolute", tf.ej.style.textAlign = "center", tf.ej.placeholder = L(33), this.show = function() {
		eW.setState(0), cT.cU.setState(12), this.tR.show(), td[4].j2(aV.color.tv(r.buffer.data[121].value)), this.resize(), document.body.appendChild(tf.ej);
		for (var a5 = 0; a5 < td.length; a5++) document.body.appendChild(td[a5].button);
		1 !== cT.id || cT.oe < 5 || (tg && bV.aw > tg + 144e5 ? cT.oX.setState(14) : tg = bV.aw)
	}, this.eQ = function() {
		this.tR.eQ(), d7.removeChild(document.body, tf.ej);
		for (var a5 = 0; a5 < td.length; a5++) d7.removeChild(document.body, td[a5].button)
	}, this.resize = function() {
		this.tR.resize(), this.tR.resize(), te.resize();
		var gap = .5 * cz.gap,
			tx = 10 / 99 * .84 * te.aZ,
			tz = .16 * te.b6,
			u0 = .19 * te.aZ,
			aJ = te.aJ + u0,
			tx = te.aK + tx + 3 * gap,
			aZ = .5 * (te.aZ - gap) - u0,
			u0 = te.aZ - 2 * u0 - tz - gap,
			u0 = (aV.d1.u2(tf.ej, aJ, tx, u0, tz), aV.d1.u2(td[4].button, aJ + u0 + gap, tx, tz, tz), th = tx, .5 * (te.aK + te.b6 - (tx += tz + gap) - gap));
		aV.d1.u2(td[0].button, aJ, tx, aZ, u0), aV.d1.u2(td[1].button, aJ + aZ + gap, tx, aZ, u0), aV.d1.u2(td[2].button, aJ, tx + u0 + gap, aZ, u0), aV.d1.u2(td[3].button, aJ + aZ + gap, tx + u0 + gap, aZ, u0);
		aV.d1.u2(td[5].button, aJ, tx + u0 * 2 + gap * 2, aZ * 2 + gap, u0 / 3);
		aV.d1.u2(td[6].button, aJ, tx + u0 * 2.33 + gap * 3, aZ * 2 + gap, u0 / 3);
		for (var a5 = 0; a5 < td.length; a5++) td[a5].button.style.font = aV.d1.d2(0, aV.d1.u3(.065 * te.b6)), aV.d1.k4(td[a5].button, 5);
		tf.ej.style.font = aV.d1.d2(0, aV.d1.u3(.08 * te.b6)), aV.d1.k4(tf.ej, 5)
	}, this.cQ = function() {
		if (eW.u4(), u5.cQ(), u = Math.floor((cT.cU.cV() ? .018 : .0137) * cy.l7), dO.font = aV.d1.d2(0, Math.max(5, u)), aV.d1.textBaseline(dO, 0), aV.d1.textAlign(dO, 2), dO.fillStyle = dZ.dc, dO.fillText(eG.oe, cy.aZ, 0), text =
			"Win count: " + __fx.wins.count, textLength = dO.measureText(text).width, u = Math.max(5, u), dO.textAlign = "left", dO.textBaseline = "middle", dO.fillText(text, dO.canvas.width - textLength - u / 2, 2 * u), rf.cQ(th), tT.cQ(), l5
			.l6()) {
			dO.imageSmoothingEnabled = !1;
			var text = l5.t9("territorial.io"),
				textLength = .84 * te.aZ / text.width;
			dO.setTransform(textLength, 0, 0, textLength, te.aJ + .08 * te.aZ, te.aK), tc = tc || aV.rP.tP(text, aV.rP.u8, [0, 0, 0]);
			for (var aJ = -1; aJ <= 1; aJ += 2)
				for (var aK = -1; aK <= 1; aK += 2) dO.drawImage(tc, aJ, aK);
			dO.drawImage(text, 0, 0), dO.imageSmoothingEnabled = !0;
			var u = l5.t9("logo"),
				uA = .6666 * textLength * text.height / u.height,
				hb = .5 * cy.aZ,
				hc = te.aK + .5 * textLength * text.height - .5 * uA * u.height;
			dO.setTransform(uA, 0, 0, uA, hb - .6 * textLength * text.width, hc), dO.drawImage(u, 0, 0), dO.setTransform(uA, 0, 0, uA, hb + .6 * textLength * text.width - uA * u.width, hc), dO.drawImage(u, 0, 0), dO.setTransform(1, 0, 0, 1, 0,
				0), dO.imageSmoothingEnabled = !0
		}
	}
}

function uB() {
	var au, jr, uC, uD, gap, uE, uF, uG, uH, uI, ly, uJ, hi, uK, uL, jK, uM;

	function uQ() {
		uD = Math.floor(.2 * (cT.cU.cV() ? .07 : .035) * cy.l7), uD = uS(cT.cU.cV() ? 3 : 1, uD);
		var uT = cy.aZ / (au.length + gap);
		uD = uD < uT ? uT : uD, uL = Math.floor((1 - gap) * uD), jr = 0, uU()
	}

	function uU() {
		jr = (jr = jr < -20 ? -20 : jr) > (au.length - 15) * uD ? (au.length - 15) * uD : jr, uF = Math.floor(jr / uD), uG = (uG = uF + Math.floor(cy.aZ / uD)) > au.length - 1 ? au.length - 1 : uG, uF = (uF = uG < uF ? uG : uF) < 0 ? 0 : uF;
		var bA = uG;
		uE = uC / au[bA];
		for (var a5 = uG - 1; uF <= a5; a5--) au[a5] > au[bA] && (bA = a5, uE = uC / Math.pow(au[a5], uK))
	}

	function uX(aJ) {
		aJ = Math.floor((jr + cy.aZ - aJ - gap * uD) / uD);
		return (aJ = aJ < -1 ? -1 : -1 === aJ ? 0 : aJ > au.length - 1 ? -1 : aJ) !== uH && (uH = aJ, -1 === jK && 0 === uH && u5.uN && (jK = setInterval(uY, 100)), 1)
	}

	function ua(a5) {
		var lk = Math.floor(uE * Math.pow(au[a5], uK));
		dO.fillRect(jr + cy.aZ - (a5 + 1) * uD, cy.b6 - lk, uL, lk)
	}

	function uY() {
		var bB;
		0 !== (uH = 8 === eW.eX() ? -1 : uH) ? (uM = (new Date).getTime(), clearInterval(jK), jK = -1) : (bB = au[1] / 864e3, -1 !== uM && (bB += ((new Date).getTime() - uM) * au[1] / 864e5, uM = -1), 0 < bB && (au[0] += Math.floor(bB), bV.bW = !0))
	}
	this.uN = !1, this.a4 = function() {
		uM = jK = -1, uH = -(uK = 1), this.uO = !1, hi = 0, uJ = new Date, jr = 0, gap = .3, au = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		uC = Math.floor(.15 * cy.b6), uI = (uI = Math.floor((cT.cU.cV() ? .018 : .0137) * cy.l7)) < 2 ? 2 : uI, ly = aV.d1.d2(1, uI), uQ()
	}, this.uR = function(rm) {
		var a5;
		for (this.uN = !0, a5 = 0; a5 < rm.length; a5++) au.unshift(rm[a5]);
		uQ(), bV.bW = !0
	}, this.uV = function() {
		uU()
	}, this.rB = function(aJ, aK) {
		aK > cy.b6 - .6 * uC ? this.uO ? aJ !== hi && (jr += aJ - hi, hi = aJ, uU(), uX(aJ), this.uO = -1 !== uH, bV.bW = !0) : uX(aJ) && (bV.bW = !0) : this.reset()
	}, this.reset = function() {
		-1 !== uH && (this.uO = !1, uH = -1, bV.bW = !0)
	}, this.rG = function(aJ, deltaY) {
		-1 !== uH && (jr += Math.floor(deltaY), uU(), uX(aJ), bV.bW = !0)
	}, this.dB = function(aJ, aK) {
		this.rB(aJ, aK), -1 !== uH && (hi = aJ, this.uO = !0)
	}, this.rE = function() {
		-1 !== uH && (this.uO = !1)
	}, this.cQ = function() {
		dO.fillStyle = dZ.uZ;
		for (var ue, month, kG, df, uh, ui, dh, uj, uk, a5 = uG; uF <= a5; a5--) ua(a5);
		this.uN && 0 === uF && (dO.fillStyle = dZ.ub, ua(0)), -1 !== uH && (dO.fillStyle = dZ.uc, ua(uH)), -1 !== uH && (dO.font = ly, aV.d1.textBaseline(dO, 2), (kG = new Date).setTime(uJ.getTime() - 1e3 * uH * 60 * 60 * 24), month = "month",
			ue = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(kG), ue = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(kG)), ue = ue + ", " + kG.getUTCDate() + " " + month + " " + kG.getFullYear(), month = 1 === au[uH] ? L(34) : L(35), month = aV.hf.hg(au[uH]) + " " + month, kG = Math.floor(dO.measureText(ue).width), df = Math.floor(dO
				.measureText(month).width), uh = Math.floor(.5 * (kG + uI)), ui = (ui = jr + cy.aZ - (uH + 1) * uD) < uh ? uh : ui > cy.aZ - uh ? cy.aZ - uh : ui, dh = cy.b6 - Math.floor(uE * Math.pow(au[uH], uK)), uj = Math.floor(1.1 * uI),
			uk = dh > cy.b6 - uj ? cy.b6 - uj : dh, dO.fillStyle = dZ.f6, dO.fillRect(cy.aZ - df - uI, uk - uj, df + uI, uj), dO.fillRect(ui - uh, cy.b6 - uj, kG + uI, uj), dO.fillStyle = dZ.dc, aV.d1.textAlign(dO, 2), dO.fillText(month, Math
				.floor(cy.aZ - .5 * uI), uk), aV.d1.textAlign(dO, 1), dO.fillText(ue, ui, cy.b6), dO.strokeStyle = dZ.ul, dO.lineWidth = 1, dO.beginPath(), dO.moveTo(0, dh), dO.lineTo(cy.aZ, dh), dO.closePath(), dO.stroke())
	}
}

function um() {
	this.b8 = function(un) {
		for (var bF = bG, size = bF.bM(un), uo = 7 + 9 * bF.bM(1), au = [], a5 = 0; a5 < size; a5++) au.push(String.fromCharCode(bF.bM(uo)));
		return au.join("")
	}
}

function up() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
			"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
		], this.uq = 13, this.ur = this.emojis.length, this.fq = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.fq, this.us = 1024, this.fr = this.emojis.indexOf("💀"),
		this.ut = this.fr + 1, this.uu = this.emojis.indexOf("🥇"), this.uv = this.emojis.indexOf("😊"), this.uw = function(kv) {
			return kv < this.fq ? String.fromCharCode(55356, 56806 + aQ.aR(kv, 26), 55356, 56806 + kv % 26) : this.emojis[Math.min(kv - this.fq, this.ur - 1)]
		}, this.ux = function(v) {
			for (var u = v.length - 2, au = [], a5 = 0; a5 < u; a5++) {
				var uy = v.charCodeAt(a5) - 56806,
					u9 = v.charCodeAt(a5 + 2) - 56806;
				0 <= uy && uy < 26 && 0 <= u9 && u9 < 26 && (au.push(26 * uy + u9), a5 += 3)
			}
			return au
		}, this.uz = function(kv) {
			return kv < this.fq
		}, this.v0 = function(kv) {
			return kv >= 1024 - this.uq
		}, this.v1 = function(kv) {
			return kv >= this.fq && kv < this.fq + this.ut
		}
}

function v2() {
	function v5(ej) {
		vG(ej), d7.dF(4, 5, new ol("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new ir("⬅️ " + L(4), function() {
				d7.lO()
			}), new ir("🔄 Reload", function() {
				cT.cU.og()
			}, dZ.vI)]))
	}

	function vE(ej) {
		vG(ej), d7.dF(4, 5, new ol(L(36), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [ej] ?? vA(ej), !0))
	}

	function vA(ej) {
		var v = " [" + ej + "]";
		return 3249 === ej || 1006 === ej ? "No Internet / No Server Response / Server Restart" + v : 4527 === ej ? "Player already in lobby" + v : 4577 === ej ? "Your IP is banned." + v : 4530 === ej ? "Lobby Timeout" + v : 4528 === ej ?
			"Lobby Kick: Another login detected." + v : 4540 === ej ? "You have been kicked." + v : 4495 === ej ? "Account doesn't exist." : 4229 === ej ? "Bad Internet / Unresponsive Client" + v : 4555 === ej ? "This Account is blocked." + v :
			4580 === ej ? "More Gold needed" + v : 4557 <= ej && ej <= 4560 || 4589 == ej ? "Please try again later!" + v : 4591 === ej ? "The algo determined you are a bot." + v : "Unknown error" + v
	}

	function vG(ej) {
		v7(ej), d7.i.vJ()
	}

	function v7(ej) {
		4540 === ej && f.i.ee(ej);
		var jL = eW.eX();
		vK.close(), 6 === jL ? f.i.ee(ej) : or.v6 ? (d7.vL(), or.kD(), f.i.close(f.i.dw, 3256)) : 8 === jL && cr.vM(!0)
	}
	this.v3 = [], this.ek = function(l, ej) {
		if (1 === l && __fx.customLobby.isActive() && 6 !== eW.eX() && __fx.customLobby.setActive(!1), this.v3.push(ej), 4321 === ej && (data = r.i.v4(0), console.log("Reset to: " + data.aE), r.md.pE(105, data.aE), r.md.pE(106, data.password)),
			8 === d7.lA && 0 === l)
			if (4211 === ej) v5(ej);
			else {
				if (or.v6 && (4495 === ej || 4480 === ej) && f.i.dw !== l) return void d7.lO();
				if (8 !== eW.eX() && v7(), 4480 === ej) return r.md.vH(), void d7.dF(4, 0, new ol(L(38), L(39), !0));
				var data = 0;
				d7.rs() && 10 === d7.rs().eL && (data = d7.rs().eL), d7.dF(4, data, new ol(L(36), vA(ej), !0))
			}
		else {
			data = eW.eX();
			if (6 === data) {
				if (4211 === ej) return void v5(ej);
				if (4215 !== ej && 4516 !== ej && 4527 !== ej && 4533 !== ej && 4528 !== ej && !(4557 <= ej && ej <= 4560) && 4577 !== ej && 4576 !== ej) return void eC.vB(l)
			} else if (or.v6) {
				if (l !== f.i.dw) return
			} else {
				if (8 === data) return void(l !== f.i.dv || cr.eh || 1 !== cr.d6 || cr.cs || ew.vC(L(37, [ej])));
				if (!(4579 <= ej && ej <= 4589)) return
			}(4591 === ej ? function(ej) {
				vG(ej), d7.dF(4, 5, new ol("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new ir("⬅️ " + L(4), function() {
					d7.lO()
				}), new ir("🔄 Reload", function() {
					cT.cU.og()
				}, dZ.vI)]))
			} : vE)(ej)
		}
	}, this.ed = function(ej) {
		this.v3.push(ej), 8 === eW.eX() ? cr.eh || 1 !== cr.d6 || ew.vC(L(37, [ej])) : vE(ej)
	}, this.vF = function() {
		this.v3.push(3268), vG(3268)
	}
}

function vN() {
	this.vO = new ik, this.a4 = function() {
		this.vO.resize()
	}
}

function vP() {
	var vQ = vR(),
		vS = vT(),
		vU = vV();
	this.bM = function() {
		return 123
	}, this.aB = function() {
		o.p.q(r.buffer.data[183].value, 15), c.e(14, vQ), c.e(7, vS), c.e(12, vU)
	}
}

function tU() {
	this.d8 = !1;
	this.ko = [], this.kn = 100;
	var dg, dh, gap, gp, vW, vY, vZ = 0,
		va = new Array(9),
		vb = [],
		vc = [],
		vd = 0,
		ve = 0,
		vf = 0,
		vg = 0;

	function vq() {
		va.sort(function(a6, av) {
			return av.vn - a6.vn
		});
		for (var v = "" + va[0].vm, a5 = 1; a5 < 9; a5++) v += "," + va[a5].vm;
		for (a5 = 0; a5 < 9; a5++) v += "," + va[a5].vn;
		r.buffer.od(120, v)
	}
	this.a4 = function() {
		for (var vh = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a5 = 0; a5 < vh.length; a5++) {
			var color = 6 === vh[a5] ? dZ.vi : dZ.vj;
			this.ko.push(aV.canvas.rJ(l5.get(3), vh[a5], color))
		}
		for (a5 = 0; a5 < fo.fp.uq; a5++) vc.push(fo.fp.us - fo.fp.uq + a5);
		for (a5 = 0; a5 < fo.fp.ur; a5++) vc.push(fo.fp.fq + a5);
		var vk = fo.fp.ux(l0.vk);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = vk.slice(), a5 = 0; a5 < vk.length; a5++) vc.push(vk[a5]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					va[q] = {
						vm: isNaN(qcode) ? 1015 + q : qcode,
						vn: 0
					}
				} else {
					var a5, au = r.buffer.data[120].value.split(",");
					if (18 !== au.length)
						for (a5 = 0; a5 < 9; a5++) va[a5] = {
							vm: 1015 + a5,
							vn: 0
						};
					else
						for (a5 = 0; a5 < 9; a5++) {
							var kv = parseInt(au[a5]),
								jA = (kv = 0 <= kv && kv < fo.fp.us ? kv : 0, parseInt(au[a5 + 9]));
							jA = 0 <= jA && jA < 1e3 ? jA : 0, va[a5] = {
								vm: kv,
								vn: jA
							}
						}
				}
		}()
	}, this.show = function(jp, jq, nL) {
		var a5;
		if (vd = jp, ve = jq, vZ = nL || 0, this.d8 = !0, vb = [], 0 === vZ)
			for (a5 = 0; a5 < 9; a5++) vb.push(va[a5].vm);
		else {
			var av = 49 * vZ,
				nL = av - 49;
			for (nL >= vc.length && (vZ = 1, nL = 0, av = 49), a5 = nL = (av = Math.min(av, vc.length)) - 49; a5 < av; a5++) vb.push(vc[a5])
		}
		vb.push(1024);
		nL = vb.length, gp = Math.floor((cT.cU.cV() ? .075 : .0468) * cy.l7), gap = Math.floor(gp / 3), (vf = 10 * (vW = gp + gap)) > cy.aZ && (vf = cy.aZ, gap = (vW = vf / 10) - (gp = 3 * vW / 4)), vY = aQ.aR(nL, 10) + !!(nL % 10), (vg = vY *
			vW) > cy.b6 && (vg = cy.b6, gap = (vW = vg / vY) - (gp = 3 * vW / 4)), nL = .5 * gap;
		dg = Math.min(Math.max(jp - .5 * vf + nL, nL), cy.aZ - vf + nL), dh = Math.min(Math.max(jq - .5 * vg + nL, nL), cy.b6 - vg + nL)
	}, this.dB = function(jp, jq, player) {
		if (!this.d8) return !1;
		if (this.r5(jp, jq)) {
			jp = aQ.ld(aQ.aR(jp - dg + .5 * gap, vW), 0, 9);
			if ((jp += 10 * aQ.ld(aQ.aR(jq - dh + .5 * gap, vW), 0, 9)) >= vb.length) return gZ.eQ(), !0;
			jq = vb[jp];
			if (1024 === jq) return this.show(vd, ve, vZ + 1), !0;
			! function(vm) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var a5 = 0; a5 < 9; a5++) va[a5].vn = Math.floor(.99 * va[a5].vn);
					for (a5 = 0; a5 < 9; a5++)
						if (vm === va[a5].vm) return va[a5].vn = Math.min(va[a5].vn + 30, 999), vq();
					va.splice(5, 0, {
						vm: vm,
						vn: Math.max(va[4].vn, 30)
					}), va.pop(), vq()
				}
			}(jq), player === cr.gJ ? i2.i3.vs(jq) : i2.et.vt(jq, player)
		}
		return gZ.eQ(), !0
	}, this.r5 = function(jp, jq) {
		return !(jp < dg - .5 * gap || jq < dh - .5 * gap || dg + vf - .5 * gap <= jp || dh + vg - .5 * gap <= jq)
	}, this.cQ = function() {
		dO.fillStyle = dZ.f6, dO.fillRect(dg - .5 * gap, dh - .5 * gap, vf, vg);
		for (var b4 = .5 * cz.qm, u = (dO.lineWidth = cz.qm, dO.strokeStyle = dO.fillStyle = dZ.dc, dO.strokeRect(dg - .5 * gap + b4, dh - .5 * gap + b4, vf - 2 * b4, vg - 2 * b4), dO.imageSmoothingEnabled = !0, vb.length), a5 = 0; a5 < u; a5++)
			this.vu(vb[a5], dO, dg + a5 % 10 * vW, dh + aQ.aR(a5, 10) * vW, gp);
		dO.imageSmoothingEnabled = !1
	}, this.vu = function(vm, gq, aJ, aK, gp) {
		var gt;
		vm >= 1024 - fo.fp.uq ? (gt = gp / this.kn, gq.setTransform(gt, 0, 0, gt, aJ, aK), gq.drawImage(this.ko[vm - 1024 + fo.fp.uq], 0, 0), gq.setTransform(1, 0, 0, 1, 0, 0)) : (aV.d1.textAlign(gq, 1), aV.d1.textBaseline(gq, 1), gq.font = aV.d1
			.d2(0, .89 * gp), gq.fillText(fo.fp.uw(vm), aJ + .5 * gp, aK + (.35 - aV.d1.vv + .56) * gp))
	}
}

function vw() {
	this.vx = new tV, this.tZ = new vy, this.turnstile = new vz, this.a4 = function() {
		cT.cU.oi(), this.turnstile.a4()
	}, this.tY = function() {
		return r.buffer.data[160].value
	}
}

function w0() {
	"function" != typeof Math.log2 && (Math.log2 = function(aJ) {
		return Math.log(aJ) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aJ) {
		return Math.log(aJ) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aJ) {
		return 0 < aJ ? 1 : aJ < 0 ? -1 : 0
	})
}

function w1() {
	this.bK = null, this.w2 = null, this.w3 = null, this.a4 = function() {
		this.w4 = [L(40), L(41), L(42), L(43), L(44), L(45), L(46), L(47), L(48), L(49), L(50), L(51), L(52), L(53), L(54), L(55), L(56), L(57), L(58), L(59), L(60), L(61), L(62), L(63), "Mare Nostrum"];
		var w5 = [120, 105, 92],
			cos = [12, 12, 60],
			w6 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			w7 = [140, 130, 120],
			w8 = [12, 12, 76],
			w9 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			wA = [130, 117, 106],
			wB = [12, 12, 68],
			wC = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.bK = new Array(aS.wF + 1), __fx.customLobby.setMapInfo(this.bK), this.bK[0] = {
			aZ: 230,
			b6: 230,
			wG: 1e3,
			wH: 2e3,
			jb: 173
		}, this.bK[1] = {
			aZ: 800,
			b6: 800,
			wG: 100,
			wH: 50,
			jb: 43
		}, this.bK[2] = {
			aZ: 512,
			b6: 512,
			wG: 128,
			wH: 32,
			jb: 0
		}, this.bK[3] = {
			aZ: 960,
			b6: 960,
			wG: 60,
			wH: 8,
			jb: 0
		}, this.bK[4] = {
			aZ: 900,
			b6: 900,
			wG: 100,
			wH: 5,
			jb: 0
		}, this.bK[5] = {
			aZ: 1e3,
			b6: 1e3,
			wG: 100,
			wH: 40,
			jb: 0
		}, this.bK[6] = {
			aZ: 1e3,
			b6: 1e3,
			wG: 100,
			wH: 20,
			jb: 0
		}, this.bK[7] = {
			aZ: 1024,
			b6: 1024,
			wG: 128,
			wH: 32,
			jb: 0
		}, this.bK[8] = {
			aZ: 820,
			b6: 820,
			wG: 200,
			wH: 100,
			jb: 0
		}, this.bK[9] = {
			aZ: 1024,
			b6: 1024,
			wG: 128,
			wH: 32,
			jb: 0
		}, this.bK[10] = {
			bs: w7,
			bt: w8,
			jY: w9
		}, this.bK[11] = {
			bs: wA,
			bt: wB,
			jY: wC
		}, this.bK[12] = {
			bs: wA,
			bt: wB,
			jY: wC
		}, this.bK[13] = {
			bs: w5,
			bt: cos,
			jY: w6
		}, this.bK[14] = {
			bs: w5,
			bt: cos,
			jY: w6
		}, this.bK[15] = {
			bs: w7,
			bt: w8,
			jY: w9
		}, this.bK[16] = {
			bs: w7,
			bt: w8,
			jY: w9
		}, this.bK[17] = {
			bs: w5,
			bt: cos,
			jY: w6
		}, this.bK[18] = {
			bs: wA,
			bt: wB,
			jY: wC
		}, this.bK[19] = {
			bs: w5,
			bt: cos,
			jY: w6
		}, this.bK[20] = {
			aZ: 1024,
			b6: 1024,
			wG: 128,
			wH: 32,
			jb: 0
		}, this.bK[21] = {
			aZ: 940,
			b6: 940,
			wG: 80,
			wH: 8,
			jb: 0
		}, this.bK[22] = {
			bs: wA,
			bt: wB,
			jY: wC
		}, this.bK[23] = {
			bs: w7,
			bt: w8,
			jY: w9
		}, this.bK[24] = {
			bs: [157, 136, 117],
			bt: [16, 13, 68],
			jY: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			wI: "[OG] Neutronian"
		};
		for (var a5 = 0; a5 < aS.wF; a5++) this.bK[a5].name = this.w4[a5];
		this.bK[aS.wF] = {
			name: ""
		}, this.w2 = new Uint8Array(12);
		for (a5 = 0; a5 < 10; a5++) this.w2[a5] = a5;
		for (this.w2[10] = 20, this.w2[11] = 21, this.w3 = new Uint8Array(aS.wJ), a5 = 0; a5 < 10; a5++) this.w3[a5] = 10 + a5;
		this.w3[10] = 22, this.w3[11] = 23, this.w3[12] = 24
	}
}

function wK() {
	this.kb = null, this.bW = !1, this.aw = 0, this.mV = 56;
	var wL = 0;

	function wN() {
		bV.aw = wL = performance.now(), bV.kb.ar(), window.requestAnimationFrame(wN)
	}
	this.a4 = function() {
		this.wM(), window.requestAnimationFrame(wN), this.aw = performance.now()
	}, this.wO = function() {
		cr.cs ? (this.kb = new wP, this.kb.a4()) : cr.eh ? this.kb = new wQ : (this.kb = new wR, this.kb.a4())
	}, this.wM = function() {
		this.kb = new wS, this.bW = !0
	}, this.ar = function() {
		this.kb.wT++
	}, this.es = function() {
		return this.kb.wT
	}, this.wU = function() {
		var kG = performance.now();
		kG < wL + 1e3 || (this.aw = kG, this.kb.ar())
	}
}

function wV(gp, size, ch, wW, font) {
	var a5, wY = .2,
		canvas = document.createElement("canvas"),
		gq = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = gp, canvas.height = gp, gq.font = size + font, gq.textAlign = "center", gq.textBaseline = "middle", gq.fillStyle = "red", a5 = 0; a5 < ch.length; a5++) gq.fillText(ch[a5], .5 * gp, .5 * gp);
	return -1 < (canvas = function(gr) {
		var a5, jn, ba = gr.data;
		for (a5 = ba.length - 4; 0 <= a5; a5 -= 4)
			if (jn = ba[a5], wW <= jn) return Math.floor(a5 / (4 * gp));
		return -1
	}(gq.getImageData(0, 0, gp, gp))) && (wY = (canvas - .5 * gp + .1 * size) / size), Math.max(wY, 0)
}

function wa() {
	var wb, wc, wd, we, wf, wg, wh, wi, wj, wk, wl, wm, wn, wo, wp, wq, wr, ws, wu, wv, ww, wx, wy, x4, x5, wt = null,
		x0 = 0,
		x1 = !1,
		x2 = new Float32Array(4),
		x3 = 0,
		qa = 112,
		x6 = 0;

	function nw() {
		wj = Math.floor(+cy.l7), wk = Math.floor(.5 * wj), wt.width = cy.aZ, wt.height = cy.b6, wu = wt.getContext("2d", {
			alpha: !0
		}), aV.d1.textAlign(wu, 1), aV.d1.textBaseline(wu, 1), wu.imageSmoothingEnabled = !0
	}

	function x7() {
		var a5, xF;
		for (dO.font = aV.d1.d2(1, 100 * wl), xF = 80 / Math.floor(dO.measureText(aV.hf.hg(cr.xG)).width), dO.font = aV.d1.d2(1, 100), a5 = cr.fc - 1; 0 <= a5; a5--) wi[a5] = 100 / Math.floor(dO.measureText(f4.f5[a5]).width), wh[a5] = Math.min(xF,
			wi[a5])
	}

	function xH(a5) {
		return !x6 || (a5 = f4.g2[a5]) < 1e6 ? 1 : a5 < 1e7 ? x2[0] : x2[Math.min(Math.floor(Math.log10(a5)) - 6, 3)]
	}

	function xE(gq) {
		x1 = !1, x0 = bV.aw, ws = !1, wr = 1, wp = wq = 0, gq.clearRect(0, 0, cy.aZ, cy.b6);
		for (var xU, xV, a5, xW, fontSize, xX, dg = hZ / hY, dh = ha / hY, hb = (cy.aZ + hZ) / hY, hc = (cy.b6 + ha) / hY, xY = 0 !== f4.fv[cr.gJ] && !aV.et.jy(cr.gJ), a6 = f8.f9 - 1; 0 <= a6; a6--) a5 = f8.fB[a6], (fontSize = Math.floor(wo * hY *
			xH(a5) * wh[a5] * wf[a5])) < wn || wj <= fontSize || wd[a5] + wf[a5] > dg && wd[a5] < hb && we[a5] + wg[a5] > dh && we[a5] < hc && (xU = Math.floor(cy.aZ * (wd[a5] + wf[a5] / 2 - dg) / (hb - dg)), xV = Math.floor(cy.b6 * (we[a5] + wg[
				a5] / 2 - dh) / (hc - dh) - .1 * fontSize), xW = fK.jS[a5], gq.font = aV.d1.d2(1 === f4.fu[a5] ? 4 : 1, fontSize), gq.fillStyle = xZ(fontSize, xW % 2), x6 ? xa(gq, a5, fontSize, xU, xV, xW) : xb(a5, fontSize, xU, xV, gq), ws = !0,
			0 < ww[a5] ? function(xU, xV, fontSize, a5, gq) {
				0 === fD[a5] ? fo.fp.uz(wv[a5]) ? (function(xU, xV, fontSize, player, vm, gq) {
					for (var xk = xV, wY = (gq.globalAlpha = xl(fontSize), xH(player) * (x6 ? x3 : wi[player])), xj = xU - .5 * fontSize / wY - .9 * fontSize, av = 0; av < 2; av++) gq.fillText(fo.fp.uw(vm), xj, xk), xj = xU + .5 *
						fontSize / wY + .9 * fontSize;
					gq.globalAlpha = 1
				}(xU, xV, fontSize, a5, wv[a5], gq), xd(xU, xV, fontSize, 0, 0, gq)) : fo.fp.v1(wv[a5]) ? (xo(xU, xV, fontSize, wv[a5], 0, gq), xd(xU, xV, fontSize, 0, 1, gq)) : (xo(xU, xV, fontSize, wv[a5], 1, gq), xd(xU, xV, fontSize, 1, 0,
					gq)) : xo(xU, xV, fontSize, wv[a5], 0, gq)
			}(xU, xV, fontSize, a5, gq) : 0 === fD[a5] && xd(xU, xV, fontSize, 0, 0, gq), xY && (0 < ww[a5 + cr.fc] || 0 < ww[a5 + 2 * cr.fc] || 0 < ww[a5 + 3 * cr.fc] || 0 < ww[a5 + 4 * cr.fc]) && function(xU, xV, fontSize, a5, gq) {
				var jA, fi = -1;
				for (jA = 4; 1 <= jA; jA--) 0 < ww[a5 + jA * cr.fc] && fi++;
				for (jA = 1; jA < 5; jA++) 0 < ww[a5 + jA * cr.fc] && (! function(xU, xV, fontSize, jA, a5, xh, kG, gq) {
					var gj;
					if (1 === jA) {
						a5 = wv[a5 + cr.fc];
						if (!fo.fp.v0(a5)) return function(xU, xV, fontSize, vm, xh, gq) {
							gq.globalAlpha = xl(fontSize);
							xU -= .534 * xh * fontSize, xh = xV + 1.59 * fontSize;
							gq.font = aV.d1.d2(0, .785 * fontSize), gq.fillText(fo.fp.uw(vm), xU, xh), gq.globalAlpha = 1
						}(xU, xV, fontSize, a5, xh, gq);
						gj = fo.bb.ko[a5 - 1024 + fo.fp.uq]
					} else gj = 2 === jA ? gZ.xq()[4].canvas[+(kG < 255)] : (3 === jA ? gZ.xq()[5] : gZ.xq()[6]).canvas[0];
					a5 = fo.bb.kn, kG = .8 * fontSize / a5, jA = xU - .5 * kG * a5 - .534 * xh * fontSize, xU = xV + 1.4 * kG * a5;
					gq.setTransform(kG, 0, 0, kG, jA, xU), gq.globalAlpha = xl(fontSize), gq.drawImage(gj, 0, 0), gq.globalAlpha = 1, gq.setTransform(1, 0, 0, 1, 0, 0)
				}(xU, xV, fontSize, jA, a5, fi, ww[a5 + jA * cr.fc], gq), fi -= 2)
			}(xU, xV, fontSize, a5, gq), (xX = wl * fontSize) < wn || (gq.font = aV.d1.d2(1, xX), xV += Math.floor(.78 * fontSize), x6 ? xb(a5, xX, xU, xV, gq) : xa(gq, a5, xX, xU, xV, xW)))
	}

	function xb(a5, fontSize, aJ, aK, gq) {
		var ___id = a5;
		var showName = a5 < cr.fb || !__fx.settings.hideBotNames;
		if (showName) gq.fillText(f4.f5[a5], aJ, aK), a5 < cr.fb && 2 !== f4.fu[a5] || (a5 = fontSize / wi[a5], gq.fillRect(aJ - .5 * a5, aK + aV.d1.vv * fontSize, a5, Math.max(1, .1 * fontSize)));
		x6 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (gq.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			gq.fillText(__fx.utils.getDensity(___id), aJ, showName ? aK + fontSize : aK)
		);
	}

	function xa(gq, a5, fontSize, xU, xV, xW) {
		var gC = f4.gC[a5],
			xg = aV.hf.hg(f4.g2[a5] - gC);

		function drawDensity() {
			!x6 && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (gq.fillStyle = __fx.utils.textStyleBasedOnDensity(a5)), gq.fillText(__fx.utils.getDensity(a5), xU, xV + fontSize))
		}
		gC ? (gC = gq.fillStyle, gq.fillStyle = xZ(fontSize, 2 + xW % 2), gq.fillText(xg, xU, xV), gq.fillStyle = gC) : xW >> 1 & 1 ? (gq.lineWidth = .05 * fontSize, gq.strokeStyle = xZ(fontSize, xW % 2), gq.strokeText(xg, xU, xV)) : (1 < xW && (gq
			.lineWidth = .12 * fontSize, gq.strokeStyle = xZ(fontSize, xW), gq.strokeText(xg, xU, xV)), gq.fillText(xg, xU, xV)), drawDensity()
	}

	function xd(xU, xV, fontSize, xh, xi, gq) {
		var qu = .95 * fontSize / wy,
			xU = xU - .5 * qu * wx + .8 * xh * fontSize,
			xh = xV - 1.76 * qu * wy - (.35 - aV.d1.vv + .7) * xi * fontSize;
		gq.setTransform(qu, 0, 0, qu, xU, xh), gq.globalAlpha = xl(fontSize), gq.drawImage(l5.get(4), 0, 0), gq.globalAlpha = 1, gq.setTransform(1, 0, 0, 1, 0, 0)
	}

	function xo(xU, xV, fontSize, vm, xh, gq) {
		var gp, xj, qu;
		gq.globalAlpha = xl(fontSize), fo.fp.v0(vm) ? (gp = fo.bb.kn, gq.setTransform(qu = 1.1 * fontSize / gp, 0, 0, qu, xj = xU - .5 * qu * gp - .8 * xh * fontSize, qu = xV - 1.55 * qu * gp), gq.drawImage(fo.bb.ko[vm - 1024 + fo.fp.uq], 0, 0), gq
			.setTransform(1, 0, 0, 1, 0, 0)) : (xj = xU - .8 * xh * fontSize, qu = xV - (.35 - aV.d1.vv + 1) * fontSize, gq.fillText(fo.fp.uw(vm), xj, qu)), gq.globalAlpha = 1
	}

	function xZ(fontSize, xW) {
		return wk <= fontSize && fontSize < wj ? fF.xr[xW] + xl(fontSize).toFixed(3) + ")" : fF.xs[xW]
	}

	function xl(fontSize) {
		return wk <= fontSize && fontSize < wj ? 1 - (fontSize - wk) / (wj - wk) : 1
	}

	function y5(wY, aZ) {
		return 1 + Math.floor(wm * wY * aZ)
	}

	function y2(a5) {
		for (var left = wd[a5], a6 = wd[a5] - f4.fw[a5] - 1; 0 <= a6; a6--)
			if (!y9(a5, --left, we[a5], wg[a5])) {
				left++;
				break
			} var right = wd[a5];
		for (a6 = f4.fy[a5] - wd[a5] - wf[a5]; 0 <= a6; a6--)
			if (!y9(a5, ++right + wf[a5] - 1, we[a5], wg[a5])) {
				right--;
				break
			} var aJ = Math.floor((left + right) / 2),
			top = we[a5];
		for (a6 = we[a5] - f4.fx[a5] - 1; 0 <= a6; a6--)
			if (!yA(a5, aJ, --top, wf[a5])) {
				top++;
				break
			} var bottom = we[a5];
		for (a6 = f4.fz[a5] - we[a5] - wg[a5]; 0 <= a6; a6--)
			if (!yA(a5, aJ, ++bottom + wg[a5] - 1, wf[a5])) {
				bottom--;
				break
			} var aK = Math.floor((top + bottom) / 2);
		xz(a5, aJ, aK, wf[a5], wg[a5]) && (wd[a5] = aJ, we[a5] = aK)
	}

	function xz(player, aJ, aK, aZ, b6) {
		ba = Math.floor(.2 * aZ);
		for (var ba, jA = aJ + aZ - 1; aJ <= jA; jA--)
			if (!y9(player, jA, aK, b6)) return;
		for (jA = aK + b6 - 1 - (ba = (ba = Math.floor(.25 * b6)) < 1 ? 1 : ba); aK + ba <= jA; jA--)
			if (!yA(player, aJ, jA, aZ)) return;
		return 1
	}

	function y9(player, aJ, aK, b6) {
		return fK.pm(player, 4 * (aK * aS.aT + aJ)) && fK.pm(player, 4 * ((aK + b6 - 1) * aS.aT + aJ))
	}

	function yA(player, aJ, aK, aZ) {
		return fK.pm(player, 4 * (aK * aS.aT + aJ)) && fK.pm(player, 4 * (aK * aS.aT + aJ + aZ - 1))
	}
	this.a4 = function() {
		if (x6 = r.buffer.data[7].value || 8 === cr.fW, ws = !1, wo = .88, wl = .5, wm = 1.8, wn = 12 - 3 * r.buffer.data[9].value, wc = wb = 0, wd = new Uint16Array(cr.fc), we = new Uint16Array(cr.fc), wf = new Uint16Array(cr.fc), wg =
			new Uint16Array(cr.fc), wh = new Float32Array(cr.fc), wi = new Float32Array(cr.fc), wv = new Uint16Array(2 * cr.fc), ww = new Uint8Array(5 * cr.fc), x4 = new Uint8Array(cr.fc), x5 = new Uint8Array(cr.fc), wt = wt || document
			.createElement("canvas"), nw(), wq = wp = 0, wr = 1, x6) {
			var a5, xF;
			for (x7(), dO.font = aV.d1.d2(1, 100), xF = 100 / Math.floor(dO.measureText("900 000").width), a5 = cr.fc - 1; 0 <= a5; a5--) wh[a5] = Math.min(xF, 2 * wi[a5]);
			x3 = xF, x2[0] = 100 / (xF * Math.floor(dO.measureText("5 000 000").width)), x2[1] = 100 / (xF * Math.floor(dO.measureText("50 000 000").width)), x2[2] = 100 / (xF * Math.floor(dO.measureText("500 000 000").width)), x2[3] = 100 / (
				xF * Math.floor(dO.measureText("1 000 000 000").width))
		} else x7();
		! function() {
			var a5;
			for (a5 = cr.fc - 1; 0 <= a5; a5--) f4.g0[a5] < 12 ? (wd[a5] = f4.fw[a5] + 1, we[a5] = f4.fx[a5] + 1, wf[a5] = 1, wg[a5] = 1) : (wd[a5] = f4.fw[a5], we[a5] = f4.fx[a5] + 1, wf[a5] = 4, wg[a5] = 2);
			if (cr.gH)
				for (a5 = 0; a5 < cr.fb; a5++) wf[a5] = 0;
			wx = l5.get(4).width, wy = l5.get(4).height
		}()
	}, this.xA = function(bB, xB) {
		xB > 18 * f4.g0[bB] ? (x5[bB] = 6, fK.jS[bB] = 2 + fK.jS[bB] % 2) : (x4[bB] = 4, (fK.jS[bB] < 2 || 3 < fK.jS[bB]) && (fK.jS[bB] = 6 + fK.jS[bB] % 2))
	}, this.xC = function(bB, xB) {
		xB > 6 * f4.g0[bB] ? (x5[bB] = 6, fK.jS[bB] = 4 + fK.jS[bB] % 2) : (x4[bB] = 4, (fK.jS[bB] < 4 || 5 < fK.jS[bB]) && (fK.jS[bB] = 8 + fK.jS[bB] % 2))
	}, this.resize = function() {
		nw(), xE(wu)
	}, this.gV = function() {
		for (var a5 = 0; a5 < cr.fb; a5++) f4.fy[a5] - f4.fw[a5] != 3 || f4.fz[a5] - f4.fx[a5] != 3 ? (wd[a5] = f4.fw[a5] + (f4.fy[a5] !== f4.fw[a5] ? 1 : 0), we[a5] = f4.fx[a5], wf[a5] = 1, wg[a5] = 1) : (wd[a5] = f4.fw[a5], we[a5] = f4.fx[a5] +
			1, wf[a5] = 4, wg[a5] = 2)
	}, this.fn = function(player, go, xI) {
		! function(player, go, xI) {
			player += go * cr.fc;
			0 === go ? wv[player] === xI && 0 < ww[player] ? ww[player] = 0 : (wv[player] = xI, ww[player] = fo.fp.uz(xI) ? 255 : 64) : 1 === go ? (ww[player] = 64, wv[player] = xI) : ww[player] = xI
		}(player, go, xI), 2 === cr.d6 && this.gW(!0)
	}, this.cQ = function() {
		ws && (1 !== wr ? (dO.imageSmoothingEnabled = !0, dO.setTransform(wr, 0, 0, wr, 0, 0), dO.drawImage(wt, -wp / wr, -wq / wr), dO.setTransform(1, 0, 0, 1, 0, 0), dO.imageSmoothingEnabled = !1) : dO.drawImage(wt, -wp, -wq))
	}, this.xK = function(h1, h2) {
		wp += h1, wq += h2
	}, this.rB = function(h1, h2) {
		fm.xK(h1, h2)
	}, this.zoom = function(xL, jp, jq) {
		wr *= xL, wp = (wp + jp) * xL - jp, wq = (wq + jq) * xL - jq
	}, this.pN = function(player) {
		var fw = f4.fw[player],
			fy = f4.fy[player],
			fx = f4.fx[player],
			fz = f4.fz[player],
			xO = aj.hr(0),
			xP = aj.ht(0),
			xQ = aj.hr(cy.aZ),
			xR = aj.ht(cy.b6);
		fw < xQ && xO < fy && fx < xR && xP < fz && (wf[player] = 0, x1 = !0)
	}, this.gW = function(m6) {
		return !(!x1 && !m6 && bV.aw < x0 + (1 === wr && 0 === wp && 0 === wq && (cr.xN() || cr.gH || 2 === cr.d6) ? 1e3 : qa) || (xE(wu), 0))
	}, this.xS = function(a5) {
		return xH(a5) * wh[a5]
	}, this.xT = function(player) {
		return wh[player]
	}, this.ar = function() {
		bV.es() % 10 == 9 && (x1 = x1 || cr.xt() && !cr.xN()), !cr.xN() && 4 <= ++wc && function() {
			var a5, a6, av;
			for (wc = 0, av = 4; 1 <= av; av--)
				for (a6 = f8.f9 - 1; 0 <= a6; a6--) a5 = f8.fB[a6] + av * cr.fc, 0 < ww[a5] && ww[a5] < 255 && ww[a5]--;
			if (2 !== cr.d6)
				for (a6 = f8.f9 - 1; 0 <= a6; a6--) a5 = f8.fB[a6], 0 < ww[a5] && ww[a5] < 255 && ww[a5]--
		}();
		var a5, a6, u = Math.floor(.1 * f8.f9);
		for (u = (u = u < 8 ? 8 : u) > f8.f9 ? f8.f9 : u, a5 = wb + u - 1; wb <= a5; a5--) a6 = a5 % f8.f9, ! function(a5) {
			var wY = xH(a5) * wh[a5];
			0 < wf[a5] && xz(a5, wd[a5], we[a5], wf[a5], wg[a5]) ? ! function(a5) {
				for (var aJ, aK, aZ, b6, gt = !1, av = 0; av < 8; av++) {
					if (aZ = wf[a5] + 2, b6 = wg[a5] + 2, aZ > f4.fy[a5] - f4.fw[a5] + 1 || b6 > f4.fz[a5] - f4.fx[a5] + 1) return gt;
					if (aJ = wd[a5] - 1, aK = we[a5] - 1, !xz(a5, aJ, aK, aZ, b6)) return gt;
					wd[a5] = aJ, we[a5] = aK, wf[a5] = aZ, wg[a5] = b6, gt = !0
				}
				return gt
			}(a5) && function(a5, wY) {
				for (var aJ, aK, aZ, b6, gt = !1, y6 = wf[a5], ku = 1 + Math.floor(.02 * y6), av = 1; av < 5; av++) {
					if ((aZ = y6 + av * ku) > f4.fy[a5] - f4.fw[a5] + 1) return gt;
					if ((b6 = y5(wY, aZ)) > f4.fz[a5] - f4.fx[a5] + 1) return gt;
					aJ = f4.fw[a5] + Math.floor(Math.random() * (f4.fy[a5] - f4.fw[a5] + 2 - aZ)), aK = f4.fx[a5] + Math.floor(Math.random() * (f4.fz[a5] - f4.fx[a5] + 2 - b6)), xz(a5, aJ, aK, aZ, b6) && (wd[a5] = aJ, we[a5] = aK, wf[
						a5] = aZ, wg[a5] = b6, gt = !0)
				}
				return gt
			}(a5, wY) && y2(a5) : ! function(a5, wY) {
				var b6, aJ = wd[a5] + 1,
					aK = we[a5] + 1,
					aZ = wf[a5] - 2;
				for (;;) {
					if (aZ < 1) {
						wf[a5] = 0;
						break
					}
					if (b6 = y5(wY, aZ), xz(a5, aJ, aK, aZ, b6)) return wd[a5] = aJ, we[a5] = aK, wf[a5] = aZ, wg[a5] = b6, 1;
					aJ++, aK++, aZ -= 2
				}
				return
			}(a5, wY) ? function(a5, wY) {
				var aJ, aK, aZ, b6, av, r2, y7 = f4.fy[a5] - f4.fw[a5] + 1,
					y8 = Math.floor(.02 * y7);
				for (r2 = -6 * (y8 = y8 < 1 ? 1 : y8), av = y7; r2 <= av; av -= y8)
					if (b6 = y5(wY, aZ = 0 < av ? av : 1), aJ = f4.fw[a5] + Math.floor(Math.random() * (f4.fy[a5] - f4.fw[a5] + 2 - aZ)), aK = f4.fx[a5] + Math.floor(Math.random() * (f4.fz[a5] - f4.fx[a5] + 2 - b6)), xz(a5, aJ, aK, aZ,
							b6)) return wd[a5] = aJ, we[a5] = aK, wf[a5] = aZ, wg[a5] = b6
			}(a5, wY) : y2(a5)
		}(f8.fB[a6]);
		wb = (wb += u) % f8.f9
	}, this.xw = function() {
		var a5, bB, uy, u9;
		if (bV.es() % 4 == 1)
			for (a5 = f8.f9 - 1; 0 <= a5; a5--) bB = f8.fB[a5], fK.jS[bB] < 2 || ((uy = Math.max(x4[bB] - 1, 0)) === (u9 = Math.max(x5[bB] - 1, 0)) ? 0 === uy && (fK.jS[bB] %= 2) : 0 === u9 && fK.jS[bB] < 6 && (fK.jS[bB] += 4), x4[bB] = uy, x5[
				bB] = u9)
	}, this.xx = function(player) {
		var a5 = player + 2 * cr.fc,
			kG = ww[a5];
		return 0 < kG && (ew.kY(50, player), ww[a5] = 0, 255 === kG)
	}, this.xy = function(player) {
		return 255 === ww[player + 2 * cr.fc]
	}
}

function cL() {
	function yE(player, yC) {
		yC = aj.o3(am.i.hM[yC]), yC = fK.yL(aj.i5(yC));
		return !!am.cI.yM(player, yC)
	}

	function yB(player) {
		return am.cC.yd(player) && !am.cG.ry()
	}
	this.iQ = function(player, fM) {
		return !!yB(player) && -1 !== (fM = function(player, fM) {
			for (var u = am.i.hS, hM = am.i.hM, hN = am.i.hN, nW = aj.yb(), yc = -1, a5 = 0; a5 < u; a5++) {
				var h3 = aj.yS(fM, aj.o3(hM[a5]));
				h3 < nW && aV.et.yN(player, hN[a5] >> 3) && (nW = h3, yc = a5)
			}
			return yc
		}(player, fM)) && !!yE(player, fM) && (gx.iP[3] = am.i.ks[fM], !0)
	}, this.yF = function(player, o4) {
		return !!yB(player) && !!am.cI.yG(o4) && !!yE(player, gx.iP[2])
	}, this.yH = function(player, o4, yI) {
		return !! function(player, o4, yI) {
			if (yB(player) && am.cI.yG(o4)) {
				o4 = gx.iP[2];
				if (aV.et.yN(player, am.i.hN[o4] >> 3)) {
					if (function(player, yC) {
							return am.cI.ya(player, yC) && (gx.au[0] = am.cG.s2(am.i.mp[yC]), gx.iP[1] = 6, !0)
						}(player, o4)) return 1;
					var oB = aj.o3(am.i.hM[o4]),
						yP = am.cI.yQ(player, oB);
					if (-1 !== yP) {
						yP = aj.yS(yP, oB);
						if (!(yI && 120 < yP)) {
							yI = function(yC, yR, oB) {
								var mu = am.i.mp[yC],
									yC = am.i.mq[yC],
									yX = aj.yS(oB, mu[yC + 1]);
								if (yR <= yX) return am.cI.yY(oB, mu[yC + 1], yX, yR);
								for (var h3 = yR - yX, u = mu.length - 1, a5 = yC + 1; a5 < u; a5++) {
									var yZ = aj.yS(mu[a5], mu[a5 + 1]);
									if (h3 <= yZ) return am.cI.yY(mu[a5], mu[a5 + 1], yZ, h3);
									h3 -= yZ
								}
								return mu[u]
							}(o4, yP, oB);
							if (am.c6.yV(player, yI, 1)) return gx.iP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o4, yI) && (player = gx.iP[2], am.i.mo[player] = 64 + am.i.mo[player] % 64, am.cM.gE(o4, am.i.mm), !0)
	}
}

function ye() {
	var yf = 0,
		yh = new Uint16Array(64);

	function pC(gm) {
		yf -= 2;
		for (var a5 = gm; a5 < yf; a5 += 2) yh[a5] = yh[a5 + 2], yh[a5 + 1] = yh[a5 + 3]
	}
	this.a4 = function() {
		yf = 0
	}, this.ar = function() {
		var a5, oK, yj;
		if (0 !== yf)
			if (0 === f4.fv[cr.gJ]) yf = 0;
			else if (0 === iH.iI(cr.gJ)) yf = 0;
		else
			for (a5 = yf - 2; 0 <= a5; a5 -= 2)(oK = yh[a5]) < cr.fc && 0 === f4.fv[oK] ? pC(a5) : (yj = yh[a5 + 1], (cr.fc <= oK && iE.yk(cr.gJ) || oK < cr.fc && iE.yl(cr.gJ, oK)) && (i2.i3.iG(yj, oK), pC(a5)))
	}, this.iK = function(oK, yj) {
		! function(oK, yj) {
			for (var a5 = 0; a5 < yf; a5 += 2)
				if (yh[a5] === oK) return yh[a5 + 1] = Math.min(yh[a5 + 1] + yj, 1023), 1;
			return
		}(oK, yj) && 64 !== yf && (yh[yf] = oK, yh[yf + 1] = yj, yf += 2)
	}
}

function yn() {
	this.aB = function() {
		var b9 = function() {
				for (var zA = tq.z4.zA, u = zA.length, max = 0, a5 = 0; a5 < u; a5++) max = Math.max(max, zA[a5]);
				return bO(Math.max(max, 1))
			}(),
			aZ = (ev = cr.data, (aZ = a3).a4(), aZ.e(12, eG.rVersion), aZ.go += 43, aZ.e(2, ev.mapType), aZ.e(8, ev.mapProceduralIndex), aZ.e(8, ev.mapRealisticIndex), aZ.e(14, ev.mapSeed), aZ.yy(ev.mapName, 5), 2 === ev.mapType && aZ.yz(ev
					.canvas), aZ.e(1, ev.passableWater), aZ.e(1, ev.passableMountains), aZ.e(10, ev.playerCount), aZ.e(10, ev.humanCount), aZ.e(9, ev.selectedPlayer), aZ.e(1, ev.gameMode), aZ.e(2, ev.playerMode), aZ.e(2, ev.battleRoyaleMode), aZ
				.e(4, ev.numberTeams), aZ.e(1, ev.isZombieMode), aZ.e(1, ev.isContest), aZ.e(1, ev.isReplay), aZ.z0(ev.elo, 2, 14), aZ.e(1, ev.colorsType), aZ.e(1, ev.colorsPersonalized), aZ.z0(ev.colorsData, 10, 18), aZ.e(1, ev.selectableColor),
				aZ.z0(ev.teamPlayerCount, 4, 10), aZ.e(1, ev.neutralBots), aZ.e(2, ev.botDifficultyType), aZ.e(4, ev.botDifficultyValue), aZ.z0(ev.botDifficultyTeam, 4, 4), aZ.z0(ev.botDifficultyData, 10, 4), aZ.e(2, ev.spawningType), aZ.e(14, ev
					.spawningSeed), aZ.z0(ev.spawningData, 11, 12), aZ.e(1, ev.selectableSpawn), aZ.e(2, ev.playerNamesType), aZ.z1(ev.playerNamesData, 10, 5), aZ.e(1, ev.selectableName), aZ.e(2, ev.aIncomeType), aZ.e(8, ev.aIncomeValue), aZ.z0(
					ev.aIncomeData, 10, 8), aZ.e(2, ev.tIncomeType), aZ.e(8, ev.tIncomeValue), aZ.z0(ev.tIncomeData, 10, 8), aZ.e(2, ev.iIncomeType), aZ.e(8, ev.iIncomeValue), aZ.z0(ev.iIncomeData, 10, 8), aZ.e(2, ev.sResourcesType), aZ.e(11, ev
					.sResourcesValue), aZ.z0(ev.sResourcesData, 10, 11), aZ.z0(ev.z2, 10, 30), ! function(b9) {
					var aZ = a3,
						z3 = tq.z4.z3,
						z5 = tq.z4.z6,
						z7 = tq.z4.z8,
						kw = tq.z4.z9,
						u = z3.length;
					aZ.e(5, b9), aZ.e(30, u), aZ.e(30, tq.z4.zA.length);
					for (var a5 = 0; a5 < u; a5++) {
						var jA = z3[a5];
						aZ.e(4, jA), aZ.e(9, z5[a5]), 0 === jA ? aZ.e(22, z7[a5]) : 1 === jA ? (aZ.e(10, z7[a5]), aZ.e(10, kw[a5])) : 2 === jA ? (aZ.e(10, z7[a5]), aZ.e(9, kw[a5])) : 3 === jA ? (aZ.e(10, z7[a5]), aZ.e(27, kw[a5])) : 4 === jA ? (
							aZ.e(10, z7[a5]), aZ.e(16, kw[a5])) : 5 === jA || 6 === jA ? aZ.e(10, z7[a5]) : 7 === jA ? aZ.e(1, z7[a5]) : 10 === jA && (aZ.e(20, z7[a5]), aZ.e(22, kw[a5]))
					}
				}(b9), ! function(b9) {
					for (var aZ = a3, zB = tq.z4.zB, zA = tq.z4.zA, u = zB.length, a5 = 0; a5 < u; a5++) aZ.e(1, zB[a5]), aZ.e(b9, zA[a5])
				}(b9), a3.go),
			ev = aQ.aR(aZ - 1, 6) + 1,
			b9 = (c.yu(6 * ev) !== a3.au.length && a3.au.push(0), ! function() {
				var aZ = a3;
				aZ.go = 24, aZ.e(31, aZ.au.length), aZ.go = 12, aZ.e(12, function() {
					for (var au = a3.au, u = au.length, sm = eG.rVersion, a5 = 3; a5 < u; a5++) sm = sm + au[a5] & 4095;
					return sm
				}())
			}(), bG.a4(a3.au), w.p.yw(w.p.yx(ev)));
		return bG.kD(), a3.a4(), b9
	}
}

function cN() {
	var k6 = 0,
		zE = null;
	this.a4 = function() {
		null === zE && (zE = new Uint16Array(2 * am.i.mk)), k6 = 0
	}, this.gE = function(zF, cM) {
		var zG = zE;
		zG[k6++] = zF, zG[k6++] = cM
	}, this.zH = function(player, zI) {
		for (var zG = zE, u = k6, a5 = 0; a5 < u; a5 += 2)
			if (zG[a5] === zI && am.cI.yG(zG[a5 + 1]) && player === am.i.hN[gx.iP[2]] >> 3) return !0;
		return !1
	}, this.nX = function(zJ) {
		var c2 = am.i.mo[zJ];
		if (!(c2 < 64)) {
			for (var zI = am.i.ks[zJ], zG = zE, u = k6, a5 = u - 2; 0 <= a5; a5 -= 2)
				if (zG[a5] === zI) {
					{
						zN = void 0;
						var zN = zG[a5 + 1];
						am.cI.yG(zN) && am.cM.zT(gx.iP[2])
					}
					zG[a5] = zG[u - 2], zG[a5 + 1] = zG[u - 1], u -= 2
				} k6 = u
		}
	}, this.oC = function(zL, zM) {
		for (var zN = am.i.ks[zL], zI = -1, zG = zE, u = k6, a5 = 1; a5 < u; a5 += 2)
			if (zG[a5] === zN) {
				zI = zG[a5 - 1];
				break
			} if (-1 === zI) return !1;
		if (!am.cI.yG(zI)) return !1;
		var zJ = gx.iP[2],
			mu = am.i.mp[zJ];
		if (zM === mu[mu.length - 1]) am.i.mp[zL] = am.cG.s4(am.i.mp[zL], am.cG.s2(mu));
		else {
			var zO = am.cI.zP(mu, zM);
			if (-1 === zO) return !1;
			var zQ = am.i.mq[zJ];
			zO === zQ ? (zJ = aj.o3(am.i.hM[zJ]), am.i.mp[zL] = am.cG.s6(am.i.mp[zL], mu, zO, zM, aj.yS(mu[zO], zM) > aj.yS(mu[zO], zJ))) : am.i.mp[zL] = am.cG.s6(am.i.mp[zL], mu, zO, zM, zQ < zO)
		}
		return !0
	}, this.zT = function(yC) {
		var mu, bA = am.i,
			c2 = bA.mo[yC];
		return c2 % 64 != 5 && (mu = bA.mp[yC], bA.mn[yC] = 65535 - bA.mn[yC], bA.mq[yC] = mu.length - bA.mq[yC] - 2, bA.mp[yC] = am.cG.s2(mu), bA.mo[yC] = c2 - c2 % 64 + 5, !0)
	}
}

function q0() {
	this.a4 = function() {
		this.jz = 0, this.zU = [], this.zV = 0, this.zW = 0
	}, this.kS = function() {
		var dS;
		cr.eh || (dS = this, 2 === cr.kK ? dS.zU = kQ.q1.zY() : cr.f0 ? dS.zU = kQ.q1.zZ() : dS.zU = kQ.q1.za(), dS.jz = pW.pX.jv(), dS.zV = Math.max(1, kQ.q1.zb(dS.zU)), i2.et.zc(), 8 === cr.fW ? kQ.result.zW = 0 : dS.zW = 100 * kQ.result.jz * (
			1 + cr.ze))
	}
}

function q5() {
	function zl() {
		var mX;
		return 8 === cr.fW ? 0 : (mX = Math.floor(f4.gA[cr.gJ] / 50), (mX = Math.min(mX, 200)) / 100)
	}

	function zf() {
		var mX = zl();
		0 !== mX && ew.f3(440, L(64, [mX.toFixed(2)]), 40, 0, dZ.zm, dZ.f6, -1, !1)
	}
	this.ar = function() {
		var zg;
		0 === kQ.result.zW || 0 === kQ.result.zU.length || 8 === cr.fW ? aV.et.hn(cr.gJ) && zf() : (function(zg) {
			7 !== cr.fW && 10 !== cr.fW && 9 !== cr.fW || 0 !== cr.kT && zg && ew.f3(600, L(68, [zg.toFixed(2)]), 40, 0, dZ.dc, dZ.f6, -1, !1)
		}(zg = function() {
			ew.f3(520, L(65), 40, 0, dZ.dc, dZ.f6, -1, !1);
			for (var zU = kQ.result.zU, u = zU.length, g0 = f4.g0, au = [], a5 = 0; a5 < u; a5++) {
				var bB = zU[a5];
				au.push({
					bB: bB,
					kG: g0[bB]
				})
			}
			au.sort((a6, av) => av.kG - a6.kG);
			var t6 = f4.f5,
				kG = kQ.result.zV,
				mX = kQ.result.zW,
				v = "",
				zg = 0;
			for (a5 = 0; a5 < u; a5++) {
				var iW = au[a5].kG * mX / (100 * kG),
					zo = t6[au[a5].bB] + ": " + iW.toFixed(2) + "   ";
				au[a5].bB === cr.gJ && (zg = iW), 2 < a5 && 4 !== u ? 3 === a5 && (v += "(" + L(66, [u - 3]) + ")") : v += zo
			}
			ew.f3(560, aV.hf.zp(v), 40, 0, dZ.zm, dZ.f6, -1, !1), zg ? ew.f3(580, L(67, [zg.toFixed(2) + " + " + zl().toFixed(2)]), 40, 0, dZ.zm, dZ.f6, -1, !1) : aV.et.hn(cr.gJ) && zf();
			return zg
		}()), 2 === cr.kK || 7 <= cr.fW || function(zg) {
			var zU = kQ.result.zU,
				u = zU.length,
				ft = f4.ft,
				g0 = f4.g0,
				cg = [];
			loop: for (var a5 = 0; a5 < u; a5++) {
				var bB = zU[a5],
					zq = aV.hf.zr(ft[bB]);
				if (null !== zq) {
					for (var zs = g0[bB], av = cg.length - 1; 0 <= av; av--)
						if (zq === cg[av].name) {
							cg[av].kG += zs, cg[av].au.push({
								bB: bB,
								kG: zs
							});
							continue loop
						} cg.push({
						name: zq,
						kG: zs,
						au: [{
							bB: bB,
							kG: zs
						}]
					})
				}
			}
			if (0 !== cg.length) {
				cg.sort((a6, av) => av.kG - a6.kG);
				var au = cg[0].au,
					zt = (au.sort((a6, av) => av.kG - a6.kG), "[" + cg[0].name + "]"),
					zu = 512 * kQ.result.zW / 26214400,
					bA = (ew.f3(0, L(69, [zt, zu.toFixed(4)]), 40, 0, dZ.dc, dZ.f6, -1, !1), au.length),
					zv = cg[0].kG,
					zw = 1e4 * zu;
				for (a5 = 0; a5 < bA; a5++)
					if (au[a5].bB === cr.gJ) {
						ew.f3(600, L(70, [(zw * au[a5].kG / (10 * zv)).toFixed(2)]), 40, 0, dZ.dc, dZ.f6, -1, !1), ew.f3(640, L(71, [(.2 * zg).toFixed(2), zt]), 40, 0, dZ.dc, dZ.f6, -1, !1);
						break
					}
			}
		}(zg))
	}, this.pc = function() {
		var zk, bc;
		cr.eh || (zk = f4, bc = cr.gJ, 0 === zk.gB[bc]) || zk.g9[bc] < 1 || 2 * zk.g7[bc] > 3 * (zk.g8[bc] + zk.g9[bc]) || zf()
	}
}

function zx() {
	var zy = [],
		zz = [],
		a00 = [];

	function a02(ev) {
		for (var a06 = ev.a06, a01 = [];;) {
			var jA = function a07(a06, position) {
				position = a06.indexOf("@", position);
				if (position < 0) return -1;
				var v = a06.substring(position + 1, position + 6);
				if (5 !== v.length) return a07(a06, position + 1);
				if (aV.hf.startsWith(v, "room")) return a07(a06, position + 1);
				var a0Q = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!a0Q.test(v)) return a07(a06, position + 1);
				a0Q = a06.substring(position + 6, position + 7);
				if (1 !== a0Q.length) return position;
				v = new RegExp("^[ :!.]+$");
				if (!v.test(a0Q)) return a07(a06, position + 1);
				return position
			}(a06, 0);
			if (-1 === jA) {
				a01.push(a08(a06, ev));
				break
			}
			0 === jA ? a01.push(a09(a06.substring(1, 6), ev, jA)) : (a01.push(a08(a06.substring(0, jA), ev)), a01.push(a09(a06.substring(jA + 1, jA + 6), ev, jA))), a06 = a06.substring(jA + 6)
		}
		return a01
	}

	function a09(v, ev, jA) {
		var a0A = function(v) {
				var aE = o.p.a0M(v, 5),
					a0A = or.ox.a0N(aE);
				if (a0A) {
					for (zy.push(a0A); 75 < zy.length;) zy.shift();
					return a0A
				}
				for (var a0O = or.ox.a0O, a5 = a0O.length - 1; 0 <= a5; a5--)
					if (a0A = a0O[a5], aE === a0A.aE) return zy.push(a0A), a0A;
				for (a5 = zy.length - 1; 0 <= a5; a5--)
					if (a0A = zy[a5], aE === a0A.aE) return zy.push(a0A), a0A;
				return or.ox.a0P(aE, v, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(v),
			v = (0 === jA && 0 === ev.sJ.id && ev.a03 && (ev.fontSize = or.cI.a0C(a0A.p5, a0A.qw), ev.a05 = or.cI.a0D(a0A.qw)), document.createElement("span"));
		return v.textContent = function(a0A, ev, jA) {
				if (a0A.a0H) return a0A.a0H--, jA = 2 === ev.sJ.id || (3 === ev.sJ.id || 4 === ev.sJ.id) && 0 !== jA, a0A.username + (jA ? " (" + a0A.a0J + ")" : "");
				if (ev.sJ.a0K) return "Redacted " + w.p.hg(a0A.aE, 2);
				return a0A.username
			}(a0A, ev, jA), v.style.display = "inline-block", v.style.color = or.cI.p4(a0A.p5), 11 === a0A.p5 && (v.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), v.style.cursor = "pointer",
			v.style.margin = "0", v.style.font = "inherit", v.style.minWidth = v.style.minHeight = "1em", or.cI.p6(a0A) && (v.style.textDecoration = "underline"), a0A.p7 && (v.style.textDecorationLine = "underline", v.style.textDecorationStyle =
				"dotted"), or.cI.a0D(a0A.qw) && (v.style.fontWeight = "bold"), v.onclick = function(ej) {
				or.a0F.a0G(ej, a0A)
			}, jC.jD() || (v.onmouseover = function(ej) {
				or.os.p8(ej.target, a0A)
			}), zz.push(v), v
	}

	function a08(a06, ev) {
		var p2 = document.createElement("span");
		return p2.textContent = a06, p2.style.color = ev.a0L, p2.style.margin = "0", p2.style.font = "inherit", p2
	}

	function a0W(a0A, a0V, aE) {
		aE !== a0A.aE || a0A.a0J || (a0A.a0J = a0A.username, a0A.username = a0V)
	}
	this.kD = function() {
		for (var a5 = 0; a5 < zz.length; a5++) zz[a5].onclick = zz[a5].onmouseover = null;
		a00 = zz = null
	}, this.transform = function(ev) {
		for (var k2 = document.createElement("div"), a01 = a02(ev), a5 = 0; a5 < a01.length; a5++) k2.appendChild(a01[a5]);
		0 === ev.sJ.id && (k2.vx143 = ev.sJ, a00.push(k2)), k2.style.margin = "0.6em 0.6em", ev.a03 && (k2.style.marginLeft = k2.style.marginRight = "inherit"), k2.style.font = "inherit";
		var a04 = 0 < ev.sJ.id;
		return ev.a05 && (k2.style.fontWeight = "bold"), a04 && (k2.style.paddingLeft = "0.7em"), a04 && (k2.style.fontStyle = "italic"), k2.style.fontSize = ev.fontSize.toFixed(2) + "em", k2
	}, this.a0T = function(a0U) {
		if (a0U && (2 === a0U.id && 1 === a0U.sK || 3 === a0U.id && 2 === a0U.sK)) {
			var aE = 3 === a0U.id ? a0U.target : a0U.aE;
			if (!or.ox.a0N(aE)) {
				for (var a0V = "Redacted " + w.p.hg(aE, 2), a0O = or.ox.a0O, a5 = a0O.length - 1; 0 <= a5; a5--) a0W(a0O[a5], a0V, aE);
				for (a5 = zy.length - 1; 0 <= a5; a5--) a0W(zy[a5], a0V, aE)
			}
		}
	}, this.a0X = function(aE) {
		for (var a0Y = a00, a0Z = "@" + w.p.hg(aE, 5), a5 = a0Y.length - 1; 0 <= a5; a5--) {
			var ba = a0Y[a5];
			if (ba.vx143.aE === aE || 0 <= ba.vx143.a06.indexOf(a0Z)) {
				for (; ba.firstChild;) d7.removeChild(ba, ba.firstChild);
				for (var a01 = a02(or.cI.sM(ba.vx143, or.cI.sN(ba.vx143))), a6 = 0; a6 < a01.length; a6++) ba.appendChild(a01[a6]);
				a0Y.splice(a5, 1)
			}
		}
	}, this.sL = function(aE) {
		for (var a0Y = a00, a5 = a0Y.length - 1; 0 <= a5; a5--) {
			var ba = a0Y[a5];
			if (ba.vx143.aE === aE) {
				for (; ba.firstChild;) d7.removeChild(ba, ba.firstChild);
				ba.vx143.a06 = "[Redacted Message]";
				for (var a01 = a02(or.cI.sM(ba.vx143, or.cI.sN(ba.vx143))), a6 = 0; a6 < a01.length; a6++) ba.appendChild(a01[a6]);
				a0Y.splice(a5, 1)
			}
		}
	}
}

function a0a() {
	var wH, a0b, a0c, wG, a0d, a0e, a0f, a0g, a0h, a0i, a0j, pq, a0k, a0l = !1,
		a0m = !1;

	function a0n(a0o) {
		pq = bV.aw, a0c = wG = a0b = 0, a0d = (a0k = 33) / a0o, wH = 1 / (a0o / a0k / 4), a0e = (cy.aZ / 2 + hZ) / hY, a0f = (cy.b6 / 2 + ha) / hY, a0g = hY
	}

	function a0r(a5) {
		var dg; - 1 !== a5 && (a5 = aj.o3(am.i.hM[a5]), dg = aj.fQ(a5) - 15, a5 = aj.fR(a5) - 15, gQ.gR(dg, a5, 29 + dg, 29 + a5))
	}

	function a12(nl) {
		Math.abs(Math.log(a0j / a0g)) < .125 && (a0j = nl * a0g)
	}

	function a11(dg, dh, hb, hc) {
		a0h = (dg + hb + 1) / 2, a0i = (dh + hc + 1) / 2;
		hb = cy.aZ / (hb - dg + 1), dg = cy.b6 / (hc - dh + 1);
		a0j = .9 * (hb < dg ? hb : dg)
	}
	this.ja = function() {
		return a0l
	}, this.a0p = function() {
		a0n(1), this.gR(0, 0, aS.aT - 1, aS.aU - 1), cr.gH || cr.cs || this.rF(cr.gJ, 3e3, !0, .3)
	}, this.a0q = function(player, o4) {
		a0r(am.cI.a0s(player, o4))
	}, this.rF = function(player, a0o, a0t, zoom) {
		cr.d9 || a0l && !a0t && a0m || (0 === f4.g0[player] ? a0r(am.cI.a0u(player)) : (dM.a0v = !1, a0m = a0t, a0n(a0o), function(player) {
			a0h = (f4.fw[player] + f4.fy[player] + 1) / 2, a0i = (f4.fx[player] + f4.fz[player] + 1) / 2
		}(player), function(zoom, player) {
			var h1 = f4.fy[player] - f4.fw[player] + 1,
				player = f4.fz[player] - f4.fx[player] + 1,
				a6 = cy.aZ / h1,
				av = cy.b6 / player,
				a6 = (a0j = a6 < av ? a6 : av, 0 !== zoom ? zoom : h1 < 20 && player < 20 ? .5 : .9);
			a0j *= a6, a12(7 / 8)
		}(zoom, player), a0l = !0, a0y.a0z()))
	}, this.a10 = function(a0o) {
		cr.cs || cr.d9 || (dM.a0v = !1, a0m = !1, a0n(a0o), a11(0, 0, aS.aT - 1, aS.aU - 1), a12(7 / 8), a0l = !0, a0y.a0z())
	}, this.gR = function(dg, dh, hb, hc) {
		a0l = !1, a11(dg, dh, hb, hc), hY = a0j, dM.a13(a0h, cy.aZ / 2), dM.a14(a0i, cy.b6 / 2), a15.a16(), bV.bW = !0
	}, this.r2 = function() {
		return !(a0l && a0m || (a0l = !1))
	}, this.ar = function() {
		var a19, a1A, ba, a1D;
		a0l && (a0b < .5 ? wG < a0d && (wG += a0d * wH, a0c = a0b) : 1 - a0c < a0b && (wG = (wG -= a0d * wH) < a0d * wH ? a0d * wH : wG), pq = pq >= bV.aw ? bV.aw - 1 : pq, a0b = 1e3 < (ba = bV.aw - pq) || 1 < (a0b += wG * ba / a0k) ? 1 : a0b,
			pq = bV.aw, ba = hY, a19 = hZ, a1A = ha, ba = (hY = a0g * Math.pow(a0j / a0g, a0b)) / ba, a1D = 1 - (a0g * Math.pow(a0j / a0g, 1 - a0b) - a0g) / (a0j - a0g), dM.a13(a0e + a1D * (a0h - a0e), cy.aZ / 2), dM.a14(a0f + a1D * (a0i -
				a0f), cy.b6 / 2), fm.zoom(ba, (a19 * ba - hZ) / (1 - ba), (a1A * ba - ha) / (1 - ba)), a15.a16(), 1 <= a0b && (a0l = !1, gb.a1E = !0), bV.bW = !0)
	}
}

function a1F() {
	var lE, a1G;

	function a1K() {
		d7.vL();
		var v = tq.a1R(a1G.lQ());
		(cr.d6 && 0 < v.length && v === tq.z4.a1O || tq.tr.b8(v)) && tq.a1S()
	}
	this.show = function(a1L) {
		this.a1M(a1L), lE.show(), this.resize()
	}, this.a1M = function(a1L) {
		0 === cr.d6 ? a1L ? a1G.lf(a1L) : cr.a1N.length && a1G.lf(cr.a1N) : (cr.cs || (tq.z4.a1O = tq.a1P.aB()), a1G.lf(tq.a1Q(tq.z4.a1O)))
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), a1G.resize()
	}, this.lh = function(jA) {
		2 === jA ? lE.li[0].iy() : a1K()
	}, lE = new lH(L(72), [new ir("⬅️ " + L(4), function() {
		d7.a1H(1)
	}), new ir(L(73), function() {
		a1G.a1I()
	}), new ir(L(74), function() {
		a1G.a1J()
	}), new ir(L(75), function() {
		a1G.clear()
	}), new ir(L(76), function() {
		a1K()
	})]), a1G = new le(L(77)), lE.lK.appendChild(a1G.ej)
}

function a1T() {
	this.fc = 512, this.xG = 15e8, this.a1U = 1e9, this.a1V = 5e4, this.a1W = 512, this.a1X = 2, this.gJ = 0, this.fb = 0, this.kP = 0, this.fd = 0, this.kO = 0, this.fe = 512, this.a1Y = 512, this.a1Z = 150, this.eh = !0, this.cs = 0, this.d6 = 0,
		this.lv = 0, this.d9 = !1, this.gH = 0, this.a1a = 0, this.f0 = !1, this.a1b = 0, this.a1c = 0, this.fW = 0, this.ze = 0, this.ga = null, this.a1d = new a1e, this.mZ = 30, this.kK = 0, this.kT = 0, this.a1f = 0, this.a1g = 0, this.data =
		new a1h, this.ff = new a1i, this.a1j = 0, this.a1N = "", this.a1k = function() {
			tX.turnstile.close(), gx.a4(), kQ.a4(), a1l.clear(), this.kP = this.fb = this.data.humanCount, this.eh = 1 === this.kP && !__fx.customLobby.isActive(), this.d9 = !1, this.cs = this.data.isReplay, this.fW = 0 === this.data.gameMode ? [7,
					10, 8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.ze = this.data.isContest, this.f0 = this.fW < 7 || 9 === this.fW, this.fW = 10 === this.fW && this.eh ? 7 : this.fW, this.fW = 8 === this
				.fW && 2 !== this.fb ? 7 : this.fW, ph.a4(), this.a1b = this.data.numberTeams, this.data.teamPlayerCount ? this.a1c = +(0 < this.data.teamPlayerCount[0]) : (this.a1c = 0, this.f0 && this.eh && (this.data.teamPlayerCount =
					new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a1b + 1), cr.ff.fg())), this.mZ = this.fb <= 2 ? 30 : this.fb <= 50 ? 40 : 50, this.a1a = this.gH = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo
				.spawnSelection : this.data.selectableSpawn, this.ga = this.gH ? new gD : null, this.fe = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.fb) : 1 === eG.ta ? this.fe =
				this.fb : this.fe = this.data.playerCount,
				this.a1Y = this.fe, this.fd = this.fe - this.fb, this.kO = 0, this.gJ = this.data.selectedPlayer, this.kK = 0, this.kT = 0, this.a1f = 0, this.a1g = 0, fj.jd(this.data.spawningSeed), m9.a4(), f4.a4(), a1m.a4(), a1n.a1o(), i2.a1p
				.a1q = [], i2.i3.a1r = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), fF.a4(), this.d6 = 1, gK.a4(), a1s(), fK.rd(), a1t.a1u(), gb.a4(), fK.a4(), a1v
				.a4(), aj.a4(), am.a4(), fN.a4(), a1w.wO(), kj.a4(), a1n.d(), gF.a4(), a1x.a4(), f8.a1y(), tq.a4(), dA.a4(), gX.a4(), re.a4(), a1z.putImageData(a20, 0, 0), kZ.a4(), dM.a4(), gM.a4(), ka.a4(), iZ.a4(), m1.a4(), gO.a4(), dG.a4(), a21
				.a4(), ew.a4(), hp.a4(), gZ.a4(), gT.a4(), oQ.a4(), a22.a4(), a23(), iH.a4(), fm.a4(), a24.a4(), a25.a4(), iJ.a4(), a26.a4(), a27.a4(), this.a1d.a4(), bV.wO(), gQ.a0p(), 0 === f4.fv[cr.gJ] && gT.show(!1, !0), fm.gW(!0), gS.a4(), bV
				.bW = !0, this.cs || this.eh && this.gH || cT.cU.setState(1), this.a1j = 0
		}, this.vM = function(tW) {
			tq.z4.a1O.length ? this.a1N = tq.z4.a1O : this.a1N = tq.a1P.aB(), __fx.replayHistory.save(this.a1N), !1 === __fx.customLobby.isActive() && f.i.eg(), a1l.clear(), this.d6 = 0, bV.wM(), cT.cU.setState(0), eW.setState(0), __fx.customLobby
				.isActive() || tX.vx.show(tW), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a1j ? d7.i.tp(0) : 1 === this.a1j ? d7.dF(19) : d7.dF(5, 5)
		}, this.xN = function() {
			return this.cs ? dG.dH || !ka.cq : this.eh && (dG.dH || this.gH)
		}, this.xt = function() {
			return 1 === this.d6 && !this.gH
		}
}

function a29() {
	this.cQ = function() {
		if (0 !== gX.i.a2A && (dO.globalAlpha = Math.min(gX.i.a2A / 580, 1), dO.drawImage(gX.i.a2D, 1 + dM.a2E(), 1 + dM.cv()), dO.globalAlpha = 1, cr.gH)) {
			for (var dg = hZ / hY, dh = ha / hY, hb = (cy.aZ + hZ) / hY, hc = (cy.b6 + ha) / hY, dp = gX.i.a2F * hY, a2G = gX.i.a2G, a5 = cr.fb - 1; 0 <= a5; a5--) ! function(a5, dp, dg, dh, hb, hc, a2G) {
				var highlight;
				0 === f4.fv[a5] || 0 === f4.g0[a5] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a5]) && (dp *= 2), hb = cy.aZ * ((f4.fw[a5] + f4.fy[a5] + 1) / 2 - dg) / (hb - dg) - .5 * dp, dg = cy.b6 * ((f4
					.fx[a5] + f4.fz[a5] + 1) / 2 - dh) / (hc - dh) - .5 * dp, cy.aZ < hb) || dg > cy.b6 || hb < -dp || dg < -dp || (highlight ? dO.setTransform(2 * hY, 0, 0, 2 * hY, hb, dg) : dO.setTransform(hY, 0, 0, hY, hb, dg), dO
					.drawImage(a2G[cr.f0 ? fF.fI[a5] : 1], 0, 0))
			}(a5, dp, dg, dh, hb, hc, a2G);
			dO.setTransform(hY, 0, 0, hY, 0, 0)
		}
	}
}

function a2I() {
	var jL = 0;
	this.a4 = function() {
		a2J.a4(), jL = 0
	}, this.setState = function(a2K) {
		jL = a2K
	}, this.eX = function() {
		return jL
	}, this.a2L = function() {
		this.setState(8), d7.vL()
	}, this.lh = function(ej) {
		if (!aS.bT) return !1;
		if (!(bV.aw < 400)) {
			if ("Enter" === ej.key || "Escape" === ej.key) {
				if (this.a2M()) return !0;
				if ("Enter" === ej.key) {
					if (0 === jL) return !0;
					if (7 === jL) return !0
				}
			}
			return !1
		}
	}, this.a2N = function() {
		a2O.resize()
	}, this.a2M = function() {
		return !!a2O.eQ()
	}, this.dB = function(aJ, aK) {
		!aS.bT || a2O.dB(aJ, aK) || 6 === jL && eC.dB(aJ, aK) || tT.dB(aJ, aK) || u5.dB(aJ, aK)
	}, this.rB = function(aJ, aK) {
		!u5.uO && a2J.rB(aJ, aK, !0) || u5.rB(aJ, aK)
	}, this.click = function(aJ, aK) {
		u5.rE()
	}, this.rG = function(aJ, aK, deltaY) {}, this.a2P = function() {
		a2J.uV(), bV.bW = !0
	}, this.cQ = function() {
		8 !== jL && 10 !== jL && (dO.imageSmoothingEnabled = !0, this.a2Q(), 0 !== jL && (u5.cQ(), rf.cQ(), this.u4(), tT.cQ()), 0 !== jL && 6 === jL && eC.cQ(), a2O.cQ(), d7.cQ())
	}, this.a2Q = function() {
		var a2S, a2R;
		if (__fx.makeMainMenuTransparent) dO.clearRect(0, 0, cy.aZ, cy.b6);
		else aS.bT ? (a2R = cy.aZ / aS.aT, a2S = cy.b6 / aS.aU, dO.setTransform(a2R = a2S < a2R ? a2R : a2S, 0, 0, a2R, Math.floor((cy.aZ - a2R * aS.aT) / 2), Math.floor((cy.b6 - a2R * aS.aU) / 2)), dO.drawImage(aS.bX, 0, 0), dO.setTransform(1,
			0, 0, 1, 0, 0), dO.fillStyle = dZ.a2T) : dO.fillStyle = dZ.pi, dO.fillRect(0, 0, cy.aZ, cy.b6)
	}, this.u4 = function() {
		var aK = Math.floor(.3 * cy.b6),
			canvas = l5.t9("territorial.io"),
			wY = (wY = 1.75 * cy.b6 / canvas.width) * canvas.width < .98 * cy.aZ ? .98 * cy.aZ / canvas.width : wY,
			aJ = (dO.globalAlpha = .15, dO.imageSmoothingEnabled = !1, Math.floor(.5 * (cy.aZ - wY * canvas.width))),
			aJ = Math.floor(aJ / wY),
			aK = Math.floor(aK - .5 * canvas.height * wY),
			aK = Math.floor(aK / wY);
		dO.setTransform(wY, 0, 0, wY, aJ, aK), dO.drawImage(canvas, aJ, aK), dO.setTransform(1, 0, 0, 1, 0, 0), dO.globalAlpha = 1, dO.imageSmoothingEnabled = !0
	}
}

function a2V() {
	this.buffer = {}, this.a2W = new Array(8), this.a2X = null, this.a2Y = null, this.a2Z = 0, this.qc = [0, 0], this.vJ = function() {
		d7.dF(5, 5)
	}, this.tp = function(sk) {
		sk && (eC.a2a = sk), d7.vL(), eC.a4()
	}, __fx.customLobby.setJoinFunction(() => this.tp(1)), this.rv = function() {
		d7.dF(0 === eW.eX() ? 5 : 0)
	}, this.a2b = function() {
		if (1 === r.buffer.data[130].value) d7.dF(8, d7.rs().eL, new tt(24, {
			cf: r.buffer.data[125].value,
			ai: r.buffer.data[128].value,
			al: r.buffer.data[129].value
		}));
		else {
			for (var au = (au = r.buffer.data[126].value.split(",")).slice(0, 10), a5 = 0; a5 < au.length; a5++) au[a5] = au[a5].trim().slice(0, 7).toUpperCase();
			1 === au.length && 0 === au[0].length && (au = []), d7.dF(8, d7.rs().eL, new tt(23, {
				cf: r.buffer.data[125].value,
				cg: au
			}))
		}
	}, this.tu = function(eL, target) {
		d7.dF(4, eL, new ol("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + f.i.eJ(
			"/privacy"), !1, [new ir("⬅️ " + L(4), function() {
				d7.dF(eL)
			}), new ir("✅ Accept", function() {
				r.md.pE(140, 1), 0 === target ? d7.dF(2, eL) : d7.dF(8, eL, new tt(target))
			})]))
	}, this.a2c = function() {
		for (var a5 = 0; a5 < 8; a5++) this.a2W[a5] = o.x.a2d(bG.bM(5));
		this.a2W[1] = "[" + this.a2W[1] + "]", 5 === d7.lA && (d7.rs().tR.pE(this.a2W), d7.rs().resize())
	}, this.a2e = function(kv, e5, a2f) {
		kv = aV.et.a2g(kv, 1, 1e6);
		e5 = L(78, [e5]);
		return (e5 += "<br>") + L(79, [__fx.utils.escapeHtml("" + a2f)]) + "<br>" + L(80, [kv + "–" + (kv + 2)]) + "<br>" + L(81, [kv])
	}
}

function a2h() {
	function a2j(ej) {
		var au, ej = ej.target.files;
		ej && 0 < ej.length && (ej = ej[0], "json" === (au = ej.name.split("."))[au.length - 1].toLowerCase()) && ((au = new FileReader).onload = a2w, au.readAsText(ej))
	}

	function a2w(ej) {
		var a2z;
		cr.d6 || (ej = JSON.parse(ej.target.result), a2z = cr.data = new a1h, a30(ej, a2z, "mapType", 0, 2), a30(ej, a2z, "mapProceduralIndex", 0, 255), a30(ej, a2z, "mapRealisticIndex", 0, 255), a30(ej, a2z, "mapSeed", 0, 16383), function(a2y, a2z,
				dp, max) {
				a2y = a2y[dp];
				a2z[dp] = a36(a2y) ? a2y.slice(0, max) : a2z[dp]
			}(ej, a2z, "mapName", 20), function(a2y, a2z, dp) {
				var a37;
				2 === a2z.mapType && (!a36(a2y = a2y[dp]) || a2y.length <= 20 ? a2z.mapType = 0 : ((a37 = new Image).onload = function() {
					tq.tr.a38(a37, 1), a37.onload = null, a37 = null
				}, a37.src = a2y))
			}(ej, a2z, "canvas"), a30(ej, a2z, "passableWater", 0, 1), a30(ej, a2z, "passableMountains", 0, 1), a30(ej, a2z, "playerCount", 1, 512), a30(ej, a2z, "humanCount", 1, 1), a30(ej, a2z, "selectedPlayer", 0, 0), a30(ej, a2z, "gameMode",
				0, 1), a30(ej, a2z, "playerMode", 0, 0), a30(ej, a2z, "battleRoyaleMode", 0, 0), a30(ej, a2z, "numberTeams", 0, 8), a30(ej, a2z, "isZombieMode", 0, 0), a30(ej, a2z, "isContest", 0, 0), a30(ej, a2z, "isReplay", 0, 0), a33(ej, a2z,
				"elo", 16, 2, 16383), a30(ej, a2z, "colorsType", 0, 1), a30(ej, a2z, "colorsPersonalized", 0, 1), a33(ej, a2z, "colorsData", 32, 512, 262143), a30(ej, a2z, "selectableColor", 0, 1), a33(ej, a2z, "teamPlayerCount", 16, 9, 512),
			a30(ej, a2z, "neutralBots", 0, 1), a30(ej, a2z, "botDifficultyType", 0, 3), a30(ej, a2z, "botDifficultyValue", 0, 15), a33(ej, a2z, "botDifficultyTeam", 8, 9, 15), a33(ej, a2z, "botDifficultyData", 8, 512, 15), a30(ej, a2z,
				"spawningType", 0, 2), a30(ej, a2z, "spawningSeed", 0, 16383), a33(ej, a2z, "spawningData", 16, 1024, 4095), a30(ej, a2z, "selectableSpawn", 0, 1), a30(ej, a2z, "playerNamesType", 0, 2),
			function(a2y, a2z, dp, size, max) {
				var a3A = a2y[dp];
				if (Array.isArray(a3A)) {
					for (var a3B = new Array(size), u = Math.min(a3A.length, size), a5 = 0; a5 < u; a5++) a3B[a5] = a36(a3A[a5]) ? a3A[a5].slice(0, max) : "";
					a3B.fill("", u), a2z[dp] = a3B
				}
			}(ej, a2z, "playerNamesData", 512, 20), a30(ej, a2z, "selectableName", 0, 1), a30(ej, a2z, "aIncomeType", 0, 2), a30(ej, a2z, "aIncomeValue", 0, 255), a33(ej, a2z, "aIncomeData", 8, 512, 255), a30(ej, a2z, "tIncomeType", 0, 2), a30(
				ej, a2z, "tIncomeValue", 0, 255), a33(ej, a2z, "tIncomeData", 8, 512, 255), a30(ej, a2z, "iIncomeType", 0, 2), a30(ej, a2z, "iIncomeValue", 0, 255), a33(ej, a2z, "iIncomeData", 8, 512, 255), a30(ej, a2z, "sResourcesType", 0, 2),
			a30(ej, a2z, "sResourcesValue", 0, 2047), a33(ej, a2z, "sResourcesData", 16, 512, 2047), d7.vL(), d7.i.qc[0] = 0, d7.dF(19))
	}

	function a30(a2y, a2z, dp, min, max) {
		a2y = a2y[dp];
		a2z[dp] = "number" == typeof a2y && min <= a2y && a2y <= max ? Math.floor(a2y) : a2z[dp]
	}

	function a36(v) {
		return "string" == typeof v
	}

	function a33(a2y, a2z, dp, a39, size, max) {
		var a3A = a2y[dp];
		if (Array.isArray(a3A)) {
			for (var a3B = new(8 === a39 ? Uint8Array : 16 === a39 ? Uint16Array : Uint32Array)(size), u = Math.min(a3A.length, size), a5 = 0; a5 < u; a5++) a3B[a5] = aQ.ld(a3A[a5], 0, max);
			a2z[dp] = a3B
		}
	}
	this.a2i = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = a2j, input.click()
	}, this.a2k = function() {
		for (var a2o, a2r, a2l = cr.data, keys = Object.keys(a2l), a2m = {}, a5 = 0; a5 < keys.length; a5++) {
			var key = keys[a5];
			a2l[key] instanceof Uint8Array || a2l[key] instanceof Uint16Array || a2l[key] instanceof Uint32Array ? a2m[key] = Array.from(a2l[key]) : a2m[key] = a2l[key]
		}
		a2m.canvas = 2 === a2m.mapType && a2m.canvas ? a2m.canvas.toDataURL() : null, a2o = a2m, a2o = JSON.stringify(a2o, null, 2), a2o = new Blob([a2o], {
			type: "application/json"
		}), (a2r = document.createElement("a")).href = URL.createObjectURL(a2o), a2r.download = "tt_scenario.json", a2r.click()
	}
}

function a3C() {
	var a3D, a3E, a3F;

	function a3I(a3K) {
		for (var a5 = a3D - 1; 0 <= a5; a5--) 0 === a3F[a3E[a5]] && f4.g0[a3E[a5]] >= a3K && a3H(a3E[a5])
	}

	function a3G(player) {
		var kG;
		64 === a3F[player] ? a3F[player] = 6 : (kG = f4.g0[player], a3F[player] = kG < 1e3 ? 3 : kG < 1e4 ? 2 : kG < 6e4 ? 1 : 0)
	}
	this.a4 = function() {
		a3D = 0, a3E = new Uint16Array(cr.fc), a3F = new Uint8Array(cr.fc)
	}, this.ar = function() {
		for (var a5 = a3D - 1; 0 <= a5; a5--) 64 === a3F[a3E[a5]] ? a3G(a3E[a5]) : 0 == a3F[a3E[a5]]-- && (a3G(a3E[a5]), a3H(a3E[a5]));
		16e4 <= f4.g0[fH[0]] && (a3I(16e4), 3e5 <= f4.g0[fH[0]]) && a3I(3e5), aV.et.ey(cr.gJ) && (gK.gL[7] = Math.max(f4.g0[cr.gJ], gK.gL[7]))
	}, this.pP = function(player) {
		for (var a6, a5 = a3D - 1; 0 <= a5; a5--)
			if (player === a3E[a5]) {
				for (a3D--, a6 = a5; a6 < a3D; a6++) a3E[a6] = a3E[a6 + 1];
				return
			}
	}, this.oR = function(player, a3L) {
		for (var a5 = a3D - 1; 0 <= a5; a5--)
			if (player === a3E[a5]) return;
		a3E[a3D++] = player, a3F[player] = a3L ? 2 : 64
	}
}

function a1s() {
	(a3M = void 0 === a3M ? document.createElement("canvas") : a3M).width = aS.aT, a3M.height = aS.aU, a1z = a3M.getContext("2d", {
		alpha: !0
	}), a20 = a3N = null, a20 = a1z.getImageData(0, 0, aS.aT, aS.aU), a3N = a20.data, aV.aW.bZ(a3N)
}

function t0() {
	this.tP = function(canvas, tI, t) {
		var aZ = canvas.width,
			b6 = canvas.height,
			jA = aV.d1.bN(aZ, b6),
			gq = aV.d1.getContext(jA, !0),
			canvas = (gq.drawImage(canvas, 0, 0), gq.getImageData(0, 0, aZ, b6));
		return tI(canvas.data, aZ, b6, t), gq.putImageData(canvas, 0, 0), jA
	}, this.tN = function(bb, aZ, b6) {
		for (var aJ = aZ - 1; 0 <= aJ; aJ--)
			for (var aK = b6 - 1; 0 <= aK; aK--) {
				var a5 = 4 * (aJ + aK * aZ);
				bb[3 + a5] = bb[a5], bb[a5] = bb[1 + a5] = bb[2 + a5] = 255
			}
	}, this.tJ = function(bb, aZ, b6) {
		for (var aJ = aZ - 1; 0 <= aJ; aJ--)
			for (var aK = b6 - 1; 0 <= aK; aK--) {
				var a5 = 4 * (aJ + aK * aZ);
				bb[1 + a5] > bb[2 + a5] + 10 && (bb[3 + a5] = bb[a5], bb[1 + a5] = bb[2 + a5])
			}
	}, this.tL = function(bb, aZ, b6, t) {
		for (var gap = Math.floor(Math.min(aZ, b6) * t), aJ = 0; aJ < aZ; aJ++)
			for (var a5, aK = 0; aK < b6; aK++)(aJ < gap || aK < gap || aZ - gap <= aJ || b6 - gap <= aK) && (bb[3 + (a5 = 4 * (aJ + aK * aZ))] = 255 - 255 * (bb[1 + a5] - bb[a5]) / (255 - bb[a5]))
	}, this.u8 = function(bb, aZ, b6, t) {
		for (var aJ = aZ - 1; 0 <= aJ; aJ--)
			for (var aK = b6 - 1; 0 <= aK; aK--) {
				var a5 = 4 * (aJ + aK * aZ);
				bb[a5] = t[0], bb[1 + a5] = t[1], bb[2 + a5] = t[2]
			}
	}, this.tK = function(bb, aZ, b6, t) {
		for (var gap = Math.floor(aZ * t), aJ = 0; aJ < aZ; aJ++)
			for (var a5, aK = 0; aK < b6; aK++)(aJ < gap || aK < gap || aZ - gap <= aJ || b6 - gap <= aK) && (bb[a5 = 4 * (aJ + aK * aZ)] = bb[1 + a5] = bb[2 + a5] = 0)
	}, this.tM = function(bb, aZ, b6) {
		for (var aK, a5, aJ = aZ - 1; 0 <= aJ; aJ--)
			for (aK = b6 - 1; 0 <= aK; aK--) 200 < bb[1 + (a5 = 4 * (aJ + aK * aZ))] && bb[1 + a5] - 20 > bb[a5] && bb[1 + a5] - 20 > bb[2 + a5] ? bb[a5] + bb[2 + a5] < 40 ? bb[3 + a5] = 0 : (bb[3 + a5] = bb[a5], bb[a5] = 255, bb[1 + a5] = 255,
				bb[2 + a5] = 255) : bb[a5] < 50 && bb[1 + a5] < 50 && bb[2 + a5] < 50 && (bb[a5] + bb[1 + a5] + bb[2 + a5] < 50 ? bb[3 + a5] = 180 : bb[3 + a5] = 180 + Math.floor(75 * (bb[a5] + bb[1 + a5] + bb[2 + a5] - 50) / 100))
	}, this.tO = function(bb, aZ, b6) {
		for (var aK, a5, aJ = aZ - 1; 0 <= aJ; aJ--)
			for (aK = b6 - 1; 0 <= aK; aK--) bb[1 + (a5 = 4 * (aJ + aK * aZ))] > bb[a5] + 20 && bb[1 + a5] > bb[2 + a5] + 20 && bb[a5] + bb[2] < 40 && (bb[3 + a5] = 255 - bb[1 + a5], bb[a5] = bb[1 + a5] = bb[2 + a5] = bb[a5])
	}, this.rQ = function(bb, aZ, b6, t) {
		for (var jn = aZ >> 1, aJ = 0; aJ < aZ; aJ++)
			for (var aK = 0; aK < b6; aK++) Math.sqrt((aJ - jn) * (aJ - jn) + (aK - jn) * (aK - jn)) > t * jn && (bb[4 * (aJ + aK * aZ) + 3] = 0)
	}
}

function a3O() {
	var a3P, a3Q, a3R;
	this.a4 = function() {
		a3P =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), a3Q =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), a3R = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a3S = ["K ", " Y", "E ", " Z", " z", " s", "S "], a3T = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a5 = a3P.length - 1; 0 <= a5; a5--)
			for (var a6 = a3S.length - 1; 0 <= a6; a6--) a3P[a5] = a3P[a5].replace(a3S[a6], a3T[a6]);
		if (__fx.settings.realisticNames) a3P = realisticNames;
	}, this.a1o = function() {
		var u = cr.fb,
			f5 = f4.f5,
			ft = f4.ft,
			playerNamesData = cr.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < u)
			for (var a5 = 0; a5 < u; a5++) f5[a5] = ft[a5] = "Player " + fj.fk(1e3);
		else
			for (a5 = 0; a5 < u; a5++) f5[a5] = ft[a5] = __fx.nameFilter.filter(playerNamesData[a5])
	}, this.d = function() {
		if (9 === cr.fW) {
			for (var jn = fj.random(), a3Z = a3R, a3a = a3Q, hF = kj.hF, u = a3Z.length, bA = cr.data.teamPlayerCount[7], f5 = f4.f5, ft = f4.ft, a5 = bA - 1; a5 >= cr.fb; a5--) f5[a5] = ft[a5] = a3Z[(a5 + jn) % u];
			for (u = a3a.length - 1, a5 = bA; a5 < cr.fc; a5++) f5[a5] = ft[a5] = a3a[hF[a5] ? u : a5 % u]
		} else(2 === cr.data.playerNamesType ? function() {
			for (var u = cr.fc, f5 = f4.f5, ft = f4.ft, playerNamesData = cr.data.playerNamesData, a5 = cr.fb; a5 < u; a5++) f5[a5] = ft[a5] = __fx.nameFilter.filter(playerNamesData[a5])
		} : 1 === cr.data.playerNamesType ? function() {
			for (var f5 = f4.f5, ft = f4.ft, a5 = cr.fb; a5 < cr.fc; a5++) f5[a5] = ft[a5] = "Bot " + fj.fk(1e3)
		} : function() {
			for (var a3b = a3P, u = a3b.length, jn = fj.random(), f5 = f4.f5, ft = f4.ft, a5 = cr.fb; a5 < cr.fc; a5++) f5[a5] = ft[a5] = a3b[(a5 + jn) % u]
		})()
	}
}

function a3c() {
	a3d() ? (a3e(), a3f !== cr.fc && a3g()) : a3h()
}

function a3g() {
	iE.a3i(), iE.a3j(f4.g4[a3f]), iE.a3j(f4.g5[a3f]), aS.a3k(aS.bL) && iE.a3j(f4.g6[a3f]), iE.a3l(f4.g3[a3f]), iE.a3m(f4.g5[a3f]), iE.a3m(f4.g6[a3f]), iE.a3n(), iE.a3o()
}

function a3e() {
	a3p = !0, iH.a3q(a3r, a3s, a3t), iH.a3u(a3r, a3s), f4.g0[a3r] += a3v, iE.a3w(), a3x()
}

function a3d() {
	return (a3f === cr.fc ? a3y : a3z)()
}

function a3z() {
	var a40 = a3v * cr.a1X,
		a41 = a42(),
		a43 = a44(),
		a41 = a40 + 2 * a41 + a43,
		a46 = a47 * a3v;
	return a41 < a46 ? (a3t -= a41, gK.n6(a3r, a41, 13), a48(a41 - a40, a43), !0) : a49 && 0 === a43 ? (a3t -= a46, a46 += aV.et.mz(a3r, a41 - a46 + 1), gK.n6(a3r, a46, 13), a48(a46 - a40, 0), !0) : (a3t -= a46, gK.n6(a3r, a46, 13), a48(a46 - a40,
		a43), !1)
}

function a48(a46, a43) {
	if (0 < a43) {
		if (a46 <= a43) return gK.n6(a3f, a46, 13), void iH.a4A(a3f, a3r, a43 - a46);
		iH.a4A(a3f, a3r, 0), a46 -= a43
	}
	a46 = aQ.aR(a46, 2), a46 = Math.min(f4.g2[a3f], a46), gK.n6(a3f, a46, 13), f4.g2[a3f] -= a46
}

function a44() {
	return iH.a4B(a3f, a3r)
}

function a42() {
	return aQ.aR(a3v * f4.g2[a3f], 1 + aQ.aR(10 * f4.g0[a3f], 16))
}

function a3y() {
	var a4C = a3v * cr.a1X;
	return a3t -= a4C, gK.n6(a3r, a4C, 13), !0
}

function a3x() {
	for (var a5 = a3v - 1; 0 <= a5; a5--) f4.g3[a3r].push(a4D[a5]), f4.g4[a3r].push(a4D[a5]), fK.a4E(a4D[a5], a3r)
}

function a4F() {
	this.ar = function() {
		if (bV.es() % 51 == 45)
			for (var u = am.i.hS, mo = am.i.mo, mp = am.i.mp, ks = am.i.ks, hN = am.i.hN, a4H = kj.a4H, hF = kj.hF, a5 = 0; a5 < u; a5++) {
				var mu, player, zI, c2 = mo[a5];
				c2 % 64 == 6 || (mu = mp[a5], (player = am.cI.a4I(mu[mu.length - 1])) < 0) || !aV.et.yN(player, hN[a5] >> 3) || fj.fk(1e3) >= a4H[hF[player]] || ! function(a4L, mu) {
					for (var u = mu.length - 1, yW = am.i.mq[a4L], h3 = 0, a5 = yW + 1; a5 < u; a5++) h3 += aj.yS(mu[a5], mu[a5 + 1]);
					return (h3 += aj.yS(aj.o3(am.i.hM[a4L]), mu[yW + 1])) <= 60
				}(a5, mu) || (zI = ks[a5], 64 <= c2 && am.cM.zH(player, zI)) || function(player, mu, zI, a4L, c2) {
					am.cC.yd(player) && aV.et.a4M(player, kj.a4N[kj.hF[player]], 32, 0) && (am.i.mo[a4L] = 64 + c2 % 64, am.cM.gE(zI, am.i.mm), gx.au[0] = am.cG.s2(mu), gx.iP[1] = 6, aV.et.a4O(player), am.i.aa(player))
				}(player, mu, zI, a5, c2)
			}
	}
}

function a4P(data) {
	var pw, a4Q;

	function a4V(lR, a5T) {
		if (!data.a4S) {
			if (data.a5K) {
				if (a5T) return
			} else {
				if (!a5T) return;
				if (data.a0 < 1e4) return
			}
			var a5W, lV = new lW,
				a5U = 1e5 <= data.a0,
				a5V = lV.lX(a5T ? (a5U ? "⚠️ " : "") + L(175) : L(176)),
				a5Y = (a5U && (a5V.style.color = "yellow"), a5T ? lV.a50(L(177, [aV.hf.a4q(data.a0, .01, 0)])) : ((a5W = new lc({
					value: data.a5X,
					go: -1
				})).ej.readOnly = !0, a5W.ej.type = "password", lV.lb(a5W), lV.lb(new k0([new ir(L(110), function(ej) {
					return ej.textContent === L(110) ? (ej.textContent = L(111), a5W.ej.type = "text") : (ej.textContent = L(110), a5W.ej.type = "password"), !0
				}).button, new ir(L(107), function(ej) {
					return aV.d1.a51(a5W.ej), aV.d1.a4v(ej), !0
				}).button]))), lV.a4n(L(a5T ? 176 : 178)).style.marginTop = "0.75em", new lc({
					value: "",
					go: -1
				}, 0, 0)),
				a5Z = (a5Y.ej.type = "email", a5Y.ej.autocomplete = "email", a5Y.ej.name = "email", a5Y.ej.inputMode = "email", a5Y.ej.spellcheck = !1, lV.lb(a5Y), lV.lb(new k0([new ir(L(179), function(ej) {
					return f.a4x.s({
						action: 3,
						v: a5Y.ej.value.trim().substring(0, 63)
					}), aV.d1.a4v(ej), !0
				}).button])), a5T && lV.a50(L(180)), lV.a4n(L(181)).style.marginTop = "0.75em", new lc({
					value: "",
					go: -1
				}, 1));
			lV.lb(a5Z), lV.lb(new k0([new ir(L(182), function() {
				f.a4x.aF({
					action: 4,
					aE: "",
					value: Math.floor(+a5Z.ej.value)
				}), d7.dF(8, d7.rs().eL, new tt(18))
			}).button])), lR.push(lV)
		}
	}
	this.show = function() {
		data.a4S && a4R.a62("account", data.aE), pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), a4Q.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(data.username, [new ir("⬅️ " + L(4), function() {
		a4R.clear(), d7.lO()
	}), new ir(data.a4S ? "🔄 " + L(82) : L(83), function() {
		d7.dF(8, data.a4S ? d7.rs().eL : void 0, new tt(25, {
			action: 0,
			aE: data.aE,
			a4T: data.a4T
		}))
	}, 0, 0, 1)]), a4Q = new lJ(pw.lK, function() {
		var lR = [];
		a4V(lR, 1), lR.push(function() {
				var lV = new lW;
				lV.lX(L(148)), data.a5K && (lV.a4n("✅ " + L(149)).style.marginBottom = "0.75em");
				var zs = data.a5L;
				zs < 1 ? (lV.a4n(L(150)), 0 === data.a5M ? lV.a50(L(151)) : 1 === data.a5M ? lV.a50(L(152)) : 2 === data.a5M ? lV.a50(L(153)) : 3 === data.a5M ? lV.a50(L(154)) : 4 === data.a5M ? lV.a50(L(155)) : 5 === data.a5M ? lV.a50(L(
					156)) : 6 === data.a5M ? lV.a50(L(157)) : lV.a50(L(158))) : (lV.a4n(L(159)), zs = zs < 2 ? L(160) : zs < 61 ? 2 === zs ? L(161) : L(162, [zs - 1]) : zs < 84 ? 61 === zs ? L(163) : L(164, [zs - 60]) : zs < 255 ?
					84 === zs ? L(165) : L(166, [zs - 83]) : L(167), lV.a50(zs));
				{
					var a4z, a4t;
					lV.lb(new a52), data.a4S && (a4z = lV.a50(), lV.lb(new k0([new ir(r.mg.p7(data.aE) ? L(168) : L(169), function(ej) {
						return r.mg.pB(data.aE) ? (ej.textContent = L(168), a4t(1)) : (ej.textContent = L(169), a4t(0)), !0
					}).button])), a4t = function(kv) {
						a4z.textContent = kv ? L(170) : ""
					}, r.mg.p7(data.aE) && a4t(1), lV.lb(new a52))
				}
				var nx, tf = new lc({
					value: data.username,
					go: -1
				});
				tf.ej.readOnly = !0, lV.lb(tf), lV.lb(new k0([new ir(L(107), function(ej) {
					return aV.d1.a51(tf.ej), aV.d1.a4v(ej), !0
				}).button])), data.a4S || lV.a50(L(171));
				(data.a5N || data.a5O || data.a5P) && (lV.lb(new a52), lV.a50(L(172)), data.a5N && (lV.a50("• Account Timeout").style.color = "orange"), data.a5O && ((nx = lV.a50("• Muted")).style.color = "orange", nx.style.marginTop =
					"0.5em"), data.a5P) && ((nx = lV.a50("• Redacted")).style.color = "orange", nx.style.marginTop = "0.5em");
				data.a4S && (lV.lb(new a52), lV.a4n(f.i.eJ("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", lV.lb(new k0([new ir(L(173), function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 0
					}), aV.d1.a4v(ej), !0
				}, dZ.om).button])), lV.lb(new k0([new ir(L(174), function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 1
					}), aV.d1.a4v(ej), !0
				}, dZ.om).button])), lV.lb(new k0([new ir("Cheater", function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 2
					}), aV.d1.a4v(ej), !0
				}, dZ.om).button])), lV.lb(new k0([new ir("False Reporter", function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 3
					}), aV.d1.a4v(ej), !0
				}, dZ.om).button])), zs = "CRTOR" === (zs = r.buffer.data[105].value) || "ADMIN" === zs) && (lV.lb(new k0([new ir("Block Account", function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 4
					}), aV.d1.a4v(ej), !0
				}, dZ.a5R).button])), lV.lb(new k0([new ir("Ban IP", function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 5
					}), aV.d1.a4v(ej), !0
				}, dZ.a5R).button])), lV.lb(new k0([new ir("Gold Seizure", function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 6
					}), aV.d1.a4v(ej), !0
				}, dZ.a5R).button])), lV.lb(new k0([new ir("Remove Punishments", function(ej) {
					return f.a4x.aF({
						action: 3,
						aE: data.aE,
						value: 7
					}), aV.d1.a4v(ej), !0
				}, dZ.a5S).button])));
				return lV
			}()),
			function(lR) {
				var lV, a4z, rn, a5b, a4u, a4y, a4w;
				data.a4S || ((lV = new lW).lX(L(183)), (a4z = lV.a50(data.a5a.length + " / 160")).style.textAlign = "center", rn = !0, (a5b = new le(0, 1, function(ej) {
					ej = ej.target.value.length;
					a4z.textContent = ej + " / 160", 160 < ej ? rn && (rn = !1, a4y.j2(1)) : rn || (rn = !0, a4y.j2(0))
				})).ej.rows = 6, a5b.ej.style.fontSize = "1em", a5b.lf(data.a5a), lV.lb(a5b), 0 !== data.a5c ? (a4y = new ir(L(184), function() {
					if (!rn) return !0;
					d7.dF(8, d7.rs().eL, new tt(29, {
						action: 1,
						v: a5b.lQ().substring(0, 160)
					}))
				}, 0, 0, 1), lV.lb(new k0([a4y.button])), lV.lb(new k0([new ir(1 === data.a5c ? L(185) : L(186), function() {
					d7.dF(8, d7.rs().eL, new tt(29, {
						action: 0,
						v: ""
					}))
				}, 0, 0, 1).button])), lV.a50(1 === data.a5c ? L(187, [data.a5d - 1]) : L(188, [data.a5d - 1])), lV.a50(L(189, [data.a5e]))) : (a4u = new ir(L(190), function() {
					if (!a5b.ej.readOnly) return !0;
					d7.dF(8, d7.rs().eL, new tt(29, {
						action: 1,
						v: a5b.lQ().substring(0, 160)
					}))
				}, 1), a4y = new ir(L(104), function(ej) {
					if (ej.textContent === L(104)) {
						if (!rn) return !0;
						ej.textContent = L(105), a5b.ej.readOnly = !0, a4u.j2(0), a4u.button.style.color = dZ.j1
					} else a4w();
					return !0
				}), lV.lb(new k0([a4y.button])), lV.a50(L(189, [data.a5e])), a4w = function() {
					a4y.button.textContent = L(104), a5b.ej.readOnly = !1, a4u.j2(1), a4u.button.style.color = dZ.dc
				}, lV.lb(new k0([a4u.button]))), lR.push(lV))
			}(lR),
			function(lR) {
				var lV;
				data.a4S && 0 !== data.a5c && ((lV = new lW).lX(L(191)), lV.a5f(data.a5a), lV.lb(new k0([new ir(L(192, 0, "Report"), function(ej) {
					return f.i.e4(0) && (aV.d1.a4v(ej), f.a4x.aD({
						action: 5,
						aE: data.aE
					})), !0
				}, 0, 0, 1).button])), lR.push(lV))
			}(lR), lR.push(function() {
				var lV = new lW,
					a4o = (lV.lX(L(84)), lV.a4n(f.i.eJ("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(85), L(86), L(87), L(88), L(89), L(90), L(91), L(92), L(93), L(94), L(95), L(96), L(97), L(98)]),
					jn = data.a4p;
				return lV.a4n(L(99) + aV.hf.a4q(data.a0, .01, 2) + "<br>" + L(100) + (jn + 1) + " / " + data.a4r + "<br>" + L(101) + a4o[function(jn, a0) {
					if (jn < 10) return 0;
					if (jn < 30) return 1;
					if (jn < 60) return 2;
					if (3e4 <= (a0 = aQ.aR(a0, 100))) return 3;
					if (12e3 <= a0) return 4;
					if (7e3 <= a0) return 5;
					if (3e3 <= a0) return 6;
					if (1e3 <= a0) return 7;
					if (500 <= a0) return 8;
					if (200 <= a0) return 9;
					if (70 <= a0) return 10;
					if (20 <= a0) return 11;
					if (3 <= a0) return 12;
					return 13
				}(jn, data.a0)]), lV
			}()), data.a4S && lR.push(function() {
				var lV = new lW,
					tf = (lV.lX(L(102)), lV.a4n(f.i.eJ("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new lc({
						value: r.buffer.data[147].value,
						go: -1
					}, 1, void 0, function(ej) {
						r.md.pE(147, a4t(ej.target.value))
					})),
					a4u = (lV.lb(tf), new ir(L(103), function(ej) {
						return tf.ej.readOnly && f.i.e4(0) && (aV.d1.a4v(ej), a4w(), f.a4x.aF({
							action: 0,
							aE: data.aE,
							value: parseInt(r.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					a4y = new ir(L(104), function(ej) {
						return ej.textContent === L(104) ? (ej.textContent = L(105), tf.ej.readOnly = !0, a4u.j2(0), a4u.button.style.color = dZ.j1, r.md.pE(147, tf.ej.value), a4t(r.buffer.data[147].value)) : a4w(), !0
					}),
					a4z = (lV.lb(new k0([a4y.button])), lV.a50()),
					a4t = function(kv) {
						a4z.innerHTML = d7.i.a2e(kv, r.buffer.data[105].value, data.aE)
					},
					a4w = function() {
						a4y.button.textContent = L(104), tf.ej.readOnly = !1, a4u.j2(1), a4u.button.style.color = dZ.dc
					};
				return a4t(r.buffer.data[147].value), lV.lb(new k0([a4u.button])), lV
			}());
		lR.push(function() {
			var lV = new lW,
				tf = (lV.lX(L(106)), new lc({
					value: data.aE,
					go: -1
				})),
				a53 = (tf.ej.readOnly = !0, lV.lb(tf), lV.lb(new k0([new ir(L(107), function(ej) {
					return aV.d1.a51(tf.ej), aV.d1.a4v(ej), !0
				}).button])), lV.lb(new a52), new lc({
					value: data.aE,
					go: -1
				}));
			return lV.lb(a53), lV.lb(new k0([new ir(L(108), function(ej) {
				d7.dF(8, d7.rs().eL, new tt(25, {
					action: 0,
					aE: a53.ej.value,
					a4T: 0
				}))
			}).button])), lV
		}()), data.a4S || (lR.push(function() {
			var lV = new lW,
				a54 = (lV.lX(L(109)), new lc(r.buffer.data[106])),
				customPasswordInput = (a54.ej.readOnly = !0, a54.ej.type = "password", lV.lb(a54), lV.lb(new k0([new ir(L(110), function(ej) {
					return ej.textContent === L(110) ? (ej.textContent = L(111), a54.ej.type = "text") : (ej.textContent = L(110), a54.ej.type = "password"), !0
				}).button, new ir(L(107), function(ej) {
					return aV.d1.a51(a54.ej), aV.d1.a4v(ej), !0
				}).button])), new lc({
					value: "",
					go: -1
				}));
			return customPasswordInput.ej.placeholder = "Custom new password (optional)", lV.lb(customPasswordInput), lV.lb(new k0([new ir(L(112), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.ej.value) && d7.dF(8, d7.rs().eL, new tt(15))
			}).button])), lV.lX(L(113), "0.8em"), lV.a50(L(114)), lV.a50(L(115)), lV.a50(L(116)), lV
		}()), lR.push(function() {
			var lV = new lW;
			return lV.lX(L(117)), lV.lb(new k0([new ir(L(118), function() {
				d7.dF(6, d7.rs().eL)
			}).button])), lV.lb(new k0([new ir(L(119), function() {
				r.md.pE(105, ""), d7.dF(8, d7.rs().eL, new tt(18))
			}).button])), lV.lb(new k0([new ir(L(120) + r.buffer.data[105].value, function() {
				d7.dF(4, 0, new ol(L(121), L(122), !0, [new ir("⬅️ " + L(4), function() {
					d7.dF(7, d7.sO(7).eL)
				})]))
			}, dZ.om).button])), lV
		}()), lR.push(function() {
			function a57(go) {
				a56[0].j2(0 === go ? dZ.jB : dZ.vI), a56[1].j2(0 === go ? dZ.jB : dZ.om)
			}
			var a55, a56, lV = new lW;
			lV.lX(L(126)), lV.a50(L(127)), r.i.a59();
			return a56 = [new ir(L(128), function() {
				var go = Math.min(r.buffer.data[117].value, a55.a58.length - 1);
				go < 1 || (go = r.i.v4(go), r.md.pE(105, go.aE), r.md.pE(106, go.password), d7.dF(8, d7.rs().eL, new tt(18)))
			}, dZ.jB, 1), new ir(L(125), function() {
				var go = Math.min(r.buffer.data[117].value, a55.a58.length - 1);
				if (!(go < 1)) {
					a55.a58[go].remove(), a55.a58.splice(go, 1);
					for (var a5 = go; a5 < a55.a58.length; a5++) a55.a58[a5].name = "" + a5;
					r.i.a5A(go), go = r.buffer.data[117].value, a55.a58[go].textContent = a55.a58[go].textContent.replace("⚪", "🟢"), a57(go)
				}
			}, dZ.jB, 1)], a55 = new lZ(r.buffer.data[117], a57), __fx.savedAccounts.decorate(a55.a58, r.buffer.data[117].la), a57(0), a55.a58[0].style.marginTop = "0.5em", lV.lY(a55), lV.lb(new k0([a56[0].button])), lV.lb(
				new k0([new ir("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(r.buffer.data[117].value)
				}).button])), lV.lb(new k0([a56[1].button])), lV
		}()));
		return lR.push(function() {
				var lV = new lW,
					a4o = (lV.lX(L(132)), [L(133), L(134), L(135), L(136)]),
					jn = data.a5E;
				return lV.a4n(L(137) + (data.zg / 100).toFixed(2) + "<br>" + L(100) + (jn + 1) + " / " + data.a4r + "<br>" + L(101) + a4o[jn < 10 ? 0 : jn < 50 ? 1 : jn < 200 ? 2 : 3]), lV
			}()), lR.push(function() {
				var lV = new lW;
				return lV.lX(L(129)), lV.a4n(L(130) + aV.hf.a4q(data.a5B, .1, 1) + "<br>" + L(100) + (data.a5C + 1) + " / " + data.a4r + "<br>" + L(131) + data.a5D), lV
			}()),
			function(lR) {
				var lV = new lW,
					a5g = data.a5h,
					a5k = (lV.lX(L(193)), lV.a4n(L(194, [data.a5i.length ? "[" + data.a5i + "]" : "-"])), lV.a4n(L(195, [aV.hf.a4q(a5g, .01, 2)])), lV.a4n(L(196, [data.a5j + 1 + " / " + data.a4r])), data.a5l),
					a5m = (lV.a4n(L(197, [aV.hf.a4q(a5k, .1, 1)])), data.a5n);
				lV.a4n(L(198, [a5m])), lV.a4n(L(199, [aV.hf.a4q(a5k / Math.max(a5m, 1), .1, 2)])), a5g = data.a5o, lV.lX(L(200), "0.8em"), lV.a4n(L(194, [data.a5p.length ? "[" + data.a5p + "]" : "-"])), lV.a4n(L(195, [aV.hf.a4q(a5g, .01,
						2)])), a5k = data.a5q, lV.a4n(L(197, [aV.hf.a4q(a5k, .1, 1)])), a5m = data.a5r, lV.a4n(L(198, [a5m])), lV.a4n(L(199, [aV.hf.a4q(a5k / Math.max(a5m, 1), .1, 2)])), lV.a4n(f.i.eJ("/wiki/clans"), "0.75em").style
					.marginTop = "0.8em", lR.push(lV)
			}(lR),
			function(lR) {
				var lV = new lW;
				lV.lX(L(201)), lV.a4n(L(137) + (data.a5s / 10).toFixed(1) + "<br>" + L(101) + (data.a5t.length ? L(202, [data.a5t]) : L(203))), data.a4S && lV.lb(new k0([new ir(L(146), function(ej) {
					return f.i.e4(0) && (aV.d1.a4v(ej), f.a4x.aD({
						action: 4,
						aE: data.aE
					})), !0
				}, 0, 0, 1).button]));
				lV.a4n(f.i.eJ("/wiki/clans"), "0.75em").style.marginTop = "0.8em", lR.push(lV)
			}(lR), lR.push(function() {
				var lV = new lW;
				{
					var tf, a4y, a5J, a4z, a4t, a4w;
					lV.lX(L(144)), lV.a4n(L(145) + data.a5H + "<br>" + L(100) + (data.a5I + 1) + " / " + data.a4r + "<br>" + L(101) + rg.nj(data.a5I)), data.a4S && ((tf = new lc({
						value: r.buffer.data[157].value,
						go: -1
					}, 1, void 0, function(ej) {
						r.md.pE(157, a4t(ej.target.value))
					})).ej.style.marginTop = "0.6em", lV.lb(tf), a4y = new ir(L(104), function(ej) {
						return ej.textContent === L(104) ? (ej.textContent = L(105), tf.ej.readOnly = !0, a5J[0].j2(0), a5J[0].button.style.color = dZ.j1, a4t(r.buffer.data[157].value)) : a4w(), !0
					}), lV.lb(new k0([a4y.button])), a5J = [new ir(L(146), function(ej) {
						return tf.ej.readOnly && f.i.e4(0) && (aV.d1.a4v(ej), a4w(), f.a4x.aF({
							action: 1,
							aE: data.aE,
							value: aQ.ld(parseInt(r.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], a4z = lV.a50(), a4t = function(kv) {
						return kv = aV.et.a2g(kv, 2, 3e4), a4z.textContent = L(147, [kv - 1, kv, r.buffer.data[105].value]), kv
					}, lV.lb(new k0([a5J[0].button])), a4w = function() {
						a4y.button.textContent = L(104), tf.ej.readOnly = !1, a5J[0].j2(1), a5J[0].button.style.color = dZ.dc
					}, a4t(r.buffer.data[157].value))
				}
				return lV
			}()),
			function(lR) {
				var lV, a61;
				data.a4S && !data.a5u || (0 === cT.id || data.a4S || data.a5u) && ((lV = new lW).lX("Patreon"), !data.a4S && data.a5v ? lV.lb(new k0([new ir(L(110), function() {
					f.a4x.aD({
						action: 7,
						aE: data.aE
					}), data.a5v = 0, d7.dF(7)
				}).button])) : data.a5u ? (lV.a4n(L(204, [(data.a5w / 100).toFixed(2)]) + "<br>" + L(205, [1 + data.a5x + " / " + data.a5y]) + "<br>" + L(206, [data.a5z ? L(207) : L(208)])), data.a4S || lV.lb(new k0([new ir(L(209),
					function() {
						f.a4x.aD({
							action: 8,
							aE: data.aE
						}), data.a5u = 0, r.md.pE(160, 0), d7.dF(7)
					}).button]))) : (lV.a4n(L(210), "0.75em").style.marginBottom = "0.3em", lV.a4n("  • " + L(211), "0.75em").style.whiteSpace = "pre", lV.a4n("  • " + L(212), "0.75em").style.whiteSpace = "pre", lV.a4n("  • " + L(
						213), "0.75em").style.whiteSpace = "pre", lV.a4n(L(214), "0.75em").style.marginTop = "1.0em", lV.a4n(L(215), "0.75em").style.marginTop = "1.0em", lV.a4n("<a href='" + l0.a60 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a61 = "https://www.patreon.com/oauth2/authorize?state=" + data.aE +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + f.i.eI() + "/", lV.a4n(L(216), "0.75em").style.marginTop = "1.0em", lV.a4n("<a href='" +
						a61 + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.a4S || (lV.lb(new a52), lV.lb(new k0([new ir(L(111), function() {
						f.a4x.aD({
							action: 6,
							aE: data.aE
						}), data.a5v = 1, d7.dF(7)
					}).button])), lV.a4n(L(217), "0.75em").style.marginTop = "0.75em")), lR.push(lV))
			}(lR), lR.push(function() {
				var lV = new lW,
					a4o = (lV.lX(L(138)), [L(139), L(140), L(141), L(142), "Scout", L(143)]),
					jn = data.a5F;
				return lV.a4n(L(137) + (data.a5G / 100).toFixed(2) + "<br>" + L(100) + (jn + 1) + " / " + data.a4r + "<br>" + L(101) + a4o[jn < 3 ? 0 : jn < 20 ? 1 : jn < 100 ? 2 : jn < 500 ? 3 : jn < 2e3 ? 4 : 5]), lV.a4n(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", lV
			}()),
			function(lR) {
				var lV, a55, a56, go, a57;
				data.a4S || r.mg.get().length && ((lV = new lW).lX(L(123)), go = 0, a57 = function() {
					var il = r.mg.get().length;
					a56[0].j2(go === il ? dZ.jB : dZ.vI), a56[1].j2(go === il ? dZ.jB : dZ.om)
				}, a56 = [new ir(L(124), function() {
					d7.dF(8, void 0, new tt(25, {
						action: 0,
						aE: r.mg.get()[go],
						a4T: 0
					}))
				}, dZ.jB, 1), new ir(L(125), function() {
					r.mg.pF(go), a55.a58[go].remove(), a55.a58.splice(go, 1);
					for (var a5 = go; a5 < a55.a58.length; a5++) a55.a58[a5].name = "" + a5;
					r.mg.get().length && (go = Math.max(go - 1, 0), a55.a58[go].textContent = a55.a58[go].textContent.replace("⚪", "🟢")), a57()
				}, dZ.jB, 1)], a57(), a55 = new lZ(r.mg.pA(), function(a5) {
					go = a5, a57()
				}), __fx.followedAccounts.decorate(a55.a58, r.mg.get()), a55.a58[0].style.marginTop = "0.5em", lV.lY(a55), lV.lb(new k0([a56[0].button])), lV.lb(new k0([new ir("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(go)
				}).button])), lV.lb(new k0([a56[1].button])), lR.push(lV))
			}(lR), a4V(lR, 0), lR
	}())
}

function a63() {
	this.a64 = 0, this.a65 = null, this.ox = null, this.cI = null, this.i = null, this.a0F = null, this.os = null, this.message = null, this.a66 = null, this.fp = null, this.a67 = null, this.a68 = new a69, this.v6 = 0, this.uJ = 0, this.a4 =
		function() {
			this.uJ = bV.aw, this.a64 = o.p.a0M(r.buffer.data[105].value, 5), this.ox = new a6A, this.cI = new a6B, this.i = new a6C, this.a0F = new a6D, this.os = new a6E, this.message = new sC, this.a66 = new a6F, this.fp = new zx, this.a67 =
				new a6G, this.i.a4(), kF.a4(), this.v6 = 1, cT.cU.setState(1), eW.setState(0), tX.turnstile.a6H()
		}, this.kD = function() {
			this.fp && this.fp.kD(), this.a65 = null, this.ox = null, this.cI = null, this.i = null, this.a0F = null, this.os = null, this.message = null, this.a66 = null, this.fp = null, this.a67 = null, this.v6 = 0, kF.kD(), cT.cU.setState(0)
		}
}

function a6I() {
	this.a6J = function() {
		var a6M;
		return !(f8.f9 < 3 || f4.g0[fH[0]] >= cr.lv >> 1) && (cr.f0 ? 9 !== cr.fW && (a6M = m9.a6N(), !(2 * m9.a6P(dA.fE()) >= a6M)) : function() {
			if (8 === cr.fW) return !1;
			var a6M = m9.a6N();
			if (2 * f4.g2[fH[0]] >= a6M) return !1;
			return !0
		}())
	}
}

function mi() {
	this.a4 = function() {
		! function() {
			var data = r.buffer.data;
			0 === data[2].oe && (cy.b6 > cy.aZ || 0 !== cT.id) && (data[2].value = data[2].a6S = 1);
			0 === data[100].oe && (data[100].value = data[100].a6S = (0 === cT.id ? "Player " : 1 === cT.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a5, data = r.buffer.data,
			u = data.length;
		for (a5 = 0; a5 < u; a5++) {
			var a7 = r.iy.a6T(a5, !0);
			data[a5] && data[a5].oe === a7 && (null === (a7 = r.iy.a6U(a5)) ? data[a5].value = data[a5].a6S : 2 === data[a5].type ? data[a5].value = a7 : (a7 = Number(a7), isNaN(a7) ? data[a5].value = data[a5].a6S : data[a5].value = a7))
		}
	}
}

function sx() {
	this.hm = function(jL) {
		return 0 === jL ? 1 === cr.d6 && cr.gH : 1 === jL ? 1 === cr.d6 && !cr.gH : 2 === cr.d6
	}, this.hn = function(player) {
		return 0 !== f4.fv[player] && 2 !== f4.fu[player]
	}, this.pZ = function(player) {
		return player === cr.gJ && 2 !== f4.fu[player]
	}, this.yN = function(player, oK) {
		return player !== oK && (0 === fF.fI[player] || fF.fI[player] !== fF.fI[oK])
	}, this.a6W = function() {
		return f8.f9 < 2 ? 0 : cr.f0 ? 1 < dA.a6X() : f4.g0[fH[1]]
	}, this.a6Y = function() {
		var f9 = f8.f9;
		if (0 !== f9) {
			if (!cr.f0) return !this.jy(fH[0]);
			for (var fI = fF.fI, a6Z = dA.fE(), fB = f8.fB, a5 = f9 - 1; 0 <= a5; a5--) {
				var bB = fB[a5];
				if (fI[bB] === a6Z && !this.jy(bB)) return 1
			}
		}
		return 0
	}, this.pS = function(player) {
		return player === cr.gJ
	}, this.o5 = function(oK, ku) {
		return f4.g2[cr.gJ] < ku * f4.g2[oK]
	}, this.jy = function(player) {
		return player >= cr.fb || 2 === f4.fu[player]
	}, this.ey = function(player) {
		return 0 !== f4.fv[player]
	}, this.a6a = function(player) {
		return player < cr.fb
	}, this.a6b = function(a6c, a6d) {
		return a6c !== a6d
	}, this.oL = function(player, kv) {
		var min;
		return kv = this.a6e(player, kv), f4.g2[player] += kv, f4.gC[player] && (min = Math.min(f4.gC[player], f4.g2[player]), f4.gC[player] -= min, f4.g2[player] -= min), kv
	}, this.a6e = function(player, kv) {
		var a6f = f4.g2[player];
		return kv = Math.min(kv, f4.g0[player] * cr.a1Z - a6f), kv = Math.min(kv, cr.xG - a6f), Math.max(kv, 0)
	}, this.a4M = function(player, yj, a6g, a6h) {
		var a6f = f4.g2[player],
			yj = aQ.aR(a6f * (yj + 1), 1024),
			a6g = aQ.aR(a6g * a6f, 1024),
			yj = Math.min(yj, a6f - a6g);
		return yj = a24.a6j(player, yj), gx.mt[0] = yj, gx.mt[1] = a6g, a6h <= yj
	}, this.a6k = function(player, a6l, a6m) {
		var player = f4.g2[player],
			a6i = aQ.aR(64 * player, 1024);
		return a6l = Math.min(a6l, player - a6i), a6l = this.a6e(a6m, a6l), gx.mt[0] = a6l, gx.mt[1] = a6i, 1 <= a6l
	}, this.a6n = function(player, a6l, a6m) {
		var player = f4.g2[player],
			a6i = aQ.aR(64 * player, 1024);
		return a6l = Math.min(a6l, player - a6i), this.a6e(a6m, a6l)
	}, this.a6o = function(a6l, a6m) {
		return a6l = this.a6e(a6m, a6l), gx.mt[0] = a6l, gx.mt[1] = 0, 1 <= a6l
	}, this.a6p = function(player, a6q) {
		return aQ.aR(f4.g2[player] * (a6q + 1), 1024)
	}, this.a6r = function(player, a6g) {
		a6g = aQ.aR(a6g * f4.g2[player], 1024);
		gx.mt[1] = a6g, f4.g2[player] -= a6g
	}, this.mz = function(player, a6s) {
		var z7, kw, av = f4.g2[player];
		return a6s <= av ? f4.g2[player] -= a6s : (f4.g2[player] = 0, kw = f4.gC[player] + (z7 = 5 * ((av = a6s - av) >> 2)), gK.n6(player, z7 - av, 12), kw <= cr.a1V ? f4.gC[player] = kw : (f4.gC[player] = cr.a1V, gK.n6(player, kw - cr.a1V,
			18))), a6s
	}, this.a6t = function(player, yj) {
		var g2 = f4.g2,
			a6f = g2[player],
			yj = aQ.aR(a6f * (yj + 1), 1024),
			a6i = Math.max(aQ.aR(a6f, 10), 1e3);
		return (yj = Math.min(yj, a6f - a6i)) < 0 ? (g2[player] = 0, a6i = Math.min(1e3, a6f + cr.a1V - f4.gC[player]), gx.mt[1] = a6i, f4.gC[player] += a6i - a6f, 0) : (gx.mt[1] = a6i, yj = a24.a6j(player, yj), g2[player] -= a6i + yj, a24.a6u(
			player, yj), yj)
	}, this.a4O = function(player) {
		var hF = gx.mt[0];
		f4.g2[player] -= hF + gx.mt[1], a24.a6u(player, hF)
	}, this.a6v = function(player, oK) {
		return (oK = Math.min(oK, cr.fc)) < cr.fc && 0 === f4.fv[oK] && (oK = cr.fc), (gx.a6w[0] = oK) === cr.fc || iE.iL(player, oK)
	}, this.a6x = function(player, a6m) {
		return 0 !== f4.fv[a6m] && !iE.iL(player, a6m)
	}, this.a6y = function(player, a6z) {
		for (var bB, u = f8.f9, qw = 0, a70 = fH, a5 = 0; a5 < u; a5++)
			if (bB = a70[a5], !this.jy(bB)) {
				if (player === bB) return !0;
				if (++qw > a6z) return !1
			} return !1
	}, this.eu = function(bB) {
		var mM = cr.f0 ? dA.mN() : f4.g0[fH[0]];
		return mM >= aQ.aR(bB * cr.lv, 100)
	}, this.a2g = function(kv, min, max) {
		return Math.floor(aQ.ld(isNaN(kv) ? 0 : Number(kv), min, max))
	}
}

function a71() {
	var input;

	function a72(ej) {
		(ej = ej.target.files) && 0 < ej.length && a75.a76(ej[0])
	}

	function a77(ej) {
		var jA = new Image;
		jA.onload = a78, jA.src = ej.target.result
	}

	function a78(ej) {
		var ej = ej.target,
			aZ = ej.width,
			b6 = ej.height,
			a79 = r.buffer.data[162].value,
			max = Math.min(aS.a7A, a79),
			a79 = (max = cT.id || jC.jD() ? Math.min(1400, a79) : max) / Math.max(aZ, b6);
		if (a79 < 1 && (aZ = Math.floor(a79 * aZ + .125), b6 = Math.floor(a79 * b6 + .125)), max < aZ || max < b6 || aZ < 10 || b6 < 10) a79 = "Invalid Image Dimensions!", cT.oX ? cT.oX.showToast(a79) : alert(a79);
		else {
			for (var max = document.createElement("canvas"), a79 = (max.width = aZ, max.height = b6, max.getContext("2d")), a7C = document.createElement("canvas"), a7D = (a7C.width = ej.width, a7C.height = ej.height, a7C.getContext("2d")), ej = (a7D
					.drawImage(ej, 0, 0), a7D.getImageData(0, 0, a7C.width, a7C.height)), a7D = a79.createImageData(aZ, b6), src = ej.data, a7G = a7D.data, a7H = a7C.width / aZ, a7I = a7C.height / b6, aK = 0; aK < b6; aK++)
				for (var aJ = 0; aJ < aZ; aJ++) {
					var a7J = Math.floor(aJ * a7H),
						a7J = 4 * (Math.floor(aK * a7I) * a7C.width + a7J),
						a7M = 4 * (aK * aZ + aJ);
					a7G[a7M] = src[a7J], a7G[1 + a7M] = src[1 + a7J], a7G[2 + a7M] = src[2 + a7J], a7G[3 + a7M] = 255
				}
			a79.putImageData(a7D, 0, 0), 20 === d7.lA && d7.rs().a78(max)
		}
	}
	this.a4 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = a72
	}, this.kD = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.a73 = function() {
		input.click()
	}, this.a76 = function(a2t) {
		var au = a2t.name.split("."),
			au = au[au.length - 1].toLowerCase();
		"gif" !== au && "jpg" !== au && "jpeg" !== au && "png" !== au || ((au = new FileReader).onload = a77, au.readAsDataURL(a2t))
	}
}

function sy() {
	var a7N = {
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
		a7O = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.a7P = function(a2) {
		return a2.replace(a7O, function(match) {
			return a7N[match] || match
		})
	}, this.hg = function(kv) {
		var a5, a7Q, a7R, a7S, a7T;
		if (kv < 0) return "-" + this.hg(Math.abs(kv));
		if (kv < 1e3) return kv.toString();
		for (a7Q = Math.floor(Math.log(kv + .5) / Math.log(10)) + 1, a7R = Math.floor((a7Q - 1) / 3), a7T = (a7S = kv.toString()).substring(a7Q - 3, a7Q), a5 = 1; a5 < a7R; a5++) a7T = a7S.substring(a7Q - 3 * (a5 + 1), a7Q - 3 * a5) + " " + a7T;
		return a7S.substring(0, a7Q - 3 * a7R) + " " + a7T
	}, this.mC = function(bB, a7Q) {
		return bB.toFixed(a7Q) + "%"
	}, this.a7U = function(kv, a7V) {
		return kv.toFixed(aQ.ld(Math.floor((void 0 === a7V ? 3 : a7V) - Math.log10(Math.max(kv, 1))), 0, 8))
	}, this.a4q = function(kv, ku, a7Q) {
		return (kv * ku).toFixed(a7Q)
	}, this.zr = function(username) {
		var hE, hX = username.indexOf("[");
		return !(hX < 0) && 1 < (hE = username.indexOf("]")) - hX && hE - hX <= 8 ? username.substring(hX + 1, hE).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zr;
	this.a7W = function(v) {
		for (var a6 = Math.floor(.5 * v.length + .5), r2 = Math.floor(.5 * (a6 - 1)), a5 = 0; a5 < r2; a5++)
			for (var av = -1; av < 2; av += 2) {
				var jA = a6 + av * a5;
				if (" " === v[jA]) return [this.zp(v.substring(0, jA)), this.a7X(v.substring(jA))]
			}
		return [v.substring(0, a6), v.substring(a6)]
	}, this.a7X = function(v) {
		for (var u = v.length, a5 = 0; a5 < u; a5++)
			if (" " !== v[a5]) return v.substring(a5);
		return v
	}, this.zp = function(v) {
		for (var a5 = v.length - 1; 0 <= a5; a5--)
			if (" " !== v[a5]) return v.substring(0, a5 + 1);
		return v
	}, this.a7Y = function(v, a7Z) {
		return v.split("(")[0] + "(🧈 " + a7Z.toFixed(2) + ")"
	}, this.startsWith = function(v, a7a) {
		return v.substring(0, a7a.length) === a7a
	}, this.a7b = function(v, a7a) {
		var u = v.length;
		return v.substring(u - a7a.length, u) === a7a
	}, this.lg = function(au, a7c, a7d) {
		var v = "",
			u = au.length - 1;
		a7d = a7d || "";
		for (var a5 = 0; a5 < u; a5++) v += a7d + au[a5] + a7d + ",", (a5 + 1) % a7c == 0 && (v += "\n");
		return v += a7d + au[u] + a7d
	}, this.a7e = function(v, uy, u9) {
		return v.replace(new RegExp(uy, "g"), u9)
	}
}

function c7() {
	this.a7f = function(player, s1) {
		return -1 !== s1 && !!am.cI.a7g(player, s1) && this.yV(player, s1, 0)
	}, this.yV = function(player, s1, a7h) {
		player = function(player, s1, a7h) {
			var yP = am.cI.yQ(player, s1);
			if (-1 === yP) return -1;
			yP = am.cI.a7k(yP, s1);
			if (-1 === yP) return -1;
			var a7i = am.cG.rz(yP, s1);
			if (0 <= a7i) return a7i;
			if (am.cG.ry()) return -1;
			if (0 <= (a7i = am.cG.rz(s1, yP))) return am.cG.s9(am.cG.s2(am.cG.get(a7i)));
			if (yP === s1) return am.cG.s9(new Uint32Array([yP, s1]));
			if (0 <= (a7i = am.c8.yV(yP, s1))) return a7i;
			return a7h ? function(a7m, player) {
				var a7n = gx.a7n,
					buffer = (a7n.fill(0), [a7m]),
					a7o = (a7n[a7m] = 1, aj.a7o),
					a7p = -1,
					u = buffer.length;
				for (; - 1 === a7p && u;) {
					for (var au = [], a5 = 0; a5 < u; a5++)
						for (var fM = buffer[a5], a7Z = a7n[fM], ba = 0; ba < 8; ba++) {
							var zv, zt, a7q = fM + a7o[ba],
								gt = 4 * a7q;
							fK.jg(gt) ? (zv = a7n[a7q], zt = a7Z + 5 + ((1 & ba) << 1), 0 === zv ? (au.push(a7q), a7n[a7q] = zt) : a7n[a7q] = Math.min(zt, zv)) : -1 === a7p && ba % 2 == 0 && fK.pm(player, gt) && (a7p = fM)
						}
					u = (buffer = au).length
				}
				return -1 !== a7p ? function(a7s, a7t) {
					var a7o = aj.a7o,
						a7u = -1,
						ih = 0,
						gL = [];
					for (; a7t !== a7s;)(ih = function(fM, ih) {
						var a7n = gx.a7n,
							a7o = aj.a7o,
							a7Z = a7n[fM];
						if (a7Z - a7n[fM + a7o[ih]] != 5 + ((1 & ih) << 1))
							for (var a6 = 0; a6 < 8; a6++) {
								var ba = a6 + ih + 6 & 7;
								if (a7Z - a7n[fM + a7o[ba]] == 5 + ((1 & ba) << 1)) return ba
							}
						return ih
					}(a7t, ih)) !== a7u && (gL.push(a7t), a7u = ih), a7t += a7o[ih];
					gL.push(a7s);
					var a7i = am.cG.rz(gL[0], a7s);
					if (0 <= a7i) return a7i;
					return am.cG.s9(new Uint32Array(gL))
				}(a7m, a7p) : -1
			}(s1, player) : -1
		}(player, s1, a7h);
		return -1 !== player && (gx.au[0] = am.cG.get(player), !0)
	}
}

function a7w() {
	var a7x = new Uint8Array(78);
	this.a4 = function() {
		var a5;
		for (a7x[50] = 37, a5 = 0; a5 < 10; a5++) a7x[a5 + 3] = a5 + 1;
		for (a5 = 0; a5 < 26; a5++) a7x[a5 + 20] = a5 + 11, a7x[a5 + 52] = a5 + 38
	}, this.a7y = function(v) {
		return v.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a7z = function(v, size) {
		if ((v = this.a7y(v)).length > size) return v.substring(0, size);
		for (; v.length < size;) v = "-" + v;
		return v
	}, this.bI = function(v) {
		for (var zv = a7x, u = v.length, au = new Uint8Array(u), a5 = 0; a5 < u; a5++) au[a5] = zv[v.charCodeAt(a5) - 45];
		return au
	}, this.bH = function(a80) {
		c.d(6 * a80.length), this.a81(a80), bG.a4(c.j)
	}, this.a81 = function(a80) {
		for (var u = a80.length, aZ = c, a5 = 0; a5 < u; a5++) aZ.e(6, a80[a5])
	}, this.y = function(v) {
		this.a81(this.bI(v))
	}, this.q = function(v, size) {
		this.a81(this.bI(this.a7z(v, size)))
	}, this.a0M = function(v, size) {
		for (var au = this.bI(this.a7z(v, size)), kv = 0, ku = 1, a5 = au.length - 1; 0 <= a5; a5--) kv += ku * au[a5], ku *= 64;
		return kv
	}
}

function a82() {
	this.a83 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.qr = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", dZ.dc, "rgb(170,170,170)"
	], this.a84 = [dZ.dc, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", dZ.dc, dZ.pi], this.a85 = [dZ.pi, dZ.dc, dZ.dc, dZ.dc, dZ.pi, dZ.pi, dZ.pi, dZ.pi, dZ.dc];
	var fZ = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.xr = ["rgba(" + fZ[0] + ",", "rgba(" + fZ[1] + ",", "rgba(" + fZ[2] + ",", "rgba(" + fZ[3] + ",", "rgba(" + fZ[4] + ",", "rgba(" + fZ[5] + ",", "rgba(" + fZ[6] + ",", "rgba(" + fZ[7] + ",", "rgba(" + fZ[8] + ",", "rgba(" + fZ[9] + ","], this
		.xs = ["rgb(" + fZ[0] + ")", "rgb(" + fZ[1] + ")", "rgb(" + fZ[2] + ")", "rgb(" + fZ[3] + ")", "rgb(" + fZ[4] + ")", "rgb(" + fZ[5] + ")", "rgb(" + fZ[6] + ")", "rgb(" + fZ[7] + ")", "rgb(" + fZ[8] + ")", "rgb(" + fZ[9] + ")"], this.t6 =
		null, this.a86 = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.gz = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.fG = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fI = new Uint8Array(cr.fc), this.gl = new Uint8Array(cr.fc), this.a87 = new Uint16Array(cr.fc), this.a88 = new Uint16Array(this.fG.length + 1), this.a89 = new Uint16Array(this.fG.length), this
		.rd = function() {
			this.t6 = [L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226)]
		}, this.a4 = function() {
			if (this.fI.fill(0), this.gl.fill(0), this.a8A(), cr.f0) {
				if (9 === cr.fW) {
					for (var fI = fF.fI, a5 = cr.data.teamPlayerCount[7] - 1; 0 <= a5; a5--) fI[a5] = 1;
					var u = cr.fc;
					for (a5 = cr.data.teamPlayerCount[7]; a5 < u; a5++) fI[a5] = 2;
					fF.fG[1] = 7, fF.fG[2] = 8
				} else cr.eh ? function() {
					var gz = fF.gz,
						colorsData = cr.data.colorsData;
					if (!cr.data.selectableColor)
						for (var a5 = cr.fb - 1; 0 <= a5; a5--) colorsData[a5] = fj.fk(262144);
					var a8M = 0,
						h3 = 768,
						a8N = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = cr.data.teamPlayerCount;
					for (a5 = 0; a5 < 9; a5++)
						if (teamPlayerCount[a5]) {
							for (var ba = 0, av = 0; av < 3; av++) ba += Math.abs(gz[a5][av] - a8N[av]);
							ba < h3 && (a8M = a5, h3 = ba)
						} var a8O = new Uint16Array(9);
					for (a5 = 0; a5 < 9; a5++) a8O[a5] = teamPlayerCount[a5];
					var fG = fF.fG,
						a8P = new Uint8Array(9),
						fi = (fG[0] = 0, 1);
					for (a5 = 1; a5 < 9; a5++) a8O[a5] && (a8P[a5] = fi, fG[fi++] = a5);
					var y7 = cr.fb,
						fI = fF.fI;
					a8O[a8M] ? (a8O[a8M]--, fI[0] = a8P[a8M]) : y7 = 0;
					var jA = 0;
					for (a5 = y7; a5 < cr.fe; a5++) {
						var b4 = fG[jA];
						if (a8O[b4]) a8O[b4]--, fI[a5] = a8P[b4];
						else if (a5--, 9 <= ++jA) return console.log("error 325")
					}
				}() : this.ar();
				! function() {
					for (var u = cr.fc, a87 = fF.a87, a88 = fF.a88, a89 = fF.a89, fI = fF.fI, fG = fF.fG, a8Y = fG.length, buffer = new Array(a8Y), a5 = 0; a5 < a8Y; a5++) buffer[a5] = [];
					for (a5 = 0; a5 < u; a5++) buffer[fG[fI[a5]]].push(a5);
					for (a5 = 1; a5 <= a8Y; a5++) a88[a5] = a88[a5 - 1] + buffer[a5 - 1].length;
					for (a5 = 0; a5 < a8Y; a5++)
						for (var fi = buffer[a5].length, bA = a88[a5], b4 = 0; b4 < fi; b4++) a87[b4 + bA] = buffer[a5][b4];
					var fb = cr.fb;
					for (a5 = 0; a5 < a8Y; a5++)
						for (fi = buffer[a5].length, bA = a88[a5], b4 = 0; b4 < fi; b4++)
							if (a87[b4 + bA] >= fb) {
								a89[a5] = b4;
								break
							}
				}(), ! function() {
					for (var u = cr.fc, fI = fF.fI, gl = fF.gl, fG = fF.fG, a5 = 0; a5 < u; a5++) gl[a5] = fG[fI[a5]];
					9 === cr.fW && gl.fill(1, u - ph.fU[5])
				}()
			}
		}, this.a8A = function() {
			for (var a5 = this.fG.length - 1; 0 <= a5; a5--) this.fG[a5] = a5
		}, this.ar = function() {
			var uy = new Uint8Array(cr.fb),
				u9 = new Uint8Array(cr.fb),
				a8F = new Uint16Array(8),
				a8G = new Uint16Array(this.fG.length);
			this.a8H(uy, u9, a8F, 1), this.a8I(a8F), this.a8J(a8G, uy, u9), this.a8K(uy, u9, a8G), this.a8L()
		}, this.a8H = function(uy, u9, a8O, a8Q) {
			for (var av, ej, a8R, u = this.fG.length - a8Q, au = new Uint16Array(u), gz = this.gz, colorsData = cr.data.colorsData, a5 = cr.fb - 1; 0 <= a5; a5--) {
				for (av = u; a8Q <= av; av--) au[av - 1] = Math.abs(4 * (colorsData[a5] >> 12) - gz[av][0]) + Math.abs(4 * (colorsData[a5] >> 6 & 63) - gz[av][1]) + Math.abs(4 * (63 & colorsData[a5]) - gz[av][2]);
				for (a8R = 768, av = u - 1; 0 <= av; av--) au[ej = (av + a5) % u] < a8R && (a8R = au[ej], uy[a5] = ej);
				for (a8O[uy[a5]] += 4, a8R = 768, av = u - 1; 0 <= av; av--) au[ej = (av + a5) % u] < a8R && ej !== uy[a5] && (a8R = au[ej], u9[a5] = ej);
				a8O[u9[a5]]++
			}
		}, this.a8I = function(a8O) {
			for (var av, a8S, u = this.fG.length - 1, a5 = u; 0 <= a5; a5--) this.fG[a5] = a5;
			for (a5 = u - 1; 0 <= a5; a5--) a8O[a5]++;
			for (a5 = 1; a5 <= u; a5++) {
				for (a8S = 0, av = 1; av < u; av++) a8O[av] > a8O[a8S] && (a8S = av);
				a8O[a8S] = 0, this.fG[a5] = a8S + 1
			}
		}, this.a8J = function(a8G, uy, u9) {
			var av, zq, jA, ba, ej, ku, mX, a8T = this.fG.length - 1,
				jE = new Uint16Array(a8T),
				a8U = [],
				a8V = 0,
				cg = [],
				a8W = [];
			loop: for (var a5 = 0; a5 < cr.fb; a5++)
				if (null !== (zq = aV.hf.zr(f4.ft[a5]))) {
					for (av = cg.length - 1; 0 <= av; av--)
						if (zq === cg[av]) {
							a8W[av].push(a5), a8V = Math.max(a8V, a8W[av].length);
							continue loop
						} cg.push(zq), a8U.push(!1), a8W.push([a5]), a8V = Math.max(a8V, 1)
				}
			for (; 2 < cr.a1b && a8V > aQ.aR(cr.fb, cr.a1b);) cr.a1b--, cr.fW--;
			for (av = cg.length - 1; 0 <= av; av--) {
				for (ba = -1, jA = cg.length - 1; 0 <= jA; jA--) !a8U[jA] && (-1 === ba || a8W[jA].length > a8W[ba].length) && (ba = jA);
				for (jA = a8T - 1; 0 <= jA; jA--) jE[jA] = 1;
				for (jA = a8W[ba].length - 1; 0 <= jA; jA--) jE[uy[a8W[ba][jA]]] += 3, jE[u9[a8W[ba][jA]]]++;
				for (a5 = a8T - 1; 0 <= a5; a5--) {
					for (ej = ba % a8T, jA = a8T - 1; 0 <= jA; jA--) jE[jA] > jE[ej] && (ej = jA);
					for (ku = -1, jA = cr.a1b; 0 < jA; jA--)
						if (this.fG[jA] === ej + 1) {
							ku = jA;
							break
						} if (jE[ej] = 0, -1 !== ku) {
						for (mX = 0, jA = cr.a1b; 0 < jA; jA--) a8G[ku] > a8G[jA] && mX++;
						if (mX !== cr.a1b - 1) {
							for (jA = a8W[ba].length - 1; 0 <= jA; jA--) a8G[ku]++, this.fI[a8W[ba][jA]] = ku;
							break
						}
					}
				}
				a8U[ba] = !0
			}
		}, this.a8K = function(uy, u9, a8G) {
			for (var a5, hH, u = this.fG.length - 1, border = aQ.aR(cr.fb, cr.a1b), a8X = (0 < cr.fb % cr.a1b && border++, new Uint8Array(1 + u)), av = u; 1 <= av; av--) a8X[this.fG[av]] = av;
			for (a5 = 0; a5 < cr.fb; a5++) hH = a8X[uy[a5] + 1], 0 === this.fI[a5] && hH <= cr.a1b && a8G[hH] < border && (a8G[hH]++, this.fI[a5] = hH);
			for (a5 = 0; a5 < cr.fb; a5++) hH = a8X[u9[a5] + 1], 0 === this.fI[a5] && hH <= cr.a1b && a8G[hH] < border && (a8G[hH]++, this.fI[a5] = hH);
			for (av = cr.a1b; 1 <= av; av--)
				for (a5 = cr.fb - 1; 0 <= a5 && !(a8G[av] >= border); a5--) 0 === this.fI[a5] && (a8G[av]++, this.fI[a5] = av)
		}, this.a8L = function() {
			if (cr.a1b < 8) cr.a1b++, cr.fW++, cr.a1c = 1;
			else
				for (var a5 = cr.fb; a5 < cr.fc; a5++) this.fI[a5] = 1 + a5 % cr.a1b
		}
}

function a8Z() {
	this.i = new a2V, this.lA = 0;
	var a8a = new Array(32);

	function a8d() {
		for (var u = a8a.length, a5 = 0; a5 < u; a5++) a8a[a5] = null
	}
	this.a4 = function() {
		for (var a8b, a8c = document.body.firstChild; a8c;) a8b = a8c.nextSibling, !document.body.contains(a8c) || "DIV" !== a8c.tagName && "INPUT" !== a8c.tagName && "BUTTON" !== a8c.tagName || d7.removeChild(document.body, a8c), a8c = a8b
	}, this.dF = function(go, eL, t) {
		void 0 === eL && (eL = this.lA), bV.bW = !0, 0 === go && (0 === eW.eX() ? go = 5 : cT.cU.setState(13)), this.eQ(), this.lA === go && (eL = a8a[go].eL, a8a[go] = null), this.lA = go;
		var bA = a8a[go];
		if (!bA || 4 === go || 7 === go || 8 === go || 9 === go || 10 === go || 11 === go || 13 === go || 15 === go || 18 === go || 20 <= go && go <= 28 || 32 === go || 33 === go) {
			if (0 === go) return void a8d();
			1 === go ? bA = new a8e : 2 === go ? bA = new a8f : 3 === go ? bA = new a1F : 4 === go || 9 === go || 10 === go || 11 === go || 13 === go || 33 === go ? bA = t : 5 === go ? bA = new tb : 6 === go ? bA = new a8g : 7 === go ? bA =
				new a4P(d7.i.a2Y) : 8 === go ? bA = t : 12 === go ? bA = new a8h : 14 === go ? bA = new a8i : 15 === go ? bA = new a4P(d7.i.a2X) : 16 === go ? bA = new a8j : 17 === go ? bA = new a8k : 18 === go ? bA = new a8l : 19 === go ? bA =
				new a8m : 20 === go ? bA = new a8n : 21 === go ? bA = new a8o : 22 === go ? bA = new a8p : 23 === go ? bA = new a8q : 24 === go ? bA = new a8r : 25 === go ? bA = new a8s : 26 === go ? bA = new lD : 27 === go ? bA = new a8t :
				28 === go ? bA = new a8u : 29 === go ? bA = new a8v : 30 === go ? bA = new a8w : 31 === go ? bA = new a8x : 32 === go && (bA = new a8y), bA.eL = eL, a8a[go] = bA
		}
		bA.show(t)
	}, this.lO = function() {
		this.d8() && this.a1H(this.rs().eL)
	}, this.a1H = function(go) {
		this.d8() && (a8a[go] ? (this.eQ(), bV.bW = !0, this.lA = go, a8a[go].show()) : this.dF(go))
	}, this.eQ = function() {
		this.d8() && a8a[this.lA].eQ()
	}, this.vL = function() {
		this.d8() && (a8a[this.lA].eQ(), a8d(), this.lA = 0, cT.cU.setState(13))
	}, this.cQ = function() {
		var bA;
		this.d8() && (bA = a8a[this.lA]).cQ && bA.cQ()
	}, this.resize = function() {
		if (!this.d8()) return !1;
		a8a[this.lA].resize()
	}, this.dB = function(aJ, aK) {
		var bA;
		this.d8() && (bA = a8a[this.lA]).dB && bA.dB(aJ, aK)
	}, this.rB = function(aJ, aK) {
		var bA;
		this.d8() && (bA = a8a[this.lA]).rB && bA.rB(aJ, aK)
	}, this.a8z = function() {
		var bA;
		this.d8() && (bA = a8a[this.lA]).a8z && bA.a8z()
	}, this.rG = function(jp, jq, deltaY) {
		var bA;
		this.d8() && (bA = a8a[this.lA]).rG && bA.rG(jp, jq, deltaY)
	}, this.lh = function(code) {
		var bA;
		return !!this.d8() && ((bA = a8a[this.lA]).lh && bA.lh(code), !0)
	}, this.ar = function() {
		var bA;
		this.d8() && (bA = a8a[this.lA]) && bA.ar && bA.ar()
	}, this.d8 = function() {
		return 0 < this.lA
	}, this.rs = function() {
		return a8a[this.lA]
	}, this.sO = function(go) {
		return a8a[go]
	}, this.lN = function() {
		return a8a
	}, this.removeChild = function(a90, a91) {
		try {
			a90.removeChild(a91)
		} catch (ej) {
			console.log("removeChild error " + ej)
		}
	}
}

function a92() {
	this.i = new ds, this.eY = new kk, this.e5 = new a93, this.a94 = new a95, this.g = new sZ, this.a4x = new a, this.a96 = new a97, this.a98 = new cW, this.a2f = new a99, this.a9A = new a9B, this.a9C = new a9D, this.a9E = new a9F, this.a9G =
		new a9H, this.a4 = function() {
			this.i.a4()
		}
}

function py(np, pt) {
	var k2 = document.createElement("div");
	this.nq = k2, this.resize = function() {
		k2.style.padding = aV.d1.io(cz.o0), k2.style.lineHeight = aV.d1.io(aV.d1.iq(.035))
	}, np.style.overflowX = "hidden", np.style.overflowY = "auto", k2.innerHTML = pt, np.appendChild(k2)
}

function a6F() {
	var a9I = 0,
		a9J = "",
		a9K = 0,
		a9L = 0,
		a9M = 0;

	function a9O(a9Z) {
		f.a94.a9a(3, a9Z)
	}

	function a9X(fi) {
		a9I = 1, or.message.sI({
			id: 6,
			value: fi
		})
	}

	function a9R(a06) {
		var a9f = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return a06.match(a9f)
	}
	this.kS = function(a06) {
		var a9N, au, a9T;
		if (a9I) return a9I = 0, "yes" === (a9N = a06.toLowerCase()) || "y" === a9N ? void a9O(a9J) : void or.message.sI({
			id: 5,
			sK: 7
		});
		!(a06.indexOf("@") < 0) && (a9N = a9R(a06)) ? (a9J = a06, au = function(a9Q) {
			for (var u = a9Q.length, a9b = [0, 0, 0, 0], a5 = 0; a5 < u; a5++)
				for (var aZ = a9Q[a5], a6 = 0; a6 < 4; a6++) aZ === "@room" + (a6 + 1) && (a9b[a6] = 1);
			if ((a9L = aV.aW.a9c(a9b)) % 4 == 0) return aV.aW.a9d(or.ox.oy);
			for (a6 = 0; a6 < 4; a6++) a9b[a6] = a9b[a6] ? or.ox.oy[a6] : [];
			return aV.aW.a9d(a9b)
		}(a9N), function(a9Q, a9T, a06) {
			if (!a9K) return;
			for (var u = a9T.length, a5 = 0; a5 < u; a5++) 2 === a9T[a5].id && (a06 = a06.replace(a9Q[a9T[a5].go], "@" + a9T[a5].kv));
			return a9I = 1, a9O((a9J = a06).slice(0, 126) + "|"), 1
		}(a9N, a9T = function(a9Q) {
			for (var a9T = [], u = (a9M = a9K = 0, a9Q.length), a5 = 0; a5 < u; a5++) {
				var aZ = a9Q[a5],
					bA = aZ.length;
				aV.hf.startsWith(aZ, "@[") ? bA <= 9 && aV.hf.a7b(aZ, "]") && a9T.push({
					id: 0,
					kv: aZ.substring(2, bA - 1).toUpperCase()
				}) : 6 === bA ? aV.hf.startsWith(aZ, "@room") || (a9M++, a9T.push({
					id: 1,
					kv: o.p.a0M(aZ.substring(1), 5)
				})) : 1 < bA && bA < 5 && 0 <= (bA = a8.data.a9(aZ.substring(1))) && (a9T.push({
					id: 2,
					kv: bA,
					go: a5
				}), a9K = 1)
			}
			return a9T
		}(a9N), a06) || (0 === a9T.length ? a9L || function(a9Q) {
			for (var u = a9Q.length, a5 = 0; a5 < u; a5++) {
				var aZ = a9Q[a5];
				if ("@all" === aZ || "@everyone" === aZ) return 1
			}
			return
		}(a9N) ? a9X(au.length) : a9O(a06) : a9N.length === a9M ? a9O(a06) : (function(au, a9T) {
			var bA = a9T.length;
			if (0 === bA) return;
			var u = au.length;
			loop: for (var a5 = u - 1; 0 <= a5; a5--) {
				for (var a6 = 0; a6 < bA; a6++)
					if (0 === a9T[a6].id) {
						if (a9T[a6].kv === aV.hf.zr(au[a5].username)) continue loop
					} else if (1 === a9T[a6].id && a9T[a6].kv === au[a5].aE) continue loop;
				au[a5] = au[--u], au.pop()
			}
		}(au, a9T), a9X(au.length)))) : a9O(a06)
	}, this.a9g = function(a06) {
		var a9Q = a9R(a06);
		if (a9Q)
			for (var a9h = new RegExp("^[0-9]+$"), u = a9Q.length, a5 = 0; a5 < u; a5++) {
				var aZ = a9Q[a5].substring(1),
					bA = aZ.length;
				1 <= bA && bA <= 3 && a9h.test(aZ) && (bA = parseInt(aZ, 10), !isNaN(bA)) && 0 <= bA && bA < a8.data.au.length && (a06 = a06.replace("@" + aZ, "@" + a8.data.au[bA]))
			}
		return a06
	}
}

function a6B() {
	var na = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		a9i = [dZ.a9j, dZ.a9j, dZ.a9k, dZ.a9l, dZ.a9m, dZ.a9n, dZ.a9o, dZ.a9k, dZ.a9p, dZ.j1, dZ.a9q, dZ.pi],
		a9r = [
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
		a9s = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aA2(aA3, aE, aA4) {
		for (var av = aA3.length - 1; 0 <= av; av--) {
			var ev = aA3[av];
			0 === ev.id && ev.aE === aE && (ev.a06 = "[Redacted Message]", aA4) && (ev.a0K = 1)
		}
	}
	this.sN = function(sJ) {
		var a9t, zs;
		return sJ.id < 5 && (a9t = "@" + w.p.hg(sJ.aE, 5)), 0 === sJ.id ? a9t + ": " + sJ.a06 : 1 === sJ.id ? (zs = "@" + w.p.hg(sJ.target, 5), 0 === sJ.sK ? 32768 <= sJ.value ? a9t + " voted with " + (sJ.value - 32768 + 1) + " gold against " +
				zs + " to weaken the latter's admin position. 📉" : a9t + " voted with " + (sJ.value + 1) + " gold for " + zs + " to strengthen the latter's admin position. 💪" : 1 === sJ.sK ? a9t + " sent " + Math.floor(sJ.value / 100) +
				" 🧈 gold to " + zs + "." : a9t + " voted with " + (sJ.value / 10).toFixed(1) + " points for " + zs + " to acknowledge the latter as clan leader. ✅") : 2 === sJ.id ? 0 === sJ.sK ? a9t + " was 🔇 muted for 1 Hour." : 1 === sJ.sK ?
			"The username of " + a9t + " was ✂️ redacted. Duration: 1 Day" : a9t + " 👢 was kicked." : 3 === sJ.id ? a9t + rg.nk(sJ.sK, rg.ng[sJ.sK][sJ.value]) + "@" + w.p.hg(sJ.target, 5) + rg.nm(sJ.sK, rg.ng[sJ.sK][sJ.value]) : 4 === sJ.id ?
			a9t + rg.nk(5, rg.ng[5][sJ.sK]) + "@" + w.p.hg(sJ.target, 5) + rg.nm(5, rg.ng[5][sJ.sK]) : 5 === sJ.id ? a9s[sJ.sK] : 6 === sJ.id ? "You are about to mention " + sJ.value + " player" + (1 === sJ.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * sJ.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === sJ.id ? sJ.a06 : void 0
	}, this.sM = function(sJ, a9Z) {
		return {
			sJ: sJ,
			a06: a9Z,
			a05: 0,
			fontSize: 1,
			a03: 0,
			a0L: sJ.id ? dZ.a9u : dZ.dc
		}
	}, this.p3 = function(player, a9v) {
		return (2 === a9v ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.p4 = function(p5) {
		return a9i[p5]
	}, this.a0C = function(p5, qw) {
		return p5 < 3 || 7 === p5 ? a9r[p5][0] : 4 === p5 ? a9r[p5][qw < 1 ? 0 : qw < 10 ? 1 : 2] : a9r[p5][qw < 10 ? 0 : 1]
	}, this.a0D = function(qw) {
		return 0 === qw
	}, this.a0N = function(a9v, aE) {
		for (var oy = or.ox.oy, ox = oy[a9v], u = ox.length, a5 = 0; a5 < u; a5++)
			if (aE === ox[a5].aE) return ox[a5];
		for (var av = 0; av < oy.length; av++)
			if (a9v !== av)
				for (u = (ox = oy[av]).length, a5 = 0; a5 < u; a5++)
					if (aE === ox[a5].aE) return ox[a5];
		return null
	}, this.p6 = function(ev) {
		return !!or.a65 && ev.aE === or.a65.aE
	}, this.a9w = function(ox, a9x, a9y) {
		var cg = [];
		loop: for (var a5 = a9x; a5 < a9y; a5++) {
			var zq = aV.hf.zr(ox[a5].username);
			if (zq) {
				for (var av = cg.length - 1; 0 <= av; av--)
					if (zq === cg[av].name) {
						cg[av].fi++;
						continue loop
					} cg.push({
					name: zq,
					fi: 1
				})
			}
		}
		if (cg.sort(function(a6, av) {
				return av.fi - a6.fi
			}), 0 === cg.length) return "";
		for (var v = cg[0].name + ": " + cg[0].fi, a5 = 1; a5 < cg.length; a5++) v += "   " + cg[a5].name + ": " + cg[a5].fi;
		return v
	}, this.a9z = function(p5, qw, aA0) {
		return 0 === na[p5].length ? "Rank: " + (qw + 1) : na[p5] + " Rank: " + (qw + 1) + (3 !== p5 && aA0 < 100 ? "   " + na[3] + " Rank: " + (aA0 + 1) : "")
	}, this.sL = function(aE) {
		for (var aA1 = or.i.aA1, a5 = 0; a5 < aA1.length; a5++) aA2(aA1[a5].aA3, aE);
		aA2(or.message.sY(), aE, 1), or.fp.sL(aE)
	}
}

function a8g() {
	var pw, a4Q, lR;
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), a4Q.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(L(227), [new ir("⬅️ " + L(4), function() {
		d7.dF(7, d7.sO(7).eL)
	}), new ir(L(128), function() {
		r.md.pE(105, o.p.a7z(a4Q.nr[0].aA6[0].ej.value, 5)), r.md.pE(106, o.p.a7z(a4Q.nr[1].aA6[0].ej.value, 15)), d7.dF(8, d7.sO(7).eL, new tt(18))
	})]), a4Q = new lJ(pw.lK, ((lR = []).push(function() {
		var lV = new lW;
		return lV.lX(L(106)), lV.lb(new lc({
			value: "",
			go: -1
		})), lV
	}()), lR.push(function() {
		var lV = new lW,
			a54 = (lV.lX(L(109)), new lc({
				value: "",
				go: -1
			}));
		return a54.ej.type = "password", lV.lb(a54), lV.lb(new k0([new ir(L(110), function(ej) {
			return ej.textContent === L(110) ? (ej.textContent = L(111), a54.ej.type = "text") : (ej.textContent = L(110), a54.ej.type = "password"), !0
		}).button])), lV
	}()), lR.push(function() {
		var lV = new lW;
		return lV.lX(L(113)), lV.a50(L(228)), lV.a50(L(229)), lV.a50(L(230)), lV
	}()), lR))
}

function aA8() {
	var ly, aZ, aK, aA9, aAA, aAB, canvas, ck, aAC, a6f, aAD, aAE, aAF, aAG;
	this.aJ = 0, this.b6 = 0, this.a4 = function() {
		aAB = cr.a1W, aAE = "rgba(0,100,0,0.8)", aAF = "rgba(150,0,0,0.8)", aAC = aAD = !0, a6f = f4.g2[cr.gJ], this.resize()
	}, this.resize = function() {
		aZ = Math.floor((cT.cU.cV() ? .305 : .24) * cy.l7), this.b6 = Math.floor(.5 + .13 * aZ), aZ = Math.floor(6 * this.b6), ly = aV.d1.d2(1, Math.floor(.8 * this.b6)), aAA = aV.d1.d2(1, Math.floor(.45 * this.b6)), aAG = Math.floor(.5 * this
			.b6), aS.bR.font = ly, aK = cz.gap, aA9 = Math.floor(1 + .13 * this.b6), (canvas = document.createElement("canvas")).width = aZ, canvas.height = this.b6, ck = canvas.getContext("2d", {
			alpha: !0
		}), aV.d1.textBaseline(ck, 1), aV.d1.textAlign(ck, 1), this.aAH()
	}, this.m5 = function() {
		return cT.cU.cV() && cy.aZ < 1.2 * cy.b6
	}, this.m0 = function() {
		this.m5() ? this.aJ = cy.aZ - aZ - cz.gap : this.aJ = Math.floor(kZ.qf() + (cy.aZ - kZ.qf() - gO.aZ - aZ) / 2 - .5 * cz.gap)
	}, this.gW = function() {
		aAC && (aAC = !1, this.aAH())
	}, this.aAH = function() {
		ck.font = ly, ck.clearRect(0, 0, aZ, this.b6), ck.fillStyle = aAD ? aAE : aAF, ck.fillRect(0, 0, aZ, this.b6), ck.fillStyle = dZ.uc;
		var jA = this.aAI(),
			aAK = (this.aAJ(), ck.fillStyle = f4.g2[cr.gJ] >= m9.mA(cr.gJ) ? dZ.oA : dZ.dc, aV.hf.hg(a6f)),
			aAK = (ck.fillText(aAK, Math.floor(aZ / 2), aAG), ck.measureText(aAK).width),
			aAM = (ck.font = aAA, ck.fillStyle = 9 === jA ? dZ.aAL : dZ.dc, m9.aAN),
			aAO = "+" + aAM,
			df = ck.measureText(aAO).width,
			aAP = Math.floor(this.b6 / 12),
			aAK = .5 * (aZ + aAK) + aAP;
		(aAK + df + aA9 <= aZ || 1e3 <= aAM && (aAO = "+" + Math.floor(aAM / 1e3) + "K", aAK + (df = ck.measureText(aAO).width) + aA9 <= aZ)) && ck.fillText(aAO, Math.floor(aAK + .5 * df), Math.floor(.3 * this.b6)), __fx.settings
			.displayTickNumber && ck.fillText(9 - jA, Math.floor(2 * aA9 + aAP), Math.floor(.3 * this.b6)), ck.fillStyle = dZ.dc, ck.fillRect(0, 0, aZ, 1), ck.fillRect(0, 0, 1, this.b6), ck.fillRect(0, this.b6 - 1, aZ, 1), ck.fillRect(aZ - 1, 0,
				1, this.b6)
	}, this.aAI = function() {
		var jA = bV.es() % 100,
			xk = (jA = 9 - aQ.aR(jA -= jA % 10, 10), Math.floor(jA * (this.b6 - aA9) / 9));
		return ck.fillRect(0, xk, aA9, this.b6 - xk), ck.fillRect(aZ - aA9, xk, aA9, this.b6 - xk), jA
	}, this.aAJ = function() {
		ck.fillRect(aA9, this.b6 - aA9, Math.floor((aZ - 2 * aA9) * f4.g2[cr.gJ] / aAB), aA9)
	}, this.ar = function() {
		var bB = cr.gJ;
		aV.et.hn(bB) && (bB = f4.g2[bB] - f4.gC[bB], a6f !== bB ? (aAB = uS(bB, aAB), aAD = a6f < bB && 10 <= bB, a6f = bB, aAC = !0) : bV.es() % 10 == 9 && (aAC = !0))
	}, this.cQ = function() {
		0 === f4.fv[cr.gJ] || cr.gH || 2 === f4.fu[cr.gJ] || dO.drawImage(canvas, this.aJ, aK)
	}
}

function a1i() {
	this.fg = function() {
		var aAQ = cr.data;
		aV.aW.aAR(aAQ.teamPlayerCount, aAQ.playerCount), aAQ.numberTeams = aV.aW.aAS(aAQ.teamPlayerCount, 0), aAQ.teamPlayerCount[0] && aAQ.teamPlayerCount[7] && (aAQ.teamPlayerCount[7] = 0, this.fg())
	}, this.aAT = function() {
		var aAQ = cr.data;
		aAQ.mapType < 2 ? aS.d(aS.aAU(aAQ), aAQ.mapSeed) : aS.aAV(aAQ.canvas)
	}, this.aAW = function() {
		var aAQ = cr.data;
		aAQ.colorsData || (aAQ.colorsData = new Uint32Array(1)), 0 === aAQ.gameMode && (aAQ.colorsData[0] = r.i.aAX()), aAQ.selectableName && (aAQ.playerNamesData || (aAQ.playerNamesData = new Array(1)), aAQ.playerNamesData[0] = r.buffer.data[
			122].value), aAQ.z2 = new Uint32Array(1), aAQ.z2[0] = o.p.a0M(r.buffer.data[105].value, 5)
	}, this.ts = function() {
		cr.data = new a1h
	}
}

function aAY() {
	var aAd, aAe, aAZ = "",
		aAa = 0,
		aAb = 0,
		aAc = -1,
		ne = ["Team", "Zombie", "BR", "1v1"];

	function aAf() {
		for (var kG = new Date, aAg = kG.getUTCMinutes(), kG = kG.getUTCSeconds(), aAi = [], aAj = 0, a5 = 0; a5 < 6; a5++) aAi.push(aAj), aAi.push(aAj + 2), aAi.push(aAj + 5), aAi.push(aAj + 7), aAj += 10;
		for (var u = aAi.length, a5 = 1; a5 < u && !(aAg < aAi[a5]); a5++);
		a5 %= u;
		kG = (aAi[0] = 60) * (aAi[a5] - aAg) - kG;
		return kG !== aAc && (aAZ = ne[a5 % 4] + " " + aAe + ": " + aAl(Math.floor(kG / 60)) + ":" + aAl(kG % 60), aAc = kG, aAa = a21.measureText(aAZ, aAd), aAa += Math.floor(.4 * aAb), 1)
	}

	function aAl(aAm) {
		return aAm < 10 ? "0" + aAm : String(aAm)
	}
	this.a4 = function() {
		aAe = L(231)
	}, this.resize = function() {
		aAa = Math.floor((cT.cU.cV() ? .53 : .36) * cy.l7), aAb = Math.floor(.065 * aAa), aAd = aV.d1.d2(1, Math.floor(.9 * aAb)), aAc += 1e3, aAf()
	}, this.ar = function() {
		aAf() && (bV.bW = !0)
	}, this.cQ = function(aK) {
		dO.lineWidth = 1 + Math.floor(aAb / 15), dO.translate(cy.aZ - aAb, aK + aAa), dO.rotate(-Math.PI / 2), dO.fillStyle = dZ.dc, dO.fillRect(0, 0, aAa, aAb), dO.strokeStyle = dZ.pi, dO.strokeRect(0, 0, aAa, aAb + 10), dO.fillStyle = dZ.pi, dO
			.font = aAd, aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 1), dO.fillText(aAZ, Math.floor(aAa / 2), Math.floor(.59 * aAb)), dO.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cJ() {
	this.yM = function(player, id) {
		for (var aAn = f4.g5[player], u = aAn.length, a5 = 0; a5 < u; a5++)
			if (aj.aAo(aAn[a5], id)) return !0;
		return !1
	}, this.yQ = function(player, fM) {
		for (var aAp, aAq, gt, aAn = f4.g5[player], u = aAn.length, aZ = aS.aT, aAs = aj.fQ(fM), aAt = aj.fR(fM), a7q = -1, min = aS.aT * aS.aT + aS.aU * aS.aU, id = fK.yL(aj.i5(fM)), a5 = 0; a5 < u; a5++)(aAq = (aAq = aAs - (aAp = (gt = aAn[
			a5]) >> 2) % aZ) * aAq + (aAq = aAt - ~~((.5 + aAp) / aZ)) * aAq) < min && aj.aAo(gt, id) && (min = aAq, a7q = aAp);
		return a7q
	}, this.a7k = function(a7s, aAp) {
		for (var id = fK.yL(aj.i5(aAp)), oH = aj.oI, gt = aj.i5(a7s), aAu = -1, a5 = 0; a5 < 4; a5++) {
			var hX = gt + oH[a5];
			fK.jg(hX) && fK.yL(hX) === id && (-1 === aAu || aj.aAv(aj.aAw(hX), aAp) < aj.aAv(aAu, aAp)) && (aAu = aj.aAw(hX))
		}
		return aAu
	}, this.aAx = function(player, fM) {
		for (var oH = aj.oI, gt = aj.i5(fM), a5 = 0; a5 < 4; a5++) {
			var hX = gt + oH[a5];
			if (fK.ii(hX) && fK.oJ(player, hX)) return !0
		}
		return !1
	}, this.a7g = function(player, fM) {
		for (var oH = aj.oI, gt = aj.i5(fM), a5 = 0; a5 < 4; a5++) {
			var hX = gt + oH[a5];
			if (fK.fL(hX)) return !0;
			if (fK.ii(hX)) {
				hX = fK.iA(hX);
				if (player !== hX && iE.iL(player, hX)) return !0
			}
		}
		return !1
	}, this.a4I = function(fM) {
		for (var oH = aj.oI, gt = aj.i5(fM), a5 = 0; a5 < 4; a5++) {
			var hX = gt + oH[a5];
			if (fK.ii(hX)) {
				hX = fK.iA(hX);
				if (aV.et.jy(hX)) return hX
			}
		}
		return -1
	}, this.aAy = function(gt) {
		if (fK.jg(gt))
			for (var oH = aj.oI, a5 = 0; a5 < 4; a5++)
				if (fK.o9(gt + oH[a5])) return !0;
		return !1
	}, this.a0s = function(player, id) {
		for (var ai = player << 3, al = ai + am.i.mr[player], ks = am.i.ks, ms = am.i.ms, a5 = ai; a5 < al; a5++) {
			var aAz = ms[a5];
			if (ks[aAz] === id) return aAz
		}
		return -1
	}, this.a0u = function(player) {
		return 0 === am.i.mr[player] ? -1 : am.i.ms[player << 3]
	}, this.aB0 = function(jp, jq) {
		var u = am.i.hS;
		if (u < 1) return -1;
		for (var hM = am.i.hM, nW = 80, yc = -1, a5 = 0; a5 < u; a5++) {
			var h3 = aj.aB1(jp, jq, hM[a5]);
			h3 < nW && (nW = h3, yc = a5)
		}
		return function(a5, jp, jq) {
			if (a5 < 0) return;
			var aB6 = am.i.hM[a5],
				aB7 = aj.aB8(aB6),
				aB6 = aj.aBA(aB6),
				a5 = 20 * (.9 + .1 * Math.log10(am.i.hO[a5]));
			return a5 = Math.max(a5, aj.aBC(aV.d1.aBD(.02, 1.7))), aQ.aBE(aj.aBF(jp), aj.aBG(jq), aB7, aB6, a5)
		}(yc, jp, jq) ? yc : -1
	}, this.yG = function(o4) {
		for (var u = am.i.hS, ks = am.i.ks, a5 = 0; a5 < u; a5++)
			if (ks[a5] === o4) return gx.iP[2] = a5, !0;
		return !1
	}, this.n1 = function(player) {
		for (var ai = player << 3, al = ai + am.i.mr[player], ms = am.i.ms, hO = am.i.hO, hF = 0, a5 = ai; a5 < al; a5++) hF += hO[ms[a5]];
		return hF
	}, this.ya = function(player, yC) {
		yC = am.i.mp[yC];
		return this.aAx(player, yC[yC.length - 1])
	}, this.yY = function(a7s, aAp, h3, aB3) {
		var xO = aj.fQ(a7s),
			a7s = aj.fR(a7s),
			xQ = aj.fQ(aAp),
			aAp = aj.fR(aAp),
			xQ = (h3 = Math.max(h3, 1), xQ - xO),
			aAp = aAp - a7s,
			h1 = aQ.aR(Math.abs(xQ) * aB3, h3),
			aB3 = aQ.aR(Math.abs(aAp) * aB3, h3);
		return aj.hu(xO + Math.sign(xQ) * h1, a7s + Math.sign(aAp) * aB3)
	}, this.zP = function(mu, fM) {
		for (var u = mu.length - 1, aJ = aj.fQ(fM), aK = aj.fR(fM), a5 = 0; a5 < u; a5++) {
			var a7s = mu[a5],
				aAp = mu[a5 + 1],
				dg = aj.fQ(a7s),
				a7s = aj.fR(a7s),
				hb = aj.fQ(aAp),
				aAp = aj.fR(aAp);
			if (!(aJ !== dg && aJ !== hb && Math.sign(aJ - dg) === Math.sign(aJ - hb) || aK !== a7s && aK !== aAp && Math.sign(aK - a7s) === Math.sign(aK - aAp))) {
				if (dg === hb || a7s === aAp) return a5;
				if (Math.abs(aJ - dg) === Math.abs(aK - a7s) && Math.abs(aJ - hb) === Math.abs(aK - aAp)) return a5
			}
		}
		return -1
	}, this.mR = function() {
		for (var aBH = fH[0], hN = am.i.hN, hS = am.i.hS, au = [], a5 = 0; a5 < hS; a5++) aV.et.yN(aBH, hN[a5] >> 3) && au.push(a5);
		return au
	}, this.aBI = function(player, mu) {
		for (var ai = player << 3, al = ai + am.i.mr[player], ms = am.i.ms, mp = am.i.mp, bj = mu[0], bk = mu[mu.length - 1], a5 = ai; a5 < al; a5++) {
			var bB = mp[ms[a5]];
			if (bB[0] === bj && bB[bB.length - 1] === bk) return !0
		}
		return !1
	}
}

function aBJ() {
	this.fB = null, this.f9 = 0, this.a1y = function() {
		for (this.f9 = 0, a5 = cr.fc - 1; 0 <= a5; a5--) 0 !== f4.fv[a5] && this.f9++;
		this.fB = new Uint16Array(this.f9);
		for (var u = 0, a5 = 0; a5 < cr.fc; a5++) 0 !== f4.fv[a5] && (this.fB[u++] = a5)
	}, this.aBK = function() {
		for (var g0 = f4.g0, g1 = f4.g1, gB = f4.gB, fB = f8.fB, a5 = f8.f9 - 1; 0 <= a5; a5--) {
			var bB = fB[a5],
				kG = g0[bB],
				bA = g1[bB];
			kG <= aQ.aR(bA, 4) ? aBN.pI(bB) : bA <= kG ? 250 <= (g1[bB] = kG) && (gB[bB] = 1) : g1[bB] = bA - Math.max(1, aQ.aR(bA - kG, 1e3))
		}
		this.aBM()
	}, this.aBM = function() {
		for (var fv = f4.fv, fA = this.fB, f7 = this.f9, a5 = f7 - 1; 0 <= a5; a5--) 0 === fv[fA[a5]] && (fA[a5] = fA[--f7]);
		this.f9 = f7
	}
}

function aBO() {
	var aBP, th, aAa, aAb, aBQ, aBR, aBS, aBT, aBU, aBV;

	function aBX() {
		var fe = cr.fe;
		for (aBU = fe; aBU < cr.fc; aBU++) aBW();
		for (aBU = cr.gH ? cr.fb : 0; aBU < fe; aBU++) {
			if (!aBa()) {
				for (var av = cr.a1Y = aBU; av < fe; av++) aBU = av, aBW();
				return
			}
			aBb(aBR + aBP * aBQ + aQ.aR(aBQ, 2), aBS + th * aBQ + aQ.aR(aBQ, 2))
		}
	}

	function aBz(player) {
		for (var fw = f4.fw, fx = f4.fx, fy = f4.fy, fz = f4.fz, aK = fx[player]; aK <= fz[player]; aK++)
			for (var aJ = fw[player]; aJ <= fy[player]; aJ++) {
				var gt = fK.aC0(aJ, aK);
				fK.ii(gt) && (fK.aC1(gt) ? fK.a4E(gt, player) : fK.aC2(gt, player))
			}
	}

	function aBy(au, ai, al) {
		var kG = au[ai];
		au[ai] = au[al], au[al] = kG
	}

	function aBa() {
		return function() {
			var a5;
			for (a5 = 0; a5 < 8; a5++)
				if (aBP = aQ.aR(aAa * fj.random(), fj.value(100)), th = aQ.aR(aAb * fj.random(), fj.value(100)), aC7()) return 1;
			return
		}() || function() {
			var h1, h2, a6, xk, av, xj;
			for (h1 = aQ.aR(aAa * fj.random(), fj.value(100)), h2 = aQ.aR(aAb * fj.random(), fj.value(100)), a6 = 40; 1 <= a6; a6--)
				for (xk = aAb - a6; 0 <= xk; xk -= 40)
					for (th = (xk + h2) % aAb, av = 40; 1 <= av; av--)
						for (xj = aAa - av; 0 <= xj; xj -= 40)
							if (aBP = (xj + h1) % aAa, aC7()) return 1;
			return
		}()
	}

	function aC7() {
		for (var bB, aC9, gap = aQ.aR(aBQ - aBT, 2), jf = aBS + th * aBQ + gap, jt = aBR + aBP * aBQ + gap, aC8 = jf + aBT - 1; jf <= aC8; aC8--)
			for (aC9 = jt + aBT - 1; jt <= aC9; aC9--)
				if (bB = fK.aC0(aC9, aC8), !fK.o9(bB) || fK.aC1(bB)) return;
		return 1
	}

	function aBb(xj, xk) {
		aBW(), aCA(xj - 2, xk - 2)
	}

	function aBW() {
		f4.fv[aBU] = 0, f4.g0[aBU] = f4.g1[aBU] = 0, f4.g3[aBU] = [], f4.g4[aBU] = [], f4.g5[aBU] = [], f4.g6[aBU] = [], f4.fw[aBU] = f4.fx[aBU] = f4.fy[aBU] = f4.fz[aBU] = 0
	}

	function aCA(xj, xk) {
		var bB, a5, aCB, aCC;
		for (f4.fv[aBU] = 1, f4.fw[aBU] = xj + 10, f4.fx[aBU] = xk + 10, f4.fz[aBU] = f4.fy[aBU] = 0, aCB = xj; aCB < xj + 4; aCB++)
			for (aCC = xk; aCC < xk + 4; aCC++)(xj < aCB && aCB < xj + 3 || xk < aCC && aCC < xk + 3) && (bB = fK.aC0(aCB, aCC), fK.o9(bB)) && (f4.fw[aBU] = Math.min(aCB, f4.fw[aBU]), f4.fy[aBU] = Math.max(aCB, f4.fy[aBU]), f4.fx[aBU] = Math.min(aCC,
				f4.fx[aBU]), f4.fz[aBU] = Math.max(aCC, f4.fz[aBU]), aBV[f4.g0[aBU]] = bB, f4.g0[aBU]++, fK.aC2(bB, aBU));
		for (f4.g1[aBU] = f4.g0[aBU], a5 = f4.g0[aBU] - 1; 0 <= a5; a5--) fK.aCD(aBV[a5], aBU) ? (fK.a4E(aBV[a5], aBU), f4.g4[aBU].push(aBV[a5])) : fK.ji(aBV[a5]) ? (fK.a4E(aBV[a5], aBU), f4.g5[aBU].push(aBV[a5])) : fK.aCE(aBV[a5]) && (fK.a4E(aBV[
			a5], aBU), f4.g6[aBU].push(aBV[a5]))
	}
	this.a4 = function() {
		if (aBV = new Array(12), aBT = 6, aBQ = 10, aAa = aQ.aR(aS.aT, aBQ), aAb = aQ.aR(aS.aU, aBQ), aBR = aQ.aR(aS.aT - aBQ * aAa, 2), aBS = aQ.aR(aS.aU - aBQ * aAb, 2), cr.gH)
			for (var a5 = 0; a5 < cr.fb; a5++) aBU = a5, aBW(), f4.fv[aBU] = 1;
		(0 === cr.data.spawningType ? aBX : 1 === cr.data.spawningType ? (aBX(), function() {
			var a8Y = cr.a1b;
			cr.a1c || a8Y++;
			if (!(a8Y < 3)) {
				for (var data = cr.data, y7 = (cr.gH ? cr.fb : 0) + data.teamPlayerCount[0], r2 = cr.a1Y, aBc = new Uint32Array(a8Y), aBd = new Uint32Array(a8Y), aBe = new Uint16Array(a8Y), aBf = new Uint16Array(a8Y), fI = fF.fI, fw = f4
						.fw, fx = f4.fx, fy = f4.fy, fz = f4.fz, aBg = gx.aBg, aBh = gx.aBh, a5 = y7; a5 < r2; a5++) aBg[a5] = fw[a5] + fy[a5] >> 1, aBh[a5] = fx[a5] + fz[a5] >> 1;
				for (a5 = y7; a5 < r2; a5++) {
					var id = fI[a5];
					aBc[id] += aBg[a5], aBd[id] += aBh[a5]
				}
				var fG = fF.fG;
				for (a5 = 1; a5 < a8Y; a5++) {
					var fi = Math.max(data.teamPlayerCount[fG[a5]], 1);
					aBe[a5] = aQ.aR(aBc[a5], fi), aBf[a5] = aQ.aR(aBd[a5], fi)
				}
				var a87 = fF.a87,
					a88 = fF.a88,
					a89 = fF.a89,
					aBi = gx.aBi;
				for (a5 = 0; a5 < 512; a5++) aBi[a5] = a5;
				for (var jn = 0; jn < 2 + (4 <= a8Y); jn++)
					for (a5 = y7; a5 < r2; a5++) {
						for (var bj = a5, aBj = aBi[bj], aBk = 1, h3 = aQ.aBl(aBg[aBj] - aBe[1], aBh[aBj] - aBf[1]), a6 = 2; a6 < a8Y; a6++) {
							var aBm = aQ.aBl(aBg[aBj] - aBe[a6], aBh[aBj] - aBf[a6]);
							aBm < h3 && (h3 = aBm, aBk = a6)
						}
						var aBn = fI[bj];
						if (aBk !== aBn) {
							if (2 === jn && 4 <= a8Y) {
								var aBo = Math.max((aBk + 1) % a8Y, 1),
									aBp = aQ.aBl(aBg[aBj] - aBe[aBo], aBh[aBj] - aBf[aBo]);
								for (a6 = 1; a6 < a8Y; a6++) aBm = aQ.aBl(aBg[aBj] - aBe[a6], aBh[aBj] - aBf[a6]), h3 < aBm && aBm < aBp && (aBp = aBm, aBo = a6);
								aBo !== aBn && aQ.aBl(aBe[aBn] - aBe[aBo], aBf[aBn] - aBf[aBo]) < aQ.aBl(aBe[aBn] - aBe[aBk], aBf[aBn] - aBf[aBk]) && (aBk = aBo)
							}
							var aBq = fG[aBk],
								aBr = a88[aBq] + (cr.gH ? 0 : a89[aBq]),
								bk = a87[aBr],
								aBs = aBi[bk],
								aBt = a88[aBq + 1];
							h3 = aQ.aBl(aBg[aBs] - aBe[aBn], aBh[aBs] - aBf[aBn]);
							for (var jA = aBr + 1; jA < aBt; jA++) {
								var aBu = a87[jA],
									aBv = aBi[aBu];
								(aBm = aQ.aBl(aBg[aBv] - aBe[aBn], aBh[aBv] - aBf[aBn])) < h3 && (h3 = aBm, bk = aBu)
							}
							bk < y7 || r2 <= bk || (aBs = aBi[bk], aBc[aBn] += aBg[aBs] - aBg[aBj], aBd[aBn] += aBh[aBs] - aBh[aBj], aBc[aBk] += aBg[aBj] - aBg[aBs], aBd[aBk] += aBh[aBj] - aBh[aBs], fi = data.teamPlayerCount[fG[aBn]],
								aBe[aBn] = aQ.aR(aBc[aBn], fi), aBf[aBn] = aQ.aR(aBd[aBn], fi), fi = data.teamPlayerCount[aBq], aBe[aBk] = aQ.aR(aBc[aBk], fi), aBf[aBk] = aQ.aR(aBd[aBk], fi), aBi[bj] = aBs, aBi[bk] = aBj)
						}
					}! function() {
						for (var aBi = gx.aBi, fw = f4.fw, fx = f4.fx, fy = f4.fy, fz = f4.fz, g0 = f4.g0, g1 = f4.g1, g4 = f4.g4, g5 = f4.g5, g6 = f4.g6, a5 = 0; a5 < 512; a5++) {
							var aBx = aBi[a5];
							if (aBx !== a5) {
								aBy(fw, a5, aBx), aBy(fx, a5, aBx), aBy(fy, a5, aBx), aBy(fz, a5, aBx), aBy(g0, a5, aBx), aBy(g1, a5, aBx), aBy(g4, a5, aBx), aBy(g5, a5, aBx), aBy(g6, a5, aBx), aBz(a5), aBz(aBx), aBi[a5] = a5;
								for (var b6 = aBx, dp = aBi[b6]; dp !== a5;) dp = aBi[b6 = dp];
								aBi[b6] = aBx
							}
						}
					}()
			}
		}) : function() {
			var fe = cr.fe;
			for (aBU = fe; aBU < cr.fc; aBU++) aBW();
			for (aBU = cr.gH ? cr.fb : 0; aBU < fe; aBU++)
				if (! function() {
						var spawningData = cr.data.spawningData,
							xj = spawningData[2 * aBU] + 1,
							spawningData = spawningData[2 * aBU + 1] + 1;
						if (3 < xj && xj < aS.aT - 5 && 3 < spawningData && spawningData < aS.aU - 5 && fK.o9(fK.aC0(xj, spawningData)) && function(xj, xk) {
								var bB, aC9, aC8;
								for (aC8 = xk; xk - 6 < aC8; aC8--)
									for (aC9 = xj; xj - 6 < aC9; aC9--)
										if (bB = fK.aC0(aC9, aC8), fK.aC1(bB)) return;
								return 1
							}(xj + 3, spawningData + 3)) return aBb(xj + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aBa()) {
						for (var av = cr.a1Y = aBU; av < fe; av++) aBU = av, aBW();
						return
					}
					var xj = aBR + aBP * aBQ + aQ.aR(aBQ, 2),
						xk = aBS + th * aBQ + aQ.aR(aBQ, 2);
					aBb(xj, xk)
				}
		})(), gK.gL[7] = f4.g0[cr.gJ]
	}, this.gG = function(oK, aCF, aCG) {
		var a5, xj, xk, bB, aBP, th;
		for (aBU = oK, a5 = 0; a5 < 20; a5++)
			for (xj = aCF + a5; aCF - a5 <= xj; xj--)
				for (xk = aCG + a5; aCG - a5 <= xk; xk--)
					if ((xj === aCF + a5 || xj === aCF - a5 || xk === aCG + a5 || xk === aCG - a5) && 3 < xj && xj < aS.aT - 5 && 3 < xk && xk < aS.aU - 5 && fK.o9(fK.aC0(xj, xk)) && function(xj, xk) {
							var bB, aC9, aC8;
							for (aC8 = xk; xk - 6 < aC8; aC8--)
								for (aC9 = xj; xj - 6 < aC9; aC9--)
									if (bB = fK.aC0(aC9, aC8), fK.aC1(bB) && !fK.oJ(aBU, bB)) return;
							return 1
						}(xj + 3, xk + 3)) {
						if (0 < f4.g0[aBU]) {
							for (th = aBP = bB = void 0, aBP = f4.fy[aBU]; aBP >= f4.fw[aBU]; aBP--)
								for (th = f4.fz[aBU]; th >= f4.fx[aBU]; th--) bB = 4 * (th * aS.aT + aBP), fK.pm(aBU, bB) && (fK.pn(bB), f4.g0[aBU]--);
							aBW()
						}
						return aCA(xj - 1, xk - 1), !0
					} return !1
	}, this.gI = function(oK) {
		aBU = oK, aBa() ? aBb(aBR + aBP * aBQ + aQ.aR(aBQ, 2), aBS + th * aBQ + aQ.aR(aBQ, 2)) : aBW()
	}
}

function vz() {
	this.aCJ = 0;
	var aCM, aCK = null,
		aCL = 0,
		aCN = "",
		aCO = 0,
		aCP = null,
		aCQ = -1,
		aCR = -1,
		aCS = 0;

	function pC() {
		if (null !== aCP && null !== aCK) {
			aCL = 0;
			try {
				window.turnstile.remove(aCK), aCP.remove()
			} catch (ej) {
				console.log("turnstile remove failed " + ej)
			}
			aCK = aCP = null
		}
	}

	function aCY(aCZ) {
		return "" !== aCN && aCO + 1e3 * (300 - aCZ) > performance.now()
	}
	this.a4 = function() {
		var aCW;
		eG.aCU || !eG.so && !eG.aCV ? (console.log("turnstile cannot be loaded"), this.aCJ = -1) : ((aCW = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aCW.async = !0, aCW
			.onload = function() {
				tX.turnstile.aCJ = 1, console.log("turnstile onload"), tX.turnstile.aCX()
			}, aCW.onerror = function() {
				tX.turnstile.aCJ = -1, console.log("turnstile onerror")
			}, document.head.appendChild(aCW))
	}, this.aCX = function() {
		var kG;
		return !(1 !== this.aCJ || (window.turnstile ? aCL ? (console.log("turnstile error 246"), 1) : aCY(30) || (kG = performance.now()) < aCS && aCQ === o.p.a0M(r.buffer.data[105].value, 5) && aCR === eC.a2a || (aCN = "", aCL = 1, aCM = kG, (
				aCP = document.createElement("div")).style.position = "fixed", aCP.style.left = "0", aCP.style.top = "0", aCP.style.zIndex = "100", document.body.appendChild(aCP), console.log("turnstile render"), aCK = window
			.turnstile.render(aCP, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(sg) {
					console.log("turnstile success " + Math.floor(performance.now() - aCM)), aCN = sg, aCO = performance.now(), tX.turnstile.a6H(), pC()
				},
				"expired-callback": function() {
					pC(), console.log("turnstile expired " + Math.floor(performance.now() - aCM))
				},
				"error-callback": function() {
					pC(), console.log("turnstile callback error " + Math.floor(performance.now() - aCM)), tX.turnstile.aCJ = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		pC()
	}, this.a6H = function() {
		aCY(8) && or.v6 && f.i.e4(f.i.dw) && (aCS = performance.now() + 36e5 - 1e4, aCQ = o.p.a0M(r.buffer.data[105].value, 5), aCR = eC.a2a, f.g.sf(aCN), aCN = "", console.log("sendTokenToLobby success"))
	}
}

function a99() {
	this.aCa = function(l, j) {
		bG.a4(j), 0 === bG.size ? f.i.eb(l, 3205) : __fx.customLobby.isCustomMessage(j) || ((0 === bG.bM(1) ? function(l) {
			var aCd = bG.bM(6);
			0 === aCd ? function(l) {
					if (0 === l && 8 !== eW.eX()) {
						d7.i.a2c();
						for (var aCu = bG.bM(12), aCv = bG.bM(6), au = new Array(aCu), a5 = 0; a5 < aCu; a5++) au[a5] = bG.bM(aCv);
						u5.uR(au)
					}
				}(l) : 2 === aCd ? f.a9A.aCf(l) : 3 === aCd || 4 === aCd ? aCg.a4() : 5 === aCd ? f.a9C.aCh() : 9 === aCd ? f.a9C.aCi(l) : 10 === aCd ? f.a9E.aCj() : 11 === aCd ? f.a9C.aCk(l) : 12 === aCd ? f.a9E.aCl() : 13 === aCd ?
				f.a9G.aCm() : 14 === aCd ? f.a9G.aCn() : 15 === aCd ? f.a9C.aCo() : 16 === aCd ? f.a9A.aCp(l) : 17 === aCd ? f.a9A.aCq(l) : 19 === aCd ? f.a9A.aCr(l) : 20 === aCd ? f.a9C.aCs(l) : 21 !== aCd && 22 !== aCd && 23 ===
				aCd && f.a9C.aCt(l)
		} : function(l) {
			if (8 !== eW.eX() && !aCg.aCw()) return;
			if (l !== f.i.dv) f.i.eb(l, 3244);
			else if (0 === bG.bM(1)) bV.kb.aCx(bG.j);
			else {
				var a5, l = bG.bM(2);
				if (0 === l) {
					var vm, e5 = bG.bM(9);
					0 !== f4.fv[e5] && 0 !== f4.fv[cr.gJ] && (vm = bG.bM(10), ew.vs(e5, cr.gJ, vm), fm.fn(e5, 1, vm))
				} else if (1 === l) ! function() {
					var e5 = bG.bM(9);
					0 !== f4.fv[e5] && 0 !== f4.fv[cr.gJ] && a25.b1(0, [e5], !0) && ew.aD3(e5, 1)
				}();
				else if (2 === l) ! function() {
					var e5 = bG.bM(9),
						target = bG.bM(9);
					0 !== f4.fv[e5] && 0 !== f4.fv[target] && 0 !== f4.fv[cr.gJ] && a25.b1(1, [e5], !0) && (fm.fn(e5, 3, 96), fm.fn(target, 4, 96), ew.aD4(e5, target))
				}();
				else if (eG.so && !eG.sp) {
					var u = 540;
					for (c.d(17287), c.e(1, 0), c.e(6, 10), u = Math.min(i2.a1p.a1q.length, 540), a5 = 0; a5 < u; a5++) c.aG(32, i2.a1p.a1q[a5]);
					f.i.send(f.i.dv, c.j)
				}
			}
		})(l), bV.wU())
	}
}

function aD5() {
	this.aD6 = [L(232), L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241), L(242), L(243), L(244), L(245), L(246), L(247)];
	var aD7 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aD8 = new Array(aD7.length), this.a4 = function() {
		var au = r.buffer.data[155].value.split(";"),
			bA = au.length;
		if (function() {
				for (var u = aD7.length, a5 = 0; a5 < u; a5++) aDA.aD8[a5] = aD7[a5]
			}(), !(bA > aD7.length))
			for (var a5 = 0; a5 < bA; a5++) au[a5].length && (this.aD8[a5] = au[a5])
	}, this.aDB = function(go, code) {
		for (var aD8 = this.aD8, aDC = aD7, v = (aD8[go] = code, ""), u = aD8.length, aDD = [], a5 = 0; a5 < u; a5++) aDD.push(aD8[a5] === aDC[a5] ? "" : aD8[a5]);
		u--;
		for (a5 = 0; a5 < u; a5++) v += aDD[a5] + ";";
		r.md.pE(155, v += aDD[u])
	}, this.aDE = function() {
		r.md.pE(155, ""), this.a4()
	}, this.jA = function(code, go) {
		return code === this.aD8[go] || code === this.aD8[go + 1]
	}
}

function aDF() {
	function aDI(player) {
		for (var g6 = f4.g6[player], u = g6.length, aDP = Math.max(aQ.aR(u, 12), 1), ie = fK.ie, jn = fj.fk(u), a5 = 0; a5 < u; a5 += aDP)
			for (var hX = g6[(a5 + jn) % u], ba = 3; 0 <= ba; ba--) {
				var hE = hX + ie[ba];
				if (fK.i6(hE)) return {
					gt: hE,
					id: fK.yL(hE),
					bB: player
				}
			}
		return null
	}

	function aDN(player, aDS) {
		var hF = aV.et.a6t(player, kj.aDT[kj.hF[player]]);
		f4.g3[player].push(aDS.gt), iH.gE(player, hF, aDS.bB), oQ.oR(player, !0)
	}
	this.ar = function(player) {
		return !!aS.a3k(aS.bL) && !!cr.data.passableMountains && 0 !== f4.g6[player].length && function(player) {
			var aDH = aDI(player);
			if (null === aDH) return !1;
			! function(player) {
				for (var fB = f8.fB, f9 = f8.f9, u = Math.min(f9, 12), dp = fj.fk(f9), aDQ = gx.aDQ, g6 = f4.g6, fi = 0, a5 = 0; a5 < u; a5++) {
					var bB = fB[(a5 + dp) % f9];
					bB !== player && g6[bB].length && iE.iL(player, bB) && (aDQ[fi++] = bB)
				}
				gx.aDR[0] = fi
			}(player);
			var aDK = function(aDO) {
				for (var u = gx.aDR[0], aDQ = gx.aDQ, a5 = 0; a5 < u; a5++) {
					var aDS = aDI(aDQ[a5]);
					if (null !== aDS && aDS.id === aDO) return aDS
				}
				return null
			}(aDH.id);
			return null !== aDK ? (aDN(player, aDK), !0) : function(player, aDO) {
				var u = fN.fO.fP;
				if (0 !== u)
					for (var gt = fN.fO.buffer[fj.fk(u)] << 2, ie = fK.ie, ba = fj.fk(4);;) {
						if (gt += ie[ba], fK.i6(gt)) {
							if (fK.yL(gt) === aDO) return aDN(player, {
								gt: gt,
								bB: cr.fc
							}), !0;
							break
						}
						if (!fK.fL(gt)) break
					}
				return !1
			}(player, aDH.id)
		}(player)
	}
}

function aDU() {
	this.aDV = function(player) {
		a22.kh(player), cr.kO++, f4.fu[player] = 2, f4.gA[player] = pW.pX.jx(), player === cr.gJ && (gT.show(!1, !1), gO.m4(), kQ.kU.pc()), fm.xx(player)
	}
}

function a9H() {
	this.aCm = function() {
		var a5;
		if (bG.size < c.yu(23)) f.i.eb(0, 3259);
		else {
			var cY = bG.bM(6),
				u = bG.bM(10),
				data = [];
			if (9 === cY || 10 === cY || 11 === cY || 13 === cY) {
				for (a5 = 0; a5 < u; a5++) data.push([bG.bM(30), o.aA.b8(5), bG.aDW(32), 0, bG.bM(30)]);
				8 === d7.lA && d7.rs().rt(21, !0, {
					cY: cY,
					data: data
				})
			} else if (12 === cY) {
				for (a5 = 0; a5 < u; a5++) data.push([bG.bM(20), bG.bM(30), bG.bM(30), bG.aDW(32), bG.bM(30), o.aA.b8(5), o.aA.b8(5)]);
				8 === d7.lA && d7.rs().rt(21, !0, {
					cY: cY,
					data: data
				})
			} else {
				var ch = bG.bM(16);
				if (bG.aDX(39 + 16 * ch + u * (0 === cY ? 111 : 1 === cY ? 101 : 2 === cY || 3 === cY ? 127 : 212))) {
					if (0 === cY)
						for (a5 = 0; a5 < u; a5++) data.push([bG.bM(30), o.x.a2d(bG.bM(5)), bG.bM(16), bG.bM(30), bG.bM(30)]);
					else if (1 === cY)
						for (a5 = 0; a5 < u; a5++) data.push([bG.bM(16), o.x.a2d(bG.bM(3)), bG.bM(16), o.x.a2d(bG.bM(5)), bG.bM(31), bG.bM(30)]);
					else if (2 === cY || 3 === cY)
						for (a5 = 0; a5 < u; a5++) data.push([bG.bM(30), o.x.a2d(bG.bM(5)), bG.aDW(32), bG.bM(30), bG.bM(30)]);
					else
						for (a5 = 0; a5 < u; a5++) data.push([bG.bM(20), bG.bM(30), bG.bM(30), bG.bM(30), bG.bM(30), bG.aDW(32), bG.bM(30), o.x.a2d(bG.bM(5)), o.x.a2d(bG.bM(5))]);
					8 === d7.lA && d7.rs().rt(21, !0, {
						cY: cY,
						data: data
					})
				} else f.i.eb(0, 3260)
			}
		}
	}, this.aCn = function() {
		if (bG.size < c.yu(29)) f.i.eb(0, 3265);
		else {
			var aDY = bG.bM(4),
				aDZ = bG.bM(7),
				aDa = bG.bM(11);
			if (bG.aDX(29 + 16 * aDZ + 16 * aDa + 11 * aDY)) {
				for (var data = [], a5 = 0; a5 < aDY; a5++) {
					for (var zq = o.x.a2d(bG.bM(3)), aDb = bG.bM(8), aDc = [], a6 = 0; a6 < aDb; a6++) aDc.push(bG.bM(16));
					data.push({
						name: "[" + zq + "]",
						aDc: aDc
					})
				}
				8 === d7.lA && d7.rs().rt(23, !0, data)
			} else f.i.eb(0, 3266)
		}
	}
}

function aDd() {
	this.z3 = null, this.z6 = null, this.z8 = null, this.z9 = null, this.zB = null, this.zA = null, this.a1O = "";
	var aDe = 0;
	this.a4 = function() {
		this.z3 = [], this.z6 = [], this.z8 = [], this.z9 = [], this.zB = [0], this.zA = [0], aDe = 0, this.a1O = ""
	}, this.aDf = function(id, z5, z7, kw) {
		cr.cs || 2 === cr.d6 || (0 === this.zB[aDe] && (this.zA[aDe] ? (this.zB.push(1), this.zA.push(0), aDe++) : this.zB[aDe] = 1), this.z3.push(id), this.z6.push(z5), this.z8.push(void 0 === z7 ? 0 : z7), this.z9.push(void 0 === kw ? 0 : kw),
			this.zA[aDe]++)
	}, this.ar = function() {
		0 === this.zB[aDe] ? this.zA[aDe]++ : (this.zB.push(0), this.zA.push(0), aDe++)
	}
}

function aDg() {
	var aDh = new Uint8Array(64);
	this.a4 = function() {
		var a5;
		for (aDh[0] = 45, aDh[37] = 95, a5 = 0; a5 < 10; a5++) aDh[a5 + 1] = 48 + a5;
		for (a5 = 0; a5 < 26; a5++) aDh[a5 + 11] = 65 + a5, aDh[a5 + 38] = 97 + a5
	}, this.yx = function(yt) {
		for (var bF = bG, a80 = new Uint8Array(yt), a5 = 0; a5 < yt; a5++) a80[a5] = bF.bM(6);
		return a80
	}, this.yw = function(a80) {
		for (var u = a80.length, aDi = aDh, au = [], a5 = 0; a5 < u; a5++) au.push(String.fromCharCode(aDi[a80[a5]]));
		return au.join("")
	}, this.hg = function(value, aDj) {
		for (var aDi = aDh, au = [], a5 = 0; a5 < aDj; a5++) au.push(String.fromCharCode(aDi[value >> 6 * (aDj - 1 - a5) & 63]));
		return au.join("")
	}
}

function aDk() {
	this.aDl = function(player, a6m, hF) {
		aV.et.a6k(player, hF, a6m) && (m9.aDm(player, a6m), !aV.et.jy(a6m)) && fN.aDn.aDo[a6m] && fN.aDn.aDo[a6m]--
	}, this.oN = function(player, a6m, hF) {
		aV.et.a6o(hF, a6m) ? a1m.gE(a6m, gx.mt[0]) && (a1l.aDp(player, a6m, gx.mt[0], 1), aV.et.oL(a6m, gx.mt[0]), gK.aDq(player, a6m), fm.xC(a6m, gx.mt[0])) : gK.n6(player, hF, 12)
	}
}

function lB(title, pt, pv) {
	var pw, px;
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), px.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pv = pv || [new ir("⬅️ " + L(4), function() {
		d7.lO()
	}, dZ.om)], pw = new lH(title, pv), px = new py(pw.lK, pt), aV.d1.textAlign(pw.lK.style, 1)
}

function a8i() {
	var pw, a4Q, lR, aDr = -1;
	this.show = function() {
		pw.show(), this.resize(), aDr = r.buffer.data[125].value
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), a4Q.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(L(248), [new ir("⬅️ " + L(4), function() {
		aDr !== r.buffer.data[125].value ? d7.i.a2b() : d7.a1H(13)
	})]), a4Q = new lJ(pw.lK, ((lR = []).push(function() {
		var lV = new lW,
			a4y = (lV.lX(L(249)), lV.a50(L(250)), new ir(L(251), function() {
				r.md.pE(130, 0), d7.i.a2b()
			}, 0, 0, 1)),
			tf = new lc(r.buffer.data[126], 0, function() {
				a4y.button.click()
			});
		return lV.lb(tf), tf.ej.placeholder = "a,b,c", tf.ej.style.marginTop = "0.5em", lV.lb(new k0([a4y.button])), lV
	}()), lR.push(function() {
		var lV = new lW,
			a4y = new ir(L(251), function() {
				r.md.pE(130, 1), d7.i.a2b()
			}, 0, 0, 1),
			aDw = new lc(r.buffer.data[129], 1, function() {
				aDw.ej.focus()
			}),
			aDx = new lc(r.buffer.data[128], 1, function() {
				a4y.button.click()
			});
		return lV.lX(L(252)), lV.lb(aDx), aDx.ej.style.marginBottom = "0.5em", lV.lX(L(253)), lV.lb(aDw), lV.lb(new k0([a4y.button])), lV
	}()), lR.push(function() {
		var lV = new lW;
		return lV.lX(L(254)), r.buffer.data[125].la = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], lV.lY(new lZ(r.buffer.data[125])), lV
	}()), lR.push(function() {
		var lV = new lW;
		return lV.lX(L(255)), lV.lb(new aDy(r.buffer.data[127], L(256))), lV
	}()), lR))
}

function aDz() {
	this.p = new aDg, this.x = new aE0, this.aA = new aE1, this.a4 = function() {
		this.p.a4()
	}
}

function sv() {
	var aE2 = null;
	this.vv = 0, this.t3 = function() {
		var kv = r.buffer.data[5].value;
		aE2 = "px " + kv, "system-ui" !== kv && (aE2 += ", system-ui"), this.vv = wV(32, 32, ["a", "b", "m"], 200, aE2)
	}, this.bN = function(aZ, b6) {
		var jA = document.createElement("canvas");
		return jA.width = aZ, jA.height = b6, jA
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ck, aZ, b6) {
		return ck.getImageData(0, 0, aZ, b6)
	}, this.d2 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aE2 : 1 === type ? "bold " + size + aE2 : 2 === type ? "lighter " + size + aE2 : 3 === type ? "italic " + size + aE2 : 4 === type ? "oblique " + size + aE2 : 5 === type ? "small-caps " +
			size + aE2 : "small-caps bold " + size + aE2
	}, this.textAlign = function(gq, id) {
		gq.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gq, id) {
		gq.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.k4 = function(ej, code, color) {
		color = this.io(cz.ip) + " solid " + (color || dZ.dc);
		5 === (code = code || 5) ? ej.style.border = color : 4 === code ? ej.style.borderLeft = color : 2 === code ? ej.style.borderBottom = color : 6 === code ? ej.style.borderRight = color : ej.style.borderTop = color
	}, this.u2 = function(ej, aJ, aK, aZ, b6) {
		ej = ej.style;
		ej.left = this.aE3(aJ), ej.top = this.aE3(aK), ej.width = this.aE3(aZ), ej.height = this.aE3(b6)
	}, this.nu = function(kv) {
		return 1 + kv * cT.cU.cV()
	}, this.iq = function(ku, dp) {
		return ku * this.nu(void 0 === dp ? .5 : dp) * cy.l7 / cy.ny
	}, this.aBD = function(ku, dp) {
		return ku * this.nu(void 0 === dp ? .5 : dp) * cy.l7
	}, this.aE4 = function(ku, dp, aE5) {
		return this.nu(dp) * Math.min(ku * cy.l7, aE5 * cy.aZ) / cy.ny
	}, this.io = function(kv) {
		return kv.toFixed(1) + "px"
	}, this.aE3 = function(kv) {
		return this.u3(kv).toFixed(1) + "px"
	}, this.u3 = function(kv) {
		return kv / cy.ny
	}, this.aE7 = function(aE8) {
		for (var v = "<ul>", u = aE8.length, a5 = 0; a5 < u; a5++) v += "<li>" + aE8[a5][0] + ": <a href='" + aE8[a5][1] + "' target='_blank'>" + aE8[a5][0] + "</a></li>";
		return v += "</ul>"
	}, this.lC = function(a61) {
		return "<a href='" + a61 + "' target='_blank'>" + a61 + "</a>"
	}, this.a51 = function(ej) {
		navigator.clipboard && navigator.clipboard.writeText(ej.value)
	}, this.a4v = function(ej) {
		var kG = ej.textContent;
		aV.hf.a7b(kG, "✔") || (1 === kG.length ? ej.textContent = "✔" : ej.textContent = kG + " ✔", setTimeout(function() {
			ej.textContent = kG
		}, 500))
	}, this.measureText = function(v) {
		return dO.measureText(v).width
	}, this.aE9 = function(a91) {
		a91.style.overflowX = "auto", a91.style.overflowY = "hidden", a91.style.whiteSpace = "nowrap", a91.addEventListener("wheel", function(ej) {
			Math.abs(ej.deltaY) < Math.abs(ej.deltaX) || (this.scrollLeft += ej.deltaY, this.aEA = this.scrollLeft, ej.preventDefault())
		}), a91.addEventListener("scroll", function() {
			this.aEA = this.scrollLeft
		})
	}
}

function aEB() {
	this.size = 0, this.go = 0, this.j = null, this.a4 = function(j) {
		this.go = 0, this.j = j, this.size = j.length
	}, this.kD = function() {
		this.j = null
	}, this.bM = function(size) {
		for (var kv = 0, j = this.j, r2 = this.go + size - 1, a5 = this.go; a5 <= r2; a5++) kv |= (j[a5 >> 3] >> 7 - (7 & a5) & 1) << r2 - a5;
		return this.go += size, this.go > 8 * this.size && console.error("Unwrapper Overflow"), kv
	}, this.aDW = function(size) {
		var av = size >> 1;
		return (1 << av) * this.bM(size - av) + this.bM(av)
	}, this.aDX = function(aEC) {
		return this.size === c.yu(aEC)
	}, this.aED = function(un, aEE, aEF) {
		var fi = this.bM(un);
		if (!fi) return null;
		for (var un = Math.max(fi, aEF), au = new(aEE <= 8 ? Uint8Array : aEE <= 16 ? Uint16Array : Uint32Array)(un), a5 = 0; a5 < fi; a5++) au[a5] = this.bM(aEE);
		aEF = au[fi - 1];
		return aEF && au.fill(aEF, fi), au
	}, this.aEG = function(un, aEH, aEF) {
		var fi = this.bM(un);
		if (!fi) return null;
		for (var un = Math.max(fi, aEF), au = new Array(un), a5 = 0; a5 < fi; a5++) au[a5] = this.aEI(aEH);
		return au.fill(au[fi - 1], fi), au
	}, this.aEI = function(un) {
		return o.x.a2d(this.bM(un))
	}, this.aEJ = function() {
		var yt = this.bM(30);
		if (!(6 * yt > 8 * this.size - this.go)) {
			var v = w.p.yw(w.p.yx(yt)),
				v = aV.hf.a7e(v, "_", "/");
			v = aV.hf.a7e(v, "-", "+");
			for (var aEK = "";
				(v.length + aEK.length) % 4;) aEK += "=";
			v = "data:image/png;base64," + v + aEK;
			var a37 = new Image;
			a37.onload = function() {
				tq.tr.a38(a37), a37.onload = null, a37 = null
			}, a37.src = v
		}
	}
}

function a8r() {
	var lE, lF, lG, lR;

	function lI() {
		lM(), 2 !== cr.data.spawningType || aV.aW.a9c(cr.data.spawningData) || (cr.data.spawningType = 0), 2 !== cr.data.spawningType && (cr.data.spawningData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		2 === cr.data.spawningType && aV.aW.lP(lG.lQ(), cr.data.spawningData, aS.a7A - 1)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(257), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW,
			la = (lV.lX(L(5)), [L(258), L(259), L(8)]),
			value = cr.data.spawningType;
		0 === cr.data.gameMode && (la.splice(1, 1), 0 < value) && (value = 1);
		lV.lY(new lZ({
			la: la,
			value: value
		}, function(go) {
			lM(), cr.data.spawningType = go, 0 === cr.data.gameMode && 1 === go && (cr.data.spawningType = 2), 2 !== cr.data.spawningType || cr.data.spawningData || (cr.data.spawningData = new Uint16Array(2 * cr.fc)), d7.dF(
				24)
		})), lR.push(lV)
	}(lR = []), function(lR) {
		var lV = new lW;
		lV.lX("My Spawn"), lV.lb(new aDy({
			value: cr.data.selectableSpawn
		}, L(260), function(value) {
			cr.data.selectableSpawn = value
		})), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW,
			aEN = (lV.lX("Seed"), new lc({
				go: -1,
				value: cr.data.spawningSeed
			}, 1, 0, function(ej) {
				var value = Math.abs(Math.floor(ej.target.value)) % 16384;
				ej.target.value = cr.data.spawningSeed = value
			}));
		lV.lb(aEN), lV.lb(new k0([new ir(L(258), function() {
			aEN.ej.value = cr.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), lR.push(lV)
	}(lR), function(lR) {
		var lV;
		2 === cr.data.spawningType && ((lV = new lW).lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.spawningData, 2)), lV.lb(lG), lR.push(lV))
	}(lR), lR))
}

function aEO() {
	var aEP = 0,
		aEQ = !0;

	function aER(id) {
		id = [L(261), L(262), L(263), L(264)][id];
		ew.aES(id)
	}
	this.ar = function() {
		var kG, aAh;
		bV.aw < aEP || (aEP = bV.aw + 3e3, cr.cs) || cr.eh || aV.et.hn(cr.gJ) || (kG = new Date, aAh = kG.getUTCSeconds(), aEQ ? aAh < 43 && (aEQ = !1) : aAh < 43 || (aEP += 52e3, aEQ = !0, (aAh = (kG.getUTCMinutes() + 2) % 60) % 10 == 0 ? cr
			.fW < 7 && aER(0) : aAh % 10 == 5 ? 7 !== cr.fW && 10 !== cr.fW || aER(1) : aAh % 10 == 7 ? 8 === cr.fW && aER(2) : aAh % 10 == 2 && 9 === cr.fW && aER(3)))
	}
}

function L(value, aET, a6S, aEU) {
	var v = "number" == typeof value ? a8.rV[value] : value;
	if (a6S && a8.rh() && (v = a6S), !aET) return aEU ? v.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : v;
	for (var u = aET.length, a5 = 0; a5 < u; a5++)
		for (var a6 = 0; a6 < 3; a6++) v = v.replace("{" + (10 * a6 + a5) + "}", aET[a5]);
	return v
}

function aEV() {
	var gap, aEW = !1,
		a2A = 0,
		aZ = 0,
		de = 0,
		canvas = null,
		ck = null,
		aEX = null;

	function aEc() {
		for (var a5 = cr.a1b; 0 <= a5; a5--) aEX[a5] = 0;
		for (a5 = f8.f9 - 1; 0 <= a5; a5--) aEX[fF.fI[f8.fB[a5]]] += f4.g0[f8.fB[a5]];
		aEW = !0
	}

	function aEa() {
		for (var aEj, aEh = 0, u = 0, jA = Math.floor(aZ / 2), jn = Math.floor(de / 2), aEi = 1.5 * Math.PI, a5 = cr.a1b; 0 <= a5; a5--) u += aEX[a5], 0 === aEX[a5] && aEh++;
		if (aEW = !1, ck.clearRect(0, 0, aZ, aZ), 0 < u)
			if (aEh === cr.a1b) {
				for (a5 = cr.a1b; 0 <= a5; a5--)
					if (0 < aEX[a5]) {
						! function(a5, jA, jn) {
							ck.fillStyle = fF.a83[fF.fG[a5]], ck.beginPath(), ck.arc(jA, jA, jn, 0, 2 * Math.PI), ck.fill()
						}(a5, jA, jn);
						break
					}!
				function(jA) {
					var fontSize = jA / 3;
					ck.font = aV.d1.d2(1, fontSize), ck.fillStyle = dZ.dc, ck.fillText("100%", jA, jA + .1 * fontSize)
				}(jA)
			} else {
				for (a5 = 0; a5 <= cr.a1b; a5++) 0 < aEX[a5] && (! function(a5, jA, jn, aEi, aEj) {
					ck.fillStyle = fF.a83[fF.fG[a5]], ck.beginPath(), ck.arc(jA, jA, jn, aEi, aEj), ck.lineTo(jA, jA), ck.fill()
				}(a5, jA, jn, aEi, aEj = aEi + 2 * Math.PI * aEX[a5] / u), function(jA, jn, aEi, aEj) {
					var kv = (aEj - aEi) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * jn * Math.min(kv, .37);
					fontSize < 8 || (aEi = (aEi + aEj) / 2, aEj = (__fx.settings.detailedTeamPercentage ? (100 * kv).toFixed(2) : Math.floor(100 * kv + .5)) + "%", jn *= .525 - Math.max(.6 * (kv - .7), 0), ck.font = aV.d1.d2(1, fontSize), ck
						.fillStyle = dZ.dc, ck.fillText(aEj, jA + Math.cos(aEi) * jn, jA + Math.cos(aEi + 1.5 * Math.PI) * jn))
				}(jA, jn, aEi, aEj), 0 !== a5 && aEo(jA, jn, aEi), aEi = aEj);
				aEo(jA, jn, 1.5 * Math.PI)
			}!
		function(jA, jn) {
			ck.beginPath(), ck.arc(jA, jA, jn, 0, 2 * Math.PI), ck.stroke()
		}(jA, jn)
	}

	function aEo(jA, jn, aEq) {
		ck.beginPath(), ck.moveTo(jA, jA), ck.lineTo(jA + Math.cos(aEq) * jn, jA + Math.cos(aEq + 1.5 * Math.PI) * jn), ck.stroke()
	}
	this.a4 = function() {
		if (cr.f0) {
			a2A = 0, aEX = new Uint32Array(cr.a1b + 1);
			for (var a5 = cr.a1b; 0 <= a5; a5--) aEX[a5] = 0;
			for (a5 = f8.f9 - 1; 0 <= a5; a5--) aEX[fF.fI[f8.fB[a5]]] += 1;
			this.resize()
		} else aEX = ck = canvas = null
	}, this.aEZ = function() {
		return aZ
	}, this.resize = function() {
		cr.f0 && (aZ = Math.floor(.95 * (cT.cU.cV() && !cr.d9 ? .18 * cy.min : .13 * cy.l7)), aZ = (aZ *= 1 + (.5 + .2 * cT.cU.cV()) * cr.d9) + aZ % 2, gap = Math.max(1, .015 * aZ), de = Math.floor(aZ - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = aZ, canvas.height = aZ, (ck = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ck.strokeStyle = dZ.dc, aV.d1.textAlign(ck, 1), aV.d1.textBaseline(ck, 1), aEa())
	}, this.mN = function(aEb) {
		aEb && aEc();
		var kG, aEb = this.fE();
		return fF.fG[aEb] || (aEb = function() {
			for (var a6Z = -1, a5 = cr.a1b; 1 <= a5; a5--)(-1 === a6Z || aEX[a5] > aEX[a6Z]) && (a6Z = a5);
			return a6Z
		}(), kG = f4.g0[fH[0]], -1 !== aEb && aEX[aEb] > kG) ? aEX[aEb] : kG
	}, this.aEe = function() {
		return a2A = 31, this.ar(), this.fE()
	}, this.fE = function() {
		for (var a6Z = 0, a5 = cr.a1b; 0 < a5; a5--) aEX[a5] > aEX[a6Z] && (a6Z = a5);
		return a6Z
	}, this.aEf = function(nV) {
		for (var fi = 0, fB = f8.fB, fI = fF.fI, u = f8.f9, aBi = gx.aBi, a5 = 0; a5 < u; a5++) {
			var bB = fB[a5];
			fI[bB] === nV && (aBi[fi++] = bB)
		}
		gx.aDR[0] = fi
	}, this.aEg = function(nV) {
		for (var fi = 0, fB = f8.fB, fI = fF.fI, u = f8.f9, aBi = gx.aBi, a5 = 0; a5 < u; a5++) {
			var bB = fB[a5];
			fI[bB] !== nV && (aBi[fi++] = bB)
		}
		gx.aDR[0] = fi
	}, this.a6X = function() {
		for (var fi = 0, a5 = cr.a1b; 0 <= a5; a5--) fi += 0 < aEX[a5];
		return fi
	}, this.ar = function() {
		cr.f0 && 32 <= ++a2A && (a2A = 0, aEc())
	}, this.d3 = function() {
		cr.f0 && aEW && aEa()
	}, this.cQ = function() {
		cr.f0 && (cr.d9 ? dO.drawImage(canvas, cz.gap, cz.gap) : dO.drawImage(canvas, cz.gap, q6 + 2 * cz.gap))
	}
}

function aEr() {
	function aF1() {
		return {
			aT: aS.aT,
			aU: aS.aU,
			bX: aS.bX,
			bR: aS.bR,
			bS: aS.bS,
			bY: aS.bY,
			bL: aS.bL,
			mapSeed: aS.mapSeed,
			bT: aS.bT
		}
	}

	function aEv(a5) {
		return 1 !== a5 && aS.aEw(a5) && a5 !== aS.aF3()
	}
	this.wF = 25, this.wJ = 13, this.a7A = 4096, this.aT = 0, this.aU = 0, this.bX = null, this.bR = null, this.bS = null, this.bY = null, this.bL = 0, this.mapSeed = 0, this.bT = !1, this.bU = new jJ, this.bJ = new w1, this.aEs = new aEt, this.a4 =
		function() {
			this.bJ.a4()
		}, this.d = function(map, aEu) {
			((map %= this.wF) !== this.bL || aEv(this.bL) && aEu !== this.mapSeed) && (this.bT = !1, this.bU.jV(), fj.jd(map), this.bL = map, this.mapSeed = aEu, aEv(map) && (aS.bJ.bK[map].jb = aEu), this.aEw(this.bL) ? (map = aS.bJ.bK[this.bL], this
				.aT = map.aZ, this.aU = map.b6, fj.jd(map.jb), jW.d([this.aT, this.aU, map.wG, map.wH]), aEy(), a1t.aEz(), jW.jX()) : aEx())
		}, this.aF0 = function(map, aEu) {
			var z5 = aF1(),
				map = (this.d(map, aEu), this.bU.jV(), aF1());
			return aEu = z5, aS.aT = aEu.aT, aS.aU = aEu.aU, aS.bX = aEu.bX, aS.bR = aEu.bR, aS.bS = aEu.bS, aS.bY = aEu.bY, aS.bL = aEu.bL, aS.mapSeed = aEu.mapSeed, aS.bT = aEu.bT, map
		}, this.aAV = function(canvas) {
			canvas && this.bX !== canvas && (this.aT = canvas.width, this.aU = canvas.height, this.bX = canvas, this.bR = this.bX.getContext("2d", {
				alpha: !1
			}), this.gr = this.bR.getImageData(0, 0, this.aT, this.aU), this.bY = this.gr.data, this.bL = this.aF3(), this.mapSeed = 0, aS.bJ.bK[this.bL].name = cr.data.mapName)
		}, this.a3k = function(a5) {
			return 3 === a5 || 7 === a5 || 9 === a5 || 21 === a5 || a5 === this.aF3()
		}, this.aF4 = function(a5) {
			return 2 === a5 || 7 === a5 || 9 === a5 || 20 === a5
		}, this.aF5 = function(a5) {
			return 1 === a5
		}, this.aF3 = function() {
			return this.wF
		}, this.aEw = function(a5) {
			return void 0 === this.bJ.bK[a5].jY
		}, this.aAU = function(ev) {
			return 0 === ev.mapType ? ev.mapProceduralIndex < 10 ? ev.mapProceduralIndex : 10 + ev.mapProceduralIndex : 1 === ev.mapType ? 10 <= ev.mapRealisticIndex ? 22 + ev.mapRealisticIndex - 10 : ev.mapRealisticIndex + 10 : void 0
		}, this.aF6 = function(ev, aF7) {
			0 === ev.mapType ? ev.mapProceduralIndex = aF7 < 10 ? aF7 : aF7 - 10 : 1 === ev.mapType && (ev.mapRealisticIndex = aF7 - (22 <= aF7 ? 12 : 10))
		}
}

function aF8(aF9) {
	var op = document.createElement("div"),
		aFA = document.createElement("div"),
		aFB = (this.aJ = 0, this.aK = 0);

	function aFF() {
		or.a0F.eQ()
	}
	this.aFC = aF9, this.show = function(aJ, aK, aFH) {
		if (aFB) return [0, 0];
		aFB = 1, this.aJ = aJ, this.aK = aK,
			function(self, aFH) {
				var aZ = aV.d1.iq(.16, .7),
					b6 = aF9.length * aZ / 3,
					aFJ = cy.aZ / cy.ny,
					aFK = cy.b6 / cy.ny,
					ku = Math.min(1, Math.min(aFJ / aZ, aFK / b6));
				aZ *= ku, b6 *= ku, aFH && (self.aJ += aV.d1.iq(.03, .5)), self.aJ = aQ.ld(self.aJ, 0, aFJ - aZ), self.aK = aQ.ld(self.aK, 0, aFK - b6), aFA.style.left = self.aJ + "px", aFA.style.top = self.aK + "px", aFA.style.width = aZ + "px",
					aFA.style.height = b6 + "px", aFA.style.font = aV.d1.d2(0, .3 * b6 / aF9.length), aV.d1.k4(aFA, 5);
				for (var a5 = 1; a5 < aF9.length; a5++) aV.d1.k4(aF9[a5].button, 8)
			}(this, aFH), document.body.appendChild(op)
	}, this.eQ = function() {
		aFB && (aFB = 0, op.removeEventListener("click", aFF), d7.removeChild(document.body, op))
	};
	for (var a5 = 0; a5 < aF9.length; a5++) new aFD("" + (1 + a5), aF9[a5].button, 0, 1);
	op.style.position = "fixed", op.style.top = "0", op.style.left = "0", op.style.width = "100%", op.style.height = "100%", op.style.zIndex = "5", aFA.style.position = "absolute",
		function() {
			for (var aFG = (100 / aF9.length).toFixed(2) + "%", a5 = 0; a5 < aF9.length; a5++) aF9[a5].button.style.width = "100%", aF9[a5].button.style.height = aF9[a5].button.style.maxHeight = aFG, aF9[a5].button.style.padding = "0.0em 0.9em", aFA
				.appendChild(aF9[a5].button)
		}(), op.appendChild(aFA), op.addEventListener("click", aFF)
}

function a8e() {
	var pw, aFL, aFM, aFR;

	function aFN(id) {
		0 !== cT.id || r.buffer.data[140].value ? 0 === id ? d7.dF(8, 1, new tt(16)) : d7.dF(2) : d7.i.tu(d7.lA, 0 === id ? 16 : 0)
	}
	this.show = function() {
		cT.cU.setState(12), pw.show(), this.resize(), this.ar()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), aFL.resize()
	}, this.ar = function() {
		8 === eW.eX() && (2 <= gK.aFU ? aFM[2].iz === dZ.jB && aFM[2].j2(0) : aFM[2].iz !== dZ.jB && aFM[2].j2(dZ.jB), !cr.cs && dG.aFV(cr.gJ) ? aFM[1].iz === dZ.jB && aFM[1].j2(0) : aFM[1].iz !== dZ.jB && aFM[1].j2(dZ.jB), !cr.cs && iZ.ic(cr
			.gJ) ? aFM[0].iz === dZ.jB && aFM[0].j2(0) : aFM[0].iz !== dZ.jB && aFM[0].j2(dZ.jB))
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, aFM = [new ir(L(265), function() {
		aFN(0)
	}), new ir(L(266), function() {
		d7.dF(16)
	}), new ir(L(267), function() {
		d7.dF(17)
	}), new ir(L(268), function() {
		d7.i.a2b()
	}, 0, 0, 1), new ir(L(72), function() {
		d7.dF(3, 1)
	}), new ir(L(269), function() {
		d7.dF(18)
	}), new ir(L(270), function() {
		d7.dF(31)
	}), new ir(L(271), function() {
		d7.i.tp(2)
	}), new ir(L(272), function() {
		aFN(1)
	}), new ir("🔒 " + L(273), function() {
		d7.dF(32)
	}), new ir(L(274), function() {
		var aE8, nx;
		(aE8 = []).push(["Wiki", (nx = "https://territorial.io/") + "wiki/gold"]), aE8.push(["Team Games", nx + "log/team"]), aE8.push(["Battle Royale Games", nx + "log/br"]), aE8.push(["1v1 Games", nx + "log/1v1"]), aE8.push([
			"Zombie Games", nx + "log/zombies"
		]), aE8.push(["Transactions", nx + "log/transactions"]), aE8.push(["Changelog", nx + "changelog"]), 2 !== cT.id && aE8.push(["Android App", l0.l1]), 1 !== cT.id && aE8.push(["iOS App", l0.l2]), 0 === cT.id && aE8.push([
			"Patreon", l0.a60
		]), aE8.push(["Terms", l0.aFY]), aE8.push(["Privacy", l0.aFZ]), d7.dF(4, 1, new ol(L(274), aV.d1.aE7(aE8), !1, [new ir("⬅️ " + L(4), function() {
			d7.dF(1)
		})]))
	}), new ir(L(275), function() {
		d7.dF(4, 1, new ol(L(275), eG.oe + "<br>" + f.i.eJ("/changelog") + "<br><br><eG>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></eG>", !0, [new ir("⬅️ " + L(4),
				function() {
					d7.dF(1)
				})]))
	}), new ir(L(276), function() {
		d7.dF(4, 1, new ol(L(276), L(284) + "<br>" + L(285), !1, [new ir("⬅️ " + L(4), function() {
			d7.dF(1)
		}), new ir(L(286), function() {
			cT.cU.oT(), d7.dF(1)
		})]))
	}), new ir("👁️ " + L(277), function() {
		cT.cU.oZ(), d7.dF(4, 1, new ol(L(287), L(288) + " " + f.i.eJ("/privacy"), !1, [new ir("⬅️ " + L(4), function() {
			d7.dF(1)
		})]))
	})], aFR = [new ir("⬅️ " + L(4), function() {
		d7.i.rv()
	})], 8 === eW.eX() && (aFM.unshift(new ir(L(280), function() {
		d7.dF(30)
	})), aFM.unshift(new ir(L(281), function() {
		2 <= gK.aFU && (d7.vL(), re.dI(), bV.bW = !0)
	}, 0, 1)), aFM.unshift(new ir(L(282), function() {
		!cr.cs && dG.aFV(cr.gJ) && (i2.i3.aFW(), d7.vL(), dG.dH) && dG.dI()
	}, 0, 1)), aFM.unshift(new ir(L(283), function() {
		!cr.cs && iZ.ic(cr.gJ) && (a1w.aFX(2), i2.i3.iY(), d7.vL(), dG.dH) && dG.dI()
	}, 0, 1))), 1 === cT.id && 5 <= cT.oe && aFM.push(new ir(L(278), function() {
		cT.cU.oa()
	})), pw = new lH(L(279), aFR), aFL = new aFT(aFM, pw.lK)
}

function lc(aFa, type, aFb, aFc) {
	var ej;
	this.ej = document.createElement("input"), (ej = this.ej).type = type ? "number" : "text", ej.id = "input" + d7.i.a2Z++, ej.value = aFa.value, ej.style.width = "100%", ej.style.userSelect = "none", ej.style.outline = "none", ej.style.resize =
		"none", ej.style.border = "inherit", ej.style.font = "inherit", ej.style.color = dZ.dc, ej.style.backgroundColor = dZ.aFd, ej.style.fontSize = "1em", ej.style.padding = "0.1em 0.2em", ej.addEventListener("focus", function() {
			cy.aFe++
		}), ej.addEventListener("blur", function() {
			cy.aFe--, -1 !== aFa.go && r.md.pE(aFa.go, ej.value)
		}), ej.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== aFa.go && r.md.pE(aFa.go, ej.value), aFb ? aFb() : ej.blur())
		}), aFc && ej.addEventListener("input", function(ev) {
			aFc(ev)
		})
}

function a9F() {
	this.aCj = function() {
		r.i.aFf(), r.md.pE(105, w.p.yw(w.p.yx(5))), r.md.pE(106, w.p.yw(w.p.yx(15))), r.md.pE(109, 0), r.md.pE(108, r.buffer.data[109].value), r.md.pE(111, r.buffer.data[109].value + 1), r.md.pE(107, 0), r.md.pE(110, "")
	}, this.aCl = function() {
		var data;
		bG.size < c.yu(29) ? f.i.eb(0, 3254) : ((data = {
			a4T: bG.bM(30),
			a5B: bG.bM(16),
			a5C: bG.bM(30),
			a5D: bG.bM(30),
			a4r: bG.bM(30),
			a0: bG.aDW(32),
			username: o.aA.b8(5),
			a5i: o.aA.b8(3),
			a5p: o.aA.b8(3),
			a5h: bG.aDW(32),
			a5o: bG.aDW(32),
			a5j: bG.bM(30),
			a5l: bG.aDW(32),
			a5q: bG.aDW(32),
			a5n: bG.aDW(32),
			a5r: bG.aDW(32),
			a5H: bG.aDW(32),
			a5I: bG.aDW(30),
			a5s: bG.aDW(32),
			a5t: o.aA.b8(3),
			a5c: bG.aDW(2),
			a5e: bG.aDW(10),
			a5a: o.aA.b8(8),
			a5d: bG.aDW(5),
			a4p: bG.bM(30),
			a5E: bG.bM(30),
			zg: bG.aDW(32),
			a5M: bG.bM(3),
			a5L: bG.bM(8),
			a5F: bG.bM(30),
			a5G: bG.aDW(32),
			a5K: bG.bM(1),
			a5X: o.aA.b8(6),
			a5N: bG.bM(1),
			a5O: bG.bM(1),
			a5P: bG.bM(1),
			aFg: bG.bM(17),
			aFh: bG.bM(5),
			a5u: bG.bM(1),
			a5v: bG.bM(1)
		}).a5u && (data.a5w = bG.aDW(32), data.a5x = bG.bM(30), data.a5y = bG.bM(30), data.a5z = bG.bM(1)), 8 === d7.lA && (25 === d7.rs().aFi ? (data.a4S = !0, d7.i.a2X = data, d7.rs().rt(25, !1)) : (data.a4S = !1, r.md.pE(160, +(data
			.a5u && data.a5z)), data.aE = r.buffer.data[105].value, d7.i.a2Y = data, r.md.aFj(data), d7.rs().rt(16, !0))))
	}
}

function wQ() {
	var go = 0,
		aw = bV.aw;
	this.wT = 0, this.ar = function() {
		cy.ar(), cr.gH ? aFk() : 0 === go ? bV.aw >= aw && (aw += bV.mV * Math.floor(1 + (bV.aw - aw) / bV.mV), 2 === cr.d6 || dG.dH ? aFl() : (aFm(), gb.render()), go++) : ((dG.dH ? aFk : (bV.bW = !0, aFn))(), go = 0), aFo(), bV.bW && (bV.bW = !
			1, aFp())
	}
}

function a8h() {
	var pw, te, aFq, aFr, aFs, aFt, colors = [0, 0, 0],
		aFu = -1;

	function aG2(a5) {
		var aG3 = te.aK + a5 * (cz.gap + aFt);
		dO.fillStyle = "rgb(" + (0 === a5 ? 150 : 2 === a5 ? 30 : 0) + "," + (1 === a5 ? 130 : 2 === a5 ? 30 : 0) + "," + (2 === a5 ? 220 : 0) + ")", dO.fillRect(aFr, aG3, colors[a5] * aFs, aFt), dO.strokeStyle = dZ.dc, dO.strokeRect(aFr, aG3, aFs,
			aFt), dO.fillStyle = dZ.dc, dO.font = aV.d1.d2(0, .32 * aFt), aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 0), dO.fillText(L(0 === a5 ? 291 : 1 === a5 ? 292 : 293) + aFv(a5), aFr + cz.gap, aG3 + .53 * aFt)
	}

	function aFv(a5, aG4) {
		return aG4 = aG4 || 256, aQ.ld(Math.floor(aG4 * colors[a5]), 0, aG4 - 1)
	}

	function aG5(jp, jq) {
		return !(jp < aFr || jq < te.aK || jp > te.aJ + te.aZ || jq > te.aK + te.b6)
	}
	this.show = function() {
		var kv = r.buffer.data[121].value;
		colors[0] = (kv >> 12) / 63, colors[1] = (kv >> 6 & 63) / 63, colors[2] = (63 & kv) / 63, pw.show(), this.resize()
	}, this.eQ = function() {
		r.md.pE(121, (aFv(0, 64) << 12) + (aFv(1, 64) << 6) + aFv(2, 64)), pw.eQ()
	}, this.resize = function() {
		pw.resize(), te.resize();
		var jA = cy.ny,
			aFw = pw.aFx(),
			aFz = (te.aK = Math.max(te.aK, jA * aFw.aFy + cz.gap), jA * aFw.aG0 - 2 * cz.gap);
		te.b6 = Math.min(te.b6, aFz), te.aZ = 2 * te.b6, te.aK = jA * aFw.aFy + .5 * (jA * aFw.aG0 - te.b6), te.aJ = .5 * (cy.aZ - te.aZ), aFq = .25 * te.aZ, aFr = te.aJ + aFq + cz.gap, aFs = te.aZ - aFq - cz.gap, aFt = (te.b6 - 2 * cz.gap) / 3
	}, this.cQ = function() {
		var jn, mX, av;
		pw.cQ(), dO.lineWidth = cz.qm, jn = aFv(0), mX = aFv(1), av = aFv(2), dO.fillStyle = "rgb(" + jn + "," + mX + "," + av + ")", dO.fillRect(te.aJ, te.aK, aFq, te.b6), dO.strokeStyle = dZ.dc, dO.strokeRect(te.aJ, te.aK, aFq, te.b6), dO
			.fillStyle = jn + mX + av < 306 && mX < 150 ? dZ.dc : dZ.pi, aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 1), dO.font = aV.d1.d2(0, .1 * te.b6), dO.rotate(-Math.PI / 2), dO.fillText(L(290), -te.aK - .5 * te.b6, te.aJ + .5 * aFq), dO
			.setTransform(1, 0, 0, 1, 0, 0), aG2(0), aG2(1), aG2(2)
	}, this.dB = function(jp, jq) {
		aG5(jp, jq) && (aFu = aQ.ld(Math.floor((jq - te.aK) / (aFt + .75 * cz.gap)), 0, 2), colors[aFu] = aQ.ld((jp - aFr) / aFs, 0, 1), bV.bW = !0)
	}, this.rB = function(jp) {
		-1 !== aFu && (colors[aFu] = aQ.ld((jp - aFr) / aFs, 0, 1), bV.bW = !0)
	}, this.rG = function(jp, jq, deltaY) {
		aG5(jp, jq) && (jp = aQ.ld(Math.floor((jq - te.aK) / (aFt + .75 * cz.gap)), 0, 2), colors[jp] = aQ.ld(colors[jp] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bV.bW = !0)
	}, this.a8z = function() {
		0 <= aFu && (aFu = -1, bV.bW = !0)
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(L(289), [new ir("⬅️ " + L(4), function() {
		d7.i.rv()
	})], !1), te = new ct([.5, .25], [.5, .5], 1)
}

function aEy() {
	var la = aG6(aS.bL);
	la && aG7(la[0], la[1], la[2], la[3], la[4])
}

function aG6(bL) {
	return 2 === bL ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === bL ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === bL ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === bL ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === bL ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aG7(aG8, aG9, aGA, aGB, aGC) {
	for (var aJ, aK, aGE, aGF, xL, aGH, hH = aG8.length - 1, aGD = aS.aT + aS.aU, u = (aGD *= aGD, aGA.length), aGG = Array(u), a5 = u - 1; 0 <= a5; a5--) aGG[a5] = aGA[a5] * aGA[a5];
	var aGI = new Array(u),
		aGJ = new Array(u),
		aGK = new Array(u),
		kv = jW.je();
	if (void 0 === aGC)
		for (aGC = new Array(u), a5 = u - 1; 0 <= a5; a5--) aGC[a5] = 0;
	for (a5 = 1; a5 < u; a5++) aGI[a5] = aGG[a5] - aGG[a5 - 1], aGJ[a5] = aGB[a5] - aGB[a5 - 1], aGK[a5] = aGC[a5] - aGC[a5 - 1];
	for (aJ = aS.aT - 1; 0 <= aJ; aJ--)
		for (aK = aS.aU - 1; 0 <= aK; aK--) {
			for (aGE = aGD, a5 = hH; 0 <= a5; a5--) aGE = (aGF = (aJ - aG8[a5]) * (aJ - aG8[a5]) + (aK - aG9[a5]) * (aK - aG9[a5])) < aGE ? aGF : aGE;
			for (xL = aGB[u - 1], aGH = aGC[u - 1], a5 = 1; a5 < u; a5++)
				if (aGE < aGG[a5]) {
					xL = aGB[a5 - 1] + aGL((aGE - aGG[a5 - 1]) * aGJ[a5], aGI[a5]), aGH = aGC[a5 - 1] + aGL((aGE - aGG[a5 - 1]) * aGK[a5], aGI[a5]);
					break
				} aGM(aS.aT * aK + aJ, xL, aGH, kv)
		}
}

function aGM(go, xL, aGH, kv) {
	xL < 500 ? kv[go] = aQ.aR(kv[go] * xL * 2, 1e3) : 500 < xL && (kv[go] += aQ.aR(2 * (1e4 - kv[go]) * (xL - 500), 1e3)), kv[go] += aQ.aR(aGH * (10 * xL - kv[go]), 1e3)
}

function aE0() {
	this.y = function(v) {
		for (var u = v.length, aZ = c, a5 = 0; a5 < u; a5++) aZ.e(16, v.charCodeAt(a5))
	}
}

function aGN(aGO, oo) {
	var aGV, self, aGP = document.createElement("div"),
		aGQ = document.createElement("div"),
		aGR = document.createElement("div"),
		aGS = null,
		aGW = (this.tf = new lc({
			value: "",
			go: -1
		}, 0, aGT, function(ej) {
			ej.target.value = aV.hf.a7P(ej.target.value), aGS.p2.textContent = 127 - ej.target.value.length
		}), 0),
		aGX = 1,
		aGY = 0,
		aGZ = 1048575;

	function aGT() {
		aGO(), aGS.p2.textContent = 127
	}

	function aGf(ou, ev) {
		ev && (ev.a03 = 1, ou.appendChild(or.fp.transform(ev)))
	}

	function aGg(m6) {
		aGX ? aGP.scrollTop = aGP.scrollHeight : m6 && (aGP.scrollTop = aGY)
	}
	this.reset = function(aGc) {
			aGZ = 1048575, aGQ.textContent = "", aGc || this.d3()
		}, this.d3 = function() {
			var a9v = or.i.ow[0],
				a9v = or.i.aA1[a9v],
				aA3 = a9v.aA3,
				u = aA3.length,
				y7 = 1048575 === aGZ ? 0 : u - (a9v.aGe - aGZ + 1048575) % 1048575;
			if (aGZ = a9v.aGe, !(u <= (y7 = Math.max(y7, 0)))) {
				for (var ou = document.createDocumentFragment(), a5 = y7; a5 < u; a5++) aGf(ou, or.cI.sM(aA3[a5], or.cI.sN(aA3[a5])));
				aGQ.appendChild(ou), aGg()
			}
		}, this.sQ = function(a06) {
			var ou = document.createDocumentFragment();
			aGf(ou, a06), aGQ.appendChild(ou), aGg()
		}, this.show = function(np) {
			np.appendChild(aGP), np.appendChild(aGR), this.resize(np)
		}, this.eQ = function(np) {
			d7.removeChild(np, aGP), d7.removeChild(np, aGR)
		}, this.resize = function(np) {
			aGW = np ? np.offsetHeight : aGW;
			var np = aV.d1.iq(.04, .75),
				aFy = Math.max(np, aGW - np),
				aGi = cy.aZ / cy.ny,
				u1 = .7 * aGi,
				aGj = aV.d1.io(aGW - np - aFy),
				aFy = (aGR.style.height = aV.d1.io(np), aGP.style.height = aV.d1.io(aFy), cy.b6 > cy.aZ || cT.cU.cV() ? (aGR.style.top = aGj, aGP.style.top = aV.d1.io(aGW - aFy), aV.d1.k4(aGP, 8)) : (aGP.style.top = aGj, aGR.style.top = aV.d1.io(
						aGW - np), aV.d1.k4(aGP, 2)), this.tf.ej.style.width = aV.d1.io(u1), this.tf.ej.style.fontSize = aGV.button.style.fontSize = aV.d1.io(.5 * np), aV.d1.k4(this.tf.ej, 6), aGV.button.style.left = aV.d1.io(u1), aGV.button.style
					.width = aV.d1.io(aGi - u1), .385 * np);
			cT.cU.cV() && (aFy *= .8 - .12 * (cy.aZ > cy.b6)), aGQ.style.marginLeft = aGQ.style.marginRight = aV.d1.io(.5 * aFy), aGQ.style.fontSize = aV.d1.io(aFy), aGg(1)
		}, (self = this).tf.ej.aGa = 127, aGP.style.position = "absolute", aGP.style.left = "0", aGP.style.width = "100%", aGP.style.overflowX = "hidden", aGP.style.overflowY = "auto", aGP.style.font = "inherit", aGP.style.backgroundColor = dZ.vj,
		aGP.addEventListener("scroll", function() {
			aGY = aGP.scrollTop, aGX = aGY < aGP.scrollHeight - aGP.clientHeight - 2 ? 0 : 1
		}), aGQ.style.font = "inherit", aGR.style.position = "absolute", aGR.style.left = "0", aGR.style.width = "100%", self.tf.ej.setAttribute("placeholder", L(294)), self.tf.ej.style.position = "absolute", self.tf.ej.style.top = "0", self.tf.ej
		.style.left = "0", self.tf.ej.style.height = "100%", self.tf.ej.style.backgroundColor = dZ.a2T, self.tf.ej.style.textAlign = "center", (aGV = new ir(L(103), aGT)).button.top = "0", aGV.button.style.position = "absolute", aGV.button.style
		.height = "100%", aGV.j2(dZ.aGb), aGS = new aFD("127", aGV.button, 1, 1), aGP.appendChild(aGQ), aGR.appendChild(self.tf.ej), aGR.appendChild(aGV.button)
}

function aGl() {
	var aGm = new Uint16Array(cr.fc),
		aGn = 0;

	function aGr(a2f, aGp) {
		var jA = bV.es();
		return 3213 <= jA ? 4 + aQ.aR(100 * aGp, m9.mA(a2f)) : (a2f = 1 + aQ.aR(cr.lv, 300), jA < 357 ? 2 + aQ.aR(100 * aGp, a2f) : jA < 714 ? 2 + aQ.aR(100 * aGp, 4 * a2f) : jA < 1071 ? 2 + aQ.aR(100 * aGp, 10 * a2f) : jA < 2142 ? 2 + aQ.aR(100 *
			aGp, 30 * a2f) : 2 + aQ.aR(100 * aGp, 100 * a2f))
	}

	function aGq(a2f) {
		return cr.eh || 4284 <= bV.es() || aV.et.jy(a2f)
	}
	this.a4 = function() {
		aGm.fill(0), aGn = 15
	}, this.iQ = function(a6m) {
		var player = cr.gJ;
		return !!aV.et.a6x(player, a6m) && !(!aV.et.a6k(player, aV.et.a6p(player, gM.iC()), a6m) || (player = a6m, a6m = gx.mt[0], !aGq(player) && aGm[player] + aGr(player, a6m) > aGn))
	}, this.gE = function(a2f, aGp) {
		if (!aGq(a2f)) {
			aGp = aGr(a2f, aGp);
			if (aGm[a2f] + aGp > aGn) return !1;
			aGm[a2f] += aGp
		}
		return !0
	}, this.ar = function() {
		bV.es() % 100 == 99 && (bV.es() < 1071 ? aGn += 4 : bV.es() < 2142 ? aGn += 6 : bV.es() < 3213 ? aGn += 8 : aGn += 10)
	}
}

function a8j() {
	var pw, aFL, aFM, aFR;

	function aGs(a5) {
		d7.dF(8, d7.lA, new tt(21, {
			cY: a5,
			ai: 0,
			al: 10
		}))
	}
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), aFL.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, aFM = [new ir(L(295), function() {
		aGs(1)
	}, 0, 0, 1), new ir(L(296), function() {
		aGs(2)
	}, 0, 0, 1), new ir(L(297), function() {
		aGs(3)
	}, 0, 0, 1), new ir(L(298), function() {
		aGs(0)
	}, 0, 0, 1), new ir(L(299), function() {
		aGs(9)
	}, 0, 0, 1), new ir(L(300), function() {
		aGs(10)
	}, 0, 0, 1), new ir(L(301), function() {
		aGs(11)
	}, 0, 0, 1), new ir(L(302), function() {
		aGs(13)
	}, 0, 0, 1)], aFR = [new ir("⬅️ " + L(4), function() {
		d7.lO()
	})], pw = new lH(L(266), aFR), aFL = new aFT(aFM, pw.lK)
}

function aGt() {
	function aGv(key) {
		var a1L;
		return "undefined" == typeof URLSearchParams || (a1L = window.location.search, "string" != typeof(a1L = new URLSearchParams(a1L).get(key))) || a1L.length < 1 ? null : o.p.a7z(a1L, 5)
	}
	this.pI = function() {
		if (0 !== cT.id) return !1;
		if (! function() {
				var value = aGv("account");
				if (!value && !(value = aGv("a"))) return void a4R.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (a4R.clear(), d7.dF(8, d7.lA, new tt(1e3, {
					action: 0,
					aE: value,
					a4T: 0
				})), !0) : (a4R.clear(), !1)
			}()) {
			var value = aGv("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			d7.dF(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var oh = new URL(window.location.href);
		oh.search = "";
		try {
			return history.replaceState(null, "", oh.toString()), !0
		} catch (ej) {
			console.log("error 352: " + ej)
		}
		return !1
	}, this.a62 = function(key, value) {
		if (0 === cT.id) try {
			var oh = new URL(window.location.href),
				bB = oh.searchParams;
			bB.set(key, value), oh.search = bB.toString(), history.replaceState(null, "", oh.toString())
		} catch (ej) {
			console.log("error 358: " + ej)
		}
	}
}

function a8p() {
	var lE, lF, lG, lR;

	function lI() {
		lM(), 2 !== cr.data.aIncomeType && (cr.data.aIncomeData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		2 === cr.data.aIncomeType ? (aV.aW.lP(lG.lQ(), cr.data.aIncomeData, 255), aV.aW.max(cr.data.aIncomeData) || (cr.data.aIncomeType = 0)) : 1 !== cr.data.aIncomeType || cr.data.aIncomeValue || (cr.data.aIncomeType = 0)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(303), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(6), L(7), L(8)],
			value: cr.data.aIncomeType
		}, function(go) {
			lM(), 2 !== go || cr.data.aIncomeData || (cr.data.aIncomeData = new Uint8Array(cr.fc)), cr.data.aIncomeType = go, d7.dF(22)
		})), lR.push(lV)
	}(lR = []), function(lR) {
		var lV;
		1 === cr.data.aIncomeType && ((lV = new lW).lX("Value"), lV.lb(new lc({
			go: -1,
			value: cr.data.aIncomeValue
		}, 1, 0, function(ej) {
			var value = aQ.ld(Math.floor(ej.target.value), 0, 255);
			ej.target.value = cr.data.aIncomeValue = value
		})), lR.push(lV))
	}(lR), function(lR) {
		var lV;
		2 === cr.data.aIncomeType && ((lV = new lW).lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.aIncomeData, 4)), lV.lb(lG), lR.push(lV))
	}(lR), lR))
}

function aGx() {
	var jA = aV.color;
	this.pi = jA.aGy(0, 0, 0), this.aFd = jA.aGz(0, 0, 0, .7), this.a2T = jA.aGz(0, 0, 0, .5), this.da = jA.aGz(0, 0, 0, .85), this.f6 = jA.aGz(0, 0, 0, .75), this.vj = jA.aGz(0, 0, 0, .6), this.aH0 = jA.aGz(0, 0, 0, .35), this.dc = jA.aGy(255, 255,
			255), this.ql = jA.aGz(255, 255, 255, .3), this.uc = jA.aGz(255, 255, 255, .6), this.uZ = jA.aGz(255, 255, 255, .4), this.ul = jA.aGz(255, 255, 255, .25), this.aH1 = jA.aGz(255, 255, 255, .85), this.aH2 = jA.aGz(255, 255, 255, .75), this
		.aH3 = jA.aGz(255, 255, 255, .15), this.aH4 = jA.aGz(255, 255, 255, .11), this.aH5 = jA.aGy(128, 128, 128), this.aH6 = jA.aGz(64, 64, 64, .75), this.aH7 = jA.aGz(88, 88, 88, .83), this.jB = jA.aGz(60, 60, 60, .85), this.tn = jA.aGz(80, 60,
			60, .85), this.a9j = jA.aGy(170, 170, 170), this.a9k = jA.aGy(200, 235, 245), this.aH8 = jA.aGy(30, 255, 30), this.aH9 = jA.aGy(0, 200, 0), this.zm = jA.aGy(128, 255, 128), this.aHA = jA.aGz(10, 65, 10, .75), this.m7 = jA.aGz(0, 255, 0,
			.6), this.aHB = jA.aGz(0, 255, 0, .5), this.aHC = jA.aGz(0, 200, 0, .5), this.vI = jA.aGz(0, 100, 0, .75), this.aHD = jA.aGz(0, 60, 0, .8), this.db = jA.aGz(0, 255, 0, .3), this.vi = jA.aGz(0, 180, 0, .6), this.aHE = jA.aGz(0, 120, 0,
			.85), this.a5S = jA.aGy(0, 120, 0), this.tk = jA.aGz(0, 70, 0, .85), this.aHF = jA.aGy(190, 230, 190), this.a9n = jA.aGy(0, 255, 0), this.aHG = jA.aGy(255, 120, 120), this.oA = jA.aGy(255, 160, 160), this.he = jA.aGy(255, 70, 70), this
		.aHH = jA.aGy(230, 0, 0), this.ub = jA.aGz(220, 0, 0, .6), this.aHI = jA.aGz(255, 100, 100, .8), this.aHJ = jA.aGz(100, 0, 0, .85), this.a5R = jA.aGz(60, 0, 0, .85), this.aHK = jA.aGz(200, 0, 0, .6), this.om = jA.aGz(120, 0, 0, .85), this
		.aHL = jA.aGy(255, 70, 10), this.a9u = jA.aGy(230, 190, 190), this.a9l = jA.aGy(255, 0, 0), this.a9m = jA.aGy(255, 0, 255), this.aHM = jA.aGz(60, 0, 60, .85), this.tl = jA.aGz(0, 60, 60, .85), this.aHN = jA.aGz(10, 60, 60, .9), this.aHO = jA
		.aGz(0, 96, 96, .75), this.a9o = jA.aGy(0, 255, 255), this.aHP = jA.aGy(160, 160, 255), this.qi = jA.aGz(0, 40, 90, .75), this.aHQ = jA.aGz(0, 0, 255, .6), this.aHR = jA.aGy(200, 200, 255), this.aHS = jA.aGz(50, 50, 255, .83), this.qh = jA
		.aGz(20, 90, 150, .75), this.aHT = jA.aGz(10, 10, 120, .75), this.mB = jA.aGy(255, 120, 100), this.aHU = jA.aGz(255, 255, 0, .5), this.qk = jA.aGz(255, 255, 150, .2), this.j1 = jA.aGy(255, 255, 0), this.aHV = jA.aGy(255, 255, 200), this.aHW =
		jA.aGz(200, 200, 0, .6), this.aHX = jA.aGz(140, 120, 0, .75), this.aHY = jA.aGz(180, 160, 40, .75), this.tm = jA.aGz(70, 50, 20, .85), this.aHZ = jA.aGz(30, 30, 0, .85), this.aHa = jA.aGz(60, 60, 0, .85), this.aAL = jA.aGy(255, 255, 100),
		this.a9q = jA.aGy(255, 255, 140), this.aHb = jA.aGz(255, 140, 0, .75), this.aHc = jA.aGz(70, 40, 0, .85), this.a9p = jA.aGy(255, 150, 0), this.pj = jA.aGz(255, 200, 80, .85), this.aHd = jA.aGz(0, 0, 0, 0), this.aGb = jA.aGz(255, 255, 255, 0),
		this.aHe = jA.aGz(254, 254, 254, 0)
}

function aHf() {
	var aHg;

	function aHt(gj, wY, aJ, aK, globalAlpha) {
		aS.bR.save(), aS.bR.globalAlpha = globalAlpha, aS.bR.imageSmoothingEnabled = !1, aS.bR.scale(wY, wY), aS.bR.drawImage(gj, Math.floor(aJ * (aS.aT / wY - gj.width)), Math.floor(aK * (aS.aU / wY - gj.height))), aS.bR.restore()
	}
	this.aHh = 0, this.aHi = 0, this.aHj = 0, this.aEs = 0, this.a4 = function() {
		(aHg = new Array(aS.wF))[0] = {
			aZ: [0, 5e3, 8e3, 1e4],
			jn: [220, 250, 255, 220],
			mX: [190, 220, 0, 0],
			av: [170, 200, 0, 0]
		}, aHg[1] = {
			aZ: [0, 4e3, 5e3, 6e3, 1e4],
			jn: [25, 0, 100, 0, 25],
			mX: [25, 0, 0, 0, 25],
			av: [25, 0, 0, 0, 25]
		}, aHg[2] = {
			aZ: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			jn: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			mX: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			av: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHg[3] = {
			aZ: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			jn: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			mX: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			av: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHg[4] = {
			aZ: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			jn: [10, 10, 20, 10, 10, 170, 212],
			mX: [20, 20, 60, 100, 100, 110, 170],
			av: [70, 70, 160, 30, 30, 60, 120]
		}, aHg[5] = {
			aZ: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			jn: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			mX: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			av: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHg[6] = {
			aZ: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			jn: [10, 10, 60, 255, 255, 200, 200],
			mX: [10, 10, 60, 255, 255, 200, 200],
			av: [80, 80, 255, 255, 255, 200, 200]
		}, aHg[7] = {
			aZ: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			jn: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			mX: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			av: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHg[8] = {
			aZ: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			jn: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			mX: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			av: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHg[9] = {
			aZ: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			jn: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			mX: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			av: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHg[20] = {
			aZ: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			jn: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			mX: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			av: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHg[21] = {
			aZ: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			jn: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			mX: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			av: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aEz = function() {
		var aHs, a5, a6, z5, gr = function() {
				var gr;
				return aS.bX = document.createElement("canvas"), aS.bX.width = aS.aT, aS.bX.height = aS.aU, aS.bR = aS.bX.getContext("2d", {
					alpha: !1
				}), gr = aS.bR.getImageData(0, 0, aS.aT, aS.aU), aS.bY = gr.data, gr
			}(),
			aZ = aHg[aS.bL].aZ,
			jn = aHg[aS.bL].jn,
			mX = aHg[aS.bL].mX,
			av = aHg[aS.bL].av,
			kv = jW.je(),
			u = aZ.length - 2,
			aHn = new Array(1 + u),
			aHo = new Array(1 + u),
			aHp = new Array(1 + u),
			aHq = new Array(1 + u);
		for (a6 = u; 0 <= a6; a6--) aHn[a6] = aZ[a6 + 1] - aZ[a6], aHo[a6] = jn[a6 + 1] - jn[a6], aHp[a6] = mX[a6 + 1] - mX[a6], aHq[a6] = av[a6 + 1] - av[a6];
		for (a5 = aS.aT * aS.aU - 1; 0 <= a5; a5--)
			for (a6 = u; 0 <= a6; a6--)
				if (kv[a5] >= aZ[a6]) {
					z5 = kv[a5] - aZ[a6], aS.bY[4 * a5] = jn[a6] + aGL(aHo[a6] * z5, aHn[a6]), aS.bY[4 * a5 + 1] = mX[a6] + aGL(aHp[a6] * z5, aHn[a6]), aS.bY[4 * a5 + 2] = av[a6] + aGL(aHq[a6] * z5, aHn[a6]), aS.bY[4 * a5 + 3] = 255;
					break
				} aS.bR.putImageData(gr, 0, 0), aS.aF5(aS.bL) && l5.l6() && aS.aF5(aS.bL) && (gr = l5.t9("arena"), aHs = l5.t9("territorial.io"), aHt(gr, 5, .5, .5, .1), aHt(aHs, 2, .5, .45, .1)), aS.bT = !0, bV.bW = !0
	}, this.a1u = function() {
		for (var bB, aJ, aK, aHu, ig, z7, aHi = 0, aZ = aS.aT, b6 = aS.aU, z5 = aZ * b6 * 4, aHv = a3N, aHw = aS.bY, a5 = aZ - 1; 0 <= a5; a5--) aHv[(bB = a5 << 2) + 2] = aHv[z5 - bB - 2] = 3;
		for (z5 = 4 * aZ, a5 = b6 - 1; 0 <= a5; a5--) aHv[(bB = a5 * z5) + 2] = aHv[bB + z5 - 2] = 3;
		for (aHu = aZ - 1, ig = b6 - 1, aK = 1; aK < ig; aK++)
			for (z5 = aK * aZ, aJ = 1; aJ < aHu; aJ++) z7 = 1 - (aHw[(bB = z5 + aJ << 2) + 2] > aHw[bB + 1] && aHw[bB + 2] > aHw[bB]), aHv[bB + 2] = 6 - 5 * z7, aHi += z7;
		this.aHh = (aZ - 2) * (b6 - 2), this.aEs = 0, aS.a3k(aS.bL) && (aS.aEs.aHx(), aS.aEs.aHy(4, 5)), this.aHi = cr.lv = aHi - this.aEs, this.aHj = this.aHh - this.aHi - this.aEs, this.aHj && (aS.aEs.aHy(6, 2), aS.aEs.aHz())
	}
}

function aIA(m6) {
	eG && !m6 || (w0(), aQ = new aIC, l0 = new aID, aV = new su, dZ = new aGx, cr = new a1T, a8 = new rR, w = new aDz, o = new aIE, kj = new aIF, oQ = new a3C, a22 = new ke, gQ = new a0a, gF = new aBO, a1x = new aIG, aI0 = new aIH, gZ = new aII, dG =
		new aIJ, ew = new aIK, rf = new aAY, hp = new aIL, a21 = new aIM, gM = new aIN, dM = new aIO, u5 = new uB, m1 = new aA8, kZ = new q7, gO = new lj, gT = new aIP, a2J = new aIQ, eC = new aIR, eW = new a2I, l5 = new t4, fK = new aIS, aBN =
		new pH, f8 = new aBJ, a1m = new aGl, i7 = new aIT, iH = new aIU, m9 = new aIV, aI1 = new a6I, fm = new wa, f4 = new fs, a1n = new a3O, ph = new fS, fo = new aIW, a1t = new aHf, jW = new aIX, a0y = new aIY, f = new a92, fj = new aIZ, fN =
		new aIa, a1v = new aIb, aI2 = new aIc, gS = new po, cy = new aId, iZ = new aIe, aCg = new aIf, iJ = new ye, aI3 = new aEO, aI4 = new aDU, a24 = new aIg, a25 = new ao, a75 = new a71, a26 = new aIh, a27 = new aIi, i2 = new aIj, tq =
		new aIk, ka = new cj, c = new aIl, a3 = new aIm, bG = new aEB, a4R = new aGt, jC = new aIn, aj = new aIo, am = new bu, gx = new aIp, gX = new aIq, aI5 = new aIr, kQ = new pz, aS = new aEr, aI6 = new hh, d7 = new a8Z, tX = new vw, cT =
		new aIs, eG = new aIt, pW = new aIu, r = new ma, fF = new a82, dA = new aEV, a15 = new aIv, gb = new aIw, a1w = new aIx, aI7 = new vN, gK = new aIy, re = new aIz, bV = new wK, d0 = new cR, cz = new aJ0, ec = new v2, aI8 = new aJ1, aI9 =
		new a2h, or = new a63, kF = new k5, a1l = new aJ2, i0 = new aJ3, iE = new aJ4, vK = new aJ5, eG.a4(), cT.a4(), cy.rd(), r.a4(), a8.a4(), a8.rc(), (aDA = new aD5).a4(), aV.a4(), a1w.a4(), f.a4(), w.a4(), o.a4(), aS.a4(), d7.a4(), tT =
		new kt, cy.a4(), bV.a4(), cz.a4(), aI7.a4(), a2O = new aJ7, fj.a4(), m9.z0(), tX.a4(), a1t.a4(), eW.a4(), u5.a4(), a1n.a4(), jC.a4(), l5.a4(), bV.bW = !0, setTimeout(function() {
			aS.d(2, 14071)
		}, 0), d7.dF(5, 5), a4R.pI() || cT.cU.ok(), cy.aJ8(), eG.aJ9 = 1)
}

function cF() {
	function aJF(aJ, u, aK, aJA, uC, aDP, player) {
		if (!(aK < 1 || uC < aK))
			for (var a5 = 0; a5 <= u; a5++) {
				var gt = aj.aJO(aJ, aK);
				if (am.cI.aAy(gt) && !aV.aW.has(aJA, fK.yL(gt)) && fK.aCD(gt, player)) return gt >> 2;
				aJ += aDP
			}
		return -1
	}

	function aJJ(aK, u, aJ, aJA, aJD, aDP, player) {
		if (!(aJ < 1 || aJD < aJ)) {
			u = Math.max(u, 0);
			for (var a5 = 0; a5 <= u; a5++) {
				var gt = aj.aJO(aJ, aK);
				if (am.cI.aAy(gt) && !aV.aW.has(aJA, fK.yL(gt)) && fK.aCD(gt, player)) return gt >> 2;
				aK += aDP
			}
		}
		return -1
	}

	function aJN(a7s, aAp, yT) {
		return -1 !== aAp && (-1 === a7s || aj.aAv(aAp, yT) < aj.aAv(a7s, yT)) ? aAp : a7s
	}
	this.iN = function(player, yT) {
		if (am.cC.yd(player))
			for (var aBB = aj.yb(), aJA = [];;) {
				var a7p = function(yT, aBB, aJA, player) {
					for (var hq = aj.fQ(yT), hs = aj.fR(yT), aJD = aS.aT - 2, uC = aS.aU - 2, aJE = -1, ba = 0; ba < aBB; ba++) {
						var jr = Math.max(hq - ba, 1),
							js = Math.max(hs - ba, 1),
							jt = Math.min(hq + ba, aJD),
							jf = Math.min(hs + ba, uC),
							a7s = aJF(hq, jt - hq, hs - ba, aJA, uC, 1, player),
							aAp = aJF(hq - 1, hq - jr - 1, hs - ba, aJA, uC, -1, player),
							jt = aJF(hq, jt - hq, hs + ba, aJA, uC, 1, player),
							jr = aJF(hq - 1, hq - jr - 1, hs + ba, aJA, uC, -1, player),
							aJI = aJJ(hs, jf - hs - 1, hq - ba, aJA, aJD, 1, player),
							aJK = aJJ(hs - 1, hs - js - 2, hq - ba, aJA, aJD, -1, player),
							jf = aJJ(hs, jf - hs - 1, hq + ba, aJA, aJD, 1, player),
							js = aJJ(hs - 1, hs - js - 2, hq + ba, aJA, aJD, -1, player);
						if (aJE = aJN(aJE, a7s, yT), aJE = aJN(aJE, aAp, yT), aJE = aJN(aJE, jt, yT), aJE = aJN(aJE, jr, yT), aJE = aJN(aJE, aJI, yT), aJE = aJN(aJE, aJK, yT), aJE = aJN(aJE, jf, yT), 0 <= (aJE = aJN(aJE, js, yT)) && ba *
							ba >= aj.aAv(aJE, yT)) return aJE
					}
					return -1
				}(yT, aBB, aJA, player);
				if (-1 === a7p) break;
				var id = fK.yL(aj.i5(a7p));
				if (am.cI.yM(player, id)) return !! function(player, a7p, yT) {
					for (var ih = aj.aJP(a7p, yT), a5 = 0; a5 < 4; a5++) {
						var fM = aj.aJQ(a7p, ih);
						if (fK.aJR(aj.i5(fM), player)) return gx.iP[6] = ih, 1;
						ih = (ih + 1) % 4
					}
					return
				}(player, a7p, yT) && (gx.iP[7] = a7p, !0);
				aJA.push(id)
			}
		return !1
	}
}

function r9(data) {
	var pw, aJS;

	function aJg(u) {
		return u < 60 ? 1 === u ? u + " Second" : u + " Seconds" : u < 3600 ? 1 === (u = Math.floor(u / 60)) ? u + " Minute" : u + " Minutes" : u < 172800 ? 1 === (u = Math.floor(u / 3600)) ? u + " Hour" : u + " Hours" : (u = Math.floor(u /
			172800)) + " Days"
	}

	function aJU(aJi) {
		var u = data.data.length;
		if (u) {
			for (var ai, max = min = parseInt(data.data[0][0]), a5 = 1; a5 < u; a5++) var a9e = parseInt(data.data[a5][0]),
				min = Math.min(a9e, min),
				max = Math.max(a9e, max);
			ai = aJi < 0 ? min + aJi : max + 1, d7.dF(8, d7.rs().eL, new tt(21, {
				cY: data.cY,
				ai: ai,
				al: ai + Math.abs(aJi)
			}))
		}
	}
	if (this.show = function() {
			pw.show(), this.resize()
		}, this.eQ = function() {
			pw.eQ()
		}, this.resize = function() {
			pw.resize(), aJS.resize()
		}, this.lh = function(jA) {
			2 === jA && pw.li[0].iy()
		}, data.rA) {
		pw = new lH(L(10), [new ir("⬅️ " + L(4), function() {
			d7.lO()
		})]);
		var ba = {
				aJY: [],
				aJW: [L(317), L(318), L(319) + " ↗"],
				aJZ: [12, 50, 38]
			},
			z2 = cr.data.z2;
		if (z2) {
			for (var u = z2.length, aJY = ba.aJY, f5 = f4.f5, a5 = 0; a5 < u; a5++) aJY.push([{
				kv: a5 + 1 + ".",
				kG: 0
			}, {
				kv: f5[a5],
				kG: 0
			}, {
				kv: w.p.hg(z2[a5], 5),
				kG: 1,
				aE: z2[a5],
				a4T: 0
			}]);
			aJS = new aJa(pw.lK, ba, {
				aJb: 1
			})
		} else aJS = new aJa(pw.lK, ba)
	} else {
		var ba = data.data.length ? 0 : 1,
			pv = [new ir("⬅️ " + L(4), function() {
				d7.lO()
			}), new ir(L(304), function() {
				aJU(-10)
			}, ba, 0, 1), new ir(L(305), function() {
				aJU(10)
			}, ba, 0, 1), new ir(L(306), function() {
				d7.dF(11, 10, new aJV({
					cY: data.cY
				}))
			})],
			aJW = [L(307), L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(300), L(301), "Audit Log", L(302)];
		pw = new lH(aJW[data.cY], pv), ! function() {
			var a5, ba = {
					aJY: []
				},
				aJY = ba.aJY,
				aJc = data.data,
				u = aJc.length;
			u && 0 === aJc[0][0] && 0 <= (go = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.cY]) && (d7.i.a2W[go] = aJc[0][1]);
			var ku = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.cY],
				a7Q = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.cY],
				go = [
					[L(320), L(321) + " ↗", L(322)],
					[L(320), L(323), L(324), L(325) + " ↗"],
					[L(320), L(321) + " ↗", L(324)],
					[L(320), L(321) + " ↗", L(324)],
					[L(317), L(326), L(327) + " ↗", L(328) + " ↗", L(14)],
					[L(317), L(326), L(329) + " ↗", L(330) + " ↗", L(331)],
					[L(317), L(326), L(332) + " ↗", L(333) + " ↗", L(334)],
					[L(317), L(326), L(329) + " ↗", L(330) + " ↗", L(335)],
					[L(317), L(326), L(327) + " ↗", L(328) + " ↗", L(14)],
					[L(320), L(321) + " ↗", L(324)],
					[L(320), L(321) + " ↗", L(336)],
					[L(320), L(321) + " ↗", L(324)],
					[L(317), L(326), L(327) + " ↗", L(328) + " ↗", L(337)],
					[L(320), L(321) + " ↗", L(324)]
				];
			if (ba.aJW = go[data.cY], ba.aJZ = [
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
				][data.cY], 0 === data.cY || 2 === data.cY || 3 === data.cY || 9 === data.cY || 10 === data.cY || 11 === data.cY || 13 === data.cY)
				for (a5 = 0; a5 < u; a5++) aJY.push([{
					kv: aJc[a5][0] + 1 + ".",
					kG: 0
				}, {
					kv: aJc[a5][1],
					kG: 1,
					aE: aJc[a5][4],
					a4T: aJc[a5][3]
				}, {
					kv: (ku * aJc[a5][2]).toFixed(a7Q),
					kG: 0
				}]);
			else if (12 === data.cY)
				for (a5 = 0; a5 < u; a5++) {
					var aJf = aJc[a5][3];
					aJY.push([{
						kv: "" + aJc[a5][0],
						kG: 0
					}, {
						kv: aJg(aJc[a5][4]),
						kG: 0
					}, {
						kv: aJc[a5][5],
						kG: 1,
						aE: aJc[a5][1],
						a4T: 0
					}, {
						kv: aJc[a5][6],
						kG: 1,
						aE: aJc[a5][2],
						a4T: 0
					}, {
						kv: rg.nn(aJf, w.p.hg(aJc[a5][1], 5)),
						kG: 0
					}])
				} else if (1 === data.cY)
					for (a5 = 0; a5 < u; a5++) aJY.push([{
						kv: aJc[a5][0] + 1 + ".",
						kG: 0
					}, {
						kv: aJc[a5][1],
						kG: 0
					}, {
						kv: (ku * aJc[a5][2]).toFixed(a7Q),
						kG: 0
					}, {
						kv: aJc[a5][3],
						kG: 1,
						aE: aJc[a5][5],
						a4T: aJc[a5][4]
					}]);
				else if (4 === data.cY || 5 === data.cY || 6 === data.cY || 7 === data.cY || 8 === data.cY)
				for (a5 = 0; a5 < u; a5++) {
					var aJh = aJc[a5][5];
					4 === data.cY || 8 === data.cY ? "100%" === (aJh = (aJh % 64 * 100 / (aJh >> 6)).toFixed(0) + "%") && (4 === data.cY ? aJh += " (" + L(338) + ")" : aJh += " (" + L(339) + ")") : 5 === data.cY ? 32768 <= aJh && (aJh = -(aJh -
						32768)) : aJh = (ku * aJh).toFixed(a7Q), aJY.push([{
						kv: "" + aJc[a5][0],
						kG: 0
					}, {
						kv: aJg(aJc[a5][6]),
						kG: 0
					}, {
						kv: aJc[a5][7],
						kG: 1,
						aE: aJc[a5][1],
						a4T: aJc[a5][2]
					}, {
						kv: aJc[a5][8],
						kG: 1,
						aE: aJc[a5][3],
						a4T: aJc[a5][4]
					}, {
						kv: "" + aJh,
						kG: 0
					}])
				}
			aJS = new aJa(pw.lK, ba)
		}()
	}
}

function aIS() {
	var aJj = [
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
		aJk = [
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
	this.aJl = null, this.aJm = null, this.aJn = null, this.aJo = null, this.aJp = null, this.aJq = null, this.aJr = null, this.aJs = null, this.aJt = null, this.aJu = null;

	function aK0(y7, r2) {
		for (var aJl = fK.aJl, aJm = fK.aJm, aJn = fK.aJn, a5 = y7; a5 < r2; a5++) aJl[a5] = aQ.aR(64 * fj.random(), fj.value(100)) << 2, aJm[a5] = aQ.aR(64 * fj.random(), fj.value(100)) << 2, aJn[a5] = aQ.aR(64 * fj.random(), fj.value(100)) << 2
	}

	function aJz(y7, r2) {
		for (var colorsData = cr.data.colorsData, aJl = fK.aJl, aJm = fK.aJm, aJn = fK.aJn, a5 = y7; a5 < r2; a5++) {
			var kv = colorsData[a5];
			aJl[a5] = 4 * (kv >> 12), aJm[a5] = 4 * (kv >> 6 & 63), aJn[a5] = 4 * (63 & kv)
		}
	}

	function aKG(gt, aKI) {
		a3N[gt] = 0, a3N[gt + 1] = 0, a3N[gt + 2] = aKI, a3N[gt + 3] = 0, aKJ(gt)
	}

	function aKJ(gt) {
		var aJ;
		gb.a1E || (aJ = fK.a2E(gt), gt = fK.cv(gt), gb.a1E = aJ >= a15.aKL[0] && aJ <= a15.aKL[2] && gt >= a15.aKL[1] && gt <= a15.aKL[3])
	}
	this.ie = new Int32Array(4), this.aJy = new Int32Array(8), this.rd = function() {
		var ie = this.ie,
			ie = (ie[0] = -4 * aS.aT, ie[1] = 4, ie[2] = -ie[0], ie[3] = -ie[1], this.aJy);
		ie[0] = -4 * aS.aT - 4, ie[1] = -4 * aS.aT, ie[2] = -4 * aS.aT + 4, ie[3] = -4, ie[4] = 4, ie[5] = 4 * aS.aT - 4, ie[6] = 4 * aS.aT, ie[7] = 4 * aS.aT + 4
	}, this.a4 = function() {
		if (this.aJl ? (this.aJl.fill(0), this.aJm.fill(0), this.aJn.fill(0), this.aJo.fill(0), this.aJp.fill(0), this.aJq.fill(0), this.aJr.fill(0), this.aJs.fill(0), this.aJt.fill(0), this.aJu.fill(0), this.jS.fill(0)) : (this.aJl =
				new Uint8Array(cr.fc), this.aJm = new Uint8Array(cr.fc), this.aJn = new Uint8Array(cr.fc), this.aJo = new Uint8Array(cr.fc), this.aJp = new Uint8Array(cr.fc), this.aJq = new Uint8Array(cr.fc), this.aJr = new Uint8Array(cr.fc),
				this.aJs = new Uint8Array(cr.fc), this.aJt = new Uint8Array(cr.fc), this.aJu = new Uint8Array(cr.fc), this.jS = new Uint8Array(cr.fc)), cr.f0)
			for (var gl = fF.gl, aJl = fK.aJl, aJm = fK.aJm, aJn = fK.aJn, a5 = cr.fc - 1; 0 <= a5; a5--) {
				var jA = gl[a5],
					bA = aQ.aR((aJk[jA][3] + 1) * fj.random(), fj.value(100));
				aJl[a5] = aJj[jA][0] + bA * aJk[jA][0], aJm[a5] = aJj[jA][1] + bA * aJk[jA][1], aJn[a5] = aJj[jA][2] + bA * aJk[jA][2]
			} else 0 === cr.data.colorsType ? cr.data.selectableColor ? (aJz(0, cr.fb), aK0(cr.fb, cr.fc)) : aK0(0, cr.fc) : aJz(0, cr.fc);
		! function() {
			var a5, ba, aJl = fK.aJl,
				aJm = fK.aJm,
				aJn = fK.aJn;
			for (a5 = cr.fc - 1; 0 <= a5; a5--) ba = aQ.aR(aJl[a5] + aJm[a5] + aJn[a5], 3), aJl[a5] += aGL(ba - aJl[a5], 2), aJm[a5] += aGL(ba - aJm[a5], 2), aJn[a5] += aGL(ba - aJn[a5], 2), aJl[a5] -= aJl[a5] % 4, aJm[a5] -= aJm[a5] % 4, aJn[
				a5] -= aJn[a5] % 4
		}(),
		function() {
			for (var u = cr.fc, aJl = fK.aJl, aJm = fK.aJm, aJn = fK.aJn, aJo = fK.aJo, a5 = 0; a5 < u; a5++) aJl[a5] += a5 >> 7, aJm[a5] += a5 >> 5 & 3, aJn[a5] += a5 >> 3 & 3, aJo[a5] = 7 & a5
		}(), this.aK3(),
			function() {
				for (var u = cr.fc, aJp = fK.aJp, aJq = fK.aJq, aJr = fK.aJr, aJl = fK.aJl, aJm = fK.aJm, aJn = fK.aJn, a5 = 0; a5 < u; a5++) {
					var jn = aJl[a5],
						mX = aJm[a5],
						av = aJn[a5];
					60 <= jn + mX + av ? (aJp[a5] = Math.max(jn - 40, 3 & jn), aJq[a5] = Math.max(mX - 40, 3 & mX), aJr[a5] = Math.max(av - 40, 3 & av)) : (aJp[a5] = jn + 40, aJq[a5] = mX + 40, aJr[a5] = av + 40)
				}
			}(),
			function() {
				for (var u = cr.fc, aJs = fK.aJs, aJt = fK.aJt, aJu = fK.aJu, aJl = fK.aJl, aJm = fK.aJm, aJn = fK.aJn, a5 = 0; a5 < u; a5++) {
					var jn = aJl[a5],
						mX = aJm[a5],
						av = aJn[a5];
					688 <= jn + mX + av ? (aJs[a5] = jn - 88, aJt[a5] = mX - 88, aJu[a5] = av - 88) : (aJs[a5] = Math.min(jn + 88, 252 + (3 & jn)), aJt[a5] = Math.min(mX + 88, 252 + (3 & mX)), aJu[a5] = Math.min(av + 88, 252 + (3 & av)))
				}
			}()
	}, this.gw = function(player) {
		var au = gx.gy;
		return au[0] = this.aJl[player], au[1] = this.aJm[player], au[2] = this.aJn[player], au
	}, this.aK3 = function() {
		for (var a5 = cr.fc - 1; 0 <= a5; a5--) this.jS[a5] = this.aJl[a5] + this.aJm[a5] + this.aJn[a5] < 280 ? 0 : 1
	}, this.a2E = function(gt) {
		return aQ.aR(gt, 4) % aS.aT
	}, this.cv = function(gt) {
		return aQ.aR(gt, 4 * aS.aT)
	}, this.aC0 = function(aJ, aK) {
		return Math.floor(4 * (aK * aS.aT + aJ))
	}, this.aCE = function(gt) {
		var ie = this.ie;
		return this.aK6(gt + ie[0]) || this.aK6(gt + ie[1]) || this.aK6(gt + ie[2]) || this.aK6(gt + ie[3])
	}, this.aK7 = function(gt) {
		var ie = this.ie;
		return this.i6(gt + ie[0]) || this.i6(gt + ie[1]) || this.i6(gt + ie[2]) || this.i6(gt + ie[3])
	}, this.aCD = function(gt, player) {
		var ie = this.ie;
		return this.aJR(gt + ie[0], player) || this.aJR(gt + ie[1], player) || this.aJR(gt + ie[2], player) || this.aJR(gt + ie[3], player)
	}, this.aK8 = function(a5, aK9, aKA, aKB) {
		this.aJl[a5] = aK9 >> 16, this.aJm[a5] = aK9 >> 8 & 255, this.aJn[a5] = 255 & aK9, this.aJp[a5] = aKA >> 16, this.aJq[a5] = aKA >> 8 & 255, this.aJr[a5] = 255 & aKA, this.aJs[a5] = aKB >> 16, this.aJt[a5] = aKB >> 8 & 255, this.aJu[a5] =
			255 & aKB
	}, this.aKC = function(a5) {
		return [(this.aJl[a5] << 16) + (this.aJm[a5] << 8) + this.aJn[a5], (this.aJp[a5] << 16) + (this.aJq[a5] << 8) + this.aJr[a5], (this.aJs[a5] << 16) + (this.aJt[a5] << 8) + this.aJu[a5]]
	}, this.ii = function(gt) {
		return 208 <= a3N[gt + 3]
	}, this.pm = function(player, gt) {
		return this.ii(gt) && this.oJ(player, gt)
	}, this.oJ = function(player, gt) {
		return player === this.iA(gt)
	}, this.aKD = function(gt) {
		return 208 <= a3N[gt + 3] && a3N[gt + 3] < 224
	}, this.aC1 = function(gt) {
		return 224 <= a3N[gt + 3] && a3N[gt + 3] < 248
	}, this.aKE = function(gt) {
		return 248 <= a3N[gt + 3]
	}, this.ji = function(gt) {
		for (var ie = this.ie, a5 = 3; 0 <= a5; a5--)
			if (this.jg(gt + ie[a5])) return !0;
		return !1
	}, this.o9 = function(gt) {
		return this.ii(gt) || this.fL(gt)
	}, this.jg = function(gt) {
		return 0 === a3N[gt + 3] && 2 === a3N[gt + 2]
	}, this.fL = function(gt) {
		return 0 === a3N[gt + 3] && 1 === a3N[gt + 2]
	}, this.bl = function(gt) {
		return 0 === a3N[gt + 3] && 3 === a3N[gt + 2]
	}, this.i6 = function(gt) {
		return 0 === a3N[gt + 3] && 5 === a3N[gt + 2]
	}, this.aK6 = function(gt) {
		return 0 === a3N[gt + 3] && 3 <= a3N[gt + 2]
	}, this.yL = function(gt) {
		return (a3N[gt] >> 1 << 8) + a3N[gt + 1]
	}, this.aKF = function(gt) {
		return 1 & a3N[gt]
	}, this.aJR = function(gt, player) {
		return this.fL(gt) || this.ii(gt) && player !== this.iA(gt)
	}, this.iA = function(gt) {
		return ((3 & a3N[gt]) << 7) + ((3 & a3N[gt + 1]) << 5) + ((3 & a3N[gt + 2]) << 3) + (7 & a3N[gt + 3])
	}, this.pn = function(gt) {
		aKG(gt, 1)
	}, this.aKH = function(gt) {
		aKG(gt, 2)
	}, this.aC2 = function(gt, player) {
		a3N[gt] = this.aJl[player], a3N[gt + 1] = this.aJm[player], a3N[gt + 2] = this.aJn[player], a3N[gt + 3] = 208 + this.aJo[player], aKJ(gt)
	}, this.a4E = function(gt, player) {
		a3N[gt] = this.aJp[player], a3N[gt + 1] = this.aJq[player], a3N[gt + 2] = this.aJr[player], a3N[gt + 3] = 224 + this.aJo[player], aKJ(gt)
	}, this.aKK = function(gt, player) {
		a3N[gt] = this.aJs[player], a3N[gt + 1] = this.aJt[player], a3N[gt + 2] = this.aJu[player], a3N[gt + 3] = 248 + this.aJo[player], aKJ(gt)
	}
}

function aIn() {
	var aKM, aKN, aKO = -15e3,
		aKP = !1;

	function dB(ej) {
		aKg() || (aKP = !0, aKh(ej, 1), f.i.eV(f.i.dv), aKi(Math.floor(cy.ny * ej.clientX), Math.floor(cy.ny * ej.clientY)))
	}

	function aKV(ej) {
		aKO = bV.aw, aKh(ej, 1), f.i.eV(f.i.dv), 0 < ej.touches.length && (aKM = Math.floor(cy.ny * ej.touches[0].clientX), aKN = Math.floor(cy.ny * ej.touches[0].clientY), aI2.aKV(ej) || aKi(aKM, aKN))
	}

	function aKi(aJ, aK) {
		d7.dB(aJ, aK), 0 === cr.d6 ? eW.dB(aJ, aK) : ka.dL(aJ, aK) || re.dB(aJ, aK) || gT.dB(aJ, aK) || gZ.aKj(aJ, aK) || hp.dB(aJ, aK) || 0 <= dG.dB(aJ, aK) || iZ.dB(aJ, aK) || jC.aKk(aJ, aK) || gZ.aKl(aJ, aK)
	}

	function rB(ej) {
		aKg() || (aKP = !0, aKh(ej, 1), aKm(Math.floor(cy.ny * ej.clientX), Math.floor(cy.ny * ej.clientY)))
	}

	function aKW(ej) {
		aKO = bV.aw, aKh(ej, 1), 0 < ej.touches.length && (aKM = Math.floor(cy.ny * ej.touches[0].clientX), aKN = Math.floor(cy.ny * ej.touches[0].clientY), aI2.aKW(ej) || aKm(aKM, aKN))
	}

	function aKm(aJ, aK) {
		jC.jD() || (jC.hi = aJ, jC.hj = aK), d7.rB(aJ, aK), 0 === cr.d6 ? eW.rB(aJ, aK) : (aI6.hk(aJ, aK), re.rB(aJ, aK) || (dG.rB(aJ, aK), gZ.d8() ? gZ.rB(aJ, aK) : gM.ho ? gM.rB(aJ) && (bV.bW = !0) : (kZ.rB(aJ, aK), dM.a0v && dM.rB(aJ, aK) && (bV
			.bW = !0))))
	}

	function aKU(ej) {
		aKg() || (aKh(ej, 1), a8z(), 0 === cr.d6 ? (eW.click(-1024, -1024), u5.reset()) : (kZ.rE(-1024, -1024), dG.rB(-1024, -1024), gM.aKn(), dM.a0v = !1))
	}

	function aKT(ej) {
		aKg() || (aKh(ej, 1), aKo(Math.floor(cy.ny * ej.clientX), Math.floor(cy.ny * ej.clientY), 2 === ej.button), jC.aKS && (jC.aKS = !1, ej.preventDefault()))
	}

	function click(ej) {
		aKg() || aKh(ej, 1)
	}

	function aKX(ej) {
		aKO = bV.aw, aKh(ej, 1), ej && ej.touches && 0 < ej.touches.length && 0 !== cr.d6 ? dM.a0v = !1 : aI2.aKp() || (aKo(aKM, aKN, !1), jC.aKS && (jC.aKS = !1, ej.preventDefault()))
	}

	function aKY(ej) {
		aKO = bV.aw, aKh(ej, 1), aKo(aKM, aKN, !1), jC.aKS && (jC.aKS = !1, ej.preventDefault())
	}

	function aKZ(ej) {}

	function aKa(ej) {}

	function aKb(ej) {
		aKg() || aKh(ej, 0)
	}

	function aKo(aJ, aK, aKq) {
		a8z(), 0 === cr.d6 ? eW.click(aJ, aK) : (kZ.rE(aJ, aK), re.rE(), gM.aKn(), dM.a0v = !1, gZ.click(aJ, aK, aKq) ? bV.bW = !0 : dG.aKT(aJ, aK))
	}

	function a8z() {
		d7.a8z()
	}

	function rG(ej) {
		var aJ, aK, deltaY;
		aKg() || (aKh(ej, 1), f.i.eV(f.i.dv), aJ = Math.floor(cy.ny * ej.clientX), aK = Math.floor(cy.ny * ej.clientY), deltaY = ej.deltaY, 1 === ej.deltaMode && (deltaY *= 16), d7.rG(aJ, aK, deltaY), 0 === cr.d6 ? eW.rG(aJ, aK, deltaY) : kZ.rG(aJ,
			aK, deltaY) || (gM.aG5(aJ, aK) ? gM.rG(deltaY) && (bV.bW = !0) : dM.rG(aJ, aK, deltaY)))
	}

	function aKc(ej) {
		aKh(ej, 0)
	}

	function aKh(ej, id) {
		0 === id && d7.d8() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== eW.eX() && ej.preventDefault()
	}

	function aKd(ej) {
		if (__fx.keybindHandler(ej.key)) return;
		aKg() || 0 < cy.aFe || (ej = ej.code) && ej.length && (aDA.jA(ej, 18) ? a0y.aKs(3) : aDA.jA(ej, 22) ? a0y.aKs(0) : aDA.jA(ej, 20) ? a0y.aKs(1) : aDA.jA(ej, 24) ? a0y.aKs(2) : aDA.jA(ej, 10) ? gM.aKt(31 / 32) : aDA.jA(ej, 8) ? gM.aKt(32 /
			31) : aDA.jA(ej, 6) ? gM.aKt(7 / 8) : aDA.jA(ej, 4) ? gM.aKt(8 / 7) : aDA.jA(ej, 14) ? 0 !== cr.d6 && dM.rG(Math.floor(cy.aZ / 2), Math.floor(cy.b6 / 2), -200) : aDA.jA(ej, 16) ? 0 !== cr.d6 && dM.rG(Math.floor(cy.aZ / 2), Math.floor(
				cy.b6 / 2), 200) : aDA.jA(ej, 0) ? cr.d6 && aI6.hl(0) : aDA.jA(ej, 2) ? cr.d6 && aI6.hl(1) : aDA.jA(ej, 30) ? cr.d6 && aI6.hl(2) : aDA.jA(ej, 26) ? cr.d6 && aI6.iS() : aDA.jA(ej, 28) && cr.d6 && aI6.iY())
	}

	function aKe(ej) {
		if (!aKg() && !(0 < cy.aFe || bV.aw < 400)) {
			var code = ej.code;
			if (code && code.length && !("Enter" === code && d7.lh(1) || "Space" === code && d7.lh(0))) return or.v6 ? or.a0F.lh(code) ? void 0 : void("Escape" === code && jC.aKu()) : void(8 !== eW.eX() && eW.lh(ej) ? bV.bW = !0 : "Escape" === code ?
				jC.aKu() : aDA.jA(code, 18) ? a0y.aKv(3) : aDA.jA(code, 22) ? a0y.aKv(0) : aDA.jA(code, 20) ? a0y.aKv(1) : aDA.jA(code, 24) ? a0y.aKv(2) : aDA.jA(code, 12) ? ka.d4(!cr.d9) : "Space" === code && cr.d6 && (dG.dH && dG.dI(), cr
					.cs) && ka.dD(!1))
		}
	}

	function aKf() {
		"hidden" !== document.visibilityState && (bV.bW = !0)
	}

	function aKg() {
		return aKO + 15e3 > bV.aw
	}

	function resize() {
		cy.aKw()
	}
	this.aKQ = 0, this.aKR = "", this.aKS = !1, this.hi = 0, this.hj = 0, this.a4 = function() {
		zD.addEventListener("mousedown", dB, {
			passive: !1
		}), zD.addEventListener("mousemove", rB, {
			passive: !1
		}), zD.addEventListener("mouseup", aKT, {
			passive: !1
		}), zD.addEventListener("click", click, {
			passive: !1
		}), zD.addEventListener("mouseleave", aKU, {
			passive: !1
		}), zD.addEventListener("wheel", rG, {
			passive: !1
		}), zD.addEventListener("touchstart", aKV, {
			passive: !1
		}), zD.addEventListener("touchmove", aKW, {
			passive: !1
		}), zD.addEventListener("touchend", aKX, {
			passive: !1
		}), zD.addEventListener("touchcancel", aKY, {
			passive: !1
		}), zD.addEventListener("dragover", aKZ), zD.addEventListener("drop", aKa), zD.addEventListener("dblclick", aKb), document.addEventListener("contextmenu", aKc), document.addEventListener("keydown", aKd), document.addEventListener(
			"keyup", aKe), document.addEventListener("visibilitychange", aKf), window.addEventListener("resize", resize)
	}, this.aKk = function(aJ, aK) {
		return !!ka.dB(aJ, aK) || !!(kZ.dB(aJ, aK) || dM.dB(aJ, aK) || gM.dB(aJ, aK) || ew.dB(aJ, aK))
	}, this.r8 = aKg, this.jD = function() {
		return !aKP || 0 < aKO
	}, this.aKu = function() {
		if (!d7.d8()) return 8 === eW.eX() ? cr.d9 ? void ka.d4(!1) : re.d8 ? void re.dI() : void dG.dI() : void(7 !== eW.eX() && 6 === eW.eX() && eC.aKx());
		d7.lh(2)
	}
}

function a9D() {
	this.aCh = function() {
		for (var id = bG.bM(20), colors = new Array(11), a5 = 0; a5 < 11; a5++) colors[a5] = new Uint8Array([bG.bM(8), bG.bM(8), bG.bM(8)]);
		var a2 = o.aA.b8(8);
		tX.tZ.gE({
			id: id,
			colors: colors,
			a2: a2
		})
	}, this.aCs = function(l) {
		var sd = bG.bM(3),
			ba = bG.bM(5),
			ba = pW.aKy.aKz(ba, bG.bM(30), bG.bM(30), bG.bM(30));
		f.g.sc(l, ba, sd, 0)
	}, this.aCi = function(l) {
		this.aCs(l), r.md.pE(183, w.p.yw(w.p.yx(15))), 0 === l && 0 === r.buffer.data[105].value.length ? f.g.sh(0) : f.a4x.k(l), 4 === f.i.e3(l).aL0() ? 6 === eW.eX() && f.a94.aL1(l) : 5 !== f.i.e3(l).aL0() || 8 !== eW.eX() && 10 !== eW.eX() ||
			f.e5.aL2()
	}, this.aCk = function(l) {
		var id = bG.bM(6);
		1 === id ? (r.md.pE(160, bG.bM(30)), f.i.eU(l), u5.uN || f.g.sh(1), a8.ro(), 8 === d7.lA && d7.rs().aL3()) : 21 === id ? 8 === d7.lA && d7.rs().rt(17) : 22 === id && (r.md.pE(106, r.buffer.data[110].value), r.md.pE(110, ""), 8 === d7
			.lA) && d7.rs().rt(15)
	}, this.aCo = function() {
		var u = bG.bM(16),
			aL4 = bG.bM(16);
		if (bG.aDX(55 + 10 * u + 16 * aL4)) {
			for (var au = [], a5 = 0; a5 < u; a5++) au.push(o.x.a2d(bG.bM(10)));
			a8.rr(au)
		} else f.i.eb(0, 3270)
	}, this.aCt = function(l) {
		for (var sd = bG.bM(3), ba = bG.bM(5), sd = {
				sd: sd,
				jH: pW.aKy.aKz(ba, bG.bM(30), bG.bM(30), bG.bM(30))
			}, ba = bG.aDW(32), aL5 = [], a5 = 0; a5 < 17; a5++) aL5.push(new Uint8Array(bG.bM(16)));
		for (a5 = 0; a5 < 17; a5++)
			for (var au = aL5[a5], u = au.length, b4 = 0; b4 < u; b4++) au[b4] = bG.aDW(8);
		vK.show(aL5, ba, l, sd)
	}
}

function aIL() {
	var aL6, aL7, aL8, aAb, aL9, aLA = 0,
		aLB = 0;

	function aLD(a5) {
		var aLE = !0,
			uy = dZ.dc,
			aZ = (1 === aL6[a5].id ? aL6[a5].ck.fillStyle = dZ.aHS : aL6[a5].oK === cr.fc ? aL6[a5].ck.fillStyle = dZ.aH7 : (fK.gw(aL6[a5].oK), aL6[a5].ck.fillStyle = aV.color.aGz(gx.gy[0], gx.gy[1], gx.gy[2], .87), 400 < aV.aW.a9c(gx.gy, 0, 2) && (
				aLE = !1, uy = dZ.pi)), aL6[a5].canvas.width),
			de = (aL6[a5].ck.clearRect(0, 0, aZ, aAb), aL6[a5].ck.fillRect(0, 0, aZ, aAb), aL6[a5].ck.fillStyle = uy, ! function(ck, aZ, aAb) {
				ck.fillRect(0, 0, aZ, 1), ck.fillRect(0, aAb - 1, aZ, 1), ck.fillRect(0, 0, 1, aAb), ck.fillRect(aZ - 1, 0, 1, aAb)
			}(aL6[a5].ck, aZ, aAb), aL7 + 2 * aAb < aZ && (aL6[a5].ck.fillRect(aZ - aL7 - aAb, 0, 1, aAb), aL6[a5].ck.fillText(f4.f5[aL6[a5].oK], Math.floor((aZ - aL7) / 2), Math.floor(.57 * aAb))), 0 !== aL6[a5].id ? 0 : aAb);
		aL6[a5].ck.fillText(aV.hf.hg(aL6[a5].hF), Math.floor(aZ - aL7 / 2 - de), Math.floor(.57 * aAb)),
			function(a5, aZ, de, aLE) {
				aL6[a5].ck.fillStyle = aLE ? dZ.uc : dZ.vj;
				aLE = Math.floor(aL7 * aL6[a5].hF / aL6[a5].aLJ);
				aL6[a5].ck.fillRect(Math.floor(aZ - aL7 - de), aAb - aL9, aLE, aL9)
			}(a5, aZ, de, aLE), 0 === aL6[a5].id ? (aLH(a5, aZ, aLE, uy), function(a5, aZ, aLE) {
				aL6[a5].ck.strokeStyle = aLE ? dZ.zm : dZ.a5S, aL6[a5].ck.fillRect(aAb, 0, 1, aAb);
				aLE = aZ - aAb;
				aL6[a5].ck.beginPath(), aL6[a5].ck.moveTo(Math.floor(.3 * aAb + aLE), Math.floor(aAb / 2)), aL6[a5].ck.lineTo(Math.floor(aAb - .3 * aAb + 0 + aLE), Math.floor(aAb / 2)), aL6[a5].ck.stroke(), aL6[a5].ck.beginPath(), aL6[a5].ck
					.moveTo(Math.floor(aAb / 2 + aLE), Math.floor(.3 * aAb)), aL6[a5].ck.lineTo(Math.floor(aAb / 2 + aLE), Math.floor(aAb - .3 * aAb + 0)), aL6[a5].ck.stroke()
			}(a5, aZ, aLE)) : aLH(a5, 2 * aAb, aLE, uy)
	}

	function aLH(a5, aZ, aLE, uy) {
		aL6[a5].ck.strokeStyle = aL6[a5].aLK ? dZ.aH5 : aLE ? dZ.he : dZ.aHH, aL6[a5].ck.fillStyle = uy, aL6[a5].ck.fillRect(aZ - aAb, 0, 1, aAb), aL6[a5].ck.lineWidth = Math.max(Math.floor(aAb / 12), 3), aL6[a5].ck.lineCap = "round";
		aLE = .35;
		aZ = aAb + 1, aL6[a5].ck.beginPath(), aL6[a5].ck.moveTo(Math.floor(aZ - aLE * aAb + 0), Math.floor(aLE * aAb)), aL6[a5].ck.lineTo(Math.floor(aZ - aAb + aLE * aAb), Math.floor(aAb - aLE * aAb + 0)), aL6[a5].ck.stroke(), aL6[a5].ck.beginPath(),
			aL6[a5].ck.moveTo(Math.floor(aZ - aAb + aLE * aAb), Math.floor(aLE * aAb)), aL6[a5].ck.lineTo(Math.floor(aZ - aLE * aAb + 0), Math.floor(aAb - aLE * aAb + 0)), aL6[a5].ck.stroke()
	}

	function aLY(au, aLW) {
		for (var hF, a5 = aLW - 1; 0 <= a5; a5--) hF = iH.iV(cr.gJ, a5), au[a5].hF !== hF && (au[a5].hF = hF, au[a5].aLJ = Math.max(hF, au[a5].aLJ), au[a5].aAC = !0)
	}

	function aLc(au, aLa) {
		for (var ai = cr.gJ << 3, hO = am.i.hO, mo = am.i.mo, ms = am.i.ms, a5 = aLa - 1; 0 <= a5; a5--) {
			var aAz = ms[ai + a5],
				hF = hO[aAz];
			au[a5].hF !== hF ? (au[a5].hF = hF, au[a5].aLJ = Math.max(hF, au[a5].aLJ), au[a5].aAC = !0) : au[a5].aLK || mo[aAz] % 64 != 5 || (au[a5].aLK = !0, au[a5].aAC = !0)
		}
	}

	function aLC(a2l) {
		a2l.canvas = document.createElement("canvas"), aS.bR.font = aL8;
		var aZ = aL7;
		a2l.oK < cr.fc && 0 === a2l.id && (aZ += Math.floor(aS.bR.measureText(f4.f5[a2l.oK] + "000").width)), aZ += aAb, 0 === a2l.id && (aZ += aAb), a2l.canvas.width = aZ, a2l.canvas.height = aAb, a2l.ck = a2l.canvas.getContext("2d", {
			alpha: !0
		}), a2l.ck.font = aL8, aV.d1.textBaseline(a2l.ck, 1), aV.d1.textAlign(a2l.ck, 1)
	}

	function aLQ(a5) {
		return m1.m5() ? cy.aZ - aL6[a5].canvas.width - cz.gap : m1.aJ
	}

	function aLR(a5) {
		return Math.floor(2 * cz.gap + (m1.m5() ? gO.b6 + cz.gap : 0) + m1.b6 + a5 * (1.3 * aAb))
	}
	this.a4 = function() {
		aLA = aLB = 0, aL6 = [], this.resize()
	}, this.resize = function() {
		aL8 = ew.ly, aAb = ew.fontSize + 5, aAb = Math.floor(1.25 * aAb), cT.cU.cV() && (aAb = Math.floor(1.25 * aAb)), aL9 = Math.floor(.15 * aAb), aS.bR.font = aL8, aL7 = Math.floor(aS.bR.measureText("02 000 000 0000").width);
		for (var a5 = aL6.length - 1; 0 <= a5; a5--) aLC(aL6[a5]), aLD(a5)
	}, this.gW = function() {
		for (var a5 = aL6.length - 1; 0 <= a5; a5--) aL6[a5].aAC && (aL6[a5].aAC = !1, aLD(a5))
	}, this.dB = function(jp, jq) {
		if (2 !== cr.d6 && 0 !== f4.fv[cr.gJ] && !cr.cs && !aV.et.jy(cr.gJ))
			for (var aLL, aLM, aLN, aLO = cT.cU.cV() ? aAb : 0, aLP = cT.cU.cV() ? Math.floor(.15 * aAb) : 0, a5 = aL6.length - 1; 0 <= a5; a5--)
				if (aLL = aLQ(a5), aLM = aLR(a5), aLN = aL6[a5].canvas.width, aLM - aLP <= jq && jq <= aLM + aAb + aLP) {
					if (aLL - aLO <= jp && jp <= aLL + aAb + aLO) return aL6[a5].aLK || (aL6[a5].aAC = !0, aL6[a5].aLK = !0, 0 === aL6[a5].id ? i2.i3.aLS(aL6[a5].oK) : i2.i3.aLT(aL6[a5].oK)), !0;
					if (0 === aL6[a5].id && aLL + aLN - aAb - aLO <= jp && jp <= aLL + aLN + aLO) return a1w.aFX(3), i2.i3.iG(gM.iC(), aL6[a5].oK), !0
				} return !1
	}, this.ar = function() {
		var a3A, a3B, au, aLW;
		0 === f4.fv[cr.gJ] || aV.et.jy(cr.gJ) && !cr.cs || (a3A = aL6.slice(0, aLA), a3B = aL6.slice(aLA, aLA + aLB), au = a3A, aLW = iH.iI(cr.gJ), function(au, aLW) {
			if (aLA !== aLW) return 1;
			for (var a5 = aLW - 1; 0 <= a5; a5--)
				if (au[a5].oK !== iH.iX(cr.gJ, a5)) return 1;
			return
		}(au, aLW) ? aLY(au = function(au, aLW) {
			var a5, oK, av, hF, aLe = [];
			loop: for (a5 = 0; a5 < aLW; a5++) {
				for (oK = iH.iX(cr.gJ, a5), av = 0; av < au.length; av++)
					if (au[av].oK === oK) {
						aLe.push(au.splice(av, 1)[0]);
						continue loop
					} hF = iH.iV(cr.gJ, a5), aLC(hF = {
					oK: oK,
					hF: hF,
					aLJ: hF,
					id: 0,
					aAC: !0,
					aLK: !1,
					canvas: null,
					ck: null
				}), aLe.push(hF)
			}
			return aLe
		}(au, aLW), aLW) : aLY(au, aLW), a3A = au, a3B = function(au) {
			var aLa = am.i.mr[cr.gJ];
			return function(au, aLa) {
				if (aLB !== aLa) return 1;
				for (var ai = cr.gJ << 3, ks = am.i.ks, ms = am.i.ms, a5 = aLa - 1; 0 <= a5; a5--) {
					var aAz = ms[ai + a5];
					if (au[a5].oK !== ks[aAz]) return 1
				}
				return
			}(au, aLa) ? aLc(au = function(au, aLa) {
				var a5, oK, av, aLe = [],
					ai = cr.gJ << 3,
					ks = am.i.ks,
					hO = am.i.hO,
					ms = am.i.ms;
				loop: for (a5 = 0; a5 < aLa; a5++) {
					var aAz = ms[ai + a5];
					for (oK = ks[aAz], av = 0; av < au.length; av++)
						if (au[av].oK === oK) {
							aLe.push(au.splice(av, 1)[0]);
							continue loop
						} aAz = hO[aAz], aLC(aAz = {
						oK: oK,
						hF: aAz,
						aLJ: aAz,
						id: 1,
						aAC: !0,
						aLK: !1,
						canvas: null,
						ck: null
					}), aLe.push(aAz)
				}
				return aLe
			}(au, aLa), aLa) : aLc(au, aLa), au
		}(a3B), aLA = a3A.length, aLB = a3B.length, aL6 = a3A.concat(a3B))
	}, this.cQ = function() {
		if (0 !== f4.fv[cr.gJ] && (!aV.et.jy(cr.gJ) || cr.cs))
			for (var a5 = aL6.length - 1; 0 <= a5; a5--) dO.drawImage(aL6[a5].canvas, aLQ(a5), aLR(a5))
	}
}

function a6A() {
	function aLv(au, ai, al) {
		var aLw = au[ai];
		au[ai] = au[al], au[al] = aLw
	}
	this.oy = [
		[],
		[],
		[],
		[]
	], this.oz = [0, 0, 0, 0], this.a0O = [], this.aDV = function(aLf, aE, username, p5, qw, aA0, elo, color, a0, aLg, code) {
		username = this.a0P(aE, username, p5, qw, aA0, elo, color, a0, aLg, code);
		this.oy[aLf].push(username), or.a64 === aE && (or.a65 = username), or.a67.aLh(aE) && (username.p7 = 1), or.i.aLi += 29 === d7.lA && or.i.ow[0] === aLf && 1 === or.i.ow[2]
	}, this.a0P = function(aE, username, p5, qw, aA0, elo, color, a0, aLg, code) {
		return {
			aE: aE,
			username: code ? __fx.nameFilter.filter(username) : "Player " + w.p.hg(aE, 2),
			aLj: __fx.nameFilter.filter(username),
			p5: p5,
			qw: qw,
			aA0: aA0,
			elo: elo,
			color: color,
			a0: a0,
			aLg: aLg
		}
	}, this.aLk = function(go, aLf, p5, qw, aA0, elo, a0, color) {
		go = this.oy[aLf][go];
		go.p5 = p5, go.qw = qw, go.aA0 = aA0, go.elo = elo, go.a0 = a0, go.color = color, or.i.aLi += 29 === d7.lA && or.i.ow[0] === aLf && 1 === or.i.ow[2]
	}, this.aLl = function(go, aLf, code) {
		go = this.oy[aLf][go];
		1 === code && (go.username = go.aLj), or.i.aLi += 29 === d7.lA && or.i.ow[0] === aLf && 1 === or.i.ow[2]
	}, this.aLm = function(go, aLf, aLn) {
		var go = this.oy[aLf][go],
			aLo = go.username,
			a0V = "Redacted " + w.p.hg(go.aE, 2);
		go.username = aLn ? "[" + aV.hf.zr(aLo) + "] " + a0V : a0V, aLo.indexOf("Redacted") < 0 && (go.a0J = aLo), or.fp.a0X(go.aE), or.i.aLi += 29 === d7.lA && or.i.ow[0] === aLf && 1 === or.i.ow[2]
	}, this.aLp = function(go, aLq, aLr) {
		var player = this.oy[aLq][go];
		this.aLs(go, aLq), this.oy[aLr].push(player), or.i.aLi += 29 === d7.lA && or.i.ow[0] === aLr && 1 === or.i.ow[2]
	}, this.aLs = function(go, aLq) {
		var ox = this.oy[aLq];
		this.a0O.push(ox[go]), 1e3 < this.a0O.length && this.a0O.shift(), go >= this.oz[aLq] ? ox[go] = ox[ox.length - 1] : (this.oz[aLq]--, 2 === aLq ? (ox.splice(this.oz[aLq] + 1, 0, ox[ox.length - 1]), ox.splice(go, 1)) : (ox[go] = ox[this.oz[
			aLq]], ox[this.oz[aLq]] = ox[ox.length - 1])), ox.pop(), or.i.aLi += 29 === d7.lA && or.i.ow[0] === aLq && 1 === or.i.ow[2]
	}, this.aLt = function(go, a9v) {
		or.i.aLi += 29 === d7.lA && or.i.ow[0] === a9v && 1 === or.i.ow[2];
		var ox = this.oy[a9v],
			ev = ox[go];
		if (2 === a9v)
			if (go >= this.oz[a9v]) {
				or.a67.join(ev);
				for (var aLu = this.oz[a9v], elo = ev.elo; aLu && elo > ox[aLu - 1].elo;) aLu--;
				ox[go] = ox[this.oz[a9v]], ox.splice(this.oz[a9v]++, 1), ox.splice(aLu, 0, ev)
			} else ox.splice(this.oz[a9v]--, 0, ev), ox.splice(go, 1);
		else go >= this.oz[a9v] ? (or.a67.join(ev), aLv(ox, this.oz[a9v]++, go)) : aLv(ox, --this.oz[a9v], go)
	}, this.a0N = function(aE) {
		for (var oy = this.oy, u = oy.length, a5 = 0; a5 < u; a5++)
			for (var ox = oy[a5], bA = ox.length, a6 = 0; a6 < bA; a6++)
				if (aE === ox[a6].aE) return ox[a6];
		return null
	}
}

function aGL(a6, av) {
	return 0 <= a6 ? aQ.aR(a6, av) : -aQ.aR(-a6, av)
}

function aLx(kv) {
	return kv * kv
}

function uS(a6, av) {
	return av < a6 ? a6 : av
}

function aLy(a6, av) {
	return a6 < av ? a6 : av
}

function dP(a6, kv, av) {
	return kv < a6 ? a6 : av < kv ? av : kv
}

function aLz(kv, u) {
	for (var jA = aQ.aR(kv + 1, 2), a5 = 0; a5 < u; a5++) jA = aQ.aR(jA + aQ.aR(kv, jA), 2);
	return jA
}

function aM0(kv, u) {
	return kv < 1 ? 0 : aLz(kv, u)
}

function aM1(dg, dh, de, di, hb, hc, df, aM2) {
	return !(dg + de <= hb || dh + di <= hc || hb + df <= dg || hc + aM2 <= dh)
}

function aM3(dg, dh, de, di, hb, hc, df, aM2) {
	return dg <= hb && dh <= hc && hb + df <= dg + de && hc + aM2 <= dh + di
}

function bO(kv) {
	return Math.floor(!!kv * (1 + Math.log2(kv + .5)))
}

function a8v() {
	var aM4, aM5, aM8, aMB, aMC, aM6 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aM7 = new Array(4),
		aM9 = new Array(2),
		aMA = [L(340), L(299), L(341), L(342)];

	function a9O() {
		var a9Z;
		!or.v6 || (a9Z = aM4.aMK.tf.ej.value.trim().slice(0, 127)).length < 1 || (aM4.aMK.tf.ej.value = "", or.a66.kS(a9Z))
	}

	function aMG(aML) {
		or.i.ow[3] = 1 - or.i.ow[3], aMI(3, 1, or.i.ow[3]), aML && f.a94.a9a(4), or.i.ow[3] && r.md.pE(158, or.i.ow[0])
	}

	function aME(a6, av) {
		or.i.ow[a6] !== av && (0 === a6 && or.i.ow[3] && aMG(0), aMI(a6, or.i.ow[a6], 0), aMI(a6, av, 1), or.i.ow[a6] = av, 0 === a6 ? (f.a94.a9a(2, av), or.i.ow[2] ? (aM4.aMN.d3(), aM4.aMK.reset(1)) : aM4.aMK.reset(0), d7.rs().aMO(), d7.rs()
		.aMP()) : 2 === a6 && (0 === av ? (f.a94.a9a(0), aM4.aMK.d3(), aM4.aMQ()) : (f.a94.a9a(1), aM4.aMN.d3(), aM4.aMR())))
	}

	function aMI(a6, av, color) {
		aM4.aMS[a6].aFC[av].j2(color ? dZ.db : dZ.aGb)
	}

	function aMV(bL) {
		return aS.bJ.w4[bL]
	}

	function aMW(aMX) {
		return aMX < 7 ? "   " + (aMX + 2) + " Teams" : 10 === aMX ? "   No Full-Sending" : ""
	}

	function aMY(aMZ, aMo) {
		return aMo ? aMZ <= 90 && 60 < aMZ ? "   Contest" : "" : aMZ <= 60 ? "   Contest" : ""
	}
	this.sP = function() {
		return aM4.aMK
	}, this.a66 = function(aE) {
		aME(2, 0);
		var v = aM4.aMK.tf.ej.value,
			aE = "@" + aE + " ";
		v.length && !aV.hf.a7b(v, " ") && (aE = " " + aE), aM4.aMK.tf.ej.value = v += aE, aM4.aMK.tf.ej.focus()
	}, this.aMT = function() {
		aM4.aMN.d3()
	}, this.aMO = function() {
		var aMU = or.i.ow[0],
			aMU = or.i.aA1[aMU],
			av = (aS.d(aMU.bL, aMU.mapSeed), aM5.aFC),
			a3S = aMV(aMU.bL, aMU.mapSeed) + aMW(aMU.aMX) + aMY(aMU.aMZ),
			aMU = L(347) + "   " + aMV(aMU.aMa, aMU.aMb) + aMW(aMU.aMc) + aMY(aMU.aMZ, 1);
		av[0].button.textContent === a3S && av[1].button.textContent === aMU || (av[0].button.textContent = a3S, av[1].button.textContent = aMU, aM5.resize())
	}, this.aMP = function() {
		var aMU = or.i.ow[0],
			aGd = or.i.aA1[aMU];
		aM4.aMd(aGd.aMe);
		for (var kv, aAg, a5 = 0; a5 < or.ox.oy.length; a5++) aM6[0][a5].p2.textContent = or.ox.oy[a5].length, aM6[1][a5].p2.textContent = (kv = or.i.aA1[a5].aMZ, aAg = void 0, ((aAg = aQ.aR(kv, 60)) < 10 ? "0" : "") + aAg + ":" + ((kv %= 60) <
			10 ? "0" : "") + kv);
		var aGd = or.ox.oy[aMU],
			aMg = aGd.length,
			aMh = or.ox.oz[aMU];
		aM6[2][1].p2.textContent = "" + aMg, aM6[3][1].p2.textContent = "" + aMh;
		for (a5 = 0; a5 < 4; a5++) {
			var aMi = or.i.aA1[a5];
			aM7[a5] ? 0 === aMi.aMe && (aM7[a5].p2.textContent = aS.bJ.w4[aMi.bL]) : aM7[a5] = new aFD(aS.bJ.w4[aMi.bL], aMB.aFC[a5].button, 1, 1), aV.hf.startsWith(aMA[a5], "🏆 ") ? aMi.aMj || (aMA[a5] = aMA[a5].substring(3), aMB.aFC[a5].button
				.textContent = aMA[a5], aMB.aFC[a5].button.appendChild(aM6[1][a5].p2), aMB.aFC[a5].button.appendChild(aM6[0][a5].p2), aMB.aFC[a5].button.appendChild(aM7[a5].p2)) : aMi.aMj && (aMA[a5] = "🏆 " + aMA[a5], aMB.aFC[a5].button
				.textContent = aMA[a5], aMB.aFC[a5].button.appendChild(aM6[1][a5].p2), aMB.aFC[a5].button.appendChild(aM6[0][a5].p2), aMB.aFC[a5].button.appendChild(aM7[a5].p2))
		}
		var aMk = "",
			aMl = "";
		0 === aMU && (aMk = or.cI.a9w(aGd, 0, aMg), aMl = or.cI.a9w(aGd, 0, aMh)), aM8[0].p2.textContent = aMk, aM8[1].p2.textContent = aMl, aM9[1].p2.textContent = "MP: " + or.i.aMm[0] + "   SP: " + or.i.aMm[1] + "   Lobby: " + aV.aW.aMn(or.ox
			.oy)
	}, this.aMp = function() {
		aM4.aMK.d3()
	}, this.show = function() {
		or.i.aLi++, aM4.show(), this.resize(), or.message.show()
	}, this.eQ = function() {
		aM4.eQ(), or.a0F.eQ(), or.os.eQ(), or.message.eQ()
	}, this.resize = function() {
		aM4.resize(1 - or.i.ow[2]), or.message.resize()
	}, this.lh = function(jA) {
		2 === jA ? or.i.ow[3] ? aMG(1) : aM4.aMS[3].aFC[0].iy() : jA < 2 && aMG(1)
	}, aMB = new aMD([new ir(aMA[0], function() {
		return aME(0, 0), 2
	}), new ir(aMA[1], function() {
		return aME(0, 1), 2
	}), new ir(aMA[2], function() {
		return aME(0, 2), 2
	}), new ir(aMA[3], function() {
		return aME(0, 3), 2
	})], dZ.aGb), (aM5 = new aMD([new ir("", 0, 2), new ir("", 0, 2)], dZ.aHe, 1)).k2.translate = !1;
	var aMF = new aMD([new ir(L(343), function() {
		return aME(2, 0), 2
	}), new ir(L(10), function() {
		return aME(2, 1), 2
	})], dZ.aGb);
	aMC = new aMD([new ir(L(344, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			d7.vL(), or.kD(), f.i.ee(3240), __fx.customLobby.setActive(false), d7.dF(5, 5)
		}),
		function() {
			d7.vL(), or.kD(), f.i.ee(3240), __fx.customLobby.setActive(false), d7.dF(5, 5)
		})), new ir(L(345), function() {
		return aMG(1), 2
	})], dZ.aGb), aM4 = new aMH(aMB, aM5, aMF, aMC, a9O, or.a0F.a0G);
	for (var a5 = 0; a5 < 4; a5++) aM6[0][a5] = new aFD("0", aMB.aFC[a5].button), aM6[1][a5] = new aFD("0", aMB.aFC[a5].button, 1);
	aM6[2][1] = new aFD("0", aMF.aFC[1].button), aM6[3][1] = new aFD("0", aMC.aFC[1].button), (aM8 = [new aFD("", aMF.aFC[1].button, 1, 1), new aFD("", aMC.aFC[1].button, 1, 1)])[0].p2.style.bottom = "0em", aM8[1].p2.style.bottom = "0em", aM8[0].p2
		.translate = !1, aM8[1].p2.translate = !1, aMI(0, or.i.ow[0], 1), aMI(2, or.i.ow[2], 1), (aM9 = [new aFD(L(346), aM4.aMJ(), 1, 0), new aFD("", aM4.aMJ(), 1, 1)])[0].p2.style.fontSize = "0.4em", aM9[1].p2.style.fontSize = "0.4em"
}

function aMq() {
	this.a1r = 1, this.i4 = function(fM) {
		cr.eh ? i2.aMr.i4(cr.gJ, fM) : f.e5.aMs(fM)
	}, this.iG = function(yj, oK) {
		this.a1r && (this.a1r = 0, r.md.pE(182, yj)), cr.eh ? i2.aMr.iG(cr.gJ, yj, oK) : f.e5.aMt(yj, oK)
	}, this.aDm = function(yj, a6m) {
		cr.eh ? i2.aMr.a6l(cr.gJ, yj, a6m) : f.e5.aMu(yj, a6m)
	}, this.iO = function(yj, fM) {
		fM = (fM << 3) + gx.iP[6];
		cr.eh ? i2.aMr.iO(cr.gJ, yj, fM) : am.cC.yd(cr.gJ) && f.e5.aMw(yj, fM)
	}, this.iR = function(yj) {
		849 === yj && (yj = 850);
		var o4 = gx.iP[3];
		cr.eh ? i2.aMr.iR(cr.gJ, yj, o4) : am.cK.yF(cr.gJ, o4) && f.e5.aMx(yj, o4)
	}, this.aLT = function(o4) {
		cr.eh ? i2.aMr.aLT(cr.gJ, o4) : f.e5.aMx(849, o4)
	}, this.aLS = function(oK) {
		cr.eh ? i2.aMr.aLS(cr.gJ, oK) : f.e5.aMy(oK)
	}, this.vs = function(vm) {
		cr.eh ? i2.aMr.aMz(cr.gJ, vm) : f.e5.aN0(vm)
	}, this.ib = function(aN1) {
		cr.eh ? i2.aMr.ib(cr.gJ, aN1) : f.e5.aN2(aN1)
	}, this.aFW = function() {
		cr.eh ? i2.aMr.aFW(cr.gJ) : f.e5.aN3()
	}, this.iY = function() {
		cr.eh ? i2.aMr.iY(cr.gJ) : f.e5.aMy(513)
	}, this.iB = function(yj, fM, oK) {
		cr.eh ? i2.aMr.iB(cr.gJ, yj, fM, oK) : f.e5.aN4(yj, fM, oK)
	}
}

function aIE() {
	this.p = new a7w, this.x = new aN5, this.aA = new um, this.a4 = function() {
		this.p.a4()
	}
}

function cB() {
	var aN6;
	this.a4 = function() {
		if (!aN6) {
			aN6 = new Array(fF.a86.length);
			for (var a5 = 0; a5 < aN6.length; a5++) aN6[a5] = gX.i.aN8(20, fF.a86[a5])
		}
	}, this.cQ = function() {
		var a18 = hY;
		if (!(5 <= a18)) {
			var hT = cy.aZ,
				hU = cy.b6,
				dg = hZ / a18,
				dh = ha / a18,
				hb = (hT + hZ) / a18,
				hc = (hU + ha) / a18,
				dp = -20 * a18,
				aN9 = .5 * dp,
				hV = aS.aT << 4,
				u = am.i.hS,
				hM = am.i.hM,
				hN = am.i.hN,
				gl = fF.gl,
				gj = aN6,
				gq = dO;
			3 < a18 && (gq.globalAlpha = .5 * (5 - a18));
			for (var a5 = 0; a5 < u; a5++) {
				var hH = hM[a5],
					aJ = hT * (hH % hV / 16 - dg) / (hb - dg) + aN9,
					hH = hU * (Math.floor(hH / hV) / 16 - dh) / (hc - dh) + aN9;
				hT < aJ || hU < hH || aJ < dp || hH < dp || (gq.setTransform(a18, 0, 0, a18, aJ, hH), aJ = gj[gl[hN[a5] >> 3]], gq.drawImage(aJ, 0, 0))
			}
			gq.globalAlpha = 1, gq.setTransform(a18, 0, 0, a18, 0, 0)
		}
	}
}

function aNC(aAZ, aND, aNE, aNF, aNG) {
	var self;
	this.p2 = document.createElement("span"), this.resize = function() {
			this.p2.style.fontSize = ((aNF - aNE) * aND.offsetHeight).toFixed(1) + "px"
		}, (self = this).p2.textContent = aAZ, self.p2.style.color = dZ.dc, self.p2.style.font = "inherit", self.p2.style.margin = "0.1em 0.6em", self.p2.style.pointerEvents = "none", aNG && (self.p2.style.fontWeight = "bold"), self.p2.style
		.whiteSpace = "nowrap", self.p2.style.display = "block", aND.appendChild(self.p2)
}

function aFp() {
	a1v.a2Q(), dO.setTransform(hY, 0, 0, hY, 0, 0), dO.imageSmoothingEnabled = hY < 3, dO.drawImage(aS.bX, dM.a2E(), dM.cv()), gX.bx.cQ(), dO.drawImage(a3M, dM.a2E(), dM.cv()), a1v.cQ(), am.cQ(), fm.cQ(), (cr.d9 ? (dA.cQ(), ka) : (ew.cQ(), kZ.cQ(),
		gM.cQ(), ka.cQ(), iZ.cQ(), gO.cQ(), dM.cQ(), a21.cQ(), dA.cQ(), m1.cQ(), hp.cQ(), dG.cQ(), gZ.cQ(), gT.cQ(), re.cQ(), gS)).cQ(), d7.cQ()
}

function aNH(ck, aZ, b6) {
	ck.clearRect(0, 0, aZ, b6), ck.fillStyle = dZ.f6, ck.fillRect(0, 0, aZ, b6)
}

function aNI(ck, aZ, b6, aNJ) {
	ck.fillStyle = dZ.dc, ck.fillRect(0, 0, aZ, aNJ), ck.fillRect(0, 0, aNJ, b6), ck.fillRect(aZ - aNJ, 0, aNJ, b6), ck.fillRect(0, b6 - aNJ, aZ, aNJ)
}

function aNK(ck, aJ, aK, gp, aNJ, bB, aNL) {
	ck.fillStyle = dZ.dc;
	var bB = Math.floor(gp * bB),
		df = (bB += (bB - aNJ) % 2, Math.floor((bB - aNJ) / 2)),
		gp = Math.floor((gp - bB) / 2);
	ck.fillRect(aJ + gp, aK + gp + df, bB, aNJ), aNL && ck.fillRect(aJ + gp + df, aK + gp, aNJ, bB)
}

function a6D() {
	var aNN = null,
		aNO = null,
		aNP = 0,
		aNQ = 0,
		aNR = null;

	function aNS() {
		0 !== aNO.p5 && (or.a0F.eQ(), d7.dF(8, 29, new tt(25, {
			action: 0,
			aE: w.p.hg(aNO.aE, 5),
			a4T: 0
		}, 29)))
	}

	function aNU() {
		return !or.a65 || or.cI.p6(aNO) ? 1 : 0
	}

	function aNT() {
		var aJ = aNN.aJ,
			aK = aNN.aK,
			aNa = (or.a0F.eQ(), aNU());
		aNN = new aF8([new ir(rg.ng[5][0], function() {
			aNX(5, 0)
		}, aNa), new ir(rg.ng[5][1], function() {
			aNX(5, 1)
		}, aNa), new ir(rg.ng[5][2], function() {
			aNX(5, 2)
		}, aNa), new ir(rg.ng[5][3], function() {
			aNX(5, 3)
		}, aNa)]), aNW(aJ, aK), aNQ = aNP = 2
	}

	function aNV() {
		29 === d7.lA && d7.rs().a66(w.p.hg(aNO.aE, 5))
	}

	function aNX(id, value) {
		5 === id && f.a4x.aF({
			action: 3,
			aE: w.p.hg(aNO.aE, 5),
			value: value
		})
	}

	function aNW(aJ, aK, aFH) {
		aNN.show(aJ, aK, aFH), or.os.show(aNN.aJ, aNN.aK, aNO, 1)
	}
	this.a0G = function(ej, ev) {
		aNP = 1, aNO = ev, aNN = new aF8([new ir(L(348), aNS, 0 === ev.p5 ? 1 : 0), new ir(L(349), aNT, aNU()), new ir(L(350), aNV, 0)]), aNW((aNR = {
			clientX: ej.clientX,
			clientY: ej.clientY
		}).clientX, aNR.clientY, 1)
	}, this.lh = function(code) {
		if (29 !== d7.lA) return !1;
		if (!aNO) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.eQ();
			else if (aV.hf.startsWith(code, "Numpad") || aV.hf.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aNP) this.a0G(aNR, aNO);
				else {
					if (!aNN) return !1;
					1 === aNP ? code <= 1 ? aNS() : 2 === code ? aNT() : (aNV(), this.eQ()) : (aNX(aNQ, aQ.ld(code - 1, 0, rg.ng[aNQ].length - 1)), this.eQ())
				}
		}
		return !0
	}, this.eQ = function() {
		aNP = 0, aNN && aNN.eQ(), aNN = null, or.os.eQ()
	}
}

function sW(aNf) {
	var op = document.createElement("div"),
		aGR = document.createElement("div"),
		aNg = [];

	function j5() {
		jC.jD() || (this.style.backgroundColor = aV.color.jG(dZ.da, 50))
	}

	function j6() {
		this.style.backgroundColor = dZ.da
	}
	this.pE = function(aNh, aNi) {
			aNg[2].textContent = aNh + 1 + " / " + aNi
		}, this.show = function(ev) {
			ev = or.cI.sM(ev, or.cI.sN(ev)), aGR.appendChild(or.fp.transform(ev)), document.body.appendChild(op)
		}, this.resize = function() {
			var b6 = aV.d1.iq(.03, .5);
			op.style.width = 10 * b6 + "px", op.style.font = aV.d1.d2(1, .75 * b6), aV.d1.k4(op, 4), aGR.style.top = b6 + "px", aGR.style.font = aV.d1.d2(0, .55 * b6), aV.d1.k4(aGR, 2), op.style.height = b6 + aGR.offsetHeight + "px";
			for (var a5 = 0; a5 < 3; a5++) aV.d1.k4(aNg[a5], 6), aNg[[0, 1, 3][a5]].style.width = 2 * b6 + "px";
			for (a5 = 0; a5 < 4; a5++) aNg[a5].style.height = b6 + "px", aV.d1.k4(aNg[a5], 2);
			aNg[2].style.width = 4 * b6 + "px", aNg[1].style.left = 2 * b6 + "px", aNg[2].style.left = 4 * b6 + "px", aNg[3].style.left = 8 * b6 + "px"
		}, this.kD = function() {
			for (var a5 = 0; a5 < 4; a5++) aNg[a5].onclick = null, aNg[a5].onmouseover = null, aNg[a5].onmouseout = null;
			d7.removeChild(document.body, op), op = aGR = aNg = null
		}, op.style.position = "absolute", op.style.color = dZ.dc, op.style.zIndex = "3", op.style.right = "0", op.style.top = "0", aGR.style.position = "absolute", aGR.style.height = "auto", aGR.style.color = dZ.dc, aGR.style.backgroundColor = dZ
		.da, aGR.style.left = "0", aGR.style.width = "100%", aGR.style.overflowWrap = "break-word", op.appendChild(aGR);
	for (var a5 = 0; a5 < 4; a5++) aNg[a5] = document.createElement("div"), aNg[a5].style.position = "absolute", aNg[a5].style.backgroundColor = dZ.da, aNg[a5].style.color = dZ.dc, aNg[a5].style.top = "0", aNg[a5].style.display = "flex", aNg[a5]
		.style.justifyContent = "center", aNg[a5].style.alignItems = "center", aNg[a5].style.userSelect = "none", aNg[a5].style.outline = "none", aNg[a5].style.font = "inherit", 2 !== (aNg[a5].sV = a5) && (aNg[a5].onclick = aNf, aNg[a5].onmouseover =
			j5, aNg[a5].onmouseout = j6), op.appendChild(aNg[a5]);
	aNg[0].textContent = "◀", aNg[1].textContent = "▶", aNg[3].textContent = "✖"
}

function a97() {
	this.zc = function() {
		for (var u = cr.fb, zU = kQ.result.zU, bA = zU.length, gA = (c.d(17 + 16 * u + 33 * bA), c.e(1, 1), c.e(4, 12), c.e(10, bA), c.e(1, +(2 === cr.kK)), c.e(1, cr.a1f % 2), f4.gA), a5 = 0; a5 < u; a5++) c.e(16, gA[a5]);
		for (var g0 = f4.g0, a5 = 0; a5 < bA; a5++) {
			var bB = zU[a5];
			c.e(9, bB), c.e(24, g0[bB])
		}
		f.i.send(f.i.dv, c.j)
	}
}

function aIq() {
	this.i = new aNj, this.bx = new a29, this.a4 = function() {
		this.i.a4()
	}, this.ar = function() {
		0 !== this.i.a2A && this.i.a2A--
	}
}

function aJ2() {
	var aL6 = [];
	this.aDp = function(player, a6m, xB, aNk) {
		player === cr.gJ || a6m === cr.gJ || !aNk && aV.et.jy(player) || aV.et.jy(a6m) || this.f3(f4.f5[player] + " supported " + f4.f5[a6m] + " with " + aV.hf.hg(xB) + " ressource" + (1 === xB ? "." : "s."))
	}, this.f3 = function(v, vm) {
		v = {
			aw: gO.mE(),
			v: v,
			vm: vm
		};
		aL6.push(v), 30 === d7.lA && d7.rs().f3(v)
	}, this.clear = function() {
		aL6 = [];
		var mX = d7.sO(30);
		mX && mX.clear()
	}, this.aNl = function() {
		return aL6
	}
}

function a69() {
	this.pI = function(go) {
		if ((oz = or.ox.oz[go]) < 2 && !__fx.customLobby.isActive()) return !1;
		var aGd = or.i.aA1[go],
			aNm = 9 === aGd.aMX ? 333 : 512,
			oz = Math.min(oz, aNm);
		8 === aGd.aMX && (oz -= oz % 2);
		aNm = or.ox.oy[go].splice(0, oz), or.ox.oz[go] -= oz, oz = function(aNn) {
			if (or.a65) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var u = aNn.length, aE = or.a65.aE, a5 = 0; a5 < u; a5++)
					if (aNn[a5].aE === aE) return a5
			}
			return -1
		}(aNm);
		return -1 === oz ? (or.ox.a0O = or.ox.a0O.concat(aNm), 1e3 < or.ox.a0O.length && or.ox.a0O.splice(0, or.ox.a0O.length - 1e3), or.i.aLi += 29 === d7.lA && or.i.ow[0] === go && 1 === or.i.ow[2], !1) : (8 === aGd.aMX && (aGd.aNq = (aGd.aNq +
			(oz >> 1)) % 1024, go = oz - oz % 2, oz %= 2, aNm = aNm.slice(go, 2 + go)), aCg.a4(aGd, aNm, oz), !0)
	}, this.aNr = function(aGd, aNn, aNo) {
		var ba = cr.data = new a1h,
			aNs = (ba.spawningSeed = aGd.spawningSeed, aGd.aMX < 7 ? (ba.gameMode = 1, ba.numberTeams = aGd.aMX + 2) : 9 === aGd.aMX ? (ba.gameMode = ba.isZombieMode = 1, ba.numberTeams = 2) : (ba.gameMode = 0, ba.battleRoyaleMode = 7 === aGd
				.aMX ? 0 : 10 === aGd.aMX ? 1 : 2), ba.selectedPlayer = aNo, ba.isContest = aGd.aMj, ba.mapType = aS.aEw(aGd.bL) ? 0 : 1, aS.aF6(ba, aGd.bL), ba.mapSeed = aGd.mapSeed, ba.humanCount = aNn.length);
		ba.selectableSpawn = 1 === ba.gameMode || aNs < 100, ba.colorsData = new Uint32Array(aNs), ba.playerNamesData = new Array(aNs), ba.z2 = new Uint32Array(aNs);
		for (var a5 = 0; a5 < aNs; a5++) ba.colorsData[a5] = aNn[a5].color, ba.playerNamesData[a5] = aNn[a5].username, ba.z2[a5] = aNn[a5].aE;
		if (2 === ba.battleRoyaleMode)
			for (ba.elo = new Uint16Array(aNs), a5 = 0; a5 < aNs; a5++) ba.elo[a5] = aNn[a5].elo;
		vK.close(), eW.setState(8), aS.d(aGd.bL, ba.mapSeed), cr.a1k(), cr.a1j = 2
	}
}

function aIb() {
	var aNt, aNu, jg, h0;
	this.a4 = function() {
		var a5, aJ, aK, a8N, aNv, aZ, b6, ck, gr, bb, kv, bB, h3, a6, c0;
		if (function() {
				if (jg = !0, h0 = "rgb(" + aS.bY[0] + "," + aS.bY[1] + "," + aS.bY[2] + ")", aS.aF4(aS.bL)) return 1;
				return jg = !1, 0
			}()) aNu = null;
		else {
			for (aNt = aQ.aR(96, 4), aNv = 1 === aS.bL ? (a8N = 0, 160) : (a8N = 128, 32), h0 = "rgb(" + a8N + "," + a8N + "," + a8N + ")", aNu = new Array(4), a5 = 3; 0 <= a5; a5--) {
				if (aNu[a5] = document.createElement("canvas"), aZ = a5 % 2 == 0 ? aS.aT : aNt, b6 = a5 % 2 == 0 ? aNt : aS.aU + 2 * aNt, aNu[a5].width = aZ, aNu[a5].height = b6, bb = (gr = (ck = aNu[a5].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aZ, b6)).data, a5 % 2 == 0)
					for (aK = aNt - 1; 0 <= aK; aK--)
						for (kv = aNv + Math.floor((aK + 1) * (a8N - aNv) / (aNt + 1)), aJ = aZ - 1; 0 <= aJ; aJ--) bb[bB = 4 * ((0 === a5 ? aNt - aK - 1 : aK) * aZ + aJ)] = kv, bb[bB + 1] = kv, bb[bB + 2] = kv, bb[bB + 3] = 255;
				else {
					for (aJ = aNt - 1; 0 <= aJ; aJ--)
						for (kv = aNv + Math.floor((aJ + 1) * (a8N - aNv) / (aNt + 1)), aK = b6 - 1 - aNt; aNt <= aK; aK--) bb[bB = 4 * (aK * aZ + (3 === a5 ? aNt - aJ - 1 : aJ))] = kv, bb[bB + 1] = kv, bb[bB + 2] = kv, bb[bB + 3] = 255;
					for (a6 = 1; 0 <= a6; a6--)
						for (aJ = aNt - 1; 0 <= aJ; aJ--)
							for (aK = aNt - 1; 0 <= aK; aK--) h3 = (Math.pow(aJ * aJ + aK * aK, .5) + 1) / (aNt + 1), kv = aNv + Math.floor((1 < h3 ? 1 : h3) * (a8N - aNv)), bb[bB = 4 * ((0 === a6 ? aNt - aK - 1 : aK + a6 * (b6 - aNt)) * aZ + (
								1 === a5 ? aJ : aNt - aJ - 1))] = kv, bb[bB + 1] = kv, bb[bB + 2] = kv, bb[bB + 3] = 255
				}
				ck.putImageData(gr, 0, 0)
			}
			c0 = aNv, aS.bR.fillStyle = "rgb(" + c0 + "," + c0 + "," + c0 + ")", aS.bR.fillRect(0, 0, aS.aT, 1), aS.bR.fillRect(0, aS.aU - 1, aS.aT, 1), aS.bR.fillRect(0, 0, 1, aS.aU), aS.bR.fillRect(aS.aT - 1, 0, 1, aS.aU)
		}
	}, this.a2Q = function() {
		var a6 = jg ? 0 : -aNt;
		aM3(a6, a6, aS.aT - 2 * a6, aS.aU - 2 * a6, a15.aNy, a15.aNz, a15.aO0, a15.aO1) || (dO.fillStyle = h0, dO.fillRect(0, 0, cy.aZ, cy.b6))
	}, this.cQ = function() {
		jg || (aM1(0, -aNt, aS.aT, aNt, a15.aNy, a15.aNz, a15.aO0, a15.aO1) && dO.drawImage(aNu[0], a15.aO2, a15.aO3 - aNt), aM1(aS.aT, -aNt, aNt, aS.aU + 2 * aNt, a15.aNy, a15.aNz, a15.aO0, a15.aO1) && dO.drawImage(aNu[1], a15.aO2 + aS.aT, a15
			.aO3 - aNt), aM1(0, aS.aU, aS.aT, aNt, a15.aNy, a15.aNz, a15.aO0, a15.aO1) && dO.drawImage(aNu[2], a15.aO2, a15.aO3 + aS.aU), aM1(-aNt, -aNt, aNt, aS.aU + 2 * aNt, a15.aNy, a15.aNz, a15.aO0, a15.aO1) && dO.drawImage(aNu[3],
			a15.aO2 - aNt, a15.aO3 - aNt))
	}
}

function sz() {
	this.m3 = function(v, font, maxWidth) {
		if (font && (dO.font = font), dO.measureText(v).width <= maxWidth) return v;
		for (var a5 = v.length - 1; 1 <= a5; a5--)
			if (v = v.substring(0, a5), dO.measureText(v + "...").width <= maxWidth) return v + "...";
		return "..."
	}
}

function a8f() {
	var pw, a4Q, lR, lV;

	function aO5() {
		a8.rW !== r.buffer.data[12].value ? (a8.a4(), d7.dF(8, 1, new tt(30))) : d7.dF(1)
	}
	this.show = function() {
			pw.show(), this.resize()
		}, this.eQ = function() {
			pw.eQ()
		}, this.resize = function() {
			pw.resize(), a4Q.resize()
		}, this.lh = function(jA) {
			2 === jA && pw.li[0].iy()
		}, pw = new lH(L(272), [new ir("⬅️ " + L(4), aO5), new ir(L(351), function() {
			d7.vL(), r.md.oU(), d7.dF(2)
		})]), lR = [], (lV = new lW).lX(L(352)), lV.a50(L(353)), lR.push(lV),
		function(lR) {
			var lV = new lW,
				au = (lV.lX(L(381)), a8.data.aOA());
			lV.lY(new lZ({
				la: au,
				value: a8.data.aOB(au)
			}, function(go) {
				return r.md.pE(12, au[go].split(":")[0]), !0
			})), lR.push(lV)
		}(lR),
		function(lR) {
			var lV = new lW,
				aO8 = (lV.lX(L(379)), []);
			lV.lb(new k0([new ir(L(380), function(ej) {
				aDA.aDE();
				for (var a5 = 0; a5 < aO8.length; a5++) aO8[a5].ej.value = aDA.aD8[a5];
				return aV.d1.a4v(ej), !0
			}).button]));
			for (var a5 = 0; a5 < aDA.aD6.length; a5++) {
				lV.a50(aDA.aD6[a5]);
				for (var a6 = 0; a6 < 2; a6++) {
					var go = 2 * a5 + a6,
						tf = new lc({
							value: aDA.aD8[go],
							go: -1
						});
					tf.ej.aO9 = go, aO8.push(tf), tf.ej.addEventListener("keydown", function(ej) {
						ej.preventDefault();
						var code = ej.code;
						ej.target.value = code, aDA.aDB(ej.target.aO9, code)
					}), a6 && (tf.ej.style.marginLeft = "4%"), tf.ej.style.width = "48%", lV.lb(tf)
				}
			}
			lR.push(lV)
		}(lR), (lV = new lW).lX(L(354)), r.buffer.data[1].la = [L(355), L(356), L(357), L(358)], lV.lY(new lZ(r.buffer.data[1])), lR.push(lV), (lV = new lW).lX(L(359)), r.buffer.data[9].la = [L(356), L(360), L(361)], lV.lY(new lZ(r.buffer.data[9])),
		lR.push(lV), (lV = new lW).lX(L(362)), r.buffer.data[11].la = [L(363), L(364), L(365)], lV.lY(new lZ(r.buffer.data[11])), lR.push(lV), (lV = new lW).lX(L(366)), lV.lb(new aDy(r.buffer.data[2])), lR.push(lV), (lV = new lW).lX(L(367)), lV.lb(
			new aDy(r.buffer.data[7])), lR.push(lV), (lV = new lW).lX(L(368)), lV.lb(new aDy(r.buffer.data[8])), lR.push(lV), (lV = new lW).lX(L(369)), lV.lb(new lc(r.buffer.data[5])), lR.push(lV), (lV = new lW).lX(L(370)), lV.lb(new aDy(r.buffer
			.data[13], L(371))), lV.lb(new aDy(r.buffer.data[14], L(372))), lR.push(lV), (lV = new lW).lX(L(373)), lV.lY(new lZ({
			la: [L(374), L(375), L(376)],
			value: eC.eF
		}, function(a5) {
			eC.eF = a5
		})), lR.push(lV), (lV = new lW).lX(L(377)), lV.lb(new aDy(r.buffer.data[15])), lV.a50(L(378)), lV.lb(new lc(r.buffer.data[16], 1, 0, function(ej) {
			ej.target.value = aQ.ld(Math.floor(ej.target.value), 0, 16)
		})), lR.push(lV), a4Q = new lJ(pw.lK, lR)
}

function aIW() {
	this.fp = new up, this.bb = new tU
}

function cD() {
	this.yd = function(player) {
		return !!cr.data.passableWater && am.i.hS !== am.i.mk && am.i.mr[player] !== am.i.ml && 0 !== f4.g5[player].length
	}, this.aOC = function(yT) {
		var c2 = gx.iP[1];
		return !(4 <= c2 || !am.cI.aAy(aj.i5(yT))) && fK.o9(aj.i5(aj.aJQ(yT, c2)))
	}
}

function aJ4() {
	this.a3w = function() {
		for (var aJ, aK, a5 = a3v - 1; 0 <= a5; a5--) aJ = aQ.aR(a4D[a5], 4) % aS.aT, aK = aQ.aR(a4D[a5], 4 * aS.aT), f4.fw[a3r] = Math.min(aJ, f4.fw[a3r]), f4.fx[a3r] = Math.min(aK, f4.fx[a3r]), f4.fy[a3r] = Math.max(aJ, f4.fy[a3r]), f4.fz[
			a3r] = Math.max(aK, f4.fz[a3r])
	}, this.aOD = function() {
		var ba, bB, a5, u = f4.g3[a3r].length,
			ie = fK.ie;
		loop: for (a5 = u - 1; 0 <= a5; a5--) {
			for (ba = 3; 0 <= ba; ba--)
				if (bB = f4.g3[a3r][a5] + ie[ba], fK.fL(bB) || fK.ii(bB) && fK.iA(bB) !== a3r) {
					fK.aKK(f4.g3[a3r][a5], a3r);
					continue loop
				} f4.g3[a3r][a5] = f4.g3[a3r][u - 1], f4.g3[a3r].pop(), u--
		}
	}, this.aOE = function() {
		var player = a3r,
			g4 = f4.g4,
			g5 = f4.g5,
			g6 = f4.g6,
			u = g4[player].length,
			ie = fK.ie;
		loop: for (var a5 = u - 1; 0 <= a5; a5--) {
			for (var aOF = !1, aOG = !1, ba = 3; 0 <= ba; ba--) {
				var bB = g4[player][a5] + ie[ba];
				if (fK.aJR(bB, player)) continue loop;
				aOF = aOF || fK.jg(bB), aOG = aOG || fK.aK6(bB)
			}
			aOF ? g5[player].push(g4[player][a5]) : aOG ? g6[player].push(g4[player][a5]) : fK.aC2(g4[player][a5], player), g4[player][a5] = g4[player][u - 1], g4[player].pop(), u--
		}
	}, this.a3i = function() {
		f4.g0[a3f] -= a3v
	}, this.a3j = function(border) {
		for (var u = border.length, a5 = u - 1; 0 <= a5; a5--) fK.pm(a3f, border[a5]) || (border[a5] = border[u - 1], border.pop(), u--)
	}, this.a3l = function(border) {
		for (var u = border.length, a5 = u - 1; 0 <= a5; a5--) !fK.pm(a3f, border[a5]) && fK.o9(border[a5]) && (border[a5] = border[u - 1], border.pop(), u--)
	}, this.a3m = function(border) {
		for (var ba, bB, u = border.length, ie = fK.ie, a5 = u - 1; 0 <= a5; a5--)
			for (ba = 3; 0 <= ba; ba--)
				if (bB = border[a5] + ie[ba], fK.aJR(bB, a3f)) {
					f4.g4[a3f].push(border[a5]), border[a5] = border[u - 1], border.pop(), u--;
					break
				}
	}, this.a3n = function() {
		for (var ba, bB, ie = fK.ie, a5 = a3v - 1; 0 <= a5; a5--)
			for (ba = 3; 0 <= ba; ba--) bB = a4D[a5] + ie[ba], fK.oJ(a3f, bB) && fK.aKD(bB) && (f4.g4[a3f].push(bB), fK.a4E(bB, a3f))
	}, this.a3o = function() {
		var aJ, aK;
		loop: for (; f4.fx[a3f] < f4.fz[a3f];) {
			for (aJ = f4.fy[a3f]; aJ >= f4.fw[a3f]; aJ--)
				if (fK.pm(a3f, 4 * (f4.fx[a3f] * aS.aT + aJ))) break loop;
			f4.fx[a3f]++
		}
		loop: for (; f4.fx[a3f] < f4.fz[a3f];) {
			for (aJ = f4.fy[a3f]; aJ >= f4.fw[a3f]; aJ--)
				if (fK.pm(a3f, 4 * (f4.fz[a3f] * aS.aT + aJ))) break loop;
			f4.fz[a3f]--
		}
		loop: for (; f4.fw[a3f] < f4.fy[a3f];) {
			for (aK = f4.fz[a3f]; aK >= f4.fx[a3f]; aK--)
				if (fK.pm(a3f, 4 * (aK * aS.aT + f4.fw[a3f]))) break loop;
			f4.fw[a3f]++
		}
		loop: for (; f4.fw[a3f] < f4.fy[a3f];) {
			for (aK = f4.fz[a3f]; aK >= f4.fx[a3f]; aK--)
				if (fK.pm(a3f, 4 * (aK * aS.aT + f4.fy[a3f]))) break loop;
			f4.fy[a3f]--
		}
	}, this.iL = function(player, oK) {
		return 0 === fF.fI[player] || fF.fI[player] !== fF.fI[oK]
	}, this.iF = function(player) {
		for (var a5, dp, u = f4.g4[player].length, ie = fK.ie, ba = 3; 0 <= ba; ba--)
			for (dp = ie[ba], a5 = 0; a5 < u; a5++)
				if (fK.fL(f4.g4[player][a5] + dp)) return !0;
		return !1
	}, this.yk = function(player) {
		for (var a5, dp, u = f4.g4[player].length, ie = fK.ie, ba = 3; 0 <= ba; ba--)
			for (dp = ie[ba], a5 = 0; a5 < u; a5++)
				if (fK.aC1(f4.g4[player][a5]) && fK.fL(f4.g4[player][a5] + dp)) return !0;
		return !1
	}, this.iM = function(a6c, a6d) {
		for (var a5, kG, dp, bB, mx = f4.g4[a6c].length, my = f4.g4[a6d].length, ie = (my < mx && (kG = a6c, a6c = a6d, a6d = kG, kG = mx, mx = my, 0), fK.ie), ba = 3; 0 <= ba; ba--)
			for (dp = ie[ba], a5 = 0; a5 < mx; a5++)
				if (bB = f4.g4[a6c][a5] + dp, fK.ii(bB) && fK.iA(bB) === a6d) return !0;
		return !1
	}, this.yl = function(a6c, a6d) {
		for (var a5, dp, bB, mx = f4.g4[a6c].length, ie = fK.ie, ba = 3; 0 <= ba; ba--)
			for (dp = ie[ba], a5 = 0; a5 < mx; a5++)
				if (fK.aC1(f4.g4[a6c][a5]) && (bB = f4.g4[a6c][a5] + dp, fK.ii(bB)) && fK.iA(bB) === a6d) return !0;
		return !1
	}
}

function aIK() {
	var aOH, b6, aOI, aOJ, aOK, aOL, aOM, aON, aOO;

	function cv() {
		return gM.cw(ew.aOa()) ? iZ.d8 ? __fx.settings.keybindButtons ? gM.aK - 2 * gM.b6 - 3 * aOI : gM.aK - gM.b6 - 2 * aOI : __fx.settings.keybindButtons ? gM.aK - gM.b6 - 2 * aOI : gM.aK - aOI : ka.cw(ew.aOc()) ? iZ.d8 ? ka.cv() - gM.b6 - 2 *
			aOI : ka.cv() - aOI : iZ.d8 ? cy.b6 - gM.b6 - (d0.cS() + 1) * aOI : cy.b6 - d0.cS() * cz.gap
	}

	function aOT(kG, v, id, bB, aOV, aOW, bk, aOX, aOY, fJ, aOg) {
		var a5, ck, gj, ev, aOh = void 0 !== aOY,
			aZ = Math.floor(a21.measureText(v, ew.ly) + 1.5 * aOJ + (aOh ? b6 : 1.5 * aOJ));
		if (bV.bW = !0, aOg || a1l.f3(v, aOY), aZ + 2 * aOI + gM.b6 > cy.aZ && !aOh && 50 !== id && 20 < v.length) aOT(kG, (aOg = aV.hf.a7W(v))[0], id, bB, aOV, aOW, bk, aOX, aOY, fJ, !0), aOT(kG, aOg[1], id, bB, aOV, aOW, bk, aOX, aOY, fJ, !0);
		else if (aOg = aZ + (50 === id ? aOK : 0), (gj = document.createElement("canvas")).width = aZ, gj.height = b6, (ck = gj.getContext("2d", {
				alpha: !0
			})).font = ew.ly, aV.d1.textBaseline(ck, 1), aV.d1.textAlign(ck, 0), ck.clearRect(0, 0, aZ, b6), ck.fillStyle = aOW, ck.fillRect(0, 0, aZ, b6), ck.fillStyle = aOV, ck.fillText(v, Math.floor(1.5 * aOJ), Math.floor(b6 / 2)), aOh && (ck
				.imageSmoothingEnabled = !0, fo.bb.vu(aOY, ck, aZ - b6, 0, b6)), 0 === (ev = {
				aw: kG,
				v: v,
				id: id,
				player: bB,
				canvas: gj,
				aOV: aOV,
				aOW: aOW,
				aZ: aZ,
				aOb: aOg,
				bk: bk,
				aOX: aOX,
				aOY: aOY,
				fJ: fJ
			}).aw || 0 < aOH.length && 0 < aOH[0].aw) aOH.unshift(ev);
		else {
			for (a5 = 1; a5 < aOH.length; a5++)
				if (0 < aOH[a5].aw) return void aOH.splice(a5, 0, ev);
			aOH.push(ev)
		}
	}

	function aOU(jn, mX, av) {
		return "rgb(" + jn + "," + mX + "," + av + ")"
	}

	function aOi(id, fi) {
		for (var u = aOH.length, a5 = 0; a5 < u; a5++) aOH[a5].id === id && fi-- <= 0 && (aOH.splice(a5, 1), a5--, u--)
	}

	function aOj(id, player) {
		for (var o6 = !1, a5 = aOH.length - 1; 0 <= a5; a5--) aOH[a5].id !== id || player !== cr.fc && aOH[a5].player !== player || (aOH.splice(a5, 1), o6 = !0);
		return o6
	}

	function aP8(v) {
		aOT(340, v, 6, 0, aOU(215, 245, 255), dZ.f6, -1, !1)
	}
	this.aOP = "", this.a4 = function() {
		var self;
		aON = 0, aOM = cT.cU.cV() ? 7 : 12, aOL = {
			ay: [0, 0, 0],
			aOQ: [0, 0, 0],
			a0o: [220, 180, 180],
			aFw: [0, 0, 0],
			jA: [0, 0, 0]
		}, aOH = [], this.resize(), cr.gH && this.pk(0, 18), aS.bJ.bK[aS.bL].name.length && aP8(L(423, [aS.bJ.bK[aS.bL].name])), aS.bJ.bK[aS.bL].wI && aP8(L(424, [aS.bJ.bK[aS.bL].wI])), aP8(L(425, [aS.aT - 2 + "x" + (aS.aU - 2)])), aP8(L(426,
			[aV.hf.hg(a1t.aHh)])), a1t.aHh !== a1t.aHi && aP8(L(427, [aV.hf.hg(a1t.aHi) + " (" + aV.hf.mC(100 * a1t.aHi / a1t.aHh, 1) + ")"])), 0 < a1t.aHj && aP8(L(403, [aV.hf.hg(a1t.aHj) + " (" + aV.hf.mC(100 * a1t.aHj / a1t.aHh, 1) +
			")"])), 0 < a1t.aEs && aP8(L(428, [aV.hf.hg(a1t.aEs) + " (" + aV.hf.mC(100 * a1t.aEs / a1t.aHh, 1) + ")"])), 10 === cr.fW && aOT(120, L(429), 6, 0, aOU(235, 255, 120), dZ.f6, -1, !1), 0 !== (self = this).aOP.length && (aOT(200,
			self.aOP, 0, 0, dZ.dc, dZ.f6, -1, !1), self.aOP = ""), cr.ze && aOT(340, L(382), 6, 0, aOU(255, 200, 0), dZ.f6, -1, !1)
	}, this.resize = function() {
		var aLe, a5;
		if (b6 = (b6 = Math.floor((cT.cU.cV() ? .031 : .0249) * cy.l7)) < 10 ? 10 : b6, this.fontSize = Math.floor(2 * b6 / 3), this.ly = aV.d1.d2(1, this.fontSize), aOI = cz.gap, aOJ = Math.floor(b6 / 5), 0 < aOH.length)
			for (aLe = aOH, aOH = [], a5 = aLe.length - 1; 0 <= a5; a5--) aOT(aLe[a5].aw, aLe[a5].v, aLe[a5].id, aLe[a5].player, aLe[a5].aOV, aLe[a5].aOW, aLe[a5].bk, aLe[a5].aOX, aLe[a5].aOY, aLe[a5].fJ, !0);
		this.aOZ()
	}, this.aOZ = function() {
		aOO = document.createElement("canvas");
		var v = L(383),
			ck = (aOK = a21.measureText(v, this.ly) + 5 * aOJ, aOO.height = b6, aOO.width = aOK, aOO.getContext("2d", {
				alpha: !0
			}));
		ck.font = this.ly, aV.d1.textBaseline(ck, 1), aV.d1.textAlign(ck, 1), ck.clearRect(0, 0, aOK, b6), ck.fillStyle = dZ.vI, ck.fillRect(0, 0, aOK, b6), ck.fillStyle = dZ.dc, ck.fillText(v, Math.floor(aOK / 2), Math.floor(b6 / 2))
	}, this.aOa = function() {
		var u;
		return iZ.d8 ? iZ.aZ : 0 === (u = aOH.length) ? 0 : 1 === u ? aOH[0].aOb : uS(aOH[0].aOb, aOH[1].aOb)
	}, this.aOc = function() {
		var u = aOH.length;
		return iZ.d8 ? u ? uS(iZ.aZ, aOH[0].aOb) : iZ.aZ : 0 === u ? 0 : 1 === u ? aOH[0].aOb : 2 === u ? uS(aOH[0].aOb, aOH[1].aOb) : uS(uS(aOH[0].aOb, aOH[1].aOb), aOH[2].aOb)
	}, this.dB = function(aJ, aK) {
		for (var dg, a2U, aOd = cv(), a5 = aOH.length - 1; 0 <= a5; a5--)
			if ((a2U = aOd - (a5 + 1) * b6) <= aK && aK < a2U + b6) return 50 === aOH[a5].id ? aJ >= cy.aZ - aOK - aOI - aOH[a5].aZ && (aJ >= cy.aZ - aOK - aOI ? i2.et.aOe(aOH[a5].player) : gQ.rF(aOH[a5].player, 800, !1, 0), !0) : aJ >= cy.aZ -
				aOH[a5].aZ - aOI && (736 === aOH[a5].id ? window.open("https://" + aOH[a5].v, "_blank") : aOH[a5].aOX && (aOH[a5].fJ && aOH[a5].fJ.a6 ? (a2U = aOH[a5].fJ.fM, dg = aj.fQ(a2U) - 10, a2U = aj.fR(a2U) - 10, gQ.gR(dg, a2U, 19 + dg,
					19 + a2U)) : aOH[a5].fJ && aOH[a5].fJ.av ? gQ.a0q(aOH[a5].player, aOH[a5].fJ.o4) : (gQ.rF(aOH[a5].player, 800, !1, 0), 0 <= aOH[a5].bk && (dg = aOH[a5].bk, aOH[a5].bk = aOH[a5].player, aOH[a5].player = dg))), !0);
		return !1
	}, this.f3 = function(kG, v, id, bB, aOV, aOW, bk, aOX, aOY, fJ) {
		aOT(kG, v, id, bB, aOV, aOW, bk, aOX, aOY, fJ)
	}, this.aOf = function(a06) {
		aOT(300, a06, 252, 0, dZ.dc, dZ.f6, -1, !1)
	}, this.gU = function(id) {
		for (var a5 = aOH.length - 1; 0 <= a5; a5--) aOH[a5].id === id && (aOH[a5].aw = 1)
	}, this.pk = function(player, id) {
		0 === id ? (a21.gE(player, 0), aOi(423, 2), aOT(160, L(384, [f4.f5[player]]), 423, player, "rgb(10,220,10)", dZ.f6, -1, !1)) : 1 === id ? (aOj(50, cr.fc), a21.gE(player, 1), aOT(360, L(385, [f4.f5[player]]), 0, player, dZ.aHL, dZ.f6, -1,
				!0), gQ.rF(player, 2700, !1, 0)) : 2 === id ? (a21.gE(player, 2), aOT(0, L(386), 0, player, "rgb(10,255,255)", dZ.f6, -1, !0), gQ.rF(player, 2700, !1, 0)) : 3 === id ? (a21.gE(player, 2), aOT(0, L(387, [f4.f5[player]]), 0, player,
				dZ.dc, dZ.f6, -1, !0), gQ.rF(player, 2700, !1, 0)) : 4 === id ? this.pl(1, player, player) : 5 === id ? aV.et.jy(cr.gJ) || (function(id, a3K) {
				var a5, aOu = 0,
					u = aOH.length;
				for (a5 = 0; a5 < u; a5++)
					if (aOH[a5].id === id && a3K <= ++aOu) return aOH.splice(a5, 1)
			}(1, 5), fm.xx(player) && aOT(180, L(388, [f4.f5[player]]), 1, player, aOU(255, 200, 180), dZ.f6, -1, !0), aV.et.o5(player, 10) && (aOi(573, 0), aOT(180, L(389, [f4.f5[player]]), 573, player, dZ.aHL, dZ.f6, -1, !0))) : 18 === id ?
			aOT(255, L(390), 18, 0, dZ.dc, dZ.f6, -1, !1) : 21 === id ? aOT(220, L(391), id, 0, dZ.dc, dZ.f6, -1, !1) : 22 === id ? this.pl(2, player, player) : 59 === id && aOT(0, L(392), id, 0, dZ.aHV, dZ.f6, 0, !1)
	}, this.vC = function(a06) {
		aOT(200, L(393, [a06]), 94, 0, dZ.dc, dZ.aHJ, -1, !1)
	}, this.aOl = function(aOm) {
		if (cr.gJ === aOm && !cr.eh && !cr.cs)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aOT(0, "Your Win Count is now " + __fx.wins.count, 3, aOm, dZ.dc, dZ.f6, -1, !0);
		f4.g0[aOm] && (a21.gE(aOm, 2), cr.fb < 100 ? aOT(0, L(387, [f4.f5[aOm]]), 3, aOm, dZ.dc, dZ.f6, -1, !0) : aOT(0, L(394, [f4.f5[aOm]]), 3, aOm, dZ.dc, dZ.f6, -1, !0))
	}, this.aOn = function(gt) {
		var v, aOp, aOo = "(" + aj.fQ(gt >> 2) + ", " + aj.fR(gt >> 2) + ")",
			aOX = !1,
			player = 0;
		fK.o9(gt) ? fK.fL(gt) ? aOo = L(395, [aOo]) : (player = fK.iA(gt), cr.cs && !1 === __fx.hoveringTooltip.active && (cr.gJ = player), v = L(396, [aV.ck.m3(f4.ft[player], aV.d1.d2(0, 10), 150)]) + "   ", v = (v += L(397, [aV.hf.hg(f4.g2[
				player])]) + "   ") + L(398, [aV.hf.hg(f4.g0[player])]) + "   ", cr.f0 && (aOp = fF.t6[fF.fG[fF.fI[player]]], v += L(340) + ": " + aOp + "   "), aV.et.jy(player) && (v += L(399) + ": " + kj.aOq[kj.hF[player]] + "   "), aOo =
			v = (v += L(400, [player]) + "   ") + L(401, [aOo]), aOX = !0) : aOo = fK.i6(gt) ? L(402, [aOo]) + "   #" + fK.yL(gt) : L(403, [aOo]), aOi(55, 0), aOT(220, aOo, 55, player, dZ.dc, dZ.f6, -1, aOX, void 0, void 0, !0)
	}, this.aOr = function(aOs) {
		var bA = am.i,
			player = bA.hN[aOs] >> 3,
			v = (bV.bW = !0, aOi(55, 0), L(404, [f4.f5[player]]) + "   ");
		aOT(220, v += L(397, [aV.hf.hg(bA.hO[aOs])]), 55, player, dZ.dc, dZ.f6, -1, !0)
	}, this.vs = function(e5, a2f, vm) {
		e5 === cr.gJ ? aOT(175, " " + L(405, [f4.f5[a2f]]) + ": ", 1001, a2f, aOU(200, 255, 210), dZ.f6, -1, !0, vm) : this.aOt(e5, vm)
	}, this.aOt = function(e5, vm) {
		aOi(1e3, 0), aOT(175, f4.f5[e5] + ": ", 1e3, e5, dZ.dc, "rgba(5,60,25,0.9)", -1, !0, vm)
	}, this.aOv = function() {
		var a06;
		cr.kT ? (a06 = L(406), a21.aOw(L(407), 2, 1, 12), aOT(0, a06, 40, 0, "rgb(10,220,10)", dZ.f6, -1, !1)) : (a06 = L(408), a21.aOw(L(409), 2, 0, 16), aOT(0, a06, 41, 0, dZ.dc, dZ.f6, -1, !1))
	}, this.aOx = function() {
		var fi = f4.f5,
			ba = cr.data;
		aOT(300, fi[0] + " [" + cr.a1d.aOy(ba.elo[0]) + "] vs " + fi[1] + " [" + cr.a1d.aOy(ba.elo[1]) + "]", 65, 0, dZ.pi, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aES = function(a06) {
		aOT(350, a06, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aOz = function(aP0) {
		aOT(0, L(aP0 ? 410 : 411), 247, 0, dZ.j1, dZ.f6, -1, !1)
	}, this.aP1 = function(aP2, aP3, aP4) {
		var ba = cr.data,
			fi = f4.f5;
		aOT(0, fi[0] + ": " + cr.a1d.aOy(ba.elo[0]) + " -> " + aP2, 66, 0, dZ.dc, aP4[0], -1, !1), aOT(0, fi[1] + ": " + cr.a1d.aOy(ba.elo[1]) + " -> " + aP3, 66, 1, dZ.dc, aP4[1], -1, !1)
	}, this.aD3 = function(player, id) {
		0 === id ? aOj(50, player) ? (aOT(128, L(412, [f4.f5[player]]), 52, player, aOU(180, 255, 180), dZ.f6, -1, !0), fm.fn(player, 2, 255)) : aOT(384, L(413, [f4.f5[player]]), 51, player, aOU(210, 210, 255), dZ.f6, -1, !0) : aOj(51, player) ?
			(aOT(128, L(414, [f4.f5[player]]), 52, player, dZ.dc, "rgba(60,120,10,0.9)", -1, !0), fm.fn(player, 2, 255)) : (aOT(384, L(415, [f4.f5[player]]), 50, player, dZ.dc, "rgba(90,90,90,0.9)", -1, !0), fm.fn(player, 2, 96))
	}, this.aP5 = function(ay, target) {
		var color = aOU(210, 255, 210);
		1 < ay.length ? aOT(230, L(416, [ay.length, f4.f5[target]]), 66, target, color, dZ.f6, -1, !0) : aOT(230, L(417, [f4.f5[ay[0]], f4.f5[target]]), 66, ay[0], color, dZ.f6, target, !0)
	}, this.aD4 = function(player, target) {
		aOT(230, L(418, [f4.f5[player], f4.f5[target]]), 66, player, dZ.dc, "rgba(75,65,5,0.9)", target, !0)
	}, this.ez = function(id, fi) {
		aOi(id, fi)
	}, this.kY = function(id, player) {
		aOj(id, void 0 === player ? cr.fc : player)
	}, this.ex = function(id) {
		for (var a5 = aOH.length - 1; 0 <= a5; a5--)
			if (aOH[a5].id === id) return aOH[a5];
		return null
	}, this.aDq = function(xB, aP6, player) {
		2 !== f4.fu[cr.gJ] && aOT(200, 1 === xB ? L(419, [f4.f5[player]]) : L(420, [aV.hf.hg(xB), f4.f5[player]]), 30, player, "rgb(190,255,190)", dZ.f6, -1, !0)
	}, this.aP7 = function(xB, player) {
		2 !== f4.fu[cr.gJ] && (aOi(31, 0), xB = " (" + aV.hf.hg(xB) + ") 💸", aOT(150, xB = aV.et.jy(player) ? L(421) + xB : L(422, [f4.f5[player]]) + xB, 31, player, dZ.pi, "rgba(205,205,205,0.9)", -1, !0))
	}, this.kX = function(m6) {
		for (var jA = bV.es(), a5 = 2; 0 <= a5; a5--) 0 < aOL.aFw[a5] && (m6 || aOL.jA[a5] < jA - 220) && this.aP9(a5)
	}, this.aP9 = function(id) {
		var v, u = aOL.aFw[id],
			player = aOL.ay[id];
		aOL.aFw[id] = 0, 1 === u ? (0 === id ? v = L(430, [f4.f5[player], f4.f5[aOL.aOQ[0]]]) : 1 === id ? v = L(431, [f4.f5[player]]) : 2 === id ? v = L(432, [f4.f5[player]]) : 3 === id && (v = L(433, [f4.f5[player]])), aOi(7, 0), aOT(aOL.a0o[
			id], v, 7, aOL.aOQ[id], dZ.dc, dZ.f6, -1, !0)) : (v = L(0 === id ? 434 : 1 === id ? 435 : 436, [u]), aOi(7, 0), aOT(aOL.a0o[id], v, 7, player, dZ.dc, dZ.f6, -1, !1))
	}, this.pl = function(id, bj, bk) {
		var jA = bV.es(),
			u = aOL.aFw[id] + 1;
		aOL.aFw[id]++, aOL.ay[id] = bj, aOL.aOQ[id] = bk, 1 === u && (aOL.jA[id] = jA), (1 === u && (cr.kP < 32 || 2 === cr.d6) || 1 < u && (aOL.jA[id] < jA - 140 || 2 === cr.d6)) && this.aP9(id)
	}, this.ar = function() {
		aI3.ar();
		for (var aJi = (aJi = aOH.length - aOM) <= 1 ? 1 : aJi * aJi, a5 = aOH.length - 1; 0 <= a5; a5--) 0 < aOH[a5].aw && (aOH[a5].aw -= aJi, aOH[a5].aw <= 0) && (bV.bW = !0, aOH.splice(a5, 1));
		! function() {
			var fi, a5;
			if (128 !== aON && !(++aON < 128))
				for (fi = 5, a5 = f8.f9 - 1; 0 <= a5; a5--) 1 === f4.fu[f8.fB[a5]] && 0 < fi-- && aOT(240, L(433, [f4.f5[f8.fB[a5]]]), 1, f8.fB[a5], dZ.pi, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.kX(!1)
	}, this.cQ = function() {
		for (var xk, aK = cv(), a5 = aOH.length - 1; 0 <= a5; a5--) xk = aK - (a5 + 1) * b6, 50 === aOH[a5].id ? (dO.drawImage(aOH[a5].canvas, cy.aZ - aOH[a5].aZ - aOK - aOI, xk), dO.drawImage(aOO, cy.aZ - aOK - aOI, xk)) : dO.drawImage(aOH[a5]
			.canvas, cy.aZ - aOH[a5].aZ - aOI, xk)
	}, this.aPB = function(id, hF) {
		var aOo, aPC = dZ.aH6;
		0 === id ? aOo = L(437) : 1 === id ? (aOo = L(438), aPC = dZ.aHT) : 2 === id ? aOo = L(439) : 3 === id ? aOo = L(440) : (aOo = aV.hf.hg(hF), aPC = 5 === id ? dZ.aHT : dZ.f6), aOi(74, 0), aOT(0, aOo, 74, 0, dZ.dc, aPC, -1, !1, void 0,
			void 0, !0)
	}
}

function wS() {
	this.wT = 0, this.ar = function() {
		rf.ar(), eC.ar(), cy.ar(), f.i.ar(), aCg.aPD(), tX.tZ.ar(), bV.bW && (bV.bW = !1, eW.cQ())
	}
}

function aJ5(la) {
	this.l = -1, this.pow = -1;
	var aPE = la || {},
		aPF = this,
		aPG = null,
		aPH = null,
		aPI = null,
		aPJ = null,
		aPK = null,
		aPL = [],
		aPM = 0,
		aPN = null,
		aPO = null,
		aPP = null,
		aPQ = !1,
		aPR = null,
		aPU = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function aPV(aPW, a90, className) {
		aPW = document.createElement(aPW);
		return className && (aPW.className = className), a90 && a90.appendChild(aPW), aPW
	}

	function aPX(a2, a90, action) {
		a90 = aPV("button", a90);
		return a90.type = "button", a90.textContent = a2, a90.addEventListener("click", action), a90
	}

	function aPY(a90) {
		a90 = aPV("canvas", a90);
		return a90.width = a90.height = 128, a90
	}

	function aPd(canvas, aPe) {
		for (var canvas = canvas.getContext("2d"), data = (aPO || (aPO = canvas.createImageData(128, 128), aPP = new Uint32Array(aPO.data.buffer)), aPe), aPa = aPP, aPb = 0, position = 0, color = 0; position < 16384; aPb += 6, color ^= 1) {
			for (var go = aPb >> 3, r2 = position + ((data[go] << 8 | data[1 + go]) >> 10 - (7 & aPb) & 63), rP = color ? aPU : 4294967295, a5 = position; a5 < r2; a5++) aPa[a5] = rP;
			position = r2
		}
		canvas.putImageData(aPO, 0, 0)
	}

	function aPf() {
		if (aPG) {
			aPG.setAttribute("aria-busy", String(aPQ)), aPK.disabled = aPQ, aPJ.disabled = aPQ || !aPM;
			for (var a5 = 0; a5 < aPL.length; a5++) aPL[a5].disabled = aPQ, aPL[a5].setAttribute("aria-pressed", String(Boolean(aPM & 1 << a5)))
		}
	}

	function aPh(event) {
		var aPi, aFC;
		"Escape" === event.key && (event.preventDefault(), aPF.close()), "Tab" === event.key && aPG && (aPi = (aFC = aPG.querySelectorAll("button:not(:disabled)"))[0], aFC = aFC[aFC.length - 1], event.shiftKey && document.activeElement === aPi ? (
			event.preventDefault(), aFC.focus()) : event.shiftKey || document.activeElement !== aFC || (event.preventDefault(), aPi.focus()))
	}

	function aPk() {
		aPR = document.activeElement, (aPG = aPV("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), aPG.setAttribute("aria-modal", "true"), aPG.setAttribute("aria-label", "Select all images matching the reference");
		aPV("style", aPG).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var aPl = aPV("div", aPG, "captcha-reference-row");
		aPV("span", aPl, "captcha-reference-label").textContent = "Find All:", (aPI = aPY(aPl)).className = "captcha-reference", aPI.setAttribute("aria-label", "Reference image"), aPH = aPV("div", aPG, "captcha-grid");
		for (var a5 = 0; a5 < 16; a5++) aPL.push(function(go) {
			var button = aPX("", aPH, function() {
				aPQ || (aPM ^= 1 << go, aPf())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (go + 1)), button.setAttribute("aria-pressed", "false"), aPY(button).setAttribute("aria-hidden", "true"), button
		}(a5));
		var aPl = aPV("div", aPG, "captcha-actions"),
			aPo = aPX("Close", aPl, function() {
				aPF.close()
			});
		aPK = aPX("Reload", aPl, aPp), aPJ = aPX("Verify", aPl, aPq), aPG.addEventListener("keydown", aPh), aPF.resize(), aPf(), aPo.focus()
	}

	function aPp() {
		aPQ || (aPF.close(), f.g.sr(0, 0, vK.l, vK.pow))
	}

	function aPq() {
		var ss, st;
		!aPQ && aPM && (ss = aPM, st = aPN, aPF.close(), f.g.sr(ss, st, vK.l, vK.pow))
	}
	this.show = function(aPr, st, l, pow) {
		this.l = l, this.pow = pow, aPN = st, aPG || aPk(), aPd(aPI, aPr[0]);
		for (var b4 = 0; b4 < 16; b4++) aPd(aPL[b4].firstChild, aPr[b4 + 1]);
		aPM = 0, aPQ = !1, aPf(), "function" == typeof aPE.aPs && aPE.aPs()
	}, this.resize = function() {
		var size;
		aPG && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), aPG.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (aPG) {
			for (var aPt = aPG.querySelectorAll("canvas"), a5 = 0; a5 < aPt.length; a5++) aPt[a5].width = aPt[a5].height = 0;
			aPG.remove(), aPG = aPH = aPI = aPJ = aPK = null, aPO = aPP = aPN = null, aPM = 0, aPQ = !(aPL = []), aPR && document.body.contains(aPR) && aPR.focus(), aPR = null, "function" == typeof aPE.aPu && aPE.aPu()
		}
	}
}

function aIT() {
	this.i8 = new aPv
}

function aIZ() {
	var aPw, au;
	this.a4 = function() {
		for (var a5 = (au = new Uint16Array(101)).length - 1; 0 <= a5; a5--) au[a5] = aQ.aR(32768 * a5, 100);
		this.jd(0)
	}, this.value = function(bB) {
		return au[bB]
	}, this.jc = function() {
		return aQ.aR(aPw - 1, 2)
	}, this.jd = function(jb) {
		aPw = 2 * jb % 32768 + 1
	}, this.random = function() {
		return aPw = 167 * aPw % 32768
	}, this.fk = function(a3K) {
		return aQ.aR(a3K * this.random(), 32768)
	}, this.pg = function(bB) {
		return 0 !== bB && this.random() < this.value(bB)
	}, this.aPx = function(a6, av) {
		return a6 + this.fk(av - a6)
	}
}

function aIl() {
	this.size = 0, this.go = 0, this.j = null, this.a4 = function(j) {
		this.go = 0, this.j = j, this.size = j.length
	}, this.d = function(aEC) {
		return this.a4(new Uint8Array(this.yu(aEC))), this.j
	}, this.kD = function() {
		this.j = null
	}, this.e = function(size, aAm) {
		for (var j = this.j, r2 = this.go + size - 1, a5 = this.go; a5 <= r2; a5++) j[a5 >> 3] |= (aAm >> r2 - a5 & 1) << 7 - (7 & a5);
		this.go += size, this.go > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aG = function(size, aAm) {
		var av = size >> 1,
			ba = 1 << av;
		this.e(size - av, aQ.aR(aAm, ba)), this.e(av, aAm % ba)
	}, this.aPy = function(size) {
		for (var j = this.j, r2 = this.go + size, a5 = this.go; a5 < r2; a5++) j[a5 >> 3] &= 255 ^ 128 >>> (7 & a5)
	}, this.yu = function(aEC) {
		return aEC + 7 >> 3
	}, this.aPz = function(au, y7, r2, aQ0) {
		for (var a5 = y7; a5 < r2; a5++) this.e(aQ0, au[a5])
	}
}

function a8n() {
	var lE, lF, aQ1, lR;

	function lI() {
		a75.kD(), d7.lN()[19] = null, d7.lO()
	}

	function aQ9() {
		aQC(), aQA()
	}

	function aQC() {
		aQ1.k2.lastChild && d7.removeChild(aQ1.k2, aQ1.k2.lastChild)
	}

	function aQA() {
		var aQD = aS.aAU(cr.data);
		cr.data.canvas = aS.aF0(aQD, cr.data.mapSeed).bX, aQB()
	}

	function aQB() {
		var gj = cr.data.canvas;
		gj.style.width = "100%", aQ1.k2.appendChild(gj)
	}
	this.a78 = function(gj) {
		cr.data.canvas && aQC(), cr.data.canvas = gj, aQB()
	}, this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(441), [new ir("⬅️ " + L(4), lI)]), 2 === cr.data.mapType && a75.a4(), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(442), L(443), L(444)],
			value: cr.data.mapType
		}, function(go) {
			2 === (cr.data.mapType = go) ? (a75.a4(), cr.data.canvas = null) : (cr.data.passableWater = cr.data.passableMountains = 1, a75.kD()), d7.dF(20)
		})), 2 <= cr.data.mapType && (lV.lb(new a52), lV.lb(new aDy({
			value: cr.data.passableWater
		}, L(445), function(value) {
			cr.data.passableWater = value
		})), lV.lb(new aDy({
			value: cr.data.passableMountains
		}, L(446), function(value) {
			cr.data.passableMountains = value
		})));
		lR.push(lV)
	}(lR = []), function(lR) {
		if (0 === cr.data.mapType) {
			for (var lV = new lW, la = (lV.lX(L(441)), []), a5 = 0; a5 < aS.bJ.w2.length; a5++) la.push(aS.bJ.bK[aS.bJ.w2[a5]].name);
			lV.lY(new lZ({
				la: la,
				value: cr.data.mapProceduralIndex
			}, function(go) {
				cr.data.mapProceduralIndex = go, aQ9()
			})), lR.push(lV)
		}
	}(lR), function(lR) {
		if (1 === cr.data.mapType) {
			for (var lV = new lW, la = (lV.lX(L(441)), []), a5 = 0; a5 < aS.bJ.w3.length; a5++) la.push(aS.bJ.bK[aS.bJ.w3[a5]].name);
			lV.lY(new lZ({
				la: la,
				value: cr.data.mapRealisticIndex
			}, function(go) {
				cr.data.mapRealisticIndex = go, aQ9()
			})), lR.push(lV)
		}
	}(lR), function(lR) {
		var lV;
		2 === cr.data.mapType && ((lV = new lW).lX(L(447)), lV.lb(new lc(r.buffer.data[162], 1)), lV.lX(L(448), "0.8em"), lV.lb(new k0([new ir(L(449), function() {
			return a75.a73(), !0
		}).button])), lR.push(lV))
	}(lR), function(lR) {
		var lV, tf;
		2 === cr.data.mapType && ((lV = new lW).lX(L(450)), tf = new lc({
			go: -1,
			value: cr.data.mapName
		}, 0, 0, function(ej) {
			cr.data.mapName = ej.target.value = ej.target.value.slice(0, 20)
		}), lV.lb(tf), lR.push(lV))
	}(lR), function(lR) {
		var lV, tf, a4y;
		0 === cr.data.mapType && ((lV = new lW).lX("Seed"), tf = new lc({
			go: -1,
			value: cr.data.mapSeed
		}, 1, 0, function(ej) {
			ej = Math.abs(Math.floor(ej.target.value)) % 16384;
			cr.data.mapSeed !== ej && (cr.data.mapSeed = ej, aQ9())
		}), a4y = new ir(L(258), function(ej) {
			var jb = Math.floor(16384 * Math.random());
			if (cr.data.mapSeed !== jb) return tf.ej.value = cr.data.mapSeed = jb, aQ9(), !0
		}), lV.lb(tf), lV.lb(new k0([a4y.button])), lR.push(lV))
	}(lR), function(lR) {
		(aQ1 = new lW).lX(L(451)), 2 !== cr.data.mapType ? aQA() : cr.data.canvas && aQB();
		lR.push(aQ1)
	}(lR), lR))
}

function a23() {
	a3v = 0, aQE = 2048, a4D = new Uint32Array(4 * aQE), aQF = 0, aQG = new Uint32Array(aQE), aQH = new Uint8Array(aS.aT * aS.aU)
}

function a3H(player) {
	a3r = player, a3p = !1, aQI(), aQJ();
	for (var a5 = iH.iI(a3r) - 1; 0 <= a5; a5--) a3s = a5, aQK();
	a3p && aQL()
}

function aQL() {
	iE.aOD(), iE.aOE()
}

function aQK() {
	a3f = iH.iX(a3r, a3s), a3t = iH.iV(a3r, a3s), a49 = iH.aQM(a3r, a3s), aQN(), (0 !== a3v && (aQO(), aQP()) ? a3c : a3h)()
}

function aQP() {
	if (!((a47 = aQ.aR(a3t, a3v)) > cr.a1X)) {
		if (!a49) return !1;
		var aQQ = a3v * (1 + cr.a1X);
		a3t += aV.et.mz(a3r, aQQ - a3t), a47 = aQ.aR(a3t, a3v)
	}
	return !0
}

function aQO() {
	for (var a5 = a3v - 1; 0 <= a5; a5--) aQH[aQ.aR(a4D[a5], 4)] = 0
}

function a3h() {
	1 === iH.iI(a3r) && oQ.pP(a3r);
	var kG = aV.et.oL(a3r, a3t);
	gK.n6(a3r, a3t - kG, 12), iH.aQR(a3r, a3s)
}

function aQI() {
	for (var player = a3r, g3 = f4.g3, u = Math.min(g3[player].length, aQE), fi = 0, aQS = aQG, a5 = u - 1; 0 <= a5; a5--) aQS[fi++] = g3[player][a5];
	aQF = fi
}

function aQJ() {
	for (var a5 = f4.g3[a3r].length - 1; 0 <= a5; a5--) fK.o9(f4.g3[a3r][a5]) && fK.a4E(f4.g3[a3r][a5], a3r);
	f4.g3[a3r] = []
}

function aQN() {
	a3v = 0, (a3f === cr.fc ? aQT : aQU)()
}

function aQU() {
	for (var bB, dp, a5, ie = fK.ie, ba = 3; 0 <= ba; ba--)
		for (a5 = aQF - 1; 0 <= a5; a5--) bB = aQG[a5] + ie[ba], dp = aQ.aR(bB, 4), 0 === aQH[dp] && fK.ii(bB) && fK.iA(bB) === a3f && (aQH[dp] = 1, a4D[a3v++] = bB)
}

function aQT() {
	for (var bB, dp, a5, ie = fK.ie, ba = 3; 0 <= ba; ba--)
		for (a5 = aQF - 1; 0 <= a5; a5--) bB = aQG[a5] + ie[ba], dp = aQ.aR(bB, 4), 0 === aQH[dp] && fK.fL(bB) && (aQH[dp] = 1, a4D[a3v++] = bB)
}

function vy() {
	var aQV = null,
		kA = 2e4,
		aQW = 0;
	this.ar = function() {
		bV.aw < kA || (kA = bV.aw + 1e4, 0 !== cT.id) || aQV || tX.tY() || (f.i.e4(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || f.g.sh(5) : kA = bV.aw + 1e3)
	}, this.gE = function(jA) {
		aQV = jA
	}, this.show = function() {
		return !(!aQV || bV.aw < aQW) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aQW = bV.aw + 6e4, (new aQX).show(aQV.a2, aQV.colors, aQV.id), !(aQV = null)))
	}
}

function a8x() {
	var lE, lF, lR;

	function aQe() {
		for (var colors = new Array(11), a5 = 0; a5 < 11; a5++) {
			var au = r.buffer.data[163 + a5].value.split(",");
			colors[a5] = new Uint8Array(3);
			for (var a6 = 0; a6 < 3; a6++) a6 < au.length && (colors[a5][a6] = Number(au[a6]))
		}
		return colors
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(270), [new ir("⬅️ " + L(4), function() {
		d7.lO()
	})]), lF = new lJ(lE.lK, ((lR = []).push(function() {
		var lV = new lW;
		return lV.lX(L(452)), lV.a4n(f.i.eJ("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", lV.a4n("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), lV
	}()), lR.push(function() {
		var lV = new lW,
			a2 = (lV.lX(L(453)), r.buffer.data[174].value),
			a4z = lV.a50(a2.length + " / 180"),
			a5b = (a4z.style.textAlign = "center", new le(0, 1, function(ej) {
				var ej = ej.target.value,
					fi = ej.length;
				a4z.textContent = fi + " / 180", fi <= 180 && r.md.pE(174, ej)
			}));
		return a5b.ej.rows = 6, a5b.ej.style.fontSize = "1em", a5b.lf(a2), lV.lb(a5b), lV
	}()), lR.push(function() {
		var lV = new lW;
		lV.lX(L(454));
		for (var a5 = 0; a5 < 11; a5++) {
			var hH = lV.lb(new lc(r.buffer.data[163 + a5]));
			a5 && (hH.ej.style.marginTop = "0.6em")
		}
		return lV.lb(new k0([new ir(L(380), function() {
			for (var data = r.buffer.data, a5 = 163; a5 < 174; a5++) data[a5] && r.buffer.od(a5, data[a5].a6S);
			d7.lO(), d7.lN()[31] = null, d7.dF(31)
		}).button])), lV
	}()), lR.push(function() {
		var lV = new lW;
		return lV.lX("Targeting"), lV.a4n(L(381)), lV.lb(new lc(r.buffer.data[175], 0, 0)), lV
	}()), lR.push(function() {
		var lV = new lW;
		return lV.lX(L(451)), lV.lb(new k0([new ir(L(110), function() {
			(new aQX).show(r.buffer.data[174].value, aQe(), -1)
		}).button])), lV
	}()), lR.push(function() {
		var lV = new lW,
			aQf = (lV.lX(L(455)), lV.a4n(L(456)), new lc(r.buffer.data[176], 1, 0)),
			aQg = (lV.lb(aQf), new ir(L(457), function(ej) {
				return aQh.button.textContent === L(105) && f.i.e4(0) && (aV.d1.a4v(ej), a4w(), f.a4x.z(r.buffer.data[176].value, aQe(), r.buffer.data[175].value, r.buffer.data[174].value)), !0
			}, 1)),
			a4w = function() {
				aQh.button.textContent = L(104), aQg.j2(1), aQg.button.style.color = dZ.dc
			},
			aQh = new ir(L(104), function(ej) {
				return ej.textContent === L(104) ? (ej.textContent = L(105), aQg.j2(0), aQg.button.style.color = dZ.j1) : a4w(), !0
			});
		return lV.lb(new k0([aQh.button, aQg.button])), lV
	}()), lR))
}

function a8y() {
	var pw, a4Q, lR;
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), a4Q.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH("🔒 " + L(273), [new ir("⬅️ " + L(4), function() {
		d7.lO()
	})]), a4Q = new lJ(pw.lK, ((lR = []).push(function() {
		var lV = new lW,
			tf = (lV.a4n(f.i.eJ("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", lV.lX(L(106)), new lc({
				value: "",
				go: -1
			})),
			a5Y = (lV.lb(tf), lV.lX(L(176), "0.8em"), new lc({
				value: "",
				go: -1
			}, 0, 0)),
			a4u = (a5Y.ej.type = "email", a5Y.ej.autocomplete = "email", a5Y.ej.name = "email", a5Y.ej.inputMode = "email", a5Y.ej.spellcheck = !1, lV.lb(a5Y), new ir(L(458), function(ej) {
				return aV.d1.a4v(ej), f.a4x.s({
					action: 4,
					v: tf.ej.value.trim() + a5Y.ej.value.trim().substring(0, 63)
				}), !0
			}));
		return lV.lb(new k0([a4u.button])), lV
	}()), lR))
}

function aIa() {
	this.fO = new aQj, this.aQk = new aQl, this.aQm = new aQn, this.performance = new aQo, this.aQp = new aQq, this.aDn = new aQr, this.aQs = new aDF, this.aQt = new aQu, this.kf = new a4F, this.a4 = function() {
		this.fO.a4(), this.aQm.a4(), this.performance.a4(), this.aQp.a4(), this.aDn.a4()
	}, this.ar = function() {
		this.performance.ar(), this.fO.ar(), this.aQm.aQv()
	}
}

function aQr() {
	function aR9(player, oK, aQy) {
		3 <= aQy && 2142 < bV.es() && (oK === cr.fc || f4.g2[oK] < aQ.aR(f4.g2[player], 20)) && kj.aR1(player, 20)
	}

	function aRC(player, hF, oK, aQy) {
		3 <= aQy && aQy < 6 && aQ.aR(f4.g2[player], 8) > f4.g2[oK] && (hF = Math.max(aQ.aR(11 * f4.g2[oK], 5), aQ.aR(f4.g2[player], 10)));
		aQy = f4.g3[player].length;
		fN.aQp.aRM(player, oK), fN.aQp.aRN(player, oK, aQy, hF)
	}

	function aR8(player, hF) {
		var oK = cr.fc,
			u = f4.g3[player].length;
		fN.aQp.aRO(player), f4.g3[player].length !== u && fN.aQp.aRN(player, oK, u, hF)
	}
	this.aDo = new Uint8Array(cr.fc), this.a4 = function() {
		this.aDo.fill(0)
	}, this.aQw = function(player, hF) {
		var aQx, aQy, aQz, aR0;
		iH.oP(player) && (aQx = m9.mA(player), 3 <= (aQy = kj.hF[player]) && aQy < 6 && (hF = Math.max(f4.g2[player] - aQx, hF)), aQz = f4.g5[player].length, aR0 = f4.g4[player].length, 30 * f4.g0[player] > cr.lv && fD[player] < 10 && 100 *
			aR0 <= aQz && kj.aR1(player, 10), cr.f0 ? function(player, hF, aQy, aQx) {
				var oK;
				if (fN.aQp.aR4(player, !1) || fN.aQp.aR5(player, !1)) {
					if (!fN.aQp.aR6(player))
						if (fN.aQp.aR7()) aR8(player, hF), aR9(player, cr.fc, aQy);
						else {
							if (fj.pg(kj.aRA[aQy])) oK = fN.aQp.aRB(player);
							else {
								if (fN.aQp.aRD() && fj.pg(kj.aRE[aQy]) && fN.aQp.aRF(), 6 === aQy) return aRC(player, hF, fN.aQp.aRG(), aQy);
								oK = fN.aQp.aRH(player)
							}
							aRC(player, hF, oK, aQy), aR9(player, oK, aQy)
						}
				} else am.c4.ar(player) || fN.aQs.ar(player) || ! function(player, hF, aQy, aQx) {
					var aDo = fN.aDn.aDo;
					aDo[player] = 0;
					var aRJ = fF.fI[player];
					if (0 !== aRJ) {
						var aRK = f4.g2[player],
							g0 = f4.g0;
						if (player < cr.fb && (hF = aRK), !(aRK < g0[player] || 5 === aQy && aRK < aQx || 4 === aQy && aRK < aQ.aR(aQx, 2))) {
							dA.aEf(aRJ);
							for (var u = gx.aDR[0], aBi = gx.aBi, a5 = fj.fk(u), av = 0; av < u; av++) {
								var jA = aBi[(av + a5) % u];
								if (aDo[jA]) return i2.oM.aDl(player, jA, hF)
							}
							var mr = am.i.mr;
							for (av = 0; av < u; av++)
								if (jA = aBi[(av + a5) % u], mr[jA] && jA !== player) return i2.oM.aDl(player, jA, hF)
						}
					}
				}(player, hF, aQy, aQx)
			}(player, hF, aQy, aQx) : (!aR0 || aQz && (aQz < aR0 && !fj.fk(10) || 100 * aR0 <= aQz && fj.fk(3) || !fj.fk(8))) && am.c4.ar(player) || function(player, hF, aQy) {
				fN.aQp.aR4(player, !0) || fN.aQp.aR5(player, !0) ? fN.aQp.aR6(player) || (fN.aQp.aR7() ? aR8(player, hF) : fj.pg(kj.aRA[aQy]) ? aRC(player, hF, fN.aQp.aRB(player), aQy) : 5 === aQy ? aRC(player, hF, fN.aQp.aRL(), aQy) : (fN
					.aQp.aRD() && fj.pg(kj.aRE[aQy]) && fN.aQp.aRF(), aRC(player, hF, 6 === aQy ? fN.aQp.aRG() : fN.aQp.aRH(player), aQy))) : fN.aQs.ar(player)
			}(player, hF, aQy))
	}
}

function aPv() {
	this.i9 = function(gt) {
		var aDO;
		return aS.a3k(aS.bL) && cr.data.passableMountains && (aDO = fK.yL(gt), this.aRP(cr.gJ, aDO) || this.aRQ(cr.gJ, aDO)) && 0 !== (aDO = function(a7q) {
			for (var aJ = aj.fQ(a7q), aK = aj.fR(a7q), max = Math.max(aS.aT, aS.aU) - 2, aRV = max * max, o6 = !1, aRW = 0, h3 = 0; h3 < max; h3++) {
				var aRX, fM = function(aJ, aK, h3) {
					for (var a5 = 0; a5 <= h3; a5++)
						for (var a6 = -1; a6 < 2; a6 += 2)
							for (var av = -1; av < 2; av += 2)
								for (var jA = 0; jA < 2; jA++) {
									var gt = function(aJ, aK) {
										if (aj.aRZ(aJ, aK)) {
											aJ = aj.hu(aJ, aK), aK = aj.i5(aJ);
											if (fK.o9(aK) && fK.aK7(aK)) return aJ
										}
										return 0
									}(aJ + jA * a6 * a5 + (1 - jA) * av * h3, aK + jA * av * h3 + (1 - jA) * a6 * a5);
									if (gt) return gt
								}
					return 0
				}(aJ, aK, h3);
				fM && (aRX = aj.aRY(aJ, aK, fM)) < aRV && (aRW = fM, aRV = aRX, o6 || (o6 = !0, max = Math.floor(Math.sqrt(aRX)) + 1))
			}
			return aRW
		}(aj.aAw(gt))) && (gt = aj.i5(aDO), fK.fL(gt) || (gt = fK.iA(gt)) !== cr.gJ && iE.iL(gt, cr.gJ)) ? aDO : 0
	}, this.aRS = function(player, fM) {
		fM = aj.i5(fM);
		if (fK.o9(fM)) {
			if (fK.fL(fM)) gx.a6w[0] = cr.fc;
			else if (fK.iA(fM) !== gx.a6w[0]) return !1;
			for (var fI = function(gt) {
					var ie = fK.ie,
						fI = [];
					loop: for (var ba = 3; 0 <= ba; ba--) {
						var hE = gt + ie[ba];
						if (fK.i6(hE)) {
							for (var id = fK.yL(hE), a5 = 0; a5 < fI.length; a5++)
								if (id === fI[a5]) continue loop;
							gx.aRU[fI.length] = hE, fI.push(id)
						}
					}
					return fI
				}(fM), u = fI.length, a5 = 0; a5 < u; a5++)
				if (this.aRP(player, fI[a5]) || this.aRQ(player, fI[a5])) return gx.aRU[0] = gx.aRU[a5], !0
		}
		return !1
	}, this.aRP = function(player, aDO) {
		for (var g6 = f4.g6[player], u = g6.length, aDP = Math.max(aQ.aR(u, 12), 1), ie = fK.ie, a5 = 0; a5 < u; a5 += aDP)
			for (var hX = g6[a5], ba = 3; 0 <= ba; ba--) {
				var hE = hX + ie[ba];
				if (fK.i6(hE) && aDO === fK.yL(hE)) return !0
			}
		return !1
	}, this.aRQ = function(player, aDO) {
		for (var g6 = f4.g6[player], u = g6.length, ie = fK.ie, a5 = 0; a5 < u; a5++)
			for (var hX = g6[a5], ba = 3; 0 <= ba; ba--) {
				var hE = hX + ie[ba];
				if (fK.i6(hE) && aDO === fK.yL(hE)) return !0
			}
		return !1
	}
}

function a1e() {
	this.a4 = function() {
		8 === cr.fW && ew.aOx()
	}, this.aRa = function(aRb) {
		var elo = cr.data.elo,
			aJi = (elo[aRb] - elo[1 - aRb]) / 10,
			aJi = 8 / (1 + Math.pow(2, aJi / 32)),
			aJi = Math.floor(10 * aJi + .5),
			aRd = elo[aRb] + aJi,
			aP2 = this.aOy(aRd),
			elo = this.aOy(elo[1 - aRb] - aJi),
			aJi = (0 === aRb ? ew.aP1(aP2, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : ew.aP1(elo, aP2, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aRd * aQ.sqrt(aRd) >> 8),
			elo = ((1 + cr.ze) * aJi / 100).toFixed(2);
		aRb === cr.gJ ? ew.f3(640, L(459, [elo]), 40, 0, dZ.dc, dZ.f6, -1, !1) : ew.f3(640, L(460, [f4.f5[aRb], elo]), 40, 0, dZ.dc, dZ.f6, -1, !1)
	}, this.aOy = function(elo) {
		return 16e3 === (elo = aQ.ld(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function a8t() {
	var lE, lF, lG, lR;

	function lI() {
		lM(), 2 !== cr.data.iIncomeType && (cr.data.iIncomeData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		2 === cr.data.iIncomeType && aV.aW.lP(lG.lQ(), cr.data.iIncomeData, 255)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(461), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(6), L(7), L(8)],
			value: cr.data.iIncomeType
		}, function(go) {
			lM(), 2 !== go || cr.data.iIncomeData || (cr.data.iIncomeData = new Uint8Array(cr.fc), cr.data.iIncomeData.fill(32)), cr.data.iIncomeType = go, d7.dF(27)
		})), lR.push(lV)
	}(lR = []), function(lR) {
		var lV;
		1 === cr.data.iIncomeType && ((lV = new lW).lX("Value"), lV.lb(new lc({
			go: -1,
			value: cr.data.iIncomeValue
		}, 1, 0, function(ej) {
			var value = aQ.ld(Math.floor(ej.target.value), 0, 255);
			ej.target.value = cr.data.iIncomeValue = value
		})), lR.push(lV))
	}(lR), function(lR) {
		var lV;
		2 === cr.data.iIncomeType && ((lV = new lW).lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.iIncomeData, 4)), lV.lb(lG), lR.push(lV))
	}(lR), lR))
}

function aIO() {
	var aRg, aRh, aZ, aJ, aK, aRi, aRj;
	this.a4 = function() {
		aRg = new Array(2), aRh = new Array(2), this.a0v = !1, aRj = aRi = ha = hZ = 0, hY = 1, this.resize()
	}, this.resize = function() {
		aZ = (aZ = Math.floor((cT.cU.cV() ? .072 : .0502) * cy.l7)) < 8 ? 8 : aZ;
		for (var a5 = 1; 0 <= a5; a5--) aRg[a5] = document.createElement("canvas"), aRg[a5].width = aZ, aRg[a5].height = aZ, aRh[a5] = aRg[a5].getContext("2d", {
			alpha: !0
		});
		this.m0(),
			function() {
				for (var aRu = Math.floor(1 + aZ / 20), a5 = 1; 0 <= a5; a5--) aRh[a5].clearRect(0, 0, aZ, aZ), aRh[a5].fillStyle = dZ.aFd, aRh[a5].beginPath(), aRh[a5].arc(aZ / 2, aZ / 2, aZ / 2 - aRu, 0, 2 * Math.PI), aRh[a5].fill(), aRh[a5]
					.lineWidth = aRu, aRh[a5].fillStyle = dZ.dc, aRh[a5].strokeStyle = dZ.dc, aRh[a5].beginPath(), aRh[a5].arc(aZ / 2, aZ / 2, aZ / 2 - aRu, 0, 2 * Math.PI), aRh[a5].stroke(), aNK(aRh[a5], 0, 0, aZ, aRu, .3, 0 === a5)
			}()
	}, this.a2E = function() {
		return -hZ / hY
	}, this.cv = function() {
		return -ha / hY
	}, this.a13 = function(a7H, l8) {
		hZ = hY * a7H - l8
	}, this.a14 = function(a7I, l9) {
		ha = hY * a7I - l9
	}, this.dB = function(aRm, a2U) {
		return cr.d9 || ! function(aRm, a2U) {
			return Math.pow(aRm - (aJ + aZ / 2), 2) + Math.pow(a2U - (aK + aZ / 2), 2) < aZ * aZ / 4 || Math.pow(aRm - (aJ + aZ / 2), 2) + Math.pow(a2U - (aK + 2 * aZ), 2) < aZ * aZ / 4
		}(aRm, a2U) || r.buffer.data[8].value ? (gQ.r2() && (this.a0v = !0, aRi = aRm, aRj = a2U), !1) : a2U < aK + 1.25 * aZ ? this.rG(Math.floor(cy.aZ / 2), Math.floor(cy.b6 / 2), -200) : this.rG(Math.floor(cy.aZ / 2), Math.floor(cy.b6 /
			2), 200)
	}, this.rB = function(aRm, a2U) {
		var aRn, aRo, h1, h2;
		return !gQ.r2() || (aRn = hZ, aRo = ha, hZ += h1 = aRi - aRm, ha += h2 = aRj - a2U, fm.rB(h1, h2), this.aRp(), aRi = aRm, aRj = a2U, aRn !== hZ) || aRo !== ha
	}, this.rG = function(jp, jq, deltaY) {
		var ku;
		if (gQ.r2()) {
			if (0 < deltaY) ku = (ku = 500 / (500 + deltaY)) < .5 ? .5 : ku;
			else {
				if (!(deltaY < 0)) return !1;
				ku = 2 < (ku = (500 - deltaY) / 500) ? 2 : ku
			}
			this.aRq(jp, jq, ku), bV.bW = !0
		}
		return !0
	}, this.aRq = function(aJ, aK, gt) {
		var xL;
		gt = xL = (xL = 1024 < (xL = gt) * hY ? 1024 / hY : xL) * hY < .125 ? .125 / hY : xL, fm.zoom(gt, aJ, aK),
			function(xL, jp, jq) {
				hY *= xL, hZ = (hZ + jp) * xL - jp, ha = (ha + jq) * xL - jq, dM.aRp()
			}(gt, aJ, aK)
	}, this.aRp = function() {
		var u0 = cy.aZ / 16,
			nN = 0,
			aRt = cy.b6 / 16,
			nO = 0;
		hZ < -cy.aZ + u0 && (nN = -cy.aZ + u0 - hZ), hZ > hY * aS.aT - u0 && (nN = hY * aS.aT - u0 - hZ), ha < -cy.b6 + aRt && (nO = -cy.b6 + aRt - ha), ha > hY * aS.aU - aRt && (nO = hY * aS.aU - aRt - ha), hZ += nN, ha += nO, a15.a16(), fm.xK(
			nN, nO)
	}, this.m0 = function() {
		aJ = cy.aZ - aZ - cz.gap, aK = Math.floor(cy.b6 / 2 - 1.25 * aZ)
	}, this.cQ = function() {
		r.buffer.data[8].value || (dO.drawImage(aRg[0], aJ, aK), dO.drawImage(aRg[1], aJ, Math.floor(aK + 3 * aZ / 2)))
	}
}

function aIH() {
	var aRv, aRw, aRx;
	aRv = [32, 65, 191, 913, 931], aRw = [64, 127, 688, 930, 1155], aRx = new Array(aRv.length + 1);
	for (var a5 = 0; a5 < aRx.length; a5++) {
		aRx[a5] = 0;
		for (var a6 = a5 - 1; 0 <= a6; a6--) aRx[a5] += aRw[a6] - aRv[a6]
	}

	function aS4(jA) {
		for (var a5 = aRv.length - 1; 0 <= a5; a5--)
			if (jA >= aRv[a5] && jA < aRw[a5]) return a5;
		return -1
	}
	this.aRz = function(v) {
		return 0 !== (v = v.trim()).indexOf("Bot ") && 0 !== v.indexOf("[Bot] ") && function(v, aS1, aS2) {
			var u = (v = v.trim()).length;
			if (u < aS1 || aS2 < u) return !1;
			for (var jA, aS3 = 0, a5 = 0; a5 < u; a5++)
				if (jA = v.charCodeAt(a5), aS3 += 65 <= jA && jA <= 90 || 1040 <= jA && jA <= 1071 ? 1 : 0, -1 === aS4(jA)) return !1;
			if (3 < aS3 && aS3 > Math.floor(u / 2)) return !1;
			return !0
		}(v, 3, 20)
	}, this.aB = function(v) {
		for (var u = (v = v.trim()).length, au = [], a5 = 0; a5 < u; a5++) {
			var jA, bB = aS4(jA = v.charCodeAt(a5));
			au.push(aRx[bB] + jA - aRv[bB])
		}
		return au
	}, this.b8 = function(au) {
		for (var jA, av, v = "", u = au.length, a5 = 0; a5 < u; a5++)
			for (av = 1; av < aRx.length; av++)
				if (au[a5] < aRx[av]) {
					jA = aRv[av - 1] + au[a5] - aRx[av - 1], v += String.fromCharCode(jA);
					break
				} return v
	}, this.aS5 = function(v) {
		for (var au = this.aB(v), result = "", a5 = 0; a5 < au.length; a5++) result = (result += au[a5] < 10 ? "00" : au[a5] < 100 ? "0" : "") + au[a5].toString(10);
		return result
	}, this.aS6 = function(v) {
		for (var au = new Array(Math.floor(v.length / 3)), a5 = 0; a5 < v.length; a5 += 3) au[Math.floor(a5 / 3)] = parseInt(v.substring(a5, a5 + 3));
		return this.b8(au)
	}, this.aS7 = function(v) {
		for (var kv, au = [v.length], a5 = 0; a5 < v.length; a5++) au[a5] = v.charCodeAt(a5) - 48;
		var result = "";
		for (a5 = 0; a5 < v.length; a5++) a5 === v.length - 1 || 51 < 10 * au[a5] + au[a5 + 1] ? result += au[a5].toString() : (kv = 10 * au[a5] + au[a5 + 1], result += String.fromCharCode(kv + (kv < 26 ? 65 : 71)), a5++);
		return result
	}, this.aS8 = function(v) {
		for (var jA, result = "", a5 = 0; a5 < v.length; a5++) 48 <= (jA = v.charCodeAt(a5)) && jA < 58 ? result += String.fromCharCode(jA) : 65 <= jA && jA < 75 ? result += "0" + (jA - 65).toString() : 75 <= jA && jA < 91 ? result += (jA - 65)
			.toString() : 97 <= jA && jA < 123 && (result += (jA - 71).toString());
		return result
	}, this.aS9 = function(v) {
		for (var u = v.length, au = [], a5 = 0; a5 < u; a5++)(jA = v.charCodeAt(a5)) < 58 ? au.push(v[a5]) : (jA -= jA < 91 ? 65 : 71, au.push(String(aQ.aR(jA, 10))), au.push(String(jA - 10 * aQ.aR(jA, 10))));
		var u = au.length - 2,
			jA = 0,
			a80 = [];
		for (a5 = 0; a5 < u; a5 += 3) a80[jA++] = parseInt(au[a5] + au[a5 + 1] + au[a5 + 2]);
		return a80
	}, this.aSA = function() {
		for (var jn, aSB = "", a5 = 0; a5 < 6; a5++) jn = 48 + fj.random() % 36, jn += 58 <= jn ? 39 : 0, aSB += String.fromCharCode(jn);
		return aSB
	}
}

function ct(aSC, aSD, aSE) {
	this.aJ = 0, this.aK = 0, this.aZ = 0, this.b6 = 0, this.resize = function() {
		this.b6 = Math.min(aV.d1.nu(aSE || .5) * aSC[1] * cy.l7, cy.b6 - 2 * cz.gap), this.aZ = Math.min(this.b6 * (aSC[0] / aSC[1]), cy.aZ - 2 * cz.gap), this.b6 = aSC[1] * this.aZ / aSC[0], this.aJ = cz.gap + aSD[0] * (cy.aZ - this.aZ - 2 * cz
			.gap), this.aK = cz.gap + aSD[1] * (cy.b6 - this.b6 - 2 * cz.gap)
	}, this.aSF = function() {
		return this.aJ + .5 * this.aZ
	}
}

function aIR() {
	var aSG, aSH, aL9, aSI, aSJ, aSK, aSL, aSM, aSN, aL8, aSO, aEP, aSP, aSQ = 1,
		aSS = 0;

	function aST(aSU) {
		aSU ? aSP = (aSP + 1) % f.i.dt : (f.i.close(aSP, 3280), aSQ ? aSQ = 0 : (aSP = (aSP + 1) % f.i.dt, f.i.close(aSP, 3280))), aEP = bV.aw, eC.eD = aSS, f.i.e2(aSP, 4, 1) && f.a94.aL1(aSP)
	}

	function aSV() {
		if (0 !== aSP) return 1 === aSP && __fx.customLobby.isActive() ? (ec.ed(3249), __fx.customLobby.setActive(!1)) : void aST();
		ec.ed(3249)
	}

	function aSa(aK, uD, aMe) {
		var dg = Math.floor((cy.aZ - aSI) / 2) + aSL,
			hb = dg + Math.floor(aMe * (aSI - 2 * aSL));
		dO.lineWidth = uD, dO.beginPath(), dO.moveTo(dg, aK), dO.lineTo(hb, aK), dO.lineTo(Math.floor(dg - aSL + aMe * aSI), aK + aL9), dO.lineTo(dg - aSL, aK + aL9), dO.closePath()
	}
	this.a2a = 1, this.eF = 0, this.eD = 0, this.a4 = function() {
		tX.turnstile.aCX(), eW.setState(6), aSG = 0, aSH = 1, aSM = "rgba(0,220,120,0.4)", aSN = "rgba(0,0,0,0.8)", this.resize(), bV.bW = !0, aSQ = 1, aSP = this.a2a - 1, aSS = 0, aST(1)
	}, this.resize = function() {
		aSI = Math.floor((cT.cU.cV() ? .5 : .25) * cy.l7), aSJ = aSI + 12, aL9 = Math.floor(.125 * aSI), aSL = 3 * aL9, aSK = Math.floor(.225 * aSI), aSO = Math.floor(.3 * aL9), aL8 = aV.d1.d2(0, aSO)
	}, this.vB = function(l) {
		l === aSP && aSV()
	}, this.dB = function(aJ, aK) {
		var dg = Math.floor((cy.aZ - aSJ) / 2),
			dh = Math.floor(.5 * (cy.b6 - cz.gap - aL9 - aSK)) + aL9 + cz.gap;
		return dg < aJ && aJ < dg + aSJ && dh < aK && aK < dh + aSK && (this.aKx(), a2J.rB(aJ, aK, !1), !0)
	}, this.aKx = function() {
		f.i.ee(3260), __fx.customLobby.setActive(false), d7.i.vJ()
	}, this.ar = function() {
		6 === eW.eX() && (bV.aw > aEP + 12e3 && aSV(), 100 < (aSG += .07 * aSH * (aSG < 16 ? 5 + aSG : 84 < aSG ? 105 - aSG : 17)) ? (aSG = 100, aSH = -1) : aSG < 0 && (aSG = 0, aSH = 1), aSM = "rgba(0," + Math.floor(190 - 1.9 * aSG) + "," + Math
			.floor(120 - 1.2 * aSG) + "," + (.4 + .004 * aSG) + ")", aSN = "rgba(0," + Math.floor(1.9 * aSG) + "," + Math.floor(1.2 * aSG) + "," + (.8 - .004 * aSG) + ")", bV.bW = !0)
	}, this.cQ = function() {
		var aJ = Math.floor((cy.aZ - aSJ) / 2),
			aK = Math.floor(.5 * (cy.b6 - cz.gap - aL9 - aSK));
		! function(title, aK, uD, aMe) {
			dO.fillStyle = aSN, aSa(aK, uD, 1), dO.fill(), dO.fillStyle = aSM, aSa(aK, uD, aMe), dO.fill(), dO.strokeStyle = dZ.dc, aSa(aK, uD, 1), dO.stroke(),
				function(aSc, aK) {
					aV.d1.textAlign(dO, 1), aV.d1.textBaseline(dO, 1), dO.font = aL8, dO.fillStyle = dZ.dc, dO.fillText(aSc, Math.floor(.5 * cy.aZ), Math.floor(aK + .58 * aL9))
				}(title, aK)
		}(L(462), aK, 3, aSG / 100),
		function(aJ, aK, aZ, b6, a9Z) {
			dO.fillStyle = dZ.a2T, dO.fillRect(aJ, aK, aZ, b6), dO.lineWidth = 3, dO.strokeStyle = dZ.dc, dO.strokeRect(aJ, aK, aZ, b6);
			var u = Math.floor(.3 * b6);
			aV.d1.textAlign(dO, 1), aV.d1.textBaseline(dO, 1), dO.font = aV.d1.d2(0, u), dO.fillStyle = dZ.dc, dO.fillText(a9Z, Math.floor(aJ + aZ / 2), Math.floor(aK + b6 / 2 + .1 * u))
		}(aJ, aK + aL9 + cz.gap, aSJ, aSK, L(4))
	}
}

function aNj() {
	this.a2F = 28, this.a2A = 0, this.a2D = null;
	var aSd = this.a2G = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aSh(gp, aSi) {
		var aJ, aK, fM, h1, gj = aV.d1.bN(gp, gp),
			gq = aV.d1.getContext(gj, !0),
			gr = aV.d1.getImageData(gq, gp, gp),
			bb = gr.data,
			bA = (gp >> 1) - .5,
			aSj = .5 + bA;
		for (aSj *= aSj, aK = 0; aK < gp; aK++)
			for (aJ = 0; aJ < gp; aJ++) h1 = (h1 = aJ - bA) * h1 + (h1 = aK - bA) * h1, bb[fM = 4 * (aK * gp + aJ)] = aSi[0], bb[1 + fM] = aSi[1], bb[2 + fM] = aSi[2], bb[3 + fM] = (aSj - h1) * aSi[3] / aSj;
		return gq.putImageData(gr, 0, 0), gj
	}

	function kr(a5, gq, gj, gp) {
		var highlight, aJ, aK;
		0 !== f4.fv[a5] && 0 !== f4.g0[a5] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a5]) && (gp *= 2), aJ = f4.fw[a5] + f4.fy[a5] + 1 - gp - 2 >> 1, aK = f4.fx[a5] + f4.fz[a5] + 1 - gp - 2 >> 1, highlight ? gq
			.drawImage(gj[cr.f0 ? 9 === cr.fW && 5 === kj.hF[a5] ? 3 : fF.fI[a5] : a5 < cr.fb ? 1 : 0], aJ, aK, gp, gp) : gq.drawImage(gj[cr.f0 ? 9 === cr.fW && 5 === kj.hF[a5] ? 3 : fF.fI[a5] : a5 < cr.fb ? 1 : 0], aJ, aK))
	}
	this.a4 = function() {
		var dS;
		this.a2A = 700,
			function(dS) {
				var gp = dS.a2F;
				if (dS.a2G = [], aSd = [], cr.f0) {
					for (var a5 = 0; a5 <= cr.a1b; a5++) dS.a2G.push(aSh(gp, fF.a86[fF.fG[a5]])), aSd.push(aSh(gp >> 1, fF.a86[fF.fG[a5]]));
					9 === cr.fW && aSd.push(aSh(gp, fF.a86[1]))
				} else dS.a2G.push(aSh(gp, fF.a86[7])), dS.a2G.push(aSh(gp, fF.a86[4])), aSd.push(aSh(gp >> 1, fF.a86[7]))
			}(this),
			function(dS, aSn) {
				var a5, a2D = dS.a2D,
					gq = aV.d1.getContext(a2D, !0),
					u = cr.fc,
					gp = dS.a2F >> 1;
				gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0), aSn && gq.clearRect(0, 0, a2D.width, a2D.height);
				if (9 === cr.fW) {
					gp <<= 1;
					dS = ph.fU[5];
					for (a5 = u - dS; a5 < u; a5++) kr(a5, gq, aSd, gp);
					u -= dS, gp >>= 1
				}
				for (a5 = cr.fb; a5 < u; a5++) kr(a5, gq, aSd, gp)
			}(this, null !== (dS = this).a2D && dS.a2D.width === aS.aT - 2 && dS.a2D.height === aS.aU - 2 || (dS.a2D = aV.d1.bN(aS.aT - 2, aS.aU - 2), !1)), cr.gH || this.gY()
	}, this.aN8 = aSh, this.gY = function() {
		for (var u = cr.fb, gp = this.a2F, a2G = this.a2G, gq = aV.d1.getContext(this.a2D, !0), a5 = 0; a5 < u; a5++) kr(a5, gq, a2G, gp)
	}
}

function wP() {
	var aSp, aSq, aSr, aSs, aSt, go = 0,
		aw = bV.aw;

	function aSw() {
		! function() {
			if (!cr.gH) return;
			if (cr.eh) return;
			if (2 !== cr.d6)
				if (aSt % 7 != 0) aSt++;
				else if (aSs === cr.mZ) {
				if (!aSz()) return;
				gO.mW(aSs), cr.ga.ar()
			} else {
				if (!aSz()) return;
				aSt++, aSs++, fm.gV(), fm.gW(!0)
			}
			return 1
		}() && aSz() && aFm()
	}

	function aSx() {
		go = 0, (cr.gH ? (bV.bW = gO.mW(aSs - (aSt % 7 == 0 ? 0 : 1) + aSt % 7 / 7) || bV.bW, aFk) : dG.dH || !ka.cq ? aFk : (bV.bW = !0, aFn))()
	}

	function aSz() {
		var a5, u, aT0 = tq.z4.z3,
			z5 = tq.z4.z6,
			z7 = tq.z4.z8,
			kw = tq.z4.z9,
			aT1 = tq.z4.zB,
			aT2 = tq.z4.zA;
		if (!(aSp >= aT2.length)) {
			if (aT2 = aT2[aSp], aT1[aSp]) {
				for (u = aSq + aT2, a5 = aSq; a5 < u; a5++) i2.a1p.aT3(aT0[a5], z5[a5], z7[a5], kw[a5]);
				aSq += aT2, aSp++
			} else ++aSr >= aT2 && (aSp++, aSr = 0);
			return __fx.replay.tick++, 1
		}
		ew.vC("Replay file smaller than expected."), ka.dD(!1), cr.d6 = 2
	}
	this.wT = 0, this.a4 = function() {
		aSt = aSs = aSr = aSq = aSp = 0, __fx.replay.registerHooks({
			advance: () => aSw(),
			finishTick: () => gb.render(),
			requestRedraw: () => {
				bV.bW = !0
			},
			isEnded: () => 2 === cr.d6,
			getTickInterval: () => bV.mV
		})
	}, this.ar = function() {
		var nT;
		cy.ar(), __fx.replay.frame() ? aFl() : ka.cu() < 1.7 ? 0 === go ? bV.aw >= aw && (nT = bV.mV / ka.cu(), aw += nT * Math.floor(1 + (bV.aw - aw) / nT), 2 === cr.d6 || dG.dH || !ka.cq ? aFl() : (aSw(), gb.render()), go++) : aSx() :
		function() {
			var nT;
			if (bV.aw >= aw)
				if (2 === cr.d6 || dG.dH || !ka.cq) aFl(), aw = bV.aw;
				else {
					for (nT = bV.mV / ka.cu(), 16 < (bV.aw - aw) / nT && (aw = bV.aw - 16 * nT); bV.aw >= aw && 2 !== cr.d6;) aw += nT, aSw();
					gb.render()
				} aSx()
		}(), aFo(), bV.bW && (bV.bW = !1, aFp())
	}, this.kc = function() {
		tq.z4.zA.length - aSp <= 2 || ew.vC("Replay file larger than expected.")
	}
}

function tt(id, t, aT4) {
	var pw, px;

	function aT7() {
		px.nq.innerHTML += "<br>" + L(465)
	}

	function aT8() {
		var av = 1;
		d7.dF(4, 1, new ol(L(466), L(467), !1, [new ir("🔄 Reload", function() {
			av && (setTimeout(function() {
				d7.dF(1)
			}, 5e3), cT.cU.og()), av = 0
		}, dZ.vI)]))
	}

	function aT6() {
		c.d(90), c.e(30, Math.floor(aQ.pow(30) * Math.random())), c.e(30, Math.floor(aQ.pow(30) * Math.random())), c.e(30, Math.floor(aQ.pow(30) * Math.random())), bG.a4(c.j), r.md.pE(110, __fx.passwordReset.getCustomPassword() || w.p.yw(w.p.yx(
			15))), f.a4x.n()
	}
	this.aT5 = !0, this.aFi = id, this.show = function() {
		pw.show(), this.resize(), 15 === id ? (f.i.e8(id) ? aT6 : aT7)() : 16 === id ? f.i.e8(id) ? f.g.sh(2) : aT7() : 17 === id ? f.i.e8(id) ? f.g.sh(3) : aT7() : 18 === id ? (f.i.close(0, 3253), f.i.e2(0, id, 0), aT7()) : 21 === id ? f.i.e8(
				id) ? f.a98.cX(t.cY, t.ai, t.al) : aT7() : 22 === id ? f.i.e8(id) ? f.a98.cZ(t.cY, t.ca, t.cb) : aT7() : 23 === id ? f.i.e8(id) ? f.a98.ce(t.cf, t.cg) : aT7() : 24 === id ? f.i.e8(id) ? f.a98.ci(t.cf, t.ai, t.al) : aT7() : 25 ===
			id ? f.i.e8(id) ? f.a4x.aD(t) : aT7() : 28 === id ? f.i.e8(id) ? f.a98.cd(t.cY, t.ca, t.cb) : aT7() : 29 === id ? f.i.e8(id) ? f.a4x.s(t) : aT7() : 30 === id && (f.i.e8(id) ? a8.ro() || aT8() : aT7())
	}, this.aL3 = function() {
		15 === id ? aT6() : 16 === id ? f.g.sh(2) : 17 === id ? f.g.sh(3) : 18 === id ? d7.dF(8, this.eL, new tt(16)) : 21 === id ? f.a98.cX(t.cY, t.ai, t.al) : 22 === id ? f.a98.cZ(t.cY, t.ca, t.cb) : 23 === id ? f.a98.ce(t.cf, t.cg) : 24 ===
			id ? f.a98.ci(t.cf, t.ai, t.al) : 25 === id ? f.a4x.aD(t) : 28 === id ? f.a98.cd(t.cY, t.ca, t.cb) : 29 === id ? f.a4x.s(t) : 30 === id ? a8.ro() || aT8() : 1e3 === id && (this.aFi = id = 25, f.a4x.aD(t))
	}, this.rt = function(code, m6, data) {
		!m6 && code !== id || (15 === code || 16 === code ? d7.dF(7, this.eL) : 17 === code ? (f.i.close(0, 3252), r.i.a5A(0), r.buffer.data[117].la && 0 < r.buffer.data[117].la.length ? (m6 = r.i.v4(0), r.md.pE(105, m6.aE), r.md.pE(106, m6
			.password), d7.dF(8, this.eL, new tt(16))) : (r.md.pE(105, ""), d7.i.rv())) : 21 === code ? d7.dF(10, this.eL, new r9(data)) : 23 === code ? d7.dF(13, this.eL, new aT9({
			data: data,
			cf: t.cf
		})) : 25 === code ? (d7.i.a2X.aE = t.aE, r.mg.d3(t.aE), d7.dF(15, this.eL)) : 30 === code && (data ? d7.dF(1) : aT8()))
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), px.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(L(463), [new ir("⬅️ " + L(4), function() {
		aT4 ? d7.dF(29) : d7.i.rv()
	})]), px = new py(pw.lK, L(464))
}

function a6G() {
	var aTA = [],
		aTB = [],
		aTC = 0;

	function aTD(au, a3S, a3T, aTG) {
		var u = au.length;
		if (0 === u) return "";
		var v = "@" + au[0];
		if (1 === u) return v + a3S + aTG;
		for (var a5 = 1; a5 < u - 1; a5++) v += ", @" + au[a5];
		return v + " and @" + au[u - 1] + a3T + aTG
	}
	this.a4 = function() {
		var v = aTD(aTB, " is", " are", " in the lobby.");
		v.length && or.message.sI({
			id: 7,
			a06: v
		}), aTA = [], aTB = [], aTC = 0
	}, this.aLh = function(aTE) {
		return or.a64 !== aTE && (aTE = w.p.hg(aTE, 5), !!r.mg.p7(aTE)) && (aTB.push(aTE), !0)
	}, this.join = function(player) {
		or.a64 !== player.aE && (player = w.p.hg(player.aE, 5), r.mg.p7(player)) && aTA.push(player)
	}, this.aTF = function() {
		var a3S, a3T;
		++aTC < 3 || (aTC = 0, a3S = aTD(aTB, "", "", " entered the lobby!"), (a3S = (a3T = aTD(aTA, "", "", " joined a game!")).length ? a3S.length ? a3S + " " + a3T : a3T : a3S).length && or.message.sI({
			id: 7,
			a06: a3S
		}), aTA = [], aTB = [])
	}
}

function aJ3() {
	function aJF(aJ, u, aK, mS, uC, aDP) {
		if (!(aK < 1 || uC < aK))
			for (var a5 = 0; a5 <= u; a5++) {
				var gt = aj.aJO(aJ, aK);
				if (mS(gt)) return gt >> 2;
				aJ += aDP
			}
		return -1
	}

	function aJJ(aK, u, aJ, mS, aJD, aDP) {
		if (!(aJ < 1 || aJD < aJ)) {
			u = Math.max(u, 0);
			for (var a5 = 0; a5 <= u; a5++) {
				var gt = aj.aJO(aJ, aK);
				if (mS(gt)) return gt >> 2;
				aK += aDP
			}
		}
		return -1
	}

	function aJN(a7s, aAp, yT) {
		return -1 !== aAp && (-1 === a7s || aj.aAv(aAp, yT) < aj.aAv(a7s, yT)) ? aAp : a7s
	}
	this.i1 = function(yT) {
		return this.kS(yT, function(gt) {
			return fK.o9(gt)
		})
	}, this.iD = function(yT) {
		return this.kS(yT, function(gt) {
			return fK.aJR(gt, cr.gJ)
		})
	}, this.kS = function(yT, mS) {
		return function(yT, aBB, mS) {
			for (var hq = aj.fQ(yT), hs = aj.fR(yT), aJD = aS.aT - 2, uC = aS.aU - 2, aJE = -1, ba = 0; ba < aBB; ba++) {
				var jr = Math.max(hq - ba, 1),
					js = Math.max(hs - ba, 1),
					jt = Math.min(hq + ba, aJD),
					jf = Math.min(hs + ba, uC),
					a7s = aJF(hq, jt - hq, hs - ba, mS, uC, 1),
					aAp = aJF(hq - 1, hq - jr - 1, hs - ba, mS, uC, -1),
					jt = aJF(hq, jt - hq, hs + ba, mS, uC, 1),
					jr = aJF(hq - 1, hq - jr - 1, hs + ba, mS, uC, -1),
					aJI = aJJ(hs, jf - hs - 1, hq - ba, mS, aJD, 1),
					aJK = aJJ(hs - 1, hs - js - 2, hq - ba, mS, aJD, -1),
					jf = aJJ(hs, jf - hs - 1, hq + ba, mS, aJD, 1),
					js = aJJ(hs - 1, hs - js - 2, hq + ba, mS, aJD, -1);
				if (aJE = aJN(aJE, a7s, yT), aJE = aJN(aJE, aAp, yT), aJE = aJN(aJE, jt, yT), aJE = aJN(aJE, jr, yT), aJE = aJN(aJE, aJI, yT), aJE = aJN(aJE, aJK, yT), aJE = aJN(aJE, jf, yT), 0 <= (aJE = aJN(aJE, js, yT)) && ba * ba >= aj
					.aAv(aJE, yT)) return aJE
			}
			return -1
		}(yT, aj.yb(), mS)
	}
}

function lZ(aFa, aQ8) {
	this.a58 = [];
	var aTI = this.a58;

	function click() {
		for (var a5 = 0; a5 < aTI.length; a5++) aTI[a5].textContent = aTI[a5].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var go = parseInt(this.name);
		void 0 !== aFa.go && r.md.pE(aFa.go, go), aQ8 && aQ8(go)
	}
	for (var aTJ, u = aFa.la.length, a5 = 0; a5 < u; a5++)(aTJ = document.createElement("p")).textContent = "⚪ " + aFa.la[a5], aTJ.style.margin = "0", aTJ.name = "" + a5, aTJ.style.cursor = "pointer", aTJ.style.fontSize = "1em", aTJ.addEventListener(
		"click", click), aTI.push(aTJ);
	aTI[aFa.value].textContent = aTI[aFa.value].textContent.replace("⚪", "🟢")
}

function aIi() {
	var aTK = 0,
		aTL = 0,
		aTM = 0,
		aTN = 0,
		aTO = -1;

	function aTS(gt) {
		if (aTO === gt) return !1;
		if (-1 === (aTO = gt)) aTK = 0, ew.aPB(aTK, 0);
		else {
			if (fK.ii(gt)) return aTM = fK.iA(gt), aRK = f4.g2[aTM] - f4.gC[aTM], (4 !== aTK || aRK !== aTL) && (aTK = 4, aTL = aRK, ew.aPB(aTK, aRK), !0);
			if (fK.fL(gt)) return 3 !== aTK && (aTK = 3, ew.aPB(aTK, 0), !0);
			if (fK.i6(gt)) return 2 !== aTK && (aTK = 2, ew.aPB(aTK, 0), !0);
			var aRK = am.cI.aB0(jC.hi, jC.hj);
			if (-1 === aRK) return 1 !== aTK && (aTK = 1, ew.aPB(aTK, 0), !0);
			gt = am.i.hO[aRK];
			if (aTM = am.i.ks[aRK], aTN = am.i.hN[aRK] >> 3, 5 === aTK && gt === aTL) return !1;
			aTK = 5, aTL = gt, ew.aPB(aTK, gt)
		}
		return !0
	}
	this.a4 = function() {
		aTN = aTM = aTL = aTK = 0, aTO = -1
	}, this.ar = function(m6) {
		var hs;
		!m6 && jC.jD() || (m6 = aj.hr(jC.hi), hs = aj.ht(jC.hj), aj.hv(m6, hs) ? (m6 = aj.hu(m6, hs), aTS(aj.i5(m6))) : aTS(-1))
	}, this.aTQ = function() {
		var aTU, aRK, aTT, nG;
		if (0 !== aTK && 2 !== aTK)
			if (jC.jD()) {
				if (1 !== aTK && 3 !== aTK) {
					if (4 === aTK) return void(aRK = f4.g2[aTM] - f4.gC[aTM], aTL === aRK || (aTL = aRK, ew.aPB(aTK, aRK)));
					(aTT = am.cI.a0s(aTN, aTM)) < 0 ? (aTK = 1, ew.aPB(aTK, 0)) : (nG = am.i.hO[aTT]) !== aTL && (aTL = nG, ew.aPB(aTK, nG))
				}
			} else if (1 === aTK) - 1 !== (aTT = am.cI.aB0(jC.hi, jC.hj)) && (aTK = 5, aTL = am.i.hO[aTT], ew.aPB(aTK, aTL));
		else if (3 === aTK) fK.ii(aTO) && (aTK = 4, aTU = fK.iA(aTO), aTL = f4.g2[aTU] - f4.gC[aTU], ew.aPB(aTK, aTL));
		else if (4 === aTK) {
			if (fK.ii(aTO)) return void(aTU = fK.iA(aTO), aRK = f4.g2[aTU] - f4.gC[aTU], aTL === aRK || (aTL = aRK, ew.aPB(aTK, aRK)));
			aTK = 3, ew.aPB(aTK, 0)
		} else - 1 === (aTT = am.cI.aB0(jC.hi, jC.hj)) ? (aTK = 1, ew.aPB(aTK, 0)) : (nG = am.i.hO[aTT]) !== aTL && (aTL = nG, ew.aPB(aTK, nG))
	}
}

function bw() {
	this.pV = function(player) {
		for (var ms = am.i.ms, ai = player << 3, a5 = ai + am.i.mr[player] - 1; ai <= a5; a5--) this.nY(ms[a5])
	}, this.nY = function(aTV) {
		var i = am.i,
			aTW = i.hS - 1,
			aTX = i.hN[aTV],
			aTY = i.an[aTV],
			aTZ = i.hM[aTV];
		i.hS = aTW, i.hN[aTV] = i.hN[aTW], i.hM[aTV] = i.hM[aTW], i.mn[aTV] = i.mn[aTW], i.hO[aTV] = i.hO[aTW], i.an[aTV] = i.an[aTW], i.ks[aTV] = i.ks[aTW], i.mo[aTV] = i.mo[aTW], i.hP[aTV] = i.hP[aTW], i.mp[aTV] = i.mp[aTW], i.mq[aTV] = i.mq[
				aTW], i.ms[i.hN[aTV]] = aTV,
			function(aEq) {
				var player = aEq >> 3,
					i = am.i,
					u = i.mr[player] - 1,
					aTc = (player << 3) + u;
				i.mr[player] = u, aTc !== aEq && (i.ms[aEq] = i.ms[aTc], i.hN[i.ms[aEq]] = aEq)
			}(aTX), am.aO.aO[aj.ak(i.hM[aTV])][i.an[aTV]] = aTV, aTW = aj.ak(aTZ), aTX = aTY, aTW = am.aO.aO[aTW], i = aTW.pop(), aTX !== aTW.length && (aTW[aTX] = i, am.i.an[i] = aTX)
	}
}

function aEt() {
	this.aHx = function() {
		for (var bB, aJ, z5, aHv = a3N, aHw = aS.bY, aZ = aS.aT, aHu = aZ - 1, ig = aS.aU - 1, fi = 0, aK = 1; aK < ig; aK++)
			for (z5 = aK * aZ, aJ = 1; aJ < aHu; aJ++) aHw[bB = z5 + aJ << 2] === aHw[1 + bB] && aHw[bB] === aHw[2 + bB] && (fi++, aHv[2 + bB] = 4);
		a1t.aEs = fi
	}, this.aHy = function(aTe, aTf) {
		for (var aHv = a3N, aZ = aS.aT, aHu = aZ - 1, ig = aS.aU - 1, id = 0, aK = 1; aK < ig; aK++)
			for (var z5 = aK * aZ, aJ = 1; aJ < aHu; aJ++) {
				var gt = 2 + (z5 + aJ << 2);
				aHv[gt] === aTe && (! function(gt, id, aTe, aTf) {
					var u = 1,
						aHv = a3N,
						ie = fK.aJy,
						a3A = [gt],
						aTh = id >> 8 << 1,
						aTi = 255 & id;
					aHv[gt - 2] = aTh, aHv[gt - 1] = aTi, aHv[gt] = 5;
					for (; u;) {
						for (var a3B = [], a5 = 0; a5 < u; a5++)
							for (var hX = a3A[a5], ba = 0; ba < 8; ba++) {
								var hE = hX + ie[ba];
								aHv[hE] === aTe && (aHv[hE - 2] = aTh, aHv[hE - 1] = aTi, aHv[hE] = aTf, a3B.push(hE))
							}
						u = (a3A = a3B).length
					}
				}(gt, id, aTe, aTf), id = (id + 1) % 32768)
			}
	}, this.aHz = function() {
		for (var aHv = a3N, aZ = aS.aT, aHu = aZ - 3, ig = aS.aU - 3, aTk = 12 * aZ, aK = 3; aK < ig; aK++)
			for (var z5 = aK * aZ, aJ = 3; aJ < aHu; aJ++) {
				var gt = 2 + (z5 + aJ << 2);
				2 !== aHv[gt] || 2 === aHv[gt - 12] && 2 === aHv[12 + gt] && 2 === aHv[gt - aTk] && 2 === aHv[gt + aTk] || (aHv[gt - 2] = 1 | aHv[gt - 2])
			}
	}
}

function aIP() {
	var d8, aTl, aZ, b6, di, aTm, aTn, pp, canvas, pq, aTo;

	function cv() {
		return Math.floor((cy.aZ - aZ) / 2) < gM.b6 + 2 * cz.gap ? cy.b6 - b6 - 4 * cz.gap - gM.b6 : cy.b6 - b6 - 2 * cz.gap
	}
	this.a4 = function() {
		aTo = d8 = !1, di = .61, aTm = .07, aTn = .09, pq = pp = b6 = 0
	}, this.resize = function() {
		var ck, dg, jA, aTt, aTu, qu;
		d8 && (aZ = aLy(aZ = cT.cU.cV() ? Math.floor(.69 * cy.l7) : Math.floor(.5 * cy.l7), uS(cy.aZ - 2 * cz.gap, 10)), aZ = aLy(aZ, Math.floor(3.57 * uS(cy.b6 - 2 * cz.gap, 3))), b6 = Math.floor(.28 * aZ), (canvas = document.createElement(
			"canvas")).width = aZ, canvas.height = b6, ck = canvas.getContext("2d", {
			alpha: !0
		}), dg = Math.floor(1 + b6 / 40), ck.clearRect(0, 0, aZ, b6), ck.fillStyle = dZ.f6, ck.fillRect(dg, dg, aZ - 2 * dg, b6 - 2 * dg), ck.lineJoin = "bevel", ck.lineWidth = 2 * dg, ck.strokeStyle = dZ.dc, ck.strokeRect(dg, dg, aZ -
			2 * dg, b6 - 2 * dg), ck.imageSmoothingEnabled = !1, jA = l5.get(aTl), aTt = jA.width, qu = (1 === aTl ? .85 : 21 === aTl ? .666 : .9) * di * b6 / (aTu = jA.height), ck.setTransform(qu, 0, 0, qu, Math.floor((aZ - qu * aTt) /
			2), Math.floor((b6 - qu * aTu) / 2)), ck.drawImage(jA, 0, 0), ck.setTransform(1, 0, 0, 1, Math.floor(aZ - aTn * b6 - aTm * b6 - dg), Math.floor(dg + aTm * b6)), function(ck, u) {
			ck.lineWidth = Math.floor(1 + b6 / 80), ck.strokeStyle = dZ.dc, ck.beginPath(), ck.moveTo(0, 0), ck.lineTo(u, u), ck.moveTo(0, u), ck.lineTo(u, 0), ck.stroke()
		}(ck, Math.floor(aTn * b6)), ck.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(kv, aTq, a6J, aTr) {
		d8 || aTr && aTo || (aTl = a6J ? 21 : kv ? 1 : 2, d8 = aTo = !0, this.resize(), gZ.eQ(), gM.aTs(), pq = bV.aw, pp = aTq ? 1 : 0)
	}, this.ar = function() {
		!d8 || 1 <= pp || (pp = 1 < (pp += 5e-4 * (bV.aw - pq)) ? 1 : pp, pq = bV.aw, bV.bW = !0)
	}, this.dB = function(aJ, aK) {
		return !(!d8 || pp <= 0 || (aJ -= Math.floor((cy.aZ - aZ) / 2), aK -= cv(), aJ < 0) || aK < 0 || aZ < aJ || b6 < aK || (aZ - b6 / 3 < aJ && aK < b6 / 3 && (d8 = !1, bV.bW = !0), 0))
	}, this.cQ = function() {
		!d8 || pp <= 0 || (dO.globalAlpha = pp, dO.drawImage(canvas, Math.floor((cy.aZ - aZ) / 2), cv()), dO.globalAlpha = 1)
	}
}

function q2() {
	this.zY = function() {
		for (var u = f8.f9, ay = f8.fB, zU = [], a5 = 0; a5 < u; a5++) {
			var bB = ay[a5];
			aV.et.a6a(bB) && zU.push(bB)
		}
		return zU
	}, this.zZ = function() {
		if (0 === fF.fG[cr.a1g]) return this.za();
		dA.aEf(cr.a1g);
		for (var zU = [], u = gx.aDR[0], aBi = gx.aBi, a5 = 0; a5 < u; a5++) {
			var bB = aBi[a5];
			aV.et.a6a(bB) && zU.push(bB)
		}
		return zU
	}, this.za = function() {
		var bB = fH[0];
		return aV.et.a6a(bB) ? [bB] : []
	}, this.zb = function(zU) {
		for (var u = zU.length, kG = 0, g0 = f4.g0, a5 = 0; a5 < u; a5++) kG += g0[zU[a5]];
		return kG
	}
}

function aIo() {
	this.o8 = new Int16Array(4), this.oI = new Int16Array(4), this.a7o = null, this.a4 = function() {
		var a5;
		for (this.o8[0] = -aS.aT, this.o8[1] = 1, this.o8[2] = aS.aT, this.o8[3] = -1, this.a7o = new Int16Array([-aS.aT, 1 - aS.aT, 1, aS.aT + 1, aS.aT, aS.aT - 1, -1, -aS.aT - 1]), a5 = 0; a5 < 4; a5++) this.oI[a5] = 4 * this.o8[a5]
	}, this.yb = function() {
		return aQ.ld(Math.floor(.15 * (1 + .25 * cT.cU.cV()) * cy.l7 / hY), 4, 128)
	}, this.aAo = function(gt, id) {
		for (var oH = this.oI, a5 = 0; a5 < 4; a5++) {
			var hX = gt + oH[a5];
			if (fK.jg(hX) && fK.yL(hX) === id) return !0
		}
		return !1
	}, this.aTw = function(player, gt) {
		return !fK.fL(gt) && player === fK.iA(gt)
	}, this.aRY = function(hq, hs, fM) {
		return (hq -= this.fQ(fM)) * hq + (hs -= this.fR(fM)) * hs
	}, this.aB1 = function(l8, l9, hH) {
		l8 = this.aBF(l8) - this.aB8(hH), l9 = this.aBG(l9) - this.aBA(hH);
		return Math.sqrt(l8 * l8 + l9 * l9)
	}, this.yS = function(a7s, aAp) {
		var h1 = this.fQ(a7s) - this.fQ(aAp),
			a7s = this.fR(a7s) - this.fR(aAp);
		return ~~Math.sqrt(h1 * h1 + a7s * a7s + .5)
	}, this.aAv = function(a7s, aAp) {
		var h1 = this.fQ(a7s) - this.fQ(aAp),
			a7s = this.fR(a7s) - this.fR(aAp);
		return h1 * h1 + a7s * a7s
	}, this.aTx = function(xO, xP, xQ, xR) {
		return (xO -= xQ) * xO + (xP -= xR) * xP
	}, this.a6p = function(bB, yj) {
		return aQ.aR(yj * f4.g2[bB], 1e3)
	}, this.aBF = function(l8) {
		return 16 * (l8 + hZ) / hY
	}, this.aBG = function(l9) {
		return 16 * (l9 + ha) / hY
	}, this.aBC = function(ba) {
		return 16 * ba / hY
	}, this.hr = function(l8) {
		return Math.floor((l8 + hZ) / hY)
	}, this.ht = function(l9) {
		return Math.floor((l9 + ha) / hY)
	}, this.hv = function(hq, hs) {
		return 1 <= hq && 1 <= hs && hq < aS.aT - 1 && hs < aS.aU - 1
	}, this.fQ = function(fM) {
		return fM % aS.aT
	}, this.fR = function(fM) {
		return aQ.aR(fM, aS.aT)
	}, this.hu = function(hq, hs) {
		return hs * aS.aT + hq
	}, this.aJO = function(hq, hs) {
		return 4 * this.hu(hq, hs)
	}, this.aTy = function(fM) {
		return this.aRZ(this.fQ(fM), this.fR(fM))
	}, this.aRZ = function(hq, hs) {
		return 0 < hq && hq < aS.aT - 1 && 0 < hs && hs < aS.aU - 1
	}, this.i5 = function(fM) {
		return fM << 2
	}, this.aAw = function(gt) {
		return gt >> 2
	}, this.aTz = function(fM) {
		return aS.aT * this.fR(fM) * 256 + (this.fQ(fM) << 4)
	}, this.mw = function(fM) {
		return this.aTz(fM) + 8 + (aS.aT << 7)
	}, this.o3 = function(hH) {
		return aS.aT * (this.aBA(hH) >> 4) + (this.aB8(hH) >> 4)
	}, this.ak = function(hH) {
		hH = this.o3(hH);
		return (this.fQ(hH) >> 5) + am.aO.aL * (this.fR(hH) >> 5)
	}, this.aB8 = function(hH) {
		return hH % (aS.aT << 4)
	}, this.aBA = function(hH) {
		return aQ.aR(hH, aS.aT << 4)
	}, this.aJQ = function(fM, ih) {
		return fM + this.o8[ih]
	}, this.aU0 = function(gt, ih) {
		return gt + this.oI[ih]
	}, this.aJP = function(a7s, aAp) {
		var h1 = this.fQ(aAp) - this.fQ(a7s),
			aAp = this.fR(aAp) - this.fR(a7s);
		return Math.abs(h1) >= Math.abs(aAp) ? 1 + 2 * (h1 < 0) : 2 * (0 < aAp)
	}, this.aU1 = function(player) {
		return this.hu(f4.fw[player] + f4.fy[player] >> 1, f4.fx[player] + f4.fz[player] >> 1)
	}, this.aU2 = function(player) {
		return this.hu(fj.aPx(f4.fw[player], f4.fy[player]), fj.aPx(f4.fx[player], f4.fz[player]))
	}
}

function aDy(aU3, is, aU4) {
	function click() {
		var value = 1 - aU3.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + is, void 0 !== aU3.go ? r.md.pE(aU3.go, value) : aU3.value = value, aU4 && aU4(value)
	}
	var ej;
	is = is || L(468), this.ej = document.createElement("p"), (ej = this.ej).textContent = (aU3.value ? "🟩 " : "⬜ ") + is, ej.style.margin = "0", ej.style.marginBottom = "0.5em", ej.style.cursor = "pointer", ej.addEventListener("click", click)
}

function aMH(aMB, aM5, aU5, aMC, aGO, oo) {
	var op = document.createElement("div"),
		aU6 = document.createElement("div"),
		aU7 = document.createElement("div"),
		aU8 = document.createElement("div"),
		aU9 = document.createElement("div"),
		oq = document.createElement("div"),
		aUA = document.createElement("div"),
		aUB = document.createElement("div"),
		aUC = document.createElement("span"),
		aUD = document.createElement("div");
	this.aMK = new aGN(aGO, oo), this.aMN = new on(oo), this.aMS = [aMB, aM5, aU5, aMC], this.aMd = function(aMe) {
		aMe = (aMe / 10).toFixed(1) + "%";
		aUB.style.width = aMe, aUC.innerHTML = aMe
	}, this.aMQ = function() {
		this.aMN.eQ(oq), this.aMK.show(oq)
	}, this.aMR = function() {
		this.aMK.eQ(oq), this.aMN.show(oq)
	}, this.aMJ = function() {
		return aU6
	}, this.show = function() {
		document.body.appendChild(op)
	}, this.eQ = function() {
		d7.removeChild(document.body, op)
	}, this.resize = function(aUG) {
		var aUH = 1 - .4 * cT.cU.cV() * (cy.aZ > 1.6 * cy.b6),
			tx = aV.d1.iq(.05 * aUH),
			aUI = cy.b6 > cy.aZ,
			aUJ = aV.d1.iq(.06 * aUH + .03 * aUI),
			aUK = aV.d1.iq(.08 * aUH + .03 * aUI),
			aUL = aV.d1.iq(.04 + .02 * aUI),
			aUI = aV.d1.iq(.02 * aUH + .01 * aUI),
			aUN = aV.d1.iq(.025);
		op.style.font = aV.d1.d2(0, aUN), aU9.style.font = aV.d1.d2(0, .9 * aUN), aUD.style.font = aV.d1.d2(0, .9 * aUN), aUH < 1 && (aUN = aV.d1.d2(0, aUH * aUN), aU7.style.font = aUN, aU9.style.font = aUN, aUD.style.font = aUN, aUA.style.font =
			aUN, aU8.style.font = aUN), aU6.style.height = aV.d1.io(tx), aU6.style.font = aV.d1.d2(0, .72 * tx), aV.d1.k4(aU6, 2), aU7.style.top = aV.d1.io(tx), aU7.style.height = aV.d1.io(aUK), aV.d1.k4(aU7, 2), aU8.style.font = aV.d1.d2(0,
			aUH * aV.d1.iq(.02)), aU8.style.top = aV.d1.io(tx + aUK), aU8.style.height = aV.d1.io(aUL), aV.d1.k4(aU8, 2), aU9.style.top = aV.d1.io(tx + aUK + aUL), aU9.style.height = aV.d1.io(aUJ), aV.d1.k4(aU9, 2), oq.style.top = aV.d1.io(
			tx + aUK + aUL + aUJ), oq.style.height = aV.d1.io(cy.b6 / cy.ny - tx - aUK - 2 * aUJ - aUL - aUI), aUA.style.top = aV.d1.io(cy.b6 / cy.ny - aUJ - aUI), aUA.style.height = aV.d1.io(aUI), aV.d1.k4(aUA, 8), aUC.style.font = aV.d1.d2(
			0, .8 * aUI), aUD.style.top = aV.d1.io(cy.b6 / cy.ny - aUJ), aUD.style.height = aV.d1.io(aUJ), aV.d1.k4(aUD, 8), aMB.resize(aU7), aM5.resize(aU7), aU5.resize(aU7), aMC.resize(aU7), aUG ? this.aMK.resize(oq) : this.aMN.resize()
	};
	aGO = this;
	op.style.position = "absolute", op.style.top = "0", op.style.left = "0", op.style.width = "100%", op.style.height = "100%", op.style.backgroundColor = dZ.aH0, jC.jD() || (op.style.backdropFilter = "blur(4px)", op.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (op.style.display = "none"), aU6.style.position = "absolute", aU6.style.top = "0", aU6.style.left = "0", aU6.style.width = "100%", aU6.style.display = "flex", aU6.style.alignItems = "center", aU6.translate = !1;
	for (var au = [aU7, aU8, aU9, aUD], a5 = 0; a5 < au.length; a5++) au[a5].style.position = "absolute", au[a5].style.left = "0", au[a5].style.width = "100%", aV.d1.aE9(au[a5]);
	oq.style.position = "absolute", oq.style.left = "0", oq.style.width = "100%", oq.style.font = "inherit", aUA.style.position = "absolute", aUA.style.left = "0", aUA.style.width = "100%", aUB.style.position = "absolute", aUB.style.top = "0", aUB
		.style.left = "0", aUB.style.height = "100%", aUB.style.width = "50%", aUB.style.backgroundColor = dZ.aHC, aUC.innerHTML = "", aUC.style.position = "absolute", aUC.style.top = "50%", aUC.style.left = "50%", aUC.style.transform =
		"translate(-50%, -50%)", aUC.translate = !1, aU6.appendChild(function() {
			var aM2 = document.createElement("h1");
			return aM2.textContent = L(469), aM2.style.margin = "0 auto 0.15em auto", aM2.style.fontFamily = "Arial Black, system-ui", aM2.style.fontSize = "inherit", aM2.style.fontWeight = "inherit", aM2
		}()), aU7.appendChild(aMB.k2), aU8.appendChild(aM5.k2), aU9.appendChild(aU5.k2), aUA.appendChild(aUB), aUA.appendChild(aUC), aUD.appendChild(aMC.k2), op.appendChild(aU6), op.appendChild(aU7), op.appendChild(aU8), op.appendChild(aU9), op
		.appendChild(oq), op.appendChild(aUA), op.appendChild(aUD), aGO.aMN.show(oq)
}

function aIV() {
	var aUP;

	function aUQ(player) {
		var jn, aQx;
		return aV.et.jy(player) && player < cr.fb ? 0 : (jn = aUP[aQ.aR((cr.fc - 1) * f4.g0[player], cr.lv)], bV.es() < 1920 && (jn = Math.max(aQ.aR(100 * (13440 - 6 * bV.es()), 1920), jn)), aQx = m9.mA(player), f4.g2[player] > aQx && (jn -= aQ.aR(
			2 * jn * (f4.g2[player] - aQx), aQx)), Math.min(Math.max(jn, 0), 700))
	}

	function aUZ(ku) {
		for (var g0 = f4.g0, fB = f8.fB, a5 = f8.f9 - 1; 0 <= a5; a5--) {
			var bB = fB[a5];
			aV.et.oL(bB, aQ.aR(ku * g0[bB], 32))
		}
	}

	function aUW() {
		var bc = cr.gJ;
		gx.aUd[0] = f4.g2[bc] - f4.gC[bc]
	}

	function aUY(go) {
		var bc = cr.gJ,
			bc = f4.g2[bc] - f4.gC[bc] - gx.aUd[0];
		m9.aAN += bc, gK.gL[go] += bc
	}
	this.aAN = 0, this.z0 = function() {
		for (var u = cr.fc, a5 = (aUP = new Uint16Array(u), 0); a5 < u; a5++) aUP[a5] = 100 + aM0(aQ.aR(25600 * a5, u - 4), 9)
	}, this.a4 = function() {
		(this.aAN = 0) === cr.data.iIncomeType ? this.mU = aUQ : 1 === cr.data.iIncomeType ? this.mU = function(player) {
			return aQ.aR(cr.data.iIncomeValue * aUQ(player), 64)
		} : this.mU = function(player) {
			return aQ.aR(cr.data.iIncomeData[player] * aUQ(player), 64)
		}
	}, this.ar = function() {
		if (bV.es() % 10 == 9 && (m9.aAN = 0, function() {
				aUW();
				for (var fB = f8.fB, g2 = f4.g2, a5 = f8.f9 - 1; 0 <= a5; a5--) {
					var bB = fB[a5],
						aUX = aQ.aR(m9.mU(bB) * g2[bB], 1e4);
					aV.et.oL(bB, Math.max(aUX, 1))
				}
				aUY(9)
			}(), function() {
				if (0 !== cr.data.aIncomeType) {
					if (aUW(), 1 === cr.data.aIncomeType)
						for (var g0 = f4.g0, fB = f8.fB, ku = cr.data.aIncomeValue, a5 = f8.f9 - 1; 0 <= a5; a5--) {
							var bB = fB[a5];
							aV.et.oL(bB, aQ.aR(ku * g0[bB], 128))
						} else 2 === cr.data.aIncomeType && function() {
							for (var g0 = f4.g0, fB = f8.fB, ku = cr.data.aIncomeData, a5 = f8.f9 - 1; 0 <= a5; a5--) {
								var bB = fB[a5];
								aV.et.oL(bB, aQ.aR(ku[bB] * g0[bB], 128))
							}
						}();
					aUY(18)
				}
			}(), bV.es() % 100 == 99)) {
			if (aUW(), 0 === cr.data.tIncomeType) aUZ(32);
			else if (1 === cr.data.tIncomeType) aUZ(cr.data.tIncomeValue);
			else
				for (var g0 = f4.g0, fB = f8.fB, ku = cr.data.tIncomeData, a5 = f8.f9 - 1; 0 <= a5; a5--) {
					var bB = fB[a5];
					aV.et.oL(bB, aQ.aR(ku[bB] * g0[bB], 32))
				}
			aUY(8)
		}
	}, this.mA = function(player) {
		return Math.min(100 * f4.g0[player], cr.a1U)
	}, this.aDm = function(player, a6m) {
		a1l.aDp(player, a6m, gx.mt[0], 0), aV.et.oL(a6m, gx.mt[0]), gK.aDq(player, a6m), fm.xA(player, gx.mt[0] + gx.mt[1]), fm.xC(a6m, gx.mt[0]), aV.et.a4O(player)
	}, this.a6N = function() {
		for (var u = f8.f9, ay = f8.fB, bA = 0, a6f = f4.g2, a5 = 0; a5 < u; a5++) bA += a6f[ay[a5]];
		return bA
	}, this.a6P = function(aUS) {
		for (var bB, u = f8.f9, ay = f8.fB, bA = 0, a6f = f4.g2, fI = fF.fI, a5 = 0; a5 < u; a5++) fI[bB = ay[a5]] === aUS && (bA += a6f[bB]);
		return bA
	}
}

function wR() {
	this.aw = bV.aw, this.go = 0, this.wT = 0, this.aSs = 0, this.aUe = null, this.aUf = 7, this.aUg = 0, this.a4 = function() {
		this.aSs = 0, this.aUe = [], this.go = 0, this.wT = 0
	}, this.aCx = function(j) {
		if (cr.gH) this.mW(j);
		else if (this.aUe.push(j), 2 === cr.d6) {
			for (var a5 = 0; a5 < this.aUe.length; a5++) i2.a1p.ar(this.aUe[a5]);
			this.aUe = []
		}
	}, this.mW = function(j) {
		2 !== cr.d6 && (i2.a1p.ar(j), tq.ar(), gO.mW(this.aSs), this.aSs === cr.mZ ? (cr.ga.ar(), this.aSs = 0, this.go = 0, this.wT = 0, this.aw = bV.aw) : (this.aSs++, fm.gV(), fm.gW(!0), gb.render()))
	}, this.ar = function() {
		cy.ar(), cr.gH ? (bV.bW = gO.mW(-1) || bV.bW, aFk()) : (0 !== this.go || bV.aw >= this.aw && (this.aw += bV.mV * Math.floor(1 + (bV.aw - this.aw) / bV.mV), 2 === cr.d6 ? aFl() : this.aUh(), this.go++, 27 < bV.aw - this.aUg)) && this
		.aUi(), aFo(), bV.bW && (bV.bW = !1, aFp()), this.aUg = bV.aw
	}, this.aUi = function() {
		bV.bW = !0, aFn(), this.go = 0
	}, this.aUh = function() {
		var aUj, a5;
		if (this.wT !== 7 * this.aSs) aFm(), gb.render();
		else {
			aUj = !1;
			loop: for (; this.aUk() && (aUj = !0, aFm(), 2 !== cr.d6) && 0 < this.aUe.length;)
				for (a5 = this.aUf - 2; 0 <= a5; a5--)
					if (aFm(), 2 === cr.d6) break loop;
			aUj ? gb.render() : (aFl(), gb.gd())
		}
	}, this.aUk = function() {
		return 0 < this.aUe.length && (this.aSs++, i2.a1p.ar(this.aUe[0]), this.aUe.shift(), !0)
	}
}

function aIF() {
	var vn = new Uint8Array(cr.fc),
		aUl = new Uint16Array(cr.fc),
		aUm = new Uint16Array(cr.fc),
		aUn = new Uint8Array(cr.fc),
		aUo = (this.hF = new Uint8Array(cr.fc), new Uint16Array(cr.fc)),
		aUp = new Uint16Array(cr.fc);

	function aUv(a5) {
		vn[a5] = 1 + aQ.aR(aUo[a5] * fj.random(), 10 * fj.value(100))
	}
	this.aOq = null, this.aRE = [97, 94, 70, 40, 20, 0, 100], this.a4N = [500, 450, 400, 300, 80, 50, 100], this.aRA = [0, 0, 5, 25, 50, 100, 0], this.aUq = [60, 74, 112, 200, 256, 512, 512], this.mk = [1, 2, 3, 4, 6, 8, 1], this.aDT = [500, 450,
		400, 300, 80, 50, 100
	], this.a4H = [100, 150, 250, 400, 600, 1e3, 100], this.rd = function() {
		this.aOq = [L(470), L(471), L(364), L(472), L(473), L(474), "H Bot"]
	}, this.a4 = function() {
		vn.fill(0), aUl.fill(0), aUm.fill(0), aUn.fill(0), this.hF.fill(0), aUo.fill(0), aUp.fill(0);
		var aUr = cr.fb;
		if (9 === cr.fW) this.aUs();
		else if (__fx.customLobby.isActive())
			for (a5 = cr.fd - 1; 0 <= a5; a5--) this.hF[a5 + aUr] = __fx.customLobby.gameInfo.difficulty;
		else if (cr.eh)
			if (3 === cr.data.botDifficultyType)
				for (a5 = cr.fd - 1; 0 <= a5; a5--) {
					var b4 = a5 + aUr;
					this.hF[b4] = cr.data.botDifficultyData[b4]
				} else if (2 === cr.data.botDifficultyType)
					for (a5 = cr.fd - 1; 0 <= a5; a5--) this.hF[b4 = a5 + aUr] = cr.data.botDifficultyTeam[fF.fG[fF.fI[b4]]];
				else if (1 === cr.data.botDifficultyType) {
			var aUu = this.aOq.length;
			for (a5 = cr.fd - 1; 0 <= a5; a5--) this.hF[a5 + aUr] = a5 % aUu
		} else
			for (aUu = cr.data.botDifficultyValue, a5 = cr.fd - 1; 0 <= a5; a5--) this.hF[a5 + aUr] = aUu;
		else
			for (var aUt = 8 === cr.fW ? 1 : 0, a5 = cr.fd - 1; 0 <= a5; a5--) this.hF[a5 + aUr] = aUt;
		for (a5 = 0; a5 < aUr; a5++) this.hF[a5] = 6;
		var u = cr.fc;
		for (a5 = 0; a5 < u; a5++) this.hF[a5] <= 2 ? (aUn[a5] = 5, aUo[a5] = aUp[a5] = 1040, 0 === this.hF[a5] ? (aUl[a5] = 980, aUm[a5] = 980) : 1 === this.hF[a5] ? (aUl[a5] = 980, aUm[a5] = 920, aUo[a5] = aUp[a5] = 1100) : (aUl[a5] = 825, aUm[
			a5] = 750)) : this.hF[a5] <= 4 ? (aUn[a5] = 1 + fj.fk(20), 3 === this.hF[a5] ? (aUl[a5] = aUm[a5] = 500, aUo[a5] = aUp[a5] = 1e3) : (aUp[a5] = 250 + fj.fk(1501), aUo[a5] = 500 + fj.fk(501), aUl[a5] = 300 + fj.fk(201), aUm[a5] =
			100 + fj.fk(201))) : this.hF[a5] <= 5 ? (aUo[a5] = 1e3, aUp[a5] = 1e3, aUn[a5] = 35 + fj.fk(16), aUl[a5] = 300 + fj.fk(201), aUm[a5] = 50 + fj.fk(101)) : (aUo[a5] = aUp[a5] = 800, aUn[a5] = 5, aUl[a5] = 10, aUm[a5] = 250), aUv(a5)
	}, this.aUs = function() {
		for (var gt = ph.fV, aUr = cr.fb, a5 = gt - 1; 0 <= a5; a5--) this.hF[a5 + aUr] = 0;
		for (var av = 0; av < 6; av++) {
			for (a5 = gt + ph.fU[av] - 1; gt <= a5; a5--) this.hF[a5 + aUr] = av;
			gt += ph.fU[av]
		}
	}, this.aR1 = function(bB, value) {
		vn[bB] = Math.min(value, vn[bB])
	}, this.ar = function(bB) {
		0 == --vn[bB] && ! function(bB) {
			(function(bB) {
				aUo[bB] !== aUp[bB] && (aUo[bB] += aUo[bB] < aUp[bB] ? 3 : -3);
				aUl[bB] !== aUm[bB] && (aUl[bB] += aUl[bB] < aUm[bB] ? aUn[bB] : -aUn[bB], aUl[bB] = (Math.abs(aUl[bB] - aUm[bB]) <= aUn[bB] ? aUm : aUl)[bB]);
				vn[bB] = aQ.aR(aUo[bB], 10)
			})(bB), fN.aDn.aQw(bB, aQ.aR(aUl[bB] * f4.g2[bB], 1e3))
		}(bB)
	}, this.aUy = function(bB, fi) {
		aUo[bB] = aUp[bB] = fi
	}
}

function q4() {
	this.kS = function() {
		if (2 === cr.kK) cr.kT = 2;
		else {
			if (8 === cr.fW) aV.et.jy(0) || 0 === f4.fv[0] ? cr.a1f = 1 : aV.et.jy(1) || 0 === f4.fv[1] ? cr.a1f = 0 : cr.a1f = +(f4.g0[1] > f4.g0[0]);
			else {
				if (cr.f0) {
					var a6Z = dA.aEe();
					if (cr.a1g = a6Z, fF.fG[a6Z]) return void(cr.kT = +(fF.fI[cr.gJ] === a6Z))
				}
				cr.a1f = fH[0]
			}
			cr.kT = +(cr.a1f === cr.gJ)
		}
	}
}

function aId() {
	var jA, m6 = !1,
		aV0 = !1,
		aV1 = -1e4,
		aV2 = -1,
		aV3 = 0;

	function resize(aV8) {
		jA = 0, l5.l6() && (aV6(aV8) || m6) && (m6 = !1, cz.resize(), aI7.vO.resize(), a2J.a4(), tT.a4(), eC.resize(), u5.resize(), rf.resize(), vK.resize(), d7.resize(), 1 <= cr.d6 ? (kZ.resize(!1), m1.resize(), gO.resize(), dM.resize(), gM
		.resize(), ew.resize(), dG.resize(), ka.resize(), iZ.resize(), hp.resize(), a21.resize(), gZ.resize(), re.resize(), fm.resize(), gT.resize(), dA.resize(), dM.aRp()) : (eW.a2N(), eW.a2P()), bV.bW = !0)
	}

	function aV5(kv) {
		return kv && 128 < kv ? Math.floor(kv) : 128
	}

	function aV6(aV8) {
		var aZ, b6, aVA, de, di;
		if (!(0 < cy.aFe)) return de = aV5(document.documentElement.clientWidth), di = aV5(window.visualViewport && 2 !== cT.id ? window.visualViewport.height : document.documentElement.clientHeight), aZ = de, b6 = di, aVA = 0 !== cT.id || aZ < b6 ?
			700 : 1200, aVA = Math.min(aVA / ((aZ + b6) / 2), 1), aVA = 0 === r.buffer.data[1].value ? 2 * aVA / 3 : Math.min(aVA + (r.buffer.data[1].value - 1) * (1 - aVA) / 2, 1), cy.ny = (window.devicePixelRatio || 1) * aVA, __fx
			.hoveringTooltip.canvasPixelScale = cy.ny, aV8 && !aV0 ? (aV0 = !0, d7.removeChild(document.body, zD)) : aV0 && (aV0 = !1, document.body.appendChild(zD)), aZ = Math.floor(.5 + de * cy.ny), b6 = Math.floor(.5 + di * cy.ny), aZ !== cy
			.aZ || b6 !== cy.b6 ? (cy.aZ = aZ, cy.b6 = b6, cy.min = aLy(aZ, b6), cy.max = uS(aZ, b6), cy.l7 = aQ.aR(aZ + b6, 2), cy.aV4 = aZ / b6, zD.width = aZ, zD.height = b6, zD.style.width = de + "px", zD.style.height = di + "px", aV2 = bV
				.aw + 1e3, 1) : void 0
	}
	this.aZ = 0, this.b6 = 0, this.min = 0, this.max = 0, this.l7 = 0, this.aV4 = 1, this.ny = 1, this.aFe = 0, this.rd = function() {
		this.aZ = aV5(document.documentElement.clientWidth) + 2, this.b6 = aV5(document.documentElement.clientHeight) + 2
	}, this.a4 = function() {
		jA = 1, zD = document.getElementById("canvasA"), 2 === cT.id && (zD.style.webkitUserSelect = "none"), (dO = zD.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aV6(0)
	}, this.ar = function() {
		50 <= ++jA && resize(0), -1 === aV2 || bV.aw < aV2 || (aV2 = -1, 2e3 * ++aV3 >= bV.aw + 8e3 ? console.log("error 3748") : cT.cU.setState(15))
	}, this.aJ8 = function(aJi) {
		m6 = !0, resize(aJi)
	}, this.aKw = function() {
		aV1 + 1e3 > bV.aw || (aV1 = bV.aw, resize(0))
	}
}

function aFl() {
	ew.ar(), fm.ar(), gO.mH(), f.i.ar()
}

function aFm() {
	iJ.ar(), a22.ar(), a1m.ar(), m9.ar(), a24.ar(), oQ.ar(), fN.ar(), am.i.ar(), f8.aBK(), kZ.ar(), ph.ar(), a1w.ar(), fm.ar(), fm.xw(), gO.ar(), gX.ar(), m1.ar(), hp.ar(), a27.aTQ(), ew.ar(), a25.ar(), gM.ar(), iZ.ar(), gK.ar(), dA.ar(), f.i.ar(), f
		.eY.ar(), d7.ar(), tX.tZ.ar(), tq.ar(), bV.ar()
}

function aFo() {
	gQ.ar(), gT.ar(), a21.ar(), gS.ar(), ka.ar(), a26.ar(), a27.ar(), aCg.aVC()
}

function aFn() {
	kZ.gW(!1), hp.gW(), gO.gW(!1), m1.gW(), gM.gW(), iZ.gW(), fm.gW(!1), dA.d3()
}

function aFk() {
	fm.gW(!1) && (bV.bW = !0), f.i.ar()
}

function aIX() {
	var kv, aZ, b6, max, aVD, wH, aVF, aVG, aVH, aVI, aVJ, aVK, aVL, aVM, aVE = 1e4;

	function aVT(aVS, wG, u) {
		var a5;
		for (aVF[0] = aVS, a5 = 1; a5 < u; a5++) aVF[a5] = aVF[a5 - 1] + wG, wG = aVF[a5] >= aVE ? (aVF[a5] = aVE - 1, -wG) : aVF[a5] < 0 ? (aVF[a5] = 0, -wG) : (wG += 16384 <= fj.random() ? wH : -wH) < -aVD ? -aVD : aVD < wG ? aVD : wG
	}

	function aVV(aJ, aK, aVW, u) {
		(aVW ? function(aJ, aK, u) {
			var a5;
			for (a5 = 0; a5 < u; a5++) kv[aK * aZ + aJ + a5] = aVF[a5]
		} : function(aJ, aK, u) {
			var a5;
			for (a5 = 0; a5 < u; a5++) kv[aK * aZ + aJ + a5 * aZ] = aVF[a5]
		})(aJ, aK, u)
	}

	function aVZ(value, u) {
		var a5, y8, gt, aJi = value - aVF[u - 1];
		if (0 != aJi) {
			for (y8 = 1 + aQ.aR(Math.abs(aJi), u - 1), y8 = aJi < 0 ? -y8 : y8, aVF[u - 1] = value, gt = (gt = u - 1 - aQ.aR(Math.abs(aJi), Math.abs(y8))) < 1 ? 1 : u - 2 < gt ? u - 2 : gt, a5 = u - 2; gt <= a5; a5--) aVF[a5] += aJi - (u - 1 - a5) *
				y8;
			(aJi < 0 ? function(u) {
				var a5;
				for (a5 = u - 2; 1 <= a5; a5--) aVF[a5] < 0 && (aVF[a5] = -aVF[a5] - 1)
			} : function(u) {
				var a5;
				for (a5 = u - 2; 1 <= a5; a5--) aVF[a5] >= aVE && (aVF[a5] = 2 * aVE - aVF[a5] - 1)
			})(u)
		}
	}

	function aVc(a3A, a3B, u) {
		for (var a5 = 0; a5 < u; a5++) a3A[a5] = a3B[a5]
	}

	function aVd(au) {
		for (var a5 = 0; a5 < au.length - 1; a5++) au[a5] = au[a5 + 1] - au[a5];
		au[au.length - 1] = au[au.length - 3]
	}

	function aVe(gm, gap, ih) {
		aVG.push(gm), aVH.push(gap), aVI.push(ih)
	}
	this.d = function(t) {
		! function(t) {
			var a5;
			for (aZ = t[0], b6 = t[1], aVD = t[2], wH = t[3], kv = new Int16Array(aZ * b6), max = b6 < aZ ? aZ : b6, aVF = new Int16Array(max), aVG = [], aVH = [], aVI = [], aVJ = new Array(aZ), aVK = new Array(b6), a5 = aZ - 1; 0 <= a5; a5--)
				aVJ[a5] = !1;
			for (a5 = b6 - 1; 0 <= a5; a5--) aVK[a5] = !1;
			aVL = new Int16Array(aZ), aVM = new Int16Array(b6)
		}(t),
		function(u) {
			var aVS = fj.random() % aVE,
				wG = fj.random() % (2 * aVD + 1) - aVD;
			aVT(aVS, wG, u)
		}(max), aVc(aVM, aVF, b6), aVV(0, 0, !0, aZ);
		var aJ, aK, t = kv[0],
			u = max,
			wG = fj.random() % (2 * aVD + 1) - aVD;
		for (aVT(t, wG, u), aVc(aVL, aVF, aZ), aVV(0, 0, !1, b6), aVd(aVL), aVd(aVM), aVT(kv[aZ - 1], aVL[aZ - 1], b6), aVV(aZ - 1, 0, !1, b6), aVT(kv[aZ * (b6 - 1)], aVM[b6 - 1], aZ), aVZ(kv[aZ * b6 - 1], aZ), aVV(0, b6 - 1, !0, aZ), aVJ[aZ -
			1] = aVJ[0] = !0, aVK[b6 - 1] = aVK[0] = !0, aVe(0, aZ, !0), aVe(0, b6, !1), ! function() {
				var aVg, gm;
				for (;;) {
					if (aVg = function() {
							var a5, aVg = aVG.length - 1;
							for (a5 = aVg - 1; 0 <= a5; a5--) aVH[a5] > aVH[aVg] && (aVg = a5);
							return aVg
						}(), aVH[aVg] < 5) return;
					gm = aVG[aVg] + aQ.aR(aVH[aVg], 2), (aVI[aVg] ? function(aJ) {
						var u, aVj, a5, aVk = 0,
							aVl = 0;
						for (; aVl < b6 - 1;) {
							for (a5 = aVk + 1; a5 < b6; a5++)
								if (aVK[a5]) {
									aVl = a5;
									break
								} u = aVl - aVk + 1, aVT(kv[aJ + aZ * aVk], 0 === aVk ? aVL[aJ] : aVF[aVj - 1] - aVF[aVj - 2], u), aVZ(kv[aVl * aZ + aJ], u), aVV(aJ, aVk, !1, u), aVj = u, aVk = aVl
						}
						aVJ[aJ] = !0
					} : function(aK) {
						var u, aVj, a5, aVk = 0,
							aVl = 0;
						for (; aVl < aZ - 1;) {
							for (a5 = aVk + 1; a5 < aZ; a5++)
								if (aVJ[a5]) {
									aVl = a5;
									break
								} u = aVl - aVk + 1, aVT(kv[aK * aZ + aVk], 0 === aVk ? aVM[aK] : aVF[aVj - 1] - aVF[aVj - 2], u), aVZ(kv[aK * aZ + aVl], u), aVV(aVk, aK, !0, u), aVj = u, aVk = aVl
						}
						aVK[aK] = !0
					})(gm), aVe(gm, aVG[aVg] + aVH[aVg] - gm, aVI[aVg]), aVH[aVg] = gm - aVG[aVg] + 1
				}
			}(), aJ = 0; aJ < aZ; aJ++)
			if (!aVJ[aJ])
				for (aK = 0; aK < b6; aK++) aVK[aK] || ! function(aJ, aK) {
					var value = kv[aK * aZ + aJ - 1] + kv[(aK - 1) * aZ + aJ],
						aAm = 2;
					aVJ[aJ + 1] && (aAm++, value += kv[aK * aZ + aJ + 1]);
					aVK[aK + 1] && (aAm++, value += kv[(aK + 1) * aZ + aJ]);
					kv[aK * aZ + aJ] = aQ.aR(value, aAm)
				}(aJ, aK)
	}, this.je = function() {
		return kv
	}, this.jX = function() {
		kv = null
	}
}

function aVn() {
	this.iO = function(player) {
		aV.et.pZ(player) && ew.f3(80, L(475), 637, 0, dZ.aHP, dZ.f6, -1, !1)
	}, this.iR = function(player) {
		aV.et.pZ(player) && ew.f3(80, L(476), 637, 0, dZ.aHP, dZ.f6, -1, !1)
	}
}

function aIJ() {
	var b6, canvas, ly, aVo, aVp, aVq = -1;

	function aVr() {
		var qu, ck = canvas.getContext("2d", {
			alpha: !0
		});
		ck.clearRect(0, 0, b6, b6), ck.fillStyle = dZ.da, ck.fillRect(0, 0, b6, b6), 9 === aVo && (ck.fillStyle = dZ.ql, ck.fillRect(0, 0, b6, b6)), ck.fillStyle = dZ.dc, ck.fillRect(0, 0, b6, 1), ck.fillRect(0, 0, 1, b6), ck.fillRect(0, b6 - 1, b6,
			1), ck.fillRect(b6 - 1, 0, 1, b6), qu = .9 * b6 / l5.get(0).width, ck.imageSmoothingEnabled = !0, ck.setTransform(qu, 0, 0, qu, Math.floor((b6 - qu * l5.get(0).width) / 2), Math.floor((b6 - qu * l5.get(0).height) / 2)), ck.drawImage(
			l5.get(0), 0, 0), ck.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aVt(jp, jq) {
		if (!dG.dH) return jp <= b6 + cz.gap && jq >= gM.aK ? 9 : -1;
		if (jp <= 4 * b6 + cz.gap) {
			if (jq >= gM.aK) return 0;
			if (jq >= gM.aK - b6 - aVp * cz.gap) return 2
		} else if (jp <= 7 * b6 + cz.gap && jq >= gM.aK - b6 - aVp * cz.gap) return 1;
		return -1
	}
	this.dH = !1, this.a4 = function() {
		aVo = -1, this.dH = !1, aVp = cT.cU.cV() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		b6 = gM.b6, (canvas = document.createElement("canvas")).width = b6, canvas.height = b6, ly = aV.d1.d2(1, (cT.cU.cV() ? .5 : .45) * b6), aVr()
	}, this.aVs = function() {
		return !(1 !== cr.d6 || cr.gH || (cr.cs ? !ka.cq : this.dH && cr.eh))
	}, this.dI = function() {
		this.dH = !this.dH, this.dH ? (ka.d4(!1), cr.cs && ka.cq && ka.dD(!0), this.dJ(), 9 === aVo && (aVo = 0)) : (aVo = -1, aVr(), !cr.eh || 1 !== cr.d6 || cr.gH || cr.cs || cT.cU.setState(1)), bV.bW = !0
	}, this.dJ = function() {
		(cr.eh || cr.cs) && 1 === cr.d6 && (kZ.gW(!0), cr.gH || setTimeout(function() {
			gb.kd()
		}, 0), cT.cU.setState(0))
	}, this.dB = function(jp, jq) {
		return 0 <= (aVq = aVt(jp, jq)) || !dG.dH || cr.eh || cr.cs || re.d8 || dG.dI(), aVq
	}, this.rB = function(jp, jq) {
		jp = aVt(jp, jq);
		jp !== aVo && (aVo = jp, this.dH || aVr(), bV.bW = !0)
	}, this.aKT = function(jp, jq) {
		jp = aVt(jp, jq);
		return -1 !== jp && aVq === jp && (this.dH ? cr.d9 ? (0 <= jp && ka.d4(!1), !cr.cs) : (0 === jp ? cr.vM() : 1 === jp ? this.dI() : 2 === jp && d7.dF(1, 0), !0) : 9 === jp && (this.dI(), !0))
	}, this.cQ = function() {
		var aZ;
		this.dH ? (aZ = Math.floor(5.5 * b6), dO.setTransform(1, 0, 0, 1, cz.gap, gM.aK), dO.fillStyle = dZ.da, dO.fillRect(0, 0, aZ, b6), 0 === aVo ? (dO.fillStyle = dZ.ql, dO.fillRect(0, 0, 4 * b6, b6)) : 1 === aVo && (dO.fillStyle = dZ.ql, dO
				.fillRect(4 * b6, 0, Math.floor(1.5 * b6), b6)), dO.fillStyle = dZ.dc, dO.fillRect(0, 0, aZ, 1), dO.fillRect(0, 0, 1, b6), dO.fillRect(4 * b6, 0, 1, b6), dO.fillRect(0, b6 - 1, aZ, 1), dO.fillRect(aZ - 1, 0, 1, b6), dO.font =
			ly, aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 1), dO.fillText(L(477), 2 * b6, .54 * b6), aZ = .4 * b6, dG.aVx(cz.gap + 4 * b6 + (1.5 * b6 - aZ) / 2, gM.aK + .3 * b6, aZ), aZ = 1, dO.setTransform(1, 0, 0, 1, cz.gap, gM.aK -
				aZ * aVp * cz.gap - aZ * b6), dO.fillStyle = dZ.da, dO.fillRect(0, 0, 4 * b6, b6), aVo === aZ + 1 && (dO.fillStyle = dZ.ql, dO.fillRect(0, 0, 4 * b6, b6)), dO.fillStyle = dZ.dc, dO.fillRect(0, 0, 4 * b6, 1), dO.fillRect(0, 0,
				1, b6), dO.fillRect(4 * b6, 0, 1, b6), dO.fillRect(0, b6 - 1, 4 * b6, 1), dO.fillText(L(0 === aZ ? 477 : 478), 2 * b6, .54 * b6), dO.setTransform(1, 0, 0, 1, 0, 0)) : dO.drawImage(canvas, cz.gap, gM.aK)
	}, this.aFV = function(player) {
		return 0 !== f4.fv[player] && 2 !== cr.d6 && !aV.et.jy(player)
	}, this.aVx = function(aJ, aK, u) {
		dO.setTransform(1, 0, 0, 1, aJ, aK), dO.lineWidth = cz.qm, dO.strokeStyle = dZ.dc, dO.beginPath(), dO.moveTo(0, 0), dO.lineTo(u, u), dO.moveTo(0, u), dO.lineTo(u, 0), dO.stroke()
	}
}

function aJ0() {
	this.qm = 0, this.gap = 0, this.ip = 0, this.o0 = 0, this.a4 = function() {
		this.resize()
	}, this.resize = function() {
		this.qm = .0022 * aV.d1.nu(.5) * cy.l7, this.ip = this.qm / cy.ny, this.gap = Math.max(Math.floor((cT.cU.cV() ? .0114 : .01296) * cy.l7), 2), this.o0 = this.gap / cy.ny
	}
}

function aQX() {
	var aVz, aW0, aTK;

	function aW6(a5) {
		return aV.color.aGy(aW0[a5][0], aW0[a5][1], aW0[a5][2])
	}

	function aWB(a6, av) {
		return aV.color.aWJ(aW0[a6], aW0[av]), aW6(av)
	}

	function aW4() {
		aVz && (aVz.remove(), aVz = null)
	}
	this.show = function(a2, colors, id) {
		0 <= (aTK = id) && f.i.e4(0) && f.g.si(0, id), a2 = (a2 = (a2 = (a2 = (a2 = (a2 = (a2 = (a2 = (a2 = (a2 = (a2 = (a2 = a2.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aW0 = colors, (aVz = document.createElement("div")).style.position = "fixed", aVz.style.top = "0", aVz.style.left = "0", aVz.style.width = "100%", aVz.style.height = "100%", aVz.style.backgroundColor = aV.color.aGz(aW0[0][0], aW0[0][
				1], aW0[0][2], .6), aVz.style.zIndex = "6", aVz.onclick = function(ej) {
				ej.target === aVz && aW4()
			},
			function(a2) {
				var gp, aW5 = document.createElement("div");
				aW5.style.position = "absolute", aW5.style.display = "flex", aW5.style.flexDirection = "column", aW5.style.top = "50%", aW5.style.left = "50%", aW5.style.backgroundColor = aW6(2), gp = cT.cU.cV() ? aV.d1.u3(cy.min) : aV.d1.iq(.4);
				gp = Math.max(gp, 200), aW5.style.width = aV.d1.io(gp), aW5.style.height = aV.d1.io(gp), aW5.style.transform = "translate(-50%, -50%)",
					function(aW5, gp) {
						var aWA = document.createElement("div");
						aWA.style.flex = "0 0 10%", aWA.style.overflow = "hidden", aWA.style.backgroundColor = aW6(1), aWA.style.color = aWB(1, 7), aWA.style.font = aV.d1.d2(1, .05 * gp), aWA.style.display = "flex", aWA.style.alignItems =
							"center", aWA.style.justifyContent = "center", aWA.innerHTML = L(479), aW5.appendChild(aWA)
					}(aW5, gp),
					function(aW5, a2, gp) {
						var aWC = document.createElement("div");
						aWC.style.flex = "0 0 70%", aWC.style.overflowY = "auto", aWC.style.overflowX = "hidden", aWC.style.whiteSpace = "pre-wrap", aWC.style.wordWrap = "break-word", aWC.style.padding = aV.d1.io(.02 * gp), aWC.style
							.backgroundColor = aW6(2), aWC.style.color = aWB(2, 8), aWC.style.font = aV.d1.d2(0, .07 * gp), aWC.innerHTML = a2, aWC.innerHTML = "<style>a { color: inherit; }</style>" + aWC.innerHTML, aW5.appendChild(aWC)
					}(aW5, a2, gp),
					function(aW5, gp) {
						var a90 = document.createElement("div"),
							aWD = (a90.style.display = "flex", a90.style.flexDirection = "row", a90.style.justifyContent = "space-between", a90.style.alignItems = "stretch", a90.style.backgroundColor = aW6(3), a90.style.flex = "1", a90.style
								.padding = aV.d1.io(.01 * gp), a90.style.gap = aV.d1.io(.01 * gp), document.createElement("div")),
							aWE = (aWD.style.flex = "0 0 60%", aWD.style.height = "100%", new ir(L(344, 0, 0, 1), function() {
								aW4()
							}, aW6(4), !1)),
							aWE = (aWE.button.style.width = "100%", aWE.button.style.height = "100%", aWE.button.style.color = aWB(4, 9), aWE.button.style.font = aV.d1.d2(1, .05 * gp), aWD.appendChild(aWE.button), document.createElement("div")),
							aWG = (aWE.style.flex = "0 0 15%", aWE.style.height = "100%", aWE.style.backgroundColor = aW6(5), document.createElement("div")),
							aWH = (aWG.style.flex = "1", aWG.style.height = "100%", new ir(L(480), function(ej) {
								return aV.d1.a4v(ej), aTK < 0 || f.i.e4(0) && (f.g.si(1, aTK), aTK = -1), !0
							}, aW6(6), !1));
						aWH.button.style.width = "100%", aWH.button.style.height = "100%", aWH.button.style.color = aWB(6, 10), aWH.button.style.font = aV.d1.d2(1, .035 * gp), aWG.appendChild(aWH.button), a90.appendChild(aWD), a90.appendChild(
							aWE), a90.appendChild(aWG), aW5.appendChild(a90)
					}(aW5, gp), aVz.appendChild(aW5)
			}(a2), document.body.appendChild(aVz)
	}
}

function aQq() {
	var aWK, aWM = new Uint16Array(8);

	function aWQ(size, player) {
		for (var a5 = f4.g3[player].length - 1; size <= a5; a5--) fK.aKK(f4.g3[player][a5], player)
	}
	this.a4 = function() {
		aWK = 0
	}, this.aWN = function(player, aWO) {
		return gx.a6w[1] = f4.g3[player].length, gx.a6w[0] === cr.fc ? fN.aQp.aRO(player) : this.aRM(player, gx.a6w[0]), (0 !== gx.a6w[1] || 0 !== f4.g3[player].length) && !(!aWO && gx.a6w[1] === f4.g3[player].length || (gx.a6w[0] === cr.fc ? f4
			.g8[player]++ : f4.g9[player]++, 0))
	}, this.aWP = function(player) {
		aWQ(gx.a6w[1], player), iH.gE(player, gx.mt[0], gx.a6w[0]), oQ.oR(player, !1)
	}, this.aRN = function(player, oK, u, hF) {
		var aWR = aQ.aR(12 * f4.g2[player], 1024);
		hF -= hF >= aQ.aR(f4.g2[player], 2) ? aWR : 0, aWQ(u, player), iH.gE(player, hF, oK), f4.g2[player] -= hF + aWR, oQ.oR(player, !1)
	}, this.aRM = function(player, oK) {
		for (var ih, ie = fK.ie, a5 = f4.g4[player].length - 1; 0 <= a5; a5--)
			if (fK.aC1(f4.g4[player][a5]))
				for (ih = 3; 0 <= ih; ih--)
					if (fK.ii(f4.g4[player][a5] + ie[ih]) && fK.iA(f4.g4[player][a5] + ie[ih]) === oK) {
						f4.g3[player].push(f4.g4[player][a5]);
						break
					}
	}, this.aRO = function(player) {
		for (var ie = fK.ie, a5 = f4.g4[player].length - 1; 0 <= a5; a5--)
			if (fK.aC1(f4.g4[player][a5]))
				for (var ih = 3; 0 <= ih; ih--)
					if (fK.fL(f4.g4[player][a5] + ie[ih])) {
						f4.g3[player].push(f4.g4[player][a5]);
						break
					}
	}, this.aR4 = function(player, aWS) {
		var a5, a6, ih, ij, u = f4.g4[player].length,
			aJi = 256 <= u ? 12 : 32 <= u ? 6 : 1,
			y7 = u - 1 - fj.fk(aJi),
			ie = fK.ie;
		aWK = 0;
		loop: for (a5 = y7; 0 <= a5; a5 -= aJi)
			for (ih = 3; 0 <= ih; ih--)
				if ((ij = fK.fL(f4.g4[player][a5] + ie[ih]) ? cr.fc : fK.iA(f4.g4[player][a5] + ie[ih])) === cr.fc || fK.ii(f4.g4[player][a5] + ie[ih]) && ij !== player && (aWS || iE.iL(player, ij))) {
					for (a6 = aWK - 1; 0 <= a6; a6--)
						if (aWM[a6] === ij) continue loop;
					if (aWM[aWK] = ij, 8 <= ++aWK) return !0
				}
		return 0 < aWK
	}, this.aR5 = function(player, aWS) {
		var a5, ih, ij, ie = fK.ie;
		for (aWK = 0, a5 = f4.g4[player].length - 1; 0 <= a5; a5--)
			for (ih = 3; 0 <= ih; ih--)
				if ((ij = fK.fL(f4.g4[player][a5] + ie[ih]) ? cr.fc : fK.iA(f4.g4[player][a5] + ie[ih])) === cr.fc || fK.ii(f4.g4[player][a5] + ie[ih]) && ij !== player && (aWS || iE.iL(player, ij))) return aWM[aWK++] = ij, !0;
		return !1
	}, this.aR7 = function() {
		for (var av, a5 = aWK - 1; 0 <= a5; a5--)
			if (aWM[a5] === cr.fc) {
				for (aWK--, av = a5; av < aWK; av++) aWM[av] = aWM[av + 1];
				return !0
			} return !1
	}, this.aR6 = function(player) {
		for (var av, a5 = aWK - 1; 0 <= a5; a5--)
			if (iH.oO(player, aWM[a5]))
				for (aWK--, av = a5; av < aWK; av++) aWM[av] = aWM[av + 1];
		return 0 === aWK
	}, this.aRD = function() {
		for (var a5 = aWK - 1; 0 <= a5; a5--)
			if (aV.et.jy(aWM[a5])) return !0;
		return !1
	}, this.aRF = function() {
		for (var a5 = aWK - 1; 0 <= a5; a5--) aV.et.jy(aWM[a5]) || (aWM[a5] = aWM[--aWK]);
		return 0 < aWK
	}, this.aRB = function(player) {
		for (var av, aWT = aWM[0], aWU = f4.g2[aWT] + iH.a4B(aWT, player), a5 = aWK - 1; 1 <= a5; a5--)(av = f4.g2[aWM[a5]] + iH.a4B(aWM[a5], player)) < aWU && (aWT = aWM[a5], aWU = av);
		return aWT
	}, this.aRH = function(player) {
		var b6, aWV = aWM[0];
		if (1 !== aWK)
			for (var aWW = aQ.aR(f4.fy[player] + f4.fw[player], 2), aWX = aQ.aR(f4.fz[player] + f4.fx[player], 2), h3 = aLx(aWW - aQ.aR(f4.fy[aWV] + f4.fw[aWV], 2)) + aLx(aWX - aQ.aR(f4.fz[aWV] + f4.fx[aWV], 2)), a5 = aWK - 1; 1 <= a5; a5--)(b6 =
				aLx(aWW - aQ.aR(f4.fy[aWM[a5]] + f4.fw[aWM[a5]], 2)) + aLx(aWX - aQ.aR(f4.fz[aWM[a5]] + f4.fx[aWM[a5]], 2))) < h3 && (h3 = b6, aWV = aWM[a5]);
		return aWV
	}, this.aRL = function() {
		for (var aWY = aWM, aWZ = aWY[0], g2 = f4.g2, aWa = g2[aWZ], a5 = aWK - 1; 1 <= a5; a5--) {
			var bB = aWY[a5],
				av = g2[bB];
			aWa < av && (aWZ = bB, aWa = av)
		}
		return aWZ
	}, this.aRG = function() {
		return aWM[fj.fk(aWK)]
	}
}

function aIu() {
	this.aKy = new aWb, this.pX = new ju, this.sa = new vP
}

function mf() {
	function aWd(au) {
		if (0 === au.length) r.md.pE(116, "");
		else {
			for (var aWe = au[0], a5 = 1; a5 < au.length; a5++) aWe += ";" + au[a5];
			r.md.pE(116, aWe)
		}
	}
	this.aFf = function() {
		r.buffer.data[110].value.length && (r.buffer.data[106].value = r.buffer.data[110], r.md.pE(110, ""), this.a59())
	}, this.a59 = function() {
		var au = r.buffer.data[116].value.split(";");
		for (au.length % 2 == 1 && au.pop(), au.unshift(r.buffer.data[106].value), au.unshift(r.buffer.data[105].value), a5 = 2; a5 < au.length; a5 += 2)
			if (au[a5] === au[0]) {
				au.splice(a5, 2);
				break
			} for (var aWc = [], a5 = 0; a5 < au.length; a5 += 2) aWc.push(au[a5]);
		aWd(au), r.buffer.data[117].value = 0, r.buffer.data[117].la = aWc
	}, this.a5A = function(go) {
		r.buffer.data[117].la.splice(go, 1), r.buffer.data[117].value = Math.min(go, r.buffer.data[117].la.length - 1);
		var au = r.buffer.data[116].value.split(";");
		au.splice(2 * go, 2), aWd(au)
	}, this.v4 = function(go) {
		var au = r.buffer.data[116].value.split(";");
		return {
			aE: au[2 * go],
			password: au[2 * go + 1]
		}
	}, this.aAX = function() {
		var kv = aQ.ld(r.buffer.data[121].value, -1, 262143);
		return kv = -1 === kv ? ~~(262144 * Math.random()) : kv
	}, this.mj = function() {
		for (var au = document.cookie.split(";"), a5 = 0; a5 < au.length; a5++) {
			var qv, v = au[a5].trim();
			0 !== v.length && (qv = 0 <= (qv = v.indexOf("=")) ? v.substring(0, qv) : v, document.cookie = qv + "=;expires=0;path=/", document.cookie = qv + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = qv +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function aN5() {
	this.a2d = function(size) {
		for (var bF = bG, au = [], a5 = 0; a5 < size; a5++) au.push(String.fromCharCode(bF.bM(16)));
		return au.join("")
	}, this.aRz = function(v) {
		return 20 < (v = v.trim()).length ? v.substring(0, 20) : v
	}
}

function a9B() {
	function aWi() {
		var id = bG.bM(3);
		return 0 === id ? {
			id: id,
			aE: bG.bM(30),
			a06: or.a66.a9g(o.aA.b8(7))
		} : 1 === id ? {
			id: id,
			aE: bG.bM(30),
			sK: bG.bM(3),
			value: bG.bM(30),
			target: bG.bM(30)
		} : 2 === id ? {
			id: id,
			aE: bG.bM(30),
			sK: bG.bM(3)
		} : 3 === id ? {
			id: id,
			aE: bG.bM(30),
			sK: bG.bM(3),
			value: bG.bM(4),
			target: bG.bM(30)
		} : 4 === id ? {
			id: id,
			aE: bG.bM(30),
			sK: bG.bM(3),
			target: bG.bM(30)
		} : 5 === id ? {
			id: id,
			sK: bG.bM(6)
		} : 6 === id ? {
			id: id,
			value: bG.bM(17)
		} : null
	}
	this.aCf = function(l) {
		if (l !== f.i.dw) f.i.close(l, 3239);
		else if (6 !== eW.eX()) f.i.close(l, 3271);
		else {
			or.a4();
			for (var a5 = 0; a5 < 4; a5++) {
				var aGd = or.i.aA1[a5],
					playerCount = (aGd.aMe = bG.bM(10), aGd.bL = bG.bM(6), aGd.mapSeed = bG.bM(14), aGd.aMX = bG.bM(4), aGd.aMa = bG.bM(6), aGd.aMb = bG.bM(14), aGd.aMc = bG.bM(4), aGd.aMj = bG.bM(1), aGd.aMZ = bG.bM(12), aGd.spawningSeed = bG
						.bM(14), bG.bM(16));
				or.ox.oz[a5] = bG.bM(16);
				for (var a6 = 0; a6 < playerCount; a6++) or.ox.aDV(a5, bG.bM(30), o.aA.b8(5), bG.bM(4), bG.bM(30), bG.bM(7), bG.bM(16), bG.bM(18), bG.bM(11), bG.bM(12), bG.bM(6))
			}
			d7.dF(29), or.i.aWf(!0)
		}
	}, this.aCp = function(l) {
		if (l !== f.i.dw) f.i.close(l, 3239);
		else if (or.v6) {
			or.i.aMm[0] = bG.bM(20), or.i.aMm[1] = bG.bM(20);
			for (var aWg = bG.bM(16), a6 = 0; a6 < aWg; a6++) {
				var id = bG.bM(3);
				0 === id ? or.ox.aDV(bG.bM(2), bG.bM(30), o.aA.b8(5), 0, 1234566, 127, 0, bG.bM(18), 0, bG.bM(12), 0) : 1 === id ? or.ox.aLt(bG.bM(16), bG.bM(2)) : 2 === id ? or.ox.aLp(bG.bM(16), bG.bM(2), bG.bM(2)) : 3 === id ? or.ox.aLs(bG.bM(
					16), bG.bM(2)) : 4 === id ? or.ox.aLk(bG.bM(16), bG.bM(2), bG.bM(4), bG.bM(30), bG.bM(7), bG.bM(16), bG.bM(11), bG.bM(18)) : 5 === id ? or.ox.aLm(bG.bM(16), bG.bM(2), bG.bM(1)) : 6 === id && or.ox.aLl(bG.bM(16), bG.bM(2),
					bG.bM(6))
			}
			for (var a5 = 0; a5 < 4; a5++) {
				var aGd = or.i.aA1[a5];
				if (aGd.aMe = bG.bM(10), aGd.aMa = bG.bM(6), aGd.aMb = bG.bM(14), aGd.aMc = bG.bM(4), 0 === aGd.aMe) {
					if (aGd.dv = bG.bM(10), aGd.aNq = bG.bM(10), or.a68.pI(a5)) return;
					aGd.bL = bG.bM(6), aGd.mapSeed = bG.bM(14), aGd.aMX = bG.bM(4), aGd.aMj = bG.bM(1), aGd.aMZ = bG.bM(12), aGd.spawningSeed = bG.bM(14), aGd.aWh.push(aGd.aWh[0]), aGd.aWh.shift()
				}
			}
			or.i.aTF()
		} else f.i.close(l, 3251)
	}, this.aCq = function(l) {
		if (l !== f.i.dw) f.i.close(l, 3272);
		else if (or.v6) {
			for (var a9v = bG.bM(4), aGd = or.i.aA1[a9v], aA3 = aGd.aA3, aNi = (aGd.aGe = bG.bM(20), bG.bM(6)), a5 = 0; a5 < aNi; a5++) {
				var a0U = aWi();
				or.fp.a0T(a0U), aA3.push(a0U)
			}
			or.i.aWj(a9v)
		} else f.i.close(l, 3273)
	}, this.aCr = function(l) {
		l !== f.i.dw ? f.i.close(l, 3276) : or.v6 ? or.message.sI(aWi()) : f.i.close(l, 3277)
	}
}

function eR() {
	var aWk, aWl, aWm, aWn = ["wss://", "/s50/", "/s51/", "/s52/"],
		aWo = 0;

	function eS() {
		f.i.eS(aWk, aWl)
	}

	function aWr(ej) {
		f.a2f.aCa(aWk, new Uint8Array(ej.data))
	}

	function aWs() {}

	function ei(ej) {
		f.i.ei(aWk, ej)
	}
	this.a4 = function(go, eL, eM) {
		aWk = go, aWl = eL,
			function(eM) {
				eM = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : eG.aCU ? "ws://localhost:" + (7130 + aWk) + "/" : eM ? aWn[0] + "game.territorial.io/x0" + aWk + "/" : aWn[0] + f.i.du[aWk] + aWn[1 + eG.ta];
				(aWm = new WebSocket(eM)).binaryType = "arraybuffer", aWm.onopen = eS, aWm.onmessage = aWr, aWm.onclose = ei, aWm.onerror = aWs
			}(eM)
	}, this.aWq = function() {
		return aWm.readyState === aWm.CONNECTING
	}, this.e4 = function() {
		return aWm.readyState === aWm.OPEN
	}, this.e9 = function() {
		return aWo
	}, this.eU = function() {
		aWo = 1
	}, this.eO = function() {
		return this.aWq() || this.e4()
	}, this.eP = function(eL) {
		aWl = eL
	}, this.aL0 = function() {
		return aWl
	}, this.send = function(j) {
		this.e4() && aWm.send(j)
	}, this.close = function(ea) {
		this.eO() && (this.eQ(), aWm.close(ea))
	}, this.eQ = function() {
		aWm.onopen = null, aWm.onmessage = null, aWm.onclose = null, aWm.onerror = null
	}
}

function aIr() {
	function aWu() {
		8 === cr.fW && 1 === cr.d6 && kQ.mS.kM()
	}

	function aWt(player) {
		cr.gH ? (aBN.pK(player), f8.aBM(), cr.eh && cr.ga.ar()) : aI4.aDV(player)
	}
	this.aFW = function(player) {
		ew.pk(player, player === cr.gJ ? 21 : 22), aWt(player), aWu()
	}, this.aWv = function(player) {
		1 === cr.d6 && 0 !== f4.fv[player] && 2 !== f4.fu[player] && aWt(player), cr.kP--, cr.kO--, ew.pk(player, 4), aV.et.hm(2) && gO.gW(!0), aWu()
	}
}

function a1h() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.z2 = null
}

function mc() {
	function aWw(a5, type, a6S, oe) {
		r.buffer.data.push({
			go: a5,
			type: type || 0,
			value: a6S || 0,
			a6S: a6S || 0,
			oe: oe || 0
		})
	}

	function aWx(a5, type, a6S, oe) {
		r.buffer.data.push({
			go: a5,
			type: type,
			value: a6S || "",
			a6S: a6S || "",
			oe: oe || 0
		})
	}

	function aWy(r2) {
		for (var a5 = r.buffer.data.length; a5 < r2; a5++) r.buffer.data.push(null)
	}
	this.data = [], this.a4 = function() {
		aWw(0, 1, 0, 5), aWw(1, 1, 1), aWw(2, 0), aWx(3, 2), aWw(4, 1), aWx(5, 2, "system-ui", 2), aWw(6, 0), aWw(7, 0, 0), aWw(8, 0), aWw(9, 1, 1), aWw(10, 1), aWw(11, 1, 1), aWx(12, 2, navigator.language), aWw(13), aWw(14), aWw(15, 0, 1), aWw(
				16, 0, 3), aWy(100), aWx(100, 2), aWx(101, 2), aWx(102, 2), aWx(103, 2), aWx(104, 2), aWx(105, 2), aWx(106, 2), aWw(107), aWw(108), aWw(109), aWx(110, 2), aWw(111), aWw(112), aWw(113), aWx(114, 2), aWw(115), aWx(116, 2), aWw(117,
				1), aWx(118, 2, "", 2), aWw(119, 1, 0, 1), aWx(120, 2), aWw(121, 1, ~~(262144 * Math.random())), aWx(122, 2, "Player " + Math.floor(1e3 * Math.random())), aWw(123), aWx(124), aWw(125, 1), aWx(126, 2), aWw(127, 0, 1), aWw(128),
			aWw(129), aWw(130), aWw(131), aWw(132), aWx(133, 2), aWw(134, 0, 5), aWx(135, 2), aWx(136, 2), aWw(137), aWw(138), aWw(139), aWw(140), aWw(141), aWw(142), aWw(143), aWw(144), aWx(145, 2), aWw(146), aWw(147), aWx(148, 2), aWw(149),
			aWw(150, 0, 1), aWx(151, 2), aWw(152, 0, 5), aWw(153, 1), aWw(154, 1), aWx(155, 2), aWx(156, 2), aWw(157), aWw(158), aWw(159), aWw(160), aWx(161, 2), aWw(162, 0, 1024), aWx(163, 2, "0,0,0"), aWx(164, 2, "100,100,100"), aWx(165, 2,
				"30,30,30"), aWx(166, 2, "70,70,70"), aWx(167, 2, "100,100,100"), aWx(168, 2, "85,85,85"), aWx(169, 2, "100,100,100");
		for (var a5 = 0; a5 < 4; a5++) aWx(170 + a5, 2, "255,255,255");
		aWx(174, 2), aWx(175, 2), aWw(176, 0, 200), aWy(180), aWw(180, 0), aWw(181, 0), aWw(182, 0, 1023), aWx(183, 2)
	}, this.pE = function(go, value) {
		this.data[go].value = value
	}, this.od = function(go, value) {
		this.pE(go, value);
		var value = String(value),
			u = value.length;
		5e4 < u ? console.log("storage value too large: index " + go + " size " + u) : (r.iy.save(go, value), r.iy.save(go, String(this.data[go].oe), !0))
	}, this.ob = function(go) {
		return Number(this.data[go].value)
	}, this.aWz = function(go) {
		return String(this.data[go].value)
	}
}

function q3() {
	this.ar = function() {
		var aX4;
		2 === cr.kK ? (ew.pk(0, 59), gQ.a10(2700)) : cr.fW < 7 ? (aX4 = fF.fG[cr.a1g], aX4 = fF.t6[aX4], a21.aOw(L(481, [aX4]), 2, 1, 12), ew.f3(0, L(482, [aX4]), 40, 0, dZ.dc, dZ.f6, -1, !1), gQ.a10(2700)) : 8 === cr.fW ? (cr.kT ? ew.pk(cr.a1f,
			2) : ew.pk(1 - cr.gJ, 3), cr.a1d.aRa(cr.a1f), gQ.rF(cr.a1f, 2700, !1, 0)) : 9 === cr.fW ? (ew.aOv(), gQ.a10(2700)) : (ew.aOl(cr.a1f), gQ.rF(cr.a1f, 2700, !1, 0))
	}, this.kW = function() {
		var v;
		cr.cs || cr.eh || (v = f.i.eI(), cr.fW < 7 ? v += "/log/team" : 8 === cr.fW ? v += "/log/1v1" : 9 === cr.fW ? v += "/log/zombies" : v += "/log/br", ew.f3(720, v, 736, 0, dZ.dc, dZ.aHD, -1, !1))
	}
}

function c9() {
	function aX6(hq, xP, xR) {
		for (var y7 = Math.min(xP, xR), r2 = Math.max(xP, xR), aK = y7 + 1; aK < r2; aK++)
			if (!fK.jg(aj.aJO(hq, aK))) return;
		return 1
	}

	function aX7(hs, xO, xQ) {
		for (var y7 = Math.min(xO, xQ), r2 = Math.max(xO, xQ), aJ = y7 + 1; aJ < r2; aJ++)
			if (!fK.jg(aj.aJO(aJ, hs))) return;
		return 1
	}

	function aX8(xO, xP, xQ, xR, s0, s1) {
		for (var u = Math.min(Math.abs(xQ - xO), Math.abs(xR - xP)), h1 = Math.sign(xQ - xO), h2 = Math.sign(xR - xP), a5 = 0; a5 < u; a5++)
			if (!fK.jg(aj.aJO(xO += h1, xP += h2))) return null;
		return xO === xQ ? aX6(xO, xP, xR) ? new Uint32Array([s0, aj.hu(xO, xP), s1]) : null : aX7(xP, xO, xQ) ? new Uint32Array([s0, aj.hu(xO, xP), s1]) : null
	}
	this.yV = function(s0, s1) {
		s0 = function(s0, s1) {
			var xO = aj.fQ(s0),
				xP = aj.fR(s0),
				xQ = aj.fQ(s1),
				xR = aj.fR(s1);
			if (xO === xQ) {
				if (aX6(xO, xP, xR)) return new Uint32Array([s0, s1])
			} else {
				if (xP !== xR) return aX8(xO, xP, xQ, xR, s0, s1) || aX8(xQ, xR, xO, xP, s0, s1);
				if (aX7(xP, xO, xQ)) return new Uint32Array([s0, s1])
			}
			return null
		}(s0, s1);
		return null === s0 ? -1 : am.cG.s9(s0)
	}
}

function a95() {
	this.aL1 = function(l) {
		var username = r.buffer.data[122].value.slice(0, 20),
			username = (c.d(24 + 16 * username.length + 18), c.e(1, 0), c.e(6, 1), c.e(10, eG.aX9), c.e(2, r.buffer.data[158].value), f.g.cc(username), aV.color.aXA(r.i.aAX()));
		c.e(6, username[0]), c.e(6, username[1]), c.e(6, username[2]), f.i.dw = l, f.i.send(l, c.j)
	}, this.a9a = function(aXB, t) {
		a3.a4(), a3.e(1, 0), a3.e(6, 2), a3.e(3, aXB), 2 === aXB ? a3.e(2, t) : 3 === aXB ? w.aA.aB(t, 7, a3) : 5 === aXB && (a3.e(3, t.id), a3.e(3, t.value), a3.e(30, t.aE)), f.i.send(f.i.dw, a3.aC())
	}
}

function a8q() {
	var lE, lF, lG, lR;

	function lI() {
		lM(), 2 === cr.data.playerNamesType && 1 === aV.aW.a9c(cr.data.playerNamesData).length && (cr.data.playerNamesType = 0), 2 !== cr.data.playerNamesType && (cr.data.playerNamesData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		2 === cr.data.playerNamesType && aV.aW.aXC(lG.lQ(), cr.data.playerNamesData, 20)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(483), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(484), L(485), L(8)],
			value: cr.data.playerNamesType
		}, function(go) {
			lM(), cr.data.playerNamesType = go, d7.dF(23)
		})), lV.lb(new a52), lV.lb(new aDy({
			value: cr.data.selectableName
		}, L(486), function(value) {
			cr.data.selectableName = value
		})), lR.push(lV)
	}(lR = []), function(lR) {
		var lV;
		2 === cr.data.playerNamesType && ((lV = new lW).lX("Data"), lG = new le(0, 1, 0, 1), cr.data.playerNamesData && cr.data.playerNamesData.length === cr.fc || (cr.data.playerNamesData = new Array(cr.fc), cr.data.playerNamesData.fill(
			"")), lG.lf(aV.hf.lg(cr.data.playerNamesData, 1, '"')), lV.lb(lG), lR.push(lV))
	}(lR), lR))
}

function a8k() {
	var pw, aFL, aFM, aFR;

	function aGs(a5) {
		d7.dF(8, d7.lA, new tt(21, {
			cY: a5,
			ai: 0,
			al: 10
		}))
	}
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), aFL.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, aFM = [new ir(L(312), function() {
		aGs(5)
	}, 0, 0, 1), new ir(L(313), function() {
		aGs(6)
	}, 0, 0, 1), new ir(L(314), function() {
		aGs(7)
	}, 0, 0, 1), new ir("Audit Log", function() {
		aGs(12)
	}, 0, 0, 1)], aFR = [new ir("⬅️ " + L(4), function() {
		d7.lO()
	})], pw = new lH(L(267), aFR), aFL = new aFT(aFM, pw.lK)
}

function aIY() {
	var jK, aXD, aXE, aXF, e0 = !1;

	function aXG() {
		e0 = !0, jK = -1, aXD = new Array(4);
		for (var a5 = 3; 0 <= a5; a5--) aXD[a5] = !1;
		var aBl = Math.floor(1 + .02 * cy.min);
		aXE = new Array(4), (aXF = new Array(4))[1] = aXF[3] = aXE[0] = aXE[2] = 0, aXF[0] = aXE[3] = -aBl, aXE[1] = aXF[2] = aBl
	}

	function aXH() {
		if (-1 !== jK)
			if (0 !== cr.d6 && gQ.r2()) {
				for (var aXI = !1, a5 = 3; 0 <= a5; a5--) aXD[a5] && (aXI = !0, hZ += aXE[a5], ha += aXF[a5], fm.rB(aXE[a5], aXF[a5]), dM.aRp());
				aXI ? bV.bW = !0 : a0y.a0z()
			} else a0y.a0z()
	}
	this.aKs = function(go) {
		0 !== cr.d6 && gQ.r2() && (e0 || aXG(), aXD[go] = !0, -1 === jK) && (jK = setInterval(aXH, 20), aXH())
	}, this.aKv = function(go) {
		if (0 !== cr.d6 && (e0 || aXG(), aXD[go] = !1, -1 !== jK)) {
			for (var aXI = !1, a5 = 3; 0 <= a5; a5--) aXI = aXI || aXD[a5];
			aXI || this.a0z()
		}
	}, this.a0z = function() {
		if (e0 && -1 !== jK) {
			for (var a5 = 3; 0 <= a5; a5--) aXD[a5] = !1;
			clearInterval(jK), jK = -1
		}
	}
}

function aXJ() {
	this.vt = function(vm, player) {
		ew.vs(cr.gJ, player, vm), f.e5.aXK(vm, player)
	}, this.aOe = function(player) {
		ew.aD3(player, 0), f.e5.aXL(player)
	}, this.aXM = function(aXN, player) {
		ew.aP5(aXN, player), f.e5.aXO(aXN, player)
	}, this.zc = function() {
		cr.eh || cr.cs || f.a96.zc()
	}
}

function sX(aNf) {
	var aXP = document.createElement("div");

	function j5() {
		jC.jD() || (aXP.style.backgroundColor = aV.color.jG(dZ.da, 50))
	}

	function j6() {
		aXP.style.backgroundColor = dZ.da
	}
	this.pE = function(aNi) {
			aXP.textContent = aNi
		}, this.show = function() {
			document.body.appendChild(aXP)
		}, this.resize = function() {
			var b6 = aV.d1.iq(.03, .5);
			aXP.style.width = 2 * b6 + "px", aXP.style.height = b6 + "px", aXP.style.font = aV.d1.d2(1, .75 * b6), aV.d1.k4(aXP, 4), aV.d1.k4(aXP, 2)
		}, this.kD = function() {
			aXP.onclick = null, aXP.onmouseover = null, aXP.onmouseout = null, d7.removeChild(document.body, aXP), aXP = null
		}, aXP.style.position = "absolute", j6(), aXP.style.color = dZ.dc, aXP.style.zIndex = "3", aXP.style.right = "0", aXP.style.top = "0", aXP.style.display = "flex", aXP.style.justifyContent = "center", aXP.style.alignItems = "center", aXP.style
		.userSelect = "none", aXP.style.outline = "none", aXP.onclick = aNf, aXP.onmouseover = j5, aXP.onmouseout = j6
}

function aIQ() {
	var aXQ, aXR, aXS;

	function aXX(a5) {
		var button = a2J.aFC[a5],
			aJ = button.aJ,
			aK = button.aK,
			aZ = button.aZ,
			b6 = button.b6;
		dO.fillStyle = button.aXV, dO.fillRect(aJ, aK, aZ, b6), a5 === aXQ && (dO.fillStyle = aXS, dO.fillRect(aJ, aK, aZ, b6)), dO.lineWidth = cz.qm, dO.strokeStyle = aXR, dO.strokeRect(aJ, aK, aZ, b6),
			function(button) {
				var aJ = button.aJ,
					aK = button.aK,
					aZ = button.aZ,
					b6 = button.b6;
				aV.d1.textAlign(dO, 1), aV.d1.textBaseline(dO, 1), dO.font = button.font, dO.fillStyle = aXR, dO.fillText(button.a9Z, Math.floor(aJ + aZ / 2), Math.floor(aK + b6 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aZ = 0, this.b6 = 0, this.aK = 0, this.gap = 0, this.a4 = function() {
		aXQ = -1, aXR = dZ.dc, aXS = "rgba(255,255,255,0.16)", this.aFC = new Array(7), this.b6 = Math.floor((cT.cU.cV() ? .123 : .093) * cy.l7), this.aZ = Math.floor((cT.cU.cV() ? 3.96 : 4.2) * this.b6), this.gap = Math.floor(.025 * this.aZ);
		var aXT = Math.floor(.26 * this.b6),
			aXU = aV.d1.d2(1, aXT);
		this.aFC[0] = {
			aJ: 0,
			aK: 0,
			aZ: Math.floor(.6 * this.aZ - this.gap / 2),
			b6: this.b6,
			a9Z: "Multiplayer",
			font: aXU,
			aXV: "rgba(22,88,22,0.8)",
			fontSize: aXT
		}, aXT = Math.floor(.18 * this.b6), aXU = aV.d1.d2(1, aXT), this.aFC[1] = {
			aJ: 0,
			aK: 0,
			aZ: this.aZ - this.aFC[0].aZ - this.gap,
			b6: this.b6,
			a9Z: "Single Player",
			font: aXU,
			aXV: "rgba(22,88,88,0.8)",
			fontSize: aXT
		}, this.aFC[2] = {
			aJ: 0,
			aK: 0,
			aZ: this.aZ,
			b6: Math.floor(.3 * this.b6),
			a9Z: "",
			font: this.aFC[1].font,
			aXV: "rgba(100,0,0,0.8)",
			fontSize: this.aFC[1].fontSize
		}, this.aFC[3] = {
			aJ: 0,
			aK: 0,
			aZ: this.aZ,
			b6: this.b6,
			a9Z: "Back",
			font: this.aFC[0].font,
			aXV: "rgba(0,0,0,0.8)",
			fontSize: this.aFC[0].fontSize
		}, this.aFC[4] = {
			aJ: 0,
			aK: 0,
			aZ: this.aZ,
			b6: Math.floor(.3 * this.b6),
			a9Z: "The game was updated!",
			font: this.aFC[1].font,
			aXV: "rgba(100,0,0,0.8)",
			fontSize: this.aFC[1].fontSize
		}, this.aFC[5] = {
			aJ: 0,
			aK: 0,
			aZ: this.aFC[0].aZ,
			b6: Math.floor(.8 * this.b6),
			a9Z: "Reload",
			font: this.aFC[0].font,
			aXV: "rgba(0,100,0,0.8)",
			fontSize: this.aFC[0].fontSize
		}, this.aFC[6] = {
			aJ: 0,
			aK: 0,
			aZ: this.aFC[1].aZ,
			b6: this.aFC[5].b6,
			a9Z: "Back",
			font: this.aFC[0].font,
			aXV: "rgba(0,0,0,0.8)",
			fontSize: this.aFC[0].fontSize
		}, this.uV()
	}, this.uV = function() {
		this.aK = Math.floor(.54 * cy.b6), this.aFC[0].aJ = Math.floor(.5 * cy.aZ - .5 * this.aZ), this.aFC[1].aJ = this.aFC[0].aJ + this.aFC[0].aZ + this.gap, this.aFC[2].aJ = this.aFC[3].aJ = this.aFC[0].aJ, this.aFC[4].aJ = this.aFC[5].aJ =
			this.aFC[0].aJ, this.aFC[6].aJ = this.aFC[1].aJ, this.aFC[0].aK = Math.floor(.54 * cy.b6), this.aFC[1].aK = this.aFC[0].aK, this.aFC[2].aK = Math.floor((cy.b6 - this.aFC[2].b6 - this.aFC[3].b6 - this.gap) / 2), this.aFC[3].aK = this
			.aFC[2].aK + this.aFC[2].b6 + this.gap, this.aFC[4].aK = Math.floor((cy.b6 - this.aFC[4].b6 - this.aFC[5].b6 - this.gap) / 2), this.aFC[5].aK = this.aFC[6].aK = this.aFC[4].aK + this.aFC[4].b6 + this.gap
	}, this.aXW = function() {
		aXX(0), aXX(1)
	}, this.aXY = function() {
		aXX(2), aXX(3)
	}, this.aXZ = function() {
		aXX(4), aXX(5), aXX(6)
	}, this.rB = function(aJ, aK, gW) {
		var a5 = -1;
		return 0 === eW.eX() ? a5 = this.aG5(aJ, aK, 0, 2) : 3 === eW.eX() ? a5 = this.aG5(aJ, aK, 3, 1) : 5 === eW.eX() && (a5 = this.aG5(aJ, aK, 5, 2)), aXQ !== a5 && (aXQ = a5, gW) && (bV.bW = !0), -1 !== a5 && (u5.reset(), !0)
	}, this.aG5 = function(aJ, aK, aVk, size) {
		for (var a5 = aVk; a5 < aVk + size; a5++)
			if (aJ >= this.aFC[a5].aJ && aK >= this.aFC[a5].aK && aJ <= this.aFC[a5].aJ + this.aFC[a5].aZ && aK <= this.aFC[a5].aK + this.aFC[a5].b6) return a5;
		return -1
	}
}

function a8w() {
	var lE, aGX = !0;

	function aGf(ou, a2l) {
		var k2 = document.createElement("div"),
			aXc = document.createElement("span"),
			aXd = document.createElement("span");
		aXc.textContent = gO.mD(a2l.aw) + ":", aXc.style.color = dZ.a9k, aXc.style.paddingRight = "0.4em", aXc.style.display = "table-cell", aXc.style.width = "6ch", aXc.style.textAlign = "end", k2.appendChild(aXc), aXd.textContent = a2l.v, k2
			.appendChild(aXd), k2.style.display = "table", a2l.vm && function(k2, vm) {
				{
					var a37;
					vm >= 1024 - fo.fp.uq ? ((a37 = document.createElement("img")).src = fo.bb.ko[vm - 1024 + fo.fp.uq].toDataURL(), a37.style.width = "1.5em", a37.style.height = "1.5em", a37.style.verticalAlign = "middle", k2.appendChild(a37)) : ((
						a37 = document.createElement("span")).textContent = fo.fp.uw(vm), a37.style.display = "inline-block", a37.style.fontSize = "1.5em", a37.style.lineHeight = "1em", a37.style.verticalAlign = "middle", k2.appendChild(a37))
				}
			}(k2, a2l.vm), ou.appendChild(k2)
	}

	function aGg() {
		aGX && (lE.lK.scrollTop = lE.lK.scrollHeight)
	}
	this.clear = function() {
		lE.lK.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aOH = a1l.aNl(), u = aOH.length, ou = document.createDocumentFragment(), a5 = 0; a5 < u; a5++) aGf(ou, aOH[a5]);
		lE.lK.appendChild(ou), aGg(), lE.show(), this.resize(), aGX = !0, aGg()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lE.lK.style.padding = "0.4em " + aV.d1.io(cz.o0)
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, this.f3 = function(a2l) {
		var ou = document.createDocumentFragment();
		aGf(ou, a2l), lE.lK.appendChild(ou), aGg()
	}, (lE = new lH(L(280), [new ir("⬅️ " + L(4), function() {
		d7.a1H(1)
	})])).lK.style.overflowY = "auto", lE.lK.addEventListener("scroll", function() {
		aGX = lE.lK.scrollTop >= lE.lK.scrollHeight - lE.lK.clientHeight - 2
	})
}

function aIk() {
	this.z4 = new aDd, this.a1P = new yn, this.tr = new aXf, this.a4 = function() {
		cr.cs || this.z4.a4()
	}, this.ar = function() {
		cr.cs || (this.z4.ar(), 3 !== d7.lA) || bV.es() % 15 != 5 && 2 !== cr.d6 || d7.rs().a1M()
	}, __fx.replay.restartReplay = () => this.a1S(), this.a1S = function() {
		var aXh = 0 !== cr.d6,
			aXi = cr.a1j;
		aXh || eW.a2L(), cr.ff.aAT(), cr.data.canvas = null, f.i.close(f.i.dv, 3257), f.i.dv = 0, cr.data.isReplay = 1, cr.a1k(), aXh && (cr.a1j = aXi)
	}, this.a1R = function(v) {
		var a5 = v.indexOf("=");
		return 0 <= a5 ? v.substring(a5 + 1) : v
	}, this.a1Q = function(v) {
		return v
	}, __fx.replayHistory.load = saved => {
		saved = tq.a1R(saved), tq.tr.b8(saved) && tq.a1S()
	}
}

function aQj() {
	var aXj = 0,
		aXk = 0,
		aXl = 300,
		aXm = 300,
		aXn = 0;
	this.fP = 0, this.buffer = new Uint32Array(512), this.a4 = function() {
		aXk = aXj = 0, this.fP = 0, aXn = 0
	}, this.ar = function() {
		if (function() {
				var u = fN.fO.fP;
				if (0 === u) return 1;
				var buffer = fN.fO.buffer;
				if (bV.es() % 35 == 6) {
					for (var a5 = u - 1; 0 <= a5; a5--) fK.fL(buffer[a5] << 2) || (u--, buffer[a5] = buffer[u]);
					fN.fO.fP = u
				}
				return u < buffer.length
			}())
			if (aXl <= aXj) {
				var aXr = fN.fO.fP;
				if (aXr) {
					if (bV.es() % 350 != 1) return;
					if (aXn !== aXr) return void(aXn = aXr);
					if (!aV.et.jy(fH[0])) return
				} else if (bV.es() % 12 != 8) return;
				aV.et.a6W() || fN.fO.a4()
			} else {
				var a5, aZ = aS.aT,
					aXs = aZ - 2,
					aXr = aXs * (aS.aU - 2),
					aXt = aXl,
					buffer = fN.fO.buffer,
					bA = fN.fO.fP,
					aXu = buffer.length,
					dp = Math.min(aXk + aXt * ((1 + 19 * fN.performance.aXv) * aXm), aXr);
				for (a5 = aXk; a5 < dp; a5 += aXt) {
					var gt = 4 * (a5 % aXs + (aQ.aR(a5, aXs) + 1) * aZ + 1);
					if (fK.fL(gt) && (buffer[bA] = gt >> 2, ++bA === aXu)) {
						a5 += aXt;
						break
					}
				}(aXk = a5) >= aXr && (aXk = ++aXj), fN.fO.fP = bA
			}
	}
}

function rU() {
	this.L84 = ["{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io.", "Territorial Income", "Back", "Options", "Default", "Uniform", "Customized", "Humans",
		"Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Incoming Boat!", "Incoming Ship!",
		"{0} defeated {1}!", "LEADERBOARD", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "second played", "seconds played", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia",
		"North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more",
		"You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear",
		"▶️ Launch", "Insert the replay data here!", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank",
		"Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Send", "Confirm", "Cancel", "Account Name",
		"Copy", "Search", "Password", "Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist",
		"Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User",
		"Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "Contest", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer",
		"Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down",
		"Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options",
		"Y-Axis Compression", "Spawning", "Random", "Clustered", "Manual Spawn", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "🔑 My Account", "🏆 Leaderboards", "📜 Logs",
		"📈 Clan Charts", "🧈 Gold Transfer", "📰 Propaganda", "⚔️ Join Lobby 2", "⚙️ Settings", "Account Recovery", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log",
		"📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ",
		"Type your message here...", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "Zombie Players", "Additional Income", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan",
		"Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "Team", "1v1", "Zombie", "Chat", "Close {button}", "Ready",
		"Player Count", "Next Game", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct",
		"Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Map", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File",
		"Select File", "Map Name", "Preview", "Links", "Propaganda Text", "Colors", "Launch Campaign", "Gold Investment", "Launch", "Request Email", "You earned {10} gold!", "{0} earned {11} gold!", "Interest Income", "Loading",
		"⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Activated", "Lobby", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "Ship launched!",
		"Ship intercepted!", "Quit Game", "More", "Propaganda", "Report Abuse", "Team {0}", "Team {0} won the game!", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "Clan Chart", "Territory", "Numbers", "Statistics",
		"You are leaving Territorial.io!", "Source Account", "Send gold only to trusted accounts!", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support",
		"Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "⚔️ Play", "Settings", "Game Mode", "Mixed",
		"Team dependent", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Replay Error", "Warning", "Loading...", "Adjust",
		"My Color", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player"
	]
}

function a93() {
	this.e6 = function(l, e1) {
		c.d(11), c.e(1, 0), c.e(6, 4), c.e(1, e1 ? 1 : 0), c.e(3, 0 === cr.d6 ? or.v6 ? 6 : 0 : cr.cs ? 1 : cr.eh ? 7 : cr.fW < 7 ? 2 : 8 === cr.fW ? 4 : 9 === cr.fW ? 5 : 3), f.i.send(l, c.j)
	}, this.aL2 = function() {
		c.d(58), c.e(1, 0), c.e(6, 5), c.e(8, f.i.dw), c.e(10, aCg.aNq), c.e(9, aCg.aXw), c.e(10, eG.aX9), c.e(14, eG.sn), f.i.send(f.i.dv, c.j)
	}, this.aMs = function(fM) {
		c.d(27), c.e(1, 1), c.e(4, 0), c.e(22, fM), f.i.send(f.i.dv, c.j)
	}, this.aMt = function(yj, oK) {
		c.d(25), c.e(1, 1), c.e(4, 1), c.e(10, yj), c.e(10, oK), f.i.send(f.i.dv, c.j)
	}, this.aMu = function(yj, a6m) {
		c.d(24), c.e(1, 1), c.e(4, 2), c.e(10, yj), c.e(9, a6m), f.i.send(f.i.dv, c.j)
	}, this.aMw = function(yj, aMv) {
		c.d(42), c.e(1, 1), c.e(4, 3), c.e(10, yj), c.e(27, aMv), f.i.send(f.i.dv, c.j)
	}, this.aMx = function(yj, o4) {
		c.d(31), c.e(1, 1), c.e(4, 4), c.e(10, yj), c.e(16, o4), f.i.send(f.i.dv, c.j)
	}, this.aMy = function(oK) {
		c.d(15), c.e(1, 1), c.e(4, 5), c.e(10, oK), f.i.send(f.i.dv, c.j)
	}, this.aN0 = function(go) {
		c.d(15), c.e(1, 1), c.e(4, 6), c.e(10, go), f.i.send(f.i.dv, c.j)
	}, this.aN2 = function(aN1) {
		c.d(6), c.e(1, 1), c.e(4, 7), c.e(1, aN1), f.i.send(f.i.dv, c.j)
	}, this.aN3 = function() {
		c.d(5), c.e(1, 1), c.e(4, 8), f.i.send(f.i.dv, c.j)
	}, this.aN4 = function(yj, fM, oK) {
		c.d(47), c.e(1, 1), c.e(4, 10), c.e(10, yj), c.e(10, oK), c.e(22, fM), f.i.send(f.i.dv, c.j)
	}, this.aXK = function(aXx, aXy) {
		c.d(24), c.e(1, 1), c.e(4, 15), c.e(9, aXy), c.e(10, aXx), f.i.send(f.i.dv, c.j)
	}, this.aXL = function(a2f) {
		c.d(14), c.e(1, 1), c.e(4, 14), c.e(9, a2f), f.i.send(f.i.dv, c.j)
	}, this.aXO = function(aXz, target) {
		var a5, u = aXz.length;
		for (c.d(14 + 9 * u), c.e(1, 1), c.e(4, 13), c.e(9, target), a5 = 0; a5 < u; a5++) c.e(9, aXz[a5]);
		f.i.send(f.i.dv, c.j)
	}
}

function aIc() {
	var dg, dh, hb, hc, aY0 = 0,
		aY1 = 0;

	function aY3() {
		return Math.pow(Math.pow(hb - dg, 2) + Math.pow(hc - dh, 2), .5)
	}

	function aY2(ej) {
		dg = cy.ny * ej.touches[0].clientX, dh = cy.ny * ej.touches[0].clientY, hb = cy.ny * ej.touches[1].clientX, hc = cy.ny * ej.touches[1].clientY
	}
	this.aKV = function(ej) {
		return 1 < ej.touches.length ? (aY1 = bV.aw, aY0 = 3, aY2(ej), gZ.eQ(), !0) : (aY0 = 0, !1)
	}, this.aKW = function(ej) {
		var aGE, l8, l9;
		return 0 !== cr.d6 && 1 < ej.touches.length && (aY0 = Math.max(aY0 - 1, 0), gQ.r2() && (aGE = aY3(), aY2(ej), ej = aY3(), l8 = Math.floor((dg + hb) / 2), l9 = Math.floor((dh + hc) / 2), dM.aRq(l8, l9, Math.max(.125, ej) / Math.max(.125,
			aGE)), bV.bW = !0), !0)
	}, this.aKp = function() {
		var aJ, aK;
		return !!(aY0 && (aY0 = 0, bV.aw < aY1 + 500)) && (aJ = (dg + hb) / 2, aK = (dh + hc) / 2, gZ.aKl(aJ, aK), gZ.click(aJ, aK, !0) && (bV.bW = !0), !0)
	}
}

function aY4() {
	var aBP, th, aXP = document.createElement("div"),
		aY5 = document.createElement("div"),
		aFB = 0,
		aY6 = 0;
	this.show = function(aJ, aK, v, aY7, aY8, jA) {
			if (aFB) {
				if (!aY7) return;
				this.eQ()
			}
			aJ === aK && -1 === aJ ? (aJ = aBP, aK = th) : (aBP = aJ, th = aK);
			var aY9 = Math.floor(aV.d1.iq(.018)),
				aY8 = (aJ = Math.max(aY9 + 2, aJ), aY8 || (aY6 = aY7), aFB = 1, cy.aZ / cy.ny),
				aY7 = (aXP.style.whiteSpace = "pre", aXP.textContent = v, aV.d1.k4(aXP, 5), aXP.style.font = aV.d1.d2(0, aV.d1.iq(.015)), aXP.style.padding = "0.3em 0.6em", aXP.style.left = aJ + "px", aXP.style.top = "0px", document.body.appendChild(
					aXP), aJ + aXP.offsetWidth - aY8),
				v = (0 < aY7 && (aJ -= aY7, aJ = Math.max(aY9 + 1, aJ), aXP.style.left = aJ + "px", aJ < aY9 + 2) && (aXP.style.whiteSpace = "pre-wrap"), aXP.offsetHeight);
			aXP.style.top = aK - v + aY6 * cz.ip + "px", aJ -= aY9, aY5.style.backgroundColor = aV.color.aGy(jA >> 12 << 2, (jA >> 6 & 63) << 2, (63 & jA) << 2), aY5.style.left = aJ + "px", aY5.style.top = aXP.style.top, aY5.style.width = aY9 + "px",
				aY5.style.height = v + "px", aV.d1.k4(aY5, 4), aV.d1.k4(aY5, 8), aV.d1.k4(aY5, 2), document.body.appendChild(aY5)
		}, this.eQ = function(aYC) {
			if (aFB) {
				if (aYC && aY6) return 0;
				aFB = 0, d7.removeChild(document.body, aXP), d7.removeChild(document.body, aY5)
			}
			return 1
		}, aXP.style.position = "absolute", aXP.style.backgroundColor = dZ.da, aXP.style.color = dZ.dc, aXP.style.pointerEvents = "none", aXP.style.zIndex = "5", aXP.style.maxWidth = "100%", aY5.style.position = "absolute", aY5.style.color = dZ.dc,
		aY5.style.pointerEvents = "none", aY5.style.zIndex = "5"
}

function aT9(data) {
	var pw, aYD, aYE, aFq, aYF, aYG, aYH, colors, aYI, aYJ, aYK = 0,
		aYL = 0,
		aYM = !1,
		aYN = !1,
		aYO = [1, 5, 60, 240, 1440, 10080, 43200];

	function aYo(jp, jq) {
		! function(jp, jq) {
			return aYD < jp && jp < aYD + aFq && aYE < jq && jq < aYE + aYF
		}(aYK = jp, aYL = jq) ? (aYM && (bV.bW = !0), aYM = !1) : (aYM = !0, bV.bW = !0)
	}
	this.show = function() {
		aYN = r.buffer.data[127].value, pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize();
		var jA = cy.ny,
			aFw = pw.aFx(),
			aYV = jA * aFw.aG0,
			jA = jA * aFw.aFy;
		aYG = aV.d1.aBD(.06), aYH = aV.d1.aBD(.04), aYD = aV.d1.aBD(.06), aYE = jA + aYG, aFq = cy.aZ - aYD - aYH, aYF = aYV + jA - aYE - aYH
	}, this.cQ = function() {
		pw.cQ(),
			function() {
				var a5, aDc, fi, aJ, a6, au = data.data,
					aYY = 1,
					aYZ = .125,
					aYa = aYN ? 65536 : 0;
				for (a5 = 0; a5 < au.length; a5++)
					for (aDc = au[a5].aDc, fi = aDc.length, aYY = Math.max(fi, aYY), a6 = 0; a6 < fi; a6++) aYZ = Math.max(aDc[a6], aYZ), aYa = Math.min(aDc[a6], aYa);
				var dh = aYE + aYF,
					aCG = aYF / (aYZ - aYa),
					aCF = 1 / (aYY - 1);
				for (dO.lineWidth = cz.qm, a5 = 0; a5 < au.length; a5++) {
					for (aDc = au[a5].aDc, fi = aDc.length, aJ = aYD, dO.beginPath(), dO.moveTo(aJ + aFq, dh - aCG * (aDc[fi - 1] - aYa)), a6 = fi - 2; 0 <= a6; a6--) dO.lineTo(aJ + aCF * a6 * aFq, dh - aCG * (aDc[a6] - aYa));
					dO.strokeStyle = colors[a5], dO.stroke()
				}(function(aYa, aYZ, dh, aCG) {
					dO.font = aV.d1.d2(0, .25 * aYD), aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 2), dO.fillStyle = colors[0];
					for (var aJ = .92 * aYD, a5 = 0; a5 < 3; a5++) {
						var kv = aYa + a5 * (aYZ - aYa) / 2;
						dO.fillText((kv / 1e3).toFixed(3), aJ, dh - aCG * (kv - aYa))
					}
				})(aYa, aYZ, dh, aCG),
				function(aYY) {
					var aK = aYE + aYF + .15 * aYH;
					dO.font = aV.d1.d2(0, Math.min(.4 * aYH, .028 * cy.aZ)), aV.d1.textBaseline(dO, 0), aV.d1.textAlign(dO, 2), dO.fillStyle = colors[0], dO.fillText(aV.t2.dq(aYI), aYD + aFq, aK), aV.d1.textAlign(dO, 0), dO.fillText(aV.t2.dq(
						new Date(aYJ.getTime() - 6e4 * (aYY - 1) * aYO[data.cf])), aYD, aK)
				}(aYY),
				function(aYY, aYa, aYZ) {
					if (aYM && !(aYY < 2)) {
						for (var cm, go = (aYK - aYD) / aFq * (aYY - 1), aYd = Math.floor(go), aYe = Math.floor(1 + go), aYf = go - aYd, aYg = 1e5, yc = -1, aYh = -1, aYi = aYZ - (aYZ - aYa) * (aYL - aYE) / aYF, au = data.data, a5 = 0; a5 < au
							.length; a5++) {
							var aGJ, aDc = au[a5].aDc;
							aDc.length <= aYe || (aDc = aDc[aYd] + aYf * (aDc[aYe] - aDc[aYd]), (aGJ = Math.abs(aYi - aDc)) < aYg && (aYg = aGJ, yc = a5, aYh = aDc))
						} - 1 !== yc && (aYZ = aYE + aYF - (aYh - aYa) / (aYZ - aYa) * aYF, dO.lineWidth = .5 * cz.qm, dO.strokeStyle = colors[yc], dO.beginPath(), dO.moveTo(aYD, aYZ), dO.lineTo(aYK, aYZ), dO.lineTo(aYK, aYE + aYF), dO.stroke(),
							dO.beginPath(), dO.arc(aYK, aYZ, .1 * aYD, 0, 2 * Math.PI), dO.fillStyle = colors[yc], dO.fill(), aYa = aYE + aYF + .15 * aYH, aV.d1.textAlign(dO, 1), cm = aYY - 2 < go ? (cm = aYJ.getTime() - 6e4 * aYO[data.cf],
								new Date(cm + (go - (aYY - 2)) * (aYI.getTime() - cm))) : new Date(aYJ.getTime() - 6e4 * (aYY - go - 1) * aYO[data.cf]), aYY = aV.t2.dq(cm), go = aV.d1.measureText(aYY), cm = aQ.ld(aYK, aYD + .5 * go, aYD +
								aFq - .5 * go), dO.fillStyle = aV.color.aGy(70, 50, 20), dO.fillRect(cm - .52 * go, aYE + aYF, 1.04 * go, .55 * aYH), dO.fillStyle = colors[0], dO.fillText(aYY, cm, aYa), dO.font = aV.d1.d2(0, .25 * aYD), aV.d1
							.textBaseline(dO, 1), aV.d1.textAlign(dO, 2), cm = .92 * aYD, aYY = (aYh / 1e3).toFixed(3), go = aV.d1.measureText(aYY), aYa = cm - 1.04 * go, dO.fillStyle = aV.color.aGy(70, 50, 20), dO.fillRect(aYa, aYZ - .1625 *
								aYD, aYD - aYa, .275 * aYD), dO.fillStyle = colors[yc], dO.fillText(aYY, cm, aYZ))
					}
				}(aYY, aYa, aYZ)
			}(), dO.lineWidth = cz.qm, dO.strokeStyle = dZ.dc, dO.beginPath(), dO.moveTo(aYD, aYE), dO.lineTo(aYD, aYE + aYF), dO.lineTo(aYD + aFq, aYE + aYF), dO.stroke();
		var a5, fontSize = .5 * aYG,
			au = (dO.font = aV.d1.d2(0, fontSize), aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 0), data.data),
			u = au.length,
			aK = aYE - .5 * aYG,
			v = "";
		for (a5 = 0; a5 < u; a5++) v += au[a5].name + "  ";
		v = v.trim();
		var aYl = aV.d1.measureText(v),
			aJ = .5 * (cy.aZ - aYl);
		for (aYl > cy.aZ && (aJ = 0, dO.font = aV.d1.d2(0, cy.aZ / aYl * fontSize)), a5 = 0; a5 < u; a5++) dO.fillStyle = colors[a5], dO.fillText(au[a5].name, aJ, aK), aJ += aV.d1.measureText(au[a5].name + "  ")
	}, this.dB = function(jp, jq) {
		aYo(jp, jq)
	}, this.rB = function(jp, jq) {
		aYo(jp, jq)
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	};
	var a5, kG, dm, b4, ba = data.data,
		u = ba.length,
		max = 1;
	for (a5 = 0; a5 < u; a5++) max = Math.max(max, ba[a5].aDc.length);
	for (a5 = 0; a5 < u; a5++)
		for (; ba[a5].aDc.length < max;) ba[a5].aDc.unshift(0);
	kG = new Date, dm = 6e4 * kG.getTimezoneOffset(), b4 = kG.getTime() - dm, aYI = new Date(b4), 6 === data.cf ? function(kG, dm) {
		var aYU = kG.getUTCFullYear(),
			kG = kG.getUTCMonth() + 1;
		aYJ = kG < 12 ? new Date(Date.UTC(aYU, kG) - dm) : new Date(Date.UTC(aYU + 1, 0) - dm)
	}(kG, dm) : (dm = 6e4 * aYO[data.cf], aYJ = data.cf <= 4 ? new Date(b4 + dm - kG.getTime() % dm) : new Date(b4 + dm - (kG.getTime() + 2592e5) % dm)), b4 = aV.color, colors = [dZ.dc, b4.aGy(255, 0, 0), b4.aGy(0, 200, 0), b4.aGy(80, 80, 255),
		b4.aGy(255, 255, 0), b4.aGy(255, 0, 255), b4.aGy(0, 255, 255), b4.aGy(255, 140, 0), b4.aGy(128, 128, 128), b4.aGy(0, 255, 140)
	], pw = new lH(L(487) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.cf] + ", " + aV.t2.dl(aYI), [new ir("⬅️ " + L(4), function() {
		d7.dF(1)
	}), new ir(L(306), function() {
		d7.dF(14)
	})], !1)
}

function aIz() {
	this.aZ = 0, this.b6 = 0, this.de = 0, this.df = 0, this.aYp = 0, this.aYq = 0, this.di = 0, this.aM2 = 0;
	var aYs = this.aYr = 0;
	this.aYt = 0, this.aYu = 0, this.aYv = 0, this.aYw = 0, this.go = 0, this.kx = null, this.d8 = !1, this.aYx = -1, this.aYy = !1, this.aYz = [0, 0], this.rd = function() {
		this.kx = [L(488), L(16, 0, "Balance"), L(15, 0, "Interest"), L(489)]
	}, this.a4 = function() {
		this.d8 = !1, this.aYx = -1, this.aYy = !1, this.resize()
	}, this.resize = function() {
		this.aZ = cy.aZ < 1.369 * cy.b6 ? cy.aZ : 1.369 * cy.b6;
		var ba = cT.cU.cV() && cy.aZ < cy.b6 ? 1 : cT.cU.cV() ? .8 : cy.aZ < cy.b6 ? .65 : .59;
		this.aZ = Math.floor(ba * this.aZ), this.aZ -= cT.cU.cV() && cy.aZ < cy.b6 ? 2 * cz.gap + 2 : 0, this.b6 = Math.floor(this.aZ / 1.369), this.aYw = Math.floor(this.b6 / 150), this.aYw = Math.max(this.aYw, 1.5), this.de = Math.floor(1 +
			.02 * this.aZ), this.df = Math.floor(1 + .04 * this.aZ), this.di = this.df, aYs = Math.floor(.75 * this.di), this.aM2 = Math.floor(1 + .075 * this.aZ), this.aYt = Math.floor(1 + .1125 * this.aZ), this.aYu = Math.floor(this.aZ * (
			cT.cU.cV() ? .03 : .029)), this.aYu = Math.max(this.aYu, 4), this.aYv = Math.floor(.035 * this.aZ), this.aYv = Math.max(this.aYv, 4), this.aYr = this.b6 - 2 * this.di - this.aM2 - this.aYt, this.d8 && this.aZ0()
	}, this.dB = function(jp, jq) {
		var xk, xj;
		return !!this.d8 && (xj = jp, xk = jq, jp -= aQ.aR(cy.aZ - this.aZ, 2), jq -= aQ.aR(cy.b6 - this.b6, 2), jp < 0 || jq < 0 || jp >= this.aZ || jq >= this.b6 || jp >= this.aZ - this.aYt && jq < this.aYt ? -1 !== dG.dB(xj, xk) || ka.dB(xj,
			xk) || this.eQ() : jq < this.aYt || (jq < this.b6 - this.aM2 ? (this.aYy = !0, this.aYx = (jp - 2 * this.de - this.aYp) / this.aYq, 3 !== this.go && (bV.bW = !0)) : (xj = (xj = Math.floor(jp / (this.aZ / this.kx.length))) <
			0 ? 0 : xj >= this.kx.length ? this.kx.length - 1 : xj) !== this.go && (this.go = xj, this.aZ0(), bV.bW = !0)), !0)
	}, this.rB = function(jp, jq) {
		return this.aYz[0] = jp, this.aYz[1] = jq, !(!this.d8 || !this.aYy || (jp -= aQ.aR(cy.aZ - this.aZ, 2), jq = this.aYx, this.aYx = (jp - 2 * this.de - this.aYp) / this.aYq, (0 <= this.aYx && this.aYx <= 1 || 0 <= jq && jq <= 1) && (bV
			.bW = !0), 0))
	}, this.rE = function() {
		this.aYy && (this.aYy = !1)
	}, this.dI = function() {
		this.d8 ? this.eQ() : this.show()
	}, this.show = function() {
		gK.aFU < 2 || (this.d8 = !0, this.aZ0())
	}, this.eQ = function() {
		this.d8 = !1, this.aYx = -1, bV.bW = !0
	}, this.aZ0 = function() {
		this.go < 2 ? this.aYp = a21.measureText(aV.hf.hg(gK.max[this.go]), aV.d1.d2(0, this.aYu)) : 2 === this.go && (this.aYp = a21.measureText(aV.hf.mC(6, 2), aV.d1.d2(0, this.aYu))), this.aYq = this.aZ - 2 * this.de - this.aYp - this.df
	}, this.d3 = function() {
		this.d8 && this.aZ0()
	}, this.cQ = function() {
		this.d8 && this.dQ()
	}, this.dQ = function() {
		var aJ = aQ.aR(cy.aZ - this.aZ, 2),
			aK = aQ.aR(cy.b6 - this.b6, 2);
		dO.setTransform(1, 0, 0, 1, aJ, aK), dO.fillStyle = dZ.f6, dO.fillRect(0, this.aYt, this.aZ, this.b6 - this.aYt), this.aZ1(), this.u7(), dO.strokeRect(0, 0, this.aZ, this.b6), aV.d1.textAlign(dO, 2), dO.font = aV.d1.d2(0, this.aYu), 0 ===
			this.go ? this.aZ2(gK.aZ3, aJ, aK) : 1 === this.go ? this.aZ2(gK.a6f, aJ, aK) : 2 === this.go ? this.aZ4(aJ, aK) : 3 === this.go && (this.aZ5(aJ, aK), this.aZ6(aJ, aK)), dG.aVx(Math.floor(aJ + this.aZ - .725 * this.aYt), Math.floor(
				aK + .275 * this.aYt), Math.floor(.45 * this.aYt)), dO.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aZ1 = function() {
		var a5, kG;
		for (dO.lineWidth = this.aYw, aV.d1.textBaseline(dO, 1), aV.d1.textAlign(dO, 1), dO.strokeStyle = dZ.dc, dO.font = aV.d1.d2(1, this.aYv), kG = this.aZ / this.kx.length, dO.fillStyle = dZ.aHC, dO.fillRect(this.go * kG, this.b6 - this.aM2,
				kG, this.aM2), dO.fillStyle = dZ.dc, dO.fillRect(0, this.b6 - this.aM2 - .5 * this.aYw, this.aZ, this.aYw), a5 = 1; a5 <= 3; a5++) dO.fillRect(a5 * kG, this.b6 - this.aM2, this.aYw, this.aM2);
		for (a5 = this.kx.length - 1; 0 <= a5; a5--) dO.fillText(aV.ck.m3(this.kx[a5], 0, .9 * kG), (a5 + .5) * kG, this.b6 - .46 * this.aM2)
	}, this.u7 = function() {
		dO.fillStyle = dZ.aHN, dO.fillRect(0, 0, this.aZ, this.aYt), dO.fillStyle = dZ.dc, dO.fillRect(0, this.aYt - .5 * this.aYw, this.aZ, this.aYw), dO.font = aV.d1.d2(1, .39 * this.aYt), dO.fillText(aV.ck.m3(L(490), 0, .8 * this.aZ), Math
			.floor(this.aZ / 2), Math.floor(.55 * this.aYt))
	}, this.aZ2 = function(au, aJ, aK) {
		var bA = gK.max[this.go],
			xL = (dO.setTransform(1, 0, 0, 1, aJ + 2 * this.de + this.aYp, aK + this.di + this.aYt), dO.lineWidth = 2, this.aYr / Math.sqrt(bA));
		dO.beginPath(), dO.moveTo(this.aYq, this.aYr - xL * Math.sqrt(au[gK.aFU - 1]));
		for (var a5 = gK.aFU - 2; 0 <= a5; a5--) dO.lineTo(a5 * this.aYq / (gK.aFU - 1), this.aYr - xL * Math.sqrt(au[a5]));
		dO.stroke();
		aJ = this.aVx(au, xL, .5);
		aJ < .95 && dO.fillText(aV.hf.hg(bA), -this.de, 0), .05 < Math.abs(aJ - .5) && dO.fillText(aV.hf.hg(Math.floor(bA / 4)), -this.de, Math.floor(this.aYr / 2)), .05 < aJ && dO.fillText("0", -this.de, this.aYr)
	}, this.aZ4 = function(aJ, aK) {
		dO.setTransform(1, 0, 0, 1, aJ + 2 * this.de + this.aYp, aK + this.di + this.aYt), dO.lineWidth = 2;
		var xL = this.aYr / Math.max(gK.max[this.go], 1);
		dO.beginPath(), dO.moveTo(this.aYq, this.aYr - xL * gK.mT[gK.aFU - 1]);
		for (var a5 = gK.aFU - 2; 0 <= a5; a5--) dO.lineTo(a5 * this.aYq / (gK.aFU - 1), this.aYr - xL * gK.mT[a5]);
		dO.stroke();
		aJ = this.aVx(gK.mT, xL, 1), aK = gK.max[this.go] / 100;
		aJ < .95 && dO.fillText(aV.hf.mC(aK, 2), -this.de, 0), .05 < Math.abs(aJ - .5) && dO.fillText(aV.hf.mC(aK / 2, 2), -this.de, Math.floor(this.aYr / 2)), .05 < aJ && dO.fillText(aV.hf.mC(0, 2), -this.de, this.aYr)
	}, this.aZ5 = function(aJ, aK) {
		dO.setTransform(1, 0, 0, 1, aJ + .34 * this.aZ, aK + 2 * aYs + this.aYt), aV.d1.textAlign(dO, 2);
		for (var qt = this.b6 - 4 * aYs - this.aM2 - this.aYt, au = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a5 = 9; 0 <= a5; a5--) dO.fillText(aV.ck.m3(gK.aZ7[au[a5]], 0, .31 * this.aZ), 0, a5 * qt / 9);
		var kv = gK.gL;
		for (dO.setTransform(1, 0, 0, 1, aJ + .39 * this.aZ, aK + 2 * aYs + this.aYt), aV.d1.textAlign(dO, 0), dO.fillText(aV.hf.mC(100 * kv[0] / (1024 * Math.max(kv[1], 1)), 1), 0, 0), a5 = 8; 1 <= a5; a5--) dO.fillText(kv[au[a5]].toString(), 0,
			a5 * qt / 9);
		dO.fillText(aV.hf.mC(100 * (1 - f4.g0[cr.gJ] / kv[7]), 0), 0, qt)
	}, this.aZ6 = function(aJ, aK) {
		dO.setTransform(1, 0, 0, 1, aJ + .79 * this.aZ, aK + 2 * aYs + this.aYt), aV.d1.textAlign(dO, 2);
		var a5, qt = this.b6 - 4 * aYs - this.aM2 - this.aYt;
		for (dO.fillStyle = dZ.aH9, a5 = 2; 0 <= a5; a5--) dO.fillText(aV.ck.m3(gK.aZ7[a5 + 8], 0, .31 * this.aZ), 0, a5 * qt / 9);
		dO.fillText(aV.ck.m3(gK.aZ7[18], 0, .31 * this.aZ), 0, 3 * qt / 9), dO.fillStyle = dZ.aH8, dO.fillText(aV.ck.m3(gK.aZ7[11], 0, .31 * this.aZ), 0, 4 * qt / 9), dO.fillStyle = dZ.aHH, dO.fillText(aV.ck.m3(gK.aZ7[13], 0, .31 * this.aZ), 0,
				5 * qt / 9), dO.fillText(aV.ck.m3(gK.aZ7[15], 0, .31 * this.aZ), 0, 6 * qt / 9), dO.fillText(aV.ck.m3(gK.aZ7[16], 0, .31 * this.aZ), 0, 7 * qt / 9), dO.fillText(aV.ck.m3(gK.aZ7[12], 0, .31 * this.aZ), 0, 8 * qt / 9), dO
			.fillStyle = dZ.he, dO.fillText(aV.ck.m3(gK.aZ7[17], 0, .31 * this.aZ), 0, qt), dO.fillStyle = dZ.aH9;
		var kv = gK.gL,
			a9e = kv[8] + kv[9] + kv[10] + kv[18],
			a9e = aV.hf.hg(a9e),
			aYl = dO.measureText(a9e).width,
			aJ = (dO.setTransform(1, 0, 0, 1, aJ + .83 * this.aZ + aYl, aK + 2 * aYs + this.aYt), dO.fillText(aV.hf.hg(kv[8]), 0, 0), dO.fillText(aV.hf.hg(kv[9]), 0, qt / 9), dO.fillText(aV.hf.hg(kv[10]), 0, 2 * qt / 9), dO.fillText(aV.hf.hg(kv[
				18]), 0, 3 * qt / 9), dO.fillStyle = dZ.aH8, dO.fillText(a9e, 0, 4 * qt / 9), dO.fillStyle = dZ.aHH, dO.fillText(aV.hf.hg(kv[13]), 0, 5 * qt / 9), dO.fillText(aV.hf.hg(kv[15]), 0, 6 * qt / 9), dO.fillText(aV.hf.hg(kv[16]), 0,
				7 * qt / 9), dO.fillText(aV.hf.hg(kv[12]), 0, 8 * qt / 9), kv[12] + kv[13] + kv[15] + kv[16]);
		dO.fillStyle = dZ.he, dO.fillText(aV.hf.hg(aJ), 0, qt), dO.fillStyle = dZ.dc
	}, this.aVx = function(au, xL, uK) {
		var a5, ej, z5;
		return this.aYx < 0 || 1 < this.aYx ? .25 : (a5 = this.aYx * (gK.aFU - 1), z5 = au[ej = Math.floor(a5)], z5 += (a5 - ej) * (au[ej < gK.aFU - 1 ? ej + 1 : ej] - z5), dO.strokeStyle = dZ.uZ, .04 < this.aYx && this.aZ9(0, this.aYr - xL *
				Math.pow(z5, uK), a5 * this.aYq / (gK.aFU - 1), this.aYr - xL * Math.pow(z5, uK)), .04 < z5 / gK.max[this.go] && this.aZ9(a5 * this.aYq / (gK.aFU - 1), this.aYr, a5 * this.aYq / (gK.aFU - 1), this.aYr - xL * Math.pow(z5, uK)),
			dO.fillStyle = dZ.aHI, dO.beginPath(), dO.arc(a5 * this.aYq / (gK.aFU - 1), this.aYr - xL * Math.pow(z5, uK), Math.max(2, .014 * this.b6), 0, 2 * Math.PI), dO.fill(), au = this.aYx * bV.mV, au = 0 === f4.fv[cr.gJ] ? Math.floor(
				au * gK.aZA) : Math.floor(au * bV.es()), dO.fillStyle = dZ.dc, dO.fillText(1 === uK ? aV.hf.mC(z5 / 100, 2) : aV.hf.hg(Math.floor(z5)), -this.de, this.aYr - xL * Math.pow(z5, uK)), aV.d1.textAlign(dO, 1), dO.fillText(gO.mD(
				au), a5 * this.aYq / (gK.aFU - 1), this.aYr + this.aYu - (cT.cU.cV() ? 2 : 0) - this.aYw), aV.d1.textAlign(dO, 2), xL * Math.pow(z5, uK) / this.aYr)
	}, this.aZ9 = function(dg, dh, hb, hc) {
		dO.beginPath(), dO.moveTo(dg, dh), dO.lineTo(hb, hc), dO.stroke()
	}
}

function aQn() {
	var aZB = new Uint16Array(cr.fc);

	function aZI(player, aZG) {
		for (var u = gx.aDR[0], aDQ = gx.aDQ, kq = -1, a8S = cr.fc, a5 = 0; a5 < u; a5++) {
			var h3, bB = aDQ[a5];
			iE.iL(player, bB) && (h3 = aj.aAv(aZG, aj.aU1(bB)), -1 === kq || h3 < kq) && (kq = h3, a8S = bB)
		}
		return a8S
	}

	function aZK(aZH, aZG) {
		if (aZH === cr.fc) return 0;
		var g5 = f4.g5[aZH],
			bA = g5.length;
		if (0 === bA) return 0;
		for (var u = Math.min(bA, 10), a8S = 0, kq = aj.aAv(g5[a8S] >> 2, aZG), a5 = 0; a5 < u; a5++) {
			var b4 = fj.fk(bA),
				h3 = aj.aAv(g5[b4] >> 2, aZG);
			h3 < kq && (kq = h3, a8S = b4)
		}
		return g5[a8S] >> 2
	}

	function aZL(player, aZG, oK, aZO) {
		var aZP;
		(aZO === cr.fc || (aZP = aj.aU1(oK), aZO = aj.aU1(aZO), aj.aAv(aZG, aZP) < aj.aAv(aZG, aZO))) && (aZB[player] = oK)
	}
	this.a4 = function() {
		aZB.fill(cr.fc)
	}, this.aQv = function() {
		if (bV.es() % 109 == 9 && !(f8.f9 < 20) && cr.f0 && !(dA.mN() < aQ.aR(8 * cr.lv, 10))) {
			var a6Z = dA.fE();
			if (fF.fG[a6Z]) {
				dA.aEg(a6Z);
				var u = gx.aDR[0];
				if (0 !== u)
					for (var au = gx.aBi, fB = f8.fB, f9 = f8.f9, aZC = aZB, b4 = fj.fk(u), a5 = 0; a5 < f9; a5++) {
						var bj = fB[a5],
							bk = au[b4];
						aV.et.yN(bj, bk) && 512 === aZC[bj] && (aZC[bj] = bk, b4 = (b4 + 1) % u)
					}
			}
		}
	}, this.ar = function(player) {
		var aZG, aZJ, aZH, aZD = function(player) {
			var oK = aZB[player];
			if (oK !== cr.fc) {
				if (aV.et.ey(oK) && f4.g5[oK]) return oK;
				aZB[player] = cr.fc
			}
			return cr.fc
		}(player);
		return function(player) {
			for (var fA = f8.fB, bA = f8.f9, u = Math.min(bA, bA < 17 && 5 === fj.fk(20) ? 1 : 16), dp = fj.fk(bA), aDQ = gx.aDQ, g5 = f4.g5, fi = 0, a5 = 0; a5 < u; a5++) {
				var bB = fA[(a5 + dp) % bA];
				bB !== player && g5[bB].length && (aDQ[fi++] = bB)
			}
			gx.aDR[0] = fi
		}(player), 0 !== gx.aDR[0] && (0 < (aZJ = aZK(aZH = aZI(player, aZG = aj.aU2(player)), aZG)) && am.c6.a7f(player, am.cI.a7k(aZJ, aZG)) ? (aZL(player, aZG, aZH, aZD), !0) : 0 < (aZH = function(player, aZG) {
			for (var u = gx.aDR[0], aDQ = gx.aDQ, aZC = aZB, dp = 0, a5 = 0; a5 < u; a5++) {
				var bB = aDQ[a5],
					bB = aZC[bB];
				bB !== cr.fc && aV.et.ey(bB) && player !== bB && iE.iL(player, bB) && (aDQ[dp++] = bB)
			}
			return 0 !== (gx.aDR[0] = dp) ? aZK(aZI(player, aZG), aZG) : 0
		}(player, aZG)) && am.c6.a7f(player, am.cI.a7k(aZH, aZG)) ? (aZL(player, aZG, fK.iA(aZH << 2), aZD), !0) : !!(0 < (aZJ = aZK(aZD, aZG)) && am.c6.a7f(player, am.cI.a7k(aZJ, aZG))))
	}
}

function aIt() {
	this.ta = 2, this.sn = 1764, this.aCU = 0;
	this.rVersion = 25, this.a4 = function() {
		this.aZV = "2.16.64", this.oe = "🎃 30 Oct 2026 [" + this.aZV + "]", this.hostname = window.location.hostname.toLowerCase(), this.so = 0 <= this.hostname.indexOf("territorial.io"), this.aCV = 0 <= this.hostname.indexOf("github.io"), this
			.eH = 0 <= this.hostname.indexOf("game.territorial.io"), this.sp = function() {
				try {
					return window.self !== window.top
				} catch (ej) {
					return !0
				}
			}(), this.aX9 = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.so + " validMod: " + +this.aCV)
	}, this.aJ9 = 0
}

function mb() {
	this.a6T = function(go, oe) {
		return Number(this.a6U(go, oe))
	}, this.a6U = function(go, oe) {
		var kv = null;
		return 0 === cT.id ? cT.oW && (kv = cT.oW.getItem((oe ? "v" : "d") + go)) : 1 === cT.id ? kv = cT.oX.loadString((oe ? 1e3 : 2e3) + go) : 2 === cT.id && (kv = cT.aZX[(oe ? "v" : "d") + go]), kv && 0 !== kv.length ? kv : null
	}, this.ri = function(u, aZY) {
		var au = [],
			aZZ = aZY ? "e" : "l";
		if (0 === cT.id) {
			if (cT.oW)
				for (a5 = 0; a5 < u; a5++) au.push(cT.oW.getItem(aZZ + a5))
		} else if (1 === cT.id)
			for (var aZa = aZY ? 5e3 : 3e3, a5 = 0; a5 < u; a5++) au.push(cT.oX.loadString(aZa + a5));
		else if (2 === cT.id)
			for (a5 = 0; a5 < u; a5++) au.push(cT.aZX[aZZ + a5]);
		return au
	}, this.save = function(go, value, oe) {
		var aUj = (oe ? "v" : "d") + go;
		if (0 === cT.id) {
			if (cT.oW && r.buffer.data[140].value) try {
				cT.oW.setItem(aUj, value)
			} catch (ej) {
				console.log(ej)
			}
		} else 1 === cT.id ? cT.oX.saveString((oe ? 1e3 : 2e3) + go, value) : 2 === cT.id && (cT.aZX[aUj] = value, cT.oY.postMessage(aUj + " " + value))
	}, this.ru = function(au, aZY) {
		var u = au.length,
			aZZ = aZY ? "e" : "l";
		if (0 === cT.id) {
			if (cT.oW && r.buffer.data[140].value) try {
				for (a5 = 0; a5 < u; a5++) cT.oW.setItem(aZZ + a5, au[a5])
			} catch (ej) {
				console.log(ej)
			}
		} else if (1 === cT.id)
			for (var aZa = aZY ? 5e3 : 3e3, a5 = 0; a5 < u; a5++) cT.oX.saveString(aZa + a5, au[a5]);
		else if (2 === cT.id)
			for (a5 = 0; a5 < u; a5++) cT.aZX[aZZ + a5] = au[a5], cT.oY.postMessage(aZZ + a5 + " " + au[a5])
	}
}

function aID() {
	this.aZb = "https://territorial.io/changelog", this.aFY = "https://territorial.io/terms", this.aFZ = "https://territorial.io/privacy", this.aZc = "https://territorial.io/tutorial", this.aZd = "https://territorial.io/players", this.aZe =
		"https://territorial.io/clans", this.aZf = "https://territorial.io/clan-results", this.a60 = "https://patreon.com/c/territorial", this.l1 = "https://play.google.com/store/apps/details?id=territorial.io", this.l2 =
		"https://apps.apple.com/app/id1581110913", this.l3 = "https://discord.gg/pthqvpTXmh", this.l4 = "https://www.instagram.com/davidtschacher/", this.vk =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function vV() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aIh() {
	var aZg = -1,
		aZh = null,
		aTO = -1,
		aWB = 4;

	function aZj() {
		dG.aVs() ? gb.render() : gb.kd()
	}

	function aZp(jA, ba) {
		var jn = jA >> 16,
			mX = jA >> 8 & 255,
			jA = 255 & jA,
			aZq = 255 - ba,
			aZq = (aZq < jn && aZq < mX && aZq < jA && (ba = -ba), aZg >> 7),
			aZs = aZg >> 5 & 3,
			aZt = aZg >> 3 & 3;
		return (Math.max(Math.min(jn + ba, 252 + aZq), aZq) << 16) + (Math.max(Math.min(mX + ba, 252 + aZs), aZs) << 8) + Math.max(Math.min(jA + ba, 252 + aZt), aZt)
	}

	function aZi() {
		return -1 !== aZg && (fK.aK8(aZg, aZh[0], aZh[1], aZh[2]), aZo(aZg), aZg = -1)
	}

	function aZo(player) {
		bV.bW = !0;
		for (var fw = f4.fw[player], fx = f4.fx[player], fy = f4.fy[player], fz = f4.fz[player], aK = fx; aK <= fz; aK++)
			for (var aJ = fw; aJ <= fy; aJ++) {
				var gt = fK.aC0(aJ, aK);
				fK.pm(player, gt) && (fK.aKE(gt) ? fK.aKK(gt, player) : fK.aC1(gt) ? fK.a4E(gt, player) : fK.aC2(gt, player))
			}
	}
	this.a4 = function() {
		aZh = null, aTO = aZg = -1, aWB = aQ.ld(Math.floor(r.buffer.data[16].value), 0, 16)
	}, this.ar = function(m6) {
		if (r.buffer.data[15].value && 0 !== aWB && (m6 || !jC.jD())) {
			var m6 = aj.hr(jC.hi),
				hs = aj.ht(jC.hj);
			if (aj.hv(m6, hs)) {
				m6 = aj.hu(m6, hs), hs = aj.i5(m6);
				if (aTO === hs)
					if (fK.ii(hs)) {
						if (aZg === fK.iA(hs)) return
					} else if (-1 === aZg) return;
				! function(gt) {
					fK.ii(gt) ? (gt = fK.iA(gt)) !== aZg && (aZi(), function(player) {
						aZg = player, aZh = fK.aKC(player);
						var aZm = function() {
							var ev = aZh,
								aGE = aWB << 2,
								aGF = aGE << 1;
							return [aZp(ev[0], aGE), aZp(ev[1], aGF), aZp(ev[2], aGF)]
						}();
						fK.aK8(player, aZm[0], aZm[1], aZm[2]), aZo(player)
					}(gt), aZj()) : aZi() && aZj()
				}(aTO = hs)
			} else aZi() && aZj()
		}
	}
}

function a6E() {
	var aFB = 0,
		aZu = 0,
		aZv = 0,
		aZw = null,
		aZx = null;

	function aa0(ev, aa1, aa2) {
		var v = ev.username;
		return (v += "   " + or.cI.a9z(ev.p5, ev.qw, ev.aA0)) + function(ev) {
			ev = ev.a0;
			if (ev < 1e3) return "   Gold: " + ev;
			if ((ev %= 1024) < 1e3) return "   Gold: " + ev + "k";
			return "   Gold: " + (ev - 999) + "M"
		}(ev) + ("   IP: " + w.p.hg(ev.aLg, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aa2 ? aZu : aZz(ev, aa1)])
	}

	function aZz(ev, aa1) {
		return aZu = aa1 || or.ox.a0N(ev.aE) ? 1 : 0
	}
	this.ot = 0, this.aZy = function() {
		!aFB || aZu === aZz(aZx) && aZv === aZx.a0 || (aZv = aZx.a0, aZw.show(-1, -1, aa0(aZx, 0, 1), 1, 1, aZx.color))
	}, this.p8 = function(ej, ev, aa1) {
		var cl = ej.getBoundingClientRect();
		this.show(cl.left, cl.top, ev, 0, aa1), ej.addEventListener("mouseleave", function remove() {
			ej.removeEventListener("mouseleave", remove), or.os && or.os.eQ(1)
		}), this.ot = aa1
	}, this.show = function(aJ, aK, ev, aY7, aa1) {
		aZw = aZw || new aY4, aZv = (aZx = ev).a0, aZw.show(aJ, aK, aa0(ev, aa1), aY7, 0, aZx.color), aFB = 1
	}, this.eQ = function(aYC) {
		this.ot = 0, aZw && aZw.eQ(aYC) && (aFB = 0, aZx = null)
	}
}

function aFD(aAZ, aND, aa4, aa5) {
	var self;
	this.p2 = document.createElement("span"), (self = this).p2.textContent = aAZ, self.p2.style.color = dZ.dc, self.p2.style.position = "absolute", self.p2.style.font = "inherit", aa5 ? self.p2.style.bottom = "0.06em" : self.p2.style.top = "0.12em",
		aa4 ? self.p2.style.left = "0.2em" : self.p2.style.right = "0.2em", self.p2.style.fontSize = "0.6em", self.p2.style.pointerEvents = "none", self.p2.style.whiteSpace = "pre", aND.style.position = "relative", aND.style.overflow = "hidden", aND
		.appendChild(self.p2)
}

function aIm() {
	this.a4 = function() {
		this.au = [], this.go = 0
	}, this.aC = function() {
		return new Uint8Array(this.au)
	}, this.e = function(aa6, value) {
		for (var au = this.au, r2 = this.go + aa6 - 1, aa7 = 1 + (r2 >> 3); au.length < aa7;) au.push(0);
		for (var a5 = this.go; a5 <= r2; a5++) au[a5 >> 3] |= (value >> r2 - a5 & 1) << 7 - (7 & a5);
		this.go += aa6
	}, this.z0 = function(au, un, aEE) {
		var aa8 = aV.aW.aa9(au);
		this.e(un, aa8);
		for (var a5 = 0; a5 < aa8; a5++) this.e(aEE, au[a5])
	}, this.z1 = function(au, un, aEH) {
		var aa8 = aV.aW.aa9(au);
		this.e(un, aa8);
		for (var a5 = 0; a5 < aa8; a5++) this.yy(au[a5], aEH)
	}, this.yy = function(v, un) {
		var u = v.length;
		this.e(un, u);
		for (var a5 = 0; a5 < u; a5++) this.e(16, v.charCodeAt(a5))
	}, this.yz = function(gj) {
		var aaA = (gj = gj.toDataURL()).split(",");
		if (aaA.length < 2) console.log("error 266");
		else {
			gj = aV.hf.a7e(gj = aaA[aaA.length - 1], "/", "_"), gj = aV.hf.a7e(gj, "\\+", "-");
			var gj = aV.hf.a7e(gj, "=", ""),
				a80 = o.p.bI(gj),
				u = a80.length;
			this.e(30, u);
			for (var a5 = 0; a5 < u; a5++) this.e(6, a80[a5])
		}
	}
}

function vR() {
	for (var jA = document.createElement("canvas"), jA = (jA.width = 24, jA.height = 24, jA.getContext("2d", {
			alpha: !1
		})), ba = (jA.fillStyle = "rgb(0,0,0)", jA.fillRect(0, 0, 24, 24), jA.font = "22px system-ui", jA.textBaseline = "middle", jA.textAlign = "center", jA.fillStyle = "rgb(255,255,255)", jA.fillText("Q", 12, 12), jA.getImageData(0, 0, 24, 24)
			.data), u = ba.length, bA = 0, a5 = 0; a5 < u; a5 += 4) bA += ba[a5];
	return 16383 & bA
}

function aJ7() {
	var aJ, aK, b6, tx, aaB, aaC, aaD, aaE, aaF, aZ, a61, a2r;
	this.d8 = !1, this.a4 = function(v, aaG) {
		if (1 === cT.id && 13 <= cT.oe && cT.oe < 18) return aaG ? void(a61 = v) : a61 !== v ? void 0 : void cT.oX.saveString(200, v);
		aaG && (a61 = v, (a2r = document.createElement("a")).appendChild(document.createTextNode(a61)), this.d8 = !0, a2r.title = a61, a2r.target = "_blank", a2r.href = a61, a2r.style.textAlign = "center", a2r.style.color = dZ.dc, a2r.style
			.position = "absolute", a2r.style.padding = "0px", a2r.style.margin = "0px", this.resize(), document.body.appendChild(a2r), bV.bW = !0)
	}, this.eQ = function() {
		return !(!this.d8 || (d7.removeChild(document.body, a2r), this.d8 = !1))
	}, this.dB = function(l8, l9) {
		return !!this.d8 && ((l8 < aJ || l9 < aK || aJ + aZ < l8 || aK + b6 < l9 || aJ + aZ - tx < l8 && l9 < aK + tx) && (bV.bW = !0, this.d8 = !1, d7.removeChild(document.body, a2r)), !0)
	}, this.resize = function() {
		var ly, y6;
		this.d8 && (aaE = Math.floor(.8 * (cT.cU.cV() ? cy.aZ > cy.b6 ? .6 : .55 : .4) * cy.l7), tx = Math.floor(.15 * aaE), aaB = Math.floor(.35 * tx), aaC = Math.floor(.5 * tx), aaD = Math.floor(2.5 * aaC), b6 = tx + aaB + 3 * aaC, ly = aV.d1
			.d2(1, aaB / cy.ny), aaF = Math.floor(cy.ny * a21.measureText(a61, ly)), y6 = aZ = (aaE < aaF ? aaF : aaE) + 2 * aaD, aZ = Math.min(aZ, cy.aZ - 2 * (cT.cU.cV() ? 2 : 1) * cz.gap), ly = aV.d1.d2(1, aZ / y6 * aaB / cy.ny), aaF =
			Math.floor(cy.ny * a21.measureText(a61, ly)), aJ = Math.floor((cy.aZ - aZ) / 2), aK = Math.floor((cy.b6 - b6) / 2), a2r.style.font = ly, a2r.style.top = Math.floor((aK + 1.4 * aaC + tx) / cy.ny) + "px", a2r.style.left = Math
			.floor((aJ + (aZ - aaF) / 2) / cy.ny) + "px")
	}, this.cQ = function() {
		this.d8 && (dO.fillStyle = dZ.f6, dO.fillRect(aJ, aK + tx, aZ, b6 - tx), dO.fillStyle = dZ.aHb, dO.fillRect(aJ, aK, aZ, tx), dO.fillStyle = dZ.dc, dO.lineWidth = cz.qm, dO.strokeStyle = dZ.dc, dO.strokeRect(aJ, aK, aZ, b6), dO.fillRect(
			aJ, aK + tx, aZ, cz.qm), dO.font = aV.d1.d2(1, .48 * tx), aV.d1.textAlign(dO, 1), aV.d1.textBaseline(dO, 1), dO.fillText(L(491), Math.floor(aJ + (aZ - .5 * tx) / 2), Math.floor(aK + .55 * tx)), dG.aVx(Math.floor(aJ + aZ - .8 *
			tx), Math.floor(aK + .25 * tx), Math.floor(.5 * tx)), dO.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a8l() {
	var pw, a4Q, lR;
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), a4Q.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(L(269), [new ir("⬅️ " + L(4), function() {
		d7.lO()
	})]), a4Q = new lJ(pw.lK, ((lR = []).push(function() {
		function a4w() {
			aQh.button.textContent = L(104), aaJ.ej.readOnly = !1, aaK.ej.readOnly = !1, a4u.j2(1), a4u.button.style.color = dZ.dc
		}
		var lV = new lW,
			aaI = (lV.a4n(f.i.eJ("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", lV.lX(L(492)), new lc({
				value: r.buffer.data[105].value,
				go: -1
			})),
			aaJ = (aaI.ej.readOnly = !0, lV.lb(aaI), lV.lX(L(330), "0.8em"), new lc(r.buffer.data[148], 0, void 0, function(ej) {
				a4t(r.buffer.data[149].value, ej.target.value)
			})),
			aaK = (lV.lb(aaJ), lV.lX(L(334), "0.8em"), new lc(r.buffer.data[149], 1, void 0, function(ej) {
				a4t(ej.target.value, r.buffer.data[148].value)
			})),
			aQh = (lV.lb(aaK), new ir(L(104), function(ej) {
				return ej.textContent === L(104) ? (ej.textContent = L(105), aaJ.ej.readOnly = !0, aaK.ej.readOnly = !0, a4u.j2(0), a4u.button.style.color = dZ.j1, r.md.pE(149, aaK.ej.value), a4t(r.buffer.data[149].value, r
					.buffer.data[148].value)) : a4w(), !0
			})),
			a4u = (lV.lb(new k0([aQh.button])), new ir(L(103), function(ej) {
				return aaJ.ej.readOnly && f.i.e4(0) && (aV.d1.a4v(ej), a4w(), f.a4x.aF({
					action: 0,
					aE: r.buffer.data[148].value,
					value: parseInt(r.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			a4z = lV.a50(),
			a4t = (lV.a50(L(493)).style.fontWeight = "bold", function(kv, v) {
				a4z.innerHTML = d7.i.a2e(kv, r.buffer.data[105].value, v)
			});
		return lV.lb(new k0([a4u.button])), a4t(r.buffer.data[149].value, r.buffer.data[148].value), lV
	}()), lR))
}

function aMD(aF9, iu, aaL) {
	this.k2 = document.createElement("div"), this.aFC = aF9;
	var aaM = 0;
	this.resize = function(np, aaN) {
		var u = aF9.length;
		if (!aaL)
			for (var a5 = 1; a5 < u; a5++) aV.d1.k4(aF9[a5].button, 4);
		for (var aaO = 0, a5 = 0; a5 < u; a5++) aaO += aF9[a5].button.offsetWidth;
		if (np && (aaM = np.offsetWidth), aaN && aaO < aaM)
			for (a5 = 0; a5 < u; a5++) aF9[a5].button.style.width = (100 * aF9[a5].button.offsetWidth / aaO).toFixed(2) + "%";
		else
			for (a5 = 0; a5 < u; a5++) aF9[a5].button.style.width = "auto";
		aaN || this.resize(np, 1)
	};
	var dS = this;
	dS.k2.style.height = dS.k2.style.maxHeight = "100%";
	for (var a5 = 0; a5 < aF9.length; a5++) aF9[a5].j2(iu), aF9[a5].button.style.height = "100%", aF9[a5].button.style.padding = "0.0em 0.9em", aF9[a5].button.style.whiteSpace = "pre", dS.k2.appendChild(aF9[a5].button)
}

function aQo() {
	this.aXv = 0, this.a4 = function() {
		this.aXv = 0
	}, this.ar = function() {
		if (!this.aXv && bV.es() % 30 == 7 && aV.et.eu(90) && (fN.performance.aXv = 1)) {
			if (cr.f0) {
				var a6Z = dA.fE();
				if (fF.fG[a6Z]) {
					dA.aEf(a6Z);
					var au = gx.aBi,
						u = gx.aDR[0];
					if (0 !== u)
						for (var aaT = Math.min(100 + 10 * (u - 1), 400), a5 = 0; a5 < u; a5++) kj.aUy(au[a5], aaT)
				}
			}
			kj.aUy(fH[0], 100)
		}
	}
}

function sw() {
	this.bZ = function(au) {
		au.fill(0)
	}, this.aX = function(au) {
		for (var u = au.length, a5 = 0; a5 < u; a5++) au[a5] = []
	}, this.h8 = function(uy, xL) {
		for (var u9 = gx.aaU, a5 = 0; a5 < 3; a5++) u9[a5] = xL * uy[a5];
		return u9
	}, this.h9 = function(uy, u9, aaV) {
		for (var aJi = 0, a5 = 0; a5 < 3; a5++) aJi += Math.abs(uy[a5] - u9[a5]);
		return aaV <= aJi
	}, this.hA = function(uy, aaW) {
		for (var a5 = 0; a5 < 3; a5++) uy[a5] = aQ.ld(uy[a5] + aaW, 0, 255);
		return uy
	}, this.a9c = function(au, ai, al) {
		al = al || au.length - 1;
		for (var aEX = 0, a5 = ai = ai || 0; a5 <= al; a5++) aEX += au[a5];
		return aEX
	}, this.aaX = function(au, aaY) {
		for (var a5, aaZ, u = au.length, aaa = [], a6 = u - 1; 0 <= a6; a6--) {
			for (a5 = aaZ = 0; a5 < u; a5++) aaY(au[a5]) < aaY(au[aaZ]) && (aaZ = a5);
			u--, aaa.push(au[aaZ]), au[aaZ] = au[u], au.pop()
		}
		return aaa
	}, this.min = function(au) {
		var a5, kv, u = au.length;
		if (0 === u) return 0;
		for (kv = au[0], a5 = 1; a5 < u; a5++) kv = Math.min(kv, au[a5]);
		return kv
	}, this.max = function(au) {
		var u = au.length;
		if (0 === u) return 0;
		for (var kv = au[0], a5 = 1; a5 < u; a5++) kv = Math.max(kv, au[a5]);
		return kv
	}, this.aAS = function(au, kv) {
		for (var u = au.length, fi = 0, a5 = 0; a5 < u; a5++) fi += au[a5] > kv;
		return fi
	}, this.aab = function(a3A, a3B, min) {
		for (var u = a3B[0], a5 = u - 1; 0 <= a5; a5--) a3A[a5] < min && (a3A[a5] = a3A[--u]);
		a3B[0] = u
	}, this.aac = function(au, u, value) {
		for (var a5 = 0; a5 < u; a5++) au[a5] -= value
	}, this.rj = function(au) {
		for (var u = au.length, a5 = 0; a5 < u; a5++)
			if ("string" != typeof au[a5]) return !1;
		return !0
	}, this.lP = function(v, au, aad) {
		au.fill(0);
		for (var mX = v.split(","), u = Math.min(mX.length, au.length), a5 = 0; a5 < u; a5++) au[a5] = Math.min(parseInt(mX[a5]), aad)
	}, this.aXC = function(v, au, aGa) {
		au.fill("");
		for (var mX = v.split('"'), u = Math.min(mX.length, 2 * au.length), b4 = 0, a5 = 1; a5 < u; a5 += 2) au[b4++] = mX[a5].slice(0, aGa)
	}, this.aAR = function(au, fi) {
		if (0 === fi) au.fill(0);
		else {
			var aEX = this.a9c(au),
				u = au.length;
			if (0 === aEX) au.fill(aQ.aR(fi, u));
			else
				for (var a5 = 0; a5 < u; a5++) au[a5] = aQ.aR(fi * au[a5], aEX);
			if (0 === (aEX = this.a9c(au))) au[1] = fi;
			else
				for (var b4 = 0; aEX++ < fi;) au[b4 = (b4 + 1) % u] && au[b4]++
		}
	}, this.aa9 = function(au) {
		if (!au) return 0;
		var u = au.length;
		if (0 === u) return 0;
		for (var kv = au[u - 1], a5 = u - 2; 0 <= a5; a5--)
			if (au[a5] !== kv) return a5 + 2;
		return 1
	}, this.aMn = function(au) {
		for (var aEX = 0, a5 = 0; a5 < au.length; a5++) aEX += au[a5].length;
		return aEX
	}, this.a9d = function(aae) {
		for (var au = [], a5 = 0; a5 < aae.length; a5++) au = au.concat(aae[a5]);
		return au
	}, this.has = function(au, kv) {
		for (var u = au.length, a5 = 0; a5 < u; a5++)
			if (au[a5] === kv) return !0;
		return !1
	}
}

function aFT(aFC, np) {
	var k2;
	this.resize = function() {
		for (var a5 = 0; a5 < aFC.length; a5++) aV.d1.k4(aFC[a5].button);
		k2.style.gap = k2.style.padding = aV.d1.io(cz.o0)
	}, (k2 = document.createElement("div")).style.display = "grid", k2.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", k2.style.overflowY = "auto", k2.style.gridAutoRows = "5.3em", k2.style.maxHeight = "100%";
	for (var a5 = 0; a5 < aFC.length; a5++) aFC[a5].j3(1), k2.appendChild(aFC[a5].button);
	np.appendChild(k2)
}

function t1() {
	this.aXA = function(kv) {
		return [kv >> 12 & 63, kv >> 6 & 63, 63 & kv]
	}, this.aag = function(kv) {
		for (var au = this.aXA(kv), a5 = 0; a5 < 3; a5++) au[a5] = ~~(4.05 * au[a5]);
		return au
	}, this.tv = function(kv) {
		kv = this.aag(kv);
		return aV.color.aGy(kv[0], kv[1], kv[2])
	}, this.aah = function(au) {
		for (var a5 = 0; a5 < 3; a5++) au[a5] = ~~(au[a5] / 4.04);
		return (au[0] << 12) + (au[1] << 6) + au[2]
	}, this.aGy = function(jn, mX, av) {
		return "rgb(" + jn + "," + mX + "," + av + ")"
	}, this.aGz = function(jn, mX, av, a6) {
		return "rgba(" + jn + "," + mX + "," + av + "," + a6.toFixed(3) + ")"
	}, this.jF = function(jA) {
		for (var au = jA.split("(")[1].split(","), gy = gx.gy, a5 = 0; a5 < 3; a5++) gy[a5] = parseInt(au[a5]);
		return 4 === au.length ? gy[3] = 255 * parseFloat(au[3].slice(0, -1)) : gy[3] = 255, gy
	}, this.jG = function(aai, ba) {
		for (var au = aai.slice(aai.indexOf("(") + 1, aai.indexOf(")")).split(","), gy = gx.gy, a5 = 0; a5 < 3; a5++) gy[a5] = aQ.ld(parseInt(au[a5].trim(), 10) + ba, 0, 255);
		return 3 === au.length ? this.aGy(gy[0], gy[1], gy[2]) : (aai = parseFloat(au[3].trim()), this.aGz(gy[0], gy[1], gy[2], aai = 0 === aai ? .3 : aai))
	}, this.aWJ = function(aaj, aak) {
		for (var aJi = 0, a5 = 0; a5 < 3; a5++) aJi += Math.abs(aak[a5] - aaj[a5]);
		if (!(240 <= aJi))
			for (a5 = 0; a5 < 3; a5++) aak[a5] = aaj[a5] + (aaj[a5] < 128 ? 80 : -80)
	}, this.aal = function(au) {
		for (var v = "#", a5 = 0; a5 < 3; a5++) {
			var jn = au[a5].toString(16);
			v += 1 === jn.length ? "0" + jn : jn
		}
		return v
	}, this.aam = function(v) {
		var jn, mX;
		return v.length < 7 ? dZ.pi : (jn = parseInt(v.slice(1, 3), 16), mX = parseInt(v.slice(3, 5), 16), v = parseInt(v.slice(5, 7), 16), this.aGy(jn, mX, v))
	}
}

function cP() {
	this.ar = function(player, o4) {
		player = am.cI.a0s(player, o4);
		return !(player < 0 || !am.cM.zT(player) || (am.cM.nX(player), 0))
	}
}

function aan() {
	this.ar = function(j) {
		var id, z5, r2;
		for (bG.a4(j), bG.go += 2, r2 = 8 * bG.size; bG.go + 8 <= r2;) id = bG.bM(4), z5 = bG.bM(9), 0 === id ? this.aT3(id, z5, bG.bM(22)) : 1 === id ? this.aT3(id, z5, bG.bM(10), bG.bM(10)) : 2 === id ? this.aT3(id, z5, bG.bM(10), bG.bM(9)) :
			3 === id ? this.aT3(id, z5, bG.bM(10), bG.bM(27)) : 4 === id ? this.aT3(id, z5, bG.bM(10), bG.bM(16)) : 5 === id || 6 === id ? this.aT3(id, z5, bG.bM(10)) : 7 === id ? this.aT3(id, z5, bG.bM(1)) : 10 === id ? this.aT3(id, z5, bG.bM(
				20), bG.bM(22)) : this.aT3(id, z5)
	}, this.a1q = [], this.aao = function() {
		for (var aaq = 0, aar = 0, aas = 0, aat = 0, aau = 0, aav = 0, a5 = 0; a5 < 512; a5++) aaq += f4.fv[a5], aar += f4.g0[a5], aas += f4.g2[a5], aat += am.i.mr[a5];
		aau += am.i.hS, aav += f8.f9, this.a1q.push(aas % 1073741824 * 4 + (aaq + aar + aat + aau + aav) % 4)
	}, this.aT3 = function(id, z5, z7, kw) {
		0 === id ? i2.aMr.i4(z5, z7) : 1 === id ? i2.aMr.iG(z5, z7, kw) : 2 === id ? i2.aMr.a6l(z5, z7, kw) : 3 === id ? i2.aMr.iO(z5, z7, kw) : 4 === id ? i2.aMr.iR(z5, z7, kw) : 5 === id ? i2.aMr.aLS(z5, z7) : 6 === id ? i2.aMr.aMz(z5, z7) :
			7 === id ? i2.aMr.ib(z5, z7) : 8 === id ? i2.aMr.aFW(z5) : 9 === id ? i2.aMr.aWv(z5) : 10 === id && i2.aMr.iB(z5, z7 >> 10, kw, z7 % 1024)
	}
}

function aJV(t) {
	var pw, a4Q, lR;
	this.show = function() {
		pw.show(), this.resize()
	}, this.eQ = function() {
		pw.eQ()
	}, this.resize = function() {
		pw.resize(), a4Q.resize()
	}, this.lh = function(jA) {
		2 === jA && pw.li[0].iy()
	}, pw = new lH(L(494), [new ir("⬅️ " + L(4), function() {
		d7.a1H(10)
	})]), a4Q = new lJ(pw.lK, ((lR = []).push(function() {
		var a4y, lV = new lW,
			aDw = new lc(r.buffer.data[132], 1, function() {
				a4y.button.click()
			}),
			aDx = new lc(r.buffer.data[131], 1, function() {
				aDw.ej.focus()
			});
		lV.lX(L(252)), lV.lb(aDx), aDx.ej.style.marginBottom = "0.8em", lV.lX(L(253)), lV.lb(aDw);
		return a4y = new ir(L(251), function() {
			ai = Math.floor(aDx.ej.value), al = Math.floor(aDw.ej.value);
			var al, ai = {
				aaZ: Math.min(ai, al),
				aVg: Math.max(ai, al)
			};
			d7.dF(8, d7.sO(10).eL, new tt(21, {
				cY: t.cY,
				ai: ai.aaZ,
				al: ai.aVg
			}))
		}, 0, 0, 1), lV.lb(new k0([a4y.button])), lV
	}()), lR.push(function() {
		var a4y, lV = new lW,
			aDw = new lc(r.buffer.data[134], 1, function() {
				a4y.button.click()
			}),
			aDx = new lc(r.buffer.data[133], 0, function() {
				aDw.ej.focus()
			});
		return lV.lX(1 === t.cY ? L(495) : L(496)), lV.lb(aDx), aDx.ej.style.marginBottom = "0.8em", lV.lX(L(497)), lV.lb(aDw), a4y = new ir(L(251), function() {
			var ca = aDx.ej.value.slice(0, 20),
				cb = Math.abs(Math.floor(aDw.ej.value));
			d7.dF(8, d7.sO(10).eL, new tt(22, {
				cY: t.cY,
				ca: ca,
				cb: cb
			}))
		}, 0, 0, 1), lV.lb(new k0([a4y.button])), lV
	}()), lR.push(function() {
		var a4y, lV = new lW,
			aDw = new lc(r.buffer.data[152], 1, function() {
				a4y.button.click()
			}),
			aDx = new lc(r.buffer.data[151], 0, function() {
				aDw.ej.focus()
			});
		return lV.lX(L(498)), lV.lb(aDx), aDx.ej.style.marginBottom = "0.8em", lV.lX(L(497)), lV.lb(aDw), a4y = new ir(L(251), function() {
			var ca = aDx.ej.value.slice(0, 5),
				cb = Math.abs(Math.floor(aDw.ej.value));
			d7.dF(8, d7.sO(10).eL, new tt(28, {
				cY: t.cY,
				ca: ca,
				cb: cb
			}))
		}, 0, 0, 1), lV.lb(new k0([a4y.button])), lV
	}()), lR))
}

function aIC() {
	this.aR = function(a6, av) {
		return Math.floor((a6 + .5) / av)
	}, this.aaz = function(a6, av) {
		return Math.floor(a6 * (av + .5))
	}, this.sqrt = function(kv) {
		return ~~Math.sqrt(kv + .5)
	}, this.pow = function(ej) {
		return Math.floor(Math.pow(2, ej) + .5)
	}, this.ld = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.ab0 = function(z5, z7, kw) {
		return Math.max(Math.min(z5, z7), kw)
	}, this.ab1 = function(ab2, ab3, aJ, aK) {
		aJ -= ab2, ab2 = aK - ab3, aK = 0;
		return 0 == aJ ? aK = 0 <= ab2 ? Math.PI : 0 : (aK = Math.atan(ab2 / aJ), aK += 0 < aJ ? .5 * Math.PI : 1.5 * Math.PI), aK
	}, this.log2 = function(kv) {
		return Math.floor(!!kv * (1 + Math.log2(kv + .5)))
	}, this.log10 = function(kv) {
		return Math.floor(Math.log10(kv + .5))
	}, this.aBE = function(hC, hD, ab5, ab6, ab7) {
		return ab5 - ab7 < hC && hC < ab5 + ab7 && ab6 - ab7 < hD && hD < ab6 + ab7
	}, this.aBl = function(nN, nO) {
		return nN * nN + nO * nO
	}
}

function aIU() {
	var ab8, ab9, size, oK, hF, abA;

	function abB(player) {
		return player < cr.fb ? ab8 * player : ab8 * cr.fb + ab9 * (player - cr.fb)
	}
	this.a4 = function() {
		ab8 = cr.fb < 16 ? 12 : 8, ab9 = 4;
		var u = abB(cr.fc);
		size = new Uint8Array(cr.fc), oK = new Uint16Array(u), hF = new Uint32Array(u), abA = new Uint8Array(u)
	}, this.abC = function(abD, abE) {
		var abF = this.a4B(abD, abE),
			abE = (this.a4A(abD, abE, 0), aV.et.oL(abD, abF));
		gK.n6(abD, abF - abE, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.pd = function(player, abE) {
		var abI, abE = function(player, abE) {
			var a5, bA = abB(player);
			for (a5 = size[player] - 1; 0 <= a5; a5--)
				if (oK[bA + a5] === abE) return a5;
			return size[player]
		}(player, abE);
		abE !== size[player] && (abI = hF[abB(player) + abE], this.aQR(player, abE), this.gE(player, abI, cr.fc))
	}, this.oO = function(player, abE) {
		for (var bA = abB(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (oK[bA + a5] === abE) return !0;
		return !1
	}, this.oP = function(player) {
		return player < cr.fb ? size[player] < ab8 : size[player] < ab9
	}, this.iI = function(player) {
		return size[player]
	}, this.iX = function(player, a5) {
		return oK[abB(player) + a5]
	}, this.iV = function(player, a5) {
		return hF[abB(player) + a5]
	}, this.a4B = function(player, abE) {
		for (var bA = abB(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (oK[bA + a5] === abE) return hF[bA + a5];
		return 0
	}, this.n1 = function(player) {
		for (var bA = abB(player), kv = 0, a5 = size[player] - 1; 0 <= a5; a5--) kv += hF[bA + a5];
		return kv
	}, this.a4A = function(player, abE, abI) {
		for (var bA = abB(player), a5 = size[player] - 1; 0 <= a5; a5--) oK[bA + a5] === abE && (hF[bA + a5] = abI)
	}, this.a3q = function(player, a5, abI) {
		hF[abB(player) + a5] = Math.max(abI, 0)
	}, this.a3u = function(player, a5) {
		abA[abB(player) + a5] = 0
	}, this.aQM = function(player, a5) {
		return abA[abB(player) + a5]
	}, this.gE = function(player, abI, abE) {
		fN.aDn.aDo[player] = fN.aDn.aDo[abE] = 8, aV.et.pS(abE) && gK.gL[6 - aV.et.jy(player)]++;
		for (var bA = abB(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (oK[bA + a5] === abE) return hF[bA + a5] += abI, void(hF[bA + a5] = hF[bA + a5] > cr.xG ? cr.xG : hF[bA + a5]);
		oK[bA + size[player]] = abE, hF[bA + size[player]] = abI, abA[bA + size[player]] = 1, size[player]++, abE === cr.gJ ? ew.pk(player, 5) : player < cr.fb && player === cr.gJ && fm.xx(abE)
	}, this.aQR = function(player, go) {
		var a6, bA;
		if (0 !== size[player])
			for (bA = abB(player), size[player]--, a6 = go; a6 < size[player]; a6++) oK[bA + a6] = oK[bA + a6 + 1], hF[bA + a6] = hF[bA + a6 + 1], abA[bA + a6] = abA[bA + a6 + 1]
	}, this.pM = function(player) {
		for (var a6, bA, pY = [], a5 = f8.f9 - 1; 0 <= a5; a5--)
			for (bA = abB(f8.fB[a5]), a6 = size[f8.fB[a5]] - 1; 0 <= a6; a6--)
				if (oK[bA + a6] === player) {
					pY.push(f8.fB[a5]);
					break
				} return pY
	}
}

function aJa(np, data, la) {
	var u = data.aJY.length,
		abJ = document.createElement("div"),
		abK = document.createElement("div"),
		abL = document.createElement("div"),
		abM = new Array(u),
		lR = new Array(u),
		abN = new Array(data.aJW.length),
		abO = aV.color.aGz(70, 70, 0, .35);

	function jG() {
		this.style.backgroundColor = aV.color.jG(abO, 160)
	}

	function abS() {
		this.style.backgroundColor = abO
	}

	function nw() {
		var a6;
		for (np.style.font = aV.d1.d2(0, aV.d1.aE4(.026, .5, .03)), a5 = 1; a5 < abN.length; a5++) aV.d1.k4(abN[a5], 4);
		if (aV.d1.k4(abJ, 2), u) {
			for (var bj, de = abJ.offsetWidth, df = abL.offsetWidth, a5 = 0; a5 < abN.length; a5++) bj = .01 * data.aJZ[a5] * df, abN[a5].style.width = (100 * bj / de).toFixed(2) + "%";
			var bA = data.aJY[0].length;
			for (a5 = 0; a5 < u; a5++)
				for (aV.d1.k4(abM[a5], 2), a6 = 1; a6 < bA; a6++) aV.d1.k4(lR[a5][a6], 4);
			abK.abP && (abK.scrollTop = abK.abP)
		}
	}
	this.resize = function() {
			nw(), nw()
		}, np.style.display = "flex", np.style.flexDirection = "column", abK.style.overflowX = "hidden", abK.style.overflowY = "auto", abK.addEventListener("scroll", function() {
			this.abP = this.scrollTop, la && la.aJb && (d7.i.qc[la.aJb] = this.scrollTop)
		}),
		function() {
			var ba, a5, aJY = data.aJY,
				bA = u ? aJY[0].length : 0;
			for (a5 = 0; a5 < u; a5++) {
				abM[a5] = document.createElement("div"), abM[a5].style.backgroundColor = function(a5) {
					return a5 % 2 == 1 ? aV.color.aGz(130, 130, 130, .35) : dZ.aH0
				}(a5), abM[a5].style.width = "100%", abM[a5].style.display = "flex", lR[a5] = new Array(bA);
				for (var a6 = 0; a6 < bA; a6++) lR[a5][a6] = ba = document.createElement("div"), ba.style.display = "flex", ba.style.justifyContent = "center", ba.style.wordBreak = "break-all", ba.style.padding = "0.4em 0em", ba.style.width = data
					.aJZ[a6] + "%", ba.textContent = aJY[a5][a6].kv, 1 === aJY[a5][a6].kG && (ba.name = "" + a5, ba.style.color = dZ.j1, ba.style.backgroundColor = abO, ba.addEventListener("mouseover", jG), ba.addEventListener("mouseout", abS),
						function(ba, aE, a4T) {
							2147483647 !== a4T && ba.addEventListener("click", function() {
								c.d(30), c.e(30, aE), bG.a4(c.j), this.style.backgroundColor = abO, d7.dF(8, d7.lA, new tt(25, {
									action: 0,
									aE: w.p.yw(w.p.yx(5)),
									a4T: a4T
								}))
							})
						}(ba, aJY[a5][a6].aE, aJY[a5][a6].a4T)), abM[a5].appendChild(ba)
			}
			for (abJ.style.display = "flex", abJ.style.backgroundColor = aV.color.aGz(0, 120, 0, .35), a5 = 0; a5 < abN.length; a5++) abN[a5] = ba = document.createElement("div"), ba.style.display = "flex", ba.style.justifyContent = "center", ba
				.style.wordBreak = "break-all", ba.style.padding = "0.4em 0em", ba.style.width = data.aJZ[a5] + "%", ba.innerHTML = data.aJW[a5], abJ.appendChild(ba)
		}();
	for (var a5 = 0; a5 < u; a5++) abL.appendChild(abM[a5]);
	abK.appendChild(abL), np.appendChild(abJ), np.appendChild(abK), la && la.aJb && (abK.abP = d7.i.qc[la.aJb])
}

function aIe() {
	var b6, canvas, ck, abU, abV, abW, abX, aAC, abY, abZ, aba, abb, aP0 = !1,
		gj = (this.d8 = !1, this.aZ = 0, new Array(2)),
		abc = 0;

	function d3() {
		var aZ = iZ.aZ,
			bA = (aAC = !1, aNH(ck, aZ, b6), Math.floor(aZ / 2));
		1 === abU ? (ck.fillStyle = dZ.m7, ck.fillRect(bA, 0, bA, b6)) : -1 === abU && (ck.fillStyle = dZ.ub, ck.fillRect(0, 0, bA, b6)), aNI(ck, aZ, b6, 2);
		var bA = (bA = Math.floor(.25 * b6)) < 2 ? 2 : bA,
			aHh = (ck.fillStyle = dZ.aH2, Math.floor((b6 - 4) * abV[1] / abW[1]));
		0 < aHh && ck.fillRect(2, b6 - 2 - aHh, bA, aHh), 0 < (aHh = Math.floor((b6 - 4) * abV[0] / abW[0])) && ck.fillRect(aZ - 2 - bA, b6 - 2 - aHh, bA, aHh);
		bA = (bA = Math.floor(b6 / 8)) < 2 ? 2 : bA, aNK(ck, Math.floor(.4 * b6), 0, b6, bA, .5, !1), aNK(ck, Math.floor(aZ - 1.4 * b6), 0, b6, bA, .5, !0), aHh = 1.1 * b6 / gj[0].width;
		ck.imageSmoothingEnabled = !0, ck.setTransform(aHh, 0, 0, aHh, (aZ - aHh * gj[0].width) / 2, -.05 * b6), ck.drawImage(gj[+aP0], 0, 0), ck.setTransform(1, 0, 0, 1, 0, 0)
	}

	function abg() {
		abb = -1, aP0 = aI1.a6J(), ew.gU(257), ew.aOz(aP0), iZ.d8 = !0, aAC = !0, abY = 360;
		for (var kv, kG = 0, a5 = f8.f9 - 1; 0 <= a5; a5--) aV.et.jy(f8.fB[a5]) || (kG += f4.g0[f8.fB[a5]]);
		aP0 ? abW[0] = Math.max(aQ.aR(3 * kG, 4), 1) : cr.f0 ? (kv = 9 === cr.fW ? 8 === fF.fG[dA.fE()] ? 80 : (kv = aQ.aR(100 * dA.mN(), cr.lv), aQ.aR(aQ.ld(1550 - 11 * kv, 400, 1e3), 10)) : (kv = aQ.aR(100 * dA.mN(), cr.lv), aQ.aR(aQ.ld(1600 - 12 *
			kv, 400, 1e3), 10)), kv = aQ.aR(kv * kG, 100), abW[0] = Math.max(kv, 1)) : 8 === cr.fW ? abW[0] = Math.max(aQ.aR(3 * kG, 4), 1) : abW[0] = Math.max(aQ.aR(3 * kG, 5), 1), abW[1] = Math.max(kG - abW[0], 1)
	}

	function aTs() {
		aba = bV.es(), aAC = !0, abY = abU = 0, abX = [], iZ.d8 = !1, ew.kY(247), abV[0] = abV[1] = 0, ew.gU(673)
	}

	function cv() {
		return gM.cw(ew.aOa()) ? __fx.settings.keybindButtons ? gM.aK - 2 * (b6 + cz.gap) : gM.aK - b6 - cz.gap : ka.cw(ew.aOc()) ? ka.cv() - b6 - cz.gap : cy.b6 - b6 - d0.cS() * cz.gap
	}
	this.rd = function() {
		for (var a5 = 0; a5 < 2; a5++) gj[a5] = aV.canvas.rJ(l5.get(3), 8 - a5, dZ.aHd), gj[a5] = aV.canvas.rN(gj[a5])
	}, this.a4 = function() {
		aba = -1e4, abZ = abc = 0, abb = -1, this.d8 = !1, aAC = aP0 = !1, abV = [abU = abY = 0, 0], abW = [1, 1], abX = [], this.resize()
	}, this.resize = function() {
		b6 = gM.b6, this.aZ = 4 * b6, (canvas = document.createElement("canvas")).width = this.aZ, canvas.height = b6, ck = canvas.getContext("2d", {
			alpha: !0
		}), d3()
	}, this.gW = function() {
		aAC && d3()
	}, this.dB = function(aJ, aK) {
		return !!this.d8 && !(aJ < cy.aZ - this.aZ - cz.gap || aK < cv() || (cr.cs || this.ia(cr.gJ) && (dG.dH && dG.dI(), i2.i3.ib(aJ > cy.aZ - cz.gap - this.aZ / 2 ? 1 : 0)), 0))
	}, this.ar = function() {
		0 < abZ ? 0 === --abZ && aTs() : this.d8 ? 180 == --abY && 3 * abV[0] < abW[0] ? aTs() : abV[0] >= abW[0] ? aP0 ? kQ.mS.kI() : kQ.mS.kM() : abV[1] >= abW[1] ? abZ = 4 : abY <= 0 && aTs() : ! function() {
			var jw = bV.es();
			if (jw % 40 == 14) {
				if (abc) return !(jw < abc) && !(jw < aba + 535) && (abc = jw + 1071, aV.et.a6Y()) ? (abg(), 1) : 0;
				(1 === f8.f9 || (cr.f0 ? dA.mN() : f4.g0[fH[0]]) >= aQ.aR(96 * cr.lv, 100)) && (abc = jw + 535)
			}
			return
		}() && 0 <= abb && (ew.f3(250, L(499, [f4.f5[abb]]), 673, abb, dZ.dc, dZ.f6, -1, !0), abg())
	}, this.kN = function() {
		this.d8 && abV[0] < abW[0] && aTs()
	}, this.abi = function(player, abj) {
		var abk = L(abj ? 500 : 501, [f4.f5[player]]),
			abk = (ew.f3(450, abk, 257, player, abj ? dZ.zm : dZ.oA, dZ.f6, -1, !0), abX.push(player), aAC = !0, cr.eh ? Math.max(abW[0], abW[1]) : f4.g0[player]),
			abk = Math.max(abk, 1);
		abj ? abV[0] += abk : abV[1] += abk, player === cr.gJ && (abU = abj ? 1 : -1)
	}, this.cQ = function() {
		var aK;
		this.d8 && (aK = cv(), dO.drawImage(canvas, cy.aZ - this.aZ - cz.gap, aK))
	}, this.ic = function(player) {
		if (0 !== abY) return !1;
		if (!aV.et.hm(1)) return !1;
		if (!aV.et.hn(player)) return !1;
		if (10 <= fD[player] && !aV.et.a6y(player, 9)) return !1;
		if (!cr.eh) {
			player = bV.es();
			if (player < aba + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.ia = function(bB) {
		if (!aV.et.hm(1)) return !1;
		if (!aV.et.hn(bB)) return !1;
		if (!this.d8) return !1;
		for (var a5 = abX.length - 1; 0 <= a5; a5--)
			if (abX[a5] === bB) return !1;
		return !0
	}, this.iY = function(player) {
		abb = player
	}
}

function aQu() {
	this.ar = function(player) {
		var a7i = function(player) {
			for (var cG = am.cG.sA(), u = cG.length, bA = Math.min(u, 32), b4 = fj.fk(u), a5 = 0; a5 < bA; a5++) {
				var a7i = (a5 + b4) % u,
					mu = cG[a7i],
					a7s = mu[0],
					aAp = mu[mu.length - 1];
				if (am.cI.aAx(player, a7s) && am.cI.a7g(player, aAp)) return a7i;
				if (am.cI.aAx(player, aAp) && am.cI.a7g(player, a7s)) return 0 <= (a7i = am.cG.rz(aAp, a7s)) ? a7i : am.cG.ry() ? -1 : am.cG.s9(am.cG.s2(mu))
			}
			return -1
		}(player);
		return -1 !== a7i && (a7i = am.cG.get(a7i), !am.cI.aBI(player, a7i)) && (gx.au[0] = a7i, !0)
	}
}

function aIy() {
	var yg = 501,
		abm = (this.aZ3 = new Uint32Array(yg), this.a6f = new Uint32Array(yg), this.mT = new Uint16Array(yg), this.aFU = 0, 1),
		aW0 = 0;

	function abn(self) {
		self.max.fill(0)
	}

	function abt(self, a5) {
		self.max[0] = Math.max(self.aZ3[a5], self.max[0]), self.max[1] = Math.max(self.a6f[a5], self.max[1]), self.max[2] = Math.max(self.mT[a5], self.max[2])
	}
	this.max = [0, 0, 0], this.aZA = 0, this.gL = new Array(21), this.aZ7 = null, this.rd = function() {
		this.aZ7 = [L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(3), L(461), L(510), L(511), L(512), L(513), "", L(514), L(515), L(516), L(303), L(517), L(518)]
	}, this.a4 = function() {
		this.aFU = 0, abm = 1, this.aZA = 0, aW0 = 0, abn(this), this.gL.fill(0)
	}, this.abo = function(player, yj) {
		aV.et.pS(player) && (this.gL[0] += yj + 1, this.gL[1]++, this.gL[12] += gx.mt[1])
	}, this.aDq = function(player, a6m) {
		__fx.donationsTracker.logDonation(player, a6m, gx.mt[0], gO.mE());
		player === cr.gJ && (ew.aDq(gx.mt[0], gx.mt[1], a6m), this.gL[12] += gx.mt[1], this.gL[16] += gx.mt[0]), a6m === cr.gJ && (ew.aP7(gx.mt[0], player), this.gL[10] += gx.mt[0])
	}, this.abp = function(player) {
		aV.et.pS(player) && (this.gL[2]++, this.gL[12] += gx.mt[1])
	}, this.abq = function(player) {
		aV.et.pS(player) && (this.gL[19]++, this.gL[12] += gx.mt[1])
	}, this.oD = function(player) {
		aV.et.pS(player) && this.gL[20]++
	}, this.n6 = function(player, a7Z, go) {
		aV.et.pS(player) && (this.gL[go] += a7Z)
	}, this.ar = function() {
		var self;
		this.aZA || 0 < aW0-- || ((self = this).aZ3[self.aFU] = f4.g0[cr.gJ], self.a6f[self.aFU] = f4.g2[cr.gJ], self.mT[self.aFU] = m9.mU(cr.gJ), abt(self, self.aFU), self.aFU++, self.aFU === yg && function(self) {
			abn(self), abt(self, 0), self.aFU = 1 + aQ.aR(yg, 2);
			for (var a5 = 1; a5 < self.aFU; a5++) self.aZ3[a5] = self.aZ3[2 * a5], self.a6f[a5] = self.a6f[2 * a5], self.mT[a5] = self.mT[2 * a5], abt(self, a5);
			abm *= 2
		}(self), aW0 = abm - 1, re.d3(), 0 === f4.fv[cr.gJ] && (self.aZA = bV.es()))
	}
}

function aE1() {
	this.aB = function(v, un, abv) {
		for (var abw = [], u = v.length, max = 0, a5 = 0; a5 < u; a5++) {
			var kv = v.charCodeAt(a5);
			abw.push(kv), max = Math.max(max, kv)
		}
		var uo = max < 128 ? 7 : 16;
		for (abv.e(un, u), abv.e(1, +(16 == uo)), a5 = 0; a5 < u; a5++) abv.e(uo, abw[a5])
	}
}

function aIf() {
	this.aNq = 0;
	var abx, aby, abz, ac0, ac1, ac2 = this.aXw = 0;

	function ac3() {
		ac0 = ac1 = null, ac2 = 0
	}
	this.a4 = function(aGd, aNn, aNo) {
		d7.vL(), or.kD(), eW.setState(10), ac0 = aGd, ac1 = aNn, ac2 = aNo, this.aNq = aGd.aNq, this.aXw = aNo, abx = 0, aby = bV.aw + 4500, f.i.dv = aGd.dv, f.i.dw === aGd.dv ? (console.log("direct pass"), abz = 0) : (console.log(
			"delayed pass"), f.i.close(f.i.dw, 3247), abz = 2, f.i.e2(aGd.dv, 5, 2) && f.e5.aL2()), dO.imageSmoothingEnabled = !0, eW.a2Q();
		aNn = l5.t9("loading"), aNo = (cT.cU.cV() ? .396 : .25) * cy.l7 / aNn.width;
		dO.setTransform(aNo, 0, 0, aNo, Math.floor((cy.aZ - aNo * aNn.width) / 2), Math.floor((cy.b6 - aNo * aNn.height) / 2)), dO.imageSmoothingEnabled = !1, dO.drawImage(aNn, 0, 0), dO.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVC = function() {
		0 < abz && bV.aw > aby && (abz--, aby += 4500, 0 === bV.aSs) && 0 === bV.es() && f.i.e2(f.i.dv, 5, 2)
	}, this.aCw = function() {
		return 10 === eW.eX() && (or.a68.aNr(ac0, ac1, ac2), ac3(), !0)
	}, this.aPD = function() {
		10 === eW.eX() && 2 <= ++abx && (or.a68.aNr(ac0, ac1, ac2), ac3())
	}
}

function rS() {
	this.au = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aOA = function() {
		for (var ac5 = [], au = this.au, u = au.length, a5 = 0; a5 < u; a5++) ac5.push(au[a5]);
		var aGJ = r.buffer.data[12].a6S;
		for (a5 = 0; a5 < u; a5++)
			if (ac5[a5] === aGJ) {
				ac5.splice(a5, 1), u--;
				break
			} ac5.sort(), u++, ac5.unshift(aGJ);
		try {
			if ("undefined" == typeof Intl) return ac5;
			for (a5 = 0; a5 < u; a5++) {
				var v = new Intl.DisplayNames([ac5[a5]], {
					type: "language"
				}).of(ac5[a5]);
				v !== ac5[a5] && (ac5[a5] = ac5[a5] + ": " + v)
			}
		} catch (ej) {
			console.log("error 3646: " + ej)
		}
		return ac5
	}, this.aOB = function(ww) {
		for (var v = r.buffer.data[12].value, u = ww.length, a5 = 0; a5 < u; a5++)
			if (v === ww[a5].split(":")[0]) return a5;
		return 0
	}, this.a9 = function(ac7) {
		if (ac7 && !(ac7.length < 2)) {
			ac7 = ac7.split("-")[0].toLowerCase();
			for (var au = this.au, u = au.length, a5 = 0; a5 < u; a5++)
				if (ac7 === au[a5]) return a5
		}
		return -1
	}
}

function aEx() {
	var v;
	10 === aS.bL ? v =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === aS.bL ? v =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === aS.bL ? v =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === aS.bL ? v =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === aS.bL ? v =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === aS.bL ? v =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === aS.bL ? v =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === aS.bL ? v =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === aS.bL ? v =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === aS.bL ? v =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === aS.bL ? v =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === aS.bL ? v =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === aS.bL && (v =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new b5).b8(v)
}

function a6C() {
	function ac9() {
		d7.sO(29) && (or.i.aLi && 1 === or.i.ow[2] && d7.sO(29).aMT(), or.i.aLi = 0, d7.sO(29).aMP(), d7.sO(29).aMO(), or.os.aZy())
	}
	this.aA1 = new Array(4), this.ow = [0, 0, 1, 0], this.aLi = 0, this.aMm = [0, 0], this.a4 = function() {
		for (var a5 = 0; a5 < this.aA1.length; a5++) this.aA1[a5] = new ac8;
		this.ow[0] = r.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.aA1), __fx.lobbyReminders.setPopupHandler(function(text) {
			or.message.sI({
				id: 7,
				a06: text
			})
		})
	}, this.aWf = function() {
		ac9(), or.a67.a4(), __fx.lobbyReminders.check()
	}, this.aTF = function() {
		or.a67.aTF();
		for (var a5 = 0; a5 < or.i.aA1.length; a5++) {
			var aGd = or.i.aA1[a5];
			0 === aGd.aMe ? aGd.acC = 0 : (aGd.aMZ = Math.max(aGd.aMZ - aGd.acC % 2, 0), aGd.acC++)
		}
		ac9(), __fx.lobbyReminders.check()
	}, this.aWj = function(a9v) {
		this.ow[0] !== a9v || this.ow[2] || d7.sO(29).aMp()
	}
}

function vT() {
	var ba = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + ba + .5) / 15))
}

function a52() {
	var ej;
	this.ej = document.createElement("hr"), this.resize = function() {
		aV.d1.k4(this.ej, 8, dZ.aH5)
	}, (ej = this.ej).style.marginBottom = ej.style.marginTop = "0.65em", ej.style.marginLeft = ej.style.marginRight = "-4%", ej.style.border = "none"
}

function lH(title, aFR, acD) {
	var acE = document.createElement("div"),
		acF = document.createElement("div"),
		abL = document.createElement("div"),
		acG = document.createElement("div"),
		acH = document.createElement("div");
	this.lK = abL, this.li = aFR, this.show = function() {
			!1 !== acD ? document.body.appendChild(acE) : (document.body.appendChild(acF), document.body.appendChild(acG))
		}, this.eQ = function() {
			!1 !== acD ? d7.removeChild(document.body, acE) : (d7.removeChild(document.body, acF), d7.removeChild(document.body, acG))
		}, this.aFx = function() {
			var aFy = aV.d1.iq(.1),
				aGh = aV.d1.iq(.08 + .04 * (cy.aV4 < 1), .3);
			return {
				aFy: aFy,
				aGh: aGh,
				aG0: cy.b6 / cy.ny - aFy - aGh
			}
		}, this.resize = function(aaN) {
			var u = aFR.length,
				aFw = this.aFx(),
				aFy = aFw.aFy,
				aGh = aFw.aGh;
			for (acF.style.height = aV.d1.io(aFy), aV.d1.k4(acF, 2), acG.style.top = aV.d1.io(cy.b6 / cy.ny - aGh), acG.style.height = aV.d1.io(aGh), aV.d1.k4(acG, 8), abL.style.top = aV.d1.io(aFy), abL.style.height = abL.style.maxHeight = aV.d1.io(
					aFw.aG0), acF.style.font = aV.d1.d2(0, aV.d1.iq(.02, .15)), acG.style.font = aV.d1.d2(0, aV.d1.iq(.02, .7)), abL.style.font = aV.d1.d2(0, aV.d1.iq(.02, .35)), a5 = 1; a5 < u; a5++) aV.d1.k4(aFR[a5].button, 4);
			for (var aaO = 0, a5 = 0; a5 < u; a5++) aaO += aFR[a5].button.offsetWidth;
			if (aaN && aaO < acG.offsetWidth)
				for (a5 = 0; a5 < u; a5++) aFR[a5].button.style.width = (100 * aFR[a5].button.offsetWidth / aaO).toFixed(2) + "%";
			else
				for (a5 = 0; a5 < u; a5++) aFR[a5].button.style.width = "auto";
			acG.aEA && (acG.scrollLeft = acG.aEA), aaN || this.resize(!0)
		}, this.cQ = function() {
			var aFw = this.aFx(),
				jA = cy.ny;
			dO.fillStyle = dZ.da, dO.fillRect(0, jA * aFw.aFy, cy.aZ, jA * aFw.aG0)
		}, acE.style.position = "absolute", acE.style.top = "0", acE.style.left = "0", acE.style.width = "100%", acE.style.height = "100%", acF.style.position = "absolute", acF.style.top = "0", acF.style.left = "0", acF.style.width = "100%", acF
		.style.display = "flex", acF.style.backgroundColor = dZ.da, acG.style.position = "absolute", acG.style.left = "0", acG.style.width = "100%", aV.d1.aE9(acG), acH.style.height = acH.style.maxHeight = "100%", abL.style.position = "absolute", abL
		.style.width = "100%", abL.style.backgroundColor = dZ.da,
		function() {
			for (var a5 = 0; a5 < aFR.length; a5++) aFR[a5].button.style.height = "100%", aFR[a5].button.style.padding = "0.0em 0.9em"
		}();
	for (var a5 = 0; a5 < aFR.length; a5++) acH.appendChild(aFR[a5].button);
	acF.appendChild(function() {
		var acK = document.createElement("h1");
		return acK.textContent = title, acK.style.margin = "auto", acK.style.fontSize = 18 <= title.length && cy.b6 > cy.aZ ? "1.8em" : "2.3em", acK.style.fontFamily = "Arial Black, system-ui", acK
	}()), acG.appendChild(acH), !1 !== acD && (acE.appendChild(abL), acE.appendChild(acF), acE.appendChild(acG))
}

function me() {
	this.pE = function(go, value) {
		2 !== r.buffer.data[go].type && (value = Math.floor(value)), r.buffer.data[go].value !== value && (r.buffer.od(go, value), 0 === go ? (d7.vL(), a8.a4(), d7.dF(2)) : 1 === go ? cy.aJ8(1) : 2 === go ? cy.aJ8(0) : 5 === go && (aV.d1.t3(), cy
			.aJ8(0)))
	}, this.oU = function() {
		for (var data = r.buffer.data, a5 = 0; a5 < 100; a5++) data[a5] && r.buffer.od(a5, data[a5].a6S);
		aV.d1.t3(), cy.aJ8(1)
	}, this.oV = function() {
		for (var data = r.buffer.data, a5 = 0; a5 < data.length; a5++) data[a5] && r.buffer.pE(a5, data[a5].a6S)
	}, this.vH = function() {
		for (var av = r.buffer, a5 = 128; a5 < 135; a5++) av.od(a5, av.data[a5].a6S)
	}, this.aFj = function(data) {
		r.md.pE(109, data.a4T), r.md.pE(107, data.a5B), r.md.pE(108, data.a5C), r.md.pE(112, data.a5D), r.md.pE(111, data.a4r), r.md.pE(113, data.a0), r.md.pE(135, data.a5i), r.md.pE(136, data.a5p), r.md.pE(137, data.a5h), r.md.pE(138, data.a5o),
			r.md.pE(139, data.a5j), r.md.pE(141, data.a5l), r.md.pE(142, data.a5q), r.md.pE(143, data.a5n), r.md.pE(144, data.a5r)
	}
}

function aWb() {
	function acO(au, kv, b4) {
		for (var a5 = 0; a5 < 256; a5++) au[a5] = (au[a5] + (kv >> (a5 + b4) % 30 & 1)) % 256
	}
	this.ar = function(acL, acM) {
		var au = new Uint8Array(256);
		return function(au, acL, acM) {
				var a5, acQ = 3 + (4 + acL) % 32768,
					acR = 12 + acM % 32768,
					acS = 17 + ((acL & acM) + (acL | acM) + acL) % 32768;
				for (a5 = 0; a5 < 256; a5++) acQ = 1 + acQ * acR % acS, au[a5] = acQ % 256
			}(au, acL, acM), acO(au, acL, 2), acO(au, acM, 7),
			function(au) {
				var a5, kv, go = 0;
				for (a5 = 0; a5 < 3e4; a5++) kv = au[go], au[go] = (kv + a5 + au[(go + a5) % 256]) % 256, go = (kv + a5 + go + (kv & go)) % 256
			}(au),
			function(au) {
				var a5, di = 1,
					aM2 = 1;
				for (a5 = 0; a5 < 256; a5 += 2) di = (1 + di) * (au[a5] + 1) % 1073741824, aM2 = (1 + aM2) * (au[a5 + 1] + 1) % 1073741824;
				return [di, aM2]
			}(au)
	}, this.aKz = function(acT, acU, acV, result) {
		for (var fi = 1 << acT, a5 = 0; a5 < fi; a5++)
			if (this.acW(a5, acU, acV) === result) return a5;
		return 0
	}, this.acW = function(acX, acU, acV) {
		for (var aBj = acU + acX, aBs = acV + acX, kv = aBj + aBs & 2147483647, a6 = 1; a6 <= 16; a6++) kv = (kv = (kv ^ kv >> a6) >>> 1 + (3 & aBj)) * (7 + (1023 & (aBj | aBs))) & 1073741823, aBs >>= 1 + (1 & (aBj >>= 1 + (1 & (kv += 65535 &
			aBs))));
		return kv &= 1073741823
	}
}

function c5() {
	this.ar = function(player) {
		return !!am.cC.yd(player) && !(am.i.mr[player] >= Math.max(3 * fN.performance.aXv, kj.mk[kj.hF[player]]) || !aV.et.a4M(player, kj.a4N[kj.hF[player]], 32, 0)) && (gO.mO() ? function(player) {
			var aca = am.cI.mR(),
				u = aca.length;
			if (0 === u) return !1;
			aca = aca[fj.fk(u)], u = am.i.ks[aca];
			if (am.cM.zH(player, u)) return !1;
			return !! function(player, a4L) {
				var a4L = aj.o3(am.i.hM[a4L]),
					hq = aj.fQ(a4L),
					a4L = aj.fR(a4L),
					dg = f4.fw[player],
					dh = f4.fx[player],
					hb = f4.fy[player],
					player = f4.fz[player],
					hb = Math.max(hq - hb, dg - hq),
					dg = Math.max(a4L - player, dh - a4L);
				return hb < 100 && dg < 100
			}(player, aca) && !!am.cK.yH(player, u, 1) && (aV.et.a4O(player), am.i.aa(player), !0)
		}(player) : !!(fN.aQt.ar(player) || fN.aQk.ar(player) || fN.aQm.ar(player)) && (function(player) {
			gx.iP[1] = 4, aV.et.a4O(player), am.i.aa(player)
		}(player), !0))
	}
}

function lW() {
	var k2;
	this.aA6 = [], this.k2 = document.createElement("div"), this.lX = function(v, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = v, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.k2.appendChild(
			title), title
	}, this.a50 = function(v, marginBottom) {
		var a4z = document.createElement("p");
		return a4z.textContent = v, a4z.style.fontSize = "0.75em", a4z.style.lineHeight = "1.2em", a4z.style.marginBottom = marginBottom || "0", this.k2.appendChild(a4z), a4z
	}, this.a5f = function(v) {
		var acc = document.createElement("p");
		return acc.textContent = v, acc.style.fontSize = "1em", acc.style.marginBottom = "0", acc.style.whiteSpace = "pre-wrap", acc.style.overflowWrap = "break-word", this.k2.appendChild(acc), acc
	}, this.a4n = function(pt, fontSize) {
		var k2 = document.createElement("div");
		return k2.innerHTML = pt, k2.style.fontSize = fontSize || "1em", k2.style.lineHeight = "1.2em", this.k2.appendChild(k2), k2
	}, this.lY = function(a55) {
		for (var a58 = a55.a58, u = a58.length, a5 = 0; a5 < u; a5++) this.k2.appendChild(a58[a5])
	}, this.lb = function(ev) {
		return this.aA6.push(ev), this.k2.appendChild(ev.ej), ev
	}, this.resize = function() {
		for (var u = this.aA6.length, a5 = 0; a5 < u; a5++) this.aA6[a5].resize && this.aA6[a5].resize()
	}, (k2 = this.k2).style.position = "absolute", k2.style.height = "auto", k2.style.padding = "0.5em"
}

function aIx() {
	var acd, ace = new Uint8Array(5),
		acf = new Uint8Array(5);
	this.acg = new el, this.a4 = function() {
		for (var kv = r.buffer.data[119].value, a5 = 0; a5 < ace.length; a5++) ace[a5] = (kv >> 2 * a5) % 4
	}, this.wO = function() {
		acd = [L(519), "", L(520, [aDA.aD8[28]]), L(521, [aDA.aD8[26]]), L(522, [aDA.aD8[0]])], this.acg.a4()
	}, this.ar = function() {
		this.acg.ar()
	}, this.aFX = function(id) {
		1 < id && jC.jD() || ! function(go) {
			if (3 === ace[go] || 1 === acf[go]) return;
			if (acf[go] = 1, !(Math.random() < .6)) {
				ace[go]++;
				for (var kv = 0, a5 = 0; a5 < ace.length; a5++) kv += ace[a5] << 2 * a5;
				r.md.pE(119, kv)
			}
			return 1
		}(id) || ew.aOf(acd[id])
	}
}

function a8m() {
	var lE, lF, lR;

	function ack() {
		var fi;
		1 === cr.data.gameMode ? (cr.data.teamPlayerCount || (cr.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), cr.ff.fg()), fi = aV.aW.aAS(cr.data.teamPlayerCount, 0), cr.data.numberTeams = fi) : (2 === cr.data
			.botDifficultyType && (cr.data.botDifficultyType = 0), 1 === cr.data.spawningType && (cr.data.spawningType = 0))
	}

	function lI() {
		1 !== cr.data.gameMode && (cr.data.teamPlayerCount = null), acm(), cr.data.canvas = null, d7.dF(5, 5)
	}

	function acm() {
		tq.z4.a4(), r.md.pE(156, tq.a1P.aB())
	}

	function aci() {
		cr.data.isReplay = 0, acm(), cr.ff.aAW(), eW.a2L(), cr.ff.aAT(), cr.data.canvas = 2 === cr.data.mapType ? aS.bX : null, cr.a1k(), cr.a1j = 1
	}

	function acy() {
		ack();
		for (var au = [aQa(), acq(), acr()], a5 = 3; a5 < 6; a5++) d7.removeChild(lF.nq, lF.nr[a5].k2), lF.nr[a5] = au[a5 - 3], lF.nq.appendChild(lF.nr[a5].k2);
		lF.resize()
	}

	function aQa() {
		var acz, lV = new lW;
		return lV.lX(L(454)), acz = 0 === cr.data.gameMode ? [L(258), L(8)][cr.data.colorsType] : cr.data.numberTeams + " Team" + (1 === cr.data.numberTeams ? "" : "s"), lV.a4n(acz), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(21)
		}).button])), lV
	}

	function acq() {
		var lV = new lW,
			au = (lV.lX(L(399)), [L(7) + ": " + kj.aOq[cr.data.botDifficultyValue], L(526), L(527), L(8)]);
		return lV.a4n(au[cr.data.botDifficultyType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(25)
		}).button])), lV
	}

	function acr() {
		var lV = new lW,
			au = (lV.lX("Spawning"), [L(258), L(259), L(8)]);
		return lV.a4n(au[cr.data.spawningType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(24)
		}).button])), lV
	}
	this.show = function() {
		lE.show(), this.resize(), lE.lK.scrollTop = d7.i.qc[0]
	}, this.eQ = function() {
		d7.i.qc[0] = lE.lK.scrollTop, lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH("🔧 " + L(30), [new ir("⬅️ " + L(4), lI), new ir(L(523), aci)]), ack(), cr.data.canvas || (2 === cr.data.mapType ? cr.data.canvas = aS.bX : 1 === cr.data.mapType ? cr.data.canvas = aS.aF0(aS.aAU(cr.data), 0).bX : (cr.data
		.mapType = 0, cr.data.passableWater = cr.data.passableMountains = 1, cr.data.canvas = aS.aF0(aS.aAU(cr.data), cr.data.mapSeed).bX)), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW,
			gj = (lV.lX(L(441)), cr.data.canvas);
		gj.style.width = "100%", lV.lb({
			ej: gj
		}), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(20)
		}).button])), lR.push(lV)
	}(lR = []), function(lR) {
		var lV = new lW;
		lV.lX(L(346)), lV.lb(new lc({
			go: -1,
			value: cr.data.playerCount
		}, 1, 0, function(ej) {
			var playerCount = aQ.ld(Math.floor(ej.target.value), 1, 512);
			ej.target.value = cr.data.playerCount = playerCount, 1 === cr.data.gameMode && (ej = aV.aW.aAS(cr.data.teamPlayerCount, 0), cr.ff.fg(), aV.aW.aAS(cr.data.teamPlayerCount, 0) !== ej) && acy()
		})), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW;
		lV.lX(L(525)), lV.lY(new lZ({
			la: ["Battle Royale", "Teams"],
			value: cr.data.gameMode
		}, function(go) {
			cr.data.gameMode !== go && (1 === (cr.data.gameMode = go) && (cr.data.colorsData || (cr.data.colorsData = new Uint32Array(1)), cr.data.colorsData[0] = 258049), acy())
		})), lR.push(lV)
	}(lR), lR.push(aQa()), lR.push(acq()), lR.push(acr()), function(lR) {
		var lV = new lW,
			au = (lV.lX(L(483)), [L(484), L(485), L(8)]);
		lV.a4n(au[cr.data.playerNamesType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(23)
		}).button])), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW,
			au = (lV.lX(L(303)), [L(6), L(7) + ": " + cr.data.aIncomeValue, L(8)]);
		lV.a4n(au[cr.data.aIncomeType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(22)
		}).button])), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW,
			au = (lV.lX(L(3)), [L(6), L(7) + ": " + cr.data.tIncomeValue, L(8)]);
		lV.a4n(au[cr.data.tIncomeType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(26)
		}).button])), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW,
			au = (lV.lX(L(461)), [L(6), L(7) + ": " + cr.data.iIncomeValue, L(8)]);
		lV.a4n(au[cr.data.iIncomeType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(27)
		}).button])), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW,
			au = (lV.lX(L(528)), [L(6), L(7) + ": " + cr.data.sResourcesValue, L(8)]);
		lV.a4n(au[cr.data.sResourcesType]), lV.lb(new k0([new ir(L(524), function() {
			d7.dF(28)
		}).button])), lR.push(lV)
	}(lR), function(lR) {
		var lV = new lW;
		lV.lX(L(529)), lV.lb(new k0([new ir(L(530), function() {
			d7.vL(), cr.ff.ts(), d7.i.qc[0] = 0, d7.dF(19)
		}).button])), lV.lb(new k0([new ir(L(531), function() {
			aI9.a2i()
		}).button])), lV.lb(new k0([new ir(L(532), function() {
			return aI9.a2k(), !0
		}).button])), lR.push(lV)
	}(lR), lR))
}

function aIN() {
	var aZ, aJ, ad0, canvas, ck, d8, yj, a7Z, ly, aAC, ad1 = 11 / 12;

	function ad2() {
		var uL = Math.floor(yj * (aZ - 2 * ad0)),
			ad4 = 1 + Math.floor(.0625 * gM.b6),
			ad5 = 1 + Math.floor(.3 * gM.b6),
			di = Math.floor(.55 * gM.b6);
		ck.clearRect(0, 0, aZ, gM.b6), ck.fillStyle = dZ.da, ck.fillRect(0, 0, ad0, gM.b6), ck.fillRect(ad0 + uL, 0, aZ - ad0 - uL, gM.b6), ck.fillStyle = yj < 1 / 3 ? "rgba(" + Math.floor(3 * yj * 130) + ",130,0,0.85)" : yj < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (yj - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (yj - 2 / 3) * 130) + ",0.85)", ck.fillRect(ad0, 0, uL, gM.b6), ck.fillStyle = dZ.dc, ck.fillRect(0, 0, aZ, 1), ck.fillRect(0, gM.b6 - 1, aZ, 1),
			ck.fillRect(0, 0, 1, gM.b6), ck.fillRect(ad0, 0, 1, gM.b6), ck.fillRect(ad0 + uL, 0, 1, gM.b6), ck.fillRect(aZ - ad0, 0, 1, gM.b6), ck.fillRect(aZ - 1, 0, 1, gM.b6), ck.fillRect(Math.floor(.25 * gM.b6) + ad5, Math.floor((gM.b6 - ad4) /
				2), gM.b6 - 2 * ad5, ad4), ck.fillRect(Math.floor(aZ - 1.25 * gM.b6) + ad5, Math.floor((gM.b6 - ad4) / 2), gM.b6 - 2 * ad5 - ad5 % 2, ad4), ck.fillRect(Math.floor(aZ - 1.25 * gM.b6) + Math.floor((gM.b6 - ad4) / 2), ad5, ad4, gM.b6 -
				2 * ad5 - ad5 % 2), a7Z = aV.et.a6p(cr.gJ, gM.iC()), ck.fillText(aV.hf.hg(a7Z) + " (" + aV.hf.mC(100 * yj, +(yj < .1)) + ")", Math.floor(.5 * aZ), di)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		yj = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => gM.aKt(arg1);

	function ad9(xL) {
		return !(1 < xL && 1 === yj || (1 < xL && xL * yj - yj < 1 / 1024 ? xL = (yj + 1 / 1024) / yj : xL < 1 && yj - xL * yj < 1 / 1024 && (xL = (yj - 1 / 1024) / yj), yj = aQ.ld(yj * xL, 1 / 1024, 1), ad2(), 0))
	}

	function adA(jp) {
		return yj !== (yj = aQ.ld((jp - aJ - ad0) / (aZ - 2 * ad0), 1 / 1024, 1)) && (ad2(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		ad2(), bV.bW = !0
	}, this.aK = 0, this.ho = !1, this.a4 = function() {
		d8 = !cr.gH && !cr.cs, aAC = !1, yj = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (r.buffer.data[182].value + 1) / 1024, a7Z = 0, this.ho = !1, this.resize()
	}, this.resize = function() {
		cT.cU.cV() && cy.aZ < .8 * cy.b6 ? (this.b6 = Math.floor(.066 * cy.l7), aZ = cy.aZ - 4 * cz.gap - this.b6) : (aZ = Math.floor((cT.cU.cV() ? .65 : .389) * cy.l7), aZ += 12 - aZ % 12, this.b6 = Math.floor(aZ / 12)), ad0 = Math.floor(3 *
			this.b6 / 2), ly = aV.d1.d2(1, Math.floor(.5 * this.b6)), (canvas = document.createElement("canvas")).width = aZ, __fx.mobileKeybinds.setSize(aZ, this.b6, dO), canvas.height = this.b6, (ck = canvas.getContext("2d", {
			alpha: !0
		})).font = ly, aV.d1.textBaseline(ck, 1), aV.d1.textAlign(ck, 1), this.m0(), ad2()
	}, this.m0 = function() {
		aJ = cT.cU.cV() && cy.aZ < .8 * cy.b6 ? this.b6 + 3 * cz.gap : Math.floor((cy.aZ - aZ) / 2), this.aK = cy.b6 - this.b6 - d0.cS() * cz.gap
	}, this.gW = function() {
		aAC && (aAC = !1, ad2())
	}, this.d8 = function() {
		return !(!d8 || dG.dH && aJ < Math.floor(cz.gap + 5.5 * this.b6))
	}, this.cw = function(cx) {
		return !!this.d8() && aJ + aZ > cy.aZ - cx - cz.gap
	}, this.gN = function() {
		d8 = !cr.cs
	}, this.aTs = function() {
		d8 = !1
	}, this.iC = function() {
		return aQ.ld(Math.floor(1024 * yj + .5) - 1, 0, 1023)
	}, this.aG5 = function(jp, jq) {
		return this.d8() && aJ < jp && jp < aJ + aZ && jq > this.aK
	}, this.dB = function(jp, jq) {
		if (!this.d8()) return !1;
		if (!(__fx.settings.keybindButtons && jq > this.aK - Math.floor(cz.gap / 4) - this.b6 && jq < this.aK - Math.floor(cz.gap / 4) && __fx.mobileKeybinds.click(jp - aJ))) {
			if (!gM.aG5(jp, jq)) return !1;
			dM.a0v = !1, ! function(dS, jp, jq) {
				if (function(jp, jq) {
						return aJ < jp && jp < aJ + ad0 && jq > gM.aK
					}(jp, jq)) return ad9(ad1);
				if (function(jp, jq) {
						return aJ + aZ - ad0 < jp && jp < aJ + aZ && jq > gM.aK
					}(jp, jq)) return ad9(1 / ad1);
				return dS.ho = !0, adA(jp)
			}(this, jp, jq) || (bV.bW = !0)
		}
		return !0
	}, this.aKt = function(ku) {
		0 !== cr.d6 && this.d8() && ad9(ku) && (bV.bW = !0)
	}, this.rG = function(deltaY) {
		var ku;
		return !(0 === deltaY || !this.d8()) && ad9(ku = 0 < deltaY ? (ku = 400 / (400 + deltaY)) < ad1 ? ad1 : ku : 1 / ad1 < (ku = (400 - deltaY) / 400) ? 1 / ad1 : ku)
	}, this.rB = function(jp) {
		return !!this.ho && adA(jp)
	}, this.aKn = function() {
		this.ho = !1
	}, this.ar = function() {
		this.d8() && a7Z !== aV.et.a6p(cr.gJ, this.iC()) && (aAC = !0)
	}, this.cQ = function() {
		this.d8() && (dO.drawImage(canvas, aJ, this.aK), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(dO, aJ, this.aK)
	}
}

function aIM() {
	var aOH, vn, pp, adB, b6, ly, fontSize, adC, adD, aYw, adE, canvas, ck, pq, adF;

	function lQ(a5) {
		return L(0 === a5 ? 533 : 1 === a5 ? 534 : 2 === a5 ? 535 : 536)
	}

	function adL() {
		cr.f0 ? q6 + 4 * cz.gap + b6 + dA.aEZ() > gM.aK ? dO.drawImage(canvas, 2 * cz.gap + dA.aEZ(), q6 + 2 * cz.gap) : dO.drawImage(canvas, cz.gap, q6 + 3 * cz.gap + dA.aEZ()) : dO.drawImage(canvas, cz.gap, q6 + 2 * cz.gap)
	}

	function adG() {
		canvas.width = aOH[0].width + aYw, canvas.height = b6 + aYw, (ck = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aOH[0].width + aYw, b6 + aYw), ck.translate(Math.floor(aYw / 2), Math.floor(aYw / 2)), ck.lineWidth = aYw, ck.fillStyle = 1 === aOH[0].adK ? dZ.aH1 : dZ.f6, adM(), ck.fill(), ck.strokeStyle = 1 === aOH[0].adK ? dZ.pi :
			dZ.dc, adM(), ck.stroke(), aV.d1.textAlign(ck, 1), aV.d1.textBaseline(ck, 1), ck.fillStyle = 1 === aOH[0].adK ? dZ.pi : dZ.dc, ck.font = ly[0], ck.fillText(lQ(aOH[0].adJ), Math.floor(aOH[0].width / 2), Math.floor(.72 * adC[0] * b6)), ck
			.font = ly[1], ck.fillText(aOH[0].v, Math.floor(aOH[0].width / 2), Math.floor((adC[0] + .48 * adC[1]) * b6))
	}

	function adM() {
		ck.beginPath(), ck.moveTo(adE, 0), ck.lineTo(aOH[0].width - adE, 0), ck.lineTo(aOH[0].width, adE), ck.lineTo(aOH[0].width, b6 - adE), ck.lineTo(aOH[0].width - adE, b6), ck.lineTo(adE, b6), ck.lineTo(0, b6 - adE), ck.lineTo(0, adE), ck
			.closePath()
	}
	this.a4 = function() {
		vn = 4, pp = adB = pq = 0, aOH = [], ly = new Array(2), fontSize = new Array(2), (adC = new Array(2))[0] = .3, adC[1] = .7, adD = new Array(4), canvas = document.createElement("canvas"), adF = bV.aw + 2e3, this.resize()
	}, this.resize = function() {
		var a5, aZ;
		for (b6 = Math.floor((cT.cU.cV() ? .062 : .047) * cy.l7), fontSize[0] = Math.floor(.85 * adC[0] * b6), fontSize[1] = Math.floor(.85 * adC[1] * b6), ly[0] = aV.d1.d2(1, fontSize[0]), ly[1] = aV.d1.d2(1, fontSize[1]), a5 = adD.length -
			1; 0 <= a5; a5--) adD[a5] = this.measureText(lQ(a5) + "000", ly[0]);
		if (aYw = Math.floor(1 + .05 * b6), adE = Math.floor(.2 * b6), 0 < aOH.length) {
			for (a5 = aOH.length - 1; 0 <= a5; a5--) aZ = this.measureText(aOH[a5].v + "00", ly[1]), aOH[a5].width = aZ < adD[a5] ? adD[a5] : aZ;
			adG()
		}
	}, this.ar = function() {
		0 !== vn && (4 === vn ? bV.aw > adF && (vn = 0, 1 === cr.d6) && a21.aOw(aS.bJ.bK[aS.bL].name, 3, 1, 9) : (1 === vn ? (0 === pp && (adG(), pp = 1e-4), 1 <= (pp += .002 * (bV.aw - pq)) && (adB = 0, vn = 2, pp = 1), bV.bW = !0) : 2 === vn ?
			((adB += (bV.aw - pq) / 1e3) > aOH[0].a0o || 1 < adB && 1 < aOH.length) && (vn = 3) : 3 === vn && ((pp -= .002 * (bV.aw - pq)) <= 0 && (pp = 0, aOH.shift(), vn = 0 < aOH.length ? 1 : 0), bV.bW = !0), pq = bV.aw))
	}, this.measureText = function(v, ly) {
		return dO.font = ly, Math.floor(dO.measureText(v).width)
	}, this.gE = function(abD, a5) {
		this.aOw(f4.f5[abD], a5, 1, 0 === a5 ? 3 : 7)
	}, this.aOw = function(v, adJ, adK, a0o) {
		var aZ;
		v.length && (aZ = (aZ = this.measureText(v + "00", ly[1])) < adD[adJ] ? adD[adJ] : aZ, aOH.push({
			v: v,
			width: aZ,
			adJ: adJ,
			adK: adK,
			a0o: a0o
		}), 0 === vn) && (pp = 0, vn = 1, pq = bV.aw)
	}, this.cQ = function() {
		0 !== vn && 0 !== pp && (pp < 1 ? (dO.globalAlpha = pp, adL(), dO.globalAlpha = 1) : adL())
	}
}

function aXf() {
	var adN = 0;

	function adR(v, id) {
		console.log(v), adN || (id ? 1 === id ? ew.aOP = L(538) + ": " + v : d7.dF(4, 3, new ol(L(539), v, 1)) : d7.dF(4, 3, new ol("⚠️ " + L(537), v, 1)))
	}
	this.b8 = function(v, adO) {
		var hH, ev;
		return adN = adO, o.p.bH(o.p.bI(o.p.a7y(v))), ew.aOP = "", !! function() {
			if (bG.size < 10) adR("File Too Small");
			else {
				var adT = bG.bM(12),
					a06 = (adT !== eG.rVersion && (a06 = "Incompatible Version   Required: " + eG.rVersion, adR(a06 = (a06 += "   Found: " + adT) + ("   Compatible at " + f.i.eI() + "/" + adT), 1)), bG.bM(12)),
					adU = bG.bM(31);
				if (adU !== bG.size) adR("Size Error: Stated Size " + adU + " Actual Size " + bG.size);
				else if (function(b6, adT) {
						for (var bB = bG.j, u = bG.size, sm = adT, a5 = 3; a5 < u; a5++) sm = sm + bB[a5] & 4095;
						return sm === b6 || (adR("Hash Error: " + sm + " " + b6 + " " + u), !1)
					}(a06, adT)) return 1
			}
			return
		}() && (hH = bG, (ev = cr.data = new a1h).mapType = hH.bM(2), ev.mapProceduralIndex = hH.bM(8), ev.mapRealisticIndex = hH.bM(8), ev.mapSeed = hH.bM(14), ev.mapName = hH.aEI(5), 2 === ev.mapType && hH.aEJ(), ev.passableWater = hH.bM(
			1), ev.passableMountains = hH.bM(1), ev.playerCount = hH.bM(10), ev.humanCount = hH.bM(10), ev.selectedPlayer = hH.bM(9), ev.gameMode = hH.bM(1), ev.playerMode = hH.bM(2), ev.battleRoyaleMode = hH.bM(2), ev.numberTeams = hH.bM(4),
			ev.isZombieMode = hH.bM(1), ev.isContest = hH.bM(1), ev.isReplay = hH.bM(1), ev.elo = hH.aED(2, 14, 2), ev.colorsType = hH.bM(1), ev.colorsPersonalized = hH.bM(1), ev.colorsData = hH.aED(10, 18, 512), ev.selectableColor = hH.bM(
			1), ev.teamPlayerCount = hH.aED(4, 10, 9), ev.neutralBots = hH.bM(1), ev.botDifficultyType = hH.bM(2), ev.botDifficultyValue = hH.bM(4), ev.botDifficultyTeam = hH.aED(4, 4, 9), ev.botDifficultyData = hH.aED(10, 4, 512), ev
			.spawningType = hH.bM(2), ev.spawningSeed = hH.bM(14), ev.spawningData = hH.aED(11, 12, 1024), ev.selectableSpawn = hH.bM(1), ev.playerNamesType = hH.bM(2), ev.playerNamesData = hH.aEG(10, 5, 512), ev.selectableName = hH.bM(1), ev
			.aIncomeType = hH.bM(2), ev.aIncomeValue = hH.bM(8), ev.aIncomeData = hH.aED(10, 8, 512), ev.tIncomeType = hH.bM(2), ev.tIncomeValue = hH.bM(8), ev.tIncomeData = hH.aED(10, 8, 512), ev.iIncomeType = hH.bM(2), ev.iIncomeValue = hH
			.bM(8), ev.iIncomeData = hH.aED(10, 8, 512), ev.sResourcesType = hH.bM(2), ev.sResourcesValue = hH.bM(11), ev.sResourcesData = hH.aED(10, 11, 512), ev.z2 = hH.aED(10, 30, 0), !! function() {
				var hH = bG,
					b9 = hH.bM(5),
					adW = hH.bM(30),
					adX = hH.bM(30);
				if (adW + adX > 8 * hH.size) return void adR("Corrupted File");
				return function(u) {
						var ada = new Uint8Array(u),
							adb = new Uint16Array(u),
							adc = new Uint32Array(u),
							add = new Uint32Array(u);
						tq.z4.z3 = ada, tq.z4.z6 = adb, tq.z4.z8 = adc, tq.z4.z9 = add;
						for (var a5 = 0; a5 < u; a5++) {
							var id = bG.bM(4);
							ada[a5] = id, adb[a5] = bG.bM(9), 0 === id ? adc[a5] = bG.bM(22) : 1 === id ? (adc[a5] = bG.bM(10), add[a5] = bG.bM(10)) : 2 === id ? (adc[a5] = bG.bM(10), add[a5] = bG.bM(9)) : 3 === id ? (adc[a5] = bG.bM(10),
								add[a5] = bG.bM(27)) : 4 === id ? (adc[a5] = bG.bM(10), add[a5] = bG.bM(16)) : 5 === id || 6 === id ? adc[a5] = bG.bM(10) : 7 === id ? adc[a5] = bG.bM(1) : 10 === id && (adc[a5] = bG.bM(20), add[a5] = bG
								.bM(22))
						}
					}(adW),
					function(u, b9) {
						var zB = new Uint8Array(u),
							zA = new Array(u);
						zA.fill(0), tq.z4.zB = zB, tq.z4.zA = zA;
						for (var a5 = 0; a5 < u; a5++) zB[a5] = bG.bM(1), zA[a5] = bG.bM(b9)
					}(adX, b9), 1
			}()) && (bG.go < 8 * bG.size - 13 || bG.go > 8 * bG.size ? (adR("Out Of Bounds Error: " + bG.go + " " + 8 * bG.size), !1) : (tq.z4.a1O = v, 2 !== cr.data.mapType || (adR("Load base64 image...", 2), adO)))
	}, this.a38 = function(a37, adS) {
		var gj = document.createElement("canvas"),
			gq = gj.getContext("2d");
		if (gj.width = a37.width, gj.height = a37.height, gq.drawImage(a37, 0, 0), cr.data.canvas = gj, adN || adS) return cr.d6 ? void 0 : (cr.data.mapType = 2, d7.vL(), void d7.dF(19));
		tq.a1S()
	}
}

function aIj() {
	this.i3 = new aMq, this.et = new aXJ, this.aMr = new ade, this.a1p = new aan, this.oM = new aDk
}

function aIw() {
	this.adf = !1, this.a1E = !1, this.gc = !1, this.adg = [0, 0, 0, 0], this.render = function() {
		var dg, dh, hb, hc;
		this.gc = this.gc || this.a1E, (this.a1E || this.adf && this.gc) && (dg = a15.aKL[0], dh = a15.aKL[1], hb = a15.aKL[2], hc = a15.aKL[3], dg = dg < this.adg[0] ? this.adg[0] : dg, dh = dh < this.adg[1] ? this.adg[1] : dh, hb = hb > this
			.adg[2] ? this.adg[2] : hb, hc = hc > this.adg[3] ? this.adg[3] : hc, this.a1E = !1, this.adf = !1, dg === this.adg[0] && dh === this.adg[1] && hb === this.adg[2] && hc === this.adg[3] ? this.gd() : dg <= hb && dh <= hc && a1z
			.putImageData(a20, 0, 0, dg, dh, hb - dg + 1, hc - dh + 1))
	}, this.gd = function() {
		this.gc && this.adg[2] >= this.adg[0] && this.adg[3] >= this.adg[1] && a1z.putImageData(a20, 0, 0, this.adg[0], this.adg[1], this.adg[2] - this.adg[0] + 1, this.adg[3] - this.adg[1] + 1), this.gc = !1
	}, this.kd = function() {
		this.adg[2] >= this.adg[0] && this.adg[3] >= this.adg[1] && a1z.putImageData(a20, 0, 0, this.adg[0], this.adg[1], this.adg[2] - this.adg[0] + 1, this.adg[3] - this.adg[1] + 1), this.gc = !1
	}, this.a4 = function() {
		var aJ, aK;
		this.adf = !1, this.a1E = !1, this.gc = !1, this.adg[0] = aS.aT, this.adg[1] = aS.aU, this.adg[2] = this.adg[3] = 0;
		loop: for (aJ = 1; aJ < aS.aT - 1; aJ++)
			for (aK = aS.aU - 2; 1 < aK; aK--)
				if (1 === a3N[fK.aC0(aJ, aK) + 2]) {
					this.adg[0] = aJ;
					break loop
				} loop: for (aK = 1; aK < aS.aU - 1; aK++)
			for (aJ = aS.aT - 2; 1 < aJ; aJ--)
				if (1 === a3N[fK.aC0(aJ, aK) + 2]) {
					this.adg[1] = aK;
					break loop
				} loop: for (aJ = aS.aT - 2; 0 < aJ; aJ--)
			for (aK = aS.aU - 2; 1 < aK; aK--)
				if (1 === a3N[fK.aC0(aJ, aK) + 2]) {
					this.adg[2] = aJ;
					break loop
				} loop: for (aK = aS.aU - 2; 0 < aK; aK--)
			for (aJ = aS.aT - 2; 1 < aJ; aJ--)
				if (1 === a3N[fK.aC0(aJ, aK) + 2]) {
					this.adg[3] = aK;
					break loop
				}
	}
}

function a8u() {
	var lE, lF, lG, lR;

	function lI() {
		lM(), 2 !== cr.data.sResourcesType && (cr.data.sResourcesData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		2 === cr.data.sResourcesType && aV.aW.lP(lG.lQ(), cr.data.sResourcesData, 2047)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(528), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(6), L(7), L(8)],
			value: cr.data.sResourcesType
		}, function(go) {
			lM(), 2 !== go || cr.data.sResourcesData || (cr.data.sResourcesData = new Uint16Array(cr.fc)), cr.data.sResourcesType = go, d7.dF(28)
		})), lR.push(lV)
	}(lR = []), function(lR) {
		var lV;
		1 === cr.data.sResourcesType && ((lV = new lW).lX("Value"), lV.lb(new lc({
			go: -1,
			value: cr.data.sResourcesValue
		}, 1, 0, function(ej) {
			var value = aQ.ld(Math.floor(ej.target.value), 0, 2047);
			ej.target.value = cr.data.sResourcesValue = value
		})), lR.push(lV))
	}(lR), function(lR) {
		var lV;
		2 === cr.data.sResourcesType && ((lV = new lW).lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.sResourcesData, 2)), lV.lb(lG), lR.push(lV))
	}(lR), lR))
}

function ac8() {
	this.aMe = 0, this.bL = 0, this.mapSeed = 0, this.aMX = 0, this.aMa = 0, this.aMb = 0, this.aMc = 0, this.aMj = 0, this.aMZ = 0, this.spawningSeed = 0, this.dv = 0, this.aNq = 0, this.aA3 = [], this.aGe = 1048575, this.acC = 0, this.aWh = [{
		bL: 0,
		mapSeed: 0,
		aMX: 0,
		aw: 100,
		aMj: 0
	}, {
		bL: 1,
		mapSeed: 0,
		aMX: 1,
		aw: 200,
		aMj: 0
	}, {
		bL: 2,
		mapSeed: 0,
		aMX: 2,
		aw: 300,
		aMj: 0
	}, {
		bL: 3,
		mapSeed: 0,
		aMX: 3,
		aw: 400,
		aMj: 0
	}, {
		bL: 0,
		mapSeed: 0,
		aMX: 9,
		aw: 500,
		aMj: 0
	}, {
		bL: 1,
		mapSeed: 0,
		aMX: 10,
		aw: 600,
		aMj: 0
	}, {
		bL: 2,
		mapSeed: 0,
		aMX: 8,
		aw: 700,
		aMj: 0
	}, {
		bL: 3,
		mapSeed: 0,
		aMX: 3,
		aw: 800,
		aMj: 0
	}]
}

function aJ1() {
	this.adh = new aVn
}

function a8o() {
	var lE, lF, lG, aFC;

	function lI() {
		lM(), d7.lN()[19] = null, d7.lO()
	}

	function adi() {
		lM(), d7.dF(21)
	}

	function lM() {
		1 === cr.data.gameMode ? cr.ff.fg() : 0 === cr.data.gameMode && 1 === cr.data.colorsType && aV.aW.lP(lG.lQ(), cr.data.colorsData, 262143)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, aFC = [new ir("⬅️ " + L(4), lI)], 1 === cr.data.gameMode && aFC.push(new ir(L(540), adi, 1, 1)), lE = new lH(L(454), aFC), lF = new lJ(lE.lK, (aFC = [], 0 === cr.data.gameMode ? (function(lR) {
		var lV = new lW;
		lV.lX(L(5)), lV.lY(new lZ({
			la: [L(258), L(8)],
			value: cr.data.colorsType
		}, function(go) {
			lM(), cr.data.colorsType = go, 1 !== cr.data.colorsType || cr.data.colorsData && cr.data.colorsData.length === cr.fc || (cr.data.colorsData = new Uint32Array(cr.fc)), d7.dF(21)
		})), lR.push(lV)
	}(aFC), 1 === cr.data.colorsType && function(lR) {
		var lV = new lW;
		lV.lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.colorsData, 1)), lV.lb(lG), lR.push(lV)
	}(aFC)) : (cr.ff.fg(), aFC.push(function() {
		var lV = new lW;
		lV.lX(L(346));
		for (var a5 = 0; a5 < fF.t6.length; a5++) {
			var b4 = (a5 + 1) % fF.t6.length,
				ej = lV.a4n((0 == b4 ? "" : "Team ") + fF.t6[b4]);
			a5 && (ej.style.marginTop = "0.5em"), lV.lb(new lc({
				go: -1,
				value: cr.data.teamPlayerCount[b4]
			}, 1, 0, function(ej) {
				lE.li[1].j2(0);
				var playerCount = aQ.ld(Math.floor(ej.target.value), 0, 512);
				ej.target.value = playerCount, cr.data.teamPlayerCount[ej.target.adk] = playerCount
			})).ej.adk = b4
		}
		return lV
	}()), function(lR) {
		for (var lV = new lW, la = (lV.lX(L(541)), []), a5 = 0; a5 < fF.t6.length; a5++) {
			var b4 = (a5 + 1) % fF.t6.length;
			la.push(fF.t6[b4])
		}
		cr.data.colorsData || (cr.data.colorsData = new Uint32Array(1));
		lV.lY(new lZ({
			la: la,
			value: (cr.data.colorsData[0] % 16 + fF.t6.length - 1) % fF.t6.length
		}, function(go) {
			var go = (go + 1) % fF.t6.length,
				a8N = fF.gz[go],
				a8N = (a8N[0] >> 2 << 12) + (a8N[1] >> 2 << 6) + (a8N[2] >> 2);
			cr.data.colorsData[0] = a8N - (15 & a8N) + go
		})), lR.push(lV)
	}(aFC)), aFC))
}

function ti() {
	var zz, adn, acE = document.createElement("div"),
		adl = document.createElement("div"),
		adm = document.createElement("div"),
		abL = document.createElement("div"),
		aFC = [],
		ne = [L(542), L(543), L(544), L(545), L(546), L(547), L(548), L(549)],
		ado = [1, 2, 3, 0, 9, 10, 11, 13];

	function adp(a5) {
		d7.dF(8, 0, new tt(21, {
			cY: ado[a5],
			ai: 0,
			al: 10
		}))
	}
	this.show = function() {
			this.pE(d7.i.a2W), document.body.appendChild(acE)
		}, this.eQ = function() {
			d7.removeChild(document.body, acE)
		}, this.pE = function(a2W) {
			for (var adq = [3, 0, 1, 2, 4, 5, 6, 7], a5 = 0; a5 < aFC.length; a5++) {
				var aZ = a2W[a5];
				zz[adq[a5]][1].p2.textContent = aZ || ""
			}
		}, this.resize = function() {
			var a5, mX = cz.gap,
				b6 = aV.d1.aBD(.085),
				aZ = Math.min(4 * b6, cy.aZ - 2 * mX),
				u = aFC.length;
			for (aV.d1.u2(acE, mX, cy.b6 - mX - b6, aZ, b6), aV.d1.k4(acE), aV.d1.k4(adl, 6), a5 = 0; a5 < u - 1; a5++) aV.d1.k4(aFC[a5].button, 6);
			for (a5 = 0; a5 < u; a5++) zz[a5][0].resize(), zz[a5][1].resize();
			for (aFC[0].aJ = 0, aFC[0].button.style.left = aV.d1.io(aFC[0].aJ), aFC[0].button.style.width = aV.d1.aE3(1.7 * b6), a5 = 1; a5 < u; a5++) aFC[a5].aJ = aFC[a5 - 1].aJ + aFC[a5 - 1].button.offsetWidth, aFC[a5].button.style.left = aV.d1.io(
				aFC[a5].aJ);
			if (!adn) {
				if (!l5.l6()) return;
				(adn = l5.get(14)).style.width = "24%", adn.style.position = "absolute", adl.appendChild(adn)
			}
			adn.style.left = aV.d1.io(0), adn.style.top = "7%", adm.aEA && (adm.scrollLeft = adm.aEA)
		}, acE.style.position = "absolute", adl.style.width = "25%", adl.style.height = "100%", adl.style.backgroundColor = dZ.da, adm.style.position = "absolute", adm.style.width = "75%", adm.style.height = "100%", adm.style.backgroundColor = dZ.da,
		adm.style.top = adm.style.right = aV.d1.io(0), aV.d1.aE9(adm), abL.style.height = abL.style.maxHeight = "100%", aFC.push(new ir("", function() {
			adp(0)
		}, dZ.aHM)), aFC.push(new ir("", function() {
			adp(1)
		}, dZ.tl)), aFC.push(new ir("", function() {
			adp(2)
		}, dZ.a5R)), aFC.push(new ir("", function() {
			adp(3)
		}, dZ.aHD)), aFC.push(new ir("", function() {
			adp(4)
		}, dZ.aHc)), aFC.push(new ir("", function() {
			adp(5)
		}, dZ.aHa)), aFC.push(new ir("", function() {
			adp(6)
		}, dZ.aHc)), aFC.push(new ir("", function() {
			adp(7)
		}, dZ.pi)), zz = new Array(aFC.length);
	for (var a5 = 0; a5 < aFC.length; a5++) aFC[a5].button.style.position = "absolute", zz[a5] = [new aNC(ne[a5], aFC[a5].button, .25, .45), new aNC("", aFC[a5].button, .53, .84, 1)], aFC[a5].button.style.height = aFC[a5].button.style.maxHeight =
		"100%", aFC[a5].button.top = aV.d1.io(0), abL.appendChild(aFC[a5].button);
	adm.appendChild(abL), acE.appendChild(adl), acE.appendChild(adm)
}

function aIp() {
	this.au = new Array(4), this.adr = new Uint16Array(2), this.aDR = new Uint16Array(2), this.aUd = new Int32Array(2), this.mt = new Uint32Array(2), this.ads = new Uint32Array(2), this.gy = new Uint8Array(4), this.aaU = new Uint8Array(4), this.aRU =
		new Uint32Array(4), this.adt = new Uint32Array(5), this.a6w = new Uint32Array(8), this.iP = new Uint32Array(8), this.aDQ = new Uint16Array(16), this.aBi = new Uint16Array(512), this.aBg = new Uint16Array(512), this.aBh = new Uint16Array(512),
		this.a7n = new Uint16Array(0), this.a4 = function() {
			var u = aS.aT * aS.aU;
			this.a7n.length !== u && (this.a7n = new Uint16Array(u))
		}, this.adu = function(au, z5) {
			return au[0] = z5, au
		}, this.adv = function(au, z5, z7) {
			return au[0] = z5, au[1] = z7, au
		}, this.adw = function(au, z5, z7, kw) {
			return au[0] = z5, au[1] = z7, au[2] = kw, au
		}, this.adx = function(au, z5, z7, kw, ady) {
			return au[0] = z5, au[1] = z7, au[2] = kw, au[3] = ady, au
		}
}

function aQl() {
	this.ar = function(player) {
		return am.c6.a7f(player, function(player) {
			var u = fN.fO.fP;
			if (0 === u) return -1;
			for (var bA = Math.min(u, fN.performance.aXv ? u : 10), buffer = fN.fO.buffer, y7 = aQ.aR(fj.random() * u, fj.value(100)), ej = y7 + bA, jp = fj.aPx(f4.fw[player], f4.fy[player]), jq = fj.aPx(f4.fx[player], f4.fz[player]),
					a8S = -1, h3 = aj.aTx(0, 0, aS.aT, aS.aU), a5 = y7; a5 < ej; a5++) {
				var dp = a5 % u,
					ae0 = aj.aRY(jp, jq, buffer[dp]);
				ae0 < h3 && (h3 = ae0, a8S = dp)
			}
			return -1 !== a8S ? function(fM, jp, jq) {
				var hq = aj.fQ(fM),
					hs = aj.fR(fM),
					h1 = jp - hq,
					h2 = jq - hs;
				Math.abs(h1) >= Math.abs(h2) ? (h2 = 0, h1 = Math.sign(h1)) : (h1 = 0, h2 = Math.sign(h2));
				h1 === h2 && (h1 = 1);
				for (;;) {
					if (hq += h1, hs += h2, !aj.aRZ(hq, hs)) break;
					if (fM = aj.hu(hq, hs), fK.jg(aj.i5(fM))) return fM
				}
				return -1
			}(buffer[a8S], jp, jq) : -1
		}(player))
	}
}

function ade() {
	this.i4 = function(player, fM) {
		aV.et.hm(0) && aV.et.hn(player) && aj.aTy(fM) && (tq.z4.aDf(0, player, fM), cr.ga.gE(player, fM))
	}, this.iG = function(player, yj, oK) {
		aV.et.hm(1) && aV.et.hn(player) && aV.et.a6b(player, oK) && aV.et.a4M(player, yj, 12, 0) && aV.et.a6v(player, oK) && ((oK = iH.oO(player, gx.a6w[0])) || iH.oP(player)) && (f4.g7[player]++, tq.z4.aDf(1, player, yj, gx.a6w[0]), fN.aQp.aWN(
			player, oK)) && (aV.et.a4O(player), gK.abo(player, yj), fN.aQp.aWP(player))
	}, this.a6l = function(player, yj, a6m) {
		aV.et.hm(1) && aV.et.hn(player) && cr.f0 && aV.et.a6b(player, a6m) && aV.et.a6x(player, a6m) && aV.et.a6k(player, aV.et.a6p(player, yj), a6m) && a1m.gE(a6m, gx.mt[0]) && (tq.z4.aDf(2, player, yj, a6m), m9.aDm(player, a6m))
	}, this.iO = function(player, yj, aMv) {
		gx.iP[1] = 7 & aMv;
		var fM = aMv >> 3;
		aV.et.hm(1) && aV.et.hn(player) && aj.aTy(fM) && am.cC.yd(player) && am.cC.aOC(fM) && aV.et.a4M(player, yj, 32, 0) && am.c6.yV(player, fM, 1) && (gK.abp(player), tq.z4.aDf(3, player, yj, aMv), aV.et.a4O(player), aI8.adh.iO(player), am.i
			.aa(player))
	}, this.iR = function(player, yj, o4) {
		849 === yj ? this.aLT(player, o4) : aV.et.hm(1) && aV.et.hn(player) && aV.et.a4M(player, yj, 32, 0) && am.cK.yH(player, o4) && (gK.abp(player), tq.z4.aDf(4, player, yj, o4), aV.et.a4O(player), aI8.adh.iR(player), am.i.aa(player))
	}, this.aLT = function(player, o4) {
		aV.et.hm(1) && aV.et.hn(player) && am.cO.ar(player, o4) && tq.z4.aDf(4, player, 849, o4)
	}, this.aLS = function(player, oK) {
		513 === oK ? this.iY(player) : aV.et.hm(1) && aV.et.hn(player) && (oK = Math.min(oK, cr.fc), iH.oO(player, oK)) && (tq.z4.aDf(5, player, oK), iH.abC(player, oK))
	}, this.aMz = function(player, vm) {
		(aV.et.hm(1) || aV.et.hm(2)) && aV.et.hn(player) && (vm = aQ.ld(vm, 0, 1023), tq.z4.aDf(6, player, vm), fm.fn(player, 0, vm))
	}, this.ib = function(player, aN1) {
		iZ.ia(player) && (tq.z4.aDf(7, player, aN1), iZ.abi(player, aN1))
	}, this.aFW = function(player) {
		(aV.et.hm(0) || aV.et.hm(1)) && aV.et.hn(player) && dG.aFV(player) && (tq.z4.aDf(8, player), aI5.aFW(player))
	}, this.aWv = function(player) {
		tq.z4.aDf(9, player), aI5.aWv(player)
	}, this.iY = function(player) {
		iZ.ic(player) && (tq.z4.aDf(5, player, 513), iZ.iY(player))
	}, this.iB = function(player, yj, fM, oK) {
		aV.et.hm(1) && aV.et.hn(player) && aV.et.a6b(player, oK) && aV.et.a6v(player, oK) && aj.aTy(fM) && i7.i8.aRS(player, fM) && (iH.oO(player, gx.a6w[0]) || iH.oP(player)) && (tq.z4.aDf(10, player, (yj << 10) + gx.a6w[0], fM), oK = aV.et.a6t(
			player, yj), f4.g3[player].push(gx.aRU[0]), iH.gE(player, oK, gx.a6w[0]), oQ.oR(player, !0), gK.abq(player))
	}
}

function aIg() {
	this.ae2 = new Uint32Array(cr.fc), this.a4 = function() {
		10 === cr.fW && this.ae2.fill(0)
	}, this.ar = function() {
		10 === cr.fW && this.cI()
	}, this.cI = function() {
		for (var bB, target, mT, ae2 = this.ae2, ay = f8.fB, a6f = f4.g2, a5 = f8.f9 - 1; 0 <= a5; a5--)(bB = ay[a5]) >= cr.fb || (target = Math.max(aQ.aR(a6f[bB], 4), 2048), mT = Math.max(m9.mU(bB), 100), ae2[bB] += aQ.aR(mT * target, 1e4), ae2[
			bB] > target && (ae2[bB] = target))
	}, this.a6j = function(player, hF) {
		return 10 !== cr.fW || aV.et.jy(player) ? hF : Math.min(this.ae2[player], hF)
	}, this.a6u = function(player, hF) {
		10 !== cr.fW || aV.et.jy(player) || (this.ae2[player] -= hF)
	}
}

function aIv() {
	this.aO2 = 0, this.aO3 = 0, this.aNy = 0, this.aNz = 0, this.aO0 = 0, this.aO1 = 0, this.aKL = [0, 0, 0, 0], this.a16 = function() {
		this.aO2 = dM.a2E(), this.aO3 = dM.cv(), this.aNy = -this.aO2, this.aNz = -this.aO3, this.aO0 = cy.aZ / hY, this.aO1 = cy.b6 / hY, this.aKL[0] = Math.floor(this.aNy), this.aKL[1] = Math.floor(this.aNz), this.aKL[2] = Math.floor(this.aKL[
			0] + this.aO0 + 1), this.aKL[3] = Math.floor(this.aKL[1] + this.aO1 + 1), gb.adf = !0
	}
}

function aIG() {
	this.a4 = function() {
		if (0 === cr.data.sResourcesType) {
			for (var mx = cr.fb, g2 = f4.g2, a5 = 0; a5 < mx; a5++) g2[a5] = 512;
			var my = cr.fe,
				aUq = kj.aUq,
				hF = kj.hF;
			for (a5 = mx; a5 < my; a5++) g2[a5] = aUq[hF[a5]]
		} else(1 === cr.data.sResourcesType ? function() {
			for (var u = cr.fe, g2 = f4.g2, sResourcesValue = cr.data.sResourcesValue, a5 = 0; a5 < u; a5++) g2[a5] = sResourcesValue
		} : function() {
			for (var u = cr.fe, g2 = f4.g2, sResourcesData = cr.data.sResourcesData, a5 = 0; a5 < u; a5++) g2[a5] = sResourcesData[a5]
		})();
		gK.gL[8] = f4.g2[cr.gJ]
	}
}

function le(ae6, ae7, ae8, aPE) {
	var a1G = document.createElement("textarea"),
		ae9 = (this.ej = a1G, !0);

	function aeA() {
		a1G.select(), document.execCommand("copy")
	}
	this.resize = function() {
			ae7 && aV.d1.k4(a1G, 5)
		}, this.lf = function(a2) {
			a1G.value = a2
		}, this.lQ = function() {
			return a1G.value
		}, this.a1I = function() {
			a1G.select()
		}, this.clear = function() {
			a1G.value = ""
		}, this.a1J = function() {
			ae9 && navigator.clipboard ? (a1G.select(), navigator.clipboard.writeText(a1G.value).catch(function() {
				ae9 = !1, aeA()
			})) : aeA()
		}, a1G.setAttribute("id", "textArea" + d7.i.a2Z++), a1G.setAttribute("autocomplete", "off"), ae6 && a1G.setAttribute("placeholder", ae6), a1G.style.top = "0", a1G.style.left = "0", a1G.style.width = "100%", a1G.style.height = "100%", a1G
		.style.userSelect = "none", a1G.style.outline = "none", a1G.style.resize = "none", a1G.style.border = "none", a1G.style.color = dZ.dc, a1G.style.backgroundColor = dZ.aFd, aPE ? (a1G.style.fontSize = "1em", a1G.rows = 6, a1G.style.padding =
			"0.25em") : (a1G.style.padding = "0.45em", a1G.style.fontSize = "1.2em"), ae8 && a1G.addEventListener("input", function(ej) {
			ae8(ej)
		}), a1G.addEventListener("focus", function() {
			cy.aFe++
		}), a1G.addEventListener("blur", function() {
			cy.aFe--
		})
}

function aeB() {
	var aWm, aeC;

	function aeG() {
		(aWm = new WebSocket("wss://territorial.io/s52/")).onopen = aeH, aWm.onclose = function() {
			aeI()
		}
	}

	function aeH() {
		if (aWm && aWm.readyState === aWm.OPEN) {
			var aZ = new aIl;
			aZ.d(1608), aZ.e(1, 0), aZ.e(6, 7), aZ.e(2, cT ? cT.id : 3), aZ.e(1, eG.so ? 1 : 0), aZ.e(1, eG.sp ? 1 : 0), aZ.e(1, eG ? eG.aJ9 : 0);
			for (var a5 = 0; a5 < aeC.length && a5 < 228; a5++) aZ.e(7, aeC.charCodeAt(a5) % 128);
			aWm.send(aZ.j), aeI()
		}
	}

	function aeI() {
		aWm && (aWm.onclose = null, aWm.onopen = null, aWm = null)
	}
	window.addEventListener("error", function aeD(ej) {
		aeC = "";
		try {
			var aeE = function(ej) {
				if (!ej.error) return 0;
				var stack = ej.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, a9h = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a9h.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(ej);
			return 0 === aeE || ej.lineno <= 3 ? void console.log("Error: External Code | " + aeE) : (window.removeEventListener("error", aeD), aeC = ej.lineno + " " + ej.colno + "|" + aeE, __fx.reportError(ej, aeC), alert("Error:\n" + ej
				.filename + " " + ej.lineno + " " + ej.colno + " " + ej.message))
		} catch (ej) {
			aeC = "SE|" + aeC + "|" + ej, console.log(aeC), alert(aeC)
		}
		aeG()
	})
}

function aIs() {
	this.id = 0, this.oe = 0, this.oW = null, this.oX = null, this.aZX = null, this.oY = null, this.cU = new oS, this.a4 = function() {
		var self, oe;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (oe = Android.getVersion()) < 12 || (self.oe = oe, self.id = 1, self.oX = Android),
			function(self) {
				var oe;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aZX = mwIOSdataX, self.oY = window.webkit.messageHandlers.iosCommandA, oe = self
					.aZX.version, self.oe = oe ? Number(oe) : 0)
			}(this),
			function(self) {
				var oW;
				try {
					if (!(oW = window.localStorage)) return;
					oW.setItem("tls7", "1"), oW.removeItem("tls7")
				} catch (error) {
					return
				}
				self.oW = oW
			}(this)
	}
}

function aII() {
	var aFC, aJ, aK, aeM, aeN, aeO, aw, aeP, aeQ, aeR, aeS, gap, zoom, aXN, aeT;

	function aec(jp, jq, gt) {
		fK.o9(gt) || -1 === (jp = am.cI.aB0(jp, jq)) ? ew.aOn(gt) : ew.aOr(jp)
	}

	function aea(aeP) {
		for (var a5 = aXN.length - 1; 0 <= a5; a5--)
			if (aXN[a5] === aeP) return 1
	}

	function aeY(gm) {
		var a5, u;
		if (-1 !== gm)
			for (u = aFC.length, a5 = 0; a5 < u; a5++)
				if (aFC[a5].d8 && aFC[a5].aJ + 1 === gm % 4 && aFC[a5].aK + 1 === gm >> 2) return a5;
		return -1
	}

	function aeW(jp, jq) {
		var mX = gap / 2;
		return jp < aJ - aeM - 3 * mX || aJ + 3 * aeM + 5 * mX < jp || jq < aK - aeM - 3 * mX || aK + 2 * aeM + 3 * mX < jq ? -1 : 4 * (jq < aK - mX ? 0 : jq < aK + aeM + mX ? 1 : 2) + (jp < aJ - mX ? 0 : jp < aJ + aeM + mX ? 1 : jp < aJ + 2 * aeM +
			3 * mX ? 2 : 3)
	}
	this.tS = function() {
		var a5, av, aeV = [dZ.vi, dZ.aHK, dZ.vj, dZ.aHW, dZ.aHQ];
		for (aFC = new Array(10), a5 = 0; a5 < 10; a5++) aFC[a5] = {
			id: a5,
			d8: !1,
			a8S: 0,
			canvas: [],
			aJ: 0,
			aK: 0
		};
		for (aFC[0].colors = [0, 1, 2, 3], aFC[0].aJ = 0, aFC[0].aK = 0, aFC[1].colors = [1, 4], aFC[1].aJ = 1, aFC[1].aK = 0, aFC[2].colors = [0, 1], aFC[2].aJ = -1, aFC[2].aK = 0, aFC[3].colors = [0], aFC[3].aJ = 0, aFC[3].aK = 0, aFC[4]
			.colors = [0, 2], aFC[4].aJ = 1, aFC[4].aK = 1, aFC[5].colors = [3], aFC[5].aJ = 0, aFC[5].aK = -1, aFC[6].id = 20, aFC[6].colors = [0], aFC[6].aJ = 1, aFC[6].aK = -1, aFC[7].id = 21, aFC[7].colors = [0], aFC[7].aJ = 0, aFC[7].aK = 1,
			aFC[8].id = 16, aFC[8].colors = [0], aFC[8].aJ = 0, aFC[8].aK = 0, aFC[9].id = 10, aFC[9].colors = [4], aFC[9].aJ = 2, aFC[9].aK = 0, a5 = 0; a5 < 10; a5++)
			for (av = 0; av < aFC[a5].colors.length; av++) aFC[a5].canvas.push(function(id, rL) {
				if (id < 20) return aV.canvas.rJ(l5.get(3), id, rL);
				var rL = l5.get(3).height,
					gj = aV.d1.bN(rL, rL),
					gq = aV.d1.getContext(gj);
				20 === id ? gq.drawImage(l5.get(18), 0, 0) : 21 === id && fo.bb.vu(fo.fp.fq + fo.fp.uv, gq, 0, 0, rL);
				return gj
			}(aFC[a5].id, aeV[aFC[a5].colors[av]]))
	}, this.xq = function() {
		return aFC
	}, this.a4 = function() {
		aXN = [], aJ = aK = aw = 0, aeN = aeO = -1e3, this.resize()
	}, this.resize = function() {
		aeM = Math.floor((cT.cU.cV() ? .075 : .0468) * cy.l7), zoom = aeM / l5.get(3).height, gap = Math.floor(aeM / 3)
	}, this.aKj = function(jp, jq) {
		return !!this.d8() && (bV.bW = !0, !!fo.bb.dB(jp, jq, aeQ) || (jp = function(jp, jq) {
			aeO = aeN = -1e3;
			var aeX = aeY(aeW(jp, jq));
			if (-1 === aeX) return 0;
			if (1 !== aFC[aeX].colors[aFC[aeX].a8S])
				if (5 === aeX) {
					if (! function() {
							var kG = performance.now();
							aeT + 4e3 < kG && (aXN = []);
							aeT = kG
						}(), aea(aeP)) return 1;
					aXN.push(aeP), 16 < aXN.length && aXN.shift()
				} else if (6 === aeX) {
				for (var a5 = aXN.length - 1; 0 <= a5; a5--) 0 === f4.fv[aXN[a5]] && aXN.splice(a5, 1);
				0 < aXN.length && (a25.ax(1, aXN, !0) && i2.et.aXM(aXN, aeP), aXN = [])
			} else if (2 === aeX) a1m.iQ(aeP) && i2.i3.aDm(gM.iC(), aeP);
			else if (3 === aeX) cr.gH && i2.i3.i4(aeR);
			else if (0 === aeX)
				if (0 === aFC[0].a8S) {
					if (cr.a1a && gO.mE() < 350) return 1;
					a1w.aFX(4), i2.i3.iG(gM.iC(), aeP)
				} else iJ.iK(aeP, gM.iC());
			else if (1 === aeX) i2.i3.iO(gM.iC(), aeR);
			else if (9 === aeX) i2.i3.iR(gM.iC());
			else {
				if (7 === aeX) return a1w.aFX(0), fo.bb.show(jp, jq), 2;
				if (4 === aeX) a25.ax(0, [aeP], !0) && i2.et.aOe(aeP);
				else {
					if (8 !== aeX) return 0;
					i2.i3.iB(gM.iC(), aeS, aeP)
				}
			}
			return 1
		}(jp, jq), this.eQ(), 2 === jp && (fo.bb.d8 = !0), 0 < jp))
	}, this.aKl = function(jp, jq) {
		this.d8() || (aeN = jp, aeO = jq, aw = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = aj.hr(mouseX),
			coordY = aj.ht(mouseY),
			point = aj.i5(aj.hu(coordX, coordY));
		aj.hv(coordX, coordY) && aec(mouseX, mouseY, point)
	}, this.click = function(jp, jq, aKq) {
		var hq = aj.hr(jp),
			hs = aj.ht(jq),
			fM = aj.hu(hq, hs),
			gt = aj.i5(fM),
			aeb = (cT.cU.cV() ? .025 : .0144) * cy.l7,
			kG = performance.now();
		return !(Math.abs(jp - aeN) > aeb || Math.abs(jq - aeO) > aeb || aw + 500 < kG || (aw = kG, jC.jD() && (jC.hi = jp, jC.hj = jq, a26.ar(1), a27.ar(1)), !aj.hv(hq, hs))) && (aKq ? (aec(jp, jq, gt), !1) : dG.dH || this.d8() || !aV.et.hn(cr
			.gJ) || cr.cs ? (this.eQ(), !1) : (cr.gH ? 0 <= (aeR = i0.i1(fM)) && (aFC[3].d8 = !0) : 2 === cr.d6 ? fK.ii(gt) && (aeP = fK.iA(gt), aV.et.jy(aeP) || (aFC[0].d8 = !0, aFC[0].a8S = 1, aFC[7].d8 = !0)) : (am.cK.iQ(cr.gJ, fM) &&
			(aFC[0].d8 = !0, aFC[0].a8S = 1, aFC[1].d8 = !0, aFC[1].a8S = 0, aFC[9].d8 = !0, aFC[9].a8S = 0), am.cE.iN(cr.gJ, fM) && (aFC[0].d8 = !0, aFC[0].a8S = 1, aFC[1].d8 = !0, aFC[1].a8S = 1, aeR = gx.iP[7]), fK.i6(gt) ? (aeS =
				i7.i8.i9(gt)) && (aeb = aj.i5(aeS), aFC[8].d8 = !0, aeP = fK.fL(aeb) ? cr.fc : fK.iA(aeb)) : (fK.pm(cr.gJ, gt) && (aeQ = cr.gJ, aFC[0].d8 = !0, aFC[0].a8S = 1, aFC[7].d8 = !0), -1 !== (kG = i0.iD(fM)) && (fK.fL(kG <<
				2) ? (aeP = cr.fc, iE.iF(cr.gJ) ? (aFC[0].d8 = !0, aFC[0].a8S = 0) : iH.iI(cr.gJ) && (aFC[0].d8 = !0, aFC[0].a8S = 3)) : (aeP = fK.iA(kG << 2), aFC[0].a8S = 1, aFC[5].d8 = function(aeP) {
				return !aV.et.jy(aeP) && !aea(aeP) && a25.ax(1, [aeP], !1)
			}(aeP), aFC[7].d8 || aV.et.jy(aeP) || (aeQ = aeP, aFC[7].d8 = !0), aFC[4].d8 = !aV.et.jy(aeP) && !fm.xy(aeP) && a25.ax(0, [aeP], !1), aFC[6].d8 = function(aeP) {
				if (0 === aXN.length) return !1;
				if (performance.now() > aeT + 4e3) return !(aXN = []);
				return !aea(aeP) && ! function(aeP) {
					var a5;
					if (cr.f0)
						for (a5 = aXN.length - 1; 0 <= a5; a5--)
							if (!iE.iL(aeP, aXN[a5])) return 1;
					return
				}(aeP)
			}(aeP), iE.iL(aeP, cr.gJ) ? (iE.iM(cr.gJ, aeP) ? (aFC[0].a8S = 0, aFC[0].d8 = !0) : iH.iI(cr.gJ) && (aFC[0].a8S = 3, aFC[0].d8 = !0), aFC[0].d8 = this.aeh()) : (aFC[2].d8 = !0, a1m.iQ(aeP) ? aFC[2].a8S = 0 :
				aFC[2].a8S = 1, aFC[0].d8 = !0))))), this.aed(jp, jq)))
	}, this.aed = function(jp, jq) {
		return aJ = jp - Math.floor(aeM / 2), aK = jq - Math.floor(aeM / 2), !!this.d8()
	}, this.rB = function(jp, jq) {
		return !!this.d8() && (fo.bb.d8 ? !fo.bb.r5(jp, jq) && (fo.bb.d8 = !1, bV.bW = !0) : function(dS, jp, jq) {
			jp = aeW(jp, jq);
			if (0 <= aeY(jp)) return !1;
			if ((1 === jp || 6 === jp) && 0 <= aeY(2)) return !1;
			if ((6 === jp || 9 === jp) && 0 <= aeY(10)) return !1;
			return dS.eQ(), bV.bW = !0
		}(this, jp, jq))
	}, this.eQ = function() {
		for (var a5 = aFC.length - 1; 0 <= a5; a5--) aFC[a5].d8 = !1, aFC[a5].a8S = 0;
		fo.bb.d8 = !1
	}, this.d8 = function() {
		return this.aeh() || fo.bb.d8
	}, this.aeh = function() {
		for (var u = aFC.length, a5 = 0; a5 < u; a5++)
			if (aFC[a5].d8) return !0;
		return !1
	}, this.cQ = function() {
		if (this.d8())
			if (fo.bb.d8) fo.bb.cQ();
			else {
				var a5, gq = dO,
					av = aFC,
					u = av.length,
					ael = (aeM + gap) / zoom;
				for (gq.imageSmoothingEnabled = !0, gq.setTransform(zoom, 0, 0, zoom, aJ, aK), a5 = 0; a5 < u; a5++) av[a5].d8 && dO.drawImage(av[a5].canvas[av[a5].a8S], av[a5].aJ * ael, av[a5].aK * ael);
				gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a8s() {
	var lE, lF, lG;

	function lI() {
		lM(), 3 !== cr.data.botDifficultyType || aV.aW.a9c(cr.data.botDifficultyData) || (cr.data.botDifficultyType = 0), 3 !== cr.data.botDifficultyType && (cr.data.botDifficultyData = null), d7.lN()[19] = null, d7.lO()
	}

	function lM() {
		3 === cr.data.botDifficultyType && aV.aW.lP(lG.lQ(), cr.data.botDifficultyData, kj.aOq.length - 1)
	}

	function aem(lR, go) {
		var lV = new lW,
			value = (lV.lX(go < 0 ? L(399) : L(340) + " " + fF.t6[go % 9]), 0 <= go && (lV.a4n(L(346) + ": " + cr.data.teamPlayerCount[go]).style.marginBottom = "1em"), go < 0 ? cr.data.botDifficultyValue : cr.data.botDifficultyTeam[go]);
		lV.lY(new lZ({
			la: kj.aOq,
			value: value
		}, function(b4) {
			go < 0 ? cr.data.botDifficultyValue = b4 : cr.data.botDifficultyTeam[go] = b4
		})), lR.push(lV)
	}
	this.show = function() {
		lE.show(), this.resize()
	}, this.eQ = function() {
		lE.eQ()
	}, this.resize = function() {
		lE.resize(), lF.resize()
	}, this.lh = function(jA) {
		2 === jA && lE.li[0].iy()
	}, lE = new lH(L(399), [new ir("⬅️ " + L(4), lI)]), lF = new lJ(lE.lK, function() {
		var lR = [];
		if (function(lR) {
				var lV = new lW,
					la = (lV.lX(L(5)), [L(7), L(526), L(527), L(8)]),
					value = cr.data.botDifficultyType;
				0 === cr.data.gameMode && (value = Math.min(value, 2), la.splice(2, 1));
				lV.lY(new lZ({
					la: la,
					value: value
				}, function(go) {
					lM(), cr.data.botDifficultyType = go, 0 === cr.data.gameMode && 2 === go && (cr.data.botDifficultyType = 3), 3 !== cr.data.botDifficultyType || cr.data.botDifficultyData || (cr.data.botDifficultyData =
						new Uint8Array(cr.fc)), 2 !== cr.data.botDifficultyType || cr.data.botDifficultyTeam || (cr.data.botDifficultyTeam = new Uint8Array(9)), d7.dF(25)
				})), lR.push(lV)
			}(lR), 0 === cr.data.botDifficultyType) aem(lR, -1);
		else if (2 === cr.data.botDifficultyType)
			for (var a5 = 0; a5 < cr.data.teamPlayerCount.length; a5++) cr.data.teamPlayerCount[a5] && aem(lR, a5);
		else 3 === cr.data.botDifficultyType && ! function(lR) {
			var lV = new lW;
			lV.lX("Data"), (lG = new le(0, 1, 0, 1)).lf(aV.hf.lg(cr.data.botDifficultyData, 8)), lV.lb(lG), lR.push(lV)
		}(lR);
		return lR
	}())
}
self.aiCommand746 = function(kv) {
	0 === kv ? aIA() : 1 !== kv || !cT || 1 !== cT.id || cT.oe < 14 || jC.aKu()
}, aeB(), setTimeout(aIA, 1e4), window.onload = function() {
	aIA()
};